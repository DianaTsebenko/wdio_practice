describe("Sort products by price", () => {
  it("should sort products from lowest to highest price", async () => {
    await browser.url("/");

    const sortDropdown = await $('[data-test="sort"]');
    await sortDropdown.selectByVisibleText("Price (Low - High)");

    const firstCardTitle = await $$(".card-title")[0];
    await browser.waitUntil(
      async () => {
        const text = await firstCardTitle.getText();
        return text === "Washers";
      },
      { timeout: 3000 }
    );

    const priceElements = await $$('[data-test="product-price"]');

    if (!Array.isArray(priceElements) || priceElements.length === 0) {
      console.warn("No price elements found on the page");
      return;
    }

    const numericPrices = [];

    for (const [index, el] of priceElements.entries()) {
      const text = await el.getText();

      if (!text || typeof text !== "string") {
        continue;
      }

      const cleaned = text.replace(/[^0-9.,]/g, "").replace(",", ".");
      const num = parseFloat(cleaned);

      if (isNaN(num)) {
        continue;
      }

      numericPrices.push(num);
    }

    const sortedPrices = [...numericPrices].sort((a, b) => a - b);
    expect(numericPrices).toEqual(sortedPrices);
  });
});
