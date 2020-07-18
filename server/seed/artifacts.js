const mongoose = require('mongoose');
const Artifacts = require('../models/artifacts.js');

const artifacts = [
  // {
  //   name: "Nefertiti Bust",
  //   description: "The bust is 48 centimetres tall and weighs about 20 kilograms. It is made of a limestone core covered with painted stucco layers. The face is completely symmetrical and almost intact, but the left eye lacks the inlay present in the right.",
  //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Nofretete_Neues_Museum.jpg/440px-Nofretete_Neues_Museum.jpg",
  //   creator: "Thutmose",
  //   year: "1345 BC",
  //   theme: "Egypt"
  // },
  // {
  //   name: "The Pleiades",
  //   description: "The Pleiades are a prominent sight in winter in the Northern Hemisphere, and are easily visible out to mid-Southern latitudes. They have been known since antiquity to cultures all around the world.",
  //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/560px-Pleiades_large.jpg",
  //   creator: "Unknown",
  //   year: "Between 75 and 150 Million Years Old",
  //   theme: "Space"
  // },
  // {
  //   name: "The Metamorphosis of Narcissus",
  //   description: "In Dalí's painting, he depicts the figure of Narcissus on the left side of the canvas crouched by a lake, with his head resting on his knee, and a stone hand clutching an egg mirroring the shape of his body on the right. From out of the cracked egg, a narcissus flower sprouts. In the mid-ground of the painting stand a group of Narcissus's rejected suitors.",
  //   image: "https://upload.wikimedia.org/wikipedia/en/2/21/Metamorphosis_of_Narcissus.jpg",
  //   creator: "Salvador Dalí",
  //   year: "1937",
  //   theme: "Surrealism"
  // },
  // {
  //   name: "Kissing Lovers",
  //   description: "Rukodzi’s 'Kissing Lovers', created from Springstone, represents the greeting of a reunited couple and the strong spiritual bond that ties them together. The two figures, both seen in profile, merge to create the image of one figure.",
  //   image: "https://web.archive.org/web/20110627013558im_/http://www.atlanta-airport.com/passenger/art%20program/Images/KISSING_LOVERS_large.jpg",
  //   creator: "Endronce Rukodzi",
  //   year: "2011",
  //   theme: "Featured"
  //
  // }
  {
    name: "Narmer Palette",
    description: "The Narmer Palette, also known as the Great Hierakonpolis Palette or the Palette of Narmer, contains some of the earliest hieroglyphic inscriptions ever found. The tablet is thought by some to depict the unification of Upper and Lower Egypt under the king Narmer. ",
    image: "https://i.imgur.com/lBRZqlw.jpg",
    creator: "Unknown",
    year: "3200-3000 BC",
    theme: "egypt"
  },
  {
    name: "The Andromeda Galaxy",
    description: "The Andromeda Galaxy, also known as Messier 31, is a barred spiral galaxy approximately 2.5 million light-years from Earth. The galaxy's name stems from the area of Earth's sky in which it appears, the constellation of Andromeda.",
    image: "https://i.imgur.com/YVRBeSV.jpg",
    creator: "First observed by Abd al-Rahman al-Sufi",
    year: "Formed 10 billion years ago",
    theme: "space"
  },
  {
    name: "The Barbarians",
    description: "In this small painting, a gigantic, malevolent-looking bird couple marches forward with seemingly mile-long strides. The dark female leads the way as her male companion turns to look at the strange animal-perhaps their offspring-clinging to his left arm. In the far distance, a tiny woman holds onto some undefined winged being.",
    image: "https://i.imgur.com/orxCCm3.jpg",
    creator: "Max Ernst",
    year: "1937",
    theme: "surrealism"
  },
  {
    name: "Welcome Baby",
    description: "Nyanhongo sculpts universally appealing figures that relate to her motherhood and a desire to elevate the status of women in her society. 'Welcome Baby' depicts the joyful greeting of mother and child and the tender love they share. Nyanhongo selected Springstone to use for this piece.",
    image: "https://i.imgur.com/2W4zxpA.jpg",
    creator: "Agnes Nyanhongo",
    year: "2011",
    theme: "featured"

  },
  {
    name: "Khufu Statuette",
    description: "To this day, the little seated figure is the only three dimensional depiction of Khufu which survives largely intact, though there are also several statue fragments. Most Egyptologists consider the statue contemporary with Khufu - very likely from his reign. However, because of the unusual provenance, its dating has been repeatedly questioned.",
    image: "https://i.imgur.com/W1aKP0e.jpg",
    creator: "Unknown",
    year: "Unknown",
    theme: "egypt"
  },
  {
    name: "Orion Nebula",
    description: "The Orion Nebula is a diffuse nebula situated in the Milky Way, being south of Orion's Belt in the constellation of Orion. It is one of the brightest nebulae, and is visible to the naked eye in the night sky. The M42 nebula is estimated to be 24 light years across.",
    image: "https://i.imgur.com/WIbgxjs.jpg",
    creator: "First observed by Nicolas-Claude Fabri de Peiresc",
    year: "Formed 3 million years ago",
    theme: "space"
  },
  {
    name: "The Song of Love",
    description: "The Song of Love (also known as Le chant d'amour or Love Song; 1914) is a painting by the Italian metaphysical painter Giorgio de Chirico. It is one of the most famous works by de Chirico and an early example of the surrealist style, though it was painted ten years before the movement was `founded` by André Breton in 1924.",
    image: "https://i.imgur.com/WDg6QDy.jpg",
    creator: "	Giorgio de Chirico",
    year: "1915",
    theme: "surrealism"
  },
  {
    name: "Leap Frog",
    description: "Finding his inspiration at home, Benhura modeled the three joyful children playing 'Leapfrog' after his daughters. The figures in this piece, as with much of his work, are very stylized to evoke a sense of movement and whimsy.",
    image: "https://i.imgur.com/SO1CULX.jpg",
    creator: "Dominic Benhura",
    year: "2011",
    theme: "featured"

  }

]

module.exports = artifacts;
