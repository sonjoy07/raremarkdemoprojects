-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.36-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table airbnb.posts
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `guest` int(4) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `bedNumber` int(4) DEFAULT NULL,
  `bed` int(4) DEFAULT NULL,
  `description` text,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table airbnb.posts: ~3 rows (approximately)
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` (`id`, `title`, `country`, `city`, `comments`, `rating`, `type`, `price`, `guest`, `image`, `bedNumber`, `bed`, `description`, `user_id`) VALUES
	(1, 'asdf', 'asdf', NULL, NULL, NULL, NULL, 334, 3, NULL, 2, 33, 'asdfasfasdfasdf', 5),
	(2, 'asdf', 'asdf', NULL, NULL, NULL, NULL, 334, 3, NULL, 2, 33, 'asdfasfasdfasdf', 5),
	(3, 'asdf', 'asdf', NULL, NULL, NULL, NULL, 334, 3, NULL, 2, 33, 'asdfasfasdfasdf', 5);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;

-- Dumping structure for table airbnb.post_images
CREATE TABLE IF NOT EXISTS `post_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) DEFAULT '0',
  `images_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table airbnb.post_images: ~2 rows (approximately)
/*!40000 ALTER TABLE `post_images` DISABLE KEYS */;
INSERT INTO `post_images` (`id`, `post_id`, `images_name`) VALUES
	(1, 1, 'asdf.jpg'),
	(2, 1, 'asdfasdfa.jpg');
/*!40000 ALTER TABLE `post_images` ENABLE KEYS */;

-- Dumping structure for table airbnb.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `usertype` tinyint(1) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping data for table airbnb.users: ~5 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `username`, `password`, `usertype`, `avatar`) VALUES
	(1, 'asdf', 'asdf', 'adfs', '$2b$10$RDRkzDTmrMx32uRcRM0oiuzBZFIXe2rphT0rtmUL54DgiMJNWLKaS', 1, NULL),
	(2, 'asdf', 'asdf', 'asdf', '$2b$10$i8UyrGzJuvfu5lGnKzMXmuvS9IbQv3db4qbFB6bmPvK4c8dh7NbhO', 1, NULL),
	(3, 'asdf', 'asdf', 'asdf', '$2b$10$0n2Ag42k8QmAh6Okr6NW4OOcAvmdf/b49qHeCzM7KyMaTNT7ylfwC', 1, NULL),
	(4, 'asdf', 'asdf', 'asdf', '$2b$10$PvXfYkBngaNnnDCJtt6Km.U5IbWbpUPnSOJNBH1nQ4YmIabmiYPxm', 1, NULL),
	(5, 'sonjoy', 'biswas', 'sonjoy', '$2b$10$l3gENbPEwEEX1bBRFy7Y.eHxzma7zPOV/FVn6vKy2irpoJnNz2saO', 1, NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
