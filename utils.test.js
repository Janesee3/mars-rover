const { parsePositionInput, parseSizeInput } = require("./utils");
const { NORTH, SOUTH, EAST, WEST } = require("./constants");

describe("Test for parsePositionInput()", () => {
	it("should return an object with correct position and direction given a valid input", () => {
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

describe("Test for parseSizeInput()", () => {
	it("should return correct size array if valid input is given", () => {
		expect(parseSizeInput("5 5")).toEqual([5, 5]);
	});

	it("should return null for invalid input", () => {
		expect(parseSizeInput("5")).toEqual(null);
		expect(parseSizeInput("5 5 5")).toEqual(null);
		expect(parseSizeInput("a a")).toEqual(null);
		expect(parseSizeInput("5 a")).toEqual(null);
	});
});
