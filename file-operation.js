// Импортируем модули fs и dotenv
const fs = require('fs');
const dotenv = require('dotenv');

// Загружаем переменные окружения из файла .env
dotenv.config();

// Получаем имя файла из переменной окружения
const filename = process.env.FILENAME;

// Создаем текстовый файл и записываем в него текст
fs.writeFileSync(filename, 'Это текст, записанный в файл.');

// Читаем содержимое файла и выводим его в консоль
const fileContent = fs.readFileSync(filename, 'utf8');
console.log('Содержимое файла:', fileContent);