import { verifyToken } from "@clerk/backend";
import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import "dotenv/config"

export class AuthGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const authHeader = request.headers.authorization;
        if(!authHeader) {
            return false
        }
        const token = authHeader.replace("Bearer ", "")
        const payload = await verifyToken(token, {
            secretKey: process.env.CLERK_SECRET_KEY
        })
        if (payload) {
            request.user = payload.user
            return true
        }
        return false
        
    }
}