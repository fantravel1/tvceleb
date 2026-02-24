// Suits, Better Call Saul, and The Boys Characters
const suitsCharacters = [
  {
    slug: 'harvey-specter',
    name: 'Harvey Specter',
    showSlug: 'suits',
    showTitle: 'Suits',
    actorSlug: 'gabriel-macht',
    actorName: 'Gabriel Macht',
    seasonsActive: 'Seasons 1–9',
    characterArc: 'Harvey Specter is introduced as the best closer in New York City, a senior partner at Pearson Hardman with an unshakable confidence and a win-at-all-costs mentality. His decision to hire Mike Ross — a brilliant college dropout with a fraudulent law degree — sets the central tension of the entire series in motion. Harvey is defined by his loyalty to those he considers family, his razor-sharp legal mind, and his emotional walls built from a childhood marked by his mother\'s infidelity and his complicated relationship with his father.\n\nThroughout the series, Harvey\'s greatest struggle is reconciling his ruthless professional persona with his deeper capacity for genuine human connection. His relationships with Jessica Pearson, Donna Paulsen, Mike Ross, and Louis Litt each challenge different aspects of his emotional armor. His mentorship of Mike evolves from a transactional arrangement into a brotherhood, and his slow-burning romance with Donna — his longtime secretary and the one person who truly sees through him — becomes the emotional backbone of the show\'s later seasons.\n\nBy the series finale, Harvey has transformed from a man who equated vulnerability with weakness into someone capable of putting love and loyalty above professional ambition. He leaves the firm to follow Donna to Seattle, choosing personal happiness over the career that once defined his entire identity. His arc demonstrates that true strength lies not in never losing, but in knowing what is worth fighting for.',
    keyEpisodes: [
      { title: 'Pilot', season: 1, episode: 1, description: 'Harvey hires Mike Ross after being impressed by his photographic memory and legal knowledge during a drug deal gone wrong.' },
      { title: 'War', season: 2, episode: 16, description: 'Harvey goes to war with Daniel Hardman for control of the firm, revealing the depths of his loyalty to Jessica.' },
      { title: 'Mea Culpa', season: 5, episode: 8, description: 'Harvey suffers panic attacks as Mike\'s secret threatens to unravel, exposing his deep emotional vulnerability.' },
      { title: 'One Last Con', season: 9, episode: 10, description: 'Harvey leaves the firm and reunites with Donna in the series finale, choosing love over career.' }
    ],
    image: { src: '/images/characters/harvey-specter.jpg', alt: 'Gabriel Macht as Harvey Specter in Suits', attribution: 'USA Network', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/suits', url: 'https://www.reddit.com/r/suits/', platform: 'Reddit', description: 'Main Suits subreddit with active discussion about Harvey and the firm' },
        { name: 'r/television', url: 'https://www.reddit.com/r/television/', platform: 'Reddit', description: 'General television subreddit with frequent Suits threads' }
      ],
      youtubeChannels: [
        { name: 'Harvey Specter Best Moments', url: 'https://www.youtube.com/results?search_query=harvey+specter+best+moments', platform: 'YouTube', description: 'Compilations of Harvey\'s most iconic courtroom and boardroom scenes' }
      ],
      twitterAccounts: [
        { name: '@Abornewords', url: 'https://twitter.com/Suits_USA', platform: 'Twitter/X', description: 'Official Suits Twitter account' }
      ],
      fanSites: [
        { name: 'Suits Wiki - Harvey Specter', url: 'https://suits.fandom.com/wiki/Harvey_Specter', platform: 'Web', description: 'Harvey Specter page on the Fandom wiki' }
      ],
      instagramAccounts: [
        { name: '@suits_usa', url: 'https://www.instagram.com/suits_usa/', platform: 'Instagram', description: 'Official Suits Instagram page' }
      ],
      tiktokCreators: [
        { name: 'Harvey Specter Edits', url: 'https://www.tiktok.com/tag/harveyspecter', platform: 'TikTok', description: 'Sigma grindset and motivational edits featuring Harvey Specter' }
      ]
    },
    fanHeatIndex: { overall: 92, engagement: 94, socialActivity: 95, memeVelocity: 96, fanArtDensity: 80, fandomLongevity: 90 },
    faqs: [
      { question: 'Who plays Harvey Specter in Suits?', answer: 'Gabriel Macht plays Harvey Specter across all nine seasons of Suits. Macht\'s portrayal of the charismatic, sharply-dressed attorney became iconic and helped propel the show to global popularity, especially during its resurgence on Netflix in 2023.' },
      { question: 'What is Harvey Specter\'s catchphrase?', answer: 'Harvey Specter\'s most famous lines include "I don\'t have dreams, I have goals" and "Anyone can do my job, but no one can be me." His confident one-liners became a viral phenomenon on social media, particularly TikTok, where they are used in motivational and sigma grindset content.' },
      { question: 'Do Harvey and Donna end up together?', answer: 'Yes. After years of unresolved romantic tension, Harvey and Donna finally get together in Season 8. In the series finale, Harvey leaves the firm and moves to Seattle with Donna, and it is revealed they got married, ending the show\'s longest-running will-they-won\'t-they storyline.' },
      { question: 'Why did Suits become popular again on Netflix?', answer: 'Suits broke Netflix streaming records in 2023, years after its original run ended in 2019. The resurgence was driven by TikTok clips of Harvey Specter\'s power moves and one-liners, Meghan Markle\'s connection to the British royal family generating curiosity, and word-of-mouth binge-watching culture.' }
    ],
    videos: [
      { title: 'Harvey Specter - Best Closing Arguments', youtubeId: 'QjGRzxq3fSM', description: 'A compilation of Harvey Specter\'s most devastating courtroom moments.' },
      { title: 'Harvey and Mike - The Bromance', youtubeId: 'x9ZRj3Kzv60', description: 'The evolution of Harvey and Mike\'s mentor-mentee relationship across the series.' }
    ],
    relatedCharacterSlugs: ['mike-ross', 'donna-paulsen', 'jessica-pearson', 'louis-litt'],
    tags: ['protagonist', 'iconic', 'mentor', 'fan-favorite']
  },
  {
    slug: 'mike-ross',
    name: 'Mike Ross',
    showSlug: 'suits',
    showTitle: 'Suits',
    actorSlug: 'patrick-j-adams',
    actorName: 'Patrick J. Adams',
    seasonsActive: 'Seasons 1–7, 9',
    characterArc: 'Mike Ross is a brilliant young man with an eidetic memory who never attended law school but possesses a deeper understanding of the law than most practicing attorneys. After his parents\' death left him in the care of his grandmother, Mike fell into a cycle of wasted potential, hustling through life by taking LSATs for other people. His chance encounter with Harvey Specter — when Mike stumbles into a job interview while fleeing a failed drug deal — changes everything and launches the central premise of the show.\n\nMike\'s arc is fundamentally about the tension between extraordinary talent and the fraud required to exercise it. Every case he wins, every relationship he builds at the firm, and every professional triumph is shadowed by the lie at the foundation of his career. His moral compass frequently puts him at odds with the more pragmatic Harvey, and his desire to do the right thing often creates complications for everyone around him. His romance with Rachel Zane grounds him emotionally, but the secret of his fake degree is a ticking time bomb.\n\nThe bomb finally detonates when Mike is arrested and sent to prison for fraud. His willingness to accept the consequences rather than let others take the fall demonstrates genuine growth. After his release, Mike pivots to running a legal clinic, channeling his talents toward helping those who cannot afford high-powered attorneys. He returns in the final season to help Harvey one last time, cementing their bond as the show\'s defining relationship.',
    keyEpisodes: [
      { title: 'Pilot', season: 1, episode: 1, description: 'Mike stumbles into an interview with Harvey and is hired as an associate despite having no law degree.' },
      { title: 'The Arrangement', season: 1, episode: 3, description: 'Mike takes on his first real case and proves his legal brilliance while navigating the firm\'s politics.' },
      { title: 'Prosecution', season: 5, episode: 15, description: 'Mike is arrested for fraud, bringing the secret he and Harvey have kept for years crashing down.' },
      { title: 'One Last Con', season: 9, episode: 10, description: 'Mike returns to help Harvey in the series finale, solidifying their brotherhood.' }
    ],
    image: { src: '/images/characters/mike-ross.jpg', alt: 'Patrick J. Adams as Mike Ross in Suits', attribution: 'USA Network', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/suits', url: 'https://www.reddit.com/r/suits/', platform: 'Reddit', description: 'Main Suits subreddit with frequent Mike Ross discussion threads' },
        { name: 'r/television', url: 'https://www.reddit.com/r/television/', platform: 'Reddit', description: 'General TV discussion featuring Suits content' }
      ],
      youtubeChannels: [
        { name: 'Mike Ross Eidetic Memory Scenes', url: 'https://www.youtube.com/results?search_query=mike+ross+eidetic+memory', platform: 'YouTube', description: 'Compilations of Mike using his photographic memory to win cases' }
      ],
      twitterAccounts: [
        { name: '@PatrickJAdams', url: 'https://twitter.com/PatrickJAdams', platform: 'Twitter/X', description: 'Patrick J. Adams official Twitter account' }
      ],
      fanSites: [
        { name: 'Suits Wiki - Mike Ross', url: 'https://suits.fandom.com/wiki/Mike_Ross', platform: 'Web', description: 'Mike Ross page on the Fandom wiki' }
      ],
      instagramAccounts: [
        { name: '@patrickjadams', url: 'https://www.instagram.com/patrickjadams/', platform: 'Instagram', description: 'Patrick J. Adams official Instagram' }
      ],
      tiktokCreators: [
        { name: 'Mike Ross Edits', url: 'https://www.tiktok.com/tag/mikeross', platform: 'TikTok', description: 'Fan edits of Mike Ross scenes on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 85, engagement: 88, socialActivity: 84, memeVelocity: 82, fanArtDensity: 75, fandomLongevity: 87 },
    faqs: [
      { question: 'Who plays Mike Ross in Suits?', answer: 'Patrick J. Adams plays Mike Ross in Seasons 1 through 7 and returns for the final season (Season 9) of Suits. Adams departed the show alongside co-star Meghan Markle at the end of Season 7 but came back for the series finale arc.' },
      { question: 'Does Mike Ross ever become a real lawyer?', answer: 'Yes. After serving time in prison for fraud, Mike eventually passes the bar exam legitimately and becomes a licensed attorney. He goes on to run a legal clinic helping underprivileged clients, using his talents for a cause he believes in.' },
      { question: 'Does Mike Ross go to prison?', answer: 'Yes. In Season 5, Mike is arrested and charged with fraud for practicing law without a degree. He accepts a plea deal and serves time in a federal prison during Season 6. His time in prison and its aftermath significantly shape his character arc.' }
    ],
    videos: [
      { title: 'Mike Ross - Photographic Memory Moments', youtubeId: 'yMaFv60GNHI', description: 'Mike Ross using his eidetic memory to recall case law and outsmart opponents.' },
      { title: 'Mike Ross Goes to Prison', youtubeId: 'CZDBhkJoFEk', description: 'The pivotal moment when Mike\'s secret is exposed and he faces the consequences.' }
    ],
    relatedCharacterSlugs: ['harvey-specter', 'rachel-zane', 'donna-paulsen', 'louis-litt'],
    tags: ['protagonist', 'underdog', 'genius', 'coming-of-age']
  },
  {
    slug: 'jessica-pearson',
    name: 'Jessica Pearson',
    showSlug: 'suits',
    showTitle: 'Suits',
    actorSlug: 'gina-torres',
    actorName: 'Gina Torres',
    seasonsActive: 'Seasons 1–7',
    characterArc: 'Jessica Pearson is the managing partner of Pearson Hardman (later Pearson Specter Litt), a commanding presence who built one of New York\'s most prestigious law firms through sheer brilliance, political savvy, and an iron will. She is Harvey Specter\'s mentor and the person who plucked him from the mailroom, put him through law school, and shaped him into the lawyer he became. Jessica operates at the intersection of power and principle, navigating corporate law\'s ruthless landscape while maintaining a moral center that bends but rarely breaks.\n\nJessica\'s arc is defined by the constant battle to protect her firm from threats both external and internal. She fights off hostile takeovers from Daniel Hardman, manages the fallout from Mike Ross\'s secret, navigates mergers and betrayals, and holds together a collection of brilliant but volatile personalities. Her authority is frequently challenged — by partners, rivals, and even by Harvey himself — but she repeatedly demonstrates why she sits at the top: she is simply better at the game than everyone else in the room.\n\nJessica\'s departure from the firm in Season 7 comes after she is disbarred for her role in covering up Mike\'s fraud. Rather than see this as a defeat, she reinvents herself, moving to Chicago to pursue a career in politics. Her exit marks the end of an era for the firm and forces Harvey to step up as a leader in his own right.',
    keyEpisodes: [
      { title: 'Pilot', season: 1, episode: 1, description: 'Jessica is established as the managing partner and Harvey\'s mentor who made him who he is.' },
      { title: 'War', season: 2, episode: 16, description: 'Jessica outmaneuvers Daniel Hardman in a firm-wide power struggle for control of Pearson Hardman.' },
      { title: 'Enough Is Enough', season: 7, episode: 7, description: 'Jessica is disbarred and leaves New York, closing a major chapter of the show.' }
    ],
    image: { src: '/images/characters/jessica-pearson.jpg', alt: 'Gina Torres as Jessica Pearson in Suits', attribution: 'USA Network', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/suits', url: 'https://www.reddit.com/r/suits/', platform: 'Reddit', description: 'Main Suits subreddit with appreciation threads for Jessica Pearson' },
        { name: 'r/PearsonTV', url: 'https://www.reddit.com/r/PearsonTV/', platform: 'Reddit', description: 'Subreddit for the Jessica Pearson spinoff series' }
      ],
      youtubeChannels: [
        { name: 'Jessica Pearson Power Moments', url: 'https://www.youtube.com/results?search_query=jessica+pearson+best+moments+suits', platform: 'YouTube', description: 'Compilations of Jessica\'s most commanding moments as managing partner' }
      ],
      twitterAccounts: [
        { name: '@GinaTorres', url: 'https://twitter.com/GinaTorres', platform: 'Twitter/X', description: 'Gina Torres official Twitter account' }
      ],
      fanSites: [
        { name: 'Suits Wiki - Jessica Pearson', url: 'https://suits.fandom.com/wiki/Jessica_Pearson', platform: 'Web', description: 'Jessica Pearson page on the Fandom wiki' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Jessica Pearson Edits', url: 'https://www.tiktok.com/tag/jessicapearson', platform: 'TikTok', description: 'Boss woman edits featuring Jessica Pearson' }
      ]
    },
    fanHeatIndex: { overall: 80, engagement: 82, socialActivity: 78, memeVelocity: 75, fanArtDensity: 72, fandomLongevity: 84 },
    faqs: [
      { question: 'Who plays Jessica Pearson in Suits?', answer: 'Gina Torres plays Jessica Pearson across Seasons 1 through 7 of Suits. Torres brought gravitas and authority to the role, making Jessica one of television\'s most respected depictions of a powerful Black woman in corporate America. The character received her own spinoff series, Pearson, in 2019.' },
      { question: 'Why does Jessica Pearson leave Suits?', answer: 'Jessica is disbarred in Season 7 after the fallout from Mike Ross\'s fraud case exposes her complicity in covering up his secret. She leaves New York and moves to Chicago, which sets up the events of the spinoff series Pearson.' },
      { question: 'Is Jessica Pearson Harvey Specter\'s mentor?', answer: 'Yes. Jessica discovered Harvey working in the firm\'s mailroom, recognized his potential, and paid for his law school education at Harvard. Their mentor-mentee relationship is one of the show\'s core dynamics, built on mutual respect, loyalty, and occasional conflict.' }
    ],
    videos: [
      { title: 'Jessica Pearson - The Managing Partner', youtubeId: 'JWBkVHr3Y1w', description: 'Jessica Pearson\'s most powerful moments running Pearson Hardman.' },
      { title: 'Jessica Pearson vs Daniel Hardman', youtubeId: 'L-ZQkHTGNqY', description: 'Jessica\'s battle with Daniel Hardman for control of the firm.' }
    ],
    relatedCharacterSlugs: ['harvey-specter', 'louis-litt', 'donna-paulsen', 'mike-ross'],
    tags: ['leader', 'mentor', 'powerful', 'iconic']
  },
  {
    slug: 'louis-litt',
    name: 'Louis Litt',
    showSlug: 'suits',
    showTitle: 'Suits',
    actorSlug: 'rick-hoffman',
    actorName: 'Rick Hoffman',
    seasonsActive: 'Seasons 1–9',
    characterArc: 'Louis Litt is the perpetual underdog of Pearson Specter Litt, a brilliant attorney whose insecurity and desperate need for validation make him both deeply sympathetic and endlessly frustrating. While Harvey Specter gets the glory and the corner office, Louis toils in the background, managing associates, excelling at financial law, and nursing a lifelong inferiority complex. His emotional volatility — swinging between petty vindictiveness and genuine tenderness — makes him the show\'s most unpredictable character and its secret comedic weapon.\n\nLouis\'s journey is one of learning to find self-worth independent of external approval. His rivalry with Harvey drives many of the show\'s internal conflicts, but beneath the jealousy is a man who simply wants to be respected and included. His passions — mud baths, cats, ballet, and the works of composer Sergei Prokofiev — make him endearingly eccentric. His relationships, particularly with his secretary Norma, his love interest Sheila Sazs, and eventually Donna Paulsen, reveal layers of warmth beneath his prickly exterior.\n\nBy the final season, Louis has achieved what always eluded him: he becomes the named managing partner of the firm. More importantly, he finds personal happiness with Sheila and their daughter, learning that the recognition he craved was never going to fill the void — only genuine love and family could do that.',
    keyEpisodes: [
      { title: 'Shelf Life', season: 2, episode: 10, description: 'Louis discovers Mike\'s secret and grapples with whether to use it as leverage or protect the firm.' },
      { title: 'Mea Culpa', season: 5, episode: 8, description: 'Louis\'s loyalty to the firm is tested as Mike\'s fraud case threatens to destroy everything they built.' },
      { title: 'If the Shoe Fits', season: 8, episode: 5, description: 'Louis struggles with his new role as named partner and the pressures of leadership.' },
      { title: 'One Last Con', season: 9, episode: 10, description: 'Louis leads the firm as managing partner in the series finale and finds personal fulfillment.' }
    ],
    image: { src: '/images/characters/louis-litt.jpg', alt: 'Rick Hoffman as Louis Litt in Suits', attribution: 'USA Network', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/suits', url: 'https://www.reddit.com/r/suits/', platform: 'Reddit', description: 'Main Suits subreddit where Louis is a beloved and debated character' }
      ],
      youtubeChannels: [
        { name: 'Louis Litt Best Moments', url: 'https://www.youtube.com/results?search_query=louis+litt+best+moments', platform: 'YouTube', description: 'Compilations of Louis\'s funniest and most emotional scenes' }
      ],
      twitterAccounts: [
        { name: '@RickHoffman_', url: 'https://twitter.com/RickHoffman_', platform: 'Twitter/X', description: 'Rick Hoffman official Twitter account' }
      ],
      fanSites: [
        { name: 'Suits Wiki - Louis Litt', url: 'https://suits.fandom.com/wiki/Louis_Litt', platform: 'Web', description: 'Louis Litt page on the Fandom wiki' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Louis Litt Edits', url: 'https://www.tiktok.com/tag/louislitt', platform: 'TikTok', description: 'Fan edits celebrating Louis Litt\'s most dramatic moments' }
      ]
    },
    fanHeatIndex: { overall: 82, engagement: 85, socialActivity: 80, memeVelocity: 88, fanArtDensity: 70, fandomLongevity: 83 },
    faqs: [
      { question: 'Who plays Louis Litt in Suits?', answer: 'Rick Hoffman plays Louis Litt across all nine seasons of Suits. Hoffman\'s nuanced performance turned what could have been a one-dimensional antagonist into one of television\'s most beloved and complex comedic characters.' },
      { question: 'Does Louis Litt become managing partner?', answer: 'Yes. Louis eventually becomes the named managing partner of what becomes Litt Wheeler Williams Bennett. After years of feeling overshadowed by Harvey and Jessica, Louis achieves his professional dream and proves himself a capable leader in the show\'s final seasons.' },
      { question: 'What is Louis Litt\'s obsession with mud baths?', answer: 'Louis Litt is famously obsessed with mud baths, which he considers essential for relaxation and skin care. His mud baths at the spa become a recurring comedic element throughout the series, symbolizing his eccentric personality and his unapologetic embrace of his own quirks.' }
    ],
    videos: [
      { title: 'Louis Litt - Funniest Moments', youtubeId: 'W5K3PBCFpb4', description: 'A compilation of Louis Litt\'s most hilarious and over-the-top scenes.' },
      { title: 'Louis Litt - You Just Got Litt Up', youtubeId: '9MXGPO0hR60', description: 'Louis Litt\'s iconic catchphrase moments throughout the series.' }
    ],
    relatedCharacterSlugs: ['harvey-specter', 'donna-paulsen', 'mike-ross', 'jessica-pearson'],
    tags: ['fan-favorite', 'comedic', 'complex', 'underdog']
  },
  {
    slug: 'donna-paulsen',
    name: 'Donna Paulsen',
    showSlug: 'suits',
    showTitle: 'Suits',
    actorSlug: 'sarah-rafferty',
    actorName: 'Sarah Rafferty',
    seasonsActive: 'Seasons 1–9',
    characterArc: 'Donna Paulsen is Harvey Specter\'s executive assistant and, in many ways, the most competent person at Pearson Specter Litt. She possesses an almost supernatural ability to read people and situations, frequently solving problems before anyone else even recognizes they exist. Her self-described quality of just "knowing" — anticipating needs, reading rooms, and understanding human nature — makes her indispensable to every person at the firm. Her catchphrase, "I\'m Donna," is not arrogance; it is a statement of fact about her unparalleled emotional intelligence and professional capability.\n\nDonna\'s central arc revolves around two intertwined threads: her professional ambition to be recognized as more than a secretary, and her complicated romantic history with Harvey. She and Harvey shared one night together years before the show begins, and the unresolved tension between them simmers across the entire series. Donna navigates this by maintaining fierce boundaries while remaining Harvey\'s most trusted confidante — a balancing act that takes an emotional toll.\n\nIn the later seasons, Donna steps into larger roles, eventually becoming the firm\'s Chief Operating Officer. Her romance with Harvey finally comes to fruition in Season 8, and the series finale sees them married and starting a new life together in Seattle. Donna\'s arc is about a woman who always knew her worth demanding that the world — and the man she loves — recognize it too.',
    keyEpisodes: [
      { title: 'The Other Time', season: 3, episode: 6, description: 'Flashbacks reveal Donna and Harvey\'s one-night stand and the origins of their complicated relationship.' },
      { title: 'Faith', season: 5, episode: 1, description: 'Donna leaves Harvey to work for Louis, a seismic shift that forces both to confront their dependence on each other.' },
      { title: 'Good-Bye', season: 8, episode: 16, description: 'Donna and Harvey finally confess their feelings and kiss, resolving seasons of romantic tension.' },
      { title: 'One Last Con', season: 9, episode: 10, description: 'Donna and Harvey are revealed to be married in the series finale.' }
    ],
    image: { src: '/images/characters/donna-paulsen.jpg', alt: 'Sarah Rafferty as Donna Paulsen in Suits', attribution: 'USA Network', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/suits', url: 'https://www.reddit.com/r/suits/', platform: 'Reddit', description: 'Main Suits subreddit with active Donna and Darvey shipping threads' }
      ],
      youtubeChannels: [
        { name: 'Donna Paulsen Best Moments', url: 'https://www.youtube.com/results?search_query=donna+paulsen+best+moments', platform: 'YouTube', description: 'Compilations of Donna\'s sharpest and most memorable scenes' }
      ],
      twitterAccounts: [
        { name: '@sarahgrafferty', url: 'https://twitter.com/sarahgrafferty', platform: 'Twitter/X', description: 'Sarah Rafferty official Twitter account' }
      ],
      fanSites: [
        { name: 'Suits Wiki - Donna Paulsen', url: 'https://suits.fandom.com/wiki/Donna_Paulsen', platform: 'Web', description: 'Donna Paulsen page on the Fandom wiki' }
      ],
      instagramAccounts: [
        { name: '@sarahgrafferty', url: 'https://www.instagram.com/sarahgrafferty/', platform: 'Instagram', description: 'Sarah Rafferty official Instagram' }
      ],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 81, engagement: 84, socialActivity: 82, memeVelocity: 76, fanArtDensity: 78, fandomLongevity: 83 },
    faqs: [
      { question: 'Who plays Donna Paulsen in Suits?', answer: 'Sarah Rafferty plays Donna Paulsen across all nine seasons of Suits. Rafferty\'s chemistry with Gabriel Macht anchored one of the show\'s most popular romantic storylines and made Donna a fan-favorite character.' },
      { question: 'Do Donna and Harvey end up together in Suits?', answer: 'Yes. After nearly a decade of unresolved romantic tension, Donna and Harvey get together in the Season 8 finale. In the series finale of Season 9, it is revealed that they got married. Their relationship, nicknamed "Darvey" by fans, was one of the show\'s most anticipated payoffs.' },
      { question: 'What does Donna mean by "I\'m Donna"?', answer: 'Donna\'s catchphrase "I\'m Donna" encapsulates her supreme confidence and her reputation for knowing everything happening at the firm. She uses it to explain her seemingly impossible ability to read people, anticipate events, and stay several steps ahead of everyone around her.' }
    ],
    videos: [
      { title: 'Donna Paulsen - I\'m Donna', youtubeId: 'xSkUJo2VFOg', description: 'A compilation of Donna\'s most iconic "I\'m Donna" moments and power plays.' },
      { title: 'Harvey and Donna - Love Story', youtubeId: 'FKdIrVIPYHs', description: 'The complete Darvey love story from their first meeting to the series finale.' }
    ],
    relatedCharacterSlugs: ['harvey-specter', 'mike-ross', 'louis-litt', 'rachel-zane'],
    tags: ['fan-favorite', 'sharp-witted', 'romantic-lead', 'iconic']
  },
  {
    slug: 'rachel-zane',
    name: 'Rachel Zane',
    showSlug: 'suits',
    showTitle: 'Suits',
    actorSlug: 'meghan-markle',
    actorName: 'Meghan Markle',
    seasonsActive: 'Seasons 1–7',
    characterArc: 'Rachel Zane is introduced as the best paralegal at Pearson Hardman, a perfectionist who has taken the LSAT multiple times but struggles with test anxiety that prevents her from achieving her dream of attending law school. The daughter of renowned attorney Robert Zane, Rachel carries the weight of her father\'s legacy while fighting to establish her own identity in the legal world. Her intelligence, work ethic, and deep knowledge of the law make her an invaluable asset to the firm long before she earns her degree.\n\nRachel\'s romance with Mike Ross becomes one of the show\'s central emotional threads. Their relationship is complicated by Mike\'s secret — when Rachel discovers he never went to law school, it shatters her trust and forces a crisis in their relationship. Her decision to forgive Mike and stand by him, even as his fraud threatens to destroy everything, demonstrates both her loyalty and her capacity for moral complexity. She eventually conquers her test anxiety, attends Columbia Law School, and becomes a practicing attorney.\n\nRachel departs the firm at the end of Season 7 alongside Mike, moving to Seattle to run a legal clinic together. Her arc traces a journey from a talented woman held back by self-doubt to a confident attorney and partner who has earned her place on her own terms, not as an appendage to her father\'s name or Mike\'s story.',
    keyEpisodes: [
      { title: 'Pilot', season: 1, episode: 1, description: 'Rachel is introduced as the firm\'s top paralegal who gives Mike a tour of Pearson Hardman on his first day.' },
      { title: 'Bad Faith', season: 3, episode: 9, description: 'Rachel discovers Mike\'s secret about not having a law degree, threatening their relationship and his career.' },
      { title: 'Admission of Guilt', season: 4, episode: 14, description: 'Rachel gets accepted to Columbia Law School, overcoming her lifelong test anxiety.' },
      { title: 'Good-Bye', season: 7, episode: 16, description: 'Rachel and Mike get married and leave New York together to start a new chapter in Seattle.' }
    ],
    image: { src: '/images/characters/rachel-zane.jpg', alt: 'Meghan Markle as Rachel Zane in Suits', attribution: 'USA Network', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/suits', url: 'https://www.reddit.com/r/suits/', platform: 'Reddit', description: 'Main Suits subreddit with Rachel Zane discussion' }
      ],
      youtubeChannels: [
        { name: 'Rachel Zane Best Moments', url: 'https://www.youtube.com/results?search_query=rachel+zane+best+moments+suits', platform: 'YouTube', description: 'Compilations of Rachel\'s most notable scenes in Suits' }
      ],
      twitterAccounts: [
        { name: '@Suits_USA', url: 'https://twitter.com/Suits_USA', platform: 'Twitter/X', description: 'Official Suits Twitter account' }
      ],
      fanSites: [
        { name: 'Suits Wiki - Rachel Zane', url: 'https://suits.fandom.com/wiki/Rachel_Zane', platform: 'Web', description: 'Rachel Zane page on the Fandom wiki' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Rachel Zane / Meghan Markle Edits', url: 'https://www.tiktok.com/tag/rachelzane', platform: 'TikTok', description: 'Fan edits of Rachel Zane, often referencing Meghan Markle\'s real life' }
      ]
    },
    fanHeatIndex: { overall: 83, engagement: 80, socialActivity: 90, memeVelocity: 85, fanArtDensity: 70, fandomLongevity: 82 },
    faqs: [
      { question: 'Who plays Rachel Zane in Suits?', answer: 'Meghan Markle plays Rachel Zane in Seasons 1 through 7 of Suits. Markle left the show in 2018 when she became engaged to Prince Harry, Duke of Sussex. Her connection to the British royal family was a major factor in the show\'s massive Netflix resurgence in 2023.' },
      { question: 'Why did Meghan Markle leave Suits?', answer: 'Meghan Markle left Suits at the end of Season 7 in 2018 to marry Prince Harry and join the British royal family. Her character Rachel Zane was written out by having her marry Mike Ross and move to Seattle. Markle never returned to acting after leaving the show.' },
      { question: 'Do Mike and Rachel end up together?', answer: 'Yes. Mike Ross and Rachel Zane get married in the Season 7 finale, "Good-Bye." Their wedding is the culmination of a romance that spans the first seven seasons of the show. They move to Seattle together to run a legal clinic.' }
    ],
    videos: [
      { title: 'Mike and Rachel - Complete Love Story', youtubeId: 'jqV7BqBb-p4', description: 'The complete Mike and Rachel romance from first meeting to wedding.' },
      { title: 'Rachel Zane - Best Legal Moments', youtubeId: 'TVwLBJnfHFg', description: 'Rachel\'s sharpest moments as paralegal and attorney at the firm.' }
    ],
    relatedCharacterSlugs: ['mike-ross', 'harvey-specter', 'donna-paulsen', 'jessica-pearson'],
    tags: ['romantic-lead', 'ambitious', 'determined', 'fan-favorite']
  }
];

