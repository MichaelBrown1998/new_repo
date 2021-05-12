// importing the hook "useState" from the react java class given to us by Node
import { useState } from 'react';

// 
function EncounterForm({ encounter: initialEncounter, notify }) {

    const [encounter, setEncounter] = useState(initialEncounter);
    const isAdd = initialEncounter.id === 0;

    function handleChange(evt) {
        const clone = { ...encounter };
        clone[evt.target.name] = evt.target.value;
        setEncounter(clone);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        const url = isAdd ? "http://localhost:8080/api/encounter" : `http://localhost:8080/api/encounter/${encounter.id}`;
        const method = isAdd ? "POST" : "PUT";
        const expectedStatus = isAdd ? 201 : 204;

        const init = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(encounter)
        };

        fetch(url, init)
            .then(response => {
                if (response.status === expectedStatus) {
                    if (isAdd) {
                        return response.json();
                    } else {
                        return encounter;
                    }
                }
                return Promise.reject(`Didn't receive expected status: ${expectedStatus}`);
            })
            .then(result => notify({
                action: isAdd ? "add" : "edit",
                encounter: result
            }))
            .catch(error => notify({ error }));

    }

    return (
        <>
            <h1>{encounter.id > 0 ? "Edit" : "Add"} Encounter</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="brief">Brief</label>
                    <input type="text" id="brief" name="brief"
                        className="form-control"
                        value={encounter.brief} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="details">Details</label>
                    <textarea id="details" name="details" className="form-control"
                        value={encounter.details} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="dateTime">Date &amp; Time</label>
                    <input type="text" id="dateTime" name="dateTime"
                        className="form-control"
                        value={encounter.dateTime} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="imageUrl">Image</label>
                    <input type="url" id="imageUrl" name="imageUrl"
                        className="form-control"
                        value={encounter.imageUrl || ""} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary mr-3" type="submit">Save</button>
                    <button className="btn btn-secondary" type="button" onClick={() => notify({ action: "cancel" })}>Cancel</button>
                </div>
            </form>
        </>
    );
}

export default EncounterForm;