"use strict";
const pool = require('../models/db');

async function getAllWins(user_id){
    console.log("Searching for $1 's Wins")

    let queryText = "SELECT * FROM total_wins WHERE user_id = $1";

    const result = await pool.query(queryText);
    return result;
}

async function getAllLosses(user_id){
    console.log("Searching for $1 's Losses")

    let queryText = "SELECT * FROM total_losses WHERE user_id = $1";

    const result = await pool.query(queryText);
    return result;
}