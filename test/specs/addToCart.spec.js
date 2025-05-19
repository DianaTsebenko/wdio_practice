describe("Add product to cart", () => {
  it("should add product to cart and update counter", async () => {
    await browser.url("/");
    await browser.pause(1000);

    await $(".card").click();
    await browser.pause(1000);

    await $("#btn-add-to-cart").click();
    await browser.pause(5000);

    await expect($(".toast-message")).toHaveText(
      "Product added to shopping cart."
    );
    await $(".toast-message").click();
    await browser.pause(1000);

    await expect($('[data-test="cart-quantity"]')).toHaveText("1");
  });
});
