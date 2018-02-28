SET NAMES UTF8;
DROP DATABASE IF EXISTS sb;
CREATE DATABASE sb CHARSET=UTF8;
USE sb;
/*首页*/
CREATE TABLE sb_header(
hid INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(64) NOT NULL DEFAULT ''
);
INSERT INTO sb_header VALUES(1,"首页");
INSERT INTO sb_header VALUES(2,"欢迎光临");
INSERT INTO sb_header VALUES(3,"菜单展示");
INSERT INTO sb_header VALUES(4,"团队成员");
INSERT INTO sb_header VALUES(5,"厨师证书");
INSERT INTO sb_header VALUES(6,"联系我们");
INSERT INTO sb_header VALUES(7,"注册");
INSERT INTO sb_header VALUES(8,"登陆");
/*轮播*/
CREATE TABLE sb_index_nav(
nid INT PRIMARY KEY AUTO_INCREMENT,
 img varchar(128) NOT NULL DEFAULT '',
 title varchar(64) NOT NULL DEFAULT '',
 href varchar(128) NOT NULL DEFAULT ''
);
INSERT INTO sb_index_nav VALUES(1,"images/index/b1.jpg",'轮播1','');
INSERT INTO sb_index_nav VALUES(2,"images/index/b2.jpg",'轮播2','');
INSERT INTO sb_index_nav VALUES(3,"images/index/b3.jpg",'轮播3','');
INSERT INTO sb_index_nav VALUES(4,"images/index/b4.jpg",'轮播4','');


CREATE TABLE sb_imgs(
mid INT PRIMARY KEY AUTO_INCREMENT,
img  varchar(128) NOT NULL DEFAULT '',
title varchar(64) NOT NULL DEFAULT ''
);
INSERT INTO sb_imgs VALUES(1,"images/index/logo.png",'logo');
INSERT INTO sb_imgs VALUES(2,"images/index/about.jpg",'welcome');
INSERT INTO sb_imgs VALUES(3,"images/index/modal.jpg",'wb_small');
INSERT INTO sb_imgs VALUES(4,"images/hot/hot-header.png",'hot-header');
INSERT INTO sb_imgs VALUES(5,"images/hot/hot-left.jpg",'hot-left');
INSERT INTO sb_imgs VALUES(6,"images/hot/hot-right.jpg",'hot-right');
INSERT INTO sb_imgs VALUES(7,"images/hot/steak.jpg",'steak');
INSERT INTO sb_imgs VALUES(8,"images/hot/seaFoot.jpg",'seaFoot');
INSERT INTO sb_imgs VALUES(9,"images/menu/broad.png",'menu_bg1');
INSERT INTO sb_imgs VALUES(10,"images/menu/fl_09.jpg","menu_list_bg");
INSERT INTO sb_imgs VALUES(11,"images/index/rmcpbj.jpg","rmcpbj");
INSERT INTO sb_imgs VALUES(12,"images/index/talentconcept.jpg","talentconcept");
INSERT INTO sb_imgs VALUES(13,"images/index/tc_left.jpg","tc_left");
/*首页推荐*/
CREATE TABLE sb_index_hotDishes(
 hotid INT PRIMARY KEY AUTO_INCREMENT,
 href varchar(128) NOT NULL DEFAULT '',
 img varchar(128) NOT NULL DEFAULT '',
 img_name varchar(128) NOT NULL DEFAULT '',
 details text(256)
);
INSERT INTO sb_index_hotDishes VALUES(1,"menu.html#steak","images/hot/hot-left.jpg","images/hot/steak.jpg","时时乐选用优质澳洲进口谷饲牛肉为食材原料谷饲牛用谷物饲养达到一定天数，其肉质比草饲牛肉更鲜嫩多汁。时时乐牛排均未经腌制，最大限度保留了牛肉的原始风味，采用高温瞬间锁水的烤制方法，最大程度保留牛肉水分的同时去掉多余的油脂，保留了牛肉 鲜嫩多汁的口感，是牛肉爱好者不容错过的选择！");
INSERT INTO sb_index_hotDishes VALUES(2,"menu.html#seaFoot","images/hot/hot-right.jpg","images/hot/seaFoot.jpg","从天然深海中捕获后即刻配送，每咬一口、每次品尝，海鲜系列菜品都会为您带来时时乐的经典味道。不论是新鲜的三文鱼、烤鱼排、还是多汁的整只大虾，总有一款海鲜主菜适合您!");

/*菜单*/
/*欢迎访问*/
CREATE TABLE sb_menu_welcom(
wid INT PRIMARY KEY AUTO_INCREMENT,
img varchar(128) NOT NULL DEFAULT ''
);
INSERT INTO sb_menu_welcom VALUES(1,'images/menu/broad.png');
/*菜品种类*/
CREATE TABLE sb_menu_varity(
 varity_id INT PRIMARY KEY AUTO_INCREMENT,
 href varchar(128) NOT NULL DEFAULT '',
 name varchar(32) NOT NULL DEFAULT '',
 varity_name varchar(32) NOT NULL DEFAULT '',
 bg_img varchar(128) NOT NULL DEFAULT ''
);
INSERT INTO sb_menu_varity VALUES(1,"",'top','皇牌菜',"images/menu/fl_01.jpg");
INSERT INTO sb_menu_varity VALUES(2,"",'madeDish','拼盘组合',"images/menu/fl_02.jpg");
INSERT INTO sb_menu_varity VALUES(3,"",'steak','牛肉类',"images/menu/fl_03.jpg");
INSERT INTO sb_menu_varity VALUES(4,"",'seaFoot','海鲜类',"images/menu/fl_04.jpg");
INSERT INTO sb_menu_varity VALUES(5,"",'hamburger','汉堡',"images/menu/fl_05.jpg");
INSERT INTO sb_menu_varity VALUES(6,"",'pig','猪肉类',"images/menu/fl_06.jpg");
INSERT INTO sb_menu_varity VALUES(7,"",'chicken','鸡肉类',"images/menu/fl_07.jpg");
INSERT INTO sb_menu_varity VALUES(8,"",'childMeal','儿童餐',"images/menu/fl_08.jpg");
INSERT INTO sb_menu_varity VALUES(9,"",'drinkSweat','饮料-甜品',"images/menu/fl_09.jpg");

