-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 30, 2024 at 08:24 PM
-- Server version: 10.5.24-MariaDB-cll-lve
-- PHP Version: 8.1.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `littlefeetchildc_littlefeetDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `child_information`
--

CREATE TABLE `child_information` (
  `SerialNo` int(10) UNSIGNED NOT NULL,
  `ParentsName` varchar(100) NOT NULL,
  `Relationship` varchar(100) NOT NULL,
  `ChildsName` varchar(100) NOT NULL,
  `Dob` varchar(100) NOT NULL,
  `HoursPerDay` int(10) NOT NULL,
  `ContactNumber` int(25) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Comments` varchar(1000) NOT NULL,
  `ContactStatus` varchar(100) NOT NULL,
  `UpdatedBy` varchar(100) NOT NULL,
  `UpdatedTime` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `child_information`
--

INSERT INTO `child_information` (`SerialNo`, `ParentsName`, `Relationship`, `ChildsName`, `Dob`, `HoursPerDay`, `ContactNumber`, `Email`, `Comments`, `ContactStatus`, `UpdatedBy`, `UpdatedTime`) VALUES
(1, 'test', 'test', 'test', '0207-08-08', 5, 1234, 'test@test.com', 'Dummy test', '', 'Admin', 'test'),
(5, 'abcd', 'abcd', 'abcd', '2020-08-08', 5, 12312, 'abcd@test.com', 'Dummy test', '', 'Admin', 'test'),
(5, 'test', 'test', 'test', '2023-08-08', 5, 54321, 'test@test.com', 'Dummy test', '', 'Admin', 'test'),
(1, 'test', 'test', 'test', '0207-08-08', 5, 897789, 'test@test.com', 'Dummy test', '', 'Admin', 'test'),
(5, 'popup', 'test', 'test', '2020-02-02', 5, 7541321, 'test@tets.com', 'Dummy test', '', 'Admin', 'test'),
(5, 'Natasha', 'test', 'test', '2000-08-08', 5, 9786234, 'test@test.com', 'Dummy test', '', 'Admin', 'test'),
(5, 'Avind Lal', 'Father', 'AArav', '2023-09-13', 30, 21780017, 'avind@msn.com', 'Dummy test', '', 'Admin', 'test'),
(1, 'test', 'test', 'test', '1980-06-09', 5, 87234211, 'test@test.com', 'Dummy test', 'Pending', 'Admin', 'test'),
(1, 'test', 'test', 'test', '1980-06-09', 5, 87234234, 'test@test.com', 'Dummy test', 'Pending', 'Admin', 'test'),
(5, 'Rajesh', 'test', 'test', '2019-08-20', 5, 98712312, 'test@test.com', 'Dummy test', '', 'Admin', 'test'),
(5, 'Sammi', 'Mum', 'Maria Lynette Pelasio', '2022-10-19', 8, 212781986, 'samoeleoi@gmail.com', 'Dummy test', '', 'Admin', 'test'),
(5, 'natasha', 'mother', 'Morgan', '2016-09-29', 7, 275148621, 'natasha.arun1909@gmail.com', 'Dummy test', '', 'Admin', 'test'),
(5, 'popupmsh', 'test', 'test', '2020-09-09', 5, 987654321, 'test@test.com', 'Dummy test', '', 'Admin', 'test'),
(5, 'Simran', 'Mother', 'Jugraj', '2019-10-23', 6, 2108078882, 'simigrewal0017@gmail.com', 'Dummy test', '', 'Admin', 'test'),
(5, 'Rajesh', 'Father', 'Sharvika', '2019-08-20', 1, 2147483647, 'rajeshrajabe@gmail.com', 'Dummy test', '', 'Admin', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `contact_form`
--

CREATE TABLE `contact_form` (
  `SerialNo` int(10) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Comments` varchar(1000) NOT NULL,
  `Status` varchar(100) NOT NULL,
  `UpdatedBy` varchar(100) NOT NULL,
  `UpdatedTime` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` int(11) UNSIGNED NOT NULL,
  `memberid` varchar(30) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp(),
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `SerialNo` int(10) UNSIGNED NOT NULL,
  `UserName` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `UserType` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`SerialNo`, `UserName`, `Password`, `UserType`) VALUES
(1, 'Admin', 'Admin@123', 'Admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `child_information`
--
ALTER TABLE `child_information`
  ADD PRIMARY KEY (`ContactNumber`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`memberid`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
