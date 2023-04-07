import React from "react";

function ColorBlock({ color }) {
    let style = { 'backgroundColor': color }
    return <div className="colorBlock" style={style}>
        <p>{color}</p>
    </div>

}


export default ColorBlock