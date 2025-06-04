describe("Send contact form when user is log out", () => {
  it("should show confirmation message after form submission", async () => {
    await browser.url("/");

    await $('[data-test="nav-contact"]').click();

    await $("#first_name").setValue("John");
    await $("#last_name").setValue("Doe");
    await $("#email").setValue("john@example.com");
    await $("#subject").selectByVisibleText("Return");
    await $("#message").setValue(
      "hello i want to tell you that my payment method is wrong"
    );

    await $('[data-test="contact-submit"]').click();

    await expect($(".alert.alert-success")).toHaveText(
      "Thanks for your message! We will contact you shortly."
    );
  });
});
