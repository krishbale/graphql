import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from 'src/pet/pet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Pet, (pet) => pet.owner, { nullable: true })
  @Field(() => [Pet], { nullable: true })
  pets?: Pet[];
}
