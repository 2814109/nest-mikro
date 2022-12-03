import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { BookEntity } from './book.entity';

@Entity()
export class AuthorEntity {
  @PrimaryKey()
  id: number;

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @OneToMany(() => BookEntity, (book) => book.author)
  books = new Collection<BookEntity>(this);
}
