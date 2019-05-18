console.log('in js');

let employeeInfo = [
    {
    firstName: '',
    lastName: '',
    id: '',
    title: '',
    annualSalary: ''
}
];

$(document).ready(onReady);

function onReady() {
//on click collect information from input field
$('#submitButton').on('click', handleAddClick);    
$('#employeeInfoTable').on('click', '.deleteButton', handleDeleteClick);
}

function handleAddClick() {
    console.log('in handAddClick');
let newEmployeeInfo = {
    firstName: $('#inputFirstName').val(),
    lastName: $('#inputLastName').val(),
    id: $('#inputIdNumber').val(),
    title: $('#inputTitle').val(),
    annualSalary: $('#InputAnnualSalary').val()
}
employeeInfo.push(newEmployeeInfo);
$('#employeeInfoTable').append(
`<tr>add
    <td>` + newEmployeeInfo.firstName + `</td>
    <td>` + newEmployeeInfo.lastName + `</td>
    <td>` + newEmployeeInfo.id + `</td>
    <td>` + newEmployeeInfo.title + `</td>
    <td>` + newEmployeeInfo.annualSalary + `</td>
    <td><button class="deleteButton">Delete</button></td>
</tr>`);
$('#inputFirstName').val('');
$('#inputLastName').val('');
$('#inputIdNumber').val('');
$('#inputTitle').val('');
$('#InputAnnualSalary').val('');
calculateTotalMonthly();
displayTotalMonthly();
}

function calculateTotalMonthly(){
let totalYearlySalary = 0;
for (let i = 0; i < employeeInfo.length; i++){
    totalYearlySalary += Number( employeeInfo[i].annualSalary);
}
let months = 12;
const MonthlySalary = Number(totalYearlySalary)/Number(months);
console.log('Total Monthly:', MonthlySalary);
}

function displayTotalMonthly() {
    console.log('in displayTotalMonthly');
}


function handleDeleteClick() {
 console.log('in deleteClick');
 $(this).closest('tr').remove();
}
