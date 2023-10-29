
/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  }else {
    menuBtn.className = "nav-menu";
  }
}
var resetMenuButton = document.getElementById("resetMenuHome");
var resetMenuButton = document.getElementById("resetMenuAbout");
var resetMenuButton = document.getElementById("resetMenuOther");
var resetMenuButton = document.getElementById("resetMenuContact");

resetMenuHome.addEventListener("click", () =>{
    myMenuFunction();
});
resetMenuAbout.addEventListener("click", () =>{
    myMenuFunction();
});
resetMenuOther.addEventListener("click", () =>{
    myMenuFunction();
});
resetMenuContact.addEventListener("click", () =>{
    myMenuFunction();
});

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Software Developer","Web Developer","Backend Developer", "Frontend Developer" ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 60,
  backDelay: 3000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".other-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*Dowload CV */
document.getElementById('download').addEventListener('click', function() {
    var a = document.createElement('a');
    a.href = 'assets/cv/Mario Stojkovski CV.pdf';
    a.download = 'Mario Stojkovski CV.pdf';
    a.click();

    window.URL.revokeObjectURL(a.href);
  });
  document.getElementById('download2').addEventListener('click', function() {
    var a = document.createElement('a');
    a.href = 'assets/cv/Mario Stojkovski CV.pdf';
    a.download = 'Mario Stojkovski CV.pdf';
    a.click();

    window.URL.revokeObjectURL(a.href);
  });
  
/*Redirecting Buttons*/
function openLinkInNewTab(url) {
    window.open(url, '_blank');
}
document.getElementById('openLinkedIn').addEventListener('click', function() {
    var urlToOpen = 'https://www.linkedin.com/in/m-stojkovski/';
    openLinkInNewTab(urlToOpen);
});

document.getElementById('openInstagram').addEventListener('click', function() {
    var urlToOpen = 'https://instagram.com/m_stojkovski';
    openLinkInNewTab(urlToOpen);
});
document.getElementById('openGitHub').addEventListener('click', function() {
    var urlToOpen = 'https://github.com/MarioStojkovski';
    openLinkInNewTab(urlToOpen);
});

document.getElementById('openLinkedInFooter').addEventListener('click', function() {
    var urlToOpen = 'https://www.linkedin.com/in/m-stojkovski/';
    openLinkInNewTab(urlToOpen);
});

document.getElementById('openInstagramFooter').addEventListener('click', function() {
    var urlToOpen = 'https://instagram.com/m_stojkovski';
    openLinkInNewTab(urlToOpen);
});
document.getElementById('openGitHubFooter').addEventListener('click', function() {
    var urlToOpen = 'https://github.com/MarioStojkovski';
    openLinkInNewTab(urlToOpen);
});
document.getElementById('buyCoffee').addEventListener('click', function() {
    var urlToOpen = 'https://www.buymeacoffee.com/mstojkovski';
    openLinkInNewTab(urlToOpen);
});
document.getElementById('buyCoffeeSecond').addEventListener('click', function() {
    var urlToOpen = 'https://www.buymeacoffee.com/mstojkovski';
    openLinkInNewTab(urlToOpen);
});


