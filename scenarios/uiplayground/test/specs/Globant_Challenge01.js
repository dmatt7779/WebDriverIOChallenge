import challenge1Elements from '../pageobjects/Challenge01Elements.js'

describe('Challenge 01', async() => {

     it('Progressbar Test', async() =>{
        await challenge1Elements.open('progressbar');
        await challenge1Elements.startBtnLocator.click();
        let progressbarPercentage = challenge1Elements.percentageAverage();
        console.log(await progressbarPercentage)
        await challenge1Elements.stopBtnLocator.click();
        expect(await progressbarPercentage).toEqual(true);
    }) 

/*     it('Ajax Test', async()=>{
        await challenge1Elements.open('ajax');
        await challenge1Elements.ajaxBtnLocator.click();
        await (await challenge1Elements.ajaxSpinnerLocator).waitForDisplayed({timeout: 30000, reverse:true});
        await challenge1Elements.ajaxBtnLocator.click();
        await (await challenge1Elements.ajaxSpinnerLocator).waitForDisplayed({timeout: 30000, reverse:true});
        expect(await challenge1Elements.ajaxDataLoaded.length).toEqual(1);
    })

    it('Hidden/unhidden functionalities', async()=>{
        await challenge1Elements.open('visibility');
        await challenge1Elements.hideBtnLocator.waitForDisplayed()
        await challenge1Elements.hideBtnLocator.click()
        await challenge1Elements.hideBtnLocator.waitForDisplayed({reverse:true});
    })

    it('shadowdom test',async()=>{
        await challenge1Elements.open('shadowdom');
        await challenge1Elements.generateGuid();
        const guidValue = await challenge1Elements.getGuidValue();
        await challenge1Elements.btnCopyGuidGenerated();
        await (await challenge1Elements.guidValueField).clearValue();
        await challenge1Elements.guidValueField.click();
        await browser.keys(['Control', 'v']);
        const guidValueCopied = await challenge1Elements.getGuidValue();
        expect(guidValue).toEqual(guidValueCopied);

    }) */

})