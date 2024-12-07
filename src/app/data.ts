import { addDays } from "date-fns"

export const feasts = [
  {
    name: "Solemnity of Mary, Mother of God",
    date: {
      day: 1,
      month: 1
    },
    description: "Celebration of Mary as the Mother of God. This feast is a celebration of Mary's role as the mother of Jesus Christ, who is God. It is a solemnity in the Roman Catholic Church and is celebrated on January 1st, which is also the Octave Day of Christmas. The feast emphasizes Mary's role in the mystery of the Incarnation and her importance in the life of the Church.",
    image: "/our-lady/img/feasts/1-january.jpg",
  },
  {
    name: "Our Lady of Prompt Succor",
    date: {
      day: 8,
      month: 1
    },
    description: "Feast of Our Lady of Prompt Succor. This feast commemorates the miraculous intervention of the Blessed Virgin Mary under the title of Our Lady of Prompt Succor. It is particularly celebrated in New Orleans, Louisiana, where the faithful believe that Mary interceded to save the city from fire and battle. The feast is a reminder of Mary's powerful intercession and her readiness to help those in need.",
    image: "/our-lady/img/feasts/8-january.jpg",
  },
  {
    name: "Presentation of the Lord",
    date: {
      day: 2,
      month: 2
    },
    description: "Celebration of the presentation of Jesus at the Temple. This feast, also known as Candlemas, commemorates the presentation of Jesus Christ in the Temple in Jerusalem, as described in the Gospel of Luke. It is celebrated 40 days after Christmas and marks the end of the Christmas season. The feast highlights the fulfillment of the Old Testament prophecies and the recognition of Jesus as the light of the world.",
    image: "/our-lady/img/feasts/2-february.png",
  },
  {
    name: "Our Lady of Lourdes",
    date: {
      day: 11,
      month: 2
    },
    description: "Feast of Our Lady of Lourdes. This feast commemorates the apparitions of the Blessed Virgin Mary to Saint Bernadette Soubirous in Lourdes, France, in 1858. Our Lady appeared to Bernadette 18 times, revealing herself as the Immaculate Conception. The feast is a celebration of Mary's maternal care and her call to prayer, penance, and conversion. Lourdes is now a major pilgrimage site, known for its healing waters.",
    image: "/our-lady/img/feasts/11-february.jpg",
  },
  {
    name: "Annunciation of the Lord",
    date: {
      day: 25,
      month: 3
    },
    description: "Celebration of the announcement by the angel Gabriel to the Virgin Mary. This feast commemorates the moment when the angel Gabriel announced to Mary that she would conceive and bear a son, Jesus, who would be the Savior of the world. The Annunciation is a key event in the Christian faith, marking the Incarnation of the Son of God. The feast is celebrated on March 25th, exactly nine months before Christmas.",
    image: "/our-lady/img/feasts/25-march.jpg",
  },
  {
    name: "Month of Mary, Mother of God",
    date: "May",
    description: "May is the month of Mary, the Mother of God. The month of May is dedicated to the Blessed Virgin Mary. The month of May is the 'month which the piety of the faithful has especially dedicated to Our Blessed Lady,' and it is the occasion for a moving tribute of faith and love which Catholics in every part of the world [pay] to the Queen of Heaven. During this month Christians, both in church and in the privacy of the home, offer up to Mary from their hearts an especially fervent and loving homage of prayer and veneration. In this month, too, the benefits of God's mercy come down to us from her throne in greater abundance.",
    image: "/our-lady/img/feasts/mother-of-god.jpg"
  },
  {
    name: "Our Lady of Fatima",
    date: {
      day: 13,
      month: 5
    },
    description: "Feast of Our Lady of Fatima. This feast commemorates the apparitions of the Blessed Virgin Mary to three shepherd children in Fatima, Portugal, in 1917. Mary appeared to the children six times, delivering messages of prayer, penance, and conversion. The feast is a reminder of Mary's call to repentance and her role as a messenger of God's mercy. Fatima is now a major pilgrimage site, attracting millions of visitors each year.",
    image: "/our-lady/img/feasts/13-may.jpg",
  },
  {
    name: "The Visitation",
    date: {
      day: 31,
      month: 5
    },
    description: "Celebration of the visit of Mary to Elizabeth. This feast commemorates the visit of the Blessed Virgin Mary to her cousin Elizabeth, as described in the Gospel of Luke. During the visit, Elizabeth, filled with the Holy Spirit, recognized Mary as the mother of the Lord, and Mary responded with the Magnificat, a hymn of praise to God. The feast highlights the joy of the Incarnation and the recognition of Jesus as the Savior.",
    image: "/our-lady/img/feasts/31-may.jpg",
  },
  {
    name: "Our Lady of Perpetual Help",
    date: {
      day: 27,
      month: 6
    },
    description: "Feast of Our Lady of Perpetual Help. This feast honors the Blessed Virgin Mary under the title of Our Lady of Perpetual Help, based on a famous icon of Mary holding the Child Jesus. The icon is believed to have miraculous powers and is widely venerated in the Catholic Church. The feast is a reminder of Mary's constant intercession and her role as a source of comfort and help for the faithful.",
    image: "/our-lady/img/feasts/27-june.jpg",
  },
  {
    name: "Our Lady of Mount Carmel",
    date: {
      day: 16,
      month: 7
    },
    description: "Feast of Our Lady of Mount Carmel. This feast honors the Blessed Virgin Mary under the title of Our Lady of Mount Carmel, the patroness of the Carmelite Order. The feast commemorates the apparition of Mary to Saint Simon Stock, during which she gave him the Brown Scapular, a sign of her protection. The feast is a celebration of Mary's maternal care and her promise of salvation to those who wear the scapular with devotion.",
    image: "/our-lady/img/feasts/16-july.jpg",
  },
  {
    name: "Our Lady of the Snows",
    date: {
      day: 5,
      month: 8
    },
    description: "Feast of Our Lady of the Snows. This feast commemorates the miraculous snowfall in Rome in the 4th century, which led to the construction of the Basilica of Saint Mary Major. According to tradition, the Virgin Mary appeared to a Roman couple in a dream, instructing them to build a church in her honor where the snow would fall. The feast is a celebration of Mary's intercession and her role in the life of the Church.",
    image: "/our-lady/img/feasts/5-august.webp",
  },
  {
    name: "Assumption of the Blessed Virgin Mary",
    date: {
      day: 15,
      month: 8
    },
    description: "Celebration of the Assumption of Mary into heaven. This feast commemorates the belief that the Blessed Virgin Mary was assumed body and soul into heaven at the end of her earthly life. The Assumption is a dogma of the Catholic Church, proclaimed by Pope Pius XII in 1950. The feast is a celebration of Mary's glorification and her role as the Queen of Heaven. It is one of the most important Marian feasts in the liturgical calendar.",
    image: "/our-lady/img/feasts/15-august.webp",
  },
  {
    name: "Queenship of Mary",
    date: {
      day: 22,
      month: 8
    },
    description: "Feast of the Queenship of Mary. This feast honors the Blessed Virgin Mary as the Queen of Heaven and Earth. It was established by Pope Pius XII in 1954 and is celebrated on August 22nd, eight days after the Assumption. The feast emphasizes Mary's role as the mother of the King of Kings and her participation in the glory of her Son. It is a reminder of Mary's intercession and her maternal care for all the faithful.",
    image: "/our-lady/img/feasts/22-august.jpg",
  },
  {
    name: "The Nativity of the Blessed Virgin Mary",
    date: {
      day: 8,
      month: 9
    },
    description: "Celebration of the birth of the Virgin Mary. This feast commemorates the birth of the Blessed Virgin Mary, who was chosen by God to be the mother of Jesus Christ. The feast is celebrated on September 8th, nine months after the Immaculate Conception. It is a celebration of Mary's unique role in the history of salvation and her purity and holiness from the moment of her conception. The feast is a reminder of God's plan for the redemption of humanity.",
    image: "/our-lady/img/feasts/8-september.jpg",
  },
  {
    name: "The Most Holy Name of Mary",
    date: {
      day: 12,
      month: 9
    },
    description: "Feast of the Most Holy Name of Mary. This feast honors the name of the Blessed Virgin Mary, which is a source of devotion and reverence for the faithful. The feast was established by Pope Innocent XI in 1683 to commemorate the victory of the Christian forces over the Ottoman Empire at the Battle of Vienna. The feast is a celebration of Mary's intercession and her role as a protector and advocate for the faithful. It is a reminder of the power of her name and the importance of invoking her in prayer.",
    image: "/our-lady/img/feasts/12-september.jpg",
  },
  {
    name: "Our Lady of Sorrows",
    date: {
      day: 15,
      month: 9
    },
    description: "Feast of Our Lady of Sorrows. This feast honors the Blessed Virgin Mary under the title of Our Lady of Sorrows, in recognition of the seven sorrows she endured in her life. These sorrows include the prophecy of Simeon, the flight into Egypt, the loss of the Child Jesus in the Temple, the meeting of Jesus and Mary on the way to Calvary, the crucifixion and death of Jesus, the taking down of Jesus' body from the cross, and the burial of Jesus. The feast is a reminder of Mary's suffering and her participation in the redemptive work of her Son. It is a call to reflect on the sorrows of Mary and to seek her intercession in times of trial and suffering.",
    image: "/our-lady/img/feasts/15-september.jpg",
  },
  {
    name: "Our Lady of Ransom",
    date: {
      day: 24,
      month: 9
    },
    description: "Feast of Our Lady of Ransom. This feast honors the Blessed Virgin Mary under the title of Our Lady of Ransom, in recognition of her role in the liberation of Christian captives from Muslim captivity. The feast was established by the Mercedarian Order, which was founded in the 13th century to ransom Christian captives. The feast is a celebration of Mary's intercession and her role as a liberator and protector of the faithful. It is a reminder of the importance of seeking her help in times of need and of her powerful intercession on behalf of those who are oppressed and in captivity.",
    image: "/our-lady/img/feasts/24-september.jpg",
  },
  {
    name: "Month of the Holy Rosary",
    date: "Oct",
    description: "October is the month of the Holy Rosary. The month of October is dedicated to the Holy Rosary. According to an account by fifteenth-century Dominican, Alan de la Roch, Mary appeared to St. Dominic in 1206 after he had been praying and doing severe penances because of his lack of success in combating the Albigensian heresy. Mary praised him for his valiant fight against the heretics and then gave him the Rosary as a mighty weapon, explained its uses and efficacy, and told him to preach it to others.",
    image: '/our-lady/img/feasts/rosary.jpg'
  },
  {
    name: "Our Lady of the Rosary",
    date: {
      day: 7,
      month: 10
    },
    description: "Feast of Our Lady of the Rosary. This feast honors the Blessed Virgin Mary under the title of Our Lady of the Rosary, in recognition of her role in the victory of the Christian forces over the Ottoman Empire at the Battle of Lepanto in 1571. The feast was established by Pope Pius V in 1573 and is celebrated on October 7th. The feast is a celebration of the power of the Rosary and the importance of praying the Rosary for peace and victory over evil. It is a reminder of Mary's intercession and her role as a powerful advocate for the faithful.",
    image: "/our-lady/img/feasts/7-october.webp",
  },
  {
    name: "Our Lady of the Pillar",
    date: {
      day: 12,
      month: 10
    },
    description: "Feast of Our Lady of the Pillar. This feast honors the Blessed Virgin Mary under the title of Our Lady of the Pillar, in recognition of her apparition to the Apostle James in Zaragoza, Spain, in the first century. According to tradition, Mary appeared to James on a pillar, encouraging him in his missionary work. The feast is a celebration of Mary's support and encouragement for the apostles and her role as a guide and protector for the faithful. It is a reminder of the importance of seeking her intercession and guidance in our own lives.",
    image: "/our-lady/img/feasts/12-october.jpg",
  },
  {
    name: "Presentation of the Blessed Virgin Mary",
    date: {
      day: 21,
      month: 11
    },
    description: "Celebration of the presentation of Mary at the Temple. This feast commemorates the presentation of the Blessed Virgin Mary in the Temple in Jerusalem, as described in apocryphal writings. According to tradition, Mary was presented in the Temple by her parents, Joachim and Anne, at a young age, and she remained there to be educated and prepared for her role as the mother of Jesus. The feast is a celebration of Mary's dedication to God and her unique role in the history of salvation. It is a reminder of the importance of consecrating our lives to God and seeking His will in all things.",
    image: "/our-lady/img/feasts/21-november.webp",
  },
  {
    name: "Our Lady of the Miraculous Medal",
    date: {
      day: 27,
      month: 11
    },
    description: "Feast of Our Lady of the Miraculous Medal. This feast honors the Blessed Virgin Mary under the title of Our Lady of the Miraculous Medal, in recognition of her apparitions to Saint Catherine Labouré in Paris, France, in 1830. During the apparitions, Mary revealed the design of the Miraculous Medal and promised special graces to those who wear it with faith and devotion. The feast is a celebration of Mary's maternal care and her role as a dispenser of God's graces. It is a reminder of the power of the Miraculous Medal and the importance of seeking Mary's intercession in our lives.",
    image: "/our-lady/img/feasts/27-november.jpg",
  },
  {
    name: "Immaculate Conception",
    date: {
      day: 8,
      month: 12
    },
    description: "Celebration of the Immaculate Conception of Mary. This feast commemorates the belief that the Blessed Virgin Mary was conceived without original sin, in preparation for her role as the mother of Jesus Christ. The Immaculate Conception is a dogma of the Catholic Church, proclaimed by Pope Pius IX in 1854. The feast is a celebration of Mary's purity and holiness from the moment of her conception. It is a reminder of God's plan for the redemption of humanity and the special role of Mary in that plan.",
    image: "/our-lady/img/feasts/8-december.jpg",
  },
  {
    name: "Our Lady of Guadalupe",
    date: {
      day: 12,
      month: 12
    },
    description: "Feast of Our Lady of Guadalupe. This feast commemorates the apparitions of the Blessed Virgin Mary to Saint Juan Diego in Mexico in 1531. Mary appeared to Juan Diego four times, revealing herself as the Mother of God and leaving her image on his tilma, a cloak made of cactus fiber. The feast is a celebration of Mary's maternal care and her role as the patroness of the Americas. It is a reminder of the importance of seeking her intercession and of her powerful presence in the lives of the faithful.",
    image: "/our-lady/img/feasts/12-december.jpg",
  }
]

