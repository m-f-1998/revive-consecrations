export interface Prayer {
  category: string
  description: string
  key: string
  name: string
  text: string
  url: string
}

export interface Feast {
  url: string
  name: string
  description: string
  datedescription: string | null
  date: Date | null
}

export interface Video {
  title: string
  slug: string
}

export interface Litany {
  title: string
  items: string [ ]
}

export interface Consecration {
  title: string
  link: string
  description: string
  date: Date
}
