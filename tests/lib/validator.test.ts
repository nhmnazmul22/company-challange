import { isValidateEmail } from "@/lib/validator";

describe("Validator Utilities", () => {
  describe("Email validator", () => {
    it("Should give true if the user proved a valid email", () => {
      expect(isValidateEmail("nhmnazmul@gmail.com")).toBeTruthy();
    });

    it("Should give false, if the user provide a invalid email", () => {
      expect(isValidateEmail("nnhmnazmul@")).toBeFalsy();
      expect(isValidateEmail("nnhmnazmul@gmail")).toBeFalsy();
      expect(isValidateEmail("nnhmnazmul@gmail.")).toBeFalsy();
      expect(isValidateEmail("@gmail.")).toBeFalsy();
    });
  });
});
