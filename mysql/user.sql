/*
Navicat MySQL Data Transfer

Source Server         : zhangyuming
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-08 23:33:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `phone` decimal(11,0) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`phone`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('13432874850', '06e7e7ffd87ea4c1298ae08244a0d009', 'mingzi');
INSERT INTO `user` VALUES ('13212345687', 'e10adc3949ba59abbe56e057f20f883e', 'jj');
