(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{503:function(s,n,t){"use strict";t.r(n);var a=t(6),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("前言:项目中,我们经常会备份表数据")]),s._v(" "),n("h3",{attrs:{id:"_01、数据备份"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01、数据备份"}},[s._v("#")]),s._v(" 01、数据备份")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#需要输入密码\npg_dump -U root -h 192.168.1.1 -p 5432 -d bms -t sys.test -f /home/ubuntu/test.sql\n\n#自带密码(按表保存)\npg_dump -t sys.test "host=192.168.1.1 port=5432 user=root password=123456 dbname=bms" > /home/ubuntu/test.sql\n\n#自带密码(按schema保存)\npg_dump "host=192.168.1.1 port=5432 user=root password=123456 dbname=bms schema=sys" > /home/ubuntu/test.sql\n\n-U:数据库用户名\n-h:数据库ip地址\n-p:端口号\n-d:指定数据库\n-t:指定表(一般为schema+表名)\n-f:保存的文件名称\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h3",{attrs:{id:"_02、数据恢复"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02、数据恢复"}},[s._v("#")]),s._v(" 02、数据恢复")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#需要输入密码\npsql -U root -h 192.168.1.1 -d bms < /home/ubuntu/test.sql\n\n#自带密码\npsql "host=192.168.1.1 user=root dbname=bms password=123456" < /home/ubuntu/test.sql\n\n-U:数据库用户名\n-h:数据库ip地址\n-d:指定数据库\n该命令会重建表结构及数据。所以不要在目标库新建相同名称的表及表结构\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);