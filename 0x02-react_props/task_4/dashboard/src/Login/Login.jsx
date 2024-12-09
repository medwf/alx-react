import "./Login.css";

export default function Login() {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="Email">Email:</label>
        <input type="text" id="Email" name="Email" />
        <label htmlFor="Password">Password:</label>
        <input type="password" id="Password" name="Password" />
        <button>OK</button>
      </form>
    </div>
  );
}
