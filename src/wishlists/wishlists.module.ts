import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishlistsService } from './wishlists.service';
import { WishlistsController } from './wishlists.controller';
import { WishList } from './entities/wishlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WishList])],
  exports: [WishlistsService],
  controllers: [WishlistsController],
  providers: [WishlistsService],
})
export class WishlistsModule {}
