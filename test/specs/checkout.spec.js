const { browser } = require("@wdio/globals");

describe("Checkout Process", () => {
  it("should complete the checkout and show payment success message", async () => {
    const password = "Password123%pas";
    let email = "testuser2@example.com";

    async function runCheckoutFlow(emailToUse, passwordToUse) {
      await browser.url("/");

      await $(".card").scrollIntoView();
      await $(".card").waitForClickable({ timeout: 3000 });
      await $(".card").click();
      await $("#btn-add-to-cart").waitForDisplayed({ timeout: 5000 });
      await $("#btn-add-to-cart").click();
      await $(".toast-message").click();
      await $('[data-test="nav-cart"]').click();
      await $('[data-test="proceed-1"]').click();

      await $("#email").setValue(emailToUse);
      await $("#password").setValue(passwordToUse);
      await $('[data-test="login-submit"]').click();

      try {
        await $('[data-test="proceed-2"]').waitForDisplayed({ timeout: 2000 });
        return true;
      } catch (err) {
        return false;
      }
    }

    let loginSuccess = await runCheckoutFlow(email, password);

    if (!loginSuccess) {
      await $('[data-test="register-link"]').click();

      await $("#first_name").setValue("test");
      await $("#last_name").setValue("user");

      await $("#dob").click();
      await browser.keys("12.09.2000");

      await $("#street").setValue("1234 Main St");
      await $("#postal_code").setValue("12345");
      await $("#city").setValue("lviv");
      await $("#state").setValue("lviv");
      await $("#country").selectByVisibleText("Aruba");

      await $("#phone").setValue("0972090743");
      await $("#email").setValue("testuser2@example.com");
      await $("#password").setValue("Password123%pas");

      await $('[data-test="register-submit"]').click();

      await runCheckoutFlow("testuser2@example.com", "Password123%pas");
    }

    await $('[data-test="proceed-2"]').click();

    await $("#street").setValue("1234 Main St");
    await $("#city").setValue("lviv");
    await $("#state").setValue("lviv");
    await $("#country").setValue("ukraine");
    await $("#postal_code").setValue("12345");

    await $('[data-test="proceed-3"]').click();

    await $("#payment-method").selectByVisibleText("Cash on Delivery");
    await $('[data-test="finish"]').click();

    await expect($('[data-test="payment-success-message"]')).toHaveText(
      "Payment was successful"
    );
  });
});
