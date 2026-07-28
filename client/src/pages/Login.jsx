import LoginForm from "../components/auth/LoginForm";

function Login() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-center text-4xl font-bold text-blue-600">
          Welcome Back
        </h1>

        <LoginForm />
      </div>
    </section>
  );
}

export default Login;