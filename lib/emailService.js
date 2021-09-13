// Following this tutorial: Using gmail : Send email from Html + Spreadsheet as database
// https://dev.to/manishfoodtechs/using-gmail-send-email-from-html-spreadsheet-as-database-23n5
import axios from 'axios'
export default class EmailApi {
    static async sendEmail(body) {
      if (!body || !body.email) {
        throw new Error("email not valid");
      }
      const macrosKey = "AKfycbx68x6t7QCIoklXpJUH2l5HrlThjEQXeyHxQStBpH-2hGC4NzC1Yx7K_6VA4OB4reUw";
      const emailUri = `https://script.google.com/macros/s/${macrosKey}/exec`;
      //const emailUri = `https://script.google.com/macros/s/AKfycbxynJoTN1vS68cLdeLiL-z1ONIZ4iFq5JV1wjs4B5JUgXgoPHyd_fhgAXdPu6c2xoJR/exec`
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
  