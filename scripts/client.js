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
  const id = $('#idInput').val();
  const title = $('#titleInput').val();
  const salary = $('#salaryInput').val();

  employeeObject = {
    firstName: firstName,
    lastName: lastName,
    id: id,
    title: title,
    salary: salary
}//endEmployeeObject
  
employeeInfo.push(employeeObject)


$('#firstNameInput').val('');
$('#lastNameInput').val('');
$('#idInput').val('');
$('#titleInput').val('');
$('#salaryInput').val('');
}//end getInfo

