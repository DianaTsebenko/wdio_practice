describe("Filter products by category", () => {
  it("should show seven types of hammer", async () => {
    await browser.url("/");
    await browser.pause(1000);

    await $('//label[contains(text(), "Hammer")]/input').click();
    await browser.pause(1000);

    const products = await $$(".card");
    expect(products.length).toBe(7);
  });
});
