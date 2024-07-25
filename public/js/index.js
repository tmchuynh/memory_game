// Constants for various elements on the page
const playButton = document.querySelector(".play-again"); // Button to restart the game
const gameBoard = document.querySelector(".game-board"); // Container for the game cards
const shuffleButton = document.querySelector(".shuffle"); // Button to shuffle the cards
const revealButton = document.querySelector(".reveal"); // Button to reveal all cards

// Array of image URLs for the cards

// How many cards can I have? (aka, how many images can I have) Pick one from the following:
// 8, 18, or 32 images
const symbols = [
      "https://occ-0-116-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf_vkYSzY2EsbRFAOJOS3_ZdreU4YoqzdzVZf-f1CEP9ndmI3705aHteXy3ZD7tLH4YbavoJT3lPK9luZDLgQxhQOBw1tLuBzxFG.jpg?r=b99",
      "https://nashuproar.org/wp-content/uploads/2021/10/Pokemon-Presents.jpg",
      "https://cdn.mos.cms.futurecdn.net/DVg3vj34mtKrKQhpy6z4H-1200-80.png",
      "https://editors.dexerto.com/wp-content/uploads/2021/12/30/sierra-leader-pokemon-go-poliwag-counters.jpg",
      "https://m.economictimes.com/thumb/msid-102431292,width-1200,height-900,resizemode-4,imgsize-45536/pokemon-gos-cresselia-raid-see-weaknesses-how-to-acquire-counters.jpg",
      "https://ftw.usatoday.com/wp-content/uploads/sites/90/2022/01/pokemon-best-starters.jpg?w=1000&h=600&crop=1",
      "https://i0.wp.com/setthetape.com/wp-content/uploads/2020/04/pokemon-the-first-movie-cover.jpg?fit=1200%2C460&ssl=1",
      "https://mktg-assets.tcgplayer.com/content/pokemon/2_21/MST3King%20The%20First%20Movie/ash_emerges.png",
      "https://imgix.ranker.com/list_img_v2/4631/1704631/original/best-grass-pokemon-u1?w=817&h=427&fm=jpg&q=50&fit=crop",
      "https://assetsio.reedpopcdn.com/pokemon_clones.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/04/pokemon-rhydon.jpg",
      "https://cdnb.artstation.com/p/assets/images/images/038/728/519/4k/lime-brin-pokemon-fav-starters.jpg?1623889890",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/01/pokemon-the-first-movie-mewtwo-and-clones.jpg",
      "https://media.thenerdstash.com/wp-content/uploads/2020/08/Pokemon-themed-Mix-Drinks.jpg",
      "https://images.nintendolife.com/ad03f8a9628b9/pokemon-television-series.900x.jpg",
      "https://upload.wikimedia.org/wikipedia/en/9/92/Pok%C3%A9mon_episode_1_screenshot.png",
      "https://i.ytimg.com/vi/D-bckvBvtQU/maxresdefault.jpg",
      "https://i0.wp.com/www.animefeminist.com/wp-content/uploads/2019/10/Pokemon3-107.png?resize=768%2C567&ssl=1"
];

let cards = []; // Array to hold shuffled card elements
let flippedCards = []; // Array to track currently flipped cards
let matchedCards = []; // Array to track cards that have been matched
let gridSize; // Will be calculated based on number of images
const numImages = symbols.length; // Number of unique images

