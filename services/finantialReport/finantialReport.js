import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const finantialReport = async (date) => {
  try {
    const response = await httpRequest.get(
      `petshop-dashboard/turn-over?${date}`
    );
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
