const express = require('express');
const server = express()
const cors = require('cors');
const knex = require('knex');
const knex_config = require('../knexfile.js');
require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';
const db = knex(knex_config[environment])
server.use(express.json())
server.use(cors())


// TODO use query params to filter different requests to this endpoint
server.get('/scores', async (req, res) => {
    try {
        const query = await db('scores').select("*")

        if (query.length > 0) {
            res.status(200).json(query)
        } else {
            res.status(404).json({error: `No rows returned from query`})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

server.get('/users', async (req, res) => {
    const user_id = parseInt(req.query.user_id, 10);
    const user_name = req.query.user_name;
    if (!user_id || isNaN(user_id)) {
        if (typeof user_name != 'string' || user_name == '') {
            return res.status(400).json({error: 'Please provide the user id or username of the user making the request'})
        }
        else {
            try {
                const id_query = await db('users').select('id').where('username', user_name)
                if (id_query.length > 0) {
                    return res.status(200).json(id_query)
                } else {
                    return res.status(404).json({error: `Could not find user with usename: ${user_name}`})
                }
            } catch (error) {
                console.log(error)
                return res.status(500).json({error: 'Internal Server Error'})
            }
        }
    }

    try {
        const admin = await db('users').select('is_admin').where('id', user_id)

        if (admin.length == 0) {
            return res.status(404).json({error: `Could not find user with user id: ${user_id}`})
        }

        if (admin[0]) {
            const query = await db('users').select('*')
        } else {
            const query = await db('users').select('firstName', 'lastName')
        }
        res.status(200).json(query)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

server.post('/scores', async (req, res) => {
    const {user_id, time, difficulty} = req.body
    // TODO input check
    try {
        const insert_score = await db('scores').insert({user_id, time, difficulty}).returning('id')

        if (insert_score.length > 0) {
            res.status(201).json({message: `Successful insert of score. ID of insert is ${insert_score}`})
        }
        else {
            res.status(404).json({error: 'Error inserting score'})
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
})

module.exports = server