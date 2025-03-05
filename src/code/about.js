import coffeeMachine from "../img/coffee-machine.jpg"
import "./about.css"

export const about = (function() {
  function initAboutPage() {
    const content = document.querySelector("#content");

    content.innerHTML =
    `
    <div class="about-container">
      <h2>ABOUT US</h2>
      <img src="${coffeeMachine}">
      <div>
        <p>
          The Cozy Coffee House is your go-to spot for rich, aromatic coffee and a relaxing atmosphere perfect for diving into a good book. At The Cozy Brew, we believe that great coffee isn't just a drink-it's an experience. Our beans are carefully selected from the best local roasters, ground fresh, and brewed with precision to deliver the smoothest, most flavorful cups. Whether you're in the mood for a bold espresso, a creamy latte, or a pour-over, we've got something to satisfy every coffee lover's taste.
        </p>
        <br>
        <p>
          But we're more than just a coffee shop. We're a place to unwind, explore, and enjoy a moment of peace. Our shop is designed with comfort in mind-soft chairs, warm lighting, and cozy corners perfect for reading. We've filled our shelves with a curated selection of books, so whether you're looking to lose yourself in fiction, explore new ideas, or simply enjoy a quiet escape, we've got the perfect read waiting for you.
        </p>
      <div>
    </div>
    `;
  }

  return { initAboutPage };
})();