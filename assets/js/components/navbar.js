import { createElement } from "react";

export default () => {
  const leftNav = ["US", "World", "Politics", "Business", "Health", "Entertainment", "Style", "Travel", "Sport", "More"].map((item) =>
    createElement(
      "li",
      {
        className: "list-none",
        key: item.toLowerCase(),
      },
      item
    )
  );

  const rightNav = ["Watch", "Listen", "Live TV", "Business"]
    .map((item) => ({
      navMenu: item,
      icon: "",
    }))
    .map((item) =>
      createElement(
        "li",
        {
          className: "list-none",
          key: item.navMenu.toLowerCase(),
        },
        createElement("div", {}, createElement("i", { className: item.icon }), item.navMenu)
      )
    );

  const navbar = createElement(
    "nav",
    {
      className: "flex justify-between items-center border-b-[2px] p-3",
    },
    createElement(
      "div",
      {className: "flex items-center gap-7"},
      createElement("img", { src: "./assets/img/pngwing.com.png", alt: "logo cnn", className: "w-20 h-10" }),
      createElement(
        "ul",
        {
          className: "flex gap-5 ",
        },
        leftNav
      )
    ),
    createElement(
      "ul",
      {
        className: "flex gap-5 ",
      },
      rightNav
    )
  );

  return createElement(
    "section",
    {
      id: "navbar-section",
      className: "",
    },
    navbar
  );
};
