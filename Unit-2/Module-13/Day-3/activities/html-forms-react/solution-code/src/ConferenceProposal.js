import { useState } from 'react';

function ConferenceProposal() {

    const [proposal, setProposal] = useState({
        title: "",
        description: "",
        minutes: 30,
        topic: "",
        delivery: "",
        requiresCaptioning: false
    });

    function onChange(evt) {

        let value = evt.target.value;
        if (evt.target.type === "checkbox") {
            value = evt.target.checked;
        } else if (evt.target.type === "number") {
            value = parseInt(value, 10);
        }

        const clone = { ...proposal };
        clone[evt.target.name] = value;
        setProposal(clone);
    }

    function onSubmit(evt) {
        evt.preventDefault();
        console.log(proposal);
    }

    return (
        <>
            <h1>Submit a Conference Presentation Proposal</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" id="title" name="title" className="form-control"
                        value={proposal.title} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea id="description" name="description" className="form-control"
                        value={proposal.description} onChange={onChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="minutes" className="form-label">Estimated Minutes</label>
                    <input type="number" id="minutes" name="minutes" className="form-control"
                        value={proposal.minutes} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="topic" className="form-label">Topic</label>
                    <select id="topic" name="topic" className="form-control"
                        value={proposal.topic} onChange={onChange}>
                        <option value="">[Select a Topic]</option>
                        <option value="fishing">Fishing</option>
                        <option value="cooking">Cooking</option>
                        <option value="pl">Programming Languages</option>
                        <option value="knitting">Knitting</option>
                        <option value="animals">Animals</option>
                    </select>
                </div>
                <h2>Delivery</h2>
                <div className="mb-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="delivery" id="talk" value="talk"
                            checked={proposal.delivery === "talk"} onChange={onChange} />
                        <label className="form-check-label" htmlFor="talk">Talk</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="delivery" id="video" value="video"
                            checked={proposal.delivery === "video"} onChange={onChange} />
                        <label className="form-check-label" htmlFor="video">Video</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="delivery" id="performance" value="performance"
                            checked={proposal.delivery === "performance"} onChange={onChange} />
                        <label className="form-check-label" htmlFor="performance">Performance</label>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="requiresCaptioning" id="requiresCaptioning"
                            checked={proposal.requiresCaptioning} onChange={onChange} />
                        <label className="form-check-label" htmlFor="requiresCaptioning">Requires Captioning</label>
                    </div>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default ConferenceProposal;