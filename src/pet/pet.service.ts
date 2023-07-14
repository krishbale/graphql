import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Createpetinput } from './dto/create.pet.dto';

@Injectable()
export class PetService {
  constructor(@InjectRepository(Pet) private petrepository: Repository<Pet>) {}

  createnewpet(createpetinput: Createpetinput) {
    const newpet = this.petrepository.create(createpetinput);
    return this.petrepository.save(newpet); //insert
  }

  findAll(): Promise<Pet[]> {
    return this.petrepository.find(); ///SELECT * FROM pet
  }

  getpet(id: number): Promise<Pet[]> {
    return this.petrepository.find({
      where: { id: id },
    }); //SELECT * FROM pet WHERE id = 1
  }
}
