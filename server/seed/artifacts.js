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
  // {
  //   name: "Narmer Palette",
  //   description: "The Narmer Palette, also known as the Great Hierakonpolis Palette or the Palette of Narmer, contains some of the earliest hieroglyphic inscriptions ever found. The tablet is thought by some to depict the unification of Upper and Lower Egypt under the king Narmer. ",
  //   image: "https://i.imgur.com/lBRZqlw.jpg",
  //   creator: "Unknown",
  //   year: "3200-3000 BC",
  //   theme: "egypt"
  // },
  // {
  //   name: "The Andromeda Galaxy",
  //   description: "The Andromeda Galaxy, also known as Messier 31, is a barred spiral galaxy approximately 2.5 million light-years from Earth. The galaxy's name stems from the area of Earth's sky in which it appears, the constellation of Andromeda.",
  //   image: "https://i.imgur.com/YVRBeSV.jpg",
  //   creator: "First observed by Abd al-Rahman al-Sufi",
  //   year: "Formed 10 billion years ago",
  //   theme: "space"
  // },
  // {
  //   name: "The Barbarians",
  //   description: "In this small painting, a gigantic, malevolent-looking bird couple marches forward with seemingly mile-long strides. The dark female leads the way as her male companion turns to look at the strange animal-perhaps their offspring-clinging to his left arm. In the far distance, a tiny woman holds onto some undefined winged being.",
  //   image: "https://i.imgur.com/orxCCm3.jpg",
  //   creator: "Max Ernst",
  //   year: "1937",
  //   theme: "surrealism"
  // },
  // {
  //   name: "Welcome Baby",
  //   description: "Nyanhongo sculpts universally appealing figures that relate to her motherhood and a desire to elevate the status of women in her society. 'Welcome Baby' depicts the joyful greeting of mother and child and the tender love they share. Nyanhongo selected Springstone to use for this piece.",
  //   image: "https://i.imgur.com/2W4zxpA.jpg",
  //   creator: "Agnes Nyanhongo",
  //   year: "2011",
  //   theme: "featured"
  //
  // },
  // {
  //   name: "Khufu Statuette",
  //   description: "To this day, the little seated figure is the only three dimensional depiction of Khufu which survives largely intact, though there are also several statue fragments. Most Egyptologists consider the statue contemporary with Khufu - very likely from his reign. However, because of the unusual provenance, its dating has been repeatedly questioned.",
  //   image: "https://i.imgur.com/W1aKP0e.jpg",
  //   creator: "Unknown",
  //   year: "Unknown",
  //   theme: "egypt"
  // },
  // {
  //   name: "Orion Nebula",
  //   description: "The Orion Nebula is a diffuse nebula situated in the Milky Way, being south of Orion's Belt in the constellation of Orion. It is one of the brightest nebulae, and is visible to the naked eye in the night sky. The M42 nebula is estimated to be 24 light years across.",
  //   image: "https://i.imgur.com/WIbgxjs.jpg",
  //   creator: "First observed by Nicolas-Claude Fabri de Peiresc",
  //   year: "Formed 3 million years ago",
  //   theme: "space"
  // },
  // {
  //   name: "The Song of Love",
  //   description: "The Song of Love (also known as Le chant d'amour or Love Song; 1914) is a painting by the Italian metaphysical painter Giorgio de Chirico. It is one of the most famous works by de Chirico and an early example of the surrealist style, though it was painted ten years before the movement was `founded` by André Breton in 1924.",
  //   image: "https://i.imgur.com/WDg6QDy.jpg",
  //   creator: "Giorgio de Chirico",
  //   year: "1915",
  //   theme: "surrealism"
  // },
  // {
  //   name: "Leap Frog",
  //   description: "Finding his inspiration at home, Benhura modeled the three joyful children playing 'Leapfrog' after his daughters. The figures in this piece, as with much of his work, are very stylized to evoke a sense of movement and whimsy.",
  //   image: "https://i.imgur.com/SO1CULX.jpg",
  //   creator: "Dominic Benhura",
  //   year: "2011",
  //   theme: "featured"
  // },
  // {
  //   name: "Tutankhamun's Canopic Chest",
  //   description: "Canopic chests contained the internal organs of mummies, so they relate to the Egyptian belief that the afterlife is just as important as life on earth. Egyptians believed that everything had to be perfectly preserved to journey into the land after life and as part of the mummification process they removed viscera from the body.",
  //   image: "https://i.imgur.com/HfTZUtL.jpg",
  //   creator: "Unknown",
  //   year: "Unknown",
  //   theme: "egypt"
  // },
  // {
  //   name: "Alpha Centauri",
  //   description: "Alpha Centauri is the closest star system and closest planetary system to Earth's Solar System at 4.37 light-years (1.34 parsec) from the Sun. It is a triple star system, consisting of three stars: Rigil Kentaurus, Toliman), Proxima Centauri. Alpha Centauri A and B are Sun-like stars, and together they form the binary star Alpha Centauri AB." ,
  //   image: "https://i.imgur.com/qe3W42E.jpg",
  //   creator: "First observed by Ptolemy",
  //   year: "Formed 4.85 billion years ago",
  //   theme: "space"
  // },
  // {
  //   name: "The Palace of the Windowed Rocks",
  //   description: "The canvas has been described as depicting a desolate lunar landscape that shows, a world that only looks as if it were real but appears as a coherence of facts put together with unshakable necessity...and it realizes a kind of world experiencing with correlative objects that seem to be real although they can never be found in the real world.",
  //   image: "https://i.imgur.com/EobnO6W.jpg",
  //   creator: "Yves Tanguy",
  //   year: "1942",
  //   theme: "surrealism"
  // },
  // {
  //   name: "Generation Pyramid",
  //   description: "This work completed from Springstone showcases Gedion’s amazing technical prowess in crafting finely rendered figures that are full of spirit. As with much of his work, he finds inspiration in human relationships, paying particular attention to the family.",
  //   image: "https://i.imgur.com/jhYJLfk.jpg",
  //   creator: "Gedion Nyanhongo",
  //   year: "2011",
  //   theme: "featured"
  // },
  // {
  //   name: "Great Sphinx of Giza",
  //   description: "The Great Sphinx of Giza, commonly referred to as the Sphinx of Giza or just the Sphinx, is a limestone statue of a reclining sphinx, a mythical creature with the body of a lion and the head of a human. Facing directly from West to East, it stands on the Giza Plateau on the west bank of the Nile in Giza, Egypt. The face of the Sphinx is generally believed to represent the pharaoh Khafre.",
  //   image: "https://i.imgur.com/h5Wy6cq.jpg",
  //   creator: "Made for pharoah Khafre",
  //   year: "2500 BC",
  //   theme: "egypt"
  // },
  // {
  //   name: "Owl Nebula",
  //   description: "The Owl Nebula is a planetary nebula. It is approximately circular in cross-section with a little visible internal structure. It was formed from the outflow of material from the stellar wind of the central star as it evolved along the asymptotic giant branch.",
  //   image: "https://i.imgur.com/rp8jzSx.jpg",
  //   creator: "Observed by Pierre Méchain",
  //   year: "Formed 8,000 years ago",
  //   theme: "space"
  // },
  // {
  //   name: "Pays interdit",
  //   description: "Three spherical space-bodies hover in front of them, two of which are shaped like falling, burning meteorites. The painting is the first oil painting by Paalen, that is artfully based on his surrealist technique of Fumage. It explores the theme of mortal fears and primordial femininity with a hermetical iconography. The painting is presently in a private collection.",
  //   image: "https://i.imgur.com/hA5Qrkp.jpg",
  //   creator: "Wolfgang Paalen",
  //   year: "1937",
  //   theme: "surrealism"
  // },
  // {
  //   name: "Hwata (Secretary Bird)",
  //   description: "Amos Supuni uses a fusion of wood, Springstone and metal to depict this large, long-legged African bird of prey. The sculpture is the only mixed media work in the Airport collection, and it denotes a growing trend among Zimbabwe’s second- and third-generation sculptors to incorporate other materials in their work.",
  //   image: "https://i.imgur.com/vEo9MfX.jpg",
  //   creator: "Amos Supuni",
  //   year: "2011",
  //   theme: "featured"
  // },
  // {
  //   name: "Relief of Mentuhotep II",
  //   description: "Mentuhotep II, also known under his prenomen Nephepetre, was an Ancient Egyptian pharaoh circa 2061–2010 BCE, the sixth ruler of the Eleventh Dynasty. He is credited with reuniting Egypt, thus ending the turbulent First Intermediate Period and becoming the first pharaoh of the Middle Kingdom. He reigned for 51 years, according to the Turin King List.",
  //   image: "https://i.imgur.com/yDsORyj.jpg",
  //   creator: "Unkown",
  //   year: "1995 BC",
  //   theme: "egypt"
  // },
  // {
  //   name: "Ceres",
  //   description: "Ceres is the largest object in the main asteroid belt that lies between the orbits of Mars and Jupiter. With a diameter of 940 km (580 mi), Ceres is both the largest of the asteroids and the only unambiguous dwarf planet currently inside Neptune's orbit. It is the 25th-largest body in the Solar System within the orbit of Neptune.",
  //   image: "https://i.imgur.com/uI3LkCD.jpg",
  //   creator: "Discovered by Giuseppe Piazzi",
  //   year: "Formed 4.5 billion years ago",
  //   theme: "space"
  // },
  // {
  //   name: "The First Days of Spring",
  //   description: "The setting for this image is an expansive, smooth gray plane. It is elevated on the right and steps down to a lower level at the left. Clustered in the middle of this space is a variety of strange and colorful surrealist images. In the distance is the small shadowy figures of a man holding the hand of a small boy. Toward the left is a figure seated in a chair with his back turned to the entire scene.",
  //   image: "https://i.imgur.com/o25CVF9.jpg",
  //   creator: "Salvador Dalí",
  //   year: "1929",
  //   theme: "surrealism"
  // },
  // {
  //   name: "Galactic Dancer",
  //   description: "In 'Galactic Dancer', one of the artist's most lyrical works, a young woman with a dramatic sweep of hair is moving in rhythm with the forces of nature. Her unpolished yet graceful form is characteristic of Gutsa's style. This work was created from Springstone, which is a very hard dense stone.",
  //   image: "https://i.imgur.com/wqrW1XW.jpg",
  //   creator: "Tapfuma Gutsa",
  //   year: "2011",
  //   theme: "featured"
  // },
  // {
  //   name: "Prophecy of Neferti",
  //   description: "The Prophecies of Neferti is set in the fictional court of King Snefru (c. 2575–2551 BC), who ruled Egypt during the Fourth Dynasty. The sage Neferti is summoned to the court so that he can entertain the King with fine speeches. He is asked to speak of the future rather than the past, the sage prophesies the downfall of the Egyptian nation by civil war, leading to the eventual atonement of the nation through the rise of a great king.",
  //   image: "https://i.imgur.com/Ck4w3ax.jpg",
  //   creator: "Neferyt",
  //   year: "Around 1990 BC",
  //   theme: "egypt"
  // },
  // {
  //   name: "Crab Nebula",
  //   description: "The Crab Nebula is a supernova remnant in the constellation of Taurus. The common name comes from William Parsons who observed the object in 1840 using a 36-inch telescope and produced a drawing that looked somewhat like a crab. Corresponding to a bright supernova recorded by Chinese astronomers in 1054, the nebula was observed later by English astronomer John Bevis in 1731. The nebula was the first astronomical object identified corresponding to a historical supernova explosion.",
  //   image: "https://i.imgur.com/AJtM22m.jpg",
  //   creator: "First identified by John Bevis",
  //   year: "Created in 1054 AD",
  //   theme: "space"
  // },
  // {
  //   name: "Eine Kleine Nachtmusik",
  //   description: "At night one imagines all sorts of happenings in the shadows of the darkness. A hotel bedroom is both intimate and unfamiliar, almost alienation, and this can conjure a feeling of menace and unknown forces at play. But these unknown forces are a projection of our own imaginations: our own private nightmares.",
  //   image: "https://i.imgur.com/2IwffvO.jpg",
  //   creator: "Dorothea Tanning",
  //   year: "1943",
  //   theme: "surrealism"
  // },
  // {
  //   name: "Who Will Raise The Child",
  //   description: "Thematically, Zinyeka’s sculptures often meditate on the socio-economic effects of displacement and urbanization, as well as ecological issues. The devastating effect of AIDS in Africa was something that impacted Zinyeka's life and prompted him to create this powerful work. The mother in this sculpture, with hands clasped together, seems to plead for the safety and future of her child.",
  //   image: "https://i.imgur.com/GdIEMEs.jpg",
  //   creator: "Gladman Zinyeka",
  //   year: "2011",
  //   theme: "featured"
  // },
  // {
  //   name: "Dendera zodiac",
  //   description: "The sculptured Dendera zodiac is a widely known Egyptian bas-relief from the ceiling of the pronaos of a chapel dedicated to Osiris in the Hathor temple at Dendera, containing images of Taurus and Libra. This chapel was begun in the late Ptolemaic period; its pronaos was added by the emperor Tiberius. The relief has been conjectured to represent the basis on which later astronomy systems were based.",
  //   image: "https://i.imgur.com/VBtGgr9.jpg",
  //   creator: "Unkown",
  //   year: "Between 123 AD and 147 AD",
  //   theme: "egypt"
  // },
  // {
  //   name: "Galilean moons",
  //   description: "The Galilean moons are the four largest moons of Jupiter—Io, Europa, Ganymede, and Callisto. They were first seen by Galileo Galilei in December 1609 or January 1610, and recognized by him as satellites of Jupiter in March 1610. They were the first objects found to orbit a planet other than the Earth. These were the only four moons of Jupiter known, until the discovery of the 'fifth moon of Jupiter' in 1892.",
  //   image: "https://i.imgur.com/wLgTlIr.jpg",
  //   creator: "Discovered by Galileo Galilei",
  //   year: "Discovered in 1609 or 1610",
  //   theme: "space"
  // },
  // {
  //   name: "The Madonna of Port Lligat",
  //   description: "The paintings depict a seated Madonna (posed by Dalí's wife, Gala) with the infant Christ on her lap. Both figures have rectangular holes cut into their torsos, suggestive of their transcendent status. In the 1950 version Christ has bread at the center of his figure. They are posed in a landscape, with features of the coast of Port Lligat, Catalonia, in the background, with surrealist details including nails, fish, seashells, and an egg.",
  //   image: "https://i.imgur.com/GwPvMjS.jpg",
  //   creator: "Salvador Dalí",
  //   year: "1949",
  //   theme: "surrealism"
  // },
  // {
  //   name: "Nzuzu (Water Spirit)",
  //   description: "In 'Nzuzu', a mythical spirit evokes its transforming and healing power. Mukomberanwa uses the lines of the hair and placement of the beautifully rendered hands and feet to accentuate the graceful flow of the horizontal figure and capture the feel of water. The stone Nicholas chose for this piece is Green Serpentine.",
  //   image: "https://i.imgur.com/cUtjOvW.jpg",
  //   creator: "Nicholas Mukomberanwa",
  //   year: "2011",
  //   theme: "featured"
  // },
  // {
  //   name: "Statue of Menkaure with Hathor and Anput",
  //   description: "The statue of Menkaure with Hathor and Anput is an example of a typical Old Kingdom sculpture. The three figures display frontality and axiality, while fitting with the proportions of this time period. The graywacke came from the Eastern Desert in Egypt and is therefore associated with rebirth and the rising of the sun in the east.",
  //   image: "https://i.imgur.com/RI7lx3h.jpg",
  //   creator: "Unkown",
  //   year: "Between 2686 and 2181 BC",
  //   theme: "egypt"
  // },
  // {
  //   name: "Kuiper belt",
  //   description: "It is similar to the asteroid belt, but is far larger—20 times as wide and 20 to 200 times as massive. Like the asteroid belt, it consists mainly of small bodies or remnants from when the Solar System formed. While many asteroids are composed primarily of rock and metal, most Kuiper belt objects are composed largely of frozen volatiles (termed 'ices'), such as methane, ammonia and water.",
  //   image: "https://i.imgur.com/wLgTlIr.jpg",
  //   creator: "Discovered by David Jewitt and Jane Luu",
  //   year: "Discovered first object in 1992",
  //   theme: "space"
  // },
  // {
  //   name: "The Elephant Celebes",
  //   description: "The Elephant Celebes is a 1921 painting by the German Dadaist and surrealist Max Ernst. It is among the most famous of Ernst's early surrealist works and 'undoubtedly the first masterpiece of Surrealist painting in the de Chirico tradition.' It combines the vivid dreamlike atmosphere of Surrealism with the collage aspects of Dada.",
  //   image: "https://i.imgur.com/Lr6AZMH.jpg",
  //   creator: "Max Ernst",
  //   year: "1921",
  //   theme: "surrealism"
  // },
  // {
  //   name: "Protecting Spirit",
  //   description: "In 'Protecting Spirit', a spiritual presence with human form stands guard over children protecting them from harm. With the eye placed in the figure's hand, Mubayi has created a powerful totemic presence that speaks to the mystery of the spiritual world. As with most of Mubayi's work, he used the very hard Springstone for this piece.",
  //   image: "https://i.imgur.com/cYeHD0H.jpg",
  //   creator: "Sylvester Mubayi",
  //   year: "2011",
  //   theme: "featured"
  // },
  // {
  //   name: "Bull Palette",
  //   description: "The Bull Palette is the fragment of an Ancient Egyptian greywacke palette, carved in low relief and used, at least in principle, as a cosmetic palette for the grinding of cosmetics. It is dated to Naqada III, the final two centuries of the fourth millennium BC, immediately preceding the Early Dynastic Period.",
  //   image: "https://i.imgur.com/wVIIF5b.jpg",
  //   creator: "Unkown",
  //   year: "4th millennium BC",
  //   theme: "egypt"
  // },
  // {
  //   name: "Titan",
  //   description: "Titan is the largest moon of Saturn and the second-largest natural satellite in the Solar System. It is the only moon known to have a dense atmosphere, and the only known body in space, other than Earth, where clear evidence of stable bodies of surface liquid has been found. Titan is the sixth gravitationally rounded moon from Saturn.",
  //   image: "https://i.imgur.com/fLpEXwz.jpg",
  //   creator: "Discovered by Christiaan Huygens",
  //   year: "Discovered 1665",
  //   theme: "space"
  // },
  // {
  //   name: "The Voice of Space",
  //   description: "The Voice of Space is an oil painting by René Magritte. Four oil versions exist of the image. The most famous is that held in the Solomon R. Guggenheim Foundation, Peggy Guggenheim Collection, Venice. Another publicly displayed version is held at the Albright-Knox Art Gallery, Buffalo, New York. Bells float high in the sky. The jingle bell is a motif that recurs often in Magritte's work.",
  //   image: "https://i.imgur.com/Lu82uGR.jpg",
  //   creator: "René Magritte",
  //   year: "1931",
  //   theme: "surrealism"
  // },
  // {
  //   name: "Caring Mother",
  //   description: "Bonjisi, like many Zimbabwean sculptors, drew his ideas from both traditional and contemporary Shona culture. 'Caring Mother' pays homage to a mother's love for her children and the close bond they share. The Green Serpentine stone's rich color is dramatically contrasted by the natural brown streaks that have been creatively transformed by the artist into the mother's hair.",
  //   image: "https://i.imgur.com/KTmupUY.jpg",
  //   creator: "Lameck Bonjisi",
  //   year: "2011",
  //   theme: "featured"
  // }
]

module.exports = artifacts;
