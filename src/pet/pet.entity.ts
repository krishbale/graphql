import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Owner } from 'src/owner/entities/owner.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  ownerId: number;

  @ManyToOne(() => Owner, (owner) => owner.pets, { nullable: true })
  @Field(() => Owner, { nullable: true })
  owner?: Owner[];
}
