class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [100, "Invalid input"],
      [200, "Data not found"],
      [300, "Unknown error"],
    ]);
  }

  translate(code) {
    return this.errors.get(code) || "Unknown error";
  }
}

module.exports = ErrorRepository;
