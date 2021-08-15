import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import SchoolRepository from './schoolList';

export class GetSchoolStatusQuery {
  constructor(public name: string) {}
}

@QueryHandler(GetSchoolStatusQuery)
export class GetSchoolStatusQueryHandler
  implements IQueryHandler<GetSchoolStatusQuery>
{
  private schoolRepository: SchoolRepository = new SchoolRepository();

  async execute(query: GetSchoolStatusQuery) {
    return this.schoolRepository.findByName(query.name);
  }
}
