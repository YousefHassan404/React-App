import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const UESRS_API =  "http://localhost:8080/api/users/";

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

export function useGetUsers() {
  return useGetData(UESRS_API, "Users");
}
