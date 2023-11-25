import { Brand } from "../types";

type Args = {
  limit?: number;
};

export const getBrands = async ({ limit }: Args): Promise<Brand[]> => {
  const res = await fetch(`/data/brand.json`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const json = await res.json();
  const brands = [];
  for (const brand of json.brands) {
    if (limit && brands.length >= limit) break;
    brands.push(brand);
  }

  return brands;
};
