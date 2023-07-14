import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PetService } from './pet.service';
import { Pet } from './pet.entity';
import { Createpetinput } from './dto/create.pet.dto';
import { Owner } from 'src/owner/entities/owner.entity';

@Resolver(() => Pet)
export class PetResolver {
  constructor(private petservice: PetService) {}

  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petservice.findAll();
  }
  @Mutation(() => Pet)
  createpet(@Args('createPetInput') createPetInput: Createpetinput) {
    return this.petservice.createnewpet(createPetInput);
  }

  @Query((id) => [Pet])
  findonepet(@Args('id', { type: () => Int }) id: number): Promise<Pet[]> {
    return this.petservice.getpet(id);
  }

  @ResolveField(() => [Owner])
  Owner(@Parent() pet: Pet): Promise<Owner[]> {
    return this.petservice.getowner(pet.ownerId);
  }
}
