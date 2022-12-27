import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private repository: Repository<PostEntity>,
  ) {}

  create(dto: CreatePostDto) {
    // @ts-ignore
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: any) {
    const find = await this.repository.findOne(+id);

    if (!find) {
      throw new NotFoundException('Статья не найдена');
    }

    return find;
  }

  async update(id: number, dto: UpdatePostDto) {
    const find = await this.repository.findOne(+id);

    if (!find) {
      throw new NotFoundException('Статья не найдена');
    }
    // @ts-ignore
    return this.repository.update(id, dto);
  }

  async remove(id: number) {
    const find = await this.repository.findOne(+id);

    if (!find) {
      throw new NotFoundException('Статья не найдена');
    }
    return this.repository.delete(id);
  }
}
