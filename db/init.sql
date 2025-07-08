DROP TABLE IF EXISTS feasts;

CREATE TABLE IF NOT EXISTS feasts (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid (),
  "category" VARCHAR(255) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "date" DATE NULL,
  "datedescription" VARCHAR(255) NULL,
  "description" TEXT,
  "url" VARCHAR(255)
);

-- Marian Feasts
INSERT INTO
  feasts (
    "category",
    "name",
    "date",
    "datedescription",
    "description",
    "url"
  )
VALUES
  (
    'our-lady',
    'Solemnity of Mary, Mother of God',
    '2024-01-01',
    NULL,
    'Celebration of Mary as the Mother of God. This feast is a celebration of Mary''s role as the mother of Jesus Christ, who is God. It is a solemnity in the Roman Catholic Church and is celebrated on January 1st, which is also the Octave Day of Christmas. The feast emphasizes Mary''s role in the mystery of the Incarnation and her importance in the life of the Church.',
    '/assets/img/feasts/1-january.jpg'
  ),
  (
    'our-lady',
    'Our Lady of Prompt Succor',
    '2024-01-08',
    NULL,
    'Feast of Our Lady of Prompt Succor. This feast commemorates the miraculous intervention of the Blessed Virgin Mary under the title of Our Lady of Prompt Succor. It is particularly celebrated in New Orleans, Louisiana, where the faithful believe that Mary interceded to save the city from fire and battle. The feast is a reminder of Mary''s powerful intercession and her readiness to help those in need.',
    '/assets/img/feasts/8-january.jpg'
  ),
  (
    'our-lady',
    'Presentation of the Lord',
    '2024-02-02',
    NULL,
    'Celebration of the presentation of Jesus at the Temple. This feast, also known as Candlemas, commemorates the presentation of Jesus Christ in the Temple in Jerusalem, as described in the Gospel of Luke. It is celebrated 40 days after Christmas and marks the end of the Christmas season. The feast highlights the fulfillment of the Old Testament prophecies and the recognition of Jesus as the light of the world.',
    '/assets/img/feasts/2-february.png'
  ),
  (
    'our-lady',
    'Our Lady of Lourdes',
    '2024-02-11',
    NULL,
    'Feast of Our Lady of Lourdes. This feast commemorates the apparitions of the Blessed Virgin Mary to Saint Bernadette Soubirous in Lourdes, France, in 1858. Our Lady appeared to Bernadette 18 times, revealing herself as the Immaculate Conception. The feast is a celebration of Mary''s maternal care and her call to prayer, penance, and conversion. Lourdes is now a major pilgrimage site, known for its healing waters.',
    '/assets/img/feasts/11-february.jpg'
  ),
  (
    'our-lady',
    'Annunciation of the Lord',
    '2024-03-25',
    NULL,
    'Celebration of the announcement by the angel Gabriel to the Virgin Mary. This feast commemorates the moment when the angel Gabriel announced to Mary that she would conceive and bear a son, Jesus, who would be the Savior of the world. The Annunciation is a key event in the Christian faith, marking the Incarnation of the Son of God. The feast is celebrated on March 25th, exactly nine months before Christmas.',
    '/assets/img/feasts/25-march.jpg'
  ),
  (
    'our-lady',
    'Month of Mary, Mother of God',
    NULL,
    'May',
    'May is the month of Mary, the Mother of God. The month of May is dedicated to the Blessed Virgin Mary. The month of May is the "month which the piety of the faithful has especially dedicated to Our Blessed Lady," and it is the occasion for a moving tribute of faith and love which Catholics in every part of the world [pay] to the Queen of Heaven. During this month Christians, both in church and in the privacy of the home, offer up to Mary from their hearts an especially fervent and loving homage of prayer and veneration. In this month, too, the benefits of God''s mercy come down to us from her throne in greater abundance.',
    '/assets/img/feasts/mother-of-god.jpg'
  ),
  (
    'our-lady',
    'Our Lady of Fatima',
    '2024-05-13',
    NULL,
    'Feast of Our Lady of Fatima. This feast commemorates the apparitions of the Blessed Virgin Mary to three shepherd children in Fatima, Portugal, in 1917. Mary appeared to the children six times, delivering messages of prayer, penance, and conversion. The feast is a reminder of Mary''s call to repentance and her role as a messenger of God''s mercy. Fatima is now a major pilgrimage site, attracting millions of visitors each year.',
    '/assets/img/feasts/13-may.jpg'
  ),
  (
    'our-lady',
    'The Visitation',
    '2024-05-31',
    NULL,
    'Celebration of the visit of Mary to Elizabeth. This feast commemorates the visit of the Blessed Virgin Mary to her cousin Elizabeth, as described in the Gospel of Luke. During the visit, Elizabeth, filled with the Holy Spirit, recognized Mary as the mother of the Lord, and Mary responded with the Magnificat, a hymn of praise to God. The feast highlights the joy of the Incarnation and the recognition of Jesus as the Savior.',
    '/assets/img/feasts/31-may.jpg'
  ),
  (
    'our-lady',
    'The Immaculate Heart of Mary',
    NULL,
    'Saturday following the Second Sunday after Pentecost.',
    'The Immaculate Heart of Mary is a devotional name used to refer to the interior life of the Blessed Virgin Mary, her joys and sorrows, her virtues and hidden perfections, and, above all, her virginal love for God the Father, her maternal love for her son Jesus, and her compassionate love for all people. The feast of the Immaculate Heart of Mary is celebrated on the Saturday following the Second Sunday after Pentecost.',
    '/assets/img/feasts/immaculate-heart.jpg'
  ),
  (
    'our-lady',
    'Our Lady of Perpetual Help',
    '2024-06-27',
    NULL,
    'Feast of Our Lady of Perpetual Help. This feast honors the Blessed Virgin Mary under the title of Our Lady of Perpetual Help, based on a famous icon of Mary holding the Child Jesus. The icon is believed to have miraculous powers and is widely venerated in the Catholic Church. The feast is a reminder of Mary''s constant intercession and her role as a source of comfort and help for the faithful.',
    '/assets/img/feasts/27-june.jpg'
  ),
  (
    'our-lady',
    'Our Lady of Mount Carmel',
    '2024-07-16',
    NULL,
    'Feast of Our Lady of Mount Carmel. This feast honors the Blessed Virgin Mary under the title of Our Lady of Mount Carmel, the patroness of the Carmelite Order. The feast commemorates the apparition of Mary to Saint Simon Stock, during which she gave him the Brown Scapular, a sign of her protection. The feast is a celebration of Mary''s maternal care and her promise of salvation to those who wear the scapular with devotion.',
    '/assets/img/feasts/16-july.jpg'
  ),
  (
    'our-lady',
    'Our Lady of the Snows',
    '2024-08-05',
    NULL,
    'Feast of Our Lady of the Snows. This feast commemorates the miraculous snowfall in Rome in the 4th century, which led to the construction of the Basilica of Saint Mary Major. According to tradition, the Virgin Mary appeared to a Roman couple in a dream, instructing them to build a church in her honor where the snow would fall. The feast is a celebration of Mary''s intercession and her role in the life of the Church.',
    '/assets/img/feasts/5-august.webp'
  ),
  (
    'our-lady',
    'Assumption of the Blessed Virgin Mary',
    '2024-08-15',
    NULL,
    'Celebration of the Assumption of Mary into heaven. This feast commemorates the belief that the Blessed Virgin Mary was assumed body and soul into heaven at the end of her earthly life. The Assumption is a dogma of the Catholic Church, proclaimed by Pope Pius XII in 1950. The feast is a celebration of Mary''s glorification and her role as the Queen of Heaven. It is one of the most important Marian feasts in the liturgical calendar.',
    '/assets/img/feasts/15-august.webp'
  ),
  (
    'our-lady',
    'Queenship of Mary',
    '2024-08-22',
    NULL,
    'Feast of the Queenship of Mary. This feast honors the Blessed Virgin Mary as the Queen of Heaven and Earth. It was established by Pope Pius XII in 1954 and is celebrated on August 22nd, eight days after the Assumption. The feast emphasizes Mary''s role as the mother of the King of Kings and her participation in the glory of her Son. It is a reminder of Mary''s intercession and her maternal care for all the faithful.',
    '/assets/img/feasts/22-august.jpg'
  ),
  (
    'our-lady',
    'The Nativity of the Blessed Virgin Mary',
    '2024-09-08',
    NULL,
    'Celebration of the birth of the Virgin Mary. This feast commemorates the birth of the Blessed Virgin Mary, who was chosen by God to be the mother of Jesus Christ. The feast is celebrated on September 8th, nine months after the Immaculate Conception. It is a celebration of Mary''s unique role in the history of salvation and her purity and holiness from the moment of her conception. The feast is a reminder of God''s plan for the redemption of humanity.',
    '/assets/img/feasts/8-september.jpg'
  ),
  (
    'our-lady',
    'The Most Holy Name of Mary',
    '2024-09-12',
    NULL,
    'Feast of the Most Holy Name of Mary. This feast honors the name of the Blessed Virgin Mary, which is a source of devotion and reverence for the faithful. The feast was established by Pope Innocent XI in 1683 to commemorate the victory of the Christian forces over the Ottoman Empire at the Battle of Vienna. The feast is a celebration of Mary''s intercession and her role as a protector and advocate for the faithful. It is a reminder of the power of her name and the importance of invoking her in prayer.',
    '/assets/img/feasts/12-september.jpg'
  ),
  (
    'our-lady',
    'Our Lady of Sorrows',
    '2024-09-15',
    NULL,
    'Feast of Our Lady of Sorrows. This feast honors the Blessed Virgin Mary under the title of Our Lady of Sorrows, in recognition of the seven sorrows she endured in her life. These sorrows include the prophecy of Simeon, the flight into Egypt, the loss of the Child Jesus in the Temple, the meeting of Jesus and Mary on the way to Calvary, the crucifixion and death of Jesus, the taking down of Jesus'' body from the cross, and the burial of Jesus. The feast is a reminder of Mary''s suffering and her participation in the redemptive work of her Son. It is a call to reflect on the sorrows of Mary and to seek her intercession in times of trial and suffering.',
    '/assets/img/feasts/15-september.jpg'
  ),
  (
    'our-lady',
    'Our Lady of Ransom',
    '2024-09-24',
    NULL,
    'Feast of Our Lady of Ransom. This feast honors the Blessed Virgin Mary under the title of Our Lady of Ransom, in recognition of her role in the liberation of Christian captives from Muslim captivity. The feast was established by the Mercedarian Order, which was founded in the 13th century to ransom Christian captives. The feast is a celebration of Mary''s intercession and her role as a liberator and protector of the faithful. It is a reminder of the importance of seeking her help in times of need and of her powerful intercession on behalf of those who are oppressed and in captivity.',
    '/assets/img/feasts/24-september.jpg'
  ),
  (
    'our-lady',
    'Month of the Holy Rosary',
    NULL,
    'October',
    'October is the month of the Holy Rosary. The month of October is dedicated to the Holy Rosary. According to an account by fifteenth-century Dominican, Alan de la Roch, Mary appeared to St. Dominic in 1206 after he had been praying and doing severe penances because of his lack of success in combating the Albigensian heresy. Mary praised him for his valiant fight against the heretics and then gave him the Rosary as a mighty weapon, explained its uses and efficacy, and told him to preach it to others.',
    '/assets/img/feasts/rosary.jpg'
  ),
  (
    'our-lady',
    'Our Lady of the Rosary',
    '2024-10-07',
    NULL,
    'Feast of Our Lady of the Rosary. This feast honors the Blessed Virgin Mary under the title of Our Lady of the Rosary, in recognition of her role in the victory of the Christian forces over the Ottoman Empire at the Battle of Lepanto in 1571. The feast was established by Pope Pius V in 1573 and is celebrated on October 7th. The feast is a celebration of the power of the Rosary and the importance of praying the Rosary for peace and victory over evil. It is a reminder of Mary''s intercession and her role as a powerful advocate for the faithful.',
    '/assets/img/feasts/7-october.webp'
  ),
  (
    'our-lady',
    'Our Lady of the Pillar',
    '2024-10-12',
    NULL,
    'Feast of Our Lady of the Pillar. This feast honors the Blessed Virgin Mary under the title of Our Lady of the Pillar, in recognition of her apparition to the Apostle James in Zaragoza, Spain, in the first century. According to tradition, Mary appeared to James on a pillar, encouraging him in his missionary work. The feast is a celebration of Mary''s support and encouragement for the apostles and her role as a guide and protector for the faithful. It is a reminder of the importance of seeking her intercession and guidance in our own lives.',
    '/assets/img/feasts/12-october.jpg'
  ),
  (
    'our-lady',
    'Presentation of the Blessed Virgin Mary',
    '2024-11-21',
    NULL,
    'Celebration of the presentation of Mary at the Temple. This feast commemorates the presentation of the Blessed Virgin Mary in the Temple in Jerusalem, as described in apocryphal writings. According to tradition, Mary was presented in the Temple by her parents, Joachim and Anne, at a young age, and she remained there to be educated and prepared for her role as the mother of Jesus. The feast is a celebration of Mary''s dedication to God and her unique role in the history of salvation. It is a reminder of the importance of consecrating our lives to God and seeking His will in all things.',
    '/assets/img/feasts/21-november.webp'
  ),
  (
    'our-lady',
    'Our Lady of the Miraculous Medal',
    '2024-11-27',
    NULL,
    'Feast of Our Lady of the Miraculous Medal. This feast honors the Blessed Virgin Mary under the title of Our Lady of the Miraculous Medal, in recognition of her apparitions to Saint Catherine Labouré in Paris, France, in 1830. During the apparitions, Mary revealed the design of the Miraculous Medal and promised special graces to those who wear it with faith and devotion. The feast is a celebration of Mary''s maternal care and her role as a dispenser of God''s graces. It is a reminder of the power of the Miraculous Medal and the importance of seeking Mary''s intercession in our lives.',
    '/assets/img/feasts/27-november.jpg'
  ),
  (
    'our-lady',
    'Immaculate Conception',
    '2024-12-08',
    NULL,
    'Celebration of the Immaculate Conception of Mary. This feast commemorates the belief that the Blessed Virgin Mary was conceived without original sin, in preparation for her role as the mother of Jesus Christ. The Immaculate Conception is a dogma of the Catholic Church, proclaimed by Pope Pius IX in 1854. The feast is a celebration of Mary''s purity and holiness from the moment of her conception. It is a reminder of God''s plan for the redemption of humanity and the special role of Mary in that plan.',
    '/assets/img/feasts/8-december.jpg'
  ),
  (
    'our-lady',
    'Our Lady of Guadalupe',
    '2024-12-12',
    NULL,
    'Feast of Our Lady of Guadalupe. This feast commemorates the apparitions of the Blessed Virgin Mary to Saint Juan Diego in Mexico in 1531. Mary appeared to Juan Diego four times, revealing herself as the Mother of God and leaving her image on his tilma, a cloak made of cactus fiber. The feast is a celebration of Mary''s maternal care and her role as the patroness of the Americas. It is a reminder of the importance of seeking her intercession and of her powerful presence in the lives of the faithful.',
    '/assets/img/feasts/12-december.jpg'
  );

