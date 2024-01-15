import { request } from "../../utils/axios-utils";

export const createCategory = async ({ categoryName, clerkId }: any) => {
  return request({
    url: `category/create`,
    method: "post",
    data: {
      categoryName,
    },
    clerkId,
  });
};

export const getAllCategories = async ({ clerkId }: any) => {
  return request({ url: `category/get`, clerkId });
};
