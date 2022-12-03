import { Migration } from '@mikro-orm/migrations';

export class Migration20221203064658 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "author_entity" ("id" serial primary key, "first_name" varchar(255) not null, "last_name" varchar(255) not null);');

    this.addSql('create table "book_entity" ("id" serial primary key, "title" varchar(255) not null, "published_age" int not null, "author_id" int not null);');

    this.addSql('alter table "book_entity" add constraint "book_entity_author_id_foreign" foreign key ("author_id") references "author_entity" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "book_entity" drop constraint "book_entity_author_id_foreign";');

    this.addSql('drop table if exists "author_entity" cascade;');

    this.addSql('drop table if exists "book_entity" cascade;');
  }

}
