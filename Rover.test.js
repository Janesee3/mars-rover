const Rover = require("./Rover");
const { NORTH, SOUTH, EAST, WEST, POS_X, POS_Y } = require("./constants");

let rover;

beforeEach(() => {
	rover = new Rover([5, 4], NORTH, "LR");
	rover.setMaxPosition([6, 6]);
});

describe("Test for constructor", () => {
	it("constructor should fill in properties of rover correctly", () => {
		expect(rover.maxPosition[POS_X]).toBe(6);
		expect(rover.maxPosition[POS_Y]).toBe(6);
		expect(rover.position[POS_X]).toBe(5);
		expect(rover.position[POS_Y]).toBe(4);
		expect(rover.direction).toBe(NORTH);
		expect(rover.instructions).toBe("LR");
	});
});

describe("Test for move()", () => {
	test("move() should do nothing if there is no input", () => {
		rover.move();

		expect(rover.position[POS_X]).toBe(5);
		expect(rover.position[POS_Y]).toBe(4);
		expect(rover.direction).toBe(NORTH);
	});

	test("move() should correctly turn left if L was input", () => {
		rover.move("L");

		expect(rover.position[POS_X]).toBe(5);
		expect(rover.position[POS_Y]).toBe(4);
		expect(rover.direction).toBe(WEST);
	});

	test("move() should correctly turn right if R was input", () => {
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

	it("turnRight should return correct direction when given a legal input", () => {
		expect(rover.turnRight(NORTH)).toEqual(EAST);
		expect(rover.turnRight(EAST)).toEqual(SOUTH);
		expect(rover.turnRight(SOUTH)).toEqual(WEST);
		expect(rover.turnRight(WEST)).toEqual(NORTH);
	});
});

describe("Test for forward", () => {
	it("should return correct coordinates when current direction is NORTH", () => {
		rover = new Rover([3, 4], NORTH);
		rover.setMaxPosition([5, 5]);

		rover.forward();

		expect(rover.position).toEqual([3, 5]);
	});

	it("should return correct coordinates when current direction is SOUTH", () => {
		rover = new Rover([3, 4], SOUTH);
		rover.setMaxPosition([5, 5]);

		rover.forward();

		expect(rover.position).toEqual([3, 3]);
	});

	it("should return correct coordinates when current direction is EAST", () => {
		rover = new Rover([3, 4], EAST);
		rover.setMaxPosition([5, 5]);

		rover.forward();

		expect(rover.position).toEqual([4, 4]);
	});

	it("should return correct coordinates when current direction is WEST", () => {
		rover = new Rover([3, 4], WEST);
		rover.setMaxPosition([5, 5]);

		rover.forward();

		expect(rover.position).toEqual([2, 4]);
	});

	it("should return original coordinates if move exceeds max position", () => {
		rover = new Rover([5, 5], EAST);
		rover.setMaxPosition([5, 5]);

		rover.forward();

		expect(rover.position).toEqual([5, 5]);
	});
});

describe("test for runInstructions()", () => {
	it("should do nothing if empty or no instructions", () => {
		rover = new Rover([0, 0], NORTH);
		rover.setMaxPosition([5, 5]);

		rover.runInstructions();

		expect(rover.position).toEqual([0, 0]);
	});

	it("should correctly run valid instructions", () => {
		rover = new Rover([0, 0], NORTH, "M");
		rover.setMaxPosition([5, 5]);

		rover.runInstructions();
		expect(rover.position).toEqual([0, 1]);
		expect(rover.direction).toEqual(NORTH);

		rover = new Rover([0, 0], NORTH, "R");
		rover.setMaxPosition([5, 5]);

		rover.runInstructions();
		expect(rover.position).toEqual([0, 0]);
		expect(rover.direction).toEqual(EAST);

		rover = new Rover([0, 0], NORTH, "L");
		rover.setMaxPosition([5, 5]);

		rover.runInstructions();
		expect(rover.position).toEqual([0, 0]);
		expect(rover.direction).toEqual(WEST);

		rover = new Rover([1, 2], NORTH, "LMLMLMLMM");
		rover.setMaxPosition([5, 5]);

		rover.runInstructions();
		expect(rover.position).toEqual([1, 3]);
		expect(rover.direction).toEqual(NORTH);

		rover = new Rover([3, 3], EAST, "MMRMMRMRRM");
		rover.setMaxPosition([5, 5]);

		rover.runInstructions();
		expect(rover.position).toEqual([5, 1]);
		expect(rover.direction).toEqual(EAST);
	});

	it("should not do anything if instructions are not valid", () => {
		rover = new Rover([0, 0], NORTH, "HIHI");
		rover.setMaxPosition([5, 5]);

		rover.runInstructions();
		expect(rover.position).toEqual([0, 0]);
		expect(rover.direction).toEqual(NORTH);
	});
});
