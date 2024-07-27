// Constants for various elements on the page
const playButton = document.querySelector(".play-again"); // Button to restart the game
const gameBoard = document.querySelector(".game-board"); // Container for the game cards
const shuffleButton = document.querySelector(".shuffle"); // Button to shuffle the cards
const revealButton = document.querySelector(".reveal"); // Button to reveal all cards

// Array of image URLs for the cards

// How many cards can I have? (aka, how many images can I have) Pick one from the following:
// 8, 18, or 32 images
const symbols = [
      "https://hips.hearstapps.com/hmg-prod/images/sunday-dinner-ideas-65e0c007e8edc.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
      "https://foolproofliving.com/wp-content/uploads/2020/05/Easy-Dinner-Recipes.jpg",
      "https://madeitateitlovedit.com/wp-content/uploads/2021/08/Carne-Asada-Nachos-18-scaled-735x1102.jpg",
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/11/Greek-Sheet-Pan-Chicken-Dinner-main-1.jpg",
      "https://www.healthyseasonalrecipes.com/wp-content/uploads/2015/07/grilled-steaks-with-kale-pesto-alt-27-735x1103.jpg",
      "https://www.southernliving.com/thmb/bP8GlPtrJ5BXPV3_e45EWMG_guQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/27176-HIH-SkilletChili_0230_16x9-2000-868ad7fea4e3412d89ac72a21378383c.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-chicken-marsala-1642715952.jpg",
      "https://cdn.vox-cdn.com/thumbor/jXj4f76-nt1URYHN4p9oIAdPbC0=/0x163:1440x917/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24470237/327265918_1537141406779854_5319246903894973824_n.jpeg",
      "https://ww2.kqed.org/app/uploads/sites/24/2015/02/Hu-Tieu-1200.jpg",
      "https://www.savorysweetspoon.com/wp-content/uploads/2023/03/Vietnamese-Fried-Rice-Com-Chien-1x1-1.jpg",
      "https://i.ndtvimg.com/i/2016-04/vietnamese-rolls-625_625x350_71461738215.jpg",
      "https://cdn.vox-cdn.com/thumbor/zh_As26xjB0DU0bx8Bqw6y7rzCA=/0x0:1440x1080/1200x900/filters:focal(605x425:835x655)/cdn.vox-cdn.com/uploads/chorus_image/image/72026362/327265918_1537141406779854_5319246903894973824_n.0.jpeg",
      "https://offloadmedia.feverup.com/secretsingapore.co/wp-content/uploads/2023/07/13200705/Megan-Article-Covers-2023-07-31T152946.500.png",
      "https://cdn-v2.theculturetrip.com/1200x630/wp-content/uploads/2021/07/banh-mi.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTlEfGnebzbV_bKv08qMgxFV7tC4gsl2rsHQ&s",
      "https://assets3.thrillist.com/v1/image/2771730/1000x666/flatten;crop;webp=auto;jpeg_quality=60.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/mnLjFjxYsiqVxYnJJ0dSVg/348s.jpg",
      "https://i.insider.com/5f0c825aaee6a85e9738c65d?width=700",
      "https://www.rochestermazda.com/blogs/2755/wp-content/uploads/2021/01/4_Places_to_Find_the_Best_Chinese_Food_in_Rochester_637467443556401189.png",
      "https://assets.epicurious.com/photos/63b5ba99219501813d153624/1:1/w_2560%2Cc_limit/Stir-Fried-String-Bean-With-Tofu-RECIPE.jpg",
      "https://www.aheadofthyme.com/wp-content/uploads/2021/06/tofu-and-mushroom-stir-fry-683x1024.jpg",
      "https://images.squarespace-cdn.com/content/v1/530286f8e4b0d1c4964d040e/1466655386330-EDZ7WUTXAZ6OGPCFSB06/image-asset.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxxemAEJOOOYTK-BUc6nsKIE338y9U847bQ&s",
      "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1622583451/Vietnamese-Street-Food-Ban-Xeo/Vietnamese-Street-Food-Ban-Xeo.jpg",
      "https://vcdn1-english.vnecdn.net/2022/05/21/foodyuploadapifoodymobileuntit-9911-9008-1653089489.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=VX71xbeQrg0CLcuQi1G9dw",
      "https://images.myguide-cdn.com/content/2/large/street-food-in-vietnam-427453.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wOtUL9CNZDAgQ0oHJMNMSVWeTWvmAYQRQw&s",
      "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_650/v1622728125/The-Best-Food-In-Vietnam-Com-Tam/The-Best-Food-In-Vietnam-Com-Tam.jpg",
      "https://www.indochina.tours/wp-content/uploads/2019/01/street-food-of-banh-trang-tron-in-southern-vietnam.jpg",
      "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2020/10/Blog-photo-size.png",
      "https://www.hanoilocaltour.com/wp-content/uploads/Savory-Banh-Tom-in-West-Lake.jpg",
      "https://i0.wp.com/learningenglishwithoxford.com/wp-content/uploads/2022/03/Copy-of-Unnamed-Design-2.png?fit=1600%2C900&ssl=1"
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
            card.style.height = "calc(52rem /" + `${gridSize}` + ")";
            card.style.width = "calc(52rem /" + `${gridSize}` + ")";
            card.innerHTML = `
                <div class="overlay"></div>
                <img src="${url}" class="image">`; // Set card content with an overlay and an image
            cards.push(card); // Add the card to the cards array
      });

      cards = shuffle(cards);

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

function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
      return array;
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
