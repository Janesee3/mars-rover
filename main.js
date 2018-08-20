const { getUserInput, rl } = require("./readline-helper");

const main = async () => {
	const plataeuInput = await getUserInput(
		"Specify the size of the Mars plateau (e.g. 5 5): "
	);

	const numOfRovers = await getUserInput(
		"Specify total number of rovers (e.g. 2): "
	);

	for (let i = 0; i < numOfRovers; i++) {
		await readRover(i + 1);
	}

	console.log(
		"The final coordinates of the mars rover is: <replace with the output of your program>"
	);

	rl.close();
};

const readRover = async roverIndex => {
	const roverInitPos = await getUserInput(
		`Rover #${roverIndex} initial position (e.g. 1 2 N): `
	);

	const roverInstructions = await getUserInput(
		`Instructions for Rover #${roverIndex} (e.g. LMLMLMLMM): `
	);
};

main();
