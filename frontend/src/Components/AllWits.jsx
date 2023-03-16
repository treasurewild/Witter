import React from 'react'
import Wit from './Wit';
import WitModel from './utils/Wit.model';
import { useState, useEffect } from "react";

const AllWits = ({ data }) => {

    const [dataStatus, setDataStatus] = useState({ name: `loading`, message: `Data is loading...` });

    useEffect(() => {
        const { error } = data;

        if (error?.length) {
            return setDataStatus({ name: `error`, message: error });
        }

        setDataStatus({ name: `loading`, message: `Data is loading...` });
    }, [data]);

    const populateWits = () => {
        const { wits } = data;
        console.dir(wits)

        if (wits?.length > 0) {
            const displayWits = wits.map(currentWit => {
                const wit = new WitModel(currentWit.text, currentWit.dateCreated);
                return (<Wit wit={wit} key={wit._id} />)
            });
            return displayWits;
        }
        return (
            <p id={dataStatus.name}>{dataStatus.message}</p>
        );
    }

    return (
        <div className='all-wits'>
            {populateWits()}
        </div>
    )
}

export default AllWits;