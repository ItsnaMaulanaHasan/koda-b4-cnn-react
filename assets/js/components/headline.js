import { createElement } from "react";

export default () => {
  const listHeadline = ["Israel’s isolation deepens", "Trump’s war on the arts", "Prince William", "Versace’s new era", "Tekken", "Female cabbies in Mexico City", "Selena Gomez weds Benny Blanco"];

  const createListHeadline = listHeadline.map((item, index) => {
    if (index < listHeadline.length - 1) {
      return [createElement("li", { className: "list-none text-sm inline-block w-max", key: item }, item), createElement("span", {}, "|")];
    } else {
      return createElement("li", { className: "list-none text-sm inline-block w-max", key: item }, item);
    }
  });

  return createElement("div", { id: "headline", className: "flex justify-center items-center overflow-x-auto whitespace-nowrap w-full overflow-y-hidden" }, createElement("ul", { className: "flex gap-2 items-center" }, createListHeadline));
};
