import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { WishList } from './entities/wishlist.entity';

@Injectable()
export class WishlistsService {
  constructor(
    @InjectRepository(WishList)
    private WishListRepository: Repository<WishList>,
  ) {}

  async create(createWishListDto: CreateWishlistDto) {
    return this.WishListRepository.save(createWishListDto);
  }

  async findAll(): Promise<WishList[]> {
    return this.WishListRepository.find();
  }

  async findOne(id: number): Promise<WishList> {
    return this.WishListRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async find(options) {
    return this.WishListRepository.find({
      where: options,
    });
  }

  async update(
    id: number,
    updateWishListDto: UpdateWishlistDto,
  ): Promise<WishList> {
    await this.WishListRepository.update(id, updateWishListDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const WishList = await this.findOne(id);
    await this.WishListRepository.delete(id);
    return WishList;
  }
}
