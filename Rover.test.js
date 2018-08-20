const Rover = require("./Rover");
const { NORTH, SOUTH, EAST, WEST, POS_X, POS_Y } = require("./constants");

let rover;

beforeEach(() => {
	rover = new Rover([6, 6], [5, 4], NORTH, "LR");
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
		rover = new Rover([5, 5], [3, 4], NORTH);

		rover.forward();

		expect(rover.position).toEqual([3, 5]);
	});

	it("should return correct coordinates when current direction is SOUTH", () => {
		rover = new Rover([5, 5], [3, 4], SOUTH);

		rover.forward();

		expect(rover.position).toEqual([3, 3]);
	});

	it("should return correct coordinates when current direction is EAST", () => {
		rover = new Rover([5, 5], [3, 4], EAST);

		rover.forward();

		expect(rover.position).toEqual([4, 4]);
	});

	it("should return correct coordinates when current direction is WEST", () => {
		rover = new Rover([5, 5], [3, 4], WEST);

		rover.forward();

		expect(rover.position).toEqual([2, 4]);
	});

	it("should return original coordinates if move exceeds max position", () => {
		rover = new Rover([5, 5], [5, 5], EAST);

		rover.forward();

		expect(rover.position).toEqual([5, 5]);
	});
});
