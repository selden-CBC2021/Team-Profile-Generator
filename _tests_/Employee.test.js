const Employee = require("../lib/employee");

describe ("Employee class", () => {
    it("should return a new Employee object containing the properties name, id, and email", () => {
            const employee = new Employee("Karen", 4, "karen@email.com");

            expect(employee.name).toEqual("Karen");
            expect(employee.id).toBe(4);
            expect(employee.email).toEqual("karen@email.com");
        })
    
    describe("getName", () => {
        it("should return Employee name", () => {
            const employee = new Employee("Karen", 4, "karen@email.com");
            expect(employee.name).toEqual("Karen");
        })
        
    });
    describe("getId", () => {
        it("should return Employee id", () => {
            const employee = new Employee("Karen", 4, "karen@email.com");
            expect(employee.id).toBe(4);
        })

    });
    describe("getEmail", () => {
        it("should return Employee email", () => {
            const employee = new Employee("Karen", 4, "karen@email.com");
            expect(employee.email).toEqual("karen@email.com");
        })

    });
    describe("getRole", () => {
        it('getRole() should return "Employee"', () => {
            const employee = new Employee("Karen", 4, "karen@email.com");
            expect(employee.getRole()).toEqual("Employee");
        })

    });
});