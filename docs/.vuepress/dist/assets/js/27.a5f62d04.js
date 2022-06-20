(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{498:function(s,a,e){s.exports=e.p+"assets/img/transaction02.67519da2.png"},499:function(s,a,e){s.exports=e.p+"assets/img/transaction01.45e73087.png"},637:function(s,a,e){"use strict";e.r(a);var t=e(29),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"_01、四种隔离级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01、四种隔离级别"}},[s._v("#")]),s._v(" 01、四种隔离级别")]),s._v(" "),t("p",[s._v("序列化（SERIALIZABLE）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("如果隔离级别为序列化，则用户之间通过一个接一个顺序地执行当前的事务，这种隔离级别提供了事务之间最大限度的隔离\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可重复读（REPEATABLE READ）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("在可重复读在这一隔离级别上，事务不会被看成是一个序列。不过，当前正在执行事务的变化仍然不能被外部看到，也就是说，如果用户在另外一个事务中执行同条 SELECT 语句数次，结果总是相同的。（因为正在执行的事务所产生的数据变化不能被外部看到）。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("提交读（READ COMMITTED）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("READ COMMITTED 隔离级别的安全性比 REPEATABLE READ 隔离级别的安全性要差。处于 READ COMMITTED 级别的事务可以看到其他事务对数据的修改。也就是说，在事务处理期间，如果其他事务修改了相应的表，那么同一个事务的多个 SELECT 语句可能返回不同的结果。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("未提交读（READ UNCOMMITTED）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("READ UNCOMMITTED 提供了事务之间最小限度的隔离。除了容易产生虚幻的读操作和不能重复的读操作外，处于这个隔离级的事务可以读到其他事务还没有提交的数据，如果这个事务使用其他事务不提交的变化作为计算的基础，然后那些未提交的变化被它们的父事务撤销，这就导致了大量的数据变化。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("性能关系如下:")]),s._v(" "),t("p",[t("img",{attrs:{src:e(498),alt:""}})]),s._v(" "),t("h3",{attrs:{id:"_02、隔离级别对应的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_02、隔离级别对应的问题"}},[s._v("#")]),s._v(" 02、隔离级别对应的问题")]),s._v(" "),t("p",[s._v("脏读")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("一个事务读到另外一个事务还没有提交的数据，称之为脏读\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("不可重复读")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("不可重复读是指一个事务先后读取同一条记录，但两次读取的数据不同，称之为不可重复读\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("幻象读")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("主要针对插入,删除操作。一个事务插入或删除了某条数据,导致另一个事务前后两次读取的数据不一样\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("每种隔离级别与其问题对应的关系如下:")]),s._v(" "),t("p",[t("img",{attrs:{src:e(499),alt:""}})]),s._v(" "),t("h3",{attrs:{id:"_03、查看事务级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_03、查看事务级别"}},[s._v("#")]),s._v(" 03、查看事务级别")]),s._v(" "),t("p",[s._v("执行"),t("code",[s._v("show variables like '%tx_isolation%'")])]),s._v(" "),t("h3",{attrs:{id:"_04、修改事务级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_04、修改事务级别"}},[s._v("#")]),s._v(" 04、修改事务级别")]),s._v(" "),t("p",[s._v("SET [SESSION | GLOBAL] TRANSACTION ISOLATION LEVEL {READ UNCOMMITTED | READ COMMITTED | REPEATABLE READ | SERIALIZABLE}")]),s._v(" "),t("p",[s._v("执行"),t("code",[s._v("SET GLOBAL TRANSACTION ISOLATION LEVEL READ UNCOMMITTED")])])])}),[],!1,null,null,null);a.default=r.exports}}]);