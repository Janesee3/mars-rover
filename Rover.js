const {
	NORTH,
	SOUTH,
	EAST,
	WEST,
	LEFT,
	RIGHT,
	FORWARD
} = require("./constants");

class Rover {
	constructor(initPosition, initDirection, instructions) {
		this.position = initPosition; // eg [x, y]
		this.direction = initDirection; // eg. "N"
		this.instructions = instructions; // eg. "LRMM"
	}

	move(instruction) {
		switch (instruction) {
			case LEFT:
				this.direction = this.turnLeft(this.direction);
				break;
			case RIGHT:
				this.direction = this.turnRight(this.direction);
				break;
			case FORWARD:
				// do something
				break;
			default:
				console.log(`${instruction} is not a legal instruction.`);
		}
	}

	turnLeft(initDirection) {
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
	}

	turnRight(initDirection) {
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
	}
}

module.exports = Rover;
