module.exports={

    chooseSession: async function(page, selector1, numberSession){
        try{
            const session = await page.$$(selector1);
            await session[numberSession].click();
        }catch (error) {
            throw new Error(`Selector not found: ${selector1} `)
        }
    },

chooseTicket: async function(page, selector2, number){

        await page.waitForSelector('h2');
        const places = await this.page.$$(selector2);
        await console.log(number, places.length);
        await places[number].click();

},


clickButton: async function(page, selector){
    try{
        const button = await page.$(selector);
        await button.click();
    }catch (error) {
        throw new Error(`Button not found: ${selector} `)
    }
}

}