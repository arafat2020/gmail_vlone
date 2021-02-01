import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openMassageBox } from '../features/mailSlice';

const Sidebar = () => {
    const dispatch = useDispatch()
    return (
        <div className="sidebar">
            <Button
                onClick={() => dispatch(openMassageBox())}
                startIcon={<AddIcon fontSize="large" />} className="sidebar__compose">Compose</Button>
            <SidebarOption Micon={InboxIcon} title={"Inbox"} number={38} selected />
            <SidebarOption Micon={StarIcon} title={"Star"} number={30} />
            <SidebarOption Micon={AssessmentIcon} title={"Snozed"} number={30} />
            <SidebarOption Micon={LabelImportantIcon} title={"Importent"} number={30} />
            <SidebarOption Micon={NearMeIcon} title={"Sent"} number={30} />
            <SidebarOption Micon={NoteIcon} title={"Draft"} number={30} />
            <SidebarOption Micon={ExpandMoreIcon} title={"More"} number={30} />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcon">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
        
    );
};

export default Sidebar;