import React from 'react';
import {showForm} from '../../Slices/UserSlice'
import { useDispatch,useSelector } from 'react-redux';
import styles from '../../styles/User.module.css'
import {ReactComponent as Close} from '../../svg/close.svg'
import { createUser } from '../../Slices/UserSlice';


const UserSignupForm = ({close,toggleCurrentFormType}) => {

  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmite=(e)=>{
e.preventDefault();

const isEmpty = Object.values(values).some(val=>!val)
if(isEmpty)return

dispatch(createUser(values))
close()
  }

  return (
    <div className={styles.wrapper}>
    <div className={styles.close} onClick={close} >
     <Close />
    </div>

    <div className={styles.title}>Sign Up</div>

    <form 
    onSubmit={handleSubmite}
    className={styles.form} >
      <div className={styles.group}>
        <input
          type="email"
          placeholder="Your email"
          name="email"
          value={values.email}
          autoComplete="off"
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.group}>
        <input
          type="name"
          placeholder="Your name"
          name="name"
          value={values.name}
          autoComplete="off"
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.group}>
        <input
          type="password"
          placeholder="Your password"
          name="password"
          value={values.password}
          autoComplete="off"
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.group}>
        <input
          type="avatar"
          placeholder="Your avatar"
          name="avatar"
          value={values.avatar}
          autoComplete="off"
          onChange={handleChange}
          required
        />
      </div>

      <div
        className={styles.link}
       onClick={()=>{
        toggleCurrentFormType('login')
       }}
      >
        I already have an account
      </div>

      <button type="submit" className={styles.submit}>
        Create an account
      </button>
    </form>
  </div>
);
};

export default UserSignupForm;