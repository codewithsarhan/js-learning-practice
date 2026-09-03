let mainInput = document.querySelector(".mainInput");
let prioritydrpdwn = document.querySelector(".priyDrpdwn");
let addTask = document.querySelector(".addtaskBtn");
let filterdrpdwn = document.querySelector(".fliter");
let filterOption = document.querySelector(".filterOption");


let task = [

    
]



addTask.addEventListener( "click" , () => {

let priority = prioritydrpdwn.value;
let selectOption = filterOption.value;
let myInput = mainInput.value ;

const taskData = {

date : Date.now(),
id : crypto.randomUUID(),
task : myInput ,
priorityTask : priority ,
SelectedOption : selectOption ,

}

task.push(taskData);


console.log(task);


})

console.log(task);
