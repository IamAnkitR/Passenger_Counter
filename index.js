let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
  count+=1;
countEl.innerHTML = count 
}
function save(){
   saveEl.textContent += count + " - "
   countEl.textContent = 0
   count = 0
  }

 function reset(){
  saveEl.textContent = "Previous Entries: "
  countEl.textContent = 0
   count = 0
 } 