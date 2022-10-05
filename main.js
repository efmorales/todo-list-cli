const prompt = require('prompt-sync')({sigint: true});
                                    
let chooseToDo = 0; // This variable will be the first prompt to choose what to do!
let toDoCount = 0; // This variable will be converted to arrayStore.length!
let arrayStore = []; // This empty array will be filled with the user to-dos
let arrayBool = []; // This empty array will be filled with "true" or "false" so the program can show "complete" or "incomplete"

console.log ('\n'); // Style. Adds a blank space in the terminal
console.log ('Welcome to the To-Do List Manager Application!'); // This title will appear once!
console.log ('=============================================='); // Style. Should repeat for UI reasons, but not here!

while (chooseToDo !== 3){ // Infinite loop to go back to choose what to do with items. If you type 3 then the program will get you outside the loop.
    
    toDoCount = arrayStore.length; // variable reassignment. This was done so I could use it to properly display how many items the to-do list have.

    // This is the start of a big IF statement ==============

    if (toDoCount > 0){ // If toDoCount is bigger than 0, then I display the number of items I have.
        console.log(`Your to-do list have ${toDoCount} items.`);
        
        for (let i = 0; toDoCount > i; i++){ // This for loop does two things: 
            let completionStatus = "";
            if (arrayBool[i] === false){
                completionStatus = "[Incomplete]";
            } else if (arrayBool[i] === true){
                completionStatus = "[Complete]";
            }

             console.log(`${i+1}. ${completionStatus} ${arrayStore[i]}`);
        
        }
    } else if (toDoCount === 0) {    // If toDoCount is 0, such as the first time the program loads, then display:
        console.log ('Your to-do list is empty.');
    }
    
    // After displaying the # of items, then we prompt the user for an input!

    console.log(`\n`);
    console.log(`Select an action: `);
    console.log(`[1] Create a new item`);
    console.log(`[2] Complete an item`);
    console.log(`[3] Exit the program`);
    chooseToDo = Number(prompt(`>`)); // 1, 2 or 3 does different things!

    // This is the start of a big IF statement ==============

    if (chooseToDo === 1){ // if you choose '1', then you need to name your new task!
            console.log(`~ Creating a new to-do item ~`);
            console.log(`What is the to-do item list called?`);
            let itemCall = prompt(`> `); // itemCall will store the input from the user
            arrayStore.push(itemCall); // I push itemCall to arrayStore, this will help me call this item again in the future
            arrayBool.push(false); // I push a 'false' boolean to arrayBool to set the itemCall as [Incomplete] by default

            console.log ('=============================================='); // Style. Will look cooler.

        } else if (chooseToDo === 2 && toDoCount > 0){ // if you choose '2' and have more than 1 item in your array, then:
            console.log(`~ Completing a to-do item ~`);
            console.log(`Please input the number of the completed task: `);
            let itemComplete = Number(prompt(`> `)); // prompts the user to choose the # of the item to complete

            while (isNaN(itemComplete) || itemComplete > arrayBool.length || itemComplete < 1){ // This accounts for errors if the input from the user is NaN, bigger than the # of arrays, or if you put '0'. If there's an error, then the program will go back to ask for a correct prompt input!
                console.log ("Error! Please enter a number from the list!");
                itemComplete = Number(prompt(`> `));
            }

            arrayBool[itemComplete-1] = true; // If an user inputs "1", then index 0 of array (item 1) will appear as 'complete'. If an user inputs "2", then index 1 of array (item 2) will appear as 'complete'. 
            
            console.log ('==============================================');
            
        } else if (chooseToDo === 3) { // return an empty string and immediately goes outside the big loop!

            console.log ("");

        } else { // this error check accounts for two cases: 1. if you input an invalid select number, and 2. if you choose to complete an item but you have no tasks added! 
            console.log('Please, either put a correct number or you need a to-do list item before completing it!');
            console.log ('==============================================');
            
        }
}

console.log (`~ Exiting the program ~`); // will show after typing '3'