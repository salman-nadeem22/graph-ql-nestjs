import { CreateLessonInput } from './create-lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query(() => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query(() => [LessonType])
  getAllLesson() {
    return this.lessonService.getAllLesson();
  }

  @Mutation(() => LessonType)
  async createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }
}
