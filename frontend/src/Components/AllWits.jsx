import React from 'react'
import Wit from './Wit';
import WitModel from './utils/Wit.model';

const AllWits = ({ wits }) => {

    const populateWits = () => {

        if (wits?.length > 0) {
            const displayWits = wits.map(currentWit => {
                const wit = new WitModel(currentWit.text, currentWit.dateCreated);
                return (<div key={wit._id}>
                    <Wit wit={wit} />
                </div>)
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