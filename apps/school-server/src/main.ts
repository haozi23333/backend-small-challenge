import { NestFactory } from '@nestjs/core';
import { SchoolServerModule } from './school-server.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  console.log(join(__dirname, './school.proto'));
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SchoolServerModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'school',
        protoPath: join(__dirname, './school.proto'),
        url: '127.0.0.1:3002',
      },
    },
  );
  app.listen(() => {
    console.log('School Server 微服务启动成功');
  });
}
bootstrap();
