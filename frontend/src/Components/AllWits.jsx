import React from 'react'
import { useState, useEffect } from 'react';
import Wit from './Wit';
import WitModel from './utils/Wit.model';

const AllWits = ({ wits }) => {
    //const [dataStatus, setDataStatus] = useState({ name: `loading`, message: `Data is loading...` });

    // useEffect(() => {
    //     const { error } = data;
    //     if (error?.length) {
    //         return setDataStatus({ name: `error`, message: error });
    //     }
    //     setDataStatus({ name: `loading`, message: `Data is loading...` });
    // }, [data]);

    const populateWits = () => {

        if (wits?.length > 0) {
            const displayWits = wits.map(currentWit => {
                const wit = new WitModel(currentWit.text);
                return <Wit wit={wit} key={wit._id} />
            });
            return displayWits;
        }
        return <p>Data is loading...</p>
    }

    return (
        <div className='all-wits'>
            {populateWits()}
        </div>
    )
}

export default AllWits;