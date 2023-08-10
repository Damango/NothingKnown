import "./style.css";
import anime from "animejs";
const wrapper = document.getElementById("tiles");

let columns = 0,
	rows = 0,
	toggled = false;

const toggle = () => {
	toggled = !toggled;

	document.body.classList.toggle("toggled");
};

const handleOnClick = (index) => {
	toggle();

	anime({
		targets: ".tile",
		opacity: toggled ? 0 : 1,
		delay: anime.stagger(30, {
			grid: [columns, rows],
			from: index,
		}),
	});
};

const createTile = (index) => {
	const tile = document.createElement("div");

	tile.classList.add("tile");

	tile.style.opacity = toggled ? 0 : 1;

	tile.onclick = (e) => handleOnClick(index);

	return tile;
};

const createTiles = (quantity) => {
	Array.from(Array(quantity)).map((tile, index) => {
		wrapper.appendChild(createTile(index));
	});
};

const createGrid = () => {
	wrapper.innerHTML = "";
	const tilesContainer = document.querySelector(".tiles-container");

	const size = tilesContainer > 800 ? 100 : 50;

	columns = Math.floor(tilesContainer.clientWidth / size);
	rows = Math.floor(tilesContainer.clientHeight / size);

	wrapper.style.setProperty("--columns", columns);
	wrapper.style.setProperty("--rows", rows);

	createTiles(columns * rows);
};

createGrid();

window.onresize = () => createGrid();

window.addEventListener("load", (event) => {
	setTimeout(() => {
		handleOnClick(0);
	}, 500);

	setTimeout(() => {
		anime({
			targets: ".tiles-title",
			translateY: "-300",
			easing: "easeInOutExpo",
		});
	}, 1500);

	setTimeout(() => {
		anime({
			targets: ".tab",
			translateY: 10,
			opacity: 1,
			delay: anime.stagger(100, { start: 500 }), // delay starts at 500ms then increase by 100ms for each elements.
		});
	}, 1700);

	setTimeout(() => {
		anime({
			targets: ".button-text",

			opacity: 1,
			easing: "easeInOutExpo",
			//delay: anime.stagger(100, { start: 500 }), // delay starts at 500ms then increase by 100ms for each elements.
		});
	}, 2500);

	setTimeout(() => {
		anime({
			targets: ".vertical",
			translateY: 0,
			backgroundColor: "#FFF",
			height: "100%",
			easing: "easeInOutExpo",
			//delay: anime.stagger(100, { start: 500 }), // delay starts at 500ms then increase by 100ms for each elements.
		});
	}, 2000);
	setTimeout(() => {
		anime({
			targets: ".horizontal",
			backgroundColor: "#FFF",
			width: "100%",
			easing: "easeInOutExpo",
			//delay: anime.stagger(100, { start: 500 }), // delay starts at 500ms then increase by 100ms for each elements.
		});
	}, 2500);
});
