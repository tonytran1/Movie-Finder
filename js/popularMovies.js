function getRandomMovie() {
  return POPULAR_MOVIES[Math.floor(Math.random() * POPULAR_MOVIES.length)];
}

const POPULAR_MOVIES = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "The Dark Knight",
  "12 Angry Men",
  "Schindler's List",
  "Pulp Fiction",
  "The Lord of the Rings: The Return of the King",
  "The Good, the Bad and the Ugly",
  "Fight Club",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Star Wars: Episode V - The Empire Strikes Back",
  "Forrest Gump",
  "Inception",
  "The Lord of the Rings: The Two Towers",
  "One Flew Over the Cuckoo's Nest",
  "Goodfellas",
  "The Matrix",
  "Seven Samurai",
  "Star Wars: Episode IV - A New Hope",
  "City of God",
  "Se7en",
  "The Silence of the Lambs",
  "It's a Wonderful Life",
  "The Usual Suspects",
  "Life Is Beautiful",
  "Leon: The Professional",
  "Spirited Away",
  "Saving Private Ryan",
  "Once Upon a Time in the West",
  "American History X",
  "Interstellar",
  "Casablanca",
  "Psycho",
  "City Lights",
  "The Green Mile",
  "The Intouchables",
  "Modern Times",
  "Raiders of the Lost Ark",
  "Rear Window",
  "The Pianist",
  "The Departed",
  "Terminator 2: Judgment Day",
  "Back to the Future",
  "Whiplash",
  "Gladiator",
  "Memento",
  "Apocalypse Now",
  "The Prestige",
  "The Lion King",
  "Alien",
  "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
  "Sunset Boulevard",
  "The Great Dictator",
  "Cinema Paradiso",
  "The Lives of Others",
  "La La Land",
  "Grave of the Fireflies",
  "Paths of Glory",
  "Django Unchained",
  "The Shining",
  "WALL·E",
  "American Beauty",
  "The Dark Knight Rises",
  "Princess Mononoke",
  "Aliens",
  "Oldboy",
  "Once Upon a Time in America",
  "Citizen Kane",
  "Das Boot",
  "Witness for the Prosecution",
  "North by Northwest",
  "Vertigo",
  "Star Wars: Episode VI - Return of the Jedi",
  "Reservoir Dogs",
  "M",
  "Braveheart",
  "Requiem for a Dream",
  "Amelie",
  "A Clockwork Orange",
  "Taxi Driver",
  "Like Stars on Earth",
  "Lawrence of Arabia",
  "Double Indemnity",
  "Eternal Sunshine of the Spotless Mind",
  "To Kill a Mockingbird",
  "Amadeus",
  "Toy Story 3",
  "Dangal",
  "Full Metal Jacket",
  "The Sting",
  "My Father and My Son",
  "2001: A Space Odyssey",
  "Singin' in the Rain",
  "Toy Story",
  "Bicycle Thieves",
  "The Kid",
  "Inglourious Basterds",
  "Snatch",
  "Monty Python and the Holy Grail",
  "3 Idiots",
  "L.A. Confidential",
  "or a Few Dollars More",
  "Scarface",
  "The Hunt",
  "Rashomon",
  "The Apartment",
  "Good Will Hunting",
  "A Separation",
  "Indiana Jones and the Last Crusade",
  "Metropolis",
  "All About Eve",
  "Yojimbo",
  "Batman Begins",
  "Up",
  "Some Like It Hot",
  "The Treasure of the Sierra Madre",
  "Unforgiven",
  "Downfall",
  "Raging Bull",
  "The Third Man",
  "Die Hard",
  "Children of Heaven",
  "Heat",
  "The Great Escape",
  "Chinatown",
  "Pan's Labyrinth",
  "Inside Out",
  "Ikiru",
  "Hacksaw Ridge",
  "My Neighbor Totoro",
  "On the Waterfront",
  "Ran",
  "Room",
  "The Gold Rush",
  "The Secret in Their Eyes",
  "The Bridge on the River Kwai",
  "Blade Runner",
  "Mr. Smith Goes to Washington",
  "Howl's Moving Castle",
  "The Seventh Seal",
  "Lock, Stock and Two Smoking Barrels",
  "Judgment at Nuremberg",
  "Casino",
  "Incendies",
  "A Beautiful Mind",
  "The Bandit",
  "The Elephant Man",
  "Wild Strawberries",
  "The General",
  "V for Vendetta",
  "Warrior",
  "The Wolf of Wall Street",
  "A Wednesday",
  "Sunrise",
  "Gran Torino",
  "Trainspotting",
  "The Passion of Joan of Arc",
  "Rang De Basanti",
  "Dial M for Murder",
  "The Big Lebowski",
  "The Deer Hunter",
  "Tokyo Story",
  "Gone with the Wind",
  "Fargo",
  "Finding Nemo",
  "The Sixth Sense",
  "The Thing",
  "Cool Hand Luke",
  "No Country for Old Men",
  "Rebecca",
  "How to Train Your Dragon",
  "Kill Bill: Vol. 1",
  "Into the Wild",
  "Mary and Max",
  "There Will Be Blood",
  "Munna Bhai M.B.B.S.",
  "Gone Girl",
  "Come and See",
  "Hera Pheri",
  "Sholay",
  "It Happened One Night",
  "Life of Brian",
  "Andaz Apna Apna",
  "Platoon",
  "Shutter Island",
  "Hotel Rwanda",
  "Rush",
  "Network",
  "The Wages of Fear",
  "Wild Tales",
  "Stand by Me",
  "In the Name of the Father",
  "Spotlight",
  "The 400 Blows",
  "Butch Cassidy and the Sundance Kid",
  "Mad Max: Fury Road",
  "12 Years a Slave",
  "The Grand Budapest Hotel",
  "Ben-Hur",
  "The Nights of Cabiria",
  "The Maltese Falcon",
  "Star Wars: The Force Awakens",
  "Persona",
  "Million Dollar Baby",
  "Amores Perros",
  "Jurassic Park",
  "The Princess Bride",
  "Memories of Murder",
  "Hachi: A Dog's Tale",
  "Stalker",
  "Nausicaä of the Valley of the Wind",
  "John Wick: Chapter 2",
  "The Truman Show",
  "The Grapes of Wrath",
  "Before Sunrise",
  "Touch of Evil",
  "Annie Hall",
  "Drishyam",
  "Rocky",
  "Harry Potter and the Deathly Hallows: Part 2",
  "Gandhi",
  "Diabolique",
  "The Bourne Ultimatum",
  "Donnie Darko",
  "Arrival",
  "Prisoners",
  "Monsters, Inc.",
  "The Message",
  "The Terminator",
  "The Wizard of Oz",
  "Catch Me If You Can",
  "Groundhog Day",
  "Twelve Monkeys",
  "La Haine",
  "Barry Lyndon",
  "Jaws",
  "Infernal Affairs",
  "Zootopia",
  "The Best Years of Our Lives",
  "The Battle of Algiers",
  "Dog Day Afternoon",
  "Strangers on a Train",
  "The Help",
  "Sin City",
  "Gangs of Wasseypur",
  "Pirates of the Caribbean: The Curse of the Black Pearl",
  "The Imitation Game",
  "Lagaan: Once Upon a Time in India"
];
