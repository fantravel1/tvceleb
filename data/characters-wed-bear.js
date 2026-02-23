// Wednesday Characters
const wednesdayCharacters = [
  {
    slug: 'wednesday-addams',
    name: 'Wednesday Addams',
    showSlug: 'wednesday',
    showTitle: 'Wednesday',
    actorSlug: 'jenna-ortega',
    actorName: 'Jenna Ortega',
    seasonsActive: 'Seasons 1–2',
    characterArc: 'Wednesday Addams arrives at Nevermore Academy, a school for supernatural outcasts, after being expelled from multiple normal schools. Cold, brilliant, and unapologetically morbid, she initially views Nevermore as just another institution to endure. But when a series of murders rock the school and the surrounding town of Jericho, Wednesday\'s detective instincts take over, pulling her into a centuries-old mystery connected to her own family.\n\nAs she investigates, Wednesday develops psychic visions that reveal fragments of the past, linking the current killings to a monster called the Hyde and a conspiracy that dates back to the founding of Jericho. Her refusal to play by anyone\'s rules puts her at odds with Principal Weems, local law enforcement, and even her own mother Morticia — yet it is precisely her obstinance that allows her to see what others miss.\n\nDespite her insistence that she is incapable of emotional attachment, Wednesday forms grudging bonds with her werewolf roommate Enid Sinclair, the complicated Tyler Galpin, and the competitive siren Bianca Barclay. These relationships crack her carefully constructed armor, revealing that Wednesday\'s darkness is not the absence of feeling but a different way of expressing it.\n\nBy the season finale Wednesday has unmasked the Hyde, confronted the mastermind behind the killings, and saved Nevermore — though she would never admit to caring. Her journey is a gothic coming-of-age story about a young woman learning that strength does not require solitude, even if she still prefers it.',
    keyEpisodes: [
      { title: 'Wednesday\'s Child Is Full of Woe', season: 1, episode: 1, description: 'Wednesday arrives at Nevermore Academy after releasing piranhas into her previous school\'s pool to avenge her brother Pugsley.' },
      { title: 'Woe Is the Loneliest Number', season: 1, episode: 2, description: 'Wednesday experiences her first psychic vision and begins investigating the monster terrorizing Jericho.' },
      { title: 'Friend or Woe', season: 1, episode: 5, description: 'Wednesday and Enid work together during Outreach Day, deepening their unlikely friendship despite Wednesday\'s resistance.' },
      { title: 'A Murder of Woes', season: 1, episode: 8, description: 'Wednesday confronts the Hyde and the mastermind behind the attacks on Nevermore in a climactic showdown at the school.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Jenna_Ortega_by_Gage_Skidmore.jpg/440px-Jenna_Ortega_by_Gage_Skidmore.jpg', alt: 'Jenna Ortega, who portrays Wednesday Addams in the Netflix series Wednesday', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/WednesdayTVSeries', url: 'https://www.reddit.com/r/WednesdayTVSeries/', platform: 'Reddit', description: 'Main Wednesday TV series subreddit with active episode discussions and fan theories' },
        { name: 'r/Wednesday', url: 'https://www.reddit.com/r/Wednesday/', platform: 'Reddit', description: 'General Wednesday Addams community covering the Netflix series and franchise' }
      ],
      youtubeChannels: [
        { name: 'Wednesday Addams Dance Scene Analysis', url: 'https://www.youtube.com/results?search_query=wednesday+addams+dance+scene+analysis', platform: 'YouTube', description: 'Breakdowns of Jenna Ortega\'s iconic dance choreography' }
      ],
      twitterAccounts: [
        { name: '@waborita', url: 'https://twitter.com/waborita', platform: 'Twitter/X', description: 'Jenna Ortega fan account with Wednesday content' }
      ],
      fanSites: [
        { name: 'Wednesday Wiki', url: 'https://wednesday.fandom.com/', platform: 'Web', description: 'Comprehensive Wednesday series encyclopedia on Fandom' }
      ],
      instagramAccounts: [
        { name: '@wednesdaynetflix', url: 'https://www.instagram.com/wednesdaynetflix/', platform: 'Instagram', description: 'Official Wednesday Netflix Instagram page' }
      ],
      tiktokCreators: [
        { name: 'Wednesday Edits', url: 'https://www.tiktok.com/tag/wednesdayaddams', platform: 'TikTok', description: 'Fan edits and dance recreations on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 93, engagement: 95, socialActivity: 96, memeVelocity: 97, fanArtDensity: 90, fandomLongevity: 78 },
    faqs: [
      { question: 'Who plays Wednesday Addams in the Netflix series?', answer: 'Jenna Ortega plays Wednesday Addams in the Netflix series Wednesday. Ortega choreographed the now-viral dance scene herself, drawing inspiration from goth subculture and 1980s dance moves.' },
      { question: 'What kind of school is Nevermore Academy?', answer: 'Nevermore Academy is a boarding school for "outcasts" — individuals with supernatural abilities including werewolves, sirens, psychics, and other gifted students. The school is located near the town of Jericho, Vermont.' },
      { question: 'Does Wednesday Addams have powers?', answer: 'Yes, Wednesday possesses psychic abilities. She experiences visions triggered by touch that reveal events from the past and future. These visions are central to her investigation of the murders at Nevermore.' },
      { question: 'What is the Wednesday Addams dance scene?', answer: 'In Season 1, Episode 4 ("Woe What a Night"), Wednesday performs a dance at the Rave\'N school dance. Jenna Ortega choreographed it herself, and the scene went massively viral on TikTok and social media, becoming one of 2022\'s biggest cultural moments.' },
      { question: 'Will there be a Season 2 of Wednesday?', answer: 'Yes, Netflix renewed Wednesday for a second season. The show was one of Netflix\'s most-watched English-language series, accumulating over 1 billion viewing hours in its first weeks.' }
    ],
    videos: [
      { title: 'Wednesday Addams - Rave\'N Dance Scene', youtubeId: 'oPAMnJlPDSM', description: 'The iconic dance scene that went viral worldwide.' },
      { title: 'Wednesday - Official Trailer', youtubeId: 'Di310WS8zLk', description: 'The official Netflix trailer for Wednesday Season 1.' }
    ],
    relatedCharacterSlugs: ['enid-sinclair', 'tyler-galpin', 'bianca-barclay', 'thing'],
    tags: ['protagonist', 'iconic', 'gothic', 'detective', 'psychic']
  },
  {
    slug: 'enid-sinclair',
    name: 'Enid Sinclair',
    showSlug: 'wednesday',
    showTitle: 'Wednesday',
    actorSlug: 'emma-myers',
    actorName: 'Emma Myers',
    seasonsActive: 'Seasons 1–2',
    characterArc: 'Enid Sinclair is Wednesday Addams\' polar opposite: bubbly, colorful, emotionally expressive, and desperate for connection. As a werewolf who has never "wolfed out," Enid carries the shame of being considered a disappointment by her pack and her overbearing mother. Her assignment as Wednesday\'s roommate at Nevermore Academy initially seems like a cosmic joke, pairing sunshine with shadow.\n\nDespite Wednesday\'s open hostility and attempts to drive her away, Enid persists with a stubborn warmth that gradually chips away at Wednesday\'s defenses. Enid runs the school\'s most popular blog, maintains a hyper-organized half of their dorm room divided by tape, and navigates the social hierarchies of Nevermore with an earnestness that masks real insecurity about her identity.\n\nEnid\'s arc is about self-acceptance. Pressured by her mother to undergo conversion therapy-like treatment to trigger her wolf transformation, Enid must choose between conforming to her family\'s expectations and embracing who she is on her own timeline. Her friendship with Wednesday — someone who unapologetically refuses to change for anyone — becomes the catalyst for Enid\'s own self-discovery.\n\nIn the season finale Enid finally transforms into her wolf form to protect Wednesday during the climactic battle, proving that her power was never absent — it was simply waiting until she fought for something she truly cared about.',
    keyEpisodes: [
      { title: 'Wednesday\'s Child Is Full of Woe', season: 1, episode: 1, description: 'Enid meets Wednesday as her new roommate, establishing their hilariously mismatched dynamic with her colorful half of the room.' },
      { title: 'Friend or Woe', season: 1, episode: 5, description: 'Enid and Wednesday are paired for Outreach Day, leading to a genuine bonding experience despite their differences.' },
      { title: 'Quid Pro Woe', season: 1, episode: 6, description: 'Enid confronts her mother about the pressure to undergo transformation therapy, asserting her right to change on her own terms.' },
      { title: 'A Murder of Woes', season: 1, episode: 8, description: 'Enid fully transforms into her wolf form for the first time to save Wednesday during the final battle.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Emma_Myers_2024_%28cropped%29.jpg/440px-Emma_Myers_2024_%28cropped%29.jpg', alt: 'Emma Myers, who portrays Enid Sinclair in Wednesday', attribution: 'Photo via Wikimedia Commons, CC BY-SA 4.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/WednesdayTVSeries', url: 'https://www.reddit.com/r/WednesdayTVSeries/', platform: 'Reddit', description: 'Main Wednesday subreddit with frequent Enid appreciation threads' }
      ],
      youtubeChannels: [
        { name: 'Enid & Wednesday Best Moments', url: 'https://www.youtube.com/results?search_query=enid+wednesday+best+moments', platform: 'YouTube', description: 'Fan compilations of Enid and Wednesday scenes' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Wednesday Wiki - Enid', url: 'https://wednesday.fandom.com/wiki/Enid_Sinclair', platform: 'Web', description: 'Enid Sinclair wiki page' }
      ],
      instagramAccounts: [
        { name: '@emmamyers', url: 'https://www.instagram.com/emmamyers/', platform: 'Instagram', description: 'Emma Myers\' official Instagram' }
      ],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 85, engagement: 88, socialActivity: 90, memeVelocity: 82, fanArtDensity: 92, fandomLongevity: 72 },
    faqs: [
      { question: 'Who plays Enid Sinclair in Wednesday?', answer: 'Emma Myers plays Enid Sinclair in Wednesday. The role was Myers\' breakout performance, earning her significant attention and a rapidly growing fan following.' },
      { question: 'What kind of outcast is Enid Sinclair?', answer: 'Enid is a werewolf, but she has not yet fully transformed or "wolfed out" at the start of the series. This inability is a source of shame and pressure from her family, particularly her mother.' },
      { question: 'Does Enid ever wolf out in Wednesday?', answer: 'Yes, Enid finally achieves her full wolf transformation in the Season 1 finale when she fights to protect Wednesday during the climactic battle at Nevermore Academy.' },
      { question: 'Are Wednesday and Enid friends?', answer: 'Yes, despite their dramatically different personalities, Wednesday and Enid develop a genuine friendship throughout Season 1. Their bond is central to the show, with Wednesday eventually admitting she considers Enid a true friend.' }
    ],
    videos: [
      { title: 'Enid Sinclair - Wolf Transformation Scene', youtubeId: 'lH3vMhBMSC4', description: 'Enid\'s wolf transformation in the Season 1 finale.' }
    ],
    relatedCharacterSlugs: ['wednesday-addams', 'tyler-galpin', 'bianca-barclay', 'thing'],
    tags: ['fan-favorite', 'werewolf', 'roommate', 'comic-relief']
  },
  {
    slug: 'tyler-galpin',
    name: 'Tyler Galpin',
    showSlug: 'wednesday',
    showTitle: 'Wednesday',
    actorSlug: 'hunter-doohan',
    actorName: 'Hunter Doohan',
    seasonsActive: 'Seasons 1–2',
    characterArc: 'Tyler Galpin presents himself as a normal, kind-hearted barista working at the Weathervane coffee shop in Jericho — the son of the local sheriff and seemingly the most grounded, genuine person in Wednesday\'s orbit. His warmth and patience with Wednesday\'s abrasive personality make him an appealing love interest, offering her a connection to the "normie" world outside Nevermore Academy.\n\nAs Wednesday\'s investigation into the Jericho murders deepens, Tyler becomes her confidant and ally, helping her navigate the town and providing emotional support she would never admit to needing. Their developing romance represents Wednesday\'s vulnerability, the rare moments when she allows someone past her defenses.\n\nThe revelation that Tyler is the Hyde — the very monster Wednesday has been hunting — is the show\'s most devastating twist. Manipulated and controlled by the season\'s true mastermind, Tyler has been committing the murders while maintaining his charming facade. His transformation from love interest to monster recontextualizes every interaction, forcing both Wednesday and the audience to question what was real.\n\nTyler\'s story raises uncomfortable questions about nature versus nurture, manipulation versus free will, and whether the darkness inside someone can be separated from who they choose to be.',
    keyEpisodes: [
      { title: 'Woe Is the Loneliest Number', season: 1, episode: 2, description: 'Tyler meets Wednesday at the Weathervane and begins their flirtatious dynamic as the friendly local who intrigues her.' },
      { title: 'Woe What a Night', season: 1, episode: 4, description: 'Tyler takes Wednesday to the Rave\'N dance as her date, marking a turning point in their relationship.' },
      { title: 'If You Don\'t Woe Me by Now', season: 1, episode: 7, description: 'Wednesday discovers that Tyler is the Hyde after experiencing a vision during their kiss, shattering her trust.' },
      { title: 'A Murder of Woes', season: 1, episode: 8, description: 'Tyler\'s full role as the Hyde is exposed, and he is taken into custody, though a final scene suggests his transformation is far from over.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hunter_Doohan_2023.jpg/440px-Hunter_Doohan_2023.jpg', alt: 'Hunter Doohan, who portrays Tyler Galpin in Wednesday', attribution: 'Photo via Wikimedia Commons, CC BY-SA 4.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/WednesdayTVSeries', url: 'https://www.reddit.com/r/WednesdayTVSeries/', platform: 'Reddit', description: 'Main Wednesday subreddit with Tyler twist discussions' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'Wednesday Wiki - Tyler', url: 'https://wednesday.fandom.com/wiki/Tyler_Galpin', platform: 'Web', description: 'Tyler Galpin wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 74, engagement: 78, socialActivity: 72, memeVelocity: 80, fanArtDensity: 68, fandomLongevity: 62 },
    faqs: [
      { question: 'Who plays Tyler Galpin in Wednesday?', answer: 'Hunter Doohan plays Tyler Galpin in the Netflix series Wednesday. Doohan was previously known for his role in the legal drama Your Honor alongside Bryan Cranston.' },
      { question: 'Is Tyler the Hyde in Wednesday?', answer: 'Yes, Tyler Galpin is revealed to be the Hyde — a shapeshifting monster responsible for the murders around Jericho. He was being controlled by the season\'s true mastermind, Laurel Gates.' },
      { question: 'What is a Hyde in Wednesday?', answer: 'In the world of Wednesday, a Hyde is a type of outcast that transforms into a monstrous creature. Hydes are typically dormant until "unlocked" by a chemical compound and controlled by a master who directs their actions.' },
      { question: 'Does Wednesday like Tyler?', answer: 'Wednesday develops genuine romantic feelings for Tyler during Season 1, which makes the revelation that he is the Hyde especially devastating for her character. Their kiss is what triggers her vision revealing his true nature.' }
    ],
    videos: [],
    relatedCharacterSlugs: ['wednesday-addams', 'enid-sinclair', 'bianca-barclay'],
    tags: ['love-interest', 'twist-villain', 'hyde', 'tragic']
  },
  {
    slug: 'bianca-barclay',
    name: 'Bianca Barclay',
    showSlug: 'wednesday',
    showTitle: 'Wednesday',
    actorSlug: 'joy-sunday',
    actorName: 'Joy Sunday',
    seasonsActive: 'Seasons 1–2',
    characterArc: 'Bianca Barclay is Nevermore Academy\'s reigning queen — a siren with the ability to use her voice to manipulate and persuade others. Beautiful, talented, and fiercely competitive, she initially serves as Wednesday\'s primary social antagonist, viewing the new student as a threat to her established dominance at the school.\n\nBeneath Bianca\'s confident exterior lies deep insecurity rooted in her siren nature. She can never be certain whether people genuinely like her or are simply under the influence of her powers. Her relationship with Xavier Thorpe is haunted by this doubt, and her rivalry with Wednesday is fueled partly by envy of someone who is authentically, unapologetically themselves without any supernatural persuasion.\n\nBianca\'s backstory reveals that her mother leads a siren-based cult called the Morning Song, and Bianca fled that world to attend Nevermore. The threat of being pulled back into the cult adds genuine stakes to her character, transforming her from a superficial mean-girl archetype into someone fighting for autonomy over her own identity.\n\nAs the season progresses, Bianca and Wednesday develop a grudging mutual respect. When Nevermore is threatened, Bianca stands alongside Wednesday rather than against her, proving that her strength extends beyond her siren abilities.',
    keyEpisodes: [
      { title: 'Wednesday\'s Child Is Full of Woe', season: 1, episode: 1, description: 'Bianca is introduced as Nevermore\'s top student and immediately clashes with Wednesday over their competing personalities.' },
      { title: 'Woe What a Night', season: 1, episode: 4, description: 'Bianca and Wednesday compete in a fencing match and later cross paths at the Rave\'N dance, deepening their rivalry.' },
      { title: 'Quid Pro Woe', season: 1, episode: 6, description: 'Bianca\'s backstory with the Morning Song cult is revealed, adding depth to her character and her fear of losing control.' },
      { title: 'A Murder of Woes', season: 1, episode: 8, description: 'Bianca fights alongside Wednesday and the other Nevermore students to defend the school in the season finale.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Joy_Sunday_2023.jpg/440px-Joy_Sunday_2023.jpg', alt: 'Joy Sunday, who portrays Bianca Barclay in Wednesday', attribution: 'Photo via Wikimedia Commons, CC BY-SA 4.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/WednesdayTVSeries', url: 'https://www.reddit.com/r/WednesdayTVSeries/', platform: 'Reddit', description: 'Main Wednesday subreddit with character discussions' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'Wednesday Wiki - Bianca', url: 'https://wednesday.fandom.com/wiki/Bianca_Barclay', platform: 'Web', description: 'Bianca Barclay wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 68, engagement: 72, socialActivity: 65, memeVelocity: 60, fanArtDensity: 75, fandomLongevity: 58 },
    faqs: [
      { question: 'Who plays Bianca Barclay in Wednesday?', answer: 'Joy Sunday plays Bianca Barclay in the Netflix series Wednesday. Sunday is an actress and singer known for her roles in independent films before landing the breakout role at Nevermore Academy.' },
      { question: 'What kind of outcast is Bianca Barclay?', answer: 'Bianca is a siren, meaning she has the supernatural ability to use her voice to manipulate and persuade others. This power is both her greatest strength and the source of her deepest insecurity.' },
      { question: 'What is the Morning Song in Wednesday?', answer: 'The Morning Song is a cult led by Bianca\'s mother, Gabrielle. It operates as a siren-based organization that exploits people using siren powers. Bianca escaped the cult to attend Nevermore Academy.' },
      { question: 'Are Bianca and Wednesday enemies?', answer: 'Bianca and Wednesday start as rivals at Nevermore Academy, but their relationship evolves over the season. By the finale they fight on the same side to defend the school, developing a grudging mutual respect.' }
    ],
    videos: [],
    relatedCharacterSlugs: ['wednesday-addams', 'enid-sinclair', 'tyler-galpin'],
    tags: ['rival', 'siren', 'complex', 'queen-bee']
  },
  {
    slug: 'thing',
    name: 'Thing',
    showSlug: 'wednesday',
    showTitle: 'Wednesday',
    actorSlug: 'victor-dorobantu',
    actorName: 'Victor Dorobantu',
    seasonsActive: 'Seasons 1–2',
    characterArc: 'Thing is a disembodied hand and one of the most beloved members of the Addams family, reimagined in the Netflix series as Wednesday\'s loyal companion and spy at Nevermore Academy. Sent by Gomez and Morticia Addams to keep an eye on their daughter, Thing serves as Wednesday\'s reluctant but devoted assistant, communicating through taps, gestures, and an expressiveness that defies the fact that he is literally just a hand.\n\nThing\'s role in the series extends far beyond comic relief. He serves as Wednesday\'s primary confidant, her connection to her family, and a crucial investigative partner. Thing breaks into offices, steals evidence, conducts surveillance, and delivers messages — all while maintaining a personality that manages to be charming, sarcastic, and emotionally resonant without a single spoken word.\n\nWhen Thing is stabbed and nearly killed while gathering evidence for Wednesday, the moment is genuinely affecting. Wednesday\'s desperate efforts to save him reveal the depth of attachment she hides from everyone else, and Thing\'s recovery becomes one of the series\' most emotionally satisfying moments.\n\nThe technical achievement of Thing cannot be overstated. Performed by Romanian magician Victor Dorobantu — whose body was digitally removed in post-production — Thing is a triumph of practical effects and digital artistry that brings a severed hand to vivid, lovable life.',
    keyEpisodes: [
      { title: 'Wednesday\'s Child Is Full of Woe', season: 1, episode: 1, description: 'Thing arrives at Nevermore as a spy for Gomez and Morticia, establishing his role as Wednesday\'s reluctant guardian.' },
      { title: 'Woe Is the Loneliest Number', season: 1, episode: 2, description: 'Thing assists Wednesday in her first investigative mission, proving his value as a partner in crime-solving.' },
      { title: 'If You Don\'t Woe Me by Now', season: 1, episode: 7, description: 'Thing is stabbed while gathering evidence, nearly dying. Wednesday frantically works to save him, revealing her emotional attachment.' },
      { title: 'A Murder of Woes', season: 1, episode: 8, description: 'A recovered Thing plays a crucial role in the finale, helping Wednesday and her allies defend Nevermore.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Victor_Dorobantu_2023.jpg/440px-Victor_Dorobantu_2023.jpg', alt: 'Victor Dorobantu, who performs Thing in Wednesday', attribution: 'Photo via Wikimedia Commons, CC BY-SA 4.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/WednesdayTVSeries', url: 'https://www.reddit.com/r/WednesdayTVSeries/', platform: 'Reddit', description: 'Main Wednesday subreddit with Thing appreciation posts' }
      ],
      youtubeChannels: [
        { name: 'How Thing Was Made - VFX Breakdown', url: 'https://www.youtube.com/results?search_query=wednesday+thing+vfx+behind+scenes', platform: 'YouTube', description: 'Behind-the-scenes breakdowns of how Thing was performed and digitally created' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Wednesday Wiki - Thing', url: 'https://wednesday.fandom.com/wiki/Thing', platform: 'Web', description: 'Thing wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Thing Cosplay', url: 'https://www.tiktok.com/tag/thingwednesday', platform: 'TikTok', description: 'Fan recreations and cosplay of Thing on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 79, engagement: 82, socialActivity: 80, memeVelocity: 88, fanArtDensity: 78, fandomLongevity: 65 },
    faqs: [
      { question: 'Who performs Thing in Wednesday?', answer: 'Victor Dorobantu, a Romanian magician and illusionist, physically performs Thing in the Wednesday series. Dorobantu wore a blue suit on set that was digitally removed in post-production, leaving only his expressive hand visible on screen.' },
      { question: 'Is Thing a real hand or CGI?', answer: 'Thing is performed by a real person — Victor Dorobantu. His body was covered in a blue suit and digitally erased in post-production. The hand movements and expressions are entirely practical, with VFX used only to remove the performer\'s body.' },
      { question: 'What is Thing in The Addams Family?', answer: 'Thing is a disembodied hand who has been a member of the Addams Family since the original 1960s television series. In different adaptations, Thing has been portrayed as living in a box, roaming freely, or serving various family members. In Wednesday, Thing is specifically assigned to watch over Wednesday at Nevermore.' },
      { question: 'Does Thing die in Wednesday?', answer: 'Thing is severely injured when stabbed in Season 1, Episode 7, but he survives. Wednesday performs emergency aid to save him, and Thing recovers in time to help during the season finale.' },
      { question: 'How does Thing communicate in Wednesday?', answer: 'Thing communicates through tapping, sign language, gestures, and expressive movements. Despite having no face or voice, Thing conveys a full range of emotions and personality through Victor Dorobantu\'s skilled hand acting.' }
    ],
    videos: [
      { title: 'How Thing Was Created - Behind the Scenes', youtubeId: 'bgkMgOmH4cE', description: 'Behind-the-scenes look at how Thing was brought to life with practical effects and VFX.' }
    ],
    relatedCharacterSlugs: ['wednesday-addams', 'enid-sinclair', 'tyler-galpin', 'bianca-barclay'],
    tags: ['fan-favorite', 'iconic', 'comic-relief', 'loyal-companion']
  }
];

// The Bear Characters
const bearCharacters = [
  {
    slug: 'carmy-berzatto',
    name: 'Carmen "Carmy" Berzatto',
    showSlug: 'the-bear',
    showTitle: 'The Bear',
    actorSlug: 'jeremy-allen-white',
    actorName: 'Jeremy Allen White',
    seasonsActive: 'Seasons 1–3',
    characterArc: 'Carmen "Carmy" Berzatto returns to Chicago after his brother Michael\'s suicide to take over the family\'s failing Italian beef sandwich shop, The Original Beef of Chicagoland. A classically trained chef who worked at the world\'s best fine dining restaurants — including a stint at a fictional version of Copenhagen\'s top restaurants — Carmy trades Michelin stars for a chaotic, crumbling kitchen staffed by his brother\'s loyal but resistant crew.\n\nCarmy\'s journey is defined by the tension between excellence and self-destruction. He possesses extraordinary culinary talent and an obsessive drive for perfection, but these qualities are inseparable from his trauma — an abusive mentor, a family scarred by addiction and dysfunction, and the unresolved grief of Michael\'s death. He pushes himself and everyone around him to impossible standards, unable to separate the pursuit of greatness from the punishment he believes he deserves.\n\nAs Carmy transforms The Beef into a fine dining restaurant called The Bear, his personal relationships fracture under the pressure. His romance with Claire falls apart because he cannot allow himself happiness. His partnership with Sydney strains as his controlling nature threatens to replicate the toxic mentorship he endured. His relationship with his cousin Richie oscillates between brotherly love and bitter resentment.\n\nCarmy\'s story is an unflinching portrait of how trauma cycles through generations and industries. He is simultaneously the most talented person in every room and the least equipped to handle the human connections that give talent meaning.',
    keyEpisodes: [
      { title: 'System', season: 1, episode: 1, description: 'Carmy arrives at The Beef and attempts to implement fine dining systems in a chaotic sandwich shop, immediately clashing with the existing crew.' },
      { title: 'Review', season: 1, episode: 7, description: 'A real-time episode depicting the most disastrous dinner service at The Beef, culminating in Carmy discovering Michael had hidden money inside the tomato cans.' },
      { title: 'Fishes', season: 2, episode: 6, description: 'A devastating Christmas flashback revealing the Berzatto family dysfunction, featuring an all-star guest cast and explaining the roots of Carmy\'s trauma.' },
      { title: 'Forks', season: 2, episode: 7, description: 'While focused on Richie, this episode reveals what Carmy\'s fine dining world looks like and the standards that shaped his obsession with excellence.' },
      { title: 'Forever', season: 3, episode: 10, description: 'The Season 3 finale confronts Carmy with the consequences of his relentless drive as relationships and the restaurant reach a breaking point.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Jeremy_Allen_White_by_Gage_Skidmore.jpg/440px-Jeremy_Allen_White_by_Gage_Skidmore.jpg', alt: 'Jeremy Allen White, who portrays Carmen "Carmy" Berzatto in The Bear', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/TheBear', url: 'https://www.reddit.com/r/TheBear/', platform: 'Reddit', description: 'Main The Bear subreddit with episode discussions, fan theories, and culinary analysis' },
        { name: 'r/FXNetworks', url: 'https://www.reddit.com/r/FXNetworks/', platform: 'Reddit', description: 'FX Networks community featuring The Bear discussions' }
      ],
      youtubeChannels: [
        { name: 'The Bear - Kitchen Realism Analysis', url: 'https://www.youtube.com/results?search_query=the+bear+kitchen+realism+chef+analysis', platform: 'YouTube', description: 'Professional chefs react to and analyze The Bear\'s kitchen accuracy' }
      ],
      twitterAccounts: [
        { name: '@TheBearFX', url: 'https://twitter.com/TheBearFX', platform: 'Twitter/X', description: 'Official The Bear FX Twitter account' }
      ],
      fanSites: [
        { name: 'The Bear Wiki', url: 'https://the-bear.fandom.com/', platform: 'Web', description: 'Comprehensive The Bear encyclopedia on Fandom' }
      ],
      instagramAccounts: [
        { name: '@thebearfx', url: 'https://www.instagram.com/thebearfx/', platform: 'Instagram', description: 'Official The Bear FX Instagram page' }
      ],
      tiktokCreators: [
        { name: 'The Bear Recipes', url: 'https://www.tiktok.com/tag/thebearfx', platform: 'TikTok', description: 'Fan recreations of dishes from The Bear' }
      ]
    },
    fanHeatIndex: { overall: 87, engagement: 90, socialActivity: 88, memeVelocity: 82, fanArtDensity: 78, fandomLongevity: 85 },
    faqs: [
      { question: 'Who plays Carmy in The Bear?', answer: 'Jeremy Allen White plays Carmen "Carmy" Berzatto in The Bear. White won the Golden Globe and Screen Actors Guild Award for Outstanding Lead Actor for the role, and was nominated for multiple Emmy Awards.' },
      { question: 'What is Carmy\'s background in The Bear?', answer: 'Carmy is a classically trained fine dining chef who worked at some of the world\'s best restaurants before returning to Chicago to take over his deceased brother Michael\'s Italian beef sandwich shop, The Original Beef of Chicagoland.' },
      { question: 'Why did Carmy come back to Chicago?', answer: 'Carmy returned to Chicago after his older brother Michael died by suicide, leaving him The Original Beef of Chicagoland. Carmy gave up his prestigious fine dining career to honor his brother\'s legacy and try to save the struggling restaurant.' },
      { question: 'Does Carmy have PTSD in The Bear?', answer: 'While not explicitly diagnosed, Carmy displays symptoms consistent with PTSD and anxiety, stemming from an abusive culinary mentor, family dysfunction, and his brother\'s death. His panic attacks, emotional unavailability, and compulsive perfectionism are central to his character arc.' },
      { question: 'What does "Yes, Chef" mean in The Bear?', answer: '"Yes, Chef" is the standard response in professional kitchens to acknowledge a head chef\'s instructions. In The Bear, it represents the rigid hierarchy of fine dining culture and becomes a symbol of both respect and the oppressive power dynamics Carmy experienced and sometimes replicates.' }
    ],
    videos: [
      { title: 'The Bear - Official Season 1 Trailer', youtubeId: 'y-cqqAJIXhs', description: 'The official FX trailer for The Bear Season 1.' },
      { title: 'Carmy\'s Breakdown - Review Episode', youtubeId: 'JY-cGSJqOfc', description: 'The chaotic kitchen scene from the acclaimed "Review" episode.' }
    ],
    relatedCharacterSlugs: ['sydney-adamu', 'marcus-brooks', 'richie-jerimovich', 'tina-marrero'],
    tags: ['protagonist', 'chef', 'traumatized', 'perfectionist']
  },
  {
    slug: 'sydney-adamu',
    name: 'Sydney Adamu',
    showSlug: 'the-bear',
    showTitle: 'The Bear',
    actorSlug: 'ayo-edebiri',
    actorName: 'Ayo Edebiri',
    seasonsActive: 'Seasons 1–3',
    characterArc: 'Sydney Adamu is a young, ambitious culinary school graduate who joins The Original Beef as Carmy\'s sous chef, bringing formal training, creative vision, and a burning desire to prove herself in an industry that has not always made room for her. She is Carmy\'s most natural collaborator — someone who shares his ambition and talent but has not yet been broken by the industry\'s cruelty.\n\nSydney\'s arc traces the tension between her creative genius and the professional realities of restaurant life. She develops innovative dishes that become the foundation of The Bear\'s new menu, but struggles with the pressure, the interpersonal conflicts, and the question of whether partnering with the volatile Carmy will elevate her career or destroy it. A pivotal early moment sees her accidentally stab Richie during a chaotic service, crystallizing the dangerous intensity of the kitchen environment.\n\nAs The Beef transforms into The Bear, Sydney faces her biggest test: stepping into the role of co-leader while managing Carmy\'s increasingly erratic behavior. She must advocate for her own vision while navigating the loyalty she feels toward Carmy and the crew, a dynamic complicated by the power imbalance inherent in their partnership.\n\nSydney represents the next generation of chefs — brilliant, diverse, and unwilling to accept that greatness requires suffering. Her journey asks whether it is possible to pursue excellence without replicating the toxic systems that have defined professional kitchens for generations.',
    keyEpisodes: [
      { title: 'System', season: 1, episode: 1, description: 'Sydney arrives at The Beef as the new sous chef, immediately demonstrating her skill and ambition in a hostile kitchen.' },
      { title: 'Brigade', season: 1, episode: 5, description: 'Sydney\'s attempt to implement a new menu during service leads to chaos, culminating in her accidentally stabbing Richie with a kitchen fork.' },
      { title: 'Review', season: 1, episode: 7, description: 'Sydney holds the kitchen together during the catastrophic service, proving her leadership under extreme pressure.' },
      { title: 'Honeydew', season: 2, episode: 5, description: 'Sydney-focused episode exploring her relationship with her father and the personal sacrifices she makes for her culinary career.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Ayo_Edebiri_at_PaleyFest_2023_%28cropped%29.jpg/440px-Ayo_Edebiri_at_PaleyFest_2023_%28cropped%29.jpg', alt: 'Ayo Edebiri, who portrays Sydney Adamu in The Bear', attribution: 'Photo via Wikimedia Commons, CC BY-SA 4.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/TheBear', url: 'https://www.reddit.com/r/TheBear/', platform: 'Reddit', description: 'Main The Bear subreddit with Sydney appreciation threads and character analysis' }
      ],
      youtubeChannels: [
        { name: 'Sydney Adamu Character Analysis', url: 'https://www.youtube.com/results?search_query=sydney+adamu+the+bear+character+analysis', platform: 'YouTube', description: 'Video essays on Sydney\'s character arc and culinary journey' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'The Bear Wiki - Sydney', url: 'https://the-bear.fandom.com/wiki/Sydney_Adamu', platform: 'Web', description: 'Sydney Adamu wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 84, engagement: 88, socialActivity: 86, memeVelocity: 75, fanArtDensity: 82, fandomLongevity: 80 },
    faqs: [
      { question: 'Who plays Sydney in The Bear?', answer: 'Ayo Edebiri plays Sydney Adamu in The Bear. Edebiri is also known for her voice role as Missy in the animated series Big Mouth and her comedic writing work. Her performance in The Bear earned her an Emmy Award for Outstanding Supporting Actress in a Comedy Series.' },
      { question: 'What is Sydney\'s role at The Bear?', answer: 'Sydney starts as the sous chef at The Original Beef of Chicagoland and becomes Carmy\'s partner in transforming the restaurant into the fine dining establishment called The Bear. She serves as co-leader and the creative force behind much of the new menu.' },
      { question: 'Does Sydney own part of The Bear?', answer: 'Sydney\'s ownership stake in The Bear is a significant plot point across the series. The question of whether Carmy will offer her a formal partnership — and whether she would accept it given his behavior — drives much of the interpersonal tension in later seasons.' },
      { question: 'What dishes does Sydney create in The Bear?', answer: 'Sydney is responsible for several signature dishes at The Bear, including a risotto and various creative plates that showcase her culinary school training combined with innovative techniques. Her dishes represent the bridge between The Beef\'s comfort food roots and The Bear\'s fine dining aspirations.' }
    ],
    videos: [
      { title: 'Sydney Adamu - Best Kitchen Moments', youtubeId: 'cBVaE0FMfOc', description: 'Compilation of Sydney\'s standout scenes in The Bear.' }
    ],
    relatedCharacterSlugs: ['carmy-berzatto', 'marcus-brooks', 'richie-jerimovich', 'tina-marrero'],
    tags: ['deuteragonist', 'chef', 'ambitious', 'creative']
  },
  {
    slug: 'marcus-brooks',
    name: 'Marcus Brooks',
    showSlug: 'the-bear',
    showTitle: 'The Bear',
    actorSlug: 'lionel-boyce',
    actorName: 'Lionel Boyce',
    seasonsActive: 'Seasons 1–3',
    characterArc: 'Marcus Brooks begins as the quiet, unassuming pastry and bread station cook at The Original Beef — the kind of kitchen worker who does his job without complaint but has never been encouraged to reach for something more. When Carmy arrives and recognizes Marcus\'s untapped potential, it ignites a transformation that becomes one of the show\'s most uplifting storylines.\n\nInspired by Carmy\'s belief in him, Marcus throws himself into learning pastry arts with an almost obsessive devotion, spending nights watching YouTube tutorials, practicing techniques, and developing his own doughnut recipe. His pursuit of the perfect doughnut becomes a metaphor for the show\'s central theme: the gap between where you are and where you want to be, and whether the journey is worth the sacrifice.\n\nMarcus\'s storyline deepens significantly when he travels to Copenhagen to stage at a world-class restaurant, experiencing the beauty and brutality of elite culinary culture firsthand. Meanwhile, his mother\'s declining health back in Chicago creates an agonizing tension between his professional dreams and his personal responsibilities — a conflict that comes to a devastating head.\n\nMarcus\'s quiet determination, his genuine sweetness, and the tragedy of his personal losses make him the emotional heart of The Bear. He represents the working-class cooks who rarely get celebrated but whose passion and growth can be just as extraordinary as any head chef\'s.',
    keyEpisodes: [
      { title: 'Dogs', season: 1, episode: 2, description: 'Marcus begins experimenting with doughnut recipes after hours, showing the first sparks of his creative ambition.' },
      { title: 'Review', season: 1, episode: 7, description: 'Marcus holds his station during the chaotic service while dealing with personal stress, demonstrating his quiet resilience.' },
      { title: 'Forks', season: 2, episode: 7, description: 'Though focused on Richie, this episode parallels Marcus\'s journey of discovering what excellence looks like in a fine dining environment.' },
      { title: 'Bolognese', season: 2, episode: 9, description: 'Marcus returns from Copenhagen to devastating personal news about his mother, colliding his professional growth with personal grief.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lionel_Boyce_2023.jpg/440px-Lionel_Boyce_2023.jpg', alt: 'Lionel Boyce, who portrays Marcus Brooks in The Bear', attribution: 'Photo via Wikimedia Commons, CC BY-SA 4.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/TheBear', url: 'https://www.reddit.com/r/TheBear/', platform: 'Reddit', description: 'Main The Bear subreddit with Marcus doughnut discussions' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'The Bear Wiki - Marcus', url: 'https://the-bear.fandom.com/wiki/Marcus_Brooks', platform: 'Web', description: 'Marcus Brooks wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 72, engagement: 75, socialActivity: 68, memeVelocity: 65, fanArtDensity: 70, fandomLongevity: 74 },
    faqs: [
      { question: 'Who plays Marcus in The Bear?', answer: 'Lionel Boyce plays Marcus Brooks in The Bear. Boyce is also known for his work with the Odd Future collective and his voice acting roles. His understated performance in The Bear has been widely praised by critics.' },
      { question: 'What is Marcus\'s specialty in The Bear?', answer: 'Marcus works the pastry and bread station and develops a passion for doughnut making. His quest to perfect a doughnut recipe becomes a recurring storyline that symbolizes the show\'s themes of artistic growth and perfectionism.' },
      { question: 'Does Marcus go to Copenhagen in The Bear?', answer: 'Yes, in Season 2, Marcus travels to Copenhagen to stage (work an apprenticeship) at a world-class restaurant, where he is exposed to the highest levels of culinary artistry and refines his pastry skills.' },
      { question: 'What happens to Marcus\'s mom in The Bear?', answer: 'Marcus\'s mother has been dealing with serious health issues throughout the series. Her declining condition and eventual death create a devastating counterpoint to Marcus\'s professional growth, forcing him to confront the cost of his ambitions.' }
    ],
    videos: [],
    relatedCharacterSlugs: ['carmy-berzatto', 'sydney-adamu', 'richie-jerimovich', 'tina-marrero'],
    tags: ['fan-favorite', 'pastry-chef', 'underdog', 'emotional-core']
  },
  {
    slug: 'richie-jerimovich',
    name: 'Richie Jerimovich',
    showSlug: 'the-bear',
    showTitle: 'The Bear',
    actorSlug: 'ebon-moss-bachrach',
    actorName: 'Ebon Moss-Bachrach',
    seasonsActive: 'Seasons 1–3',
    characterArc: 'Richie Jerimovich is Michael Berzatto\'s best friend and self-appointed guardian of The Original Beef — a loud, combative, profane Chicagoan who sees Carmy\'s arrival as a threat to everything his dead best friend built. Richie has no formal role, no culinary training, and no plan. What he has is fierce loyalty to Michael\'s memory, an encyclopedic knowledge of The Beef\'s customers, and an absolute refusal to accept that change might be necessary.\n\nRichie\'s resistance to Carmy creates the show\'s most volatile dynamic. He insults Sydney, undermines new systems, and clings to the way things were — not because he believes The Beef was perfect, but because it was Michael\'s. Letting it change means letting Michael go. Beneath Richie\'s bluster is a man drowning in grief, struggling with a failed marriage and limited time with his daughter, unable to articulate the pain that fuels his anger.\n\nThe transformation comes in the landmark episode "Forks," where Richie stages at an elite Chicago restaurant and discovers, for the first time in his life, what it feels like to be excellent at something. Learning the art of fine dining service — the precision, the care, the hospitality — gives Richie purpose and dignity he never knew he was missing. His evolution from chaos agent to the most gracious front-of-house presence is the show\'s most emotionally rewarding arc.\n\nRichie proves that it is never too late to find what you are meant to do. His journey from grief-stricken gatekeeper to passionate hospitality professional is The Bear\'s secret weapon — a character who starts as the show\'s biggest problem and becomes its biggest heart.',
    keyEpisodes: [
      { title: 'System', season: 1, episode: 1, description: 'Richie immediately clashes with Carmy over control of The Beef, establishing their contentious relationship.' },
      { title: 'Review', season: 1, episode: 7, description: 'Richie contributes to the service chaos and confronts his grief during the most intense episode of Season 1.' },
      { title: 'Fishes', season: 2, episode: 6, description: 'The Christmas flashback episode reveals Richie\'s close bond with Michael and the family dynamics that shaped him.' },
      { title: 'Forks', season: 2, episode: 7, description: 'Richie stages at an elite restaurant and discovers his calling in fine dining hospitality, in what many consider the show\'s best episode.' },
      { title: 'Ice Chips', season: 3, episode: 8, description: 'Richie continues to evolve as he navigates the pressures of The Bear\'s opening while maintaining his personal growth.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Ebon_Moss-Bachrach_2023.jpg/440px-Ebon_Moss-Bachrach_2023.jpg', alt: 'Ebon Moss-Bachrach, who portrays Richie Jerimovich in The Bear', attribution: 'Photo via Wikimedia Commons, CC BY-SA 4.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/TheBear', url: 'https://www.reddit.com/r/TheBear/', platform: 'Reddit', description: 'Main The Bear subreddit with frequent Richie/Forks episode appreciation posts' }
      ],
      youtubeChannels: [
        { name: 'Richie\'s Transformation - Forks Analysis', url: 'https://www.youtube.com/results?search_query=richie+forks+episode+the+bear+analysis', platform: 'YouTube', description: 'Video essays analyzing Richie\'s transformation in the Forks episode' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'The Bear Wiki - Richie', url: 'https://the-bear.fandom.com/wiki/Richie_Jerimovich', platform: 'Web', description: 'Richie Jerimovich wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 83, engagement: 86, socialActivity: 80, memeVelocity: 85, fanArtDensity: 72, fandomLongevity: 82 },
    faqs: [
      { question: 'Who plays Richie in The Bear?', answer: 'Ebon Moss-Bachrach plays Richie Jerimovich in The Bear. Moss-Bachrach won the Emmy Award for Outstanding Supporting Actor in a Comedy Series for the role, with particular praise for his performance in the "Forks" episode.' },
      { question: 'What is the Forks episode of The Bear about?', answer: 'Season 2, Episode 7 ("Forks") follows Richie as he stages at a high-end Chicago restaurant, learning fine dining service. Over the course of the episode, Richie discovers a passion and aptitude for hospitality that transforms his character. It is widely considered one of the best episodes of the entire series.' },
      { question: 'What is Richie\'s relationship to Michael Berzatto?', answer: 'Richie was Michael Berzatto\'s best friend. His deep loyalty to Michael\'s memory initially makes him resistant to any changes Carmy tries to implement at The Beef. Richie\'s grief over Michael\'s death is a driving force behind his combative behavior in Season 1.' },
      { question: 'Does Richie have kids in The Bear?', answer: 'Yes, Richie has a daughter named Eva from his failed marriage. His relationship with Eva and his desire to be a good father is a significant motivating factor in his character development, particularly as he works to become a more stable and purposeful person.' },
      { question: 'What is Richie\'s role at The Bear restaurant?', answer: 'After his transformative experience in "Forks," Richie becomes the front-of-house manager and maitre d\' at The Bear restaurant. He brings the fine dining service skills he learned during his stage and combines them with his natural charisma and knowledge of Chicago hospitality.' }
    ],
    videos: [
      { title: 'Richie - Forks Episode Transformation', youtubeId: 'lGGeBbSp0xc', description: 'Key scenes from Richie\'s transformative Forks episode.' }
    ],
    relatedCharacterSlugs: ['carmy-berzatto', 'sydney-adamu', 'marcus-brooks', 'tina-marrero'],
    tags: ['fan-favorite', 'transformation', 'comic-relief', 'front-of-house']
  },
  {
    slug: 'tina-marrero',
    name: 'Tina Marrero',
    showSlug: 'the-bear',
    showTitle: 'The Bear',
    actorSlug: 'liza-colon-zayas',
    actorName: 'Liza Colon-Zayas',
    seasonsActive: 'Seasons 1–3',
    characterArc: 'Tina Marrero is a veteran line cook at The Original Beef who has worked the kitchen for years, earning her place through sheer endurance in an industry that grinds people down. When Carmy arrives with his fine dining systems and Sydney follows with her culinary school credentials, Tina views them both as outsiders who do not understand or respect the work she has put in. Her hostility toward Sydney in particular is fierce and personal — the resentment of a working cook toward someone who got formal training Tina never had the opportunity to pursue.\n\nTina\'s resistance is not mere stubbornness. It reflects the legitimate fear of a middle-aged woman in a precarious industry watching her job and her identity get reshaped by people half her age. She has survived on toughness, and the suggestion that toughness is not enough feels like an insult to everything she has endured.\n\nThe turning point comes when Tina is given the opportunity to attend culinary school herself, a gesture that validates her talent rather than dismissing it. In classes, Tina discovers that her years of practical experience give her advantages that younger students lack, and the formal training fills in gaps she never knew she had. She approaches learning with a humility and hunger that transform her from an obstacle into one of the kitchen\'s strongest assets.\n\nTina\'s arc is a love letter to the invisible workers who keep restaurants running — the cooks who never get profiles in food magazines but whose dedication and skill are the foundation everything else is built upon.',
    keyEpisodes: [
      { title: 'Dogs', season: 1, episode: 2, description: 'Tina openly challenges Sydney\'s authority in the kitchen, establishing the friction between old guard and new leadership.' },
      { title: 'Review', season: 1, episode: 7, description: 'During the catastrophic service, Tina demonstrates her reliability under pressure despite the chaos around her.' },
      { title: 'Honeydew', season: 2, episode: 5, description: 'Tina begins her culinary school journey, revealing her vulnerability and hunger to learn in a formal setting.' },
      { title: 'Omelette', season: 2, episode: 10, description: 'Tina shows her growth during The Bear\'s opening night, executing at a level that reflects both her experience and new training.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Liza_Col%C3%B3n-Zayas_2024.jpg/440px-Liza_Col%C3%B3n-Zayas_2024.jpg', alt: 'Liza Colon-Zayas, who portrays Tina Marrero in The Bear', attribution: 'Photo via Wikimedia Commons, CC BY-SA 4.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/TheBear', url: 'https://www.reddit.com/r/TheBear/', platform: 'Reddit', description: 'Main The Bear subreddit with Tina character growth discussions' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'The Bear Wiki - Tina', url: 'https://the-bear.fandom.com/wiki/Tina_Marrero', platform: 'Web', description: 'Tina Marrero wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 71, engagement: 74, socialActivity: 66, memeVelocity: 62, fanArtDensity: 65, fandomLongevity: 76 },
    faqs: [
      { question: 'Who plays Tina in The Bear?', answer: 'Liza Colon-Zayas plays Tina Marrero in The Bear. Colon-Zayas won the Emmy Award for Outstanding Supporting Actress in a Comedy Series for the role, making her the first Latina to win in that category.' },
      { question: 'Why is Tina mean to Sydney in The Bear?', answer: 'Tina is hostile toward Sydney because she perceives the young, culinary school-trained chef as a threat to her position and an implicit criticism of her self-taught skills. Tina has survived in the kitchen through years of hard work and views Sydney\'s formal education as an unearned advantage.' },
      { question: 'Does Tina go to culinary school in The Bear?', answer: 'Yes, in Season 2, Tina enrolls in culinary school as part of the team\'s preparation for opening The Bear restaurant. The experience transforms her from a resistant veteran into an eager student who combines her years of practical knowledge with formal technique.' },
      { question: 'How does Tina\'s character change in The Bear?', answer: 'Tina evolves from one of the most resistant members of the old Beef crew into one of the most dedicated members of The Bear team. Her journey from hostility toward change to embracing growth is one of the show\'s most celebrated character arcs, representing the potential for reinvention at any age.' }
    ],
    videos: [],
    relatedCharacterSlugs: ['carmy-berzatto', 'sydney-adamu', 'marcus-brooks', 'richie-jerimovich'],
    tags: ['veteran', 'transformation', 'line-cook', 'underdog']
  }
];

module.exports = { wednesdayCharacters, bearCharacters };
