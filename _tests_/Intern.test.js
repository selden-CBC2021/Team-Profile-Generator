const Intern = require("../lib/intern");

describe("Intern class", () => {
    it("should return a new Intern class with the properties name, id, email, and school", () => {
        const intern = new Intern("Tew", 33, "tew@email.com", "Michigan State");
        expect(intern.name).toEqual("Tew");
        expect(intern.id).toBe(33);
        expect(intern.email).toEqual("tew@email.com");
        expect(intern.school).toEqual("Michigan State");
    });
    describe("getSchool", () => {
        it("should return Intern's school", () => {
            const intern = new Intern("Tew", 33, "tew@email.com", "Michigan State");
                expect(intern.school).toEqual("Michigan State");
        })
        
    });
    describe("getRole", () => {
        it('getRole() should return "Intern"', () => {
            const intern = new Intern("Tew", 33, "tew@email.com", "Michigan State"); 
                expect(intern.getRole()).toEqual("Intern");
        })

    });
    
    
})