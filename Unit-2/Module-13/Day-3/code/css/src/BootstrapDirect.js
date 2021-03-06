import 'bootstrap/dist/css/bootstrap.css';

function BootstrapDirect() {
    return (
        <div className="container">
            <h1>Bees</h1>
            <div className="row">
                <div className="col-4">Bumblebee</div>
                <div className="col-4">Mason bee</div>
                <div className="col-4">Carpenter bee</div>
                <div className="col-4">Leafcutter bee</div>
                <div className="col-4">Sweat bee</div>
            </div>
            <div className="alert alert-danger">Bees!</div>
            <button className="btn btn-primary">Click Me</button>
        </div>
    );
}

export default BootstrapDirect;