describe("Checkout Process", () => {
  it("should complete the checkout and show payment success message", async () => {
    await browser.url("/");
    await browser.pause(1000);

    await $(".card").click();
    await browser.pause(1000);

    await $("#btn-add-to-cart").click();
    await browser.pause(1000);
    await $(".toast-message").click();
    await browser.pause(1000);

    await $('[data-test="nav-cart"]').click();
    await browser.pause(1000);

    await $('[data-test="proceed-1"]').click();
    await browser.pause(500);

    await $("#email").setValue("testuser@example.com");
    await $("#password").setValue("Password123%pas");
    await $('[data-test="login-submit"]').click();
    await browser.pause(1000);

    await $('[data-test="proceed-2"]').click();
    await browser.pause(500);

    await $("#street").setValue("1234 Main St");
    await $("#city").setValue("lviv");
    await $("#state").setValue("lviv");
    await $("#country").setValue("ukraine");
    await $("#postal_code").setValue("12345");
    await browser.pause(500);

    await $('[data-test="proceed-3"]').click();
    await browser.pause(500);

    await $("#payment-method").selectByVisibleText("Cash on Delivery");
    await $('[data-test="finish"]').click();
    await browser.pause(1000);

    await expect($('[data-test="payment-success-message"]')).toHaveText(
      "Payment was successful"
    );
  });
});
