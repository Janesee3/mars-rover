const { parsePositionInput } = require("./utils");
const { NORTH, SOUTH, EAST, WEST } = require("./constants");

describe("Test for parsePositionInput()", () => {
	it("should return an object with correct position and direction given a valid input", () => {
		const expected = {
			position: [1, 2],
			direction: NORTH
		};

		expect(parsePositionInput("1 2 N")).toEqual(expected);
	});
});
