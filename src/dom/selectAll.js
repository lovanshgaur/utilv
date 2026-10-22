export function selectAll(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}