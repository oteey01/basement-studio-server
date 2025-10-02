import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

const allowedOrigins = ["http://localhost:3001","http://localhost:3000", "https://basement-studio-client.vercel.app/"]
const port = process.env.PORT || 4000;
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
   app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });

  app.enableCors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like Postman or curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true); // ✅ allowed
      } else {
        callback(new Error("❌ CORS blocked: " + origin), false); // ❌ blocked
      }
    }, // React app URL
    credentials: true,              // if you’re sending cookies/auth
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });

  await app.listen(port);
}
bootstrap();
