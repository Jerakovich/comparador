import cheerio from "cheerio";
import axios from "axios";

export async function POST(req, res) {
    const data = await req.json();
    console.log(data);
    console.log("Submitting...");

    console.log("Scraping...");
    const response = await axios.get(
        "https://www.yuplay.com/products/?search=" + data.search
    );

    const $ = cheerio.load(response.data);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const results = [];
    $("article.catalog-item").each((index, element) => {
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
            title: title,
            price: priceSale,
        });
    });
    console.log(results);
}

export async function GET(req, res) {
    res.status(200).json({ message: "GET request received" });
}
