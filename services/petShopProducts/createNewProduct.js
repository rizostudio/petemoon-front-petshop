import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const createNewProduct = async (product) => {
  try {
    const response = await httpRequest.post(
      `/petshop-dashboard/product-pricing`,
      { ...product }
    );
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
