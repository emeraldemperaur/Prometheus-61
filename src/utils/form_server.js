export const csvFormServer = (jsonModel) =>{
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

export const xlsxFormServer = (jsonModel) =>{
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