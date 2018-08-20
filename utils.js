const { NORTH, SOUTH, EAST, WEST, POS_X, POS_Y } = require("./constants");

const DIRECTION_INDEX = 2;
const EXPECTED_POSITION_INPUT_LENGTH = 3;
const EXPECTED_SIZE_INPUT_LENGTH = 2;

const parsePositionInput = positionInput => {
	let characterArray = positionInput.split(" ");

	if (characterArray.length !== EXPECTED_POSITION_INPUT_LENGTH) return null;

	const posX = parseInt(characterArray[POS_X]);
	const posY = parseInt(characterArray[POS_Y]);
	const direction = characterArray[DIRECTION_INDEX];

	if (!_isLegalPosition(posX, posY)) return null;
	if (!_isLegalDirection(direction)) return null;

	return {
		position: [posX, posY],
		direction
	};
};

const parseSizeInput = sizeInput => {
	let characterArray = sizeInput.split(" ");
	if (characterArray.length != EXPECTED_SIZE_INPUT_LENGTH) return null;
	const maxX = parseInt(characterArray[POS_X]);
	const maxY = parseInt(characterArray[POS_Y]);

	if (!_isLegalSize(maxX, maxY)) return null;

	return [maxX, maxY];
};

const _isLegalPosition = (posX, posY) => {
	return Number.isInteger(posX) && Number.isInteger(posY);
};

const _isLegalDirection = direction => {
	const arrayOfDirections = [NORTH, EAST, SOUTH, WEST];

	return arrayOfDirections.includes(direction);
};

const _isLegalSize = (maxX, maxY) => {
	return (
		Number.isInteger(maxX) && Number.isInteger(maxY) && maxX > 0 && maxY > 0
	);
};

module.exports = {
	parsePositionInput,
	parseSizeInput
};
