// TVCeleb.com - Actor Data Batch 3
// ~56 Actors Across 10 New TV Shows

const actors3 = [
  // ============================================================
  // SEVERANCE ACTORS
  // ============================================================
  {
    slug: 'adam-scott',
    name: 'Adam Scott',
    bio: 'Adam Paul Scott is an American actor and producer born on April 3, 1973, in Santa Cruz, California. He studied at the American Academy of Dramatic Arts and spent years building a career in independent film and television before achieving widespread recognition.\n\nScott is best known for his role as Ben Wyatt in the NBC comedy Parks and Recreation (2010-2015) and as Mark Scout in the Apple TV+ thriller Severance (2022-present). His performance in Severance, portraying a man navigating the eerie consequences of a procedure that separates work and personal memories, earned him a Primetime Emmy nomination and widespread critical acclaim.',
    image: { src: '/images/actors/adam-scott.jpg', alt: 'Adam Scott', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'severance', showTitle: 'Severance', characterName: 'Mark Scout', years: '2022-present' }],
    otherNotableRoles: ['Ben Wyatt in Parks and Recreation (2010-2015)', 'Henry Pollard in Party Down (2009-2010, 2023)', 'Derek in Step Brothers (2008)'],
    awards: ['Primetime Emmy Nomination for Outstanding Lead Actor in a Drama Series (Severance)', 'Critics\' Choice Award Nomination for Best Actor in a Drama Series (Severance)'],
    tags: ['comedy-actor', 'dramatic-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/mradamscott/', twitter: 'https://twitter.com/maboroshi', imdb: 'https://www.imdb.com/name/nm0002235/', wikipedia: 'https://en.wikipedia.org/wiki/Adam_Scott_(actor)' },
    faqs: [
      { question: 'What is Adam Scott best known for?', answer: 'Adam Scott is best known for playing Ben Wyatt in Parks and Recreation and Mark Scout in the Apple TV+ series Severance.' },
      { question: 'Has Adam Scott won an Emmy?', answer: 'Adam Scott has been nominated for a Primetime Emmy for his role in Severance but has not yet won.' },
      { question: 'Was Adam Scott in Parks and Recreation?', answer: 'Yes, he joined Parks and Recreation in Season 2 as Ben Wyatt and remained a main cast member through the series finale in 2015.' }
    ]
  },
  {
    slug: 'britt-lower',
    name: 'Britt Lower',
    bio: 'Britt Lower is an American actress born on April 15, 1985, in Duluth, Minnesota. She studied at Northwestern University and the British American Drama Academy in London. She built her early career with roles in television and independent theater in New York and Chicago.\n\nLower gained widespread recognition for her role as Helly R. in the Apple TV+ sci-fi thriller Severance (2022-present). Her portrayal of a new employee at the mysterious Lumon Industries who rebels against the company\'s sinister severing procedure has been praised as one of the most compelling performances in modern prestige television.',
    image: { src: '/images/actors/britt-lower.jpg', alt: 'Britt Lower', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'severance', showTitle: 'Severance', characterName: 'Helly R.', years: '2022-present' }],
    otherNotableRoles: ['Anna in Man Seeking Woman (2015-2017)', 'Claire in Unforgettable (2015)', 'Liz in Casual (2015)'],
    awards: ['Screen Actors Guild Award Nomination for Outstanding Ensemble in a Drama Series (Severance)'],
    tags: ['dramatic-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/brittlower/', imdb: 'https://www.imdb.com/name/nm3545685/', wikipedia: 'https://en.wikipedia.org/wiki/Britt_Lower' },
    faqs: [
      { question: 'What is Britt Lower best known for?', answer: 'Britt Lower is best known for playing Helly R. in the Apple TV+ thriller Severance.' },
      { question: 'Where did Britt Lower study acting?', answer: 'She studied at Northwestern University and the British American Drama Academy in London.' }
    ]
  },
  {
    slug: 'john-turturro',
    name: 'John Turturro',
    bio: 'John Michael Turturro is an American actor, writer, and filmmaker born on February 28, 1957, in Brooklyn, New York. The son of Italian immigrants, he studied at the Yale School of Drama and began his career in theater and independent film. He became a frequent collaborator of the Coen Brothers and Spike Lee.\n\nTurturro has delivered iconic performances in films such as Barton Fink (1991), The Big Lebowski (1998), and Do the Right Thing (1989). More recently, he earned acclaim for his role as Irving Bailiff in the Apple TV+ series Severance (2022-present), portraying a meticulous data refiner hiding emotional depths beneath his fastidious exterior.',
    image: { src: '/images/actors/john-turturro.jpg', alt: 'John Turturro', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'severance', showTitle: 'Severance', characterName: 'Irving Bailiff', years: '2022-present' }],
    otherNotableRoles: ['Barton Fink in Barton Fink (1991)', 'Jesus Quintana in The Big Lebowski (1998)', 'Carmine Falcone in The Batman (2022)', 'Pino in Do the Right Thing (1989)'],
    awards: ['Cannes Film Festival Best Actor Award (Barton Fink)', 'Screen Actors Guild Award Nomination for Outstanding Ensemble in a Drama Series (Severance)', 'Emmy Award for Outstanding Guest Actor (Monk)'],
    tags: ['character-actor', 'dramatic-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0001806/', wikipedia: 'https://en.wikipedia.org/wiki/John_Turturro' },
    faqs: [
      { question: 'What is John Turturro best known for?', answer: 'John Turturro is known for his extensive film career including Barton Fink and The Big Lebowski, and more recently for playing Irving Bailiff in Severance.' },
      { question: 'Has John Turturro worked with the Coen Brothers?', answer: 'Yes, he is a frequent Coen Brothers collaborator, starring in Barton Fink, Miller\'s Crossing, The Big Lebowski, and O Brother, Where Art Thou?' }
    ]
  },
  {
    slug: 'zach-cherry',
    name: 'Zach Cherry',
    bio: 'Zach Cherry is an American actor and comedian born on April 17, 1987, in Wallingford, Pennsylvania. He honed his craft in the New York stand-up comedy scene and began landing small roles in film and television, including memorable appearances in Crashing and You.\n\nCherry broke out with his role as Dylan George in the Apple TV+ series Severance (2022-present). His portrayal of the quirky, sardonic macrodata refinement team member earned praise for blending deadpan humor with genuine dramatic weight as the show explores its unsettling corporate dystopia.',
    image: { src: '/images/actors/zach-cherry.jpg', alt: 'Zach Cherry', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'severance', showTitle: 'Severance', characterName: 'Dylan George', years: '2022-present' }],
    otherNotableRoles: ['Joe in You (2018)', 'Ray in Crashing (2017)', 'Vendor in Spider-Man: Homecoming (2017)'],
    awards: ['Screen Actors Guild Award Nomination for Outstanding Ensemble in a Drama Series (Severance)'],
    tags: ['comedy-actor', 'character-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/zachcherry/', twitter: 'https://twitter.com/zaaborr', imdb: 'https://www.imdb.com/name/nm5765422/', wikipedia: 'https://en.wikipedia.org/wiki/Zach_Cherry' },
    faqs: [
      { question: 'What is Zach Cherry best known for?', answer: 'Zach Cherry is best known for playing Dylan George in the Apple TV+ series Severance.' },
      { question: 'Is Zach Cherry a stand-up comedian?', answer: 'Yes, Zach Cherry is an active stand-up comedian based in New York City in addition to his acting career.' }
    ]
  },
  {
    slug: 'patricia-arquette',
    name: 'Patricia Arquette',
    bio: 'Patricia T. Arquette is an American actress born on April 8, 1968, in Chicago, Illinois, into a family of actors including siblings Rosanna, Richmond, Alexis, and David Arquette. She began her career in the late 1980s and has built one of the most decorated careers in Hollywood.\n\nArquette won the Academy Award for Best Supporting Actress for Boyhood (2014) and has earned Primetime Emmy Awards for her work in CSI: Cyber and The Act. In the Apple TV+ series Severance (2022-present), she plays Harmony Cobel, the menacing and enigmatic manager of Lumon Industries\' severed floor, delivering a performance of controlled intensity that anchors the show\'s unsettling atmosphere.',
    image: { src: '/images/actors/patricia-arquette.jpg', alt: 'Patricia Arquette', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'severance', showTitle: 'Severance', characterName: 'Harmony Cobel', years: '2022-present' }],
    otherNotableRoles: ['Alabama Worley in True Romance (1993)', 'Allison in Boyhood (2014)', 'Dee Dee Blanchard in The Act (2019)', 'Tilly Mitchell in Escape at Dannemora (2018)'],
    awards: ['Academy Award for Best Supporting Actress (Boyhood)', 'Primetime Emmy Award for Outstanding Lead Actress in a Limited Series (The Act)', 'Primetime Emmy Award for Outstanding Supporting Actress in a Limited Series (Escape at Dannemora)', 'Golden Globe Award for Best Supporting Actress (Boyhood)'],
    tags: ['emmy-winner', 'oscar-winner', 'dramatic-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/patriciaarquette/', twitter: 'https://twitter.com/PattyArquette', imdb: 'https://www.imdb.com/name/nm0000099/', wikipedia: 'https://en.wikipedia.org/wiki/Patricia_Arquette' },
    faqs: [
      { question: 'What is Patricia Arquette best known for?', answer: 'Patricia Arquette is known for her Oscar-winning role in Boyhood, her Emmy-winning performances in The Act and Escape at Dannemora, and as Harmony Cobel in Severance.' },
      { question: 'Has Patricia Arquette won an Oscar?', answer: 'Yes, she won the Academy Award for Best Supporting Actress for Boyhood (2014).' },
      { question: 'Who does Patricia Arquette play in Severance?', answer: 'She plays Harmony Cobel, the intimidating manager who oversees the severed floor at Lumon Industries.' }
    ]
  },
  {
    slug: 'christopher-walken',
    name: 'Christopher Walken',
    bio: 'Christopher Walken is an American actor born Ronald Walken on March 31, 1943, in Astoria, Queens, New York. He began performing as a child on television and in theater, and over six decades has become one of the most distinctive and celebrated actors in American cinema.\n\nWalken won the Academy Award for Best Supporting Actor for The Deer Hunter (1978) and has appeared in over 100 films. In the Apple TV+ series Severance (2022-present), he plays Burt Goodman, the kindly head of the Optics and Design department on Lumon\'s severed floor, bringing warmth and poignancy to the show\'s exploration of memory and identity.',
    image: { src: '/images/actors/christopher-walken.jpg', alt: 'Christopher Walken', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'severance', showTitle: 'Severance', characterName: 'Burt Goodman', years: '2022-present' }],
    otherNotableRoles: ['Nick in The Deer Hunter (1978)', 'Max Zorin in A View to a Kill (1985)', 'Frank Abagnale Sr. in Catch Me If You Can (2002)', 'Captain Koons in Pulp Fiction (1994)'],
    awards: ['Academy Award for Best Supporting Actor (The Deer Hunter)', 'BAFTA Nomination for Best Supporting Actor (Catch Me If You Can)', 'Screen Actors Guild Award Nomination for Outstanding Ensemble (Severance)'],
    tags: ['oscar-winner', 'character-actor', 'dramatic-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0000686/', wikipedia: 'https://en.wikipedia.org/wiki/Christopher_Walken' },
    faqs: [
      { question: 'What is Christopher Walken best known for?', answer: 'Christopher Walken is known for his Oscar-winning role in The Deer Hunter and a legendary career spanning over 100 films, as well as his role as Burt Goodman in Severance.' },
      { question: 'Has Christopher Walken won an Oscar?', answer: 'Yes, he won the Academy Award for Best Supporting Actor for The Deer Hunter (1978).' }
    ]
  },
  // ============================================================
  // HOUSE OF THE DRAGON ACTORS
  // ============================================================
  {
    slug: 'emma-darcy',
    name: 'Emma D\'Arcy',
    bio: 'Emma D\'Arcy is a British actor born on June 27, 1992, in Enfield, London, England. They studied at the Ruskin School of Art at the University of Oxford before training at the London Academy of Music and Dramatic Art (LAMDA). D\'Arcy uses they/them pronouns.\n\nD\'Arcy rose to international fame portraying the adult Princess Rhaenyra Targaryen in the HBO series House of the Dragon (2022-present), the prequel to Game of Thrones. Their nuanced performance as the Targaryen heir navigating political treachery and civil war has been widely praised by critics and audiences alike.',
    image: { src: '/images/actors/emma-darcy.jpg', alt: 'Emma D\'Arcy', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'house-of-the-dragon', showTitle: 'House of the Dragon', characterName: 'Rhaenyra Targaryen', years: '2022-present' }],
    otherNotableRoles: ['Astrid in Wanderlust (2018)', 'Naomi Richards in Truth Seekers (2020)'],
    awards: ['Golden Globe Nomination for Best Actress in a Television Drama Series (House of the Dragon)'],
    tags: ['dramatic-actor', 'british-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/emmadarcy/', imdb: 'https://www.imdb.com/name/nm7170745/', wikipedia: 'https://en.wikipedia.org/wiki/Emma_D%27Arcy' },
    faqs: [
      { question: 'What is Emma D\'Arcy best known for?', answer: 'Emma D\'Arcy is best known for playing Rhaenyra Targaryen in HBO\'s House of the Dragon.' },
      { question: 'What are Emma D\'Arcy\'s pronouns?', answer: 'Emma D\'Arcy uses they/them pronouns and identifies as nonbinary.' }
    ]
  },
  {
    slug: 'matt-smith',
    name: 'Matt Smith',
    bio: 'Matthew Robert Smith is an English actor born on October 28, 1982, in Northampton, England. He studied drama at the University of East Anglia and trained at the National Youth Theatre. At 26, he became the youngest actor to be cast as the Doctor in the BBC science fiction series Doctor Who.\n\nSmith is known for his role as the Eleventh Doctor in Doctor Who (2010-2013) and as Prince Philip, Duke of Edinburgh, in The Crown (2016-2017). In House of the Dragon (2022-present), he plays Prince Daemon Targaryen, the ambitious and volatile brother of King Viserys, delivering a magnetic and unpredictable performance that has become one of the show\'s highlights.',
    image: { src: '/images/actors/matt-smith.jpg', alt: 'Matt Smith', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'house-of-the-dragon', showTitle: 'House of the Dragon', characterName: 'Daemon Targaryen', years: '2022-present' }],
    otherNotableRoles: ['The Eleventh Doctor in Doctor Who (2010-2013)', 'Prince Philip in The Crown (2016-2017)', 'Milo in Terminator Genisys (2015)'],
    awards: ['BAFTA Cymru Award for Best Actor (Doctor Who)', 'Empire Award for Best Male Newcomer (Doctor Who)', 'Screen Actors Guild Award for Outstanding Ensemble in a Drama Series (The Crown)'],
    tags: ['british-actor', 'dramatic-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm1741002/', wikipedia: 'https://en.wikipedia.org/wiki/Matt_Smith_(actor)' },
    faqs: [
      { question: 'What is Matt Smith best known for?', answer: 'Matt Smith is known for playing the Eleventh Doctor in Doctor Who, Prince Philip in The Crown, and Daemon Targaryen in House of the Dragon.' },
      { question: 'Was Matt Smith in Doctor Who?', answer: 'Yes, Matt Smith played the Eleventh Doctor in Doctor Who from 2010 to 2013, becoming the youngest actor to take on the role.' }
    ]
  },
  {
    slug: 'olivia-cooke',
    name: 'Olivia Cooke',
    bio: 'Olivia Kate Cooke is an English actress born on December 27, 1993, in Oldham, Greater Manchester, England. She trained at Oldham Theatre Workshop and began her career in British television before moving to the United States for roles in film and television.\n\nCooke gained early recognition in the A&E series Bates Motel (2013-2017) and Steven Spielberg\'s Ready Player One (2018). She earned international acclaim for her portrayal of the adult Queen Alicent Hightower in HBO\'s House of the Dragon (2022-present), playing the ambitious daughter of Otto Hightower whose political machinations drive much of the show\'s central conflict.',
    image: { src: '/images/actors/olivia-cooke.jpg', alt: 'Olivia Cooke', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'house-of-the-dragon', showTitle: 'House of the Dragon', characterName: 'Alicent Hightower', years: '2022-present' }],
    otherNotableRoles: ['Emma Decody in Bates Motel (2013-2017)', 'Art3mis / Samantha in Ready Player One (2018)', 'Becky Sharp in Vanity Fair (2018)'],
    awards: ['BAFTA Rising Star Nomination', 'Screen Actors Guild Award Nomination for Outstanding Ensemble (House of the Dragon)'],
    tags: ['dramatic-actress', 'british-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/livkatecooke/', imdb: 'https://www.imdb.com/name/nm4972453/', wikipedia: 'https://en.wikipedia.org/wiki/Olivia_Cooke' },
    faqs: [
      { question: 'What is Olivia Cooke best known for?', answer: 'Olivia Cooke is best known for playing Alicent Hightower in House of the Dragon and Emma Decody in Bates Motel.' },
      { question: 'Was Olivia Cooke in Ready Player One?', answer: 'Yes, she played Art3mis / Samantha Cook in Steven Spielberg\'s Ready Player One (2018).' }
    ]
  },
  {
    slug: 'rhys-ifans',
    name: 'Rhys Ifans',
    bio: 'Rhys Ifans, born Rhys Owain Evans on July 22, 1967, in Haverfordwest, Pembrokeshire, Wales, is a Welsh actor and musician. He trained at the Guildhall School of Music and Drama in London and first gained international attention for his hilarious turn as Spike in the romantic comedy Notting Hill (1999).\n\nIfans has built a varied career across film, television, and theater. In HBO\'s House of the Dragon (2022-present), he plays Otto Hightower, the calculating Hand of the King whose political scheming sets the stage for the Targaryen civil war. His commanding performance has been widely praised as one of the show\'s standout portrayals.',
    image: { src: '/images/actors/rhys-ifans.jpg', alt: 'Rhys Ifans', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'house-of-the-dragon', showTitle: 'House of the Dragon', characterName: 'Otto Hightower', years: '2022-present' }],
    otherNotableRoles: ['Spike in Notting Hill (1999)', 'Dr. Curt Connors / The Lizard in The Amazing Spider-Man (2012)', 'Xenophilius Lovegood in Harry Potter and the Deathly Hallows (2010)', 'Edward de Vere in Anonymous (2011)'],
    awards: ['London Critics\' Circle Film Award for British Actor of the Year (Mr. Nice)', 'BAFTA Cymru Award for Best Actor'],
    tags: ['character-actor', 'british-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0406975/', wikipedia: 'https://en.wikipedia.org/wiki/Rhys_Ifans' },
    faqs: [
      { question: 'What is Rhys Ifans best known for?', answer: 'Rhys Ifans is known for his roles in Notting Hill, The Amazing Spider-Man, and as Otto Hightower in House of the Dragon.' },
      { question: 'Is Rhys Ifans Welsh?', answer: 'Yes, Rhys Ifans was born in Haverfordwest, Wales, and is a proud Welsh speaker.' }
    ]
  },
  {
    slug: 'ewan-mitchell',
    name: 'Ewan Mitchell',
    bio: 'Ewan Mitchell is an English actor born on March 15, 1997, in Derby, England. He began acting as a teenager and gained early experience in British television dramas before landing his breakout role.\n\nMitchell rose to prominence portraying Prince Aemond Targaryen in HBO\'s House of the Dragon (2022-present). His intense and menacing performance as the one-eyed dragonrider and key figure in the Targaryen civil war has made him a fan favorite and one of the most talked-about new actors on television.',
    image: { src: '/images/actors/ewan-mitchell.jpg', alt: 'Ewan Mitchell', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'house-of-the-dragon', showTitle: 'House of the Dragon', characterName: 'Aemond Targaryen', years: '2022-present' }],
    otherNotableRoles: ['Osferth in The Last Kingdom (2018-2022)', 'Stint in World on Fire (2019)'],
    awards: [],
    tags: ['dramatic-actor', 'british-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm8377786/', wikipedia: 'https://en.wikipedia.org/wiki/Ewan_Mitchell' },
    faqs: [
      { question: 'What is Ewan Mitchell best known for?', answer: 'Ewan Mitchell is best known for playing Prince Aemond Targaryen in House of the Dragon.' },
      { question: 'Was Ewan Mitchell in The Last Kingdom?', answer: 'Yes, he played Osferth in the Netflix series The Last Kingdom from 2018 to 2022.' }
    ]
  },
  {
    slug: 'fabien-frankel',
    name: 'Fabien Frankel',
    bio: 'Fabien Frankel is a British-French actor born on April 6, 1994, in London, England. His mother is a French-Moroccan casting director and his father is English. He trained at the Royal Academy of Dramatic Art (RADA) and began his career in theater.\n\nFrankel gained international recognition for his role as Ser Criston Cole in HBO\'s House of the Dragon (2022-present). His portrayal of the conflicted knight whose personal loyalties and resentments shape the political landscape of the Targaryen court has made him a central figure in the series.',
    image: { src: '/images/actors/fabien-frankel.jpg', alt: 'Fabien Frankel', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'house-of-the-dragon', showTitle: 'House of the Dragon', characterName: 'Criston Cole', years: '2022-present' }],
    otherNotableRoles: ['Sergeant Gilles Asselin in The Serpent (2021)', 'Leo in Last Christmas (2019)'],
    awards: [],
    tags: ['dramatic-actor', 'british-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/fabienfrankel/', imdb: 'https://www.imdb.com/name/nm10692274/', wikipedia: 'https://en.wikipedia.org/wiki/Fabien_Frankel' },
    faqs: [
      { question: 'What is Fabien Frankel best known for?', answer: 'Fabien Frankel is best known for playing Ser Criston Cole in HBO\'s House of the Dragon.' },
      { question: 'Where did Fabien Frankel train?', answer: 'He trained at the Royal Academy of Dramatic Art (RADA) in London.' }
    ]
  },
  // ============================================================
  // THE WHITE LOTUS ACTORS
  // ============================================================
  {
    slug: 'jennifer-coolidge',
    name: 'Jennifer Coolidge',
    bio: 'Jennifer Audrey Coolidge is an American actress and comedian born on August 28, 1961, in Boston, Massachusetts. She studied at the American Academy of Dramatic Arts and became a beloved comedic presence through roles in films like Legally Blonde (2001) and the American Pie franchise.\n\nCoolidge experienced a major career resurgence with her role as Tanya McQuoid in HBO\'s The White Lotus (2021-2023). Her portrayal of the wealthy, emotionally vulnerable guest earned her the Primetime Emmy Award for Outstanding Supporting Actress in a Limited Series and a Golden Globe Award, cementing her status as one of the most acclaimed performers in recent television.',
    image: { src: '/images/actors/jennifer-coolidge.jpg', alt: 'Jennifer Coolidge', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-white-lotus', showTitle: 'The White Lotus', characterName: 'Tanya McQuoid', years: '2021-2023' }],
    otherNotableRoles: ['Paulette Bonafonté in Legally Blonde (2001, 2003)', 'Stifler\'s Mom in American Pie franchise (1999-2012)', 'Sophie Kachinsky in 2 Broke Girls (2012-2017)'],
    awards: ['Primetime Emmy Award for Outstanding Supporting Actress in a Limited Series (The White Lotus)', 'Golden Globe Award for Best Supporting Actress in a Series (The White Lotus)', 'SAG Award for Outstanding Female Actor in a Limited Series (The White Lotus)'],
    tags: ['emmy-winner', 'comedy-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/jennifercoolidge/', imdb: 'https://www.imdb.com/name/nm0177639/', wikipedia: 'https://en.wikipedia.org/wiki/Jennifer_Coolidge' },
    faqs: [
      { question: 'What is Jennifer Coolidge best known for?', answer: 'Jennifer Coolidge is known for her roles in Legally Blonde and the American Pie franchise, and earned an Emmy for The White Lotus.' },
      { question: 'Did Jennifer Coolidge win an Emmy?', answer: 'Yes, she won the Primetime Emmy for Outstanding Supporting Actress in a Limited Series for The White Lotus in 2022.' },
      { question: 'Is Jennifer Coolidge in both seasons of The White Lotus?', answer: 'Yes, she appeared in both Season 1 (2021) and Season 2 (2022) as Tanya McQuoid.' }
    ]
  },
  {
    slug: 'aubrey-plaza',
    name: 'Aubrey Plaza',
    bio: 'Aubrey Christina Plaza is an American actress and comedian born on June 26, 1984, in Wilmington, Delaware. She studied film at New York University\'s Tisch School of the Arts and trained at the Upright Citizens Brigade Theatre. Her deadpan comedic style quickly distinguished her in both improv and screen work.\n\nPlaza is widely recognized for playing April Ludgate in the NBC sitcom Parks and Recreation (2009-2015). She delivered a critically acclaimed dramatic turn as Harper Spiller in Season 2 of HBO\'s The White Lotus (2022), earning nominations for Emmy and Golden Globe awards for her portrayal of a woman unraveling during a lavish Sicilian vacation.',
    image: { src: '/images/actors/aubrey-plaza.jpg', alt: 'Aubrey Plaza', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-white-lotus', showTitle: 'The White Lotus', characterName: 'Harper Spiller', years: '2022' }],
    otherNotableRoles: ['April Ludgate in Parks and Recreation (2009-2015)', 'Lenny Busker in Legion (2017-2019)', 'Daria in Daria (2024, film)'],
    awards: ['Independent Spirit Award for Best Female Lead (Emily the Criminal)', 'SAG Award Nomination for Outstanding Female Actor in a Limited Series (The White Lotus)'],
    tags: ['comedy-actress', 'dramatic-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/plazadeaubrey/', twitter: 'https://twitter.com/eloeiern', imdb: 'https://www.imdb.com/name/nm2201555/', wikipedia: 'https://en.wikipedia.org/wiki/Aubrey_Plaza' },
    faqs: [
      { question: 'What is Aubrey Plaza best known for?', answer: 'Aubrey Plaza is best known for playing April Ludgate in Parks and Recreation and Harper Spiller in The White Lotus Season 2.' },
      { question: 'Was Aubrey Plaza in Parks and Recreation?', answer: 'Yes, she played the sardonic April Ludgate throughout the entire run of Parks and Recreation (2009-2015).' }
    ]
  },
  {
    slug: 'will-sharpe',
    name: 'Will Sharpe',
    bio: 'Will Sharpe is a British-Japanese actor, writer, and director born on November 23, 1986, in London, England. He grew up partly in Tokyo and studied at Cambridge University. He is known for his multi-hyphenate talents, having created, written, and directed the Channel 4 series Flowers (2016-2018).\n\nSharpe garnered widespread attention for his role as Ethan Spiller in Season 2 of HBO\'s The White Lotus (2022), playing a mild-mannered husband whose Sicilian vacation with college friends takes dark and unexpected turns. His understated performance was praised for its emotional complexity.',
    image: { src: '/images/actors/will-sharpe.jpg', alt: 'Will Sharpe', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-white-lotus', showTitle: 'The White Lotus', characterName: 'Ethan Spiller', years: '2022' }],
    otherNotableRoles: ['Sherlock in Flowers (2016-2018, also creator)', 'Martin in Giri/Haji (2019)', 'Director of The Electrical Life of Louis Wain (2021)'],
    awards: ['BAFTA Nomination for Best Short Film (Cockroach)', 'Screen Actors Guild Award Nomination for Outstanding Ensemble in a Limited Series (The White Lotus)'],
    tags: ['dramatic-actor', 'british-actor', 'writer'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm4407588/', wikipedia: 'https://en.wikipedia.org/wiki/Will_Sharpe' },
    faqs: [
      { question: 'What is Will Sharpe best known for?', answer: 'Will Sharpe is best known for playing Ethan Spiller in The White Lotus Season 2 and for creating the series Flowers.' },
      { question: 'Is Will Sharpe also a director?', answer: 'Yes, he is a multi-talented filmmaker who created and directed Flowers and directed The Electrical Life of Louis Wain (2021).' }
    ]
  },
  {
    slug: 'meghann-fahy',
    name: 'Meghann Fahy',
    bio: 'Meghann Fahy is an American actress born on April 25, 1990, in Longmeadow, Massachusetts. She began her career on Broadway, appearing in the original cast of Next to Normal (2009). She transitioned to television with roles in The Bold Type and other series.\n\nFahy earned critical acclaim for her role as Daphne Sullivan in Season 2 of HBO\'s The White Lotus (2022). Her portrayal of a seemingly carefree wife harboring hidden depths beneath a polished exterior was praised for its layered complexity and became one of the season\'s most discussed performances.',
    image: { src: '/images/actors/meghann-fahy.jpg', alt: 'Meghann Fahy', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-white-lotus', showTitle: 'The White Lotus', characterName: 'Daphne Sullivan', years: '2022' }],
    otherNotableRoles: ['Sutton Brady in The Bold Type (2017-2021)', 'Hannah O\'Connor in Next to Normal (Broadway, 2009)'],
    awards: ['Screen Actors Guild Award Nomination for Outstanding Ensemble in a Limited Series (The White Lotus)'],
    tags: ['dramatic-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/melofahy/', imdb: 'https://www.imdb.com/name/nm3439965/', wikipedia: 'https://en.wikipedia.org/wiki/Meghann_Fahy' },
    faqs: [
      { question: 'What is Meghann Fahy best known for?', answer: 'Meghann Fahy is best known for playing Daphne Sullivan in The White Lotus Season 2 and Sutton Brady in The Bold Type.' },
      { question: 'Was Meghann Fahy on Broadway?', answer: 'Yes, she appeared in the original Broadway cast of Next to Normal in 2009.' }
    ]
  },
  {
    slug: 'haley-lu-richardson',
    name: 'Haley Lu Richardson',
    bio: 'Haley Lu Richardson is an American actress born on March 7, 1995, in Phoenix, Arizona. She trained as a dancer before transitioning to acting and quickly established herself as one of the most promising young actresses in independent film.\n\nRichardson starred as Portia in Season 2 of HBO\'s The White Lotus (2022), playing a young woman swept up in a romantic entanglement during a Sicilian vacation. She is also known for her acclaimed performances in the independent films Columbus (2017), Five Feet Apart (2019), and The Edge of Seventeen (2016).',
    image: { src: '/images/actors/haley-lu-richardson.jpg', alt: 'Haley Lu Richardson', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-white-lotus', showTitle: 'The White Lotus', characterName: 'Portia', years: '2022' }],
    otherNotableRoles: ['Casey in Columbus (2017)', 'Stella Grant in Five Feet Apart (2019)', 'Krista in The Edge of Seventeen (2016)'],
    awards: ['Gotham Independent Film Award Nomination for Breakthrough Actor (Columbus)', 'Screen Actors Guild Award Nomination for Outstanding Ensemble in a Limited Series (The White Lotus)'],
    tags: ['dramatic-actress', 'young-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/haleylurichardson/', imdb: 'https://www.imdb.com/name/nm5765381/', wikipedia: 'https://en.wikipedia.org/wiki/Haley_Lu_Richardson' },
    faqs: [
      { question: 'What is Haley Lu Richardson best known for?', answer: 'She is best known for playing Portia in The White Lotus Season 2 and for her acclaimed role in the independent film Columbus (2017).' },
      { question: 'Was Haley Lu Richardson a dancer?', answer: 'Yes, she trained as a competitive dancer in Phoenix before transitioning to acting.' }
    ]
  },
  {
    slug: 'jon-gries',
    name: 'Jon Gries',
    bio: 'Jon Gries is an American actor born on June 17, 1957, in Glendale, California. The son of actor Tom Gries, he began acting as a child and has maintained a prolific career spanning over four decades, with roles in both comedic and dramatic projects.\n\nGries is widely recognized for playing Uncle Rico in Napoleon Dynamite (2004) and gained renewed acclaim for his role as Greg Hunt in HBO\'s The White Lotus (2021-2022). His portrayal of Tanya McQuoid\'s long-suffering partner in Season 1, followed by a memorable arc in Season 2, showcased his considerable dramatic range.',
    image: { src: '/images/actors/jon-gries.jpg', alt: 'Jon Gries', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-white-lotus', showTitle: 'The White Lotus', characterName: 'Greg Hunt', years: '2021-2022' }],
    otherNotableRoles: ['Uncle Rico in Napoleon Dynamite (2004)', 'Roger Linus in Lost (2007-2008)', 'Broots in The Pretender (1996-2000)'],
    awards: ['Screen Actors Guild Award Nomination for Outstanding Ensemble in a Limited Series (The White Lotus)'],
    tags: ['character-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0341743/', wikipedia: 'https://en.wikipedia.org/wiki/Jon_Gries' },
    faqs: [
      { question: 'What is Jon Gries best known for?', answer: 'Jon Gries is best known for playing Uncle Rico in Napoleon Dynamite and Greg Hunt in The White Lotus.' },
      { question: 'Was Jon Gries in Lost?', answer: 'Yes, he had a recurring role as Roger Linus, Ben Linus\'s father, in Lost.' }
    ]
  },
  // ============================================================
  // SUITS ACTORS
  // ============================================================
  {
    slug: 'gabriel-macht',
    name: 'Gabriel Macht',
    bio: 'Gabriel Swann Macht is an American actor born on January 22, 1972, in The Bronx, New York City. He is the son of actor Stephen Macht and grew up in a family immersed in the entertainment industry. He studied at Carnegie Mellon University\'s School of Drama.\n\nMacht is best known for his starring role as Harvey Specter in the USA Network legal drama Suits (2011-2019). His portrayal of the charismatic, razor-sharp corporate attorney became iconic and helped the show achieve a massive resurgence on Netflix in 2023, years after its original run concluded.',
    image: { src: '/images/actors/gabriel-macht.jpg', alt: 'Gabriel Macht', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'suits', showTitle: 'Suits', characterName: 'Harvey Specter', years: '2011-2019' }],
    otherNotableRoles: ['The Spirit in The Spirit (2008)', 'Tom Reilly in A Love Song for Bobby Long (2004)', 'Graham Chase in Behind Enemy Lines (2001)'],
    awards: ['People\'s Choice Award Nomination for Favorite Cable TV Actor (Suits)'],
    tags: ['dramatic-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/gabrielmacht/', twitter: 'https://twitter.com/GabrielMacht', imdb: 'https://www.imdb.com/name/nm0532683/', wikipedia: 'https://en.wikipedia.org/wiki/Gabriel_Macht' },
    faqs: [
      { question: 'What is Gabriel Macht best known for?', answer: 'Gabriel Macht is best known for playing Harvey Specter in the legal drama Suits (2011-2019).' },
      { question: 'Is Gabriel Macht returning for the Suits spinoff?', answer: 'Gabriel Macht has been involved in discussions around Suits-related projects following the show\'s massive Netflix resurgence in 2023.' }
    ]
  },
  {
    slug: 'patrick-j-adams',
    name: 'Patrick J. Adams',
    bio: 'Patrick Johannes Adams is a Canadian-American actor born on August 27, 1981, in Toronto, Ontario, Canada. He studied at the University of Southern California and trained at the Atlantic Theater Company in New York. He established himself through guest roles in television before his breakthrough.\n\nAdams starred as Mike Ross in the USA Network legal drama Suits (2011-2019), playing a college dropout with an eidetic memory who lands a position at a top law firm despite never attending law school. The role made him a household name and his chemistry with Gabriel Macht\'s Harvey Specter anchored the series throughout its run.',
    image: { src: '/images/actors/patrick-j-adams.jpg', alt: 'Patrick J. Adams', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'suits', showTitle: 'Suits', characterName: 'Mike Ross', years: '2011-2019' }],
    otherNotableRoles: ['John Young in The Right Stuff (2020)', 'Thomas in Pillow Talk (2011)', 'Various roles in Orphan Black (2015)'],
    awards: ['Screen Actors Guild Award Nomination for Outstanding Ensemble in a Drama Series (Suits)'],
    tags: ['dramatic-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/halfadams/', twitter: 'https://twitter.com/halfadams', imdb: 'https://www.imdb.com/name/nm1740160/', wikipedia: 'https://en.wikipedia.org/wiki/Patrick_J._Adams' },
    faqs: [
      { question: 'What is Patrick J. Adams best known for?', answer: 'Patrick J. Adams is best known for playing Mike Ross in the legal drama Suits.' },
      { question: 'Is Patrick J. Adams Canadian?', answer: 'Yes, he was born in Toronto, Ontario, Canada, and holds both Canadian and American citizenship.' }
    ]
  },
  {
    slug: 'gina-torres',
    name: 'Gina Torres',
    bio: 'Gina Torres is an American actress born on April 25, 1969, in New York City. Of Cuban descent, she trained as a vocalist and began her career in theater before transitioning to television and film, where she became known for her commanding screen presence.\n\nTorres is recognized for her roles as Jessica Pearson in Suits (2011-2018) and Zoe Washburne in Joss Whedon\'s Firefly (2002) and Serenity (2005). Her portrayal of the fierce managing partner Jessica Pearson in Suits was so popular that it spawned a short-lived spinoff series, Pearson (2019).',
    image: { src: '/images/actors/gina-torres.jpg', alt: 'Gina Torres', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'suits', showTitle: 'Suits', characterName: 'Jessica Pearson', years: '2011-2018' }],
    otherNotableRoles: ['Zoe Washburne in Firefly (2002) and Serenity (2005)', 'Jessica Pearson in Pearson (2019)', 'Ketty Jay in Hannibal (2013-2015)', 'Tommy Vega in 9-1-1: Lone Star (2020-present)'],
    awards: ['ALMA Award for Outstanding Actress in a Drama Series (Suits)', 'Saturn Award Nomination for Best Supporting Actress (Serenity)'],
    tags: ['dramatic-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/ginatorres/', twitter: 'https://twitter.com/GinaTorres', imdb: 'https://www.imdb.com/name/nm0868659/', wikipedia: 'https://en.wikipedia.org/wiki/Gina_Torres' },
    faqs: [
      { question: 'What is Gina Torres best known for?', answer: 'Gina Torres is best known for playing Jessica Pearson in Suits and Zoe Washburne in Firefly.' },
      { question: 'Did Gina Torres have a Suits spinoff?', answer: 'Yes, she starred in Pearson (2019), a spinoff centered on her Suits character Jessica Pearson.' }
    ]
  },
  {
    slug: 'rick-hoffman',
    name: 'Rick Hoffman',
    bio: 'Richard Edward Hoffman is an American actor born on June 12, 1970, in New York City. He studied at the University of Arizona and began his career with guest roles in television series throughout the late 1990s and 2000s.\n\nHoffman is best known for his role as Louis Litt in the USA Network legal drama Suits (2011-2019). His portrayal of the neurotic, ambitious, and unexpectedly sympathetic senior partner became one of the show\'s most beloved elements, with the character\'s emotional depth and comedic quirks earning him a devoted fanbase.',
    image: { src: '/images/actors/rick-hoffman.jpg', alt: 'Rick Hoffman', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'suits', showTitle: 'Suits', characterName: 'Louis Litt', years: '2011-2019' }],
    otherNotableRoles: ['Jerry Best in The Bernie Mac Show (2003)', 'Patrick Rush in Samantha Who? (2007)', 'District Attorney in Hostel (2005)'],
    awards: ['People\'s Choice Award Nomination for Favorite Cable TV Actor (Suits)'],
    tags: ['comedy-actor', 'character-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/rickhoffman_official/', twitter: 'https://twitter.com/RickHoffman_', imdb: 'https://www.imdb.com/name/nm0388715/', wikipedia: 'https://en.wikipedia.org/wiki/Rick_Hoffman' },
    faqs: [
      { question: 'What is Rick Hoffman best known for?', answer: 'Rick Hoffman is best known for playing Louis Litt in the legal drama Suits.' },
      { question: 'Was Rick Hoffman in every season of Suits?', answer: 'Yes, he appeared as Louis Litt in all nine seasons of Suits (2011-2019) as a main cast member.' }
    ]
  },
  {
    slug: 'sarah-rafferty',
    name: 'Sarah Rafferty',
    bio: 'Sarah Gray Rafferty is an American actress born on December 6, 1972, in New Canaan, Connecticut. She studied English and theater at Hamilton College and earned an MFA from the Yale School of Drama. She built her early career through theater and television guest roles.\n\nRafferty is best known for playing Donna Paulsen in the USA Network legal drama Suits (2011-2019). Her portrayal of Harvey Specter\'s fiercely loyal and indispensable secretary, who eventually rises to become COO of the firm, was a fan favorite throughout the series.',
    image: { src: '/images/actors/sarah-rafferty.jpg', alt: 'Sarah Rafferty', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'suits', showTitle: 'Suits', characterName: 'Donna Paulsen', years: '2011-2019' }],
    otherNotableRoles: ['Dr. Pamela Blake in Grey\'s Anatomy (2022)', 'Roles in Law & Order, CSI, Bones'],
    awards: ['Screen Actors Guild Award Nomination for Outstanding Ensemble in a Drama Series (Suits)'],
    tags: ['dramatic-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/sarah_rafferty/', twitter: 'https://twitter.com/sarahgrafferty', imdb: 'https://www.imdb.com/name/nm1423048/', wikipedia: 'https://en.wikipedia.org/wiki/Sarah_Rafferty' },
    faqs: [
      { question: 'What is Sarah Rafferty best known for?', answer: 'Sarah Rafferty is best known for playing Donna Paulsen in the legal drama Suits.' },
      { question: 'Did Sarah Rafferty go to Yale?', answer: 'Yes, she earned her MFA from the Yale School of Drama.' }
    ]
  },
  {
    slug: 'meghan-markle',
    name: 'Meghan Markle',
    bio: 'Rachel Meghan Markle is an American former actress and member of the British royal family, born on August 4, 1981, in Los Angeles, California. She studied at Northwestern University, double-majoring in theater and international studies. Before acting, she worked as a freelance calligrapher and briefcase model on Deal or No Deal.\n\nMarkle is best known for her role as Rachel Zane in the USA Network legal drama Suits (2011-2018). She departed the show after seven seasons when she became engaged to Prince Harry, Duke of Sussex. The couple married in May 2018, and Markle became the Duchess of Sussex.',
    image: { src: '/images/actors/meghan-markle.jpg', alt: 'Meghan Markle', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'suits', showTitle: 'Suits', characterName: 'Rachel Zane', years: '2011-2018' }],
    otherNotableRoles: ['Briefcase Model on Deal or No Deal (2006-2007)', 'Amy Jessup in Fringe (2009)', 'Junior FBI Agent in Get Him to the Greek (2010)'],
    awards: ['Gracie Award for Outstanding Female Actor in a Supporting Role (Suits)'],
    tags: ['dramatic-actress'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm1620783/', wikipedia: 'https://en.wikipedia.org/wiki/Meghan,_Duchess_of_Sussex' },
    faqs: [
      { question: 'What is Meghan Markle best known for?', answer: 'Meghan Markle is known for playing Rachel Zane in Suits and for becoming the Duchess of Sussex after marrying Prince Harry in 2018.' },
      { question: 'Why did Meghan Markle leave Suits?', answer: 'She left Suits after Season 7 in 2018 following her engagement and marriage to Prince Harry, Duke of Sussex.' },
      { question: 'Did Meghan Markle go to college?', answer: 'Yes, she graduated from Northwestern University with a double major in theater and international studies.' }
    ]
  },
  // ============================================================
  // BETTER CALL SAUL ACTORS (Bob Odenkirk & Jonathan Banks already in actors.js)
  // ============================================================
  {
    slug: 'rhea-seehorn',
    name: 'Rhea Seehorn',
    bio: 'Rhea Seehorn is an American actress born on May 12, 1972, in Norfolk, Virginia. She grew up in various locations due to her father\'s military career and studied architecture at George Mason University before pursuing acting. She spent years working in theater, commercials, and television guest roles before her breakthrough.\n\nSeehorn earned widespread critical acclaim for her role as Kim Wexler in AMC\'s Better Call Saul (2015-2022). Her portrayal of the brilliant, morally complex attorney whose relationship with Jimmy McGill drives much of the series has been hailed as one of the greatest performances in modern television, despite never receiving an Emmy nomination during the show\'s run.',
    image: { src: '/images/actors/rhea-seehorn.jpg', alt: 'Rhea Seehorn', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'better-call-saul', showTitle: 'Better Call Saul', characterName: 'Kim Wexler', years: '2015-2022' }],
    otherNotableRoles: ['Andrea Harrison in The Cutting Edge (2010)', 'Various TV guest roles in Franklin & Bash, Burn Notice'],
    awards: ['Critics\' Choice Award Nomination for Best Actress in a Drama Series (Better Call Saul)', 'Satellite Award for Best Actress in a Series (Better Call Saul)', 'Saturn Award for Best Actress on Television (Better Call Saul)'],
    tags: ['dramatic-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/rheaseehorn/', twitter: 'https://twitter.com/rhaborhea', imdb: 'https://www.imdb.com/name/nm0781753/', wikipedia: 'https://en.wikipedia.org/wiki/Rhea_Seehorn' },
    faqs: [
      { question: 'What is Rhea Seehorn best known for?', answer: 'Rhea Seehorn is best known for playing Kim Wexler in Better Call Saul (2015-2022).' },
      { question: 'Was Rhea Seehorn ever nominated for an Emmy?', answer: 'Despite widespread critical acclaim, she was famously never nominated for a Primetime Emmy for Better Call Saul, which many considered a significant oversight.' },
      { question: 'What did Rhea Seehorn study in college?', answer: 'She originally studied architecture at George Mason University before pivoting to an acting career.' }
    ]
  },
  {
    slug: 'michael-mckean',
    name: 'Michael McKean',
    bio: 'Michael John McKean is an American actor, comedian, writer, and musician born on October 17, 1947, in New York City. He studied at Carnegie Mellon University and rose to fame as Lenny Kosnowski in the sitcom Laverne & Shirley (1976-1983) and as David St. Hubbins in the mockumentary This Is Spinal Tap (1984).\n\nMcKean delivered a career-defining dramatic performance as Chuck McGill in AMC\'s Better Call Saul (2015-2018). His portrayal of Jimmy McGill\'s brilliant but deeply troubled older brother, an accomplished lawyer suffering from electromagnetic hypersensitivity, earned him a Primetime Emmy nomination and widespread critical praise.',
    image: { src: '/images/actors/michael-mckean.jpg', alt: 'Michael McKean', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'better-call-saul', showTitle: 'Better Call Saul', characterName: 'Chuck McGill', years: '2015-2018' }],
    otherNotableRoles: ['Lenny Kosnowski in Laverne & Shirley (1976-1983)', 'David St. Hubbins in This Is Spinal Tap (1984)', 'Perry White in Smallville (2010-2011)'],
    awards: ['Primetime Emmy Nomination for Outstanding Guest Actor in a Drama Series (Better Call Saul)', 'Grammy Award for Best Song Written for Visual Media (A Mighty Wind)', 'SAG Award for Outstanding Ensemble in a Drama Series Nomination (Better Call Saul)'],
    tags: ['comedy-actor', 'dramatic-actor', 'musician'],
    socialLinks: { twitter: 'https://twitter.com/MJMcKean', imdb: 'https://www.imdb.com/name/nm0571106/', wikipedia: 'https://en.wikipedia.org/wiki/Michael_McKean' },
    faqs: [
      { question: 'What is Michael McKean best known for?', answer: 'Michael McKean is known for his comedic roles in Laverne & Shirley and This Is Spinal Tap, and his dramatic turn as Chuck McGill in Better Call Saul.' },
      { question: 'Was Michael McKean in This Is Spinal Tap?', answer: 'Yes, he co-created and starred as David St. Hubbins in the classic mockumentary This Is Spinal Tap (1984).' }
    ]
  },
  {
    slug: 'michael-mando',
    name: 'Michael Mando',
    bio: 'Michael Mando is a Canadian actor born on July 13, 1981, in Quebec City, Quebec, Canada. Of Afro-Latino descent, he studied at Dawson College in Montreal and became known for his versatile work across film, television, and video games.\n\nMando gained recognition for voicing and motion-capturing the villain Vaas Montenegro in the video game Far Cry 3 (2012), one of gaming\'s most iconic antagonists. He earned critical acclaim for his role as Nacho Varga in AMC\'s Better Call Saul (2015-2022), portraying a conflicted cartel operative caught between criminal factions in a performance noted for its tension and emotional depth.',
    image: { src: '/images/actors/michael-mando.jpg', alt: 'Michael Mando', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'better-call-saul', showTitle: 'Better Call Saul', characterName: 'Nacho Varga', years: '2015-2022' }],
    otherNotableRoles: ['Vaas Montenegro in Far Cry 3 (2012, voice/motion capture)', 'Vic Schmidt in Orphan Black (2013)', 'Mac Gargan / Scorpion in Spider-Man: Homecoming (2017)'],
    awards: ['ACTRA Award for Outstanding Performance (Better Call Saul)', 'Canadian Screen Award Nomination for Best Performance (Orphan Black)'],
    tags: ['dramatic-actor', 'voice-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/mandoism/', twitter: 'https://twitter.com/MandoMichael', imdb: 'https://www.imdb.com/name/nm2581521/', wikipedia: 'https://en.wikipedia.org/wiki/Michael_Mando' },
    faqs: [
      { question: 'What is Michael Mando best known for?', answer: 'Michael Mando is best known for playing Nacho Varga in Better Call Saul and voicing Vaas Montenegro in Far Cry 3.' },
      { question: 'Was Michael Mando in Spider-Man?', answer: 'Yes, he played Mac Gargan (Scorpion) in Spider-Man: Homecoming (2017).' }
    ]
  },
  {
    slug: 'tony-dalton',
    name: 'Tony Dalton',
    bio: 'Tony Dalton is an American-Mexican actor born on February 28, 1975, in Laredo, Texas, and raised in Mexico City. He is bilingual in English and Spanish and built a successful career in Mexican television and film before crossing over to American productions.\n\nDalton earned critical acclaim for his charismatic portrayal of Lalo Salamanca in AMC\'s Better Call Saul (2018-2022). His magnetic performance as the clever and dangerous Salamanca cartel heir became one of the show\'s most compelling elements and earned him widespread recognition in the United States.',
    image: { src: '/images/actors/tony-dalton.jpg', alt: 'Tony Dalton', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'better-call-saul', showTitle: 'Better Call Saul', characterName: 'Lalo Salamanca', years: '2018-2022' }],
    otherNotableRoles: ['Jack Duquesne / Swordsman in Hawkeye (2021)', 'Rubén Oseguera in Sr. Ávila (2013-2018)', 'Various roles in Mexican cinema'],
    awards: ['Critics\' Choice Award Nomination for Best Supporting Actor in a Drama Series (Better Call Saul)', 'Primetime Emmy Nomination for Outstanding Supporting Actor in a Drama Series (Better Call Saul)'],
    tags: ['dramatic-actor', 'villain'],
    socialLinks: { instagram: 'https://www.instagram.com/tikidalton/', imdb: 'https://www.imdb.com/name/nm1451897/', wikipedia: 'https://en.wikipedia.org/wiki/Tony_Dalton' },
    faqs: [
      { question: 'What is Tony Dalton best known for?', answer: 'Tony Dalton is best known for playing Lalo Salamanca in Better Call Saul and Jack Duquesne in Marvel\'s Hawkeye.' },
      { question: 'Is Tony Dalton Mexican?', answer: 'He was born in Laredo, Texas, but raised in Mexico City and holds both American and Mexican citizenship.' }
    ]
  },
  // ============================================================
  // THE BOYS ACTORS
  // ============================================================
  {
    slug: 'karl-urban',
    name: 'Karl Urban',
    bio: 'Karl-Heinz Urban is a New Zealand actor born on June 7, 1972, in Wellington, New Zealand. He began acting in New Zealand television series as a teenager and built an impressive international career in major film franchises.\n\nUrban is known for his roles as Éomer in The Lord of the Rings trilogy (2002-2003), Dr. Leonard "Bones" McCoy in the Star Trek reboot films (2009-2016), and Judge Dredd in Dredd (2012). He stars as Billy Butcher in the Amazon Prime Video series The Boys (2019-present), leading a ragtag group of vigilantes against corrupt superheroes in a performance that blends dark humor with visceral intensity.',
    image: { src: '/images/actors/karl-urban.jpg', alt: 'Karl Urban', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-boys', showTitle: 'The Boys', characterName: 'Billy Butcher', years: '2019-present' }],
    otherNotableRoles: ['Éomer in The Lord of the Rings (2002-2003)', 'Dr. McCoy in Star Trek (2009, 2013, 2016)', 'Judge Dredd in Dredd (2012)', 'Skurge in Thor: Ragnarok (2017)'],
    awards: ['Saturn Award for Best Actor on Television (The Boys)', 'Empire Award for Best Newcomer (The Lord of the Rings)'],
    tags: ['action-actor', 'dramatic-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/karlurban/', twitter: 'https://twitter.com/KarlUrban', imdb: 'https://www.imdb.com/name/nm0881631/', wikipedia: 'https://en.wikipedia.org/wiki/Karl_Urban' },
    faqs: [
      { question: 'What is Karl Urban best known for?', answer: 'Karl Urban is known for playing Billy Butcher in The Boys, Éomer in The Lord of the Rings, and Dr. McCoy in the Star Trek reboot films.' },
      { question: 'Is Karl Urban from New Zealand?', answer: 'Yes, he was born and raised in Wellington, New Zealand.' }
    ]
  },
  {
    slug: 'antony-starr',
    name: 'Antony Starr',
    bio: 'Antony Starr is a New Zealand actor born on October 25, 1975, in Wellington, New Zealand. He studied at the Victoria University of Wellington and built his career in New Zealand television, notably in the series Outrageous Fortune (2005-2010), where he played twins.\n\nStarr achieved international fame for his terrifying portrayal of Homelander in the Amazon Prime Video series The Boys (2019-present). His performance as the psychopathic, narcissistic leader of the superhero team The Seven has been acclaimed as one of the most compelling villain performances in television history, earning him multiple Critics\' Choice Award nominations.',
    image: { src: '/images/actors/antony-starr.jpg', alt: 'Antony Starr', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-boys', showTitle: 'The Boys', characterName: 'Homelander', years: '2019-present' }],
    otherNotableRoles: ['Van and Jethro West in Outrageous Fortune (2005-2010)', 'Lucas Hood in Banshee (2013-2016)'],
    awards: ['Critics\' Choice Award Nomination for Best Actor in a Drama Series (The Boys)', 'Saturn Award for Best Actor on Television (The Boys)', 'New Zealand Film and Television Award for Best Actor (Outrageous Fortune)'],
    tags: ['dramatic-actor', 'villain'],
    socialLinks: { instagram: 'https://www.instagram.com/antaborr/', imdb: 'https://www.imdb.com/name/nm1102278/', wikipedia: 'https://en.wikipedia.org/wiki/Antony_Starr' },
    faqs: [
      { question: 'What is Antony Starr best known for?', answer: 'Antony Starr is best known for his terrifying portrayal of Homelander in The Boys.' },
      { question: 'Was Antony Starr in Banshee?', answer: 'Yes, he starred as Lucas Hood in the Cinemax action series Banshee (2013-2016).' }
    ]
  },
  {
    slug: 'jack-quaid',
    name: 'Jack Quaid',
    bio: 'Jack Henry Quaid is an American actor born on April 24, 1992, in Los Angeles, California. He is the son of actors Dennis Quaid and Meg Ryan. He studied at New York University\'s Tisch School of the Arts and made his film debut in The Hunger Games (2012).\n\nQuaid stars as Hughie Campbell in the Amazon Prime Video series The Boys (2019-present), portraying an ordinary man drawn into a vigilante crusade against corrupt superheroes after a personal tragedy. His everyman performance provides the emotional anchor for the show\'s dark satire of superhero culture.',
    image: { src: '/images/actors/jack-quaid.jpg', alt: 'Jack Quaid', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-boys', showTitle: 'The Boys', characterName: 'Hughie Campbell', years: '2019-present' }],
    otherNotableRoles: ['Marvel in The Hunger Games (2012)', 'Brad in Plus One (2019)', 'Richie Kirsch in Scream (2022)'],
    awards: ['Saturn Award Nomination for Best Actor on Television (The Boys)'],
    tags: ['dramatic-actor', 'young-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/jack_quaid/', twitter: 'https://twitter.com/JackQuaid92', imdb: 'https://www.imdb.com/name/nm4425051/', wikipedia: 'https://en.wikipedia.org/wiki/Jack_Quaid' },
    faqs: [
      { question: 'What is Jack Quaid best known for?', answer: 'Jack Quaid is best known for playing Hughie Campbell in The Boys.' },
      { question: 'Are Jack Quaid\'s parents famous?', answer: 'Yes, he is the son of actors Dennis Quaid and Meg Ryan.' }
    ]
  },
  {
    slug: 'erin-moriarty',
    name: 'Erin Moriarty',
    bio: 'Erin Moriarty is an American actress born on June 24, 1994, in New York City. She began acting as a child and appeared in television series including One Life to Live, Red Widow, and True Detective before her breakout role.\n\nMoriarty stars as Annie January / Starlight in the Amazon Prime Video series The Boys (2019-present). Her portrayal of the idealistic superhero who discovers the dark truth behind the corporate superhero team The Seven has been praised for its emotional depth and moral complexity, serving as the show\'s conscience.',
    image: { src: '/images/actors/erin-moriarty.jpg', alt: 'Erin Moriarty', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-boys', showTitle: 'The Boys', characterName: 'Annie January / Starlight', years: '2019-present' }],
    otherNotableRoles: ['Audrey in True Detective (2014)', 'Hope Shlottman in Jessica Jones (2015)', 'Kelly in Blood Father (2016)'],
    awards: ['Saturn Award Nomination for Best Actress on Television (The Boys)'],
    tags: ['dramatic-actress', 'young-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/erinelairmoriarty/', imdb: 'https://www.imdb.com/name/nm5765634/', wikipedia: 'https://en.wikipedia.org/wiki/Erin_Moriarty_(actress)' },
    faqs: [
      { question: 'What is Erin Moriarty best known for?', answer: 'Erin Moriarty is best known for playing Starlight / Annie January in The Boys.' },
      { question: 'Was Erin Moriarty in True Detective?', answer: 'Yes, she appeared as Audrey in Season 1 of True Detective (2014).' }
    ]
  },
  {
    slug: 'tomer-capone',
    name: 'Tomer Capone',
    bio: 'Tomer Capone is an Israeli actor born on September 16, 1986, in Arad, Israel. He studied at the Nissan Nativ Acting Studio in Tel Aviv and built a successful career in Israeli film and television before transitioning to American productions.\n\nCapone gained international recognition for his role as Frenchie (Serge) in the Amazon Prime Video series The Boys (2019-present). His charming and multifaceted portrayal of the skilled but morally conflicted vigilante has made him a fan favorite, bringing warmth and humanity to the show\'s dark world.',
    image: { src: '/images/actors/tomer-capone.jpg', alt: 'Tomer Capone', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-boys', showTitle: 'The Boys', characterName: 'Frenchie', years: '2019-present' }],
    otherNotableRoles: ['Dani in Fauda (2015)', 'Zohan in When Heroes Fly (2018)', 'Various Israeli film roles'],
    awards: ['Israeli Academy Award Nomination for Best Supporting Actor (Charlie Golf One)'],
    tags: ['dramatic-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/tomercapone/', imdb: 'https://www.imdb.com/name/nm5904972/', wikipedia: 'https://en.wikipedia.org/wiki/Tomer_Capone' },
    faqs: [
      { question: 'What is Tomer Capone best known for?', answer: 'Tomer Capone is best known for playing Frenchie in The Boys.' },
      { question: 'Is Tomer Capone Israeli?', answer: 'Yes, he was born in Arad, Israel, and built his early career in Israeli television and film.' }
    ]
  },
  {
    slug: 'karen-fukuhara',
    name: 'Karen Fukuhara',
    bio: 'Karen Fukuhara is an American actress born on February 10, 1992, in Los Angeles, California. Of Japanese descent, she studied at the University of California, Los Angeles (UCLA) and trained in martial arts, which has informed many of her action-oriented roles.\n\nFukuhara made her film debut as Katana in Suicide Squad (2016) and stars as Kimiko Miyashiro / The Female in the Amazon Prime Video series The Boys (2019-present). Her largely wordless but emotionally powerful performance as the formerly captive super-powered warrior has been widely praised for its physical expressiveness and depth.',
    image: { src: '/images/actors/karen-fukuhara.jpg', alt: 'Karen Fukuhara', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'the-boys', showTitle: 'The Boys', characterName: 'Kimiko Miyashiro', years: '2019-present' }],
    otherNotableRoles: ['Katana in Suicide Squad (2016)', 'Glimmer in She-Ra and the Princesses of Power (2018-2020, voice)'],
    awards: ['Behind the Voice Actors Award for Best Female Lead Vocal Performance (She-Ra)'],
    tags: ['action-actress', 'dramatic-actress', 'voice-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/karenfukuhara/', twitter: 'https://twitter.com/KarenFukuhara', imdb: 'https://www.imdb.com/name/nm7752194/', wikipedia: 'https://en.wikipedia.org/wiki/Karen_Fukuhara' },
    faqs: [
      { question: 'What is Karen Fukuhara best known for?', answer: 'Karen Fukuhara is best known for playing Kimiko in The Boys and Katana in Suicide Squad.' },
      { question: 'Does Karen Fukuhara do her own stunts?', answer: 'She is trained in martial arts, which has helped her perform much of the action in her roles.' }
    ]
  },
  // ============================================================
  // FLEABAG ACTORS
  // ============================================================
  {
    slug: 'phoebe-waller-bridge',
    name: 'Phoebe Waller-Bridge',
    bio: 'Phoebe Mary Waller-Bridge is an English actress, writer, and producer born on July 14, 1985, in Ealing, London, England. She studied at the Royal Academy of Dramatic Art (RADA) and adapted her Edinburgh Fringe one-woman show into the groundbreaking BBC series Fleabag.\n\nWaller-Bridge created, wrote, and starred in Fleabag (2016-2019), playing the titular unnamed protagonist in a performance that earned her multiple Emmy Awards. She also created the BBC America series Killing Eve (2018-2022) and co-wrote the screenplay for No Time to Die (2021). She is widely regarded as one of the most influential voices in contemporary British television.',
    image: { src: '/images/actors/phoebe-waller-bridge.jpg', alt: 'Phoebe Waller-Bridge', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'fleabag', showTitle: 'Fleabag', characterName: 'Fleabag', years: '2016-2019' }],
    otherNotableRoles: ['Creator of Killing Eve (2018-2022)', 'L3-37 in Solo: A Star Wars Story (2018)', 'Helena in the Indiana Jones and the Dial of Destiny (2023)', 'Co-writer of No Time to Die (2021)'],
    awards: ['3x Primetime Emmy Award (Outstanding Comedy Series, Lead Actress, Writing for Fleabag)', 'BAFTA Award for Best Female Comedy Performance (Fleabag)', 'Golden Globe Award for Best Actress in a TV Musical or Comedy (Fleabag)'],
    tags: ['emmy-winner', 'comedy-actress', 'writer', 'british-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm3963592/', wikipedia: 'https://en.wikipedia.org/wiki/Phoebe_Waller-Bridge' },
    faqs: [
      { question: 'What is Phoebe Waller-Bridge best known for?', answer: 'Phoebe Waller-Bridge is best known for creating and starring in Fleabag, which won multiple Emmy Awards.' },
      { question: 'Did Phoebe Waller-Bridge create Killing Eve?', answer: 'Yes, she created and served as head writer for the first season of Killing Eve (2018).' },
      { question: 'How many Emmys did Fleabag win?', answer: 'Fleabag Season 2 won six Primetime Emmy Awards in 2019, including Outstanding Comedy Series, Lead Actress, and Writing.' }
    ]
  },
  {
    slug: 'sian-clifford',
    name: 'Sian Clifford',
    bio: 'Sian Clifford is an English actress born on April 19, 1982, in London, England. She trained at the Royal Academy of Dramatic Art (RADA) alongside Phoebe Waller-Bridge and built her early career primarily in theater before transitioning to screen roles.\n\nClifford earned widespread acclaim for her role as Claire, the uptight older sister of the titular character in the BBC/Amazon series Fleabag (2016-2019). Her portrayal of the repressed, people-pleasing sibling earned her a Primetime Emmy nomination and BAFTA recognition, and was praised for its perfect comedic timing and emotional vulnerability.',
    image: { src: '/images/actors/sian-clifford.jpg', alt: 'Sian Clifford', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'fleabag', showTitle: 'Fleabag', characterName: 'Claire', years: '2016-2019' }],
    otherNotableRoles: ['Martha in Life After Life (2022)', 'Alex in Quiz (2020)', 'Alison in Loot (2022-present)'],
    awards: ['Primetime Emmy Nomination for Outstanding Supporting Actress in a Comedy Series (Fleabag)', 'BAFTA Nomination for Best Female Comedy Performance (Fleabag)'],
    tags: ['comedy-actress', 'dramatic-actress', 'british-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/sianclifford/', twitter: 'https://twitter.com/siaborglansen', imdb: 'https://www.imdb.com/name/nm3764882/', wikipedia: 'https://en.wikipedia.org/wiki/Sian_Clifford' },
    faqs: [
      { question: 'What is Sian Clifford best known for?', answer: 'Sian Clifford is best known for playing Claire in Fleabag (2016-2019).' },
      { question: 'Did Sian Clifford train with Phoebe Waller-Bridge?', answer: 'Yes, they both trained at the Royal Academy of Dramatic Art (RADA) and have been friends since drama school.' }
    ]
  },
  {
    slug: 'andrew-scott',
    name: 'Andrew Scott',
    bio: 'Andrew Scott is an Irish actor born on February 21, 1976, in Dublin, Ireland. He began acting as a child and trained at the Trinity College Dublin before building an acclaimed career across theater, film, and television.\n\nScott is known for his portrayal of Jim Moriarty in the BBC series Sherlock (2012-2017) and the Hot Priest in Season 2 of Fleabag (2019). His magnetic performance in Fleabag as the charming, conflicted Catholic priest who becomes the object of the protagonist\'s affection was one of the most celebrated television performances of the decade. He also starred as Tom Ripley in the Netflix series Ripley (2024).',
    image: { src: '/images/actors/andrew-scott.jpg', alt: 'Andrew Scott', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'fleabag', showTitle: 'Fleabag', characterName: 'The Priest', years: '2019' }],
    otherNotableRoles: ['Jim Moriarty in Sherlock (2012-2017)', 'Tom Ripley in Ripley (2024)', 'Hamlet in Hamlet (2017, Old Vic Theatre)', '1917 (2019)'],
    awards: ['BAFTA Award for Best Supporting Actor (Fleabag)', 'Olivier Award for Best Actor (Hamlet)', 'IFTA Award for Best Actor (multiple wins)'],
    tags: ['dramatic-actor', 'british-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/andrewscott/', imdb: 'https://www.imdb.com/name/nm0778831/', wikipedia: 'https://en.wikipedia.org/wiki/Andrew_Scott_(actor)' },
    faqs: [
      { question: 'What is Andrew Scott best known for?', answer: 'Andrew Scott is known for playing Moriarty in Sherlock, the Hot Priest in Fleabag, and Tom Ripley in Ripley.' },
      { question: 'Did Andrew Scott win a BAFTA for Fleabag?', answer: 'Yes, he won the BAFTA Award for Best Supporting Actor for his role as the Priest in Fleabag.' },
      { question: 'Is Andrew Scott Irish?', answer: 'Yes, he was born and raised in Dublin, Ireland.' }
    ]
  },
  {
    slug: 'olivia-colman',
    name: 'Olivia Colman',
    bio: 'Dame Olivia Colman CBE is an English actress born on January 30, 1974, in Norwich, Norfolk, England. She studied at the Bristol Old Vic Theatre School and rose to prominence in British comedy and drama through shows like Peep Show, Broadchurch, and The Night Manager.\n\nColman won the Academy Award for Best Actress for The Favourite (2018) and earned further acclaim as Queen Elizabeth II in The Crown (2019-2020). In Fleabag (2019), she delivered a scene-stealing performance as the protagonist\'s passive-aggressive stepmother, showcasing her remarkable range from Oscar-winning drama to razor-sharp comedy.',
    image: { src: '/images/actors/olivia-colman.jpg', alt: 'Olivia Colman', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'fleabag', showTitle: 'Fleabag', characterName: 'Stepmother / Godmother', years: '2016-2019' }],
    otherNotableRoles: ['Queen Elizabeth II in The Crown (2019-2020)', 'Queen Anne in The Favourite (2018)', 'Ellie Miller in Broadchurch (2013-2017)', 'Sophie in Peep Show (2003-2015)'],
    awards: ['Academy Award for Best Actress (The Favourite)', 'Primetime Emmy Award for Outstanding Lead Actress in a Drama Series (The Crown)', 'Golden Globe for Best Actress in a Musical or Comedy (The Favourite)', 'BAFTA Awards (multiple)'],
    tags: ['oscar-winner', 'emmy-winner', 'dramatic-actress', 'british-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm1469236/', wikipedia: 'https://en.wikipedia.org/wiki/Olivia_Colman' },
    faqs: [
      { question: 'What is Olivia Colman best known for?', answer: 'Olivia Colman is known for The Favourite, The Crown, Broadchurch, and Fleabag, among many acclaimed roles.' },
      { question: 'Has Olivia Colman won an Oscar?', answer: 'Yes, she won the Academy Award for Best Actress for The Favourite (2018).' },
      { question: 'Was Olivia Colman in The Crown?', answer: 'Yes, she played Queen Elizabeth II in Seasons 3 and 4 of The Crown, winning an Emmy for the role.' }
    ]
  },
  {
    slug: 'brett-gelman',
    name: 'Brett Gelman',
    bio: 'Brett Gelman is an American actor, comedian, and writer born on October 6, 1976, in Highland Park, Illinois. He studied at the University of North Carolina School of the Arts and built a career in comedy through improv, stand-up, and television roles including Married and Stranger Things.\n\nGelman is recognized for his role as Martin in the BBC/Amazon series Fleabag (2016-2019), playing the protagonist\'s stepmother\'s unsettling and inappropriate partner. His performance earned him a Primetime Emmy Award as part of the show\'s outstanding comedy ensemble recognition. He also plays Murray Bauman in Netflix\'s Stranger Things.',
    image: { src: '/images/actors/brett-gelman.jpg', alt: 'Brett Gelman', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'fleabag', showTitle: 'Fleabag', characterName: 'Martin', years: '2016-2019' }],
    otherNotableRoles: ['Murray Bauman in Stranger Things (2017-present)', 'Brett Mobley in Married (2014-2015)', 'Mr. K in Go! (2020, voice)'],
    awards: ['Screen Actors Guild Award for Outstanding Ensemble in a Comedy Series (Fleabag)'],
    tags: ['comedy-actor', 'character-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/brettgelman/', twitter: 'https://twitter.com/baborrgelman', imdb: 'https://www.imdb.com/name/nm1453287/', wikipedia: 'https://en.wikipedia.org/wiki/Brett_Gelman' },
    faqs: [
      { question: 'What is Brett Gelman best known for?', answer: 'Brett Gelman is best known for playing Martin in Fleabag and Murray Bauman in Stranger Things.' },
      { question: 'Is Brett Gelman in Stranger Things?', answer: 'Yes, he plays Murray Bauman, the conspiracy theorist turned ally, in Stranger Things.' }
    ]
  },
  {
    slug: 'bill-paterson',
    name: 'Bill Paterson',
    bio: 'William Tulloch Paterson CBE is a Scottish actor born on June 3, 1945, in Glasgow, Scotland. He trained at the Royal Scottish Academy of Music and Drama and built a distinguished career spanning five decades in theater, film, and television.\n\nPaterson is known for his extensive body of work including roles in The Killing Fields (1984), Truly Madly Deeply (1990), and the BBC series Fleabag (2016-2019), where he played the kind but hapless father of the titular character and her sister Claire. His warm, understated performance provided emotional grounding for the series.',
    image: { src: '/images/actors/bill-paterson.jpg', alt: 'Bill Paterson', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'fleabag', showTitle: 'Fleabag', characterName: 'Dad', years: '2016-2019' }],
    otherNotableRoles: ['Jon in Truly Madly Deeply (1990)', 'Dr. Shand in The Killing Fields (1984)', 'Roles in Doctor Who, Outlander, and Shetland'],
    awards: ['CBE for Services to Drama', 'BAFTA Scotland Award for Best Actor'],
    tags: ['character-actor', 'british-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0665512/', wikipedia: 'https://en.wikipedia.org/wiki/Bill_Paterson_(actor)' },
    faqs: [
      { question: 'What is Bill Paterson best known for?', answer: 'Bill Paterson is a veteran Scottish actor known for roles in Truly Madly Deeply, The Killing Fields, and as Dad in Fleabag.' },
      { question: 'Has Bill Paterson received any honors?', answer: 'Yes, he was awarded a CBE for Services to Drama and has won BAFTA Scotland awards.' }
    ]
  },
  // ============================================================
  // ABBOTT ELEMENTARY ACTORS
  // ============================================================
  {
    slug: 'quinta-brunson',
    name: 'Quinta Brunson',
    bio: 'Quinta Brunson is an American actress, writer, comedian, and producer born on December 21, 1989, in Philadelphia, Pennsylvania. She first gained attention through viral internet content, particularly her "The Girl Who\'s Never Been on a Nice Date" Instagram series, and worked as a content creator at BuzzFeed before transitioning to television.\n\nBrunson created, writes, and stars in the ABC mockumentary sitcom Abbott Elementary (2021-present), playing second-grade teacher Janine Teagues. The show became a critical and cultural phenomenon, and Brunson made history by winning the Primetime Emmy Award for Outstanding Writing for a Comedy Series, becoming the first Black woman to be nominated for three comedy Emmy categories in the same year.',
    image: { src: '/images/actors/quinta-brunson.jpg', alt: 'Quinta Brunson', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'abbott-elementary', showTitle: 'Abbott Elementary', characterName: 'Janine Teagues', years: '2021-present' }],
    otherNotableRoles: ['Creator/writer at BuzzFeed Video (2015-2018)', 'Nell in A Black Lady Sketch Show (2019)'],
    awards: ['Primetime Emmy Award for Outstanding Writing for a Comedy Series (Abbott Elementary)', 'Primetime Emmy Award for Outstanding Lead Actress in a Comedy Series (Abbott Elementary)', 'NAACP Image Award for Outstanding Comedy Series (Abbott Elementary)', 'Peabody Award (Abbott Elementary)'],
    tags: ['emmy-winner', 'comedy-actress', 'writer'],
    socialLinks: { instagram: 'https://www.instagram.com/quintab/', twitter: 'https://twitter.com/quintabrunson', imdb: 'https://www.imdb.com/name/nm5765764/', wikipedia: 'https://en.wikipedia.org/wiki/Quinta_Brunson' },
    faqs: [
      { question: 'What is Quinta Brunson best known for?', answer: 'Quinta Brunson is best known for creating and starring in Abbott Elementary, which has won multiple Emmy Awards.' },
      { question: 'Did Quinta Brunson win an Emmy?', answer: 'Yes, she won Emmy Awards for Outstanding Writing and Outstanding Lead Actress in a Comedy Series for Abbott Elementary.' },
      { question: 'Where is Quinta Brunson from?', answer: 'She was born and raised in Philadelphia, Pennsylvania, which inspired the setting of Abbott Elementary.' }
    ]
  },
  {
    slug: 'tyler-james-williams',
    name: 'Tyler James Williams',
    bio: 'Tyler James Williams is an American actor born on October 9, 1992, in Westchester County, New York. He began acting as a child on Sesame Street and rose to fame as the star of the UPN/CW sitcom Everybody Hates Chris (2005-2009), based on comedian Chris Rock\'s childhood.\n\nWilliams stars as Gregory Eddie in ABC\'s Abbott Elementary (2021-present), playing a substitute-turned-permanent teacher and love interest of Janine Teagues. His performance earned him a Primetime Emmy nomination for Outstanding Supporting Actor in a Comedy Series. He is also known for his role as Noah in The Walking Dead.',
    image: { src: '/images/actors/tyler-james-williams.jpg', alt: 'Tyler James Williams', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'abbott-elementary', showTitle: 'Abbott Elementary', characterName: 'Gregory Eddie', years: '2021-present' }],
    otherNotableRoles: ['Young Chris in Everybody Hates Chris (2005-2009)', 'Noah in The Walking Dead (2015-2016)', 'Lyle in Dear White People (2017)'],
    awards: ['Primetime Emmy Nomination for Outstanding Supporting Actor in a Comedy Series (Abbott Elementary)', 'NAACP Image Award for Outstanding Actor in a Comedy Series (Abbott Elementary)', 'Young Artist Award for Best Performance in a TV Series (Everybody Hates Chris)'],
    tags: ['comedy-actor', 'dramatic-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/tylerjameswilliams/', twitter: 'https://twitter.com/TylerJamesWill', imdb: 'https://www.imdb.com/name/nm1501720/', wikipedia: 'https://en.wikipedia.org/wiki/Tyler_James_Williams' },
    faqs: [
      { question: 'What is Tyler James Williams best known for?', answer: 'Tyler James Williams is known for Everybody Hates Chris and his current role as Gregory Eddie in Abbott Elementary.' },
      { question: 'Was Tyler James Williams in Everybody Hates Chris?', answer: 'Yes, he starred as the young Chris Rock in Everybody Hates Chris (2005-2009).' }
    ]
  },
  {
    slug: 'janelle-james',
    name: 'Janelle James',
    bio: 'Janelle James is an American actress and comedian born on October 2, 1981, in St. Thomas, U.S. Virgin Islands. She was raised in Brooklyn, New York, and built her career in stand-up comedy, performing at clubs and festivals across the country before breaking into television.\n\nJames stars as Principal Ava Coleman in ABC\'s Abbott Elementary (2021-present). Her scene-stealing portrayal of the incompetent, self-absorbed, and hilariously unqualified principal has made her one of the most beloved comedic characters on television, earning her multiple Emmy nominations.',
    image: { src: '/images/actors/janelle-james.jpg', alt: 'Janelle James', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'abbott-elementary', showTitle: 'Abbott Elementary', characterName: 'Ava Coleman', years: '2021-present' }],
    otherNotableRoles: ['Stand-up comedy specials', 'Gabby in Black Monday (2019-2021)'],
    awards: ['Primetime Emmy Nomination for Outstanding Supporting Actress in a Comedy Series (Abbott Elementary)', 'NAACP Image Award for Outstanding Supporting Actress in a Comedy Series (Abbott Elementary)'],
    tags: ['comedy-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/janellejamescomedy/', twitter: 'https://twitter.com/janaborrellejam', imdb: 'https://www.imdb.com/name/nm5850636/', wikipedia: 'https://en.wikipedia.org/wiki/Janelle_James' },
    faqs: [
      { question: 'What is Janelle James best known for?', answer: 'Janelle James is best known for playing Principal Ava Coleman in Abbott Elementary.' },
      { question: 'Is Janelle James a stand-up comedian?', answer: 'Yes, she is an accomplished stand-up comedian who performed extensively on the comedy circuit before her Abbott Elementary breakthrough.' }
    ]
  },
  {
    slug: 'lisa-ann-walter',
    name: 'Lisa Ann Walter',
    bio: 'Lisa Ann Walter is an American actress, comedian, and writer born on August 3, 1963, in Silver Spring, Maryland. She began her career in stand-up comedy and transitioned to acting with roles in film and television, including the beloved family film The Parent Trap (1998).\n\nWalter stars as Melissa Schemmenti in ABC\'s Abbott Elementary (2021-present), playing a street-smart, resourceful second-grade teacher with Philadelphia connections that always come in handy. Her performance has earned her Emmy nominations and brought her career a major resurgence.',
    image: { src: '/images/actors/lisa-ann-walter.jpg', alt: 'Lisa Ann Walter', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'abbott-elementary', showTitle: 'Abbott Elementary', characterName: 'Melissa Schemmenti', years: '2021-present' }],
    otherNotableRoles: ['Chessy in The Parent Trap (1998)', 'Various stand-up and television appearances'],
    awards: ['Primetime Emmy Nomination for Outstanding Supporting Actress in a Comedy Series (Abbott Elementary)', 'Screen Actors Guild Award Nomination for Outstanding Ensemble in a Comedy Series (Abbott Elementary)'],
    tags: ['comedy-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/lisaannwalter/', twitter: 'https://twitter.com/LisaAnnWalter', imdb: 'https://www.imdb.com/name/nm0909942/', wikipedia: 'https://en.wikipedia.org/wiki/Lisa_Ann_Walter' },
    faqs: [
      { question: 'What is Lisa Ann Walter best known for?', answer: 'Lisa Ann Walter is known for playing Chessy in The Parent Trap (1998) and Melissa Schemmenti in Abbott Elementary.' },
      { question: 'Was Lisa Ann Walter in The Parent Trap?', answer: 'Yes, she played Chessy, the lovable nanny, in the 1998 version of The Parent Trap starring Lindsay Lohan.' }
    ]
  },
  {
    slug: 'sheryl-lee-ralph',
    name: 'Sheryl Lee Ralph',
    bio: 'Sheryl Lee Ralph is an American actress and singer born on December 30, 1956, in Waterbury, Connecticut. She was part of the original Broadway cast of Dreamgirls (1981), earning a Tony Award nomination. She built a distinguished career across Broadway, film, and television over four decades.\n\nRalph stars as Barbara Howard in ABC\'s Abbott Elementary (2021-present), playing a veteran kindergarten teacher and the moral backbone of the school. Her performance earned her the Primetime Emmy Award for Outstanding Supporting Actress in a Comedy Series in 2022, which she accepted with a powerful acceptance speech that went viral.',
    image: { src: '/images/actors/sheryl-lee-ralph.jpg', alt: 'Sheryl Lee Ralph', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'abbott-elementary', showTitle: 'Abbott Elementary', characterName: 'Barbara Howard', years: '2021-present' }],
    otherNotableRoles: ['Deena Jones in Dreamgirls (1981, Broadway original cast)', 'Dee Mitchell in Moesha (1996-2001)', 'Various film and television roles spanning four decades'],
    awards: ['Primetime Emmy Award for Outstanding Supporting Actress in a Comedy Series (Abbott Elementary)', 'Tony Award Nomination for Best Actress in a Musical (Dreamgirls)', 'NAACP Image Award for Outstanding Supporting Actress in a Comedy Series (Abbott Elementary)'],
    tags: ['emmy-winner', 'comedy-actress', 'dramatic-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/thesherylleeralph/', twitter: 'https://twitter.com/theSLR', imdb: 'https://www.imdb.com/name/nm0707451/', wikipedia: 'https://en.wikipedia.org/wiki/Sheryl_Lee_Ralph' },
    faqs: [
      { question: 'What is Sheryl Lee Ralph best known for?', answer: 'Sheryl Lee Ralph is known for the original Broadway cast of Dreamgirls and her Emmy-winning role in Abbott Elementary.' },
      { question: 'Did Sheryl Lee Ralph win an Emmy?', answer: 'Yes, she won the Emmy for Outstanding Supporting Actress in a Comedy Series for Abbott Elementary in 2022.' },
      { question: 'Was Sheryl Lee Ralph in Dreamgirls?', answer: 'Yes, she originated the role of Deena Jones in the original 1981 Broadway production of Dreamgirls.' }
    ]
  },
  {
    slug: 'chris-perfetti',
    name: 'Chris Perfetti',
    bio: 'Chris Perfetti is an American actor born on March 22, 1990, in New York. He studied at Boston University\'s College of Fine Arts and built his early career in theater, earning critical recognition on the New York stage.\n\nPerfetti stars as Jacob Hill in ABC\'s Abbott Elementary (2021-present), playing an earnest, enthusiastic history teacher prone to well-meaning but occasionally tone-deaf attempts at cultural sensitivity. His comedic timing and chemistry with the ensemble cast have made him a key part of the show\'s success.',
    image: { src: '/images/actors/chris-perfetti.jpg', alt: 'Chris Perfetti', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'abbott-elementary', showTitle: 'Abbott Elementary', characterName: 'Jacob Hill', years: '2021-present' }],
    otherNotableRoles: ['Brendan Dassery in In the Dark (2019)', 'Theater roles in New York'],
    awards: ['Screen Actors Guild Award Nomination for Outstanding Ensemble in a Comedy Series (Abbott Elementary)'],
    tags: ['comedy-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/chrisperfetti/', imdb: 'https://www.imdb.com/name/nm4972106/', wikipedia: 'https://en.wikipedia.org/wiki/Chris_Perfetti' },
    faqs: [
      { question: 'What is Chris Perfetti best known for?', answer: 'Chris Perfetti is best known for playing Jacob Hill in Abbott Elementary.' },
      { question: 'Did Chris Perfetti study acting?', answer: 'Yes, he studied at Boston University\'s College of Fine Arts.' }
    ]
  },
  // ============================================================
  // ARCANE ACTORS
  // ============================================================
  {
    slug: 'hailee-steinfeld',
    name: 'Hailee Steinfeld',
    bio: 'Hailee Steinfeld is an American actress and singer born on December 11, 1996, in Tarzana, Los Angeles, California. She burst onto the scene at age 13 with an Oscar-nominated performance in the Coen Brothers\' True Grit (2010). She has since built a dual career as an acclaimed actress and pop music artist.\n\nSteinfeld voices Vi in the Netflix animated series Arcane (2021-2024), based on the League of Legends video game universe. Her vocal performance as the fiery, determined Zaunite fighter brought emotional depth to the critically acclaimed animated series. She also portrayed Kate Bishop in the Marvel series Hawkeye (2021).',
    image: { src: '/images/actors/hailee-steinfeld.jpg', alt: 'Hailee Steinfeld', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'arcane', showTitle: 'Arcane', characterName: 'Vi (voice)', years: '2021-2024' }],
    otherNotableRoles: ['Mattie Ross in True Grit (2010)', 'Kate Bishop in Hawkeye (2021)', 'Charlie Watson in Bumblebee (2018)', 'Emily Dickinson in Dickinson (2019-2021)'],
    awards: ['Academy Award Nomination for Best Supporting Actress (True Grit)', 'Annie Award for Outstanding Achievement for Voice Acting (Arcane)', 'Critics\' Choice Award Nomination for Best Young Performer (True Grit)'],
    tags: ['young-actor', 'voice-actor', 'dramatic-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/haileesteinfeld/', twitter: 'https://twitter.com/HaileeSteinfeld', imdb: 'https://www.imdb.com/name/nm2794962/', wikipedia: 'https://en.wikipedia.org/wiki/Hailee_Steinfeld' },
    faqs: [
      { question: 'What is Hailee Steinfeld best known for?', answer: 'Hailee Steinfeld is known for True Grit, Hawkeye, Dickinson, and voicing Vi in Arcane.' },
      { question: 'Was Hailee Steinfeld nominated for an Oscar?', answer: 'Yes, she was nominated for Best Supporting Actress for True Grit (2010) at age 14.' },
      { question: 'Does Hailee Steinfeld voice Vi in Arcane?', answer: 'Yes, she provides the voice of Vi in the Netflix animated series Arcane.' }
    ]
  },
  {
    slug: 'ella-purnell',
    name: 'Ella Purnell',
    bio: 'Ella Purnell is an English actress born on September 17, 1996, in London, England. She began acting as a child and trained at the Brit School for Performing Arts. She appeared in films including Never Let Me Go (2010) and Miss Peregrine\'s Home for Peculiar Children (2016) before her breakthrough voice role.\n\nPurnell voices Jinx (Powder) in the Netflix animated series Arcane (2021-2024), delivering an emotionally devastating performance as the troubled, brilliant young woman whose descent into chaos lies at the heart of the show. She also stars as Lucy MacLean in the Amazon series Fallout (2024).',
    image: { src: '/images/actors/ella-purnell.jpg', alt: 'Ella Purnell', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'arcane', showTitle: 'Arcane', characterName: 'Jinx / Powder (voice)', years: '2021-2024' }],
    otherNotableRoles: ['Lucy MacLean in Fallout (2024)', 'Jackie Taylor in Yellowjackets (2021-present)', 'Teen version of Maleficent in Maleficent (2014)', 'Emma Bloom in Miss Peregrine\'s Home for Peculiar Children (2016)'],
    awards: ['Annie Award for Outstanding Achievement for Voice Acting (Arcane)', 'BAFTA Rising Star Nomination'],
    tags: ['young-actor', 'voice-actor', 'dramatic-actress', 'british-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/ellapurnell/', twitter: 'https://twitter.com/elaborrnell', imdb: 'https://www.imdb.com/name/nm3741834/', wikipedia: 'https://en.wikipedia.org/wiki/Ella_Purnell' },
    faqs: [
      { question: 'What is Ella Purnell best known for?', answer: 'Ella Purnell is best known for voicing Jinx in Arcane, starring in Yellowjackets, and playing Lucy in Fallout.' },
      { question: 'Does Ella Purnell voice Jinx in Arcane?', answer: 'Yes, she provides the voice for Jinx (Powder) in the Netflix animated series Arcane.' }
    ]
  },
  {
    slug: 'katie-leung',
    name: 'Katie Leung',
    bio: 'Katie Liu Leung is a Scottish actress born on August 8, 1987, in Motherwell, Scotland. She is of Chinese descent and famously won the role of Cho Chang in the Harry Potter film series through an open casting call at age 16, with no prior acting experience.\n\nLeung voices Caitlyn Kiramman in the Netflix animated series Arcane (2021-2024), bringing life to the determined and idealistic enforcer from Piltover. Her voice performance helped make Caitlyn one of the most beloved characters in the series. She has also appeared in stage productions and the BBC series The Nest.',
    image: { src: '/images/actors/katie-leung.jpg', alt: 'Katie Leung', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'arcane', showTitle: 'Arcane', characterName: 'Caitlyn Kiramman (voice)', years: '2021-2024' }],
    otherNotableRoles: ['Cho Chang in the Harry Potter film series (2005-2011)', 'Kira in The Nest (2020)', 'Various theater roles'],
    awards: ['Annie Award Nomination for Voice Acting (Arcane)'],
    tags: ['voice-actor', 'british-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/kt_leung/', imdb: 'https://www.imdb.com/name/nm1614568/', wikipedia: 'https://en.wikipedia.org/wiki/Katie_Leung' },
    faqs: [
      { question: 'What is Katie Leung best known for?', answer: 'Katie Leung is known for playing Cho Chang in the Harry Potter films and voicing Caitlyn in Arcane.' },
      { question: 'How did Katie Leung get cast in Harry Potter?', answer: 'She won the role of Cho Chang through an open casting call at age 16, with no prior acting experience.' }
    ]
  },
  {
    slug: 'kevin-alejandro',
    name: 'Kevin Alejandro',
    bio: 'Kevin Alejandro is an American actor born on April 7, 1976, in San Antonio, Texas. He built a prolific career in television with recurring roles in numerous series including True Blood, Arrow, Southland, and Lucifer.\n\nAlejandro voices Jayce Talis in the Netflix animated series Arcane (2021-2024), portraying the ambitious inventor and politician from Piltover whose decisions shape the fate of both cities. He is also well known for playing Dan Espinoza in the Fox/Netflix series Lucifer (2016-2021).',
    image: { src: '/images/actors/kevin-alejandro.jpg', alt: 'Kevin Alejandro', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'arcane', showTitle: 'Arcane', characterName: 'Jayce Talis (voice)', years: '2021-2024' }],
    otherNotableRoles: ['Dan Espinoza in Lucifer (2016-2021)', 'Jesus Velasquez in True Blood (2010-2011)', 'Nate Moretta in Southland (2009-2013)'],
    awards: ['ALMA Award Nomination for Outstanding Actor in a Drama Series (Southland)'],
    tags: ['dramatic-actor', 'voice-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/kevinalejandro/', twitter: 'https://twitter.com/KevinAlejandro', imdb: 'https://www.imdb.com/name/nm1260983/', wikipedia: 'https://en.wikipedia.org/wiki/Kevin_Alejandro' },
    faqs: [
      { question: 'What is Kevin Alejandro best known for?', answer: 'Kevin Alejandro is known for playing Dan Espinoza in Lucifer and voicing Jayce Talis in Arcane.' },
      { question: 'Was Kevin Alejandro in True Blood?', answer: 'Yes, he played Jesus Velasquez in True Blood (2010-2011).' }
    ]
  },
  {
    slug: 'harry-lloyd',
    name: 'Harry Lloyd',
    bio: 'Harry Lloyd is an English actor born on November 17, 1983, in London, England. He is the great-great-great-grandson of Charles Dickens. He studied English at Oxford University and trained at RADA, building a career across television, film, and theater.\n\nLloyd is known for playing Viserys Targaryen in Season 1 of Game of Thrones (2011) and voices Viktor in the Netflix animated series Arcane (2021-2024). His vocal performance as the brilliant, morally conflicted scientist seeking to harness Hextech technology brought emotional weight to one of the show\'s most compelling character arcs.',
    image: { src: '/images/actors/harry-lloyd.jpg', alt: 'Harry Lloyd', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'arcane', showTitle: 'Arcane', characterName: 'Viktor (voice)', years: '2021-2024' }],
    otherNotableRoles: ['Viserys Targaryen in Game of Thrones (2011)', 'Herbert Pocket in Great Expectations (2011)', 'Roles in The Theory of Everything (2014) and Counterpart (2018-2019)'],
    awards: ['Annie Award Nomination for Voice Acting (Arcane)'],
    tags: ['voice-actor', 'dramatic-actor', 'british-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm2281508/', wikipedia: 'https://en.wikipedia.org/wiki/Harry_Lloyd' },
    faqs: [
      { question: 'What is Harry Lloyd best known for?', answer: 'Harry Lloyd is known for playing Viserys Targaryen in Game of Thrones and voicing Viktor in Arcane.' },
      { question: 'Is Harry Lloyd related to Charles Dickens?', answer: 'Yes, he is the great-great-great-grandson of Charles Dickens.' }
    ]
  },
  {
    slug: 'jason-spisak',
    name: 'Jason Spisak',
    bio: 'Jason Spisak is an American actor and voice artist born on April 18, 1973, in Fairmont, West Virginia. He trained at West Virginia University and has built an extensive career in voice acting for animation, video games, and audiobooks.\n\nSpisak voices Silco in the Netflix animated series Arcane (2021), delivering a critically acclaimed performance as the ruthless crime lord of the undercity of Zaun whose complex relationship with Jinx forms one of the show\'s emotional cores. Despite Silco not existing in the League of Legends game, the character became a fan favorite largely due to Spisak\'s performance.',
    image: { src: '/images/actors/jason-spisak.jpg', alt: 'Jason Spisak', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'arcane', showTitle: 'Arcane', characterName: 'Silco (voice)', years: '2021' }],
    otherNotableRoles: ['Vulpes Inculta in Fallout: New Vegas (2010, voice)', 'Lux Bonteri in Star Wars: The Clone Wars (2010, voice)', 'Various video game and animation voice roles'],
    awards: ['Behind the Voice Actors Award for Best Male Vocal Performance (Arcane)'],
    tags: ['voice-actor'],
    socialLinks: { twitter: 'https://twitter.com/jasonspisak', imdb: 'https://www.imdb.com/name/nm0818862/', wikipedia: 'https://en.wikipedia.org/wiki/Jason_Spisak' },
    faqs: [
      { question: 'What is Jason Spisak best known for?', answer: 'Jason Spisak is best known for voicing Silco in the Netflix animated series Arcane.' },
      { question: 'Is Silco a character from League of Legends?', answer: 'No, Silco was created specifically for Arcane and does not appear in the League of Legends game.' }
    ]
  },
  // ============================================================
  // SHOGUN ACTORS
  // ============================================================
  {
    slug: 'cosmo-jarvis',
    name: 'Cosmo Jarvis',
    bio: 'Cosmo Jarvis is an American-born British actor and musician, born Harrison Cosmo Krikoryan Jarvis on September 1, 1989, in Ridgewood, New Jersey. He grew up in Devon, England, and initially pursued a career in music before turning to acting, gaining recognition in independent British cinema.\n\nJarvis stars as John Blackthorne (Anjin) in the FX/Hulu series Shogun (2024), portraying the English navigator shipwrecked in feudal Japan whose presence disrupts the political balance of power. His intense, physically committed performance anchored the critically acclaimed limited series, which won numerous awards including the Emmy for Outstanding Drama Series.',
    image: { src: '/images/actors/cosmo-jarvis.jpg', alt: 'Cosmo Jarvis', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'shogun', showTitle: 'Shogun', characterName: 'John Blackthorne', years: '2024' }],
    otherNotableRoles: ['Georgiy in Lady Macbeth (2016)', 'Chad in Peaky Blinders (2019)', 'Roles in Calm with Horses (2019) and Persuasion (2022)'],
    awards: ['Screen Actors Guild Award Nomination for Outstanding Actor in a Drama Series (Shogun)', 'British Independent Film Award Nomination for Best Actor (Lady Macbeth)'],
    tags: ['dramatic-actor', 'british-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm4413036/', wikipedia: 'https://en.wikipedia.org/wiki/Cosmo_Jarvis' },
    faqs: [
      { question: 'What is Cosmo Jarvis best known for?', answer: 'Cosmo Jarvis is best known for starring as John Blackthorne in the FX/Hulu series Shogun (2024).' },
      { question: 'Is Cosmo Jarvis also a musician?', answer: 'Yes, he pursued a music career before acting, releasing albums and music videos in the late 2000s and early 2010s.' }
    ]
  },
  {
    slug: 'hiroyuki-sanada',
    name: 'Hiroyuki Sanada',
    bio: 'Hiroyuki Sanada is a Japanese actor born on October 12, 1960, in Shinagawa, Tokyo, Japan. He began performing as a child in Sonny Chiba\'s action troupe and became a major star in Japanese cinema before building an impressive international career spanning Hollywood blockbusters and prestige television.\n\nSanada stars as Lord Yoshii Toranaga in the FX/Hulu series Shogun (2024), delivering a masterful performance as the cunning feudal lord navigating deadly political intrigue in 1600s Japan. The role earned him historic Emmy, Golden Globe, and SAG Award wins, and he also served as a producer on the series, ensuring its cultural authenticity.',
    image: { src: '/images/actors/hiroyuki-sanada.jpg', alt: 'Hiroyuki Sanada', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'shogun', showTitle: 'Shogun', characterName: 'Lord Yoshii Toranaga', years: '2024' }],
    otherNotableRoles: ['Scorpion in Mortal Kombat (2021)', 'Watanabe in The Last Samurai (2003)', 'Dogen in Lost (2010)', 'Musashi in Westworld (2020)'],
    awards: ['Primetime Emmy Award for Outstanding Lead Actor in a Drama Series (Shogun)', 'Screen Actors Guild Award for Outstanding Actor in a Drama Series (Shogun)', 'Golden Globe Award for Best Actor in a Television Drama (Shogun)'],
    tags: ['emmy-winner', 'dramatic-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/hiroyukisanada/', imdb: 'https://www.imdb.com/name/nm0760796/', wikipedia: 'https://en.wikipedia.org/wiki/Hiroyuki_Sanada' },
    faqs: [
      { question: 'What is Hiroyuki Sanada best known for?', answer: 'Hiroyuki Sanada is known for his Emmy-winning performance in Shogun, as well as roles in The Last Samurai, Lost, and Mortal Kombat.' },
      { question: 'Did Hiroyuki Sanada win an Emmy?', answer: 'Yes, he won the Primetime Emmy for Outstanding Lead Actor in a Drama Series for Shogun (2024), making television history.' },
      { question: 'Was Hiroyuki Sanada a producer on Shogun?', answer: 'Yes, he served as a producer on Shogun, helping to ensure the cultural authenticity of the production.' }
    ]
  },
  {
    slug: 'anna-sawai',
    name: 'Anna Sawai',
    bio: 'Anna Sawai is a Japanese-New Zealand actress and singer born on June 11, 1992, in Wellington, New Zealand. She grew up in Japan and was a member of the J-pop group Faky. She transitioned to acting with roles in Ninja Assassin (2009), F9 (2021), and the television series Pachinko.\n\nSawai stars as Lady Mariko in the FX/Hulu series Shogun (2024), delivering a powerful performance as the Christian noblewoman caught between her duty, her faith, and her growing connection with John Blackthorne. Her work earned her the Primetime Emmy Award for Outstanding Lead Actress in a Drama Series, making history as the first actress of Asian descent to win the award.',
    image: { src: '/images/actors/anna-sawai.jpg', alt: 'Anna Sawai', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'shogun', showTitle: 'Shogun', characterName: 'Lady Mariko', years: '2024' }],
    otherNotableRoles: ['Kiriko Watanabe in Monarch: Legacy of Monsters (2023)', 'Elle in F9 (2021)', 'Naomi in Pachinko (2022)'],
    awards: ['Primetime Emmy Award for Outstanding Lead Actress in a Drama Series (Shogun)', 'Golden Globe Award for Best Actress in a Television Drama (Shogun)', 'Screen Actors Guild Award for Outstanding Actress in a Drama Series (Shogun)'],
    tags: ['emmy-winner', 'dramatic-actress'],
    socialLinks: { instagram: 'https://www.instagram.com/annasawai/', imdb: 'https://www.imdb.com/name/nm3232270/', wikipedia: 'https://en.wikipedia.org/wiki/Anna_Sawai' },
    faqs: [
      { question: 'What is Anna Sawai best known for?', answer: 'Anna Sawai is best known for her Emmy-winning performance as Lady Mariko in Shogun (2024).' },
      { question: 'Did Anna Sawai win an Emmy?', answer: 'Yes, she won the Emmy for Outstanding Lead Actress in a Drama Series for Shogun, making history.' },
      { question: 'Was Anna Sawai in a J-pop group?', answer: 'Yes, she was a member of the Japanese pop group Faky before focusing on her acting career.' }
    ]
  },
  {
    slug: 'tadanobu-asano',
    name: 'Tadanobu Asano',
    bio: 'Tadanobu Asano is a Japanese actor born on November 27, 1973, in Yokohama, Kanagawa, Japan. He began his acting career as a teenager and became one of Japan\'s most acclaimed actors, known for his collaborations with international directors including Martin Scorsese and the MCU films.\n\nAsano plays Kashigi Yabushige in the FX/Hulu series Shogun (2024), delivering a scene-stealing performance as the wily, self-serving lord whose shifting allegiances provide both comic relief and dramatic tension. He is also known for playing Hogun in the Marvel Thor films.',
    image: { src: '/images/actors/tadanobu-asano.jpg', alt: 'Tadanobu Asano', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'shogun', showTitle: 'Shogun', characterName: 'Kashigi Yabushige', years: '2024' }],
    otherNotableRoles: ['Hogun in Thor (2011), Thor: The Dark World (2013), Thor: Ragnarok (2017)', 'Genghis Khan in Mongol: The Rise of Genghis Khan (2007)', 'Kakihara in Ichi the Killer (2001)'],
    awards: ['Primetime Emmy Nomination for Outstanding Supporting Actor in a Drama Series (Shogun)', 'Asian Film Award for Best Actor (Mongol)', 'Japan Academy Prize for Best Actor (multiple)'],
    tags: ['dramatic-actor'],
    socialLinks: { instagram: 'https://www.instagram.com/tadanobuasano_official/', imdb: 'https://www.imdb.com/name/nm0038760/', wikipedia: 'https://en.wikipedia.org/wiki/Tadanobu_Asano' },
    faqs: [
      { question: 'What is Tadanobu Asano best known for?', answer: 'Tadanobu Asano is known internationally for the Thor films, Mongol, and his acclaimed role in Shogun.' },
      { question: 'Was Tadanobu Asano in the Marvel films?', answer: 'Yes, he played Hogun, one of the Warriors Three, in three Thor films.' }
    ]
  },
  {
    slug: 'tokuma-nishioka',
    name: 'Tokuma Nishioka',
    bio: 'Tokuma Nishioka is a Japanese actor who has built his career primarily in Japanese television and theater. He is a trained stage actor with experience across a range of dramatic productions in Japan.\n\nNishioka gained international recognition for his role as Ishido Kazunari in the FX/Hulu series Shogun (2024), playing one of the five regents of Japan and the primary political antagonist to Lord Toranaga. His commanding screen presence and portrayal of the power-hungry warlord brought formidable menace to the series.',
    image: { src: '/images/actors/tokuma-nishioka.jpg', alt: 'Tokuma Nishioka', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'shogun', showTitle: 'Shogun', characterName: 'Ishido Kazunari', years: '2024' }],
    otherNotableRoles: ['Various Japanese stage and television productions'],
    awards: ['Screen Actors Guild Award Nomination for Outstanding Ensemble in a Drama Series (Shogun)'],
    tags: ['dramatic-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm14479223/', wikipedia: 'https://en.wikipedia.org/wiki/Shogun_(2024_miniseries)' },
    faqs: [
      { question: 'What is Tokuma Nishioka best known for?', answer: 'Tokuma Nishioka is best known for playing Ishido Kazunari in the FX/Hulu series Shogun (2024).' },
      { question: 'Has Tokuma Nishioka appeared in other international productions?', answer: 'Shogun marked his major international breakout, though he has an established career in Japanese theater and television.' }
    ]
  },
  {
    slug: 'moeka-hoshi',
    name: 'Moeka Hoshi',
    bio: 'Moeka Hoshi is a Japanese actress born on February 17, 1998. She is a rising talent in Japanese film and television, having appeared in multiple Japanese productions before gaining international attention.\n\nHoshi plays Usami Fuji in the FX/Hulu series Shogun (2024), portraying the young consort assigned to serve John Blackthorne. Her nuanced performance brought quiet strength and emotional depth to a character navigating the rigid social hierarchies of feudal Japan, earning praise from critics and audiences worldwide.',
    image: { src: '/images/actors/moeka-hoshi.jpg', alt: 'Moeka Hoshi', attribution: 'Photo credit pending', width: 440, height: 600 },
    knownFor: [{ showSlug: 'shogun', showTitle: 'Shogun', characterName: 'Usami Fuji', years: '2024' }],
    otherNotableRoles: ['Various Japanese film and television roles'],
    awards: ['Screen Actors Guild Award Nomination for Outstanding Ensemble in a Drama Series (Shogun)'],
    tags: ['dramatic-actress', 'young-actor'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm11551364/', wikipedia: 'https://en.wikipedia.org/wiki/Shogun_(2024_miniseries)' },
    faqs: [
      { question: 'What is Moeka Hoshi best known for?', answer: 'Moeka Hoshi is best known for playing Usami Fuji in the FX/Hulu series Shogun (2024).' },
      { question: 'Is Shogun Moeka Hoshi\'s first international role?', answer: 'Yes, Shogun was her first major international production, bringing her to the attention of a global audience.' }
    ]
  },
];

module.exports = { actors3 };
