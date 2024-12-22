export const url = "https://viacep.com.br/";

export const getCEPUrl = (cep: string | null) => {
  return `https://viacep.com.br/ws/${cep?.replace(/\-/g, "")}/json/`;
};

export type Address = {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  unidade?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  estado?: string;
  regiao?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
};

type Error = {
  erro: string;
};

export type ViaCEPResponse = Address & Error;
