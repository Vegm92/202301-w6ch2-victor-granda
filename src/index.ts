import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

let userName: string;
const holdLog2Secs = (miliSeg = 2000) => {
  new Promise((event) => setTimeout(event, miliSeg));
};

const greeting = async (): Promise<void> => {
  const glitchGreeting = chalkAnimation.pulse(`Hello dear Bebeloper! \n`);
  await holdLog2Secs();

  const hellText = chalk.bgRed("    THIS IS BACKEND HELL!     ");
  console.log(hellText);

  await holdLog2Secs();

  console.log(`You are going to be tested in your knowledge of BACKEND`);

  await holdLog2Secs();
};

const getUserName = async (): Promise<void> => {
  const answers = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Name yourself: ",
      default() {
        return "Bebeloper";
      },
    },
    {
      name: "frontend",
      message: `Did you enjoy FrontEnd?`,
      type: "confirm",
    },
    {
      name: "backend",
      message: "Do you know anything about backend?",
      type: "confirm",
    },
  ]);
  userName = answers.name;
  console.log(`Alright ${userName}... here we go`);
  await holdLog2Secs();
  console.clear();
};

const getAnswer = async (isCorrect: any): Promise<void> => {
  const spinner = createSpinner("checking answer...").start();
  await holdLog2Secs();
  if (isCorrect) {
    spinner.success({ text: `Correct ${userName}!` });
  } else {
    spinner.error({ text: `Sorry ${userName} thats not right!` });
  }
};

const firstQuestion = async (): Promise<void> => {
  const answer = await inquirer.prompt({
    type: "list",
    name: "firstQuestion",
    message:
      "1. What is a server and what role does it play in backend development?",
    choices: [
      { name: "a) A device used to display web pages", value: false },
      {
        name: "b) A computer program that processes requests and delivers responses over the internet",
        value: true,
      },
    ],
  });
  return getAnswer(answer.firstQuestion);
};

const secondQuestion = async (): Promise<void> => {
  const answer = await inquirer.prompt({
    type: "list",
    name: "secondQuestion",
    message:
      "2. What is an API and why is it important in backend development?",
    choices: [
      { name: "a) A way to visually style web pages", value: false },
      {
        name: "b) A way for different software applications to communicate with each other",
        value: true,
      },
    ],
  });
  return getAnswer(answer.secondQuestion);
};

const thirdQuestion = async (): Promise<void> => {
  const answer = await inquirer.prompt({
    type: "list",
    name: "secondQuestion",
    message:
      "2. What is an API and why is it important in backend development?",
    choices: [
      { name: "a) A way to visually style web pages", value: false },
      {
        name: "b) A way for different software applications to communicate with each other",
        value: true,
      },
    ],
  });
  return getAnswer(answer.thirdQuestion);
};

await greeting();
await getUserName();
await firstQuestion();
await secondQuestion();
await thirdQuestion();
