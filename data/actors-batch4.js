// TVCeleb.com - Actor Data Batch 4
// Actors for Dexter, The Walking Dead, Only Murders in the Building, Loki, Andor, True Detective, Black Mirror, Homeland

const actors4 = [
  // ============================================================
  // DEXTER ACTORS
  // ============================================================
  {
    slug: 'michael-c-hall',
    name: 'Michael C. Hall',
    bio: 'Michael Carlyle Hall is an American actor born on February 1, 1971, in Raleigh, North Carolina. He studied at New York University\'s Tisch School of the Arts and began his career in theater, originating roles in Broadway productions including Chicago and Cabaret.\n\nHall is best known for his role as Dexter Morgan in the Showtime series Dexter (2006-2013, 2021-2022), for which he won a Golden Globe Award and received multiple Emmy nominations. Prior to Dexter, he starred as David Fisher in the HBO series Six Feet Under (2001-2005). Hall\'s ability to portray complex, morally ambiguous characters has made him one of the most respected actors of the prestige television era.',
    image: { src: '/images/actors/michael-c-hall.jpg', alt: 'Michael C. Hall', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'dexter', showTitle: 'Dexter', characterName: 'Dexter Morgan', years: '2006-2013, 2021-2022' }],
    otherNotableRoles: ['David Fisher in Six Feet Under (2001-2005)', 'Hedwig in Hedwig and the Angry Inch (Broadway, 2014-2015)', 'Tom in Safe (2018)'],
    awards: ['Golden Globe Award for Best Actor in a Television Drama (Dexter)', 'Screen Actors Guild Award for Outstanding Male Actor in a Drama Series (Dexter)', 'SAG Ensemble Nominations for both Six Feet Under and Dexter'],
    tags: ['golden-globe-winner', 'dramatic-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0355910/', wikipedia: 'https://en.wikipedia.org/wiki/Michael_C._Hall' },
    faqs: [
      { question: 'What is Michael C. Hall best known for?', answer: 'Michael C. Hall is best known for playing Dexter Morgan in Dexter and David Fisher in Six Feet Under.' },
      { question: 'Has Michael C. Hall won an Emmy?', answer: 'Hall has received six Emmy nominations for Dexter but has not won. He did win a Golden Globe and a SAG Award for the role.' }
    ]
  },
  {
    slug: 'jennifer-carpenter',
    name: 'Jennifer Carpenter',
    bio: 'Jennifer Leann Carpenter is an American actress born on December 7, 1979, in Louisville, Kentucky. She graduated from Juilliard\'s Drama Division and quickly established herself in both film and television.\n\nCarpenter is best known for her role as Debra Morgan in Dexter (2006-2013, 2021-2022), Dexter\'s foul-mouthed, fiercely loyal adoptive sister. She also gained recognition for her starring role in the horror film The Exorcism of Emily Rose (2005). Carpenter was married to co-star Michael C. Hall from 2008 to 2011.',
    image: { src: '/images/actors/jennifer-carpenter.jpg', alt: 'Jennifer Carpenter', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'dexter', showTitle: 'Dexter', characterName: 'Debra Morgan', years: '2006-2013, 2021-2022' }],
    otherNotableRoles: ['Emily Rose in The Exorcism of Emily Rose (2005)', 'Rebecca Harris in Limitless (2015-2016)', 'Agent Clarice Starling in Clarice (2021)'],
    awards: ['Saturn Award Nomination for Best Actress (The Exorcism of Emily Rose)', 'Saturn Award Nomination for Best Actress on Television (Dexter)'],
    tags: ['dramatic-actress'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0140201/', wikipedia: 'https://en.wikipedia.org/wiki/Jennifer_Carpenter' },
    faqs: [
      { question: 'What is Jennifer Carpenter best known for?', answer: 'Jennifer Carpenter is best known for playing Debra Morgan in Dexter.' },
      { question: 'Was Jennifer Carpenter married to Michael C. Hall?', answer: 'Yes, Carpenter and Hall were married from 2008 to 2011 while both starring in Dexter.' }
    ]
  },
  {
    slug: 'julie-benz',
    name: 'Julie Benz',
    bio: 'Julie Marie Benz is an American actress born on May 1, 1972, in Pittsburgh, Pennsylvania. A former competitive figure skater, she transitioned to acting and studied at St. Cloud State University and the American Academy of Dramatic Arts.\n\nBenz gained fame as Darla in Buffy the Vampire Slayer and its spin-off Angel before landing the role of Rita Bennett in Dexter (2006-2010). Her character\'s death in the Season 4 finale is considered one of the most shocking moments in television history. She has also appeared in Defiance, Hawaii Five-0, and the Rambo franchise.',
    image: { src: '/images/actors/julie-benz.jpg', alt: 'Julie Benz', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'dexter', showTitle: 'Dexter', characterName: 'Rita Bennett', years: '2006-2010' }],
    otherNotableRoles: ['Darla in Buffy the Vampire Slayer / Angel (1997-2004)', 'Amanda Rosewater in Defiance (2013-2015)', 'Rambo (2008)'],
    awards: ['Saturn Award Nomination for Best Supporting Actress on Television (Dexter)'],
    tags: ['dramatic-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/juliebenz/', imdb: 'https://www.imdb.com/name/nm0004727/', wikipedia: 'https://en.wikipedia.org/wiki/Julie_Benz' },
    faqs: [
      { question: 'What is Julie Benz best known for?', answer: 'Julie Benz is best known for playing Rita Bennett in Dexter and Darla in the Buffy/Angel franchise.' },
      { question: 'Was Julie Benz a figure skater?', answer: 'Yes, Benz was a competitive figure skater who trained for the Olympics before injuries led her to pursue acting.' }
    ]
  },
  {
    slug: 'erik-king',
    name: 'Erik King',
    bio: 'Erik King is an American actor born on August 25, 1963, in Washington, D.C. He studied at the University of the Arts in Philadelphia and built a career across television, film, and stage.\n\nKing is best known for his portrayal of Sergeant James Doakes in Dexter (2006-2008), whose catchphrase "Surprise, motherfucker!" became one of the most enduring memes in internet culture. Despite appearing in only two seasons, Doakes became one of the most beloved characters in the series.',
    image: { src: '/images/actors/erik-king.jpg', alt: 'Erik King', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'dexter', showTitle: 'Dexter', characterName: 'Sergeant Doakes', years: '2006-2008' }],
    otherNotableRoles: ['Augustus Hill in Oz (1997-2003)', 'Various film and TV roles'],
    awards: ['Screen Actors Guild Award Nomination for Outstanding Ensemble in a Drama Series (Dexter)'],
    tags: ['character-actor', 'dramatic-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0455234/', wikipedia: 'https://en.wikipedia.org/wiki/Erik_King' },
    faqs: [
      { question: 'What is Erik King best known for?', answer: 'Erik King is best known for playing Sergeant Doakes in Dexter, particularly for the iconic "Surprise, motherfucker!" line that became a viral internet meme.' },
      { question: 'Was Erik King in Oz?', answer: 'Yes, King played Augustus Hill, the narrator of the HBO prison drama Oz, from 1997 to 2003.' }
    ]
  },
  {
    slug: 'yvonne-strahovski',
    name: 'Yvonne Strahovski',
    bio: 'Yvonne Strahovski is an Australian actress born on July 30, 1982, in Werrington Downs, New South Wales. She graduated from the University of Western Sydney\'s Theatre Nepean program.\n\nStrahovski gained her first major American role as Sarah Walker in the NBC series Chuck (2007-2012). She subsequently starred as Hannah McKay in Dexter (2012-2013) and earned critical acclaim and an Emmy nomination for her portrayal of Serena Joy Waterford in The Handmaid\'s Tale (2017-present). Her ability to portray powerful, morally complex women has made her one of the most versatile actresses working in television.',
    image: { src: '/images/actors/yvonne-strahovski.jpg', alt: 'Yvonne Strahovski', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'dexter', showTitle: 'Dexter', characterName: 'Hannah McKay', years: '2012-2013' }],
    otherNotableRoles: ['Sarah Walker in Chuck (2007-2012)', 'Serena Joy Waterford in The Handmaid\'s Tale (2017-present)', 'Kate Morgan in 24: Live Another Day (2014)'],
    awards: ['Primetime Emmy Nomination for Outstanding Supporting Actress (The Handmaid\'s Tale)', 'Saturn Award for Best Actress on Television (Chuck)'],
    tags: ['emmy-nominated', 'dramatic-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/yvonnestrahovski/', imdb: 'https://www.imdb.com/name/nm2088803/', wikipedia: 'https://en.wikipedia.org/wiki/Yvonne_Strahovski' },
    faqs: [
      { question: 'What is Yvonne Strahovski best known for?', answer: 'Strahovski is known for Chuck, Dexter, and The Handmaid\'s Tale, where she earned an Emmy nomination for playing Serena Joy Waterford.' },
      { question: 'Is Yvonne Strahovski Australian?', answer: 'Yes, she was born in Australia to Polish immigrant parents and speaks fluent Polish.' }
    ]
  },
  {
    slug: 'john-lithgow',
    name: 'John Lithgow',
    bio: 'John Arthur Lithgow is an American actor born on October 19, 1945, in Rochester, New York. The son of a theatrical producer, he studied at Harvard and the London Academy of Music and Dramatic Art. He has had an extraordinary career spanning theater, film, and television.\n\nLithgow is a six-time Emmy winner with notable roles including Dick Solomon in 3rd Rock from the Sun (1996-2001) and Arthur Mitchell/The Trinity Killer in Dexter Season 4 (2009). His portrayal of Trinity earned him the Emmy for Outstanding Guest Actor and is widely regarded as one of the greatest villain performances in television history. He has also earned two Academy Award nominations.',
    image: { src: '/images/actors/john-lithgow.jpg', alt: 'John Lithgow', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'dexter', showTitle: 'Dexter', characterName: 'Arthur Mitchell / Trinity Killer', years: '2009' }],
    otherNotableRoles: ['Dick Solomon in 3rd Rock from the Sun (1996-2001)', 'Winston Churchill in The Crown (2016)', 'The World According to Garp (1982)', 'Terms of Endearment (1983)'],
    awards: ['Primetime Emmy for Outstanding Guest Actor in a Drama Series (Dexter)', 'Three Primetime Emmys for 3rd Rock from the Sun', 'Emmy for The Crown', 'Two Academy Award Nominations (The World According to Garp, Terms of Endearment)', 'Tony Award for Best Actor (The Columnist)'],
    tags: ['emmy-winner', 'oscar-nominated', 'tony-winner', 'character-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0001475/', wikipedia: 'https://en.wikipedia.org/wiki/John_Lithgow' },
    faqs: [
      { question: 'What is John Lithgow best known for?', answer: 'Lithgow is known for an extraordinary range of roles including 3rd Rock from the Sun, Dexter, The Crown, and numerous films. His Trinity Killer in Dexter Season 4 is considered one of TV\'s greatest villains.' },
      { question: 'How many Emmys has John Lithgow won?', answer: 'Lithgow has won six Primetime Emmy Awards across his career, including for 3rd Rock from the Sun, Dexter, and The Crown.' }
    ]
  },
  // ============================================================
  // THE WALKING DEAD ACTORS
  // ============================================================
  {
    slug: 'andrew-lincoln',
    name: 'Andrew Lincoln',
    bio: 'Andrew James Clutterbuck, known professionally as Andrew Lincoln, is an English actor born on September 14, 1973, in London. He studied at the Royal Academy of Dramatic Art (RADA).\n\nLincoln is best known internationally for his role as Rick Grimes in The Walking Dead (2010-2018, 2024), one of the most iconic characters in television history. Before TWD, he was well-known in the UK for his roles in Teachers and Love Actually. His portrayal of Rick Grimes across nine seasons earned him widespread acclaim, and he returned for the spin-off The Walking Dead: The Ones Who Live.',
    image: { src: '/images/actors/andrew-lincoln.jpg', alt: 'Andrew Lincoln', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-walking-dead', showTitle: 'The Walking Dead', characterName: 'Rick Grimes', years: '2010-2018, 2024' }],
    otherNotableRoles: ['Mark in Love Actually (2003)', 'Simon Casey in Teachers (2001-2003)', 'Egg in This Life (1996-1997)'],
    awards: ['Saturn Award for Best Actor on Television (The Walking Dead)', 'Saturn Award Nomination multiple times'],
    tags: ['dramatic-actor', 'british-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0511088/', wikipedia: 'https://en.wikipedia.org/wiki/Andrew_Lincoln' },
    faqs: [
      { question: 'What is Andrew Lincoln best known for?', answer: 'Andrew Lincoln is best known for playing Rick Grimes in The Walking Dead, a role he held for nine seasons.' },
      { question: 'Is Andrew Lincoln American?', answer: 'No, Andrew Lincoln is British, born in London. He adopted a Southern American accent for Rick Grimes.' }
    ]
  },
  {
    slug: 'norman-reedus',
    name: 'Norman Reedus',
    bio: 'Norman Mark Reedus is an American actor, model, and filmmaker born on January 6, 1969, in Hollywood, Florida. He grew up in various locations and studied in Tokyo and at the Actors Studio in New York.\n\nReedus is best known for playing Daryl Dixon in The Walking Dead (2010-2022) and its spin-off series Daryl Dixon (2023-present). He first gained attention in the cult film The Boondock Saints (1999). His portrayal of the crossbow-wielding survivor became so popular that fans adopted the slogan "If Daryl dies, we riot." He is also known for hosting the travel show Ride with Norman Reedus on AMC.',
    image: { src: '/images/actors/norman-reedus.jpg', alt: 'Norman Reedus', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-walking-dead', showTitle: 'The Walking Dead', characterName: 'Daryl Dixon', years: '2010-present' }],
    otherNotableRoles: ['Murphy MacManus in The Boondock Saints (1999, 2009)', 'Ride with Norman Reedus (2016-present)', 'Death Stranding video game (2019, 2024)'],
    awards: ['Saturn Award for Best Actor on Television (TWD)', 'People\'s Choice Award for Favorite Cable TV Actor'],
    tags: ['fan-favorite', 'dramatic-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/bigbaldhead/', imdb: 'https://www.imdb.com/name/nm0005342/', wikipedia: 'https://en.wikipedia.org/wiki/Norman_Reedus' },
    faqs: [
      { question: 'What is Norman Reedus best known for?', answer: 'Norman Reedus is best known for playing Daryl Dixon in The Walking Dead and its spin-off series.' },
      { question: 'Is Daryl Dixon in the Walking Dead comics?', answer: 'No, Daryl was created specifically for the TV series and is not in the original comics.' }
    ]
  },
  {
    slug: 'danai-gurira',
    name: 'Danai Gurira',
    bio: 'Danai Jekesai Gurira is an American actress and playwright born on February 14, 1978, in Grinnell, Iowa, to Zimbabwean parents. She holds an MFA from New York University\'s Tisch School of the Arts.\n\nGurira is known for playing Michonne in The Walking Dead (2012-2020, 2024) and Okoye in the Marvel Cinematic Universe, appearing in Black Panther, Avengers: Infinity War, Avengers: Endgame, and Black Panther: Wakanda Forever. She is also an acclaimed playwright whose play Eclipsed was nominated for a Tony Award for Best Play.',
    image: { src: '/images/actors/danai-gurira.jpg', alt: 'Danai Gurira', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-walking-dead', showTitle: 'The Walking Dead', characterName: 'Michonne', years: '2012-2020, 2024' }],
    otherNotableRoles: ['Okoye in Black Panther / Avengers (2018-2022)', 'Playwright of Eclipsed (Tony-nominated)', 'Tupac Shakur\'s mother in All Eyez on Me (2017)'],
    awards: ['NAACP Image Award for Outstanding Actress in a Drama Series (TWD)', 'Tony Award Nomination for Best Play (Eclipsed)'],
    tags: ['dramatic-actress', 'playwright', 'mcu-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/daborndg/', imdb: 'https://www.imdb.com/name/nm1775091/', wikipedia: 'https://en.wikipedia.org/wiki/Danai_Gurira' },
    faqs: [
      { question: 'What is Danai Gurira best known for?', answer: 'Gurira is known for playing Michonne in The Walking Dead and Okoye in the Marvel Cinematic Universe.' },
      { question: 'Is Danai Gurira also a playwright?', answer: 'Yes, Gurira is an acclaimed playwright. Her play Eclipsed was nominated for a Tony Award for Best Play in 2016.' }
    ]
  },
  {
    slug: 'jeffrey-dean-morgan',
    name: 'Jeffrey Dean Morgan',
    bio: 'Jeffrey Dean Morgan is an American actor born on April 22, 1966, in Seattle, Washington. He attended Skagit Valley College on a basketball scholarship before pursuing acting.\n\nMorgan is best known for playing Negan in The Walking Dead (2016-2022) and its spin-off Dead City. He previously gained recognition as Denny Duquette in Grey\'s Anatomy, John Winchester in Supernatural, and The Comedian in Watchmen (2009). His portrayal of the bat-wielding Negan became one of the most polarizing and celebrated villain performances in television history.',
    image: { src: '/images/actors/jeffrey-dean-morgan.jpg', alt: 'Jeffrey Dean Morgan', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-walking-dead', showTitle: 'The Walking Dead', characterName: 'Negan', years: '2016-2022' }],
    otherNotableRoles: ['Denny Duquette in Grey\'s Anatomy (2006)', 'John Winchester in Supernatural (2005-2019)', 'The Comedian in Watchmen (2009)', 'Thomas Wayne in Batman v Superman (2016)'],
    awards: ['Critics\' Choice Award Nomination for Best Supporting Actor in a Drama Series (TWD)', 'Saturn Award Nomination for Best Actor on Television'],
    tags: ['dramatic-actor', 'fan-favorite'],
    socialLinks: { instagram: 'https://www.instagram.com/jeffreydeanmorgan/', imdb: 'https://www.imdb.com/name/nm0604742/', wikipedia: 'https://en.wikipedia.org/wiki/Jeffrey_Dean_Morgan' },
    faqs: [
      { question: 'What is Jeffrey Dean Morgan best known for?', answer: 'Morgan is best known for playing Negan in The Walking Dead, as well as roles in Grey\'s Anatomy, Supernatural, and Watchmen.' },
      { question: 'Is Jeffrey Dean Morgan related to Javier Bardem?', answer: 'No, but the two actors are often noted for their striking physical resemblance.' }
    ]
  },
  {
    slug: 'melissa-mcbride',
    name: 'Melissa McBride',
    bio: 'Melissa Suzanne McBride is an American actress born on May 23, 1965, in Lexington, Kentucky. She worked as a casting director in Atlanta before transitioning to acting.\n\nMcBride is best known for playing Carol Peletier across all eleven seasons of The Walking Dead (2010-2022), delivering what many consider the show\'s greatest character transformation — from abused housewife to formidable warrior. Her performance earned multiple Critics\' Choice Award nominations and widespread critical acclaim.',
    image: { src: '/images/actors/melissa-mcbride.jpg', alt: 'Melissa McBride', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-walking-dead', showTitle: 'The Walking Dead', characterName: 'Carol Peletier', years: '2010-2022' }],
    otherNotableRoles: ['Various film roles before TWD', 'Former casting director in Atlanta'],
    awards: ['Critics\' Choice Award Nomination for Best Supporting Actress in a Drama Series (TWD)', 'Saturn Award for Best Supporting Actress on Television (TWD)'],
    tags: ['dramatic-actress'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0564350/', wikipedia: 'https://en.wikipedia.org/wiki/Melissa_McBride' },
    faqs: [
      { question: 'What is Melissa McBride best known for?', answer: 'McBride is best known for playing Carol Peletier in The Walking Dead, a role she held across all eleven seasons.' },
      { question: 'Was Melissa McBride a casting director?', answer: 'Yes, before acting full-time, McBride worked as a casting director in the Atlanta film industry.' }
    ]
  },
  {
    slug: 'steven-yeun',
    name: 'Steven Yeun',
    bio: 'Steven Yeun is a Korean-American actor born on December 21, 1983, in Seoul, South Korea. He immigrated to the United States as a child and studied at Kalamazoo College, where he became involved in improv comedy.\n\nYeun gained fame as Glenn Rhee in The Walking Dead (2010-2016) before transitioning to a celebrated film career. He earned an Academy Award nomination for Best Actor for Minari (2020), becoming the first Asian American to be nominated in that category. He also stars as Mark Grayson in the animated series Invincible and appeared in Jordan Peele\'s Nope (2022).',
    image: { src: '/images/actors/steven-yeun.jpg', alt: 'Steven Yeun', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-walking-dead', showTitle: 'The Walking Dead', characterName: 'Glenn Rhee', years: '2010-2016' }],
    otherNotableRoles: ['Jacob in Minari (2020)', 'Mark Grayson in Invincible (2021-present)', 'Jupe Park in Nope (2022)', 'Ben in Burning (2018)'],
    awards: ['Academy Award Nomination for Best Actor (Minari)', 'Screen Actors Guild Nomination for Outstanding Male Actor (Minari)', 'National Board of Review Award for Best Actor (Minari)'],
    tags: ['oscar-nominated', 'dramatic-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm3081796/', wikipedia: 'https://en.wikipedia.org/wiki/Steven_Yeun' },
    faqs: [
      { question: 'What is Steven Yeun best known for?', answer: 'Yeun is known for playing Glenn Rhee in The Walking Dead and for his Oscar-nominated performance in Minari.' },
      { question: 'Was Steven Yeun nominated for an Oscar?', answer: 'Yes, Yeun was nominated for Best Actor for Minari (2020), becoming the first Asian American nominated in that category.' }
    ]
  },
  // ============================================================
  // ONLY MURDERS IN THE BUILDING ACTORS
  // ============================================================
  {
    slug: 'steve-martin',
    name: 'Steve Martin',
    bio: 'Stephen Glenn Martin is an American actor, comedian, writer, producer, and musician born on August 14, 1945, in Waco, Texas. He began his career as a stand-up comedian and writer for The Smothers Brothers Comedy Hour before becoming one of the biggest comedy stars in the world.\n\nMartin\'s film career includes classics such as The Jerk (1979), Planes, Trains and Automobiles (1987), Roxanne (1987), and Father of the Bride (1991). He co-created and stars in Only Murders in the Building (2021-present) as Charles-Haden Savage, a role that has earned him multiple Emmy nominations. He is also an accomplished banjo player, bestselling author, and art collector.',
    image: { src: '/images/actors/steve-martin.jpg', alt: 'Steve Martin', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'only-murders', showTitle: 'Only Murders in the Building', characterName: 'Charles-Haden Savage', years: '2021-present' }],
    otherNotableRoles: ['Navin Johnson in The Jerk (1979)', 'Neal Page in Planes, Trains and Automobiles (1987)', 'C.D. Bales in Roxanne (1987)', 'George Banks in Father of the Bride (1991-1995)'],
    awards: ['Academy Honorary Award (2013)', 'Emmy Award for Writing (multiple)', 'Grammy Awards for Comedy Albums and Banjo Recordings', 'Mark Twain Prize for American Humor (2005)'],
    tags: ['comedy-legend', 'writer', 'musician'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0000188/', wikipedia: 'https://en.wikipedia.org/wiki/Steve_Martin' },
    faqs: [
      { question: 'What is Steve Martin best known for?', answer: 'Steve Martin is a legendary comedian, actor, and writer known for films like The Jerk and Planes, Trains and Automobiles, and more recently for co-creating and starring in Only Murders in the Building.' },
      { question: 'Did Steve Martin create Only Murders in the Building?', answer: 'Yes, Martin co-created the series with John Hoffman and also stars as Charles-Haden Savage.' }
    ]
  },
  {
    slug: 'martin-short',
    name: 'Martin Short',
    bio: 'Martin Hayter Short is a Canadian-American actor, comedian, singer, and writer born on March 26, 1950, in Hamilton, Ontario, Canada. He rose to fame as a cast member on SCTV and Saturday Night Live.\n\nShort\'s career spans decades of comedy across film, television, and stage, including memorable roles in Three Amigos (1986), Father of the Bride (1991), and the Primetime Emmy-winning variety special Martin Short: Fame Becomes Me. He stars as Oliver Putnam in Only Murders in the Building (2021-present), a role that has earned him Emmy nominations and renewed critical acclaim.',
    image: { src: '/images/actors/martin-short.jpg', alt: 'Martin Short', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'only-murders', showTitle: 'Only Murders in the Building', characterName: 'Oliver Putnam', years: '2021-present' }],
    otherNotableRoles: ['Franck Eggelhoffer in Father of the Bride (1991-1995)', 'Ed Grimley on SCTV/SNL', 'Jack Frost in The Santa Clause 3 (2006)', 'Jiminy Glick'],
    awards: ['Tony Award for Best Actor in a Musical (Little Me)', 'Primetime Emmy Nominations for Only Murders in the Building', 'Canadian Comedy Hall of Fame'],
    tags: ['comedy-legend', 'tony-winner', 'canadian'],
    socialLinks: { instagram: 'https://www.instagram.com/martinshortofficial/', imdb: 'https://www.imdb.com/name/nm0001728/', wikipedia: 'https://en.wikipedia.org/wiki/Martin_Short' },
    faqs: [
      { question: 'What is Martin Short best known for?', answer: 'Martin Short is a legendary comedian known for SCTV, SNL, Father of the Bride, and Only Murders in the Building.' },
      { question: 'Has Martin Short won a Tony?', answer: 'Yes, Short won the Tony Award for Best Actor in a Musical for Little Me in 1999.' }
    ]
  },
  {
    slug: 'selena-gomez',
    name: 'Selena Gomez',
    bio: 'Selena Marie Gomez is an American singer, actress, and producer born on July 22, 1992, in Grand Prairie, Texas. She began her career as a child actress on Barney & Friends before starring in Disney Channel\'s Wizards of Waverly Place (2007-2012).\n\nGomez transitioned to a major music career with hits including "Come & Get It," "Good for You," and "Lose You to Love Me." She stars as Mabel Mora in Only Murders in the Building (2021-present), earning critical acclaim and an Emmy nomination. She also produced the Netflix series 13 Reasons Why and the documentary Selena Gomez: My Mind & Me about her mental health journey.',
    image: { src: '/images/actors/selena-gomez.jpg', alt: 'Selena Gomez', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'only-murders', showTitle: 'Only Murders in the Building', characterName: 'Mabel Mora', years: '2021-present' }],
    otherNotableRoles: ['Alex Russo in Wizards of Waverly Place (2007-2012)', 'International music career', 'Producer of 13 Reasons Why', 'Emilia in Emilia Pérez (2024)'],
    awards: ['Emmy Nomination for Outstanding Actress in a Comedy Series (OMITB)', 'Grammy Nomination', 'SAG Award Nomination for Emilia Pérez', 'Billboard Woman of the Year (2017)'],
    tags: ['singer-actress', 'producer', 'emmy-nominated'],
    socialLinks: { instagram: 'https://www.instagram.com/selenagomez/', twitter: 'https://twitter.com/selenagomez', imdb: 'https://www.imdb.com/name/nm1411125/', wikipedia: 'https://en.wikipedia.org/wiki/Selena_Gomez' },
    faqs: [
      { question: 'What is Selena Gomez best known for?', answer: 'Gomez is known as a singer, actress, and producer, starring in Wizards of Waverly Place and Only Murders in the Building.' },
      { question: 'Is Selena Gomez also a singer?', answer: 'Yes, Gomez is a multi-platinum recording artist with hits including "Lose You to Love Me" and "Come & Get It."' }
    ]
  },
  {
    slug: 'michael-cyril-creighton',
    name: 'Michael Cyril Creighton',
    bio: 'Michael Cyril Creighton is an American actor and writer based in New York City. He has built a career in theater, television, and film with notable roles across multiple productions.\n\nCreighton is best known for playing Howard Morris in Only Murders in the Building (2021-present), a role that has grown from recurring to series regular as the character became a fan favorite. He has also appeared in Bridgerton, Search Party, and numerous off-Broadway productions.',
    image: { src: '/images/actors/michael-cyril-creighton.jpg', alt: 'Michael Cyril Creighton', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'only-murders', showTitle: 'Only Murders in the Building', characterName: 'Howard Morris', years: '2021-present' }],
    otherNotableRoles: ['Bridgerton (recurring)', 'Search Party', 'Various off-Broadway productions'],
    awards: ['SAG Award Nomination for Outstanding Ensemble in a Comedy Series (OMITB)'],
    tags: ['character-actor', 'theater-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm2490498/', wikipedia: 'https://en.wikipedia.org/wiki/Michael_Cyril_Creighton' },
    faqs: [
      { question: 'What is Michael Cyril Creighton best known for?', answer: 'Creighton is best known for playing Howard Morris in Only Murders in the Building.' },
      { question: 'Was Howard Morris always a main character?', answer: 'No, Howard started as a recurring character but was promoted to series regular as the character became a fan favorite.' }
    ]
  },
  // ============================================================
  // LOKI ACTORS
  // ============================================================
  {
    slug: 'tom-hiddleston',
    name: 'Tom Hiddleston',
    bio: 'Thomas William Hiddleston is an English actor born on February 9, 1981, in Westminster, London. He studied Classics at Pembroke College, Cambridge, and trained at the Royal Academy of Dramatic Art (RADA).\n\nHiddleston is best known for his portrayal of Loki in the Marvel Cinematic Universe, a role he has played since Thor (2011) across multiple films and the Disney+ series Loki (2021-2023). He won an Emmy for his role in The Night Manager (2016) and has established himself as one of the most charismatic actors of his generation. His Shakespearean training brings gravitas and emotional depth to the God of Mischief.',
    image: { src: '/images/actors/tom-hiddleston.jpg', alt: 'Tom Hiddleston', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'loki', showTitle: 'Loki', characterName: 'Loki Laufeyson', years: '2021-2023' }],
    otherNotableRoles: ['Loki in Thor/Avengers films (2011-2019)', 'Jonathan Pine in The Night Manager (2016)', 'Hank Williams in I Saw the Light (2015)', 'Captain Nicholls in War Horse (2011)'],
    awards: ['Golden Globe Award for Best Actor in a Miniseries (The Night Manager)', 'Empire Award for Best Male Newcomer', 'Laurence Olivier Award Nomination'],
    tags: ['golden-globe-winner', 'mcu-actor', 'british-actor', 'dramatic-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/twhiddleston/', twitter: 'https://twitter.com/taboroutdoors', imdb: 'https://www.imdb.com/name/nm1089991/', wikipedia: 'https://en.wikipedia.org/wiki/Tom_Hiddleston' },
    faqs: [
      { question: 'What is Tom Hiddleston best known for?', answer: 'Hiddleston is best known for playing Loki across the MCU since 2011, as well as his Golden Globe-winning role in The Night Manager.' },
      { question: 'How long has Tom Hiddleston played Loki?', answer: 'Hiddleston has played Loki since Thor (2011), spanning over a decade of films and the Disney+ series.' }
    ]
  },
  {
    slug: 'owen-wilson',
    name: 'Owen Wilson',
    bio: 'Owen Cunningham Wilson is an American actor, comedian, and screenwriter born on November 18, 1968, in Dallas, Texas. He attended the University of Texas at Austin, where he met Wes Anderson and co-wrote their debut film Bottle Rocket (1996).\n\nWilson has starred in numerous comedies including Wedding Crashers (2005), Zoolander (2001), and the Night at the Museum series. He earned an Academy Award nomination for co-writing The Royal Tenenbaums (2001) with Anderson. He plays Mobius M. Mobius in the Loki Disney+ series (2021-2023), bringing his signature warmth to the MCU.',
    image: { src: '/images/actors/owen-wilson.jpg', alt: 'Owen Wilson', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'loki', showTitle: 'Loki', characterName: 'Mobius M. Mobius', years: '2021-2023' }],
    otherNotableRoles: ['John Beckwith in Wedding Crashers (2005)', 'Hansel in Zoolander (2001)', 'Lightning McQueen in Cars series (2006-2017)', 'Gil Pender in Midnight in Paris (2011)'],
    awards: ['Academy Award Nomination for Best Original Screenplay (The Royal Tenenbaums)', 'Multiple People\'s Choice Award Nominations'],
    tags: ['comedy-actor', 'screenwriter', 'oscar-nominated'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0005562/', wikipedia: 'https://en.wikipedia.org/wiki/Owen_Wilson' },
    faqs: [
      { question: 'What is Owen Wilson best known for?', answer: 'Wilson is known for comedy films like Wedding Crashers and Zoolander, his collaborations with Wes Anderson, and playing Mobius in the Loki series.' },
      { question: 'Was Owen Wilson nominated for an Oscar?', answer: 'Yes, Wilson was nominated for Best Original Screenplay for co-writing The Royal Tenenbaums with Wes Anderson.' }
    ]
  },
  {
    slug: 'sophia-di-martino',
    name: 'Sophia Di Martino',
    bio: 'Sophia Di Martino is an English actress born on November 15, 1983, in Nottingham, England. She studied at the University of Leeds and trained in acting at various drama programs.\n\nDi Martino gained international recognition for her role as Sylvie in the Loki Disney+ series (2021-2023), a female variant of Loki who becomes the emotional center of the show. Prior to Loki, she had appeared in British television series including Flowers, Yesterday, and Into the Badlands.',
    image: { src: '/images/actors/sophia-di-martino.jpg', alt: 'Sophia Di Martino', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'loki', showTitle: 'Loki', characterName: 'Sylvie', years: '2021-2023' }],
    otherNotableRoles: ['Amy in Flowers (2016-2018)', 'Into the Badlands (2019)', 'Yesterday (2019)'],
    awards: ['Empire Award Nomination for Best Female Newcomer', 'Saturn Award Nomination'],
    tags: ['dramatic-actress', 'british-actress', 'mcu-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/sophiadimartino/', twitter: 'https://twitter.com/sophiadimartino', imdb: 'https://www.imdb.com/name/nm3010471/', wikipedia: 'https://en.wikipedia.org/wiki/Sophia_Di_Martino' },
    faqs: [
      { question: 'What is Sophia Di Martino best known for?', answer: 'Di Martino is best known for playing Sylvie in the Loki Disney+ series.' },
      { question: 'Was Sophia Di Martino known before Loki?', answer: 'Di Martino had a career in British television before Loki brought her international recognition.' }
    ]
  },
  {
    slug: 'jonathan-majors',
    name: 'Jonathan Majors',
    bio: 'Jonathan Michael Majors is an American actor born on September 7, 1989, in Lompoc, California. He studied at the Yale School of Drama, graduating with an MFA in 2016.\n\nMajors gained critical acclaim for his role in The Last Black Man in San Francisco (2019) and the HBO series Lovecraft Country (2020). He played He Who Remains and Victor Timely in the Loki Disney+ series (2021-2023), bringing a magnetic, unpredictable energy to the multiverse-defining character. He also appeared as Kang the Conqueror in Ant-Man and the Wasp: Quantumania (2023).',
    image: { src: '/images/actors/jonathan-majors.jpg', alt: 'Jonathan Majors', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'loki', showTitle: 'Loki', characterName: 'He Who Remains / Victor Timely', years: '2021-2023' }],
    otherNotableRoles: ['Atticus Freeman in Lovecraft Country (2020)', 'Montgomery Allen in The Last Black Man in San Francisco (2019)', 'Kang in Ant-Man and the Wasp: Quantumania (2023)', 'Creed III (2023)'],
    awards: ['Independent Spirit Award Nomination', 'NAACP Image Award Nomination'],
    tags: ['dramatic-actor', 'mcu-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm4401952/', wikipedia: 'https://en.wikipedia.org/wiki/Jonathan_Majors' },
    faqs: [
      { question: 'What is Jonathan Majors best known for?', answer: 'Majors is known for He Who Remains in Loki, Lovecraft Country, and Kang the Conqueror in the MCU.' },
      { question: 'Where did Jonathan Majors study acting?', answer: 'Majors studied at the Yale School of Drama, graduating with an MFA in 2016.' }
    ]
  },
  // ============================================================
  // ANDOR ACTORS
  // ============================================================
  {
    slug: 'diego-luna',
    name: 'Diego Luna',
    bio: 'Diego Luna Alexander is a Mexican actor, director, and producer born on December 29, 1979, in Toluca de Lerdo, Mexico. He began acting as a child in Mexican telenovelas and film.\n\nLuna gained international fame with Y Tu Mamá También (2001) and starred as Cassian Andor in Rogue One: A Star Wars Story (2016), reprising the role in the Disney+ series Andor (2022-present). He is also known for Milk (2008), The Terminal (2004), and as a prominent advocate for immigrant rights and social justice. He co-founded the production company La Corriente del Golfo.',
    image: { src: '/images/actors/diego-luna.jpg', alt: 'Diego Luna', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'andor', showTitle: 'Andor', characterName: 'Cassian Andor', years: '2022-present' }],
    otherNotableRoles: ['Tenoch in Y Tu Mamá También (2001)', 'Cassian Andor in Rogue One (2016)', 'Miguel in Narcos: Mexico (2018-2021)', 'The Terminal (2004)'],
    awards: ['Ariel Award for Best Actor (Mexican Academy Award)', 'Gotham Award Nomination', 'Various international film festival honors'],
    tags: ['dramatic-actor', 'star-wars', 'mexican-actor', 'producer'],
    socialLinks: { instagram: 'https://www.instagram.com/daborndg/', imdb: 'https://www.imdb.com/name/nm0526019/', wikipedia: 'https://en.wikipedia.org/wiki/Diego_Luna' },
    faqs: [
      { question: 'What is Diego Luna best known for?', answer: 'Luna is known for Y Tu Mamá También, Rogue One: A Star Wars Story, and the Disney+ series Andor.' },
      { question: 'Is Diego Luna from Mexico?', answer: 'Yes, Luna was born in Toluca de Lerdo, Mexico, and is one of Mexico\'s most internationally recognized actors.' }
    ]
  },
  {
    slug: 'stellan-skarsgard',
    name: 'Stellan Skarsgård',
    bio: 'Stellan John Skarsgård is a Swedish actor born on June 13, 1951, in Gothenburg, Sweden. He began acting at age 15 at the Royal Dramatic Theatre in Stockholm and has since become one of Europe\'s most acclaimed actors.\n\nSkarsgård has appeared in over 100 films including Good Will Hunting (1997), the Pirates of the Caribbean franchise, Thor (2011), Chernobyl (2019), and Dune (2021-2024). His portrayal of Luthen Rael in Andor (2022-present) is widely considered one of his finest performances, delivering what many regard as the greatest monologue in Star Wars history.',
    image: { src: '/images/actors/stellan-skarsgard.jpg', alt: 'Stellan Skarsgård', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'andor', showTitle: 'Andor', characterName: 'Luthen Rael', years: '2022-present' }],
    otherNotableRoles: ['Baron Harkonnen in Dune (2021-2024)', 'Erik Selvig in Thor/Avengers (2011-2015)', 'Boris Shcherbina in Chernobyl (2019)', 'Bootstrap Bill in Pirates of the Caribbean (2006-2007)'],
    awards: ['European Film Award for Best Actor', 'Guldbagge Award (Swedish Oscar) for Best Actor', 'Screen Actors Guild Award Nomination (Chernobyl)'],
    tags: ['dramatic-actor', 'swedish-actor', 'character-actor', 'star-wars'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0001745/', wikipedia: 'https://en.wikipedia.org/wiki/Stellan_Skarsg%C3%A5rd' },
    faqs: [
      { question: 'What is Stellan Skarsgård best known for?', answer: 'Skarsgård is known for a vast career including Good Will Hunting, Thor, Chernobyl, Dune, and Andor.' },
      { question: 'Are other Skarsgårds actors?', answer: 'Yes, Stellan\'s sons Alexander, Bill, and Gustaf Skarsgård are all successful actors.' }
    ]
  },
  {
    slug: 'genevieve-oreilly',
    name: 'Genevieve O\'Reilly',
    bio: 'Genevieve O\'Reilly is an Irish-Australian actress born on January 6, 1977, in Dublin, Ireland, and raised in Adelaide, Australia. She trained at the National Institute of Dramatic Art (NIDA) in Sydney.\n\nO\'Reilly has played Mon Mothma across multiple Star Wars productions, first appearing in deleted scenes from Revenge of the Sith (2005), then in Rogue One (2016), and most prominently in the Disney+ series Andor (2022-present), where her nuanced performance transformed the character from a minor figure into one of Star Wars\' most compelling political characters.',
    image: { src: '/images/actors/genevieve-oreilly.jpg', alt: 'Genevieve O\'Reilly', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'andor', showTitle: 'Andor', characterName: 'Mon Mothma', years: '2022-present' }],
    otherNotableRoles: ['Mon Mothma in Rogue One (2016)', 'Mon Mothma in Star Wars: Revenge of the Sith (2005)', 'Various stage productions'],
    awards: ['Saturn Award Nomination for Best Supporting Actress (Andor)', 'Helpmann Award nominations for stage work'],
    tags: ['dramatic-actress', 'star-wars', 'theater-actress'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm1072555/', wikipedia: 'https://en.wikipedia.org/wiki/Genevieve_O%27Reilly' },
    faqs: [
      { question: 'What is Genevieve O\'Reilly best known for?', answer: 'O\'Reilly is known for playing Mon Mothma across Star Wars productions, most prominently in the Disney+ series Andor.' },
      { question: 'How many times has she played Mon Mothma?', answer: 'O\'Reilly has played Mon Mothma in Revenge of the Sith, Rogue One, and Andor, spanning nearly two decades with the character.' }
    ]
  },
  {
    slug: 'denise-gough',
    name: 'Denise Gough',
    bio: 'Denise Gough is an Irish actress born on February 20, 1980, in Ennis, County Clare, Ireland. She trained at the Academy of Live and Recorded Arts in London and built an acclaimed career on the British stage.\n\nGough won the Olivier Award for Best Actress for People, Places and Things (2016) and earned a Tony nomination for the Broadway transfer. She plays Dedra Meero in the Disney+ series Andor (2022-present), bringing her stage-honed intensity to one of Star Wars\' most compelling antagonists. She also appeared in the Apple TV+ series Juliet, Naked and the Star Wars prequel media.',
    image: { src: '/images/actors/denise-gough.jpg', alt: 'Denise Gough', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'andor', showTitle: 'Andor', characterName: 'Dedra Meero', years: '2022-present' }],
    otherNotableRoles: ['Emma in People, Places and Things (Olivier Award)', 'Harper Pitt in Angels in America (National Theatre)', 'Connie in The Stag (2013)'],
    awards: ['Olivier Award for Best Actress (People, Places and Things)', 'Tony Award Nomination for Best Actress (Angels in America)', 'Critics\' Circle Theatre Award for Best Actress'],
    tags: ['olivier-winner', 'dramatic-actress', 'theater-actress', 'star-wars'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm1039502/', wikipedia: 'https://en.wikipedia.org/wiki/Denise_Gough' },
    faqs: [
      { question: 'What is Denise Gough best known for?', answer: 'Gough is known for her Olivier Award-winning stage work and for playing Dedra Meero in Andor.' },
      { question: 'Has Denise Gough won an Olivier Award?', answer: 'Yes, she won the Olivier Award for Best Actress for People, Places and Things in 2016.' }
    ]
  },
  // ============================================================
  // TRUE DETECTIVE ACTORS
  // ============================================================
  {
    slug: 'matthew-mcconaughey',
    name: 'Matthew McConaughey',
    bio: 'Matthew David McConaughey is an American actor born on November 4, 1969, in Uvalde, Texas. He studied film at the University of Texas at Austin and broke out with Dazed and Confused (1993).\n\nAfter years in romantic comedies, McConaughey reinvented his career in a period dubbed "The McConaissance," earning the Academy Award for Best Actor for Dallas Buyers Club (2013). His portrayal of Rust Cohle in True Detective Season 1 (2014) is widely regarded as one of the greatest television performances ever, combining philosophical depth with haunting vulnerability.',
    image: { src: '/images/actors/matthew-mcconaughey.jpg', alt: 'Matthew McConaughey', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'true-detective', showTitle: 'True Detective', characterName: 'Rust Cohle', years: '2014' }],
    otherNotableRoles: ['Ron Woodroof in Dallas Buyers Club (2013)', 'Cooper in Interstellar (2014)', 'Wooderson in Dazed and Confused (1993)', 'Jake Brigance in A Time to Kill (1996)'],
    awards: ['Academy Award for Best Actor (Dallas Buyers Club)', 'Golden Globe for Best Actor in a Drama (Dallas Buyers Club)', 'Critics\' Choice Award for Best Actor in a Drama Series (True Detective)', 'SAG Award for Outstanding Male Actor (Dallas Buyers Club)'],
    tags: ['oscar-winner', 'dramatic-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/officiallymcconaughey/', imdb: 'https://www.imdb.com/name/nm0000190/', wikipedia: 'https://en.wikipedia.org/wiki/Matthew_McConaughey' },
    faqs: [
      { question: 'What is Matthew McConaughey best known for?', answer: 'McConaughey is known for his Oscar-winning role in Dallas Buyers Club, Interstellar, and his iconic portrayal of Rust Cohle in True Detective Season 1.' },
      { question: 'Did McConaughey win an Emmy for True Detective?', answer: 'No, but he was nominated and won the Critics\' Choice Award for Best Actor in a Drama Series for the role.' }
    ]
  },
  {
    slug: 'woody-harrelson',
    name: 'Woody Harrelson',
    bio: 'Woodrow Tracy Harrelson is an American actor born on July 23, 1961, in Midland, Texas. He attended Hanover College in Indiana and broke out as bartender Woody Boyd on Cheers (1985-1993).\n\nHarrelson has been nominated for three Academy Awards and has built a career spanning comedy and drama, from Natural Born Killers (1994) to The Messenger (2009) to the Hunger Games franchise. His portrayal of Marty Hart in True Detective Season 1 (2014) alongside McConaughey is considered one of the great TV partnerships, earning him an Emmy nomination.',
    image: { src: '/images/actors/woody-harrelson.jpg', alt: 'Woody Harrelson', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'true-detective', showTitle: 'True Detective', characterName: 'Marty Hart', years: '2014' }],
    otherNotableRoles: ['Woody Boyd in Cheers (1985-1993)', 'Mickey Knox in Natural Born Killers (1994)', 'Haymitch Abernathy in Hunger Games (2012-2015)', 'Captain Tony Stone in The Messenger (2009)'],
    awards: ['Primetime Emmy for Outstanding Supporting Actor (Cheers)', 'Three Academy Award Nominations', 'SAG Award Nominations'],
    tags: ['oscar-nominated', 'emmy-winner', 'dramatic-actor', 'comedy-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0000437/', wikipedia: 'https://en.wikipedia.org/wiki/Woody_Harrelson' },
    faqs: [
      { question: 'What is Woody Harrelson best known for?', answer: 'Harrelson is known for Cheers, Natural Born Killers, Hunger Games, and True Detective Season 1.' },
      { question: 'How many Oscar nominations does Woody Harrelson have?', answer: 'Harrelson has three Academy Award nominations: for The People vs. Larry Flynt, The Messenger, and Three Billboards Outside Ebbing, Missouri.' }
    ]
  },
  {
    slug: 'jodie-foster',
    name: 'Jodie Foster',
    bio: 'Alicia Christian "Jodie" Foster is an American actress and director born on November 19, 1962, in Los Angeles, California. She began acting at age three and has had one of the most distinguished careers in cinema.\n\nFoster is a two-time Academy Award winner for Best Actress (The Accused, 1988; The Silence of the Lambs, 1991) and has directed multiple films. She stars as Chief Liz Danvers in True Detective: Night Country (Season 4, 2024), earning a Golden Globe Award for the role and marking her return to series television after decades.',
    image: { src: '/images/actors/jodie-foster.jpg', alt: 'Jodie Foster', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'true-detective', showTitle: 'True Detective', characterName: 'Liz Danvers', years: '2024' }],
    otherNotableRoles: ['Clarice Starling in The Silence of the Lambs (1991)', 'Sarah Tobias in The Accused (1988)', 'Director of Money Monster, Little Man Tate', 'Taxi Driver (1976)'],
    awards: ['Two Academy Awards for Best Actress', 'Golden Globe for True Detective: Night Country', 'BAFTA Awards', 'Cecil B. DeMille Award for Lifetime Achievement'],
    tags: ['oscar-winner', 'golden-globe-winner', 'director', 'legend'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0000149/', wikipedia: 'https://en.wikipedia.org/wiki/Jodie_Foster' },
    faqs: [
      { question: 'What is Jodie Foster best known for?', answer: 'Foster is a two-time Oscar winner known for The Silence of the Lambs, The Accused, and most recently True Detective: Night Country.' },
      { question: 'Did Jodie Foster win a Golden Globe for True Detective?', answer: 'Yes, Foster won the Golden Globe for Best Actress in a Limited Series for True Detective: Night Country in 2024.' }
    ]
  },
  {
    slug: 'kali-reis',
    name: 'Kali Reis',
    bio: 'Kali "KO" Reis is an American professional boxer and actress born on August 24, 1986, in Providence, Rhode Island. She is of Cape Verdean, Portuguese, and Seaconke Wampanoag Native American heritage and held the WBA and IBF female super lightweight championships.\n\nReis made her acting debut as Evangeline Navarro in True Detective: Night Country (Season 4, 2024), earning widespread acclaim for her portrayal of a detective investigating disappearances in Alaska. Her casting was groundbreaking as one of the first Native American leads in a prestige television series.',
    image: { src: '/images/actors/kali-reis.jpg', alt: 'Kali Reis', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'true-detective', showTitle: 'True Detective', characterName: 'Evangeline Navarro', years: '2024' }],
    otherNotableRoles: ['Catch the Fair One (2021, lead role)', 'Professional boxing champion'],
    awards: ['Independent Spirit Award Nomination for Catch the Fair One', 'Golden Globe Nomination for True Detective: Night Country'],
    tags: ['dramatic-actress', 'native-american', 'athlete-actress', 'breakthrough'],
    socialLinks: { instagram: 'https://www.instagram.com/kalireisboxing/', imdb: 'https://www.imdb.com/name/nm10952300/', wikipedia: 'https://en.wikipedia.org/wiki/Kali_Reis' },
    faqs: [
      { question: 'Is Kali Reis a real boxer?', answer: 'Yes, Reis is a professional boxing champion who held the WBA and IBF female super lightweight titles before transitioning to acting.' },
      { question: 'What was Kali Reis\'s first acting role?', answer: 'Her first major role was in the independent film Catch the Fair One (2021), followed by her breakout in True Detective: Night Country.' }
    ]
  },
  // ============================================================
  // BLACK MIRROR ACTORS
  // ============================================================
  {
    slug: 'bryce-dallas-howard',
    name: 'Bryce Dallas Howard',
    bio: 'Bryce Dallas Howard is an American actress and director born on March 2, 1981, in Los Angeles, California. The daughter of director Ron Howard, she studied at New York University\'s Tisch School of the Arts.\n\nHoward has starred in major franchises including Jurassic World (2015-2022) and The Twilight Saga. She delivered a memorable performance as Lacie Pound in the Black Mirror episode "Nosedive" (2016), portraying a woman obsessed with social media ratings. She has also directed episodes of The Mandalorian and other Disney+ series.',
    image: { src: '/images/actors/bryce-dallas-howard.jpg', alt: 'Bryce Dallas Howard', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'black-mirror', showTitle: 'Black Mirror', characterName: 'Lacie Pound', years: '2016' }],
    otherNotableRoles: ['Claire Dearing in Jurassic World (2015-2022)', 'Victoria in The Twilight Saga: Eclipse (2010)', 'Hilly Holbrook in The Help (2011)', 'Director of Mandalorian episodes'],
    awards: ['Saturn Award Nomination', 'Emmy Nomination for Directing (The Mandalorian)'],
    tags: ['dramatic-actress', 'director'],
    socialLinks: { instagram: 'https://www.instagram.com/brycedhoward/', imdb: 'https://www.imdb.com/name/nm0397171/', wikipedia: 'https://en.wikipedia.org/wiki/Bryce_Dallas_Howard' },
    faqs: [
      { question: 'What Black Mirror episode is Bryce Dallas Howard in?', answer: 'Howard stars in "Nosedive" (Season 3, Episode 1), playing Lacie Pound in a society where social ratings determine everything.' },
      { question: 'Is Bryce Dallas Howard related to Ron Howard?', answer: 'Yes, she is the daughter of director Ron Howard.' }
    ]
  },
  {
    slug: 'daniel-kaluuya',
    name: 'Daniel Kaluuya',
    bio: 'Daniel Kaluuya is a British actor and writer born on February 24, 1989, in London, England, to Ugandan parents. He began acting as a teenager and wrote for the E4 series Skins.\n\nKaluuya won the Academy Award for Best Supporting Actor for Judas and the Black Messiah (2021) and was nominated for Best Actor for Get Out (2017). He appeared in the Black Mirror episode "Fifteen Million Merits" (2011), one of his earliest notable roles. He also starred in Nope (2022) and has become one of the most acclaimed actors of his generation.',
    image: { src: '/images/actors/daniel-kaluuya.jpg', alt: 'Daniel Kaluuya', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'black-mirror', showTitle: 'Black Mirror', characterName: 'Bing (Bingham Madsen)', years: '2011' }],
    otherNotableRoles: ['Chris Washington in Get Out (2017)', 'Fred Hampton in Judas and the Black Messiah (2021)', 'OJ Haywood in Nope (2022)', 'W\'Kabi in Black Panther (2018)'],
    awards: ['Academy Award for Best Supporting Actor (Judas and the Black Messiah)', 'Academy Award Nomination for Best Actor (Get Out)', 'BAFTA Rising Star Award (2018)'],
    tags: ['oscar-winner', 'dramatic-actor', 'british-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm2257207/', wikipedia: 'https://en.wikipedia.org/wiki/Daniel_Kaluuya' },
    faqs: [
      { question: 'What Black Mirror episode is Daniel Kaluuya in?', answer: 'Kaluuya stars in "Fifteen Million Merits" (Season 1, Episode 2), one of his earliest notable roles before his Oscar-winning career.' },
      { question: 'Has Daniel Kaluuya won an Oscar?', answer: 'Yes, Kaluuya won Best Supporting Actor for Judas and the Black Messiah (2021) and was previously nominated for Best Actor for Get Out.' }
    ]
  },
  {
    slug: 'hayley-atwell',
    name: 'Hayley Atwell',
    bio: 'Hayley Elizabeth Atwell is a British-American actress born on April 5, 1982, in London, England. She trained at the Guildhall School of Music and Drama and built a career in theater, film, and television.\n\nAtwell is best known for playing Peggy Carter in the MCU, appearing in Captain America films and the ABC series Agent Carter (2015-2016). She starred in the Black Mirror episode "Be Right Back" (2013) as Martha, delivering an emotional performance about grief and technology. She also starred in Mission: Impossible – Dead Reckoning (2023).',
    image: { src: '/images/actors/hayley-atwell.jpg', alt: 'Hayley Atwell', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'black-mirror', showTitle: 'Black Mirror', characterName: 'Martha', years: '2013' }],
    otherNotableRoles: ['Peggy Carter in MCU (2011-2019)', 'Agent Carter TV series (2015-2016)', 'Grace in Mission: Impossible – Dead Reckoning (2023)', 'The Duchess of Duke Street (2009)'],
    awards: ['Empire Award for Best Female Newcomer (Captain America)', 'Saturn Award Nomination'],
    tags: ['dramatic-actress', 'mcu-actress', 'british-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/wellhayley/', imdb: 'https://www.imdb.com/name/nm2017943/', wikipedia: 'https://en.wikipedia.org/wiki/Hayley_Atwell' },
    faqs: [
      { question: 'What Black Mirror episode is Hayley Atwell in?', answer: 'Atwell stars in "Be Right Back" (Season 2, Episode 1), playing a woman who uses AI technology to recreate her deceased boyfriend.' },
      { question: 'Is Hayley Atwell Peggy Carter?', answer: 'Yes, Atwell played Peggy Carter across multiple MCU films and the Agent Carter TV series.' }
    ]
  },
  {
    slug: 'jesse-plemons',
    name: 'Jesse Plemons',
    bio: 'Jesse Lon Plemons is an American actor born on April 2, 1988, in Dallas, Texas. He began acting as a child and gained early recognition as Landry Clarke in Friday Night Lights (2006-2011).\n\nPlemons has become one of the most respected character actors in Hollywood, earning an Academy Award for Best Supporting Actor for The Power of the Dog (2021). He starred as Robert Daly in the Black Mirror episode "USS Callister" (2017), a critically acclaimed performance as a tech genius who traps digital copies of his coworkers in a Star Trek-inspired virtual reality. He also appeared in Breaking Bad, Fargo, and Killers of the Flower Moon.',
    image: { src: '/images/actors/jesse-plemons.jpg', alt: 'Jesse Plemons', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'black-mirror', showTitle: 'Black Mirror', characterName: 'Robert Daly', years: '2017' }],
    otherNotableRoles: ['Todd Alquist in Breaking Bad (2012-2013)', 'Ed Blumquist in Fargo Season 2 (2015)', 'Landry Clarke in Friday Night Lights (2006-2011)', 'The Power of the Dog (2021)'],
    awards: ['Academy Award for Best Supporting Actor (The Power of the Dog)', 'Best Actor at Cannes Film Festival (Kinds of Kindness)', 'Emmy Nomination for Black Mirror'],
    tags: ['oscar-winner', 'dramatic-actor', 'character-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0687146/', wikipedia: 'https://en.wikipedia.org/wiki/Jesse_Plemons' },
    faqs: [
      { question: 'What Black Mirror episode is Jesse Plemons in?', answer: 'Plemons stars in "USS Callister" (Season 4, Episode 1), playing the terrifying Robert Daly who traps digital copies of people in his virtual reality game.' },
      { question: 'Was Jesse Plemons in Breaking Bad?', answer: 'Yes, Plemons played Todd Alquist, one of the show\'s most chilling characters, in Breaking Bad\'s final seasons.' }
    ]
  },
  // ============================================================
  // HOMELAND ACTORS
  // ============================================================
  {
    slug: 'claire-danes',
    name: 'Claire Danes',
    bio: 'Claire Catherine Danes is an American actress born on April 12, 1979, in Manhattan, New York. She attended the Lee Strasberg Theatre and Film Institute and Yale University.\n\nDanes won two Primetime Emmy Awards for her portrayal of CIA officer Carrie Mathison in Homeland (2011-2020), a role that earned her universal acclaim for its raw, unflinching depiction of bipolar disorder and intelligence work. She previously gained fame for My So-Called Life (1994-1995), Romeo + Juliet (1996), and Temple Grandin (2010), for which she also won an Emmy.',
    image: { src: '/images/actors/claire-danes.jpg', alt: 'Claire Danes', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'homeland', showTitle: 'Homeland', characterName: 'Carrie Mathison', years: '2011-2020' }],
    otherNotableRoles: ['Angela Chase in My So-Called Life (1994-1995)', 'Juliet in Romeo + Juliet (1996)', 'Temple Grandin in Temple Grandin (2010)', 'Beth March in Little Women (1994)'],
    awards: ['Two Primetime Emmy Awards for Homeland', 'Emmy Award for Temple Grandin', 'Golden Globe for Best Actress in a Drama (Homeland)', 'SAG Award for Outstanding Female Actor (Homeland)'],
    tags: ['emmy-winner', 'golden-globe-winner', 'dramatic-actress'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0000132/', wikipedia: 'https://en.wikipedia.org/wiki/Claire_Danes' },
    faqs: [
      { question: 'What is Claire Danes best known for?', answer: 'Danes is best known for playing Carrie Mathison in Homeland, for which she won two Emmy Awards and a Golden Globe.' },
      { question: 'How many Emmy Awards has Claire Danes won?', answer: 'Danes has won three Emmy Awards — two for Homeland and one for Temple Grandin.' }
    ]
  },
  {
    slug: 'damian-lewis',
    name: 'Damian Lewis',
    bio: 'Damian Watcyn Lewis is an English actor born on February 11, 1971, in London. He attended Eton College and trained at the Guildhall School of Music and Drama.\n\nLewis won the Primetime Emmy for Outstanding Lead Actor for his portrayal of Marine Sergeant Nicholas Brody in Homeland (2011-2014). He is also known for Band of Brothers (2001), Billions (2016-2023), and Wolf Hall (2015). His ability to project simultaneous vulnerability and menace made Brody one of the most compelling characters in television drama.',
    image: { src: '/images/actors/damian-lewis.jpg', alt: 'Damian Lewis', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'homeland', showTitle: 'Homeland', characterName: 'Nicholas Brody', years: '2011-2014' }],
    otherNotableRoles: ['Major Dick Winters in Band of Brothers (2001)', 'Bobby Axelrod in Billions (2016-2023)', 'Henry VIII in Wolf Hall (2015)', 'Soames Forsyte in The Forsyte Saga (2002)'],
    awards: ['Primetime Emmy for Outstanding Lead Actor in a Drama Series (Homeland)', 'Golden Globe Nomination for Homeland', 'SAG Award Nomination'],
    tags: ['emmy-winner', 'dramatic-actor', 'british-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/damianlewis/', twitter: 'https://twitter.com/lewis_damian', imdb: 'https://www.imdb.com/name/nm0507073/', wikipedia: 'https://en.wikipedia.org/wiki/Damian_Lewis' },
    faqs: [
      { question: 'What is Damian Lewis best known for?', answer: 'Lewis is known for Homeland, Band of Brothers, Billions, and Wolf Hall.' },
      { question: 'Did Damian Lewis win an Emmy?', answer: 'Yes, Lewis won the Emmy for Outstanding Lead Actor for Homeland in 2012.' }
    ]
  },
  {
    slug: 'mandy-patinkin',
    name: 'Mandy Patinkin',
    bio: 'Mandel Bruce Patinkin is an American actor, singer, and voice artist born on November 30, 1952, in Chicago, Illinois. He studied at Juilliard and built a distinguished career across Broadway, film, and television.\n\nPatinkin won the Tony Award for Best Actor in a Musical for Evita (1980) and is beloved for his role as Inigo Montoya in The Princess Bride (1987). His portrayal of Saul Berenson in Homeland (2011-2020) earned him multiple Emmy nominations and is considered one of the defining performances of prestige television, bringing warmth, wisdom, and moral complexity to the role of Carrie\'s mentor.',
    image: { src: '/images/actors/mandy-patinkin.jpg', alt: 'Mandy Patinkin', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'homeland', showTitle: 'Homeland', characterName: 'Saul Berenson', years: '2011-2020' }],
    otherNotableRoles: ['Inigo Montoya in The Princess Bride (1987)', 'Che in Evita (Broadway, 1979)', 'Jason Gideon in Criminal Minds (2005-2007)', 'Various Broadway roles'],
    awards: ['Tony Award for Best Actor in a Musical (Evita)', 'Emmy Nominations for Homeland and Criminal Minds', 'SAG Award Nomination'],
    tags: ['tony-winner', 'dramatic-actor', 'broadway-actor', 'singer'],
    socialLinks: { instagram: 'https://www.instagram.com/mandypatinkin/', twitter: 'https://twitter.com/PatinkinMandy', imdb: 'https://www.imdb.com/name/nm0001597/', wikipedia: 'https://en.wikipedia.org/wiki/Mandy_Patinkin' },
    faqs: [
      { question: 'What is Mandy Patinkin best known for?', answer: 'Patinkin is known for Inigo Montoya in The Princess Bride, Saul Berenson in Homeland, and his Tony-winning Broadway career.' },
      { question: 'What is Mandy Patinkin\'s famous Princess Bride line?', answer: '"Hello. My name is Inigo Montoya. You killed my father. Prepare to die." — one of the most quoted lines in cinema history.' }
    ]
  },
  {
    slug: 'rupert-friend',
    name: 'Rupert Friend',
    bio: 'Rupert William Anthony Friend is an English actor, screenwriter, and director born on October 1, 1981, in Stonesfield, Oxfordshire. He trained at the Webber Douglas Academy of Dramatic Art in London.\n\nFriend gained critical acclaim for his portrayal of Peter Quinn in Homeland (2012-2017), transforming a character originally intended for a brief arc into one of the show\'s most beloved figures. His performance as the troubled, loyal black-ops agent earned widespread fan devotion. He also starred as Agent 47 in Hitman: Agent 47 (2015) and appeared in The Young Victoria, Pride and Prejudice, and Obi-Wan Kenobi.',
    image: { src: '/images/actors/rupert-friend.jpg', alt: 'Rupert Friend', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'homeland', showTitle: 'Homeland', characterName: 'Peter Quinn', years: '2012-2017' }],
    otherNotableRoles: ['Agent 47 in Hitman: Agent 47 (2015)', 'Prince Albert in The Young Victoria (2009)', 'Mr. Wickham in Pride and Prejudice (2005)', 'Grand Inquisitor in Obi-Wan Kenobi (2022)'],
    awards: ['Critics\' Choice Award Nomination for Best Supporting Actor (Homeland)', 'Satellite Award Nomination'],
    tags: ['dramatic-actor', 'british-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm1552231/', wikipedia: 'https://en.wikipedia.org/wiki/Rupert_Friend' },
    faqs: [
      { question: 'What is Rupert Friend best known for?', answer: 'Friend is best known for playing Peter Quinn in Homeland, a role that became a fan favorite across the show\'s run.' },
      { question: 'Was Peter Quinn supposed to be a recurring character?', answer: 'Yes, Quinn was originally intended for a brief arc but became a main character due to the strength of Friend\'s performance and audience response.' }
    ]
  }
];

module.exports = { actors4 };
