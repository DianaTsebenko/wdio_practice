describe("Filter products by category", () => {
  it("should show seven types of screwdriver", async () => {
    await browser.url("/");

    await $('//label[contains(text(), "Screwdriver")]/input').click();
    await browser.waitUntil(
      async () => {
        const title = await $(".card-title").getText();
        return title === "Phillips Screwdriver";
      },
      {
        timeout: 3000,
      }
    );
    const products = await $$(".card");
    expect(products.length).toBe(2);
  });
});
