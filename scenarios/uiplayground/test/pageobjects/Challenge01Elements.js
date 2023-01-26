import Page from "../pageobjects/page.js"

class Challenge1 extends Page{

    //Progressbar Locators
    get startBtnLocator(){
        return $('#startButton');
    }

    get stopBtnLocator(){
        return $('#stopButton');
    }

    get progressbarLocator(){
        return $('#progressBar');
    }

    //AJAX Page Locators
    get ajaxBtnLocator(){
        return $('#ajaxButton');
    }

    get ajaxDataLoaded() {
        return $$('#content p');
    }

    get ajaxSpinnerLocator() {
        return $('.fa-spinner');
    }

    //Hidden Page Locators
    get hideBtnLocator() {
        return $('#hideButton');
    }

    async percentageAverage(){
        let progressbarPercentage = await this.progressbarLocator.waitUntil(async() => (await this.progressbarLocator.getText() >= "75%" && await this.progressbarLocator.getText() <= "80%"),
        {
            timeout: 50000,
            timeoutMsg: 'Filling the progressbar is taking longer than expected'
        });
        return progressbarPercentage;
    }

    // Shadow Locators
    get guidBtnLocator(){
        return $('guid-generator').shadow$('#buttonGenerate');
    }

    get guidValueField(){
        return $('guid-generator').shadow$('#editField');
    }

    get guidBtnCopyLocator(){
        return $('guid-generator').shadow$('#buttonCopy');
    }

    //Shadows Challenge | Methods
    async btnCopyGuidGenerated() {
        await this.guidBtnCopyLocator.waitForClickable();
        await this.guidBtnCopyLocator.click();
    }

    async generateGuid() {
        await this.guidBtnLocator.waitForClickable();
        await this.guidBtnLocator.click();
    }

    async getGuidValue() {
        await this.guidValueField.waitForDisplayed();
        let guidGenerated = await (await this.guidValueField).getValue();
        return guidGenerated;
    }


/*     async clickAjaxRequest(quantityClicks){
        await this.ajaxBtnLocator.waitForClickable()
        for(let i = 0; i < quantityClicks; i++){
            await this.ajaxBtnLocator.click()
        }
    } */

    open(pageToTest){
        return super.open(pageToTest)
    }

}
const challenge1Elements = new Challenge1();
export default challenge1Elements;