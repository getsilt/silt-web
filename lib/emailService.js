import axios from 'axios'
export default class EmailApi {
    static async sendEmail(body) {
      if (!body || !body.email) {
        throw new Error("email not valid");
      }
      const macrosKey = "AKfycbydbfW4cD9dZn3N3Kd7JuNWVYQJVcFeRtVgTfM";
      const emailUri = `https://script.google.com/macros/s/${macrosKey}/exec`;
      const encoded = Object.keys(body)
        .map(k => {
          return `${encodeURIComponent(k)}=${encodeURIComponent(body[k])}`;
        })
        .join("&");
      return axios.post(emailUri, encoded, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        withCredentials: false
      });
    }
  }
  