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
}

function calculateTotalMonthly() {
    let totalYearlySalary = 0;
    for (let i = 0; i < employeeInfo.length; i++) {
        totalYearlySalary += Number(employeeInfo[i].annualSalary);
    }
    let months = 12;
    let monthlySalary = Number(totalYearlySalary) / Number(months);
    console.log('Total Monthly:', monthlySalary);
    let el = $('#monthlyDisplayOut');
    el.empty();
    el.text(monthlySalary);
    if(monthlySalary >= $20000){
        $('#monthlyDisplayOut').css('color', 'red'); 
    }
}


function handleDeleteClick() {
    console.log('in deleteClick');
    $(this).closest('tr').remove();
}
