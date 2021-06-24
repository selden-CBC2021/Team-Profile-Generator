const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

describe ("Engineer class", () => {
    it("should return a new Engineer class containing the properties name, id, email, and GitHub username", () => {
            const engineer = new Engineer("Bob", 21, "bob@email.com", "github.com/bobby");

            expect(engineer.name).toEqual("Bob");
            expect(engineer.id).toBe(21);
            expect(engineer.email).toEqual("bob@email.com");
            expect(engineer.github).toEqual("github.com/bobby");
        })
    
    describe("getGithub", () => {
        it("should return Engineers Github account", () => {
            const engineer = new Engineer("Bob", 21, "bob@email.com", "github.com/bobby");
            expect(engineer.github).toEqual("github.com/bobby");
        })
        
    });
    describe("getRole", () => {
        it('getRole() should return "Engineer"', () => {
            const engineer = new Engineer("Bob", 21, "bob@email.com", "github.com/bobby"); 
                expect(engineer.getRole()).toEqual("Engineer");
        })

    });
})