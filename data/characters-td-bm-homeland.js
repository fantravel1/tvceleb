// True Detective, Black Mirror, and Homeland Characters
const trueDetectiveCharacters = [
  {
    slug: 'rust-cohle',
    name: 'Rust Cohle',
    showSlug: 'true-detective',
    showTitle: 'True Detective',
    actorSlug: 'matthew-mcconaughey',
    actorName: 'Matthew McConaughey',
    seasonsActive: 'Season 1',
    characterArc: 'Rustin "Rust" Cohle is a Louisiana State Police homicide detective whose philosophical worldview and haunted past make him one of television\'s most complex protagonists. A former undercover narcotics agent in Texas, Cohle suffered a devastating personal tragedy — the death of his young daughter — that shattered his marriage and sent him spiraling into existential despair. His years working deep cover in drug cartels left him psychologically scarred, prone to hallucinations, and armed with a bleakly nihilistic philosophy drawn from thinkers like Nietzsche and Ligotti. When he arrives in Louisiana and is paired with Marty Hart, Cohle\'s pessimistic monologues about the futility of human existence and the illusion of selfhood immediately mark him as something television had never seen before.\n\nOver the course of their seventeen-year investigation into the ritualistic murder of Dora Lange, Cohle\'s obsessive dedication to the case reveals both his greatest strength and deepest vulnerability. His inability to let go of the investigation — even after leaving the force and spending years in isolation as a barroom drinker — speaks to a man who, despite his claims of cosmic indifference, cares deeply about justice. The finale of Season 1 delivers a profound shift in Cohle\'s philosophy: after a near-death experience in the Carcosa lair of Errol Childress, he tells Hart that he felt the love of his deceased daughter in the darkness, and that in the eternal struggle between light and darkness, the light is winning. This moment of hard-won hope transforms Cohle from a pure nihilist into something far more nuanced — a man who has stared into the void and found, against all odds, a reason to believe.',
    keyEpisodes: [
      { title: 'The Long Bright Dark', season: 1, episode: 1, description: 'Cohle and Hart are introduced through 2012 interviews as they recount the 1995 Dora Lange case. Cohle\'s nihilistic philosophy is immediately established.' },
      { title: 'The Secret Fate of All Life', season: 1, episode: 5, description: 'The Ledoux compound raid occurs and Cohle executes Reggie Ledoux. The timeline shifts as cracks in the official story emerge.' },
      { title: 'After You\'ve Gone', season: 1, episode: 7, description: 'Cohle reveals to Hart the full scope of his ongoing investigation, showing his storage unit full of evidence. The two reunite to finish the case.' },
      { title: 'Form and Void', season: 1, episode: 8, description: 'Cohle enters Carcosa and confronts Errol Childress. After a near-death experience, he delivers his transformative monologue about light versus darkness.' }
    ],
    image: { src: '/images/characters/rust-cohle.jpg', alt: 'Matthew McConaughey as Rust Cohle', attribution: 'HBO', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/TrueDetective', url: 'https://www.reddit.com/r/TrueDetective/', platform: 'Reddit', description: 'Main True Detective subreddit with extensive discussion of Cohle\'s philosophy and character' },
        { name: 'r/rust_cohle', url: 'https://www.reddit.com/r/rust_cohle/', platform: 'Reddit', description: 'Dedicated subreddit for Rust Cohle quotes, memes, and analysis' }
      ],
      youtubeChannels: [
        { name: 'Rust Cohle Philosophy Explained', url: 'https://www.youtube.com/results?search_query=rust+cohle+philosophy+analysis', platform: 'YouTube', description: 'Video essays exploring the philosophical underpinnings of Rust Cohle\'s worldview' }
      ],
      twitterAccounts: [
        { name: '@TrueDetective', url: 'https://twitter.com/search?q=rust+cohle+true+detective', platform: 'Twitter/X', description: 'Fan discussions and quote threads about Rust Cohle' }
      ],
      fanSites: [
        { name: 'True Detective Wiki', url: 'https://true-detective.fandom.com/', platform: 'Web', description: 'Comprehensive True Detective wiki on Fandom' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 93, engagement: 95, socialActivity: 90, memeVelocity: 91, fanArtDensity: 88, fandomLongevity: 94 },
    faqs: [
      { question: 'Who plays Rust Cohle in True Detective?', answer: 'Matthew McConaughey plays Rust Cohle in True Detective Season 1. The role was part of McConaughey\'s acclaimed "McConaissance" period, and his performance is widely regarded as one of the finest in television history.' },
      { question: 'What is Rust Cohle\'s philosophy?', answer: 'Rust Cohle espouses a form of philosophical pessimism and antinatalism influenced by thinkers like Friedrich Nietzsche, Thomas Ligotti, and Emil Cioran. He describes time as a "flat circle," suggests human consciousness is a tragic evolutionary misstep, and argues that self-awareness is a burden. However, by the finale he finds a glimmer of hope in the darkness.' },
      { question: 'What does Rust Cohle mean by "time is a flat circle"?', answer: 'Cohle\'s "time is a flat circle" concept draws from Nietzsche\'s idea of eternal recurrence — the notion that all events in the universe will repeat infinitely. In the show, it reflects Cohle\'s belief that suffering and evil are inescapable patterns, though it also connects to the show\'s themes of cyclical violence in Louisiana.' },
      { question: 'Does Rust Cohle die in True Detective?', answer: 'No, Rust Cohle survives the events of Season 1. He is gravely wounded by Errol Childress in the Carcosa lair but recovers in the hospital. The season ends with Cohle experiencing a profound emotional breakthrough and walking into the night with Marty Hart.' }
    ],
    videos: [
      { title: 'Rust Cohle - Time Is a Flat Circle', youtubeId: '0mhZBLUONfU', description: 'The iconic interrogation scene where Cohle delivers his "time is a flat circle" monologue.' },
      { title: 'Rust Cohle - Best Philosophical Moments', youtubeId: 'A8x73UW8Hjk', description: 'A compilation of Rust Cohle\'s most memorable philosophical monologues from Season 1.' }
    ],
    relatedCharacterSlugs: ['marty-hart', 'liz-danvers'],
    tags: ['protagonist', 'nihilist', 'iconic', 'philosopher', 'detective', 'anti-hero']
  },
  {
    slug: 'marty-hart',
    name: 'Marty Hart',
    showSlug: 'true-detective',
    showTitle: 'True Detective',
    actorSlug: 'woody-harrelson',
    actorName: 'Woody Harrelson',
    seasonsActive: 'Season 1',
    characterArc: 'Martin "Marty" Hart is the seemingly conventional half of True Detective Season 1\'s detective partnership, a Louisiana State Police homicide detective who prides himself on being a regular guy — a churchgoing family man, a good ol\' boy who understands people and plays by the social rules that Rust Cohle so flagrantly ignores. But Hart\'s self-image is built on a foundation of profound hypocrisy. He preaches family values while carrying on extramarital affairs. He positions himself as the moral counterweight to Cohle\'s nihilism while engaging in violence and self-destructive behavior that reveals the emptiness beneath his conventional exterior. Hart is the everyman who believes his own mythology, and the show systematically dismantles that mythology across seventeen years.\n\nHart\'s journey is in many ways more tragic than Cohle\'s because he lacks the self-awareness to understand his own failures until it is too late. His marriage to Maggie collapses under the weight of his infidelities, and his relationship with his daughters deteriorates as he prioritizes work and his own ego over genuine connection. When he and Cohle reunite years later to finally close the Dora Lange case, Hart has been humbled by life — divorced, estranged from his family, running a private investigation firm alone. The case gives him purpose again, and his partnership with Cohle, rebuilt on mutual respect and shared trauma, becomes the show\'s unlikely emotional anchor. In the finale, it is Hart who wheels Cohle out of the hospital and listens as his partner finds hope — and Hart\'s quiet tears suggest that he, too, has found something worth holding onto.',
    keyEpisodes: [
      { title: 'The Long Bright Dark', season: 1, episode: 1, description: 'Hart and Cohle begin investigating the Dora Lange murder. Hart\'s family life and conventional worldview are established in contrast to Cohle.' },
      { title: 'Seeing Things', season: 1, episode: 2, description: 'Hart\'s affair with Lisa is revealed, exposing the hypocrisy beneath his family-man persona. His violent temper begins to surface.' },
      { title: 'Haunted Houses', season: 1, episode: 6, description: 'Hart\'s world collapses when Maggie sleeps with Cohle for revenge, leading to a violent confrontation between the two detectives and the end of their partnership.' },
      { title: 'Form and Void', season: 1, episode: 8, description: 'Hart and Cohle confront Errol Childress together. Hart saves Cohle\'s life in Carcosa and stands by him through his recovery.' }
    ],
    image: { src: '/images/characters/marty-hart.jpg', alt: 'Woody Harrelson as Marty Hart', attribution: 'HBO', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/TrueDetective', url: 'https://www.reddit.com/r/TrueDetective/', platform: 'Reddit', description: 'Main True Detective subreddit with active discussion of Hart\'s character arc and moral failings' }
      ],
      youtubeChannels: [
        { name: 'Marty Hart Character Analysis', url: 'https://www.youtube.com/results?search_query=marty+hart+true+detective+analysis', platform: 'YouTube', description: 'Video essays analyzing Hart as the flawed everyman of True Detective' }
      ],
      twitterAccounts: [
        { name: '@TrueDetective', url: 'https://twitter.com/search?q=marty+hart+true+detective', platform: 'Twitter/X', description: 'Fan discussions about Marty Hart and Woody Harrelson\'s performance' }
      ],
      fanSites: [
        { name: 'True Detective Wiki - Marty Hart', url: 'https://true-detective.fandom.com/wiki/Martin_Hart', platform: 'Web', description: 'Detailed wiki page for Marty Hart on Fandom' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 85, engagement: 87, socialActivity: 83, memeVelocity: 80, fanArtDensity: 82, fandomLongevity: 86 },
    faqs: [
      { question: 'Who plays Marty Hart in True Detective?', answer: 'Woody Harrelson plays Martin "Marty" Hart in True Detective Season 1. Harrelson\'s portrayal of the flawed, self-deceiving detective earned widespread critical acclaim alongside Matthew McConaughey\'s Rust Cohle.' },
      { question: 'Is Marty Hart a good person?', answer: 'Marty Hart is deliberately written as a morally complex character. He sees himself as a good family man and a moral counterweight to Cohle\'s nihilism, but his serial infidelities, violent temper, and self-deception reveal deep hypocrisy. His arc is one of gradual humbling and eventual self-awareness.' },
      { question: 'What happens to Marty Hart\'s family?', answer: 'Hart\'s marriage to Maggie (Michelle Monaghan) ends in divorce after years of infidelity. By the 2012 timeline, Hart is alone, running a private investigation firm, and largely estranged from his ex-wife and daughters. His personal losses fuel his decision to reopen the case with Cohle.' },
      { question: 'Do Marty and Rust become friends?', answer: 'Despite their volatile partnership — which includes a brutal fistfight and years of estrangement — Hart and Cohle develop a deep bond by the end of Season 1. Their reunion to solve the case and Hart\'s vigil at Cohle\'s hospital bedside demonstrate a genuine, hard-won friendship built on shared experience.' }
    ],
    videos: [
      { title: 'True Detective - Marty & Rust Partnership', youtubeId: 'u9_MBxHfofY', description: 'A look at the evolving dynamic between Hart and Cohle across Season 1.' },
      { title: 'Marty Hart - The Flawed Everyman', youtubeId: 'PJn0BZRJA7w', description: 'Video essay exploring why Marty Hart is the unsung heart of True Detective Season 1.' }
    ],
    relatedCharacterSlugs: ['rust-cohle', 'liz-danvers'],
    tags: ['protagonist', 'detective', 'family-man', 'flawed', 'everyman']
  },
  {
    slug: 'liz-danvers',
    name: 'Liz Danvers',
    showSlug: 'true-detective',
    showTitle: 'True Detective',
    actorSlug: 'jodie-foster',
    actorName: 'Jodie Foster',
    seasonsActive: 'Season 4',
    characterArc: 'Chief Liz Danvers is the lead detective of True Detective: Night Country, set in the perpetual darkness of Ennis, Alaska. A seasoned and sharp-tongued police chief, Danvers carries the weight of a community devastated by the disappearance of eight researchers from the Tsalal Arctic Research Station. She is a transplant to Ennis, having built a life there with her partner Leah\'s father (now deceased), and she navigates a complex web of personal and professional conflicts. Danvers is fiercely competent but emotionally guarded, using caustic wit and relentless work ethic to keep the people around her at arm\'s length. Her relationship with her stepdaughter Leah is strained, and her management of the Ennis police force reveals a leader who demands excellence but struggles with empathy.\n\nDanvers\' central conflict in Night Country is not only the Tsalal case but her fractured relationship with Evangeline Navarro, a fellow officer with whom she shares a dark secret from a previous case involving the death of a local Indigenous woman named Annie Kowtok. As the investigation into the Tsalal scientists unfolds, it becomes clear that the two cases are connected, and Danvers must confront both the institutional corruption that buried Annie\'s case and her own complicity in that silence. Jodie Foster brings a controlled intensity to the role, portraying Danvers as a woman who has learned to survive in male-dominated spaces through sheer force of will. Her journey culminates in a harrowing confrontation with the truth about both cases, forcing her to reckon with the cost of justice in a community where the powerful protect their own and the ice keeps everyone\'s secrets — at least until the long night is over.',
    keyEpisodes: [
      { title: 'Part 1', season: 4, episode: 1, description: 'The Tsalal scientists are discovered frozen in a tangled mass on the ice. Danvers takes charge of the investigation amid the Ennis polar night.' },
      { title: 'Part 3', season: 4, episode: 3, description: 'Danvers and Navarro\'s shared history is explored as connections between the Tsalal disappearance and Annie Kowtok\'s murder surface.' },
      { title: 'Part 5', season: 4, episode: 5, description: 'Danvers uncovers critical evidence linking the Tsalal research station to Annie\'s death, deepening the conspiracy.' },
      { title: 'Part 6', season: 4, episode: 6, description: 'The season finale. Danvers and Navarro confront the truth about both cases in a tense and emotionally devastating conclusion.' }
    ],
    image: { src: '/images/characters/liz-danvers.jpg', alt: 'Jodie Foster as Liz Danvers', attribution: 'HBO', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/TrueDetective', url: 'https://www.reddit.com/r/TrueDetective/', platform: 'Reddit', description: 'Main True Detective subreddit with active Night Country discussion threads' },
        { name: 'r/TrueDetectiveS4', url: 'https://www.reddit.com/r/TrueDetectiveS4/', platform: 'Reddit', description: 'Dedicated subreddit for True Detective: Night Country' }
      ],
      youtubeChannels: [
        { name: 'Night Country Analysis', url: 'https://www.youtube.com/results?search_query=true+detective+night+country+danvers+analysis', platform: 'YouTube', description: 'Video essays and reviews of Jodie Foster\'s performance as Danvers' }
      ],
      twitterAccounts: [
        { name: '@TrueDetective', url: 'https://twitter.com/search?q=liz+danvers+night+country', platform: 'Twitter/X', description: 'Fan reactions and discussions about Danvers and Night Country' }
      ],
      fanSites: [
        { name: 'True Detective Wiki - Liz Danvers', url: 'https://true-detective.fandom.com/wiki/Liz_Danvers', platform: 'Web', description: 'Wiki page for Liz Danvers on Fandom' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 82, engagement: 84, socialActivity: 81, memeVelocity: 76, fanArtDensity: 78, fandomLongevity: 80 },
    faqs: [
      { question: 'Who plays Liz Danvers in True Detective: Night Country?', answer: 'Jodie Foster plays Chief Liz Danvers in True Detective: Night Country (Season 4). The two-time Academy Award winner delivers a commanding performance as the sharp, guarded police chief navigating a chilling mystery in Alaska.' },
      { question: 'Is True Detective: Night Country connected to Season 1?', answer: 'Night Country contains references and thematic connections to Season 1, including the spiral symbol that was central to the Dora Lange case. However, it tells a standalone story in Ennis, Alaska, with its own characters and mystery.' },
      { question: 'What is the relationship between Danvers and Navarro?', answer: 'Danvers and Navarro (played by Kali Reis) are fellow officers in Ennis who share a complicated history. They were once close but became estranged after the unsolved murder of Annie Kowtok. The Tsalal case forces them to work together again and confront their shared past.' },
      { question: 'What happened to the Tsalal scientists in Night Country?', answer: 'The eight Tsalal Arctic Research Station scientists are found frozen on the ice in a horrifying formation. The investigation reveals that their disappearance is connected to the earlier murder of Indigenous activist Annie Kowtok and the station\'s complicity in covering up environmental and personal crimes.' }
    ],
    videos: [
      { title: 'True Detective: Night Country - Official Trailer', youtubeId: 'bHVkzODGRMo', description: 'The official trailer for True Detective: Night Country featuring Jodie Foster as Liz Danvers.' },
      { title: 'Jodie Foster on Playing Liz Danvers', youtubeId: 'QjKF6BQHDNQ', description: 'Jodie Foster discusses her approach to the role of Danvers and the challenges of filming in extreme conditions.' }
    ],
    relatedCharacterSlugs: ['rust-cohle', 'marty-hart'],
    tags: ['protagonist', 'detective', 'police-chief', 'strong-female-lead', 'alaska']
  }
];

const blackMirrorCharacters = [
  {
    slug: 'bee-black-mirror',
    name: 'Bee',
    showSlug: 'black-mirror',
    showTitle: 'Black Mirror',
    actorSlug: 'annie-murphy',
    actorName: 'Annie Murphy',
    seasonsActive: 'Season 6, Episode 1',
    characterArc: 'Bee is the unsuspecting everywoman protagonist of "Joan Is Awful," the premiere episode of Black Mirror\'s sixth season. She is an ordinary woman living a comfortable but unremarkable life — a mid-level tech company executive navigating workplace politics, a tepid romantic relationship, and the low-level anxieties of modern existence. Her world is upended when she discovers that a streaming platform called Streamberry has created a show called "Joan Is Awful" that dramatizes her life in real time, with every private moment, petty thought, and moral failing broadcast to millions. The show stars Salma Hayek as a fictionalized version of Bee (named Joan), and the portrayal strips away all of Bee\'s self-protective narratives, showing her life in the most unflattering light possible.\n\nBee\'s journey from passive consumer to active rebel forms the backbone of one of Black Mirror\'s sharpest satires. As she realizes that she unknowingly consented to this surveillance through a terms-of-service agreement, the episode becomes a biting commentary on data privacy, AI-generated content, and the commodification of personal experience. Bee\'s desperate attempts to fight back — first by trying to live a "better" life to improve the show, then by attempting to destroy the quantum computer powering the system — escalate into absurdist comedy and genuine pathos. Annie Murphy brings the same blend of likability and vulnerability that defined her Schitt\'s Creek role, grounding the episode\'s high-concept premise in real human emotion. Bee\'s arc ultimately asks whether we can ever truly own our own stories in an age where every action is captured, quantified, and fed into algorithms that know us better than we know ourselves.',
    keyEpisodes: [
      { title: 'Joan Is Awful', season: 6, episode: 1, description: 'Bee discovers that a streaming service has created an AI-generated show dramatizing her life in real time, and she must find a way to destroy the system.' }
    ],
    image: { src: '/images/characters/bee-black-mirror.jpg', alt: 'Annie Murphy as Bee in Black Mirror', attribution: 'Netflix', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/blackmirror', url: 'https://www.reddit.com/r/blackmirror/', platform: 'Reddit', description: 'Main Black Mirror subreddit with extensive episode discussion threads' },
        { name: 'r/netflix', url: 'https://www.reddit.com/r/netflix/', platform: 'Reddit', description: 'Netflix subreddit where Joan Is Awful was widely discussed at release' }
      ],
      youtubeChannels: [
        { name: 'Joan Is Awful Explained', url: 'https://www.youtube.com/results?search_query=joan+is+awful+black+mirror+explained', platform: 'YouTube', description: 'Breakdown videos explaining the layers of meta-fiction in Joan Is Awful' }
      ],
      twitterAccounts: [
        { name: '@blackmirror', url: 'https://twitter.com/search?q=joan+is+awful+black+mirror', platform: 'Twitter/X', description: 'Fan discussions about Joan Is Awful and its commentary on AI and streaming' }
      ],
      fanSites: [
        { name: 'Black Mirror Wiki', url: 'https://black-mirror.fandom.com/', platform: 'Web', description: 'Comprehensive Black Mirror wiki covering all episodes on Fandom' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 79, engagement: 82, socialActivity: 80, memeVelocity: 83, fanArtDensity: 70, fandomLongevity: 74 },
    faqs: [
      { question: 'Who plays Bee in Black Mirror\'s Joan Is Awful?', answer: 'Annie Murphy plays Bee, the real-life woman whose existence is dramatized without her meaningful consent. Murphy is best known for her Emmy-winning role as Alexis Rose in Schitt\'s Creek.' },
      { question: 'What is Joan Is Awful about?', answer: 'Joan Is Awful follows Bee, an ordinary woman who discovers that a streaming service called Streamberry has used AI and a quantum computer to create a show that dramatizes her life in real time. The episode is a satire of streaming culture, terms-of-service agreements, AI-generated content, and the erosion of privacy.' },
      { question: 'Who plays Joan in the show-within-a-show?', answer: 'Salma Hayek Pinault plays "Joan" in the Streamberry show-within-a-show, portraying a dramatized version of Bee\'s life. Hayek also appears as herself, discovering that her likeness was also used without meaningful consent through a buried contract clause.' },
      { question: 'What is the message of Joan Is Awful?', answer: 'The episode warns about the dangers of blindly accepting terms-of-service agreements, the potential for AI to commodify personal experience, and the way streaming platforms reduce complex human lives into consumable content. It asks whether true privacy is possible in the digital age.' }
    ],
    videos: [
      { title: 'Black Mirror Season 6 - Joan Is Awful Trailer', youtubeId: 'xJJF8S1dBlo', description: 'Official clip from Joan Is Awful featuring Annie Murphy discovering the show about her life.' },
      { title: 'Joan Is Awful Ending Explained', youtubeId: '3l6A7fEMjY8', description: 'A detailed breakdown of the Joan Is Awful ending and its implications.' }
    ],
    relatedCharacterSlugs: ['lacie-pound', 'ash-starr'],
    tags: ['protagonist', 'everyman', 'satire', 'tech-dystopia', 'privacy', 'ai']
  },
  {
    slug: 'lacie-pound',
    name: 'Lacie Pound',
    showSlug: 'black-mirror',
    showTitle: 'Black Mirror',
    actorSlug: 'bryce-dallas-howard',
    actorName: 'Bryce Dallas Howard',
    seasonsActive: 'Season 3, Episode 1',
    characterArc: 'Lacie Pound lives in a pastel-colored near-future society where every social interaction is rated on a five-star scale, and a person\'s aggregate score determines their access to housing, transportation, employment, and social standing. Lacie is a 4.2, respectable but not elite, and she is desperately obsessed with breaking into the 4.5-and-above tier that would qualify her for a discount on a luxury apartment in a prestigious gated community. She is performatively pleasant, meticulously curating every smile, laugh, and social media post to maximize her rating. Bryce Dallas Howard plays her with a brittle, desperate cheerfulness that barely conceals the anxiety beneath — a woman who has internalized an entire system of social control and made it her religion.\n\nLacie\'s opportunity arrives when her childhood friend Naomi (Alice Eve), a glamorous 4.8, invites her to be maid of honor at her wedding — a high-profile event guaranteed to boost Lacie\'s score through proximity to high-rated guests. But the journey to the wedding becomes a cascading disaster. A cancelled flight, a confrontation with a rental car agent, a disastrous encounter with a truck driver rated 1.4, and increasingly erratic behavior send Lacie\'s score plummeting. Each setback strips away another layer of her carefully maintained facade until she arrives at the wedding disheveled, ranting, and rated so low she is essentially a social outcast. The episode\'s devastating final scene finds Lacie in a holding cell, finally free from the tyranny of her rating, screaming obscenities at a fellow prisoner — and for the first time in the entire episode, genuinely laughing with authentic emotion. Her liberation comes only through total social destruction, suggesting that the system\'s grip can only be broken by losing everything it promises.',
    keyEpisodes: [
      { title: 'Nosedive', season: 3, episode: 1, description: 'Lacie\'s desperate quest for a high social rating unravels catastrophically on her way to a prestigious wedding, exposing the tyranny of performative social approval.' }
    ],
    image: { src: '/images/characters/lacie-pound.jpg', alt: 'Bryce Dallas Howard as Lacie Pound in Black Mirror', attribution: 'Netflix', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/blackmirror', url: 'https://www.reddit.com/r/blackmirror/', platform: 'Reddit', description: 'Main Black Mirror subreddit where Nosedive is frequently cited as one of the most prescient episodes' }
      ],
      youtubeChannels: [
        { name: 'Nosedive Analysis', url: 'https://www.youtube.com/results?search_query=nosedive+black+mirror+analysis', platform: 'YouTube', description: 'Video essays examining Nosedive\'s commentary on social media culture and rating systems' }
      ],
      twitterAccounts: [
        { name: '@blackmirror', url: 'https://twitter.com/search?q=nosedive+black+mirror+lacie', platform: 'Twitter/X', description: 'Fan discussions comparing Nosedive\'s social rating system to real-world platforms' }
      ],
      fanSites: [
        { name: 'Black Mirror Wiki - Nosedive', url: 'https://black-mirror.fandom.com/wiki/Nosedive', platform: 'Web', description: 'Detailed Nosedive episode page on the Black Mirror wiki' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 84, engagement: 86, socialActivity: 88, memeVelocity: 85, fanArtDensity: 78, fandomLongevity: 82 },
    faqs: [
      { question: 'Who plays Lacie Pound in Black Mirror?', answer: 'Bryce Dallas Howard plays Lacie Pound in the Black Mirror episode "Nosedive" (Season 3, Episode 1). Her performance earned widespread acclaim for capturing the brittle desperation of a woman enslaved by social approval metrics.' },
      { question: 'What is Nosedive about?', answer: 'Nosedive depicts a society where people rate every interaction on a 1-to-5 scale, with aggregate scores determining social and economic status. Lacie Pound is obsessed with raising her 4.2 rating to access luxury housing, but her journey to a friend\'s wedding becomes a cascading social disaster that destroys her rating entirely.' },
      { question: 'Is the Nosedive rating system based on real technology?', answer: 'While fictional, the Nosedive rating system has drawn comparisons to China\'s social credit system, ride-sharing and delivery app ratings, and the social dynamics of platforms like Instagram and TikTok where quantified approval shapes behavior and self-worth.' },
      { question: 'What happens to Lacie at the end of Nosedive?', answer: 'Lacie ends up in a detention cell with her social implant removed. Free from the rating system for the first time, she exchanges profane insults with a fellow inmate and laughs genuinely — finding authentic human connection only after losing everything the system valued.' }
    ],
    videos: [
      { title: 'Black Mirror - Nosedive Official Trailer', youtubeId: 'R32qWdOWrTo', description: 'Official trailer for the Nosedive episode showcasing the social rating dystopia.' },
      { title: 'Nosedive Ending Explained', youtubeId: 'WJpuDPhdJCg', description: 'Analysis of the Nosedive ending and its themes of liberation through social destruction.' }
    ],
    relatedCharacterSlugs: ['bee-black-mirror', 'ash-starr'],
    tags: ['protagonist', 'social-media', 'dystopia', 'satire', 'tragic', 'iconic-episode']
  },
  {
    slug: 'ash-starr',
    name: 'Ash Starr',
    showSlug: 'black-mirror',
    showTitle: 'Black Mirror',
    actorSlug: 'domhnall-gleeson',
    actorName: 'Domhnall Gleeson',
    seasonsActive: 'Season 2, Episode 1',
    characterArc: 'Ash Starr is a warm, easygoing young man whose sudden death in a car accident sets in motion one of Black Mirror\'s most emotionally devastating explorations of grief and technology. In life, Ash is a casual, social-media-obsessed boyfriend to Martha (Hayley Atwell) — the kind of person whose online presence is vast and curated, capturing the surface of his personality in thousands of posts, photos, and comments while inevitably missing the irreplaceable depth of a real human being. His death is abrupt and senseless, leaving Martha pregnant and alone. It is in the aftermath that Ash becomes something else entirely: first a chatbot trained on his digital footprint, then a voice on the phone, and finally a synthetic physical replica standing in their home.\n\nThe tragedy of Ash\'s character lies in the uncanny valley between the real person and his technological resurrection. Each iteration — text, voice, body — is simultaneously more like Ash and more obviously not him. The synthetic Ash is polite, accommodating, and responsive, but he lacks the unpredictability, the stubbornness, the capacity for genuine conflict that made the real Ash human. Domhnall Gleeson delivers a subtle, deeply affecting performance in both versions of Ash, capturing the warmth of the living man and the hollow pleasantness of the replica. The episode\'s heartbreaking conclusion — with the synthetic Ash relegated to the attic, brought out only for visits from Martha\'s daughter — speaks to the impossibility of replacing human connection with technology, no matter how sophisticated. Ash Starr, or what remains of him, becomes a monument to what we lose when we confuse a digital footprint with a soul.',
    keyEpisodes: [
      { title: 'Be Right Back', season: 2, episode: 1, description: 'After Ash dies in a car accident, his girlfriend Martha uses a service that creates an AI version of him based on his social media presence, escalating from chatbot to synthetic body with devastating emotional consequences.' }
    ],
    image: { src: '/images/characters/ash-starr.jpg', alt: 'Domhnall Gleeson as Ash Starr in Black Mirror', attribution: 'Channel 4', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/blackmirror', url: 'https://www.reddit.com/r/blackmirror/', platform: 'Reddit', description: 'Main Black Mirror subreddit where Be Right Back is consistently ranked among the most emotional episodes' }
      ],
      youtubeChannels: [
        { name: 'Be Right Back Analysis', url: 'https://www.youtube.com/results?search_query=be+right+back+black+mirror+analysis', platform: 'YouTube', description: 'Video essays exploring the themes of grief, technology, and digital identity in Be Right Back' }
      ],
      twitterAccounts: [
        { name: '@blackmirror', url: 'https://twitter.com/search?q=be+right+back+black+mirror+ash', platform: 'Twitter/X', description: 'Fan discussions about Be Right Back and its relevance to AI chatbots trained on deceased individuals' }
      ],
      fanSites: [
        { name: 'Black Mirror Wiki - Be Right Back', url: 'https://black-mirror.fandom.com/wiki/Be_Right_Back', platform: 'Web', description: 'Comprehensive Be Right Back episode page on the Black Mirror wiki' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 81, engagement: 83, socialActivity: 78, memeVelocity: 72, fanArtDensity: 80, fandomLongevity: 84 },
    faqs: [
      { question: 'Who plays Ash in Black Mirror\'s Be Right Back?', answer: 'Domhnall Gleeson plays Ash Starr in the Black Mirror episode "Be Right Back" (Season 2, Episode 1). Gleeson portrays both the living Ash and the synthetic replica, bringing subtle differences that highlight the uncanny valley between a real person and their digital reconstruction.' },
      { question: 'What is Be Right Back about?', answer: 'Be Right Back follows Martha (Hayley Atwell), a young woman grieving the sudden death of her boyfriend Ash. She begins using a service that creates an AI version of Ash based on his social media and online activity, escalating from text messages to phone calls to a physical synthetic replica. The episode explores grief, digital identity, and the limits of technology in replacing human connection.' },
      { question: 'Is Be Right Back based on real technology?', answer: 'While the physical synthetic body remains science fiction, the concept of AI chatbots trained on a deceased person\'s digital footprint has become increasingly real. Companies have developed services that create conversational AI from text messages and social media posts, making Be Right Back one of Black Mirror\'s most prescient episodes.' },
      { question: 'What happens to the synthetic Ash at the end?', answer: 'In the final scene, set years later, Martha has kept the synthetic Ash in the attic of their home. Her young daughter is allowed to visit him on weekends. The ending suggests Martha could neither fully accept the replica as a replacement for Ash nor bring herself to destroy it, leaving the synthetic trapped in a liminal existence.' }
    ],
    videos: [
      { title: 'Black Mirror - Be Right Back Trailer', youtubeId: 'mAmSBHdGMPs', description: 'Official trailer for Be Right Back featuring Domhnall Gleeson and Hayley Atwell.' },
      { title: 'Be Right Back - The Tragedy of Digital Resurrection', youtubeId: 'YQJsCJKNVQM', description: 'Video essay examining how Be Right Back predicted modern AI grief technology.' }
    ],
    relatedCharacterSlugs: ['bee-black-mirror', 'lacie-pound'],
    tags: ['tragic', 'grief', 'ai', 'digital-identity', 'emotional', 'prescient']
  }
];

const homelandCharacters = [
  {
    slug: 'carrie-mathison',
    name: 'Carrie Mathison',
    showSlug: 'homeland',
    showTitle: 'Homeland',
    actorSlug: 'claire-danes',
    actorName: 'Claire Danes',
    seasonsActive: 'Seasons 1–8',
    characterArc: 'Carrie Mathison is a brilliant, unstable CIA intelligence officer whose bipolar disorder is both her greatest liability and, paradoxically, the source of her most extraordinary insights. From the pilot episode, when she receives intelligence that an American prisoner of war has been turned by al-Qaeda, Carrie is defined by her willingness to trust her instincts over institutional consensus — and by the devastating personal cost of that commitment. Her unauthorized surveillance of Marine Sergeant Nicholas Brody, her complex romantic entanglement with him, and her repeated clashes with CIA leadership establish her as one of television\'s most compelling and flawed protagonists. Claire Danes\' unflinching performance — particularly her depiction of Carrie\'s manic episodes, where insight and madness become indistinguishable — redefined what a female lead in a thriller could be.\n\nAcross eight seasons, Carrie\'s arc traces a pattern of sacrifice, breakdown, and reinvention that mirrors the broader themes of America\'s War on Terror. She loses relationships, custody of her daughter, her standing within the CIA, and at various points her freedom and her sanity — yet she keeps returning to the work because she genuinely believes she is the only one who can see the threats others miss. The series finale presents Carrie with an impossible choice: betray her mentor Saul Berenson to save a peace deal, or remain loyal and watch the world move closer to nuclear war. Her decision to become a Russian intelligence asset — feeding information back to Saul through a coded book of poetry — reframes her entire journey as one of ultimate sacrifice. Carrie Mathison ends the series as she began it: alone, operating in the shadows, doing what she believes is necessary regardless of the personal cost, her loyalty to country and mentor expressed through the loneliest possible act of devotion.',
    keyEpisodes: [
      { title: 'Pilot', season: 1, episode: 1, description: 'Carrie receives intelligence that an American POW has been turned and begins unauthorized surveillance of Nicholas Brody, establishing the central tension of the series.' },
      { title: 'The Vest', season: 1, episode: 11, description: 'Carrie suffers a severe manic episode while connecting the dots of a terrorist plot, blurring the line between brilliance and breakdown in a tour-de-force performance by Danes.' },
      { title: 'Q&A', season: 2, episode: 5, description: 'Carrie interrogates Brody in an emotionally charged scene that is widely regarded as one of the finest interrogation sequences in television history.' },
      { title: 'Prisoners of War', season: 8, episode: 12, description: 'The series finale. Carrie makes the ultimate sacrifice, becoming a Russian asset to preserve a peace deal while secretly maintaining contact with Saul through coded messages.' }
    ],
    image: { src: '/images/characters/carrie-mathison.jpg', alt: 'Claire Danes as Carrie Mathison', attribution: 'Showtime', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/homeland', url: 'https://www.reddit.com/r/homeland/', platform: 'Reddit', description: 'Main Homeland subreddit with extensive discussion of Carrie\'s character and Claire Danes\' performance' }
      ],
      youtubeChannels: [
        { name: 'Carrie Mathison Character Analysis', url: 'https://www.youtube.com/results?search_query=carrie+mathison+homeland+character+analysis', platform: 'YouTube', description: 'Video essays analyzing Carrie Mathison as a groundbreaking female protagonist in the thriller genre' }
      ],
      twitterAccounts: [
        { name: '@SHO_Homeland', url: 'https://twitter.com/search?q=carrie+mathison+homeland', platform: 'Twitter/X', description: 'Fan discussions about Carrie Mathison and Homeland' }
      ],
      fanSites: [
        { name: 'Homeland Wiki', url: 'https://homeland.fandom.com/', platform: 'Web', description: 'Comprehensive Homeland wiki on Fandom' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 89, engagement: 91, socialActivity: 86, memeVelocity: 78, fanArtDensity: 84, fandomLongevity: 90 },
    faqs: [
      { question: 'Who plays Carrie Mathison in Homeland?', answer: 'Claire Danes plays Carrie Mathison throughout all eight seasons of Homeland (2011-2020). Danes won two Primetime Emmy Awards and two Golden Globe Awards for the role, which is widely considered one of the defining television performances of its era.' },
      { question: 'Does Carrie Mathison have bipolar disorder?', answer: 'Yes, Carrie Mathison has bipolar disorder, which is a central element of her character throughout the series. Her condition is portrayed as both a vulnerability that threatens her career and personal life and a source of hyper-perceptive insight that sometimes allows her to see connections others miss during manic episodes.' },
      { question: 'What happens to Carrie at the end of Homeland?', answer: 'In the series finale, Carrie becomes a Russian intelligence asset living in Moscow in order to prevent a nuclear conflict. However, she secretly continues to funnel intelligence back to Saul through a copy of poetry by Yevgeny Yevtushenko, suggesting that her ultimate loyalty remains with America and her mentor.' },
      { question: 'Is Carrie Mathison based on a real person?', answer: 'Carrie Mathison is not directly based on a single real person, but her character draws on real CIA officers and the broader culture of the intelligence community. The show\'s creators consulted extensively with intelligence professionals, and elements of Carrie\'s story parallel experiences of real female CIA operatives.' }
    ],
    videos: [
      { title: 'Homeland - Carrie Mathison\'s Best Moments', youtubeId: 'KyFmr2hbEKo', description: 'A compilation of Carrie Mathison\'s most intense and defining moments across eight seasons.' },
      { title: 'Carrie Interrogates Brody - Q&A', youtubeId: 'cjDlCJfGpf4', description: 'The iconic interrogation scene from Season 2 where Carrie breaks through Brody\'s defenses.' }
    ],
    relatedCharacterSlugs: ['nicholas-brody', 'saul-berenson', 'peter-quinn'],
    tags: ['protagonist', 'cia', 'bipolar', 'anti-hero', 'strong-female-lead', 'spy']
  },
  {
    slug: 'nicholas-brody',
    name: 'Nicholas Brody',
    showSlug: 'homeland',
    showTitle: 'Homeland',
    actorSlug: 'damian-lewis',
    actorName: 'Damian Lewis',
    seasonsActive: 'Seasons 1–3',
    characterArc: 'Sergeant Nicholas Brody is a United States Marine who returns home after eight years of captivity in Iraq and Afghanistan as a celebrated war hero — but the question of whether he has been turned into a sleeper agent by al-Qaeda terrorist Abu Nazir drives the central mystery of Homeland\'s first season. Brody is a man fractured by trauma: the years of torture and isolation, his complicated relationship with his captor\'s son Issa (whose death in a drone strike becomes the catalyst for Brody\'s radicalization), and the impossible task of reintegrating into a family that has moved on without him. Damian Lewis delivers a masterful performance of contained anguish, playing a man whose loyalties are genuinely uncertain — not only to the audience but, crucially, to himself. Brody does not fit neatly into the categories of hero or villain, patriot or traitor; he is all of these things simultaneously.\n\nBrody\'s trajectory across three seasons takes him from returned POW to suspected terrorist to Congressman to CIA asset to fugitive to, finally, a man executed in Tehran for an assassination he carried out to protect Carrie and serve as a double agent. His relationship with Carrie Mathison — which begins as her surveillance target and evolves into a genuine, devastating love affair — is the emotional engine of the series\' early seasons. Their connection is built on mutual recognition: both are damaged, both are living double lives, and both are capable of extraordinary acts driven by conviction. Brody\'s death in Season 3 was a bold creative decision that transformed Homeland from a Brody-centric thriller into a broader espionage narrative, but his shadow looms over the rest of the series, particularly through his daughter Dana and through Carrie\'s enduring inability to fully move past him.',
    keyEpisodes: [
      { title: 'Pilot', season: 1, episode: 1, description: 'Brody returns from eight years of captivity. Carrie receives intelligence suggesting he has been turned, establishing the show\'s central question.' },
      { title: 'Marine One', season: 1, episode: 12, description: 'The Season 1 finale reveals the full extent of Brody\'s radicalization as he prepares a suicide bombing at a government bunker, only to be talked down by a phone call from his daughter Dana.' },
      { title: 'Q&A', season: 2, episode: 5, description: 'Brody breaks down under Carrie\'s interrogation, confessing his involvement with Abu Nazir in one of the series\' most powerful scenes.' },
      { title: 'The Star', season: 3, episode: 12, description: 'Brody is publicly hanged in Tehran after assassinating an Iranian intelligence chief. Carrie watches helplessly as Brody is executed, and later ensures a star is placed on the CIA Memorial Wall in his honor.' }
    ],
    image: { src: '/images/characters/nicholas-brody.jpg', alt: 'Damian Lewis as Nicholas Brody', attribution: 'Showtime', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/homeland', url: 'https://www.reddit.com/r/homeland/', platform: 'Reddit', description: 'Main Homeland subreddit with ongoing debate about Brody\'s loyalties and legacy' }
      ],
      youtubeChannels: [
        { name: 'Brody - Hero or Traitor?', url: 'https://www.youtube.com/results?search_query=nicholas+brody+homeland+analysis', platform: 'YouTube', description: 'Video essays debating whether Brody was ultimately a patriot or a traitor' }
      ],
      twitterAccounts: [
        { name: '@SHO_Homeland', url: 'https://twitter.com/search?q=nicholas+brody+homeland', platform: 'Twitter/X', description: 'Fan discussions about Brody\'s complex character and Damian Lewis\' performance' }
      ],
      fanSites: [
        { name: 'Homeland Wiki - Brody', url: 'https://homeland.fandom.com/wiki/Nicholas_Brody', platform: 'Web', description: 'Detailed Nicholas Brody character page on the Homeland wiki' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 88, engagement: 90, socialActivity: 85, memeVelocity: 80, fanArtDensity: 83, fandomLongevity: 89 },
    faqs: [
      { question: 'Who plays Nicholas Brody in Homeland?', answer: 'Damian Lewis plays Nicholas Brody in Homeland Seasons 1 through 3. Lewis won a Primetime Emmy Award for Outstanding Lead Actor in a Drama Series for the role in 2012, and his portrayal of the conflicted Marine is considered one of the great performances in the espionage genre.' },
      { question: 'Is Brody a terrorist or a hero?', answer: 'This ambiguity is the central question of Homeland\'s early seasons. Brody was genuinely radicalized during captivity and nearly carried out a suicide bombing. However, he ultimately served as a CIA double agent, assassinated an Iranian intelligence chief at great personal cost, and died for the mission. The show deliberately leaves his legacy open to interpretation.' },
      { question: 'Does Brody die in Homeland?', answer: 'Yes, Nicholas Brody is publicly hanged in Tehran in the Season 3 finale ("The Star") after assassinating Iranian intelligence chief Danesh Akbari. His execution is witnessed by Carrie via satellite feed. Carrie later convinces CIA Director Lockhart to place a star on the CIA Memorial Wall in Brody\'s honor.' },
      { question: 'Why was Brody written off Homeland?', answer: 'Showrunner Alex Gansa has stated that Brody\'s story had reached its natural conclusion by the end of Season 3. Keeping the character alive would have strained credibility, and his death allowed the show to evolve into a broader exploration of intelligence work, running for five more seasons.' }
    ],
    videos: [
      { title: 'Homeland - Brody\'s Confession', youtubeId: 'QnK_yHIhluQ', description: 'The powerful scene where Brody records a video confession explaining his motivations before his planned suicide bombing.' },
      { title: 'Brody\'s Final Scene', youtubeId: 'bWXazVhlyWY', description: 'Nicholas Brody\'s devastating final moments in the Season 3 finale.' }
    ],
    relatedCharacterSlugs: ['carrie-mathison', 'saul-berenson', 'peter-quinn'],
    tags: ['anti-hero', 'complex-villain', 'pow', 'tragic', 'spy', 'marine']
  },
  {
    slug: 'saul-berenson',
    name: 'Saul Berenson',
    showSlug: 'homeland',
    showTitle: 'Homeland',
    actorSlug: 'mandy-patinkin',
    actorName: 'Mandy Patinkin',
    seasonsActive: 'Seasons 1–8',
    characterArc: 'Saul Berenson is the moral center and strategic mastermind of Homeland, a veteran CIA officer whose decades of service have given him unmatched expertise in Middle Eastern affairs and an increasingly weary understanding of the cost of intelligence work. As Carrie Mathison\'s mentor, Saul occupies a role that blends surrogate father, professional ally, and occasional adversary — a man who genuinely loves Carrie while recognizing that her brilliance and her instability make her both the CIA\'s greatest asset and its greatest liability. Mandy Patinkin brings a quiet gravitas to Saul that grounds the show\'s most operatic moments, making him the audience\'s anchor in a world of shifting allegiances and moral ambiguity. His iconic beard, his patience under pressure, and his ability to see the long game when everyone around him is reacting to the crisis of the moment make him one of television\'s most beloved mentor figures.\n\nSaul\'s journey across eight seasons takes him from Division Chief to Acting Director to National Security Advisor, but his arc is less about titles than about the tension between pragmatism and principle. He authorizes morally questionable operations, cultivates assets who are often destroyed by the work, and makes choices that haunt him — yet he never loses his fundamental belief that intelligence work, done properly, can prevent catastrophic violence. His personal life suffers enormously: his marriage to Mira collapses under the weight of his obsession with work, and his discovery that she has been cultivated by a foreign intelligence service is one of the series\' most painful betrayals. The finale places Saul in an impossible position when Carrie threatens to expose his most valuable asset to prevent a nuclear conflict. The final scene — Saul receiving a book from Carrie that contains coded intelligence, realizing that she has sacrificed her life in America to become his secret agent in Moscow — is a devastating testament to the bond between mentor and protege, and to the sacrifices that define a life in espionage.',
    keyEpisodes: [
      { title: 'Pilot', season: 1, episode: 1, description: 'Saul is established as Carrie\'s mentor and a senior CIA officer. His relationship with Carrie and his investigative instincts are immediately central to the narrative.' },
      { title: 'Beirut Is Back', season: 2, episode: 2, description: 'Saul discovers Brody\'s confession video on a hard drive recovered from Beirut, confirming Carrie\'s suspicions and vindicating her instincts.' },
      { title: 'From A to B and Back Again', season: 4, episode: 12, description: 'Saul is captured and used as a bargaining chip by Haqqani\'s forces, testing the limits of his endurance and the CIA\'s willingness to sacrifice its own.' },
      { title: 'Prisoners of War', season: 8, episode: 12, description: 'Saul receives Carrie\'s coded book of intelligence in the series finale, realizing she has become his most valuable asset while living in exile.' }
    ],
    image: { src: '/images/characters/saul-berenson.jpg', alt: 'Mandy Patinkin as Saul Berenson', attribution: 'Showtime', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/homeland', url: 'https://www.reddit.com/r/homeland/', platform: 'Reddit', description: 'Main Homeland subreddit where Saul is consistently praised as one of television\'s greatest mentor characters' }
      ],
      youtubeChannels: [
        { name: 'Saul Berenson - The Heart of Homeland', url: 'https://www.youtube.com/results?search_query=saul+berenson+homeland+analysis', platform: 'YouTube', description: 'Video essays on Mandy Patinkin\'s performance and Saul\'s role as moral compass' }
      ],
      twitterAccounts: [
        { name: '@SHO_Homeland', url: 'https://twitter.com/search?q=saul+berenson+homeland', platform: 'Twitter/X', description: 'Fan appreciation threads for Saul Berenson and Mandy Patinkin' }
      ],
      fanSites: [
        { name: 'Homeland Wiki - Saul', url: 'https://homeland.fandom.com/wiki/Saul_Berenson', platform: 'Web', description: 'Detailed Saul Berenson character page on the Homeland wiki' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 87, engagement: 89, socialActivity: 84, memeVelocity: 76, fanArtDensity: 81, fandomLongevity: 90 },
    faqs: [
      { question: 'Who plays Saul Berenson in Homeland?', answer: 'Mandy Patinkin plays Saul Berenson throughout all eight seasons of Homeland. Patinkin, also known for his roles in The Princess Bride and Criminal Minds, brings a quiet authority and emotional depth to the veteran CIA officer that has made Saul one of television\'s most beloved characters.' },
      { question: 'Is Saul Berenson based on a real person?', answer: 'Saul is not directly based on a single real individual, but he embodies characteristics of real CIA veterans who dedicated their careers to Middle Eastern intelligence. The show\'s creators consulted with intelligence professionals to make Saul\'s tradecraft and institutional knowledge authentic.' },
      { question: 'What is Saul\'s relationship with Carrie?', answer: 'Saul serves as Carrie\'s mentor, surrogate father figure, and the person who most believes in her abilities despite her mental health challenges. Their relationship is the emotional backbone of the series, enduring betrayals, professional conflicts, and ultimately culminating in Carrie\'s sacrifice to become Saul\'s secret agent in the series finale.' },
      { question: 'Does Saul become CIA Director?', answer: 'Saul serves as Acting Director of the CIA in Season 4 and later becomes National Security Advisor. While he wields significant power throughout the series, his influence comes more from his institutional knowledge and personal relationships than from formal titles.' }
    ],
    videos: [
      { title: 'Saul Berenson - Best Moments', youtubeId: 'D9rl1hGXnKM', description: 'A compilation of Saul Berenson\'s most powerful scenes across eight seasons of Homeland.' },
      { title: 'Homeland Finale - Saul\'s Realization', youtubeId: 'dHb3HjRirYM', description: 'The emotionally devastating final scene where Saul discovers Carrie\'s coded message in the book of poetry.' }
    ],
    relatedCharacterSlugs: ['carrie-mathison', 'nicholas-brody', 'peter-quinn'],
    tags: ['mentor', 'cia', 'moral-compass', 'fan-favorite', 'strategist', 'patriarch']
  },
  {
    slug: 'peter-quinn',
    name: 'Peter Quinn',
    showSlug: 'homeland',
    showTitle: 'Homeland',
    actorSlug: 'rupert-friend',
    actorName: 'Rupert Friend',
    seasonsActive: 'Seasons 2–6',
    characterArc: 'Peter Quinn enters Homeland as a cold, efficient black ops specialist assigned to the Brody task force in Season 2, and over the course of five seasons transforms into the show\'s most tragic figure — a man of extraordinary skill and hidden sensitivity who is systematically destroyed by the system he serves. Quinn\'s introduction is deliberately misleading: he appears to be a pure operative, a man capable of killing without hesitation, and his initial mission includes orders to assassinate Brody. But layers are peeled back to reveal a deeply lonely individual who enlisted young, has no family or personal life to speak of, and has spent his entire adult existence as a weapon pointed at whoever his handlers designate. Rupert Friend\'s understated performance captures both the lethal competence and the quiet desperation of a man who knows he has been used up by his country.\n\nQuinn\'s unrequited love for Carrie Mathison provides the emotional through-line of his arc. He sees her clearly — her brilliance, her recklessness, her capacity for destruction — and loves her anyway, in a way that is never fully reciprocated. His letter to her in Season 4, written when he believes he is about to die on a mission, is one of the series\' most moving moments. But Quinn\'s physical and psychological destruction accelerates across his final seasons: he is exposed to sarin gas in a terrorist attack in Season 5, suffers severe brain damage, and spends much of Season 6 as a paranoid, diminished version of himself, struggling with aphasia and PTSD while stumbling onto a genuine conspiracy. His death in the Season 6 finale — sacrificing himself to protect Carrie\'s motorcade by driving into an ambush — is both heroic and devastatingly inevitable. Quinn dies as he lived: protecting someone who could never give him what he truly wanted, in service to a system that never valued what it cost him.',
    keyEpisodes: [
      { title: 'A Red Wheelbarrow', season: 2, episode: 7, description: 'Quinn is introduced as a black ops assassin assigned to the Brody task force. His lethal capabilities and mysterious background are established.' },
      { title: '13 Hours in Islamabad', season: 4, episode: 10, description: 'Quinn writes his farewell letter to Carrie before a dangerous mission, revealing his hidden emotional depth and unspoken love.' },
      { title: 'A False Glimmer', season: 5, episode: 12, description: 'Quinn is exposed to sarin gas in a Berlin terrorist attack, leaving him in a medically induced coma and beginning his physical and cognitive decline.' },
      { title: 'America First', season: 6, episode: 12, description: 'Quinn sacrifices his life to protect Carrie by driving into an armed ambush, dying in the wreckage as Carrie screams his name.' }
    ],
    image: { src: '/images/characters/peter-quinn.jpg', alt: 'Rupert Friend as Peter Quinn', attribution: 'Showtime', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/homeland', url: 'https://www.reddit.com/r/homeland/', platform: 'Reddit', description: 'Main Homeland subreddit where Quinn is one of the most discussed and mourned characters' },
        { name: 'r/PeterQuinn', url: 'https://www.reddit.com/r/PeterQuinn/', platform: 'Reddit', description: 'Fan community dedicated to Peter Quinn and Rupert Friend\'s performance' }
      ],
      youtubeChannels: [
        { name: 'Peter Quinn - The Tragedy of a Soldier', url: 'https://www.youtube.com/results?search_query=peter+quinn+homeland+character+analysis', platform: 'YouTube', description: 'Video essays exploring Quinn\'s arc as Homeland\'s most tragic character' }
      ],
      twitterAccounts: [
        { name: '@SHO_Homeland', url: 'https://twitter.com/search?q=peter+quinn+homeland', platform: 'Twitter/X', description: 'Fan tributes and discussions about Peter Quinn\'s sacrifice and character arc' }
      ],
      fanSites: [
        { name: 'Homeland Wiki - Quinn', url: 'https://homeland.fandom.com/wiki/Peter_Quinn', platform: 'Web', description: 'Comprehensive Peter Quinn character page on the Homeland wiki' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 86, engagement: 88, socialActivity: 84, memeVelocity: 77, fanArtDensity: 85, fandomLongevity: 87 },
    faqs: [
      { question: 'Who plays Peter Quinn in Homeland?', answer: 'Rupert Friend plays Peter Quinn in Homeland Seasons 2 through 6. Friend\'s performance transformed Quinn from what could have been a generic action character into one of the show\'s most emotionally resonant and beloved figures.' },
      { question: 'Does Peter Quinn die in Homeland?', answer: 'Yes, Peter Quinn dies in the Season 6 finale ("America First"). He sacrifices himself by driving into an armed ambush to protect a motorcade carrying the President-elect, which Carrie is also in. His death is considered one of the most emotionally devastating moments in the series.' },
      { question: 'What happens to Quinn after the sarin attack?', answer: 'After being exposed to sarin gas in the Season 5 finale, Quinn suffers severe brain damage that causes motor impairment, aphasia (difficulty with speech), and significant personality changes. Despite Carrie\'s efforts to help him recover in Season 6, he never fully regains his former abilities, making his final sacrifice all the more poignant.' },
      { question: 'Does Quinn love Carrie?', answer: 'Yes, Quinn\'s love for Carrie is a major element of his character arc. His farewell letter in Season 4, his protective instincts, and his ultimate sacrifice all point to a deep, unreciprocated love. Carrie cares for Quinn deeply but is never able to return his feelings in the way he hopes, adding to the tragedy of his character.' }
    ],
    videos: [
      { title: 'Peter Quinn\'s Letter to Carrie', youtubeId: '3PJwwfqxFfg', description: 'The emotional scene where Quinn\'s farewell letter to Carrie is read aloud, revealing his true feelings.' },
      { title: 'Peter Quinn - Final Scene', youtubeId: 'fZo9_AZPUYI', description: 'Quinn\'s heroic and heartbreaking sacrifice in the Season 6 finale of Homeland.' }
    ],
    relatedCharacterSlugs: ['carrie-mathison', 'nicholas-brody', 'saul-berenson'],
    tags: ['tragic', 'black-ops', 'fan-favorite', 'sacrifice', 'soldier', 'unrequited-love']
  }
];

module.exports = { trueDetectiveCharacters, blackMirrorCharacters, homelandCharacters };
