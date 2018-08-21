const Rover = require("./Rover");
const { POS_X, POS_Y } = require("./constants");

class Board {
	constructor() {
		this.size = [-1, -1];
		this.rovers = [];
	}

	setBoardSize(size) {
		this.size = size;
	}

	addRover(rover) {
		if (!rover instanceof Rover) {
			return;
		}

		if (
			rover.position[POS_X] > this.size[POS_X] ||
			rover.position[POS_Y] > this.size[POS_Y]
		) {
			return console.log("This Rover's initial position is out of bounds!");
		}

		rover.setMaxPosition(this.size);
		this.rovers.push(rover);
	}

	runRovers() {
		this.rovers.forEach(rover => {
			rover.runInstructions();
			rover.logPosition();
		});
	}
}

module.exports = Board;
