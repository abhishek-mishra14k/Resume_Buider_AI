import RegisterForm from "../components/auth/RegisterForm";

function Register() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-center text-4xl font-bold text-blue-600">
          Create Account
        </h1>

        <RegisterForm />
      </div>
    </section>
  );
}

export default Register;