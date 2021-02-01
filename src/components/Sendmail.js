import React from 'react';
import './Sendmail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeMassageBox } from '../features/mailSlice';
import { db } from '../firebase';
import firebase from 'firebase'

const Sendmail = () => {
    const { register, handleSubmit,  errors } = useForm();
    const dspatch = useDispatch()
    const submition = (data) => {
        db.collection('emails').add({
            to: data.to,
            subject: data.subject,
            message: data.message,
            time: firebase.firestore.FieldValue.serverTimestamp()
        });
        dspatch(closeMassageBox())
        
    }
    
    return (
        <div className="sendmail">
            <div className="senmail__header">
                <h3>New message</h3>
                <CloseIcon onClick={()=>dspatch(closeMassageBox())} className="senmail__close"/>
            </div>
            <form id="field" onSubmit={handleSubmit(submition)}>
                <input 
                    name="to" 
                    
                    placeholder="To" 
                    
                    type="email" 
                    ref={register({required:true})}
                    />
                    {errors.to && <p className="mail__error">Required!!!</p>}
                
                <input 
                    name="subject" 
                    
                    placeholder="Subject" 
                    
                    type="text" 
                    ref={register({required:true})}
                    />
                   {errors.subject && <p className="mail__error">Required!!!</p>}
                
                <input 
                    name="message" 
                    placeholder="Massage...." 
                    type="text"
                    ref={register({required:true})}
                    className="sendmail__message" 
                    />
                    {errors.message && <p className="mail__error">Required!!!</p>}
                <div className="sendmail__option">
                    <Button
                        className="sendmail_send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >Send</Button>
                </div>
            </form>
        </div>
    );
};

export default Sendmail;