import { NestFactory } from '@nestjs/core';
import { UserClientModule } from './user-client.module';

async function bootstrap() {
  const app = await NestFactory.create(UserClientModule);
  await app.listen(3001);
}
bootstrap();
