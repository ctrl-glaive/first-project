import * as inquirer from "inquirer";

const prompt = inquirer.createPromptModule();

let questions: Array<inquirer.QuestionCollection> = [];
for (let i = 0; i < 7; i++) {
  const days: Array<string> = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  questions.push({
    type: "number",
    name: days[i],
    message: `How many hours did you sleep on ${days[i]}`,
  });
}
prompt(questions)
  .then(
    (resp: {
      sunday: number;
      monday: number;
      tuesday: number;
      wednesday: number;
      thursday: number;
      friday: number;
      saturday: number;
    }) => {
      const idealSleepHours = 56;

      let total = 0;
      Object.keys(resp).forEach((key) => {
        if (!(resp[key] >= 0)) {
          console.log("You must enter a number for all inputs.");
          return process.exit(0);
        }
        total += resp[key];
      });

      if (total === idealSleepHours) {
        console.log("You got the reccomended amount of sleep.");
      } else if (total > idealSleepHours) {
        console.log("You got more sleep than needed.");
      } else {
        console.log("You didn't get the reccomended amount of sleep.");
      }
    }
  )
  .catch();
