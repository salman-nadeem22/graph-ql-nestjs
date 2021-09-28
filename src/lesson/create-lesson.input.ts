import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, Min } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @Min(1)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;
}
