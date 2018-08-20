const { NORTH, SOUTH, EAST, WEST } = require("./constants");

const turnLeft = initDirection => {
	switch (initDirection) {
		case NORTH:
			return WEST;
		case EAST:
			return NORTH;
		case SOUTH:
			return EAST;
		case WEST:
			return SOUTH;
		default:
			return initDirection;
	}
};

const turnRight = initDirection => {
	switch (initDirection) {
		case NORTH:
			return EAST;
		case EAST:
			return SOUTH;
		case SOUTH:
			return WEST;
		case WEST:
			return NORTH;
		default:
			return initDirection;
	}
};

module.exports = {
	turnLeft,
	turnRight
};
