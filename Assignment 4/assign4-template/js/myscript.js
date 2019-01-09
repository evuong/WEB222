// All you JavaScript code for assignment 4 should be in this file

//global toggle variable to use switch case
var toggle = "a";

window.onload = function () {
    //function for loading all the countries into the table
    document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies";
    countryTable();
    document.querySelector("#menu_21").addEventListener("click", million);
    document.querySelector("#menu_22").addEventListener("click", between);
    document.querySelector("#menu_31").addEventListener("click", area);
    document.querySelector("#menu_32").addEventListener("click", asia);
    document.querySelector("#menu_41").addEventListener("click", english);
    document.querySelector("#menu_43").addEventListener("click", chinese);
}

//function that creates the table with a for loop (Country List button)
function tableMakerLoop() {
    var toTable = document.querySelector("#outputTable");   //captures the place where the table is going to be placed
    var newBody = document.createElement("tbody");
    newBody.id = "tableBody";           //give an id to the table body to access it easier
   
    countries.forEach(function(country) {
        var newRow = document.createElement("tr");

        var flag = document.createElement("td");    //creating a flag var and an img element to hold the data
        var img = document.createElement("img");
        img.src = "flags/" + country.Code + ".png"; //locating the flag picture inside the "flags" folder
        img.width = "30";
        flag.appendChild(img);
        newRow.appendChild(flag);

        //adding the country code
        var code = document.createElement("td");
        var codeText = document.createTextNode(country.Code);
        code.appendChild(codeText);
        newRow.appendChild(code);

        //adding the country name
        var name = document.createElement("td");
        var nameText = document.createTextNode(country.Name.English);   //english is default language in "Country List"
        name.appendChild(nameText);
        newRow.appendChild(name);

        //adding the country continent
        var continent = document.createElement("td");
        var continentText = document.createTextNode(country.Continent);
        continent.appendChild(continentText);
        newRow.appendChild(continent);

        //adding the country's area
        var area = document.createElement("td");
        var areaNum = document.createTextNode(country.AreaInKm2);
        area.appendChild(areaNum);
        newRow.appendChild(area);

        //adding the country's population
        var pop = document.createElement("td");
        var popNum = document.createTextNode(country.Population);
        pop.appendChild(popNum);
        newRow.appendChild(pop);

        //adding the country capital
        var capital = document.createElement("td");
        var capitalText = document.createTextNode(country.Capital);
        capital.appendChild(capitalText);
        newRow.appendChild(capital);

        //once everything is a child node in the tr element, the row is then appended to the tbody
        newBody.appendChild(newRow);
    });
    //once everything is under the tbody element, it is finally appended to the <table>
    toTable.appendChild(newBody);
}

//no loop inside this function, is used for when loop is outside of the function (population, language, area/continent buttons)
function tableMaker(country) {
        var newRow = document.createElement("tr");

        var flag = document.createElement("td");
        var img = document.createElement("img");
        img.src = "flags/" + country.Code + ".png";
        img.width = "30";
        flag.appendChild(img);
        newRow.appendChild(flag);

        var code = document.createElement("td");
        var codeText = document.createTextNode(country.Code);
        code.appendChild(codeText);
        newRow.appendChild(code);

        var name = document.createElement("td");
        if (toggle === "f") {           //this if toggle is to check if the country name is supposed to be displayed in English or Chinese
            var nameText = document.createTextNode(country.Name.Chinese);
        }
        else {
            var nameText = document.createTextNode(country.Name.English);
        }
        name.appendChild(nameText);
        newRow.appendChild(name);

        var continent = document.createElement("td");
        var continentText = document.createTextNode(country.Continent);
        continent.appendChild(continentText);
        newRow.appendChild(continent);

        var area = document.createElement("td");
        var areaNum = document.createTextNode(country.AreaInKm2);
        area.appendChild(areaNum);
        newRow.appendChild(area);

        var pop = document.createElement("td");
        var popNum = document.createTextNode(country.Population);
        pop.appendChild(popNum);
        newRow.appendChild(pop);

        var capital = document.createElement("td");
        var capitalText = document.createTextNode(country.Capital);
        capital.appendChild(capitalText);
        newRow.appendChild(capital);

        return newRow;
        

    
}

//function that removes the previous table that was being displayed so that the new table can be placed
function removePrevious() {
    var remove = document.querySelector("#outputTable");
    remove.removeChild(tableBody);
}

//main function of the program
function countryTable() {
    switch (toggle) {
        case "a":   //Country List
        tableMakerLoop();
        break;

        case "b":   //Population>1M
        document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies - Population greater than 100 million";
        removePrevious();

        var toTable = document.querySelector("#outputTable");
        var newBody = document.createElement("tbody");
        newBody.id = "tableBody";

        countries.forEach(function(country){
            if (country.Population > 100000000) {       //checks for population over a million and only creates it if valid
                newBody.appendChild(tableMaker(country));
            }
        });
        toTable.appendChild(newBody);
        break;

        case "c":   //1M < Population < 2M
        document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies - Population between 1 and 2 million";
        removePrevious();
        
        var toTable = document.querySelector("#outputTable");
        var newBody = document.createElement("tbody");
        newBody.id = "tableBody";

        countries.forEach(function(country){
            if (country.Population > 1000000 && country.Population < 2000000) {
                newBody.appendChild(tableMaker(country));
            }
        });
        toTable.appendChild(newBody);
        break;

        case "d": //Area>1M and Americas
        document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies - Area greater than 1 million Km2, Americas";
        removePrevious();
        
        var toTable = document.querySelector("#outputTable");
        var newBody = document.createElement("tbody");
        newBody.id = "tableBody";

        countries.forEach(function(country) {
            if (country.AreaInKm2 > 1000000 && country.Continent === "Americas") {
                newBody.appendChild(tableMaker(country));
            }
        });
        toTable.appendChild(newBody);
        break;

        case "e":   //Asias
        document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies - All countries in Asia";
        removePrevious();
        
        var toTable = document.querySelector("#outputTable");
        var newBody = document.createElement("tbody");
        newBody.id = "tableBody";

        countries.forEach(function(country) {
            if (country.Continent === "Asia") {
                newBody.appendChild(tableMaker(country));
            }
        });
        toTable.appendChild(newBody);
        break;

        case "f":   //China countries
        document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies – Country / Dep. Name in Chinese (中文)";
        removePrevious();
        
        var toTable = document.querySelector("#outputTable");
        var newBody = document.createElement("tbody");
        newBody.id = "tableBody";

        countries.forEach(function(country) {
            newBody.appendChild(tableMaker(country));   //language changed within the tableMaker function
        });
        toTable.appendChild(newBody);
        break;
    }
}

//ALL THE TOGGLE SWITCHES FOR DIFFERENT BUTTON PRESSES
function million() {
    toggle = "b";
    countryTable();
}

function between() {
    toggle = "c";
    countryTable();
}

function area () {
    toggle = "d";
    countryTable();
}

function asia () {
    toggle = "e";
    countryTable();
}

function english () {
    removePrevious();
    toggle = "a";
    countryTable();
}

function chinese() {
    toggle = "f";
    countryTable();
}