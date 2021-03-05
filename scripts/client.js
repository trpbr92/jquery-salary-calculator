$ (document).ready(onReady);

let employeeInfo = [];

function onReady(){
    console.log('JQ');
 $('#submitButton').on('click', getInfo) ;  
}//end onready

function getInfo(){
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
  
employeeInfo.push(employeeObject);
//target ul by id
let el = $('#employeeInfoOut');
//empty it
el.empty();
//loop through array
for (let i = 0; i < employeeInfo.length; i++) {
el.append(`${employeeInfo[i].firstName}`);   
}//end for


$('#firstNameInput').val('');
$('#lastNameInput').val('');
$('#idInput').val('');
$('#titleInput').val('');
$('#salaryInput').val('');
}//end getInfo

