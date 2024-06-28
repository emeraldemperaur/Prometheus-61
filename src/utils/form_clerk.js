export const formClerk = (jsonModel, values) =>{
    let section = {}
    let processedJSON = {
        name: "",
        model:[]}
    let vectorJSON = JSON.parse(jsonModel);
        if(vectorJSON.model){
        processedJSON.name = vectorJSON.name
        vectorJSON.model.map( vectorElement => {
            let sectionInputs = []
            vectorElement.queries.map( inputElement => {
                if(inputElement.inputAlias in values){
                    section = {sectionId: vectorElement.sectionId, title: vectorElement.title, icon: vectorElement.icon, queries:[]}
                    inputElement.queryResponse = values[inputElement.inputAlias]
                    sectionInputs.push(inputElement)  
                }
                section['queries'] = sectionInputs
            })
            processedJSON.model.push(section)
        })
        }
    return JSON.stringify(processedJSON);
}

