import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Author } from './author.entity';

@Entity()
export class Book {
  @PrimaryKey()
  id: number;
  @Property()
  title: string;

  @Property()
  publishedAge: number;

  @ManyToOne(() => Author)
  author: Author;

  constructor(author: Author) {
    this.author = author;
  }
}
