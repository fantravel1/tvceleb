// Stranger Things Characters
const stCharacters = [
  {
    slug: 'eleven-jane-hopper',
    name: 'Eleven / Jane Hopper',
    showSlug: 'stranger-things',
    showTitle: 'Stranger Things',
    actorSlug: 'millie-bobby-brown',
    actorName: 'Millie Bobby Brown',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Eleven, born Jane Ives and later known as Jane Hopper, is a girl with extraordinary psychokinetic and telepathic abilities developed through experimental testing at Hawkins National Laboratory under the supervision of Dr. Martin Brenner, whom she was forced to call "Papa." Raised in near-total isolation, she escapes the lab as a child and is found in the rain by Mike Wheeler, Dustin Henderson, and Lucas Sinclair, who are searching for their missing friend Will Byers. With a shaved head and limited vocabulary, she is frightened and feral, yet displays breathtaking power — and an innocent hunger for belonging.\n\nAs Eleven integrates into the world beyond the lab, she discovers what it means to have friends, a home, and a father figure in Jim Hopper. Her journey is defined by a constant tension between her desire for a normal life and the extraordinary burden of her abilities. She repeatedly sacrifices her own safety — closing the Gate to the Upside Down, confronting the Mind Flayer, and battling Vecna — to protect the people of Hawkins.\n\nHer relationship with Mike Wheeler forms the emotional spine of the series, evolving from shy childhood connection to complicated teenage romance. Equally central is her bond with Hopper, who adopts her and provides the parental love she was denied. When Hopper is presumed dead at the end of Season 3, Eleven must learn to define herself without the people she depends on most.\n\nBy Season 4, Eleven confronts the truth about her origins — that she inadvertently created the gateway to the Upside Down and that Henry Creel, the first test subject (One/Vecna), is the architect of Hawkins\' horrors. Her arc comes full circle as she must embrace her powers rather than hide from them, standing as the only person capable of stopping Vecna and the apocalyptic threat he represents.',
    keyEpisodes: [
      { title: 'The Vanishing of Will Byers', season: 1, episode: 1, description: 'Eleven escapes Hawkins Lab and is discovered by Mike, Dustin, and Lucas in the rain.' },
      { title: 'The Upside Down', season: 1, episode: 8, description: 'Eleven sacrifices herself to destroy the Demogorgon, seemingly disintegrating in the process.' },
      { title: 'The Gate', season: 2, episode: 9, description: 'Eleven closes the Gate to the Upside Down using the full extent of her powers.' },
      { title: 'The Battle of Starcourt', season: 3, episode: 8, description: 'Eleven loses her powers after the battle with the Mind Flayer at Starcourt Mall.' },
      { title: 'The Massacre at Hawkins Lab', season: 4, episode: 7, description: 'Eleven remembers the truth: she banished Henry Creel/One into the Upside Down, inadvertently creating Vecna and the Gate.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Millie_Bobby_Brown_by_Gage_Skidmore.jpg/440px-Millie_Bobby_Brown_by_Gage_Skidmore.jpg', alt: 'Millie Bobby Brown, who portrays Eleven in Stranger Things', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/StrangerThings', url: 'https://www.reddit.com/r/StrangerThings/', platform: 'Reddit', description: 'Main Stranger Things subreddit with 1.5M+ members' },
        { name: 'r/HawkinsAVclub', url: 'https://www.reddit.com/r/HawkinsAVclub/', platform: 'Reddit', description: 'Stranger Things discussion and theories community' }
      ],
      youtubeChannels: [
        { name: 'Eleven - Full Powers Explained', url: 'https://www.youtube.com/watch?v=VyzPkTqOviY', platform: 'YouTube', description: 'Breakdown of Eleven\'s abilities across all seasons' }
      ],
      twitterAccounts: [
        { name: '@Stranger_Things', url: 'https://twitter.com/Stranger_Things', platform: 'Twitter/X', description: 'Official Stranger Things Twitter account' }
      ],
      fanSites: [
        { name: 'Stranger Things Wiki', url: 'https://strangerthings.fandom.com/', platform: 'Web', description: 'Comprehensive Stranger Things encyclopedia on Fandom' }
      ],
      instagramAccounts: [
        { name: '@strangerthingstv', url: 'https://www.instagram.com/strangerthingstv/', platform: 'Instagram', description: 'Official Stranger Things Instagram page' }
      ],
      tiktokCreators: [
        { name: 'Stranger Things Edits', url: 'https://www.tiktok.com/tag/strangerthings', platform: 'TikTok', description: 'Fan edits and clips on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 95, engagement: 96, socialActivity: 94, memeVelocity: 93, fanArtDensity: 97, fandomLongevity: 92 },
    faqs: [
      { question: 'Who plays Eleven in Stranger Things?', answer: 'Millie Bobby Brown plays Eleven (Jane Hopper) in Stranger Things. Brown was just twelve years old when the show premiered in 2016 and earned an Emmy nomination for Outstanding Supporting Actress in a Drama Series at age thirteen, making her one of the youngest nominees in the category\'s history.' },
      { question: 'What are Eleven\'s powers in Stranger Things?', answer: 'Eleven possesses powerful psychokinetic abilities including telekinesis, remote viewing (using sensory deprivation), biokinesis, and the ability to open and close interdimensional gates. She can move objects with her mind, crush matter, and project her consciousness to locate people across vast distances. Her powers cause nosebleeds and physical exhaustion when overused.' },
      { question: 'Why does Eleven have a shaved head?', answer: 'Eleven\'s head was shaved at Hawkins National Laboratory where she was raised as a test subject. Dr. Martin Brenner kept her head shaved as part of the clinical, dehumanizing environment of the lab. After escaping, her hair gradually grows back across the series, symbolizing her reclaiming her identity.' },
      { question: 'What is Eleven\'s real name?', answer: 'Eleven\'s birth name is Jane Ives, daughter of Terry Ives. She was taken from her mother as an infant by Dr. Brenner and given the designation "011." After being adopted by Jim Hopper, she becomes Jane Hopper. Her friends call her "El" for short.' },
      { question: 'Does Eleven lose her powers in Stranger Things?', answer: 'Yes, Eleven loses her powers at the end of Season 3 after the battle with the Mind Flayer at Starcourt Mall. She spends much of Season 4 without her abilities before undergoing the Nina Project — a sensory deprivation program designed to help her recover her memories and restore her powers.' }
    ],
    videos: [
      { title: 'Eleven vs. The Demogorgon - Stranger Things', youtubeId: 'MJCHeEQV454', description: 'Eleven\'s iconic sacrifice scene from the Season 1 finale.' },
      { title: 'Eleven Closes the Gate - Stranger Things', youtubeId: 'oLSGact_0xk', description: 'Eleven uses the full extent of her powers to close the Gate in the Season 2 finale.' }
    ],
    relatedCharacterSlugs: ['mike-wheeler', 'dustin-henderson', 'steve-harrington', 'jim-hopper', 'will-byers'],
    tags: ['protagonist', 'superpowered', 'iconic', 'fan-favorite']
  },
  {
    slug: 'mike-wheeler',
    name: 'Mike Wheeler',
    showSlug: 'stranger-things',
    showTitle: 'Stranger Things',
    actorSlug: 'finn-wolfhard',
    actorName: 'Finn Wolfhard',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Mike Wheeler is the emotional leader of the Hawkins party, a tight-knit group of friends bound together by Dungeons & Dragons, shared trauma, and fierce loyalty. When his best friend Will Byers vanishes, Mike refuses to accept the official explanations and takes it upon himself to search for Will — a decision that leads him to discover Eleven hiding in the woods. His willingness to shelter a frightened, dangerous stranger in his basement establishes the compassion and stubbornness that define his character.\n\nMike\'s relationship with Eleven becomes the central love story of the series. From sharing Eggos in a blanket fort to navigating the awkwardness of teenage romance, their bond is built on mutual vulnerability. Mike is the first person to treat Eleven as a human being rather than a weapon, and her trust in him becomes the emotional anchor that keeps her connected to the world.\n\nAs the series progresses, Mike struggles with the shifting dynamics of adolescence. His friendships with Will, Dustin, and Lucas are tested as the group grows up and their interests diverge. His tendency to fixate on Eleven sometimes blinds him to the pain of those around him — particularly Will, whose quiet suffering often goes unnoticed.\n\nBy Season 4, Mike grapples with his inability to tell Eleven he loves her, a vulnerability that becomes critical in the battle against Vecna. His arc explores how the boy who was brave enough to face interdimensional monsters must also find the courage to be emotionally honest.',
    keyEpisodes: [
      { title: 'The Vanishing of Will Byers', season: 1, episode: 1, description: 'Mike leads the search for Will and discovers Eleven in the rain.' },
      { title: 'The Upside Down', season: 1, episode: 8, description: 'Mike witnesses Eleven\'s sacrifice and shares his first emotional goodbye with her.' },
      { title: 'The Gate', season: 2, episode: 9, description: 'Mike and Eleven reunite and share the Snow Ball dance, cementing their relationship.' },
      { title: 'The Piggyback', season: 4, episode: 9, description: 'Mike finally tells Eleven he loves her, giving her the strength to fight Vecna.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Finn_Wolfhard_by_Gage_Skidmore.jpg/440px-Finn_Wolfhard_by_Gage_Skidmore.jpg', alt: 'Finn Wolfhard, who portrays Mike Wheeler in Stranger Things', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/StrangerThings', url: 'https://www.reddit.com/r/StrangerThings/', platform: 'Reddit', description: 'Main Stranger Things subreddit' }
      ],
      youtubeChannels: [
        { name: 'Mike and Eleven - Full Relationship Timeline', url: 'https://www.youtube.com/results?search_query=mike+eleven+relationship+timeline', platform: 'YouTube', description: 'Mike and Eleven relationship analysis videos' }
      ],
      twitterAccounts: [
        { name: '@Stranger_Things', url: 'https://twitter.com/Stranger_Things', platform: 'Twitter/X', description: 'Official Stranger Things account' }
      ],
      fanSites: [
        { name: 'Stranger Things Wiki - Mike', url: 'https://strangerthings.fandom.com/wiki/Mike_Wheeler', platform: 'Web', description: 'Mike Wheeler wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 78, engagement: 80, socialActivity: 76, memeVelocity: 74, fanArtDensity: 82, fandomLongevity: 80 },
    faqs: [
      { question: 'Who plays Mike Wheeler in Stranger Things?', answer: 'Finn Wolfhard plays Mike Wheeler in Stranger Things. Wolfhard has gone on to star in the It film series as Richie Tozier and in the Ghostbusters: Afterlife franchise. He also fronts the band The Aubreys.' },
      { question: 'Are Mike and Eleven together in Stranger Things?', answer: 'Yes, Mike Wheeler and Eleven are the central romantic couple in Stranger Things. Their relationship begins in Season 1 when Mike shelters Eleven in his basement and develops across the series from innocent childhood affection into a more complex teenage romance.' },
      { question: 'What is Mike Wheeler\'s role in the Hawkins party?', answer: 'Mike serves as the Paladin and de facto leader of the Hawkins Dungeons & Dragons party. He is the strategic thinker and emotional core of the group, often rallying his friends and making plans when they face threats from the Upside Down.' },
      { question: 'Why is Mike Wheeler considered a controversial character?', answer: 'Some fans feel Mike became less likable in later seasons due to his single-minded focus on Eleven at the expense of his other friendships, particularly with Will. Others defend his arc as a realistic portrayal of adolescent growing pains and the difficulty of balancing romance with lifelong friendships.' }
    ],
    videos: [
      { title: 'Mike and Eleven - Their Full Story', youtubeId: 'pFYqmTzSFOI', description: 'A compilation of Mike and Eleven\'s relationship moments throughout the series.' }
    ],
    relatedCharacterSlugs: ['eleven-jane-hopper', 'dustin-henderson', 'will-byers', 'steve-harrington', 'jim-hopper'],
    tags: ['leader', 'party-member', 'romantic-lead']
  },
  {
    slug: 'dustin-henderson',
    name: 'Dustin Henderson',
    showSlug: 'stranger-things',
    showTitle: 'Stranger Things',
    actorSlug: 'gaten-matarazzo',
    actorName: 'Gaten Matarazzo',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Dustin Henderson is the heart and humor of the Hawkins party, a precocious science enthusiast whose curiosity, warmth, and irrepressible optimism make him one of the most beloved characters in the series. Armed with a ham radio, an encyclopedic knowledge of science fiction, and an unshakeable belief in the goodness of his friends, Dustin is often the one who bridges conflicts within the group and makes connections others miss.\n\nIn Season 2, Dustin\'s storyline takes a memorable turn when he discovers a baby Demogorgon — which he names D\'Artagnan, or "Dart" — and attempts to raise it as a pet. This plotline captures Dustin\'s essential nature: a boy whose scientific curiosity and capacity for affection extend even to creatures from another dimension. It also demonstrates the show\'s recurring theme that empathy can be both a strength and a liability.\n\nDustin\'s unexpected friendship with Steve Harrington, beginning in Season 2, becomes one of the series\' most cherished dynamics. The unlikely big brother/little brother bond between the popular jock and the nerdy kid defies high school social hierarchies and gives both characters room to grow. Steve teaches Dustin confidence, while Dustin gives Steve purpose and genuine connection.\n\nAcross the later seasons, Dustin proves himself as the group\'s most resourceful problem-solver, from establishing long-range radio contact with his girlfriend Suzie in Utah to cracking Russian codes beneath Starcourt Mall. His reaction to Eddie Munson\'s death in Season 4 showcases Gaten Matarazzo\'s dramatic range, revealing the emotional toll that years of supernatural trauma have taken beneath Dustin\'s cheerful exterior.',
    keyEpisodes: [
      { title: 'The Weirdo on Maple Street', season: 1, episode: 2, description: 'Dustin helps hide Eleven and bonds with her over food, establishing his role as the group\'s warmest member.' },
      { title: 'The Pollywog', season: 2, episode: 3, description: 'Dustin discovers the baby Demogorgon Dart and secretly begins raising it.' },
      { title: 'The Battle of Starcourt', season: 3, episode: 8, description: 'Dustin contacts Suzie via Cerebro radio, leading to their iconic "Never Ending Story" duet at a critical moment.' },
      { title: 'The Piggyback', season: 4, episode: 9, description: 'Dustin holds Eddie Munson as he dies, delivering one of the most emotionally devastating scenes in the series.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Gaten_Matarazzo_by_Gage_Skidmore.jpg/440px-Gaten_Matarazzo_by_Gage_Skidmore.jpg', alt: 'Gaten Matarazzo, who portrays Dustin Henderson in Stranger Things', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/StrangerThings', url: 'https://www.reddit.com/r/StrangerThings/', platform: 'Reddit', description: 'Main Stranger Things subreddit' }
      ],
      youtubeChannels: [
        { name: 'Dustin and Steve - Best Moments', url: 'https://www.youtube.com/results?search_query=dustin+steve+best+moments+stranger+things', platform: 'YouTube', description: 'Compilations of the Dustin and Steve friendship' }
      ],
      twitterAccounts: [
        { name: '@Stranger_Things', url: 'https://twitter.com/Stranger_Things', platform: 'Twitter/X', description: 'Official Stranger Things account' }
      ],
      fanSites: [
        { name: 'Stranger Things Wiki - Dustin', url: 'https://strangerthings.fandom.com/wiki/Dustin_Henderson', platform: 'Web', description: 'Dustin Henderson wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Dustin Henderson Edits', url: 'https://www.tiktok.com/tag/dustinhenderson', platform: 'TikTok', description: 'Fan edits featuring Dustin Henderson' }
      ]
    },
    fanHeatIndex: { overall: 88, engagement: 90, socialActivity: 86, memeVelocity: 92, fanArtDensity: 84, fandomLongevity: 88 },
    faqs: [
      { question: 'Who plays Dustin Henderson in Stranger Things?', answer: 'Gaten Matarazzo plays Dustin Henderson in Stranger Things. Matarazzo has cleidocranial dysplasia, a real condition that affects bone and teeth development, which is written into Dustin\'s character on the show. He has used his platform to raise awareness about the condition.' },
      { question: 'What is the "Never Ending Story" scene in Stranger Things?', answer: 'In the Season 3 finale, Dustin contacts his girlfriend Suzie via long-range radio for a critical code, but she refuses to share it until he sings "Never Ending Story" with her as a duet. The scene is simultaneously hilarious and tense, as the other characters desperately wait while the world hangs in the balance.' },
      { question: 'Why is Dustin and Steve\'s friendship so popular?', answer: 'The Dustin-Steve friendship is beloved because it pairs two characters from completely different social worlds — the nerdy middle schooler and the popular high school jock — in a genuine, mutually beneficial bond. Steve becomes a protective older brother figure who gives Dustin dating advice, while Dustin provides Steve with loyalty and purpose.' },
      { question: 'Who is Dustin\'s girlfriend Suzie?', answer: 'Suzie (played by Gabriella Pizzolo) is Dustin\'s girlfriend whom he met at Camp Know Where, a science camp. She lives in Salt Lake City, Utah, and communicates with Dustin via his custom-built ham radio "Cerebro." She is exceptionally intelligent and a devout Mormon.' },
      { question: 'What condition does Dustin have in Stranger Things?', answer: 'Dustin has cleidocranial dysplasia (CCD), a condition that affects the development of bones and teeth. This is the same condition that actor Gaten Matarazzo has in real life. It is referenced in the show when characters comment on Dustin\'s teeth and lisp.' }
    ],
    videos: [
      { title: 'Dustin and Suzie Sing "Never Ending Story"', youtubeId: 'EuW4Ley09A0', description: 'The iconic duet scene from the Stranger Things Season 3 finale.' },
      { title: 'Dustin and Steve - An Unexpected Friendship', youtubeId: 'zeCoMBHC9Yw', description: 'A compilation of Dustin and Steve\'s best moments together.' }
    ],
    relatedCharacterSlugs: ['steve-harrington', 'mike-wheeler', 'eleven-jane-hopper', 'will-byers'],
    tags: ['comic-relief', 'fan-favorite', 'party-member', 'heart']
  },
  {
    slug: 'steve-harrington',
    name: 'Steve Harrington',
    showSlug: 'stranger-things',
    showTitle: 'Stranger Things',
    actorSlug: 'joe-keery',
    actorName: 'Joe Keery',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Steve Harrington begins Stranger Things as the archetypal popular high school boyfriend — handsome, confident, and casually cruel. Dating Nancy Wheeler and running with a crowd of bullies, Steve initially seems destined to be a one-note antagonist. But the Duffer Brothers had other plans: Steve\'s evolution from shallow jock to selfless protector is one of the most celebrated character transformations in modern television.\n\nThe turning point comes in the Season 1 finale when Steve, armed with a nail-studded baseball bat, returns to fight the Demogorgon instead of running away. This moment — choosing courage over self-preservation — sets the trajectory for the rest of his arc. By Season 2, Steve has lost Nancy to Jonathan Byers and finds himself babysitting a group of middle schoolers during the Demodogs crisis. His unlikely bond with Dustin Henderson becomes one of the show\'s defining relationships.\n\nSeason 3 deepens Steve\'s transformation as he works at Scoops Ahoy ice cream parlor with Robin Buckley, who becomes his closest friend. Steve\'s graceful acceptance when Robin comes out to him marks a moment of genuine emotional maturity. Stripped of his popularity, his girlfriend, and his social status, Steve discovers that his real value lies in his loyalty, his courage, and his willingness to show up for the people who need him.\n\nBy Season 4, Steve has become the group\'s unofficial guardian — a young man who repeatedly puts his body between danger and the people he cares about. His willingness to be bitten, beaten, and dragged into the Upside Down without complaint has earned him the fan-given title of "babysitter of Hawkins," and his hair remains, against all odds, immaculate.',
    keyEpisodes: [
      { title: 'The Upside Down', season: 1, episode: 8, description: 'Steve returns to the Byers house and fights the Demogorgon with a nail bat, beginning his transformation.' },
      { title: 'The Gate', season: 2, episode: 9, description: 'Steve protects the kids in the tunnels, fully embracing his role as their unlikely guardian.' },
      { title: 'The Battle of Starcourt', season: 3, episode: 8, description: 'Steve and Robin survive interrogation by the Russians, and Robin comes out to Steve in a pivotal moment.' },
      { title: 'Dear Billy', season: 4, episode: 4, description: 'Steve is dragged into the Upside Down through Lover\'s Lake and attacked by Demobats, yet continues fighting.' },
      { title: 'The Piggyback', season: 4, episode: 9, description: 'Steve leads the assault on Vecna\'s physical body inside the Upside Down.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Joe_Keery_by_Gage_Skidmore.jpg/440px-Joe_Keery_by_Gage_Skidmore.jpg', alt: 'Joe Keery, who portrays Steve Harrington in Stranger Things', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/StrangerThings', url: 'https://www.reddit.com/r/StrangerThings/', platform: 'Reddit', description: 'Main Stranger Things subreddit' },
        { name: 'r/SteveHarrington', url: 'https://www.reddit.com/r/SteveHarrington/', platform: 'Reddit', description: 'Dedicated Steve Harrington fan community' }
      ],
      youtubeChannels: [
        { name: 'Steve Harrington - The Best Character Arc', url: 'https://www.youtube.com/results?search_query=steve+harrington+character+arc+analysis', platform: 'YouTube', description: 'Video essays on Steve\'s character development' }
      ],
      twitterAccounts: [
        { name: '@Stranger_Things', url: 'https://twitter.com/Stranger_Things', platform: 'Twitter/X', description: 'Official Stranger Things account' }
      ],
      fanSites: [
        { name: 'Stranger Things Wiki - Steve', url: 'https://strangerthings.fandom.com/wiki/Steve_Harrington', platform: 'Web', description: 'Steve Harrington wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Steve Harrington Edits', url: 'https://www.tiktok.com/tag/steveharrington', platform: 'TikTok', description: 'Fan edits featuring Steve Harrington' }
      ]
    },
    fanHeatIndex: { overall: 92, engagement: 94, socialActivity: 91, memeVelocity: 95, fanArtDensity: 90, fandomLongevity: 89 },
    faqs: [
      { question: 'Who plays Steve Harrington in Stranger Things?', answer: 'Joe Keery plays Steve Harrington in Stranger Things. Keery was originally meant to have a smaller role, but the character\'s popularity and Keery\'s performance led the Duffer Brothers to expand Steve\'s part significantly across the series.' },
      { question: 'Was Steve Harrington supposed to die in Stranger Things?', answer: 'Yes, Steve Harrington was originally written to die in Season 1. The Duffer Brothers planned for him to be a typical bully character who would be killed off, but Joe Keery\'s likable performance and natural chemistry with the younger cast members convinced them to keep him alive and evolve the character.' },
      { question: 'Why do fans call Steve Harrington "Mom"?', answer: 'Fans affectionately call Steve "Mom" or "babysitter" because of his protective, parental relationship with the younger characters, particularly Dustin. Starting in Season 2, Steve repeatedly takes responsibility for the kids\' safety, wielding his signature nail bat and driving them around in his car like a suburban parent.' },
      { question: 'What is Steve Harrington\'s signature weapon?', answer: 'Steve\'s signature weapon is a wooden baseball bat studded with nails, which he first uses to fight the Demogorgon in Season 1. The nail bat has become an iconic prop from the show and a popular cosplay accessory among Stranger Things fans.' },
      { question: 'Who does Steve Harrington end up with in Stranger Things?', answer: 'As of Season 4, Steve is single. He dated Nancy Wheeler in Season 1 before she left him for Jonathan Byers. Season 4 hints at a possible rekindling with Nancy, but Steve\'s most significant relationships remain his friendships with Robin Buckley and Dustin Henderson.' }
    ],
    videos: [
      { title: 'Steve Harrington - From Bully to Babysitter', youtubeId: 'LpBxMiOQ9cE', description: 'A video essay exploring Steve Harrington\'s beloved character arc.' },
      { title: 'Steve Harrington Best Moments', youtubeId: 'H_GnR4qnbEU', description: 'Compilation of Steve Harrington\'s best scenes across all seasons.' }
    ],
    relatedCharacterSlugs: ['dustin-henderson', 'eleven-jane-hopper', 'mike-wheeler', 'jim-hopper', 'will-byers'],
    tags: ['fan-favorite', 'redemption-arc', 'protector', 'iconic']
  },
  {
    slug: 'jim-hopper',
    name: 'Jim Hopper',
    showSlug: 'stranger-things',
    showTitle: 'Stranger Things',
    actorSlug: 'david-harbour',
    actorName: 'David Harbour',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Chief Jim Hopper is the police chief of Hawkins, Indiana, a once-dedicated lawman hollowed out by the death of his young daughter Sara and the subsequent collapse of his marriage. When the series begins, Hopper is a functioning alcoholic going through the motions — popping pills, drinking alone, and treating his job as an afterthought. The disappearance of Will Byers reawakens something in him, pulling him into an investigation that reveals government conspiracies and interdimensional horrors lurking beneath his quiet town.\n\nHopper\'s investigation of Hawkins Lab and the Upside Down transforms him from a burnt-out small-town cop into the gruff, determined protector of Hawkins. His discovery of Eleven — a child exploited and discarded by the very institutions meant to protect her — gives him a chance at the fatherhood he lost. The relationship between Hopper and Eleven is the show\'s most powerful emotional thread: two broken people who find family in each other.\n\nAs Eleven\'s adoptive father, Hopper is fiercely protective to the point of being overbearing. His struggle to balance keeping Eleven safe with allowing her to live a normal life creates tension that feels achingly real. His cabin-in-the-woods domesticity with Eleven — setting rules about TV, arguing over messes, leaving the door open three inches — provides some of the show\'s most intimate and tender scenes.\n\nAt the end of Season 3, Hopper appears to sacrifice himself to close the Gate beneath Starcourt Mall. Season 4 reveals that he survived but was captured by the Soviets and imprisoned in a Russian gulag, where he faces Demogorgons in gladiatorial combat. His journey through imprisonment, survival, and eventual return reinforces the show\'s central theme: that love — for a daughter, for a town, for a chance at redemption — is worth fighting through any hell to preserve.',
    keyEpisodes: [
      { title: 'The Bathtub', season: 1, episode: 7, description: 'Hopper strikes a deal with Brenner to enter the Upside Down, revealing his willingness to sacrifice everything to save Will.' },
      { title: 'The Gate', season: 2, episode: 9, description: 'Hopper officially adopts Eleven, giving her a home and a father after a season of hiding her in his cabin.' },
      { title: 'The Battle of Starcourt', season: 3, episode: 8, description: 'Hopper apparently sacrifices himself to destroy the Key machine, leaving Eleven orphaned once again.' },
      { title: 'The Piggyback', season: 4, episode: 9, description: 'Hopper, having escaped the Russian gulag, fights a Demogorgon with a sword and reconnects with Eleven.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/David_Harbour_by_Gage_Skidmore.jpg/440px-David_Harbour_by_Gage_Skidmore.jpg', alt: 'David Harbour, who portrays Jim Hopper in Stranger Things', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/StrangerThings', url: 'https://www.reddit.com/r/StrangerThings/', platform: 'Reddit', description: 'Main Stranger Things subreddit' },
        { name: 'r/DavidHarbour', url: 'https://www.reddit.com/r/DavidHarbour/', platform: 'Reddit', description: 'David Harbour fan community' }
      ],
      youtubeChannels: [
        { name: 'Hopper - The Heart of Stranger Things', url: 'https://www.youtube.com/results?search_query=hopper+stranger+things+character+analysis', platform: 'YouTube', description: 'Character analysis of Jim Hopper' }
      ],
      twitterAccounts: [
        { name: '@Stranger_Things', url: 'https://twitter.com/Stranger_Things', platform: 'Twitter/X', description: 'Official Stranger Things account' }
      ],
      fanSites: [
        { name: 'Stranger Things Wiki - Hopper', url: 'https://strangerthings.fandom.com/wiki/Jim_Hopper', platform: 'Web', description: 'Jim Hopper wiki page' }
      ],
      instagramAccounts: [
        { name: '@daborharbour', url: 'https://www.instagram.com/daborharbour/', platform: 'Instagram', description: 'David Harbour\'s personal Instagram' }
      ],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 90, engagement: 91, socialActivity: 88, memeVelocity: 87, fanArtDensity: 89, fandomLongevity: 93 },
    faqs: [
      { question: 'Who plays Jim Hopper in Stranger Things?', answer: 'David Harbour plays Jim Hopper in Stranger Things. Harbour received Emmy, Golden Globe, SAG Award, and Critics\' Choice nominations for the role. His portrayal of the gruff but tender-hearted police chief became a breakout performance that elevated his career significantly.' },
      { question: 'Does Hopper die in Stranger Things?', answer: 'No, Hopper does not die, though he was presumed dead at the end of Season 3 after the explosion at Starcourt Mall. A post-credits scene hinted at his survival, and Season 4 confirms he was captured by Russian soldiers and imprisoned in a Soviet gulag in Kamchatka.' },
      { question: 'Does Hopper adopt Eleven in Stranger Things?', answer: 'Yes, Hopper becomes Eleven\'s legal adoptive father. He hides her in his grandfather\'s cabin in the woods during Season 2 to protect her from Hawkins Lab. By the end of Season 2, he has obtained forged documents making her legally "Jane Hopper." Their father-daughter relationship is one of the show\'s central emotional pillars.' },
      { question: 'What happened to Hopper\'s daughter Sara?', answer: 'Hopper\'s biological daughter Sara died of cancer as a young child, an event that devastated him and led to the dissolution of his marriage and his descent into alcoholism. Flashbacks to Sara\'s death are shown throughout Season 1, and her loss is what drives Hopper\'s fierce protectiveness of Eleven.' },
      { question: 'What is Hopper\'s letter to Eleven?', answer: 'Hopper\'s letter, read aloud by Eleven in the Season 3 finale, is a heartfelt message he wrote about the difficulty of opening his heart again after losing Sara. The letter includes the famous line about keeping "the door open three inches" and became one of the most emotionally impactful moments in the series.' }
    ],
    videos: [
      { title: 'Hopper\'s Letter to Eleven', youtubeId: '5eDCBsMZpHY', description: 'The emotional reading of Hopper\'s letter from the Season 3 finale.' },
      { title: 'Jim Hopper - Best Moments', youtubeId: 'Gz5nBMVD7_s', description: 'A compilation of Jim Hopper\'s most memorable scenes.' }
    ],
    relatedCharacterSlugs: ['eleven-jane-hopper', 'mike-wheeler', 'dustin-henderson', 'steve-harrington', 'will-byers'],
    tags: ['protector', 'father-figure', 'fan-favorite', 'law-enforcement']
  },
  {
    slug: 'will-byers',
    name: 'Will Byers',
    showSlug: 'stranger-things',
    showTitle: 'Stranger Things',
    actorSlug: 'noah-schnapp',
    actorName: 'Noah Schnapp',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Will Byers is the quiet, artistic boy whose disappearance into the Upside Down in the very first episode sets the entire story of Stranger Things into motion. A sensitive child with a talent for drawing and a love of Dungeons & Dragons, Will is the member of the Hawkins party most deeply and repeatedly victimized by the forces of the Upside Down. His abduction, rescue, possession, and lingering psychic connection to the shadow dimension make him the show\'s most tragic figure — a boy who can never fully escape the darkness that claimed him.\n\nAfter his rescue from the Upside Down in Season 1, Will is haunted by visions of the shadow world bleeding into reality. In Season 2, he becomes the unwilling host of the Mind Flayer, a possession that robs him of his autonomy and terrorizes him physically and psychologically. The scenes of Will convulsing, speaking in the Mind Flayer\'s voice, and being exorcised by his mother Joyce with heat are among the show\'s most harrowing.\n\nBeyond the supernatural trauma, Will\'s arc explores the quieter pain of growing up differently. As his friends become consumed by romantic relationships, Will clings to the childhood they shared — wanting to play D&D while Mike and Lucas are preoccupied with girlfriends. His emotional monologue in the rain during Season 3, and his later struggles in Season 4, reveal a young man grappling with feelings of isolation and an unspoken love for Mike that he cannot articulate.\n\nWill\'s connection to the Upside Down — the tingling on his neck that signals Vecna\'s activity — transforms him from victim to sentinel. His ability to sense the Mind Flayer\'s presence makes him uniquely valuable to the group, even as it serves as a constant reminder that the Upside Down will never truly let him go.',
    keyEpisodes: [
      { title: 'The Vanishing of Will Byers', season: 1, episode: 1, description: 'Will is taken into the Upside Down by the Demogorgon, triggering the events of the entire series.' },
      { title: 'The Spy', season: 2, episode: 6, description: 'Will, possessed by the Mind Flayer, unknowingly leads a trap that results in soldiers being ambushed in the tunnels.' },
      { title: 'The Mind Flayer', season: 2, episode: 8, description: 'Joyce, Jonathan, and Nancy use heat to exorcise the Mind Flayer from Will\'s body in an intense and harrowing sequence.' },
      { title: 'The Sauna Test', season: 3, episode: 4, description: 'Will senses the Mind Flayer\'s return, feeling the familiar tingling on the back of his neck.' },
      { title: 'The Piggyback', season: 4, episode: 9, description: 'Will reveals to Mike that he can feel Vecna and that Eleven cannot win alone, playing a critical strategic role in the final battle.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Noah_Schnapp_by_Gage_Skidmore.jpg/440px-Noah_Schnapp_by_Gage_Skidmore.jpg', alt: 'Noah Schnapp, who portrays Will Byers in Stranger Things', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/StrangerThings', url: 'https://www.reddit.com/r/StrangerThings/', platform: 'Reddit', description: 'Main Stranger Things subreddit' }
      ],
      youtubeChannels: [
        { name: 'Will Byers - The Tragedy of Stranger Things', url: 'https://www.youtube.com/results?search_query=will+byers+character+analysis', platform: 'YouTube', description: 'Character analyses exploring Will\'s arc' }
      ],
      twitterAccounts: [
        { name: '@Stranger_Things', url: 'https://twitter.com/Stranger_Things', platform: 'Twitter/X', description: 'Official Stranger Things account' }
      ],
      fanSites: [
        { name: 'Stranger Things Wiki - Will', url: 'https://strangerthings.fandom.com/wiki/Will_Byers', platform: 'Web', description: 'Will Byers wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 80, engagement: 82, socialActivity: 79, memeVelocity: 76, fanArtDensity: 83, fandomLongevity: 81 },
    faqs: [
      { question: 'Who plays Will Byers in Stranger Things?', answer: 'Noah Schnapp plays Will Byers in Stranger Things. Schnapp was ten years old when he was cast and has grown up on the show. He has also voiced the character of Charlie Brown in The Peanuts Movie (2015).' },
      { question: 'What happened to Will Byers in the Upside Down?', answer: 'In Season 1, Will is abducted by the Demogorgon and pulled into the Upside Down, a dark mirror dimension. He survives by hiding and communicating with his mother Joyce through electrical interference. He is rescued in the season finale but remains psychologically scarred by the experience.' },
      { question: 'Is Will Byers in love with Mike Wheeler?', answer: 'Season 4 strongly implies that Will has romantic feelings for Mike. His painting of Mike as a knight leading the party, his tearful conversation in the car about being "different," and his emotional support of Mike and Eleven\'s relationship all point to unrequited love. Actor Noah Schnapp confirmed in interviews that Will is gay and in love with Mike.' },
      { question: 'Why does the back of Will\'s neck tingle in Stranger Things?', answer: 'After being rescued from the Upside Down and later possessed by the Mind Flayer, Will retains a psychic connection to the shadow dimension. He feels a tingling sensation on the back of his neck whenever the Mind Flayer or Vecna is active or near. This makes him an early warning system for the group, though it also means the Upside Down maintains a hold on him.' }
    ],
    videos: [
      { title: 'Will Byers - The Most Tragic Character', youtubeId: 'ixiGxPCsjC0', description: 'A video essay on Will Byers as the emotional center of Stranger Things.' }
    ],
    relatedCharacterSlugs: ['mike-wheeler', 'eleven-jane-hopper', 'dustin-henderson', 'jim-hopper', 'steve-harrington'],
    tags: ['tragic', 'party-member', 'connected-to-upside-down', 'sensitive']
  }
];

module.exports = { stCharacters };
