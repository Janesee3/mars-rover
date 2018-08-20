const { NORTH, SOUTH, EAST, WEST, POS_X, POS_Y } = require("./constants");

const DIRECTION_INDEX = 2;

const parsePositionInput = positionInput => {
	let characterArray = positionInput.split(" ");

	return {
		position: [
			new Number(characterArray[POS_X]),
			new Number(characterArray[POS_Y])
		],
		direction: characterArray[DIRECTION_INDEX]
	};
};

module.exports = {
	parsePositionInput
};
