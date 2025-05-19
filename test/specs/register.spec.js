describe("Successful Sign-Up", () => {
  it("should create an account and redirect to Login page", async () => {
    await browser.url("/auth/register");
    await browser.pause(1000);

    const uniqueEmail = `testuser${Date.now()}@example.com`;

    await $("#first_name").setValue("test");
    await $("#last_name").setValue("user");
    await browser.pause(500);

    await $("#dob").click();
    await browser.keys("12.09.2000");
    await browser.pause(500);

    await $("#street").setValue("1234 Main St");
    await $("#postal_code").setValue("12345");
    await $("#city").setValue("lviv");
    await $("#state").setValue("lviv");
    await $("#country").selectByVisibleText("Aruba");
    await browser.pause(500);

    await $("#phone").setValue("0972090743");
    await $("#email").setValue(uniqueEmail);
    await $("#password").setValue("Password123%pas31");
    await browser.pause(1000);

    await $('[data-test="register-submit"]').click();
    await browser.pause(6000);

    await expect(browser).toHaveUrl(
      "https://practicesoftwaretesting.com/auth/login"
    );
  });
});
