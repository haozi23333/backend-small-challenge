import { Injectable, OnModuleInit } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import OpenSchoolCommand from './school-server.command';
import { GetSchoolStatusQuery } from './school-server.query';

@Injectable()
export class SchoolServerService {
  constructor(
    private commandBus: CommandBus,
    private queryQueryBus: QueryBus,
  ) {}

  async OpenSchool(schoolName: string) {
    return this.commandBus.execute(new OpenSchoolCommand(schoolName));
  }

  async GetSchool(schoolName: string) {
    return this.queryQueryBus.execute(new GetSchoolStatusQuery(schoolName));
  }
}
