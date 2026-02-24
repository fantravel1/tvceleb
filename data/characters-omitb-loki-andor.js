// Only Murders in the Building, Loki, and Andor Characters
const omitbCharacters = [
  {
    slug: 'charles-haden-savage',
    name: 'Charles-Haden Savage',
    showSlug: 'only-murders',
    showTitle: 'Only Murders in the Building',
    actorSlug: 'steve-martin',
    actorName: 'Steve Martin',
    seasonsActive: 'Seasons 1-4',
    characterArc: 'Charles-Haden Savage is a semi-retired actor best known for starring in the 1990s television procedural Brazzos, a role that once made him a household name but has since faded from public memory. Living alone in the Arconia, a grand apartment building on Manhattan\'s Upper West Side, Charles leads a quiet, somewhat melancholy existence marked by social awkwardness, romantic disappointments, and an inability to move beyond his past glory. When a murder occurs in the building, Charles\'s unlikely friendship with Oliver Putnam and Mabel Mora — formed over a shared obsession with true-crime podcasts — gives him a renewed sense of purpose and connection.\n\nAcross four seasons, Charles evolves from a lonely, emotionally guarded man into someone capable of genuine vulnerability and friendship. His detective instincts, honed from years of playing a TV cop, prove surprisingly useful in real investigations, though his social clumsiness and tendency toward paranoia often complicate matters. Charles\'s romantic life becomes a recurring thread, as he navigates relationships with varying degrees of success while slowly learning to open himself up to others. Steve Martin brings a masterful blend of physical comedy and understated pathos to the role, creating a character who is simultaneously hilarious and deeply poignant.',
    keyEpisodes: [
      { title: 'True Crime', season: 1, episode: 1, description: 'Charles, Oliver, and Mabel bond over their shared true-crime obsession after a death in the Arconia.' },
      { title: 'Who Is Tim Kono?', season: 1, episode: 2, description: 'The trio begins their investigation and podcast, with Charles drawing on his Brazzos experience.' },
      { title: 'The Boy from 6B', season: 1, episode: 7, description: 'A mostly silent episode revealing the perspectives of the building\'s residents, showcasing Charles\'s isolation.' },
      { title: 'Open and Shut', season: 1, episode: 10, description: 'The Season 1 finale reveals the killer and tests the trio\'s friendship as a new murder occurs.' }
    ],
    image: { src: '/images/characters/charles-haden-savage.jpg', alt: 'Steve Martin as Charles-Haden Savage', attribution: 'Hulu', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/OnlyMurdersHulu', url: 'https://www.reddit.com/r/OnlyMurdersHulu/', platform: 'Reddit', description: 'Main subreddit for Only Murders in the Building discussion' }
      ],
      youtubeChannels: [
        { name: 'OMITB Theory Videos', url: 'https://www.youtube.com/results?search_query=only+murders+in+the+building+theories', platform: 'YouTube', description: 'Fan theories and episode breakdowns' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'OMITB Wiki', url: 'https://only-murders-in-the-building.fandom.com/', platform: 'Web', description: 'Comprehensive wiki for Only Murders in the Building' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 82, engagement: 84, socialActivity: 80, memeVelocity: 78, fanArtDensity: 75, fandomLongevity: 82 },
    faqs: [
      { question: 'Who plays Charles-Haden Savage?', answer: 'Steve Martin plays Charles-Haden Savage in Only Murders in the Building. Martin also co-created the series with John Hoffman.' },
      { question: 'What is Brazzos?', answer: 'Brazzos is the fictional 1990s TV detective show that made Charles famous. The show-within-a-show parodies classic network procedurals and is a recurring source of comedy in the series.' },
      { question: 'Is Charles-Haden Savage based on a real person?', answer: 'Charles is not based on a specific real person, but the character draws on the archetype of aging TV actors living off past fame, a world Steve Martin knows well from his decades in entertainment.' }
    ],
    videos: [
      { title: 'Only Murders in the Building - Official Trailer', youtubeId: 'BtVn8kPJBPo', description: 'Official trailer introducing Charles, Oliver, and Mabel\'s crime-solving adventures.' },
      { title: 'Steve Martin\'s Best Moments as Charles', youtubeId: 'K7BsMFx0oHE', description: 'Compilation of Charles-Haden Savage\'s funniest and most touching moments.' }
    ],
    relatedCharacterSlugs: ['oliver-putnam', 'mabel-mora', 'howard-morris'],
    tags: ['protagonist', 'comedy', 'detective', 'actor', 'lovable']
  },
  {
    slug: 'oliver-putnam',
    name: 'Oliver Putnam',
    showSlug: 'only-murders',
    showTitle: 'Only Murders in the Building',
    actorSlug: 'martin-short',
    actorName: 'Martin Short',
    seasonsActive: 'Seasons 1-4',
    characterArc: 'Oliver Putnam is a flamboyant, perpetually optimistic Broadway director whose career has seen better days. Despite a string of catastrophic flops and mounting debts, Oliver maintains an irrepressible enthusiasm and theatrical flair that make him the energetic heart of the investigating trio. His apartment in the Arconia is a monument to faded grandeur, filled with playbills and memories of productions that ranged from the moderately successful to the spectacularly disastrous. Oliver\'s relationship with his son Will is complicated by years of prioritizing his career over family, adding emotional depth beneath his comedic exterior.\n\nOliver approaches the murder investigation — and the resulting podcast — as if he\'s directing the greatest production of his life, bringing dramatic instincts, showmanship, and an occasionally reckless disregard for personal safety to the enterprise. His chemistry with Charles and Mabel creates the show\'s comedic engine, with Oliver\'s bombastic personality bouncing off Charles\'s reserve and Mabel\'s sardonic wit. Martin Short delivers a performance of extraordinary comic energy while finding genuine emotional notes in Oliver\'s loneliness, his desire to be relevant, and his deep love for his son and his beloved bulldog Winnie.',
    keyEpisodes: [
      { title: 'True Crime', season: 1, episode: 1, description: 'Oliver\'s enthusiasm drives the formation of the trio and the decision to start a true-crime podcast.' },
      { title: 'To Protect and Serve', season: 1, episode: 6, description: 'Oliver\'s theatrical approach to investigation leads to a breakthrough but also puts the trio in danger.' },
      { title: 'Performance Review', season: 2, episode: 6, description: 'Oliver directs the building\'s residents in a show, blending his theatrical talents with the investigation.' },
      { title: 'Open and Shut', season: 1, episode: 10, description: 'Oliver\'s podcast reaches its climax as the Season 1 mystery is solved.' }
    ],
    image: { src: '/images/characters/oliver-putnam.jpg', alt: 'Martin Short as Oliver Putnam', attribution: 'Hulu', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/OnlyMurdersHulu', url: 'https://www.reddit.com/r/OnlyMurdersHulu/', platform: 'Reddit', description: 'Main subreddit for Only Murders discussion' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'OMITB Wiki - Oliver', url: 'https://only-murders-in-the-building.fandom.com/wiki/Oliver_Putnam', platform: 'Web', description: 'Wiki page for Oliver Putnam' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 83, engagement: 85, socialActivity: 81, memeVelocity: 82, fanArtDensity: 74, fandomLongevity: 81 },
    faqs: [
      { question: 'Who plays Oliver Putnam?', answer: 'Martin Short plays Oliver Putnam in Only Murders in the Building. Short\'s performance has earned him Emmy nominations and widespread critical praise.' },
      { question: 'Is Oliver Putnam a successful director?', answer: 'Oliver was once a moderately successful Broadway director, but by the start of the series his career has declined significantly, with his most recent productions being financial disasters.' },
      { question: 'What is Oliver\'s dog\'s name?', answer: 'Oliver\'s beloved English Bulldog is named Winnie. The dog becomes an important part of the plot in Season 1 when she is poisoned, motivating Oliver\'s investigation.' }
    ],
    videos: [
      { title: 'Martin Short\'s Best Oliver Putnam Moments', youtubeId: 'HQYqpJoRZxk', description: 'A compilation of Oliver\'s most hilarious and dramatic scenes.' }
    ],
    relatedCharacterSlugs: ['charles-haden-savage', 'mabel-mora', 'howard-morris'],
    tags: ['protagonist', 'comedy', 'director', 'theatrical', 'lovable']
  },
  {
    slug: 'mabel-mora',
    name: 'Mabel Mora',
    showSlug: 'only-murders',
    showTitle: 'Only Murders in the Building',
    actorSlug: 'selena-gomez',
    actorName: 'Selena Gomez',
    seasonsActive: 'Seasons 1-4',
    characterArc: 'Mabel Mora is a young artist and the most personally connected member of the investigating trio, having grown up spending time in the Arconia with her aunt. Unlike Charles and Oliver, who approach the murders with a mixture of excitement and theatrical flair, Mabel\'s involvement is driven by genuine grief and a need for answers — the first victim, Tim Kono, was a childhood friend with whom she shared a complicated history. Mabel\'s sharp intelligence, artistic eye, and emotional depth make her the investigative backbone of the group, even as she struggles with trust issues rooted in past betrayals.\n\nAcross the series, Mabel navigates the tension between her desire for justice and her fear of getting close to people who might hurt her. Her relationships with both older men become surrogate family bonds that help her heal, while her romantic entanglements add layers of complexity and suspicion to each season\'s mystery. Selena Gomez brings a grounded, naturalistic quality to the role that anchors the show\'s more outlandish comedic elements, and her chemistry with Martin and Short creates a dynamic that feels both unlikely and completely authentic.',
    keyEpisodes: [
      { title: 'True Crime', season: 1, episode: 1, description: 'Mabel\'s connection to the first victim is revealed, establishing her personal stakes in the investigation.' },
      { title: 'To Protect and Serve', season: 1, episode: 6, description: 'Mabel\'s past with Tim Kono and their friend group — the Hardy Boys — comes into focus.' },
      { title: 'The Boy from 6B', season: 1, episode: 7, description: 'A silent episode that reveals Mabel\'s emotional isolation and artistic perspective.' },
      { title: 'I Know Who Did It', season: 2, episode: 10, description: 'Mabel\'s detective instincts prove crucial in solving the Season 2 mystery.' }
    ],
    image: { src: '/images/characters/mabel-mora.jpg', alt: 'Selena Gomez as Mabel Mora', attribution: 'Hulu', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/OnlyMurdersHulu', url: 'https://www.reddit.com/r/OnlyMurdersHulu/', platform: 'Reddit', description: 'Main subreddit for Only Murders discussion' }
      ],
      youtubeChannels: [
        { name: 'Mabel Mora Character Analysis', url: 'https://www.youtube.com/results?search_query=mabel+mora+only+murders+analysis', platform: 'YouTube', description: 'Character analysis and theory videos about Mabel' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'OMITB Wiki - Mabel', url: 'https://only-murders-in-the-building.fandom.com/wiki/Mabel_Mora', platform: 'Web', description: 'Wiki page for Mabel Mora' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 84, engagement: 86, socialActivity: 83, memeVelocity: 80, fanArtDensity: 82, fandomLongevity: 80 },
    faqs: [
      { question: 'Who plays Mabel Mora?', answer: 'Selena Gomez plays Mabel Mora in Only Murders in the Building. Gomez also serves as an executive producer on the series.' },
      { question: 'What is Mabel\'s connection to the Arconia?', answer: 'Mabel grew up visiting her aunt\'s apartment in the Arconia and was part of a group of friends called the Hardy Boys who explored the building as children. This history gives her a deep personal connection to the building and its residents.' },
      { question: 'Is Mabel Mora an artist?', answer: 'Yes, Mabel is a talented visual artist. Her artistic skills often contribute to the investigations, and her creative perspective helps the trio see clues that others miss.' }
    ],
    videos: [
      { title: 'Mabel Mora - The Heart of Only Murders', youtubeId: 'BtVn8kPJBPo', description: 'Why Mabel Mora is the emotional anchor of the series.' }
    ],
    relatedCharacterSlugs: ['charles-haden-savage', 'oliver-putnam', 'howard-morris'],
    tags: ['protagonist', 'artist', 'detective', 'young', 'sharp']
  },
  {
    slug: 'howard-morris',
    name: 'Howard Morris',
    showSlug: 'only-murders',
    showTitle: 'Only Murders in the Building',
    actorSlug: 'michael-cyril-creighton',
    actorName: 'Michael Cyril Creighton',
    seasonsActive: 'Seasons 1-4',
    characterArc: 'Howard Morris is a longtime resident of the Arconia and the building\'s unofficial social butterfly — a sensitive, cat-loving board member who knows everyone\'s business and desperately wants to be included in Charles, Oliver, and Mabel\'s investigations. Initially positioned as a quirky background character whose devotion to his cat Evelyn provides comic relief, Howard gradually emerges as one of the show\'s most endearing figures, a man whose need for connection and belonging mirrors the central trio\'s own journey from isolation to friendship.\n\nOver the course of the series, Howard evolves from a suspect and occasional nuisance into a genuine ally and friend to the core group. His theatrical personality, encyclopedic knowledge of Arconia gossip, and surprising bravery in moments of crisis make him an increasingly valuable member of the ensemble. Michael Cyril Creighton brings warmth and comic timing to the role, making Howard someone audiences root for even when he\'s at his most neurotic.',
    keyEpisodes: [
      { title: 'Who Is Tim Kono?', season: 1, episode: 2, description: 'Howard\'s dramatic personality makes him an early suspect as the investigation begins.' },
      { title: 'The Boy from 6B', season: 1, episode: 7, description: 'Howard\'s perspective is revealed in the silent episode, showing his loneliness and desire for connection.' },
      { title: 'Performance Review', season: 2, episode: 6, description: 'Howard participates in Oliver\'s building show, revealing hidden talents and deepening his bond with the trio.' }
    ],
    image: { src: '/images/characters/howard-morris.jpg', alt: 'Michael Cyril Creighton as Howard Morris', attribution: 'Hulu', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/OnlyMurdersHulu', url: 'https://www.reddit.com/r/OnlyMurdersHulu/', platform: 'Reddit', description: 'Howard is a fan-favorite discussed frequently on the subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'OMITB Wiki - Howard', url: 'https://only-murders-in-the-building.fandom.com/wiki/Howard_Morris', platform: 'Web', description: 'Wiki page for Howard Morris' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 72, engagement: 74, socialActivity: 70, memeVelocity: 75, fanArtDensity: 65, fandomLongevity: 72 },
    faqs: [
      { question: 'Who plays Howard Morris?', answer: 'Michael Cyril Creighton plays Howard Morris in Only Murders in the Building. The character has grown from a recurring role to a series regular over the course of the show.' },
      { question: 'What is Howard\'s cat\'s name?', answer: 'Howard\'s beloved cat is named Evelyn. His devotion to Evelyn is a recurring character trait that provides both comedy and genuine emotional moments.' },
      { question: 'Is Howard Morris a suspect?', answer: 'Howard comes under suspicion at various points in the series due to his proximity to the building\'s events and his dramatic behavior, but he consistently proves to be an ally rather than a villain.' }
    ],
    videos: [
      { title: 'Howard Morris Best Moments', youtubeId: 'HQYqpJoRZxk', description: 'Howard\'s funniest and most heartwarming scenes from the series.' }
    ],
    relatedCharacterSlugs: ['charles-haden-savage', 'oliver-putnam', 'mabel-mora'],
    tags: ['supporting', 'comedy', 'fan-favorite', 'cat-lover', 'endearing']
  }
];

const lokiCharacters = [
  {
    slug: 'loki-laufeyson',
    name: 'Loki Laufeyson',
    showSlug: 'loki',
    showTitle: 'Loki',
    actorSlug: 'tom-hiddleston',
    actorName: 'Tom Hiddleston',
    seasonsActive: 'Seasons 1-2',
    characterArc: 'The Loki of this series is not the one who experienced years of growth and ultimately sacrificed himself in Avengers: Infinity War — this is the 2012 variant who escaped with the Tesseract during the Avengers\' time heist in Endgame, still arrogant, still scheming, and still convinced of his own glorious purpose. Captured by the Time Variance Authority, a bureaucratic organization that monitors the Sacred Timeline, Loki is recruited by Agent Mobius to hunt a dangerous variant of himself — Sylvie — and in the process discovers that his entire existence, including every choice he ever made, was predetermined by a figure called He Who Remains.\n\nThis revelation catalyzes the most profound transformation in Loki\'s long MCU journey. Stripped of his power and forced to confront the truth that his villainy was designed rather than chosen, Loki evolves from a self-serving trickster into someone genuinely capable of selflessness. His bond with Sylvie becomes the emotional core of the series, while his friendship with Mobius gives him the stable, trusting relationship he never had with Thor. Season 2 pushes Loki further as he gains the ability to time-slip and ultimately makes the most sacrificial choice imaginable — destroying the Temporal Loom and weaving the timelines together himself, sitting alone on a throne at the end of time to hold the multiverse together. The God of Mischief becomes the God of Stories, choosing an eternity of solitude to give everyone else the gift of free will.',
    keyEpisodes: [
      { title: 'Glorious Purpose', season: 1, episode: 1, description: 'Loki is captured by the TVA and shown the full arc of his life, including his death, forcing him to confront who he truly is.' },
      { title: 'The Nexus Event', season: 1, episode: 4, description: 'Loki and Sylvie\'s connection creates a nexus event, and Loki is pruned to the Void at the End of Time.' },
      { title: 'For All Time. Always.', season: 1, episode: 6, description: 'Loki and Sylvie confront He Who Remains at the Citadel at the End of Time, with Sylvie\'s choice shattering the Sacred Timeline.' },
      { title: 'Glorious Purpose', season: 2, episode: 6, description: 'Loki destroys the Temporal Loom and takes his place as the God of Stories, holding the multiverse together for eternity.' }
    ],
    image: { src: '/images/characters/loki-laufeyson.jpg', alt: 'Tom Hiddleston as Loki', attribution: 'Marvel Studios / Disney+', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/LokiTV', url: 'https://www.reddit.com/r/LokiTV/', platform: 'Reddit', description: 'Dedicated subreddit for the Loki Disney+ series' },
        { name: 'r/marvelstudios', url: 'https://www.reddit.com/r/marvelstudios/', platform: 'Reddit', description: 'Main MCU subreddit with extensive Loki discussion' }
      ],
      youtubeChannels: [
        { name: 'Loki Character Analysis', url: 'https://www.youtube.com/results?search_query=loki+character+analysis+mcu', platform: 'YouTube', description: 'Video essays on Loki\'s evolution from villain to hero' }
      ],
      twitterAccounts: [
        { name: '@LokiOfficial', url: 'https://twitter.com/LokiOfficial', platform: 'Twitter/X', description: 'Official Loki series account' }
      ],
      fanSites: [
        { name: 'Marvel Wiki - Loki', url: 'https://marvelcinematicuniverse.fandom.com/wiki/Loki', platform: 'Web', description: 'Comprehensive MCU wiki page for Loki' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 94, engagement: 96, socialActivity: 93, memeVelocity: 92, fanArtDensity: 95, fandomLongevity: 93 },
    faqs: [
      { question: 'Who plays Loki in the Disney+ series?', answer: 'Tom Hiddleston plays Loki, a role he has inhabited since the first Thor film in 2011. The Disney+ series follows a variant of Loki from an alternate timeline.' },
      { question: 'How does Loki Season 2 end?', answer: 'Loki destroys the Temporal Loom and uses his power to weave the timelines together himself, becoming the God of Stories who sits alone at the end of time holding the multiverse together — the ultimate act of self-sacrifice.' },
      { question: 'Is the Loki in the series the same one from the movies?', answer: 'No, this is a variant of Loki from 2012 who escaped with the Tesseract during the events of Avengers: Endgame. The original Loki died in Avengers: Infinity War.' },
      { question: 'What is Loki\'s glorious purpose?', answer: 'Throughout the series, Loki searches for his "glorious purpose." He ultimately finds it not in ruling or conquering, but in sacrificing himself to preserve free will for all beings across the multiverse.' }
    ],
    videos: [
      { title: 'Loki Official Trailer — Disney+', youtubeId: 'nW948Va-l10', description: 'Official trailer for Marvel Studios\' Loki on Disney+.' },
      { title: 'Loki\'s Sacrifice — Season 2 Finale', youtubeId: 'bT7BjVJAvNs', description: 'The emotional climax of Loki Season 2 as the God of Mischief becomes the God of Stories.' }
    ],
    relatedCharacterSlugs: ['mobius-mmarvel', 'sylvie', 'he-who-remains'],
    tags: ['protagonist', 'anti-hero', 'mcu', 'god', 'iconic', 'complex', 'sacrifice']
  },
  {
    slug: 'mobius-mmarvel',
    name: 'Mobius M. Mobius',
    showSlug: 'loki',
    showTitle: 'Loki',
    actorSlug: 'owen-wilson',
    actorName: 'Owen Wilson',
    seasonsActive: 'Seasons 1-2',
    characterArc: 'Mobius M. Mobius is a TVA analyst and timeline investigator whose calm demeanor and disarming affability mask a deeply curious mind. A devoted company man who believes wholeheartedly in the TVA\'s mission to protect the Sacred Timeline, Mobius recruits the captured Loki variant to help him track down a dangerous fugitive — Sylvie — and in doing so begins a partnership that will fundamentally change both of their lives. Mobius\'s fascination with jet skis, a hobby he\'s never actually experienced due to his existence within the TVA, becomes a poignant symbol of the life that was stolen from him.\n\nAs the series progresses, Mobius discovers the devastating truth that he and all TVA agents are variants themselves — people plucked from the timeline with their memories erased. This revelation transforms Mobius from a loyal bureaucrat into a questioner and eventually a rebel, though his essential decency and warmth remain constant. His friendship with Loki becomes the show\'s most grounding relationship, with Mobius serving as the steady presence that helps Loki believe he can be more than a villain. Owen Wilson brings his signature easygoing charm to the role while finding unexpected emotional depth in Mobius\'s journey of self-discovery.',
    keyEpisodes: [
      { title: 'Glorious Purpose', season: 1, episode: 1, description: 'Mobius recruits Loki at the TVA, beginning their unlikely partnership.' },
      { title: 'The Variant', season: 1, episode: 2, description: 'Mobius and Loki work their first case together, establishing their dynamic of mutual curiosity and distrust.' },
      { title: 'The Nexus Event', season: 1, episode: 4, description: 'Mobius discovers the truth about the TVA and is pruned for questioning the system.' },
      { title: 'Glorious Purpose', season: 2, episode: 6, description: 'Mobius and Loki share a final moment before Loki\'s sacrifice, and Mobius finally gets to see jet skis in the real world.' }
    ],
    image: { src: '/images/characters/mobius-mmarvel.jpg', alt: 'Owen Wilson as Mobius M. Mobius', attribution: 'Marvel Studios / Disney+', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/LokiTV', url: 'https://www.reddit.com/r/LokiTV/', platform: 'Reddit', description: 'Mobius is one of the most discussed characters on the Loki subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'MCU Wiki - Mobius', url: 'https://marvelcinematicuniverse.fandom.com/wiki/Mobius_M._Mobius', platform: 'Web', description: 'Detailed wiki page for Mobius M. Mobius' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 85, engagement: 87, socialActivity: 83, memeVelocity: 86, fanArtDensity: 80, fandomLongevity: 84 },
    faqs: [
      { question: 'Who plays Mobius in Loki?', answer: 'Owen Wilson plays Mobius M. Mobius in the Loki Disney+ series. Wilson\'s casting was widely praised for bringing warmth and humor to the role.' },
      { question: 'Why does Mobius love jet skis?', answer: 'Mobius has a fascination with jet skis despite never having ridden one, as TVA agents exist outside of normal time. His love of jet skis symbolizes the normal human life that was taken from him when he was recruited to the TVA.' },
      { question: 'Is Mobius a variant?', answer: 'Yes, Mobius and all TVA agents are revealed to be variants — people taken from the timeline with their memories wiped. Before the TVA, Mobius had a real life on Earth that he cannot remember.' }
    ],
    videos: [
      { title: 'Mobius and Loki — The Best MCU Friendship', youtubeId: 'nW948Va-l10', description: 'A look at the evolving friendship between Mobius and Loki across two seasons.' }
    ],
    relatedCharacterSlugs: ['loki-laufeyson', 'sylvie', 'he-who-remains'],
    tags: ['supporting', 'fan-favorite', 'bureaucrat', 'loyal', 'jet-ski-lover']
  },
  {
    slug: 'sylvie',
    name: 'Sylvie',
    showSlug: 'loki',
    showTitle: 'Loki',
    actorSlug: 'sophia-di-martino',
    actorName: 'Sophia Di Martino',
    seasonsActive: 'Seasons 1-2',
    characterArc: 'Sylvie is a female variant of Loki who was taken from her timeline as a child by the TVA for causing a nexus event, simply by being different from the Sacred Timeline\'s prescribed path for a Loki. She escaped her captors and spent her entire life on the run through apocalypses, hiding at the end of doomed timelines where her presence wouldn\'t be detected. This lifetime of survival and solitude forged Sylvie into a fierce, self-reliant warrior consumed by a single-minded desire for revenge against the TVA and whoever controls it.\n\nSylvie\'s relationship with Loki is the emotional engine of the series — two versions of the same being who represent different responses to the same fundamental trauma of rejection. Where Loki performs villainy to mask his pain, Sylvie channels hers into righteous fury. Their connection creates a nexus event powerful enough to shake the Sacred Timeline, suggesting that self-love — literal, in this case — is the most powerful force in the multiverse. Sylvie\'s decision to kill He Who Remains at the end of Season 1, despite Loki\'s pleas, is a defining moment that shatters the multiverse and drives the conflict of Season 2. Her eventual reconciliation with Loki and acceptance that she cannot control everything mirrors his own growth.',
    keyEpisodes: [
      { title: 'Lamentis', season: 1, episode: 3, description: 'Loki and Sylvie are stranded on a doomed planet, forced to work together and revealing Sylvie\'s backstory.' },
      { title: 'The Nexus Event', season: 1, episode: 4, description: 'Loki and Sylvie\'s emotional connection creates a nexus event that nearly destroys the TVA.' },
      { title: 'For All Time. Always.', season: 1, episode: 6, description: 'Sylvie kills He Who Remains against Loki\'s wishes, unleashing the multiverse and separating them.' },
      { title: 'Glorious Purpose', season: 2, episode: 6, description: 'Sylvie and Loki reach an understanding as he makes his final sacrifice to save the multiverse.' }
    ],
    image: { src: '/images/characters/sylvie.jpg', alt: 'Sophia Di Martino as Sylvie', attribution: 'Marvel Studios / Disney+', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/LokiTV', url: 'https://www.reddit.com/r/LokiTV/', platform: 'Reddit', description: 'Active discussion about Sylvie\'s character and motivations' }
      ],
      youtubeChannels: [
        { name: 'Sylvie Character Analysis', url: 'https://www.youtube.com/results?search_query=sylvie+loki+character+analysis', platform: 'YouTube', description: 'Video essays exploring Sylvie\'s motivations and relationship with Loki' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'MCU Wiki - Sylvie', url: 'https://marvelcinematicuniverse.fandom.com/wiki/Sylvie', platform: 'Web', description: 'Wiki page for Sylvie' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 86, engagement: 88, socialActivity: 85, memeVelocity: 82, fanArtDensity: 88, fandomLongevity: 84 },
    faqs: [
      { question: 'Who plays Sylvie in Loki?', answer: 'Sophia Di Martino plays Sylvie in the Loki Disney+ series. The character is a female variant of Loki from another timeline.' },
      { question: 'Is Sylvie a Loki variant?', answer: 'Yes, Sylvie is a variant of Loki from another timeline. She was taken by the TVA as a child for deviating from her predetermined path and has been on the run ever since.' },
      { question: 'Why did Sylvie kill He Who Remains?', answer: 'Sylvie killed He Who Remains because she believed no one person should control the fate of the multiverse, even if that meant unleashing dangerous variants of him. Her entire life had been defined by the TVA\'s control, and she refused to let it continue.' }
    ],
    videos: [
      { title: 'Sylvie — The Variant Who Changed Everything', youtubeId: 'bT7BjVJAvNs', description: 'How Sylvie\'s choices shaped the multiverse and the future of the MCU.' }
    ],
    relatedCharacterSlugs: ['loki-laufeyson', 'mobius-mmarvel', 'he-who-remains'],
    tags: ['protagonist', 'variant', 'warrior', 'complex', 'fierce', 'anti-hero']
  },
  {
    slug: 'he-who-remains',
    name: 'He Who Remains / Victor Timely',
    showSlug: 'loki',
    showTitle: 'Loki',
    actorSlug: 'jonathan-majors',
    actorName: 'Jonathan Majors',
    seasonsActive: 'Seasons 1-2',
    characterArc: 'He Who Remains is the enigmatic figure who sits at the Citadel at the End of Time, the architect and sole guardian of the Sacred Timeline. A variant of Kang the Conqueror who won a multiversal war against his own variants, He Who Remains isolated a single timeline — the Sacred Timeline — and created the TVA to prune any branches that might produce new versions of himself. By the time Loki and Sylvie reach him, he is weary, eccentric, and almost relieved at the prospect of being replaced or destroyed. His presentation is deliberately disarming — playful, rambling, eating an apple — but beneath the quirky exterior lies a being of immense power who has controlled reality itself for eons.\n\nIn Season 2, the character appears in a different form as Victor Timely, a 19th-century inventor variant who holds the key to fixing the Temporal Loom. Timely is timid and uncertain, a stark contrast to He Who Remains\' confidence, illustrating how the same person can become vastly different depending on circumstances. Jonathan Majors brought a magnetic, unpredictable energy to both versions of the character, creating a villain who is simultaneously charming and terrifying in his implications for the multiverse.',
    keyEpisodes: [
      { title: 'For All Time. Always.', season: 1, episode: 6, description: 'He Who Remains reveals himself to Loki and Sylvie, explaining the TVA\'s true purpose and offering them an impossible choice.' },
      { title: '1893', season: 2, episode: 3, description: 'Victor Timely is introduced as an inventor in 1893 Chicago, a different variant of the same being.' },
      { title: 'Science/Fiction', season: 2, episode: 5, description: 'The consequences of Victor Timely\'s work on the Temporal Loom threaten to unravel everything.' }
    ],
    image: { src: '/images/characters/he-who-remains.jpg', alt: 'Jonathan Majors as He Who Remains', attribution: 'Marvel Studios / Disney+', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/LokiTV', url: 'https://www.reddit.com/r/LokiTV/', platform: 'Reddit', description: 'Extensive discussion about He Who Remains and his role in the MCU multiverse' },
        { name: 'r/marvelstudios', url: 'https://www.reddit.com/r/marvelstudios/', platform: 'Reddit', description: 'Kang/He Who Remains theories and discussion on the main MCU sub' }
      ],
      youtubeChannels: [
        { name: 'He Who Remains Explained', url: 'https://www.youtube.com/results?search_query=he+who+remains+explained+loki', platform: 'YouTube', description: 'Explainer videos about He Who Remains and his place in the MCU' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'MCU Wiki - He Who Remains', url: 'https://marvelcinematicuniverse.fandom.com/wiki/He_Who_Remains', platform: 'Web', description: 'Comprehensive wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 83, engagement: 85, socialActivity: 82, memeVelocity: 80, fanArtDensity: 78, fandomLongevity: 80 },
    faqs: [
      { question: 'Who plays He Who Remains?', answer: 'Jonathan Majors plays He Who Remains and Victor Timely in the Loki Disney+ series. Majors brought a charismatic, unpredictable energy to the role.' },
      { question: 'Is He Who Remains the same as Kang?', answer: 'He Who Remains is a variant of Kang the Conqueror — specifically, the variant who won the multiversal war and created the Sacred Timeline to prevent other, more dangerous versions of himself from emerging.' },
      { question: 'What happens when He Who Remains dies?', answer: 'When Sylvie kills He Who Remains at the end of Season 1, the Sacred Timeline branches uncontrollably, unleashing infinite variants including potentially dangerous versions of Kang across the multiverse.' }
    ],
    videos: [
      { title: 'He Who Remains Explained — Loki Season 1 Finale', youtubeId: 'nW948Va-l10', description: 'Breaking down the revelation of He Who Remains and what it means for the MCU.' }
    ],
    relatedCharacterSlugs: ['loki-laufeyson', 'sylvie', 'mobius-mmarvel'],
    tags: ['antagonist', 'villain', 'mastermind', 'mcu', 'multiverse', 'complex']
  }
];

const andorCharacters = [
  {
    slug: 'cassian-andor',
    name: 'Cassian Andor',
    showSlug: 'andor',
    showTitle: 'Andor',
    actorSlug: 'diego-luna',
    actorName: 'Diego Luna',
    seasonsActive: 'Season 1',
    characterArc: 'Cassian Andor begins the series as a man with no cause, no loyalty, and no interest in the larger political struggles tearing the galaxy apart. Born Kassa on the planet Kenari and adopted by a woman named Maarva on Ferrix, Cassian is a survivor and a thief, navigating the fringes of Imperial society with street smarts and a healthy distrust of everyone. When a routine search for his sister leads to the accidental killing of two corporate security officers, Cassian is forced to go on the run — a chain of events that brings him into contact with Luthen Rael and the nascent Rebel Alliance.\n\nWhat makes Andor remarkable is its patient, granular exploration of how an ordinary, self-interested person becomes radicalized into a revolutionary. Cassian doesn\'t join the rebellion out of idealism — he\'s recruited, manipulated, imprisoned, and gradually pushed toward commitment through a series of experiences that strip away his neutrality. His time in the Imperial prison on Narkina 5 is the crucible that completes his transformation: witnessing the Empire\'s systematic dehumanization of prisoners forges his anger into purpose. By the season\'s end, Cassian has transformed from a man running from the fight into one running toward it, setting him on the path to the self-sacrificing Rebel intelligence officer audiences met in Rogue One.',
    keyEpisodes: [
      { title: 'Kassa', season: 1, episode: 1, description: 'Cassian\'s desperate search for his sister leads to a fatal encounter that sets the entire plot in motion.' },
      { title: 'Aldhani', season: 1, episode: 4, description: 'Cassian joins a rebel cell for a heist on an Imperial garrison, his first direct action against the Empire.' },
      { title: 'One Way Out', season: 1, episode: 10, description: 'Cassian leads a prison break on Narkina 5 in one of Star Wars\' most electrifying sequences, catalyzing his transformation.' },
      { title: 'Rix Road', season: 1, episode: 12, description: 'Cassian returns to Ferrix for Maarva\'s funeral, where an uprising against the Empire cements his commitment to the rebellion.' }
    ],
    image: { src: '/images/characters/cassian-andor.jpg', alt: 'Diego Luna as Cassian Andor', attribution: 'Lucasfilm / Disney+', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/andor', url: 'https://www.reddit.com/r/andor/', platform: 'Reddit', description: 'Dedicated subreddit for the Andor series' },
        { name: 'r/StarWars', url: 'https://www.reddit.com/r/StarWars/', platform: 'Reddit', description: 'Andor is widely discussed as one of the best Star Wars shows' }
      ],
      youtubeChannels: [
        { name: 'Andor Character Analysis', url: 'https://www.youtube.com/results?search_query=cassian+andor+character+analysis', platform: 'YouTube', description: 'Video essays on Cassian\'s radicalization and character arc' }
      ],
      twitterAccounts: [
        { name: '@starwars', url: 'https://twitter.com/starwars', platform: 'Twitter/X', description: 'Official Star Wars account with Andor content' }
      ],
      fanSites: [
        { name: 'Wookieepedia - Cassian', url: 'https://starwars.fandom.com/wiki/Cassian_Jeron_Andor', platform: 'Web', description: 'Comprehensive Star Wars wiki page for Cassian Andor' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 87, engagement: 89, socialActivity: 85, memeVelocity: 80, fanArtDensity: 84, fandomLongevity: 88 },
    faqs: [
      { question: 'Who plays Cassian Andor?', answer: 'Diego Luna plays Cassian Andor, reprising the role he originated in the 2016 film Rogue One: A Star Wars Story. Luna also serves as an executive producer on the series.' },
      { question: 'Is Andor a prequel to Rogue One?', answer: 'Yes, Andor takes place approximately five years before the events of Rogue One, chronicling how Cassian Andor transformed from a self-interested thief into a dedicated Rebel intelligence officer.' },
      { question: 'What happens to Cassian Andor?', answer: 'In Rogue One, Cassian sacrifices his life alongside Jyn Erso to transmit the Death Star plans to the Rebel Alliance. The Andor series explores the journey that led him to become someone capable of that ultimate sacrifice.' }
    ],
    videos: [
      { title: 'Andor Official Trailer — Disney+', youtubeId: 'cKOegEuCcfw', description: 'Official trailer for Andor on Disney+.' },
      { title: 'Cassian Andor - The Making of a Rebel', youtubeId: 'x0kSBTx2OOA', description: 'How Andor chronicles the radicalization of an ordinary man into a revolutionary.' }
    ],
    relatedCharacterSlugs: ['luthen-rael', 'mon-mothma', 'dedra-meero'],
    tags: ['protagonist', 'rebel', 'star-wars', 'complex', 'transformation', 'spy']
  },
  {
    slug: 'luthen-rael',
    name: 'Luthen Rael',
    showSlug: 'andor',
    showTitle: 'Andor',
    actorSlug: 'stellan-skarsgard',
    actorName: 'Stellan Skarsgård',
    seasonsActive: 'Season 1',
    characterArc: 'Luthen Rael operates a high-end antiquities gallery on Coruscant as his public cover, but in secret he is one of the most important architects of the Rebel Alliance — a spymaster who recruits, funds, and coordinates rebel cells across the galaxy while maintaining the appearance of a wealthy, politically neutral art dealer. Luthen is a man who has sacrificed everything for the cause: his comfort, his relationships, his morality, and increasingly his humanity. He manipulates the people around him with ruthless efficiency, viewing every person as a potential asset or liability in the larger war against the Empire.\n\nStellan Skarsgård delivers what many consider the performance of his career in the role, bringing gravitas and barely contained fury to a character who embodies the moral cost of resistance. Luthen\'s monologue to Lonni Jung about what he has sacrificed — "I\'ve made my mind a sunless space. I share my dreams with ghosts" — is widely regarded as one of the greatest scenes in Star Wars history. His willingness to sacrifice innocent people, including potentially Cassian himself, raises uncomfortable questions about whether the methods of revolution can be separated from the ideals that inspire it. Luthen is not a hero in any traditional sense; he is a necessary monster, and the tragedy of his character is that he knows it.',
    keyEpisodes: [
      { title: 'That Would Be Me', season: 1, episode: 3, description: 'Luthen reveals himself to Cassian and recruits him for the Aldhani mission, demonstrating his manipulative skills.' },
      { title: 'Aldhani', season: 1, episode: 4, description: 'Luthen orchestrates the heist on the Imperial garrison, putting multiple lives at risk for the cause.' },
      { title: 'One Way Out', season: 1, episode: 10, description: 'Luthen\'s monologue about sacrifice to ISB mole Lonni Jung is the defining scene of the series.' },
      { title: 'Rix Road', season: 1, episode: 12, description: 'Luthen arrives on Ferrix planning to silence Cassian but witnesses the uprising that changes his calculation.' }
    ],
    image: { src: '/images/characters/luthen-rael.jpg', alt: 'Stellan Skarsgård as Luthen Rael', attribution: 'Lucasfilm / Disney+', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/andor', url: 'https://www.reddit.com/r/andor/', platform: 'Reddit', description: 'Luthen is widely discussed as one of the best new Star Wars characters' }
      ],
      youtubeChannels: [
        { name: 'Luthen Rael Monologue Analysis', url: 'https://www.youtube.com/results?search_query=luthen+rael+monologue+sacrifice', platform: 'YouTube', description: 'Analysis of Luthen\'s iconic monologue about sacrifice' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Wookieepedia - Luthen', url: 'https://starwars.fandom.com/wiki/Luthen_Rael', platform: 'Web', description: 'Wiki page for Luthen Rael' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 90, engagement: 92, socialActivity: 88, memeVelocity: 85, fanArtDensity: 86, fandomLongevity: 89 },
    faqs: [
      { question: 'Who plays Luthen Rael?', answer: 'Stellan Skarsgård plays Luthen Rael in Andor. Many critics consider it the finest performance of Skarsgård\'s distinguished career.' },
      { question: 'What is Luthen\'s famous monologue?', answer: 'Luthen\'s monologue to ISB spy Lonni Jung in Episode 10 details everything he has sacrificed for the rebellion: "I burn my decency for someone else\'s future. I burn my life to make a sunrise that I know I\'ll never see." It is widely regarded as one of the greatest scenes in Star Wars.' },
      { question: 'Is Luthen Rael in Rogue One?', answer: 'No, Luthen Rael does not appear in Rogue One and was created for the Andor series. His fate between Andor and the events of Rogue One has not yet been revealed.' }
    ],
    videos: [
      { title: 'Luthen Rael\'s Sacrifice Monologue', youtubeId: 'cKOegEuCcfw', description: 'The full monologue scene that many consider the best moment in Star Wars television.' },
      { title: 'Stellan Skarsgård on Playing Luthen Rael', youtubeId: 'x0kSBTx2OOA', description: 'Interview with Skarsgård about the complexity of playing a moral anti-hero.' }
    ],
    relatedCharacterSlugs: ['cassian-andor', 'mon-mothma', 'dedra-meero'],
    tags: ['anti-hero', 'spymaster', 'star-wars', 'complex', 'iconic', 'morally-grey']
  },
  {
    slug: 'mon-mothma',
    name: 'Mon Mothma',
    showSlug: 'andor',
    showTitle: 'Andor',
    actorSlug: 'genevieve-oreilly',
    actorName: 'Genevieve O\'Reilly',
    seasonsActive: 'Season 1',
    characterArc: 'Mon Mothma is a senator from Chandrila who publicly advocates for diplomacy and restraint while secretly funding and supporting the nascent Rebel Alliance. Her storyline in Andor provides the political counterpoint to the ground-level espionage and action, depicting the extraordinary difficulty of maintaining a double life at the highest levels of Imperial governance. Mon Mothma must navigate Senate politics, manage her increasingly strained marriage, protect her teenage daughter from suspicion, and channel funds to the rebellion — all while Imperial surveillance tightens around her.\n\nGenevieve O\'Reilly, who has played Mon Mothma across multiple Star Wars productions since Revenge of the Sith, delivers a nuanced performance that transforms a character previously seen primarily as a stoic leader into a fully realized human being trapped in an impossible situation. Her scenes crackle with tension as every conversation becomes a potential minefield, every dinner party a chance to be exposed. Mon Mothma\'s willingness to compromise — including potentially involving a morally questionable Chandrilan banker and even considering offering her daughter in a political marriage arrangement — demonstrates how the fight against tyranny can corrupt even those with the purest intentions.',
    keyEpisodes: [
      { title: 'Announcement', season: 1, episode: 5, description: 'Mon Mothma makes a public speech in the Senate while secretly coordinating rebel funding through Luthen.' },
      { title: 'Narkina 5', season: 1, episode: 8, description: 'Mon Mothma\'s financial troubles deepen as she struggles to fund the rebellion without being detected by the ISB.' },
      { title: 'Daughters of Ferrix', season: 1, episode: 11, description: 'Mon Mothma faces an agonizing choice about her daughter\'s future to maintain her cover and fund the rebellion.' },
      { title: 'Rix Road', season: 1, episode: 12, description: 'The season finale sees Mon Mothma navigating the consequences of her increasingly dangerous double life.' }
    ],
    image: { src: '/images/characters/mon-mothma.jpg', alt: 'Genevieve O\'Reilly as Mon Mothma', attribution: 'Lucasfilm / Disney+', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/andor', url: 'https://www.reddit.com/r/andor/', platform: 'Reddit', description: 'Mon Mothma\'s political storyline is widely praised on the subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'Wookieepedia - Mon Mothma', url: 'https://starwars.fandom.com/wiki/Mon_Mothma', platform: 'Web', description: 'Comprehensive wiki page for Mon Mothma' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 82, engagement: 84, socialActivity: 80, memeVelocity: 75, fanArtDensity: 78, fandomLongevity: 84 },
    faqs: [
      { question: 'Who plays Mon Mothma in Andor?', answer: 'Genevieve O\'Reilly plays Mon Mothma in Andor. She has portrayed the character across multiple Star Wars projects, including Revenge of the Sith and Rogue One.' },
      { question: 'Who is Mon Mothma in Star Wars?', answer: 'Mon Mothma is a senator from Chandrila who becomes one of the founding leaders of the Rebel Alliance. In the original trilogy, she appears as the leader briefing the Rebels before the Battle of Endor in Return of the Jedi.' },
      { question: 'What is Mon Mothma\'s role in the rebellion?', answer: 'Mon Mothma serves as the political and financial backbone of the early rebellion, using her position in the Imperial Senate to secretly fund and coordinate rebel activities while maintaining plausible deniability.' }
    ],
    videos: [
      { title: 'Mon Mothma - The Senator Behind the Rebellion', youtubeId: 'cKOegEuCcfw', description: 'How Andor transformed Mon Mothma from a minor character into one of Star Wars\' most compelling figures.' }
    ],
    relatedCharacterSlugs: ['cassian-andor', 'luthen-rael', 'dedra-meero'],
    tags: ['protagonist', 'politician', 'star-wars', 'rebel-leader', 'complex', 'diplomat']
  },
  {
    slug: 'dedra-meero',
    name: 'Dedra Meero',
    showSlug: 'andor',
    showTitle: 'Andor',
    actorSlug: 'denise-gough',
    actorName: 'Denise Gough',
    seasonsActive: 'Season 1',
    characterArc: 'Dedra Meero is an ambitious Imperial Security Bureau supervisor who becomes the primary antagonist of Andor\'s first season — not through villainy or cruelty, but through competence, determination, and an unwavering belief in the system she serves. In a galaxy where most Imperial officers are portrayed as incompetent or cartoonishly evil, Dedra stands out as genuinely brilliant: she is the only person in the ISB who recognizes that disparate rebel incidents across the galaxy are connected, and her methodical pursuit of this theory drives her into direct conflict with her male colleagues and the ISB\'s bureaucratic inertia.\n\nWhat makes Dedra fascinating and deeply unsettling is that she is essentially the protagonist of her own story — a talented woman fighting against institutional sexism and bureaucratic obstruction to do her job well. The audience might even root for her if her job weren\'t hunting down freedom fighters. Denise Gough plays Dedra with controlled intensity, rarely raising her voice but projecting menace through sheer focus and intelligence. Her willingness to use torture and intimidation when necessary reveals the moral bankruptcy beneath her professional polish. Dedra represents Andor\'s most provocative argument: that authoritarian systems don\'t need monsters to function — they just need ambitious, capable people who choose not to question the system they serve.',
    keyEpisodes: [
      { title: 'Announcement', season: 1, episode: 5, description: 'Dedra fights for control of an ISB investigation, demonstrating her intelligence and ambition against dismissive male colleagues.' },
      { title: 'The Eye', season: 1, episode: 6, description: 'The Aldhani heist confirms Dedra\'s theory about coordinated rebel activity, vindicating her analysis.' },
      { title: 'Narkina 5', season: 1, episode: 8, description: 'Dedra interrogates Bix Caleen with ruthless efficiency, revealing the extent of her methods.' },
      { title: 'Rix Road', season: 1, episode: 12, description: 'Dedra\'s presence at the Ferrix uprising puts her face-to-face with the rebellion she has been tracking.' }
    ],
    image: { src: '/images/characters/dedra-meero.jpg', alt: 'Denise Gough as Dedra Meero', attribution: 'Lucasfilm / Disney+', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/andor', url: 'https://www.reddit.com/r/andor/', platform: 'Reddit', description: 'Dedra is a highly discussed character on the Andor subreddit for her moral complexity' }
      ],
      youtubeChannels: [
        { name: 'Dedra Meero Analysis', url: 'https://www.youtube.com/results?search_query=dedra+meero+andor+analysis', platform: 'YouTube', description: 'Character analysis exploring why Dedra is such an effective antagonist' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Wookieepedia - Dedra', url: 'https://starwars.fandom.com/wiki/Dedra_Meero', platform: 'Web', description: 'Wiki page for Dedra Meero' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 84, engagement: 86, socialActivity: 82, memeVelocity: 78, fanArtDensity: 80, fandomLongevity: 83 },
    faqs: [
      { question: 'Who plays Dedra Meero?', answer: 'Denise Gough plays Dedra Meero in Andor. Gough is an Olivier Award-winning stage actress who brought her theater-honed intensity to the role.' },
      { question: 'Is Dedra Meero a villain?', answer: 'Dedra is the primary antagonist of Andor Season 1, but the show presents her as a complex, competent professional rather than a one-dimensional villain. She genuinely believes in the Imperial system and excels within it, making her a more disturbing antagonist than a typical Star Wars villain.' },
      { question: 'Does Dedra Meero appear in Rogue One?', answer: 'No, Dedra Meero was created for the Andor series and does not appear in Rogue One. Her fate in the years between Andor and Rogue One has not yet been revealed.' }
    ],
    videos: [
      { title: 'Dedra Meero - The Empire\'s Best Villain', youtubeId: 'cKOegEuCcfw', description: 'Why Dedra Meero is one of the most compelling antagonists in Star Wars history.' }
    ],
    relatedCharacterSlugs: ['cassian-andor', 'luthen-rael', 'mon-mothma'],
    tags: ['antagonist', 'star-wars', 'imperial', 'intelligent', 'complex', 'ambitious']
  }
];

module.exports = { omitbCharacters, lokiCharacters, andorCharacters };
