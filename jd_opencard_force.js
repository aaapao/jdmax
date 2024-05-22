/*
活动名称：强制入会
活动链接：https://shopmember.m.jd.com/shopcard/?venderId=<商家ID>
环境变量：jd_opencard_force_venderId // 商家ID，多个用英文逗号分割
        jd_opencard_force_task_threads // 控制店铺并发线程数（正整数），默认1，最大3
        jd_opencard_force_account_threads // 控制账号并发线程数（正整数），默认1，最大3
        jd_opencard_force_account_interval // 自定义运行间隔时长（整数，单位毫秒），默认1500

cron:1 1 1 1 *

*/

const $ = new Env('强制入会')
var iｉl='jsjiami.com.v7';function Iii11l(){const Ill11I=(function(){return[...[iｉl,'yONAjsUqjniKUamKigL.cJdoBSJmJr.wNgvlI7Xf==','jr9a','WQbiW4KhW4udd8kYWOddUCkbWOKcW6m','W59ZW5HiW5C','C8kRWRSUxNNcJSkRrSknemkPWOBcVYVdRSoNaqfpWRVcGMHIfMzsWRpcUSoGp8kbWPW','W67cImkPW5BcMSoNWQa','W7JcGSk2W4y','WRH+W77cQfO1WPXVW4pdLc0kwaTGksG','W7zqD2Sabb0','kuZcIfa','BCkzW7FdKebIWPK','5l2N5zco5y21772d','W6VdVcldUSoWBMJcGa','wmkbWPKJyW','57I35y6A8yQNMa','p8oiWQ3dL8oLANuLWO8J','ugtcJYlcG8k/bCkpW7bwCKqRWRq','hmoaoIv/','gIpcI8kQaW','reHKW4CM','u0ZdSq','WPhdK8keWOan','WPj/W6tcUu0+WPS2W6tdVYGd','4PQxaoIfM+wSV+s5R+I8KoIIK+MvJEMzM+AxLUMuUEIUV+E9I+MxK+IUIG','BSkguqOtWPRdOG','5yMJ5yEY5BMH6zc05l2M5zk95AAJ6lApWRJXIiU4','W65SWPq','iComWRRdKSoAFfWRWO0NW489BbjhBmk3w8oOoXq','WOhcGSkkW4qz','WOrsA8oy','W7ZdSCkNwSkGhG','mmkrW63dLMPq','CCkZWOWquq','44c96lsV5y2x','c8kPk8klWOS','wSkvWPehCa','pZFcQq','EuBdMCkRzq','W69IWOm','CCk0WRKX','qwJcHZlcR8kJimkb','5yQp5ysh5BIp6zk15l675zgQ5OUy5yMJ','gmo1asnL','oq/dKb/cS8kitCk4W4LvWPyXWPxdUG','WQXMWOiItG','fCoYwuVcJa','a8kPWOBdK8owBrpdVdVdPSkZW6OfWRy','WPTsBmo2W7j7W4C','W5uwW48Z','smkaDNKfW6frgfu','WPFcNCklW4C','WQZdQSkYvCkXa8o+','WQtdGCogWPldHWTo','W6hdHCk/r8kF','hhVcSNa','xqFdQZRdJuy','pCkaxqKrWP7dKMyXx8k2cSkBW7K','mmkwqZmyWPZdIWCIvCk1z8kmWRWuw8kxWPdcSa','j2FdRW','WR5EW5ldMCoe','uLJdMmor','awelCSkGW647','x0xdKmobq8kYWQW','hWFcJxtdTa','kKy6Cmkt','a8kgWPNdH8oF','hCkZmSkgWOtdQMFcHmk/','WQ3dSSktWQOUWOddV8ofW67cUbbqsConW45oWQbuF8kVWRO','5l+Y5zgU5y+M776B','B1/cLMRdRmoEfmkMW5zeWO8BWPK','WQJcVWpdNSoUu1JcGq','W7hcRSkV','WR1fW6VcHM8','W7xcRSogW7DeW5ddI8ooW43cKrPz','uSoDWPL3qvSYmq','W47dHSkEWOGw','WPrOW4dcQvO','fN0BCSkQW6GMmhSRCSoGW4FdHW','5BUQ6zkS56E75yMF8l+VN++4Gq','b37cKemm','5lUN6lgo8l2sMa','W40jkSkEWQ4','d8kxm8kuWRm','WR7dMSoOWPFdPrHEW416eCkr','aCkUpa','W58dq8kJtq','WQRdUCkfWQSoWPe','jCklWQtdLSoC','WRtdTSkFWROOWOZdV8op','W5OBW44','W4O7W7iCfW','tHhdQYBdHLW','W69MWOdcPeZdOcG','yCkZWQqYEN/cGSk9sSkqpCoNWOZdTHxdT8o2qW','cSkKW73dMmku','kCoAWQJdRmoy','44gB5O+y56AY44k/6k+m5yE76iY75y6VlfVdMxFcUdm','W7ddGq/cICkAWQWIW5JcHdxcSfeK','WRddO8keWQCsWOldU8omW6e','WQvcW5iNW48fca','5l2b5OcF5yQM8loNIE+4QW','imoQW793bcJdL8oMqSkygSo2WPldSW','rZpdUJZdIW','wH/cLq'],...(function(){return[...['W5nlW7rN','6k6q5Rkc5AEe6lAv776X','mW/dLY/cVCkaqW','p1ZcIei8','WQTiW5mSW54m','6k+y5RcG5AAP6lwQ776P5PEs5zcf5BMO5PAL5O2j77Yv8lQyVq','kmkRW4pdHq','W7RdR8kXuCkrc8ovWOzdWQurceDY','arddTCoZCCktWONdLW','B+kCTCo/','W6ldVmkMASkr','hdZcMeJdL0hdN8o2W5pcIbZdL1u','bSkKiSkp','vCojWOnR','WPhcNI/dI8oj','WRzQW6pcVqrWWOT+W5BdQJKswgSPoc4','5yUS5ywr5BM26zoE5l2s5zoo5OQ65yI377+Y6i+B5B6s776D','vSouWP9ZEfCYnMRdL8klvIjiWOuZWPlcJSku','u+wwUEwSQmo6xo+8VG','WQRcN1a','ACoUW4BdQ8k7W6tcQmkp','dSkNwtKd','W7hcOmogW75i','cCohpce','saFdRa','W6aGW7ZcI1etWR9A','WQVdTSkfWP4oWOZdVmoEW5hcSZvqEq','eCoLr2lcTq','W79uChK','W7LAA3qeaHy','WOVcH8kF','W7lcImk9W4FcRCoXWRK2wSoFtSk1W6FdPvpdT0m7Dc91','W7xcG8kSW4BcJCoXWQCTx8oZy8k8W6C','nSoAWO7dRSoA','bchcGuRdRa','neZcJ28a','5BQ66zoZ5l665zcP5lUR5AYT5z+aWRVWUBMf','W4xdGSkJ','WQZdU8koWOWA','WOvtW7tdSSoJWO84','hCo8rM/cNq','W600y8kLdq','WOrzW6a','W5vlW7O','W47dImkWWOSvW4xdT8kFWRtcQG','d8kFW4RdRmkj','obZcUCkboq','v0ldPCk6qSkps1tdRf/dR1tcVa','W7zpWOlcGLG','tgRdLbJcKbZcNmoIW5pcIG','WRFcQrBdUSoU','BmorWQrxtW','fCooCwJcV8oFwCopW5hcRJtdRCkAsSoFWOZcOSoji8oJm3C0A8kgFa','44gc5O6u56E044oC6k6n5ysz6i+W5y6DW5JcN8k5WOldOmko','BmoZWOzeqW','W7BcQ8kaW5RcRKpcPKJdMg7dLctcO0pdSYVcM01NoaFcSfzDEdbInKhcNsP/DG','WOjiwSoPW5C','W44urmkTnSouWP1u','W6tdQSk3WPe3','WPNdUCkJW7RcKJn9uCkYWR7dNmoJW4et','WO7cKCkzW740','mmkQW4tdNCkXWP3dL8oHCv3dGmkmq8kraCoSWQDJgCotjG','W487xSkqBW','W5OhWRpcTmkXW5PLwCoTp8oXa8kjFW','oLhcJ0aTW6tdQCojWOWis8oMWOxdKW','bxRdRmoQFq','oSkzoCkWWOC','W65Ftw0k','WQ7cPaNdM8o3t1FcGmoeCmoI','amkWW5BdIvu','p8kfWP7dO8oj','W7dcLSkCW4BcQq','5lIx6lcX8lEXOa','fVcJMzK','hSozxw7cQmou','77Y+8y+5Pa','WR9SWPi1CvpdSmkMdSo/','DwvIW6eAWQlcR8kOi8kzy3Xrhq','Ew1IW5ihWR7cR8kOoCkdD3PG','EdRdUGpdHW','W5y1vmk0na','WP57W6ObW4u','WOLvtCkLamoFWPDmW5xcHG','W7ldUSkG','ggCcEmkKW7aHAKSWBCkNW5/cLW','vCo3W4xcGmkn','bs7cL8kQkG','mCklW6RdG2SEW68dWRldO29MWP4jg03cMLBdQK8','W7hWM5IH','qCoDWOrI','W7VcImkSW7dcL8o7WQqwxmoFy8kzW6NdVf7dM2qZFW','WR11W6tcQLW4','xaRdTZJdSudcOCksWQfUEa','W5CyW4u','WOvaW5NcVxi','WPz+WPO7wq','W4mBu8kG','sWpdRc4','C2v/W6yIWR7cTCk0jSkiF3fAca','5yU35yAw5BQG6zkA5l2Q5zkR5AAk6lwTCVctMBa','5BQg6zo25lYl5zoA5lM45A6p5z+PW7ZWO5Mg','oCo/WPhdPmoh','qW3dVW','FmkUWRe1xa','fmkNW5RdGCkY'],...(function(){return['W5WsW5yEwhNdQG','4P+qW43MN7lOGz7MRPZNO7RLP5dNKz8m','FXFcIcLg','CtxcPG','pIVcQq','e8ktW4RdTCkK','o8kXW57dJSkwW4BcI8kL','5yM95yAP5BUX6zgw5l695zgL5OIU5yMX','5BAn5PQf5lY05zgF','W4aizG','CKddS8kSyG','nCkhW6xdNmk1','WOFcGSkXWRizW5RdT8orWOhcQSogbKS8nxddIWq4cf/cS1O','W5GwW5y1bq','WRZORjRMSPRLKA7LUAVcTa','aheBzmkPW6K','6lAp5y2A5PsK5PAo','p0hcGKCTW6xdMq','W7tdGG7cImkvWQiJW7ZcGYtcSwOe','eXZcQSkdlq','pCkWW4y','xaRdTZ/dRfFcPCkEWRbvx8o1W6rcWP/dLKRcPq','c8kVWPi','WQTcW5O','WPNWLPI2','WQPJWPy','WRRcOa3dQSob','WOVcVCkzW6qC','uwdcIdlcSSkKk8kl','jmk0tWKa','p8kwW6y','4PYEzoIhLoAFOEI+QUIGNEMaGowjU+s4NEMxQEISUCoJ','krr4Egu','4PUYzoIeNUwUMEs7LoI/K+IIHoMuQoMBToAuVoMwJoIVP+E8NEMwUoITJG','W5fYW5fCW4K','WQWSWOBcO0tdQZ5fF8kODhVcM8kVbq8cFSk0E8ojW4FdHCkfW4bNiW','W59nW7f9W4hcKa','dY8e','hsGMW4uD','Ba3dTJVdHfZcVmorWOfEBmoX','pCkRqcWZ','W6xdVd/dJKu','W7fMWOC','W5dcNCkwW5lcSa','WQpdL8oIWOtdPW9AW4X4pCk2W5fgt8keW5ZcKCoYlYldLW','W4xcR8oMWRJdIMCS','nmkXW5C','l+wxUUwTHKPr77YO','WQHOWO4bxq','ySkUWRGQ','W6/cNCk0W4RcIW','x8k2WRS6WQddICklWQddNCoNwCoXW7pdQmkgW5/cUCo3ExeyWPpdSCo8W4OnW6KMWQyWa1ldOCoC','e8ofsulcVCoi','rGxcGre','oCkdf8krWQa','cSohlcPkWQav','FWmcWR51W5JcUK/cG15haay','e8kgrqqC','W7euWO1YWPjrp8k4WOBdGCkPWPS','WOzYW7hdO8oX','teVdV8kmra','FqhdMr15WQlcNCofWRCkxmogWR0','W5CyyCkT','gcmdW78vW7ddRmozW59NySkOh3S','4P2EW7VMN6hOGR/MRztNOBtLP6VNK5Kp','k1Hg','weBdOSk5wmkjvw/dLvtdP3JcGSkKW7NdGIWUcq','oapdIJ3cSmklxW','pSklW7ldHSkB','WP9xWReCFq','ye7dKYBcOq','r/gpMz4','jmkBwba9WPBdLIO3qSkyrCkFWQO5FmkFWPK','W5qhW4C4lMVdRmoeWR/dU8oYpvBcRq','W7fRWPZcP0ddOIaismk/sxpcQmk2pImeF8k9','57UB5y638kYwRG','W4hdNbddRuu','W5bhWOhcMvW','wwVdMdVcOq','pYhcVCk+gZyI','e8ofsq','jSk9WQiHB1ZcTG','qmooWOjSzW','WODpD8oaW5n/W402z8ohEmkEbCowWPNdGInM','kM3cIL0P','lrHy','WQNdUCktWOKn','6lAo5yY95Pw15PAd','W7tdRmkNvSk1ba','F8k+WRGXvN3cIG','bWdcGuBdJG','B8ooWQBcGYeDW7jbWRxdKenBWQe','W54eFmkDCW','W7DqAN8vcW','FgVcU8k5eZ00zmojWPxcTmkmW6xcMmkAW7G','fZjlnSoYjwabWRO+W7RcImkGfCkJWO1Aoa3dKCooW4lcH8k9W6GGimk+WQH/','WQDSWPmeBKNdMSkZm8oWwIvE','4P+RtEIeIoAFQEI/KUIIK+MbQowjG+s7MEMvLoIVRSk+','W5rxW7O','6i+85y+E5BIF6zgu5lYH5zoR54I65Og45B2T5BImWPy','p8k7W4tdVSkQW4JcImkbCvNdICkQuCond8obW6DMgq','W7NdLCktWPmt'];}())];}())];}());Iii11l=function(){return Ill11I;};return Iii11l();};const iii1li=iii1II;function iii1II(_0x1001c1,_0x36d267){const _0x3a79fd=Iii11l();return iii1II=function(_0x2d0e18,_0x196d0e){_0x2d0e18=_0x2d0e18-0x126;let _0x48f09e=_0x3a79fd[_0x2d0e18];if(iii1II['IhBafC']===undefined){var _0x5ace64=function(_0x4f77d0){const _0x26b797='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1136ed='',_0x199a08='';for(let _0x2f6a3e=0x0,_0x181719,_0x29a6d2,_0x39f41b=0x0;_0x29a6d2=_0x4f77d0['charAt'](_0x39f41b++);~_0x29a6d2&&(_0x181719=_0x2f6a3e%0x4?_0x181719*0x40+_0x29a6d2:_0x29a6d2,_0x2f6a3e++%0x4)?_0x1136ed+=String['fromCharCode'](0xff&_0x181719>>(-0x2*_0x2f6a3e&0x6)):0x0){_0x29a6d2=_0x26b797['indexOf'](_0x29a6d2);}for(let _0x67d7e6=0x0,_0x5b5416=_0x1136ed['length'];_0x67d7e6<_0x5b5416;_0x67d7e6++){_0x199a08+='%'+('00'+_0x1136ed['charCodeAt'](_0x67d7e6)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x199a08);};const _0x1a11d4=function(_0x208004,_0x4b280a){let _0x20825d=[],_0x5188df=0x0,_0x265e94,_0x5ad06a='';_0x208004=_0x5ace64(_0x208004);let _0x263565;for(_0x263565=0x0;_0x263565<0x100;_0x263565++){_0x20825d[_0x263565]=_0x263565;}for(_0x263565=0x0;_0x263565<0x100;_0x263565++){_0x5188df=(_0x5188df+_0x20825d[_0x263565]+_0x4b280a['charCodeAt'](_0x263565%_0x4b280a['length']))%0x100,_0x265e94=_0x20825d[_0x263565],_0x20825d[_0x263565]=_0x20825d[_0x5188df],_0x20825d[_0x5188df]=_0x265e94;}_0x263565=0x0,_0x5188df=0x0;for(let _0x2baab7=0x0;_0x2baab7<_0x208004['length'];_0x2baab7++){_0x263565=(_0x263565+0x1)%0x100,_0x5188df=(_0x5188df+_0x20825d[_0x263565])%0x100,_0x265e94=_0x20825d[_0x263565],_0x20825d[_0x263565]=_0x20825d[_0x5188df],_0x20825d[_0x5188df]=_0x265e94,_0x5ad06a+=String['fromCharCode'](_0x208004['charCodeAt'](_0x2baab7)^_0x20825d[(_0x20825d[_0x263565]+_0x20825d[_0x5188df])%0x100]);}return _0x5ad06a;};iii1II['Idyrvf']=_0x1a11d4,_0x1001c1=arguments,iii1II['IhBafC']=!![];}const _0x2ea978=_0x3a79fd[0x0],_0xc26e36=_0x2d0e18+_0x2ea978,_0x54d430=_0x1001c1[_0xc26e36];return!_0x54d430?(iii1II['EFkFYt']===undefined&&(iii1II['EFkFYt']=!![]),_0x48f09e=iii1II['Idyrvf'](_0x48f09e,_0x196d0e),_0x1001c1[_0xc26e36]=_0x48f09e):_0x48f09e=_0x54d430,_0x48f09e;},iii1II(_0x1001c1,_0x36d267);}(function(iIIii1,IllIi1,lilIII,Ii1ilI,II11i1,iliIil,iliIii){return iIIii1=iIIii1>>0x3,iliIil='hs',iliIii='hs',function(lill1i,il1li,iIIill,iilii,Ill11i){const Il1i11=iii1II;iilii='tfi',iliIil=iilii+iliIil,Ill11i='up',iliIii+=Ill11i,iliIil=iIIill(iliIil),iliIii=iIIill(iliIii),iIIill=0x0;const iilil=lill1i();while(!![]&&--Ii1ilI+il1li){try{iilii=parseInt(Il1i11(0x127,']ZoP'))/0x1+parseInt(Il1i11(0x15e,'JbfA'))/0x2*(-parseInt(Il1i11(0x237,'@F*y'))/0x3)+-parseInt(Il1i11(0x14a,'JbfA'))/0x4+parseInt(Il1i11(0x19d,'Z3b0'))/0x5*(-parseInt(Il1i11(0x1c4,'tzOW'))/0x6)+parseInt(Il1i11(0x1c7,'Uj5['))/0x7+parseInt(Il1i11(0x1f7,'9n5d'))/0x8*(parseInt(Il1i11(0x16c,'E)oQ'))/0x9)+parseInt(Il1i11(0x1d0,'&vka'))/0xa*(parseInt(Il1i11(0x1b9,'Y8m]'))/0xb);}catch(Ill11l){iilii=iIIill;}finally{Ill11i=iilil[iliIil]();if(iIIii1<=Ii1ilI)iIIill?II11i1?iilii=Ill11i:II11i1=Ill11i:iIIill=Ill11i;else{if(iIIill==II11i1['replace'](/[AdnyNOKlXfILUBJgqSwr=]/g,'')){if(iilii===il1li){iilil['un'+iliIil](Ill11i);break;}iilil[iliIii](Ill11i);}}}}}(lilIII,IllIi1,function(il1ll,i1ilIi,lill1l,l1l1i1,i1iiI,i1ilIl,llI11I){return i1ilIi='\x73\x70\x6c\x69\x74',il1ll=arguments[0x0],il1ll=il1ll[i1ilIi](''),lill1l=`\x72\x65\x76\x65\x72\x73\x65`,il1ll=il1ll[lill1l]('\x76'),l1l1i1=`\x6a\x6f\x69\x6e`,(0x16cbcf,il1ll[l1l1i1](''));});}(0x608,0xe822e,Iii11l,0xc3),Iii11l)&&(iｉl=iii1li(0x18c,'E)oQ'));const jdCookie=require(iii1li(0x20e,'Kacj')),notify=require(iii1li(0x248,'i4#d')),common=require(iii1li(0x231,'x6D0')),{H5st}=require(iii1li(0x14d,'k^05'));let idList=(process[iii1li(0x239,'&vka')][iii1li(0x1f0,'SjUB')]||'')[iii1li(0x257,'[k38')](','),taskThreads=process[iii1li(0x130,']ZoP')][iii1li(0x14e,'tq4*')]||'1',accountThreads=process[iii1li(0x23e,'Kyvf')][iii1li(0x1f3,'HZ$y')]||'1';const runInterval=process[iii1li(0x144,'Pma^')]['jd_opencard_force_account_interval']||'',isNotify=![],invalidIdsMap=new Map(),maxThreads=0x3,cookiesArr=Object[iii1li(0x1c8,'tZCH')](jdCookie)[iii1li(0x19b,'HZ$y')](i11ili=>jdCookie[i11ili])[iii1li(0x249,'#KY*')](iil1l1=>iil1l1);!cookiesArr[0x0]&&($[iii1li(0x151,'#KY*')]($[iii1li(0x184,'](Fl')],iii1li(0x1f1,'k^05')),process[iii1li(0x15d,'NOnc')](0x1));!(async()=>{const Iil1i1=iii1li,lllli={'PYkZn':Iil1i1(0x1b4,'OAe2'),'MCywi':function(iiili1,ill11i,lllill,ill11l,I1lIiI,lllili){return iiili1(ill11i,lllill,ill11l,I1lIiI,lllili);},'lYCsw':'⚠\x20请先定义必要的环境变量后再运行脚本！','ZrlbG':function(IliiiI,Ill11){return IliiiI>Ill11;},'Lyjlp':function(liiIII,li1i11){return liiIII===li1i11;},'aDoNR':Iil1i1(0x250,'HZ$y'),'gkZNf':Iil1i1(0x154,'x6D0'),'MceFR':function(iI11I1,il1i1l){return iI11I1!==il1i1l;},'qOsuw':function(IlIlll,IIIl1I){return IlIlll(IIIl1I);},'fhpwj':function(iil1ii,IlIlli){return iil1ii>IlIlli;},'JNDdN':Iil1i1(0x161,'Y8m]')};try{if(Iil1i1(0x1e9,'&vka')!=='PHQau'){notify['config']({'title':$['name']});if(lllli['ZrlbG'](idList['length'],0x0))idList=[...new Set(idList['filter'](il1i1i=>il1i1i!==''))];if(idList[Iil1i1(0x217,'BdoF')]<=0x0){console['log']('⚠\x20请先定义必要的环境变量后再运行脚本！');return;}$[Iil1i1(0x1ac,'Z3b0')]=null;if(runInterval){if(lllli[Iil1i1(0x224,'&vka')](lllli['aDoNR'],Iil1i1(0x1ca,']vc9')))try{const lil111=parseInt(runInterval);lil111>=0x0&&('SYscI'==='Zuynp'?(lilIl1[Iil1i1(0x178,'k^05')](i1l1ii['name'],lllli['PYkZn']),i1l1[Iil1i1(0x190,'tzOW')](0x1)):$['waitTime']=lil111);}catch{'PIrYs'===lllli[Iil1i1(0x19f,'x6D0')]?Ii1iIl[Iil1i1(0x229,'k^05')](Iil1i1(0x244,'k^05')+iliIIi):console[Iil1i1(0x168,'I[g8')](Iil1i1(0x16b,'tzOW'));}else lili1['log'](ll1l1+Iil1i1(0x21f,'E)oQ'));}try{const lllil1=parseInt(taskThreads);lllil1>0x0&&lllli[Iil1i1(0x22f,'I[g8')](lllil1,0x1)&&(taskThreads=lllil1);}catch{taskThreads=0x1;}taskThreads=Math['min'](taskThreads,maxThreads);try{const iil1il=lllli[Iil1i1(0x20c,'Kacj')](parseInt,accountThreads);lllli[Iil1i1(0x176,'tZCH')](iil1il,0x0)&&iil1il!==0x1&&(accountThreads=iil1il);}catch{accountThreads=0x1;}accountThreads=Math['min'](accountThreads,maxThreads),$[Iil1i1(0x16f,'C^rZ')]=[],$[Iil1i1(0x200,']vc9')]=![],idList[Iil1i1(0x14c,'48sN')]>0x1&&($[Iil1i1(0x218,'0^Yr')]=!![]),await common[Iil1i1(0x22b,'&vka')](accountThreads,cookiesArr,async(ilil1I,i11il1)=>{const IIii11=Iil1i1;await lllli[IIii11(0x193,'VdAy')](concMain,taskThreads,idList,ilil1I,i11il1,Main);if($[IIii11(0x241,'Z#D!')])await $['wait']($[IIii11(0x19e,'oc]z')]);}),isNotify&&notify[Iil1i1(0x1e8,'x6D0')]()&&(Iil1i1(0x22a,'&vka')===lllli[Iil1i1(0x1e5,'Kacj')]?(Iiii1[Iil1i1(0x1e7,'#KY*')](lIIili),IiiIil&&(IIlll['outFlag']=!![])):await notify[Iil1i1(0x171,'^Trn')]());}else{IiilI1[Iil1i1(0x1da,'#M^)')](lllli[Iil1i1(0x203,'HZ$y')]);return;}}catch(ilil11){console[Iil1i1(0x13f,'SjUB')](Iil1i1(0x150,'!b6p')+ilil11);}})()[iii1li(0x232,'](Fl')](illlI1=>$[iii1li(0x259,'SjUB')](illlI1))[iii1li(0x132,'BDrb')](()=>$[iii1li(0x15a,'[k38')]());async function Main(IIIl11,I1lIi1){const iliIl1=iii1li,liiIIi={'RzMuV':function(li1i1i,IlIli1){return li1i1i(IlIli1);},'nuzwk':function(illIiI){return illIiI();},'tZkxM':function(lI1lli,Ill1l,llI1Il){return lI1lli(Ill1l,llI1Il);},'WjYgP':iliIl1(0x146,'9n5d'),'tbxJG':function(ii1iii,i11iil){return ii1iii(i11iil);},'koIIX':function(Ill1i,ii1iil){return Ill1i(ii1iil);},'YVWJo':function(lllI1l,i11iii){return lllI1l(i11iii);},'MGsWG':iliIl1(0x145,'Z3b0'),'erulP':function(llI1Ii,lllI1i){return llI1Ii===lllI1i;},'qLPJz':'XFLWB','yinXq':iliIl1(0x221,'C^rZ'),'NrdDF':iliIl1(0x194,'engy'),'jXwLC':function(li1i1l,II1i1){return li1i1l===II1i1;},'HgEgy':iliIl1(0x177,'Y8m]'),'WXbLf':'bindWithVender','dFlwf':function(lI1lll,iIiII){return lI1lll===iIiII;},'ckbvR':iliIl1(0x1ef,'oc]z'),'voBYI':iliIl1(0x242,'E)oQ'),'chGRf':function(iil1lI,iiiliI){return iil1lI!==iiiliI;},'xnQfO':iliIl1(0x1d7,'SjUB'),'VeuIq':function(li1i1I,illIii){return li1i1I!==illIii;},'IOvGV':'zYrwc','wcrUC':iliIl1(0x18a,'NOnc'),'lUaKG':iliIl1(0x1a5,'^Trn'),'UDuES':'shopmember_m_jd_com','HXMak':iliIl1(0x211,'ePVS'),'RDrNq':'NSCyj','YszoE':'88888','mYUqw':'zh-CN,zh-Hans;q=0.9','wPJYS':iliIl1(0x1f9,'&vka'),'kMZeF':iliIl1(0x17b,'Y8m]'),'GHhqf':iliIl1(0x228,'U%Mw'),'jWzDU':function(ii1il1,lI1llI){return ii1il1<lI1llI;},'XEkSp':function(illIil,Ill1I){return illIil===Ill1I;},'kZngu':iliIl1(0x245,'Pma^'),'VhUXF':function(i11iiI,lIli11){return i11iiI>=lIli11;},'ExJdr':iliIl1(0x1ee,']vc9'),'nDvbs':iliIl1(0x1b7,'%Tiv'),'fswZP':iliIl1(0x1ab,'ePVS')},{title:lil11I,UA:Iliii1,cookie:iIiIi,message:iil1ll}=I1lIi1;if(invalidIdsMap[iliIl1(0x22e,'!b6p')](IIIl11))return;let iiilil='',iil1li=undefined,lillIl=[];await iiilii(iliIl1(0x131,'I[g8'));if(invalidIdsMap[iliIl1(0x20f,'oAm3')](IIIl11))return;if(typeof iil1li===liiIIi[iliIl1(0x12a,'k#8V')]){if(iliIl1(0x1ff,'48sN')===iliIl1(0x179,'I[g8')){const lillI1=liiIIi[iliIl1(0x189,'oAm3')](lIII1l,()=>{const Ii1il1=iliIl1;lilIl===0x0&&(liiIIi[Ii1il1(0x1b2,'&vka')](Iiiil,lillI1),liiIIi[Ii1il1(0x223,'Y8m]')](Iiiii));},0x64);}else{if(iil1li)iliIl1(0x1d1,'E)oQ')===iliIl1(0x227,'U%Mw')?ii1ll[iliIl1(0x222,'0^Yr')](iliIl1(0x12f,'Y8m]')+IliI1l+'\x20请求响应\x20'+(lliiil[iliIl1(0x252,'9n5d')]||lliiii)):console['log'](lil11I+'已是会员');else{if(liiIIi['fswZP']!==liiIIi[iliIl1(0x1b3,'C^rZ')]){I11iIi[iliIl1(0x1cf,'@F*y')](I1ilII+'账号无效'),I11iIl['fix'](liiIIi[iliIl1(0x212,'k^05')]),l1l11l[iliIl1(0x251,'^QQ!')]['push'](IilIil);return;}else{if(invalidIdsMap[iliIl1(0x1d4,'0^Yr')](IIIl11))return;await iiilii(iliIl1(0x21e,'&In@'));}}}}async function iIiIl(liil11,iiillI){const iii1ll=iliIl1;try{switch(liil11){case iii1ll(0x216,'[k38'):if(iiillI[iii1ll(0x126,'t9xZ')]===!![]){let l1l111=iiillI['result'];Array['isArray'](l1l111)&&(liiIIi[iii1ll(0x1f6,'x6D0')]===liiIIi[iii1ll(0x135,'Uj5[')]?l1l111=l1l111[0x0]:ilI1lI['log'](''+IiiIll+IIlii['message']));iil1li=liiIIi[iii1ll(0x165,'t9xZ')](l1l111?.[iii1ll(0x19a,']vc9')]?.[iii1ll(0x138,'](Fl')],0x1),iiilil=l1l111?.[iii1ll(0x15b,'BdoF')]?.[0x0]?.[iii1ll(0x1dc,'[k38')]?.['activityId'];const {venderCardName:l1iIII,venderCardLogo:llI1I1}=l1l111?.[iii1ll(0x142,'^Trn')];if(l1l111?.[iii1ll(0x137,'E)oQ')]&&!l1iIII&&!llI1I1){if(liiIIi[iii1ll(0x1ae,'](Fl')]==='lOrOZ')IiiIiI[iii1ll(0x206,'SjUB')](lilii,l1iiI);else{console[iii1ll(0x1a8,'tZCH')](lil11I+iii1ll(0x1e0,'Uj5[')),invalidIdsMap[iii1ll(0x24f,'i4#d')](IIIl11,!![]);return;}}if(!$[iii1ll(0x1eb,'I[g8')+IIIl11]){if(liiIIi[iii1ll(0x14b,'!b6p')]===liiIIi[iii1ll(0x1fd,'OAe2')]){const lllI11=liiIIi[iii1ll(0x13d,'Uj5[')](i1l1I,IiilIi);lllI11>0x0&&lllI11!==0x1&&(iii1Ii=lllI11);}else $[iii1ll(0x1d6,'Z3b0')+IIIl11]=!![],console[iii1ll(0x1e6,'k#8V')](iii1ll(0x1ce,'JbfA')+IIIl11),console[iii1ll(0x253,'&vka')](iii1ll(0x198,'k#8V')+(l1l111?.['shopMemberCardInfo']?.[iii1ll(0x164,'Z#D!')]||'未知')+'\x0a');}}else iiillI[iii1ll(0x1b0,'i4#d')]?liiIIi[iii1ll(0x181,'SjUB')](iii1ll(0x201,'JbfA'),liiIIi[iii1ll(0x166,'k^05')])?(delete I11iII[iii1ll(0x215,'oc]z')],delete I1ilIi['headers'][iii1ll(0x16a,'BdoF')]):console[iii1ll(0x1e1,'x6D0')](''+lil11I+iiillI[iii1ll(0x15c,'48sN')]):console['log'](lil11I+iii1ll(0x152,'OAe2')+JSON[iii1ll(0x1b6,'Z3b0')](iiillI)+'\x20🚫');break;case liiIIi[iii1ll(0x1fe,'tZCH')]:if(iiillI[iii1ll(0x236,'NOnc')]===!![]){if(liiIIi[iii1ll(0x1ea,'k^05')](iiillI['message'],iii1ll(0x17d,'0^Yr'))){if(iiillI[iii1ll(0x234,'engy')]&&iiillI[iii1ll(0x18b,'0^Yr')]?.[iii1ll(0x17c,'Z#D!')]){if(iii1ll(0x1ba,'0^Yr')==='hQbsj'){lillIl=[];for(const I1lIli of iiillI['result']?.['giftInfo']?.['giftList']){if(liiIIi[iii1ll(0x195,'ePVS')](liiIIi[iii1ll(0x180,'Kyvf')],'ImTTZ')){const {prizeType:II1ii}=I1lIli;switch(II1ii){case 0x1:case 0x17:lillIl[iii1ll(0x1c9,'oc]z')]('优惠券🗑️'),iil1ll['insert'](iii1ll(0x1b8,'JbfA'));break;case 0x4:lillIl[iii1ll(0x1c2,'&vka')](I1lIli['discountString']+iii1ll(0x1a4,'OAe2')),iil1ll[iii1ll(0x173,'JbfA')](I1lIli[iii1ll(0x209,'&In@')]+iii1ll(0x204,'](Fl'));break;case 0x6:lillIl[iii1ll(0x1d3,'t9xZ')](I1lIli[iii1ll(0x1a1,'engy')]+'店铺积分🎟️'),iil1ll[iii1ll(0x1aa,'Z3b0')](I1lIli['discountString']+iii1ll(0x1a2,'tq4*'));break;case 0xe:lillIl[iii1ll(0x25a,'U%Mw')](I1lIli['discountString']+iii1ll(0x13a,'t9xZ')),iil1ll['insert'](I1lIli['discountString']+iii1ll(0x162,'oAm3'));break;default:lillIl[iii1ll(0x256,'Y8m]')](''+I1lIli[iii1ll(0x12e,'8q9X')]+I1lIli['prizeName']),iil1ll[iii1ll(0x172,'oAm3')](''+I1lIli[iii1ll(0x182,'ePVS')]+I1lIli[iii1ll(0x196,'tZCH')]);}}else li1Il[iii1ll(0x23b,'ePVS')](li1Ii+iii1ll(0x22d,'SjUB'));}console[iii1ll(0x1cf,'@F*y')](lil11I+iii1ll(0x1cc,'NOnc')+lillIl[iii1ll(0x1bc,'#KY*')]('、'));}else{const ii1ilI=iIli1I[iii1ll(0x12b,'I[g8')]();Iiil1++,iiilli['push'](liiIIi['koIIX'](l1iIIl,ii1ilI));}}else console['log'](lil11I+iii1ll(0x22c,']vc9'));}else iiillI[iii1ll(0x13e,'k^05')]==='活动太火爆，请稍后再试'?console['log'](''+lil11I+iiillI[iii1ll(0x1be,'BDrb')]+iii1ll(0x23d,'#KY*')):console[iii1ll(0x18e,'OAe2')](''+lil11I+iiillI[iii1ll(0x148,'Y8m]')]+iii1ll(0x136,'ePVS'));}else{if(iiillI['message'])liiIIi[iii1ll(0x1f4,'^Trn')]==='sGxip'?console[iii1ll(0x219,'](Fl')](''+lil11I+iiillI['message']+iii1ll(0x205,'U%Mw')):IllII1['log'](iii1ll(0x246,'VdAy'));else{if(liiIIi[iii1ll(0x24e,'f(oz')](liiIIi[iii1ll(0x1a9,'!b6p')],iii1ll(0x21a,'BdoF')))console[iii1ll(0x16e,'i4#d')](lil11I+iii1ll(0x16d,'Z3b0'));else{const liil1I=liiIIi[iii1ll(0x20d,'%Tiv')](I1iIiI,li1I1);liil1I>0x0&&liil1I!==0x1&&(lilIii=liil1I);}}}break;}}catch(i11ii1){console[iii1ll(0x1bb,'U%Mw')](iii1ll(0x226,'[k38')+liil11+iii1ll(0x233,'[k38')+(i11ii1[iii1ll(0x13e,'k^05')]||i11ii1));}}async function iiilii(IlIliI){const IIliI1=iliIl1;if(liiIIi[IIliI1(0x1de,'VdAy')]('zYrwc',liiIIi[IIliI1(0x1f2,'oc]z')]))iliIII=iIIl1i;else{let iiill1=IIliI1(0x258,'FybM'),lIli1i=null,IIIII1=null,I1lIlI=liiIIi[IIliI1(0x1c6,'oAm3')],ii1ill={},II1iI={};switch(IlIliI){case IIliI1(0x153,'&vka'):II1iI={'appId':'27004','appid':IIliI1(0x1cd,'oc]z'),'functionId':IIliI1(0x18d,'E)oQ'),'clientVersion':liiIIi[IIliI1(0x240,'#M^)')],'client':'H5','body':{'venderId':IIIl11,'payUpShop':!![],'queryVersion':'10.5.2','appid':'27004','needSecurity':!![],'bizId':liiIIi[IIliI1(0x167,'&In@')],'channel':0x196},'version':'4.7','t':!![],'ua':Iliii1},ii1ill=await H5st[IIliI1(0x225,'](Fl')](II1iI),lIli1i=ii1ill[IIliI1(0x163,'C^rZ')];break;case liiIIi[IIliI1(0x20b,'0^Yr')]:II1iI={'appId':IIliI1(0x1d2,'Z3b0'),'appid':IIliI1(0x139,'i4#d'),'functionId':'bindWithVender','clientVersion':liiIIi[IIliI1(0x19c,'BdoF')],'client':'H5','body':{'venderId':IIIl11,'bindByVerifyCodeFlag':0x1,'registerExtend':{},'writeChildFlag':0x0,'channel':0x196,'appid':liiIIi['HXMak'],'needSecurity':!![],'bizId':liiIIi[IIliI1(0x149,'VdAy')]},'version':'4.7','t':!![],'ua':Iliii1};iiilil&&(liiIIi[IIliI1(0x169,'Z3b0')]!==liiIIi[IIliI1(0x13c,'i4#d')]?IIliI[IIliI1(0x16e,'i4#d')](''+ilI1ll+Iillii[IIliI1(0x1e3,'k#8V')]+IIliI1(0x214,'BdoF')):II1iI['body'][IIliI1(0x1ed,'Uj5[')]=iiilil);ii1ill=await H5st['getH5st'](II1iI),lIli1i=ii1ill[IIliI1(0x208,'Kyvf')];break;}const llI1II={'area':'','screen':IIliI1(0x185,'t9xZ'),'uuid':liiIIi[IIliI1(0x21b,'Kyvf')]};lIli1i&&Object[IIliI1(0x1af,'0^Yr')](lIli1i,llI1II);IIIII1&&Object[IIliI1(0x147,'oAm3')](IIIII1,llI1II);const lIli1l={'url':iiill1,'method':I1lIlI,'headers':{'Accept':'*/*','Accept-Encoding':IIliI1(0x1cb,'BdoF'),'Accept-Language':liiIIi[IIliI1(0x230,'&vka')],'Origin':IIliI1(0x213,'JbfA'),'Referer':liiIIi['wPJYS'],'Sec-Fetch-Dest':'empty','Sec-Fetch-Mode':liiIIi['kMZeF'],'Content-Type':IIliI1(0x158,'Y8m]'),'User-Agent':Iliii1,'Cookie':iIiIi},'params':IIIII1,'data':lIli1i,'timeout':0x7530};liiIIi[IIliI1(0x24d,'E)oQ')](I1lIlI,liiIIi[IIliI1(0x13b,'f(oz')])&&(delete lIli1l[IIliI1(0x21d,'0^Yr')],delete lIli1l[IIliI1(0x192,'tzOW')][IIliI1(0x24c,'0^Yr')]);const lillIi=0x1;let illIi1=0x0,ii1ili=null,liil1i=![];while(liiIIi['jWzDU'](illIi1,lillIi)){const i1l1iI=await common[IIliI1(0x159,'[k38')](lIli1l);if(!i1l1iI[IIliI1(0x191,'engy')]){if(liiIIi[IIliI1(0x202,'ePVS')](IIliI1(0x1fa,'!b6p'),IIliI1(0x247,'#KY*'))){ii1ili=IlIliI+'\x20'+lil11I+IIliI1(0x1bd,'ePVS')+i1l1iI[IIliI1(0x141,'oc]z')]+IIliI1(0x207,'FybM'),illIi1++;continue;}else i1l1li=0x1;}if(!i1l1iI[IIliI1(0x21c,'Kacj')]){if(liiIIi[IIliI1(0x174,'Y8m]')](liiIIi['kZngu'],IIliI1(0x24b,'8q9X')))ill111=0x1;else{ii1ili=IlIliI+'\x20'+lil11I+IIliI1(0x1c1,'0^Yr'),illIi1++;continue;}}await iIiIl(IlIliI,i1l1iI[IIliI1(0x1d8,'48sN')]),liil1i=![];break;}if(liiIIi[IIliI1(0x18f,'k#8V')](illIi1,lillIi)){console['log'](ii1ili);if(liil1i){if('PHPiP'!==liiIIi[IIliI1(0x1a0,'BdoF')])$[IIliI1(0x183,'^Trn')]=!![];else{let Iil1l1=Iliill['result'];IIII11[IIliI1(0x188,'^QQ!')](Iil1l1)&&(Iil1l1=Iil1l1[0x0]);i1illi=Iil1l1?.['userInfo']?.[IIliI1(0x1c3,'oAm3')]===0x1,i1illl=Iil1l1?.['interestsRuleList']?.[0x0]?.['interestsInfo']?.[IIliI1(0x1ed,'Uj5[')];const {venderCardName:i1i11I,venderCardLogo:il1iIl}=Iil1l1?.[IIliI1(0x1b1,'Y8m]')];if(Iil1l1?.[IIliI1(0x23a,'0^Yr')]&&!i1i11I&&!il1iIl){lI1Ili['log'](IliilI+IIliI1(0x220,'&In@')),i1II1[IIliI1(0x24a,'8q9X')](iIIl11,!![]);return;}!iliII1[IIliI1(0x20a,'&In@')+II11I1]&&(l1l1I1[IIliI1(0x14f,'Kyvf')+I1iIll]=!![],I1lliI[IIliI1(0x1bb,'U%Mw')](IIliI1(0x254,'oc]z')+llIllI),I1ilI1['log'](IIliI1(0x15f,'tq4*')+(Iil1l1?.['shopMemberCardInfo']?.[IIliI1(0x1fc,'NOnc')]||'未知')+'\x0a'));}}}}}}async function concMain(iii1ii=0x1,il1iIi,iii1il,II11li,I1l11i){const il1lI=iii1li,iIIiiI={'xxnKH':function(i1i11i,II11l1,Iil1lI){return i1i11i(II11l1,Iil1lI);},'PZQHa':function(IiiliI){return IiiliI();},'KdxJV':il1lI(0x1a6,'tZCH'),'fLFbK':function(iii1iI,llIll){return iii1iI(llIll);},'tLqUu':function(il1iII,iilli){return il1iII(iilli);},'aGNjJ':function(IlllIl,II11lI){return IlllIl!==II11lI;},'pccFQ':'QgHyJ','kXvnv':function(lI1IIi,I1l11I){return lI1IIi(I1l11I);},'EhIur':function(Ilil1l){return Ilil1l();},'fUBkY':function(iIIiii,iilll){return iIIiii!==iilll;},'fYkya':il1lI(0x25b,'tZCH'),'HCdZw':function(il1iI1,IlllIi,iIIiil){return il1iI1(IlllIi,iIIiil);},'Durdl':function(i1l1Ii,I1iIIi){return i1l1Ii(I1iIIi);},'AXdNW':function(I1iIIl,lI1IIl){return I1iIIl===lI1IIl;},'olxBf':'账号无效'};if($[il1lI(0x1db,'[k38')][il1lI(0x1f5,'Kacj')](II11li))return;const liiI1i=il1iIi[il1lI(0x17a,'i4#d')](i1ilI=>i1ilI),ililIi=iIIiiI[il1lI(0x128,'E)oQ')](decodeURIComponent,common[il1lI(0x17f,'BDrb')](iii1il,'pt_pin')),lilIIl=il1lI(0x175,'Uj5[')+II11li+'】'+ililIi+'：'+($['showPrintId']?venderId+il1lI(0x1c5,'C^rZ'):''),ililIl=notify['create'](II11li,ililIi),liiI1l=await common[il1lI(0x156,'%Tiv')](iii1il);if(!liiI1l&&iIIiiI[il1lI(0x238,'k^05')](typeof liiI1l,il1lI(0x1d9,'48sN'))){console[il1lI(0x219,'](Fl')](lilIIl+il1lI(0x235,'x6D0')),ililIl[il1lI(0x243,'JbfA')](iIIiiI[il1lI(0x1e2,'Z3b0')]),$[il1lI(0x197,'Z3b0')][il1lI(0x12d,'!b6p')](II11li);return;}const i1l1II=common[il1lI(0x255,'Kyvf')](ililIi),i1ill={'cookie':iii1il,'index':II11li,'title':lilIIl,'UA':i1l1II,'message':ililIl};let I1l11l=0x0;async function lilIIi(iii1lI){const IliIIl=il1lI;await iIIiiI[IliIIl(0x1df,'NOnc')](I1l11i,iii1lI,i1ill),I1l11l--,iIIiiI[IliIIl(0x134,'Kyvf')](i1l1Il);}async function i1l1Il(){const I1il1l=il1lI;while(I1l11l<iii1ii&&liiI1i['length']>0x0){if(I1il1l(0x1e4,'SjUB')!==iIIiiI['KdxJV'])l1lIlI=IiiIl1[0x0];else{const Iiilii=liiI1i[I1il1l(0x1bf,'NOnc')]();I1l11l++,await iIIiiI['fLFbK'](lilIIi,Iiilii);}}}const llIli=Math[il1lI(0x155,'Pma^')](liiI1i[il1lI(0x1c0,'%Tiv')],iii1ii),i1i11l=[];for(let Iil1li=0x0;Iil1li<llIli;Iil1li++){const Iiilil=liiI1i['shift']();I1l11l++,i1i11l[il1lI(0x186,'#M^)')](lilIIi(Iiilil));}await Promise[il1lI(0x1ad,'](Fl')](i1i11l),i1l1Il(),await new Promise(Iil1ll=>{const IIliII=il1lI,iillI={'ysQXR':function(lI1III,IIliIi){const lI1l1l=iii1II;return iIIiiI[lI1l1l(0x17e,'t9xZ')](lI1III,IIliIi);},'KJqgD':iIIiiI['pccFQ'],'glkFf':function(IllIiI,i1il1){return IllIiI===i1il1;},'SkYXw':function(I1l111,IIii1l){return iIIiiI['kXvnv'](I1l111,IIii1l);},'fWEAs':function(I1iIII){return iIIiiI['EhIur'](I1iIII);}};if(iIIiiI[IIliII(0x133,'&vka')](IIliII(0x1f8,'#M^)'),iIIiiI[IIliII(0x143,'NOnc')])){const liiI11=iIIiiI['HCdZw'](setInterval,()=>{const iiliI=IIliII;iillI[iiliI(0x1dd,'C^rZ')](iiliI(0x170,'#M^)'),iillI[iiliI(0x1a3,'NOnc')])?iillI[iiliI(0x23f,']vc9')](I1l11l,0x0)&&(iillI['SkYXw'](clearInterval,liiI11),iillI[iiliI(0x157,'#KY*')](Iil1ll)):i1III[iiliI(0x1a7,'^QQ!')]=!![];},0x64);}else try{const i1ili=iIIiiI[IIliII(0x1ec,'i4#d')](II1Il,lilIlI);i1ili>=0x0&&(iii1I1[IIliII(0x19e,'oc]z')]=i1ili);}catch{i1ii[IIliII(0x23c,'%Tiv')]('⚠\x20自定义运行间隔时长设置错误');}});}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
