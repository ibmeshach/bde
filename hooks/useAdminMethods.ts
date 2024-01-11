import { useQuery, useMutation, QueryFunction } from "react-query";
import { request } from "../utils/axios-utils";
import { AxiosResponse } from "axios";

// api providers

const getApiProvidersRequest: QueryFunction<
  AxiosResponse<any, any>
> = async () => {
  const res = await request({ url: `apiprovider/list` });
  return res;
};

export const useGetApiProviders = (onError: any, onSuccess: any) => {
  return useQuery(["getApiProviders"], getApiProvidersRequest, {
    onError,
    onSuccess,
    enabled: true,
  });
};

// add api provider
const addApiProviderRequest = async (formdata: any) => {
  return request({
    url: "/apiprovider/create",
    method: "post",
    data: formdata,
  });
};

export const useAddApiProvider = (onError: any, onSuccess: any) => {
  return useMutation(addApiProviderRequest, {
    onError,
    onSuccess,
  });
};

// edit api provider
const editApiProviderRequest = async (formdata: any) => {
  const { id, ...rest } = formdata;
  return request({
    url: `apiprovider/update/${id}`,
    method: "put",
    data: rest,
  });
};

export const useEditApiProvider = (onError: any, onSuccess: any) => {
  return useMutation(editApiProviderRequest, {
    onError,
    onSuccess,
  });
};

// update balance

const getUpdateBalanceRequest: QueryFunction<
  AxiosResponse<any, any>,
  [string, any]
> = ({ queryKey }) => {
  const { id } = queryKey[1];

  const res = request({ url: `apiprovider/updatebalance/${id}` });
  return res;
};

export const useGetUpdateBalance = (
  data: any,
  onError: any,
  onSuccess: any
) => {
  return useQuery(["getUpdateBalance", data], getUpdateBalanceRequest, {
    onError,
    onSuccess,
    enabled: false,
  });
};

// delete api provider
const deleteApiProviderRequest = async (formdata: any) => {
  const { id } = formdata;
  return request({
    url: `apiprovider/delete/${id}`,
    method: "delete",
  });
};

export const useDeleteApiProvider = (onError: any, onSuccess: any) => {
  return useMutation(deleteApiProviderRequest, {
    onError,
    onSuccess,
  });
};

// sync api provider
const syncApiProviderRequest = async (formdata: any) => {
  return request({
    url: `apiprovider/sync`,
    method: "post",
    data: formdata,
  });
};

export const useSyncApiProvider = (onError: any, onSuccess: any) => {
  return useMutation(syncApiProviderRequest, {
    onError,
    onSuccess,
  });
};

// get api provider services
const getApiProvidersServicesRequest: QueryFunction<
  AxiosResponse<any, any>,
  [string, any]
> = ({ queryKey }) => {
  const { id } = queryKey[1];

  const res = request({ url: `apiprovider/services/${id}` });
  return res;
};

// get api providers

export const useGetApiProvidersServices = (
  data: any,
  onError: any,
  onSuccess: any
) => {
  return useQuery(
    ["getApiProvidersServices", data],
    getApiProvidersServicesRequest,
    {
      onError,
      onSuccess,
      enabled: false,
    }
  );
};

// get services

const getServicesRequest: QueryFunction<AxiosResponse<any, any>> = async () => {
  const res = await request({ url: `service/list` });
  return res;
};

export const useGetServices = (onError: any, onSuccess: any) => {
  return useQuery(["getServices"], getServicesRequest, {
    onError,
    onSuccess,
    enabled: true,
  });
};

// get categories

const getCategoriesRequest: QueryFunction<
  AxiosResponse<any, any>
> = async () => {
  const res = await request({ url: `service/category/list` });
  return res;
};

export const useGetCategories = (onError: any, onSuccess: any) => {
  return useQuery(["getCategories"], getCategoriesRequest, {
    onError,
    onSuccess,
    enabled: true,
  });
};

// create service
const createServiceRequest = async (formdata: any) => {
  return request({
    url: `service/create`,
    method: "post",
    data: formdata,
  });
};

export const useCreateService = (onError: any, onSuccess: any) => {
  return useMutation(createServiceRequest, {
    onError,
    onSuccess,
  });
};

// delete service
const deleteServiceRequest = async (formdata: any) => {
  const { id } = formdata;
  return request({
    url: `service/delete/${id}`,
    method: "delete",
  });
};

export const useDeleteService = (onError: any, onSuccess: any) => {
  return useMutation(deleteServiceRequest, {
    onError,
    onSuccess,
  });
};

// update Service
const updateServiceRequest = async (formdata: any) => {
  const { id, ...rest } = formdata;
  // console.log(formdata, "akak");
  return request({
    url: `service/update/${id}`,
    method: "put",
    data: rest,
  });
};

