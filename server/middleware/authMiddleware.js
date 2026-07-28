import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
    try {
        let token;

        // Check cookie
        if (req.cookies.token) {
            token = req.cookies.token;
        }

        // Check Authorization header
        else if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer ")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Not Authorized",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid Token",
        });
    }
};

export default protect;