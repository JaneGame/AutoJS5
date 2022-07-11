module.exports={ 
    
    numberPlace: async function(page){
        
        await page.waitForSelector(".buying-scheme__chair");
        const button = await page.$$eval("div div span", (elements) => elements.map(element => element.getAttribute('class')));
        for (let i=0; i<button.length; i++){
            if (button[i] != "buying-scheme__chair buying-scheme__chair_standart buying-scheme__chair_taken"){
                return i;
            }
        }
    } 

    
    }