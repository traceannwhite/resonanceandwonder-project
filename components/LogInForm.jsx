import styles from "../styles/LogInForm.module.css";

const LogInForm = (props) => {
  return (
    <form className={styles.loginform}>
      <h1>Log in</h1>
      <label>
        <input
          label="Username"
          required
          placeholder="Email"
          // onChange={(e) => props.setEmail(e.target.value)}
          value={props.email}
        />
      </label>
      <label>
        <input
          label="Password"
          required
          placeholder="Password"
          type="password"
          // onChange={(e) => props.setPassword(e.target.value)}
          value={props.password}
        />
      </label>
      <button className={styles.button} onClick={props.handleLogIn}>
        Log in
      </button>
    </form>
  );
};

export default LogInForm;
