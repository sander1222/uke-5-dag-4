//OPPGAVE 1

const nonsenseStory = `
In a land far, far away, a dancing banana twirled under the moonlight, while a robot vacuum chased after a confused squirrel. The banana laughed, "I wish I were an octopus, then I could juggle stars." Just then, a turtle wearing sunglasses zoomed by on a skateboard, leaving behind a trail of sparkles. An owl hooted loudly, "Pineapples are overrated!" but nobody was listening, because a giraffe in a party hat was singing 'Happy Birthday' to a watermelon. Meanwhile, a rainbow-colored whale swam through the sky, pondering the mysteries of pizza and socks. "One day, I'll find the ultimate pizza," whispered the whale. A dragonfly with a monocle hovered nearby, discussing philosophy with a very serious-looking toaster.
`;

const nobodyIndex = nonsenseStory.indexOf("nobody");
const chasedIndex = nonsenseStory.indexOf("chased");
const owlIndex = nonsenseStory.indexOf("owl");
const giraffeIndex = nonsenseStory.indexOf("giraffe");
const seriousIndex = nonsenseStory.indexOf("serious");
const dragonflyIndex = nonsenseStory.indexOf("dragonfly");
const bananaIndex = nonsenseStory.indexOf("banana");

const nobody = nonsenseStory.substring(nobodyIndex, nobodyIndex + 6);
const chased = nonsenseStory.substring(chasedIndex, chasedIndex + 6);
const owl = nonsenseStory.substring(owlIndex, owlIndex + 3);
const giraffe = nonsenseStory.substring(giraffeIndex, giraffeIndex + 7);
const serious = nonsenseStory.substring(seriousIndex, seriousIndex + 7);
const dragonfly = nonsenseStory.substring(dragonflyIndex, dragonflyIndex + 8);
const banana = nonsenseStory.substring(bananaIndex, bananaIndex + 6);

const newSentence = `${nobody} ${chased} after the ${owl}. But the ${giraffe} was very ${serious} because a ${dragonfly} chased after the ${banana}.`;

console.log(newSentence);

//OPPGAVE 2

// let number = Math.floor(Math.random() * 100);

// if (number < 50) {
//   console.log("The number is less than 50!");
// } else if (number > 50) {
//   console.log("The number is greater than 50!");
// } else {
//   console.log("The number is exactly 50!");
// }
