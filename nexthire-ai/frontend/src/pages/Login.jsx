import LoginForm from "../components/Auth/LoginForm";

function Login() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#050816",
        padding: "20px",
      }}
    >
      <LoginForm />
    </div>
  );
}

export default Login;