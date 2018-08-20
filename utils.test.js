const { turnLeft, turnRight } = require("./utils");
const { NORTH, SOUTH, EAST, WEST } = require("./constants");

it("turnLeft should return correct direction when given a legal input", () => {
	expect(turnLeft(NORTH)).toEqual(WEST);
	expect(turnLeft(EAST)).toEqual(NORTH);
	expect(turnLeft(SOUTH)).toEqual(EAST);
	expect(turnLeft(WEST)).toEqual(SOUTH);
});

it("turnLeft should return original input if it is not a legal input", () => {
	expect(turnLeft("hi")).toEqual("hi");
});

it("turnRight should return correct direction when given a legal input", () => {
	expect(turnRight(NORTH)).toEqual(EAST);
	expect(turnRight(EAST)).toEqual(SOUTH);
	expect(turnRight(SOUTH)).toEqual(WEST);
	expect(turnRight(WEST)).toEqual(NORTH);
});

it("turnRight should return original input if it is not a legal input", () => {
	expect(turnRight("hi")).toEqual("hi");
});
