import { toast } from 'react-toastify';
import { countriesItems } from './country_data';

export const inputTextValid = (inputElement, inputLabel) =>{
    let inputValid = false;
    if(inputElement.value.trim().length == 0){inputValid = false; inputLabel.style.color = "#880808"; inputLabel.style.fontWeight = 500; toast.warn('Missing required field!',{ position: "top-right", autoClose: 696, closeOnClick: true})
        inputElement.focus();
    }
    if(inputElement.value.trim().length != 0){inputValid = true; inputLabel.style.color = "#757575"; inputLabel.style.fontWeight = 'normal'}
    console.log("Input Valid: " + inputValid)
    return inputValid
}

export const inputMktValid = (inputElement, inputLabel) =>{
    let inputMktValid = false;
    if(inputElement.value.trim() == "----"){inputMktValid = false; inputLabel.style.color = "#880808"; inputLabel.style.fontWeight = 500; toast.warn('Missing required field!',{ position: "top-right", autoClose: 696, closeOnClick: true})
        inputElement.focus();
    }
    if(inputElement.value.trim() != 0 && inputElement.value.trim() != "----"){inputMktValid = true; inputLabel.style.color = "#757575"; inputLabel.style.fontWeight = 'normal'}
    console.log("Input Mkt Valid: " + inputMktValid)
    return inputMktValid
}

export const duoListedValid = (toggleElement, inputElement, inputLabel, symbolElement, symbolLabel) => {
    let duoListed = false;
    console.log("Duo Toggle Position: " + toggleElement.checked);
    if(toggleElement && toggleElement.checked){ duoListed = inputMktValid(inputElement, inputLabel);if(duoListed){duoListed = inputTextValid(symbolElement, symbolLabel);}}
    if(!toggleElement.checked){duoListed = true;}return duoListed}

export const dividendsValid = (toggleElement, inputElement, inputLabel) =>{
    let dividendsValid = false;
    console.log("Dividends Toggle Position: " + toggleElement.checked);
    if(toggleElement && toggleElement.checked){dividendsValid = inputTextValid(inputElement, inputLabel);}
    if(!toggleElement.checked){dividendsValid = true;} return dividendsValid
}

export const toggledInputValue = (toggleInput, inputElement) =>{ let inputValue = " "; if(toggleInput.checked){inputValue = inputElement.value} return inputValue}

export const toggleDuoInput = (toggleInput, inputElement) => {
    let outputString = inputElement.value
    if(!toggleInput.checked){outputString = "";}return outputString;
}

export const fetchRegion = (countryName) => {
    let regionName = " "; let countryObject = null;
    for(const country of countriesItems){if(country.name == countryName)countryObject = country}
    if(countryObject.continent == "North America"){regionName = "North America"}
    if(countryObject.continent == "Asia"){regionName = "Asia-Pacific"}
    if(countryObject.continent == "South America"){regionName = "Latin America"}
    if(countryObject.continent == "Caribbean"){regionName = "Latin America"}
    if(countryObject.continent == "Oceania"){regionName = "Asia-Pacific"}
    if(countryObject.continent == "Europe"){regionName = "EMEA"}
    if(countryObject.continent == "Middle East"){regionName = "EMEA"}
    if(countryObject.continent == "Africa"){regionName = "EMEA"}
   
    return regionName;
}

export const fetchQuery = (enquirerList, selectedId) =>{
    let queryObject = null
    for(const enquiry of enquirerList){
        if(enquiry.id == selectedId){
            queryObject = enquiry
        }
    }
    return queryObject;
}

export const fetchCompany = (rolodexList, selectedId) =>{
    let corpObject = null
    for(const corp of rolodexList){
        if(corp.id == selectedId){
            corpObject = corp
        }
    }
    return corpObject;
}


export const clearInputs = (inputList) =>{for(const inputElement of inputList){inputElement.value = " ";}}

export const clearToggles = (toggleList) => { for(const toggle of toggleList){ toggle.checked = false;}}