export const useUpdateService = (onError: any, onSuccess: any) => {
  return useMutation(updateServiceRequest, {
    onError,
    onSuccess,
  });
};

// services bulk action
const servicesBulkActionRequest = async (formdata: any) => {
  return request({
    url: `service/action`,
    method: "post",
    data: formdata,
  });
};

export const useServicesBulkAction = (onError: any, onSuccess: any) => {
  return useMutation(servicesBulkActionRequest, {
    onError,
    onSuccess,
  });
};

// categories bulk action
const categoriesBulkActionRequest = async (formdata: any) => {
  return request({
    url: `service/category/action`,
    method: "post",
    data: formdata,
  });
};

export const usecategoriesBulkAction = (onError: any, onSuccess: any) => {
  return useMutation(categoriesBulkActionRequest, {
    onError,
    onSuccess,
  });
};

// create category
const createCategoryRequest = async (formdata: any) => {
  console.log(formdata, "kk");

  return request({
    url: `service/category/create`,
    method: "post",
    data: formdata,
  });
};

export const useCreateCategory = (onError: any, onSuccess: any) => {
  return useMutation(createCategoryRequest, {
    onError,
    onSuccess,
  });
};

// delete Category
const deleteCategoryRequest = async (formdata: any) => {
  const { id } = formdata;
  return request({
    url: `service/category/delete/${id}`,
    method: "delete",
  });
};

export const useDeleteCategory = (onError: any, onSuccess: any) => {
  return useMutation(deleteCategoryRequest, {
    onError,
    onSuccess,
  });
};

// update Category
const updateCategoryRequest = async (formdata: any) => {
  const { id, ...rest } = formdata;
  console.log(formdata, "akak");
  return request({
    url: `service/category/update/${id}`,
    method: "put",
    data: rest,
  });
};

export const useUpdateCategory = (onError: any, onSuccess: any) => {
  return useMutation(updateCategoryRequest, {
    onError,
    onSuccess,
  });
};

const updateCurrencyRequest = async (formdata: any) => {
  const { id, ...rest } = formdata;
  return request({
    url: `/user/updatepreferredcurrency`,
    method: "put",
    data: rest,
  });
};

export const useUpdateCurrency = (onError: any, onSuccess: any) => {
  return useMutation(updateCurrencyRequest, {
    onError,
    onSuccess,
  });
};

// create order
const createOrderRequest = async (formdata: any) => {
  return request({
    url: `order/create`,
    method: "post",
    data: formdata,
  });
};

export const useCreateOrder = (onError: any, onSuccess: any) => {
  return useMutation(createOrderRequest, {
    onError,
    onSuccess,
  });
};

// create mass order
const createMassOrderRequest = async (formdata: any) => {
  return request({
    url: `order/masscreate`,
    method: "post",
    data: formdata,
  });
};

export const useCreateMassOrder = (onError: any, onSuccess: any) => {
  return useMutation(createMassOrderRequest, {
    onError,
    onSuccess,
  });
};

// get orders

const getOrdersRequest: QueryFunction<AxiosResponse<any, any>> = async () => {
  const res = await request({ url: `order/list` });
  return res;
};

export const useGetOrders = (onError: any, onSuccess: any) => {
  return useQuery(["getOrders"], getOrdersRequest, {
    onError,
    onSuccess,
    enabled: true,
  });
};

// update order
const updateOrderRequest = async (formdata: any) => {
  const { orderId, ...rest } = formdata;
  console.log(rest, "dld");
  return request({
    url: `order/edit/${orderId}`,
    method: "put",
    data: rest,
  });
};

export const useUpdateOrder = (onError: any, onSuccess: any) => {
  return useMutation(updateOrderRequest, {
    onError,
    onSuccess,
  });
};

// delete order
const deleteOrderRequest = async (formdata: any) => {
  const { id } = formdata;
  return request({
    url: `order/delete/${id}`,
    method: "delete",
  });
};

export const useDeleteOrder = (onError: any, onSuccess: any) => {
  return useMutation(deleteOrderRequest, {
    onError,
    onSuccess,
  });
};

// refill order
const refillOrderRequest = async (formdata: any) => {
  const { id } = formdata;
  return request({
    url: `order/refill/${id}`,
    method: "post",
  });
};

export const useRefillOrder = (onError: any, onSuccess: any) => {
  return useMutation(refillOrderRequest, {
    onError,
    onSuccess,
  });
};

// get refill orders
const getRefillOrdersRequest: QueryFunction<
  AxiosResponse<any, any>
> = async () => {
  const res = await request({ url: `order/refill/list` });
  return res;
};

export const useGetRefillOrders = (onError: any, onSuccess: any) => {
  return useQuery(["getRefillOrders"], getRefillOrdersRequest, {
    onError,
    onSuccess,
    enabled: true,
  });
};

