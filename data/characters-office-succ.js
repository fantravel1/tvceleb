// The Office (US) and Succession Characters
const officeCharacters = [
  {
    slug: 'michael-scott',
    name: 'Michael Scott',
    showSlug: 'the-office',
    showTitle: 'The Office (US)',
    actorSlug: 'steve-carell',
    actorName: 'Steve Carell',
    seasonsActive: 'Seasons 1–7',
    characterArc: 'Michael Scott is the regional manager of Dunder Mifflin\'s Scranton branch, a man whose desperate need to be loved by everyone around him drives both the comedy and the heart of the show. His management style is a chaotic blend of inappropriate jokes, misguided motivational speeches, and occasional flashes of genuine brilliance that somehow keep the branch afloat as one of the company\'s most profitable locations.\n\nBeneath the cringe-worthy antics lies a deeply lonely man. Michael\'s childhood, marked by an absent father and a desire for belonging, explains his compulsive need to turn his workplace into a surrogate family. His relationships — from the toxic Jan Levinson saga to the sweet romance with Holly Flax — chart his slow emotional maturation over seven seasons.\n\nMichael\'s genius is that he is simultaneously the worst boss imaginable and the best. He creates HR nightmares on a daily basis, yet his employees gradually come to genuinely care for him. Moments like his response to the CPR training dummy, Prison Mike, or his declaration that he is Beyonce always reveal a man who is trying his absolute hardest, even when his hardest is spectacularly misguided.\n\nHis departure in Season 7, when he quietly removes his microphone before boarding a plane to Colorado to be with Holly, remains one of the most emotionally devastating moments in sitcom history. The fact that he returns for the finale\'s final scene — delivering one last "That\'s what she said" — is the perfect send-off for television\'s most lovably incompetent manager.',
    keyEpisodes: [
      { title: 'The Dundies', season: 2, episode: 1, description: 'Michael hosts his annual awards ceremony at a Chili\'s, showcasing both his cringe factor and his sincere desire to celebrate his employees.' },
      { title: 'Casino Night', season: 2, episode: 22, description: 'Michael juggles two dates while Jim finally confesses his feelings to Pam in one of the series\' most pivotal episodes.' },
      { title: 'Dinner Party', season: 4, episode: 13, description: 'Michael and Jan host the office for an excruciatingly awkward dinner party, widely considered one of the greatest comedy episodes ever aired.' },
      { title: 'Stress Relief', season: 5, episode: 14, description: 'After Dwight\'s fire drill causes chaos, Michael screens his own movie and the office roasts him in a legendary two-part episode.' },
      { title: 'Goodbye, Michael', season: 7, episode: 22, description: 'Michael Scott\'s emotional farewell to Dunder Mifflin as he leaves Scranton to start a new life with Holly Flax in Colorado.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Steve_Carell_-_December_2014_%28cropped%29.jpg/440px-Steve_Carell_-_December_2014_%28cropped%29.jpg', alt: 'Steve Carell, who portrays Michael Scott in The Office', attribution: 'Photo via Wikimedia Commons, CC BY-SA 2.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/DunderMifflin', url: 'https://www.reddit.com/r/DunderMifflin/', platform: 'Reddit', description: 'The main subreddit for The Office with 7M+ members' },
        { name: 'r/MichaelScott', url: 'https://www.reddit.com/r/MichaelScott/', platform: 'Reddit', description: 'Subreddit dedicated to Michael Scott quotes and moments' }
      ],
      youtubeChannels: [
        { name: 'The Office - Michael Scott Best Moments', url: 'https://www.youtube.com/results?search_query=michael+scott+best+moments', platform: 'YouTube', description: 'Compilations of Michael Scott\'s most iconic scenes' }
      ],
      twitterAccounts: [
        { name: '@theoaborern', url: 'https://twitter.com/theofficetv', platform: 'Twitter/X', description: 'Official The Office Twitter account' }
      ],
      fanSites: [
        { name: 'Dunderpedia', url: 'https://theoffice.fandom.com/', platform: 'Web', description: 'Comprehensive The Office wiki on Fandom' }
      ],
      instagramAccounts: [
        { name: '@theoffice', url: 'https://www.instagram.com/theoffice/', platform: 'Instagram', description: 'Official The Office Instagram page' }
      ],
      tiktokCreators: [
        { name: 'The Office Clips', url: 'https://www.tiktok.com/tag/theoffice', platform: 'TikTok', description: 'Fan clips and edits on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 94, engagement: 96, socialActivity: 93, memeVelocity: 98, fanArtDensity: 85, fandomLongevity: 97 },
    faqs: [
      { question: 'Who plays Michael Scott in The Office?', answer: 'Steve Carell plays Michael Scott in The Office (US). Carell portrayed the character for seven seasons (2005-2011) and received a Golden Globe Award for Best Actor in a Television Series Musical or Comedy in 2006 for the role.' },
      { question: 'Why did Steve Carell leave The Office?', answer: 'Steve Carell left The Office after Season 7 in 2011. While the exact reasons involved contract negotiations and a desire to pursue film roles, Carell has said he would have stayed if asked in the right way. His departure in "Goodbye, Michael" (Season 7, Episode 22) is one of the most emotional moments in the series.' },
      { question: 'What is Michael Scott\'s most famous catchphrase?', answer: 'Michael Scott\'s most famous catchphrase is "That\'s what she said," an innuendo-based joke he deploys at every possible (and impossible) opportunity. Other iconic lines include "I\'m not superstitious, but I am a little stitious" and "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me."' },
      { question: 'Does Michael Scott return in The Office finale?', answer: 'Yes, Michael Scott makes a surprise return in the series finale (Season 9, Episode 23). He appears at Dwight\'s wedding, delivers one final "That\'s what she said," and reveals he has children with Holly. The cameo was kept secret from audiences until air.' },
      { question: 'Is Michael Scott based on David Brent?', answer: 'Yes, Michael Scott is the American adaptation of David Brent, played by Ricky Gervais in the original UK version of The Office. While the first season closely mirrors the British original, Steve Carell made the character distinctly his own from Season 2 onward, adding more warmth and vulnerability to the role.' }
    ],
    videos: [
      { title: 'Michael Scott - Best Moments', youtubeId: 'Vmb1tqYqyII', description: 'A compilation of Michael Scott\'s funniest and most memorable moments from The Office.' },
      { title: 'Goodbye, Michael - Final Scene', youtubeId: 'Y5GEgebPSj4', description: 'Michael Scott\'s emotional departure from Dunder Mifflin Scranton.' }
    ],
    relatedCharacterSlugs: ['dwight-schrute', 'jim-halpert', 'pam-beesly', 'andy-bernard', 'ryan-howard'],
    tags: ['protagonist', 'iconic', 'comic-lead', 'fan-favorite']
  },
  {
    slug: 'dwight-schrute',
    name: 'Dwight Schrute',
    showSlug: 'the-office',
    showTitle: 'The Office (US)',
    actorSlug: 'rainn-wilson',
    actorName: 'Rainn Wilson',
    seasonsActive: 'Seasons 1–9',
    characterArc: 'Dwight Kurt Schrute III is the assistant to the regional manager (never "assistant regional manager") at Dunder Mifflin Scranton, a beet farmer, volunteer sheriff\'s deputy, and the most intensely dedicated paper salesman in television history. His unwavering loyalty to Michael Scott, combative rivalry with Jim Halpert, and bizarre personal life make him one of the most original comic characters ever created.\n\nDwight\'s worldview is shaped by his upbringing on Schrute Farms, a Pennsylvania Dutch beet farm steeped in old-world traditions and survivalist philosophy. He approaches every aspect of life — from sales calls to fire safety to choosing a health care plan — with the same deadly seriousness, creating an endless stream of comedy through the gap between his intensity and the mundane reality of office work.\n\nHis relationship with Angela Martin is one of the show\'s longest-running storylines, evolving from a secret affair conducted in the warehouse to a genuine love story. Dwight\'s discovery that Philip is his son and his eventual marriage to Angela in the series finale represent the emotional payoff of nine seasons of character development.\n\nBy the finale, Dwight achieves his lifelong dream of becoming regional manager, and the show wisely frames this not as a joke but as a genuine triumph. The man who spent years being pranked, overlooked, and underestimated finally gets the recognition he always deserved, surrounded by people who have grown to truly love him.',
    keyEpisodes: [
      { title: 'The Injury', season: 2, episode: 12, description: 'Dwight suffers a concussion and becomes uncharacteristically kind, while Michael burns his foot on a George Foreman grill.' },
      { title: 'The Duel', season: 5, episode: 12, description: 'Dwight challenges Andy to a duel over Angela in the Dunder Mifflin parking lot.' },
      { title: 'Stress Relief', season: 5, episode: 14, description: 'Dwight\'s simulated fire drill causes mass panic and becomes one of the show\'s most iconic cold opens.' },
      { title: 'Finale', season: 9, episode: 23, description: 'Dwight becomes regional manager, marries Angela, and is surrounded by all his returning friends at his wedding.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Rainn_Wilson_2012.jpg/440px-Rainn_Wilson_2012.jpg', alt: 'Rainn Wilson, who portrays Dwight Schrute in The Office', attribution: 'Photo via Wikimedia Commons, CC BY-SA 2.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/DunderMifflin', url: 'https://www.reddit.com/r/DunderMifflin/', platform: 'Reddit', description: 'The main subreddit for The Office' },
        { name: 'r/DwightSchrute', url: 'https://www.reddit.com/r/DwightSchrute/', platform: 'Reddit', description: 'Fan community dedicated to Dwight Schrute' }
      ],
      youtubeChannels: [
        { name: 'Dwight Schrute Best Moments', url: 'https://www.youtube.com/results?search_query=dwight+schrute+best+moments', platform: 'YouTube', description: 'Compilations of Dwight\'s most outrageous scenes' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Dunderpedia - Dwight', url: 'https://theoffice.fandom.com/wiki/Dwight_Schrute', platform: 'Web', description: 'Dwight Schrute\'s full wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 92, engagement: 94, socialActivity: 90, memeVelocity: 96, fanArtDensity: 88, fandomLongevity: 95 },
    faqs: [
      { question: 'Who plays Dwight Schrute in The Office?', answer: 'Rainn Wilson plays Dwight Schrute in The Office (US). Wilson portrayed the character across all nine seasons of the show (2005-2013) and received three consecutive Emmy nominations for Outstanding Supporting Actor in a Comedy Series.' },
      { question: 'What is Dwight Schrute\'s job title?', answer: 'Dwight Schrute\'s official job title is Assistant to the Regional Manager, though he perpetually insists on being called Assistant Regional Manager. He is also the top salesman at Dunder Mifflin Scranton and eventually becomes Regional Manager in the series finale.' },
      { question: 'What is Schrute Farms?', answer: 'Schrute Farms is Dwight\'s family beet farm in rural Pennsylvania, which he also operates as an agritourism bed and breakfast. The farm has been in the Schrute family for generations and reflects Dwight\'s Pennsylvania Dutch heritage and survivalist lifestyle.' },
      { question: 'Does Dwight Schrute become regional manager?', answer: 'Yes, Dwight finally achieves his lifelong dream of becoming regional manager in the series finale (Season 9, Episode 23). He is appointed to the position after Andy Bernard\'s departure, fulfilling a character arc that spanned the entire run of the show.' }
    ],
    videos: [
      { title: 'Dwight Schrute - Fire Drill Cold Open', youtubeId: 'gO8N3L_aERg', description: 'The legendary fire drill cold open from Stress Relief.' }
    ],
    relatedCharacterSlugs: ['michael-scott', 'jim-halpert', 'pam-beesly', 'andy-bernard', 'ryan-howard'],
    tags: ['fan-favorite', 'iconic', 'comic-relief', 'deuteragonist']
  },
  {
    slug: 'jim-halpert',
    name: 'Jim Halpert',
    showSlug: 'the-office',
    showTitle: 'The Office (US)',
    actorSlug: 'john-krasinski',
    actorName: 'John Krasinski',
    seasonsActive: 'Seasons 1–9',
    characterArc: 'Jim Halpert is the everyman of Dunder Mifflin Scranton — a charming, underachieving salesman who serves as the audience\'s surrogate, reacting to the absurdity around him with trademark glances at the camera. His elaborate pranks on Dwight Schrute provide some of the show\'s most beloved running gags, from encasing his stapler in Jell-O to impersonating him with a $4 costume.\n\nJim\'s central storyline is his slow-burn romance with receptionist Pam Beesly, which evolved from one of television\'s most agonizing will-they-won\'t-they dynamics into a genuine, lived-in marriage. Their relationship anchors the show emotionally, providing warmth and sincerity to balance the broader comedy. His confession at Casino Night and proposal at the gas station are landmark moments in sitcom romance.\n\nIn later seasons, Jim\'s character deepens as he grapples with ambition beyond Dunder Mifflin. His co-founding of the sports marketing startup Athlead creates real tension in his marriage, challenging the fairy-tale narrative and revealing that even the show\'s golden couple must work to stay together.\n\nJim\'s arc ultimately affirms that choosing family and relationships over career ambition is not settling — it is, for him, the bravest choice. His final talking head, where he looks at Pam and says she is everything, encapsulates the show\'s thesis that extraordinary meaning can be found in ordinary life.',
    keyEpisodes: [
      { title: 'Casino Night', season: 2, episode: 22, description: 'Jim confesses his love to Pam and they share their first kiss, changing the trajectory of both their lives.' },
      { title: 'Gay Witch Hunt', season: 3, episode: 1, description: 'Jim transfers to the Stamford branch, attempting to move on from Pam, establishing new dynamics with Karen Filippelli.' },
      { title: 'Weight Loss', season: 5, episode: 1, description: 'Jim proposes to Pam at a gas station between Scranton and New York in a perfectly understated moment.' },
      { title: 'Niagara', season: 6, episode: 5, description: 'Jim and Pam\'s wedding episode, featuring their private ceremony on the Maid of the Mist boat.' },
      { title: 'A.A.R.M.', season: 9, episode: 22, description: 'Jim creates a retrospective video of his relationship with Pam, and she watches the documentary footage for the first time.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/John_Krasinski_2008.jpg/440px-John_Krasinski_2008.jpg', alt: 'John Krasinski, who portrays Jim Halpert in The Office', attribution: 'Photo via Wikimedia Commons, CC BY 2.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/DunderMifflin', url: 'https://www.reddit.com/r/DunderMifflin/', platform: 'Reddit', description: 'The main subreddit for The Office' }
      ],
      youtubeChannels: [
        { name: 'Jim\'s Pranks on Dwight', url: 'https://www.youtube.com/results?search_query=jim+pranks+dwight+the+office', platform: 'YouTube', description: 'Compilations of Jim\'s elaborate pranks on Dwight' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Dunderpedia - Jim', url: 'https://theoffice.fandom.com/wiki/Jim_Halpert', platform: 'Web', description: 'Jim Halpert\'s full wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 88, engagement: 90, socialActivity: 85, memeVelocity: 89, fanArtDensity: 80, fandomLongevity: 93 },
    faqs: [
      { question: 'Who plays Jim Halpert in The Office?', answer: 'John Krasinski plays Jim Halpert in The Office (US). The role was Krasinski\'s breakout performance, and he has since become a major film director and actor, known for A Quiet Place and the Jack Ryan series.' },
      { question: 'When do Jim and Pam get together?', answer: 'Jim and Pam officially begin dating at the start of Season 4, after Jim\'s confession in the Season 2 finale and his return from the Stamford branch in Season 3. They get engaged in Season 5 and marry in Season 6.' },
      { question: 'What is Jim Halpert\'s best prank on Dwight?', answer: 'Fan favorites include the stapler in Jell-O (Pilot), Jim impersonating Dwight with glasses and a mustard shirt ("Product Recall," Season 3, Episode 21), and the "Asian Jim" cold open ("Andy\'s Ancestry," Season 9, Episode 3) where Randall Park pretends to be Jim.' },
      { question: 'What is Athlead in The Office?', answer: 'Athlead (later renamed Athleap) is a sports marketing startup that Jim co-founds in Season 9. His secret investment and frequent trips to Philadelphia create significant marital tension with Pam, forming the central dramatic arc of the final season.' }
    ],
    videos: [
      { title: 'Jim and Pam - Love Story', youtubeId: 'Kj6JlAsWlJM', description: 'A retrospective of Jim and Pam\'s relationship throughout The Office.' }
    ],
    relatedCharacterSlugs: ['pam-beesly', 'dwight-schrute', 'michael-scott', 'andy-bernard', 'ryan-howard'],
    tags: ['protagonist', 'everyman', 'romantic-lead', 'fan-favorite']
  },
  {
    slug: 'pam-beesly',
    name: 'Pam Beesly',
    showSlug: 'the-office',
    showTitle: 'The Office (US)',
    actorSlug: 'jenna-fischer',
    actorName: 'Jenna Fischer',
    seasonsActive: 'Seasons 1–9',
    characterArc: 'Pam Beesly begins the series as the quietly resigned receptionist at Dunder Mifflin Scranton, engaged to warehouse worker Roy Anderson and harboring secret artistic ambitions she is too afraid to pursue. Her journey from wallflower to a woman who stands up for herself is one of the show\'s most rewarding character arcs.\n\nPam\'s evolution is gradual and realistic. Her walk across the coals at the Beach Day episode, where she publicly admits her feelings and declares she is done being afraid, is a watershed moment. She leaves Roy, pursues art school in New York (even though she fails), becomes a saleswoman, and eventually invents the role of Office Administrator — each step a small but meaningful act of self-determination.\n\nHer relationship with Jim Halpert grounds the entire series. Their courtship is built on stolen glances, inside jokes, and a deep friendship that predates romance. As a married couple, they face real challenges — Jim\'s startup ambitions, the pressures of parenting, and the question of whether Scranton is big enough for both their dreams.\n\nBy the series finale, Pam has fully come into her own. Her decision to sell the house and support Jim\'s career in Austin is not a sacrifice but a choice made from a position of strength by a woman who finally knows her own worth.',
    keyEpisodes: [
      { title: 'Casino Night', season: 2, episode: 22, description: 'Jim confesses his feelings and kisses Pam, forcing her to confront her unhappy engagement to Roy.' },
      { title: 'Beach Games', season: 3, episode: 23, description: 'Pam walks across hot coals and delivers an impassioned speech about being done with being timid.' },
      { title: 'Niagara', season: 6, episode: 5, description: 'Pam and Jim\'s wedding at Niagara Falls, culminating in their private ceremony on the boat.' },
      { title: 'Finale', season: 9, episode: 23, description: 'Pam reveals she sold the house so they can move to Austin, and reflects on finding meaning in ordinary life.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Jenna_Fischer_2008.jpg/440px-Jenna_Fischer_2008.jpg', alt: 'Jenna Fischer, who portrays Pam Beesly in The Office', attribution: 'Photo via Wikimedia Commons, CC BY 2.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/DunderMifflin', url: 'https://www.reddit.com/r/DunderMifflin/', platform: 'Reddit', description: 'The main subreddit for The Office' }
      ],
      youtubeChannels: [
        { name: 'Office Ladies Podcast', url: 'https://www.youtube.com/results?search_query=office+ladies+podcast', platform: 'YouTube', description: 'Jenna Fischer and Angela Kinsey\'s rewatch podcast' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Dunderpedia - Pam', url: 'https://theoffice.fandom.com/wiki/Pam_Beesly', platform: 'Web', description: 'Pam Beesly\'s full wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 86, engagement: 88, socialActivity: 82, memeVelocity: 84, fanArtDensity: 83, fandomLongevity: 92 },
    faqs: [
      { question: 'Who plays Pam Beesly in The Office?', answer: 'Jenna Fischer plays Pam Beesly (later Pam Halpert) in The Office (US). Fischer also co-hosts the "Office Ladies" podcast with Angela Kinsey, where they rewatch and discuss each episode of the series.' },
      { question: 'When do Pam and Jim get married?', answer: 'Pam and Jim get married in Season 6, Episodes 4-5 ("Niagara"). After chaos disrupts their planned ceremony at Niagara Falls, they sneak away and have a private wedding on the Maid of the Mist boat.' },
      { question: 'Does Pam Beesly become an artist?', answer: 'Pam attends the Pratt Institute in New York for art school in Season 5 but fails a course and returns to Scranton. While she does not become a professional artist, her artistic talent is referenced throughout the series, and she paints a mural for the office building in Season 9.' },
      { question: 'What is Pam Beesly\'s job at Dunder Mifflin?', answer: 'Pam starts as the receptionist at Dunder Mifflin Scranton. She later becomes a saleswoman in Season 5 and then creates the role of Office Administrator for herself in Season 6, eventually holding that position through the rest of the series.' }
    ],
    videos: [
      { title: 'Pam Beesly\'s Character Evolution', youtubeId: 'kSTOQ5Y3UJo', description: 'A video essay on Pam\'s growth from timid receptionist to confident woman.' }
    ],
    relatedCharacterSlugs: ['jim-halpert', 'michael-scott', 'dwight-schrute', 'andy-bernard', 'ryan-howard'],
    tags: ['protagonist', 'romantic-lead', 'character-growth', 'fan-favorite']
  },
  {
    slug: 'andy-bernard',
    name: 'Andy Bernard',
    showSlug: 'the-office',
    showTitle: 'The Office (US)',
    actorSlug: 'ed-helms',
    actorName: 'Ed Helms',
    seasonsActive: 'Seasons 3–9',
    characterArc: 'Andy Bernard arrives at Dunder Mifflin Scranton as a transfer from the Stamford branch — a preppy, anger-prone Cornell graduate who desperately wants to be liked and is willing to suck up to anyone in authority to get ahead. His early appearances are defined by his explosive temper (culminating in punching a hole in the wall) and his relentless brown-nosing.\n\nAfter anger management, Andy returns as a softer, more sympathetic figure. His pursuit of Angela, obliviousness to her affair with Dwight, and ill-fated engagement provide some of the show\'s most painfully funny storylines. His musical talents — particularly his a cappella singing and banjo playing — become endearing character traits rather than mere annoyances.\n\nAndy\'s appointment as regional manager in Season 8 represents his peak, but Season 9 sees a controversial character regression. His extended absence on a boat trip, his neglect of Erin, and his increasingly selfish behavior alienated many fans who had grown to root for him.\n\nHis finale arc redeems him somewhat, as Andy achieves viral fame through his Cornell audition video and reflects on the nature of happiness with the poignant observation: "I wish there was a way to know you\'re in the good old days before you\'ve actually left them." This line has become one of the most quoted from the entire series.',
    keyEpisodes: [
      { title: 'The Return', season: 3, episode: 14, description: 'Andy punches a hole in the wall after Jim\'s prank and is sent to anger management training.' },
      { title: 'Andy\'s Play', season: 7, episode: 3, description: 'Andy stars in a community theater production of Sweeney Todd, revealing his genuine passion for performing.' },
      { title: 'Garden Party', season: 8, episode: 4, description: 'Andy throws an elaborate garden party at Schrute Farms to impress his emotionally distant father.' },
      { title: 'Finale', season: 9, episode: 23, description: 'Andy delivers his famous "good old days" line and finds unexpected fame and fulfillment.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ed_Helms_2009.jpg/440px-Ed_Helms_2009.jpg', alt: 'Ed Helms, who portrays Andy Bernard in The Office', attribution: 'Photo via Wikimedia Commons, CC BY 2.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/DunderMifflin', url: 'https://www.reddit.com/r/DunderMifflin/', platform: 'Reddit', description: 'The main subreddit for The Office' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'Dunderpedia - Andy', url: 'https://theoffice.fandom.com/wiki/Andy_Bernard', platform: 'Web', description: 'Andy Bernard\'s full wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 76, engagement: 78, socialActivity: 72, memeVelocity: 80, fanArtDensity: 65, fandomLongevity: 82 },
    faqs: [
      { question: 'Who plays Andy Bernard in The Office?', answer: 'Ed Helms plays Andy Bernard in The Office (US). Helms joined the cast in Season 3 and became a series regular through the show\'s conclusion in Season 9. He is also known for his role as Stu Price in The Hangover trilogy.' },
      { question: 'Did Andy Bernard go to Cornell?', answer: 'Yes, Andy Bernard is a proud Cornell University alumnus and rarely lets anyone forget it. His alma mater is a running joke throughout the series, as he constantly name-drops Cornell in conversations and even performs an a cappella version of the Cornell fight song.' },
      { question: 'What is Andy Bernard\'s "good old days" quote?', answer: 'In the series finale, Andy says: "I wish there was a way to know you\'re in the good old days before you\'ve actually left them." This quote has become one of the most widely shared and referenced lines from The Office.' },
      { question: 'Why did Andy Bernard become manager?', answer: 'Andy becomes regional manager in Season 8 after Deangelo Vickers\' departure and Robert California\'s promotion to CEO. He is chosen largely due to his enthusiasm and people-pleasing nature, though his tenure is marked by inconsistency.' }
    ],
    videos: [],
    relatedCharacterSlugs: ['michael-scott', 'dwight-schrute', 'jim-halpert', 'pam-beesly', 'ryan-howard'],
    tags: ['comic-relief', 'manager', 'complex', 'polarizing']
  },
  {
    slug: 'ryan-howard',
    name: 'Ryan Howard',
    showSlug: 'the-office',
    showTitle: 'The Office (US)',
    actorSlug: 'bj-novak',
    actorName: 'B.J. Novak',
    seasonsActive: 'Seasons 1–9',
    characterArc: 'Ryan Howard begins The Office as the new temp — a quiet, handsome business school student who just wants to get through his assignment at Dunder Mifflin without getting pulled into the orbit of Michael Scott\'s neediness. He quickly becomes an object of Michael\'s hero worship and Kelly Kapoor\'s relentless romantic pursuit, neither of which he wants any part of.\n\nRyan\'s trajectory is one of the show\'s sharpest satires. After being promoted to Vice President of Northeast Sales at Dunder Mifflin\'s corporate office, he transforms into a Silicon Valley wannabe, pushing a half-baked website initiative and developing a massive ego. His arrest for fraud and subsequent fall from grace is both comeuppance and commentary on corporate culture\'s obsession with youth and innovation.\n\nPost-corporate Ryan cycles through reinventions — hipster, WUPHF.com entrepreneur, pretentious philosopher — each one a paper-thin persona masking deep insecurity. His on-again, off-again relationship with Kelly Kapoor is one of the show\'s most dysfunctional and darkly funny pairings, with both characters bringing out each other\'s worst qualities.\n\nIn the finale, Ryan abandons his baby with Ravi and runs off with Kelly, a perfectly chaotic ending for a character who never truly grew up. His journey from temp to executive to temp again is the show\'s most cynical character arc, a reminder that not everyone learns from their mistakes.',
    keyEpisodes: [
      { title: 'The Fire', season: 2, episode: 4, description: 'Ryan accidentally starts a fire with a cheese pita, earning the nickname "fire guy" and the office\'s eternal mockery.' },
      { title: 'Dunder Mifflin Infinity', season: 4, episode: 3, description: 'Ryan returns as corporate VP with a new look and a plan to revolutionize Dunder Mifflin with technology.' },
      { title: 'Broke', season: 5, episode: 25, description: 'Ryan works alongside Michael at the Michael Scott Paper Company, humbled after his corporate downfall.' },
      { title: 'Finale', season: 9, episode: 23, description: 'Ryan abandons his baby and runs away with Kelly in a fittingly chaotic conclusion to his character arc.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/B.J._Novak_2012_%28cropped%29.jpg/440px-B.J._Novak_2012_%28cropped%29.jpg', alt: 'B.J. Novak, who portrays Ryan Howard in The Office', attribution: 'Photo via Wikimedia Commons, CC BY-SA 2.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/DunderMifflin', url: 'https://www.reddit.com/r/DunderMifflin/', platform: 'Reddit', description: 'The main subreddit for The Office' }
      ],
      youtubeChannels: [],
      twitterAccounts: [],
      fanSites: [
        { name: 'Dunderpedia - Ryan', url: 'https://theoffice.fandom.com/wiki/Ryan_Howard', platform: 'Web', description: 'Ryan Howard\'s full wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 71, engagement: 74, socialActivity: 68, memeVelocity: 77, fanArtDensity: 58, fandomLongevity: 78 },
    faqs: [
      { question: 'Who plays Ryan Howard in The Office?', answer: 'B.J. Novak plays Ryan Howard in The Office (US). Novak was also a writer, executive producer, and occasional director on the show. He created the character alongside the writing staff and shaped much of the show\'s humor behind the scenes.' },
      { question: 'What is WUPHF.com in The Office?', answer: 'WUPHF.com is Ryan Howard\'s startup idea from Season 7 — a service that sends a message simultaneously to your phone, email, Facebook, Twitter, and fax machine. The absurd concept satirizes tech startup culture, and Ryan convinces several coworkers to invest before the venture predictably fails.' },
      { question: 'Why does Michael Scott love Ryan?', answer: 'Michael Scott has an inexplicable infatuation with Ryan from the moment he arrives as a temp. Michael sees Ryan as the cool, young, attractive friend he always wanted, frequently making inappropriate comments about his appearance and desperately trying to earn Ryan\'s approval.' },
      { question: 'Does Ryan Howard go to jail?', answer: 'Ryan is arrested for fraud in the Season 4 finale ("Goodbye, Toby") after his Dunder Mifflin Infinity website initiative involved misleading sales data. He avoids significant jail time and eventually returns to the Scranton branch in a diminished role.' }
    ],
    videos: [],
    relatedCharacterSlugs: ['michael-scott', 'dwight-schrute', 'jim-halpert', 'pam-beesly', 'andy-bernard'],
    tags: ['recurring', 'anti-hero', 'satirical', 'writer-actor']
  }
];

const successionCharacters = [
  {
    slug: 'kendall-roy',
    name: 'Kendall Roy',
    showSlug: 'succession',
    showTitle: 'Succession',
    actorSlug: 'jeremy-strong',
    actorName: 'Jeremy Strong',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Kendall Roy is the second-eldest son of media mogul Logan Roy and the heir apparent to Waystar Royco who can never quite close the deal. His story is a Shakespearean tragedy of a man perpetually reaching for a crown that keeps being snatched away — sometimes by his father, sometimes by his siblings, and most often by his own self-destructive tendencies.\n\nKendall\'s arc across four seasons follows a devastating cycle: rise, fall, and rise again, each time with diminishing returns. In Season 1, his attempted coup against Logan collapses after a car accident that kills a waiter at Shiv\'s wedding. The guilt from this event — and Logan\'s weaponization of it — defines Kendall\'s psychology for seasons to come, reducing him from a would-be titan to a hollow-eyed puppet.\n\nHis explosive press conference at the end of Season 2, turning against Logan by exposing the cruise ship scandal, represents his greatest moment of defiance. Yet even this act of rebellion is ambiguous — is it genuine moral outrage, or simply another power play by a man who has run out of other moves? Season 3 answers that question painfully, as Kendall\'s crusade crumbles under the weight of his own narcissism and instability.\n\nThe series finale delivers Kendall\'s ultimate defeat. After briefly tasting victory when the siblings agree to make him CEO, Shiv changes her vote and the deal collapses. Kendall is left staring at the water, a man defined entirely by a role he will never fill — the tragedy of someone who wanted the throne not because he had a vision, but because he had nothing else.',
    keyEpisodes: [
      { title: 'Nobody Is Ever Missing', season: 1, episode: 10, description: 'Kendall\'s takeover attempt fails and he accidentally causes a waiter\'s death, leaving him devastated and vulnerable to Logan\'s control.' },
      { title: 'This Is Not for Tears', season: 2, episode: 10, description: 'Kendall holds a bombshell press conference accusing Logan of covering up crimes on Waystar cruise ships, declaring war on his father.' },
      { title: 'All the Bells Say', season: 3, episode: 9, description: 'The three Roy siblings unite against Logan in Tuscany, only for Logan to outmaneuver them by changing the holding company structure.' },
      { title: 'Church and State', season: 4, episode: 9, description: 'At Logan\'s funeral, Kendall delivers a raw eulogy that oscillates between genuine grief and a transparent bid for corporate power.' },
      { title: 'With Open Eyes', season: 4, episode: 10, description: 'Kendall loses the CEO vote when Shiv sides with Tom, leaving him broken on the banks of the Hudson River.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Jeremy_Strong_Berlinale_2023.jpg/440px-Jeremy_Strong_Berlinale_2023.jpg', alt: 'Jeremy Strong, who portrays Kendall Roy in Succession', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/SuccessionTV', url: 'https://www.reddit.com/r/SuccessionTV/', platform: 'Reddit', description: 'Main Succession subreddit with 500K+ members' }
      ],
      youtubeChannels: [
        { name: 'Kendall Roy Character Analysis', url: 'https://www.youtube.com/results?search_query=kendall+roy+character+analysis', platform: 'YouTube', description: 'In-depth video essays on Kendall Roy\'s character arc' }
      ],
      twitterAccounts: [
        { name: '@succession', url: 'https://twitter.com/succession', platform: 'Twitter/X', description: 'Official Succession Twitter account' }
      ],
      fanSites: [
        { name: 'Succession Wiki', url: 'https://succession.fandom.com/', platform: 'Web', description: 'Comprehensive Succession encyclopedia on Fandom' }
      ],
      instagramAccounts: [
        { name: '@succession', url: 'https://www.instagram.com/succession/', platform: 'Instagram', description: 'Official Succession Instagram page' }
      ],
      tiktokCreators: [
        { name: 'Succession Edits', url: 'https://www.tiktok.com/tag/succession', platform: 'TikTok', description: 'Fan edits and clips on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 89, engagement: 91, socialActivity: 88, memeVelocity: 90, fanArtDensity: 82, fandomLongevity: 87 },
    faqs: [
      { question: 'Who plays Kendall Roy in Succession?', answer: 'Jeremy Strong plays Kendall Roy in Succession. Strong won the Primetime Emmy Award for Outstanding Lead Actor in a Drama Series in 2022 for his performance in Season 3, and is known for his intense method acting approach to the role.' },
      { question: 'Does Kendall Roy become CEO of Waystar Royco?', answer: 'No. Despite being the most ambitious of Logan\'s children and coming close multiple times, Kendall never becomes CEO. In the series finale, Shiv changes her vote on the board, and the company is ultimately sold to GoJo\'s Lukas Matsson, with Tom Wambsgans installed as CEO.' },
      { question: 'What happens at the end of Succession for Kendall?', answer: 'In the series finale ("With Open Eyes"), Kendall loses the CEO vote when Shiv sides against him. The final shot of his storyline shows him sitting alone by the waterfront in Manhattan, watched by his bodyguard Colin, having lost the only thing that gave his life meaning.' },
      { question: 'Did Kendall Roy kill someone?', answer: 'In the Season 1 finale, Kendall accidentally drives a car off a bridge at Shiv\'s wedding, resulting in the drowning death of a young waiter named Andrew Dodds. Logan uses this secret to control Kendall throughout Season 2, and the guilt haunts Kendall for the rest of the series.' },
      { question: 'What is Kendall Roy\'s rap scene?', answer: 'In Season 2, Episode 5 ("Tern Haven"), Kendall performs an awkward, cringe-worthy rap called "L to the OG" at Logan\'s birthday party. The scene became a viral sensation and cultural moment, perfectly capturing Kendall\'s desperate need for his father\'s approval.' }
    ],
    videos: [
      { title: 'Kendall Roy - L to the OG', youtubeId: 'Faa-MHFESBE', description: 'Kendall Roy\'s infamous rap performance at Logan\'s birthday party.' },
      { title: 'Kendall Roy - Season 2 Press Conference', youtubeId: 'kYL5F2QGBCQ', description: 'Kendall\'s explosive press conference turning against his father Logan.' }
    ],
    relatedCharacterSlugs: ['siobhan-roy', 'roman-roy', 'logan-roy', 'tom-wambsgans'],
    tags: ['protagonist', 'tragic', 'anti-hero', 'complex']
  },
  {
    slug: 'siobhan-roy',
    name: 'Siobhan "Shiv" Roy',
    showSlug: 'succession',
    showTitle: 'Succession',
    actorSlug: 'sarah-snook',
    actorName: 'Sarah Snook',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Siobhan "Shiv" Roy is the youngest Roy child and only daughter, who begins the series as the family\'s progressive outsider — working in left-leaning politics, married to the affable Tom Wambsgans, and seemingly above the corporate power games that consume her brothers. This positioning is gradually revealed to be as much a power play as anything her siblings attempt.\n\nShiv\'s arc is defined by the gap between her self-image and her actions. She sees herself as the smart, principled one, morally superior to Kendall and Roman. Yet when Logan dangles the CEO position before her in Season 2, she abandons her political career instantly, revealing that her independence was always conditional — she simply needed the right offer.\n\nHer marriage to Tom becomes the show\'s most devastatingly honest portrayal of a toxic relationship. Shiv\'s emotional cruelty — proposing an open marriage on their wedding night, dismissing Tom\'s fears about prison, consistently prioritizing the company over him — slowly transforms Tom from devoted husband to calculating survivor. By the time Tom betrays the siblings in the Season 3 finale, it feels less like a twist and more like an inevitable consequence of Shiv\'s neglect.\n\nThe series finale presents Shiv with her defining choice: support Kendall as CEO and maintain sibling unity, or betray him and hand the company to Matsson through Tom. She chooses the latter, not out of belief in Tom but out of a refusal to let Kendall win. It is a decision as self-destructive as anything her brothers have done, leaving her in a loveless power-marriage with a man she cannot respect.',
    keyEpisodes: [
      { title: 'Austere Religious Observance', season: 2, episode: 6, description: 'Logan privately tells Shiv she will be his successor, fundamentally changing her trajectory.' },
      { title: 'All the Bells Say', season: 3, episode: 9, description: 'Shiv joins her brothers against Logan, only to discover Tom has betrayed them all to their father.' },
      { title: 'Connor\'s Wedding', season: 4, episode: 3, description: 'Shiv learns of Logan\'s death while on a boat to Connor\'s wedding, and her raw grief reveals vulnerability beneath her tough exterior.' },
      { title: 'With Open Eyes', season: 4, episode: 10, description: 'Shiv changes her board vote against Kendall, handing control to Matsson and Tom in the series\' decisive moment.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Sarah_Snook_2019_%28cropped%29.jpg/440px-Sarah_Snook_2019_%28cropped%29.jpg', alt: 'Sarah Snook, who portrays Siobhan Roy in Succession', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/SuccessionTV', url: 'https://www.reddit.com/r/SuccessionTV/', platform: 'Reddit', description: 'Main Succession subreddit' }
      ],
      youtubeChannels: [
        { name: 'Shiv Roy Character Analysis', url: 'https://www.youtube.com/results?search_query=shiv+roy+succession+analysis', platform: 'YouTube', description: 'Video essays on Shiv Roy\'s character' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Succession Wiki - Shiv', url: 'https://succession.fandom.com/wiki/Siobhan_Roy', platform: 'Web', description: 'Shiv Roy\'s full wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 84, engagement: 86, socialActivity: 83, memeVelocity: 82, fanArtDensity: 79, fandomLongevity: 85 },
    faqs: [
      { question: 'Who plays Siobhan Roy in Succession?', answer: 'Sarah Snook plays Siobhan "Shiv" Roy in Succession. Snook, an Australian actress, received multiple Emmy nominations for the role and won widespread critical acclaim for her portrayal of the complex youngest Roy sibling.' },
      { question: 'Why is Siobhan Roy called Shiv?', answer: 'Siobhan Roy\'s nickname "Shiv" is a shortened form of her first name Siobhan. While not explicitly stated in the show, the double meaning — a shiv being a makeshift blade — resonates with her character\'s capacity for emotional cutting and betrayal.' },
      { question: 'Do Shiv and Tom stay together in Succession?', answer: 'Technically yes. Despite their deeply dysfunctional marriage, Shiv and Tom remain together through the series finale. However, their relationship is transactional by the end — Tom becomes CEO through Shiv\'s decisive board vote, and their final scene shows them in a car together, holding hands without warmth.' },
      { question: 'Why does Shiv vote against Kendall in the finale?', answer: 'Shiv changes her vote against Kendall becoming CEO in the series finale for multiple complex reasons: she realizes Kendall is not fit to lead, she cannot stomach her brother winning, and she recognizes that supporting Matsson\'s deal (with Tom as CEO) gives her indirect power. The scene in the bathroom where she tells Kendall he is not a serious person is the turning point.' }
    ],
    videos: [
      { title: 'Shiv Roy - Power and Betrayal', youtubeId: 'GxbJTjhDMOQ', description: 'A character study of Shiv Roy\'s arc throughout Succession.' }
    ],
    relatedCharacterSlugs: ['kendall-roy', 'roman-roy', 'logan-roy', 'tom-wambsgans'],
    tags: ['complex', 'anti-hero', 'political', 'tragic']
  },
  {
    slug: 'roman-roy',
    name: 'Roman Roy',
    showSlug: 'succession',
    showTitle: 'Succession',
    actorSlug: 'kieran-culkin',
    actorName: 'Kieran Culkin',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Roman Roy is the youngest son of Logan Roy, a walking defense mechanism who uses crude humor, provocative behavior, and relentless mockery to avoid engaging with anything sincerely. He is the family clown who weaponizes his lack of seriousness, yet beneath the joke-a-minute exterior lies perhaps the most emotionally damaged of the Roy children.\n\nRoman\'s character arc is the slowest burn in Succession. While Kendall and Shiv make dramatic bids for power early on, Roman spends the first two seasons seemingly content to coast as the family\'s irreverent sidekick. His gradual emergence as a genuine contender — developing a real instinct for deal-making and corporate politics — is one of the show\'s most compelling developments.\n\nHis relationship with Gerri Kellman, which begins as a bizarre sexual dynamic involving degradation and phone calls, becomes unexpectedly poignant. Gerri is the closest thing Roman has to a healthy connection, and Logan\'s destruction of that relationship in Season 4 strips Roman of his one source of stability. His psychological issues — implied childhood abuse, sexual dysfunction, and desperate need for paternal validation — make him simultaneously the funniest and most pitiable Roy sibling.\n\nAt Logan\'s funeral, Roman breaks down completely, unable to finish his eulogy, and this crack in his armor never fully heals. In the finale, he is the one who most clearly sees the futility of the siblings\' power struggle, drunkenly wandering through the streets of Manhattan and ultimately accepting his irrelevance with something approaching peace.',
    keyEpisodes: [
      { title: 'Which Side Are You On?', season: 1, episode: 2, description: 'Roman\'s catastrophic mishandling of a rocket launch — resulting in a young man losing his thumb — establishes his fundamental unseriousness.' },
      { title: 'Tern Haven', season: 2, episode: 5, description: 'Roman navigates the Pierce family dinner and begins to show genuine political instincts beneath his joking exterior.' },
      { title: 'Too Much Birthday', season: 3, episode: 7, description: 'Roman\'s accidental explicit photo to his father becomes a humiliating turning point, stripping away his carefully constructed irreverence.' },
      { title: 'Church and State', season: 4, episode: 9, description: 'Roman attempts to deliver Logan\'s eulogy but breaks down mid-speech, revealing the depth of his grief and psychological fragility.' },
      { title: 'With Open Eyes', season: 4, episode: 10, description: 'Roman accepts the loss of the company with drunken grace, ending the series alone at a bar, the most self-aware of the siblings.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Kieran_Culkin_Berlinale_2023.jpg/440px-Kieran_Culkin_Berlinale_2023.jpg', alt: 'Kieran Culkin, who portrays Roman Roy in Succession', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/SuccessionTV', url: 'https://www.reddit.com/r/SuccessionTV/', platform: 'Reddit', description: 'Main Succession subreddit' }
      ],
      youtubeChannels: [
        { name: 'Roman Roy Best Moments', url: 'https://www.youtube.com/results?search_query=roman+roy+succession+best+moments', platform: 'YouTube', description: 'Compilations of Roman\'s funniest and most devastating scenes' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Succession Wiki - Roman', url: 'https://succession.fandom.com/wiki/Roman_Roy', platform: 'Web', description: 'Roman Roy\'s full wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 87, engagement: 89, socialActivity: 86, memeVelocity: 92, fanArtDensity: 80, fandomLongevity: 86 },
    faqs: [
      { question: 'Who plays Roman Roy in Succession?', answer: 'Kieran Culkin plays Roman Roy in Succession. Culkin won the Golden Globe for Best Actor in a Television Series Drama in 2024 for his performance in the final season, and received multiple Emmy nominations throughout the show\'s run.' },
      { question: 'What is Roman Roy\'s relationship with Gerri?', answer: 'Roman develops an unconventional sexual and mentoring relationship with Gerri Kellman (played by J. Smith-Cameron), Waystar Royco\'s general counsel. What begins as Roman seeking degradation over phone calls evolves into a genuine emotional connection. Logan discovers the dynamic and forces Gerri\'s firing, devastating Roman.' },
      { question: 'Was Roman Roy abused as a child?', answer: 'The show strongly implies that Roman experienced some form of abuse or trauma in childhood. References to being locked in a dog cage, his sexual dysfunction, and his extreme discomfort with intimacy all point to a deeply troubled upbringing, though the show deliberately leaves the specifics ambiguous.' },
      { question: 'What happens to Roman Roy at the end of Succession?', answer: 'In the series finale, Roman initially supports Kendall\'s bid for CEO but does not fight Shiv\'s reversal. He ends the series drinking alone at a bar, having accepted that none of the Roy children were truly equipped to lead. He appears to find a strange peace in letting go of the company.' }
    ],
    videos: [
      { title: 'Roman Roy - Funeral Breakdown', youtubeId: '2SiDgVEBL1A', description: 'Roman\'s devastating breakdown during Logan\'s eulogy.' }
    ],
    relatedCharacterSlugs: ['kendall-roy', 'siobhan-roy', 'logan-roy', 'tom-wambsgans'],
    tags: ['comic-relief', 'tragic', 'complex', 'fan-favorite']
  },
  {
    slug: 'logan-roy',
    name: 'Logan Roy',
    showSlug: 'succession',
    showTitle: 'Succession',
    actorSlug: 'brian-cox',
    actorName: 'Brian Cox',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Logan Roy is the founder and CEO of Waystar Royco, a global media and entertainment conglomerate, and the fearsome patriarch of the Roy family. A self-made billionaire who clawed his way from a traumatic childhood in Dundee, Scotland, to the summit of American power, Logan rules his empire and his family with the same iron fist — dispensing cruelty, manipulation, and rare moments of affection in carefully measured doses.\n\nLogan\'s central paradox is that he genuinely wants to find a successor among his children but cannot bring himself to cede control. Every time one of his children rises to the occasion, Logan undermines them — not necessarily out of malice, but because relinquishing power is existentially impossible for a man whose entire identity is built on dominance. He is both the obstacle his children must overcome and the architect of their inability to overcome anything.\n\nHis relationships with each child are distinct instruments of control: Kendall is the heir he alternately elevates and destroys, Shiv is the favorite he dangles promises before, Roman is the baby he simultaneously coddles and dismisses, and Connor is the eldest he has simply written off. The phrase "I love you but you are not serious people" encapsulates his worldview — affection exists, but it is always conditional on usefulness.\n\nLogan\'s shocking death in Season 4, Episode 3 — from a stroke on a plane while his children listen helplessly over the phone — is one of television\'s most audacious narrative choices. By removing the patriarch before the final act, the show forces its remaining characters to reckon with who they are without the gravitational force that defined them.',
    keyEpisodes: [
      { title: 'Celebration', season: 1, episode: 1, description: 'Logan suffers a stroke at his 80th birthday party, igniting the succession crisis that drives the entire series.' },
      { title: 'This Is Not for Tears', season: 2, episode: 10, description: 'Logan sacrifices Kendall as the fall guy for the cruise scandal, only for Kendall to turn against him at a press conference.' },
      { title: 'All the Bells Say', season: 3, episode: 9, description: 'Logan outmaneuvers his children in Tuscany by restructuring the holding company with Caroline\'s help, delivering the devastating line about love.' },
      { title: 'Connor\'s Wedding', season: 4, episode: 3, description: 'Logan dies suddenly of a stroke on a transatlantic flight, in one of the most shocking character deaths in television history.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Brian_Cox_%28actor%29_2012.jpg/440px-Brian_Cox_%28actor%29_2012.jpg', alt: 'Brian Cox, who portrays Logan Roy in Succession', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/SuccessionTV', url: 'https://www.reddit.com/r/SuccessionTV/', platform: 'Reddit', description: 'Main Succession subreddit' }
      ],
      youtubeChannels: [
        { name: 'Logan Roy - Best Scenes', url: 'https://www.youtube.com/results?search_query=logan+roy+succession+best+scenes', platform: 'YouTube', description: 'Compilations of Logan Roy\'s most powerful scenes' }
      ],
      twitterAccounts: [
        { name: '@succession', url: 'https://twitter.com/succession', platform: 'Twitter/X', description: 'Official Succession account' }
      ],
      fanSites: [
        { name: 'Succession Wiki - Logan', url: 'https://succession.fandom.com/wiki/Logan_Roy', platform: 'Web', description: 'Logan Roy\'s full wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 88, engagement: 90, socialActivity: 85, memeVelocity: 91, fanArtDensity: 78, fandomLongevity: 89 },
    faqs: [
      { question: 'Who plays Logan Roy in Succession?', answer: 'Brian Cox plays Logan Roy in Succession. Cox, a veteran Scottish actor with decades of theater and film experience, won the Golden Globe for Best Actor in a Television Series Drama in 2020 for the role and received multiple Emmy nominations.' },
      { question: 'Does Logan Roy die in Succession?', answer: 'Yes, Logan Roy dies in Season 4, Episode 3 ("Connor\'s Wedding") from a stroke suffered on a plane. His death occurs off-screen as his children listen over the phone, unable to say goodbye properly. The episode is widely considered one of the greatest in television history.' },
      { question: 'What is Logan Roy\'s famous quote about his children?', answer: 'Logan\'s most devastating line comes in the Season 3 finale when he tells his children: "I love you, but you are not serious people." This encapsulates the central tragedy of the Roy family — a father who may genuinely love his children but has ensured they can never meet his standards.' },
      { question: 'Is Logan Roy based on a real person?', answer: 'Logan Roy is widely understood to be inspired by several real media moguls, most prominently Rupert Murdoch, but also Sumner Redstone and Robert Maxwell. Creator Jesse Armstrong has acknowledged these influences while noting that Logan is a fictional composite rather than a direct portrayal of any single person.' },
      { question: 'What is Logan Roy\'s backstory?', answer: 'Logan grew up in extreme poverty in Dundee, Scotland, and experienced severe childhood abuse. He emigrated to Canada (later the US), where he built Waystar Royco from scratch into a global media empire. His brother Ewan and he are estranged due to events in their childhood, which the show implies involved profound trauma.' }
    ],
    videos: [
      { title: 'Logan Roy - "You Are Not Serious People"', youtubeId: 'hFGMCFfpDwA', description: 'Logan\'s devastating confrontation with his children in the Season 3 finale.' }
    ],
    relatedCharacterSlugs: ['kendall-roy', 'siobhan-roy', 'roman-roy', 'tom-wambsgans'],
    tags: ['patriarch', 'antagonist', 'iconic', 'complex']
  },
  {
    slug: 'tom-wambsgans',
    name: 'Tom Wambsgans',
    showSlug: 'succession',
    showTitle: 'Succession',
    actorSlug: 'matthew-macfadyen',
    actorName: 'Matthew Macfadyen',
    seasonsActive: 'Seasons 1–4',
    characterArc: 'Tom Wambsgans is the ultimate outsider in the Roy family orbit — a Midwestern businessman who marries into unfathomable wealth and spends four seasons navigating the treacherous gap between the Roy family\'s inner circle and its margins. His journey from eager-to-please son-in-law to the unlikely CEO of Waystar Royco is Succession\'s most surprising and subversively satisfying character arc.\n\nTom begins the series as a figure of gentle comedy — a man so desperate to belong that he endures constant humiliation from Shiv, Logan, and the Roy siblings. His relationship with Greg Hirsch, whom he simultaneously mentors and bullies, provides the show\'s most consistent comedic dynamic. Yet beneath Tom\'s obsequiousness lies a shrewd survivor who absorbs every lesson the Roys inadvertently teach him.\n\nThe turning point comes in the Season 3 finale when Tom, facing possible prison time while Shiv remains indifferent to his suffering, secretly alerts Logan to the siblings\' plan. This betrayal — born not of ambition but of the desperate recognition that his wife will never truly love him — recontextualizes everything that came before. Tom has learned the Roy family playbook better than any actual Roy.\n\nIn the series finale, Tom emerges as the unlikely winner of the succession game. Installed as CEO by Lukas Matsson — precisely because he is controllable and unthreatening — Tom achieves the power and status he always craved. But the final shot of him and Shiv in the car, hands touching without warmth, suggests his victory is as hollow as every other outcome in the Roy universe.',
    keyEpisodes: [
      { title: 'Argestes', season: 2, episode: 6, description: 'Tom learns about the cruise ship scandals and realizes the moral cost of his proximity to the Roys.' },
      { title: 'What It Takes', season: 3, episode: 6, description: 'Tom delivers the devastating "I wonder if the sad I\'d be without you would be less than the sad I get from being with you" speech to Shiv.' },
      { title: 'All the Bells Say', season: 3, episode: 9, description: 'Tom secretly calls Logan to reveal the siblings\' plan, decisively choosing power over his marriage.' },
      { title: 'With Open Eyes', season: 4, episode: 10, description: 'Tom is named CEO of Waystar Royco by Matsson, completing his improbable rise from outsider to the top of the empire.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Matthew_Macfadyen_Berlinale_2023.jpg/440px-Matthew_Macfadyen_Berlinale_2023.jpg', alt: 'Matthew Macfadyen, who portrays Tom Wambsgans in Succession', attribution: 'Photo via Wikimedia Commons, CC BY-SA 3.0', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/SuccessionTV', url: 'https://www.reddit.com/r/SuccessionTV/', platform: 'Reddit', description: 'Main Succession subreddit' }
      ],
      youtubeChannels: [
        { name: 'Tom Wambsgans Best Moments', url: 'https://www.youtube.com/results?search_query=tom+wambsgans+succession+best+moments', platform: 'YouTube', description: 'Compilations of Tom\'s funniest and most poignant scenes' }
      ],
      twitterAccounts: [],
      fanSites: [
        { name: 'Succession Wiki - Tom', url: 'https://succession.fandom.com/wiki/Tom_Wambsgans', platform: 'Web', description: 'Tom Wambsgans\' full wiki page' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 83, engagement: 85, socialActivity: 81, memeVelocity: 88, fanArtDensity: 74, fandomLongevity: 84 },
    faqs: [
      { question: 'Who plays Tom Wambsgans in Succession?', answer: 'Matthew Macfadyen plays Tom Wambsgans in Succession. Macfadyen, a British actor also known for playing Mr. Darcy in the 2005 Pride & Prejudice film, won the Primetime Emmy Award for Outstanding Supporting Actor in a Drama Series in 2022 for his performance in Season 3.' },
      { question: 'Does Tom become CEO in Succession?', answer: 'Yes, in the series finale Tom Wambsgans is installed as CEO of Waystar Royco by Lukas Matsson after the GoJo acquisition is completed. He is chosen precisely because Matsson sees him as manageable and non-threatening — an ironic fulfillment of Tom\'s ambitions.' },
      { question: 'What is the Tom and Greg relationship in Succession?', answer: 'Tom and Greg (nicknamed "the Disgusting Brothers" by fans) have one of the show\'s most entertaining dynamics. Tom alternates between mentoring, bullying, and genuinely depending on Greg. Their relationship parodies corporate mentorship while revealing both characters\' loneliness and need for connection.' },
      { question: 'When does Tom betray the Roy siblings?', answer: 'Tom betrays the Roy siblings in the Season 3 finale ("All the Bells Say") by secretly calling Logan to warn him about Kendall, Shiv, and Roman\'s plan to block the GoJo deal. This act is motivated by Shiv\'s emotional neglect and Tom\'s realization that loyalty to the siblings will not protect him.' },
      { question: 'What is Tom Wambsgans\' famous sad quote?', answer: 'Tom\'s most quoted line is from Season 3, Episode 6: "I wonder if the sad I\'d be without you would be less than the sad I get from being with you." Delivered to Shiv in their bedroom, it is one of the most heartbreaking lines in the series and a turning point for their marriage.' }
    ],
    videos: [
      { title: 'Tom Wambsgans - From Outsider to CEO', youtubeId: 'e-6K2CjJ6dk', description: 'A character study of Tom\'s improbable rise throughout Succession.' }
    ],
    relatedCharacterSlugs: ['kendall-roy', 'siobhan-roy', 'roman-roy', 'logan-roy'],
    tags: ['fan-favorite', 'underdog', 'complex', 'dark-horse']
  }
];

module.exports = { officeCharacters, successionCharacters };
