<template>
  <div>
    <h2>API INTEGRATION</h2>
    <p>
      This flow explains the basic integration with Silt's API. It guides you
      through a step by step of the endpoints you need to verify a user. You can
      check more info aside from this documentation in the
      <a :href="apiDocUrl" target="_blank">API's Documentation page.</a>
      This section obviously only requires for Backend modifications, but is far
      more complex than the SDK.
    </p>
    <p>
      If you have any issues, don't hesitate to contact us at
      <a target="_blank" href="mailto:customers@getsilt.com"
        >customers@getsilt.com</a
      >
    </p>

    <div class="banner-info">
      <p>
        Don't forget that the SDK integration provides the "log in" option to
        the user that allows them to get verified instantly without having to
        upload the pictures of their IDs.
      </p>
      <p>
        You can use the API integration and the SDK Integration simultanously,
        so that you get the best of both worlds :).
      </p>
    </div>

    <p class="banner-info">
      The sandbox environment URI is:
      <code>https://api-sandbox.siltapp.com</code>. The production environment
      URI is: <code>https://api.siltapp.com</code>.
    </p>

    <h3>1. Email us: Get your company app Id</h3>
    <p>
      Request your <code>company_app_id</code> and
      <b>X-Company-App-API-Token</b> to the Silt Team at the email address
      <a href="mailto:customers@getsilt.com">customers@getsilt.com</a>. This Id
      is unique for you, and it will be the same that the one required in the
      SDK integration flow.
    </p>

    <p class="banner-info">
      All requests must include a header
      <code>X-Company-App-Id: <b>{company_app_id}</b></code> with the value we
      sent you.
    </p>

    <h3>2. Register a user to Silt</h3>
    <p>
      Register a user by making a request
      <b>POST</b> to <code>/v1/auth/register/</code> with the body:
    </p>
    <pre><code>
        { 
          email: the email associated to that user 
        }
        </code></pre>

    <p>The 200 response will return:</p>
    <ul>
      <li><b>access_token</b>: access token that refers to this user only.</li>
      <li>
        <b>user_id</b>: The user id reference of Silt's database. Useful to
        execute requests like in the following steps, silt_user_id.
      </li>
    </ul>
    <p class="banner-info">
      The following requests (steps from 3 to 6) should add an authorization
      header with the value of access_token
      <code>Authorization: Bearer <b>{access_token}</b></code
      >.
    </p>
    <h3>3. Register an existing user to your company at Silt</h3>
    <p>
      Register a user to your company at Silt by making a request
      <b>POST</b> to <code>/v1/company-apps/{company_app_id}/users/</code> with
      the body:
    </p>
    <pre><code>
        { 
          user_id: {silt_user_id},
          meta: {"key": "value"} // useful to be a reference for your database, you can put whatever you want here in JSON format
        }
    </code></pre>

    <p>The 200 response will return:</p>
    <ul>
      <li>
        <b>token</b>: your <code>company_app_token</code>, a temporary token
        that identifies this user with your company, so that you can request its
        status and other info in step 7.
      </li>
    </ul>
    <p>
      If you have any issues, check the more
      <a :href="`${apiDocUrl}`">detailed documentation</a>
      for this endpoint.
    </p>
    <h3>4.1. Frontend: Send silt_user_id & company_app_token to your BE</h3>
    <p>
      Make the POST request to your own backend described in step 4. This
      request requires as parameters <code>silt_user_id</code> &
      <code>company_app_token</code>.
    </p>
    <h3>
      4.2. Backend: Create an endpoint to receive silt_user_id &
      company_app_token from your FE
    </h3>
    <p>
      Create a backend endpoint to receive the silt_user_id and
      company_app_token (as described in step 3). After receiving this, you have
      the data required to ask the info of that user to Silt's backend as
      described in step 5.
    </p>
    <p>
      Store <code>silt_user_id</code> to your database so you can easily
      reference the verification status at any time.
    </p>
    <h3>5. Send the pictures individually</h3>
    <p>
      Make a POST to <code>/v1/files/</code> for each file of the doc providing
      the following body:
    </p>
    <pre><code>
      {
        type: "PASSPORT_FRONT" || "NATIONAL_ID_FRONT" || "NATIONAL_ID_BACK" || "DRIVING_LICENSE_FRONT" || "DRIVING_LICENSE_BACK" || "VERIFICATION_SELFIE" || "VERIFICATION_VIDEO" as String
        file: the  binary of the file as Binary Base 64
      }
      </code></pre>
    <p>
      <b
        >Please, note that the body must be sent in the format
        <code>form-data</code> with the header content-type
        <code>"Content-type": "application/x-www-form-urlencoded"</code></b
      >
    </p>
    <p>The 200 response will return:</p>
    <ul>
      <li><b>id</b>: needed for post resource</li>
      <li>
        <b>file</b>: the private url where the picture is stored, you won’t have
        access to this picture at this url)
      </li>
      <li>
        <b>picture_validation_status</b>: Success or errors on the picture.
        <br /><br />
        Schema of possible values for picture_validation_status:
        <code
          >SUCCESS, E_IMAGE_BLURRY, E_IMAGE_HAS_GLARE, E_IMAGE_TOO_DARK,
          E_NO_DOCUMENT_FOUND, E_UNKNOWN</code
        ><br /><br />
        We suggest this localized key value pairs to give users feedback per
        each possible value of picture_validation_status:<br /><br />
        <div class="tabs-wrapper">
          <div
            class="tab"
            @click="languageTab = 'en'"
            :class="{ active: languageTab === 'en' }"
          >
            English
          </div>
          <div
            class="tab"
            @click="languageTab = 'es'"
            :class="{ active: languageTab === 'es' }"
          >
            Spanish
          </div>
        </div>
        <pre v-if="languageTab === 'en'"><code>
        "reviewPicture_e_image_blurry_description": "Please, hold still and take the picture again and make sure there is enough light.",
        "reviewPicture_e_image_blurry_title": "Blurry Photo",
        "reviewPicture_e_image_has_glare_description": "There is glare in the picture. Try to move the document away from the source of light.",
        "reviewPicture_e_image_has_glare_title": "The image has a light glare",
        "reviewPicture_e_image_too_dark_description": "Please, take a picture again and make sure you don't have a very bright background.",
        "reviewPicture_e_image_too_dark_title": "The photo is too dark",
        "reviewPicture_e_no_document_found_description": "Take a picture of the document, make sure entirely inside the frame and not blurry.",
        "reviewPicture_e_no_document_found_title": "We could not find a document in the photo.",
        "reviewPicture_e_unknown_description": "Please, upload a new one and make sure that it does not have dark zones or glare.",
        "reviewPicture_e_unknown_title": "We could not properly process your photo",
        "reviewPicture_e_unsupported_document_type_description": "Other documents like passport, plastic document cards or driving licenses can be verified within a few seconds. If you don't have them, this document will be verified by our experts manually, but it will take up to 48h.",
        "reviewPicture_e_unsupported_document_type_title": "This document will take up to 48h to verify",
        </code></pre>
        <pre v-if="languageTab === 'es'"><code>
        "reviewPicture_e_image_blurry_description": "Por favor, mantén la cámara fija, asegúrate que hay luz suficiente y toma la foto de nuevo.",
        "reviewPicture_e_image_blurry_title": "La foto está borrosa",
        "reviewPicture_e_image_has_glare_description": "Por favor, intenta alejar el documento de la fuente de luz y toma la foto de nuevo.",
        "reviewPicture_e_image_has_glare_title": "Hay reflejos de luz en la foto",
        "reviewPicture_e_image_too_dark_description": "Por favor, toma la foto otra vez y asegúrate que no hay un fondo demasiado iluminado.",
        "reviewPicture_e_image_too_dark_title": "La foto está muy oscura",
        "reviewPicture_e_no_document_found_description": "Por favor, toma la foto de nuevo y asegúrate de que todo el documento aparece en la foto y que no está borroso.",
        "reviewPicture_e_no_document_found_title": "No pudimos detectar ningún documento en la foto.",
        "reviewPicture_e_unknown_description": "Por favor, toma una foto de nuevo y asegúrate que no tiene reflejos ni zonas oscuras.",
        "reviewPicture_e_unknown_title": "No pudimos procesar correctamente la foto",
        "reviewPicture_e_unsupported_document_type_description": "Otros documentos como el pasaporte, el carnet de identidad de plástico o licencias de conducir los podemos verificar en pocos segundos. Si no los tienes, nuestros expertos verificarán este documento manualmente, que puede llevarnos hasta 48h.",
        "reviewPicture_e_unsupported_document_type_title": "Este documento nos llevará hasta 48h verificarlo",
        </code></pre>
      </li>
    </ul>
    <p>
      If you have any issues, check the more
      <a :href="`${apiDocUrl}#/pictures/uploadPictures`"
        >detailed documentation</a
      >
      for this endpoint.
    </p>

    <h3>6. Send the final pictures to verify a user</h3>
    <p>
      Create a processing attempt to Silt for verification with the final
      pictures.<br />
      For that you need to make a <b>POST</b> to
      <code>/v1/processing-attempts</code> providing the body:
    </p>
    <pre><code>
        {
          // files order is not taken into account
          files: [
            front_file_id,
            back_file_id, //not required for passports
            selfie_file_id
          ],
          type: "USER_DOCUMENT_VERIFICATION",
          document_type: "PASSPORT" | "NATIONAL_ID" | "DRIVING_LICENSE"
        }
        </code></pre>

    <p>The 200 response will return:</p>
    <pre><code>
        {  
          processing_attempt_id: required in step 7.a
        }
        </code></pre>
    <p>
      If you have any issues, check the more
      <a :href="`${apiDocUrl}/#/processing-attempts`">detailed documentation</a>
      for this endpoint.
    </p>
    <h3>7 Check verification status</h3>
    <p>
      Depending on your UI flow, now you should check the processing attempt
      status (step 7.a) or the user status (step 7.b). You could also check both
      of them, but usually using 7.a or 7.b is enough. We think that 7.b is less
      complex and a more complete solution, but 7.a may be necessary for some
      cases.
    </p>
    <h4>7.a Check the status of a processing attempt of the user</h4>
    <p>
      After posting the resource with the pictures, you will need to poll the
      Silt's backend to get a response of the final result of the verification.
    </p>
    <p>Make a poll request <b>GET</b> to</p>
    <code>/v1/processing-attempts/{<b>processing_attempt_id</b>}</code>

    <p>
      Stop the polling when the <code>status</code> attribute has a final value:
    </p>
    <ul>
      <li>
        <b>SUCCESS</b>: The resource is successfully verified, meaning that is
        you can proceed to step 6.
      </li>
      <li>
        <b>ERROR</b>: The resource is not verified and the user needs to upload
        more photos. Additionally you can check ocr_status to know if it's the
        document that is wrong, or verification_status to identify if the faces
        do not match or other errors.
      </li>
      <li>
        <b>MANUAL_REVIEW</b>: This resource requires a manual review and is not
        yet verified. You can manually verify it at
        <a href="https://dashboard.getsilt.com">dashboard.getsilt.com</a>.
      </li>
    </ul>
    <h4>7.b Backend: Check user's verification status</h4>
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
    <div
      class="accordion__wrapper"
      :class="{ active: user_status_accordion.active }"
    >
      <div
        class="accordion__title"
        @click="user_status_accordion.active = !user_status_accordion.active"
      >
        <b>200 Response:</b>
      </div>
      <div class="accordion__content">
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
      "address": "PLAZA CATALUÑA 1 ENT 04",
      "birth_date": "1988-12-25",
      "company_app_meta": null,
      "selfie": {
          "picture_validation_status": "SUCCESS",
          "created_at": "2021-10-25T08:00:16.986789+00:00",
          "file_url": "https://pro-silt-resources.s3.amazonaws.com/resource-files/1a1a1a1a-11b3-47c1-a6b8-f04be025a500.jpg?AWSAccessKeyId=AKIAYUXNO2AH56LUSVWR&Signature=dNpBcWeru8hwVrnVbwOvN0CThOg%3D&Expires=1635149204",
          "file_type": "VERIFICATION_SELFIE"
      },
      "national_id": {
          "country": "ESP",
          "city": "BARCELONA",
          "created_at": "2021-10-25T08:00:22.614666+00:00",
          "id": "b1d3a4cd-6752-4f61-8b50-c1046295b447",
          "document_number": "11223344A",
          "expiration_date": "2023-08-02",
          "nationality": "ESP",
          "issue_date": null,
          "last_name": "PEREZ MARTI",
          "license_types": null,
          "sex": "M",
          "first_name": "MARC",
          "address": "PLAZA CATALUÑA 1 ENT 04",
          "updated_at": "2021-10-25T08:00:22.712704+00:00",
          "birth_date": "1988-12-25",
          "files": [
              {
                  "picture_validation_status": "SUCCESS",
                  "created_at": "2021-10-25T08:00:05.878820+00:00",
                  "file_url": "https://pro-silt-resources.s3.amazonaws.com/resource-files/1a1a1a1a-f96b-48f6-a115-1bc2447ca798.jpg?AWSAccessKeyId=AKIAYUXNO2AH56LUSVWR&Signature=DPXnGrPjivqmfG1niOdyE%2FCGhiQ%3D&Expires=1635149204",
                  "file_type": "NATIONAL_ID_BACK"
              },
              {
                  "picture_validation_status": "SUCCESS",
                  "created_at": "2021-10-25T07:59:39.698263+00:00",
                  "file_url": "https://pro-silt-resources.s3.amazonaws.com/resource-files/1a1a1a1a-192c-43b3-9f01-d82e784a3ac7.jpg?AWSAccessKeyId=AKIAYUXNO2AH56LUSVWR&Signature=fsznyQILyUJduOQwM6%2F7cP1v3X8%3D&Expires=1635149204",
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
      </div>
    </div>
    <p>You are not required to store any of these, just what suits you best.</p>
    <div class="banner-info">
      <p>
        You may need to do a polling request if you skip step 7.a while
        <code>status == 'PENDING'</code>
      </p>
    </div>
    <!-- <h3>
      9. (Optional, only if needed) Frontend/Backend: Get document files
      temporary URLs
    </h3>
    <p>
      This endpoint will return temporary accessible urls to retrieve the
      pictures and videos of the document, you should have had access to them in
      step 7 though. We provide this endpoint for rare edge cases.
    </p>
    <p>
      Use <code>company_app_token</code> and
      <code>processing_attempt_id</code>(retrieved in the response of step 5)
      <br />
      against Silt's backend endpoint:<br />
    </p>
    <p>
      <b>GET</b>
      <code
        >/v1/processing-attempts/<b>{processing_attempt_id}</b>/files/?token=<b
          >{company_app_token}</b
        ></code
      >
    </p>
    <p><b>200 Response:</b></p>
    <pre><code>
      {
        files: [
          {
            type: "VERIFICATION_SELFIE" | "VERIFICATION_VIDEO" | "NATIONAL_ID_BACK" | "NATIONAL_ID_FRONT" | "DRIVING_LICENSE_FRONT" ...,
            url: "https://..." (this could be a video if you are using video verification)
          }
        ]
      }
    </code></pre> -->
    <h3>
      8. (Optional, for better UX) Backend: Webhook to get notifications after
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
    <div class="accordion__wrapper" :class="{ active: pa_webhook.active }">
      <div
        class="accordion__title"
        @click="pa_webhook.active = !pa_webhook.active"
      >
        <b>200 Response:</b>
      </div>
      <div class="accordion__content">
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
            "url": "https://pro-silt-resources.s3.amazonaws.com/resource-files/1a1a1a1a-7ea4-4243-9e71-7a883629e303.jpg?AWSAccessKeyId=AKIAY...&Signature=TRB43...&Expires=1633702231"
          },
          {
            "type": "NATIONAL_ID_BACK",
            "url": "https://pro-silt-resources.s3.amazonaws.com/resource-files/1a1a1a1a-a7ec-472f-9136-86d6a47ce4e6.jpg?AWSAccessKeyId=AKIAYU...&Signature=5J3xuCZm...&Expires=1633702231"
          },
          {
            "type": "NATIONAL_ID_FRONT",
            "url": "https://pro-silt-resources.s3.amazonaws.com/resource-files/1a1a1a1a1a-57b6-4d7c-a372-41be6c5df33a.jpg?AWSAccessKeyId=AKIAYUXN...&Signature=Zu8lquS5Y...&Expires=1633702231"
          }
        ],
        "user_meta": {"abc":"123"}
      }
      </code></pre>
      </div>
    </div>

    <h3>9. (Optional) Documentation for extra functionalities</h3>
    <p>
      You can check our detailed
      <a :href="apiDocUrl" target="_blank">API's Documentation page</a> to know
      how to make other queries and access other funcitonalities, such as
      retrieving the pictures of a user at any time.
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      siltEmail: "hello@getsilt.com",
      activeTab: "ios",
      languageTab: "en",
      apiDocUrl: "https://app.swaggerhub.com/apis-docs/Silt/Silt-API/",
      user_status_accordion: { active: false },
      pa_webhook: { active: false },
    };
  },
  methods: {
    activateTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>