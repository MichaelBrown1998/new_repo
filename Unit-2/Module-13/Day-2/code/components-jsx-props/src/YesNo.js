/* In parent:
<YesNo yes={true} />
<YesNo yes={5 > 15} />
*/

function YesNo({ yes }) {
    if (yes) {
        return <h2>YES!</h2>;
    } else {
        return (
            <section style={{ backgroundColor: "red" }}>
                <div><span>(no)</span></div>
            </section>
        );
    }
}

export default YesNo;