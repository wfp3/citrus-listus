function validate(){
  var username = document.getElementById ("uname");
  var password = document.getElementById ("pass");

  if(username.value.trim()=="" ||password.value.trim()==""){
    alert("Please fill in your response.");
    return false;
  }
  else{
    true;

  }
}




/*w3 sample:
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
} 



 /* function validateForm() {
    var x = document.forms["formFreeTree"]["lastname"].value;
    if (x == "") {
      alert("Last name must be filled out; we need it to mine your data.");
      return false;
    }
  }

  function validateForm() {
    var x = document.forms["formFreeTree"]["address"].value;
    if (x == "") {
      alert("Address must be filled out; like, how will we get the tree to you otherwise?");
      return false;
    }
  }

  //function validateForm() {
  //  var x = document.forms["myForm"]["fname"].value;
  //  if (x == "") {
  //    alert("Name must be filled out");
  //    return false;
  //  }
  }













/*Early putzing over dichotomous tree: 1: choose 0 or 1 from arrays; 2: prompt questions based on arrays(0/no, 1/yes) 3: else/if statements to get the answer

let selOrange= ['round', 'orange'];
let selLime= ['green', 'oblong'];
let selLemon= ['yellow','oblong'];
let selGrapefruit=['round', 'yellow'];

var monoPrompt = window.prompt("Is the fruit round or oblong?");
var duoPrompt = window.prompt("Is the fruit orange?"); /*no=0, yes=1 
var triPrompt = window.prompt("Is the fruit yellow?");/
var tetraPrompt = window.prompt("Is the fruit green?");

if monoPrompt= (/*selOrange 0){

}
    else if {
        //
    }
    else if {

    else if {
    }
}*/