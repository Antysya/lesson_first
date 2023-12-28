import "./badge.css"
import React from "react";

interface IBadgeProps{
    text: string;
}

const Badge:React.FC<IBadgeProps> = ({text})=>{
return(
    <>
        <div className="badge">
            <span className="badgeText">{text || "no text"}</span>
        </div>
    </>
)
}

export default Badge;