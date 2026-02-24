// Dexter and The Walking Dead Characters
const dexterCharacters = [
  {
    slug: 'dexter-morgan',
    name: 'Dexter Morgan',
    showSlug: 'dexter',
    showTitle: 'Dexter',
    actorSlug: 'michael-c-hall',
    actorName: 'Michael C. Hall',
    seasonsActive: 'Seasons 1-8',
    characterArc: 'Dexter Morgan is a blood spatter analyst for the Miami Metro Police Department who leads a secret double life as a serial killer. Adopted by police officer Harry Morgan after being found as a toddler sitting in a shipping container beside his mother\'s dismembered body, Dexter was raised with a strict moral code — "The Code of Harry" — that channels his homicidal urges toward those who have escaped justice. By day, Dexter is a meticulous forensic specialist whose expertise helps solve murders; by night, he is a methodical predator who stalks, captures, and kills murderers who have slipped through the cracks of the legal system. His carefully constructed facade of normalcy — complete with a girlfriend, stepchildren, and workplace friendships — masks an emotional void that Dexter himself describes as an inability to feel genuine human connection.\n\nOver eight seasons, Dexter\'s journey becomes a profound exploration of whether a monster can become a man. His relationship with Rita Bennett evolves from a convenient cover story into something approaching genuine love, and the birth of his son Harrison forces Dexter to confront what kind of legacy he is leaving. The murder of Rita by the Trinity Killer at the end of Season 4 marks a devastating turning point — proof that Dexter\'s dark passenger endangers everyone he loves. Subsequent seasons see Dexter grappling with faith, brotherhood, and increasingly dangerous entanglements, culminating in the death of his sister Debra. The series finale sees Dexter faking his death and exiling himself to a life of isolation as a lumberjack in Oregon, a controversial ending that was later revisited in the revival series Dexter: New Blood.',
    keyEpisodes: [
      { title: 'Dexter', season: 1, episode: 1, description: 'The pilot introduces Dexter\'s dual life, his code, and the Ice Truck Killer case that will reveal his origins.' },
      { title: 'Born Free', season: 1, episode: 12, description: 'Dexter discovers the Ice Truck Killer is his biological brother Brian Moser and must choose between blood and code.' },
      { title: 'The Getaway', season: 4, episode: 12, description: 'The devastating Season 4 finale where Dexter discovers Rita murdered by the Trinity Killer, mirroring his own childhood trauma.' },
      { title: 'Remember the Monsters?', season: 8, episode: 12, description: 'The series finale where Debra dies, Dexter dumps her body at sea, and fakes his own death to live in self-imposed exile.' }
    ],
    image: { src: '/images/characters/dexter-morgan.jpg', alt: 'Michael C. Hall as Dexter Morgan', attribution: 'Showtime', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/Dexter', url: 'https://www.reddit.com/r/Dexter/', platform: 'Reddit', description: 'Main Dexter subreddit with extensive character analysis and discussion' }
      ],
      youtubeChannels: [
        { name: 'Dexter Character Analysis', url: 'https://www.youtube.com/results?search_query=dexter+morgan+character+analysis', platform: 'YouTube', description: 'Video essays exploring Dexter Morgan\'s psychology and moral code' }
      ],
      twitterAccounts: [
        { name: '@SHO_Dexter', url: 'https://twitter.com/search?q=dexter+morgan', platform: 'Twitter/X', description: 'Official Dexter account and fan discussions' }
      ],
      fanSites: [
        { name: 'Dexter Wiki', url: 'https://dexter.fandom.com/', platform: 'Web', description: 'Comprehensive Dexter wiki on Fandom' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 92, engagement: 94, socialActivity: 90, memeVelocity: 88, fanArtDensity: 85, fandomLongevity: 93 },
    faqs: [
      { question: 'Who plays Dexter Morgan?', answer: 'Michael C. Hall plays Dexter Morgan throughout all eight seasons of the original series and in the revival Dexter: New Blood. Hall\'s portrayal earned him a Golden Globe Award and multiple Emmy and SAG nominations.' },
      { question: 'What is Dexter\'s code?', answer: 'The Code of Harry is a set of rules created by Dexter\'s adoptive father Harry Morgan to channel Dexter\'s homicidal urges. The primary rules are: never get caught, never kill an innocent person, and always be sure of the target\'s guilt before acting.' },
      { question: 'How does Dexter end?', answer: 'In the original series finale, Dexter fakes his death after his sister Debra dies from complications of a gunshot wound. He dumps her body at sea and is last seen living in isolation as a lumberjack in Oregon. The revival Dexter: New Blood provides a different conclusion.' },
      { question: 'Is Dexter Morgan a psychopath or sociopath?', answer: 'Dexter describes himself as a psychopath who lacks the ability to feel emotions, but the series gradually reveals this self-assessment may be inaccurate. Over eight seasons, Dexter demonstrates genuine love for his son Harrison, grief over losses, and moral growth that suggest a more complex psychological picture.' }
    ],
    videos: [
      { title: 'Dexter - Tonight\'s the Night', youtubeId: 'YQeUmSD1c3g', description: 'Iconic opening sequence showcasing Dexter\'s morning routine as a metaphor for his hidden violence.' },
      { title: 'Dexter Morgan - The Dark Passenger Explained', youtubeId: 'kN7Qd2fGzWo', description: 'Analysis of Dexter\'s inner darkness and how the show explores the nature of evil.' }
    ],
    relatedCharacterSlugs: ['debra-morgan', 'rita-bennett', 'trinity-killer'],
    tags: ['protagonist', 'anti-hero', 'serial-killer', 'iconic', 'complex', 'dark']
  },
  {
    slug: 'debra-morgan',
    name: 'Debra Morgan',
    showSlug: 'dexter',
    showTitle: 'Dexter',
    actorSlug: 'jennifer-carpenter',
    actorName: 'Jennifer Carpenter',
    seasonsActive: 'Seasons 1-8',
    characterArc: 'Debra Morgan is Dexter\'s adoptive sister and a detective with the Miami Metro Police Department whose fierce determination and profane candor make her one of the show\'s most compelling characters. Raised alongside Dexter by Harry Morgan, Debra spent her life seeking the approval of a father who secretly devoted most of his attention to managing Dexter\'s dark urges. This dynamic left Debra with deep insecurities masked by bravado, a string of disastrous romantic relationships, and an unshakeable loyalty to her brother. Her career trajectory from vice detective to homicide detective to lieutenant mirrors her personal growth, as she transforms from someone desperate for validation into a capable leader in her own right.\n\nThe discovery of Dexter\'s true nature in Season 7 becomes the defining crisis of Debra\'s life. Her world shatters as she realizes the brother she idolized is a serial killer, and her subsequent struggle to reconcile her love for Dexter with her duty as a law enforcement officer drives the final seasons. Debra\'s trajectory becomes increasingly tragic as she descends into alcoholism, depression, and moral compromise — even killing an innocent person to protect Dexter. Her death in the series finale, from complications after being shot by Oliver Saxon, provides the catalyst for Dexter\'s decision to exile himself from the world. Debra\'s arc stands as a devastating portrait of collateral damage — the cost of loving someone who lives in darkness.',
    keyEpisodes: [
      { title: 'Born Free', season: 1, episode: 12, description: 'Debra is kidnapped by the Ice Truck Killer and nearly killed, an event that haunts her for years afterward.' },
      { title: 'Are You...?', season: 7, episode: 1, description: 'Debra witnesses Dexter killing Travis Marshall, shattering her understanding of her brother and changing everything.' },
      { title: 'Do You See What I See?', season: 7, episode: 12, description: 'Debra shoots Captain LaGuerta to protect Dexter, crossing a moral line from which she can never return.' },
      { title: 'Remember the Monsters?', season: 8, episode: 12, description: 'Debra dies from a blood clot after being shot, and Dexter takes her body to sea for a private burial.' }
    ],
    image: { src: '/images/characters/debra-morgan.jpg', alt: 'Jennifer Carpenter as Debra Morgan', attribution: 'Showtime', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/Dexter', url: 'https://www.reddit.com/r/Dexter/', platform: 'Reddit', description: 'Main Dexter subreddit with active Debra discussion threads' }
      ],
      youtubeChannels: [
        { name: 'Debra Morgan Analysis', url: 'https://www.youtube.com/results?search_query=debra+morgan+dexter+analysis', platform: 'YouTube', description: 'Character analysis videos exploring Debra\'s tragic arc' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Dexter Wiki - Debra', url: 'https://dexter.fandom.com/wiki/Debra_Morgan', platform: 'Web', description: 'Detailed wiki page for Debra Morgan' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 85, engagement: 87, socialActivity: 82, memeVelocity: 80, fanArtDensity: 78, fandomLongevity: 86 },
    faqs: [
      { question: 'Who plays Debra Morgan?', answer: 'Jennifer Carpenter plays Debra Morgan in all eight seasons of Dexter. Carpenter was married to co-star Michael C. Hall from 2008 to 2011.' },
      { question: 'Does Debra find out about Dexter?', answer: 'Yes, Debra discovers Dexter\'s secret at the end of Season 6 when she walks in on him killing Travis Marshall in a church. This revelation drives the plot of the final two seasons.' },
      { question: 'Does Debra Morgan die?', answer: 'Yes, Debra dies in the series finale after being shot by Oliver Saxon. She suffers a blood clot that leaves her brain dead, and Dexter disconnects her life support and buries her at sea.' }
    ],
    videos: [
      { title: 'Debra Morgan - The Tragic Hero of Dexter', youtubeId: 'vM3Rp4T8xKo', description: 'Video essay on why Debra Morgan is the true tragic figure of the series.' },
      { title: 'Debra Discovers Dexter\'s Secret', youtubeId: 'hQ5N7r2xP0w', description: 'The pivotal scene where Debra catches Dexter in the act.' }
    ],
    relatedCharacterSlugs: ['dexter-morgan', 'rita-bennett', 'sergeant-doakes'],
    tags: ['protagonist', 'detective', 'tragic', 'loyal', 'fierce']
  },
  {
    slug: 'rita-bennett',
    name: 'Rita Bennett',
    showSlug: 'dexter',
    showTitle: 'Dexter',
    actorSlug: 'julie-benz',
    actorName: 'Julie Benz',
    seasonsActive: 'Seasons 1-4',
    characterArc: 'Rita Bennett begins as a vulnerable single mother recovering from an abusive marriage to Paul, a drug addict serving time in prison. Her relationship with Dexter starts as a mutual convenience — she provides him with a cover of normalcy, and he offers the non-threatening companionship she needs while healing from trauma. Initially timid and damaged, Rita gradually rebuilds her confidence and self-worth, transforming into a stronger, more assertive woman who demands honesty and respect from those around her. Her journey from victim to survivor is one of the show\'s most grounded character arcs.\n\nRita\'s marriage to Dexter and the birth of their son Harrison represent Dexter\'s closest approach to genuine human happiness, making her death at the hands of the Trinity Killer in the Season 4 finale one of television\'s most shocking moments. Found dead in a bathtub of blood with baby Harrison sitting on the bathroom floor — an image that deliberately mirrors Dexter\'s own childhood trauma — Rita\'s murder is the show\'s emotional ground zero. Her death proves that Dexter\'s selfish pursuit of the Trinity Killer, prioritizing his dark passenger over his family, has fatal consequences for those he claims to love.',
    keyEpisodes: [
      { title: 'Dexter', season: 1, episode: 1, description: 'Rita is introduced as Dexter\'s girlfriend, a shy abuse survivor who provides his mask of normalcy.' },
      { title: 'Do You Take Dexter Morgan?', season: 3, episode: 12, description: 'Rita and Dexter get married, marking the peak of Dexter\'s attempt at a normal life.' },
      { title: 'The Getaway', season: 4, episode: 12, description: 'Rita is found murdered by the Trinity Killer, one of the most devastating deaths in television history.' }
    ],
    image: { src: '/images/characters/rita-bennett.jpg', alt: 'Julie Benz as Rita Bennett', attribution: 'Showtime', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/Dexter', url: 'https://www.reddit.com/r/Dexter/', platform: 'Reddit', description: 'Discussions about Rita\'s impact on Dexter and the show\'s emotional core' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'Dexter Wiki - Rita', url: 'https://dexter.fandom.com/wiki/Rita_Bennett', platform: 'Web', description: 'Detailed wiki page for Rita Bennett' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 78, engagement: 80, socialActivity: 75, memeVelocity: 82, fanArtDensity: 70, fandomLongevity: 80 },
    faqs: [
      { question: 'Who plays Rita in Dexter?', answer: 'Julie Benz plays Rita Bennett in Dexter Seasons 1-4. Her death in the Season 4 finale is considered one of the most shocking moments in television history.' },
      { question: 'How does Rita die in Dexter?', answer: 'Rita is murdered by Arthur Mitchell, the Trinity Killer (played by John Lithgow), in the Season 4 finale. Dexter arrives home to find her dead in the bathtub with their infant son Harrison sitting in her blood.' },
      { question: 'Why was Rita killed off?', answer: 'Showrunner Clyde Phillips has stated that Rita\'s death was planned to show the devastating real-world consequences of Dexter\'s double life. It demonstrated that his obsession with killing ultimately destroys the people closest to him.' }
    ],
    videos: [
      { title: 'Rita Bennett\'s Death - The Scene That Changed Dexter', youtubeId: 'n3KzQM8oGjs', description: 'Analysis of the devastating Season 4 finale and its impact on the series.' }
    ],
    relatedCharacterSlugs: ['dexter-morgan', 'trinity-killer', 'debra-morgan'],
    tags: ['supporting', 'tragic', 'mother', 'victim', 'heart-of-the-show']
  },
  {
    slug: 'sergeant-doakes',
    name: 'Sergeant James Doakes',
    showSlug: 'dexter',
    showTitle: 'Dexter',
    actorSlug: 'erik-king',
    actorName: 'Erik King',
    seasonsActive: 'Seasons 1-2',
    characterArc: 'Sergeant James Doakes is a Miami Metro Homicide detective and the only person in Dexter\'s professional life who instinctively senses that something is deeply wrong with him. A decorated former Special Forces operative who served in covert operations, Doakes carries his own psychological scars from his violent past. His aggression and confrontational nature make him an outcast among his more easygoing colleagues, but his instincts about Dexter prove to be devastatingly accurate. From their first interaction, Doakes treats Dexter with open hostility and suspicion, famously telling him "I\'m watching you" — a catchphrase that became iconic among fans.\n\nDoakes\'s relentless pursuit of Dexter comes to a head in Season 2 when he discovers evidence of Dexter\'s kills and follows him, ultimately getting captured and imprisoned in a remote cabin in the Everglades. Doakes becomes the only character to directly confront Dexter about his killings and survive long enough to understand the full scope of what he is. His death — killed by Lila West, who blows up the cabin to protect Dexter — is tragic precisely because Doakes was right about everything. He was the one honest cop who saw through Dexter\'s mask, and his elimination ensures that Dexter\'s secret remains safe for years to come. Doakes has become a fan-favorite character whose "Surprise, motherfucker!" line spawned one of the internet\'s most enduring memes.',
    keyEpisodes: [
      { title: 'Dexter', season: 1, episode: 1, description: 'Doakes\'s antagonistic relationship with Dexter is established from the very first episode.' },
      { title: 'There\'s Something About Harry', season: 2, episode: 10, description: 'Doakes discovers the truth about Dexter and confronts him in the cabin in the Everglades.' },
      { title: 'The British Invasion', season: 2, episode: 12, description: 'Doakes is killed when Lila blows up the cabin, framing him as the Bay Harbor Butcher.' }
    ],
    image: { src: '/images/characters/sergeant-doakes.jpg', alt: 'Erik King as Sergeant Doakes', attribution: 'Showtime', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/Dexter', url: 'https://www.reddit.com/r/Dexter/', platform: 'Reddit', description: 'Doakes appreciation threads and meme posts are extremely popular' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'Dexter Wiki - Doakes', url: 'https://dexter.fandom.com/wiki/James_Doakes', platform: 'Web', description: 'Detailed wiki page for Sergeant Doakes' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 82, engagement: 85, socialActivity: 80, memeVelocity: 95, fanArtDensity: 72, fandomLongevity: 88 },
    faqs: [
      { question: 'Who plays Doakes in Dexter?', answer: 'Erik King plays Sergeant James Doakes in Dexter Seasons 1 and 2. Despite his relatively short time on the show, Doakes became one of the most beloved and meme-worthy characters in television history.' },
      { question: 'What is the "Surprise, motherfucker" meme?', answer: 'The "Surprise, motherfucker" meme originates from a Season 2 scene where Doakes confronts Dexter. The line and its many parody variations (such as "Supplies, motherfucker" and "Some fries, motherfucker") became one of the most popular memes in internet culture.' },
      { question: 'Does Doakes die in the books?', answer: 'In the Dexter novel series by Jeff Lindsay, Doakes survives but is severely maimed by Dexter, losing his hands, feet, and tongue. In the TV series, he is killed by Lila at the end of Season 2.' }
    ],
    videos: [
      { title: 'Doakes - Surprise Motherfucker Compilation', youtubeId: 'leeP6LgM8F0', description: 'Compilation of Doakes\'s most iconic moments and confrontations with Dexter.' }
    ],
    relatedCharacterSlugs: ['dexter-morgan', 'debra-morgan'],
    tags: ['antagonist', 'detective', 'meme-icon', 'fan-favorite', 'tragic']
  },
  {
    slug: 'hannah-mckay',
    name: 'Hannah McKay',
    showSlug: 'dexter',
    showTitle: 'Dexter',
    actorSlug: 'yvonne-strahovski',
    actorName: 'Yvonne Strahovski',
    seasonsActive: 'Seasons 7-8',
    characterArc: 'Hannah McKay enters Dexter\'s life as a witness in a cold case investigation, a woman with a dark past who was involved in a killing spree with her boyfriend Wayne Randall as a teenager. Beautiful, intelligent, and seemingly reformed, Hannah hides a calculating nature beneath a gentle exterior — she is a poisoner who has killed multiple people, including her wealthy husband. What makes Hannah unique in Dexter\'s world is that she is the first person who fully knows what Dexter is and accepts him without judgment. Unlike Rita, who loved Dexter\'s mask, Hannah loves the real Dexter — darkness and all.\n\nTheir relationship is equal parts romance and danger, two predators who recognize themselves in each other. Hannah challenges Dexter\'s code by being someone he should kill but cannot bring himself to, and their passionate connection represents a version of intimacy Dexter has never experienced. In Season 8, Hannah returns to Miami and becomes a surrogate mother figure to Harrison, ultimately fleeing to Argentina to start a new life. When Dexter fakes his death in the finale, he sends Harrison to live with Hannah — trusting his son to the one person who understands the darkness that may live inside him. Hannah\'s role raises uncomfortable questions about whether two monsters can create something approaching a family.',
    keyEpisodes: [
      { title: 'Buck the System', season: 7, episode: 3, description: 'Hannah McKay is introduced as a key witness in a cold case, immediately drawing Dexter\'s attention.' },
      { title: 'Chemistry', season: 7, episode: 7, description: 'Dexter and Hannah\'s relationship becomes romantic, as Dexter finds he cannot kill someone he is falling for.' },
      { title: 'A Beautiful Day', season: 8, episode: 11, description: 'Hannah prepares to take Harrison to Argentina, setting up the finale\'s family separation.' }
    ],
    image: { src: '/images/characters/hannah-mckay.jpg', alt: 'Yvonne Strahovski as Hannah McKay', attribution: 'Showtime', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/Dexter', url: 'https://www.reddit.com/r/Dexter/', platform: 'Reddit', description: 'Discussion threads about Hannah\'s relationship with Dexter and her moral ambiguity' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'Dexter Wiki - Hannah', url: 'https://dexter.fandom.com/wiki/Hannah_McKay', platform: 'Web', description: 'Wiki page for Hannah McKay' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 74, engagement: 76, socialActivity: 72, memeVelocity: 68, fanArtDensity: 70, fandomLongevity: 73 },
    faqs: [
      { question: 'Who plays Hannah McKay?', answer: 'Yvonne Strahovski plays Hannah McKay in Dexter Seasons 7-8. Strahovski is also known for her roles as Sarah Walker in Chuck and Serena Joy in The Handmaid\'s Tale.' },
      { question: 'Is Hannah McKay a killer?', answer: 'Yes, Hannah is a serial poisoner who killed several people including her wealthy husband. She participated in a killing spree with Wayne Randall as a teenager and continued killing as an adult.' },
      { question: 'What happens to Hannah McKay?', answer: 'In the series finale, Hannah takes Dexter\'s son Harrison to Argentina to start a new life. When Dexter fakes his death, he entrusts Harrison\'s care to Hannah permanently.' }
    ],
    videos: [
      { title: 'Dexter and Hannah - A Killer Romance', youtubeId: 'pQ2rN7wK4mE', description: 'The complex and dangerous romance between two killers.' }
    ],
    relatedCharacterSlugs: ['dexter-morgan', 'debra-morgan'],
    tags: ['love-interest', 'anti-villain', 'poisoner', 'complex', 'femme-fatale']
  },
  {
    slug: 'trinity-killer',
    name: 'Arthur Mitchell / The Trinity Killer',
    showSlug: 'dexter',
    showTitle: 'Dexter',
    actorSlug: 'john-lithgow',
    actorName: 'John Lithgow',
    seasonsActive: 'Season 4',
    characterArc: 'Arthur Mitchell, known as the Trinity Killer, is a mild-mannered family man and community leader who has secretly been carrying out a ritualistic cycle of three murders — a bathtub drowning, a forced suicide leap, and a bludgeoning — for over thirty years. Each cycle mirrors the traumatic deaths of his sister, mother, and father, which he caused as a child. When Dexter discovers Trinity\'s identity, he is initially fascinated by Mitchell\'s ability to maintain a seemingly normal family life while harboring a dark compulsion — something Dexter desperately wants to achieve himself. Rather than killing Mitchell immediately, Dexter befriends him as "Kyle Butler," hoping to learn the secret of balancing darkness with domesticity.\n\nWhat Dexter discovers instead is a terrifying portrait of what he might become. Behind the facade of devoted churchgoer and Habitat for Humanity volunteer, Mitchell rules his family through fear, physical abuse, and psychological control. His wife, son, and daughter live in a state of terrified compliance, and Dexter realizes that Mitchell\'s "normal life" is built entirely on domination and terror. Lithgow\'s Emmy-winning performance transforms Mitchell from a seemingly gentle older man into one of television\'s most chilling villains. The Season 4 finale, where Mitchell murders Rita while Dexter is hunting him, delivers the show\'s greatest gut punch — proving that Dexter\'s arrogance in sparing Trinity to learn from him cost him everything that mattered.',
    keyEpisodes: [
      { title: 'Living the Dream', season: 4, episode: 1, description: 'The Trinity Killer is introduced, and Dexter begins tracking a serial killer who has eluded capture for 30 years.' },
      { title: 'Hungry Man', season: 4, episode: 9, description: 'Dexter joins the Mitchell family for Thanksgiving and witnesses Arthur\'s terrifying control over his family behind closed doors.' },
      { title: 'The Getaway', season: 4, episode: 12, description: 'Dexter finally kills Trinity, but returns home to discover that Mitchell has already murdered Rita — his last act of revenge.' }
    ],
    image: { src: '/images/characters/trinity-killer.jpg', alt: 'John Lithgow as the Trinity Killer', attribution: 'Showtime', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/Dexter', url: 'https://www.reddit.com/r/Dexter/', platform: 'Reddit', description: 'Trinity Killer is frequently discussed as the greatest villain in the series' }
      ],
      youtubeChannels: [
        { name: 'Trinity Killer Analysis', url: 'https://www.youtube.com/results?search_query=trinity+killer+dexter+analysis', platform: 'YouTube', description: 'Video essays on John Lithgow\'s Emmy-winning performance' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Dexter Wiki - Trinity', url: 'https://dexter.fandom.com/wiki/Arthur_Mitchell', platform: 'Web', description: 'Detailed wiki page for Arthur Mitchell' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 90, engagement: 92, socialActivity: 88, memeVelocity: 85, fanArtDensity: 82, fandomLongevity: 91 },
    faqs: [
      { question: 'Who plays the Trinity Killer?', answer: 'John Lithgow plays Arthur Mitchell, the Trinity Killer, in Dexter Season 4. His performance won the Primetime Emmy Award for Outstanding Guest Actor in a Drama Series.' },
      { question: 'Why is Season 4 considered the best season of Dexter?', answer: 'Season 4 is widely regarded as Dexter\'s peak due to John Lithgow\'s terrifying performance as Trinity, the cat-and-mouse dynamic between Dexter and Mitchell, and the devastating finale where Rita is murdered — considered one of the greatest plot twists in television.' },
      { question: 'Why did the Trinity Killer kill Rita?', answer: 'Arthur Mitchell killed Rita as revenge against Dexter (whom he knew as "Kyle Butler") for infiltrating his family and threatening his way of life. Rita\'s death mirrored Trinity\'s signature bathtub murder method.' }
    ],
    videos: [
      { title: 'John Lithgow\'s Terrifying Performance as Trinity', youtubeId: 'I0p8kkWmm0M', description: 'Highlights of Lithgow\'s Emmy-winning turn as the most dangerous serial killer Dexter ever faced.' },
      { title: 'The Trinity Killer - Shut Up, Cunt', youtubeId: 'j2NvHMVvKjM', description: 'The disturbing Thanksgiving dinner scene that reveals Trinity\'s true nature to Dexter.' }
    ],
    relatedCharacterSlugs: ['dexter-morgan', 'rita-bennett', 'debra-morgan'],
    tags: ['antagonist', 'villain', 'serial-killer', 'iconic', 'emmy-winning', 'terrifying']
  }
];

const twdCharacters = [
  {
    slug: 'rick-grimes',
    name: 'Rick Grimes',
    showSlug: 'the-walking-dead',
    showTitle: 'The Walking Dead',
    actorSlug: 'andrew-lincoln',
    actorName: 'Andrew Lincoln',
    seasonsActive: 'Seasons 1-9',
    characterArc: 'Rick Grimes is a small-town sheriff\'s deputy from King County, Georgia, who awakens from a coma to find the world has been overtaken by the undead. His desperate search for his wife Lori and son Carl leads him to a group of survivors outside Atlanta, where he quickly assumes the role of leader through a combination of moral authority, tactical skill, and sheer force of will. In the early seasons, Rick clings to the values of civilization — justice, democracy, mercy — attempting to maintain order and humanity in a world that has abandoned both. His famous declaration "We don\'t kill the living" establishes his initial moral compass, one that will be tested and ultimately shattered by the horrors to come.\n\nOver nine seasons, Rick Grimes undergoes one of television\'s most dramatic character transformations. The idealistic lawman who tried to negotiate with the living gradually becomes a ruthless survivor willing to do whatever it takes to protect his people. Key inflection points include his killing of Shane Walsh, his brutal dispatching of the Claimers to save Carl, his subjugation under Negan\'s bat, and his eventual decision to spare Negan\'s life — a choice that completes his arc from avenger back to something approaching the man he once was. Rick\'s departure in Season 9, when he appears to sacrifice himself to destroy a bridge and save his community, was one of the show\'s most emotional moments. His legacy as the central figure of The Walking Dead universe continues through the spin-off series The Ones Who Live.',
    keyEpisodes: [
      { title: 'Days Gone Bye', season: 1, episode: 1, description: 'Rick awakens from a coma to find the world overrun by walkers, beginning his desperate search for his family.' },
      { title: 'Killer Within', season: 3, episode: 4, description: 'Lori dies during childbirth at the prison, sending Rick into a grief-stricken psychological breakdown.' },
      { title: 'A', season: 4, episode: 16, description: 'Rick rips out Joe\'s throat to protect Carl, declaring "They\'re screwing with the wrong people" in a defining moment of savage transformation.' },
      { title: 'What Comes After', season: 9, episode: 5, description: 'Rick\'s apparent sacrifice on the bridge, his final episode as a series regular, provides an emotional farewell.' }
    ],
    image: { src: '/images/characters/rick-grimes.jpg', alt: 'Andrew Lincoln as Rick Grimes', attribution: 'AMC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/thewalkingdead', url: 'https://www.reddit.com/r/thewalkingdead/', platform: 'Reddit', description: 'Main Walking Dead subreddit with extensive Rick Grimes discussion' },
        { name: 'r/TWD', url: 'https://www.reddit.com/r/TWD/', platform: 'Reddit', description: 'Secondary Walking Dead community' }
      ],
      youtubeChannels: [
        { name: 'Rick Grimes Evolution', url: 'https://www.youtube.com/results?search_query=rick+grimes+evolution+walking+dead', platform: 'YouTube', description: 'Video essays tracking Rick\'s transformation from lawman to survivor' }
      ],
      twitterAccounts: [
        { name: '@TheWalkingDead', url: 'https://twitter.com/TheWalkingDead', platform: 'Twitter/X', description: 'Official Walking Dead account with Rick Grimes content' }
      ],
      fanSites: [
        { name: 'Walking Dead Wiki', url: 'https://walkingdead.fandom.com/', platform: 'Web', description: 'Comprehensive Walking Dead wiki on Fandom' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 93, engagement: 95, socialActivity: 91, memeVelocity: 90, fanArtDensity: 88, fandomLongevity: 94 },
    faqs: [
      { question: 'Who plays Rick Grimes?', answer: 'Andrew Lincoln plays Rick Grimes in The Walking Dead. The British actor adopted a Southern American accent for the role and starred in the show from its premiere in 2010 through Season 9 in 2018.' },
      { question: 'Does Rick Grimes die in The Walking Dead?', answer: 'No, Rick Grimes does not die. In Season 9, he appears to sacrifice himself by blowing up a bridge, but is revealed to have survived and been rescued by a CRM helicopter. His story continues in the spin-off The Walking Dead: The Ones Who Live.' },
      { question: 'Why did Andrew Lincoln leave The Walking Dead?', answer: 'Andrew Lincoln departed the main series after Season 9 due to the demanding filming schedule in Georgia, which kept him away from his family in England. He returned for the spin-off The Ones Who Live in 2024.' },
      { question: 'What is Rick Grimes\'s famous line?', answer: 'Rick has several iconic lines including "We are the walking dead," "I\'m doing stuff, Lori. Things," and his declaration to Negan\'s group: "I\'m gonna kill you. Not today, not tomorrow, but I\'m gonna kill you."' }
    ],
    videos: [
      { title: 'Rick Grimes - The Complete Character Arc', youtubeId: 'R1v0uFms68U', description: 'A comprehensive look at Rick Grimes\'s transformation across nine seasons.' },
      { title: 'Rick Grimes Best Moments', youtubeId: 'SRDWN6j2fRs', description: 'Compilation of Rick\'s most iconic moments from The Walking Dead.' }
    ],
    relatedCharacterSlugs: ['daryl-dixon', 'negan', 'carol-peletier', 'glenn-rhee', 'michonne-twd'],
    tags: ['protagonist', 'leader', 'iconic', 'complex', 'survivor', 'lawman']
  },
  {
    slug: 'daryl-dixon',
    name: 'Daryl Dixon',
    showSlug: 'the-walking-dead',
    showTitle: 'The Walking Dead',
    actorSlug: 'norman-reedus',
    actorName: 'Norman Reedus',
    seasonsActive: 'Seasons 1-11',
    characterArc: 'Daryl Dixon begins the series as an angry, volatile redneck living in the shadow of his abusive, racist older brother Merle. Originally conceived as a minor character, Daryl\'s journey from outsider to indispensable leader became the emotional backbone of The Walking Dead, driven by Norman Reedus\'s magnetic performance and the character\'s fierce loyalty to those he comes to consider family. A skilled tracker and hunter who fights with a signature crossbow, Daryl\'s survival skills make him invaluable, but it is his capacity for emotional growth that makes him irreplaceable. His friendship with Rick Grimes evolves into a brotherhood, and his bonds with Carol, Beth, and others reveal a man capable of profound tenderness despite a lifetime of abuse and neglect.\n\nDaryl\'s arc across eleven seasons is one of the most satisfying in the series — a man who was never loved learning to love and be loved in return. Key relationships define his growth: his complicated bond with Merle, whom he must ultimately kill; his deep platonic love for Carol Peletier; his devastating grief over Beth Greene\'s death; and his brutal psychological torture at the hands of Negan, which nearly breaks him. By the series finale, Daryl has transformed from a loner who trusted no one into the moral center of the community, a man who will ride into danger alone to protect his family. His popularity made him the only original character besides Carol to survive all eleven seasons, and he headlined his own spin-off series, Daryl Dixon, set in France.',
    keyEpisodes: [
      { title: 'Chupacabra', season: 2, episode: 5, description: 'Daryl searches alone for the missing Sophia, showing his emerging loyalty to the group beyond his brother\'s influence.' },
      { title: 'This Sorrowful Life', season: 3, episode: 15, description: 'Merle sacrifices himself, and Daryl must put down his reanimated brother — a pivotal moment of grief and independence.' },
      { title: 'The Cell', season: 7, episode: 3, description: 'Negan imprisons and psychologically tortures Daryl at the Sanctuary, testing his will to its limits.' },
      { title: 'Rest in Peace', season: 11, episode: 24, description: 'The series finale sees Daryl leave the community on his motorcycle, setting up his solo spin-off journey.' }
    ],
    image: { src: '/images/characters/daryl-dixon.jpg', alt: 'Norman Reedus as Daryl Dixon', attribution: 'AMC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/thewalkingdead', url: 'https://www.reddit.com/r/thewalkingdead/', platform: 'Reddit', description: 'Daryl Dixon is one of the most discussed characters on the Walking Dead subreddit' },
        { name: 'r/DarylDixon', url: 'https://www.reddit.com/r/DarylDixon/', platform: 'Reddit', description: 'Dedicated subreddit for the Daryl Dixon spin-off series' }
      ],
      youtubeChannels: [
        { name: 'Daryl Dixon Best Moments', url: 'https://www.youtube.com/results?search_query=daryl+dixon+best+moments', platform: 'YouTube', description: 'Compilations and analysis of Daryl\'s most iconic scenes' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Walking Dead Wiki - Daryl', url: 'https://walkingdead.fandom.com/wiki/Daryl_Dixon_(TV_Series)', platform: 'Web', description: 'Detailed wiki page for Daryl Dixon' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 94, engagement: 96, socialActivity: 93, memeVelocity: 90, fanArtDensity: 92, fandomLongevity: 95 },
    faqs: [
      { question: 'Who plays Daryl Dixon?', answer: 'Norman Reedus plays Daryl Dixon throughout all eleven seasons of The Walking Dead and in the spin-off series Daryl Dixon. The character was not in the original comics and was created specifically for the TV series.' },
      { question: 'Is Daryl Dixon in the Walking Dead comics?', answer: 'No, Daryl Dixon is an original character created for the TV series and does not appear in Robert Kirkman\'s comic books. He became so popular that fans famously adopted the slogan "If Daryl dies, we riot."' },
      { question: 'Does Daryl Dixon die?', answer: 'No, Daryl survives all eleven seasons of The Walking Dead and goes on to star in his own spin-off series, Daryl Dixon, which follows his adventures in France.' }
    ],
    videos: [
      { title: 'Daryl Dixon - Full Character Evolution', youtubeId: 'JqFr-GwNxso', description: 'Tracking Daryl\'s growth from loner outcast to beloved leader across 11 seasons.' },
      { title: 'Daryl and Carol - The Best Friendship on TV', youtubeId: 'w6bN5rR2K8s', description: 'A look at the deep bond between Daryl Dixon and Carol Peletier.' }
    ],
    relatedCharacterSlugs: ['rick-grimes', 'carol-peletier', 'negan', 'glenn-rhee', 'michonne-twd'],
    tags: ['protagonist', 'fan-favorite', 'iconic', 'survivor', 'crossbow', 'loner-to-leader']
  },
  {
    slug: 'michonne-twd',
    name: 'Michonne',
    showSlug: 'the-walking-dead',
    showTitle: 'The Walking Dead',
    actorSlug: 'danai-gurira',
    actorName: 'Danai Gurira',
    seasonsActive: 'Seasons 3-10',
    characterArc: 'Michonne first appears as a mysterious, katana-wielding warrior leading two jawless, armless walkers on chains — the reanimated remains of her boyfriend and his friend, serving as both camouflage and a form of psychological punishment she inflicts on herself for failing to protect her son Andre. Her arrival at the prison in Season 3 brings one of the show\'s most formidable fighters into the group, but her initial distrust and emotional isolation reveal a woman profoundly damaged by loss. Over time, her friendship with Carl and her growing bond with Rick Grimes draw Michonne out of her shell, transforming her from a lone wolf into the fierce protector of an adopted family.\n\nMichonne\'s evolution from solitary survivor to Rick\'s partner and the community\'s moral backbone is one of the show\'s most compelling arcs. Her relationship with Rick provides both characters with emotional depth — she becomes a mother figure to Carl and Judith, and Rick becomes the partner who helps her trust again. Their romance, which develops organically from mutual respect and shared trauma, is among the most celebrated relationships in the Walking Dead universe. After Rick\'s disappearance in Season 9, Michonne leads the communities through years of rebuilding before discovering evidence that Rick may still be alive, prompting her departure in Season 10 to search for him. Her story continues in The Walking Dead: The Ones Who Live, where she and Rick are finally reunited.',
    keyEpisodes: [
      { title: 'Beside the Dying Fire', season: 2, episode: 13, description: 'Michonne makes her dramatic first appearance saving Andrea with her katana, establishing her as a force of nature.' },
      { title: 'Clear', season: 3, episode: 12, description: 'Michonne bonds with Carl during a supply run and begins opening up emotionally.' },
      { title: 'The Next World', season: 6, episode: 10, description: 'Rick and Michonne\'s relationship becomes romantic, a pivotal moment for both characters and the series.' },
      { title: 'What We Become', season: 10, episode: 13, description: 'Michonne discovers evidence Rick is alive and sets out to find him, departing the main series.' }
    ],
    image: { src: '/images/characters/michonne-twd.jpg', alt: 'Danai Gurira as Michonne', attribution: 'AMC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/thewalkingdead', url: 'https://www.reddit.com/r/thewalkingdead/', platform: 'Reddit', description: 'Active discussions about Michonne\'s character and her journey' }
      ],
      youtubeChannels: [
        { name: 'Michonne Best Moments', url: 'https://www.youtube.com/results?search_query=michonne+walking+dead+best+moments', platform: 'YouTube', description: 'Compilations of Michonne\'s most badass scenes' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Walking Dead Wiki - Michonne', url: 'https://walkingdead.fandom.com/wiki/Michonne_Hawthorne_(TV_Series)', platform: 'Web', description: 'Detailed wiki page for Michonne' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 89, engagement: 91, socialActivity: 87, memeVelocity: 84, fanArtDensity: 90, fandomLongevity: 90 },
    faqs: [
      { question: 'Who plays Michonne?', answer: 'Danai Gurira plays Michonne in The Walking Dead. Gurira is also known for her role as Okoye in the Marvel Cinematic Universe, including Black Panther and Avengers: Endgame.' },
      { question: 'What happens to Michonne in The Walking Dead?', answer: 'Michonne departs the main series in Season 10 after discovering that Rick Grimes may still be alive. Her story continues in the spin-off The Walking Dead: The Ones Who Live, where she and Rick reunite.' },
      { question: 'Why does Michonne carry a katana?', answer: 'Michonne\'s katana is her signature weapon, which she acquired during the early days of the apocalypse. It becomes her symbol of strength and survival, and she wields it with exceptional skill throughout the series.' }
    ],
    videos: [
      { title: 'Michonne - The Warrior\'s Journey', youtubeId: 'nR8t2cZPqkA', description: 'Character study of Michonne\'s evolution from lone survivor to community leader.' }
    ],
    relatedCharacterSlugs: ['rick-grimes', 'daryl-dixon', 'carol-peletier', 'negan'],
    tags: ['protagonist', 'warrior', 'iconic', 'katana', 'badass', 'leader']
  },
  {
    slug: 'negan',
    name: 'Negan',
    showSlug: 'the-walking-dead',
    showTitle: 'The Walking Dead',
    actorSlug: 'jeffrey-dean-morgan',
    actorName: 'Jeffrey Dean Morgan',
    seasonsActive: 'Seasons 6-11',
    characterArc: 'Negan is the charismatic, leather-jacket-wearing leader of the Saviors, a brutal authoritarian community that extorts other groups for supplies through violence and intimidation. His weapon of choice, a barbed-wire-wrapped baseball bat named Lucille (after his deceased wife), becomes one of television\'s most feared props. Negan\'s introduction in the Season 6 finale, where he forces Rick\'s group to kneel before him in an agonizing game of "eeny, meeny, miny, moe," set up one of TV\'s most controversial cliffhangers. The Season 7 premiere\'s resolution — Negan brutally murders Abraham Ford and Glenn Rhee with Lucille — remains one of the most shocking and polarizing scenes in the show\'s history, devastating fans and fundamentally changing the series.\n\nWhat makes Negan extraordinary is his transformation from irredeemable villain to complicated anti-hero across the show\'s final seasons. After years of imprisonment following the All Out War arc, Negan begins a genuine if uneven journey toward redemption. His backstory, revealing a man shaped by the loss of his wife to cancer and the brutality of the post-apocalyptic world, adds layers of tragic humanity to his villainous persona. Key moments in his redemption arc include his killing of Alpha to protect Alexandria, his mentorship of young survivors, and his eventual exile and solo journey. By the series finale and into his spin-off Dead City, Negan exists in a morally ambiguous space — neither fully redeemed nor entirely condemned — that makes him one of the franchise\'s most fascinating figures.',
    keyEpisodes: [
      { title: 'Last Day on Earth', season: 6, episode: 16, description: 'Negan\'s arrival, capturing Rick\'s group and playing his deadly game with Lucille, changes the series forever.' },
      { title: 'The Day Will Come When You Won\'t Be', season: 7, episode: 1, description: 'Negan murders Abraham and Glenn, breaking Rick and establishing himself as the show\'s most terrifying villain.' },
      { title: 'Here\'s Negan', season: 10, episode: 22, description: 'Negan\'s backstory is revealed, showing the loss of his wife Lucille and how he became the leader of the Saviors.' },
      { title: 'Rest in Peace', season: 11, episode: 24, description: 'The series finale sees Negan exiled from the community but on a path of continued redemption.' }
    ],
    image: { src: '/images/characters/negan.jpg', alt: 'Jeffrey Dean Morgan as Negan', attribution: 'AMC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/thewalkingdead', url: 'https://www.reddit.com/r/thewalkingdead/', platform: 'Reddit', description: 'One of the most debated characters on the Walking Dead subreddit' },
        { name: 'r/Negan', url: 'https://www.reddit.com/r/Negan/', platform: 'Reddit', description: 'Fan community dedicated to Negan' }
      ],
      youtubeChannels: [
        { name: 'Negan Character Analysis', url: 'https://www.youtube.com/results?search_query=negan+walking+dead+character+analysis', platform: 'YouTube', description: 'Video essays on Negan\'s villainy and redemption arc' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Walking Dead Wiki - Negan', url: 'https://walkingdead.fandom.com/wiki/Negan_(TV_Series)', platform: 'Web', description: 'Comprehensive wiki page for Negan' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 93, engagement: 95, socialActivity: 92, memeVelocity: 94, fanArtDensity: 88, fandomLongevity: 92 },
    faqs: [
      { question: 'Who plays Negan?', answer: 'Jeffrey Dean Morgan plays Negan from Season 6 through Season 11 of The Walking Dead and in the spin-off Dead City. Morgan is also known for his roles as John Winchester in Supernatural and The Comedian in Watchmen.' },
      { question: 'Who does Negan kill?', answer: 'Negan\'s most notable kills are Abraham Ford and Glenn Rhee in the Season 7 premiere, both beaten to death with his bat Lucille. These deaths are among the most impactful in the series and fundamentally changed the show.' },
      { question: 'Does Negan get redeemed?', answer: 'Negan\'s redemption arc is one of the show\'s most debated storylines. After years of imprisonment, he demonstrates genuine growth including killing Alpha to protect the communities. However, whether this constitutes true redemption remains a subject of intense fan debate.' },
      { question: 'Why is the bat called Lucille?', answer: 'Negan named his bat after his deceased wife Lucille, who died of cancer during the early days of the apocalypse. The bat becomes both a weapon and a symbol of the grief and rage that transformed him into a tyrant.' }
    ],
    videos: [
      { title: 'Negan\'s Introduction - Eeny Meeny Miny Moe', youtubeId: 'GF7kpFhn4OI', description: 'The terrifying scene where Negan selects his victims from Rick\'s group.' },
      { title: 'Negan - From Villain to Anti-Hero', youtubeId: 'k4P3JvM0EHw', description: 'Tracking Negan\'s transformation from the show\'s greatest villain to an unlikely redemption arc.' }
    ],
    relatedCharacterSlugs: ['rick-grimes', 'daryl-dixon', 'glenn-rhee', 'michonne-twd'],
    tags: ['antagonist', 'anti-hero', 'villain', 'iconic', 'charismatic', 'complex', 'lucille']
  },
  {
    slug: 'carol-peletier',
    name: 'Carol Peletier',
    showSlug: 'the-walking-dead',
    showTitle: 'The Walking Dead',
    actorSlug: 'melissa-mcbride',
    actorName: 'Melissa McBride',
    seasonsActive: 'Seasons 1-11',
    characterArc: 'Carol Peletier begins the series as a timid, abused housewife cowering under the shadow of her violent husband Ed. After Ed is killed by walkers and her daughter Sophia is lost and discovered as a walker in one of the show\'s most devastating reveals, Carol undergoes the most dramatic character transformation in The Walking Dead. She evolves from a helpless victim into one of the most formidable and ruthless survivors in the group — a woman who teaches children to use knives, who single-handedly rescues the group from Terminus, and who eliminates threats with a cold efficiency that sometimes alarms even her closest allies. Her transformation from victim to warrior is unparalleled in the series.\n\nCarol\'s genius lies in her ability to weaponize the perceptions others have of her. She deliberately presents herself as a harmless housewife to outsiders — baking cookies and wearing cardigans in Alexandria — while operating as one of the community\'s most lethal protectors. Her deepest relationship is with Daryl Dixon, a bond built on mutual understanding of abuse survival that evolves into one of television\'s most celebrated platonic love stories. Carol\'s arc is not without darkness: her killing of Karen and David at the prison, her execution of Lizzie ("Look at the flowers"), and her many tactical deceptions raise profound moral questions. But her eleven-season journey from abused wife to the woman who destroys entire enemy outposts remains one of the greatest character arcs in television history.',
    keyEpisodes: [
      { title: 'Pretty Much Dead Already', season: 2, episode: 7, description: 'The barn scene reveals that Sophia has been a walker all along, destroying Carol and catalyzing her transformation.' },
      { title: 'The Grove', season: 4, episode: 14, description: 'Carol kills Lizzie in one of the show\'s most emotionally devastating scenes, uttering "Look at the flowers."' },
      { title: 'No Sanctuary', season: 5, episode: 1, description: 'Carol single-handedly storms Terminus, destroying the cannibals\' compound and rescuing the entire group.' },
      { title: 'Not Tomorrow Yet', season: 6, episode: 12, description: 'Carol\'s crisis of conscience about the people she\'s killed begins to unravel her tough exterior.' }
    ],
    image: { src: '/images/characters/carol-peletier.jpg', alt: 'Melissa McBride as Carol Peletier', attribution: 'AMC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/thewalkingdead', url: 'https://www.reddit.com/r/thewalkingdead/', platform: 'Reddit', description: 'Carol is celebrated as having the show\'s greatest character transformation' }
      ],
      youtubeChannels: [
        { name: 'Carol Peletier Evolution', url: 'https://www.youtube.com/results?search_query=carol+peletier+evolution+walking+dead', platform: 'YouTube', description: 'Videos tracking Carol\'s transformation from victim to warrior' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Walking Dead Wiki - Carol', url: 'https://walkingdead.fandom.com/wiki/Carol_Peletier_(TV_Series)', platform: 'Web', description: 'Detailed wiki page for Carol Peletier' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 90, engagement: 92, socialActivity: 88, memeVelocity: 87, fanArtDensity: 85, fandomLongevity: 93 },
    faqs: [
      { question: 'Who plays Carol in The Walking Dead?', answer: 'Melissa McBride plays Carol Peletier throughout all eleven seasons of The Walking Dead, making her one of only two original cast members to appear in every season.' },
      { question: 'What does "Look at the flowers" mean?', answer: '"Look at the flowers" is what Carol says to Lizzie before killing her in Season 4\'s "The Grove." Lizzie had murdered her sister Mika, believing walkers were still people. The line and scene are among the most discussed in the show\'s history.' },
      { question: 'Does Carol die in The Walking Dead?', answer: 'No, Carol Peletier survives all eleven seasons of The Walking Dead. In the comics, Carol dies much earlier, making her TV survival and transformation one of the biggest departures from the source material.' }
    ],
    videos: [
      { title: 'Carol Peletier - The Greatest Transformation in TWD', youtubeId: 'x2UQ3SNRGBE', description: 'How Carol went from abused housewife to the deadliest survivor in the apocalypse.' },
      { title: 'Carol at Terminus - One Woman Army', youtubeId: 'f7bN2qGp9Ek', description: 'Carol\'s spectacular assault on the Terminus compound in Season 5.' }
    ],
    relatedCharacterSlugs: ['daryl-dixon', 'rick-grimes', 'negan', 'glenn-rhee'],
    tags: ['protagonist', 'survivor', 'transformation', 'warrior', 'complex', 'fan-favorite']
  },
  {
    slug: 'glenn-rhee',
    name: 'Glenn Rhee',
    showSlug: 'the-walking-dead',
    showTitle: 'The Walking Dead',
    actorSlug: 'steven-yeun',
    actorName: 'Steven Yeun',
    seasonsActive: 'Seasons 1-7',
    characterArc: 'Glenn Rhee is a former pizza delivery boy from Atlanta who becomes one of the original group\'s most resourceful and morally grounded survivors. Quick-witted, brave, and selfless, Glenn is introduced rescuing Rick from a horde of walkers in downtown Atlanta, immediately establishing himself as someone who risks his life for others without hesitation. His skills as a supply runner — fast, clever, and willing to go where others won\'t — make him invaluable to the group, but it is his unwavering humanity that makes him essential. In a world where survival often demands moral compromise, Glenn consistently represents the best of what people can be, maintaining his compassion and optimism even as the world around him descends into barbarism.\n\nGlenn\'s love story with Maggie Greene becomes the emotional heart of the series — a relationship that grows from a desperate hookup during a pharmacy run into a profound partnership defined by hope and commitment. Their decision to marry, to try for a child, to build something lasting in a dying world represents the show\'s central thesis that life goes on and love endures even in the worst of times. This makes Glenn\'s death at the hands of Negan in the Season 7 premiere — beaten to death with Lucille while calling out to Maggie — one of the most devastating and controversial moments in television history. Steven Yeun\'s performance in that scene, conveying courage and love even in his final moments, cemented Glenn as one of the most beloved characters in the Walking Dead universe.',
    keyEpisodes: [
      { title: 'Guts', season: 1, episode: 2, description: 'Glenn rescues Rick in Atlanta and demonstrates his resourcefulness and bravery in the walker-infested city.' },
      { title: 'Cherokee Rose', season: 2, episode: 4, description: 'Glenn and Maggie\'s relationship begins at the Greene farm, with their first intimate encounter at the pharmacy.' },
      { title: 'Thank You', season: 6, episode: 3, description: 'The fake-out "death" scene that kept audiences in suspense for weeks, demonstrating Glenn\'s importance to the show.' },
      { title: 'The Day Will Come When You Won\'t Be', season: 7, episode: 1, description: 'Glenn is murdered by Negan with Lucille, his final words to Maggie: "I\'ll find you." One of the most devastating character deaths in television.' }
    ],
    image: { src: '/images/characters/glenn-rhee.jpg', alt: 'Steven Yeun as Glenn Rhee', attribution: 'AMC', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/thewalkingdead', url: 'https://www.reddit.com/r/thewalkingdead/', platform: 'Reddit', description: 'Glenn\'s death remains one of the most discussed topics on the subreddit' }
      ],
      youtubeChannels: [
        { name: 'Glenn Rhee Tribute', url: 'https://www.youtube.com/results?search_query=glenn+rhee+tribute+walking+dead', platform: 'YouTube', description: 'Fan tribute videos and analysis of Glenn\'s character and death' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Walking Dead Wiki - Glenn', url: 'https://walkingdead.fandom.com/wiki/Glenn_Rhee_(TV_Series)', platform: 'Web', description: 'Detailed wiki page for Glenn Rhee' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 91, engagement: 93, socialActivity: 89, memeVelocity: 87, fanArtDensity: 86, fandomLongevity: 92 },
    faqs: [
      { question: 'Who plays Glenn Rhee?', answer: 'Steven Yeun plays Glenn Rhee in The Walking Dead Seasons 1-7. After leaving the show, Yeun went on to star in the Oscar-nominated film Minari (2020) and the animated series Invincible.' },
      { question: 'How does Glenn die?', answer: 'Glenn is killed by Negan in the Season 7 premiere, beaten to death with the barbed-wire bat Lucille. His last words are "Maggie, I\'ll find you." The death follows the same fate as his comic book counterpart.' },
      { question: 'What were Glenn\'s last words?', answer: 'Glenn\'s final words were "Maggie, I\'ll find you" — a promise to his pregnant wife that transcended death and became one of the most quoted and emotional lines in the show\'s history.' }
    ],
    videos: [
      { title: 'Glenn Rhee - The Heart of The Walking Dead', youtubeId: 'bWqPT3TW8Ec', description: 'Why Glenn Rhee represented the moral compass of the series.' },
      { title: 'Glenn\'s Death Scene - Season 7 Premiere', youtubeId: 'GF7kpFhn4OI', description: 'The devastating scene that shook the Walking Dead fanbase to its core.' }
    ],
    relatedCharacterSlugs: ['rick-grimes', 'daryl-dixon', 'negan', 'michonne-twd', 'carol-peletier'],
    tags: ['protagonist', 'hero', 'beloved', 'tragic', 'moral-compass', 'pizza-delivery']
  }
];

module.exports = { dexterCharacters, twdCharacters };
