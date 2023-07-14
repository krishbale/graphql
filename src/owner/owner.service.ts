import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner) private ownerrepository: Repository<Owner>,
  ) {}
  create(createOwnerInput: CreateOwnerInput) {
    const newowner = this.ownerrepository.create(createOwnerInput);
    return this.ownerrepository.save(newowner); //insert
  }

  findAll() {
    return this.ownerrepository.find(); ///SELECT * FROM owner
  }

  findOne(id: number) {
    return this.ownerrepository.find({
      where: { id: id },
    }); //SELECT * FROM owner WHERE id = 1
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return this.ownerrepository.update(id, updateOwnerInput);
  }

  remove(id: number) {
    return this.ownerrepository.delete(id);
  }
}
