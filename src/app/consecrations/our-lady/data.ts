import { addDays } from "date-fns"

let date = new Date ( 2024, 10, 29 )
const numberOfEntries = 33
export const consecration: {
  title: string
  link: string
  description: string
  date: Date
} [ ] = Array.from ( { length: numberOfEntries }, ( _, i ) => {
  const res = {
    title: "Day " + ( i + 1 ),
    description: "Daily reflection on the Total Consecration to Jesus through Mary, based on the writings of St. Louis Marie de Montfort.",
    link: `https://www.knightsoftheholyeucharist.com/videos/total-consecration-day-${ i + 1 }-st-louis-marie-demontfort-daily-reflection/`,
    date: date
  }
  date = addDays ( date, 1 )
  return res
} )

export const whatsapp_link = "https://chat.whatsapp.com/ET3vKYrNQSeAwBwrkfdDwf"

export const litany = [
  "Holy Mother of God",
  "Holy Virgin of Virgins",
  "Mother of Christ",
  "Mother of the Church",
  "Mother of Mercy",
  "Mother of Divine Grace",
  "Mother of Hope",
  "Mother Most Pure",
  "Mother Most Chaste",
  "Mother Inviolate",
  "Mother Undefiled",
  "Mother Most Amiable",
  "Mother Most Admirable",
  "Mother of Good Counsel",
  "Mother of our Creator",
  "Mother of our Savior",
  "Virgin Most Prudent",
  "Virgin Most Venerable",
  "Virgin Most Renowned",
  "Virgin Most Powerful",
  "Virgin Most Merciful",
  "Virgin Most Faithful",
  "Mirror of Justice",
  "Seat of Wisdom",
  "Cause of our Joy",
  "Spiritual Vessel",
  "Vessel of Honor",
  "Singular Vessel of Devotion",
  "Mystical Rose",
  "Tower of David",
  "Tower of Ivory",
  "House of Gold",
  "Ark of the Covenant",
  "Gate of Heaven",
  "Morning Star",
  "Health of the Sick",
  "Refuge of Sinners",
  "Comfort of Migrants",
  "Comforter of the Afflicted",
  "Help of Christians",
  "Queen of Angels",
  "Queen of Patriarchs",
  "Queen of Prophets",
  "Queen of Apostles",
  "Queen of Martyrs",
  "Queen of Confessors",
  "Queen of Virgins",
  "Queen of All Saints",
  "Queen Conceived without Original Sin",
  "Queen Assumed into Heaven",
  "Queen of the Most Holy Rosary",
  "Queen of Families",
  "Queen of Peace",
  "Pray for Us"
]