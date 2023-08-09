import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const logout = async () => {
  try {
    const response = await httpRequest.get(`/accounts/logout/`);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
