/* In a parent:
<PassProps name="a string" n={Math.PI} collection={[1, 2, 3]} func={Math.max} />
*/

function PassProps(props) {

    // Can use any prop.
    if (typeof props.func === "function") {
        console.log(props.func(1, 2));
    }

    return (
        <div>
            <div><strong>name</strong> is {typeof props.name}</div>
            <div>name value: {props.name}</div>
            <div><strong>n</strong> is {typeof props.n}</div>
            <div>n value: {props.n}</div>
            <div><strong>collection</strong> is {typeof props.collection}</div>
            <div>collection value: {props.collection.toString()}</div>
            <div><strong>func</strong> is {typeof props.func}</div>
        </div>
    );
}

export default PassProps;