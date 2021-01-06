/*
Navicat MySQL Data Transfer

Source Server         : 本地数据库
Source Server Version : 80020
Source Host           : localhost:3306
Source Database       : myblog

Target Server Type    : MYSQL
Target Server Version : 80020
File Encoding         : 65001

Date: 2021-01-06 20:40:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for blogs
-- ----------------------------
DROP TABLE IF EXISTS `blogs`;
CREATE TABLE `blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `createtime` bigint NOT NULL,
  `author` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blogs
-- ----------------------------
INSERT INTO `blogs` VALUES ('1', '张三的介绍', '张三张三你好棒', '1602291805391', '叶夜葉');
INSERT INTO `blogs` VALUES ('3', '刘备', '卖草鞋的刘备', '1602313355351', '叶夜葉');
INSERT INTO `blogs` VALUES ('4', '张飞', '卖猪肉的张飞', '1602313474463', '叶夜葉');
INSERT INTO `blogs` VALUES ('6', '吕布', '手拿方天画戟的吕奉先', '1602314968174', '叶夜葉');
INSERT INTO `blogs` VALUES ('7', '刘备', '卖草鞋的刘备', '1602315307162', '刘备字玄德');
INSERT INTO `blogs` VALUES ('8', '夏侯惇', '可以打辅助的夏侯元让', '1609913735660', '叶夜葉');
INSERT INTO `blogs` VALUES ('9', '曹操', '会写诗的曹操', '1609913828625', '叶夜葉');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `realname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('7', 'zhangsan', '123', '张三');
INSERT INTO `users` VALUES ('8', 'lisi1', '123', '李四1');
INSERT INTO `users` VALUES ('9', 'lisi2', '123', '李四2');
INSERT INTO `users` VALUES ('10', 'lisi3', '123', '李四3');
