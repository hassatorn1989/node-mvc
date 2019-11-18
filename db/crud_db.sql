/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : 127.0.0.1:3306
 Source Schema         : crud_db

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 18/11/2019 20:20:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `product_price` decimal(10, 0) NULL DEFAULT NULL,
  `createdAt` timestamp(0) NULL DEFAULT NULL,
  `updatedAt` timestamp(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`product_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (10, 'lb8hk', 2000, '2019-11-18 20:18:34', '2019-11-18 20:19:41');
INSERT INTO `product` VALUES (11, '33333', 444, '2019-11-18 20:18:44', '2019-11-18 20:18:44');
INSERT INTO `product` VALUES (12, 'สินค้า 1', 30000, '2019-11-18 20:18:56', '2019-11-18 20:18:56');

SET FOREIGN_KEY_CHECKS = 1;
