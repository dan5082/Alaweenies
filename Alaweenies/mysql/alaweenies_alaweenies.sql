-- MySQL dump 10.16  Distrib 10.1.36-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: alaweenies_alaweenies
-- ------------------------------------------------------
-- Server version	10.1.36-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Coffees`
--

DROP TABLE IF EXISTS `Coffees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Coffees` (
  `CoffeeID` int(11) NOT NULL,
  `Name` varchar(256) NOT NULL,
  `PreparationTime` int(11) NOT NULL,
  `Description` varchar(256) NOT NULL,
  `Price` int(11) NOT NULL,
  PRIMARY KEY (`CoffeeID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Coffees`
--

LOCK TABLES `Coffees` WRITE;
/*!40000 ALTER TABLE `Coffees` DISABLE KEYS */;
/*!40000 ALTER TABLE `Coffees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Customers`
--

DROP TABLE IF EXISTS `Customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Customers` (
  `CustomerID` int(11) NOT NULL,
  `PhoneNumber` varchar(256) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `PasswordHash` varchar(256) NOT NULL,
  `FirstName` varchar(256) NOT NULL,
  `LastName` varchar(256) NOT NULL,
  `DOB` varchar(256) NOT NULL,
  `Address` varchar(256) NOT NULL,
  `FavoriteOrder` int(11) NOT NULL,
  `PreferredLocation` int(11) NOT NULL,
  `PreferredDriver` int(11) NOT NULL,
  `RewardPoints` int(11) NOT NULL,
  `CreditCardNum` varchar(256) NOT NULL,
  `CreditCardName` varchar(256) NOT NULL,
  `CreditCardExpDate` varchar(256) NOT NULL,
  `CCV` int(11) NOT NULL,
  PRIMARY KEY (`CustomerID`),
  KEY `fk_Customers_FavoriteOrder` (`FavoriteOrder`),
  CONSTRAINT `fk_Customers_FavoriteOrder` FOREIGN KEY (`FavoriteOrder`) REFERENCES `Orders` (`OrderID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customers`
--

LOCK TABLES `Customers` WRITE;
/*!40000 ALTER TABLE `Customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `Customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Drivers`
--

DROP TABLE IF EXISTS `Drivers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Drivers` (
  `DriverID` int(11) NOT NULL,
  `Name` varchar(256) NOT NULL,
  `PhoneNumber` varchar(256) NOT NULL,
  `CarMake` varchar(256) NOT NULL,
  `CarModel` varchar(256) NOT NULL,
  `CarYear` int(11) NOT NULL,
  `Restaurant` int(11) NOT NULL,
  PRIMARY KEY (`DriverID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Drivers`
--

LOCK TABLES `Drivers` WRITE;
/*!40000 ALTER TABLE `Drivers` DISABLE KEYS */;
/*!40000 ALTER TABLE `Drivers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HotDogs`
--

DROP TABLE IF EXISTS `HotDogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `HotDogs` (
  `HotDogID` int(11) NOT NULL,
  `Name` varchar(256) NOT NULL,
  `PreparationTime` int(11) NOT NULL,
  `Description` varchar(256) NOT NULL,
  `Price` int(11) NOT NULL,
  PRIMARY KEY (`HotDogID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HotDogs`
--

LOCK TABLES `HotDogs` WRITE;
/*!40000 ALTER TABLE `HotDogs` DISABLE KEYS */;
/*!40000 ALTER TABLE `HotDogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Locations`
--

DROP TABLE IF EXISTS `Locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Locations` (
  `LocationID` int(11) NOT NULL,
  `StreetNumber` int(11) NOT NULL,
  `StreetName` varchar(256) NOT NULL,
  `City` varchar(256) NOT NULL,
  `State` varchar(256) NOT NULL,
  `Zipcode` int(11) NOT NULL,
  PRIMARY KEY (`LocationID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Locations`
--

LOCK TABLES `Locations` WRITE;
/*!40000 ALTER TABLE `Locations` DISABLE KEYS */;
/*!40000 ALTER TABLE `Locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Orders` (
  `OrderID` int(11) NOT NULL,
  `OrderPrice` int(11) NOT NULL,
  `CustomerID` int(11) NOT NULL,
  `DriverID` int(11) NOT NULL,
  `RestaurantID` int(11) NOT NULL,
  PRIMARY KEY (`OrderID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders_Items`
--

DROP TABLE IF EXISTS `Orders_Items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Orders_Items` (
  `CustomerID` int(11) NOT NULL,
  `HotDogID` int(11) NOT NULL,
  `SideID` int(11) NOT NULL,
  `CoffeeID` int(11) NOT NULL,
  `OrderID` int(11) NOT NULL,
  PRIMARY KEY (`HotDogID`,`SideID`,`CoffeeID`,`OrderID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders_Items`
--

LOCK TABLES `Orders_Items` WRITE;
/*!40000 ALTER TABLE `Orders_Items` DISABLE KEYS */;
/*!40000 ALTER TABLE `Orders_Items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Restaurants`
--

DROP TABLE IF EXISTS `Restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Restaurants` (
  `RestaurantID` int(11) NOT NULL,
  `LocationID` int(11) NOT NULL,
  PRIMARY KEY (`RestaurantID`,`LocationID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Restaurants`
--

LOCK TABLES `Restaurants` WRITE;
/*!40000 ALTER TABLE `Restaurants` DISABLE KEYS */;
/*!40000 ALTER TABLE `Restaurants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sides`
--

DROP TABLE IF EXISTS `Sides`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Sides` (
  `SideID` int(11) NOT NULL,
  `Name` varchar(256) NOT NULL,
  `PreparationTime` int(11) NOT NULL,
  `Description` varchar(256) NOT NULL,
  `Price` int(11) NOT NULL,
  PRIMARY KEY (`SideID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sides`
--

LOCK TABLES `Sides` WRITE;
/*!40000 ALTER TABLE `Sides` DISABLE KEYS */;
/*!40000 ALTER TABLE `Sides` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'alaweenies_alaweenies'
--

--
-- Dumping routines for database 'alaweenies_alaweenies'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-04 11:12:37
