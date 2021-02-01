import React from 'react';
import './SidebarOption.css'

const SidebarOption = ({ Micon, title, number,selected }) => {
    return (
        <div className={`sidebarOption ${selected && 'option__silected'}`} >
            <Micon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
};

export default SidebarOption;