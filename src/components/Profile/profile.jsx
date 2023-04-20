import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import styles from "../../styles/Profile.module.css"
import { updateUser,exitAccount } from '../../Slices/UserSlice';
import { useNavigate } from 'react-router-dom';
const Profile = () => {


    const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);

  const navigate = useNavigate()

  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  React.useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(updateUser(values));
  };

  const logOut =()=>{
    dispatch(exitAccount())
    navigate('/')
  }
    return (
        <section className={styles.profile}>
      {!currentUser ? (
        <span>You need to log in</span>
      ) : (
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

          <button
          type="submit" className={styles.submit}>
            Update
          </button>
          <button
          onClick={logOut}
           className={styles.submit}>
          Log out
          </button>
        </form>
      )}
    </section>
    );
};

export default Profile;