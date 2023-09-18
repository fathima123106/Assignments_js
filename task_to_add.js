function adddata(mylists){
    var inpt = document.getElementById("txt").value;
    var li = document.createElement("li");
    document.getElementById("mylists").appendChild(li).textContent=inpt;
   
}