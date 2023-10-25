<template>
  <div>
    <h2>SDK Integration</h2>
    <h3>1. Signup and create a company profile</h3>
    <p>
      Signup and create an account in our <a target="_blank" href="https://dashboard.getsilt.com/welcome">dashboard page</a>.
      There, under <b>"Verification Flow Settings"</b> will be able to get your <code>company_app_id</code> and other information and configuration options.
      You can also create more verification flows under "Company Settings".
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

    <p>Here you can see a list of available query parameters.</p>
    <table>
      <thead>
        <tr>
          <th>Query param key</th>
          <th>Value type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tr>
        <th>
          <code>company_app_id</code>
        </th>
        <td>String (Required)</td>
        <td>
          Mandatory field to get the configuration of the company app. Create
          your company app now from the dashboard.getsilt.com.
          <br />Ex:
          <code>&company_app_id=c11d1782-bcdc-4854-b5c9-32fd160fba8b</code>
        </td>
      </tr>
      <tr>
        <th>
          <code><b>customer_user_id</b></code>
        </th>
        <td>String (Recommended)</td>
        <td>
          This can be your internal user id, the one in your database. This
          field can be useful to track which user got verified when you receive
          a webhook. You can also search by this field in the
          dashboard.getsilt.com.
          <br />Ex: <code>&customer_user_id=172345</code>
        </td>
      </tr>
      <tr>
        <th>
          <code>user_email</code>
        </th>
        <td>String (Optional)</td>
        <td>
          Used to prefill the email field in the signup screens. If the user
          already has a Silt account, he will be prompt to be able to skip
          taking pictures of the Id we already have.
          <br />Ex: <code>&user_email=steve@apple.com</code>
        </td>
      </tr>
      <tr>
        <th>
          <code>meta</code>
        </th>
        <td>JSON (Optional)</td>
        <td>
          You can use this field to store information a silt user that you will
          receive whenever a webhook is sent or in GET /status. Similar to
          customer_user_id, but without search option.
          <br />Ex: <code>&meta={"abc":"123", "grumpy_cat": "miao"}</code>
          There is no need to encode the url.
        </td>
      </tr>
      <tr>
        <th>
          <code>redirect_url</code>
        </th>
        <td>String (Optional)</td>
        <td>
          <b>Important: Use this parameter as the last one of the url you generate.</b>
          Url that will point the button in the verification complete screen.
          <br />Ex: <code>&redirect_url=https://YOURURL.com</code>
        </td>
      </tr>
      <tr>
        <th>
          <code>hide_redirect_button</code>
        </th>
        <td>Boolean (Optional)</td>
        <td>
          Used to hide the button of redirect in the verification complete
          screen. Some customers use it in the iframe integration.
          <br />Ex: <code>&hide_redirect_button=true</code>
        </td>
      </tr>
      <tr>
        <th>
          <code>hide_manual_review</code>
        </th>
        <td>Boolean (Optional)</td>
        <td>
          Not recomended. This option hides the option of sending a document to
          manual review.
          <br />Ex: <code>&hide_manual_review=true</code>
        </td>
      </tr>
    </table>
    <h3>
      3. Backend: Webhook to get notifications after
      user status update
    </h3>
    <p>
      When the status of a document of a user is created or updated, we can
      notify you to your Backend with a webhook pointing to the endpoint you
      provide us.
    </p>
    <p class="banner-info">
     Possible values for status are <code>SUCCESS | ERROR | VERIFICATION_ERROR | PENDING | RUNNING | MANUAL_REVIEW</code>.
      Keep in mind that if a <b>manual verification</b> takes place and <code>status</code> has <code>MANUAL_REVIEW</code>, you will have to check also the <code>manual_review_status</code> that may have the following possible values: <code>SUCCESS | ERROR | PENDING</code>
    </p>
    <p class="banner-info">
      It is strongly recommended to use the parameter <code>customer_user_id</code> in the url of step 2. 
      This way, you can know to which user of your database refers the notification.
    </p>
   
    <p>
      Some cases (less than 5%) require a manual verification. For obvious
      reasons, we cannot verify users instantly this way. We inform the user by
      email once we have finished the verification, but you can
      also be notified once this happens. When you have changed the status of a
      document we will also make a POST request to the endpoint you provide us. The
      response will return the same response as /status request under <code>user</code> field, the <code>processing_attempt</code> that triggered the webhook, its <code>status</code>.
    </p>
    <code class="code-block"
      ><tree-view
        :data="webhook_response"
        :options="{ maxDepth: 1, rootObjectKey: 'response' }"
      ></tree-view
    ></code>
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
      webhook_response: {
        processing_attempt: {
          document_type: "NATIONAL_ID",
          type: "USER_DOCUMENT_VERIFICATION",
          created_at: "2022-12-23T12:14:46.436478+00:00",
          permission_type: "NATIONAL_ID",
          updated_at: "2022-12-23T21:58:54.816132+00:00",
          manual_review_status: null,
          owner_user: {
            address: null,
            city: null,
            last_name: "PEREZ MARTI",
            nationality: "ESP",
            sex: "M",
            national_id_id: "...",
            birth_date: "1982-09-18",
            verifications: [],
            country: "ESP",
            first_name: "MARC",
            email: "ee82890f-ec9f-4477-b0ec-b7099de4b929@siltapp.com",
            passport_id: null,
            driving_license_id: null,
            id: "...",
          },
          status: "SUCCESS",
          owner_company_app_id: "...",
          identity_document: {
            address: "",
            license_types: null,
            created_at: "2022-12-23T13:26:48.458160+00:00",
            document_number: "XXXXXXXXC",
            city: "",
            updated_at: "2022-12-23T13:26:48.470899+00:00",
            last_name: "PEREZ MARTI",
            nationality: "ESP",
            sex: "M",
            expiration_date: "2023-08-02",
            birth_date: "1982-09-18",
            country: "ESP",
            first_name: "MARC",
            issue_date: null,
            id: "...",
          },
          request_data: null,
          core_module_executions: [
            {
              type: "PICTURE_VALIDATION",
              errors: [],
              raw: null,
              status: "SUCCESS",
              output: {
                side: "FRONT",
                is_nie: false,
                country: "ESP",
                doc_type: "ID",
                is_paper: false,
                bounding_box: [205, 504, 1243, 1110],
                rotation_angle: -5,
                is_pinkpaper_dl: false,
              },
            },
            {
              type: "PICTURE_VALIDATION",
              errors: [],
              raw: null,
              status: "SUCCESS",
              output: {
                side: "BACK",
                is_nie: false,
                country: "ESP",
                doc_type: "ID",
                is_paper: false,
                bounding_box: [165, 665, 968, 1055],
                rotation_angle: -359,
                is_pinkpaper_dl: false,
              },
            },
            {
              type: "PICTURE_VALIDATION",
              errors: [],
              raw: null,
              status: "SUCCESS",
              output: {
                side: null,
                is_nie: null,
                country: null,
                doc_type: null,
                is_paper: null,
                bounding_box: null,
                rotation_angle: null,
                is_pinkpaper_dl: null,
              },
            },
            {
              type: "FACE_MATCHER",
              errors: [],
              raw: null,
              status: "SUCCESS",
              output: null,
            },
            {
              type: "OCR",
              errors: [],
              raw: null,
              status: "SUCCESS",
              output: {
                sex: "M",
                city: "",
                name: "MARC",
                number: "XXXXXXXXC",
                address: "",
                country: "ESP",
                surname: "PEREZ MARTI",
                province: "",
                birth_date: "1982-09-18",
                issue_date: "None",
                patronimic: null,
                nationality: "ESP",
                license_types: null,
                place_of_birth: null,
                expiration_date: "2023-08-02",
              },
            },
          ],
          id: "...",
        },
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
        manual_review_status: null,
        user: {
          city: null,
          customer_user_id: "Your Internal User Id of your database",
          company_app_meta: null,
          verifications: [],
          first_name: "MARC",
          certificate: {
            file_url:
              "https://...",
            created_at: "2022-12-23 13:26:48",
            emitter: {
              cif: "B01740703",
              name: "Silt Digital Id SL",
            },
            requester: {
              cif: null,
              name: "Test Company",
            },
            reference: "CERT/2022-55",
            id: "...",
          },
          last_name: "PEREZ MARTI",
          nationality: "ESP",
          email: "ee82890f-ec9f-4477-b0ec-b7099de4b929@siltapp.com",
          address: null,
          missing_verifications: [],
          passport: null,
          national_id: {
            address: "",
            license_types: null,
            created_at: "2022-12-23T13:26:48.458160+00:00",
            document_number: "XXXXXXXXC",
            city: "",
            updated_at: "2022-12-23T13:26:48.470899+00:00",
            last_name: "PEREZ MARTI",
            nationality: "ESP",
            sex: "M",
            expiration_date: "2023-08-02",
            birth_date: "1982-09-18",
            country: "ESP",
            first_name: "MARC",
            issue_date: null,
            id: "...",
            files: [
              {
                file_url:
                  "https://...",
                created_at: "2022-12-23T12:14:34.577939+00:00",
                source: "USER",
                picture_validation_status: "SUCCESS",
                file_type: "NATIONAL_ID_BACK",
              },
              {
                file_url:
                  "https://...",
                created_at: "2022-12-23T12:14:19.182439+00:00",
                source: "USER",
                picture_validation_status: "SUCCESS",
                file_type: "NATIONAL_ID_FRONT",
              },
            ],
          },
          driving_license: null,
          id: "...",
          sex: "M",
          status: "SUCCESS",
          birth_date: "1992-09-18",
          country: "ESP",
          selfie: {
            file_url:
              "https://...",
            created_at: "2022-12-23T12:14:43.926792+00:00",
            source: "USER",
            picture_validation_status: "SUCCESS",
            file_type: "VERIFICATION_SELFIE",
          },
        },
        token: "...",
        status: "SUCCESS",
        user_id: "...",
        user_meta: null,
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