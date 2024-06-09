import "./Login.css";

export default function Login() {
  return (
    <form>
      <label htmlFor="Email"> Email:</label>
      <input type="text" id="Email" name="Email" />
      <label htmlFor="Password"> Password:</label>
      <input type="text" id="Password" name="Password" />
      <button> OK</button>
    </form>
  );
}
