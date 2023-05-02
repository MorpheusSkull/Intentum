const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
require('dotenv').config({ path: './config/.env' });

const dbConfig = {
    host: 'localhost', // Ou o endereço do servidor de banco de dados fornecido pelo Hostinger
    user: 'your_database_username', // Substitua pelo nome de usuário do banco de dados criado no Hostinger
    password: 'your_database_password', // Substitua pela senha do banco de dados criado no Hostinger
    database: 'your_database_name', // Substitua pelo nome do banco de dados criado no Hostinger
};

// 
//const dbConfig = {
//    host: process.env.DB_HOST,
//    user: process.env.DB_USER,
//    password: process.env.DB_PASSWORD,
//    database: process.env.DB_DATABASE,
//};

const pool = mysql.createPool(dbConfig);

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send('Preencha os campos nome de usuário e senha');
        }

        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM usuarios WHERE username = ?', [username]);

        if (rows.length === 0) {
            return res.status(401).send('Nome de usuário ou senha incorretos');
        }

        const user = rows[0];
        const passwordMatches = await bcrypt.compare(password, user.password);

        if (!passwordMatches) {
            return res.status(401).send('Nome de usuário ou senha incorretos');
        }

        res.status(200).send('Login bem-sucedido');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro interno do servidor');
    }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Verificar se o email já está cadastrado
      const [emailExists] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
      if (emailExists.length > 0) {
        res.status(400).send('O email já está em uso');
        return;
      }
  
      // Criptografar a senha
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Inserir o novo usuário no banco de dados
      await pool.query('INSERT INTO users (nome, username, email, telefone, password, categoria_inscricao) VALUES (NULL, NULL, ?, NULL, ?, NULL)', [email, hashedPassword]);
  
      res.status(201).json({ success: true, message: 'Usuário cadastrado com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: true, message: 'Erro ao cadastrar o usuário'});
    }
  });
  