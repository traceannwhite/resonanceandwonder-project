import styles from "../styles/SignInForm.module.css";
import Button from "./Button";
import { signInWithGoogle } from "./../firebase/config";

const SignIn = () => {
  return (
    <div className={styles.signin}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.formWrap}>
          <form>
            <div className={styles.socialSignin}>
              <div className={styles.row}></div>
              <Button onClick={signInWithGoogle}>Sign in with Google</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;