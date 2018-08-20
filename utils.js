const { NORTH, SOUTH, EAST, WEST, POS_X, POS_Y } = require("./constants");

const DIRECTION_INDEX = 2;
const EXPECTED_POSITION_INPUT_LENGTH = 3;
const EXPECTED_SIZE_INPUT_LENGTH = 2;

const parsePositionInput = positionInput => {
	let characterArray = positionInput.split(" ");

	if (characterArray.length !== EXPECTED_POSITION_INPUT_LENGTH) return null;

	const posX = new Number(characterArray[POS_X]);
	const posY = new Number(characterArray[POS_Y]);
	const direction = characterArray[DIRECTION_INDEX];

	if (!_isLegalPosition(posX, posY)) return null;
	if (!_isLegalDirection(direction)) return null;

	return {
		position: [
			new Number(characterArray[POS_X]),
			new Number(characterArray[POS_Y])
		],
		direction: characterArray[DIRECTION_INDEX]
	};
};

const _isLegalPosition = (posX, posY) => {
	return posX instanceof Number && posY instanceof Number;
};

const _isLegalDirection = direction => {
	const arrayOfDirections = [NORTH, EAST, SOUTH, WEST];

	return arrayOfDirections.includes(direction);
};

const _isLegalSize = (maxX, maxY) => {
	return (
		maxX instanceof Number && maxY instanceof Number && maxX > 0 && maxY > 0
	);
};

const parseSizeInput = sizeInput => {
	let characterArray = positionInput.split(" ");
	if (characterArray.length != EXPECTED_SIZE_INPUT_LENGTH) return null;
	const maxX = new Number(characterArray[POS_X]);
	const maxY = new Number(characterArray[POS_Y]);

	if (!_isLegalSize(maxX, maxY)) return null;

	return [maxX, maxY];
};

module.exports = {
	parsePositionInput,
	parseSizeInput
};
