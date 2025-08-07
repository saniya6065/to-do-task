


const input = document.getElementById("input");
const listcontainer = document.getElementById("list-container");
 
function btnclicked(){
  
   if(input.value == ""){
      alert("write your task")
   }else{
    const li = document.createElement("li")
    li.innerHTML = input.value;
    listcontainer.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
  li.appendChild(span)

   }
   input.value = ""
   saveData()
}
listcontainer.addEventListener("click",function(e){
   console.log(e)
    if(e.target.tagName === "LI"){
       e.target.classList.add("complete")
       saveData()
    }else if(e.target.tagName ==="SPAN"){
       e.target.parentElement.remove("")
       saveData()
    }
},false)
function saveData(){
   localStorage.setItem("data",listcontainer.innerHTML)
}
function showTask(){
   listcontainer.innerHTML=localStorage.getItem("data") 
}
showTask()