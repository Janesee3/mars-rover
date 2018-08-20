const Rover = require("./Rover");
const { DIRECTION, POS_X, POS_Y } = require("./constants");

it("constructor should fill in properties of rover correctly", () => {
	const rover = new Rover([5, 4], DIRECTION.NORTH, "LR");

	expect(rover.position[POS_X]).toBe(5);
	expect(rover.position[POS_Y]).toBe(4);
	expect(rover.direction).toBe(DIRECTION.NORTH);
	expect(rover.instructions).toBe("LR");
});
