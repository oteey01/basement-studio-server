// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      // Extract the JWT from the Authorization header with the "Bearer" scheme
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Ensure the token has not expired
      ignoreExpiration: false,
      // Use the same secret key used to sign the token
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  // The validate method is called after the token is successfully verified
  async validate(payload: any) {
    // Return the payload, which Passport will attach to the request object (req.user)
    return { userId: payload.sub, email: payload.email };
  }
}
