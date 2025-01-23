import { addDays } from "date-fns"
import { Consecration } from "@app/revive-consecrations.types"

let start_date = new Date ( 2024, 10, 29 )
const numberOfEntries = 33

export const our_lady: {
  text: Consecration [ ]
  whatsapp: string
} = {
  text: Array.from ( { length: numberOfEntries }, ( _, i ) => {
    const res = {
      title: "Day " + ( i + 1 ),
      description: "Daily reflection on the Total Consecration to Jesus through Mary, based on the writings of St. Louis Marie de Montfort.",
      link: `https://www.knightsoftheholyeucharist.com/videos/total-consecration-day-${ i + 1 }-st-louis-marie-demontfort-daily-reflection/`,
      date: start_date
    }
    start_date = addDays ( start_date, 1 )
    return res
  } ),
  whatsapp: "https://chat.whatsapp.com/ET3vKYrNQSeAwBwrkfdDwf"
}