(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{8312:function(a,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(4186)}])},4186:function(a,i,e){"use strict";e.r(i),e.d(i,{default:function(){return u}});var n=e(7294),t=e(1163),o=e(596),r=e(664);function u(){let a=(0,t.useRouter)(),[i,e]=(0,n.useState)(""),[u,s]=(0,n.useState)(""),[c,l]=(0,n.useState)();(0,n.useEffect)(()=>{let a=async()=>{try{let a=await fetch("https://api.ipify.org?format=json");if(!a.ok)throw Error("Failed to fetch IP");let i=await a.json();s(i.ip);let n=await fetch("https://ipapi.co/".concat(i.ip,"/country_name/"));if(!n.ok)throw Error("Failed to fetch country name");let t=await n.text();console.log(t),e(t)}catch(o){console.error("Error fetching data:",o)}};a()},[]),(0,n.useEffect)(()=>{o.Z.includes(i.trim())&&a.push("/en-gb"),r.Z.includes(i.trim()),a.push("/en-in")})}},664:function(a,i){"use strict";i.Z=["Afghanistan","Australia","Bangladesh","Bhutan","Brunei","Cambodia","China","Fiji","India","Indonesia","Japan","Kiribati","Laos","Malaysia","Maldives","Marshall Islands","Micronesia","Mongolia","Myanmar (Burma)","Nauru","Nepal","New Zealand","North Korea","Pakistan","Palau","Papua New Guinea","Philippines","Samoa","Singapore","Solomon Islands","South Korea","Sri Lanka","Taiwan","Thailand","Timor-Leste","Tonga","Tuvalu","Vanuatu","Vietnam"]},596:function(a,i){"use strict";i.Z=["Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cameroon","Cape Verde","Central African Republic","Chad","Comoros","Democratic Republic of the Congo","Djibouti","Egypt","Equatorial Guinea","Eritrea","Eswatini","Ethiopia","Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Ivory Coast","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Mauritius","Morocco","Mozambique","Namibia","Niger","Nigeria","Republic of the Congo","Rwanda","S\xe3o Tom\xe9 and Pr\xedncipe","Senegal","Seychelles","Sierra Leone","Somalia","South Africa","South Sudan","Sudan","Tanzania","Togo","Tunisia","Uganda","Zambia","Zimbabwe"]},1163:function(a,i,e){a.exports=e(880)}},function(a){a.O(0,[9774,2888,179],function(){return a(a.s=8312)}),_N_E=a.O()}]);