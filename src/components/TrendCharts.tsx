import React from "react";

interface TrendChartsProps {
    someProp: string;
}
export const TrendCharts: React.FC<TrendChartsProps> = ({ someProp }) => {


    return (
        <div>
            Some trend chart
            heres your prop {someProp}
        </div>
    )
}