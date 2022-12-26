(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{503:function(n,a,s){"use strict";s.r(a);var t=s(6),e=Object(t.a)({},(function(){var n=this,a=n._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h3",{attrs:{id:"_01、示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01、示例代码"}},[n._v("#")]),n._v(" 01、示例代码")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("import dayjs from 'dayjs'\nconst formatTime = (date, format = \"YYYY-MM-DD\") => {\n\n    if (!date) {\n        return \"\"\n    } else {\n        if (typeof (date) == \"string\") {\n            date = new Date(date)\n        }\n        const year = date.getFullYear()\n        const month = date.getMonth() + 1\n        const day = date.getDate()\n        const hour = date.getHours()\n        const minute = date.getMinutes()\n        const second = date.getSeconds()\n        switch (format) {\n            case \"YYYY-MM-DD\":\n                return `${[year, month, day].map(formatNumber).join('-')}`\n            case \"MM-DD\":\n                return `${[month, day].map(formatNumber).join('-')}`\n            case \"YYYY-MM-DD HH:mm\":\n                return `${[year, month, day].map(formatNumber).join('-')} ${[hour, minute].map(formatNumber).join(':')}`\n            case \"YYYY/MM/DD\":\n                return `${[year, month, day].map(formatNumber).join('/')}`\n            case \"YYYY/MM/DD HH:mm\":\n                return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute].map(formatNumber).join(':')}`\n            case \"HH:mm\":\n                return `${[hour, minute].map(formatNumber).join(':')}`\n            default:\n                return `${[year, month, day].map(formatNumber).join('-')} ${[hour, minute, second].map(formatNumber).join(':')}`\n        }\n    }\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);