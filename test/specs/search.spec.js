describe("Search for a product", () => {
  it("should return four types of pliers", async () => {
    await browser.url("/");
    await browser.pause(1000);

    await $("#search-query").setValue("Pliers");
    await $('[data-test="search-submit"]').click();
    await browser.pause(1000);

    const results = await $$(".card");
    await browser.pause(500);

    expect(results.length).toBe(4);
  });
});
