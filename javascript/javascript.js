
function validate(){
  var fName= document.getElementById("firstName").value.trim();
  var lName= document.getElementById("lastName").value.trim();
  var stAddy= document.getElementById("streetAddy").value.trim();
  var staAddy= document.getElementById("stateAddy").value.trim()

    if(fName.value=="");
    if(lName.value=="");
    if(stAddy.value=="");
    if(staAddy.value=="");{

      alert("Please fill in the blank field.");
      return false;
    }
      else{
        true;
      }
    }
}




/*function validateForm(){
  var firstName= document.getDocumentById ('firstname').value.trim();
  var lastName= document.getDocumentById ('lastname').value.trim();
  var streetAddy= document.getDocumentById ('street').value.trim();
  var stateAddy= document.getDocumentById ('state').value.trim();

  var errorMessage;

  if (firstName=="") errorMessage += "Please provide your first name."
  if (lastName=="") errorMessage += "Please provide your last name (or at least an alias)."
  if (streetAddy=="") errorMessage += "A street is required for delivery, duh."
  if (stateAddy=="") errorMessage += "Do you live in a state of confusion? Please fill in your state."

  alert(errorMessage)
  if(errorMessage>0)return false;
  return true;
}
/*function validate(){
  var username = document.getElementById ("uname").value.trim();
  /*var password = document.getElementById ("pass").value.trim();
  var street = document.getElementById ("street").value.trim();
  var password = document.getElementById ("pass").value.trim();
  if(firstName=="") errorMessage+="Please provide your first name."
  if(street=="") errorMessage+="Please provide your street address."
  if(state=="") errorMessage+="Is your state confused? Please fill in a state name."
  alert (errorMessage);
  if (errorMessage.length>0) return false;
  return true;

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