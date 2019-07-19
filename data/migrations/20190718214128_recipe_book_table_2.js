
exports.up = function(knex) {
  knex('ingredients').update()
};

exports.down = function(knex) {
  
};