/*菜品*/
CREATE TABLE sb_menu_list(
 dish_id INT PRIMARY KEY AUTO_INCREMENT,
 varity_id INT ,
 img varchar(128) NOT NULL DEFAULT '',
 href varchar(128) NOT NULL DEFAULT '',
 dish_name varchar(32)NOT NULL DEFAULT '',
 price 	decimal(10,2) ,
 produce varchar(128) NOT NULL DEFAULT '',
 sold_count int(11) ,
 weight varchar(32) NOT NULL DEFAULT '',
 FOREIGN KEY(varity_id) REFERENCES sb_menu_varity(varity_id)
);
/*拼盘*/
INSERT INTO sb_menu_list VALUES(1,2,'images/menu/p_01.jpg','',"炭烧鸡排&amp;香烤罗非鱼",400,'鸡排，是现在小吃店里很流行的一种油炸类食品，香味可谓是十里飘香。呈米白色，上有“面包渣”似的小面团。里是鸡胸片成的肉片，须选上等淀粉将胸片肉与面渣相互结合，再过一遍纯豆油，变成“排”似的鸡胸肉。用铁板烧烤，大约5分钟左右即可熟，再将朝天椒榨成的油与风宁大酱做成的辣酱过一遍，辅以作料等，便成了外焦里嫩，香味可口的小派鸡排;香烤罗非鱼是一道简单的家常菜，主料是罗非鱼、洋葱、姜丝、老抽、生抽、白糖、白胡椒、绍酒、盐、迷迭香碎。',10,'200g');
INSERT INTO sb_menu_list VALUES(2,2,'images/menu/p_02.jpg','','美式乡村烤鸡&amp;烤猪肉排',380,'美式乡村烤鸡，是一道具有美式乡村风味的菜肴。主要原料有鸡肉、盐、味精等。制作者可依据自己的口味添加不同的调料制作各种口味的烤鸡。但烤鸡较为油腻，食用宜适量;烤猪肉排是由猪排等食材做出的一道菜品，口味是酱香。',10,'200g');
INSERT INTO sb_menu_list VALUES(3,2,'images/menu/p_03.jpg','','香辣烤鸡&amp;烤猪肉排',350,'香辣烤鸡具有浓厚的咸、香、辣气味，能够刺激食欲；辣度适中、柔和，能有效祛除鸡肉的腥味，并且伴有浓郁的咸香口感;可接受度广，辣味在口中持续时间较长，回味十足;烤猪肉排是由猪排等食材做出的一道菜品，口味是酱香。',10,'200g');
INSERT INTO sb_menu_list VALUES(4,2,'images/menu/p_04.jpg','','特制猪肋排&amp;炭烧鸡排',350,'特制猪肋排（BBQPorkSpareribs）由整块肋排经过时时乐独创的秘方腌制，而后进行烧烤。肋排外侧涂满浓稠的酱汁，入口咀嚼，肉质绵软不散;鸡排，是现在小吃店里很流行的一种油炸类食品，香味可谓是十里飘香。呈米白色，上有“面包渣”似的小面团。里是鸡胸片成的肉片，须选上等淀粉将胸片肉与面渣相互结合，再过一遍纯豆油，变成“排”似的鸡胸肉。用铁板烧烤，大约5分钟左右即可熟，再将朝天椒榨成的油与风宁大酱做成的辣酱过一遍，辅以作料等，便成了外焦里嫩，香味可口的小派鸡排。',10,'200g');
INSERT INTO sb_menu_list VALUES(5,2,'images/menu/p_05.jpg','',
	'特制猪肋排&amp;迷你牛肉汉堡',390,
	'特制猪肋排（BBQPorkSpareribs）由整块肋排经过时时乐独创的秘方腌制，而后进行烧烤。肋排外侧涂满浓稠的酱汁，入口咀嚼，肉质绵软不散;牛肉汉堡是一款快餐食物，制作原料主要有牛肉馅、洋葱、胡萝卜等。是现代西式快餐中的主要食物，食用方便、风味可口、营养全面。',
	10,'200g');
