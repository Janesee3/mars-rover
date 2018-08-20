const Rover = require("./Rover");
const { NORTH, SOUTH, EAST, WEST, POS_X, POS_Y } = require("./constants");

describe("Test for constructor", () => {
	it("constructor should fill in properties of rover correctly", () => {
		const rover = new Rover([5, 4], NORTH, "LR");

		expect(rover.position[POS_X]).toBe(5);
		expect(rover.position[POS_Y]).toBe(4);
		expect(rover.direction).toBe(NORTH);
		expect(rover.instructions).toBe("LR");
	});
});

describe("Test for move()", () => {
	test("move() should do nothing if there is no input", () => {
		const rover = new Rover([5, 4], NORTH, "LR");

		rover.move();

		expect(rover.position[POS_X]).toBe(5);
		expect(rover.position[POS_Y]).toBe(4);
		expect(rover.direction).toBe(NORTH);
	});

	test("move() should correctly turn left if L was input", () => {
		const rover = new Rover([5, 4], NORTH, "LR");

		rover.move("L");

		expect(rover.position[POS_X]).toBe(5);
		expect(rover.position[POS_Y]).toBe(4);
		expect(rover.direction).toBe(WEST);
	});

	test("move() should correctly turn right if R was input", () => {
		const rover = new Rover([5, 4], NORTH, "LR");

		rover.move("R");

		expect(rover.position[POS_X]).toBe(5);
		expect(rover.position[POS_Y]).toBe(4);
		expect(rover.direction).toBe(EAST);
	});
});

describe("Test for turnLeft and turnRight", () => {
	let rover;

	beforeAll(() => {
		rover = new Rover();
	});

	it("turnLeft should return correct direction when given a legal input", () => {
		expect(rover.turnLeft(NORTH)).toEqual(WEST);
		expect(rover.turnLeft(EAST)).toEqual(NORTH);
		expect(rover.turnLeft(SOUTH)).toEqual(EAST);
		expect(rover.turnLeft(WEST)).toEqual(SOUTH);
	});

	it("turnLeft should return original input if it is not a legal input", () => {
		expect(rover.turnLeft("hi")).toEqual("hi");
	});

	it("turnRight should return correct direction when given a legal input", () => {
		expect(rover.turnRight(NORTH)).toEqual(EAST);
		expect(rover.turnRight(EAST)).toEqual(SOUTH);
		expect(rover.turnRight(SOUTH)).toEqual(WEST);
		expect(rover.turnRight(WEST)).toEqual(NORTH);
	});

	it("turnRight should return original input if it is not a legal input", () => {
		expect(rover.turnRight("hi")).toEqual("hi");
	});
});
