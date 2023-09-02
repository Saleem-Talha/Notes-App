const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector("button");
let notes = document.querySelectorAll(".input-box");

// Function to display notes from localStorage
function showNotes() {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notesContainer.innerHTML = storedNotes;
  }
}
showNotes();


function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click", () => {
  const inputBox = document.createElement("p");
  const img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "./images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
  updateStorage(); 
});


notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {

    updateStorage();
  }
});


notesContainer.addEventListener("input", function (e) {
  if (e.target.tagName === "P") {
    updateStorage(); 
  }
});

document.addEventListener("keydown", event =>{
    if(event.key=== "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
