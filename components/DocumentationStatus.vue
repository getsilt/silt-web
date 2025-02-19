<template>
  <div>
    <h2>Optional: On demand request status user information</h2>
    <p>
      Use this endpoint if you want to know the status and the verification information of a user at any moment with the <code>silt_user_id</code>.
    </p>
    <h3>1. Store silt_user_id</h3>
    <p>
      Store <code>silt_user_id</code> to your database so you can easily
      reference the verification status at any time.
    </p>
    <h3>2. Backend: Check user's verification status to Silt</h3>
    <p>
      Use <code>company_app_token</code> against Silt's backend to the
      endpoint<br />
    </p>
    <p>
      <b>GET</b>
      <code>https://api.siltapp.com/v1/users/<b>{silt_user_id}</b>/status/</code>
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
    <p class="banner-info">
      The most important check you must do is the <code>user.status</code> of the <code>user</code> object.
      This status may have the following possible FINAL values: <code>SUCCESS | ERROR | MANUAL_REVIEW</code>.
      On top of that, you will receive other status, like PENDING, but you can ignore them because you should receive another webhook with a final status.
      This <code>user.status</code> is computed based on the combination of status of all requirements you have set for that verification flow.
      If a user has a SUCCESS status in all verifications required by the verification flow, then the user will have a SUCCESS status.
      If a user has a MANUAL_REVIEW or ERROR status in any of the verifications required by the verification flow, then the user will have a MANUAL_REVIEW or ERROR status.
    </p>
    <p>
      Use the <code>national_id | passport | driving_license</code> objects to retreive
      the data extracted from the verified documents.
    </p>
    <p>
      Ideally, you should only check <code>user.status</code>. But if for some reason you want to check the status of each processing_atempt,
      keep in mind that they work slightly different.
      Possible values for status of processing attempts are <code>SUCCESS | ERROR | VERIFICATION_ERROR | PENDING | RUNNING | MANUAL_REVIEW</code>.
      Keep in mind that if a <b>manual verification</b> takes place and <code>status</code> has <code>MANUAL_REVIEW</code>, you will have to check also the <code>manual_review_status</code> that may have the following possible values: <code>SUCCESS | ERROR | PENDING</code>
    </p>
    <code class="code-block">
      <tree-view
        :data="status_response"
        :options="{ maxDepth: 1, rootObjectKey: 'response' }"
      ></tree-view>
    </code>
    <p>You are not required to store any of these, just what suits you best.</p>
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
        id: "...",
        national_id: {
          expiration_date: "2023-08-02",
          nationality: "ESP",
          country: "ESP",
          created_at: "2022-12-23T13:26:48.458160+00:00",
          id: "...",
          first_name: "MARC",
          issue_date: null,
          document_number: "47924637C",
          sex: "M",
          last_name: "PEREZ MARTI",
          birth_date: "1982-09-18",
          city: "",
          updated_at: "2022-12-23T13:26:48.470899+00:00",
          address: "",
          license_types: null,
          files: [
            {
              created_at: "2022-12-23T12:14:34.577939+00:00",
              picture_validation_status: "SUCCESS",
              source: "USER",
              file_type: "NATIONAL_ID_BACK",
              file_url: "https://...",
            },
            {
              created_at: "2022-12-23T12:14:19.182439+00:00",
              picture_validation_status: "SUCCESS",
              source: "USER",
              file_type: "NATIONAL_ID_FRONT",
              file_url: "https://...",
            },
          ],
        },
        sex: "M",
        city: null,
        driving_license: null,
        verifications: [
          {
            processing_attempt_id: "...",
            verification_type: "NATIONAL_ID",
            verification_date: "2022-12-23T12:14:46.436478+00:00",
            approval: "AUTO",
            data: {
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
        customer_user_id: "Your Internal User Id of your database",
        company_app_meta: null,
        missing_verifications: [],
        passport: null,
        last_name: "PEREZ MARTI",
        selfie: {
          created_at: "2022-12-23T12:14:43.926792+00:00",
          picture_validation_status: "SUCCESS",
          source: "USER",
          file_type: "VERIFICATION_SELFIE",
          file_url: "https://...",
        },
        certificate: {
          created_at: "2022-12-23 13:26:48",
          id: "...",
          emitter: { cif: "B01740703", name: "Silt Digital Id SL" },
          reference: "CERT/2022-55",
          file_url: "https://...",
          requester: { cif: null, name: "Test Company" },
        },
        nationality: "ESP",
        country: "ESP",
        status: "SUCCESS",
        birth_date: "1982-09-18",
        address: null,
        first_name: "MARC",
        email: "ee82890f-ec9f-4477-b0ec-b7099de4b929@siltapp.com",
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