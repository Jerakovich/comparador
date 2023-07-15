export function Blender(yuplay, planet) {
    var n = yuplay.length;
    var m = planet.length;
    var repeated = false
    const result = [];
    if (n >= m) {
        //si el json de yuplay es mas grande
        for (let i = 0; i < n; i++) {
            repeated = false
            for (let j = 0; j < m && repeated == false; j++) {
                if ((yuplay[i].title == planet[j].title)) {
                    //console.log("repetido:" ,yuplay[i].title, planet[j].title);
                    result.push({
                        index: yuplay[i].index,
                        image: yuplay[i].image,
                        url1: yuplay[i].url,
                        url2: planet[j].url,
                        title: yuplay[i].title,
                        price1: yuplay[i].price,
                        price2: planet[j].price,
                        repeated: "yes",
                    });
                    repeated = true
                }
            }
            if(repeated == false){
                result.push({
                    index: yuplay[i].index,
                    image: yuplay[i].image,
                    url1: yuplay[i].url,
                    url2: yuplay[i].url,
                    title: yuplay[i].title,
                    price1: yuplay[i].price,
                    price2: yuplay[i].price,
                    repeated: "no",
                });
            }
        }
    }
    else {
        for (let i = 0; i < m; i++) {
            repeated = false
            for (let j = 0; j < n && repeated == false; j++) {
                if ((yuplay[j].title == planet[i].title)) {
                    result.push({
                        index: yuplay[i].index,
                        image: yuplay[i].image,
                        url1: yuplay[i].url,
                        url2: planet[j].url,
                        title: yuplay[i].title,
                        price1: yuplay[i].price,
                        price2: planet[j].price,
                        repeated: "yes",
                    });
                    repeated = true
                }
            }
            if(repeated == false){
                result.push({
                    index: yuplay[i].index,
                    image: yuplay[i].image,
                    url1: yuplay[i].url,
                    url2: yuplay[i].url,
                    title: yuplay[i].title,
                    price1: yuplay[i].price,
                    price2: yuplay[i].price,
                    repeated: "no",
                });
            }
        }
    }
    return result;
}
