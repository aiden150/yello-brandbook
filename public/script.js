const directionCopy = {
  1: {
    title: "Direction 1 - Radical Fellow",
    summary:
      "The most expressive route. Loud confidence, handwritten energy, and the clearest sense of a brand that wants to stand out in a crowded investor-tech space.",
    why:
      "This route puts motion and personality first. It works well if the brand needs to feel more founder-led, culturally sharp, and undeniably visible.",
    image: "/direction-1.png",
    message1: "Hello, Yello, Radical Fellow.",
    message2: "A bold front door for a serious platform.",
    message3: "Color as identity, not decoration.",
  },
  2: {
    title: "Direction 2 - Data That's Mellow",
    summary:
      "The most product-native route. Quiet, structured, and analytical, with room for intelligence, automation, and trust to lead the story.",
    why:
      "This route is best if the platform should feel like an operating layer rather than a campaign. It is calm, technical, and highly legible.",
    image: "/direction-2.png",
    message1: "Hello, Yello, Data that's Mellow.",
    message2: "Clean hierarchy for complex workflows.",
    message3: "Best fit for LP and operator audiences.",
  },
  3: {
    title: "Direction 3 - Smarter Portfolio",
    summary:
      "The warmest and most premium route. It balances confidence and restraint, which makes the brand feel credible without becoming cold.",
    why:
      "This route turns the platform into a trusted intelligence partner. It keeps the yellow identity but softens the system for a polished institutional feel.",
    image: "/direction-3.png",
    message1: "Hello, Yello, Smarter Portfolio.",
    message2: "Connected Data, Compounding Intelligence.",
    message3: "One source of truth across the lifecycle.",
  },
};

const grid = document.querySelector("#direction-grid");
const cards = Array.from(document.querySelectorAll(".direction-card"));
const selectedTitle = document.querySelector("#selected-title");
const selectedSummary = document.querySelector("#selected-summary");
const selectedWhy = document.querySelector("#selected-why");
const selectedImage = document.querySelector("#selected-image");
const message1 = document.querySelector("#selected-message-1");
const message2 = document.querySelector("#selected-message-2");
const message3 = document.querySelector("#selected-message-3");

function setDirection(direction) {
  const content = directionCopy[direction];
  if (!content) {
    return;
  }

  cards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.direction === String(direction));
  });

  selectedTitle.textContent = content.title;
  selectedSummary.textContent = content.summary;
  selectedWhy.textContent = content.why;
  selectedImage.src = content.image;
  message1.textContent = content.message1;
  message2.textContent = content.message2;
  message3.textContent = content.message3;
}

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".direction-card");
  if (!card) {
    return;
  }

  setDirection(card.dataset.direction);
});

setDirection(3);
