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
      parameter: <code>?user_email=test@getsilt.com</code>.<br />
      This will prefill the email field, and remind them that they can skip the
      process if they have already verified in Silt.
    </p>

    <p>
      You can also provide meta info through the object meta:
      <code>?meta={"abc":"123"}</code>. This will be stored in our servers and
      we will provide it back to you so you can reference it when is needed. It
      can be for example your internal user id.
    </p>

    <h3>3.1. Frontend: Send silt_user_id & company_app_token to your BE</h3>
    <p>
      Make the POST request to your own backend described in step 4. This
      request requires as parameters <code>silt_user_id</code> &
      <code>company_app_token</code>.
    </p>
    <h3>
      3.2. Backend: Create an endpoint to receive silt_user_id &
      company_app_token from your FE
    </h3>
    <p>
      Create a backend endpoint to receive the silt_user_id and
      company_app_token (as described in step 3). After receiving this, you have
      the data required to ask the info of that user to Silt's backend as
      described in step 4.
    </p>
    <p>
      Store <code>silt_user_id</code> to your database so you can easily
      reference the verification status at any time.
    </p>
    <h3>4. Backend: Check user's verification status to Silt</h3>
    <p>
      Use <code>company_app_token</code> against Silt's backend to the
      endpoint<br />
    </p>
    <p>
      <b>GET</b>
      <code>/v1/users/<b>{silt_user_id}</b>/status/</code>
    </p>
    <p>
      <b>Auth Header</b> <br />Use a Bearer Header: <br /><code
        >Authorization: Bearer <b>{access_token}</b></code
      >
      <br />or Temporary-Token Header: <br /><code
        >X-Company-App-Temporary-Token: <b>{company_app_token}</b></code
      >
      <br />or X-Company-App-API-Token Header: <br /><code
        >X-Company-App-API-Token: <b>{company_app_api_token}</b></code
      >
      <br /><br />Don't forget that you should still use the
      <code>X-Company-App-Id</code> Header.
    </p>
    <p>
      Check <code>status: SUCCESS | MANUAL_REVIEW | PENDING | ERROR</code> to
      know if a user is verified or not. Use the
      <code>national_id | passport | driving_license</code> objects to retreive
      the data extracted from the documents.
    </p>
    <code>
      <tree-view
        :data="status_response"
        :options="{ maxDepth: 1, rootObjectKey: 'response' }"
      ></tree-view>
    </code>
    <p>You are not required to store any of these, just what suits you best.</p>
    <h3>
      5. (Optional, for better UX) Backend: Webhook to get notifications after
      user status update
    </h3>
    <p>
      When the status of a document of a user is created or updated, we can
      notify you to your Backend with a webhook pointing to the endpoint you
      provide us.
    </p>
    <p>
      Some cases (less than 5%) require a manual verification. For obvious
      reasons, we cannot verify users instantly this way. We inform the user by
      email once we have finished the verification verification, but you can
      also be notified once this happens. When you have changed the status of a
      document we could make a POST request to the endpoint you provide us. You
      will only need to create a POST endpoint that our backend will call with
      this body:
    </p>
    <code><tree-view
      :data="webhook_response"
      :options="{ maxDepth: 1, rootObjectKey: 'response' }"
    ></tree-view></code>
  </div>