INSERT INTO sb_menu_list VALUES(6,2,'images/menu/p_06.jpg','','香辣烤鸡&amp;迷你牛肉汉堡',380,'香辣烤鸡具有浓厚的咸、香、辣气味，能够刺激食欲；辣度适中、柔和，能有效祛除鸡肉的腥味，并且伴有浓郁的咸香口感；可接受度广，辣味在口中持续时间较长，回味十足;牛肉汉堡是一款快餐食物，制作原料主要有牛肉馅、洋葱、胡萝卜等。是现代西式快餐中的主要食物，食用方便、风味可口、营养全面。',10,'200g');
INSERT INTO sb_menu_list VALUES(7,2,'images/menu/p_07.jpg','','西冷牛排&amp;烤虎虾',420,'西冷牛排（Sir loin)，主要是由上腰部的脊肉构成，西冷牛排按质量的不同又可分为小块西冷牛排（entrecte）和大块西冷牛排（sirloin steak）。事实上Sirloin是法语Sur（上）和Loin（柳肉）合成的词，即牛柳上方的肉。每份都在250—300克左右。西冷（Sir loin）即下腰肉，也被称为纽约客，因牛下腰部运动量较菲力沙朗多，故此部位肉质较粗一点;烤虎虾的做法步骤1. 从虾枪剪开去虾囊，从背部剖开成两半去虾线。2. 调适量柠檬汁，抹到虾肉上，再用盐抹虾肉3. 把蒜蓉剁成泥，用黄油，橄榄油调匀，均堆到虾肉上，锡纸盘刷少量的油，放入虾。4. 根据自己喜好，可以再加点奶酪5. 烤箱预热后，200度烤10分钟，出炉时撒黑胡椒。其中一定要在锡纸盘上刷油，因为会比较香。',10,'200g');
INSERT INTO sb_menu_list VALUES(8,2,'images/menu/p_08.jpg','','特制猪肋排&amp;烤虎虾',400,'特制猪肋排（BBQPorkSpareribs）由整块肋排经过时时乐独创的秘方腌制，而后进行烧烤。肋排外侧涂满浓稠的酱汁，入口咀嚼，肉质绵软不散;烤虎虾的做法步骤1. 从虾枪剪开去虾囊，从背部剖开成两半去虾线。2. 调适量柠檬汁，抹到虾肉上，再用盐抹虾肉3. 把蒜蓉剁成泥，用黄油，橄榄油调匀，均堆到虾肉上，锡纸盘刷少量的油，放入虾。4. 根据自己喜好，可以再加点奶酪5. 烤箱预热后，200度烤10分钟，出炉时撒黑胡椒。其中一定要在锡纸盘上刷油，因为会比较香。',10,'200g');
INSERT INTO sb_menu_list VALUES(9,2,'images/menu/p_09.jpg','','西冷牛排&amp;香辣烤鸡',300,'西冷牛排（Sir loin)，主要是由上腰部的脊肉构成，西冷牛排按质量的不同又可分为小块西冷牛排（entrecte）和大块西冷牛排（sirloin steak）。事实上Sirloin是法语Sur（上）和Loin（柳肉）合成的词，即牛柳上方的肉。每份都在250—300克左右。西冷（Sir loin）即下腰肉，也被称为纽约客，因牛下腰部运动量较菲力沙朗多，故此部位肉质较粗一点;香辣烤鸡具有浓厚的咸、香、辣气味，能够刺激食欲；辣度适中、柔和，能有效祛除鸡肉的腥味，并且伴有浓郁的咸香口感;可接受度广，辣味在口中持续时间较长，回味十足。',10,'200g');
INSERT INTO sb_menu_list VALUES(10,2,'images/menu/p_10.jpg','','挪威香烤三文鱼&amp;烤虎虾',200,'香烤三文鱼是一道美食，制作原料主要有三文鱼，黑胡椒粉，蒜蓉;烤虎虾的做法步骤1. 从虾枪剪开去虾囊，从背部剖开成两半去虾线。2. 调适量柠檬汁，抹到虾肉上，再用盐抹虾肉3. 把蒜蓉剁成泥，用黄油，橄榄油调匀，均堆到虾肉上，锡纸盘刷少量的油，放入虾。4. 根据自己喜好，可以再加点奶酪5. 烤箱预热后，200度烤10分钟，出炉时撒黑胡椒。其中一定要在锡纸盘上刷油，因为会比较香。',998,'200g');
INSERT INTO sb_menu_list VALUES(11,2,'images/menu/p_11.jpg','','菲力牛排&amp;烤虎虾',450,'菲力牛排四个字中的菲力，指的是牛里脊肉（beef tenderloin）。在澳洲，这块肉被称为“眼菲力”，在法国和英国被称为filet和fillet，中文音译菲力。菲力牛排就是用一定厚度的牛里脊肉做出的牛排;烤虎虾的做法步骤1. 从虾枪剪开去虾囊，从背部剖开成两半去虾线。2. 调适量柠檬汁，抹到虾肉上，再用盐抹虾肉3. 把蒜蓉剁成泥，用黄油，橄榄油调匀，均堆到虾肉上，锡纸盘刷少量的油，放入虾。4. 根据自己喜好，可以再加点奶酪5. 烤箱预热后，200度烤10分钟，出炉时撒黑胡椒。其中一定要在锡纸盘上刷油，因为会比较香。',10,'200g');
INSERT INTO sb_menu_list VALUES(12,2,'images/menu/p_12.jpg','','西冷牛排&amp;特制猪肋排',430,'西冷牛排（Sir loin)，主要是由上腰部的脊肉构成，西冷牛排按质量的不同又可分为小块西冷牛排（entrecte）和大块西冷牛排（sirloin steak）。事实上Sirloin是法语Sur（上）和Loin（柳肉）合成的词，即牛柳上方的肉。每份都在250—300克左右。西冷（Sir loin）即下腰肉，也被称为纽约客，因牛下腰部运动量较菲力沙朗多，故此部位肉质较粗一点;特制猪肋排（BBQPorkSpareribs）由整块肋排经过时时乐独创的秘方腌制，而后进行烧烤。肋排外侧涂满浓稠的酱汁，入口咀嚼，肉质绵软不散。',10,'200g');
/*牛肉类*/
INSERT INTO sb_menu_list VALUES(13,3,'images/menu/n_01.jpg','','德克萨斯牛排',210,'进口牛肉切成整片牛排，以高温岩盘瞬间加热牛排，锁住表面的汁水，让牛肉内部更柔嫩多汁。',1000,"300g");
INSERT INTO sb_menu_list VALUES(14,3,'images/menu/n_02.jpg','','纽约牛排',220,'纽约牛排，进口牛肉切成整片牛排，以高温岩盘瞬间加热牛排，锁住表面的汁水，让牛肉内部更柔嫩多汁。',990,"300g");
INSERT INTO sb_menu_list VALUES(15,3,'images/menu/n_03.jpg','','菲力牛排',230,'菲力牛排四个字中的菲力，指的是牛里脊肉（beef tenderloin）。在澳洲，这块肉被称为“眼菲力”，在法国和英国被称为filet和fillet，中文音译菲力。菲力牛排就是用一定厚度的牛里脊肉做出的牛排。',10,"235g");
INSERT INTO sb_menu_list VALUES(16,3,'images/menu/n_04.jpg','','西冷牛排',240,'西冷牛排（Sir loin)，主要是由上腰部的脊肉构成，西冷牛排按质量的不同又可分为小块西冷牛排（entrecte）和大块西冷牛排（sirloin steak）。事实上Sirloin是法语Sur（上）和Loin（柳肉）合成的词，即牛柳上方的肉。每份都在250—300克左右。西冷（Sir loin）即下腰肉，也被称为纽约客，因牛下腰部运动量较菲力沙朗多，故此部位肉质较粗一点。',10,"285g");
INSERT INTO sb_menu_list VALUES(17,3,'images/menu/n_05.jpg','','肋眼牛排',250,'肋眼牛排是以烤牛靠近胸部的肋肌精心烤制的菜肴。',10,"285g");
/*海鲜类*/
INSERT INTO sb_menu_list VALUES(18,4,'images/menu/s_01.jpg','','挪威香烤三文鱼',310,'香烤三文鱼是一道美食，制作原料主要有三文鱼，黑胡椒粉，蒜蓉。',10,"235g");
INSERT INTO sb_menu_list VALUES(19,4,'images/menu/s_02.jpg','','铁盘烤虎虾',320,'烤虎虾的做法步骤1. 从虾枪剪开去虾囊，从背部剖开成两半去虾线。2. 调适量柠檬汁，抹到虾肉上，再用盐抹虾肉3. 把蒜蓉剁成泥，用黄油，橄榄油调匀，均堆到虾肉上，锡纸盘刷少量的油，放入虾。4. 根据自己喜好，可以再加点奶酪5. 烤箱预热后，200度烤10分钟，出炉时撒黑胡椒。其中一定要在锡纸盘上刷油，因为会比较香。',10,"235g");
INSERT INTO sb_menu_list VALUES(20,4,'images/menu/s_03.jpg','','铁盘烤大虾',330,'蒜和海鲜的味道很搭，尤其是烤箱／烧烤类的，放了蒜粉提鲜去腥。花上10分钟，来份烧烤过过瘾。',10,"255g");
INSERT INTO sb_menu_list VALUES(21,4,'images/menu/s_04.jpg','','香烤罗非鱼',340,'香烤罗非鱼是一道简单的家常菜，主料是罗非鱼、洋葱、姜丝、老抽、生抽、白糖、白胡椒、绍酒、盐、迷迭香碎。',10,"235g");
INSERT INTO sb_menu_list VALUES(
22,4,'images/menu/s_05.jpg','','炸鱼配薯条',210,'炸鱼,薯条',10,"235g");
/*汉堡*/
INSERT INTO sb_menu_list VALUES(23,5,'images/menu/b_01.jpg','','至尊培根芝士汉堡',210,'原　料:面包1个、芝士片1片、培根2片、鸡蛋1个、火箭菜少许、盐1/4茶匙、现磨黑胡椒,特　色:最简易快手的汉堡，但是啃起来却也是别样的满足。用来做早餐，早午餐最好不过了，活力满满',10,"200g");
INSERT INTO sb_menu_list VALUES(24,5,'images/menu/b_02.jpg','','照烧牛肉汉堡',280,'原　料:黄油	面粉、糖、酵母、盐、鸡蛋、水、猪肉菜、芝士、照烧酱',10,"200g");
INSERT INTO sb_menu_list VALUES(25,5,'images/menu/b_03.jpg','','迷你牛肉汉堡',210,'分量小，牛肉',10,"150g");

