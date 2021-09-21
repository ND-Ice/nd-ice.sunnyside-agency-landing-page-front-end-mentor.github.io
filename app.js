const toggler = document.querySelector(".nav__toggler");
const menu = document.querySelector(".nav__lists");

toggler.addEventListener("click", () => {
  menu.classList.toggle("nav__lists--active");
  toggler.classList.toggle("nav__toggler--active");
});
