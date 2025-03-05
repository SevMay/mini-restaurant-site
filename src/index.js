import "./style.css"
import { home } from "./code/home.js"
import { menu } from "./code/menu.js"
import { about } from "./code/about.js"

const buttons = document.querySelectorAll("nav > button");
const homeButton = buttons[0];
const menuButton = buttons[1];
const aboutButton = buttons[2];

home.initHomePage();

homeButton.addEventListener("click", e => home.initHomePage());
menuButton.addEventListener("click", e => menu.initMenuPage());
aboutButton.addEventListener("click", e => about.initAboutPage());