const bcsCharacters = [
  {
    slug: 'jimmy-mcgill',
    name: 'Jimmy McGill / Saul Goodman',
    showSlug: 'better-call-saul',
    showTitle: 'Better Call Saul',
    actorSlug: 'bob-odenkirk',
    actorName: 'Bob Odenkirk',
    seasonsActive: 'Seasons 1–6',
    characterArc: 'Jimmy McGill begins as a small-time con artist turned public defender, desperate to earn the respect of his brilliant older brother Chuck and the legal establishment that views him as "Slippin\' Jimmy." Working out of the back room of a nail salon, Jimmy possesses genuine legal talent and a gift for persuasion, but his instinct to cut corners and bend rules puts him at constant odds with the profession\'s ethical boundaries.\n\nThe central tragedy of Better Call Saul is watching Jimmy\'s gradual transformation into Saul Goodman — the flamboyant, morally bankrupt criminal lawyer first introduced in Breaking Bad. Each season peels back another layer of his ethical compromise: Chuck\'s betrayal and death, his falling out with Kim Wexler, and his deepening involvement with the Salamanca drug cartel all push Jimmy further from legitimacy. The show argues that Jimmy\'s corruption is not a sudden break but a slow erosion, each small compromise making the next one easier.\n\nBy the final season, Jimmy has fully become Saul Goodman and eventually Gene Takavic, a fugitive managing a Cinnabon in Omaha. His decision to confess his crimes in the series finale — sacrificing his freedom to reclaim his true identity — is a moment of genuine redemption. Kim Wexler\'s visit to him in prison, where she calls him "Jimmy," confirms that the person he was never fully disappeared.',
    keyEpisodes: [
      { title: 'Uno', season: 1, episode: 1, description: 'Jimmy McGill is introduced as a struggling public defender trying to build a legitimate legal career in Albuquerque.' },
      { title: 'Chicanery', season: 3, episode: 5, description: 'Jimmy exposes Chuck\'s electromagnetic sensitivity as psychosomatic in a bar hearing, devastating their relationship.' },
      { title: 'Winner', season: 4, episode: 10, description: 'Jimmy uses Chuck\'s memory to manipulate the bar reinstatement committee, then reveals he will practice as Saul Goodman.' },
      { title: 'Saul Gone', season: 6, episode: 13, description: 'Jimmy confesses his crimes in court, choosing prison and his true identity over a plea deal as Saul Goodman.' }
    ],
    image: { src: '/images/characters/jimmy-mcgill.jpg', alt: 'Bob Odenkirk as Jimmy McGill in Better Call Saul', attribution: 'AMC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/betterCallSaul', url: 'https://www.reddit.com/r/betterCallSaul/', platform: 'Reddit', description: 'Main Better Call Saul subreddit with 700K+ members' },
        { name: 'r/okbuddychicanery', url: 'https://www.reddit.com/r/okbuddychicanery/', platform: 'Reddit', description: 'Massive meme community for the Breaking Bad/BCS universe' }
      ],
      youtubeChannels: [
        { name: 'Jimmy McGill to Saul Goodman Transformation', url: 'https://www.youtube.com/results?search_query=jimmy+mcgill+saul+goodman+transformation', platform: 'YouTube', description: 'Video essays on Jimmy\'s moral descent' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'BCS Wiki - Jimmy McGill', url: 'https://breakingbad.fandom.com/wiki/Jimmy_McGill', platform: 'Web', description: 'Jimmy McGill page on the Breaking Bad wiki' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Saul Goodman Edits', url: 'https://www.tiktok.com/tag/saulgoodman', platform: 'TikTok', description: '3D Saul Goodman memes and character edits' }
      ]
    },
    fanHeatIndex: { overall: 94, engagement: 96, socialActivity: 93, memeVelocity: 97, fanArtDensity: 88, fandomLongevity: 92 },
    faqs: [
      { question: 'Who plays Jimmy McGill in Better Call Saul?', answer: 'Bob Odenkirk plays Jimmy McGill / Saul Goodman across all six seasons. Odenkirk first played the character in Breaking Bad and reprised the role for the prequel series.' },
      { question: 'When does Jimmy become Saul Goodman?', answer: 'Jimmy officially adopts the Saul Goodman name at the end of Season 4 when he reveals to Kim that he\'ll practice law under that alias. However, his transformation is gradual across all six seasons.' },
      { question: 'How does Better Call Saul end for Jimmy?', answer: 'In the series finale, Jimmy confesses his crimes in court and is sentenced to 86 years in prison. He chooses his true identity over a reduced sentence, and Kim visits him in prison, calling him "Jimmy" one last time.' }
    ],
    videos: [
      { title: 'Better Call Saul - Jimmy\'s Transformation', youtubeId: 'HN4oydykJFc', description: 'How Jimmy McGill slowly became Saul Goodman over six seasons.' },
      { title: 'Chicanery - The Greatest Scene in Television', youtubeId: 'sBQ7EB5OUv0', description: 'Jimmy\'s devastating cross-examination of Chuck in the bar hearing.' }
    ],
    relatedCharacterSlugs: ['kim-wexler', 'chuck-mcgill', 'mike-ehrmantraut-bcs', 'nacho-varga'],
    tags: ['protagonist', 'antihero', 'tragic', 'iconic', 'fan-favorite']
  },
  {
    slug: 'kim-wexler',
    name: 'Kim Wexler',
    showSlug: 'better-call-saul',
    showTitle: 'Better Call Saul',
    actorSlug: 'rhea-seehorn',
    actorName: 'Rhea Seehorn',
    seasonsActive: 'Seasons 1–6',
    characterArc: 'Kim Wexler is introduced as a diligent, ambitious attorney at Hamlin, Hamlin & McGill who shares a complicated romantic and professional history with Jimmy McGill. Unlike Jimmy, Kim has earned her place through sheer hard work, rising from humble beginnings to become a respected corporate lawyer. Her attraction to Jimmy is rooted not in his legitimate talents but in his rebellious streak — the same quality that will ultimately destroy their relationship.\n\nKim\'s arc is one of the most surprising in modern television. Rather than serving as Jimmy\'s moral compass, she gradually reveals her own appetite for deception. She begins running cons with Jimmy for fun, then starts targeting people she considers deserving of comeuppance — most notably Howard Hamlin. Her scheme to destroy Howard\'s reputation spirals out of control when Lalo Salamanca murders Howard in their apartment, forcing Kim to confront the real consequences of their games.\n\nThe aftermath breaks Kim. She leaves Jimmy, the law, and Albuquerque, exiling herself to a colorless life in Florida as penance. In the finale, she files a sworn confession about her role in Howard\'s death, accepting legal liability. Her final scene with Jimmy in prison — where she lights his cigarette and they share a wordless moment of connection — is among the most emotionally devastating conclusions in television history.',
    keyEpisodes: [
      { title: 'Switch', season: 2, episode: 1, description: 'Kim and Jimmy run their first con together at a bar, revealing her hidden appetite for deception.' },
      { title: 'Wexler v. Goodman', season: 5, episode: 6, description: 'Kim proposes marriage to Jimmy and pitches the plan to destroy Howard Hamlin, a pivotal turning point.' },
      { title: 'Plan and Execution', season: 6, episode: 7, description: 'Howard is murdered by Lalo in Kim and Jimmy\'s apartment, shattering Kim\'s world.' },
      { title: 'Saul Gone', season: 6, episode: 13, description: 'Kim visits Jimmy in prison, and they share a cigarette — a quiet, devastating finale to their love story.' }
    ],
    image: { src: '/images/characters/kim-wexler.jpg', alt: 'Rhea Seehorn as Kim Wexler in Better Call Saul', attribution: 'AMC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/betterCallSaul', url: 'https://www.reddit.com/r/betterCallSaul/', platform: 'Reddit', description: 'Main BCS subreddit where Kim is the most discussed character' }
      ],
      youtubeChannels: [
        { name: 'Kim Wexler Character Analysis', url: 'https://www.youtube.com/results?search_query=kim+wexler+character+analysis', platform: 'YouTube', description: 'Video essays analyzing Kim Wexler\'s arc' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'BCS Wiki - Kim Wexler', url: 'https://breakingbad.fandom.com/wiki/Kim_Wexler', platform: 'Web', description: 'Kim Wexler wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 91, engagement: 93, socialActivity: 89, memeVelocity: 85, fanArtDensity: 90, fandomLongevity: 91 },
    faqs: [
      { question: 'Who plays Kim Wexler?', answer: 'Rhea Seehorn plays Kim Wexler across all six seasons. Seehorn\'s performance was widely praised as one of the best on television, though she controversially never received an Emmy nomination until the final season.' },
      { question: 'Do Kim and Jimmy end up together?', answer: 'No. Kim leaves Jimmy after Howard\'s murder, unable to continue their relationship without causing more harm. They reunite briefly in the series finale when Kim visits Jimmy in prison, but they do not reconcile romantically.' },
      { question: 'Was Kim Wexler in Breaking Bad?', answer: 'Kim Wexler does not appear in Breaking Bad. Better Call Saul reveals that by the time of Breaking Bad\'s events, Kim has left Albuquerque and is living in Florida, having completely separated from Jimmy/Saul.' }
    ],
    videos: [
      { title: 'Kim Wexler - The Best Character on Television', youtubeId: 'GIhk0z5gGYI', description: 'A video essay on why Kim Wexler is considered one of TV\'s greatest characters.' },
      { title: 'Kim and Jimmy - A Tragic Love Story', youtubeId: 'rPZIF0yXJog', description: 'The complete Kim and Jimmy romance from beginning to end.' }
    ],
    relatedCharacterSlugs: ['jimmy-mcgill', 'chuck-mcgill', 'lalo-salamanca', 'mike-ehrmantraut-bcs'],
    tags: ['fan-favorite', 'complex', 'tragic', 'morally-gray']
  },
  {
    slug: 'mike-ehrmantraut-bcs',
    name: 'Mike Ehrmantraut',
    showSlug: 'better-call-saul',
    showTitle: 'Better Call Saul',
    actorSlug: 'jonathan-banks',
    actorName: 'Jonathan Banks',
    seasonsActive: 'Seasons 1–6',
    characterArc: 'Mike Ehrmantraut is a former Philadelphia police officer turned parking booth attendant at the Albuquerque courthouse, hiding a lifetime of violence and regret beneath a gruff, no-nonsense exterior. Better Call Saul reveals the backstory only hinted at in Breaking Bad: Mike was a corrupt cop who killed the men responsible for murdering his son Matt, also a police officer, and fled to New Mexico to be near his daughter-in-law Stacey and granddaughter Kaylee.\n\nMike\'s arc in Better Call Saul is defined by his gradual slide into the criminal underworld as a means of providing for his family. He begins by doing security work and odd jobs, then becomes an enforcer and fixer, eventually becoming Gus Fring\'s most trusted operative. Each step deeper into criminality is rationalized as necessary to protect and provide for Kaylee, but the show reveals the lie at the center of Mike\'s self-image: he is not merely a good man doing bad things for good reasons but a man drawn to the work.\n\nMike\'s relationships with Jimmy, Nacho, and Gus reveal different facets of his character. He serves as a reluctant mentor to Nacho, a skeptical ally to Jimmy, and a loyal soldier to Gus. His fate in Breaking Bad — killed by Walter White in a moment of petulance — is made more tragic by the depth of characterization Better Call Saul provides.',
    keyEpisodes: [
      { title: 'Five-O', season: 1, episode: 6, description: 'Mike\'s backstory is revealed — he was a corrupt Philadelphia cop who killed the men who murdered his son.' },
      { title: 'Bagman', season: 5, episode: 8, description: 'Mike and Jimmy survive a desert ambush while transporting Lalo\'s bail money, in one of the show\'s most acclaimed episodes.' },
      { title: 'Plan and Execution', season: 6, episode: 7, description: 'Mike fails to prevent Lalo from reaching Kim and Jimmy\'s apartment, leading to Howard\'s murder.' }
    ],
    image: { src: '/images/characters/mike-ehrmantraut-bcs.jpg', alt: 'Jonathan Banks as Mike Ehrmantraut in Better Call Saul', attribution: 'AMC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/betterCallSaul', url: 'https://www.reddit.com/r/betterCallSaul/', platform: 'Reddit', description: 'Main BCS subreddit with Mike appreciation threads' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'BCS Wiki - Mike Ehrmantraut', url: 'https://breakingbad.fandom.com/wiki/Mike_Ehrmantraut', platform: 'Web', description: 'Mike Ehrmantraut wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 87, engagement: 89, socialActivity: 84, memeVelocity: 82, fanArtDensity: 78, fandomLongevity: 90 },
    faqs: [
      { question: 'Who plays Mike Ehrmantraut in Better Call Saul?', answer: 'Jonathan Banks plays Mike Ehrmantraut. Banks first played the character in Breaking Bad and reprised the role for all six seasons of Better Call Saul, earning multiple Emmy nominations.' },
      { question: 'What happened to Mike\'s son?', answer: 'Mike\'s son Matt was a police officer in Philadelphia who was murdered by corrupt colleagues after Matt hesitated to participate in their schemes. Mike avenged Matt by killing the two responsible officers, then fled to Albuquerque.' }
    ],
    videos: [
      { title: 'Mike Ehrmantraut - Five-O', youtubeId: 'fhIqDGTNzqY', description: 'Mike reveals the truth about his son\'s death in the emotional "Five-O" episode.' },
      { title: 'Mike and Jimmy - Desert Survival (Bagman)', youtubeId: 'rSdFi7IhUFo', description: 'Mike and Jimmy\'s harrowing desert trek in the acclaimed "Bagman" episode.' }
    ],
    relatedCharacterSlugs: ['jimmy-mcgill', 'nacho-varga', 'lalo-salamanca', 'kim-wexler'],
    tags: ['enforcer', 'tragic', 'mentor', 'fan-favorite']
  },
  {
    slug: 'chuck-mcgill',
    name: 'Chuck McGill',
    showSlug: 'better-call-saul',
    showTitle: 'Better Call Saul',
    actorSlug: 'michael-mckean',
    actorName: 'Michael McKean',
    seasonsActive: 'Seasons 1–3',
    characterArc: 'Charles Lindbergh McGill is Jimmy\'s older brother, a brilliant and respected founding partner of Hamlin, Hamlin & McGill who suffers from electromagnetic hypersensitivity — a condition that confines him to a house lit by lanterns and wrapped in space blankets. Chuck is one of television\'s most fascinatingly constructed antagonists: he is not wrong about Jimmy\'s character flaws, but his methods of opposing Jimmy are driven by jealousy and resentment rather than principle.\n\nChuck\'s fundamental wound is that their con-artist father loved Jimmy more despite Jimmy being the less accomplished son. Chuck channeled this hurt into becoming the most disciplined, ethical lawyer he could be, but he could never accept that Jimmy might also succeed in the profession Chuck considers sacred. When Jimmy passes the bar, Chuck secretly sabotages his career at HHM, unable to share the one arena where he feels superior.\n\nThe "Chicanery" hearing in Season 3 is Chuck\'s undoing. Jimmy exposes his electromagnetic sensitivity as psychosomatic, humiliating Chuck publicly and destroying his professional credibility. Abandoned by his firm and confronted with the truth about his illness, Chuck spirals into a devastating breakdown, ultimately taking his own life. His death is the catalytic event that accelerates Jimmy\'s transformation into Saul Goodman.',
    keyEpisodes: [
      { title: 'Pimento', season: 1, episode: 9, description: 'Jimmy discovers that Chuck has been secretly blocking his career at HHM, shattering their relationship.' },
      { title: 'Chicanery', season: 3, episode: 5, description: 'Chuck\'s electromagnetic sensitivity is exposed as psychosomatic during Jimmy\'s bar hearing.' },
      { title: 'Lantern', season: 3, episode: 10, description: 'Chuck, abandoned and broken, takes his own life by setting fire to his house.' }
    ],
    image: { src: '/images/characters/chuck-mcgill.jpg', alt: 'Michael McKean as Chuck McGill in Better Call Saul', attribution: 'AMC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/betterCallSaul', url: 'https://www.reddit.com/r/betterCallSaul/', platform: 'Reddit', description: 'Main BCS subreddit with extensive Chuck debate threads' },
        { name: 'r/FuckChuck', url: 'https://www.reddit.com/r/FuckChuck/', platform: 'Reddit', description: 'Dedicated subreddit for fans who love to hate Chuck McGill' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'BCS Wiki - Chuck McGill', url: 'https://breakingbad.fandom.com/wiki/Chuck_McGill', platform: 'Web', description: 'Chuck McGill wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 85, engagement: 88, socialActivity: 83, memeVelocity: 90, fanArtDensity: 72, fandomLongevity: 84 },
    faqs: [
      { question: 'Who plays Chuck McGill?', answer: 'Michael McKean plays Chuck McGill in Seasons 1 through 3. McKean, known for his comedy work in This Is Spinal Tap and Better Call Saul, delivered a dramatic performance widely regarded as Emmy-worthy, though he never received a nomination.' },
      { question: 'Is Chuck McGill\'s illness real?', answer: 'Chuck\'s electromagnetic hypersensitivity is portrayed as psychosomatic — a manifestation of his need for control and his psychological distress. The show confirms this when Jimmy proves Chuck can be near electronics without symptoms when unaware of their presence.' },
      { question: 'How does Chuck McGill die?', answer: 'Chuck takes his own life in the Season 3 finale by deliberately knocking over a lantern in his house, starting a fire. His death comes after losing his position at HHM and confronting the truth about his condition.' }
    ],
    videos: [
      { title: 'Chicanery - Chuck McGill\'s Greatest Scene', youtubeId: 'sBQ7EB5OUv0', description: 'The explosive "Chicanery" hearing that destroys Chuck\'s credibility.' },
      { title: 'Chuck McGill - A Tragic Villain', youtubeId: 'D-sFVfMU1ws', description: 'Analysis of Chuck as one of TV\'s most complex antagonists.' }
    ],
    relatedCharacterSlugs: ['jimmy-mcgill', 'kim-wexler', 'mike-ehrmantraut-bcs', 'nacho-varga'],
    tags: ['antagonist', 'tragic', 'complex', 'brilliant']
  },
  {
    slug: 'nacho-varga',
    name: 'Nacho Varga',
    showSlug: 'better-call-saul',
    showTitle: 'Better Call Saul',
    actorSlug: 'michael-mando',
    actorName: 'Michael Mando',
    seasonsActive: 'Seasons 1–6',
    characterArc: 'Ignacio "Nacho" Varga is a smart, ambitious member of the Salamanca drug operation who wants out of the cartel life. Unlike his volatile colleagues, Nacho is thoughtful and strategic, trapped between the Salamanca family\'s brutality and his desire to protect his father Manuel, an honest upholsterer who knows nothing of his son\'s criminal activities.\n\nNacho\'s arc is defined by increasingly desperate attempts to extricate himself from the cartel. When Hector Salamanca threatens his father\'s business, Nacho secretly switches Hector\'s medication, causing the stroke that leaves Hector wheelchair-bound. This act of defiance puts Nacho under Gus Fring\'s control, as Gus discovers the truth and uses it as leverage to make Nacho his mole inside the Salamanca organization.\n\nTrapped between Gus, Lalo, and the Salamancas, Nacho becomes the show\'s most sympathetic figure — a man whose only crime was wanting to protect his father. His death in Season 6, when he takes his own life rather than be used as a pawn, is an act of ultimate defiance. His final speech to the assembled cartel leaders, declaring that he switched Hector\'s pills and did it all on his own, protects his father and denies his enemies the satisfaction of killing him on their terms.',
    keyEpisodes: [
      { title: 'Mijo', season: 1, episode: 2, description: 'Nacho is introduced as a sharp criminal who sees opportunity in Jimmy\'s legal schemes.' },
      { title: 'Off Brand', season: 3, episode: 6, description: 'Nacho switches Hector Salamanca\'s medication, an act that will define his fate.' },
      { title: 'Rock and Hard Place', season: 6, episode: 3, description: 'Nacho takes his own life in front of the Salamancas and Gus, protecting his father with his dying words.' }
    ],
    image: { src: '/images/characters/nacho-varga.jpg', alt: 'Michael Mando as Nacho Varga in Better Call Saul', attribution: 'AMC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/betterCallSaul', url: 'https://www.reddit.com/r/betterCallSaul/', platform: 'Reddit', description: 'Main BCS subreddit with Nacho tribute threads' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'BCS Wiki - Nacho Varga', url: 'https://breakingbad.fandom.com/wiki/Nacho_Varga', platform: 'Web', description: 'Nacho Varga wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 84, engagement: 87, socialActivity: 82, memeVelocity: 78, fanArtDensity: 80, fandomLongevity: 85 },
    faqs: [
      { question: 'Who plays Nacho Varga?', answer: 'Michael Mando plays Nacho Varga. Mando is a Canadian actor also known for playing Vaas Montenegro in Far Cry 3 and the Scorpion/Mac Gargan in Spider-Man: Homecoming.' },
      { question: 'How does Nacho Varga die?', answer: 'Nacho takes his own life in Season 6, Episode 3. Surrounded by the Salamancas and Gus Fring in the desert, he grabs a gun and shoots himself after delivering a defiant speech protecting his father and taking sole responsibility for Hector\'s stroke.' },
      { question: 'Was Nacho mentioned in Breaking Bad?', answer: 'Yes. In Breaking Bad Season 2, Saul Goodman says "It wasn\'t me, it was Ignacio!" when kidnapped by Walter and Jesse, referencing Nacho. This throwaway line became the seed for Nacho\'s entire storyline in Better Call Saul.' }
    ],
    videos: [
      { title: 'Nacho Varga\'s Final Scene', youtubeId: 'Y_UL-yVT7bk', description: 'Nacho\'s devastating final speech and sacrifice in "Rock and Hard Place."' },
      { title: 'Nacho Varga - A Tragic Hero', youtubeId: 'I6CRWn8VaKI', description: 'Character analysis of Nacho\'s arc across Better Call Saul.' }
    ],
    relatedCharacterSlugs: ['jimmy-mcgill', 'mike-ehrmantraut-bcs', 'lalo-salamanca', 'kim-wexler'],
    tags: ['tragic', 'sympathetic', 'doomed', 'fan-favorite']
  },
  {
    slug: 'lalo-salamanca',
    name: 'Lalo Salamanca',
    showSlug: 'better-call-saul',
    showTitle: 'Better Call Saul',
    actorSlug: 'tony-dalton',
    actorName: 'Tony Dalton',
    seasonsActive: 'Seasons 4–6',
    characterArc: 'Eduardo "Lalo" Salamanca arrives in Albuquerque like a force of nature — charming, terrifyingly intelligent, and utterly ruthless. As a member of the Salamanca drug family, Lalo is sent to oversee operations and investigate Gus Fring, whom he correctly suspects of plotting against the family. Unlike the other Salamancas, Lalo combines charisma with strategic brilliance, making him the most dangerous villain in the Breaking Bad universe.\n\nLalo\'s charm is his most lethal weapon. He can be warm, funny, and generous one moment and commit horrifying violence the next, often without changing his expression. His investigation into Gus Fring drives the tension of Seasons 5 and 6, as he methodically uncovers evidence of Gus\'s secret meth lab. His survival of an assassination attempt orchestrated by Gus — and his subsequent campaign of revenge — creates the show\'s most terrifying cat-and-mouse dynamic.\n\nLalo\'s death in the superlab beneath the laundry, shot by Gus Fring in a moment of desperate improvisation, is both satisfying and chilling. His body is entombed in the lab\'s foundation alongside Howard Hamlin — two victims of Gus\'s ambition buried in concrete, their fates unknown to the world above.',
    keyEpisodes: [
      { title: 'Coushatta', season: 4, episode: 8, description: 'Lalo Salamanca makes his first appearance, immediately establishing himself as a charismatic and dangerous presence.' },
      { title: 'Bagman', season: 5, episode: 8, description: 'Lalo\'s bail money is ambushed in the desert, setting off a chain of events that reverberates through Season 6.' },
      { title: 'Plan and Execution', season: 6, episode: 7, description: 'Lalo murders Howard Hamlin in Kim and Jimmy\'s apartment, one of the show\'s most shocking moments.' },
      { title: 'Point and Shoot', season: 6, episode: 8, description: 'Lalo discovers Gus\'s secret superlab and is killed by Gus in a tense showdown.' }
    ],
    image: { src: '/images/characters/lalo-salamanca.jpg', alt: 'Tony Dalton as Lalo Salamanca in Better Call Saul', attribution: 'AMC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/betterCallSaul', url: 'https://www.reddit.com/r/betterCallSaul/', platform: 'Reddit', description: 'Main BCS subreddit where Lalo is one of the most popular characters' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'BCS Wiki - Lalo Salamanca', url: 'https://breakingbad.fandom.com/wiki/Lalo_Salamanca', platform: 'Web', description: 'Lalo Salamanca wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Lalo Salamanca Edits', url: 'https://www.tiktok.com/tag/laloslamanca', platform: 'TikTok', description: 'Fan edits of Lalo\'s most chilling scenes' }
      ]
    },
    fanHeatIndex: { overall: 89, engagement: 92, socialActivity: 88, memeVelocity: 91, fanArtDensity: 82, fandomLongevity: 86 },
    faqs: [
      { question: 'Who plays Lalo Salamanca?', answer: 'Tony Dalton plays Lalo Salamanca. Dalton is a Mexican-American actor who was relatively unknown in the US before Better Call Saul. His performance was universally praised and made him one of the show\'s breakout stars.' },
      { question: 'Was Lalo mentioned in Breaking Bad?', answer: 'Yes. In Breaking Bad, Saul Goodman asks Walter and Jesse "Did Lalo send you?" when they kidnap him, confirming that Lalo was a planned character. Gus also tells Hector that "the Salamanca name dies with you," implying Lalo is already dead by that point.' },
      { question: 'How does Lalo die?', answer: 'Lalo is shot and killed by Gus Fring in the unfinished superlab beneath the industrial laundry in Season 6, Episode 8. His body is buried in the lab\'s foundation alongside Howard Hamlin.' }
    ],
    videos: [
      { title: 'Lalo Salamanca - The Most Terrifying Villain', youtubeId: 'xUVsrp6aHJc', description: 'Why Lalo Salamanca is the scariest character in the Breaking Bad universe.' },
      { title: 'Lalo vs Gus - Final Confrontation', youtubeId: 'Zs5AjKy1XMI', description: 'The tense final showdown between Lalo and Gus in the superlab.' }
    ],
    relatedCharacterSlugs: ['jimmy-mcgill', 'kim-wexler', 'nacho-varga', 'mike-ehrmantraut-bcs'],
    tags: ['villain', 'charismatic', 'terrifying', 'fan-favorite']
  }
];

const boysCharacters = [
  {
    slug: 'billy-butcher',
    name: 'Billy Butcher',
    showSlug: 'the-boys',
    showTitle: 'The Boys',
    actorSlug: 'karl-urban',
    actorName: 'Karl Urban',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Billy Butcher is a former SAS operative and the leader of The Boys, a ragtag group of vigilantes dedicated to exposing and destroying corrupt superheroes. His vendetta against Vought International and its superhero division, The Seven, is deeply personal — Homelander raped his wife Becca, who subsequently disappeared, leaving Butcher consumed by rage and a desire for revenge.\n\nButcher operates in moral territory that makes him nearly as dangerous as the supes he hunts. He manipulates his teammates, lies compulsively, and is willing to sacrifice anyone to achieve his goals. His relationship with Hughie Campbell provides the show\'s moral tension: Hughie believes in doing the right thing, while Butcher believes in doing whatever it takes. Their dynamic mirrors the show\'s central question of whether fighting monsters requires becoming one.\n\nAs the series progresses, Butcher\'s obsession with killing Homelander pushes him to take Compound V, gaining temporary superpowers at the cost of his health and humanity. His willingness to destroy himself — and potentially the world — to stop Homelander creates the show\'s most tragic paradox: the man fighting to protect humanity from superhumans is becoming the very threat he sought to eliminate.',
    keyEpisodes: [
      { title: 'The Name of the Game', season: 1, episode: 1, description: 'Butcher recruits Hughie Campbell into The Boys after Hughie\'s girlfriend is killed by A-Train.' },
      { title: 'What I Know', season: 2, episode: 8, description: 'Butcher discovers Becca is alive and has been raising Homelander\'s son Ryan in a Vought compound.' },
      { title: 'The Insider', season: 3, episode: 1, description: 'Butcher begins taking Temp V, gaining superpowers at a devastating physical cost.' }
    ],
    image: { src: '/images/characters/billy-butcher.jpg', alt: 'Karl Urban as Billy Butcher in The Boys', attribution: 'Amazon Studios', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/TheBoys', url: 'https://www.reddit.com/r/TheBoys/', platform: 'Reddit', description: 'Main The Boys subreddit with 1M+ members' }
      ],
      youtubeChannels: [
        { name: 'Billy Butcher Best Moments', url: 'https://www.youtube.com/results?search_query=billy+butcher+best+moments', platform: 'YouTube', description: 'Compilations of Butcher\'s most brutal and quotable scenes' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'The Boys Wiki - Butcher', url: 'https://the-boys.fandom.com/wiki/Billy_Butcher', platform: 'Web', description: 'Billy Butcher wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Billy Butcher Edits', url: 'https://www.tiktok.com/tag/billybutcher', platform: 'TikTok', description: 'Fan edits of Butcher\'s most iconic moments' }
      ]
    },
    fanHeatIndex: { overall: 91, engagement: 93, socialActivity: 90, memeVelocity: 92, fanArtDensity: 85, fandomLongevity: 88 },
    faqs: [
      { question: 'Who plays Billy Butcher in The Boys?', answer: 'Karl Urban plays Billy Butcher. Urban is a New Zealand actor known for his roles in The Lord of the Rings, Star Trek, and Dredd. His cockney-accented portrayal of Butcher has become one of his most iconic roles.' },
      { question: 'Why does Butcher hate Homelander?', answer: 'Butcher\'s hatred stems from Homelander raping his wife Becca, who subsequently disappeared. Butcher spent years believing she was dead before discovering she had been hidden by Vought to raise Homelander\'s son.' },
      { question: 'Does Butcher have superpowers?', answer: 'Butcher temporarily gains superpowers by taking Temp V (Temporary Compound V), which gives him heat vision and super strength for 24 hours. However, prolonged use causes fatal brain lesions.' }
    ],
    videos: [
      { title: 'Billy Butcher - Diabolical Moments', youtubeId: 'tBb4cKBBFMQ', description: 'Butcher\'s most ruthless and memorable scenes across The Boys.' },
      { title: 'Butcher vs Homelander', youtubeId: 'L2GJBfQO_CA', description: 'Every confrontation between Butcher and Homelander.' }
    ],
    relatedCharacterSlugs: ['homelander', 'hughie-campbell', 'starlight', 'frenchie'],
    tags: ['antihero', 'leader', 'vengeful', 'fan-favorite']
  },
  {
    slug: 'homelander',
    name: 'Homelander',
    showSlug: 'the-boys',
    showTitle: 'The Boys',
    actorSlug: 'antony-starr',
    actorName: 'Antony Starr',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Homelander is the leader of The Seven, Vought International\'s premier superhero team, and the most powerful being on the planet. To the public, he is America\'s golden boy — a patriotic, cape-wearing symbol of hope modeled on Superman. Behind the facade, he is a profoundly damaged, narcissistic sociopath raised in a laboratory, deprived of human connection, and conditioned to crave love and adulation above all else.\n\nHomelander\'s villainy is not that of a mastermind but of a child with unlimited power and zero emotional regulation. He lasers people who displease him, intimidates his teammates, and wages psychological warfare on anyone who threatens his status. His relationship with Starlight — whom he initially manipulates and assaults — and his obsession with his son Ryan reveal the depth of his dysfunction: he wants to be loved but has no idea how to earn it.\n\nAs the series progresses, Homelander becomes increasingly unhinged. The arrival of Stormfront feeds his worst impulses, his public approval fluctuates wildly, and his grip on sanity loosens. By Season 4, he has openly embraced authoritarian rhetoric and cultivated a personality cult, making The Boys\' satirical commentary on celebrity, power, and fascism increasingly pointed.',
    keyEpisodes: [
      { title: 'The Name of the Game', season: 1, episode: 1, description: 'Homelander is introduced as the beloved public face of The Seven, with hints of the monster beneath.' },
      { title: 'You Found Me', season: 1, episode: 8, description: 'Homelander abandons a plane full of passengers to die, revealing the true extent of his sociopathy.' },
      { title: 'The Bloody Doors Off', season: 2, episode: 6, description: 'Homelander\'s relationship with Stormfront intensifies as his behavior becomes more erratic.' },
      { title: 'Assassination Run', season: 4, episode: 8, description: 'Homelander\'s authoritarian tendencies reach a terrifying crescendo in the Season 4 finale.' }
    ],
    image: { src: '/images/characters/homelander.jpg', alt: 'Antony Starr as Homelander in The Boys', attribution: 'Amazon Studios', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/TheBoys', url: 'https://www.reddit.com/r/TheBoys/', platform: 'Reddit', description: 'Main The Boys subreddit where Homelander is the most discussed character' }
      ],
      youtubeChannels: [
        { name: 'Homelander - Every Terrifying Scene', url: 'https://www.youtube.com/results?search_query=homelander+terrifying+scenes', platform: 'YouTube', description: 'Compilations of Homelander\'s most chilling moments' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'The Boys Wiki - Homelander', url: 'https://the-boys.fandom.com/wiki/Homelander', platform: 'Web', description: 'Homelander wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Homelander Edits', url: 'https://www.tiktok.com/tag/homelander', platform: 'TikTok', description: 'Fan edits and memes of Homelander\'s most unhinged moments' }
      ]
    },
    fanHeatIndex: { overall: 95, engagement: 97, socialActivity: 95, memeVelocity: 98, fanArtDensity: 90, fandomLongevity: 92 },
    faqs: [
      { question: 'Who plays Homelander in The Boys?', answer: 'Antony Starr plays Homelander. Starr is a New Zealand actor previously known for his dual role in the NZ series Outrageous Fortune and Banshee. His portrayal has been widely praised as one of the greatest villain performances in television history.' },
      { question: 'Is Homelander based on Superman?', answer: 'Yes, Homelander is a dark parody of Superman. He shares similar powers (flight, heat vision, super strength, invulnerability) but represents a cynical deconstruction of the superhero archetype, exploring what happens when absolute power is given to someone emotionally broken.' },
      { question: 'Can anything kill Homelander?', answer: 'The show explores various means of potentially killing Homelander, including Soldier Boy\'s power-negating blast, specialized weapons, and the possibility of someone equally powerful. His near-invulnerability is central to the show\'s tension.' }
    ],
    videos: [
      { title: 'Homelander - The Greatest TV Villain', youtubeId: 'p3-OvsBIQ_k', description: 'Why Homelander is considered one of television\'s scariest villains.' },
      { title: 'Homelander Loses Control', youtubeId: 'tBb4cKBBFMQ', description: 'Homelander\'s most terrifying outbursts and breakdowns.' }
    ],
    relatedCharacterSlugs: ['billy-butcher', 'starlight', 'hughie-campbell', 'frenchie'],
    tags: ['villain', 'terrifying', 'iconic', 'complex', 'fan-favorite']
  },
  {
    slug: 'hughie-campbell',
    name: 'Hughie Campbell',
    showSlug: 'the-boys',
    showTitle: 'The Boys',
    actorSlug: 'jack-quaid',
    actorName: 'Jack Quaid',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Hughie Campbell is an ordinary electronics store employee whose life is destroyed when the superhero A-Train runs through his girlfriend Robin at super-speed, killing her instantly while Vought covers up the incident. This trauma transforms the meek, anxiety-prone Hughie into a reluctant vigilante who joins Billy Butcher\'s team to take down corrupt superheroes.\n\nHughie serves as the audience surrogate — the normal person navigating a world of gods and monsters. His moral compass provides the counterweight to Butcher\'s nihilism, and his romance with Starlight (Annie January) gives the show its emotional heart. Their relationship is complicated by her being a member of The Seven and him working to destroy it, creating a Romeo-and-Juliet dynamic with superhero stakes.\n\nAs the series progresses, Hughie struggles with feelings of inadequacy and a desire to protect Starlight, sometimes making reckless decisions like taking Temp V to gain powers of his own. His arc explores toxic masculinity, the desire to be a hero, and the realization that true strength comes not from superpowers but from moral courage.',
    keyEpisodes: [
      { title: 'The Name of the Game', season: 1, episode: 1, description: 'Hughie\'s girlfriend Robin is killed by A-Train, setting him on a path of vengeance.' },
      { title: 'Nothing Like It in the World', season: 2, episode: 4, description: 'Hughie and Starlight\'s romance deepens despite being on opposite sides.' },
      { title: 'Herogasm', season: 3, episode: 6, description: 'Hughie uses Temp V powers for the first time in the chaotic "Herogasm" episode.' }
    ],
    image: { src: '/images/characters/hughie-campbell.jpg', alt: 'Jack Quaid as Hughie Campbell in The Boys', attribution: 'Amazon Studios', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/TheBoys', url: 'https://www.reddit.com/r/TheBoys/', platform: 'Reddit', description: 'Main The Boys subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'The Boys Wiki - Hughie', url: 'https://the-boys.fandom.com/wiki/Hughie_Campbell', platform: 'Web', description: 'Hughie Campbell wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 82, engagement: 85, socialActivity: 80, memeVelocity: 79, fanArtDensity: 76, fandomLongevity: 83 },
    faqs: [
      { question: 'Who plays Hughie Campbell?', answer: 'Jack Quaid plays Hughie Campbell. Quaid is the son of Dennis Quaid and Meg Ryan and also appeared in The Hunger Games and Scream (2022). The character is named after Scottish comedian Hughie Green in the comics.' },
      { question: 'Do Hughie and Starlight end up together?', answer: 'Hughie and Starlight maintain an on-and-off romantic relationship throughout the series, serving as the show\'s central love story. Their bond is tested repeatedly by the conflict between The Boys and The Seven.' }
    ],
    videos: [
      { title: 'Hughie Campbell - From Nobody to Hero', youtubeId: 'L2GJBfQO_CA', description: 'Hughie\'s transformation from meek electronics store worker to vigilante.' },
      { title: 'Hughie and Starlight - Love Story', youtubeId: 'M_PNseTLiZA', description: 'The Hughie and Starlight romance across The Boys.' }
    ],
    relatedCharacterSlugs: ['starlight', 'billy-butcher', 'homelander', 'frenchie'],
    tags: ['protagonist', 'underdog', 'everyman', 'romantic-lead']
  },
  {
    slug: 'starlight',
    name: 'Starlight / Annie January',
    showSlug: 'the-boys',
    showTitle: 'The Boys',
    actorSlug: 'erin-moriarty',
    actorName: 'Erin Moriarty',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Annie January, known publicly as Starlight, joins The Seven as its newest member — a small-town Christian hero who believes she can make a real difference. Her idealism is shattered almost immediately when she is sexually assaulted by The Deep and discovers that Vought\'s heroes are corrupt, violent, and controlled by corporate interests rather than any desire to help people.\n\nStarlight\'s arc traces her transformation from naive believer to radical activist. Rather than leaving The Seven, she stays to fight from within, becoming a double agent who feeds information to The Boys while maintaining her public persona. Her relationship with Hughie Campbell provides emotional grounding, though it creates constant tension as she navigates dual loyalties.\n\nAs the show progresses, Starlight becomes increasingly powerful — both literally, as she learns to channel greater amounts of energy, and figuratively, as she uses her platform to expose Vought\'s crimes. She eventually goes public with the truth about The Seven, becoming a symbol of resistance against corporate superhero culture and Homelander\'s authoritarian turn.',
    keyEpisodes: [
      { title: 'The Name of the Game', season: 1, episode: 1, description: 'Annie joins The Seven and is sexually assaulted by The Deep on her first day.' },
      { title: 'Butcher, Baker, Candlestick Maker', season: 2, episode: 7, description: 'Starlight goes public about her assault, defying Vought\'s control and inspiring public support.' },
      { title: 'The Instant White-Hot Wild', season: 3, episode: 8, description: 'Starlight powers up to her maximum level for the first time and publicly quits The Seven.' }
    ],
    image: { src: '/images/characters/starlight.jpg', alt: 'Erin Moriarty as Starlight in The Boys', attribution: 'Amazon Studios', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/TheBoys', url: 'https://www.reddit.com/r/TheBoys/', platform: 'Reddit', description: 'Main The Boys subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'The Boys Wiki - Starlight', url: 'https://the-boys.fandom.com/wiki/Starlight', platform: 'Web', description: 'Starlight wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 84, engagement: 86, socialActivity: 83, memeVelocity: 80, fanArtDensity: 82, fandomLongevity: 85 },
    faqs: [
      { question: 'Who plays Starlight in The Boys?', answer: 'Erin Moriarty plays Starlight / Annie January. Moriarty has also appeared in Jessica Jones and the film Blood Father.' },
      { question: 'What are Starlight\'s powers?', answer: 'Starlight can absorb ambient electricity and convert it into powerful blasts of light energy. As the show progresses, she learns to draw more power and generate stronger blasts, including absorbing energy from electrical grids.' }
    ],
    videos: [
      { title: 'Starlight Powers Up - Best Scenes', youtubeId: 'M_PNseTLiZA', description: 'Starlight\'s most powerful moments in The Boys.' },
      { title: 'Starlight vs The Seven', youtubeId: 'p3-OvsBIQ_k', description: 'Starlight\'s journey from new recruit to rebel.' }
    ],
    relatedCharacterSlugs: ['hughie-campbell', 'homelander', 'billy-butcher', 'kimiko'],
    tags: ['heroine', 'moral-compass', 'powerful', 'fan-favorite']
  },
  {
    slug: 'frenchie',
    name: 'Frenchie',
    showSlug: 'the-boys',
    showTitle: 'The Boys',
    actorSlug: 'tomer-capone',
    actorName: 'Tomer Capone',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Serge, known as Frenchie, is a French-Algerian weapons expert, chemist, and former mercenary who serves as The Boys\' tech specialist and heart. Beneath his jovial, culturally omnivorous exterior lies deep guilt over past actions — particularly his failure to stop a supe called Lamplighter from killing children. Frenchie\'s story is one of seeking redemption through protecting the people he cares about.\n\nFrenchie\'s most significant relationship is with Kimiko Miyashiro, the mute former child soldier he helps rescue from Compound V experimentation. Their bond transcends language — literally, as Kimiko communicates through sign language and gesture — and becomes the show\'s most tender relationship. Frenchie teaches Kimiko about the world she missed during her captivity, while she helps him confront his guilt and find purpose.\n\nAcross the series, Frenchie grapples with addiction, guilt, and his complicated identity. His bisexuality is explored in later seasons, and his past as an enforcer for organized crime continues to haunt him. Despite his self-destructive tendencies, Frenchie consistently proves himself as the most empathetic member of The Boys, driven by love rather than vengeance.',
    keyEpisodes: [
      { title: 'Cherry', season: 1, episode: 2, description: 'Frenchie discovers and rescues Kimiko from the Compound V facility.' },
      { title: 'The Last Time to Look on This World of Lies', season: 2, episode: 5, description: 'Frenchie confronts Lamplighter, the supe he blames himself for not stopping.' },
      { title: 'Here Comes a Candle to Light You to Bed', season: 3, episode: 5, description: 'Frenchie\'s past crimes catch up with him as his history with organized crime resurfaces.' }
    ],
    image: { src: '/images/characters/frenchie.jpg', alt: 'Tomer Capone as Frenchie in The Boys', attribution: 'Amazon Studios', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/TheBoys', url: 'https://www.reddit.com/r/TheBoys/', platform: 'Reddit', description: 'Main The Boys subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'The Boys Wiki - Frenchie', url: 'https://the-boys.fandom.com/wiki/Frenchie', platform: 'Web', description: 'Frenchie wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 78, engagement: 80, socialActivity: 77, memeVelocity: 74, fanArtDensity: 75, fandomLongevity: 79 },
    faqs: [
      { question: 'Who plays Frenchie in The Boys?', answer: 'Tomer Capone plays Frenchie. Capone is an Israeli actor who brings a unique warmth and physicality to the role. Despite the character being French-Algerian, Capone has been praised for his authentic and nuanced portrayal.' },
      { question: 'Are Frenchie and Kimiko together?', answer: 'Frenchie and Kimiko share a deep emotional bond that evolves across the series. Their relationship begins as protective and platonic but develops romantic undertones, with both characters learning to express affection despite their respective traumas.' }
    ],
    videos: [
      { title: 'Frenchie and Kimiko - Best Moments', youtubeId: 'tBb4cKBBFMQ', description: 'The most heartwarming moments between Frenchie and Kimiko.' },
      { title: 'Frenchie - Character Analysis', youtubeId: 'L2GJBfQO_CA', description: 'Analysis of Frenchie\'s redemption arc in The Boys.' }
    ],
    relatedCharacterSlugs: ['kimiko', 'billy-butcher', 'hughie-campbell', 'starlight'],
    tags: ['team-member', 'tech-expert', 'redemption-arc', 'compassionate']
  },
  {
    slug: 'kimiko',
    name: 'Kimiko Miyashiro',
    showSlug: 'the-boys',
    showTitle: 'The Boys',
    actorSlug: 'karen-fukuhara',
    actorName: 'Karen Fukuhara',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Kimiko Miyashiro, known as "The Female" in the comics, is a former child soldier from Japan who was kidnapped and injected with Compound V by terrorists, gaining superhuman strength and a powerful healing factor. When The Boys rescue her from captivity, she is feral and mute, communicating only through violence and silence.\n\nKimiko\'s arc is one of the show\'s most moving — a story of reclaiming humanity after it was stripped away. Through her bond with Frenchie, she slowly opens up, learning sign language to communicate and discovering joy in music, culture, and connection. Her character challenges the show\'s violence-soaked premise by asking whether someone made into a weapon can choose to be something else.\n\nKimiko\'s relationship with violence remains complex throughout the series. She is The Boys\' most physically powerful member, capable of extreme brutality, but she increasingly struggles with being defined by her ability to hurt people. Her desire for a normal life — one with Frenchie, dancing, and freedom — clashes with the reality that the team needs her as a fighter. Her journey represents the show\'s most hopeful thread: even in a world of corrupted heroes, genuine redemption is possible.',
    keyEpisodes: [
      { title: 'Cherry', season: 1, episode: 2, description: 'Kimiko is rescued from the Compound V facility by The Boys, initially communicating only through violence.' },
      { title: 'Proper Preparation and Planning', season: 2, episode: 2, description: 'Kimiko begins communicating through sign language, opening up for the first time.' },
      { title: 'The Last Time to Look on This World of Lies', season: 2, episode: 5, description: 'Kimiko confronts her brother Kenji and the terrorist organization that kidnapped her as a child.' }
    ],
    image: { src: '/images/characters/kimiko.jpg', alt: 'Karen Fukuhara as Kimiko in The Boys', attribution: 'Amazon Studios', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/TheBoys', url: 'https://www.reddit.com/r/TheBoys/', platform: 'Reddit', description: 'Main The Boys subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'The Boys Wiki - Kimiko', url: 'https://the-boys.fandom.com/wiki/Kimiko_Miyashiro', platform: 'Web', description: 'Kimiko wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 80, engagement: 82, socialActivity: 78, memeVelocity: 75, fanArtDensity: 80, fandomLongevity: 81 },
    faqs: [
      { question: 'Who plays Kimiko in The Boys?', answer: 'Karen Fukuhara plays Kimiko Miyashiro. Fukuhara is a Japanese-American actress also known for playing Katana in Suicide Squad (2016). She delivers a remarkable largely nonverbal performance across the series.' },
      { question: 'Can Kimiko talk?', answer: 'Kimiko is selectively mute due to childhood trauma. She communicates through sign language and gestures. In musical fantasy sequences in Season 3, she is shown singing, suggesting her silence is psychological rather than physical.' },
      { question: 'What are Kimiko\'s powers?', answer: 'Kimiko has superhuman strength, speed, and a powerful regenerative healing factor that allows her to recover from injuries that would be fatal to normal humans. She was given these powers through forced injection of Compound V.' }
    ],
    videos: [
      { title: 'Kimiko - Best Fight Scenes', youtubeId: 'p3-OvsBIQ_k', description: 'Kimiko\'s most impressive action sequences in The Boys.' },
      { title: 'Frenchie and Kimiko - Full Love Story', youtubeId: 'M_PNseTLiZA', description: 'The complete Frenchie and Kimiko relationship arc.' }
    ],
    relatedCharacterSlugs: ['frenchie', 'billy-butcher', 'hughie-campbell', 'starlight'],
    tags: ['powerful', 'redemption-arc', 'silent-warrior', 'fan-favorite']
  }
];

module.exports = { suitsCharacters, bcsCharacters, boysCharacters };
