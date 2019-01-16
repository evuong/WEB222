// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function () {
    //FRUITS
    var fruitDiv = document.querySelector ('#fruit');
    var fruitList = document.createElement('ol');

    fruits.forEach(function(fruit){
        var add = document.createElement('li');         //creates a new list element on each iteration
        add.innerHTML = fruit;                          //the list element is equal to the current fruit
        fruitList.appendChild(add);                     //appends the fruit onto the original ordered list
    });
    fruitDiv.appendChild(fruitList);                    //appends the full list onto the div element

    //DIRECTORY
    var dirDiv = document.querySelector('#directory');
    var dirList = document.createElement('ul');

    directory.forEach(function(dir){
        var add = document.createElement('li');
        add.innerHTML = dir.name;
        dirList.appendChild(add);

        //if the type is directory (meaning theres files in it) run this code to include it under
        if (dir.type === 'directory') {
            var unordered = document.createElement('ul');   //creates the unordered list
            dir.files.forEach (function (inner) {
                var add2 = document.createElement('li');
                add2.innerHTML = inner.name;
                unordered.appendChild(add2);
            });
            add.appendChild(unordered);         //appends the unordered list into the correct parent
        }
    });
    dirDiv.appendChild(dirList);            //appends the whole list into the div element
}



