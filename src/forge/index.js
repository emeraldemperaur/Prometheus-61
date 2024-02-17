import { configureStore } from "@reduxjs/toolkit";
import rolodexReducer from './rolodex'
import enquirerReducer from './enquirer'
import plannerReducer from './planner'
import oracleReducer from './oracle'
import dashboardReducer from './dashboard'
import terminalReducer from './terminal'
import profilerReducer from './profiler'
import counselReducer from './counsel'

export const forgeStore =  configureStore({
    reducer:{
        rolodex: rolodexReducer,
        enquirer: enquirerReducer,
        planner: plannerReducer,
        oracle: oracleReducer,
        dashboard: dashboardReducer,
        terminal: terminalReducer,
        profiler: profilerReducer,
        counsel: counselReducer
    }

})