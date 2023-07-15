import cheerio from "cheerio";
import axios from "axios";

export async function GetResultsFromCdKeys(query) {
    try {
        const response = await axios.get(
            "https://www.cdkeys.com/catalogsearch/result/?q=" + query,
            {
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
                },
            }
        );

        const $ = cheerio.load(response.data);

        const results = [];
        $(".result-wrapper").each((index, element) => {
            const title = $(element)
                .find("h3.result-title.text-ellipsis a")
                .text()
                .trim();
            const priceSale = $(element)
                .find(".price-wrapper .after_special")
                .text()
                .trim();
            results.push({
                index: index,
                title: title,
                price: priceSale,
            });
        });
        return results;
    } catch (error) {
        console.error("Error during parsing:", error);
        return [];
    }
}
