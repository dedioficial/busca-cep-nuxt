import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import InputCEP from "./InputCEP.vue";

describe("Forms Components", () => {
  it("InputCEP", async () => {
    const component = await mountSuspended(InputCEP);

    const input = component.find("input");

    expect(input.element.value).toBe("");

    await input.setValue("1");
    expect(input.element.value).toBe("1____-___");

    await input.setValue("12345");
    expect(input.element.value).toBe("12345-___");

    await input.setValue("123456");
    expect(input.element.value).toBe("12345-6__");

    await input.setValue("12345678");
    expect(input.element.value).toBe("12345-678");

    await input.setValue("123456789");
    expect(input.element.value).toBe("12345-678");
  });
});