-- Christological Feast Days
INSERT INTO
  feasts (
    "category",
    "name",
    "date",
    "datedescription",
    "description",
    "url"
  )
VALUES
  (
    'our-lord',
    'Nativity of the Lord',
    '2024-12-25',
    NULL,
    'Celebration of the birth of Jesus Christ. This feast marks the Incarnation of the Son of God and is one of the most important celebrations in the Christian liturgical calendar. It is a reminder of God''s love for humanity and the fulfillment of the prophecies of the Old Testament.',
    '/assets/img/feasts/25-december.jpg'
  ),
  (
    'our-lord',
    'The Holy Name of Jesus',
    '2024-01-03',
    NULL,
    'Celebration of the Holy Name of Jesus. This feast honors the name of Jesus, which means "God saves." It is a reminder of the power and significance of the name of Jesus and the importance of invoking His name in prayer and devotion.',
    '/assets/img/feasts/3-january.jpg'
  ),
  (
    'our-lord',
    'Epiphany',
    '2024-01-06',
    NULL,
    'Celebration of the revelation of Christ to the Gentiles. This feast commemorates the visit of the Magi to the infant Jesus and is a reminder of the universality of Christ''s mission and the manifestation of His divinity to the world.',
    '/assets/img/feasts/6-january.jpg'
  ),
  (
    'our-lord',
    'Baptism of the Lord',
    '2024-01-07',
    NULL,
    'Celebration of the Baptism of Jesus by John the Baptist in the Jordan River. This feast marks the end of the Christmas season and the beginning of Jesus'' public ministry. It is a reminder of the importance of baptism and the revelation of Jesus as the Son of God.',
    '/assets/img/feasts/7-january.webp'
  ),
  (
    'our-lord',
    'Presentation of the Lord (Candlemas)',
    '2024-02-02',
    NULL,
    'Celebration of the presentation of Jesus at the Temple. This feast, also known as Candlemas, commemorates the presentation of Jesus Christ in the Temple in Jerusalem, as described in the Gospel of Luke. It is celebrated 40 days after Christmas and marks the end of the Christmas season. The feast highlights the fulfillment of the Old Testament prophecies and the recognition of Jesus as the light of the world.',
    '/assets/img/feasts/2-february.webp'
  ),
  (
    'our-lord',
    'Holy Thursday',
    NULL,
    'Thursday before Easter',
    'Commemoration of the Last Supper of Jesus Christ with His apostles. This feast marks the institution of the Eucharist and the priesthood. It is a reminder of Jesus'' commandment to love one another and His example of humble service.',
    '/assets/img/feasts/28-march.jpg'
  ),
  (
    'our-lord',
    'Good Friday',
    NULL,
    'Friday before Easter',
    'Commemoration of the Passion and Crucifixion of Jesus Christ. This solemn day is a reminder of the sacrifice of Jesus for the redemption of humanity and the depth of God''s love for us. It is observed with fasting, prayer, and reflection on the suffering and death of Christ.',
    '/assets/img/feasts/29-march.jpg'
  ),
  (
    'our-lord',
    'Resurrection of the Lord',
    NULL,
    'Variable',
    'Celebration of the Resurrection of Jesus Christ from the dead. This feast is the culmination of the Paschal Triduum and the most important celebration in the Christian liturgical calendar. It is a reminder of the victory of Christ over sin and death and the promise of eternal life for all who believe in Him.',
    '/assets/img/feasts/31-march.jpg'
  ),
  (
    'our-lord',
    'Ascension of the Lord',
    NULL,
    '40 days after Easter',
    'Celebration of the Ascension of Jesus Christ into heaven. This feast commemorates the moment when Jesus ascended to the right hand of the Father, 40 days after His Resurrection. It is a reminder of Christ''s exaltation and His promise to send the Holy Spirit to guide and empower the Church.',
    '/assets/img/feasts/9-may.webp'
  ),
  (
    'our-lord',
    'Pentecost',
    NULL,
    '50 days after Easter',
    'Celebration of the descent of the Holy Spirit upon the apostles. This feast marks the birth of the Church and the beginning of its mission to spread the Gospel to all nations. It is a reminder of the power and presence of the Holy Spirit in the life of the Church and the believer.',
    '/assets/img/feasts/19-may.jpg'
  ),
  (
    'our-lord',
    'Holy Trinity Sunday',
    NULL,
    'First Sunday after Pentecost',
    'Celebration of the Holy Trinity: Father, Son, and Holy Spirit. This feast honors the central mystery of the Christian faith and the unity of the three divine Persons in one God. It is a reminder of the importance of the Trinity in the life of the Church and the believer.',
    '/assets/img/feasts/26-may.jpg'
  ),
  (
    'our-lord',
    'Corpus Christi',
    NULL,
    'Thursday after Trinity Sunday',
    'Celebration of the Real Presence of Jesus Christ in the Eucharist. This feast honors the Body and Blood of Christ and is a reminder of the sacrificial love of Jesus and the importance of the Eucharist in the life of the Church.',
    '/assets/img/feasts/2-june.png'
  ),
  (
    'our-lord',
    'Sacred Heart of Jesus',
    NULL,
    'Friday after the second Sunday after Pentecost',
    'Celebration of the love and compassion of the Heart of Jesus. This feast honors the physical heart of Jesus as a symbol of His divine love for humanity. It is a reminder of the boundless mercy and love of Christ and the importance of devotion to His Sacred Heart.',
    '/assets/img/feasts/7-june.png'
  ),
  (
    'our-lord',
    'Transfiguration',
    '2024-08-06',
    NULL,
    'Celebration of the Transfiguration of Jesus on Mount Tabor. This feast commemorates the moment when Jesus revealed His divine glory to Peter, James, and John. It is a reminder of the divinity of Christ and the promise of eternal life for those who follow Him.',
    '/assets/img/feasts/6-august.jpg'
  ),
  (
    'our-lord',
    'Exaltation of the Holy Cross',
    '2024-09-14',
    NULL,
    'Celebration of the discovery of the True Cross by Saint Helena and the dedication of the Church of the Holy Sepulchre. This feast is a reminder of the redemptive power of the Cross and the victory of Christ over sin and death.',
    '/assets/img/feasts/14-september.jpg'
  ),
  (
    'our-lord',
    'Christ the King',
    NULL,
    'Last Sunday of Ordinary Time',
    'Celebration of the sovereignty of Christ over all creation. This feast was established by Pope Pius XI in 1925 to remind the faithful of the kingship of Christ and His ultimate authority over all earthly powers. It is celebrated on the last Sunday of the liturgical year.',
    '/assets/img/feasts/24-november.jpg'
  );

