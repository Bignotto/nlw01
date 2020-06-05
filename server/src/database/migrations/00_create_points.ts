import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("points", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("telefone").notNullable();
    table.decimal("latitute").notNullable();
    table.decimal("longitude").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
    table.string("country").notNullable();
  });
}

export async function down(knex: Knex) {
  knex.schema.dropTable("points");
}
