const tasks = ['0 : 掃除','1 : 買い物','2 : 散歩'];
const allTask ="=======================\n現在持っているタスク一覧\n=======================";

console.log(allTask);
for (const todo of tasks) {
    console.log(todo);
}

const newTask = prompt("タスク入力して下さい");
tasks.push('3 : ' + newTask);

if (newTask === null) {
   
} else {
    alert("新しいタスクを追加しました。");
}

console.log(allTask);
for (let todo of tasks) {
    console.log(todo);
}

if (newTask === null) {
   
} else {
    alert("「確認、追加、削除、終了」の４つのいずれかを入力してください。");
}