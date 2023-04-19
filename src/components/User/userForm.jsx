import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/User.module.css";
import { showForm } from '../../Slices/UserSlice.js';
import {UserSignUpForm} from './UserSignUpForm'
const UserForm = () => {
    const dispatch = useDispatch()
    const { showForm, formType } = useSelector(({ user }) => user);
 
    const closeForm = () => dispatch(showForm(false));
    const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));
  
    return showForm  (
  
//    <>
//             <div className={styles.overlay} onClick={closeForm} />
          
//               <UserSignUpForm
//                 toggleCurrentFormType={toggleCurrentFormType}
//                 closeForm={closeForm}
//               />
     
//    </>
    )
};

export default UserForm;