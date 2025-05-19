describe("View product details", () => {
  it("should show correct product details when clicked", async () => {
    await browser.url("/");
    await browser.pause(1000);

    await $(".card").click();
    await browser.pause(1000);

    await expect($('[data-test="product-description"]')).toBeDisplayed();
  });
});
