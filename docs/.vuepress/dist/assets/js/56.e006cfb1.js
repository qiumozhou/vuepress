(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{453:function(s,a,e){"use strict";e.r(a);var t=e(6),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"_01、安装库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01、安装库"}},[s._v("#")]),s._v(" 01、安装库")]),s._v(" "),a("p",[s._v("执行"),a("code",[s._v("pip install openpyxl")])]),s._v(" "),a("h3",{attrs:{id:"_02、引入库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02、引入库"}},[s._v("#")]),s._v(" 02、引入库")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("from openpyxl import Workbook,load_workbook\nfrom openpyxl.styles import *\n\n\nimport warnings\nwarnings.filterwarnings('ignore')\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_03、创建新的工作簿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_03、创建新的工作簿"}},[s._v("#")]),s._v(" 03、创建新的工作簿")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wb1 = Workbook()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_04、创建新的工作表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_04、创建新的工作表"}},[s._v("#")]),s._v(" 04、创建新的工作表")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ws1 = wb.create_sheet('111')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_05、当前工作表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_05、当前工作表"}},[s._v("#")]),s._v(" 05、当前工作表")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ws2 = wb.active\nws2.title\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_06、指定工作表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_06、指定工作表"}},[s._v("#")]),s._v(" 06、指定工作表")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ws = wb['000']\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_07、已存在的全部工作簿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_07、已存在的全部工作簿"}},[s._v("#")]),s._v(" 07、已存在的全部工作簿")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wb.sheetnames\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_08、选择单个单元格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_08、选择单个单元格"}},[s._v("#")]),s._v(" 08、选择单个单元格")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ws['A1']\n\nws.cell(1,1)    # 先行后列，都是索引下标\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_09、单元格列索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_09、单元格列索引"}},[s._v("#")]),s._v(" 09、单元格列索引")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cell.col_idx\ncell.column\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_10、单元格行索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、单元格行索引"}},[s._v("#")]),s._v(" 10、单元格行索引")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cell.row\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_11、单元格列名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11、单元格列名"}},[s._v("#")]),s._v(" 11、单元格列名")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cell.column_letter\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_12、单元格的坐标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12、单元格的坐标"}},[s._v("#")]),s._v(" 12、单元格的坐标")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cell.coordinate\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_13、单元格的值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13、单元格的值"}},[s._v("#")]),s._v(" 13、单元格的值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ws['A1'].value\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_14、选择一行或一列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14、选择一行或一列"}},[s._v("#")]),s._v(" 14、选择一行或一列")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ws['A'] 一列\nws[1]  一行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_15、选择多行或多列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15、选择多行或多列"}},[s._v("#")]),s._v(" 15、选择多行或多列")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ws['A:B'] 多列\nws[5:10]  多行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_16、指定区域单元格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16、指定区域单元格"}},[s._v("#")]),s._v(" 16、指定区域单元格")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ws['A3:B9']\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_17、单元格赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17、单元格赋值"}},[s._v("#")]),s._v(" 17、单元格赋值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ws['A1'] = 20\nws.cell(2,2).value = 20\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_18、单元格遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18、单元格遍历"}},[s._v("#")]),s._v(" 18、单元格遍历")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ws.values 返回的是生成器，是将一行数据作为一个元组单元组成的，是由值组成的\n\nws.values 获取的内容是从 “A1” 到 “最大行最大列”\n\nfor i in ws.values:\n    print(i)\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_19、删除行或者列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19、删除行或者列"}},[s._v("#")]),s._v(" 19、删除行或者列")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("注意，删除行或者列后，后面的行或者列会自动往前填充，也就是说，删除第一列，原来的第二列就会变成第一列\n\nws.delete_cols(1) 删除列\nws.delete_rows(3) 删除行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_20、合并单元格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20、合并单元格"}},[s._v("#")]),s._v(" 20、合并单元格")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('ws.merge_cells("A1:B1")\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_21、保存工作簿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_21、保存工作簿"}},[s._v("#")]),s._v(" 21、保存工作簿")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wb.save('./000.xlsx')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);