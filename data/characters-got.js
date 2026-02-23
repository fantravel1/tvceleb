// Game of Thrones Characters
const gotCharacters = [
  {
    slug: 'jon-snow',
    name: 'Jon Snow',
    showSlug: 'game-of-thrones',
    showTitle: 'Game of Thrones',
    actorSlug: 'kit-harington',
    actorName: 'Kit Harington',
    seasonsActive: 'Seasons 1–8',
    characterArc: 'Jon Snow begins as the illegitimate son of Ned Stark, raised at Winterfell but always aware of his outsider status. Seeking purpose and honor, he joins the Night\'s Watch at the Wall, where he rises through the ranks from steward to Lord Commander. His early experiences beyond the Wall — confronting wildlings, White Walkers, and the harsh realities of survival — forge him into a leader who sees beyond the petty politics of Westeros.\n\nAs Lord Commander, Jon makes the controversial decision to ally with the wildlings, recognizing that the true enemy is the army of the dead. This earns him enemies within his own ranks, and he is assassinated by mutinous brothers of the Night\'s Watch. His resurrection by the Red Priestess Melisandre marks a turning point — Jon returns from death fundamentally changed, carrying the weight of having seen the void beyond.\n\nJon\'s true parentage is revealed as Aegon Targaryen, the legitimate son of Rhaegar Targaryen and Lyanna Stark, making him the rightful heir to the Iron Throne. This revelation complicates his relationship with Daenerys Targaryen, his lover and aunt. Jon is torn between his love for Daenerys and his growing horror at her capacity for destruction.\n\nIn the series finale, Jon kills Daenerys after she burns King\'s Landing, sacrificing his own happiness to prevent further tyranny. He is exiled beyond the Wall, returning to the place where his journey began — leading the Free Folk into the true North, finally free from the burdens of thrones and bloodlines.',
    keyEpisodes: [
      { title: 'Winter Is Coming', season: 1, episode: 1, description: 'Jon Snow is introduced as Ned Stark\'s bastard son and decides to join the Night\'s Watch.' },
      { title: 'Hardhome', season: 5, episode: 8, description: 'Jon battles the White Walkers at Hardhome, discovering Valyrian steel can destroy them.' },
      { title: 'Mother\'s Mercy', season: 5, episode: 10, description: 'Jon is assassinated by his Night\'s Watch brothers in a mutiny led by Alliser Thorne and Olly.' },
      { title: 'Battle of the Bastards', season: 6, episode: 9, description: 'Jon leads the wildlings against Ramsay Bolton to retake Winterfell in one of TV\'s greatest battle sequences.' },
      { title: 'The Iron Throne', season: 8, episode: 6, description: 'Jon kills Daenerys to end her reign of terror and is exiled beyond the Wall.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kit_Harington_by_Gage_Skidmore.jpg/440px-Kit_Harington_by_Gage_Skidmore.jpg', alt: 'Kit Harington, who portrays Jon Snow in Game of Thrones', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/gameofthrones', url: 'https://www.reddit.com/r/gameofthrones/', platform: 'Reddit', description: 'Main Game of Thrones subreddit with 3M+ members' },
        { name: 'r/freefolk', url: 'https://www.reddit.com/r/freefolk/', platform: 'Reddit', description: 'Spoiler-friendly GOT community known for memes and unfiltered discussion' },
        { name: 'r/asoiaf', url: 'https://www.reddit.com/r/asoiaf/', platform: 'Reddit', description: 'A Song of Ice and Fire book-focused community for deep lore discussion' }
      ],
      youtubeChannels: [
        { name: 'Alt Shift X - Jon Snow Analysis', url: 'https://www.youtube.com/watch?v=rEi-v6aJD7Q', platform: 'YouTube', description: 'Comprehensive breakdown of Jon Snow\'s identity and role in the story' }
      ],
      twitterAccounts: [
        { name: '@GameOfThrones', url: 'https://twitter.com/GameOfThrones', platform: 'Twitter/X', description: 'Official Game of Thrones Twitter account' }
      ],
      fanSites: [
        { name: 'A Wiki of Ice and Fire - Jon Snow', url: 'https://awoiaf.westeros.org/index.php/Jon_Snow', platform: 'Web', description: 'Detailed Jon Snow article on the community-run ASOIAF wiki' },
        { name: 'Game of Thrones Wiki - Jon Snow', url: 'https://gameofthrones.fandom.com/wiki/Jon_Snow', platform: 'Web', description: 'Jon Snow page on the Fandom wiki' }
      ],
      instagramAccounts: [
        { name: '@gameofthrones', url: 'https://www.instagram.com/gameofthrones/', platform: 'Instagram', description: 'Official Game of Thrones Instagram page' }
      ],
      tiktokCreators: [
        { name: 'Game of Thrones Edits', url: 'https://www.tiktok.com/tag/gameofthrones', platform: 'TikTok', description: 'Fan edits and clips on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 96, engagement: 95, socialActivity: 93, memeVelocity: 94, fanArtDensity: 92, fandomLongevity: 98 },
    faqs: [
      { question: 'Who plays Jon Snow in Game of Thrones?', answer: 'Kit Harington plays Jon Snow in Game of Thrones. Harington was nominated for two Primetime Emmy Awards for Outstanding Lead Actor in a Drama Series for the role, which he played across all eight seasons of the show.' },
      { question: 'Is Jon Snow actually a Targaryen?', answer: 'Yes. Jon Snow\'s true name is Aegon Targaryen. He is the legitimate son of Rhaegar Targaryen and Lyanna Stark, who were secretly married. This makes him the nephew of Daenerys Targaryen and the rightful heir to the Iron Throne, a secret revealed in Season 7 and confirmed in Season 8.' },
      { question: 'Does Jon Snow come back to life?', answer: 'Yes. Jon Snow is assassinated by his Night\'s Watch brothers in the Season 5 finale ("Mother\'s Mercy") and is resurrected by the Red Priestess Melisandre in Season 6, Episode 2 ("Home"). His resurrection was one of the most anticipated moments in television history.' },
      { question: 'Why does Jon Snow kill Daenerys?', answer: 'Jon kills Daenerys in the series finale after she destroys King\'s Landing with dragonfire, killing thousands of innocent civilians. Despite his love for her, Jon concludes she will continue to use violence to impose her vision of a better world, and he stabs her to prevent further destruction.' },
      { question: 'What happens to Jon Snow at the end of Game of Thrones?', answer: 'After killing Daenerys, Jon is imprisoned and eventually sentenced to rejoin the Night\'s Watch as a compromise between the Unsullied and the lords of Westeros. He travels north to Castle Black and ultimately leads the Free Folk beyond the Wall into the true North.' }
    ],
    videos: [
      { title: 'Jon Snow - King in the North', youtubeId: 'X0WzqanwlG0', description: 'The iconic scene where Jon Snow is declared King in the North by the Northern lords.' },
      { title: 'Battle of the Bastards - Full Battle', youtubeId: 'SHofTFsXsd4', description: 'Jon Snow\'s climactic battle against Ramsay Bolton to reclaim Winterfell.' }
    ],
    relatedCharacterSlugs: ['daenerys-targaryen', 'tyrion-lannister', 'arya-stark', 'sansa-stark', 'cersei-lannister', 'jaime-lannister'],
    tags: ['protagonist', 'hero', 'iconic', 'resurrected']
  },
  {
    slug: 'daenerys-targaryen',
    name: 'Daenerys Targaryen',
    showSlug: 'game-of-thrones',
    showTitle: 'Game of Thrones',
    actorSlug: 'emilia-clarke',
    actorName: 'Emilia Clarke',
    seasonsActive: 'Seasons 1–8',
    characterArc: 'Daenerys Targaryen begins as a timid, abused young woman sold into marriage to Dothraki warlord Khal Drogo by her brother Viserys. Through sheer will and resilience, she transforms from a frightened girl into the "Mother of Dragons," hatching three dragon eggs in Drogo\'s funeral pyre and emerging unburned. This miracle marks the beginning of her rise as one of the most powerful figures in the known world.\n\nAcross Essos, Daenerys builds an army and a reputation as a liberator. She frees the Unsullied slave-soldiers of Astapor, conquers Yunkai and Meereen, and abolishes slavery wherever she goes. Her titles accumulate — Breaker of Chains, Khaleesi, Queen of Meereen — and her dragons grow into devastating weapons of war. Yet her rule in Meereen reveals the gap between conquering and governing, as insurgencies and political complexities test her idealism.\n\nDaenerys sails to Westeros to reclaim the Iron Throne, forming alliances with Tyrion Lannister, Jon Snow, and others. She fights alongside the living against the Night King at Winterfell, sacrificing much of her army and one of her dragons. But the losses mount — her closest advisors Missandei and Jorah Mormont die, Jon\'s true heritage threatens her claim, and she feels increasingly isolated and betrayed.\n\nIn the penultimate episode, Daenerys snaps. After the bells of King\'s Landing ring in surrender, she burns the city to ash on dragonback, killing countless innocents. Her descent from liberator to tyrant is the show\'s most controversial arc — a Greek tragedy about how unchecked power, isolation, and trauma can corrupt even the noblest intentions. She is killed by Jon Snow in the series finale, her dream of a better world dying with her.',
    keyEpisodes: [
      { title: 'Fire and Blood', season: 1, episode: 10, description: 'Daenerys walks into Khal Drogo\'s funeral pyre and emerges unburned with three newborn dragons.' },
      { title: 'And Now His Watch Is Ended', season: 3, episode: 4, description: 'Daenerys reveals she speaks Valyrian, frees the Unsullied, and burns the slavers of Astapor.' },
      { title: 'The Spoils of War', season: 7, episode: 4, description: 'Daenerys rides Drogon into battle against the Lannister army, showcasing devastating dragon warfare.' },
      { title: 'The Bells', season: 8, episode: 5, description: 'Daenerys destroys King\'s Landing with dragonfire after the city surrenders, completing her tragic descent.' },
      { title: 'The Iron Throne', season: 8, episode: 6, description: 'Daenerys is killed by Jon Snow in the throne room before she can continue her reign of fire.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Emilia_Clarke_by_Gage_Skidmore_2.jpg/440px-Emilia_Clarke_by_Gage_Skidmore_2.jpg', alt: 'Emilia Clarke, who portrays Daenerys Targaryen in Game of Thrones', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/gameofthrones', url: 'https://www.reddit.com/r/gameofthrones/', platform: 'Reddit', description: 'Main Game of Thrones subreddit' },
        { name: 'r/freefolk', url: 'https://www.reddit.com/r/freefolk/', platform: 'Reddit', description: 'Spoiler-friendly community with extensive Daenerys discourse' },
        { name: 'r/DaenerysWinsTheThrone', url: 'https://www.reddit.com/r/DaenerysWinsTheThrone/', platform: 'Reddit', description: 'Fan community that rallied behind Daenerys during the final season' }
      ],
      youtubeChannels: [
        { name: 'Alt Shift X - Daenerys Targaryen', url: 'https://www.youtube.com/watch?v=iQO1SNWnLiE', platform: 'YouTube', description: 'Deep dive into Daenerys\'s character and foreshadowing throughout the series' }
      ],
      twitterAccounts: [
        { name: '@GameOfThrones', url: 'https://twitter.com/GameOfThrones', platform: 'Twitter/X', description: 'Official Game of Thrones account' }
      ],
      fanSites: [
        { name: 'A Wiki of Ice and Fire - Daenerys', url: 'https://awoiaf.westeros.org/index.php/Daenerys_Targaryen', platform: 'Web', description: 'Comprehensive Daenerys article on the ASOIAF community wiki' },
        { name: 'Game of Thrones Wiki - Daenerys', url: 'https://gameofthrones.fandom.com/wiki/Daenerys_Targaryen', platform: 'Web', description: 'Daenerys page on the Fandom wiki' }
      ],
      instagramAccounts: [
        { name: '@emilia_clarke', url: 'https://www.instagram.com/emilia_clarke/', platform: 'Instagram', description: 'Emilia Clarke\'s official Instagram' }
      ],
      tiktokCreators: [
        { name: 'Daenerys Targaryen Edits', url: 'https://www.tiktok.com/tag/daenerystargaryen', platform: 'TikTok', description: 'Fan edits featuring Daenerys on TikTok' }
      ]
    },
    fanHeatIndex: { overall: 94, engagement: 96, socialActivity: 95, memeVelocity: 92, fanArtDensity: 97, fandomLongevity: 95 },
    faqs: [
      { question: 'Who plays Daenerys Targaryen in Game of Thrones?', answer: 'Emilia Clarke plays Daenerys Targaryen in all eight seasons of Game of Thrones. Clarke received four Primetime Emmy Award nominations for Outstanding Lead Actress in a Drama Series and became one of the most recognizable actresses in the world through the role.' },
      { question: 'Why did Daenerys burn King\'s Landing?', answer: 'Daenerys burned King\'s Landing in Season 8, Episode 5 ("The Bells") after suffering devastating personal losses — the deaths of Missandei, Jorah, and her dragon Rhaegal — and feeling betrayed and isolated after learning Jon\'s true parentage threatened her claim. The show portrayed it as a breaking point where grief, rage, and the Targaryen legacy of fire and blood consumed her.' },
      { question: 'What are Daenerys Targaryen\'s dragons named?', answer: 'Daenerys\'s three dragons are Drogon (named after Khal Drogo), Rhaegal (named after her brother Rhaegar), and Viserion (named after her brother Viserys). Only Drogon survives to the end of the series.' },
      { question: 'How does Daenerys Targaryen die?', answer: 'Daenerys is stabbed and killed by Jon Snow in the series finale ("The Iron Throne," Season 8, Episode 6). Jon kisses her and then drives a dagger into her heart in the throne room of the Red Keep. Drogon melts the Iron Throne with his fire and carries her body away.' },
      { question: 'What does "Dracarys" mean?', answer: '"Dracarys" is High Valyrian for "dragonfire." It is the command Daenerys uses to order her dragons to breathe fire. The word became one of the show\'s most iconic catchphrases and Missandei\'s final word before her execution.' }
    ],
    videos: [
      { title: 'Daenerys Targaryen - From Slave to Queen', youtubeId: 'R8PEOadPnew', description: 'A character study of Daenerys\'s rise to power across the series.' },
      { title: 'Dracarys - Astapor Scene', youtubeId: '0fsonKPBV_o', description: 'Daenerys reveals her Valyrian fluency and frees the Unsullied in one of the show\'s most satisfying moments.' }
    ],
    relatedCharacterSlugs: ['jon-snow', 'tyrion-lannister', 'cersei-lannister', 'jaime-lannister', 'sansa-stark'],
    tags: ['protagonist', 'tragic', 'iconic', 'dragon-rider']
  },
  {
    slug: 'tyrion-lannister',
    name: 'Tyrion Lannister',
    showSlug: 'game-of-thrones',
    showTitle: 'Game of Thrones',
    actorSlug: 'peter-dinklage',
    actorName: 'Peter Dinklage',
    seasonsActive: 'Seasons 1–8',
    characterArc: 'Tyrion Lannister is the youngest son of Tywin Lannister, head of the wealthiest family in Westeros. Born a dwarf, Tyrion has been despised by his father and sister Cersei his entire life. He compensates for his physical stature with a razor-sharp intellect, cutting wit, and a voracious appetite for books, wine, and the company of others. As he tells Jon Snow in the very first episode: "Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you."\n\nTyrion proves himself a capable political operator, serving as Hand of the King to Joffrey and masterminding the defense of King\'s Landing during the Battle of the Blackwater. Despite saving the city, he receives no credit — his father Tywin takes command and his nephew Joffrey mocks his disfiguring battle wounds. When Tyrion is falsely accused of Joffrey\'s murder and condemned to death, he demands trial by combat, and his champion Oberyn Martell is killed by the Mountain.\n\nThe pivotal moment of Tyrion\'s arc comes when he murders his father Tywin with a crossbow after discovering Tywin\'s betrayal regarding Shae. Fleeing across the Narrow Sea, Tyrion finds new purpose as advisor to Daenerys Targaryen, becoming her Hand of the Queen. He believes in her capacity to be a just ruler and works tirelessly to temper her more destructive impulses.\n\nTyrion\'s faith in Daenerys is shattered when she burns King\'s Landing. He resigns as her Hand and is imprisoned. In the finale, he convinces Jon to kill Daenerys and then persuades the lords of Westeros to name Bran Stark king, with Tyrion serving as Hand of the King once more — a role he accepts as penance for his failures.',
    keyEpisodes: [
      { title: 'Blackwater', season: 2, episode: 9, description: 'Tyrion commands the defense of King\'s Landing against Stannis Baratheon\'s fleet using wildfire.' },
      { title: 'The Laws of Gods and Men', season: 4, episode: 6, description: 'Tyrion\'s explosive trial speech after being accused of Joffrey\'s murder: "I wish I was the monster you think I am."' },
      { title: 'The Children', season: 4, episode: 10, description: 'Tyrion kills Shae and his father Tywin before fleeing King\'s Landing with Varys\'s help.' },
      { title: 'The Bells', season: 8, episode: 5, description: 'Tyrion frees Jaime and watches in horror as Daenerys destroys King\'s Landing.' },
      { title: 'The Iron Throne', season: 8, episode: 6, description: 'Tyrion convinces Jon to stop Daenerys and then proposes Bran Stark as king.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Peter_Dinklage_by_Gage_Skidmore.jpg/440px-Peter_Dinklage_by_Gage_Skidmore.jpg', alt: 'Peter Dinklage, who portrays Tyrion Lannister in Game of Thrones', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/gameofthrones', url: 'https://www.reddit.com/r/gameofthrones/', platform: 'Reddit', description: 'Main Game of Thrones subreddit' },
        { name: 'r/freefolk', url: 'https://www.reddit.com/r/freefolk/', platform: 'Reddit', description: 'Meme-heavy GOT community' },
        { name: 'r/asoiaf', url: 'https://www.reddit.com/r/asoiaf/', platform: 'Reddit', description: 'Book-focused community with deep Tyrion analysis' }
      ],
      youtubeChannels: [
        { name: 'Alt Shift X - Tyrion Lannister', url: 'https://www.youtube.com/watch?v=bMkulwQbIcU', platform: 'YouTube', description: 'Character analysis exploring Tyrion\'s role and book theories' }
      ],
      twitterAccounts: [
        { name: '@GameOfThrones', url: 'https://twitter.com/GameOfThrones', platform: 'Twitter/X', description: 'Official Game of Thrones account' }
      ],
      fanSites: [
        { name: 'A Wiki of Ice and Fire - Tyrion', url: 'https://awoiaf.westeros.org/index.php/Tyrion_Lannister', platform: 'Web', description: 'Tyrion Lannister article on the community ASOIAF wiki' },
        { name: 'Game of Thrones Wiki - Tyrion', url: 'https://gameofthrones.fandom.com/wiki/Tyrion_Lannister', platform: 'Web', description: 'Tyrion page on the Fandom wiki' }
      ],
      instagramAccounts: [],
      tiktokCreators: [
        { name: 'Tyrion Lannister Best Quotes', url: 'https://www.tiktok.com/tag/tyrionlannister', platform: 'TikTok', description: 'Fan compilations of Tyrion\'s best lines' }
      ]
    },
    fanHeatIndex: { overall: 93, engagement: 94, socialActivity: 90, memeVelocity: 95, fanArtDensity: 88, fandomLongevity: 97 },
    faqs: [
      { question: 'Who plays Tyrion Lannister in Game of Thrones?', answer: 'Peter Dinklage plays Tyrion Lannister in all eight seasons of Game of Thrones. Dinklage won four Primetime Emmy Awards for Outstanding Supporting Actor in a Drama Series for the role, the most wins in that category for a single role.' },
      { question: 'What is Tyrion Lannister\'s most famous quote?', answer: 'Tyrion has many iconic quotes, but the most famous is arguably "I drink and I know things" from Season 6. Other beloved lines include "A Lannister always pays his debts," "Never forget what you are," and his trial speech: "I wish I was the monster you think I am."' },
      { question: 'Does Tyrion kill his father?', answer: 'Yes. In Season 4, Episode 10 ("The Children"), Tyrion shoots his father Tywin Lannister with a crossbow while Tywin is on the privy. This follows Tyrion\'s escape from his death sentence, facilitated by his brother Jaime and the spymaster Varys.' },
      { question: 'Is Tyrion Lannister a villain or a hero?', answer: 'Tyrion is one of the show\'s most morally complex characters. He commits violent acts — killing Shae and Tywin — but is primarily driven by a desire for justice and acceptance. Throughout the series he serves as a voice of reason and compassion, ultimately becoming Hand of the King to Bran Stark.' },
      { question: 'What happens to Tyrion at the end of Game of Thrones?', answer: 'In the series finale, Tyrion is named Hand of the King to Bran Stark after convincing the lords of Westeros to elect Bran as ruler. He accepts the role as a form of penance, dedicated to rebuilding the realm he helped damage through his service to Daenerys.' }
    ],
    videos: [
      { title: 'Tyrion Lannister - Trial Speech', youtubeId: 'e4Uq8O5Z1SI', description: 'Tyrion\'s legendary trial speech where he condemns the people of King\'s Landing.' },
      { title: 'Tyrion Lannister - I Drink and I Know Things', youtubeId: 'DSMFhMRCMCg', description: 'A compilation of Tyrion\'s wittiest moments throughout the series.' }
    ],
    relatedCharacterSlugs: ['cersei-lannister', 'jaime-lannister', 'daenerys-targaryen', 'jon-snow', 'sansa-stark'],
    tags: ['fan-favorite', 'witty', 'complex', 'iconic']
  },
  {
    slug: 'cersei-lannister',
    name: 'Cersei Lannister',
    showSlug: 'game-of-thrones',
    showTitle: 'Game of Thrones',
    actorSlug: 'lena-headey',
    actorName: 'Lena Headey',
    seasonsActive: 'Seasons 1–8',
    characterArc: 'Cersei Lannister is the queen consort of King Robert Baratheon and twin sister of Jaime Lannister, with whom she maintains a secret incestuous relationship. Beautiful, ambitious, and ruthless, Cersei has been shaped by a lifetime of being underestimated and controlled by men in a patriarchal society. She genuinely believes she would have been a great ruler if born male, and much of her cruelty stems from a desperate need to seize the power that was always denied her by virtue of her gender.\n\nCersei\'s defining trait is her fierce love for her children — Joffrey, Myrcella, and Tommen — whom she sees as extensions of herself and her claim to power. A prophecy from the witch Maggy the Frog haunts her: that all her children will die and a younger, more beautiful queen will cast her down. This prophecy drives her paranoia and increasingly erratic behavior as she watches it come true one child at a time.\n\nAfter the death of her last child Tommen, Cersei seizes the Iron Throne for herself, having destroyed the Great Sept of Baelor with wildfire to eliminate the High Sparrow and her enemies. As queen, she rules through fear and manipulation, refusing to send her armies north to fight the White Walkers and instead plotting to consolidate her own power while her rivals exhaust themselves.\n\nCersei\'s end comes not through dramatic confrontation but through the collapse of the Red Keep during Daenerys\'s attack on King\'s Landing. She dies in the arms of Jaime beneath tons of rubble, terrified and vulnerable — stripped of her crown, her power, and her defenses in her final moments.',
    keyEpisodes: [
      { title: 'You Win or You Die', season: 1, episode: 7, description: 'Cersei delivers the iconic line: "When you play the game of thrones, you win or you die."' },
      { title: 'Mother\'s Mercy', season: 5, episode: 10, description: 'Cersei endures her humiliating Walk of Shame through King\'s Landing after confessing to the High Sparrow.' },
      { title: 'The Winds of Winter', season: 6, episode: 10, description: 'Cersei destroys the Great Sept of Baelor with wildfire, killing the High Sparrow, the Tyrells, and hundreds of others, then claims the Iron Throne.' },
      { title: 'The Last of the Starks', season: 8, episode: 4, description: 'Cersei orders the execution of Missandei, provoking Daenerys toward her destructive path.' },
      { title: 'The Bells', season: 8, episode: 5, description: 'Cersei dies with Jaime in the collapsing Red Keep as Daenerys destroys King\'s Landing.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Lena_Headey_by_Gage_Skidmore_2.jpg/440px-Lena_Headey_by_Gage_Skidmore_2.jpg', alt: 'Lena Headey, who portrays Cersei Lannister in Game of Thrones', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/gameofthrones', url: 'https://www.reddit.com/r/gameofthrones/', platform: 'Reddit', description: 'Main Game of Thrones subreddit' },
        { name: 'r/freefolk', url: 'https://www.reddit.com/r/freefolk/', platform: 'Reddit', description: 'Spoiler-friendly GOT community' },
        { name: 'r/CerseiWinsTheThrone', url: 'https://www.reddit.com/r/CerseiWinsTheThrone/', platform: 'Reddit', description: 'Community for fans who rallied behind Cersei during the final season' }
      ],
      youtubeChannels: [
        { name: 'Cersei Lannister - Best Scenes Compilation', url: 'https://www.youtube.com/results?search_query=cersei+lannister+best+scenes', platform: 'YouTube', description: 'Compilations of Cersei\'s most iconic moments' }
      ],
      twitterAccounts: [
        { name: '@GameOfThrones', url: 'https://twitter.com/GameOfThrones', platform: 'Twitter/X', description: 'Official Game of Thrones account' }
      ],
      fanSites: [
        { name: 'A Wiki of Ice and Fire - Cersei', url: 'https://awoiaf.westeros.org/index.php/Cersei_Lannister', platform: 'Web', description: 'Cersei Lannister article on the ASOIAF community wiki' },
        { name: 'Game of Thrones Wiki - Cersei', url: 'https://gameofthrones.fandom.com/wiki/Cersei_Lannister', platform: 'Web', description: 'Cersei page on the Fandom wiki' }
      ],
      instagramAccounts: [],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 88, engagement: 90, socialActivity: 85, memeVelocity: 91, fanArtDensity: 82, fandomLongevity: 93 },
    faqs: [
      { question: 'Who plays Cersei Lannister in Game of Thrones?', answer: 'Lena Headey plays Cersei Lannister across all eight seasons of Game of Thrones. Headey received five Primetime Emmy Award nominations for Outstanding Supporting Actress in a Drama Series for the role.' },
      { question: 'What is Cersei\'s Walk of Shame?', answer: 'In Season 5, Episode 10 ("Mother\'s Mercy"), Cersei is forced to walk naked through the streets of King\'s Landing as punishment by the Faith Militant, while a septa rings a bell and chants "Shame." The scene is one of the most memorable and discussed in the show\'s history.' },
      { question: 'How does Cersei Lannister die?', answer: 'Cersei dies in Season 8, Episode 5 ("The Bells") when the Red Keep collapses during Daenerys\'s dragon attack on King\'s Landing. She is crushed by falling rubble while in the arms of her brother and lover Jaime Lannister.' },
      { question: 'Why does Cersei blow up the Sept of Baelor?', answer: 'In Season 6, Episode 10 ("The Winds of Winter"), Cersei uses hidden caches of wildfire to destroy the Great Sept of Baelor, killing the High Sparrow, Margaery Tyrell, Loras Tyrell, and many others. She does this to avoid her trial and eliminate all her political enemies in one devastating act.' },
      { question: 'What is the Maggy the Frog prophecy about Cersei?', answer: 'As a child, Cersei visited a witch named Maggy the Frog who prophesied that Cersei would become queen, that a younger and more beautiful queen would cast her down, and that all three of her children would die. In the books, the prophecy also includes the "valonqar" (little brother) who would strangle her.' }
    ],
    videos: [
      { title: 'Cersei Lannister - The Walk of Shame', youtubeId: 'mFp6BJAS_2g', description: 'The powerful Walk of Shame sequence from the Season 5 finale.' },
      { title: 'Cersei Blows Up the Sept of Baelor', youtubeId: 'FLiC3n1wJSg', description: 'Cersei\'s wildfire destruction of the Great Sept in the Season 6 finale.' }
    ],
    relatedCharacterSlugs: ['jaime-lannister', 'tyrion-lannister', 'daenerys-targaryen', 'sansa-stark', 'jon-snow'],
    tags: ['villain', 'antagonist', 'complex', 'iconic']
  },
  {
    slug: 'arya-stark',
    name: 'Arya Stark',
    showSlug: 'game-of-thrones',
    showTitle: 'Game of Thrones',
    actorSlug: 'maisie-williams',
    actorName: 'Maisie Williams',
    seasonsActive: 'Seasons 1–8',
    characterArc: 'Arya Stark is the youngest daughter of Ned Stark, a tomboyish girl who rejects the traditional expectations of a highborn lady in Westeros. From the start, she is more interested in swords than sewing, and her father gifts her a thin blade she names Needle. Her world shatters when she witnesses her father\'s execution in King\'s Landing, an event that sets her on a years-long journey of survival, vengeance, and identity.\n\nArya\'s odyssey takes her across Westeros and to Essos. She travels with Yoren of the Night\'s Watch, survives Harrenhal under Tywin Lannister\'s nose, and wanders the Riverlands with the Hound, who becomes an unlikely mentor and companion. Each experience strips away another layer of her childhood innocence while sharpening her into a more dangerous person. Her list of names — people she intends to kill — becomes a nightly prayer.\n\nIn Braavos, Arya trains with the Faceless Men at the House of Black and White, learning the art of assassination and the ability to wear other people\'s faces. She ultimately rejects their philosophy of becoming "No One," reclaiming her identity as Arya Stark of Winterfell. She returns to Westeros and uses her skills to exact revenge on House Frey, poisoning the entire male line for their role in the Red Wedding.\n\nArya\'s crowning moment comes during the Battle of Winterfell, when she kills the Night King with a Valyrian steel dagger, ending the threat of the White Walkers. In the series finale, she declines to return to a conventional life, instead sailing west of Westeros to explore unknown lands — a fitting end for a character who always refused to be what others expected.',
    keyEpisodes: [
      { title: 'Baelor', season: 1, episode: 9, description: 'Arya witnesses her father Ned Stark\'s execution at the Great Sept of Baelor.' },
      { title: 'The Winds of Winter', season: 6, episode: 10, description: 'Arya kills Walder Frey, avenging the Red Wedding by feeding him his own sons in a pie.' },
      { title: 'The Long Night', season: 8, episode: 3, description: 'Arya kills the Night King with a Valyrian steel dagger, saving all of humanity from the White Walkers.' },
      { title: 'The Iron Throne', season: 8, episode: 6, description: 'Arya sails west of Westeros to explore the unknown world beyond the maps.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Maisie_Williams_by_Gage_Skidmore_2.jpg/440px-Maisie_Williams_by_Gage_Skidmore_2.jpg', alt: 'Maisie Williams, who portrays Arya Stark in Game of Thrones', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/gameofthrones', url: 'https://www.reddit.com/r/gameofthrones/', platform: 'Reddit', description: 'Main Game of Thrones subreddit' },
        { name: 'r/freefolk', url: 'https://www.reddit.com/r/freefolk/', platform: 'Reddit', description: 'Spoiler-friendly GOT meme community' },
        { name: 'r/AryaWinsTheThrone', url: 'https://www.reddit.com/r/AryaWinsTheThrone/', platform: 'Reddit', description: 'Fan community that rallied behind Arya during the final season' }
      ],
      youtubeChannels: [
        { name: 'Arya Stark - Kill List Journey', url: 'https://www.youtube.com/results?search_query=arya+stark+kill+list+journey', platform: 'YouTube', description: 'Videos tracking Arya\'s kill list and journey throughout the series' }
      ],
      twitterAccounts: [
        { name: '@Maboroshi_', url: 'https://twitter.com/Maisie_Williams', platform: 'Twitter/X', description: 'Maisie Williams\' official Twitter account' }
      ],
      fanSites: [
        { name: 'A Wiki of Ice and Fire - Arya', url: 'https://awoiaf.westeros.org/index.php/Arya_Stark', platform: 'Web', description: 'Arya Stark article on the ASOIAF community wiki' },
        { name: 'Game of Thrones Wiki - Arya', url: 'https://gameofthrones.fandom.com/wiki/Arya_Stark', platform: 'Web', description: 'Arya page on the Fandom wiki' }
      ],
      instagramAccounts: [
        { name: '@maboroshi_', url: 'https://www.instagram.com/maboroshi_/', platform: 'Instagram', description: 'Maisie Williams\' official Instagram' }
      ],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 91, engagement: 93, socialActivity: 89, memeVelocity: 90, fanArtDensity: 91, fandomLongevity: 94 },
    faqs: [
      { question: 'Who plays Arya Stark in Game of Thrones?', answer: 'Maisie Williams plays Arya Stark in all eight seasons of Game of Thrones. Williams was only 12 years old when she was cast in the role and grew up on the show, receiving an Emmy nomination for Outstanding Supporting Actress in a Drama Series.' },
      { question: 'Does Arya Stark kill the Night King?', answer: 'Yes. In Season 8, Episode 3 ("The Long Night"), Arya kills the Night King by leaping at him with a Valyrian steel dagger. When the Night King catches her by the throat, she drops the dagger from one hand to the other and stabs him, causing him and his entire army of the dead to shatter.' },
      { question: 'What is Arya\'s kill list?', answer: 'Arya maintains a list of people she intends to kill, reciting their names as a nightly prayer. The list changes over time but has included Cersei Lannister, the Mountain, Walder Frey, Meryn Trant, Joffrey Baratheon, Tywin Lannister, the Red Woman, Beric Dondarrion, Thoros of Myr, the Hound, and Ilyn Payne.' },
      { question: 'What are the Faceless Men in Game of Thrones?', answer: 'The Faceless Men are a guild of assassins based in Braavos who worship the Many-Faced God (death). They can magically assume the faces and identities of dead people. Arya trains with them at the House of Black and White under a mentor known as Jaqen H\'ghar, learning their skills but ultimately rejecting their philosophy of becoming "No One."' },
      { question: 'Where does Arya go at the end of Game of Thrones?', answer: 'In the series finale, Arya sails west of Westeros aboard a ship with a Stark direwolf sigil on its sails, seeking to explore the unknown lands beyond the edge of the map. This mirrors real-world explorers and reflects Arya\'s lifelong refusal to follow a conventional path.' }
    ],
    videos: [
      { title: 'Arya Stark Kills the Night King', youtubeId: '_t8uyYBpDYg', description: 'The climactic moment when Arya kills the Night King during the Battle of Winterfell.' },
      { title: 'Arya Stark - A Girl Has No Name', youtubeId: '4sRICHVBdWM', description: 'Arya\'s training with the Faceless Men and her journey of identity.' }
    ],
    relatedCharacterSlugs: ['jon-snow', 'sansa-stark', 'cersei-lannister', 'daenerys-targaryen', 'tyrion-lannister'],
    tags: ['fan-favorite', 'assassin', 'hero', 'coming-of-age']
  },
  {
    slug: 'sansa-stark',
    name: 'Sansa Stark',
    showSlug: 'game-of-thrones',
    showTitle: 'Game of Thrones',
    actorSlug: 'sophie-turner',
    actorName: 'Sophie Turner',
    seasonsActive: 'Seasons 1–8',
    characterArc: 'Sansa Stark begins as the eldest daughter of Ned Stark, a naive and romantic young girl who dreams of marrying a prince and living in the capital. She gets her wish when she is betrothed to Prince Joffrey Baratheon, but her fairy tale is shattered when Joffrey reveals his cruelty and her father is executed before her eyes. Trapped in King\'s Landing as a political hostage, Sansa endures years of abuse, humiliation, and manipulation at the hands of Joffrey, Cersei, and Littlefinger.\n\nSansa\'s education in the politics of power is brutal and involuntary. She learns from some of the most cunning players in Westeros — observing Cersei\'s ruthlessness, Margaery\'s charm, and Littlefinger\'s manipulation. Her forced marriage to Tyrion Lannister, escape from King\'s Landing, and subsequent marriage to Ramsay Bolton represent a succession of horrors that would break most people. Instead, each trial forges her into a more perceptive and resilient political operator.\n\nReunited with Jon Snow, Sansa plays a crucial role in retaking Winterfell from Ramsay Bolton, secretly securing the Knights of the Vale to turn the Battle of the Bastards. She emerges as Lady of Winterfell and a shrewd leader in her own right, managing the North\'s resources and politics while Jon focuses on the threat of the White Walkers. Her growing distrust of Daenerys Targaryen proves prophetic.\n\nIn the series finale, Sansa achieves what she never dared dream as a child — not the role of a queen consort in a fairy tale, but genuine political power earned through suffering and wisdom. She is crowned Queen in the North, securing Northern independence and ruling her homeland on her own terms. Her arc from naive girl to sovereign queen is among the show\'s most complete character transformations.',
    keyEpisodes: [
      { title: 'Baelor', season: 1, episode: 9, description: 'Sansa watches helplessly as Joffrey orders her father Ned Stark\'s execution.' },
      { title: 'Unbowed, Unbent, Unbroken', season: 5, episode: 6, description: 'Sansa is married to Ramsay Bolton in a controversial and traumatic scene at Winterfell.' },
      { title: 'Battle of the Bastards', season: 6, episode: 9, description: 'Sansa brings the Knights of the Vale to rescue Jon Snow\'s forces and watches Ramsay Bolton die.' },
      { title: 'The Iron Throne', season: 8, episode: 6, description: 'Sansa is crowned Queen in the North after securing Northern independence.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Sophie_Turner_by_Gage_Skidmore.jpg/440px-Sophie_Turner_by_Gage_Skidmore.jpg', alt: 'Sophie Turner, who portrays Sansa Stark in Game of Thrones', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/gameofthrones', url: 'https://www.reddit.com/r/gameofthrones/', platform: 'Reddit', description: 'Main Game of Thrones subreddit' },
        { name: 'r/freefolk', url: 'https://www.reddit.com/r/freefolk/', platform: 'Reddit', description: 'Spoiler-friendly GOT community' },
        { name: 'r/SansaWinsTheThrone', url: 'https://www.reddit.com/r/SansaWinsTheThrone/', platform: 'Reddit', description: 'Community for fans who backed Sansa during the final season' }
      ],
      youtubeChannels: [
        { name: 'Sansa Stark - Character Evolution', url: 'https://www.youtube.com/results?search_query=sansa+stark+character+evolution', platform: 'YouTube', description: 'Videos analyzing Sansa\'s transformation from naive girl to Queen in the North' }
      ],
      twitterAccounts: [
        { name: '@SophieT', url: 'https://twitter.com/SophieT', platform: 'Twitter/X', description: 'Sophie Turner\'s official Twitter account' }
      ],
      fanSites: [
        { name: 'A Wiki of Ice and Fire - Sansa', url: 'https://awoiaf.westeros.org/index.php/Sansa_Stark', platform: 'Web', description: 'Sansa Stark article on the ASOIAF community wiki' },
        { name: 'Game of Thrones Wiki - Sansa', url: 'https://gameofthrones.fandom.com/wiki/Sansa_Stark', platform: 'Web', description: 'Sansa page on the Fandom wiki' }
      ],
      instagramAccounts: [
        { name: '@sophiet', url: 'https://www.instagram.com/sophiet/', platform: 'Instagram', description: 'Sophie Turner\'s official Instagram' }
      ],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 83, engagement: 85, socialActivity: 80, memeVelocity: 78, fanArtDensity: 84, fandomLongevity: 89 },
    faqs: [
      { question: 'Who plays Sansa Stark in Game of Thrones?', answer: 'Sophie Turner plays Sansa Stark across all eight seasons of Game of Thrones. Turner was 13 when she was cast and, like her co-star Maisie Williams, grew up on the show. The role launched her career, leading to other major roles including Jean Grey in the X-Men films.' },
      { question: 'Does Sansa Stark become Queen?', answer: 'Yes. In the series finale ("The Iron Throne," Season 8, Episode 6), Sansa secures Northern independence from the Six Kingdoms and is crowned Queen in the North. She rules Winterfell and the North as a sovereign monarch, separate from the realm governed by King Bran Stark.' },
      { question: 'What happens between Sansa and Ramsay Bolton?', answer: 'Sansa is married to Ramsay Bolton in Season 5 as part of Littlefinger\'s scheme. Ramsay subjects her to horrific abuse during their marriage. Sansa escapes Winterfell with Theon Greyjoy and later watches as Ramsay is killed by his own hounds after the Battle of the Bastards.' },
      { question: 'Why does Sansa distrust Daenerys?', answer: 'Sansa distrusts Daenerys because she fears another foreign ruler controlling the North and recognizes the danger of Daenerys\'s growing authoritarianism. Sansa\'s experiences with Cersei, Joffrey, Littlefinger, and Ramsay taught her to be wary of those who seek power, and she ultimately proves right about Daenerys\'s destructive nature.' }
    ],
    videos: [
      { title: 'Sansa Stark - Queen in the North', youtubeId: 'yz1Fvaq7Lr8', description: 'Sansa\'s coronation as Queen in the North in the series finale.' },
      { title: 'Sansa Feeds Ramsay to His Hounds', youtubeId: 'V7_w3nAOGkI', description: 'Sansa\'s moment of vengeance against Ramsay Bolton.' }
    ],
    relatedCharacterSlugs: ['arya-stark', 'jon-snow', 'cersei-lannister', 'tyrion-lannister', 'daenerys-targaryen'],
    tags: ['survivor', 'queen', 'complex', 'coming-of-age']
  },
  {
    slug: 'jaime-lannister',
    name: 'Jaime Lannister',
    showSlug: 'game-of-thrones',
    showTitle: 'Game of Thrones',
    actorSlug: 'nikolaj-coster-waldau',
    actorName: 'Nikolaj Coster-Waldau',
    seasonsActive: 'Seasons 1–8',
    characterArc: 'Jaime Lannister is introduced as one of the show\'s most despicable characters — an arrogant, amoral knight who pushes a child out of a window to protect his incestuous secret with his twin sister Cersei. Known throughout Westeros as the "Kingslayer" for breaking his oath and killing the Mad King Aerys Targaryen, Jaime is universally reviled as a man without honor. Yet over the course of the series, he undergoes one of television\'s most remarkable redemption arcs.\n\nThe turning point comes when Jaime is captured and loses his sword hand — the very thing that defined his identity as the greatest swordsman in Westeros. Stripped of his physical prowess, Jaime is forced to confront who he really is. His relationship with Brienne of Tarth, forged through shared captivity and mutual respect, draws out his better nature. His famous confession in the bath at Harrenhal — revealing the true reason he killed the Mad King was to save the people of King\'s Landing from wildfire — reframes his entire history.\n\nAs the series progresses, Jaime increasingly acts with honor. He sends Brienne to find and protect the Stark girls, he rides north to fight alongside the living against the White Walkers despite Cersei\'s refusal, and he knights Brienne on the eve of battle. For several seasons, it appears Jaime will complete his transformation from villain to hero, breaking free of Cersei\'s toxic hold.\n\nHowever, in one of the show\'s most debated choices, Jaime ultimately returns to Cersei. He leaves Brienne weeping at Winterfell and rides south to die with his sister in the collapsing Red Keep. Whether this represents a tragic failure to escape his addiction to Cersei or a deliberate subversion of the redemption arc remains one of the most passionately debated aspects of the show\'s final season.',
    keyEpisodes: [
      { title: 'Winter Is Coming', season: 1, episode: 1, description: 'Jaime pushes Bran Stark from a tower window after Bran witnesses Jaime and Cersei together.' },
      { title: 'Kissed by Fire', season: 3, episode: 5, description: 'Jaime confesses to Brienne why he killed the Mad King in the legendary bathtub scene at Harrenhal.' },
      { title: 'A Knight of the Seven Kingdoms', season: 8, episode: 2, description: 'Jaime knights Brienne of Tarth on the eve of the Battle of Winterfell, one of the show\'s most emotional moments.' },
      { title: 'The Last of the Starks', season: 8, episode: 4, description: 'Jaime leaves Brienne and rides south to return to Cersei, breaking Brienne\'s heart.' },
      { title: 'The Bells', season: 8, episode: 5, description: 'Jaime dies with Cersei beneath the Red Keep as King\'s Landing is destroyed.' }
    ],
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Nikolaj_Coster-Waldau_by_Gage_Skidmore_2.jpg/440px-Nikolaj_Coster-Waldau_by_Gage_Skidmore_2.jpg', alt: 'Nikolaj Coster-Waldau, who portrays Jaime Lannister in Game of Thrones', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    fanEcosystem: {
      redditCommunities: [
        { name: 'r/gameofthrones', url: 'https://www.reddit.com/r/gameofthrones/', platform: 'Reddit', description: 'Main Game of Thrones subreddit' },
        { name: 'r/freefolk', url: 'https://www.reddit.com/r/freefolk/', platform: 'Reddit', description: 'Spoiler-friendly GOT community with much Jaime arc debate' },
        { name: 'r/asoiaf', url: 'https://www.reddit.com/r/asoiaf/', platform: 'Reddit', description: 'Book community where Jaime\'s show vs. book arc is heavily discussed' }
      ],
      youtubeChannels: [
        { name: 'Alt Shift X - Jaime Lannister', url: 'https://www.youtube.com/results?search_query=alt+shift+x+jaime+lannister', platform: 'YouTube', description: 'In-depth analysis of Jaime\'s redemption arc and character journey' }
      ],
      twitterAccounts: [
        { name: '@GameOfThrones', url: 'https://twitter.com/GameOfThrones', platform: 'Twitter/X', description: 'Official Game of Thrones account' }
      ],
      fanSites: [
        { name: 'A Wiki of Ice and Fire - Jaime', url: 'https://awoiaf.westeros.org/index.php/Jaime_Lannister', platform: 'Web', description: 'Jaime Lannister article on the ASOIAF community wiki' },
        { name: 'Game of Thrones Wiki - Jaime', url: 'https://gameofthrones.fandom.com/wiki/Jaime_Lannister', platform: 'Web', description: 'Jaime page on the Fandom wiki' }
      ],
      instagramAccounts: [
        { name: '@nikolajwilliamcw', url: 'https://www.instagram.com/nikolajwilliamcw/', platform: 'Instagram', description: 'Nikolaj Coster-Waldau\'s official Instagram' }
      ],
      tiktokCreators: []
    },
    fanHeatIndex: { overall: 87, engagement: 89, socialActivity: 84, memeVelocity: 86, fanArtDensity: 85, fandomLongevity: 92 },
    faqs: [
      { question: 'Who plays Jaime Lannister in Game of Thrones?', answer: 'Nikolaj Coster-Waldau plays Jaime Lannister across all eight seasons of Game of Thrones. The Danish actor brought nuance and depth to a character who transforms from villain to one of the show\'s most sympathetic figures.' },
      { question: 'Why is Jaime called the Kingslayer?', answer: 'Jaime earned the name "Kingslayer" for killing King Aerys II Targaryen (the Mad King) during Robert\'s Rebellion. As a member of the Kingsguard, Jaime was sworn to protect the king, so breaking that oath — even to save the people of King\'s Landing from wildfire — branded him as an oathbreaker and a man without honor.' },
      { question: 'How does Jaime Lannister lose his hand?', answer: 'In Season 3, Jaime\'s right hand is cut off by Locke, a soldier serving Roose Bolton, while Jaime is being transported as a prisoner. Losing his sword hand fundamentally changes Jaime, stripping away the identity he built as the greatest swordsman in the Seven Kingdoms.' },
      { question: 'Do Jaime and Brienne get together?', answer: 'Yes. In Season 8, Episode 4 ("The Last of the Starks"), Jaime and Brienne sleep together at Winterfell after the battle against the White Walkers. However, Jaime subsequently leaves Brienne to return to Cersei, breaking Brienne\'s heart in one of the show\'s most emotional scenes.' },
      { question: 'How does Jaime Lannister die?', answer: 'Jaime dies in Season 8, Episode 5 ("The Bells") alongside his twin sister Cersei. After being wounded by Euron Greyjoy, Jaime finds Cersei in the Red Keep and they are crushed together by falling rubble as Daenerys\'s dragon attack brings the fortress down around them.' }
    ],
    videos: [
      { title: 'Jaime Lannister - The Kingslayer\'s Confession', youtubeId: 'TbwroS0YP54', description: 'Jaime\'s legendary bathtub confession to Brienne about why he killed the Mad King.' },
      { title: 'Jaime Knights Brienne', youtubeId: 'cBe9gINaIEg', description: 'Jaime knights Brienne of Tarth on the eve of the Battle of Winterfell.' }
    ],
    relatedCharacterSlugs: ['cersei-lannister', 'tyrion-lannister', 'jon-snow', 'daenerys-targaryen', 'arya-stark'],
    tags: ['redemption-arc', 'complex', 'anti-hero', 'kingslayer']
  }
];

module.exports = { gotCharacters };
