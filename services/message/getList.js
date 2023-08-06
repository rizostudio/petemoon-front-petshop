import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const getListMessage = async () => {
  try {
    const response = await httpRequest.get(`/dashboard/message`);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
