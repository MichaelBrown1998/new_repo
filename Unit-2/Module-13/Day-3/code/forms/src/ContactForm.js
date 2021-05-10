import { useState } from 'react';

function ContactForm() {

    const [message, setMessage] = useState({
        name: "",
        subject: "",
        body: "",
        reason: "feedback",
        bestContact: "",
        acceptedTerms: false
    });

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

        // Do something with message.
        // It's always up-to-date.
        console.log(message);
    };

    return (
        <>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name"
                        className="form-control"
                        value={message.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject"
                        className="form-control"
                        value={message.subject} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="body">Message</label>
                    <textarea id="body" name="body" className="form-control"
                        value={message.body} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="reason">Reason</label>
                    <select id="reason" name="reason" className="form-control"
                        value={message.reason} onChange={handleChange}>
                        <option value="service">Request Service</option>
                        <option value="issue">Report an Issue</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="feedback">General Feedback</option>
                    </select>
                </div>
                <div className="mb-3">
                    <h3>Best Time To Contact</h3>
                    <div className="row">
                        <div className="col">
                            <input type="radio" value="morning"
                                id="morning" name="bestContact"
                                checked={message.bestContact === "morning"}
                                onChange={handleChange} />
                            <label htmlFor="morning"> Morning</label>
                        </div>
                        <div className="col">
                            <input type="radio" value="afternoon"
                                id="afternoon" name="bestContact"
                                checked={message.bestContact === "afternoon"}
                                onChange={handleChange} />
                            <label htmlFor="afternoon"> Afternoon</label>
                        </div>
                        <div className="col">
                            <input type="radio" value="evening"
                                id="evening" name="bestContact"
                                checked={message.bestContact === "evening"}
                                onChange={handleChange} />
                            <label htmlFor="evening"> Evening</label>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <h3>Terms and conditions</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                            id="acceptedTerms" name="acceptedTerms"
                            checked={message.acceptedTerms} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="acceptedTerms">
                            I've read and accept the terms and conditions.
                        </label>
                    </div>
                    <small className="form-text">We'll never share your contact info with anyone else.</small>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default ContactForm;