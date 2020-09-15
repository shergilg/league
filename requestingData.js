//Using puppeteer to get information from op.gg


const puppeteer = require('puppeteer')

async function scrapeKDA(url)
{
    //Open the headless browser
    const browser = await puppeteer.launch()
    //open new page
    const page = await browser.newPage()
    //enter url in page
    await page.goto(url)

    var kills = document.querySelectorAll('span.Kill')
    var deaths = document.querySelectorAll('span.Death')
    var assists = document.querySelectorAll('span.Assist')
    var arr = []
    for( var i = 0; i < 5; i++){
        kills: kills[i].innerText.trim()
        deaths: deaths[i].innerText.trim()
        assists: assists[i].innerText.trim()
    }

    //select item by xpath in an array(destructuring)
    /*try{
        //Get kills for the latest game
        const [el] = await page.$x('//*[@id="SummonerLayoutContent"]/div[2]/div[2]/div/div[2]/div[3]/div[1]/div/div[1]/div[3]/div[1]/span[1]')
        const txt = el.getProperty('textContent')
        const rawTxt = (await txt).jsonValue()

        
*/
        //Get deaths for the latest game

        //Get assists for the latest game

        //console.log(rawTxt)
        
    //}   
    /*catch(err){
        try{
            const [el2] = await page.$x('/html/body/div[2]/div[3]/div/div[1]/h2')
            const txt2 = el2.getProperty('textContent')
            const rawTxt2 = (await txt2).jsonValue()
    
            console.log(rawTxt2)
        }
        catch{
            console.log("SOMETHING WENT WRONG!!!")
        }
    }*/

    browser.close()
}

scrapeKDA('https://na.op.gg/summoner/userName=NanoBAbyDva')


