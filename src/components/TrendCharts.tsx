import React, { useState } from "react";

interface TrendChartsProps {
    someProp: string;
}
export const TrendCharts: React.FC<TrendChartsProps> = ({ someProp }) => {

    const [isHidden, setIsHidden] = useState(false);
    return (
        <div>
            <button onClick={() => setIsHidden(!isHidden)}>Hide Content</button>
            {isHidden && <>Some trend chart
            something else
            heres your prop {someProp}</>}
        </div>
    )
}

