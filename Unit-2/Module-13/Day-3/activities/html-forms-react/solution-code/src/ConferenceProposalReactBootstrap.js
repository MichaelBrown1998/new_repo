import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function ConferenceProposalReactBootstrap() {

    const [proposal, setProposal] = useState({
        title: "",
        description: "",
        minutes: 30,
        topic: "",
        delivery: "",
        requiresCaptioning: false
    });

    const [validated, setValidated] = useState(false);

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
        setValidated(true);
        console.log(proposal);
    }

    return (
        <>
            <h1>Submit a Conference Presentation Proposal</h1>
            <Form noValidate validated={validated} onSubmit={onSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title"
                        value={proposal.title} onChange={onChange} required />
                    <Form.Control.Feedback type="invalid">
                        Enter a Title.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name="description"
                        value={proposal.description} onChange={onChange} required />
                    <Form.Control.Feedback type="invalid">
                        Enter a Description.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="minutes">
                    <Form.Label>Estimated Minutes</Form.Label>
                    <Form.Control type="number" name="minutes"
                        value={proposal.minutes} onChange={onChange} required min="30" max="60" />
                    <Form.Control.Feedback type="invalid">
                        Minutes must be between 30 and 60.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="topic">
                    <Form.Label>Topic</Form.Label>
                    <Form.Control as="select" name="topic"
                        value={proposal.topic} onChange={onChange} required>
                        <option value="">[Select a Topic]</option>
                        <option value="fishing">Fishing</option>
                        <option value="cooking">Cooking</option>
                        <option value="pl">Programming Languages</option>
                        <option value="knitting">Knitting</option>
                        <option value="animals">Animals</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Choose a Topic.
                    </Form.Control.Feedback>
                </Form.Group>
                <h2>Delivery</h2>
                <Form.Group>
                    {/* feedback doesn't work. */}
                    <Form.Check inline type="radio"
                        label="Talk" name="delivery" id="talk" value="talk"
                        checked={proposal.delivery === "talk"} onChange={onChange} required />
                    <Form.Check inline type="radio"
                        label="Video" name="delivery" id="video" value="video"
                        checked={proposal.delivery === "video"} onChange={onChange} required />
                    <Form.Check inline type="radio"
                        label="Performance" name="delivery" id="performance" value="performance"
                        checked={proposal.delivery === "performance"} onChange={onChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Check inline
                        label="Requires Captioning" name="requiresCaptioning" id="requiresCaptioning"
                        checked={proposal.requiresCaptioning} onChange={onChange} />
                </Form.Group>
                <Form.Group>
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default ConferenceProposalReactBootstrap;