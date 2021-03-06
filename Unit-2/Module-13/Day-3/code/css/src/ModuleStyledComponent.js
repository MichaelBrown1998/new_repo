import './any-name.css';
import './headers.css';
import styles from './ModuleStyledComponent.module.css';

function ModuleStyledComponent() {
    return (
        <section className={styles.centered}>
            <h1>Bees</h1>
            <p>Bees are flying insects closely related to wasps and ants, known for their role in pollination and,
            in the case of the best-known bee species, the western honey bee, for producing honey.
            Bees are a monophyletic lineage within the superfamily Apoidea. They are presently considered a clade,
            called Anthophila. There are over 16,000 known species of bees in seven recognized biological families.
            Some species – including honey bees, bumblebees, and stingless bees –
            live socially in colonies while some species – including mason bees, carpenter bees,
            leafcutter bees, and sweat bees – are solitary.
            </p>
            <h2>Types</h2>
            <ul>
                <li>Bumblebee</li>
                <li>Mason bee</li>
                <li>Carpenter bee</li>
                <li>Leafcutter bee</li>
                <li>Sweat bee</li>
            </ul>
        </section>
    );
}

export default ModuleStyledComponent;