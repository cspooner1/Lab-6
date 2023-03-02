'use strict'

function getRandom(max,min){
return Math.ceil(Math.random() * (max - min) +min);
}

// let hoursDemo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
//     let cookieDemo = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
//     let hoursArray = document.querySelector('.output')
//     for(let i = 0; i < hoursDemo.length; i++) {
//         //hoursDemo[i].innerHTML
//         let variable = document.createElement("li");
//         variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
//         hoursArray.append(variable);
//     }

const Seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    location: 'Seattle',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        // console.log(this.max);// This log is showing me how to get the maximum in an object. For example: this.max
        // console.log(this.min);// This log is showing me how to get the minimum in an object. For example: this.min
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    keepCount: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
           this.keepCount.push(i++);
    
            // console.log('seattle avg cookies/sale', this.avg);// This log shows me the avg of each cookie sale
            // console.log('seattle avg customers/hour', this.customersPerHour());// This log shows me the avg amount of people sold cookies to in hour
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
            console.log(` this is what tis is: ${this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()))}`);
        }
        return this.cookiesPerHour;
        console.log(this.cookiesPerHour);
    //    console.log(this.keepCount);
    },
}
Seattle.getCookies();
// console.log(Seattle.getCookies())

const Tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    location: 'Tokyo',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('tokyo avg cookies/sale', this.avg);
            console.log('tokyo avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
    
}

const Dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    location: 'Dubai',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('dubai avg cookies/sale', this.avg);
            console.log('dubai avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
    
}

const Paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    location: 'Paris',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('Paris avg cookies/sale', this.avg);
            console.log('Paris avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
    
}

const Lima = {
    min: 2,
    max: 16,
    avg: 4.6,
    location: 'Lima',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('Lima avg cookies/sale', this.avg);
            console.log('Lima avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
    
}