export const other_feasts = {
  "ImmaculateHeart": {
    name: "The Immaculate Heart of Mary",
    date: "Saturday following the Second Sunday after Pentecost.",
    description: "The Immaculate Heart of Mary is a devotional name used to refer to the interior life of the Blessed Virgin Mary, her joys and sorrows, her virtues and hidden perfections, and, above all, her virginal love for God the Father, her maternal love for her son Jesus, and her compassionate love for all people. The feast of the Immaculate Heart of Mary is celebrated on the Saturday following the Second Sunday after Pentecost.",
    image: "/our-lady/img/feasts/immaculate-heart.jpg",
  }
}

export const prayers: {
  [ key: string ]: {
    id: string,
    name: string,
    description: string,
    text: string,
    image: string
  } [ ]
} = {
  "devotional": [
    {
      id: "hail-mary",
      name: "Hail Mary",
      description: "A timeless prayer that honors the Blessed Virgin Mary, combining words from Scripture and tradition. It is often recited in moments of need, providing comfort and invoking Mary's intercession.",
      text: "Hail Mary, full of grace, the Lord is with thee;\nblessed art thou among women, and blessed is the fruit of thy womb, Jesus.\nHoly Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
      image: "/our-lady/img/prayers/hail-mary.jpg",
    },
    {
      id: "angelus",
      name: "Angelus",
      description: "The Angelus commemorates the Incarnation of Jesus Christ and is traditionally prayed three times a day. It reflects on the angel Gabriel's message to Mary and her humble acceptance of God's will.",
      text: "The Angel of the Lord declared to Mary:\nAnd she conceived of the Holy Spirit.\nHail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus.\nHoly Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.\n\nBehold the handmaid of the Lord:\nBe it done unto me according to Thy word.\nHail Mary...\n\nAnd the Word was made Flesh:\nAnd dwelt among us.\nHail Mary...\n\nPray for us, O Holy Mother of God,\nthat we may be made worthy of the promises of Christ.\n\nLet us pray:\nPour forth, we beseech Thee, O Lord, Thy grace into our hearts; that we, to whom the incarnation of Christ, Thy Son, was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection, through the same Christ Our Lord. Amen.",
      image: "/our-lady/img/prayers/angelus.jpg",
    },
    {
      id: "rosary",
      name: "The Holy Rosary",
      description: "The Rosary is a meditative prayer centered on the life of Jesus Christ, combining the Our Father, Hail Mary, and Glory Be. It invites deep reflection on the Joyful, Sorrowful, Glorious, and Luminous Mysteries.",
      text: "The Rosary is a Scripture-based prayer. It begins with the Apostles' Creed, which summarizes the great mysteries of the Catholic faith.\n\nThe Our Father, which introduces each mystery, is from the Gospels. The first part of the Hail Mary is the angel's words announcing Christ's birth and Elizabeth's greeting to Mary. St. Pius V officially added the second part of the Hail Mary.\n\nThe Mysteries of the Rosary center on the events of Christ's life. There are four sets of Mysteries: Joyful, Sorrowful, Glorious, and—added by Saint John Paul II in 2002—the Luminous. The repetition in the Rosary is meant to lead one into restful and contemplative prayer related to each Mystery. The gentle repetition of the words helps us to enter into the silence of our hearts, where Christ's spirit dwells. The Rosary can be said privately or with a group.",
      image: "/our-lady/img/prayers/rosary.jpg",
    }
  ],
  "intercessory": [
    {
      id: "ave-maris-stella",
      name: "Ave Maris Stella (Hail Star of the Sea)",
      description: "This ancient hymn venerates Mary as the guiding star who leads us safely to Christ. It reflects her role as a loving intercessor and protector.",
      text: "Hail, O Star of the ocean,\nGod's own Mother blest,\never sinless Virgin,\nGate of heavenly rest.\n\nTaking that sweet Ave\nwhich from Gabriel came,\npeace confirm within us,\nchanging Eve's name.\n\nBreak the captives' fetters,\nlight on blindness pour,\nall our ills expelling,\nevery bliss implore.\n\nShow thyself a Mother;\nmay the Word divine,\nborn for us thine Infant,\nhear our prayers through thine.\n\nVirgin all excelling,\nmildest of the mild,\nfreed from guilt, preserve us,\nspotless and undefiled.\n\nKeep our life all spotless,\nmake our way secure,\ntill we find in Jesus,\njoy forevermore.\n\nThrough the highest heaven\nto the Almighty Three,\nFather, Son, and Spirit,\none same glory be. Amen.",
      image: "/our-lady/img/prayers/ave-maris-stella.jpg"
    },
    {
      id: "sub-tuum-praesidium",
      name: "Sub Tuum Praesidium",
      description: "One of the oldest known prayers to Mary, dating back to the 3rd century, this heartfelt prayer seeks her protection and intercession in times of danger and distress.",
      text: "We fly to thy patronage, O holy Mother of God;\ndespise not our petitions in our necessities,\nbut deliver us always from all dangers,\nO glorious and blessed Virgin. Amen.",
      image: "/our-lady/img/prayers/sub-tuum-praesidium.jpg",
    },
    {
      id: "memorare",
      name: "Memorare",
      description: "A prayer of trust in Mary's intercession, the Memorare reminds us of her unfailing help to those who call upon her with faith and devotion.",
      text: "Remember, O most gracious Virgin Mary,\nthat never was it known that anyone who fled to thy protection,\nimplored thy help, or sought thy intercession was left unaided.\nInspired by this confidence, I fly unto thee, O Virgin of virgins, my Mother.\nTo thee do I come, before thee I stand, sinful and sorrowful.\nO Mother of the Word Incarnate, despise not my petitions,\nbut in thy mercy hear and answer me. Amen.",
      image: "/our-lady/img/prayers/memorare.jpg",
    }
  ],
  "liturgical": [
    {
      id: "regina-coeli",
      name: "Regina Coeli (Queen of Heaven)",
      description: "A joyful Easter prayer celebrating Christ's Resurrection and the Blessed Virgin Mary's role in salvation history. Traditionally recited during the Easter season.",
      text: "Queen of Heaven, rejoice, alleluia:\nFor He whom thou didst merit to bear, alleluia,\nHath arisen as He said, alleluia.\nPray for us to God, alleluia.\n\nRejoice and be glad, O Virgin Mary, alleluia.\nFor the Lord hath risen indeed, alleluia.\n\nLet us pray.\nO God, who by the Resurrection of Thy Son, our Lord Jesus Christ, hast vouchsafed to make glad the whole world, grant, we beseech Thee, that through the intercession of the Virgin Mary, His mother, we may attain the joys of eternal life. Through the same Christ our Lord. Amen.",
      image: "/our-lady/img/prayers/regina-coeli.jpg",
    },
    {
      id: "salve-regina",
      name: "Salve Regina (Hail Holy Queen)",
      description: "A beloved Marian hymn and prayer seeking comfort and intercession from the Mother of Mercy, especially in difficult times.",
      text: "Hail, holy Queen, Mother of mercy, our life, our sweetness, and our hope.\nTo thee do we cry, poor banished children of Eve.\nTo thee do we send up our sighs, mourning and weeping in this valley of tears.\nTurn then, most gracious advocate, thine eyes of mercy toward us,\nand after this our exile, show unto us the blessed fruit of thy womb, Jesus.\nO clement, O loving, O sweet Virgin Mary.\n\nPray for us, O holy Mother of God,\nthat we may be made worthy of the promises of Christ. Amen.",
      image: "/our-lady/img/prayers/salve-regina.webp",
    },
    {
      id: "maginificat",
      name: "Magnificat",
      description: "A hymn of praise and thanksgiving uttered by Mary during her visit to Elizabeth, celebrating God's faithfulness and mercy.",
      text: "My soul magnifies the Lord,\nand my spirit rejoices in God my Savior,\nfor he has looked with favor on the lowliness of his servant.\nSurely, from now on all generations will call me blessed;\nfor the Mighty One has done great things for me, and holy is his name.\n\nHis mercy is for those who fear him from generation to generation.\nHe has shown strength with his arm;\nhe has scattered the proud in the thoughts of their hearts.\nHe has brought down the powerful from their thrones,\nand lifted up the lowly;\nhe has filled the hungry with good things,\nand sent the rich away empty.\n\nHe has helped his servant Israel in remembrance of his mercy,\naccording to the promise he made to our ancestors,\nto Abraham and to his descendants forever. Amen.",
      image: "/our-lady/img/prayers/magnificat.jpg",
    }
  ]
}

export const videos: { title: string; id: string } [ ] = [
  {
    title: "Consecration to Jesus through Mary",
    id: "6kgKbNfCPx0"
  },
  {
    title: "Mother Angelica",
    id: "YBZ4NHYRxx4"
  },
  {
    title: "The Queenship of Mary",
    id: "i0dk8F0KYxY"
  },
  {
    title: "The Servite Rosary",
    id: "WxONFCCSuyk"
  },
  {
    title: "Our Lady of Sorrows",
    id: "tDSsFn-JaXY"
  }
]

let date = new Date ( 2024, 10, 29 )
const numberOfEntries = 33
export const consecration: {
  title: string,
  link: string,
  description: string,
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