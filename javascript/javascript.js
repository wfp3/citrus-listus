
function validate(){
  var fName= document.getElementById("firstName").value.trim();
  var lName= document.getElementById("lastName").value.trim();
  var stAddy= document.getElementById("streetAddy").value.trim();
  var staAddy= document.getElementById("stateAddy").value.trim();

    if (fName=="" || lName=="" || stAddy=="" || staAddy=="") {
      alert("Please fill in the blank field.");
      
      return false;
    }
      else{
        console.log('hitting the else')
        return true;
      }
    }

/*const readMoreBtn=document.querySelector('.read-more-btn');
const text=document.querySelector ('.text');

readMoreBtn.addEventListener('click',(e)=>){
  text.classList.toggle('see-more');

})*/


