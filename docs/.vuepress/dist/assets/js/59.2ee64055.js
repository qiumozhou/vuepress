(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{457:function(s,n,a){"use strict";a.r(n);var e=a(6),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"_01、拷贝代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01、拷贝代码"}},[s._v("#")]),s._v(" 01、拷贝代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('\'\'\'\n@File :server.py\n@Date :2022/3/26\n@Author :QiuMozhou\n@MAIL  :15717163552@163.com\n\'\'\'\nimport time\nimport imaplib, email, os\nimport datetime\nfrom email.header import decode_header\n# 添加缺失的命令\nimaplib.Commands[\'ID\'] = (\'AUTH\')\n\nclass IMAP_Downemail(object):\n    """\n    """\n    def __init__(self, account, pwd, serverurl, savedir, startdate, enddate, exts=[\'.xls\', \'.xlsx\']):\n        """\n        init\n        :param account:   邮箱账户\n        :param pwd:       密码\n        :param serverurl: 接收服务器地址\n        :param savedir:   文件保存路径\n        :param startdate: 邮件开始日期\n        :param enddate:   邮件结束日期\n        :param exts:      附件拓展名\n        """\n        self._account = account\n        self._pwd = pwd\n        self._serverurl = serverurl\n        self._savedir = savedir\n        self._startdate = startdate\n        self._enddate = enddate\n        self._exts = exts\n\n    def __getEmailattachment(self, msg):\n        """\n        下载邮件中的附件\n        """\n        attachments = []\n        for part in msg.walk():\n            if part.get_content_maintype() == \'multipart\':\n                continue\n            if part.get(\'Content-Disposition\') is None:\n                continue\n            fileName = part.get_filename()\n\n            # 如果文件名为纯数字、字母时不需要解码，否则需要解码\n            try:\n                fileName = decode_header(fileName)[0][0].decode(decode_header(fileName)[0][1])\n            except:\n                pass\n\n            # 只获取指定拓展名的附件\n            extension = os.path.splitext(os.path.split(fileName)[1])[1]\n            if extension not in self._exts:\n                continue\n\n            # 如果获取到了文件，则将文件保存在指定的目录下\n            if fileName:\n                if not os.path.exists(self._savedir):\n                    os.makedirs(self._savedir)\n                filePath = os.path.join(self._savedir, fileName)\n                fp = open(filePath, \'wb\')\n                fp.write(part.get_payload(decode=True))\n                fp.close()\n                attachments.append(fileName)\n\n        return attachments\n\n    def scanDown(self, process_fun=None):\n        if process_fun:\n            process_fun("当前邮箱：{}".format(self._account))\n\n        # 连接到qq企业邮箱，其他邮箱调整括号里的参数\n        conn = imaplib.IMAP4_SSL(self._serverurl, 993)\n\n        if process_fun:\n            process_fun("身份认证...")\n        try:\n            # 用户名、密码，登陆\n            conn.login(self._account, self._pwd)\n            login_success = True\n        except:\n            login_success = False\n\n        if login_success:\n            if process_fun:\n                process_fun("邮箱{}登录成功！".format(self._account))\n\n            # 选定一个邮件文件夹\n            # 收件箱默认名称是"INBOX"\n            # 可以用conn.list()查看都有哪些文件夹\n            print(conn.list())\n\n            args = ("name", "qmz", "contact", "15717163552@163.com", "version", "1.0.0", "vendor", "myclient")\n            conn._simple_command(\'ID\', \'("\' + \'" "\'.join(args) + \'")\')\n\n            conn.select(\'INBOX\')\n\n            # 提取文件夹中所有邮件的编号\n            resp, mails = conn.search(None, "(UNSEEN)")\n\n            # 邮件编号列表\n            msgList = mails[0].split()\n\n            # 从最近的邮件开始获取\n            for i in reversed(range(len(msgList))):\n                try:\n                    resp, data = conn.fetch(msgList[i], \'(RFC822)\')\n                    emailbody = data[0][1]\n                    mail = email.message_from_bytes(emailbody)\n\n                    # 解析邮件日期\n                    try:\n                        mail_date = time.strptime(mail.get("Date")[0:24], \'%a, %d %b %Y %H:%M:%S\')  # 格式化收件时间\n                    except:\n                        mail_date = time.strptime(mail.get("Date"), \'%d %b %Y %H:%M:%S +0800\')  # 格式化收件时间\n                    mail_date = time.strftime("%Y%m%d", mail_date)\n\n                    startdate = self._startdate\n                    stopdate = self._enddate\n\n                    if mail_date == (datetime.datetime.strptime(startdate, \'%Y%m%d\') - datetime.timedelta(days=1)).strftime(\'%Y%m%d\'):\n                        break\n\n                    if mail_date == (datetime.datetime.strptime(startdate, \'%Y%m%d\') - datetime.timedelta(days=3)).strftime(\'%Y%m%d\'):\n                        break\n\n                    if (mail_date < startdate) | (mail_date > stopdate):\n                        continue\n\n                    # 获取附件\n                    attachments = self.__getEmailattachment(mail)\n                    for attachment in attachments:\n                        if process_fun:\n                            process_fun("已下载文件：{}".format(attachment))\n                except:\n                    continue\n\n            conn.close()\n            conn.logout()\n        else:\n            if process_fun:\n                process_fun("邮箱{}登录失败！".format(self._account))\n\nif __name__ == \'__main__\':\n    def process_msg(msg):\n        print(msg)\n\n    # 邮箱账号列表\n    account_list = [\n        {\n            "email": "15717163552@163.com",  # 邮箱\n            "password": "12345",  # 授权密码\n            "server": "imap.163.com"  # 服务器地址\n        }\n    ]\n\n    # 文件保存目录\n    _dir = r"./test2"\n\n    # 邮件开始日期和结束日期\n    startdate = "20220129"\n    enddate = "20220429"\n\n    # 下载\n    for account in account_list:\n        _email = account[\'email\']\n        _password = account[\'password\']\n        _server = account[\'server\']\n        etool = IMAP_Downemail(_email, _password, _server, _dir, startdate, enddate)\n        etool.scanDown(process_msg)\n\n    print(\'Done.\')\n\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br"),n("span",{staticClass:"line-number"},[s._v("136")]),n("br"),n("span",{staticClass:"line-number"},[s._v("137")]),n("br"),n("span",{staticClass:"line-number"},[s._v("138")]),n("br"),n("span",{staticClass:"line-number"},[s._v("139")]),n("br"),n("span",{staticClass:"line-number"},[s._v("140")]),n("br"),n("span",{staticClass:"line-number"},[s._v("141")]),n("br"),n("span",{staticClass:"line-number"},[s._v("142")]),n("br"),n("span",{staticClass:"line-number"},[s._v("143")]),n("br"),n("span",{staticClass:"line-number"},[s._v("144")]),n("br"),n("span",{staticClass:"line-number"},[s._v("145")]),n("br"),n("span",{staticClass:"line-number"},[s._v("146")]),n("br"),n("span",{staticClass:"line-number"},[s._v("147")]),n("br"),n("span",{staticClass:"line-number"},[s._v("148")]),n("br"),n("span",{staticClass:"line-number"},[s._v("149")]),n("br"),n("span",{staticClass:"line-number"},[s._v("150")]),n("br"),n("span",{staticClass:"line-number"},[s._v("151")]),n("br"),n("span",{staticClass:"line-number"},[s._v("152")]),n("br"),n("span",{staticClass:"line-number"},[s._v("153")]),n("br"),n("span",{staticClass:"line-number"},[s._v("154")]),n("br"),n("span",{staticClass:"line-number"},[s._v("155")]),n("br"),n("span",{staticClass:"line-number"},[s._v("156")]),n("br"),n("span",{staticClass:"line-number"},[s._v("157")]),n("br"),n("span",{staticClass:"line-number"},[s._v("158")]),n("br"),n("span",{staticClass:"line-number"},[s._v("159")]),n("br"),n("span",{staticClass:"line-number"},[s._v("160")]),n("br"),n("span",{staticClass:"line-number"},[s._v("161")]),n("br"),n("span",{staticClass:"line-number"},[s._v("162")]),n("br"),n("span",{staticClass:"line-number"},[s._v("163")]),n("br"),n("span",{staticClass:"line-number"},[s._v("164")]),n("br"),n("span",{staticClass:"line-number"},[s._v("165")]),n("br"),n("span",{staticClass:"line-number"},[s._v("166")]),n("br"),n("span",{staticClass:"line-number"},[s._v("167")]),n("br"),n("span",{staticClass:"line-number"},[s._v("168")]),n("br"),n("span",{staticClass:"line-number"},[s._v("169")]),n("br"),n("span",{staticClass:"line-number"},[s._v("170")]),n("br"),n("span",{staticClass:"line-number"},[s._v("171")]),n("br"),n("span",{staticClass:"line-number"},[s._v("172")]),n("br"),n("span",{staticClass:"line-number"},[s._v("173")]),n("br"),n("span",{staticClass:"line-number"},[s._v("174")]),n("br"),n("span",{staticClass:"line-number"},[s._v("175")]),n("br"),n("span",{staticClass:"line-number"},[s._v("176")]),n("br"),n("span",{staticClass:"line-number"},[s._v("177")]),n("br")])]),n("h3",{attrs:{id:"_02、运行服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02、运行服务"}},[s._v("#")]),s._v(" 02、运行服务")]),s._v(" "),n("p",[s._v("执行"),n("code",[s._v("python main.py")])])])}),[],!1,null,null,null);n.default=t.exports}}]);