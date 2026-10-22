import { select, selectAll } from "../src/index.js";

const heading = select("h1");
const buttons = selectAll(".demo-button");

console.log(heading);
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`Clicked: ${button.textContent}`);
  });
});