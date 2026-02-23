// TVCeleb.com - Complete Actor Data
// ~50 Actors Across 10 Iconic TV Shows

const actors = [
  // ============================================================
  // BREAKING BAD ACTORS
  // ============================================================
  {
    slug: 'bryan-cranston',
    name: 'Bryan Cranston',
    bio: 'Bryan Lee Cranston is an American actor, director, and producer who rose to global fame for his portrayal of Walter White in the AMC drama series Breaking Bad (2008-2013). Born on March 7, 1956, in Canoga Park, California, Cranston began his acting career in the early 1980s with small television and film roles before landing recurring parts in shows like Airwolf and Raising Miranda.\n\nCranston first gained widespread recognition as Hal, the lovably eccentric father in the Fox sitcom Malcolm in the Middle (2000-2006), earning three Emmy nominations for the role. However, it was his transformative performance as the chemistry-teacher-turned-drug-lord Walter White that cemented his legacy as one of the greatest dramatic actors in television history. The role earned him four consecutive Primetime Emmy Awards for Outstanding Lead Actor in a Drama Series.\n\nBeyond Breaking Bad, Cranston has built an impressive film career with roles in Argo (2012), Godzilla (2014), and Trumbo (2015), the latter earning him an Academy Award nomination. He also won a Tony Award for his portrayal of Lyndon B. Johnson in the Broadway play All the Way (2014). Cranston continues to be one of the most respected and versatile actors in the entertainment industry.',
    birthDate: '1956-03-07',
    birthPlace: 'Canoga Park, California, USA',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bryan_Cranston_by_Gage_Skidmore_2.jpg/440px-Bryan_Cranston_by_Gage_Skidmore_2.jpg', alt: 'Bryan Cranston at San Diego Comic-Con', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    knownFor: [{ characterSlug: 'walter-white', characterName: 'Walter White', showSlug: 'breaking-bad', showTitle: 'Breaking Bad', years: '2008-2013' }],
    otherNotableRoles: ['Hal in Malcolm in the Middle (2000-2006)', 'Dalton Trumbo in Trumbo (2015)', 'Lyndon B. Johnson in All the Way (2014, Broadway)', 'Joe Brody in Godzilla (2014)'],
    awards: ['4x Primetime Emmy Award for Outstanding Lead Actor in a Drama Series (Breaking Bad)', '1x Tony Award for Best Actor in a Play (All the Way)', '1x Primetime Emmy Award for Outstanding Lead Actor in a Limited Series (All the Way)', 'Academy Award Nomination for Best Actor (Trumbo)'],
    socialLinks: { instagram: 'https://www.instagram.com/bryancranston/', twitter: 'https://twitter.com/BryanCranston', imdb: 'https://www.imdb.com/name/nm0186505/', wikipedia: 'https://en.wikipedia.org/wiki/Bryan_Cranston' },
    faqs: [
      { question: 'What is Bryan Cranston best known for?', answer: 'Bryan Cranston is best known for playing Walter White in the AMC series Breaking Bad (2008-2013), widely regarded as one of the greatest performances in television history.' },
      { question: 'How many Emmy Awards has Bryan Cranston won?', answer: 'Bryan Cranston has won six Primetime Emmy Awards: four for Outstanding Lead Actor in a Drama Series for Breaking Bad, one for Outstanding Lead Actor in a Limited Series for All the Way, and one as a producer on Breaking Bad.' },
      { question: 'Was Bryan Cranston in Malcolm in the Middle?', answer: 'Yes, Bryan Cranston played Hal, the lovable and quirky father, in the Fox comedy Malcolm in the Middle from 2000 to 2006, earning three Emmy nominations.' },
      { question: 'Has Bryan Cranston won a Tony Award?', answer: 'Yes, Bryan Cranston won the Tony Award for Best Actor in a Play in 2014 for his portrayal of President Lyndon B. Johnson in All the Way.' }
    ],
    tags: ['emmy-winner', 'dramatic-actor', 'tony-winner']
  },
  {
    slug: 'aaron-paul',
    name: 'Aaron Paul',
    bio: 'Aaron Paul Sturtevant, known professionally as Aaron Paul, is an American actor born on August 27, 1979, in Emmett, Idaho. He moved to Los Angeles after high school to pursue acting, taking on small roles in television shows including Beverly Hills, 90210 and ER before his breakthrough.\n\nPaul achieved international stardom as Jesse Pinkman, the troubled former student turned methamphetamine cook alongside Bryan Cranston in Breaking Bad (2008-2013). His raw, emotional performance earned him three Primetime Emmy Awards for Outstanding Supporting Actor in a Drama Series. He reprised the role in the 2019 Netflix film El Camino: A Breaking Bad Movie.\n\nFollowing Breaking Bad, Paul has taken on diverse roles including the Hulu series The Path (2016-2018), HBO\'s Westworld (2020), and voicing Todd Chavez in the Netflix animated series BoJack Horseman (2014-2020).',
    birthDate: '1979-08-27',
    birthPlace: 'Emmett, Idaho, USA',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Aaron_Paul_by_Gage_Skidmore.jpg/440px-Aaron_Paul_by_Gage_Skidmore.jpg', alt: 'Aaron Paul at a public event', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    knownFor: [{ characterSlug: 'jesse-pinkman', characterName: 'Jesse Pinkman', showSlug: 'breaking-bad', showTitle: 'Breaking Bad', years: '2008-2013' }],
    otherNotableRoles: ['Jesse Pinkman in El Camino: A Breaking Bad Movie (2019)', 'Todd Chavez in BoJack Horseman (2014-2020, voice)', 'Eddie Lane in The Path (2016-2018)', 'Caleb Nichols in Westworld (2020)'],
    awards: ['3x Primetime Emmy Award for Outstanding Supporting Actor in a Drama Series (Breaking Bad)', 'Saturn Award for Best Supporting Actor on Television (Breaking Bad)', 'Screen Actors Guild Award for Outstanding Ensemble in a Drama Series (Breaking Bad)'],
    socialLinks: { instagram: 'https://www.instagram.com/aaronpaul/', twitter: 'https://twitter.com/aaronpaul_8', imdb: 'https://www.imdb.com/name/nm0666739/', wikipedia: 'https://en.wikipedia.org/wiki/Aaron_Paul' },
    faqs: [
      { question: 'What is Aaron Paul best known for?', answer: 'Aaron Paul is best known for playing Jesse Pinkman in Breaking Bad (2008-2013), earning him three Emmy Awards.' },
      { question: 'How many Emmy Awards has Aaron Paul won?', answer: 'Aaron Paul won three Primetime Emmy Awards for Outstanding Supporting Actor in a Drama Series for Breaking Bad (2010, 2012, 2014).' },
      { question: 'What is El Camino about?', answer: 'El Camino: A Breaking Bad Movie (2019) is a Netflix sequel following Jesse Pinkman after his escape from captivity, as he attempts to build a new life.' },
      { question: 'What other shows has Aaron Paul been in?', answer: 'Beyond Breaking Bad, Aaron Paul starred in The Path on Hulu, Westworld on HBO, and voiced Todd Chavez in BoJack Horseman on Netflix.' }
    ],
    tags: ['emmy-winner', 'dramatic-actor']
  },
  {
    slug: 'dean-norris',
    name: 'Dean Norris',
    bio: 'Dean Joseph Norris is an American actor born on April 8, 1963, in South Bend, Indiana. He graduated from Harvard University before attending the Royal Academy of Dramatic Art in London. He began his career in the late 1980s with small film and television roles.\n\nNorris is best known for his role as DEA agent Hank Schrader in the AMC series Breaking Bad (2008-2013). His portrayal of the boisterous yet determined brother-in-law of Walter White earned widespread critical acclaim, particularly in the final seasons where Hank\'s pursuit of Heisenberg reached its dramatic climax.\n\nBeyond Breaking Bad, Norris has appeared in Total Recall (1990), Starship Troopers (1997), Little Miss Sunshine (2006), and starred in the CBS series Under the Dome (2013-2015).',
    birthDate: '1963-04-08',
    birthPlace: 'South Bend, Indiana, USA',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Dean_Norris_by_Gage_Skidmore_2.jpg/440px-Dean_Norris_by_Gage_Skidmore_2.jpg', alt: 'Dean Norris at San Diego Comic-Con', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    knownFor: [{ characterSlug: 'hank-schrader', characterName: 'Hank Schrader', showSlug: 'breaking-bad', showTitle: 'Breaking Bad', years: '2008-2013' }],
    otherNotableRoles: ['Big Jim Rennie in Under the Dome (2013-2015)', 'Tony in Total Recall (1990)', 'Colonel Nelec in Super 8 (2011)'],
    awards: ['Screen Actors Guild Award for Outstanding Ensemble in a Drama Series (Breaking Bad)', 'Critics\' Choice Television Award Nomination for Best Supporting Actor in a Drama Series'],
    socialLinks: { instagram: 'https://www.instagram.com/deanjnorris/', twitter: 'https://twitter.com/DeanNorris', imdb: 'https://www.imdb.com/name/nm0606487/', wikipedia: 'https://en.wikipedia.org/wiki/Dean_Norris' },
    faqs: [
      { question: 'What is Dean Norris best known for?', answer: 'Dean Norris is best known for playing DEA agent Hank Schrader in Breaking Bad (2008-2013).' },
      { question: 'Did Dean Norris go to Harvard?', answer: 'Yes, Dean Norris graduated from Harvard University and also studied at the Royal Academy of Dramatic Art in London.' },
      { question: 'What other shows has Dean Norris been in?', answer: 'Beyond Breaking Bad, Dean Norris starred in Under the Dome (2013-2015) and has appeared in films like Total Recall, Starship Troopers, and Little Miss Sunshine.' }
    ],
    tags: ['character-actor', 'dramatic-actor']
  },
  {
    slug: 'anna-gunn',
    name: 'Anna Gunn',
    bio: 'Anna Gunn is an American actress born on August 11, 1968, in Cleveland, Ohio. She grew up in Santa Fe, New Mexico, and studied acting at Northwestern University. Gunn began her career in theater and took on early television roles in Seinfeld, NYPD Blue, and Deadwood.\n\nGunn is best known for her portrayal of Skyler White in the AMC drama Breaking Bad (2008-2013). Her nuanced performance earned her two consecutive Primetime Emmy Awards for Outstanding Supporting Actress in a Drama Series in 2013 and 2014. The role sparked significant cultural conversation about how audiences perceive female characters in television.\n\nOutside of Breaking Bad, Gunn has appeared in the Fox series Gracepoint (2014), the British series Shetland, and films such as Equity (2016).',
    birthDate: '1968-08-11',
    birthPlace: 'Cleveland, Ohio, USA',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Anna_Gunn_2012_%28cropped%29.jpg/440px-Anna_Gunn_2012_%28cropped%29.jpg', alt: 'Anna Gunn at an event', attribution: 'Dominick D, CC BY-SA 2.0, via Wikimedia Commons', width: 440, height: 600 },
    knownFor: [{ characterSlug: 'skyler-white', characterName: 'Skyler White', showSlug: 'breaking-bad', showTitle: 'Breaking Bad', years: '2008-2013' }],
    otherNotableRoles: ['Martha Bullock in Deadwood (2004-2006)', 'Detective Ellie Miller in Gracepoint (2014)', 'Naomi Bishop in Equity (2016)'],
    awards: ['2x Primetime Emmy Award for Outstanding Supporting Actress in a Drama Series (Breaking Bad, 2013-2014)', 'Screen Actors Guild Award for Outstanding Ensemble in a Drama Series (Breaking Bad)'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0348152/', wikipedia: 'https://en.wikipedia.org/wiki/Anna_Gunn' },
    faqs: [
      { question: 'What is Anna Gunn best known for?', answer: 'Anna Gunn is best known for playing Skyler White in Breaking Bad (2008-2013), earning two Emmy Awards.' },
      { question: 'How many Emmy Awards has Anna Gunn won?', answer: 'Anna Gunn won two Primetime Emmy Awards for Outstanding Supporting Actress in a Drama Series for Breaking Bad in 2013 and 2014.' },
      { question: 'Was Anna Gunn in Deadwood?', answer: 'Yes, Anna Gunn played Martha Bullock in the HBO western drama Deadwood (2004-2006).' }
    ],
    tags: ['emmy-winner', 'dramatic-actress']
  },
  {
    slug: 'giancarlo-esposito',
    name: 'Giancarlo Esposito',
    bio: 'Giancarlo Giuseppe Alessandro Esposito is an American actor born on April 26, 1958, in Copenhagen, Denmark, to an Italian father and an African American mother. He grew up in New York City and began acting on Broadway at age eight.\n\nEsposito is best recognized for his chilling portrayal of Gustavo "Gus" Fring in Breaking Bad (2008-2013) and Better Call Saul (2016-2022). The role earned widespread critical acclaim and multiple Emmy nominations, establishing him as one of television\'s most compelling villains.\n\nBeyond the Breaking Bad universe, Esposito has appeared in Spike Lee\'s Do the Right Thing (1989) and Malcolm X (1992), played Moff Gideon in The Mandalorian (2019-2023), and Stan Edgar in The Boys on Amazon Prime Video.',
    birthDate: '1958-04-26',
    birthPlace: 'Copenhagen, Denmark',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Giancarlo_Esposito_by_Gage_Skidmore_3.jpg/440px-Giancarlo_Esposito_by_Gage_Skidmore_3.jpg', alt: 'Giancarlo Esposito at San Diego Comic-Con', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    knownFor: [{ characterSlug: 'gus-fring', characterName: 'Gus Fring', showSlug: 'breaking-bad', showTitle: 'Breaking Bad', years: '2009-2011' }],
    otherNotableRoles: ['Gus Fring in Better Call Saul (2016-2022)', 'Moff Gideon in The Mandalorian (2019-2023)', 'Stan Edgar in The Boys (2020-2022)', 'Buggin\' Out in Do the Right Thing (1989)'],
    awards: ['Critics\' Choice Television Award for Best Supporting Actor in a Drama Series (Better Call Saul)', 'Saturn Award for Best Guest Starring Role on Television (The Mandalorian)', 'Screen Actors Guild Award for Outstanding Ensemble in a Drama Series (Breaking Bad)'],
    socialLinks: { instagram: 'https://www.instagram.com/thegiancarloesposito/', twitter: 'https://twitter.com/quiethandfilms', imdb: 'https://www.imdb.com/name/nm0002064/', wikipedia: 'https://en.wikipedia.org/wiki/Giancarlo_Esposito' },
    faqs: [
      { question: 'What is Giancarlo Esposito best known for?', answer: 'Giancarlo Esposito is best known for playing Gustavo "Gus" Fring in Breaking Bad and Better Call Saul.' },
      { question: 'Is Giancarlo Esposito in The Mandalorian?', answer: 'Yes, he plays Moff Gideon, the primary antagonist in The Mandalorian on Disney+.' },
      { question: 'Where was Giancarlo Esposito born?', answer: 'He was born in Copenhagen, Denmark, on April 26, 1958, and raised in New York City.' }
    ],
    tags: ['character-actor', 'dramatic-actor', 'villain']
  },
  {
    slug: 'bob-odenkirk',
    name: 'Bob Odenkirk',
    bio: 'Robert John Odenkirk is an American actor, comedian, writer, director, and producer born on October 22, 1962, in Berwyn, Illinois. He began his career as a comedy writer for Saturday Night Live and co-created Mr. Show with Bob and David (1995-1998) alongside David Cross.\n\nOdenkirk gained mainstream dramatic recognition as criminal lawyer Saul Goodman in Breaking Bad (2008-2013). The character spawned the prequel series Better Call Saul (2015-2022), in which Odenkirk delivered a tour-de-force lead performance tracing Jimmy McGill\'s transformation into Saul Goodman, earning multiple Emmy and Golden Globe nominations.\n\nOdenkirk also surprised audiences with his starring role in the action film Nobody (2021). In July 2021, he suffered a heart attack on the set of Better Call Saul but made a full recovery and returned to complete the series.',
    birthDate: '1962-10-22',
    birthPlace: 'Berwyn, Illinois, USA',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bob_Odenkirk_by_Gage_Skidmore_3.jpg/440px-Bob_Odenkirk_by_Gage_Skidmore_3.jpg', alt: 'Bob Odenkirk at San Diego Comic-Con', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    knownFor: [{ characterSlug: 'saul-goodman', characterName: 'Saul Goodman', showSlug: 'breaking-bad', showTitle: 'Breaking Bad', years: '2009-2013' }],
    otherNotableRoles: ['Jimmy McGill / Saul Goodman in Better Call Saul (2015-2022)', 'Co-creator/star of Mr. Show with Bob and David (1995-1998)', 'Hutch Mansell in Nobody (2021)'],
    awards: ['Primetime Emmy Award for Outstanding Writing for a Variety Series (The Ben Stiller Show)', '4x Emmy Nomination for Outstanding Lead Actor in a Drama Series (Better Call Saul)'],
    socialLinks: { instagram: 'https://www.instagram.com/therealbobodenkirk/', twitter: 'https://twitter.com/mrbobodenkirk', imdb: 'https://www.imdb.com/name/nm0644022/', wikipedia: 'https://en.wikipedia.org/wiki/Bob_Odenkirk' },
    faqs: [
      { question: 'What is Bob Odenkirk best known for?', answer: 'Bob Odenkirk is best known for playing Jimmy McGill / Saul Goodman in Better Call Saul (2015-2022) and Breaking Bad (2008-2013).' },
      { question: 'Was Bob Odenkirk a comedy writer?', answer: 'Yes, he began his career writing for Saturday Night Live and The Ben Stiller Show, and co-created Mr. Show with Bob and David.' },
      { question: 'Did Bob Odenkirk have a heart attack?', answer: 'Yes, in July 2021 he suffered a heart attack on the set of Better Call Saul but made a full recovery.' }
    ],
    tags: ['comedy-actor', 'dramatic-actor', 'writer']
  },
  {
    slug: 'jonathan-banks',
    name: 'Jonathan Banks',
    bio: 'Jonathan Ray Banks is an American actor born on January 31, 1947, in Washington, D.C. Raised in Indiana, he studied at Indiana University before beginning his acting career in the 1970s, spending decades as a working character actor in Hollywood.\n\nBanks is most widely recognized for his role as Mike Ehrmantraut, the stoic former police officer turned fixer, in Breaking Bad (2009-2013) and Better Call Saul (2015-2022). His understated performance became a fan favorite, earning five Primetime Emmy Award nominations for Outstanding Supporting Actor in a Drama Series.\n\nPrior to Breaking Bad, Banks appeared in Beverly Hills Cop (1984), Wiseguy (1987-1990), and the comedy series Community. He is widely regarded as one of the finest character actors of his generation.',
    birthDate: '1947-01-31',
    birthPlace: 'Washington, D.C., USA',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Jonathan_Banks_by_Gage_Skidmore.jpg/440px-Jonathan_Banks_by_Gage_Skidmore.jpg', alt: 'Jonathan Banks at San Diego Comic-Con', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    knownFor: [{ characterSlug: 'mike-ehrmantraut', characterName: 'Mike Ehrmantraut', showSlug: 'breaking-bad', showTitle: 'Breaking Bad', years: '2009-2013' }],
    otherNotableRoles: ['Mike Ehrmantraut in Better Call Saul (2015-2022)', 'Frank McPike in Wiseguy (1987-1990)', 'Zed in Beverly Hills Cop (1984)', 'Buzz Hickey in Community (2014-2015)'],
    awards: ['5x Primetime Emmy Nomination for Outstanding Supporting Actor in a Drama Series (Better Call Saul)', 'Screen Actors Guild Award for Outstanding Ensemble in a Drama Series (Breaking Bad)'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0052186/', wikipedia: 'https://en.wikipedia.org/wiki/Jonathan_Banks' },
    faqs: [
      { question: 'What is Jonathan Banks best known for?', answer: 'Jonathan Banks is best known for playing Mike Ehrmantraut in Breaking Bad and Better Call Saul.' },
      { question: 'Has Jonathan Banks won an Emmy?', answer: 'Despite five Emmy nominations for Better Call Saul, Jonathan Banks has not yet won an Emmy.' },
      { question: 'What did Jonathan Banks do before Breaking Bad?', answer: 'He had a long career including roles in Beverly Hills Cop (1984) and Wiseguy (1987-1990).' }
    ],
    tags: ['character-actor', 'dramatic-actor']
  },
  // ============================================================
  // GAME OF THRONES ACTORS
  // ============================================================
  {
    slug: 'kit-harington',
    name: 'Kit Harington',
    bio: 'Christopher Catesby Harington, known professionally as Kit Harington, is an English actor born on December 26, 1986, in Acton, London, England. He studied at the Royal Central School of Speech and Drama and made his professional acting debut in the National Theatre\'s production of War Horse in 2008.\n\nHarington became a global star through his portrayal of Jon Snow in the HBO fantasy epic Game of Thrones (2011-2019). His brooding performance as the honorable bastard son of Ned Stark who rises to become King in the North earned him two Primetime Emmy nominations and made him one of the most recognized actors in the world.\n\nBeyond Game of Thrones, Harington has appeared in films including Pompeii (2014) and How to Train Your Dragon: The Hidden World (2019, voice). He joined the Marvel Cinematic Universe as Dane Whitman / Black Knight in Eternals (2021). Harington married Game of Thrones co-star Rose Leslie in 2018.',
    birthDate: '1986-12-26',
    birthPlace: 'Acton, London, England',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kit_Harington_by_Gage_Skidmore.jpg/440px-Kit_Harington_by_Gage_Skidmore.jpg', alt: 'Kit Harington at San Diego Comic-Con', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    knownFor: [{ characterSlug: 'jon-snow', characterName: 'Jon Snow', showSlug: 'game-of-thrones', showTitle: 'Game of Thrones', years: '2011-2019' }],
    otherNotableRoles: ['Dane Whitman / Black Knight in Eternals (2021)', 'Milo in Pompeii (2014)', 'Eret in How to Train Your Dragon: The Hidden World (2019, voice)'],
    awards: ['2x Primetime Emmy Nomination for Outstanding Lead Actor in a Drama Series (Game of Thrones)', 'Screen Actors Guild Award for Outstanding Ensemble in a Drama Series (Game of Thrones)'],
    socialLinks: { instagram: 'https://www.instagram.com/kitharingtonig/', imdb: 'https://www.imdb.com/name/nm3229685/', wikipedia: 'https://en.wikipedia.org/wiki/Kit_Harington' },
    faqs: [
      { question: 'What is Kit Harington best known for?', answer: 'Kit Harington is best known for playing Jon Snow in Game of Thrones (2011-2019).' },
      { question: 'Is Kit Harington married to Rose Leslie?', answer: 'Yes, Kit Harington married his Game of Thrones co-star Rose Leslie in June 2018.' },
      { question: 'Is Kit Harington in the MCU?', answer: 'Yes, he played Dane Whitman / Black Knight in Marvel\'s Eternals (2021).' }
    ],
    tags: ['dramatic-actor', 'fantasy']
  },
  {
    slug: 'emilia-clarke',
    name: 'Emilia Clarke',
    bio: 'Emilia Isobel Euphemia Rose Clarke is an English actress born on October 23, 1986, in London, England. She trained at the Drama Centre London and graduated in 2009, quickly landing her career-defining role just two years later.\n\nClarke rose to international fame as Daenerys Targaryen in HBO\'s Game of Thrones (2011-2019). Her portrayal of the exiled princess who transforms into a powerful dragon queen earned her four Primetime Emmy nominations and made her one of the most recognizable actresses in the world. The character became a cultural icon and symbol of female empowerment.\n\nBeyond Game of Thrones, Clarke has starred in films including Terminator Genisys (2015), Me Before You (2016), Solo: A Star Wars Story (2018), and Last Christmas (2019). In 2019, she revealed she had survived two life-threatening brain aneurysms during the early years of filming Game of Thrones, and she subsequently founded the charity SameYou to support brain injury recovery.',
    birthDate: '1986-10-23',
    birthPlace: 'London, England',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Emilia_Clarke_by_Gage_Skidmore_2.jpg/440px-Emilia_Clarke_by_Gage_Skidmore_2.jpg', alt: 'Emilia Clarke at San Diego Comic-Con', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    knownFor: [{ characterSlug: 'daenerys-targaryen', characterName: 'Daenerys Targaryen', showSlug: 'game-of-thrones', showTitle: 'Game of Thrones', years: '2011-2019' }],
    otherNotableRoles: ['Qi\'ra in Solo: A Star Wars Story (2018)', 'Louisa Clark in Me Before You (2016)', 'Sarah Connor in Terminator Genisys (2015)'],
    awards: ['4x Primetime Emmy Nomination for Outstanding Supporting/Lead Actress in a Drama Series (Game of Thrones)', 'Screen Actors Guild Award for Outstanding Ensemble in a Drama Series (Game of Thrones)'],
    socialLinks: { instagram: 'https://www.instagram.com/emilia_clarke/', twitter: 'https://twitter.com/emabordelern', imdb: 'https://www.imdb.com/name/nm3592338/', wikipedia: 'https://en.wikipedia.org/wiki/Emilia_Clarke' },
    faqs: [
      { question: 'What is Emilia Clarke best known for?', answer: 'Emilia Clarke is best known for playing Daenerys Targaryen in Game of Thrones (2011-2019).' },
      { question: 'Did Emilia Clarke have brain aneurysms?', answer: 'Yes, Clarke suffered two life-threatening brain aneurysms in 2011 and 2013 during filming of Game of Thrones, which she publicly revealed in 2019.' },
      { question: 'What charity did Emilia Clarke found?', answer: 'She founded SameYou, a charity dedicated to supporting people recovering from brain injuries and strokes.' }
    ],
    tags: ['dramatic-actress', 'fantasy', 'philanthropist']
  },
  {
    slug: 'peter-dinklage',
    name: 'Peter Dinklage',
    bio: 'Peter Hayden Dinklage is an American actor born on June 11, 1969, in Morristown, New Jersey. He studied acting at Bennington College in Vermont and spent years performing in theater and independent films before achieving mainstream recognition.\n\nDinklage became a global star as Tyrion Lannister in HBO\'s Game of Thrones (2011-2019). His masterful portrayal of the sharp-witted, hard-drinking youngest Lannister sibling earned him a record-setting four Primetime Emmy Awards for Outstanding Supporting Actor in a Drama Series, making him the most decorated actor in the show\'s history.\n\nBeyond Game of Thrones, Dinklage has had a distinguished career in film, including roles in The Station Agent (2003), X-Men: Days of Future Past (2014), Three Billboards Outside Ebbing, Missouri (2017), and Cyrano (2021). He is widely regarded as one of the most talented character actors of his generation and a trailblazer for actors with dwarfism.',
    birthDate: '1969-06-11',
    birthPlace: 'Morristown, New Jersey, USA',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Peter_Dinklage_by_Gage_Skidmore.jpg/440px-Peter_Dinklage_by_Gage_Skidmore.jpg', alt: 'Peter Dinklage at San Diego Comic-Con', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    knownFor: [{ characterSlug: 'tyrion-lannister', characterName: 'Tyrion Lannister', showSlug: 'game-of-thrones', showTitle: 'Game of Thrones', years: '2011-2019' }],
    otherNotableRoles: ['Finbar McBride in The Station Agent (2003)', 'Bolivar Trask in X-Men: Days of Future Past (2014)', 'Cyrano de Bergerac in Cyrano (2021)'],
    awards: ['4x Primetime Emmy Award for Outstanding Supporting Actor in a Drama Series (Game of Thrones)', 'Golden Globe Award for Best Supporting Actor in a Series (Game of Thrones)', 'Screen Actors Guild Award for Outstanding Performance by a Male Actor in a Drama Series (Game of Thrones)'],
    socialLinks: { imdb: 'https://www.imdb.com/name/nm0227759/', wikipedia: 'https://en.wikipedia.org/wiki/Peter_Dinklage' },
    faqs: [
      { question: 'How many Emmys has Peter Dinklage won?', answer: 'Peter Dinklage won four Primetime Emmy Awards for Outstanding Supporting Actor in a Drama Series for Game of Thrones, a record for the category.' },
      { question: 'What was Peter Dinklage\'s breakout role?', answer: 'His breakout role was as Finbar McBride in the independent film The Station Agent (2003), though Game of Thrones made him a global star.' },
      { question: 'What is Peter Dinklage\'s condition?', answer: 'Peter Dinklage has achondroplasia, the most common form of dwarfism. He stands 4 feet 5 inches tall and has been an outspoken advocate for the dignity of little people in Hollywood.' }
    ],
    tags: ['emmy-winner', 'dramatic-actor', 'golden-globe-winner']
  },
  {
    slug: 'lena-headey',
    name: 'Lena Headey',
    bio: 'Lena Kathren Headey is an English actress born on October 3, 1973, in Hamilton, Bermuda, and raised in Shelley, West Yorkshire, England. She began acting as a teenager and landed her first film role in Waterland (1992) while still in her teens.\n\nHeadey achieved worldwide fame as Cersei Lannister in HBO\'s Game of Thrones (2011-2019). Her commanding portrayal of the ruthless, power-hungry queen earned her five Primetime Emmy nominations for Outstanding Supporting Actress in a Drama Series. Cersei became one of the most iconic villains in television history.\n\nBeyond Game of Thrones, Headey is known for playing Queen Gorgo in 300 (2006) and its sequel, Sarah Connor in Terminator: The Sarah Connor Chronicles (2008-2009), and has appeared in films like Fighting with My Family (2019) and Gunpowder Milkshake (2021).',
    birthDate: '1973-10-03',
    birthPlace: 'Hamilton, Bermuda',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Lena_Headey_by_Gage_Skidmore_2.jpg/440px-Lena_Headey_by_Gage_Skidmore_2.jpg', alt: 'Lena Headey at San Diego Comic-Con', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    knownFor: [{ characterSlug: 'cersei-lannister', characterName: 'Cersei Lannister', showSlug: 'game-of-thrones', showTitle: 'Game of Thrones', years: '2011-2019' }],
    otherNotableRoles: ['Queen Gorgo in 300 (2006)', 'Sarah Connor in Terminator: The Sarah Connor Chronicles (2008-2009)', 'Ma in Fighting with My Family (2019)'],
    awards: ['5x Primetime Emmy Nomination for Outstanding Supporting Actress in a Drama Series (Game of Thrones)', 'Screen Actors Guild Award for Outstanding Ensemble in a Drama Series (Game of Thrones)'],
    socialLinks: { instagram: 'https://www.instagram.com/iamlenaheadey/', imdb: 'https://www.imdb.com/name/nm0372176/', wikipedia: 'https://en.wikipedia.org/wiki/Lena_Headey' },
    faqs: [
      { question: 'What is Lena Headey best known for?', answer: 'Lena Headey is best known for playing Cersei Lannister in Game of Thrones (2011-2019).' },
      { question: 'Has Lena Headey won an Emmy?', answer: 'Despite five Emmy nominations for Game of Thrones, Lena Headey has not won a Primetime Emmy Award.' },
      { question: 'Where was Lena Headey born?', answer: 'Lena Headey was born in Hamilton, Bermuda, on October 3, 1973, and raised in West Yorkshire, England.' }
    ],
    tags: ['dramatic-actress', 'fantasy', 'villain']
  },
  {
    slug: 'maisie-williams',
    name: 'Maisie Williams',
    bio: 'Margaret Constance "Maisie" Williams is an English actress born on April 15, 1997, in Bristol, England. She had no professional acting experience before auditioning for Game of Thrones at the age of twelve, landing the role that would make her an international star.\n\nWilliams rose to fame as Arya Stark in HBO\'s Game of Thrones (2011-2019), appearing in the show from age 14 to 22. Her portrayal of the fierce, resourceful youngest Stark daughter who trains to become a deadly assassin earned her an Emmy nomination and made her one of the most popular characters on the show.\n\nBeyond Game of Thrones, Williams has appeared in films such as The Falling (2014), and the X-Men film The New Mutants (2020). She also starred in the Sky comedy series Two Weeks to Live (2020) and the Danny Boyle-directed TV series Pistol (2022), playing punk icon Jordan.',
    birthDate: '1997-04-15',
    birthPlace: 'Bristol, England',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Maisie_Williams_by_Gage_Skidmore.jpg/440px-Maisie_Williams_by_Gage_Skidmore.jpg', alt: 'Maisie Williams at San Diego Comic-Con', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    knownFor: [{ characterSlug: 'arya-stark', characterName: 'Arya Stark', showSlug: 'game-of-thrones', showTitle: 'Game of Thrones', years: '2011-2019' }],
    otherNotableRoles: ['Rahne Sinclair / Wolfsbane in The New Mutants (2020)', 'Jordan in Pistol (2022)', 'Ashildr / Me in Doctor Who (2015)'],
    awards: ['Primetime Emmy Nomination for Outstanding Supporting Actress in a Drama Series (Game of Thrones)', 'Screen Actors Guild Award for Outstanding Ensemble in a Drama Series (Game of Thrones)', 'Portal Award for Best Supporting Actress (Game of Thrones)'],
    socialLinks: { instagram: 'https://www.instagram.com/mabordelern/', imdb: 'https://www.imdb.com/name/nm3586035/', wikipedia: 'https://en.wikipedia.org/wiki/Maisie_Williams' },
    faqs: [
      { question: 'What is Maisie Williams best known for?', answer: 'Maisie Williams is best known for playing Arya Stark in Game of Thrones (2011-2019).' },
      { question: 'How old was Maisie Williams when she started Game of Thrones?', answer: 'Maisie Williams was 12 when she was cast and 14 when the show premiered in 2011. She had no prior professional acting experience.' },
      { question: 'Was Maisie Williams in Doctor Who?', answer: 'Yes, she appeared as Ashildr / Me in two Doctor Who episodes in 2015.' }
    ],
    tags: ['dramatic-actress', 'fantasy', 'young-actor']
  },
  {
    slug: 'sophie-turner',
    name: 'Sophie Turner',
    bio: 'Sophie Belinda Turner is an English actress born on February 21, 1996, in Northampton, England. Like her co-star Maisie Williams, she had minimal acting experience before being cast in Game of Thrones at age thirteen.\n\nTurner became internationally recognized for her role as Sansa Stark in HBO\'s Game of Thrones (2011-2019). Her portrayal of the Stark daughter who evolves from a naive girl into the shrewd Lady of Winterfell and eventually Queen in the North was praised for its depth and emotional range throughout the series.\n\nBeyond Game of Thrones, Turner played Jean Grey / Phoenix in the X-Men films X-Men: Apocalypse (2016) and Dark Phoenix (2019). She also starred in the Quibi/Roku series Survive (2020) and the Starz limited series Joan (2024). Turner was previously married to musician Joe Jonas.',
    birthDate: '1996-02-21',
    birthPlace: 'Northampton, England',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Sophie_Turner_by_Gage_Skidmore.jpg/440px-Sophie_Turner_by_Gage_Skidmore.jpg', alt: 'Sophie Turner at San Diego Comic-Con', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    knownFor: [{ characterSlug: 'sansa-stark', characterName: 'Sansa Stark', showSlug: 'game-of-thrones', showTitle: 'Game of Thrones', years: '2011-2019' }],
    otherNotableRoles: ['Jean Grey / Phoenix in X-Men: Apocalypse (2016) and Dark Phoenix (2019)', 'Joan Hannington in Joan (2024)', 'Jane in Survive (2020)'],
    awards: ['Screen Actors Guild Award for Outstanding Ensemble in a Drama Series (Game of Thrones)', 'Primetime Emmy Nomination for Outstanding Supporting Actress in a Drama Series (Game of Thrones)'],
    socialLinks: { instagram: 'https://www.instagram.com/sophiet/', imdb: 'https://www.imdb.com/name/nm3849842/', wikipedia: 'https://en.wikipedia.org/wiki/Sophie_Turner' },
    faqs: [
      { question: 'What is Sophie Turner best known for?', answer: 'Sophie Turner is best known for playing Sansa Stark in Game of Thrones (2011-2019).' },
      { question: 'Did Sophie Turner play Jean Grey?', answer: 'Yes, she played Jean Grey / Phoenix in X-Men: Apocalypse (2016) and Dark Phoenix (2019).' },
      { question: 'How old was Sophie Turner during Game of Thrones?', answer: 'Sophie Turner was 13 when cast and 15 when the show premiered in 2011.' }
    ],
    tags: ['dramatic-actress', 'fantasy', 'young-actor']
  },
  {
    slug: 'nikolaj-coster-waldau',
    name: 'Nikolaj Coster-Waldau',
    bio: 'Nikolaj William Coster-Waldau is a Danish actor born on July 27, 1970, in Rudkobing, Denmark. He graduated from the Danish National School of Performing Arts in Copenhagen in 1993 and quickly established himself in Danish cinema and television.\n\nCoster-Waldau achieved worldwide recognition as Jaime Lannister, the complex "Kingslayer," in HBO\'s Game of Thrones (2011-2019). His layered portrayal of the morally ambiguous knight whose journey from apparent villain to sympathetic antihero became one of the show\'s most compelling character arcs.\n\nBeyond Game of Thrones, Coster-Waldau has appeared in films including Black Hawk Down (2001), Oblivion (2013), Gods of Egypt (2016), and Shot Caller (2017). He has been a UNDP Goodwill Ambassador since 2018, advocating for climate action and sustainable development.',
    birthDate: '1970-07-27',
    birthPlace: 'Rudkobing, Denmark',
    image: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Nikolaj_Coster-Waldau_by_Gage_Skidmore.jpg/440px-Nikolaj_Coster-Waldau_by_Gage_Skidmore.jpg', alt: 'Nikolaj Coster-Waldau at San Diego Comic-Con', attribution: 'Gage Skidmore, CC BY-SA 3.0, via Wikimedia Commons', width: 440, height: 600 },
    knownFor: [{ characterSlug: 'jaime-lannister', characterName: 'Jaime Lannister', showSlug: 'game-of-thrones', showTitle: 'Game of Thrones', years: '2011-2019' }],
    otherNotableRoles: ['Gary Gordon in Black Hawk Down (2001)', 'Jacob Harlon in Shot Caller (2017)', 'Horus in Gods of Egypt (2016)'],
    awards: ['Screen Actors Guild Award for Outstanding Ensemble in a Drama Series (Game of Thrones)', 'Primetime Emmy Nomination for Outstanding Supporting Actor in a Drama Series (Game of Thrones)'],
    socialLinks: { instagram: 'https://www.instagram.com/nikolajcw/', twitter: 'https://twitter.com/nikolabordelern', imdb: 'https://www.imdb.com/name/nm0182666/', wikipedia: 'https://en.wikipedia.org/wiki/Nikolaj_Coster-Waldau' },
    faqs: [
      { question: 'What is Nikolaj Coster-Waldau best known for?', answer: 'He is best known for playing Jaime Lannister in Game of Thrones (2011-2019).' },
      { question: 'Where is Nikolaj Coster-Waldau from?', answer: 'He was born in Rudkobing, Denmark, on July 27, 1970.' },
      { question: 'Is Nikolaj Coster-Waldau involved in humanitarian work?', answer: 'Yes, he has been a UNDP Goodwill Ambassador since 2018, focusing on climate action and sustainable development.' }
    ],
    tags: ['dramatic-actor', 'fantasy']
  },
