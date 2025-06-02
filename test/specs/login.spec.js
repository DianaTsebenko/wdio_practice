describe("Successful Sign-In", () => {
  it("should log in and redirect to My profile page", async () => {
    const email = "testuser3@example.com";
    const password = "Password123%pas";

    await browser.url("/auth/login");

    await $("#email").setValue(email);
    await $("#password").setValue(password);
    await $('[data-test="login-submit"]').click();

    const loginErrorAppeared = await $(
      '[data-test="login-error"]'
    ).isDisplayed();

    if (loginErrorAppeared) {
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
      await $("#email").setValue(email);
      await $("#password").setValue(password);

      await $('[data-test="register-submit"]').click();

      await browser.url("/auth/login");
      await $("#email").setValue(email);
      await $("#password").setValue(password);
      await $('[data-test="login-submit"]').click();
    }

    await browser.waitUntil(
      async () =>
        (await browser.getUrl()) ===
        "https://practicesoftwaretesting.com/account",
      {
        timeout: 5000,
        timeoutMsg: "Не вдалося перейти на сторінку профілю",
      }
    );

    await expect(browser).toHaveUrl(
      "https://practicesoftwaretesting.com/account"
    );
  });
});
