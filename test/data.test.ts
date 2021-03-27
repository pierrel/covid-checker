import { asyncFilter } from "../lib/data";

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

test('process', async () => {
    const pred = async (word: string): Promise<boolean> => {
        await delay(10);
        return word == "one";
    }
    const words = ["one", "two", "three"];

    expect(await asyncFilter(words, pred)).toEqual(["one"]);
});
