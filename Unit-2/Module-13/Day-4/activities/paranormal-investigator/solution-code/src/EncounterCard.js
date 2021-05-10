function EncounterCard({ encounter, notify }) {

    function handleDelete() {
        fetch(`http://localhost:8080/api/encounter/${encounter.id}`, { method: "DELETE" })
            .then(() => notify({ action: "delete", encounter }))
            .catch(error => notify({ action: "delete", error }));
    }

    return (
        <div className="col">
            <div className="card">
                <div className="card-header">
                    {encounter.brief}
                </div>
                {encounter.imageUrl && <img src={encounter.imageUrl} className="card-img-top" alt={encounter.brief} />}
                <div className="card-body">
                    <h5>Timestamp</h5>
                    <p className="card-text">{encounter.dateTime}</p>
                    <h5>Details</h5>
                    <p className="card-text">{encounter.details}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button className="btn btn-danger mr-3" onClick={handleDelete}>Delete</button>
                    <button className="btn btn-secondary" onClick={() => notify({ action: "edit-form", encounter })}>Edit</button>
                </div>
            </div>
        </div>
    );
}

export default EncounterCard;