// const express = require('express');
// const app = express();

// const axios = require('axios');
// const cheerio = require('cheerio');

// const port = process.env.port ?? 3000
// const url = 'https://es.wikipedia.org/wiki/Categor%C3%ADa:M%C3%BAsicos_de_rap'
// const urlBase = `https://es.wikipedia.org`;

// app.get ('/', (req, res)=>{
//     axios.get(url).then((response)=>{
//         if(response.status ===200){
        
//         const html = response.data
//         const $ = cheerio.load(html);

//         const pageTitle = $('title').text();
//         const links = [];
//         const imgs = [];
//         const texts = [];
        
//         $('a').each((index, element)=>{
//             const link = $(element).attr('href');
//             links.push(link)
//         })

//         $('img').each((index, element)=>{
//             const img = $(element).attr('src');
//             imgs.push(img)
//         })

//         $('p').each((index, element)=>{
//             const text = $(element).text();
//             texts.push(text)
//         })

//         res.send(`
//             <h1>${pageTitle}</h1>
//             <h2>Links</h2>
//             <ul>
//                 ${links.map(link => `<li><a href="${urlBase}${link}"> ${urlBase}${link} </a></li>`).join(``)}
//             </ul>
//             <h2>Images</h2>
//                 ${imgs.map(img => `<li><img src="${urlBase}${img}">${img}></li>`).join(``)}
//                 ${texts.map(text => `<p>${text}</p>`).join(``)}
//             `)
//         }
//     })
// })

// app.listen(port,()=>{
//     console.log(`Server is running http://localhost:${port}`)
// } )
// const express = require('express');
// const app = express();
// const axios = require('axios');
// const cheerio = require('cheerio');

// const url = 'https://es.wikipedia.org/wiki/Categor%C3%ADa:M%C3%BAsicos_de_rap';
// const principalURL = 'https://es.wikipedia.org';
// const port = process.env.PORT || 3000;

// app.get('/', async (req, res) => {
//     try {
//         const response = await axios.get(url);
//         if (response.status === 200) {
//             const html = response.data;
//             const $ = cheerio.load(html);

//             const links = [];
//             $('#mw-pages a').each((index, element) => {
//                 const link = $(element).attr('href');
//                 links.push(link);
//             });

//             const scraping = async (urlBase, linkArray) => {
//                 const dataBase = [];
//                 const axiosPromises = linkArray.map(element => axios.get(urlBase + element));
//                 const responses = await Promise.all(axiosPromises);
//                 responses.map(element => {
//                     const obj = {};
//                     const paragraphs = [];
//                     const images = [];
//                     const html = element.data;
//                     const $ = cheerio.load(html);
//                     $('p').each((index, element) => {
//                         const paragraph = $(element).text();
//                         paragraphs.push(paragraph);
//                     });

//                     $('img').each((index, element) => {
//                         const image = $(element).attr('src');
//                         images.push(image);
//                     });

//                     obj.title = $('h1').text();
//                     obj.paragraphs = paragraphs;
//                     obj.images = images;
//                     dataBase.push(obj);
//                 });
//                 return dataBase;
//             };

//             const info = await scraping(principalURL, links);
            
//             res.send(`
//                 <p>Links</p>
//                 <ul>
//                     ${links.map(data => `<li>${data}</li>`).join('')}
//                 </ul>
//                 <p>Singers</p>
//                 <ul>
//                     ${info.map(data => `
//                         <li>
//                             <h2>${data.title}</h2>
//                             <p>Images: ${data.images.map(img => `<p>${img}</p>`).join('')}</p>
//                             <p>Texts: ${data.paragraphs.map(text => `<p>${text}</p>`).join('')}</p>
//                         </li>`
//                     )}
//                 </ul>
//             `);
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running http://localhost:${port}`);
// });

const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://es.wikipedia.org/wiki/Categor%C3%ADa:M%C3%BAsicos_de_rap';
const principalURL = 'https://es.wikipedia.org';
const port = process.env.PORT || 3000;

const scraping = async (urlBase, linkArray) => {
    const dataBase = [];
    const axiosPromises = linkArray.map(element => axios.get(urlBase + element));
    const responses = await Promise.all(axiosPromises);
    responses.forEach(response => {
        const obj = {};
        const paragraphs = [];
        const images = [];
        const html = response.data;
        const $ = cheerio.load(html);

        $('p').each((index, element) => {
            const paragraph = $(element).text();
            paragraphs.push(paragraph);
        });

        $('img').each((index, element) => {
            const image = $(element).attr('src');
            images.push(image);
        });

        obj.title = $('h1').text();
        obj.paragraphs = paragraphs;
        obj.images = images;
        dataBase.push(obj);
    });
    return dataBase;
};

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);

            const links = [];
            $('#mw-pages a').each((index, element) => {
                const link = $(element).attr('href');
                links.push(link);
            });

            const info = await scraping(principalURL, links);
            
            res.send(`
                <p>Links</p>
                <ul>
                    ${links.map(data => `<li>${data}</li>`).join('')}
                </ul>
                <p>Singers</p>
                <ul>
                    ${info.map(data => `
                        <li>
                            <h2>${data.title}</h2>
                            <p>Images: ${data.images.join(', ')}</p>
                            <p>Texts: ${data.paragraphs.join(', ')}</p>
                        </li>`
                    ).join('')}
                </ul>
            `);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});
