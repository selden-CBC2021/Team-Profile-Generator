const Manager = require("../lib/manager");

describe("Manager class", () => {
    it("should return a new Manager class with the properties name, id, email, and office number", () => {
        const manager = new Manager("John", 42, "johnny@email.com", 302);
        expect(manager.name).toEqual("John");
        expect(manager.id).toBe(42);
        expect(manager.email).toEqual("johnny@email.com");
        expect(manager.officeNumber).toBe(302);
    });
    describe("getRole", () => {
        it('getRole() should return "Manager"', () => {
            const manager = new Manager("John", 42, "johnny@email.com", 302);
                expect(manager.getRole()).toEqual("Manager");
        })

    });
    
    
})