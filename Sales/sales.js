'use strict'

function getRandom(max, min) {
    return Math.ceil(Math.random() * (max - min) + min);
}

// const Seattle = {
//     min: 23,
//     max: 65,
//     avg: 6.3, //average amount of cookies sold per customer
//     location: 'Seattle',
//     hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
//     customersPerHour: function () {
//         // console.log(this.max);// This log is showing me how to get the maximum in an object. For example: this.max
//         // console.log(this.min);// This log is showing me how to get the minimum in an object. For example: this.min
//         // console.log(getRandom(this.max, this.min));
//         let randomnumber = getRandom(this.max, this.min);
//         return randomnumber;
//     },
//     cookiesPerHour: [],
//     getCookies: function () {
//         for (let i = 0; i < this.hoursOfOperation.length; i++) {
//             //    this.keepCount.push(i++);

//             // console.log('seattle avg cookies/sale', this.avg);// This log shows me the avg of each cookie sale
//             // console.log('seattle avg customers/hour', this.customersPerHour());// This log shows me the avg amount of people sold cookies to in hour
//             let numberofcookies = (this.avg * this.customersPerHour());
//             console.log("This avg", this.avg)
//             console.log("This.customersPerHour", this.customersPerHour())
//             this.cookiesPerHour.push(numberofcookies);
//             console.log("numberofcookies", numberofcookies);
//             console.log("======================================")

//         }
//         return this.cookiesPerHour;
//     },
// }
// let hoursDemo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// let cookieDemo = Seattle.getCookies(this.cookiesPerHour);
// let hoursArray = document.querySelector('.output')
// for (let i = 0; i < hoursDemo.length; i++) {
//     // hoursDemo[i].innerHTML
//     let variable = document.createElement("li");
//     variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
//     hoursArray.append(variable);
// }

// const Tokyo = {
//     min: 3,
//     max: 25,
//     avg: 1.2, //average amount of cookies sold per customer
//     location: 'Tokyo',
//     hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
//     customersPerHour: function () {
//         // console.log(this.max);// This log is showing me how to get the maximum in an object. For example: this.max
//         // console.log(this.min);// This log is showing me how to get the minimum in an object. For example: this.min
//         // console.log(getRandom(this.max, this.min));
//         let randomnumber = getRandom(this.max, this.min);
//         return randomnumber;
//     },
//     cookiesPerHour: [],
//     getCookies: function () {
//         for (let i = 0; i < this.hoursOfOperation.length; i++) {
//             //    this.keepCount.push(i++);

//             // console.log('seattle avg cookies/sale', this.avg);// This log shows me the avg of each cookie sale
//             // console.log('seattle avg customers/hour', this.customersPerHour());// This log shows me the avg amount of people sold cookies to in hour
//             let numberofcookies = (this.avg * this.customersPerHour());
//             console.log("This avg", this.avg)
//             console.log("This.customersPerHour", this.customersPerHour())
//             this.cookiesPerHour.push(numberofcookies);
//             console.log("numberofcookies", numberofcookies);
//             console.log("======================================")

//         }
//         return this.cookiesPerHour;
//     },
// }
// let hoursDemo1 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// let cookieDemo1 = Tokyo.getCookies(this.cookiesPerHour);
// let hoursArray1 = document.querySelector('.output1')
// for (let i = 0; i < hoursDemo.length; i++) {
//     // hoursDemo[i].innerHTML
//     let variable = document.createElement("li");
//     variable.innerHTML = `${hoursDemo1[i]}: ${cookieDemo1[i]} cookies`;
//     hoursArray1.append(variable);
// }


// const Dubai = {
//     min: 11,
//     max: 38,
//     avg: 3.7, //average amount of cookies sold per customer
//     location: 'Dubai',
//     hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
//     customersPerHour: function () {
//         // console.log(this.max);// This log is showing me how to get the maximum in an object. For example: this.max
//         // console.log(this.min);// This log is showing me how to get the minimum in an object. For example: this.min
//         // console.log(getRandom(this.max, this.min));
//         let randomnumber = getRandom(this.max, this.min);
//         return randomnumber;
//     },
//     cookiesPerHour: [],
//     getCookies: function () {
//         for (let i = 0; i < this.hoursOfOperation.length; i++) {
//             //    this.keepCount.push(i++);

//             // console.log('seattle avg cookies/sale', this.avg);// This log shows me the avg of each cookie sale
//             // console.log('seattle avg customers/hour', this.customersPerHour());// This log shows me the avg amount of people sold cookies to in hour
//             let numberofcookies = (this.avg * this.customersPerHour());
//             console.log("This avg", this.avg)
//             console.log("This.customersPerHour", this.customersPerHour())
//             this.cookiesPerHour.push(numberofcookies);
//             console.log("numberofcookies", numberofcookies);
//             console.log("======================================")

//         }
//         return this.cookiesPerHour;
//     },
// }
// let hoursDemo2 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// let cookieDemo2 = Dubai.getCookies(this.cookiesPerHour);
// let hoursArray2 = document.querySelector('.output2')
// for (let i = 0; i < hoursDemo.length; i++) {
//     // hoursDemo[i].innerHTML
//     let variable = document.createElement("li");
//     variable.innerHTML = `${hoursDemo2[i]}: ${cookieDemo2[i]} cookies`;
//     hoursArray2.append(variable);
// }

// const Paris = {
//     min: 20,
//     max: 38,
//     avg: 2.3, //average amount of cookies sold per customer
//     location: 'Paris',
//     hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
//     customersPerHour: function () {
//         // console.log(this.max);// This log is showing me how to get the maximum in an object. For example: this.max
//         // console.log(this.min);// This log is showing me how to get the minimum in an object. For example: this.min
//         // console.log(getRandom(this.max, this.min));
//         let randomnumber = getRandom(this.max, this.min);
//         return randomnumber;
//     },
//     cookiesPerHour: [],
//     getCookies: function () {
//         for (let i = 0; i < this.hoursOfOperation.length; i++) {
//             //    this.keepCount.push(i++);

