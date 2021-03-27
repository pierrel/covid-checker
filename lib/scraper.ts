const fetch =  require('node-fetch');

export class Scraper {
    constructor(private url: string) {}

    public async process():Promise<string> {
        const resp = await fetch(this.url);
        const doc = resp.text();
        return doc;
    }

    public async has(text: string): Promise<boolean> {
        const doc = await this.process();

        return doc.match(text) != undefined;
    }
}
