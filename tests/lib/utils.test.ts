import {
  formatPrice,
  firstLatterUpper,
  showShortText,
  lowerCaseText,
  formatISODate,
} from "@/lib/utils";

describe("Utilities", () => {
  it("Should be format a price like USD currency", () => {
    expect(formatPrice(5000)).toBe("$5,000");
  });

  it("Should be return a string with first latter uppercase", () => {
    expect(firstLatterUpper("latter")).toBe("Latter");
  });

  it("Should return a provided specific length text", () => {
    expect(showShortText("This is testing", 4)).toBe("This...");
  });

  it("Should return a lower case string", () => {
    expect(lowerCaseText("Hello world")).toBe("hello world");
    expect(lowerCaseText("HELLO WORLD")).toBe("hello world");
  });

  it("Should return only the date slice of ISO date string", () => {
    expect(formatISODate("2025-08-20T00:00:00.000Z")).toBe("2025-08-20");
  });
});
