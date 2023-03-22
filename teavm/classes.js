"use strict";
var main;(function($rt_globals){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end
=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData
=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data){var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data){var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data)
{var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data)
{var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data){var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta
={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum
=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache
===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long",
"J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double","D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex)
{throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new $rt_globals.Error("Java exception thrown");if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack
=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for
(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),
dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),
arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,
0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i
+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),
dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1
|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch)
{if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0)
{utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData
=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=
0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName
=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func
=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f){return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,
p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new $rt_globals.DataView(new $rt_globals.ArrayBuffer(8));var $rt_doubleToLongBits;var $rt_longBitsToDouble;if(typeof $rt_globals.BigInt!=='function'){$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,
n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else {$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,
$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){var hi=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n>>$rt_globals.BigInt(32)));var lo=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n&$rt_globals.BigInt(0xFFFFFFFF)));$rt_numberConversionView.setInt32(0,lo,true);$rt_numberConversionView.setInt32(4,hi,true);return $rt_numberConversionView.getFloat64(0,true);};}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n)
{$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,
ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls())
{clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if(typeof $rt_globals.BigInt
!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val, -(val<0)
|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)
<<$rt_globals.BigInt(32));};Long_fromInt=function(val){return $rt_globals.BigInt(val);};Long_fromNumber=function(val){return $rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,
b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass)
{if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.cJ=f;}
function $rt_cls(cls){return Tt(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Fx(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bu.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AGT());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AGU(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(AGV());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BV=$rt_compare;var AGW=$rt_nullCheck;var E=$rt_cls;var S=$rt_createArray;var OH=$rt_isInstance;var AGX=$rt_nativeThread;var AGY=$rt_suspending;var AGZ=$rt_resuming;var AG0=$rt_invalidPointer;var B=$rt_s;var Bl=$rt_eraseClinit;var Bi=$rt_imul;var CX=$rt_wrapException;var AG1=$rt_checkBounds;var AG2=$rt_checkUpperBound;var AG3=$rt_checkLowerBound;var AG4=$rt_wrapFunction0;var AG5=$rt_wrapFunction1;var AG6=$rt_wrapFunction2;var AG7=$rt_wrapFunction3;var AG8=$rt_wrapFunction4;var F=$rt_classWithoutFields;var G
=$rt_createArrayFromData;var Sq=$rt_createCharArrayFromData;var AFK=$rt_createByteArrayFromData;var AG9=$rt_createShortArrayFromData;var EA=$rt_createIntArrayFromData;var AG$=$rt_createBooleanArrayFromData;var AG_=$rt_createFloatArrayFromData;var AHa=$rt_createDoubleArrayFromData;var WR=$rt_createLongArrayFromData;var AHb=$rt_createBooleanArray;var C9=$rt_createByteArray;var AHc=$rt_createShortArray;var BS=$rt_createCharArray;var BU=$rt_createIntArray;var AGy=$rt_createLongArray;var Vw=$rt_createFloatArray;var AHd
=$rt_createDoubleArray;var BV=$rt_compare;var AHe=$rt_castToClass;var AHf=$rt_castToInterface;var AHg=Long_toNumber;var X=Long_fromInt;var AHh=Long_fromNumber;var BQ=Long_create;var Dl=Long_ZERO;var AHi=Long_hi;var EM=Long_lo;
function C(){this.$id$=0;}
function AHj(){var a=new C();Um(a);return a;}
function Um(a){}
function Di(a){return Tt(a.constructor);}
function WH(a){var b,c,d,e,f,g,h,i,j;b=Qt(a);if(!b)c=B(0);else{d=(((32-JP(b)|0)+4|0)-1|0)/4|0;e=BS(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Fs(b>>>g&15,16);g=g-4|0;h=i;}c=Fx(e);}j=new O;Q(j);H(H(j,B(1)),c);return P(j);}
function Qt(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ZM(a){var b,c,d;if(!OH(a,DO)&&a.constructor.$meta.item===null){b=new Ov;U(b);J(b);}b=VC(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Mj(){var a=this;C.call(a);a.m$=0;a.kT=null;}
function AFY(b){var c,d,e,f,g,h,i,j,k;UI();Uk();QI();TQ();RW();S5();RU();TC();Su();T9();Ri();Qy();U4();TG();SF();R0();Rk();Sg();Si();Up();QS();U2();RN();Rv();U_();c=(QV()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))KS(B(2),B(3));else{d=new Mj;Hm(d);e=new Nv;e.lS=d;f=new JS;c=new $rt_globals.Worker("teavm/worker.js");g=new Qd;g.ij=c;g.ii=e;g.ih=f;e=Bh(g,"f");c.onmessage=e;b=S(Im,4).data;b[0]=Ha(B(4),B(5),400);b[1]=Ha(B(6),B(7),400);b[2]=
Ha(B(8),B(5),700);b[3]=Ha(B(9),B(7),700);g=new $rt_globals.Array();h=b.length;i=0;while(i<h){c=b[i];e=c.lC;f=c.kR;j=new O;Q(j);BJ(H(H(j,B(10)),f),41);j=P(j);f=c.kN;k=c.jL;c=Yo($rt_ustr(f),k);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(j),c)).load();g.push(c);i=i+1|0;}e=$rt_globals.Promise.all(g);Hm(d);c=new Nw;c.ms=d;g=new Nu;e.then(Bh(c,"f"),Bh(g,"f"));}}
function SI(b){var c,d,e,f,g,h,i,j,k,l;c=new M3;d=new LB;e=new Ot;e.jF=c;c.ln=e;f=new Oq;f.nj=c;c.nq=f;g=new Lh;g.fa=ACv();h=S(CE,0);g.mF=h;g.di=h;g.g2=1;g.fH=0;g.cl=f;c.hC=g;g=new Or;g.ld=c;c.mz=new $rt_globals.ResizeObserver(Bh(g,"f"));e=new Oo;e.jk=c;c.iJ=e;c.fe=1;c.hU=ACv();c.kz=b;g=new Op;g.mH=c;e=Bh(g,"f");b.onmessage=e;e=SE();b.postMessage(e);c.iD=(DW()).getElementById("canvasDiv");i=QV();b=0;i.tabIndex=b;g=i.style;g.setProperty("width","100%");g.setProperty("height","100%");g.setProperty("outline","none");c.ci
=i;AB5(c.mz,i,VF());b=c.iD;i=c.ci;b.appendChild(i);e=c.ci;g=ABd(!!0,!!0,!!1,!!1);b=e.getContext("webgl2",g);if(b===null)KS(B(2),B(11));else{c.lD=AGx(c.ci,c.hC);i=new On;e=c.nq;g=new NP;i.cD=new Bw;i.dm=0;i.kW=g;f=$rt_str(b.getParameter(7938));j=new O;Q(j);H(H(j,B(12)),f);$rt_globals.console.info($rt_ustr(P(j)));i.bh=b;i.cp=I4(g,4,4);i.fd=ABk(b);i.o9=HG(f,B(13));g=new Lv;g.cK=b;i.l5=g;h=S(C6,6);k=h.data;g=new OJ;G5();Ig(g,b,B(14),B(15),AHk);f=g.bs;g.mG=b.getUniformLocation(f,"uColor");i.fZ=g;k[0]=g;g=AE1(b,B(16));i.pz
=g;k[1]=g;g=new LO;Ig(g,b,B(14),B(17),AHk);i.pk=g;k[2]=g;g=new Oa;Ny(g,b,B(18));j=g.bs;g.ol=b.getUniformLocation(j,"uContrast");i.ow=g;k[3]=g;g=AFv(b);i.dY=g;k[4]=g;g=AGs(b);i.eM=g;k[5]=g;i.pq=h;Pw(b,B(19));i.pl=new NO;i.oU=e;c.dW=i;e=$rt_globals.window;i=c.iJ;e.addEventListener("resize",Bh(i,"handleEvent"));c.du=R5(d,AFS(c.dW,c.hC,c));l=GU(c);$rt_globals.console.info("time start: "+l);Ng(c);}TY(c);}
var Jq=F(0);
var I2=F(0);
function OU(){var a=this;C.call(a);a.gy=null;a.c_=null;}
function Tt(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new OU;c.c_=b;d=c;b.classObject=d;}return c;}
function Q3(a){return a.c_;}
function Mu(a){if(a.gy===null)a.gy=$rt_str(a.c_.$meta.name);return a.gy;}
function FU(a){return a.c_.$meta.primitive?1:0;}
function F8(a){return Tt(a.c_.$meta.item);}
var Rq=F();
function Bh(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function H3(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Rb=F();
function VC(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Tv(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Tv(d[e],c))return 1;e=e+1|0;}return 0;}
function AAM(b){var c='$$enumConstants$$';E$[c]=VO;CW[c]=Vv;Fc[c]=S0;EP[c]=T0;Ec[c]=Y4;B3[c]=Nd;CY[c]=Vt;AAM=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return AAM(b);}
var Cw=F(0);
var Cs=F(0);
var Gy=F(0);
function Bq(){var a=this;C.call(a);a.bu=null;a.e0=0;}
var AHl=null;function Fx(a){var b=new Bq();GP(b,a);return b;}
function G9(a,b,c){var d=new Bq();Qg(d,a,b,c);return d;}
function GP(a,b){var c,d,e,f;b=b.data;c=b.length;d=BS(c);e=d.data;a.bu=d;f=0;while(f<c){e[f]=b[f];f=f+1|0;}}
function Qg(a,b,c,d){var e,f,g;e=BS(d);f=e.data;a.bu=e;g=0;while(g<d){f[g]=b.data[g+c|0];g=g+1|0;}}
function K(a,b){var c,d;if(b>=0){c=a.bu.data;if(b<c.length)return c[b];}d=new Fq;U(d);J(d);}
function M(a){return a.bu.data.length;}
function EX(a){return a.bu.data.length?0:1;}
function NL(a,b,c){var d,e,f;if((c+M(b)|0)>M(a))return 0;d=0;while(d<M(b)){e=K(b,d);f=c+1|0;if(e!=K(a,c))return 0;d=d+1|0;c=f;}return 1;}
function HG(a,b){if(a===b)return 1;return NL(a,b,0);}
function Gd(a,b,c){var d,e,f,g,h;d=Bm(0,c);if(b<65536){e=b&65535;while(true){f=a.bu.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=F5(b);h=Gt(b);while(true){f=a.bu.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function FB(a,b,c){var d,e,f,g,h;d=Bf(c,M(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bu.data[d]==e)break;d=d+(-1)|0;}return d;}f=F5(b);g=Gt(b);while(true){if(d<1)return (-1);h=a.bu.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function RL(a,b,c){var d,e,f;d=Bm(0,c);e=M(a)-M(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=M(b))break a;if(K(a,d+f|0)!=K(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function Ct(a,b,c){var d;if(b<=c)return G9(a.bu,b,c-b|0);d=new Bn;U(d);J(d);}
function D9(a,b){return Ct(a,b,M(a));}
function EN(a,b){var c,d,e,f,g,h;if(EX(b))return a;c=BS(M(a)+M(b)|0);d=c.data;e=0;f=0;while(f<M(a)){g=e+1|0;d[e]=K(a,f);f=f+1|0;e=g;}g=0;while(g<M(b)){h=e+1|0;d[e]=K(b,g);g=g+1|0;e=h;}return Fx(c);}
function WG(a){return a;}
function F2(a){var b,c,d,e,f;b=a.bu.data;c=BS(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function CL(b){var c;c=new O;Q(c);return P(V(c,b));}
function Cq(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bq))return 0;c=b;if(M(c)!=M(a))return 0;d=0;while(d<M(c)){if(K(a,d)!=K(c,d))return 0;d=d+1|0;}return 1;}
function Tw(a){var b,c,d,e;a:{if(!a.e0){b=a.bu.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.e0=(31*a.e0|0)+e|0;d=d+1|0;}}}return a.e0;}
function UI(){AHl=new JW;}
function EZ(){var a=this;C.call(a);a.lZ=null;a.kE=null;a.fA=0;a.fW=0;}
function AHm(){var a=new EZ();U(a);return a;}
function AHn(a){var b=new EZ();Bb(b,a);return b;}
function U(a){a.fA=1;a.fW=1;}
function Bb(a,b){a.fA=1;a.fW=1;a.lZ=b;}
function Ya(a){return a;}
var DD=F(EZ);
var Ft=F(DD);
var Sm=F(Ft);
var CT=F();
function D3(){CT.call(this);this.fS=0;}
var AHo=null;var AHp=null;function UA(a){var b=new D3();He(b,a);return b;}
function He(a,b){a.fS=b;}
function GY(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!EX(b)){a:{d=0;e=0;switch(K(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==M(b)){b=new CF;U(b);J(b);}while(e<M(b)){g=e+1|0;h=KM(K(b,e));if(h<0){i=new CF;j=new O;Q(j);H(H(j,B(20)),b);Bb(i,P(j));J(i);}if(h>=c){i=new CF;j=new O;Q(j);H(H(V(H(j,B(21)),c),B(22)),b);Bb(i,P(j));J(i);}f=Bi(c,f)+h|0;if(f<0){if(g==M(b)&&f==(-2147483648)&&d)return (-2147483648);i=new CF;j=new O;Q(j);H(H(j,B(23)),b);Bb(i,P(j));J(i);}e=g;}if(d)f= -f|0;return f;}b
=new CF;Bb(b,B(24));J(b);}b=new CF;i=new O;Q(i);V(H(i,B(25)),c);Bb(b,P(i));J(b);}
function GX(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AHp===null){AHp=S(D3,256);c=0;while(true){d=AHp.data;if(c>=d.length)break a;d[c]=UA(c-128|0);c=c+1|0;}}}return AHp.data[b+128|0];}return UA(b);}
function Iy(a){var b;b=a.fS;return (JH(AGF(20),b,10)).bC();}
function JP(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function Gg(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Mv(a,b){return BV(a.fS,b.fS);}
function Uk(){AHo=E($rt_intcls());}
function EQ(){var a=this;C.call(a);a.n=null;a.x=0;}
function AHq(){var a=new EQ();Q(a);return a;}
function AGF(a){var b=new EQ();Ex(b,a);return b;}
function Q(a){Ex(a,16);}
function Ex(a,b){a.n=BS(b);}
function JH(a,b,c){return Sz(a,a.x,b,c);}
function Sz(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)BN(a,b,b+1|0);else{BN(a,b,b+2|0);f=a.n.data;g=b+1|0;f[b]=45;b=g;}a.n.data[b]=Fs(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Bi(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;BN(a,b,b+i|0);if(e)e=b;else{f=a.n.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.n.data;b=e+1|0;f[e]=Fs(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function Tk(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BV(c,0.0);if(!d){BN(a,b,b+3|0);e=a.n.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){BN(a,b,b+4|0);e=a.n.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){BN(a,b,b+3|0);e=a.n.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){BN(a,b,b+8|0);d=b;}else{BN(a,b,b+9|0);e=a.n.data;d=b+1|0;e[b]=45;}e=a.n.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AHr;Tb(c,f);d=f.gI;g=f.gt;h=f.i6;i=1;j=1;if(h)j=2;k=9;l=AC1(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bm(k,i+1|0);g=0;}else{d=d/AHs.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;BN(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.n.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.n.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.n.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function RF(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BV(c,0.0);if(!d){BN(a,b,b+3|0);e=a.n.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){BN(a,b,b+4|0);e=a.n.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){BN(a,b,b+3|0);e=a.n.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){BN(a,b,b+8|0);d=b;}else{BN(a,b,b+9|0);e=a.n.data;d=b+1|0;e[b]=45;}e=a.n.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AHt;SC(c,f);g=f.hi;h=f.gi;i=f.iS;j=1;k=1;if(i)k=2;l=18;m=ABw(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bm(l,j+1|0);h=0;}else{g=Cd(g,AHu.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;BN(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.n.data;k=b+1|0;e[b]=45;}n=BQ(1569325056, 23283064);o=0;while(o<l){if(FQ(n,Dl))d=0;else{d=EM(Cd(g,n));g=
GM(g,n);}e=a.n.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Cd(n,X(10));o=o+1|0;}if(h){e=a.n.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function AC1(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ABw(b){var c,d,e,f,g;c=X(1);d=0;e=16;f=AHv.data;g=f.length-1|0;while(g>=0){if(EJ(GM(b,Bz(c,f[g])),Dl)){d=d|e;c=Bz(c,f[g]);}e=e>>>1;g=g+(-1)|0;}return d;}
function BJ(a,b){return a.h0(a.x,b);}
function PI(a,b,c){BN(a,b,b+1|0);a.n.data[b]=c;return a;}
function G2(a,b){var c,d;c=a.n.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bm(b,Bm(c*2|0,5));a.n=QQ(a.n,d);}
function P(a){return G9(a.n,0,a.x);}
function Pr(a,b,c,d){return a.hz(a.x,b,c,d);}
function Jm(a,b,c,d,e){var f,g,h,i;BN(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.n.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Gi(a,b){return a.gP(b,0,b.data.length);}
function BN(a,b,c){var d,e,f,g;d=a.x;e=d-b|0;a.eW((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.n.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.x=a.x+(c-b|0)|0;}
var FW=F(0);
var O=F(EQ);
function Gs(){var a=new O();AD3(a);return a;}
function AD3(a){Q(a);}
function H(a,b){IN(a,a.x,b===null?B(26):b.bC());return a;}
function BH(a,b){IN(a,a.x,b);return a;}
function V(a,b){JH(a,b,10);return a;}
function ER(a,b){Tk(a,a.x,b);return a;}
function K7(a,b){RF(a,a.x,b);return a;}
function Hq(a,b){var c,d,e,f,g;c=0;d=M(b);e=a.x;if(c<=d&&d<=M(b)){BN(a,e,(e+d|0)-c|0);while(c<d){f=a.n.data;g=e+1|0;f[e]=K(b,c);c=c+1|0;e=g;}return a;}b=new Bn;QD(b);J(b);}
function FF(a,b){IN(a,a.x,!b?B(27):B(28));return a;}
function UP(a,b,c){var d,e,f,g,h,i;d=BV(b,c);if(d<=0){e=a.x;if(b<=e){if(d){f=e-c|0;a.x=e-(c-b|0)|0;g=0;while(g<f){h=a.n.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Fq;U(i);J(i);}
function OG(a,b){var c,d,e,f;if(b>=0){c=a.x;if(b<c){c=c-1|0;a.x=c;while(b<c){d=a.n.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Fq;U(f);J(f);}
function ZH(a,b,c,d,e){Jm(a,b,c,d,e);return a;}
function XG(a,b,c,d){Pr(a,b,c,d);return a;}
function Q4(a){return a.x;}
function CG(a){return P(a);}
function ZK(a,b){G2(a,b);}
function Z1(a,b,c){PI(a,b,c);return a;}
function IN(a,b,c){var d,e,f;if(b>=0&&b<=a.x){a:{if(c===null)c=B(26);else if(EX(c))break a;G2(a,a.x+M(c)|0);d=a.x-1|0;while(d>=b){a.n.data[d+M(c)|0]=a.n.data[d];d=d+(-1)|0;}a.x=a.x+M(c)|0;d=0;while(d<M(c)){e=a.n.data;f=b+1|0;e[b]=K(c,d);d=d+1|0;b=f;}}return a;}c=new Fq;U(c);J(c);}
var DR=F(Ft);
var Tz=F(DR);
function AHw(a){var b=new Tz();WO(b,a);return b;}
function WO(a,b){Bb(a,b);}
var Sc=F(DR);
function AHx(a){var b=new Sc();W2(b,a);return b;}
function W2(a,b){Bb(a,b);}
var C1=F(EZ);
var Bg=F(C1);
function AHy(){var a=new Bg();QD(a);return a;}
function AGU(a){var b=new Bg();ADH(b,a);return b;}
function QD(a){U(a);}
function ADH(a,b){Bb(a,b);}
var Nq=F(0);
var Cf=F(0);
function D_(b,c){if(b!==null)b.gw();return c;}
var KI=F(0);
function Gp(){var a=this;C.call(a);a.hI=0;a.g3=0;}
var AHz=0;function PO(a){AHz=AHz-1|0;}
function FC(a,b,c){GO(a,Rz(b,c,400,0));}
function Me(){var a=this;Gp.call(a);a.fY=null;a.M=null;a.iy=null;}
function Dt(a){var b,c,d;b=a.M;c=a.hI;d=a.g3;b.clearRect(0.0,0.0,c,d);}
function ME(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.M;d="center";c.textAlign=d;break a;case 2:c=a.M;d="right";c.textAlign=d;break a;default:break a;}d=a.M;c="left";d.textAlign=c;}}
function DB(a,b){GO(a,b.iM);}
function GO(a,b){var c;if(!(a.iy==b?1:0)){c=a.M;a.iy=b;c.font=b;}}
function Rz(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function CK(a,b,c,d){var e,f,g;e=a.M;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function NT(a,b){var c,d;if(!b){c=a.M;d="alphabetic";c.textBaseline=d;}else{d=a.M;c="top";d.textBaseline=c;}}
function Eo(a,b){var c;c=$rt_ustr(b);return a.M.measureText(c).width;}
function NJ(a,b,c,d){var e,f;e=a.M;f=$rt_ustr(Fx(Sq([35,E4(b/16|0),E4(b%16|0),E4(c/16|0),E4(c%16|0),E4(d/16|0),E4(d%16|0)])));e.fillStyle=f;}
function UY(a){return $rt_str(a.M.font);}
var QJ=F();
var Uy=F();
function Hm(b){if(b!==null)return b;b=new F9;Bb(b,B(29));J(b);}
var Bp=F(0);
function Nv(){C.call(this);this.lS=null;}
var Bt=F(0);
var SO=F();
var QN=F(0);
function Ha(b,c,d){var e;e=new Im;b=EN(B(30),b);e.lC=B(31);e.kR=b;e.kN=c;e.jL=d;return e;}
var Rm=F();
function Yo(b,c){return {style:b,weight:c};}
var BX=F(0);
function Nw(){C.call(this);this.ms=null;}
function Vf(a,b){var c,d,e;c=a.ms;d=0;while(d<b.length){e=b[d];(DW()).fonts.add(e);d=d+1|0;}c.m$=1;b=c.kT;if(b!==null)SI(b);}
var Nu=F();
function ADq(a,b){$rt_globals.console.info("font load error"+b);}
var T8=F();
var RZ=F();
function KS(b,c){var d,e,f;d=(DW()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(DW()).getElementById($rt_ustr(b)).appendChild(d);}
function QV(){return (DW()).createElement("canvas");}
function ABd(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var U$=F();
var JS=F();
function ABM(a,b){var c;c=new Bg;Bb(c,$rt_str(b.message));J(c);}
var OA=F();
function Fb(b){return $rt_str(b);}
function Im(){var a=this;C.call(a);a.lC=null;a.kR=null;a.kN=null;a.jL=0;}
var G_=F(0);
var R9=F();
function AEn(a,b){return a.nZ(b);}
function WU(a){return a.pa();}
var Sx=F();
var IE=F(0);
var JW=F();
var Co=F();
var AHA=null;var AHB=null;var AHC=null;var AHD=null;var AHE=null;var AHF=null;var AHG=null;var AHH=null;var AHI=null;var AHJ=null;function Pm(b){var c,d;c=new Bq;d=BS(1);d.data[0]=b;GP(c,d);return c;}
function Iw(b){return b>=65536&&b<=1114111?1:0;}
function B$(b){return (b&64512)!=55296?0:1;}
function Cn(b){return (b&64512)!=56320?0:1;}
function IA(b){return !B$(b)&&!Cn(b)?0:1;}
function Fy(b,c){return B$(b)&&Cn(c)?1:0;}
function Do(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function F5(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Gt(b){return (56320|b&1023)&65535;}
function DQ(b){return E2(b)&65535;}
function E2(b){if(AHD===null){if(AHG===null)AHG=TK();AHD=Sk((AHG.value!==null?$rt_str(AHG.value):null));}return MV(AHD,b);}
function Dv(b){return E1(b)&65535;}
function E1(b){if(AHC===null){if(AHH===null)AHH=Ul();AHC=Sk((AHH.value!==null?$rt_str(AHH.value):null));}return MV(AHC,b);}
function MV(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BV(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function N5(b,c){if(c>=2&&c<=36){b=KM(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function KM(b){var c,d,e,f,g,h,i,j,k,l;if(AHB===null){if(AHI===null)AHI=So();c=(AHI.value!==null?$rt_str(AHI.value):null);d=ACn(F2(c));e=G8(d);f=BU(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Jr(d)|0;j=j+Jr(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AHB=f;}g=AHB.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BV(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Fs(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function EV(b){var c;if(b<65536){c=BS(1);c.data[0]=b&65535;return c;}return Sq([F5(b),Gt(b)]);}
function B0(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&IA(b&65535))return 19;if(AHE===null){if(AHJ===null)AHJ=U5();d=(AHJ.value!==null?$rt_str(AHJ.value):null);e=S(JE,16384);f=e.data;g=C9(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<M(d)){m=HH(K(d,l));if(m==64){l=l+1|0;m=HH(K(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bi(c,HH(K(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=HH(K(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=Yg(k,k+i|0,Ph(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=Yg(k,k+i|0,Ph(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AHE=CV(e,j);}e=AHE.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.k4)o=p+1|0;else{c=d.jT;if(b>=c)return d.j2.data[b-c|0];c=p-1|0;}}return 0;}
function GV(b){a:{switch(B0(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function ES(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return B0(b)!=16?0:1;}
function La(b){switch(B0(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function LV(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return La(b);}return 1;}
function QI(){AHA=E($rt_charcls());AHF=S(Co,128);}
function TK(){return {"value":"}U  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# \'%# #,%#L}p#LJd(# *T5F#U TUg#r {%g#r Zvk%F# *J#F#b o@5F#b Jo=N#f "};}
function Ul(){return {"value":"yW  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'\' #\'# mGDr# Yiejg# e*5H#U eUi#r {%i#r .xm%:# RH#H#b o@5H#b No=P#f "};}
function So(){return {"value":"{?*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%slG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%sTEG%%%%%%%%%%%%%%%%%%&5G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%VR#G%%%%%%%%%%%%%"
+"%%%%%"};}
function U5(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91 Y#FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,AVF6 F)A6G01GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F# F#A#\' "
+"I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A)\')A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A$&G$I% G$ G%A(G# F$A&F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A(& F#G#A#J+ F#A.G#I# F) F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\'A#I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G\'A#J+A#F%AA&^$Y0=9^$G#^\'J+L+=\'=\'=\'6767"
+"I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F. F%G$A,F3G$Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1 J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(AcG%)FP\')G&)\'I&\'I#F(A%J+Y(^+G*^*A$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%FEI)G)I#G#A$Y&"
+"J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFG[ G&!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[AA1G.H%\'H$G-A0^#"
+"!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^AA#b=I! BP CP !#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y+U#Y%"
+"596Y.AQ^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+F<A&^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b UG!&A+^b&b   %b O(!&A1F6%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#A#!#B$AQ&E##F(\'F$\'F%\'F8I#G#)^%A%L\'^#;=A\'FUY%A)I#F"
+"SI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C)A)b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]1A2b&L& 76A1FbA#FWAIF-;=A#G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0"
+"A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^-A%=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9b 1# b&X% A*F7A+F)b 9# F\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@b !# F>L+&A)F7G,L%Y&b \'# F8A*)\')FVG0Y(A%L5J+A0G$)FNI$G%I#G#Y#1Y%A,1A#F:A(J+A\'G$FEG&)G) J+Y%&I#A*FD\'Y#&A*G#)FQI$G*I#F%Y%G%9A#J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'AcF( & F% F0 F+"
+"9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+ 9 9\'&AAFQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&A(J+AWF<A#G$I#G%)G&A%J+L#Y$=b  $ FMI$G*)G#9b E! BACAJ+L*A-&b A# F)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A>FZb (% F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#b ($ L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b ^K b&P1  Q*b (a b&(* b Z\'#b&Z) A(F"
+"@ J+A%Y#b A! F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%A=&b W@!&A)b&T, b .5#b&@% ARF$A2F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =.!b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^]A8^dG$=b ;# L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 16 G( G2A#G( G# G&b 6$ FNA$G(E(A#J+A%&=b Q& FMG%J+A&;b  5 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN="
+"L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.A$b=>! A$^_AZ^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=7, A+^.A$^,A&b=U! A-b=:! A(^-A5^-A%^YA)^+A\'^IA)^?b 3! ^- b=F!  ^%A$^JA#^\'A$^>A#b=(# A-^/A#^%A%^$A&^$A.^\'b K6 &b   %b   %b 6<#&AJ&b T !&A,&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
+"%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b D8 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
var IW=F(0);
var MU=F(0);
var Dg=F(0);
var Ux=F(0);
function DW(){return $rt_globals.window.document;}
var F9=F(Bg);
function Qd(){var a=this;C.call(a);a.ij=null;a.ii=null;a.ih=null;}
function AB7(a,b){var c,d,e;c=a.ij;d=a.ii;e=a.ih;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=d.lS;b.kT=c;if(b.m$)SI(c);}}
var K5=F(0);
var L8=F(0);
var LZ=F(0);
var No=F(0);
var Pu=F(0);
var N6=F(0);
var Kw=F(0);
var QM=F();
function ZX(a,b,c){a.tG($rt_str(b),H3(c,"handleEvent"));}
function AAb(a,b,c){a.rZ($rt_str(b),H3(c,"handleEvent"));}
function V5(a,b){return a.nZ(b);}
function AA6(a,b,c,d){a.qN($rt_str(b),H3(c,"handleEvent"),d?1:0);}
function ADF(a,b){return !!a.tL(b);}
function WX(a){return a.pa();}
function VB(a,b,c,d){a.sL($rt_str(b),H3(c,"handleEvent"),d?1:0);}
var Bn=F(Bg);
var Fq=F(Bn);
var RI=F();
function SE(){return "ping";}
var Kv=F(0);
function M3(){var a=this;C.call(a);a.ln=null;a.nq=null;a.hC=null;a.iD=null;a.ci=null;a.mz=null;a.iJ=null;a.lD=null;a.dW=null;a.fe=0;a.oB=0;a.kY=null;a.du=null;a.kz=null;a.hU=null;a.lV=0;}
function TY(a){a.ci.focus();}
function Ng(a){a.oB=$rt_globals.requestAnimationFrame(Bh(a.ln,"onAnimationFrame"));}
function G1(a){a.fe=1;}
function HD(a,b){var c,d,e;c=a.kY;d=a.ci;if(b===c?1:b!==null?Cq(b,c):c!==null?0:1)b=c;else{e=d.style;if(b!==null&&M(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.kY=b;}
function GU(a){return $rt_globals.performance.now()/1000.0;}
function Mq(a){return $rt_globals.window.devicePixelRatio;}
function Il(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))UV(b,1);else{c=new Pa;d=$rt_globals.window.showDirectoryPicker();e=new O_;e.jW=b;e.jX=c;d.then(Bh(e,"f"),Bh(c,"f"));}}
function Ip(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))UV(b,0);else{c=new PG;d=$rt_globals.window.showOpenFilePicker();e=new PF;e.km=b;e.kl=c;d.then(Bh(e,"f"),Bh(c,"f"));}}
function DL(a,b,c,d){var e,f,g,h,i,j;d=d.data;e=a.lV+1|0;a.lV=e;Qe(a.hU,GX(e),b);b=a.kz;f=d.length;g=new $rt_globals.Array(f+2|0);h=e;g[0]=h;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();j=0;while(j<f){c=d[j];if(c instanceof Bq)h=$rt_ustr(c);else if(OH(c,$rt_arraycls($rt_bytecls())))h=c.data.buffer;else if(OH(c,$rt_arraycls($rt_charcls())))h=c.data.buffer;else if(OH(c,$rt_arraycls($rt_intcls())))h=c.data.buffer;else{if(!(c instanceof HU)){b=new BF;U(b);J(b);}c=c;h=c.e1;if(h===null)h=c.dT;}g[j+2|0]=h;if(h instanceof $rt_globals.ArrayBuffer
?1:0)i.push(h);j=j+1|0;}b.postMessage(g,i);}
var EW=F(0);
var LB=F();
function R5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=$rt_str($rt_globals.window.location.hash);d=new O;Q(d);H(H(d,B(32)),c);$rt_globals.console.info($rt_ustr(P(d)));e=(-1);switch(Tw(c)){case -1154586189:if(!Cq(c,B(33)))break a;e=6;break a;case 35879733:if(!Cq(c,B(34)))break a;e=1;break a;case 35965255:if(!Cq(c,B(35)))break a;e=2;break a;case 118575160:if(!Cq(c,B(36)))break a;e=3;break a;case 439468109:if(!Cq(c,B(37)))break a;e=5;break a;case 557010394:if(!Cq(c,B(38)))break a;e=4;break a;default:}}b:{switch(e)
{case 1:break;case 2:d=new Ju;Eh(d,b);b=$rt_globals.fetch("test.wasm");f=new JC;b=b.then(Bh(f,"f"));f=new JA;b=b.then(Bh(f,"f"));f=new Jz;g=new Jy;b.then(Bh(f,"f"),Bh(g,"f"));break b;case 3:d=new KF;Eh(d,b);d.oC=20;d.pT=11;d.oj=220;d.fx=new Bw;d.oX=5000;d.ef=1;d.dw=G(Ps,[F1(0),F1(255)]);d.cG=b.c7;b=b.db;c=new LQ;c.eP=d;h=new ON;h.nk=c;c.jD=h;D5(b,c);b=Dc(d.cG,200,220);d.gc=b;FC(b,B(39),20.0);b=Dc(d.cG,200,20);d.dq=b;FC(b,B(39),20.0);d.eZ=JQ();break b;case 4:d=new K1;Eh(d,b);d.dS=AAk();d.cx=0;d.lu=500;d.m2=Rf(0);d.hS
=20;d.nb=20;d.jC=Un();c=b.db;h=new OV;h.eB=d;f=new Qf;f.lm=h;h.k0=f;D5(c,h);b=b.c7;d.cX=b;Np(d.dS,Jg(b,B(39),d.nb),d.hS,d.cX);d.en=JQ();break b;case 5:d=new LT;LY(d,b);D5(b.db,d);break b;case 6:d=AGn(b);break b;default:d=new L6;Eh(d,b);d.jd=Rf(0);d.m0=new Bw;d.hD=new Bw;d.jA=b.c7;c=new Ls;h=AGB(1,3);i=ADK(h);j=i.data;k=Zj();l=j.length;m=l/5|0;l=l*2|0;n=S(Ca,1000);j=n.data;o=0;while(o<1000){j[o]=C4(XD(i,k,m,l,h));o=o+1|0;}RD(c,n);d.bT=AGj(b,c);b=b.db;c=new L2;c.cs=d;D5(b,c);break b;}d=AE4(b);}return d;}
var BZ=F(0);
var R_=F();
var L5=F(0);
function Ot(){C.call(this);this.jF=null;}
function Y5(a,b){var c,d;c=b;b=a.jF;if(!(!b.du.dp(c/1000.0)&&!b.fe)){d=b.dW.cD;if(Bi(d.c,d.d)){b.fe=0;b.du.cz();}}Ng(b);}
function Oq(){C.call(this);this.nj=null;}
function CU(a){G1(a.nj);}
var GI=F();
function D5(a,b){var c,d,e;a.g2=0;a.di=a.mF;a.fH=a.fH+1|0;c=GX(0);d=Ib(a.fa,c);e=d===null?null:d.dQ;d=a.fa;if(e!==null)e=TO(e,b);else{e=S(CE,1);e.data[0]=b;}Qe(d,c,e);c=new Pj;c.oy=a;c.oz=0;c.ox=b;return c;}
function Lh(){var a=this;GI.call(a);a.cl=null;a.fa=null;a.mF=null;a.di=null;a.g2=0;a.fH=0;}
function CR(a){var b,c,d,e,f,g,h,i,j,k;if(a.g2)return a.di;b=a.di.data.length;c=a.fH;if(b!=c)a.di=S(CE,c);b=0;d=a.fa;if(d.gB===null){e=new OB;e.mN=d;d.gB=e;}d=d.gB.mN;if(d.gk===null){e=new Ly;f=null;g=null;e.o1=(-1);e.cr=d;e.fN=f;e.h5=1;e.hO=0;e.fK=g;e.f6=1;e.hj=0;e.le=0;d.gk=e;}g=d.gk;if(g.le){h=!g.hj?OK(g.cr,1):!g.f6?Ka(g.cr,g.fK,1):Qa(g.cr,g.fK,1);e=YK(g.cr,h,g.fN,g.h5,g.hO,1);}else{h=!g.hO?OK(g.cr,0):!g.h5?Ka(g.cr,g.fN,0):Qa(g.cr,g.fN,0);e=YK(g.cr,h,g.fK,g.hj,g.f6,0);}while(true){c=e.cZ;if(!(c<=0?0:1))break;if
(e.jV!=e.h4.ed){d=new Iq;U(d);J(d);}if(!c){d=new Qb;U(d);J(d);}a:{h=e.fT.data;c=c-1|0;e.cZ=c;d=h[c];e.jx=d;d=GL(d,e.fF);if(d!==null)while(true){if(d===null)break a;h=e.fT.data;i=e.cZ;e.cZ=i+1|0;h[i]=d;d=Ga(d,e.fF);}}L0(e);h=e.jx.dQ;j=h.data;k=a.di;i=j.length;Df(h,0,k,b,i);b=b+i|0;}return a.di;}
function Nz(a,b){var c,d,e;CU(a.cl);c=(CR(a)).data;d=c.length;e=0;a:{while(true){if(e>=d)break a;if(c[e].d7(b))break;if(b.iZ)break a;e=e+1|0;}return 1;}return 0;}
function H_(a,b,c,d,e){var f,g,h;CU(a.cl);f=(CR(a)).data;g=f.length;h=0;while(h<g){if(f[h].eV(b,c,d,e))return 1;h=h+1|0;}return 0;}
function LP(a,b,c){var d,e,f;CU(a.cl);d=(CR(a)).data;e=d.length;f=0;while(f<e){if(d[f].h3(b,c))return 1;f=f+1|0;}return 0;}
var Lw=F(0);
function Or(){C.call(this);this.ld=null;}
function XR(a,b,c){var d,e,f,g,h,i,j,k,l;c=a.ld;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.ci){if(!("devicePixelContentBoxSize" in f?1:0)){f.contentRect;c=new D6;Bb(c,B(40));J(c);}if(f.devicePixelContentBoxSize.length==1){g=f.devicePixelContentBoxSize[0];h=g.inlineSize|0;i=g.blockSize|0;c.lD.ce=CB(h,i);g=c.ci;j=h;g.width=j;g=c.ci;j=i;g.height=j;g=c.dW;BE(g.cD,h,i);j=g.bh;g=g.cD;k=g.c;l=g.d;j.viewport(0,0,k,l);c.du.dz(c.dW.cD,Mq(c));c.du.cz();}}d=d+1|0;}}
var UC=F();
function VF(){return {box:'device-pixel-content-box'};}
function AB5(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var BP=F(0);
function Oo(){C.call(this);this.jk=null;}
function ABT(a,b){b=a.jk;b.du.dz(b.dW.cD,Mq(b));b.du.cz();}
var HT=F(0);
function G$(){C.call(this);this.gB=null;}
var DO=F(0);
var PJ=F(0);
var Jp=F(0);
function Rn(){var a=this;G$.call(a);a.co=null;a.dC=null;a.pn=null;a.ed=0;a.gk=null;}
function ACv(){var a=new Rn();Wi(a);return a;}
function Wi(a){var b;a.pn=null;b=new MI;b.pc=a;a.dC=b;}
function Qe(a,b,c){var d,e;a.co=Ix(a,a.co,b);d=Ib(a,b);e=IY(d,c);IY(d,c);a.ed=a.ed+1|0;return e;}
function Ib(a,b){var c,d;c=a.co;while(true){if(c===null)return null;d=Es(a.dC,b,c.dj);if(!d)break;c=d>=0?c.bb:c.U;}return c;}
function Qa(a,b,c){var d,e,f,g,h;d=S(DZ,IS(a));e=d.data;f=0;g=a.co;a:{while(g!==null){h=Es(a.dC,b,g.dj);if(c)h= -h|0;if(!h){c=f+1|0;e[f]=g;break a;}if(h>=0)g=GL(g,c);else{h=f+1|0;e[f]=g;g=Ga(g,c);f=h;}}c=f;}return CV(d,c);}
function Ka(a,b,c){var d,e,f,g,h;d=S(DZ,IS(a));e=d.data;f=0;g=a.co;while(g!==null){h=Es(a.dC,b,g.dj);if(c)h= -h|0;if(h>=0)g=GL(g,c);else{h=f+1|0;e[f]=g;g=Ga(g,c);f=h;}}return CV(d,f);}
function OK(a,b){var c,d,e,f,g;c=S(DZ,IS(a));d=c.data;e=0;f=a.co;while(f!==null){g=e+1|0;d[e]=f;f=Ga(f,b);e=g;}return CV(c,e);}
function Ix(a,b,c){var d,e;if(b===null){b=new DZ;d=null;b.dj=c;b.dQ=d;b.cE=1;b.dG=1;return b;}e=Es(a.dC,c,b.dj);if(!e)return b;if(e>=0)b.bb=Ix(a,b.bb,c);else b.U=Ix(a,b.U,c);Dh(b);return G7(b);}
function Hn(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Es(a.dC,c,b.dj);if(d<0)b.U=Hn(a,b.U,c);else if(d>0)b.bb=Hn(a,b.bb,c);else{e=b.bb;if(e===null)return b.U;f=b.U;g=S(DZ,e.cE).data;h=0;while(true){b=e.U;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bb;while(h>0){h=h+(-1)|0;j=g[h];j.U=b;Dh(j);b=G7(j);}e.bb=b;e.U=f;Dh(e);b=e;}Dh(b);return G7(b);}
function IS(a){var b;b=a.co;return b===null?0:b.cE;}
function Op(){C.call(this);this.mH=null;}
function ACI(a,b){var c,d,e,f,g,h,i,j;c=a.mH.hU;b=b.data;if(b===SE()?1:0)$rt_globals.console.info("App: hello from worker");else{if(!(b instanceof $rt_globals.Array?1:0)){b=new BF;U(b);J(b);}if(b.length<1){b=new BF;U(b);J(b);}d=GX(b[0]);e=Ib(c,d);if(e===null)c=null;else{c.co=Hn(c,c.co,d);c.ed=c.ed+1|0;c=e.dQ;}c=c;f=S(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;e=b[j];if(typeof e==='string'?1:0)d=Fb(e);else if(e instanceof $rt_globals.ArrayBuffer?1:0){d=new M4;Um(d);d.eI=e;}else d=(e instanceof $rt_globals.File
?1:0)?Tp(null,e):!(e instanceof $rt_globals.FileSystemFileHandle?1:0)?null:Tp(e,null);g[h]=d;h=j;}c.q(f);}}
var CE=F(0);
function ADr(a,b){return 0;}
function Yx(a,b){return 0;}
function Yr(a,b,c,d,e){return 0;}
function Vc(a,b,c,d){return 0;}
function ZU(a,b){return 0;}
function AEG(a,b,c){return 0;}
function XP(a){return null;}
function Xr(a){}
function AAX(a){}
function RE(){var a=this;C.call(a);a.ku=null;a.bw=null;a.oQ=null;a.ce=null;}
function AGx(a,b){var c=new RE();X3(c,a,b);return c;}
function X3(a,b,c){var d,e,f,g,h;a.ce=null;a.ku=b;a.bw=c;d=$rt_globals.window;e=S(Cf,16);f=e.data;g=new OX;g.iW=a;f[0]=B8(a,b,B(41),g);g=new OY;g.lF=a;f[1]=B8(a,b,B(42),g);g=new OZ;g.jw=a;f[2]=B8(a,b,B(43),g);g=new O0;g.nd=a;f[3]=B8(a,b,B(44),g);g=new O1;g.k9=a;f[4]=B8(a,b,B(45),g);g=new O2;g.i$=a;f[5]=B8(a,b,B(46),g);g=new O3;g.np=a;f[6]=B8(a,b,B(47),g);g=new O4;g.lg=a;f[7]=B8(a,b,B(48),g);g=new O5;g.jf=a;f[8]=B8(a,b,B(49),g);g=new O6;g.mM=a;f[9]=B8(a,b,B(50),g);g=new P2;g.mo=a;f[10]=B8(a,b,B(51),g);h=new P4;h.lP
=a;d.addEventListener("paste",Bh(h,"handleEvent"),!!1);f[11]=Pi(a,d,B(52),h);g=new P5;g.iu=a;f[12]=B8(a,d,B(53),g);g=new P6;g.mX=a;f[13]=B8(a,d,B(54),g);f[14]=B8(a,d,B(50),new PW);f[15]=B8(a,d,B(49),new PX);c=new LA;c.ob=e;a.oQ=c;g=new M5;g.lW=b;b.onpointerdown=Bh(g,"f");g=new M6;g.jN=b;b.onpointerup=Bh(g,"f");}
function B8(a,b,c,d){b.addEventListener($rt_ustr(c),Bh(d,"handleEvent"));return Pi(a,b,c,d);}
function Pi(a,b,c,d){var e;e=new L7;e.pQ=b;e.pR=c;e.pS=d;return e;}
function Nx(a,b){var c;c=new Nf;c.jp=b;return c;}
function Dy(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.ku.getBoundingClientRect();e=CB(Cj((b.clientX-d.left)*c),Cj((b.clientY-d.top)*c));f=new Bw;g=a.ce;f.c=g.c;f.d=g.d;d=new IU;NN(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.bK=e;d.nD=f;return d;}
function P_(a,b,c){var d,e,f,g;d=new KL;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;NN(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.iZ=0;d.fy=e;d.bH=f;d.eN=c;d.hq=g;return d;}
function CM(a,b){b.stopPropagation();b.preventDefault();}
function H0(){var a=this;C.call(a);a.kW=null;a.cp=null;a.bh=null;a.l5=null;a.o9=0;a.fZ=null;a.pz=null;a.pk=null;a.ow=null;a.dY=null;a.eM=null;a.pq=null;a.fd=null;a.cD=null;a.m4=null;a.dm=0;a.ga=0;}
function Jg(a,b,c){return Fd(a,b,c,400,0);}
function Dc(a,b,c){return I4(a.kW,b,c);}
function F7(a,b){var c,d,e,f,g;c=a.bh;d=b.b4;e=b.cd;f=b.b2;g=b.b3;c.clearColor(d,e,f,g);a.bh.clear(16384);}
function C_(a,b){var c;if(b==a.ga)return b;if(!b)a.bh.disable(3042);else{a.bh.enable(3042);a.bh.blendFuncSeparate(770,771,1,1);}c=a.ga;a.ga=b;return c;}
function Dj(a,b,c,d,e){HX(a,a.fZ);II(a.fZ,a.bh,b,c,d,a.cD);d=a.fZ;Gb(a.bh,d.mG,e);a.dm=Hj(a.fd,a.dm);}
function HB(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;HX(a,a.dY);II(a.dY,a.bh,b,c,d,a.cD);NK(a.dY,a.bh,f);d=a.dY;j=a.bh;k=e.b4;l=f.bl;k=k/l;m=e.cd;n=f.bP;m=m/n;l=e.b2/l;n=e.b3/n;o=d.mq;j.uniform4f(o,k,m,l,n);d=a.dY;e=a.bh;Gb(e,d.j_,g);Gb(e,d.i0,h);d=d.jB;e.uniform2f(d,i,0.0);a.dm=Hj(a.fd,a.dm);}
function Du(a){var b,c;b=new GT;c=a.l5;b.df=c;b.el=c.cK.createTexture();AHK=AHK+1|0;return b;}
function HX(a,b){var c,d;if(b!==a.m4){c=a.bh;d=b.bs;c.useProgram(d);a.m4=b;}}
function On(){var a=this;H0.call(a);a.oU=null;a.pl=null;}
function Fd(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=a.cp;g=Rz(b,c,d,e);GO(f,g);h=f.M.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Eo(f,B(55));m=Eo(f,B(56));h=new HV;h.fP=b;h.n0=c;n=c|0;if(n!==c){b=new O;Q(b);ER(H(b,B(57)),c);$rt_globals.console.info($rt_ustr(P(b)));}h.ct=n;h.n5=d;h.ov=e;h.gj=i;h.gp=j;h.nY=l;h.hV=k;h.iM=g;h.ha=EK(i);h.l2=EK(h.gp);d=m*32.0|0;n=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;a:{h.n3=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(58);}h.nS=b;return h;}
function Ce(){C.call(this);this.cu=null;}
function Eh(a,b){a.cu=b;}
function MI(){C.call(this);this.pc=null;}
function Es(a,b,c){return b===null?Mv(c,b):Mv(b,c);}
function OX(){C.call(this);this.iW=null;}
function ABt(a,b){var c;c=a.iW;if(Nz(c.bw,P_(c,b,1)))CM(c,b);}
function OY(){C.call(this);this.lF=null;}
function ABD(a,b){var c;c=a.lF;if(Nz(c.bw,P_(c,b,0)))CM(c,b);}
function OZ(){C.call(this);this.jw=null;}
function AAo(a,b){var c,d,e,f,g,h;c=a.jw;if(c.ce!==null){d=Dy(c,b);e=c.bw;CU(e.cl);f=(CR(e)).data;g=f.length;h=0;a:{while(h<g){if(f[h].eK(d))break a;h=h+1|0;}}CM(c,b);}}
function O0(){C.call(this);this.nd=null;}
function ZY(a,b){var c,d;c=a.nd;b.button;if(c.ce!==null){d=Dy(c,b);H_(c.bw,d,b.button,1,1);}}
function O1(){C.call(this);this.k9=null;}
function AAf(a,b){var c,d;c=a.k9;b.button;if(c.ce!==null){d=Dy(c,b);if(H_(c.bw,d,b.button,0,1))CM(c,b);}}
function O2(){C.call(this);this.i$=null;}
function AB2(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.i$;if(c.ce!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.bw;f=Dy(c,b);g=d;h=g*b.deltaX;i=g*b.deltaY;CU(e.cl);j=(CR(e)).data;k=j.length;l=0;b:{while(l<k){if(j[l].eD(f,h,i))break b;l=l+1|0;}}CM(c,b);}}
function O3(){C.call(this);this.np=null;}
function YV(a,b){var c,d;c=a.np;if(c.ce!==null){d=Dy(c,b);if(H_(c.bw,d,b.button,1,2))CM(c,b);}}
function O4(){C.call(this);this.lg=null;}
function AEs(a,b){var c,d,e,f,g,h,i;c=a.lg;if(c.ce!==null){d=Dy(c,b);e=c.bw;CU(e.cl);f=(CR(e)).data;g=f.length;h=0;a:{while(h<g){if(f[h].h6(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)CM(c,b);}}
function O5(){C.call(this);this.jf=null;}
function Yn(a,b){var c,d,e;b=a.jf.bw;c=(CR(b)).data;d=c.length;e=0;while(e<d){c[e].kM();e=e+1|0;}CU(b.cl);}
function O6(){C.call(this);this.mM=null;}
function ACO(a,b){var c,d,e;b=a.mM.bw;c=(CR(b)).data;d=c.length;e=0;while(e<d){c[e].gS();e=e+1|0;}CU(b.cl);}
function P2(){C.call(this);this.mo=null;}
function AD_(a,b){var c;c=a.mo;if(c.ce!==null)Dy(c,b);}
function P4(){C.call(this);this.lP=null;}
function Z$(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.lP;d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(CR(c.bw)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].lo();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.bw.cl;m=new K$;m.m7=k;m.m8=l;g.getAsString(Bh(m,"accept"));CM(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new O;Q(l);H(H(H(H(l,B(59)),k),B(60)),g);$rt_globals.console.info($rt_ustr(P(l)));}e=e+1|0;}}
function P5(){C.call(this);this.iu=null;}
function AAr(a,b){var c;c=a.iu;if(LP(c.bw,Nx(c,b),0))CM(c,b);}
function P6(){C.call(this);this.mX=null;}
function ABO(a,b){var c;c=a.mX;if(LP(c.bw,Nx(c,b),1))CM(c,b);}
var PW=F();
function Y_(a,b){}
var PX=F();
function ADO(a,b){}
var NF=F(0);
var NP=F();
function I4(a,b,c){var d,e,f;d=new Me;AHz=AHz+1|0;d.hI=b;d.g3=c;e=(DW()).createElement("canvas");d.fY=e;f=b;e.width=f;e=d.fY;f=c;e.height=f;d.M=d.fY.getContext("2d");return d;}
var NO=F();
function ZA(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Qn(){var a=this;C.call(a);a.c7=null;a.db=null;a.Q=null;}
function AFS(a,b,c){var d=new Qn();Yd(d,a,b,c);return d;}
function Yd(a,b,c,d){a.c7=b;a.db=c;a.Q=d;}
function LA(){C.call(this);this.ob=null;}
function Bw(){var a=this;C.call(a);a.c=0;a.d=0;}
function CB(a,b){var c=new Bw();XC(c,a,b);return c;}
function XC(a,b,c){a.c=b;a.d=c;}
function DN(a,b){a.c=b.c;a.d=b.d;}
function BE(a,b,c){a.c=b;a.d=c;}
function Vh(a){var b,c,d;b=a.c;c=a.d;d=new O;Q(d);V(H(V(H(d,B(61)),b),B(62)),c);return P(d);}
var Ud=F();
var Q_=F(0);
function ABk(b){var c,d,e,f,g,h,i;c=Vw(16);d=c.data;d[0]=1.0;d[1]=(-1.0);d[2]=1.0;d[3]=1.0;d[4]=1.0;d[5]=1.0;d[6]=1.0;d[7]=0.0;d[8]=(-1.0);d[9]=(-1.0);d[10]=0.0;d[11]=1.0;d[12]=(-1.0);d[13]=1.0;d[14]=0.0;d[15]=0.0;e=BS(6);f=e.data;f[0]=0;f[1]=1;f[2]=2;f[3]=1;f[4]=2;f[5]=3;g=new Lu;G5();h=AHk;g.cH=b;g.d9=h;g.lq=d.length/h.gM|0;g.mY=f.length;i=b.createBuffer();g.iH=i;b.bindBuffer(34962,i);h=c.data;b.bufferData(34962,h,35044);g.nf=null;h=b.createBuffer();g.mT=h;if(h!==null){b.bindBuffer(34963,h);h=e.data;b.bufferData(34963,
h,35044);}h=null;b.bindBuffer(34962,h);h=null;b.bindBuffer(34963,h);return g;}
function Lv(){C.call(this);this.cK=null;}
function If(){var a=this;C.call(a);a.bs=null;a.pg=null;}
function To(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(63):B(64);d=$rt_str(b.getShaderInfoLog(e));g=new O;Q(g);H(H(g,f),d);f=P(g);b.deleteShader(e);BL(BT(),f);b=new Bg;Bb(b,f);J(b);}
function C6(){var a=this;If.call(a);a.je=null;a.j9=null;a.lJ=null;}
function AHL(a,b,c,d){var e=new C6();Ig(e,a,b,c,d);return e;}
function Ig(a,b,c,d,e){var f,g,h,i,j,k;a.pg=e;f=To(b,35633,c);d=To(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bs=g;h=e.lz.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bs;k=c.eA;c=c.kg;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bs;b.linkProgram(c);if(b.getProgramParameter(c,35714)){Pw(b,B(65));a.lJ=new Bw;c=a.bs;a.je=b.getUniformLocation(c,"uResolution");c=a.bs;a.j9=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bg;c=new O;Q(c);H(H(c,B(66)),d);Bb(b,P(c));J(b);}
function RT(a,b,c){var d,e,f;d=a.lJ;if(!(d.c==c.c&&d.d==c.d?1:0)){DN(d,c);d=a.je;e=c.c;f=c.d;b.uniform2f(d,e,f);}}
function II(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.c;h=f.c;i=g/h;j=e.d;k=f.d;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.j9;b.uniform4f(e,i,l,h,j);RT(a,b,f);}
function OJ(){C6.call(this);this.mG=null;}
function Dx(){C6.call(this);this.k7=null;}
function AE1(a,b){var c=new Dx();Ny(c,a,b);return c;}
function AHM(a,b,c){var d=new Dx();NA(d,a,b,c);return d;}
function Ny(a,b,c){NA(a,b,B(14),c);}
function NA(a,b,c,d){G5();Ig(a,b,c,d,AHk);c=a.bs;a.k7=b.getUniformLocation(c,"sDiffuse");}
function NK(a,b,c){var d;d=a.k7;b.uniform1i(d,0);b.activeTexture(33984);c=c.el;b.bindTexture(3553,c);}
var LO=F(C6);
function Oa(){Dx.call(this);this.ol=null;}
function TE(){var a=this;Dx.call(a);a.mq=null;a.j_=null;a.i0=null;a.jB=null;}
function AFv(a){var b=new TE();ABZ(b,a);return b;}
function ABZ(a,b){var c;NA(a,b,B(67),B(68));c=a.bs;a.mq=b.getUniformLocation(c,"uTexTransform");c=a.bs;a.j_=b.getUniformLocation(c,"uColor");c=a.bs;a.i0=b.getUniformLocation(c,"uBgColor");c=a.bs;a.jB=b.getUniformLocation(c,"uContrast");}
function Ro(){var a=this;Dx.call(a);a.ng=null;a.ne=null;a.kq=null;}
function AGs(a){var b=new Ro();X1(b,a);return b;}
function X1(a,b){var c,d;Ny(a,b,B(69));c=a.bs;a.ng=b.getUniformLocation(c,"uColorB");d=a.bs;a.ne=b.getUniformLocation(d,"uColorF");d=a.bs;a.kq=b.getUniformLocation(d,"uContrast");}
var MA=F(0);
var U8=F(0);
function Gb(b,c,d){var e,f,g,h;e=d.b4;f=d.cd;g=d.b2;h=d.b3;b.uniform4f(c,e,f,g,h);}
function Pw(b,c){var d,e;d=b.getError();if(d){b=BT();e=new O;Q(e);V(H(e,c),d);BL(b,P(e));}}
function L7(){var a=this;C.call(a);a.pQ=null;a.pR=null;a.pS=null;}
function Lu(){var a=this;C.call(a);a.cH=null;a.d9=null;a.iH=null;a.nf=null;a.mT=null;a.lq=0;a.mY=0;}
function Hj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.d9.lM;d=a.cH;b=b^c;e=0;while(b){f=1<<e;if(b&f){if(!(c&f))d.disableVertexAttribArray(e);else d.enableVertexAttribArray(e);b=b^f;}e=e+1|0;}b=0;d=a.cH;g=a.iH;d.bindBuffer(34962,g);h=a.d9.ic.data;f=h.length;i=0;while(i<f){d=h[i];g=a.cH;j=d.eA;k=d.da;l=a.d9.gM*4|0;e=b*4|0;g.vertexAttribPointer(j,k,5126,!!0,l,e);b=b+d.da|0;i=i+1|0;}a:{d=a.nf;if(d!==null){b=0;a.cH.bindBuffer(34962,d);h=a.d9.kV.data;e=h.length;f=0;while(true){if(f>=e)break a;d=h[f];g=a.cH;i=d.eA;j=d.da;m
=d.jQ;n=a.d9.j7;g.vertexAttribPointer(i,j,5121,!!m,n,b);b=b+d.da|0;f=f+1|0;}}}d=a.mT;if(d===null){b=a.lq;if(b>0)a.cH.drawArrays(4,0,b);}else{a.cH.bindBuffer(34963,d);d=a.cH;f=a.mY;d.drawElements(4,f,5123,0);}return c;}
function B7(){var a=this;C.call(a);a.nQ=null;a.bE=0;}
function Dq(a,b,c){a.nQ=b;a.bE=c;}
function E$(){var a=this;B7.call(a);a.lz=null;a.ic=null;a.kV=null;a.gM=0;a.j7=0;a.lM=0;}
var AHk=null;var AHN=null;function G5(){G5=Bl(E$);Ze();}
function VO(){G5();return AHN.cJ();}
function Ze(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new E$;c=S(CW,2);d=c.data;UN();d[0]=AHO;d[1]=AHP;G5();Dq(b,B(70),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];QL();switch(AHQ.data[l.hR.bE]){case 1:f=f+l.da|0;h=h+1|0;break a;case 2:e=e+l.da|0;g=g+1|0;break a;default:}}i=i|1<<l.eA;k=k+1|0;}b.lz=c;b.gM=e;b.j7=f;b.lM=i;c=S(CW,g);m=c.data;b.ic=c;c=S(CW,h);n=c.data;b.kV=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];QL();switch(AHQ.data[l.hR.bE]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}AHk=b;c=S(E$,1);c.data[0]=b;AHN=c;}
var H7=F();
var AHR=null;var AHS=null;function BT(){if(AHR===null)AHR=AAz(AHT,0);return AHR;}
function Df(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=TM(b)&&(e+f|0)<=TM(d)){a:{b:{if(b!==d){g=F8(Di(b));h=F8(Di(d));if(g!==null&&h!==null){if(g===h)break b;if(!FU(g)&&!FU(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.c_;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&Tv(n.constructor,o)?1:0)){Mn(b,c,d,e,j);b=new Gu;U(b);J(b);}j=j+1|0;k=m;}Mn(b,c,d,e,f);return;}if(!FU(g))break a;if(FU(h))break b;else break a;}b=new Gu;U(b);J(b);}}Mn(b,c,d,
e,f);return;}b=new Gu;U(b);J(b);}b=new Bn;U(b);J(b);}d=new F9;Bb(d,B(71));J(d);}
function Mn(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Ou(){return Long_fromNumber(new Date().getTime());}
function AGb(){return AHh($rt_globals.performance.now()*1000000.0);}
var IH=F(0);
var Nh=F(0);
var NX=F(0);
var ET=F();
function GS(){ET.call(this);this.nx=null;}
function Sa(){var a=this;GS.call(a);a.o7=0;a.gY=0;a.fj=null;a.jq=null;a.l0=null;}
function AAz(a,b){var c=new Sa();ADl(c,a,b);return c;}
function ADl(a,b,c){a.nx=b;b=new O;Q(b);a.fj=b;a.jq=BS(32);a.o7=c;a.l0=AHU;}
function Nl(a,b,c,d){var e,$$je;e=a.nx;if(e===null)a.gY=1;if(!(a.gY?0:1))return;a:{try{e.gs(b,c,d);break a;}catch($$e){$$je=CX($$e);if($$je instanceof Gk){}else{throw $$e;}}a.gY=1;}}
function BL(a,b){var c,d,e,f,g,h,i,j,k,l;BJ(BH(a.fj,b),10);b=a.fj;c=b.x;d=a.jq;if(c>d.data.length)d=BS(c);e=0;f=0;if(e>c){b=new Bn;Bb(b,B(72));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.n.data;j=e+1|0;g[f]=i[e];f=h;e=j;}g=d.data;b=SL(d,0,c-0|0);d=C9(Bm(16,Bf(g.length,1024)));k=RO(d);l=Pp(ML(Px(a.l0),AHV),AHV);while(true){f=Eq(GZ(l,b,k,1));Nl(a,d,0,k.B);J0(k);if(!f)break;}while(true){f=Eq(Jd(l,k));Nl(a,d,0,k.B);J0(k);if(!f)break;}a.fj.x=0;}
function EI(){ET.call(this);this.oV=null;}
function Qc(a){a.oV=C9(1);}
var H5=F(EI);
var AHT=null;function Zu(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function TQ(){var b;b=new H5;Qc(b);AHT=b;}
function CW(){var a=this;B7.call(a);a.kg=null;a.hR=null;a.da=0;a.jQ=0;a.eA=0;}
var AHO=null;var AHP=null;var AHW=null;function UN(){UN=Bl(CW);YL();}
function AFI(a,b,c,d,e,f,g){var h=new CW();OD(h,a,b,c,d,e,f,g);return h;}
function Vv(){UN();return AHW.cJ();}
function OD(a,b,c,d,e,f,g,h){UN();Dq(a,b,c);a.kg=d;a.hR=e;a.da=f;a.jQ=g;a.eA=h;}
function YL(){var b;b=new CW;S$();OD(b,B(73),0,B(74),AHX,2,0,0);AHO=b;b=AFI(B(75),1,B(76),AHX,2,0,1);AHP=b;AHW=G(CW,[AHO,b]);}
function CQ(){var a=this;C.call(a);a.nC=null;a.on=null;}
function FK(a,b,c){var d,e,f;d=c.data;T1(b);e=d.length;f=0;while(f<e){T1(d[f]);f=f+1|0;}a.nC=b;a.on=c.cJ();}
function T1(b){var c,d;if(EX(b))J(R8(b));if(!T3(K(b,0)))J(R8(b));c=1;while(c<M(b)){a:{d=K(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(T3(d))break a;else J(R8(b));}}c=c+1|0;}}
function T3(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var IL=F(CQ);
var AHU=null;function Uf(a){var b,c;b=new Nm;b.c9=B(77);c=AHY;b.eo=c;b.hM=c;b.of=a;b.il=0.3333333432674408;b.oA=0.5;b.jb=C9(512);b.lE=BS(512);return b;}
function Px(a){var b,c,d,e,f;b=new K9;c=C9(1);d=c.data;d[0]=63;e=AHY;b.hE=e;b.g4=e;f=d.length;if(f&&f>=b.id){b.nL=a;b.ke=c.cJ();b.ly=2.0;b.id=4.0;b.jP=BS(512);b.i8=C9(512);return b;}e=new BF;Bb(e,B(78));J(e);}
function RW(){var b;b=new IL;FK(b,B(79),S(Bq,0));AHU=b;}
var Hx=F();
var AHZ=null;var AHQ=null;function QL(){QL=Bl(Hx);ABn();}
function ABn(){var b,c;b=BU((S0()).data.length);c=b.data;AHQ=b;c[AH0.bE]=1;c[AHX.bE]=2;c=BU((T0()).data.length);b=c.data;AHZ=c;b[AH1.bE]=1;b[AH2.bE]=2;}
function KW(){var a=this;C.call(a);a.dv=null;a.h8=null;a.gd=null;a.lR=null;a.j6=null;a.ka=null;}
function Se(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.dv,b,c));}
function Jh(a,b){var c,d,e,f,g,h,$$je;c=new Bq;d=b;while(a.h8[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.dv,b,d));d=e.data.length;f=AHU;g=SD(e,0,d);a:{try{f=Re(Tr(UF(Uf(f),AHV),AHV),g);break a;}catch($$e){$$je=CX($$e);if($$je instanceof DU){f=$$je;}else{throw $$e;}}J(X9(B(80),f));}if(!f.B&&f.b1==f.fR)c.bu=f.ez;else{h=BS(BB(f));e=h.data;c.bu=h;JI(f,h,0,e.length);}return c;}
function Jo(a,b){var c,d,e;c=new Bq;d=b>>>1;e=d;while(a.gd[e]){e=e+1|0;}d=e-d|0;GP(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.dv,b,d)));return c;}
var Fc=F(B7);
var AH0=null;var AHX=null;var AH3=null;function S$(){S$=Bl(Fc);XF();}
function XV(a,b){var c=new Fc();Ug(c,a,b);return c;}
function S0(){S$();return AH3.cJ();}
function Ug(a,b,c){S$();Dq(a,b,c);}
function XF(){var b;AH0=XV(B(81),0);b=XV(B(82),1);AHX=b;AH3=G(Fc,[AH0,b]);}
var EP=F(B7);
var AH1=null;var AH2=null;var AH4=null;function M_(){M_=Bl(EP);X6();}
function AEv(a,b){var c=new EP();Rd(c,a,b);return c;}
function T0(){M_();return AH4.cJ();}
function Rd(a,b,c){M_();Dq(a,b,c);}
function X6(){var b;AH1=AEv(B(83),0);b=AEv(B(84),1);AH2=b;AH4=G(EP,[AH1,b]);}
var Ov=F(C1);
var BF=F(Bg);
function T7(){BF.call(this);this.nP=null;}
function R8(a){var b=new T7();AC6(b,a);return b;}
function AC6(a,b){U(a);a.nP=b;}
var Sb=F();
var IK=F(0);
function M5(){C.call(this);this.lW=null;}
function AC8(a,b){a.lW.setPointerCapture(b.pointerId);}
function M6(){C.call(this);this.jN=null;}
function Xx(a,b){a.jN.releasePointerCapture(b.pointerId);}
var St=F();
function Gc(){return AEo();}
function AEo(){return Math.random();}
function Bf(b,c){if(b<c)c=b;return c;}
function Bm(b,c){if(b>c)c=b;return c;}
function I5(b){if(b<=0)b= -b|0;return b;}
var QZ=F();
function QQ(b,c){var d,e,f,g;b=b.data;d=BS(c);e=d.data;f=Bf(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Ph(b,c){var d,e,f,g;b=b.data;d=C9(c);e=d.data;f=Bf(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function CV(b,c){var d,e,f,g;d=b.data;e=NY(F8(Di(b)),c);f=Bf(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Ry(b){var c,d,e;c=new O;Q(c);BH(c,B(85));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BH(c,B(86));H(c,e[d]);d=d+1|0;}BH(c,B(87));return P(c);}
function TL(b){var c,d,e;c=new O;Q(c);BH(c,B(85));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BH(c,B(86));V(c,e[d]);d=d+1|0;}BH(c,B(87));return P(c);}
function ACz(b){var c,d,e;c=new O;Q(c);BH(c,B(85));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BH(c,B(86));ER(c,e[d]);d=d+1|0;}BH(c,B(87));return P(c);}
function AEx(b){var c,d,e;c=new O;Q(c);BH(c,B(85));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BH(c,B(86));K7(c,e[d]);d=d+1|0;}BH(c,B(87));return P(c);}
function G4(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BF;U(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Tl(b,c){return TD(b,0,b.data.length,c);}
function TD(b,c,d,e){var f,g,h,i,j;f=BV(c,d);if(f>0){g=new BF;U(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function Fi(){var a=this;C.call(a);a.fR=0;a.B=0;a.b1=0;a.eH=0;}
function OC(a,b){a.eH=(-1);a.fR=b;a.b1=b;}
function Db(a,b){var c,d,e;if(b>=0&&b<=a.b1){a.B=b;if(b<a.eH)a.eH=0;return a;}c=new BF;d=a.b1;e=new O;Q(e);BJ(V(H(V(H(e,B(88)),b),B(89)),d),93);Bb(c,P(e));J(c);}
function PQ(a){a.b1=a.B;a.B=0;a.eH=(-1);return a;}
function BB(a){return a.b1-a.B|0;}
function CN(a){return a.B>=a.b1?0:1;}
var MJ=F(0);
var HW=F(Fi);
function U0(b){var c,d;if(b>=0)return ABF(0,b,BS(b),0,b,0);c=new BF;d=new O;Q(d);V(H(d,B(90)),b);Bb(c,P(d));J(c);}
function SL(b,c,d){return ABF(0,b.data.length,b,c,c+d|0,0);}
function Td(b){return SL(b,0,b.data.length);}
function JI(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new Bn;i=new O;Q(i);V(H(V(H(i,B(91)),g),B(92)),f);Bb(h,P(i));J(h);}if(BB(a)<d){j=new Io;U(j);J(j);}if(d<0){j=new Bn;k=new O;Q(k);H(V(H(k,B(93)),d),B(94));Bb(j,P(k));J(j);}g=a.B;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.ez.data[m+a.hY|0];l=l+1|0;c=n;m=o;}a.B=g+d|0;return a;}}b=b.data;j=new Bn;d=b.length;k=new O;Q(k);BJ(V(H(V(H(k,B(95)),c),B(89)),d),41);Bb(j,P(k));J(j);}
function Hk(a,b){var c,d,e,f,g,h,i;c=0;d=M(b);if(a.h9){b=new GB;U(b);J(b);}e=d-c|0;if(BB(a)<e){b=new FV;U(b);J(b);}if(c>=M(b)){f=new Bn;d=M(b);b=new O;Q(b);BJ(V(H(V(H(b,B(96)),c),B(89)),d),41);Bb(f,P(b));J(f);}if(d>M(b)){f=new Bn;c=M(b);b=new O;Q(b);V(H(V(H(b,B(97)),d),B(98)),c);Bb(f,P(b));J(f);}if(c>d){b=new Bn;f=new O;Q(f);V(H(V(H(f,B(96)),c),B(99)),d);Bb(b,P(f));J(b);}g=a.B;while(c<d){h=g+1|0;i=c+1|0;MM(a,g,K(b,c));g=h;c=i;}a.B=a.B+e|0;return a;}
function Hb(){var a=this;Fi.call(a);a.gX=0;a.eJ=null;a.oJ=null;}
function SS(b){var c,d;if(b>=0)return X$(0,b,C9(b),0,b,0,0);c=new BF;d=new O;Q(d);V(H(d,B(90)),b);Bb(c,P(d));J(c);}
function SD(b,c,d){return X$(0,b.data.length,b,c,c+d|0,0,0);}
function RO(b){return SD(b,0,b.data.length);}
function KZ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new Bn;i=new O;Q(i);V(H(V(H(i,B(100)),g),B(92)),f);Bb(h,P(i));J(h);}if(BB(a)<d){j=new Io;U(j);J(j);}if(d<0){j=new Bn;k=new O;Q(k);H(V(H(k,B(93)),d),B(94));Bb(j,P(k));J(j);}g=a.B;l=g+a.gX|0;m=0;while(m<d){n=c+1|0;b=a.eJ.data;f=l+1|0;e[c]=b[l];m=m+1|0;c=n;l=f;}a.B=g+d|0;return a;}}b=b.data;j=new Bn;d=b.length;k=new O;Q(k);BJ(V(H(V(H(k,B(95)),c),B(89)),d),41);Bb(j,P(k));J(j);}
function Pk(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.iC){e=new GB;U(e);J(e);}if(BB(a)<d){e=new FV;U(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){i=new Bn;j=new O;Q(j);V(H(V(H(j,B(101)),h),B(92)),g);Bb(i,P(j));J(i);}if(d<0){e=new Bn;i=new O;Q(i);H(V(H(i,B(93)),d),B(94));Bb(e,P(i));J(e);}h=a.B;k=h+a.gX|0;l=0;while(l<d){b=a.eJ.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.B=h+d|0;return a;}}b=b.data;e=new Bn;d=b.length;i=new O;Q(i);BJ(V(H(V(H(i,B(95)),c),B(89)),d),41);Bb(e,P(i));J(e);}
function J0(a){a.B=0;a.b1=a.fR;a.eH=(-1);return a;}
function FO(){C.call(this);this.pv=null;}
var AH5=null;var AHV=null;var AHY=null;function UR(a){var b=new FO();TX(b,a);return b;}
function TX(a,b){a.pv=b;}
function S5(){AH5=UR(B(102));AHV=UR(B(103));AHY=UR(B(104));}
function QP(){var a=this;Ce.call(a);a.bz=null;a.hp=null;a.b9=null;a.dB=null;a.ds=null;a.eE=null;a.nz=null;a.eu=null;a.lG=null;a.k6=null;a.h1=null;a.nO=null;a.oE=null;a.dV=null;a.f5=null;a.kC=0;}
function AE4(a){var b=new QP();Z0(b,a);return b;}
function Z0(a,b){var c,d,e,f,g,h,i,j,k,l,m;Eh(a,b);c=new B1;d=AH6;c.b4=d.b4;c.cd=d.cd;c.b2=d.b2;c.b3=d.b3;a.hp=c;a.b9=RR(0,0,300,300);a.dB=S4(0,0,3,3);a.ds=RR(0,0,300,300);a.eE=AAZ();e=S(Bq,4);f=e.data;f[0]=B(105);f[1]=B(106);f[2]=B(107);f[3]=B(108);a.nz=e;a.eu=S(Gq,f.length);a.bz=b.c7;b=b.db;d=new Ns;d.c0=a;d.nl=new Bw;D5(b,d);b=Dc(a.bz,300,300);c=b.M;d="white";c.fillStyle=d;d=b.M;c="white";d.strokeStyle=c;d=b.M;c=10.0;d.lineWidth=c;b.M.strokeRect(75.0,140.0,150.0,110.0);b.M.fillRect(130.0,190.0,40.0,60.0);b.M.beginPath();b.M.moveTo(50.0,
140.0);b.M.lineTo(150.0,60.0);b.M.lineTo(250.0,140.0);b.M.closePath();b.M.stroke();FC(b,B(109),11.0);NJ(b,187,187,187);K8(a,B(110),b);d=Du(a.bz);De(d,b);PO(b);a.k6=d;LN(a.b9,d);O8(a.b9);Ch(a.b9.cA,AH6);Ch(a.b9.bF,DE(204,120,50));c=new PV;M_();TA(c,5,5,AH2);e=c.gQ;g=0;h=0;while(g<5){i=0;while(i<5){j=(i^g)&1?0:255;f=e.data;k=j<<24>>24;j=h+1|0;f[h]=k;l=j+1|0;f[j]=k;j=l+1|0;f[l]=k;h=j+1|0;f[j]=(-1);i=i+1|0;}g=g+1|0;}d=Du(a.bz);QF(d,c);a.lG=d;BE(a.dB.P,d.bl,d.bP);b=Dc(a.bz,255,100);a.dV=b;FC(b,B(111),11.0);b=BT();c
=UY(a.dV);m=Gs();H(H(m,B(112)),c);BL(b,CG(m));Eo(a.dV,B(113));NJ(a.dV,169,183,198);K8(a,B(113),a.dV);b=Du(a.bz);a.h1=b;De(b,a.dV);LN(a.ds,a.h1);O8(a.ds);FP(a.ds,F1(255));FL(a.ds,AH6);a.nO=Du(a.bz);Ch(a.dB.cA,a.hp);}
function K8(a,b,c){CK(c,b,0.0,20.0);CK(c,b,0.25,40.0);CK(c,b,0.5,60.0);CK(c,b,0.75,80.0);}
function Pb(a,b){JT(Gc(),0.5+Gc()*0.5,0.5+Gc()*0.5,1.0,b.bF);}
function VH(a,b){var c;a.kC=a.kC+1|0;c=b/5.0;JT(c-(c|0),1.0,1.0,1.0,a.dB.bF);return M8(a.eE,b);}
function XZ(a){var b,c,d,e,f,g,h,i;F7(a.bz,a.hp);b=a.eu.data;c=b.length;d=0;while(d<c){Gl(b[d],a.bz,0,0);d=d+1|0;}Ed(a.b9,a.bz,a.k6,0,0,0.5);e=a.h1;c=0;while(c<7){f=a.ds;Ed(f,a.bz,e,Bi(c,10+((10*f.P.c|0)/15|0)|0)+5|0,(-5),1.0*c/7.0);c=c+1|0;}e=a.dB;g=a.bz;h=a.oE;if(h===null)h=a.lG;f=e.bi;d=f.c+0|0;c=f.d+0|0;f=e.P;i=e.cA;e=e.bF;HX(g,g.eM);II(g.eM,g.bh,d,c,f,g.cD);NK(g.eM,g.bh,h);f=g.eM;h=g.bh;Gb(h,f.ng,i);Gb(h,f.ne,e);e=f.kq;h.uniform2f(e,0.0,0.0);g.dm=Hj(g.fd,g.dm);N$(a.eE,a.bz,new Bw);Pw(a.bz.bh,B(114));}
function AEA(a,b,c){var d,e,f,g,h,i,j,k;d=BT();e=new O;Q(e);H(H(e,B(115)),b);BL(d,P(e));f=BT();d=new O;Q(d);K7(H(d,B(116)),c);BL(f,P(d));g=Cj(c*30.0);h=Cj(c*10.0);i=0;while(true){j=a.eu.data;if(i>=j.length)break;k=1+i|0;j[i]=S4(Bi(h,k)+Bi(g,i)|0,g,g,g);Pb(a,a.eu.data[i]);i=k;}BE(a.dB.bi,(b.c/2|0)-1|0,(b.d/2|0)-1|0);d=a.b9;f=d.bi;g=b.c;d=d.P;BE(f,(g-d.c|0)/2|0,(b.d-d.d|0)/2|0);d=a.ds;d.bi.d=b.d-d.P.d|0;}
var Ju=F(Ce);
function ADG(a,b){return 0;}
function Z6(a){}
function ABI(a,b,c){}
function KF(){var a=this;Ce.call(a);a.cG=null;a.gc=null;a.dq=null;a.bD=null;a.c1=0;a.eZ=null;a.c2=0;a.oC=20;a.pT=11;a.oj=220;a.fx=null;a.oX=5000;a.ef=0;a.dw=null;}
function AEk(a){var b,c,d,e,f,g,h;b=a.eZ;c=a.c2;d=a.fx;HF(b,c,d.c,d.d,5000,20);C_(a.cG,1);F$(a.eZ,a.cG,CB(0,0));if(a.bD===null){c=0;while(c<11){c=c+1|0;e=20*c|0;CK(a.gc,CL(c),0.0,e);}b=Du(a.cG);a.bD=b;De(b,a.gc);}if(a.c2<=a.c1)while(true){f=a.c1;if(f<=a.c2)break;a.c1=f-20|0;b=a.dq;g=a.ef-1|0;a.ef=g;CK(b,CL(g),0.0,20.0);FZ(a.bD,a.dq,0,a.c1%220|0);Dt(a.dq);}else while(a.c1<(a.c2-20|0)){b=a.dq;g=a.ef+1|0;a.ef=g;CK(b,CL((g+11|0)-1|0),0.0,20.0);FZ(a.bD,a.dq,0,a.c1%220|0);Dt(a.dq);a.c1=a.c1+20|0;}b=new Gr;d=a.bD;MZ(b,
0,0,d.bl,d.bP);d=a.bD;FN(b,0,0,d.bl,d.bP);FP(b,a.dw.data[0]);FL(b,a.dw.data[1]);Ed(b,a.cG,a.bD,400,0,1.0);g=a.c2%220|0;f=Bf(a.bD.bP-g|0,200);d=RR(0,0,a.bD.bl,f);FN(d,0,g,a.bD.bl,f);FP(d,a.dw.data[0]);FL(d,a.dw.data[1]);Ed(d,a.cG,a.bD,0,0,1.0);h=new Gr;b=a.bD;MZ(h,0,f,b.bl,(b.bP-f|0)-20|0);b=a.bD;FN(h,0,0,b.bl,(b.bP-f|0)-20|0);FP(h,a.dw.data[1]);FL(h,a.dw.data[0]);Ed(h,a.cG,a.bD,0,0,1.0);}
function VE(a,b,c){DN(a.fx,b);}
function Xq(a,b){return 0;}
function Ms(a){return 5000-a.fx.d|0;}
function K1(){var a=this;Ce.call(a);a.cX=null;a.dS=null;a.en=null;a.g1=null;a.cx=0;a.lu=0;a.m2=null;a.hS=0;a.nb=0;a.jC=null;}
function ABN(a,b){return 0;}
function VX(a){var b,c;b=a.cx;c=new O;Q(c);V(H(c,B(117)),b);$rt_globals.console.info($rt_ustr(P(c)));F7(a.cX,a.m2);HF(a.en,a.cx,a.g1.c,EH(a),5000,20);C_(a.cX,1);F$(a.en,a.cX,CB(0,0));C_(a.cX,0);b=a.cx;c=new O;Q(c);V(H(c,B(117)),b);$rt_globals.console.info($rt_ustr(P(c)));PP(a.dS,a.cx/a.hS|0);ND(a.dS,a.cx,EH(a),a.jC,a.cX);}
function VV(a,b,c){a.g1=b;Oi(a.dS,CB(0,0),50,EH(a),c);Hg(a.dS,a.cX,0,EH(a));}
function Lp(a){return 5000-EH(a)|0;}
function EH(a){return Bf(a.lu,a.g1.d);}
function Ev(){var a=this;Ce.call(a);a.lT=null;a.ig=null;}
function AH7(a){var b=new Ev();LY(b,a);return b;}
function LY(a,b){Eh(a,b);a.lT=EG(0,0,64,255,new B1);a.ig=new Bw;Mu(Di(a));}
function AD9(a,b){return 0;}
function ZR(a){F7(a.cu.c7,a.lT);}
function ACF(a,b,c){var d,e;d=Mu(Di(a));e=new O;Q(e);H(H(H(e,d),B(118)),b);P(e);DN(a.ig,b);}
var LT=F(Ev);
function ABL(a,b){var c;if(b.eN&&b.bR&&b.bH==79){if(!b.ba){b=a.cu.Q;c=new PE;c.mB=a;Ip(b,c);}else{b=a.cu.Q;c=new PH;c.oR=a;Il(b,c);}return 1;}return 0;}
var UX=F(Ev);
function AGn(a){var b=new UX();ABb(b,a);return b;}
function ABb(a,b){var c,d,e,f,g;LY(a,b);c=b.Q;d=new Mc;d.n8=a;e=S(C,1);e.data[0]=B(119);DL(c,d,B(120),e);f=b.Q;c=new Mb;c.pE=a;e=S(C,1);e.data[0]=Sq([1,2,3,4,5]);DL(f,c,B(121),e);f=b.Q;c=new Ma;c.jz=a;e=S(C,1);e.data[0]=AFK([1,2,3,4,5]);DL(f,c,B(122),e);f=b.Q;c=new L_;c.nT=a;e=S(C,1);e.data[0]=EA([1,2,3,4,5]);DL(f,c,B(123),e);f=b.db;g=new Li;c=new L$;c.oT=a;d=new L9;d.kw=a;g.gh=b.Q;g.jI=c;g.ie=d;D5(f,g);}
function NQ(a,b){var c,d,e,f,g,h;c=b.data;d=BT();e=c[0];f=new O;Q(f);H(H(f,B(124)),e);BL(d,P(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((Mz(b,1)).eI));d=BT();e=c[1];f=new O;Q(f);BH(f,B(85));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BH(f,B(86));V(f,c[g]);g=g+1|0;}BH(f,B(87));h=P(f);f=new O;Q(f);H(H(H(H(f,B(125)),e),B(126)),h);BL(d,P(f));}
function L6(){var a=this;Ce.call(a);a.jA=null;a.jd=null;a.bT=null;a.m0=null;a.hD=null;}
function Yt(a,b){var c,d,e;c=a.bT;d=c.L;e=C$(c,(d+c.n2|0)-c.nG|0,DA(c));c.L=e;d=d==e?0:1;return !M8(c.bW,b)&&!d&&!c.lc?0:1;}
function Xi(a){F7(a.jA,a.jd);U1(a.bT);}
function V7(a,b,c){var d,e,f;DN(a.hD,b);b=a.bT;d=a.m0;e=a.hD;DN(b.by,d);DN(b.cO,e);b.cq=c;b.bS=Cj(b.lv*c);f=Cj(10.0*b.cq);b.ht=f;f=b.bS-f|0;Oi(b.c$,b.by,f,B4(b),b.cq);d=b.bW;d.cL.P.c=Cj(Hr(d)*b.cq);f=Cj(b.kJ*b.cq);d=b.bZ;if(f!=(d!==null?d.ct:0))LR(b,d!==null?d.fP:B(39),f);Os(b);f=Cj(20.0*b.cq);d=Jg(b.y,B(111),f);b.om=d;e=b.bp;e.dH=d;e.gK=1;I1(b);}
var SK=F();
var Hh=F(HW);
function Sw(){var a=this;Hh.call(a);a.h9=0;a.hY=0;a.ez=null;}
function ABF(a,b,c,d,e,f){var g=new Sw();AEB(g,a,b,c,d,e,f);return g;}
function AEB(a,b,c,d,e,f,g){OC(a,c);a.B=e;a.b1=f;a.hY=b;a.h9=g;a.ez=d;}
function MM(a,b,c){a.ez.data[b+a.hY|0]=c;}
function HN(){var a=this;C.call(a);a.nL=null;a.ke=null;a.ly=0.0;a.id=0.0;a.hE=null;a.g4=null;a.et=0;}
function ML(a,b){var c;if(b!==null){a.hE=b;return a;}c=new BF;Bb(c,B(127));J(c);}
function Pp(a,b){var c;if(b!==null){a.g4=b;return a;}c=new BF;Bb(c,B(127));J(c);}
function GZ(a,b,c,d){var e,f,g,h,i,j,$$je;a:{e=a.et;if(e!=3){if(d)break a;if(e!=2)break a;}b=new DK;U(b);J(b);}a.et=!d?1:2;while(true){try{f=Q0(a,b,c);}catch($$e){$$je=CX($$e);if($$je instanceof Bg){g=$$je;J(Xs(g));}else{throw $$e;}}if(E3(f)){if(!d)return f;h=BB(b);if(h<=0)return f;f=CZ(h);}else if(Eq(f))break;i=!Iu(f)?a.hE:a.g4;b:{if(i!==AHV){if(i===AH5)break b;else return f;}h=BB(c);j=a.ke;e=j.data.length;if(h<e)return AH8;Pk(c,j,0,e);}Db(b,b.B+Ho(f)|0);}return f;}
function RQ(a,b){var c,d;if(!BB(b))return SS(0);a.et=0;c=SS(BB(b)*a.ly|0);while(true){d=GZ(a,b,c,0);if(d===AH9)break;if(d===AH8){c=JM(a,c);continue;}if(!E0(d))continue;Go(d);}b=GZ(a,b,c,1);if(E0(b))Go(b);while(true){b=Jd(a,c);if(E3(b))break;if(!Eq(b))continue;c=JM(a,c);}PQ(c);return c;}
function JM(a,b){var c,d;c=b.eJ;d=RO(Ph(c,c.data.length*2|0));Db(d,b.B);return d;}
function Jd(a,b){var c,d;c=a.et;if(c!=2&&c!=4){b=new DK;U(b);J(b);}d=AH9;if(d===d)a.et=3;return d;}
function Ij(){var a=this;C.call(a);a.d$=0;a.e6=0;}
var AH9=null;var AH8=null;function Q7(a,b){var c=new Ij();Rw(c,a,b);return c;}
function Rw(a,b,c){a.d$=b;a.e6=c;}
function E3(a){return a.d$?0:1;}
function Eq(a){return a.d$!=1?0:1;}
function E0(a){return !LK(a)&&!Iu(a)?0:1;}
function LK(a){return a.d$!=2?0:1;}
function Iu(a){return a.d$!=3?0:1;}
function Ho(a){var b;if(E0(a))return a.e6;b=new D6;U(b);J(b);}
function CZ(b){return Q7(2,b);}
function Go(a){var b,c;switch(a.d$){case 0:b=new Lx;U(b);J(b);case 1:b=new Pv;U(b);J(b);case 2:b=new Od;c=a.e6;U(b);b.pG=c;J(b);case 3:b=new Lq;c=a.e6;U(b);b.pD=c;J(b);default:}}
function RU(){AH9=Q7(0,0);AH8=Q7(1,0);}
function B1(){var a=this;C.call(a);a.b4=0.0;a.cd=0.0;a.b2=0.0;a.b3=0.0;}
function Cv(a,b,c,d,e){a.b4=b;a.cd=c;a.b2=d;a.b3=e;}
function Ch(a,b){a.b4=b.b4;a.cd=b.cd;a.b2=b.b2;a.b3=b.b3;return a;}
var Ef=F(0);
var AH6=null;var AH$=null;var AH_=null;var AIa=null;var AIb=null;function TC(){AH6=F1(43);AH$=Cy(B(128));AH_=F1(85);AIa=DE(60,63,65);AIb=DE(33,66,131);}
function Gq(){var a=this;C.call(a);a.bi=null;a.P=null;a.bF=null;a.cA=null;}
function ZT(){var a=new Gq();MH(a);return a;}
function S4(a,b,c,d){var e=new Gq();XO(e,a,b,c,d);return e;}
function MH(a){a.bi=new Bw;a.P=new Bw;a.bF=new B1;a.cA=new B1;}
function XO(a,b,c,d,e){a.bi=new Bw;a.P=new Bw;a.bF=new B1;a.cA=new B1;Hp(a,b,c,d,e);}
function Hp(a,b,c,d,e){BE(a.bi,b,c);BE(a.P,d,e);}
function Fh(a,b){return FG(b,a.bi,a.P);}
function Gl(a,b,c,d){var e;e=a.bi;Dj(b,e.c+c|0,e.d+d|0,a.P,a.bF);}
function Gr(){Gq.call(this);this.dF=null;}
function RR(a,b,c,d){var e=new Gr();MZ(e,a,b,c,d);return e;}
function MZ(a,b,c,d,e){MH(a);a.dF=new B1;Hp(a,b,c,d,e);}
function O8(a){var b,c;b=a.P;c=a.dF;BE(b,c.b2-c.b4|0,c.b3-c.cd|0);}
function LN(a,b){FN(a,0,0,b.bl,b.bP);}
function FN(a,b,c,d,e){Cv(a.dF,b,c,d,e);}
function Ed(a,b,c,d,e,f){var g;g=a.bi;HB(b,g.c+d|0,g.d+e|0,a.P,a.dF,c,a.bF,a.cA,f);}
function FP(a,b){Ch(a.bF,b);}
function FL(a,b){Ch(a.cA,b);}
function Sy(){var a=this;C.call(a);a.cL=null;a.hn=0.0;a.ep=0.0;a.ea=0;}
function AAZ(){var a=new Sy();AEa(a);return a;}
function AEa(a){var b;b=S4(0,0,2,20);a.cL=b;a.hn=0.5;a.ep=0.0;EG(187,187,187,255,b.bF);}
function M0(a){return a.cL.P.d;}
function Hr(a){return a.cL.P.c;}
function M8(a,b){var c,d;a:{c=a.ea;if(b>a.ep)while(true){d=a.ep+a.hn;a.ep=d;a.ea=a.ea?0:1;if(b>d)continue;else break a;}}return a.ea==c?0:1;}
function Lo(a,b,c){BE(a.cL.bi,b,c);}
function MN(a,b){a.ep=b+a.hn*1.25;a.ea=1;}
function N$(a,b,c){if(a.ea)Gl(a.cL,b,c.c,c.d);}
function Ns(){var a=this;C.call(a);a.nl=null;a.c0=null;}
function ABP(a,b){var c,d,e,f,g,h,i;c=a.c0;d=c.f5;if(d!==null){e=c.b9.bi;f=e.c;g=b.bK;e.c=f+(g.c-d.c|0)|0;e.d=e.d+(g.d-d.d|0)|0;c.f5=g;}d=b.bK;f=d.c;c=c.dB;e=c.P;f=f-e.c|0;h=d.d-e.d|0;BE(c.bi,f,h);b=b.bK;a.nl=b;c=a.c0;d=c.cu.Q;f=0;a:{while(true){i=c.eu.data;if(f>=i.length)break;if(Fh(i[f],b)){b=c.nz.data[f];break a;}f=f+1|0;}b=null;}HD(d,b);return 1;}
function Y$(a,b,c,d){var e,f,g;e=( -d|0)/10|0;b=a.c0.b9;f=b.P;f.c=f.c+e|0;f.d=f.d+e|0;b=b.bi;g=b.c;e=e/2|0;b.c=g-e|0;b.d=b.d-e|0;return 1;}
function ADP(a,b,c,d,e){var f,g,h;f=!d?B(129):B(130);g=BT();h=new O;Q(h);V(H(V(H(h,f),c),B(131)),e);BL(g,P(h));if(!c&&e==1){g=b.bK;b=a.c0;b.f5=d&&Fh(b.b9,g)?g:null;if(d){Lo(a.c0.eE,g.c,g.d);b=a.c0;MN(b.eE,GU(b.cu.Q));}}if(!c&&e==2){b=a.c0;Pb(b,b.b9);}return 1;}
function AA2(a,b){var c,d,e,f,g,h;c=BT();d=!b.eN?B(132):B(133);e=b.fy;f=b.bH;g=b.hq;h=new O;Q(h);FF(H(V(H(H(H(h,d),e),B(134)),f),B(135)),g);BL(c,P(h));return !Rp(b)&&!SB(b)?1:0;}
function ADZ(a,b){BL(BT(),B(136));return 1;}
function Wa(a,b,c){var d,e;BL(BT(),B(137));d=!c?B(138):B(54);e=new O;Q(e);H(H(H(e,B(139)),d),B(140));Og(b,P(e));return 1;}
function ACA(a){BL(BT(),B(141));}
function Ps(){var a=this;B1.call(a);a.d2=0;a.d5=0;a.d3=0;a.d4=0;}
function F1(a){var b=new Ps();AEf(b,a);return b;}
function DE(a,b,c){var d=new Ps();XE(d,a,b,c);return d;}
function Cy(a){var b=new Ps();ACP(b,a);return b;}
function AIc(a,b,c,d){var e=new Ps();LM(e,a,b,c,d);return e;}
function GW(a){var b=new Ps();WV(b,a);return b;}
function AEf(a,b){LM(a,b,b,b,255);}
function XE(a,b,c,d){LM(a,b,c,d,255);}
function ACP(a,b){if(!(M(b)!=4&&M(b)!=7&&M(b)!=9)&&K(b,0)==35){if(M(b)==4){a.d2=Gz(K(b,1))*17|0;a.d5=Gz(K(b,2))*17|0;a.d3=Gz(K(b,3))*17|0;a.d4=255;}else{a.d2=Ic(K(b,1),K(b,2));a.d5=Ic(K(b,3),K(b,4));a.d3=Ic(K(b,5),K(b,6));a.d4=M(b)!=9?255:Ic(K(b,7),K(b,8));}EG(a.d2,a.d5,a.d3,a.d4,a);return;}}
function LM(a,b,c,d,e){a.d2=b;a.d5=c;a.d3=d;a.d4=e;EG(b,c,d,e,a);}
function WV(a,b){a.d2=b.d2;a.d5=b.d5;a.d3=b.d3;a.d4=b.d4;Ch(a,b);}
function Gz(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Ic(b,c){return (16*Gz(b)|0)+Gz(c)|0;}
var QX=F();
var H4=F(0);
var JC=F();
function Yc(a,b){return b.arrayBuffer();}
var JA=F();
function AA5(a,b){var c,d;c=new KT;d=new KR;return $rt_globals.WebAssembly.instantiate(b,Zz(Bh(c,"f"),Bh(d,"f")));}
var Jz=F();
function ABz(a,b){Wv(b);}
var Jy=F();
function W1(a,b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function LQ(){var a=this;C.call(a);a.fq=null;a.jD=null;a.eP=null;}
function VL(a,b,c,d){var e,f;e=(I5(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b=a.eP;b.c2=Bf(Bm(0,b.c2+Bi(e,f)|0),Ms(b));return 1;}
function ACL(a,b,c,d,e){if(!d&&a.fq!==null){a.fq=null;return 1;}if(!c&&e==1&&d){b=Fw(a.eP.eZ,b.bK,a.jD,1);a.fq=b;if(b!==null)return 1;}return 1;}
function Wl(a,b){var c;c=a.fq;if(c!==null){c.q(b.bK);return 1;}c=a.eP;return F3(c.eZ,b.bK,NW(c.cu.Q));}
function SP(){var a=this;C.call(a);a.dc=null;a.bQ=null;a.cf=null;a.cR=null;a.im=null;a.f2=null;}
function JQ(){var a=new SP();XT(a);return a;}
function XT(a){var b;a.dc=new Bw;a.bQ=new Bw;a.cf=new Bw;a.cR=new Bw;b=new B1;a.im=b;a.f2=new B1;Ch(b,AId);Ch(a.f2,AIe);}
function Hl(a){var b;b=a.bQ;return !Bi(b.c,b.d)?0:1;}
function Pq(a,b){return FG(b,a.cf,a.cR);}
function Fw(a,b,c,d){var e,f,g,h;e=Pq(a,b);f=FG(b,a.dc,a.bQ);if(!e&&!f)return null;if(!f){if(!d)c.q(Ne(a,b.c-a.cf.c|0));else c.q(Nc(a,b.d-a.cf.d|0));}g=!d?a.dc.c+(a.bQ.c/2|0)|0:a.dc.d+(a.bQ.d/2|0)|0;h=!d?b.c:b.d;g=!f?0:g-h|0;if(!d){b=new PT;b.iV=a;b.iU=c;b.iT=g;}else{b=new PU;b.nt=a;b.ns=c;b.nr=g;}return b;}
function Q6(b,c){var d;d=new I$;d.mf=b;d.me=c;return d;}
function Nc(a,b){var c,d,e;c=a.cR.d;d=a.bQ.d;e=c-d|0;return Q6(Bf(Bm(0,b-(d/2|0)|0),e),e);}
function Ne(a,b){var c,d,e;c=a.cR.c;d=a.bQ.c;e=c-d|0;return Q6(Bf(Bm(0,b-(d/2|0)|0),e),e);}
function HF(a,b,c,d,e,f){JV(a,b,c,d,e,0,f,1);}
function Ql(a,b,c,d,e,f,g){JV(a,b,c,d,e,f,g,0);}
function JV(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){BE(a.cR,0,0);BE(a.bQ,0,0);}else{i=g*3|0;i=Bm(Lk(d,d,e),i);j=Lk(b,d-i|0,e-d|0);if(!h){k=a.dc;k.c=j+f|0;k.d=c-g|0;l=a.bQ;l.c=i;l.d=g;l=a.cf;l.c=f;l.d=k.d;k=a.cR;k.c=d;k.d=g;}else{l=a.dc;l.c=c-g|0;l.d=j+f|0;k=a.bQ;k.c=g;k.d=i;k=a.cf;k.c=l.c;k.d=f;k=a.cR;k.c=g;k.d=d;}}}
function F$(a,b,c){var d,e,f;d=c.c;e=a.cf;Dj(b,d+e.c|0,c.d+e.d|0,a.cR,a.im);e=a.bQ;e.c=e.c-2|0;e.d=e.d-2|0;d=c.c;f=a.dc;Dj(b,(d+f.c|0)+1|0,(c.d+f.d|0)+1|0,e,a.f2);b=a.bQ;b.c=b.c+2|0;b.d=b.d+2|0;}
function F3(a,b,c){return Pq(a,b)&&GD(c)?1:0;}
function SQ(){var a=this;C.call(a);a.o6=20;a.es=null;a.de=null;a.fi=null;a.gN=0;a.fg=0;a.fz=0.0;a.bA=null;a.c3=null;a.dt=null;a.dD=0;}
function AAk(){var a=new SQ();ADJ(a);return a;}
function ADJ(a){a.o6=20;a.es=new Bw;a.de=new Bw;a.bA=E7();}
function PP(a,b){var c,d,e,f,g;c=a.dD;if(b==c)return;d=a.bA.p;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Bm(0,(c-1|0)/20|0);f=Bm(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){MT(a,b);a.dD=b;}else{if(a.dD>=b)while(true){if(g<f)break a;a.dD=Nb(BW(a.bA,g%d|0),a.c3,a.dt,a.dD,b,e,a.fz);g=g+(-1)|0;}while(f<=g){a.dD=Nb(BW(a.bA,f%d|0),a.c3,a.dt,a.dD,b,e,a.fz);f=f+1|0;}}}}
function ND(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=D4(a.bA);while(DJ(f)){g=DS(f);h=a.es;i=Bi(a.bA.p,a.fg);j=g.dk.d;k=((g.fu.d-(b%i|0)|0)+i|0)%i|0;l=k+j|0;m=BV(l,c);if(m<=0){BE(g.d6,g.bk.bl,j);Cv(g.dM,0.0,0.0,g.bk.bl,j);GE(g,e,k,h,d.fC,d.eQ);}else{if(m>0&&k<c){m=Bm(c-k|0,0);BE(g.d6,g.bk.bl,m);Cv(g.dM,0.0,0.0,g.bk.bl,m);GE(g,e,k,h,d.fC,d.eQ);}if(l>i){m=Bf(l%i|0,c);BE(g.d6,g.bk.bl,m);n=g.dM;o=g.bk;Cv(n,0.0,b%o.bP|0,o.bl,m);GE(g,e,0,h,d.fC,d.eQ);}}}}
function Hg(a,b,c,d){var e,f,g,h,i,j;e=a.bA.p;while(true){f=a.bA.p;g=Bi(f,a.fg);if(g>(d+a.gN|0))break;h=CB(0,g);i=new Jx;g=a.de.c;f=a.gN;j=a.fi;i.d6=new Bw;i.dM=new B1;i.fu=h;i.cm=20;i.cU=f;i.dk=CB(g,20*f|0);i.dO=Ni(j,f);if(i.bk===null)i.bk=Du(b);C5(a.bA,i);}if(f==e)return;MT(a,c);}
function MT(a,b){var c,d,e,f,g,h,i,j;c=a.bA;d=c.p;e=Bi((b/(d*20|0)|0)+1|0,d)*20|0;c=D4(c);while(DJ(c)){f=DS(c);g=a.c3;h=a.fz;Dt(g);i=0;while(true){j=f.cm;if(i>=j)break;j=e-Bi(d,j)|0;if(j<b)j=e;e=j+1|0;EE(f,g,CL(e),Bi(f.cU,i)+f.dO|0,h);i=i+1|0;}De(f.bk,g);}}
function Np(a,b,c,d){var e;a.fi=b;a.gN=c;e=c*20|0;a.fg=e;b=D_(a.c3,Dc(d,a.de.c,e));a.c3=b;DB(b,a.fi);ME(a.c3,2);b=D_(a.dt,Dc(d,a.de.c,c));a.dt=b;DB(b,a.fi);ME(a.dt,2);}
function Oi(a,b,c,d,e){DN(a.es,b);BE(a.de,c,d);a.fz=e;}
var Q8=F(0);
function Rf(b){return Fv(b,b,b,255);}
function Fv(b,c,d,e){return EG(b,c,d,e,new B1);}
function EG(b,c,d,e,f){Cv(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function JT(b,c,d,e,f){var g,h,i,j;g=b*6.0;c=d*c;h=g%2.0-1.0;if(h<=0.0)h= -h;i=c*(1.0-h);d=d-c;j=0.0;if(g>=1.0){if(g<2.0){b=c;c=i;i=b;}else if(g<3.0){b=c;j=i;c=0.0;i=b;}else if(g<4.0){j=c;c=0.0;}else if(g>=5.0){j=i;i=0.0;}else{j=c;c=i;i=0.0;}}f.b4=c+d;f.cd=i+d;f.b2=j+d;f.b3=e;return f;}
function E4(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var T_=F(0);
function Un(){var b,c,d,e,f;b=new Oy;c=DE(96,99,102);d=DE(49,51,53);e=DE(164,163,163);f=F1(50);b.fC=c;b.eQ=d;b.ki=e;b.kn=f;return b;}
function OV(){var a=this;C.call(a);a.fE=null;a.k0=null;a.eB=null;}
function Xj(a,b,c,d){var e,f;e=(I5(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b=a.eB;b.cx=Bf(Bm(0,b.cx+Bi(e,f)|0),Lp(b));return 1;}
function X0(a,b,c,d,e){if(!d&&a.fE!==null){a.fE=null;return 1;}if(!c&&e==1&&d){b=Fw(a.eB.en,b.bK,a.k0,1);a.fE=b;if(b!==null)return 1;}return 1;}
function XW(a,b){var c;c=a.fE;if(c!==null){c.q(b.bK);return 1;}c=a.eB;return F3(c.en,b.bK,NW(c.cu.Q));}
function Mc(){C.call(this);this.n8=null;}
function VU(a,b){var c,d,e;c=b.data;b=BT();d=c[0];e=new O;Q(e);H(H(e,B(124)),d);BL(b,P(e));b=BT();c=c[1];e=new O;Q(e);H(H(e,B(142)),c);BL(b,P(e));}
function Mb(){C.call(this);this.pE=null;}
function AEp(a,b){var c,d,e,f,g,h,i,j;c=b.data;d=BT();e=c[0];f=new O;Q(f);H(H(f,B(124)),e);BL(d,P(f));e=Pc(Mz(b,1));b=BT();g=c[1];d=new O;Q(d);BH(d,B(85));h=0;while(true){i=e.data;if(h>=i.length)break;if(h>0)BH(d,B(86));BJ(d,i[h]);h=h+1|0;}BH(d,B(87));j=P(d);d=new O;Q(d);H(H(H(H(d,B(143)),g),B(144)),j);BL(b,P(d));}
function Ma(){C.call(this);this.jz=null;}
function XI(a,b){NQ(a.jz,b);}
function L_(){C.call(this);this.nT=null;}
function AA8(a,b){var c,d,e,f,g;c=b.data;d=BT();e=c[0];f=new O;Q(f);H(H(f,B(124)),e);BL(d,P(f));e=Pt(Mz(b,1));b=BT();g=c[1];d=TL(e);c=new O;Q(c);H(H(H(H(c,B(145)),g),B(146)),d);BL(b,P(c));}
function Li(){var a=this;C.call(a);a.gh=null;a.jI=null;a.ie=null;}
function Vs(a,b){var c;c=b.eN&&!b.hq?1:0;if(c&&b.bR&&b.bH==79){if(!b.ba)Ip(a.gh,a.ie);else Il(a.gh,a.jI);return 1;}return 0;}
function L$(){C.call(this);this.oT=null;}
function AAp(a,b){var c,d;if(AHS===null)AHS=AAz(AIf,0);c=AHS;d=new O;Q(d);H(H(d,B(147)),b);BL(c,P(d));b=new D6;U(b);J(b);}
function L9(){C.call(this);this.kw=null;}
function ABV(a,b){var c,d,e,f;c=a.kw;d=c.cu.Q;e=new J$;e.k8=c;f=S(C,1);f.data[0]=b;DL(d,e,B(148),f);}
function Ls(){C.call(this);this.G=null;}
function AE0(a){var b=new Ls();RD(b,a);return b;}
function RD(a,b){a.G=b;}
function EC(a,b){return a.G.data[b];}
function B9(a){return a.G.data.length;}
function FX(a,b){return a.G.data[b].F;}
function H8(a,b){var c,d,e,f,g,h,i,j,k;c=a.G.data;d=c[b];e=c[b+1|0];f=new Ca;c=d.j;g=c.data;h=e.j;i=h.data;j=g.length;k=i.length;c=CV(c,j+k|0);Df(h,0,c,j,k);HR(f,c);h=a.G;j=h.data.length;if(b<j&&b>=0){g=S(Ca,j-1|0);c=g.data;L4(h,b,g);c[b]=f;a.G=g;return;}d=new Bg;U(d);J(d);}
function K3(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.G.data;if(!(c<d[b].F?0:1)){e=d[b];d=e.j;b=0;a:{while(true){f=d.data;g=f.length;if(b>=g)break a;h=M(f[b].l);if(c<h)break;c=c-h|0;b=b+1|0;}}if(M(f[b].l)==1)e.j=L4(d,b,S(BK,g-1|0));else{i=f[b];if(c<=0)j=Be(D9(i.l,1),i.bL,i.bm);else if(c>=(M(i.l)-1|0)){j=new BK;k=i.l;Id(j,Ct(k,0,M(k)-1|0),i.bL,i.bm);}else{d=BS(M(i.l)-1|0);l=d.data;g=0;while(g<c){l[g]=K(i.l,g);g=g+1|0;}g=l.length;while(c<g){k=i.l;h=c+1|0;l[c]=K(k,h);c=h;}j=Be(Fx(d),i.bL,i.bm);}f[b]=j;}e.F=e.F-1|0;DC(e);}
else if(b!=(d.length-1|0))H8(a,b);}
function Te(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){g=a.G.data[b];h=e[0];b=0;a:{while(true){i=b+1|0;d=g.j.data;if(i>=d.length)break a;f=M(d[b].l);if(c<=f)break;c=c-f|0;b=i;}}G0(g,b,c,h);g.F=g.F+M(h)|0;DC(g);return;}f=f-1|0;j=OP(a.G.data[b],c);d=a.G;k=CV(d,d.data.length+f|0);d=k.data;l=d.length-1|0;while(true){c=l-f|0;if(c<=b)break;d[l]=d[c];l=l+(-1)|0;}j=j.data;g=j[0];h=e[0];m=g.j.data;i=m.length;c=!i?0:M(m[i-1|0].l);G0(g,g.j.data.length-1|0,c,h);d[b]=j[0];i=1;while(i<f){if(EX(e[i]))h
=C4(S(BK,0));else{h=new Ca;m=S(BK,1);m.data[0]=Be(e[i],0,0);HR(h,m);}d[b+i|0]=h;i=i+1|0;}G0(j[1],0,0,e[f]);d[b+f|0]=j[1];a.G=k;}
function KE(a,b){var c,d,e,f,g,h,i;a:{c=Em(b);d=Gf(b);e=c.N;if(e==d.N)GF(a.G.data[e],c.bj,d.bj);else{b=a.G.data[e];GF(b,c.bj,b.F);GF(a.G.data[d.N],0,d.bj);e=c.N+1|0;f=d.N;g=a.G;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=S(Ca,(h-f|0)+e|0);Sh(g,e,f,i);a.G=i;H8(a,c.N);break a;}b=new Bg;U(b);J(b);}b=new Bg;U(b);J(b);}}}
function Sf(){var a=this;C.call(a);a.lc=0;a.l9=0;a.hL=null;a.cy=null;a.y=null;a.dl=null;a.bW=null;a.C=0;a.Y=0;a.cv=0;a.hc=0;a.kJ=0;a.bZ=null;a.bB=null;a.H=0;a.w=null;a.cw=null;a.h_=null;a.d_=null;a.mK=0;a.lB=0;a.bp=null;a.om=null;a.lv=0;a.bS=0;a.gu=0;a.ht=0;a.ff=null;a.dI=null;a.cN=null;a.dK=null;a.A=null;a.L=0;a.bv=0;a.eC=0;a.cq=0.0;a.e8=0;a.e3=0;a.n2=0;a.nG=0;a.fL=0;a.g6=0;a.c$=null;a.by=null;a.cO=null;a.la=null;a.fv=null;a.gb=Dl;a.bx=null;a.dn=null;a.mn=null;a.mE=null;}
function AGj(a,b){var c=new Sf();Vp(c,a,b);return c;}
function Vp(a,b,c){var d,e,f,g,h,i,j;a.lc=0;a.hL=S(BZ,10);a.bW=AAZ();a.kJ=16;a.bB=S(HV,4);d=new NI;d.eS=GW(AH6);d.l6=GW(AH_);d.iq=GW(AIa);d.is=GW(d.eS);d.hy=GW(AIb);e=(Nd()).data;f=e.length;g=S(JG,f);h=g.data;i=0;while(i<f){h[i]=e[i].hl;i=i+1|0;}d.jt=g;d.nn=Un();a.cw=d;a.d_=S(DP,0);j=new FA;j.cW=ZT();j.hv=new Bw;j.hK=null;j.dE=E7();a.bp=j;a.lv=100;a.gu=1;a.ff=CB(1,0);a.dI=ZT();a.cN=JQ();a.dK=JQ();j=new IZ;j.bV=new Hv;j.bU=new Hv;j.ca=0;a.A=j;a.L=0;a.bv=0;a.eC=0;a.e3=1;a.fL=1;a.g6=3;a.c$=AAk();a.by=new Bw;a.cO
=new Bw;a.la=new B1;a.fv=new Bw;a.bx=new Bw;j=new N4;j.m5=a;a.mn=j;j=new N3;j.k5=a;a.mE=j;a.cy=b;a.w=c;a.y=b.c7;a.dl=NW(b.Q);if(b.Q.ci!==(DW()).activeElement?0:1)Ll(a);c=a.bp;b=AIg;Ch(c.cW.bF,b);c=a.bp;b=AIh;d=new P0;d.io=a;Dp(c,B(149),b,d);b=a.bp;j=AIh;d=new P1;d.kh=a;Dp(b,B(150),j,d);b=a.bp;j=AIh;d=new PY;d.l$=a;Dp(b,B(151),j,d);b=a.bp;j=AIh;d=new PZ;d.i2=a;Dp(b,B(152),j,d);b=a.bp;j=F6();d=new P9;d.kL=a;Dp(b,B(111),j,d);b=a.bp;j=F6();d=new P$;d.mI=a;Dp(b,B(153),j,d);b=a.bp;j=F6();d=new P7;d.ji=a;Dp(b,B(31),
j,d);b=a.bp;j=F6();d=new P8;d.lf=a;Dp(b,B(39),j,d);e=a.hL.data;b=new N0;b.ja=a;e[0]=b;b=new NZ;b.mm=a;e[1]=b;b=new N2;b.li=a;e[2]=b;b=new N1;b.jj=a;e[3]=b;Qz();a.e8=AIi===AIj?0:1;}
function Ll(a){a.hc=1;Ih(a);}
function Ih(a){MN(a.bW,GU(a.cy.Q));}
function LR(a,b,c){var d,e,f,g,h,i,j,k;d=a.bB.data;e=Ew(0,0);f=a.y;g=c;d[e]=Fd(f,b,g,400,0);a.bB.data[Ew(0,1)]=Fd(a.y,b,g,400,2);a.bB.data[Ew(1,0)]=Fd(a.y,b,g,700,0);a.bB.data[Ew(1,1)]=Fd(a.y,b,g,700,2);f=a.bB.data[Ew(0,0)];a.bZ=f;e=IQ(f);h=EK(e*1.375);a.H=h;a.l9=h;f=a.bW;i=a.bZ;f.cL.P.d=h-(((h/2|0)-((((i.ha+i.l2|0)+i.ct|0)/2|0)/2|0)|0)*2|0)|0;a.h_=D_(a.h_,Dc(a.y,512,h));j=a.H;k=M0(a.bW);f=new O;Q(f);b=H(H(f,B(154)),b);BJ(b,32);V(H(V(H(V(H(V(b,c),B(155)),e),B(156)),j),B(157)),k);$rt_globals.console.info($rt_ustr(P(f)));if
(AIk){c=HY(a.bZ,a.H);b=new O;Q(b);V(H(b,B(158)),c);$rt_globals.console.info($rt_ustr(P(b)));}}
function Ee(a,b,c){var d,e,f,g,h;d=a.c$;Lg(d.bA,new Mk);JY(d.bA);d.c3=D_(d.c3,null);d.dt=D_(d.dt,null);$rt_globals.console.info("invalidateFont");e=a.d_.data;f=e.length;g=0;while(g<f){LH(e[g]);g=g+1|0;}e=a.w.G.data;g=e.length;h=0;while(h<g){DC(e[h]);h=h+1|0;}LR(a,b,c);I1(a);a.cv=Fg(DG(a),a.Y,a.y.cp,a.bB);El(a);Os(a);G1(a.cy.Q);}
function Na(a){return Bi(B9(a.w)+5|0,a.H);}
function DA(a){return Bm(Na(a)-B4(a)|0,0);}
function EL(a){return Bm(a.eC-Dz(a)|0,0);}
function Dz(a){return a.cO.c-a.bS|0;}
function B4(a){return a.cO.d-a.l9|0;}
function I1(a){Hp(a.dI,0,B4(a),a.cO.c,a.H);Ch(a.dI.bF,a.cw.iq);a.ff.d=B4(a);}
function U1(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;b=B4(a);c=a.cO.c;d=Ik(B4(a),a.H)+7|0;e=a.d_;if(e.data.length<d)a.d_=R6(d,e,a.mK,a.lB,a.w);C_(a.y,0);f=a.ff;f.c=a.gu;g=a.y;h=a.by;Dj(g,(h.c+a.bS|0)-a.ht|0,h.d,f,a.cw.l6);f=a.ff;i=a.ht;j=a.gu;f.c=i-j|0;g=a.y;h=a.by;Dj(g,((h.c+a.bS|0)-i|0)+j|0,h.d,f,a.cw.eS);a.L=Bf(a.L,DA(a));a.bv=Bf(a.bv,EL(a));i=(a.H-M0(a.bW)|0)/2|0;j=(a.cv-(Hr(a.bW)/2|0)|0)-a.bv|0;Lo(a.bW,a.bS+j|0,(i+Bi(a.C,a.H)|0)-a.L|0);k=B9(a.w);l=M9(a);m=Bf(((a.L+B4(a)|0)-1|0)/a.H|0,B9(a.w)-1|0);a.mK
=l;a.lB=m;n=l;while(n<=m&&n<k){h=EC(a.w,n);o=L1(a,n);p=a.h_;q=a.bB;r=a.y;s=a.H;d=Dz(a);t=a.bv;f=o.be;i=f===h&&!f.e7?0:1;if(i){o.be=h;HZ(h,r.cp,q);}d=R$(o,d);u=d<=o.cj?0:1;if(u)o.cj=d;if(!(!i&&!u)){if(AIl){e=h.dx;$rt_globals.console.info("fMeasure"+e.data);AIl=0;}NT(p,AIk);TS(o,p,r,q,s,t);o.be.e7=0;}TF(o,p,q,s,t);p=o.be;a.eC=Bm(a.eC,Ds(h)+(40.0*a.cq|0)|0);u=Bi(a.H,n)-a.L|0;f=a.by;TP(o,f.d+u|0,f.c+a.bS|0,a.y,a.la,a.fv,!a.e8?0.0:0.5,Dz(a),a.H,a.bv,a.cw,Ut(a,n,p));n=n+1|0;}n=l;while(n<=m&&n<k&&a.fL){f=L1(a,n);u
=Bi(a.H,n)-a.L|0;g=!RB(a.A,n)?a.cw.is:a.cw.hy;h=a.y;o=a.by;Tu(f,h,o.c+a.bS|0,o.d+u|0,a.H,a.fv,a.bv,Dz(a),g);n=n+1|0;}if(a.hc&&j>=(( -Hr(a.bW)|0)/2|0)){f=a.bW;g=a.cO;if(WD(f.cL.bi,0,0,g))N$(a.bW,a.y,a.by);}if(a.e3){t=Bf(m+1|0,k);Qx(a,b,c,Bi(a.H,t)-a.L|0);}Ua(a);S8(a,b,l,m);Tj(a);Uq(a);HF(a.cN,a.L,c,B4(a),Na(a),Mh(a));f=a.dK;i=a.bv;j=a.bS;Ql(f,i,b,c-j|0,a.eC,j,Mh(a));}
function Ut(a,b,c){var d,e,f,g;a:{d=a.A;e=Em(d);d=Gf(d);f=e.N;if(f<=b){g=BV(b,d.N);if(g<=0){d=CB(b<=f?e.bj:0,g>=0?d.bj:(-1));break a;}}d=null;}if(d!==null){if(d.d==(-1))d.d=c.F;d.c=Fg(c,d.c,a.y.cp,a.bB);d.d=Fg(c,d.d,a.y.cp,a.bB);}return d;}
function S8(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=Bf(b,Bi(B9(a.w),a.H)-a.L|0);f=a.c$;g=a.L;h=a.C;i=a.y;j=a.cw.nn;Hg(f,i,c,b);PP(f,c);ND(f,g,e,j,i);if(e<b){k=f.es;Dj(i,k.c,k.d+e|0,CB(f.de.c,b-e|0),j.eQ);}if(c<=h&&h<=d){c=h/20|0;k=f.bA;l=BW(k,c%k.p|0);m=f.es;e=Bi(f.bA.p,f.fg);k=l.dk;b=k.d;c=((l.fu.d-(g%e|0)|0)+e|0)%e|0;if((c+b|0)>e)c= -(g%l.bk.bP|0)|0;b=h%l.cm|0;d=l.cU;b=c+Bi(b,d)|0;if(b<( -d|0))b=b+e|0;BE(l.d6,k.c,d);f=l.dM;c=h%l.cm|0;d=l.cU;Cv(f,0.0,Bi(c,d),l.dk.c,d);GE(l,i,b,m,j.ki,j.kn);}}
function M9(a){return Bf(a.L/a.H|0,B9(a.w)-1|0);}
function Os(a){Np(a.c$,a.bB.data[0],a.H,a.y);Hg(a.c$,a.y,M9(a),B4(a));}
function L1(a,b){var c;c=a.d_.data;return c[b%c.length|0];}
function UE(a){var b,c,d,e,f,g,h,i;if(Dm(a.A))E5(a);DC(EC(a.w,a.C));b=a.w;c=a.C;d=a.Y;e=b.G;f=e.data;g=f[c];e=CV(e,f.length+1|0);f=e.data;b.G=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=C4(S(BK,0));b.G.data[c+1|0]=g;}else if(d==g.F){f[c]=g;f[c+1|0]=C4(S(BK,0));}else{f=(OP(g,d)).data;e=b.G.data;e[c]=f[0];e[c+1|0]=f[1];}return Dr(a,a.C+1|0,0,0);}
function Uo(a){if(Dm(a.A))E5(a);else K3(a.w,a.C,a.Y);El(a);return 1;}
function P3(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;if(Dm(a.A))E5(a);AIm=1;c=new LU;c.gr=S(Cb,10);c.d0=(-1);c.cY=(-1);c.S=(-1);d=new E6;d.cV=1;d.Z=B(159);d.I=BS(M(B(159))+2|0);Df(F2(B(159)),0,d.I,0,M(B(159)));e=d.I.data;f=e.length;e[f-1|0]=0;e[f-2|0]=0;d.k$=f;d.dR=0;DX(d);DX(d);c.e=d;c.cb=0;c.hg=PS(c,(-1),0,null);if(!Cx(c.e)){b=new Gv;c=c.e;GQ(b,B(29),c.Z,c.bY);J(b);}if(c.iY)c.hg.cF();g=E7();d=new MP;d.fb=(-1);d.gD=(-1);d.n1=c;d.mx=c.hg;d.fl=b;d.fb=0;h=M(b);d.gD=h;i=new Ob;j=d.fb;k=c.d0;l=c.cY+1|0;m=c.S+1|0;i.eR
=(-1);k=k+1|0;i.jo=k;i.ch=BU(k*2|0);e=BU(m);i.fQ=e;G4(e,(-1));if(l>0)i.g5=BU(l);G4(i.ch,(-1));PL(i,b,j,h);d.bJ=i;i.dh=1;m=0;f=0;if(!M(b)){n=S(Bq,1);n.data[0]=B(29);}else{while(Sd(d)){m=m+1|0;C5(g,Ct(b,f,KN(d.bJ,0)));f=MB(d.bJ,0);}C5(g,Ct(b,f,M(b)));o=m+1|0;if(o<0)o=0;n=RV(g,S(Bq,o));}e=n.data;Te(a.w,a.C,a.Y,n);o=a.C;m=e.length;f=(o+m|0)-1|0;Dr(a,f,f!=o?M(e[m-1|0]):a.Y+M(e[0])|0,0);ED(a);return 1;}
function E5(a){var b;b=Em(a.A);KE(a.w,a.A);Dr(a,b.N,b.bj,0);ED(a);}
function ED(a){var b;b=a.A;b.ca=0;Cp(b.bV,a.C,a.Y);Cp(a.A.bU,a.C,a.Y);}
function Uq(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;C_(a.y,1);b=a.bp;c=a.y;d=a.cq;e=b.cW.P;if(!(e.c&&e.d)){c=c.cp;DB(c,b.dH);f=IQ(b.dH);g=AIn;f=(f+g|0)+g|0;b.fB=Cj(2.0*d);b.gv=EK(b.dH.hV);g=0;h=0;i=f;while(true){e=b.dE;j=e.p;if(h>=j)break;e=BW(e,h);k=Eo(c,e.gG)+0.875|0;j=b.gv;k=(j+k|0)+j|0;e=e.cM;l=e.bi;l.c=g;l.d=0;l=e.P;l.c=k;l.d=f;Cv(e.dF,g,0.0,k,i);g=g+k|0;h=h+1|0;}c=b.hv;c.c=g;c.d=f;c=b.cW.P;h=b.fB;c.d=f+(h*2|0)|0;c.c=(g+Bi(h,j)|0)+h|0;}c=b.cW.P;B4(a);f=((!Hl(a.cN)?a.cO.c:a.cN.cf.c)-2|0)-c.c|0;b=a.bp;BE(b.cW.bi,
f,1);f=f+b.fB|0;h=0;while(true){c=b.dE;if(h>=c.p)break;c=(BW(c,h)).cM;e=c.bi;e.c=f;k=b.fB;e.d=1+k|0;f=f+(c.P.c+k|0)|0;h=h+1|0;}b=a.bp;c=a.y;m=a.by;if(!(b.fr!==null&&!b.gK)){e=b.hv;n=Dc(c,e.c,e.d);DB(n,b.dH);NT(n,AIo);o=AIn+(AIo?0.0:b.dH.gj);g=0;while(true){e=b.dE;if(g>=e.p)break;e=BW(e,g);CK(n,e.gG,e.cM.dF.b4+b.gv,o);g=g+1|0;}e=D_(b.fr,Du(c));b.fr=e;De(e,n);PO(n);b.gK=0;}Gl(b.cW,c,m.c,m.d);f=0;while(true){e=b.dE;if(f>=e.p)break;Ed((BW(e,f)).cM,c,b.fr,m.c,m.d,0.0);f=f+1|0;}}
function Mh(a){return a.bZ.hV|0;}
function Qx(a,b,c,d){var e,f,g;if(d<b){e=a.fv;e.d=b-d|0;b=a.bS;e.c=c-b|0;f=a.y;g=a.by;Dj(f,g.c+b|0,g.d+d|0,e,a.cw.eS);}}
function Ua(a){if(Hl(a.cN)){C_(a.y,1);F$(a.cN,a.y,a.by);}if(Hl(a.dK)){C_(a.y,1);F$(a.dK,a.y,a.by);}}
function Tj(a){var b,c,d;C_(a.y,0);EG(0,0,0,128,a.dI.bF);b=a.dI;c=a.y;d=a.by;Gl(b,c,d.c,d.d);}
function C$(a,b,c){return Bf(Bm(0,b),c);}
function Le(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=b.data;$rt_globals.console.info("onFileParsed");c=(Pt(b[0])).data;d=Pc(b[1]);e=c[0];f=c[1];g=c[2];b=S(Ca,e);h=E7();i=0;j=3+e|0;k=j+(4*f|0)|0;while(i<g){l=k+(3*i|0)|0;m=c[l];n=c[l+1|0];f=c[l+2|0];o=new Py;o.ou=m;o.pe=n;o.ph=f;C5(h,o);i=i+1|0;}p=b.data;f=0;g=0;while(f<e){k=c[3+f|0];q=S(BK,k);r=q.data;i=0;while(i<k){l=j+(4*g|0)|0;m=c[l];n=c[l+1|0];s=c[l+2|0];l=c[l+3|0];r[i]=Be(G9(d,m,n-m|0),s,l);i=i+1|0;g=g+1|0;}p[f]=C4(q);f=f+1|0;}o=AE0(b);a.w=o;e
=Fu(0,a.C,B9(o));Dr(a,e,Fu(0,a.Y,FX(a.w,e)),0);HD(a.cy.Q,AIp);G1(a.cy.Q);t=YZ(Ou(),a.gb);o=new O;Q(o);h=H(o,B(160));e=h.x;g=1;if(RP(t,Dl)){g=0;t=AFU(t);}a:{if(RP(t,X(10))){if(g)BN(h,e,e+1|0);else{BN(h,e,e+2|0);b=h.n.data;g=e+1|0;b[e]=45;e=g;}h.n.data[e]=Fs(EM(t),10);}else{k=1;u=X(1);while(true){v=Bz(u,X(10));if(FQ(v,u))break;if(RH(v,t))break;k=k+1|0;u=v;}if(!g)k=k+1|0;BN(h,e,e+k|0);if(g)g=e;else{b=h.n.data;g=e+1|0;b[e]=45;}while(true){if(FQ(u,Dl))break a;b=h.n.data;e=g+1|0;b[g]=Fs(EM(Cd(t,u)),10);t=GM(t,u);u
=Cd(u,X(10));g=e;}}}H(h,B(161));$rt_globals.console.info($rt_ustr(P(o)));}
function FJ(a,b,c,d,e){if(FD(a,e))return 1;if(c&&d)return 1;if(c)a.L=C$(a,a.L+((Bi(b,a.H)*12|0)/10|0)|0,DA(a));else if(!d){Fm(a,a.C+b|0,e);Nk(a);}return 1;}
function NE(a,b,c,d){var e,f,g;if(FD(a,d))return 1;e=DG(a);if(!c)f=a.Y+b|0;else if(b<0){b=a.cv;g=Fe(e,b);if(!g&&!b)f=(-1);else{f=0;b=0;while(b<g){f=f+M(e.j.data[b].l)|0;b=b+1|0;}}}else{g=a.cv;b=Fe(e,g);if(e.bM.data[b]==g)b=b+1|0;b=b+1|0;if(b>=e.j.data.length&&g==Ds(e))f=2147483647;else{f=0;c=0;while(c<b){f=f+M(e.j.data[c].l)|0;c=c+1|0;}}}if(f>e.F){if((a.C+1|0)<B9(a.w)){a.Y=0;Fm(a,a.C+1|0,d);}}else if(f>=0)Ff(a,f,d);else{c=a.C;if(c>0){a.Y=(EC(a.w,c-1|0)).F;Fm(a,a.C-1|0,d);}}Lc(a);return 1;}
function FD(a,b){if(Dm(a.A)&&!b){ED(a);El(a);return 1;}if(!(b&&Dm(a.A)))ED(a);return 0;}
function Dr(a,b,c,d){a.C=Fu(0,b,B9(a.w)-1|0);return Ff(a,c,d);}
function Fm(a,b,c){a.C=Fu(0,b,B9(a.w)-1|0);return Ff(a,a.Y,c);}
function Ff(a,b,c){a.Y=Fu(0,b,(DG(a)).F);a.cv=Fg(DG(a),a.Y,a.y.cp,a.bB);Ih(a);El(a);if(c)a.A.ca=1;Mw(a.A,a.C,a.Y);a.A.ca=0;return 1;}
function El(a){Nk(a);Lc(a);}
function Nk(a){var b,c,d,e,f;b=a.L;c=b+B4(a)|0;d=a.C;e=a.H;d=Bi(d,e);f=d+e|0;if(d<(b+e|0))a.L=C$(a,d-e|0,DA(a));else if(f>(c-e|0))a.L=C$(a,(f-B4(a)|0)+a.H|0,DA(a));}
function Lc(a){var b,c,d,e,f;b=(a.cq|0)*30|0;c=a.bv;d=c+Dz(a)|0;e=a.cv;f=e+b|0;if(e<(c+b|0))a.bv=C$(a,e-b|0,EL(a));else if(f>(d-b|0))a.bv=C$(a,(f-Dz(a)|0)+b|0,EL(a));}
function PM(a,b){var c,d;a.C=Fu(0,(b.d+a.L|0)/a.H|0,B9(a.w)-1|0);c=DG(a);d=QA(c,Bm(0,(b.c-a.bS|0)+a.bv|0),a.y.cp,a.bB);a.Y=d;a.cv=Fg(c,d,a.y.cp,a.bB);Ih(a);}
function DG(a){return EC(a.w,a.C);}
function Q$(a,b){var c,d,e,f;if(!Rp(b)&&!SB(b)){c=b.bR;if(c&&b.bH==65){d=B9(a.w)-1|0;c=FX(a.w,d);Cp(a.A.bV,0,0);Cp(a.A.bU,B9(a.w)-1|0,c);return 1;}if(!b.eN)return 0;e=b.bH;if(c&&e==79){if(!b.ba)N9(a);else Il(a.cy.Q,new JN);return 1;}if(c&&e==80){OW(a);return 1;}if(!(!b.cB&&!c)&&e>=48&&e<=57){d=e-48|0;f=a.hL.data[d];if(f!==null)f.bG();d=1;}else d=0;if(d)return 1;a:{switch(b.bH){case 33:d=b.bR?Fm(a,Ik(a.L,a.H),b.ba):FJ(a,2-OL(B4(a),a.H)|0,0,b.cB,b.ba);break a;case 34:d=!b.bR?FJ(a,OL(B4(a),a.H)-2|0,0,b.cB,b.ba)
:Fm(a,((a.L+B4(a)|0)/a.H|0)-1|0,b.ba);break a;case 35:if(!FD(a,b.ba)&&!Ff(a,(DG(a)).F,b.ba)){d=0;break a;}d=1;break a;case 36:if(!FD(a,b.ba)&&!Ff(a,0,b.ba)){d=0;break a;}d=1;break a;case 37:d=NE(a,(-1),b.bR,b.ba);break a;case 38:d=FJ(a,(-1),b.bR,b.cB,b.ba);break a;case 39:d=NE(a,1,b.bR,b.ba);break a;case 40:d=FJ(a,1,b.bR,b.cB,b.ba);break a;default:}d=0;}if(d&&b.ba)Cp(a.A.bU,a.C,a.Y);if(d)return 1;b:{switch(b.bH){case 8:if(Dm(a.A)){E5(a);d=1;}else{c=a.Y;if(!c&&!a.C)d=1;else{if(c){e=a.C;c=c-1|0;K3(a.w,e,c);}else
{e=a.C-1|0;c=FX(a.w,e);H8(a.w,e);}d=Dr(a,e,c,0);}}break b;case 13:break;case 16:case 17:case 18:case 20:case 45:d=1;break b;case 46:d=Uo(a);break b;default:d=0;break b;}d=UE(a);}if(d)return 1;d=b.bR;if(d&&b.bH==87){$rt_globals.console.info("Ctrl-W pressed ;)");return 1;}if(!d&&!b.cB&&!b.fo){if(b.bH==27)return 0;return M(b.fy)>0&&P3(a,b.fy)?1:0;}return 0;}return 0;}
function OW(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,$$je;a:{a.gb=Ou();b=a.cy.Q;c=new Ku;c.jv=a;d=S(C,1);e=a.w.G;f=AAq(e,0,e.data.length);g=new Jl;h=new LS;h.kv=f;h.oa=g;i=new MK;e=S(CY,0);j=new ID;TR(j);j.hf=E(CY);g=Q3(E(CY));g.$clinit();j.fV=BU((((AAM(g)).data.length-1|0)/32|0)+1|0);Hm(e);g=new JB;UM(g);g.g0=e;if(g instanceof ID){f=g;if(j.hf===f.hf){k=0;while(true){l=j.fV.data;if(k>=l.length)break;m=l[k];e=f.fV.data;if((m|e[k])!=l[k])l[k]=l[k]|e[k];k=k+1|0;}break a;}}g=D4(g);while(DJ(g)){if(!Q9(j,DS(g)))continue;}}n
=E7();while(true){g=new J7;g.pt=i;g.mu=n;f=h.kv;j=new Nj;j.oh=h;j.jJ=g;if(!I3(f,j))break;}g=D4(n);if(!DJ(g))g=B(29);else{f=new O;Q(f);Hq(f,DS(g));while(DJ(g)){Hq(f,B(159));Hq(f,DS(g));}g=P(f);}AFi();f=AIq;j=Td(g.bu);b:{try{g=RQ(Pp(ML(Px(f),AHV),AHV),j);break b;}catch($$e){$$je=CX($$e);if($$je instanceof DU){b=$$je;}else{throw $$e;}}J(X9(B(80),b));}if(!g.B&&g.b1==g.fR)l=g.eJ;else{l=C9(BB(g));KZ(g,l,0,l.data.length);}d.data[0]=l;DL(b,c,B(162),d);}
function N9(a){var b,c;b=a.cy.Q;c=new OM;c.lU=a;Ip(b,c);}
function L2(){C.call(this);this.cs=null;}
function Z_(a){Ll(a.cs.bT);}
function ADk(a){a.cs.bT.hc=0;}
function VA(a,b,c,d){var e,f;b=a.cs.bT;e=Cj((b.H*4|0)*d/150.0);f=Cj(c);b.L=C$(b,b.L+e|0,DA(b));b.bv=C$(b,b.bv+f|0,EL(b));return 1;}
function ADw(a,b,c,d,e){var f,g,h,i,j,k;f=a.cs.bT;g=f.bx;h=b.bK;i=h.c;j=f.by;BE(g,i-j.c|0,h.d-j.d|0);if(!d)f.A.ca=0;a:{if(!d&&f.dn!==null){f.dn=null;c=1;}else if(!c&&e==2&&d){PM(f,f.bx);El(f);b=DG(f);c=Fe(b,f.cv);if(!c)d=0;else{e=c+(-1)|0;d=0;i=0;while(i<=e){d=d+M(b.j.data[i].l)|0;i=i+1|0;}}e=Fe(b,f.cv);c=b.j.data.length;if(e>=c)e=c-1|0;i=0;k=0;while(k<(e+1|0)){i=i+M(b.j.data[k].l)|0;k=k+1|0;}Cp(f.A.bV,f.C,d);f.A.ca=1;Dr(f,f.C,i,0);f.A.ca=0;c=1;}else{if(!c&&e==1&&d){b:{g=f.bp;h=f.bx;if(d){g=Jk(g,h);if(g!==null)
{g.ip.bG();c=1;break b;}}c=0;}if(c){c=1;break a;}g=Fw(f.cN,f.bx,f.mn,1);f.dn=g;if(g!==null){c=1;break a;}g=Fw(f.dK,f.bx,f.mE,0);f.dn=g;if(g!==null){c=1;break a;}if(Fh(f.dI,f.bx)){f.dn=AIr;c=1;break a;}g=new KU;g.ma=f;g.l_=b;f.dn=g;g.q(f.bx);}c=1;}}return c;}
function AD7(a,b){var c,d,e,f,g,h;c=a.cs.bT;d=c.bx;b=b.bK;e=b.c;f=c.by;BE(d,e-f.c|0,b.d-f.d|0);b=c.dn;if(b!==null){b.q(c.bx);e=1;}else{b=c.bp;d=c.bx;f=c.dl;g=Jk(b,d);h=b.hK;if(h!==g){if(h!==null)J4(h,0);if(g!==null)J4(g,1);b.hK=g;}if(Fh(b.cW,d)&&GD(f)?1:0)e=1;else if(F3(c.cN,c.bx,c.dl))e=1;else if(F3(c.dK,c.bx,c.dl))e=1;else{b=c.c$;d=c.bx;f=c.dl;e=(FG(d,CB(0,0),b.de)&&GD(f)?1:0)?1:(FG(c.bx,CB(c.bS,0),CB(Dz(c),B4(c)))&&Ml(c.dl,B(106))?1:0)?1:GD(c.dl);}}return e;}
function AA_(a,b){return Q$(a.cs.bT,b);}
function AB4(a,b){return Gc()*2.0<=1.0?0:1;}
function WC(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.cs.bT;e=Em(d.A);f=e.N;if(!Dm(d.A)){g=EN(Ea(d.w.G.data[f]),B(159));h=Bf(B9(d.w)-1|0,f);Cp(d.A.bU,h,0);if(f>=(B9(d.w)-1|0))Cp(d.A.bU,h,FX(d.w,h));else Cp(d.A.bV,h+1|0,0);if(c)E5(d);else Dr(d,f,0,0);}else{i=d.w;j=d.A;k=Em(j);l=Gf(j);m=k.N;if(m==l.N)g=Ct(Ea(i.G.data[m]),k.bj,l.bj);else{n=new O;Q(n);g=i.G.data[k.N];m=k.bj;BJ(BH(n,D9(Ea(g),m)),10);o=i.G;p=k.N+1|0;f=l.N;if(p>=0&&f>=p&&f<=o.data.length){k=AAq(o,p,f);g=new K2;g.ix=n;while(true){q=new Ky;q.md=g;if
(!I3(k,q))break;}k=i.G.data[l.N];p=l.bj;BH(n,Ct(Ea(k),0,p));g=P(n);}else{b=new O7;U(b);J(b);}}if(c)KE(i,j);if(c){Dr(d,e.N,e.bj,0);ED(d);}}Og(b,g);return 1;}
function ABu(a){var b,c;b=a.cs.bT;Hm(b);c=new Oh;c.lr=b;return c;}
function Fo(){var a=this;C.call(a);a.ba=0;a.bR=0;a.cB=0;a.fo=0;}
function AIs(a,b,c,d){var e=new Fo();NN(e,a,b,c,d);return e;}
function NN(a,b,c,d,e){a.ba=d;a.bR=b;a.cB=c;a.fo=e;}
function KL(){var a=this;Fo.call(a);a.fy=null;a.bH=0;a.eN=0;a.hq=0;a.iZ=0;}
function Rp(b){var c,d;c=b.bR;if(c&&!b.ba&&!b.cB&&!b.fo?1:0){d=b.bH;if(!(d!=67&&d!=88&&d!=45))return 1;}d=b.ba&&!c&&!b.cB&&!b.fo?1:0;return d&&b.bH==46?1:0;}
function SB(b){var c;c=b.bH;return c!=122&&c!=123&&c!=116?0:1;}
var Uj=F();
function OL(b,c){return (b+(c/2|0)|0)/c|0;}
function Lk(b,c,d){if(b<(2147483647/c|0))return OL(Bi(b,c),d);return c*b/d|0;}
function Ik(b,c){return ((b+c|0)-1|0)/c|0;}
function Cj(b){return b+0.5|0;}
function EK(b){return b+0.5|0;}
function Fu(b,c,d){return Bm(b,Bf(c,d));}
function IU(){var a=this;Fo.call(a);a.bK=null;a.nD=null;}
var NH=F(0);
function K$(){var a=this;C.call(a);a.m7=null;a.m8=null;}
function ACH(a,b){var c,d;c=a.m7;d=a.m8;$rt_globals.console.info("paste plain string "+b);b=Fb(b);P3(c.lr,b);CU(d);}
function Nf(){C.call(this);this.jp=null;}
function Og(a,b){a.jp.clipboardData.setData("text/plain",$rt_ustr(b));}
function UL(){var a=this;Hb.call(a);a.oM=0;a.iC=0;}
function X$(a,b,c,d,e,f,g){var h=new UL();VM(h,a,b,c,d,e,f,g);return h;}
function VM(a,b,c,d,e,f,g,h){OC(a,c);a.oJ=AIt;a.gX=b;a.eJ=d;a.B=e;a.b1=f;a.oM=g;a.iC=h;}
var SY=F();
function GT(){var a=this;C.call(a);a.df=null;a.el=null;a.bl=0;a.bP=0;}
var AHK=0;function TH(a){var b;b=a.el;if(b!==null){AHK=AHK-1|0;a.df.cK.deleteTexture(b);a.el=null;}}
function It(a){var b,c;b=a.df.cK;c=a.el;b.bindTexture(3553,c);}
function QF(a,b){var c,d,e,f,g,h,i,j,k,l,m;a:{c=b.hd;d=b.g7;e=b.hu;QL();switch(AHZ.data[e.bE]){case 1:f=33321;break a;case 2:f=32856;break a;default:}b=new DR;U(b);J(b);}b:{Jv(a,c,d,f);e=a.df.cK;g=b.hd;h=b.g7;i=b.hu;switch(AHZ.data[i.bE]){case 1:j=6403;break b;case 2:j=6408;break b;default:}b=new DR;U(b);J(b);}b=b.gQ.data;i=b.buffer;k=b.byteOffset;l=b.byteLength;m=new $rt_globals.Uint8Array(i,k,l);e.texSubImage2D(3553,0,0,0,g,h,j,5121,m);}
function De(a,b){Jv(a,b.hI,b.g3,32856);Ln(a,b,0,0);}
function Jv(a,b,c,d){var e,f,g;a:{e=a.bl;if(e){f=a.bP;if(f){if(e==b&&f==c){It(a);break a;}g=new Bg;Bb(g,B(163));J(g);}}a.bl=b;a.bP=c;It(a);a.df.cK.texStorage2D(3553,1,d,b,c);g=a.df.cK;g.texParameteri(3553,10242,33071);g.texParameteri(3553,10243,33071);g.texParameteri(3553,10241,9729);g.texParameteri(3553,10240,9729);}}
function FZ(a,b,c,d){It(a);Ln(a,b,c,d);}
function Ln(a,b,c,d){var e;e=a.df.cK;b=b.fY;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function ON(){C.call(this);this.nk=null;}
function Wc(a,b){var c;c=a.nk.eP;c.c2=Gh(b,Ms(c));}
var Dd=F(0);
var AId=null;var AIe=null;var AIg=null;var AIu=null;var AIv=null;var AIw=null;var AIh=null;function F6(){return UQ(JT(Gc(),1.0,1.0,1.0,new B1),AIu,AIv);}
function Su(){AId=Fv(50,50,50,100);AIe=Fv(80,80,80,200);AIg=Fv(40,40,40,200);AIu=Fv(40,40,40,128);AIv=Fv(70,70,70,200);AIw=UQ(Cy(B(164)),AIu,AIv);AIh=UQ(Cy(B(165)),AIu,AIv);}
var OI=F(0);
var FE=F(0);
var DH=F();
function UM(a){}
function Lj(a){return a.p?0:1;}
function RV(a,b){var c,d,e,f,g,h;c=b.data;d=a.p;e=c.length;if(e<d)b=NY(F8(Di(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=D4(a);while(DJ(f)){g=b.data;h=e+1|0;g[e]=DS(f);e=h;}return b;}
var Je=F(0);
function Ez(){DH.call(this);this.c4=0;}
function D4(a){var b;b=new JJ;b.i9=a;b.mP=a.c4;b.kc=a.i4();b.k_=(-1);return b;}
var H6=F(0);
function Q2(){var a=this;Ez.call(a);a.b8=null;a.p=0;}
function E7(){var a=new Q2();Yl(a);return a;}
function Yl(a){a.b8=S(C,10);}
function JF(a,b){var c,d;c=a.b8.data.length;if(c<b){d=c>=1073741823?2147483647:Bm(b,Bm(c*2|0,5));a.b8=CV(a.b8,d);}}
function BW(a,b){Jc(a,b);return a.b8.data[b];}
function ABh(a){return a.p;}
function C5(a,b){var c,d;JF(a,a.p+1|0);c=a.b8.data;d=a.p;a.p=d+1|0;c[d]=b;a.c4=a.c4+1|0;return 1;}
function T6(a,b){var c,d,e,f;Jc(a,b);c=a.b8.data;d=c[b];e=a.p-1|0;a.p=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.c4=a.c4+1|0;return d;}
function JY(a){var b,c,d,e,f,g;b=a.b8;c=0;d=a.p;e=null;if(c>d){e=new BF;U(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.p=0;}
function Jc(a,b){var c;if(b>=0&&b<a.p)return;c=new Bn;U(c);J(c);}
function Lg(a,b){var c;c=0;while(c<a.p){b.q(a.b8.data[c]);c=c+1|0;}}
function Oy(){var a=this;C.call(a);a.fC=null;a.eQ=null;a.ki=null;a.kn=null;}
function Qf(){C.call(this);this.lm=null;}
function ABX(a,b){var c;c=a.lm.eB;c.cx=Gh(b,Lp(c));}
var S_=F();
function Zj(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;KX();b=AIx.bE;c=AIy.bE;d=AIz.bE;e=C2(B(55),0);f=C2(B(166),0);g=C2(B(167),0);h=C2(B(168),0);i=C2(B(169),0);j=C2(B(170),d);k=C2(B(56),0);l=C2(B(171),b);m=C2(B(172),b);n=ADv(B(166),c,0,1);o=ADv(B(167),c,0,1);p=C2(B(173),0);q=C2(B(174),b);return G(BK,[p,e,e,e,e,e,e,f,g,f,g,l,m,n,o,h,h,i,i,j,j,j,k,k,q,q]);}
function ADK(b){var c,d;c=(Nd()).data.length-1|0;d=AIA.bE;return G(BK,[Be(B(175),W(b,c),W(b,4)),Be(B(176),W(b,c),W(b,4)),Be(B(177),W(b,c),W(b,4)),Be(B(178),W(b,c),W(b,4)),Be(B(179),W(b,c),W(b,4)),Be(B(180),W(b,c),W(b,4)),Be(B(181),W(b,c),W(b,4)),Be(B(182),d,W(b,4)),Be(B(183),W(b,c),W(b,4)),Be(B(184),W(b,c),W(b,4)),Be(B(185),W(b,c),W(b,4)),Be(B(186),d,W(b,4)),Be(B(187),W(b,c),W(b,4)),Be(B(188),W(b,c),W(b,4)),Be(B(189),W(b,c),W(b,4)),Be(B(190),W(b,c),W(b,4)),Be(B(191),W(b,c),W(b,4)),Be(B(192),W(b,c),W(b,4)),Be(B(193),
W(b,c),W(b,4)),Be(B(194),W(b,c),W(b,4)),Be(B(195),W(b,c),W(b,4)),Be(B(196),W(b,c),W(b,4)),Be(B(197),W(b,c),W(b,4)),Be(B(198),W(b,c),W(b,4)),Be(B(193),W(b,c),W(b,4)),Be(B(199),W(b,c),W(b,4)),Be(B(200),W(b,c),W(b,4)),Be(B(201),W(b,c),W(b,4))]);}
function XD(b,c,d,e,f){var g,h,i,j,k,l,m;g=b.data;h=g.length-1|0;while(h>0){i=W(f,h+1|0);if(i!=h){j=g[h];k=g[i];g[i]=j;g[h]=k;}h=h+(-1)|0;}l=S(BK,d+W(f,e-d|0)|0);m=l.data;i=0;h=m.length;while(i<h){if((i&1)!=1)j=g[i/2|0];else{b=c.data;j=b[W(f,b.length)];}m[i]=j;i=i+1|0;}return l;}
function HV(){var a=this;C.call(a);a.fP=null;a.nS=null;a.n0=0.0;a.ct=0;a.n5=0;a.ov=0;a.ha=0;a.l2=0;a.gj=0.0;a.gp=0.0;a.nY=0.0;a.hV=0.0;a.n3=0;a.iM=null;}
function IQ(a){return EK(a.gj+a.gp);}
function NI(){var a=this;C.call(a);a.eS=null;a.l6=null;a.iq=null;a.is=null;a.hy=null;a.jt=null;a.nn=null;}
function DP(){var a=this;C.call(a);a.bd=0;a.be=null;a.cQ=null;a.cj=0;a.b0=0;}
var AIl=0;var AIB=0;var AIk=0;function HY(b,c){return (c-IQ(b)|0)/2|0;}
function Ni(b,c){return HY(b,c)+b.ha|0;}
function TF(a,b,c,d,e){var f,g;if(Lj(a.cQ))return;if(e>Ds(a.be))return;f=e/512|0;e=a.b0;if(f==e)return;if(I5(f-e|0)>=a.cj){g=0;while(g<a.cj){F4(a,b,d,c,f+g|0);g=g+1|0;}a.b0=f;return;}while(true){e=a.b0;if(e>=f)break;F4(a,b,d,c,e+a.cj|0);a.b0=a.b0+1|0;}while(true){e=a.b0;if(e<=f)break;F4(a,b,d,c,e-1|0);a.b0=a.b0-1|0;}}
function F4(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Dt(b);f=a.be.dx;g=e*512|0;h=KP(a,g);if(h>=a.be.j.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bd;a:{while(true){l=a.be.j.data;if(h>=l.length)break a;m=l[h];n=!AIk?Ni(d.data[m.bm],c):HY(d.data[m.bm],c);o=f.data;DB(b,d.data[m.bm]);CK(b,m.l,k,n);k=o[h]-j+a.bd;if(k>512.0)break;h=h+1|0;}}De(BW(a.cQ,e%a.cj|0),b);}
function TP(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj;if(Lj(a.cQ))return;if(!a.cj)return;if(j>Ds(a.be))return;m=a.be;n=m.bM.data;o=m.j;p=j/512|0;q=KP(a,j);if(q>n.length)return;r= -a.bd|0;s=i;a:{while(true){t=o.data;u=t.length;if(q>=u)break a;u=q!=(u-1|0)?0:1;if(r>=h)break;v=BW(a.cQ,p%a.cj|0);w=t[q];x=n[q]+a.bd|0;y=p*512|0;z=(x-y|0)>512?0:1;ba=p+1|0;bb=ba*512|0;bc=Bf(bb,x)-j|0;if(z&&u)bc=bc+a.bd|0;if((r+bc|0)>h)bc=h-r|0;bd=l!==null?0:1;b:{if(!bd){be=!u?a.bd:2*a.bd
|0;bf=l.c;bg=l.d;if(!(bf<bg&&j<=bg&&(j+bc|0)>(bf+be|0)?0:1)){be=0;break b;}}be=1;}c:{if(!bd){bd=!u?a.bd:2*a.bd|0;if(j>=l.c&&(j+bc|0)<=(l.d+bd|0)?1:0){bf=1;break c;}}bf=0;}if(!bf&&!be){l.d=Bf(l.d,Ds(a.be));bg=j>=l.c?bc:(Bf(x,bb)-l.c|0)-(!u?a.bd:0)|0;bh=(j+bc|0)<=(l.d+(!u?a.bd:2*a.bd|0)|0)?0:(Bf(x,bb)-l.d|0)-(!u?a.bd:0)|0;y=j-y|0;u=r+c|0;bi=y;bd=bc-bg|0;Cv(e,bi,0.0,bd,s);BE(f,bd,i);F0(a,d,u,b,f,e,w,v,g,k,0);bd=y+bc|0;Cv(e,bd-bh|0,0.0,bh,s);BE(f,bh,i);u=u+bc|0;F0(a,d,u-bh|0,b,f,e,w,v,g,k,0);bj=bd-bg|0;bd=bg-bh
|0;Cv(e,bj,0.0,bd,s);BE(f,bd,i);F0(a,d,u-bg|0,b,f,e,w,v,g,k,1);}else{Cv(e,j-y|0,0.0,bc,s);BE(f,bc,i);F0(a,d,r+c|0,b,f,e,w,v,g,k,bf);}j=j+bc|0;r=r+bc|0;if(!z){q=q+(-1)|0;p=ba;}q=q+1|0;}}}
function F0(a,b,c,d,e,f,g,h,i,j,k){var l,m;if(e.c&&e.d){if(f.b3!==0.0&&f.b2!==0.0){l=j.jt.data[g.bL];if(k)m=j.hy;else{m=l.lx;if(m===null)m=j.eS;}g=l.lw;if(AIB)i=0.0;HB(b,c,d,e,f,h,g,m,i);return;}return;}}
function KP(a,b){var c,d,e,f,g,h,i;c=a.be;d=c.dx;e=0;f=c.j.data.length;g=b;b=BV(e,f);if(b>0){c=new BF;U(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BV(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function R$(a,b){var c;c=a.be;if(c===null)return 0;if(Ds(c)<b)return Ik(Ds(a.be),512);return Ik(b,512)+1|0;}
function TS(a,b,c,d,e,f){var g,h;a.b0=f/512|0;while(true){g=a.cQ;if(g.p>=a.cj)break;C5(g,Du(c));}h=0;while(h<a.cj){F4(a,b,e,d,a.b0+h|0);h=h+1|0;}}
function LH(a){a.be=null;Lg(a.cQ,new LI);JY(a.cQ);}
function Tu(a,b,c,d,e,f,g,h,i){var j,k;j=Ds(a.be);if(j)j=j+a.bd|0;if(!j)j=j-a.bd|0;k=Bm( -a.bd|0,j-g|0);if(k>=h)return;BE(f,h-k|0,e);Dj(b,c+k|0,d,f,i);}
function R6(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=S(DP,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=EC(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.be===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new DP;f.bd=3;f.cQ=E7();f.b0=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)LH(o);h=h+1|0;}return g;}
function T9(){AIk=0;}
function FA(){var a=this;C.call(a);a.dH=null;a.cW=null;a.hv=null;a.fB=0;a.gv=0;a.hK=null;a.dE=null;a.fr=null;a.gK=0;}
var AIn=0;var AIo=0;function Dp(a,b,c,d){var e,f;e=new KA;f=new Gr;MH(f);f.dF=new B1;e.cM=f;e.gG=b;e.g8=c;e.ip=d;Ch(f.bF,c.mc);Ch(e.cM.cA,c.gq);C5(a.dE,e);b=new MG;b.od=a;b.oc=e;return b;}
function Jk(a,b){var c,d,e;c=0;while(true){d=a.dE;if(c>=d.p)return null;e=BW(d,c);if(Fh(e.cM,b))break;c=c+1|0;}return e;}
function Ri(){AIn=0;AIo=0;}
function IZ(){var a=this;C.call(a);a.bV=null;a.bU=null;a.ca=0;}
function Mw(a,b,c){Cp(a.bU,b,c);if(!a.ca)Cp(a.bV,b,c);}
function Em(a){if(PR(a.bV,a.bU)>0)return a.bU;return a.bV;}
function Gf(a){if(PR(a.bV,a.bU)<0)return a.bU;return a.bV;}
function Dm(a){var b,c;b=a.bV;c=a.bU;return (b===c?1:c!==null&&Di(b)===Di(c)?(b.N==c.N&&b.bj==c.bj?1:0):0)?0:1;}
function RB(a,b){var c,d;if(!Dm(a))return 0;c=Em(a);d=Gf(a);return c.N<=b&&b<d.N?1:0;}
function N4(){C.call(this);this.m5=null;}
function Xk(a,b){var c;c=a.m5;c.L=Gh(b,DA(c));}
function N3(){C.call(this);this.k5=null;}
function ACs(a,b){var c;c=a.k5;c.bv=Gh(b,EL(c));}
var NR=F(0);
function GD(a){return Ml(a,null);}
function NW(b){var c;c=new JU;c.i_=b;return c;}
function N0(){C.call(this);this.ja=null;}
function Wu(a){var b,c;b=a.ja;c=b.e8?0:1;b.e8=c;b=new O;Q(b);FF(H(b,B(202)),c);$rt_globals.console.info($rt_ustr(P(b)));}
function NZ(){C.call(this);this.mm=null;}
function ACq(a){var b,c;b=a.mm;c=b.e3?0:1;b.e3=c;b=new O;Q(b);FF(H(b,B(203)),c);$rt_globals.console.info($rt_ustr(P(b)));}
function N2(){C.call(this);this.li=null;}
function Y2(a){var b,c;b=a.li;c=b.fL^1;b.fL=c;b=new O;Q(b);FF(H(b,B(204)),c);$rt_globals.console.info($rt_ustr(P(b)));}
function N1(){C.call(this);this.jj=null;}
function AAw(a){var b,c,d,e,f;b=a.jj;c=(b.g6+3|0)%6|0;b.g6=c;d=b.d_.data;e=d.length;f=0;while(f<e){b=d[f];b.bd=c;b=b.be;if(b!==null)b.e7=1;f=f+1|0;}}
var Ec=F(B7);
var AIi=null;var AIC=null;var AIj=null;var AID=null;function Qz(){Qz=Bl(Ec);AAB();}
function Tc(a,b){var c=new Ec();S3(c,a,b);return c;}
function Y4(){Qz();return AID.cJ();}
function S3(a,b,c){Qz();Dq(a,b,c);}
function AAB(){var b;AIi=Tc(B(205),0);AIC=Tc(B(206),1);b=Tc(B(207),2);AIj=b;AID=G(Ec,[AIi,AIC,b]);}
var Ts=F();
function PV(){var a=this;C.call(a);a.hu=null;a.gQ=null;a.hd=0;a.g7=0;}
function AIE(a,b,c){var d=new PV();TA(d,a,b,c);return d;}
function TA(a,b,c,d){a.hu=d;a.hd=b;a.g7=c;M_();a.gQ=C9(Bi(d===AH2?b*4|0:(b+3|0)&(-4),c));}
function UO(){var a=this;C.call(a);a.hG=0;a.hH=0;}
function AGB(a,b){var c=new UO();ADR(c,a,b);return c;}
function ADR(a,b,c){var d;a.hG=b;a.hH=c;d=0;while(d<19){Mm(a);d=d+1|0;}}
function Mm(a){var b,c;b=a.hG;c=a.hH;b=b^b<<2;b=b^b>>>7;b=c^c>>>3^b;a.hG=c;a.hH=b;return b;}
function W(a,b){return 5.9604644775390625E-8*(Mm(a)&16777215)*b|0;}
function Ca(){var a=this;C.call(a);a.j=null;a.F=0;a.dx=null;a.bM=null;a.er=null;a.eq=0;a.e7=0;}
var AIF=0;var AIG=0;var AIH=0;function C4(a){var b=new Ca();HR(b,a);return b;}
function HR(a,b){var c,d,e,f;c=b.data;a.j=b;d=0;e=c.length;f=0;while(f<e){d=d+M(c[f].l)|0;f=f+1|0;}a.F=d;}
function GF(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.F){a.j=S(BK,0);DC(a);a.F=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.j.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=M(g[e].l);i=M(a.j.data[f].l);j=BV(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.j.data[f];if(!b&&c==M(k.l)?1:0){g=a.j;a.j=L4(g,e,S(BK,g.data.length-1|0));a.F=a.F-d|0;return;}a.j.data[e]=Be(EN(Ct(k.l,0,b),D9(k.l,c)),k.bL,k.bm);}else{g=a.j.data;l=g[e];m=g[f];if(b){if(b!=M(l.l))a.j.data[e]
=Be(Ct(l.l,0,b),l.bL,l.bm);e=e+1|0;}if(c==M(m.l))f=f+1|0;else if(c)a.j.data[f]=Be(D9(m.l,c),m.bL,m.bm);g=a.j;a.j=Sh(g,e,f,S(BK,(g.data.length-f|0)+e|0));}a.F=a.F-d|0;DC(a);}
function OP(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return G(Ca,[C4(S(BK,0)),a]);if(b>=a.F)return G(Ca,[a,C4(S(BK,0))]);c=a.j;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=M(e[d].l);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return G(Ca,[C4(HQ(c,0,S(BK,d))),C4(HQ(c,d,S(BK,f-d|0)))]);h=e[d];e=HQ(c,0,S(BK,d+1|0));i=e.data;j=HQ(c,d,S(BK,f-d|0));c=j.data;i[d]=Be(Ct(h.l,0,b),h.bL,h.bm);c[0]=Be(D9(h.l,b),h.bL,h.bm);return G(Ca,[C4(e),C4(j)]);}
function G0(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=a.j.data;if(!e.length){f=S(BK,1);f.data[0]=Be(d,0,0);a.j=f;}else{g=e[b];if(c<=0)h=Be(EN(d,g.l),g.bL,g.bm);else if(c>=M(g.l))h=Be(EN(g.l,d),g.bL,g.bm);else{i=M(d);j=i+c|0;k=M(g.l)-c|0;f=BS(M(g.l)+i|0);l=f.data;m=0;while(m<c){l[m]=K(g.l,m);m=m+1|0;}m=0;while(m<i){l[m+c|0]=K(d,m);m=m+1|0;}m=0;while(m<k){l[m+j|0]=K(g.l,m+c|0);m=m+1|0;}h=Be(Fx(f),g.bL,g.bm);}e[b]=h;}a.F=a.F+M(d)|0;DC(a);}
function HZ(a,b,c){var d,e,f,g,h,i,j;d=a.j.data.length;e=a.dx;if(!(e!==null&&e.data.length>=d)){a.dx=Vw(d);a.bM=BU(d);a.eq=1;}if(!a.eq)AIG=AIG+1|0;else{f=0;g=0.0;AIF=AIF+1|0;h=0;while(h<d){i=c.data;j=a.j.data[h];f=f+M(j.l)|0;DB(b,i[j.bm]);g=g+Eo(b,j.l);a.dx.data[h]=g;a.bM.data[h]=g+0.5|0;h=h+1|0;}a.F=f;a.eq=0;}}
function DC(a){a.eq=1;a.e7=1;a.er=null;}
function QA(a,b,c,d){var e,f,g,h,i,j,k;if(a.bM===null)HZ(a,c,d);e=a.j.data.length;if(!e)return 0;if(b<=0)return 0;if(b>=a.bM.data[e-1|0])return a.F;f=Fe(a,b);if(f==a.j.data.length)return a.F;g=O$(a,c,d,f);h=0;i=0;while(i<f){h=h+M(a.j.data[i].l)|0;i=i+1|0;}e=!f?0:a.bM.data[f-1|0];j=a.bM.data[f];i=0;a:{while(true){d=g.data;if(i>=d.length){f=j;break a;}f=d[i];if(b<f)break;h=h+1|0;i=i+1|0;j=f;e=f;}}if(AIH){c=new O;Q(c);V(H(V(H(V(H(c,B(208)),e),B(209)),b),B(210)),f);$rt_globals.console.info($rt_ustr(P(c)));k=h;$rt_globals.console.info(" pos = "
+k);}if((b-e|0)>(f-b|0))h=h+1|0;return h;}
function O$(a,b,c,d){var e,f,g,h,i,j,k;if(a.er===null)a.er=S($rt_arraycls($rt_intcls()),a.j.data.length);e=a.er.data[d];if(e===null){e=c.data;f=a.j.data[d];DB(b,e[f.bm]);f=f.l;e=BU(M(f)-1|0);c=F2(f);g=!d?0.0:a.dx.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bq;k=i+1|0;Qg(f,c,0,k);h[i]=g+Eo(b,f)+0.5|0;i=k;}a.er.data[d]=e;}return e;}
function Fe(a,b){var c;c=TD(a.bM,0,a.j.data.length,b);if(c<0)c=( -c|0)-1|0;return c;}
function Fg(a,b,c,d){var e,f,g,h,i;if(!a.j.data.length)return 0;if(!b)return 0;if(!(!a.eq&&a.bM!==null))HZ(a,c,d);if(b>=a.F)return a.bM.data[a.j.data.length-1|0];e=0;f=0;a:{while(true){g=a.j.data;if(f>=g.length)break a;h=e+M(g[f].l)|0;i=BV(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.bM.data[f];}return (O$(a,c,d,f)).data[(b-e|0)-1|0];}
function Ds(a){var b,c,d;a:{b=a.j.data.length;if(b){c=a.bM.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Ea(a){var b,c,d,e;b=new O;Ex(b,a.F);c=a.j.data;d=c.length;e=0;while(e<d){BH(b,c[e].l);e=e+1|0;}return P(b);}
function Qy(){AIH=0;}
function Hv(){var a=this;C.call(a);a.N=0;a.bj=0;}
function Cp(a,b,c){a.N=b;a.bj=c;}
function PR(a,b){var c;c=BV(a.N,b.N);if(c)return c;return BV(a.bj,b.bj);}
function JU(){C.call(this);this.i_=null;}
function Ml(a,b){HD(a.i_,b);return 1;}
function P0(){C.call(this);this.io=null;}
function ADp(a){OW(a.io);}
function P1(){C.call(this);this.kh=null;}
function Xe(a){N9(a.kh);}
function PY(){C.call(this);this.l$=null;}
function Zp(a){var b,c;b=a.l$;c=b.bZ;Ee(b,c.fP,c.ct+1|0);}
function PZ(){C.call(this);this.i2=null;}
function ACE(a){var b,c,d;b=a.i2;c=b.bZ;d=c.ct;if(d>7)Ee(b,c.fP,d-1|0);}
function P9(){C.call(this);this.kL=null;}
function ACc(a){var b;b=a.kL;Ee(b,B(111),b.bZ.ct);}
function P$(){C.call(this);this.mI=null;}
function AA4(a){var b;b=a.mI;Ee(b,B(153),b.bZ.ct);}
function P7(){C.call(this);this.ji=null;}
function AEm(a){var b;b=a.ji;Ee(b,B(31),b.bZ.ct);}
function P8(){C.call(this);this.lf=null;}
function Wd(a){var b;b=a.lf;Ee(b,B(39),b.bZ.ct);}
function Hu(){C.call(this);this.o4=null;}
var AIt=null;var AII=null;function XQ(a){var b=new Hu();Qm(b,a);return b;}
function Qm(a,b){a.o4=b;}
function U4(){AIt=XQ(B(211));AII=XQ(B(212));}
function SW(){var a=this;C.call(a);a.mc=null;a.gq=null;a.nh=null;}
function UQ(a,b,c){var d=new SW();AB8(d,a,b,c);return d;}
function AB8(a,b,c,d){a.mc=b;a.gq=c;a.nh=d;}
function B3(){B7.call(this);this.hl=null;}
var AIJ=null;var AIx=null;var AIK=null;var AIA=null;var AIz=null;var AIL=null;var AIM=null;var AIN=null;var AIO=null;var AIP=null;var AIy=null;var AIQ=null;var AIR=null;var AIS=null;function KX(){KX=Bl(B3);ADW();}
function CP(a,b,c){var d=new B3();Th(d,a,b,c);return d;}
function ADY(a,b,c,d){var e=new B3();Tm(e,a,b,c,d);return e;}
function Nd(){KX();return AIS.cJ();}
function Th(a,b,c,d){KX();Dq(a,b,c);a.hl=AAJ(d,null);}
function Tm(a,b,c,d,e){KX();Dq(a,b,c);a.hl=AAJ(d,e);}
function ADW(){var b;AIJ=CP(B(213),0,AH$);AIx=CP(B(214),1,DE(204,120,50));AIK=CP(B(215),2,Cy(B(216)));AIA=CP(B(217),3,Cy(B(218)));AIz=CP(B(219),4,Cy(B(220)));AIL=CP(B(221),5,DE(188,63,60));AIM=CP(B(222),6,Cy(B(223)));AIN=CP(B(224),7,Cy(B(164)));AIO=CP(B(225),8,Cy(B(226)));AIP=ADY(B(227),9,AH$,DE(52,65,52));AIy=ADY(B(228),10,Cy(B(229)),Cy(B(230)));AIQ=CP(B(231),11,Cy(B(232)));b=CP(B(233),12,Cy(B(234)));AIR=b;AIS=G(B3,[AIJ,AIx,AIK,AIA,AIz,AIL,AIM,AIN,AIO,AIP,AIy,AIQ,b]);}
function BK(){var a=this;C.call(a);a.l=null;a.bL=0;a.bm=0;}
function C2(a,b){var c=new BK();AEh(c,a,b);return c;}
function Be(a,b,c){var d=new BK();Id(d,a,b,c);return d;}
function ADv(a,b,c,d){var e=new BK();ABy(e,a,b,c,d);return e;}
function AEh(a,b,c){Id(a,b,c,0);}
function Id(a,b,c,d){a.l=b;a.bL=c;a.bm=d;}
function ABy(a,b,c,d,e){Id(a,b,c,Ew(d,e));}
function Ew(b,c){return (!b?0:2)+(!c?0:1)|0;}
function JG(){var a=this;C.call(a);a.lw=null;a.lx=null;}
function AAJ(a,b){var c=new JG();Ww(c,a,b);return c;}
function Ww(a,b,c){a.lw=b;a.lx=c;}
var OE=F(0);
function M4(){C.call(this);this.eI=null;}
function Pc(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.eI));}
function Pt(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.eI));}
function Xn(a){var b,c;b=a.eI.byteLength;c=new O;Q(c);H(V(H(c,B(235)),b),B(236));return P(c);}
var NU=F(0);
function HU(){var a=this;C.call(a);a.e1=null;a.dT=null;a.hT=null;}
function Tp(a,b){var c=new HU();Zf(c,a,b);return c;}
function AES(a,b,c){var d=new HU();J1(d,a,b,c);return d;}
function Qv(b){var c,d,e,f,g,h,i,j,k;c=new HU;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=NY(E(OA),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=f[h];h=h+1|0;}}i=g.data;h=i.length;if(!h)j=S(Bq,0);else{j=S(Bq,h-1|0);g=j.data;h=0;k=g.length;while(h<k){g[h]=Fb(i[h]);h=h+1|0;}}}else j=S(Bq,0);J1(c,d,b,j);return c;}
function Zf(a,b,c){J1(a,b,c,S(Bq,0));}
function J1(a,b,c,d){a.e1=b;a.dT=c;a.hT=d;}
function Fz(a){var b;b=a.e1;return Fb(b!==null?b.name:a.dT.name);}
function Zy(a){var b,c,d,e,f,g;if(a.dT===null){b=a.hT;c=Fz(a);d=Ry(b);e=new O;Q(e);H(H(H(e,d),B(237)),c);c=P(e);}else{b=a.hT;c=Fz(a);f=a.dT.size;g=f|0;if(g!==f){d=Fz(a);e=new O;Q(e);H(H(e,B(238)),d);$rt_globals.console.info($rt_ustr(P(e))+f);g=0;}d=Ry(b);e=new O;Q(e);V(H(H(H(H(e,d),B(237)),c),B(239)),g);c=P(e);}return c;}
var D6=F(Bg);
function HL(){var a=this;HN.call(a);a.jP=null;a.i8=null;}
function Q0(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.jP;e=0;f=0;g=a.i8;a:{while(true){if((e+32|0)>f&&CN(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bf(BB(b)+j|0,i.length);JI(b,d,j,f-j|0);e=0;}if(!CN(c)){k=!CN(b)&&e>=f?AH9:AH8;break a;}i=g.data;j=Bf(BB(c),i.length);l=new JO;l.iv=b;l.kk=c;k=SR(a,d,e,f,g,0,j,l);e=l.mk;j=l.m9;if(k===null){if(!CN(b)&&e>=f)k=AH9;else if(!CN(c)&&e>=f)k=AH8;}Pk(c,g,0,j);if(k!==null)break;}}Db(b,b.B-(f-e|0)|0);return k;}
var K9=F(HL);
function SR(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Ii(h,2))break a;i=AH8;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!IA(l)){if((f+3|0)>g){j=j+(-1)|0;if(Ii(h,3))break a;i=AH8;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!B$(l)){i=CZ(1);break a;}if
(j>=d){if(CN(h.iv))break a;i=AH9;break a;}c=j+1|0;m=k[j];if(!Cn(m)){j=c+(-2)|0;i=CZ(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Ii(h,4))break a;i=AH8;break a;}k=e.data;o=Do(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.mk=j;h.m9=f;return i;}
var Gk=F(C1);
function KA(){var a=this;C.call(a);a.cM=null;a.ip=null;a.g8=null;a.gG=null;}
function J4(a,b){Ch(a.cM.cA,!b?a.g8.gq:a.g8.nh);}
function MG(){var a=this;C.call(a);a.od=null;a.oc=null;}
var IX=F(0);
function IO(){var a=this;C.call(a);a.dj=null;a.dQ=null;}
function IY(a,b){var c;c=a.dQ;a.dQ=b;return c;}
function DZ(){var a=this;IO.call(a);a.U=null;a.bb=null;a.cE=0;a.dG=0;}
function G7(a){var b;b=HO(a);if(b==2){if(HO(a.bb)<0)a.bb=Jt(a.bb);return KB(a);}if(b!=(-2))return a;if(HO(a.U)>0)a.U=KB(a.U);return Jt(a);}
function HO(a){var b,c;b=a.bb;c=b===null?0:b.cE;b=a.U;return c-(b===null?0:b.cE)|0;}
function Jt(a){var b;b=a.U;a.U=b.bb;b.bb=a;Dh(a);Dh(b);return b;}
function KB(a){var b;b=a.bb;a.bb=b.U;b.U=a;Dh(a);Dh(b);return b;}
function Dh(a){var b,c,d;b=a.bb;c=b===null?0:b.cE;b=a.U;d=b===null?0:b.cE;a.cE=Bm(c,d)+1|0;a.dG=1;b=a.U;if(b!==null)a.dG=1+b.dG|0;b=a.bb;if(b!==null)a.dG=a.dG+b.dG|0;}
function Ga(a,b){return b?a.bb:a.U;}
function GL(a,b){return b?a.U:a.bb;}
var UK=F();
function Wv(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new KW;c=c.buffer;d.dv=c;d.h8=new $rt_globals.Int8Array(c);d.gd=new $rt_globals.Uint16Array(c);d.lR=new $rt_globals.Int32Array(c);d.j6=new $rt_globals.Float32Array(c);d.ka=new $rt_globals.Float64Array(c);e=d.dv.byteLength;c=new O;Q(c);V(H(c,B(240)),e);B_(P(c));e=b.callToCpp1();c=new O;Q(c);V(H(c,B(241)),e);B_(P(c));f=b.callToCpp2();c=new O;Q(c);ER(H(c,B(242)),f);B_(P(c));c=Jh(d,b.getC8String());g=new O;Q(g);H(H(g,B(243)),c);B_(P(g));c=
Jo(d,b.getC16String());g=new O;Q(g);H(H(g,B(244)),c);B_(P(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.dv,h,8));c=TL(i);g=new O;Q(g);H(H(g,B(245)),c);B_(P(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.dv,h,8));c=ACz(j);g=new O;Q(g);H(H(g,B(246)),c);B_(P(g));k=Se(d,b.getCDoubleArray8(),8);l=AEx(k);c=new O;Q(c);H(H(c,B(247)),l);B_(CG(c));l=AEq(b.getC8String(),B(248),d);c=Gs();H(H(c,B(249)),l);B_(CG(c));l=AAd(b.getC16String(),B(250),
d);c=Gs();H(H(c,B(251)),l);B_(CG(c));c=ABC(i,d,b.getCIntArray8(),EA([11,22,33,44,55,66,77,88]));g=Gs();H(H(g,B(252)),c);B_(CG(g));c=ACN(j,d,b.getCFloatArray8(),100,EA([111,222,333,444,555,666,777,888]));g=Gs();H(H(g,B(253)),c);B_(CG(g));b=ACW(k,d,b.getCDoubleArray8(),1000,EA([1111,2222,3333,4444,5555,6666,7777,8888]));c=Gs();H(H(c,B(254)),b);B_(CG(c));}
function ACN(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(255);h=0;i=e;a:{while(h<g){if(EK(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.j6[e>>>2]!==b[h])break a;h=h+1|0;}return B(256);}return B(257);}
function ACW(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(255);h=0;i=e;a:{while(h<g){if(Cj(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.ka[e>>>3]!==b[h])break a;h=h+1|0;}return B(256);}return B(257);}
function ABC(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(255);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.lR[h>>>2]!=b[g])break a;g=g+1|0;}return B(256);}return B(257);}
function AEq(b,c,d){var e,f,g,h;e=Jh(d,b);if(!Cq(c,e))return B(258);f=0;while(f<M(e)){g=K(e,f);h=b+f|0;if(g!=d.h8[h])return B(259);f=f+1|0;}return B(256);}
function AAd(b,c,d){var e,f,g,h;e=Jo(d,b);if(!Cq(c,e))return B(258);f=0;while(f<M(e)){g=K(e,f);h=b+(f*2|0)|0;if(g!=(d.gd[h>>>1]&65535))return B(259);f=f+1|0;}return B(256);}
function B_(b){KS(B(2),b);}
function Zz(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
var Ti=F();
function TM(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AIT());}return b.data.length;}
function NY(b,c){if(b===null){b=new F9;U(b);J(b);}if(b===E($rt_voidcls())){b=new BF;U(b);J(b);}if(c>=0)return ADM(b.c_,c);b=new Qh;U(b);J(b);}
function ADM(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Gu=F(Bg);
var KC=F(0);
var KT=F();
function Yv(a,b,c){var d,e;d=b;e=c;b=new O;Q(b);V(H(V(H(b,B(260)),d),B(261)),e);B_(P(b));return d+e|0;}
var KD=F(0);
var KR=F();
function Zc(a,b,c){var d,e;d=b;e=c;b=new O;Q(b);ER(H(ER(H(b,B(262)),d),B(261)),e);B_(P(b));return d+e;}
var Rr=F();
var QE=F(0);
var Cg=F();
var Tn=F(Cg);
var TV=F(Cg);
var Ru=F(Cg);
var RK=F(Cg);
var Ui=F(Cg);
function Jx(){var a=this;C.call(a);a.bk=null;a.fu=null;a.dk=null;a.cm=0;a.cU=0;a.d6=null;a.dM=null;a.dO=0;}
function Nb(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.cm;i=Bi(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bm(i,e))a:{while(true){if(d<=e){j=d;break a;}Dt(c);j=d+(-1)|0;b=CL(d);d=Bi(j,a.cU)%a.dk.d|0;EE(a,c,b,a.dO,g);FZ(a.bk,c,0,d);if(!(j%a.cm|0))break;d=j;}}else{Dt(b);k=a.cm-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;EE(a,b,CL(j),Bi(a.cU,k)+a.dO|0,g);k=k+(-1)|0;j=h;}De(a.bk,b);j=Bm(i,e);}return j;}k=a.cm;h=Bi(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Bf(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Dt(c);b=CL((d+f|0)+1|0);j=d
+1|0;d=Bi(d,a.cU)%a.dk.d|0;EE(a,c,b,a.dO,g);FZ(a.bk,c,0,d);if(!(j%a.cm|0))break;d=j;}}else{Dt(b);d=0;while(d<a.cm){h=h+1|0;EE(a,b,CL((h>e?h-f|0:h)+f|0),Bi(a.cU,d)+a.dO|0,g);d=d+1|0;}De(a.bk,b);j=Bf(i,e);}return j;}
function GE(a,b,c,d,e,f){HB(b,a.fu.c+d.c|0,c+d.d|0,a.d6,a.dM,a.bk,e,f,0.0);}
function EE(a,b,c,d,e){CK(b,c,a.dk.c-20.0*e,d);}
var R4=F();
var Ub=F(0);
function HQ(b,c,d){Df(b,c,d,0,d.data.length);return d;}
function L4(b,c,d){var e;if(c>0)Df(b,0,d,0,c);e=d.data.length;if(c<e)Df(b,c+1|0,d,c,e-c|0);return d;}
function Sh(b,c,d,e){var f;if(c>0)Df(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Df(b,d,e,c,f-d|0);}return e;}
function TO(b,c){var d,e;d=b.data.length;e=CV(b,d+1|0);e.data[d]=c;return e;}
function Pj(){var a=this;C.call(a);a.oy=null;a.oz=0;a.ox=null;}
function OB(){DH.call(this);this.mN=null;}
var Sp=F(Cg);
var Qh=F(Bg);
var Gn=F(0);
function Rl(){var a=this;C.call(a);a.r9=null;a.rT=null;}
var LI=F();
function ADE(a,b){TH(b);}
function JJ(){var a=this;C.call(a);a.h2=0;a.mP=0;a.kc=0;a.k_=0;a.i9=null;}
function DJ(a){return a.h2>=a.kc?0:1;}
function DS(a){var b,c,d;b=a.mP;c=a.i9;if(b<c.c4){c=new Iq;U(c);J(c);}d=a.h2;a.k_=d;a.h2=d+1|0;return c.lh(d);}
var QB=F();
function FG(b,c,d){var e,f;a:{e=b.c;f=c.c;if(e>=f&&e<(f+d.c|0)){e=b.d;f=c.d;if(e>=f&&e<(f+d.d|0)){e=1;break a;}}e=0;}return e;}
function WD(b,c,d,e){var f;a:{f=b.c;if(f>=c&&f<(c+e.c|0)){c=b.d;if(c>=d&&c<(d+e.d|0)){c=1;break a;}}c=0;}return c;}
var DU=F(Gk);
var US=F(DD);
function X9(a,b){var c=new US();XA(c,a,b);return c;}
function XA(a,b,c){a.fA=1;a.fW=1;a.lZ=b;a.kE=c;}
var IC=F(CT);
var AIU=0.0;var AIV=null;function TG(){AIU=$rt_globals.NaN;AIV=E($rt_floatcls());}
var Ej=F();
var AHs=null;var AHu=null;var AHv=null;var AHt=null;var AHr=null;function SF(){AHs=EA([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AHu=WR([X(1),X(10),X(100),X(1000),X(10000),X(100000),X(1000000),X(10000000),X(100000000),X(1000000000),BQ(1410065408, 2),BQ(1215752192, 23),BQ(3567587328, 232),BQ(1316134912, 2328),BQ(276447232, 23283),BQ(2764472320, 232830),BQ(1874919424, 2328306),BQ(1569325056, 23283064),BQ(2808348672, 232830643)]);AHv=WR([X(1),X(10),X(100),X(10000),X(100000000),BQ(1874919424, 2328306)]);AHt
=new NC;AHr=new Oj;}
var Hi=F();
var AIW=null;var AIX=null;function Tb(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.i6=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.gI=0;c.gt=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(EJ(Ck(X(e),X(8388608)),Dl)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=Tl(AIX,f);if(h<0)h=( -h|0)-2|0;i=AIX.data;j=9+(f-i[h]|0)|0;k=X(e);l=AIW.data;m=EM(C3(Bz(k,X(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=EM(C3(Bz(k,X(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g:l[h]<<( -g|0);o
=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BV(q,r);e=e>0?Bi(m/q|0,q):e<0?Bi(m/r|0,r)+r|0:Bi((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.gI=e;c.gt=h-50|0;}
function R0(){var b,c,d,e,f,g,h,i;AIW=BU(100);AIX=BU(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AIW.data;g=d+50|0;f[g]=$rt_udiv(e,20);AIX.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:EM(BY(X(h),EU(Bz(X(b&((1<<i)-1|0)),X(10)),i)));f=AIW.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AIX.data[i]=c;d=d+1|0;}}
function Oj(){var a=this;C.call(a);a.gI=0;a.gt=0;a.i6=0;}
function Iv(){var a=this;C.call(a);a.of=null;a.il=0.0;a.oA=0.0;a.c9=null;a.eo=null;a.hM=null;a.dd=0;}
function UF(a,b){var c;if(b!==null){a.eo=b;return a;}c=new BF;Bb(c,B(263));J(c);}
function Tr(a,b){var c;if(b!==null){a.hM=b;return a;}c=new BF;Bb(c,B(263));J(c);}
function Lt(a,b,c,d){var e,f,g,$$je;e=a.dd;if(!(e==2&&!d)&&e!=3){a.dd=d?2:1;while(true){try{f=UH(a,b,c);}catch($$e){$$je=CX($$e);if($$je instanceof Bg){g=$$je;J(Xs(g));}else{throw $$e;}}if(Eq(f))return f;if(E3(f)){if(d&&CN(b)){if(a.eo===AHY)return CZ(BB(b));if(BB(c)<=M(a.c9))return AH8;Db(b,b.B+BB(b)|0);if(a.eo===AHV)Hk(c,a.c9);}return f;}if(LK(f)){g=a.eo;if(g===AHY)return f;if(g===AHV){if(BB(c)<M(a.c9))return AH8;Hk(c,a.c9);}Db(b,b.B+Ho(f)|0);}else if(Iu(f)){g=a.hM;if(g===AHY)break;if(g===AHV){if(BB(c)<M(a.c9))return AH8;Hk(c,
a.c9);}Db(b,b.B+Ho(f)|0);}}return f;}b=new DK;U(b);J(b);}
function Re(a,b){var c,d,e,f;c=a.dd;if(c&&c!=3){b=new DK;U(b);J(b);}if(!BB(b))return U0(0);if(a.dd)a.dd=0;d=U0(Bm(8,BB(b)*a.il|0));while(true){e=Lt(a,b,d,0);if(E3(e))break;if(Eq(e))d=MY(a,d);if(!E0(e))continue;Go(e);}b=Lt(a,b,d,1);if(E0(b))Go(b);while(true){f=a.dd;if(f!=3&&f!=2){b=new DK;U(b);J(b);}a.dd=3;if(E3(AH9))break;d=MY(a,d);}PQ(d);return d;}
function MY(a,b){var c,d;c=b.ez;d=Td(QQ(c,Bm(8,c.data.length*2|0)));Db(d,b.B);return d;}
function NC(){var a=this;C.call(a);a.hi=Dl;a.gi=0;a.iS=0;}
var DK=F(Bg);
var TB=F(DD);
function Xs(a){var b=new TB();AAm(b,a);return b;}
function AAm(a,b){a.fA=1;a.fW=1;a.kE=b;}
var KK=F(0);
var EO=F(DH);
function TR(a){}
function Ly(){var a=this;EO.call(a);a.o1=0;a.cr=null;a.fN=null;a.h5=0;a.hO=0;a.fK=null;a.f6=0;a.hj=0;a.le=0;}
function Hz(){var a=this;Iv.call(a);a.jb=null;a.lE=null;}
function UH(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.jb;e=0;f=0;g=a.lE;a:{while(true){if((e+32|0)>f&&CN(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;h=f-e|0;f=Bf(BB(b)+h|0,i.length);KZ(b,d,h,f-h|0);e=0;}if(!CN(c)){j=!CN(b)&&e>=f?AH9:AH8;break a;}i=g.data;h=BB(c);k=i.length;l=Bf(h,k);m=new N_;m.k2=b;m.mj=c;j=UU(a,d,e,f,g,0,l,m);e=m.nc;if(j===null&&0==m.gl)j=AH9;h=m.gl;n=0;if(c.h9){b=new GB;U(b);J(b);}if(BB(c)<h)break;if(n>=k){b=new Bn;c=new O;Q(c);BJ(V(H(V(H(c,B(95)),n),B(89)),k),41);Bb(b,P(c));J(b);}l
=n+h|0;if(l>k){b=new Bn;c=new O;Q(c);V(H(V(H(c,B(97)),l),B(92)),k);Bb(b,P(c));J(b);}if(h<0){b=new Bn;c=new O;Q(c);H(V(H(c,B(93)),h),B(94));Bb(b,P(c));J(b);}l=c.B;o=0;while(o<h){p=l+1|0;k=n+1|0;MM(c,l,i[n]);o=o+1|0;l=p;n=k;}c.B=c.B+h|0;if(j!==null)break a;}b=new FV;U(b);J(b);}Db(b,b.B-(f-e|0)|0);return j;}
var Nm=F(Hz);
function UU(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(HA(h,2))break a;i=AH9;break a;}c=k+1|0;n=j[k];if(!En(a,n)){c=c+(-2)|0;i=CZ(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(HA(h,3))break a;i=AH9;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!En(a,n))break b;if(!En(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(IA(p)){c=k+(-3)|0;i=CZ(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=CZ(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(HA(h,4))break a;i=AH9;break a;}if((f+2|0)>g){c=k+(-1)|0;if(BB(h.mj)<2?0:1)break a;i=AH8;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!En(a,n))break c;if(!En(a,o))break c;if(!En(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=F5(r);m=c+1|0;j[c]=Gt(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=CZ(1);break a;}c=k+(-3)|0;i
=CZ(1);}h.nc=c;h.gl=f;return i;}
function En(a,b){return (b&192)!=128?0:1;}
var Iq=F(Bg);
var Hf=F(CT);
var AIY=0.0;var AIZ=null;function Rk(){AIY=$rt_globals.NaN;AIZ=E($rt_doublecls());}
var H$=F();
var AI0=null;var AI1=null;function SC(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.iS=EJ(Ck(d,BQ(0, 2147483648)),Dl)?0:1;e=Ck(d,BQ(4294967295, 1048575));f=EM(EU(d,52))&2047;if(EJ(e,Dl)&&!f){c.hi=Dl;c.gi=0;return;}g=0;if(f)e=AFl(e,BQ(0, 1048576));else{e=D$(e,1);while(EJ(Ck(e,BQ(0, 1048576)),Dl)){e=D$(e,1);f=f+(-1)|0;g=g+1|0;}}h=Tl(AI1,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AI1.data[h]|0)|0;j=Md(e,AI0.data[h],i);if(RJ(j,BQ(2808348672, 232830643))){h=h+1|0;i=12+(f-AI1.data[h]|0)|0;j=Md(e,AI0.data[h],i);}k
=C3(AI0.data[h],(63-i|0)-g|0);l=EU(BY(k,X(1)),1);m=EU(k,1);if(EJ(e,BQ(0, 1048576)))m=EU(m,2);n=X(10);while(FQ(n,m)){n=Bz(n,X(10));}if(RJ(GM(j,n),Cd(m,X(2))))n=Cd(n,X(10));o=X(1);while(FQ(o,l)){o=Bz(o,X(10));}if(RH(YZ(o,GM(j,o)),Cd(l,X(2))))o=Cd(o,X(10));f=AFH(n,o);e=f>0?Bz(Cd(j,n),n):f<0?BY(Bz(Cd(j,o),o),o):Bz(Cd(BY(j,Cd(o,X(2))),o),o);if(RJ(e,BQ(2808348672, 232830643))){h=h+1|0;e=Cd(e,X(10));}else if(RP(e,BQ(1569325056, 23283064))){h=h+(-1)|0;e=Bz(e,X(10));}c.hi=e;c.gi=h-330|0;}
function Md(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Ck(b,X(65535));f=Ck(C3(b,16),X(65535));g=Ck(C3(b,32),X(65535));h=Ck(C3(b,48),X(65535));i=Ck(c,X(65535));j=Ck(C3(c,16),X(65535));k=Ck(C3(c,32),X(65535));l=Ck(C3(c,48),X(65535));m=BY(BY(Bz(k,e),Bz(j,f)),Bz(i,g));n=BY(BY(BY(Bz(l,e),Bz(k,f)),Bz(j,g)),Bz(i,h));o=BY(BY(D$(Bz(l,h),32+d|0),D$(BY(Bz(l,g),Bz(k,h)),16+d|0)),D$(BY(BY(Bz(l,f),Bz(k,g)),Bz(j,h)),d));return BY(d>16?BY(o,D$(n,d-16|0)):BY(o,C3(n,16-d|0)),C3(m,32-d|0));}
function Si(){var b,c,d,e,f,g,h,i,j,k;AI0=AGy(660);AI1=BU(660);b=BQ(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AI0.data;g=d+330|0;f[g]=In(e,X(80));AI1.data[g]=c;e=In(e,X(10));h=QK(e,X(10));while(FQ(e,b)&&EJ(Ck(e,BQ(0, 2147483648)),Dl)){e=D$(e,1);c=c+1|0;h=D$(h,1);}e=BY(e,Cd(h,X(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(RH(e,BQ(3435973836, 214748364))){e=EU(e,1);j=j+1|0;d=d+(-1)|0;}k=Bz(e,X(10));b=j<=0?k:BY(k,EU(Bz(Ck(b,X((1<<j)-1|0)),X(10)),j));f=AI0.data;g=(330-i|0)-1|0;f[g]=In(b,X(80));AI1.data[g]
=d;i=i+1|0;}}
var MD=F(CT);
var AI2=null;function In(b,c){return Long_udiv(b, c);}
function QK(b,c){return Long_urem(b, c);}
function Sg(){AI2=E($rt_longcls());}
function JO(){var a=this;C.call(a);a.iv=null;a.kk=null;a.mk=0;a.m9=0;}
function Ii(a,b){return BB(a.kk)<b?0:1;}
var Qp=F();
function Mz(b,c){return b.data[c];}
function Qk(){var a=this;C.call(a);a.jV=0;a.h4=null;a.fT=null;a.jx=null;a.mb=null;a.ml=0;a.l4=0;a.cZ=0;a.fF=0;}
function YK(a,b,c,d,e,f){var g=new Qk();VQ(g,a,b,c,d,e,f);return g;}
function VQ(a,b,c,d,e,f,g){var h,i;a.h4=b;a.jV=b.ed;b=b.co;h=b!==null?b.cE:0;i=c.data;a.fT=CV(c,h);a.cZ=i.length;a.mb=d;a.ml=e;a.l4=f;a.fF=g;L0(a);}
function L0(a){var b,c;if(a.ml){b=a.cZ;if(b){c=Es(a.h4.dC,a.fT.data[b-1|0].dj,a.mb);if(a.fF)c= -c|0;if(!a.l4){if(c>=0)a.cZ=0;}else if(c>0)a.cZ=0;return;}}}
var GB=F(D6);
var FV=F(Bg);
var Io=F(Bg);
var Qb=F(Bg);
function PE(){C.call(this);this.mB=null;}
function Y9(a,b){var c,d,e,f;c=a.mB;d=new O;Q(d);H(H(d,B(264)),b);$rt_globals.console.info($rt_ustr(P(d)));d=new MX;d.or=c;d.j4=b;e=new MW;e.nB=c;f=new NV;f.oi=e;e=new Ow;e.i7=d;c=b.dT;if(c!==null)c.arrayBuffer().then(Bh(e,"f"),Bh(f,"f"));else{b=b.e1.getFile();c=new Ox;c.mg=e;c.mh=f;b.then(Bh(c,"f"),Bh(f,"f"));}}
function PH(){C.call(this);this.oR=null;}
function AEd(a,b){var c;c=new O;Q(c);H(H(c,B(265)),b);$rt_globals.console.info($rt_ustr(P(c)));}
function Oh(){C.call(this);this.lr=null;}
var Lx=F(Bg);
var Pv=F(Bg);
function Od(){DU.call(this);this.pG=0;}
function Lq(){DU.call(this);this.pD=0;}
var Uv=F();
function NS(b,c,d,e){var f,g;f=b.next();g=new PD;g.iF=b;g.iE=c;g.iI=d;g.iG=e;f.then(Bh(g,"f"),Bh(d,"f"));}
function QU(b){$rt_globals.console.info("JsFileDialog: "+b);}
function UV(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(DW()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Pz;f.kG=b;f.kH=d;d.addEventListener("change",Bh(f,"handleEvent"));d.click();}
function Q1(b,c){var d;if(c.isFile?1:0)b.q(Qv(c.file()));else{c=c.createReader();d=new Po;d.mt=b;c.readEntries(Bh(d,"f"));}}
var QR=F();
var JN=F();
function AC0(a,b){var c;c=new O;Q(c);H(H(c,B(265)),b);$rt_globals.console.info($rt_ustr(P(c)));}
function KU(){var a=this;C.call(a);a.ma=null;a.l_=null;}
function Ve(a,b){var c,d;c=a.ma;d=a.l_.ba;PM(c,b);El(c);if(d)c.A.ca=1;b=c.A;if(!b.ca){Cp(b.bV,c.C,c.Y);c.A.ca=1;}Mw(c.A,c.C,c.Y);}
var GC=F(0);
var AI3=null;var AIr=null;var AI4=null;function Up(){AI3=new Ol;AIr=new Om;AI4=new Ok;}
function N_(){var a=this;C.call(a);a.k2=null;a.mj=null;a.nc=0;a.gl=0;}
function HA(a,b){return BB(a.k2)<b?0:1;}
var PG=F();
function ACD(a,b){QU(b);}
function PF(){var a=this;C.call(a);a.km=null;a.kl=null;}
function Xy(a,b){var c,d,e,f,g,h,i;c=a.km;d=a.kl;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new Lr;i.jh=c;i.jg=g;h.then(Bh(i,"f"),Bh(d,"f"));e=e+1|0;}}
var Pa=F();
function YG(a,b){QU(b);}
function O_(){var a=this;C.call(a);a.jW=null;a.jX=null;}
function Zb(a,b){var c,d,e,f,g;c=a.jW;d=a.jX;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=S(Bq,1);g.data[0]=Fb(b.name);NS(f,c,d,g);}
function OM(){C.call(this);this.lU=null;}
function Zd(a,b){var c,d,e,f;c=a.lU;d=Fz(b);e=new O;Q(e);H(H(e,B(266)),d);$rt_globals.console.info($rt_ustr(P(e)));c.gb=Ou();d=c.cy.Q;e=new PA;e.jr=c;f=S(C,1);f.data[0]=b;DL(d,e,B(267),f);}
function Ku(){C.call(this);this.jv=null;}
function ABs(a,b){Le(a.jv,b);}
function Pz(){var a=this;C.call(a);a.kG=null;a.kH=null;}
function Yz(a,b){var c,d,e,f,g,h;b=a.kG;c=a.kH;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new I8;h.iB=b;h.iA=g;$rt_globals.setTimeout(Bh(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Qv(d.item(f));g=new IV;g.ls=b;g.lt=c;$rt_globals.setTimeout(Bh(g,"onTimer"),0);f=f+1|0;}}
var M2=F(0);
function I$(){var a=this;C.call(a);a.mf=0;a.me=0;}
function Gh(a,b){return Lk(a.mf,b,a.me);}
var Ol=F();
var Om=F();
function ADS(a,b){}
var K0=F(0);
var Ok=F();
function PT(){var a=this;C.call(a);a.iV=null;a.iU=null;a.iT=0;}
function AAa(a,b){var c,d,e;c=a.iV;d=a.iU;e=a.iT;d.q(Ne(c,(b.c+e|0)-c.cf.c|0));}
function PU(){var a=this;C.call(a);a.nt=null;a.ns=null;a.nr=0;}
function ADC(a,b){var c,d,e;c=a.nt;d=a.ns;e=a.nr;d.q(Nc(c,(b.d+e|0)-c.cf.d|0));}
function K2(){C.call(this);this.ix=null;}
var Jl=F();
var S1=F();
var DT=F();
var AIq=null;var AI5=null;var AI6=null;var AI7=null;var AI8=null;var AI9=null;function AFi(){AFi=Bl(DT);AAC();}
function AAC(){var b;AIq=AHU;b=new Mt;FK(b,B(268),S(Bq,0));AI5=b;b=new Lm;FK(b,B(269),S(Bq,0));AI6=b;AI7=SN(B(270),1,0);AI8=SN(B(271),0,0);AI9=SN(B(272),0,1);}
var O7=F(Bn);
var LG=F(0);
var JK=F(0);
var Fj=F();
function R3(){var a=this;Fj.call(a);a.lH=null;a.fO=0;a.hJ=0;a.oF=0;}
function AAq(a,b,c){var d=new R3();ADx(d,a,b,c);return d;}
function ADx(a,b,c,d){a.lH=b;a.fO=c;a.hJ=d;a.oF=d-c|0;}
function I3(a,b){var c,d;a:{while(true){c=a.fO;if(c>=a.hJ)break a;d=a.lH.data;a.fO=c+1|0;if(b.jn(d[c]))continue;else break;}}return a.fO>=a.hJ?0:1;}
var MO=F(0);
var QO=F();
var Oz=F(0);
var MK=F();
var JZ=F(0);
var Kt=F(0);
var SX=F();
var CY=F(B7);
var AI$=null;var AI_=null;var AJa=null;var AJb=null;function WI(){WI=Bl(CY);Zi();}
function Sr(a,b){var c=new CY();Sv(c,a,b);return c;}
function Vt(){WI();return AJb.cJ();}
function Sv(a,b,c){WI();Dq(a,b,c);}
function Zi(){var b;AI$=Sr(B(273),0);AI_=Sr(B(274),1);b=Sr(B(275),2);AJa=b;AJb=G(CY,[AI$,AI_,b]);}
var J2=F(0);
var Mt=F(CQ);
var Lm=F(CQ);
function ST(){var a=this;CQ.call(a);a.o$=0;a.nJ=0;}
function SN(a,b,c){var d=new ST();Wg(d,a,b,c);return d;}
function Wg(a,b,c,d){FK(a,b,S(Bq,0));a.o$=c;a.nJ=d;}
var QW=F();
var Pg=F(0);
var AIp=null;function QS(){AIp=null;}
function Lr(){var a=this;C.call(a);a.jh=null;a.jg=null;}
function XJ(a,b){a.jh.q(Tp(a.jg,b));}
var IB=F(0);
function I8(){var a=this;C.call(a);a.iB=null;a.iA=null;}
function Zg(a){Q1(a.iB,a.iA);}
function IV(){var a=this;C.call(a);a.ls=null;a.lt=null;}
function Vj(a){a.ls.q(a.lt);}
var Qw=F();
function Py(){var a=this;C.call(a);a.ou=0;a.pe=0;a.ph=0;}
function PD(){var a=this;C.call(a);a.iF=null;a.iE=null;a.iI=null;a.iG=null;}
function YS(a,b){var c,d,e,f,g;c=a.iF;d=a.iE;e=a.iI;f=a.iG;if(!(b.done?1:0)){NS(c,d,e,f);g=b.value;if(!(g.kind==='file'?1:0))NS(g.values(),d,e,TO(f,Fb(g.name)));else{b=g.getFile();c=new NG;c.jY=d;c.jZ=g;c.j0=f;b.then(Bh(c,"f"),Bh(e,"f"));}}}
var IM=F(EO);
function S7(){var a=this;C.call(a);a.qV=null;a.uG=null;a.vl=null;a.tf=null;a.rw=null;}
function ID(){var a=this;IM.call(a);a.hf=null;a.fV=null;}
function Q9(a,b){var c,d,e,f;c=b.bE;d=c/32|0;e=1<<(c%32|0);f=a.fV.data;if(f[d]&e)return 0;f[d]=f[d]|e;return 1;}
function JB(){Ez.call(this);this.g0=null;}
function Vg(a,b){return a.g0.data[b];}
function AA1(a){return a.g0.data.length;}
function HE(){Fj.call(this);this.kv=null;}
function LS(){HE.call(this);this.oa=null;}
function LU(){var a=this;C.call(a);a.e=null;a.cb=0;a.gr=null;a.iY=0;a.d0=0;a.cY=0;a.S=0;a.hg=null;}
function Hc(a){return a.e.Z;}
function PS(a,b,c,d){var e,f,g,h,i,j;e=E7();f=a.cb;g=0;if(c!=f)a.cb=c;a:{switch(b){case -1073741784:h=new Mo;c=a.S+1|0;a.S=c;D8(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Lf;c=a.S+1|0;a.S=c;D8(h,c);break a;case -33554392:h=new M7;c=a.S+1|0;a.S=c;D8(h,c);break a;default:c=a.d0+1|0;a.d0=c;if(d!==null)h=AGg(c);else{h=new Eg;D8(h,0);g=1;}c=a.d0;if(c<=(-1))break a;if(c>=10)break a;a.gr.data[c]=h;break a;}h=new PN;D8(h,(-1));}while(true){if(DV(a.e)&&a.e.f==(-536870788))
{d=ADs(BO(a,2),BO(a,64));while(!Cx(a.e)&&DV(a.e)){i=a.e;j=i.f;if(j&&j!=(-536870788)&&j!=(-536870871))break;B2(d,Y(i));i=a.e;if(i.K!=(-536870788))continue;Y(i);}i=HK(a,d);i.z(h);}else if(a.e.K==(-536870788)){i=E9(h);Y(a.e);}else{i=KQ(a,h);d=a.e;if(d.K==(-536870788))Y(d);}if(i!==null)C5(e,i);if(Cx(a.e))break;if(a.e.K==(-536870871))break;}if(a.e.gF==(-536870788))C5(e,E9(h));if(a.cb!=f&&!g){a.cb=f;d=a.e;d.dR=f;d.f=d.K;d.cS=d.c6;j=d.bY;d.i=j+1|0;d.ew=j;DX(d);}switch(b){case -1073741784:break;case -536870872:d=new I7;Ei(d,
e,h);return d;case -268435416:d=new OF;Ei(d,e,h);return d;case -134217688:d=new LW;Ei(d,e,h);return d;case -67108824:d=new Nn;Ei(d,e,h);return d;case -33554392:d=new CO;Ei(d,e,h);return d;default:switch(e.p){case 0:break;case 1:return AF6(BW(e,0),h);default:return AFG(e,h);}return E9(h);}d=new GA;Ei(d,e,h);return d;}
function T$(a){var b,c,d,e,f,g,h;b=BU(4);c=(-1);d=(-1);if(!Cx(a.e)&&DV(a.e)){e=b.data;c=Y(a.e);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BS(3);b=e.data;b[0]=c&65535;f=a.e;g=f.K;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Y(f);f=a.e;g=f.K;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Y(f);return ADe(e,3);}return ADe(e,2);}if(!BO(a,2))return RC(b[0]);if(BO(a,64))return AB0(b[0]);return WS(b[0]);}e=b.data;c=1;while(c<4&&!Cx(a.e)&&DV(a.e)){h=c+1|0;e[c]=Y(a.e);c=h;}if(c==1){h=e[0];if(!(AJc.po(h)==AJd?0:1))return PK(a,e[0]);}if(!BO(a,
2))return AGS(b,c);if(BO(a,64)){f=new PC;JX(f,b,c);return f;}f=new Nt;JX(f,b,c);return f;}
function KQ(a,b){var c,d,e,f,g,h,i;if(DV(a.e)&&!G6(a.e)&&Hs(a.e.f)){if(BO(a,128)){c=T$(a);if(!Cx(a.e)){d=a.e;e=d.K;if(!(e==(-536870871)&&!(b instanceof Eg))&&e!=(-536870788)&&!DV(d))c=IF(a,b,c);}}else if(!J6(a.e)&&!Oc(a.e)){f=new J8;Q(f);while(!Cx(a.e)&&DV(a.e)&&!J6(a.e)&&!Oc(a.e)){if(!(!G6(a.e)&&!a.e.f)&&!(!G6(a.e)&&Hs(a.e.f))){g=a.e.f;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Y(a.e);if(!Iw(e))BJ(f,e&65535);else Gi(f,EV(e));}if(!BO(a,2)){c=new Mi;CI(c);c.bt
=P(f);e=f.x;c.X=e;c.gA=AAO(e);c.hk=AAO(c.X);h=0;while(h<(c.X-1|0)){L3(c.gA,K(c.bt,h),(c.X-h|0)-1|0);L3(c.hk,K(c.bt,(c.X-h|0)-1|0),(c.X-h|0)-1|0);h=h+1|0;}}else if(BO(a,64))c=AGP(f);else{c=new Jw;CI(c);c.ex=P(f);c.X=f.x;}}else c=IF(a,b,PB(a,b));}else{d=a.e;if(d.K!=(-536870871))c=IF(a,b,PB(a,b));else{if(b instanceof Eg)J(BM(B(29),d.Z,J5(d)));c=E9(b);}}a:{if(!Cx(a.e)){e=a.e.K;if(!(e==(-536870871)&&!(b instanceof Eg))&&e!=(-536870788)){f=KQ(a,b);if(c instanceof Cm&&!(c instanceof DY)&&!(c instanceof Cc)&&!(c instanceof Dw))
{i=c;if(!f.bc(i.t)){c=new OT;DM(c,i.t,i.b,i.eO);c.t.z(c);}}if((f.eU()&65535)!=43)c.z(f);else c.z(f.t);break a;}}if(c===null)return null;c.z(b);}if((c.eU()&65535)!=43)return c;return c.t;}
function IF(a,b,c){var d,e,f,g,h;d=a.e;e=d.K;if(c!==null&&!(c instanceof BG)){switch(e){case -2147483606:Y(d);d=new Qi;Cu(d,c,b,e);IJ();c.z(AJe);return d;case -2147483605:Y(d);d=new Lb;Cu(d,c,b,(-2147483606));IJ();c.z(AJe);return d;case -2147483585:Y(d);d=new KY;Cu(d,c,b,(-536870849));IJ();c.z(AJe);return d;case -2147483525:f=new Js;d=D0(d);g=a.cY+1|0;a.cY=g;GJ(f,d,c,b,(-536870849),g);IJ();c.z(AJe);return f;case -1073741782:case -1073741781:Y(d);d=new Mf;Cu(d,c,b,e);c.z(d);return d;case -1073741761:Y(d);d=new LD;Cu(d,
c,b,(-536870849));c.z(b);return d;case -1073741701:h=new N7;d=D0(d);e=a.cY+1|0;a.cY=e;GJ(h,d,c,b,(-536870849),e);c.z(h);return h;case -536870870:case -536870869:Y(d);if(c.eU()!=(-2147483602)){d=new Cc;Cu(d,c,b,e);}else if(BO(a,32)){d=new Mg;Cu(d,c,b,e);}else{d=new Kb;f=K4(a.cb);Cu(d,c,b,e);d.gE=f;}c.z(d);return d;case -536870849:Y(d);d=new Et;Cu(d,c,b,(-536870849));c.z(b);return d;case -536870789:h=new D1;d=D0(d);e=a.cY+1|0;a.cY=e;GJ(h,d,c,b,(-536870849),e);c.z(h);return h;default:}return c;}f=null;if(c!==null)f
=c;switch(e){case -2147483606:case -2147483605:Y(d);d=new Qj;DM(d,f,b,e);f.b=d;return d;case -2147483585:Y(d);c=new OO;DM(c,f,b,(-2147483585));return c;case -2147483525:c=new KO;MF(c,D0(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Y(d);d=new LC;DM(d,f,b,e);f.b=d;return d;case -1073741761:Y(d);c=new NB;DM(c,f,b,(-1073741761));return c;case -1073741701:c=new LX;MF(c,D0(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Y(d);d=AF_(f,b,e);f.b=d;return d;case -536870849:Y(d);c=new Dw;DM(c,
f,b,(-536870849));return c;case -536870789:return AFh(D0(d),f,b,(-536870789));default:}return c;}
function PB(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Eg;while(true){a:{e=a.e;f=e.K;if((f&(-2147418113))==(-2147483608)){Y(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.cb=g;else{if(f!=(-1073741784))g=a.cb;c=PS(a,f,g,b);e=a.e;if(e.K!=(-536870871))J(BM(B(29),e.Z,e.bY));Y(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Y(e);c
=AC9(0);break a;case -2147483577:Y(e);c=new J_;Bv(c);break a;case -2147483558:Y(e);c=new Pn;h=a.S+1|0;a.S=h;Us(c,h);break a;case -2147483550:Y(e);c=AC9(1);break a;case -2147483526:Y(e);c=new O9;Bv(c);break a;case -536870876:Y(e);a.S=a.S+1|0;if(BO(a,8)){if(BO(a,1)){c=AFw(a.S);break a;}c=AER(a.S);break a;}if(BO(a,1)){c=AFN(a.S);break a;}c=AGk(a.S);break a;case -536870866:Y(e);if(BO(a,32)){c=AGE();break a;}c=AGf(K4(a.cb));break a;case -536870821:Y(e);i=0;c=a.e;if(c.K==(-536870818)){i=1;Y(c);}c=HK(a,Ey(a,i));c.z(b);e
=a.e;if(e.K!=(-536870819))J(BM(B(29),e.Z,e.bY));Kz(e,1);Y(a.e);break a;case -536870818:Y(e);a.S=a.S+1|0;if(!BO(a,8)){c=new Hy;Bv(c);break a;}c=new JD;e=K4(a.cb);Bv(c);c.kS=e;break a;case 0:j=e.c6;if(j!==null)c=HK(a,j);else{if(Cx(e)){c=E9(b);break a;}c=RC(f&65535);}Y(a.e);break a;default:break b;}Y(e);c=new Hy;Bv(c);break a;}h=(f&2147483647)-48|0;if(a.d0<h)J(BM(B(29),D7(e),J5(a.e)));Y(e);a.S=a.S+1|0;c=!BO(a,2)?AEY(h,a.S):BO(a,64)?AFx(h,a.S):AGM(h,a.S);a.gr.data[h].go=1;a.iY=1;break a;}if(f>=0&&!E_(e)){c=PK(a,
f);Y(a.e);}else if(f==(-536870788))c=E9(b);else{if(f!=(-536870871)){b=new Gv;c=!E_(a.e)?Pm(f&65535):a.e.c6.bC();e=a.e;GQ(b,c,e.Z,e.bY);J(b);}if(d){b=new Gv;e=a.e;GQ(b,B(29),e.Z,e.bY);J(b);}c=E9(b);}}}if(f!=(-16777176))break;}return c;}
function Ey(a,b){var c,d,e,f,g,h,i,j,$$je;c=ADs(BO(a,2),BO(a,64));Dn(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Cx(a.e))break a;h=a.e;b=h.K;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)B2(c,d);d=Y(a.e);h=a.e;if(h.K!=(-536870874)){d=38;break d;}if(h.f==(-536870821)){Y(h);e=1;d=(-1);break d;}Y(h);if(g){c=Ey(a,0);break d;}if(a.e.K==(-536870819))break d;Pe(c,Ey(a,0));break d;case -536870867:if(!g){b=h.f;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Y(h);h=a.e;i=h.K;if(E_(h))break c;if
(i<0){j=a.e.f;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Hs(i))break e;i=i&65535;break e;}catch($$e){$$je=CX($$e);if($$je instanceof C1){break b;}else{throw $$e;}}}try{BC(c,d,i);}catch($$e){$$je=CX($$e);if($$je instanceof C1){break b;}else{throw $$e;}}Y(a.e);d=(-1);break d;}}if(d>=0)B2(c,d);d=45;Y(a.e);break d;case -536870821:if(d>=0){B2(c,d);d=(-1);}Y(a.e);j=0;h=a.e;if(h.K==(-536870818)){Y(h);j=1;}if(!e)Qs(c,Ey(a,j));else Pe(c,Ey(a,j));e=0;Y(a.e);break d;case -536870819:if(d>=0)B2(c,d);d=
93;Y(a.e);break d;case -536870818:if(d>=0)B2(c,d);d=94;Y(a.e);break d;case 0:if(d>=0)B2(c,d);h=a.e.c6;if(h===null)d=0;else{U7(c,h);d=(-1);}Y(a.e);break d;default:}if(d>=0)B2(c,d);d=Y(a.e);}g=0;}J(BM(B(29),Hc(a),a.e.bY));}J(BM(B(29),Hc(a),a.e.bY));}if(!f){if(d>=0)B2(c,d);return c;}J(BM(B(29),Hc(a),a.e.bY-1|0));}
function PK(a,b){var c,d,e;c=Iw(b);if(BO(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return WS(b&65535);}if(BO(a,64)&&b>128){if(c){d=new I0;CI(d);d.X=2;d.ky=E2(E1(b));return d;}if(KH(b))return AAU(b&65535);if(!MR(b))return AB0(b&65535);return Y6(b&65535);}}if(!c){if(KH(b))return AAU(b&65535);if(!MR(b))return RC(b&65535);return Y6(b&65535);}d=new CS;CI(d);d.X=2;d.dJ=b;e=(EV(b)).data;d.fU=e[0];d.e$=e[1];return d;}
function HK(a,b){var c,d,e;if(!S6(b)){if(!b.v){if(b.em())return YO(b);return AC$(b);}if(!b.em())return ZB(b);c=new GK;NM(c,b);return c;}c=QT(b);d=new Jb;Bv(d);d.jU=c;d.nH=c.J;if(!b.v){if(b.em())return TI(YO(FH(b)),d);return TI(AC$(FH(b)),d);}if(!b.em())return TI(ZB(FH(b)),d);c=new Lz;e=new GK;NM(e,FH(b));UZ(c,e,d);return c;}
function FI(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function BO(a,b){return (a.cb&b)!=b?0:1;}
function Bo(){var a=this;C.call(a);a.b=null;a.bo=0;a.js=null;a.eO=0;}
var AIm=0;function Bv(a){var b,c;b=new D3;c=AIm;AIm=c+1|0;He(b,c);a.js=Iy(b);}
function HJ(a,b){var c,d;c=new D3;d=AIm;AIm=d+1|0;He(c,d);a.js=Iy(c);a.b=b;}
function FM(a,b,c,d){var e;e=d.k;while(true){if(b>e)return (-1);if(a.a(b,c,d)>=0)break;b=b+1|0;}return b;}
function FT(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.a(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function Xa(a,b){a.eO=b;}
function WB(a){return a.eO;}
function ACM(a){return a.b;}
function ADi(a,b){a.b=b;}
function ADh(a,b){return 1;}
function AD2(a){return null;}
function GH(a){var b;a.bo=1;b=a.b;if(b!==null){if(!b.bo){b=b.dr();if(b!==null){a.b.bo=1;a.b=b;}a.b.cF();}else if(b instanceof EY&&b.cI.go)a.b=b.b;}}
function U2(){AIm=1;}
function Cb(){var a=this;Bo.call(a);a.go=0;a.cc=0;}
var AJe=null;function IJ(){IJ=Bl(Cb);X5();}
function AGg(a){var b=new Cb();D8(b,a);return b;}
function D8(a,b){IJ();Bv(a);a.cc=b;}
function V8(a,b,c,d){var e,f;e=Gm(d,a.cc);G3(d,a.cc,b);f=a.b.a(b,c,d);if(f<0)G3(d,a.cc,e);return f;}
function AAc(a){return a.cc;}
function Wq(a,b){return 0;}
function X5(){var b;b=new J9;Bv(b);AJe=b;}
function E6(){var a=this;C.call(a);a.I=null;a.dR=0;a.cV=0;a.mD=0;a.gF=0;a.K=0;a.f=0;a.k$=0;a.c6=null;a.cS=null;a.i=0;a.eX=0;a.bY=0;a.ew=0;a.Z=null;}
var AJf=null;var AJc=null;var AJd=0;function Kz(a,b){if(b>0&&b<3)a.cV=b;if(b==1){a.f=a.K;a.cS=a.c6;a.i=a.ew;a.ew=a.bY;DX(a);}}
function E_(a){return a.c6===null?0:1;}
function G6(a){return a.cS===null?0:1;}
function Y(a){DX(a);return a.gF;}
function D0(a){var b;b=a.c6;DX(a);return b;}
function DX(a){var b,c,d,e,f,g,h,$$je;a.gF=a.K;a.K=a.f;a.c6=a.cS;a.bY=a.ew;a.ew=a.i;while(true){b=0;c=a.i>=a.I.data.length?0:Ie(a);a.f=c;a.cS=null;if(a.cV==4){if(c!=92)return;c=a.i;d=a.I.data;c=c>=d.length?0:d[BD(a)];a.f=c;switch(c){case 69:break;default:a.f=92;a.i=a.eX;return;}a.cV=a.mD;a.f=a.i>(a.I.data.length-2|0)?0:Ie(a);}a:{c=a.f;if(c!=92){e=a.cV;if(e==1)switch(c){case 36:a.f=(-536870876);break a;case 40:if(a.I.data[a.i]!=63){a.f=(-2147483608);break a;}BD(a);c=a.I.data[a.i];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.f=(-134217688);BD(a);break b;default:J(BM(B(29),D7(a),a.i));}a.f=(-67108824);BD(a);}else{switch(c){case 33:break;case 60:BD(a);c=a.I.data[a.i];e=1;break b;case 61:a.f=(-536870872);BD(a);break b;case 62:a.f=(-33554392);BD(a);break b;default:f=U3(a);a.f=f;if(f<256){a.dR=f;f=f<<16;a.f=f;a.f=(-1073741784)|f;break b;}f=f&255;a.f=f;a.dR=f;f=f<<16;a.f=f;a.f=(-16777176)|f;break b;}a.f=(-268435416);BD(a);}}if(!e)break;}break a;case 41:a.f=(-536870871);break a;case 42:case 43:case 63:e=a.i;d
=a.I.data;switch(e>=d.length?42:d[e]){case 43:a.f=c|(-2147483648);BD(a);break a;case 63:a.f=c|(-1073741824);BD(a);break a;default:}a.f=c|(-536870912);break a;case 46:a.f=(-536870866);break a;case 91:a.f=(-536870821);Kz(a,2);break a;case 93:if(e!=2)break a;a.f=(-536870819);break a;case 94:a.f=(-536870818);break a;case 123:a.cS=UJ(a,c);break a;case 124:a.f=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.f=(-536870874);break a;case 45:a.f=(-536870867);break a;case 91:a.f=(-536870821);break a;case 93:a.f
=(-536870819);break a;case 94:a.f=(-536870818);break a;default:}}else{c=a.i>=(a.I.data.length-2|0)?(-1):Ie(a);c:{a.f=c;switch(c){case -1:J(BM(B(29),D7(a),a.i));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.f
=Tx(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.cV!=1)break a;a.f=(-2147483648)|c;break a;case 65:a.f=(-2147483583);break a;case 66:a.f=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(BM(B(29),D7(a),a.i));case 68:case 83:case 87:case 100:case 115:case 119:a.cS=MC(G9(a.I,
a.eX,1),0);a.f=0;break a;case 71:a.f=(-2147483577);break a;case 80:case 112:break c;case 81:a.mD=a.cV;a.cV=4;b=1;break a;case 90:a.f=(-2147483558);break a;case 97:a.f=7;break a;case 98:a.f=(-2147483550);break a;case 99:c=a.i;d=a.I.data;if(c>=(d.length-2|0))J(BM(B(29),D7(a),a.i));a.f=d[BD(a)]&31;break a;case 101:a.f=27;break a;case 102:a.f=12;break a;case 110:a.f=10;break a;case 114:a.f=13;break a;case 116:a.f=9;break a;case 117:a.f=Ld(a,4);break a;case 120:a.f=Ld(a,2);break a;case 122:a.f=(-2147483526);break a;default:}break a;}g
=Tg(a);h=0;if(a.f==80)h=1;try{a.cS=MC(g,h);}catch($$e){$$je=CX($$e);if($$je instanceof GN){J(BM(B(29),D7(a),a.i));}else{throw $$e;}}a.f=0;}}if(b)continue;else break;}}
function Tg(a){var b,c,d,e,f,g;b=new O;Ex(b,10);c=a.i;d=a.I;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=G9(d,BD(a),1);f=new O;Q(f);H(H(f,B(276)),b);return P(f);}BD(a);c=0;a:{while(true){g=a.i;d=a.I.data;if(g>=(d.length-2|0))break;c=d[BD(a)];if(c==125)break a;BJ(b,c);}}if(c!=125)J(BM(B(29),a.Z,a.i));}if(!b.x)J(BM(B(29),a.Z,a.i));f=P(b);if(M(f)==1){b=new O;Q(b);H(H(b,B(276)),f);return P(b);}b:{c:{if(M(f)>3){if(HG(f,B(276)))break c;if(HG(f,B(277)))break c;}break b;}f=D9(f,2);}return f;}
function UJ(a,b){var c,d,e,f,g,$$je;c=new O;Ex(c,4);d=(-1);e=2147483647;a:{while(true){f=a.i;g=a.I.data;if(f>=g.length)break a;b=g[BD(a)];if(b==125)break a;if(b==44&&d<0)try{d=GY(CG(c),10);UP(c,0,Q4(c));continue;}catch($$e){$$je=CX($$e);if($$je instanceof CF){break;}else{throw $$e;}}BJ(c,b&65535);}J(BM(B(29),a.Z,a.i));}if(b!=125)J(BM(B(29),a.Z,a.i));if(c.x>0)b:{try{e=GY(CG(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=CX($$e);if($$je instanceof CF){}else{throw $$e;}}J(BM(B(29),a.Z,a.i));}else if(d<0)J(BM(B(29),
a.Z,a.i));if((d|e|(e-d|0))<0)J(BM(B(29),a.Z,a.i));b=a.i;g=a.I.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.f=(-2147483525);BD(a);break c;case 63:a.f=(-1073741701);BD(a);break c;default:}a.f=(-536870789);}c=new Jj;c.cT=d;c.cP=e;return c;}
function D7(a){return a.Z;}
function Cx(a){return !a.K&&!a.f&&a.i==a.k$&&!E_(a)?1:0;}
function Hs(b){return b<0?0:1;}
function DV(a){return !Cx(a)&&!E_(a)&&Hs(a.K)?1:0;}
function J6(a){var b;b=a.K;return b<=56319&&b>=55296?1:0;}
function Oc(a){var b;b=a.K;return b<=57343&&b>=56320?1:0;}
function MR(b){return b<=56319&&b>=55296?1:0;}
function KH(b){return b<=57343&&b>=56320?1:0;}
function Ld(a,b){var c,d,e,f,$$je;c=new O;Ex(c,b);d=a.I.data.length-2|0;e=0;while(true){f=BV(e,b);if(f>=0)break;if(a.i>=d)break;BJ(c,a.I.data[BD(a)]);e=e+1|0;}if(!f)a:{try{b=GY(CG(c),16);}catch($$e){$$je=CX($$e);if($$je instanceof CF){break a;}else{throw $$e;}}return b;}J(BM(B(29),a.Z,a.i));}
function Tx(a){var b,c,d,e,f,g;b=3;c=1;d=a.I.data;e=d.length-2|0;f=N5(d[a.i],8);switch(f){case -1:break;default:if(f>3)b=2;BD(a);a:{while(true){if(c>=b)break a;g=a.i;if(g>=e)break a;g=N5(a.I.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BD(a);c=c+1|0;}}return f;}J(BM(B(29),a.Z,a.i));}
function U3(a){var b,c,d,e;b=1;c=a.dR;a:while(true){d=a.i;e=a.I.data;if(d>=e.length)J(BM(B(29),a.Z,d));b:{c:{switch(e[d]){case 41:BD(a);return c|256;case 45:if(!b)J(BM(B(29),a.Z,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BD(a);}BD(a);return c;}
function BD(a){var b,c,d,e,f;b=a.i;a.eX=b;if(!(a.dR&4))a.i=b+1|0;else{c=a.I.data.length-2|0;a.i=b+1|0;a:while(true){d=a.i;if(d<c&&LV(a.I.data[d])){a.i=a.i+1|0;continue;}d=a.i;if(d>=c)break;e=a.I.data;if(e[d]!=35)break;a.i=d+1|0;while(true){f=a.i;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.i=f+1|0;}}}return a.eX;}
function UB(b){return AJf.sA(b);}
function Ie(a){var b,c,d,e;b=a.I.data[BD(a)];if(B$(b)){c=a.eX+1|0;d=a.I.data;if(c<d.length){e=d[c];if(Cn(e)){BD(a);return Do(b,e);}}}return b;}
function J5(a){return a.bY;}
function Gv(){var a=this;BF.call(a);a.o_=null;a.oO=null;a.ks=0;}
function BM(a,b,c){var d=new Gv();GQ(d,a,b,c);return d;}
function GQ(a,b,c,d){U(a);a.ks=(-1);a.o_=b;a.oO=c;a.ks=d;}
function Po(){C.call(this);this.mt=null;}
function ABx(a,b){var c,d;c=a.mt;d=0;while(d<b.length){Q1(c,b[d]);d=d+1|0;}}
var Ta=F(0);
function NG(){var a=this;C.call(a);a.jY=null;a.jZ=null;a.j0=null;}
function ABj(a,b){a.jY.q(AES(a.jZ,b,a.j0));}
var Mo=F(Cb);
function VP(a,b,c,d){var e;e=a.cc;Br(d,e,b-Cz(d,e)|0);return a.b.a(b,c,d);}
function ACm(a,b){return 0;}
var PN=F(Cb);
function W$(a,b,c,d){return b;}
var Lf=F(Cb);
function WA(a,b,c,d){if(Cz(d,a.cc)!=b)b=(-1);return b;}
function M7(){Cb.call(this);this.iO=0;}
function VW(a,b,c,d){var e;e=a.cc;Br(d,e,b-Cz(d,e)|0);a.iO=b;return b;}
function ABr(a,b){return 0;}
var Eg=F(Cb);
function ADz(a,b,c,d){if(d.fJ!=1&&b!=d.k)return (-1);d.fm=1;G3(d,0,b);return b;}
function BG(){Bo.call(this);this.X=0;}
function CI(a){Bv(a);a.X=1;}
function AEl(a,b,c,d){var e;if((b+a.bg()|0)>d.k){d.b$=1;return (-1);}e=a.R(b,c);if(e<0)return (-1);return a.b.a(b+e|0,c,d);}
function ACZ(a){return a.X;}
function Zl(a,b){return 1;}
var Ur=F(BG);
function E9(a){var b=new Ur();AAl(b,a);return b;}
function AAl(a,b){HJ(a,b);a.X=1;a.eO=1;a.X=0;}
function ACG(a,b,c){return 0;}
function X_(a,b,c,d){var e,f,g;e=d.k;f=d.bI;while(true){g=BV(b,e);if(g>0)return (-1);if(g<0&&Cn(K(c,b))&&b>f&&B$(K(c,b-1|0))){b=b+1|0;continue;}if(a.b.a(b,c,d)>=0)break;b=b+1|0;}return b;}
function W3(a,b,c,d,e){var f,g;f=e.k;g=e.bI;while(true){if(c<b)return (-1);if(c<f&&Cn(K(d,c))&&c>g&&B$(K(d,c-1|0))){c=c+(-1)|0;continue;}if(a.b.a(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function VT(a,b){return 0;}
function BA(){var a=this;Bo.call(a);a.V=null;a.cI=null;a.D=0;}
function AFG(a,b){var c=new BA();Ei(c,a,b);return c;}
function Ei(a,b,c){Bv(a);a.V=b;a.cI=c;a.D=c.cc;}
function YD(a,b,c,d){var e,f,g,h;if(a.V===null)return (-1);e=Ek(d,a.D);CH(d,a.D,b);f=a.V.p;g=0;while(true){if(g>=f){CH(d,a.D,e);return (-1);}h=(BW(a.V,g)).a(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ABm(a,b){a.cI.b=b;}
function ZS(a,b){var c;a:{c=a.V;if(c!==null){c=D4(c);while(true){if(!DJ(c))break a;if(!(DS(c)).bc(b))continue;else return 1;}}}return 0;}
function ABR(a,b){return Gm(b,a.D)>=0&&Ek(b,a.D)==Gm(b,a.D)?0:1;}
function W0(a){var b,c,d,e,f,g,h,i,j;a.bo=1;b=a.cI;if(b!==null&&!b.bo)GH(b);a:{b:{b=a.V;if(b!==null){c=b.p;d=0;while(true){if(d>=c)break b;b=BW(a.V,d);e=b.dr();if(e===null)e=b;else{b.bo=1;T6(a.V,d);f=a.V;if(d<0)break a;g=f.p;if(d>g)break a;JF(f,g+1|0);h=f.p;i=h;while(i>d){j=f.b8.data;j[i]=j[i-1|0];i=i+(-1)|0;}f.b8.data[d]=e;f.p=h+1|0;f.c4=f.c4+1|0;}if(!e.bo)e.cF();d=d+1|0;}}}if(a.b!==null)GH(a);return;}b=new Bn;U(b);J(b);}
var GA=F(BA);
function AA$(a,b,c,d){var e,f,g,h;e=Cz(d,a.D);Br(d,a.D,b);f=a.V.p;g=0;while(true){if(g>=f){Br(d,a.D,e);return (-1);}h=(BW(a.V,g)).a(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AB9(a,b){return !Cz(b,a.D)?0:1;}
var CO=F(GA);
function Xv(a,b,c,d){var e,f,g;e=Cz(d,a.D);Br(d,a.D,b);f=a.V.p;g=0;while(g<f){if((BW(a.V,g)).a(b,c,d)>=0)return a.b.a(a.cI.iO,c,d);g=g+1|0;}Br(d,a.D,e);return (-1);}
function ABW(a,b){a.b=b;}
var I7=F(CO);
function ABg(a,b,c,d){var e,f;e=a.V.p;f=0;while(f<e){if((BW(a.V,f)).a(b,c,d)>=0)return a.b.a(b,c,d);f=f+1|0;}return (-1);}
function ADm(a,b){return 0;}
var OF=F(CO);
function Wm(a,b,c,d){var e,f;e=a.V.p;f=0;while(true){if(f>=e)return a.b.a(b,c,d);if((BW(a.V,f)).a(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AC3(a,b){return 0;}
var LW=F(CO);
function WY(a,b,c,d){var e,f,g,h;e=a.V.p;f=d.fn?0:d.bI;a:{g=a.b.a(b,c,d);if(g>=0){Br(d,a.D,b);h=0;while(true){if(h>=e)break a;if((BW(a.V,h)).br(f,b,c,d)>=0){Br(d,a.D,(-1));return g;}h=h+1|0;}}}return (-1);}
function AED(a,b){return 0;}
var Nn=F(CO);
function Vx(a,b,c,d){var e,f;e=a.V.p;Br(d,a.D,b);f=0;while(true){if(f>=e)return a.b.a(b,c,d);if((BW(a.V,f)).br(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ACh(a,b){return 0;}
function EY(){BA.call(this);this.bO=null;}
function AF6(a,b){var c=new EY();Rt(c,a,b);return c;}
function Rt(a,b,c){Bv(a);a.bO=b;a.cI=c;a.D=c.cc;}
function VJ(a,b,c,d){var e,f;e=Ek(d,a.D);CH(d,a.D,b);f=a.bO.a(b,c,d);if(f>=0)return f;CH(d,a.D,e);return (-1);}
function Z3(a,b,c,d){var e;e=a.bO.bq(b,c,d);if(e>=0)CH(d,a.D,e);return e;}
function ACo(a,b,c,d,e){var f;f=a.bO.br(b,c,d,e);if(f>=0)CH(e,a.D,f);return f;}
function ZP(a,b){return a.bO.bc(b);}
function ABp(a){var b;b=new Jn;Rt(b,a.bO,a.cI);a.b=b;return b;}
function AD5(a){var b;a.bo=1;b=a.cI;if(b!==null&&!b.bo)GH(b);b=a.bO;if(b!==null&&!b.bo){b=b.dr();if(b!==null){a.bO.bo=1;a.bO=b;}a.bO.cF();}}
var E8=F();
function R(){var a=this;E8.call(a);a.J=0;a.bn=0;a.u=null;a.fM=null;a.gg=null;a.v=0;}
var AJg=null;function Bc(a){var b;b=new Pl;b.m=BU(64);a.u=b;}
function Wo(a){return null;}
function V1(a){return a.u;}
function S6(a){var b,c,d,e,f;if(!a.bn)b=Fr(a.u,0)>=2048?0:1;else{a:{c=a.u;b=0;d=c.O;if(b<d){e=c.m.data;f=(e[0]^(-1))>>>0;if(f)b=Gg(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Gg(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function YN(a){return a.v;}
function ACV(a){return a;}
function QT(a){var b,c;if(a.gg===null){b=a.c5();c=new OS;c.pu=a;c.i5=b;Bc(c);a.gg=c;Dn(c,a.bn);}return a.gg;}
function FH(a){var b,c;if(a.fM===null){b=a.c5();c=new OQ;c.pb=a;c.mi=b;c.mL=a;Bc(c);a.fM=c;Dn(c,a.J);a.fM.v=a.v;}return a.fM;}
function AD1(a){return 0;}
function Dn(a,b){var c;c=a.J;if(c^b){a.J=c?0:1;a.bn=a.bn?0:1;}if(!a.v)a.v=1;return a;}
function Yb(a){return a.J;}
function Ge(b,c){var d,e;if(b.b6()!==null&&c.b6()!==null){b=b.b6();c=c.b6();d=Bf(b.m.data.length,c.m.data.length);e=0;a:{while(e<d){if(b.m.data[e]&c.m.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function MC(b,c){var d,e,f;d=0;while(true){e=AJh.data;if(d>=e.length){f=new GN;Bb(f,B(29));f.pJ=B(29);f.pw=b;J(f);}e=e[d].data;if(Cq(b,e[0]))break;d=d+1|0;}return T2(e[1],c);}
function Rv(){AJg=new Fk;}
function Rh(){var a=this;R.call(a);a.hm=0;a.iN=0;a.d1=0;a.gZ=0;a.ck=0;a.dg=0;a.r=null;a.T=null;}
function CA(){var a=new Rh();AEu(a);return a;}
function ADs(a,b){var c=new Rh();W_(c,a,b);return c;}
function AEu(a){Bc(a);a.r=AEE();}
function W_(a,b,c){Bc(a);a.r=AEE();a.hm=b;a.iN=c;}
function B2(a,b){a:{if(a.hm){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ck){IP(a.r,FI(b&65535));break a;}Ia(a.r,FI(b&65535));break a;}if(a.iN&&b>128){a.d1=1;b=E2(E1(b));}}}if(!(!MR(b)&&!KH(b))){if(a.gZ)IP(a.u,b-55296|0);else Ia(a.u,b-55296|0);}if(a.ck)IP(a.r,b);else Ia(a.r,b);if(!a.v&&Iw(b))a.v=1;return a;}
function U7(a,b){var c,d,e;if(!a.v&&b.v)a.v=1;if(a.gZ){if(!b.bn)Eu(a.u,b.c5());else Cr(a.u,b.c5());}else if(!b.bn)Er(a.u,b.c5());else{Eb(a.u,b.c5());Cr(a.u,b.c5());a.bn=a.bn?0:1;a.gZ=1;}if(!a.dg&&b.b6()!==null){if(a.ck){if(!b.J)Eu(a.r,b.b6());else Cr(a.r,b.b6());}else if(!b.J)Er(a.r,b.b6());else{Eb(a.r,b.b6());Cr(a.r,b.b6());a.J=a.J?0:1;a.ck=1;}}else{c=a.J;d=a.T;if(d!==null){if(!c){e=new Kp;e.nX=a;e.m3=c;e.mA=d;e.mr=b;Bc(e);a.T=e;}else{e=new Kq;e.pP=a;e.kO=c;e.kB=d;e.kd=b;Bc(e);a.T=e;}}else{if(c&&!a.ck&&Iz(a.r))
{d=new Km;d.oN=a;d.kI=b;Bc(d);a.T=d;}else if(!c){d=new Kk;d.gJ=a;d.f3=c;d.jl=b;Bc(d);a.T=d;}else{d=new Kl;d.hw=a;d.f$=c;d.mw=b;Bc(d);a.T=d;}a.dg=1;}}return a;}
function BC(a,b,c){var d,e,f,g;if(b>c){d=new BF;U(d);J(d);}a:{b:{if(!a.hm){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;B2(a,b);b=b+1|0;}}if(!a.ck)FY(a.r,b,c+1|0);else{d=a.r;c=c+1|0;if(b>c){d=new Bn;U(d);J(d);}e=d.O;if(b<e){e=Bf(e,c);f=b/32|0;c=e/32|0;if(f==c){g=d.m.data;g[f]=g[f]&(F_(d,b)|FR(d,e));}else{g=d.m.data;g[f]=g[f]&F_(d,b);f=f+1|0;while(f<c){d.m.data[f]=0;f=f+1|0;}if(e&31){g=d.m.data;g[c]=g[c]&FR(d,e);}}Fn(d);}}}return a;}
function Qs(a,b){var c,d,e;if(!a.v&&b.v)a.v=1;if(b.d1)a.d1=1;c=a.bn;if(!(c^b.bn)){if(!c)Er(a.u,b.u);else Cr(a.u,b.u);}else if(c)Eu(a.u,b.u);else{Eb(a.u,b.u);Cr(a.u,b.u);a.bn=1;}if(!a.dg&&Ci(b)!==null){c=a.J;if(!(c^b.J)){if(!c)Er(a.r,Ci(b));else Cr(a.r,Ci(b));}else if(c)Eu(a.r,Ci(b));else{Eb(a.r,Ci(b));Cr(a.r,Ci(b));a.J=1;}}else{c=a.J;d=a.T;if(d!==null){if(!c){e=new Kf;e.nK=a;e.lY=c;e.mv=d;e.mU=b;Bc(e);a.T=e;}else{e=new KV;e.n4=a;e.mS=c;e.iz=d;e.iQ=b;Bc(e);a.T=e;}}else{if(!a.ck&&Iz(a.r)){if(!c){d=new Kn;d.pV
=a;d.j8=b;Bc(d);a.T=d;}else{d=new Ko;d.n9=a;d.mJ=b;Bc(d);a.T=d;}}else if(!c){d=new Kr;d.l1=a;d.kX=b;d.kF=c;Bc(d);a.T=d;}else{d=new Ks;d.lb=a;d.lp=b;d.lA=c;Bc(d);a.T=d;}a.dg=1;}}}
function Pe(a,b){var c,d,e;if(!a.v&&b.v)a.v=1;if(b.d1)a.d1=1;c=a.bn;if(!(c^b.bn)){if(!c)Cr(a.u,b.u);else Er(a.u,b.u);}else if(!c)Eu(a.u,b.u);else{Eb(a.u,b.u);Cr(a.u,b.u);a.bn=0;}if(!a.dg&&Ci(b)!==null){c=a.J;if(!(c^b.J)){if(!c)Cr(a.r,Ci(b));else Er(a.r,Ci(b));}else if(!c)Eu(a.r,Ci(b));else{Eb(a.r,Ci(b));Cr(a.r,Ci(b));a.J=0;}}else{c=a.J;d=a.T;if(d!==null){if(!c){e=new Kh;e.nW=a;e.l3=c;e.i3=d;e.kK=b;Bc(e);a.T=e;}else{e=new Ki;e.oe=a;e.lI=c;e.it=d;e.lX=b;Bc(e);a.T=e;}}else{if(!a.ck&&Iz(a.r)){if(!c){d=new Kd;d.n$
=a;d.jM=b;Bc(d);a.T=d;}else{d=new Ke;d.pN=a;d.jR=b;Bc(d);a.T=d;}}else if(!c){d=new Kj;d.nw=a;d.mZ=b;d.lk=c;Bc(d);a.T=d;}else{d=new Kc;d.lj=a;d.lN=b;d.kP=c;Bc(d);a.T=d;}a.dg=1;}}}
function Cl(a,b){var c;c=a.T;if(c!==null)return a.J^c.g(b);return a.J^CD(a.r,b);}
function Ci(a){if(!a.dg)return a.r;return null;}
function X4(a){return a.u;}
function ADc(a){var b,c;if(a.T!==null)return a;b=Ci(a);c=new Kg;c.nI=a;c.e_=b;Bc(c);return Dn(c,a.J);}
function AAD(a){var b,c,d;b=new O;Q(b);c=Fr(a.r,0);while(c>=0){Gi(b,EV(c));BJ(b,124);c=Fr(a.r,c+1|0);}d=b.x;if(d>0)OG(b,d-1|0);return P(b);}
function Ye(a){return a.d1;}
function GN(){var a=this;Bg.call(a);a.pJ=null;a.pw=null;}
function C0(){Bo.call(this);this.t=null;}
function Cu(a,b,c,d){HJ(a,c);a.t=b;a.eO=d;}
function AEt(a){return a.t;}
function ACr(a,b){return !a.t.bc(b)&&!a.b.bc(b)?0:1;}
function ADt(a,b){return 1;}
function AAi(a){var b;a.bo=1;b=a.b;if(b!==null&&!b.bo){b=b.dr();if(b!==null){a.b.bo=1;a.b=b;}a.b.cF();}b=a.t;if(b!==null){if(!b.bo){b=b.dr();if(b!==null){a.t.bo=1;a.t=b;}a.t.cF();}else if(b instanceof EY&&b.cI.go)a.t=b.b;}}
function Cm(){C0.call(this);this.E=null;}
function AF_(a,b,c){var d=new Cm();DM(d,a,b,c);return d;}
function DM(a,b,c,d){Cu(a,b,c,d);a.E=b;}
function Vz(a,b,c,d){var e,f;e=0;a:{while((b+a.E.bg()|0)<=d.k){f=a.E.R(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.b.a(b,c,d);if(f>=0)break;b=b-a.E.bg()|0;e=e+(-1)|0;}return f;}
function DY(){Cm.call(this);this.fI=null;}
function AFh(a,b,c,d){var e=new DY();MF(e,a,b,c,d);return e;}
function MF(a,b,c,d,e){DM(a,c,d,e);a.fI=b;}
function V$(a,b,c,d){var e,f,g,h,i;e=a.fI;f=e.cT;g=e.cP;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.E.bg()|0)>d.k)break a;i=a.E.R(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.b.a(b,c,d);if(i>=0)break;b=b-a.E.bg()|0;h=h+(-1)|0;}return i;}if((b+a.E.bg()|0)>d.k){d.b$=1;return (-1);}i=a.E.R(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Cc=F(C0);
function VI(a,b,c,d){var e;if(!a.t.s(d))return a.b.a(b,c,d);e=a.t.a(b,c,d);if(e>=0)return e;return a.b.a(b,c,d);}
var Dw=F(Cm);
function Z9(a,b,c,d){var e;e=a.t.a(b,c,d);if(e<0)e=a.b.a(b,c,d);return e;}
function AEF(a,b){a.b=b;a.t.z(b);}
var OT=F(Cm);
function AEe(a,b,c,d){while((b+a.E.bg()|0)<=d.k&&a.E.R(b,c)>0){b=b+a.E.bg()|0;}return a.b.a(b,c,d);}
function AAA(a,b,c,d){var e,f,g;e=a.b.bq(b,c,d);if(e<0)return (-1);f=e-a.E.bg()|0;while(f>=b&&a.E.R(f,c)>0){g=f-a.E.bg()|0;e=f;f=g;}return e;}
function T(){var a=this;C.call(a);a.hA=null;a.gH=null;}
function T2(a,b){if(!b&&a.hA===null)a.hA=a.o();else if(b&&a.gH===null)a.gH=Dn(a.o(),1);if(b)return a.gH;return a.hA;}
var CF=F(BF);
function Jj(){var a=this;E8.call(a);a.cT=0;a.cP=0;}
function AAI(a){var b,c,d,e,f;b=a.cT;c=a.cP;d=c==2147483647?B(29):Iy(UA(c));e=new O;Q(e);BJ(e,123);f=V(e,b);BJ(f,44);BJ(H(f,d),125);return P(e);}
var J9=F(Bo);
function ZE(a,b,c,d){return b;}
function ABl(a,b){return 0;}
function Pl(){var a=this;C.call(a);a.m=null;a.O=0;}
function AEE(){var a=new Pl();WN(a);return a;}
function WN(a){a.m=BU(0);}
function Ia(a,b){var c,d;c=b/32|0;if(b>=a.O){Gj(a,c+1|0);a.O=b+1|0;}d=a.m.data;d[c]=d[c]|1<<(b%32|0);}
function FY(a,b,c){var d,e,f,g,h;if(b>c){d=new Bn;U(d);J(d);}e=b/32|0;f=c/32|0;if(c>a.O){Gj(a,f+1|0);a.O=c;}if(e==f){g=a.m.data;g[e]=g[e]|FR(a,b)&F_(a,c);}else{g=a.m.data;g[e]=g[e]|FR(a,b);h=e+1|0;while(h<f){a.m.data[h]=(-1);h=h+1|0;}if(c&31){g=a.m.data;g[f]=g[f]|F_(a,c);}}}
function FR(a,b){return (-1)<<(b%32|0);}
function F_(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function IP(a,b){var c,d,e,f;c=b/32|0;d=a.m.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|(-2)>>>(32-f|0));if(b==(a.O-1|0))Fn(a);}}
function CD(a,b){var c,d;c=b/32|0;d=a.m.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Fr(a,b){var c,d,e,f;c=a.O;if(b>=c)return (-1);d=b/32|0;e=a.m.data;f=e[d]>>>(b%32|0);if(f)return Gg(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Gg(e[f])|0;f=f+1|0;}return (-1);}
function Gj(a,b){var c,d,e,f;c=a.m.data.length;if(c>=b)return;c=Bm((b*3|0)/2|0,(c*2|0)+1|0);d=a.m.data;e=BU(c);f=e.data;b=Bf(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.m=e;}
function Fn(a){var b,c,d;b=(a.O+31|0)/32|0;a.O=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=JP(a.m.data[c]);if(d<32)break;c=c+(-1)|0;a.O=a.O-32|0;}a.O=a.O-d|0;}}
function Cr(a,b){var c,d,e,f;c=Bf(a.m.data.length,b.m.data.length);d=0;while(d<c){e=a.m.data;e[d]=e[d]&b.m.data[d];d=d+1|0;}while(true){f=a.m.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.O=Bf(a.O,b.O);Fn(a);}
function Eu(a,b){var c,d,e;c=Bf(a.m.data.length,b.m.data.length);d=0;while(d<c){e=a.m.data;e[d]=e[d]&(b.m.data[d]^(-1));d=d+1|0;}Fn(a);}
function Er(a,b){var c,d,e;c=Bm(a.O,b.O);a.O=c;Gj(a,(c+31|0)/32|0);c=Bf(a.m.data.length,b.m.data.length);d=0;while(d<c){e=a.m.data;e[d]=e[d]|b.m.data[d];d=d+1|0;}}
function Eb(a,b){var c,d,e;c=Bm(a.O,b.O);a.O=c;Gj(a,(c+31|0)/32|0);c=Bf(a.m.data.length,b.m.data.length);d=0;while(d<c){e=a.m.data;e[d]=e[d]^b.m.data[d];d=d+1|0;}Fn(a);}
function Iz(a){return a.O?0:1;}
function Jb(){var a=this;BA.call(a);a.jU=null;a.nH=0;}
function Lz(){var a=this;BA.call(a);a.hW=null;a.hx=null;}
function TI(a,b){var c=new Lz();UZ(c,a,b);return c;}
function UZ(a,b,c){Bv(a);a.hW=b;a.hx=c;}
function V6(a,b,c,d){var e,f,g,h,i;e=a.hW.a(b,c,d);if(e<0)a:{f=a.hx;g=d.bI;e=d.k;h=b+1|0;e=BV(h,e);if(e>0){d.b$=1;e=(-1);}else{i=K(c,b);if(!f.jU.g(i))e=(-1);else{if(B$(i)){if(e<0&&Cn(K(c,h))){e=(-1);break a;}}else if(Cn(i)&&b>g&&B$(K(c,b-1|0))){e=(-1);break a;}e=f.b.a(h,c,d);}}}if(e>=0)return e;return (-1);}
function AA7(a,b){a.b=b;a.hx.b=b;a.hW.z(b);}
function WE(a,b){return 1;}
function Wn(a,b){return 1;}
function CJ(){var a=this;BA.call(a);a.cg=null;a.oH=0;}
function ZB(a){var b=new CJ();NM(b,a);return b;}
function NM(a,b){Bv(a);a.cg=b.ft();a.oH=b.J;}
function XX(a,b,c,d){var e,f,g,h;e=d.k;if(b<e){f=b+1|0;g=K(c,b);if(a.g(g)){h=a.b.a(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=K(c,f);if(Fy(g,f)&&a.g(Do(g,f)))return a.b.a(b,c,d);}}return (-1);}
function Ym(a,b){return a.cg.g(b);}
function V4(a,b){if(b instanceof CS)return a.cg.g(b.dJ);if(b instanceof Dk)return a.cg.g(b.b5);if(b instanceof CJ)return Ge(a.cg,b.cg);if(!(b instanceof Da))return 1;return Ge(a.cg,b.c8);}
function Zw(a){return a.cg;}
function ACR(a,b){a.b=b;}
function X7(a,b){return 1;}
var GK=F(CJ);
function Zm(a,b){return a.cg.g(E2(E1(b)));}
function Rc(){var a=this;BG.call(a);a.ko=null;a.ot=0;}
function YO(a){var b=new Rc();AAP(b,a);return b;}
function AAP(a,b){CI(a);a.ko=b.ft();a.ot=b.J;}
function ZF(a,b,c){return !a.ko.g(DQ(Dv(K(c,b))))?(-1):1;}
function Da(){var a=this;BG.call(a);a.c8=null;a.oZ=0;}
function AC$(a){var b=new Da();ABE(b,a);return b;}
function ABE(a,b){CI(a);a.c8=b.ft();a.oZ=b.J;}
function IT(a,b,c){return !a.c8.g(K(c,b))?(-1):1;}
function ABo(a,b){if(b instanceof Dk)return a.c8.g(b.b5);if(b instanceof Da)return Ge(a.c8,b.c8);if(!(b instanceof CJ)){if(!(b instanceof CS))return 1;return 0;}return Ge(a.c8,b.cg);}
function Kx(){var a=this;BA.call(a);a.ee=null;a.hN=null;a.fG=0;}
function ADe(a,b){var c=new Kx();VK(c,a,b);return c;}
function VK(a,b,c){Bv(a);a.ee=b;a.fG=c;}
function Z8(a,b){a.b=b;}
function LE(a){if(a.hN===null)a.hN=Fx(a.ee);return a.hN;}
function Vq(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.k;f=BU(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=K(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?EA([k,l]):EA([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.fG;if(b!=n)return (-1);while(true){if(l>=n)return a.b.a(i,c,d);if(m[l]!=a.ee.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=K(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=K(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.fG==3){k=f[0];m=a.ee.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.b.a(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.fG==2){b=f[0];m=a.ee.data;if(b==m[0]&&f[1]==m[1]){b=a.b.a(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function Wx(a,b){return b instanceof Kx&&!Cq(LE(b),LE(a))?0:1;}
function ADd(a,b){return 1;}
function Dk(){BG.call(this);this.b5=0;}
function RC(a){var b=new Dk();ABG(b,a);return b;}
function ABG(a,b){CI(a);a.b5=b;}
function Zt(a){return 1;}
function YM(a,b,c){return a.b5!=K(c,b)?(-1):1;}
function XU(a,b,c,d){var e,f,g;if(!(c instanceof Bq))return FM(a,b,c,d);e=d.k;while(true){if(b>=e)return (-1);f=Gd(c,a.b5,b);if(f<0)return (-1);g=a.b;b=f+1|0;if(g.a(b,c,d)>=0)break;}return f;}
function Zx(a,b,c,d,e){var f;if(!(d instanceof Bq))return FT(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FB(d,a.b5,c);if(f<0)break a;if(f<b)break a;if(a.b.a(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ADa(a,b){if(b instanceof Dk)return b.b5!=a.b5?0:1;if(!(b instanceof Da)){if(b instanceof CJ)return b.g(a.b5);if(!(b instanceof CS))return 1;return 0;}return IT(b,0,Pm(a.b5))<=0?0:1;}
function UT(){BG.call(this);this.ik=0;}
function AB0(a){var b=new UT();AAy(b,a);return b;}
function AAy(a,b){CI(a);a.ik=DQ(Dv(b));}
function Vk(a,b,c){return a.ik!=DQ(Dv(K(c,b)))?(-1):1;}
function Qu(){var a=this;BG.call(a);a.mV=0;a.i1=0;}
function WS(a){var b=new Qu();ACe(b,a);return b;}
function ACe(a,b){CI(a);a.mV=b;a.i1=FI(b);}
function VD(a,b,c){return a.mV!=K(c,b)&&a.i1!=K(c,b)?(-1):1;}
function D2(){var a=this;BA.call(a);a.eG=0;a.gx=null;a.f7=null;a.f1=0;}
function AGS(a,b){var c=new D2();JX(c,a,b);return c;}
function JX(a,b,c){Bv(a);a.eG=1;a.f7=b;a.f1=c;}
function AD4(a,b){a.b=b;}
function AA9(a,b,c,d){var e,f,g,h,i,j,k,l;e=BU(4);f=d.k;if(b>=f)return (-1);g=HC(a,b,c,f);h=b+a.eG|0;i=UB(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Df(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=HC(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(UB(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.eG|0;if(h>=f){b=k;break a;}g=HC(a,h,c,f);b=k;}}}if(b!=a.f1)return (-1);i=e.data;g=0;while(true){if(g>=
b)return a.b.a(h,c,d);if(i[g]!=a.f7.data[g])break;g=g+1|0;}return (-1);}
function Pd(a){var b,c;if(a.gx===null){b=new O;Q(b);c=0;while(c<a.f1){Gi(b,EV(a.f7.data[c]));c=c+1|0;}a.gx=P(b);}return a.gx;}
function HC(a,b,c,d){var e,f,g;a.eG=1;if(b>=(d-1|0))e=K(c,b);else{d=b+1|0;e=K(c,b);f=K(c,d);if(Fy(e,f)){g=BS(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&B$(g[0])&&Cn(g[1])?Do(g[0],g[1]):g[0];a.eG=2;}}return e;}
function ZG(a,b){return b instanceof D2&&!Cq(Pd(b),Pd(a))?0:1;}
function ABY(a,b){return 1;}
var PC=F(D2);
var Nt=F(D2);
var Qi=F(Cc);
function Xd(a,b,c,d){var e;while(true){e=a.t.a(b,c,d);if(e<=0)break;b=e;}return a.b.a(b,c,d);}
var Lb=F(Cc);
function AAt(a,b,c,d){var e;e=a.t.a(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.t.a(e,c,d);if(b<=e)break;e=b;}b=e;}return a.b.a(b,c,d);}
var Et=F(Cc);
function ACQ(a,b,c,d){var e;if(!a.t.s(d))return a.b.a(b,c,d);e=a.t.a(b,c,d);if(e>=0)return e;return a.b.a(b,c,d);}
function ADB(a,b){a.b=b;a.t.z(b);}
var KY=F(Et);
function Zv(a,b,c,d){var e;e=a.t.a(b,c,d);if(e<=0)e=b;return a.b.a(e,c,d);}
function AAK(a,b){a.b=b;}
function D1(){var a=this;Cc.call(a);a.dP=null;a.b_=0;}
function AJi(a,b,c,d,e){var f=new D1();GJ(f,a,b,c,d,e);return f;}
function GJ(a,b,c,d,e,f){Cu(a,c,d,e);a.dP=b;a.b_=f;}
function AEz(a,b,c,d){var e,f;e=Jf(d,a.b_);if(!a.t.s(d))return a.b.a(b,c,d);if(e>=a.dP.cP)return a.b.a(b,c,d);f=a.b_;e=e+1|0;C8(d,f,e);f=a.t.a(b,c,d);if(f>=0){C8(d,a.b_,0);return f;}f=a.b_;e=e+(-1)|0;C8(d,f,e);if(e>=a.dP.cT)return a.b.a(b,c,d);C8(d,a.b_,0);return (-1);}
var Js=F(D1);
function Y0(a,b,c,d){var e,f,g;e=0;f=a.dP.cP;a:{while(true){g=a.t.a(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.dP.cT)return (-1);return a.b.a(b,c,d);}
var Mf=F(Cc);
function AD$(a,b,c,d){var e;if(!a.t.s(d))return a.b.a(b,c,d);e=a.b.a(b,c,d);if(e>=0)return e;return a.t.a(b,c,d);}
var LD=F(Et);
function WF(a,b,c,d){var e;if(!a.t.s(d))return a.b.a(b,c,d);e=a.b.a(b,c,d);if(e<0)e=a.t.a(b,c,d);return e;}
var N7=F(D1);
function VY(a,b,c,d){var e,f,g;e=Jf(d,a.b_);if(!a.t.s(d))return a.b.a(b,c,d);f=a.dP;if(e>=f.cP){C8(d,a.b_,0);return a.b.a(b,c,d);}if(e<f.cT){C8(d,a.b_,e+1|0);g=a.t.a(b,c,d);}else{g=a.b.a(b,c,d);if(g>=0){C8(d,a.b_,0);return g;}C8(d,a.b_,e+1|0);g=a.t.a(b,c,d);}return g;}
var Mg=F(C0);
function AEr(a,b,c,d){var e;e=d.k;if(e>b)return a.b.br(b,e,c,d);return a.b.a(b,c,d);}
function ACX(a,b,c,d){var e;e=d.k;if(a.b.br(b,e,c,d)>=0)return b;return (-1);}
function Kb(){C0.call(this);this.gE=null;}
function ABq(a,b,c,d){var e,f;e=d.k;f=N8(a,b,e,c);if(f>=0)e=f;if(e>b)return a.b.br(b,e,c,d);return a.b.a(b,c,d);}
function Vu(a,b,c,d){var e,f,g,h;e=d.k;f=a.b.bq(b,c,d);if(f<0)return (-1);g=N8(a,f,e,c);if(g>=0)e=g;g=Bm(f,a.b.br(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.gE.eL(K(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function N8(a,b,c,d){while(true){if(b>=c)return (-1);if(a.gE.eL(K(d,b)))break;b=b+1|0;}return b;}
var DF=F();
var AJj=null;var AJk=null;function K4(b){var c;if(!(b&1)){c=AJk;if(c!==null)return c;c=new Of;AJk=c;return c;}c=AJj;if(c!==null)return c;c=new Oe;AJj=c;return c;}
var Qj=F(Cm);
function VZ(a,b,c,d){var e;a:{while(true){if((b+a.E.bg()|0)>d.k)break a;e=a.E.R(b,c);if(e<1)break;b=b+e|0;}}return a.b.a(b,c,d);}
var OO=F(Dw);
function AAs(a,b,c,d){var e;if((b+a.E.bg()|0)<=d.k){e=a.E.R(b,c);if(e>=1)b=b+e|0;}return a.b.a(b,c,d);}
var KO=F(DY);
function ACt(a,b,c,d){var e,f,g,h,i;e=a.fI;f=e.cT;g=e.cP;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.E.bg()|0)>d.k)break a;i=a.E.R(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.b.a(b,c,d);}if((b+a.E.bg()|0)>d.k){d.b$=1;return (-1);}i=a.E.R(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var LC=F(Cm);
function ABi(a,b,c,d){var e;while(true){e=a.b.a(b,c,d);if(e>=0)break;if((b+a.E.bg()|0)<=d.k){e=a.E.R(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var NB=F(Dw);
function V3(a,b,c,d){var e;e=a.b.a(b,c,d);if(e>=0)return e;return a.t.a(b,c,d);}
var LX=F(DY);
function ACJ(a,b,c,d){var e,f,g,h,i,j;e=a.fI;f=e.cT;g=e.cP;h=0;while(true){if(h>=f){a:{while(true){i=a.b.a(b,c,d);if(i>=0)break;if((b+a.E.bg()|0)<=d.k){i=a.E.R(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.E.bg()|0)>d.k){d.b$=1;return (-1);}j=a.E.R(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Hy=F(Bo);
function ZQ(a,b,c,d){if(b&&!(d.dh&&b==d.bI))return (-1);return a.b.a(b,c,d);}
function Za(a,b){return 0;}
function RM(){Bo.call(this);this.mC=0;}
function AC9(a){var b=new RM();Zq(b,a);return b;}
function Zq(a,b){Bv(a);a.mC=b;}
function Wk(a,b,c,d){var e,f,g;e=b<d.k?K(c,b):32;f=!b?32:K(c,b-1|0);g=d.fn?0:d.bI;return (e!=32&&!LF(a,e,b,g,c)?0:1)^(f!=32&&!LF(a,f,b-1|0,g,c)?0:1)^a.mC?(-1):a.b.a(b,c,d);}
function Wt(a,b){return 0;}
function LF(a,b,c,d,e){var f;if(!GV(b)&&b!=95){a:{if(B0(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=K(e,c);if(GV(f))return 0;if(B0(f)!=6)return 1;}}return 1;}return 0;}
var J_=F(Bo);
function Zo(a,b,c,d){if(b!=d.eR)return (-1);return a.b.a(b,c,d);}
function AEw(a,b){return 0;}
function Pn(){Bo.call(this);this.dU=0;}
function AGk(a){var b=new Pn();Us(b,a);return b;}
function Us(a,b){Bv(a);a.dU=b;}
function ABK(a,b,c,d){var e,f,g;e=!d.dh?M(c):d.k;if(b>=e){Br(d,a.dU,0);return a.b.a(b,c,d);}f=e-b|0;if(f==2&&K(c,b)==13&&K(c,b+1|0)==10){Br(d,a.dU,0);return a.b.a(b,c,d);}a:{if(f==1){g=K(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}Br(d,a.dU,0);return a.b.a(b,c,d);}
function W6(a,b){var c;c=!Cz(b,a.dU)?0:1;Br(b,a.dU,(-1));return c;}
var O9=F(Bo);
function AA3(a,b,c,d){if(b<(d.fn?M(c):d.k))return (-1);d.b$=1;d.pj=1;return a.b.a(b,c,d);}
function Vi(a,b){return 0;}
function JD(){Bo.call(this);this.kS=null;}
function WZ(a,b,c,d){a:{if(b!=d.k){if(!b)break a;if(d.dh&&b==d.bI)break a;if(a.kS.lL(K(c,b-1|0),K(c,b)))break a;}return (-1);}return a.b.a(b,c,d);}
function Yy(a,b){return 0;}
var UG=F(BA);
function AGE(){var a=new UG();AAV(a);return a;}
function AAV(a){Bv(a);}
function AEb(a,b,c,d){var e,f,g,h;e=d.k;f=b+1|0;if(f>e){d.b$=1;return (-1);}g=K(c,b);if(B$(g)){h=b+2|0;if(h<=e&&Fy(g,K(c,f)))return a.b.a(h,c,d);}return a.b.a(f,c,d);}
function Wz(a,b){a.b=b;}
function AAQ(a){return (-2147483602);}
function Wy(a,b){return 1;}
function Rg(){BA.call(this);this.g9=null;}
function AGf(a){var b=new Rg();W4(b,a);return b;}
function W4(a,b){Bv(a);a.g9=b;}
function AAW(a,b,c,d){var e,f,g,h;e=d.k;f=b+1|0;if(f>e){d.b$=1;return (-1);}g=K(c,b);if(B$(g)){b=b+2|0;if(b<=e){h=K(c,f);if(Fy(g,h))return a.g9.eL(Do(g,h))?(-1):a.b.a(b,c,d);}}return a.g9.eL(g)?(-1):a.b.a(f,c,d);}
function ACk(a,b){a.b=b;}
function Vb(a){return (-2147483602);}
function AEi(a,b){return 1;}
function Uz(){Bo.call(this);this.ey=0;}
function AFN(a){var b=new Uz();Yu(b,a);return b;}
function Yu(a,b){Bv(a);a.ey=b;}
function ZI(a,b,c,d){var e;e=!d.dh?M(c):d.k;if(b>=e){Br(d,a.ey,0);return a.b.a(b,c,d);}if((e-b|0)==1&&K(c,b)==10){Br(d,a.ey,1);return a.b.a(b+1|0,c,d);}return (-1);}
function Ys(a,b){var c;c=!Cz(b,a.ey)?0:1;Br(b,a.ey,(-1));return c;}
function S9(){Bo.call(this);this.eF=0;}
function AFw(a){var b=new S9();YP(b,a);return b;}
function YP(a,b){Bv(a);a.eF=b;}
function AA0(a,b,c,d){if((!d.dh?M(c)-b|0:d.k-b|0)<=0){Br(d,a.eF,0);return a.b.a(b,c,d);}if(K(c,b)!=10)return (-1);Br(d,a.eF,1);return a.b.a(b+1|0,c,d);}
function Yk(a,b){var c;c=!Cz(b,a.eF)?0:1;Br(b,a.eF,(-1));return c;}
function Qr(){Bo.call(this);this.dA=0;}
function AER(a){var b=new Qr();AEC(b,a);return b;}
function AEC(a,b){Bv(a);a.dA=b;}
function Y3(a,b,c,d){var e,f,g;e=!d.dh?M(c)-b|0:d.k-b|0;if(!e){Br(d,a.dA,0);return a.b.a(b,c,d);}if(e<2){f=K(c,b);g=97;}else{f=K(c,b);g=K(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:Br(d,a.dA,0);return a.b.a(b,c,d);case 13:if(g!=10){Br(d,a.dA,0);return a.b.a(b,c,d);}Br(d,a.dA,0);return a.b.a(b,c,d);default:}return (-1);}
function W9(a,b){var c;c=!Cz(b,a.dA)?0:1;Br(b,a.dA,(-1));return c;}
function Fl(){var a=this;BA.call(a);a.iL=0;a.eb=0;}
function AGM(a,b){var c=new Fl();KG(c,a,b);return c;}
function KG(a,b,c){Bv(a);a.iL=b;a.eb=c;}
function V0(a,b,c,d){var e,f,g,h;e=EF(a,d);if(e!==null&&(b+M(e)|0)<=d.k){f=0;while(true){if(f>=M(e)){Br(d,a.eb,M(e));return a.b.a(b+M(e)|0,c,d);}g=K(e,f);h=b+f|0;if(g!=K(c,h)&&FI(K(e,f))!=K(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ABU(a,b){a.b=b;}
function EF(a,b){var c,d;c=a.iL;d=Ek(b,c);c=Gm(b,c);return (c|d|(c-d|0))>=0&&c<=M(b.g_)?Ct(b.g_,d,c):null;}
function AB$(a,b){var c;c=!Cz(b,a.eb)?0:1;Br(b,a.eb,(-1));return c;}
var UD=F(Fl);
function AEY(a,b){var c=new UD();ADu(c,a,b);return c;}
function ADu(a,b,c){KG(a,b,c);}
function Xc(a,b,c,d){var e,f;e=EF(a,d);if(e!==null&&(b+M(e)|0)<=d.k){f=!NL(c,e,b)?(-1):M(e);if(f<0)return (-1);Br(d,a.eb,f);return a.b.a(b+f|0,c,d);}return (-1);}
function ADj(a,b,c,d){var e,f;e=EF(a,d);f=d.bI;if(e!==null&&(b+M(e)|0)<=f){while(true){if(b>f)return (-1);b=RL(c,e,b);if(b<0)return (-1);if(a.b.a(b+M(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function VR(a,b,c,d,e){var f,g;f=EF(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Bf(c,M(d)-M(f)|0);b:{c:while(true){if(g<0){g=(-1);break b;}c=0;while(true){if(c>=M(f))break c;if(K(d,g+c|0)!=K(f,c))break;c=c+1|0;}g=g+(-1)|0;}}if(g<0)break a;if(g<b)break a;if(a.b.a(g+M(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AAn(a,b){return 1;}
var Sn=F(Fl);
function AFx(a,b){var c=new Sn();Yq(c,a,b);return c;}
function Yq(a,b,c){KG(a,b,c);}
function ZZ(a,b,c,d){var e,f;e=EF(a,d);if(e!==null&&(b+M(e)|0)<=d.k){f=0;while(true){if(f>=M(e)){Br(d,a.eb,M(e));return a.b.a(b+M(e)|0,c,d);}if(DQ(Dv(K(e,f)))!=DQ(Dv(K(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var J8=F(EQ);
function Yf(a,b,c,d,e){Jm(a,b,c,d,e);return a;}
function Wp(a,b,c,d){Pr(a,b,c,d);return a;}
function WM(a,b){G2(a,b);}
function ACY(a,b,c){PI(a,b,c);return a;}
function Mi(){var a=this;BG.call(a);a.bt=null;a.gA=null;a.hk=null;}
function Xt(a,b,c){return !Hw(a,c,b)?(-1):a.X;}
function Wf(a,b,c,d){var e,f,g;e=d.k;while(true){if(b>e)return (-1);f=K(a.bt,a.X-1|0);a:{while(true){g=a.X;if(b>(e-g|0)){b=(-1);break a;}g=K(c,(b+g|0)-1|0);if(g==f&&Hw(a,c,b))break;b=b+M1(a.gA,g)|0;}}if(b<0)return (-1);if(a.b.a(b+a.X|0,c,d)>=0)break;b=b+1|0;}return b;}
function Yw(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=K(a.bt,0);g=(M(d)-c|0)-a.X|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=K(d,c);if(g==f&&Hw(a,d,c))break;c=c-M1(a.hk,g)|0;}}if(c<0)return (-1);if(a.b.a(c+a.X|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function YT(a,b){var c;if(b instanceof Dk)return b.b5!=K(a.bt,0)?0:1;if(b instanceof Da)return IT(b,0,Ct(a.bt,0,1))<=0?0:1;if(!(b instanceof CJ)){if(!(b instanceof CS))return 1;return M(a.bt)>1&&b.dJ==Do(K(a.bt,0),K(a.bt,1))?1:0;}a:{b:{b=b;if(!b.g(K(a.bt,0))){if(M(a.bt)<=1)break b;if(!b.g(Do(K(a.bt,0),K(a.bt,1))))break b;}c=1;break a;}c=0;}return c;}
function Hw(a,b,c){var d;d=0;while(d<a.X){if(K(b,d+c|0)!=K(a.bt,d))return 0;d=d+1|0;}return 1;}
function Qq(){BG.call(this);this.fp=null;}
function AGP(a){var b=new Qq();ADb(b,a);return b;}
function ADb(a,b){var c,d,e;CI(a);c=new O;Q(c);d=0;while(true){e=BV(d,b.x);if(e>=0){a.fp=P(c);a.X=c.x;return;}if(d<0)break;if(e>=0)break;BJ(c,DQ(Dv(b.n.data[d])));d=d+1|0;}b=new Bn;U(b);J(b);}
function Z5(a,b,c){var d;d=0;while(true){if(d>=M(a.fp))return M(a.fp);if(K(a.fp,d)!=DQ(Dv(K(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Jw(){BG.call(this);this.ex=null;}
function ACw(a,b,c){var d,e,f;d=0;while(true){if(d>=M(a.ex))return M(a.ex);e=K(a.ex,d);f=b+d|0;if(e!=K(c,f)&&FI(K(a.ex,d))!=K(c,f))break;d=d+1|0;}return (-1);}
var Fk=F();
var AJl=null;var AJm=null;var AJh=null;function RN(){AJl=AGt();AJm=AFF();AJh=G($rt_arraycls(C),[G(C,[B(278),AGN()]),G(C,[B(279),AEO()]),G(C,[B(280),AGq()]),G(C,[B(281),AGz()]),G(C,[B(282),AJm]),G(C,[B(283),AFQ()]),G(C,[B(284),AFB()]),G(C,[B(285),AE2()]),G(C,[B(286),AEX()]),G(C,[B(287),AE9()]),G(C,[B(288),AFk()]),G(C,[B(289),AE7()]),G(C,[B(290),AF$()]),G(C,[B(291),AEJ()]),G(C,[B(292),AGv()]),G(C,[B(293),AFj()]),G(C,[B(294),AFO()]),G(C,[B(295),AFg()]),G(C,[B(296),AFP()]),G(C,[B(297),AFa()]),G(C,[B(298),AGD()]),
G(C,[B(299),AFc()]),G(C,[B(300),AFV()]),G(C,[B(301),AGo()]),G(C,[B(302),AGl()]),G(C,[B(303),AGA()]),G(C,[B(304),AE_()]),G(C,[B(305),AGd()]),G(C,[B(306),AJl]),G(C,[B(307),AFZ()]),G(C,[B(308),AE3()]),G(C,[B(309),AJl]),G(C,[B(310),AEI()]),G(C,[B(311),AJm]),G(C,[B(312),AFr()]),G(C,[B(313),L(0,127)]),G(C,[B(314),L(128,255)]),G(C,[B(315),L(256,383)]),G(C,[B(316),L(384,591)]),G(C,[B(317),L(592,687)]),G(C,[B(318),L(688,767)]),G(C,[B(319),L(768,879)]),G(C,[B(320),L(880,1023)]),G(C,[B(321),L(1024,1279)]),G(C,[B(322),
L(1280,1327)]),G(C,[B(323),L(1328,1423)]),G(C,[B(324),L(1424,1535)]),G(C,[B(325),L(1536,1791)]),G(C,[B(326),L(1792,1871)]),G(C,[B(327),L(1872,1919)]),G(C,[B(328),L(1920,1983)]),G(C,[B(329),L(2304,2431)]),G(C,[B(330),L(2432,2559)]),G(C,[B(331),L(2560,2687)]),G(C,[B(332),L(2688,2815)]),G(C,[B(333),L(2816,2943)]),G(C,[B(334),L(2944,3071)]),G(C,[B(335),L(3072,3199)]),G(C,[B(336),L(3200,3327)]),G(C,[B(337),L(3328,3455)]),G(C,[B(338),L(3456,3583)]),G(C,[B(339),L(3584,3711)]),G(C,[B(340),L(3712,3839)]),G(C,[B(341),
L(3840,4095)]),G(C,[B(342),L(4096,4255)]),G(C,[B(343),L(4256,4351)]),G(C,[B(344),L(4352,4607)]),G(C,[B(345),L(4608,4991)]),G(C,[B(346),L(4992,5023)]),G(C,[B(347),L(5024,5119)]),G(C,[B(348),L(5120,5759)]),G(C,[B(349),L(5760,5791)]),G(C,[B(350),L(5792,5887)]),G(C,[B(351),L(5888,5919)]),G(C,[B(352),L(5920,5951)]),G(C,[B(353),L(5952,5983)]),G(C,[B(354),L(5984,6015)]),G(C,[B(355),L(6016,6143)]),G(C,[B(356),L(6144,6319)]),G(C,[B(357),L(6400,6479)]),G(C,[B(358),L(6480,6527)]),G(C,[B(359),L(6528,6623)]),G(C,[B(360),
L(6624,6655)]),G(C,[B(361),L(6656,6687)]),G(C,[B(362),L(7424,7551)]),G(C,[B(363),L(7552,7615)]),G(C,[B(364),L(7616,7679)]),G(C,[B(365),L(7680,7935)]),G(C,[B(366),L(7936,8191)]),G(C,[B(367),L(8192,8303)]),G(C,[B(368),L(8304,8351)]),G(C,[B(369),L(8352,8399)]),G(C,[B(370),L(8400,8447)]),G(C,[B(371),L(8448,8527)]),G(C,[B(372),L(8528,8591)]),G(C,[B(373),L(8592,8703)]),G(C,[B(374),L(8704,8959)]),G(C,[B(375),L(8960,9215)]),G(C,[B(376),L(9216,9279)]),G(C,[B(377),L(9280,9311)]),G(C,[B(378),L(9312,9471)]),G(C,[B(379),
L(9472,9599)]),G(C,[B(380),L(9600,9631)]),G(C,[B(381),L(9632,9727)]),G(C,[B(382),L(9728,9983)]),G(C,[B(383),L(9984,10175)]),G(C,[B(384),L(10176,10223)]),G(C,[B(385),L(10224,10239)]),G(C,[B(386),L(10240,10495)]),G(C,[B(387),L(10496,10623)]),G(C,[B(388),L(10624,10751)]),G(C,[B(389),L(10752,11007)]),G(C,[B(390),L(11008,11263)]),G(C,[B(391),L(11264,11359)]),G(C,[B(392),L(11392,11519)]),G(C,[B(393),L(11520,11567)]),G(C,[B(394),L(11568,11647)]),G(C,[B(395),L(11648,11743)]),G(C,[B(396),L(11776,11903)]),G(C,[B(397),
L(11904,12031)]),G(C,[B(398),L(12032,12255)]),G(C,[B(399),L(12272,12287)]),G(C,[B(400),L(12288,12351)]),G(C,[B(401),L(12352,12447)]),G(C,[B(402),L(12448,12543)]),G(C,[B(403),L(12544,12591)]),G(C,[B(404),L(12592,12687)]),G(C,[B(405),L(12688,12703)]),G(C,[B(406),L(12704,12735)]),G(C,[B(407),L(12736,12783)]),G(C,[B(408),L(12784,12799)]),G(C,[B(409),L(12800,13055)]),G(C,[B(410),L(13056,13311)]),G(C,[B(411),L(13312,19893)]),G(C,[B(412),L(19904,19967)]),G(C,[B(413),L(19968,40959)]),G(C,[B(414),L(40960,42127)]),G(C,
[B(415),L(42128,42191)]),G(C,[B(416),L(42752,42783)]),G(C,[B(417),L(43008,43055)]),G(C,[B(418),L(44032,55203)]),G(C,[B(419),L(55296,56191)]),G(C,[B(420),L(56192,56319)]),G(C,[B(421),L(56320,57343)]),G(C,[B(422),L(57344,63743)]),G(C,[B(423),L(63744,64255)]),G(C,[B(424),L(64256,64335)]),G(C,[B(425),L(64336,65023)]),G(C,[B(426),L(65024,65039)]),G(C,[B(427),L(65040,65055)]),G(C,[B(428),L(65056,65071)]),G(C,[B(429),L(65072,65103)]),G(C,[B(430),L(65104,65135)]),G(C,[B(431),L(65136,65279)]),G(C,[B(432),L(65280,65519)]),
G(C,[B(433),L(0,1114111)]),G(C,[B(434),AE8()]),G(C,[B(435),Bu(0,1)]),G(C,[B(436),Gw(62,1)]),G(C,[B(437),Bu(1,1)]),G(C,[B(438),Bu(2,1)]),G(C,[B(439),Bu(3,0)]),G(C,[B(440),Bu(4,0)]),G(C,[B(441),Bu(5,1)]),G(C,[B(442),Gw(448,1)]),G(C,[B(443),Bu(6,1)]),G(C,[B(444),Bu(7,0)]),G(C,[B(445),Bu(8,1)]),G(C,[B(446),Gw(3584,1)]),G(C,[B(447),Bu(9,1)]),G(C,[B(448),Bu(10,1)]),G(C,[B(449),Bu(11,1)]),G(C,[B(450),Gw(28672,0)]),G(C,[B(451),Bu(12,0)]),G(C,[B(452),Bu(13,0)]),G(C,[B(453),Bu(14,0)]),G(C,[B(454),AFy(983040,1,1)]),G(C,
[B(455),Bu(15,0)]),G(C,[B(456),Bu(16,1)]),G(C,[B(457),Bu(18,1)]),G(C,[B(458),AFM(19,0,1)]),G(C,[B(459),Gw(1643118592,1)]),G(C,[B(460),Bu(20,0)]),G(C,[B(461),Bu(21,0)]),G(C,[B(462),Bu(22,0)]),G(C,[B(463),Bu(23,0)]),G(C,[B(464),Bu(24,1)]),G(C,[B(465),Gw(2113929216,1)]),G(C,[B(466),Bu(25,1)]),G(C,[B(467),Bu(26,0)]),G(C,[B(468),Bu(27,0)]),G(C,[B(469),Bu(28,1)]),G(C,[B(470),Bu(29,0)]),G(C,[B(471),Bu(30,0)])]);}
function I0(){BG.call(this);this.ky=0;}
function ACC(a,b,c){var d,e;d=b+1|0;e=K(c,b);d=K(c,d);return a.ky!=E2(E1(Do(e,d)))?(-1):2;}
function HS(){BA.call(this);this.dZ=0;}
function AAU(a){var b=new HS();WJ(b,a);return b;}
function WJ(a,b){Bv(a);a.dZ=b;}
function ABe(a,b){a.b=b;}
function W7(a,b,c,d){var e,f;e=b+1|0;if(e>d.k){d.b$=1;return (-1);}f=K(c,b);if(b>d.bI&&B$(K(c,b-1|0)))return (-1);if(a.dZ!=f)return (-1);return a.b.a(e,c,d);}
function YR(a,b,c,d){var e,f,g,h;if(!(c instanceof Bq))return FM(a,b,c,d);e=d.bI;f=d.k;while(true){if(b>=f)return (-1);g=Gd(c,a.dZ,b);if(g<0)return (-1);if(g>e&&B$(K(c,g-1|0))){b=g+1|0;continue;}h=a.b;b=g+1|0;if(h.a(b,c,d)>=0)break;}return g;}
function XB(a,b,c,d,e){var f,g;if(!(d instanceof Bq))return FT(a,b,c,d,e);f=e.bI;a:{while(true){if(c<b)return (-1);g=FB(d,a.dZ,c);if(g<0)break a;if(g<b)break a;if(g>f&&B$(K(d,g-1|0))){c=g+(-2)|0;continue;}if(a.b.a(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function VN(a,b){if(b instanceof Dk)return 0;if(b instanceof Da)return 0;if(b instanceof CJ)return 0;if(b instanceof CS)return 0;if(b instanceof H2)return 0;if(!(b instanceof HS))return 1;return b.dZ!=a.dZ?0:1;}
function AC5(a,b){return 1;}
function H2(){BA.call(this);this.dN=0;}
function Y6(a){var b=new H2();AAY(b,a);return b;}
function AAY(a,b){Bv(a);a.dN=b;}
function WL(a,b){a.b=b;}
function Vy(a,b,c,d){var e,f,g,h;e=d.k;f=b+1|0;g=BV(f,e);if(g>0){d.b$=1;return (-1);}h=K(c,b);if(g<0&&Cn(K(c,f)))return (-1);if(a.dN!=h)return (-1);return a.b.a(f,c,d);}
function ABv(a,b,c,d){var e,f;if(!(c instanceof Bq))return FM(a,b,c,d);e=d.k;while(true){if(b>=e)return (-1);f=Gd(c,a.dN,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Cn(K(c,b))){b=f+2|0;continue;}if(a.b.a(b,c,d)>=0)break;}return f;}
function ACu(a,b,c,d,e){var f,g;if(!(d instanceof Bq))return FT(a,b,c,d,e);f=e.k;a:{while(true){if(c<b)return (-1);g=FB(d,a.dN,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Cn(K(d,c))){c=g+(-1)|0;continue;}if(a.b.a(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function Xu(a,b){if(b instanceof Dk)return 0;if(b instanceof Da)return 0;if(b instanceof CJ)return 0;if(b instanceof CS)return 0;if(b instanceof HS)return 0;if(!(b instanceof H2))return 1;return b.dN!=a.dN?0:1;}
function ABB(a,b){return 1;}
function CS(){var a=this;BG.call(a);a.fU=0;a.e$=0;a.dJ=0;}
function AB_(a,b,c){var d,e;d=b+1|0;e=K(c,b);d=K(c,d);return a.fU==e&&a.e$==d?2:(-1);}
function AAE(a,b,c,d){var e,f;if(!(c instanceof Bq))return FM(a,b,c,d);e=d.k;while(b<e){b=Gd(c,a.fU,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=K(c,b);if(a.e$==f&&a.b.a(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function WK(a,b,c,d,e){var f;if(!(d instanceof Bq))return FT(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FB(d,a.e$,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.fU==K(d,f)&&a.b.a(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AB1(a,b){if(b instanceof CS)return b.dJ!=a.dJ?0:1;if(b instanceof CJ)return b.g(a.dJ);if(b instanceof Dk)return 0;if(!(b instanceof Da))return 1;return 0;}
var Oe=F(DF);
function WT(a,b){return b!=10?0:1;}
function AB6(a,b,c){return b!=10?0:1;}
var Of=F(DF);
function ACK(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ADX(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function TT(){var a=this;C.call(a);a.h$=null;a.f9=null;a.ek=0;a.nm=0;}
function AAO(a){var b=new TT();Zn(b,a);return b;}
function Zn(a,b){var c,d;while(true){c=a.ek;if(b<c)break;a.ek=c<<1|1;}d=c<<1|1;a.ek=d;d=d+1|0;a.h$=BU(d);a.f9=BU(d);a.nm=b;}
function L3(a,b,c){var d,e,f,g;d=0;e=a.ek;f=b&e;while(true){g=a.h$.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.f9.data[f]=c;}
function M1(a,b){var c,d,e,f;c=a.ek;d=b&c;e=0;while(true){f=a.h$.data[d];if(!f)break;if(f==b)return a.f9.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.nm;}
var QG=F();
var HP=F(T);
function AGt(){var a=new HP();Y1(a);return a;}
function Y1(a){}
function Ss(a){return B2(BC(CA(),9,13),32);}
var Hd=F(T);
function AFF(){var a=new Hd();AC2(a);return a;}
function AC2(a){}
function S2(a){return BC(CA(),48,57);}
var TN=F(T);
function AGN(){var a=new TN();YE(a);return a;}
function YE(a){}
function ACl(a){return BC(CA(),97,122);}
var Uc=F(T);
function AEO(){var a=new Uc();Zs(a);return a;}
function Zs(a){}
function AC7(a){return BC(CA(),65,90);}
var Ue=F(T);
function AGq(){var a=new Ue();Wh(a);return a;}
function Wh(a){}
function XY(a){return BC(CA(),0,127);}
var HM=F(T);
function AGz(){var a=new HM();Xf(a);return a;}
function Xf(a){}
function Rj(a){return BC(BC(CA(),97,122),65,90);}
var H9=F(HM);
function AFQ(){var a=new H9();Y8(a);return a;}
function Y8(a){}
function R7(a){return BC(Rj(a),48,57);}
var U6=F(T);
function AFB(){var a=new U6();AAu(a);return a;}
function AAu(a){}
function YQ(a){return BC(BC(BC(CA(),33,64),91,96),123,126);}
var IR=F(H9);
function AE2(){var a=new IR();ABQ(a);return a;}
function ABQ(a){}
function Qo(a){return BC(BC(BC(R7(a),33,64),91,96),123,126);}
var SG=F(IR);
function AEX(){var a=new SG();ACU(a);return a;}
function ACU(a){}
function AAj(a){return B2(Qo(a),32);}
var SU=F(T);
function AE9(){var a=new SU();ACx(a);return a;}
function ACx(a){}
function Xo(a){return B2(B2(CA(),32),9);}
var RG=F(T);
function AFk(){var a=new RG();ADN(a);return a;}
function ADN(a){}
function AAg(a){return B2(BC(CA(),0,31),127);}
var Rs=F(T);
function AE7(){var a=new Rs();Ws(a);return a;}
function Ws(a){}
function AD0(a){return BC(BC(BC(CA(),48,57),97,102),65,70);}
var Uh=F(T);
function AF$(){var a=new Uh();V9(a);return a;}
function V9(a){}
function AAN(a){var b;b=new M$;b.oG=a;Bc(b);b.v=1;return b;}
var Va=F(T);
function AEJ(){var a=new Va();AB3(a);return a;}
function AB3(a){}
function Vr(a){var b;b=new Ja;b.oP=a;Bc(b);b.v=1;return b;}
var TU=F(T);
function AGv(){var a=new TU();Wj(a);return a;}
function Wj(a){}
function Y7(a){var b;b=new My;b.oq=a;Bc(b);return b;}
var TJ=F(T);
function AFj(){var a=new TJ();AAh(a);return a;}
function AAh(a){}
function ACb(a){var b;b=new Mx;b.n_=a;Bc(b);return b;}
var Uu=F(T);
function AFO(){var a=new Uu();Xb(a);return a;}
function Xb(a){}
function Xl(a){var b;b=new Pf;b.pp=a;Bc(b);FY(b.u,0,2048);b.v=1;return b;}
var QY=F(T);
function AFg(){var a=new QY();WP(a);return a;}
function WP(a){}
function XH(a){var b;b=new KJ;b.o0=a;Bc(b);b.v=1;return b;}
var QC=F(T);
function AFP(){var a=new QC();Z2(a);return a;}
function Z2(a){}
function ADV(a){var b;b=new J3;b.pK=a;Bc(b);b.v=1;return b;}
var TW=F(T);
function AFa(){var a=new TW();AAv(a);return a;}
function AAv(a){}
function Vl(a){var b;b=new LL;b.oI=a;Bc(b);return b;}
var T5=F(T);
function AGD(){var a=new T5();YW(a);return a;}
function YW(a){}
function ZJ(a){var b;b=new I6;b.nA=a;Bc(b);b.v=1;return b;}
var R2=F(T);
function AFc(){var a=new R2();VS(a);return a;}
function VS(a){}
function XL(a){var b;b=new I_;b.o3=a;Bc(b);b.v=1;return b;}
var SZ=F(T);
function AFV(){var a=new SZ();WW(a);return a;}
function WW(a){}
function YA(a){var b;b=new JR;b.pm=a;Bc(b);b.v=1;return b;}
var UW=F(T);
function AGo(){var a=new UW();ZN(a);return a;}
function ZN(a){}
function ZL(a){var b;b=new K6;b.pA=a;Bc(b);b.v=1;return b;}
var T4=F(T);
function AGl(){var a=new T4();AAH(a);return a;}
function AAH(a){}
function ADf(a){var b;b=new K_;b.os=a;Bc(b);return b;}
var Sl=F(T);
function AGA(){var a=new Sl();WQ(a);return a;}
function WQ(a){}
function ABH(a){var b;b=new Nr;b.o8=a;Bc(b);return b;}
var R1=F(T);
function AE_(){var a=new R1();ACd(a);return a;}
function ACd(a){}
function AAF(a){var b;b=new MQ;b.nE=a;Bc(b);b.v=1;return b;}
var U9=F(T);
function AGd(){var a=new U9();YU(a);return a;}
function YU(a){}
function ACj(a){var b;b=new Ji;b.pW=a;Bc(b);b.v=1;return b;}
var GR=F(T);
function AFZ(){var a=new GR();XS(a);return a;}
function XS(a){}
function SV(a){return B2(BC(BC(BC(CA(),97,122),65,90),48,57),95);}
var Uw=F(GR);
function AE3(){var a=new Uw();YY(a);return a;}
function YY(a){}
function AAx(a){var b;b=Dn(SV(a),1);b.v=1;return b;}
var SJ=F(HP);
function AEI(){var a=new SJ();ADD(a);return a;}
function ADD(a){}
function Wb(a){var b;b=Dn(Ss(a),1);b.v=1;return b;}
var RX=F(Hd);
function AFr(){var a=new RX();ZD(a);return a;}
function ZD(a){}
function YJ(a){var b;b=Dn(S2(a),1);b.v=1;return b;}
function Rx(){var a=this;T.call(a);a.kt=0;a.kQ=0;}
function L(a,b){var c=new Rx();ADT(c,a,b);return c;}
function ADT(a,b,c){a.kt=b;a.kQ=c;}
function ZV(a){return BC(CA(),a.kt,a.kQ);}
var RS=F(T);
function AE8(){var a=new RS();AD6(a);return a;}
function AD6(a){}
function ADL(a){return BC(BC(CA(),65279,65279),65520,65533);}
function SA(){var a=this;T.call(a);a.hQ=0;a.f0=0;a.ju=0;}
function Bu(a,b){var c=new SA();W8(c,a,b);return c;}
function AFM(a,b,c){var d=new SA();ADU(d,a,b,c);return d;}
function W8(a,b,c){a.f0=c;a.hQ=b;}
function ADU(a,b,c,d){a.ju=d;a.f0=c;a.hQ=b;}
function Yi(a){var b;b=AGI(a.hQ);if(a.ju)FY(b.u,0,2048);b.v=a.f0;return b;}
function SH(){var a=this;T.call(a);a.hP=0;a.f_=0;a.iP=0;}
function Gw(a,b){var c=new SH();XM(c,a,b);return c;}
function AFy(a,b,c){var d=new SH();Vn(d,a,b,c);return d;}
function XM(a,b,c){a.f_=c;a.hP=b;}
function Vn(a,b,c,d){a.iP=d;a.f_=c;a.hP=b;}
function Vm(a){var b;b=new Mr;Ty(b,a.hP);if(a.iP)FY(b.u,0,2048);b.v=a.f_;return b;}
var RA=F();
var Ra=F();
function Sk(b){var c,d,e,f,g,h,i;c=ACn(F2(b));d=G8(c);e=BU(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+G8(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Jr(c);h=h+1|0;}return e;}
function HH(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function JE(){var a=this;C.call(a);a.jT=0;a.k4=0;a.j2=null;}
function Yg(a,b,c){var d=new JE();ACT(d,a,b,c);return d;}
function ACT(a,b,c,d){a.jT=b;a.k4=c;a.j2=d;}
function TZ(){var a=this;C.call(a);a.jc=null;a.kx=0;}
function ACn(a){var b=new TZ();Xw(b,a);return b;}
function Xw(a,b){a.jc=b;}
var Sj=F();
function G8(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.jc.data;f=b.kx;b.kx=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bi(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Jr(b){var c,d;c=G8(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Gx=F(0);
function J7(){var a=this;C.call(a);a.pt=null;a.mu=null;}
function Ky(){C.call(this);this.md=null;}
function Xp(a,b){BJ(BH(a.md.ix,Ea(b)),10);return 1;}
var Mk=F();
function YB(a,b){b=b;b.bk=D_(b.bk,null);}
function OS(){var a=this;R.call(a);a.i5=null;a.pu=null;}
function X2(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.bn^CD(a.i5,c):0;}
function OQ(){var a=this;R.call(a);a.mi=null;a.mL=null;a.pb=null;}
function VG(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.bn^CD(a.mi,c):0;return a.mL.g(b)&&!d?1:0;}
function Kg(){var a=this;R.call(a);a.e_=null;a.nI=null;}
function ZO(a,b){return a.J^CD(a.e_,b);}
function YC(a){var b,c,d;b=new O;Q(b);c=Fr(a.e_,0);while(c>=0){Gi(b,EV(c));BJ(b,124);c=Fr(a.e_,c+1|0);}d=b.x;if(d>0)OG(b,d-1|0);return P(b);}
function Km(){var a=this;R.call(a);a.kI=null;a.oN=null;}
function ACa(a,b){return a.kI.g(b);}
function Kk(){var a=this;R.call(a);a.f3=0;a.jl=null;a.gJ=null;}
function ACB(a,b){return !(a.f3^CD(a.gJ.r,b))&&!(a.f3^a.gJ.ck^a.jl.g(b))?0:1;}
function Kl(){var a=this;R.call(a);a.f$=0;a.mw=null;a.hw=null;}
function Z4(a,b){return !(a.f$^CD(a.hw.r,b))&&!(a.f$^a.hw.ck^a.mw.g(b))?1:0;}
function Kp(){var a=this;R.call(a);a.m3=0;a.mA=null;a.mr=null;a.nX=null;}
function XK(a,b){return a.m3^(!a.mA.g(b)&&!a.mr.g(b)?0:1);}
function Kq(){var a=this;R.call(a);a.kO=0;a.kB=null;a.kd=null;a.pP=null;}
function Vd(a,b){return a.kO^(!a.kB.g(b)&&!a.kd.g(b)?0:1)?0:1;}
function Kn(){var a=this;R.call(a);a.j8=null;a.pV=null;}
function YF(a,b){return Cl(a.j8,b);}
function Ko(){var a=this;R.call(a);a.mJ=null;a.n9=null;}
function Z7(a,b){return Cl(a.mJ,b)?0:1;}
function Kr(){var a=this;R.call(a);a.kX=null;a.kF=0;a.l1=null;}
function ADn(a,b){return !Cl(a.kX,b)&&!(a.kF^CD(a.l1.r,b))?0:1;}
function Ks(){var a=this;R.call(a);a.lp=null;a.lA=0;a.lb=null;}
function Xh(a,b){return !Cl(a.lp,b)&&!(a.lA^CD(a.lb.r,b))?1:0;}
function Kf(){var a=this;R.call(a);a.lY=0;a.mv=null;a.mU=null;a.nK=null;}
function AEH(a,b){return !(a.lY^a.mv.g(b))&&!Cl(a.mU,b)?0:1;}
function KV(){var a=this;R.call(a);a.mS=0;a.iz=null;a.iQ=null;a.n4=null;}
function YI(a,b){return !(a.mS^a.iz.g(b))&&!Cl(a.iQ,b)?1:0;}
function Kd(){var a=this;R.call(a);a.jM=null;a.n$=null;}
function Xg(a,b){return Cl(a.jM,b);}
function Ke(){var a=this;R.call(a);a.jR=null;a.pN=null;}
function Yp(a,b){return Cl(a.jR,b)?0:1;}
function Kj(){var a=this;R.call(a);a.mZ=null;a.lk=0;a.nw=null;}
function Zr(a,b){return Cl(a.mZ,b)&&a.lk^CD(a.nw.r,b)?1:0;}
function Kc(){var a=this;R.call(a);a.lN=null;a.kP=0;a.lj=null;}
function AC_(a,b){return Cl(a.lN,b)&&a.kP^CD(a.lj.r,b)?0:1;}
function Kh(){var a=this;R.call(a);a.l3=0;a.i3=null;a.kK=null;a.nW=null;}
function Wr(a,b){return a.l3^a.i3.g(b)&&Cl(a.kK,b)?1:0;}
function Ki(){var a=this;R.call(a);a.lI=0;a.it=null;a.lX=null;a.oe=null;}
function ABA(a,b){return a.lI^a.it.g(b)&&Cl(a.lX,b)?0:1;}
var Ir=F(0);
function MP(){var a=this;C.call(a);a.n1=null;a.mx=null;a.fl=null;a.bJ=null;a.fb=0;a.gD=0;}
function I9(a,b){var c,d,e;c=M(a.fl);if(b>=0&&b<=c){PL(a.bJ,null,(-1),(-1));d=a.bJ;d.fJ=1;d.cC=b;c=d.eR;if(c<0)c=b;d.eR=c;b=a.mx.bq(b,a.fl,d);if(b==(-1))a.bJ.b$=1;if(b>=0){d=a.bJ;if(d.fm){e=d.ch.data;if(e[0]==(-1)){c=d.cC;e[0]=c;e[1]=c;}d.eR=GG(d);return 1;}}a.bJ.cC=(-1);return 0;}d=new Bn;Bb(d,CL(b));J(d);}
function Sd(a){var b,c,d;b=M(a.fl);c=a.bJ;if(!c.fn)b=a.gD;if(c.cC>=0&&c.fJ==1){c.cC=GG(c);if(GG(a.bJ)==KN(a.bJ,0)){c=a.bJ;c.cC=c.cC+1|0;}d=a.bJ.cC;return d<=b&&I9(a,d)?1:0;}return I9(a,a.fb);}
function J$(){C.call(this);this.k8=null;}
function ACi(a,b){NQ(a.k8,b);}
function PA(){C.call(this);this.jr=null;}
function Vo(a,b){Le(a.jr,b);}
var HI=F(EI);
var AIf=null;function X8(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function U_(){var b;b=new HI;Qc(b);AIf=b;}
var Jn=F(EY);
function Yj(a,b,c,d){var e,f,g;e=0;f=d.k;a:{while(true){if(b>f){b=e;break a;}g=Ek(d,a.D);CH(d,a.D,b);e=a.bO.a(b,c,d);if(e>=0)break;CH(d,a.D,g);b=b+1|0;}}return b;}
function AEy(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Ek(e,a.D);CH(e,a.D,c);f=a.bO.a(c,d,e);if(f>=0)break;CH(e,a.D,g);c=c+(-1)|0;}}return c;}
function W5(a){return null;}
function MX(){var a=this;C.call(a);a.or=null;a.j4=null;}
function MW(){C.call(this);this.nB=null;}
function Ob(){var a=this;C.call(a);a.ch=null;a.fQ=null;a.g5=null;a.g_=null;a.jo=0;a.fm=0;a.bI=0;a.k=0;a.cC=0;a.fn=0;a.dh=0;a.b$=0;a.pj=0;a.eR=0;a.fJ=0;}
function Br(a,b,c){a.fQ.data[b]=c;}
function Cz(a,b){return a.fQ.data[b];}
function GG(a){return MB(a,0);}
function MB(a,b){Mp(a,b);return a.ch.data[(b*2|0)+1|0];}
function CH(a,b,c){a.ch.data[b*2|0]=c;}
function G3(a,b,c){a.ch.data[(b*2|0)+1|0]=c;}
function Ek(a,b){return a.ch.data[b*2|0];}
function Gm(a,b){return a.ch.data[(b*2|0)+1|0];}
function KN(a,b){Mp(a,b);return a.ch.data[b*2|0];}
function Jf(a,b){return a.g5.data[b];}
function C8(a,b,c){a.g5.data[b]=c;}
function Mp(a,b){var c;if(!a.fm){c=new DK;U(c);J(c);}if(b>=0&&b<a.jo)return;c=new Bn;Bb(c,CL(b));J(c);}
function PL(a,b,c,d){a.fm=0;a.fJ=2;G4(a.ch,(-1));G4(a.fQ,(-1));if(b!==null)a.g_=b;if(c>=0){a.bI=c;a.k=d;}a.cC=a.bI;}
function M$(){R.call(this);this.oG=null;}
function ADy(a,b){return B0(b)!=2?0:1;}
function Ja(){R.call(this);this.oP=null;}
function V_(a,b){return B0(b)!=1?0:1;}
function My(){R.call(this);this.oq=null;}
function V2(a,b){return LV(b);}
function Mx(){R.call(this);this.n_=null;}
function Yh(a,b){return 0;}
function Pf(){R.call(this);this.pp=null;}
function Zh(a,b){return !B0(b)?0:1;}
function KJ(){R.call(this);this.o0=null;}
function ADA(a,b){return B0(b)!=9?0:1;}
function J3(){R.call(this);this.pK=null;}
function ABa(a,b){return ES(b);}
function LL(){R.call(this);this.oI=null;}
function ACf(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function I6(){R.call(this);this.nA=null;}
function AEg(a,b){a:{b:{switch(B0(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=ES(b);}return b;}
function I_(){R.call(this);this.o3=null;}
function Xz(a,b){a:{b:{switch(B0(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=ES(b);}return b;}
function JR(){R.call(this);this.pm=null;}
function ADI(a,b){a:{switch(B0(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function K6(){R.call(this);this.pA=null;}
function AAe(a,b){return GV(b);}
function K_(){R.call(this);this.os=null;}
function ABS(a,b){return La(b);}
function Nr(){R.call(this);this.o8=null;}
function ADo(a,b){return B0(b)!=3?0:1;}
function MQ(){R.call(this);this.nE=null;}
function AD8(a,b){a:{b:{switch(B0(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=ES(b);}return b;}
function Ji(){R.call(this);this.pW=null;}
function Xm(a,b){a:{b:{switch(B0(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=ES(b);}return b;}
function IG(){R.call(this);this.ho=0;}
function AGI(a){var b=new IG();Ty(b,a);return b;}
function Ty(a,b){Bc(a);a.ho=b;}
function ABc(a,b){return a.J^(a.ho!=B0(b&65535)?0:1);}
var Mr=F(IG);
function ACS(a,b){return a.J^(!(a.ho>>B0(b&65535)&1)?0:1);}
function Nj(){var a=this;C.call(a);a.oh=null;a.jJ=null;}
function We(a,b){var c,d;c=a.jJ;d=Ea(b);C5(c.mu,d);return 1;}
function Ow(){C.call(this);this.i7=null;}
function ABJ(a,b){var c,d,e,f;c=a.i7;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.j4;c=BT();e=new O;Q(e);H(H(e,B(472)),b);BL(c,P(e));b=BT();f=d.length;c=new O;Q(c);V(H(c,B(473)),f);BL(b,P(c));}
function Ox(){var a=this;C.call(a);a.mg=null;a.mh=null;}
function AAR(a,b){var c,d;c=a.mg;d=a.mh;b.arrayBuffer().then(Bh(c,"f"),Bh(d,"f"));}
function NV(){C.call(this);this.oi=null;}
function ZW(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
var Q5=F();
$rt_packages([-1,"org",0,"sudu",1,"experiments",2,"demo",3,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["bC",AG4(WH)],Mj,0,C,[],0,3,0,0,0,Jq,0,C,[],3,3,0,0,0,I2,0,C,[],3,3,0,0,0,OU,0,C,[Jq,I2],0,3,0,0,0,Rq,0,C,[],4,0,0,0,0,Rb,0,C,[],4,3,0,0,0,Cw,0,C,[],3,3,0,0,0,Cs,0,C,[],3,3,0,0,0,Gy,0,C,[],3,3,0,0,0,Bq,0,C,[Cw,Cs,Gy],0,3,0,0,["bC",AG4(WG)],EZ,0,C,[],0,3,0,0,0,DD,0,EZ,[],0,3,0,0,0,Ft,0,DD,[],0,3,0,0,0,Sm,0,Ft,[],0,3,0,0,0,CT,0,C,[Cw],1,3,0,0,0,D3,0,CT,[Cs],0,3,0,0,0,EQ,0,C,[Cw,Gy],0,0,0,0,["eW",AG5(G2),"bC",AG4(P)],FW,0,C,[],3,3,0,0,0,O,0,EQ,[FW],0,3,0,0,["hz",AG8(ZH),"gP",AG7(XG),
"bC",AG4(CG),"eW",AG5(ZK),"h0",AG6(Z1)],DR,0,Ft,[],0,3,0,0,0,Tz,0,DR,[],0,3,0,0,0,Sc,0,DR,[],0,3,0,0,0,C1,0,EZ,[],0,3,0,0,0,Bg,0,C1,[],0,3,0,0,0,Nq,0,C,[],3,3,0,0,0,Cf,0,C,[],3,3,0,0,0,KI,0,C,[],3,0,0,0,0,Gp,0,C,[Nq,Cf,KI],1,3,0,0,["gw",AG4(PO)],Me,0,Gp,[],0,3,0,0,0,QJ,0,C,[],0,3,0,0,0,Uy,0,C,[],4,3,0,0,0,Bp,0,C,[],3,3,0,0,0,Nv,0,C,[Bp],0,3,0,0,0,Bt,0,C,[],3,3,0,0,0,SO,0,C,[Bt],1,3,0,0,0,QN,0,C,[],3,3,0,0,0,Rm,0,C,[Bt],1,3,0,0,0,BX,0,C,[Bt],3,3,0,0,0,Nw,0,C,[BX],0,3,0,0,["W",AG5(Vf)],Nu,0,C,[BX],0,3,0,0,["W",
AG5(ADq)],T8,0,C,[],4,3,0,0,0,RZ,0,C,[],0,3,0,0,0,U$,0,C,[],4,3,0,0,0,JS,0,C,[BX],0,3,0,0,["W",AG5(ABM)],OA,0,C,[Bt],1,3,0,0,0,Im,0,C,[],0,3,0,0,0,G_,0,C,[Bt],3,3,0,0,0,R9,0,C,[G_],1,3,0,0,["vA",AG5(AEn),"u8",AG4(WU)],Sx,0,C,[Bt],1,3,0,0,0]);
$rt_metadata([IE,0,C,[],3,3,0,0,0,JW,0,C,[IE],0,3,0,0,0,Co,0,C,[Cs],0,3,0,0,0,IW,0,C,[Bt],3,3,0,0,0,MU,0,C,[IW],3,3,0,0,0,Dg,0,C,[Bt],3,3,0,0,0,Ux,0,C,[MU,Dg],3,3,0,0,0,F9,0,Bg,[],0,3,0,0,0,Qd,0,C,[BX],0,3,0,0,["W",AG5(AB7)],K5,0,C,[Dg],3,3,0,0,0,L8,0,C,[Dg],3,3,0,0,0,LZ,0,C,[Dg],3,3,0,0,0,No,0,C,[Dg],3,3,0,0,0,Pu,0,C,[Dg],3,3,0,0,0,N6,0,C,[Dg,K5,L8,LZ,No,Pu],3,3,0,0,0,Kw,0,C,[],3,3,0,0,0,QM,0,C,[Bt,N6,Kw,G_],1,3,0,0,["t_",AG6(ZX),"vF",AG6(AAb),"p9",AG5(V5),"te",AG7(AA6),"se",AG5(ADF),"sh",AG4(WX),"q$",AG7(VB)],Bn,
0,Bg,[],0,3,0,0,0,Fq,0,Bn,[],0,3,0,0,0,RI,0,C,[],0,3,0,0,0,Kv,0,C,[],3,3,0,0,0,M3,0,C,[Kv],0,3,0,0,0,EW,0,C,[],3,3,0,0,0,LB,0,C,[EW],0,3,0,0,0,BZ,0,C,[],3,3,0,0,0,R_,0,C,[BZ],0,3,0,0,0,L5,0,C,[Bt],3,3,0,0,0,Ot,0,C,[L5],0,3,0,0,["tg",AG5(Y5)],Oq,0,C,[BZ],0,3,0,0,0,GI,0,C,[],1,3,0,0,0,Lh,0,GI,[],0,3,0,0,0,Lw,0,C,[Bt],3,3,0,0,0,Or,0,C,[Lw],0,3,0,0,["m_",AG6(XR)],UC,0,C,[Bt],1,3,0,0,0,BP,0,C,[Bt],3,3,0,0,0,Oo,0,C,[BP],0,3,0,0,["bf",AG5(ABT)],HT,0,C,[],3,3,0,0,0,G$,0,C,[HT],1,3,0,0,0,DO,0,C,[],3,3,0,0,0,PJ,0,C,[HT],
3,3,0,0,0,Jp,0,C,[PJ],3,3,0,0,0,Rn,0,G$,[DO,Cw,Jp],0,3,0,0,0,Op,0,C,[BX],0,3,0,0,["W",AG5(ACI)],CE,0,C,[],3,3,0,0,["d7",AG5(ADr),"eK",AG5(Yx),"eV",AG8(Yr),"eD",AG7(Vc),"h6",AG5(ZU),"h3",AG6(AEG),"lo",AG4(XP),"kM",AG4(Xr),"gS",AG4(AAX)],RE,0,C,[],0,3,0,0,0,H0,0,C,[],1,3,0,0,0,On,0,H0,[],0,3,0,0,0,Ce,0,C,[Cf],1,3,0,0,0,MI,0,C,[IE],0,0,0,0,0,OX,0,C,[BP],0,3,0,0,["bf",AG5(ABt)]]);
$rt_metadata([OY,0,C,[BP],0,3,0,0,["bf",AG5(ABD)],OZ,0,C,[BP],0,3,0,0,["bf",AG5(AAo)],O0,0,C,[BP],0,3,0,0,["bf",AG5(ZY)],O1,0,C,[BP],0,3,0,0,["bf",AG5(AAf)],O2,0,C,[BP],0,3,0,0,["bf",AG5(AB2)],O3,0,C,[BP],0,3,0,0,["bf",AG5(YV)],O4,0,C,[BP],0,3,0,0,["bf",AG5(AEs)],O5,0,C,[BP],0,3,0,0,["bf",AG5(Yn)],O6,0,C,[BP],0,3,0,0,["bf",AG5(ACO)],P2,0,C,[BP],0,3,0,0,["bf",AG5(AD_)],P4,0,C,[BP],0,3,0,0,["bf",AG5(Z$)],P5,0,C,[BP],0,3,0,0,["bf",AG5(AAr)],P6,0,C,[BP],0,3,0,0,["bf",AG5(ABO)],PW,0,C,[BP],0,3,0,0,["bf",AG5(Y_)],PX,
0,C,[BP],0,3,0,0,["bf",AG5(ADO)],NF,0,C,[],3,3,0,0,0,NP,0,C,[NF],0,3,0,0,0,NO,0,C,[BP],0,3,0,0,["bf",AG5(ZA)],Qn,0,C,[],0,3,0,0,0,LA,0,C,[Cf],0,3,0,0,0,Bw,0,C,[],0,3,0,0,["bC",AG4(Vh)],Ud,0,C,[],0,3,0,0,0,Q_,0,C,[],3,3,0,0,0,Lv,0,C,[],0,3,0,0,0,If,0,C,[],0,3,0,0,0,C6,0,If,[],0,3,0,0,0,OJ,0,C6,[],0,3,0,0,0,Dx,0,C6,[],0,3,0,0,0,LO,0,C6,[],0,3,0,0,0,Oa,0,Dx,[],0,3,0,0,0,TE,0,Dx,[],0,3,0,0,0,Ro,0,Dx,[],0,3,0,0,0,MA,0,C,[Bt],3,3,0,0,0,U8,0,C,[MA],3,3,0,0,0,L7,0,C,[Cf],0,3,0,0,0,Lu,0,C,[],0,3,0,0,0,B7,0,C,[Cs,Cw],
1,3,0,0,0,E$,0,B7,[],12,3,0,G5,0,H7,0,C,[],4,3,0,0,0,IH,0,C,[],3,3,0,0,0,Nh,0,C,[IH],3,3,0,0,0,NX,0,C,[],3,3,0,0,0,ET,0,C,[Nh,NX],1,3,0,0,0,GS,0,ET,[],0,3,0,0,0,Sa,0,GS,[],0,3,0,0,0,EI,0,ET,[],1,3,0,0,0,H5,0,EI,[],0,3,0,0,["gs",AG7(Zu)],CW,0,B7,[],12,3,0,UN,0,CQ,0,C,[Cs],1,3,0,0,0,IL,0,CQ,[],0,3,0,0,0]);
$rt_metadata([Hx,0,C,[],32,0,0,QL,0,KW,0,C,[],0,3,0,0,0,Fc,0,B7,[],12,0,0,S$,0,EP,0,B7,[],12,0,0,M_,0,Ov,0,C1,[],0,3,0,0,0,BF,0,Bg,[],0,3,0,0,0,T7,0,BF,[],0,3,0,0,0,Sb,0,C,[Bt],4,3,0,0,0,IK,0,C,[Bt],3,3,0,0,0,M5,0,C,[IK],0,3,0,0,["W",AG5(AC8)],M6,0,C,[IK],0,3,0,0,["W",AG5(Xx)],St,0,C,[],4,3,0,0,0,QZ,0,C,[],0,3,0,0,0,Fi,0,C,[],1,3,0,0,0,MJ,0,C,[],3,3,0,0,0,HW,0,Fi,[Cs,FW,Gy,MJ],1,3,0,0,0,Hb,0,Fi,[Cs],1,3,0,0,0,FO,0,C,[],0,3,0,0,0,QP,0,Ce,[],0,3,0,0,["dp",AG5(VH),"cz",AG4(XZ),"dz",AG6(AEA)],Ju,0,Ce,[],0,3,0,0,
["dp",AG5(ADG),"cz",AG4(Z6),"dz",AG6(ABI)],KF,0,Ce,[],0,3,0,0,["cz",AG4(AEk),"dz",AG6(VE),"dp",AG5(Xq)],K1,0,Ce,[],0,3,0,0,["dp",AG5(ABN),"cz",AG4(VX),"dz",AG6(VV)],Ev,0,Ce,[],0,3,0,0,["dp",AG5(AD9),"cz",AG4(ZR),"dz",AG6(ACF)],LT,"SelectFileTest",3,Ev,[CE],0,3,0,0,["eK",AG5(Yx),"eV",AG8(Yr),"eD",AG7(Vc),"h6",AG5(ZU),"h3",AG6(AEG),"lo",AG4(XP),"kM",AG4(Xr),"gS",AG4(AAX),"d7",AG5(ABL)],UX,"WorkerTest",4,Ev,[],0,3,0,0,0,L6,0,Ce,[],0,3,0,0,["dp",AG5(Yt),"cz",AG4(Xi),"dz",AG6(V7)],SK,0,C,[Bt],1,3,0,0,0,Hh,0,HW,[],
1,0,0,0,0,Sw,0,Hh,[],0,0,0,0,0,HN,0,C,[],1,3,0,0,0,Ij,0,C,[],0,3,0,0,0,B1,0,C,[],0,3,0,0,0,Ef,0,C,[],3,3,0,0,0,Gq,0,C,[],0,3,0,0,0,Gr,0,Gq,[],0,3,0,0,0,Sy,0,C,[],0,3,0,0,0,Ns,0,C,[CE],0,0,0,0,["lo",AG4(XP),"kM",AG4(Xr),"eK",AG5(ABP),"eD",AG7(Y$),"eV",AG8(ADP),"d7",AG5(AA2),"h6",AG5(ADZ),"h3",AG6(Wa),"gS",AG4(ACA)],Ps,0,B1,[],0,3,0,0,0,QX,0,C,[],0,3,0,0,0,H4,0,C,[Bt],3,3,0,0,0,JC,0,C,[H4],0,3,0,0,["W",AG5(Yc)],JA,0,C,[H4],0,3,0,0,["W",AG5(AA5)],Jz,0,C,[BX],0,3,0,0,["W",AG5(ABz)],Jy,0,C,[BX],0,3,0,0,["W",AG5(W1)],LQ,
0,C,[CE],0,0,0,0,["d7",AG5(ADr),"h6",AG5(ZU),"h3",AG6(AEG),"lo",AG4(XP),"kM",AG4(Xr),"gS",AG4(AAX),"eD",AG7(VL),"eV",AG8(ACL),"eK",AG5(Wl)],SP,0,C,[],0,3,0,0,0,SQ,0,C,[Cf],0,3,0,0,0,Q8,0,C,[],3,3,0,0,0,T_,0,C,[],3,3,0,0,0,OV,0,C,[CE],0,0,0,0,["d7",AG5(ADr),"h6",AG5(ZU),"h3",AG6(AEG),"lo",AG4(XP),"kM",AG4(Xr),"gS",AG4(AAX),"eD",AG7(Xj),"eV",AG8(X0),"eK",AG5(XW)]]);
$rt_metadata([Mc,0,C,[Bp],0,3,0,0,["q",AG5(VU)],Mb,0,C,[Bp],0,3,0,0,["q",AG5(AEp)],Ma,0,C,[Bp],0,3,0,0,["q",AG5(XI)],L_,0,C,[Bp],0,3,0,0,["q",AG5(AA8)],Li,0,C,[CE],0,3,0,0,["eK",AG5(Yx),"eV",AG8(Yr),"eD",AG7(Vc),"h6",AG5(ZU),"h3",AG6(AEG),"lo",AG4(XP),"kM",AG4(Xr),"gS",AG4(AAX),"d7",AG5(Vs)],L$,0,C,[Bp],0,3,0,0,["q",AG5(AAp)],L9,0,C,[Bp],0,3,0,0,["q",AG5(ABV)],Ls,0,C,[],0,3,0,0,0,Sf,0,C,[Cf],0,3,0,0,0,L2,0,C,[CE],0,0,0,0,["kM",AG4(Z_),"gS",AG4(ADk),"eD",AG7(VA),"eV",AG8(ADw),"eK",AG5(AD7),"d7",AG5(AA_),"h6",
AG5(AB4),"h3",AG6(WC),"lo",AG4(ABu)],Fo,0,C,[],0,3,0,0,0,KL,0,Fo,[],0,3,0,0,0,Uj,0,C,[],0,3,0,0,0,IU,0,Fo,[],0,3,0,0,0,NH,0,C,[Bt],3,3,0,0,0,K$,0,C,[NH],0,3,0,0,["v0",AG5(ACH)],Nf,0,C,[Bp],0,3,0,0,0,UL,0,Hb,[],0,0,0,0,0,SY,0,C,[],0,3,0,0,0,GT,0,C,[Cf],0,3,0,0,["gw",AG4(TH)],ON,0,C,[Bp],0,3,0,0,["q",AG5(Wc)],Dd,0,C,[],3,0,0,0,0,OI,0,C,[],3,3,0,0,0,FE,0,C,[OI],3,3,0,0,0,DH,0,C,[FE],1,3,0,0,0,Je,0,C,[FE],3,3,0,0,0,Ez,0,DH,[Je],1,3,0,0,0,H6,0,C,[],3,3,0,0,0,Q2,0,Ez,[DO,Cw,H6],0,3,0,0,["lh",AG5(BW),"i4",AG4(ABh)],Oy,
0,C,[],0,0,0,0,0,Qf,0,C,[Bp],0,3,0,0,["q",AG5(ABX)],S_,0,C,[],0,3,0,0,0,HV,0,C,[],0,3,0,0,0,NI,0,C,[],0,3,0,0,0,DP,0,C,[Cf],0,0,0,0,0,FA,0,C,[],0,3,0,0,0,IZ,0,C,[],0,0,0,0,0,N4,0,C,[Bp],0,3,0,0,["q",AG5(Xk)],N3,0,C,[Bp],0,3,0,0,["q",AG5(ACs)],NR,0,C,[],3,3,0,0,0,N0,0,C,[BZ],0,3,0,0,["bG",AG4(Wu)],NZ,0,C,[BZ],0,3,0,0,["bG",AG4(ACq)],N2,0,C,[BZ],0,3,0,0,["bG",AG4(Y2)],N1,0,C,[BZ],0,3,0,0,["bG",AG4(AAw)],Ec,0,B7,[],12,3,0,Qz,0,Ts,0,C,[Bt],1,3,0,0,0,PV,0,C,[],0,3,0,0,0,UO,0,C,[],0,3,0,0,0,Ca,0,C,[],0,3,0,0,0,Hv,
0,C,[Cs],0,0,0,0,0]);
$rt_metadata([JU,0,C,[NR],0,3,0,0,0,P0,0,C,[BZ],0,3,0,0,["bG",AG4(ADp)],P1,0,C,[BZ],0,3,0,0,["bG",AG4(Xe)],PY,0,C,[BZ],0,3,0,0,["bG",AG4(Zp)],PZ,0,C,[BZ],0,3,0,0,["bG",AG4(ACE)],P9,0,C,[BZ],0,3,0,0,["bG",AG4(ACc)],P$,0,C,[BZ],0,3,0,0,["bG",AG4(AA4)],P7,0,C,[BZ],0,3,0,0,["bG",AG4(AEm)],P8,0,C,[BZ],0,3,0,0,["bG",AG4(Wd)],Hu,0,C,[],4,3,0,0,0,SW,0,C,[],4,3,0,0,0,B3,0,B7,[],12,3,0,KX,0,BK,0,C,[],0,3,0,0,0,JG,0,C,[],0,3,0,0,0,OE,0,C,[],3,3,0,0,0,M4,0,C,[OE],0,3,0,0,["bC",AG4(Xn)],NU,0,C,[],3,3,0,0,0,HU,0,C,[NU],0,
3,0,0,["bC",AG4(Zy)],D6,0,Bg,[],0,3,0,0,0,HL,0,HN,[],1,3,0,0,0,K9,0,HL,[],0,3,0,0,0,Gk,0,C1,[],0,3,0,0,0,KA,0,C,[],0,0,0,0,0,MG,0,C,[Cf],0,3,0,0,0,IX,0,C,[],3,3,0,0,0,IO,0,C,[IX,Cw],0,3,0,0,0,DZ,0,IO,[],0,0,0,0,0,UK,0,C,[],0,3,0,0,0,Ti,0,C,[],4,3,0,0,0,Gu,0,Bg,[],0,3,0,0,0,KC,0,C,[Bt],3,3,0,0,0,KT,0,C,[KC],0,3,0,0,["m_",AG6(Yv)],KD,0,C,[Bt],3,3,0,0,0,KR,0,C,[KD],0,3,0,0,["m_",AG6(Zc)],Rr,0,C,[],0,3,0,0,0,QE,0,C,[Bt],3,3,0,0,0,Cg,0,C,[Bt],1,3,0,0,0,Tn,0,Cg,[],1,3,0,0,0,TV,0,Cg,[],1,3,0,0,0,Ru,0,Cg,[],1,3,0,0,
0,RK,0,Cg,[],1,3,0,0,0,Ui,0,Cg,[],1,3,0,0,0,Jx,0,C,[Cf],0,3,0,0,0,R4,0,C,[],4,3,0,0,0,Ub,0,C,[],3,3,0,0,0,Pj,0,C,[Cf],0,3,0,0,0,OB,0,DH,[],0,0,0,0,0,Sp,0,Cg,[],1,3,0,0,0,Qh,0,Bg,[],0,3,0,0,0,Gn,0,C,[],3,3,0,0,0]);
$rt_metadata([Rl,0,C,[Gn],0,0,0,0,0,LI,0,C,[Bp],0,3,0,0,["q",AG5(ADE)],JJ,0,C,[Gn],0,0,0,0,0,QB,0,C,[],0,3,0,0,0,DU,0,Gk,[],0,3,0,0,0,US,0,DD,[],0,3,0,0,0,IC,0,CT,[Cs],0,3,0,0,0,Ej,0,C,[],0,0,0,0,0,Hi,0,C,[],4,3,0,0,0,Oj,0,C,[],0,3,0,0,0,Iv,0,C,[],1,3,0,0,0,NC,0,C,[],0,3,0,0,0,DK,0,Bg,[],0,3,0,0,0,TB,0,DD,[],0,3,0,0,0,KK,0,C,[FE],3,3,0,0,0,EO,0,DH,[KK],1,3,0,0,0,Ly,0,EO,[],0,0,0,0,0,Hz,0,Iv,[],1,3,0,0,0,Nm,0,Hz,[],0,3,0,0,0,Iq,0,Bg,[],0,3,0,0,0,Hf,0,CT,[Cs],0,3,0,0,0,H$,0,C,[],4,3,0,0,0,MD,0,CT,[Cs],0,3,0,0,
0,JO,0,C,[],0,3,0,0,0,Qp,0,C,[],0,3,0,0,0,Qk,0,C,[Gn],0,0,0,0,0,GB,0,D6,[],0,3,0,0,0,FV,0,Bg,[],0,3,0,0,0,Io,0,Bg,[],0,3,0,0,0,Qb,0,Bg,[],0,3,0,0,0,PE,0,C,[Bp],0,3,0,0,["q",AG5(Y9)],PH,0,C,[Bp],0,3,0,0,["q",AG5(AEd)],Oh,0,C,[Bp],0,3,0,0,0,Lx,0,Bg,[],0,3,0,0,0,Pv,0,Bg,[],0,3,0,0,0,Od,0,DU,[],0,3,0,0,0,Lq,0,DU,[],0,3,0,0,0,Uv,0,C,[],0,3,0,0,0,QR,0,C,[EW],0,3,0,0,0,JN,0,C,[Bp],0,3,0,0,["q",AG5(AC0)],KU,0,C,[Bp],0,3,0,0,["q",AG5(Ve)],GC,0,C,[],3,3,0,0,0,N_,0,C,[],0,3,0,0,0,PG,0,C,[BX],0,3,0,0,["W",AG5(ACD)],PF,
0,C,[BX],0,3,0,0,["W",AG5(Xy)],Pa,0,C,[BX],0,3,0,0,["W",AG5(YG)],O_,0,C,[BX],0,3,0,0,["W",AG5(Zb)],OM,0,C,[Bp],0,3,0,0,["q",AG5(Zd)],Ku,0,C,[Bp],0,3,0,0,["q",AG5(ABs)],Pz,0,C,[BP],0,3,0,0,["bf",AG5(Yz)]]);
$rt_metadata([M2,0,C,[],3,3,0,0,0,I$,0,C,[M2],0,3,0,0,0,Ol,0,C,[BZ],0,3,0,0,0,Om,0,C,[Bp],0,3,0,0,["q",AG5(ADS)],K0,0,C,[],3,3,0,0,0,Ok,0,C,[K0],0,3,0,0,0,PT,0,C,[Bp],0,3,0,0,["q",AG5(AAa)],PU,0,C,[Bp],0,3,0,0,["q",AG5(ADC)],K2,0,C,[Bp],0,3,0,0,0,Jl,0,C,[EW],0,3,0,0,0,S1,0,C,[],4,3,0,0,0,DT,0,C,[],4,3,0,AFi,0,O7,0,Bn,[],0,3,0,0,0,LG,0,C,[IH],3,3,0,0,0,JK,0,C,[LG],3,3,0,0,0,Fj,0,C,[JK],1,3,0,0,0,R3,0,Fj,[],0,3,0,0,0,MO,0,C,[],3,3,0,0,0,QO,0,C,[MO],0,3,0,0,0,Oz,0,C,[],3,3,0,0,0,MK,0,C,[Oz],0,3,0,0,0,JZ,0,C,[],
3,3,0,0,0,Kt,0,C,[JZ],3,3,0,0,0,SX,0,C,[Kt],0,3,0,0,0,CY,0,B7,[],12,3,0,WI,0,J2,0,C,[],3,3,0,0,0,Mt,0,CQ,[],0,3,0,0,0,Lm,0,CQ,[],0,3,0,0,0,ST,0,CQ,[],0,3,0,0,0,QW,0,C,[],0,3,0,0,0,Pg,0,C,[],3,3,0,0,0,Lr,0,C,[BX],0,3,0,0,["W",AG5(XJ)],IB,0,C,[Bt],3,3,0,0,0,I8,0,C,[IB],0,3,0,0,["oK",AG4(Zg)],IV,0,C,[IB],0,3,0,0,["oK",AG4(Vj)],Qw,0,C,[EW],0,3,0,0,0,Py,0,C,[],0,3,0,0,0,PD,0,C,[BX],0,3,0,0,["W",AG5(YS)],IM,0,EO,[DO,Cw],1,3,0,0,0,S7,0,C,[J2],0,0,0,0,0,ID,0,IM,[],0,0,0,0,0,JB,0,Ez,[H6],0,0,0,0,["lh",AG5(Vg),"i4",AG4(AA1)],HE,
0,Fj,[],1,3,0,0,0,LS,0,HE,[],0,3,0,0,0,LU,0,C,[Cw],4,3,0,0,0,Bo,0,C,[],1,0,0,0,["bq",AG7(FM),"br",AG8(FT),"eU",AG4(WB),"z",AG5(ADi),"bc",AG5(ADh),"dr",AG4(AD2),"cF",AG4(GH)],Cb,0,Bo,[],0,0,0,IJ,["a",AG7(V8),"s",AG5(Wq)],E6,0,C,[],0,0,0,0,0,Gv,0,BF,[],0,3,0,0,0,Po,0,C,[BX],0,3,0,0,["W",AG5(ABx)]]);
$rt_metadata([Ta,0,C,[Bt],3,3,0,0,0,NG,0,C,[BX],0,3,0,0,["W",AG5(ABj)],Mo,0,Cb,[],0,0,0,0,["a",AG7(VP),"s",AG5(ACm)],PN,0,Cb,[],0,0,0,0,["a",AG7(W$)],Lf,0,Cb,[],0,0,0,0,["a",AG7(WA)],M7,0,Cb,[],0,0,0,0,["a",AG7(VW),"s",AG5(ABr)],Eg,0,Cb,[],0,0,0,0,["a",AG7(ADz)],BG,0,Bo,[],1,0,0,0,["a",AG7(AEl),"bg",AG4(ACZ),"s",AG5(Zl)],Ur,0,BG,[],0,0,0,0,["R",AG6(ACG),"bq",AG7(X_),"br",AG8(W3),"s",AG5(VT)],BA,0,Bo,[],0,0,0,0,["a",AG7(YD),"z",AG5(ABm),"bc",AG5(ZS),"s",AG5(ABR),"cF",AG4(W0)],GA,0,BA,[],0,0,0,0,["a",AG7(AA$),
"s",AG5(AB9)],CO,0,GA,[],0,0,0,0,["a",AG7(Xv),"z",AG5(ABW)],I7,0,CO,[],0,0,0,0,["a",AG7(ABg),"s",AG5(ADm)],OF,0,CO,[],0,0,0,0,["a",AG7(Wm),"s",AG5(AC3)],LW,0,CO,[],0,0,0,0,["a",AG7(WY),"s",AG5(AED)],Nn,0,CO,[],0,0,0,0,["a",AG7(Vx),"s",AG5(ACh)],EY,0,BA,[],0,0,0,0,["a",AG7(VJ),"bq",AG7(Z3),"br",AG8(ACo),"bc",AG5(ZP),"dr",AG4(ABp),"cF",AG4(AD5)],E8,0,C,[],1,0,0,0,0,R,0,E8,[],1,0,0,0,["b6",AG4(Wo),"c5",AG4(V1),"ft",AG4(ACV),"em",AG4(AD1)],Rh,0,R,[],0,0,0,0,["g",AG5(Cl),"b6",AG4(Ci),"c5",AG4(X4),"ft",AG4(ADc),"bC",
AG4(AAD),"em",AG4(Ye)],GN,0,Bg,[],0,3,0,0,0,C0,0,Bo,[],1,0,0,0,["bc",AG5(ACr),"s",AG5(ADt),"cF",AG4(AAi)],Cm,0,C0,[],0,0,0,0,["a",AG7(Vz)],DY,0,Cm,[],0,0,0,0,["a",AG7(V$)],Cc,0,C0,[],0,0,0,0,["a",AG7(VI)],Dw,0,Cm,[],0,0,0,0,["a",AG7(Z9),"z",AG5(AEF)],OT,0,Cm,[],0,0,0,0,["a",AG7(AEe),"bq",AG7(AAA)],T,0,C,[],1,0,0,0,0,CF,0,BF,[],0,3,0,0,0,Jj,0,E8,[DO],0,0,0,0,["bC",AG4(AAI)],J9,0,Bo,[],0,0,0,0,["a",AG7(ZE),"s",AG5(ABl)],Pl,0,C,[DO,Cw],0,3,0,0,0,Jb,0,BA,[],0,0,0,0,0,Lz,0,BA,[],0,0,0,0,["a",AG7(V6),"z",AG5(AA7),
"s",AG5(WE),"bc",AG5(Wn)],CJ,0,BA,[],0,0,0,0,["a",AG7(XX),"g",AG5(Ym),"bc",AG5(V4),"z",AG5(ACR),"s",AG5(X7)],GK,0,CJ,[],0,0,0,0,["g",AG5(Zm)],Rc,0,BG,[],0,0,0,0,["R",AG6(ZF)],Da,0,BG,[],0,0,0,0,["R",AG6(IT),"bc",AG5(ABo)],Kx,0,BA,[],0,0,0,0,["z",AG5(Z8),"a",AG7(Vq),"bc",AG5(Wx),"s",AG5(ADd)],Dk,0,BG,[],0,0,0,0,["bg",AG4(Zt),"R",AG6(YM),"bq",AG7(XU),"br",AG8(Zx),"bc",AG5(ADa)],UT,0,BG,[],0,0,0,0,["R",AG6(Vk)],Qu,0,BG,[],0,0,0,0,["R",AG6(VD)],D2,0,BA,[],0,0,0,0,["z",AG5(AD4),"a",AG7(AA9),"bc",AG5(ZG),"s",AG5(ABY)],PC,
0,D2,[],0,0,0,0,0,Nt,0,D2,[],0,0,0,0,0,Qi,0,Cc,[],0,0,0,0,["a",AG7(Xd)],Lb,0,Cc,[],0,0,0,0,["a",AG7(AAt)],Et,0,Cc,[],0,0,0,0,["a",AG7(ACQ),"z",AG5(ADB)],KY,0,Et,[],0,0,0,0,["a",AG7(Zv),"z",AG5(AAK)],D1,0,Cc,[],0,0,0,0,["a",AG7(AEz)]]);
$rt_metadata([Js,0,D1,[],0,0,0,0,["a",AG7(Y0)],Mf,0,Cc,[],0,0,0,0,["a",AG7(AD$)],LD,0,Et,[],0,0,0,0,["a",AG7(WF)],N7,0,D1,[],0,0,0,0,["a",AG7(VY)],Mg,0,C0,[],0,0,0,0,["a",AG7(AEr),"bq",AG7(ACX)],Kb,0,C0,[],0,0,0,0,["a",AG7(ABq),"bq",AG7(Vu)],DF,0,C,[],1,0,0,0,0,Qj,0,Cm,[],0,0,0,0,["a",AG7(VZ)],OO,0,Dw,[],0,0,0,0,["a",AG7(AAs)],KO,0,DY,[],0,0,0,0,["a",AG7(ACt)],LC,0,Cm,[],0,0,0,0,["a",AG7(ABi)],NB,0,Dw,[],0,0,0,0,["a",AG7(V3)],LX,0,DY,[],0,0,0,0,["a",AG7(ACJ)],Hy,0,Bo,[],4,0,0,0,["a",AG7(ZQ),"s",AG5(Za)],RM,
0,Bo,[],0,0,0,0,["a",AG7(Wk),"s",AG5(Wt)],J_,0,Bo,[],0,0,0,0,["a",AG7(Zo),"s",AG5(AEw)],Pn,0,Bo,[],4,0,0,0,["a",AG7(ABK),"s",AG5(W6)],O9,0,Bo,[],0,0,0,0,["a",AG7(AA3),"s",AG5(Vi)],JD,0,Bo,[],0,0,0,0,["a",AG7(WZ),"s",AG5(Yy)],UG,0,BA,[],0,0,0,0,["a",AG7(AEb),"z",AG5(Wz),"eU",AG4(AAQ),"s",AG5(Wy)],Rg,0,BA,[],4,0,0,0,["a",AG7(AAW),"z",AG5(ACk),"eU",AG4(Vb),"s",AG5(AEi)],Uz,0,Bo,[],4,0,0,0,["a",AG7(ZI),"s",AG5(Ys)],S9,0,Bo,[],0,0,0,0,["a",AG7(AA0),"s",AG5(Yk)],Qr,0,Bo,[],0,0,0,0,["a",AG7(Y3),"s",AG5(W9)],Fl,0,BA,
[],0,0,0,0,["a",AG7(V0),"z",AG5(ABU),"s",AG5(AB$)],UD,0,Fl,[],0,0,0,0,["a",AG7(Xc),"bq",AG7(ADj),"br",AG8(VR),"bc",AG5(AAn)],Sn,0,Fl,[],0,0,0,0,["a",AG7(ZZ)],J8,0,EQ,[FW],0,3,0,0,["hz",AG8(Yf),"gP",AG7(Wp),"eW",AG5(WM),"h0",AG6(ACY)],Mi,0,BG,[],0,0,0,0,["R",AG6(Xt),"bq",AG7(Wf),"br",AG8(Yw),"bc",AG5(YT)],Qq,0,BG,[],0,0,0,0,["R",AG6(Z5)],Jw,0,BG,[],0,0,0,0,["R",AG6(ACw)],Fk,0,C,[],4,0,0,0,0,I0,0,BG,[],0,0,0,0,["R",AG6(ACC)],HS,0,BA,[],0,0,0,0,["z",AG5(ABe),"a",AG7(W7),"bq",AG7(YR),"br",AG8(XB),"bc",AG5(VN),"s",
AG5(AC5)],H2,0,BA,[],0,0,0,0,["z",AG5(WL),"a",AG7(Vy),"bq",AG7(ABv),"br",AG8(ACu),"bc",AG5(Xu),"s",AG5(ABB)],CS,0,BG,[],0,0,0,0,["R",AG6(AB_),"bq",AG7(AAE),"br",AG8(WK),"bc",AG5(AB1)],Oe,0,DF,[],0,0,0,0,["eL",AG5(WT),"lL",AG6(AB6)],Of,0,DF,[],0,0,0,0,["eL",AG5(ACK),"lL",AG6(ADX)],TT,0,C,[],0,0,0,0,0,QG,0,C,[],0,0,0,0,0,HP,0,T,[],0,0,0,0,["o",AG4(Ss)],Hd,0,T,[],0,0,0,0,["o",AG4(S2)],TN,0,T,[],0,0,0,0,["o",AG4(ACl)],Uc,0,T,[],0,0,0,0,["o",AG4(AC7)],Ue,0,T,[],0,0,0,0,["o",AG4(XY)],HM,0,T,[],0,0,0,0,["o",AG4(Rj)],H9,
0,HM,[],0,0,0,0,["o",AG4(R7)],U6,0,T,[],0,0,0,0,["o",AG4(YQ)],IR,0,H9,[],0,0,0,0,["o",AG4(Qo)],SG,0,IR,[],0,0,0,0,["o",AG4(AAj)]]);
$rt_metadata([SU,0,T,[],0,0,0,0,["o",AG4(Xo)],RG,0,T,[],0,0,0,0,["o",AG4(AAg)],Rs,0,T,[],0,0,0,0,["o",AG4(AD0)],Uh,0,T,[],0,0,0,0,["o",AG4(AAN)],Va,0,T,[],0,0,0,0,["o",AG4(Vr)],TU,0,T,[],0,0,0,0,["o",AG4(Y7)],TJ,0,T,[],0,0,0,0,["o",AG4(ACb)],Uu,0,T,[],0,0,0,0,["o",AG4(Xl)],QY,0,T,[],0,0,0,0,["o",AG4(XH)],QC,0,T,[],0,0,0,0,["o",AG4(ADV)],TW,0,T,[],0,0,0,0,["o",AG4(Vl)],T5,0,T,[],0,0,0,0,["o",AG4(ZJ)],R2,0,T,[],0,0,0,0,["o",AG4(XL)],SZ,0,T,[],0,0,0,0,["o",AG4(YA)],UW,0,T,[],0,0,0,0,["o",AG4(ZL)],T4,0,T,[],0,0,
0,0,["o",AG4(ADf)],Sl,0,T,[],0,0,0,0,["o",AG4(ABH)],R1,0,T,[],0,0,0,0,["o",AG4(AAF)],U9,0,T,[],0,0,0,0,["o",AG4(ACj)],GR,0,T,[],0,0,0,0,["o",AG4(SV)],Uw,0,GR,[],0,0,0,0,["o",AG4(AAx)],SJ,0,HP,[],0,0,0,0,["o",AG4(Wb)],RX,0,Hd,[],0,0,0,0,["o",AG4(YJ)],Rx,0,T,[],0,0,0,0,["o",AG4(ZV)],RS,0,T,[],0,0,0,0,["o",AG4(ADL)],SA,0,T,[],0,0,0,0,["o",AG4(Yi)],SH,0,T,[],0,0,0,0,["o",AG4(Vm)],RA,0,C,[],4,0,0,0,0,Ra,0,C,[],4,3,0,0,0,JE,0,C,[],0,3,0,0,0,TZ,0,C,[],0,3,0,0,0,Sj,0,C,[],4,3,0,0,0,Gx,0,C,[],3,3,0,0,0,J7,0,C,[Gx],0,
3,0,0,0,Ky,0,C,[Gx],0,3,0,0,["jn",AG5(Xp)],Mk,0,C,[Bp],0,3,0,0,["q",AG5(YB)],OS,0,R,[],0,0,0,0,["g",AG5(X2)],OQ,0,R,[],0,0,0,0,["g",AG5(VG)],Kg,0,R,[],0,0,0,0,["g",AG5(ZO),"bC",AG4(YC)],Km,0,R,[],0,0,0,0,["g",AG5(ACa)],Kk,0,R,[],0,0,0,0,["g",AG5(ACB)],Kl,0,R,[],0,0,0,0,["g",AG5(Z4)],Kp,0,R,[],0,0,0,0,["g",AG5(XK)],Kq,0,R,[],0,0,0,0,["g",AG5(Vd)],Kn,0,R,[],0,0,0,0,["g",AG5(YF)],Ko,0,R,[],0,0,0,0,["g",AG5(Z7)],Kr,0,R,[],0,0,0,0,["g",AG5(ADn)],Ks,0,R,[],0,0,0,0,["g",AG5(Xh)],Kf,0,R,[],0,0,0,0,["g",AG5(AEH)],KV,
0,R,[],0,0,0,0,["g",AG5(YI)]]);
$rt_metadata([Kd,0,R,[],0,0,0,0,["g",AG5(Xg)],Ke,0,R,[],0,0,0,0,["g",AG5(Yp)],Kj,0,R,[],0,0,0,0,["g",AG5(Zr)],Kc,0,R,[],0,0,0,0,["g",AG5(AC_)],Kh,0,R,[],0,0,0,0,["g",AG5(Wr)],Ki,0,R,[],0,0,0,0,["g",AG5(ABA)],Ir,0,C,[],3,3,0,0,0,MP,0,C,[Ir],4,3,0,0,0,J$,0,C,[Bp],0,3,0,0,["q",AG5(ACi)],PA,0,C,[Bp],0,3,0,0,["q",AG5(Vo)],HI,0,EI,[],0,3,0,0,["gs",AG7(X8)],Jn,0,EY,[],0,0,0,0,["bq",AG7(Yj),"br",AG8(AEy),"dr",AG4(W5)],MX,0,C,[Bp],0,3,0,0,0,MW,0,C,[Bp],0,3,0,0,0,Ob,0,C,[Ir],0,0,0,0,0,M$,0,R,[],0,0,0,0,["g",AG5(ADy)],Ja,
0,R,[],0,0,0,0,["g",AG5(V_)],My,0,R,[],0,0,0,0,["g",AG5(V2)],Mx,0,R,[],0,0,0,0,["g",AG5(Yh)],Pf,0,R,[],0,0,0,0,["g",AG5(Zh)],KJ,0,R,[],0,0,0,0,["g",AG5(ADA)],J3,0,R,[],0,0,0,0,["g",AG5(ABa)],LL,0,R,[],0,0,0,0,["g",AG5(ACf)],I6,0,R,[],0,0,0,0,["g",AG5(AEg)],I_,0,R,[],0,0,0,0,["g",AG5(Xz)],JR,0,R,[],0,0,0,0,["g",AG5(ADI)],K6,0,R,[],0,0,0,0,["g",AG5(AAe)],K_,0,R,[],0,0,0,0,["g",AG5(ABS)],Nr,0,R,[],0,0,0,0,["g",AG5(ADo)],MQ,0,R,[],0,0,0,0,["g",AG5(AD8)],Ji,0,R,[],0,0,0,0,["g",AG5(Xm)],IG,0,R,[],0,0,0,0,["g",AG5(ABc)],Mr,
0,IG,[],0,0,0,0,["g",AG5(ACS)],Nj,0,C,[Gx],0,3,0,0,["jn",AG5(We)],Ow,0,C,[BX],0,3,0,0,["W",AG5(ABJ)],Ox,0,C,[BX],0,3,0,0,["W",AG5(AAR)],NV,0,C,[BX],0,3,0,0,["W",AG5(ZW)],Q5,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.yW=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","url(","FATAL: WebGL is not enabled in the browser","[Graphics] GL version: ",
"WebGL 2","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = vTex;\n  gl_Position = pos;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","WebGraphics::ctor finish","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","String is null or empty","Illegal radix: ","null","false","true","","fonts/","JetBrains Mono","createScene: ","#WorkerTest","#test","#wasm","#oneTexture","#SelectFileTest","#manyTextures","Consolas","todo",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","dblclick","contextmenu","focus","blur","drop","paste","copy","cut"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = uTexTransform.xy + vTex * uTexTransform.zw;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","POS2_UV2","Either src or dest is null","Index out of bounds","POS2","vPos","TEX2","vTex","�","Replacement preconditions do not hold","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","[",", ","]","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative",
"Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in dst ","The last byte in src ","IGNORE","REPLACE","REPORT","pointer","text","ew-resize","ns-resize","Courier New","jsCanvas.setFont(11, CourierNew);","Segoe UI","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","scrollPos: ",", size: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",
", bytes = ","Action must be non-null","#A9B7C6","unClick b=","click b=",", count=","key up = ","key down = ",", keyCode = ",", isRepeated = ","menu","onCopy","copied","This is a "," text sample","focus lost","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile","Reparse","Open","A↑","A↓","Verdana","Set editor font to: ",", ascent+descent = ",", lineHeight = ",", caretHeight = ","topBase(font, lineHeight) = ",
"\n","File parsed in ","ms","parseBytesJava","trying to redefine texture size in setContent","#6897BB","#629755","(",")"," + ","-",",","{","}","  ",";","return","System","Arrays","InputStream","out","length","println","\"a string or text\"","textCanvas","getFont","37","\"ggg\"","public","static","class","extends","implements","interface","boolean","int","double","onMousePress","MouseEvent","event","press","void","clickCount","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D",
"prev = "," pixelLocation = ",", next = ","BIG_ENDIAN","LITTLE_ENDIAN","defaultText","keyword","field","#9876AA","string","#6A8759","comma","#CC7832","error","unused","#72737A","number","method","#FFC66D","showUsage","braceMatch","#FFEF28","#3B514D","comment","#808080","annotation","#BBB529","JsArrayView{ buffer.byteLength = "," }"," name: ","File is too large: ",", size = ","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ",
"this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","newAction must be non-null","showOpenFilePicker -> ","showDirectoryPicker -> ","opening file ","asyncParseFile","US-ASCII","ISO-8859-1","UTF-16","UTF-16BE","UTF-16LE","CONCURRENT","UNORDERED",
"IDENTITY_FINISH","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A",
"LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu",
"TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats",
"MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions",
"EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms",
"all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","file = ","file.content.length = "]);
Bq.prototype.toString=function(){return $rt_ustr(this);};
Bq.prototype.valueOf=Bq.prototype.toString;C.prototype.toString=function(){return $rt_ustr(WH(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
var Long_eq;var Long_ne;var Long_gt;var Long_ge;var Long_lt;var Long_le;var Long_compare;var Long_add;var Long_sub;var Long_inc;var Long_dec;var Long_mul;var Long_div;var Long_rem;var Long_udiv;var Long_urem;var Long_neg;var Long_and;var Long_or;var Long_xor;var Long_shl;var Long_shr;var Long_shru;var Long_not;if(typeof $rt_globals.BigInt!=='function'){Long_eq=function(a,b){return a.hi===b.hi&&a.lo===b.lo;};Long_ne=function(a,b){return a.hi!==b.hi||a.lo!==b.lo;};Long_gt=function(a,b){if(a.hi<b.hi){return false;}if
(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};Long_ge=function(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Long_lt=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Long_le=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y
=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Long_add=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi
=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_inc=function(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);};Long_dec=function(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);};Long_neg=function(a){return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));};Long_sub=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>
31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_compare=function(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo
>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_mul=function(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi
>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);};Long_div=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)
<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];};Long_udiv=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];};Long_rem=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];};Long_urem=function(a,
b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];};function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive
?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a){return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}Long_and=function(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);};Long_or=function(a,b){return new Long(a.lo
|b.lo,a.hi|b.hi);};Long_xor=function(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);};Long_shl=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}};Long_shr=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}};Long_shru=function(a,b){b&=63;if(b===
0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}};Long_not=function(a){return new Long(~a.hi,~a.lo);};function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>
16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi
=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|
0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a){var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -
n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=
b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)
+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}}else {Long_eq=function(a,b){return a===b;};Long_ne=function(a,b){return a!==b;};Long_gt=function(a,b){return a>b;};Long_ge
=function(a,b){return a>=b;};Long_lt=function(a,b){return a<b;};Long_le=function(a,b){return a<=b;};Long_add=function(a,b){return $rt_globals.BigInt.asIntN(64,a+b);};Long_inc=function(a){return $rt_globals.BigInt.asIntN(64,a+1);};Long_dec=function(a){return $rt_globals.BigInt.asIntN(64,a -1);};Long_neg=function(a){return $rt_globals.BigInt.asIntN(64, -a);};Long_sub=function(a,b){return $rt_globals.BigInt.asIntN(64,a -b);};Long_compare=function(a,b){return a<b? -1:a>b?1:0;};Long_mul=function(a,b){return $rt_globals.BigInt.asIntN(64,
a*b);};Long_div=function(a,b){return $rt_globals.BigInt.asIntN(64,a/b);};Long_udiv=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)/$rt_globals.BigInt.asUintN(64,b));};Long_rem=function(a,b){return $rt_globals.BigInt.asIntN(64,a%b);};Long_urem=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)%$rt_globals.BigInt.asUintN(64,b));};Long_and=function(a,b){return $rt_globals.BigInt.asIntN(64,a&b);};Long_or=function(a,b){return $rt_globals.BigInt.asIntN(64,
a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var BY=Long_add;var YZ=Long_sub;var Bz=Long_mul;var Cd=Long_div;var GM=Long_rem;var AFl
=Long_or;var Ck=Long_and;var AJn=Long_xor;var D$=Long_shl;var EU=Long_shr;var C3=Long_shru;var AFH=Long_compare;var EJ=Long_eq;var AJo=Long_ne;var RP=Long_lt;var FQ=Long_le;var RH=Long_gt;var RJ=Long_ge;var AJp=Long_not;var AFU=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(AFY);
main.javaException=$rt_javaException;
(function(){var c;c=Nw.prototype;c.f=c.W;c=Nu.prototype;c.f=c.W;c=JS.prototype;c.f=c.W;c=R9.prototype;c.getLength=c.u8;c.get=c.vA;c=Qd.prototype;c.f=c.W;c=QM.prototype;c.dispatchEvent=c.se;c.addEventListener=c.t_;c.removeEventListener=c.vF;c.getLength=c.sh;c.get=c.p9;c.addEventListener=c.q$;c.removeEventListener=c.te;c=Ot.prototype;c.onAnimationFrame=c.tg;c=Or.prototype;c.f=c.m_;c=Oo.prototype;c.handleEvent=c.bf;c=Op.prototype;c.f=c.W;c=OX.prototype;c.handleEvent=c.bf;c=OY.prototype;c.handleEvent=c.bf;c=OZ.prototype;c.handleEvent
=c.bf;c=O0.prototype;c.handleEvent=c.bf;c=O1.prototype;c.handleEvent=c.bf;c=O2.prototype;c.handleEvent=c.bf;c=O3.prototype;c.handleEvent=c.bf;c=O4.prototype;c.handleEvent=c.bf;c=O5.prototype;c.handleEvent=c.bf;c=O6.prototype;c.handleEvent=c.bf;c=P2.prototype;c.handleEvent=c.bf;c=P4.prototype;c.handleEvent=c.bf;c=P5.prototype;c.handleEvent=c.bf;c=P6.prototype;c.handleEvent=c.bf;c=PW.prototype;c.handleEvent=c.bf;c=PX.prototype;c.handleEvent=c.bf;c=NO.prototype;c.handleEvent=c.bf;c=M5.prototype;c.f=c.W;c=M6.prototype;c.f
=c.W;c=JC.prototype;c.f=c.W;c=JA.prototype;c.f=c.W;c=Jz.prototype;c.f=c.W;c=Jy.prototype;c.f=c.W;c=K$.prototype;c.accept=c.v0;c=KT.prototype;c.f=c.m_;c=KR.prototype;c.f=c.m_;c=PG.prototype;c.f=c.W;c=PF.prototype;c.f=c.W;c=Pa.prototype;c.f=c.W;c=O_.prototype;c.f=c.W;c=Pz.prototype;c.handleEvent=c.bf;c=Lr.prototype;c.f=c.W;c=I8.prototype;c.onTimer=c.oK;c=IV.prototype;c.onTimer=c.oK;c=PD.prototype;c.f=c.W;c=Po.prototype;c.f=c.W;c=NG.prototype;c.f=c.W;c=Ow.prototype;c.f=c.W;c=Ox.prototype;c.f=c.W;c=NV.prototype;c.f
=c.W;})();
})(this);
