import { AzureFunction, Context } from "@azure/functions"
import { Scraper } from "../lib/scraper"

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    const timeStamp = new Date().toISOString();
    
    if (myTimer.isPastDue)
    {
        context.log('Timer function is running late!');
    }
    context.log('Timer trigger function ran!', timeStamp);

    const publix_url = "https://www.publix.com/covid-vaccine/florida";
    const publix = new Scraper(publix_url);
    if (publix.has("All available COVID-19 vaccine appointments have been claimed")) {
        console.log("Still no vaccines");
    } else {
        console.log(`Vaccines at Publix! See ${publix_url}`);
    }
};

export default timerTrigger;
