import cheerio from "cheerio";
import axios from "axios";

export async function GetResultsFromFanatical(query) {
    try {
        const response = await axios.get(
            "https://www.fanatical.com/en/search?search=" + query,
            {
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
                },
            }
        );

        const $ = cheerio.load(response.data);
        console.log(response.data)
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const results = [];
        $("div.HitCardContainer.col-6.col-sm-4.col-md-6.col-lg-4").each((index, element) => {
            const title = $(element)
                .find(".hit-card-game-name a")
                .text()
                .trim();
            // Since price is not available in the provided HTML, I'm leaving it empty. 
            // You can add the appropriate selector once you know how it's structured in the HTML.
            const price = 'compraloxfa';
            results.push({
                index: index,
                title: title,
                price: price,
            });
        });
        return results;
    } catch (error) {
        console.error("Error on axios call:", error);
        return [];
    }
}
