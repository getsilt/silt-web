<template>
  <div>
    <h2>SDK INTEGRATION</h2>
    <h3>1. Email us: Get your company app Id</h3>
    <p>
      Request your <code>company_app_id</code> to the Silt Team at the email
      address
      <a target="_blank" href="mailto:customers@getsilt.com"
        >customers@getsilt.com</a
      >. This Id is unique for you, and it will be the same that the one
      required in the API integration flow.
    </p>
    <h3>2. Frontend: Add SDK on mobile with company app id</h3>
    <div class="tabs-wrapper">
      <div
        class="tab"
        @click="activateTab('ios')"
        :class="{ active: activeTab === 'ios' }"
      >
        iOS
      </div>
      <div
        class="tab"
        @click="activateTab('android')"
        :class="{ active: activeTab === 'android' }"
      >
        Android
      </div>
      <div
        class="tab"
        @click="activateTab('web')"
        :class="{ active: activeTab === 'web' }"
      >
        Web
      </div>
    </div>
    <p v-if="activeTab === 'ios'">
      iOS:
      <a href="https://github.com/getsilt/ios-sdk"
        >https://github.com/getsilt/ios-sdk</a
      >
    </p>
    <p v-if="activeTab === 'android'">
      Android:
      <a href="https://github.com/getsilt/android-sdk"
        >https://github.com/getsilt/android-sdk</a
      >
    </p>
    <p v-if="activeTab === 'web'">
      Web: Create a button that calls the following link:<br />
      <code>
        https://signup.getsilt.com/?redirect_url=<b>{the_url_of_your_site}</b>&company_app_id=<b
          >{company_app_id}</b
        ></code
      >
    </p>
    <p v-if="activeTab === 'ios' || activeTab === 'android'">
      What happens next on Native Apps integration: On-click mobile sdk will
      open a webview using the company app id. Once verified the webview will
      close and return the <code>silt_user_id</code> and a
      <code>company_app_token</code>. You can see more info in the examples
      provided in the SDK code.
    </p>
    <p v-if="activeTab === 'web'">
      What happens next on Website integration: On-click mobile sdk will open a
      webview using the company app id. Once verified the website will return
      the <code>silt_user_id</code> and a <code>company_app_token</code> as
      query params.
    </p>

    <p class="banner-info">
      To improve user experience, you can provide the user email through the
      parameter: <code>user_email</code>.<br />
      This will prefill the email field, and remind them that they can skip the
      process if they have already verified in Silt.
    </p>

    <h3>3. Frontend: Send silt_user_id & company_app_token to your BE</h3>
    <p>
      Make the POST request to your own backend described in step 4. This
      request requires as parameters <code>silt_user_id</code> &
      <code>company_app_token</code>.
    </p>
    <h3>
      4. Backend: Create an endpoint to receive silt_user_id & company_app_token
      from your FE
    </h3>
    <p>
      Create a backend endpoint to receive the silt_user_id and
      company_app_token (as described in step 3). After receiving this, you have
      the data required to ask the info of that user to Silt's backend as
      described in step 5.
    </p>
    <h3>5. Backend: Check user's verification status to Silt</h3>
    <p>
      Use <code>company_app_token</code> against Silt's backend to the
      endpoint<br />
    </p>
    <p>
      <b>GET</b>
      <code
        >/v1/users/<b>{silt_user_id}</b>/resources/?token=<b
          >{company_app_token}</b
        ></code
      >
    </p>
    <p>
      to check if a user has verified resources, and get the data extracted from
      them.
    </p>
    <p><b>200 Response:</b></p>
    <pre><code>
      { 
        address: "Plaça catalunya, 1"
        birth_date: "1988-09-18"
        city: "Barcelona"
        country: "ESP"
        created_at: "2020-08-10T09:12:05.810676Z" 
        errors: [] 
        expiration_date: "2022-08-01"
        first_name: "MARC"
        id (resource_id): 86
        issue_date: null
        last_name: "PEREZ MARTI"
        license_type: null
        nationality: "ESP"
        owner: "marc@getsilt.com"
        resource_number: null 
        resource_type: "PASSPORT" 
        verification_status: "SUCCESS" 
        ocr_status: "SUCCESS" 
        sex: "M"
        updated_at: "2020-08-10T09:12:17.109168Z" 
      }
        </code></pre>
    <p>
      You are not required to store any of these, just what suits you best. You
      can always get this data from us.
    </p>
    <h3>
      6. (Optional, only if needed) Frontend/Backend: Retrieve picture temporary
      URL
    </h3>
    <p>
      This endpoint will return temporary accessible urls to retrieve the
      pictures and videos of the resource.
    </p>
    <p>
      Use <code>company_app_token</code> and <code>resource_id</code>(retrieved in the response of
      step 5) <br /> against Silt's backend endpoint:<br /> 
    </p>
    <p>
      <b>GET</b>
      <code
        >/v1/resources/<b>{resource_id}</b>/files/`?token=<b
          >{company_app_token}</b
        ></code
      >
    </p>
    <p><b>200 Response:</b></p>
    <pre><code>
      {
        file_front: https://...,
        file_back: https://...,
        file_verification: https://... (this could be a video if you are using video verification)
      }
    </code></pre>
    <h3>
      7. (Optional, for better UX) Backend: Webhook to get notifications after
      manual reviews
    </h3>
    <p>
      Some cases (less than 5%) require a manual verification. For obvious
      reasons, we cannot verify users instantly this way. We inform the user by
      email once we have finished the verification verification, but you can
      also be notified once this happens. When an expert in Silt has changed the
      status of a document of a user from Manual review PENDING to ERROR or
      SUCCESS we could make a POST request to the endpoint you provide us. You
      will only need to create a POST endpoint that our backend will call with
      this body:
    </p>
    <pre><code>
      { 
        "token": tmp_token.token, 
        "user_id": obj.owner_id,
        "manual_review_status": obj.manual_review_status 
      }
      </code></pre>
  </div>
</template>
<script>
export default {
  data() {
    return {
      siltEmail: "hello@getsilt.com",
      activeTab: "ios",
      apiDocUrl: "https://app.swaggerhub.com/apis-docs/Silt/Silt-API/1.0.1",
    };
  },
  methods: {
    activateTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>