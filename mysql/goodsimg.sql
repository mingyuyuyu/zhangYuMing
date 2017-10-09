/*
Navicat MySQL Data Transfer

Source Server         : zhangyuming
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-08 23:32:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodsimg
-- ----------------------------
DROP TABLE IF EXISTS `goodsimg`;
CREATE TABLE `goodsimg` (
  `id` int(5) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `1` varchar(255) DEFAULT NULL,
  `2` varchar(255) DEFAULT NULL,
  `3` varchar(255) DEFAULT NULL,
  `4` varchar(255) DEFAULT NULL,
  `5` varchar(255) DEFAULT NULL,
  `6` varchar(255) DEFAULT NULL,
  `7` varchar(255) DEFAULT NULL,
  `8` varchar(255) DEFAULT NULL,
  `9` varchar(255) DEFAULT NULL,
  `10` varchar(255) DEFAULT NULL,
  `11` varchar(255) DEFAULT NULL,
  `12` varchar(255) DEFAULT NULL,
  `13` varchar(255) DEFAULT NULL,
  `14` varchar(255) DEFAULT NULL,
  `15` varchar(255) DEFAULT NULL,
  `16` varchar(255) DEFAULT NULL,
  `17` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goodsimg
-- ----------------------------
INSERT INTO `goodsimg` VALUES ('00001', '../img/g1.jpg', '../img/g2.jpg', '../img/g3.jpg', '../img/g4.jpg', '../img/g5.jpg', '../img/g1big.jpg', '../img/g2big.jpg', '../img/g3big.jpg', '../img/g4big.jpg', '../img/g5big.jpg', '../img/j2.jpg', '../img/j3.jpg', '../img/j4.jpg', '../img/j5.jpg', '../img/j6.jpg', '../img/j7.jpg', '../img/j8.jpg');
