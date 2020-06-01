document.getElementById('add_note').addEventListener("click", function(){

    var btn = document.getElementById("notes");
    var id = create_id();

    var div = document.createElement("div");
    div.setAttribute('id', id);
    btn.appendChild(div);

    var i = document.createElement("p");
    i.setAttribute('id', id);
    i.innerHTML = document.getElementById("note_data").value;
    i.style.backgroundColor = document.getElementById("color").value;
    i.style.color = "white";
    console.log(document.getElementById("color").value);
    div.appendChild(i);

    var j = document.createElement("button");
    j.setAttribute('id', id);
    j.innerHTML = "Edit";
    j.setAttribute('onclick', 'edit(id)');
    div.appendChild(j);

    var k = document.createElement("button");
    k.setAttribute('id', id);
    k.innerHTML = "Delete";
    k.setAttribute('onclick', 'del(id)');
    div.appendChild(k);


});

function create_id(){

var id = Math.random().toString(36).slice(2); 
return id;
}

function edit(id){

var ele = document.getElementById(id);
document.getElementById(id).contentEditable = "true";
ele.setAttribute("contentEditable", "true");
setTimeout(function(id){ ele.setAttribute("contentEditable", "false"); }, 3000);
}

function del(id){
var ele = document.getElementById(id);

ele.remove(); 
}
