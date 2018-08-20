const { getUserInput, rl } = require("./readline-helper");
const { parsePositionInput, parseSizeInput } = require("./utils");
const { POS_X, POS_Y } = require("./constants");
const Rover = require("./Rover");

const rovers = [];
let plateauSize = [-1, -1];

const main = async () => {
	await readSizeInput();
	await readRoversInput();
	processAndPrintOutput();
	rl.close();
};

const readSizeInput = async () => {
	const sizeInput = await getUserInput(
		"Specify the size of the Mars plateau (e.g. 5 5): "
	);

	plateauSize = parseSizeInput(sizeInput);

	if (plateauSize == null) {
		console.log("Invalid Plateau Size! Please run the program again.");
		process.exit();
	}
};

const readRoversInput = async () => {
	const numOfRovers = await getUserInput(
		"Specify total number of rovers (e.g. 2): "
	);

	for (let i = 0; i < numOfRovers; i++) {
		await readAndAddRover(i + 1, plateauSize);
	}
};

const readAndAddRover = async (roverIndex, plateauSize) => {
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
		plateauSize,
		parsedPosInput.position,
		parsedPosInput.direction,
		roverInstructions,
		roverIndex
	);

	rovers.push(rover);
};

const processAndPrintOutput = () => {
	rovers.forEach(rover => {
		rover.runInstructions();
		console.log(
			`Output for Rover #${rover.index}: ${rover.position[POS_X]} ${
				rover.position[POS_Y]
			} ${rover.direction}`
		);
	});
};

main();

module.exports = {
	main
};