-- Angelic Feast Days
INSERT INTO
  feasts (
    "category",
    "name",
    "date",
    "datedescription",
    "description",
    "url"
  )
VALUES
  (
    'angelic',
    'St. Michael the Archangel’s Apparition',
    '2024-05-08',
    NULL,
    'Commemoration of the apparition of St. Michael the Archangel. This optional feast commemorates the apparition of St. Michael on Mount Gargano in Italy in the 5th century. It is a reminder of St. Michael''s role as a protector and defender of the Church.',
    '/assets/img/feasts/8-may.jpg'
  ),
  (
    'angelic',
    'Archangels Michael, Gabriel, and Raphael',
    '2024-09-29',
    NULL,
    'Celebration of the Archangels Michael, Gabriel, and Raphael. This feast honors the three archangels who are mentioned by name in the Bible. Michael is known as the protector and leader of the heavenly armies, Gabriel as the messenger of God, and Raphael as the healer. The feast is a reminder of the powerful intercession and protection of the archangels.',
    '/assets/img/feasts/29-september.webp'
  ),
  (
    'angelic',
    'The Guardian Angels',
    '2024-10-02',
    NULL,
    'Celebration of the Guardian Angels. This feast honors the guardian angels who are believed to protect and guide individuals throughout their lives. It is a reminder of God''s loving care and the presence of the angels in our daily lives.',
    '/assets/img/feasts/2-october.jpg'
  );

