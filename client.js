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

calculateMonthlySalary()
}

function calculateMonthlySalary(){
console.log('in calculateMonthlySalary');
let totalMonthlySalary = 0;
for (let i = 0; i < employeeInfo.length; i++){
    totalMonthlySalary += Number( employeeInfo[i].InputAnnualSalary);
}
console.log('totalMonthySalary:', totalMonthlySalary);
const avgMonthlySalary = Number(totalMonthlySalary)/12;
let el = $('#totalMonthyDisplay');
el.empty();
el.append

}


function handleDeleteClick() {
 console.log('in deleteClick');
 $(this).closest('tr').remove();
}
