/* In parent:

const hero = {
    heroName: "Milee",
    hp: 100,
    mana: 78
};

<Destructure heroName={hero.heroName} hp={hero.hp} mana={hero.mana} />

FANCY PROPERTY SPREAD (maybe save for later)
<Destructure {...hero} />  
*/

function Destructure({ heroName, hp, mana }) {
    return (
        <div>
            <h2>Hero: {heroName}</h2>
            <ul>
                <li>HP: {hp}</li>
                <li>Mana: {mana}</li>
            </ul>
        </div>
    );
}

export default Destructure;