-- Martyrs Feast Days
INSERT INTO
  feasts (
    "category",
    "name",
    "date",
    "datedescription",
    "description",
    "url"
  )
VALUES
  (
    'martyrs',
    'St. Stephen (Protomartyr)',
    '2024-12-26',
    NULL,
    'The Feast of St. Stephen honors the first Christian martyr, celebrated for his unwavering faith and his role as a deacon in the early Church. His courageous witness to Christ, even in the face of persecution, serves as an enduring example of selfless devotion to God.',
    '/assets/img/feasts/26-december.jpg'
  ),
  (
    'martyrs',
    'The Holy Innocents',
    '2024-12-28',
    NULL,
    'This feast commemorates the innocent children slain by King Herod in his attempt to eliminate the infant Jesus. These young martyrs are venerated as symbols of purity and sacrifice, who bore witness to Christ through their tragic deaths.',
    '/assets/img/feasts/28-december.jpg'
  ),
  (
    'martyrs',
    'St. Thomas Becket',
    '2024-12-29',
    NULL,
    'The Feast of St. Thomas Becket commemorates the Archbishop of Canterbury who courageously defended the Church against state interference, ultimately sacrificing his life as a martyr for the faith.',
    '/assets/img/feasts/29-december.jpg'
  ),
  (
    'martyrs',
    'St. Sebastian',
    '2024-01-20',
    NULL,
    'The Feast of St. Sebastian honors the Roman soldier and martyr who remained steadfast in his faith despite severe persecution. He is remembered as a symbol of strength and resilience and is revered as the patron saint of athletes.',
    '/assets/img/feasts/20-january.webp'
  ),
  (
    'martyrs',
    'St. Agnes',
    '2024-01-21',
    NULL,
    'The Feast of St. Agnes celebrates the life of a young Roman martyr renowned for her purity and steadfast faith. She is a patron of virgins and a powerful example of courage in the face of persecution during the early Christian era.',
    '/assets/img/feasts/21-january.jpg'
  ),
  (
    'martyrs',
    'St. Polycarp',
    '2024-02-23',
    NULL,
    'This feast celebrates St. Polycarp, an early Christian bishop and disciple of St. John the Apostle. His martyrdom, marked by unwavering fidelity to Christ, has made him a beloved figure in the history of the Church.',
    '/assets/img/feasts/23-february.jpg'
  ),
  (
    'martyrs',
    'Sts. Perpetua and Felicity',
    '2024-03-07',
    NULL,
    'This feast commemorates the heroic martyrdom of Sts. Perpetua and Felicity, two young women who stood firm in their faith despite brutal persecution in Carthage. Their story inspires countless Christians with its testimony of unwavering love for Christ.',
    '/assets/img/feasts/7-march.webp'
  ),
  (
    'martyrs',
    'Sts. Peter and Paul',
    '2024-06-29',
    NULL,
    'The Feast of Sts. Peter and Paul honors these two great apostles who laid the foundation of the early Church. Both were martyred for their faith, and their lives exemplify steadfast commitment to spreading the Gospel.',
    '/assets/img/feasts/29-june.jpg'
  ),
  (
    'martyrs',
    'St. Lawrence',
    '2024-08-10',
    NULL,
    'The Feast of St. Lawrence honors a deacon of the Church in Rome who was martyred for his faith. He is celebrated for his profound charity, courage, and the legendary serenity he displayed during his martyrdom.',
    '/assets/img/feasts/10-august.jpg'
  ),
  (
    'martyrs',
    'St. Maximilian Kolbe',
    '2024-08-14',
    NULL,
    'This feast celebrates St. Maximilian Kolbe, a Polish Franciscan priest who offered his life in exchange for a fellow prisoner at Auschwitz. His profound act of self-sacrifice and deep devotion to Mary exemplify the essence of Christian love.',
    '/assets/img/feasts/14-august.webp'
  ),
  (
    'martyrs',
    'Beheading of St. John the Baptist',
    '2024-08-29',
    NULL,
    'This feast recalls the martyrdom of St. John the Baptist, whose fearless proclamation of truth and unwavering dedication to God cost him his life. He remains an enduring witness to the call of justice and holiness.',
    '/assets/img/feasts/29-august.jpg'
  ),
  (
    'martyrs',
    'St. Bartholomew',
    '2024-08-24',
    NULL,
    'The Feast of St. Bartholomew celebrates one of the twelve apostles, who courageously spread the Gospel and suffered martyrdom. His life is a testament to the transformative power of faith in Christ.',
    '/assets/img/feasts/24-august.jpg'
  ),
  (
    'martyrs',
    'Sts. Cosmas and Damian',
    '2024-09-26',
    NULL,
    'This feast honors Sts. Cosmas and Damian, twin brothers who were physicians and martyrs. Known for their charity and healing, they inspire the faithful with their dedication to both physical and spiritual well-being.',
    '/assets/img/feasts/26-september.jpg'
  ),
  (
    'martyrs',
    'St. Cecilia',
    '2024-11-22',
    NULL,
    'The Feast of St. Cecilia celebrates the patroness of musicians, who is revered for her unwavering faith and her inspiring devotion to Christ, even in the face of martyrdom.',
    '/assets/img/feasts/22-november.jpg'
  ),
  (
    'martyrs',
    'St. Andrew Dung-Lac and Companions',
    '2024-11-24',
    NULL,
    'This feast honors St. Andrew Dung-Lac, a Vietnamese priest, and his companions who were martyred for their faith. They exemplify the enduring strength of the Church in the face of intense persecution.',
    '/assets/img/feasts/24-november.webp'
  );

