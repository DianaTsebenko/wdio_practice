describe("Add product to cart", () => {
  it("should add product to cart and update counter", async () => {
    await browser.url("/");

    await $(".card").scrollIntoView();
    await $(".card").waitForClickable({ timeout: 3000 });
    await $(".card").click();

    await $('[data-test="add-to-cart"]').waitForClickable({ timeout: 3000 });
    await $('[data-test="add-to-cart"]').click();

    await expect($(".toast-message")).toHaveText(
      "Product added to shopping cart."
    );
    await $(".toast-message").click();

    await expect($('[data-test="cart-quantity"]')).toHaveText("1");
  });
});
