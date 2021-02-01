import React from 'react';
import './Section.css'

const Section = ({ Iconic, title, color, selected }) => {
    return (
        <div className={`sectioin ${selected && 'section__selected'}`} style={{
            borderBottom: `3px solid ${color}`,
            color:`${selected && color}`
        }}>
            <Iconic />
            <h4>{ title}</h4>
        </div>
    );
};

export default Section;