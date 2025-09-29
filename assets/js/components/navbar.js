import { createElement } from "react";

export default () => {
  const leftNav = ["US", "World", "Politics", "Business", "Health", "Entertainment", "Style", "Travel", "Sport", "More"].map((item) =>
    createElement(
      "li",
      {
        className: "list-none cursor-pointer",
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
          className: "list-none cursor-pointer",
          key: item.navMenu.toLowerCase(),
        },
        createElement("div", {}, createElement("i", { className: item.icon }), item.navMenu)
      )
    );

  const navbar = createElement(
    "nav",
    {
      className: "flex justify-between p-5 items-center border-b-[2px] fixed top-0 bg-white z-2 w-[calc(100%-60px)] ",
    },
    createElement(
      "div",
      { className: "flex items-center gap-7" },
      createElement("img", { src: "/img/pngwing.com.png", alt: "logo cnn", className: "w-20 h-10 cursor-pointer" }),
      createElement(
        "ul",
        {
          className: "hidden md:flex gap-5 ",
        },
        leftNav
      )
    ),
    createElement(
      "ul",
      {
        className: "hidden md:flex gap-5",
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
