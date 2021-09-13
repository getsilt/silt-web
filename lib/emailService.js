// Following this tutorial: Using gmail : Send email from Html + Spreadsheet as database
// https://dev.to/manishfoodtechs/using-gmail-send-email-from-html-spreadsheet-as-database-23n5

// Emails are sent to hello@getsilt.com
// and stored in: https://docs.google.com/spreadsheets/d/1pMev0VcPI8ukyqVHjAtHsCr8u2YL04iToLFoPHzZpwY/edit#gid=0
import axios from 'axios'
export default class EmailApi {
    static async sendEmail(body) {
      if (!body || !body.email) {
        throw new Error("email not valid");
      }
      const macrosKey = "AKfycbxeyD6K6hpZFH_NDVEaxx6r7Clf3ThiLdFyWktuIvRMFKtBrTnBkk8q3hOhsNOtxLJg";
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
  