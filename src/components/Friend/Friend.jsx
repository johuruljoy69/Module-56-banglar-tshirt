import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h2>Friend</h2>
            { ring && <small><p>Ring: Diamond</p></small> }
        </div>
    );
};

export default Friend;