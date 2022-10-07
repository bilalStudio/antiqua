import NavBar from "../Components/NavBar";
import LoginForm from "../Components/LoginForm";
export default function Login() {
  return (
    <div>
      <NavBar />
      <main style={{ padding: "1rem 0" }}>
        <LoginForm />
      </main>
    </div>
  );
}
