import Page from './page.js';

class ElementsDynamicTable extends Page {
    get table() {
        return $('[role=table]')
    }

    get columnHeaders() {
        return $$("[role='columnheader']")
    }

    get browserNames() {
        return $$("[role='cell']:nth-child(1)")
    }

    get warningLabelSelector() {
        return $('.bg-warning')
    }

    get completeTableData(){
        return $$("span[role='cell']")
    }

    async sortLocatorTexts(dataToSort){
        let dataSorted = await Promise.all(dataToSort.map(async (browsers) => (await browsers.getText())));
        return dataSorted.sort();
    }

    async columnIndexData(columnsData, indexOfHeader){
        let indexColumn = await (await Promise.all(columnsData.map(async column => (await column.getText())))).indexOf(indexOfHeader)+1;
        let cpuColumnData = $$("[role='cell']:nth-child("+ indexColumn + ")");
        return cpuColumnData;
    }

    async validateExistingData(rowsData) { 
        return await (await Promise.all(rowsData.map(async data => (await data.isExisting())))).includes(false) !== true ? true : false;
    }

    open () {
        return super.open('dynamictable');
    }

}
const pageElements = new ElementsDynamicTable()
export default pageElements