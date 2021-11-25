import readlineSync from "readline-sync";

const brainEven = () => {
	console.log("Welcome to the Brain Games!");
	const userName = readlineSync.question("May I have your name? ");
	console.log(`Hello, ${userName}!`);
	console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
	let rounds = 3;
	let answer;
	for (let i = rounds; i !== 0; i--) {
		const randomNumber = Math.floor(Math.random() * 100);
		console.log(`Question: ${randomNumber}`);
		const userAnswer = readlineSync.question("Your answer: ");
		answer = randomNumber % 2 === 0 ? "yes" : "no";
		if (answer === userAnswer) {
			console.log("Correct!");
		} else {
			console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
			return console.log(`Let's try again, ${userName}!`);
		}
	}
	return console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
