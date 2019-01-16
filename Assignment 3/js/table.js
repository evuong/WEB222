// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];

window.onload = function () {
    var tab = document.createElement('table');
    var tableDiv = document.querySelector('#table3');

    //setting the styling of the table
    tab.border="1";
    tab.style="border:1px solid;";

    var row = document.createElement('tr');

    //adding all the table headers using an array
    var array = ["First Name", "Last Name", "Age", "Email"];
    array.forEach(function(desc) {
        var head = document.createElement('th');
        head.innerHTML = desc;
        row.appendChild(head);
    });
    //appending the header into the main table element
    tab.appendChild(row);

    //for each user create a new row, add each piece of data (name,age,email), append into row and append into main table
    users.forEach(function(user) {
        var row2 = document.createElement('tr');

        var first = document.createElement('td');
        first.innerHTML = user.first_name;
        var last = document.createElement('td');
        last.innerHTML = user.last_name;
        var age = document.createElement('td');
        age.innerHTML = user.age;
        var email = document.createElement('td');
        email.innerHTML = '<a href="mailto:'+ user.email+ '">' + user.email + '</a>';   //making sure the email displays and links properly
       
        row2.appendChild(first);
        row2.appendChild(last);
        row2.appendChild(age);
        row2.appendChild(email);
        tab.appendChild(row2);
    });
    tableDiv.appendChild(tab);
}