import { Module } from '@nestjs/common';
import { LessonController } from './lesson.controller';
import { LessonResolver } from './lesson.resolver';

@Module({
  controllers: [LessonController],
  providers: [LessonResolver],
})
export class LessonModule {}
