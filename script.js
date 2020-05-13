
let inp = $('#inputTask');
let add = $('.add1');
let clearAll = $('#clearButton');
let erase = $('#deleteTask');
let list = $('.list-group');


function addTask(){
    let inputValue = inp.val();
    if(inputValue ==""){
        return;
    }
    let task1 =   `<li class="list-group-item">` + inputValue +
    `<button id="deleteTask" class="btn btn-warning"  onclick="delte(this.parentNode)" style="float: right;"><i class="fa fa-trash-alt"></i></button>
</li>`;
    list.append(task1);
}


function delte(e){
    var ee = e.parentNode;
    ee.removeChild(e);
}

inp.keypress((e)=>{
    if(e.keyCode==13){
        addTask();
    }
})

add.click(()=>{
    addTask();
})


clearAll.click(()=>{
    list.empty();
})
