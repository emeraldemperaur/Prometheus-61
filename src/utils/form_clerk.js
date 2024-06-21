export const formClerk = (jsonModel, values) =>{
    let processedJSON = {
        name: "",
        model:[]}
    let vectorJSON = JSON.parse(jsonModel);
        if(vectorJSON.model){
        processedJSON.name = vectorJSON.name
        vectorJSON.model.map( vectorElement => {
            vectorElement.queries.map( inputElement => {
                if(inputElement.inputAlias in values){
                    inputElement.queryResponse = values[inputElement.inputAlias]
                    processedJSON.model.push(inputElement)
                }
            })

        })
        }
    return JSON.stringify(processedJSON);
}

