// Yellowstone & Schitt's Creek Characters
const yellowstoneCharacters = [
  {
    slug: 'john-dutton',
    name: 'John Dutton',
    showSlug: 'yellowstone',
    showTitle: 'Yellowstone',
    actorSlug: 'kevin-costner',
    actorName: 'Kevin Costner',
    seasonsActive: 'Seasons 1–5',
    characterArc: 'John Dutton is the patriarch of the Dutton family and the owner of the largest contiguous cattle ranch in Montana. A sixth-generation rancher, John wages a constant war against land developers, an expanding neighboring town, and political forces that threaten his family\'s legacy. His stoic determination to preserve the Yellowstone Dutton Ranch drives every decision he makes, no matter the moral cost.\n\nJohn\'s relationships with his children define much of the series\' emotional landscape. He grooms Kayce as his reluctant heir, engages in a bitter cold war with his adopted son Jamie, and shares an intense bond with his fiercest defender, Beth. The death of his eldest son Lee in the pilot episode sets the tone for a family constantly under siege.\n\nThroughout the series, John enters the political arena, eventually becoming Governor of Montana to wield institutional power in defense of his ranch. His political maneuvering reveals a man willing to corrupt the very systems he claims to respect in order to preserve a way of life that may already be vanishing.\n\nJohn Dutton represents the mythos of the American West — rugged, uncompromising, and deeply flawed. His story asks whether legacy is worth the destruction it demands, and whether holding onto the past inevitably means sacrificing the future.',
    keyEpisodes: [
      { title: 'Daybreak', season: 1, episode: 1, description: 'John Dutton is introduced as the embattled patriarch of the Yellowstone ranch, and his eldest son Lee is killed in a conflict with the Broken Rock Reservation.' },
      { title: 'The Unravelling: Part 1', season: 2, episode: 9, description: 'John confronts the Beck brothers and orchestrates a violent reckoning to protect his family.' },
      { title: 'No Good Horses', season: 3, episode: 5, description: 'John reflects on the Dutton family history and what it means to carry the weight of their legacy.' },
      { title: 'One Hundred Years Is Nothing', season: 5, episode: 1, description: 'John is sworn in as Governor of Montana, bringing the Dutton family\'s fight into the political arena.' },
      { title: 'A Knife and No Coin', season: 5, episode: 3, description: 'John uses his gubernatorial powers to halt development threatening the ranch, revealing the extent of his political ruthlessness.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kevin_Costner_2016.jpg/440px-Kevin_Costner_2016.jpg', alt: 'Kevin Costner, who portrays John Dutton in Yellowstone', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/YellowstonePN', url: 'https://www.reddit.com/r/YellowstonePN/', platform: 'Reddit', description: 'Main Yellowstone subreddit with active episode discussions and fan theories' },
        { name: 'r/YellowstoneShow', url: 'https://www.reddit.com/r/YellowstoneShow/', platform: 'Reddit', description: 'Additional Yellowstone community for show discussion' }
      ],
      youtubeChannels: [
        { name: 'Yellowstone Official - John Dutton Moments', url: 'https://www.youtube.com/results?search_query=john+dutton+best+moments+yellowstone', platform: 'YouTube', description: 'Compilations of John Dutton\'s most iconic scenes' }
      ],
      twitterAccounts: [
        { name: '@Yellowstone', url: 'https://twitter.com/Yellowstone', platform: 'Twitter/X', description: 'Official Yellowstone TV series account' }
      ],
      fanSites: [
        { name: 'Yellowstone Wiki', url: 'https://yellowstone.fandom.com/', platform: 'Web', description: 'Comprehensive Yellowstone encyclopedia on Fandom' }
      ],
      instagramAccounts: [
        { name: '@yellowstone', url: 'https://www.instagram.com/yellowstone/', platform: 'Instagram', description: 'Official Yellowstone Instagram page' }
      ],
      tiktokCreators: [
        { name: 'Yellowstone Edits', url: 'https://www.tiktok.com/tag/yellowstone', platform: 'TikTok', description: 'Fan edits and clips on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 91, engagement: 90, socialActivity: 88, memeVelocity: 85, fanArtDensity: 80, fandomLongevity: 92 },
    faqs: [
      { question: 'Who plays John Dutton in Yellowstone?', answer: 'Kevin Costner plays John Dutton in Yellowstone. Costner, an Academy Award-winning actor and director known for Dances with Wolves and Field of Dreams, brings cinematic gravitas to the role of the Montana ranching patriarch.' },
      { question: 'Is John Dutton based on a real person?', answer: 'John Dutton is not directly based on a single real person, but creator Taylor Sheridan drew inspiration from real Montana ranching families and the ongoing conflicts between ranchers, developers, and Native American communities in the modern West.' },
      { question: 'Does John Dutton become Governor?', answer: 'Yes, John Dutton is sworn in as Governor of Montana at the beginning of Season 5. He pursues the office as a strategic move to use political power to protect the Yellowstone ranch from development threats.' },
      { question: 'Why did Kevin Costner leave Yellowstone?', answer: 'Kevin Costner departed Yellowstone during Season 5 due to scheduling conflicts with his film project Horizon: An American Saga. His exit became one of the most discussed behind-the-scenes stories in television.' }
    ],
    videos: [
      { title: 'John Dutton - The Patriarch of Yellowstone', youtubeId: 'HixBhOOJOGo', description: 'A character study exploring John Dutton\'s role as the heart of Yellowstone.' },
      { title: 'John Dutton Best Moments', youtubeId: 'VIBpirZaYFE', description: 'Compilation of John Dutton\'s most powerful scenes across all seasons.' }
    ],
    relatedCharacterSlugs: ['beth-dutton', 'kayce-dutton', 'jamie-dutton', 'rip-wheeler', 'monica-dutton'],
    tags: ['patriarch', 'protagonist', 'iconic', 'leader']
  },
  {
    slug: 'beth-dutton',
    name: 'Beth Dutton',
    showSlug: 'yellowstone',
    showTitle: 'Yellowstone',
    actorSlug: 'kelly-reilly',
    actorName: 'Kelly Reilly',
    seasonsActive: 'Seasons 1–5',
    characterArc: 'Beth Dutton is the fiercely loyal and devastatingly sharp-tongued daughter of John Dutton. A brilliant financier with a talent for corporate warfare, Beth wields her intelligence like a weapon, dismantling her family\'s enemies with the same ferocity she uses to guard her emotional wounds. She is, by any measure, one of the most volatile and compelling characters on modern television.\n\nBeth\'s psychological complexity stems from a childhood trauma that defines her entire adult life. As a teenager, she inadvertently led her brother Jamie to a clinic on the Broken Rock Reservation where she was sterilized without her knowledge during an abortion — a betrayal she can never forgive. This event fuels her consuming hatred of Jamie and her desperate attachment to her father and Rip Wheeler.\n\nHer relationship with Rip is the show\'s central love story — raw, passionate, and surprisingly tender beneath its rough exterior. Rip is the only person who sees past Beth\'s armor, and their eventual marriage represents one of the few moments of genuine happiness in her life.\n\nBeth\'s arc across the series sees her evolving from a self-destructive force of nature into someone willing to fight not just out of rage but out of love. Even so, she remains dangerous to anyone who threatens the Dutton family, making her both the ranch\'s greatest asset and its most unpredictable element.',
    keyEpisodes: [
      { title: 'Kill the Messenger', season: 1, episode: 4, description: 'Beth\'s ruthless corporate tactics are showcased as she wages financial warfare against the Duttons\' enemies.' },
      { title: 'Resurrection Day', season: 2, episode: 7, description: 'Beth confronts her past trauma and her fractured relationship with Jamie in an emotionally devastating episode.' },
      { title: 'I Killed a Man Today', season: 3, episode: 4, description: 'Beth proposes to Rip Wheeler in one of the series\' most memorable romantic scenes.' },
      { title: 'No Kindness for the Coward', season: 4, episode: 8, description: 'Beth and Rip marry in an intimate ceremony, marking a pivotal moment for both characters.' },
      { title: 'One Hundred Years Is Nothing', season: 5, episode: 1, description: 'Beth takes on the role of her father\'s chief advisor as he begins his governorship.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Kelly_Reilly_Britannia_premiere.jpg/440px-Kelly_Reilly_Britannia_premiere.jpg', alt: 'Kelly Reilly, who portrays Beth Dutton in Yellowstone', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/YellowstonePN', url: 'https://www.reddit.com/r/YellowstonePN/', platform: 'Reddit', description: 'Main Yellowstone subreddit with frequent Beth Dutton appreciation threads' }
      ],
      youtubeChannels: [
        { name: 'Beth Dutton Best Insults', url: 'https://www.youtube.com/results?search_query=beth+dutton+best+insults', platform: 'YouTube', description: 'Popular compilations of Beth\'s sharpest one-liners' }
      ],
      twitterAccounts: [
        { name: '@Yellowstone', url: 'https://twitter.com/Yellowstone', platform: 'Twitter/X', description: 'Official Yellowstone account' }
      ],
      fanSites: [
        { name: 'Yellowstone Wiki - Beth', url: 'https://yellowstone.fandom.com/wiki/Beth_Dutton', platform: 'Web', description: 'Beth Dutton wiki page' }
      ],
      instagramAccounts: [
        { name: '@yellowstone', url: 'https://www.instagram.com/yellowstone/', platform: 'Instagram', description: 'Official Yellowstone Instagram' }
      ],
      tiktokCreators: [
        { name: 'Beth Dutton Edits', url: 'https://www.tiktok.com/tag/bethdutton', platform: 'TikTok', description: 'Fan-made Beth Dutton content on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 93, engagement: 95, socialActivity: 92, memeVelocity: 94, fanArtDensity: 85, fandomLongevity: 90 },
    faqs: [
      { question: 'Who plays Beth Dutton in Yellowstone?', answer: 'Kelly Reilly plays Beth Dutton in Yellowstone. The British actress has received widespread acclaim for her portrayal of the fierce, complex Dutton daughter, earning multiple award nominations for the role.' },
      { question: 'Why does Beth hate Jamie so much?', answer: 'Beth\'s hatred of Jamie stems from a traumatic event in their youth. When teenage Beth became pregnant, Jamie took her to a clinic on the Broken Rock Reservation that required sterilization as a condition of the procedure — a fact Jamie claims he did not fully understand at the time. Beth can never forgive him for taking away her ability to have children.' },
      { question: 'Do Beth and Rip get married?', answer: 'Yes, Beth and Rip Wheeler get married in Season 4, Episode 8 ("No Kindness for the Coward"). The ceremony is simple and intimate, with a priest brought to the ranch for the occasion.' },
      { question: 'What does Beth Dutton do for a living?', answer: 'Beth Dutton is a highly skilled financier and corporate strategist. She works in high finance and uses her expertise to protect the Dutton family\'s interests against corporate developers and hostile business interests threatening the ranch.' }
    ],
    videos: [
      { title: 'Beth Dutton\'s Most Savage Moments', youtubeId: 'u_FIB-_HXGE', description: 'Compilation of Beth Dutton\'s fiercest confrontations and one-liners.' },
      { title: 'Beth and Rip - A Love Story', youtubeId: 'QCmR_J3gNqg', description: 'The complete Beth and Rip relationship timeline across all seasons.' },
      { title: 'Kelly Reilly on Playing Beth Dutton', youtubeId: '3e7ylVz0LYQ', description: 'Kelly Reilly discusses the challenges and rewards of portraying Beth.' }
    ],
    relatedCharacterSlugs: ['john-dutton', 'rip-wheeler', 'jamie-dutton', 'kayce-dutton', 'monica-dutton'],
    tags: ['fan-favorite', 'fierce', 'complex', 'iconic']
  },
  {
    slug: 'kayce-dutton',
    name: 'Kayce Dutton',
    showSlug: 'yellowstone',
    showTitle: 'Yellowstone',
    actorSlug: 'luke-grimes',
    actorName: 'Luke Grimes',
    seasonsActive: 'Seasons 1–5',
    characterArc: 'Kayce Dutton is the youngest surviving son of John Dutton, a former Navy SEAL who is torn between his loyalty to the Dutton ranch and his desire to forge his own path. Married to Monica Long, a member of the Broken Rock Reservation, Kayce exists between two worlds that are often in direct conflict with each other.\n\nKayce\'s military background makes him the family\'s most capable enforcer, but unlike Beth or John, violence weighs heavily on his conscience. He is haunted by the things he has done in service of his family and his country, and his quiet struggle with that burden provides some of the show\'s most introspective moments.\n\nHis relationship with Monica is tested repeatedly by the gravitational pull of the Dutton family. Monica pushes Kayce to separate himself from the ranch\'s cycle of violence, while John pulls him deeper into the family\'s battles. Kayce\'s loyalty to both wife and father creates an impossible tension that defines his arc.\n\nIn Season 4, Kayce undergoes a vision quest that fundamentally reshapes his understanding of himself and his future. Told he must choose between two paths, Kayce\'s journey becomes a meditation on identity, belonging, and the cost of loyalty.',
    keyEpisodes: [
      { title: 'Daybreak', season: 1, episode: 1, description: 'Kayce is introduced living on the Broken Rock Reservation with Monica and Tate, estranged from his father.' },
      { title: 'A Monster Is Among Us', season: 2, episode: 4, description: 'Kayce takes on the role of Livestock Commissioner, stepping deeper into the Dutton family power structure.' },
      { title: 'All for Nothing', season: 3, episode: 8, description: 'Kayce confronts the violence inherent in protecting the ranch and its impact on his marriage.' },
      { title: 'Grass on the Streets and Weeds on the Rooftops', season: 4, episode: 10, description: 'Kayce completes a vision quest that reveals he must choose between two paths — the end of his family or the end of his marriage.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Luke_Grimes_2018.jpg/440px-Luke_Grimes_2018.jpg', alt: 'Luke Grimes, who portrays Kayce Dutton in Yellowstone', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/YellowstonePN', url: 'https://www.reddit.com/r/YellowstonePN/', platform: 'Reddit', description: 'Main Yellowstone subreddit' }
      ],
      youtubeChannels: [
        { name: 'Kayce Dutton Character Analysis', url: 'https://www.youtube.com/results?search_query=kayce+dutton+character+analysis', platform: 'YouTube', description: 'In-depth analysis of Kayce\'s character journey' }
      ],
      twitterAccounts: [
        { name: '@Yellowstone', url: 'https://twitter.com/Yellowstone', platform: 'Twitter/X', description: 'Official Yellowstone account' }
      ],
      fanSites: [
        { name: 'Yellowstone Wiki - Kayce', url: 'https://yellowstone.fandom.com/wiki/Kayce_Dutton', platform: 'Web', description: 'Kayce Dutton wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 84, engagement: 86, socialActivity: 80, memeVelocity: 75, fanArtDensity: 78, fandomLongevity: 85 },
    faqs: [
      { question: 'Who plays Kayce Dutton in Yellowstone?', answer: 'Luke Grimes plays Kayce Dutton in Yellowstone. Grimes is also known for his roles in the Fifty Shades film series and American Sniper.' },
      { question: 'Was Kayce Dutton a Navy SEAL?', answer: 'Yes, Kayce Dutton served as a Navy SEAL before the events of the series. His military training makes him an effective enforcer for the Dutton family, though he struggles with the violence required of him.' },
      { question: 'What did Kayce see in his vision quest?', answer: 'During his vision quest at the end of Season 4, Kayce is told he must choose between two paths. He tells Monica afterward that he "saw the end of us," suggesting his vision revealed a future where he must choose between his marriage and his family\'s legacy.' },
      { question: 'Are Kayce and Monica together?', answer: 'Kayce and Monica\'s relationship is tested throughout the series but remains one of Yellowstone\'s central love stories. They face numerous hardships including violence, family pressure, and personal loss, but continue to fight for their relationship.' }
    ],
    videos: [
      { title: 'Kayce Dutton - Between Two Worlds', youtubeId: 'SMGFJLCBxBM', description: 'An exploration of Kayce\'s struggle between the ranch and reservation.' },
      { title: 'Kayce Dutton Best Scenes', youtubeId: 'tL9VBXs3FMw', description: 'Compilation of Kayce\'s most memorable moments in Yellowstone.' }
    ],
    relatedCharacterSlugs: ['john-dutton', 'monica-dutton', 'beth-dutton', 'rip-wheeler', 'jamie-dutton'],
    tags: ['torn', 'veteran', 'family-man', 'conflicted']
  },
  {
    slug: 'jamie-dutton',
    name: 'Jamie Dutton',
    showSlug: 'yellowstone',
    showTitle: 'Yellowstone',
    actorSlug: 'wes-bentley',
    actorName: 'Wes Bentley',
    seasonsActive: 'Seasons 1–5',
    characterArc: 'Jamie Dutton is the adopted son of John Dutton, a Harvard-educated lawyer who desperately seeks his father\'s approval while simultaneously being denied the respect and trust given to his siblings. His arc is one of television\'s most compelling studies of nature versus nurture and the corrosive effects of conditional love.\n\nJamie\'s discovery that he is adopted — and that his biological father Garrett Randall is a convicted murderer — shatters his already fragile identity. This revelation, combined with years of emotional abuse from Beth and neglect from John, pushes Jamie toward increasingly desperate and morally compromising decisions.\n\nAs the series progresses, Jamie oscillates between genuine attempts to serve the family and calculated moves to gain independence or power. He serves as Montana\'s Attorney General, a position that puts him in direct conflict with his family\'s extralegal methods of protecting the ranch.\n\nJamie\'s trajectory becomes the show\'s most tragic arc. Every attempt to escape the Dutton orbit pulls him back in, and every bid for autonomy is met with punishment. His story raises uncomfortable questions about whether a person shaped by cruelty and rejection can ever truly break free of those forces.',
    keyEpisodes: [
      { title: 'The Long Black Train', season: 1, episode: 3, description: 'Jamie\'s political ambitions and desire to prove himself to John are established as he runs for Attorney General.' },
      { title: 'Sins of the Father', season: 3, episode: 9, description: 'Jamie discovers the truth about his biological father Garrett Randall and his adoption by the Duttons.' },
      { title: 'No Such Thing as Fair', season: 4, episode: 6, description: 'Jamie builds a relationship with his biological father while further alienating himself from the Dutton family.' },
      { title: 'One Hundred Years Is Nothing', season: 5, episode: 1, description: 'Jamie is forced to serve under his father\'s governorship, deepening the power struggle between them.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Wes_Bentley_TIFF_2017.jpg/440px-Wes_Bentley_TIFF_2017.jpg', alt: 'Wes Bentley, who portrays Jamie Dutton in Yellowstone', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/YellowstonePN', url: 'https://www.reddit.com/r/YellowstonePN/', platform: 'Reddit', description: 'Main Yellowstone subreddit with frequent Jamie debate threads' }
      ],
      youtubeChannels: [
        { name: 'Jamie Dutton - Tragic Villain or Victim?', url: 'https://www.youtube.com/results?search_query=jamie+dutton+character+analysis', platform: 'YouTube', description: 'Character analysis videos debating Jamie\'s morality' }
      ],
      twitterAccounts: [
        { name: '@Yellowstone', url: 'https://twitter.com/Yellowstone', platform: 'Twitter/X', description: 'Official Yellowstone account' }
      ],
      fanSites: [
        { name: 'Yellowstone Wiki - Jamie', url: 'https://yellowstone.fandom.com/wiki/Jamie_Dutton', platform: 'Web', description: 'Jamie Dutton wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 78, engagement: 80, socialActivity: 75, memeVelocity: 72, fanArtDensity: 65, fandomLongevity: 80 },
    faqs: [
      { question: 'Who plays Jamie Dutton in Yellowstone?', answer: 'Wes Bentley plays Jamie Dutton in Yellowstone. Bentley is known for his breakout role in American Beauty and has brought nuanced depth to the conflicted adopted Dutton son.' },
      { question: 'Is Jamie Dutton adopted?', answer: 'Yes, Jamie is adopted. He discovers in Season 3 that his biological father is Garrett Randall, a man convicted of murdering Jamie\'s biological mother. John and Evelyn Dutton adopted Jamie as a child and raised him alongside their biological children.' },
      { question: 'Why does Beth hate Jamie?', answer: 'Beth\'s hatred of Jamie centers on a traumatic event from their teenage years. Jamie took Beth to a clinic on the Broken Rock Reservation for an abortion, where she was sterilized as a condition of the procedure. Beth holds Jamie responsible for permanently taking away her ability to have children.' },
      { question: 'Does Jamie become a villain in Yellowstone?', answer: 'Jamie\'s moral alignment is one of the show\'s most debated topics. While he makes increasingly antagonistic choices against the Dutton family, especially after discovering his adoption and building a relationship with his biological father, many viewers see him as a sympathetic figure driven to extremes by a lifetime of rejection.' }
    ],
    videos: [
      { title: 'Jamie Dutton\'s Tragic Story', youtubeId: 'y3K7kqCa84Y', description: 'A deep dive into Jamie\'s arc from loyal son to family antagonist.' },
      { title: 'Jamie vs Beth - The Complete Rivalry', youtubeId: 'b5cAxsYG89s', description: 'Every major confrontation between Jamie and Beth Dutton.' }
    ],
    relatedCharacterSlugs: ['john-dutton', 'beth-dutton', 'kayce-dutton', 'rip-wheeler'],
    tags: ['complex', 'tragic', 'antagonist', 'conflicted']
  },
  {
    slug: 'rip-wheeler',
    name: 'Rip Wheeler',
    showSlug: 'yellowstone',
    showTitle: 'Yellowstone',
    actorSlug: 'cole-hauser',
    actorName: 'Cole Hauser',
    seasonsActive: 'Seasons 1–5',
    characterArc: 'Rip Wheeler is the loyal ranch foreman of the Yellowstone Dutton Ranch and the longtime love interest — and eventual husband — of Beth Dutton. Taken in by John Dutton as a teenager after killing his abusive father, Rip has devoted his life to the man and the land that gave him a second chance. He is John\'s most trusted enforcer and the unquestioned leader of the bunkhouse cowboys.\n\nRip\'s backstory is defined by violence and survival. Orphaned and traumatized, he found purpose and belonging at the Yellowstone. His willingness to do whatever John asks — including disposing of bodies and eliminating threats — makes him indispensable but also morally compromised. Rip operates in the moral gray zone where loyalty becomes its own kind of law.\n\nHis relationship with Beth is the emotional anchor of the series. Their love is fierce, complicated, and deeply authentic. Beth sees in Rip the only person who accepts her completely, while Rip finds in Beth a reason to be more than just a blunt instrument. Their wedding in Season 4 is one of the show\'s most celebrated moments.\n\nRip Wheeler embodies the cowboy archetype filtered through modern complexity — a man of few words and decisive action who lives by a code of honor that does not always align with the law. His devotion to the Dutton family is absolute, making him both the heart and the fist of the Yellowstone.',
    keyEpisodes: [
      { title: 'Daybreak', season: 1, episode: 1, description: 'Rip is introduced as John Dutton\'s fiercely loyal ranch foreman and enforcer.' },
      { title: 'Behind Us Only Grey', season: 2, episode: 4, description: 'Rip\'s traumatic childhood and his rescue by John Dutton are revealed in flashback.' },
      { title: 'I Killed a Man Today', season: 3, episode: 4, description: 'Beth proposes to Rip in a raw and emotional scene that cements their bond.' },
      { title: 'No Kindness for the Coward', season: 4, episode: 8, description: 'Rip and Beth are married in an intimate ceremony at the ranch.' },
      { title: 'Watch \'Em Ride Away', season: 5, episode: 6, description: 'Rip takes on expanded responsibilities at the ranch while navigating the fallout of John\'s political career.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Cole_Hauser_2012.jpg/440px-Cole_Hauser_2012.jpg', alt: 'Cole Hauser, who portrays Rip Wheeler in Yellowstone', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/YellowstonePN', url: 'https://www.reddit.com/r/YellowstonePN/', platform: 'Reddit', description: 'Main Yellowstone subreddit' }
      ],
      youtubeChannels: [
        { name: 'Rip Wheeler Best Moments', url: 'https://www.youtube.com/results?search_query=rip+wheeler+best+moments', platform: 'YouTube', description: 'Fan compilations of Rip\'s most iconic scenes' }
      ],
      twitterAccounts: [
        { name: '@Yellowstone', url: 'https://twitter.com/Yellowstone', platform: 'Twitter/X', description: 'Official Yellowstone account' }
      ],
      fanSites: [
        { name: 'Yellowstone Wiki - Rip', url: 'https://yellowstone.fandom.com/wiki/Rip_Wheeler', platform: 'Web', description: 'Rip Wheeler wiki page' }
      ],
      instagramAccounts: [
        { name: '@yellowstone', url: 'https://www.instagram.com/yellowstone/', platform: 'Instagram', description: 'Official Yellowstone Instagram' }
      ],
      tiktokCreators: [
        { name: 'Rip Wheeler Edits', url: 'https://www.tiktok.com/tag/ripwheeler', platform: 'TikTok', description: 'Fan-made Rip Wheeler content on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 90, engagement: 92, socialActivity: 88, memeVelocity: 86, fanArtDensity: 84, fandomLongevity: 89 },
    faqs: [
      { question: 'Who plays Rip Wheeler in Yellowstone?', answer: 'Cole Hauser plays Rip Wheeler in Yellowstone. Hauser, known for roles in Good Will Hunting and 2 Fast 2 Furious, has become one of television\'s most popular actors thanks to the role.' },
      { question: 'How did Rip Wheeler come to live at the Yellowstone ranch?', answer: 'Rip came to the Yellowstone as a teenager after killing his abusive father who had murdered his mother and brother. John Dutton took him in, gave him a home at the ranch, and Rip has been fiercely loyal to the Dutton family ever since.' },
      { question: 'Do Rip and Beth have children?', answer: 'Beth cannot have biological children due to being sterilized as a teenager. However, in Season 4, Beth and Rip take in Carter, a troubled teenager, in a dynamic that echoes how John took in Rip years earlier.' },
      { question: 'What does Rip Wheeler do at the ranch?', answer: 'Rip Wheeler serves as the foreman of the Yellowstone Dutton Ranch. He manages the bunkhouse cowboys, oversees daily ranching operations, and acts as John Dutton\'s primary enforcer when threats to the ranch require more than legal solutions.' }
    ],
    videos: [
      { title: 'Rip Wheeler - The Loyal Enforcer', youtubeId: 'kCc0EjFHNRQ', description: 'A character study of Rip Wheeler and his unwavering loyalty to the Duttons.' },
      { title: 'Rip and Beth - Every Major Moment', youtubeId: 'JxFh8VoGbNI', description: 'The complete Rip and Beth love story across all seasons.' },
      { title: 'Rip Wheeler\'s Best One-Liners', youtubeId: 'BHZxQDQq1TY', description: 'Compilation of Rip\'s toughest and most quotable lines.' }
    ],
    relatedCharacterSlugs: ['beth-dutton', 'john-dutton', 'kayce-dutton', 'jamie-dutton'],
    tags: ['fan-favorite', 'enforcer', 'cowboy', 'loyal']
  },
  {
    slug: 'monica-dutton',
    name: 'Monica Dutton',
    showSlug: 'yellowstone',
    showTitle: 'Yellowstone',
    actorSlug: 'kelsey-asbille',
    actorName: 'Kelsey Asbille',
    seasonsActive: 'Seasons 1–5',
    characterArc: 'Monica Dutton, born Monica Long, is a member of the Broken Rock Reservation and Kayce Dutton\'s wife. A university professor who teaches Native American history, Monica represents a perspective rarely centered in Western dramas — that of an Indigenous woman navigating the collision between her heritage and the powerful white ranching family she has married into.\n\nMonica\'s position in the Dutton family is inherently fraught with tension. She loves Kayce deeply but recognizes that the Dutton way of life is built on the very land and power structures that have historically oppressed her people. Her attempts to pull Kayce away from the ranch\'s orbit of violence are driven not by weakness but by a clear-eyed understanding of what that world costs.\n\nThroughout the series, Monica endures significant trauma — a brutal assault, a near-fatal car accident, and the devastating stillbirth of her and Kayce\'s second child. These experiences test her resilience but also deepen her resolve to protect her surviving son Tate from the dangers that surround the Dutton family.\n\nMonica\'s character serves as the show\'s moral counterweight to the Duttons\' ends-justify-the-means philosophy. She asks the questions the other characters avoid: whether the ranch is worth the blood spilled to keep it, and whether there is a way to honor both family loyalty and personal integrity.',
    keyEpisodes: [
      { title: 'Daybreak', season: 1, episode: 1, description: 'Monica is introduced living on the Broken Rock Reservation with Kayce and their son Tate.' },
      { title: 'Coming Home', season: 2, episode: 3, description: 'Monica recovers from a violent attack and begins teaching at the university, asserting her independence.' },
      { title: 'An Acceptable Surrender', season: 3, episode: 7, description: 'Monica confronts the realities of being part of the Dutton family and its impact on her identity.' },
      { title: 'Half the Money', season: 5, episode: 2, description: 'Monica faces the tragic stillbirth of her and Kayce\'s baby, one of the series\' most emotionally devastating moments.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Kelsey_Asbille_2018.jpg/440px-Kelsey_Asbille_2018.jpg', alt: 'Kelsey Asbille, who portrays Monica Dutton in Yellowstone', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/YellowstonePN', url: 'https://www.reddit.com/r/YellowstonePN/', platform: 'Reddit', description: 'Main Yellowstone subreddit' }
      ],
      youtubeChannels: [],
      twitterAccounts: [
        { name: '@Yellowstone', url: 'https://twitter.com/Yellowstone', platform: 'Twitter/X', description: 'Official Yellowstone account' }
      ],
      fanSites: [
        { name: 'Yellowstone Wiki - Monica', url: 'https://yellowstone.fandom.com/wiki/Monica_Dutton', platform: 'Web', description: 'Monica Dutton wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 65, engagement: 68, socialActivity: 60, memeVelocity: 55, fanArtDensity: 50, fandomLongevity: 70 },
    faqs: [
      { question: 'Who plays Monica Dutton in Yellowstone?', answer: 'Kelsey Asbille plays Monica Dutton in Yellowstone. Asbille has brought depth to the role of Kayce\'s wife and a woman navigating life between the Broken Rock Reservation and the Dutton ranch.' },
      { question: 'Is Monica Dutton Native American?', answer: 'The character Monica Dutton (born Monica Long) is a member of the Broken Rock Reservation and is Native American. She teaches Native American history at a university and her heritage is central to her character and storylines.' },
      { question: 'What happens to Monica and Kayce\'s baby?', answer: 'In Season 5, Monica and Kayce tragically lose their second child in a stillbirth following a car accident. The loss profoundly impacts both characters and their relationship.' },
      { question: 'Why do some fans dislike Monica?', answer: 'Monica is a polarizing character among Yellowstone fans. Some viewers find her storylines less engaging compared to the high-stakes drama of other characters, while others appreciate her role as a moral compass and the representation of Indigenous perspectives in the series.' }
    ],
    videos: [
      { title: 'Monica and Kayce - Their Complete Story', youtubeId: 'X5gJNjLfJHk', description: 'The full relationship timeline of Monica and Kayce Dutton.' },
      { title: 'Monica Dutton\'s Most Powerful Moments', youtubeId: 'R7YdFiGnOCE', description: 'Compilation of Monica\'s strongest scenes in Yellowstone.' }
    ],
    relatedCharacterSlugs: ['kayce-dutton', 'john-dutton', 'beth-dutton', 'rip-wheeler'],
    tags: ['moral-compass', 'resilient', 'mother', 'indigenous']
  }
];

const schittsCreekCharacters = [
  {
    slug: 'david-rose',
    name: 'David Rose',
    showSlug: 'schitts-creek',
    showTitle: "Schitt's Creek",
    actorSlug: 'dan-levy',
    actorName: 'Dan Levy',
    seasonsActive: 'Seasons 1–6',
    characterArc: 'David Rose begins as the pampered, anxious, and fashion-obsessed son of Johnny and Moira Rose, forced to relocate to the tiny town of Schitt\'s Creek after his family loses their fortune. Accustomed to a life of gallery openings, designer labels, and superficial relationships, David is utterly unprepared for small-town life and initially treats his new surroundings with undisguised contempt.\n\nAs the series progresses, David undergoes one of television\'s most satisfying character transformations. Stripped of material wealth, he slowly discovers that genuine human connection is far more valuable than the shallow world he left behind. His friendship with Stevie Budd and his relationship with business partner-turned-boyfriend Patrick Brewer become the catalysts for his growth.\n\nDavid\'s journey toward opening Rose Apothecary — a "general store but also very specific" — represents his transition from a person defined by consumption to one who creates. The store becomes his identity in a way that wealth never could, giving him purpose, community, and self-worth.\n\nDavid and Patrick\'s love story is widely celebrated as one of the most positive and authentic LGBTQ+ relationships in television history. Their wedding in the series finale is a joyous culmination of David\'s arc — a man who once believed he was unlovable finding lasting love and a place where he truly belongs.',
    keyEpisodes: [
      { title: 'Our Cup Runneth Over', season: 1, episode: 1, description: 'David and the Rose family arrive in Schitt\'s Creek after losing their fortune, beginning their journey of reinvention.' },
      { title: 'Open Mic', season: 4, episode: 6, description: 'Patrick sings Tina Turner\'s "Simply the Best" to David at an open mic night, a defining moment for their relationship.' },
      { title: 'Meet the Parents', season: 5, episode: 11, description: 'Patrick comes out to his parents, and David supports him through one of the series\' most emotionally resonant episodes.' },
      { title: 'The Premiere', season: 5, episode: 13, description: 'David and Patrick get engaged in a romantic proposal at the store they built together.' },
      { title: 'Happy Ending', season: 6, episode: 14, description: 'David and Patrick\'s wedding serves as the series finale\'s emotional centerpiece, with David choosing to stay in Schitt\'s Creek.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Dan_Levy_2020.jpg/440px-Dan_Levy_2020.jpg', alt: 'Dan Levy, who portrays David Rose in Schitt\'s Creek', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/SchittsCreek', url: 'https://www.reddit.com/r/SchittsCreek/', platform: 'Reddit', description: 'Main Schitt\'s Creek subreddit with a warm and active community' }
      ],
      youtubeChannels: [
        { name: 'David Rose Best Moments', url: 'https://www.youtube.com/results?search_query=david+rose+schitts+creek+best+moments', platform: 'YouTube', description: 'Popular David Rose scene compilations' }
      ],
      twitterAccounts: [
        { name: '@SchittsCreek', url: 'https://twitter.com/SchittsCreek', platform: 'Twitter/X', description: 'Official Schitt\'s Creek account' }
      ],
      fanSites: [
        { name: 'Schitt\'s Creek Wiki', url: 'https://schittscreek.fandom.com/', platform: 'Web', description: 'Comprehensive Schitt\'s Creek encyclopedia on Fandom' }
      ],
      instagramAccounts: [
        { name: '@schabornetocreek', url: 'https://www.instagram.com/schittscreek/', platform: 'Instagram', description: 'Official Schitt\'s Creek Instagram page' }
      ],
      tiktokCreators: [
        { name: 'Schitt\'s Creek Edits', url: 'https://www.tiktok.com/tag/schittscreek', platform: 'TikTok', description: 'Fan edits and clips on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 92, engagement: 94, socialActivity: 90, memeVelocity: 93, fanArtDensity: 88, fandomLongevity: 91 },
    faqs: [
      { question: 'Who plays David Rose in Schitt\'s Creek?', answer: 'Dan Levy plays David Rose in Schitt\'s Creek. Levy also co-created the series with his real-life father Eugene Levy and served as a writer, producer, and showrunner. He won multiple Emmy Awards for the show\'s final season.' },
      { question: 'What is David Rose\'s sexuality?', answer: 'David Rose is pansexual. In one of the show\'s most celebrated scenes, David explains his sexuality to Stevie using a wine analogy: "I do drink red wine, but I also drink white wine. And I\'ve been known to sample the occasional rosé. And a couple of merlots." He likes "the wine and not the label."' },
      { question: 'What is Rose Apothecary?', answer: 'Rose Apothecary is the general store David opens in Schitt\'s Creek with Patrick Brewer. Described as "a general store, but also very specific," it sells locally sourced products and artisanal goods. The store represents David\'s personal growth and his commitment to his new community.' },
      { question: 'Do David and Patrick end up together?', answer: 'Yes, David and Patrick get engaged in the Season 5 finale and marry in the series finale ("Happy Ending," Season 6, Episode 14). Their wedding, despite weather complications, is one of the most beloved moments in the entire series.' }
    ],
    videos: [
      { title: 'David Rose - Simply the Best Moments', youtubeId: 'LFgCNBiGfOE', description: 'A compilation of David Rose\'s funniest and most heartfelt scenes.' },
      { title: 'David and Patrick - Love Story', youtubeId: 'T8MjwROIdnk', description: 'The complete David and Patrick relationship timeline.' },
      { title: 'David Rose\'s Best Outfits', youtubeId: '3XB2JfYWgKY', description: 'A fashion retrospective of David\'s iconic black and white wardrobe.' }
    ],
    relatedCharacterSlugs: ['alexis-rose', 'moira-rose', 'johnny-rose', 'stevie-budd', 'patrick-brewer'],
    tags: ['fan-favorite', 'comedic', 'LGBTQ+', 'iconic']
  },
  {
    slug: 'alexis-rose',
    name: 'Alexis Rose',
    showSlug: 'schitts-creek',
    showTitle: "Schitt's Creek",
    actorSlug: 'annie-murphy',
    actorName: 'Annie Murphy',
    seasonsActive: 'Seasons 1–6',
    characterArc: 'Alexis Rose is the socialite daughter of Johnny and Moira Rose, a former It Girl whose pre-Schitt\'s Creek life involved yacht parties with Beyonce, being held hostage by pirates, and dating a string of international celebrities. Her breezy recounting of these absurd adventures provides some of the show\'s most reliable comedy, but beneath the ditzy exterior lies a young woman who has never had to develop real emotional depth.\n\nForced to live in a motel room with her brother David, Alexis gradually discovers ambition and self-reliance she never knew she had. She earns her high school diploma, enrolls in college, and eventually builds a career as a publicist — achievements that mean infinitely more to her than any privilege her family\'s wealth once provided.\n\nHer romantic arc with veterinarian Ted Mullens is one of the show\'s most bittersweet stories. Their relationship grows from a shallow crush into genuine, mature love, but ultimately Alexis makes the painful decision to let Ted go when his career takes him to the Galapagos Islands. It is a defining moment of growth — the old Alexis would have clung to the relationship, but the new Alexis understands that loving someone sometimes means letting them pursue their dreams.\n\nBy the series finale, Alexis is the Rose family member who most clearly embodies the show\'s central thesis: that personal growth comes from being stripped of everything superficial and discovering what truly matters.',
    keyEpisodes: [
      { title: 'Our Cup Runneth Over', season: 1, episode: 1, description: 'Alexis arrives in Schitt\'s Creek fresh from a dramatic international lifestyle, completely unprepared for small-town living.' },
      { title: 'Singles Week', season: 4, episode: 1, description: 'Alexis and Ted reconcile and begin a mature, authentic relationship built on genuine connection.' },
      { title: 'Life Is a Cabaret', season: 5, episode: 14, description: 'Alexis performs "A Little Bit Alexis" at the town cabaret, showcasing her confidence and growth.' },
      { title: 'The Presidential Suite', season: 6, episode: 11, description: 'Alexis and Ted make the painful decision to end their relationship, marking Alexis\'s most significant moment of emotional maturity.' },
      { title: 'Happy Ending', season: 6, episode: 14, description: 'Alexis heads to New York to launch her PR career, having grown from a sheltered socialite into an independent, self-made woman.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Annie_Murphy_2019.jpg/440px-Annie_Murphy_2019.jpg', alt: 'Annie Murphy, who portrays Alexis Rose in Schitt\'s Creek', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/SchittsCreek', url: 'https://www.reddit.com/r/SchittsCreek/', platform: 'Reddit', description: 'Main Schitt\'s Creek subreddit' }
      ],
      youtubeChannels: [
        { name: 'Alexis Rose Best Moments', url: 'https://www.youtube.com/results?search_query=alexis+rose+best+moments', platform: 'YouTube', description: 'Compilations of Alexis\'s funniest scenes and character growth' }
      ],
      twitterAccounts: [
        { name: '@SchittsCreek', url: 'https://twitter.com/SchittsCreek', platform: 'Twitter/X', description: 'Official Schitt\'s Creek account' }
      ],
      fanSites: [
        { name: 'Schitt\'s Creek Wiki - Alexis', url: 'https://schittscreek.fandom.com/wiki/Alexis_Rose', platform: 'Web', description: 'Alexis Rose wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'A Little Bit Alexis', url: 'https://www.tiktok.com/tag/alittlebitalexis', platform: 'TikTok', description: 'Fan content inspired by Alexis\'s iconic song' }
      ]
    },
    fanHeatIndex: { overall: 87, engagement: 89, socialActivity: 85, memeVelocity: 90, fanArtDensity: 80, fandomLongevity: 86 },
    faqs: [
      { question: 'Who plays Alexis Rose in Schitt\'s Creek?', answer: 'Annie Murphy plays Alexis Rose in Schitt\'s Creek. Murphy won the Emmy Award for Outstanding Supporting Actress in a Comedy Series in 2020 for the role, her first major television credit.' },
      { question: 'What is "A Little Bit Alexis"?', answer: '"A Little Bit Alexis" is a song performed by Alexis Rose at the Schitt\'s Creek town cabaret. The catchy pop track, written for the show, became a viral sensation and is frequently referenced by fans. It pokes fun at Alexis\'s former socialite lifestyle.' },
      { question: 'Do Alexis and Ted end up together?', answer: 'No, Alexis and Ted ultimately break up in Season 6 when Ted receives a dream job offer in the Galapagos Islands. Rather than holding Ted back or following him, Alexis chooses to let him go and pursue her own career — a decision that represents her most significant character growth.' },
      { question: 'What are Alexis\'s wild backstory adventures?', answer: 'Alexis casually references an extraordinary array of past adventures, including being kidnapped by Somali pirates, escaping a Thai drug lord\'s compound on a jet ski, dating a Saudi prince, and being Stavros\'s plus-one on the yacht where Beyonce filmed Lemonade. These stories are played for comedy throughout the series.' }
    ],
    videos: [
      { title: 'A Little Bit Alexis - Full Performance', youtubeId: 'lVhd1mxiJEo', description: 'Alexis Rose\'s iconic cabaret performance of her pop single.' },
      { title: 'Alexis Rose Character Evolution', youtubeId: 'qHxJnEPMZiA', description: 'A look at Alexis\'s transformation from socialite to independent woman.' },
      { title: 'Alexis and Ted - Complete Love Story', youtubeId: 'WzcnHOuIyKo', description: 'Every major moment in Alexis and Ted\'s relationship.' }
    ],
    relatedCharacterSlugs: ['david-rose', 'moira-rose', 'johnny-rose', 'stevie-budd', 'patrick-brewer'],
    tags: ['comedic', 'growth', 'socialite', 'fan-favorite']
  },
  {
    slug: 'moira-rose',
    name: 'Moira Rose',
    showSlug: 'schitts-creek',
    showTitle: "Schitt's Creek",
    actorSlug: 'catherine-ohara',
    actorName: "Catherine O'Hara",
    seasonsActive: 'Seasons 1–6',
    characterArc: 'Moira Rose is the matriarch of the Rose family, a former soap opera actress known for her role as Dr. Clara Mandrake on the fictional show Sunrise Bay. Flamboyant, self-absorbed, and gloriously dramatic, Moira arrives in Schitt\'s Creek as perhaps the family member least equipped for humility — and her journey toward it is one of the show\'s greatest pleasures.\n\nMoira\'s defining characteristics are her ever-changing collection of elaborate wigs, her inexplicable and constantly shifting accent, her theatrical vocabulary, and her complete lack of practical life skills. She has never cooked a meal, does not know her children\'s middle names, and treats every minor inconvenience as a Shakespearean tragedy. Catherine O\'Hara\'s fearless, fully committed performance turns what could be a one-note character into something genuinely extraordinary.\n\nBeneath Moira\'s narcissism lies a woman reckoning with obsolescence and irrelevance. Her attempts to reclaim her acting career — through a regional production of Cabaret, a comeback role in the cult film The Crows Have Eyes III: The Crowening, and eventually a Sunrise Bay reboot — are simultaneously hilarious and poignant. She needs an audience not out of vanity but because performing is the only way she knows how to exist.\n\nMoira\'s growth is the subtlest in the family. She never becomes warm and fuzzy, but she learns to show up for her children and community in her own uniquely Moira way. Her town council work, her mentorship of local theater, and her grudging affection for the town reveal that Schitt\'s Creek has changed her — even if she would never admit it.',
    keyEpisodes: [
      { title: 'Our Cup Runneth Over', season: 1, episode: 1, description: 'Moira arrives in Schitt\'s Creek mourning the loss of her glamorous life and struggling with the indignity of motel living.' },
      { title: 'The Drip', season: 1, episode: 8, description: 'Moira joins the town council, beginning her reluctant involvement in community life.' },
      { title: 'Life Is a Cabaret', season: 5, episode: 14, description: 'Moira directs the town\'s production of Cabaret, channeling her theatrical talents for the community.' },
      { title: 'The Crowening', season: 6, episode: 7, description: 'Moira attends the premiere of The Crows Have Eyes III and learns about the Sunrise Bay reboot, reigniting her career ambitions.' },
      { title: 'Happy Ending', season: 6, episode: 14, description: 'Moira prepares to leave Schitt\'s Creek for the Sunrise Bay reboot, acknowledging that the town has become home.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Catherine_O%27Hara_2018.jpg/440px-Catherine_O%27Hara_2018.jpg', alt: 'Catherine O\'Hara, who portrays Moira Rose in Schitt\'s Creek', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/SchittsCreek', url: 'https://www.reddit.com/r/SchittsCreek/', platform: 'Reddit', description: 'Main Schitt\'s Creek subreddit with abundant Moira appreciation' }
      ],
      youtubeChannels: [
        { name: 'Moira Rose Best Moments', url: 'https://www.youtube.com/results?search_query=moira+rose+best+moments', platform: 'YouTube', description: 'Compilations of Moira\'s most iconic and theatrical moments' }
      ],
      twitterAccounts: [
        { name: '@SchittsCreek', url: 'https://twitter.com/SchittsCreek', platform: 'Twitter/X', description: 'Official Schitt\'s Creek account' }
      ],
      fanSites: [
        { name: 'Schitt\'s Creek Wiki - Moira', url: 'https://schittscreek.fandom.com/wiki/Moira_Rose', platform: 'Web', description: 'Moira Rose wiki page' }
      ],
      instagramAccounts: [
        { name: '@moirarosewigs', url: 'https://www.instagram.com/moirarosewigs/', platform: 'Instagram', description: 'Fan account dedicated to Moira\'s iconic wig collection' }
      ],
      tiktokCreators: [
        { name: 'Moira Rose Impressions', url: 'https://www.tiktok.com/tag/moirarose', platform: 'TikTok', description: 'Fan impressions and quotes on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 91, engagement: 93, socialActivity: 89, memeVelocity: 95, fanArtDensity: 87, fandomLongevity: 90 },
    faqs: [
      { question: 'Who plays Moira Rose in Schitt\'s Creek?', answer: 'Catherine O\'Hara plays Moira Rose in Schitt\'s Creek. O\'Hara, a legendary comedic actress known for Home Alone and Best in Show, won the Emmy Award for Outstanding Lead Actress in a Comedy Series in 2020 for the role.' },
      { question: 'What is Moira Rose\'s accent?', answer: 'Moira Rose speaks with an unplaceable, ever-shifting transatlantic accent that Catherine O\'Hara developed for the character. It borrows from various European and theatrical speech patterns and frequently introduces obscure vocabulary. O\'Hara has said she based it on people she\'s known who adopt affectations to distinguish themselves.' },
      { question: 'How many wigs does Moira Rose have?', answer: 'Moira Rose has an extensive wig collection that she stores in her motel room. The exact number varies, but the show\'s costume department created dozens of unique wigs for the character throughout the series. Each wig has its own name and is selected to match Moira\'s mood and outfit.' },
      { question: 'What show was Moira Rose on before Schitt\'s Creek?', answer: 'Before losing her fortune, Moira Rose was famous for playing Dr. Clara Mandrake on the fictional soap opera Sunrise Bay. The role is her claim to fame, and the Sunrise Bay reboot becomes a major plot point in the final season.' },
      { question: 'What is The Crows Have Eyes?', answer: 'The Crows Have Eyes III: The Crowening is a low-budget horror film that Moira stars in during Season 5. Despite its absurd premise — mutant crows attacking a small town — Moira approaches the role with complete seriousness. The film becomes a cult classic within the show\'s universe.' }
    ],
    videos: [
      { title: 'Moira Rose\'s Most Iconic Moments', youtubeId: 'bHeup8t_AcQ', description: 'A compilation of Moira\'s funniest and most theatrical scenes.' },
      { title: 'The Vocabulary of Moira Rose', youtubeId: 'LqRDBrMOR5s', description: 'Every time Moira uses an obscure or invented word throughout the series.' },
      { title: 'Catherine O\'Hara on Creating Moira Rose', youtubeId: 'FDJ_GFWKI2Y', description: 'Catherine O\'Hara discusses how she developed Moira\'s accent, wigs, and personality.' }
    ],
    relatedCharacterSlugs: ['johnny-rose', 'david-rose', 'alexis-rose', 'stevie-budd'],
    tags: ['iconic', 'comedic', 'theatrical', 'fan-favorite']
  },
  {
    slug: 'johnny-rose',
    name: 'Johnny Rose',
    showSlug: 'schitts-creek',
    showTitle: "Schitt's Creek",
    actorSlug: 'eugene-levy',
    actorName: 'Eugene Levy',
    seasonsActive: 'Seasons 1–6',
    characterArc: 'Johnny Rose is the patriarch of the Rose family, a former video store magnate who built and lost an empire called Rose Video. Played with understated warmth by Eugene Levy, Johnny is the most grounded member of his spectacularly eccentric family and the one who most clearly recognizes that their fall from wealth may be an opportunity rather than merely a catastrophe.\n\nFrom the series premiere, Johnny approaches Schitt\'s Creek with the mindset of a businessman looking for his next venture. While Moira retreats into melodrama, David into sarcasm, and Alexis into denial, Johnny rolls up his sleeves and tries to rebuild. His partnership with Stevie Budd to revitalize the Rosebud Motel becomes the show\'s most satisfying professional arc — a proof of concept that hard work and genuine care can create something meaningful.\n\nJohnny\'s relationship with each family member reveals different facets of his character. He is the stabilizing force for Moira\'s chaos, the patient encourager of David\'s anxiety, and the proud witness to Alexis\'s growth. His love is expressed not through grand gestures but through consistent presence and quiet support.\n\nBy the final season, Johnny has transformed the Rosebud Motel into the foundation of a new motel brand, achieving professional success that is more fulfilling than his previous fortune because it was built with authenticity rather than scale. His journey embodies the show\'s thesis that starting over can lead somewhere better than where you began.',
    keyEpisodes: [
      { title: 'Our Cup Runneth Over', season: 1, episode: 1, description: 'Johnny and the Rose family lose their fortune and are forced to relocate to Schitt\'s Creek.' },
      { title: 'The Motel Guest', season: 2, episode: 1, description: 'Johnny begins getting involved in running the Rosebud Motel, laying the groundwork for his business comeback.' },
      { title: 'The Pitch', season: 5, episode: 3, description: 'Johnny pitches the Rosebud Motel concept to potential investors, showcasing his enduring business acumen.' },
      { title: 'Happy Ending', season: 6, episode: 14, description: 'Johnny and Moira prepare to leave Schitt\'s Creek for new opportunities, with Johnny reflecting on how the town changed their family.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Eugene_Levy_2013.jpg/440px-Eugene_Levy_2013.jpg', alt: 'Eugene Levy, who portrays Johnny Rose in Schitt\'s Creek', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/SchittsCreek', url: 'https://www.reddit.com/r/SchittsCreek/', platform: 'Reddit', description: 'Main Schitt\'s Creek subreddit' }
      ],
      youtubeChannels: [
        { name: 'Johnny Rose Best Dad Moments', url: 'https://www.youtube.com/results?search_query=johnny+rose+schitts+creek+best+moments', platform: 'YouTube', description: 'Compilations of Johnny\'s warmest and funniest moments' }
      ],
      twitterAccounts: [
        { name: '@SchittsCreek', url: 'https://twitter.com/SchittsCreek', platform: 'Twitter/X', description: 'Official Schitt\'s Creek account' }
      ],
      fanSites: [
        { name: 'Schitt\'s Creek Wiki - Johnny', url: 'https://schittscreek.fandom.com/wiki/Johnny_Rose', platform: 'Web', description: 'Johnny Rose wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 83, engagement: 85, socialActivity: 78, memeVelocity: 80, fanArtDensity: 72, fandomLongevity: 88 },
    faqs: [
      { question: 'Who plays Johnny Rose in Schitt\'s Creek?', answer: 'Eugene Levy plays Johnny Rose in Schitt\'s Creek. Levy co-created the series with his real-life son Dan Levy and is a comedy legend known for his work with SCTV, the American Pie franchise, and Christopher Guest mockumentaries like Best in Show.' },
      { question: 'How did Johnny Rose lose his money?', answer: 'Johnny Rose lost his fortune when his business manager embezzled the family\'s entire fortune. Johnny had built his wealth through Rose Video, a chain of video rental stores. The only asset the government could not seize was the town of Schitt\'s Creek, which Johnny had purchased as a joke birthday gift for David.' },
      { question: 'What is the Rosebud Motel?', answer: 'The Rosebud Motel is the motel in Schitt\'s Creek where the Rose family lives after losing their fortune. Johnny eventually partners with Stevie Budd to renovate and rebrand the motel, turning it into the foundation of a successful new motel chain.' },
      { question: 'Are Eugene Levy and Dan Levy really father and son?', answer: 'Yes, Eugene Levy and Dan Levy are father and son in real life, mirroring their on-screen relationship as Johnny and David Rose. They co-created Schitt\'s Creek together, with Dan serving as showrunner and head writer.' }
    ],
    videos: [
      { title: 'Johnny Rose\'s Journey', youtubeId: 'sPxzQo3W5Rg', description: 'A look at Johnny\'s transformation from wealthy mogul to small-town businessman and better father.' },
      { title: 'Best of Johnny and Moira', youtubeId: 'kU9V-UNmvZo', description: 'The funniest moments between Johnny and Moira Rose throughout the series.' }
    ],
    relatedCharacterSlugs: ['moira-rose', 'david-rose', 'alexis-rose', 'stevie-budd'],
    tags: ['patriarch', 'heart', 'businessman', 'grounded']
  },
  {
    slug: 'stevie-budd',
    name: 'Stevie Budd',
    showSlug: 'schitts-creek',
    showTitle: "Schitt's Creek",
    actorSlug: 'emily-hampshire',
    actorName: 'Emily Hampshire',
    seasonsActive: 'Seasons 1–6',
    characterArc: 'Stevie Budd is the sardonic, flannel-wearing clerk at the Rosebud Motel who becomes one of the Rose family\'s most important relationships — particularly David\'s closest friend. Initially a loner content with her small, quiet existence, Stevie\'s arc mirrors the Rose family\'s in reverse: while they learn to appreciate a simpler life, she learns to want more from hers.\n\nStevie\'s friendship with David is the show\'s most underrated relationship. They are kindred spirits — both guarded, both afraid of vulnerability, both hiding behind sarcasm. Their brief romantic fling in Season 1 evolves into a profound platonic bond that becomes each character\'s emotional anchor. Stevie is the person David trusts most, and David is the person who pushes Stevie to take risks.\n\nHer business partnership with Johnny Rose to revitalize the Rosebud Motel gives Stevie professional purpose she never imagined for herself. Johnny sees potential in Stevie that she cannot see, and his mentorship transforms her from a disengaged employee into a confident businesswoman.\n\nStevie\'s performance of "Maybe This Time" from Cabaret in Season 5 is one of the series\' most emotionally devastating scenes — a woman who has spent her whole life playing it safe, standing alone on a stage and letting herself be seen. It crystallizes everything the show is about: the terrifying, transformative power of allowing yourself to be vulnerable.',
    keyEpisodes: [
      { title: 'Our Cup Runneth Over', season: 1, episode: 1, description: 'Stevie is introduced as the deadpan motel clerk who becomes the Rose family\'s first real connection in Schitt\'s Creek.' },
      { title: 'Wine and Roses', season: 1, episode: 7, description: 'Stevie and David\'s friendship deepens over wine, establishing the bond that becomes central to the series.' },
      { title: 'RIP Moira Rose', season: 4, episode: 7, description: 'Stevie begins working more closely with Johnny on the motel business, discovering her entrepreneurial potential.' },
      { title: 'Life Is a Cabaret', season: 5, episode: 14, description: 'Stevie delivers a show-stopping performance of "Maybe This Time" in the town production of Cabaret.' },
      { title: 'Happy Ending', season: 6, episode: 14, description: 'Stevie takes on a leadership role in the expanding Rosebud Motel brand as the Rose family prepares for their next chapter.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Emily_Hampshire_2014.jpg/440px-Emily_Hampshire_2014.jpg', alt: 'Emily Hampshire, who portrays Stevie Budd in Schitt\'s Creek', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/SchittsCreek', url: 'https://www.reddit.com/r/SchittsCreek/', platform: 'Reddit', description: 'Main Schitt\'s Creek subreddit' }
      ],
      youtubeChannels: [
        { name: 'Stevie Budd Best Moments', url: 'https://www.youtube.com/results?search_query=stevie+budd+best+moments', platform: 'YouTube', description: 'Compilations of Stevie\'s driest and most heartfelt scenes' }
      ],
      twitterAccounts: [
        { name: '@SchittsCreek', url: 'https://twitter.com/SchittsCreek', platform: 'Twitter/X', description: 'Official Schitt\'s Creek account' }
      ],
      fanSites: [
        { name: 'Schitt\'s Creek Wiki - Stevie', url: 'https://schittscreek.fandom.com/wiki/Stevie_Budd', platform: 'Web', description: 'Stevie Budd wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 80, engagement: 82, socialActivity: 76, memeVelocity: 78, fanArtDensity: 73, fandomLongevity: 84 },
    faqs: [
      { question: 'Who plays Stevie Budd in Schitt\'s Creek?', answer: 'Emily Hampshire plays Stevie Budd in Schitt\'s Creek. Hampshire is a Canadian actress who received multiple Canadian Screen Award nominations for the role and became a fan favorite for her deadpan delivery and emotional depth.' },
      { question: 'Are David and Stevie together?', answer: 'David and Stevie have a brief romantic relationship early in Season 1, but it evolves into a deep, platonic friendship that becomes one of the show\'s most important bonds. Stevie is David\'s best friend and closest confidant throughout the series.' },
      { question: 'What is Stevie\'s "Maybe This Time" performance?', answer: 'In Season 5, Episode 14 ("Life Is a Cabaret"), Stevie performs "Maybe This Time" from the musical Cabaret in the town\'s local production. The scene is widely regarded as one of the most emotionally powerful moments in the entire series, representing Stevie\'s journey from hiding behind walls to allowing herself to be vulnerable.' },
      { question: 'Does Stevie own the Rosebud Motel?', answer: 'Stevie inherits the Rosebud Motel from her great-aunt. She partners with Johnny Rose to renovate and rebrand the motel, eventually helping expand it into a successful motel chain. By the end of the series, Stevie is a key figure in the Rosebud Motel Group business.' }
    ],
    videos: [
      { title: 'Stevie Budd - Maybe This Time', youtubeId: 'Y8_kEiYMiHY', description: 'Stevie\'s unforgettable performance of "Maybe This Time" from Cabaret.' },
      { title: 'David and Stevie - Best Friendship Moments', youtubeId: 'gJVyRgzq9qY', description: 'The greatest moments of David and Stevie\'s friendship throughout the series.' }
    ],
    relatedCharacterSlugs: ['david-rose', 'johnny-rose', 'alexis-rose', 'patrick-brewer'],
    tags: ['deadpan', 'underdog', 'growth', 'fan-favorite']
  },
  {
    slug: 'patrick-brewer',
    name: 'Patrick Brewer',
    showSlug: 'schitts-creek',
    showTitle: "Schitt's Creek",
    actorSlug: 'noah-reid',
    actorName: 'Noah Reid',
    seasonsActive: 'Seasons 3–6',
    characterArc: 'Patrick Brewer arrives in Schitt\'s Creek in Season 3 as a mild-mannered business consultant who helps David Rose file the incorporation papers for Rose Apothecary. What begins as a professional relationship quickly evolves into one of the most celebrated love stories in television history — a romance that is groundbreaking not because it is dramatic or tragic, but because it is joyful, healthy, and allowed to simply be.\n\nPatrick is the steady, dependable counterpart to David\'s anxiety and chaos. Where David catastrophizes, Patrick problem-solves. Where David doubts himself, Patrick believes in him unconditionally. Their dynamic works because it is rooted in mutual respect and genuine affection rather than manufactured conflict.\n\nPatrick\'s own journey of self-discovery is handled with remarkable sensitivity. Having previously been in a long-term relationship with a woman, Patrick comes to understand his sexuality through his connection with David. His coming-out scene with his parents in Season 5 is one of the most moving moments in the series — not because of rejection, but because of immediate, unconditional acceptance.\n\nPatrick\'s serenade of Tina Turner\'s "Simply the Best" to David at an open mic night became one of the show\'s most iconic scenes and a cultural moment that transcended the series itself. By the finale, Patrick and David\'s wedding represents everything the show stands for: that love, in all its forms, deserves to be celebrated without qualification.',
    keyEpisodes: [
      { title: 'Grad Night', season: 3, episode: 11, description: 'Patrick Brewer is introduced when he helps David with the business paperwork for Rose Apothecary.' },
      { title: 'Open Mic', season: 4, episode: 6, description: 'Patrick serenades David with "Simply the Best" at an open mic night, becoming one of the show\'s most iconic moments.' },
      { title: 'Meet the Parents', season: 5, episode: 11, description: 'Patrick comes out to his parents during a surprise birthday party, in one of the series\' most emotionally resonant scenes.' },
      { title: 'The Premiere', season: 5, episode: 13, description: 'Patrick proposes to David during a hike, surrounded by their closest friends in a touching and intimate moment.' },
      { title: 'Happy Ending', season: 6, episode: 14, description: 'Patrick and David marry in the series finale, cementing their relationship as one of television\'s most beloved love stories.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Noah_Reid_2020.jpg/440px-Noah_Reid_2020.jpg', alt: 'Noah Reid, who portrays Patrick Brewer in Schitt\'s Creek', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/SchittsCreek', url: 'https://www.reddit.com/r/SchittsCreek/', platform: 'Reddit', description: 'Main Schitt\'s Creek subreddit' }
      ],
      youtubeChannels: [
        { name: 'Simply the Best - Patrick and David', url: 'https://www.youtube.com/results?search_query=patrick+brewer+simply+the+best', platform: 'YouTube', description: 'The iconic "Simply the Best" scene and fan reactions' }
      ],
      twitterAccounts: [
        { name: '@SchittsCreek', url: 'https://twitter.com/SchittsCreek', platform: 'Twitter/X', description: 'Official Schitt\'s Creek account' }
      ],
      fanSites: [
        { name: 'Schitt\'s Creek Wiki - Patrick', url: 'https://schittscreek.fandom.com/wiki/Patrick_Brewer', platform: 'Web', description: 'Patrick Brewer wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 82, engagement: 85, socialActivity: 80, memeVelocity: 78, fanArtDensity: 76, fandomLongevity: 85 },
    faqs: [
      { question: 'Who plays Patrick Brewer in Schitt\'s Creek?', answer: 'Noah Reid plays Patrick Brewer in Schitt\'s Creek. Reid is a Canadian actor and musician whose real singing ability was incorporated into the character, most notably in the beloved "Simply the Best" scene.' },
      { question: 'When does Patrick first appear in Schitt\'s Creek?', answer: 'Patrick Brewer first appears in Season 3, Episode 11 ("Grad Night") when he assists David with filing business incorporation papers for Rose Apothecary. He becomes a recurring character and eventually a series regular.' },
      { question: 'What song does Patrick sing to David?', answer: 'Patrick sings Tina Turner\'s "Simply the Best" to David at an open mic night in Season 4, Episode 6 ("Open Mic"). The acoustic rendition, performed by Noah Reid himself, became one of the show\'s most iconic moments and Reid subsequently released his own recording of the song.' },
      { question: 'Is Patrick\'s coming-out scene based on a true story?', answer: 'While not based on a specific true story, Dan Levy has spoken about wanting to depict a coming-out experience that focused on acceptance rather than rejection. Patrick\'s parents immediately embrace him when he comes out, and the scene has been widely praised for offering a positive representation that many LGBTQ+ viewers found deeply meaningful.' }
    ],
    videos: [
      { title: 'Patrick Sings Simply the Best to David', youtubeId: 'MViYGkmE_ek', description: 'The iconic open mic scene where Patrick serenades David with "Simply the Best."' },
      { title: 'Patrick Comes Out to His Parents', youtubeId: '5XOak6Cp-cE', description: 'The emotionally powerful scene where Patrick comes out to his parents.' },
      { title: 'David and Patrick - Wedding', youtubeId: 'OuS3ypJFmUo', description: 'David and Patrick\'s beautiful wedding ceremony in the series finale.' }
    ],
    relatedCharacterSlugs: ['david-rose', 'stevie-budd', 'johnny-rose', 'alexis-rose', 'moira-rose'],
    tags: ['LGBTQ+', 'romantic', 'supportive', 'fan-favorite']
  }
];

module.exports = { yellowstoneCharacters, schittsCreekCharacters };
