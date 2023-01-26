import pageElements from '../pageobjects/elementsDynamicTable.js'

describe('GlobantTests', async() => {
   
   it('Validate => Table is visible ', async () => {
        await pageElements.open();
        await expect(pageElements.table).toBeDisplayed();
    })

    it('Validate Column Headers', async() => {
        const originalColumnValues = ["CPU", "Disk", "Memory", "Name", "Network"];
        await pageElements.open();
        let sortedheaderNames = await pageElements.sortLocatorTexts(await pageElements.columnHeaders);
        await expect(originalColumnValues).toEqual(sortedheaderNames);
    })

    it('Validate Row\'s Browser Names', async() => {
        const originalBrowserNames = ["Chrome", "Firefox", "Internet Explorer", "System"];
        await pageElements.open();
        let sortedBrowserNames = await pageElements.sortLocatorTexts(await pageElements.browserNames);
        await expect(originalBrowserNames).toEqual(sortedBrowserNames);
    })

     it('Validate CPU data', async() => {
        await pageElements.open();
        const cpuColumnData = await pageElements.columnIndexData(await pageElements.columnHeaders,"CPU");
        await expect(cpuColumnData).toBeElementsArrayOfSize(4);
        //Assert to validate existence of data in each row
        let validatedDataExist = await pageElements.validateExistingData(cpuColumnData);
        await expect(validatedDataExist).toEqual(true);
    })

    it('Validate Memory data', async() => {
        await pageElements.open();
        const memoryColumnData = await pageElements.columnIndexData(await pageElements.columnHeaders,"Memory");
        await expect(memoryColumnData).toBeElementsArrayOfSize(4);
        //Assert to validate existence of data in each row
        let validatedDataExist = await pageElements.validateExistingData(memoryColumnData);
        await expect(validatedDataExist).toEqual(true);
    })

    it('Validate Network data', async() => {
        await pageElements.open();
        const networkColumnData = await pageElements.columnIndexData(await pageElements.columnHeaders,"Network");
        await expect(networkColumnData).toBeElementsArrayOfSize(4);
        //Assert to validate existence of data in each row
        let validatedDataExist = await pageElements.validateExistingData(networkColumnData);
        await expect(validatedDataExist).toEqual(true);
    })

    it('Validate Disk data', async() => {
        await pageElements.open();
        const diskColumnData = await pageElements.columnIndexData(await pageElements.columnHeaders,"Disk");
        await expect(diskColumnData).toBeElementsArrayOfSize(4);
        //Assert to validate existence of data in each row
        let validatedDataExist = await pageElements.validateExistingData(diskColumnData);
        await expect(validatedDataExist).toEqual(true);
    })

   it('Validate color of warning label', async() => {
        const bgColor = "#ffc107";
        await pageElements.open();
        let warningLabelProperties = await pageElements.warningLabelSelector.getCSSProperty('background-color');
        let objectValuesFromCSS = Object.values(warningLabelProperties);
        let parsedValuesFromCSS = objectValuesFromCSS[2].hex;
        expect(parsedValuesFromCSS).toEqual(bgColor);
    })

    it('Validate values change after refresh', async() => {
        await pageElements.open();
        expect(await pageElements.completeTableData).toBeElementsArrayOfSize(20);
        let originalData = await pageElements.completeTableData.map(async tableData => await tableData.getText());
        await browser.refresh();
        let newData = await pageElements.completeTableData.map(async tableData => await tableData.getText());
        expect(await originalData).not.toEqual(await newData);
    })

})