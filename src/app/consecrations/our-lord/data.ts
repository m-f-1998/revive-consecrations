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
  "God, the Son, Redeemer of the world",
  "Holy Trinity, One God",
  "Jesus, Son of the Living God",
  "Jesus, Splendor of the Father",
  "Jesus, Brightness of Eternal Light",
  "Jesus, King of Glory",
  "Jesus, Sun of Justice",
  "Jesus, Son of the Virgin Mary",
  "Jesus, Most Amiable",
  "Jesus, Most Admirable",
  "Jesus, Mighty God",
  "Jesus, Father of the World to Come",
  "Jesus, Angel of Great Counsel",
  "Jesus, Most Powerful",
  "Jesus, Most Patient",
  "Jesus, Most Obedient",
  "Jesus, Meek and Humble of Heart",
  "Jesus, Lover of Chastity",
  "Jesus, Lover of Us",
  "Jesus, God of Peace",
  "Jesus, Author of Life",
  "Jesus, Model of Virtues",
  "Jesus, Zealous for Souls",
  "Jesus, Our God",
  "Jesus, Our Refuge",
  "Jesus, Father of the Poor",
  "Jesus, Treasure of the Faithful",
  "Jesus, Good Shepherd",
  "Jesus, True Light",
  "Jesus, Eternal Wisdom",
  "Jesus, Infinite Goodness",
  "Jesus, Our Way and Our Life",
  "Jesus, Joy of Angels",
  "Jesus, King of Patriarchs",
  "Jesus, Master of Apostles",
  "Jesus, Teacher of Evangelists",
  "Jesus, Strength of Martyrs",
  "Jesus, Light of Confessors",
  "Jesus, Purity of Virgins",
  "Jesus, Crown of All Saints",
  "Be merciful, spare us, O Jesus",
  "Be merciful, graciously hear us, O Jesus",
  "From all evil, deliver us, O Jesus",
  "From all sin, deliver us, O Jesus",
  "From Your wrath, deliver us, O Jesus",
  "From the snares of the devil, deliver us, O Jesus",
  "From the spirit of fornication, deliver us, O Jesus",
  "From everlasting death, deliver us, O Jesus",
  "From the neglect of Your inspirations, deliver us, O Jesus",
  "Through the mystery of Your holy Incarnation, deliver us, O Jesus",
  "Through Your Nativity, deliver us, O Jesus",
  "Through Your Infancy, deliver us, O Jesus",
  "Through Your Most Divine Life, deliver us, O Jesus",
  "Through Your Labors, deliver us, O Jesus",
  "Through Your Agony and Passion, deliver us, O Jesus",
  "Through Your Cross and Dereliction, deliver us, O Jesus",
  "Through Your Sufferings, deliver us, O Jesus",
  "Through Your Death and Burial, deliver us, O Jesus",
  "Through Your Resurrection, deliver us, O Jesus",
  "Through Your Ascension, deliver us, O Jesus",
  "Through Your Institution of the Most Holy Eucharist, deliver us, O Jesus",
  "Through Your Joys, deliver us, O Jesus",
  "Through Your Glory, deliver us, O Jesus",
  "Lamb of God, who takes away the sins of the world, spare us, O Jesus",
  "Lamb of God, who takes away the sins of the world, graciously hear us, O Jesus",
  "Lamb of God, who takes away the sins of the world, have mercy on us, O Jesus",
  "Jesus, hear us",
  "Jesus, graciously hear us"
]