//             // console.log('seattle avg cookies/sale', this.avg);// This log shows me the avg of each cookie sale
//             // console.log('seattle avg customers/hour', this.customersPerHour());// This log shows me the avg amount of people sold cookies to in hour
//             let numberofcookies = (this.avg * this.customersPerHour());
//             console.log("This avg", this.avg)
//             console.log("This.customersPerHour", this.customersPerHour())
//             this.cookiesPerHour.push(numberofcookies);
//             console.log("numberofcookies", numberofcookies);
//             console.log("======================================")

//         }
//         return this.cookiesPerHour;
//     },
// }
// let hoursDemo3 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// let cookieDemo3 = Paris.getCookies(this.cookiesPerHour);
// let hoursArray3 = document.querySelector('.output3')
// for (let i = 0; i < hoursDemo.length; i++) {
//     // hoursDemo[i].innerHTML
//     let variable = document.createElement("li");
//     variable.innerHTML = `${hoursDemo3[i]}: ${cookieDemo3[i]} cookies`;
//     hoursArray3.append(variable);
// }

// const Lima = {
//     min: 2,
//     max: 16,
//     avg: 4.6, //average amount of cookies sold per customer
//     location: 'Paris',
//     hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
//     customersPerHour: function () {
//         // console.log(this.max);// This log is showing me how to get the maximum in an object. For example: this.max
//         // console.log(this.min);// This log is showing me how to get the minimum in an object. For example: this.min
//         // console.log(getRandom(this.max, this.min));
//         let randomnumber = getRandom(this.max, this.min);
//         return randomnumber;
//     },
//     cookiesPerHour: [],
//     getCookies: function () {
//         for (let i = 0; i < this.hoursOfOperation.length; i++) {
//             //    this.keepCount.push(i++);

//             // console.log('seattle avg cookies/sale', this.avg);// This log shows me the avg of each cookie sale
//             // console.log('seattle avg customers/hour', this.customersPerHour());// This log shows me the avg amount of people sold cookies to in hour
//             let numberofcookies = (this.avg * this.customersPerHour());
//             console.log("This avg", this.avg)
//             console.log("This.customersPerHour", this.customersPerHour())
//             this.cookiesPerHour.push(numberofcookies);
//             console.log("numberofcookies", numberofcookies);
//             console.log("======================================")

//         }
//         return this.cookiesPerHour;
//     },
// }
// let hoursDemo4 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// let cookieDemo4 = Lima.getCookies(this.cookiesPerHour);
// let hoursArray4= document.querySelector('.output4')
// for (let i = 0; i < hoursDemo.length; i++) {
//     // hoursDemo[i].innerHTML
//     let variable = document.createElement("li");
//     variable.innerHTML = `${hoursDemo4[i]}: ${cookieDemo4[i]} cookies`;
//     hoursArray4.append(variable);
// }

let hoursDemo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function cookiesStandLocation(min, max, avg, location, hours) {
    let stand = {};
    stand.min = min;
    stand.max = max;
    stand.avg = avg;
    stand.location = location;
    stand.cookiesPerHour = [];
    stand.hoursOfOperation = hours;

    stand.getCustomers = function () {
        return Math.ceil(Math.random() * (this.max - this.min) + this.min);
    }

    stand.getCookies = function getCookies() {
        for (let i = 0; i < this.hoursOfOperation.length; i++) {
            //    this.keepCount.push(i++);

            // console.log('seattle avg cookies/sale', this.avg);// This log shows me the avg of each cookie sale
            // console.log('seattle avg customers/hour', this.customersPerHour());// This log shows me the avg amount of people sold cookies to in hour
            let numberofcookies = (this.avg * this.getCustomers());
            console.log("This avg", this.avg)
            console.log("This.customersPerHour", this.getCustomers())
            this.cookiesPerHour.push(numberofcookies);
            console.log("numberofcookies", numberofcookies);
            console.log("======================================");

        }
        return this.cookiesPerHour;
    }
    
    stand.tableFiller = function () {
        let tableLoc = document.createElement('tr');
        let tableHours = document.createElement('th');
        let locData = document.createElement('td');
        locData.innerHTML = `${stand.location}`;
        tableLoc.append(locData);
        for (let i = 0; i < hoursDemo.length; i++) {
            let tableData = document.createElement('td');
            tableData.innerHTML = `${stand.cookiesPerHour[i]}`;
            tableLoc.append(tableData);
        }
        document.getElementById("tab").append(tableLoc);

    }
    return stand;
}

const Seattle = cookiesStandLocation(23, 65, 6.3, "Seattle", hoursDemo, []);
Seattle.getCookies();
Seattle.getCustomers();
Seattle.tableFiller();

const Tokyo = cookiesStandLocation(3, 24, 1.2, "Tokyo", hoursDemo);
Tokyo.getCookies();
Tokyo.getCustomers();
Tokyo.tableFiller();

const Dubai = cookiesStandLocation(11, 38, 3.7, "Dubai", hoursDemo);
Dubai.getCookies();
Dubai.getCustomers();
Dubai.tableFiller();

const Paris = cookiesStandLocation(20, 38, 2.3, "Paris", hoursDemo);
Paris.getCookies();
Paris.getCustomers();
Paris.tableFiller();

const Lima = cookiesStandLocation(2, 16, 4.6, "Lima", hoursDemo);
Lima.getCookies();
Lima.getCustomers();
Lima.tableFiller();


// td = cookiesPerHour\
