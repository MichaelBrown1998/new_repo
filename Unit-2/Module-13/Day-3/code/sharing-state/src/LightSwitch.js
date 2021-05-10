import {useState} from "react";
function Lightswitch({isOn, toggle}){
const [changes, setChanges] = useState(0);
function handleChange (evt){
    setChanges (changes+1)
    toggle(evt.target.checked)
}
return(
    <div>
        <label>
            {isOn? "on":"off"}
            <input type = "checkbox" checked = {isOn} onChange = {handleChange}/>
        </label>
        <div>
            mychanges:{changes}
        </div>
    </div>
)
}
export default Lightswitch;