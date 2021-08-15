import { LessonType } from './lesson.type';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver(() => LessonType)
export class LessonResolver {
  @Query(() => LessonType)
  lesson() {
    return {
      id: 'id',
      name: 'english',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
