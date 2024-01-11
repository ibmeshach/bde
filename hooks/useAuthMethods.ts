import { useQuery, useMutation } from "react-query";
import { request } from "../utils/axios-utils";

// login
const loginRequest = async (formdata: any) => {
  return request({
    url: "/auth/login",
    method: "post",
    data: formdata,
  });
};

export const useLogin = (onError: any, onSuccess: any) => {
  return useMutation(loginRequest, {
    onError,
    onSuccess,
  });
};

// register
const registerRequest = async (formdata: any) => {
  return request({ url: "/auth/register", method: "post", data: formdata });
};

export const useRegister = (onError: any, onSuccess: any) => {
  return useMutation(registerRequest, {
    onError,
    onSuccess,
  });
};

// change password

const changePasswordRequest = async (formdata: any) => {
  return request({
    url: "/auth/change-password",
    method: "post",
    data: formdata,
  });
};

export const useChangePassword = (onError: any, onSuccess: any) => {
  return useMutation(changePasswordRequest, {
    onError,
    onSuccess,
  });
};

// reset password

const resetPasswordRequest = async (formdata: any) => {
  return request({
    url: "/auth/reset-password",
    method: "post",
    data: formdata,
  });
};

export const useResetPassword = (onError: any, onSuccess: any) => {
  return useMutation(resetPasswordRequest, {
    onError,
    onSuccess,
  });
};

// get user
const getUserRequest = () => {
  return request({ url: `/user/info` });
};

export const useGetUser = (onError: any, onSuccess: any) => {
  return useQuery(["getUser"], getUserRequest, {
    onError,
    onSuccess,
    enabled: true,
  });
};