/*猪肉类*/
INSERT INTO sb_menu_list VALUES(26,6,'images/menu/z_01.jpg','','特制猪肋排（整排）',310,'特制猪肋排（BBQPorkSpareribs）由整块肋排经过时时乐独创的秘方腌制，而后进行烧烤。肋排外侧涂满浓稠的酱汁，入口咀嚼，肉质绵软不散。',999,"300g");
INSERT INTO sb_menu_list VALUES(27,6,'images/menu/z_02.jpg','','烤猪肉排',210,'烤猪肉排是由猪排等食材做出的一道菜品，口味是酱香。',10,"300g");
INSERT INTO sb_menu_list VALUES(28,6,'images/menu/z_03.jpg','','特制猪肋排 （半排）',150,'特制猪肋排（BBQPorkSpareribs）由整块肋排经过时时乐独创的秘方腌制，而后进行烧烤。肋排外侧涂满浓稠的酱汁，入口咀嚼，肉质绵软不散。',10,"150g");
INSERT INTO sb_menu_list VALUES(29,6,'images/menu/z_04.jpg','','波士顿猪肉排',210,'猪肋排由整块肋排经过时时乐独创的秘方腌制，而后进行烧烤。肋排外侧涂满浓稠的酱汁，入口咀嚼，肉质绵软不散',10,"300g");
/*鸡肉类*/
INSERT INTO sb_menu_list VALUES(30,7,'images/menu/c_01.jpg','','美式乡村烤鸡',210,'美式乡村烤鸡，是一道具有美式乡村风味的菜肴。主要原料有鸡肉、盐、味精等。制作者可依据自己的口味添加不同的调料制作各种口味的烤鸡。但烤鸡较为油腻，食用宜适量',10,"200g");
INSERT INTO sb_menu_list VALUES(31,7,'images/menu/c_02.jpg','','黑椒香辣烤鸡',210,'烤鸡具有浓厚的咸、香、辣气味，能够刺激食欲；辣度适中、柔和，能有效祛除鸡肉的腥味，并且伴有浓郁的咸香口感;可接受度广，辣味在口中持续时间较长，回味十足',10,"200g");
INSERT INTO sb_menu_list VALUES(32,7,'images/menu/c_03.jpg','','炭烧鸡排',210,'烤鸡具有浓厚的咸、香、辣气味，能够刺激食欲；辣度适中、柔和，能有效祛除鸡肉的腥味，并且伴有浓郁的咸香口感;可接受度广，辣味在口中持续时间较长，回味十足',10,"200g");
INSERT INTO sb_menu_list VALUES(33,7,'images/menu/c_04.jpg','','香辣烤鸡',210,'香辣烤鸡具有浓厚的咸、香、辣气味，能够刺激食欲；辣度适中、柔和，能有效祛除鸡肉的腥味，并且伴有浓郁的咸香口感;可接受度广，辣味在口中持续时间较长，回味十足',10,"200g");
/*儿童餐*/
INSERT INTO sb_menu_list VALUES(34,8,'images/menu/child_01.jpg','','煮三文鱼配炒蛋',110,'煮三文鱼和炒蛋',10,"150g");
INSERT INTO sb_menu_list VALUES(35,8,'images/menu/child_02.jpg','','煮大虾配炒蛋',110,'煮大虾配炒蛋',10,"150g");
INSERT INTO sb_menu_list VALUES(36,8,'images/menu/child_03.jpg','','煮罗非鱼配黄油米饭',110,'煮罗非鱼配黄油米饭',10,"150g");
INSERT INTO sb_menu_list VALUES(37,8,'images/menu/child_04.jpg','','迷你汉堡&amp;薯条',110,'迷你汉堡&amp;薯条',10,"150g");
INSERT INTO sb_menu_list VALUES(38,8,'images/menu/child_05.jpg','','番茄牛肉丸配薯泥',110,'番茄牛肉丸配薯泥',10,"150g");
/*饮料-甜品*/
INSERT INTO sb_menu_list VALUES(39,9,'images/menu/drink_01.jpg','','混合红心火龙果菠萝',60,'混合红心火龙果菠萝',10,"150g");
INSERT INTO sb_menu_list VALUES(40,9,'images/menu/drink_02.jpg','','芒果酸奶',60,'芒果酸奶',10,"150g");
INSERT INTO sb_menu_list VALUES(41,9,'images/menu/drink_03.jpg','','泰国鲜椰青',60,'泰国鲜椰青',10,"150g");
INSERT INTO sb_menu_list VALUES(42,9,'images/menu/drink_04.jpg','','蔓越莓奶昔',60,'蔓越莓奶昔',10,"150g");
INSERT INTO sb_menu_list VALUES(43,9,'images/menu/drink_05.jpg','','芒果奶昔',60,'芒果奶昔',10,"150g");
INSERT INTO sb_menu_list VALUES(44,9,'images/menu/drink_06.jpg','','椰奶漂浮',60,'椰奶漂浮',10,"150g");
INSERT INTO sb_menu_list VALUES(45,9,'images/menu/drink_07.jpg','','可乐椰奶漂浮',60,'可乐椰奶漂浮',10,"150g");
INSERT INTO sb_menu_list VALUES(46,9,'images/menu/drink_08.jpg','','草莓莫西多',60,'草莓莫西多',10,"150g");
INSERT INTO sb_menu_list VALUES(47,9,'images/menu/drink_09.jpg','','蜜桃冰沙',60,'蜜桃冰沙',10,"150g");
INSERT INTO sb_menu_list VALUES(48,9,'images/menu/drink_10.jpg','','百香果莫西多',60,'百香果莫西多',10,"150g");
INSERT INTO sb_menu_list VALUES(49,9,'images/menu/drink_11.jpg','','蓝莓莫西多',60,'蓝莓莫西多',10,"150g");
INSERT INTO sb_menu_list VALUES(50,9,'images/menu/drink_12.jpg','','什锦莓果冰沙',60,'什锦莓果冰沙',10,"150g");
INSERT INTO sb_menu_list VALUES(51,9,'images/menu/drink_13.jpg','','桃乐丝公牛血红',60,'桃乐丝公牛血红',10,"150g");
INSERT INTO sb_menu_list VALUES(52,9,'images/menu/drink_13.jpg','','西班牙加泰罗尼亚',60,'西班牙加泰罗尼亚',10,"150g");
INSERT INTO sb_menu_list VALUES(53,9,'images/menu/drink_13.jpg','','德保利精选西拉赤霞珠红',60,'德保利精选西拉赤霞珠红',10,"150g");
INSERT INTO sb_menu_list VALUES(54,9,'images/menu/drink_13.jpg','','澳大利亚瑞福利纳',60,'澳大利亚瑞福利纳',10,"150g");
INSERT INTO sb_menu_list VALUES(55,9,'images/menu/drink_13.jpg','','罗斯柴尔德男爵长相思白',60,'罗斯柴尔德男爵长相思白',10,"150g");
INSERT INTO sb_menu_list VALUES(56,9,'images/menu/drink_13.jpg','','法国琅湖-鲁西荣',60,'法国琅湖-鲁西荣',10,"150g");
INSERT INTO sb_menu_list VALUES(57,9,'images/menu/drink_15.jpg','','卡布奇诺',60,'卡布奇诺',10,"150g");
INSERT INTO sb_menu_list VALUES(58,9,'images/menu/drink_15.jpg','','拿铁咖啡',60,'拿铁咖啡',10,"150g");
INSERT INTO sb_menu_list VALUES(59,9,'images/menu/drink_15.jpg','','摩卡咖啡',60,'摩卡咖啡',10,"150g");
INSERT INTO sb_menu_list VALUES(60,9,'images/menu/drink_15.jpg','','意式特浓咖啡',60,'意式特浓咖啡',10,"150g");
INSERT INTO sb_menu_list VALUES(61,9,'images/menu/drink_15.jpg','','美式咖啡',60,'美式咖啡',10,"150g");
INSERT INTO sb_menu_list VALUES(62,9,'images/menu/drink_15.jpg','','冰咖啡',60,'冰咖啡',10,"150g");
INSERT INTO sb_menu_list VALUES(63,9,'images/menu/drink_15.jpg','','冰咖啡',60,'冰咖啡',10,"150g");
INSERT INTO sb_menu_list VALUES(64,9,'images/menu/drink_15.jpg','','热巧克力',60,'热巧克力',10,"150g");
INSERT INTO sb_menu_list VALUES(65,9,'images/menu/drink_15.jpg','','牛奶',60,'牛奶',10,"150g");
INSERT INTO sb_menu_list VALUES(66,9,'images/menu/drink_15.jpg','','铁观音/普洱',60,'铁观音/普洱',10,"150g");
INSERT INTO sb_menu_list VALUES(67,9,'images/menu/drink_15.jpg','','龙井/乌龙',60,'龙井/乌龙/普洱',10,"150g");
INSERT INTO sb_menu_list VALUES(68,9,'images/menu/drink_15.jpg','','养生花茶',60,'养生花茶',10,"150g");
INSERT INTO sb_menu_list VALUES(69,9,'images/menu/drink_16.jpg','','喜力啤酒330ml',60,'喜力啤酒330ml',10,"150g");
INSERT INTO sb_menu_list VALUES(70,9,'images/menu/drink_16.jpg','','青岛啤酒330ml',60,'青岛啤酒330ml',10,"150g");
INSERT INTO sb_menu_list VALUES(71,9,'images/menu/drink_17.jpg','','芝士蛋糕',60,'芝士蛋糕',10,"150g");
INSERT INTO sb_menu_list VALUES(72,9,'images/menu/drink_17.jpg','','松露巧克力蛋糕',60,'松露巧克力蛋糕',10,"150g");
INSERT INTO sb_menu_list VALUES(73,9,'images/menu/drink_18.jpg','','泰国进口芝麻虾',60,'泰国进口芝麻虾',10,"150g");
INSERT INTO sb_menu_list VALUES(74,9,'images/menu/drink_19.jpg','','香辣鸡翅',60,'香辣鸡翅',10,"150g");

