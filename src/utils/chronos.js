import { DateTime } from 'luxon';

export const currentTime = () =>{
    let timeText = " "
    const now = DateTime.now();
    timeText = now.toLocaleString(DateTime.DATETIME_FULL)
    return timeText
}

export const hubGreeting = (userName) =>{
    let greeting = " "
    const greetNow = DateTime.now();
    if(greetNow.hour >= 0 && greetNow.hour < 12){ greeting = `Good Morning, ${userName}`; }
    if(greetNow.hour >= 12 && greetNow.hour < 17){ greeting = `Good Afternoon, ${userName}`; }
    if(greetNow.hour >= 17 && greetNow.hour <= 23){ greeting = `Good Evening, ${userName}`; }
    return greeting
}

export const fetchMonth = (monthInt) =>{
    let monthIndex = monthInt - 1
    let monthText = ""
    let months = ["January", "February", "March", "April", "May", "June", "July", "August",
     "September", "October", "November", "December"]
    monthText = months[monthIndex]
    return monthText
}

export const fetchPIN = () =>{
    let PIN = Math.floor(100000 + Math.random() * 900000)
    console.log("PIN fetched:" + PIN);
    return PIN
}

export const fetchActionID = () =>{
    let PIN = Math.floor(100000 + Math.random() * 900000)
    console.log("Action ID:" + PIN);
    return PIN
}