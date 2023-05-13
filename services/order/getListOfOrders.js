import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const getListorders = async (query) => {
  try {
    const response = await httpRequest.get(
      `/petshop-dashboard/orders?orders_type=recent`
    );
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
