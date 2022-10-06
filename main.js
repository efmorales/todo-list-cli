const prompt = require('prompt-sync')({sigint: true});

// // ============== GLOBAL VARIABLES ==============

                                    
let arrayStore = []; // This empty array will be filled with the user to-dos
let arrayBool = []; // This empty array will be filled with "true" or "false" so the program can show "complete" or "incomplete"
let chooseToDo = 0; // This variable will be converted into the first prompt to choose what to do!
let toDoCount = 0; // This variable will be converted to arrayStore.length!


// ============== START ==============

console.log ('\n'); // Style. Adds a blank space in the terminal
console.log ('Welcome to the To-Do List Manager Application!'); // This title will appear just once, so no need to Loop!
console.log ('=============================================='); // Style. Should repeat for UI reasons, but not here!

while (chooseToDo !== 6){ // Infinite loop to go back to choose what to do with items. If you type 3 then the program will get you outside the loop.
    
    toDoCount = arrayStore.length; // variable reassignment. This was done so I could use it to properly display how many items the to-do list have in the current loop.

    // The following function taskCount() is reponsible for displaying a continuously updated sentence with the current # of items in our to-do list ==============

    taskCount();
    
    // After displaying the # of items, then we prompt the user for an input!

    console.log(`\n`);
    console.log(`Select an action: `);
    console.log(`[1] Create a new item`);
    console.log(`[2] Complete an item`);
    console.log(`[3] Incomplete an item`);
    console.log(`[4] Delete an item`);
    console.log(`[5] Modify an item`);
    console.log(`[6] Exit the program`);
    chooseToDo = Number(prompt(`>`));

    // After choosing a #, now follow the instructions to continue!

    chooseTask();
}

console.log (`~ Exiting the program ~`); // will show after typing '6'

// ============== END ==============


// ============== FUNCTIONS ==============


function taskCount(){
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
}

function chooseTask(){
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
        
    } else if (chooseToDo === 3) { // 
        
        console.log(`~ Incomplete a to-do item ~`);
        console.log(`Please input the number of the incompleted task: `);

        let itemIncomplete = Number(prompt(`> `)); // prompts the user to choose the # of the item to incomplete

        while (isNaN(itemIncomplete) || itemIncomplete > arrayBool.length || itemIncomplete < 1){ // This accounts for errors if the input from the user is NaN, bigger than the # of arrays, or if you put '0'. If there's an error, then the program will go back to ask for a correct prompt input!
            console.log ("Error! Please enter a number from the list!");
            itemIncomplete = Number(prompt(`> `));
        }

        arrayBool[itemIncomplete-1] = false; // If an user inputs "1", then index 0 of array (item 1) will appear as 'incomplete'. If an user inputs "2", then index 1 of array (item 2) will appear as 'incomplete'. 
        
        console.log ('==============================================');
    
        
    } else if (chooseToDo === 4) { // 
        
        console.log(`~ Erasing a to-do item ~`);
        console.log(`Please input the number of the task to delete: `);
        itemDel = Number(prompt(`> `));
        
        while (isNaN(itemDel) || itemDel > arrayBool.length || itemDel < 1){ // This accounts for errors if the input from the user is NaN, bigger than the # of arrays, or if you put '0'. If there's an error, then the program will go back to ask for a correct prompt input!
            console.log ("Error! Please enter a number from the list!");
            itemDel = Number(prompt(`> `));
        }

        // erase a task: bye 2 items from 2 arrays!
        
        arrayStore.splice(itemDel-1);
        arrayBool.splice(itemDel-1);

        console.log ('==============================================');
        
        
    } else if (chooseToDo === 5) { 
        
        console.log(`~ Modifying a to-do item ~`);
        console.log(`Please input the number of the task to modify: `);
        let itemModify = Number(prompt(`> `)); // select the item to modify
        
        //error check here too

        while (isNaN(itemModify) || itemModify > arrayBool.length || itemModify < 1){ 
            console.log ("Error! Please enter a number from the list!");
            itemModify = Number(prompt(`> `)); 
        }
        
        console.log(`Please type your new task: `);
        let itemReplace = String(prompt(`> `)); 
        
        arrayStore[itemModify-1] = itemReplace // This replaces the item in the string with the new input!
        
        console.log ('==============================================');

    } else if (chooseToDo === 6) { // return an empty string and immediately goes outside the big loop!
        
        console.log ("");

    } else { // this error check accounts for two cases: 1. if you input an invalid select number, and 2. if you choose to complete an item but you have no tasks added! 
        console.log('Please, either put a correct number or you need a to-do list item before completing it!');
        console.log ('==============================================');
        
    }
}
