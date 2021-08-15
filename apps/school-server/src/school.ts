import { AggregateRoot } from '@nestjs/cqrs';
import { OpenSchoolEvent } from './school-server.event';

export class School extends AggregateRoot {
  constructor(public name: string, public status: number) {
    super();
  }

  Open() {
    this.apply(new OpenSchoolEvent(this.name));
  }
}
