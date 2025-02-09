const Settings = require("./Settings");

describe("Settings", () => {
  let settings;

  beforeEach(() => {
    settings = new Settings();
  });

  it("should return default settings", () => {
    const defaultSettings = new Map([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "easy"],
    ]);
    expect(settings.settings).toEqual(defaultSettings);
  });

  it("should apply user settings over default ones", () => {
    settings.setSetting("theme", "light");
    settings.setSetting("music", "pop");

    const expectedSettings = new Map([
      ["theme", "light"],
      ["music", "pop"],
      ["difficulty", "easy"],
    ]);

    expect(settings.settings).toEqual(expectedSettings);
  });

  it("should allow adding new user settings", () => {
    settings.setSetting("difficulty", "normal");

    const expectedSettings = new Map([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "normal"],
    ]);

    expect(settings.settings).toEqual(expectedSettings);
  });
});
