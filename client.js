console.log('in js');

// let employeeInfo = [
//     {
//     firstName: '',
//     lastName: '',
//     id: '',
//     title: '',
//     annualSalary: ''
//     }
// ];

$(document).ready(onReady);

function onReady() {
//on click collect information from input field
$('#submitButton').on('click', handleAddClick);    
$('#employeeInfoTable').on('click', '.deleteButton', handleDeleteClick);
}

function handleAddClick() {
    console.log('in handAddClick');
    let newFirstName = $('#inputFirstName').val();
    let newLastName = $('#inputLastName').val();
    let newId = $('#inputIdNumber').val();
    let newTitle = $('#inputTitle').val();
    let newAnnualSalary = $('#InputAnnualSalary').val();

$('#employeeInfoTable').append(
`<tr>add
    <td>` + newFirstName + `</td>
    <td>` + newLastName + `</td>
    <td>` + newId + `</td>
    <td>` + newTitle + `</td>
    <td>` + newAnnualSalary + `</td>
    <td><button class="deleteButton">Delete</button></td>
</tr>`);

$('#inputFirstName').val('');
$('#inputLastName').val('');
$('#inputIdNumber').val('');
$('#inputTitle').val('');
$('#InputAnnualSalary').val('');

}

function handleDeleteClick() {
 console.log('in deleteClick');
}
