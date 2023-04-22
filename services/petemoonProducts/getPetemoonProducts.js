import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const getPetemoonProducts = async () => {
  try {
    const response = await httpRequest.get("petshop-dashboard/products");
    const data = response.data.data;
    console.log(data);
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
