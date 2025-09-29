import { createElement } from "react";
import navbar from "./components/navbar";
import headline from "./components/headline";
import landing from "./pages/landing";

export default function () {
  const headerWrapper = createElement("header", { className: "flex flex-col gap-10 p-[30px]" }, navbar(), headline());
  return createElement("div", {}, headerWrapper, landing());
}
