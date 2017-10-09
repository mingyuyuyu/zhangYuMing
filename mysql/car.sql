/*
Navicat MySQL Data Transfer

Source Server         : zhangyuming
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-08 23:32:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(5) NOT NULL,
  `qty` int(11) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `weight` decimal(10,0) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `youhui` varchar(255) DEFAULT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`,`qty`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('2', '1', '../img/goods1.jpg', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', '2', '89', null, null);
INSERT INTO `car` VALUES ('2', '2', '../img/goods1.jpg', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', '2', '89', null, null);
INSERT INTO `car` VALUES ('4', '2', '../img/goods3.jpg', '法国皇家ROYAL CANIN 小型犬幼犬粮专用狗粮2kg MIJ31', '1', '145', null, null);
INSERT INTO `car` VALUES ('4', '3', '../img/goods3.jpg', '法国皇家ROYAL CANIN 小型犬幼犬粮专用狗粮2kg MIJ31', '1', '145', null, null);
INSERT INTO `car` VALUES ('4', '4', '../img/goods3.jpg', '法国皇家ROYAL CANIN 小型犬幼犬粮专用狗粮2kg MIJ31', '1', '145', null, null);
INSERT INTO `car` VALUES ('4', '5', '../img/goods3.jpg', '法国皇家ROYAL CANIN 小型犬幼犬粮专用狗粮2kg MIJ31', '1', '145', null, null);
INSERT INTO `car` VALUES ('4', '6', '../img/goods3.jpg', '法国皇家ROYAL CANIN 小型犬幼犬粮专用狗粮2kg MIJ31', '1', '145', null, null);
INSERT INTO `car` VALUES ('4', '7', '../img/goods3.jpg', '法国皇家ROYAL CANIN 小型犬幼犬粮专用狗粮2kg MIJ31', '1', '145', null, null);
INSERT INTO `car` VALUES ('3', '2', '../img/goods2.jpg', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', '1', '58', null, null);
INSERT INTO `car` VALUES ('7', '1', '../img/goods6.jpg', '宝路 中小型成犬粮牛肉肝蔬菜及谷物狗粮1.8kg', '1', '86', null, null);
INSERT INTO `car` VALUES ('6', '1', '../img/goods5.jpg', '法国皇家ROYAL CANIN 小型犬粮怀孕哺乳离乳奶糕 3kg MIS30', '1', '96', null, null);
INSERT INTO `car` VALUES ('3', '1', '../img/goods2.jpg', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', '1', '58', null, null);
INSERT INTO `car` VALUES ('8', '1', '../img/goods7.jpg', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', '1', '121', null, null);
INSERT INTO `car` VALUES ('4', '1', '../img/goods3.jpg', '法国皇家ROYAL CANIN 小型犬幼犬粮专用狗粮2kg MIJ31', '1', '145', null, null);
