import { useState } from 'react';

function buildStyle(isActive) {
    if (isActive) {
        return { fontWeight: "900" };
    }
    return { textDecoration: "line-through" };
}

function Options() {

    const [isAllergicToCats, setIsAllergicToCats] = useState(false);
    const [likesCorn, setLikesCorn] = useState(false);
    const [ownsANailClipper, setOwnsANailClipper] = useState(false);

    return (
        <div>
            <div>
                <label htmlFor="allergicToCats" style={buildStyle(isAllergicToCats)}>Allergic To Cats</label>
                <input type="checkbox" id="allergicToCats"
                    checked={isAllergicToCats} onChange={(evt) => setIsAllergicToCats(evt.target.checked)} />
            </div>
            <div>
                <label htmlFor="likesCorn" style={buildStyle(likesCorn)}>Likes Corn</label>
                <input type="checkbox" id="likesCorn"
                    checked={likesCorn} onChange={(evt) => setLikesCorn(evt.target.checked)} />
            </div>
            <div>
                <label htmlFor="ownsNailClipper" style={buildStyle(ownsANailClipper)}>Owns a Nail Clipper</label>
                <input type="checkbox" id="ownsNailClipper"
                    checked={ownsANailClipper} onChange={(evt) => setOwnsANailClipper(evt.target.checked)} />
            </div>
        </div>
    );
}

export default Options;