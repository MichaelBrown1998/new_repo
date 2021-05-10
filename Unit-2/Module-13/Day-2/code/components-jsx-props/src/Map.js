const heroes = [
    { name: "Milee", hp: 100, mana: 78 },
    { name: "XiXi", hp: 65, mana: 124 },
    { name: "Aahm", hp: 87, mana: 0 },
];

function Map() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Hero</th>
                    <th>HP</th>
                    <th>Mana</th>
                </tr>
            </thead>
            <tbody>
                {heroes.map(hero => <tr key={hero.name}>
                    <td>{hero.name}</td>
                    <td>{hero.hp}</td>
                    <td>{hero.mana}</td>
                </tr>)}
            </tbody>
        </table>
    );
}

export default Map;