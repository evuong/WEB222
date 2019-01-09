/************************************************************************ *********
* WEB222 – Assignment 02
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students. *
* Name: Edward Vuong Student ID: 120246186 Date: Oct 5, 2018
* ********************************************************************************/

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];

 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */

var CustomerDB = {
    customers: [],
    addresses: [],
    stores: [],

    addStore(storeObj) {
        this.stores.push(storeObj);
    },

    addCustomer(customerObj) {
        customerObj.data.add_date = Date();     //change add_date to current date
        this.customers.push(customerObj);
    },

    addAddress(addressObj) {
        this.addresses.push(addressObj);
    },

    insertData(allData) {
        allData.forEach (function (data) {
            //checks type of data before calling function to push data to appropriate array
            if (data.type == "store") {
                CustomerDB.addStore (data);
            }
            if (data.type == "customer") {
                CustomerDB.addCustomer (data);
            }
            if (data.type == "address") {
                CustomerDB.addAddress (data);
            }
        });
    },

    //display customer based on id entered
    outputCustomerbyId (customer_id) {
        this.customers.forEach(function (customer) {    
            if (customer.data.customer_id == customer_id) {     //checks customer id against all items in customers array
                console.log("Customer " + customer.data.customer_id + ": " + customer.data.first_name + " " + customer.data.last_name + " (" + customer.data.email + ")");
                console.log("Home Address: " + CustomerDB.getAddressByID(customer.data.address_id)); //calls getAddressByID function using customer's address_id
                console.log("Joined: " + customer.data.add_date);
            }
        });
    },

    outputAllCustomers () {
        console.log("All Customers");
        console.log("");
        this.customers.forEach (function (customer) { //cycles through every customer then prints their info
            console.log("Customer " + customer.data.customer_id + ": " + customer.data.first_name + " " + customer.data.last_name + " (" + customer.data.email + ")");
            console.log("Home Address: " + CustomerDB.getAddressByID(customer.data.address_id));
            console.log("Joined: " + customer.data.add_date);
            console.log("");       //newline to seperate output
        });
    },

    getAddressByID (address_id) {
        var addy;       //variable to capture address output
        this.addresses.forEach(function (address){
            if (address.data.address_id == address_id) {
                //prints out all the properties of the customer's address (street, city, province, postal)
                addy = address.data.address + " " + address.data.city + ", " + address.data.province + ". " + address.data.postal_code;
            }
        });
        return addy;
    },

    outputCustomersByStore (store_id) {
        console.log("Customers in Store: " + this.getStoreByID(store_id));
        console.log("");
        this.customers.forEach (function (customer) {
            if (customer.data.store_id == store_id) {
                //same code to print out customer info
                console.log("Customer " + customer.data.customer_id + ": " + customer.data.first_name + " " + customer.data.last_name + " (" + customer.data.email + ")");
                console.log("Home Address: " + CustomerDB.getAddressByID(customer.data.address_id));
                console.log("Joined: " + customer.data.add_date);
                console.log("");       //newline to seperate output
            }
        });
    },

    //checks each store by ID and returns the name of the one that matches
    getStoreByID (store_id) {
        var id;             //variable to capture id number of store
        this.stores.forEach (function (store) {
            if (store.data.store_id == store_id) {
                id = store.data.name;  //stores the variable inside of id
            }
        });
        return id;
    },

    removeCustomerById (customer_id) {
        //using a for loop in order to capture index location for array.splice
        for (var i = 0; i < CustomerDB.customers.length; i++) {
            if (CustomerDB.customers[i].data.customer_id == customer_id) {
                //runs removeaddress using the ID of the customer that matched the argument
                CustomerDB.removeAddressByID(CustomerDB.customers[i].data.address_id);
                CustomerDB.customers.splice(i, 1); //deletes 1 element in customer array at index 'i'
            }
        }
    },

    removeAddressByID (address_id) {
        var count = 0; //count to keep track of how many times the address appears, must initialize to 0
        for (var i = 0; i < CustomerDB.customers.length; i++) {
            if (CustomerDB.customers[i].data.address_id == address_id) {
                count++; //if address_id is matched, count goes up 1
            }
        }

        for (var i = 0; i < CustomerDB.stores.length; i++) {
            if (CustomerDB.stores[i].data.address_id == address_id)
            count++;  //if address_id is matched, count goes up 1
        }

        if (count == 1) { //if there was more than one occurance of the address_id, this if statement wouldnt run
            for (var i = 0; i < CustomerDB.addresses.length; i++) {
                if (CustomerDB.addresses[i].data.address_id == address_id) {
                    CustomerDB.addresses.splice(i, 1);  //deletes 1 element in address array at index 'i'
                }
            }
        }
    },

    outputAllAddresses () {
        console.log("All Addresses");
        console.log("");
        this.addresses.forEach (function (address) { //cycles through every address then prints info
            console.log("Address " + address.data.address_id + ": " + address.data.address, address.data.city + ", " + address.data.province + ". " + address.data.postal_code);
            console.log("");       //newline to seperate output
        });
    },

    outputAllStores () {
        console.log("All Stores");
        console.log("");
        this.stores.forEach(function (store) {
            console.log("Store " + store.data.store_id + ": " + store.data.name);
            console.log("Location: " + CustomerDB.getAddressByID(store.data.address_id));;
            console.log("");
        });
    }

};



/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/



// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 