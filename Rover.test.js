const Rover = require("./Rover");

it("constructor should fill in properties of rover correctly", () => {
	const rover = new Rover("5 5", "N", "LR");

	expect(rover instanceof Rover).toBe(true);
});


