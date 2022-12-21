const Name = prompt("日本の首都は？");

while (Name.includes("")) {
    if (Name == "東京") {
        alert ("正解です");
        break
    }  else {
        alert ("不正解です");
        break
    }
}