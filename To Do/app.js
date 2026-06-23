let todo = [];
let request = prompt("Please Enter your request: ");

while(true){
    if(request == "quit"){
        console.log("Quitting the app...");
        break;
    }
    else if(request == "list"){
        console.log("------------");
        for(let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("------------");
    }
    else if(request == "add"){
        let task = prompt("Please Enter your Task: ");
        todo.push(task);
        console.log("Task Added!");
    }
    else if(request == "Delete"){
        let index = prompt("Please Enter the index of the task to remove: ");
        if(index >= 0 && index < todo.length){
            todo.splice(index, 1);
            console.log("Task removed!");
        } else {
            console.log("Invalid index!");
        }
    }
    else{
        console.log("Unknown command!");
    }
}