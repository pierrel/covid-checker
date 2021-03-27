import { Scraper } from './scraper'

export class Site {
    private scraper: Scraper;

    constructor(public name: string, public url: string, public notAvailableText: string) {
        this.scraper = new Scraper(url);
    }
    
    public async hasVaccines():Promise<boolean> {
        return !this.scraper.has(this.notAvailableText);
    }
}