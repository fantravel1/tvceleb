// TVCeleb.com - Complete Show Data
// 38 Iconic Shows Across Genres

const shows = [
  {
    slug: 'breaking-bad',
    title: 'Breaking Bad',
    network: 'AMC',
    platform: 'Netflix',
    genre: ['Drama', 'Crime', 'Thriller'],
    years: '2008–2013',
    status: 'Ended',
    seasons: 5,
    episodes: 62,
    creator: 'Vince Gilligan',
    synopsis: 'Breaking Bad follows Walter White, a high school chemistry teacher diagnosed with terminal lung cancer, who turns to manufacturing methamphetamine to secure his family\'s financial future. Partnering with former student Jesse Pinkman, Walter descends into the criminal underworld of Albuquerque, New Mexico, transforming from a mild-mannered teacher into the feared drug lord known as Heisenberg.',
    synopsisShort: 'A high school chemistry teacher turned methamphetamine manufacturer descends into the criminal underworld.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/512px-Breaking_Bad_logo.svg.png', alt: 'Breaking Bad logo', attribution: 'AMC Networks, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['walter-white', 'jesse-pinkman', 'hank-schrader', 'skyler-white', 'gus-fring', 'saul-goodman', 'mike-ehrmantraut'],
    fanHeatScore: 95,
    tags: ['anti-hero', 'crime', 'ensemble', 'complete-series', 'critically-acclaimed'],
    relatedShowSlugs: ['the-sopranos', 'squid-game', 'the-last-of-us'],
    faqs: [
      { question: 'How many seasons does Breaking Bad have?', answer: 'Breaking Bad has 5 seasons with a total of 62 episodes. The series aired on AMC from January 20, 2008 to September 29, 2013.' },
      { question: 'Where can I watch Breaking Bad?', answer: 'Breaking Bad is available to stream on Netflix worldwide. It originally aired on AMC and can also be purchased on Amazon Prime Video, Apple TV+, and Google Play.' },
      { question: 'Who created Breaking Bad?', answer: 'Breaking Bad was created by Vince Gilligan. The show was produced by Sony Pictures Television and premiered on AMC in 2008.' },
      { question: 'Is Breaking Bad based on a true story?', answer: 'No, Breaking Bad is not based on a true story. It is an original creation by Vince Gilligan, though it draws on real-world elements of the methamphetamine trade in the American Southwest.' },
      { question: 'Does Breaking Bad have a spin-off?', answer: 'Yes, Breaking Bad has a prequel spin-off series called Better Call Saul (2015-2022), which follows the character of Jimmy McGill/Saul Goodman. There is also a sequel film, El Camino: A Breaking Bad Movie (2019), following Jesse Pinkman.' }
    ],
    videos: [
      { title: 'Breaking Bad Official Trailer', youtubeId: 'HhesaQXLuRY', description: 'Official trailer for Breaking Bad on AMC.' },
      { title: 'Breaking Bad - The Chemistry of Walter White', youtubeId: 'fRe4kfWqBGg', description: 'A look at the transformation of Walter White throughout the series.' }
    ]
  },
  {
    slug: 'game-of-thrones',
    title: 'Game of Thrones',
    network: 'HBO',
    platform: 'Max',
    genre: ['Fantasy', 'Drama', 'Adventure'],
    years: '2011–2019',
    status: 'Ended',
    seasons: 8,
    episodes: 73,
    creator: 'David Benioff & D.B. Weiss',
    synopsis: 'Based on George R.R. Martin\'s A Song of Ice and Fire novels, Game of Thrones chronicles the power struggles among noble families vying for control of the Iron Throne of the Seven Kingdoms of Westeros, while an ancient enemy rises beyond the Wall in the north. The series weaves together political intrigue, epic battles, and supernatural threats across a richly imagined medieval fantasy world.',
    synopsisShort: 'Noble families wage war for control of the Iron Throne while an ancient enemy threatens the realm.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Game_of_Thrones_2011_logo.svg/512px-Game_of_Thrones_2011_logo.svg.png', alt: 'Game of Thrones logo', attribution: 'HBO, Public domain, via Wikimedia Commons', width: 512, height: 211 },
    characterSlugs: ['jon-snow', 'daenerys-targaryen', 'tyrion-lannister', 'cersei-lannister', 'arya-stark', 'sansa-stark', 'jaime-lannister'],
    fanHeatScore: 92,
    tags: ['fantasy', 'epic', 'ensemble', 'complete-series', 'book-adaptation'],
    relatedShowSlugs: ['bridgerton', 'stranger-things', 'the-last-of-us'],
    faqs: [
      { question: 'How many seasons does Game of Thrones have?', answer: 'Game of Thrones has 8 seasons with 73 episodes total. It aired on HBO from April 17, 2011 to May 19, 2019.' },
      { question: 'Where can I watch Game of Thrones?', answer: 'Game of Thrones is available exclusively on Max (formerly HBO Max). It can also be purchased on Amazon Prime Video, Apple TV+, and Google Play.' },
      { question: 'Is Game of Thrones based on a book?', answer: 'Yes, Game of Thrones is based on A Song of Ice and Fire, a series of fantasy novels by George R.R. Martin. The first book, A Game of Thrones, was published in 1996.' },
      { question: 'Does Game of Thrones have a spin-off?', answer: 'Yes, House of the Dragon premiered in 2022 on HBO. It is a prequel series set approximately 200 years before the events of Game of Thrones, focusing on the Targaryen civil war known as the Dance of the Dragons.' }
    ],
    videos: [
      { title: 'Game of Thrones Official Series Trailer', youtubeId: 'KPLWWIOCOOQ', description: 'HBO official series trailer for Game of Thrones.' }
    ]
  },
  {
    slug: 'stranger-things',
    title: 'Stranger Things',
    network: 'Netflix',
    platform: 'Netflix',
    genre: ['Sci-Fi', 'Horror', 'Drama'],
    years: '2016–2025',
    status: 'Ended',
    seasons: 5,
    episodes: 42,
    creator: 'The Duffer Brothers',
    synopsis: 'Set in the fictional town of Hawkins, Indiana during the 1980s, Stranger Things follows a group of young friends who encounter supernatural forces and secret government experiments. When twelve-year-old Will Byers vanishes, his friends, family, and the local police chief uncover a series of extraordinary mysteries involving a parallel dimension called the Upside Down and a mysterious girl with telekinetic powers known as Eleven.',
    synopsisShort: 'A group of kids in 1980s Indiana confront supernatural forces from a parallel dimension called the Upside Down.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Stranger_Things_logo.svg/512px-Stranger_Things_logo.svg.png', alt: 'Stranger Things logo', attribution: 'Netflix, Public domain, via Wikimedia Commons', width: 512, height: 136 },
    characterSlugs: ['eleven', 'mike-wheeler', 'dustin-henderson', 'steve-harrington', 'jim-hopper', 'will-byers'],
    fanHeatScore: 90,
    tags: ['sci-fi', 'horror', '1980s', 'nostalgia', 'supernatural', 'ensemble'],
    relatedShowSlugs: ['wednesday', 'the-last-of-us', 'squid-game'],
    faqs: [
      { question: 'How many seasons does Stranger Things have?', answer: 'Stranger Things has 5 seasons. The show premiered on Netflix on July 15, 2016. The fifth and final season was released in 2025.' },
      { question: 'Where can I watch Stranger Things?', answer: 'Stranger Things is a Netflix Original series and is available exclusively on Netflix worldwide.' },
      { question: 'Who created Stranger Things?', answer: 'Stranger Things was created by the Duffer Brothers (Matt Duffer and Ross Duffer). They also serve as executive producers, writers, and directors on the series.' },
      { question: 'What is the Upside Down in Stranger Things?', answer: 'The Upside Down is a parallel dimension that mirrors the real world but is dark, decayed, and inhabited by hostile creatures. It is connected to Hawkins through interdimensional gates, primarily opened through experiments at Hawkins National Laboratory.' }
    ],
    videos: [
      { title: 'Stranger Things Season 1 Official Trailer', youtubeId: 'b9EkMc79ZSU', description: 'Official Netflix trailer for Stranger Things Season 1.' }
    ]
  },
  {
    slug: 'the-office',
    title: 'The Office (US)',
    network: 'NBC',
    platform: 'Peacock',
    genre: ['Comedy', 'Mockumentary'],
    years: '2005–2013',
    status: 'Ended',
    seasons: 9,
    episodes: 201,
    creator: 'Greg Daniels',
    synopsis: 'The Office is a mockumentary-style sitcom that depicts the everyday lives of office employees at the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company. Led by the well-meaning but often clueless regional manager Michael Scott, the series captures the humor, drama, and relationships that develop in a typical American workplace through the lens of a documentary film crew.',
    synopsisShort: 'A mockumentary following the everyday lives of employees at a paper company in Scranton, Pennsylvania.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/The_Office_US_logo.svg/512px-The_Office_US_logo.svg.png', alt: 'The Office US logo', attribution: 'NBC Universal, Public domain, via Wikimedia Commons', width: 512, height: 137 },
    characterSlugs: ['michael-scott', 'dwight-schrute', 'jim-halpert', 'pam-beesly', 'andy-bernard', 'ryan-howard'],
    fanHeatScore: 91,
    tags: ['comedy', 'mockumentary', 'workplace', 'ensemble', 'complete-series', 'meme-culture'],
    relatedShowSlugs: ['the-bear', 'succession', 'wednesday'],
    faqs: [
      { question: 'How many seasons does The Office have?', answer: 'The Office (US) has 9 seasons with 201 episodes. It aired on NBC from March 24, 2005 to May 16, 2013.' },
      { question: 'Where can I watch The Office?', answer: 'The Office is available to stream on Peacock in the United States. It is also available on Netflix in several international markets.' },
      { question: 'Is The Office based on the British version?', answer: 'Yes, The Office (US) is adapted from the BBC series of the same name created by Ricky Gervais and Stephen Merchant. Greg Daniels developed the American version for NBC.' },
      { question: 'Why did Steve Carell leave The Office?', answer: 'Steve Carell departed The Office after Season 7 in 2011. His character Michael Scott relocated to Colorado to be with Holly Flax. Carell has stated he left to pursue film projects, though he returned for the series finale.' }
    ],
    videos: [
      { title: 'The Office - Best of Michael Scott', youtubeId: 'xkXhVL0RFvU', description: 'Compilation of Michael Scott\'s most memorable moments from The Office.' }
    ]
  },
  {
    slug: 'succession',
    title: 'Succession',
    network: 'HBO',
    platform: 'Max',
    genre: ['Drama', 'Satire'],
    years: '2018–2023',
    status: 'Ended',
    seasons: 4,
    episodes: 39,
    creator: 'Jesse Armstrong',
    synopsis: 'Succession follows the Roy family, owners of global media and entertainment conglomerate Waystar Royco, as they contemplate their futures as aging patriarch Logan Roy begins to step back from the company. The show examines themes of power, wealth, family dysfunction, and corporate succession through biting satire and Shakespearean drama as the Roy siblings compete for control of the family empire.',
    synopsisShort: 'The dysfunctional Roy family battles for control of their global media empire as the patriarch steps back.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Succession_Title.svg/512px-Succession_Title.svg.png', alt: 'Succession logo', attribution: 'HBO, Public domain, via Wikimedia Commons', width: 512, height: 66 },
    characterSlugs: ['kendall-roy', 'siobhan-roy', 'roman-roy', 'logan-roy', 'tom-wambsgans'],
    fanHeatScore: 87,
    tags: ['drama', 'satire', 'corporate', 'family-dynasty', 'complete-series', 'critically-acclaimed'],
    relatedShowSlugs: ['the-bear', 'the-office', 'game-of-thrones'],
    faqs: [
      { question: 'How many seasons does Succession have?', answer: 'Succession has 4 seasons with 39 episodes. It aired on HBO from June 3, 2018 to May 28, 2023.' },
      { question: 'Where can I watch Succession?', answer: 'Succession is available exclusively on Max (formerly HBO Max). It can also be purchased on Amazon Prime Video and Apple TV+.' },
      { question: 'Who created Succession?', answer: 'Succession was created by Jesse Armstrong, a British screenwriter known for Peep Show and The Thick of It. Adam McKay directed the pilot and serves as executive producer.' },
      { question: 'Is Succession based on a real family?', answer: 'Succession is not directly based on any single family, but creator Jesse Armstrong drew inspiration from several real media dynasties, including the Murdoch, Redstone, and Maxwell families.' }
    ],
    videos: [
      { title: 'Succession Season 1 Official Trailer', youtubeId: 'OzYxJV_rmE8', description: 'HBO official trailer for Succession Season 1.' }
    ]
  },
  {
    slug: 'wednesday',
    title: 'Wednesday',
    network: 'Netflix',
    platform: 'Netflix',
    genre: ['Comedy', 'Horror', 'Mystery'],
    years: '2022–present',
    status: 'Ongoing',
    seasons: 2,
    episodes: 16,
    creator: 'Alfred Gough & Miles Millar',
    synopsis: 'Wednesday is a coming-of-age supernatural mystery series centered on Wednesday Addams during her years at Nevermore Academy, a school for outcasts and misfits. While navigating new relationships and mastering her emerging psychic abilities, Wednesday becomes entangled in a monster mystery connected to her family\'s past, all while maintaining her signature deadpan wit and macabre sensibility.',
    synopsisShort: 'Wednesday Addams navigates Nevermore Academy while unraveling a supernatural mystery tied to her family.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Wednesday_Title.svg/512px-Wednesday_Title.svg.png', alt: 'Wednesday logo', attribution: 'Netflix, Public domain, via Wikimedia Commons', width: 512, height: 80 },
    characterSlugs: ['wednesday-addams', 'enid-sinclair', 'tyler-galpin', 'bianca-barclay', 'thing'],
    fanHeatScore: 88,
    tags: ['horror', 'comedy', 'mystery', 'supernatural', 'teen', 'ongoing'],
    relatedShowSlugs: ['stranger-things', 'bridgerton', 'squid-game'],
    faqs: [
      { question: 'How many seasons does Wednesday have?', answer: 'Wednesday currently has 2 seasons on Netflix. The first season premiered on November 23, 2022, and Season 2 followed in 2025.' },
      { question: 'Where can I watch Wednesday?', answer: 'Wednesday is a Netflix Original series and is available exclusively on Netflix worldwide.' },
      { question: 'Who plays Wednesday Addams?', answer: 'Jenna Ortega plays Wednesday Addams in the Netflix series. The role was previously portrayed by Christina Ricci in the 1991 and 1993 Addams Family films. Ricci also appears in the Netflix series in a different role.' },
      { question: 'Is Wednesday connected to The Addams Family?', answer: 'Yes, Wednesday is based on the character Wednesday Addams from Charles Addams\' The Addams Family. The series features other members of the Addams family including Gomez, Morticia, Pugsley, and Thing.' }
    ],
    videos: [
      { title: 'Wednesday Official Trailer', youtubeId: 'Di310WS8zLk', description: 'Netflix official trailer for Wednesday Season 1.' }
    ]
  },
  {
    slug: 'the-bear',
    title: 'The Bear',
    network: 'FX',
    platform: 'Hulu',
    genre: ['Drama', 'Comedy'],
    years: '2022–present',
    status: 'Ongoing',
    seasons: 3,
    episodes: 28,
    creator: 'Christopher Storer',
    synopsis: 'The Bear follows Carmen "Carmy" Berzatto, a young chef from the world of fine dining who returns to Chicago to run his family\'s Italian beef sandwich shop after the death of his brother. The series explores the chaotic world of restaurant kitchens, the pressures of culinary perfection, grief, family dynamics, and the pursuit of excellence through intense, visceral storytelling and immersive cinematography.',
    synopsisShort: 'A fine-dining chef returns to Chicago to run his family\'s sandwich shop, navigating grief, chaos, and culinary ambition.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/The_Bear_Title.svg/512px-The_Bear_Title.svg.png', alt: 'The Bear logo', attribution: 'FX Networks, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['carmy-berzatto', 'sydney-adamu', 'marcus-brooks', 'richie-jerimovich', 'tina-marrero'],
    fanHeatScore: 85,
    tags: ['drama', 'comedy', 'culinary', 'family', 'chicago', 'ongoing'],
    relatedShowSlugs: ['succession', 'the-office', 'breaking-bad'],
    faqs: [
      { question: 'How many seasons does The Bear have?', answer: 'The Bear currently has 3 seasons on FX/Hulu. The show premiered on June 23, 2022.' },
      { question: 'Where can I watch The Bear?', answer: 'The Bear is available on Hulu in the United States and on Disney+ internationally. It is an FX production.' },
      { question: 'Who created The Bear?', answer: 'The Bear was created by Christopher Storer. The series is produced by FX Productions.' },
      { question: 'Is The Bear based on a real restaurant?', answer: 'The Bear is not based on a specific real restaurant, but creator Christopher Storer drew inspiration from real Chicago beef stands and fine dining culture. The cast trained in real restaurant kitchens to prepare for their roles.' }
    ],
    videos: [
      { title: 'The Bear Season 1 Official Trailer', youtubeId: 'y-cqqAJIXhs', description: 'FX official trailer for The Bear Season 1.' }
    ]
  },
  {
    slug: 'squid-game',
    title: 'Squid Game',
    network: 'Netflix',
    platform: 'Netflix',
    genre: ['Thriller', 'Drama', 'Survival'],
    years: '2021–present',
    status: 'Ongoing',
    seasons: 2,
    episodes: 16,
    creator: 'Hwang Dong-hyuk',
    synopsis: 'Squid Game is a South Korean survival drama in which 456 players, all deeply in debt, accept an invitation to compete in a series of children\'s games for a massive cash prize. The catch: elimination from the game means death. The series serves as a dark allegory about economic inequality, desperation, and the lengths to which people will go when pushed to their limits, all wrapped in a visually striking and tension-filled narrative.',
    synopsisShort: 'Hundreds of cash-strapped players compete in deadly children\'s games for a massive prize in this South Korean thriller.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Squid_Game_logo.svg/512px-Squid_Game_logo.svg.png', alt: 'Squid Game logo', attribution: 'Netflix, Public domain, via Wikimedia Commons', width: 512, height: 300 },
    characterSlugs: ['seong-gi-hun', 'cho-sang-woo', 'kang-sae-byeok', 'oh-il-nam', 'jang-deok-su', 'the-front-man'],
    fanHeatScore: 93,
    tags: ['thriller', 'survival', 'korean-drama', 'social-commentary', 'global-phenomenon', 'ongoing'],
    relatedShowSlugs: ['breaking-bad', 'stranger-things', 'the-last-of-us'],
    faqs: [
      { question: 'How many seasons does Squid Game have?', answer: 'Squid Game currently has 2 seasons on Netflix. The first season premiered on September 17, 2021, and Season 2 launched on December 26, 2024.' },
      { question: 'Where can I watch Squid Game?', answer: 'Squid Game is a Netflix Original series and is available exclusively on Netflix worldwide. It is available with Korean audio and subtitles in dozens of languages.' },
      { question: 'Is Squid Game in Korean?', answer: 'Yes, Squid Game is a South Korean production filmed in Korean. It is available with subtitles and dubbed audio in many languages on Netflix.' },
      { question: 'Who created Squid Game?', answer: 'Squid Game was created, written, and directed by Hwang Dong-hyuk. He first conceived the idea in 2008 but could not find funding until Netflix greenlit the project in 2019.' }
    ],
    videos: [
      { title: 'Squid Game Official Trailer', youtubeId: 'oqxAJKy0ii4', description: 'Netflix official trailer for Squid Game.' }
    ]
  },
  {
    slug: 'bridgerton',
    title: 'Bridgerton',
    network: 'Netflix',
    platform: 'Netflix',
    genre: ['Period Drama', 'Romance'],
    years: '2020–present',
    status: 'Ongoing',
    seasons: 3,
    episodes: 24,
    creator: 'Chris Van Dusen',
    synopsis: 'Set in the competitive world of Regency-era London, Bridgerton follows the eight siblings of the powerful Bridgerton family as they navigate the marriage market, societal expectations, and scandals of the ton. Narrated by the mysterious gossip columnist Lady Whistledown, each season focuses on a different Bridgerton sibling\'s love story, blending historical drama with modern sensibilities, inclusive casting, and lavish production design.',
    synopsisShort: 'The Bridgerton siblings navigate love, scandal, and society in Regency-era London.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bridgerton_Title.svg/512px-Bridgerton_Title.svg.png', alt: 'Bridgerton logo', attribution: 'Netflix, Public domain, via Wikimedia Commons', width: 512, height: 120 },
    characterSlugs: ['anthony-bridgerton', 'kate-sharma', 'penelope-featherington', 'colin-bridgerton', 'queen-charlotte', 'eloise-bridgerton'],
    fanHeatScore: 86,
    tags: ['romance', 'period-drama', 'regency', 'book-adaptation', 'inclusive-casting', 'ongoing'],
    relatedShowSlugs: ['game-of-thrones', 'wednesday', 'succession'],
    faqs: [
      { question: 'How many seasons does Bridgerton have?', answer: 'Bridgerton currently has 3 seasons on Netflix. The show premiered on December 25, 2020, and has been renewed for additional seasons.' },
      { question: 'Where can I watch Bridgerton?', answer: 'Bridgerton is a Netflix Original series produced by Shondaland and is available exclusively on Netflix worldwide.' },
      { question: 'Is Bridgerton based on books?', answer: 'Yes, Bridgerton is based on the book series by Julia Quinn. There are 8 main novels, each focusing on a different Bridgerton sibling.' },
      { question: 'Does Bridgerton have a spin-off?', answer: 'Yes, Queen Charlotte: A Bridgerton Story premiered on Netflix in May 2023. It is a prequel exploring the rise of Queen Charlotte and her love story with King George III.' }
    ],
    videos: [
      { title: 'Bridgerton Season 1 Official Trailer', youtubeId: 'gpv7ayf_tyE', description: 'Netflix official trailer for Bridgerton Season 1.' }
    ]
  },
  {
    slug: 'the-last-of-us',
    title: 'The Last of Us',
    network: 'HBO',
    platform: 'Max',
    genre: ['Drama', 'Sci-Fi', 'Post-Apocalyptic'],
    years: '2023–present',
    status: 'Ongoing',
    seasons: 2,
    episodes: 16,
    creator: 'Craig Mazin & Neil Druckmann',
    synopsis: 'The Last of Us is set in a post-apocalyptic world devastated by a fungal pandemic that transforms infected humans into aggressive creatures. Twenty years after the outbreak, hardened smuggler Joel is tasked with escorting Ellie, a fourteen-year-old girl who may hold the key to a cure, across a dangerous America. Their journey tests their survival skills and forges an unlikely bond that becomes the emotional heart of the story.',
    synopsisShort: 'A smuggler escorts a teenage girl across post-apocalyptic America in search of a cure for a devastating pandemic.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/The_Last_of_Us_HBO.svg/512px-The_Last_of_Us_HBO.svg.png', alt: 'The Last of Us HBO logo', attribution: 'HBO, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['joel-miller', 'ellie-williams', 'tess-servopoulos', 'bill-frank', 'kathleen-coghlan', 'riley-abel'],
    fanHeatScore: 89,
    tags: ['post-apocalyptic', 'video-game-adaptation', 'survival', 'drama', 'ongoing'],
    relatedShowSlugs: ['stranger-things', 'breaking-bad', 'squid-game'],
    faqs: [
      { question: 'How many seasons does The Last of Us have?', answer: 'The Last of Us currently has 2 seasons on HBO. The first season premiered on January 15, 2023.' },
      { question: 'Where can I watch The Last of Us?', answer: 'The Last of Us is available on Max (formerly HBO Max). It airs on HBO and is also available for purchase on Amazon Prime Video and Apple TV+.' },
      { question: 'Is The Last of Us based on a video game?', answer: 'Yes, The Last of Us is based on the critically acclaimed 2013 PlayStation video game of the same name developed by Naughty Dog. The show was co-created by the game\'s creative director Neil Druckmann and Craig Mazin.' },
      { question: 'Who plays Joel and Ellie in The Last of Us?', answer: 'Pedro Pascal plays Joel Miller and Bella Ramsey plays Ellie Williams in the HBO series. Both actors received widespread acclaim for their performances.' }
    ],
    videos: [
      { title: 'The Last of Us Official Trailer', youtubeId: 'uLtkt8BonwM', description: 'HBO official trailer for The Last of Us.' }
    ]
  },
  {
    slug: 'friends',
    title: 'Friends',
    network: 'NBC',
    platform: 'Max',
    genre: ['Comedy', 'Romance'],
    years: '1994–2004',
    status: 'Ended',
    seasons: 10,
    episodes: 236,
    creator: 'David Crane & Marta Kauffman',
    synopsis: 'Friends follows six twenty-something friends living in Manhattan as they navigate the complexities of life, love, careers, and growing up. From Ross and Rachel\'s on-again-off-again romance to Chandler and Monica\'s unexpected love story, the series captures the bonds of friendship through humor, heart, and unforgettable moments. The show became a cultural phenomenon and remains one of the most-watched sitcoms in television history.',
    synopsisShort: 'Six friends navigate life, love, and careers in 1990s Manhattan in this iconic sitcom.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/512px-Friends_logo.svg.png', alt: 'Friends logo', attribution: 'NBC, Public domain, via Wikimedia Commons', width: 512, height: 211 },
    characterSlugs: ['rachel-green', 'ross-geller', 'monica-geller', 'chandler-bing', 'joey-tribbiani', 'phoebe-buffay'],
    fanHeatScore: 93,
    tags: ['comedy', 'romance', 'sitcom', 'ensemble', 'complete-series', 'cultural-icon', 'meme-culture'],
    relatedShowSlugs: ['the-office', 'schitts-creek', 'the-sopranos'],
    faqs: [
      { question: 'How many seasons does Friends have?', answer: 'Friends has 10 seasons with 236 episodes. It aired on NBC from September 22, 1994 to May 6, 2004.' },
      { question: 'Where can I watch Friends?', answer: 'Friends is available to stream on Max (formerly HBO Max) in the United States. It is also available on Netflix in many international markets.' },
      { question: 'Who created Friends?', answer: 'Friends was created by David Crane and Marta Kauffman. It was produced by Bright/Kauffman/Crane Productions in association with Warner Bros. Television.' },
      { question: 'Was there a Friends reunion?', answer: 'Yes, Friends: The Reunion (also known as "The One Where They Get Back Together") premiered on HBO Max on May 27, 2021. It featured all six main cast members returning to the original soundstage.' },
      { question: 'What is the most watched Friends episode?', answer: 'The most watched episode is "The Last One" (the series finale), which was watched by 52.5 million viewers when it originally aired on May 6, 2004, making it the most-watched television episode of the 2000s decade.' }
    ],
    videos: [
      { title: 'Friends - Opening Theme', youtubeId: 'q-9kPks0IfE', description: 'The iconic Friends opening theme "I\'ll Be There for You" by The Rembrandts.' }
    ]
  },
  {
    slug: 'the-sopranos',
    title: 'The Sopranos',
    network: 'HBO',
    platform: 'Max',
    genre: ['Drama', 'Crime'],
    years: '1999–2007',
    status: 'Ended',
    seasons: 6,
    episodes: 86,
    creator: 'David Chase',
    synopsis: 'The Sopranos follows Tony Soprano, a New Jersey mob boss who struggles to manage his criminal organization while dealing with personal and family issues, all under the care of psychiatrist Dr. Jennifer Melfi. Widely regarded as one of the greatest television series ever made, the show pioneered the modern prestige TV era and explored themes of American identity, morality, mental health, and the decline of the American Dream through the lens of organized crime.',
    synopsisShort: 'A New Jersey mob boss navigates the demands of his criminal empire and family while seeing a psychiatrist.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/The_Sopranos_titlecard.svg/512px-The_Sopranos_titlecard.svg.png', alt: 'The Sopranos logo', attribution: 'HBO, Public domain, via Wikimedia Commons', width: 512, height: 211 },
    characterSlugs: ['tony-soprano', 'carmela-soprano', 'christopher-moltisanti', 'jennifer-melfi', 'silvio-dante', 'paulie-gualtieri'],
    fanHeatScore: 94,
    tags: ['drama', 'crime', 'anti-hero', 'prestige-tv', 'complete-series', 'critically-acclaimed', 'groundbreaking'],
    relatedShowSlugs: ['breaking-bad', 'peaky-blinders', 'succession'],
    faqs: [
      { question: 'How many seasons does The Sopranos have?', answer: 'The Sopranos has 6 seasons with 86 episodes. It aired on HBO from January 10, 1999 to June 10, 2007.' },
      { question: 'Where can I watch The Sopranos?', answer: 'The Sopranos is available to stream on Max (formerly HBO Max). It can also be purchased on Amazon Prime Video and Apple TV+.' },
      { question: 'Who created The Sopranos?', answer: 'The Sopranos was created by David Chase. It is widely credited with launching the "Golden Age of Television" and influencing virtually every prestige drama that followed.' },
      { question: 'How does The Sopranos end?', answer: 'The Sopranos famously ends with an abrupt cut to black during a scene in a diner. The ambiguous ending has been debated by fans and critics for years, with creator David Chase eventually confirming that Tony Soprano dies.' },
      { question: 'Does The Sopranos have a prequel?', answer: 'Yes, The Many Saints of Newark (2021) is a prequel film set in the 1960s and 1970s. It stars Michael Gandolfini (James Gandolfini\'s son) as a young Tony Soprano.' }
    ],
    videos: [
      { title: 'The Sopranos Official Trailer', youtubeId: 'KMx4iFcozK0', description: 'HBO official trailer for The Sopranos.' }
    ]
  },
  {
    slug: 'ozark',
    title: 'Ozark',
    network: 'Netflix',
    platform: 'Netflix',
    genre: ['Drama', 'Crime', 'Thriller'],
    years: '2017–2022',
    status: 'Ended',
    seasons: 4,
    episodes: 44,
    creator: 'Bill Dubuque & Mark Williams',
    synopsis: 'Ozark follows financial advisor Marty Byrde, who relocates his family from Chicago to the Ozarks in Missouri after a money-laundering scheme goes wrong. Forced to launder money for a Mexican drug cartel, the Byrde family becomes entangled with local criminals, the FBI, and dangerous power players while trying to create a legitimate business front. The series explores how ordinary people are corrupted by extraordinary circumstances and the lengths a family will go to survive.',
    synopsisShort: 'A financial advisor moves his family to the Ozarks to launder money for a Mexican drug cartel.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ozark_TV_logo.svg/512px-Ozark_TV_logo.svg.png', alt: 'Ozark logo', attribution: 'Netflix, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['marty-byrde', 'wendy-byrde', 'ruth-langmore', 'darlene-snell', 'jonah-byrde', 'charlotte-byrde'],
    fanHeatScore: 85,
    tags: ['drama', 'crime', 'thriller', 'anti-hero', 'complete-series', 'family'],
    relatedShowSlugs: ['breaking-bad', 'the-sopranos', 'succession'],
    faqs: [
      { question: 'How many seasons does Ozark have?', answer: 'Ozark has 4 seasons with 44 episodes on Netflix. The series aired from July 21, 2017 to April 29, 2022.' },
      { question: 'Where can I watch Ozark?', answer: 'Ozark is a Netflix Original series and is available exclusively on Netflix worldwide.' },
      { question: 'Who created Ozark?', answer: 'Ozark was created by Bill Dubuque and Mark Williams. Jason Bateman also serves as executive producer and directed several episodes.' },
      { question: 'Is Ozark similar to Breaking Bad?', answer: 'Ozark is often compared to Breaking Bad due to its theme of an ordinary person drawn into a criminal underworld. However, Ozark focuses more on family dynamics and financial crime rather than drug manufacturing.' }
    ],
    videos: [
      { title: 'Ozark Season 1 Official Trailer', youtubeId: '5hAXVqrljbs', description: 'Netflix official trailer for Ozark Season 1.' }
    ]
  },
  {
    slug: 'ted-lasso',
    title: 'Ted Lasso',
    network: 'Apple TV+',
    platform: 'Apple TV+',
    genre: ['Comedy', 'Drama', 'Sports'],
    years: '2020–2023',
    status: 'Ended',
    seasons: 3,
    episodes: 34,
    creator: 'Jason Sudeikis, Bill Lawrence, Brendan Hunt & Joe Kelly',
    synopsis: 'Ted Lasso follows an American college football coach who is unexpectedly recruited to manage a professional soccer team in England, AFC Richmond, despite having no experience with the sport. What begins as a publicity stunt by the team\'s new owner becomes a heartwarming story about the power of optimism, kindness, and believing in people. The series explores themes of leadership, mental health, and community through humor and genuine emotion.',
    synopsisShort: 'An American football coach takes over a struggling English soccer team with nothing but optimism and heart.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ted_Lasso_logo.svg/512px-Ted_Lasso_logo.svg.png', alt: 'Ted Lasso logo', attribution: 'Apple TV+, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['ted-lasso-character', 'rebecca-welton', 'roy-kent', 'jamie-tartt', 'keeley-jones', 'nate-shelley'],
    fanHeatScore: 89,
    tags: ['comedy', 'drama', 'sports', 'feel-good', 'complete-series', 'critically-acclaimed'],
    relatedShowSlugs: ['the-office', 'schitts-creek', 'the-bear'],
    faqs: [
      { question: 'How many seasons does Ted Lasso have?', answer: 'Ted Lasso has 3 seasons with 34 episodes. It premiered on Apple TV+ on August 14, 2020 and concluded on May 31, 2023.' },
      { question: 'Where can I watch Ted Lasso?', answer: 'Ted Lasso is an Apple TV+ Original and is available exclusively on Apple TV+.' },
      { question: 'Is Ted Lasso based on a real person?', answer: 'Ted Lasso originated as a character in NBC Sports promotional videos for their Premier League coverage. Jason Sudeikis played the character in these ads before developing it into a full series for Apple TV+.' },
      { question: 'Will there be a Ted Lasso Season 4?', answer: 'While the show concluded after 3 seasons, Warner Bros. has been exploring the possibility of continuing the series, potentially with or without Jason Sudeikis. As of 2025, a fourth season has been announced.' }
    ],
    videos: [
      { title: 'Ted Lasso Official Trailer', youtubeId: '3u7EIiohs6U', description: 'Apple TV+ official trailer for Ted Lasso.' }
    ]
  },
  {
    slug: 'euphoria',
    title: 'Euphoria',
    network: 'HBO',
    platform: 'Max',
    genre: ['Drama', 'Teen'],
    years: '2019–present',
    status: 'Ongoing',
    seasons: 2,
    episodes: 16,
    creator: 'Sam Levinson',
    synopsis: 'Euphoria follows a group of high school students as they navigate issues of identity, trauma, drugs, friendships, love, and sex in the modern world. At its center is Rue Bennett, a teenager struggling with addiction who returns from rehab and falls into an intense relationship with Jules Vaughn. The series is known for its unflinching portrayal of contemporary youth culture, its stunning visual style, and its exploration of the gap between online personas and real-life struggles.',
    synopsisShort: 'A group of high schoolers navigate identity, trauma, love, and addiction in this visually stunning drama.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Euphoria_US_logo.svg/512px-Euphoria_US_logo.svg.png', alt: 'Euphoria logo', attribution: 'HBO, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['rue-bennett', 'jules-vaughn', 'nate-jacobs', 'maddy-perez', 'cassie-howard', 'fezco'],
    fanHeatScore: 88,
    tags: ['drama', 'teen', 'addiction', 'lgbtq', 'visually-stunning', 'ongoing'],
    relatedShowSlugs: ['stranger-things', 'wednesday', 'bridgerton'],
    faqs: [
      { question: 'How many seasons does Euphoria have?', answer: 'Euphoria currently has 2 seasons on HBO. Season 1 premiered on June 16, 2019. A third season has been announced.' },
      { question: 'Where can I watch Euphoria?', answer: 'Euphoria is available on Max (formerly HBO Max). It airs on HBO and can also be purchased on Amazon Prime Video and Apple TV+.' },
      { question: 'Who created Euphoria?', answer: 'Euphoria was created by Sam Levinson. It is based on an Israeli television series of the same name. Levinson writes and directs the majority of episodes.' },
      { question: 'What is Euphoria about?', answer: 'Euphoria is a teen drama that follows high school students dealing with issues of identity, trauma, substance abuse, relationships, and the pressures of social media. The show centers on Rue Bennett, played by Zendaya, who struggles with drug addiction.' }
    ],
    videos: [
      { title: 'Euphoria Season 1 Official Trailer', youtubeId: 'BKP_0z52ZAw', description: 'HBO official trailer for Euphoria Season 1.' }
    ]
  },
  {
    slug: 'the-mandalorian',
    title: 'The Mandalorian',
    network: 'Disney+',
    platform: 'Disney+',
    genre: ['Sci-Fi', 'Action', 'Adventure'],
    years: '2019–present',
    status: 'Ongoing',
    seasons: 3,
    episodes: 24,
    creator: 'Jon Favreau',
    synopsis: 'The Mandalorian is set in the Star Wars universe, following a lone bounty hunter named Din Djarin in the outer reaches of the galaxy, far from the authority of the New Republic. After the fall of the Galactic Empire, Djarin is hired for a mysterious job that leads him to discover and protect a young alien known as Grogu (Baby Yoda), forging an unlikely father-son bond as they navigate a dangerous galaxy filled with remnants of the Empire and other threats.',
    synopsisShort: 'A lone bounty hunter protects a mysterious alien child across the Star Wars galaxy.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/The_Mandalorian_logo.svg/512px-The_Mandalorian_logo.svg.png', alt: 'The Mandalorian logo', attribution: 'Disney+, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['din-djarin', 'grogu', 'bo-katan-kryze', 'cara-dune', 'moff-gideon', 'greef-karga'],
    fanHeatScore: 91,
    tags: ['sci-fi', 'action', 'star-wars', 'space-western', 'ongoing', 'global-phenomenon'],
    relatedShowSlugs: ['stranger-things', 'the-last-of-us', 'game-of-thrones'],
    faqs: [
      { question: 'How many seasons does The Mandalorian have?', answer: 'The Mandalorian currently has 3 seasons on Disney+. The series premiered on November 12, 2019, alongside the launch of Disney+.' },
      { question: 'Where can I watch The Mandalorian?', answer: 'The Mandalorian is a Disney+ Original and is available exclusively on Disney+.' },
      { question: 'Who is Baby Yoda?', answer: 'Baby Yoda, officially named Grogu, is a young alien of the same species as Yoda. He is 50 years old but still an infant in his species. He became a massive viral phenomenon when the show premiered.' },
      { question: 'Is The Mandalorian connected to the Star Wars movies?', answer: 'Yes, The Mandalorian is set about 5 years after Return of the Jedi and 25 years before The Force Awakens. It features connections to the original trilogy, the prequel trilogy, and animated series like The Clone Wars.' }
    ],
    videos: [
      { title: 'The Mandalorian Official Trailer', youtubeId: 'aOC8E8z_ifw', description: 'Disney+ official trailer for The Mandalorian.' }
    ]
  },
  {
    slug: 'peaky-blinders',
    title: 'Peaky Blinders',
    network: 'BBC',
    platform: 'Netflix',
    genre: ['Drama', 'Crime', 'Period Drama'],
    years: '2013–2022',
    status: 'Ended',
    seasons: 6,
    episodes: 36,
    creator: 'Steven Knight',
    synopsis: 'Peaky Blinders follows the Shelby crime family in the aftermath of World War I in Birmingham, England. Led by the ambitious and cunning Thomas Shelby, the family rises from the streets of Small Heath to become one of the most powerful criminal organizations in Britain. The series blends post-war social upheaval, political intrigue, and family drama against a backdrop of jazz-age Britain, exploring themes of trauma, ambition, power, and the cost of empire-building.',
    synopsisShort: 'A gangster family rises to power in post-WWI Birmingham, England, led by the cunning Thomas Shelby.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Peaky_Blinders_titlecard.svg/512px-Peaky_Blinders_titlecard.svg.png', alt: 'Peaky Blinders logo', attribution: 'BBC, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['thomas-shelby', 'arthur-shelby', 'polly-gray', 'alfie-solomons', 'ada-shelby', 'michael-gray'],
    fanHeatScore: 90,
    tags: ['drama', 'crime', 'period-drama', '1920s', 'british', 'complete-series', 'anti-hero'],
    relatedShowSlugs: ['the-sopranos', 'breaking-bad', 'the-crown'],
    faqs: [
      { question: 'How many seasons does Peaky Blinders have?', answer: 'Peaky Blinders has 6 seasons with 36 episodes. It aired on BBC from September 12, 2013 to April 3, 2022.' },
      { question: 'Where can I watch Peaky Blinders?', answer: 'Peaky Blinders is available on Netflix worldwide. It originally aired on BBC Two and later BBC One in the UK.' },
      { question: 'Is Peaky Blinders based on a true story?', answer: 'Peaky Blinders is inspired by a real street gang of the same name that operated in Birmingham from the 1890s to the 1910s. However, the characters and most storylines are fictional.' },
      { question: 'Will there be a Peaky Blinders movie?', answer: 'Yes, creator Steven Knight has confirmed a Peaky Blinders film is in development. Cillian Murphy is set to return as Thomas Shelby. The film was announced after the series concluded in 2022.' }
    ],
    videos: [
      { title: 'Peaky Blinders Official Trailer', youtubeId: 'oVzVdvGIC7U', description: 'Netflix official trailer for Peaky Blinders.' }
    ]
  },
  {
    slug: 'the-crown',
    title: 'The Crown',
    network: 'Netflix',
    platform: 'Netflix',
    genre: ['Drama', 'Period Drama', 'Biography'],
    years: '2016–2023',
    status: 'Ended',
    seasons: 6,
    episodes: 60,
    creator: 'Peter Morgan',
    synopsis: 'The Crown chronicles the reign of Queen Elizabeth II from the late 1940s through the early 21st century, dramatizing the political and personal events that shaped the second half of the twentieth century. The series explores the tension between duty and desire, tradition and progress, as the queen navigates the challenges of a rapidly changing world while managing the complex dynamics within the Royal Family. Each season features recasting of key roles to reflect the aging of the characters.',
    synopsisShort: 'A dramatization of Queen Elizabeth II\'s reign, exploring the personal and political challenges of the British monarchy.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/The_Crown_Title.svg/512px-The_Crown_Title.svg.png', alt: 'The Crown logo', attribution: 'Netflix, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['queen-elizabeth', 'princess-diana', 'prince-charles', 'princess-margaret', 'prince-philip', 'margaret-thatcher'],
    fanHeatScore: 83,
    tags: ['drama', 'period-drama', 'biography', 'royalty', 'british', 'complete-series', 'award-winning'],
    relatedShowSlugs: ['bridgerton', 'peaky-blinders', 'succession'],
    faqs: [
      { question: 'How many seasons does The Crown have?', answer: 'The Crown has 6 seasons with 60 episodes on Netflix. It premiered on November 4, 2016 and concluded on December 14, 2023.' },
      { question: 'Where can I watch The Crown?', answer: 'The Crown is a Netflix Original and is available exclusively on Netflix worldwide.' },
      { question: 'Is The Crown historically accurate?', answer: 'The Crown is a dramatization and takes creative liberties with historical events. While it is based on real events and people, many scenes and conversations are fictionalized for dramatic purposes.' },
      { question: 'Why do the actors change in The Crown?', answer: 'The Crown recasts its main roles every two seasons to reflect the aging of its characters over decades. This approach has been praised for allowing new interpretations of the roles while covering the full span of Queen Elizabeth II\'s reign.' }
    ],
    videos: [
      { title: 'The Crown Season 1 Official Trailer', youtubeId: 'JWtnJjn6ng0', description: 'Netflix official trailer for The Crown Season 1.' }
    ]
  },
  {
    slug: 'yellowstone',
    title: 'Yellowstone',
    network: 'Paramount Network',
    platform: 'Peacock',
    genre: ['Drama', 'Western'],
    years: '2018–2024',
    status: 'Ended',
    seasons: 5,
    episodes: 56,
    creator: 'Taylor Sheridan & John Linson',
    synopsis: 'Yellowstone follows the Dutton family, led by patriarch John Dutton, who controls the largest contiguous cattle ranch in the United States bordering Yellowstone National Park. The family faces constant conflict from land developers, an expanding town, an Indian reservation, and America\'s first national park. The series is a modern Western that explores themes of family loyalty, power, corruption, and the clash between tradition and progress in the American West.',
    synopsisShort: 'The Dutton family fights to protect the largest contiguous cattle ranch in America from those who seek to take their land.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Yellowstone_Logo.svg/512px-Yellowstone_Logo.svg.png', alt: 'Yellowstone logo', attribution: 'Paramount Network, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['john-dutton', 'beth-dutton', 'kayce-dutton', 'jamie-dutton', 'rip-wheeler', 'monica-dutton'],
    fanHeatScore: 87,
    tags: ['drama', 'western', 'family-dynasty', 'ranch', 'complete-series', 'modern-western'],
    relatedShowSlugs: ['succession', 'peaky-blinders', 'the-sopranos'],
    faqs: [
      { question: 'How many seasons does Yellowstone have?', answer: 'Yellowstone has 5 seasons with 56 episodes. It aired on Paramount Network from June 20, 2018 to December 2024.' },
      { question: 'Where can I watch Yellowstone?', answer: 'Yellowstone is available on Peacock in the United States. It originally airs on Paramount Network and is also available for purchase on Amazon Prime Video.' },
      { question: 'Does Yellowstone have spin-offs?', answer: 'Yes, Yellowstone has several spin-offs: 1883, 1923 (starring Harrison Ford and Helen Mirren), and The Madison. They explore different eras of the Dutton family history.' },
      { question: 'Why did Kevin Costner leave Yellowstone?', answer: 'Kevin Costner departed Yellowstone during Season 5 due to reported scheduling conflicts with his film project Horizon: An American Saga. His exit led to significant changes in the show\'s final episodes.' }
    ],
    videos: [
      { title: 'Yellowstone Official Trailer', youtubeId: 'Q4uxGSRvjHE', description: 'Paramount Network official trailer for Yellowstone.' }
    ]
  },
  {
    slug: 'schitts-creek',
    title: "Schitt's Creek",
    network: 'CBC/Pop TV',
    platform: 'Netflix',
    genre: ['Comedy'],
    years: '2015–2020',
    status: 'Ended',
    seasons: 6,
    episodes: 80,
    creator: 'Dan Levy & Eugene Levy',
    synopsis: "Schitt's Creek follows the Rose family — video store magnate Johnny, his actress wife Moira, and their adult children David and Alexis — after they lose their fortune and are forced to relocate to a small rural town they once bought as a joke. Starting from rock bottom in a rundown motel, the family gradually builds genuine connections with the quirky locals and discovers what truly matters in life. The series is celebrated for its warmth, inclusivity, and its joyful portrayal of LGBTQ+ relationships.",
    synopsisShort: "A wealthy family loses everything and must rebuild their lives in a small rural town they once bought as a joke.",
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Schitt%27s_Creek_logo.svg/512px-Schitt%27s_Creek_logo.svg.png', alt: "Schitt's Creek logo", attribution: 'CBC/Pop TV, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['david-rose', 'alexis-rose', 'moira-rose', 'johnny-rose', 'stevie-budd', 'patrick-brewer'],
    fanHeatScore: 88,
    tags: ['comedy', 'heartwarming', 'lgbtq', 'family', 'complete-series', 'award-winning', 'sleeper-hit'],
    relatedShowSlugs: ['the-office', 'ted-lasso', 'friends'],
    faqs: [
      { question: "How many seasons does Schitt's Creek have?", answer: "Schitt's Creek has 6 seasons with 80 episodes. It aired from January 13, 2015 to April 7, 2020." },
      { question: "Where can I watch Schitt's Creek?", answer: "Schitt's Creek is available on Netflix in the United States and many international markets. It originally aired on CBC in Canada and Pop TV in the US." },
      { question: "Who created Schitt's Creek?", answer: "Schitt's Creek was co-created by father-son duo Eugene Levy and Dan Levy. They also star as Johnny and David Rose, respectively." },
      { question: "Did Schitt's Creek win any Emmys?", answer: "Yes, Schitt's Creek made history at the 72nd Primetime Emmy Awards in 2020 by sweeping all seven major comedy categories in a single year, a feat never before accomplished. It won Outstanding Comedy Series, and all four main cast members won acting awards." }
    ],
    videos: [
      { title: "Schitt's Creek Official Trailer", youtubeId: 'W0uWS6CnC6o', description: "Official trailer for Schitt's Creek." }
    ]
  },
  {
    slug: 'severance',
    title: 'Severance',
    network: 'Apple TV+',
    platform: 'Apple TV+',
    genre: ['Sci-Fi', 'Thriller', 'Drama'],
    years: '2022–present',
    status: 'Ongoing',
    seasons: 2,
    episodes: 19,
    creator: 'Dan Erickson',
    synopsis: 'Severance explores a world where employees of the biotechnology corporation Lumon Industries undergo a surgical procedure called "severance" that divides their memories between their work and personal lives. Mark Scout, a team lead in Lumon\'s mysterious Macrodata Refinement department, begins to unravel a web of conspiracies both inside and outside the severed floor. As Mark\'s "innie" and "outie" selves each pursue the truth from their respective sides, the show raises profound questions about identity, free will, corporate control, and what it means to be whole.',
    synopsisShort: 'Employees of a mysterious corporation undergo a procedure that separates their work and personal memories, uncovering dark secrets.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Severance_Logo.svg/512px-Severance_Logo.svg.png', alt: 'Severance logo', attribution: 'Apple TV+, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['mark-scout', 'helly-riggs', 'irving-bailiff', 'dylan-george', 'ms-cobel', 'burt-goodman'],
    fanHeatScore: 92,
    tags: ['sci-fi', 'thriller', 'mystery', 'corporate', 'psychological', 'ongoing', 'critically-acclaimed'],
    relatedShowSlugs: ['the-last-of-us', 'stranger-things', 'succession'],
    faqs: [
      { question: 'How many seasons does Severance have?', answer: 'Severance currently has 2 seasons on Apple TV+. The first season premiered on February 18, 2022, with 9 episodes. Season 2 premiered on January 17, 2025, with 10 episodes.' },
      { question: 'Where can I watch Severance?', answer: 'Severance is an Apple TV+ Original and is available exclusively on Apple TV+. A subscription to Apple TV+ is required to watch the series.' },
      { question: 'Who created Severance?', answer: 'Severance was created by Dan Erickson and directed by Ben Stiller (who also executive produces) and Aoife McArdle. The show is produced by Endeavor Content and Fifth Season.' },
      { question: 'What is the severance procedure in the show?', answer: 'The severance procedure is a fictional surgical operation that implants a chip in the brain to completely separate a person\'s work memories from their personal memories. "Innies" only exist at work with no knowledge of their outside lives, while "outies" have no memory of what happens during work hours.' },
      { question: 'What is Lumon Industries in Severance?', answer: 'Lumon Industries is the mysterious biotechnology corporation at the center of the show. Founded by the revered Kier Eagan, Lumon practices a cult-like corporate culture and developed the severance procedure. The true nature of the company\'s work, especially in the Macrodata Refinement department, is one of the show\'s central mysteries.' }
    ],
    videos: [
      { title: 'Severance Official Trailer — Apple TV+', youtubeId: 'xEQP4VVuyrY', description: 'Official trailer for Severance Season 1 on Apple TV+.' },
      { title: 'Severance Season 2 Official Trailer', youtubeId: 'EOPM5MFmGgM', description: 'Official trailer for Severance Season 2 on Apple TV+.' }
    ]
  },
  {
    slug: 'house-of-the-dragon',
    title: 'House of the Dragon',
    network: 'HBO',
    platform: 'Max',
    genre: ['Fantasy', 'Drama'],
    years: '2022–present',
    status: 'Ongoing',
    seasons: 2,
    episodes: 18,
    creator: 'Ryan Condal & George R.R. Martin',
    synopsis: 'House of the Dragon is set approximately 200 years before the events of Game of Thrones and chronicles the Targaryen civil war known as the Dance of the Dragons. When King Viserys I names his daughter Rhaenyra as heir to the Iron Throne over his son Aegon, it ignites a brutal succession crisis that tears the Targaryen dynasty apart. With dragons on both sides, the realm descends into one of the bloodiest conflicts in Westeros history, pitting family members against one another in a devastating war for the crown.',
    synopsisShort: 'The Targaryen dynasty tears itself apart in a brutal civil war over succession to the Iron Throne, 200 years before Game of Thrones.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/House_of_the_Dragon_Logo.svg/512px-House_of_the_Dragon_Logo.svg.png', alt: 'House of the Dragon logo', attribution: 'HBO, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['rhaenyra-targaryen', 'daemon-targaryen', 'alicent-hightower', 'otto-hightower', 'aemond-targaryen', 'criston-cole'],
    fanHeatScore: 90,
    tags: ['fantasy', 'epic', 'dragons', 'succession', 'prequel', 'ongoing', 'book-adaptation'],
    relatedShowSlugs: ['game-of-thrones', 'the-last-of-us', 'bridgerton'],
    faqs: [
      { question: 'How many seasons does House of the Dragon have?', answer: 'House of the Dragon currently has 2 seasons on HBO. The first season premiered on August 21, 2022, and Season 2 premiered on June 16, 2024.' },
      { question: 'Where can I watch House of the Dragon?', answer: 'House of the Dragon is available on Max (formerly HBO Max). It airs on HBO and can also be purchased on Amazon Prime Video and Apple TV+.' },
      { question: 'Is House of the Dragon a prequel to Game of Thrones?', answer: 'Yes, House of the Dragon is a prequel set approximately 200 years before Game of Thrones. It is based on George R.R. Martin\'s book Fire & Blood and focuses on the Targaryen civil war known as the Dance of the Dragons.' },
      { question: 'Who are the Greens and Blacks in House of the Dragon?', answer: 'The Greens refer to the faction supporting Aegon II Targaryen and Queen Alicent Hightower, while the Blacks support Princess Rhaenyra Targaryen\'s claim to the Iron Throne. These factions are the two sides of the Targaryen civil war.' },
      { question: 'Do I need to watch Game of Thrones before House of the Dragon?', answer: 'No, House of the Dragon can be enjoyed as a standalone series. While knowledge of Game of Thrones adds context about the Targaryen dynasty and the world of Westeros, the show tells its own complete story set centuries earlier.' }
    ],
    videos: [
      { title: 'House of the Dragon Official Trailer (HBO)', youtubeId: 'DotnJ7tTA34', description: 'Official trailer for House of the Dragon Season 1 on HBO.' },
      { title: 'House of the Dragon Season 2 Official Trailer', youtubeId: 'lpuSGfmMRss', description: 'Official trailer for House of the Dragon Season 2 on HBO.' }
    ]
  },
  {
    slug: 'the-white-lotus',
    title: 'The White Lotus',
    network: 'HBO',
    platform: 'Max',
    genre: ['Comedy', 'Drama', 'Satire'],
    years: '2021–present',
    status: 'Ongoing',
    seasons: 3,
    episodes: 21,
    creator: 'Mike White',
    synopsis: 'The White Lotus is an anthology series set at various locations of the fictional White Lotus luxury resort chain. Each season follows a new set of wealthy guests and the resort staff who serve them over the course of a week, peeling back layers of privilege, dysfunction, and moral decay beneath the veneer of paradise. The show uses dark comedy and biting social satire to explore themes of wealth inequality, colonialism, toxic relationships, and the corrosive effects of unchecked privilege, all building toward shocking and often deadly conclusions.',
    synopsisShort: 'Wealthy guests at a luxury resort chain reveal their darkest secrets in this satirical anthology exploring privilege and moral decay.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/The_White_Lotus_Title.svg/512px-The_White_Lotus_Title.svg.png', alt: 'The White Lotus logo', attribution: 'HBO, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['tanya-mcquoid', 'harper-spiller', 'ethan-spiller', 'daphne-sullivan', 'jennifer-coolidge-white-lotus', 'portia'],
    fanHeatScore: 87,
    tags: ['comedy', 'drama', 'satire', 'anthology', 'social-commentary', 'ongoing', 'critically-acclaimed', 'award-winning'],
    relatedShowSlugs: ['succession', 'the-bear', 'fleabag'],
    faqs: [
      { question: 'How many seasons does The White Lotus have?', answer: 'The White Lotus currently has 3 seasons on HBO. Season 1 premiered on July 11, 2021 (set in Hawaii), Season 2 on October 30, 2022 (set in Sicily), and Season 3 in 2025 (set in Thailand).' },
      { question: 'Where can I watch The White Lotus?', answer: 'The White Lotus is available on Max (formerly HBO Max). It airs on HBO and can also be purchased on Amazon Prime Video and Apple TV+.' },
      { question: 'Is The White Lotus an anthology series?', answer: 'Yes, The White Lotus is an anthology series. Each season features a mostly new cast of characters at a different White Lotus resort location, though some characters have appeared across multiple seasons.' },
      { question: 'Who created The White Lotus?', answer: 'The White Lotus was created, written, and directed by Mike White. Originally conceived as a limited series, its success led HBO to renew it as an ongoing anthology.' },
      { question: 'Did Jennifer Coolidge win an Emmy for The White Lotus?', answer: 'Yes, Jennifer Coolidge won the Emmy Award for Outstanding Supporting Actress in a Limited or Anthology Series for her role as Tanya McQuoid in Season 1 and Season 2. Her performance became one of the most celebrated aspects of the show.' }
    ],
    videos: [
      { title: 'The White Lotus Official Trailer (HBO)', youtubeId: 'TGLq7_MonZ4', description: 'Official trailer for The White Lotus Season 1 on HBO.' },
      { title: 'The White Lotus Season 2 Official Trailer', youtubeId: 'RIGmKrbDxNo', description: 'Official trailer for The White Lotus Season 2 on HBO.' }
    ]
  },
  {
    slug: 'suits',
    title: 'Suits',
    network: 'USA Network',
    platform: 'Netflix',
    genre: ['Drama', 'Legal'],
    years: '2011–2019',
    status: 'Ended',
    seasons: 9,
    episodes: 134,
    creator: 'Aaron Korsh',
    synopsis: 'Suits follows Mike Ross, a brilliant college dropout with an eidetic memory, who lands a job as an associate at one of New York City\'s top law firms despite never having attended law school. Hired by the legendary closer Harvey Specter, Mike must keep his secret while navigating high-stakes corporate law, office politics, and complex legal cases. The series explores themes of loyalty, ambition, ethics, and the blurred line between doing what is legal and what is right, all set against the cutthroat world of Manhattan corporate law.',
    synopsisShort: 'A college dropout with a photographic memory secretly works as a lawyer at a top New York City firm alongside a legendary closer.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Suits_Logo.svg/512px-Suits_Logo.svg.png', alt: 'Suits logo', attribution: 'USA Network, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['harvey-specter', 'mike-ross', 'jessica-pearson', 'louis-litt', 'donna-paulsen', 'rachel-zane'],
    fanHeatScore: 88,
    tags: ['drama', 'legal', 'corporate', 'complete-series', 'meme-culture', 'sleeper-hit'],
    relatedShowSlugs: ['succession', 'breaking-bad', 'the-sopranos'],
    faqs: [
      { question: 'How many seasons does Suits have?', answer: 'Suits has 9 seasons with 134 episodes. It aired on USA Network from June 23, 2011 to September 25, 2019.' },
      { question: 'Where can I watch Suits?', answer: 'Suits is available on Netflix, where it became a viral sensation in 2023, breaking streaming records years after its original run ended. It is also available on Peacock in the United States.' },
      { question: 'Why did Suits become popular again on Netflix?', answer: 'Suits experienced a massive resurgence in popularity when it was added to Netflix in 2023, partly driven by renewed interest following Meghan Markle\'s (who played Rachel Zane) marriage to Prince Harry. It became the most-streamed show across all platforms that year.' },
      { question: 'Who created Suits?', answer: 'Suits was created by Aaron Korsh. The show was produced by Hypnotic Films and Universal Cable Productions for USA Network.' },
      { question: 'Is there a Suits spin-off?', answer: 'Yes, Suits: L.A. is a spin-off series that was developed following the original show\'s massive streaming success. The spin-off follows a new set of characters in the Los Angeles legal world.' }
    ],
    videos: [
      { title: 'Suits Official Trailer — USA Network', youtubeId: '85z53bMkvhQ', description: 'Official trailer for Suits on USA Network.' },
      { title: 'Harvey Specter Best Moments | Suits', youtubeId: 'YFHD7kuAqu4', description: 'Compilation of Harvey Specter\'s most iconic moments from Suits.' }
    ]
  },
  {
    slug: 'better-call-saul',
    title: 'Better Call Saul',
    network: 'AMC',
    platform: 'Netflix',
    genre: ['Drama', 'Crime'],
    years: '2015–2022',
    status: 'Ended',
    seasons: 6,
    episodes: 63,
    creator: 'Vince Gilligan & Peter Gould',
    synopsis: 'Better Call Saul is the prequel to Breaking Bad, tracing the transformation of earnest lawyer Jimmy McGill into the morally flexible criminal attorney Saul Goodman. Set primarily in Albuquerque, New Mexico, the series follows Jimmy as he navigates the legal profession while living in the shadow of his brilliant but resentful brother Chuck. Alongside Jimmy\'s story, the show chronicles the parallel journey of former cop turned fixer Mike Ehrmantraut and the rise of the cartel figures who will later play pivotal roles in Breaking Bad. The series is a masterful character study exploring how good intentions, wounded pride, and small compromises can lead to irreversible moral decline.',
    synopsisShort: 'The origin story of Breaking Bad\'s Saul Goodman, tracing a small-time lawyer\'s transformation into a criminal attorney.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Better_Call_Saul_logo.svg/512px-Better_Call_Saul_logo.svg.png', alt: 'Better Call Saul logo', attribution: 'AMC Networks, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['jimmy-mcgill', 'kim-wexler', 'mike-ehrmantraut-bcs', 'chuck-mcgill', 'nacho-varga', 'lalo-salamanca'],
    fanHeatScore: 93,
    tags: ['drama', 'crime', 'prequel', 'anti-hero', 'complete-series', 'critically-acclaimed', 'character-study'],
    relatedShowSlugs: ['breaking-bad', 'the-sopranos', 'ozark'],
    faqs: [
      { question: 'How many seasons does Better Call Saul have?', answer: 'Better Call Saul has 6 seasons with 63 episodes. It aired on AMC from February 8, 2015 to August 15, 2022.' },
      { question: 'Where can I watch Better Call Saul?', answer: 'Better Call Saul is available on Netflix in many regions worldwide. It originally aired on AMC and can also be purchased on Amazon Prime Video and Apple TV+.' },
      { question: 'Do I need to watch Breaking Bad before Better Call Saul?', answer: 'While Better Call Saul can be enjoyed on its own, watching Breaking Bad first provides valuable context for many characters and plot points. The series serves as a prequel, so knowledge of Breaking Bad enriches the viewing experience significantly.' },
      { question: 'Who created Better Call Saul?', answer: 'Better Call Saul was created by Vince Gilligan and Peter Gould, who were both key creative forces behind Breaking Bad. The show was produced by Sony Pictures Television for AMC.' },
      { question: 'Is Better Call Saul as good as Breaking Bad?', answer: 'Better Call Saul is widely regarded by critics as equal to or even surpassing Breaking Bad in quality. It holds a 98% approval rating on Rotten Tomatoes and received numerous Emmy nominations throughout its run, though it notably never won the Outstanding Drama Series award.' }
    ],
    videos: [
      { title: 'Better Call Saul Official Trailer (AMC)', youtubeId: 'HN4oydykJFc', description: 'Official trailer for Better Call Saul Season 1 on AMC.' },
      { title: 'Better Call Saul Final Season Trailer', youtubeId: 'u5_ITt2LM0A', description: 'Official trailer for Better Call Saul\'s final season on AMC.' }
    ]
  },
  {
    slug: 'the-boys',
    title: 'The Boys',
    network: 'Amazon Prime Video',
    platform: 'Amazon Prime Video',
    genre: ['Action', 'Sci-Fi', 'Satire'],
    years: '2019–present',
    status: 'Ongoing',
    seasons: 4,
    episodes: 32,
    creator: 'Eric Kripke',
    synopsis: 'The Boys is set in a world where superheroes are managed by the powerful corporation Vought International and are celebrated as celebrities, but behind the polished public image, many of them are corrupt, reckless, and morally bankrupt. When Hughie Campbell\'s girlfriend is killed by a careless superhero, he joins a ragtag group of vigilantes led by the ruthless Billy Butcher, whose mission is to expose and take down corrupt superheroes — especially the terrifyingly powerful and psychopathic Homelander. The series is a darkly comedic and ultraviolent deconstruction of superhero culture that satirizes celebrity worship, corporate greed, media manipulation, and political extremism.',
    synopsisShort: 'A group of vigilantes takes on corrupt superheroes controlled by a powerful corporation in this ultraviolent satirical series.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/The_Boys_logo.svg/512px-The_Boys_logo.svg.png', alt: 'The Boys logo', attribution: 'Amazon Studios, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['billy-butcher', 'homelander', 'hughie-campbell', 'starlight-annie-january', 'frenchie', 'kimiko'],
    fanHeatScore: 91,
    tags: ['action', 'satire', 'superhero', 'dark-comedy', 'ultraviolent', 'social-commentary', 'ongoing'],
    relatedShowSlugs: ['stranger-things', 'the-mandalorian', 'the-last-of-us'],
    faqs: [
      { question: 'How many seasons does The Boys have?', answer: 'The Boys currently has 4 seasons on Amazon Prime Video. The series premiered on July 26, 2019. Season 5 has been announced as the final season.' },
      { question: 'Where can I watch The Boys?', answer: 'The Boys is an Amazon Original series and is available exclusively on Amazon Prime Video worldwide.' },
      { question: 'Is The Boys based on a comic book?', answer: 'Yes, The Boys is based on the comic book series of the same name by Garth Ennis and Darick Robertson, published by Wildstorm and later Dynamite Entertainment. The show adapts the premise but makes significant changes to characters and storylines.' },
      { question: 'Who created The Boys TV series?', answer: 'The Boys TV series was developed by Eric Kripke, who is best known for creating Supernatural. Kripke serves as showrunner and executive producer.' },
      { question: 'Does The Boys have spin-off shows?', answer: 'Yes, The Boys has expanded into a franchise. Gen V is a spin-off set at a college for young superheroes, and The Boys: Mexico is another planned spin-off. The animated anthology The Boys Presents: Diabolical also explores the universe.' }
    ],
    videos: [
      { title: 'The Boys Official Trailer — Amazon Prime Video', youtubeId: 'tcrNsIaQkb4', description: 'Official trailer for The Boys Season 1 on Amazon Prime Video.' },
      { title: 'The Boys Season 4 Official Trailer', youtubeId: 'MNfdi8PDK8E', description: 'Official trailer for The Boys Season 4 on Amazon Prime Video.' }
    ]
  },
  {
    slug: 'fleabag',
    title: 'Fleabag',
    network: 'Amazon Prime Video',
    platform: 'Amazon Prime Video',
    genre: ['Comedy', 'Drama'],
    years: '2016–2019',
    status: 'Ended',
    seasons: 2,
    episodes: 12,
    creator: 'Phoebe Waller-Bridge',
    synopsis: 'Fleabag follows an unnamed, dry-witted woman navigating life in London after a personal tragedy. Known only as Fleabag, she copes with grief, dysfunctional family relationships, and a chaotic love life by breaking the fourth wall and speaking directly to the audience with brutal honesty and razor-sharp humor. Season 2 introduces the Hot Priest, whose forbidden relationship with Fleabag becomes the emotional centerpiece of the series. Originally adapted from Phoebe Waller-Bridge\'s one-woman stage show, the series is celebrated as one of the finest comedies ever produced, blending laugh-out-loud moments with devastating emotional depth.',
    synopsisShort: 'A sharp-witted woman in London navigates grief, family dysfunction, and love while breaking the fourth wall with the audience.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Fleabag_Title.svg/512px-Fleabag_Title.svg.png', alt: 'Fleabag logo', attribution: 'Amazon Studios/BBC, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['fleabag-character', 'claire-fleabag', 'the-priest', 'godmother', 'martin-fleabag', 'dad-fleabag'],
    fanHeatScore: 89,
    tags: ['comedy', 'drama', 'fourth-wall', 'british', 'complete-series', 'critically-acclaimed', 'award-winning', 'feminist'],
    relatedShowSlugs: ['schitts-creek', 'ted-lasso', 'the-bear'],
    faqs: [
      { question: 'How many seasons does Fleabag have?', answer: 'Fleabag has 2 seasons with 12 episodes total (6 episodes each). Season 1 premiered on July 21, 2016, and Season 2 on March 4, 2019.' },
      { question: 'Where can I watch Fleabag?', answer: 'Fleabag is available on Amazon Prime Video worldwide. In the UK, it originally aired on BBC Three. It can also be purchased on Apple TV+ and Google Play.' },
      { question: 'Will there be a Fleabag Season 3?', answer: 'No, creator and star Phoebe Waller-Bridge has confirmed that Fleabag is finished after 2 seasons. She has stated that the story is complete and she has no plans to continue it.' },
      { question: 'Who created Fleabag?', answer: 'Fleabag was created by and stars Phoebe Waller-Bridge. It is based on her one-woman stage show that debuted at the Edinburgh Festival Fringe in 2013. Waller-Bridge writes and stars in the series.' },
      { question: 'Did Fleabag win any Emmys?', answer: 'Yes, Fleabag won six Emmy Awards in 2019, including Outstanding Comedy Series, Outstanding Lead Actress (Phoebe Waller-Bridge), Outstanding Writing, and Outstanding Directing. It was one of the most celebrated shows at the 71st Primetime Emmy Awards.' }
    ],
    videos: [
      { title: 'Fleabag Official Trailer — Amazon Prime Video', youtubeId: 'I5Uv6cb9YRs', description: 'Official trailer for Fleabag on Amazon Prime Video.' },
      { title: 'Fleabag Season 2 Official Trailer', youtubeId: 'aX2ViKQFL_k', description: 'Official trailer for Fleabag Season 2 on Amazon Prime Video.' }
    ]
  },
  {
    slug: 'abbott-elementary',
    title: 'Abbott Elementary',
    network: 'ABC',
    platform: 'Hulu',
    genre: ['Comedy', 'Mockumentary'],
    years: '2021–present',
    status: 'Ongoing',
    seasons: 3,
    episodes: 47,
    creator: 'Quinta Brunson',
    synopsis: 'Abbott Elementary is a workplace mockumentary set at a fictional underfunded public elementary school in Philadelphia. The series follows a group of dedicated but under-resourced teachers who, despite the odds stacked against them, are determined to help their students succeed. Led by the passionate second-grade teacher Janine Teagues, the ensemble cast navigates bureaucratic obstacles, limited budgets, and the well-intentioned but often incompetent leadership of Principal Ava Coleman, all while finding humor, camaraderie, and purpose in their daily work. The show is a love letter to public school teachers and the communities they serve.',
    synopsisShort: 'Dedicated teachers at an underfunded Philadelphia public school navigate obstacles with humor and heart in this workplace mockumentary.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Abbott_Elementary_Logo.svg/512px-Abbott_Elementary_Logo.svg.png', alt: 'Abbott Elementary logo', attribution: 'ABC, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['janine-teagues', 'gregory-eddie', 'ava-coleman', 'melissa-schemmenti', 'barbara-howard', 'jacob-hill'],
    fanHeatScore: 85,
    tags: ['comedy', 'mockumentary', 'workplace', 'education', 'ensemble', 'ongoing', 'award-winning'],
    relatedShowSlugs: ['the-office', 'schitts-creek', 'ted-lasso'],
    faqs: [
      { question: 'How many seasons does Abbott Elementary have?', answer: 'Abbott Elementary currently has 3 seasons on ABC. The series premiered on December 7, 2021, and has been renewed for a fourth season.' },
      { question: 'Where can I watch Abbott Elementary?', answer: 'Abbott Elementary airs on ABC and is available to stream on Hulu in the United States. It is also available on Disney+ in international markets.' },
      { question: 'Who created Abbott Elementary?', answer: 'Abbott Elementary was created by Quinta Brunson, who also stars as Janine Teagues. Brunson drew inspiration from her mother, who was a teacher in Philadelphia. The show is produced by Warner Bros. Television and 20th Television.' },
      { question: 'Did Abbott Elementary win any Emmys?', answer: 'Yes, Abbott Elementary has won multiple Emmy Awards, including Outstanding Writing for a Comedy Series for Quinta Brunson and Outstanding Supporting Actress for Sheryl Lee Ralph. It was nominated for Outstanding Comedy Series in its first season.' },
      { question: 'Is Abbott Elementary based on a real school?', answer: 'Abbott Elementary is not based on a specific real school, but creator Quinta Brunson named it after her sixth-grade teacher, Mrs. Abbott, from Mastery Charter School in Philadelphia. The show reflects real challenges faced by underfunded public schools.' }
    ],
    videos: [
      { title: 'Abbott Elementary Official Trailer (ABC)', youtubeId: 'MLAG0_eCHKs', description: 'Official trailer for Abbott Elementary Season 1 on ABC.' },
      { title: 'Abbott Elementary Season 2 Trailer', youtubeId: 'KN-GiJMZSvo', description: 'Official trailer for Abbott Elementary Season 2 on ABC.' }
    ]
  },
  {
    slug: 'arcane',
    title: 'Arcane',
    network: 'Netflix',
    platform: 'Netflix',
    genre: ['Animation', 'Action', 'Fantasy'],
    years: '2021–present',
    status: 'Ongoing',
    seasons: 2,
    episodes: 18,
    creator: 'Christian Linke & Alex Yee',
    synopsis: 'Arcane is set in the utopian city of Piltover and its oppressed underground counterpart, Zaun, within the universe of the popular video game League of Legends. The series follows two sisters, Vi and Jinx (formerly Powder), who find themselves on opposing sides of a brewing war between the two cities. As Piltover\'s elite harness a powerful new technology called Hextech, and Zaun\'s undercity boils with resentment and revolution, the sisters\' fractured bond becomes the emotional core of an epic conflict that reshapes their world. Arcane is celebrated for its groundbreaking animation by Fortiche Production, complex characters, and emotionally devastating storytelling.',
    synopsisShort: 'Two sisters torn apart by conflict find themselves on opposing sides of a war between the utopian Piltover and the oppressed Zaun.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Arcane_Logo.svg/512px-Arcane_Logo.svg.png', alt: 'Arcane logo', attribution: 'Netflix/Riot Games, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['vi-arcane', 'jinx-powder', 'caitlyn-kiramman', 'jayce-talis', 'viktor-arcane', 'silco'],
    fanHeatScore: 90,
    tags: ['animation', 'action', 'fantasy', 'video-game-adaptation', 'visually-stunning', 'ongoing', 'critically-acclaimed'],
    relatedShowSlugs: ['stranger-things', 'the-last-of-us', 'the-boys'],
    faqs: [
      { question: 'How many seasons does Arcane have?', answer: 'Arcane has 2 seasons on Netflix. Season 1 premiered on November 6, 2021, and Season 2 premiered on November 9, 2024. Each season has 9 episodes released in 3-episode acts.' },
      { question: 'Where can I watch Arcane?', answer: 'Arcane is a Netflix Original series and is available exclusively on Netflix worldwide. It was co-produced by Riot Games and animated by Fortiche Production.' },
      { question: 'Do I need to play League of Legends to understand Arcane?', answer: 'No, Arcane is designed to be accessible to viewers with no knowledge of League of Legends. While it features characters from the game and is set in the same universe, the show tells a self-contained story with its own narrative.' },
      { question: 'Who created Arcane?', answer: 'Arcane was created by Christian Linke and Alex Yee at Riot Games. The animation was produced by the French studio Fortiche Production. The show was in development for over six years before its premiere.' },
      { question: 'Why is Arcane considered a groundbreaking animated series?', answer: 'Arcane is celebrated for its unique visual style that blends 3D CGI with hand-painted textures and 2D art, creating an aesthetic unlike any other animated series. It was the first streaming series to win the Annie Award for Best Animated Series and has been praised for elevating the standard of video game adaptations.' }
    ],
    videos: [
      { title: 'Arcane Official Trailer — Netflix', youtubeId: 'fXmAurh012s', description: 'Official trailer for Arcane Season 1 on Netflix.' },
      { title: 'Arcane Season 2 Official Trailer', youtubeId: 'bllW1Yi4dOQ', description: 'Official trailer for Arcane Season 2 on Netflix.' }
    ]
  },
  {
    slug: 'shogun',
    title: 'Shogun',
    network: 'FX',
    platform: 'Hulu',
    genre: ['Drama', 'Period Drama', 'War'],
    years: '2024–present',
    status: 'Ongoing',
    seasons: 1,
    episodes: 10,
    creator: 'Rachel Kondo & Justin Marks',
    synopsis: 'Shogun is set in 1600s Japan during a period of political upheaval as five regents vie for control of the country following the death of the Taiko. When English sailor John Blackthorne is shipwrecked on the shores of Japan, he becomes entangled in the schemes of Lord Yoshii Toranaga, a cunning political leader fighting for his survival against a coalition of rival lords. As Blackthorne navigates an alien culture with the aid of his translator Lady Mariko, the series weaves a tapestry of war, political intrigue, forbidden romance, and clashing civilizations. Based on James Clavell\'s bestselling 1975 novel, Shogun is a sweeping epic that immerses viewers in feudal Japan with stunning authenticity and emotional depth.',
    synopsisShort: 'An English sailor shipwrecked in 1600s Japan becomes entangled in a power struggle that will shape the nation\'s future.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Shogun_FX_Logo.svg/512px-Shogun_FX_Logo.svg.png', alt: 'Shogun FX logo', attribution: 'FX Networks, Public domain, via Wikimedia Commons', width: 512, height: 186 },
    characterSlugs: ['john-blackthorne', 'lord-toranaga', 'lady-mariko', 'kashigi-yabushige', 'toda-hiromatsu', 'usami-fuji'],
    fanHeatScore: 93,
    tags: ['drama', 'period-drama', 'war', 'historical', 'book-adaptation', 'japan', 'ongoing', 'critically-acclaimed', 'award-winning'],
    relatedShowSlugs: ['game-of-thrones', 'house-of-the-dragon', 'peaky-blinders'],
    faqs: [
      { question: 'How many seasons does Shogun have?', answer: 'Shogun currently has 1 season with 10 episodes on FX. The series premiered on February 27, 2024. Originally planned as a limited series, it was renewed for additional seasons following its critical and commercial success.' },
      { question: 'Where can I watch Shogun?', answer: 'Shogun is available on Hulu in the United States and on Disney+ internationally. It is an FX production that premiered with its first two episodes simultaneously.' },
      { question: 'Is Shogun based on a book?', answer: 'Yes, Shogun is based on the 1975 bestselling novel by James Clavell. The novel was previously adapted as a television miniseries in 1980 starring Richard Chamberlain. The 2024 FX adaptation is a more faithful and expanded retelling.' },
      { question: 'Did Shogun win any Emmy Awards?', answer: 'Yes, Shogun made television history at the 76th Primetime Emmy Awards in 2024, winning a record-breaking 18 Emmy Awards including Outstanding Drama Series, Outstanding Lead Actor (Hiroyuki Sanada), and Outstanding Lead Actress (Anna Sawai). It set the record for most Emmy wins by a series in a single year.' },
      { question: 'Is Shogun historically accurate?', answer: 'Shogun is inspired by real historical events and figures from Japan\'s Sengoku period. Lord Toranaga is based on Tokugawa Ieyasu, and John Blackthorne is based on English navigator William Adams. However, the show is a work of fiction that takes creative liberties with historical events.' }
    ],
    videos: [
      { title: 'Shogun Official Trailer — FX', youtubeId: '0lMFayjJhJY', description: 'Official trailer for Shogun on FX.' },
      { title: 'Shogun Extended Trailer — FX', youtubeId: 'nRaHiGWdEJQ', description: 'Extended trailer for Shogun on FX featuring key scenes from the series.' }
    ]
  }
  ,
  {
    slug: 'dexter',
    title: 'Dexter',
    network: 'Showtime',
    platform: 'Paramount+',
    genre: ['Drama', 'Crime', 'Thriller'],
    years: '2006–2013',
    status: 'Ended',
    seasons: 8,
    episodes: 96,
    creator: 'James Manos Jr.',
    synopsis: 'Dexter follows Dexter Morgan, a forensic blood spatter analyst for the Miami Metro Police Department who moonlights as a serial killer targeting other murderers. Guided by a moral code instilled by his adoptive father Harry, Dexter channels his dark urges into eliminating criminals who have escaped the justice system. The series explores themes of duality, morality, and the nature of evil as Dexter navigates his double life, maintaining relationships and a family while secretly pursuing his lethal hobby. Over eight seasons, Dexter faces increasingly dangerous adversaries while struggling to understand his own humanity.',
    synopsisShort: 'A forensic blood spatter analyst leads a secret double life as a serial killer who targets other murderers.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Placeholder.svg/512px-Placeholder.svg.png', alt: 'Dexter logo', attribution: 'Showtime Networks', width: 512, height: 186 },
    characterSlugs: ['dexter-morgan', 'debra-morgan', 'rita-bennett', 'sergeant-doakes', 'hannah-mckay', 'trinity-killer'],
    fanHeatScore: 88,
    tags: ['anti-hero', 'crime', 'serial-killer', 'complete-series', 'critically-acclaimed', 'dark'],
    relatedShowSlugs: ['breaking-bad', 'the-sopranos', 'homeland', 'true-detective'],
    faqs: [
      { question: 'How many seasons does Dexter have?', answer: 'Dexter has 8 seasons with 96 episodes total. The original series aired on Showtime from October 1, 2006 to September 22, 2013. A revival limited series, Dexter: New Blood, aired in 2021-2022.' },
      { question: 'Where can I watch Dexter?', answer: 'Dexter is available to stream on Paramount+ in the US. It can also be purchased on Amazon Prime Video, Apple TV+, and Google Play.' },
      { question: 'Is Dexter based on a book?', answer: 'Yes, Dexter is based on the novel Darkly Dreaming Dexter by Jeff Lindsay, published in 2004. The show diverged significantly from the book series after the first season.' },
      { question: 'What is Dexter: New Blood?', answer: 'Dexter: New Blood is a 10-episode limited series revival that aired in 2021-2022 on Showtime. Set 10 years after the original series finale, it follows Dexter living under an assumed identity in a small town in upstate New York.' }
    ],
    videos: [
      { title: 'Dexter Official Trailer — Showtime', youtubeId: 'YQeUmSD1c3g', description: 'Official trailer for Dexter on Showtime.' },
      { title: 'Dexter Season 4 Trailer', youtubeId: 'I0p8kkWmm0M', description: 'Trailer for the critically acclaimed fourth season of Dexter featuring the Trinity Killer.' }
    ]
  },
  {
    slug: 'the-walking-dead',
    title: 'The Walking Dead',
    network: 'AMC',
    platform: 'Netflix',
    genre: ['Drama', 'Horror', 'Thriller'],
    years: '2010–2022',
    status: 'Ended',
    seasons: 11,
    episodes: 177,
    creator: 'Frank Darabont',
    synopsis: 'The Walking Dead follows sheriff\'s deputy Rick Grimes as he awakens from a coma to discover a world overrun by zombies, known as "walkers." He reunites with his family and a band of survivors, leading them through a post-apocalyptic landscape where the living are often more dangerous than the dead. Over eleven seasons, the series explores the collapse and rebuilding of civilization, examining how ordinary people respond to extraordinary circumstances and what it means to maintain humanity in a world that has lost it. Based on Robert Kirkman\'s comic book series, the show became a cultural phenomenon and one of the most-watched cable television series in history.',
    synopsisShort: 'Survivors navigate a post-apocalyptic world overrun by zombies, facing threats from both the dead and the living.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Placeholder.svg/512px-Placeholder.svg.png', alt: 'The Walking Dead logo', attribution: 'AMC Networks', width: 512, height: 186 },
    characterSlugs: ['rick-grimes', 'daryl-dixon', 'michonne-twd', 'negan', 'carol-peletier', 'glenn-rhee'],
    fanHeatScore: 85,
    tags: ['horror', 'post-apocalyptic', 'ensemble', 'complete-series', 'comic-adaptation', 'zombies'],
    relatedShowSlugs: ['stranger-things', 'the-last-of-us', 'game-of-thrones'],
    faqs: [
      { question: 'How many seasons does The Walking Dead have?', answer: 'The Walking Dead has 11 seasons with 177 episodes. It aired on AMC from October 31, 2010 to November 20, 2022, making it one of the longest-running horror series on television.' },
      { question: 'Where can I watch The Walking Dead?', answer: 'The Walking Dead is available on Netflix in many regions. It originally aired on AMC and can also be purchased on Amazon Prime Video, Apple TV+, and Google Play.' },
      { question: 'Does The Walking Dead have spin-offs?', answer: 'Yes, The Walking Dead has spawned several spin-offs including Fear the Walking Dead (2015-2023), The Walking Dead: World Beyond (2020-2021), The Walking Dead: Dead City (2023-), The Walking Dead: Daryl Dixon (2023-), and The Walking Dead: The Ones Who Live (2024).' },
      { question: 'Is The Walking Dead based on a comic book?', answer: 'Yes, The Walking Dead is based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard, published by Image Comics from 2003 to 2019. The show follows the comics but makes significant changes to characters and storylines.' }
    ],
    videos: [
      { title: 'The Walking Dead Official Comic-Con Trailer', youtubeId: 'R1v0uFms68U', description: 'Official Comic-Con trailer for The Walking Dead on AMC.' },
      { title: 'The Walking Dead Final Season Trailer', youtubeId: 'JqFr-GwNxso', description: 'Official trailer for the final season of The Walking Dead.' }
    ]
  },
  {
    slug: 'only-murders',
    title: 'Only Murders in the Building',
    network: 'Hulu',
    platform: 'Hulu',
    genre: ['Comedy', 'Mystery', 'Crime'],
    years: '2021–present',
    status: 'Ongoing',
    seasons: 4,
    episodes: 42,
    creator: 'Steve Martin & John Hoffman',
    synopsis: 'Only Murders in the Building follows three strangers — retired actor Charles-Haden Savage, struggling Broadway director Oliver Putnam, and young artist Mabel Mora — who share an obsession with true crime podcasts and live in the same Upper West Side apartment building, the Arconia. When a mysterious death occurs in their building, the trio decides to start their own true-crime podcast while investigating the murder. Each season brings a new mystery within and around the Arconia, attracting an ever-expanding cast of colorful suspects and celebrity guest stars. The show blends humor, heart, and genuine whodunit suspense in a love letter to New York City and the art of storytelling.',
    synopsisShort: 'Three true-crime-obsessed neighbors investigate murders in their Upper West Side apartment building while recording a podcast.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Placeholder.svg/512px-Placeholder.svg.png', alt: 'Only Murders in the Building logo', attribution: 'Hulu / 20th Television', width: 512, height: 186 },
    characterSlugs: ['charles-haden-savage', 'oliver-putnam', 'mabel-mora', 'howard-morris'],
    fanHeatScore: 84,
    tags: ['comedy', 'mystery', 'crime', 'ongoing', 'ensemble', 'new-york', 'critically-acclaimed'],
    relatedShowSlugs: ['fleabag', 'ted-lasso', 'abbott-elementary', 'schitts-creek'],
    faqs: [
      { question: 'How many seasons does Only Murders in the Building have?', answer: 'Only Murders in the Building has 4 seasons as of 2024, with a total of approximately 42 episodes. The show premiered on Hulu on August 31, 2021, and has been renewed for additional seasons.' },
      { question: 'Where can I watch Only Murders in the Building?', answer: 'Only Murders in the Building is available exclusively on Hulu in the United States and on Disney+ internationally.' },
      { question: 'Who created Only Murders in the Building?', answer: 'Only Murders in the Building was created by Steve Martin and John Hoffman. Steve Martin also stars in the series alongside Martin Short and Selena Gomez.' },
      { question: 'Is Only Murders in the Building a true story?', answer: 'No, Only Murders in the Building is entirely fictional, though it draws on the real atmosphere of New York City\'s Upper West Side and the cultural phenomenon of true-crime podcasts.' }
    ],
    videos: [
      { title: 'Only Murders in the Building Season 1 Trailer', youtubeId: 'BtVn8kPJBPo', description: 'Official trailer for Season 1 of Only Murders in the Building on Hulu.' },
      { title: 'Only Murders in the Building Season 4 Trailer', youtubeId: 'HQYqpJoRZxk', description: 'Official trailer for Season 4 of Only Murders in the Building.' }
    ]
  },
  {
    slug: 'loki',
    title: 'Loki',
    network: 'Disney+',
    platform: 'Disney+',
    genre: ['Sci-Fi', 'Fantasy', 'Adventure'],
    years: '2021–2023',
    status: 'Ended',
    seasons: 2,
    episodes: 12,
    creator: 'Michael Waldron',
    synopsis: 'Loki follows a variant of the God of Mischief after he escapes with the Tesseract during the time heist in Avengers: Endgame, creating an alternate timeline. Captured by the Time Variance Authority (TVA), an organization that exists outside of time and monitors the timeline, Loki is recruited to help fix the timeline and stop a greater threat. The series explores themes of identity, free will, and destiny as Loki confronts alternate versions of himself and uncovers the truth behind the TVA. In its second season, Loki faces the unraveling of the multiverse and must make the ultimate sacrifice to protect all of reality.',
    synopsisShort: 'The God of Mischief is recruited by the Time Variance Authority to fix the timeline and discovers the truth about the multiverse.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Placeholder.svg/512px-Placeholder.svg.png', alt: 'Loki Disney+ logo', attribution: 'Marvel Studios / Disney+', width: 512, height: 186 },
    characterSlugs: ['loki-laufeyson', 'mobius-mmarvel', 'sylvie', 'he-who-remains'],
    fanHeatScore: 89,
    tags: ['sci-fi', 'fantasy', 'mcu', 'complete-series', 'time-travel', 'multiverse', 'superhero'],
    relatedShowSlugs: ['the-mandalorian', 'andor', 'stranger-things', 'arcane'],
    faqs: [
      { question: 'How many seasons does Loki have?', answer: 'Loki has 2 seasons with a total of 12 episodes. Season 1 premiered on June 9, 2021, and Season 2 premiered on October 5, 2023, on Disney+.' },
      { question: 'Where can I watch Loki?', answer: 'Loki is available exclusively on Disney+. It is a Marvel Studios production and part of the Marvel Cinematic Universe.' },
      { question: 'Do I need to watch the MCU movies to understand Loki?', answer: 'While Loki can be enjoyed on its own, familiarity with the MCU — particularly the Avengers films and Thor movies — enriches the viewing experience. The series begins directly after events in Avengers: Endgame.' },
      { question: 'Is there a Loki Season 3?', answer: 'Loki Season 2 concluded with what appears to be a definitive ending for the character\'s arc. While Marvel has not officially announced a third season, the events of Loki Season 2 will impact other MCU projects.' }
    ],
    videos: [
      { title: 'Loki Official Trailer — Disney+', youtubeId: 'nW948Va-l10', description: 'Official trailer for Marvel Studios\' Loki on Disney+.' },
      { title: 'Loki Season 2 Official Trailer', youtubeId: 'bT7BjVJAvNs', description: 'Official trailer for Loki Season 2 on Disney+.' }
    ]
  },
  {
    slug: 'andor',
    title: 'Andor',
    network: 'Disney+',
    platform: 'Disney+',
    genre: ['Sci-Fi', 'Drama', 'Thriller'],
    years: '2022–present',
    status: 'Ongoing',
    seasons: 1,
    episodes: 12,
    creator: 'Tony Gilroy',
    synopsis: 'Andor is a prequel series set in the Star Wars universe, following Cassian Andor in the five years leading up to the events of Rogue One: A Star Wars Story. The series chronicles the birth of the Rebel Alliance, exploring how ordinary people are radicalized into fighting against the oppressive Galactic Empire. Through intersecting storylines, it follows Cassian\'s transformation from a cynical thief into a committed revolutionary, while also examining the Empire\'s growing authoritarianism through the eyes of ambitious Imperial Security Bureau officer Dedra Meero. Widely praised as one of the most mature and politically sophisticated Star Wars stories ever told.',
    synopsisShort: 'A thief\'s journey from self-interest to rebellion against the Galactic Empire in the years before Rogue One.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Placeholder.svg/512px-Placeholder.svg.png', alt: 'Andor Disney+ logo', attribution: 'Lucasfilm / Disney+', width: 512, height: 186 },
    characterSlugs: ['cassian-andor', 'luthen-rael', 'mon-mothma', 'dedra-meero'],
    fanHeatScore: 87,
    tags: ['sci-fi', 'star-wars', 'ongoing', 'critically-acclaimed', 'political', 'rebellion', 'prequel'],
    relatedShowSlugs: ['the-mandalorian', 'loki', 'severance'],
    faqs: [
      { question: 'How many seasons does Andor have?', answer: 'Andor has 1 season with 12 episodes so far. Season 1 premiered on September 21, 2022 on Disney+. Season 2, which will be the final season, is expected to cover the remaining years before Rogue One.' },
      { question: 'Where can I watch Andor?', answer: 'Andor is available exclusively on Disney+. It is produced by Lucasfilm as part of the Star Wars franchise.' },
      { question: 'Do I need to watch other Star Wars content to understand Andor?', answer: 'No, Andor is designed to be accessible to newcomers. While it connects to Rogue One and the broader Star Wars universe, it tells a self-contained story about political resistance and personal transformation.' },
      { question: 'Who created Andor?', answer: 'Andor was created by Tony Gilroy, who also co-wrote Rogue One: A Star Wars Story. Gilroy is known for writing the Bourne franchise and directing Michael Clayton.' }
    ],
    videos: [
      { title: 'Andor Official Trailer — Disney+', youtubeId: 'cKOegEuCcfw', description: 'Official trailer for Andor on Disney+.' },
      { title: 'Andor Season 2 Announcement Trailer', youtubeId: 'x0kSBTx2OOA', description: 'Official announcement trailer for Andor Season 2.' }
    ]
  },
  {
    slug: 'true-detective',
    title: 'True Detective',
    network: 'HBO',
    platform: 'Max',
    genre: ['Drama', 'Crime', 'Mystery'],
    years: '2014–2024',
    status: 'Ended',
    seasons: 4,
    episodes: 30,
    creator: 'Nic Pizzolatto',
    synopsis: 'True Detective is an anthology crime drama series that tells self-contained stories across seasons, each set in a different location with new characters and casts. Season 1, widely regarded as a landmark in television, follows Louisiana detectives Rust Cohle and Marty Hart as they pursue a serial killer over seventeen years. Season 2 shifts to California\'s industrial corridor; Season 3 examines a child abduction case in the Ozarks; and Season 4, subtitled Night Country, follows two detectives investigating the disappearance of research scientists in Alaska. The series is renowned for its literary storytelling, philosophical depth, and atmospheric cinematography.',
    synopsisShort: 'An anthology series where detectives unravel dark crimes across different American landscapes and time periods.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Placeholder.svg/512px-Placeholder.svg.png', alt: 'True Detective logo', attribution: 'HBO', width: 512, height: 186 },
    characterSlugs: ['rust-cohle', 'marty-hart', 'liz-danvers'],
    fanHeatScore: 86,
    tags: ['crime', 'mystery', 'anthology', 'complete-series', 'critically-acclaimed', 'philosophical', 'noir'],
    relatedShowSlugs: ['the-sopranos', 'breaking-bad', 'homeland', 'dexter'],
    faqs: [
      { question: 'How many seasons does True Detective have?', answer: 'True Detective has 4 seasons with 30 episodes total. It premiered on HBO on January 12, 2014. Each season is a self-contained story with different characters and settings.' },
      { question: 'Where can I watch True Detective?', answer: 'True Detective is available on Max (formerly HBO Max). It originally aired on HBO and can also be purchased on Amazon Prime Video, Apple TV+, and Google Play.' },
      { question: 'Do you need to watch True Detective seasons in order?', answer: 'No, each season of True Detective is a standalone story with entirely new characters, settings, and mysteries. You can watch any season independently, though Season 1 is widely considered the best starting point.' },
      { question: 'Why is True Detective Season 1 so highly regarded?', answer: 'True Detective Season 1 is considered a landmark in television thanks to its atmospheric direction by Cary Joji Fukunaga, career-best performances by Matthew McConaughey and Woody Harrelson, philosophical dialogue, and the iconic six-minute tracking shot in episode 4.' }
    ],
    videos: [
      { title: 'True Detective Season 1 Official Trailer — HBO', youtubeId: 'fVQUcaO4AvE', description: 'Official trailer for True Detective Season 1 on HBO.' },
      { title: 'True Detective: Night Country Official Trailer', youtubeId: '_mhKgCTbYMk', description: 'Official trailer for True Detective Season 4: Night Country starring Jodie Foster.' }
    ]
  },
  {
    slug: 'black-mirror',
    title: 'Black Mirror',
    network: 'Channel 4 / Netflix',
    platform: 'Netflix',
    genre: ['Sci-Fi', 'Drama', 'Thriller'],
    years: '2011–present',
    status: 'Ongoing',
    seasons: 7,
    episodes: 27,
    creator: 'Charlie Brooker',
    synopsis: 'Black Mirror is a British anthology series that explores the dark side of technology and modern society. Each standalone episode presents a self-contained story set in an alternative present or near future, examining how technology can amplify humanity\'s worst instincts. From social media obsession and surveillance states to artificial intelligence and virtual reality, the show holds up a dark mirror to the ways technology reshapes human behavior, relationships, and society. Created by satirist Charlie Brooker, the series is celebrated for its prescient themes, twist endings, and ability to make viewers question their own relationship with technology.',
    synopsisShort: 'A dark anthology series exploring the unintended consequences of technology on humanity.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Placeholder.svg/512px-Placeholder.svg.png', alt: 'Black Mirror logo', attribution: 'Netflix / Endemol Shine Group', width: 512, height: 186 },
    characterSlugs: ['bee-black-mirror', 'lacie-pound', 'ash-starr'],
    fanHeatScore: 83,
    tags: ['sci-fi', 'anthology', 'ongoing', 'technology', 'dystopian', 'critically-acclaimed', 'british'],
    relatedShowSlugs: ['stranger-things', 'severance', 'loki'],
    faqs: [
      { question: 'How many seasons does Black Mirror have?', answer: 'Black Mirror has 7 seasons (called "series" in British television) with 27 episodes plus an interactive film, Bandersnatch. It originally aired on Channel 4 (2011-2014) before moving to Netflix (2016-present).' },
      { question: 'Where can I watch Black Mirror?', answer: 'Black Mirror is available on Netflix globally. The first two series originally aired on Channel 4 in the UK before the show moved to Netflix starting with Series 3.' },
      { question: 'Do you need to watch Black Mirror in order?', answer: 'No, each episode of Black Mirror is a standalone story with different characters, settings, and themes. You can watch episodes in any order, though some fans recommend starting with standout episodes like "The Entire History of You," "White Bear," or "Nosedive."' },
      { question: 'Who created Black Mirror?', answer: 'Black Mirror was created by Charlie Brooker, a British broadcaster, writer, and satirist. Brooker writes or co-writes most episodes and serves as executive producer alongside Annabel Jones.' }
    ],
    videos: [
      { title: 'Black Mirror Season 6 Official Trailer', youtubeId: 'kXikNxOjA3c', description: 'Official trailer for Black Mirror Season 6 on Netflix.' },
      { title: 'Black Mirror — Nosedive Clip', youtubeId: 'R32qWdOWrTo', description: 'Clip from the acclaimed episode Nosedive starring Bryce Dallas Howard.' }
    ]
  },
  {
    slug: 'homeland',
    title: 'Homeland',
    network: 'Showtime',
    platform: 'Paramount+',
    genre: ['Drama', 'Thriller', 'Espionage'],
    years: '2011–2020',
    status: 'Ended',
    seasons: 8,
    episodes: 96,
    creator: 'Howard Gordon & Alex Gansa',
    synopsis: 'Homeland follows CIA officer Carrie Mathison, who, while battling bipolar disorder, becomes convinced that Marine Sergeant Nicholas Brody has been turned by al-Qaeda during his eight years in captivity. Her obsessive investigation sets off a chain of events spanning eight seasons of geopolitical intrigue, counterterrorism operations, and personal sacrifice. Under the mentorship of veteran CIA officer Saul Berenson, Carrie navigates the morally ambiguous world of intelligence gathering, from the streets of Beirut to the corridors of power in Washington, D.C. Based on the Israeli series Prisoners of War, Homeland earned widespread acclaim for its nuanced portrayal of the War on Terror and its complex, flawed protagonist.',
    synopsisShort: 'A brilliant but volatile CIA officer pursues terrorists while battling her own mental health challenges.',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Placeholder.svg/512px-Placeholder.svg.png', alt: 'Homeland logo', attribution: 'Showtime Networks', width: 512, height: 186 },
    characterSlugs: ['carrie-mathison', 'nicholas-brody', 'saul-berenson', 'peter-quinn'],
    fanHeatScore: 81,
    tags: ['thriller', 'espionage', 'complete-series', 'critically-acclaimed', 'cia', 'political', 'award-winning'],
    relatedShowSlugs: ['breaking-bad', 'true-detective', 'dexter', 'the-sopranos'],
    faqs: [
      { question: 'How many seasons does Homeland have?', answer: 'Homeland has 8 seasons with 96 episodes total. The series aired on Showtime from October 2, 2011 to April 26, 2020.' },
      { question: 'Where can I watch Homeland?', answer: 'Homeland is available on Paramount+ in the US. It can also be purchased on Amazon Prime Video, Apple TV+, and Google Play.' },
      { question: 'Is Homeland based on a true story?', answer: 'No, Homeland is based on the Israeli television series Prisoners of War (Hatufim) created by Gideon Raff. While it draws on real-world geopolitics and the War on Terror, the characters and specific events are fictional.' },
      { question: 'Did Homeland win any awards?', answer: 'Yes, Homeland won numerous awards including the Emmy Award for Outstanding Drama Series (2012), Golden Globe for Best Television Series – Drama (2012 and 2013), and Claire Danes won the Emmy for Outstanding Lead Actress in a Drama Series twice.' }
    ],
    videos: [
      { title: 'Homeland Season 1 Official Trailer — Showtime', youtubeId: 'KZRpZCBiXMU', description: 'Official trailer for Homeland Season 1 on Showtime.' },
      { title: 'Homeland Final Season Trailer', youtubeId: 'lxHWaIE8tVg', description: 'Official trailer for the eighth and final season of Homeland.' }
    ]
  }
];

module.exports = { shows };
