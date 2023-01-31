const tasks = ['0 :[内容]机を片付ける、[ジャンル] 掃除','1 :[内容]牛乳を買う、[ジャンル]買い物','2 :[内容]散歩する、[ジャンル]運動'];
const newTask1 = prompt("タスク入力して下さい");
//const newTask2 = prompt("ジャンルを入力してください");//こいつが原因

console.log("=======================\n現在持っているタスク一覧\n=======================");
for (const todo of tasks) {
    console.log(todo);
}

function fn () {
    if (newTask1 !== null) {
        const newTask2 = prompt("ジャンルを入力してください");
        tasks.push('3 :[内容]' + newTask1 + '、' + '[ジャンル]' + newTask2);
    }
}
fn();

if (newTask1 !== null) {
    alert("新しいタスクを追加しました。");
} 

console.log("=======================\n現在持っているタスク一覧\n=======================");
for (let todo of tasks) {
    console.log(todo);
}

if (newTask1 !== null) {
    alert("「確認、追加、削除、終了」の４つのいずれかを入力してください。");
}