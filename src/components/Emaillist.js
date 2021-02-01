import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import './Emaillist.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Emailrow from './Emailrow';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../firebase';

const Emaillist = () => {
    const [mails, setmails] = useState([]);
    useEffect(() => {
        db.collection('emails').orderBy('time','desc').onSnapshot(snapshot => {
            setmails(snapshot.docs.map((data) => ({
                id: data.id,
                data: data.data()
           })))
       }) 
    }, [])
    console.log(mails)
    return (
        <div className="emillist">
            <div className="emaillist__setting">
                <div className="setting__left">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="setting__right">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailSection">
                    <Section Iconic={InboxIcon} title="Primary" color="red" selected />
                    <Section Iconic={PeopleIcon} title="Social" color="#1a73eb"  />
                    <Section Iconic={LocalOfferIcon} title="Promotins" color="green"  />
            </div>
            <div className="mail__list">
                {mails.map(({id,data:{to,subject,message,time}}) => (
                    <Emailrow
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        discription={message}
                        time={new Date(time?.seconds * 1000).toUTCString()}
                />
                ))}
            </div>
        </div>
    );
};

export default Emaillist;