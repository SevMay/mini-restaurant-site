import "./menu.css"
import coffeBeansImg from "../img/coffee-beans.png"
import flouraImg from "../img/floura.png"
import vaseImg from "../img/vase.png"
import coffeeCupImg from "../img/coffee-cup.png"
import cupImg from "../img/cup.png"

export const menu = (function() {
  function initMenuPage() {
    const content = document.querySelector("#content");
    content.innerHTML = 
    `
    <div class="menu-container">
      <img id="beans" src="${coffeBeansImg}">
      <img id="floura" src="${flouraImg}">
      <img id="vase" src="${vaseImg}">
      <img id="coffee-cup" src="${coffeeCupImg}">
      <img id="cup" src="${cupImg}">
    
      <div class="menu-container__text">
        <div class="menu-list-container">
          <h3>ESPRESSO</h3>
            <div class="menu-list">
              <ul>
                <li>Americano</li>
                <li>Cappuccino</li>
                <li>Espresso Ice Shaken</li>
                <li>Coffee Latte</li>
                <li>Caramel Macchiato</li>
                <li>Mint Chocolate</li>
                <li>Mocha Latte</li>
                <li>Choco Coffee</li>
              </ul>
    
              <ul>
                <li>$ 3.0</li>
                <li>$ 3.2</li>
                <li>$ 3.5</li>
                <li>$ 4.2</li>
                <li>$ 4.5</li>
                <li>$ 5.5</li>
                <li>$ 3.8</li>
                <li>$ 6.0</li>
              </ul>
          </div>
        </div>
          
        <div class="menu-list-container">
          <h3>NON-COFFEE</h3>
          <div class="menu-list">
            <ul>
              <li>Caramel</li>
              <li>Ice Choco Jelly</li>
              <li>Cookies and Cream</li>
              <li>Hazelnut Mocha</li>
              <li>Matcha Cream</li>
              <li>Mint Chocolate Chip</li>
              <li>Strawberry Cream</li>
              <li>Vanilla Bean</li>
            </ul>
    
            <ul>
              <li>$ 3.4</li>
              <li>$ 2.2</li>
              <li>$ 1.5</li>
              <li>$ 3.7</li>
              <li>$ 1.3</li>
              <li>$ 2.5</li>
              <li>$ 5.3</li>
              <li>$ 6.2</li>
            </ul>
          </div>
        </div>

        <div class="menu-list-container">
          <h3>SNACKS</h3>
          <div class="menu-list">
            <ul>
              <li>French Fries</li>
              <li>Toast</li>
              <li>Salad</li>
            </ul>
    
            <ul>
              <li>$ 5.2</li>
              <li>$ 4.1</li>
              <li>$ 2.4</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    `;
  }

  return { initMenuPage };
})();