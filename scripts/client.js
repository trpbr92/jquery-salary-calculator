$ (document).ready(onReady)

let employeeInfo = [];

function onReady(){
    console.log('JQ');
 $('#submitButton').on('click', getInfo)   
}//end onready

function getInfo(){
  console.log('Clicked!'); 
  const firstName = $('#firstNameInput').val();
  const lastName = $('#lastNameInput').val();
  employeeObject = {
    firstName: firstName,
    lastName: lastName
  }//endEmployeeObject
  
  employeeInfo
  el = $()

$('#firstNameInput').val('');
$('#lastNameInput').val('');
$('#idInput').val('');
$('#titleInput').val('');
$('#salaryInput').val('');
}//end getInfo