DROP TABLE IF EXISTS prayers;

CREATE TABLE IF NOT EXISTS prayers (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "category" VARCHAR(255) NOT NULL,
  "prayer_category" VARCHAR(255) NOT NULL,
  "key" VARCHAR(255) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "description" TEXT,
  "text" TEXT,
  "url" VARCHAR(255)
);

-- Prayers to Our Lady
INSERT INTO
  prayers (
    "category",
    "prayer_category",
    "key",
    "name",
    "description",
    "text",
    "url"
  )
VALUES
  (
    'our-lady',
    'devotional',
    'hail-mary',
    'Hail Mary',
    'A timeless prayer that honors the Blessed Virgin Mary, combining words from Scripture and tradition. It is often recited in moments of need, providing comfort and invoking Mary''s intercession.',
    'Hail Mary, full of grace, the Lord is with thee;\nblessed art thou among women, and blessed is the fruit of thy womb, Jesus.\nHoly Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
    '/assets/img/prayers/hail-mary.jpg'
  ),
  (
    'our-lady',
    'devotional',
    'angelus',
    'Angelus',
    'The Angelus commemorates the Incarnation of Jesus Christ and is traditionally prayed three times a day. It reflects on the angel Gabriel''s message to Mary and her humble acceptance of God''s will.',
    'The Angel of the Lord declared to Mary:\nAnd she conceived of the Holy Spirit.\nHail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus.\nHoly Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.\n\nBehold the handmaid of the Lord:\nBe it done unto me according to thy word.\nHail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus.\nHoly Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.\n\nAnd the Word was made Flesh:\nAnd dwelt among us.\nHail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus.\nHoly Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.\n\nPray for us, O Holy Mother of God,\nthat we may be made worthy of the promises of Christ.\n\nLet us pray:\nPour forth, we beseech Thee, O Lord, Thy grace into our hearts; that we, to whom the Incarnation of Christ, Thy Son, was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection, through the same Christ Our Lord. Amen.',
    '/assets/img/prayers/angelus.jpg'
  ),
  (
    'our-lady',
    'devotional',
    'rosary',
    'The Holy Rosary',
    'The Rosary is a meditative prayer centered on the life of Jesus Christ, combining the Our Father, Hail Mary, and Glory Be. It invites deep reflection on the Joyful, Sorrowful, Glorious, and Luminous Mysteries.',
    'The Rosary is a Scripture-based prayer. It begins with the Apostles'' Creed, which summarizes the great mysteries of the Catholic faith.\n\nThe Our Father, which introduces each mystery, is from the Gospels. The first part of the Hail Mary is the angel''s words announcing Christ''s birth and Elizabeth''s greeting to Mary. St. Pius V officially added the second part of the Hail Mary.\n\nThe Mysteries of the Rosary center on the events of Christ''s life. There are four sets of Mysteries: Joyful, Sorrowful, Glorious, and—added by Saint John Paul II in 2002—the Luminous. The repetition in the Rosary is meant to lead one into restful and contemplative prayer related to each Mystery. The gentle repetition of the words helps us to enter into the silence of our hearts, where Christ''s spirit dwells. The Rosary can be said privately or with a group.',
    '/assets/img/prayers/rosary.jpg'
  ),
  (
    'our-lady',
    'intercessory',
    'ave-maris-stella',
    'Ave Maris Stella (Hail Star of the Sea)',
    'This ancient hymn venerates Mary as the guiding star who leads us safely to Christ. It reflects her role as a loving intercessor and protector.',
    'Hail, O Star of the ocean,\nGod''s own Mother blest,\never sinless Virgin,\nGate of heavenly rest.\n\nTaking that sweet Ave\nwhich from Gabriel came,\npeace confirm within us,\nchanging Eve''s name.\n\nBreak the captives'' fetters,\nlight on blindness pour,\nall our ills expelling,\nevery bliss implore.\n\nShow thyself a Mother;\nmay the Word divine,\nborn for us thine Infant,\nhear our prayers through thine.\n\nVirgin all excelling,\nmildest of the mild,\nfreed from guilt, preserve us,\nspotless and undefiled.\n\nKeep our life all spotless,\nmake our way secure,\ntill we find in Jesus,\njoy forevermore.\n\nThrough the highest heaven\nto the Almighty Three,\nFather, Son, and Spirit,\none same glory be. Amen.',
    '/assets/img/prayers/ave-maris-stella.jpg'
  ),
  (
    'our-lady',
    'intercessory',
    'sub-tuum-praesidium',
    'Sub Tuum Praesidium',
    'One of the oldest known prayers to Mary, dating back to the 3rd century, this heartfelt prayer seeks her protection and intercession in times of danger and distress.',
    'We fly to thy patronage, O holy Mother of God;\ndespise not our petitions in our necessities,\nbut deliver us always from all dangers,\nO glorious and blessed Virgin. Amen.',
    '/assets/img/prayers/sub-tuum-praesidium.jpg'
  ),
  (
    'our-lady',
    'intercessory',
    'memorare',
    'Memorare',
    'A prayer of trust in Mary''s intercession, the Memorare reminds us of her unfailing help to those who call upon her with faith and devotion.',
    'Remember, O most gracious Virgin Mary,\nthat never was it known that anyone who fled to thy protection,\nimplored thy help, or sought thy intercession was left unaided.\nInspired by this confidence, I fly unto thee, O Virgin of virgins, my Mother.\nTo thee do I come, before thee I stand, sinful and sorrowful.\nO Mother of the Word Incarnate, despise not my petitions,\nbut in thy mercy hear and answer me. Amen.',
    '/assets/img/prayers/memorare.jpg'
  ),
  (
    'our-lady',
    'liturgical',
    'regina-coeli',
    'Regina Coeli (Queen of Heaven)',
    'A joyful Easter prayer celebrating Christ''s Resurrection and the Blessed Virgin Mary''s role in salvation history. Traditionally recited during the Easter season.',
    'Queen of Heaven, rejoice, alleluia:\nFor He whom thou didst merit to bear, alleluia,\nHath arisen as He said, alleluia.\nPray for us to God, alleluia.\n\nRejoice and be glad, O Virgin Mary, alleluia.\nFor the Lord hath risen indeed, alleluia.\n\nLet us pray.\nO God, who by the Resurrection of Thy Son, our Lord Jesus Christ, hast vouchsafed to make glad the whole world, grant, we beseech Thee, that through the intercession of the Virgin Mary, His mother, we may attain the joys of eternal life. Through the same Christ our Lord. Amen.',
    '/assets/img/prayers/regina-coeli.jpg'
  ),
  (
    'our-lady',
    'liturgical',
    'salve-regina',
    'Salve Regina (Hail Holy Queen)',
    'A beloved Marian hymn and prayer seeking comfort and intercession from the Mother of Mercy, especially in difficult times.',
    'Hail, holy Queen, Mother of mercy, our life, our sweetness, and our hope.\nTo thee do we cry, poor banished children of Eve.\nTo thee do we send up our sighs, mourning and weeping in this valley of tears.\nTurn then, most gracious advocate, thine eyes of mercy toward us,\nand after this our exile, show unto us the blessed fruit of thy womb, Jesus.\nO clement, O loving, O sweet Virgin Mary.\n\nPray for us, O holy Mother of God,\nthat we may be made worthy of the promises of Christ. Amen.',
    '/assets/img/prayers/salve-regina.webp'
  ),
  (
    'our-lady',
    'liturgical',
    'maginificat',
    'Magnificat',
    'A hymn of praise and thanksgiving uttered by Mary during her visit to Elizabeth, celebrating God''s faithfulness and mercy.',
    'My soul magnifies the Lord,\nand my spirit rejoices in God my Savior,\nfor he has looked with favor on the lowliness of his servant.\nSurely, from now on all generations will call me blessed;\nfor the Mighty One has done great things for me, and holy is his name.\n\nHis mercy is for those who fear him from generation to generation.\nHe has shown strength with his arm;\nhe has scattered the proud in the thoughts of their hearts.\nHe has brought down the powerful from their thrones,\nand lifted up the lowly;\nhe has filled the hungry with good things,\nand sent the rich away empty.\n\nHe has helped his servant Israel in remembrance of his mercy,\naccording to the promise he made to our ancestors,\nto Abraham and to his descendants forever. Amen.',
    '/assets/img/prayers/magnificat.jpg'
  );

