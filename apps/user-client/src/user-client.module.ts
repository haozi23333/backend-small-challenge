import { Module } from '@nestjs/common';
import { UserClientService } from './user-client.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import SchoolResolver from './school.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: [join(__dirname, './school.graphql')],
    }),
    ClientsModule.register([
      {
        name: 'SCHOOL_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'school',
          protoPath: join(__dirname, './school.proto'),
          url: '127.0.0.1:3002',
        },
      },
    ]),
  ],
  providers: [UserClientService, SchoolResolver],
})
export class UserClientModule {}
