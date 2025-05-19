describe("Successful Sign-In", () => {
  it("should log in and redirect to My profile page", async () => {
    await browser.url("/auth/login");
    await browser.pause(1000);

    await $("#email").setValue("testuser@example.com");
    await $("#password").setValue("Password123%pas");
    await browser.pause(500);

    await $('[data-test="login-submit"]').click();
    await browser.pause(1000);

    await expect(browser).toHaveUrl(
      "https://practicesoftwaretesting.com/account"
    );
  });
});
