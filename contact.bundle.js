(()=>{"use strict";window.onload=function(){var e=function(){var e=localStorage.getItem("user"),o=localStorage.getItem("authToken");if(!e||!o)return localStorage.removeItem("user"),localStorage.removeItem("authToken"),null;try{return JSON.parse(e)}catch(e){return localStorage.removeItem("user"),localStorage.removeItem("authToken"),null}}();e&&$("#Email").val(e.displayEmail),$("#contact-btn").on("click",(function(e){e.preventDefault(),console.log("submit");var o={};$("#email-form").serializeArray().forEach((function(e){var a=e.name,t=e.value;o[a]=t})),console.log("formdata=%O",o),$(".w-form-fail").css("display","none"),$.ajax({method:"POST",url:"".concat(apiHost,"/api/v1/contactus-messages"),data:JSON.stringify({name:o.Name,email:o.Email,topic:o["Topic-Options"],message:o.Message}),dataType:"json",contentType:"application/json",error:function(e){console.log("failure response: %O",e);var o=(e.responseJSON||{}).code;console.log("failure code="+o),$(".w-form-fail > div").text("Something went wrong while submitting the form. code=".concat(o||e.status)),$(".w-form-fail").css("display","block")}}).done((function(e){$(".w-form-done").css("display","block")}))}))}})();