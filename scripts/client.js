$ (document).ready(onReady);

let employeeInfo = [];

function onReady(){
    console.log('JQ');
 $('#submitButton').on('click', getInfo);
}//end onready

function getInfo(){
  console.log('in getInfo');
  //create object with employee information
  employeeObject = {
    firstName: $('#firstNameInput').val(),
    lastName: $('#lastNameInput').val(),
    id: $('#idInput').val(),
    title: $('#titleInput').val(),
    salary: $('#salaryInput').val()
}//endEmployeeObject
  //push object into employeeInfo
employeeInfo.push(employeeObject);
//update the DOM
displayInfo();
//update total monthly cost
//empty text inputs
$('#firstNameInput').val('');
$('#lastNameInput').val('');
$('#idInput').val('');
$('#titleInput').val('');
$('#salaryInput').val('');
}//end getInfo

function displayInfo(){
  console.log('in displayInfo');
//target ul by id
let el = $('#employeeInfoOut');
//empty it
el.empty();
//loop through array
for (let i = 0; i < employeeInfo.length; i++) {
el.append(`<ul> ${employeeInfo[i].firstName} ${employeeInfo[i].lastName} ${employeeInfo[i].id} ${employeeInfo[i].title} $${employeeInfo[i].salary}</ul>`);   
}//end for
let mCost = $('#totalMonthlyOut')
mCost.empty();
mCost.append(`<ul>$${totalMonthly()} </ul>`)
}//end displayInfo

function totalMonthly(){
  console.log('in totalMontly');
  let monthlyCost = 0;
  //loop through employee info for annual salary info
  for (let i = 0; i < employeeInfo.length; i++) {
    monthlyCost += Number(employeeInfo[i].salary)
  }//end for
    //add red background to total monthly if exceeds $20,000
  if (monthlyCost > 240000) {
    $('#totalMonthlyOut').css("background-color","red"); 
  return monthlyCost /= 12;
}// end if
else{
  return monthlyCost /= 12;
}//end else
  }//end totalMontly
  