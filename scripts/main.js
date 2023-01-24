let previousScrollTop = 0;

const handleBodyScroll = (e) => {
  const navBar = document.querySelector("nav");
  const navBarPosition = navBar.getBoundingClientRect();
  const windowScrollY = window.scrollY;

  if (navBarPosition.top === 0 && windowScrollY > 250) {
    navBar.style.transform = "translateY(-40px)";
  }

  if (previousScrollTop < windowScrollY && windowScrollY > 250) {
    navBar.style.transform = "translateY(-40px)";
  } else {
    navBar.style.transform = "translateY(0)";
  }

  previousScrollTop = windowScrollY;
};

window.addEventListener("scroll", handleBodyScroll);

let showMobileSidebar = false;

const toggleIcon = document.querySelector(".toggle_icon");
const logoIcon = document.querySelector(".logo_icon");
const closeIcon = document.querySelector(".close_icon");

const handleToggleIcon = () => {
  const mobileSideBar = document.querySelector(".mobile_sidebar");

  mobileSideBar.classList.toggle("opened_mobile_sidebar");
  setTimeout(() => {
    logoIcon.classList.toggle("closed_logo_icon");
  }, 100);
};

toggleIcon.addEventListener("click", handleToggleIcon);

closeIcon.addEventListener("click", handleToggleIcon);
