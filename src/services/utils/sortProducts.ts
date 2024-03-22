import { IProduct } from "../../interfaces";

export const sortProductsData = (productsData:IProduct[],selectedSortOption: string): IProduct[] => {
    if (productsData) {
      if (selectedSortOption === "Price: High to Low") {
        return [...productsData].sort(
          (a, b) => (b.price ?? 0) - (a.price ?? 0)
        );
      } else if (selectedSortOption === "Price: Low to High") {
        return [...productsData].sort(
          (a, b) => (a.price ?? 0) - (b.price ?? 0)
        );
      } else if (selectedSortOption === "Rating: Low to High") {
        return [...productsData].sort(
          (a, b) => (a.rating?.rate ?? 0) - (b.rating?.rate ?? 0)
        );
      } else if (selectedSortOption === "Rating: High to Low") {
        return [...productsData].sort(
          (a, b) => (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0)
        );
      } else {
        return productsData;
      }
    }
    return [];
  };