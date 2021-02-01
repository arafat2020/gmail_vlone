import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import './Emailrow.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedMail } from '../features/mailSlice';

const Emailrow = ({ id, title, subject, discription, time }) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const openMail=()=>{
        dispatch(selectedMail({
            id: id,
            title: title,
            subject: subject,
            discription: discription,
            time: time
        }))
        history.push('/mail')
    }
    return (
        <div onClick={openMail} className="emailrow">
            <div className="emailrow__option">
                <Checkbox/>
                <IconButton>
                    <StarBorderIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
            </div>
            <div className="emailrow__title">
                <h3>{ title}</h3>
            </div>
            <div className="emailrow__massage">
                <h4>
                    {subject}-
                    <span className="description">{ discription}</span>
                </h4>
            </div>
            <div className="emailrow__time">
                {time}
            </div>
        </div>
    );
};

export default Emailrow;