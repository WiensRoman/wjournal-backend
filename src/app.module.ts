import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entities/user.entity';
import { PostModule } from './post/post.module';
import { PostEntity } from './post/entities/post.entity';
import { CommentModule } from './comment/comment.module';
import { CommentEntity } from './comment/entities/comment.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: 'postgres://wiensr:jYvOfy5Gk8oRxfOb1ZFdfotUcrQv23Ai@dpg-ciffrm59aq09mhn6rieg-a.frankfurt-postgres.render.com/wjournal',
      type: 'postgres',
      host: 'dpg-ciffrm59aq09mhn6rieg-a',
      port: 5432,
      username: 'wiensr',
      password: 'jYvOfy5Gk8oRxfOb1ZFdfotUcrQv23Ai',
      database: 'wjournal',
      entities: [UserEntity, PostEntity, CommentEntity],
      synchronize: true,
      ssl: true
    }),
    UserModule,
    PostModule,
    CommentModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
