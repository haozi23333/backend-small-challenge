import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import SchoolModel from './school.model';
import { Observable } from 'rxjs';
import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

export interface SchoolServerService {
  closeSchool(payload: {
    name: string;
  }): Observable<{ name: string; status: number }>;
  openSchool(payload: {
    name: string;
  }): Observable<{ name: string; status: number }>;
  schoolStatus(payload: {
    name: string;
  }): Observable<{ name: string; status: number }>;
}

@Resolver('School')
export default class SchoolResolver implements OnModuleInit {
  private schoolService: SchoolServerService;

  @Inject('SCHOOL_PACKAGE')
  private readonly client: ClientGrpc;

  onModuleInit(): any {
    this.schoolService =
      this.client.getService<SchoolServerService>('SchoolService');
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  @Query(() => SchoolModel)
  async school(@Args('name', { type: () => String }) name: string) {
    console.log(name);
    return this.schoolService.schoolStatus({
      name,
    });
  }

  @Mutation(() => SchoolModel)
  async openSchool(@Args('name', { type: () => String }) name: string) {
    return this.schoolService.openSchool({ name });
  }
}
