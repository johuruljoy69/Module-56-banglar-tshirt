import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const ring2 = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <p><small>Ring: {ring2} </small></p>
        </div>
    );
};

export default Special;