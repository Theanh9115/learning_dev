let container_div = document.querySelector(".container");

let grid_size = 16;

for (let i = 0; i < grid_size * grid_size; i++){
    let child_div = document.createElement("div");
    child_div.classList.add("child")
    container_div.appendChild(child_div);
    container_div.setAttribute("style", `grid-template-columns: repeat(${grid_size}, 1fr); grid-template-rows: repeat(${grid_size}, 1fr)`)
}

let setting_btn = document.querySelector("#setting-button");
setting_btn.addEventListener("click", function(){
    grid_size = Number(prompt("How many number of square per side?"));
    console.log(grid_size);
    if (grid_size > 100){
        grid_size = 16;
    }
    else {
        // Clear and reassign
        container_div.replaceChildren();
        for (let i = 0; i < grid_size * grid_size; i++){
            let child_div = document.createElement("div");
            child_div.classList.add("child")
            container_div.appendChild(child_div);
        }
        container_div.setAttribute("style", `grid-template-columns: repeat(${grid_size}, 1fr); grid-template-rows: repeat(${grid_size}, 1fr)`)
    }
    console.log(container_div.querySelectorAll("div").length);
});




