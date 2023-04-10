const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/fakerr');


//Creo Clase Usuario
class Usuario {
    constructor(){
        const users =[
            this._id= faker.database.mongodbObjectId(), 
            this.firstName= faker.name.firstName(),
            this.lastName= faker.name.lastName(),
            this.numberPhone= faker.phone.number(),
            this.email= faker.internet.email(),
            this.password= faker.internet.password()
        ];
    }
    
}

console.log(new Usuario());

app.get("/api/users/new", (req, res) => {
    res.json( new usuarios ());
});

//Creo Clase Compañia
class Compañia{
    constructor(){
        const compañia =[
            this._id= faker.database.mongodbObjectId(), 
            this.nameCompañia= faker.compañia.name(),
            this.address= [
                {
                    street: faker.address.street(),
                    city: faker.address.city(),
                    state: faker.address.state(),
                    postalCode: faker.address.countryCode(),
                    country: faker.address.country()
                }
            ]
        ];
    }
}
console.log(new Compañia());

app.get("/api/companies/new", (req, res) => {
    res.json( new Compañia() );
});

app.get("/api/user/company", (req, res) => {
    let newUsuario = new Usuario();
    let newCompañia = new Compañia();
    let usuarioCompañia = Object.assign(newUsuario,  newCompañia);
    console.log(usuarioCompañia)
    res.json(usuarioCompañia);
    
});

app.listen( port, () => console.log(`Listening on port: ${port}`));
