import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Book } from './book.entity';

@Entity()
export class Author {
  @PrimaryKey()
  id: number;

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @OneToMany(() => Book, (book) => book.author)
  books = new Collection<Book>(this);
}
