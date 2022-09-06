import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishesService } from './wishes.service';
import { WishesController } from './wishes.controller';
import { Wish } from './entities/wish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wish])],
  exports: [WishesService],
  controllers: [WishesController],
  providers: [WishesService],
})
export class WishesModule {}
