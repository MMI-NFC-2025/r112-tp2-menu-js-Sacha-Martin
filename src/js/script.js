const nav = document.querySelector('nav')
const toggle = document.querySelector('button');
toggle.addEventListener("click", () => {
    nav.ariaHidden = false;
    toggle.ariaExpanded = true;
});