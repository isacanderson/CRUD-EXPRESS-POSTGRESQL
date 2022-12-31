const pool = require('../database');

// GET all users
const getUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

// GET a single user by ID
const getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        if (result.rowCount === 0){
            res.status(404).json({message: 'Usuario no encontrado'});
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

// POST a new user
const createUser = async (req, res) => {
    try {
        const {nombres, usuario, correo, password} = req.body;
        const result = await pool.query('INSERT INTO users (nombres, usuario, correo, password) VALUES ($1, $2, $3, $4) RETURNING *', [nombres, usuario, correo, password]);

        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

// PUT updated data in an existing user
const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombres, usuario, correo, password} = req.body;
        const result = await pool.query('UPDATE users SET nombres = $2, usuario = $3, correo = $4, password = $5 WHERE id = $1 RETURNING *', [id, nombres, usuario, correo, password]);
        if (result.rowCount === 0){
            res.status(404).json({message: 'Usuario no encontrado'});
        }
        res.status(200).json(result.rows[0])
    } catch (error) {
        res.status(400).json(error.message);
    }
}

// DELETE a user
const deleteUser = async (req, res) => {
        try {
            const {id} = req.params;
            const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
            if (result.rowCount === 0){
                res.status(404).json({message: 'Usuario no encontrado'});
            }
            res.sendStatus(204);
        } catch (error) {
            res.status(400).json(error.message);
        }
}

// Exporting CRUD functions in a REST API
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}