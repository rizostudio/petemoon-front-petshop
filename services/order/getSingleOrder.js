import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const getSingelorder = async (id) => {
  try {
    const response = await httpRequest.get(`/petshop-dashboard/orders/${id}`);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
