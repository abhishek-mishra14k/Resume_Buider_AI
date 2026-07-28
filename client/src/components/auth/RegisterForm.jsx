import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";

function RegisterForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
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
        const res = await api.post("/auth/register", formData);

        toast.success(res.data.message);

        setFormData({
            name: "",
            email: "",
            password: "",
        });

        navigate("/login");

    } catch (error) {
        toast.error(
            error.response?.data?.message || "Registration Failed"
        );
    }
}

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-xl bg-white p-8 shadow-lg"
        >
            <Input
                label="Full Name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
            />

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
                Register
            </Button>
        </form>
    );
}

export default RegisterForm;