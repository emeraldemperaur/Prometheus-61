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