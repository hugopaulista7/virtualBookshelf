import { BookInterface } from 'src/app/model/book/book.interface';

export const defaultBooks: Array<BookInterface> = [
  {
    id: 1,
    title: 'Les Misérables',
    // tslint:disable-next-line: max-line-length
    description: 'So long as there shall exist, by reason of law and custom, a social condemnation, which, in the face of civilization, artificially creates hells on earth, and complicates a destiny that is divine with human fatality; so long as the three problems of the age—the degradation of man by poverty, the ruin of women by starvation, and the dwarfing of childhood by physical and spiritual night—are not solved; so long as, in certain regions, social asphyxia shall be possible; in other words, and from a yet more extended point of view, so long as ignorance and misery remain on earth, books like this cannot be useless. The book which the reader has before him at this moment is, from one end to the other, in its entirety and details ... a progress from evil to good, from injustice to justice, from falsehood to truth, from night to day, from appetite to conscience, from corruption to life; from bestiality to duty, from hell to heaven, from nothingness to God. The starting point: matter, destination: the soul. The hydra at the beginning, the angel at the end.',
    author: 'Victor Hugo',
    timestamp: Date.now(),
    deleted: false
  },
  {
    id: 2,
    title: 'Wuthering Heights',
    // tslint:disable-next-line: max-line-length
    description: `Mr. Earnshaw, a Yorkshire Farmer and owner of Wuthering Heights, brings home an orphan from Liverpool. The boy is named Heathcliff and is raised with the Earnshaw children, Hindley and Catherine. Catherine loves Heathcliff but Hindley hates him because Heathcliff has replaced Hindley in Mr. Earnshaw's affection. After Mr. Earnshaw's death, Hindley does what he can to destroy Heathcliff, but Catherine and Heathcliff grow up playing wildly on the moors, oblivious of anything or anyone else — until they encounter the Lintons.`,
    author: 'Emily Brontë',
    timestamp: Date.now(),
    deleted: false
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    // tslint:disable-next-line: max-line-length
    description: 'Pride and Prejudice is set in rural England in the early 19th century, and it follows the Bennet family, which includes five very different sisters. Mrs. Bennet is anxious to see all her daughters married, especially as the modest family estate is to be inherited by William Collins when Mr. Bennet dies. At a ball, the wealthy and newly arrived Charles Bingley takes an immediate interest in the eldest Bennet daughter, the beautiful and shy Jane. The encounter between his friend Darcy and Elizabeth is less cordial. Although Austen shows them intrigued by each other, she reverses the convention of first impressions: pride of rank and fortune and prejudice against the social inferiority of Elizabeth’s family hold Darcy aloof, while Elizabeth is equally fired both by the pride of self-respect and by prejudice against Darcy’s snobbery.',
    author: 'Jane Austen',
    timestamp: Date.now(),
    deleted: false
  },
  {
    id: 4,
    title: 'Frankenstein',
    // tslint:disable-next-line: max-line-length
    description: 'In a series of letters, Robert Walton, the captain of a ship bound for the North Pole, recounts to his sister back in England the progress of his dangerous mission. Successful early on, the mission is soon interrupted by seas full of impassable ice. Trapped, Walton encounters Victor Frankenstein, who has been traveling by dog-drawn sledge across the ice and is weakened by the cold. Walton takes him aboard ship, helps nurse him back to health, and hears the fantastic tale of the monster that Frankenstein created.',
    author: 'Mary Shelley',
    timestamp: Date.now(),
    deleted: false
  },
  {
    id: 5,
    title: 'The Outsiders',
    // tslint:disable-next-line: max-line-length
    description: 'The Outsiders (1967) is a well-known young adult novel by American writer S.E. Hinton. It tells the story of 14-year-old Ponyboy Curtis and his two older brothers, Soda and Darry. The boys are orphans and struggle to stick together in their lower-class neighborhood, known as the East Side. They and their friends are part of a gang of working class tough street boys called the Greasers.',
    author: 'S. E. Hinton',
    timestamp: Date.now(),
    deleted: false
  },
  {
    id: 6,
    title: 'Jane Eyre',
    // tslint:disable-next-line: max-line-length
    description: `The novel is a first-person narrative from the perspective of the title character. The novel's setting is somewhere in the north of England, late in the reign of George III (1760–1820).[a] It goes through five distinct stages: Jane's childhood at Gateshead Hall, where she is emotionally and physically abused by her aunt and cousins; her education at Lowood School, where she gains friends and role models but suffers privations and oppression; her time as governess at Thornfield Hall, where she falls in love with her mysterious employer, Edward Fairfax Rochester; her time in the Moor House, during which her earnest but cold clergyman cousin, St. John Rivers, proposes to her; and ultimately her reunion with, and marriage to, her beloved Rochester. Throughout these sections, the novel provides perspectives on a number of important social issues and ideas, many of which are critical of the status quo.`,
    author: 'Charlotte Brontë',
    timestamp: Date.now(),
    deleted: false
  },
  {
    id: 7,
    title: 'Memoirs of Hadrian',
    // tslint:disable-next-line: max-line-length
    description: `Both an exploration of character and a reflection on the meaning of history, Memoirs of Hadrian has received international acclaim since its first publication in France in 1951. In it, Marguerite Yourcenar reimagines the Emperor Hadrian's arduous boyhood, his triumphs and reversals, and finally, as emperor, his gradual reordering of a war-torn world, writing with the imaginative insight of a great writer of the twentieth century while crafting a prose style as elegant and precise as those of the Latin stylists of Hadrian's own era.`,
    author: 'Marguerite Yourcenar',
    timestamp: Date.now(),
    deleted: false
  },
  {
    id: 8,
    title: 'The Haunting of Hill House',
    // tslint:disable-next-line: max-line-length
    description: `The book is the story of four seekers who arrive at a notoriously unfriendly pile called Hill House: Dr. Montague, an occult scholar looking for solid evidence of a “haunting”; Theodora, his lighthearted assistant; Eleanor, a friendless, fragile young woman well acquainted with poltergeists; and Luke, the future heir of Hill House. Hill House is a mansion in a location that is never specified but is between many hills, built by long-deceased Hugh Crain. All four of the inhabitants begin to experience strange events while in the house, including unseen noises and ghosts roaming the halls at night, strange writing on the walls and other unexplained events`,
    author: 'Shirley Jackson',
    timestamp: Date.now(),
    deleted: false
  },
  {
    id: 9,
    title: `The Handmaid's Tale`,
    // tslint:disable-next-line: max-line-length
    description: `The Handmaid’s Tale, acclaimed dystopian novel by Canadian author Margaret Atwood, published in 1985. The book, set in New England in the near future, posits a Christian fundamentalist theocratic regime in the former United States that arose as a response to a fertility crisis. Offred is a Handmaid in the Republic of Gilead, a totalitarian and theocratic state that has replaced the United States of America. Because of dangerously low reproduction rates, Handmaids are assigned to bear children for elite couples that have trouble conceiving. Offred serves the Commander and his wife, Serena Joy, a former gospel singer and advocate for “traditional values.” Offred is not the narrator’s real name—Handmaid names consist of the word “of” followed by the name of the Handmaid’s Commander. Every month, when Offred is at the right point in her menstrual cycle, she must have impersonal, wordless sex with the Commander while Serena sits behind her, holding her hands. Offred’s freedom, like the freedom of all women, is completely restricted. She can leave the house only on shopping trips, the door to her room cannot be completely shut, and the Eyes, Gilead’s secret police force, watch her every public move.`,
    author: 'Margaret Atwood',
    timestamp: Date.now(),
    deleted: false
  },
  {
    id: 10,
    title: 'Hamlet, the Prince of Denmark',
    // tslint:disable-next-line: max-line-length
    description: `Hamlet, Prince of Denmark, is home from school to mourn the death of his father, King Hamlet, who has died two months earlier. Hamlet is disgusted by the marriage of his newly widowed mother, Queen Gertrude, to his Uncle, King Hamlet’s brother, Claudius, who now has the throne. Shortly thereafter, a ghost has appeared to guards on nightly watch as well as Hamlet’s good friend, Horatio, who thinks the spirit has a likeness to the former King Hamlet. When prompted to speak by Horatio, the ghost will not. Horatio asks Hamlet to wait for the ghost and see if it will speak to him. The ghost of his father beckons Hamlet to follow him and reveals that his brother Claudius poisoned him in the ear. Hamlet vows to avenge his father’s murder.`,
    author: 'William Shakespeare',
    timestamp: Date.now(),
    deleted: false
  },
  {
    id: 11,
    title: 'The Lord of The Rings - The Fellowship of The Ring',
    // tslint:disable-next-line: max-line-length
    description: `The Fellowship of the Ring is the first of three volumes of the epic novel The Lord of the Rings by the English author J. R. R. Tolkien. It is followed by The Two Towers and The Return of the King. It takes place in the fictional universe of Middle-earth. It was originally published on 29 July 1954 in the United Kingdom. The volume consists of a foreword, in which the author discusses his writing of The Lord of the Rings, a prologue titled "Concerning Hobbits, and other matters", and the main narrative in Book I and Book II.`,
    author: 'J. R. R. Tolkien',
    timestamp: Date.now(),
    deleted: false
  },
  {
    id: 12,
    title: 'The Lord of The Rings - The Two Towers',
    // tslint:disable-next-line: max-line-length
    description: `As Aragorn searches for Frodo, he suddenly hears Boromir's horn. Aragorn finds Boromir mortally wounded by arrows, sitting with his back against a great tree, surrounded by many slain orcs. Before Boromir dies, Aragorn learns that Saruman's Uruk-hai soldiers have kidnapped some of the hobbits, in spite of his efforts to defend them; that Frodo had vanished after Boromir had attempted to take the Ring from him; and that he truly regretted his actions. In his last moments, Boromir charges Aragorn with defending Minas Tirith from Sauron. With Legolas and Gimli, who had been fighting Orcs by themselves, Aragorn pays his last tributes to Boromir and sends him down the Great River Anduin on a funeral boat, the usual methods of burial being impractical. Aragorn, Legolas, and Gimli later resolve to follow the Uruk-hai captors and rescue Merry and Pippin.`,
    author: 'J. R. R. Tolkien',
    timestamp: Date.now(),
    deleted: false
  },
  {
    id: 13,
    title: 'The Lord of The Rings - The Return of The King',
    // tslint:disable-next-line: max-line-length
    description: `Gandalf and Pippin arrive at Minas Tirith in the kingdom of Gondor, and there Pippin gets to view for the first time the mighty city built on seven levels and with the Tower of Ecthelion high above the Pelennor Fields. They meet Denethor, the Lord and Steward of Gondor, and deliver the news to him of Boromir's death (which Denethor already knows of, because he holds Boromir's cloven horn in his lap), as well as the fact that a devastating attack on his city by Sauron, the Dark Lord of Mordor, is imminent. Stung by the scorn of Denethor, Pippin enters the service of the Steward as repayment of a debt he owes to Boromir, Denethor's dead son and preferred heir. Pippin then meets Beregond, a guard of the Citadel, who tutors him in his duties, and his young son Bergil, who guides him around Minas Tirith. In the middle of the night, Gandalf returns to their room, frustrated that Faramir has not yet returned.`,
    author: 'J. R. R. Tolkien',
    timestamp: Date.now(),
    deleted: false
  },
  {
    id: 14,
    title: 'The Hobbit',
    // tslint:disable-next-line: max-line-length
    description: `The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature. The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory.`,
    author: 'J. R. R. Tolkien',
    timestamp: Date.now(),
    deleted: false
  },
  {
    id: 15,
    title: 'The Silmarillion',
    // tslint:disable-next-line: max-line-length
    description: `The Silmarillion comprises five parts. The first part, Ainulindalë, tells of the creation of Eä, the "world that is". Valaquenta, the second part, gives a description of the Valar and Maiar, the supernatural powers in Eä. The next section, Quenta Silmarillion, which forms the bulk of the collection, chronicles the history of the events before and during the First Age, including the wars over the Silmarils that gave the book its title. The fourth part, Akallabêth, relates the history of the Downfall of Númenor and its people, which takes place in the Second Age. The final part, Of the Rings of Power and the Third Age, is a brief account of the circumstances which led to and were presented in The Lord of the Rings.`,
    author: 'J. R. R. Tolkien',
    timestamp: Date.now(),
    deleted: false
  },
];
