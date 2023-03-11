import React from 'react'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Wit from './Wit';
import WitModel from './utils/Wit.model';

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
            const displayWits = wits.map(currentWit => {
                const wit = new WitModel(currentWit.text);
                return <Wit wit={wit} key={wit._id} />
            });
            return displayWits;
        }
        return <p>{dataStatus.message}</p>
    }

    return (
        <div className='all-wits'>
            {populateWits()}
            {/* {data.wits.map(wit => {
                return (<Wit wit={wit} key={wit._id} />);
            })} */}
        </div>
    )
}

export default AllWits;