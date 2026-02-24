// Characters: Fleabag, Abbott Elementary, Arcane, Shogun

const fleabagCharacters = [
  {
    slug: 'fleabag',
    name: 'Fleabag',
    showSlug: 'fleabag',
    showTitle: 'Fleabag',
    actorSlug: 'phoebe-waller-bridge',
    actorName: 'Phoebe Waller-Bridge',
    seasonsActive: 'Seasons 1–2',
    characterArc: 'Fleabag is a dry-witted, sexually frank young woman navigating life in London after a series of devastating personal losses. She runs a struggling guinea pig-themed cafe left to her by her late best friend Boo, whose death — which Fleabag played a direct role in — haunts her throughout the series. She copes with grief, guilt, and loneliness through dark humor and a revolving door of sexual encounters, all while maintaining a caustic but deeply vulnerable internal monologue delivered directly to the camera.\n\nIn the first season, Fleabag\'s fourth-wall breaks serve as a defense mechanism, a way of performing confidence while concealing the depth of her self-loathing. She sabotages her relationships with her uptight sister Claire, her passive father, and virtually every man she encounters. The season gradually reveals the truth about Boo\'s death and Fleabag\'s culpability, recontextualizing her bravado as a mask for profound guilt.\n\nSeason 2 introduces the Priest, a charming, irreverent Catholic clergyman who is the first person to notice Fleabag\'s asides to the camera — effectively the first person to truly see her. Their forbidden romance becomes the vehicle for Fleabag\'s emotional reckoning: she must decide whether she is capable of genuine intimacy or whether she will continue retreating behind wit and performance. The season finale, in which the Priest chooses God over her, is both heartbreaking and liberating — Fleabag walks away from the camera, finally choosing to live in the present rather than narrate it.',
    keyEpisodes: [
      { title: 'Episode 1', season: 1, episode: 1, description: 'Fleabag is introduced breaking the fourth wall, establishing her candid, darkly comic relationship with the audience.' },
      { title: 'Episode 6', season: 1, episode: 6, description: 'The truth about Boo\'s death is revealed, recontextualizing Fleabag\'s grief and guilt throughout the season.' },
      { title: 'Episode 1', season: 2, episode: 1, description: 'Fleabag meets the Priest at an engagement dinner, and he becomes the first person to notice her breaking the fourth wall.' },
      { title: 'Episode 6', season: 2, episode: 6, description: 'The Priest chooses his faith over Fleabag; she walks away from the camera in the iconic final scene.' }
    ],
    image: { src: '/images/characters/fleabag.jpg', alt: 'Phoebe Waller-Bridge as Fleabag', attribution: 'BBC/Amazon Studios', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/Fleabag', url: 'https://www.reddit.com/r/Fleabag/', platform: 'Reddit', description: 'Main Fleabag subreddit with active fan discussion' }
      ],
      youtubeChannels: [
        { name: 'Fleabag - Breaking the Fourth Wall Analysis', url: 'https://www.youtube.com/results?search_query=fleabag+fourth+wall+analysis', platform: 'YouTube', description: 'Video essays on Fleabag\'s narrative techniques' }
      ],
      twitterAccounts: [
        { name: '@fleaborpamore', url: 'https://twitter.com/search?q=fleabag', platform: 'Twitter/X', description: 'Fleabag fan accounts and discussion' }
      ],
      fanSites: [
        { name: 'Fleabag Wiki', url: 'https://fleabag.fandom.com/', platform: 'Web', description: 'Fleabag fan wiki on Fandom' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Fleabag Edits', url: 'https://www.tiktok.com/tag/fleabag', platform: 'TikTok', description: 'Fan edits and clips from Fleabag' }
      ]
    },
    fanHeatIndex: { overall: 93, engagement: 95, socialActivity: 91, memeVelocity: 90, fanArtDensity: 94, fandomLongevity: 92 },
    faqs: [
      { question: 'Who plays Fleabag in the TV series?', answer: 'Phoebe Waller-Bridge plays the titular character Fleabag. She also created and wrote the series, adapting it from her award-winning one-woman stage show that debuted at the Edinburgh Festival Fringe in 2013.' },
      { question: 'What is Fleabag\'s real name?', answer: 'Fleabag\'s real name is never revealed in the series. She is only ever referred to by the nickname "Fleabag," which reinforces the show\'s themes of identity and self-perception. Even the credits list her simply as "Fleabag."' },
      { question: 'Why does Fleabag break the fourth wall?', answer: 'Fleabag\'s fourth-wall breaks function as a coping mechanism — she narrates her life to the audience as a way of maintaining emotional distance from her pain. The device becomes central to Season 2 when the Priest notices her looking away, suggesting that true intimacy requires dropping the performance.' },
      { question: 'Will there be a Season 3 of Fleabag?', answer: 'Phoebe Waller-Bridge has repeatedly stated that the series is complete at two seasons. She considers the story finished with the Season 2 finale, in which Fleabag walks away from the camera, and has said she has no plans to revisit the character.' }
    ],
    videos: [
      { title: 'Fleabag - The Final Scene', youtubeId: 'b4tPcGRgz_A', description: 'The iconic final scene where Fleabag walks away from the camera.' },
      { title: 'Fleabag Breaking the Fourth Wall - Every Moment', youtubeId: 'II5oMYJJNrA', description: 'Compilation of every fourth-wall break in the series.' }
    ],
    relatedCharacterSlugs: ['claire-fleabag', 'the-priest', 'godmother', 'martin-fleabag'],
    tags: ['protagonist', 'fourth-wall-breaker', 'antihero', 'iconic', 'fan-favorite']
  },
  {
    slug: 'claire-fleabag',
    name: 'Claire',
    showSlug: 'fleabag',
    showTitle: 'Fleabag',
    actorSlug: 'sian-clifford',
    actorName: 'Sian Clifford',
    seasonsActive: 'Seasons 1–2',
    characterArc: 'Claire is Fleabag\'s older sister, a high-strung, meticulously controlled businesswoman who has built her entire identity around the appearance of having her life together. She works in finance, dresses immaculately, and maintains a rigid emotional composure that contrasts sharply with her sister\'s chaotic candor. Beneath the surface, Claire is deeply unhappy — trapped in a toxic marriage to the passive-aggressive Martin and struggling with the pressure of being the "successful" sibling.\n\nThe sisters\' relationship is the emotional backbone of the series. Claire and Fleabag love each other fiercely but communicate through layers of resentment, competition, and unspoken grief over their mother\'s death. Claire resents Fleabag\'s apparent freedom and lack of responsibility, while Fleabag envies Claire\'s stability and ability to be taken seriously. Their dynamic is painfully recognizable to anyone who has navigated sibling rivalry complicated by loss.\n\nIn Season 2, Claire\'s carefully constructed life begins to crack. She develops feelings for Klare, a Finnish man she meets at the engagement dinner, and must confront the possibility that following her desires might mean dismantling everything she has built. Her storyline culminates in one of the series\' most cathartic moments: Claire, having finally chosen herself, runs through a train station as Fleabag cheers her on — a moment of sisterly solidarity that represents both women finally breaking free.',
    keyEpisodes: [
      { title: 'Episode 4', season: 1, episode: 4, description: 'Claire and Fleabag attend a women\'s retreat, exposing the tension and deep love in their sibling relationship.' },
      { title: 'Episode 6', season: 1, episode: 6, description: 'Claire learns the truth about Boo\'s death and confronts Fleabag, fracturing their relationship.' },
      { title: 'Episode 4', season: 2, episode: 4, description: 'Claire has a miscarriage at work and Fleabag rushes to support her in a raw display of sisterly devotion.' },
      { title: 'Episode 6', season: 2, episode: 6, description: 'Claire runs to catch the train to follow her heart, cheered on by Fleabag at the station.' }
    ],
    image: { src: '/images/characters/claire-fleabag.jpg', alt: 'Sian Clifford as Claire in Fleabag', attribution: 'BBC/Amazon Studios', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/Fleabag', url: 'https://www.reddit.com/r/Fleabag/', platform: 'Reddit', description: 'Main Fleabag subreddit' }
      ],
      youtubeChannels: [
        { name: 'Claire and Fleabag - Sisterhood Analysis', url: 'https://www.youtube.com/results?search_query=claire+fleabag+sister+analysis', platform: 'YouTube', description: 'Video essays on the sister dynamic' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Fleabag Wiki - Claire', url: 'https://fleabag.fandom.com/wiki/Claire', platform: 'Web', description: 'Claire character wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 78, engagement: 80, socialActivity: 76, memeVelocity: 72, fanArtDensity: 79, fandomLongevity: 80 },
    faqs: [
      { question: 'Who plays Claire in Fleabag?', answer: 'Sian Clifford plays Claire in Fleabag. Her portrayal of the tightly wound older sister earned her widespread critical praise and a BAFTA nomination.' },
      { question: 'What is the relationship between Claire and Fleabag?', answer: 'Claire is Fleabag\'s older sister. Their relationship is defined by deep love masked by resentment, competition, and unprocessed grief over their mother\'s death. Claire represents control and propriety while Fleabag represents chaos and honesty.' },
      { question: 'Does Claire leave Martin in Fleabag?', answer: 'Season 2 strongly implies that Claire is finally ready to leave Martin and pursue happiness on her own terms. The finale shows her running to catch a train, symbolizing her decision to break free from her suffocating marriage.' }
    ],
    videos: [
      { title: 'Claire Running to the Train - Fleabag', youtubeId: 'XeHMPj0TGrk', description: 'The cathartic scene of Claire chasing her happiness in the Season 2 finale.' },
      { title: 'Fleabag and Claire - Best Sister Moments', youtubeId: 'q3Yc5131LEo', description: 'A compilation of the sisters\' most memorable scenes together.' }
    ],
    relatedCharacterSlugs: ['fleabag', 'martin-fleabag', 'godmother', 'dad-fleabag'],
    tags: ['sibling', 'perfectionist', 'emotional-arc', 'fan-favorite']
  },
  {
    slug: 'the-priest',
    name: 'The Priest',
    showSlug: 'fleabag',
    showTitle: 'Fleabag',
    actorSlug: 'andrew-scott',
    actorName: 'Andrew Scott',
    seasonsActive: 'Season 2',
    characterArc: 'The Priest — never given a proper name, just like Fleabag herself — is a young, unconventional Catholic clergyman who arrives in Season 2 to officiate the wedding of Fleabag\'s father and Godmother. He drinks canned gin and tonics, swears freely, and radiates a charisma that is equal parts spiritual warmth and roguish charm. He is immediately magnetic, and his chemistry with Fleabag is electric from their first meeting at the engagement dinner.\n\nWhat makes the Priest extraordinary as a character is his ability to perceive Fleabag\'s fourth-wall breaks. When she glances at the camera, he notices — asking "Where did you just go?" — making him the only character in the series who can see through her defensive performance. This narrative device elevates their romance beyond conventional attraction: he literally sees her in a way no one else can, penetrating the barrier she has erected between herself and genuine connection.\n\nTheir relationship unfolds as a push-and-pull between desire and duty. The Priest is genuinely devoted to his faith, and his struggle between his love for Fleabag and his commitment to God is portrayed with compassion and complexity. He is not a hypocrite or a cliche — he is a man torn between two forms of love that he believes are incompatible. His final choice, delivered with gentle devastation at the bus stop — "It\'ll pass" — is one of the most discussed moments in recent television history.',
    keyEpisodes: [
      { title: 'Episode 1', season: 2, episode: 1, description: 'The Priest meets Fleabag at the engagement dinner, notices her fourth-wall break for the first time, and their electric chemistry is established.' },
      { title: 'Episode 4', season: 2, episode: 4, description: 'Fleabag and the Priest share their first kiss, crossing the line between friendship and forbidden romance.' },
      { title: 'Episode 5', season: 2, episode: 5, description: 'Their relationship is consummated, and the Priest grapples with the tension between his desires and his vocation.' },
      { title: 'Episode 6', season: 2, episode: 6, description: 'The Priest tells Fleabag he chooses God, delivering the devastating line "It\'ll pass" at the bus stop.' }
    ],
    image: { src: '/images/characters/the-priest.jpg', alt: 'Andrew Scott as the Priest in Fleabag', attribution: 'BBC/Amazon Studios', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/Fleabag', url: 'https://www.reddit.com/r/Fleabag/', platform: 'Reddit', description: 'Main Fleabag subreddit with extensive Priest discussion' }
      ],
      youtubeChannels: [
        { name: 'The Priest and Fleabag - Love Story Analysis', url: 'https://www.youtube.com/results?search_query=fleabag+priest+love+story+analysis', platform: 'YouTube', description: 'Video essays on the Fleabag-Priest romance' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Fleabag Wiki - The Priest', url: 'https://fleabag.fandom.com/wiki/The_Priest', platform: 'Web', description: 'The Priest character wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Hot Priest Edits', url: 'https://www.tiktok.com/tag/hotpriest', platform: 'TikTok', description: 'Fan edits featuring Andrew Scott as the Priest' }
      ]
    },
    fanHeatIndex: { overall: 91, engagement: 93, socialActivity: 92, memeVelocity: 94, fanArtDensity: 88, fandomLongevity: 86 },
    faqs: [
      { question: 'Who plays the Priest in Fleabag?', answer: 'Andrew Scott plays the Priest in Fleabag Season 2. The role catapulted Scott to mainstream fame, and the character quickly became known as "Hot Priest" across social media, launching countless memes and fan tributes.' },
      { question: 'What is the Priest\'s name in Fleabag?', answer: 'The Priest\'s name is never revealed in the series. Like Fleabag herself, he is identified only by his role, reinforcing the show\'s thematic exploration of identity and the masks people wear.' },
      { question: 'Why can the Priest see Fleabag breaking the fourth wall?', answer: 'The Priest is the only character who notices when Fleabag breaks the fourth wall. This serves as a metaphor for true intimacy — he is the first person who can see through her defenses and recognize when she is retreating from genuine connection.' },
      { question: 'Does the Priest choose Fleabag or God?', answer: 'In the Season 2 finale, the Priest tells Fleabag that he loves her but chooses God. When she says "It\'ll pass," referring to their love, he responds with the same words — "It\'ll pass" — in one of the most emotionally devastating exchanges in the series.' }
    ],
    videos: [
      { title: 'The Bus Stop Scene - Fleabag Finale', youtubeId: 'jMHbtw0OIOQ', description: 'The heartbreaking final conversation between Fleabag and the Priest at the bus stop.' },
      { title: 'Every Time the Priest Notices the Fourth Wall', youtubeId: 'KMNoLf6irs4', description: 'Compilation of moments where the Priest perceives Fleabag\'s asides to the audience.' }
    ],
    relatedCharacterSlugs: ['fleabag', 'claire-fleabag', 'godmother', 'dad-fleabag'],
    tags: ['love-interest', 'iconic', 'fan-favorite', 'tragic-romance']
  },
  {
    slug: 'godmother',
    name: 'Godmother',
    showSlug: 'fleabag',
    showTitle: 'Fleabag',
    actorSlug: 'olivia-colman',
    actorName: 'Olivia Colman',
    seasonsActive: 'Seasons 1–2',
    characterArc: 'Godmother is Fleabag\'s stepmother-to-be, a passive-aggressive artist whose weaponized politeness conceals a deeply territorial and manipulative nature. A successful sculptor who creates grotesque sexualized artwork, she has been a presence in the sisters\' lives since their mother\'s death, having been their mother\'s close friend before marrying their father. Her title — always "Godmother," never by name — is laden with irony, as she is anything but nurturing toward her stepdaughters.\n\nGodmother\'s genius lies in her ability to disguise cruelty as concern. She delivers cutting remarks with a warm smile, undermines Claire and Fleabag\'s confidence while maintaining the appearance of maternal care, and has their father so thoroughly wrapped around her finger that he cannot see the damage she inflicts. Her art — sexualized sculptures displayed prominently in her home — serves as a constant assertion of dominance over the domestic space.\n\nIn Season 2, Godmother\'s marriage to the sisters\' father becomes the catalyst for the season\'s events, bringing together the characters for an engagement dinner, a family counseling session, and finally the wedding itself. Her theft of Fleabag\'s mother\'s belongings, including a treasured sculpture, represents her systematic erasure of the sisters\' maternal connection. Olivia Colman\'s Emmy-winning performance transforms what could be a one-note villain into a masterclass of controlled menace — every smile hiding a knife.',
    keyEpisodes: [
      { title: 'Episode 2', season: 1, episode: 2, description: 'Godmother hosts an exhibition of her sexualized artwork, using the event to humiliate Fleabag in front of their family.' },
      { title: 'Episode 1', season: 2, episode: 1, description: 'The engagement dinner at Godmother\'s chosen restaurant sets the tone for her controlling behavior throughout the season.' },
      { title: 'Episode 3', season: 2, episode: 3, description: 'The family therapy session reveals the toxic dynamics Godmother has cultivated within the family.' },
      { title: 'Episode 6', season: 2, episode: 6, description: 'Godmother marries Dad at the wedding, but Fleabag reclaims her mother\'s sculpture in a quiet act of defiance.' }
    ],
    image: { src: '/images/characters/godmother.jpg', alt: 'Olivia Colman as Godmother in Fleabag', attribution: 'BBC/Amazon Studios', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/Fleabag', url: 'https://www.reddit.com/r/Fleabag/', platform: 'Reddit', description: 'Main Fleabag subreddit' }
      ],
      youtubeChannels: [
        { name: 'Olivia Colman as Godmother - Performance Breakdown', url: 'https://www.youtube.com/results?search_query=olivia+colman+godmother+fleabag', platform: 'YouTube', description: 'Analysis of Colman\'s performance as Godmother' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Fleabag Wiki - Godmother', url: 'https://fleabag.fandom.com/wiki/Godmother', platform: 'Web', description: 'Godmother character wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 75, engagement: 78, socialActivity: 73, memeVelocity: 77, fanArtDensity: 70, fandomLongevity: 74 },
    faqs: [
      { question: 'Who plays Godmother in Fleabag?', answer: 'Olivia Colman plays Godmother in Fleabag. Colman won the Emmy Award for Outstanding Supporting Actress in a Comedy Series for this role in 2019, the same year she won the Academy Award for Best Actress for The Favourite.' },
      { question: 'Why is the character called Godmother?', answer: 'The character is always referred to as "Godmother" rather than by a given name. She was a friend of Fleabag and Claire\'s late mother and became their godmother. After their mother\'s death, she began a relationship with their father, making her both godmother and stepmother.' },
      { question: 'Is Godmother a villain in Fleabag?', answer: 'Godmother serves as the primary antagonist, though her villainy is expressed through passive-aggression and emotional manipulation rather than overt cruelty. She weaponizes politeness and maternal concern to control and undermine Fleabag and Claire while maintaining a veneer of respectability.' }
    ],
    videos: [
      { title: 'Godmother\'s Best Passive-Aggressive Moments', youtubeId: 'hFT8E9pnmBs', description: 'A compilation of Godmother\'s most cutting moments delivered with a smile.' },
      { title: 'Olivia Colman - Emmy Winning Performance in Fleabag', youtubeId: 'wuOxG-rnj30', description: 'Highlights of Olivia Colman\'s Emmy-winning turn as Godmother.' }
    ],
    relatedCharacterSlugs: ['fleabag', 'claire-fleabag', 'dad-fleabag', 'the-priest'],
    tags: ['antagonist', 'passive-aggressive', 'scene-stealer', 'award-winning']
  },
  {
    slug: 'martin-fleabag',
    name: 'Martin',
    showSlug: 'fleabag',
    showTitle: 'Fleabag',
    actorSlug: 'brett-gelman',
    actorName: 'Brett Gelman',
    seasonsActive: 'Seasons 1–2',
    characterArc: 'Martin is Claire\'s husband, an alcoholic whose outward joviality masks a deeply unpleasant and manipulative personality. A recovering drinker who is constantly falling off the wagon, Martin uses humor and self-deprecation as tools to deflect accountability for his behavior. He is the kind of man who makes inappropriate comments at dinner parties and then acts wounded when called out, positioning himself as the victim in every conflict he creates.\n\nMartin\'s relationship with Claire is one of the show\'s most incisive portrayals of a toxic marriage. He undermines Claire\'s confidence, embarrasses her in public, and weaponizes her need for order and control against her. In Season 1, a disturbing incident involving Fleabag reveals the depth of Martin\'s predatory behavior, and his ability to gaslight both sisters into questioning their own perceptions is chillingly realistic.\n\nIn Season 2, Martin\'s alcoholism and erratic behavior escalate as Claire begins to pull away from their marriage. His desperation manifests as increasingly unhinged attempts to maintain control — showing up drunk to family events, making scenes, and pleading for sympathy. Martin represents the type of abuser who hides behind charm and vulnerability, making it difficult for those around him to articulate exactly why he is so dangerous. Brett Gelman\'s performance walks a tightrope between comedy and menace, making Martin both the show\'s comic relief and its most insidious threat.',
    keyEpisodes: [
      { title: 'Episode 3', season: 1, episode: 3, description: 'Martin\'s predatory behavior toward Fleabag is revealed, exposing the darkness beneath his affable exterior.' },
      { title: 'Episode 6', season: 1, episode: 6, description: 'The fallout from Martin\'s actions comes to a head in the season finale, fracturing the family further.' },
      { title: 'Episode 3', season: 2, episode: 3, description: 'Martin\'s behavior during the family therapy session lays bare the dysfunctional dynamics of his marriage to Claire.' },
      { title: 'Episode 6', season: 2, episode: 6, description: 'Martin\'s desperation peaks at the wedding as Claire prepares to leave him behind.' }
    ],
    image: { src: '/images/characters/martin-fleabag.jpg', alt: 'Brett Gelman as Martin in Fleabag', attribution: 'BBC/Amazon Studios', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/Fleabag', url: 'https://www.reddit.com/r/Fleabag/', platform: 'Reddit', description: 'Main Fleabag subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'Fleabag Wiki - Martin', url: 'https://fleabag.fandom.com/wiki/Martin', platform: 'Web', description: 'Martin character wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 62, engagement: 65, socialActivity: 60, memeVelocity: 64, fanArtDensity: 55, fandomLongevity: 63 },
    faqs: [
      { question: 'Who plays Martin in Fleabag?', answer: 'Brett Gelman plays Martin in Fleabag. Gelman is also known for his role as Murray Bauman in Stranger Things. His performance in Fleabag has been praised for making Martin simultaneously comedic and deeply unsettling.' },
      { question: 'Why do fans hate Martin in Fleabag?', answer: 'Martin is widely disliked for his manipulative, predatory, and gaslighting behavior. He undermines Claire, makes inappropriate advances, and consistently deflects responsibility for his actions by playing the victim. He represents a very recognizable type of toxic partner.' },
      { question: 'Are Martin and Claire still married at the end of Fleabag?', answer: 'The Season 2 finale strongly implies that Claire is leaving Martin, as she runs to catch a train in pursuit of a new relationship. However, their divorce is never explicitly confirmed on screen.' }
    ],
    videos: [
      { title: 'Martin - Fleabag\'s Most Hated Character', youtubeId: 'MGmxblhF8WA', description: 'Analysis of why Martin is one of television\'s most effective toxic characters.' },
      { title: 'Brett Gelman on Playing Martin in Fleabag', youtubeId: 'J4CnJoYGiOQ', description: 'Brett Gelman discusses the complexities of portraying Martin.' }
    ],
    relatedCharacterSlugs: ['claire-fleabag', 'fleabag', 'dad-fleabag', 'godmother'],
    tags: ['antagonist', 'toxic', 'comic-relief', 'controversial']
  },
  {
    slug: 'dad-fleabag',
    name: 'Dad',
    showSlug: 'fleabag',
    showTitle: 'Fleabag',
    actorSlug: 'bill-paterson',
    actorName: 'Bill Paterson',
    seasonsActive: 'Seasons 1–2',
    characterArc: 'Dad is the unnamed patriarch of the family, a gentle, conflict-averse man who has retreated into emotional passivity following the death of his wife. He loves both his daughters but is fundamentally incapable of expressing that love in the direct, engaged way they desperately need. His default response to family tension is to change the subject, leave the room, or defer to Godmother, allowing her to fill the parental vacuum he has abdicated.\n\nDad\'s inability to stand up for his daughters — or to see through Godmother\'s manipulations — is one of the show\'s most quietly painful dynamics. He is not cruel or neglectful in any active sense; he simply lacks the emotional tools to navigate the complicated grief and resentment that permeate his family. His love is real but passive, expressed through awkward gestures rather than the words his daughters need to hear.\n\nIn Season 2, Dad\'s impending marriage to Godmother forces the family together for a series of events that finally crack open the silence. In a rare moment of vulnerability during the finale, he gives Fleabag her mother\'s sculpture — a small, quiet act of recognition that carries enormous emotional weight. It suggests that beneath his passivity, Dad has always seen more than he lets on, and that his love for his daughters, however poorly expressed, has never wavered.',
    keyEpisodes: [
      { title: 'Episode 4', season: 1, episode: 4, description: 'Dad attends the women\'s retreat with Claire and Fleabag, showcasing his awkward but genuine attempts at connection.' },
      { title: 'Episode 3', season: 2, episode: 3, description: 'The family therapy session forces Dad to confront the emotional dynamics he has spent years avoiding.' },
      { title: 'Episode 6', season: 2, episode: 6, description: 'Dad gives Fleabag her mother\'s sculpture at the wedding, a quiet but deeply significant gesture of love.' }
    ],
    image: { src: '/images/characters/dad-fleabag.jpg', alt: 'Bill Paterson as Dad in Fleabag', attribution: 'BBC/Amazon Studios', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/Fleabag', url: 'https://www.reddit.com/r/Fleabag/', platform: 'Reddit', description: 'Main Fleabag subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'Fleabag Wiki - Dad', url: 'https://fleabag.fandom.com/wiki/Dad', platform: 'Web', description: 'Dad character wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 58, engagement: 60, socialActivity: 55, memeVelocity: 50, fanArtDensity: 56, fandomLongevity: 62 },
    faqs: [
      { question: 'Who plays Dad in Fleabag?', answer: 'Bill Paterson plays Dad in Fleabag. Paterson is a veteran Scottish actor known for his extensive work in British film and television, including roles in Wives and Daughters, Outlander, and Good Omens.' },
      { question: 'What is Dad\'s real name in Fleabag?', answer: 'Like Fleabag, the Priest, and Godmother, Dad is never given a name in the series. He is credited simply as "Dad," consistent with the show\'s pattern of identifying characters by their roles rather than their names.' },
      { question: 'Why doesn\'t Dad stand up to Godmother?', answer: 'Dad\'s passivity stems from his inability to process grief and conflict. After losing his wife, he retreated into emotional avoidance, and Godmother filled the void. He is not malicious but deeply conflict-averse, and his failure to protect his daughters from Godmother\'s manipulation is one of the show\'s most painful recurring themes.' }
    ],
    videos: [
      { title: 'Dad Gives Fleabag the Sculpture - Season 2 Finale', youtubeId: 'g1zRByFbz-o', description: 'The emotional moment when Dad gives Fleabag her mother\'s sculpture.' },
      { title: 'Fleabag - Family Therapy Scene', youtubeId: '9ORKIss6cOw', description: 'The family therapy session featuring the whole family\'s dysfunctional dynamics.' }
    ],
    relatedCharacterSlugs: ['fleabag', 'claire-fleabag', 'godmother', 'martin-fleabag'],
    tags: ['father-figure', 'passive', 'emotional-arc', 'understated']
  }
];

const abbottCharacters = [
  {
    slug: 'janine-teagues',
    name: 'Janine Teagues',
    showSlug: 'abbott-elementary',
    showTitle: 'Abbott Elementary',
    actorSlug: 'quinta-brunson',
    actorName: 'Quinta Brunson',
    seasonsActive: 'Seasons 1–3',
    characterArc: 'Janine Teagues is an optimistic, energetic second-grade teacher at Abbott Elementary, a chronically underfunded public school in Philadelphia. Her relentless positivity and determination to make a difference drive the show\'s central premise — she believes that passion and creativity can overcome systemic neglect, even when the evidence suggests otherwise.\n\nJanine\'s optimism is both her greatest strength and her biggest blind spot. She takes on impossible projects, volunteers for everything, and refuses to accept that some problems are beyond her control. Her growth across the series comes from learning to balance her idealism with pragmatism, guided by veteran teachers like Barbara Howard and Melissa Schemmenti who have survived decades in the system.\n\nHer personal life provides equal comedy and depth — her disastrous relationship with aspiring rapper Tariq, her slow-burn dynamic with substitute teacher Gregory Eddie, and her realization that she needs to grow as a person, not just as a teacher. Janine\'s arc is ultimately about learning that making a difference doesn\'t require being a martyr.',
    keyEpisodes: [
      { title: 'Pilot', season: 1, episode: 1, description: 'Janine\'s determined optimism is established as she fights to fix a broken rug in her classroom.' },
      { title: 'Desking', season: 1, episode: 7, description: 'Janine goes viral for the wrong reasons, forcing her to confront the limits of her approach.' },
      { title: 'Development Day', season: 2, episode: 1, description: 'Janine returns from summer break with new perspective and growing chemistry with Gregory.' }
    ],
    image: { src: '/images/characters/janine-teagues.jpg', alt: 'Quinta Brunson as Janine Teagues in Abbott Elementary', attribution: 'ABC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/AbbottElementaryABC', url: 'https://www.reddit.com/r/AbbottElementaryABC/', platform: 'Reddit', description: 'Main Abbott Elementary subreddit' }
      ],
      youtubeChannels: [
        { name: 'Abbott Elementary Best Moments', url: 'https://www.youtube.com/results?search_query=janine+teagues+abbott+elementary', platform: 'YouTube', description: 'Best Janine moments compilations' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Abbott Wiki', url: 'https://abbottelementary.fandom.com/', platform: 'Web', description: 'Abbott Elementary fan wiki' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 86, engagement: 89, socialActivity: 87, memeVelocity: 84, fanArtDensity: 80, fandomLongevity: 85 },
    faqs: [
      { question: 'Who plays Janine Teagues?', answer: 'Quinta Brunson plays Janine Teagues. Brunson also created the show, basing it on her mother\'s experiences as a Philadelphia public school teacher. She won an Emmy for Outstanding Writing for a Comedy Series.' },
      { question: 'Do Janine and Gregory get together?', answer: 'Janine and Gregory Eddie have a slow-burn romantic dynamic that builds across the series. After Janine breaks up with Tariq in Season 1, the show gradually develops their mutual attraction.' },
      { question: 'Is Abbott Elementary based on a real school?', answer: 'Abbott Elementary is inspired by Quinta Brunson\'s mother\'s experience teaching in the Philadelphia public school system. The school is fictional but reflects real challenges faced by underfunded public schools.' }
    ],
    videos: [
      { title: 'Janine Teagues - Funniest Moments', youtubeId: 'vP5aMfHFZPE', description: 'A compilation of Janine\'s most hilarious and heartfelt scenes.' },
      { title: 'Abbott Elementary - Official Trailer', youtubeId: 'AHjwSn6RzoE', description: 'The official trailer for Abbott Elementary on ABC.' }
    ],
    relatedCharacterSlugs: ['gregory-eddie', 'ava-coleman', 'barbara-howard'],
    tags: ['protagonist', 'optimistic', 'comedic', 'fan-favorite']
  },
  {
    slug: 'ava-coleman',
    name: 'Ava Coleman',
    showSlug: 'abbott-elementary',
    showTitle: 'Abbott Elementary',
    actorSlug: 'janelle-james',
    actorName: 'Janelle James',
    seasonsActive: 'Seasons 1–3',
    characterArc: 'Ava Coleman is the incompetent, self-absorbed principal of Abbott Elementary who got the job through blackmail rather than qualification. She spends most of her time on social media, scheming for personal gain, and avoiding actual administrative work. She is the show\'s breakout character — a walking disaster of narcissism and malapropisms who somehow manages to be both the biggest obstacle and an unlikely ally to her teachers.\n\nAva\'s comedy comes from her total lack of self-awareness and her shameless pursuit of clout, money, and attractive men. She treats the school like her personal fiefdom, misuses funds, and demonstrates a breathtaking ignorance of educational practice. Yet the show gradually reveals moments of competence and even caring beneath the persona — she occasionally fights for her school when it truly matters.\n\nThe genius of Ava is that she embodies the systemic failure that Abbott\'s teachers fight against every day. She is the product of a system that allows unqualified people to run schools while dedicated teachers struggle with no resources. Yet she is also irresistibly funny, and her gradual, almost imperceptible growth makes her one of TV\'s most original comedic characters.',
    keyEpisodes: [
      { title: 'Pilot', season: 1, episode: 1, description: 'Ava\'s incompetence as principal is immediately established as she priorities social media over school needs.' },
      { title: 'Ava vs. Superintendent', season: 1, episode: 12, description: 'Ava surprisingly stands up for Abbott when the superintendent threatens the school.' },
      { title: 'Abbott Elementary', season: 2, episode: 22, description: 'Ava shows unexpected depth when she helps save the school from closure.' }
    ],
    image: { src: '/images/characters/ava-coleman.jpg', alt: 'Janelle James as Ava Coleman in Abbott Elementary', attribution: 'ABC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/AbbottElementaryABC', url: 'https://www.reddit.com/r/AbbottElementaryABC/', platform: 'Reddit', description: 'Main Abbott Elementary subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Ava Coleman Edits', url: 'https://www.tiktok.com/tag/avacoleman', platform: 'TikTok', description: 'Fan clips of Ava\'s most outrageous lines' }
      ]
    },
    fanHeatIndex: { overall: 88, engagement: 91, socialActivity: 89, memeVelocity: 93, fanArtDensity: 75, fandomLongevity: 84 },
    faqs: [
      { question: 'Who plays Ava Coleman?', answer: 'Janelle James plays Ava Coleman. James is a stand-up comedian whose improvised lines frequently make it into the show. Her performance has been called the breakout of the series.' },
      { question: 'How did Ava become principal?', answer: 'Ava became principal by blackmailing the superintendent with compromising photos. She has no educational qualifications and openly admits she is not interested in education, making her a constant source of frustration for the teachers.' }
    ],
    videos: [
      { title: 'Ava Coleman - Best One-Liners', youtubeId: 'vP5aMfHFZPE', description: 'Ava Coleman\'s most hilarious and quotable moments.' },
      { title: 'Ava Coleman vs Everyone', youtubeId: 'AHjwSn6RzoE', description: 'Ava clashing with teachers, students, and administrators.' }
    ],
    relatedCharacterSlugs: ['janine-teagues', 'gregory-eddie', 'barbara-howard'],
    tags: ['comedic', 'breakout', 'incompetent-boss', 'fan-favorite']
  },
  {
    slug: 'gregory-eddie',
    name: 'Gregory Eddie',
    showSlug: 'abbott-elementary',
    showTitle: 'Abbott Elementary',
    actorSlug: 'tyler-james-williams',
    actorName: 'Tyler James Williams',
    seasonsActive: 'Seasons 1–3',
    characterArc: 'Gregory Eddie arrives at Abbott Elementary as a long-term substitute teacher with ambitions of becoming a principal. A perfectionist with a dry wit and rigid demeanor, Gregory initially sees Abbott as a stepping stone rather than a destination. His by-the-book approach and inability to connect with colleagues makes him an outsider in the tight-knit Abbott community.\n\nGregory\'s growth comes from learning that great teaching requires flexibility, warmth, and humility — qualities he develops through his interactions with the Abbott staff. His deadpan reactions to Abbott\'s chaos provide some of the show\'s best comedy, and his slow transformation from aloof outsider to committed community member mirrors the show\'s broader themes about finding purpose.\n\nHis slow-burn romance with Janine is the show\'s central will-they-won\'t-they, with both characters needing to grow individually before they can come together. Gregory must learn to loosen up and embrace imperfection, while Janine must learn to stop trying to fix everything. Their mutual gravitational pull is the emotional engine driving the series.',
    keyEpisodes: [
      { title: 'Pilot', season: 1, episode: 1, description: 'Gregory arrives at Abbott as a substitute teacher, immediately clashing with the school\'s chaotic energy.' },
      { title: 'Step Class', season: 1, episode: 9, description: 'Gregory begins to bond with his students and colleagues, showing his first cracks of warmth.' },
      { title: 'Development Day', season: 2, episode: 1, description: 'Gregory returns as a full-time teacher, signaling his commitment to Abbott and deepening his connection with Janine.' }
    ],
    image: { src: '/images/characters/gregory-eddie.jpg', alt: 'Tyler James Williams as Gregory Eddie in Abbott Elementary', attribution: 'ABC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/AbbottElementaryABC', url: 'https://www.reddit.com/r/AbbottElementaryABC/', platform: 'Reddit', description: 'Main Abbott Elementary subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 80, engagement: 83, socialActivity: 79, memeVelocity: 77, fanArtDensity: 74, fandomLongevity: 80 },
    faqs: [
      { question: 'Who plays Gregory Eddie?', answer: 'Tyler James Williams plays Gregory Eddie. Williams is known for his childhood role as the title character in Everybody Hates Chris and has received Emmy nominations for Abbott Elementary.' },
      { question: 'Do Gregory and Janine get together?', answer: 'Gregory and Janine have a slow-burn romantic arc across the series, with mutual attraction building gradually through shared experiences at Abbott.' }
    ],
    videos: [
      { title: 'Gregory Eddie - Deadpan King', youtubeId: 'vP5aMfHFZPE', description: 'Gregory\'s funniest deadpan reactions to Abbott\'s chaos.' },
      { title: 'Janine and Gregory - Best Moments', youtubeId: 'AHjwSn6RzoE', description: 'The best Janine and Gregory scenes across Abbott Elementary.' }
    ],
    relatedCharacterSlugs: ['janine-teagues', 'ava-coleman', 'barbara-howard'],
    tags: ['romantic-lead', 'deadpan', 'growth-arc', 'teacher']
  },
  {
    slug: 'barbara-howard',
    name: 'Barbara Howard',
    showSlug: 'abbott-elementary',
    showTitle: 'Abbott Elementary',
    actorSlug: 'sheryl-lee-ralph',
    actorName: 'Sheryl Lee Ralph',
    seasonsActive: 'Seasons 1–3',
    characterArc: 'Barbara Howard is the beloved veteran kindergarten teacher at Abbott Elementary who has been educating Philadelphia\'s children for decades. A devout Christian with unshakable composure, Barbara represents the institutional memory of Abbott — she has seen administrators come and go, weathered budget cuts and policy changes, and maintained her standards through it all. She is the teacher every student remembers, the colleague every teacher respects, and the moral center of the school.\n\nBarbara serves as a maternal figure and mentor to Janine, though their relationship is complicated by generational differences in approach. While Janine fights loudly against the system, Barbara works quietly within it, having learned through experience which battles are worth fighting. Her calm competence can read as complacency to younger colleagues, but the show reveals the depth of her commitment through moments where Barbara\'s quiet authority proves more effective than any grand gesture.\n\nBarbara\'s personal life — her faith, her marriage, her adult children — provides the show with its most grounded emotional moments. She is a woman who has built a meaningful life around service, and her presence at Abbott is both a testament to and a indictment of a system that relies on dedicated individuals to compensate for systemic failures.',
    keyEpisodes: [
      { title: 'Pilot', season: 1, episode: 1, description: 'Barbara is established as the veteran teacher who has seen it all at Abbott Elementary.' },
      { title: 'Gifted Program', season: 1, episode: 4, description: 'Barbara and Janine clash over teaching methods, revealing their different philosophies.' },
      { title: 'Holiday Hookah', season: 2, episode: 10, description: 'Barbara lets her guard down during a holiday celebration, showing a different side of herself.' }
    ],
    image: { src: '/images/characters/barbara-howard.jpg', alt: 'Sheryl Lee Ralph as Barbara Howard in Abbott Elementary', attribution: 'ABC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/AbbottElementaryABC', url: 'https://www.reddit.com/r/AbbottElementaryABC/', platform: 'Reddit', description: 'Main Abbott Elementary subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 83, engagement: 86, socialActivity: 81, memeVelocity: 78, fanArtDensity: 76, fandomLongevity: 86 },
    faqs: [
      { question: 'Who plays Barbara Howard?', answer: 'Sheryl Lee Ralph plays Barbara Howard. Ralph won the Emmy for Outstanding Supporting Actress in a Comedy Series for the role in 2022, delivering an iconic acceptance speech that went viral.' },
      { question: 'Is Barbara Howard based on a real person?', answer: 'Barbara represents the dedicated veteran teachers Quinta Brunson grew up around in the Philadelphia school system. While not based on one specific person, she embodies the resilience and commitment of career educators.' }
    ],
    videos: [
      { title: 'Barbara Howard - Best Moments', youtubeId: 'vP5aMfHFZPE', description: 'Barbara Howard\'s funniest and most touching scenes at Abbott.' },
      { title: 'Sheryl Lee Ralph - Emmy Speech', youtubeId: 'Vsl07WQHBEM', description: 'Sheryl Lee Ralph\'s iconic Emmy acceptance speech for Abbott Elementary.' }
    ],
    relatedCharacterSlugs: ['janine-teagues', 'ava-coleman', 'gregory-eddie'],
    tags: ['mentor', 'veteran', 'moral-center', 'emmy-winner']
  }
];

const arcaneCharacters = [
  {
    slug: 'jinx',
    name: 'Jinx / Powder',
    showSlug: 'arcane',
    showTitle: 'Arcane',
    actorSlug: 'ella-purnell',
    actorName: 'Ella Purnell',
    seasonsActive: 'Seasons 1–2',
    characterArc: 'Powder is a bright, inventive young girl from the undercity of Zaun, the younger sister of Vi and the adopted daughter of Vander. After a catastrophic failed heist leads to Vander\'s death and Vi\'s imprisonment, Powder is abandoned — her sister\'s last words to her being "You\'re a jinx." This rejection, combined with the guilt of inadvertently causing the deaths of people she loved, shatters Powder\'s psyche.\n\nAdopted by the manipulative Silco, Powder transforms into Jinx — a chaotic, brilliant, and deeply unstable weapons expert who terrorizes Piltover. Jinx is defined by her fractured mental state: she hallucinates, talks to imaginary versions of dead loved ones, and oscillates between childlike vulnerability and explosive violence. Her relationship with Silco becomes a twisted father-daughter bond that fills the void left by Vander and Vi.\n\nWhen Vi returns, Jinx is torn between the sister she desperately wants back and the person she has become. The show\'s climactic dinner scene — where Jinx forces Vi and Silco to sit at a table together — is a heartbreaking illustration of her impossible situation. She cannot be Powder and Jinx simultaneously. Her final choice to embrace Jinx and fire the mega-death rocket at the Piltover council is one of animation\'s most devastating character moments.',
    keyEpisodes: [
      { title: 'Welcome to the Playground', season: 1, episode: 1, description: 'Young Powder is introduced as Vi\'s inventive little sister in the undercity of Zaun.' },
      { title: 'When These Walls Come Tumbling Down', season: 1, episode: 3, description: 'Powder\'s hex crystal bomb accidentally kills Mylo and Claggor. Vi calls her a jinx and abandons her.' },
      { title: 'The Monster You Created', season: 1, episode: 9, description: 'Jinx\'s breakdown culminates in the dinner scene where she kills Silco and fires the rocket at the council.' },
      { title: 'The Dirt Under Your Nails', season: 2, episode: 6, description: 'Jinx and Vi confront their shared trauma as the war between Zaun and Piltover escalates.' }
    ],
    image: { src: '/images/characters/jinx.jpg', alt: 'Jinx from Arcane, voiced by Ella Purnell', attribution: 'Netflix/Riot Games', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/arcane', url: 'https://www.reddit.com/r/arcane/', platform: 'Reddit', description: 'Main Arcane subreddit with extensive Jinx discussion and fan art' },
        { name: 'r/leagueoflegends', url: 'https://www.reddit.com/r/leagueoflegends/', platform: 'Reddit', description: 'League of Legends subreddit with Arcane discussion' }
      ],
      youtubeChannels: [
        { name: 'Jinx Character Analysis', url: 'https://www.youtube.com/results?search_query=jinx+arcane+character+analysis', platform: 'YouTube', description: 'Deep dive analyses of Jinx\'s psychology and arc' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Arcane Wiki - Jinx', url: 'https://arcane.fandom.com/wiki/Jinx', platform: 'Web', description: 'Jinx page on the Arcane wiki' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Jinx Cosplay & Edits', url: 'https://www.tiktok.com/tag/jinxarcane', platform: 'TikTok', description: 'Cosplay and fan edits of Jinx' }
      ]
    },
    fanHeatIndex: { overall: 95, engagement: 97, socialActivity: 94, memeVelocity: 93, fanArtDensity: 98, fandomLongevity: 93 },
    faqs: [
      { question: 'Who voices Jinx in Arcane?', answer: 'Ella Purnell voices Jinx (adult Powder) in Arcane. Purnell is also known for her roles in Yellowjackets and Fallout. Mia Sinclair Jenness voices young Powder in the first act.' },
      { question: 'Is Jinx a villain in Arcane?', answer: 'Jinx is a tragic antagonist rather than a straightforward villain. The show portrays her descent into violence and instability as the result of abandonment, trauma, and manipulation by Silco, making her deeply sympathetic even as her actions become increasingly destructive.' },
      { question: 'What is the relationship between Jinx and Vi?', answer: 'Jinx and Vi are sisters. Their bond is the emotional core of Arcane. After being separated as children, they reunite as adults on opposite sides of a conflict — Vi fighting for peace and Jinx consumed by resentment and mental illness.' }
    ],
    videos: [
      { title: 'Jinx - The Monster You Created', youtubeId: 'fXmAurh012s', description: 'The devastating dinner scene that defines Jinx\'s character arc.' },
      { title: 'Powder to Jinx - Complete Transformation', youtubeId: '4Ps6nV4wiCE', description: 'How an innocent girl became one of animation\'s most tragic characters.' }
    ],
    relatedCharacterSlugs: ['vi-arcane', 'silco', 'caitlyn-arcane'],
    tags: ['tragic', 'complex', 'iconic', 'fan-favorite', 'animated']
  },
  {
    slug: 'vi-arcane',
    name: 'Vi',
    showSlug: 'arcane',
    showTitle: 'Arcane',
    actorSlug: 'hailee-steinfeld',
    actorName: 'Hailee Steinfeld',
    seasonsActive: 'Seasons 1–2',
    characterArc: 'Vi is a fierce, hot-headed fighter from the undercity of Zaun who serves as a protective older sister to Powder. A natural leader with her father Vander\'s sense of justice, Vi channels her anger at Piltover\'s oppression into action — sometimes reckless action. Her impulsive decision to raid a Piltover laboratory sets the show\'s tragic events in motion.\n\nAfter years of imprisonment in Stillwater, Vi emerges into a world that has changed beyond recognition. Her sister Powder has become Jinx, Silco controls the undercity, and the tensions between Zaun and Piltover have only deepened. Vi\'s quest to reconnect with her sister while navigating this new landscape drives the show\'s emotional narrative.\n\nVi\'s relationship with Caitlyn Kiramman — an enforcer from Piltover — challenges her lifelong hatred of the topside elite. Their evolving bond becomes one of the show\'s most celebrated love stories, built on mutual respect, physical chemistry, and a shared commitment to justice. Vi must learn that not all of Piltover is her enemy, just as she must accept that the sister she lost may be beyond saving.',
    keyEpisodes: [
      { title: 'Welcome to the Playground', season: 1, episode: 1, description: 'Vi leads a raid on a Piltover laboratory that sets the show\'s events in motion.' },
      { title: 'When These Walls Come Tumbling Down', season: 1, episode: 3, description: 'Vi is arrested and separated from Powder, creating the central rupture of the series.' },
      { title: 'Everybody Wants to Be My Enemy', season: 1, episode: 5, description: 'Vi escapes prison and teams up with Caitlyn to find her sister.' },
      { title: 'The Monster You Created', season: 1, episode: 9, description: 'Vi confronts Jinx in the devastating dinner scene.' }
    ],
    image: { src: '/images/characters/vi-arcane.jpg', alt: 'Vi from Arcane, voiced by Hailee Steinfeld', attribution: 'Netflix/Riot Games', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/arcane', url: 'https://www.reddit.com/r/arcane/', platform: 'Reddit', description: 'Main Arcane subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'Arcane Wiki - Vi', url: 'https://arcane.fandom.com/wiki/Vi', platform: 'Web', description: 'Vi character wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Vi and Caitlyn Edits', url: 'https://www.tiktok.com/tag/violyn', platform: 'TikTok', description: 'Fan edits of Vi and Caitlyn\'s relationship' }
      ]
    },
    fanHeatIndex: { overall: 90, engagement: 92, socialActivity: 89, memeVelocity: 86, fanArtDensity: 94, fandomLongevity: 89 },
    faqs: [
      { question: 'Who voices Vi in Arcane?', answer: 'Hailee Steinfeld voices Vi in Arcane. Steinfeld is also known for her roles in True Grit, the Pitch Perfect franchise, and as Kate Bishop in Hawkeye.' },
      { question: 'Are Vi and Caitlyn together in Arcane?', answer: 'Vi and Caitlyn develop a romantic relationship across the series. Their love story is one of Arcane\'s most popular elements, and the ship name "Violyn" (or "CaitVi") has a massive following in the fan community.' }
    ],
    videos: [
      { title: 'Vi - Every Fight Scene in Arcane', youtubeId: 'fXmAurh012s', description: 'Vi\'s most impressive combat moments across both seasons.' },
      { title: 'Vi and Caitlyn - Complete Love Story', youtubeId: '4Ps6nV4wiCE', description: 'The full Vi and Caitlyn romance from first meeting to the Season 2 finale.' }
    ],
    relatedCharacterSlugs: ['jinx', 'caitlyn-arcane', 'silco'],
    tags: ['protagonist', 'fighter', 'protective-sibling', 'LGBTQ']
  },
  {
    slug: 'caitlyn-arcane',
    name: 'Caitlyn Kiramman',
    showSlug: 'arcane',
    showTitle: 'Arcane',
    actorSlug: 'katie-leung',
    actorName: 'Katie Leung',
    seasonsActive: 'Seasons 1–2',
    characterArc: 'Caitlyn Kiramman is the daughter of a privileged Piltover council family who joins the enforcers — Piltover\'s law enforcement — out of a genuine desire to protect people. Her idealism and belief in the system set her apart from her corrupt colleagues, but also make her naive about the power structures she serves.\n\nCaitlyn\'s alliance with Vi opens her eyes to the realities of life in the undercity and Piltover\'s complicity in Zaun\'s suffering. Their partnership begins as pragmatic — Vi needs Caitlyn\'s access, Caitlyn needs Vi\'s knowledge — but quickly deepens into mutual respect and romantic attraction. Caitlyn must confront the truth that her comfortable life was built on the exploitation Vi has experienced firsthand.\n\nAcross the series, Caitlyn evolves from a sheltered idealist into a hardened leader. Her marksmanship skills and strategic mind make her a formidable ally, while her compassion keeps her grounded. In Season 2, she takes on greater leadership responsibilities and must make impossible choices about the fate of both cities.',
    keyEpisodes: [
      { title: 'Happy Progress Day!', season: 1, episode: 2, description: 'Caitlyn is established as a young enforcer investigating the explosion at Jayce\'s lab.' },
      { title: 'Everybody Wants to Be My Enemy', season: 1, episode: 5, description: 'Caitlyn teams up with Vi after visiting her in Stillwater prison, beginning their partnership.' },
      { title: 'Oil and Water', season: 1, episode: 7, description: 'Caitlyn and Vi navigate the undercity together, deepening their bond.' }
    ],
    image: { src: '/images/characters/caitlyn-arcane.jpg', alt: 'Caitlyn Kiramman from Arcane, voiced by Katie Leung', attribution: 'Netflix/Riot Games', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/arcane', url: 'https://www.reddit.com/r/arcane/', platform: 'Reddit', description: 'Main Arcane subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'Arcane Wiki - Caitlyn', url: 'https://arcane.fandom.com/wiki/Caitlyn_Kiramman', platform: 'Web', description: 'Caitlyn Kiramman wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 86, engagement: 88, socialActivity: 85, memeVelocity: 82, fanArtDensity: 90, fandomLongevity: 85 },
    faqs: [
      { question: 'Who voices Caitlyn in Arcane?', answer: 'Katie Leung voices Caitlyn Kiramman. Leung is best known for playing Cho Chang in the Harry Potter film series.' },
      { question: 'Is Caitlyn a good character?', answer: 'Caitlyn is portrayed as one of Arcane\'s most morally upright characters. While she comes from privilege, her genuine desire to help people and her willingness to challenge her own assumptions make her a compelling and admired character.' }
    ],
    videos: [
      { title: 'Caitlyn Kiramman - Best Scenes', youtubeId: 'fXmAurh012s', description: 'Caitlyn\'s most memorable moments across Arcane.' },
      { title: 'CaitVi - The Complete Love Story', youtubeId: '4Ps6nV4wiCE', description: 'Every Vi and Caitlyn moment in chronological order.' }
    ],
    relatedCharacterSlugs: ['vi-arcane', 'jinx', 'silco'],
    tags: ['heroine', 'enforcer', 'privileged-awakening', 'LGBTQ']
  }
];

const shogunCharacters = [
  {
    slug: 'john-blackthorne',
    name: 'John Blackthorne',
    showSlug: 'shogun',
    showTitle: 'Shogun',
    actorSlug: 'cosmo-jarvis',
    actorName: 'Cosmo Jarvis',
    seasonsActive: 'Season 1',
    characterArc: 'John Blackthorne is an English navigator who shipwrecks on the coast of Japan in 1600, becoming the first Englishman to set foot on Japanese soil. Initially imprisoned and facing execution, Blackthorne\'s knowledge of European warfare and his potential as a political tool make him valuable to the feudal lord Yoshii Toranaga, who is engaged in a deadly power struggle for control of Japan.\n\nBlackthorne enters Japan with European cultural arrogance, viewing Japanese civilization as inferior. His arc is one of profound cultural transformation — through his immersion in Japanese customs, his study of the language, and his deepening relationships with Lady Mariko and Toranaga, he comes to understand and respect a civilization as complex and sophisticated as anything in Europe. The show uses his outsider perspective to introduce viewers to feudal Japanese society while simultaneously deconstructing colonial assumptions.\n\nBlackthorne\'s romance with Lady Mariko — herself trapped between duty and desire — provides the emotional heart of the series. Their relationship transcends language and culture, but it is ultimately subordinate to the political machinations that surround them. Blackthorne learns that in Japan, individual desire is always secondary to duty, honor, and the larger game being played by men like Toranaga.',
    keyEpisodes: [
      { title: 'Anjin', season: 1, episode: 1, description: 'Blackthorne shipwrecks in Japan and is immediately thrust into a world of unfamiliar customs and lethal politics.' },
      { title: 'Servants of Two Masters', season: 1, episode: 2, description: 'Blackthorne becomes a political pawn as Toranaga and the Council of Regents vie for power.' },
      { title: 'Crimson Sky', season: 1, episode: 9, description: 'Blackthorne\'s loyalty to Toranaga is tested as Mariko makes her fateful decision.' },
      { title: 'A Dream of a Dream', season: 1, episode: 10, description: 'The season finale reshapes Blackthorne\'s understanding of everything he experienced in Japan.' }
    ],
    image: { src: '/images/characters/john-blackthorne.jpg', alt: 'Cosmo Jarvis as John Blackthorne in Shogun', attribution: 'FX/Hulu', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/ShogunTVShow', url: 'https://www.reddit.com/r/ShogunTVShow/', platform: 'Reddit', description: 'Main Shogun TV subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'Shogun Wiki', url: 'https://shogun.fandom.com/', platform: 'Web', description: 'Shogun fan wiki' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 84, engagement: 86, socialActivity: 82, memeVelocity: 75, fanArtDensity: 80, fandomLongevity: 85 },
    faqs: [
      { question: 'Who plays John Blackthorne in Shogun?', answer: 'Cosmo Jarvis plays John Blackthorne (the Anjin) in the 2024 FX/Hulu adaptation of Shogun. The role was previously played by Richard Chamberlain in the 1980 miniseries.' },
      { question: 'Is John Blackthorne based on a real person?', answer: 'Yes, Blackthorne is based on William Adams, an English navigator who arrived in Japan in 1600 and became the first Western samurai. Adams served as an advisor to Tokugawa Ieyasu and was given the title Miura Anjin.' },
      { question: 'Does Blackthorne become a samurai?', answer: 'In the show, Blackthorne is elevated to the status of hatamoto (a direct vassal) by Toranaga, which grants him samurai-like privileges. This mirrors the historical William Adams who was indeed made a samurai by Tokugawa Ieyasu.' }
    ],
    videos: [
      { title: 'Shogun - Official Trailer', youtubeId: 'nHgD0yrKACg', description: 'Official trailer for FX\'s Shogun series.' },
      { title: 'Blackthorne\'s Journey in Japan', youtubeId: 'b0pRyS1dqkU', description: 'John Blackthorne\'s cultural transformation across the series.' }
    ],
    relatedCharacterSlugs: ['toranaga', 'lady-mariko'],
    tags: ['protagonist', 'fish-out-of-water', 'cultural-journey', 'historical']
  },
  {
    slug: 'toranaga',
    name: 'Yoshii Toranaga',
    showSlug: 'shogun',
    showTitle: 'Shogun',
    actorSlug: 'hiroyuki-sanada',
    actorName: 'Hiroyuki Sanada',
    seasonsActive: 'Season 1',
    characterArc: 'Lord Yoshii Toranaga is one of Japan\'s five regents, a brilliant political strategist whose patient, methodical approach to power makes him the most dangerous man in feudal Japan. Based on the historical Tokugawa Ieyasu, Toranaga faces a coalition of enemies determined to destroy him, led by the power-hungry Ishido. Rather than meeting force with force, Toranaga plays a long game of deception, sacrifice, and strategic withdrawal that confounds friends and enemies alike.\n\nToranaga\'s genius is that he makes himself appear weak when he is strongest and desperate when he is most in control. He feigns surrender, sacrifices allies, and even contemplates seppuku — all as calculated moves in a decades-long chess game for supremacy. The other characters, including the audience, spend the entire series trying to determine whether Toranaga is a noble leader defending Japan from tyranny or a master manipulator pursuing power for its own sake.\n\nThe series finale reveals the full scope of Toranaga\'s vision. Every seeming setback, every sacrifice — including Lady Mariko\'s death — was anticipated and incorporated into his master plan. His final victory is as chilling as it is admirable: he has orchestrated everything, and the "dream of a dream" monologue reveals a man who sees history itself as a canvas for his ambition. Hiroyuki Sanada\'s performance makes Toranaga one of television\'s most commanding presences.',
    keyEpisodes: [
      { title: 'Anjin', season: 1, episode: 1, description: 'Toranaga is introduced facing a hostile Council of Regents while secretly plotting his escape from Osaka.' },
      { title: 'Tomorrow Is Tomorrow', season: 1, episode: 5, description: 'Toranaga stages a dramatic political maneuver that appears to be surrender but reveals deeper strategy.' },
      { title: 'Ladies of the Willow World', season: 1, episode: 7, description: 'Toranaga retreats to his home province, and his true strategic patience becomes apparent.' },
      { title: 'A Dream of a Dream', season: 1, episode: 10, description: 'The finale reveals the full scope of Toranaga\'s master plan and his vision for Japan\'s future.' }
    ],
    image: { src: '/images/characters/toranaga.jpg', alt: 'Hiroyuki Sanada as Yoshii Toranaga in Shogun', attribution: 'FX/Hulu', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/ShogunTVShow', url: 'https://www.reddit.com/r/ShogunTVShow/', platform: 'Reddit', description: 'Main Shogun TV subreddit where Toranaga is the most discussed character' }
      ],
      youtubeChannels: [
        { name: 'Toranaga\'s Master Plan Explained', url: 'https://www.youtube.com/results?search_query=toranaga+shogun+master+plan+explained', platform: 'YouTube', description: 'Explanation videos about Toranaga\'s strategy' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Shogun Wiki - Toranaga', url: 'https://shogun.fandom.com/wiki/Yoshii_Toranaga', platform: 'Web', description: 'Toranaga wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 92, engagement: 94, socialActivity: 90, memeVelocity: 85, fanArtDensity: 88, fandomLongevity: 93 },
    faqs: [
      { question: 'Who plays Toranaga in Shogun?', answer: 'Hiroyuki Sanada plays Yoshii Toranaga. Sanada is a legendary Japanese actor known for The Last Samurai, Avengers: Endgame, and John Wick: Chapter 4. He also served as a producer on Shogun, ensuring cultural authenticity.' },
      { question: 'Is Toranaga based on a real person?', answer: 'Yes, Toranaga is based on Tokugawa Ieyasu, who unified Japan and established the Tokugawa shogunate that ruled for over 250 years. The show adapts James Clavell\'s novel, which fictionalizes these historical events.' },
      { question: 'Is Toranaga the villain or hero of Shogun?', answer: 'Toranaga defies simple categorization. He is a brilliant leader whose strategic genius saves his people, but his willingness to sacrifice others — including loyal allies — for his vision makes him morally complex. The show leaves it to the audience to decide.' }
    ],
    videos: [
      { title: 'Toranaga - The Greatest Strategist on TV', youtubeId: 'nHgD0yrKACg', description: 'Analysis of Toranaga\'s political genius throughout Shogun.' },
      { title: 'Hiroyuki Sanada on Playing Toranaga', youtubeId: 'b0pRyS1dqkU', description: 'Hiroyuki Sanada discusses his approach to the role.' }
    ],
    relatedCharacterSlugs: ['john-blackthorne', 'lady-mariko'],
    tags: ['strategist', 'leader', 'morally-gray', 'emmy-winner', 'fan-favorite']
  },
  {
    slug: 'lady-mariko',
    name: 'Lady Toda Mariko',
    showSlug: 'shogun',
    showTitle: 'Shogun',
    actorSlug: 'anna-sawai',
    actorName: 'Anna Sawai',
    seasonsActive: 'Season 1',
    characterArc: 'Lady Toda Mariko is a noblewoman of impeccable breeding and education, fluent in Portuguese and Japanese, who serves as translator between Blackthorne and the Japanese court. She carries the stigma of being the daughter of a man who assassinated the previous Taiko, a shame that has defined her entire life. Her marriage to the brutish Buntaro is loveless, and she has lived in a state of quiet desperation, longing for the honorable death that her culture would grant her but her Christian faith forbids.\n\nMariko is the emotional center of Shogun — a woman trapped between cultures, faiths, and duties. Her growing love for Blackthorne awakens desires she had suppressed, but she understands, more clearly than he does, that their relationship exists within a web of obligations that neither can escape. She teaches Blackthorne to see Japan not as a curiosity but as a civilization worthy of respect, and through her eyes, the audience comes to understand the beauty and cruelty of feudal Japanese life.\n\nMariko\'s death in Episode 9 — a calculated sacrifice that serves Toranaga\'s strategy — is one of television\'s most powerful moments. She walks knowingly into danger, using her death to expose Ishido\'s tyranny and galvanize support for Toranaga. Her sacrifice is both a political act and a personal liberation — she finally achieves the honorable death she always sought, but on her own terms. Anna Sawai\'s Emmy-winning performance makes Mariko unforgettable.',
    keyEpisodes: [
      { title: 'Servants of Two Masters', season: 1, episode: 2, description: 'Mariko is assigned as Blackthorne\'s translator, beginning their relationship and her central role in the story.' },
      { title: 'Broken to the Fist', season: 1, episode: 4, description: 'Mariko reveals the depth of her despair and her desire for an honorable death.' },
      { title: 'Crimson Sky', season: 1, episode: 9, description: 'Mariko sacrifices herself at Osaka Castle, a devastating and politically transformative act.' },
      { title: 'A Dream of a Dream', season: 1, episode: 10, description: 'The aftermath of Mariko\'s death reveals its full strategic and emotional impact.' }
    ],
    image: { src: '/images/characters/lady-mariko.jpg', alt: 'Anna Sawai as Lady Mariko in Shogun', attribution: 'FX/Hulu', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/ShogunTVShow', url: 'https://www.reddit.com/r/ShogunTVShow/', platform: 'Reddit', description: 'Main Shogun TV subreddit with extensive Mariko discussion' }
      ],
      youtubeChannels: [
        { name: 'Mariko\'s Sacrifice Explained', url: 'https://www.youtube.com/results?search_query=lady+mariko+shogun+sacrifice', platform: 'YouTube', description: 'Analysis of Mariko\'s pivotal sacrifice' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Shogun Wiki - Mariko', url: 'https://shogun.fandom.com/wiki/Toda_Mariko', platform: 'Web', description: 'Lady Mariko wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 91, engagement: 93, socialActivity: 89, memeVelocity: 82, fanArtDensity: 90, fandomLongevity: 92 },
    faqs: [
      { question: 'Who plays Lady Mariko in Shogun?', answer: 'Anna Sawai plays Lady Toda Mariko. Sawai won the Emmy for Outstanding Lead Actress in a Drama Series for the role, making history as the first person of Asian descent to win in the category.' },
      { question: 'Does Lady Mariko die in Shogun?', answer: 'Yes. Mariko sacrifices herself in Episode 9 at Osaka Castle. Her death is both a personal release from a life of shame and duty, and a calculated political act that shifts the balance of power in Toranaga\'s favor.' },
      { question: 'Is Lady Mariko based on a real person?', answer: 'Lady Mariko is based on Hosokawa Gracia, a Japanese noblewoman and Christian convert who died during the events leading to the Battle of Sekigahara in 1600. Like Mariko, Gracia\'s death played a role in the political upheaval of the period.' }
    ],
    videos: [
      { title: 'Lady Mariko - The Heart of Shogun', youtubeId: 'nHgD0yrKACg', description: 'Why Lady Mariko is the emotional center of Shogun.' },
      { title: 'Anna Sawai\'s Emmy-Winning Performance', youtubeId: 'b0pRyS1dqkU', description: 'Highlights of Anna Sawai\'s historic performance as Lady Mariko.' }
    ],
    relatedCharacterSlugs: ['john-blackthorne', 'toranaga'],
    tags: ['tragic', 'translator', 'duty-bound', 'emmy-winner', 'fan-favorite']
  }
];

module.exports = { fleabagCharacters, abbottCharacters, arcaneCharacters, shogunCharacters };
