import { useQuery, QueryFunction } from "react-query";
import { request } from "../utils/axios-utils";
import { AxiosResponse } from "axios";

// get services

const getServicesRequest: QueryFunction<AxiosResponse<any, any>> = async () => {
  const res = await request({ url: `service/list/user` });
  return res;
};

export const useGetUserServices = (onError: any, onSuccess: any) => {
  return useQuery(["getUserServices"], getServicesRequest, {
    onError,
    onSuccess,
    enabled: true,
  });
};

// get categories

const getCategoriesRequest: QueryFunction<
  AxiosResponse<any, any>
> = async () => {
  const res = await request({ url: `service/category/list/user` });
  return res;
};

export const useGetUserCategories = (onError: any, onSuccess: any) => {
  return useQuery(["getUserCategories"], getCategoriesRequest, {
    onError,
    onSuccess,
    enabled: true,
  });
};

// get orders

const getOrdersRequest: QueryFunction<AxiosResponse<any, any>> = async () => {
  const res = await request({ url: `order/list/user` });
  return res;
};

export const useGetUserOrders = (onError: any, onSuccess: any) => {
  return useQuery(["getUserOrders"], getOrdersRequest, {
    onError,
    onSuccess,
    enabled: true,
  });
};

// get refill orders
const getRefillOrdersRequest: QueryFunction<
  AxiosResponse<any, any>
> = async () => {
  const res = await request({ url: `order/refill/list/user` });
  return res;
};

export const useGetUserRefillOrders = (onError: any, onSuccess: any) => {
  return useQuery(["getUserRefillOrders"], getRefillOrdersRequest, {
    onError,
    onSuccess,
    enabled: true,
  });
};
