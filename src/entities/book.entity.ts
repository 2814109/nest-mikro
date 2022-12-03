import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { AuthorEntity } from './author.entity';

@Entity()
export class BookEntity {
  @PrimaryKey()
  id: number;
  @Property()
  title: string;

  @Property()
  publishedAge: number;

  @ManyToOne(() => AuthorEntity)
  author: AuthorEntity;

  constructor(author: AuthorEntity) {
    this.author = author;
  }
}
