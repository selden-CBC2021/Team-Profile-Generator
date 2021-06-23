const Employee = require("../lib/employee");

describe ("Employee", () => {
    describe ("getName", () => {
        it("should return a new 'Employee' object containing the property name", () => {
            const { obj } = new Employee().getName(name);

            expect(obj).toEqual(Employee.name)
        })
    });
    describe("getId", () => {

    });
    describe("getEmail", () => {
        
    });
})