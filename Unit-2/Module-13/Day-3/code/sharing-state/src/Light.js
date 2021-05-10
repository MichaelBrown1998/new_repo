import {useState} from "react";
import Lightswitch from "./Lightswitch";
function getStyle (isOn){
    const style = {display: "flex", minHeight: "500px"};
    style.backgroundColor = isOn? "white":"black";
    style.color = isOn? "black":"white";
    return style;
}
function Light(){ 
    const [isOn, setIsOn] = useState(true)
    const [changes, setChanges] = useState(0)
    function toggle (isOn){
        setIsOn (isOn);
        setChanges(changes+1);
    }
    return (
        <div>
            <h1>
                totalChanges : {changes}
            </h1>
            <div style ={getStyle(isOn)}>
            <Lightswitch isOn ={isOn} toggle = {toggle}/>
            <Lightswitch isOn ={isOn} toggle = {toggle}/>
            </div>
        </div>
    )
 }
export default Light;