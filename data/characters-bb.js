// Breaking Bad Characters
const breakingBadCharacters = [
  {
    slug: 'walter-white',
    name: 'Walter White',
    showSlug: 'breaking-bad',
    showTitle: 'Breaking Bad',
    actorSlug: 'bryan-cranston',
    actorName: 'Bryan Cranston',
    seasonsActive: 'Seasons 1–5',
    characterArc: 'Walter White begins as an overqualified, underpaid high school chemistry teacher in Albuquerque, New Mexico. When diagnosed with inoperable lung cancer, he makes a fateful decision to use his chemistry expertise to manufacture methamphetamine, partnering with former student Jesse Pinkman.\n\nAs Walter becomes more successful in the drug trade, his alter ego "Heisenberg" emerges — a ruthless, calculating drug lord who gradually replaces the mild-mannered family man. His transformation is one of television\'s greatest character studies, exploring how pride, ego, and desperation can corrupt even the most ordinary person.\n\nWalter\'s relationships deteriorate as his criminal empire grows. His marriage to Skyler fractures under the weight of his lies, his partnership with Jesse becomes toxic, and his confrontations with DEA agent brother-in-law Hank Schrader escalate toward inevitable tragedy.\n\nBy the series finale, Walter has lost everything he claimed to be fighting for, yet in his final moments achieves a strange form of redemption — admitting the truth that he did it all for himself, because he was good at it, and it made him feel alive.',
    keyEpisodes: [
      { title: 'Pilot', season: 1, episode: 1, description: 'Walter receives his cancer diagnosis and cooks meth for the first time with Jesse Pinkman.' },
      { title: 'Crazy Handful of Nothin\'', season: 1, episode: 6, description: 'Walter confronts Tuco Salamanca, marking the birth of his Heisenberg persona.' },
      { title: 'Face Off', season: 4, episode: 13, description: 'Walter orchestrates the death of Gus Fring in a meticulously planned explosion.' },
      { title: 'Ozymandias', season: 5, episode: 14, description: 'Widely regarded as the greatest TV episode ever. Walter\'s world collapses as Hank is killed and his family turns against him.' },
      { title: 'Felina', season: 5, episode: 16, description: 'The series finale. Walter returns to Albuquerque for one final mission, freeing Jesse and confronting his legacy.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bryan_Cranston_by_Gage_Skidmore_2.jpg/440px-Bryan_Cranston_by_Gage_Skidmore_2.jpg', alt: 'Bryan Cranston, who portrays Walter White in Breaking Bad', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/breakingbad', url: 'https://www.reddit.com/r/breakingbad/', platform: 'Reddit', description: 'Main Breaking Bad subreddit with 2M+ members' },
        { name: 'r/okbuddychicanery', url: 'https://www.reddit.com/r/okbuddychicanery/', platform: 'Reddit', description: 'Breaking Bad/Better Call Saul meme community' }
      ],
      youtubeChannels: [
        { name: 'The Film Theorists - Walter White Analysis', url: 'https://www.youtube.com/watch?v=bKFMS7YDpJA', platform: 'YouTube', description: 'In-depth character analysis of Walter White' }
      ],
      twitterAccounts: [
        { name: '@BreakingBad', url: 'https://twitter.com/BreakingBad', platform: 'Twitter/X', description: 'Official Breaking Bad Twitter account' }
      ],
      fanSites: [
        { name: 'Breaking Bad Wiki', url: 'https://breakingbad.fandom.com/', platform: 'Web', description: 'Comprehensive Breaking Bad encyclopedia on Fandom' }
      ],
      instagramAccounts: [
        { name: '@breakingbad', url: 'https://www.instagram.com/breakingbad/', platform: 'Instagram', description: 'Official Breaking Bad Instagram page' }
      ],
      tiktokCreators: [
        { name: 'Breaking Bad Edits', url: 'https://www.tiktok.com/tag/breakingbad', platform: 'TikTok', description: 'Fan edits and clips on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 97, engagement: 95, socialActivity: 92, memeVelocity: 98, fanArtDensity: 90, fandomLongevity: 99 },
    faqs: [
      { question: 'Who plays Walter White in Breaking Bad?', answer: 'Bryan Cranston plays Walter White in Breaking Bad. Cranston won four Primetime Emmy Awards for Outstanding Lead Actor in a Drama Series for the role, cementing it as one of the greatest television performances of all time.' },
      { question: 'What is Walter White\'s alter ego?', answer: 'Walter White\'s alter ego is Heisenberg, a name he adopts from the famous physicist Werner Heisenberg. The Heisenberg persona represents Walter\'s transformation from a mild-mannered teacher into a feared drug lord.' },
      { question: 'Does Walter White die in Breaking Bad?', answer: 'Yes, Walter White dies in the series finale "Felina" (Season 5, Episode 16). He is struck by a ricocheting bullet from his own remote-activated machine gun and dies in a meth lab, surrounded by the equipment he loved.' },
      { question: 'What is Walter White\'s famous quote?', answer: 'Walter White\'s most famous quote is "I am the one who knocks," delivered to Skyler in Season 4, Episode 6 ("Cornered"). Another iconic line is "Say my name" from Season 5, Episode 7.' }
    ],
    videos: [
      { title: 'Walter White - The Transformation', youtubeId: 'fRe4kfWqBGg', description: 'A video essay exploring Walter White\'s transformation throughout the series.' },
      { title: 'Say My Name - Breaking Bad', youtubeId: 'dy_DASt7hDs', description: 'The iconic "Say My Name" scene from Breaking Bad.' }
    ],
    relatedCharacterSlugs: ['jesse-pinkman', 'hank-schrader', 'skyler-white', 'gus-fring', 'saul-goodman', 'mike-ehrmantraut'],
    tags: ['anti-hero', 'protagonist', 'iconic', 'villain']
  },
  {
    slug: 'jesse-pinkman',
    name: 'Jesse Pinkman',
    showSlug: 'breaking-bad',
    showTitle: 'Breaking Bad',
    actorSlug: 'aaron-paul',
    actorName: 'Aaron Paul',
    seasonsActive: 'Seasons 1–5',
    characterArc: 'Jesse Pinkman starts as a small-time methamphetamine cook and dealer, a former student of Walter White who becomes his unlikely partner in crime. Initially portrayed as a reckless slacker, Jesse reveals surprising depth and moral complexity as the series progresses.\n\nUnlike Walter, who embraces the darkness, Jesse is haunted by the violence and destruction around him. Each death — from his girlfriend Jane\'s overdose to the shooting of a child named Drew Sharp — chips away at his spirit. Jesse becomes the moral compass of the show, the character who still feels the weight of their actions.\n\nHis relationship with Walter evolves from student-teacher to partners to antagonists. Walter manipulates Jesse repeatedly, yet Jesse keeps returning, trapped in a cycle of loyalty and abuse that mirrors real-world toxic relationships.\n\nJesse\'s story culminates in his enslavement by the white supremacist gang and his ultimate escape in the series finale, continued in the film El Camino. His journey from aimless youth to traumatized survivor to free man is one of television\'s most emotionally powerful arcs.',
    keyEpisodes: [
      { title: 'Pilot', season: 1, episode: 1, description: 'Jesse reunites with his former chemistry teacher Mr. White and begins their meth partnership.' },
      { title: 'Peekaboo', season: 2, episode: 6, description: 'Jesse shows his compassionate side when he rescues a neglected child from drug addicts.' },
      { title: 'Phoenix', season: 2, episode: 12, description: 'Jesse\'s girlfriend Jane dies from an overdose while Walter watches without intervening.' },
      { title: 'Felina', season: 5, episode: 16, description: 'Jesse is freed from captivity and drives away laughing and crying, finally liberated.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Aaron_Paul_by_Gage_Skidmore.jpg/440px-Aaron_Paul_by_Gage_Skidmore.jpg', alt: 'Aaron Paul, who portrays Jesse Pinkman in Breaking Bad', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/breakingbad', url: 'https://www.reddit.com/r/breakingbad/', platform: 'Reddit', description: 'Main Breaking Bad community' }
      ],
      youtubeChannels: [
        { name: 'Jesse Pinkman - The Heart of Breaking Bad', url: 'https://www.youtube.com/results?search_query=jesse+pinkman+character+analysis', platform: 'YouTube', description: 'Character analysis videos' }
      ],
      twitterAccounts: [
        { name: '@BreakingBad', url: 'https://twitter.com/BreakingBad', platform: 'Twitter/X', description: 'Official account' }
      ],
      fanSites: [
        { name: 'Breaking Bad Wiki - Jesse', url: 'https://breakingbad.fandom.com/wiki/Jesse_Pinkman', platform: 'Web', description: 'Full Jesse Pinkman wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 94, engagement: 93, socialActivity: 90, memeVelocity: 95, fanArtDensity: 88, fandomLongevity: 96 },
    faqs: [
      { question: 'Who plays Jesse Pinkman?', answer: 'Aaron Paul plays Jesse Pinkman in Breaking Bad. Paul won three Emmy Awards for Outstanding Supporting Actor in a Drama Series for the role.' },
      { question: 'What happens to Jesse Pinkman after Breaking Bad?', answer: 'Jesse\'s story continues in the 2019 Netflix film El Camino: A Breaking Bad Movie, where he escapes to Alaska to start a new life after being freed from captivity by Walter White.' },
      { question: 'What is Jesse Pinkman\'s catchphrase?', answer: 'Jesse Pinkman\'s most famous catchphrase is "Yeah, science!" along with his frequent use of "bitch" as punctuation. "Yeah Mr. White! Yeah science!" from Season 1 became one of the show\'s most quoted lines.' }
    ],
    videos: [
      { title: 'Jesse Pinkman - Yeah Science!', youtubeId: 'io-t-bUkfY8', description: 'Iconic Jesse Pinkman moments compilation.' }
    ],
    relatedCharacterSlugs: ['walter-white', 'hank-schrader', 'saul-goodman', 'mike-ehrmantraut'],
    tags: ['fan-favorite', 'tragic', 'deuteragonist']
  },
  {
    slug: 'hank-schrader',
    name: 'Hank Schrader',
    showSlug: 'breaking-bad',
    showTitle: 'Breaking Bad',
    actorSlug: 'dean-norris',
    actorName: 'Dean Norris',
    seasonsActive: 'Seasons 1–5',
    characterArc: 'Hank Schrader is a boisterous, confident DEA agent who serves as Walter White\'s brother-in-law. Initially appearing as a macho, beer-loving jokester, Hank gradually reveals hidden depths as he becomes obsessed with catching the mysterious drug lord known as Heisenberg.\n\nHank\'s journey takes him through a near-fatal encounter with the Salamanca twins, a debilitating period of recovery and PTSD, and ultimately to the devastating realization that the man he has been hunting is his own family member.\n\nHis investigation of Heisenberg becomes personal long before he discovers Walter\'s secret. The moment in the bathroom when he realizes the truth — connecting Walt to Gale Boetticher\'s lab notes — is one of television\'s most electrifying scenes.\n\nHank\'s death in the desert at the hands of Jack Welker\'s gang represents the ultimate cost of Walter\'s choices. He faces his end with dignity, telling Walter "you\'re the smartest guy I ever met, but you\'re too stupid to see — he made up his mind ten minutes ago."',
    keyEpisodes: [
      { title: 'One Minute', season: 3, episode: 7, description: 'Hank survives an assassination attempt by the Salamanca twins in a brutal parking lot shootout.' },
      { title: 'Gliding Over All', season: 5, episode: 8, description: 'Hank discovers Gale\'s inscription to W.W. and realizes Walter is Heisenberg.' },
      { title: 'Ozymandias', season: 5, episode: 14, description: 'Hank is killed by Jack Welker after refusing to beg for his life.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dean_Norris_2013_%28cropped%29.jpg/440px-Dean_Norris_2013_%28cropped%29.jpg', alt: 'Dean Norris, who portrays Hank Schrader', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [{ name: 'r/breakingbad', url: 'https://www.reddit.com/r/breakingbad/', platform: 'Reddit', description: 'Main community' }],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [{ name: 'Breaking Bad Wiki - Hank', url: 'https://breakingbad.fandom.com/wiki/Hank_Schrader', platform: 'Web', description: 'Hank Schrader wiki page' }],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 82, engagement: 85, socialActivity: 75, memeVelocity: 88, fanArtDensity: 70, fandomLongevity: 90 },
    faqs: [
      { question: 'Who plays Hank Schrader?', answer: 'Dean Norris plays Hank Schrader, Walter White\'s brother-in-law and DEA agent in Breaking Bad.' },
      { question: 'How does Hank find out about Walter?', answer: 'Hank discovers Walter is Heisenberg in Season 5, Episode 8 ("Gliding Over All") when he finds a copy of Walt Whitman\'s Leaves of Grass inscribed "To my other favorite W.W." by Gale Boetticher while using Walter\'s bathroom.' },
      { question: 'Does Hank Schrader die in Breaking Bad?', answer: 'Yes, Hank is shot and killed by Jack Welker in Season 5, Episode 14 ("Ozymandias") after being captured in the desert.' }
    ],
    videos: [],
    relatedCharacterSlugs: ['walter-white', 'jesse-pinkman', 'skyler-white'],
    tags: ['law-enforcement', 'tragic', 'fan-favorite']
  },
  {
    slug: 'skyler-white',
    name: 'Skyler White',
    showSlug: 'breaking-bad',
    showTitle: 'Breaking Bad',
    actorSlug: 'anna-gunn',
    actorName: 'Anna Gunn',
    seasonsActive: 'Seasons 1–5',
    characterArc: 'Skyler White is Walter\'s wife who transitions from unknowing spouse to reluctant accomplice to adversary. Her journey is one of the most complex and debated character arcs in television history.\n\nInitially presented as a supportive wife and mother, Skyler grows suspicious of Walter\'s behavior and eventually discovers his meth empire. Rather than turning him in, she becomes complicit — laundering money through a car wash business while trying to protect her children.\n\nSkyler\'s moral compromises mirror Walter\'s in smaller but significant ways. She too crosses ethical lines, but unlike Walter, she does so primarily to protect her family rather than out of ego or ambition. Her famous "I am not in danger, Skyler. I am the danger" scene with Walter crystallizes the power imbalance in their relationship.\n\nBy the series end, Skyler is left alone with the consequences of Walter\'s choices — financially ruined, legally compromised, and emotionally devastated.',
    keyEpisodes: [
      { title: 'I.F.T.', season: 3, episode: 3, description: 'Skyler retaliates against Walter by sleeping with Ted Beneke.' },
      { title: 'Cornered', season: 4, episode: 6, description: 'Walter delivers the iconic "I am the danger" speech to Skyler.' },
      { title: 'Fifty-One', season: 5, episode: 4, description: 'Skyler walks into the pool in a cry for help, revealing her desperation.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Anna_Gunn_2013_%28cropped%29.jpg/440px-Anna_Gunn_2013_%28cropped%29.jpg', alt: 'Anna Gunn, who portrays Skyler White', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [{ name: 'r/breakingbad', url: 'https://www.reddit.com/r/breakingbad/', platform: 'Reddit', description: 'Main community' }],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [{ name: 'Breaking Bad Wiki - Skyler', url: 'https://breakingbad.fandom.com/wiki/Skyler_White', platform: 'Web', description: 'Skyler White wiki page' }],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 72, engagement: 78, socialActivity: 65, memeVelocity: 80, fanArtDensity: 55, fandomLongevity: 82 },
    faqs: [
      { question: 'Who plays Skyler White?', answer: 'Anna Gunn plays Skyler White in Breaking Bad. Gunn won two Emmy Awards for Outstanding Supporting Actress in a Drama Series for the role.' },
      { question: 'Does Skyler White know about Walter\'s meth business?', answer: 'Yes, Skyler discovers Walter\'s involvement in the meth trade during Season 3. She eventually becomes complicit by helping launder money through the A1A Car Wash.' }
    ],
    videos: [],
    relatedCharacterSlugs: ['walter-white', 'hank-schrader', 'jesse-pinkman'],
    tags: ['complex', 'controversial', 'wife']
  },
  {
    slug: 'gus-fring',
    name: 'Gustavo "Gus" Fring',
    showSlug: 'breaking-bad',
    showTitle: 'Breaking Bad',
    actorSlug: 'giancarlo-esposito',
    actorName: 'Giancarlo Esposito',
    seasonsActive: 'Seasons 2–4',
    characterArc: 'Gustavo Fring is the meticulously disciplined owner of Los Pollos Hermanos, a successful fast-food chain that serves as the front for one of the largest methamphetamine distribution networks in the American Southwest. Fring presents an impeccable public persona — a philanthropist, community pillar, and friend to law enforcement.\n\nBeneath this facade lies a calculating, patient, and ruthless drug kingpin. Gus spent decades building his empire, motivated in part by a desire for revenge against the Juarez Cartel for the murder of his partner Max. His ability to compartmentalize his dual lives makes him one of television\'s most compelling antagonists.\n\nGus becomes Walter\'s employer and, eventually, his greatest rival. Their chess match of intellect and cunning drives the show\'s middle seasons, culminating in Walter\'s elaborate plot to kill Gus using Hector Salamanca as a suicide bomber.\n\nGus\'s death — walking out of Hector\'s room with half his face blown off, straightening his tie before collapsing — is one of the most iconic moments in television history.',
    keyEpisodes: [
      { title: 'Mandala', season: 2, episode: 11, description: 'Gus Fring is first introduced as a seemingly ordinary restaurant owner.' },
      { title: 'Box Cutter', season: 4, episode: 1, description: 'Gus silently murders his own henchman Victor to send a message to Walter and Jesse.' },
      { title: 'Face Off', season: 4, episode: 13, description: 'Gus is killed in an explosion orchestrated by Walter using Hector Salamanca.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Giancarlo_Esposito_by_Gage_Skidmore.jpg/440px-Giancarlo_Esposito_by_Gage_Skidmore.jpg', alt: 'Giancarlo Esposito, who portrays Gus Fring', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [{ name: 'r/breakingbad', url: 'https://www.reddit.com/r/breakingbad/', platform: 'Reddit', description: 'Main community' }, { name: 'r/betterCallSaul', url: 'https://www.reddit.com/r/betterCallSaul/', platform: 'Reddit', description: 'Better Call Saul community where Gus also appears' }],
      youtubeChannels: [{ name: 'Gus Fring - Greatest TV Villain', url: 'https://www.youtube.com/results?search_query=gus+fring+best+scenes', platform: 'YouTube', description: 'Best Gus Fring scenes compilations' }],
      twitterAccounts: [],
      fanSites: [{ name: 'Breaking Bad Wiki - Gus', url: 'https://breakingbad.fandom.com/wiki/Gustavo_Fring', platform: 'Web', description: 'Gus Fring wiki page' }],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 91, engagement: 90, socialActivity: 85, memeVelocity: 93, fanArtDensity: 88, fandomLongevity: 95 },
    faqs: [
      { question: 'Who plays Gus Fring?', answer: 'Giancarlo Esposito plays Gustavo "Gus" Fring in Breaking Bad and Better Call Saul. The role made Esposito one of television\'s most recognizable character actors.' },
      { question: 'How does Gus Fring die?', answer: 'Gus Fring is killed in Season 4, Episode 13 ("Face Off") when Walter White rigs Hector Salamanca\'s wheelchair with a bomb. Gus walks out of the room with half his face destroyed before collapsing.' },
      { question: 'Is Gus Fring in Better Call Saul?', answer: 'Yes, Giancarlo Esposito reprises his role as Gus Fring in Better Call Saul, the prequel series to Breaking Bad, appearing from Season 3 onward.' }
    ],
    videos: [{ title: 'Gus Fring - Face Off Scene', youtubeId: 'NMhGMpOyMWc', description: 'The iconic death scene of Gus Fring.' }],
    relatedCharacterSlugs: ['walter-white', 'jesse-pinkman', 'mike-ehrmantraut', 'saul-goodman'],
    tags: ['villain', 'antagonist', 'iconic', 'fan-favorite']
  },
  {
    slug: 'saul-goodman',
    name: 'Saul Goodman',
    showSlug: 'breaking-bad',
    showTitle: 'Breaking Bad',
    actorSlug: 'bob-odenkirk',
    actorName: 'Bob Odenkirk',
    seasonsActive: 'Seasons 2–5',
    characterArc: 'Saul Goodman — real name Jimmy McGill — is a flamboyant criminal lawyer who becomes Walter and Jesse\'s legal counsel. Known for his garish suits, strip-mall office, and catchy slogan "Better Call Saul!", he serves as comic relief while also being a shrewd and resourceful operator.\n\nSaul connects Walter and Jesse to key criminal contacts including Gus Fring and Mike Ehrmantraut. Despite his comedic exterior, Saul is deeply pragmatic and morally flexible, willing to bend any law for the right price.\n\nHis character proved so popular that he received his own prequel spin-off series, Better Call Saul, which explores his origins as idealistic lawyer Jimmy McGill and his gradual transformation into the morally bankrupt Saul Goodman.',
    keyEpisodes: [
      { title: 'Better Call Saul', season: 2, episode: 8, description: 'Saul Goodman\'s first appearance, as Jesse and Walter seek legal help.' },
      { title: 'Granite State', season: 5, episode: 15, description: 'Saul disappears through the vacuum cleaner guy, setting up Better Call Saul\'s ending.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Bob_Odenkirk_by_Gage_Skidmore_3.jpg/440px-Bob_Odenkirk_by_Gage_Skidmore_3.jpg', alt: 'Bob Odenkirk, who portrays Saul Goodman', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [{ name: 'r/betterCallSaul', url: 'https://www.reddit.com/r/betterCallSaul/', platform: 'Reddit', description: 'Better Call Saul/Saul Goodman community' }],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [{ name: 'Breaking Bad Wiki - Saul', url: 'https://breakingbad.fandom.com/wiki/Saul_Goodman', platform: 'Web', description: 'Saul Goodman wiki page' }],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 90, engagement: 92, socialActivity: 88, memeVelocity: 94, fanArtDensity: 82, fandomLongevity: 93 },
    faqs: [
      { question: 'Who plays Saul Goodman?', answer: 'Bob Odenkirk plays Saul Goodman (Jimmy McGill) in Breaking Bad and the spin-off series Better Call Saul.' },
      { question: 'What is Saul Goodman\'s real name?', answer: 'Saul Goodman\'s real name is Jimmy McGill. "Saul Goodman" is a play on "It\'s all good, man," which he adopted as his professional name.' }
    ],
    videos: [],
    relatedCharacterSlugs: ['walter-white', 'jesse-pinkman', 'mike-ehrmantraut', 'gus-fring'],
    tags: ['comic-relief', 'fan-favorite', 'spin-off']
  },
  {
    slug: 'mike-ehrmantraut',
    name: 'Mike Ehrmantraut',
    showSlug: 'breaking-bad',
    showTitle: 'Breaking Bad',
    actorSlug: 'jonathan-banks',
    actorName: 'Jonathan Banks',
    seasonsActive: 'Seasons 2–5',
    characterArc: 'Mike Ehrmantraut is a former Philadelphia police officer turned professional fixer and enforcer who works for Gus Fring. Quiet, methodical, and lethally competent, Mike is the consummate professional — a man who takes no pleasure in violence but executes it with clinical precision when necessary.\n\nMike\'s primary motivation is his granddaughter Kaylee, for whom he does everything. His backstory, explored more fully in Better Call Saul, reveals a man shaped by corruption, loss, and a pragmatic acceptance of the criminal world.\n\nHis dynamic with Walter White is defined by mutual contempt — Mike sees Walter as a dangerous amateur, while Walter resents Mike\'s loyalty to Gus. Mike\'s death at Walter\'s hands is one of the series\' most senseless and tragic moments.',
    keyEpisodes: [
      { title: 'Half Measures', season: 3, episode: 12, description: 'Mike tells Walter the "half measures" story, one of the show\'s most memorable monologues.' },
      { title: 'Say My Name', season: 5, episode: 7, description: 'Walter shoots Mike in a fit of ego after Mike insults him, then watches him die by a river.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Jonathan_Banks_by_Gage_Skidmore.jpg/440px-Jonathan_Banks_by_Gage_Skidmore.jpg', alt: 'Jonathan Banks, who portrays Mike Ehrmantraut', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [{ name: 'r/breakingbad', url: 'https://www.reddit.com/r/breakingbad/', platform: 'Reddit', description: 'Main community' }],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [{ name: 'Breaking Bad Wiki - Mike', url: 'https://breakingbad.fandom.com/wiki/Mike_Ehrmantraut', platform: 'Web', description: 'Mike Ehrmantraut wiki page' }],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 85, engagement: 87, socialActivity: 78, memeVelocity: 82, fanArtDensity: 75, fandomLongevity: 92 },
    faqs: [
      { question: 'Who plays Mike Ehrmantraut?', answer: 'Jonathan Banks plays Mike Ehrmantraut in Breaking Bad and Better Call Saul.' },
      { question: 'How does Mike die in Breaking Bad?', answer: 'Mike is shot by Walter White in Season 5, Episode 7 ("Say My Name") after refusing to give up the names of his imprisoned associates. He dies peacefully by a riverside.' }
    ],
    videos: [],
    relatedCharacterSlugs: ['walter-white', 'gus-fring', 'jesse-pinkman', 'saul-goodman'],
    tags: ['enforcer', 'fan-favorite', 'stoic']
  }
];

module.exports = { breakingBadCharacters };
