/*
当日收支查询
环境变量：jd_querryBeans_notify // 是否推送通知（true/false），默认不推送

cron:1 1 1 1 *

*/

const $ = new Env('当日收支查询')
const _0x2e1ba9=_0x4800;(function(_0x363d57,_0x5155f8){const _0x2ccc1f=_0x4800,_0x25f5fa=_0x363d57();while(!![]){try{const _0x5334aa=parseInt(_0x2ccc1f(0xc2,'1Ml^'))/0x1*(parseInt(_0x2ccc1f(0xe5,'eQ&M'))/0x2)+-parseInt(_0x2ccc1f(0x102,'s%49'))/0x3+-parseInt(_0x2ccc1f(0xc0,'l(jB'))/0x4*(-parseInt(_0x2ccc1f(0xee,'LxNy'))/0x5)+-parseInt(_0x2ccc1f(0x7e,'r(T)'))/0x6+-parseInt(_0x2ccc1f(0xf5,'965!'))/0x7*(-parseInt(_0x2ccc1f(0xcb,'Pwv4'))/0x8)+parseInt(_0x2ccc1f(0xff,'Mm1q'))/0x9+-parseInt(_0x2ccc1f(0xfa,'ePc]'))/0xa;if(_0x5334aa===_0x5155f8)break;else _0x25f5fa['push'](_0x25f5fa['shift']());}catch(_0x461d4b){_0x25f5fa['push'](_0x25f5fa['shift']());}}}(_0x54bf,0xf02b9));const jdCookie=require(_0x2e1ba9(0x88,'[hvw')),notify=require(_0x2e1ba9(0x92,'PGyW')),common=require(_0x2e1ba9(0xcf,'^GRr')),isNotify=process[_0x2e1ba9(0xc9,'LxNy')][_0x2e1ba9(0xa6,'XuJY')]==='true',todayString=$[_0x2e1ba9(0x9b,'EMVw')](_0x2e1ba9(0x89,'^GRr'),Date[_0x2e1ba9(0x101,'r(T)')]());function _0x4800(_0x3451b5,_0x753829){const _0x54bf3f=_0x54bf();return _0x4800=function(_0x48007d,_0x4ceca6){_0x48007d=_0x48007d-0x74;let _0x8a29ab=_0x54bf3f[_0x48007d];if(_0x4800['xdZwvh']===undefined){var _0x2a593f=function(_0x5ed65f){const _0x33f71f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x562e8c='',_0x5bda81='';for(let _0x3ebe37=0x0,_0x2b6d88,_0x50785a,_0x5ad3fe=0x0;_0x50785a=_0x5ed65f['charAt'](_0x5ad3fe++);~_0x50785a&&(_0x2b6d88=_0x3ebe37%0x4?_0x2b6d88*0x40+_0x50785a:_0x50785a,_0x3ebe37++%0x4)?_0x562e8c+=String['fromCharCode'](0xff&_0x2b6d88>>(-0x2*_0x3ebe37&0x6)):0x0){_0x50785a=_0x33f71f['indexOf'](_0x50785a);}for(let _0x6d280f=0x0,_0x529954=_0x562e8c['length'];_0x6d280f<_0x529954;_0x6d280f++){_0x5bda81+='%'+('00'+_0x562e8c['charCodeAt'](_0x6d280f)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5bda81);};const _0x3960e3=function(_0x297250,_0x19d9dc){let _0x5813cf=[],_0x9edf70=0x0,_0x3240f3,_0x3fe7c0='';_0x297250=_0x2a593f(_0x297250);let _0xfec335;for(_0xfec335=0x0;_0xfec335<0x100;_0xfec335++){_0x5813cf[_0xfec335]=_0xfec335;}for(_0xfec335=0x0;_0xfec335<0x100;_0xfec335++){_0x9edf70=(_0x9edf70+_0x5813cf[_0xfec335]+_0x19d9dc['charCodeAt'](_0xfec335%_0x19d9dc['length']))%0x100,_0x3240f3=_0x5813cf[_0xfec335],_0x5813cf[_0xfec335]=_0x5813cf[_0x9edf70],_0x5813cf[_0x9edf70]=_0x3240f3;}_0xfec335=0x0,_0x9edf70=0x0;for(let _0x21314a=0x0;_0x21314a<_0x297250['length'];_0x21314a++){_0xfec335=(_0xfec335+0x1)%0x100,_0x9edf70=(_0x9edf70+_0x5813cf[_0xfec335])%0x100,_0x3240f3=_0x5813cf[_0xfec335],_0x5813cf[_0xfec335]=_0x5813cf[_0x9edf70],_0x5813cf[_0x9edf70]=_0x3240f3,_0x3fe7c0+=String['fromCharCode'](_0x297250['charCodeAt'](_0x21314a)^_0x5813cf[(_0x5813cf[_0xfec335]+_0x5813cf[_0x9edf70])%0x100]);}return _0x3fe7c0;};_0x4800['mopcYX']=_0x3960e3,_0x3451b5=arguments,_0x4800['xdZwvh']=!![];}const _0x45c8f3=_0x54bf3f[0x0],_0x15ae1a=_0x48007d+_0x45c8f3,_0x54324c=_0x3451b5[_0x15ae1a];return!_0x54324c?(_0x4800['MnWsIj']===undefined&&(_0x4800['MnWsIj']=!![]),_0x8a29ab=_0x4800['mopcYX'](_0x8a29ab,_0x4ceca6),_0x3451b5[_0x15ae1a]=_0x8a29ab):_0x8a29ab=_0x54324c,_0x8a29ab;},_0x4800(_0x3451b5,_0x753829);}let cookie='';const cookiesArr=Object[_0x2e1ba9(0xf8,'[hvw')](jdCookie)[_0x2e1ba9(0x7b,'qLAp')](_0x3960e3=>jdCookie[_0x3960e3])[_0x2e1ba9(0xe4,'dI77')](_0x5ed65f=>_0x5ed65f);!cookiesArr[0x0]&&($[_0x2e1ba9(0xa4,'dI77')]($[_0x2e1ba9(0xd5,'eQ&M')],'【提示】请先获取Cookie'),process[_0x2e1ba9(0xb6,'l(jB')](0x1));!(async()=>{const _0x21f1d8=_0x2e1ba9;$[_0x21f1d8(0x76,')9@5')]=[],notify[_0x21f1d8(0xed,'Tot*')]({'title':$[_0x21f1d8(0xe8,'BNE%')]});for(let _0x562e8c=0x0;_0x562e8c<cookiesArr[_0x21f1d8(0xd7,'EMVw')];_0x562e8c++){$[_0x21f1d8(0xf2,'l(jB')]=_0x562e8c+0x1,cookie=cookiesArr[_0x562e8c],common['setCookie'](cookie),$[_0x21f1d8(0x93,'eQ&M')]=decodeURIComponent(common[_0x21f1d8(0xb0,'Q79)')](cookie,'pt_pin')),$['UA']=common[_0x21f1d8(0x9f,'Qdj5')]($[_0x21f1d8(0xc5,'[hvw')]),$[_0x21f1d8(0x9d,'0D*r')]=notify[_0x21f1d8(0xdb,'XuJY')]($[_0x21f1d8(0xe7,'d[A*')],$[_0x21f1d8(0xbb,'W&fj')]),$[_0x21f1d8(0xa2,'l%5U')]='',console[_0x21f1d8(0x7a,'qLAp')](_0x21f1d8(0xac,'FM0!')+$['index']+'】'+($['nickName']||$[_0x21f1d8(0x95,'^GRr')])+_0x21f1d8(0xd0,'l(jB')),$[_0x21f1d8(0xad,'l(jB')]=common['getJEC']($['UserName']),$['JEH']=common[_0x21f1d8(0xbe,'s%49')](),await Main(),common[_0x21f1d8(0xaa,'LxNy')]();if($[_0x21f1d8(0xe3,'r(T)')])break;await $['wait'](0x3e8);}const _0x33f71f=notify[_0x21f1d8(0xd6,'LxNy')]();_0x33f71f&&(console['log']('\x0a📣\x20运行结果\x0a'+_0x33f71f[_0x21f1d8(0xc8,'eJQs')](/：/,_0x21f1d8(0xcc,'5*e9'))),isNotify&&await notify[_0x21f1d8(0x81,'FM0!')]());})()[_0x2e1ba9(0x7c,'Q79)')](_0x5bda81=>$['logErr'](_0x5bda81))[_0x2e1ba9(0xb5,'sp%@')](()=>$[_0x2e1ba9(0x80,'eJQs')]());async function Main(){const _0x16fad5=_0x2e1ba9;try{$[_0x16fad5(0xc7,'*icK')]=![];const _0x3ebe37=await common[_0x16fad5(0xe6,'RGqg')](cookie);if(!_0x3ebe37&&typeof _0x3ebe37==='boolean'){console[_0x16fad5(0xdf,'FM0!')](_0x16fad5(0xb2,'l%5U'));return;}let _0x2b6d88=new Map();_0x19120f:for(let _0x5ad3fe=0x1;_0x5ad3fe<=0x14;_0x5ad3fe++){$[_0x16fad5(0xbd,'Qdj5')]=''+_0x5ad3fe,$[_0x16fad5(0x8a,'Uh]A')]=[],await sendRequest('beanDetail');const _0x6d280f=$[_0x16fad5(0x9a,'h3ak')];if(_0x6d280f[_0x16fad5(0xec,'5KA(')]===0x0)break;for(let _0x529954 of _0x6d280f){let _0x297250=_0x529954[_0x16fad5(0xf3,'XuJY')][_0x16fad5(0x97,'FsdX')]('\x20')[0x0];if(_0x297250===todayString)_0x529954['amount']=parseInt(_0x529954[_0x16fad5(0x8f,'[hvw')]),_0x2b6d88[_0x529954[_0x16fad5(0xa8,'5KA(')]]?(_0x2b6d88[_0x529954['eventMassage']][_0x16fad5(0xd9,'sp%@')]+=_0x529954['amount'],new Date(_0x2b6d88[_0x529954[_0x16fad5(0xde,'Mm1q')]][_0x16fad5(0xeb,'Tot*')])<new Date(_0x529954[_0x16fad5(0x96,'EtDL')])&&(_0x2b6d88[_0x529954[_0x16fad5(0xb8,'Q79)')]][_0x16fad5(0xa7,'Xtg0')]=_0x529954[_0x16fad5(0x104,'ePc]')])):_0x2b6d88[_0x529954[_0x16fad5(0x9c,'dI77')]]={..._0x529954};else break _0x19120f;}$[_0x16fad5(0x74,'RGqg')](0x3e8);}const _0x50785a=Object[_0x16fad5(0xcd,'EtDL')](_0x2b6d88);if(_0x50785a[_0x16fad5(0x90,')9@5')]>0x0){let _0x19d9dc=[],_0x5813cf=0x0,_0x9edf70=0x0;for(const _0x3fe7c0 of _0x50785a){let {date:_0xfec335,amount:_0x21314a,eventMassage:_0x40dc29}=_0x3fe7c0;_0x21314a>0x0?_0x5813cf+=_0x21314a:_0x9edf70+=_0x21314a,_0x40dc29=_0x40dc29[_0x16fad5(0x84,'qLAp')](/（商品:.*）/g,'')[_0x16fad5(0xce,'965!')](/订单.*使用京豆.*个/g,_0x16fad5(0x9e,'PGyW')),/参加\[.*\].*-奖励/[_0x16fad5(0xe9,'1gWp')](_0x40dc29)&&(_0x40dc29=_0x40dc29[_0x16fad5(0xda,'Mm1q')](/参加\[/g,'')[_0x16fad5(0xd2,'1gWp')](/\].*/g,'')),_0xfec335=_0xfec335[_0x16fad5(0xc6,'4(M&')]('\x20')[0x1],_0x19d9dc[_0x16fad5(0xfb,'lCDV')]({'时间':_0xfec335,'渠道':_0x40dc29,'明细':_0x21314a});}_0x19d9dc[_0x16fad5(0xbc,'s%49')]((_0x169f0b,_0x17bf47)=>_0x17bf47['明细']-_0x169f0b['明细']),_0x19d9dc[_0x16fad5(0x99,'Mm1q')](_0x1bec0c=>{const _0x41b87e=_0x16fad5;console[_0x41b87e(0xe1,'RpkP')](_0x1bec0c['渠道']+'['+_0x1bec0c['明细']+_0x41b87e(0xae,'qLAp')+_0x1bec0c['时间']+')');});const _0x3240f3=_0x5813cf+_0x9edf70;console[_0x16fad5(0xa0,'8Hx7')](_0x16fad5(0x7f,'1EaX')+_0x5813cf+'\x20京豆\x20🐶\x20今日支出：'+_0x9edf70+_0x16fad5(0xfe,'ePc]')),$[_0x16fad5(0x82,'W&fj')][_0x16fad5(0x86,'UPui')]('今日收入\x20'+_0x5813cf+_0x16fad5(0xe2,'ZaHp')),$[_0x16fad5(0xef,'[%@m')]['insert']('今日支出\x20'+_0x9edf70+_0x16fad5(0xd1,'Qdj5'));}else!$[_0x16fad5(0xb1,'RGqg')]&&console['log'](_0x16fad5(0x8b,'W&fj'));}catch(_0x12ee18){console[_0x16fad5(0xb4,'[hvw')](_0x16fad5(0x79,'[hvw')+_0x12ee18);}}function _0x54bf(){const _0x524817=['W5ydW48LvSkthIZcMYu','yJvVp8k0fcBcHHtcIG','kZvcWQiayCk6tSofWP0','5P6d5P2w6k2i5yUK5lMd5PE75lMM6loI5yYp5yUK5PQY57U45Pw45O2t772l5B+25y+J5y6x5lUI5Rsx5yQQ6i6G5y205zoLgG','WOeJg8kKb8oLmCodkCoMx3qc','q0a/wW','isFcHJhcUmkOtmkEgmkW','WPLbW4O0E8ki','tqqRWPhcH8kD','tuOOtCkSW4VdMq','zSomW4aTBMJdTmkCjmokumkoWRHwWRrdWOeKW5BdMCk/W48XsSo0WPFdMa','smkcW4JcRCkhWOhcG8kw','W4yTpgW','tJ9ZnmoxoaBdJG','WPJcHCoMWRu','W5ldO8kLt8oC','hd7cJq','W55/xCowx8k1Bq','zmkkW4NdM8o4WRW5W4pcPgi','WRHzWP9k','W4VcQ3tcR3P5me/cMmo2WRZdQq','W7n3xa8+s0u','6k+Q5y625l+k55wX5lQR6lgc','s8o1WPBcQ14','nXtcVG','WOVcHCo7WQq','WRNcM0XYWRtdM8oJW4C','ECkqW5NcVG','W4pcRNy','gfr3W4pdGmofodJcG0SyeNy','WO8YeSo2WRFdV1v8WO3dRcTnD8krAhldPGHgWPPw','nSoCWQXj','bxv0WQhcV8kNqu7dIc4RWQu','u1S6sSk4W58','WOpdOsFdOqRdJCojW6ueW4C3','kCo8hG','rCk/tmobemoJW47LVz/LPjVJGyBKUlxKUQVOTPFLJjG','W4jUW7C','5lMn6lkiWRBXJzk0W74X','WO7ORkRMSzpLKiZLUPOu','r0OVFCkIW4pdL8oXW5KmWO4tsc0','W7hcN1hdIYJdT8oTamkbdaq','6lEX5yYf5PEp5Pwr','dmo6cmkFx8kNWPbYWOqVW6NdKG','WPrdW4i','W6OTW61bWOZdPmkr','W61tW53dSq','eff1W4FdGmobofpcT3yOcNPm','rvK+umk5W6hdNCoRW487WOGA','WRlcGf12WOG','WPpcU8o4WO3dRmoh','W7ZdGmopWQBdH3/cP8ob','W4SfWPdcJW','xmoXWP/cM1fzoa','W58pWPBcSr/dNW','8jElIMu','WR4tWOlcSSovmmooeCoDWRLt','W4KTkq','WRatnZSfyCkR','ysq7dSo4nXJcHJpcOcRdRmotWRdcPmoRsSouW5v8WQ4FrxddMCkmW6hcLCouWP9+uCoiB8kcW5ddSSkQW6LgW6lcR8o+Cf0','4PYIW6ZMN5JNNPRORyZMS4pcIG','WQ1FW4aZw8kDhci','W7bzCSoGvG','WOJcOKxdU8o5dxvOW6niCa','BSolW4KNW4HUW74','WPpdOsi','pahcSf5oCmorwCoAyNVdQb47WPj4W6S','DxRdNW3cL8kaqmk8jG','tUkDKmos','WORcHCo+WQxcMCoJ','pqNdTNOAWRve','nwnJmSoWnrJcHclcI3pdUmkcW7ldL8kHvmo/WPDzWQiExW','WQibWP7cR8ojxSk3','5lQa6lowW5JXGlcP','W47cOXjnj8oycG','W4hdH8oEWQtdUItdPCklWRuPW51qjLbPDZX7WO9dBZJdGmkNbwpcGILEW5vrWQ/cMWBdO8ojWRddNmoKbfRdV8okcG','et7cMG','C8kqW4dcUG','WPhdQIddIrVdVCovW6SiW4S','WQbvWPXiWP51','nSooW6qKW57dQG','W60PW6XvWO7dVa','W4P1x8o/x8k1ya','WOyKkmoMWRBdVW','Ac17i8k0nHNdGHFcH38','WPVdNSo4cCosxra','W51MsSo9sSkBzmoMpSouyuu','i8o6aq','wSkDWQ7dQsmCtd4zCG4LW7e','dmkuWQi','5lUP6lo8WQxWQ5kD','e8kZpXJcNWu','W4JcTh3cTwTg','lmoaWPxdQSo8W5hdNmkrWOf1WQRdPSoQ','W6FcJ0ddTtxdQCobhmkGfXFdJ8oDuG','W5FdH8oxW6aK','WOBdSflcHq','W4JcOXfv','WPNdMSoUgCo5wWK','b1CovW','dgz/WQJcV8kc','afKuvgua','W4tcTMhdJatdVmoZW7i8','W4GNpwZdHghcOa','W4/dL8kIW6pdJ8kImeZcRgOJWRJcHG','W6OAiY9rtSkbWPZcSfu','W6ffW5ddOmkB','WOe3oCoI','W60qiq','FLNcTcfdW6r5jCoFWQb2lq','CCkEW4O','rqqXWPFcMSkzrapcPLq','WPnjW5WY','WRpcK1T4','W5dcJSk7sCkehLrLkCkzsdNcPa','g8ozW6xcTa','WOa7pCoZWRS','FvxcS14bWQr0k8o6','5lMf6lo9WQNWOjkb','WOKGh8kIdCoInCkSl8oJz3aBWQa','8ygjVaa','d8kPjG','WOTzW5ldIgNcPCkQgHSrW6Ppdq','WPNdUIddGHldR8ob','WO3dMSo9gq','W7FcI13dJq','WPlcUSoKWQhdRmoeCmocWOm','saqjWP/cGmkb','dtfcvgtdRaW','jWNdP3iEWQrs','4P60doIgV+ADREI/HEIISoMaTUwjT+s5ToMvMEISTvC','WO3cOCoX','WOZcR8oM','q04VxCkL','W4hcISk0uSoxpq7dLMBcV8ocxfFdSsJdO8oSrmk1WO84tL09FWrzWOBdH8kpWRiwW5u','wmo1zwRdIfjIAvdcI0xcH8on','5lUE5PsI5PEK5ywAWOi','EmobW5CU','p8oGfCkd','W4tdLSozWQFdQhNcRW','WOxdTeZcK8oHaHe','WPpcQ8oMWQtdO8oaFa','WPZORlhMSkdLPjdOTApcM+kFSXFMLkNLKQZLUAZMLPJMJPC','W4NcLmk3w8omkG','uLOlvNuPFW'];_0x54bf=function(){return _0x524817;};return _0x54bf();}async function handleResponse(_0x288bad,_0xf922d0){const _0x2a1f5e=_0x2e1ba9;try{switch(_0x288bad){case'beanDetail':if(_0xf922d0['code']==='0')$[_0x2a1f5e(0xf7,')9@5')]=_0xf922d0['jingDetailList'];else _0xf922d0[_0x2a1f5e(0x8d,'Q79)')]==='1'?console['log']('查询异常'):console[_0x2a1f5e(0xf6,'eQ&M')]('❓'+_0x288bad+'\x20'+JSON[_0x2a1f5e(0x75,'qLAp')](_0xf922d0));break;}}catch(_0x215cd3){console[_0x2a1f5e(0xf4,'1Ml^')]('❌\x20未能正确处理\x20'+_0x288bad+_0x2a1f5e(0xaf,'dI77')+(_0x215cd3[_0x2a1f5e(0x83,'BNE%')]||_0x215cd3));}}async function sendRequest(_0x42c6d3){const _0x4ed636=_0x2e1ba9;if($[_0x4ed636(0xba,'qLAp')]||$[_0x4ed636(0x103,'LxNy')])return;let _0x3c45c0='',_0x4d017=null,_0x4d603b=null,_0x4b08f2=_0x4ed636(0x98,'8Hx7');switch(_0x42c6d3){case _0x4ed636(0x8e,'Pwv4'):_0x3c45c0=_0x4ed636(0xd3,'W&fj'),_0x4d603b={'page':$[_0x4ed636(0xea,'ePc]')]};break;default:console[_0x4ed636(0xc1,'[%@m')](_0x4ed636(0xc4,'5*e9')+_0x42c6d3);return;}const _0x425fb0={'url':_0x3c45c0,'method':_0x4b08f2,'headers':{'Accept':'application/json,\x20text/plain,\x20*/*','Accept-Encoding':_0x4ed636(0xca,'8Hx7'),'Accept-Language':_0x4ed636(0xc3,'^GRr'),'Connection':_0x4ed636(0xf1,'1Ml^'),'Content-Type':_0x4ed636(0x7d,'UPui'),'J-E-H':$['JEH'],'J-E-C':$[_0x4ed636(0xd4,'8Hx7')],'Cookie':cookie,'Sec-Fetch-Dest':_0x4ed636(0xfc,'XuJY'),'Sec-Fetch-Mode':_0x4ed636(0x94,'[%@m'),'Sec-Fetch-Site':_0x4ed636(0xdc,'^GRr'),'User-Agent':$['UA']},'params':_0x4d603b,'data':_0x4d017,'timeout':0x7530};_0x4b08f2==='GET'&&(delete _0x425fb0['data'],delete _0x425fb0[_0x4ed636(0x78,'965!')][_0x4ed636(0xb3,'FM0!')]);const _0x2facef=0x1;let _0x321030=0x0,_0x5e2a8a=null,_0x591553=![];while(_0x321030<_0x2facef){_0x321030>0x0&&await $[_0x4ed636(0xa1,'EtDL')](0x3e8);const _0x58848d=await common[_0x4ed636(0xdd,'ePc]')](_0x425fb0);if(!_0x58848d['success']){_0x5e2a8a=_0x4ed636(0xbf,')9@5')+_0x42c6d3+'\x20请求失败\x20➜\x20'+_0x58848d[_0x4ed636(0xb9,'l%5U')],_0x321030++;_0x58848d[_0x4ed636(0xd8,'ZaHp')]&&_0x58848d[_0x4ed636(0xa9,'Q79)')]===0x193&&($['querryError']=!![]);continue;}if(!_0x58848d[_0x4ed636(0xf9,'l%5U')]){_0x5e2a8a=_0x4ed636(0x100,'*icK')+_0x42c6d3+_0x4ed636(0x85,'1gWp'),_0x321030++;continue;}await handleResponse(_0x42c6d3,_0x58848d[_0x4ed636(0xa3,'eQ&M')]),_0x591553=![];break;}_0x321030>=_0x2facef&&(console['log'](_0x5e2a8a),_0x591553&&($[_0x4ed636(0x77,'okUD')]=!![],$['message']&&$[_0x4ed636(0x91,'Q79)')][_0x4ed636(0xab,'FM0!')](_0x5e2a8a)));}

// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
