const Team = require("./Team");

describe("Team", () => {
  let team;
  let character1;
  let character2;

  beforeEach(() => {
    team = new Team();
    character1 = { name: "Character 1" };
    character2 = { name: "Character 2" };
  });

  it("should add a character to the team", () => {
    team.add(character1);
    expect(team.toArray()).toEqual([character1]);
  });

  it("should not add the same character twice", () => {
    team.add(character1);
    expect(() => team.add(character1)).toThrow("Character already in the team");
  });

  it("should add multiple characters without duplicates", () => {
    team.addAll(character1, character2);
    expect(team.toArray()).toEqual([character1, character2]);
  });
});
