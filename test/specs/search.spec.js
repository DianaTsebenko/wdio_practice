describe("Search for a product", () => {
  it("should return two types of saw", async () => {
    await browser.url("/");

    await $("#search-query").setValue("Saw");
    await $('[data-test="search-submit"]').click();

    await browser.waitUntil(
      async () => {
        const title = await $(".card-title").getText();
        return title === "Wood Saw";
      },
      {
        timeout: 3000,
      }
    );

    const results = await $$(".card");
    expect(results.length).toBe(2);
  });
});
