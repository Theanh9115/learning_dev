// increase an opacity of a childdiv
function increaseOpacity(childDiv) {
  console.log("test test");
  let opacity = Number(childDiv.style.opacity) || 0;
  if (opacity < 1) {
    childDiv.style.opacity = opacity + 0.1;
  }
}

// create grids with size for a container
function createGrids(containerDiv, gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    let childDiv = document.createElement("div");
    childDiv.classList.add("child");
    containerDiv.appendChild(childDiv);
    containerDiv.setAttribute(
      "style",
      `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)`,
    );
    childDiv.addEventListener("mouseenter", () => increaseOpacity(childDiv));
  }
}

// Main
let containerDiv = document.querySelector(".container");

// create default grids
createGrids(containerDiv, 16);

let settingBtn = document.querySelector("#setting-button");
settingBtn.addEventListener("click", function () {
  gridSize = Number(prompt("How many number of square per side?"));
  console.log(gridSize);
  if (gridSize > 100) {
    gridSize = 16;
  } else {
    // Clear and reassign
    containerDiv.replaceChildren();
    createGrids(containerDiv, gridSize);
  }
  console.log(containerDiv.querySelectorAll("div").length);
});
