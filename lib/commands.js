module.exports={

chooseTicket: async function(page, selector1, selector2, number){
    try{
        const session = await page.$$(selector1);
        await session[4].click();
        await page.waitForSelector('h2');
        const places = await page.$$(selector2);
        await places[number].click();
    }catch (error) {
        throw new Error(`Selector not found: ${selector1} or ${selector2} `)
    }
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