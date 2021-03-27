import { AzureFunction, Context } from "@azure/functions"
import { Site } from "../lib/site"
import { asyncFilter } from "../lib/data"

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    const timeStamp = new Date().toISOString();

    const sites = [
        new Site("Publix", 
        "https://www.publix.com/covid-vaccine/florida",
        "All available COVID-19 vaccine appointments have been claimed"),
        new Site("Jackson",
        "https://jacksonhealth.org/keeping-you-safe/",
        "All available COVID-19 vaccine appointments have been filled")
    ]

    const sitesWithVaccines = await asyncFilter(sites, async (s) => { return await s.hasVaccines() });

    if (sitesWithVaccines.length > 0) {
        const places = sitesWithVaccines.map(s => `${s.name} (${s.url})`);
        console.log(`Vaccines available at ${places.join(', and ')}! (time: ${timeStamp})`);
    } else {
        console.log('No vaccines yet.');
    }
};

export default timerTrigger;