// Function to create and shuffle cards
function createCards() {
      resetGame(); // Clear the game board before creating new cards

      // Determine grid size based on the number of images
      gridSize = Math.sqrt(numImages * 2); // Grid size calculation (assumes a perfect square)

      // Ensure numImages * 2 is a perfect square
      if (gridSize % 1 !== 0) {
            console.log("Number of images must be a perfect square when doubled."); // Log an error if the grid size is not a perfect square
            return;
      }

      // Create image URLs by duplicating each URL
      const pairedUrls = symbols.flatMap((url) => [url, url]);

      // Create card elements for each image URL
      pairedUrls.forEach((url) => {
            const card = document.createElement("div"); // Create a new div element for each card
            card.classList.add("card"); // Add 'card' class for styling
            card.innerHTML = `
                <div class="overlay"></div>
                <img src="${url}" class="image">`; // Set card content with an overlay and an image
            cards.push(card); // Add the card to the cards array
      });

      cards.sort(() => Math.random() - 0.5); // Shuffle the cards randomly

      // Set grid layout based on the grid size
      gameBoard.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; // Set the number of columns
      gameBoard.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`; // Set the number of rows

      // Adding the event listener to each card
      cards.forEach((card) => {
            card.addEventListener("click", flipCard); // Add click event listener to each card
            gameBoard.appendChild(card); // Append card to the game board
      });

      if (playButton) {
            playButton.style.display = "none"; // Hide the play button while playing
      }
}

// Function to handle card flipping
function flipCard() {
      if (
            flippedCards.length < 2 && // Allow flipping if fewer than 2 cards are currently flipped
            !flippedCards.includes(this) && // Prevent flipping the same card again
            !matchedCards.includes(this) // Prevent flipping matched cards
      ) {
            const overlay = this.querySelector(".overlay"); // Get the overlay element of the clicked card
            const image = this.querySelector(".image"); // Get the image element of the clicked card

            if (overlay) {
                  overlay.style.opacity = 0; // Hide the overlay
            }
            if (image) {
                  image.style.display = "block"; // Show the image
            }
            flippedCards.push(this); // Add the clicked card to the flippedCards array

            if (flippedCards.length === 2) {
                  setTimeout(checkMatch, 300); // Delay to show the second card before checking for a match
            }
      }
}

// Function to check if flipped cards match
function checkMatch() {
      const [card1, card2] = flippedCards; // Get the two flipped cards
      const image1 = card1.querySelector(".image").src; // Get the source of the image of the first card
      const image2 = card2.querySelector(".image").src; // Get the source of the image of the second card

      if (image1 === image2) {
            // Check if the images match
            card1.classList.add("matched"); // Add 'matched' class to the first card
            card2.classList.add("matched"); // Add 'matched' class to the second card
            matchedCards.push(card1, card2); // Add the matched cards to the matchedCards array
      } else {
            setTimeout(() => {
                  card1.querySelector(".overlay").style.opacity = 1; // Show the overlay on the first card
                  card1.querySelector(".image").style.display = "none"; // Hide the image on the first card
                  card2.querySelector(".overlay").style.opacity = 1; // Show the overlay on the second card
                  card2.querySelector(".image").style.display = "none"; // Hide the image on the second card
            }, 250); // Delay to briefly show mismatched cards before hiding them
      }
      flippedCards = []; // Clear the flippedCards array
      checkAllCardsFlipped(); // Check if all cards have been matched
}

// Function to check if all cards have been matched
function checkAllCardsFlipped() {
      if (matchedCards.length === cards.length) {
            // Check if the number of matched cards equals the total number of cards
            playButton.style.display = "flex"; // Show the play button to restart the game
      }
}

// Function to reveal all cards
function revealCards() {
      cards.forEach((card) => {
            const overlay = card.querySelector(".overlay"); // Get the overlay element
            const image = card.querySelector(".image"); // Get the image element

            if (overlay) {
                  overlay.style.opacity = 0; // Hide the overlay
            }
            if (image) {
                  image.style.display = "block"; // Ensure the image is displayed
            }
      });
      playButton.style.display = "flex"; // Show the play button to restart the game
}

// Initialize the game by creating cards
createCards();

// Function to reset the game
function resetGame() {
      gameBoard.innerHTML = ""; // Clear the game board content

      cards = []; // Reset the cards array
      matchedCards = []; // Reset the matched cards array
}

// Set up event listener for the play button to restart the game
playButton.addEventListener("click", () => {
      createCards(); // Create and shuffle new cards
});

// Set up event listener for the shuffle button to shuffle the cards
shuffleButton.addEventListener("click", () => {
      createCards(); // Create and shuffle new cards
});

// Set up event listener for the reveal button to reveal all cards
revealButton.addEventListener("click", () => {
      revealCards(); // Reveal all cards
});