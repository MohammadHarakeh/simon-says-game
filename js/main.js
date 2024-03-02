window.addEventListener("load", function () {
  const play = document.getElementById("play");
  const info = document.getElementById("info");
  const btnPlay = document.getElementById("play");
  const board = document.querySelector(".board");
  const tiles = document.querySelectorAll(".tile");

  const colors = ["green", "red", "blue", "yellow"];
  const audioFiles = {
    blue: "sounds/blue.mp3",
    red: "sounds/red.mp3",
    yellow: "sounds/yellow.mp3",
    green: "sounds/green.mp3",
    gameOver: "sounds/game-over.wav",
    gameWin: "sounds/game-win.wav",
    wrong: "sounds/wrong.mp3",
  };
  let randomColorIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomColorIndex];

  function lightUpTile(color) {
    tiles.forEach((tile) => {
      if (tile.classList.contains(color)) {
        tile.style.opacity = "1";

        const audio = new Audio(audioFiles[color]);
        audio.play();

        setTimeout(() => {
          tile.style.opacity = "0.35";
          tile.addEventListener("mouseenter", function () {
            tile.style.opacity = "1";
          });
          tile.addEventListener("mouseleave", function () {
            tile.style.opacity = "35%";
          });
        }, 700);
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
        const audio = new Audio(audioFiles.wrong);
        audio.play();
      }
    });
  });
});
