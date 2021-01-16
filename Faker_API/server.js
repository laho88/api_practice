const express = require("express");
const faker = require("faker");
const app = express("");
const port = 8000;

class User {
    constructor() {
        this._id = faker.random.number(1000);
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.vehicle = faker.vehicle.vehicle();
    }
}

class Company {
    constructor(){
        this._id = faker.random.number(1000)
        this.name = faker.company.companyName()
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}
// console.log(new User());
// console.log(new Company());

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// *************** GET New User ***************

app.get("/api/user/new", (req, res) => {
    console.log("sending User")
    res.json({data: new User(), message: "hi"})
})

// *************** GET New Company ***************

app.get("/api/company/new", (req, res) => {
    res.json({response: new Company()})
})

// *************** GET New User/Company ***************

app.get("/api/user/company", (req, res) => {
    res.json({response: {user: new User(), company: new Company()}})
})

//********************************************** */
app.get("/api", (req, res) => {
    res.json({message: "You are connected to the API"})
})

app.listen(port, () => {
    console.log("This app is on port 8000");
})