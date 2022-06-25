module.exports={ 
    
    numberPlace: async function(length){
        
        const button = await page.$$eval("div div span", (elements) => elements.map(element => element.getAttribute('class')));
        for (let i=0; i<length; i++){
            if (button[i] != "buying-scheme__chair buying-scheme__chair_standart buying-scheme__chair_selected"){
                return i;
            }
        }
    } 

    
    }