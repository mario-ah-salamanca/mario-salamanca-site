import { remark } from "remark";
import remarkHtml from "remark-html";

type ExtractedTable = {
  token: string;
  html: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderTableCell(value: string) {
  return escapeHtml(value.trim()).replace(
    /\*\*([^*]+)\*\*/g,
    "<strong>$1</strong>",
  );
}

function splitTableRow(row: string) {
  return row
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isTableSeparator(row: string) {
  const cells = splitTableRow(row);

  return (
    cells.length > 0 &&
    cells.every((cell) => /^:?-{3,}:?$/.test(cell.replace(/\s+/g, "")))
  );
}

function renderTable(rows: string[]) {
  const [headerRow, , ...bodyRows] = rows;
  const headers = splitTableRow(headerRow);

  const headerHtml = headers
    .map((header) => `<th>${renderTableCell(header)}</th>`)
    .join("");

  const bodyHtml = bodyRows
    .map((row) => {
      const cells = splitTableRow(row)
        .map((cell) => `<td>${renderTableCell(cell)}</td>`)
        .join("");

      return `<tr>${cells}</tr>`;
    })
    .join("");

  return `<table><thead><tr>${headerHtml}</tr></thead><tbody>${bodyHtml}</tbody></table>`;
}

function extractTables(markdown: string) {
  const lines = markdown.split("\n");
  const output: string[] = [];
  const tables: ExtractedTable[] = [];
  let index = 0;

  while (index < lines.length) {
    const currentLine = lines[index];
    const nextLine = lines[index + 1];

    if (
      currentLine?.trim().startsWith("|") &&
      nextLine?.trim().startsWith("|") &&
      isTableSeparator(nextLine)
    ) {
      const tableRows = [currentLine, nextLine];
      index += 2;

      while (lines[index]?.trim().startsWith("|")) {
        tableRows.push(lines[index]);
        index += 1;
      }

      const token = `RESUME_TABLE_${tables.length}`;
      tables.push({ token, html: renderTable(tableRows) });
      output.push(token);
      continue;
    }

    output.push(currentLine);
    index += 1;
  }

  return {
    markdown: output.join("\n"),
    tables,
  };
}

function normalizeMarkdown(markdown: string) {
  return markdown
    .replace(/\[([\s\S]*?)\]\{[^}]+\}/g, "$1")
    .replace(/!\[[^\]]*]\([^)]+\)\{[^}]*\}/g, "")
    .replace(/\{#[^}]+\}/g, "")
    .replace(/\{[^}]*\}/g, "")
    .replace(/^# /gm, "## ")
    .replace(/\\\|/g, "|");
}

async function renderMarkdown(markdown: string) {
  const extracted = extractTables(normalizeMarkdown(markdown));
  const file = await remark()
    .use(remarkHtml)
    .process(extracted.markdown);

  return extracted.tables.reduce(
    (html, table) => html.replace(`<p>${table.token}</p>`, table.html),
    String(file),
  );
}

type ResumeMarkdownProps = {
  markdown: string;
};

export async function ResumeMarkdown({ markdown }: ResumeMarkdownProps) {
  const html = await renderMarkdown(markdown);

  return (
    <div
      className="resume-markdown grid gap-6 text-base leading-8 text-[var(--color-muted)]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
