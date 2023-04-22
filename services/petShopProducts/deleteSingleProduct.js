import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const deleteSingleProduct = async (id) => {
  try {
    const response = await httpRequest.delete(
      `/petshop-dashboard/product-pricing/${id}`
    );
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
