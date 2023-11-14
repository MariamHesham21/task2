const fs = require ("fs")

const data50File = require ("./data50")

const yargs = require ("yargs")

yargs.command({
    command :"add",
    describe : "add item",
    builder :{
        fname: {
            describe :"this is first name",
            demandOption : true,
            type : "string"
        },
        lname:{
            describe :"this is last name",
            demandOption : true,
            type : "string"
        }
    },
    handler: (x) => {
        // console.log("you already add")
        // console.log(x)
        // console.log(x.fname , x.lname , x.age)
        data50File.addPerson(x.id ,x.fname , x.lname , x.age ,x.city)
    }
})
yargs.command({
    command :"delete",
    describe : "delete item",
    handler: (x)=>{
        // console.log(x)
        data50File.deletePerson(x.id)
    }
})
yargs.command({
    command :"read",
    describe : "read data",
    builder : {
        id :{
            describe :"this is id",
            demandOption : true,
            type : "numbrt"
        }
    },
    handler: (x)=>{
        data50File.readData(x.id)
    }
})

// console.log(yargs.argv)
yargs.parse()
