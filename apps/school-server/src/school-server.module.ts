import { Module } from '@nestjs/common';
import { SchoolServerController } from './school-server.controller';
import { SchoolServerService } from './school-server.service';
import { CqrsModule } from '@nestjs/cqrs';
import OpenSchoolHandler, {
  OpenSchoolEventHandler,
} from './school-server.handler';
import { GetSchoolStatusQueryHandler } from "./school-server.query";

const CommandHandlers = [OpenSchoolHandler];

const EventHandlers = [OpenSchoolEventHandler];

const QueriesHandlers = [GetSchoolStatusQueryHandler];

@Module({
  imports: [CqrsModule],
  controllers: [SchoolServerController],
  providers: [
    ...CommandHandlers,
    ...EventHandlers,
    ...QueriesHandlers,
    SchoolServerService,
  ],
})
export class SchoolServerModule {}
