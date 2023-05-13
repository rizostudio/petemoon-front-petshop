import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";
import { userDataStorage, isLogin } from "@/localStorage/auth";
export const Register = async (signupData) => {
  const form = new FormData();
  form.append("first_name", signupData.first_name);
  form.append("last_name", signupData.last_name);
  form.append("gender", signupData.gender);
  form.append("national_id", signupData.national_id);
  form.append("city", signupData.city);
  form.append("postal_region", signupData.postal_region);
  form.append("address", signupData.address);
  form.append("store_name", signupData.store_name);
  form.append("estimated_item_count", signupData.estimated_item_count);
  form.append("national_card", signupData.national_card);
  form.append("birth_certificate", signupData.birth_certificate);
  form.append("business_license", signupData.business_license);
  form.append("union_license", signupData.union_license);
  form.append("tax_certificate", signupData.tax_certificate);
  form.append("sheba_number", signupData.sheba_number);

  try {
    const response = await httpRequest.patch(
      "/accounts/register/petshop/",
      form
    );
    const data = response.data.data;
    if (data.user_data) {
      userDataStorage.set(JSON.stringify(data.user_data));
      isLogin.set(true);
    }
    return successResponse(data);
  } catch (error) {
    console.log(error);
    return errorResponse(error?.response?.data?.errors);
  }
};
