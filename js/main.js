window.addEventListener("load", function () {
  const play = document.getElementById("play");
  const info = document.getElementById("info");
  const btnPlay = document.getElementById("play");
  const board = document.querySelector(".board");
  const tiles = document.querySelectorAll(".tile");

  const colors = ["green", "red", "blue", "yellow"];
  let randomColorIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomColorIndex];

  function lightUpTile(color) {
    tiles.forEach((tile) => {
      if (tile.classList.contains(color)) {
        // If the tile has the specified color, light it up
        tile.style.opacity = "1";

        setTimeout(() => {
          tile.style.opacity = "0.35"; // 35% opacity
        }, 700); // Adjust the time according to your preference
      }
    });
  }

  play.addEventListener("click", function () {
    info.textContent = "Playing Simon Says";
    info.style.marginLeft = "7%";
    btnPlay.style.visibility = "hidden";

    board.style.pointerEvents = "all";
    board.style.cursor = "pointer";

    console.log(randomColor);

    lightUpTile(randomColor);
  });

  tiles.forEach((tile) => {
    tile.addEventListener("click", function () {
      if (tile.classList.contains(randomColor)) {
        console.log("Correct");
      } else {
        console.log("Wrong");
      }
    });
  });
});
