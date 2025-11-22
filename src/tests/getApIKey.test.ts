import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";


describe("Test get api key function", () => {
  test("get api key ", () => {
    expect(getAPIKey).toBeDefined();
  });

});