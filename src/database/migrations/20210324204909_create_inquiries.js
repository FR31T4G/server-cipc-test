
exports.up = function(knex) {
  return knex.schema.createTable('inquiries',function(table){
      table.increments('cod_inq').primary();
      table.string('num_inq').notNullable();
      table.int('status').notNullable();
      table.string('num_in_justice_inq').notNullable();
      table.string('location_inq').notNullable();
      table.date('establis_date_inq').notNullable();
      table.int('acess_level_required').notNullable();

      table.int('bail_inq').notNullable();//sim-nao
      table.int('mat_learned_inq').notNullable();//sim-nao

      table.string('last_mov_date').notNullable();
      table.int('last_mov_reason').notNullable();
      table.int('last_mov_type').notNullable();
      table.int('last_mov_status').notNullable();
      table.string('last_mov_avara').notNullable();

      table.int('origin_inq').notNullable();
      table.string('prosecution_inq').notNullable();

      table.int('cod_user_create_inq').notNullable();
      table.int('cod_user_lastEdit_inq').notNullable();

      
      
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('inquiries');
};
