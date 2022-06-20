(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{480:function(n,s,a){n.exports=a.p+"assets/img/avl01.68ae09c6.png"},481:function(n,s,a){n.exports=a.p+"assets/img/avl02.7157fcb4.png"},482:function(n,s,a){n.exports=a.p+"assets/img/avl03.22a6f254.png"},483:function(n,s,a){n.exports=a.p+"assets/img/avl04.2549918e.png"},619:function(n,s,a){"use strict";a.r(s);var e=a(29),r=Object(e.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("前言:平衡二叉树是任意一个节点,该节点的左子树跟右子树高度差不超过1。接下来手撕AVL二叉树")]),n._v(" "),e("h3",{attrs:{id:"_01、代码实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01、代码实现"}},[n._v("#")]),n._v(" 01、代码实现")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# -*- ecoding: utf-8 -*-\n# @ModuleName: avltree\n# @Mail: 15717163552@163.com\n# @Author: mozhouqiu\n# @Time: 2022/5/20 9:05\nfrom collections import deque\n\n\nclass AVLTreeNode:\n    def __init__(self,val):\n        self.data = val\n        self.lchild = None\n        self.rchild = None\n        self.parent = None\n        self.bf = 0\n\n\nclass AVLTree:\n    def __init__(self):\n        self.root = None\n\n    # 前序遍历(递归实现)\n    def pre_order(self, root):\n        if root:\n            print(root.data, end=',')\n            self.pre_order(root.lchild)\n            self.pre_order(root.rchild)\n\n    # 中序遍历(递归实现)\n    def in_order(self, root):\n        if root:\n            self.in_order(root.lchild)\n            print(root.data, end=',')\n            self.in_order(root.rchild)\n\n    # 后序遍历(递归实现)\n    def post_order(self, root):\n        if root:\n            self.post_order(root.lchild)\n            self.post_order(root.rchild)\n            print(root.data, end=',')\n\n    # 层次遍历(广度优先):\n    def level_order(self, root):\n        queue = deque()\n        queue.append(root)\n        while len(queue) > 0:\n            node = queue.popleft()\n            print(node.data, end=',')\n            if node.lchild:\n                queue.append(node.lchild)\n            if node.rchild:\n                queue.append(node.rchild)\n\n    def rotate_left(self,p,c):\n        s2 = c.lchild\n        p.rchild = s2\n        if s2:\n            s2.parent = p\n\n        c.lchild = p\n        p.parent = c\n\n        p.bf = 0\n        c.bf = 0\n        return c\n\n    def rotate_right(self,p,c):\n        s2 = c.rchild\n        p.lchild = s2\n        if s2:\n             s2.parent = p\n\n        c.lchild = p\n        p.parent = c\n\n        p.bf = 0\n        c.bf = 0\n        return c\n\n    def rotate_right_left(self,p,c):\n        g = c.lchild\n        s3 = g.rchild\n        c.lchild = s3\n        if s3:\n            s3.parent = c\n        g.rchild = c\n        c.parent = g\n\n        s2 = g.lchild\n        p.rchlid = s2\n        if s2:\n            s2.parent = p\n        g.lchild = p\n        p.parent = g\n\n        if g.bf > 0:\n            p.bf = -1\n            c.bf = 0\n        elif g.bf < 0:\n            p.bf = 0\n            c.bf = 1\n        else:\n            p.bf = 0\n            c.bf = 0\n        return g\n\n    def rotate_left_right(self,p,c):\n        g = c.rchild\n\n        s2 = g.lchild\n        c.rchild = s2\n        if s2:\n            s2.parent = c\n        g.lchild = c\n        c.parent = g\n\n        s3 = g.rchild\n        p.lchild = s3\n        if s3:\n            s3.parent = p\n        g.rchild = p\n        p.parent = g\n\n        if g.bf < 0:\n            p.bf = 1\n            c.bf = 0\n        elif g.bf > 0:\n            p.bf = 0\n            c.bf = -1\n        else:\n            p.bf = 0\n            c.bf = 0\n        return g\n\n    # 插入非递归实现\n    def insert_no_rec(self, val):\n        if not self.root:\n            self.root = AVLTreeNode(val)\n        else:\n            p = self.root\n            while True:\n                if val < p.data:\n                    if not p.lchild:\n                        p.lchild = AVLTreeNode(val)\n                        p.lchild.parent = p\n                        node = p.lchild\n                        break\n                    else:\n                        p = p.lchild\n                elif val > p.data:\n                    if not p.rchild:\n                        p.rchild = AVLTreeNode(val)\n                        p.rchild.parent = p\n                        node = p.rchild\n                        break\n                    else:\n                        p = p.rchild\n                else:\n                    raise ValueError(\"repetitive value\")\n\n            while node.parent:\n                if node.parent.lchild == node:\n                    if node.parent.bf < 0:\n                        g = node.parent.parent\n                        x = node.parent\n                        if node.bf>0:\n                            n = self.rotate_left_right(node.parent,node)\n                        else:\n                            n = self.rotate_right(node.parent,node)\n                    elif node.parent.bf > 0:\n                        node.parent.bf = 0\n                        break\n                    else:\n                        node.parent.bf = -1\n                        node = node.parent\n                        continue\n                else:\n                    if node.parent.bf > 0:\n                        g = node.parent.parent\n                        x = node.parent\n                        if node.bf<0:\n                            n = self.rotate_right_left(node.parent,node)\n                        else:\n                            n = self.rotate_left(node.parent,node)\n                    elif node.parent.bf<0:\n                        node.parent.bf=0\n                        break\n                    else:\n                        node.parent.bf=1\n                        node = node.parent\n                        continue\n                n.parent = g\n                if g:\n                    if x == g.lchild:\n                        g.lchild = n\n                    else:\n                        g.rchild = n\n                    break\n                else:\n                    self.root=n\n                    break\n\n\navl = AVLTree()\navl.insert_no_rec(1)\navl.insert_no_rec(2)\navl.insert_no_rec(3)\navl.insert_no_rec(4)\navl.insert_no_rec(5)\navl.insert_no_rec(6)\navl.insert_no_rec(7)\n\navl.level_order(avl.root)\navl.in_order(avl.root)\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br"),e("span",{staticClass:"line-number"},[n._v("66")]),e("br"),e("span",{staticClass:"line-number"},[n._v("67")]),e("br"),e("span",{staticClass:"line-number"},[n._v("68")]),e("br"),e("span",{staticClass:"line-number"},[n._v("69")]),e("br"),e("span",{staticClass:"line-number"},[n._v("70")]),e("br"),e("span",{staticClass:"line-number"},[n._v("71")]),e("br"),e("span",{staticClass:"line-number"},[n._v("72")]),e("br"),e("span",{staticClass:"line-number"},[n._v("73")]),e("br"),e("span",{staticClass:"line-number"},[n._v("74")]),e("br"),e("span",{staticClass:"line-number"},[n._v("75")]),e("br"),e("span",{staticClass:"line-number"},[n._v("76")]),e("br"),e("span",{staticClass:"line-number"},[n._v("77")]),e("br"),e("span",{staticClass:"line-number"},[n._v("78")]),e("br"),e("span",{staticClass:"line-number"},[n._v("79")]),e("br"),e("span",{staticClass:"line-number"},[n._v("80")]),e("br"),e("span",{staticClass:"line-number"},[n._v("81")]),e("br"),e("span",{staticClass:"line-number"},[n._v("82")]),e("br"),e("span",{staticClass:"line-number"},[n._v("83")]),e("br"),e("span",{staticClass:"line-number"},[n._v("84")]),e("br"),e("span",{staticClass:"line-number"},[n._v("85")]),e("br"),e("span",{staticClass:"line-number"},[n._v("86")]),e("br"),e("span",{staticClass:"line-number"},[n._v("87")]),e("br"),e("span",{staticClass:"line-number"},[n._v("88")]),e("br"),e("span",{staticClass:"line-number"},[n._v("89")]),e("br"),e("span",{staticClass:"line-number"},[n._v("90")]),e("br"),e("span",{staticClass:"line-number"},[n._v("91")]),e("br"),e("span",{staticClass:"line-number"},[n._v("92")]),e("br"),e("span",{staticClass:"line-number"},[n._v("93")]),e("br"),e("span",{staticClass:"line-number"},[n._v("94")]),e("br"),e("span",{staticClass:"line-number"},[n._v("95")]),e("br"),e("span",{staticClass:"line-number"},[n._v("96")]),e("br"),e("span",{staticClass:"line-number"},[n._v("97")]),e("br"),e("span",{staticClass:"line-number"},[n._v("98")]),e("br"),e("span",{staticClass:"line-number"},[n._v("99")]),e("br"),e("span",{staticClass:"line-number"},[n._v("100")]),e("br"),e("span",{staticClass:"line-number"},[n._v("101")]),e("br"),e("span",{staticClass:"line-number"},[n._v("102")]),e("br"),e("span",{staticClass:"line-number"},[n._v("103")]),e("br"),e("span",{staticClass:"line-number"},[n._v("104")]),e("br"),e("span",{staticClass:"line-number"},[n._v("105")]),e("br"),e("span",{staticClass:"line-number"},[n._v("106")]),e("br"),e("span",{staticClass:"line-number"},[n._v("107")]),e("br"),e("span",{staticClass:"line-number"},[n._v("108")]),e("br"),e("span",{staticClass:"line-number"},[n._v("109")]),e("br"),e("span",{staticClass:"line-number"},[n._v("110")]),e("br"),e("span",{staticClass:"line-number"},[n._v("111")]),e("br"),e("span",{staticClass:"line-number"},[n._v("112")]),e("br"),e("span",{staticClass:"line-number"},[n._v("113")]),e("br"),e("span",{staticClass:"line-number"},[n._v("114")]),e("br"),e("span",{staticClass:"line-number"},[n._v("115")]),e("br"),e("span",{staticClass:"line-number"},[n._v("116")]),e("br"),e("span",{staticClass:"line-number"},[n._v("117")]),e("br"),e("span",{staticClass:"line-number"},[n._v("118")]),e("br"),e("span",{staticClass:"line-number"},[n._v("119")]),e("br"),e("span",{staticClass:"line-number"},[n._v("120")]),e("br"),e("span",{staticClass:"line-number"},[n._v("121")]),e("br"),e("span",{staticClass:"line-number"},[n._v("122")]),e("br"),e("span",{staticClass:"line-number"},[n._v("123")]),e("br"),e("span",{staticClass:"line-number"},[n._v("124")]),e("br"),e("span",{staticClass:"line-number"},[n._v("125")]),e("br"),e("span",{staticClass:"line-number"},[n._v("126")]),e("br"),e("span",{staticClass:"line-number"},[n._v("127")]),e("br"),e("span",{staticClass:"line-number"},[n._v("128")]),e("br"),e("span",{staticClass:"line-number"},[n._v("129")]),e("br"),e("span",{staticClass:"line-number"},[n._v("130")]),e("br"),e("span",{staticClass:"line-number"},[n._v("131")]),e("br"),e("span",{staticClass:"line-number"},[n._v("132")]),e("br"),e("span",{staticClass:"line-number"},[n._v("133")]),e("br"),e("span",{staticClass:"line-number"},[n._v("134")]),e("br"),e("span",{staticClass:"line-number"},[n._v("135")]),e("br"),e("span",{staticClass:"line-number"},[n._v("136")]),e("br"),e("span",{staticClass:"line-number"},[n._v("137")]),e("br"),e("span",{staticClass:"line-number"},[n._v("138")]),e("br"),e("span",{staticClass:"line-number"},[n._v("139")]),e("br"),e("span",{staticClass:"line-number"},[n._v("140")]),e("br"),e("span",{staticClass:"line-number"},[n._v("141")]),e("br"),e("span",{staticClass:"line-number"},[n._v("142")]),e("br"),e("span",{staticClass:"line-number"},[n._v("143")]),e("br"),e("span",{staticClass:"line-number"},[n._v("144")]),e("br"),e("span",{staticClass:"line-number"},[n._v("145")]),e("br"),e("span",{staticClass:"line-number"},[n._v("146")]),e("br"),e("span",{staticClass:"line-number"},[n._v("147")]),e("br"),e("span",{staticClass:"line-number"},[n._v("148")]),e("br"),e("span",{staticClass:"line-number"},[n._v("149")]),e("br"),e("span",{staticClass:"line-number"},[n._v("150")]),e("br"),e("span",{staticClass:"line-number"},[n._v("151")]),e("br"),e("span",{staticClass:"line-number"},[n._v("152")]),e("br"),e("span",{staticClass:"line-number"},[n._v("153")]),e("br"),e("span",{staticClass:"line-number"},[n._v("154")]),e("br"),e("span",{staticClass:"line-number"},[n._v("155")]),e("br"),e("span",{staticClass:"line-number"},[n._v("156")]),e("br"),e("span",{staticClass:"line-number"},[n._v("157")]),e("br"),e("span",{staticClass:"line-number"},[n._v("158")]),e("br"),e("span",{staticClass:"line-number"},[n._v("159")]),e("br"),e("span",{staticClass:"line-number"},[n._v("160")]),e("br"),e("span",{staticClass:"line-number"},[n._v("161")]),e("br"),e("span",{staticClass:"line-number"},[n._v("162")]),e("br"),e("span",{staticClass:"line-number"},[n._v("163")]),e("br"),e("span",{staticClass:"line-number"},[n._v("164")]),e("br"),e("span",{staticClass:"line-number"},[n._v("165")]),e("br"),e("span",{staticClass:"line-number"},[n._v("166")]),e("br"),e("span",{staticClass:"line-number"},[n._v("167")]),e("br"),e("span",{staticClass:"line-number"},[n._v("168")]),e("br"),e("span",{staticClass:"line-number"},[n._v("169")]),e("br"),e("span",{staticClass:"line-number"},[n._v("170")]),e("br"),e("span",{staticClass:"line-number"},[n._v("171")]),e("br"),e("span",{staticClass:"line-number"},[n._v("172")]),e("br"),e("span",{staticClass:"line-number"},[n._v("173")]),e("br"),e("span",{staticClass:"line-number"},[n._v("174")]),e("br"),e("span",{staticClass:"line-number"},[n._v("175")]),e("br"),e("span",{staticClass:"line-number"},[n._v("176")]),e("br"),e("span",{staticClass:"line-number"},[n._v("177")]),e("br"),e("span",{staticClass:"line-number"},[n._v("178")]),e("br"),e("span",{staticClass:"line-number"},[n._v("179")]),e("br"),e("span",{staticClass:"line-number"},[n._v("180")]),e("br"),e("span",{staticClass:"line-number"},[n._v("181")]),e("br"),e("span",{staticClass:"line-number"},[n._v("182")]),e("br"),e("span",{staticClass:"line-number"},[n._v("183")]),e("br"),e("span",{staticClass:"line-number"},[n._v("184")]),e("br"),e("span",{staticClass:"line-number"},[n._v("185")]),e("br"),e("span",{staticClass:"line-number"},[n._v("186")]),e("br"),e("span",{staticClass:"line-number"},[n._v("187")]),e("br"),e("span",{staticClass:"line-number"},[n._v("188")]),e("br"),e("span",{staticClass:"line-number"},[n._v("189")]),e("br"),e("span",{staticClass:"line-number"},[n._v("190")]),e("br"),e("span",{staticClass:"line-number"},[n._v("191")]),e("br"),e("span",{staticClass:"line-number"},[n._v("192")]),e("br"),e("span",{staticClass:"line-number"},[n._v("193")]),e("br"),e("span",{staticClass:"line-number"},[n._v("194")]),e("br"),e("span",{staticClass:"line-number"},[n._v("195")]),e("br"),e("span",{staticClass:"line-number"},[n._v("196")]),e("br"),e("span",{staticClass:"line-number"},[n._v("197")]),e("br"),e("span",{staticClass:"line-number"},[n._v("198")]),e("br"),e("span",{staticClass:"line-number"},[n._v("199")]),e("br"),e("span",{staticClass:"line-number"},[n._v("200")]),e("br"),e("span",{staticClass:"line-number"},[n._v("201")]),e("br"),e("span",{staticClass:"line-number"},[n._v("202")]),e("br"),e("span",{staticClass:"line-number"},[n._v("203")]),e("br"),e("span",{staticClass:"line-number"},[n._v("204")]),e("br"),e("span",{staticClass:"line-number"},[n._v("205")]),e("br"),e("span",{staticClass:"line-number"},[n._v("206")]),e("br"),e("span",{staticClass:"line-number"},[n._v("207")]),e("br"),e("span",{staticClass:"line-number"},[n._v("208")]),e("br"),e("span",{staticClass:"line-number"},[n._v("209")]),e("br"),e("span",{staticClass:"line-number"},[n._v("210")]),e("br"),e("span",{staticClass:"line-number"},[n._v("211")]),e("br"),e("span",{staticClass:"line-number"},[n._v("212")]),e("br"),e("span",{staticClass:"line-number"},[n._v("213")]),e("br"),e("span",{staticClass:"line-number"},[n._v("214")]),e("br"),e("span",{staticClass:"line-number"},[n._v("215")]),e("br"),e("span",{staticClass:"line-number"},[n._v("216")]),e("br")])]),e("p",[n._v("参考:")]),n._v(" "),e("p",[e("img",{attrs:{src:a(480),alt:""}})]),n._v(" "),e("p",[e("img",{attrs:{src:a(481),alt:""}})]),n._v(" "),e("p",[e("img",{attrs:{src:a(482),alt:""}})]),n._v(" "),e("p",[e("img",{attrs:{src:a(483),alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);