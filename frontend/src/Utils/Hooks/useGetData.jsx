import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const PRODUCTS_API = import.meta.env.VITE_PRODUCTS_API;
// console.log(PRODUCTS_API)

export function useGetData(url, ...key) {
  return useQuery({
    queryKey: [...key],
    queryFn: async () => {
      await new Promise((res) => {
        setTimeout(() => {
          res(true);
        }, 3000);
      });

      const res = await axios.get(url);
      //   console.log(res);
      const data = await res.data;

      return data;
    },
  });
}

export function useGetProducts() {
  return useGetData("http://localhost:8080/api/courses/");
}
