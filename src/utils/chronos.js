import { DateTime } from 'luxon';

export const currentTime = () =>{
    let timeText = " "
    const now = DateTime.now();
    timeText = now.toLocaleString(DateTime.DATETIME_FULL)
    return timeText
}