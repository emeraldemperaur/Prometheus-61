import { createSlice } from "@reduxjs/toolkit";
import { currentTime } from "../utils/chronos";

export const plannerSlice = createSlice({
    name: 'planner',
    initialState:{
        list:[
            {
                id:1,
                companyName: 'Wayne Enterprises',
                companyID: 1, 
                companyRegion: 'North America',
                companyStockExchange: 'TSX',
                companyTickerSymbol: 'WYN',
                isCorpDualListed: true,
                companyDualStockExchange: 'NYSE',
                companyDualTickerSymbol: 'WYNE',
                productName: 'Share Purchase and Holdings',
                productPlanName: 'Employee Share Purchase Plan',
                isPortmanteau: false,
                portmanteauLabel: ' ',
                enquiryName: 'Abode',
                enquiryID: 1,
                enquiryPlatformName: 'UBS Group',
                autoShare:false,
                accessPIN: '693324',
                status: 2,
                buildRank: 0,
                correspondenceName:'Bruce Wayne',
                correspondenceEmail:'bruce.wayne@wayneenterprises.ca',
                correspondenceTime: currentTime(),
                lastSavedCorrespondenceTime:'not available',
                isLocked: true,
                jsonQueryDefinition: `{
                    "name": "Abode",
                    "model":[
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
                            "inputWidth": 4,
                            "isRequired": false,
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
                            "maxValue": 100,
                            "newRow": false,
                            "inputWidth": 4,
                            "isRequired": false,
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
                            "inputWidth": 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Date Input Element 1",
                            "hintURL": "https://www.dji.com/ca/handheld?site=brandsite&from=nav",
                            "queryResponse": ""
                        },
                        {
                            "queryId": 4,
                            "inputType":"datetime",
                            "inputAlias": "datetimeInput1",
                            "inputLabel":"Date Time Input Element 1",
                            "inputPlaceholder": " ",
                            "newRow": false,
                            "inputWidth": 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Date Time Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "queryResponse": ""
                        },
                        {
                            "queryId": 5,
                            "inputType":"time",
                            "inputAlias": "timeInput1",
                            "inputLabel":"Time Input Element 1",
                            "inputPlaceholder": " ",
                            "newRow": false,
                            "inputWidth": 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Time Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "queryResponse": ""
                        },
                        {
                            "queryId": 6,
                            "inputType":"textarea",
                            "inputAlias": "textAreaInput1",
                            "inputLabel":"Text Area Element 1",
                            "inputPlaceholder": " ",
                            "newRow": true,
                            "inputWidth": 12,
                            "inputHeight": 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Text Area Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "queryResponse": ""
                        },
                        {
                            "queryId": 7,
                            "inputType":"number",
                            "inputAlias": "numberInput2",
                            "inputLabel":"Number Input Element 2",
                            "inputPlaceholder": "USD$ 1-1000",
                            "minValue": 1,
                            "maxValue": 1000,
                            "newRow": true,
                            "inputWidth": 6,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Number Input Element 2",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "queryResponse": ""
                        },
                        {
                            "queryId": 8,
                            "inputType":"number",
                            "inputAlias": "numberInput3",
                            "inputLabel":"Number Input Element 3",
                            "inputPlaceholder": "1-100",
                            "minValue": 1,
                            "maxValue": 100,
                            "newRow": false,
                            "inputWidth": 6,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Number Input Element 3",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "queryResponse": ""
                        },
                        {
                            "queryId": 9,
                            "inputType":"range",
                            "inputAlias": "numberRangeInput1",
                            "inputLabel":"Number Range Input Element 1",
                            "inputPlaceholder": " ",
                            "minValue": 50,
                            "maxValue": 100,
                            "stepValue": 0.10,
                            "newRow": true,
                            "inputWidth": 12,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Number Range Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/camera-drones#avata-series",
                            "queryResponse": ""
                        },
                        {
                            "queryId": 10,
                            "inputType":"number",
                            "inputAlias": "numberInput4",
                            "inputLabel":"Number Input Element 4",
                            "inputPlaceholder": " ",
                            "minValue": 1,
                            "maxValue": 100,
                            "newRow": true,
                            "inputWidth": 8,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Number Input Element 4",
                            "hintURL": "",
                            "queryResponse": ""
                        },
                        {
                            "queryId": 11,
                            "inputType":"number",
                            "inputAlias": "numberInput5",
                            "inputLabel":"Number Input Element 5",
                            "inputPlaceholder": " ",
                            "minValue": 0,
                            "maxValue": 100,
                            "newRow": false,
                            "inputWidth": 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Number Input Element 5",
                            "hintURL": "",
                            "queryResponse": ""
                        }
                        ]
                    }
                    ,
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
                            "inputWidth": 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Text Input Element 2",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": ""
                         },
                        {
                            "queryId": 13,
                            "inputType":"textWeek",
                            "inputAlias": "textInput3",
                            "inputLabel":"Text Input Element 3",
                            "inputPlaceholder": "TI3 Placeholder",
                            "newRow": true,
                            "inputWidth": 3,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Text Input Element 3",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": ""
                        },
                        {
                            "queryId": 14,
                            "inputType":"text",
                            "inputAlias": "textInput4",
                            "inputLabel":"Text Input Element 4",
                            "inputPlaceholder": "TI4 Placeholder",
                            "newRow": false,
                            "inputWidth": 5,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Text Input Element 4",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": ""
                        },
                        {
                            "queryId": 15,
                            "inputType":"select",
                            "inputAlias": "selectInput1",
                            "inputLabel": "Select Input Element 1",
                            "inputPlaceholder": " ",
                            "newRow": false,
                            "inputWidth": 6,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Select Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "inputOptions":[
                                {"id":1, "text":"Dashboard", "queryNote": "H | This is a sample hint for Select Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":2, "text":"Company Profiles", "queryNote": "W | This is a sample warning for Select Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":3, "text":"Query Models", "queryNote": "I | This is a sample tip for Select Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":4, "text":"Plan Forms", "queryNote": "H | This is a sample hint for Select Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":5, "text":"Insight Models", "queryNote": "W | This is a sample warning for Select Input Element 1 | https://www.dji.com/ca"}
                                            ],
                            "queryResponse": "Company Profiles"
                        },
                        {
                            "queryId": 16,
                            "inputType":"multiselect",
                            "inputAlias": "multiselectInput1",
                            "inputLabel":"Multiselect Input Element 1",
                            "inputPlaceholder": " ",
                            "newRow": false,
                            "inputWidth": 6,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Time Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "inputOptions":[
                                {"id":1, "text":"Dashboard", "queryNote": "H | This is a sample hint for MultiSelect Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":2, "text":"Company Profiles", "queryNote": "W | This is a sample warning for MultiSelect Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":3, "text":"Query Models", "queryNote": "I | This is a sample tip for MultiSelect Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":4, "text":"Plan Forms", "queryNote": "H | This is a sample hint for MultiSelect Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":5, "text":"Insight Models", "queryNote": "W | This is a sample warning for MultiSelect Input Element 1 | https://www.dji.com/ca"}
                                            ],
                            "queryResponse": ["Company Profiles","Query Models"]
                        },
                        {
                            "queryId": 17,
                            "inputType":"checkbox",
                            "inputAlias": "checkboxInput1",
                            "inputLabel":"CheckBox Input Element 1",
                            "inputPlaceholder": " ",
                            "newRow": true,
                            "inputWidth": 12,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for CheckBox Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "inputOptions":[
                                {"id":1, "text":"Dashboard", "queryNote": "H | This is a sample hint for Checkbox Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":2, "text":"Company Profiles", "queryNote": "W | This is a sample warning for Checkbox Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":3, "text":"Query Models", "queryNote": "I | This is a sample tip for Checkbox Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":4, "text":"Plan Forms", "queryNote": "H | This is a sample hint for Checkbox Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":5, "text":"Insight Models", "queryNote": "WARN | This is a sample warning for Checkbox Input Element 1 | https://www.dji.com/ca"}
                                            ],
                            "queryResponse": ["Plan Forms","Company Profiles"]
                        },
                        {
                            "queryId": 18,
                            "inputType":"radio",
                            "inputAlias": "radioInput1",
                            "inputLabel":"Radio Input Element 1",
                            "inputPlaceholder": " ",
                            "newRow": true,
                            "inputWidth": 12,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Radio Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "inputOptions":[
                                {"id":1, "text":"Dashboard", "queryNote": "H | This is a sample hint for Radio Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":2, "text":"Company Profiles", "queryNote": "W | This is a sample warning for Radio Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":3, "text":"Query Models", "queryNote": "I | This is a sample tip for Radio Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":4, "text":"Plan Forms", "queryNote": "H | This is a sample hint for Radio Input Element 1 | https://www.dji.com/ca"}, 
                                {"id":5, "text":"Insight Models", "queryNote": "W | This is a sample warning for Radio Input Element 1 | https://www.dji.com/ca"}
                                            ],
                            "queryResponse": "Insight Models"
                        },
                        {
                            "queryId": 19,
                            "inputType":"toggle",
                            "inputAlias": "toggleInput1",
                            "inputLabel":"Toggle Input Element 1",
                            "inputPlaceholder": "Toggled Text Input",
                            "newRow": true,
                            "inputWidth": 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Toggle Input Element 1",
                            "hintURL": "https://www.dji.com/ca/products/power-series?site=brandsite&from=nav",
                            "queryNote": "W | This is a sample warning for Toggle Input Element 1 | https://www.dji.com/ca",
                            "queryResponse": true
                        },
                        {
                            "queryId": 20,
                            "inputType":"toggledInput",
                            "inputAlias": "toggledInput1",
                            "inputLabel": "Toggled Input Element 1",
                            "inputPlaceholder": " ",
                            "newRow": false,
                            "inputWidth": 4,
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
                                "inputWidth": 12,
                                "isRequired": true,
                                "isHinted": true,
                                "hintText": "This is sample hint text content for Toggled Text Input Element 1",
                                "hintURL": "https://www.dji.com/ca",
                                "queryResponse": ""
                            },
                            "queryNote": "WARN --> This is a sample warning for Toggled Input Element 1 --> https://www.dji.com/ca",
                            "queryResponse": ""
                        }
                        
                        ]
                    }
                    ,
                    {
                        "sectionId": 3,
                        "title": "Epsilon Section",
                        "icon":"fa-solid fa-icons",
                        "queries":[
                        {
                            "queryId": 22,
                            "inputType":"multifile",
                            "inputAlias": "fileInput1",
                            "inputLabel":"File Input Element 1",
                            "inputPlaceholder": "FI1 Placeholder",
                            "newRow": false,
                            "multiple": true,
                            "inputWidth": 6,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for File Input Element 1",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": ""
                         },
                        {
                            "queryId": 23,
                            "inputType":"file",
                            "inputAlias": "fileInput2",
                            "inputLabel":"File Input Element 2",
                            "inputPlaceholder": "FI2 Placeholder",
                            "newRow": false,
                            "multiple": false,
                            "inputWidth": 6,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for File Input Element 2",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": ""
                        },
                        {
                            "queryId": 24,
                            "inputType":"daterange",
                            "inputAlias": "daterangeInput1",
                            "inputLabel":"Date Range Input Element 1",
                            "inputPlaceholder": "DR1 Placeholder",
                            "newRow": false,
                            "inputWidth": 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Date Range Input Element 1",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": ""
                        },
                        {
                            "queryId": 25,
                            "inputType":"daterange",
                            "inputAlias": "daterangeInput2",
                            "inputLabel":"Date Range Input Element 2",
                            "inputPlaceholder": "DR2 Placeholder",
                            "newRow": false,
                            "inputWidth": 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Date Range Input Element 2",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": ""
                        },
                        {
                            "queryId": 26,
                            "inputType":"daterange",
                            "inputAlias": "daterangeInput3",
                            "inputLabel":"Date Range Input Element 3",
                            "inputPlaceholder": "DR3 Placeholder",
                            "newRow": false,
                            "inputWidth": 4,
                            "isRequired": true,
                            "isHinted": true,
                            "hintText": "This is sample hint text content for Date Range Input Element 3",
                            "hintURL": "https://www.dji.com/ca",
                            "queryResponse": ""
                        }
                        ]
                    }]
                }`
            }
        ]
    },
    reducers:{
        addPlanQuestionnaire:(state, action)=>{
            
            state.list = [...state.list, action.payload]

        }
    }
});

export const {addPlanQuestionnaire} = plannerSlice.actions;
export default plannerSlice.reducer;