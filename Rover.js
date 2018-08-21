const {
	NORTH,
	SOUTH,
	EAST,
	WEST,
	LEFT,
	RIGHT,
	FORWARD,
	POS_X,
	POS_Y
} = require("./constants");

class Rover {
	constructor(maxPosition, initPosition, initDirection, instructions, index) {
		this.maxPosition = maxPosition; // eg [x, y]
		this.position = initPosition;
		this.direction = initDirection; // eg. "N"
		this.instructions = instructions; // eg. "LRMM"
		this.index = index;
	}

	runInstructions() {
		if (!this.instructions) return;

		this.instructions.split("").forEach(instruction => {
			this.move(instruction);
		});
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
				this.forward();
				break;
			default:
				return;
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

	forward() {
		let newPos = Array.from(this.position);

		switch (this.direction) {
			case NORTH:
				newPos[POS_Y] += 1;
				break;

			case EAST:
				newPos[POS_X] += 1;
				break;

			case SOUTH:
				newPos[POS_Y] -= 1;
				break;

			case WEST:
				newPos[POS_X] -= 1;
				break;
			default:
				break;
		}

		if (this.isLegalPosition(newPos)) {
			this.position = newPos;
		}
	}

	isLegalPosition(position) {
		return (
			position[POS_X] <= this.maxPosition[POS_X] &&
			position[POS_Y] <= this.maxPosition[POS_Y]
		);
	}

	logPosition() {
		console.log(
			`Output for Rover #${this.index}: ${this.position[POS_X]} ${
				this.position[POS_Y]
			} ${this.direction}`
		);
	}
}

module.exports = Rover;
