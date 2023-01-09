let tasks = ['0 : 掃除','1 : 買い物','2 : 散歩'];
let allTask = document.getElementById("all-task");

console.log(allTask.textContent);
for (let todo of tasks) {
    console.log(todo);
}

let newTask = prompt("タスク入力して下さい");
tasks.push('3 : ' + newTask);

if (newTask === null) {
   
} else {
    alert("新しいタスクを追加しました。");
}

console.log(allTask.textContent);
for (let todo of tasks) {
    console.log(todo);
}

alert("「確認、追加、削除、終了」の４つのいずれかを入力してください。");