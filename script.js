document.querySelector("form").addEventListener("submit",todoApp);
let taskArr;
if(JSON.parse(localStorage.getItem("todo"))==null){
    taskArr=[];
}
else{
    taskArr=JSON.parse(localStorage.getItem("todo"));
}
 displayTable(taskArr);
function todoApp(event){
    event.preventDefault()
    let taskName=document.querySelector("#task").value;
    let priorName=document.querySelector("#priority").value;
    let taskObj={
        task:taskName,
        prior:priorName,
    };
    taskArr.push(taskObj);
    localStorage.setItem("todo", JSON.stringify(taskArr));
    displayTable(taskArr);
}
function displayTable(taskArr){
    document.querySelector("tbody").innerHTML="";
    for(let i=0;i<taskArr.length;i++){
        let row=document.createElement("tr");
    let col1=document.createElement("td");
    col1.innerText=taskArr[i].task;
    let col2=document.createElement("td");
    col2.innerText=taskArr[i].prior;
    if(taskArr[i].prior=="High"){
        col2.style.backgroundColor="red";
    }
    else{
        col2.style.backgroundColor="green";
    }
    let col3=document.createElement("td");
    col3.innerText="Delete";
    col3.addEventListener("click",function(){
        taskArr.splice(i,1);
        localStorage.setItem("todo",JSON.stringify(taskArr));
        displayTable(taskArr);
    });
    row.append(col1,col2,col3);
    document.querySelector("tbody").append(row);
    }
}
