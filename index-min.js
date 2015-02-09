/*! js-object-pretty-print.js 09-02-2015 */
"use strict";module.exports.pretty=function(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;return h=Object.prototype.toString,i={undefined:"undefined",number:"number","boolean":"boolean",string:"string","[object Function]":"function","[object RegExp]":"regexp","[object Array]":"array","[object Date]":"date","[object Error]":"error"},j=function(a){var b=i[typeof a]||i[h.call(a)]||(a?"object":"null");return b},k=function(a,b){var c,d="";for(c=0;b>c;c+=1)d+=a;return d},m=function(a,b){var c,d=[];b+=e;for(c in a)a.hasOwnProperty(c)&&d.push(b+'"'+c+'": '+q(a[c],b));return d.join(g)+f},n=function(a,b){var c,d=[];b+=e;for(c in a)a.hasOwnProperty(c)&&d.push(b+c+": "+q(a[c],b));return d.join(g)+f},o=function(a,b){var c,d=a.length,h=[];for(b+=e,c=0;d>c;c+=1)h.push(q(a[c],b,b));return h.join(g)+f},p=function(a){var b,c;return a=a.toString(),b=new RegExp("function\\s*.*\\s*\\(.*\\)"),c=b.exec(a),c=c?c[0]:"[object Function]",d?a:'"'+c+'"'},q=function(a,b,c){var d;if(d=j(a),c=c||"",-1===r.indexOf(a))switch(d){case"array":return r.push(a),c+"["+f+o(a,b)+b+"]";case"boolean":return c+(a?"true":"false");case"date":return c+'"'+a.toString()+'"';case"number":return c+a;case"object":return r.push(a),c+"{"+f+l(a,b)+b+"}";case"string":return c+'"'+a+'"';case"function":return c+p(a);case"undefined":return c+'"undefined"';default:return a.toString?c+'"'+a.toString()+'"':c+"<<<ERROR>>> Cannot get the string value of the element"}return c+"circular reference to "+a.toString()},a?(void 0===b&&(b=4),c=(c||"print").toLowerCase(),e=k("html"===c?"&nbsp;":" ",b),l="json"===c?m:n,f="html"===c?"<br/>":"\n",g=","+f,r=[],q(a,"")+f):"Error: no Javascript object provided"};