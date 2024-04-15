// arrayUtils.js

// Функция для нахождения суммы всех элементов массива
function sum(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}

// Функция для нахождения среднего значения элементов массива
function average(array) {
    if (array.length === 0) return NaN;
    return sum(array) / array.length;
}

// Экспортируем функции для использования в других файлах
module.exports = {
    sum,
    average
};
