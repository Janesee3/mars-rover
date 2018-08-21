const { getUserInput, rl } = require("./readline-helper");
const { parsePositionInput, parseSizeInput } = require("./utils");
const Rover = require("./Rover");
const Board = require("./Board");

let board;

const main = async () => {
	board = new Board();

	await readSizeInput();
	await readRoversInput();

	board.runRovers();
	rl.close();
};

const readSizeInput = async () => {
	const sizeInput = await getUserInput(
		"Specify the size of the Mars plateau (e.g. 5 5): "
	);

	const plateauSize = parseSizeInput(sizeInput);

	if (plateauSize == null) {
		console.log("Invalid Plateau Size! Please run the program again.");
		process.exit();
	}

	board.setBoardSize(plateauSize);
};

const readRoversInput = async () => {
	const numOfRovers = await getUserInput(
		"Specify total number of rovers (e.g. 2): "
	);

	for (let i = 0; i < numOfRovers; i++) {
		await readAndAddRover(i + 1);
	}
};

const readAndAddRover = async roverIndex => {
	const roverPosInput = await getUserInput(
		`Rover #${roverIndex} initial position (e.g. 1 2 N): `
	);

	const roverInstructions = await getUserInput(
		`Instructions for Rover #${roverIndex} (e.g. LMR): `
	);

	const parsedPosInput = parsePositionInput(roverPosInput);

	if (parsedPosInput === null) {
		console.log(`"${roverPosInput}" is an invalid input!`);
		return;
	}

	const rover = new Rover(
		parsedPosInput.position,
		parsedPosInput.direction,
		roverInstructions,
		roverIndex
	);

	board.addRover(rover);
};

main();

module.exports = {
	main
};
