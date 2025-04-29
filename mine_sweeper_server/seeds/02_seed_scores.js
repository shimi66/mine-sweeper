/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('scores').del()
  await knex('scores').insert([
    {user_id: 1, time: 49, difficulty: 'Easy'},
    {user_id: 1, time: 178, difficulty: 'Medium'},
    {user_id: 1, time: 0, difficulty: 'Hard'},
    {user_id: 2, time: 120, difficulty: 'Easy'},
    {user_id: 2, time: 200, difficulty: 'Medium'},
    {user_id: 2, time: 400, difficulty: 'Hard'},
    {user_id: 3, time: 150, difficulty: 'Easy'},
    {user_id: 3, time: 250, difficulty: 'Medium'},
    {user_id: 3, time: 300, difficulty: 'Hard'}
  ]);
};
