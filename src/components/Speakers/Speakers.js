import React from 'react';
import { withData } from './withData'

const Speakers = ({ speakers }) => {


    return (
        <div>
            {speakers.map(speaker => <p>{speaker.name}</p>)}
        </div>
    );
}

export default withData(2)(Speakers);