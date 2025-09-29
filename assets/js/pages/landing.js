import { createElement } from "react";

export default () => {
  const leftNews = [
    {
      img: "./assets/img/israel-palestinians-hostages-protest.avif",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    },
    {
      img: "./assets/img/israel-palestinians-usa-rubio.avif",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const mainNews = [
    {
      img: "./assets/img/ketaminedepressiontherapy.avif",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      img: "./assets/img/gettyimages3.avif",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      img: "./assets/img/gettyimages2.avif",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: "./assets/img/gettyimages1.avif",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const rightNews = [
    {
      img: "./assets/img/cnn-opener-final-new.avif",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.",
    },
    {
      img: "./assets/img/ap25272052242183.avif",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      img: "./assets/img/ap25148552807805.avif",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ];

  const leftNewsCard = leftNews.map((news) => createElement("div", { key: news.img }, createElement("img", { src: news.img, alt: news.img, className: "rounded-md" }), createElement("div", {}, news.content)));
  const leftWrapper = createElement("div", { className: "flex flex-col gap-7" }, leftNewsCard);

  const mainNewsCard = mainNews.map((news, index) => {
    let items = [];
    if (index === 0) {
      items.push(createElement("div", { className: "md:col-span-3" }, createElement("img", { src: news.img, alt: news.img, className: "rounded-md" }), createElement("div", {}, news.content)));
    } else {
      items.push(createElement("div", {}, createElement("img", { src: news.img, alt: news.content, className: "rounded-md" }), createElement("div", {}, news.content)));
    }

    return items;
  });
  const mainWrapper = createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 grid-rows-[auto_auto] gap-5 h-max" }, mainNewsCard);

  const rightNewsCard = rightNews.map((news) => createElement("div", { key: news.img }, createElement("img", { src: news.img, alt: news.img, className: "rounded-md" }), createElement("div", {}, news.content)));
  const rightWrapper = createElement("div", { className: "flex flex-col gap-7" }, rightNewsCard);

  return createElement("main", { id: "news-section", className: "grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-3 p-10" }, leftWrapper, mainWrapper, rightWrapper);
};
