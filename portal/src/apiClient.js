import axios from "axios";
const url =
  process.env.NODE_ENV === "production"
    ? "https://volunteer-portal-api.onrender.com/"
    : "http://localhost:3001/";

export class ApiClient {
  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      data,
    });
  }
  listOpportunities() {
    return this.authenticatedCall("get", url + "opportunities");
  }
}
