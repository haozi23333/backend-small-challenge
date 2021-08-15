import { School } from './school';

export default class SchoolRepository {
  private static list = [new School('学校1', 0), new School('学校2', 0)];

  findByName(schoolName: string) {
    return SchoolRepository.list.find((school) => school.name === schoolName);
  }

  openSchool(schoolName: string) {
    this.findByName(schoolName).status = 1;
  }
}
