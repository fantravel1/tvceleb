// Friends and The Sopranos Characters
const friendsCharacters = [
  {
    slug: 'rachel-green',
    name: 'Rachel Green',
    showSlug: 'friends',
    showTitle: 'Friends',
    actorSlug: 'jennifer-aniston',
    actorName: 'Jennifer Aniston',
    seasonsActive: 'Seasons 1–10',
    characterArc: 'Rachel Green arrives at Central Perk in a rain-soaked wedding dress in the pilot episode, having just fled her wedding to orthodontist Barry Farber. A sheltered, privileged young woman who has never held a job or lived on her own, Rachel must reinvent herself from the ground up. She moves in with Monica Geller and begins working as a waitress at Central Perk, marking the start of one of television\'s most beloved character transformations.\n\nOver the course of ten seasons, Rachel evolves from a spoiled, credit-card-dependent socialite into an ambitious, self-sufficient fashion executive. Her career trajectory — from waitress to Bloomingdale\'s assistant buyer to Ralph Lauren executive — mirrors her personal growth. She earns every promotion through determination and a genuine passion for fashion, proving that her reinvention is not superficial but deeply rooted.\n\nRachel\'s romantic arc with Ross Geller forms the emotional backbone of the entire series. Their on-again, off-again relationship — defined by the infamous "We were on a break!" debate — spans a decade of missed connections, jealousy, other partners, and an unplanned pregnancy. Their daughter Emma, born in Season 8, adds new dimensions to both characters.\n\nBy the series finale, Rachel faces her ultimate test: choosing between a dream job at Louis Vuitton in Paris and staying in New York for Ross. Her decision to get off the plane is not a sacrifice of ambition but an acknowledgment that love and career need not be mutually exclusive. Rachel\'s journey from runaway bride to empowered mother and professional remains one of the most satisfying character arcs in sitcom history.',
    keyEpisodes: [
      { title: 'The Pilot', season: 1, episode: 1, description: 'Rachel arrives at Central Perk in her wedding dress after leaving Barry at the altar, reuniting with Monica and the group.' },
      { title: 'The One Where Rachel Finds Out', season: 1, episode: 24, description: 'Rachel discovers Ross\'s feelings for her and rushes to the airport to meet him, only to find he has a new girlfriend.' },
      { title: 'The One Where Ross and Rachel Take a Break', season: 3, episode: 15, description: 'The iconic episode where Ross and Rachel\'s relationship fractures over the "break" that would define their dynamic for years.' },
      { title: 'The One Where Rachel Has a Baby', season: 8, episode: 23, description: 'Rachel gives birth to Emma in a two-part episode that redefines her relationship with Ross.' },
      { title: 'The Last One', season: 10, episode: 17, description: 'Rachel gets off the plane to Paris, choosing to stay in New York with Ross in the emotional series finale.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/JenniferAnistonHWoFFeb2012.jpg/440px-JenniferAnistonHWoFFeb2012.jpg', alt: 'Jennifer Aniston, who portrays Rachel Green in Friends', attribution: 'Angela George, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/friends_tv_show', url: 'https://www.reddit.com/r/friends_tv_show/', platform: 'Reddit', description: 'Main Friends subreddit with active fan discussions and episode analysis' },
        { name: 'r/howyoudoin', url: 'https://www.reddit.com/r/howyoudoin/', platform: 'Reddit', description: 'Popular Friends community for memes, discussions, and trivia' }
      ],
      youtubeChannels: [
        { name: 'Friends - Official Channel', url: 'https://www.youtube.com/channel/UChGVWtqKyIaMjADHMtwnqOQ', platform: 'YouTube', description: 'Official Warner Bros. Friends YouTube channel with clips and compilations' }
      ],
      twitterAccounts: [
        { name: '@FriendsTV', url: 'https://twitter.com/FriendsTV', platform: 'Twitter/X', description: 'Official Friends Twitter account' }
      ],
      fanSites: [
        { name: 'Friends Wiki', url: 'https://friends.fandom.com/', platform: 'Web', description: 'Comprehensive Friends encyclopedia on Fandom' }
      ],
      instagramAccounts: [
        { name: '@friends', url: 'https://www.instagram.com/friends/', platform: 'Instagram', description: 'Official Friends Instagram page' }
      ],
      tiktokCreators: [
        { name: 'Friends Clips', url: 'https://www.tiktok.com/tag/friends', platform: 'TikTok', description: 'Friends fan edits and iconic scene clips on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 92, engagement: 90, socialActivity: 88, memeVelocity: 85, fanArtDensity: 80, fandomLongevity: 95 },
    faqs: [
      { question: 'Who plays Rachel Green in Friends?', answer: 'Jennifer Aniston plays Rachel Green in Friends. Aniston won a Primetime Emmy Award for Outstanding Lead Actress in a Comedy Series in 2002 for the role, and the character catapulted her to global superstardom. Her hairstyle from the first season, known as "The Rachel," became one of the most requested haircuts of the 1990s.' },
      { question: 'Do Ross and Rachel end up together?', answer: 'Yes, Ross and Rachel end up together in the series finale "The Last One" (Season 10, Episodes 17-18). Rachel decides not to move to Paris for her job at Louis Vuitton and gets off the plane to be with Ross. Their reconciliation resolves one of television\'s longest-running romantic storylines.' },
      { question: 'Were Ross and Rachel really on a break?', answer: 'This is one of television\'s most debated questions. In Season 3, Episode 15, Rachel suggests they "take a break" from their relationship. Ross sleeps with someone else that same night, leading to their breakup. Rachel maintains they were not broken up, while Ross insists they were on a break. The show intentionally leaves this ambiguous, and the debate has become a cultural phenomenon.' },
      { question: 'What is Rachel Green\'s career in Friends?', answer: 'Rachel starts as a waitress at Central Perk in Season 1 after leaving her fiance at the altar. She later breaks into the fashion industry, working at Bloomingdale\'s as an assistant buyer, then moves to Ralph Lauren as an executive. By the end of the series, she receives a job offer from Louis Vuitton in Paris, demonstrating her remarkable professional growth.' },
      { question: 'Who is Rachel Green\'s baby?', answer: 'Rachel\'s daughter Emma is born in Season 8, Episode 23 ("The One Where Rachel Has a Baby"). The father is Ross Geller, following a one-night stand that resulted from a complicated emotional situation. Emma becomes a significant part of the show\'s later seasons.' }
    ],
    videos: [
      { title: 'Rachel Green\'s Best Moments', youtubeId: 'Jge0fOsRyIg', description: 'A compilation of Rachel Green\'s funniest and most memorable moments throughout all ten seasons.' },
      { title: 'Ross and Rachel - Complete Love Story', youtubeId: '986MlhBMKnc', description: 'The complete Ross and Rachel love story from pilot to finale.' },
      { title: 'Rachel Gets Off the Plane - Series Finale', youtubeId: 'X1cMeSkENuA', description: 'The iconic final scene where Rachel gets off the plane to Paris.' }
    ],
    relatedCharacterSlugs: ['ross-geller', 'monica-geller', 'chandler-bing', 'joey-tribbiani', 'phoebe-buffay'],
    tags: ['protagonist', 'fashion', 'iconic', 'romantic-lead']
  },
  {
    slug: 'ross-geller',
    name: 'Ross Geller',
    showSlug: 'friends',
    showTitle: 'Friends',
    actorSlug: 'david-schwimmer',
    actorName: 'David Schwimmer',
    seasonsActive: 'Seasons 1–10',
    characterArc: 'Ross Geller is a paleontologist at the Museum of Natural History and later a professor at New York University, introduced as Monica\'s older brother and the group\'s resident intellectual. From the very first episode, his unrequited love for Rachel Green establishes the series\' central romantic tension. Ross is earnest, nerdy, and emotionally vulnerable in ways that make him both endearing and exasperating.\n\nRoss\'s personal life is marked by spectacular romantic misfortune. He goes through three divorces — from Carol (who leaves him for a woman), Emily (whom he accidentally calls "Rachel" at their wedding), and Rachel herself (a drunken Vegas marriage). His inability to maintain a lasting relationship despite being a hopeless romantic becomes one of the show\'s richest sources of comedy and pathos.\n\nBeyond his love life, Ross is defined by his passion for dinosaurs and science, which the other friends often mock but which reveals his genuine intellectual depth. He is also a devoted father to Ben (his son with Carol) and later to Emma (his daughter with Rachel). His famous "pivot" scene, his leather pants disaster, and his unagi obsession showcase David Schwimmer\'s extraordinary physical comedy talents.\n\nRoss\'s arc reaches its culmination in the series finale when Rachel chooses him over her Paris career. His journey from lovesick teenager-at-heart to a man who finally gets the girl represents the show\'s ultimate thesis: that love, however messy and imperfect, is worth waiting for.',
    keyEpisodes: [
      { title: 'The Pilot', season: 1, episode: 1, description: 'Ross is introduced dealing with his divorce from Carol, and his long-standing crush on Rachel is established.' },
      { title: 'The One Where Ross and Rachel Take a Break', season: 3, episode: 15, description: 'The pivotal episode that spawns the iconic "We were on a break!" debate after Ross and Rachel\'s relationship fractures.' },
      { title: 'The One with Ross\'s Wedding', season: 4, episode: 24, description: 'Ross accidentally says Rachel\'s name instead of Emily\'s at his wedding in London, destroying his second marriage.' },
      { title: 'The One Where Ross Is Fine', season: 10, episode: 2, description: 'Ross hilariously pretends to be okay with Joey and Rachel dating, delivering one of Schwimmer\'s best comedic performances.' },
      { title: 'The Last One', season: 10, episode: 17, description: 'Ross chases Rachel to the airport and they finally reunite for good in the series finale.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/David_Schwimmer_2011.jpg/440px-David_Schwimmer_2011.jpg', alt: 'David Schwimmer, who portrays Ross Geller in Friends', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/friends_tv_show', url: 'https://www.reddit.com/r/friends_tv_show/', platform: 'Reddit', description: 'Main Friends subreddit' },
        { name: 'r/howyoudoin', url: 'https://www.reddit.com/r/howyoudoin/', platform: 'Reddit', description: 'Friends meme and discussion community' }
      ],
      youtubeChannels: [
        { name: 'Ross Geller Best Moments', url: 'https://www.youtube.com/results?search_query=ross+geller+best+moments', platform: 'YouTube', description: 'Compilations of Ross\'s funniest scenes' }
      ],
      twitterAccounts: [
        { name: '@FriendsTV', url: 'https://twitter.com/FriendsTV', platform: 'Twitter/X', description: 'Official Friends account' }
      ],
      fanSites: [
        { name: 'Friends Wiki - Ross Geller', url: 'https://friends.fandom.com/wiki/Ross_Geller', platform: 'Web', description: 'Ross Geller wiki page' }
      ],
      instagramAccounts: [
        { name: '@friends', url: 'https://www.instagram.com/friends/', platform: 'Instagram', description: 'Official Friends Instagram' }
      ],
      tiktokCreators: [
        { name: 'Ross Geller Edits', url: 'https://www.tiktok.com/tag/rossgeller', platform: 'TikTok', description: 'Fan edits and clips featuring Ross on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 85, engagement: 83, socialActivity: 80, memeVelocity: 90, fanArtDensity: 72, fandomLongevity: 92 },
    faqs: [
      { question: 'Who plays Ross Geller in Friends?', answer: 'David Schwimmer plays Ross Geller in Friends. Schwimmer was one of the first actors cast and was instrumental in shaping the show\'s ensemble dynamic. He received multiple Screen Actors Guild Award nominations for the role.' },
      { question: 'How many times does Ross get divorced?', answer: 'Ross gets divorced three times throughout the series: from Carol Willick (Season 1), Emily Waltham (Season 5), and Rachel Green (Season 6, after their drunken Las Vegas wedding). His three divorces become a running joke among the group.' },
      { question: 'What does Ross do for a living?', answer: 'Ross is a paleontologist. He works at the Museum of Natural History for most of the series and later becomes a professor at New York University. His passion for dinosaurs is a defining character trait and frequent source of comedy.' },
      { question: 'What is the "We were on a break" debate?', answer: 'In Season 3, Ross and Rachel take a break from their relationship. Ross sleeps with the copy girl Chloe that same night, leading to their breakup. For the rest of the series, Ross insists "We were on a break!" to justify his actions, while Rachel disagrees. This became one of the most famous recurring arguments in television history.' }
    ],
    videos: [
      { title: 'Ross Geller\'s Funniest Moments', youtubeId: 'VgRvFVFnMTk', description: 'A compilation of Ross\'s most hilarious scenes throughout Friends.' },
      { title: 'The Pivot Scene', youtubeId: '8w3wmQAMoxQ', description: 'The iconic scene where Ross tries to move a couch up a staircase while screaming "Pivot!"' }
    ],
    relatedCharacterSlugs: ['rachel-green', 'monica-geller', 'chandler-bing', 'joey-tribbiani', 'phoebe-buffay'],
    tags: ['protagonist', 'romantic-lead', 'comedy', 'intellectual']
  },
  {
    slug: 'monica-geller',
    name: 'Monica Geller',
    showSlug: 'friends',
    showTitle: 'Friends',
    actorSlug: 'courteney-cox',
    actorName: 'Courteney Cox',
    seasonsActive: 'Seasons 1–10',
    characterArc: 'Monica Geller is the group\'s anchor — the host, the chef, the organizer, and the competitive force of nature who holds everyone together. A professionally trained chef with an almost pathological need for cleanliness and order, Monica\'s controlling tendencies are rooted in a childhood spent as the overlooked, overweight daughter vying for her parents\' approval against golden-boy brother Ross.\n\nMonica\'s professional journey takes her through the demanding New York restaurant world, from catering gigs and thankless kitchen positions to eventually becoming head chef at Javu, a high-end restaurant. Her career struggles are portrayed with refreshing realism for a sitcom, showing the actual grind of working in the culinary industry.\n\nHer relationship with Chandler Bing is the show\'s great surprise love story. What begins as a one-night stand in London during Ross\'s wedding evolves into Friends\' most stable and deeply loving partnership. Their courtship, proposal (where both end up on their knees in tears), wedding, struggle with infertility, and eventual adoption of twins Jack and Erica form the show\'s emotional heart.\n\nMonica\'s competitiveness, her obsessive cleaning, and her loud, emphatic personality could easily have made her a one-dimensional character. Instead, Courteney Cox imbued her with warmth, vulnerability, and a fierce loyalty that made her the friend everyone wishes they had.',
    keyEpisodes: [
      { title: 'The One with the Flashback', season: 3, episode: 6, description: 'Flashbacks reveal Monica\'s history with the group and how Rachel came to live with her, deepening our understanding of Monica\'s loyalty.' },
      { title: 'The One with All the Thanksgivings', season: 5, episode: 8, description: 'Flashbacks show Monica\'s transformation from overweight teenager to confident adult, and the accidental severing of Chandler\'s toe.' },
      { title: 'The One with the Proposal', season: 6, episode: 25, description: 'Monica and Chandler\'s emotional double proposal, one of the series\' most beloved scenes.' },
      { title: 'The One with the Birth Mother', season: 10, episode: 9, description: 'Monica and Chandler meet Erica, the birth mother of their future twins, navigating the emotional complexities of adoption.' },
      { title: 'The Last One', season: 10, episode: 17, description: 'Monica and Chandler prepare to move to the suburbs with their newborn twins, marking the end of an era for the group.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Courteney_Cox_2014.jpg/440px-Courteney_Cox_2014.jpg', alt: 'Courteney Cox, who portrays Monica Geller in Friends', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/friends_tv_show', url: 'https://www.reddit.com/r/friends_tv_show/', platform: 'Reddit', description: 'Main Friends subreddit' },
        { name: 'r/howyoudoin', url: 'https://www.reddit.com/r/howyoudoin/', platform: 'Reddit', description: 'Friends discussion and meme community' }
      ],
      youtubeChannels: [
        { name: 'Monica Geller Best Moments', url: 'https://www.youtube.com/results?search_query=monica+geller+best+moments', platform: 'YouTube', description: 'Compilations of Monica\'s funniest and most heartfelt scenes' }
      ],
      twitterAccounts: [
        { name: '@FriendsTV', url: 'https://twitter.com/FriendsTV', platform: 'Twitter/X', description: 'Official Friends account' }
      ],
      fanSites: [
        { name: 'Friends Wiki - Monica Geller', url: 'https://friends.fandom.com/wiki/Monica_Geller', platform: 'Web', description: 'Monica Geller wiki page' }
      ],
      instagramAccounts: [
        { name: '@friends', url: 'https://www.instagram.com/friends/', platform: 'Instagram', description: 'Official Friends Instagram' }
      ],
      tiktokCreators: [
        { name: 'Monica Geller Edits', url: 'https://www.tiktok.com/tag/monicageller', platform: 'TikTok', description: 'Fan clips of Monica\'s funniest competitive moments' }
      ]
    },
    fanHeatIndex: { overall: 86, engagement: 84, socialActivity: 82, memeVelocity: 80, fanArtDensity: 78, fandomLongevity: 93 },
    faqs: [
      { question: 'Who plays Monica Geller in Friends?', answer: 'Courteney Cox plays Monica Geller in Friends. Cox was originally asked to audition for Rachel but lobbied for the role of Monica, feeling a stronger connection to the character\'s competitive and nurturing personality.' },
      { question: 'Do Monica and Chandler end up together?', answer: 'Yes, Monica and Chandler end up together. They begin dating secretly in Season 4 after sleeping together at Ross\'s wedding in London. They get engaged in Season 6, marry in Season 7, and adopt twins Jack and Erica in Season 10. Their relationship is often cited as the show\'s most successful love story.' },
      { question: 'Why can\'t Monica have children?', answer: 'In Season 9, Monica and Chandler learn they both have fertility issues — Monica has an inhospitable environment for embryos, and Chandler has low motility. After exploring IVF options, they decide to adopt and are matched with birth mother Erica in Season 10.' },
      { question: 'What is Monica Geller\'s job?', answer: 'Monica is a professional chef. Throughout the series, she works at various restaurants in New York, including a 1950s-themed diner and the upscale restaurant Javu, where she eventually becomes head chef. Her culinary passion is a core part of her identity.' }
    ],
    videos: [
      { title: 'Monica and Chandler\'s Love Story', youtubeId: 'SqZhIGmOMwQ', description: 'The complete Monica and Chandler love story from London to the finale.' },
      { title: 'Monica Geller\'s Competitive Moments', youtubeId: 'nVjm-gW9JnE', description: 'A compilation of Monica\'s most hilariously competitive moments.' }
    ],
    relatedCharacterSlugs: ['chandler-bing', 'rachel-green', 'ross-geller', 'joey-tribbiani', 'phoebe-buffay'],
    tags: ['protagonist', 'chef', 'competitive', 'fan-favorite']
  },
  {
    slug: 'chandler-bing',
    name: 'Chandler Bing',
    showSlug: 'friends',
    showTitle: 'Friends',
    actorSlug: 'matthew-perry',
    actorName: 'Matthew Perry',
    seasonsActive: 'Seasons 1–10',
    characterArc: 'Chandler Bing is the sarcastic, self-deprecating heart of Friends — a man who uses humor as armor against a deeply painful childhood. The son of a Las Vegas drag queen father and an erotic novelist mother whose very public divorce scarred him, Chandler deflects emotional intimacy with rapid-fire jokes and an almost pathological fear of commitment.\n\nIn the early seasons, Chandler is defined by his wit and his terror of relationships. He sabotages promising romances, hides behind irony, and works a corporate data processing job he openly despises (one so vague that his friends famously cannot remember what he does). Yet beneath the jokes lies a profoundly loyal friend — the one who supported Joey\'s acting career financially for years without complaint.\n\nChandler\'s relationship with Monica transforms him from the group\'s perpetual bachelor into its most devoted partner. Their love story, which begins unexpectedly in London, becomes the show\'s most emotionally resonant arc. Chandler overcomes his commitment phobia to propose, marry, and ultimately become a father through adoption. His growth from a man terrified of intimacy to one who gives up his job to pursue a passion for advertising demonstrates genuine personal evolution.\n\nMatthew Perry\'s performance made Chandler one of the most quoted characters in television history. His unique delivery — the emphatic word stress, the rhetorical questions, the perfectly timed sarcasm — created a comedic voice so distinctive it influenced an entire generation of humor. Following Perry\'s passing in 2023, the outpouring of grief demonstrated just how deeply Chandler Bing had embedded himself in the cultural consciousness.',
    keyEpisodes: [
      { title: 'The One Where Everybody Finds Out', season: 5, episode: 14, description: 'The group discovers Monica and Chandler\'s secret relationship in one of the series\' funniest episodes, culminating in Chandler\'s first "I love you."' },
      { title: 'The One with the Proposal', season: 6, episode: 25, description: 'Chandler\'s elaborate plan to surprise Monica with a proposal goes awry, leading to her proposing to him in a candlelit apartment.' },
      { title: 'The One with Monica and Chandler\'s Wedding', season: 7, episode: 24, description: 'Chandler panics before the wedding but ultimately shows up, and Rachel discovers she is pregnant.' },
      { title: 'The One Where Chandler Can\'t Cry', season: 6, episode: 14, description: 'Chandler confronts his emotional walls when he realizes he is unable to cry, exploring the depth beneath his humor.' },
      { title: 'The Last One', season: 10, episode: 17, description: 'Chandler and Monica welcome their adopted twins and prepare for their new life in the suburbs.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Matthew_Perry_2013.jpg/440px-Matthew_Perry_2013.jpg', alt: 'Matthew Perry, who portrayed Chandler Bing in Friends', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/friends_tv_show', url: 'https://www.reddit.com/r/friends_tv_show/', platform: 'Reddit', description: 'Main Friends subreddit' },
        { name: 'r/howyoudoin', url: 'https://www.reddit.com/r/howyoudoin/', platform: 'Reddit', description: 'Friends meme and discussion community' }
      ],
      youtubeChannels: [
        { name: 'Chandler Bing Best Sarcasm', url: 'https://www.youtube.com/results?search_query=chandler+bing+best+sarcasm', platform: 'YouTube', description: 'Compilations of Chandler\'s best sarcastic one-liners' }
      ],
      twitterAccounts: [
        { name: '@FriendsTV', url: 'https://twitter.com/FriendsTV', platform: 'Twitter/X', description: 'Official Friends account' }
      ],
      fanSites: [
        { name: 'Friends Wiki - Chandler Bing', url: 'https://friends.fandom.com/wiki/Chandler_Bing', platform: 'Web', description: 'Chandler Bing wiki page' }
      ],
      instagramAccounts: [
        { name: '@friends', url: 'https://www.instagram.com/friends/', platform: 'Instagram', description: 'Official Friends Instagram' }
      ],
      tiktokCreators: [
        { name: 'Chandler Bing Edits', url: 'https://www.tiktok.com/tag/chandlerbing', platform: 'TikTok', description: 'Chandler Bing fan tributes and iconic quote compilations on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 94, engagement: 93, socialActivity: 90, memeVelocity: 96, fanArtDensity: 85, fandomLongevity: 97 },
    faqs: [
      { question: 'Who plays Chandler Bing in Friends?', answer: 'Matthew Perry played Chandler Bing in Friends. Perry\'s comedic timing and unique delivery made Chandler one of the most beloved sitcom characters in television history. Perry passed away on October 28, 2023, and was widely mourned by fans worldwide.' },
      { question: 'What is Chandler Bing\'s job?', answer: 'Chandler works in statistical analysis and data reconfiguration for a large multinational corporation. His job is a running joke on the show, as his friends can never remember exactly what he does. In later seasons, he quits his corporate job to pursue a career in advertising, finding work that actually fulfills him.' },
      { question: 'What is Chandler Bing\'s most famous catchphrase?', answer: 'Chandler\'s most famous catchphrase is his rhetorical question format: "Could this BE any more...?" delivered with his signature emphatic word stress. For example, "Could this BE any more boring?" or "Could I BE wearing any more clothes?" This delivery became widely imitated in popular culture.' },
      { question: 'Do Monica and Chandler have children?', answer: 'Yes, Monica and Chandler adopt twins — a boy named Jack (after Monica\'s father) and a girl named Erica (after their birth mother) — in the series finale. They had struggled with infertility issues and chose adoption after learning they could not conceive naturally.' },
      { question: 'When did Matthew Perry pass away?', answer: 'Matthew Perry passed away on October 28, 2023, at the age of 54. His death prompted an enormous outpouring of tributes from fans and castmates. His autobiography "Friends, Lovers, and the Big Terrible Thing" (2022) had candidly discussed his struggles with addiction throughout his life and career.' }
    ],
    videos: [
      { title: 'Chandler Bing\'s Best One-Liners', youtubeId: 'uOoBVxYkl2I', description: 'A compilation of Chandler\'s funniest sarcastic one-liners from all ten seasons.' },
      { title: 'Monica and Chandler - Could They BE Any Cuter?', youtubeId: 'SqZhIGmOMwQ', description: 'The sweetest moments from Monica and Chandler\'s relationship.' },
      { title: 'Chandler Bing - The Art of Deflection', youtubeId: '3awJCuOdDWw', description: 'A video essay exploring how Chandler uses humor to cope with pain.' }
    ],
    relatedCharacterSlugs: ['monica-geller', 'joey-tribbiani', 'ross-geller', 'rachel-green', 'phoebe-buffay'],
    tags: ['fan-favorite', 'comic-relief', 'iconic', 'sarcastic']
  },
  {
    slug: 'joey-tribbiani',
    name: 'Joey Tribbiani',
    showSlug: 'friends',
    showTitle: 'Friends',
    actorSlug: 'matt-leblanc',
    actorName: 'Matt LeBlanc',
    seasonsActive: 'Seasons 1–10',
    characterArc: 'Joey Tribbiani is a struggling Italian-American actor from Queens, New York, whose combination of good looks, childlike innocence, and voracious appetite makes him one of television\'s most lovable characters. Joey is not the sharpest mind in the group, but he possesses an emotional intelligence and loyalty that his smarter friends sometimes lack.\n\nJoey\'s acting career provides some of the show\'s greatest comedy. His role as Dr. Drake Ramoray on the soap opera Days of Our Lives becomes a recurring storyline — he gets the part, gets killed off for angering the writers, and eventually returns. His forays into theater, film, and even a brief stint as a game show host showcase an actor who genuinely loves his craft, even if success remains elusive.\n\nHis friendship with Chandler is one of the great platonic love stories in television. From their shared recliner chairs to Joey\'s devastation when Chandler moves in with Monica, their bond transcends typical male friendship portrayals. Joey is the friend who would do anything for anyone — he walks Phoebe down the aisle, supports Ross through his divorces, and even falls in love with Rachel with a grace that avoids destroying the group dynamic.\n\nJoey\'s character became somewhat flanderized in later seasons, with his intelligence reduced for easy laughs. Yet Matt LeBlanc\'s innate warmth always kept the character grounded. Joey\'s iconic catchphrase "How you doin\'?" and his steadfast refusal to share food ("Joey doesn\'t share food!") remain cultural touchstones decades after the show ended.',
    keyEpisodes: [
      { title: 'The One Where Dr. Ramoray Dies', season: 2, episode: 18, description: 'Joey\'s character on Days of Our Lives is killed off after he tells a reporter he writes his own lines.' },
      { title: 'The One Where Everybody Finds Out', season: 5, episode: 14, description: 'Joey struggles to keep Monica and Chandler\'s secret, leading to hilarious confrontations and the famous "they don\'t know we know they know" scene.' },
      { title: 'The One with the Late Thanksgiving', season: 10, episode: 8, description: 'Joey gets his head stuck in Monica\'s door in a classic physical comedy moment, while Monica and Chandler learn they\'ve been selected to adopt.' },
      { title: 'The One Where Joey Tells Rachel', season: 8, episode: 16, description: 'Joey confesses his feelings for Rachel in one of the series\' most emotionally delicate scenes.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Matt_LeBlanc_2012.jpg/440px-Matt_LeBlanc_2012.jpg', alt: 'Matt LeBlanc, who portrays Joey Tribbiani in Friends', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/friends_tv_show', url: 'https://www.reddit.com/r/friends_tv_show/', platform: 'Reddit', description: 'Main Friends subreddit' },
        { name: 'r/howyoudoin', url: 'https://www.reddit.com/r/howyoudoin/', platform: 'Reddit', description: 'Friends meme and discussion community' }
      ],
      youtubeChannels: [
        { name: 'Joey Tribbiani Best Moments', url: 'https://www.youtube.com/results?search_query=joey+tribbiani+best+moments', platform: 'YouTube', description: 'Compilations of Joey\'s funniest food moments and "How you doin\'" scenes' }
      ],
      twitterAccounts: [
        { name: '@FriendsTV', url: 'https://twitter.com/FriendsTV', platform: 'Twitter/X', description: 'Official Friends account' }
      ],
      fanSites: [
        { name: 'Friends Wiki - Joey Tribbiani', url: 'https://friends.fandom.com/wiki/Joey_Tribbiani', platform: 'Web', description: 'Joey Tribbiani wiki page' }
      ],
      instagramAccounts: [
        { name: '@friends', url: 'https://www.instagram.com/friends/', platform: 'Instagram', description: 'Official Friends Instagram' }
      ],
      tiktokCreators: [
        { name: 'Joey Tribbiani Edits', url: 'https://www.tiktok.com/tag/joeytribbiani', platform: 'TikTok', description: 'Fan clips of Joey\'s iconic food scenes and catchphrases' }
      ]
    },
    fanHeatIndex: { overall: 90, engagement: 88, socialActivity: 86, memeVelocity: 93, fanArtDensity: 82, fandomLongevity: 94 },
    faqs: [
      { question: 'Who plays Joey Tribbiani in Friends?', answer: 'Matt LeBlanc plays Joey Tribbiani in Friends. LeBlanc received three Emmy nominations for the role and later starred in the spin-off series Joey (2004-2006). He went on to star in Episodes and host Top Gear.' },
      { question: 'What is Joey Tribbiani\'s catchphrase?', answer: 'Joey\'s most famous catchphrase is "How you doin\'?" — a pickup line he uses on women throughout the series. His other iconic line is "Joey doesn\'t share food!" which he declares emphatically when anyone tries to eat from his plate.' },
      { question: 'What is Joey\'s acting career in Friends?', answer: 'Joey is a struggling actor throughout the series. His most notable role is Dr. Drake Ramoray on the soap opera Days of Our Lives. He also performs in various theatrical productions, appears in a Japanese lipstick commercial, and briefly hosts a game show called Bamboozled.' },
      { question: 'Are Joey and Chandler best friends?', answer: 'Yes, Joey and Chandler are best friends and roommates for most of the series. Their bromance is one of the show\'s most beloved dynamics. They share a love of foosball, recliner chairs, and the chick and duck they adopt together. Joey is devastated when Chandler moves in with Monica.' },
      { question: 'Did Joey get a spin-off show?', answer: 'Yes, Joey received a spin-off series called Joey, which aired from 2004 to 2006 on NBC. The show followed Joey after he moves to Los Angeles to pursue his acting career. Despite Matt LeBlanc\'s efforts, the series was cancelled after two seasons due to low ratings.' }
    ],
    videos: [
      { title: 'Joey Tribbiani - How You Doin\'?', youtubeId: 'YjQ1xD6UL-4', description: 'Every "How you doin\'?" from all ten seasons of Friends.' },
      { title: 'Joey Doesn\'t Share Food', youtubeId: '4rrGJCKRCQ4', description: 'Joey\'s best food moments and his passionate relationship with eating.' },
      { title: 'Joey and Chandler\'s Best Moments', youtubeId: '3T0xhMAuGo4', description: 'The greatest moments from television\'s best bromance.' }
    ],
    relatedCharacterSlugs: ['chandler-bing', 'rachel-green', 'ross-geller', 'monica-geller', 'phoebe-buffay'],
    tags: ['fan-favorite', 'comic-relief', 'lovable', 'actor']
  },
  {
    slug: 'phoebe-buffay',
    name: 'Phoebe Buffay',
    showSlug: 'friends',
    showTitle: 'Friends',
    actorSlug: 'lisa-kudrow',
    actorName: 'Lisa Kudrow',
    seasonsActive: 'Seasons 1–10',
    characterArc: 'Phoebe Buffay is the group\'s eccentric free spirit — a masseuse and aspiring musician with a traumatic past that she processes with remarkable resilience and an offbeat worldview. Abandoned by her father, losing her mother to suicide, and having lived on the streets as a teenager, Phoebe has every reason to be bitter. Instead, she is the group\'s most optimistic and spiritually grounded member.\n\nPhoebe\'s musical career provides some of the show\'s most memorable moments. Her signature song "Smelly Cat" — a folk tune about a malodorous feline — becomes an unlikely cultural phenomenon. She performs regularly at Central Perk, delivering earnest songs with absurd lyrics that perfectly encapsulate her character: genuine, weird, and utterly herself.\n\nHer personal storylines explore surprisingly dark territory for a sitcom. She discovers her birth mother, serves as a surrogate for her brother\'s triplets, struggles with her father\'s abandonment, and confronts her mother\'s suicide. Lisa Kudrow navigates these tonal shifts with remarkable skill, finding humor without diminishing the pain.\n\nPhoebe\'s romance with Mike Hannigan (Paul Rudd) in the later seasons gives her the stable, loving relationship she always deserved. Their wedding, officiated by Joey, is one of the series\' most heartwarming moments. Phoebe\'s arc proves that the most unconventional person in the room can also be the most emotionally intelligent.',
    keyEpisodes: [
      { title: 'The One with Phoebe\'s Dad', season: 2, episode: 9, description: 'Phoebe discovers the photo she thought was her father is actually a stock photo, launching her quest to find her real dad.' },
      { title: 'The One Hundredth', season: 5, episode: 3, description: 'Phoebe gives birth to triplets as a surrogate for her brother Frank Jr. and his wife Alice.' },
      { title: 'The One Where Everybody Finds Out', season: 5, episode: 14, description: 'Phoebe and Rachel discover Monica and Chandler\'s relationship, leading to Phoebe\'s hilarious attempt to seduce Chandler.' },
      { title: 'The One with Phoebe\'s Wedding', season: 10, episode: 12, description: 'Phoebe and Mike get married outside Central Perk during a snowstorm, with Joey officiating.' },
      { title: 'The One Where Heckles Dies', season: 2, episode: 3, description: 'After their eccentric neighbor Mr. Heckles dies alone, Chandler fears becoming him, while Phoebe debates evolution with Ross.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Lisa_Kudrow_2014.jpg/440px-Lisa_Kudrow_2014.jpg', alt: 'Lisa Kudrow, who portrays Phoebe Buffay in Friends', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/friends_tv_show', url: 'https://www.reddit.com/r/friends_tv_show/', platform: 'Reddit', description: 'Main Friends subreddit' },
        { name: 'r/howyoudoin', url: 'https://www.reddit.com/r/howyoudoin/', platform: 'Reddit', description: 'Friends meme and discussion community' }
      ],
      youtubeChannels: [
        { name: 'Phoebe Buffay Best Moments', url: 'https://www.youtube.com/results?search_query=phoebe+buffay+best+moments', platform: 'YouTube', description: 'Compilations of Phoebe\'s funniest and most eccentric moments' }
      ],
      twitterAccounts: [
        { name: '@FriendsTV', url: 'https://twitter.com/FriendsTV', platform: 'Twitter/X', description: 'Official Friends account' }
      ],
      fanSites: [
        { name: 'Friends Wiki - Phoebe Buffay', url: 'https://friends.fandom.com/wiki/Phoebe_Buffay', platform: 'Web', description: 'Phoebe Buffay wiki page' }
      ],
      instagramAccounts: [
        { name: '@friends', url: 'https://www.instagram.com/friends/', platform: 'Instagram', description: 'Official Friends Instagram' }
      ],
      tiktokCreators: [
        { name: 'Smelly Cat TikTok', url: 'https://www.tiktok.com/tag/smellycat', platform: 'TikTok', description: 'Fan covers and clips of Phoebe\'s Smelly Cat and other songs' }
      ]
    },
    fanHeatIndex: { overall: 88, engagement: 86, socialActivity: 84, memeVelocity: 90, fanArtDensity: 80, fandomLongevity: 93 },
    faqs: [
      { question: 'Who plays Phoebe Buffay in Friends?', answer: 'Lisa Kudrow plays Phoebe Buffay in Friends. Kudrow won a Primetime Emmy Award for Outstanding Supporting Actress in a Comedy Series in 1998 for the role. She also plays Phoebe\'s twin sister Ursula in both Friends and the show Mad About You.' },
      { question: 'What is "Smelly Cat" from Friends?', answer: '"Smelly Cat" is Phoebe Buffay\'s signature song, which she performs regularly at Central Perk. The folk song, with lyrics asking "Smelly cat, smelly cat, what are they feeding you?", became an unexpected cultural phenomenon. It has been covered by numerous artists and was memorably performed with Lady Gaga during the Friends reunion special in 2021.' },
      { question: 'Does Phoebe Buffay have a twin?', answer: 'Yes, Phoebe has an identical twin sister named Ursula Buffay, also played by Lisa Kudrow. Ursula is a waitress at the restaurant Riff\'s and is portrayed as self-centered and indifferent, serving as the opposite of Phoebe\'s warm personality. The character originated on the show Mad About You.' },
      { question: 'Who does Phoebe marry in Friends?', answer: 'Phoebe marries Mike Hannigan, played by Paul Rudd, in Season 10, Episode 12 ("The One with Phoebe\'s Wedding"). They met through a blind date set up by Joey, and their relationship became one of the show\'s most beloved later-season storylines.' }
    ],
    videos: [
      { title: 'Phoebe Buffay - Smelly Cat', youtubeId: 'XNXIZuIBJKs', description: 'The iconic Smelly Cat performance at Central Perk.' },
      { title: 'Phoebe Buffay\'s Funniest Moments', youtubeId: '0gfMXQpJXEo', description: 'A compilation of Phoebe\'s most hilarious and eccentric scenes.' },
      { title: 'Phoebe and Mike\'s Love Story', youtubeId: 'jcFdmMI1tQ8', description: 'The complete Phoebe and Mike romance from blind date to wedding.' }
    ],
    relatedCharacterSlugs: ['rachel-green', 'monica-geller', 'chandler-bing', 'ross-geller', 'joey-tribbiani'],
    tags: ['fan-favorite', 'eccentric', 'musician', 'free-spirit']
  }
];

const sopranosCharacters = [
  {
    slug: 'tony-soprano',
    name: 'Tony Soprano',
    showSlug: 'the-sopranos',
    showTitle: 'The Sopranos',
    actorSlug: 'james-gandolfini',
    actorName: 'James Gandolfini',
    seasonsActive: 'Seasons 1–6',
    characterArc: 'Tony Soprano is the boss of the DiMeo crime family in New Jersey, a man of enormous appetite and contradictions who revolutionized television drama. He is simultaneously a loving father who dotes on the ducks in his swimming pool and a ruthless mob boss capable of strangling an informant with his bare hands. His decision to seek therapy with Dr. Jennifer Melfi in the pilot episode was groundbreaking — a mob boss on a psychiatrist\'s couch became the defining image of prestige television.\n\nTony\'s psychological complexity drives the entire series. His panic attacks, which begin in the pilot and recur throughout, are manifestations of a deeply fractured psyche shaped by his sociopathic mother Livia and his mobster father Johnny Boy. Through therapy, Tony excavates childhood traumas, confronts his capacity for violence, and occasionally glimpses the possibility of change — only to retreat into the familiar patterns of manipulation and brutality.\n\nHis relationships are the show\'s emotional battleground. His marriage to Carmela is a masterclass in codependency and denial. His mentorship of Christopher Moltisanti reveals the cycle of abuse repeating across generations. His conflicts with Uncle Junior, Richie Aprile, Ralph Cifaretto, and Phil Leotardo test his leadership and survival instincts at every turn.\n\nThe series finale\'s infamous cut to black — leaving Tony\'s fate permanently ambiguous — was the perfect conclusion for a character who existed in moral gray areas. James Gandolfini\'s towering performance created the template for the modern anti-hero, directly paving the way for Walter White, Don Draper, and every complex protagonist who followed.',
    keyEpisodes: [
      { title: 'Pilot', season: 1, episode: 1, description: 'Tony Soprano begins therapy with Dr. Melfi after suffering panic attacks, establishing the show\'s revolutionary premise.' },
      { title: 'College', season: 1, episode: 5, description: 'Tony strangles an informant while on a college tour with his daughter Meadow, establishing the show\'s moral complexity in a single episode.' },
      { title: 'Funhouse', season: 2, episode: 13, description: 'Tony has fever dreams that reveal the truth about Big Pussy\'s betrayal, leading to his execution on a boat.' },
      { title: 'Long Term Parking', season: 5, episode: 12, description: 'Adriana La Cerva is murdered after Tony discovers she has been cooperating with the FBI, one of the series\' most devastating episodes.' },
      { title: 'Made in America', season: 6, episode: 21, description: 'The series finale. Tony sits in a diner with his family as the screen cuts to black, creating television\'s most debated ending.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/James_Gandolfini_2011_%28cropped%29.jpg/440px-James_Gandolfini_2011_%28cropped%29.jpg', alt: 'James Gandolfini, who portrayed Tony Soprano in The Sopranos', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/thesopranos', url: 'https://www.reddit.com/r/thesopranos/', platform: 'Reddit', description: 'Main Sopranos subreddit with 400K+ members, famous for its in-character quote threads' },
        { name: 'r/CirclejerkSopranos', url: 'https://www.reddit.com/r/CirclejerkSopranos/', platform: 'Reddit', description: 'Sopranos meme and shitposting community' }
      ],
      youtubeChannels: [
        { name: 'The Sopranos - Official Channel', url: 'https://www.youtube.com/channel/UCHxZWraoY_4E7Fmf5mPObow', platform: 'YouTube', description: 'Official HBO Sopranos channel with clips and behind-the-scenes content' }
      ],
      twitterAccounts: [
        { name: '@TheSopranos', url: 'https://twitter.com/TheSopranos', platform: 'Twitter/X', description: 'Official Sopranos Twitter account' }
      ],
      fanSites: [
        { name: 'Sopranos Wiki', url: 'https://sopranos.fandom.com/', platform: 'Web', description: 'Comprehensive Sopranos encyclopedia on Fandom' }
      ],
      instagramAccounts: [
        { name: '@thesopranos', url: 'https://www.instagram.com/thesopranos/', platform: 'Instagram', description: 'Official Sopranos Instagram page' }
      ],
      tiktokCreators: [
        { name: 'Sopranos Edits', url: 'https://www.tiktok.com/tag/thesopranos', platform: 'TikTok', description: 'Fan edits and iconic Sopranos scene clips on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 97, engagement: 96, socialActivity: 93, memeVelocity: 98, fanArtDensity: 88, fandomLongevity: 99 },
    faqs: [
      { question: 'Who plays Tony Soprano?', answer: 'James Gandolfini played Tony Soprano in The Sopranos. Gandolfini won three Primetime Emmy Awards for Outstanding Lead Actor in a Drama Series for the role (2000, 2001, 2003). His performance is widely regarded as one of the greatest in television history. Gandolfini passed away on June 19, 2013, at the age of 51.' },
      { question: 'Does Tony Soprano die in the finale?', answer: 'The Sopranos series finale ("Made in America") ends with an abrupt cut to black as Tony sits in a diner with his family, leaving his fate deliberately ambiguous. Creator David Chase has hinted in interviews that Tony was killed, but the show never explicitly confirms this. The ending remains one of the most debated moments in television history.' },
      { question: 'Why does Tony Soprano go to therapy?', answer: 'Tony begins seeing psychiatrist Dr. Jennifer Melfi in the pilot episode after experiencing panic attacks. The attacks are triggered by a family of ducks leaving his swimming pool, which his subconscious connects to his fear of losing his own family. Therapy becomes a central storytelling device throughout the series, exploring Tony\'s psychology and the roots of his violent behavior.' },
      { question: 'Is Tony Soprano based on a real person?', answer: 'Tony Soprano is not based on a single real person but draws inspiration from several real New Jersey mob figures. Creator David Chase was inspired by the declining state of the American Mafia in the late 1990s. The character also reflects Chase\'s own complicated relationship with his mother, who partly inspired the character of Livia Soprano.' },
      { question: 'What is Tony Soprano\'s most famous quote?', answer: 'Tony has many iconic quotes, including "Those who want respect, give respect," "A wrong decision is better than indecision," and his therapy sessions\' recurring theme: "I find I have to be the sad clown." The show\'s dialogue, often delivered in Tony\'s distinctive New Jersey cadence, has become endlessly quotable in online fan communities.' }
    ],
    videos: [
      { title: 'Tony Soprano - Greatest Moments', youtubeId: 'qqE7ZGHhn4M', description: 'A compilation of Tony Soprano\'s most iconic scenes from all six seasons.' },
      { title: 'The Sopranos - Final Scene', youtubeId: 'FnaGvOGbMDM', description: 'The infamous series finale scene in Holsten\'s diner that cut to black.' },
      { title: 'Tony Soprano - Character Study', youtubeId: '4hEep2Ih7Ck', description: 'A video essay analyzing Tony Soprano as television\'s greatest anti-hero.' }
    ],
    relatedCharacterSlugs: ['carmela-soprano', 'christopher-moltisanti', 'jennifer-melfi', 'silvio-dante', 'paulie-gualtieri'],
    tags: ['anti-hero', 'protagonist', 'iconic', 'mob-boss']
  },
  {
    slug: 'carmela-soprano',
    name: 'Carmela Soprano',
    showSlug: 'the-sopranos',
    showTitle: 'The Sopranos',
    actorSlug: 'edie-falco',
    actorName: 'Edie Falco',
    seasonsActive: 'Seasons 1–6',
    characterArc: 'Carmela Soprano is the wife of mob boss Tony Soprano and one of television\'s most complex portrayals of complicity. A devout Catholic and devoted mother, Carmela enjoys the lavish lifestyle her husband\'s criminal enterprise provides — the mansion in North Caldwell, the designer clothes, the financial security — while maintaining a carefully constructed moral framework that allows her to look the other way.\n\nCarmela\'s internal conflict between her moral conscience and her material comfort drives her character arc. She knows exactly where the money comes from but rationalizes her participation through charity, church donations, and a genuine belief that she is doing her best for her children, Meadow and A.J. Her conversations with a psychiatrist in Season 3, who bluntly tells her to leave Tony and refuse his blood money, represent the show\'s most direct challenge to her self-deception.\n\nHer relationship with Tony is a battlefield of power, manipulation, and genuine love. Carmela wields Tony\'s guilt as leverage, using his infidelities to extract financial concessions and real estate investments. Their separation in Season 5, when Carmela briefly tastes independence, is both liberating and terrifying for her. Her eventual return to Tony underscores the show\'s bleak thesis that systemic corruption is nearly impossible to escape.\n\nEdie Falco\'s performance earned her three Emmy Awards and established Carmela as far more than a typical mob wife. She is Tony\'s equal in intelligence and emotional manipulation, a woman who chose her gilded cage with open eyes and spends six seasons reckoning with that choice.',
    keyEpisodes: [
      { title: 'Second Opinion', season: 3, episode: 7, description: 'Carmela visits a psychiatrist who tells her she is an accomplice to Tony\'s crimes and should leave him, a scene that haunts her for the rest of the series.' },
      { title: 'Whitecaps', season: 4, episode: 13, description: 'Carmela discovers Tony\'s latest affair and throws him out of the house in one of the series\' most explosive confrontations.' },
      { title: 'Sentimental Education', season: 5, episode: 6, description: 'During her separation from Tony, Carmela pursues a relationship with A.J.\'s guidance counselor, Mr. Wegler.' },
      { title: 'Cold Stones', season: 6, episode: 11, description: 'Carmela visits Paris and is deeply moved by the art and culture, briefly glimpsing a life beyond her suburban mob existence.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Edie_Falco_2010.jpg/440px-Edie_Falco_2010.jpg', alt: 'Edie Falco, who portrays Carmela Soprano in The Sopranos', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/thesopranos', url: 'https://www.reddit.com/r/thesopranos/', platform: 'Reddit', description: 'Main Sopranos subreddit with extensive Carmela discussion threads' }
      ],
      youtubeChannels: [
        { name: 'Carmela Soprano Analysis', url: 'https://www.youtube.com/results?search_query=carmela+soprano+character+analysis', platform: 'YouTube', description: 'Video essays analyzing Carmela\'s moral complicity' }
      ],
      twitterAccounts: [
        { name: '@TheSopranos', url: 'https://twitter.com/TheSopranos', platform: 'Twitter/X', description: 'Official Sopranos account' }
      ],
      fanSites: [
        { name: 'Sopranos Wiki - Carmela', url: 'https://sopranos.fandom.com/wiki/Carmela_Soprano', platform: 'Web', description: 'Carmela Soprano wiki page' }
      ],
      instagramAccounts: [
        { name: '@thesopranos', url: 'https://www.instagram.com/thesopranos/', platform: 'Instagram', description: 'Official Sopranos Instagram' }
      ],
      tiktokCreators: [
        { name: 'Carmela Soprano Edits', url: 'https://www.tiktok.com/tag/carmelasoprano', platform: 'TikTok', description: 'Fan edits highlighting Carmela\'s best scenes' }
      ]
    },
    fanHeatIndex: { overall: 82, engagement: 84, socialActivity: 78, memeVelocity: 75, fanArtDensity: 70, fandomLongevity: 90 },
    faqs: [
      { question: 'Who plays Carmela Soprano?', answer: 'Edie Falco plays Carmela Soprano in The Sopranos. Falco won three Primetime Emmy Awards for Outstanding Lead Actress in a Drama Series for the role (1999, 2001, 2003). She is widely regarded as one of the finest dramatic actresses in television history.' },
      { question: 'Do Tony and Carmela get divorced?', answer: 'Tony and Carmela separate in Season 4 after she discovers his affair with a one-legged Russian woman. They live apart throughout Season 5, during which Carmela explores her independence. However, they reconcile in Season 5, Episode 13, with Carmela extracting a promise from Tony to finance a spec house for her as the price of her return.' },
      { question: 'Is Carmela Soprano a good person?', answer: 'This is one of the show\'s central moral questions. Carmela is genuinely loving toward her children and maintains strong Catholic values, yet she knowingly benefits from Tony\'s criminal activities. The show presents her as neither villain nor victim but as a deeply human figure trapped in moral compromise — making her one of television\'s most fascinating characters.' },
      { question: 'What is Carmela\'s spec house?', answer: 'In Season 6, Carmela builds a spec house (a house built on speculation to sell for profit) as her personal business venture. The project represents her attempt at financial independence from Tony. However, the house is built on a compromised foundation — literally and metaphorically — using substandard materials obtained through mob connections.' }
    ],
    videos: [
      { title: 'Carmela Soprano - The Price of Complicity', youtubeId: 'BHtxQ6EDNlE', description: 'A video essay exploring Carmela\'s moral compromises throughout the series.' },
      { title: 'Tony and Carmela\'s Best Scenes', youtubeId: 'c3K5xHvGbfY', description: 'The most powerful scenes between Tony and Carmela Soprano.' }
    ],
    relatedCharacterSlugs: ['tony-soprano', 'christopher-moltisanti', 'jennifer-melfi', 'silvio-dante', 'paulie-gualtieri'],
    tags: ['complex', 'mob-wife', 'dramatic', 'fan-favorite']
  },
  {
    slug: 'christopher-moltisanti',
    name: 'Christopher Moltisanti',
    showSlug: 'the-sopranos',
    showTitle: 'The Sopranos',
    actorSlug: 'michael-imperioli',
    actorName: 'Michael Imperioli',
    seasonsActive: 'Seasons 1–6',
    characterArc: 'Christopher Moltisanti is Tony Soprano\'s nephew and protege, a young made man whose dual ambitions — to rise in the mob and to become a Hollywood screenwriter — create an irreconcilable tension that defines his tragic arc. Christopher is volatile, insecure, and desperate for Tony\'s approval, making him both a sympathetic figure and a dangerous liability.\n\nChristopher\'s Hollywood aspirations provide some of the show\'s sharpest satire. His screenplay "Cleaver" — a thinly veiled horror film about a mob boss who steals his protege\'s girlfriend — becomes both a creative outlet and an act of passive-aggressive revenge against Tony. The show uses Christopher\'s artistic ambitions to explore the gap between how mobsters see themselves and who they actually are.\n\nHis relationship with Adriana La Cerva is the show\'s most heartbreaking love story. When Adriana is revealed as an FBI informant, Christopher faces an impossible choice between the woman he loves and the mob family that defines his identity. His decision to betray Adriana to Tony — leading to her murder — is the point of no return for his character, a choice that haunts him into addiction and despair.\n\nChristopher\'s death at Tony\'s hands in Season 6 — suffocated in an overturned car while a child\'s car seat lies in the back — is a devastating culmination of their toxic mentor-protege relationship. Michael Imperioli\'s raw, physical performance made Christopher one of the show\'s most unforgettable characters.',
    keyEpisodes: [
      { title: 'The Legend of Tennessee Moltisanti', season: 1, episode: 8, description: 'Christopher\'s existential crisis about his place in the mob and his creative ambitions are explored for the first time.' },
      { title: 'Long Term Parking', season: 5, episode: 12, description: 'Christopher chooses the mob over Adriana, sealing her fate in one of the series\' most devastating episodes.' },
      { title: 'The Ride', season: 6, episode: 9, description: 'Christopher relapses into drug addiction after struggling with guilt over Adriana\'s death.' },
      { title: 'Kennedy and Heidi', season: 6, episode: 18, description: 'Tony kills Christopher by suffocating him after a car accident, ending their tortured relationship.' },
      { title: 'Walk Like a Man', season: 6, episode: 17, description: 'Christopher\'s struggles with sobriety and his deteriorating relationship with Tony reach a breaking point.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Michael_Imperioli_2010.jpg/440px-Michael_Imperioli_2010.jpg', alt: 'Michael Imperioli, who portrays Christopher Moltisanti in The Sopranos', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/thesopranos', url: 'https://www.reddit.com/r/thesopranos/', platform: 'Reddit', description: 'Main Sopranos subreddit' },
        { name: 'r/CirclejerkSopranos', url: 'https://www.reddit.com/r/CirclejerkSopranos/', platform: 'Reddit', description: 'Sopranos meme community with frequent Christopher references' }
      ],
      youtubeChannels: [
        { name: 'Christopher Moltisanti Analysis', url: 'https://www.youtube.com/results?search_query=christopher+moltisanti+analysis', platform: 'YouTube', description: 'Character analysis videos exploring Christopher\'s tragic arc' }
      ],
      twitterAccounts: [
        { name: '@TheSopranos', url: 'https://twitter.com/TheSopranos', platform: 'Twitter/X', description: 'Official Sopranos account' }
      ],
      fanSites: [
        { name: 'Sopranos Wiki - Christopher', url: 'https://sopranos.fandom.com/wiki/Christopher_Moltisanti', platform: 'Web', description: 'Christopher Moltisanti wiki page' }
      ],
      instagramAccounts: [
        { name: '@thesopranos', url: 'https://www.instagram.com/thesopranos/', platform: 'Instagram', description: 'Official Sopranos Instagram' }
      ],
      tiktokCreators: [
        { name: 'Christopher Moltisanti Edits', url: 'https://www.tiktok.com/tag/christophermoltisanti', platform: 'TikTok', description: 'Fan edits of Christopher\'s most memorable scenes' }
      ]
    },
    fanHeatIndex: { overall: 86, engagement: 85, socialActivity: 82, memeVelocity: 88, fanArtDensity: 78, fandomLongevity: 90 },
    faqs: [
      { question: 'Who plays Christopher Moltisanti?', answer: 'Michael Imperioli plays Christopher Moltisanti in The Sopranos. Imperioli won a Primetime Emmy Award for Outstanding Supporting Actor in a Drama Series in 2004 for the role. He also co-wrote several episodes of the series, including the acclaimed "From Where to Eternity."' },
      { question: 'How does Christopher Moltisanti die?', answer: 'Christopher is killed by Tony Soprano in Season 6, Episode 18 ("Kennedy and Heidi"). After a car accident caused by Christopher driving while high, Tony sees a tree branch impaling a child\'s car seat in the back and suffocates Christopher by pinching his nose shut. It is one of the show\'s most shocking and morally complex moments.' },
      { question: 'What happens to Adriana in The Sopranos?', answer: 'Adriana La Cerva, Christopher\'s fiancee, is murdered in Season 5, Episode 12 ("Long Term Parking") after being exposed as an FBI informant. Christopher tells Tony about her cooperation, and Silvio Dante drives Adriana to the woods and kills her. Her death is widely considered one of the most devastating moments in the series.' },
      { question: 'What is the movie Cleaver in The Sopranos?', answer: 'Cleaver is a horror film that Christopher writes and produces within the show. It is a thinly veiled retelling of Christopher\'s resentment toward Tony, featuring a mob boss who steals his protege\'s girlfriend. Tony recognizes himself in the film, which further damages their relationship.' }
    ],
    videos: [
      { title: 'Christopher Moltisanti - A Tragic Arc', youtubeId: 'LXBJscRCfFc', description: 'A video essay tracing Christopher\'s tragic journey from ambitious protege to doomed addict.' },
      { title: 'Christopher and Tony - Toxic Mentorship', youtubeId: 'v7gFpzP1pVE', description: 'Analysis of the destructive mentor-protege relationship between Tony and Christopher.' }
    ],
    relatedCharacterSlugs: ['tony-soprano', 'carmela-soprano', 'silvio-dante', 'paulie-gualtieri', 'jennifer-melfi'],
    tags: ['tragic', 'protege', 'complex', 'fan-favorite']
  },
  {
    slug: 'jennifer-melfi',
    name: 'Dr. Jennifer Melfi',
    showSlug: 'the-sopranos',
    showTitle: 'The Sopranos',
    actorSlug: 'lorraine-bracco',
    actorName: 'Lorraine Bracco',
    seasonsActive: 'Seasons 1–6',
    characterArc: 'Dr. Jennifer Melfi is Tony Soprano\'s psychiatrist, the moral center of a show that constantly interrogates the limits of empathy and professional ethics. A refined, intelligent Italian-American woman, Melfi represents everything Tony\'s world is not — legitimate, educated, and governed by ethical codes rather than criminal ones. Their therapy sessions form the structural backbone of the entire series.\n\nMelfi\'s role extends beyond mere therapist. Through her sessions with Tony, the audience gains access to his interior life — his dreams, fears, childhood traumas, and the psychological mechanisms that allow him to compartmentalize extreme violence. She is our surrogate, fascinated and repelled in equal measure by the man across the couch.\n\nHer own arc explores the moral hazards of treating a sociopath. Melfi develops a complicated attraction to Tony\'s charisma and power while knowing that her therapy may actually be making him a more effective criminal. Her own therapist, Dr. Kupferberg, warns her repeatedly about this dynamic. Her personal trauma — a brutal assault in Season 3 that she chooses not to tell Tony about, knowing he would kill the attacker — is one of the show\'s most powerful explorations of moral restraint.\n\nMelfi\'s decision to terminate Tony\'s treatment in the penultimate episode, after reading a study suggesting talk therapy empowers sociopaths, is both her greatest moral victory and a devastating admission that years of work may have been futile.',
    keyEpisodes: [
      { title: 'Pilot', season: 1, episode: 1, description: 'Dr. Melfi takes on Tony Soprano as a patient, establishing the show\'s groundbreaking therapy framework.' },
      { title: 'Employee of the Month', season: 3, episode: 4, description: 'Melfi is sexually assaulted and must decide whether to tell Tony, who would certainly kill her attacker. She chooses not to, in a devastating display of moral strength.' },
      { title: 'Melfi', season: 2, episode: 1, description: 'Melfi goes into hiding after being targeted because of her connection to Tony, exploring the personal cost of treating a mob boss.' },
      { title: 'The Blue Comet', season: 6, episode: 20, description: 'Melfi terminates Tony\'s therapy after reading a study on sociopaths, ending one of television\'s most significant professional relationships.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lorraine_Bracco_2010.jpg/440px-Lorraine_Bracco_2010.jpg', alt: 'Lorraine Bracco, who portrays Dr. Jennifer Melfi in The Sopranos', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/thesopranos', url: 'https://www.reddit.com/r/thesopranos/', platform: 'Reddit', description: 'Main Sopranos subreddit with extensive therapy scene analysis' }
      ],
      youtubeChannels: [
        { name: 'Tony and Melfi Therapy Sessions', url: 'https://www.youtube.com/results?search_query=tony+soprano+melfi+therapy', platform: 'YouTube', description: 'Compilations and analysis of Tony\'s therapy sessions with Dr. Melfi' }
      ],
      twitterAccounts: [
        { name: '@TheSopranos', url: 'https://twitter.com/TheSopranos', platform: 'Twitter/X', description: 'Official Sopranos account' }
      ],
      fanSites: [
        { name: 'Sopranos Wiki - Dr. Melfi', url: 'https://sopranos.fandom.com/wiki/Jennifer_Melfi', platform: 'Web', description: 'Dr. Jennifer Melfi wiki page' }
      ],
      instagramAccounts: [
        { name: '@thesopranos', url: 'https://www.instagram.com/thesopranos/', platform: 'Instagram', description: 'Official Sopranos Instagram' }
      ],
      tiktokCreators: [
        { name: 'Dr. Melfi Edits', url: 'https://www.tiktok.com/tag/drmelfi', platform: 'TikTok', description: 'Fan clips of Dr. Melfi\'s most intense therapy moments' }
      ]
    },
    fanHeatIndex: { overall: 78, engagement: 80, socialActivity: 72, memeVelocity: 70, fanArtDensity: 65, fandomLongevity: 88 },
    faqs: [
      { question: 'Who plays Dr. Melfi in The Sopranos?', answer: 'Lorraine Bracco plays Dr. Jennifer Melfi in The Sopranos. Bracco, who was previously known for her role as Karen Hill in Goodfellas, was nominated for three Primetime Emmy Awards for the role. Her casting was a deliberate inversion of her Goodfellas character — from mob wife to the therapist treating a mob boss.' },
      { question: 'Why does Dr. Melfi stop seeing Tony?', answer: 'In Season 6, Episode 20 ("The Blue Comet"), Dr. Melfi terminates Tony\'s therapy after her own therapist Dr. Kupferberg shows her a study called "The Criminal Personality" which suggests that talk therapy can actually help sociopaths become better manipulators. Realizing she may have been enabling Tony for years, she abruptly ends their sessions.' },
      { question: 'Does Dr. Melfi tell Tony about her assault?', answer: 'No, Dr. Melfi does not tell Tony about her sexual assault in Season 3, Episode 4 ("Employee of the Month"). Despite knowing Tony would kill her attacker, she chooses not to use his violence for personal revenge. The episode ends with her saying "No" to Tony when he asks if there is anything he can do — one of the most powerful scenes in the series.' },
      { question: 'Are Tony and Dr. Melfi in love?', answer: 'Their relationship involves a complicated mutual attraction that is never consummated. Tony is drawn to Melfi\'s intelligence and refinement, while Melfi is fascinated by Tony\'s raw power and vulnerability. The show explores the erotic dimension of the therapeutic relationship without ever having them cross the professional line, making their tension one of the show\'s most compelling dynamics.' }
    ],
    videos: [
      { title: 'Tony and Dr. Melfi - Complete Therapy Journey', youtubeId: 'o-bS51-rqAo', description: 'A comprehensive look at Tony and Dr. Melfi\'s therapeutic relationship across all six seasons.' },
      { title: 'Employee of the Month - Dr. Melfi\'s Choice', youtubeId: 'eNBaAiSCBVE', description: 'Analysis of the powerful Employee of the Month episode and Melfi\'s moral decision.' }
    ],
    relatedCharacterSlugs: ['tony-soprano', 'carmela-soprano', 'christopher-moltisanti', 'silvio-dante', 'paulie-gualtieri'],
    tags: ['therapist', 'moral-center', 'intellectual', 'complex']
  },
  {
    slug: 'silvio-dante',
    name: 'Silvio Dante',
    showSlug: 'the-sopranos',
    showTitle: 'The Sopranos',
    actorSlug: 'steven-van-zandt',
    actorName: 'Steven Van Zandt',
    seasonsActive: 'Seasons 1–6',
    characterArc: 'Silvio Dante is Tony Soprano\'s consigliere — his most trusted advisor and the manager of the Bada Bing strip club. With his distinctive swept-back hair and his perpetual state of calm authority, Silvio is the steady hand that keeps the DiMeo crime family\'s daily operations running while Tony navigates the big-picture threats to their empire.\n\nUnlike the more volatile members of Tony\'s crew, Silvio is defined by his composure and loyalty. He is the one Tony turns to for dispassionate counsel, the voice of reason in a world of impulsive violence. When Tony faces challenges from Richie Aprile, Ralph Cifaretto, or his own uncle, Silvio\'s advice is always measured, practical, and rooted in the long-term survival of the organization.\n\nYet Silvio is no pacifist. His execution of Adriana La Cerva — driving her to the woods and shooting her after her FBI cooperation is discovered — reveals the ice-cold ruthlessness beneath his calm exterior. The scene is made more chilling by Silvio\'s professional detachment, treating the murder as simply another piece of business to handle.\n\nSteven Van Zandt, best known as a guitarist in Bruce Springsteen\'s E Street Band, brought an unexpected authenticity to the role. His Silvio became iconic for his Michael Corleone impressions, his management of the Bada Bing, and his unwavering devotion to Tony. Silvio is shot during the war with Phil Leotardo\'s faction in the final season and falls into a coma, his fate left unresolved.',
    keyEpisodes: [
      { title: 'Long Term Parking', season: 5, episode: 12, description: 'Silvio drives Adriana La Cerva to a remote location and executes her after her FBI cooperation is revealed.' },
      { title: 'The Blue Comet', season: 6, episode: 20, description: 'Silvio is shot multiple times during the war with New York\'s Phil Leotardo faction, falling into a coma.' },
      { title: 'Bust Out', season: 2, episode: 10, description: 'Silvio\'s business acumen is on display as the crew systematically loots Davey Scatino\'s sporting goods store.' },
      { title: 'Whoever Did This', season: 4, episode: 9, description: 'Silvio counsels Tony during the escalating tensions with Ralph Cifaretto, demonstrating his role as consigliere.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/StevenVanZandt2012.jpg/440px-StevenVanZandt2012.jpg', alt: 'Steven Van Zandt, who portrays Silvio Dante in The Sopranos', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/thesopranos', url: 'https://www.reddit.com/r/thesopranos/', platform: 'Reddit', description: 'Main Sopranos subreddit' }
      ],
      youtubeChannels: [
        { name: 'Silvio Dante Best Scenes', url: 'https://www.youtube.com/results?search_query=silvio+dante+best+scenes', platform: 'YouTube', description: 'Compilations of Silvio\'s most memorable moments and Godfather impressions' }
      ],
      twitterAccounts: [
        { name: '@StevieVanZandt', url: 'https://twitter.com/StevieVanZandt', platform: 'Twitter/X', description: 'Steven Van Zandt\'s personal Twitter account' }
      ],
      fanSites: [
        { name: 'Sopranos Wiki - Silvio Dante', url: 'https://sopranos.fandom.com/wiki/Silvio_Dante', platform: 'Web', description: 'Silvio Dante wiki page' }
      ],
      instagramAccounts: [
        { name: '@thesopranos', url: 'https://www.instagram.com/thesopranos/', platform: 'Instagram', description: 'Official Sopranos Instagram' }
      ],
      tiktokCreators: [
        { name: 'Silvio Dante Edits', url: 'https://www.tiktok.com/tag/silviodante', platform: 'TikTok', description: 'Fan clips of Silvio\'s Godfather impressions and Bada Bing scenes' }
      ]
    },
    fanHeatIndex: { overall: 76, engagement: 78, socialActivity: 70, memeVelocity: 80, fanArtDensity: 62, fandomLongevity: 85 },
    faqs: [
      { question: 'Who plays Silvio Dante in The Sopranos?', answer: 'Steven Van Zandt plays Silvio Dante in The Sopranos. Van Zandt is also famously known as a guitarist and mandolinist in Bruce Springsteen\'s E Street Band. Despite having no prior acting experience, his portrayal of Silvio became one of the show\'s most beloved performances.' },
      { question: 'Does Silvio Dante die in The Sopranos?', answer: 'Silvio\'s fate is left ambiguous. He is shot multiple times in Season 6, Episode 20 ("The Blue Comet") during the war with Phil Leotardo\'s New York faction. In the series finale, it is mentioned that Silvio remains in a coma with little chance of regaining consciousness, but he is not confirmed dead.' },
      { question: 'What is Silvio\'s role in the mob?', answer: 'Silvio serves as Tony Soprano\'s consigliere (counselor/advisor), the third-highest-ranking position in the crime family. He also manages the Bada Bing, the strip club that serves as an unofficial headquarters for the crew. As consigliere, Silvio provides strategic advice to Tony and helps mediate disputes within the organization.' },
      { question: 'What is Silvio\'s Godfather impression?', answer: 'Silvio frequently does impressions of Al Pacino\'s Michael Corleone from The Godfather Part III, repeating the famous line "Just when I thought I was out, they pull me back in!" His impressions are a running gag throughout the series and have become fan-favorite moments.' }
    ],
    videos: [
      { title: 'Silvio Dante - Just When I Thought I Was Out', youtubeId: 'UPw-3e_pzqU', description: 'Compilation of Silvio\'s legendary Godfather impressions throughout the series.' },
      { title: 'Silvio Dante - The Consigliere', youtubeId: '8GBykMEsGBg', description: 'A tribute to Silvio Dante\'s role as Tony\'s most trusted advisor.' }
    ],
    relatedCharacterSlugs: ['tony-soprano', 'christopher-moltisanti', 'paulie-gualtieri', 'carmela-soprano', 'jennifer-melfi'],
    tags: ['consigliere', 'loyal', 'stoic', 'fan-favorite']
  },
  {
    slug: 'paulie-gualtieri',
    name: 'Paulie Gualtieri',
    showSlug: 'the-sopranos',
    showTitle: 'The Sopranos',
    actorSlug: 'tony-sirico',
    actorName: 'Tony Sirico',
    seasonsActive: 'Seasons 1–6',
    characterArc: 'Paulie "Walnuts" Gualtieri is a captain in the DiMeo crime family and one of Tony Soprano\'s longest-serving soldiers. With his distinctive silver-winged hair, his malapropisms, his superstitious fears, and his quick trigger temper, Paulie is both one of the show\'s most entertaining characters and one of its most unsettling — a reminder that the men we laugh at are also killers.\n\nPaulie is the show\'s greatest source of mob-world comedy. His misquoted proverbs ("You\'re not gonna believe this. He killed sixteen Czechoslovakians. Guy was an interior decorator"), his germaphobia, his obsession with his mother, and his tendency to botch simple tasks provide consistent laughs. Yet these comedic qualities exist alongside genuine menace — Paulie murders an elderly woman for her hidden cash, bullies younger crew members, and survives through sheer ruthlessness.\n\nHis loyalty to Tony is genuine but conditional, repeatedly tested throughout the series. Paulie briefly allies with Johnny Sack against Tony, shares sensitive information with New York, and constantly angles for more money and recognition. His insecurity about his standing in the organization drives much of his behavior, revealing a man who has devoted his entire life to the mob yet can never feel secure within it.\n\nThe revelation that his beloved mother is actually his aunt, and that his birth mother is a nun, sends Paulie into an existential spiral that adds unexpected depth to a character who could easily have remained purely comedic. Tony Sirico, who brought real-life street credibility to the role, made Paulie Walnuts one of television\'s most unforgettable characters.',
    keyEpisodes: [
      { title: 'Pine Barrens', season: 3, episode: 11, description: 'Paulie and Christopher get lost in the snowy Pine Barrens of New Jersey while trying to dispose of a Russian mobster, in one of the series\' most beloved episodes.' },
      { title: 'From Where to Eternity', season: 2, episode: 9, description: 'Christopher\'s near-death experience terrifies the superstitious Paulie, who fears he is going to hell.' },
      { title: 'The Fleshy Part of the Thigh', season: 6, episode: 4, description: 'Paulie discovers that his mother is actually his aunt and that his birth mother is a nun, shaking his identity to the core.' },
      { title: 'Remember When', season: 6, episode: 15, description: 'Tony and Paulie take a trip to Miami, during which Tony considers killing Paulie for his disloyalty, examining the fragility of their decades-long relationship.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Tony_Sirico_2007.jpg/440px-Tony_Sirico_2007.jpg', alt: 'Tony Sirico, who portrayed Paulie Gualtieri in The Sopranos', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/thesopranos', url: 'https://www.reddit.com/r/thesopranos/', platform: 'Reddit', description: 'Main Sopranos subreddit where Paulie quotes are frequently referenced' },
        { name: 'r/CirclejerkSopranos', url: 'https://www.reddit.com/r/CirclejerkSopranos/', platform: 'Reddit', description: 'Sopranos meme community with abundant Paulie content' }
      ],
      youtubeChannels: [
        { name: 'Paulie Walnuts Best Moments', url: 'https://www.youtube.com/results?search_query=paulie+walnuts+best+moments', platform: 'YouTube', description: 'Compilations of Paulie\'s funniest and most memorable scenes' }
      ],
      twitterAccounts: [
        { name: '@TheSopranos', url: 'https://twitter.com/TheSopranos', platform: 'Twitter/X', description: 'Official Sopranos account' }
      ],
      fanSites: [
        { name: 'Sopranos Wiki - Paulie Gualtieri', url: 'https://sopranos.fandom.com/wiki/Paulie_Gualtieri', platform: 'Web', description: 'Paulie Gualtieri wiki page' }
      ],
      instagramAccounts: [
        { name: '@thesopranos', url: 'https://www.instagram.com/thesopranos/', platform: 'Instagram', description: 'Official Sopranos Instagram' }
      ],
      tiktokCreators: [
        { name: 'Paulie Walnuts Edits', url: 'https://www.tiktok.com/tag/pauliewalnuts', platform: 'TikTok', description: 'Fan edits of Paulie\'s funniest quotes and Pine Barrens moments' }
      ]
    },
    fanHeatIndex: { overall: 80, engagement: 82, socialActivity: 76, memeVelocity: 90, fanArtDensity: 68, fandomLongevity: 87 },
    faqs: [
      { question: 'Who plays Paulie Gualtieri in The Sopranos?', answer: 'Tony Sirico played Paulie "Walnuts" Gualtieri in The Sopranos. Sirico, who had real-life connections to organized crime before becoming an actor, brought unparalleled authenticity to the role. He famously agreed to take the part only on the condition that his character would never become an informant. Sirico passed away on July 8, 2022, at the age of 79.' },
      { question: 'What happens in the Pine Barrens episode?', answer: 'In Season 3, Episode 11 ("Pine Barrens"), Paulie and Christopher are sent to collect money from a Russian named Valery. After Paulie kills him (or so they think), they attempt to bury the body in the Pine Barrens of New Jersey. Valery escapes, and Paulie and Christopher become hopelessly lost in the freezing woods. The episode is widely considered one of the greatest in television history.' },
      { question: 'Why is Paulie called "Walnuts"?', answer: 'The origin of Paulie\'s nickname "Walnuts" is explained as stemming from an early hijacking job where he stole a truck he thought was full of electronics but turned out to be filled with walnuts. The nickname stuck and became one of the character\'s most recognizable features.' },
      { question: 'Does Paulie Gualtieri survive The Sopranos?', answer: 'Yes, Paulie Gualtieri is one of the few main characters to survive the entire series. In the final episode, he is seen sitting outside the Bada Bing in a lawn chair. His survival, given his treachery and the war with New York, is somewhat ironic — the most paranoid character outlasts nearly everyone.' }
    ],
    videos: [
      { title: 'Pine Barrens - Paulie and Christopher Lost', youtubeId: 'BzJwHaadxSA', description: 'The legendary Pine Barrens episode where Paulie and Christopher get lost in the New Jersey woods.' },
      { title: 'Paulie Walnuts - Funniest Moments', youtubeId: 'c2DgwPG7mAA', description: 'A compilation of Paulie\'s most hilarious quotes and scenes.' },
      { title: 'Paulie Walnuts - Heh Heh', youtubeId: 'p37_Ux1G_BI', description: 'A supercut of Paulie\'s iconic laugh and mannerisms.' }
    ],
    relatedCharacterSlugs: ['tony-soprano', 'christopher-moltisanti', 'silvio-dante', 'carmela-soprano', 'jennifer-melfi'],
    tags: ['comic-relief', 'fan-favorite', 'enforcer', 'iconic']
  }
];

module.exports = { friendsCharacters, sopranosCharacters };
