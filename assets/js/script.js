let link = document.querySelectorAll(".link");

const loadbg = (target) => {
  let bgurl = "";
  switch (target) {
    case "":
      bgurl = "bgcoffe01";
      break;
    case "index.html":
      bgurl = "bgcoffe01";
      break;
    case "product.html":
      bgurl = "bgcoffe02";
      break;
    case "contact.html":
      bgurl = "bgcoffe03";
      break;
  }
  return document.documentElement.style.setProperty(
    "--bg_img",
    `url(../images/${bgurl}.webp)`
  );
};
const setlink = () => {
  let url = new String(document.location).split("/");

  switch (url[3]) {
    case "":
      link[0].classList.add("active");
      loadbg(url[3]);
      break;
    case "index.html":
      link[0].classList.add("active");
      loadbg(url[3]);
      break;
    case "product.html":
      link[1].classList.add("active");
      loadbg(url[3]);
      break;
    case "contact.html":
      link[2].classList.add("active");
      loadbg(url[3]);
      break;
  }
};
window.addEventListener("load", setlink);
