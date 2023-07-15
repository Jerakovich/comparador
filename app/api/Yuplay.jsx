import cheerio from "cheerio";
import axios from "axios";

export async function GetResultsFromYuplay(query) {
    try {
        const response = await axios.get(
            "https://www.yuplay.com/products/?search=" + query,
            {
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
                },
            }
        );

        const $ = cheerio.load(response.data);
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const results = [];
        $("article.catalog-item").each((index, element) => {
            const img = $(element)
                .find("img.catalog-item-image")
                .attr("src");
            const url = $(element)
                .find("a.catalog-image-ratio-container")
                .attr("href");
            const title = $(element)
                .find("div.catalog-item-name a")
                .text()
                .trim();
            const priceSale = $(element)
                .find(".catalog-item-sale-price")
                .text()
                .trim();
            results.push({
                index: index,
                image: img,
                url: url,
                title: title,
                price: priceSale,
            });
        });
        return results;
    } catch (error) {
        console.error("Error on axios call:", error);
        return [];
    }
}
