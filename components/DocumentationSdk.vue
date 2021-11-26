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

    <p>
      You can also provide through the object meta: <code>meta={"abc":"123"}</code>.
      Thiss will be stored in our servers and we will provide it back to you so you can
      reference it when is needed. It can be for example your internal user id.
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
      <code>/v1/users/<b>{silt_user_id}</b>/status/</code>
      <b>Auth Header</b>
      <code>X-Company-App-Temporary-Token: <b>{company_app_token}</b></code>
    </p>
    <p>
      Check <code>status: SUCCESS | MANUAL_REVIEW | PENDING | ERROR</code> to know if a user is verified or not.
      Use the <code>national_id | passport | driving_license</code> objects to retreive the data extracted from
      the documents.
    </p>
    <p><b>200 Response:</b></p>
    <pre><code>
    {
      "country": "ESP",
      "city": "BARCELONA",
      "email": "8d481b57-37b3-4553-9797-40e845a19b92@siltapp.com",
      "id": "08cb1e24-25df-456e-b07b-db7f2fb929fe",
      "nationality": "ESP",
      "last_name": "PEREZ MARTI",
      "sex": "M",
      "first_name": "MARC",
      "address": "C. ESCIPION 22BIS ENT 04",
      "birth_date": "1992-09-18",
      "company_app_meta": null,
      "selfie": {
          "picture_validation_status": "SUCCESS",
          "created_at": "2021-10-25T08:00:16.986789+00:00",
          "file_url": "https://pro-silt-resources.s3.amazonaws.com/resource-files/d5e1a040-11b3-47c1-a6b8-f04be025a500.jpg?AWSAccessKeyId=AKIAYUXNO2AH56LUSVWR&Signature=dNpBcWeru8hwVrnVbwOvN0CThOg%3D&Expires=1635149204",
          "file_type": "VERIFICATION_SELFIE"
      },
      "national_id": {
          "country": "ESP",
          "city": "BARCELONA",
          "created_at": "2021-10-25T08:00:22.614666+00:00",
          "id": "b1d3a4cd-6752-4f61-8b50-c1046295b447",
          "document_number": "47924637C",
          "expiration_date": "2023-08-02",
          "nationality": "ESP",
          "issue_date": null,
          "last_name": "PEREZ MARTI",
          "license_types": null,
          "sex": "M",
          "first_name": "MARC",
          "address": "C. ESCIPION 22BIS ENT 04",
          "updated_at": "2021-10-25T08:00:22.712704+00:00",
          "birth_date": "1992-09-18",
          "files": [
              {
                  "picture_validation_status": "SUCCESS",
                  "created_at": "2021-10-25T08:00:05.878820+00:00",
                  "file_url": "https://pro-silt-resources.s3.amazonaws.com/resource-files/ff24ad96-f96b-48f6-a115-1bc2447ca798.jpg?AWSAccessKeyId=AKIAYUXNO2AH56LUSVWR&Signature=DPXnGrPjivqmfG1niOdyE%2FCGhiQ%3D&Expires=1635149204",
                  "file_type": "NATIONAL_ID_BACK"
              },
              {
                  "picture_validation_status": "SUCCESS",
                  "created_at": "2021-10-25T07:59:39.698263+00:00",
                  "file_url": "https://pro-silt-resources.s3.amazonaws.com/resource-files/7834c0e8-192c-43b3-9f01-d82e784a3ac7.jpg?AWSAccessKeyId=AKIAYUXNO2AH56LUSVWR&Signature=fsznyQILyUJduOQwM6%2F7cP1v3X8%3D&Expires=1635149204",
                  "file_type": "NATIONAL_ID_FRONT"
              }
          ]
      },
      "driving_license": null,
      "passport": null,
      "missing_verified_documents": [],
      "status": "SUCCESS"
    }  
    </code></pre>
    <p>
      You are not required to store any of these, just what suits you best.
    </p>
    <h3>
      6. (Optional, for better UX) Backend: Webhook to get notifications after
      user status update
    </h3>
    <p>
      When the status of a document of a user is created or updated, we can notify 
      you to your Backend with a webhook pointing to the endpoint you provide us.
    </p>
    <p>
      Some cases (less than 5%) require a manual verification. For obvious
      reasons, we cannot verify users instantly this way. We inform the user by
      email once we have finished the verification verification, but you can
      also be notified once this happens. When you have changed the
      status of a document we could make a POST request to the endpoint you provide us. 
      You will only need to create a POST endpoint that our backend will call with
      this body:
    </p>
    <pre><code>
      {
        "processing_attempt": {
          "owner_company_app_id": "1",
          "status": "SUCCESS",
          "created_at": "2021-10-08T14:05:27.021579+00:00",
          "updated_at": "2021-10-08T14:05:31.137874+00:00",
          "manual_review_status": null,
          "owner_user": {
            "city": null,
            "national_id_id": null,
            "driving_license_id": null,
            "nationality": null,
            "birth_date": null,
            "passport_id": null,
            "email": "4af265ab-af27-43e8-b936-95e27dc377eb@siltapp.com",
            "first_name": null,
            "last_name": null,
            "id": "c30fd54c-1e1f-40a5-9fcb-5a7446242dc9",
            "sex": null,
            "country": null,
            "address": null
          },
          "core_module_executions": [
            {
              "status": "SUCCESS",
              "errors": [],
              "output": {
                "sex": "M",
                "city": "BARCELONA",
                "name": "MARC",
                "number": "44556677A",
                "address": "PLAZA CATALUÑA 1",
                "country": "ESP",
                "surname": "PEREZ MARTI",
                "birth_date": "1970-09-18",
                "issue_date": null,
                "nationality": "ESP",
                "license_types": null,
                "expiration_date": "2025-12-25"
              },
              "type": "OCR"
            },
            {
              "status": "SUCCESS",
              "errors": [],
              "output": null,
              "type": "FACE_MATCHER"
            }
          ],
          "document_type": "NATIONAL_ID",
          "id": "ba36b6c0-41ce-45c6-8015-4cc69c069de0",
          "type": "USER_DOCUMENT_VERIFICATION"
        },
        "files": [
          {
            "type": "VERIFICATION_SELFIE",
            "url": "https://pro-silt-resources.s3.amazonaws.com/resource-files/1a2b3c3d-7ea4-4243-9e71-7a883629e303.jpg?AWSAccessKeyId=AKIAY...&Signature=TRB43...&Expires=1633702231"
          },
          {
            "type": "NATIONAL_ID_BACK",
            "url": "https://pro-silt-resources.s3.amazonaws.com/resource-files/1a2b3c3d-a7ec-472f-9136-86d6a47ce4e6.jpg?AWSAccessKeyId=AKIAYU...&Signature=5J3xuCZm...&Expires=1633702231"
          },
          {
            "type": "NATIONAL_ID_FRONT",
            "url": "https://pro-silt-resources.s3.amazonaws.com/resource-files/1a2b3c3d-57b6-4d7c-a372-41be6c5df33a.jpg?AWSAccessKeyId=AKIAYUXN...&Signature=Zu8lquS5Y...&Expires=1633702231"
          }
        ],
        "user_meta": {"abc":"123"}
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
      apiDocUrl: "https://app.swaggerhub.com/apis-docs/Silt/Silt-API",
    };
  },
  methods: {
    activateTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>