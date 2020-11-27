-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2020 at 06:07 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `computer_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `subtype` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `brand`, `type`, `subtype`, `description`, `image`) VALUES
(1, 'MaxGreen', 4500, 'MaxGreen', 'casing', 'desktop', 'MaxGreen A361 RGB Mid Tower Case', 'maxgreen.jpg'),
(2, 'Antec  casing', 3000, 'Antec ', 'casing', 'Desktop', 'Antec NX110 Mid Tower Gaming Case\r\n', 'antec.jpg'),
(3, 'Antec  casing', 3000, 'Antec ', 'casing', 'Desktop', 'Antec NX120 Mid Tower Gaming Case', 'antec.jpg'),
(4, 'Gamdias casing', 3500, 'Gamdias ', 'casing', 'Desktop', 'Gamdias ARGUS E1 Mid Tower Case', 'gamdias.jpg'),
(5, 'Gamdias casing', 3500, 'Gamdias ', 'casing', 'Desktop', 'Gamdias ARGUS E2 Mid Tower Case', 'gamdias.jpg'),
(6, 'Gigabyte casing', 8000, 'Gigabyte ', 'casing', 'Desktop', 'Gigabyte Aorus C300 Gaming Casing', 'gigabyte.jpg'),
(8, 'Antec Power Supply', 9000, 'Antec ', 'Power Supply', 'Desktop', 'Antec High Current Gamer Gold Series 650 WATT Full Modular Power Supply', 'Antec_p.jpg'),
(9, 'Corsair Power Supply', 8000, 'Corsair ', 'Power Supply', 'Desktop', 'Corsair TX650M 650 Watt 80 Plus Gold Certified Semi-Modular Power Supply', 'corsair_p.jpg'),
(10, 'Intel Processor', 18000, 'Intel ', 'Processor', 'Desktop', 'Intel 10th Gen Core i5-10500 Processor', 'intel.jpg'),
(11, 'AMD Processor', 7000, 'AMD ', 'Processor', 'Desktop', 'AMD Ryzen 3 1300X Processor', 'amd.jpg'),
(12, 'Corsair CPU Cooler', 14000, 'Corsair ', 'CPU Cooler', 'Desktop', 'Corsair Hydro Series H115i RGB PLATINUM 280mm Liquid CPU Cooler', 'corsair_cpu_cooler.jpg'),
(13, 'Antec CPU Cooler', 3000, 'Antec ', 'CPU Cooler', 'Desktop', 'Antec A400 RGB CPU Cooler', 'antec_cpu_cooler.jpg'),
(14, 'ASUS AMD Motherboard', 9000, 'ASUS(AMD)', 'Motherboard', 'Desktop', 'ASUS PRIME B450M-A AMD mATX Motherboard', 'asus_m.jpg'),
(15, 'ASUS Intel Motherboard', 5500, 'ASUS(Intel)', 'Motherboard', 'Desktop', 'ASUS H81M-CS 4th Gen Intel Motherboard', 'asus_i_m.jpg'),
(16, 'MSI Intel Motherboard', 5000, 'MSI(Intel)', 'Motherboard', 'Desktop', 'MSI H81M-E33 Intel H81 Chipset Motherboard', 'msi_i_m.jpg'),
(17, 'MSI AMD Motherboard', 5700, 'MSI(AMD)', 'Motherboard', 'Desktop', 'MSI A320M-A Pro AMD Micro-ATX Motherboard', 'msi_amd_m.jpg'),
(18, 'Western Digital 1TB', 3700, 'Western Digital', 'HDD ', 'Desktop', 'Western Digital 1TB Blue Desktop HDD', 'wd_hdd.jpg'),
(19, 'Seagate 1TB', 3900, 'Seagate', 'HDD ', 'Desktop', 'Seagate Internal 1TB SATA Barracuda HDD', 's_hdd.jpg'),
(20, 'Western Digital BLUE SN550 250GB', 5500, 'Western Digital', 'SSD', 'Desktop', 'Western Digital BLUE SN550 250GB PCIe NVMe M.2 SSD', 'wd_ssd.jpg'),
(21, 'Seagate Barracuda Q1 240GB', 3500, 'Seagate ', 'SSD', 'Desktop', 'Seagate Barracuda Q1 240GB Internal SSD\r\n', 's_ssd.jpg'),
(22, 'Corsair RAM 4GB', 2200, 'Corsair ', 'RAM', 'Desktop', 'Corsair Vengeance LPX 4GB (1x4GB) DDR4 DRAM 2400MHz', 'corsair_d_ram.png'),
(23, 'G.Skill RAM 8GB', 3400, 'G.Skill', 'RAM', 'Desktop', 'G.Skill RIPJAWS-V 8GB DDR4 3200MHz Desktop RAM', 'gskill_d_ram.jpg'),
(24, 'Adata RAM 4GB', 2000, 'Adata', 'RAM', 'Laptop', 'Adata 4GB DDR4 2666MHz Laptop RAM', 'adata_l_ram.jpg'),
(25, 'Acer LED Monitor', 5500, 'Acer ', 'Monitor', 'Desktop', 'Acer AOPEN 20CH1Q 19.5 Inch LED Monitor', 'acer.jpg'),
(26, 'ASUS Gaming Monitor', 15500, 'ASUS', 'Monitor', 'Desktop', 'ASUS VP247H 23.5\" Full HD 1ms Low Blue Light Flicker Free Gaming Monitor', 'asus.jpg'),
(27, 'Dell Full HD Monitor', 10000, 'Dell ', 'Monitor', 'Desktop', 'Dell SE2219HX 21.5\" LED Full HD Monitor', 'dell.png'),
(28, 'HP LED Backlight Monitor', 6000, 'HP ', 'Monitor', 'Desktop', 'HP V194 18.5 inch LED Backlight Monitor', 'hp.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id` int(100) NOT NULL,
  `p_id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `comment` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`id`, `p_id`, `name`, `comment`) VALUES
(1, 1, 'Nayeem', 'Good'),
(2, 1, 'Nayeem Ahmed', 'Good'),
(3, 1, 'Ahmed', 'good'),
(4, 1, 'sakib', 'good'),
(5, 1, 'Nayeem', 'good'),
(6, 1, 'Nayeem', 'good');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(50) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact_no` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `email`, `contact_no`, `type`) VALUES
(1, 'nayeem', '1234', 'nayeem@gmail.com', '01535865489', 'admin'),
(2, 'ahmed', '1234', 'ahmed@gmail.com', '12345678901', 'user'),
(5, 'ashik', '1234', 'ashik@gmail.com', '12345678901', 'user'),
(6, 'ahmed', '1234', 'nayeemr.45@gmail.com', '12345678901', 'user'),
(7, 'nayeem', '234', 'nayeemr.45@gmail.com', '015', ''),
(8, 'nayeem', '', 'nayeemr.45@gmail.com', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
