/*
Navicat MySQL Data Transfer

Source Server         : zhangyuming
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-08 23:33:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for username
-- ----------------------------
DROP TABLE IF EXISTS `username`;
CREATE TABLE `username` (
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of username
-- ----------------------------
INSERT INTO `username` VALUES ('13432874850');
