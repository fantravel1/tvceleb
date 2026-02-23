// TVCeleb.com - Complete Show Data
// 20 Iconic Shows Across Genres

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
  }
];

module.exports = { shows };
