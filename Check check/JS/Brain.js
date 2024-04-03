console.log("Tester");
let fulllist = document.getElementById("list")
// Adding a task
let plus = document.getElementById("adding"); //the text input
 // this will replace the input value
 //this will transfer the input value into inpurValue variable// both console will have same result since they are nothing but plus.value
let addo = document.getElementById("add") // The (add) button
let text = plus.value;
addo.addEventListener("click",adder);
function adder(){
   let text = plus.value;//Gets the text typed within the input field
 const li = document.createElement("li"); //creats a <li> element to host the task in
 if(text === ""){
    alert("Please write something first") //Gives an alert if the user did not type something
 }
 else{
  document.getElementById("list").appendChild(li); // hoists the li varieable onto the empty <li>
 }
  let node = document.createTextNode(text); //Creates a text node out of the value of the text input
    li.appendChild(node); //hoists the text node onto the created <li>
    li.classList.add("nonchecked")
     let car =document.createElement("button")//Creates the delete button
     let marker = document.createTextNode("\u00D7") //The x mark of the delete button
    car.appendChild(marker) //To hoist the x mark onto the delete button
     li.appendChild(car)//Hoists the delete button onto the li varieable
    car.classList.add("happy")
    car.onclick = function (){
      li.style.display = ("none")
    }
 plus.value = ""//Clears the input field to type another task
li.addEventListener("click",sav)
function sav(){
  li.classList.toggle("nonchecked")
  li.classList.toggle("checked")
// This function toggles between the classes (nonchecked/checked)
}
}