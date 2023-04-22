import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const getListProducts = async (slug) => {
  try {
    const response = await httpRequest.get(
      `/petshop-dashboard/product-pricing?${slug}`
    );
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
