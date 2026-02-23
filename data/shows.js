// TVCeleb.com - Complete Show Data
// 10 Iconic Shows Across Genres

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
  }
];

module.exports = { shows };
