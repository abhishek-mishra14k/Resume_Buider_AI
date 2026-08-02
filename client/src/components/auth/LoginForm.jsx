import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";

function LoginForm() {
    const navigate = useNavigate();
    const location = useLocation();

    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await api.post("/auth/login", formData);

            login(res.data.user, res.data.token);

            toast.success(res.data.message);

            // Redirect user back to the page they came from
            const redirectTo = location.state?.from || "/dashboard";
            navigate(redirectTo, { replace: true });

        } catch (error) {
            toast.error(
                error.response?.data?.message || "Login Failed"
            );
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-xl bg-white p-8 shadow-lg"
        >
            <Input
                label="Email"
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
            />

            <Input
                label="Password"
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
            />

            <Button type="submit">
                Login
            </Button>
        </form>
    );
}

export default LoginForm;