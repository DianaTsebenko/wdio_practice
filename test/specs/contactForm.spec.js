describe("Send contact form when user is log out", () => {
  it("should show confirmation message after form submission", async () => {
    await browser.url("/");
    await browser.pause(1000);

    await $('[data-test="nav-contact"]').click();
    await browser.pause(1000);

    await $("#first_name").setValue("John");
    await $("#last_name").setValue("Doe");
    await $("#email").setValue("john@example.com");
    await $("#subject").selectByVisibleText("Return");
    await $("#message").setValue(
      "hello i want to tell you that my payment method is wrong"
    );
    await browser.pause(500);

    await $('[data-test="contact-submit"]').click();
    await browser.pause(1000);

    await expect($(".alert.alert-success")).toHaveText(
      "Thanks for your message! We will contact you shortly."
    );
  });
});
