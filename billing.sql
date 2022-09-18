-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2022 at 03:02 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `billing`
--

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` int(50) NOT NULL,
  `offer` int(3) NOT NULL,
  `description` varchar(500) NOT NULL,
  `code` varchar(6) NOT NULL,
  `email` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `coupons`
--

INSERT INTO `coupons` (`id`, `offer`, `description`, `code`, `email`) VALUES
(1, 75, 'This is a coupon for testing', 'EZ56HM', 'darpan@gmail.com'),
(2, 50, 'this is a second coupon', 'ABCDEF', 'darpan@gmail.com'),
(10, 39, 'This is a dummy coupon', 'KGOXHO', 'darpan.bahadur.2001@gmail.com'),
(11, 1, 'This is a dummy coupon', 'MWNBPZ', ''),
(12, 31, 'This is a dummy coupon', 'LKOLYI', ''),
(13, 2, 'This is a dummy coupon', 'DXDEBI', 'darpan.bahadur.2001@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customerName` varchar(50) NOT NULL,
  `customerEmail` varchar(100) NOT NULL,
  `Amount` int(100) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Date` date NOT NULL DEFAULT current_timestamp(),
  `id` int(11) NOT NULL,
  `customerMobile` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customerName`, `customerEmail`, `Amount`, `Address`, `Date`, `id`, `customerMobile`) VALUES
('Darpan Bahadur', 'darpan.bahadur.2001@gmail.com', 34000, 'This is my address', '2022-09-18', 14, 2147483647),
('Darpan Bahadur', 'darpan.bahadur.2001@gmail.com', 17000, 'darpan', '2022-09-17', 17, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `number` int(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` varchar(500) NOT NULL DEFAULT 'No Description',
  `image` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`number`, `name`, `price`, `quantity`, `image`) VALUES
(2001, 'Xiomi TV', 200000, 'Nos.', 'https://www.powerplanetonline.com/cdnassets/xiaomi_mi_tv_q1e_55_qled_4k_ultrahd_smart_tv_android_os_01_l.jpg'),
(1977, 'Mi Phone', 17000, 'Nos.', 'https://i05.appmifile.com/172_operator_uk/15/08/2022/3e376100b7d7eec85964ca9cbe215e08.png'),
(1977367748, 'POCO X3', 15500, 'This is a xiomi product', 'https://i01.appmifile.com/webfile/globalimg/zhouyuxin/J20C-Blue-800!800x800!85.png'),
(10293884, 'Realme Speakers', 4000, 'This is a speaker with extra bass', 'https://image01.realme.net/general/20210903/1630653224609.png'),
(374347576, 'Boat Watch', 2001, 'this is a boat product', 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8f01d1e9-48f4-4e55-886d-0b255b9bbf24_600x.png?v=1625045855'),
(463247657, 'MSI Laptop', 85000, 'this is a msi laptop', 'https://asset.msi.com/resize/image/global/product/product_1652084089f186edc14f9d018b77a37b5aee4f5a5a.png62405b38c58fe0f07fcef2367d8a9ba1/400.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(50) NOT NULL,
  `email` varchar(200) NOT NULL,
  `title` varchar(30) NOT NULL DEFAULT 'customer'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `title`) VALUES
(1, 'darpan@gmail.com', 'manager'),
(2, 'darpanhh11819@gmail.com', 'seller'),
(9, 'bahadur@gmail.com', 'customer'),
(10, 'darpan.bahadur.2001@gmail.com', 'customer'),
(11, 'darpan.bahadur.2001@gmail.com', 'customer'),
(12, '', 'customer'),
(13, '', 'customer'),
(14, '', 'customer'),
(15, '', 'customer'),
(16, '', 'customer'),
(17, '', 'customer'),
(18, '', 'customer'),
(19, '', 'customer'),
(20, '', 'customer'),
(21, '', 'customer'),
(22, 'darpan.bahadur.2001@gmail.com', 'customer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