// update user
const updateUserRequest = async (formdata: any) => {
  return request({
    url: `user/update`,
    method: "put",
    data: formdata,
  });
};

export const useUpdateUser = (onError: any, onSuccess: any) => {
  return useMutation(updateUserRequest, {
    onError,
    onSuccess,
  });
};

// get admin settings
const getAdminSettingsRequest: QueryFunction<
  AxiosResponse<any, any>
> = async () => {
  const res = await request({ url: `settings/get` });
  return res;
};

export const useGetAdminSettings = (onError: any, onSuccess: any) => {
  return useQuery(["getAdminSettings"], getAdminSettingsRequest, {
    onError,
    onSuccess,
    enabled: true,
  });
};

// edit admin settings
const editAdminSettingsRequest = async (formdata: any) => {
  return request({
    url: `settings/edit`,
    method: "put",
    data: formdata,
  });
};

export const useEditAdminSettings = (onError: any, onSuccess: any) => {
  return useMutation(editAdminSettingsRequest, {
    onError,
    onSuccess,
  });
};

// generate api key
const generateApiKeyRequest: QueryFunction<
  AxiosResponse<any, any>
> = async () => {
  const res = await request({ url: `user/generateapikey` });
  return res;
};

export const useGenerateApiKey = (onError: any, onSuccess: any) => {
  return useQuery(["generateApiKey"], generateApiKeyRequest, {
    onError,
    onSuccess,
    enabled: false,
  });
};

// get users admin
const getUsersRequest: QueryFunction<AxiosResponse<any, any>> = async () => {
  const res = await request({ url: `user/list` });
  return res;
};

export const useGetUsers = (onError: any, onSuccess: any) => {
  return useQuery(["getUsersAdmin"], getUsersRequest, {
    onError,
    onSuccess,
    enabled: true,
  });
};

// create custom rate
const createCustomRateRequest = async (formdata: any) => {
  return request({
    url: `user/customrate/create`,
    method: "post",
    data: formdata,
  });
};

export const useCreateCustomRate = (onError: any, onSuccess: any) => {
  return useMutation(createCustomRateRequest, {
    onError,
    onSuccess,
  });
};

// get customRate
const getCustomRatesRequest: QueryFunction<
  AxiosResponse<any, any>
> = async () => {
  const res = await request({ url: `user/customrate/list` });
  return res;
};

export const useGetCustomRates = (onError: any, onSuccess: any) => {
  return useQuery(["getCustomRates"], getCustomRatesRequest, {
    onError,
    onSuccess,
    enabled: true,
  });
};

// get customRate
const getUserCustomRatesRequest: QueryFunction<
  AxiosResponse<any, any>
> = async ({ queryKey }) => {
  const id = queryKey[1];

  const res = await request({ url: `user/customrate/list/${id}` });
  return res;
};

export const useUserGetCustomRates = (
  data: any,
  onError: any,
  onSuccess: any
) => {
  return useQuery(["getUserCustomRates", data], getUserCustomRatesRequest, {
    onError,
    onSuccess,
    enabled: true,
  });
};

// edit custom rate
const editCustomRateRequest = async (formdata: any) => {
  const { id, ...rest } = formdata;
  return request({
    url: `user/customrate/edit/${id}`,
    method: "put",
    data: rest,
  });
};

export const useEditCustomRate = (onError: any, onSuccess: any) => {
  return useMutation(editCustomRateRequest, {
    onError,
    onSuccess,
  });
};

// delete custom rate
const deleteCustomRateRequest = async (formdata: any) => {
  const { id } = formdata;
  return request({
    url: `user/customrate/delete/${id}`,
    method: "delete",
  });
};

export const useDeleteCustomRate = (onError: any, onSuccess: any) => {
  return useMutation(deleteCustomRateRequest, {
    onError,
    onSuccess,
  });
};

// edit users admin
const editUsersRequest = async (formdata: any) => {
  const { id, ...rest } = formdata;
  return request({
    url: `user/adminupdate/${id}`,
    method: "put",
    data: rest,
  });
};

export const useEditUsers = (onError: any, onSuccess: any) => {
  return useMutation(editUsersRequest, {
    onError,
    onSuccess,
  });
};

// send Mail
const sendMailRequest = async (formdata: any) => {
  return request({
    url: `user/mail`,
    method: "post",
    data: formdata,
  });
};

export const useSendMail = (onError: any, onSuccess: any) => {
  return useMutation(sendMailRequest, {
    onError,
    onSuccess,
  });
};

// create ticket
const createTicketRequest = async (formdata: any) => {
  return request({
    url: `ticket/create`,
    method: "post",
    data: formdata,
  });
};

export const useCreateTicket = (onError: any, onSuccess: any) => {
  return useMutation(createTicketRequest, {
    onError,
    onSuccess,
  });
};
