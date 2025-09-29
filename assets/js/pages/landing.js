import { createElement } from "react";

export default () => {
  const leftNews = [
    {
      img: "./assets/img/israel-palestinians-hostages-protest.avif",
      title: "Trump upbeat about ending Gaza war as 21-point peace plan takes shape",
      content:
        "The Trump administration has proposed a 21-point Gaza peace plan that calls for all hostages held by Hamas to be released within 48 hours of an agreement and sets out a roadmap for Gaza once the war ends, according to a source familiar with the proposal.",
    },
    {
      img: "./assets/img/israel-palestinians-usa-rubio.avif",
      title: "From diplomacy to soccer, Israel is becoming a pariah on the global stage",
      content: "Israel is becoming increasingly isolated on the world stage as the war and humanitarian crisis in Gaza continue, with the backlash seeping into economic, cultural and sporting arenas.",
    },
  ];

  const mainNews = [
    {
      img: "./assets/img/gettyimages3.avif",
      title: "Trump to meet Netanyahu at White House as government shutdown looms",
      content:
        "Netanyahu meeting: President Donald Trump is meeting with Israeli Prime Minister Benjamin Netanyahu today. The visit comes as Israel appears ever more isolated on the world stage, with backlash over the war seeping into economic, cultural and sporting arenas.",
    },
    {
      img: "./assets/img/gettyimages-2237635076.webp",
      title: "How the mass shooting and a devastating fire unfolded at a Michigan church",
      content:
        "Far below the piercing spires atop every Church of Jesus Christ of Latter-day Saints chapel is a small sign beckoning those who may want to come in. “Visitors welcome” messages are part of the uniform of meeting houses, standardized by the LDS church’s governing voices and serving as a testament to the faith’s robust evangelizing efforts.",
    },
    {
      img: "./assets/img/gettyimages-2227954844.avif",
      title: "McDonald’s is bringing back Monopoly after a decade — with a high-tech twist",
      content:
        "New York — McDonald’s is rebooting a fan-favorite game after a decade in an effort to spur sales. Once a cultural phenomenon, and even the subject of scandal, Monopoly is back. The promotion is returning to US restaurants on October 6 for a limited time, but not in the way many of us remember. The physical board to track peeled-off pieces isn’t coming back. Rather, the game is getting a digital makeover that is largely played in the McDonald’s app for registered members of its loyalty program.",
    },
    {
      img: "./assets/img/gettyimages-2237925094.avif",
      title: "Rory McIlroy and Team Europe get the last laugh after a weekend of abuse from Bethpage Black’s fans",
      content:
        "Farmingdale, New York — After a weekend of absolute bedlam at Bethpage, the dust is settling on an extraordinary Ryder Cup competition. The headline is that Europe pulled off a stunning victory on foreign soil, a win that was at times breathtaking and breathless, exhilarating and excruciating in equal measure.",
    },
  ];

  const rightNews = [
    {
      img: "./assets/img/cnn-opener-final-new.avif",
      title: "Exclusive: Report reveals hidden reality of child marriage. Three girls share the impact on their lives",
      content:
        "Since 17-year-old Rehana was a child, she dreamt of supporting her family. An only child to parents struggling to make ends meet in Bangladesh, she says, “I always thought, I have no brother, who will look after my parents?” She had wanted to take on that responsibility herself, but at 14, her ambitions were put on hold when a powerful family in the community proposed marriage.",
    },
    {
      img: "./assets/img/ap25272052242183.avif",
      title: "Bad Bunny to headline Super Bowl LX halftime show",
      content: "Puerto Rican superstar Bad Bunny is taking the biggest stage in football. The musician, who recently wrapped a residency in Puerto Rico, was announced as the Super Bowl LX halftime show performer on Sunday.",
    },
    {
      img: "./assets/img/ap25148552807805.avif",
      title: "Dolly Parton postpones Las Vegas concerts due to ‘health challenges’",
      content: "Dolly Parton won’t be lighting up the Las Vegas Strip this December after revealing to fans that “some health challenges” are forcing her to postpone her residency in the city.",
    },
  ];

  const leftNewsCard = leftNews.map((news) =>
    createElement("div", { key: news.img }, createElement("img", { src: news.img, alt: news.img, className: "rounded-md" }), createElement("div", {}, createElement("div", { className: "font-bold text-xl" }, news.title), news.content))
  );
  const leftWrapper = createElement("div", { className: "flex flex-col gap-7" }, leftNewsCard);

  const mainNewsCard = mainNews.map((news, index) => {
    let items = [];
    if (index === 0) {
      items.push(
        createElement(
          "div",
          { className: "md:col-span-3" },
          createElement("img", { src: news.img, alt: news.img, className: "rounded-md" }),
          createElement("div", {}, createElement("div", { className: "font-bold text-3xl" }, news.title), news.content)
        )
      );
    } else {
      items.push(createElement("div", {}, createElement("img", { src: news.img, alt: news.content, className: "rounded-md" }), createElement("div", {}, createElement("div", { className: "font-bold text-xl" }, news.title), news.content)));
    }

    return items;
  });
  const mainWrapper = createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 grid-rows-[auto_auto] gap-5 h-max" }, mainNewsCard);

  const rightNewsCard = rightNews.map((news, index) => {
    let items = [];
    if (index === 0) {
      items.push(
        createElement("div", { key: news.img }, createElement("img", { src: news.img, alt: news.img, className: "rounded-md" }), createElement("div", {}, createElement("div", { className: "font-bold text-xl" }, news.title), news.content))
      );
    } else {
      items.push(
        createElement(
          "div",
          { key: news.img, className: "flex flex-col md:flex-row gap-5" },
          createElement("img", { src: news.img, alt: news.img, className: "rounded-md md:w-50 md:h-20" }),
          createElement("div", {}, createElement("div", { className: "font-bold text-xl" }, news.title), createElement("span", { className: "md:hidden" }, news.content))
        )
      );
    }
    return items;
  });
  const rightWrapper = createElement("div", { className: "flex flex-col gap-7" }, rightNewsCard);

  return createElement("main", { id: "news-section", className: "grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-3 p-10" }, leftWrapper, mainWrapper, rightWrapper);
};
