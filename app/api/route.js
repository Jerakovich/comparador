import { GetResultsFromYuplay } from "./Yuplay.jsx";
import { GetResultsFromGamesPlanet } from "./GamesPlanet.jsx";
import { Blender} from "./Blender.js"
import { NextResponse } from 'next/server'


export async function POST(req, res) {
    const data = await req.json();
    console.log(req);
    console.log(data);
    console.log('Objeto res:', res); // Verificar el objeto res
    console.log("Scraping...");

    try {
        const results1 = await GetResultsFromYuplay(data.search);
        const results2 = await GetResultsFromGamesPlanet(data.search);

        //console.log("Resultados de Yuplay: \n", results1);
        //console.log("Resultados de Games Planet: \n", results2);

        const final = Blender(results1, results2);
        console.log(final);
        console.log('final');
        
        return NextResponse.json(final)

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error'})
        // res.status(500).json({ error: 'Hubo un problema en el servidor' });
    }
}
