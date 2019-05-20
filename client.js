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

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

$(document).ready(onReady);

function onReady() {
    //on click collect information from input field
    $('#submitButton').on('click', handleAddClick);
    $('#employeeInfoTable').on('click', '#deleteButton', handleDeleteClick);
}

function handleAddClick() {
    console.log('in handAddClick');
    let newEmployeeInfo = {
        firstName: $('#inputFirstName').val(),
        lastName: $('#inputLastName').val(),
        id: $('#inputIdNumber').val(),
        title: $('#inputTitle').val(),
        annualSalary: $('#inputAnnualSalary').val()
    }
    employeeInfo.push(newEmployeeInfo);
    $('#employeeInfoTable').append(
        `<tr>add
    <td align="left">` + newEmployeeInfo.firstName + `</td>
    <td align="left">` + newEmployeeInfo.lastName + `</td>
    <td align="center">` + newEmployeeInfo.id + `</td>
    <td align="center">` + newEmployeeInfo.title + `</td>
    <td align="center">` + formatter.format(newEmployeeInfo.annualSalary) + `</td>
    <td align="center"><button id="deleteButton">Delete</button></td>
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
    $('#monthlyDisplayOut').text(formatter.format(monthlySalary));
    if (monthlySalary >= 20000) {
        $('#monthlyDisplayOut').css('color', 'red');
    }
}


function handleDeleteClick() {
    console.log('in deleteClick');
    $(this).closest('tr').remove();
}