/*用户列表*/
DROP TABLE IF EXISTS `sb_user`;
CREATE TABLE `sb_user` (
  `uid` int(11) NOT NULL auto_increment PRIMARY KEY,
  `uname` varchar(32) NOT NULL DEFAULT '',
  `upwd` varchar(32) NOT NULL DEFAULT '',
  `email` varchar(64) NOT NULL DEFAULT '',
  `phone` varchar(16)NOT NULL DEFAULT '',
  `avatar` varchar(128) NOT NULL DEFAULT '',
  `user_name` varchar(32) NOT NULL DEFAULT '',
  `gender` int(11) default NULL
    ) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;
    INSERT INTO `sb_user` VALUES ('1', 'dingding', md5('123456'), 'ding@qq.com', '13511011000', 'img/avatar/default.png', '丁春秋', '0');
    INSERT INTO `sb_user` VALUES ('2', 'dangdang', md5('123456'), 'dang@qq.com', '13501234568', 'img/avatar/default.png', '当当喵', '1');
    INSERT INTO `sb_user` VALUES ('3', 'doudou', md5('123456'), 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1');
    INSERT INTO `sb_user` VALUES ('4', 'yaya', md5('123456'), 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');
    INSERT INTO `sb_user` VALUES ('5', '1111', md5('111111'), '441977193@qq.com', '18357100796','img/avatar/default.png', '丁春秋', '0');
    INSERT INTO `sb_user` VALUES ('6', 'ABCD',md5( '123456'), '123@qq.com', '13538894495', 'img/avatar/default.png', '丁春秋', '0');
    INSERT INTO `sb_user` VALUES ('7', 'mohk', md5('123456'), '11@qq.com', '13512312312','img/avatar/default.png', '丁春秋', '0');
    INSERT INTO `sb_user` VALUES ('8', '121123',md5( 'w13945128995'), '491000888@qq.com', '13213389258', 'img/avatar/default.png', '丁春秋', '0');
    INSERT INTO `sb_user` VALUES ('9', '555555', md5('5555555'), '55555555@163.com', '13400000000','img/avatar/default.png', '丁春秋', '0');
    INSERT INTO `sb_user` VALUES ('10', 'xuyong',md5( '123456'), '123456789@qq.com', '15525623622', 'img/avatar/default.png', '丁春秋', '0');
    INSERT INTO `sb_user` VALUES ('11', 'admin', md5('cxy930123'), 'mail@xingyu1993.cn', '13580510164', 'img/avatar/default.png', '丁春秋', '0');
    INSERT INTO `sb_user` VALUES ('12', 'siyongbo',md5( '900427'), '616188545@qq.com', '18447103998','img/avatar/default.png', '丁春秋', '0');
    INSERT INTO `sb_user` VALUES ('13', 'qwerty', md5('123456'), '1091256014@qq.com', '15617152367', 'img/avatar/default.png', '丁春秋', '0');
    INSERT INTO `sb_user` VALUES ('14', 'dingziqiang', md5('456456'), '996534706@qq.com', '15567502520','img/avatar/default.png', '丁春秋', '0');
    INSERT INTO `sb_user` VALUES ('15', 'hdb2264068', md5('huang123'), '471062503@qq.com', '18898405759', '', '','');
    INSERT INTO `sb_user` VALUES ('16', 'wenhua', md5('654321'), 'liwenhua@tedu.cn', '15012345678', '', '', '');
    INSERT INTO `sb_user` VALUES ('17', '<img>', md5('cxy930123'), 'mail@xingyu1993.cn.1', '11111111111', '', '', '');
    INSERT INTO `sb_user` VALUES ('18', '</body>',md5( 'cxy930123'), 'mail@xingyu1993.cn.2', '22222222222', '', '', '');
    INSERT INTO `sb_user` VALUES ('19', '<img src=@>',md5( 'cxy930123'), 'mail@xingyu1993.cn.3', '33333333333', '', '', '');
    INSERT INTO `sb_user` VALUES ('20', '气航航',md5( 'wyh961130'), '1419591926@qq.com', '15927204115', '', '', '');
    INSERT INTO `sb_user` VALUES ('21', 'Jessy', md5('ac210921'), '123456@qq.com', '13523456789', '', '', '');
    INSERT INTO `sb_user` VALUES ('22', 'yuanxf', md5('123456'), 'yuanxf@tedu.cn', '13537763301','', '', '');
    INSERT INTO `sb_user` VALUES ('23', '查安军',md5( '025520'), '27514172112@qq.com', '18158899905', '', '', '');
    INSERT INTO `sb_user` VALUES ('24', '123456',md5( '123456'), '123456@1.com', '13815668132', '', '', '');
    INSERT INTO `sb_user` VALUES ('25', '1234', md5('111111'), '734713428@qq.com', '18061920422', '', '', '');
    INSERT INTO `sb_user` VALUES ('26', 'qwe12345',md5( '123123'), '1191769510@qq.com', '15234010643', '', '', '');
    INSERT INTO `sb_user` VALUES ('27', '海贼王',md5( '5124457'), 'hxxcrocky@qq.com', '18826450879', '', '', '');
    INSERT INTO `sb_user` VALUES ('28', 'hanrufuyun00',md5( 'hanrufuyun11'), '458205630@qq.com', '13853114827', '', '', '');
    INSERT INTO `sb_user` VALUES ('29', 'li999999', md5('li999999'), 'limingdir@163.com', '18557512341', '', '', '');
    INSERT INTO `sb_user` VALUES ('30', '111111111111',md5( '123456'), '1057631733@qq.com', '15275106677','', '', '');
    INSERT INTO `sb_user` VALUES ('31', 'tom',md5( '123456'), 'tom@tedu.cn', '13801234568', '', '', '');
    INSERT INTO `sb_user` VALUES ('32', 'zhouzhi', md5('123456'), '2206344145@qq.com', '17600587478', '', '', '');
    INSERT INTO `sb_user` VALUES ('33', 'juleck', md5('123456'), 'wuhaofushan@sina.com', '12345678901','', '', '');
    INSERT INTO `sb_user` VALUES ('34', 'yangtao', md5('123456'), '250737026@qq.com', '18256953222', '', '', '');
    INSERT INTO `sb_user` VALUES ('35', 'tarena', md5('123456'), '783664829@qq.com', '17711625897', '', '', '');
    INSERT INTO `sb_user` VALUES ('36', 'xiaobai', md5('xx527603'), '1196465493@qq.com', '13980312111','', '', '');
    INSERT INTO `sb_user` VALUES ('37', '璐璐lu',md5( '546521ll'), '1273447080@qq.com', '15892761793', '', '', '');
    INSERT INTO `sb_user` VALUES ('38', '胖王二二',md5( 'woaidoubi1.'), '1179524522@qq.com', '13269195181','', '', '');
    INSERT INTO `sb_user` VALUES ('39', 'Yeye ', md5('123456'), '1610608370@qq.com', '15062394551', '', '', '');
    INSERT INTO `sb_user` VALUES ('40', 'lsj', md5('123456'), '11324564879@qq.com', '13156467891', '', '', '');
    INSERT INTO `sb_user` VALUES ('41', 'lsj', md5('123456'), '11324564879@qq.com', '13156467891', '', '', '');
    INSERT INTO `sb_user` VALUES ('42', 'lsj', md5('123456'), '11324564879@qq.com', '13156467891', '', '', '');
    INSERT INTO `sb_user` VALUES ('43', 'lsj', md5('123456'), '11324564879@qq.com', '13156467891', '', '', '');
    INSERT INTO `sb_user` VALUES ('44', 'lsj', md5('123456'), '11324564879@qq.com', '13156467891', '', '', '');
    INSERT INTO `sb_user` VALUES ('45', 'hjh', md5('958030'), 'hjh@126.com', '17812344567','', '', '');
    INSERT INTO `sb_user` VALUES ('46', 'ewq', md5('123456'), '1234567890@qq.com', '12345678909','', '', '');
    INSERT INTO `sb_user` VALUES ('47', 'pipi',md5( '123456'), '78@qq.com', '12367889993', '', '', '');
    INSERT INTO `sb_user` VALUES ('48', 'Lovica', md5('309418727'), '1684707021@qq.com', '18435130456', '', '', '');
    INSERT INTO `sb_user` VALUES ('49', 'htt0908',md5( '19920908'), '418720482@qq.com', '15244691033', '', '', '');
    INSERT INTO `sb_user` VALUES ('50', 'SUXUEMEI',md5( '123456'), 'SUXUEMEI@qq.com', '15817338974', '', '', '');
    INSERT INTO `sb_user` VALUES ('51', 'zhong', md5('123456'), '123456789@126.com', '13120211111', '', '', '');
    INSERT INTO `sb_user` VALUES ('87', 'qwer', md5('qwer123'), '519808982@qq.com', '15163222923', '', '', '');
    INSERT INTO `sb_user` VALUES ('88', '芳芳。。',md5( '111111'), '627265@qq.com', '17704622223', '', '', '');
    INSERT INTO `sb_user` VALUES ('89', 'smm123456',md5( '963852741'), '974255093@qq.com', '15098807312','', '', '');
    INSERT INTO `sb_user` VALUES ('90', 'Wenhua.Li',md5( 'libenka'), 'wenhua.li@tedu.cn', '13912345678','', '', '');


--    购物车
CREATE TABLE sb_shoppingCart(
  sid int(11)  auto_increment PRIMARY KEY,
  user_id int(11) NOT NULL DEFAULT 0,
  did int(11)NOT NULL DEFAULT 0 ,
   num int(11) NOT NULL ,
  is_checked tinyint(1) NOT NULL DEFAULT 0,
 FOREIGN KEY(user_id ) REFERENCES sb_user(uid),
  FOREIGN KEY(did) REFERENCES sb_menu_list(dish_id)
    );
INSERT INTO sb_shoppingCart VALUES(1,11,5,1,0);
INSERT INTO sb_shoppingCart VALUES(null,1,5,1,0);
INSERT INTO sb_shoppingCart VALUES(null,11,5,1,0);
INSERT INTO sb_shoppingCart VALUES(null,3,5,1,0);
INSERT INTO sb_shoppingCart VALUES(null,11,5,1,0);
INSERT INTO sb_shoppingCart VALUES(null,3,15,1,0);
#预订信息
CREATE TABLE sb_order(
 oid int(11)  auto_increment PRIMARY KEY,
  user_id  int(11) NOT NULL DEFAULT 0,
  #shop_id int(11) NOT NULL DEFAULT 0,
  pNum   varchar(64) NOT NULL DEFAULT '',
  timer varchar(128) NOT NULL DEFAULT '',
  con_name  varchar(64) NOT NULL DEFAULT '',
  phone  varchar(32) NOT NULL DEFAULT '' ,
  address_id varchar(255)  NOT NULL DEFAULT '',
  status  int(11)  NOT NULL DEFAULT 0,#-1-无效订单，0-已提交，1-已确认，2-已支付
order_time varchar(128) NOT NULL DEFAULT '',
  pay_time varchar(128) NOT NULL DEFAULT '',
   FOREIGN KEY(user_id ) REFERENCES sb_user(uid)
# FOREIGN KEY(shop_id) REFERENCES sb_shoppingCart(sid)
);
insert into sb_order values(1,1,1,111111,111,11111,'',0,'','');

#订单信息
CREATE TABLE sb_order_detail(
  od_id   int(11) AUTO_INCREMENT PRIMARY KEY,
  order_id int(11) NOT NULL DEFAULT 0,
  did int(11) NOT NULL DEFAULT 0,
  count int(11) NOT NULL DEFAULT 0,
  FOREIGN KEY(order_id ) REFERENCES sb_order(oid),
  FOREIGN KEY(did) REFERENCES sb_menu_list(dish_id)
);









CREATE TABLE sb_restShow(
  `rid` int(11)  auto_increment PRIMARY KEY,
  img varchar(128) NOT NULL DEFAULT '',
  title varchar(32) NOT NULL DEFAULT '',
  shape varchar(64) NOT NULL DEFAULT '',
  href varchar(128) NOT NULL DEFAULT ''
);
INSERT INTO sb_restShow VALUES(null,'images/rest/r1.jpg','优质服务','grid-item grid-item--height2','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r2.jpg','优美环境','grid-item grid-item--width2','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r3.jpg','细致服务','grid-item grid-item--height3','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r4.jpg','细致服务','grid-item grid-item--height2','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r5.jpg','美食美味','grid-item grid-item--width2','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r6.jpg','优美环境','grid-item grid-item--width2','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r7.jpg','美食美味','grid-item grid-item--height2','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r8.jpg','美食美味','grid-item','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r9.jpg','美食美味',' grid-item grid-item--width2 grid-item--height3','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r10.jpg','优质服务','grid-item grid-item--height2','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r11.jpg','细致服务','grid-item grid-item--height3','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r12.jpg','细致服务','grid-item','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r13.jpg','优美环境','grid-item grid-item--width4 grid-item--height2','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r14.jpg','细致服务','grid-item','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r15.jpg','团队展示','grid-item grid-item--width2 grid-item--height3','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r16.jpg','美食美味','grid-item grid-item--height2','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r17.jpg','团队展示','grid-item','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r18.jpg','团队展示','grid-item','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r19.jpg','美食美味','grid-item grid-item--width2 grid-item--height3','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r20.jpg','团队展示','grid-item grid-item--height2','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r21.jpg','优美环境','grid-item','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r22.jpg','优美环境','grid-item','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r23.jpg','优美环境','grid-item  grid-item--width3 grid-item--height2','#');
INSERT INTO sb_restShow VALUES(null,'images/rest/r24.jpg','优美环境','grid-item grid-item--width2 grid-item--height2','#');


