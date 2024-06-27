import Papa from "papaparse";
import { utils, writeFileXLSX } from "xlsx";
import { pl } from "date-fns/locale";



const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType })
    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
  }

export const csvFormServer = (planRecord, corpRecord, jsonModel) =>{
    let csvObject = {};
    let csv = '';
    csvObject['companyName'] = corpRecord.companyName;
    csvObject['incorporationCategory'] = corpRecord.incorporationCategory;
    csvObject['incorporationCountry'] = corpRecord.incorporationCountry;
    csvObject['incorporationRegion'] = corpRecord.incorporationRegion;
    csvObject['primeStockExchange'] = corpRecord.primeStockExchange;
    csvObject['primeTickerSymbol'] = corpRecord.primeTickerSymbol;
    csvObject['dualListed'] = corpRecord.dualListed;
    csvObject['dualStockExchange'] = corpRecord.dualStockExchange;
    csvObject['dualTickerSymbol'] = corpRecord.dualTickerSymbol;
    csvObject['legendConditions'] = corpRecord.legendConditions;
    csvObject['distributesDividends'] = corpRecord.distributesDividends;
    csvObject['dividendsDistribution'] = corpRecord.dividendsDistribution;
    csvObject['productPlanName'] = planRecord.productPlanName;
    csvObject['enquiryPlatformName'] = planRecord.enquiryPlatformName;

    let vectorJSON = JSON.parse(jsonModel);
        if(vectorJSON.model){
        vectorJSON.model.map( vectorElement => {
            vectorElement.queries.map( inputElement => {
                let inputAlias = inputElement.inputAlias;
                let inputResponse = inputElement.inputResponse;
                if(inputResponse == null || inputResponse == ""){ inputResponse = "Not Provided"}
                csvObject[inputAlias] = inputResponse   
            })})
    csv = Papa.unparse([csvObject],  {
        quotes: true, //or array of booleans
        quoteChar: '"',
        escapeChar: '"',
        delimiter: ",",
        header: true,
        newline: "\r\n",
        skipEmptyLines: false, //other option is 'greedy', meaning skip delimiters, quotes, and whitespace.
        columns: null //or array of strings
    })
    console.log(`CSV Server Output >> \n ${csv}`)
    downloadFile({
        data: csv,
        fileName: `${corpRecord.primeTickerSymbol} - ${planRecord.productPlanName}.csv`,
        fileType: 'text/csv',
      })
    }
    return csv;
}

export const xlsxFormServer = (planRecord, corpRecord, jsonModel) =>{
    let xlsxObject = {};
    xlsxObject['companyName'] = corpRecord.companyName;
    xlsxObject['incorporationCategory'] = corpRecord.incorporationCategory;
    xlsxObject['incorporationCountry'] = corpRecord.incorporationCountry;
    xlsxObject['incorporationRegion'] = corpRecord.incorporationRegion;
    xlsxObject['primeStockExchange'] = corpRecord.primeStockExchange;
    xlsxObject['primeTickerSymbol'] = corpRecord.primeTickerSymbol;
    xlsxObject['dualListed'] = corpRecord.dualListed;
    xlsxObject['dualStockExchange'] = corpRecord.dualStockExchange;
    xlsxObject['dualTickerSymbol'] = corpRecord.dualTickerSymbol;
    xlsxObject['legendConditions'] = corpRecord.legendConditions;
    xlsxObject['distributesDividends'] = corpRecord.distributesDividends;
    xlsxObject['dividendsDistribution'] = corpRecord.dividendsDistribution;
    xlsxObject['productPlanName'] = planRecord.productPlanName;
    xlsxObject['enquiryPlatformName'] = planRecord.enquiryPlatformName;
    let vectorJSON = JSON.parse(jsonModel);
        if(vectorJSON.model){
        vectorJSON.model.map( vectorElement => {
            vectorElement.queries.map( inputElement => {
                let inputAlias = inputElement.inputAlias;
                let inputResponse = inputElement.inputResponse;
                if(inputResponse == null || inputResponse == ""){ inputResponse = "Not Provided"}
                xlsxObject[inputAlias] = inputResponse     
            })

        })
        const worksheet = utils.json_to_sheet([xlsxObject]);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, `${planRecord.productPlanName}`);
        writeFileXLSX(workbook, `${corpRecord.primeTickerSymbol} - ${planRecord.productPlanName}.xlsx`, { compression: true });
        console.log(`XLSX Server Output >> \n ${workbook}`)
        }
    return null;
}

export const pdfFormServer = (jsonModel) =>{
    let processedJSON = {
        name: "",
        model:[]}
    let vectorJSON = JSON.parse(jsonModel);
        if(vectorJSON.model){
        processedJSON.name = vectorJSON.name
        vectorJSON.model.map( vectorElement => {
            vectorElement.queries.map( inputElement => {
                
            })

        })
        }
    return processedJSON;
}

