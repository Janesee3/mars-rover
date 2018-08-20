const { turnLeft } = require("./utils");
const { NORTH, SOUTH, EAST, WEST } = require("./constants");

it("turnLeft should return correct direction when given a legal input", () => {
	const dir1 = turnLeft(NORTH);
	const dir2 = turnLeft(EAST);
	const dir3 = turnLeft(SOUTH);
	const dir4 = turnLeft(WEST);

	expect(dir1).toEqual(WEST);
	expect(dir2).toEqual(NORTH);
	expect(dir3).toEqual(EAST);
	expect(dir4).toEqual(SOUTH);
});

it("turnLeft should return original input if it is not a legal input", () => {
	expect(turnLeft("hi")).toEqual("hi");
});