INSERT INTO
  prayers (
    "category",
    "prayer_category",
    "key",
    "name",
    "description",
    "text",
    "url"
  )
VALUES
  -- Christological Prayers
  (
    'our-lord',
    'devotional',
    'jesus-prayer',
    'The Jesus Prayer',
    'A simple and powerful prayer invoking the name of Jesus for mercy and guidance, commonly used in contemplative Christian traditions.',
    'Lord Jesus Christ, Son of God, have mercy on me, a sinner.',
    '/assets/img/prayers/jesus-prayer.jpg'
  ),
  (
    'our-lord',
    'devotional',
    'anima-christi',
    'Anima Christi (Soul of Christ)',
    'A prayer of union with Christ, asking for His protection, guidance, and presence in times of need.',
    'Soul of Christ, sanctify me.\nBody of Christ, save me.\nBlood of Christ, inebriate me.\nWater from the side of Christ, wash me.\nPassion of Christ, strengthen me.\nO good Jesus, hear me.\nWithin Thy wounds hide me.\nPermit me not to be separated from Thee.\nFrom the wicked foe, defend me.\nAt the hour of my death, call me\nAnd bid me come to Thee,\nThat with Thy saints I may praise Thee\nForever and ever. Amen.',
    '/assets/img/prayers/anima-christi.jpg'
  ),
  (
    'our-lord',
    'devotional',
    'prayer-to-sacred-heart',
    'Prayer to the Sacred Heart of Jesus',
    'A prayer honoring the Sacred Heart of Jesus, a symbol of His divine love and mercy, asking for grace and protection.',
    'O most holy Heart of Jesus, fountain of every blessing, I adore You, I love You, and with a lively sorrow for my sins, I offer You this poor heart of mine. Make me humble, patient, pure, and wholly obedient to Your will. Grant, Good Jesus, that I may live in You and for You. Amen.',
    '/assets/img/prayers/sacred-heart.jpg'
  ),
  (
    'our-lord',
    'intercessory',
    'prayer-to-crucified-christ',
    'Prayer to the Crucified Christ',
    'A heartfelt prayer seeking the intercession and mercy of Christ crucified.',
    'Behold, O kind and most sweet Jesus, I cast myself on my knees in Your sight, and with the most fervent desire of my soul, I pray and beseech You to impress upon my heart lively sentiments of faith, hope, and charity, with true repentance for my sins, and a firm purpose of amendment. Amen.',
    '/assets/img/prayers/crucified-christ.jpg'
  ),
  (
    'our-lord',
    'intercessory',
    'prayer-before-crucifix',
    'Prayer Before a Crucifix',
    'A prayer of reflection and devotion before the image of the crucified Christ, seeking grace and salvation.',
    'Look down upon me, good and gentle Jesus, while before Your face I humbly kneel, and with burning soul, I pray and beseech You to fix deep in my heart lively sentiments of faith, hope, and charity, true contrition for my sins, and a firm purpose of amendment. Amen.',
    '/assets/img/prayers/prayer-before-crucifix.webp'
  ),
  (
    'our-lord',
    'intercessory',
    'prayer-to-holy-name',
    'Prayer to the Holy Name of Jesus',
    'A prayer invoking the power of the Holy Name of Jesus for protection, guidance, and salvation.',
    'O Lord Jesus Christ, You have said, "Ask and you shall receive; seek and you shall find; knock and it shall be opened to you." Through the intercession of Your most holy Name, grant us the grace to ask with confidence, seek with humility, and find Your everlasting presence in our lives. Amen.',
    '/assets/img/prayers/holy-name.jpg'
  ),
  (
    'our-lord',
    'liturgical',
    'divine-mercy-chaplet',
    'Divine Mercy Chaplet',
    'A prayer revealed to St. Faustina Kowalska, imploring God’s mercy for the whole world and for personal salvation.',
    'Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, our Lord Jesus Christ, in atonement for our sins and those of the whole world. For the sake of His sorrowful Passion, have mercy on us and on the whole world. (Recited on rosary beads with specific prayers for each decade.)',
    '/assets/img/prayers/divine-mercy.jpg'
  ),
  (
    'our-lord',
    'liturgical',
    'act-of-contrition',
    'Act of Contrition',
    'A penitential prayer asking for God’s forgiveness and expressing sorrow for sins committed, with a firm resolution to amend life.',
    'O my God, I am heartily sorry for having offended You, and I detest all my sins because I dread the loss of Heaven and the pains of Hell, but most of all because they offend You, my God, who are all good and deserving of all my love. I firmly resolve, with the help of Your grace, to confess my sins, to do penance, and to amend my life. Amen.',
    '/assets/img/prayers/act-of-contrition.webp'
  );

