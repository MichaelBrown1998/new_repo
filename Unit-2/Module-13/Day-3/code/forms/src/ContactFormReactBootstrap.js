import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function ContactFormReactBootstrap() {

    const [message, setMessage] = useState({
        name: "",
        subject: "",
        body: "",
        reason: "feedback",
        bestContact: "",
        acceptedTerms: false
    });

    const [validated, setValidated] = useState(false);

    const handleChange = (evt) => {

        // Check control type.
        const value = evt.target.type === "checkbox" ?
            evt.target.checked : evt.target.value;

        const clone = { ...message };
        clone[evt.target.name] = value;
        setMessage(clone);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const form = evt.currentTarget;
        if (form.checkValidity() === false) {
            // handle validation failure
        }

        setValidated(true);

        // Do something with message.
        // It's always up-to-date.
        console.log(message);
    };

    return (
        <>
            <h1>Contact Us</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={message.name} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please enter a name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="subject" value={message.subject} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please enter a subject.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="body">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="body" value={message.body} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please enter a message.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="reason">
                    <Form.Label>Reason</Form.Label>
                    <Form.Control as="select" name="reason" value={message.reason} onChange={handleChange}>
                        <option value="service">Request Service</option>
                        <option value="issue">Report an Issue</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="feedback">General Feedback</option>
                    </Form.Control>
                </Form.Group>
                <h3>Best Time To Contact</h3>
                <Form.Group>
                    <Form.Check inline type="radio" id="morning" name="bestContact"
                        value="morning"
                        label="Morning"
                        checked={message.bestContact === "morning"}
                        onChange={handleChange}
                        required
                        feedback="Please select one time to contact." />
                    <Form.Check inline type="radio" id="afternoon" name="bestContact"
                        value="afternoon"
                        label="Afternoon"
                        checked={message.bestContact === "afternoon"}
                        onChange={handleChange}
                        required feedback="Please select one time to contact." />
                    <Form.Check inline type="radio" id="evening" name="bestContact"
                        value="evening"
                        label="Evening"
                        checked={message.bestContact === "evening"}
                        onChange={handleChange}
                        required feedback="Please select one time to contact." />
                </Form.Group>
                <h3>Terms and conditions</h3>
                <Form.Group>
                    <Form.Check>
                        <Form.Check.Input id="acceptedTerms" name="acceptedTerms"
                            checked={message.acceptedTerms}
                            onChange={handleChange} required />
                        <Form.Check.Label>I've read and accept the terms and conditions.</Form.Check.Label>
                        <Form.Control.Feedback type="invalid">You must agree before submitting.</Form.Control.Feedback>
                    </Form.Check>
                    <Form.Text muted>We'll never share your contact info with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default ContactFormReactBootstrap;