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
  "St. Stephen",
  "St. Lawrence",
  "St. Vincent",
  "Sts. Fabian and Sebastian",
  "Sts. John and Paul",
  "Sts. Cosmas and Damian",
  "Sts. Gervase and Protase",
  "St. Agnes",
  "St. Cecilia",
  "St. Anastasia",
  "St. Perpetua",
  "St. Felicity",
  "St. Agatha",
  "St. Lucy",
  "St. Agnes",
  "St. Gregory VII",
  "St. Thomas Becket",
  "St. Peter Martyr",
  "St. John Fisher",
  "St. Thomas More",
  "St. John Houghton",
  "St. Edmund Campion",
  "St. Margaret Clitherow",
  "St. Philip Howard",
  "St. John Southworth",
  "St. Oliver Plunkett",
  "St. Maximilian Kolbe",
  "St. Edith Stein",
  "St. Oscar Romero",
  "St. Charles Lwanga",
  "St. Andrew Dung-Lac",
  "St. Paul Miki",
  "St. Pedro Calungsod",
  "St. Lorenzo Ruiz",
  "St. Kateri Tekakwitha",
  "St. Isaac Jogues",
  "St. Jean de Brébeuf",
  "St. René Goupil",
  "St. Charles Garnier",
  "St. Gabriel Lalemant",
  "St. Noël Chabanel",
  "St. Anthony Daniel",
  "St. John de Lalande",
  "St. Roque González",
  "St. Juan del Castillo",
  "St. Alphonsus Rodríguez",
  "St. Miguel Pro",
  "St. José Sánchez del Río",
  "St. Cristóbal Magallanes",
  "St. Mateo Correa Magallanes",
  "St. Rodrigo Aguilar Alemán",
  "St. Luis Batiz Sainz",
  "St. Pedro de Jesús Maldonado",
  "St. Toribio Romo González",
  "St. David Galván Bermúdez",
  "St. Jenaro Sánchez Delgadillo",
  "St. Tranquilino Ubiarco",
  "St. Margarito Flores García",
  "St. Atilano Cruz Alvarado",
  "St. Julio Álvarez Mendoza",
  "St. David Uribe Velasco",
  "St. Manuel Morales",
  "St. Salvador Lara Puente",
  "St. José María Robles Hurtado",
  "St. Sabás Reyes Salazar",
  "St. Mateo Correa Magallanes",
  "St. Justino Orona Madrigal",
  "St. David Roldán Lara",
  "St. Toribio Romo González",
  "St. Jenaro Sánchez Delgadillo",
  "St. Tranquilino Ubiarco",
  "St. Margarito Flores García",
  "St. Atilano Cruz Alvarado",
  "St. Julio Álvarez Mendoza",
  "St. David Uribe Velasco",
  "St. Manuel Morales",
  "St. Salvador Lara Puente",
  "St. José María Robles Hurtado",
  "St. Sabás Reyes Salazar",
  "Pray for Us"
]