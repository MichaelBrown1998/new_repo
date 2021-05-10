const beeFamilies = [
    {
        name: "Apidae",
        description: "Includes some of the most commonly seen bees, including bumblebees and honey bees, but also includes stingless bees (also used for honey production), carpenter bees, orchid bees, cuckoo bees, and a number of other less widely known groups.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Xylocopa_micans.JPG/800px-Xylocopa_micans.JPG"
    },
    {
        name: "Halictidae",
        description: "The second-largest family of Anthophila bees. Halictid species occur all over the world and are usually dark-colored and often metallic in appearance.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Halictus_scabiosae_MHNT.jpg/1280px-Halictus_scabiosae_MHNT.jpg"
    },
    {
        name: "Melittidae",
        description: "A small bee family, with over 200 described species in three subfamilies. The family has a limited distribution, with all described species restricted to Africa and the northern temperate zone.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Macropis_europaea4.jpg"
    }
];

function Bee({ family }) {

    const beeFamily = beeFamilies.find(b => b.name === family);

    if (!beeFamily) {
        return <div className="alert alert-warning">Bee family {family} not found.</div>;
    }

    return (
        <>
            <h3>{beeFamily.name}</h3>
            <p>{beeFamily.description}</p>
            <img src={beeFamily.imageUrl} alt={beeFamily.name} />
        </>
    );
}

export default Bee;