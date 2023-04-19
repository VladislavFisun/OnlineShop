import React from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../styles/User.module.css'
import { toggleFormType,loginUser, } from '../../Slices/UserSlice';
const UserLoginForm = ({closeForm,toggleCurrentFormType}) => {
    const dispatch = useDispatch();
    const [values, setValues] = React.useState({
      email: "",
      password: "",
    });

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const isNotEmpty = Object.values(values).every((val) => val);
    
        localStorage.setItem('user',JSON.stringify(values))
        let storage = localStorage.getItem('user')
        if (!isNotEmpty) return;
        
         if(storage){

             dispatch(loginUser(values));
         }
        closeForm();
      };
 
      
    
    return (
        <div className={styles.wrapper}>
        <div className={styles.close} onClick={closeForm}>
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
          </svg>
        </div>
  
        <div className={styles.title}>Log In</div>
  
        <form className={styles.form} onSubmit={handleSubmit}>
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
              type="password"
              placeholder="Your password"
              name="password"
              value={values.password}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
  
          <div
            onClick={() => toggleCurrentFormType("signup")}
            className={styles.link}
          >
            Create an account
          </div>
  
          <button type="submit" className={styles.submit}>
            Login
          </button>
        </form>
      </div>
    );
};

export default UserLoginForm;