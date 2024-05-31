import { createSlice } from "@reduxjs/toolkit";

export const enquirerSlice = createSlice({
    name: 'enquirer',
    initialState:{
        list:[
            {
                id:1,
                modelName: 'Abode', 
                productName: 'Share Purchase and Holdings',
                productPlanName: 'Employee Share Purchase Plan',
                regionName: 'Global - All Regions',
                exchangeMarket: 'Global - All Markets',
                platformName: 'Global - All Platforms',
                enquiryAuthor: 'Meka Egwim',
                enquiryDate: 'February 22, 2024 at 03:19PM MST',
                enquiryModified: true,
                enquiryEditor: 'Jane Smith',
                enquiryEditDate: 'February 23, 2024 at 06:39PM MST',
                jsonQueryDefinition: `{
                    {
                        "sectionId": 1,
                        "title": "Alpha Section",
                        "icon":"fa-solid fa-dumpster-fire",
                        "queries":[
                        {
                            "queryId": 1,
                            "inputType":"text",
                            "inputAlias": "textInput1",
                            "inputLabel":"Text Input Element 1",
                            "inputPlaceholder": "TI1 Placeholder",
                            "newRow": false,
                            "inputWidth" 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Text Input Element 1",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": null
                         },
                        {
                            "queryId": 2,
                            "inputType":"number",
                            "inputAlias": "numberInput1",
                            "inputLabel":"Number Input Element 1",
                            "inputPlaceholder": "NI1 Placeholder",
                            "minValue": 0,
                            "maxValue" 100,
                            "newRow": false,
                            "inputWidth" 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Number Input Element 1",
                            "hintURL": "https://www.dji.com/ca/camera-drones?site=brandsite&from=nav",
                            "queryResponse": null
                        },
                        {
                            "queryId": 3,
                            "inputType":"date",
                            "inputAlias": "dateInput1",
                            "inputLabel":"Date Input Element 1",
                            "inputPlaceholder": " ",
                            "newRow": false,
                            "inputWidth" 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Date Input Element 1",
                            "hintURL": "https://www.dji.com/ca/handheld?site=brandsite&from=nav",
                            "queryResponse": null
                        },
                        {
                            "queryId": 4,
                            "inputType":"datetime",
                            "inputAlias": "datetimeInput1",
                            "inputLabel":"Date Time Input Element 1",
                            "inputPlaceholder": " ",
                            "newRow": false,
                            "inputWidth" 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Date Time Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "queryResponse": null
                        },
                        {
                            "queryId": 5,
                            "inputType":"time",
                            "inputAlias": "timeInput1",
                            "inputLabel":"Time Input Element 1",
                            "inputPlaceholder": " ",
                            "newRow": false,
                            "inputWidth" 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Time Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "queryResponse": null
                        },
                        {
                            "queryId": 6,
                            "inputType":"textarea",
                            "inputAlias": "textAreaInput1",
                            "inputLabel":"Text Area Element 1",
                            "inputPlaceholder": " ",
                            "newRow": true,
                            "inputWidth" 12,
                            "inputHeight": 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Text Area Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "queryResponse": null
                        },
                        {
                            "queryId": 7,
                            "inputType":"number",
                            "inputAlias": "numberInput2",
                            "inputLabel":"Number Input Element 2",
                            "inputPlaceholder": "USD$ 1-1000",
                            "minValue": 1,
                            "maxValue" 1000,
                            "newRow": true,
                            "inputWidth" 6,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Number Input Element 2",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "queryResponse": null
                        },
                        {
                            "queryId": 8,
                            "inputType":"number",
                            "inputAlias": "numberInput3",
                            "inputLabel":"Number Input Element 3",
                            "inputPlaceholder": "1-100",
                            "minValue": 1,
                            "maxValue" 100,
                            "newRow": false,
                            "inputWidth" 6,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Number Input Element 3",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "queryResponse": null
                        },
                        {
                            "queryId": 9,
                            "inputType":"range",
                            "inputAlias": "numberRangeInput1",
                            "inputLabel":"Number Range Input Element 1",
                            "inputPlaceholder": " ",
                            "minValue": 50,
                            "maxValue" 100,
                            "stepValue": 0.10,
                            "newRow": true,
                            "inputWidth" 12,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Number Range Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/camera-drones#avata-series",
                            "queryResponse": null
                        },
                        {
                            "queryId": 10,
                            "inputType":"number",
                            "inputAlias": "numberInput4",
                            "inputLabel":"Number Input Element 4",
                            "inputPlaceholder": " ",
                            "minValue": 1,
                            "maxValue" 100,
                            "newRow": true,
                            "inputWidth" 8,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Number Input Element 4",
                            "hintURL": "",
                            "queryResponse": null
                        },
                        {
                            "queryId": 11,
                            "inputType":"number",
                            "inputAlias": "numberInput5",
                            "inputLabel":"Number Input Element 5",
                            "inputPlaceholder": " ",
                            "minValue": 0,
                            "maxValue" 100,
                            "newRow": false,
                            "inputWidth" 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Number Input Element 5",
                            "hintURL": "",
                            "queryResponse": null
                        }
                        ]
                    }
                    
                    {
                        "sectionId": 2,
                        "title": "Omega Section",
                        "icon":"fa-solid fa-feather",
                        "queries":[
                        {
                            "queryId": 12,
                            "inputType":"textMonth",
                            "inputAlias": "textInput2",
                            "inputLabel":"Text Input Element 2",
                            "inputPlaceholder": "TI2 Placeholder",
                            "newRow": false,
                            "inputWidth" 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Text Input Element 2",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": null
                         },
                        {
                            "queryId": 13,
                            "inputType":"textWeek",
                            "inputAlias": "textInput3",
                            "inputLabel":"Text Input Element 3",
                            "inputPlaceholder": "TI3 Placeholder",
                            "newRow": true,
                            "inputWidth" 3,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Text Input Element 3",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": null
                        },
                        {
                            "queryId": 14,
                            "inputType":"text",
                            "inputAlias": "textInput4",
                            "inputLabel":"Text Input Element 4",
                            "inputPlaceholder": "TI4 Placeholder",
                            "newRow": false,
                            "inputWidth" 5,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Text Input Element 4",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": null
                        },
                        {
                            "queryId": 15,
                            "inputType":"select",
                            "inputAlias": "selectInput1",
                            "inputLabel": "Select Input Element 1",
                            "inputPlaceholder": " ",
                            "newRow": false,
                            "inputWidth" 6,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Select Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "inputOptions":[
                                {"id":1, "text":"Dashboard", "queryNote": "HINT --> This is a sample hint for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":2, "text":"Company Profiles", "queryNote": "WARN --> This is a sample warning for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":3, "text":"Query Models", "queryNote": "TIP --> This is a sample tip for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":4, "text":"Plan Forms", "queryNote": "HINT --> This is a sample hint for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":5, "text":"Insight Models", "queryNote": "WARN --> This is a sample warning for Select Input Element 1 --> https://www.dji.com/ca"}
                                            ],
                            "queryResponse": null
                        },
                        {
                            "queryId": 16,
                            "inputType":"multiselect",
                            "inputAlias": "multiselectInput1",
                            "inputLabel":"Time Input Element 1",
                            "inputPlaceholder": " ",
                            "newRow": false,
                            "inputWidth" 6,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Time Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "inputOptions":[
                                {"id":1, "text":"Dashboard", "queryNote": "HINT --> This is a sample hint for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":2, "text":"Company Profiles", "queryNote": "WARN --> This is a sample warning for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":3, "text":"Query Models", "queryNote": "TIP --> This is a sample tip for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":4, "text":"Plan Forms", "queryNote": "HINT --> This is a sample hint for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":5, "text":"Insight Models", "queryNote": "WARN --> This is a sample warning for Select Input Element 1 --> https://www.dji.com/ca"}
                                            ],
                            "queryResponse": null
                        },
                        {
                            "queryId": 17,
                            "inputType":"checkbox",
                            "inputAlias": "checkboxInput1",
                            "inputLabel":"CheckBox Input Element 1",
                            "inputPlaceholder": " ",
                            "newRow": true,
                            "inputWidth" 12,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for CheckBox Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "inputOptions":[
                                {"id":1, "text":"Dashboard", "queryNote": "HINT --> This is a sample hint for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":2, "text":"Company Profiles", "queryNote": "WARN --> This is a sample warning for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":3, "text":"Query Models", "queryNote": "TIP --> This is a sample tip for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":4, "text":"Plan Forms", "queryNote": "HINT --> This is a sample hint for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":5, "text":"Insight Models", "queryNote": "WARN --> This is a sample warning for Select Input Element 1 --> https://www.dji.com/ca"}
                                            ],
                            "queryResponse": null
                        },
                        {
                            "queryId": 18,
                            "inputType":"radio",
                            "inputAlias": "radioInput1",
                            "inputLabel":"Radio Input Element 1",
                            "inputPlaceholder": " ",
                            "newRow": true,
                            "inputWidth" 12,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Radio Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "inputOptions":[
                                {"id":1, "text":"Dashboard", "queryNote": "HINT --> This is a sample hint for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":2, "text":"Company Profiles", "queryNote": "WARN --> This is a sample warning for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":3, "text":"Query Models", "queryNote": "TIP --> This is a sample tip for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":4, "text":"Plan Forms", "queryNote": "HINT --> This is a sample hint for Select Input Element 1 --> https://www.dji.com/ca"}, 
                                {"id":5, "text":"Insight Models", "queryNote": "WARN --> This is a sample warning for Select Input Element 1 --> https://www.dji.com/ca"}
                                            ],
                            "queryResponse": null
                        },
                        {
                            "queryId": 19,
                            "inputType":"toggle",
                            "inputAlias": "toggleInput1",
                            "inputLabel":"Toggle Input Element 1",
                            "inputPlaceholder": "Toggled Text Input",
                            "newRow": true,
                            "inputWidth" 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Toggle Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "queryNote": "WARN --> This is a sample warning for Toggle Input Element 1 --> https://www.dji.com/ca",
                            "queryResponse": null
                        },
                        {
                            "queryId": 20,
                            "inputType":"toggledInput",
                            "inputAlias": "toggledInput1",
                            "inputLabel": "Toggled Input Element 1",
                            "inputPlaceholder": " ",
                            "newRow": true,
                            "inputWidth" 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Toggled Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/camera-drones#avata-series",
                            "toggledInput":{
                                "queryId": 21,
                                "inputType":"text",
                                "inputAlias": "toggledTextInput1",
                                "inputLabel":"Toggled Text Input Element 1",
                                "inputPlaceholder": "TI4 Placeholder",
                                "newRow": false,
                                "inputWidth" 12,
                                "isRequired": true,
                                "isHinted": true,
                                "hintText": "This is sample hint text content for Toggled Text Input Element 1",
                                "hintURL": "https://www.dji.com/ca",
                                "queryResponse": null
                            },
                            "queryNote": "WARN --> This is a sample warning for Toggled Input Element 1 --> https://www.dji.com/ca",
                            "queryResponse": null
                        }
                        
                        ]
                    }
                    
                    {
                        "sectionId": 3,
                        "title": "Epsilon Section",
                        "icon":"fa-solid fa-icons",
                        "queries":[
                        {
                            "queryId": 22,
                            "inputType":"file",
                            "inputAlias": "fileInput1",
                            "inputLabel":"File Input Element 1",
                            "inputPlaceholder": "FI1 Placeholder",
                            "newRow": false,
                            "multiple": true,
                            "inputWidth" 6,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for File Input Element 1",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": null
                         },
                        {
                            "queryId": 23,
                            "inputType":"file",
                            "inputAlias": "fileInput2",
                            "inputLabel":"File Input Element 2",
                            "inputPlaceholder": "FI2 Placeholder",
                            "newRow": false,
                            "multiple": false,
                            "inputWidth" 6,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for File Input Element 2",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": null
                        },
                        {
                            "queryId": 24,
                            "inputType":"daterange",
                            "inputAlias": "daterangeInput1",
                            "inputLabel":"Date Range Input Element 1",
                            "inputPlaceholder": "DR1 Placeholder",
                            "newRow": false,
                            "inputWidth" 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Date Range Input Element 1",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": null
                        },
                        {
                            "queryId": 25,
                            "inputType":"daterange",
                            "inputAlias": "daterangeInput2",
                            "inputLabel":"Date Range Input Element 2",
                            "inputPlaceholder": "DR2 Placeholder",
                            "newRow": false,
                            "inputWidth" 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Date Range Input Element 2",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": null
                        },
                        {
                            "queryId": 26,
                            "inputType":"daterange",
                            "inputAlias": "daterangeInput3",
                            "inputLabel":"Date Range Input Element 3",
                            "inputPlaceholder": "DR3 Placeholder",
                            "newRow": false,
                            "inputWidth" 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Date Range Input Element 3",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": null
                        }
                        ]
                    }
                }`
            }
        ]
    },
    reducers:{
        addQueryModel:(state, action)=>{
            
            state.list = [...state.list, action.payload]

        }
    }
});

export const {addQueryModel} = enquirerSlice.actions;
export default enquirerSlice.reducer;