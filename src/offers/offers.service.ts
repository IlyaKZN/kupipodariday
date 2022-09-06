import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Offer } from './entities/offer.entity';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private offerRepository: Repository<Offer>,
  ) {}

  create(createOfferDto: CreateOfferDto) {
    return this.offerRepository.save(createOfferDto);
  }

  async findAll(): Promise<Offer[]> {
    return this.offerRepository.find();
  }

  async findOne(id: number): Promise<Offer> {
    return this.offerRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async find(options) {
    return this.offerRepository.find({
      where: options,
    });
  }

  async update(id: number, updateOfferDto: UpdateOfferDto): Promise<Offer> {
    await this.offerRepository.update(id, updateOfferDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const Offer = await this.findOne(id);
    await this.offerRepository.delete(id);
    return Offer;
  }
}
