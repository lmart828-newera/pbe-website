const KEYWORDS = new Set([
  "associatedtype",
  "borrowing",
  "class",
  "consuming",
  "deinit",
  "enum",
  "extension",
  "fileprivate",
  "func",
  "import",
  "init",
  "inout",
  "internal",
  "let",
  "nonisolated",
  "open",
  "operator",
  "precedencegroup",
  "private",
  "protocol",
  "public",
  "rethrows",
  "static",
  "struct",
  "subscript",
  "typealias",
  "var",
  "break",
  "case",
  "catch",
  "continue",
  "default",
  "defer",
  "do",
  "else",
  "fallthrough",
  "for",
  "guard",
  "if",
  "in",
  "repeat",
  "return",
  "switch",
  "where",
  "while",
  "as",
  "false",
  "is",
  "nil",
  "self",
  "super",
  "true",
  "try",
  "throws",
  "async",
  "await",
  "throw",
  "Any",
  "Self",
]);

const TOKEN_RE =
  /(\/\/.*$|"(?:\\.|[^"\\])*"|try[!?]?|\d[\d_]*\.\d[\d_]*|\d[\d_]*\b|[A-Za-z_][A-Za-z0-9_]*|\s+|.)/g;

function classify(text) {
  if (text.startsWith("//") || text.startsWith("/*")) {
    return "comment";
  }
  if (text.startsWith("\"")) {
    return "string";
  }
  if (/^try[!?]?$/.test(text) || KEYWORDS.has(text)) {
    return "keyword";
  }
  if (/^\d/.test(text)) {
    return "number";
  }
  if (/^[A-Z]/.test(text)) {
    return "type";
  }
  return "plain";
}

function tokenizeLine(line) {
  if (!line) {
    return [];
  }

  const tokens = [];
  TOKEN_RE.lastIndex = 0;
  let match;
  while ((match = TOKEN_RE.exec(line))) {
    tokens.push({ kind: classify(match[0]), text: match[0] });
  }
  return tokens;
}

export function tokenizeSwift(code) {
  const lines = String(code).split("\n").map(tokenizeLine);
  const rebuilt = lines.map((line) => line.map((token) => token.text).join("")).join("\n");
  if (rebuilt !== code) {
    return String(code).split("\n").map((text) => (text ? [{ kind: "plain", text }] : []));
  }
  return lines;
}
