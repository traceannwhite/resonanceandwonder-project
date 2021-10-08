const LogInForm = (props) => {
  return (
    <form>
      <h1 size={800} marginTop="10" marginBottom="10">
        Log in
      </h1>
      <label>
        <input
          label="Username"
          required
          placeholder="Email"
          onChange={(e) => props.setEmail(e.target.value)}
          value={props.email}
        />
      </label>
      <label>
        <input
          label="Password"
          required
          placeholder="Password"
          type="password"
          onChange={(e) => props.setPassword(e.target.value)}
          value={props.password}
        />
      </label>
      <button appearance="primary" onClick={props.handleLogIn}>
        Log in
      </button>
    </form>
  );
};

export default LogInForm;