INSERT INTO
  prayers (
    "category",
    "prayer_category",
    "key",
    "name",
    "description",
    "text",
    "url"
  )
VALUES
  -- Angelic Prayers
  (
    'angelic',
    'devotional',
    'prayer-to-guardian-angel',
    'Prayer to Guardian Angel',
    'A beautiful prayer asking for the protection and guidance of one’s guardian angel.',
    'Angel of God, my guardian dear,\nTo whom God’s love commits me here,\nEver this day, be at my side,\nTo light and guard, to rule and guide. Amen.',
    '/assets/img/prayers/guardian-angel.jpg'
  ),
  (
    'angelic',
    'devotional',
    'prayer-to-st-gabriel',
    'Prayer to St. Gabriel',
    'A prayer honoring St. Gabriel the Archangel, the messenger of God, asking for his guidance and intercession.',
    'O Blessed Archangel Gabriel, we beseech you to intercede for us at the throne of divine mercy. As you announced the Incarnation to Mary, help us to proclaim the Good News of Christ to all we meet. Amen.',
    '/assets/img/prayers/st-gabriel.jpg'
  ),
  (
    'angelic',
    'devotional',
    'prayer-to-st-raphael',
    'Prayer to St. Raphael',
    'A prayer seeking St. Raphael’s assistance in healing and protection.',
    'Blessed Saint Raphael, Archangel,\nWe beseech you to help us in all our needs and trials of this life,\nAs you once helped Tobias in his journey.\nHelp us to heal both body and soul, O great messenger of God. Amen.',
    '/assets/img/prayers/st-raphael.jpg'
  ),
  (
    'angelic',
    'liturgical',
    'prayer-to-seraphim',
    'Prayer to the Seraphim',
    'A prayer to the Seraphim, the highest choir of angels, asking for their intercession to inflame our hearts with love for God.',
    'O fiery Seraphim, who burn with the purest love of God and are closest to His throne, intercede for us that we may be consumed by the same divine fire of charity. Inspire us to live holy lives, ever seeking the glory of God. Amen.',
    '/assets/img/prayers/seraphim.jpg'
  ),
  (
    'angelic',
    'liturgical',
    'prayer-to-archangels',
    'Prayer to the Archangels',
    'A prayer honoring Sts. Michael, Gabriel, and Raphael, asking for their protection, guidance, and healing in all aspects of life.',
    'Heavenly King, You have given us archangels to assist us during our pilgrimage on earth. St. Michael is our protector; I ask him to come to my aid, fight for all my loved ones, and protect us from danger. St. Gabriel is a messenger of the Good News; I ask him to help me clearly hear Your voice and to teach me the truth. St. Raphael is the healing angel; I ask him to take my need for healing and that of everyone I know, lift it up to Your throne of grace, and deliver back to us the gift of recovery. Amen.',
    '/assets/img/prayers/archangels.jpg'
  );

