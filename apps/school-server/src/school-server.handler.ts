import {
  CommandHandler,
  EventPublisher,
  EventsHandler,
  ICommandHandler,
  IEventHandler,
} from '@nestjs/cqrs';
import OpenSchoolCommand from './school-server.command';
import SchoolRepository from './schoolList';
import { OpenSchoolEvent } from './school-server.event';

@CommandHandler(OpenSchoolCommand)
export default class OpenSchoolHandler
  implements ICommandHandler<OpenSchoolCommand>
{
  constructor(private publisher: EventPublisher) {}

  private schoolRepository: SchoolRepository = new SchoolRepository();

  public execute(command: OpenSchoolCommand): any {
    const { schoolName } = command;
    const school = this.publisher.mergeObjectContext(
      this.schoolRepository.findByName(schoolName),
    );
    school.Open();
    school.commit();
    return school;
  }
}

@EventsHandler(OpenSchoolEvent)
export class OpenSchoolEventHandler implements IEventHandler<OpenSchoolEvent> {
  private schoolRepository: SchoolRepository = new SchoolRepository();

  handle(event: OpenSchoolEvent) {
    console.log('异步event');
    this.schoolRepository.openSchool(event.schoolName);
  }
}
