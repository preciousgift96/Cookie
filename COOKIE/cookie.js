// =================================
// GET HTML ELEMENTS
// =================================
const cookieBanner =
  document.getElementById("cookie-banner");
const acceptButton =
  document.getElementById("accept-cookies");
// =================================
// CHECK IF USER HAS ALREADY
// ACCEPTED THE COOKIES
// =================================
const cookiesAccepted =
  localStorage.getItem("cookiesAccepted");
// =================================
// HIDE BANNER IF CONSENT
// ALREADY EXISTS
// =================================
if (cookiesAccepted === "true") {
  cookieBanner.classList.add("hidden");
}
// =================================
// ACCEPT COOKIE BUTTON
// =================================
acceptButton.addEventListener(
  "click",
  function () {
    // ---------------------------------
    // Save user's consent
    // ---------------------------------
    localStorage.setItem(
      "cookiesAccepted",
      "true"
    );
    // ---------------------------------
    // Hide the cookie banner
    // ---------------------------------
    cookieBanner.classList.add(
      "hidden"
    );
  }
);