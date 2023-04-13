// 1a.
const jPDinos = [`Velociraptors`, `Tyrannosaurus Rex`, `Dilophosaurus`]

// 1b.
function seeDinos(a, ...b) {
    console.log(a);
    console.log(b);

}
seeDinos(...jPDinos);

// 2a. 
const jPCharacters = {
    alanGrant: `Sam Neill`,
    ellieSattler: `Laura Dern`,
    ianMalcolm: `Jeff Goldblum`,
};

// 2b.
seeCharacters = ({ellieSattler}) => {
console.log(ellieSattler);
};

seeCharacters(jPCharacters);


// Bonus 
// 3a.
const jurassicParkMovies = [
    {
        one: `Jurassic Park`,
        two: `The Lost World: Jurassic Park`,
        three: `Jurassic Park III`,
},
{
    four: `Jurassic World`,
    five: `Jurassic World: Fallen Kingdom`,
    six: `Jurassic World: Dominion`,

},
]

function seeJPMovies (a,b)
{
    console.log(a.one);
    console.log(a.two);
    console.log(a.three);
    console.log(b.four);
    console.log(b.five);
    console.log(b.six);   
}

seeJPMovies(...jurassicParkMovies);