</template>
<script>
export default {
  data() {
    return {
      siltEmail: "hello@getsilt.com",
      activeTab: "ios",
      apiDocUrl: "https://app.swaggerhub.com/apis-docs/Silt/Silt-API",
      user_status_accordion: { active: false },
      pa_webhook: { active: false },
      status_response: {
        country: "ESP",
        city: "BARCELONA",
        email: "8d481b57-37b3-4553-9797-40e845a19b92@siltapp.com",
        id: "08cb1e24-25df-456e-b07b-db7f2fb929fe",
        nationality: "ESP",
        last_name: "PEREZ MARTI",
        sex: "M",
        first_name: "MARC",
        address: "C. BALMES 123 ENT 04",
        birth_date: "1982-09-18",
        company_app_meta: { ibm_user_id: "123xxx" },
        selfie: {
          picture_validation_status: "SUCCESS",
          created_at: "2021-10-25T08:00:16.986789+00:00",
          file_url:
            "https://...",
          file_type: "VERIFICATION_SELFIE",
        },
        national_id: {
          country: "ESP",
          city: "BARCELONA",
          created_at: "2021-10-25T08:00:22.614666+00:00",
          id: "b1d3a4cd-6752-4f61-8b50-c1046295b447",
          document_number: "47924635A",
          expiration_date: "2023-08-02",
          nationality: "ESP",
          issue_date: null,
          last_name: "PEREZ MARTI",
          license_types: null,
          sex: "M",
          first_name: "MARC",
          address: "C. BALMES 123 ENT 04",
          updated_at: "2021-10-25T08:00:22.712704+00:00",
          birth_date: "1982-09-18",
          files: [
            {
              picture_validation_status: "SUCCESS",
              created_at: "2021-10-25T08:00:05.878820+00:00",
              file_url:
                "https://...",
              file_type: "NATIONAL_ID_BACK",
            },
            {
              picture_validation_status: "SUCCESS",
              created_at: "2021-10-25T07:59:39.698263+00:00",
              file_url:
                "https://...",
              file_type: "NATIONAL_ID_FRONT",
            },
          ],
        },
        driving_license: null,
        passport: null,
        missing_verified_documents: [],
        status: "SUCCESS",
      },
      webhook_response: {
        user_meta: { ibm_user_id: "123xxx" },
        user: {
          id: "d79458d5-fa86-48e1-ae7c-19096d841e62",
          sex: "M",
          national_id: {
            id: "ef61b392-846c-4b24-bf98-1537edfaf3c4",
            updated_at: "2022-07-15T07:54:38.067665+00:00",
            city: "BARCELONA",
            last_name: "PEREZ MARTI",
            issue_date: null,
            nationality: "ESP",
            sex: "M",
            birth_date: "1982-09-18",
            address: "C. BALMES 123 ENT 04",
            license_types: null,
            expiration_date: "2023-08-02",
            document_number: "47924635A",
            created_at: "2022-07-15T07:54:38.056249+00:00",
            country: "ESP",
            first_name: "MARC",
            files: [
              {
                file_type: "NATIONAL_ID_BACK",
                file_url:
                  "https://...",
                source: "USER",
                picture_validation_status: "SUCCESS",
                created_at: "2022-07-15T07:54:24.212803+00:00",
              },
              {
                file_type: "NATIONAL_ID_FRONT",
                file_url:
                  "https://...",
                source: "USER",
                picture_validation_status: "SUCCESS",
                created_at: "2022-07-15T07:54:16.028320+00:00",
              },
            ],
          },
          birth_date: "1982-09-18",
          missing_verified_documents: [],
          aml_info_updated_at: null,
          first_name: "MARC",
          pep_info_updated_at: null,
          city: "BARCELONA",
          passport: null,
          status: "SUCCESS",
          address: "C. BALMES 123 ENT 04",
          freelance_documents: [],
          selfie: {
            file_type: "VERIFICATION_SELFIE",
            file_url:
              "https://...",
            source: "USER",
            picture_validation_status: "SUCCESS",
            created_at: "2022-07-15T07:54:31.433336+00:00",
          },
          country: "ESP",
          driving_license: null,
          aml_info: null,
          last_name: "PEREZ MARTI",
          nationality: "ESP",
          pep_info: null,
          email: "a47f8b1b-6a2c-455f-b54d-cbc70d61e80c@siltapp.com",
          company_app_meta: { ibm_user_id: "123xxx" },
          permissions: ["NATIONAL_ID"],
        },
        status: "SUCCESS",
        processing_attempt: {
          id: "0dc5c39a-8963-4190-b1c4-cee86b19a756",
          updated_at: "2022-07-15T07:54:38.074626+00:00",
          status: "SUCCESS",
          core_module_executions: [
            {
              output: null,
              status: "SUCCESS",
              type: "FACE_MATCHER",
              errors: [],
            },
            {
              output: {
                sex: "M",
                city: "BARCELONA",
                name: "MARC",
                number: "47924635A",
                address: "C. BALMES 123 ENT 04",
                country: "ESP",
                surname: "PEREZ MARTI",
                province: "9H8",
                birth_date: "1982-09-18",
                issue_date: "2018-08-02",
                nationality: "ESP",
                license_types: null,
                expiration_date: "2023-08-02",
              },
              status: "SUCCESS",
              type: "OCR",
              errors: [],
            },
          ],
          type: "USER_DOCUMENT_VERIFICATION",
          permission_type: "NATIONAL_ID",
          document_type: "NATIONAL_ID",
          owner_company_app_id: "1",
          manual_review_status: null,
          created_at: "2022-07-15T07:54:32.720065+00:00",
          owner_user: {
            id: "d72454d5-fa86-48e1-ae7c-19096d841e62",
            city: "BARCELONA",
            last_name: "PEREZ MARTI",
            driving_license_id: null,
            passport_id: null,
            nationality: "ESP",
            sex: "M",
            aml_info: null,
            birth_date: "1982-09-18",
            address: "C. BALMES 123 ENT 04",
            pep_info: null,
            aml_info_updated_at: null,
            email: "a47f8b1b-6a2c-455f-b54d-cbc70d61e80c@siltapp.com",
            national_id_id: "ef61b392-846c-4b24-bf98-1247fdfaa3c4",
            country: "ESP",
            first_name: "MARC",
            pep_info_updated_at: null,
          },
        },
        manual_review_status: null,
        token: "53435829-cf79-43df-as9f-b4ca994e30de",
        files: [
          {
            type: "VERIFICATION_SELFIE",
            url: "https://...",
          },
          {
            type: "NATIONAL_ID_BACK",
            url: "https://...",
          },
          {
            type: "NATIONAL_ID_FRONT",
            url: "https://...",
          },
        ],
        user_id: "d79458d5-fa86-48e1-ae7c-42196f841a43",
      },
    };
  },
  methods: {
    activateTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>
<style>
.tree-view-item-value-number {
  color: green;
}
.tree-view-item-value-string {
  color: blue;
}
.tree-view-item-value-boolean {
  color: violet;
}
</style>