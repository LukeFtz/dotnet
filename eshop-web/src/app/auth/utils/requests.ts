import { UserToken } from "./type";

export const getUserToken = async (username: string, password: string) => {
  let json = {} as UserToken;
  try {
    const response = await fetch(process.env.IDENTITY_HOST + "");
    json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
    return json;
  } finally {
    return json;
  }
};
