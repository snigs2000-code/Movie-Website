const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;

  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      const currentTransform = parseInt(
        getComputedStyle(movieLists[i]).transform.split(",")[4]
      );
      movieLists[i].style.transform = `translateX(${currentTransform - 300}px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

document.getElementById("dropdown-icon").addEventListener("click", function () {
  toggleDropdown("dropdown-menu");
});
function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  var allDropdowns = document.querySelectorAll(".dropdown");

  // Close all dropdowns
  allDropdowns.forEach(function (element) {
    if (element.id !== dropdownId) {
      element.style.display = "none";
    }
  });

  // Toggle the selected dropdown
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}
function searchMovies() {
  // Get the value of the search input
  var searchValue = document.getElementById("search-input").value;

  // Perform actions based on the search value (e.g., fetch data, filter results, etc.)
  // Example:
  console.log("Search value:", searchValue);
  // You can replace the console.log with actual search functionality

  // Clear the search input after searching
  document.getElementById("search-input").value = "";
}
