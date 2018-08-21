const readlineHelper = require("./readline-helper");
let mockGetUserInput;

beforeEach(() => {
	mockGetUserInput = jest.spyOn(readlineHelper, "getUserInput");
});

it.skip("should ", async () => {
	mockGetUserInput
		.mockImplementationOnce(() => "5 5")
		.mockImplementationOnce(() => "1")
		.mockImplementationOnce(() => "1 2 N")
		.mockImplementationOnce(() => "M");

	console.log(readlineHelper.getUserInput());
	console.log(readlineHelper.getUserInput());
	console.log(readlineHelper.getUserInput());
	console.log(readlineHelper.getUserInput());

	const { main } = require("./main");

	await main();
});
