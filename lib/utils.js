module.exports={ 
    
    number: async function(length){
        try{let number;
        for (i=0; i<length; i++){
            number = i;
            const button = await page.$eval("button", element => element.getAttribute('disabled'));
            if (button == null){
                return number;
            }
        }}catch (error) {
            throw new Error(`tickets undefined`)
        }
    } 

    
    }