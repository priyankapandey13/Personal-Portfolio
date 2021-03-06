console.log("Script loaded");

window.onload = function () {
  // For loader window need to uncomment it later
  // let loaderwindow = document.querySelector("#loader");
  // loaderwindow.classList.add('loader-load');
  // For loader window need to uncomment it later

  // Menu bar options
  let menubarOpen = document.querySelector(".menubar-btn");
  menubarOpen.addEventListener("click", openMenu);

  let menubarClose = document.querySelector(".navigation-close");
  menubarClose.addEventListener("click", closeMenu);

  let home = document.getElementById("header");
  let about = document.getElementById("about");
  let portfolio = document.getElementById("portfolio");
  let contact = document.getElementById("contact");
  let breaker = document.getElementById("breaker");

  document.getElementById("home-link").addEventListener("click", onlyHome);
  document.getElementById("about-link").addEventListener("click", onlyAbout);
  document
    .getElementById("portfolio-link")
    .addEventListener("click", onlyPortfolio);
  document
    .getElementById("contact-link")
    .addEventListener("click", onlyContact);

  let showHome = document.getElementById("home-link-ss");
  showHome.addEventListener("click", onlyHome);

  let showAbout = document.getElementById("about-link-ss");
  showAbout.addEventListener("click", onlyAbout);

  let showPortfolio = document.getElementById("portfolio-link-ss");
  showPortfolio.addEventListener("click", onlyPortfolio);

  let showContact = document.getElementById("contact-link-ss");
  showContact.addEventListener("click", onlyContact);

  function onlyHome() {
    home.style.display = "block";
    about.style.display = "none";
    // blog.style.display="none";
    portfolio.style.display = "none";
    contact.style.display = "none";
    breaker.style.display = "block";
    closeMenu();
  }

  function onlyAbout() {
    home.style.display = "none";
    about.style.display = "block";
    // blog.style.display="none";
    portfolio.style.display = "none";
    contact.style.display = "none";
    breaker.style.display = "block";
    closeMenu();
  }

  function onlyPortfolio() {
    console.log("I am here");

    home.style.display = "none";
    about.style.display = "none";
    // blog.style.display="none";
    portfolio.style.display = "block";
    contact.style.display = "none";
    breaker.style.display = "block";
    closeMenu();
  }

  function onlyContact() {
    home.style.display = "none";
    about.style.display = "none";
    // blog.style.display="none";
    portfolio.style.display = "none";
    contact.style.display = "block";
    breaker.style.display = "block";
    closeMenu();
  }

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $("#navigation-bar").addClass("scrolling");
    } else {
      $("#navigation-bar").removeClass("scrolling");
    }
  });
};

function openMenu() {
  const navigation = document.getElementById("navigation-content");
  navigation.style.transform = "translate(0px)";
  navigation.classList.add("mystyle");
}
function closeMenu() {
  document.getElementById("navigation-content").style.transform =
    "translate(0px, -100%)";
  setTimeout(() => {
    breaker.style.display = "none";
  }, 1200);
}

// Scroll menu

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navigation-bar").classList.add("naviscroll");
  } else {
    document.getElementById("navigation-bar").classList.remove("naviscroll");
  }
}
