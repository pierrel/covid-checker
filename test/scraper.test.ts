import { Scraper } from "../lib/scraper";

test('process', async () => {
    const s = new Scraper("https://kentcdodds.com/blog/using-fetch-with-type-script");
    const b = await s.process();
    expect(b).toMatch("ran into a few little hurdles");
});

test('has', async () => {
  const s = new Scraper("https://kentcdodds.com/blog/using-fetch-with-type-script");
  const b = await s.has("ran into a few little hurdles");
  expect(b).toBe(true);

  const c = await s.has("ram into a few little hurdles");
  expect(c).toBe(false);
});