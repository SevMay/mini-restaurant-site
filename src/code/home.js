import "./home.css"
import { menu } from "./menu.js"
import cofePhoto from "../img/cofe.jpg"
import booksPhoto from "../img/books.png"
import drinksPhoto from "../img/drinks.png"
import foodPhoto from "../img/food.png"

export const home = (function () {
  function initHomePage() {
    const content = document.querySelector("#content");
    content.innerHTML = ``;

    const welcomeContainer = document.createElement("div");
    welcomeContainer.classList.add("container-welcome");
    
    welcomeContainer.innerHTML = 
    `
      <div class="textContainer">
        <h2>For the Coffee & Book Lovers</h2>
        <p>Welcome to The Cozy Coffee House, where great coffee meets a peaceful reading escape. Come in, take a seat, and let the aroma of our coffee and the comfort of our books surround you.</p>
        <button>View Menu</button>
      </div>
      <img src="${cofePhoto}" />
    `;

    const featureContainer = document.createElement("div");
    featureContainer.classList.add("feature-container");
    featureContainer.innerHTML =
    `
      <ul>
        <li>
          <img src="${booksPhoto}" />
          <p>Variety of books for every type of reader</p>
        </li>
        <li>
          <img src="${drinksPhoto}" />
          <p>Every cup of coffee made with care</p>
        </li>
        <li>
          <img src="${foodPhoto}" />
          <p>Baked goods made fresh daily</p>
        </li>
      </ul>
    `;

    const footer = document.createElement("footer");
    footer.innerHTML =
    `
      <div>
        <h3>Location</h3>
        <p>The Cozy Coffee House</p>
        <p>Kharkiv, Ukraine</p>
        <p>66554</p>
      </div>
        
      <div>
        <h3>Hours of Operation</h3>
        <p>8.00 - 21.00 Daily</p>
        </div>
        
      <div>
        <h3>Telephone</h3>
        <p>093-221-6534</p>
      </div>
    `;

    content.appendChild(welcomeContainer);
    content.appendChild(featureContainer);
    content.appendChild(footer);
    
    const menuBtn = document.querySelector(".textContainer button");
    menuBtn.addEventListener("click", e => menu.initMenuPage());
  }

  return { initHomePage };
})();