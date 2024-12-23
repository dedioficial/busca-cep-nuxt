import { mountSuspended, registerEndpoint } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import Index from "../index.vue";
import { CEP_91520040, MULTIPLE_ADDRESSESS } from "./mockedValues";

registerEndpoint("https://viacep.com.br/ws/91520030/json/", () => CEP_91520040);
registerEndpoint(
  "https://viacep.com.br/ws/RS/Porto%20Alegre/Santa%20Maria/json/",
  () => MULTIPLE_ADDRESSESS
);

const sleep = async (delay = 100) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });

describe("Index page", () => {
  it("Test CEP form", async () => {
    const component = await mountSuspended(Index);

    expect(component.findAll("input")).toHaveLength(1);
    expect(component.findAll(".p-select")).toHaveLength(0);

    const inputCEP = component.find<HTMLInputElement>('[name="cep"]');
    await inputCEP.setValue("91520030");
    expect(inputCEP.element.value).toBe("91520-030");

    await component.find("form").trigger("submit");
    await sleep();

    expect(component.text()).toContain("Endereço encontrado!");
  });

  //   it("Test Address form", async () => {
  //     const component = await mountSuspended(Index, {
  //       route: "?tab=1",
  //     });

  //     expect(component.findAll("input")).toHaveLength(2);
  //     expect(component.findAll(".p-select")).toHaveLength(1);

  //     const FormAddress = component.findComponent({ name: "FormAddress" });
  //     FormAddress.vm.formValues.estado = "RS";

  //     await nextTick();

  //     const inputCidade = component.find<HTMLInputElement>('[name="localidade"]');
  //     await inputCidade.setValue("Porto Alegre");

  //     const inputLogradouro = component.find<HTMLInputElement>(
  //       '[name="logradouro"]'
  //     );
  //     await inputLogradouro.setValue("Santa Maria");

  //     await component.find("form").trigger("submit");

  //     await sleep(1000);

  //     expect(component.text()).toContain("Endereços encontrados!");
  //   });
});
