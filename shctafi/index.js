import express from 'express';
import pg from 'pg';
import cors from 'cors';
import multer from 'multer'; // Импортируйте Multer

const app = express();
const port = 5000;

// Настройка подключения к базе данных PostgreSQL
const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ZAWORLD',
    password: '123123',
    port: 5432,
});

// Настройка хранилища файлов Multer
const storage = multer.memoryStorage(); // В этом примере файлы хранятся в памяти

const upload = multer({ storage: storage });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Обработка POST-запроса для загрузки файла
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        // Получение файла из объекта запроса
        const file = req.file;

        // Здесь можно выполнить дополнительную обработку файла, например, сохранить его в базу данных

        res.json({ message: 'File uploaded successfully', file: file });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
