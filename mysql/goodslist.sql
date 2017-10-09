/*
Navicat MySQL Data Transfer

Source Server         : zhangyuming
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-08 23:31:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(5) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `zhidaoprice` decimal(10,2) DEFAULT NULL COMMENT '指导价',
  `yunfei` varchar(7) DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `huodong` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `sele` decimal(10,0) DEFAULT NULL,
  `pingjia` decimal(10,0) DEFAULT NULL,
  `global` varchar(255) DEFAULT NULL,
  `youhuo` varchar(255) DEFAULT NULL,
  `add_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `quan` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '是否支持优惠券',
  `pingpai` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `weight` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('00001', '../img/goods18.jpg', '125.00', '138.22', 'mian', '法国皇家ROYAL CANIN 小型犬离乳期奶糕1kg MIS30', '9.30-10.9 聚品牌 玛氏狂欢节 宝路系列满199减100', '2031', '5623', 'true', 'you', '2017-10-01 00:50:47', '支持使用优惠券', '皇家', '1.01');
INSERT INTO `goodslist` VALUES ('00002', '../img/goods1.jpg', '89.00', '98.50', 'mian', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', '9.30-10.9 聚品牌 玛氏狂欢节 宝路系列满199减100', '2031', '5623', 'true', 'you', '2017-10-01 00:59:16', '支持使用优惠券', '皇家', '1.52');
INSERT INTO `goodslist` VALUES ('00003', '../img/goods2.jpg', '58.00', '68.20', 'mian', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', null, '232', '523', 'true', 'you', '2017-10-01 00:59:16', '支持使用优惠券', '皇家', '1.25');
INSERT INTO `goodslist` VALUES ('00004', '../img/goods3.jpg', '145.00', '160.00', 'mian', '法国皇家ROYAL CANIN 小型犬幼犬粮专用狗粮2kg MIJ31', null, '2441', '5323', 'true', 'you', '2017-10-01 00:59:16', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00005', '../img/goods4.jpg', '75.00', '88.60', 'mian', '法国皇家ROYAL CANIN 小型犬粮怀孕哺乳离乳奶糕 3kg MIS30', null, '1231', '3213', 'true', 'you', '2017-10-01 00:59:16', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00006', '../img/goods5.jpg', '96.00', '105.00', 'mian', '法国皇家ROYAL CANIN 小型犬粮怀孕哺乳离乳奶糕 3kg MIS30', null, '2231', '5532', 'true', 'you', '2017-10-01 00:59:16', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00007', '../img/goods6.jpg', '86.00', '99.00', 'mian', '宝路 中小型成犬粮牛肉肝蔬菜及谷物狗粮1.8kg', null, '531', '444', 'true', 'you', '2017-10-01 00:59:16', '支持使用优惠券', '宝路', '1.04');
INSERT INTO `goodslist` VALUES ('00008', '../img/goods7.jpg', '121.00', '180.00', 'mian', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', null, '231', '521', 'true', 'you', '2017-10-01 00:59:16', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00009', '../img/goods8.jpg', '115.00', '130.00', null, '法国皇家ROYAL CANIN 贵宾幼犬粮专用狗粮3kg APD33', null, '2331', '5623', 'true', 'you', '2017-10-01 01:12:40', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00010', '../img/goods9.jpg', '32.00', '55.00', null, '法国皇家ROYAL CANIN 大型犬成犬粮15kg GR26', null, '211', '523', 'true', 'you', '2017-10-01 01:12:40', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00011', '../img/goods10.jpg', '99.00', '120.00', null, '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮8kg PR27', null, '231', '323', 'true', 'you', '2017-10-01 01:12:40', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00012', '../img/goods11.jpg', '177.00', '190.30', null, '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', null, '1881', '3253', 'true', 'you', '2017-10-01 01:12:40', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00013', '../img/goods12.jpg', '115.00', '120.00', 'mian', '法国皇家ROYAL CANIN 贵宾幼犬粮专用狗粮3kg APD33', null, '2331', '5623', null, 'you', '2017-10-01 01:15:30', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00014', '../img/goods13.jpg', '32.00', '48.00', 'mian', '法国皇家ROYAL CANIN 大型犬成犬粮15kg GR26', null, '211', '523', null, 'you', '2017-10-01 01:15:30', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00015', '../img/goods14.jpg', '99.00', '110.00', 'mian', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮8kg PR27', null, '231', '323', null, 'you', '2017-10-01 01:15:30', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00016', '../img/goods15.jpg', '177.00', '190.50', 'mian', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', null, '1881', '3253', null, 'you', '2017-10-01 01:15:30', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00017', '../img/goods16.jpg', '115.00', '130.00', 'mian', '法国皇家ROYAL CANIN 贵宾幼犬粮专用狗粮3kg APD33', null, '2331', '5623', 'true', null, '2017-10-01 01:18:33', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00018', '../img/goods17.jpg', '32.00', '45.00', 'mian', '法国皇家ROYAL CANIN 大型犬成犬粮15kg GR26', null, '211', '523', 'true', null, '2017-10-01 01:18:33', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00019', '../img/goods18.jpg', '99.00', '110.00', 'mian', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮8kg PR27', null, '2331', '323', 'true', null, '2017-10-01 01:18:33', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00020', '../img/goods19.jpg', '177.00', '186.00', 'mian', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', null, '12881', '3253', 'true', null, '2017-10-01 01:18:33', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00021', '../img/goods18.jpg', '99.00', '130.00', 'mian', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮8kg PR27', null, '2318', '323', 'true', null, '2017-10-01 01:18:33', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00022', '../img/goods19.jpg', '199.00', '210.00', 'mian', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', null, '18481', '33253', 'true', null, '2017-10-01 01:18:33', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00023', '../img/goods16.jpg', '155.00', '180.00', 'mian', '法国皇家ROYAL CANIN 贵宾幼犬粮专用狗粮3kg APD33', null, '2226', '5623', 'true', null, '2017-10-01 01:18:33', '支持使用优惠券', '皇家', '1.04');
INSERT INTO `goodslist` VALUES ('00024', '../img/goods17.jpg', '300.00', '310.00', 'mian', '法国皇家ROYAL CANIN 大型犬成犬粮15kg GR26', null, '2131', '5232', 'true', null, '2017-10-01 01:18:33', '支持使用优惠券', '皇家', '1.00');
