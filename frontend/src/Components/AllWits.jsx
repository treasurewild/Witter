import React from 'react'
import Wit from './Wit.jsx';
import WitModel from './utils/Wit.model.js';
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

        if (wits?.length > 0) {
            orderWits(wits);
            const displayWits = wits.map(currentWit => {
                const wit = new WitModel(currentWit.text, currentWit.dateCreated, currentWit.postedBy);
                console.dir(currentWit)
                return (<Wit wit={wit} key={wit._id} />)
            });
            return displayWits;
        }
        return (
            <p id={dataStatus.name}>{dataStatus.message}</p>
        );
    }

    const orderWits = wits => {
        wits.sort(function (a, b) {
            return new Date(b.dateCreated) - new Date(a.dateCreated);
        })

    }

    return (
        <div className='all-wits'>
            {populateWits()}
        </div>
    )
}

export default AllWits;