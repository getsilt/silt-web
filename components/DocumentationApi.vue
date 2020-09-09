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
      <a href="mailto:customers@getsilt.com">customers@getsilt.com</a>
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
      The production environment URI is:
      <code>https://api.siltapp.com</code>.
    </p>

    <h3>1. Email us: Get your company app Id</h3>
    <p>
      Request your <code>company_app_id</code> to the Silt Team at the email
      address <a href="mailto:customers@getsilt.com">customers@getsilt.com</a>.
      This Id is unique for you, and it will be the same that the one required
      in the SDK integration flow.
    </p>

    <p class="banner-info">
      All requests must include a header
      <code>X-Company-App-Id: <b>{company_app_id}</b></code> with the value we
      sent you.
    </p>

    <h3>2. Register a user to your company at Silt</h3>
    <p>
      Register a user to your company at Silt by making a request
      <b>POST</b> to <code>/v1/auth/register/</code> with the body:
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
      <li><b>access_token</b>: access token that refers to this user only.</li>
    </ul>
    <p class="banner-info">
      The following requests (steps from 3 to 6) should add an authorization
      header with the value of access_token
      <code>Authorization: Bearer <b>{access_token}</b></code
      >.
    </p>
    <p>
      If you have any issues, check the more
      <a :href="`${apiDocUrl}/#/auth/createUserToCompany`"
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
    <p>The 200 response will return:</p>
    <ul>
      <li><b>id</b>: needed for post resource</li>
      <li>
        <b>file</b>: the private url where the picture is stored, you won’t have
        access to this picture at this url)
      </li>
      <li>
        <b>picture_validation_status</b>: Success or errors on the picture. <br /><br /> Schema of possible values for picture_validation_status: <code>SUCCESS, E_IMAGE_BLURRY, E_IMAGE_HAS_GLARE, E_IMAGE_TOO_DARK, E_NO_DOCUMENT_FOUND, E_UNKNOWN</code><br /><br >
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
      <a :href="`${apiDocUrl}/#/pictures/uploadPictures`"
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
    <p>The 200 response will return:</p>
    <pre><code>
        {  
          resource_id: required in step 5
        }
        </code></pre>
    <p>
      If you have any issues, check the more
      <a :href="`${apiDocUrl}/#/resources/addUserResource`"
        >detailed documentation</a
      >
      for this endpoint.
    </p>

    <h3>5. Check the verified resources of the user</h3>
    <p>
      After posting the resource with the pictures, you will need to poll the
      Silt's backend to get a response of the final result of the verification.
    </p>
    <p>Make a poll request <b>GET</b> to</p>
    <code>/v1/resources/{<b>resource_id</b>}</code>

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
        <b>This case will be verified manually by Silt in the following 24h.</b>
      </li>
    </ul>
    <h3>
      6. (Optional, for better UX) Backend: Webhook to get notifications after
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
      languageTab: "en",
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