INSERT INTO
  prayers (
    "category",
    "prayer_category",
    "key",
    "name",
    "description",
    "text",
    "url"
  )
VALUES
  -- Martyr Prayers
  (
    'martyrs',
    'intercessory',
    'prayer-to-st-lawrence',
    'Prayer to St. Lawrence',
    'A prayer to St. Lawrence, a deacon and martyr, seeking his intercession and courage in the face of trials.',
    'O glorious St. Lawrence, who served the poor and gave your life for the love of Christ, intercede for us that we may love God and neighbor with all our hearts. Help us to endure trials with courage and joy. Amen.',
    '/assets/img/prayers/st-lawrence.jpg'
  ),
  (
    'martyrs',
    'intercessory',
    'prayer-to-holy-innocents',
    'Prayer to the Holy Innocents',
    'A prayer honoring the Holy Innocents, who gave their lives for Christ, and asking for their intercession.',
    'O Holy Innocents, who gave your lives for Christ, pray for us that we may remain innocent and faithful in our journey of faith. Amen.',
    '/assets/img/prayers/holy-innocents.jpg'
  ),
  (
    'martyrs',
    'intercessory',
    'prayer-to-st-agnes',
    'Prayer to St. Agnes',
    'A prayer to St. Agnes, the young martyr of purity and faith, seeking her intercession for strength in faith and virtue.',
    'O glorious St. Agnes, who served Christ faithfully even at the cost of your life, intercede for us that we may remain steadfast in faith and purity. Pray that we may have the courage to witness to the Gospel in our daily lives. Amen.',
    '/assets/img/prayers/st-agnes.jpg'
  ),
  (
    'martyrs',
    'devotional',
    'prayer-to-st-perpetua-felicity',
    'Prayer to Sts. Perpetua and Felicity',
    'A prayer honoring the heroic faith of Sts. Perpetua and Felicity, asking for their intercession in the face of trials.',
    'Holy Sts. Perpetua and Felicity, who remained steadfast in your faith even unto death, pray for us that we may be faithful witnesses to Christ. Strengthen us in times of trial, and intercede for us that we may join you in the joy of eternal life. Amen.',
    '/assets/img/prayers/perpetua-felicity.jpg'
  ),
  (
    'martyrs',
    'devotional',
    'prayer-to-st-sebastian',
    'Prayer to St. Sebastian',
    'A prayer asking for the intercession of St. Sebastian, a martyr and patron of athletes.',
    'Dear Commander at the Roman Emperor’s court, you chose to be also a soldier of Christ and dared to spread faith in the King of kings. Intercede for us that we may have the strength to face challenges in our lives with grace. Amen.',
    '/assets/img/prayers/st-sebastian.jpg'
  );

DROP TABLE IF EXISTS videos;

CREATE TABLE IF NOT EXISTS videos (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "category" VARCHAR(255) NOT NULL,
  "title" VARCHAR(255) NOT NULL,
  "slug" VARCHAR(100) NOT NULL
);

INSERT INTO
  videos ("category", "title", "slug")
VALUES
  (
    'our-lady',
    'Consecration to Jesus through Mary',
    '6kgKbNfCPx0'
  ),
  (
    'our-lady',
    'Mother Angelica',
    'YBZ4NHYRxx4'
  ),
  (
    'our-lady',
    'The Queenship of Mary',
    'i0dk8F0KYxY'
  ),
  (
    'our-lady',
    'The Servite Rosary',
    'WxONFCCSuyk'
  ),
  (
    'our-lady',
    'Our Lady of Sorrows',
    'tDSsFn-JaXY'
  );

-- Christological Devotion Videos
INSERT INTO
  videos ("category", "title", "slug")
VALUES
  (
    'our-lord',
    'The Divine Mercy Chaplet',
    's-410S9wP0s'
  ),
  (
    'our-lord',
    'Devotion to the Sacred Heart of Jesus',
    'qAsGWVk51Jk'
  ),
  (
    'our-lord',
    'The Jesus Prayer Might Radically Change Your Prayer Life',
    '4Qvsg-R4WMU'
  );

-- Angelic Videos
INSERT INTO
  videos ("category", "title", "slug")
VALUES
  (
    'angelic',
    'The Feast of the Archangels',
    '5Hmi6Eendew'
  ),
  (
    'angelic',
    'How Guardian Angels Actually Work',
    'aVhQ1DaAuOU'
  ),
  (
    'angelic',
    'St. Michael the Archangel',
    'p_dGC8fJysY'
  ),
  (
    'angelic',
    'Church teaching on Guardian Angels',
    'EpnTKORLOvQ'
  );

-- Martyr Videos
INSERT INTO
  videos ("category", "title", "slug")
VALUES
  (
    'martyrs',
    'The Martyrs of the Early Church',
    'Z4bIcU2JO4Y'
  ),
  (
    'martyrs',
    'St. Stephen: The First Martyr',
    'ygfXCiFVU9g'
  ),
  (
    'martyrs',
    'The Great Army of the Martyrs',
    'OX2Bc2A4lVs'
  ),
  (
    'martyrs',
    'St. Maximilian Kolbe: Martyr of Charity',
    'Xo_shVSb1Oc'
  );