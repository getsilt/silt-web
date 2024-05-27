import Vue from "vue";
// import VueGtag from "vue-gtag";

// Vue.use(VueGtag, {
//   config: { id: "G-GEBTCR5Y94" },
// });

// gtag("set", "linker", {
//   domains: ["getsilt.com", "dashboard.getsilt.com"],
// });
// import SlackNotify from 'slack-notify';
// const MY_SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/RANDOMCHARS';
// const slack = SlackNotify(MY_SLACK_WEBHOOK_URL);
// function notifyConversion() {
//   slack.send({
//     channel: '#sales-pipeline',
//     icon_url: 'http://getsilt.com/apple-touch-icon.png',
//     text: 'Yey! New web conversion',
//     unfurl_links: 1,
//     username: 'Web'
//   });
// }

export default (context, inject) => {
  window.dataLayer = window.dataLayer || [];

  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'AW-352683225');

  function gtag_report_conversion(url) {
    var callback = function () {
      console.log("Report conversion")
      if (typeof (url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      'send_to': 'AW-352683225/78NdCOjLjcgDENmJlqgB',
      'event_callback': callback
    });

    gtag('event', 'conversion_event_book_appointment', {
      'event_callback': callback,
      'event_timeout': 2000,
      // <event_parameters>
    });
    return false;
  }

  inject("gtag_report_conversion", gtag_report_conversion)
}
