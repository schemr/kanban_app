import React from 'react';
import Lane from './Lane.jsx'

export default ({lanes}) => {
    return (
        <div className="lanes">{lanes.map(lane =>
            <Lane class="lane" key={lane.id} lane={lane}>
                <Lane className="lane" key={lane.id} lane={lane} />
            </Lane>
        )}</div>
    )
}