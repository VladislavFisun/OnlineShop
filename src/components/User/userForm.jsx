import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import UserSignupForm from './UserSignUpForm'
import UserLoginForm from './UserLoginForm';
import styles from '../../styles/User.module.css'
import { toggleForm,toggleFormType } from '../../Slices/UserSlice';
const UserForm = () => {
    const dispatch = useDispatch();
    const { showForm, formType } = useSelector(state => state.user);
  
    const closeForm = () => dispatch(toggleForm(false));
    const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));
  
    return  (
    showForm?formType==='signup'?(
        <>
        <div className={styles.overlay}
        onClick={closeForm}
        ></div>
        <UserSignupForm close={closeForm} toggleCurrentFormType={toggleCurrentFormType}/>
        </>
    )
    :(
 <UserLoginForm closeForm={closeForm} toggleCurrentFormType={toggleCurrentFormType}/>
    )
    :<></>
    )
};

export default UserForm;