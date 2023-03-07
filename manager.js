const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;

        super(name, id, email)
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager;