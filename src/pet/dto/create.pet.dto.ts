import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';
@InputType()
export class Createpetinput {
  @IsAlpha()
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field(() => Int)
  ownerId: number;
}
