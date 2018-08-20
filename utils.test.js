const { parsePositionInput } = require("./utils");
const { NORTH, SOUTH, EAST, WEST } = require("./constants");

describe("Test for parsePositionInput()", () => {
	it.only("should return an object with correct position and direction given a valid input", () => {
		const expected = {
			position: [1, 2],
			direction: NORTH
		};

		expect(parsePositionInput("1 2 N")).toEqual(expected);
	});

	it("should return null if input is incomplete", () => {
		expect(parsePositionInput("1 N")).toEqual(null);
		expect(parsePositionInput("")).toEqual(null);
		expect(parsePositionInput("11N")).toEqual(null);
		expect(parsePositionInput("1 1 N N")).toEqual(null);
	});

	it("should return null if input is not formatted correctly", () => {
		expect(parsePositionInput("1 1 1")).toEqual(null);
		expect(parsePositionInput("A A N")).toEqual(null);
		expect(parsePositionInput("1 A N")).toEqual(null);
		expect(parsePositionInput("A 1 N")).toEqual(null);
		expect(parsePositionInput("1 1 G")).toEqual(null);
	});
});
