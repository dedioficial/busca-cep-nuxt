import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import LogoBuscaCep from "./LogoBuscaCep.vue";
import Tabs from "./Tabs.vue";

describe("Assets Components", () => {
  it("Logo", async () => {
    const component = await mountSuspended(LogoBuscaCep);
    expect(component.text()).toMatchInlineSnapshot('"BuscaCEP"');
  });

  it("Tabs", async () => {
    const tabs = ["CEP", "Logradouro"];
    const router = useRouter();

    const component = await mountSuspended(Tabs, {
      props: { tabs },
      global: {
        plugins: [router],
      },
    });

    const anchors = component.findAll("a");
    expect(anchors).toHaveLength(2);

    anchors.forEach((anchor, index) => {
      expect(anchor.text()).toBe(tabs[index]);
      expect(anchor.attributes("href")).toBe(
        index === 0 ? "/" : "/?tab=" + index
      );
      expect(anchor.classes().includes("active")).toBe(index === 0);
    });

    await router.push({ query: { tab: "1" } });
    await router.isReady();

    anchors.forEach((anchor, index) => {
      expect(anchor.classes().includes("active")).toBe(index === 1);
    });
  });
});
