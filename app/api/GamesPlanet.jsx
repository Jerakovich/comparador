import cheerio from "cheerio";
import axios from "axios";

export async function GetResultsFromGamesPlanet(query) {
    try {
        const response = await axios.get(
            "https://us.gamesplanet.com/search?query=" + query,
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
        $(
            "div.row.no-gutters.game_list.game_list_small.prod_class_300.pt-2"
        ).each((index, element) => {
            const image = $(element)
                .find("img.border.border-secondary")
                .attr("src");
            const url = $(element)
                .find("stretched-link responsive-img img-280")
                .attr("href");
            const title = $(element)
                .find("h4 a")
                .text()
                .trim();
            const priceSale = $(element)
                .find(".price_current")
                .text()
                .trim();
            results.push({
                index: index,
                image: image,
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
