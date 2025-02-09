const ErrorRepository = require("./ErrorRepository");

describe("ErrorRepository", () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
  });

  it("should return error description for valid code", () => {
    expect(errorRepo.translate(100)).toBe("Invalid input");
  });

  it('should return "Unknown error" for unknown code', () => {
    expect(errorRepo.translate(999)).toBe("Unknown error");
  });
});
