<template>
  <section class="page-side-nav">
    <nav>
      <a
        @click="activeSection = 'sdk'"
        :class="{ active: activeSection === 'sdk' }"
        >SDK Integration</a
      >
      <a
        @click="activeSection = 'api'"
        :class="{ active: activeSection === 'api' }"
        >API Integration</a
      >
    </nav>
    <div v-if="activeSection === 'sdk'">
      <div>
        <h2>SDK INTEGRATION</h2>
        <h3>1. Email us: Get your company app Id</h3>
        <p>
          Request your <code>company_app_id</code> to the Silt Team at the email
          address
          <a href="mailto:customers@getsilt.com">customers@getsilt.com</a>. This
          Id is unique for you, and it will be the same that the one required in
          the API integration flow.
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
            https://signup-stg.getsilt.com/?redirect_url=[<b>the_url_of_your_site</b>]&company_app_id=[<b>company_app_id</b>]</code
          >
        </p>
        <p v-if="activeTab === 'ios' || activeTab === 'android'">
          What happens next on Native Apps integration: On-click mobile sdk will
          open a webview using the company app id. Once verified the webview
          will close and return the <code>silt_user_id</code> and a <code>company_app_token</code>. You
          can see more info in the examples provided in the SDK code.
        </p>
        <p v-if="activeTab === 'web'">
          What happens next on Website integration: On-click mobile sdk will
          open a webview using the company app id. Once verified the website
          will return the <code>silt_user_id</code> and a <code>company_app_token</code> as query params.
        </p>
        <h3>3. Frontend: Send <code>silt_user_id</code> & <code>company_app_token</code> to your BE</h3>
        <p>
          Make the POST request to your own backend described in step 4. This
          request requires as parameters <code>silt_user_id</code> &
          <code>company_app_token</code>.
        </p>
        <h3>
          4. Backend: Create an endpoint to receive silt_user_id &
          company_app_token from your FE
        </h3>
        <p>
          Create a backend endpoint to receive the silt_user_id and
          company_app_token (as described in step 3). After receiving this, you
          have the data required to ask the info of that user to Silt's backend
          as described in step 5.
        </p>
        <h3>5. Backend: Check user's verification status to Silt</h3>
        <p>
          Use company_app_token against Silt's backend to the endpoint<br />
        </p>
        <p>
          GET
          <code
            >/v1/users/[<b>silt_user_id</b>]/resources/?token=[<b>company_app_token</b>]</code
          >
        </p>
        <p>
          to check if a user has verified resources, and get the data extracted
          from them.
        </p>
        <p>An exmaple of a successful response would be like this:</p>
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
        id: 86
        issue_date: null
        last_name: "PEREZ MARTI"
        license_type: null
        nationality: "ESP"
        owner: "marc@getsilt.com"
        picture_back: null //private, you can’t access this
        picture_front: "https://..." //private, you can’t access this 
        picture_verification: "https://..." //private, you can’t access this 
        resource_number: null 
        resource_type: "PASSPORT" 
        verification_status: "SUCCESS" 
        ocr_status: "SUCCESS" 
        sex: "M"
        updated_at: "2020-08-10T09:12:17.109168Z" 
      }
        </code></pre>
        <p>
          You are not required to store any of these, just what suits you best.
          You can always get this data from us.
        </p>
        <h3>
          6. (Optional, for better UX) Backend: Webhook to get notifications
          after manual reviews
        </h3>
        <p>
          Some cases (less than 5%) require a manual verification. For obvious
          reasons, we cannot verify users instantly this way. We inform the user
          by email once we have finished the verification verification, but you
          can also be notified once this happens. When an expert in Silt has
          changed the status of a document of a user from Manual review PENDING
          to ERROR or SUCCESS we could make a POST request to the endpoint you
          provide us. You will only need to create a POST endpoint that our
          backend will call with this body:
        </p>
        <pre><code>
      { 
        "token": tmp_token.token, 
        "user_id": obj.owner_id,
        "manual_review_status": obj.manual_review_status 
      }
      </code></pre>
      </div>
    </div>

    <div v-if="activeSection === 'api'">
      <!-- API INTEGRATION -->
      <div>
        <h2>API INTEGRATION</h2>
        <p>
          This flow explains the basic integration with Silt's API. It guides
          you through a step by step of the endpoints you need to verify a user.
          You can check more info aside from this documentation in the
          <a :href="apiDocUrl" target="_blank">API's Documentation page.</a>
          This section obviously only requires for Backend modifications, but is
          far more complex than the SDK.
        </p>
        <p>
          If you have any issues, don't hesitate to contact us at
          <a href="mailto:customers@getsilt.com">customers@getsilt.com</a>
        </p>

        <div class="banner-info">
          <p>
            Don't forget that the SDK integration provides the "log in" option
            to the user that allows them to get verified instantly without
            having to upload the pictures of their IDs.
          </p>
          <p>
            You can use the API integration and the SDK Integration
            simultanously, so that you get the best of both worlds :).
          </p>
        </div>

        <p class="banner-info">
          The production environment is: <code>https://api.siltapp.com</code>.<br />
          The staging environment is: <code>https://api.stg.siltapp.com</code>.<br />
          Please, note that data in staging may be destroyed weekly.
        </p>

        <h3>1. Email us: Get your company app Id</h3>
        <p>
          Request your <code>company_app_id</code> to the Silt Team at the email
          address
          <a href="mailto:customers@getsilt.com">customers@getsilt.com</a>. This
          Id is unique for you, and it will be the same that the one required in
          the SDK integration flow.
        </p>

        <h3>2. Register a user to your company at Silt</h3>
        <p>
          Register a user to your company at Silt by making a request
          <b>POST</b> to <code>/v1/auth/register/{company_app_id}</code> with
          the body:
        </p>
        <pre><code>
        { 
          email: the email associated to that user 
          company_app_id: the company app id received in the step 1
        }
        </code></pre>

        <p>The 200 response will return:</p>
        <ul>
          <li><b>user_id</b>: as a company you can ignore this endpoint</li>
          <li>
            <b>access_token</b>: access token that refers to this user only.
          </li>
        </ul>
        <p class="banner-warning">
          The following requests (steps from 3 to 6) should add an authorization
          header with the value of access_token.
        </p>
        <p>
          If you have any issues, check the more
          <a :href="`${apiDocUrl}/auth/createUserToCompany`"
            >detailed documentation</a
          >
          for this endpoint.
        </p>
        <h3>3. Send the pictures individually</h3>
        <p>
          Make a POST to <code>/v1/pictures/</code> for each picture of the doc
          providing the body:
        </p>
        <pre><code>
      {
        type: "FRONT" || "BACK" || "VERIFICATION" as String
        file: the  binary of the file as Binary
      }
      </code></pre>
        <p>
          The 200 response will return:
        </p>
        <ul>
          <li><b>Id</b>: needed for post resource</li>
          <li>
            <b>file</b>: the private url where the picture is stored, you won’t
            have access to this picture at this url)
          </li>
          <li>
            <b>Picture_validation_status</b>: Success or errors on the picture.
            Check out the schema in the docs for more info
          </li>
        </ul>
        <p>
          If you have any issues, check the more
          <a :href="`${apiDocUrl}/pictures/uploadPictures`"
            >detailed documentation</a
          >
          for this endpoint.
        </p>

        <h3>4. Send the resource with the final pictures</h3>
        <p>
          Send the resource to Silt for verification with the final pictures.<br />
          For that you need to make a <b>POST</b> to
          <code>/v1/resources</code> providing the body:
        </p>
        <pre><code>
        {
          picture_front_id: final picture id response of step 2
          picture_back_id: final picture id response of step 2
          selfie_picture_id: final picture id response of step 2
          type: "PASSPORT" or "DRIVING_LICENSE" or "NATIONAL_ID"
        }
        </code></pre>
        <p>
          The 200 response will return:
        </p>
        <pre><code>
        {  
          resource_id: required in step 5
        }
        </code></pre>
        <p>
          If you have any issues, check the more
          <a :href="`${apiDocUrl}/resources/addUserResource`"
            >detailed documentation</a
          >
          for this endpoint.
        </p>

        <h3>5. Check the verified resources of the user</h3>
        <p>
          After posting the resource with the pictures, you will need to poll
          the Silt's backend to get a response of the final result of the
          verification.
        </p>
        <p>
          Make a poll request <b>GET</b> to
          <code>/v1/resources/{<b>resource_id</b>}</code>
        </p>
        <p>Stop the polling with the following results:</p>
        <ul>
          <li>
            <b>SUCCESS</b>: <i>Both</i> <code>ocr_status</code> or
            <code>verification_status</code> are SUCCESS.
          </li>
          <li>
            <b>ERROR</b>: <i>At least one</i> of the <code>ocr_status</code> or
            <code>verification_status</code> are VERIFICATION_ERROR or ERROR.
          </li>
          <li>
            <b>MANUAL_REVIEW</b>: <i>At least one</i> <code>ocr_status</code> or
            <code>verification_status</code> are MANUAL_REVIEW.
            <b
              >This case will be verified manually by Silt in the following
              24h.</b
            >
          </li>
        </ul>
        <h3>
          6. (Optional, for better UX) Backend: Webhook to get notifications
          after manual reviews
        </h3>
        <p>
          Some cases (less than 5%) require a manual verification. For obvious
          reasons, we cannot verify users instantly this way. We inform the user
          by email once we have finished the verification verification, but you
          can also be notified once this happens. When an expert in Silt has
          changed the status of a document of a user from Manual review PENDING
          to ERROR or SUCCESS we could make a POST request to the endpoint you
          provide us. You will only need to create a POST endpoint that our
          backend will call with this body:
        </p>
        <pre><code>
      { 
        "token": tmp_token.token, 
        "user_id": obj.owner_id,
        "manual_review_status": obj.manual_review_status 
      }
      </code></pre>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  nuxtI18n: {
    paths: {
      en: "/developers", // -> accessible at /about-us (no prefix since it's the default locale)
      fr: "/developers", // -> accessible at /fr/a-propos
      es: "/developers", // -> accessible at /es/sobre
    },
  },
  data() {
    return {
      siltEmail: "hello@getsilt.com",
      activeSection: "sdk",
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
<style scoped lang="sass">
</style>