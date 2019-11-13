/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80013
Source Host           : localhost:3306
Source Database       : crud_db

Target Server Type    : MYSQL
Target Server Version : 80013
File Encoding         : 65001

Date: 2019-11-13 15:34:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(200) DEFAULT NULL,
  `product_price` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', 'Product 1', '20000', null, null);
INSERT INTO `product` VALUES ('2', 'Product 2', '2000600000', null, null);
INSERT INTO `product` VALUES ('3', 'Product 3', '3000', null, null);
INSERT INTO `product` VALUES ('4', 'Product 4', '2000', null, null);
INSERT INTO `product` VALUES ('5', 'Product 5', '1500', null, null);
INSERT INTO `product` VALUES ('6', '4444', '30000', null, null);
INSERT INTO `product` VALUES ('7', '6666', '66666', null, null);
INSERT INTO `product` VALUES ('8', '666', '6666', null, null);
INSERT INTO `product` VALUES ('9', 'aasdas', '9000', null, null);
