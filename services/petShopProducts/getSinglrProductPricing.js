import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const getSinglrProductPricing = async (id) => {
  try {
    const response = await httpRequest.get(
      `/petshop-dashboard/single-pricing/${id}`
    );
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
