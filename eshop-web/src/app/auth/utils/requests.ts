import { UserToken } from "./type";

export const getUserToken = async (username: string, password: string) => {
  try {
    const response = await fetch(process.env.IDENTITY_HOST + "");
    const json: UserToken = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
};
