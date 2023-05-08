import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const checkUserValidation = async (phoneNumber) => {
  try {
    const response = await httpRequest.post("/accounts/user-is-valid", {});
    const data = response.data.data;
    console.log(data);
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
