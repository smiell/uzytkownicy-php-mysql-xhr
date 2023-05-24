-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 19 Maj 2023, 11:18
-- Wersja serwera: 10.4.14-MariaDB
-- Wersja PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `kluczkowski`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownicy`
--

CREATE TABLE `uzytkownicy` (
  `id` int(11) NOT NULL,
  `imie` text COLLATE utf8_polish_ci NOT NULL,
  `nazwisko` text COLLATE utf8_polish_ci NOT NULL,
  `nrTel` text COLLATE utf8_polish_ci NOT NULL,
  `pesel` text COLLATE utf8_polish_ci NOT NULL,
  `obywatelstwo` text COLLATE utf8_polish_ci NOT NULL,
  `rezydencjaPodakowa` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`id`, `imie`, `nazwisko`, `nrTel`, `pesel`, `obywatelstwo`, `rezydencjaPodakowa`) VALUES
(1, 'Jakub', 'Sujecki', '654356234', '04220309972', 'polskie', 'polska'),
(2, 'Miłosz', 'bednarek', '654356234', '04220309972', 'polskie', 'polska'),
(3, 'kacper', 'mazur', '2321q3', '2321q3', 'asdasd', ''),
(4, 'jan', 'blachowicz', '2321q3', '2321q3', 'asdasd', 'asdasd'),
(7, 'kacper', 'mazur', '2321q3', '2321q3', 'asdasd', ''),
(8, 'jan', 'blachowicz', '2321q3', '2321q3', 'asdasd', 'asdasd'),
(9, 'kacper', 'mazur', '2321q3', '2321q3', 'asdasd', ''),
(10, 'jan', 'blachowicz', '2321q3', '2321q3', 'asdasd', 'asdasd'),
(14, 'sds', 'asdasd', 'asdasd', 'asdasd', '', ''),
(15, 'asdads', '', '', '', '', ''),
(16, '', '', '', '', '', ''),
(17, '', '', '', '', '', '');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
