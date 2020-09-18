import React from "react";
import { GET_AWS_REGIONS } from "../gql/queries";
import { useQuery } from "@apollo/client";
import { AwsRegionsQuery } from "../gql/generated/types";

export const QueryModule: React.FC = () => {
    const { data, loading } = useQuery<AwsRegionsQuery>(GET_AWS_REGIONS);
    if (loading) {
        return <b> Loading...</b>
    }
    const awsRegions = data?.awsRegions
    return (
        <div>
            {awsRegions?.map(region => <b>{region}</b>)}
        </div>
    )

}