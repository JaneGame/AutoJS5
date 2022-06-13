module.exports={ 
    
    number: async function(length){
        try{let number;
        for (i=0; i<length; i++){
            number = i;
            const button = await page.$$eval("div div span", element => element[number].getAttribute('class'));
            if (button == "buying-scheme__chair buying-scheme__chair_standart buying-scheme__chair_selected"){
                return number;
            }
        }}catch (error) {
            throw new Error(`tickets undefined`)
        }
    } 

    
    }