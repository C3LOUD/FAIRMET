import { Brand } from "../types";

export const getBrands = async (): Promise<Brand[]> => {
  const res = await fetch(`/data/brand.json`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const json = await res.json();
  return json.brands;
};
