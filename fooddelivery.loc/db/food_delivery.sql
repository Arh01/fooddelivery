-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июл 25 2022 г., 05:30
-- Версия сервера: 10.4.24-MariaDB
-- Версия PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `food_delivery`
--

-- --------------------------------------------------------

--
-- Структура таблицы `food`
--

CREATE TABLE `food` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `food`
--

INSERT INTO `food` (`id`, `title`, `shop_id`, `image`, `price`) VALUES
(1, 'Big Mac', 1, 'img/McDonalds/BigMac.jpg', 100),
(2, 'Big Tasty', 1, 'img/McDonalds/BigTasty.jpg', 80),
(3, 'Cheeseburger', 1, 'img/McDonalds/Cheeseburger.jpg', 45),
(4, 'Bacet Duet Original', 2, 'img/KFC/BacetDuetOrig.png', 255),
(5, 'Chicken 4 pieces', 2, 'img/KFC/Chicken4.jpg', 120),
(6, 'Strips Original', 2, 'img/KFC/StripsOrig.jpg', 160),
(7, 'Bacon BBQ panini', 3, 'img/PaniniGrill/bacon_bbq.png', 38),
(8, 'Chicken panini', 3, 'img/PaniniGrill/kurka.png', 38),
(9, 'Chicken brie panini', 3, 'img/PaniniGrill/kurka_brie.png', 38),
(10, 'Pizza gurmeo', 4, 'img/Mafia/gurmeo.jpg', 229),
(11, 'Pizza karbonara', 4, 'img/Mafia/karbonara.jpg', 239),
(12, 'Pizza margarita', 4, 'img/Mafia/margarita.jpg', 149),
(13, 'Pizza Manhatten', 5, 'img/Dominos/Manhatten.jpg', 215),
(14, 'Pizza Pepperoni', 5, 'img/Dominos/Pepperoni.jpg', 250),
(15, 'Pizza Tehas', 5, 'img/Dominos/Tehas.jpg', 215);

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `user_order` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `shops`
--

CREATE TABLE `shops` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `shops`
--

INSERT INTO `shops` (`id`, `title`) VALUES
(1, 'McDonny'),
(2, 'CFK'),
(3, 'Paninini Grill'),
(4, 'Mafiozy'),
(5, 'Dominka Pizza');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `food`
--
ALTER TABLE `food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `shops`
--
ALTER TABLE `shops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
