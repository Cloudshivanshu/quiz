let read = require("readline-sync");

const database = {
    data: [
        {
            question: `let a={} , b={}\nconsole.log(a==b)\nconsole.log(a===b)`,
            options: {
                a: "false false",
                b: "false true",
                c: "true false",
                d: "true true"
            },
            correctAnswer: "a"
        },
        {
            question: "Object.assign(target,source) creates which type of copy ?",
            options: {
                a: "Deep copy",
                b: "shallow copy",
                c: "nested copy",
                d: "creates a new reference"
            },
            correctAnswer: "b"
        },
        {
            question: "Is method chaining possible with forEach ?",
            options: {
                a: "YES",
                b: "NO",
            },
            correctAnswer: "b"
        }
    ]
}

function playgame(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        console.log("Correct Answer!\n");
    } else {
        console.log("Incorrect Answer.\n");
    }
}

function showQuestionAndOptions(database) {
    for (let i = 0; i < database.data.length; i++) {
        console.log(`\n${i + 1} --> ${database.data[i].question}\n`);
        for (let key in database.data[i].options) {
            console.log(`${key} - ${database.data[i].options[key]}`);
        }
        let userAnswer = read.question("ENTER YOUR ANSWER(a/b/c/d)--> ").toLowerCase();

        // Optional: Input validation loop
        while (!database.data[i].options.hasOwnProperty(userAnswer)) {
            console.log("Invalid option. Please enter a, b, c, or d.");
            userAnswer = read.question("ENTER YOUR ANSWER(a/b/c/d)--> ").toLowerCase();
        }

        playgame(userAnswer, database.data[i].correctAnswer);
    }
}

showQuestionAndOptions(database);
