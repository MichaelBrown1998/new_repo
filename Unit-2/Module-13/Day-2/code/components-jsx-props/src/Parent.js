import Child from './Child.js';

/* In Parents' parent:
<div>
    <Parent title="Parent #1" />
    <Parent title="Parent #2" />
</div>
*/

function Parent({ title }) {
    return (
        <section>
            <h2>{title}</h2>
            <Child title={`${title}: Child #1`} />
            <Child title={`${title}: Child #2`} />
            <Child title={`${title}: Child #3`} />
        </section>
    );
}

export default Parent;