import { useState } from 'react';

function Login({ message, service, done }) {

    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [err, setErr] = useState("");

    function handleChange(evt) {
        const clone = { ...credentials };
        clone[evt.target.name] = evt.target.value;
        setCredentials(clone);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        service.login(credentials)
            .then(() => done())
            .catch(err => setErr(err.toString()));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <div className="alert alert-info">{message}</div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" className="form-control"
                    value={credentials.username} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className="form-control"
                    value={credentials.password} onChange={handleChange} />
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-secondary mr-3" onClick={() => done()}>Cancel</button>
                <button type="submit" className="btn btn-primary">Log In</button>
            </div>
            {err && <div className="alert alert-danger">{err}</div>}
        </form>
    )
}

export default Login;