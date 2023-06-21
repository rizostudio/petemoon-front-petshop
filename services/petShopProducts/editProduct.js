import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const editProduct = async (product) => {
  try {
    const response = await httpRequest.patch(
      `/petshop-dashboard/product-pricing/${product.product_id}`,
      { ...product }
    );
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
