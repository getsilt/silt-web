(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{391:function(e,t,n){var content=n(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(69).default)("0e9f1f02",content,!0,{sourceMap:!1})},416:function(e,t,n){"use strict";n(391)},417:function(e,t,n){var o=n(68)((function(i){return i[1]}));o.push([e.i,".tree-view-item-value-number{color:green}.tree-view-item-value-string{color:blue}.tree-view-item-value-boolean{color:violet}",""]),o.locals={},e.exports=o},420:function(e,t,n){"use strict";var o={data:function(){return{siltEmail:"hello@getsilt.com",activeTab:"ios",apiDocUrl:"https://app.swaggerhub.com/apis-docs/Silt/Silt-API",user_status_accordion:{active:!1},pa_webhook:{active:!1},webhook_response:{processing_attempt:{document_type:"NATIONAL_ID",type:"USER_DOCUMENT_VERIFICATION",created_at:"2022-12-23T12:14:46.436478+00:00",permission_type:"NATIONAL_ID",updated_at:"2022-12-23T21:58:54.816132+00:00",manual_review_status:null,owner_user:{address:null,city:null,last_name:"PEREZ MARTI",nationality:"ESP",sex:"M",national_id_id:"...",birth_date:"1982-09-18",verifications:[],country:"ESP",first_name:"MARC",email:"ee82890f-ec9f-4477-b0ec-b7099de4b929@siltapp.com",passport_id:null,driving_license_id:null,id:"..."},status:"SUCCESS",owner_company_app_id:"...",identity_document:{address:"",license_types:null,created_at:"2022-12-23T13:26:48.458160+00:00",document_number:"XXXXXXXXC",city:"",updated_at:"2022-12-23T13:26:48.470899+00:00",last_name:"PEREZ MARTI",nationality:"ESP",sex:"M",expiration_date:"2023-08-02",birth_date:"1982-09-18",country:"ESP",first_name:"MARC",issue_date:null,id:"..."},request_data:null,core_module_executions:[{type:"PICTURE_VALIDATION",errors:[],raw:null,status:"SUCCESS",output:{side:"FRONT",is_nie:!1,country:"ESP",doc_type:"ID",is_paper:!1,bounding_box:[205,504,1243,1110],rotation_angle:-5,is_pinkpaper_dl:!1}},{type:"PICTURE_VALIDATION",errors:[],raw:null,status:"SUCCESS",output:{side:"BACK",is_nie:!1,country:"ESP",doc_type:"ID",is_paper:!1,bounding_box:[165,665,968,1055],rotation_angle:-359,is_pinkpaper_dl:!1}},{type:"PICTURE_VALIDATION",errors:[],raw:null,status:"SUCCESS",output:{side:null,is_nie:null,country:null,doc_type:null,is_paper:null,bounding_box:null,rotation_angle:null,is_pinkpaper_dl:null}},{type:"FACE_MATCHER",errors:[],raw:null,status:"SUCCESS",output:null},{type:"OCR",errors:[],raw:null,status:"SUCCESS",output:{sex:"M",city:"",name:"MARC",number:"XXXXXXXXC",address:"",country:"ESP",surname:"PEREZ MARTI",province:"",birth_date:"1982-09-18",issue_date:"None",patronimic:null,nationality:"ESP",license_types:null,place_of_birth:null,expiration_date:"2023-08-02"}}],id:"..."},files:[{type:"VERIFICATION_SELFIE",url:"https://..."},{type:"NATIONAL_ID_BACK",url:"https://..."},{type:"NATIONAL_ID_FRONT",url:"https://..."}],manual_review_status:null,user:{city:null,customer_user_id:"Your Internal User Id of your database",company_app_meta:null,verifications:[],first_name:"MARC",certificate:{file_url:"https://...",created_at:"2022-12-23 13:26:48",emitter:{cif:"B01740703",name:"Silt Digital Id SL"},requester:{cif:null,name:"Test Company"},reference:"CERT/2022-55",id:"..."},last_name:"PEREZ MARTI",nationality:"ESP",email:"ee82890f-ec9f-4477-b0ec-b7099de4b929@siltapp.com",address:null,missing_verifications:[],passport:null,national_id:{address:"",license_types:null,created_at:"2022-12-23T13:26:48.458160+00:00",document_number:"XXXXXXXXC",city:"",updated_at:"2022-12-23T13:26:48.470899+00:00",last_name:"PEREZ MARTI",nationality:"ESP",sex:"M",expiration_date:"2023-08-02",birth_date:"1982-09-18",country:"ESP",first_name:"MARC",issue_date:null,id:"...",files:[{file_url:"https://...",created_at:"2022-12-23T12:14:34.577939+00:00",source:"USER",picture_validation_status:"SUCCESS",file_type:"NATIONAL_ID_BACK"},{file_url:"https://...",created_at:"2022-12-23T12:14:19.182439+00:00",source:"USER",picture_validation_status:"SUCCESS",file_type:"NATIONAL_ID_FRONT"}]},driving_license:null,id:"...",sex:"M",status:"SUCCESS",birth_date:"1992-09-18",country:"ESP",selfie:{file_url:"https://...",created_at:"2022-12-23T12:14:43.926792+00:00",source:"USER",picture_validation_status:"SUCCESS",file_type:"VERIFICATION_SELFIE"}},token:"...",status:"SUCCESS",user_id:"...",user_meta:null}}},methods:{activateTab:function(e){this.activeTab=e}}},r=(n(416),n(20)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v("SDK Integration")]),e._v(" "),t("h3",[e._v("1. Signup and create a company profile")]),e._v(" "),e._m(0),e._v(" "),t("h3",[e._v("2. Frontend: Add SDK on mobile with company app id")]),e._v(" "),t("div",{staticClass:"tabs-wrapper"},[t("div",{staticClass:"tab",class:{active:"ios"===e.activeTab},on:{click:function(t){return e.activateTab("ios")}}},[e._v("\n      iOS\n    ")]),e._v(" "),t("div",{staticClass:"tab",class:{active:"android"===e.activeTab},on:{click:function(t){return e.activateTab("android")}}},[e._v("\n      Android\n    ")]),e._v(" "),t("div",{staticClass:"tab",class:{active:"web"===e.activeTab},on:{click:function(t){return e.activateTab("web")}}},[e._v("\n      Web\n    ")])]),e._v(" "),"ios"===e.activeTab?t("p",[e._v("\n    iOS:\n    "),t("a",{attrs:{href:"https://github.com/getsilt/ios-sdk"}},[e._v("https://github.com/getsilt/ios-sdk")])]):e._e(),e._v(" "),"android"===e.activeTab?t("p",[e._v("\n    Android:\n    "),t("a",{attrs:{href:"https://github.com/getsilt/android-sdk"}},[e._v("https://github.com/getsilt/android-sdk")])]):e._e(),e._v(" "),"web"===e.activeTab?t("p",[e._v("\n    Web: Create a button that calls the following link:"),t("br"),e._v(" "),e._m(1)]):e._e(),e._v(" "),"ios"===e.activeTab||"android"===e.activeTab?t("p",[e._v("\n    What happens next on Native Apps integration: On-click mobile sdk will\n    open a webview using the company app id. Once verified the webview will\n    close and return the "),t("code",[e._v("silt_user_id")]),e._v(" and a\n    "),t("code",[e._v("company_app_token")]),e._v(". You can see more info in the examples\n    provided in the SDK code.\n  ")]):e._e(),e._v(" "),"web"===e.activeTab?t("p",[e._v("\n    What happens next on Website integration: On-click mobile sdk will open a\n    webview using the company app id. Once verified the website will return\n    the "),t("code",[e._v("silt_user_id")]),e._v(" and a "),t("code",[e._v("company_app_token")]),e._v(" as\n    query params.\n  ")]):e._e(),e._v(" "),t("p",[e._v("Here you can see a list of available query parameters.")]),e._v(" "),e._m(2),e._v(" "),t("h3",[e._v("\n    3. Backend: Webhook to get notifications after\n    user status update\n  ")]),e._v(" "),t("p",[e._v("\n    When the status of a document of a user is created or updated, we can\n    notify you to your Backend with a webhook pointing to the endpoint you\n    provide us.\n  ")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),t("code",{staticClass:"code-block"},[t("tree-view",{attrs:{data:e.webhook_response,options:{maxDepth:1,rootObjectKey:"response"}}})],1)])}),[function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Signup and create an account in our "),t("a",{attrs:{target:"_blank",href:"https://dashboard.getsilt.com/welcome"}},[e._v("dashboard page")]),e._v(".\n    There, under "),t("b",[e._v('"Verification Flow Settings"')]),e._v(" will be able to get your "),t("code",[e._v("company_app_id")]),e._v(' and other information and configuration options.\n    You can also create more verification flows under "Company Settings".\n  ')])},function(){var e=this,t=e._self._c;return t("code",[e._v("\n      https://signup.getsilt.com/?redirect_url="),t("b",[e._v("{the_url_of_your_site}")]),e._v("&company_app_id="),t("b",[e._v("{company_app_id}")])])},function(){var e=this,t=e._self._c;return t("table",[t("thead",[t("tr",[t("th",[e._v("Query param key")]),e._v(" "),t("th",[e._v("Value type")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tr",[t("th",[t("code",[e._v("company_app_id")])]),e._v(" "),t("td",[e._v("String (Required)")]),e._v(" "),t("td",[e._v("\n        Mandatory field to get the configuration of the company app. Create\n        your company app now from the dashboard.getsilt.com.\n        "),t("br"),e._v("Ex:\n        "),t("code",[e._v("&company_app_id=c11d1782-bcdc-4854-b5c9-32fd160fba8b")])])]),e._v(" "),t("tr",[t("th",[t("code",[t("b",[e._v("customer_user_id")])])]),e._v(" "),t("td",[e._v("String (Recommended)")]),e._v(" "),t("td",[e._v("\n        This can be your internal user id, the one in your database. This\n        field can be useful to track which user got verified when you receive\n        a webhook. You can also search by this field in the\n        dashboard.getsilt.com.\n        "),t("br"),e._v("Ex: "),t("code",[e._v("&customer_user_id=172345")])])]),e._v(" "),t("tr",[t("th",[t("code",[e._v("user_email")])]),e._v(" "),t("td",[e._v("String (Optional)")]),e._v(" "),t("td",[e._v("\n        Used to prefill the email field in the signup screens. If the user\n        already has a Silt account, he will be prompt to be able to skip\n        taking pictures of the Id we already have.\n        "),t("br"),e._v("Ex: "),t("code",[e._v("&user_email=steve@apple.com")])])]),e._v(" "),t("tr",[t("th",[t("code",[e._v("meta")])]),e._v(" "),t("td",[e._v("JSON (Optional)")]),e._v(" "),t("td",[e._v("\n        You can use this field to store information a silt user that you will\n        receive whenever a webhook is sent or in GET /status. Similar to\n        customer_user_id, but without search option.\n        "),t("br"),e._v("Ex: "),t("code",[e._v('&meta={"abc":"123", "grumpy_cat": "miao"}')]),e._v("\n        There is no need to encode the url.\n      ")])]),e._v(" "),t("tr",[t("th",[t("code",[e._v("redirect_url")])]),e._v(" "),t("td",[e._v("String (Optional)")]),e._v(" "),t("td",[t("b",[e._v("Important: Use this parameter as the last one of the url you generate.")]),e._v("\n        Url that will point the button in the verification complete screen.\n        "),t("br"),e._v("Ex: "),t("code",[e._v("&redirect_url=https://YOURURL.com")])])]),e._v(" "),t("tr",[t("th",[t("code",[e._v("hide_redirect_button")])]),e._v(" "),t("td",[e._v("Boolean (Optional)")]),e._v(" "),t("td",[e._v("\n        Used to hide the button of redirect in the verification complete\n        screen. Some customers use it in the iframe integration.\n        "),t("br"),e._v("Ex: "),t("code",[e._v("&hide_redirect_button=true")])])]),e._v(" "),t("tr",[t("th",[t("code",[e._v("hide_manual_review")])]),e._v(" "),t("td",[e._v("Boolean (Optional)")]),e._v(" "),t("td",[e._v("\n        Not recomended. This option hides the option of sending a document to\n        manual review.\n        "),t("br"),e._v("Ex: "),t("code",[e._v("&hide_manual_review=true")])])])])},function(){var e=this,t=e._self._c;return t("p",{staticClass:"banner-info"},[e._v("\n   Possible values for status are "),t("code",[e._v("SUCCESS | ERROR | VERIFICATION_ERROR | PENDING | RUNNING | MANUAL_REVIEW")]),e._v(".\n    Keep in mind that if a "),t("b",[e._v("manual verification")]),e._v(" takes place and "),t("code",[e._v("status")]),e._v(" has "),t("code",[e._v("MANUAL_REVIEW")]),e._v(", you will have to check also the "),t("code",[e._v("manual_review_status")]),e._v(" that may have the following possible values: "),t("code",[e._v("SUCCESS | ERROR | PENDING")])])},function(){var e=this,t=e._self._c;return t("p",{staticClass:"banner-info"},[e._v("\n    It is strongly recommended to use the parameter "),t("code",[e._v("customer_user_id")]),e._v(" in the url of step 2. \n    This way, you can know to which user of your database refers the notification.\n  ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Some cases (less than 5%) require a manual verification. For obvious\n    reasons, we cannot verify users instantly this way. We inform the user by\n    email once we have finished the verification, but you can\n    also be notified once this happens. When you have changed the status of a\n    document we will also make a POST request to the endpoint you provide us. The\n    response will return the same response as /status request under "),t("code",[e._v("user")]),e._v(" field, the "),t("code",[e._v("processing_attempt")]),e._v(" that triggered the webhook, its "),t("code",[e._v("status")]),e._v(".\n  ")])}],!1,null,null,null);t.a=component.exports},432:function(e,t,n){var content=n(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(69).default)("4e36d912",content,!0,{sourceMap:!1})},433:function(e,t,n){var content=n(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(69).default)("135bb490",content,!0,{sourceMap:!1})},494:function(e,t,n){"use strict";n(432)},495:function(e,t,n){var o=n(68)((function(i){return i[1]}));o.push([e.i,".tree-view-item-value-number{color:green}.tree-view-item-value-string{color:blue}.tree-view-item-value-boolean{color:violet}",""]),o.locals={},e.exports=o},496:function(e,t,n){"use strict";n(433)},497:function(e,t,n){var o=n(68)((function(i){return i[1]}));o.push([e.i,':root{--bg-main:#fff;--primary:#08f;--text-primary:#22262f;--text-primary-inverted:#f3f4f5;--bg-primary:#22262f;--bg-primary-inverted:#f3f4f5;--bg-secondary:#f3f4f5;--bg-terciary:#d8d8d8;--secondary:#8e9aa5;--terciary:#d8d8d8;--link:#f3f4f5;--link-secondary:#fff;--link-inverted:#666;--link-inverted-hover:#000}:root.dark{--bg-main:#000;--primary:#08f;--text-primary:#fff;--text-primary-inverted:#22262f;--text-secondary:#8e9aa5;--text-secondary-inverted:#22262f;--bg-primary:#f3f4f5;--bg-primary-inverted:#22262f;--bg-secondary:#0e121e;--bg-terciary:#121828;--secondary:#b4b4b4;--terciary:#8e9aa5;--link:#f3f4f5;--link-secondary:#fff;--link-inverted:#666;--link-inverted-hover:#000}.bg-gradient-1{background:#032c9d;background:linear-gradient(45deg,#3032cd,#3068ff 48%,#6cb0ff);transition:.3s ease-in-out}.text-gradient-1,.text-gradient-1-child>*,.text-gradient-2,.text-gradient-2-child>*,.text-gradient-3,.text-gradient-3-child>*,.text-gradient-4,.text-gradient-4-child>*,.text-gradient-5,.text-gradient-5-child>*{-webkit-background-clip:text;transition:.3s ease-in-out;-webkit-text-fill-color:transparent;-moz-background-clip:text;-moz-text-fill-color:transparent;background-image:linear-gradient(45deg,#3032cd,#3068ff 70%,#6cb0ff);background-position:100%;background-repeat:repeat;background-size:300%}.bg-gradient-2{background:#032c9d;background:linear-gradient(45deg,#3032cd,#3068ff 60%,#f66);transition:.3s ease-in-out}.bg-gradient-3{background:#fff;background-image:linear-gradient(45deg,rgba(48,50,205,.15),rgba(48,104,255,.15) 30%,hsla(0,100%,70%,.15));transition:.3s ease-in-out}.text-gradient-2,.text-gradient-2-child>*{background-image:linear-gradient(45deg,#3032cd,#3068ff 60%,#f66)}.developers{font-size:1rem}.developers td{padding:10px 10px 20px}.developers tr>:not(first-child){padding-left:10px;vertical-align:baseline}.developers th{color:#333;font-family:"Futura-Bold",sans-serif;text-align:left}',""]),o.locals={},e.exports=o},580:function(e,t,n){"use strict";n.r(t);var o=n(420),r={data:function(){return{siltEmail:"hello@getsilt.com",activeTab:"ios",apiDocUrl:"https://app.swaggerhub.com/apis-docs/Silt/Silt-API",user_status_accordion:{active:!1},pa_webhook:{active:!1},status_response:{id:"...",national_id:{expiration_date:"2023-08-02",nationality:"ESP",country:"ESP",created_at:"2022-12-23T13:26:48.458160+00:00",id:"...",first_name:"MARC",issue_date:null,document_number:"47924637C",sex:"M",last_name:"PEREZ MARTI",birth_date:"1982-09-18",city:"",updated_at:"2022-12-23T13:26:48.470899+00:00",address:"",license_types:null,files:[{created_at:"2022-12-23T12:14:34.577939+00:00",picture_validation_status:"SUCCESS",source:"USER",file_type:"NATIONAL_ID_BACK",file_url:"https://..."},{created_at:"2022-12-23T12:14:19.182439+00:00",picture_validation_status:"SUCCESS",source:"USER",file_type:"NATIONAL_ID_FRONT",file_url:"https://..."}]},sex:"M",city:null,driving_license:null,verifications:[{processing_attempt_id:"...",verification_type:"NATIONAL_ID",verification_date:"2022-12-23T12:14:46.436478+00:00",approval:"AUTO",data:{sex:"M",city:"",name:"MARC",number:"XXXXXXXXC",address:"",country:"ESP",surname:"PEREZ MARTI",province:"",birth_date:"1982-09-18",issue_date:"None",patronimic:null,nationality:"ESP",license_types:null,place_of_birth:null,expiration_date:"2023-08-02"}}],customer_user_id:"Your Internal User Id of your database",company_app_meta:null,missing_verifications:[],passport:null,last_name:"PEREZ MARTI",selfie:{created_at:"2022-12-23T12:14:43.926792+00:00",picture_validation_status:"SUCCESS",source:"USER",file_type:"VERIFICATION_SELFIE",file_url:"https://..."},certificate:{created_at:"2022-12-23 13:26:48",id:"...",emitter:{cif:"B01740703",name:"Silt Digital Id SL"},reference:"CERT/2022-55",file_url:"https://...",requester:{cif:null,name:"Test Company"}},nationality:"ESP",country:"ESP",status:"SUCCESS",birth_date:"1982-09-18",address:null,first_name:"MARC",email:"ee82890f-ec9f-4477-b0ec-b7099de4b929@siltapp.com"}}},methods:{activateTab:function(e){this.activeTab=e}}},_=(n(494),n(20)),c=Object(_.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v("Optional: On demand request status user information")]),e._v(" "),e._m(0),e._v(" "),t("h3",[e._v("1. Store silt_user_id")]),e._v(" "),e._m(1),e._v(" "),t("h3",[e._v("2. Backend: Check user's verification status to Silt")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),t("code",{staticClass:"code-block"},[t("tree-view",{attrs:{data:e.status_response,options:{maxDepth:1,rootObjectKey:"response"}}})],1),e._v(" "),t("p",[e._v("You are not required to store any of these, just what suits you best.")])])}),[function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Use this endpoint if you want to know the status and the verification information of a user at any moment with the "),t("code",[e._v("silt_user_id")]),e._v(".\n  ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Store "),t("code",[e._v("silt_user_id")]),e._v(" to your database so you can easily\n    reference the verification status at any time.\n  ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Use "),t("code",[e._v("company_app_token")]),e._v(" against Silt's backend to the\n    endpoint"),t("br")])},function(){var e=this,t=e._self._c;return t("p",[t("b",[e._v("GET")]),e._v(" "),t("code",[e._v("https://api.siltapp.com/v1/users/"),t("b",[e._v("{silt_user_id}")]),e._v("/status/")])])},function(){var e=this,t=e._self._c;return t("p",[t("b",[e._v("Auth Header")]),e._v(" "),t("br"),e._v("Use a Bearer Header: "),t("br"),t("code",[e._v("Authorization: Bearer "),t("b",[e._v("{access_token}")])]),e._v(" "),t("br"),e._v("or Temporary-Token Header: "),t("br"),t("code",[e._v("X-Company-App-Temporary-Token: "),t("b",[e._v("{company_app_token}")])]),e._v(" "),t("br"),e._v("or X-Company-App-API-Token Header: "),t("br"),t("code",[e._v("X-Company-App-API-Token: "),t("b",[e._v("{company_app_api_token}")])]),e._v(" "),t("br"),t("br"),e._v("Don't forget that you should still use the\n    "),t("code",[e._v("X-Company-App-Id")]),e._v(" Header.\n  ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Check "),t("code",[e._v("status")]),e._v(" to\n    know if a user is verified or not. Use the\n    "),t("code",[e._v("national_id | passport | driving_license")]),e._v(" objects to retreive\n    the data extracted from the documents.\n  ")])},function(){var e=this,t=e._self._c;return t("p",{staticClass:"banner-info"},[e._v("\n   Possible values for status are "),t("code",[e._v("SUCCESS | ERROR | VERIFICATION_ERROR | PENDING | RUNNING | MANUAL_REVIEW")]),e._v(".\n    Keep in mind that if a "),t("b",[e._v("manual verification")]),e._v(" takes place and "),t("code",[e._v("status")]),e._v(" has "),t("code",[e._v("MANUAL_REVIEW")]),e._v(", you will have to check also the "),t("code",[e._v("manual_review_status")]),e._v(" that may have the following possible values: "),t("code",[e._v("SUCCESS | ERROR | PENDING")])])}],!1,null,null,null).exports,l={components:{DocumentationSdk:o.a,DocumentationStatus:c},nuxtI18n:{paths:{en:"/developers",es:"/developers"}},head:function(){this.$nuxtI18nHead();return{title:this.$t("seo_developers_title"),meta:[{hid:"description",name:"description",content:this.$t("seo_developers_metadescription")},{hid:"og:title",name:"og:title",content:this.$t("seo_developers_metadescription")}]}},data:function(){return{siltEmail:"hello@getsilt.com",activeSection:"sdk",activeTab:"ios",apiDocUrl:"https://app.swaggerhub.com/apis-docs/Silt/Silt-API/1.0.1"}},methods:{activateTab:function(e){this.activeTab=e}},created:function(){!0===this.$router.currentRoute.query.minimal&&(this.minimal=!0)}},d=(n(496),Object(_.a)(l,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"developers page-side-nav"},[t("nav",[t("a",{class:{active:"sdk"===e.activeSection},on:{click:function(t){e.activeSection="sdk"}}},[e._v("SDK Integration")]),e._v(" "),t("a",{class:{active:"status"===e.activeSection},on:{click:function(t){e.activeSection="status"}}},[e._v("Get user status info")])]),e._v(" "),"sdk"===e.activeSection?t("DocumentationSdk"):e._e(),e._v(" "),"status"===e.activeSection?t("DocumentationStatus"):e._e()],1)}),[],!1,null,null,null));t.default=d.exports}}]);