describe("View product details", () => {
  it("should show correct product details when clicked", async () => {
    await browser.url("/");

    await $(".card").scrollIntoView();
    await $(".card").waitForClickable({ timeout: 3000 });
    await $(".card").click();

    await $('[data-test="product-description"]').waitForDisplayed({
      timeout: 5000,
    });
    await expect($('[data-test="product-description"]')).toBeDisplayed();
  });
});
