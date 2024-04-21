
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "@/models/auth-model";
import { NextApiRequest, NextApiResponse } from 'next';

interface VerifiedJwtPayload extends JwtPayload {
    email: string;
}
interface ExtendedNextApiRequest extends NextApiRequest {
    token?: string;
    user?: any; 
    userID?: string;
}

const authMiddleware = async (req: ExtendedNextApiRequest, res: NextApiResponse, next: () => void) => {
    const token = req.headers.authorization;

    if (!token) {
        return res
            .status(401)
            .json({ message: "Unauthorized HTTP, Token not provided" });
    }

    console.log("token middleware", token);

    // Remove "Bearer " from token
    const jwtToken = token.replace("Bearer ", "");

    try {
        // Verifying the token
        const isVerified = jwt.verify(jwtToken, process.env.SECRET_KEY!) as (VerifiedJwtPayload | void);

        // Check if verification failed
        if (!isVerified || !('email' in isVerified)) {
            return res.status(401).json({ message: "Unauthorized. Invalid token." });
        }

        // Getting the complete user details & also we don't want password to be sent
        const userData = await User.findOne({ email: isVerified.email }).select({
            password: 0,
        });

        if (!userData) {
            return res.status(401).json({ message: "Unauthorized. User not found." });
        }

        req.token = token;
        req.user = userData;
        req.userID = userData._id;

        next();
    } catch (error) {
        console.error("Error verifying token:", error);
        return res.status(401).json({ message: "Unauthorized. Invalid token." });
    }
};

export default authMiddleware;
