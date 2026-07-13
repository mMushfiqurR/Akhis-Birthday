import { CONFIG } from "./config.js";
import { StarEngine } from "./engines/starEngine.js";
import { SceneManager } from "./sceneManager.js";
import { Gallery } from "./components/gallery.js";

const continueButton = document.querySelector("#continueButton");
const heroName = document.querySelector("#heroName");
const heroQuote = document.querySelector("#heroQuote");
const beginButton = document.querySelector("#beginButton");
const memoryContinue =
    document.querySelector("#memoryContinue");

heroName.textContent = CONFIG.herName;
heroQuote.textContent = CONFIG.quote;

new StarEngine("backgroundCanvas");

const sceneManager = new SceneManager();

function updateDaysTogether() {

    const start = new Date(CONFIG.relationshipStarted);

    const today = new Date();

    const difference = today - start;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    document.getElementById("daysTogether").textContent = days;

}

updateDaysTogether();

const galleryContainer = document.getElementById("galleryContainer");

const gallery = new Gallery(
    galleryContainer,
    CONFIG.gallery
);

beginButton.addEventListener("click", () => {

    sceneManager.goTo("story");

});

continueButton.addEventListener("click", () => {

    alert("Gallery scene coming next ❤️");

});
memoryContinue.addEventListener("click", () => {

    alert("Photo Gallery coming next ❤️");

});
const letterText = document.getElementById("letterText");

if (letterText) {
    letterText.textContent = CONFIG.letter;
}
const openLetterButton = document.getElementById("openLetter");
const letterCard = document.querySelector(".letter-card");

console.log("Button:", openLetterButton);
console.log("Letter:", letterCard);

if (openLetterButton && letterCard) {

    console.log("Listener attached");

    openLetterButton.addEventListener("click", () => {

        console.log("Button clicked!");

        letterCard.classList.add("show");

        openLetterButton.style.display = "none";

    });

}
