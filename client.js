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
}

function handleAddClick() {
    console.log('in handAddClick');
    let newfirstName = $('#inputFirstName').val();
    let newlastName = $('#inputLastName').val();
    let newId = $('#inputIdNumber').val();
    let newTitle = $('#inputTitle').val();
    let newAnnualSalary = $('#InputAnnualSalary').val();

$('#employeeInfoTable').append(
`<tr>add
    <td>` + newfirstName + `</td>
    <td>` + newlastName + `</td>
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
