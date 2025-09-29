import { createElement } from "react";

export default () => {
  const listHeadline = ["Israel’s isolation deepens", "Trump’s war on the arts", "Prince William", "Versace’s new era", "Tekken", "Female cabbies in Mexico City", "Selena Gomez weds Benny Blanco"];

  const createListHeadline = listHeadline.map((item, index) => {
    if (index < listHeadline.length - 1) {
      return [createElement("li", { className: "list-none text-sm cursor-pointer  whitespace-nowrap", key: item }, item), createElement("span", { className: "text-gray-400 mx-2" }, "|")];
    } else {
      return createElement("li", { className: "list-none text-sm cursor-pointer whitespace-nowrap", key: item }, item);
    }
  });

  return createElement(
    "div",
    { id: "headline", className: "hidden md:flex justify-center items-center overflow-x-auto w-full overflow-y-hidden mt-10 border-box" },
    createElement("ul", { className: "flex gap-2 items-center" }, createListHeadline)
  );
};
