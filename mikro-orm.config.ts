import { BookEntity } from './src/entities/book.entity';
import { AuthorEntity } from './src/entities/author.entity';
export default {
  entities: [BookEntity, AuthorEntity], // no need for `entitiesTs` this way
  dbName: 'postgres',
  type: 'postgresql', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
  password: 'postgres',
};
