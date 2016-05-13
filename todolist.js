////This code creates the variables that is stored with different elements
var todo = document.getElementById('todolist');
var form = document.getElementById('myform');
var field = document.getElementById('newitem');
var colors = document.getElementById('colors');

//This code makes the submit button function  
form.addEventListener('submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div style="color:' + colors.value + ' " >' + text + '</div>';
  evt.preventDefault();
}, false);
//This is the functioning of the buttons
todo.addEventListener('click', function(evt) {
  var tar = evt.target;
  if (tar.style.textDecoration === "line-through") {
    tar.parentNode.removeChild(tar);
  }
  else {
    tar.style.textDecoration = "line-through"
  }
  evt.preventDefault();
}, false);


