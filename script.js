let task = document.getElementById('task')
let add = document.getElementById('add')
let list = document.getElementById('ul')

add.onclick = function () {
    let li = document.createElement("li") 
    li.appendChild(document.createTextNode(task.value)) ;
    let Dbtn = document.createElement("button")
    Dbtn.innerText = 'X'
    li.appendChild(Dbtn)
    list.appendChild(li) ;
    task.value = ""

}

Dbtn.onclick = function(ev) {
    list.removeChild(ev.target.parent) ;
}
