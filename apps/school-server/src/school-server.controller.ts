import { Controller, Get } from '@nestjs/common';
import { SchoolServerService } from './school-server.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class SchoolServerController {
  constructor(private readonly schoolServerService: SchoolServerService) {}

  @GrpcMethod('SchoolService', 'OpenSchool')
  OpenSchool(data: { name: string }) {
    return this.schoolServerService.OpenSchool(data.name);
  }

  @GrpcMethod('SchoolService', 'SchoolStatus')
  SchoolStatus(data: { name: string }) {
    return this.schoolServerService.GetSchool(data.name);
  }
}
