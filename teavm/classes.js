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
{throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException
=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,
javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,
arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+
1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),
arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i
=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value)
{if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)
===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr
=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i
=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum
=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName
:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f){return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,
p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i)
{javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new $rt_globals.DataView(new $rt_globals.ArrayBuffer(8));var $rt_doubleToLongBits;var $rt_longBitsToDouble;if
(typeof $rt_globals.BigInt!=='function'){$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else {$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,
true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){var hi=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n>>$rt_globals.BigInt(32)));var lo=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n&$rt_globals.BigInt(0xFFFFFFFF)));$rt_numberConversionView.setInt32(0,lo,true);$rt_numberConversionView.setInt32(4,hi,true);return $rt_numberConversionView.getFloat64(0,
true);};}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,
JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){try {var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[defaultMessage];}catch(e){return "Exception occurred trying to extract Java exception message: "
+e;}}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj)
{var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta
?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val, -(val<0)|0);};Long_fromNumber=function(val){if
(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};Long_fromInt
=function(val){return $rt_globals.BigInt(val);};Long_fromNumber=function(val){return $rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh
=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};var $rt_ucmp=function(a,b){a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass)
{if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.fe=f;}
function $rt_cls(cls){return AAi(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FG(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bT.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AL0(t);}
function $rt_throwableCause(t){return AL8(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ARs());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ARt(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ARu());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BH=$rt_compare;var ARv=$rt_nullCheck;var E=$rt_cls;var R=$rt_createArray;var U6=$rt_isInstance;var ARw=$rt_nativeThread;var ARx=$rt_suspending;var ARy=$rt_resuming;var ARz=$rt_invalidPointer;var B=$rt_s;var Bo=$rt_eraseClinit;var Bb=$rt_imul;var D5=$rt_wrapException;var ARA=$rt_checkBounds;var ARB=$rt_checkUpperBound;var ARC=$rt_checkLowerBound;var ARD=$rt_wrapFunction0;var ARE=$rt_wrapFunction1;var ARF=$rt_wrapFunction2;var ARG=$rt_wrapFunction3;var ARH=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var Ze=$rt_createCharArrayFromData;var AQg=$rt_createByteArrayFromData;var ARI=$rt_createShortArrayFromData;var ES=$rt_createIntArrayFromData;var ARJ=$rt_createBooleanArrayFromData;var ARK=$rt_createFloatArrayFromData;var ARL=$rt_createDoubleArrayFromData;var AEA=$rt_createLongArrayFromData;var ARr=$rt_createBooleanArray;var EV=$rt_createByteArray;var ARM=$rt_createShortArray;var BL=$rt_createCharArray;var BF=$rt_createIntArray;var AQ7=$rt_createLongArray;var ACQ=$rt_createFloatArray;var ARN
=$rt_createDoubleArray;var BH=$rt_compare;var ARO=$rt_castToClass;var ARP=$rt_castToInterface;var ARQ=Long_toNumber;var Y=Long_fromInt;var ARR=Long_fromNumber;var B9=Long_create;var Ed=Long_ZERO;var ARS=Long_hi;var Er=Long_lo;
function C(){this.$id$=0;}
function ART(){var a=new C();ABp(a);return a;}
function ABp(a){}
function Cy(a){return AAi(a.constructor);}
function AI$(a,b){return a!==b?0:1;}
function AEh(a){var b,c,d,e,f,g,h,i,j;b=W7(a);if(!b)c=B(0);else{d=(((32-MM(b)|0)+4|0)-1|0)/4|0;e=BL(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=GT((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FG(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function W7(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AIA(a){var b,c,d;if(!U6(a,Eb)&&a.constructor.$meta.item===null){b=new UC;U(b);J(b);}b=AC1(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Qn(){var a=this;C.call(a);a.sY=0;a.pH=null;}
function AQt(b){var c,d,e,f,g,h,i,j,k,l;ABm();Xp();ZL();AAK();YB();AA6();Xb();ABs();AAH();ACy();YW();Xf();AAv();Z4();AAw();Zq();YH();X3();Y2();Y4();Xy();Zx();ACi();c=(XB()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))N4(B(2),B(3));else{d=new Qn;BI(d);e=new SL;e.rf=d;f=new Ml;c=new $rt_globals.Worker("teavm/worker.js");g=new MQ;g.n_=c;g.oa=e;g.ob=f;e=Bl(g,"f");c.onmessage=e;h=H(KX,[I6(B(4),B(5),400),I6(B(6),B(7),400),I6(B(8),B(5),700),I6(B(9),
B(7),700)]);b=R(KX,1);b.data[0]=AMV(B(10),EZ(B(11),B(12)),B(5),400);b=(KS(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.qP;f=c.pB;k=new M;O(k);BB(G(G(k,B(13)),f),41);k=N(k);f=c.pw;l=c.nS;f=AGy($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BI(d);c=new SM;c.r3=d;g=new SK;e.then(Bl(c,"f"),Bl(g,"f"));}}
function Zu(b){var c,d,e,f,g,h,i,j,k;c=new Rx;d=new QC;c.oV=new $rt_globals.TextDecoder("utf-16");e=new UB;e.nI=c;c.qs=e;e=new Ux;e.tc=c;c.lA=e;f=new Uy;f.qh=c;c.sa=new $rt_globals.ResizeObserver(Bl(f,"f"));e=new Uv;e.nj=c;c.mn=e;c.hL=1;f=new N2;f.vT=null;f.iY=ARU;c.lc=f;c.ph=b;f=new Uw;f.sj=c;e=Bl(f,"f");b.onmessage=e;e=Zp();b.postMessage(e);c.mh=(DV()).getElementById("canvasDiv");b=XB();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dn
=b;c.mh.appendChild(b);f=c.dn;e=AKp(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)N4(B(2),B(14));else{g=new Op;e=c.dn;f=c.lA;g.di=null;g.gJ=e;g.ce=AQD(f);h=$rt_globals.window;i=R(Dh,14);j=i.data;k=new Vk;k.mF=g;j[0]=CP(g,e,B(15),k);f=new Vl;f.qY=g;j[1]=CP(g,e,B(16),f);f=new Vm;f.ny=g;j[2]=CP(g,e,B(17),f);f=new Vn;f.s8=g;j[3]=CP(g,e,B(18),f);f=new Vo;f.p_=g;j[4]=CP(g,e,B(19),f);f=new Vp;f.m1=g;j[5]=CP(g,e,B(20),f);k=new Vq;k.tj=g;j[6]=CP(g,e,B(21),k);k=new Vr;k.qk=g;j[7]=CP(g,e,B(22),k);k=new Vs;k.m$
=g;j[8]=CP(g,e,B(23),k);k=new Vt;k.sr=g;j[9]=CP(g,e,B(24),k);k=new WD;k.rZ=g;j[10]=CP(g,e,B(25),k);k=new WE;k.ra=g;j[11]=AAq(g,h,B(26),k,1);k=new WF;k.l1=g;j[12]=CP(g,h,B(27),k);k=new WG;k.sI=g;j[13]=CP(g,h,B(28),k);g.vd=AN9(i);YQ(g,e);c.kP=g;c.fM=AP4(b,c.lA);AMz(c.sa,c.dn);e=$rt_globals.window;g=c.mn;e.addEventListener("resize",Bl(g,"handleEvent"));c.e2=ZH(d,YJ(c));R8(c);}AAX(c);}
var Mf=F(0);
var LJ=F(0);
function Vf(){var a=this;C.call(a);a.jI=null;a.fz=null;}
function AAi(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Vf;c.fz=b;d=c;b.classObject=d;}return c;}
function HB(a){if(a.jI===null)a.jI=$rt_str(a.fz.$meta.name);return a.jI;}
function Hs(a){return a.fz.$meta.primitive?1:0;}
function HH(a){return AAi(a.fz.$meta.item);}
var X6=F();
function Bl(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Kw(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var XT=F();
function AC1(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AAl(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AAl(d[e],c))return 1;e=e+1|0;}return 0;}
var C8=F(0);
var CH=F(0);
var Ig=F(0);
function Bv(){var a=this;C.call(a);a.bT=null;a.hl=0;}
var ARV=null;var ARW=null;var ARX=null;function Ez(){Ez=Bo(Bv);ANt();}
function AGV(){var a=new Bv();Xh(a);return a;}
function FG(a){var b=new Bv();G3(b,a);return b;}
function I4(a,b,c){var d=new Bv();WR(d,a,b,c);return d;}
function Xh(a){Ez();a.bT=ARV;}
function G3(a,b){var c,d,e,f;Ez();b=b.data;c=b.length;d=BL(c);e=d.data;a.bT=d;f=0;while(f<c){e[f]=b[f];f=f+1|0;}}
function WR(a,b,c,d){var e,f,g;Ez();e=BL(d);f=e.data;a.bT=e;g=0;while(g<d){f[g]=b.data[g+c|0];g=g+1|0;}}
function Ls(b){var c;Ez();c=AGV();c.bT=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.bT.data;if(b<c.length)return c[b];}d=new GR;U(d);J(d);}
function I(a){return a.bT.data.length;}
function E_(a){return a.bT.data.length?0:1;}
function OF(a,b,c,d,e){var f,g,h;if(b>=0&&b<=c&&c<=I(a)&&e>=0){d=d.data;if((e+(c-b|0)|0)<=d.length){while(b<c){f=e+1|0;g=b+1|0;d[e]=L(a,b);e=f;b=g;}return;}}h=new By;U(h);J(h);}
function Tg(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Ew(a,b){if(a===b)return 1;return Tg(a,b,0);}
function Gp(a,b,c){var d,e,f,g,h;d=W(0,c);if(b<65536){e=b&65535;while(true){f=a.bT.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=HD(b);h=H7(b);while(true){f=a.bT.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function FM(a,b,c){var d,e,f,g,h;d=X(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bT.data[d]==e)break;d=d+(-1)|0;}return d;}f=HD(b);g=H7(b);while(true){if(d<1)return (-1);h=a.bT.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Yv(a,b,c){var d,e,f;d=W(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function B7(a,b,c){var d,e;d=BH(b,c);if(d>0){e=new By;U(e);J(e);}if(!d){Ez();return ARW;}if(!b&&c==I(a))return a;return I4(a.bT,b,c-b|0);}
function Dr(a,b){return B7(a,b,I(a));}
function ON(a,b,c){return B7(a,b,c);}
function EZ(a,b){var c,d,e,f,g,h;if(E_(b))return a;if(E_(a))return b;c=BL(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Ls(c);}
function T6(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BB(d,L(a,f));}f=f+1|0;}G(d,Dr(a,f));return N(d);}
function QG(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return B7(a,b,c+1|0);}
function AEg(a){return a;}
function Gg(a){var b,c,d,e,f;b=a.bT.data;c=BL(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Ct(b){Ez();return b===null?B(29):b.co();}
function Dd(b){var c;Ez();c=new M;O(c);return N(S(c,b));}
function Bt(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function Ku(a){var b,c,d,e;a:{if(!a.hl){b=a.bT.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hl=(31*a.hl|0)+e|0;d=d+1|0;}}}return a.hl;}
function K7(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gm;Bj(b,B(30));J(b);}ARY=1;d=new PN;d.ju=R(CM,10);d.fT=(-1);d.ed=(-1);d.br=(-1);e=new Gr;e.ea=1;e.bE=b;e.Y=BL(I(b)+2|0);D6(Gg(b),0,e.Y,0,I(b));f=e.Y.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.qa=g;e.fC=0;EO(e);EO(e);d.f=e;d.c_=0;d.kr=WB(d,(-1),0,null);if(!C9(d.f)){b=new H$;h=d.f;ID(b,B(31),h.bE,h.cV);J(b);}if(d.mH)d.kr.dO();b=Ck();h=new Rf;h.hJ=(-1);h.jQ=(-1);h.uh=d;h.r8=d.kr;h.h1=a;h.hJ=0;g=I(a);h.jQ=g;e=new T8;i=h.hJ;j=d.fT;k=d.ed+1|0;l=d.br+1|0;e.g7
=(-1);m=j+1|0;e.nt=m;e.dm=BF(m*2|0);f=BF(l);e.iT=f;G_(f,(-1));if(k>0)e.kf=BF(k);G_(e.dm,(-1));Wu(e,a,i,g);h.cn=e;e.eP=1;n=0;m=0;if(!I(a)){f=R(Bv,1);f.data[0]=B(31);}else{while(true){l=I(h.h1);if(!Xe(h.cn))l=h.jQ;e=h.cn;if(e.dL>=0&&YU(e)==1){e=h.cn;e.dL=Ir(e);if(Ir(h.cn)==AAJ(h.cn)){e=h.cn;e.dL=e.dL+1|0;}g=h.cn.dL;g=g<=l&&LT(h,g)?1:0;}else g=LT(h,h.hJ);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BW(b,ON(a,m,AB5(h)));m=YE(h);n=g;}a:{BW(b,ON(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Bs(b,g)))break a;Ec(b,
g);}}if(g<0)g=0;f=Hm(b,R(Bv,g));}return f;}
function AGr(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=X(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function ANt(){ARV=BL(0);ARW=AGV();ARX=new RJ;}
function Gi(){var a=this;C.call(a);a.g2=null;a.ke=null;a.iu=0;a.i0=0;}
function ARZ(){var a=new Gi();U(a);return a;}
function AR0(a){var b=new Gi();Bj(b,a);return b;}
function U(a){a.iu=1;a.i0=1;}
function Bj(a,b){a.iu=1;a.i0=1;a.g2=b;}
function AGg(a){return a;}
function AL0(a){return a.g2;}
function AL8(a){var b;b=a.ke;if(b===a)b=null;return b;}
var Eu=F(Gi);
var GV=F(Eu);
var Y8=F(GV);
var DH=F();
function E3(){DH.call(this);this.fb=0;}
var AR1=null;var AR2=null;function ABG(a){var b=new E3();Jc(b,a);return b;}
function Jc(a,b){a.fb=b;}
function IS(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new C5;Bj(b,B(32));J(b);}d=I(b);if(0==d){b=new C5;Bj(b,B(33));J(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new C5;U(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=NV(L(b,f));if(i<0){j=new C5;k=B7(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bj(j,N(b));J(j);}if(i>=c){j=new C5;l=B7(b,0,d);b=new M;O(b);G(G(S(G(b,B(35)),c),B(36)),l);Bj(j,N(b));J(j);}g=Bb(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new C5;k=B7(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bj(j,N(b));J(j);}b=new C5;j=new M;O(j);S(G(j,B(38)),c);Bj(b,N(j));J(b);}
function FL(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AR2===null){AR2=R(E3,256);c=0;while(true){d=AR2.data;if(c>=d.length)break a;d[c]=ABG(c-128|0);c=c+1|0;}}}return AR2.data[b+128|0];}return ABG(b);}
function Le(a){var b;b=a.fb;return (MA(ARe(20),b,10)).co();}
function MM(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function HP(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Jr(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function AIv(a,b){b=b;return BH(a.fb,b.fb);}
function ABm(){AR1=E($rt_intcls());}
function F5(){var a=this;C.call(a);a.B=null;a.N=0;}
function AR3(){var a=new F5();O(a);return a;}
function ARe(a){var b=new F5();FJ(b,a);return b;}
function O(a){FJ(a,16);}
function FJ(a,b){a.B=BL(b);}
function MA(a,b,c){return Zk(a,a.N,b,c);}
function Zk(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)B$(a,b,b+1|0);else{B$(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=GT(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bb(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;B$(a,b,b+i|0);if(e)e=b;else{f=a.B.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.B.data;b=e+1|0;f[e]=GT($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function Z$(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BH(c,0.0);if(!d){B$(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){B$(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){B$(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B$(a,b,b+8|0);d=b;}else{B$(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AR4;Z5(c,f);d=f.jV;g=f.jC;h=f.mW;i=1;j=1;if(h)j=2;k=9;l=AM0(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=W(k,i+1|0);g=0;}else{d=d/AR5.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;B$(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.B.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.B.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.B.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function Yn(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BH(c,0.0);if(!d){B$(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){B$(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){B$(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B$(a,b,b+8|0);d=b;}else{B$(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AR6;Zn(c,f);g=f.kt;h=f.jo;i=f.mA;j=1;k=1;if(i)k=2;l=18;m=AKP(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=W(l,j+1|0);h=0;}else{g=De(g,AR7.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;B$(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.B.data;k=b+1|0;e[b]=45;}n=B9(1569325056, 23283064);o=0;while(o<l){if(OE(n,Ed))d=0;else{d=Er(De(g,n));g=L1(g,
n);}e=a.B.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=De(n,Y(10));o=o+1|0;}if(h){e=a.B.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function AM0(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AKP(b){var c,d,e,f,g;c=Y(1);d=0;e=16;f=AR8.data;g=f.length-1|0;while(g>=0){if(EY(L1(b,BN(c,f[g])),Ed)){d=d|e;c=BN(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BB(a,b){return a.ll(a.N,b);}
function Wg(a,b,c){B$(a,b,b+1|0);a.B.data[b]=c;return a;}
function IV(a,b){var c,d;c=a.B.data.length;if(c>=b)return;d=c>=1073741823?2147483647:W(b,W(c*2|0,5));a.B=Xx(a.B,d);}
function N(a){return I4(a.B,0,a.N);}
function V0(a,b,c,d){return a.kO(a.N,b,c,d);}
function L_(a,b,c,d,e){var f,g,h,i;B$(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function HR(a,b){return a.j2(b,0,b.data.length);}
function B$(a,b,c){var d,e,f,g;d=a.N;e=d-b|0;a.he((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.B.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.N=a.N+(c-b|0)|0;}
var Hv=F(0);
var M=F(F5);
function KZ(){var a=new M();AOf(a);return a;}
function AOf(a){O(a);}
function G(a,b){var c;c=a.N;if(b===null)b=B(29);Lt(a,c,b);return a;}
function BX(a,b){Lt(a,a.N,b);return a;}
function S(a,b){MA(a,b,10);return a;}
function Ht(a,b){var c,d,e,f,g,h,i,j;c=a.N;d=1;if(AFO(b,Ed)){d=0;b=AQp(b);}a:{if(Kq(b,Y(10))<0){if(d)B$(a,c,c+1|0);else{B$(a,c,c+2|0);e=a.B.data;f=c+1|0;e[c]=45;c=f;}a.B.data[c]=GT(Er(b),10);}else{g=1;h=Y(1);i=Fs(Y(-1),Y(10));b:{while(true){j=BN(h,Y(10));if(Kq(j,b)>0){j=h;break b;}g=g+1|0;if(Kq(j,i)>0)break;h=j;}}if(!d)g=g+1|0;B$(a,c,c+g|0);if(d)f=c;else{e=a.B.data;f=c+1|0;e[c]=45;}while(true){if(EY(j,Ed))break a;e=a.B.data;c=f+1|0;e[f]=GT(Er((Fs(b,j))),10);b=My(b,j);j=Fs(j,Y(10));f=c;}}}return a;}
function E6(a,b){Z$(a,a.N,b);return a;}
function W_(a,b){BB(a,b);return a;}
function FQ(a,b){Lt(a,a.N,!b?B(39):B(40));return a;}
function ABW(a,b,c){var d,e,f,g,h,i;d=BH(b,c);if(d<=0){e=a.N;if(b<=e){if(d){f=e-c|0;a.N=e-(c-b|0)|0;g=0;while(g<f){h=a.B.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new GR;U(i);J(i);}
function U5(a,b){var c,d,e,f;if(b>=0){c=a.N;if(b<c){c=c-1|0;a.N=c;while(b<c){d=a.B.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new GR;U(f);J(f);}
function AIq(a,b,c,d,e){L_(a,b,c,d,e);return a;}
function AFB(a,b,c,d){V0(a,b,c,d);return a;}
function XJ(a){return a.N;}
function DE(a){return N(a);}
function AIy(a,b){IV(a,b);}
function AIX(a,b,c){Wg(a,b,c);return a;}
function Lt(a,b,c){var d,e,f;if(b>=0&&b<=a.N){a:{if(c===null)c=B(29);else if(E_(c))break a;IV(a,a.N+I(c)|0);d=a.N-1|0;while(d>=b){a.B.data[d+I(c)|0]=a.B.data[d];d=d+(-1)|0;}a.N=a.N+I(c)|0;d=0;while(d<I(c)){e=a.B.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new GR;U(c);J(c);}
var Ef=F(GV);
var AAp=F(Ef);
function AR9(a){var b=new AAp();AEs(b,a);return b;}
function AEs(a,b){Bj(a,b);}
var YZ=F(Ef);
function AR$(a){var b=new YZ();AEO(b,a);return b;}
function AEO(a,b){Bj(a,b);}
var DO=F(Gi);
function AR_(){var a=new DO();AAG(a);return a;}
function AAG(a){U(a);}
var Bm=F(DO);
function ARt(a){var b=new Bm();ANT(b,a);return b;}
function ANT(a,b){Bj(a,b);}
var Sy=F(0);
var Dh=F(0);
function AN9(b){var c;c=new O9;c.uv=b;return c;}
function CJ(b,c){if(b!==null)b.gx();return c;}
var NQ=F(0);
function H2(){var a=this;C.call(a);a.k1=0;a.kc=0;}
var ASa=0;function FB(a){ASa=ASa-1|0;}
function FN(a,b,c){Iz(a,Yg(b,c,400,0));}
function PH(a,b){return JX(a,b,0.875);}
function JX(a,b,c){return Ee(a,b)+c|0;}
function P_(){var a=this;H2.call(a);a.i3=null;a.bn=null;a.l7=null;}
function Ek(a){var b,c,d;b=a.bn;c=a.k1;d=a.kc;b.clearRect(0.0,0.0,c,d);}
function QY(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bn;d="center";c.textAlign=d;break a;case 2:c=a.bn;d="right";c.textAlign=d;break a;default:break a;}d=a.bn;c="left";d.textAlign=c;}}
function CB(a,b){Iz(a,b.mq);}
function Iz(a,b){var c;if(!(a.l7==b?1:0)){c=a.bn;a.l7=b;c.font=b;}}
function Yg(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Ce(a,b,c,d){var e,f,g;e=a.bn;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function AAE(a,b){var c,d;if(!b){c=a.bn;d="alphabetic";c.textBaseline=d;}else{d=a.bn;c="top";d.textBaseline=c;}}
function Ee(a,b){var c;c=$rt_ustr(b);return a.bn.measureText(c).width;}
function KD(a,b,c,d){var e,f;e=a.bn;f=$rt_ustr(FG(Ze([35,Gn(b/16|0),Gn(b%16|0),Gn(c/16|0),Gn(c%16|0),Gn(d/16|0),Gn(d%16|0)])));e.fillStyle=f;}
var Xq=F();
var ABC=F();
function D$(b,c){if(b===c)return 1;return b!==null?b.ew(c):c!==null?0:1;}
function BI(b){if(b!==null)return b;b=new Gm;Bj(b,B(31));J(b);}
var Ba=F(0);
function SL(){C.call(this);this.rf=null;}
var BC=F(0);
var ZG=F();
var Xu=F(0);
function I6(b,c,d){return AMV(B(41),EZ(B(11),b),c,d);}
var ABc=F(0);
var AA9=F(0);
function KS(b,c){var d,e,f,g;d=c.data;e=b.data.length;f=d.length;g=C$(b,e+f|0);D6(c,0,g,e,f);return g;}
function J$(b,c,d){D6(b,c,d,0,d.data.length);return d;}
function PV(b,c,d){var e;if(c>0)D6(b,0,d,0,c);e=d.data.length;if(c<e)D6(b,c+1|0,d,c,e-c|0);return d;}
function Y3(b,c,d,e){var f;if(c>0)D6(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)D6(b,d,e,c,f-d|0);}return e;}
function GU(b){var c;c=new UT;c.h$=b;return c;}
function KX(){var a=this;C.call(a);a.qP=null;a.pB=null;a.pw=null;a.nS=0;}
function AMV(a,b,c,d){var e=new KX();ALQ(e,a,b,c,d);return e;}
function ALQ(a,b,c,d,e){a.qP=b;a.pB=c;a.pw=d;a.nS=e;}
var X4=F();
function AGy(b,c){return {style:b,weight:c};}
var BU=F(0);
function SM(){C.call(this);this.r3=null;}
function ACC(a,b){var c,d,e;c=a.r3;d=0;while(d<b.length){e=b[d];(DV()).fonts.add(e);d=d+1|0;}c.sY=1;b=c.pH;if(b!==null)Zu(b);}
var SK=F();
function ANC(a,b){$rt_globals.console.info("font load error "+b);}
var AA5=F();
var YF=F();
function N4(b,c){var d,e,f;d=(DV()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(DV()).getElementById($rt_ustr(b)).appendChild(d);}
function XB(){return (DV()).createElement("canvas");}
function AKp(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ACv=F();
var Ml=F();
function AJ_(a,b){var c;c=new Bm;Bj(c,$rt_str(b.message));J(c);}
var UV=F();
function Fm(b){return $rt_str(b);}
var XF=F();
function Xx(b,c){var d,e,f,g;b=b.data;d=BL(c);e=d.data;f=X(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ABR(b,c){var d,e,f,g;b=b.data;d=EV(c);e=d.data;f=X(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ACe(b,c){var d,e,f,g;b=b.data;d=BF(c);e=d.data;f=X(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C$(b,c){var d,e,f,g;d=b.data;e=Tz(HH(Cy(b)),c);f=X(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Ye(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BX(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(43));G(c,e[d]);d=d+1|0;}BX(c,B(44));return N(c);}
function AAD(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BX(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(43));S(c,e[d]);d=d+1|0;}BX(c,B(44));return N(c);}
function AMn(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BX(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(43));E6(c,e[d]);d=d+1|0;}BX(c,B(44));return N(c);}
function AOY(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);BX(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(43));f=e[d];Yn(c,c.N,f);d=d+1|0;}BX(c,B(44));return N(c);}
function G_(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BA;U(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function YC(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=ARU;e=R(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=X(j,h+f|0);l=h+(2*f|0)|0;m=X(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.ls(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function Z_(b,c){return SU(b,0,b.data.length,c);}
function SU(b,c,d,e){var f,g,h,i,j;f=BH(c,d);if(f>0){g=new BA;U(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var Kz=F();
var ASb=null;var ASc=null;function Bx(){if(ASb===null)ASb=AJG(ASd,0);return ASb;}
function KR(){if(ASc===null)ASc=AJG(ASe,0);return ASc;}
function D6(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=AAF(b)&&(e+f|0)<=AAF(d)){a:{b:{if(b!==d){g=HH(Cy(b));h=HH(Cy(d));if(g!==null&&h!==null){if(g===h)break b;if(!Hs(g)&&!Hs(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fz;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AAl(n.constructor,o)?1:0)){Qy(b,c,d,e,j);b=new H8;U(b);J(b);}j=j+1|0;k=m;}Qy(b,c,d,e,f);return;}if(!Hs(g))break a;if(Hs(h))break b;else break a;}b=new H8;U(b);J(b);}}Qy(b,c,
d,e,f);return;}b=new H8;U(b);J(b);}b=new By;U(b);J(b);}d=new Gm;Bj(d,B(45));J(d);}
function Qy(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Fq(){return Long_fromNumber(new Date().getTime());}
function AAL(){return ARR($rt_globals.performance.now()*1000000.0);}
var I5=F(0);
var YT=F();
function AOH(a,b){return a.ud(b);}
function AED(a){return a.vF();}
var Zi=F();
var FA=F(0);
var RJ=F();
var CZ=F();
var ASf=null;var ASg=null;var ASh=null;var ASi=null;var ASj=null;var ASk=null;var ASl=null;var ASm=null;var ASn=null;var ASo=null;function VQ(b){var c,d;c=new Bv;d=BL(1);d.data[0]=b;G3(c,d);return c;}
function Lb(b){return b>=65536&&b<=1114111?1:0;}
function CC(b){return (b&64512)!=55296?0:1;}
function CX(b){return (b&64512)!=56320?0:1;}
function Lg(b){return !CC(b)&&!CX(b)?0:1;}
function G2(b,c){return CC(b)&&CX(c)?1:0;}
function Eh(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function HD(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function H7(b){return (56320|b&1023)&65535;}
function EI(b){return Gl(b)&65535;}
function Gl(b){if(ASi===null){if(ASl===null)ASl=AAC();ASi=Y6((ASl.value!==null?$rt_str(ASl.value):null));}return Rn(ASi,b);}
function El(b){return Gk(b)&65535;}
function Gk(b){if(ASh===null){if(ASm===null)ASm=ABn();ASh=Y6((ASm.value!==null?$rt_str(ASm.value):null));}return Rn(ASh,b);}
function Rn(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BH(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function TH(b,c){if(c>=2&&c<=36){b=NV(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function NV(b){var c,d,e,f,g,h,i,j,k,l;if(ASg===null){if(ASn===null)ASn=Y$();c=(ASn.value!==null?$rt_str(ASn.value):null);d=AL9(Gg(c));e=I3(d);f=BF(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Mg(d)|0;j=j+Mg(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}ASg=f;}g=ASg.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BH(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function GT(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gd(b){var c;if(b<65536){c=BL(1);c.data[0]=b&65535;return c;}return Ze([HD(b),H7(b)]);}
function Co(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Lg(b&65535))return 19;if(ASj===null){if(ASo===null)ASo=ACm();d=(ASo.value!==null?$rt_str(ASo.value):null);e=R(Mu,16384);f=e.data;g=EV(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=JQ(L(d,l));if(m==64){l=l+1|0;m=JQ(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bb(c,JQ(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=JQ(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AGn(k,k+i|0,ABR(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AGn(k,k+i|0,ABR(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}ASj=C$(e,j);}e=ASj.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.pW)o=p+1|0;else{c=d.n9;if(b>=c)return d.om.data[b-c|0];c=p-1|0;}}return 0;}
function IP(b){a:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function F_(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Co(b)!=16?0:1;}
function Or(b){switch(Co(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function PO(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Or(b);}return 1;}
function Xp(){ASf=E($rt_charcls());ASk=R(CZ,128);}
function AAC(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ABn(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function Y$(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ACm(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91Y$FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,A&F9<F\' Q#A\'G)FJ%G91GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F#"
+" F#A#\' I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A(G#)A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A#\'&G$I% G$ G%A(G# F$A#&A#F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A\'F# F#G#A#J+ F#)A-G#I#F* F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\' \'I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G( J+A#F%AA&^$Y0=9^$G#^\'J+"
+"L+=\'=\'=\'6767I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F3G$)A*F4G#)Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1\'J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(G1ARG%)FP\')G&)\'I&\'I#F)A$J+Y(^+G*^*Y# G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%"
+"FEI)G)I#G#A$Y&J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFGb!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[BA0G."
+"H%\'H$G-A0^#!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^A b=J! BQCQ!#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y"
+"&%Y+U#Y%596Y.^#Y$676767675AC^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+FA^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b `G!&^b&b   %b `(!F7%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#!#!#B%#!#A&!# # #!#!#A9E$!#&E##F(\'F"
+"$\'F%\'F8I#G#)^%\'A$L\'^#;=A\'FUY%A)I#FSI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C*%]#A%b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]2A1b&L& 76^1FbA#FWA(=AAF-;^$G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#"
+"F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^.A$=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9B, B0 B( B# C, C0 C( C#Aeb&X% A*F7A+F)A9E\' EK E*AgF\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@ FK G#5A#F#AmG$F>L+&A)F7G,L%Y&A7F3G%Y%AGF6L(A5F8A*)\')FVG0Y(A%L5J+\'F#G#&A*G$)FNI$G%I#G#Y#1Y%\'A+1A#F:A(J+"
+"A\'G$FEG&)G) J+Y%&I#&A)FD\'Y#&A*G#)FQI$G*I#F%Y%G%9)\'J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'F#\'A`F( & F% F0 F+9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+Y# 9\'F$A?FQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&9A\'J+AWF<A#G$I#G%)G&A%J+L#Y$=F(b Z# FMI$G*)G#9b E! BACAJ+L*A-F)A#&A#F) F# F9I\' I#A#G#)\'&)&)\'Y$A*J+AhF)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A.FkA(Y+b W$ F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF("
+" F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#A(G#&)F. FCI#G&A$I#\')\'Y.J+b 7! &A0L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b -J b&B! Y#A.b&Q1 Q1\'F\'G0b K` b&(* b Z\'#b&Z) A(F@ J+A%Y#Fq J+A\'F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%\'A,I#A/&b W@!&A)b&74 AK&A(&b H,#E% E( E# b&D% A0&A>F$A#&A/F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =*!GOA#G8A*b=U! A^b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^_A6^dG$=b [! L5A-L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) "
+"B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 12 C+&C5A\'C\'b 6$ G( G2A#G( G# G&A&E`AB\'b Q! FNA$G(E(A#J+A%&=b  & F?\'A2FMG%J+A&;b 1( F<%G%J+b G, F( F% F# F0 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN=L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.b=B# AY^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=9, A%^2A$^.A$b=X! A%b=@! A\'^-A%=A0^-A%^YA)^+A\'^IA)^?A#^#Apb=5& A"
+"-^/A#^.A$^*A(^O ^(A)^/A%^*A(^*A(b=4#  ^XAFJ+b \'1 &b   %b   %b ?<#&AA&b Y !&A\'&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b C8 &b *.!&A&&b ?!!&b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b 2R!1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
var LD=F(0);
var Rm=F(0);
var D7=F(0);
var ABB=F(0);
function DV(){return $rt_globals.window.document;}
var Gm=F(Bm);
function MQ(){var a=this;C.call(a);a.n_=null;a.oa=null;a.ob=null;}
function ALa(a,b){var c,d,e;c=a.n_;d=a.oa;e=a.ob;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=d.rf;b.pH=c;if(b.sY)Zu(c);}}
var Z9=F();
function AAF(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(ASp());}return b.data.length;}
function Tz(b,c){if(b===null){b=new Gm;U(b);J(b);}if(b===E($rt_voidcls())){b=new BA;U(b);J(b);}if(c>=0)return ANY(b.fz,c);b=new WT;U(b);J(b);}
function ANY(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Zg=F();
function Ff(){return AOI();}
function AOI(){return Math.random();}
function X(b,c){if(b<c)c=b;return c;}
function W(b,c){if(b>c)c=b;return c;}
function LO(b){if(b<=0)b= -b|0;return b;}
var By=F(Bm);
var H8=F(Bm);
var Of=F(0);
var P1=F(0);
var PS=F(0);
var Ss=F(0);
var V1=F(0);
var TI=F(0);
var Nz=F(0);
var Xt=F();
function AIT(a,b,c){a.BI($rt_str(b),Kw(c,"handleEvent"));}
function AJa(a,b,c){a.y6($rt_str(b),Kw(c,"handleEvent"));}
function ADD(a,b){return a.ud(b);}
function AKe(a,b,c,d){a.xt($rt_str(b),Kw(c,"handleEvent"),d?1:0);}
function ANR(a,b){return !!a.BN(b);}
function AEG(a){return a.vF();}
function AC0(a,b,c,d){a.Ap($rt_str(b),Kw(c,"handleEvent"),d?1:0);}
var BA=F(Bm);
var WT=F(Bm);
var GR=F(By);
var Ys=F();
function Zp(){return "ping";}
var Ny=F(0);
function Rx(){var a=this;C.call(a);a.oV=null;a.qs=null;a.lA=null;a.mh=null;a.dn=null;a.sa=null;a.mn=null;a.kP=null;a.fM=null;a.hL=0;a.uU=0;a.pP=null;a.e2=null;a.ph=null;a.lc=null;a.ri=0;}
function AAX(a){a.dn.focus();}
function MC(a,b){var c;c=DV();b=$rt_ustr(b);c.title=b;}
function YJ(a){var b,c,d;b=new LE;c=a.fM;d=a.kP.ce;b.W=c;b.q=d;b.bY=a;return b;}
function R8(a){a.uU=$rt_globals.requestAnimationFrame(Bl(a.qs,"onAnimationFrame"));}
function FP(a){a.hL=1;}
function R7(a,b,c){var d,e;a.kP.di=Cf(b,c);d=a.dn;e=b;d.width=e;d=a.dn;e=c;d.height=e;d=a.fM;Bh(d.ds,b,c);e=d.bA;d=d.ds;b=d.a;c=d.b;e.viewport(0,0,b,c);a.e2.cd(a.fM.ds,JR(a));a.e2.bK();}
function Gf(a,b){var c,d,e;c=a.pP;d=a.dn;if(D$(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.pP=b;}
function IO(a){return $rt_globals.performance.now()/1000.0;}
function JR(a){return $rt_globals.window.devicePixelRatio;}
function UU(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AB2(b,1);else{c=new VE;d=$rt_globals.window.showDirectoryPicker();e=new VD;e.od=b;e.oe=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function K1(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AB2(b,0);else{c=new Wc;d=$rt_globals.window.showOpenFilePicker();e=new Wb;e.oT=b;e.oS=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function CY(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.ri+1|0;a.ri=e;f=a.lc;g=FL(e);f.hi=Ld(f,f.hi,g);g=TO(f,g);LF(g,b);LF(g,b);f.i2=f.i2+1|0;b=a.ph;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bv)f=$rt_ustr(c);else if(U6(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(U6(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(U6(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof Kh)){b=new BA;c=HB(Cy(c));f
=new M;O(f);G(G(f,B(46)),c);Bj(b,N(f));J(b);}c=c;f=c.gm;if(f===null)f=c.eI;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function PJ(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new Py;e.mr=b;b=ACs(c);d.then(Bl(e,"f"),Bl(b,"f"));}
function Ti(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.oV;b=(Gg(b)).data;f=f.decode(b);b=e.writeText(f);e=new Tx;e.qZ=c;c=ACs(d);b.then(Bl(e,"f"),Bl(c,"f"));}
function Wq(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function ACs(b){var c;c=new LZ;c.q$=b;return c;}
var Ci=F(0);
var QC=F();
function ZH(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(!Bt(B(47),c))d=(AMN(I(c)<=0?B(31):Dr(c,1))).ci(b);else{d=new Mj;D9(d,b);b=$rt_globals.fetch("test.wasm");e=new Ms;b=b.then(Bl(e,"f"));e=new Mr;b=b.then(Bl(e,"f"));e=new Mq;f=new Mp;b.then(Bl(e,"f"),Bl(f,"f"));}return d;}
var Bi=F(0);
var ZB=F();
var Zd=F();
var PW=F(0);
function UB(){C.call(this);this.nI=null;}
function AHB(a,b){var c,d;c=b;b=a.nI;if(!(!b.e2.dH(c/1000.0)&&!b.hL)){d=b.fM.ds;if(Bb(d.a,d.b)){b.hL=0;b.e2.bK();}}R8(b);}
function Ux(){C.call(this);this.tc=null;}
function C7(a){FP(a.tc);}
var O0=F(0);
function Uy(){C.call(this);this.qh=null;}
function AFS(a,b,c){var d,e,f,g;c=a.qh;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dn){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=JR(c);R7(c,GY(f.width*g),GY(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];R7(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var ABI=F();
function AMz(b,c){ALA(b,c,AC9());}
function AC9(){return {box:'device-pixel-content-box'};}
function ALA(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Ch=F(0);
function Uv(){C.call(this);this.nj=null;}
function ALj(a,b){b=a.nj;b.e2.cd(b.fM.ds,JR(b));b.e2.bK();}
var Ke=F(0);
function Eo(){C.call(this);this.jN=null;}
var Eb=F(0);
var Wp=F(0);
var Me=F(0);
function N2(){var a=this;Eo.call(a);a.hi=null;a.iY=null;a.vT=null;a.i2=0;}
function TO(a,b){var c,d;c=a.hi;while(true){if(c===null)return null;d=IR(a.iY,b,c.ig);if(!d)break;c=d>=0?c.bU:c.bG;}return c;}
function Ld(a,b,c){var d,e;if(b===null){b=new IN;d=null;b.ig=c;b.hO=d;b.e7=1;b.ff=1;return b;}e=IR(a.iY,c,b.ig);if(!e)return b;if(e>=0)b.bU=Ld(a,b.bU,c);else b.bG=Ld(a,b.bG,c);D8(b);return I2(b);}
function Jn(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=IR(a.iY,c,b.ig);if(d<0)b.bG=Jn(a,b.bG,c);else if(d>0)b.bU=Jn(a,b.bU,c);else{e=b.bU;if(e===null)return b.bG;f=b.bG;g=R(IN,e.e7).data;h=0;while(true){b=e.bG;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bU;while(h>0){h=h+(-1)|0;j=g[h];j.bG=b;D8(j);b=I2(j);}e.bU=b;e.bG=f;D8(e);b=e;}D8(b);return I2(b);}
function Uw(){C.call(this);this.sj=null;}
function AMw(a,b){var c,d,e,f,g,h,i,j,k;c=a.sj.lc;b=b.data;if(!(b===Zp()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BA;U(b);J(b);}if(b.length<1){b=new BA;U(b);J(b);}d=FL(b[0]);e=TO(c,d);if(e===null)c=null;else{c.hi=Jn(c,c.hi,d);c.i2=c.i2+1|0;c=e.hO;}f=R(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=Fm(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new RD;ABp(e);e.gY=k;}else e=(k instanceof $rt_globals.File?1:0)?AAd(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:AAd(k,null);g[h]=e;h=j;}c.l(f);}}
function Op(){var a=this;C.call(a);a.ce=null;a.gJ=null;a.vd=null;a.di=null;}
function Mb(){return (DV()).activeElement;}
function CP(a,b,c,d){b.addEventListener($rt_ustr(c),Bl(d,"handleEvent"));return VL(a,b,c,d);}
function AAq(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bl(d,"handleEvent"),!!e);return VL(a,b,c,d);}
function VL(a,b,c,d){var e;e=new OW;e.t5=b;e.t7=c;e.t6=d;return e;}
function SO(a,b){var c;c=new TT;c.s7=b;return c;}
function Ep(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gJ.getBoundingClientRect();e=Cf(GY((b.clientX-d.left)*c),GY((b.clientY-d.top)*c));f=new Bg;g=a.di;f.a=g.a;f.b=g.b;d=new LA;Tj(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.n=e;d.tI=f;return d;}
function WJ(a,b,c){var d,e,f,g;d=new NU;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Tj(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.jl=0;d.dq=e;d.bj=f;d.iB=c;d.qt=g;return d;}
function Dy(a,b){b.stopPropagation();b.preventDefault();}
function YQ(a,b){var c;c=new Wm;c.ov=b;b.onpointerdown=Bl(c,"f");c=new Wo;c.nm=b;b.onpointerup=Bl(c,"f");}
function Ks(){var a=this;C.call(a);a.pN=null;a.cw=null;a.bA=null;a.rx=null;a.uA=0;a.vC=0;a.i5=null;a.v8=null;a.vQ=null;a.uR=null;a.fQ=null;a.g4=null;a.vY=null;a.nV=null;a.ds=null;a.sS=null;a.kG=0;a.jh=0;a.lm=0;a.k7=0;a.hC=0;a.lk=null;}
function FH(a,b,c){return Fn(a,b,c,400,0);}
function CI(a,b,c){return LN(a.pN,b,c);}
function Fe(a,b){var c,d,e,f,g;c=a.bA;d=b.bd;e=b.bt;f=b.bk;g=b.bu;c.clearColor(d,e,f,g);a.bA.clear(16384);}
function Cu(a,b){var c;if(b==a.jh)return b;if(!b)a.bA.disable(3042);else{a.bA.enable(3042);a.bA.blendFuncSeparate(770,771,1,1);}c=a.jh;a.jh=b;return c;}
function T0(a,b,c,d){var e,f,g;a.k7=1;a.hC=1;e=a.lk;f=d.a;g=d.b;e.p0=b;e.p1=c;e.pZ=f;e.pX=g;Tk(a);}
function UL(a){a.k7=0;a.hC=0;Tk(a);}
function Tk(a){var b,c,d,e,f,g;b=a.lm;c=a.k7;if(b!=c){a.lm=c;if(!c)a.bA.disable(3089);else a.bA.enable(3089);}if(a.lm&&a.hC){a.hC=0;d=a.bA;e=a.lk;b=e.p0;c=a.ds.b-e.p1|0;f=e.pX;c=c-f|0;g=e.pZ;d.scissor(b,c,g,f);}}
function J_(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.nV;c=a.kG;d=b.f5.q6;e=b.dQ;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dQ;h=b.ml;e.bindBuffer(34962,h);i=b.f5.lF.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dQ;m=k.gQ;n=k.eE;o=b.f5.jZ*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.eE|0;j=j+1|0;}a:{e=b.s$;if(e!==null){c=0;b.dQ.bindBuffer(34962,e);i=b.f5.pJ.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dQ;j=e.gQ;p=e.eE;m=e.n6;n=b.f5.os;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.eE|0;g=g+1|0;}}}q=b.sy;if(q===null){c=b.qx;if(c>0)b.dQ.drawArrays(4,0,c);}else{b.dQ.bindBuffer(34963,q);k=b.dQ;g=b.sJ;k.drawElements(4,g,5123,0);}a.kG=d;}
function BJ(a,b,c,d,e){Kn(a,a.i5);Lm(a.i5,a.bA,b,c,d,a.ds);d=a.i5;HM(a.bA,d.si,e);J_(a);}
function Hy(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Kn(a,a.fQ);Lm(a.fQ,a.bA,b,c,d,a.ds);Tf(a.fQ,a.bA,f);d=a.fQ;j=a.bA;f=f.e_;b=f.a;c=f.b;k=e.bd;l=b;m=k/l;k=e.bt;n=c;o=k/n;k=e.bk/l;l=e.bu/n;d=d.r0;j.uniform4f(d,m,o,k,l);d=a.fQ;e=a.bA;HM(e,d.oy,g);HM(e,d.mM,h);d=d.nC;e.uniform2f(d,i,0.0);J_(a);}
function CR(a){var b,c;b=new IM;c=a.rx;b.e_=new Bg;b.dE=c;b.ey=c.dc.createTexture();ASq=ASq+1|0;return b;}
function MV(a,b){V3(a.bA,b);}
function Kn(a,b){var c,d;if(b!==a.sS){c=a.bA;d=b.ch;c.useProgram(d);a.sS=b;}}
function ABb(){var a=this;Ks.call(a);a.vh=null;a.vR=null;}
function AP4(a,b){var c=new ABb();AHW(c,a,b);return c;}
function AHW(a,b,c){var d,e,f,g,h,i,j,k,l;d=new Tm;a.ds=new Bg;a.kG=0;a.lk=new Vw;a.pN=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(48)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bA=b;a.cw=LN(d,4,4);g=ACQ(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BL(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;k=new OY;XP();f=ASr;k.dQ=b;k.f5=f;k.qx=h.length/f.jZ|0;k.sJ
=j.length;f=b.createBuffer();k.ml=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);k.s$=null;f=b.createBuffer();k.sy=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}d=null;b.bindBuffer(34962,d);f=null;b.bindBuffer(34963,f);a.nV=k;a.vC=Ew(e,B(49));f=new OZ;f.dc=b;a.rx=f;l=b.getParameter(3379);a.uA=l;f=new M;O(f);S(G(f,B(50)),l);$rt_globals.console.info($rt_ustr(N(f)));g=R(DX,6);i=g.data;d=new U8;KO(d,b,B(51),B(52),ASr);f=d.ch;d.si=b.getUniformLocation(f,"uColor");a.i5=d;i[0]
=d;f=APz(b,B(53));a.v8=f;i[1]=f;f=new PE;KO(f,b,B(51),B(54),ASr);a.vQ=f;i[2]=f;f=AQS(b);a.uR=f;i[3]=f;f=AP5(b);a.fQ=f;i[4]=f;f=AQ2(b);a.g4=f;i[5]=f;a.vY=g;V3(b,B(55));a.vR=new Tl;a.vh=c;}
function Fn(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=a.cw;g=Yg(b,c,d,e);Iz(f,g);h=f.bn.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Ee(f,B(56));m=Ee(f,B(57));h=new Kj;h.lq=b;h.nf=c;n=c|0;if(n!==c){b=new M;O(b);E6(G(b,B(58)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.n3=n;h.ns=d;h.oW=e;h.dg=i;h.dY=j;h.ub=l;h.ld=k;h.mq=g;h.pF=C6(i);h.vJ=C6(h.dY);d=m*32.0|0;n=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;a:{h.uk=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(59);}h.t4=b;return h;}
function Cp(){C.call(this);this.bf=null;}
function D9(a,b){a.bf=b;}
function AOn(a,b){return 0;}
var It=F();
var ARU=null;function IR(a,b,c){return b.i4(c);}
function ZL(){ARU=new It;}
function Yx(){var a=this;C.call(a);a.b2=null;a.lB=null;a.bJ=null;a.eR=null;a.eF=null;a.f9=null;a.gI=null;a.iV=null;a.jA=null;a.cR=null;}
function AQD(a){var b=new Yx();AKO(b,a);return b;}
function AKO(a,b){a.b2=CG(R(Cj,0));a.lB=CG(R(Cj,0));a.bJ=CG(R(Cs,0));a.eR=CG(R(EB,0));a.eF=CG(R(EN,0));a.f9=CG(R(E$,0));a.gI=CG(R(FS,0));a.iV=CG(R(Bi,0));a.jA=CG(R(Bi,0));a.cR=b;}
function SY(a,b){var c,d,e,f;C7(a.cR);c=(Cl(!b.iB?a.lB:a.b2)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].by(b);if(f)break;if(b.jl)break;e=e+1|0;}return f;}
function PF(a,b,c){var d,e,f;C7(a.cR);d=(Cl(a.f9)).data;e=d.length;f=0;while(f<e){if(d[f].hb(b,c))return 1;f=f+1|0;}return 0;}
function Vk(){C.call(this);this.mF=null;}
function AKK(a,b){var c;c=a.mF;if(SY(c.ce,WJ(c,b,1)))Dy(c,b);}
function Vl(){C.call(this);this.qY=null;}
function AKZ(a,b){var c;c=a.qY;if(SY(c.ce,WJ(c,b,0)))Dy(c,b);}
function Vm(){C.call(this);this.ny=null;}
function AJt(a,b){var c,d,e,f,g,h;c=a.ny;if(c.di!==null){d=Ep(c,b);e=c.ce;C7(e.cR);f=(Cl(e.bJ)).data;g=f.length;h=0;a:{while(h<g){if(f[h].b4(d))break a;h=h+1|0;}}Dy(c,b);}}
function Vn(){C.call(this);this.s8=null;}
function AIU(a,b){var c,d,e,f,g,h;c=a.s8;b.button;if(c.di!==null){d=Ep(c,b);c=c.ce;e=b.button;C7(c.cR);f=(Cl(c.bJ)).data;g=f.length;h=0;a:{while(h<g){if(f[h].c8(d,e))break a;h=h+1|0;}}}}
function Vo(){C.call(this);this.p_=null;}
function AJe(a,b){var c,d,e,f,g,h,i;c=a.p_;b.button;if(c.di!==null){d=Ep(c,b);e=c.ce;f=b.button;C7(e.cR);g=(Cl(e.bJ)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cP(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Dy(c,b);}}
function Vp(){C.call(this);this.m1=null;}
function ALy(a,b){var c,d,e,f,g,h,i,j,k;c=a.m1;if(c.di!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.ce;f=Ep(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;C7(e.cR);i=(Cl(e.eR)).data;j=i.length;k=0;b:{while(k<j){if(i[k].ee(f,d,h))break b;k=k+1|0;}}Dy(c,b);}}
function Vq(){C.call(this);this.tj=null;}
function AHd(a,b){var c,d,e,f,g,h,i,j;c=a.tj;if(c.di!==null){d=Ep(c,b);e=c.ce;f=b.button;g=b.detail;C7(e.cR);h=(Cl(e.bJ)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cz(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Dy(c,b);}}
function Vr(){C.call(this);this.qk=null;}
function AOP(a,b){var c,d,e,f,g,h,i;c=a.qk;if(c.di!==null){d=Ep(c,b);e=c.ce;C7(e.cR);f=(Cl(e.eF)).data;g=f.length;h=0;a:{while(h<g){if(f[h].by(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Dy(c,b);}}
function Vs(){C.call(this);this.m$=null;}
function AGx(a,b){var c,d,e;b=a.m$.ce;c=(Cl(b.jA)).data;d=c.length;e=0;while(e<d){c[e].r();e=e+1|0;}C7(b.cR);}
function Vt(){C.call(this);this.sr=null;}
function AMD(a,b){var c,d,e;b=a.sr.ce;c=(Cl(b.iV)).data;d=c.length;e=0;while(e<d){c[e].r();e=e+1|0;}C7(b.cR);}
function WD(){C.call(this);this.rZ=null;}
function AOo(a,b){var c;c=a.rZ;if(c.di!==null)Ep(c,b);}
function WE(){C.call(this);this.ra=null;}
function AI7(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.ra;if(Mb()===c.gJ){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cl(c.ce.gI)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].ga();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.ce.cR;m=new MK;m.sD=k;m.sE=l;g.getAsString(Bl(m,"accept"));Dy(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(60)),k),B(61)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function WF(){C.call(this);this.l1=null;}
function AJw(a,b){var c;c=a.l1;if(Mb()===c.gJ&&PF(c.ce,SO(c,b),0))Dy(c,b);}
function WG(){C.call(this);this.sI=null;}
function ALc(a,b){var c;c=a.sI;if(Mb()===c.gJ&&PF(c.ce,SO(c,b),1))Dy(c,b);}
var Ta=F(0);
var Tm=F();
function LN(a,b,c){var d,e,f;d=new P_;ASa=ASa+1|0;d.k1=b;d.kc=c;e=(DV()).createElement("canvas");d.i3=e;f=b;e.width=f;e=d.i3;f=c;e.height=f;d.bn=d.i3.getContext("2d");return d;}
var Tl=F();
function AIh(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function LE(){var a=this;C.call(a);a.W=null;a.q=null;a.bY=null;}
function ABV(){var a=this;C.call(a);a.gN=null;a.h0=null;a.gB=0;}
function CG(a){var b=new ABV();AG_(b,a);return b;}
function AG_(a,b){a.gN=b;}
function Z(a,b){var c,d,e;c=a.gB;d=a.gN;if(c==d.data.length)a.gN=C$(d,c+4|0);d=a.gN.data;e=a.gB;a.gB=e+1|0;d[e]=b;a.h0=null;}
function Cl(a){var b;b=a.h0;if(!(b!==null&&b.data.length==a.gB))a.h0=C$(a.gN,a.gB);return a.h0;}
var Ia=F(0);
var Cj=F(0);
var Cs=F(0);
function AIl(a,b){return 0;}
function ALx(a,b,c,d){return 0;}
function AEz(a,b,c){return 0;}
function ADn(a,b,c){return 0;}
var EB=F(0);
var EN=F(0);
var E$=F(0);
var HF=F(0);
var FS=F(0);
function O9(){C.call(this);this.uv=null;}
function Bg(){var a=this;C.call(a);a.a=0;a.b=0;}
function Cf(a,b){var c=new Bg();Yq(c,a,b);return c;}
function Yq(a,b,c){a.a=b;a.b=c;}
function Du(a,b){a.a=b.a;a.b=b.b;}
function Bh(a,b,c){a.a=b;a.b=c;}
function ACD(a){var b,c,d;b=a.a;c=a.b;d=new M;O(d);S(G(S(G(d,B(62)),b),B(63)),c);return N(d);}
function Km(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function Vw(){var a=this;C.call(a);a.p0=0;a.p1=0;a.pZ=0;a.pX=0;}
var ABa=F();
var XR=F(0);
function OZ(){C.call(this);this.dc=null;}
function KN(){var a=this;C.call(a);a.ch=null;a.vM=null;}
function AAc(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(64):B(65);d=$rt_str(b.getShaderInfoLog(e));g=new M;O(g);G(G(g,f),d);f=N(g);b.deleteShader(e);Bu(Bx(),f);b=new Bm;Bj(b,f);J(b);}
function DX(){var a=this;KN.call(a);a.m9=null;a.ox=null;a.kT=null;}
function ASs(a,b,c,d){var e=new DX();KO(e,a,b,c,d);return e;}
function KO(a,b,c,d,e){var f,g,h,i,j,k;a.vM=e;f=AAc(b,35633,c);d=AAc(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.ch=g;h=e.qM.data;i=h.length;j=0;while(j<i){c=h[j];d=a.ch;k=c.gQ;c=c.oI;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.ch;b.linkProgram(c);if(b.getProgramParameter(c,35714)){V3(b,B(66));a.kT=new Bg;c=a.ch;a.m9=b.getUniformLocation(c,"uResolution");c=a.ch;a.ox=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bm;c=new M;O(c);G(G(c,B(67)),d);Bj(b,N(c));J(b);}
function Yz(a,b,c){var d,e,f;if(!Km(a.kT,c)){Du(a.kT,c);d=a.m9;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function Lm(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.ox;b.uniform4f(e,i,l,h,j);Yz(a,b,f);}
function U8(){DX.call(this);this.si=null;}
function En(){DX.call(this);this.p5=null;}
function APz(a,b){var c=new En();SS(c,a,b);return c;}
function ASt(a,b,c){var d=new En();S0(d,a,b,c);return d;}
function SS(a,b,c){S0(a,b,B(51),c);}
function S0(a,b,c,d){XP();KO(a,b,c,d,ASr);c=a.ch;a.p5=b.getUniformLocation(c,"sDiffuse");}
function Tf(a,b,c){var d;d=a.p5;b.uniform1i(d,0);b.activeTexture(33984);c=c.ey;b.bindTexture(3553,c);}
var PE=F(DX);
function AAV(){En.call(this);this.uE=null;}
function AQS(a){var b=new AAV();AGD(b,a);return b;}
function AGD(a,b){var c;SS(a,b,B(68));c=a.ch;a.uE=b.getUniformLocation(c,"uContrast");}
function AAs(){var a=this;En.call(a);a.r0=null;a.oy=null;a.mM=null;a.nC=null;}
function AP5(a){var b=new AAs();ALt(b,a);return b;}
function ALt(a,b){var c;S0(a,b,B(69),B(70));c=a.ch;a.r0=b.getUniformLocation(c,"uTexTransform");c=a.ch;a.oy=b.getUniformLocation(c,"uColor");c=a.ch;a.mM=b.getUniformLocation(c,"uBgColor");c=a.ch;a.nC=b.getUniformLocation(c,"uContrast");}
function X5(){var a=this;En.call(a);a.s_=null;a.s9=null;a.o5=null;}
function AQ2(a){var b=new X5();AF7(b,a);return b;}
function AF7(a,b){var c,d;SS(a,b,B(71));c=a.ch;a.s_=b.getUniformLocation(c,"uColorB");d=a.ch;a.s9=b.getUniformLocation(d,"uColorF");d=a.ch;a.o5=b.getUniformLocation(d,"uContrast");}
var QK=F(0);
var ACt=F(0);
function HM(b,c,d){var e,f,g,h;e=d.bd;f=d.bt;g=d.bk;h=d.bu;b.uniform4f(c,e,f,g,h);}
function V3(b,c){var d,e;d=b.getError();if(d){b=Bx();e=new M;O(e);S(G(e,c),d);Bu(b,N(e));}}
function OW(){var a=this;C.call(a);a.t5=null;a.t7=null;a.t6=null;}
function OY(){var a=this;C.call(a);a.dQ=null;a.f5=null;a.ml=null;a.s$=null;a.sy=null;a.qx=0;a.sJ=0;}
function Cq(){var a=this;C.call(a);a.t0=null;a.cQ=0;}
function DA(a,b,c){a.t0=b;a.cQ=c;}
function Gu(){var a=this;Cq.call(a);a.qM=null;a.lF=null;a.pJ=null;a.jZ=0;a.os=0;a.q6=0;}
var ASr=null;var ASu=null;function XP(){XP=Bo(Gu);AHN();}
function AHN(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Gu;c=R(DJ,2);d=c.data;ANN();d[0]=ASv;d[1]=ASw;XP();DA(b,B(72),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];Xs();switch(ASx.data[l.k$.cQ]){case 1:f=f+l.eE|0;h=h+1|0;break a;case 2:e=e+l.eE|0;g=g+1|0;break a;default:}}i=i|1<<l.gQ;k=k+1|0;}b.qM=c;b.jZ=e;b.os=f;b.q6=i;c=R(DJ,g);m=c.data;b.lF=c;c=R(DJ,h);n=c.data;b.pJ=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];Xs();switch(ASx.data[l.k$.cQ]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}ASr=b;c=R(Gu,1);c.data[0]=b;ASu=c;}
var Ll=F(0);
var R$=F(0);
var Ty=F(0);
var Gb=F();
function IK(){Gb.call(this);this.tz=null;}
function YX(){var a=this;IK.call(a);a.vA=0;a.j$=0;a.hX=null;a.jE=null;a.rr=null;}
function AJG(a,b){var c=new YX();ANw(c,a,b);return c;}
function ANw(a,b,c){a.tz=b;b=new M;O(b);a.hX=b;a.jE=BL(32);a.vA=c;YO();a.rr=ASy;}
function Sn(a,b,c,d){var e,$$je;e=a.tz;if(e===null)a.j$=1;if(!(a.j$?0:1))return;a:{try{e.jv(b,c,d);break a;}catch($$e){$$je=D5($$e);if($$je instanceof HV){}else{throw $$e;}}a.j$=1;}}
function M2(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=Zz(b,c,d-c|0);e=EV(W(16,X(e.length,1024)));g=Zo(e,0,e.data.length);h=a.rr;i=new Om;b=EV(1);j=b.data;j[0]=63;GQ();k=ASz;i.kW=k;i.kd=k;c=j.length;if(c&&c>=i.lG){i.tV=h;i.oG=b.fe();i.vu=2.0;i.lG=4.0;i.n4=BL(512);i.mY=EV(512);k=ASA;if(k===null){i=new BA;Bj(i,B(73));J(i);}i.kW=k;i.kd=k;a:while(true){if(i.hT==3){f=new DL;U(f);J(f);}i.hT=2;b:{while(true){try{k=XG(i,f,g);}catch($$e){$$je=D5($$e);if($$je instanceof Bm){f=$$je;break a;}else{throw $$e;}}if(HL(k))
{d=B2(f);if(d<=0)break b;k=DM(d);}else if(GM(k))break;h=!K9(k)?i.kW:i.kd;c:{if(h!==ASA){if(h===ASB)break c;else break b;}d=B2(g);b=i.oG;l=b.data.length;if(d<l){k=ASC;break b;}VN(g,b,0,l);}Es(f,f.P+Jp(k)|0);}}l=GM(k);Sn(a,e,0,g.P);M0(g);if(!l){while(true){d=i.hT;if(d!=2&&d!=4){f=new DL;U(f);J(f);}f=ASD;if(f===f)i.hT=3;l=GM(f);Sn(a,e,0,g.P);M0(g);if(!l)break;}return;}}J(AFl(f));}i=new BA;Bj(i,B(74));J(i);}
function Bu(a,b){var c,d,e,f,g,h,i,j;BB(BX(a.hX,b),10);b=a.hX;c=b.N;d=a.jE;if(c>d.data.length)d=BL(c);e=0;f=0;if(e>c){b=new By;Bj(b,B(75));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.B.data;j=e+1|0;g[f]=i[e];f=h;e=j;}M2(a,d,0,c);a.hX.N=0;}
function FX(){Gb.call(this);this.vk=null;}
function WN(a){a.vk=EV(1);}
var Ky=F(FX);
var ASd=null;function AH9(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AAK(){var b;b=new Ky;WN(b);ASd=b;}
function DJ(){var a=this;Cq.call(a);a.oI=null;a.k$=null;a.eE=0;a.n6=0;a.gQ=0;}
var ASv=null;var ASw=null;var ASE=null;function ANN(){ANN=Bo(DJ);AGW();}
function AQf(a,b,c,d,e,f,g){var h=new DJ();U0(h,a,b,c,d,e,f,g);return h;}
function U0(a,b,c,d,e,f,g,h){ANN();DA(a,b,c);a.oI=d;a.k$=e;a.eE=f;a.n6=g;a.gQ=h;}
function AGW(){var b;b=new DJ;Z0();U0(b,B(76),0,B(77),ASF,2,0,0);ASv=b;b=AQf(B(78),1,B(79),ASF,2,0,1);ASw=b;ASE=H(DJ,[ASv,b]);}
function IA(){var a=this;C.call(a);a.tH=null;a.uH=null;}
function AAZ(b){var c,d;if(E_(b))J(YS(b));if(!AA1(L(b,0)))J(YS(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AA1(d))break a;else J(YS(b));}}c=c+1|0;}}
function AA1(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Lq=F(IA);
var ASy=null;function YO(){YO=Bo(Lq);AF4();}
function ABe(a){var b,c;b=new So;b.eC=B(80);GQ();c=ASz;b.gu=c;b.k5=c;b.ux=a;b.lT=0.3333333432674408;b.uS=0.5;b.m5=EV(512);b.qX=BL(512);return b;}
function AF4(){var b,c,d,e,f;b=new Lq;YO();c=R(Bv,0);d=c.data;AAZ(B(81));e=d.length;f=0;while(f<e){AAZ(d[f]);f=f+1|0;}b.tH=B(81);b.uH=c.fe();ASy=b;}
var JB=F();
var ASG=null;var ASx=null;function Xs(){Xs=Bo(JB);AKA();}
function AKA(){var b,c;Z0();b=BF((ASH.fe()).data.length);c=b.data;ASx=b;c[ASI.cQ]=1;c[ASF.cQ]=2;Z2();c=BF((ASJ.fe()).data.length);b=c.data;ASG=c;b[ASK.cQ]=1;b[ASL.cQ]=2;}
function N8(){var a=this;C.call(a);a.e6=null;a.lv=null;a.jj=null;a.re=null;a.or=null;a.oC=null;}
function Y0(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.e6,b,c));}
function L6(a,b){var c,d,e,f,g,h,i,$$je;c=new Bv;d=b;while(a.lv[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.e6,b,d));f=e.data;Ez();d=f.length;YO();g=ASy;h=Zo(e,0,d);a:{try{i=ABe(g);GQ();g=XY(AAg(ABN(i,ASA),ASA),h);break a;}catch($$e){$$je=D5($$e);if($$je instanceof Fy){g=$$je;}else{throw $$e;}}h=new VV;h.iu=1;h.i0=1;h.g2=B(82);h.ke=g;J(h);}if(!g.P&&g.de==g.lr)c.bT=g.gP;else{f=BL(B2(g));e=f.data;c.bT=f;MB(g,f,0,e.length);}return c;}
function Md(a,b){var c,d,e;c=new Bv;d=b>>>1|0;e=d;while(a.jj[e]){e=e+1|0;}d=e-d|0;G3(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.e6,b,d)));return c;}
var Gy=F(Cq);
var ASI=null;var ASF=null;var ASH=null;function Z0(){Z0=Bo(Gy);AFA();}
function AFX(a,b){var c=new Gy();ABf(c,a,b);return c;}
function ABf(a,b,c){Z0();DA(a,b,c);}
function AFA(){var b;ASI=AFX(B(83),0);b=AFX(B(84),1);ASF=b;ASH=H(Gy,[ASI,b]);}
var F3=F(Cq);
var ASK=null;var ASL=null;var ASJ=null;function Z2(){Z2=Bo(F3);AF_();}
function AOV(a,b){var c=new F3();XV(c,a,b);return c;}
function XV(a,b,c){Z2();DA(a,b,c);}
function AF_(){var b;ASK=AOV(B(85),0);b=AOV(B(86),1);ASL=b;ASJ=H(F3,[ASK,b]);}
var UC=F(DO);
function AA4(){BA.call(this);this.tZ=null;}
function YS(a){var b=new AA4();AM5(b,a);return b;}
function AM5(a,b){U(a);a.tZ=b;}
var Lp=F(0);
function Wm(){C.call(this);this.ov=null;}
function AL_(a,b){a.ov.setPointerCapture(b.pointerId);}
function Wo(){C.call(this);this.nm=null;}
function AEa(a,b){a.nm.releasePointerCapture(b.pointerId);}
function GG(){var a=this;C.call(a);a.lr=0;a.P=0;a.de=0;a.gX=0;}
function UY(a,b){a.gX=(-1);a.lr=b;a.de=b;}
function Es(a,b){var c,d,e;if(b>=0&&b<=a.de){a.P=b;if(b<a.gX)a.gX=0;return a;}c=new BA;d=a.de;e=new M;O(e);BB(S(G(S(G(e,B(87)),b),B(88)),d),93);Bj(c,N(e));J(c);}
function B2(a){return a.de-a.P|0;}
function Dz(a){return a.P>=a.de?0:1;}
var Q4=F(0);
var Kk=F(GG);
function ACc(b){var c,d;if(b>=0)return AK2(0,b,BL(b),0,b,0);c=new BA;d=new M;O(d);S(G(d,B(89)),b);Bj(c,N(d));J(c);}
function Zz(b,c,d){return AK2(0,b.data.length,b,c,c+d|0,0);}
function MB(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new By;i=new M;O(i);S(G(S(G(i,B(90)),g),B(91)),f);Bj(h,N(i));J(h);}if(B2(a)<d){j=new K0;U(j);J(j);}if(d<0){j=new By;k=new M;O(k);G(S(G(k,B(92)),d),B(93));Bj(j,N(k));J(j);}g=a.P;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.gP.data[m+a.lg|0];l=l+1|0;c=n;m=o;}a.P=g+d|0;return a;}}b=b.data;j=new By;d=b.length;k=new M;O(k);BB(S(G(S(G(k,B(94)),c),B(88)),d),41);Bj(j,N(k));J(j);}
function Jm(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.lw){b=new In;U(b);J(b);}e=d-c|0;if(B2(a)<e){b=new Hu;U(b);J(b);}if(c>I(b)){f=new By;d=I(b);b=new M;O(b);BB(S(G(S(G(b,B(95)),c),B(88)),d),41);Bj(f,N(b));J(f);}if(d>I(b)){f=new By;c=I(b);b=new M;O(b);S(G(S(G(b,B(96)),d),B(97)),c);Bj(f,N(b));J(f);}if(c>d){b=new By;f=new M;O(f);S(G(S(G(f,B(95)),c),B(98)),d);Bj(b,N(f));J(b);}g=a.P;while(c<d){h=g+1|0;i=c+1|0;Q$(a,g,L(b,c));g=h;c=i;}a.P=a.P+e|0;return a;}
function I7(){var a=this;GG.call(a);a.j9=0;a.kM=null;a.u7=null;}
function Zo(b,c,d){var e,f,g;e=b.data;f=new VM;g=e.length;d=c+d|0;UY(f,g);AHT();f.u7=ASM;f.j9=0;f.kM=b;f.P=c;f.de=d;f.u_=0;f.mg=0;return f;}
function VN(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.mg){e=new In;U(e);J(e);}if(B2(a)<d){e=new Hu;U(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new By;j=new M;O(j);S(G(S(G(j,B(99)),h),B(91)),g);Bj(i,N(j));J(i);}if(d<0){e=new By;i=new M;O(i);G(S(G(i,B(92)),d),B(93));Bj(e,N(i));J(e);}h=a.P;k=h+a.j9|0;l=0;while(l<d){b=a.kM.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.P=h+d|0;return a;}}b=b.data;e=new By;d=b.length;i=new M;O(i);BB(S(G(S(G(i,B(94)),c),B(88)),d),41);Bj(e,N(i));J(e);}
function M0(a){a.P=0;a.de=a.lr;a.gX=(-1);return a;}
function Hj(){C.call(this);this.v2=null;}
var ASB=null;var ASA=null;var ASz=null;function GQ(){GQ=Bo(Hj);AI9();}
function ABX(a){var b=new Hj();AAW(b,a);return b;}
function AAW(a,b){GQ();a.v2=b;}
function AI9(){ASB=ABX(B(100));ASA=ABX(B(101));ASz=ABX(B(102));}
var Mj=F(Cp);
function AI3(a){}
function AHE(a,b,c){}
var ACf=F();
function AMN(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(103)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(Ku(b)){case -1570047148:if(!Bt(b,B(104)))break a;d=15;break a;case -1519338717:if(!Bt(b,B(105)))break a;d=1;break a;case -1509980539:if(!Bt(b,B(106)))break a;d=11;break a;case -1073555521:if(!Bt(b,B(107)))break a;d=12;break a;case -811765794:if(!Bt(b,B(108)))break a;d=4;break a;case -785237654:if(!Bt(b,B(109)))break a;d=9;break a;case -631889171:if(!Bt(b,B(110)))break a;d=7;break a;case -439438829:if
(!Bt(b,B(111)))break a;d=16;break a;case 3343967:if(!Bt(b,B(112)))break a;d=8;break a;case 3556498:if(!Bt(b,B(113)))break a;d=3;break a;case 485517998:if(!Bt(b,B(114)))break a;d=5;break a;case 544901384:if(!Bt(b,B(115)))break a;d=2;break a;case 1030621992:if(!Bt(b,B(116)))break a;d=14;break a;case 1465713255:if(!Bt(b,B(117)))break a;d=6;break a;case 1554501643:if(!Bt(b,B(118)))break a;d=13;break a;case 1609169232:if(!Bt(b,B(119)))break a;d=10;break a;default:}}b:{switch(d){case 1:break;case 2:case 3:b=new R0;break b;case 4:b
=new RZ;break b;case 5:b=new RY;break b;case 6:b=new RX;break b;case 7:case 8:b=new RW;break b;case 9:b=new RV;break b;case 10:b=new RU;break b;case 11:b=new RT;break b;case 12:b=new RS;break b;case 13:b=new PD;break b;case 14:b=new PB;break b;case 15:b=new PC;break b;case 16:b=new Pz;break b;default:b=new PA;break b;}b=new R1;}return b;}
var Zy=F();
var Jg=F(Kk);
function Zh(){var a=this;Jg.call(a);a.lw=0;a.lg=0;a.gP=null;}
function AK2(a,b,c,d,e,f){var g=new Zh();AO2(g,a,b,c,d,e,f);return g;}
function AO2(a,b,c,d,e,f,g){UY(a,c);a.P=e;a.de=f;a.lg=b;a.lw=g;a.gP=d;}
function Q$(a,b,c){a.gP.data[b+a.lg|0]=c;}
function J6(){var a=this;C.call(a);a.tV=null;a.oG=null;a.vu=0.0;a.lG=0.0;a.kW=null;a.kd=null;a.hT=0;}
function KU(){var a=this;C.call(a);a.f8=0;a.hv=0;}
var ASD=null;var ASC=null;function XM(a,b){var c=new KU();Ya(c,a,b);return c;}
function Ya(a,b,c){a.f8=b;a.hv=c;}
function HL(a){return a.f8?0:1;}
function GM(a){return a.f8!=1?0:1;}
function JT(a){return !Pt(a)&&!K9(a)?0:1;}
function Pt(a){return a.f8!=2?0:1;}
function K9(a){return a.f8!=3?0:1;}
function Jp(a){var b;if(JT(a))return a.hv;b=new E4;U(b);J(b);}
function DM(b){return XM(2,b);}
function Uj(a){var b,c;switch(a.f8){case 0:b=new O1;U(b);J(b);case 1:b=new V2;U(b);J(b);case 2:b=new T$;c=a.hv;U(b);b.wf=c;J(b);case 3:b=new OR;c=a.hv;U(b);b.wb=c;J(b);default:}}
function YB(){ASD=XM(0,0);ASC=XM(1,0);}
var XC=F();
var Kx=F(0);
var Ms=F();
function AGi(a,b){return b.arrayBuffer();}
var Mr=F();
function AKd(a,b){var c,d;c=new N5;d=new N3;return $rt_globals.WebAssembly.instantiate(b,AIf(Bl(c,"f"),Bl(d,"f")));}
var Mq=F();
function AKU(a,b){AD6(b);}
var Mp=F();
function AEN(a,b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
var R1=F();
function AKt(a,b){return ARj(b);}
var R0=F();
function ADN(a,b){return APC(b);}
var RZ=F();
function AHm(a,b){var c,d,e;c=new U4;Hp(c,b);d=new TR;d.k_=new Bg;d.jy=new Bg;c.qc=d;c.dj=XI();c.cA=XI();c.dN=Xc(c.bc);Z(c.bc.dz,c);d=b.q.b2;e=new R3;e.r1=c;Z(d,e);Z(b.q.bJ,c);b=b.q.eF;d=new R6;d.qS=c;Z(b,d);Rz(c.cA);b=SF(B(120),25.0);c.qW=b;d=c.dN;d.f3=b;Ly(d,Go());Bf(c.f1,CF(43));b=Go();HI(c.dj,b);HI(c.cA,b);b=c.dj;b.iM=new R4;d=c.cA;d.iM=new R2;d.ja=new VW;d.rI=new VX;J5(b,(MI(0)).h$);J5(c.cA,(MI(0)).h$);return c;}
var RY=F();
function AHg(a,b){var c,d,e;c=new We;Hp(c,b);d=c.bc.dz;e=new NC;e.mf=c;Z(d,e);d=AMQ(c.bc);c.dV=d;WI(d,Go());Z(b.q.bJ,c);d=b.q.b2;e=new ND;e.pe=c;Z(d,e);d=b.q.eF;e=new NE;e.sd=c;Z(d,e);b=FH(b.W,B(120),25);RF(c.dV,b);Bf(c.f1,CF(43));return c;}
var RX=F();
function AHV(a,b){var c,d,e;c=new WS;Hp(c,b);c.fl=Ck();c.eK=Ck();c.nK=Bq(B(121));c.hP=AM2();c.fI=0;d=c.bc.dz;e=new S1;e.l3=c;Z(d,e);Z(b.q.bJ,c);d=b.q.b2;e=new S2;e.pb=c;Z(d,e);b=FH(b.W,B(120),35);c.iL=b;c.hz=AOb(FE(b));Bf(c.f1,Bq(B(122)));return c;}
var RW=F();
function ADT(a,b){var c,d,e,f;c=new Ob;D9(c,b);c.fD=AJm();c.dF=0;c.qH=500;c.sO=WV(0,0,0,255);c.la=20;c.s5=20;c.nE=ABq();d=b.q.bJ;e=new Vg;e.h6=c;f=new WQ;f.qr=e;e.pS=f;Z(d,e);d=b.q.eR;e=new RC;e.nc=c;Z(d,e);c.dG=b.W;c.rE=Tv(b.bY);Su(c.fD,FH(c.dG,B(120),c.s5),c.la,c.dG);c.gt=G5();return c;}
var RV=F();
function AFw(a,b){var c,d;c=new PK;Ga(c,b);b=b.q.b2;d=new O2;d.sR=c;Z(b,d);return c;}
var RU=F();
function AKJ(a,b){return AQX(b);}
var RT=F();
function AN8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new VI;Ga(c,b);c.dv=E1(0,0,300,300);c.ez=Rt(0,0,3,3);d=b.W;b=b.q.bJ;e=new SH;e.ks=c;Z(b,e);b=YN(d);c.oE=b;F7(c.dv,b);GI(c.dv);b=c.dv.S;Dm();Bf(b,ASN);Bf(c.dv.M,Cv(204,120,50));Z2();e=ASL;f=EV((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CR(d);Xs();switch(ASG.data[e.cQ]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Ef;U(b);J(b);}b:
{Mm(m,5,5,h);b=m.dE.dc;switch(ASG.data[e.cQ]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Ef;U(b);J(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.jO=m;Bh(c.ez.g,B_(m),C0(c.jO));Bf(c.ez.S,c.kZ);return c;}
var RS=F();
function AO0(a,b){var c,d,e;c=new Q5;Ga(c,b);c.fZ=E1(0,0,300,300);c.jp=new Bg;c.hQ=new Bg;c.g_=new Bg;d=b.W;b=b.q.bJ;e=new UM;e.iP=c;Z(b,e);b=YN(d);c.qm=b;F7(c.fZ,b);GI(c.fZ);b=c.fZ.S;Dm();Bf(b,ASN);Bf(c.fZ.M,Cv(204,120,50));return c;}
var PD=F();
function AIL(a,b){var c,d,e,f;c=new NM;D9(c,b);c.uW=20;c.wq=11;c.uC=220;c.is=new Bg;c.vm=5000;c.gj=1;c.e8=H(Ie,[CF(0),CF(255)]);c.dP=b.W;d=b.q.bJ;e=new S$;e.iH=c;f=new OB;f.my=e;e.oQ=f;Z(d,e);b=b.q.eR;d=new MZ;d.sg=c;Z(b,d);b=CI(c.dP,200,220);c.ji=b;FN(b,B(120),20.0);b=CI(c.dP,200,20);c.eT=b;FN(b,B(120),20.0);c.hj=G5();return c;}
var PB=F();
function ACO(a,b){var c,d,e;c=new H0;Ga(c,b);Z(b.q.bJ,c);d=b.q.b2;e=new Re;e.qu=c;Z(d,e);Z(b.q.f9,new Rd);d=b.q.f9;e=new Rb;e.ow=c;Z(d,e);Z(b.q.gI,new Ra);d=b.q.gI;e=new Rc;e.mG=c;Z(d,e);b=!Wq(b.bY)?B(123):B(124);d=new M;O(d);G(G(d,B(125)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var PC=F();
function AGe(a,b){var c,d,e,f,g,h,i,j;c=new O5;D9(c,b);c.mO=CF(20);c.eM=E1(0,0,300,300);d=b.q.b2;e=new QL;e.v3=c;Z(d,e);b=b.W;d=FH(b,B(10),88);CB(b.cw,d);f=Ee(b.cw,B(126));g=Ee(b.cw,B(127));if(f>g)g=f;h=C6(g);i=Ji(d,1.1799999475479126);j=Bx();e=new M;O(e);S(G(S(G(e,B(128)),h),B(129)),i);Bu(j,N(e));e=CI(b,h,i*2|0);c.hA=e;CB(e,d);Ce(c.hA,B(126),0.0,d.dg);Ce(c.hA,B(127),0.0,i+d.dg);b=CR(b);c.kR=b;CL(b,c.hA);F7(c.eM,c.kR);GI(c.eM);b=c.eM.S;Dm();Bf(b,ASN);Bf(c.eM.M,ASO);return c;}
var Pz=F();
function AIY(a,b){var c,d,e,f;c=new Vh;Hp(c,b);c.rD=SF(B(130),20.0);d=new Qv;d.cE=Ck();c.dJ=d;Z(c.bc.dz,d);Z(c.bc.dz,c);Bf(c.f1,CF(43));d=Xc(c.bc);c.fm=d;Ly(d,Go());c.fm.f3=SF(B(120),25.0);d=b.q.b2;e=new Pp;e.v0=c;Z(d,e);d=b.q.eF;e=new Pq;e.pg=c;Z(d,e);d=b.q.bJ;e=c.fm;f=new UO;f.gl=e;Z(d,f);Z(b.q.bJ,c.dJ);d=b.q.bJ;e=c.bc.cr;f=new Qg;f.lL=e;Z(d,f);b=b.q.eR;d=c.dJ;BI(d);e=new Pr;e.qv=d;Z(b,e);return c;}
var PA=F();
function AMs(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=new P4;WZ(c,b);d=c.cL;e=new KQ;f=R(Bv,8);g=I(B(131));h=0;i=0;j=g+1|0;while(true){k=Gp(B(131),10,i);l=k>=0?B7(B(131),i,k):Dr(B(131),i);m=f.data;n=h+1|0;i=m.length;if(i==h)f=C$(f,i*2|0);f.data[h]=l;f=f;i=k<0?j:k+1|0;if(i>g)break;h=n;}if(f.data.length!=n)f=C$(f,n);o=f.data;e.fG=null;e.im=B(132);e.o3=null;p=new Jq;i=o.length;if(!i)m=L2(B(31));else{m=R(Cw,i);f=m.data;g=0;while(g<i){b=new Cw;q=R(B4,1);q.data[0]=QN(o[g]);HG(b,q);f[g]=b;g=g+1|0;}}f=m.data;p.dR
=HE();p.eb=HE();p.e5=Ck();if(!f.length){b=new BA;AAG(b);J(b);}p.D=m;p.fn=0;p.cp=0;p.c0=S5(p);e.h=p;d.t2=null;T3(d);b=d.e;d.e=e;d.ev=Fq();p=ZF(Dc(d.e));if(p!==null){l=Cg(d);r=new TW;r.qQ=d;f=R(C,1);f.data[0]=F6(d.e.h);CY(l,r,p,f);}f=(Cl(d.d1.l2)).data;s=f.length;i=0;while(i<s){f[i].lx(b,e);i=i+1|0;}return c;}
function GP(){var a=this;C.call(a);a.bz=0;a.cm=0;a.c9=0;a.kp=0;}
function ASP(a,b,c,d){var e=new GP();Tj(e,a,b,c,d);return e;}
function Tj(a,b,c,d,e){a.bz=d;a.cm=b;a.c9=c;a.kp=e;}
function NU(){var a=this;GP.call(a);a.dq=null;a.bj=0;a.iB=0;a.qt=0;a.jl=0;}
function AB8(b){var c,d,e;c=b.cm;d=c&&!b.bz&&!b.c9&&!b.kp?1:0;a:{if(d){d=b.bj;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bz&&!c&&!b.c9&&!b.kp?1:0;d=d&&b.bj==46?1:0;}b:{if(!d){e=b.bj;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.jl=1;}return 0;}
var ABk=F();
function U_(b,c){return (b+(c/2|0)|0)/c|0;}
function OG(b,c,d){if(b<(2147483647/c|0))return U_(Bb(b,c),d);return 0.5+c*b/d|0;}
function KW(b,c){return ((b+c|0)-1|0)/c|0;}
function GY(b){return b+0.5|0;}
function C6(b){return b+0.5|0;}
function GW(b,c,d){return W(b,X(c,d));}
function LA(){var a=this;GP.call(a);a.n=null;a.tI=null;}
var Tc=F(0);
function MK(){var a=this;C.call(a);a.sD=null;a.sE=null;}
function AIF(a,b){var c,d;c=a.sD;d=a.sE;$rt_globals.console.info("paste plain string "+b);c.l(Fm(b));C7(d);}
function TT(){C.call(this);this.s7=null;}
function U$(a,b){a.s7.clipboardData.setData("text/plain",$rt_ustr(b));}
function VM(){var a=this;I7.call(a);a.u_=0;a.mg=0;}
var AAh=F();
function Jy(){C.call(this);this.vx=null;}
var ASM=null;var ASQ=null;function AHT(){AHT=Bo(Jy);AOS();}
function AFR(a){var b=new Jy();WY(b,a);return b;}
function WY(a,b){AHT();a.vx=b;}
function AOS(){ASM=AFR(B(133));ASQ=AFR(B(134));}
var U1=F(0);
function RD(){C.call(this);this.gY=null;}
function Fu(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gY));}
function Ej(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.gY));}
function AFg(a){var b,c;b=a.gY.byteLength;c=new M;O(c);G(S(G(c,B(135)),b),B(136));return N(c);}
var Tr=F(0);
function Kh(){var a=this;C.call(a);a.gm=null;a.eI=null;a.lb=null;}
function AAd(a,b){var c=new Kh();AHO(c,a,b);return c;}
function APq(a,b,c){var d=new Kh();M1(d,a,b,c);return d;}
function W9(b){var c,d,e,f,g,h,i,j,k;c=new Kh;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=Tz(E(UV),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=f[h];h=h+1|0;}}i=g.data;h=i.length;if(!h)j=R(Bv,0);else{j=R(Bv,h-1|0);g=j.data;h=0;k=g.length;while(h<k){g[h]=Fm(i[h]);h=h+1|0;}}}else j=R(Bv,0);M1(c,d,b,j);return c;}
function AHO(a,b,c){M1(a,b,c,R(Bv,0));}
function M1(a,b,c,d){a.gm=b;a.eI=c;a.lb=d;}
function IX(a,b){var c,d,e;c=b|0;if(c===b)return c;d=EQ(a);e=new M;O(e);G(G(e,B(137)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function EQ(a){var b;b=a.gm;return Fm(b!==null?b.name:a.eI.name);}
function AIe(a){var b,c,d,e,f;if(a.eI===null){b=a.lb;c=EQ(a);d=Ye(b);e=new M;O(e);G(G(G(e,d),B(138)),c);c=N(e);}else{b=a.lb;c=EQ(a);f=IX(a,a.eI.size);d=Ye(b);e=new M;O(e);S(G(G(G(G(e,d),B(138)),c),B(139)),f);c=N(e);}return c;}
function J1(){var a=this;J6.call(a);a.n4=null;a.mY=null;}
function XG(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.n4;e=0;f=0;g=a.mY;a:{while(true){if((e+32|0)>f&&Dz(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=X(B2(b)+j|0,i.length);MB(b,d,j,f-j|0);e=0;}if(!Dz(c)){k=!Dz(b)&&e>=f?ASD:ASC;break a;}i=g.data;j=X(B2(c),i.length);l=new MJ;l.l5=b;l.oP=c;k=ZK(a,d,e,f,g,0,j,l);e=l.rT;j=l.sV;if(k===null){if(!Dz(b)&&e>=f)k=ASD;else if(!Dz(c)&&e>=f)k=ASC;}VN(c,g,0,j);if(k!==null)break;}}Es(b,b.P-(f-e|0)|0);return k;}
var Om=F(J1);
function ZK(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(KT(h,2))break a;i=ASC;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Lg(l)){if((f+3|0)>g){j=j+(-1)|0;if(KT(h,3))break a;i=ASC;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CC(l)){i=DM(1);break a;}if
(j>=d){if(Dz(h.l5))break a;i=ASD;break a;}c=j+1|0;m=k[j];if(!CX(m)){j=c+(-2)|0;i=DM(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(KT(h,4))break a;i=ASC;break a;}k=e.data;o=Eh(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.rT=j;h.sV=f;return i;}
var HV=F(DO);
function JL(){var a=this;Cp.call(a);a.p8=null;a.e3=null;a.cL=null;a.gR=null;a.po=null;a.lj=null;}
function ARj(a){var b=new JL();WZ(b,a);return b;}
function WZ(a,b){var c,d,e,f,g,h;D9(a,b);a.p8=Og(0,0,64);a.po=new Bg;a.lj=new Bg;c=ADL(b);a.e3=c;d=new TJ;d.ki=c;d.cY=AMQ(c);c=Xc(d.ki);d.b6=c;c.f3=SF(B(130),17.0);a.gR=d;c=AQ6(a.e3,d);a.cL=c;e=a.e3;f=e.h7.dn!==(DV()).activeElement?0:1;if(f)I$(e);e.em=c;if(f)JY(e);Z(b.q.bJ,a.gR);Z(b.q.bJ,a.cL);Z(b.q.b2,new QQ);c=b.q.b2;d=new QU;d.sH=a;Z(c,d);c=b.q.b2;d=new Jl;g=a.cL;BI(g);h=new QT;h.lH=g;Un(d,b,null,h);Z(c,d);c=b.q.b2;d=a.e3;BI(d);g=new QS;g.oz=d;Z(c,g);c=b.q.f9;d=a.cL;BI(d);g=new QR;g.tr=d;Z(c,g);c=b.q.gI;d
=new QX;d.mx=a;Z(c,d);c=b.q.eR;d=new QW;d.rl=a;Z(c,d);b=b.q.eF;c=new QV;c.r9=a;Z(b,c);SN(a);}
function AEY(a,b){var c,d,e,f;c=a.cL;d=c.e.h;e=d.fn;f=d.cp;e=e!=f&&b-d.oA>0.03125?1:0;if(e&&c.kj!=f){c.kj=f;Rv(c);}e=c.bh;f=D1(c,(e+c.uj|0)-c.tN|0,EH(c));c.bh=f;e=e==f?0:1;return !RH(c.cC,b)&&!e&&!c.qe?0:1;}
function AHA(a){var b;Fe(a.bf.W,a.p8);ACg(a.cL);b=a.gR;O7(b.cY);KA(b.b6);}
function AK8(a){return ACh(0);}
function AJN(a,b,c){var d,e,f;Ki(a.e3,b,c);a.rb(b);b=a.cL;d=a.po;e=a.lj;Du(b.cq,d);Du(b.cM,e);b.cK=Cc(b.qI,c);f=Cc(10.0,c);b.kH=f;f=b.cK-f|0;Ul(b.eD,b.cq,f,b.cM.b,c);d=b.cC;f=Cc(2.0,c);d.dx.g.a=f;SV(b,b.io,b.fL);UA(b);}
function ZU(a,b){Bh(a.lj,b.a,b.b);}
function SN(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new KC;c=new Ie;Dm();NI(c,ASN);d=CT(ASR);e=CT(ASS);f=CT(AST);g=CT(ASN);h=CT(ASU);i=CT(ASV);j=CT(ASW);X8();k=(ASX.fe()).data;l=k.length;m=R(IH,l);n=m.data;o=0;while(o<l){n[o]=k[o].kv;o=o+1|0;}Mv(b,c,d,e,f,g,h,i,j,m,ABq(),Go());Uf(a,b);}
function ZS(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=new KC;c=new Ie;Dm();NI(c,ASY);d=CT(ASZ);e=CT(AS0);f=CT(AST);g=CT(ASY);h=CT(AS1);i=CT(AS2);j=CT(AS3);ABo();k=(AS4.fe()).data;l=k.length;m=R(IH,l);n=m.data;o=0;while(o<l){n[o]=k[o].k4;o=o+1|0;}p=AJj(CF(173),CF(242),CF(173),Cv(252,250,237));q=new Kb;r=new ER;s=AS5;t=AS0;EE();F4(r,s,t,s,AS6,AS7);u=new ER;s=AS5;t=AS0;v=AS6;F4(u,s,t,s,v,v);RI(q,r,u,ACb(),Bq(B(140)),ACb(),AER(1,0.07500000298023224));Mv(b,c,d,e,f,g,h,i,j,m,p,q);Uf(a,b);}
function Uf(a,b){var c;BI(b);c=a.gR;c.bq=b;WI(c.cY,b.bg);Ly(c.b6,b.bg);c=a.cL;c.d9=b;c=c.cC;b=b.ps;Bf(c.dx.M,b);}
function ACd(a,b){if(b.bj!=121)return 0;return 1;}
function XL(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=a.e3;d=a.cL;if(d!==c.em?0:1){c=a.gR;if(!DP(c.b6)){e=c.b6;f=b.n;b=new RG;b.U=c;b.bs=d;b.gU=a;g=OQ();h=b.bs.e;i=Dc(h);j=GE(h);k=b.bs.d1;if(Uz(k,i,j)!==null){h=b.U.bq.bg.Z;l=new Qk;l.ne=b;l.nd=f;DW(g,B(141),h,l);}if(J2(k,i,j)!==null){m=b.U.bq.bg.Z;l=new Qj;l.og=b;l.oi=f;DW(g,B(142),m,l);}if(Mz(k,i,j)!==null){i=b.U.bq.bg.Z;j=new Qh;j.mK=b;j.mL=f;DW(g,B(143),i,j);}i=b.U.bq.bg.Z;j=new Qi;j.tm=b;j.tn=f;DW(g,B(144),i,j);if(!b.bs.e4){i=b.U.bq.bg.Z;j=new Ox;j.r$=
b;DW(g,B(145),i,j);}i=b.U.bq.bg.Z;j=new Ov;j.pc=b;DW(g,B(146),i,j);if(!b.bs.e4&&Wq(H5(b))){i=b.U.bq.bg.Z;j=new Oy;j.rm=b;DW(g,B(147),i,j);}m=b.U.bq.bg.Z;h=OQ();j=b.U.bq.bg.Z;n=R(Dx,2);o=n.data;p=b.gU;BI(p);q=new RA;q.ni=p;o[0]=D_(B(148),j,q);p=b.U.bq.bg.Z;q=b.gU;BI(q);r=new RB;r.qf=q;o[1]=D_(B(149),p,r);Eq(h,B(150),j,GU(n));j=b.U.bq.bg.Z;n=R(Dx,2);o=n.data;p=b.bs;BI(p);q=new Ne;q.qE=p;o[0]=D_(B(151),j,q);p=b.U.bq.bg.Z;q=b.bs;BI(q);r=new Nd;r.pv=q;o[1]=D_(B(152),p,r);Eq(h,B(153),j,GU(n));j=b.U.bq.bg.Z;l=new T7;l.p7
=b;Eq(h,B(154),j,l);Eq(g,B(155),m,G6(h));k=b.U.bq.bg.Z;m=OQ();Eq(m,B(156),b.U.bq.bg.Z,ACw(b));h=b.U.bq.bg.Z;i=new U2;i.rv=b;DW(m,B(157),h,i);Eq(g,B(158),k,G6(m));Hl(e,f,G6(g),II(c,d));}}return 1;}
function Xw(){var a=this;Cp.call(a);a.kB=null;a.c5=null;a.f$=null;a.eW=null;a.gT=null;a.tD=null;a.gF=null;a.p3=null;a.ln=null;a.tY=null;a.u2=null;a.fH=null;a.jb=null;a.pk=0;}
function APC(a){var b=new Xw();AIW(b,a);return b;}
function AIW(a,b){var c,d,e,f,g,h,i;D9(a,b);c=new B3;Dm();AAo(c,ASN);a.kB=c;a.c5=E1(0,0,300,300);a.f$=Rt(0,0,3,3);a.eW=E1(0,0,300,300);a.gT=AJ$();d=R(Bv,4);e=d.data;e[0]=B(159);e[1]=B(160);e[2]=B(161);e[3]=B(162);a.tD=d;a.gF=R(H4,e.length);f=b.W;c=b.q.bJ;g=new SI;g.eU=a;Z(c,g);c=b.q.b2;g=new Qt;g.tt=a;Z(c,g);c=b.q.lB;g=new Qs;g.nD=a;Z(c,g);c=b.q.f9;g=new Qw;g.vv=a;Z(c,g);c=b.q.iV;g=new Qu;g.tQ=a;Z(c,g);c=b.q.eF;g=new Qr;g.uV=a;Z(c,g);b=b.q.eR;c=new Qq;c.rU=a;Z(b,c);h=CI(a.bf.W,300,300);c=h.bn;b="white";c.fillStyle
=b;b=h.bn;c="white";b.strokeStyle=c;b=h.bn;c=10.0;b.lineWidth=c;h.bn.strokeRect(75.0,140.0,150.0,110.0);h.bn.fillRect(130.0,190.0,40.0,60.0);h.bn.beginPath();h.bn.moveTo(50.0,140.0);h.bn.lineTo(150.0,60.0);h.bn.lineTo(250.0,140.0);h.bn.closePath();h.bn.stroke();FN(h,B(163),11.0);KD(h,187,187,187);Ol(a,B(164),h);b=CR(a.bf.W);CL(b,h);FB(h);a.p3=b;F7(a.c5,b);GI(a.c5);Bf(a.c5.S,ASN);Bf(a.c5.M,Cv(204,120,50));b=CI(f,255,100);a.fH=b;FN(b,B(130),11.0);b=Bx();i=$rt_str(a.fH.bn.font);g=new M;O(g);G(G(g,B(165)),i);Bu(b,
N(g));Ee(a.fH,B(166));KD(a.fH,169,183,198);Ol(a,B(166),a.fH);b=CR(f);a.ln=b;CL(b,a.fH);F7(a.eW,a.ln);GI(a.eW);FY(a.eW,CF(255));Hf(a.eW,ASN);a.tY=CR(f);Bf(a.f$.S,a.kB);}
function Ol(a,b,c){Ce(c,b,0.0,20.0);Ce(c,b,0.25,40.0);Ce(c,b,0.5,60.0);Ce(c,b,0.75,80.0);}
function VF(a,b){IT(Ff(),0.5+Ff()*0.5,0.5+Ff()*0.5,1.0,b.M);}
function AC_(a,b){var c;a.pk=a.pk+1|0;c=b/5.0;IT(c-(c|0),1.0,1.0,1.0,a.f$.M);return RH(a.gT,b);}
function AF6(a){var b,c,d,e,f,g;b=a.bf.W;Fe(b,a.kB);c=a.gF.data;d=c.length;e=0;while(e<d){Gv(c[e],b,0,0);e=e+1|0;}CK(a.c5,b,a.p3,0,0,0.5);f=a.ln;d=0;while(d<7){g=a.eW;CK(g,b,f,Bb(d,10+((10*g.g.a|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.u2;if(g!==null)S4(a.f$,b,g,0,0,0.0);T2(a.gT,b,new Bg);MV(b,B(167));}
function AL$(a,b,c){var d,e,f,g,h,i,j,k,l;d=Bx();e=Ct(b);f=new M;O(f);G(G(f,B(168)),e);Bu(d,N(f));g=Bx();d=new M;O(d);E6(G(d,B(169)),c);Bu(g,N(d));h=Cc(30.0,c);i=Cc(10.0,c);j=0;while(true){k=a.gF.data;if(j>=k.length)break;l=1+j|0;k[j]=Rt(Bb(i,l)+Bb(h,j)|0,h,h,h);VF(a,a.gF.data[j]);j=l;}Bh(a.f$.s,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.c5;g=d.s;h=b.a;d=d.g;Bh(g,(h-d.a|0)/2|0,(b.b-d.b|0)/2|0);d=a.eW;d.s.b=b.b-d.g.b|0;}
function NY(a,b){var c,d,e,f,g;c=Bx();d=!b.iB?B(170):B(171);e=b.dq;f=b.bj;g=b.qt;b=new M;O(b);FQ(G(S(G(G(G(b,d),e),B(172)),f),B(173)),g);Bu(c,N(b));return 0;}
function DR(){var a=this;Cp.call(a);a.f1=null;a.bc=null;}
function Hp(a,b){var c,d;D9(a,b);a.f1=Og(0,0,64);a.bc=ADL(b);Z(b.q.b2,new Q8);b=b.q.b2;c=a.bc;BI(c);d=new Q9;d.qT=c;Z(b,d);}
function G4(a){Fe(a.bf.W,a.f1);}
function H1(a,b,c){Ki(a.bc,b,c);}
var DS=F(0);
function U4(){var a=this;DR.call(a);a.qc=null;a.dj=null;a.cA=null;a.dN=null;a.qW=null;}
function ANx(a,b,c){var d;d=HW(a.bc,a.qW);HA(a.dj,d);HA(a.cA,d);GC(a.dj,a.bc);GC(a.cA,a.bc);}
function MI(b){return Im(b,AM2());}
function Im(b,c){var d;d=OQ();JK(d,J0(b,HY(c,25)),!b?null:Im(b-1|0,c));JK(d,J0(b,HY(c,20)),!b?null:Im(b-1|0,c));JK(d,J0(b,HY(c,15)),!b?null:Im(b-1|0,c));JK(d,J0(b,HY(c,10)),!b?null:Im(b-1|0,c));return G6(d);}
function J0(b,c){var d;if(b){d=new M;O(d);G(G(S(d,b),B(36)),c);c=N(d);}return c;}
function JK(b,c,d){var e,f;e=new G0;f=IT(Ff(),1.0,1.0,1.0,new B3);EE();K_(e,f,AS8,AS9);if(d!==null)Eq(b,c,e,d);else{d=new Td;d.rW=c;DW(b,c,e,d);}}
function AFC(a,b,c){var d,e;H1(a,b,c);b=a.bc.cD;d=DZ(a.dj);e=DZ(a.cA);Jb(a.dj,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);Jb(a.cA,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AGj(a){var b,c,d,e,f,g,h,i;G4(a);b=a.bf.W;Cu(b,1);c=a.qc;d=a.bc;e=d.cD;Bh(c.k_,e.a,Cc(2.0,d.bH));Bh(c.jy,Cc(2.0,d.bH),e.b);EE();f=AS$;g=d.c4;h=e.b/2|0;i=c.k_;BJ(g,0,h-(i.b/2|0)|0,i,f);g=d.c4;h=e.a/2|0;c=c.jy;BJ(g,h-(c.a/2|0)|0,0,c,f);IY(a.dj,a.bc);IY(a.cA,a.bc);KA(a.dN);Cu(b,0);}
function ALu(a,b){var c,d,e;c=JJ(a.dN,b);d=Jw(a.dj,b.n,a.bc.cr);e=Jw(a.cA,b.n,a.bc.cr);return !c&&!d&&!e?0:1;}
function AHe(a,b,c){return I9(a.dN,b,c);}
function AEe(a,b,c){return DP(a.dN);}
function AKM(a,b,c,d){var e,f,g;e=IJ(a.dN,b,c,d);f=Jo(a.dj,b.n,c,d);g=Jo(a.cA,b.n,c,d);return !e&&!f&&!g?0:1;}
function We(){DR.call(this);this.dV=null;}
function DI(b,c,d,e){var f,g,h,i;f=new ER;Dm();g=ASO;h=ASS;EE();F4(f,g,h,g,AS_,AS7);i=new Sw;i.mB=c;i.mC=d;i.mz=e;KM(b,c,d,e,f,i);}
function AET(a,b,c){var d,e;H1(a,b,c);d=a.dV;e=UP(d.b5);V_(d.b5,(b.a-e.a|0)/2|0,(b.b-e.b|0)/2|0);}
function AK5(a){var b;G4(a);b=a.bf.W;Cu(b,1);O7(a.dV);Cu(b,0);}
function AMe(a,b){return PI(a.dV,b.n);}
function AH$(a,b,c,d){return Pj(a.dV,b.n,c,d);}
function SZ(a,b){var c,d,e,f;c=a.dV;d=AKQ();DI(d,B(174),B(175),B(176));DI(d,B(174),B(177),B(178));DI(d,B(174),B(179),B(180));DI(d,B(181),B(182),B(183));DI(d,B(174),B(184),B(176));DI(d,B(185),B(186),B(176));DI(d,B(187),B(188),B(176));DI(d,B(189),B(188),B(176));DI(d,B(190),B(188),B(176));DI(d,B(191),B(188),B(176));e=Pw(d);f=new Pm;f.uO=a;OI(c,b,e,f);}
function WS(){var a=this;DR.call(a);a.hz=null;a.fl=null;a.eK=null;a.iL=null;a.nK=null;a.hP=null;a.fw=null;a.fh=null;a.iG=0;a.fI=0;}
function Vx(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=0;while(c<b){if(a.fl.j>0){a:{d=Ff();e=a.fl;f=d*(e.j-1|0)|0;e=Ec(e,f);Ec(a.eK,f);f=a.fI;g=e.g;a.fI=f-Bb(g.a,g.b)|0;g=a.hz;h=ARc(e.bP);e=g.fp;if(e.j>0){e=BR(e);while(true){if(!B1(e))break a;i=BV(e);if(i.bt===h.bt){j=i.bd;k=i.bk;l=j+k;m=h.bd;if(l===m){h.bd=j;h.bk=h.bk+k;PG(e);}else{l=h.bk;if(m+l===j){h.bk=l+k;PG(e);}}}}}}BW(g.fp,h);}c=c+1|0;}}
function JG(a,b){var c,d,e,f,g,h,i,j;c=K3(a.bc);CB(c,a.iL);d=0;while(d<b){e=HY(a.hP,1+(Ff()*19.0|0)|0);f=J9();g=f.bP;h=a.hz;BI(c);i=new P9;i.n8=c;Bf(g,GZ(h,e,i));(GO(Ff(),1.0,1.0,f.S)).bu=0.5;h=f.s;g=f.bP;Bh(h,g.bd|0,g.bt|0);h=f.g;g=f.bP;Bh(h,g.bk|0,g.bu|0);BW(a.eK,e);BW(a.fl,f);j=a.fI;h=f.g;a.fI=j+Bb(h.a,h.b)|0;d=d+1|0;}a.fh=Wk(a.hz);}
function ACY(a,b,c){H1(a,b,c);Ki(a.bc,b,c);}
function ALD(a){var b,c,d,e,f,g,h,i;G4(a);b=a.bf.W;Cu(b,1);c=a.bc.c4;if(a.eK.j){d=a.fh;d=CI(c,d.a,d.b);CB(d,a.iL);e=a.iL.dg;BJ(c,0,0,a.fh,a.nK);f=0;while(f<a.eK.j){g=Bs(a.fl,f);h=Bs(a.eK,f);g=g.bP;Ce(d,h,g.bd,g.bt+e);f=f+1|0;}g=a.fw;if(!(g!==null&&B_(g)==a.fh.a&&C0(a.fw)==a.fh.b))a.fw=CJ(a.fw,CR(c));CL(a.fw,d);FB(d);i=0;while(i<a.eK.j){d=Bs(a.fl,i);FY(d,CF(0));CK(d,c,a.fw,0,0,0.0);i=i+1|0;}}Cu(b,0);}
function AFe(a,b){var c,d;if(a.iG){c=a.fh;d=X(Bb(c.a,c.b),2211840);if(a.fI/d<=0.7)JG(a,HO(a.hP,5));else Vx(a,HO(a.hP,5));}return a.iG;}
function Ob(){var a=this;Cp.call(a);a.dG=null;a.fD=null;a.gt=null;a.kb=null;a.dF=0;a.qH=0;a.sO=null;a.la=0;a.s5=0;a.rE=null;a.nE=null;}
function ADq(a){var b,c;b=a.dF;c=new M;O(c);S(G(c,B(192)),b);$rt_globals.console.info($rt_ustr(N(c)));Fe(a.dG,a.sO);HZ(a.gt,a.dF,0,FW(a),5000,a.kb.a,20);Cu(a.dG,1);OX(a.gt,a.dG);Cu(a.dG,0);b=a.dF;c=new M;O(c);S(G(c,B(192)),b);$rt_globals.console.info($rt_ustr(N(c)));Wz(a.fD,a.dF/a.la|0);S8(a.fD,a.dF,FW(a),a.nE,a.dG);}
function ANh(a,b,c){a.kb=b;Ul(a.fD,Cf(0,0),50,FW(a),c);Je(a.fD,a.dG,0,FW(a));}
function OP(a){return 5000-FW(a)|0;}
function FW(a){return X(a.qH,a.kb.b);}
function C3(){var a=this;Cp.call(a);a.kZ=null;a.gg=null;a.tR=0.0;}
function ATa(a){var b=new C3();Ga(b,a);return b;}
function Ga(a,b){D9(a,b);a.kZ=Og(0,0,64);a.gg=new Bg;MC(b.bY,HB(Cy(a)));}
function Q3(a){Fe(a.bf.W,a.kZ);}
function Ry(a,b,c){Du(a.gg,b);a.tR=c;}
var PK=F(C3);
var AB9=F(C3);
function AQX(a){var b=new AB9();AKm(b,a);return b;}
function AKm(a,b){var c,d,e,f,g,h;Ga(a,b);c=b.bY;d=new P8;d.up=a;e=R(C,1);e.data[0]=B(193);CY(c,d,B(194),e);f=b.bY;g=new P7;g.wd=a;h=R(C,1);h.data[0]=Ze([1,2,3,4,5]);CY(f,g,B(195),h);f=b.bY;g=new P6;g.nB=a;h=R(C,1);h.data[0]=AQg([1,2,3,4,5]);CY(f,g,B(196),h);f=b.bY;g=new P5;g.t9=a;h=R(C,1);h.data[0]=ES([1,2,3,4,5]);CY(f,g,B(197),h);f=b.q.b2;d=new Jl;g=new P3;g.vg=a;c=new P2;c.o_=a;Un(d,b,g,c);Z(f,d);}
function To(a,b){var c,d,e,f,g,h;c=b.data;d=Bx();e=Ct(c[0]);f=new M;O(f);G(G(f,B(198)),e);Bu(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((QJ(b,1)).gY));d=Bx();e=Ct(c[1]);if(b===null)f=B(29);else{f=new M;O(f);BX(f,B(42));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BX(f,B(43));S(f,c[g]);g=g+1|0;}BX(f,B(44));f=N(f);}h=new M;O(h);G(G(G(G(h,B(199)),e),B(200)),f);Bu(d,N(h));}
function VI(){var a=this;C3.call(a);a.dv=null;a.ez=null;a.jO=null;a.oE=null;a.kQ=null;}
function AIw(a,b){b=b/5.0;IT(b-(b|0),1.0,1.0,1.0,a.ez.M);return 0;}
function AC5(a){Q3(a);CK(a.dv,a.bf.W,a.oE,0,0,0.5);S4(a.ez,a.bf.W,a.jO,0,0,0.0);MV(a.bf.W,B(167));}
function AK3(a,b,c){var d,e,f;Ry(a,b,c);Bh(a.ez.s,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.dv;e=d.s;f=b.a;d=d.g;Bh(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Q5(){var a=this;C3.call(a);a.fZ=null;a.qm=null;a.jp=null;a.hQ=null;a.g_=null;}
function AOB(a){var b,c,d,e,f,g;Q3(a);b=a.bf.W;c=a.hQ;T0(b,c.a,c.b,a.g_);b=a.fZ;c=a.qm;d=a.gg;e=a.bf.W;f=0;while(true){g=0;while(true){CK(b,e,c,g,f,0.5);g=g+B_(c)|0;if(g>=d.a)break;}f=f+C0(c)|0;if(f>=d.b)break;}UL(a.bf.W);}
function AEJ(a,b,c){Ry(a,b,c);Bh(a.g_,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function NM(){var a=this;Cp.call(a);a.dP=null;a.ji=null;a.eT=null;a.bX=null;a.eg=0;a.hj=null;a.ei=0;a.uW=20;a.wq=11;a.uC=220;a.is=null;a.vm=5000;a.gj=0;a.e8=null;}
function AOE(a){var b,c,d,e,f,g,h;b=a.hj;c=a.ei;d=a.is;HZ(b,c,0,d.b,5000,d.a,20);Cu(a.dP,1);OX(a.hj,a.dP);if(a.bX===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Ce(a.ji,Dd(e),0.0,c);}b=CR(a.dP);a.bX=b;CL(b,a.ji);}if(a.ei<=a.eg)while(true){f=a.eg;if(f<=a.ei)break;a.eg=f-20|0;b=a.eT;g=a.gj-1|0;a.gj=g;Ce(b,Dd(g),0.0,20.0);Hx(a.bX,a.eT,0,a.eg%220|0);Ek(a.eT);}else while(a.eg<(a.ei-20|0)){b=a.eT;g=a.gj+1|0;a.gj=g;Ce(b,Dd((g+11|0)-1|0),0.0,20.0);Hx(a.bX,a.eT,0,a.eg%220|0);Ek(a.eT);a.eg=a.eg+20|0;}b=E1(0,0,B_(a.bX),C0(a.bX));Hi(b,
0,0,B_(a.bX),C0(a.bX));FY(b,a.e8.data[0]);Hf(b,a.e8.data[1]);CK(b,a.dP,a.bX,400,0,1.0);g=a.ei%220|0;f=X(C0(a.bX)-g|0,200);d=E1(0,0,B_(a.bX),f);Hi(d,0,g,B_(a.bX),f);FY(d,a.e8.data[0]);Hf(d,a.e8.data[1]);CK(d,a.dP,a.bX,0,0,1.0);h=E1(0,f,B_(a.bX),(C0(a.bX)-f|0)-20|0);Hi(h,0,0,B_(a.bX),(C0(a.bX)-f|0)-20|0);FY(h,a.e8.data[1]);Hf(h,a.e8.data[0]);CK(h,a.dP,a.bX,0,0,1.0);}
function AGK(a,b,c){Du(a.is,b);}
function AFk(a,b){return 0;}
function QD(a){return 5000-a.is.b|0;}
function H0(){C3.call(this);this.dk=0;}
function PZ(a){var b,c;b=a.bf.bY;c=new Pe;c.l9=a;PJ(b,c,Ql(a));}
function LI(a){var b,c,d,e;b=a.dk+1|0;a.dk=b;c=HB(E(H0));d=new M;O(d);G(G(S(G(d,B(201)),b),B(36)),c);e=N(d);c=a.bf.bY;d=new S7;d.oR=e;Ti(c,e,d,Ql(a));}
function Ql(a){var b;b=new UD;b.nG=a;return b;}
function AL3(a,b,c,d){a:{switch(c){case 0:break;case 2:LI(a);break a;default:break a;}PZ(a);}return 1;}
function O5(){var a=this;Cp.call(a);a.mO=null;a.eM=null;a.kR=null;a.hA=null;}
function AOw(a){var b;b=a.bf.W;Fe(b,a.mO);CK(a.eM,b,a.kR,0,0,0.5);}
function AJo(a,b,c){var d,e,f;d=a.eM;e=d.s;f=b.a;d=d.g;Bh(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Vh(){var a=this;DR.call(a);a.fm=null;a.dJ=null;a.iC=null;a.iD=null;a.rD=null;}
function AHH(a,b,c){if(b===0.0)MO(a);}
function AOW(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;G4(a);b=a.bf.W;c=a.dJ;d=c.cE.j-1|0;while(d>=0){e=Bs(c.cE,d);e.z.hK(b);f=e.bi;g=e.gh;if(!KY(f)){if(!SP(f)&&!(!f.go&&f.c1!==null)){f.go=0;PM(f);h=f.dB;i=(h.dg+h.dY+5.0)/10.0;j=Dj(f.gw,f.ii);h=b.cw;k=f.dB;l=f.gA;m=i*2.0;CB(h,k);n=j+JX(h,l,m)|0;f.hg=n;n=X(n,f.t.a);if(n){h=CI(b,n,f.t.b);CB(h,f.dB);k=f.gA;o=j;p=o+i;l=f.dB;i=l.dg;Ce(h,k,p,o+i-(i+l.dY)/16.0);k=f.c1;if(k===null){k=CR(b);f.c1=k;}CL(k,h);FB(h);CD(f.kV,0.0,0.0,B_(f.c1),C0(f.c1));}}h=g.Z.fr;k=f.c1;if(k
===null)Oi(f,b,0,f.t.a,h);else{n=B_(k);g=g.Z.iW;k=f.I;j=k.a;q=k.b;k=f.c1;Hy(b,j,q,k.e_,f.kV,k,g,h,0.0);j=f.t.a;if(n<j)Oi(f,b,n,j-n|0,h);}}Cu(b,1);n=Dj(e.bl,2.0);j=KY(e.bi);g=e.bl;f=g.jB;g=g.no;q=j?0:e.bi.t.b;h=e.z.t;Bh(g,h.a,h.b+q|0);UX(b,g,!j?e.bi.I:e.z.I,e.gh.iA, -n|0,f);g=e.z;TP(b,g.t,g.I,n,q,JI(e.gh.g3,e.bl.bH),e.gh.g3.iU,f);d=d+(-1)|0;}KA(a.fm);}
function MO(a){Vv(a,a.iC);Vv(a,a.iD);a.iC=Ma(a,0.5,0,B(202));a.iD=Ma(a,1.0,1,B(203));Wi(a.dJ,a.iC);Wi(a.dJ,a.iD);VT(a);}
function Vv(a,b){var c;if(b!==null){US(a.dJ.cE,b);c=b.bi;c.c1=CJ(c.c1,null);b.z=CJ(b.z,null);}}
function Ma(a,b,c,d){var e,f,g,h;e=new WL;f=a.bc;e.z=APy();e.bl=f;g=new Sj;KG(g);g.kV=new B3;g.gw=f;e.bi=g;g=new UR;h=new Ot;h.rG=a;h.rH=e;h.rF=d;KG(g);g.dh=new Bg;g.cN=new Bg;g.hs=new B3;g.kD=new Bg;g.qU=h;g.oO=b;if(c){h=new Pb;f=a.bc;KG(h);d=new SW;d.m8=h;h.qj=d;d=new SX;d.p9=h;h.sm=d;h.q_=10.0;h.cf=g;h.kJ=f.cr;g=h;}d=e.z;h=d.I;f=d.t;d=CJ(d,g);e.z=d;d.il(h,f,e.bl.bH);e.gh=Go();return e;}
function ALl(a,b,c){var d,e;H1(a,b,c);b=a.dJ;d=0;while(true){e=b.cE;if(d>=e.j)break;Bs(e,d);d=d+1|0;}VT(a);}
function VT(a){var b;b=a.bc.cD;Et(a.iD,Cf((b.a*2|0)/10|0,(b.b*2|0)/10|0),Cf((b.a*7|0)/10|0,(b.b*7|0)/10|0));Et(a.iC,Cf(b.a/10|0,b.b/10|0),Cf((b.a*6|0)/10|0,(b.b*6|0)/10|0));}
function AIs(a,b){var c,d,e,f;c=a.dJ;d=0;e=0;while(true){f=c.cE;if(e>=f.j)break;Bs(f,e);d=0|d;e=e+1|0;}return d;}
var P4=F(JL);
function AHM(a){return ACh(1);}
function AEP(a,b){ZU(a,b);}
var Iq=F(0);
function Lu(){var a=this;C.call(a);a.ig=null;a.hO=null;}
function LF(a,b){var c;c=a.hO;a.hO=b;return c;}
function IN(){var a=this;Lu.call(a);a.bG=null;a.bU=null;a.e7=0;a.ff=0;}
function I2(a){var b;b=J7(a);if(b==2){if(J7(a.bU)<0)a.bU=Mi(a.bU);return NJ(a);}if(b!=(-2))return a;if(J7(a.bG)>0)a.bG=NJ(a.bG);return Mi(a);}
function J7(a){var b,c;b=a.bU;c=b===null?0:b.e7;b=a.bG;return c-(b===null?0:b.e7)|0;}
function Mi(a){var b;b=a.bG;a.bG=b.bU;b.bU=a;D8(a);D8(b);return b;}
function NJ(a){var b;b=a.bU;a.bU=b.bG;b.bG=a;D8(a);D8(b);return b;}
function D8(a){var b,c,d;b=a.bU;c=b===null?0:b.e7;b=a.bG;d=b===null?0:b.e7;a.e7=W(c,d)+1|0;a.ff=1;b=a.bG;if(b!==null)a.ff=1+b.ff|0;b=a.bU;if(b!==null)a.ff=a.ff+b.ff|0;}
var ABS=F();
function AD6(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new N8;c=c.buffer;d.e6=c;d.lv=new $rt_globals.Int8Array(c);d.jj=new $rt_globals.Uint16Array(c);d.re=new $rt_globals.Int32Array(c);d.or=new $rt_globals.Float32Array(c);d.oC=new $rt_globals.Float64Array(c);e=d.e6.byteLength;c=new M;O(c);S(G(c,B(204)),e);CE(N(c));e=b.callToCpp1();c=new M;O(c);S(G(c,B(205)),e);CE(N(c));f=b.callToCpp2();c=new M;O(c);E6(G(c,B(206)),f);CE(N(c));c=L6(d,b.getC8String());g=new M;O(g);G(G(g,B(207)),c);CE(N(g));c
=Md(d,b.getC16String());g=new M;O(g);G(G(g,B(208)),c);CE(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.e6,h,8));c=AAD(i);g=new M;O(g);G(G(g,B(209)),c);CE(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.e6,h,8));c=AMn(j);g=new M;O(g);G(G(g,B(210)),c);CE(N(g));k=Y0(d,b.getCDoubleArray8(),8);l=AOY(k);c=new M;O(c);G(G(c,B(211)),l);CE(DE(c));l=AOL(b.getC8String(),B(212),d);c=KZ();G(G(c,B(213)),l);CE(DE(c));l=AJc(b.getC16String(),B(214),
d);c=KZ();G(G(c,B(215)),l);CE(DE(c));c=AKY(i,d,b.getCIntArray8(),ES([11,22,33,44,55,66,77,88]));g=KZ();G(G(g,B(216)),c);CE(DE(g));c=AMC(j,d,b.getCFloatArray8(),100,ES([111,222,333,444,555,666,777,888]));g=KZ();G(G(g,B(217)),c);CE(DE(g));b=AMT(k,d,b.getCDoubleArray8(),1000,ES([1111,2222,3333,4444,5555,6666,7777,8888]));c=KZ();G(G(c,B(218)),b);CE(DE(c));}
function AMC(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(219);h=0;i=e;a:{while(h<g){if(C6(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.or[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(220);}return B(221);}
function AMT(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(219);h=0;i=e;a:{while(h<g){if(GY(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.oC[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(220);}return B(221);}
function AKY(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(219);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.re[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(220);}return B(221);}
function AOL(b,c,d){var e,f,g,h;e=L6(d,b);if(!Bt(c,e))return B(222);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.lv[h])return B(223);f=f+1|0;}return B(220);}
function AJc(b,c,d){var e,f,g,h;e=Md(d,b);if(!Bt(c,e))return B(222);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.jj[h>>>1|0]&65535))return B(223);f=f+1|0;}return B(220);}
function CE(b){N4(B(2),b);}
function AIf(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
var XO=F(0);
function Og(b,c,d){return Hg(b,c,d,255,new B3);}
function WV(b,c,d,e){return Hg(b,c,d,e,new B3);}
function Hg(b,c,d,e,f){CD(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function GO(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bd=g+i;e.bt=h+i;e.bk=j+i;return e;}
function IT(b,c,d,e,f){f=GO(b,c,d,f);f.bu=e;return f;}
function Gn(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function ACp(){var a=this;C.call(a);a.c4=null;a.h7=null;a.cD=null;a.cr=null;a.bH=0.0;a.em=null;a.dz=null;a.jB=null;a.no=null;}
function ADL(a){var b=new ACp();AEm(b,a);return b;}
function AEm(a,b){var c,d;a.cD=new Bg;a.dz=CG(R(DS,0));a.jB=new Bg;a.no=new Bg;a.c4=b.W;c=b.bY;a.h7=c;a.cr=Tv(c);c=b.q.jA;d=new LL;d.mP=a;Z(c,d);b=b.q.iV;c=new LM;c.pt=a;Z(b,c);}
function Ki(a,b,c){var d,e,f,g;a:{Du(a.cD,b);d=a.bH;if(d!==c){a.bH=c;e=(Cl(a.dz)).data;f=e.length;g=0;while(true){if(g>=f)break a;e[g].fa(d,c);g=g+1|0;}}}}
function L8(a,b){var c;c=a.em;return c!==null&&c.gz(b)?1:0;}
function JY(a){var b;b=a.em;if(b!==null)b.rh();}
function I$(a){var b;b=a.em;if(b!==null)b.tq();}
function Ln(a,b){I$(a);a.em=b;JY(a);}
function Px(a,b){if(a.em===b)a.em=null;}
function K3(a){return a.c4.cw;}
function HW(a,b){return FH(a.c4,b.hY,Cc(b.ho,a.bH));}
function Dj(a,b){return Cc(b,a.bH);}
function TJ(){var a=this;C.call(a);a.ki=null;a.cY=null;a.b6=null;a.bq=null;}
function ALF(a,b){return !PI(a.cY,b.n)&&!JJ(a.b6,b)?0:1;}
function AO6(a,b,c,d){return !Pj(a.cY,b.n,c,d)&&!IJ(a.b6,b,c,d)?0:1;}
function AOO(a,b,c){return !Fz(a.cY)&&!I9(a.b6,b,c)?0:1;}
function AKb(a,b,c){return !Fz(a.cY)&&!DP(a.b6)?0:1;}
function Ro(a,b,c,d){var e;e=ZX(a.cY,c,null,d);F2(a.cY);OI(a.cY,b,e,II(a,d));}
function II(a,b){var c;c=new Ug;c.m0=a;c.mZ=b;return c;}
function Xv(b){var c;c=new Sc;c.nu=b;return c;}
var Hq=F(0);
function AFa(a){}
function APb(a){}
function Y1(){var a=this;C.call(a);a.d3=null;a.Q=null;a.gH=null;a.qe=0;a.k3=null;a.cC=null;a.y=0;a.x=0;a.gM=0;a.ko=0;a.fL=0;a.io=null;a.dW=null;a.cv=null;a.X=0;a.e=null;a.d1=null;a.p=null;a.fg=null;a.d9=null;a.lz=null;a.f_=null;a.sn=0;a.qO=0;a.qI=0;a.cK=0;a.jD=0;a.kH=0;a.jX=null;a.eB=null;a.ex=null;a.bh=0;a.cl=0;a.gS=0;a.hB=0;a.hq=0;a.uj=0;a.tN=0;a.iN=0;a.kg=0;a.eD=null;a.cq=null;a.cM=null;a.hn=0;a.hm=0;a.es=null;a.e4=0;a.hN=null;a.hD=null;a.t2=null;a.gy=null;a.kj=0;a.qb=null;a.gZ=null;a.ev=Ed;a.fS=null;a.rY
=null;a.sh=null;}
function AQ6(a,b){var c=new Y1();AHF(c,a,b);return c;}
function AHF(a,b,c){var d,e,f;a.qe=0;a.k3=R(Bi,10);a.cC=AJ$();a.fL=16;a.io=B(120);a.cv=R(Kj,4);d=new KQ;d.h=ALf();d.im=B(160);d.fG=null;a.e=d;d=new UN;d.mD=CG(R(Lr,0));d.rt=CG(R(Lr,0));d.rM=CG(R(LP,0));d.nF=CG(R(O6,0));d.l2=CG(R(H3,0));d.qg=CG(R(Qa,0));a.d1=d;a.p=AKC();e=new Mx;e.eo=R(IE,16);e.eq=0;e.c6=(-1);a.fg=e;a.f_=R(EG,0);a.qI=100;a.jD=1;a.jX=Cf(1,0);a.eB=G5();a.ex=G5();a.bh=0;a.cl=0;a.gS=0;a.hq=1;a.iN=1;a.kg=3;a.eD=AJm();a.cq=new Bg;a.cM=new Bg;a.es=B(224);a.e4=0;a.hN=null;a.hD=Ck();e=KR();BI(e);d=new TG;d.wg
=e;a.gy=d;a.qb=new B3;a.gZ=new Bg;e=new TF;e.p2=a;a.rY=e;e=new TB;e.m3=a;a.sh=e;a.d3=b;a.Q=b.c4;a.gH=c;f=a.k3.data;b=new TA;b.rX=a;f[0]=b;b=new TD;b.qn=a;f[1]=b;b=new TC;b.ng=a;f[2]=b;b=new T5;b.sf=a;f[3]=b;AC8();a.hB=ATb===ATc?0:1;}
function AF0(a){a.ko=1;KP(a);}
function AEK(a){a.ko=0;}
function KP(a){Q_(a.cC,IO(Cg(a)));}
function Ko(a,b,c){if(a.d3.bH!==0.0){SV(a,b,c);FP(Cg(a));}a.fL=c;a.io=b;}
function SV(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=Cc(c,a.d3.bH);e=a.dW;f=e!==null?e.n3:0;if(!(d==f&&D$(b,a.io))){g=a.eD;Jh(g.cu,new Qp);G9(g.cu);g.ej=CJ(g.ej,null);g.e0=CJ(g.e0,null);h=a.f_.data;c=h.length;f=0;while(f<c){Pn(h[f]);f=f+1|0;}h=a.e.h.D.data;c=h.length;f=0;while(f<c){D4(h[f]);f=f+1|0;}h=a.cv.data;i=G1(0,0);e=a.Q;j=d;h[i]=Fn(e,b,j,400,0);a.cv.data[G1(0,1)]=Fn(a.Q,b,j,400,2);a.cv.data[G1(1,0)]=Fn(a.Q,b,j,700,0);a.cv.data[G1(1,1)]=Fn(a.Q,b,j,700,2);e=a.cv.data[G1(0,0)];a.dW=e;f=FE(e);a.X=C6(f*1.25);a.cC.dx.g.b
=FE(a.dW);a.lz=CJ(a.lz,CI(a.Q,1024,a.X));e=a.gH.cY;k=a.Q;g=a.dW;l=g.nf;if(26.0<l)l=26.0;RF(e,Fn(k,b,l,g.ns,g.oW));i=a.X;m=Rs(a.cC);e=new M;O(e);b=G(G(e,B(225)),b);BB(b,32);S(G(S(G(S(G(S(b,d),B(226)),f),B(129)),i),B(227)),m);$rt_globals.console.info($rt_ustr(N(e)));if(ATd){c=Kp(a.dW,a.X);b=new M;O(b);S(G(b,B(228)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.gM=GF(Fd(a),a.x,a.Q.cw,a.cv);Gz(a);UA(a);}}
function TY(a){return Bb(CA(a.e.h)+5|0,a.X);}
function EH(a){return W(TY(a)-a.cM.b|0,0);}
function F8(a){return W(a.gS-DG(a)|0,0);}
function DG(a){return a.cM.a-a.cK|0;}
function Dv(a){return a.cM.b;}
function ACg(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b=KW(a.cM.b,a.X)+7|0;c=a.f_;if(c.data.length<b)a.f_=YP(b,c,a.sn,a.qO,a.e.h);Cu(a.Q,0);d=a.jX;d.b=a.cM.b;d.a=a.jD;e=a.Q;f=a.cq;BJ(e,(f.a+a.cK|0)-a.kH|0,f.b,d,a.d9.ry);d=a.jX;b=a.kH;g=a.jD;d.a=b-g|0;e=a.Q;f=a.cq;BJ(e,((f.a+a.cK|0)-b|0)+g|0,f.b,d,a.d9.iK);a.bh=X(a.bh,EH(a));a.cl=X(a.cl,F8(a));g=(a.X-Rs(a.cC)|0)/2|0;h=(a.gM-(Pf(a.cC)/2|0)|0)-a.cl|0;OO(a.cC,a.cK+h|0,(g+Bb(a.y,a.X)|0)-a.bh|0);i=CA(a.e.h);j=Kg(a);k=TV(a);a.sn=j;a.qO=k;l=j;while(l<=k&&l<i){m
=B0(a.e.h,l);n=PT(a,l);f=a.lz;o=a.cv;p=a.Q;q=a.X;r=DG(a);s=a.cl;d=n.bR;b=d===m&&!d.hy?0:1;if(b){n.bR=m;Kr(m,p.cw,o);}d=n.bR;g=d===null?0:EM(d)<r?KW(EM(n.bR),1024):KW(r,1024)+1|0;r=g<=n.dp?0:1;if(r)n.dp=g;if(!(!b&&!r)){if(ATe){c=m.e9;$rt_globals.console.info("fMeasure"+c.data);ATe=0;}AAE(f,ATd);AAN(n,f,p,o,q,s);n.bR.hy=0;}AAu(n,f,o,q,s);t=n.bR;a.gS=W(a.gS,EM(m)+(40.0*a.d3.bH|0)|0);r=Bb(a.X,l)-a.bh|0;d=a.cq;AAA(n,d.b+r|0,d.a+a.cK|0,a.Q,a.qb,a.gZ,!a.hB?0.0:0.5,DG(a),a.X,a.cl,a.d9,ABx(a,l,t),a.hN,a.hD);l=l+1|0;}q
=j;while(q<=k&&q<i&&a.iN){d=PT(a,q);r=Bb(a.X,q)-a.bh|0;e=!Yj(a.p,q)?a.d9.lZ:a.d9.kN;f=a.Q;p=a.cq;AAk(d,f,p.a+a.cK|0,p.b+r|0,a.X,a.gZ,a.cl,DG(a),e);q=q+1|0;}if(a.ko&&h>=(( -Pf(a.cC)|0)/2|0)){d=a.cC;e=a.cM;if(Nw(d.dx.s,0,0,e))T2(a.cC,a.Q,a.cq);}if(a.hq){s=X(k+1|0,i);ZW(a,Bb(a.X,s)-a.bh|0);}Zb(a,j,k);AAt(a);AA$(a);}
function ABx(a,b,c){var d,e,f,g;a:{d=a.p;e=DQ(d);d=Fi(d);f=e.K;if(f<=b){g=BH(b,d.K);if(g<=0){d=Cf(b<=f?e.V:0,g>=0?d.V:(-1));break a;}}d=null;}if(d!==null){if(d.b==(-1))d.b=c.O;d.a=GF(c,d.a,a.Q.cw,a.cv);d.b=GF(c,d.b,a.Q.cw,a.cv);}return d;}
function Zb(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cM.b;e=X(d,Bb(CA(a.e.h),a.X)-a.bh|0);f=a.eD;g=a.bh;h=a.y;i=a.Q;j=a.d9.tf;Je(f,i,b,d);Wz(f,b);S8(f,g,e,j,i);if(e<d){k=f.fB;BJ(i,k.a,k.b+e|0,Cf(f.eN.a,d-e|0),j.g6);}if(b<=h&&h<=c){c=h/20|0;k=f.cu;k=Bs(k,c%k.j|0);l=f.fB;c=Bb(f.cu.j,f.hU);b=k.ec.b;d=((k.ik.b-(g%c|0)|0)+c|0)%c|0;if((d+b|0)>c)d= -(g%C0(k.bV)|0)|0;b=h%k.dt|0;e=k.d_;d=d+Bb(b,e)|0;if(d<( -e|0))d=d+c|0;Bh(k.f2,k.ec.a,e);m=k.fs;b=h%k.dt|0;c=k.d_;CD(m,0.0,Bb(b,c),k.ec.a,c);Io(k,i,d,l,j.oM,j.oU);}}
function Kg(a){return X(a.bh/a.X|0,CA(a.e.h)-1|0);}
function TV(a){return X(((a.bh+Dv(a)|0)-1|0)/a.X|0,CA(a.e.h)-1|0);}
function UA(a){Su(a.eD,a.cv.data[0],a.X,a.Q);Je(a.eD,a.Q,Kg(a),Dv(a));}
function PT(a,b){var c;c=a.f_.data;return c[b%c.length|0];}
function ACo(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Df(a.p))DD(a,a.es);else{b=DQ(a.p);c=Fi(a.p);d=c.K;e=b.K;f=(d-e|0)+1|0;g=BF(f);h=g.data;i=R(Bv,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.es;e=e+1|0;k=f;}l=EF(a.y,a.x);m=new UQ;m.rj=a;On(a,g,0,0,i,l,m);b.V=b.V+I(a.es)|0;c.V=c.V+I(a.es)|0;K$(a,a.x+I(a.es)|0,0);DK(a);}return 1;}
function AAe(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Df(a.p)){b=B0(a.e.h,a.y);if(b.o.data.length>0){c=QF(a,b);if(c===null)return 1;d=a.e.h;e=a.y;f=EF(e,a.x);d.cp=d.cp+1|0;g=d.e5;h=R(GH,1);h.data[0]=ADa(e,0,1,c,f.bD,f.bL);BW(g,h);I0(d,e,0,1,c);FF(b,0,I(c));K$(a,a.x-I(c)|0,0);}}else{f=DQ(a.p);c=Fi(a.p);i=c.K;j=f.K;i=(i-j|0)+1|0;k=BF(i);h=k.data;l=R(Bv,i);m=l.data;e=a.x;n=a.y;o=0;while(j<=c.K){b=B0(a.e.h,j);if(b.o.data.length>0){b=QF(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=ACe(k,o);h=C$(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.K)f.V=W(0,f.V-I(b)|0);if(j==c.K){c.V=W(0,c.V-I(b)|0);K$(a,a.x-I(b)|0,0);}i=i+1|0;}f=EF(n,e);b=new Rw;b.sP=a;On(a,p,0,1,h,f,b);}DK(a);return 1;}
function QF(a,b){var c,d,e,f;c=GW(0,I(a.es),V6(b));if(!c)b=null;else{b=B(56);if(c<0){b=new BA;U(b);J(b);}if(c!=1){d=b.bT.data.length;if(d&&c){e=BL(Bb(d,c));d=0;f=0;while(f<c){OF(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=Ls(e);}else b=ARW;}}return b;}
function On(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BF(i);k=ARr(i).data;G_(j,c);c=0;l=k.length;if(c>l){f=new BA;U(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.h;o.cp=o.cp+1|0;p=R(GH,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ADa(h[m],n[m],k[m],b[m],f.bD,f.bL);m=m+1|0;}BW(o.e5,p);c=0;while(c<i){b=e.data;I0(o,h[c],n[c],k[c],b[c]);g.lx(FL(h[c]),b[c]);c=c+1|0;}}
function ABK(a){var b,c,d,e,f,g,h,i;if(Df(a.p))Gq(a);D4(B0(a.e.h,a.y));b=a.e.h;c=a.y;d=a.x;e=b.D;f=e.data;g=f[c];e=C$(e,f.length+1|0);f=e.data;b.D=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DB(R(B4,0));b.D.data[c+1|0]=g;}else if(d==g.O){f[c]=g;f[c+1|0]=DB(R(B4,0));}else{f=(H6(g,d)).data;e=b.D.data;e[c]=f[0];e[c+1|0]=f[1];}Gj(b,c,d,0,B(229));DK(a);return Cz(a,a.y+1|0,0,0);}
function ABr(a){if(Df(a.p))Gq(a);else Oc(a.e.h,a.y,a.x);Gz(a);DK(a);return 1;}
function W$(a){var b,c,d;if(Df(a.p)){Gq(a);return 1;}b=a.x;if(!b&&!a.y)return 1;if(b){c=a.y;b=b-1|0;Oc(a.e.h,c,b);}else{c=a.y-1|0;b=E7(a.e.h,c);d=a.e.h;Kf(d,c);Gj(d,c,E7(d,c),1,B(229));}DK(a);return Cz(a,c,b,0);}
function DD(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.e4)return 0;if(Df(a.p))Gq(a);c=K7(T6(b,B(230),B(31)),B(229),(-1));d=c.data;b=a.e.h;e=a.y;f=a.x;WH(b,e,f,c);g=d.length;if(!g)h=ARW;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BL(i+Bb(g-1|0,I(B(229)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(229))){m=l+1|0;c[l]=L(B(229),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Ls(k);}Gj(b,e,f,0,h);e=a.y;m=(e+g|0)-1|
0;Cz(a,m,m!=e?I(d[g-1|0]):a.x+I(d[0])|0,0);EU(a);DK(a);return 1;}
function Gq(a){var b,c,d;b=DQ(a.p);c=a.e.h;d=a.p;Sh(c,d,UZ(c,d));Cz(a,b.K,b.V,0);EU(a);DK(a);}
function EU(a){var b;b=a.p;b.cS=0;BZ(b.bM,a.y,a.x);BZ(a.p.bB,a.y,a.x);}
function Pc(a){return a.dW.ld|0;}
function ZW(a,b){var c,d,e;c=a.cM.b;if(b<c){d=a.gZ;d.b=c-b|0;d.a=DG(a);d=a.Q;e=a.cq;BJ(d,e.a+a.cK|0,e.b+b|0,a.gZ,a.d9.iK);}}
function AAt(a){HZ(a.eB,a.bh,a.cq.b,Dv(a),TY(a),a.cq.a+a.cM.a|0,Pc(a));LB(a.ex,a.cl,a.cq.a+a.cK|0,DG(a),a.gS,a.cq.b+Dv(a)|0,Pc(a));}
function AA$(a){var b,c;b=OM(a.eB);c=OM(a.ex);if(!(!b&&!c)){Cu(a.Q,1);if(b)FI(a.eB,a.Q);if(c)FI(a.ex,a.Q);if(b)F0(a.eB,a.Q);if(c)F0(a.ex,a.Q);}}
function D1(a,b,c){return X(W(0,b),c);}
function Hk(a,b){var c,d,e,f,g;b=b.data;a.hn=1;a.hm=1;c=Ej(b[0]);d=Fu(b[1]);e=(Ej(b[2])).data[0];a.e.h=Z1(c,d);U9(a,ABu(e));Gf(Cg(a),ATf);FP(Cg(a));f=JF(Fq(),a.ev);g=new M;O(g);G(Ht(G(g,B(231)),f),B(232));$rt_globals.console.info($rt_ustr(N(g)));}
function U9(a,b){var c,d;c=Dc(a.e);if(!D$(c,b)){d=new M;O(d);G(G(G(G(d,B(233)),c),B(234)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.im=b;}}
function Cg(a){return a.d3.h7;}
function QE(a,b){var c,d,e,f,g;c=EQ(b);d=new M;O(d);G(G(d,B(235)),c);$rt_globals.console.info($rt_ustr(N(d)));MC(Cg(a),EQ(b));Cz(a,0,0,0);a.ev=Fq();a.hn=0;a.hm=0;a.e.h=ALf();Cz(a,0,0,0);c=EQ(b);e=FM(c,46,I(c)-1|0);if(e!=(-1))c=Dr(c,e);f=!Bt(c,B(236))?5120:10240;c=new V4;c.qy=a;c.qz=f;c.qA=b;d=b.eI;if(d!==null)Li(c,IX(b,d.size));else{d=b.gm.getFile();g=new Sm;g.lD=b;g.lE=c;b=new Sp;b.sL=c;d.then(Bl(g,"f"),Bl(b,"f"));}}
function Hd(a,b,c,d,e){if(G7(a,e))return 1;if(c&&d)return 1;if(c)a.bh=D1(a,a.bh+((Bb(b,a.X)*12|0)/10|0)|0,EH(a));else if(!d){H9(a,a.y+b|0,e);Sd(a);}return 1;}
function S9(a,b,c,d){var e,f,g;if(G7(a,d))return 1;e=Fd(a);if(!c)f=a.x+b|0;else if(b>=0)f=GA(e,a.x);else{f=a.x;if(!f)f=(-1);else{c=HU(e,f);if(c>0&&e.dd.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.dd.data[c-1|0];}}if(f>e.O){if((a.y+1|0)<CA(a.e.h))Cz(a,a.y+1|0,0,d);}else if(f>=0)Dg(a,f,d);else{b=a.y;if(b>0){g=(B0(a.e.h,b-1|0)).O;Cz(a,a.y-1|0,g,d);}}Oz(a);return 1;}
function G7(a,b){if(Df(a.p)&&!b){EU(a);Gz(a);return 1;}if(!(b&&Df(a.p)))EU(a);return 0;}
function Cz(a,b,c,d){a.x=c;return H9(a,b,d);}
function H9(a,b,c){a.y=GW(0,b,CA(a.e.h)-1|0);return Dg(a,a.x,c);}
function Dg(a,b,c){a.x=GW(0,b,(Fd(a)).O);a.gM=a.d3.bH===0.0?0:GF(Fd(a),a.x,a.Q.cw,a.cv);KP(a);Gz(a);if(c)a.p.cS=1;JS(a.p,a.y,a.x);a.p.cS=0;return 1;}
function K$(a,b,c){var d;d=Qo(a.p);Dg(a,b,c);a.p=d;}
function Gz(a){Sd(a);Oz(a);}
function Sd(a){var b,c,d,e,f;b=a.bh;c=b+Dv(a)|0;d=a.y;e=a.X;d=Bb(d,e);f=d+e|0;if(d<(b+e|0))a.bh=D1(a,d-e|0,EH(a));else if(f>(c-e|0))a.bh=D1(a,(f-Dv(a)|0)+a.X|0,EH(a));}
function Oz(a){var b,c,d,e,f;b=C6(a.d3.bH*30.0);c=a.cl;d=c+DG(a)|0;e=a.gM;f=e+b|0;if(e<(c+b|0))a.cl=D1(a,e-b|0,F8(a));else if(f>(d-b|0))a.cl=D1(a,(f-DG(a)|0)+b|0,F8(a));}
function Sl(a,b,c){var d,e,f,g,h,i,j,k,l;T3(a);d=a.e.h;e=Ei(d.dR,c);if(e!==null)a.hN=Pa(d,e);if(e!==null)c=e;a:{f=Ei(d.eb,c);if(f!==null){c=BR(f);while(true){if(!B1(c))break a;g=BV(c);BW(a.hD,Pa(d,g));}}}h=b.bD;i=b.bL;b=a.d1;c=Dc(a.e);d=GE(a.e);j=(Cl(b.nF)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.sq(c,d)){c=b.vK;break b;}l=l+1|0;}c=null;}if(c!==null){d=a.e;b=new Sk;b.vs=a;b.vt=d;b.vq=h;b.vr=i;c.q5(d,h,i,b,a.gy);}}
function He(a,b){var c;Cz(a,b.bD,b.bL,0);c=GA(Fd(a),a.x);BZ(a.p.bB,a.y,c);BZ(a.p.bM,a.y,a.x);}
function Fo(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.cq;e=c-d.a|0;f=GW(0,((b.b-d.b|0)+a.bh|0)/a.X|0,CA(a.e.h)-1|0);g=W(0,(e-a.cK|0)+a.cl|0);b=B0(a.e.h,f);d=a.Q.cw;h=a.cv;if(!(b.dU!==null&&!b.fu))Kr(b,d,h);i=b.dU;e=b.o.data.length;if(!e)j=0;else if(g<=0)j=0;else{k=i.data;if(g>=k[e-1|0])j=b.O;else{l=SU(i,0,e,g);if(l<0)l=( -l|0)-1|0;if(l==b.o.data.length)j=b.O;else{i=VB(b,d,h,l);j=0;c=0;while(c<l){j=j+I(b.o.data[c].v)|0;c=c+1|0;}c=!l?0:k[l-1|0];e=k[l];l=0;a:{while(true){h=i.data;if(l>=h.length){m=e;break a;}m
=h[l];if(g<m)break;j=j+1|0;l=l+1|0;e=m;c=m;}}if(ATg){b=new M;O(b);S(G(S(G(S(G(b,B(237)),c),B(238)),g),B(239)),m);$rt_globals.console.info($rt_ustr(N(b)));n=j;$rt_globals.console.info(" pos = "+n);}if((g-c|0)>(m-g|0))j=j+1|0;}}}return EF(f,j);}
function Sa(a,b){var c;c=b.bD;a.y=c;a.x=b.bL;a.gM=GF(B0(a.e.h,c),a.x,a.Q.cw,a.cv);KP(a);}
function Fd(a){return B0(a.e.h,a.y);}
function ALn(a,b,c){a.p.cS=0;if(a.fS!==null)a.fS=null;return 1;}
function ANv(a,b,c){var d,e,f,g,h,i,j;if(!c){d=E2(a.eB,b.n,a.rY,1);a.fS=d;if(d!==null)return 1;d=E2(a.ex,b.n,a.sh,0);a.fS=d;if(d!==null)return 1;a:{Ii(a);d=b.n;e=Fo(a,d);f=OJ(a.e.h,e.bD,e.bL);if(b.cm){g=J2(a.d1,Dc(a.e),GE(a.e));if(g!==null){h=a.e;c=e.bD;i=e.bL;j=new TU;j.uf=a;j.ue=d;g.q5(h,c,i,j,a.gy);}else{g=Ei(a.e.h.dR,f);if(g!==null){He(a,g);c=1;}else{g=Ei(a.e.h.eb,f);if(g!==null&&!D2(g)){if(g.j!=1){Ro(a.gH,d,g,a);c=1;}else{He(a,Bs(g,0));c=1;}}else c=0;}if(c)break a;}}Sa(a,e);Sl(a,e,f);if(!b.bz){b=a.p;if
(!b.cS)BZ(b.bM,a.y,a.x);}b=a.p;b.cS=1;JS(b,a.y,a.x);b=new TS;b.pU=a;a.fS=b;}}return 1;}
function AG9(a,b,c,d){var e,f,g;if(!c&&d==3){O3(a.p,a.y);Wd(a.fg);Ii(a);return 1;}if(!c&&d==2){a:{c=(Fo(a,b.n)).bD;e=B0(a.e.h,c);c=GD(e,a.x);d=GA(e,a.x);b=TM(e,c);if((d-1|0)==e.O){BZ(a.p.bM,a.y,V6(e));BZ(a.p.bB,a.y,e.O);}else{if(b!==null){b=b.v;f=0;b:{while(true){g=b.bT.data;if(f>=g.length)break;if(g[f]!=32){f=0;break b;}f=f+1|0;}f=1;}if(f){f=a.x;if(c==f){c=GD(e,c-1|0);d=GA(e,c);}else{if(d!=f){O3(a.p,a.y);break a;}c=GD(e,d+1|0);d=GA(e,c);}}}BZ(a.p.bM,a.y,c);a.p.cS=1;Cz(a,a.y,d,0);a.p.cS=0;}}Ii(a);return 1;}return 1;}
function AFx(a,b){var c,d,e,f,g,h,i,j;c=a.fS;if(c!==null){c.l(b);return 1;}c=a.d3.cr;if(Fa(a.eB,b.n,c))return 1;if(Fa(a.ex,b.n,c))return 1;d=a.eD;if(Ha(b.n,d.fB,d.eN)&&GX(c)?1:0)return 1;a:{d=b.n;e=a.cq;f=e.a+a.cK|0;g=e.b;h=DG(a);i=Dv(a);j=d.a;if(j>=f&&j<(f+h|0)){f=d.b;if(f>=g&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return GX(c);if(b.cm){d=Fo(a,b.n);Wn(a.e.h,d);b=a.e.h;if(!MS(b.dR,d)&&!MS(b.eb,d)?0:1)return C_(c,B(159));}return C_(c,B(160));}
function AKo(a,b){var c,d,e,f;c=b.cm;if(c&&b.bj==65){c=CA(a.e.h)-1|0;d=E7(a.e.h,c);BZ(a.p.bM,0,0);BZ(a.p.bB,CA(a.e.h)-1|0,d);return 1;}if(c&&b.bj==80){Jk(a);return 1;}if(!a.e4&&c&&b.bj==90){if(Df(a.p))EU(a);b=a.e.h;b.cp=b.cp+1|0;e=b.e5;d=e.j;if(!d)e=null;else{f=(Ec(e,d-1|0)).data;e=R_(b,f[0]);c=1;while(c<f.length){R_(b,f[c]);c=c+1|0;}}if(e!==null){Cz(a,e.a,e.b,0);DK(a);}return 1;}if(!c&&!b.c9){if(Bt(b.dq,B(240))){DD(a,B(241));Dg(a,a.x-1|0,0);c=1;}else if(Bt(b.dq,B(242))){DD(a,B(243));Dg(a,a.x-1|0,0);c=1;}else if
(Bt(b.dq,B(42))){DD(a,B(244));Dg(a,a.x-1|0,0);c=1;}else if(Bt(b.dq,B(245))){DD(a,B(246));Dg(a,a.x-1|0,0);c=1;}else if(Bt(b.dq,B(247))){DD(a,B(248));Dg(a,a.x-1|0,0);c=1;}else if(!Bt(b.dq,B(249)))c=0;else{DD(a,B(250));Dg(a,a.x-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.c9&&!b.cm)){d=b.bj;if(d>=48&&d<=57){c=d-48|0;e=a.k3.data[c];if(e!==null)e.r();c=1;break a;}}c=0;}if(c)return 1;d=b.bj;if(112<=d&&d<=123)c=1;else b:{switch(d){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(Zc(a,b))return 1;if(a.e4)c=0;else c:{switch(b.bj){case 8:break;case 9:c=!b.bz?ACo(a):AAe(a);break c;case 13:c=ABK(a);break c;case 46:c=ABr(a);break c;default:c=0;break c;}c=W$(a);}if(c)return 1;if(b.cm&&b.bj==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(b.bj==27)return 0;return I(b.dq)>0&&DD(a,b.dq)?1:0;}
function Vz(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bt(B(132),Dc(a.e))){b=Cg(a);c=new Mk;c.pa=a;d=R(C,3);e=d.data;e[0]=F6(a.e.h);f=Kg(a);g=TV(a);h=W(0,f-100|0);f=X(CA(a.e.h)-1|0,g+100|0);i=BF(3);j=i.data;j[0]=FV(a.e.h,h);k=a.e.h;l=0;f=X(f+1|0,k.D.data.length);m=0;while(m<f){l=l+E7(k,m)|0;if(m!=(k.D.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.h.c0;k=Ck();Vj(n,n.cH,k);i=BF(3*k.j|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bs(k,m);h=p+1|0;o[p]=q.bI;l=h+1|0;o[h]=q.bO;p=l+1|0;o[l]=q.eZ;m=m+1|0;}e[2]
=i;CY(b,c,B(251),d);}}
function Jk(a){var b,c,d,e;b=ZF(Dc(a.e));if(b!==null){a.ev=Fq();c=Cg(a);d=new VO;d.pm=a;e=R(C,1);e.data[0]=F6(a.e.h);CY(c,d,b,e);}}
function Rv(a){var b,c,d,e,f,g,h;b=a.e.h.c0;c=Oe(b,b.cH);if(c===null)return;if(Bt(B(160),Dc(a.e)))Oo(a.e.h);a:{d=ES([CU(c),C1(c),c.b3.eZ]);e=F6(a.e.h);f=BF(1);g=Dc(a.e);h=(-1);switch(Ku(g)){case 3401:if(!Bt(g,B(252)))break a;h=3;break a;case 98723:if(!Bt(g,B(253)))break a;h=2;break a;case 3254818:if(!Bt(g,B(132)))break a;h=1;break a;case 3556653:if(!Bt(g,B(160)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Cg(a);c=new Sz;c.oL=a;CY(b,c,B(254),H(C,[e,f,d]));}
function Kl(a,b,c){var d,e,f,g,h,i;if(c&&a.e4)return 0;d=DQ(a.p);e=d.K;if(Df(a.p)){f=a.e.h;g=a.p;h=UZ(f,g);if(c)Sh(f,g,h);if(c){Cz(a,d.K,d.V,0);EU(a);DK(a);}}else{h=EZ(Ex(a.e.h.D.data[e]),B(229));i=X(CA(a.e.h)-1|0,e);BZ(a.p.bB,i,0);if(e>=(CA(a.e.h)-1|0))BZ(a.p.bB,i,E7(a.e.h,i));else BZ(a.p.bM,i+1|0,0);if(c)Gq(a);else Cz(a,e,0,0);}b.l(h);return 1;}
function Zc(a,b){var c,d,e,f;a:{switch(b.bj){case 33:c=b.cm?H9(a,KW(a.bh,a.X),b.bz):Hd(a,2-U_(Dv(a),a.X)|0,0,b.c9,b.bz);break a;case 34:c=!b.cm?Hd(a,U_(Dv(a),a.X)-2|0,0,b.c9,b.bz):H9(a,((a.bh+Dv(a)|0)/a.X|0)-1|0,b.bz);break a;case 35:if(!G7(a,b.bz)&&!Dg(a,(Fd(a)).O,b.bz)){c=0;break a;}c=1;break a;case 36:if(!G7(a,b.bz)&&!Dg(a,0,b.bz)){c=0;break a;}c=1;break a;case 37:c=b.cm;if(c&&b.c9){Ii(a);d=a.fg;e=d.c6;if(e<=0)d=null;else{f=d.eo.data;c=e-1|0;d.c6=c;d=f[c];}if(d===null)c=0;else{Cz(a,Ip(d),KV(d),0);a.p=Qo(d.li);c
=1;}break a;}c=S9(a,(-1),c,b.bz);break a;case 38:c=Hd(a,(-1),b.cm,b.c9,b.bz);break a;case 39:c=b.cm;if(c&&b.c9){d=a.fg;c=d.c6;if(c==(d.eq-1|0))d=null;else{f=d.eo.data;c=c+1|0;d.c6=c;d=f[c];}if(d===null)c=0;else{Cz(a,Ip(d),KV(d),0);a.p=Qo(d.li);c=1;}break a;}c=S9(a,1,c,b.bz);break a;case 40:c=Hd(a,1,b.cm,b.c9,b.bz);break a;default:}c=0;}if(c&&b.bz)BZ(a.p.bB,a.y,a.x);if(c)Sl(a,EF(a.y,a.x),OJ(a.e.h,a.y,a.x));return c;}
function Ii(a){var b,c,d,e,f,g,h;b=a.fg;c=b.c6;b=c<0?null:b.eo.data[c];if(b!==null&&a.y==Ip(b)&&a.x==KV(b))return;d=a.fg;b=new IE;c=a.y;e=a.x;f=a.p;b.kC=EF(c,e);g=Qo(f);b.li=g;g.cS=0;e=d.c6;h=d.eq;if(e==(h-1|0))L3(d,b);else{c=e+1|0;while(c<h){Wd(d);c=c+1|0;}L3(d,b);}d.c6=d.c6+1|0;}
function DK(a){a.e.h.oA=IO(Cg(a));}
function T3(a){a.hN=null;G9(a.hD);}
function ZF(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(Ku(b)){case 3401:if(!Bt(b,B(252)))break a;c=2;break a;case 98723:if(!Bt(b,B(253)))break a;c=1;break a;case 3254818:if(!Bt(b,B(132)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(255);break b;case 2:b=B(256);break b;default:b=null;break b;}b=B(257);}}return b;}
var QQ=F();
function AJz(a,b){return AB8(b);}
function QU(){C.call(this);this.sH=null;}
function AG8(a,b){return ACd(a.sH,b);}
function Jl(){var a=this;C.call(a);a.jn=null;a.nL=null;a.lJ=null;}
function ATh(a,b,c){var d=new Jl();Un(d,a,b,c);return d;}
function Un(a,b,c,d){a.jn=b.bY;a.nL=c;a.lJ=d;}
function AMg(a,b){var c,d;if(b.cm&&b.bj==79){c=a.nL;if(c!==null&&b.bz)UU(a.jn,c);else K1(a.jn,a.lJ);d=1;}else d=0;return d;}
function QT(){C.call(this);this.lH=null;}
function ADE(a,b){QE(a.lH,b);}
function QS(){C.call(this);this.oz=null;}
function AO8(a,b){return L8(a.oz,b);}
function QR(){C.call(this);this.tr=null;}
function AKR(a,b,c){return Kl(a.tr,b,c);}
function QX(){C.call(this);this.mx=null;}
function AOG(a){var b,c;b=a.mx.cL;BI(b);c=new MG;c.tk=b;return c;}
function QW(){C.call(this);this.rl=null;}
function AIQ(a,b,c,d){var e,f;b=a.rl.cL;e=C6((b.X*4|0)*d/150.0);f=C6(c);b.bh=D1(b,b.bh+e|0,EH(b));b.cl=D1(b,b.cl+f|0,F8(b));return 1;}
function QV(){C.call(this);this.r9=null;}
function ALR(a,b){b=b;return XL(a.r9,b);}
function B3(){var a=this;C.call(a);a.bd=0.0;a.bt=0.0;a.bk=0.0;a.bu=0.0;}
function ARc(a){var b=new B3();AAo(b,a);return b;}
function CD(a,b,c,d,e){a.bd=b;a.bt=c;a.bk=d;a.bu=e;}
function AAo(a,b){a.bd=b.bd;a.bt=b.bt;a.bk=b.bk;a.bu=b.bu;}
function Bf(a,b){a.bd=b.bd;a.bt=b.bt;a.bk=b.bk;a.bu=b.bu;return a;}
function AOJ(a,b){var c;if(a===b)return 1;a:{if(b!==null&&Cy(a)===Cy(b)){b=b;if(b.bd===a.bd&&b.bt===a.bt&&b.bk===a.bk&&b.bu===a.bu?1:0){c=1;break a;}}c=0;}return c;}
var Cx=F(0);
var ASR=null;var ASZ=null;var ASN=null;var ASO=null;var ASS=null;var AST=null;var ASU=null;var ASY=null;var AS5=null;var AS0=null;var AS1=null;var ASV=null;var AS2=null;var ASW=null;var AS3=null;function Dm(){Dm=Bo(Cx);AKu();}
function AKu(){ASR=CF(187);ASZ=CF(0);ASN=CF(43);ASO=Bq(B(258));ASS=CF(85);AST=Cv(60,63,65);ASU=Cv(33,66,131);ASY=Cv(255,255,255);AS5=Cv(0,0,0);AS0=Cv(212,212,212);AS1=Cv(166,214,255);ASV=Bq(B(259));AS2=Bq(B(260));ASW=Bq(B(261));AS3=Bq(B(260));}
function H4(){var a=this;C.call(a);a.s=null;a.g=null;a.M=null;a.S=null;}
function J3(){var a=new H4();Q0(a);return a;}
function Rt(a,b,c,d){var e=new H4();AFP(e,a,b,c,d);return e;}
function Q0(a){a.s=new Bg;a.g=new Bg;a.M=new B3;a.S=new B3;}
function AFP(a,b,c,d,e){a.s=new Bg;a.g=new Bg;a.M=new B3;a.S=new B3;F1(a,b,c,d,e);}
function F1(a,b,c,d,e){Bh(a.s,b,c);Bh(a.g,d,e);}
function RM(a){Bh(a.g,0,0);}
function Ib(a){var b;b=a.g;return Bb(b.a,b.b)?0:1;}
function DT(a,b){return Ha(b,a.s,a.g);}
function Gv(a,b,c,d){var e;e=a.s;BJ(b,e.a+c|0,e.b+d|0,a.g,a.M);}
function S4(a,b,c,d,e,f){var g,h,i,j;g=a.s;d=g.a+d|0;e=g.b+e|0;g=a.g;h=a.S;i=a.M;Kn(b,b.g4);Lm(b.g4,b.bA,d,e,g,b.ds);Tf(b.g4,b.bA,c);g=b.g4;j=b.bA;HM(j,g.s_,h);HM(j,g.s9,i);c=g.o5;j.uniform2f(c,f,0.0);J_(b);}
function ABl(){H4.call(this);this.bP=null;}
function J9(){var a=new ABl();AD0(a);return a;}
function E1(a,b,c,d){var e=new ABl();AI8(e,a,b,c,d);return e;}
function AD0(a){Q0(a);a.bP=new B3;}
function AI8(a,b,c,d,e){Q0(a);a.bP=new B3;F1(a,b,c,d,e);}
function GI(a){var b,c;b=a.g;c=a.bP;Bh(b,c.bk-c.bd|0,c.bu-c.bt|0);}
function F7(a,b){Hi(a,0,0,B_(b),C0(b));}
function Hi(a,b,c,d,e){CD(a.bP,b,c,d,e);}
function CK(a,b,c,d,e,f){var g;g=a.s;Hy(b,g.a+d|0,g.b+e|0,a.g,a.bP,c,a.M,a.S,f);}
function FY(a,b){Bf(a.M,b);}
function If(a,b,c){Bf(a.M,b);Bf(a.S,c);}
function Hf(a,b){Bf(a.S,b);}
function Zj(){var a=this;C.call(a);a.dx=null;a.kx=0.0;a.gv=0.0;a.gb=0;}
function AJ$(){var a=new Zj();AOq(a);return a;}
function AOq(a){var b;b=Rt(0,0,2,20);a.dx=b;a.kx=0.5;a.gv=0.0;Hg(187,187,187,255,b.M);}
function Rs(a){return a.dx.g.b;}
function Pf(a){return a.dx.g.a;}
function RH(a,b){var c,d;a:{c=a.gb;if(b>a.gv)while(true){d=a.gv+a.kx;a.gv=d;a.gb=a.gb?0:1;if(b>d)continue;else break a;}}return a.gb==c?0:1;}
function OO(a,b,c){Bh(a.dx.s,b,c);}
function Q_(a,b){a.gv=b+a.kx*1.25;a.gb=1;}
function T2(a,b,c){if(a.gb)Gv(a.dx,b,c.a,c.b);}
function SI(){C.call(this);this.eU=null;}
function ALd(a,b){var c,d,e,f,g,h,i;c=a.eU;d=c.jb;if(d!==null){e=c.c5.s;f=e.a;g=b.n;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.jb=g;}d=b.n;f=d.a;c=c.f$;e=c.g;h=f-e.a|0;f=d.b-e.b|0;Bh(c.s,h,f);c=a.eU;d=c.bf.bY;b=b.n;f=0;a:{while(true){i=c.gF.data;if(f>=i.length)break;if(DT(i[f],b)){b=c.tD.data[f];break a;}f=f+1|0;}b=null;}Gf(d,b);return 1;}
function AMH(a,b,c,d){if(!c&&d==2){b=a.eU;VF(b,b.c5);}return 1;}
function AJf(a,b,c){var d,e;d=Bx();e=new M;O(e);S(G(e,B(262)),c);Bu(d,N(e));if(!c){d=b.n;b=a.eU;b.jb=!DT(b.c5,d)?null:d;OO(a.eU.gT,d.a,d.b);b=a.eU;Q_(b.gT,IO(b.bf.bY));}return 1;}
function AFG(a,b,c){var d;b=Bx();d=new M;O(d);S(G(d,B(263)),c);Bu(b,N(d));return 1;}
function Qt(){C.call(this);this.tt=null;}
function AK9(a,b){return NY(a.tt,b);}
function Qs(){C.call(this);this.nD=null;}
function ANF(a,b){return NY(a.nD,b);}
function Qw(){C.call(this);this.vv=null;}
function AN3(a,b,c){var d,e;Bu(Bx(),B(264));d=!c?B(265):B(28);e=new M;O(e);G(G(G(e,B(266)),d),B(267));U$(b,N(e));return 1;}
function Qu(){C.call(this);this.tQ=null;}
function AN2(a){Bu(Bx(),B(268));}
function Qr(){C.call(this);this.uV=null;}
function AJE(a,b){Bu(Bx(),B(269));return 1;}
function Qq(){C.call(this);this.rU=null;}
function AHu(a,b,c,d){var e,f,g;b=a.rU;e=( -d|0)/10|0;b=b.c5;f=b.g;f.a=f.a+e|0;f.b=f.b+e|0;b=b.s;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function Ie(){var a=this;B3.call(a);a.fV=0;a.fY=0;a.fW=0;a.fX=0;}
function CF(a){var b=new Ie();AOz(b,a);return b;}
function Cv(a,b,c){var d=new Ie();AFz(d,a,b,c);return d;}
function Bq(a){var b=new Ie();AMF(b,a);return b;}
function ATi(a,b,c,d){var e=new Ie();Pv(e,a,b,c,d);return e;}
function CT(a){var b=new Ie();NI(b,a);return b;}
function AOz(a,b){Pv(a,b,b,b,255);}
function AFz(a,b,c,d){Pv(a,b,c,d,255);}
function AMF(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.fV=Ij(L(b,1))*17|0;a.fY=Ij(L(b,2))*17|0;a.fW=Ij(L(b,3))*17|0;a.fX=255;}else{a.fV=KJ(L(b,1),L(b,2));a.fY=KJ(L(b,3),L(b,4));a.fW=KJ(L(b,5),L(b,6));a.fX=I(b)!=9?255:KJ(L(b,7),L(b,8));}Hg(a.fV,a.fY,a.fW,a.fX,a);return;}}
function Pv(a,b,c,d,e){a.fV=b;a.fY=c;a.fW=d;a.fX=e;Hg(b,c,d,e,a);}
function NI(a,b){a.fV=b.fV;a.fY=b.fY;a.fW=b.fW;a.fX=b.fX;Bf(a,b);}
function Ij(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function KJ(b,c){return (16*Ij(b)|0)+Ij(c)|0;}
function TR(){var a=this;C.call(a);a.k_=null;a.jy=null;}
function Yb(){var a=this;C.call(a);a.eY=null;a.b_=null;a.dX=null;a.f0=null;a.kK=null;a.b0=null;a.fo=null;a.cG=0;a.eu=0;a.k2=0;a.fx=0;a.fq=0;a.iM=null;a.ja=null;a.rI=null;}
function XI(){var a=new Yb();AN4(a);return a;}
function AN4(a){a.b_=J3();a.dX=new Bg;a.f0=new Bg;a.b0=ATj;a.fx=(-1);}
function J5(a,b){Sv(a);a.b0=b;}
function HA(a,b){a.eY=b;Sv(a);}
function HI(a,b){var c,d,e,f;a.kK=b.g3;c=b.Z.fr;Bf(a.b_.M,c);c=b.iA;Bf(a.b_.S,c);d=0;while(true){e=a.b0.data;if(d>=e.length)break;f=e[d];c=b.Z;f.iS=c;If(f.db,c.iW,c.fr);if(a.fx==d)IQ(a.b0.data[d],1);d=d+1|0;}}
function Sg(a){a.fo=CJ(a.fo,null);Bh(a.dX,0,0);a.b0=ATj;a.fx=(-1);RM(a.b_);}
function GC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=K3(b);d=b.bH;BI(a.eY);CB(c,a.eY);e=Ji(a.eY,1.25);f=0;a.cG=Cc(2.0,d);a.eu=Cc(3.0,d);a.k2=Cc(12.0,d);g=0;h=a.b0.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=PH(c,l.jR);n=a.k2;n=(n+m|0)+n|0;f=W(f,n);b=l.db;l=b.s;l.a=g;l.b=0;l=b.g;l.a=n;l.b=e;CD(b.bP,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.dX;b.a=g;b.b=e;b=a.b_.g;n=a.fq;if(!n){m=a.cG;m=(g+m|0)+Bb(m,a.b0.data.length)|0;}else m=(f+(a.cG*2|0)|0)+(a.eu*2|0)|0;b.a=m;if(!n)e=e+(a.cG*2|0)|0;else{n=a.cG;e=(Bb(e+n|0,a.b0.data.length)
+n|0)+(a.eu*2|0)|0;}b.b=e;}
function Jb(a,b,c){var d,e,f,g,h,i,j;Bh(a.b_.s,b,c);d=a.cG+a.eu|0;e=a.b0.data;f=e.length;g=0;h=d;while(g<f){i=e[g].db;j=i.s;j.a=b+d|0;j.b=c+h|0;if(!a.fq){if(!i.g.a)ACn();d=d+(i.g.a+a.cG|0)|0;}else{if(!i.g.b)ACn();h=h+(i.g.b+a.cG|0)|0;}g=g+1|0;}}
function ACn(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function DZ(a){var b,c;b=a.dX;if(b.a&&b.b)return a.b_.g;c=new Bm;Bj(c,B(270));J(c);}
function Sv(a){Bh(a.dX,0,0);}
function IY(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=b.c4;if(!a.b0.data.length)return;a:{if(a.fo!==null){d=a.dX;if(Bb(d.a,d.b))break a;}d=a.dX;if(!Bb(d.a,d.b))GC(a,b);d=a.dX;e=d.a;f=d.b;if(!Bb(e,f))return;d=CI(c,e,f);CB(d,a.eY);g=Ji(a.eY,0.125);h=a.eY;i=h.dg;g=g+i-(i+h.dY)/16.0;j=a.b0.data;f=j.length;k=0;while(k<f){l=j[k];Ce(d,l.jR,l.db.bP.bd+a.k2,g);k=k+1|0;}h=CJ(a.fo,CR(c));a.fo=h;CL(h,d);FB(d);}if(!Ib(a.b_)){d=a.b_;UX(c,d.g,d.s,d.S,a.cG,a.f0);d=a.b_;Yd(c,d.g,d.s,d.M,a.cG,a.f0);if(a.fq){d=a.b_;TP(c,d.g,d.s,0,0,JI(a.kK,
b.bH),a.kK.iU,a.f0);}}j=a.b0.data;k=j.length;m=0;while(m<k){CK(j[m].db,c,a.fo,0,0,0.0);m=m+1|0;}b:{if(a.fq){j=a.b0.data;k=j.length;m=0;while(true){if(m>=k)break b;h=j[m].db;l=a.f0;e=(a.b_.g.a-(a.cG*2|0)|0)-(a.eu*2|0)|0;b=h.g;e=e-b.a|0;l.a=e;l.b=b.b;if(e>0){d=h.s;BJ(c,d.a+b.a|0,d.b,l,h.S);}m=m+1|0;}}}}
function Jw(a,b,c){var d,e,f,g,h,i;d=DT(a.b_,b);e=!d?(-1):TX(a,b);f=a.fx;if(f!=e){if(f>=0){g=a.b0.data[f];IQ(g,0);if(a.rI!==null){f=a.fx;h=Bx();g=Ct(g);i=new M;O(i);G(G(S(G(i,B(271)),f),B(272)),g);Bu(h,N(i));}}if(e>=0){h=a.b0.data[e];IQ(h,1);g=a.ja;if(g!==null)g.m4(b,e,h);}a.fx=e;}return d&&GX(c)?1:0;}
function Jo(a,b,c,d){var e,f;e=TX(a,b);if(e>=0){f=a.b0.data[e];if(!LG(f))f.tl.r();}return 1;}
function TX(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.b0.data;if(c>=d.length)return (-1);e=d[c].db;if(DT(e,b))return c;if(a.fq){f=e.s;g=f.a;e=e.g;h=e.a;g=g+h|0;i=f.b;f=a.f0;f.a=(a.b_.g.a-(a.cG*2|0)|0)-h|0;f.b=e.b;if(Nw(b,g,i,f))break;}c=c+1|0;}return c;}
function Rz(a){a.fq=1;}
function Xr(){var a=this;C.call(a);a.cx=null;a.b$=null;a.f3=null;a.ix=null;a.h9=null;a.h3=null;}
function Xc(a){var b=new Xr();AEw(b,a);return b;}
function AEw(a,b){a.b$=Ck();a.h3=ATk;a.cx=b;Z(b.dz,a);}
function Ly(a,b){a.h9=b;b=BR(a.b$);while(B1(b)){HI(BV(b),a.h9);}}
function Hl(a,b,c,d){var e,f;e=a.cx;f=e.cD;if(Bb(f.a,f.b)&&e.bH!==0.0){if(a.f3!==null&&!DP(a)){a.h3=d;a.ix=HW(a.cx,a.f3);e=Sq(a,b,c,null);b=new RQ;b.lI=a;e.iM=b;Ln(a.cx,a);return;}b=new BA;U(b);J(b);}c=new DL;Bj(c,B(273));J(c);}
function Dw(a){if(DP(a)){Px(a.cx,a);Se(a,null);a.h3.r();a.h3=ATk;}}
function Sq(a,b,c,d){var e,f,g,h;e=XI();Rz(e);J5(e,c.ga());HI(e,a.h9);HA(e,a.ix);GC(e,a.cx);if(d===null)f=b.a;else{g=b.a;f=a.cx.cD.a<((g+(DZ(d)).a|0)+(DZ(e)).a|0)?g-(DZ(e)).a|0:(g+(DZ(d)).a|0)-d.eu|0;}h=b.b;b=a.cx.cD;Jb(e,W(0,X(f,b.a-(DZ(e)).a|0)),W(0,X(h,b.b-(DZ(e)).b|0)));b=new N6;b.lU=a;b.lV=e;e.ja=b;BW(a.b$,e);return e;}
function AEI(a,b,c){var d,e;a.ix=HW(a.cx,a.f3);d=BR(a.b$);while(B1(d)){e=BV(d);HA(e,a.ix);GC(e,a.cx);}}
function KA(a){var b,c;if(D2(a.b$))return;Cu(a.cx.c4,1);b=0;while(true){c=a.b$;if(b>=c.j)break;IY(Bs(c,b),a.cx);b=b+1|0;}}
function JJ(a,b){var c,d;c=0;d=a.b$.j-1|0;a:{while(d>=0){c=Jw(Bs(a.b$,d),b.n,a.cx.cr);if(c)break a;d=d+(-1)|0;}}return c;}
function IJ(a,b,c,d){var e,f;e=0;f=a.b$.j-1|0;a:{while(f>=0){e=Jo(Bs(a.b$,f),b.n,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function I9(a,b,c){var d,e,f,g;d=0;e=a.b$.j-1|0;a:{while(e>=0){f=Bs(a.b$,e);g=b.n;d=DT(f.b_,g);if(!d&&!Ib(f.b_)){f=f.iM;if(f!==null)f.r();}if(d)break a;e=e+(-1)|0;}}return d;}
function ADe(a,b){var c;if(!DP(a))return 0;a:{switch(b.bj){case 27:Dw(a);c=1;break a;default:}c=0;}return c;}
function Se(a,b){var c,d;c=a.b$.j-1|0;a:{while(true){if(c<0)break a;d=Bs(a.b$,c);if(b===d)break;Ec(a.b$,c);Sg(d);c=c+(-1)|0;}}}
function DP(a){return a.b$.j<=0?0:1;}
function R3(){C.call(this);this.r1=null;}
function ALC(a,b){var c;c=a.r1;if(b.bj==32)Sg(c.cA);return 0;}
function R6(){C.call(this);this.qS=null;}
function ACS(a,b){var c,d,e,f;b=b;c=a.qS;Bu(Bx(),B(274));if(!DP(c.dN)){d=c.dN;b=b.n;e=MI(4);f=new Ub;f.wr=c;Hl(d,b,e,f);}return 1;}
function AB6(){var a=this;C.call(a);a.hY=null;a.ho=0.0;}
function SF(a,b){var c=new AB6();ACJ(c,a,b);return c;}
function ACJ(a,b,c){a.hY=b;a.ho=c;}
function AO5(a,b){if(a===b)return 1;if(b!==null&&Cy(a)===Cy(b)){b=b;return a.ho===b.ho&&D$(a.hY,b.hY)?1:0;}return 0;}
function Kb(){var a=this;C.call(a);a.hx=null;a.rL=null;a.th=null;a.iA=null;a.Z=null;a.g3=null;}
function ATl(a,b,c,d,e,f){var g=new Kb();RI(g,a,b,c,d,e,f);return g;}
function Go(){var b,c,d,e,f,g;b=new Kb;c=new ER;Dm();d=ASO;e=ASS;EE();F4(c,d,e,d,AS_,AS7);f=new ER;d=ASO;e=ASS;g=AS_;F4(f,d,e,d,g,g);RI(b,c,f,Xa(),Bq(B(275)),Xa(),AER(1,0.125));return b;}
function RI(a,b,c,d,e,f,g){a.hx=b;a.rL=c;a.th=d;a.iA=e;a.Z=f;a.g3=g;}
var R4=F();
function AHc(a){Bu(Bx(),B(276));}
var R2=F();
function AMX(a){Bu(Bx(),B(277));}
function Dx(){var a=this;C.call(a);a.db=null;a.tl=null;a.iS=null;a.jK=null;a.jR=null;}
function ABM(a,b,c){var d=new Dx();Qf(d,a,b,c);return d;}
function AQJ(a,b,c,d){var e=new Dx();Zs(e,a,b,c,d);return e;}
function Qf(a,b,c,d){Zs(a,b,c,d,null);}
function Zs(a,b,c,d,e){var f;f=J9();a.db=f;a.jR=c;a.iS=d;a.tl=b;Bf(f.M,d.iW);Bf(a.db.S,d.fr);a.jK=e;}
function LG(a){return a.jK===null?0:1;}
function IQ(a,b){Bf(a.db.S,!b?a.iS.fr:a.iS.so);}
function NC(){C.call(this);this.mf=null;}
function AG7(a,b,c){var d;d=a.mf;if(b===0.0)SZ(d,new Bg);}
function ZM(){var a=this;C.call(a);a.b5=null;a.d4=null;a.nr=null;a.hw=null;a.iq=null;}
function AMQ(a){var b=new ZM();ALS(b,a);return b;}
function ALS(a,b){var c;c=new JW;c.bZ=J3();c.ep=new Bg;c.f7=new Bg;c.bm=ATm;c.b1=(-1);c.cW=0;c.c3=0;c.eL=0;c.lu=0;a.b5=c;a.hw=ATk;a.d4=b;Z(b.dz,a);b=a.b5;c=new UJ;c.ts=a;b.s4=c;}
function RF(a,b){var c;a.nr=b;c=a.b5;c.et=b;Ue(c);}
function WI(a,b){var c,d,e,f,g,h;a.iq=b;c=a.b5;c.lC=b.g3;d=b.hx.bF;Bf(c.bZ.M,d);c.vj=d;d=b.iA;Bf(c.bZ.S,d);e=0;while(true){f=c.bm.data;if(e>=f.length)break;g=f[e];h=b.hx;g.ct=h;If(g.bW,h.jG,h.bF);If(g.cj,h.lf,h.bF);If(g.cB,h.lt,h.bF);Bf(g.dI.S,h.bF);Bf(g.dy.S,h.bF);Bf(g.d2.S,h.bF);if(c.b1==e)F9(c.bm.data[e],1);e=e+1|0;}}
function OI(a,b,c,d){var e,f,g,h;if(a.nr!==null&&!Fz(a)){e=a.b5;Ue(e);e.bm=c;Lc(a.b5,a.d4);e=a.b5;f=b.a;g=b.b;b=a.d4.cD;h=UP(e);V_(e,W(0,X(f,b.a-h.a|0)),W(0,X(g,b.b-h.b|0)));Ln(a.d4,a);a.hw=d;return;}b=new BA;U(b);J(b);}
function F2(a){var b;if(!Fz(a))return 0;Px(a.d4,a);a.hw.r();a.hw=ATk;b=a.b5;b.eh=CJ(b.eh,null);Bh(b.ep,0,0);b.bm=ATm;b.b1=(-1);b.cW=0;b.c3=0;b.eL=0;RM(b.bZ);return 1;}
function AL6(a,b,c){Lc(a.b5,a.d4);}
function O7(a){AAx(a.b5,a.d4);}
function PI(a,b){var c,d,e,f,g;c=a.b5;d=a.d4.cr;e=DT(c.bZ,b);f=!e?(-1):RP(c,b);if(c.b1!=f&&f>=0){F9(c.bm.data[f],1);g=c.b1;if(g>=0)F9(c.bm.data[g],0);c.b1=f;}return e&&GX(d)?1:0;}
function Pj(a,b,c,d){var e;e=a.b5;if(!DT(e.bZ,b)){if(!Ib(e.bZ)){b=e.s4;if(b!==null)F2(b.ts);}c=0;}else{if(d==1){c=RP(e,b);if(c>=0)e.bm.data[c].km.r();}c=1;}return c;}
function Fz(a){return LK(a.b5)?0:1;}
function Wv(a,b){return b===null?B(31):b.Dm();}
function ZX(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=d.e;BI(a.iq);f=AKQ();g=0;h=c!==null?c.data.length:b.j;i=0;a:{while(true){if(i>=h)break a;if(c===null){j=(Bs(b,i)).bD;k=QG(Ex(B0(e.h,j)));l=Wv(a,e.fG);}else{m=c.data;j=m[i].jw.ka;k=!D$(e.fG,m[i].hF)?B(31):QG(Ex(B0(e.h,j)));l=Wv(a,m[i].hF);}if(I(k)>43){n=B7(k,0,40);k=new M;O(k);G(G(k,n),B(278));k=N(k);}if(I(l)>43){n=B7(l,0,40);o=new M;O(o);G(G(o,n),B(278));l=N(o);}n=Dd(j+1|0);g=g+1|0;if(g>20)break;if(c!==null){m=c.data;o=null;p=m[i];}else{p=null;o=Bs(b,i);}if
(c!==null){q=new SC;q.pK=d;q.pL=p;}else{q=new SA;q.sA=d;q.sB=o;}p=new WO;p.mR=a;p.mQ=q;KM(f,l,n,k,a.iq.hx,p);i=i+1|0;}r=h-(g-1|0)|0;b=new M;O(b);G(S(G(b,B(279)),r),B(280));KM(f,N(b),B(31),B(31),a.iq.rL,new SB);}return Pw(f);}
function AEd(a,b){var c,d;if(!Fz(a))return 0;a:{c=b.bj;switch(c){case 13:b=a.b5;d=b.b1;if(d==(-1))c=0;else{b.bm.data[d].km.r();c=1;}break a;case 27:break;case 37:case 38:case 39:case 40:b=a.b5;d=b.b1;if(d>=0)F9(b.bm.data[d],0);b:{c:{switch(c){case 38:c=b.bm.data.length;c=((c+b.b1|0)-1|0)%c|0;b.b1=c;if(c!=20)break b;b.b1=19;break b;case 39:b.b1=X(b.bm.data.length,20)-1|0;break b;case 40:break c;default:}b.b1=0;break b;}c=b.b1;if(c==19)b.b1=0;else b.b1=(c+1|0)%b.bm.data.length|0;}F9(b.bm.data[b.b1],1);c=1;break a;default:c
=0;break a;}c=F2(a);}return c;}
function ND(){C.call(this);this.pe=null;}
function ANd(a,b){var c,d;c=a.pe;if(b.bj!=32)d=0;else{F2(c.dV);d=1;}return d;}
function NE(){C.call(this);this.sd=null;}
function AJV(a,b){var c;b=b;c=a.sd;if(!Fz(c.dV))SZ(c,b.n);return 1;}
var U7=F(0);
var G8=F(0);
var EA=F();
function D2(a){return a.j?0:1;}
function Hm(a,b){var c,d,e,f,g,h;c=b.data;d=a.j;e=c.length;if(e<d)b=Tz(HH(Cy(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BR(a);while(B1(f)){g=b.data;h=e+1|0;g[e]=BV(f);e=h;}return b;}
var L4=F(0);
function FR(){EA.call(this);this.cs=0;}
function BR(a){var b;b=new MD;b.gp=a;b.lo=a.cs;b.hW=a.mT();b.fO=(-1);return b;}
function Pg(a,b){var c,d;c=a.j;d=0;while(true){if(d>=c)return (-1);if(D$(b,Bs(a,d)))break;d=d+1|0;}return d;}
var HS=F(0);
function MW(){var a=this;FR.call(a);a.cc=null;a.j=0;}
function Ck(){var a=new MW();AGv(a);return a;}
function ATn(a){var b=new MW();LW(b,a);return b;}
function AGv(a){LW(a,10);}
function LW(a,b){a.cc=R(C,b);}
function IF(a,b){var c,d;c=a.cc.data.length;if(c<b){d=c>=1073741823?2147483647:W(b,W(c*2|0,5));a.cc=C$(a.cc,d);}}
function Bs(a,b){Iv(a,b);return a.cc.data[b];}
function AKv(a){return a.j;}
function BW(a,b){var c,d;IF(a,a.j+1|0);c=a.cc.data;d=a.j;a.j=d+1|0;c[d]=b;a.cs=a.cs+1|0;return 1;}
function Qb(a,b,c){var d,e,f;Oj(a,b);IF(a,a.j+1|0);d=a.j;e=d;while(e>b){f=a.cc.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cc.data[b]=c;a.j=d+1|0;a.cs=a.cs+1|0;}
function Ec(a,b){var c,d,e,f;Iv(a,b);c=a.cc.data;d=c[b];e=a.j-1|0;a.j=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cs=a.cs+1|0;return d;}
function US(a,b){var c;c=Pg(a,b);if(c<0)return 0;Ec(a,c);return 1;}
function G9(a){var b,c,d,e,f,g;b=a.cc;c=0;d=a.j;e=null;if(c>d){e=new BA;U(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.j=0;a.cs=a.cs+1|0;}
function Iv(a,b){var c;if(b>=0&&b<a.j)return;c=new By;U(c);J(c);}
function Oj(a,b){var c;if(b>=0&&b<=a.j)return;c=new By;U(c);J(c);}
function Jh(a,b){var c;c=0;while(c<a.j){b.l(a.cc.data[c]);c=c+1|0;}}
function Na(a,b){var c,d,e,f,g,h,i;c=a.cc;d=a.j;if(b===null)b=ARU;e=R(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}YC(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.cs=a.cs+1|0;}
function ABU(){var a=this;C.call(a);a.kY=0;a.k0=0;}
function AM2(){var a=new ABU();ANM(a);return a;}
function ANM(a){var b,c;b=ABF(Er((AAL())));c=Er((AAL()))^(-559038737);a.kY=b;a.k0=c;c=0;while(c<19){Qx(a);c=c+1|0;}}
function Qx(a){var b,c;b=a.kY;c=a.k0;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.kY=c;a.k0=b;return b;}
function ABF(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function HO(a,b){return 5.960464477539063E-8*(Qx(a)&16777215)*b|0;}
function S1(){C.call(this);this.l3=null;}
function AJ6(a,b,c){var d;d=a.l3;if(b===0.0)JG(d,100);}
function S2(){C.call(this);this.pb=null;}
function ACX(a,b){var c,d,e;c=a.pb;d=b.bj;if(d==32){c.iG=c.iG?0:1;e=1;}else if(d==13){JG(c,1);e=1;}else if(d!=8)e=0;else{Vx(c,1);e=1;}return e;}
var Mw=F(0);
function ABh(){var a=this;C.call(a);a.fp=null;a.fK=0;a.h4=0;a.fJ=0;}
function AOb(a){var b=new ABh();AGu(b,a);return b;}
function AGu(a,b){a.fp=Ck();a.fJ=0;a.h4=2048;a.fK=b;}
function GZ(a,b,c){var d,e,f,g,h,i,j;d=c.pD(b);e=a.h4;if(d>e){c=new Bm;f=new M;O(f);BB(S(G(S(G(f,B(281)),d),B(282)),e),41);Bj(c,N(f));J(c);}if(!a.fK){b=new BA;Bj(b,B(283));J(b);}a:{b=new B3;if(d){b:{c=a.fp;if(c.j>0){c=BR(c);g=d;while(true){if(!B1(c))break b;f=BV(c);if(f.bk>=g)break;}CD(b,f.bd,f.bt,g,a.fK);f.bd=f.bd+g;h=f.bk-g;f.bk=h;if(h===0.0)US(a.fp,f);break a;}}g=a.fJ;i=d;CD(b,0.0,g,i,a.fK);c=a.fp;f=new B3;h=a.fJ;g=a.h4-d|0;j=a.fK;f.bd=i;f.bt=h;f.bk=g;f.bu=j;BW(c,f);a.fJ=a.fJ+a.fK|0;}}return b;}
function Wk(a){return Cf(a.h4,a.fJ);}
function ZJ(){var a=this;C.call(a);a.vz=20;a.fB=null;a.eN=null;a.hV=null;a.j0=0;a.hU=0;a.it=0.0;a.cu=null;a.ej=null;a.e0=null;a.fc=0;}
function AJm(){var a=new ZJ();ANV(a);return a;}
function ANV(a){a.vz=20;a.fB=new Bg;a.eN=new Bg;a.cu=Ck();}
function Wz(a,b){var c,d,e,f,g;c=a.fc;if(b==c)return;d=a.cu.j;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=W(0,(c-1|0)/20|0);f=W(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){Rk(a,b);a.fc=b;}else{if(a.fc>=b)while(true){if(g<f)break a;a.fc=RN(Bs(a.cu,g%d|0),a.ej,a.e0,a.fc,b,e,a.it);g=g+(-1)|0;}while(f<=g){a.fc=RN(Bs(a.cu,f%d|0),a.ej,a.e0,a.fc,b,e,a.it);f=f+1|0;}}}}
function S8(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=BR(a.cu);while(B1(f)){g=BV(f);h=a.fB;i=Bb(a.cu.j,a.hU);j=g.ec.b;k=((g.ik.b-(b%i|0)|0)+i|0)%i|0;l=k+j|0;m=BH(l,c);if(m<=0){Bh(g.f2,B_(g.bV),j);CD(g.fs,0.0,0.0,B_(g.bV),j);Io(g,e,k,h,d.iv,d.g6);}else{if(m>0&&k<c){m=W(c-k|0,0);Bh(g.f2,B_(g.bV),m);CD(g.fs,0.0,0.0,B_(g.bV),m);Io(g,e,k,h,d.iv,d.g6);}if(l>i){m=X(l%i|0,c);Bh(g.f2,B_(g.bV),m);CD(g.fs,0.0,b%C0(g.bV)|0,B_(g.bV),m);Io(g,e,0,h,d.iv,d.g6);}}}}
function Je(a,b,c,d){var e,f,g,h,i,j;e=a.cu.j;while(true){f=a.cu.j;g=Bb(f,a.hU);if(g>(d+a.j0|0))break;h=Cf(0,g);i=new Mo;g=a.eN.a;f=a.j0;j=a.hV;i.f2=new Bg;i.fs=new B3;i.ik=h;i.dt=20;i.d_=f;i.ec=Cf(g,20*f|0);i.fv=Sb(j,f);if(i.bV===null)i.bV=CR(b);BW(a.cu,i);}if(f==e)return;Rk(a,c);}
function Rk(a,b){var c,d,e,f,g,h,i,j;c=a.cu;d=c.j;e=Bb((b/(d*20|0)|0)+1|0,d)*20|0;c=BR(c);while(B1(c)){f=BV(c);g=a.ej;h=a.it;Ek(g);i=0;while(true){j=f.dt;if(i>=j)break;j=e-Bb(d,j)|0;if(j<b)j=e;e=j+1|0;FT(f,g,Dd(e),Bb(f.d_,i)+f.fv|0,h);i=i+1|0;}CL(f.bV,g);}}
function Su(a,b,c,d){var e;a.hV=b;a.j0=c;e=c*20|0;a.hU=e;b=CJ(a.ej,CI(d,a.eN.a,e));a.ej=b;CB(b,a.hV);QY(a.ej,2);b=CJ(a.e0,CI(d,a.eN.a,c));a.e0=b;CB(b,a.hV);QY(a.e0,2);}
function Ul(a,b,c,d,e){Du(a.fB,b);Bh(a.eN,c,d);a.it=e;}
var AA8=F(0);
function ABq(){return AJj(Cv(96,99,102),Cv(49,51,53),Cv(164,163,163),CF(50));}
function Vg(){var a=this;C.call(a);a.iy=null;a.pS=null;a.h6=null;}
function AJW(a,b,c){if(!c){b=E2(a.h6.gt,b.n,a.pS,1);a.iy=b;if(b!==null)return 1;}return 1;}
function ALp(a,b,c){if(a.iy!==null)a.iy=null;return 1;}
function AFY(a,b){var c;c=a.iy;if(c!==null){c.l(b);return 1;}c=a.h6;return Fa(c.gt,b.n,c.rE);}
function RC(){C.call(this);this.nc=null;}
function AFj(a,b,c,d){var e,f;b=a.nc;e=(LO(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.dF=X(W(0,b.dF+Bb(e,f)|0),OP(b));return 1;}
var Tp=F(0);
function GX(a){return C_(a,null);}
function Tv(b){var c;c=new MU;c.m2=b;return c;}
function ZI(){var a=this;C.call(a);a.eG=null;a.cJ=null;a.dA=null;a.d7=null;a.lW=null;a.i$=null;}
function G5(){var a=new ZI();AFU(a);return a;}
function AFU(a){var b;a.eG=new Bg;a.cJ=new Bg;a.dA=new Bg;a.d7=new Bg;b=new B3;a.lW=b;a.i$=new B3;EE();Bf(b,AS$);Bf(a.i$,ATo);}
function OM(a){var b;b=a.cJ;return !Bb(b.a,b.b)?0:1;}
function Ic(a,b){return Ha(b,a.dA,a.d7);}
function E2(a,b,c,d){var e,f,g,h,i;e=Ic(a,b);f=Ha(b,a.eG,a.cJ);if(!e&&!f)return null;if(!f){if(!d)c.l(Wj(a,b.a-a.dA.a|0));else c.l(NA(a,b.b-a.dA.b|0));}g=!d?a.eG.a+(a.cJ.a/2|0)|0:a.eG.b+(a.cJ.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new MT;b.rN=a;b.rP=c;b.rO=i;}else{b=new MR;b.o0=a;b.oZ=c;b.o1=i;}return b;}
function AB4(b,c){var d;d=new SQ;d.pM=b;d.lK=c;return d;}
function NA(a,b){var c,d,e;c=a.d7.b;d=a.cJ.b;e=c-d|0;return AB4(X(W(0,b-(d/2|0)|0),e),e);}
function Wj(a,b){var c,d,e;c=a.d7.a;d=a.cJ.a;e=c-d|0;return AB4(X(W(0,b-(d/2|0)|0),e),e);}
function HZ(a,b,c,d,e,f,g){MX(a,b,c,d,e,f,g,1);}
function LB(a,b,c,d,e,f,g){MX(a,b,c,d,e,f,g,0);}
function MX(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bh(a.d7,0,0);Bh(a.cJ,0,0);}else{i=X(g*3|0,d);j=W(OG(d,d,e),i);e=e-d|0;i=d-j|0;i=i?OG(b,i,e):0;if(!h){k=a.eG;k.a=i+c|0;k.b=f-g|0;l=a.cJ;l.a=j;l.b=g;l=a.dA;l.a=c;l.b=k.b;k=a.d7;k.a=d;k.b=g;}else{k=a.eG;k.a=f-g|0;k.b=i+c|0;l=a.cJ;l.a=g;l.b=j;l=a.dA;l.a=k.a;l.b=c;k=a.d7;k.a=g;k.b=d;}}}
function OX(a,b){FI(a,b);F0(a,b);}
function FI(a,b){var c;c=a.dA;BJ(b,c.a,c.b,a.d7,a.lW);}
function F0(a,b){var c,d;c=a.cJ;c.a=c.a-2|0;c.b=c.b-2|0;d=a.eG;BJ(b,d.a+1|0,d.b+1|0,c,a.i$);b=a.cJ;b.a=b.a+2|0;b.b=b.b+2|0;}
function Fa(a,b,c){return Ic(a,b)&&GX(c)?1:0;}
function O2(){C.call(this);this.sR=null;}
function AL7(a,b){var c,d,e;c=a.sR;if(b.cm&&b.bj==79){if(!b.bz){b=c.bf.bY;d=new Q7;d.s1=c;K1(b,d);}else{b=c.bf.bY;d=new Q6;d.ve=c;UU(b,d);}e=1;}else e=0;return e;}
function P8(){C.call(this);this.up=null;}
function ADl(a,b){var c,d,e,f;c=b.data;b=Bx();d=Ct(c[0]);e=new M;O(e);G(G(e,B(198)),d);Bu(b,N(e));b=Bx();f=c[1];d=new M;O(d);G(G(d,B(284)),f);Bu(b,N(d));}
function P7(){C.call(this);this.wd=null;}
function AOK(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bx();e=Ct(c[0]);f=new M;O(f);G(G(f,B(198)),e);Bu(d,N(f));g=Fu(QJ(b,1));b=Bx();d=Ct(c[1]);if(g===null)c=B(29);else{c=new M;O(c);BX(c,B(42));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BX(c,B(43));BB(c,i[h]);h=h+1|0;}BX(c,B(44));c=N(c);}e=new M;O(e);G(G(G(G(e,B(285)),d),B(286)),c);Bu(b,N(e));}
function P6(){C.call(this);this.nB=null;}
function AFE(a,b){To(a.nB,b);}
function P5(){C.call(this);this.t9=null;}
function AKh(a,b){var c,d,e,f,g;c=b.data;d=Bx();e=Ct(c[0]);f=new M;O(f);G(G(f,B(198)),e);Bu(d,N(f));g=Ej(QJ(b,1));b=Bx();d=Ct(c[1]);c=AAD(g);e=new M;O(e);G(G(G(G(e,B(287)),d),B(288)),c);Bu(b,N(e));}
function P3(){C.call(this);this.vg=null;}
function AJv(a,b){var c,d;c=KR();b=Ct(b);d=new M;O(d);G(G(d,B(289)),b);Bu(c,N(d));b=new E4;U(b);J(b);}
function P2(){C.call(this);this.o_=null;}
function ALm(a,b){var c,d,e,f;c=a.o_;d=c.bf.bY;e=new M$;e.p$=c;f=R(C,1);f.data[0]=b;CY(d,e,B(290),f);}
function SH(){C.call(this);this.ks=null;}
function ANf(a,b){var c,d,e,f,g,h;c=a.ks;d=c.kQ;if(d!==null){e=c.dv.s;f=e.a;g=b.n;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.kQ=g;}b=b.n;f=b.a;c=c.ez;d=c.g;f=f-d.a|0;h=b.b-d.b|0;Bh(c.s,f,h);return 1;}
function AND(a,b,c){var d;if(!c){d=b.n;b=a.ks;if(!DT(b.dv,d))d=null;b.kQ=d;}return 1;}
var AAj=F();
function YN(b){var c,d;c=CI(b,250,64);FN(c,B(163),25.0);KD(c,187,187,187);Ce(c,B(291),0.0,24.0);Ce(c,B(291),0.25,56.0);d=CR(b);CL(d,c);FB(c);return d;}
function S$(){var a=this;C.call(a);a.ic=null;a.oQ=null;a.iH=null;}
function ADW(a,b,c){if(!c){b=E2(a.iH.hj,b.n,a.oQ,1);a.ic=b;if(b!==null)return 1;}return 1;}
function AEE(a,b,c){if(a.ic!==null)a.ic=null;return 1;}
function ADw(a,b){var c;c=a.ic;if(c!==null){c.l(b);return 1;}c=a.iH;return Fa(c.hj,b.n,Tv(c.bf.bY));}
function MZ(){C.call(this);this.sg=null;}
function ADp(a,b,c,d){var e,f;b=a.sg;e=(LO(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.ei=X(W(0,b.ei+Bb(e,f)|0),QD(b));return 1;}
function Re(){C.call(this);this.qu=null;}
function ANj(a,b){var c,d;a:{c=a.qu;switch(b.bj){case 67:LI(c);d=1;break a;case 86:PZ(c);d=1;break a;default:}d=0;}return d;}
var Rd=F();
function AFZ(a,b,c){return 0;}
function Rb(){C.call(this);this.ow=null;}
function AMI(a,b,c){var d,e;d=a.ow;c=d.dk+1|0;d.dk=c;d=HB(E(H0));e=new M;O(e);G(G(S(e,c),B(292)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));U$(b,e);return 1;}
var Ra=F();
function AKL(a){return null;}
function Rc(){C.call(this);this.mG=null;}
function AEt(a){var b,c;b=a.mG;c=new OU;c.qD=b;return c;}
function QL(){C.call(this);this.v3=null;}
function AF5(a,b){return 0;}
function Kj(){var a=this;C.call(a);a.lq=null;a.t4=null;a.nf=0.0;a.n3=0;a.ns=0;a.oW=0;a.pF=0;a.vJ=0;a.dg=0.0;a.dY=0.0;a.ub=0.0;a.ld=0.0;a.uk=0;a.mq=null;}
function FE(a){return C6(a.dg+a.dY);}
function Ji(a,b){return C6((a.dg+a.dY)*b);}
function Qv(){var a=this;C.call(a);a.cE=null;a.g0=null;a.pY=0;}
function Wi(a,b){Qb(a.cE,0,b);}
function AEx(a,b){var c,d,e,f,g;c=a.g0;if(c!==null){c.l(b);return 1;}d=0;while(true){c=a.cE;if(d>=c.j)break;a:{e=Bs(c,d);f=b.n;if(Fk(e.bi,f))g=C_(e.bl.cr,null);else{g=Dj(e.bl,7.0);if(Wt(e,f.b)){if(Nc(e,f.a,g)){g=C_(e.bl.cr,B(161));break a;}if(SD(e,f.a,g)){g=C_(e.bl.cr,B(161));break a;}}if(SG(e,f.a)){if(Os(e,f.b,g)){g=C_(e.bl.cr,B(162));break a;}if(O$(e,f.b,g)){g=C_(e.bl.cr,B(162));break a;}}g=0;}}b:{c:{if(!g){if(!Fk(e.z,b.n))break c;if(!e.z.b4(b)&&!C_(e.bl.cr,null))break c;}g=1;break b;}g=0;}if(g)return 1;d
=d+1|0;}return 0;}
function AIc(a,b,c,d){var e,f,g;e=0;while(true){f=a.cE;if(e>=f.j)break;g=Bs(f,e);if(Fk(g.z,b.n)&&g.z.cz(b,c,d)?1:0)return 1;e=e+1|0;}return 0;}
function AGq(a,b,c){var d,e,f,g,h,i,j,k,l;if(a.g0!==null)return 1;d=0;while(true){e=a.cE;if(d>=e.j)break;a:{f=Bs(e,d);if(!c){b:{e=b.n;if(!KY(f.bi)&&Fk(f.bi,e)){C_(f.bl.cr,null);g=f.z.I;h=g.a;i=e.a;h=h-i|0;j=g.b;k=e.b;j=j-k|0;e=f.bi.I;i=e.a-i|0;k=e.b-k|0;g=new Bg;e=new Ps;e.nT=f;e.nW=i;e.nX=k;e.nY=g;e.nZ=h;e.nU=j;}else{h=Dj(f.bl,7.0);if(Wt(f,e.b)){if(Nc(f,e.a,h)){g=new Bg;l=new Bg;h=e.a;e=f.z;i=e.I.a;j=e.t.a;e=new Rg;e.lP=f;e.lO=h;e.lR=i;e.lQ=j;e.lN=l;e.lM=g;break b;}if(SD(f,e.a,h)){g=new Bg;h=e.a;i=f.z.t.a;e
=new VZ;e.mb=f;e.mc=h;e.l_=i;e.ma=g;break b;}}if(SG(f,e.a)){if(Os(f,e.b,h)){g=new Bg;l=new Bg;j=e.b;e=f.z;h=e.I.b;i=e.t.b;e=new UW;e.nR=f;e.nP=j;e.nQ=h;e.nN=i;e.nO=l;e.nM=g;break b;}if(O$(f,e.b,h)){g=new Bg;h=e.b;i=f.z.t.b;e=new VC;e.s0=f;e.sZ=h;e.sX=i;e.sW=g;break b;}}e=null;}}if(e!==null)break a;}e=f.z.qi(b,c);if(e===null)e=!Fk(f.z,b.n)?null:ATp;}if(e!==null){a.g0=e;a.pY=c;return 1;}d=d+1|0;}return 0;}
function AOu(a,b,c){var d,e;if(c==a.pY&&a.g0!==null){a.g0=null;return 1;}d=0;while(true){e=a.cE;if(d>=e.j)break;if((Bs(e,d)).z.cP(b,c))return 1;d=d+1|0;}return 0;}
function ANX(a,b,c){var d,e,f;d=0;while(true){e=a.cE;if(d>=e.j)break;f=Bs(e,d);e=f.z;e.il(e.I,e.t,c);e=f.bi;if(e.gi!==null){e.dB=null;e.hg=0;e.go=1;}Jf(f);d=d+1|0;}}
function Pp(){C.call(this);this.v0=null;}
function AGz(a,b){return b.iB&&b.bj==32?1:0;}
function Pq(){C.call(this);this.pg=null;}
function ACZ(a,b){var c,d,e,f,g,h;b=b;c=a.pg;if(!DP(c.fm)){d=c.fm;b=b.n;e=R(Dx,1);f=e.data;g=new Dx;h=new Qd;h.l8=c;Qf(g,h,B(293),d.h9.Z);f[0]=g;Hl(d,b,GU(e),ATk);}return 1;}
function Pr(){C.call(this);this.qv=null;}
function ALK(a,b,c,d){var e,f,g,h;e=a.qv;f=0;a:{while(true){g=e.cE;if(f>=g.j)break;if((Bs(g,f)).z.ee(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function KQ(){var a=this;C.call(a);a.fG=null;a.h=null;a.im=null;a.o3=null;}
function Dc(a){var b;b=a.im;if(b===null)b=a.o3;return b;}
function GE(a){var b;b=a.fG;return b===null?null:b.tL;}
var NK=F(0);
var N5=F();
function AGF(a,b,c){var d,e;d=b;e=c;b=new M;O(b);S(G(S(G(b,B(294)),d),B(295)),e);CE(N(b));return d+e|0;}
var NL=F(0);
var N3=F();
function AHL(a,b,c){var d,e;d=b;e=c;b=new M;O(b);E6(G(E6(G(b,B(296)),d),B(295)),e);CE(N(b));return d+e;}
var X7=F();
var Xl=F(0);
function LL(){C.call(this);this.mP=null;}
function AIS(a){JY(a.mP);}
function LM(){C.call(this);this.pt=null;}
function AHr(a){I$(a.pt);}
function UN(){var a=this;C.call(a);a.mD=null;a.rt=null;a.rM=null;a.nF=null;a.l2=null;a.qg=null;}
function J2(a,b,c){return Wl(a,Cl(a.mD),b,c);}
function Uz(a,b,c){return Wl(a,Cl(a.rt),b,c);}
function Wl(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.sq(c,d))return g.uy;f=f+1|0;}return null;}
function Mz(a,b,c){var d,e,f,g;d=(Cl(a.rM)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.sq(b,c))return g.uG;f=f+1|0;}return null;}
function W2(){var a=this;C.call(a);a.bM=null;a.bB=null;a.cS=0;}
function AKC(){var a=new W2();ADs(a);return a;}
function Qo(a){var b=new W2();ACR(b,a);return b;}
function ADs(a){a.bM=new F$;a.bB=new F$;}
function ACR(a,b){var c;c=new F$;a.bM=c;a.bB=new F$;V8(c,b.bM);V8(a.bB,b.bB);a.cS=b.cS;}
function JS(a,b,c){BZ(a.bB,b,c);if(!a.cS)BZ(a.bM,b,c);}
function O3(a,b){BZ(a.bM,b,0);BZ(a.bB,b+1|0,0);}
function DQ(a){if(WA(a.bM,a.bB)>0)return a.bB;return a.bM;}
function Fi(a){if(WA(a.bM,a.bB)<0)return a.bB;return a.bM;}
function Df(a){var b,c;b=a.bM;c=a.bB;return (b===c?1:c!==null&&Cy(b)===Cy(c)?(b.K==c.K&&b.V==c.V?1:0):0)?0:1;}
function Yj(a,b){var c,d;if(!Df(a))return 0;c=DQ(a);d=Fi(a);return c.K<=b&&b<d.K?1:0;}
function Mx(){var a=this;C.call(a);a.eo=null;a.eq=0;a.c6=0;}
function L3(a,b){var c,d,e;c=a.eq;d=a.eo;if(c==d.data.length)a.eo=C$(d,c+16|0);d=a.eo.data;e=a.eq;a.eq=e+1|0;d[e]=b;}
function Wd(a){var b,c,d;b=a.c6;c=a.eq-1|0;if(b==c)a.c6=b-1|0;d=a.eo.data;a.eq=c;d[c]=null;}
function EG(){var a=this;C.call(a);a.bQ=0;a.bR=null;a.d6=null;a.dp=0;a.cX=0;}
var ATe=0;var ATq=0;var ATd=0;function Kp(b,c){return (c-FE(b)|0)/2|0;}
function Sb(b,c){return Kp(b,c)+b.pF|0;}
function AAu(a,b,c,d,e){var f,g;if(D2(a.d6))return;if(e>EM(a.bR))return;f=e/1024|0;e=a.cX;if(f==e)return;if(LO(f-e|0)>=a.dp){g=0;while(g<a.dp){HC(a,b,d,c,f+g|0);g=g+1|0;}a.cX=f;return;}while(true){e=a.cX;if(e>=f)break;HC(a,b,d,c,e+a.dp|0);a.cX=a.cX+1|0;}while(true){e=a.cX;if(e<=f)break;HC(a,b,d,c,e-1|0);a.cX=a.cX-1|0;}}
function HC(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Ek(b);f=a.bR.e9;g=e*1024|0;h=N0(a,g);if(h>=a.bR.o.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bQ;a:{while(true){l=a.bR.o.data;if(h>=l.length)break a;m=l[h];n=!ATd?Sb(d.data[m.b7],c):Kp(d.data[m.b7],c);o=f.data;CB(b,d.data[m.b7]);Ce(b,m.v,k,n);k=o[h]-j+a.bQ;if(k>1024.0)break;h=h+1|0;}}CL(Bs(a.d6,e%a.dp|0),b);}
function AAA(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp;if(D2(a.d6))return;if(!a.dp)return;if(j>EM(a.bR))return;o=a.bR;p=o.dU;q=o.o;r=j/1024|0;s=N0(a,j);t= -a.bQ|0;u=i;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=h)break;y=p.data;o=Bs(a.d6,r%a.dp|0);z=v[s];ba=y[s]+a.bQ|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=X(be,ba)-j|0;if(bc&&x)bf=bf+a.bQ|0;if((t+bf|0)>h)bf=h-t|0;bg=l!==null?0:1;b:{if(!bg){bh=!x
?a.bQ:2*a.bQ|0;bi=l.a;w=l.b;if(!(bi<w&&j<=w&&(j+bf|0)>(bi+bh|0)?0:1)){bh=0;break b;}}bh=1;}c:{if(!bg){bj=!x?a.bQ:2*a.bQ|0;if(j>=l.a&&(j+bf|0)<=(l.b+bj|0)?1:0){bk=1;break c;}}bk=0;}bl=null;if(z===m)bl=k.pG;bm=BR(n);d:{e:{while(B1(bm)){f:{bn=BV(bm);if(bn!==null){if(!bn.ew(z))break f;else break e;}if(z===null)break e;}}bi=0;break d;}bi=1;}if(bi)bl=k.mE;if(!bk&&!bh){l.b=X(l.b,EM(a.bR));bj=j>=l.a?bf:(X(ba,be)-l.a|0)-(!x?a.bQ:0)|0;bi=(j+bf|0)<=(l.b+(!x?a.bQ:2*a.bQ|0)|0)?0:(X(ba,be)-l.b|0)-(!x?a.bQ:0)|0;w=j-bb|0;be
=t+c|0;bo=w;x=bf-bj|0;CD(e,bo,0.0,x,u);Bh(f,x,i);HQ(a,d,be,b,f,e,z,o,g,k,0,bl);w=w+bf|0;CD(e,w-bi|0,0.0,bi,u);Bh(f,bi,i);be=be+bf|0;HQ(a,d,be-bi|0,b,f,e,z,o,g,k,0,bl);bp=w-bj|0;bi=bj-bi|0;CD(e,bp,0.0,bi,u);Bh(f,bi,i);HQ(a,d,be-bj|0,b,f,e,z,o,g,k,1,bl);}else{CD(e,j-bb|0,0.0,bf,u);Bh(f,bf,i);HQ(a,d,t+c|0,b,f,e,z,o,g,k,bk,bl);}j=j+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function HQ(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.a&&e.b){if(f.bu!==0.0&&f.bk!==0.0){m=j.nw.data[g.cF];if(k)n=j.kN;else{g=m.qK;if(g===null)g=j.iK;if(l===null)l=BI(g);n=l;}g=m.qJ;if(ATq)i=0.0;Hy(b,c,d,e,f,h,g,n,i);return;}return;}}
function N0(a,b){var c,d,e,f,g,h,i;c=a.bR;d=c.e9;e=0;f=c.o.data.length;g=b;b=BH(e,f);if(b>0){c=new BA;U(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BH(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AAN(a,b,c,d,e,f){var g,h;a.cX=f/1024|0;while(true){g=a.d6;if(g.j>=a.dp)break;BW(g,CR(c));}h=0;while(h<a.dp){HC(a,b,e,d,a.cX+h|0);h=h+1|0;}}
function Pn(a){a.bR=null;Jh(a.d6,new Po);G9(a.d6);}
function AAk(a,b,c,d,e,f,g,h,i){var j,k;j=EM(a.bR);if(j)j=j+a.bQ|0;if(!j)j=j-a.bQ|0;k=W( -a.bQ|0,j-g|0);if(k>=h)return;Bh(f,h-k|0,e);BJ(b,c+k|0,d,f,i);}
function YP(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(EG,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B0(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bR===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EG;f.bQ=3;f.d6=Ck();f.cX=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)Pn(o);h=h+1|0;}return g;}
function AA6(){ATd=0;}
function TG(){C.call(this);this.wg=null;}
function TF(){C.call(this);this.p2=null;}
function AMf(a,b){var c;c=a.p2;c.bh=Fx(b,EH(c));}
function TB(){C.call(this);this.m3=null;}
function AKf(a,b){var c;c=a.m3;c.cl=Fx(b,F8(c));}
function TA(){C.call(this);this.rX=null;}
function AMc(a){var b,c;b=a.rX;c=b.hB?0:1;b.hB=c;b=new M;O(b);FQ(G(b,B(297)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function TD(){C.call(this);this.qn=null;}
function AHw(a){var b,c;b=a.qn;c=b.hq?0:1;b.hq=c;b=new M;O(b);FQ(G(b,B(298)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function TC(){C.call(this);this.ng=null;}
function AJC(a){var b,c;b=a.ng;c=b.iN^1;b.iN=c;b=new M;O(b);FQ(G(b,B(299)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function T5(){C.call(this);this.sf=null;}
function ALE(a){var b,c,d,e,f;b=a.sf;c=(b.kg+3|0)%6|0;b.kg=c;d=b.f_.data;e=d.length;f=0;while(f<e){b=d[f];b.bQ=c;b=b.bR;if(b!==null)b.hy=1;f=f+1|0;}}
var Fc=F(Cq);
var ATb=null;var ATr=null;var ATc=null;var ATs=null;function AC8(){AC8=Bo(Fc);AJJ();}
function Z6(a,b){var c=new Fc();ZV(c,a,b);return c;}
function ZV(a,b,c){AC8();DA(a,b,c);}
function AJJ(){var b;ATb=Z6(B(300),0);ATr=Z6(B(301),1);b=Z6(B(302),2);ATc=b;ATs=H(Fc,[ATb,ATr,b]);}
function IM(){var a=this;C.call(a);a.dE=null;a.ey=null;a.e_=null;}
var ASq=0;function AAy(a){var b;b=a.ey;if(b!==null){ASq=ASq-1|0;a.dE.dc.deleteTexture(b);a.ey=null;}}
function B_(a){return a.e_.a;}
function C0(a){return a.e_.b;}
function St(a,b,c,d){var e;e=a.e_;e.a=b;e.b=c;K8(a);a.dE.dc.texStorage2D(3553,1,d,b,c);e=a.dE.dc;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function K8(a){var b,c;b=a.dE.dc;c=a.ey;b.bindTexture(3553,c);}
function CL(a,b){Mm(a,b.k1,b.kc,32856);OH(a,b,0,0);}
function Mm(a,b,c,d){var e,f,g,h;a:{e=a.e_;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){K8(a);break a;}e=a.dE.dc;h=a.ey;e.deleteTexture(h);a.ey=a.dE.dc.createTexture();St(a,b,c,d);break a;}}St(a,b,c,d);}}
function Hx(a,b,c,d){K8(a);OH(a,b,c,d);}
function OH(a,b,c,d){var e;e=a.dE.dc;b=b.i3;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Q8=F();
function AO9(a,b){return AB8(b);}
function Q9(){C.call(this);this.qT=null;}
function AC3(a,b){return L8(a.qT,b);}
function Sx(){C.call(this);this.jx=null;}
var ATj=null;function OQ(){var a=new Sx();Za(a);return a;}
function Za(a){a.jx=Ck();}
function DW(a,b,c,d){Ow(a,ABM(d,b,c));}
function D_(b,c,d){return ABM(d,b,c);}
function Eq(a,b,c,d){Ow(a,AQJ(null,b,c,d));}
function Ow(a,b){BW(a.jx,b);}
function G6(a){return GU(Hm(a.jx,ATj));}
function Xb(){ATj=R(Dx,0);}
var WC=F(0);
var ATk=null;function ABs(){ATk=new ML;}
function ER(){var a=this;C.call(a);a.jG=null;a.lf=null;a.lt=null;a.bF=null;a.eQ=null;}
function ATt(a,b,c,d,e){var f=new ER();F4(f,a,b,c,d,e);return f;}
function F4(a,b,c,d,e,f){a.jG=b;a.lf=c;a.lt=d;a.bF=e;a.eQ=f;}
function G0(){var a=this;C.call(a);a.iW=null;a.fr=null;a.so=null;}
function ATu(a,b,c){var d=new G0();K_(d,a,b,c);return d;}
function K_(a,b,c,d){a.iW=b;a.fr=c;a.so=d;}
function Xa(){var b,c;b=new G0;c=Bq(B(303));EE();K_(b,c,AS8,AS9);return b;}
function ACb(){var b,c;b=new G0;Dm();c=AS5;EE();K_(b,c,AS6,AS9);return b;}
function ACx(){var a=this;C.call(a);a.iU=null;a.p4=0;}
function AER(a,b){var c=new ACx();AOp(c,a,b);return c;}
function AOp(a,b,c){var d;d=new B3;a.iU=d;a.p4=b;d.bu=c;}
function JI(a,b){return Cc(a.p4,b);}
var Hz=F(0);
var VW=F();
function ALZ(a,b,c,d){var e;b=Bx();d=Ct(d);e=new M;O(e);G(G(S(G(e,B(304)),c),B(272)),d);Bu(b,N(e));}
var VX=F();
function JW(){var a=this;C.call(a);a.bZ=null;a.ep=null;a.f7=null;a.lC=null;a.vj=null;a.et=null;a.bm=null;a.eh=null;a.dw=0;a.hk=0;a.b1=0;a.s4=null;a.cW=0;a.c3=0;a.eL=0;a.lu=0;}
var ATv=0;function LK(a){return a.bm.data.length?0:1;}
function Lc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=K3(b);if(LK(a))return;BI(a.et);CB(c,a.et);d=FE(a.et);a.dw=Cc(2.0,b.bH);e=C6(a.et.ld);a.hk=e;f=e;g=new T_;g.tu=c;g.tv=f;h=AOb(d);i=a.bm.data;e=i.length;j=0;while(j<e){k=i[j];l=I8(g,k.ef);if(Ew(k.ef,B(278)))a.lu=l;else{m=I8(g,k.iE);n=I8(g,k.iQ);a.cW=W(a.cW,l);a.c3=W(a.c3,m);a.eL=W(a.eL,n);}j=j+1|0;}e=((a.cW+a.c3|0)+a.eL|0)+(a.hk*2|0)|0;i=a.bm.data;j=i.length;n=0;while(n<j){k=i[n];Bf(k.bW.bP,GZ(h,k.ef,g));KB(k.bW,0.0);if(!Ew(k.ef,B(278))){Bf(k.cj.bP,GZ(h,k.iE,g));KB(k.cj,
a.cW-k.bW.g.a|0);Bf(k.cB.bP,GZ(h,k.iQ,g));KB(k.cB,(a.cW-k.bW.g.a|0)+(a.c3-k.cj.g.a|0)|0);a.cW=W(a.cW,k.bW.g.a);a.c3=W(a.c3,k.cj.g.a);a.eL=W(a.eL,k.cB.g.a);}n=n+1|0;}Du(a.ep,Wk(h));b=a.bZ.g;j=W(e,a.lu);l=a.dw;b.a=j+(l*2|0)|0;a.bZ.g.b=Bb(d+l|0,a.bm.data.length)+l|0;}
function LY(a,b){var c,d,e,f,g,h;if(Ew(b.ef,B(278)))return;c=b.dI;d=b.bW;e=d.s;f=e.a;d=d.g;g=d.a;F1(c,f+g|0,e.b,a.cW-g|0,d.b);c=b.dy;d=b.dI;g=d.s.a+d.g.a|0;d=b.cj;e=d.g;f=e.a;F1(c,g+f|0,d.s.b,a.c3-f|0,e.b);c=b.d2;d=b.dy;f=d.s.a+d.g.a|0;d=b.cB;b=d.g;h=b.a;F1(c,f+h|0,d.s.b,(((a.bZ.g.a-h|0)-a.c3|0)-a.cW|0)-(a.dw*2|0)|0,b.b);}
function KB(b,c){var d,e;d=b.s;e=b.bP;d.a=e.bd+c|0;d.b=e.bt|0;b=b.g;b.a=e.bk|0;b.b=e.bu|0;}
function V_(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;Bh(a.bZ.s,b,c);d=a.dw;e=a.bm.data;f=e.length;g=0;h=b+d|0;while(g<f){i=e[g];j=i.bW;k=i.cj;l=i.cB;m=j.s;m.a=h;n=c+d|0;m.b=n;m=k.s;b=a.cW;o=j.g;m.a=h+(b-o.a|0)|0;m.b=n;m=l.s;m.a=(h+(b-o.a|0)|0)+(a.c3-k.g.a|0)|0;m.b=n;if(!Ew(i.ef,B(278))){LY(a,i);m=i.dI.s;m.a=h+j.g.a|0;m.b=n;m=i.dy.s;m.a=(h+k.s.a|0)+k.g.a|0;m.b=n;m=i.d2.s;m.a=(h+l.s.a|0)+l.g.a|0;m.b=n;}if(!(j.g.b&&k.g.b&&l.g.b))$rt_globals.console.info("FindUsages.setPos: tRect.size == 0");d=d+(j.g.b+a.dw|0)|0;g=g+
1|0;}}
function UP(a){var b,c;b=a.ep;if(b.a&&b.b)return a.bZ.g;c=new Bm;Bj(c,B(305));J(c);}
function Ue(a){Bh(a.ep,0,0);}
function AAx(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(!a.bm.data.length)return;a:{if(a.eh!==null){c=a.ep;if(Bb(c.a,c.b))break a;}c=a.ep;if(!Bb(c.a,c.b))Lc(a,b);c=a.ep;d=c.a;e=c.b;if(!Bb(d,e))return;c=b.c4;f=CI(c,d+150|0,e);CB(f,a.et);g=a.et;h=g.dg;h=h-(h+g.dY)/16.0;i=a.bm.data;d=i.length;e=0;while(e<d){g=i[e];j=g.ef;k=g.bW.bP;Ce(f,j,k.bd+a.hk,h+k.bt);j=g.iE;k=g.cj.bP;Ce(f,j,k.bd+a.hk,h+k.bt);j=g.iQ;g=g.cB.bP;Ce(f,j,g.bd+a.hk,h+g.bt);e=e+1|0;}c=CJ(a.eh,CR(c));a.eh=c;CL(c,f);FB(f);}c=b.c4;Cu(c,1);if(!Ib(a.bZ)){f=a.bZ;UX(c,
f.g,f.s,f.S,a.dw,a.f7);f=a.bZ;Yd(c,f.g,f.s,f.M,a.dw,a.f7);f=a.bZ;TP(c,f.g,f.s,0,0,JI(a.lC,b.bH),a.lC.iU,a.f7);}i=a.bm.data;l=i.length;m=0;while(m<l){f=i[m];LY(a,f);CK(f.bW,c,a.eh,0,0,1.0);CK(f.cj,c,a.eh,f.bW.g.a,0,1.0);CK(f.cB,c,a.eh,f.bW.g.a+f.cj.g.a|0,0,1.0);Gv(f.dI,c,0,0);Gv(f.dy,c,0,0);Gv(f.d2,c,0,0);if(ATv){(GO(1.0,1.0,1.0,f.dI.M)).bu=0.30000001192092896;(GO(0.2,1.0,1.0,f.dy.M)).bu=0.30000001192092896;(GO(0.5,1.0,1.0,f.d2.M)).bu=0.30000001192092896;}m=m+1|0;}i=a.bm.data;e=i.length;l=0;while(l<e){f=i[l];g
=f.bW;j=f.cj;k=f.cB;b=a.f7;d=a.bZ.g.a-(a.dw*2|0)|0;c=g.g;b.a=d-c.a|0;b.b=(c.b+j.g.b|0)+k.g.b|0;l=l+1|0;}}
function RP(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.bm.data;if(c>=d.length)return (-1);e=d[c].bW;if(DT(e,b))return c;f=e.s;g=f.a;e=e.g;h=e.a;g=g+h|0;i=f.b;f=a.f7;f.a=(a.bZ.g.a-(a.dw*2|0)|0)-h|0;f.b=e.b;if(Nw(b,g,i,f))break;c=c+1|0;}return c;}
function AAH(){ATv=0;}
function UJ(){C.call(this);this.ts=null;}
function ABi(){var a=this;C.call(a);a.iv=null;a.g6=null;a.oM=null;a.oU=null;}
function AJj(a,b,c,d){var e=new ABi();AOv(e,a,b,c,d);return e;}
function AOv(a,b,c,d,e){a.iv=b;a.g6=c;a.oM=d;a.oU=e;}
function WQ(){C.call(this);this.qr=null;}
function ALq(a,b){var c;c=a.qr.h6;c.dF=Fx(b,OP(c));}
function MU(){C.call(this);this.m2=null;}
function C_(a,b){Gf(a.m2,b);return 1;}
var Dq=F(0);
var AS$=null;var ATo=null;var AS8=null;var ATw=null;var AS9=null;var AS_=null;var ATx=null;var AS7=null;var AS6=null;function EE(){EE=Bo(Dq);AHp();}
function AHp(){AS$=WV(50,50,50,100);ATo=WV(80,80,80,200);AS8=Bq(B(306));ATw=Bq(B(275));AS9=Bq(B(307));AS_=Bq(B(306));ATx=Bq(B(275));AS7=Bq(B(307));Dm();AS6=ASY;}
var ZQ=F();
function OB(){C.call(this);this.my=null;}
function AH2(a,b){var c;c=a.my.iH;c.ei=Fx(b,QD(c));}
function UO(){C.call(this);this.gl=null;}
function AC2(a,b){return JJ(a.gl,b);}
function AL1(a,b,c,d){return IJ(a.gl,b,c,d);}
function AMW(a,b,c){return I9(a.gl,b,c);}
function AHU(a,b,c){return DP(a.gl);}
function Qg(){C.call(this);this.lL=null;}
function AC6(a,b){return C_(a.lL,null);}
var Yh=F();
function Jq(){var a=this;C.call(a);a.D=null;a.c0=null;a.dR=null;a.eb=null;a.e5=null;a.cp=0;a.fn=0;a.oA=0.0;}
function ALf(){var a=new Jq();AMK(a);return a;}
function AMK(a){a.dR=HE();a.eb=HE();a.e5=Ck();a.D=L2(B(31));a.fn=0;a.cp=0;a.c0=S5(a);}
function S5(a){var b,c,d,e,f,g,h,i;b=Sf(a);c=new Id;d=new MW;e=M6(0,b,0);f=new Ww;f.rV=e;LW(d,1);e=BR(f);g=0;while(true){h=d.cc.data;i=h.length;if(g>=i)break;h[g]=BV(e);g=g+1|0;}d.j=i;S_(c,d);return c;}
function B0(a,b){return a.D.data[b];}
function CA(a){return a.D.data.length;}
function Sf(a){return FV(a,CA(a));}
function E7(a,b){return a.D.data[b].O;}
function Kf(a,b){var c,d,e,f,g,h,i;c=a.D.data;d=c[b];e=c[b+1|0];f=DB(KS(d.o,e.o));g=a.D;h=g.data.length;if(b<h&&b>=0){i=R(Cw,h-1|0);c=i.data;PV(g,b,i);c[b]=f;a.D=i;return;}d=new Bm;U(d);J(d);}
function Oc(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.D.data;if(!(c<d[b].O?0:1)){d=(B0(a,b)).o.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.v)){f=L(h.v,g);break a;}g=g-I(h.v)|0;f=f+1|0;}f=0;}Ez();h=new Bv;d=BL(1);d.data[0]=f;G3(h,d);Gj(a,b,c,1,h);h=a.D.data[b];i=h.o;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].v);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].v)==1)h.o=PV(i,j,R(B4,e-1|0));else{k=d[j];if(c<=0)l=Ds(Dr(k.v,1),k.cF,k.b7);else if(c>=(I(k.v)-1|0)){l=new B4;m=k.v;Ua(l,B7(m,0,I(m)-
1|0),k.cF,k.b7);}else{i=BL(I(k.v)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.v,b);b=b+1|0;}b=n.length;while(c<b){m=k.v;e=c+1|0;n[c]=L(m,e);c=e;}l=Ds(FG(i),k.cF,k.b7);}d[j]=l;}h.O=h.O-1|0;D4(h);}else if(b!=(d.length-1|0))Kf(a,b);}
function WH(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){V5(a.D.data[b],c,e[0]);return;}g=f-1|0;h=H6(a.D.data[b],c);d=a.D;i=C$(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.o.data;m=l.length;c=!m?0:I(l[m-1|0].v);IU(j,j.o.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(E_(e[m]))j=DB(R(B4,0));else{j=new Cw;l=R(B4,1);l.data[0]=Ds(e[m],0,0);HG(j,l);}d[b+m|0]=j;m=m+1|0;}IU(h[1],0,0,e[g]);d[b+g|0]=h[1];a.D
=i;}
function UZ(a,b){var c,d,e,f,g,h,i;c=DQ(b);d=Fi(b);e=c.K;if(e==d.K)return B7(Ex(a.D.data[e]),c.V,d.V);f=new M;O(f);b=a.D.data[c.K];e=c.V;BB(BX(f,Dr(Ex(b),e)),10);g=a.D;h=c.K+1|0;e=d.K;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;W_(BX(f,Ex(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.D.data[d.K];i=d.V;BX(f,B7(Ex(b),0,i));return N(f);}}b=new Vu;U(b);J(b);}
function Sh(a,b,c){var d;TE(a,b);d=DQ(b);Gj(a,d.K,d.V,1,c);}
function TE(a,b){var c,d,e,f,g,h,i;a:{c=DQ(b);d=Fi(b);e=c.K;if(e==d.K)FF(a.D.data[e],c.V,d.V);else{b=a.D.data[e];FF(b,c.V,b.O);FF(a.D.data[d.K],0,d.V);e=c.K+1|0;f=d.K;g=a.D;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(Cw,(h-f|0)+e|0);Y3(g,e,f,i);a.D=i;Kf(a,c.K);break a;}b=new Bm;U(b);J(b);}b=new Bm;U(b);J(b);}}}
function OJ(a,b,c){return EF(b,GD(B0(a,b),c));}
function Wn(a,b){b.bL=GD(B0(a,b.bD),b.bL);}
function MH(a,b){var c,d,e;c=0;d=0;while(true){e=a.D.data.length;if(c>=e)break;if((d+(B0(a,c)).O|0)>=b)return Cf(c,b-d|0);d=d+((B0(a,c)).O+1|0)|0;c=c+1|0;}return Cf(e,0);}
function FV(a,b){var c,d,e;c=0;d=a.D.data.length;e=0;while(e<b){c=c+E7(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Pa(a,b){return TM(B0(a,b.bD),b.bL);}
function F6(a){var b,c,d,e,f,g,h,i,j;b=BL(Sf(a));c=b.data;d=a.D.data.length;e=0;f=0;while(e<d){g=a.D.data[e].o.data;h=g.length;i=0;while(i<h){j=g[i].v;OF(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gj(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cp=a.cp+1|0;f=a.e5;g=R(GH,1);h=new GH;h.er=b;h.e1=c;i=K7(e,B(229),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=Cf(b,c+I(i[0])|0);break a;}k=Cf((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=Cf(b,c);}i=g.data;h.kh=k;h.i8=d;h.gE=e;i[0]=h;BW(f,g);I0(a,b,c,d,e);}
function I0(a,b,c,d,e){var f;f=FV(a,b)+c|0;if(!d)OD(a.c0,f,I(e));else SR(a.c0,f,I(e));}
function R_(a,b){var c,d,e;c=K7(b.gE,B(229),(-1));if(b.i8){WH(a,b.er,b.e1,c);OD(a.c0,FV(a,b.er)+b.e1|0,I(b.gE));}else{c=c.data;d=AKC();BZ(d.bM,b.er,b.e1);e=c.length;if(e==1)BZ(d.bB,b.er,b.e1+I(c[0])|0);else BZ(d.bB,(b.er+e|0)-1|0,I(c[e-1|0]));TE(a,d);SR(a.c0,FV(a,b.er)+b.e1|0,I(b.gE));}return b.kh;}
function Oo(a){a.fn=a.cp;}
var EJ=F();
function Lr(){EJ.call(this);this.uy=null;}
function LP(){EJ.call(this);this.uG=null;}
function O6(){EJ.call(this);this.vK=null;}
var H3=F(0);
var Qa=F(0);
function F$(){var a=this;C.call(a);a.K=0;a.V=0;}
function BZ(a,b,c){a.K=b;a.V=c;}
function V8(a,b){a.K=b.K;a.V=b.V;}
function WA(a,b){var c;c=BH(a.K,b.K);if(c)return c;return BH(a.V,b.V);}
function IE(){var a=this;C.call(a);a.kC=null;a.li=null;}
function Ip(a){return a.kC.bD;}
function KV(a){return a.kC.bL;}
var JU=F(FX);
var ASe=null;function AGd(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function ACy(){var b;b=new JU;WN(b);ASe=b;}
var ABZ=F();
function HY(b,c){var d,e,f;if(c<=0)return B(31);d=BL(c);e=d.data;e[0]=AAT(HO(b,52));f=1;while(f<c){e[f]=AAT(HO(b,62));f=f+1|0;}return FG(d);}
function AAT(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
function Wr(){C.call(this);this.kA=null;}
var ATm=null;function AKQ(){var a=new Wr();Yp(a);return a;}
function Yp(a){a.kA=Ck();}
function KM(a,b,c,d,e,f){var g;g=new JA;g.bW=J9();g.cj=J9();g.cB=J9();g.dI=J3();g.dy=J3();g.d2=J3();g.ef=b;g.iE=c;g.iQ=d;g.ct=e;g.km=f;Bf(g.bW.M,e.jG);Bf(g.bW.S,e.bF);Bf(g.cj.M,e.lf);Bf(g.cj.S,e.bF);Bf(g.cB.M,e.lt);Bf(g.cB.S,e.bF);Bf(g.dI.M,e.bF);Bf(g.dy.M,e.bF);Bf(g.d2.M,e.bF);BW(a.kA,g);}
function Pw(a){return Hm(a.kA,ATm);}
function YW(){ATm=R(JA,0);}
var YY=F();
function ACl(){var a=this;C.call(a);a.BY=null;a.zM=null;a.AR=0;a.An=0;}
function Zl(){var a=this;C.call(a);a.tL=null;a.BG=null;}
var ABL=F(0);
function ABu(b){var c;a:{switch(b){case 0:break;case 1:c=B(132);break a;case 2:c=B(253);break a;case 3:c=B(252);break a;default:c=null;break a;}c=B(160);}return c;}
var CO=F();
var AAb=F(CO);
var AAS=F(CO);
var X_=F(CO);
var Yu=F(CO);
var ABj=F(CO);
function Zv(){var a=this;Eo.call(a);a.gk=0;a.cO=null;a.ge=0;a.to=0.0;a.j8=0;}
function HE(){var a=new Zv();AFK(a);return a;}
function AFK(a){var b;b=AB0(16);a.gk=0;a.cO=R(HJ,b);a.to=0.75;TK(a);}
function AB0(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function TK(a){a.j8=a.cO.data.length*a.to|0;}
function MS(a,b){return RR(a,b)===null?0:1;}
function Ei(a,b){var c;c=RR(a,b);if(c===null)return null;return c.fA;}
function RR(a,b){var c,d;if(b===null)c=Q1(a);else{d=XW(b);c=O4(a,b,d&(a.cO.data.length-1|0),d);}return c;}
function O4(a,b,c,d){var e,f;e=a.cO.data[c];while(e!==null){if(e.ky==d){f=e.hE;if(b!==f&&!Xg(b,f)?0:1)break;}e=e.eX;}return e;}
function Q1(a){var b;b=a.cO.data[0];while(b!==null&&b.hE!==null){b=b.eX;}return b;}
function R5(a,b,c){var d,e,f;if(b===null){d=Q1(a);if(d===null){a.ge=a.ge+1|0;d=Tw(a,null,0,0);e=a.gk+1|0;a.gk=e;if(e>a.j8)TZ(a);}}else{e=XW(b);f=e&(a.cO.data.length-1|0);d=O4(a,b,f,e);if(d===null){a.ge=a.ge+1|0;d=Tw(a,b,f,e);e=a.gk+1|0;a.gk=e;if(e>a.j8)TZ(a);}}b=d.fA;d.fA=c;return b;}
function Tw(a,b,c,d){var e,f,g;e=new HJ;f=null;e.hE=b;e.fA=f;e.ky=d;g=a.cO.data;e.eX=g[c];g[c]=e;return e;}
function TZ(a){var b,c,d,e,f,g,h,i;b=a.cO.data.length;b=AB0(!b?1:b<<1);c=R(HJ,b);d=c.data;e=0;f=b-1|0;while(true){g=a.cO.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.ky&f;i=h.eX;h.eX=d[b];d[b]=h;h=i;}e=e+1|0;}a.cO=c;TK(a);}
function XW(b){var c,d,e,f,g,h;c=R(C,2).data;c[0]=FL(b.bD);c[1]=FL(b.bL);d=(-1515898884);e=0;while(e<c.length){b=c[e];if(b===null)f=0;else{g=b.fb;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;d=Jr(h,4)^((h>>>7|0)|h<<25)^Jr(d,13);e=e+1|0;}return d;}
function Cw(){var a=this;C.call(a);a.o=null;a.O=0;a.e9=null;a.dU=null;a.dd=null;a.gD=null;a.fu=0;a.hy=0;a.hc=0;}
var ATy=0;var ATz=0;var ATg=0;function DB(a){var b=new Cw();HG(b,a);return b;}
function HG(a,b){var c,d,e,f;c=b.data;a.o=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].v)|0;f=f+1|0;}a.O=d;D4(a);}
function GD(a,b){var c;c=HU(a,b);return c<=0?0:a.dd.data[c-1|0];}
function HU(a,b){var c,d,e,f;c=a.o.data.length;if(!c)return (-1);if(!(a.dd!==null&&!a.hc)){Vi(a);d=0;e=0;f=a.o.data.length;while(d<f){e=e+I(a.o.data[d].v)|0;a.dd.data[d]=e;d=d+1|0;}a.hc=0;}d=SU(a.dd,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function TM(a,b){var c;c=a.o.data;if(!c.length)return null;return c[HU(a,b)];}
function FF(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.O){a.o=R(B4,0);D4(a);a.O=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.o.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].v);i=I(a.o.data[f].v);j=BH(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.o.data[f];if(!b&&c==I(k.v)?1:0){g=a.o;a.o=PV(g,e,R(B4,g.data.length-1|0));a.O=a.O-d|0;D4(a);return;}a.o.data[e]=Ds(EZ(B7(k.v,0,b),Dr(k.v,c)),k.cF,k.b7);}else{g=a.o.data;l=g[e];m=g[f];if(b){if(b!=
I(l.v))a.o.data[e]=Ds(B7(l.v,0,b),l.cF,l.b7);e=e+1|0;}if(c==I(m.v))f=f+1|0;else if(c)a.o.data[f]=Ds(Dr(m.v,c),m.cF,m.b7);g=a.o;a.o=Y3(g,e,f,R(B4,(g.data.length-f|0)+e|0));}a.O=a.O-d|0;D4(a);}
function H6(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(Cw,[DB(R(B4,0)),a]);if(b>=a.O)return H(Cw,[a,DB(R(B4,0))]);c=a.o;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(Cw,[DB(J$(c,0,R(B4,d))),DB(J$(c,d,R(B4,f-d|0)))]);h=e[d];e=J$(c,0,R(B4,d+1|0));i=e.data;j=J$(c,d,R(B4,f-d|0));c=j.data;i[d]=Ds(B7(h.v,0,b),h.cF,h.b7);c[0]=Ds(Dr(h.v,b),h.cF,h.b7);return H(Cw,[DB(e),DB(j)]);}
function V5(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.o.data;if(e>=f.length)break a;g=I(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}IU(a,d,b,c);}
function IU(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.o;f=e.data;g=f.length;if(!g){h=R(B4,1);h.data[0]=QN(d);a.o=h;}else if(!b&&!c){i=R(B4,g+1|0);h=i.data;D6(e,0,i,1,g);h[0]=QN(d);a.o=i;}else{j=f[b];if(c<=0)k=Ds(EZ(d,j.v),j.cF,j.b7);else if(c>=I(j.v))k=Ds(EZ(j.v,d),j.cF,j.b7);else{l=I(d);m=l+c|0;n=I(j.v)-c|0;h=BL(I(j.v)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.v,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.v,g+c|0);g=g+1|0;}k=Ds(FG(h),j.cF,j.b7);}f[b]=k;}a.O=a.O+I(d)|0;D4(a);}
function V6(a){var b,c,d,e,f,g;b=0;c=a.o.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<I(f.v)){if(L(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Kr(a,b,c){var d,e,f,g,h,i,j;d=a.o.data.length;e=a.e9;if(!(e!==null&&e.data.length>=d)){a.e9=ACQ(d);a.dU=BF(d);a.fu=1;}Vi(a);if(!a.fu)ATz=ATz+1|0;else{f=0;g=0.0;ATy=ATy+1|0;h=0;while(h<d){i=c.data;j=a.o.data[h];f=f+I(j.v)|0;a.dd.data[h]=f;CB(b,i[j.b7]);g=g+Ee(b,j.v);a.e9.data[h]=g;a.dU.data[h]=g+0.5|0;h=h+1|0;}a.O=f;a.fu=0;a.hc=0;}}
function Vi(a){var b;b=a.dd;if(!(b!==null&&b.data.length>=a.o.data.length)){a.dd=BF(a.o.data.length);a.hc=1;}}
function D4(a){a.fu=1;a.hy=1;a.hc=1;a.gD=null;}
function VB(a,b,c,d){var e,f,g,h,i,j,k;if(a.gD===null)a.gD=R($rt_arraycls($rt_intcls()),a.o.data.length);e=a.gD.data[d];if(e===null){e=c.data;f=a.o.data[d];CB(b,e[f.b7]);f=f.v;e=BF(I(f)-1|0);c=Gg(f);g=!d?0.0:a.e9.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;WR(f,c,0,k);h[i]=g+Ee(b,f)+0.5|0;i=k;}a.gD.data[d]=e;}return e;}
function GF(a,b,c,d){var e,f,g,h,i;if(a.o.data.length&&b){if(!(!a.fu&&a.dU!==null))Kr(a,c,d);if(b>=a.O)return a.dU.data[a.o.data.length-1|0];e=0;f=0;a:{while(true){g=a.o.data;if(f>=g.length)break a;h=e+I(g[f].v)|0;i=BH(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.dU.data[f];}return (VB(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function EM(a){var b,c,d;a:{b=a.o.data.length;if(b){c=a.dU.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GA(a,b){var c;if(b>=a.O)return b+1|0;c=HU(a,b);return a.dd.data[c];}
function Ex(a){var b,c,d,e;b=new M;FJ(b,a.O);c=a.o.data;d=c.length;e=0;while(e<d){BX(b,c[e].v);e=e+1|0;}return N(b);}
function L2(b){var c,d,e,f;c=R(Cw,1);d=c.data;e=new Cw;f=R(B4,1);f.data[0]=QN(b);HG(e,f);d[0]=e;return c;}
function Xf(){ATg=0;}
var ML=F();
function AOt(a){}
function Td(){C.call(this);this.rW=null;}
function AI_(a){var b;b=a.rW;Bu(Bx(),b);}
function B4(){var a=this;C.call(a);a.v=null;a.cF=0;a.b7=0;}
function QN(a){var b=new B4();ANo(b,a);return b;}
function Ds(a,b,c){var d=new B4();Ua(d,a,b,c);return d;}
function ANo(a,b){Ua(a,b,0,0);}
function Ua(a,b,c,d){a.v=b;a.cF=c;a.b7=d;}
function G1(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Id(){var a=this;C.call(a);a.cH=null;a.dK=0;}
var ATA=null;var ATB=null;function AQG(a){var b=new Id();S_(b,a);return b;}
function APL(a,b){var c=new Id();WM(c,a,b);return c;}
function Um(b,c){var d;d=BH(b.bI,c.bI);if(!d)d=BH(c.bO,b.bO);return d;}
function S_(a,b){WM(a,null,b);}
function WM(a,b,c){var d,e;a.dK=0;if(D2(c))return;Na(c,ATA);if(b!==null)a.cH=LR(b);c=BR(c);while(B1(c)){d=BV(c);e=a.cH;if(e!==null){PY(a,e,LR(d));continue;}a.cH=LR(d);}}
function Oe(a,b){var c;if(b.eH)return b;b=BR(b.bw);while(true){if(!B1(b))return null;c=Oe(a,BV(b));if(c!==null)break;}return c;}
function JO(a,b,c){var d,e,f;d=b.b3;if(d.bI==c.bI&&d.bO==c.bO?1:0){e=BR(b.bw);while(B1(e)){f=JO(a,BV(e),c);if(f!==null)return f;}return b;}b=BR(b.bw);while(true){if(!B1(b))return null;d=BV(b);if(O_(d,c.bI,c.bO)){e=JO(a,d,c);if(e!==null)break;}}return e;}
function Vj(a,b,c){BW(c,b.b3);b=BR(b.bw);while(B1(b)){Vj(a,BV(b),c);}}
function OD(a,b,c){a.dK=0;IC(a,a.cH,b,c);}
function IC(a,b,c,d){var e;if(C1(b)<c)return;a:{if(CU(b)>c){JN(b,d);FK(b,d);b=BR(b.bw);while(B1(b)){IC(a,BV(b),c,d);}}else{if(!Jv(b,c)){if(a.dK)break a;if(C1(b)!=c)break a;}FK(b,d);if(CU(b)==c&&a.dK)JN(b,d);e=BR(b.bw);while(B1(e)){IC(a,BV(e),c,d);}if(!a.dK){b.eH=1;a.dK=1;}}}}
function SR(a,b,c){a.dK=0;Lv(a,a.cH,b,c);}
function Lv(a,b,c,d){var e,f,g,h;if(C1(b)<c)return;e=CU(b);f=c+d|0;if(e>f){e= -d|0;JN(b,e);FK(b,e);g=BR(b.bw);while(B1(g)){Lv(a,BV(g),c,d);}b.bw=MN(a,b.bw);}else{g=b.b3;if(c<=g.bI&&g.bO<=f?1:0){if(b!==a.cH){IL(b,(-1));Js(b,(-1));}else{IL(b,0);Js(b,0);}G9(b.bw);}else{e=Jv(b,c);f=Jv(b,f);if(e&&f)FK(b, -d|0);else if(e)Js(b,c);else{if(!f)return;IL(b,c);FK(b, -d|0);}h=BR(b.bw);while(B1(h)){Lv(a,BV(h),c,d);}b.bw=MN(a,b.bw);if(!a.dK){b.eH=1;a.dK=1;}}}}
function MN(a,b){var c,d,e,f,g,h;c=Ck();d=null;Na(b,ATB);b=BR(b);while(B1(b)){e=BV(b);if(CU(e)==C1(e))continue;if(!e.eH){if(d!==null){BW(c,d);d=null;}BW(c,e);}else if(d===null)d=e;else{f=X(CU(d),CU(e));g=W(C1(d),C1(e));h=LR(M6(f,g,d.b3.eZ));h.du=e.du;h.eH=1;d=h;}}if(d!==null)BW(c,d);return c;}
function PY(a,b,c){var d,e;a:{if(NH(b,c)){d=BR(b.bw);while(true){if(!B1(d)){BW(b.bw,c);c.du=b;break a;}e=BV(d);if(NH(e,c))break;}PY(a,e,c);return;}}}
function Q2(a,b,c,d){var e,f,g,h,i,j;if((C1(c)-CU(c)|0)<43)e=B7(d,CU(c),C1(c));else{e=B7(d,CU(c),CU(c)+20|0);f=B7(d,C1(c)-20|0,C1(c));g=new M;O(g);G(G(G(g,e),B(278)),f);e=N(g);}e=T6(e,B(229),B(308));f=Bx();g=Ct(c);h=new M;O(h);i=S(h,b);BB(i,32);g=G(i,g);BB(g,9);G(g,e);Bu(f,N(h));c=BR(c.bw);j=b+1|0;while(B1(c)){Q2(a,j,BV(c),d);}}
function AAv(){ATA=new Wf;ATB=new Wh;}
function JA(){var a=this;C.call(a);a.bW=null;a.cj=null;a.cB=null;a.dI=null;a.dy=null;a.d2=null;a.km=null;a.ct=null;a.ef=null;a.iE=null;a.iQ=null;}
function F9(a,b){Bf(a.bW.S,!b?a.ct.bF:a.ct.eQ);Bf(a.cj.S,!b?a.ct.bF:a.ct.eQ);Bf(a.cB.S,!b?a.ct.bF:a.ct.eQ);Bf(a.dI.M,!b?a.ct.bF:a.ct.eQ);Bf(a.dy.M,!b?a.ct.bF:a.ct.eQ);Bf(a.d2.M,!b?a.ct.bF:a.ct.eQ);}
function AB3(){var a=this;C.call(a);a.bI=0;a.bO=0;a.eZ=0;}
function M6(a,b,c){var d=new AB3();AFQ(d,a,b,c);return d;}
function AFQ(a,b,c,d){a.bI=b;a.bO=c;a.eZ=d;}
function AMJ(a,b){var c;if(a===b)return 1;if(b!==null&&Cy(a)===Cy(b)){c=b;return a.bI==c.bI&&a.bO==c.bO&&a.eZ==c.eZ?1:0;}return 0;}
function AEr(a,b){var c;b=b;c=BH(a.bI,b.bI);if(!c)c=BH(b.bO,a.bO);return c;}
var Wf=F();
function AGY(a,b,c){return Um(b,c);}
var Wh=F();
function AIB(a,b,c){b=b;c=c;return Um(b.b3,c.b3);}
var EK=F();
var ATC=null;var ATD=null;var ATE=null;var ATF=null;var ATG=null;var ATH=null;function Z4(){ATC=new Uu;ATD=new Us;ATE=new Ut;ATF=new Uq;ATG=new Ur;ATH=new WP;}
var GL=F(FR);
function AJp(a,b){var c;c=new E4;U(c);J(c);}
function Ww(){GL.call(this);this.rV=null;}
function AGa(a){return 1;}
function AOi(a,b){var c;if(!b)return a.rV;c=new By;U(c);J(c);}
function Xd(){var a=this;C.call(a);a.b3=null;a.du=null;a.bw=null;a.eH=0;}
function LR(a){var b=new Xd();AK7(b,a);return b;}
function AK7(a,b){a.eH=0;a.b3=b;a.du=null;a.bw=Ck();}
function CU(a){return a.b3.bI;}
function C1(a){return a.b3.bO;}
function IL(a,b){a.b3.bI=b;}
function Js(a,b){a.b3.bO=b;}
function JN(a,b){var c;c=a.b3;c.bI=c.bI+b|0;}
function FK(a,b){var c;c=a.b3;c.bO=c.bO+b|0;}
function Jv(a,b){return CU(a)<=b&&b<C1(a)?1:0;}
function O_(a,b,c){var d;d=a.b3;return d.bI<=b&&c<=d.bO?1:0;}
function NH(a,b){b=b.b3;return O_(a,b.bI,b.bO);}
function AG4(a){var b,c,d,e,f;b=a.b3;c=b.bI;d=b.bO;e=b.eZ;b=new M;O(b);BB(b,40);BB(S(G(S(G(S(b,c),B(43)),d),B(43)),e),41);b=N(b);c=a.eH;f=new M;O(f);FQ(G(G(f,b),B(43)),c);return N(f);}
var NT=F(0);
var FZ=F(EA);
var Jt=F(FZ);
var Uu=F(Jt);
var KE=F(Eo);
var Us=F(KE);
var Ut=F(GL);
var Fp=F(0);
var Uq=F();
var Ok=F(0);
var Ur=F();
var WP=F();
function KC(){var a=this;C.call(a);a.iK=null;a.ps=null;a.ry=null;a.tK=null;a.lZ=null;a.kN=null;a.pG=null;a.mE=null;a.bg=null;a.nw=null;a.tf=null;}
function ATI(a,b,c,d,e,f,g,h,i,j,k){var l=new KC();Mv(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Mv(a,b,c,d,e,f,g,h,i,j,k,l){var m;m=j.data;a.iK=b;a.ps=c;a.ry=d;a.tK=e;a.lZ=f;a.kN=g;a.pG=h;a.mE=i;a.nw=j;a.tf=k;if(m.length>=15){a.bg=l;return;}b=new BA;U(b);J(b);}
function MD(){var a=this;C.call(a);a.ha=0;a.lo=0;a.hW=0;a.fO=0;a.gp=null;}
function B1(a){return a.ha>=a.hW?0:1;}
function BV(a){var b,c;N9(a);b=a.ha;a.fO=b;c=a.gp;a.ha=b+1|0;return c.ql(b);}
function PG(a){var b,c,d;if(a.fO<0){b=new DL;U(b);J(b);}N9(a);a.gp.sN(a.fO);a.lo=a.gp.cs;c=a.fO;d=a.ha;if(c<d)a.ha=d-1|0;a.hW=a.hW-1|0;a.fO=(-1);}
function N9(a){var b;if(a.lo>=a.gp.cs)return;b=new K2;U(b);J(b);}
var YM=F();
function UM(){C.call(this);this.iP=null;}
function AMo(a,b){var c,d,e,f,g;c=a.iP;d=c.jp;if(d!==null){e=b.n;f=e.a-d.a|0;g=e.b-d.b|0;e=c.hQ;e.a=GW(0,e.a+f|0,c.gg.a-c.g_.a|0);c=a.iP;d=c.hQ;d.b=GW(0,d.b+g|0,c.gg.b-c.g_.b|0);}a.iP.jp=b.n;return 1;}
var YV=F();
function JP(){var a=this;C.call(a);a.hE=null;a.fA=null;}
function HJ(){var a=this;JP.call(a);a.ky=0;a.eX=null;}
function TW(){C.call(this);this.qQ=null;}
function AHx(a,b){Hk(a.qQ,b);}
function UT(){C.call(this);this.h$=null;}
function AOy(a){return a.h$;}
function Cd(){Cq.call(this);this.kv=null;}
var ATJ=null;var ATK=null;var ATL=null;var ATM=null;var ATN=null;var ATO=null;var ATP=null;var ATQ=null;var ATR=null;var ATS=null;var ATT=null;var ATU=null;var ATV=null;var ATW=null;var ATX=null;var ASX=null;function X8(){X8=Bo(Cd);AN$();}
function Dk(a,b,c){var d=new Cd();R9(d,a,b,c);return d;}
function AOa(a,b,c,d){var e=new Cd();AAa(e,a,b,c,d);return e;}
function R9(a,b,c,d){X8();DA(a,b,c);a.kv=Si(d,null);}
function AAa(a,b,c,d,e){X8();DA(a,b,c);a.kv=Si(d,e);}
function AN$(){var b;b=new Cd;Dm();R9(b,B(309),0,ASO);ATJ=b;ATK=Dk(B(310),1,Cv(204,120,50));ATL=Dk(B(311),2,Bq(B(312)));ATM=Dk(B(313),3,Bq(B(314)));ATN=Dk(B(315),4,Bq(B(316)));ATO=Dk(B(317),5,Cv(188,63,60));ATP=Dk(B(318),6,Bq(B(319)));ATQ=Dk(B(320),7,Bq(B(321)));ATR=Dk(B(322),8,Bq(B(323)));ATS=AOa(B(324),9,ASO,Cv(52,65,52));ATT=AOa(B(325),10,Bq(B(326)),Bq(B(327)));ATU=Dk(B(328),11,Bq(B(329)));ATV=Dk(B(330),12,Bq(B(331)));ATW=Dk(B(332),13,Bq(B(333)));b=Dk(B(334),14,Bq(B(335)));ATX=b;ASX=H(Cd,[ATJ,ATK,ATL,ATM,
ATN,ATO,ATP,ATQ,ATR,ATS,ATT,ATU,ATV,ATW,b]);}
function IH(){var a=this;C.call(a);a.qJ=null;a.qK=null;}
function Si(a,b){var c=new IH();AD7(c,a,b);return c;}
function AD7(a,b,c){a.qJ=b;a.qK=c;}
function WL(){var a=this;C.call(a);a.bl=null;a.bi=null;a.z=null;a.gh=null;}
function Et(a,b,c){var d;d=a.z;d.il(b,c,d.dC);Jf(a);}
function Jf(a){var b,c,d,e;b=a.bi;c=a.z.t.a;b.t.a=c;d=b.c1;if(d!==null&&c!=B_(d)&&!(c>=b.hg&&B_(b.c1)>=b.hg))b.go=1;b=a.bi;b.dC=a.bl.bH;if(SP(b))c=0;else{b=a.bi;PM(b);e=Dj(b.gw,b.ii);Wy(b,FE(b.dB)+(e*2|0)|0);c=b.t.b;}b=a.bi.I;d=a.z.I;Bh(b,d.a,d.b-c|0);}
function Nc(a,b,c){var d;d=a.bi.I.a;return (d-c|0)<=b&&b<d?1:0;}
function SD(a,b,c){var d,e;d=a.bi;e=d.I.a+d.t.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Os(a,b,c){var d;d=a.bi.I.b;return (d-c|0)<=b&&b<d?1:0;}
function O$(a,b,c){var d,e;d=a.z;e=d.I.b+d.t.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Wt(a,b){var c,d,e;c=a.bi.I.b;d=a.z;e=d.I.b+d.t.b|0;return c<=b&&b<e?1:0;}
function SG(a,b){var c,d,e;c=a.bi;d=c.I.a;e=d+c.t.a|0;return d<=b&&b<e?1:0;}
var KK=F(0);
function P9(){C.call(this);this.n8=null;}
function AJO(a,b){return PH(a.n8,b);}
var XN=F();
function Cc(b,c){return C6(b*c);}
var W1=F();
function Yd(b,c,d,e,f,g){g.a=(c.a-f|0)-f|0;g.b=(c.b-f|0)-f|0;BJ(b,d.a+f|0,d.b+f|0,g,e);}
function UX(b,c,d,e,f,g){g.a=c.a;g.b=f;BJ(b,d.a,d.b,g,e);BJ(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;BJ(b,d.a,d.b+f|0,g,e);BJ(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function TP(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;BJ(b,j,k,i,h);BJ(b,j,k,i,h);BJ(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;BJ(b,l,j,i,h);BJ(b,l,j,i,h);BJ(b,l+g|0,j+g|0,i,h);}
function Mo(){var a=this;C.call(a);a.bV=null;a.ik=null;a.ec=null;a.dt=0;a.d_=0;a.f2=null;a.fs=null;a.fv=0;}
function RN(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dt;i=Bb(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=W(i,e))a:{while(true){if(d<=e){j=d;break a;}Ek(c);j=d+(-1)|0;b=Dd(d);d=Bb(j,a.d_)%a.ec.b|0;FT(a,c,b,a.fv,g);Hx(a.bV,c,0,d);if(!(j%a.dt|0))break;d=j;}}else{Ek(b);k=a.dt-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;FT(a,b,Dd(j),Bb(a.d_,k)+a.fv|0,g);k=k+(-1)|0;j=h;}CL(a.bV,b);j=W(i,e);}return j;}k=a.dt;h=Bb(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=X(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Ek(c);b=Dd((d+f|0)+1|0);j=d+1|
0;d=Bb(d,a.d_)%a.ec.b|0;FT(a,c,b,a.fv,g);Hx(a.bV,c,0,d);if(!(j%a.dt|0))break;d=j;}}else{Ek(b);d=0;while(d<a.dt){h=h+1|0;FT(a,b,Dd((h>e?h-f|0:h)+f|0),Bb(a.d_,d)+a.fv|0,g);d=d+1|0;}CL(a.bV,b);j=X(i,e);}return j;}
function Io(a,b,c,d,e,f){Hy(b,a.ik.a+d.a|0,c+d.b|0,a.f2,a.fs,a.bV,e,f,0.0);}
function FT(a,b,c,d,e){Ce(b,c,a.ec.a-20.0*e,d);}
var Fy=F(HV);
var VV=F(Eu);
function Pe(){C.call(this);this.l9=null;}
function AKH(a,b){var c,d;c=a.l9;d=c.dk+1|0;c.dk=d;c=new M;O(c);G(G(S(c,d),B(336)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function S7(){C.call(this);this.oR=null;}
function ANa(a){var b,c;b=a.oR;c=new M;O(c);G(G(G(c,B(337)),b),B(338));$rt_globals.console.info($rt_ustr(N(c)));}
var Xi=F();
function Ha(b,c,d){var e,f;a:{e=b.a;f=c.a;if(e>=f&&e<(f+d.a|0)){e=b.b;f=c.b;if(e>=f&&e<(f+d.b|0)){e=1;break a;}}e=0;}return e;}
function Nw(b,c,d,e){var f;a:{f=b.a;if(f>=c&&f<(c+e.a|0)){c=b.b;if(c>=d&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
var K2=F(Bm);
var Lh=F(DH);
var ATY=0.0;var ATZ=null;function AAw(){ATY=$rt_globals.NaN;ATZ=E($rt_floatcls());}
var Fj=F();
var AR5=null;var AR7=null;var AR8=null;var AR6=null;var AR4=null;function Zq(){AR5=ES([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AR7=AEA([Y(1),Y(10),Y(100),Y(1000),Y(10000),Y(100000),Y(1000000),Y(10000000),Y(100000000),Y(1000000000),B9(1410065408, 2),B9(1215752192, 23),B9(3567587328, 232),B9(1316134912, 2328),B9(276447232, 23283),B9(2764472320, 232830),B9(1874919424, 2328306),B9(1569325056, 23283064),B9(2808348672, 232830643)]);AR8=AEA([Y(1),Y(10),Y(100),Y(10000),Y(100000000),B9(1874919424, 2328306)]);AR6
=new S6;AR4=new Uo;}
var Jj=F();
var AT0=null;var AT1=null;function Z5(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.mW=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.jV=0;c.jC=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(EY(CS(Y(e),Y(8388608)),Ed)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=Z_(AT1,f);if(h<0)h=( -h|0)-2|0;i=AT1.data;j=9+(f-i[h]|0)|0;k=Y(e);l=AT0.data;m=Er(DU(BN(k,Y(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=Er(DU(BN(k,Y(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<( -g|0);o
=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BH(q,r);e=e>0?Bb(m/q|0,q):e<0?Bb(m/r|0,r)+r|0:Bb((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.jV=e;c.jC=h-50|0;}
function YH(){var b,c,d,e,f,g,h,i;AT0=BF(100);AT1=BF(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AT0.data;g=d+50|0;f[g]=$rt_udiv(e,20);AT1.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Er(Cm(Y(h),Gc(BN(Y(b&((1<<i)-1|0)),Y(10)),i)));f=AT0.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AT1.data[i]=c;d=d+1|0;}}
function Uo(){var a=this;C.call(a);a.jV=0;a.jC=0;a.mW=0;}
function La(){var a=this;C.call(a);a.ux=null;a.lT=0.0;a.uS=0.0;a.eC=null;a.gu=null;a.k5=null;a.eJ=0;}
function ABN(a,b){var c;if(b!==null){a.gu=b;return a;}c=new BA;Bj(c,B(339));J(c);}
function AAg(a,b){var c;if(b!==null){a.k5=b;return a;}c=new BA;Bj(c,B(339));J(c);}
function OV(a,b,c,d){var e,f,g,$$je;e=a.eJ;if(!(e==2&&!d)&&e!=3){a.eJ=d?2:1;while(true){try{f=ABP(a,b,c);}catch($$e){$$je=D5($$e);if($$je instanceof Bm){g=$$je;J(AFl(g));}else{throw $$e;}}if(GM(f))return f;if(HL(f)){if(d&&Dz(b)){g=a.gu;GQ();if(g===ASz)return DM(B2(b));if(B2(c)<=I(a.eC))return ASC;Es(b,b.P+B2(b)|0);if(a.gu===ASA)Jm(c,a.eC);}return f;}if(Pt(f)){g=a.gu;GQ();if(g===ASz)return f;if(g===ASA){if(B2(c)<I(a.eC))return ASC;Jm(c,a.eC);}Es(b,b.P+Jp(f)|0);}else if(K9(f)){g=a.k5;GQ();if(g===ASz)break;if(g
===ASA){if(B2(c)<I(a.eC))return ASC;Jm(c,a.eC);}Es(b,b.P+Jp(f)|0);}}return f;}b=new DL;U(b);J(b);}
function XY(a,b){var c,d,e,f;c=a.eJ;if(c&&c!=3){b=new DL;U(b);J(b);}if(!B2(b))return ACc(0);if(a.eJ)a.eJ=0;d=ACc(W(8,B2(b)*a.lT|0));while(true){e=OV(a,b,d,0);if(HL(e))break;if(GM(e))d=Rr(a,d);if(!JT(e))continue;Uj(e);}b=OV(a,b,d,1);if(JT(b))Uj(b);while(true){f=a.eJ;if(f!=3&&f!=2)break;a.eJ=3;if(HL(ASD)){d.de=d.P;d.P=0;d.gX=(-1);return d;}d=Rr(a,d);}b=new DL;U(b);J(b);}
function Rr(a,b){var c,d,e;c=b.gP;d=Xx(c,W(8,c.data.length*2|0));e=Zz(d,0,d.data.length);Es(e,b.P);return e;}
function MG(){C.call(this);this.tk=null;}
function AK0(a,b){DD(a.tk,b);}
function UD(){C.call(this);this.nG=null;}
function AOM(a,b){var c,d;c=a.nG;d=c.dk+1|0;c.dk=d;c=b.g2;b=new M;O(b);G(G(S(b,d),B(340)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Y_=F(CO);
function Qd(){C.call(this);this.l8=null;}
function AHq(a){MO(a.l8);}
function S6(){var a=this;C.call(a);a.kt=Ed;a.jo=0;a.mA=0;}
var DL=F(Bm);
var AAr=F(Eu);
function AFl(a){var b=new AAr();AJq(b,a);return b;}
function AJq(a,b){a.iu=1;a.i0=1;a.ke=b;}
var Po=F();
function ANQ(a,b){AAy(b);}
function ABw(){var a=this;C.call(a);a.bD=0;a.bL=0;}
function EF(a,b){var c=new ABw();AIH(c,a,b);return c;}
function AIH(a,b,c){a.bD=b;a.bL=c;}
function Xg(a,b){var c;if(a===b)return 1;if(b!==null&&Cy(a)===Cy(b)){c=b;return a.bD==c.bD&&a.bL==c.bL?1:0;}return 0;}
function ALh(a,b){var c;b=b;c=BH(a.bD,b.bD);if(!c)c=BH(a.bL,b.bL);return c;}
function MT(){var a=this;C.call(a);a.rN=null;a.rP=null;a.rO=0;}
function ADo(a,b){var c,d,e;c=a.rN;d=a.rP;e=a.rO;d.l(Wj(c,(b.n.a+e|0)-c.dA.a|0));}
function MR(){var a=this;C.call(a);a.o0=null;a.oZ=null;a.o1=0;}
function AFm(a,b){var c,d,e;c=a.o0;d=a.oZ;e=a.o1;d.l(NA(c,(b.n.b+e|0)-c.dA.b|0));}
function TU(){var a=this;C.call(a);a.uf=null;a.ue=null;}
function TS(){C.call(this);this.pU=null;}
function AEj(a,b){var c;c=a.pU;Sa(c,Fo(c,b.n));JS(c.p,c.y,c.x);Gz(c);}
function Sz(){C.call(this);this.oL=null;}
function AN0(a,b){var c,d,e;c=a.oL;if(c.e.h.cp==c.kj){b=b.data;d=Ej(b[0]);e=Fu(b[1]);ZE(c.e.h,d,e);Oo(c.e.h);}}
function JE(){var a=this;La.call(a);a.m5=null;a.qX=null;}
function ABP(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.m5;e=0;f=0;g=a.qX;a:{b:{while(true){if((e+32|0)>f&&Dz(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B2(b)+k|0;h=j.length;f=X(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new By;c=new M;O(c);S(G(S(G(c,B(341)),l),B(91)),h);Bj(b,N(c));J(b);}if(B2(b)<m){b=new K0;U(b);J(b);}if(m<0){b=new By;c=new M;O(c);G(S(G(c,B(92)),m),B(93));Bj(b,N(c));J(b);}n=b.P;h=n+b.j9|0;e=0;while(e<m){o=k+1|0;i=b.kM.data;l=h+1|0;j[k]=i[h];e=e+
1|0;k=o;h=l;}b.P=n+m|0;e=0;}if(!Dz(c)){p=!Dz(b)&&e>=f?ASD:ASC;break a;}i=g.data;n=B2(c);o=i.length;n=X(n,o);q=new T4;q.pT=b;q.rR=c;p=AB1(a,d,e,f,g,0,n,q);e=q.s6;if(p===null&&0==q.jq)p=ASD;k=q.jq;h=0;if(c.lw){b=new In;U(b);J(b);}if(B2(c)<k)break;if(h>o){b=new By;c=new M;O(c);BB(S(G(S(G(c,B(94)),h),B(88)),o),41);Bj(b,N(c));J(b);}l=h+k|0;if(l>o){b=new By;c=new M;O(c);S(G(S(G(c,B(96)),l),B(91)),o);Bj(b,N(c));J(b);}if(k<0){b=new By;c=new M;O(c);G(S(G(c,B(92)),k),B(93));Bj(b,N(c));J(b);}o=c.P;m=0;while(m<k){l=o+1
|0;n=h+1|0;Q$(c,o,i[h]);m=m+1|0;o=l;h=n;}c.P=c.P+k|0;if(p!==null)break a;}b=new Hu;U(b);J(b);}b=new By;c=new M;O(c);BB(S(G(S(G(c,B(94)),k),B(88)),h),41);Bj(b,N(c));J(b);}Es(b,b.P-(f-e|0)|0);return p;}
var So=F(JE);
function AB1(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(JH(h,2))break a;i=ASD;break a;}c=k+1|0;n=j[k];if(!Fr(a,n)){c=c+(-2)|0;i=DM(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(JH(h,3))break a;i=ASD;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Fr(a,n))break b;if(!Fr(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Lg(p)){c=k+(-3)|0;i=DM(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=DM(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(JH(h,4))break a;i=ASD;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B2(h.rR)<2?0:1)break a;i=ASC;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Fr(a,n))break c;if(!Fr(a,o))break c;if(!Fr(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=HD(r);m=c+1|0;j[c]=H7(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=DM(1);break a;}c=k+(-3)|0;i
=DM(1);}h.s6=c;h.jq=f;return i;}
function Fr(a,b){return (b&192)!=128?0:1;}
function OU(){C.call(this);this.qD=null;}
function AEu(a,b){var c,d;c=a.qD;d=c.dk+1|0;c.dk=d;c=new M;O(c);G(G(S(c,d),B(342)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Ub(){C.call(this);this.wr=null;}
function AJ8(a){Bu(Bx(),B(343));}
function Py(){C.call(this);this.mr=null;}
function ACM(a,b){a.mr.l(Fm(b));}
function Tx(){C.call(this);this.qZ=null;}
function AOl(a,b){a.qZ.r();}
var ZC=F();
function Q7(){C.call(this);this.s1=null;}
function ADF(a,b){var c,d,e,f;c=a.s1;d=Ct(b);e=new M;O(e);G(G(e,B(344)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new Rq;d.uL=c;d.op=b;e=new Rp;e.tG=c;f=new Ts;f.uB=e;e=new UG;e.mX=d;c=b.eI;if(c!==null)c.arrayBuffer().then(Bl(e,"f"),Bl(f,"f"));else{b=b.gm.getFile();c=new UK;c.rJ=e;c.rK=f;b.then(Bl(c,"f"),Bl(f,"f"));}}
function Q6(){C.call(this);this.ve=null;}
function AEk(a,b){var c;b=Ct(b);c=new M;O(c);G(G(c,B(345)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var Qp=F();
function AGL(a,b){b=b;b.bV=CJ(b.bV,null);}
function RQ(){C.call(this);this.lI=null;}
function AIO(a){Dw(a.lI);}
var Jd=F(DH);
var AT2=0.0;var AT3=null;function X3(){AT2=$rt_globals.NaN;AT3=E($rt_doublecls());}
var KH=F();
var AT4=null;var AT5=null;function Zn(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.mA=EY(CS(d,B9(0, 2147483648)),Ed)?0:1;e=CS(d,B9(4294967295, 1048575));f=Er(Gc(d,52))&2047;if(EY(e,Ed)&&!f){c.kt=Ed;c.jo=0;return;}g=0;if(f)e=APU(e,B9(0, 1048576));else{e=E9(e,1);while(EY(CS(e,B9(0, 1048576)),Ed)){e=E9(e,1);f=f+(-1)|0;g=g+1|0;}}h=Z_(AT5,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AT5.data[h]|0)|0;j=P$(e,AT4.data[h],i);if(Yt(j,B9(2808348672, 232830643))){h=h+1|0;i=12+(f-AT5.data[h]|0)|0;j=P$(e,AT4.data[h],i);}k
=DU(AT4.data[h],(63-i|0)-g|0);l=Gc(Cm(k,Y(1)),1);m=Gc(k,1);if(EY(e,B9(0, 1048576)))m=Gc(m,2);n=Y(10);while(OE(n,m)){n=BN(n,Y(10));}if(Yt(L1(j,n),De(m,Y(2))))n=De(n,Y(10));o=Y(1);while(OE(o,l)){o=BN(o,Y(10));}if(AFy(JF(o,L1(j,o)),De(l,Y(2))))o=De(o,Y(10));f=AQe(n,o);e=f>0?BN(De(j,n),n):f<0?Cm(BN(De(j,o),o),o):BN(De(Cm(j,De(o,Y(2))),o),o);if(Yt(e,B9(2808348672, 232830643))){h=h+1|0;e=De(e,Y(10));}else if(AFO(e,B9(1569325056, 23283064))){h=h+(-1)|0;e=BN(e,Y(10));}c.kt=e;c.jo=h-330|0;}
function P$(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CS(b,Y(65535));f=CS(DU(b,16),Y(65535));g=CS(DU(b,32),Y(65535));h=CS(DU(b,48),Y(65535));i=CS(c,Y(65535));j=CS(DU(c,16),Y(65535));k=CS(DU(c,32),Y(65535));l=CS(DU(c,48),Y(65535));m=Cm(Cm(BN(k,e),BN(j,f)),BN(i,g));n=Cm(Cm(Cm(BN(l,e),BN(k,f)),BN(j,g)),BN(i,h));o=Cm(Cm(E9(BN(l,h),32+d|0),E9(Cm(BN(l,g),BN(k,h)),16+d|0)),E9(Cm(Cm(BN(l,f),BN(k,g)),BN(j,h)),d));return Cm(d>16?Cm(o,E9(n,d-16|0)):Cm(o,DU(n,16-d|0)),DU(m,32-d|0));}
function Y4(){var b,c,d,e,f,g,h,i,j,k;AT4=AQ7(660);AT5=BF(660);b=B9(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AT4.data;g=d+330|0;f[g]=Fs(e,Y(80));AT5.data[g]=c;e=Fs(e,Y(10));h=My(e,Y(10));while(OE(e,b)&&EY(CS(e,B9(0, 2147483648)),Ed)){e=E9(e,1);c=c+1|0;h=E9(h,1);}e=Cm(e,De(h,Y(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AFy(e,B9(3435973836, 214748364))){e=Gc(e,1);j=j+1|0;d=d+(-1)|0;}k=BN(e,Y(10));b=j<=0?k:Cm(k,Gc(BN(CS(b,Y((1<<j)-1|0)),Y(10)),j));f=AT4.data;g=(330-i|0)-1|0;f[g]=Fs(b,Y(80));AT5.data[g]
=d;i=i+1|0;}}
function Pm(){C.call(this);this.uO=null;}
function AKF(a){Bu(Bx(),B(346));}
function LZ(){C.call(this);this.q$=null;}
function APa(a,b){var c,d;c=a.q$;d=new Bm;Bj(d,$rt_str(b.message));c.l(d);}
function N6(){var a=this;C.call(a);a.lU=null;a.lV=null;}
function ADj(a,b,c,d){var e,f,g,h;b=a.lU;e=a.lV;Se(b,e);if(LG(d)){f=d.db;g=e.cG;c=e.eu;h=new Bg;f=f.s;Yq(h,(f.a-(g*3|0)|0)-c|0,(f.b-g|0)-c|0);Sq(b,h,d.jK,e);}}
function SQ(){var a=this;C.call(a);a.pM=0;a.lK=0;}
function Fx(a,b){return OG(a.pM,b,a.lK);}
function Ev(){var a=this;C.call(a);a.I=null;a.t=null;a.dC=0.0;}
function APy(){var a=new Ev();KG(a);return a;}
function KG(a){a.I=new Bg;a.t=new Bg;}
function AKk(a){}
function ANS(a){return Cf(0,0);}
function OS(a,b,c,d){if(!Km(a.I,b)){a.nn(b);Du(a.I,b);}if(!Km(a.t,c)){a.m_(c);Du(a.t,c);}if(a.dC!==d)a.dC=d;}
function Fk(a,b){return Ha(b,a.I,a.t);}
function XZ(a,b){var c,d,e,f;c=a.I;d=c.a;e=c.b;f=a.t;EE();BJ(b,d,e,f,AS8);}
function AM8(a,b){return 0;}
function AF3(a,b){}
function AMO(a,b){}
function AOU(a,b,c){}
function ANm(a,b,c,d){return 0;}
function AME(a,b,c){return null;}
function ANJ(a,b,c){return 0;}
function AJI(a,b){return 0;}
function AFV(a,b,c,d){return 0;}
function Kd(){var a=this;Ev.call(a);a.dh=null;a.cN=null;}
function T1(a,b){a.cN.a=Vy(a,b);}
function P0(a,b){a.cN.b=PL(a,b);}
function PL(a,b){return W(0,X(b,a.dh.b-a.t.b|0));}
function Vy(a,b){return W(0,X(b,a.dh.a-a.t.a|0));}
function UR(){var a=this;Kd.call(a);a.hs=null;a.kD=null;a.qU=null;a.oO=0.0;}
function ZP(a){var b;b=Cc(20.0,a.dC);return Cf(b,b);}
function AHG(a,b){var c,d,e,f,g,h,i;c=a.qU;d=c.rG;e=c.rH;c=c.rF;b=Ct(b);f=new M;O(f);G(G(G(f,c),B(36)),b);b=N(f);c=d.rD;d=e.bi;g=D$(d.gi,c)?0:1;h=D$(d.gA,b)?0:1;i=3.0===d.ii?0:1;if(g){d.gi=c;d.dB=null;Wy(d,0);}d.go=!g&&!h&&!i?0:1;d.gA=b;d.ii=3.0;d.hg=0;Jf(e);}
function Yr(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;XZ(a,b);c=a.I;T0(b,c.a,c.b,a.t);d=Cc(30.0,a.dC);c=a.cN;e=c.a;f=Bb(e/d|0,d);g=c.b;h=Bb(g/d|0,d);c=a.t;i=Bb(((e+c.a|0)-1|0)/d|0,d);j=Bb(((g+c.b|0)-1|0)/d|0,d);c=a.kD;c.b=d;c.a=d;a.hs.bu=1.0;while(h<=j){e=a.I.b-a.cN.b|0;g=f;while(g<=i){k=a.I.a-a.cN.a|0;l=((37*g|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=ABF(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;GO(n,0.75,a.oO,a.hs);BJ(b,k+g|0,e+h|0,a.kD,a.hs);g=g+d|0;}h=h+d|0;}UL(b);}
function AIj(a,b){}
function Ot(){var a=this;C.call(a);a.rG=null;a.rH=null;a.rF=null;}
function Pb(){var a=this;Ev.call(a);a.kJ=null;a.qj=null;a.sm=null;a.cf=null;a.dM=null;a.dS=null;a.q_=0.0;}
function AFc(a,b,c,d){OS(a,b,c,d);OS(a.cf,b,c,d);if(d!==0.0){b=a.cf;c=b.dh;b=b.t;Bh(c,b.a*3|0,b.b*5|0);b=a.cf;c=b.cN;c.a=Vy(b,c.a);c=b.cN;c.b=PL(b,c.b);if(a.cf.dh.a<=a.t.a?0:1)JC(a);else a.dS=null;if(a.cf.dh.b<=a.t.b?0:1)Kc(a);else a.dM=null;}}
function JC(a){var b,c,d,e,f,g;b=a.dS;if(b===null){b=G5();a.dS=b;}c=a.cf;d=c.cN.a;e=a.I;f=e.a;g=a.t;LB(b,d,f,g.a,c.dh.a,e.b+g.b|0,IZ(a));}
function Kc(a){var b,c,d,e,f,g;b=a.dM;if(b===null){b=G5();a.dM=b;}c=a.cf;d=c.cN.b;e=a.I;f=e.b;g=a.t;HZ(b,d,f,g.b,c.dh.b,e.a+g.a|0,IZ(a));}
function IZ(a){return Cc(a.q_,a.dC);}
function AMl(a,b){var c;Yr(a.cf,b);if(!(a.dM===null&&a.dS===null)){Cu(b,1);c=a.dM;if(c!==null)FI(c,b);c=a.dS;if(c!==null)FI(c,b);c=a.dM;if(c!==null)F0(c,b);c=a.dS;if(c!==null)F0(c,b);Cu(b,0);}}
function L9(a,b){var c,d;a:{b:{c=a.dM;if(!(c!==null&&Ic(c,b))){c=a.dS;if(c===null)break b;if(!Ic(c,b))break b;}d=1;break a;}d=0;}return d;}
function AHa(a,b,c,d){return L9(a,b.n)?1:0;}
function ANp(a,b,c){var d;d=a.dM;if(d!==null){d=E2(d,b.n,a.qj,1);if(d!==null)return d;}d=a.dS;if(d!==null){d=E2(d,b.n,a.sm,0);if(d!==null)return d;}return null;}
function AGN(a,b,c){return L9(a,b.n)?1:0;}
function AH4(a,b){var c,d,e;c=a.dM;d=c!==null&&Fa(c,b.n,a.kJ)?1:0;c=a.dS;e=c!==null&&Fa(c,b.n,a.kJ)?1:0;return !d&&!e?0:1;}
function AMy(a,b,c,d){var e,f;if(!Fk(a,b.n))return 0;e=Cc(d*0.25,a.dC);f=Cc(c*0.25,a.dC);if(b.bz){f=f+e|0;e=0;}if(e){b=a.cf;P0(b,b.cN.b+e|0);Kc(a);}if(f){b=a.cf;T1(b,b.cN.a+f|0);JC(a);}return 1;}
function AJ5(a){var b,c;b=IZ(a);c=ZP(a.cf);c.a=W(c.a,b);c.b=W(c.b,b);return c;}
function Sj(){var a=this;Ev.call(a);a.gw=null;a.gA=null;a.gi=null;a.dB=null;a.ii=0.0;a.go=0;a.hg=0;a.c1=null;a.kV=null;}
function KY(a){var b;b=a.t;return b.a&&b.b?0:1;}
function SP(a){var b,c;a:{if(a.gi!==null){b=a.gA;if(b!==null&&!E_(b)){c=0;break a;}}c=1;}return c;}
function Wy(a,b){a.t.b=b;}
function Oi(a,b,c,d,e){var f,g;f=a.gw.jB;Bh(f,d,a.t.b);g=a.I;BJ(b,g.a+c|0,g.b,f,e);}
function PM(a){if(a.dB===null)a.dB=HW(a.gw,a.gi);}
function SW(){C.call(this);this.m8=null;}
function AJg(a,b){var c,d;c=a.m8;d=Fx(b,c.cf.dh.b-c.t.b|0);P0(c.cf,d);Kc(c);}
function SX(){C.call(this);this.p9=null;}
function AHv(a,b){var c,d;c=a.p9;d=Fx(b,c.cf.dh.a-c.t.a|0);T1(c.cf,d);JC(c);}
var QP=F(DH);
var AT6=null;function Fs(b,c){return Long_udiv(b, c);}
function My(b,c){return Long_urem(b, c);}
function Kq(b,c){return Long_ucompare(b, c);}
function Y2(){AT6=E($rt_longcls());}
function Sw(){var a=this;C.call(a);a.mB=null;a.mC=null;a.mz=null;}
function ALr(a){var b,c,d,e,f;b=a.mB;c=a.mC;d=a.mz;e=Bx();f=new M;O(f);b=G(f,b);BB(b,9);b=G(b,c);BB(b,9);G(b,d);Bu(e,N(f));}
var E4=F(Bm);
function MJ(){var a=this;C.call(a);a.l5=null;a.oP=null;a.rT=0;a.sV=0;}
function KT(a,b){return B2(a.oP)<b?0:1;}
var ABz=F();
function Tq(b,c,d,e){var f,g;f=b.next();g=new Wa;g.mj=b;g.mi=c;g.mm=d;g.mk=e;f.then(Bl(g,"f"),Bl(d,"f"));}
function XA(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AB2(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(DV()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new V7;f.pp=b;f.pq=d;d.addEventListener("change",Bl(f,"handleEvent"));d.click();}
function XH(b,c){var d;if(c.isFile?1:0)b.l(W9(c.file()));else{c=c.createReader();d=new VU;d.r5=b;c.readEntries(Bl(d,"f"));}}
function RG(){var a=this;C.call(a);a.bs=null;a.gU=null;a.U=null;}
function H5(a){return a.gU.e3.h7;}
function M_(a){var b;b=new N_;b.oN=a;return b;}
function ACw(a){var b,c,d,e,f,g;b=R(Dx,4);c=b.data;d=a.U.bq.bg.Z;e=a.bs;BI(e);f=new UE;f.rA=e;c[0]=D_(B(347),d,f);e=a.U.bq.bg.Z;f=a.bs;BI(f);g=new UI;g.mV=f;c[1]=D_(B(348),e,g);e=a.U.bq.bg.Z;f=a.bs;BI(f);g=new UH;g.qC=f;c[2]=D_(B(349),e,g);e=a.U.bq.bg.Z;f=a.bs;BI(f);g=new UF;g.tC=f;c[3]=D_(B(350),e,g);return GU(b);}
function Ix(a,b,c){var d,e,f,g,h,i,j,k,l,m;a:{Dw(a.U.b6);d=a.bs.e;e=Dc(d);f=GE(d);g=a.bs.d1;if(c===null)h=null;else{APG();switch(AT7.data[c.cQ]){case 1:h=J2(g,e,f);break a;case 2:h=Uz(g,e,f);break a;default:}b=new Ef;U(b);J(b);}}c=a.bs;e=Fo(c,b);if(h!==null){f=c.e;i=e.bD;j=e.bL;e=new Up;e.uZ=c;e.uY=b;h.q5(f,i,j,e,c.gy);}else{Wn(c.e.h,e);f=Ei(c.e.h.dR,e);if(f!==null)He(c,f);else{e=Ei(c.e.h.eb,e);if(e!==null&&!D2(e))Ro(c.gH,b,e,c);else{e=c.gH;Dw(e.b6);f=e.b6;k=R(Dx,1);l=k.data;g=new Dx;BI(f);m=new VY;m.ti=f;Qf(g,
m,B(351),e.bq.bg.th);l[0]=g;Hl(f,b,GU(k),II(e,c));}}}}
function Sk(){var a=this;C.call(a);a.vs=null;a.vt=null;a.vq=0;a.vr=0;}
var Wc=F();
function AMr(a,b){XA(b);}
function Wb(){var a=this;C.call(a);a.oT=null;a.oS=null;}
function AFt(a,b){var c,d,e,f,g,h,i;c=a.oT;d=a.oS;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new OT;i.nb=c;i.na=g;h.then(Bl(i,"f"),Bl(d,"f"));e=e+1|0;}}
var VE=F();
function AGR(a,b){XA(b);}
function VD(){var a=this;C.call(a);a.od=null;a.oe=null;}
function AHK(a,b){var c,d,e,f,g;c=a.od;d=a.oe;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(Bv,1);g.data[0]=Fm(b.name);Tq(f,c,d,g);}
function T_(){var a=this;C.call(a);a.tu=null;a.tv=0.0;}
function I8(a,b){return JX(a.tu,b,a.tv*2.0+0.875);}
var Xk=F();
function Z1(b,c){return AAR(null,b,c,0);}
function AAR(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=AHh(c);g=B8(f);h=B8(f);i=B8(f);j=R(Cw,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<CA(b)){l=B8(f);c[k]=B0(b,k);l=4*l|0;f.fd=f.fd+l|0;}else c[k]=DB(Xo(f,d,0));k=k+1|0;}m=AB$(f,h);n=new Jq;n.dR=HE();n.eb=HE();n.e5=Ck();if(!c.length){b=new BA;U(b);J(b);}n.D=j;n.fn=0;n.cp=0;n.c0=AQG(m);b=n.dR;e=0;while(e<i){R5(b,EF(B8(f),B8(f)),EF(B8(f),B8(f)));e=e+1|0;}b=n.dR;m=n.eb;o=new Tt;Rl(o,b);while(IB(o)){Te(o);b=o.gG;p=b.hE;q=b.fA;b=Ck();if(Ei(m,q)===null)R5(m,q,b);BW(Ei(m,
q),p);}if(m.jN===null){b=new N$;b.ta=m;m.jN=b;}b=m.jN;q=new PP;Rl(q,b.ta);while(IB(q)){Te(q);b=q.gG.fA;m=ARU;c=R(C,b.j);d=c.data;Hm(b,c);YC(c,m);e=0;g=d.length;while(e<g){m=d[e];Iv(b,e);b.cc.data[e]=m;e=e+1|0;}}NR(f);return n;}
function ZE(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=AHh(c);g=B8(f);h=B8(f);i=B8(f);j=B8(f);k=MH(b,g);l=MH(b,h);m=(H6(B0(b,k.a),k.b)).data[0].o;e=(H6(B0(b,l.a),l.b)).data[1].o;n=0;o=i-1|0;while(n<i){p=Xo(f,d,g);if(!n)p=KS(m,p);if(n==o)p=KS(p,e);q=k.a+n|0;r=DB(p);b.D.data[q]=r;n=n+1|0;}r=AB$(f,j);NR(f);if(!D2(r)){s=M6(g,h,(-1));b=b.c0;f=APL(s,r);r=JO(b,b.cH,s);if(r!==null){f=f.cH.bw;if(r===b.cH)b.cH=Bs(f,0);else if(r.du!==null){b=new M4;b.qV=r;Jh(f,b);q=Pg(r.du.bw,
r);Ec(r.du.bw,q);b=r.du.bw;Oj(b,q);if(!D2(f)){IF(b,b.j+f.j|0);j=f.j;g=b.j;h=g-1|0;while(h>=q){c=b.cc.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.j=g+j|0;f=BR(f);g=0;while(g<j){c=b.cc.data;h=q+1|0;c[q]=BV(f);g=g+1|0;q=h;}b.cs=b.cs+1|0;}}}}}
function Xo(b,c,d){var e,f,g,h,i,j,k,l;e=B8(b);f=R(B4,e);g=f.data;h=0;while(h<e){i=B8(b);j=B8(b);k=B8(b);l=B8(b);g[h]=Ds(I4(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AB$(b,c){var d,e;d=Ck();e=0;while(e<c){BW(d,M6(B8(b),B8(b),B8(b)));e=e+1|0;}return d;}
var VK=F(0);
var ATf=null;function Xy(){ATf=null;}
function V7(){var a=this;C.call(a);a.pp=null;a.pq=null;}
function AGI(a,b){var c,d,e,f,g,h;b=a.pp;c=a.pq;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new LU;h.me=b;h.md=g;$rt_globals.setTimeout(Bl(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=W9(d.item(f));g=new LC;g.qF=b;g.qG=c;$rt_globals.setTimeout(Bl(g,"onTimer"),0);f=f+1|0;}}
function XE(){var a=this;C.call(a);a.iz=null;a.fd=0;}
function AHh(a){var b=new XE();AM6(b,a);return b;}
function AM6(a,b){a.iz=b;a.fd=0;}
function B8(a){var b,c;b=a.iz.data;c=a.fd;a.fd=c+1|0;return b[c];}
function NR(a){var b,c,d,e;if(a.fd!=a.iz.data.length){b=KR();c=a.iz.data.length;d=a.fd;e=new M;O(e);G(S(G(S(G(e,B(352)),c),B(353)),d),B(354));Bu(b,N(e));}}
var In=F(E4);
var Hu=F(Bm);
var K0=F(Bm);
function Yl(){C.call(this);this.Cf=null;}
function Ug(){var a=this;C.call(a);a.m0=null;a.mZ=null;}
function ALL(a){var b,c;b=a.m0;c=a.mZ;Ln(b.ki,c);}
function VO(){C.call(this);this.pm=null;}
function AMv(a,b){Hk(a.pm,b);}
var W3=F();
function QJ(b,c){return b.data[c];}
function GH(){var a=this;C.call(a);a.er=0;a.e1=0;a.kh=null;a.i8=0;a.gE=null;}
function ADa(a,b,c,d,e,f){var g=new GH();AH0(g,a,b,c,d,e,f);return g;}
function AH0(a,b,c,d,e,f,g){a.er=b;a.e1=c;a.kh=Cf(f,g);a.i8=d;a.gE=e;}
function AAM(){FZ.call(this);this.Ak=null;}
function N$(){EA.call(this);this.ta=null;}
var Vu=F(By);
var Pl=F(0);
var ME=F(0);
var K5=F();
function YL(){var a=this;K5.call(a);a.Cg=null;a.Eb=0;a.CO=0;a.Ay=0;}
function Qk(){var a=this;C.call(a);a.ne=null;a.nd=null;}
function AEn(a){var b,c;b=a.ne;c=a.nd;TL();Ix(b,c,AT8);}
function Qj(){var a=this;C.call(a);a.og=null;a.oi=null;}
function ACT(a){var b,c;b=a.og;c=a.oi;TL();Ix(b,c,AT9);}
function Qi(){var a=this;C.call(a);a.tm=null;a.tn=null;}
function AIJ(a){Ix(a.tm,a.tn,null);}
function Qh(){var a=this;C.call(a);a.mK=null;a.mL=null;}
function AM$(a){var b,c,d,e,f,g,h;b=a.mK;c=a.mL;d=Dc(b.bs.e);e=GE(b.bs.e);d=Mz(b.bs.d1,d,e);Dw(b.U.b6);b=b.bs;e=Fo(b,c);if(d!==null){f=b.e;g=e.bD;h=e.bL;e=new VS;e.tT=b;e.tU=c;d.E6(f,g,h,1,e,b.gy);}}
function Ov(){C.call(this);this.pc=null;}
function AMu(a){var b;b=a.pc;Dw(b.U.b6);Kl(b.bs,M_(b),0);}
function Ox(){C.call(this);this.r$=null;}
function AHP(a){var b;b=a.r$;Dw(b.U.b6);Kl(b.bs,M_(b),1);}
function Oy(){C.call(this);this.rm=null;}
function AES(a){var b,c,d;b=a.rm;Dw(b.U.b6);c=H5(b);b=b.bs;BI(b);d=new RK;d.rn=b;PJ(c,d,Xv(B(355)));}
function U2(){C.call(this);this.rv=null;}
function ADI(a){var b,c,d;b=a.rv;Dw(b.U.b6);c=H5(b);b=b.bs;BI(b);d=new PX;d.py=b;K1(c,d);}
function YG(){var a=this;C.call(a);a.hF=null;a.jw=null;}
function ABT(){var a=this;C.call(a);a.wo=0;a.wc=0;a.rc=0;a.ka=0;}
var SB=F();
function AIg(a){}
function SC(){var a=this;C.call(a);a.pK=null;a.pL=null;}
function ANB(a){var b,c,d,e,f,g;b=a.pK;c=a.pL;if(D$(c.hF,b.e.fG)){c=c.jw;Cz(b,c.ka,c.rc,0);BZ(b.p.bM,c.ka,c.rc);BZ(b.p.bB,c.wc,c.wo);}else{d=(Cl(b.d1.qg)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Cg(b);b=new NO;b.nk=g;b.nl=c;BI(b);c=new OL;c.tA=b;$rt_globals.setTimeout(Bl(c,"onTimer"),0);}}}
function SA(){var a=this;C.call(a);a.sA=null;a.sB=null;}
function AFn(a){He(a.sA,a.sB);}
function UQ(){C.call(this);this.rj=null;}
function AJu(a,b,c){var d,e;c=a.rj;d=c.e.h;e=b.fb;b=c.es;V5(d.D.data[e],0,b);}
function RA(){C.call(this);this.ni=null;}
function AIk(a){SN(a.ni);}
function RB(){C.call(this);this.qf=null;}
function AJs(a){ZS(a.qf);}
function Ne(){C.call(this);this.qE=null;}
function AHf(a){var b;b=a.qE;Ko(b,b.dW.lq,b.fL+1|0);}
function Nd(){C.call(this);this.pv=null;}
function ANi(a){var b,c;b=a.pv;c=b.fL;if(c>7)Ko(b,b.dW.lq,c-1|0);}
function T7(){C.call(this);this.p7=null;}
function AFi(a){var b,c,d,e,f,g,h,i;b=a.p7;c=(b.gU.oo()).data;d=R(Dx,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new WX;i.oK=b;i.oJ=h;e[f]=ABM(i,h,b.U.bq.bg.Z);f=f+1|0;}return d;}
function UE(){C.call(this);this.rA=null;}
function ALb(a){var b,c,d,e,f;b=a.rA.e.h;c=b.cp;d=new M;O(d);S(G(d,B(356)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.fn;d=new M;O(d);S(G(d,B(357)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.c0;e=FG(F6(b));Q2(d,0,d.cH,e);b=Bx();f=b.jE;f.data[0]=10;M2(b,f,0,1);}
function UI(){C.call(this);this.mV=null;}
function AIr(a){Rv(a.mV);}
function UH(){C.call(this);this.qC=null;}
function ADC(a){Vz(a.qC);}
function UF(){C.call(this);this.tC=null;}
function AFq(a){Jk(a.tC);}
function WO(){var a=this;C.call(a);a.mR=null;a.mQ=null;}
function AID(a){var b,c;b=a.mR;c=a.mQ;F2(b);c.r();}
function Rw(){C.call(this);this.sP=null;}
function AHz(a,b,c){FF(B0(a.sP.e.h,b.fb),0,I(c));}
function OT(){var a=this;C.call(a);a.nb=null;a.na=null;}
function AFF(a,b){a.nb.l(AAd(a.na,b));}
var Ih=F(0);
function LU(){var a=this;C.call(a);a.me=null;a.md=null;}
function AHQ(a){XH(a.me,a.md);}
function LC(){var a=this;C.call(a);a.qF=null;a.qG=null;}
function ACF(a){a.qF.l(a.qG);}
function Wa(){var a=this;C.call(a);a.mj=null;a.mi=null;a.mm=null;a.mk=null;}
function AG6(a,b){var c,d,e,f,g,h,i;c=a.mj;d=a.mi;e=a.mm;f=a.mk;if(!(b.done?1:0)){Tq(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Tb;c.of=d;c.oh=g;c.oj=f;b.then(Bl(c,"f"),Bl(e,"f"));}else{h=f.data;c=g.values();b=Fm(g.name);i=h.length;f=C$(f,i+1|0);f.data[i]=b;Tq(c,d,e,f);}}}
function GB(){var a=this;C.call(a);a.hM=0;a.qL=0;a.g9=null;a.gG=null;a.ou=null;a.ip=null;}
function AT$(a){var b=new GB();Rl(b,a);return b;}
function Rl(a,b){a.ip=b;a.qL=b.ge;a.g9=null;}
function IB(a){var b,c;if(a.g9!==null)return 1;while(true){b=a.hM;c=a.ip.cO.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.hM=b+1|0;}return 0;}
function Ym(a){var b;if(a.qL==a.ip.ge)return;b=new K2;U(b);J(b);}
function Te(a){var b,c,d,e;Ym(a);if(!IB(a)){b=new WK;U(b);J(b);}b=a.g9;if(b!==null){c=a.gG;if(c!==null)a.ou=c;a.gG=b;a.g9=b.eX;}else{d=a.ip.cO.data;e=a.hM;a.hM=e+1|0;b=d[e];a.gG=b;a.g9=b.eX;a.ou=null;}}
var Tt=F(GB);
var PP=F(GB);
var ST=F(0);
var ATp=null;function Zx(){ATp=new RO;}
function PN(){var a=this;C.call(a);a.f=null;a.c_=0;a.ju=null;a.mH=0;a.fT=0;a.ed=0;a.br=0;a.kr=null;}
function I_(a){return a.f.bE;}
function WB(a,b,c,d){var e,f,g,h,i,j;e=Ck();f=a.c_;g=0;if(c!=f)a.c_=c;a:{switch(b){case -1073741784:h=new Qz;c=a.br+1|0;a.br=c;E8(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new OC;c=a.br+1|0;a.br=c;E8(h,c);break a;case -33554392:h=new RE;c=a.br+1|0;a.br=c;E8(h,c);break a;default:c=a.fT+1|0;a.fT=c;if(d!==null)h=AQQ(c);else{h=new Fg;E8(h,0);g=1;}c=a.fT;if(c<=(-1))break a;if(c>=10)break a;a.ju.data[c]=h;break a;}h=new Wx;E8(h,(-1));}while(true){if(EL(a.f)&&a.f.i==(-536870788))
{d=ANE(B6(a,2),B6(a,64));while(!C9(a.f)&&EL(a.f)){i=a.f;j=i.i;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cr(d,Bd(i));i=a.f;if(i.bb!=(-536870788))continue;Bd(i);}i=JZ(a,d);i.L(h);}else if(a.f.bb==(-536870788)){i=Gt(h);Bd(a.f);}else{i=N1(a,h);d=a.f;if(d.bb==(-536870788))Bd(d);}if(i!==null)BW(e,i);if(C9(a.f))break;if(a.f.bb==(-536870871))break;}if(a.f.jT==(-536870788))BW(e,Gt(h));if(a.c_!=f&&!g){a.c_=f;d=a.f;d.fC=f;d.i=d.bb;d.d8=d.el;j=d.cV;d.u=j+1|0;d.gK=j;EO(d);}switch(b){case -1073741784:break;case -536870872:d
=new LS;Fh(d,e,h);return d;case -268435416:d=new U3;Fh(d,e,h);return d;case -134217688:d=new PQ;Fh(d,e,h);return d;case -67108824:d=new Sr;Fh(d,e,h);return d;case -33554392:d=new DC;Fh(d,e,h);return d;default:switch(e.j){case 0:break;case 1:return AQB(Bs(e,0),h);default:return AQd(e,h);}return Gt(h);}d=new Il;Fh(d,e,h);return d;}
function AA7(a){var b,c,d,e,f,g,h;b=BF(4);c=(-1);d=(-1);if(!C9(a.f)&&EL(a.f)){e=b.data;c=Bd(a.f);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BL(3);b=e.data;b[0]=c&65535;f=a.f;g=f.bb;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bd(f);f=a.f;g=f.bb;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bd(f);return ANl(e,3);}return ANl(e,2);}if(!B6(a,2))return Yk(b[0]);if(B6(a,64))return ALv(b[0]);return AEB(b[0]);}e=b.data;c=1;while(c<4&&!C9(a.f)&&EL(a.f)){h=c+1|0;e[c]=Bd(a.f);c=h;}if(c==1){h=e[0];if(!(AT_.vU(h)==AUa?0:1))return Ws(a,e[0]);}if
(!B6(a,2))return ARq(b,c);if(B6(a,64)){f=new V$;MY(f,b,c);return f;}f=new SJ;MY(f,b,c);return f;}
function N1(a,b){var c,d,e,f,g,h,i;if(EL(a.f)&&!I1(a.f)&&Jx(a.f.i)){if(B6(a,128)){c=AA7(a);if(!C9(a.f)){d=a.f;e=d.bb;if(!(e==(-536870871)&&!(b instanceof Fg))&&e!=(-536870788)&&!EL(d))c=Lj(a,b,c);}}else if(!M7(a.f)&&!T9(a.f)){f=new M8;O(f);while(!C9(a.f)&&EL(a.f)&&!M7(a.f)&&!T9(a.f)){if(!(!I1(a.f)&&!a.f.i)&&!(!I1(a.f)&&Jx(a.f.i))){g=a.f.i;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bd(a.f);if(!Lb(e))BB(f,e&65535);else HR(f,Gd(e));}if(!B6(a,2)){c=new Qm;Do(c);c.ck
=N(f);e=f.N;c.bC=e;c.jJ=AJX(e);c.ku=AJX(c.bC);h=0;while(h<(c.bC-1|0)){PU(c.jJ,L(c.ck,h),(c.bC-h|0)-1|0);PU(c.ku,L(c.ck,(c.bC-h|0)-1|0),(c.bC-h|0)-1|0);h=h+1|0;}}else if(B6(a,64))c=ARn(f);else{c=new Mn;Do(c);c.gL=N(f);c.bC=f.N;}}else c=Lj(a,b,V9(a,b));}else{d=a.f;if(d.bb!=(-536870871))c=Lj(a,b,V9(a,b));else{if(b instanceof Fg)J(B5(B(31),d.bE,M5(d)));c=Gt(b);}}a:{if(!C9(a.f)){e=a.f.bb;if(!(e==(-536870871)&&!(b instanceof Fg))&&e!=(-536870788)){f=N1(a,b);if(c instanceof CW&&!(c instanceof EP)&&!(c instanceof CN)
&&!(c instanceof Em)){i=c;if(!f.bN(i.G)){c=new Ve;ED(c,i.G,i.d,i.g5);c.G.L(c);}}if((f.g$()&65535)!=43)c.L(f);else c.L(f.G);break a;}}if(c===null)return null;c.L(b);}if((c.g$()&65535)!=43)return c;return c.G;}
function Lj(a,b,c){var d,e,f,g,h;d=a.f;e=d.bb;if(c!==null&&!(c instanceof BS)){switch(e){case -2147483606:Bd(d);d=new WU;C4(d,c,b,e);Lo();c.L(AUb);return d;case -2147483605:Bd(d);d=new Ou;C4(d,c,b,(-2147483606));Lo();c.L(AUb);return d;case -2147483585:Bd(d);d=new Oa;C4(d,c,b,(-536870849));Lo();c.L(AUb);return d;case -2147483525:f=new Mh;d=EW(d);g=a.ed+1|0;a.ed=g;Iu(f,d,c,b,(-536870849),g);Lo();c.L(AUb);return f;case -1073741782:case -1073741781:Bd(d);d=new Qc;C4(d,c,b,e);c.L(d);return d;case -1073741761:Bd(d);d
=new Ph;C4(d,c,b,(-536870849));c.L(b);return d;case -1073741701:h=new TN;d=EW(d);e=a.ed+1|0;a.ed=e;Iu(h,d,c,b,(-536870849),e);c.L(h);return h;case -536870870:case -536870869:Bd(d);if(c.g$()!=(-2147483602)){d=new CN;C4(d,c,b,e);}else if(B6(a,32)){d=new Qe;C4(d,c,b,e);}else{d=new Nf;f=Od(a.c_);C4(d,c,b,e);d.jS=f;}c.L(d);return d;case -536870849:Bd(d);d=new FC;C4(d,c,b,(-536870849));c.L(b);return d;case -536870789:h=new EX;d=EW(d);e=a.ed+1|0;a.ed=e;Iu(h,d,c,b,(-536870849),e);c.L(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bd(d);d=new WW;ED(d,f,b,e);f.d=d;return d;case -2147483585:Bd(d);c=new Va;ED(c,f,b,(-2147483585));return c;case -2147483525:c=new NZ;QZ(c,EW(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bd(d);d=new Pd;ED(d,f,b,e);f.d=d;return d;case -1073741761:Bd(d);c=new S3;ED(c,f,b,(-1073741761));return c;case -1073741701:c=new PR;QZ(c,EW(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bd(d);d=AQI(f,b,e);f.d=d;return d;case -536870849:Bd(d);c
=new Em;ED(c,f,b,(-536870849));return c;case -536870789:return APR(EW(d),f,b,(-536870789));default:}return c;}
function V9(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fg;while(true){a:{e=a.f;f=e.bb;if((f&(-2147418113))==(-2147483608)){Bd(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.c_=g;else{if(f!=(-1073741784))g=a.c_;c=WB(a,f,g,b);e=a.f;if(e.bb!=(-536870871))J(B5(B(31),e.bE,e.cV));Bd(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bd(e);c
=AM9(0);break a;case -2147483577:Bd(e);c=new Nb;BK(c);break a;case -2147483558:Bd(e);c=new VR;h=a.br+1|0;a.br=h;ABv(c,h);break a;case -2147483550:Bd(e);c=AM9(1);break a;case -2147483526:Bd(e);c=new VA;BK(c);break a;case -536870876:Bd(e);a.br=a.br+1|0;if(B6(a,8)){if(B6(a,1)){c=AP6(a.br);break a;}c=APp(a.br);break a;}if(B6(a,1)){c=AQj(a.br);break a;}c=AQU(a.br);break a;case -536870866:Bd(e);if(B6(a,32)){c=ARb();break a;}c=AQP(Od(a.c_));break a;case -536870821:Bd(e);i=0;c=a.f;if(c.bb==(-536870818)){i=1;Bd(c);}c
=JZ(a,FO(a,i));c.L(b);e=a.f;if(e.bb!=(-536870819))J(B5(B(31),e.bE,e.cV));NG(e,1);Bd(a.f);break a;case -536870818:Bd(e);a.br=a.br+1|0;if(!B6(a,8)){c=new JD;BK(c);break a;}c=new Mt;e=Od(a.c_);BK(c);c.pE=e;break a;case 0:j=e.el;if(j!==null)c=JZ(a,j);else{if(C9(e)){c=Gt(b);break a;}c=Yk(f&65535);}Bd(a.f);break a;default:break b;}Bd(e);c=new JD;BK(c);break a;}h=(f&2147483647)-48|0;if(a.fT<h)J(B5(B(31),E5(e),M5(a.f)));Bd(e);a.br=a.br+1|0;c=!B6(a,2)?APw(h,a.br):B6(a,64)?AP7(h,a.br):ARk(h,a.br);a.ju.data[h].jt=1;a.mH
=1;break a;}if(f>=0&&!Gw(e)){c=Ws(a,f);Bd(a.f);}else if(f==(-536870788))c=Gt(b);else{if(f!=(-536870871)){b=new H$;c=!Gw(a.f)?VQ(f&65535):a.f.el.co();e=a.f;ID(b,c,e.bE,e.cV);J(b);}if(d){b=new H$;e=a.f;ID(b,B(31),e.bE,e.cV);J(b);}c=Gt(b);}}}if(f!=(-16777176))break;}return c;}
function FO(a,b){var c,d,e,f,g,h,i,j,$$je;c=ANE(B6(a,2),B6(a,64));Eg(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(C9(a.f))break a;h=a.f;b=h.bb;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cr(c,d);d=Bd(a.f);h=a.f;if(h.bb!=(-536870874)){d=38;break d;}if(h.i==(-536870821)){Bd(h);e=1;d=(-1);break d;}Bd(h);if(g){c=FO(a,0);break d;}if(a.f.bb==(-536870819))break d;VH(c,FO(a,0));break d;case -536870867:if(!g){b=h.i;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bd(h);h=a.f;i=h.bb;if(Gw(h))break c;if
(i<0){j=a.f.i;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Jx(i))break e;i=i&65535;break e;}catch($$e){$$je=D5($$e);if($$je instanceof DO){break b;}else{throw $$e;}}}try{BP(c,d,i);}catch($$e){$$je=D5($$e);if($$je instanceof DO){break b;}else{throw $$e;}}Bd(a.f);d=(-1);break d;}}if(d>=0)Cr(c,d);d=45;Bd(a.f);break d;case -536870821:if(d>=0){Cr(c,d);d=(-1);}Bd(a.f);j=0;h=a.f;if(h.bb==(-536870818)){Bd(h);j=1;}if(!e)W6(c,FO(a,j));else VH(c,FO(a,j));e=0;Bd(a.f);break d;case -536870819:if(d>=0)Cr(c,
d);d=93;Bd(a.f);break d;case -536870818:if(d>=0)Cr(c,d);d=94;Bd(a.f);break d;case 0:if(d>=0)Cr(c,d);h=a.f.el;if(h===null)d=0;else{ACr(c,h);d=(-1);}Bd(a.f);break d;default:}if(d>=0)Cr(c,d);d=Bd(a.f);}g=0;}J(B5(B(31),I_(a),a.f.cV));}J(B5(B(31),I_(a),a.f.cV));}if(!f){if(d>=0)Cr(c,d);return c;}J(B5(B(31),I_(a),a.f.cV-1|0));}
function Ws(a,b){var c,d,e;c=Lb(b);if(B6(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AEB(b&65535);}if(B6(a,64)&&b>128){if(c){d=new LH;Do(d);d.bC=2;d.pf=Gl(Gk(b));return d;}if(NP(b))return AJ3(b&65535);if(!Ri(b))return ALv(b&65535);return AHC(b&65535);}}if(!c){if(NP(b))return AJ3(b&65535);if(!Ri(b))return Yk(b&65535);return AHC(b&65535);}d=new DF;Do(d);d.bC=2;d.fj=b;e=(Gd(b)).data;d.iZ=e[0];d.hG=e[1];return d;}
function JZ(a,b){var c,d,e;if(!ZY(b)){if(!b.J){if(b.gs())return AG1(b);return AM_(b);}if(!b.gs())return AIi(b);c=new Iw;Th(c,b);return c;}c=Xz(b);d=new L0;BK(d);d.n$=c;d.tO=c.ba;if(!b.J){if(b.gs())return AAz(AG1(Hb(b)),d);return AAz(AM_(Hb(b)),d);}if(!b.gs())return AAz(AIi(Hb(b)),d);c=new O8;e=new Iw;Th(e,Hb(b));AB_(c,e,d);return c;}
function Hc(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B6(a,b){return (a.c_&b)!=b?0:1;}
function M4(){C.call(this);this.qV=null;}
function AO4(a,b){b.du=a.qV.du;}
var Ge=F(Cq);
var AT9=null;var AT8=null;var AUc=null;function TL(){TL=Bo(Ge);AFJ();}
function AHX(a,b){var c=new Ge();Yf(c,a,b);return c;}
function Yf(a,b,c){TL();DA(a,b,c);}
function AFJ(){var b;AT9=AHX(B(358),0);b=AHX(B(359),1);AT8=b;AUc=H(Ge,[AT9,b]);}
function RK(){C.call(this);this.rn=null;}
function AIu(a,b){DD(a.rn,b);}
function Ps(){var a=this;C.call(a);a.nT=null;a.nW=0;a.nX=0;a.nY=null;a.nZ=0;a.nU=0;}
function AHj(a,b){var c,d,e,f,g,h,i,j;c=a.nT;d=a.nW;e=a.nX;f=a.nY;g=a.nZ;h=a.nU;i=Dj(c.bl,5.0);d=X((c.bl.cD.a-d|0)-i|0,W((i-d|0)-c.bi.t.a|0,b.n.a));j=X((c.bl.cD.b-e|0)-i|0,W((i-e|0)-c.bi.t.b|0,b.n.b));Bh(f,d+g|0,j+h|0);Et(c,f,c.z.t);}
function Rg(){var a=this;C.call(a);a.lP=null;a.lO=0;a.lR=0;a.lQ=0;a.lN=null;a.lM=null;}
function ADB(a,b){var c,d,e,f,g,h,i,j;c=a.lP;d=a.lO;e=a.lR;f=a.lQ;g=a.lN;h=a.lM;i=Dj(c.bl,5.0);j=c.z.fP();d=X(e+(b.n.a-d|0)|0,c.bl.cD.a-i|0);e=e+f|0;d=e-d|0;d=W(j.a,d);Bh(g,e-d|0,c.z.I.b);Bh(h,d,c.z.t.b);Et(c,g,h);}
function VZ(){var a=this;C.call(a);a.mb=null;a.mc=0;a.l_=0;a.ma=null;}
function AOT(a,b){var c,d,e,f,g,h;c=a.mb;d=a.mc;e=a.l_;f=a.ma;g=Dj(c.bl,5.0);h=c.z.fP();Bh(f,W(e+(b.n.a-d|0)|0,W(h.a,g-c.bi.I.a|0)),c.z.t.b);Et(c,c.z.I,f);}
function UW(){var a=this;C.call(a);a.nR=null;a.nP=0;a.nQ=0;a.nN=0;a.nO=null;a.nM=null;}
function AGc(a,b){var c,d,e,f,g,h,i,j;c=a.nR;d=a.nP;e=a.nQ;f=a.nN;g=a.nO;h=a.nM;i=Dj(c.bl,5.0);j=c.z.fP();d=X(e+(b.n.b-d|0)|0,(c.bl.cD.b+c.bi.t.b|0)-i|0);e=e+f|0;d=e-d|0;d=W(j.b,d);Bh(g,c.z.I.a,e-d|0);Bh(h,c.z.t.a,d);Et(c,g,h);}
function VC(){var a=this;C.call(a);a.s0=null;a.sZ=0;a.sX=0;a.sW=null;}
function AD3(a,b){var c,d,e,f,g;c=a.s0;d=a.sZ;e=a.sX;f=a.sW;Dj(c.bl,5.0);g=c.z.fP();d=W(e+(b.n.b-d|0)|0,g.b);Bh(f,c.z.t.a,d);Et(c,c.z.I,f);}
var RO=F();
function ADz(a,b){}
function Bz(){var a=this;C.call(a);a.d=null;a.ca=0;a.nv=null;a.g5=0;}
var ARY=0;function BK(a){var b,c;b=new E3;c=ARY;ARY=c+1|0;Jc(b,c);a.nv=Le(b);}
function JV(a,b){var c,d;c=new E3;d=ARY;ARY=d+1|0;Jc(c,d);a.nv=Le(c);a.d=b;}
function Hh(a,b,c,d){var e;e=d.w;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Hr(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AE4(a,b){a.g5=b;}
function AEb(a){return a.g5;}
function AMB(a){return a.d;}
function ANs(a,b){a.d=b;}
function ANr(a,b){return 1;}
function AOe(a){return null;}
function Is(a){var b;a.ca=1;b=a.d;if(b!==null){if(!b.ca){b=b.eV();if(b!==null){a.d.ca=1;a.d=b;}a.d.dO();}else if(b instanceof Gh&&b.dT.jt)a.d=b.d;}}
function ACi(){ARY=1;}
var Tn=F();
var AT7=null;function APG(){APG=Bo(Tn);ADQ();}
function ADQ(){var b,c;TL();b=BF((AUc.fe()).data.length);c=b.data;AT7=b;c[AT9.cQ]=1;c[AT8.cQ]=2;}
function N_(){C.call(this);this.oN=null;}
function AE_(a,b){Ti(H5(a.oN),b,ATk,Xv(B(360)));}
function Sc(){C.call(this);this.nu=null;}
function AHl(a,b){var c,d;c=a.nu;d=b.g2;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function WX(){var a=this;C.call(a);a.oK=null;a.oJ=null;}
function AEZ(a){var b,c;b=a.oK;c=a.oJ;b=b.bs;Ko(b,c,b.fL);}
function CM(){var a=this;Bz.call(a);a.jt=0;a.df=0;}
var AUb=null;function Lo(){Lo=Bo(CM);AF$();}
function AQQ(a){var b=new CM();E8(b,a);return b;}
function E8(a,b){Lo();BK(a);a.df=b;}
function ADH(a,b,c,d){var e,f;e=HX(d,a.df);IW(d,a.df,b);f=a.d.c(b,c,d);if(f<0)IW(d,a.df,e);return f;}
function AJb(a){return a.df;}
function AD1(a,b){return 0;}
function AF$(){var b;b=new M9;BK(b);AUb=b;}
function Gr(){var a=this;C.call(a);a.Y=null;a.fC=0;a.ea=0;a.se=0;a.jT=0;a.bb=0;a.i=0;a.qa=0;a.el=null;a.d8=null;a.u=0;a.hf=0;a.cV=0;a.gK=0;a.bE=null;}
var AUd=null;var AT_=null;var AUa=0;function NG(a,b){if(b>0&&b<3)a.ea=b;if(b==1){a.i=a.bb;a.d8=a.el;a.u=a.gK;a.gK=a.cV;EO(a);}}
function Gw(a){return a.el===null?0:1;}
function I1(a){return a.d8===null?0:1;}
function Bd(a){EO(a);return a.jT;}
function EW(a){var b;b=a.el;EO(a);return b;}
function EO(a){var b,c,d,e,f,g,h,$$je;a.jT=a.bb;a.bb=a.i;a.el=a.d8;a.cV=a.gK;a.gK=a.u;while(true){b=0;c=a.u>=a.Y.data.length?0:KL(a);a.i=c;a.d8=null;if(a.ea==4){if(c!=92)return;c=a.u;d=a.Y.data;c=c>=d.length?0:d[BQ(a)];a.i=c;switch(c){case 69:break;default:a.i=92;a.u=a.hf;return;}a.ea=a.se;a.i=a.u>(a.Y.data.length-2|0)?0:KL(a);}a:{c=a.i;if(c!=92){e=a.ea;if(e==1)switch(c){case 36:a.i=(-536870876);break a;case 40:if(a.Y.data[a.u]!=63){a.i=(-2147483608);break a;}BQ(a);c=a.Y.data[a.u];e=0;while(true){b:{if(e){e
=0;switch(c){case 33:break;case 61:a.i=(-134217688);BQ(a);break b;default:J(B5(B(31),E5(a),a.u));}a.i=(-67108824);BQ(a);}else{switch(c){case 33:break;case 60:BQ(a);c=a.Y.data[a.u];e=1;break b;case 61:a.i=(-536870872);BQ(a);break b;case 62:a.i=(-33554392);BQ(a);break b;default:f=ACj(a);a.i=f;if(f<256){a.fC=f;f=f<<16;a.i=f;a.i=(-1073741784)|f;break b;}f=f&255;a.i=f;a.fC=f;f=f<<16;a.i=f;a.i=(-16777176)|f;break b;}a.i=(-268435416);BQ(a);}}if(!e)break;}break a;case 41:a.i=(-536870871);break a;case 42:case 43:case 63:e
=a.u;d=a.Y.data;switch(e>=d.length?42:d[e]){case 43:a.i=c|(-2147483648);BQ(a);break a;case 63:a.i=c|(-1073741824);BQ(a);break a;default:}a.i=c|(-536870912);break a;case 46:a.i=(-536870866);break a;case 91:a.i=(-536870821);NG(a,2);break a;case 93:if(e!=2)break a;a.i=(-536870819);break a;case 94:a.i=(-536870818);break a;case 123:a.d8=ABQ(a,c);break a;case 124:a.i=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.i=(-536870874);break a;case 45:a.i=(-536870867);break a;case 91:a.i=(-536870821);break a;case 93:a.i
=(-536870819);break a;case 94:a.i=(-536870818);break a;default:}}else{c=a.u>=(a.Y.data.length-2|0)?(-1):KL(a);c:{a.i=c;switch(c){case -1:J(B5(B(31),E5(a),a.u));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.i
=AAm(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.ea!=1)break a;a.i=(-2147483648)|c;break a;case 65:a.i=(-2147483583);break a;case 66:a.i=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B5(B(31),E5(a),a.u));case 68:case 83:case 87:case 100:case 115:case 119:a.d8=QO(I4(a.Y,
a.hf,1),0);a.i=0;break a;case 71:a.i=(-2147483577);break a;case 80:case 112:break c;case 81:a.se=a.ea;a.ea=4;b=1;break a;case 90:a.i=(-2147483558);break a;case 97:a.i=7;break a;case 98:a.i=(-2147483550);break a;case 99:c=a.u;d=a.Y.data;if(c>=(d.length-2|0))J(B5(B(31),E5(a),a.u));a.i=d[BQ(a)]&31;break a;case 101:a.i=27;break a;case 102:a.i=12;break a;case 110:a.i=10;break a;case 114:a.i=13;break a;case 116:a.i=9;break a;case 117:a.i=OA(a,4);break a;case 120:a.i=OA(a,2);break a;case 122:a.i=(-2147483526);break a;default:}break a;}g
=Z8(a);h=0;if(a.i==80)h=1;try{a.d8=QO(g,h);}catch($$e){$$je=D5($$e);if($$je instanceof Iy){J(B5(B(31),E5(a),a.u));}else{throw $$e;}}a.i=0;}}if(b)continue;else break;}}
function Z8(a){var b,c,d,e,f,g;b=new M;FJ(b,10);c=a.u;d=a.Y;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=I4(d,BQ(a),1);f=new M;O(f);G(G(f,B(361)),b);return N(f);}BQ(a);c=0;a:{while(true){g=a.u;d=a.Y.data;if(g>=(d.length-2|0))break;c=d[BQ(a)];if(c==125)break a;BB(b,c);}}if(c!=125)J(B5(B(31),a.bE,a.u));}if(!b.N)J(B5(B(31),a.bE,a.u));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(361)),f);return N(b);}b:{c:{if(I(f)>3){if(Ew(f,B(361)))break c;if(Ew(f,B(362)))break c;}break b;}f=Dr(f,2);}return f;}
function ABQ(a,b){var c,d,e,f,g,$$je;c=new M;FJ(c,4);d=(-1);e=2147483647;a:{while(true){f=a.u;g=a.Y.data;if(f>=g.length)break a;b=g[BQ(a)];if(b==125)break a;if(b==44&&d<0)try{d=IS(DE(c),10);ABW(c,0,XJ(c));continue;}catch($$e){$$je=D5($$e);if($$je instanceof C5){break;}else{throw $$e;}}BB(c,b&65535);}J(B5(B(31),a.bE,a.u));}if(b!=125)J(B5(B(31),a.bE,a.u));if(c.N>0)b:{try{e=IS(DE(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=D5($$e);if($$je instanceof C5){}else{throw $$e;}}J(B5(B(31),a.bE,a.u));}else if(d
<0)J(B5(B(31),a.bE,a.u));if((d|e|(e-d|0))<0)J(B5(B(31),a.bE,a.u));b=a.u;g=a.Y.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.i=(-2147483525);BQ(a);break c;case 63:a.i=(-1073741701);BQ(a);break c;default:}a.i=(-536870789);}c=new L$;c.d$=d;c.d5=e;return c;}
function E5(a){return a.bE;}
function C9(a){return !a.bb&&!a.i&&a.u==a.qa&&!Gw(a)?1:0;}
function Jx(b){return b<0?0:1;}
function EL(a){return !C9(a)&&!Gw(a)&&Jx(a.bb)?1:0;}
function M7(a){var b;b=a.bb;return b<=56319&&b>=55296?1:0;}
function T9(a){var b;b=a.bb;return b<=57343&&b>=56320?1:0;}
function Ri(b){return b<=56319&&b>=55296?1:0;}
function NP(b){return b<=57343&&b>=56320?1:0;}
function OA(a,b){var c,d,e,f,$$je;c=new M;FJ(c,b);d=a.Y.data.length-2|0;e=0;while(true){f=BH(e,b);if(f>=0)break;if(a.u>=d)break;BB(c,a.Y.data[BQ(a)]);e=e+1|0;}if(!f)a:{try{b=IS(DE(c),16);}catch($$e){$$je=D5($$e);if($$je instanceof C5){break a;}else{throw $$e;}}return b;}J(B5(B(31),a.bE,a.u));}
function AAm(a){var b,c,d,e,f,g;b=3;c=1;d=a.Y.data;e=d.length-2|0;f=TH(d[a.u],8);switch(f){case -1:break;default:if(f>3)b=2;BQ(a);a:{while(true){if(c>=b)break a;g=a.u;if(g>=e)break a;g=TH(a.Y.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BQ(a);c=c+1|0;}}return f;}J(B5(B(31),a.bE,a.u));}
function ACj(a){var b,c,d,e;b=1;c=a.fC;a:while(true){d=a.u;e=a.Y.data;if(d>=e.length)J(B5(B(31),a.bE,d));b:{c:{switch(e[d]){case 41:BQ(a);return c|256;case 45:if(!b)J(B5(B(31),a.bE,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BQ(a);}BQ(a);return c;}
function BQ(a){var b,c,d,e,f;b=a.u;a.hf=b;if(!(a.fC&4))a.u=b+1|0;else{c=a.Y.data.length-2|0;a.u=b+1|0;a:while(true){d=a.u;if(d<c&&PO(a.Y.data[d])){a.u=a.u+1|0;continue;}d=a.u;if(d>=c)break;e=a.Y.data;if(e[d]!=35)break;a.u=d+1|0;while(true){f=a.u;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.u=f+1|0;}}}return a.hf;}
function ABH(b){return AUd.z$(b);}
function KL(a){var b,c,d,e;b=a.Y.data[BQ(a)];if(CC(b)){c=a.hf+1|0;d=a.Y.data;if(c<d.length){e=d[c];if(CX(e)){BQ(a);return Eh(b,e);}}}return b;}
function M5(a){return a.cV;}
function H$(){var a=this;BA.call(a);a.vD=null;a.vb=null;a.o7=0;}
function B5(a,b,c){var d=new H$();ID(d,a,b,c);return d;}
function ID(a,b,c,d){U(a);a.o7=(-1);a.vD=b;a.vb=c;a.o7=d;}
function VU(){C.call(this);this.r5=null;}
function AKS(a,b){var c,d;c=a.r5;d=0;while(d<b.length){XH(c,b[d]);d=d+1|0;}}
var Z3=F(0);
function Tb(){var a=this;C.call(a);a.of=null;a.oh=null;a.oj=null;}
function AKx(a,b){a.of.l(APq(a.oh,b,a.oj));}
var Qz=F(CM);
function ADg(a,b,c,d){var e;e=a.df;BD(d,e,b-Da(d,e)|0);return a.d.c(b,c,d);}
function AL5(a,b){return 0;}
var Wx=F(CM);
function AE2(a,b,c,d){return b;}
var OC=F(CM);
function AD_(a,b,c,d){if(Da(d,a.df)!=b)b=(-1);return b;}
function RE(){CM.call(this);this.mt=0;}
function ADm(a,b,c,d){var e;e=a.df;BD(d,e,b-Da(d,e)|0);a.mt=b;return b;}
function AKG(a,b){return 0;}
var Fg=F(CM);
function ANK(a,b,c,d){if(d.iJ!=1&&b!=d.w)return (-1);d.h2=1;IW(d,0,b);return b;}
function BS(){Bz.call(this);this.bC=0;}
function Do(a){BK(a);a.bC=1;}
function AOF(a,b,c,d){var e;if((b+a.bS()|0)>d.w){d.c7=1;return (-1);}e=a.bp(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function AMZ(a){return a.bC;}
function AHY(a,b){return 1;}
var ABt=F(BS);
function Gt(a){var b=new ABt();AJn(b,a);return b;}
function AJn(a,b){JV(a,b);a.bC=1;a.g5=1;a.bC=0;}
function AMt(a,b,c){return 0;}
function AGf(a,b,c,d){var e,f,g;e=d.w;f=d.cy;while(true){g=BH(b,e);if(g>0)return (-1);if(g<0&&CX(L(c,b))&&b>f&&CC(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AEQ(a,b,c,d,e){var f,g;f=e.w;g=e.cy;while(true){if(c<b)return (-1);if(c<f&&CX(L(d,c))&&c>g&&CC(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ADk(a,b){return 0;}
function BO(){var a=this;Bz.call(a);a.bx=null;a.dT=null;a.R=0;}
function AQd(a,b){var c=new BO();Fh(c,a,b);return c;}
function Fh(a,b,c){BK(a);a.bx=b;a.dT=c;a.R=c.df;}
function AGO(a,b,c,d){var e,f,g,h;if(a.bx===null)return (-1);e=Fl(d,a.R);Dn(d,a.R,b);f=a.bx.j;g=0;while(true){if(g>=f){Dn(d,a.R,e);return (-1);}h=(Bs(a.bx,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AKz(a,b){a.dT.d=b;}
function AIK(a,b){var c;a:{c=a.bx;if(c!==null){c=BR(c);while(true){if(!B1(c))break a;if(!(BV(c)).bN(b))continue;else return 1;}}}return 0;}
function ALg(a,b){return HX(b,a.R)>=0&&Fl(b,a.R)==HX(b,a.R)?0:1;}
function AEM(a){var b,c,d,e;a.ca=1;b=a.dT;if(b!==null&&!b.ca)Is(b);a:{b=a.bx;if(b!==null){c=b.j;d=0;while(true){if(d>=c)break a;b=Bs(a.bx,d);e=b.eV();if(e===null)e=b;else{b.ca=1;Ec(a.bx,d);Qb(a.bx,d,e);}if(!e.ca)e.dO();d=d+1|0;}}}if(a.d!==null)Is(a);}
var Il=F(BO);
function AKj(a,b,c,d){var e,f,g,h;e=Da(d,a.R);BD(d,a.R,b);f=a.bx.j;g=0;while(true){if(g>=f){BD(d,a.R,e);return (-1);}h=(Bs(a.bx,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ALG(a,b){return !Da(b,a.R)?0:1;}
var DC=F(Il);
function AFr(a,b,c,d){var e,f,g;e=Da(d,a.R);BD(d,a.R,b);f=a.bx.j;g=0;while(g<f){if((Bs(a.bx,g)).c(b,c,d)>=0)return a.d.c(a.dT.mt,c,d);g=g+1|0;}BD(d,a.R,e);return (-1);}
function ALo(a,b){a.d=b;}
var LS=F(DC);
function AKs(a,b,c,d){var e,f;e=a.bx.j;f=0;while(f<e){if((Bs(a.bx,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function ANy(a,b){return 0;}
var U3=F(DC);
function ADV(a,b,c,d){var e,f;e=a.bx.j;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bx,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AM3(a,b){return 0;}
var PQ=F(DC);
function AEH(a,b,c,d){var e,f,g,h;e=a.bx.j;f=d.h8?0:d.cy;a:{g=a.d.c(b,c,d);if(g>=0){BD(d,a.R,b);h=0;while(true){if(h>=e)break a;if((Bs(a.bx,h)).cg(f,b,c,d)>=0){BD(d,a.R,(-1));return g;}h=h+1|0;}}}return (-1);}
function AO7(a,b){return 0;}
var Sr=F(DC);
function ACU(a,b,c,d){var e,f;e=a.bx.j;BD(d,a.R,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bx,f)).cg(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ALW(a,b){return 0;}
function Gh(){BO.call(this);this.cI=null;}
function AQB(a,b){var c=new Gh();X$(c,a,b);return c;}
function X$(a,b,c){BK(a);a.cI=b;a.dT=c;a.R=c.df;}
function ADc(a,b,c,d){var e,f;e=Fl(d,a.R);Dn(d,a.R,b);f=a.cI.c(b,c,d);if(f>=0)return f;Dn(d,a.R,e);return (-1);}
function AI0(a,b,c,d){var e;e=a.cI.cb(b,c,d);if(e>=0)Dn(d,a.R,e);return e;}
function AMa(a,b,c,d,e){var f;f=a.cI.cg(b,c,d,e);if(f>=0)Dn(e,a.R,f);return f;}
function AIG(a,b){return a.cI.bN(b);}
function AKD(a){var b;b=new Mc;X$(b,a.cI,a.dT);a.d=b;return b;}
function AOh(a){var b;a.ca=1;b=a.dT;if(b!==null&&!b.ca)Is(b);b=a.cI;if(b!==null&&!b.ca){b=b.eV();if(b!==null){a.cI.ca=1;a.cI=b;}a.cI.dO();}}
var Gs=F();
function T(){var a=this;Gs.call(a);a.ba=0;a.b9=0;a.H=null;a.iO=null;a.jm=null;a.J=0;}
var AUe=null;function NB(){NB=Bo(T);AFb();}
function Bn(a){var b;NB();b=new VP;b.A=BF(64);a.H=b;}
function ADY(a){return null;}
function ADv(a){return a.H;}
function ZY(a){var b,c,d,e,f;if(!a.b9)b=GS(a.H,0)>=2048?0:1;else{a:{c=a.H;b=0;d=c.bo;if(b<d){e=c.A.data;f=(e[0]^(-1))>>>0|0;if(f)b=HP(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+HP(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AG0(a){return a.J;}
function AMS(a){return a;}
function Xz(a){var b,c;if(a.jm===null){b=a.ek();c=new Vd;c.v1=a;c.mU=b;Bn(c);a.jm=c;Eg(c,a.b9);}return a.jm;}
function Hb(a){var b,c;if(a.iO===null){b=a.ek();c=new Vb;c.vG=a;c.rQ=b;c.sp=a;Bn(c);a.iO=c;Eg(c,a.ba);a.iO.J=a.J;}return a.iO;}
function AOd(a){return 0;}
function Eg(a,b){var c;c=a.ba;if(c^b){a.ba=c?0:1;a.b9=a.b9?0:1;}if(!a.J)a.J=1;return a;}
function AGh(a){return a.ba;}
function Ju(b,c){NB();return b.k(c);}
function HN(b,c){var d,e;NB();if(b.c2()!==null&&c.c2()!==null){b=b.c2();c=c.c2();d=X(b.A.data.length,c.A.data.length);e=0;a:{while(e<d){if(b.A.data[e]&c.A.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function QO(b,c){var d,e,f;NB();d=0;while(true){ALU();e=AUf.data;if(d>=e.length){f=new Iy;Bj(f,B(31));f.wj=B(31);f.v4=b;J(f);}e=e[d].data;if(Bt(b,e[0]))break;d=d+1|0;}return AA0(e[1],c);}
function AFb(){var b;b=new GJ;ALU();AUe=b;}
function X1(){var a=this;T.call(a);a.kw=0;a.ms=0;a.fU=0;a.j_=0;a.dr=0;a.eO=0;a.E=null;a.bv=null;}
function Db(){var a=new X1();AOR(a);return a;}
function ANE(a,b){var c=new X1();AE3(c,a,b);return c;}
function AOR(a){Bn(a);a.E=AO$();}
function AE3(a,b,c){Bn(a);a.E=AO$();a.kw=b;a.ms=c;}
function Cr(a,b){a:{if(a.kw){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dr){Lw(a.E,Hc(b&65535));break a;}KI(a.E,Hc(b&65535));break a;}if(a.ms&&b>128){a.fU=1;b=Gl(Gk(b));}}}if(!(!Ri(b)&&!NP(b))){if(a.j_)Lw(a.H,b-55296|0);else KI(a.H,b-55296|0);}if(a.dr)Lw(a.E,b);else KI(a.E,b);if(!a.J&&Lb(b))a.J=1;return a;}
function ACr(a,b){var c,d,e;if(!a.J&&b.J)a.J=1;if(a.j_){if(!b.b9)FD(a.H,b.ek());else C2(a.H,b.ek());}else if(!b.b9)Fw(a.H,b.ek());else{Fb(a.H,b.ek());C2(a.H,b.ek());a.b9=a.b9?0:1;a.j_=1;}if(!a.eO&&b.c2()!==null){if(a.dr){if(!b.ba)FD(a.E,b.c2());else C2(a.E,b.c2());}else if(!b.ba)Fw(a.E,b.c2());else{Fb(a.E,b.c2());C2(a.E,b.c2());a.ba=a.ba?0:1;a.dr=1;}}else{c=a.ba;d=a.bv;if(d!==null){if(!c){e=new Nt;e.ua=a;e.sQ=c;e.sb=d;e.r2=b;Bn(e);a.bv=e;}else{e=new Nu;e.wp=a;e.px=c;e.pj=d;e.oF=b;Bn(e);a.bv=e;}}else{if(c&&!a.dr
&&Lf(a.E)){d=new Nq;d.va=a;d.pr=b;Bn(d);a.bv=d;}else if(!c){d=new No;d.jW=a;d.i_=c;d.np=b;Bn(d);a.bv=d;}else{d=new Np;d.kI=a;d.jf=c;d.r7=b;Bn(d);a.bv=d;}a.eO=1;}}return a;}
function BP(a,b,c){var d,e,f,g,h;if(b>c){d=new BA;U(d);J(d);}a:{b:{if(!a.kw){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cr(a,b);b=b+1|0;}}if(!a.dr)Hw(a.E,b,c+1|0);else{d=a.E;c=c+1|0;if(b>c){d=new By;U(d);J(d);}e=d.bo;if(b<e){f=X(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.A.data;h[g]=h[g]&(HK(d,b)|Hn(d,f));}else{h=d.A.data;h[g]=h[g]&HK(d,b);e=g+1|0;while(e<c){d.A.data[e]=0;e=e+1|0;}if(f&31){h=d.A.data;h[c]=h[c]&Hn(d,f);}}GN(d);}}}}return a;}
function W6(a,b){var c,d,e;if(!a.J&&b.J)a.J=1;if(b.fU)a.fU=1;c=a.b9;if(!(c^b.b9)){if(!c)Fw(a.H,b.H);else C2(a.H,b.H);}else if(c)FD(a.H,b.H);else{Fb(a.H,b.H);C2(a.H,b.H);a.b9=1;}if(!a.eO&&CQ(b)!==null){c=a.ba;if(!(c^b.ba)){if(!c)Fw(a.E,CQ(b));else C2(a.E,CQ(b));}else if(c)FD(a.E,CQ(b));else{Fb(a.E,CQ(b));C2(a.E,CQ(b));a.ba=1;}}else{c=a.ba;d=a.bv;if(d!==null){if(!c){e=new Nj;e.tS=a;e.rp=c;e.r6=d;e.sC=b;Bn(e);a.bv=e;}else{e=new N7;e.um=a;e.sx=c;e.l$=d;e.mv=b;Bn(e);a.bv=e;}}else{if(!a.dr&&Lf(a.E)){if(!c){d=new Nr;d.ws
=a;d.ot=b;Bn(d);a.bv=d;}else{d=new Ns;d.uq=a;d.sk=b;Bn(d);a.bv=d;}}else if(!c){d=new Nv;d.rs=a;d.pO=b;d.pn=c;Bn(d);a.bv=d;}else{d=new Nx;d.qd=a;d.qw=b;d.qN=c;Bn(d);a.bv=d;}a.eO=1;}}}
function VH(a,b){var c,d,e;if(!a.J&&b.J)a.J=1;if(b.fU)a.fU=1;c=a.b9;if(!(c^b.b9)){if(!c)C2(a.H,b.H);else Fw(a.H,b.H);}else if(!c)FD(a.H,b.H);else{Fb(a.H,b.H);C2(a.H,b.H);a.b9=0;}if(!a.eO&&CQ(b)!==null){c=a.ba;if(!(c^b.ba)){if(!c)C2(a.E,CQ(b));else Fw(a.E,CQ(b));}else if(!c)FD(a.E,CQ(b));else{Fb(a.E,CQ(b));C2(a.E,CQ(b));a.ba=0;}}else{c=a.ba;d=a.bv;if(d!==null){if(!c){e=new Nl;e.t_=a;e.ru=c;e.mS=d;e.pu=b;Bn(e);a.bv=e;}else{e=new Nm;e.uw=a;e.q0=c;e.l0=d;e.ro=b;Bn(e);a.bv=e;}}else{if(!a.dr&&Lf(a.E)){if(!c){d=new Nh;d.ur
=a;d.n2=b;Bn(d);a.bv=d;}else{d=new Ni;d.wn=a;d.n7=b;Bn(d);a.bv=d;}}else if(!c){d=new Nn;d.ty=a;d.sK=b;d.qp=c;Bn(d);a.bv=d;}else{d=new Ng;d.qo=a;d.q7=b;d.pz=c;Bn(d);a.bv=d;}a.eO=1;}}}
function CV(a,b){var c;c=a.bv;if(c!==null)return a.ba^c.k(b);return a.ba^Dl(a.E,b);}
function CQ(a){if(!a.eO)return a.E;return null;}
function AF9(a){return a.H;}
function ANg(a){var b,c;if(a.bv!==null)return a;b=CQ(a);c=new Nk;c.tP=a;c.hI=b;Bn(c);return Eg(c,a.ba);}
function AJL(a){var b,c,d;b=new M;O(b);c=GS(a.E,0);while(c>=0){HR(b,Gd(c));BB(b,124);c=GS(a.E,c+1|0);}d=b.N;if(d>0)U5(b,d-1|0);return N(b);}
function AGk(a){return a.fU;}
function Iy(){var a=this;Bm.call(a);a.wj=null;a.v4=null;}
function DN(){Bz.call(this);this.G=null;}
function C4(a,b,c,d){JV(a,c);a.G=b;a.g5=d;}
function AOQ(a){return a.G;}
function AMd(a,b){return !a.G.bN(b)&&!a.d.bN(b)?0:1;}
function ANG(a,b){return 1;}
function AJk(a){var b;a.ca=1;b=a.d;if(b!==null&&!b.ca){b=b.eV();if(b!==null){a.d.ca=1;a.d=b;}a.d.dO();}b=a.G;if(b!==null){if(!b.ca){b=b.eV();if(b!==null){a.G.ca=1;a.G=b;}a.G.dO();}else if(b instanceof Gh&&b.dT.jt)a.G=b.d;}}
function CW(){DN.call(this);this.T=null;}
function AQI(a,b,c){var d=new CW();ED(d,a,b,c);return d;}
function ED(a,b,c,d){C4(a,b,c,d);a.T=b;}
function ACW(a,b,c,d){var e,f;e=0;a:{while((b+a.T.bS()|0)<=d.w){f=a.T.bp(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.T.bS()|0;e=e+(-1)|0;}return f;}
function EP(){CW.call(this);this.iI=null;}
function APR(a,b,c,d){var e=new EP();QZ(e,a,b,c,d);return e;}
function QZ(a,b,c,d,e){ED(a,c,d,e);a.iI=b;}
function ADK(a,b,c,d){var e,f,g,h,i;e=a.iI;f=e.d$;g=e.d5;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.T.bS()|0)>d.w)break a;i=a.T.bp(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.T.bS()|0;h=h+(-1)|0;}return i;}if((b+a.T.bS()|0)>d.w){d.c7=1;return (-1);}i=a.T.bp(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CN=F(DN);
function ADb(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.G.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var Em=F(CW);
function AI6(a,b,c,d){var e;e=a.G.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function AO_(a,b){a.d=b;a.G.L(b);}
var Ve=F(CW);
function AOx(a,b,c,d){while((b+a.T.bS()|0)<=d.w&&a.T.bp(b,c)>0){b=b+a.T.bS()|0;}return a.d.c(b,c,d);}
function AJH(a,b,c,d){var e,f,g;e=a.d.cb(b,c,d);if(e<0)return (-1);f=e-a.T.bS()|0;while(f>=b&&a.T.bp(f,c)>0){g=f-a.T.bS()|0;e=f;f=g;}return e;}
function V(){var a=this;C.call(a);a.kS=null;a.jU=null;}
function AA0(a,b){if(!b&&a.kS===null)a.kS=a.C();else if(b&&a.jU===null)a.jU=Eg(a.C(),1);if(b)return a.jU;return a.kS;}
var C5=F(BA);
function L$(){var a=this;Gs.call(a);a.d$=0;a.d5=0;}
function AJS(a){var b,c,d,e,f;b=a.d$;c=a.d5;d=c==2147483647?B(31):Le(ABG(c));e=new M;O(e);BB(e,123);f=S(e,b);BB(f,44);BB(G(f,d),125);return N(e);}
var M9=F(Bz);
function AIn(a,b,c,d){return b;}
function AKy(a,b){return 0;}
function VP(){var a=this;C.call(a);a.A=null;a.bo=0;}
function AO$(){var a=new VP();AEq(a);return a;}
function AEq(a){a.A=BF(0);}
function KI(a,b){var c,d;c=b/32|0;if(b>=a.bo){HT(a,c+1|0);a.bo=b+1|0;}d=a.A.data;d[c]=d[c]|1<<(b%32|0);}
function Hw(a,b,c){var d,e,f,g,h;d=BH(b,c);if(d>0){e=new By;U(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bo){HT(a,f+1|0);a.bo=c;}if(d==f){g=a.A.data;g[d]=g[d]|Hn(a,b)&HK(a,c);}else{g=a.A.data;g[d]=g[d]|Hn(a,b);h=d+1|0;while(h<f){a.A.data[h]=(-1);h=h+1|0;}if(c&31){g=a.A.data;g[f]=g[f]|HK(a,c);}}}
function Hn(a,b){return (-1)<<(b%32|0);}
function HK(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Lw(a,b){var c,d;c=b/32|0;d=a.A.data;if(c<d.length){d[c]=d[c]&Jr((-2),b%32|0);if(b==(a.bo-1|0))GN(a);}}
function Dl(a,b){var c,d;c=b/32|0;d=a.A.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function GS(a,b){var c,d,e,f;c=a.bo;if(b>=c)return (-1);d=b/32|0;e=a.A.data;f=e[d]>>>(b%32|0)|0;if(f)return HP(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+HP(e[f])|0;f=f+1|0;}return (-1);}
function HT(a,b){var c;c=a.A.data.length;if(c>=b)return;c=W((b*3|0)/2|0,(c*2|0)+1|0);a.A=ACe(a.A,c);}
function GN(a){var b,c,d;b=(a.bo+31|0)/32|0;a.bo=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=MM(a.A.data[c]);if(d<32)break;c=c+(-1)|0;a.bo=a.bo-32|0;}a.bo=a.bo-d|0;}}
function C2(a,b){var c,d,e,f;c=X(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]&b.A.data[d];d=d+1|0;}while(true){f=a.A.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bo=X(a.bo,b.bo);GN(a);}
function FD(a,b){var c,d,e;c=X(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]&(b.A.data[d]^(-1));d=d+1|0;}GN(a);}
function Fw(a,b){var c,d,e;c=W(a.bo,b.bo);a.bo=c;HT(a,(c+31|0)/32|0);c=X(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]|b.A.data[d];d=d+1|0;}}
function Fb(a,b){var c,d,e;c=W(a.bo,b.bo);a.bo=c;HT(a,(c+31|0)/32|0);c=X(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]^b.A.data[d];d=d+1|0;}GN(a);}
function Lf(a){return a.bo?0:1;}
function L0(){var a=this;BO.call(a);a.n$=null;a.tO=0;}
function O8(){var a=this;BO.call(a);a.le=null;a.kL=null;}
function AAz(a,b){var c=new O8();AB_(c,a,b);return c;}
function AB_(a,b,c){BK(a);a.le=b;a.kL=c;}
function ADG(a,b,c,d){var e,f,g,h,i;e=a.le.c(b,c,d);if(e<0)a:{f=a.kL;g=d.cy;e=d.w;h=b+1|0;e=BH(h,e);if(e>0){d.c7=1;e=(-1);}else{i=L(c,b);if(!f.n$.k(i))e=(-1);else{if(CC(i)){if(e<0&&CX(L(c,h))){e=(-1);break a;}}else if(CX(i)&&b>g&&CC(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AKg(a,b){a.d=b;a.kL.d=b;a.le.L(b);}
function AEc(a,b){return 1;}
function ADX(a,b){return 1;}
function Dp(){var a=this;BO.call(a);a.dl=null;a.u5=0;}
function AIi(a){var b=new Dp();Th(b,a);return b;}
function Th(a,b){BK(a);a.dl=b.ih();a.u5=b.ba;}
function AF1(a,b,c,d){var e,f,g,h;e=d.w;if(b<e){f=b+1|0;g=L(c,b);if(a.k(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(G2(g,f)&&a.k(Eh(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AGw(a,b){return a.dl.k(b);}
function ADA(a,b){if(b instanceof DF)return Ju(a.dl,b.fj);if(b instanceof Ea)return Ju(a.dl,b.cZ);if(b instanceof Dp)return HN(a.dl,b.dl);if(!(b instanceof D3))return 1;return HN(a.dl,b.eA);}
function AIa(a){return a.dl;}
function AML(a,b){a.d=b;}
function AGb(a,b){return 1;}
var Iw=F(Dp);
function AHZ(a,b){return a.dl.k(Gl(Gk(b)));}
function XU(){var a=this;BS.call(a);a.oY=null;a.uN=0;}
function AG1(a){var b=new XU();AJY(b,a);return b;}
function AJY(a,b){Do(a);a.oY=b.ih();a.uN=b.ba;}
function AIo(a,b,c){return !a.oY.k(EI(El(L(c,b))))?(-1):1;}
function D3(){var a=this;BS.call(a);a.eA=null;a.vo=0;}
function AM_(a){var b=new D3();AK1(b,a);return b;}
function AK1(a,b){Do(a);a.eA=b.ih();a.vo=b.ba;}
function Lz(a,b,c){return !a.eA.k(L(c,b))?(-1):1;}
function AKB(a,b){if(b instanceof Ea)return Ju(a.eA,b.cZ);if(b instanceof D3)return HN(a.eA,b.eA);if(!(b instanceof Dp)){if(!(b instanceof DF))return 1;return 0;}return HN(a.eA,b.dl);}
function NF(){var a=this;BO.call(a);a.gf=null;a.k6=null;a.iF=0;}
function ANl(a,b){var c=new NF();ADd(c,a,b);return c;}
function ADd(a,b,c){BK(a);a.gf=b;a.iF=c;}
function AI5(a,b){a.d=b;}
function Pi(a){if(a.k6===null)a.k6=FG(a.gf);return a.k6;}
function ACL(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.w;f=BF(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?ES([k,l]):ES([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.iF;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gf.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.iF==3){k=f[0];m=a.gf.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.iF==2){b=f[0];m=a.gf.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AD8(a,b){return b instanceof NF&&!Bt(Pi(b),Pi(a))?0:1;}
function ANk(a,b){return 1;}
function Ea(){BS.call(this);this.cZ=0;}
function Yk(a){var b=new Ea();AK4(b,a);return b;}
function AK4(a,b){Do(a);a.cZ=b;}
function AH8(a){return 1;}
function AGX(a,b,c){return a.cZ!=L(c,b)?(-1):1;}
function AFW(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return Hh(a,b,c,d);e=d.w;while(true){if(b>=e)return (-1);f=Gp(c,a.cZ,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AId(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hr(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FM(d,a.cZ,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ANc(a,b){if(b instanceof Ea)return b.cZ!=a.cZ?0:1;if(!(b instanceof D3)){if(b instanceof Dp)return b.k(a.cZ);if(!(b instanceof DF))return 1;return 0;}return Lz(b,0,VQ(a.cZ))<=0?0:1;}
function ABY(){BS.call(this);this.lS=0;}
function ALv(a){var b=new ABY();AJF(b,a);return b;}
function AJF(a,b){Do(a);a.lS=EI(El(b));}
function ACG(a,b,c){return a.lS!=EI(El(L(c,b)))?(-1):1;}
function W8(){var a=this;BS.call(a);a.sF=0;a.mN=0;}
function AEB(a){var b=new W8();ALP(b,a);return b;}
function ALP(a,b){Do(a);a.sF=b;a.mN=Hc(b);}
function AC7(a,b,c){return a.sF!=L(c,b)&&a.mN!=L(c,b)?(-1):1;}
function E0(){var a=this;BO.call(a);a.gW=0;a.jH=null;a.jc=null;a.i9=0;}
function ARq(a,b){var c=new E0();MY(c,a,b);return c;}
function MY(a,b,c){BK(a);a.gW=1;a.jc=b;a.i9=c;}
function AOg(a,b){a.d=b;}
function AKi(a,b,c,d){var e,f,g,h,i,j,k,l;e=BF(4);f=d.w;if(b>=f)return (-1);g=JM(a,b,c,f);h=b+a.gW|0;i=ABH(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;D6(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=JM(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(ABH(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.gW|0;if(h>=f){b=k;break a;}g=JM(a,h,c,f);b=k;}}}if(b!=a.i9)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.jc.data[g])break;g=g+1|0;}return (-1);}
function VG(a){var b,c;if(a.jH===null){b=new M;O(b);c=0;while(c<a.i9){HR(b,Gd(a.jc.data[c]));c=c+1|0;}a.jH=N(b);}return a.jH;}
function JM(a,b,c,d){var e,f,g;a.gW=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(G2(e,f)){g=BL(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CC(g[0])&&CX(g[1])?Eh(g[0],g[1]):g[0];a.gW=2;}}return e;}
function AIp(a,b){return b instanceof E0&&!Bt(VG(b),VG(a))?0:1;}
function ALs(a,b){return 1;}
var V$=F(E0);
var SJ=F(E0);
var WU=F(CN);
function AE7(a,b,c,d){var e;while(true){e=a.G.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var Ou=F(CN);
function AJy(a,b,c,d){var e;e=a.G.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.G.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FC=F(CN);
function AMG(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.G.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function ANO(a,b){a.d=b;a.G.L(b);}
var Oa=F(FC);
function AH_(a,b,c,d){var e;e=a.G.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AJT(a,b){a.d=b;}
function EX(){var a=this;CN.call(a);a.fy=null;a.c$=0;}
function AUg(a,b,c,d,e){var f=new EX();Iu(f,a,b,c,d,e);return f;}
function Iu(a,b,c,d,e,f){C4(a,c,d,e);a.fy=b;a.c$=f;}
function AO1(a,b,c,d){var e,f;e=L5(d,a.c$);if(!a.G.F(d))return a.d.c(b,c,d);if(e>=a.fy.d5)return a.d.c(b,c,d);f=a.c$;e=e+1|0;D0(d,f,e);f=a.G.c(b,c,d);if(f>=0){D0(d,a.c$,0);return f;}f=a.c$;e=e+(-1)|0;D0(d,f,e);if(e>=a.fy.d$)return a.d.c(b,c,d);D0(d,a.c$,0);return (-1);}
var Mh=F(EX);
function AHs(a,b,c,d){var e,f,g;e=0;f=a.fy.d5;a:{while(true){g=a.G.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fy.d$)return (-1);return a.d.c(b,c,d);}
var Qc=F(CN);
function AOm(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.G.c(b,c,d);}
var Ph=F(FC);
function AEf(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.G.c(b,c,d);return e;}
var TN=F(EX);
function ADr(a,b,c,d){var e,f,g;e=L5(d,a.c$);if(!a.G.F(d))return a.d.c(b,c,d);f=a.fy;if(e>=f.d5){D0(d,a.c$,0);return a.d.c(b,c,d);}if(e<f.d$){D0(d,a.c$,e+1|0);g=a.G.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){D0(d,a.c$,0);return g;}D0(d,a.c$,e+1|0);g=a.G.c(b,c,d);}return g;}
var Qe=F(DN);
function AON(a,b,c,d){var e;e=d.w;if(e>b)return a.d.cg(b,e,c,d);return a.d.c(b,c,d);}
function AMU(a,b,c,d){var e;e=d.w;if(a.d.cg(b,e,c,d)>=0)return b;return (-1);}
function Nf(){DN.call(this);this.jS=null;}
function AKE(a,b,c,d){var e,f;e=d.w;f=TQ(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cg(b,e,c,d);return a.d.c(b,c,d);}
function ACP(a,b,c,d){var e,f,g,h;e=d.w;f=a.d.cb(b,c,d);if(f<0)return (-1);g=TQ(a,f,e,c);if(g>=0)e=g;g=W(f,a.d.cg(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.jS.g1(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function TQ(a,b,c,d){while(true){if(b>=c)return (-1);if(a.jS.g1(L(d,b)))break;b=b+1|0;}return b;}
var Ey=F();
var AUh=null;var AUi=null;function Od(b){var c;if(!(b&1)){c=AUi;if(c!==null)return c;c=new Ud;AUi=c;return c;}c=AUh;if(c!==null)return c;c=new Uc;AUh=c;return c;}
var WW=F(CW);
function ADt(a,b,c,d){var e;a:{while(true){if((b+a.T.bS()|0)>d.w)break a;e=a.T.bp(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Va=F(Em);
function AJx(a,b,c,d){var e;if((b+a.T.bS()|0)<=d.w){e=a.T.bp(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var NZ=F(EP);
function AMh(a,b,c,d){var e,f,g,h,i;e=a.iI;f=e.d$;g=e.d5;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.T.bS()|0)>d.w)break a;i=a.T.bp(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.T.bS()|0)>d.w){d.c7=1;return (-1);}i=a.T.bp(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Pd=F(CW);
function AKw(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.T.bS()|0)<=d.w){e=a.T.bp(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var S3=F(Em);
function ADy(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.G.c(b,c,d);}
var PR=F(EP);
function AMx(a,b,c,d){var e,f,g,h,i,j;e=a.iI;f=e.d$;g=e.d5;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.T.bS()|0)<=d.w){i=a.T.bp(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.T.bS()|0)>d.w){d.c7=1;return (-1);}j=a.T.bp(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var JD=F(Bz);
function AII(a,b,c,d){if(b&&!(d.eP&&b==d.cy))return (-1);return a.d.c(b,c,d);}
function AHJ(a,b){return 0;}
function Yw(){Bz.call(this);this.sc=0;}
function AM9(a){var b=new Yw();AH5(b,a);return b;}
function AH5(a,b){BK(a);a.sc=b;}
function ADU(a,b,c,d){var e,f,g;e=b<d.w?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.h8?0:d.cy;return (e!=32&&!Pk(a,e,b,g,c)?0:1)^(f!=32&&!Pk(a,f,b-1|0,g,c)?0:1)^a.sc?(-1):a.d.c(b,c,d);}
function AD5(a,b){return 0;}
function Pk(a,b,c,d,e){var f;if(!IP(b)&&b!=95){a:{if(Co(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(IP(f))return 0;if(Co(f)!=6)return 1;}}return 1;}return 0;}
var Nb=F(Bz);
function AH3(a,b,c,d){if(b!=d.g7)return (-1);return a.d.c(b,c,d);}
function AOX(a,b){return 0;}
function VR(){Bz.call(this);this.fF=0;}
function AQU(a){var b=new VR();ABv(b,a);return b;}
function ABv(a,b){BK(a);a.fF=b;}
function AK_(a,b,c,d){var e,f,g;e=!d.eP?I(c):d.w;if(b>=e){BD(d,a.fF,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BD(d,a.fF,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BD(d,a.fF,0);return a.d.c(b,c,d);}
function AEW(a,b){var c;c=!Da(b,a.fF)?0:1;BD(b,a.fF,(-1));return c;}
var VA=F(Bz);
function AKc(a,b,c,d){if(b<(d.h8?I(c):d.w))return (-1);d.c7=1;d.vP=1;return a.d.c(b,c,d);}
function ACE(a,b){return 0;}
function Mt(){Bz.call(this);this.pE=null;}
function AEL(a,b,c,d){a:{if(b!=d.w){if(!b)break a;if(d.eP&&b==d.cy)break a;if(a.pE.q2(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AGH(a,b){return 0;}
var ABO=F(BO);
function ARb(){var a=new ABO();AJ4(a);return a;}
function AJ4(a){BK(a);}
function AOr(a,b,c,d){var e,f,g,h;e=d.w;f=b+1|0;if(f>e){d.c7=1;return (-1);}g=L(c,b);if(CC(g)){h=b+2|0;if(h<=e&&G2(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AD$(a,b){a.d=b;}
function AJZ(a){return (-2147483602);}
function AD9(a,b){return 1;}
function X0(){BO.call(this);this.kk=null;}
function AQP(a){var b=new X0();AEU(b,a);return b;}
function AEU(a,b){BK(a);a.kk=b;}
function AJ7(a,b,c,d){var e,f,g,h;e=d.w;f=b+1|0;if(f>e){d.c7=1;return (-1);}g=L(c,b);if(CC(g)){b=b+2|0;if(b<=e){h=L(c,f);if(G2(g,h))return a.kk.g1(Eh(g,h))?(-1):a.d.c(b,c,d);}}return a.kk.g1(g)?(-1):a.d.c(f,c,d);}
function AL2(a,b){a.d=b;}
function ACA(a){return (-2147483602);}
function AOC(a,b){return 1;}
function ABE(){Bz.call(this);this.gO=0;}
function AQj(a){var b=new ABE();AGE(b,a);return b;}
function AGE(a,b){BK(a);a.gO=b;}
function AIt(a,b,c,d){var e;e=!d.eP?I(c):d.w;if(b>=e){BD(d,a.gO,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BD(d,a.gO,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AGC(a,b){var c;c=!Da(b,a.gO)?0:1;BD(b,a.gO,(-1));return c;}
function ZZ(){Bz.call(this);this.gV=0;}
function AP6(a){var b=new ZZ();AG2(b,a);return b;}
function AG2(a,b){BK(a);a.gV=b;}
function AKa(a,b,c,d){if((!d.eP?I(c)-b|0:d.w-b|0)<=0){BD(d,a.gV,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BD(d,a.gV,1);return a.d.c(b+1|0,c,d);}
function AGt(a,b){var c;c=!Da(b,a.gV)?0:1;BD(b,a.gV,(-1));return c;}
function W5(){Bz.call(this);this.e$=0;}
function APp(a){var b=new W5();AO3(b,a);return b;}
function AO3(a,b){BK(a);a.e$=b;}
function AHy(a,b,c,d){var e,f,g;e=!d.eP?I(c)-b|0:d.w-b|0;if(!e){BD(d,a.e$,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BD(d,a.e$,0);return a.d.c(b,c,d);case 13:if(g!=10){BD(d,a.e$,0);return a.d.c(b,c,d);}BD(d,a.e$,0);return a.d.c(b,c,d);default:}return (-1);}
function AE1(a,b){var c;c=!Da(b,a.e$)?0:1;BD(b,a.e$,(-1));return c;}
function GK(){var a=this;BO.call(a);a.mp=0;a.gc=0;}
function ARk(a,b){var c=new GK();NN(c,a,b);return c;}
function NN(a,b,c){BK(a);a.mp=b;a.gc=c;}
function ADu(a,b,c,d){var e,f,g,h;e=FU(a,d);if(e!==null&&(b+I(e)|0)<=d.w){f=0;while(true){if(f>=I(e)){BD(d,a.gc,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&Hc(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ALk(a,b){a.d=b;}
function FU(a,b){var c,d;c=a.mp;d=Fl(b,c);c=HX(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.kn)?B7(b.kn,d,c):null;}
function ALH(a,b){var c;c=!Da(b,a.gc)?0:1;BD(b,a.gc,(-1));return c;}
var ABJ=F(GK);
function APw(a,b){var c=new ABJ();ANH(c,a,b);return c;}
function ANH(a,b,c){NN(a,b,c);}
function AE6(a,b,c,d){var e,f;e=FU(a,d);if(e!==null&&(b+I(e)|0)<=d.w){f=!Tg(c,e,b)?(-1):I(e);if(f<0)return (-1);BD(d,a.gc,f);return a.d.c(b+f|0,c,d);}return (-1);}
function ANu(a,b,c,d){var e,f;e=FU(a,d);f=d.cy;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=Yv(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ADh(a,b,c,d,e){var f,g;f=FU(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=X(c,I(d)-I(f)|0);b:{c:while(true){if(g<0){g=(-1);break b;}c=0;while(true){if(c>=I(f))break c;if(L(d,g+c|0)!=L(f,c))break;c=c+1|0;}g=g+(-1)|0;}}if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AJr(a,b){return 1;}
var Y9=F(GK);
function AP7(a,b){var c=new Y9();AGB(c,a,b);return c;}
function AGB(a,b,c){NN(a,b,c);}
function AIV(a,b,c,d){var e,f;e=FU(a,d);if(e!==null&&(b+I(e)|0)<=d.w){f=0;while(true){if(f>=I(e)){BD(d,a.gc,I(e));return a.d.c(b+I(e)|0,c,d);}if(EI(El(L(e,f)))!=EI(El(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var M8=F(F5);
function AGl(a,b,c,d,e){L_(a,b,c,d,e);return a;}
function ADZ(a,b,c,d){V0(a,b,c,d);return a;}
function AEp(a,b){IV(a,b);}
function AMY(a,b,c){Wg(a,b,c);return a;}
function Qm(){var a=this;BS.call(a);a.ck=null;a.jJ=null;a.ku=null;}
function AFo(a,b,c){return !Jz(a,c,b)?(-1):a.bC;}
function ADP(a,b,c,d){var e,f,g;e=d.w;while(true){if(b>e)return (-1);f=L(a.ck,a.bC-1|0);a:{while(true){g=a.bC;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&Jz(a,c,b))break;b=b+Ru(a.jJ,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bC|0,c,d)>=0)break;b=b+1|0;}return b;}
function AGG(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.ck,0);g=(I(d)-c|0)-a.bC|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&Jz(a,d,c))break;c=c-Ru(a.ku,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bC|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AG$(a,b){var c;if(b instanceof Ea)return b.cZ!=L(a.ck,0)?0:1;if(b instanceof D3)return Lz(b,0,B7(a.ck,0,1))<=0?0:1;if(!(b instanceof Dp)){if(!(b instanceof DF))return 1;return I(a.ck)>1&&b.fj==Eh(L(a.ck,0),L(a.ck,1))?1:0;}a:{b:{b=b;if(!b.k(L(a.ck,0))){if(I(a.ck)<=1)break b;if(!b.k(Eh(L(a.ck,0),L(a.ck,1))))break b;}c=1;break a;}c=0;}return c;}
function Jz(a,b,c){var d;d=0;while(d<a.bC){if(L(b,d+c|0)!=L(a.ck,d))return 0;d=d+1|0;}return 1;}
function W4(){BS.call(this);this.ia=null;}
function ARn(a){var b=new W4();ANe(b,a);return b;}
function ANe(a,b){var c,d,e;Do(a);c=new M;O(c);d=0;while(true){e=BH(d,b.N);if(e>=0){a.ia=N(c);a.bC=c.N;return;}if(d<0)break;if(e>=0)break;BB(c,EI(El(b.B.data[d])));d=d+1|0;}b=new By;U(b);J(b);}
function AI2(a,b,c){var d;d=0;while(true){if(d>=I(a.ia))return I(a.ia);if(L(a.ia,d)!=EI(El(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Mn(){BS.call(this);this.gL=null;}
function AMj(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.gL))return I(a.gL);e=L(a.gL,d);f=b+d|0;if(e!=L(c,f)&&Hc(L(a.gL,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var GJ=F();
var AUj=null;var AUk=null;var AUf=null;function ALU(){ALU=Bo(GJ);AFI();}
function AFI(){AUj=AQ3();AUk=AQc();AUf=H($rt_arraycls(C),[H(C,[B(363),ARl()]),H(C,[B(364),APm()]),H(C,[B(365),AQ0()]),H(C,[B(366),AQ8()]),H(C,[B(367),AUk]),H(C,[B(368),AQm()]),H(C,[B(369),AQa()]),H(C,[B(370),APA()]),H(C,[B(371),APv()]),H(C,[B(372),APH()]),H(C,[B(373),APT()]),H(C,[B(374),APE()]),H(C,[B(375),AQH()]),H(C,[B(376),APg()]),H(C,[B(377),AQ4()]),H(C,[B(378),APS()]),H(C,[B(379),AQk()]),H(C,[B(380),APQ()]),H(C,[B(381),AQl()]),H(C,[B(382),APK()]),H(C,[B(383),ARa()]),H(C,[B(384),APN()]),H(C,[B(385),AQq()]),
H(C,[B(386),AQY()]),H(C,[B(387),AQV()]),H(C,[B(388),AQ9()]),H(C,[B(389),APJ()]),H(C,[B(390),AQN()]),H(C,[B(391),AUj]),H(C,[B(392),AQu()]),H(C,[B(393),APB()]),H(C,[B(394),AUj]),H(C,[B(395),APd()]),H(C,[B(396),AUk]),H(C,[B(397),AP1()]),H(C,[B(398),P(0,127)]),H(C,[B(399),P(128,255)]),H(C,[B(400),P(256,383)]),H(C,[B(401),P(384,591)]),H(C,[B(402),P(592,687)]),H(C,[B(403),P(688,767)]),H(C,[B(404),P(768,879)]),H(C,[B(405),P(880,1023)]),H(C,[B(406),P(1024,1279)]),H(C,[B(407),P(1280,1327)]),H(C,[B(408),P(1328,1423)]),
H(C,[B(409),P(1424,1535)]),H(C,[B(410),P(1536,1791)]),H(C,[B(411),P(1792,1871)]),H(C,[B(412),P(1872,1919)]),H(C,[B(413),P(1920,1983)]),H(C,[B(414),P(2304,2431)]),H(C,[B(415),P(2432,2559)]),H(C,[B(416),P(2560,2687)]),H(C,[B(417),P(2688,2815)]),H(C,[B(418),P(2816,2943)]),H(C,[B(419),P(2944,3071)]),H(C,[B(420),P(3072,3199)]),H(C,[B(421),P(3200,3327)]),H(C,[B(422),P(3328,3455)]),H(C,[B(423),P(3456,3583)]),H(C,[B(424),P(3584,3711)]),H(C,[B(425),P(3712,3839)]),H(C,[B(426),P(3840,4095)]),H(C,[B(427),P(4096,4255)]),
H(C,[B(428),P(4256,4351)]),H(C,[B(429),P(4352,4607)]),H(C,[B(430),P(4608,4991)]),H(C,[B(431),P(4992,5023)]),H(C,[B(432),P(5024,5119)]),H(C,[B(433),P(5120,5759)]),H(C,[B(434),P(5760,5791)]),H(C,[B(435),P(5792,5887)]),H(C,[B(436),P(5888,5919)]),H(C,[B(437),P(5920,5951)]),H(C,[B(438),P(5952,5983)]),H(C,[B(439),P(5984,6015)]),H(C,[B(440),P(6016,6143)]),H(C,[B(441),P(6144,6319)]),H(C,[B(442),P(6400,6479)]),H(C,[B(443),P(6480,6527)]),H(C,[B(444),P(6528,6623)]),H(C,[B(445),P(6624,6655)]),H(C,[B(446),P(6656,6687)]),
H(C,[B(447),P(7424,7551)]),H(C,[B(448),P(7552,7615)]),H(C,[B(449),P(7616,7679)]),H(C,[B(450),P(7680,7935)]),H(C,[B(451),P(7936,8191)]),H(C,[B(452),P(8192,8303)]),H(C,[B(453),P(8304,8351)]),H(C,[B(454),P(8352,8399)]),H(C,[B(455),P(8400,8447)]),H(C,[B(456),P(8448,8527)]),H(C,[B(457),P(8528,8591)]),H(C,[B(458),P(8592,8703)]),H(C,[B(459),P(8704,8959)]),H(C,[B(460),P(8960,9215)]),H(C,[B(461),P(9216,9279)]),H(C,[B(462),P(9280,9311)]),H(C,[B(463),P(9312,9471)]),H(C,[B(464),P(9472,9599)]),H(C,[B(465),P(9600,9631)]),
H(C,[B(466),P(9632,9727)]),H(C,[B(467),P(9728,9983)]),H(C,[B(468),P(9984,10175)]),H(C,[B(469),P(10176,10223)]),H(C,[B(470),P(10224,10239)]),H(C,[B(471),P(10240,10495)]),H(C,[B(472),P(10496,10623)]),H(C,[B(473),P(10624,10751)]),H(C,[B(474),P(10752,11007)]),H(C,[B(475),P(11008,11263)]),H(C,[B(476),P(11264,11359)]),H(C,[B(477),P(11392,11519)]),H(C,[B(478),P(11520,11567)]),H(C,[B(479),P(11568,11647)]),H(C,[B(480),P(11648,11743)]),H(C,[B(481),P(11776,11903)]),H(C,[B(482),P(11904,12031)]),H(C,[B(483),P(12032,12255)]),
H(C,[B(484),P(12272,12287)]),H(C,[B(485),P(12288,12351)]),H(C,[B(486),P(12352,12447)]),H(C,[B(487),P(12448,12543)]),H(C,[B(488),P(12544,12591)]),H(C,[B(489),P(12592,12687)]),H(C,[B(490),P(12688,12703)]),H(C,[B(491),P(12704,12735)]),H(C,[B(492),P(12736,12783)]),H(C,[B(493),P(12784,12799)]),H(C,[B(494),P(12800,13055)]),H(C,[B(495),P(13056,13311)]),H(C,[B(496),P(13312,19893)]),H(C,[B(497),P(19904,19967)]),H(C,[B(498),P(19968,40959)]),H(C,[B(499),P(40960,42127)]),H(C,[B(500),P(42128,42191)]),H(C,[B(501),P(42752,
42783)]),H(C,[B(502),P(43008,43055)]),H(C,[B(503),P(44032,55203)]),H(C,[B(504),P(55296,56191)]),H(C,[B(505),P(56192,56319)]),H(C,[B(506),P(56320,57343)]),H(C,[B(507),P(57344,63743)]),H(C,[B(508),P(63744,64255)]),H(C,[B(509),P(64256,64335)]),H(C,[B(510),P(64336,65023)]),H(C,[B(511),P(65024,65039)]),H(C,[B(512),P(65040,65055)]),H(C,[B(513),P(65056,65071)]),H(C,[B(514),P(65072,65103)]),H(C,[B(515),P(65104,65135)]),H(C,[B(516),P(65136,65279)]),H(C,[B(517),P(65280,65519)]),H(C,[B(518),P(0,1114111)]),H(C,[B(519),
APF()]),H(C,[B(520),BG(0,1)]),H(C,[B(521),H_(62,1)]),H(C,[B(522),BG(1,1)]),H(C,[B(523),BG(2,1)]),H(C,[B(524),BG(3,0)]),H(C,[B(525),BG(4,0)]),H(C,[B(526),BG(5,1)]),H(C,[B(527),H_(448,1)]),H(C,[B(528),BG(6,1)]),H(C,[B(529),BG(7,0)]),H(C,[B(530),BG(8,1)]),H(C,[B(531),H_(3584,1)]),H(C,[B(532),BG(9,1)]),H(C,[B(533),BG(10,1)]),H(C,[B(534),BG(11,1)]),H(C,[B(535),H_(28672,0)]),H(C,[B(536),BG(12,0)]),H(C,[B(537),BG(13,0)]),H(C,[B(538),BG(14,0)]),H(C,[B(539),AP8(983040,1,1)]),H(C,[B(540),BG(15,0)]),H(C,[B(541),BG(16,
1)]),H(C,[B(542),BG(18,1)]),H(C,[B(543),AQi(19,0,1)]),H(C,[B(544),H_(1643118592,1)]),H(C,[B(545),BG(20,0)]),H(C,[B(546),BG(21,0)]),H(C,[B(547),BG(22,0)]),H(C,[B(548),BG(23,0)]),H(C,[B(549),BG(24,1)]),H(C,[B(550),H_(2113929216,1)]),H(C,[B(551),BG(25,1)]),H(C,[B(552),BG(26,0)]),H(C,[B(553),BG(27,0)]),H(C,[B(554),BG(28,1)]),H(C,[B(555),BG(29,0)]),H(C,[B(556),BG(30,0)])]);}
function LH(){BS.call(this);this.pf=0;}
function AMq(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.pf!=Gl(Gk(Eh(e,d)))?(-1):2;}
function Ka(){BO.call(this);this.fR=0;}
function AJ3(a){var b=new Ka();AEi(b,a);return b;}
function AEi(a,b){BK(a);a.fR=b;}
function AKq(a,b){a.d=b;}
function AEX(a,b,c,d){var e,f;e=b+1|0;if(e>d.w){d.c7=1;return (-1);}f=L(c,b);if(b>d.cy&&CC(L(c,b-1|0)))return (-1);if(a.fR!=f)return (-1);return a.d.c(e,c,d);}
function AG5(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return Hh(a,b,c,d);e=d.cy;f=d.w;while(true){if(b>=f)return (-1);g=Gp(c,a.fR,b);if(g<0)return (-1);if(g>e&&CC(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AFv(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hr(a,b,c,d,e);f=e.cy;a:{while(true){if(c<b)return (-1);g=FM(d,a.fR,c);if(g<0)break a;if(g<b)break a;if(g>f&&CC(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ADf(a,b){if(b instanceof Ea)return 0;if(b instanceof D3)return 0;if(b instanceof Dp)return 0;if(b instanceof DF)return 0;if(b instanceof Kv)return 0;if(!(b instanceof Ka))return 1;return b.fR!=a.fR?0:1;}
function AM4(a,b){return 1;}
function Kv(){BO.call(this);this.ft=0;}
function AHC(a){var b=new Kv();AJ9(b,a);return b;}
function AJ9(a,b){BK(a);a.ft=b;}
function AEo(a,b){a.d=b;}
function ACV(a,b,c,d){var e,f,g,h;e=d.w;f=b+1|0;g=BH(f,e);if(g>0){d.c7=1;return (-1);}h=L(c,b);if(g<0&&CX(L(c,f)))return (-1);if(a.ft!=h)return (-1);return a.d.c(f,c,d);}
function AKN(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hh(a,b,c,d);e=d.w;while(true){if(b>=e)return (-1);f=Gp(c,a.ft,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CX(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function AMi(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hr(a,b,c,d,e);f=e.w;a:{while(true){if(c<b)return (-1);g=FM(d,a.ft,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CX(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AFp(a,b){if(b instanceof Ea)return 0;if(b instanceof D3)return 0;if(b instanceof Dp)return 0;if(b instanceof DF)return 0;if(b instanceof Ka)return 0;if(!(b instanceof Kv))return 1;return b.ft!=a.ft?0:1;}
function AKX(a,b){return 1;}
function DF(){var a=this;BS.call(a);a.iZ=0;a.hG=0;a.fj=0;}
function ALJ(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.iZ==e&&a.hG==d?2:(-1);}
function AJM(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hh(a,b,c,d);e=d.w;while(b<e){b=Gp(c,a.iZ,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.hG==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AEl(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hr(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FM(d,a.hG,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.iZ==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ALw(a,b){if(b instanceof DF)return b.fj!=a.fj?0:1;if(b instanceof Dp)return b.k(a.fj);if(b instanceof Ea)return 0;if(!(b instanceof D3))return 1;return 0;}
var Uc=F(Ey);
function AEC(a,b){return b!=10?0:1;}
function ALB(a,b,c){return b!=10?0:1;}
var Ud=F(Ey);
function AMA(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AN_(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AAO(){var a=this;C.call(a);a.ly=null;a.je=null;a.gr=0;a.te=0;}
function AJX(a){var b=new AAO();AH1(b,a);return b;}
function AH1(a,b){var c,d;while(true){c=a.gr;if(b<c)break;a.gr=c<<1|1;}d=c<<1|1;a.gr=d;d=d+1|0;a.ly=BF(d);a.je=BF(d);a.te=b;}
function PU(a,b,c){var d,e,f,g;d=0;e=a.gr;f=b&e;while(true){g=a.ly.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.je.data[f]=c;}
function Ru(a,b){var c,d,e,f;c=a.gr;d=b&c;e=0;while(true){f=a.ly.data[d];if(!f)break;if(f==b)return a.je.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.te;}
var Xm=F();
var J8=F(V);
function AQ3(){var a=new J8();AHt(a);return a;}
function AHt(a){}
function Zf(a){return Cr(BP(Db(),9,13),32);}
var Ja=F(V);
function AQc(){var a=new Ja();AM1(a);return a;}
function AM1(a){}
function ZT(a){return BP(Db(),48,57);}
var AAI=F(V);
function ARl(){var a=new AAI();AGP(a);return a;}
function AGP(a){}
function AL4(a){return BP(Db(),97,122);}
var AA_=F(V);
function APm(){var a=new AA_();AH7(a);return a;}
function AH7(a){}
function AM7(a){return BP(Db(),65,90);}
var ABd=F(V);
function AQ0(){var a=new ABd();ADR(a);return a;}
function ADR(a){}
function AF2(a){return BP(Db(),0,127);}
var J4=F(V);
function AQ8(){var a=new J4();AE8(a);return a;}
function AE8(a){}
function X2(a){return BP(BP(Db(),97,122),65,90);}
var KF=F(J4);
function AQm(){var a=new KF();AHI(a);return a;}
function AHI(a){}
function YR(a){return BP(X2(a),48,57);}
var ACq=F(V);
function AQa(){var a=new ACq();AJA(a);return a;}
function AJA(a){}
function AG3(a){return BP(BP(BP(Db(),33,64),91,96),123,126);}
var Lx=F(KF);
function APA(){var a=new Lx();ALe(a);return a;}
function ALe(a){}
function W0(a){return BP(BP(BP(YR(a),33,64),91,96),123,126);}
var Zr=F(Lx);
function APv(){var a=new Zr();AMR(a);return a;}
function AMR(a){}
function AJl(a){return Cr(W0(a),32);}
var ZN=F(V);
function APH(){var a=new ZN();AMk(a);return a;}
function AMk(a){}
function AFh(a){return Cr(Cr(Db(),32),9);}
var Yo=F(V);
function APT(){var a=new Yo();ANZ(a);return a;}
function ANZ(a){}
function AJh(a){return Cr(BP(Db(),0,31),127);}
var X9=F(V);
function APE(){var a=new X9();AD4(a);return a;}
function AD4(a){}
function AOc(a){return BP(BP(BP(Db(),48,57),97,102),65,70);}
var ABg=F(V);
function AQH(){var a=new ABg();ADJ(a);return a;}
function ADJ(a){}
function AJU(a){var b;b=new RL;b.u4=a;Bn(b);b.J=1;return b;}
var ACz=F(V);
function APg(){var a=new ACz();ALz(a);return a;}
function ALz(a){}
function ACN(a){var b;b=new LX;b.vc=a;Bn(b);b.J=1;return b;}
var AAP=F(V);
function AQ4(){var a=new AAP();ADS(a);return a;}
function ADS(a){}
function AHD(a){var b;b=new QI;b.uK=a;Bn(b);return b;}
var AAB=F(V);
function APS(){var a=new AAB();AJi(a);return a;}
function AJi(a){}
function ALN(a){var b;b=new QH;b.ut=a;Bn(b);return b;}
var ABy=F(V);
function AQk(){var a=new ABy();AE5(a);return a;}
function AE5(a){}
function AFd(a){var b;b=new VJ;b.vV=a;Bn(b);Hw(b.H,0,2048);b.J=1;return b;}
var XD=F(V);
function APQ(){var a=new XD();AEv(a);return a;}
function AEv(a){}
function AFD(a){var b;b=new NS;b.vp=a;Bn(b);b.J=1;return b;}
var Xj=F(V);
function AQl(){var a=new Xj();AIZ(a);return a;}
function AIZ(a){}
function AN7(a){var b;b=new M3;b.wk=a;Bn(b);b.J=1;return b;}
var AAU=F(V);
function APK(){var a=new AAU();AJB(a);return a;}
function AJB(a){}
function ACH(a){var b;b=new Pu;b.u6=a;Bn(b);return b;}
var AA3=F(V);
function ARa(){var a=new AA3();AHk(a);return a;}
function AHk(a){}
function AIx(a){var b;b=new LQ;b.tF=a;Bn(b);b.J=1;return b;}
var YK=F(V);
function APN(){var a=new YK();ADi(a);return a;}
function ADi(a){}
function AFL(a){var b;b=new LV;b.vw=a;Bn(b);b.J=1;return b;}
var ZR=F(V);
function AQq(){var a=new ZR();AEF(a);return a;}
function AEF(a){}
function AGJ(a){var b;b=new MP;b.vS=a;Bn(b);b.J=1;return b;}
var AB7=F(V);
function AQY(){var a=new AB7();AIC(a);return a;}
function AIC(a){}
function AIz(a){var b;b=new Oh;b.v9=a;Bn(b);b.J=1;return b;}
var AA2=F(V);
function AQV(){var a=new AA2();AJR(a);return a;}
function AJR(a){}
function ANn(a){var b;b=new Oq;b.uM=a;Bn(b);return b;}
var Y7=F(V);
function AQ9(){var a=new Y7();AEy(a);return a;}
function AEy(a){}
function AK6(a){var b;b=new SE;b.vB=a;Bn(b);return b;}
var YI=F(V);
function APJ(){var a=new YI();ALO(a);return a;}
function ALO(a){}
function AJP(a){var b;b=new Rh;b.tJ=a;Bn(b);b.J=1;return b;}
var ACu=F(V);
function AQN(){var a=new ACu();AHb(a);return a;}
function AHb(a){}
function ALY(a){var b;b=new L7;b.wt=a;Bn(b);b.J=1;return b;}
var IG=F(V);
function AQu(){var a=new IG();AFT(a);return a;}
function AFT(a){}
function ZO(a){return Cr(BP(BP(BP(Db(),97,122),65,90),48,57),95);}
var ABA=F(IG);
function APB(){var a=new ABA();AHo(a);return a;}
function AHo(a){}
function AJD(a){var b;b=Eg(ZO(a),1);b.J=1;return b;}
var Zw=F(J8);
function APd(){var a=new Zw();ANP(a);return a;}
function ANP(a){}
function ADO(a){var b;b=Eg(Zf(a),1);b.J=1;return b;}
var YD=F(Ja);
function AP1(){var a=new YD();AIm(a);return a;}
function AIm(a){}
function AGU(a){var b;b=Eg(ZT(a),1);b.J=1;return b;}
function Yc(){var a=this;V.call(a);a.o8=0;a.pA=0;}
function P(a,b){var c=new Yc();AN5(c,a,b);return c;}
function AN5(a,b,c){a.o8=b;a.pA=c;}
function AIM(a){return BP(Db(),a.o8,a.pA);}
var Yy=F(V);
function APF(){var a=new Yy();AOj(a);return a;}
function AOj(a){}
function ANW(a){return BP(BP(Db(),65279,65279),65520,65533);}
function Zm(){var a=this;V.call(a);a.k9=0;a.i7=0;a.nx=0;}
function BG(a,b){var c=new Zm();AE0(c,a,b);return c;}
function AQi(a,b,c){var d=new Zm();AN6(d,a,b,c);return d;}
function AE0(a,b,c){a.i7=c;a.k9=b;}
function AN6(a,b,c,d){a.nx=d;a.i7=c;a.k9=b;}
function AGp(a){var b;b=ARh(a.k9);if(a.nx)Hw(b.H,0,2048);b.J=a.i7;return b;}
function Zt(){var a=this;V.call(a);a.k8=0;a.jg=0;a.mu=0;}
function H_(a,b){var c=new Zt();AFM(c,a,b);return c;}
function AP8(a,b,c){var d=new Zt();ACK(d,a,b,c);return d;}
function AFM(a,b,c){a.jg=c;a.k8=b;}
function ACK(a,b,c,d){a.mu=d;a.jg=c;a.k8=b;}
function ACI(a){var b;b=new QB;AAn(b,a.k8);if(a.mu)Hw(b.H,0,2048);b.J=a.jg;return b;}
var Yi=F();
var XS=F();
function Y6(b){var c,d,e,f,g,h,i;c=AL9(Gg(b));d=I3(c);e=BF(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+I3(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Mg(c);h=h+1|0;}return e;}
function JQ(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Mu(){var a=this;C.call(a);a.n9=0;a.pW=0;a.om=null;}
function AGn(a,b,c){var d=new Mu();AMP(d,a,b,c);return d;}
function AMP(a,b,c,d){a.n9=b;a.pW=c;a.om=d;}
function AAY(){var a=this;C.call(a);a.m7=null;a.pd=0;}
function AL9(a){var b=new AAY();AFs(b,a);return b;}
function AFs(a,b){a.m7=b;}
var Y5=F();
function I3(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.m7.data;f=b.pd;b.pd=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bb(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Mg(b){var c,d;c=I3(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function XX(){C.call(this);this.Dg=null;}
function Mk(){C.call(this);this.pa=null;}
function AJK(a,b){var c,d,e,f;c=b.data;b=a.pa;d=Ej(c[0]);e=Fu(c[1]);ZE(b.e.h,d,e);Gf(Cg(b),ATf);FP(Cg(b));f=JF(Fq(),b.ev);b=new M;O(b);G(Ht(G(b,B(557)),f),B(232));$rt_globals.console.info($rt_ustr(N(b)));}
function PX(){C.call(this);this.py=null;}
function AGm(a,b){QE(a.py,b);}
function Up(){var a=this;C.call(a);a.uZ=null;a.uY=null;}
function VS(){var a=this;C.call(a);a.tT=null;a.tU=null;}
var AAQ=F(0);
function ACh(b){return !b?H(Bv,[B(120),B(130),B(558)]):H(Bv,[B(120),B(130),B(558),B(41)]);}
function Vd(){var a=this;T.call(a);a.mU=null;a.v1=null;}
function AF8(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b9^Dl(a.mU,c):0;}
function Vb(){var a=this;T.call(a);a.rQ=null;a.sp=null;a.vG=null;}
function AC$(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b9^Dl(a.rQ,c):0;return a.sp.k(b)&&!d?1:0;}
function Nk(){var a=this;T.call(a);a.hI=null;a.tP=null;}
function AIE(a,b){return a.ba^Dl(a.hI,b);}
function AGM(a){var b,c,d;b=new M;O(b);c=GS(a.hI,0);while(c>=0){HR(b,Gd(c));BB(b,124);c=GS(a.hI,c+1|0);}d=b.N;if(d>0)U5(b,d-1|0);return N(b);}
function Nq(){var a=this;T.call(a);a.pr=null;a.va=null;}
function ALM(a,b){return a.pr.k(b);}
function No(){var a=this;T.call(a);a.i_=0;a.np=null;a.jW=null;}
function AMp(a,b){return !(a.i_^Dl(a.jW.E,b))&&!(a.i_^a.jW.dr^a.np.k(b))?0:1;}
function Np(){var a=this;T.call(a);a.jf=0;a.r7=null;a.kI=null;}
function AI1(a,b){return !(a.jf^Dl(a.kI.E,b))&&!(a.jf^a.kI.dr^a.r7.k(b))?1:0;}
function Nt(){var a=this;T.call(a);a.sQ=0;a.sb=null;a.r2=null;a.ua=null;}
function AFH(a,b){return a.sQ^(!a.sb.k(b)&&!a.r2.k(b)?0:1);}
function Nu(){var a=this;T.call(a);a.px=0;a.pj=null;a.oF=null;a.wp=null;}
function ACB(a,b){return a.px^(!a.pj.k(b)&&!a.oF.k(b)?0:1)?0:1;}
function Nr(){var a=this;T.call(a);a.ot=null;a.ws=null;}
function AGQ(a,b){return CV(a.ot,b);}
function Ns(){var a=this;T.call(a);a.sk=null;a.uq=null;}
function AI4(a,b){return CV(a.sk,b)?0:1;}
function Nv(){var a=this;T.call(a);a.pO=null;a.pn=0;a.rs=null;}
function ANz(a,b){return !CV(a.pO,b)&&!(a.pn^Dl(a.rs.E,b))?0:1;}
function Nx(){var a=this;T.call(a);a.qw=null;a.qN=0;a.qd=null;}
function AE$(a,b){return !CV(a.qw,b)&&!(a.qN^Dl(a.qd.E,b))?1:0;}
function Nj(){var a=this;T.call(a);a.rp=0;a.r6=null;a.sC=null;a.tS=null;}
function APc(a,b){return !(a.rp^a.r6.k(b))&&!CV(a.sC,b)?0:1;}
function N7(){var a=this;T.call(a);a.sx=0;a.l$=null;a.mv=null;a.um=null;}
function AGT(a,b){return !(a.sx^a.l$.k(b))&&!CV(a.mv,b)?1:0;}
function Nh(){var a=this;T.call(a);a.n2=null;a.ur=null;}
function AE9(a,b){return CV(a.n2,b);}
function Ni(){var a=this;T.call(a);a.n7=null;a.wn=null;}
function AGA(a,b){return CV(a.n7,b)?0:1;}
function Nn(){var a=this;T.call(a);a.sK=null;a.qp=0;a.ty=null;}
function AH6(a,b){return CV(a.sK,b)&&a.qp^Dl(a.ty.E,b)?1:0;}
function Ng(){var a=this;T.call(a);a.q7=null;a.pz=0;a.qo=null;}
function ANb(a,b){return CV(a.q7,b)&&a.pz^Dl(a.qo.E,b)?0:1;}
function Nl(){var a=this;T.call(a);a.ru=0;a.mS=null;a.pu=null;a.t_=null;}
function AD2(a,b){return a.ru^a.mS.k(b)&&CV(a.pu,b)?1:0;}
function Nm(){var a=this;T.call(a);a.q0=0;a.l0=null;a.ro=null;a.uw=null;}
function AKW(a,b){return a.q0^a.l0.k(b)&&CV(a.ro,b)?0:1;}
var K4=F(0);
function Rf(){var a=this;C.call(a);a.uh=null;a.r8=null;a.h1=null;a.cn=null;a.hJ=0;a.jQ=0;}
function LT(a,b){var c,d,e;c=I(a.h1);if(b>=0&&b<=c){Wu(a.cn,null,(-1),(-1));d=a.cn;d.iJ=1;d.dL=b;c=d.g7;if(c<0)c=b;d.g7=c;b=a.r8.cb(b,a.h1,d);if(b==(-1))a.cn.c7=1;if(b>=0){d=a.cn;if(d.h2){e=d.dm.data;if(e[0]==(-1)){c=d.dL;e[0]=c;e[1]=c;}d.g7=Ir(d);return 1;}}a.cn.dL=(-1);return 0;}d=new By;Bj(d,Dd(b));J(d);}
function AB5(a){return NX(a.cn,0);}
function YE(a){return QM(a.cn,0);}
function Cb(){Cq.call(this);this.k4=null;}
var AUl=null;var AUm=null;var AUn=null;var AUo=null;var AUp=null;var AUq=null;var AUr=null;var AUs=null;var AUt=null;var AUu=null;var AUv=null;var AUw=null;var AUx=null;var AUy=null;var AUz=null;var AS4=null;function ABo(){ABo=Bo(Cb);ALI();}
function Dt(a,b,c){var d=new Cb();NW(d,a,b,c);return d;}
function AHi(a,b,c,d){var e=new Cb();XQ(e,a,b,c,d);return e;}
function NW(a,b,c,d){ABo();DA(a,b,c);a.k4=Si(d,null);}
function XQ(a,b,c,d,e){ABo();DA(a,b,c);a.k4=Si(d,e);}
function ALI(){var b;b=new Cb;Dm();NW(b,B(309),0,AS5);AUl=b;AUm=Dt(B(310),1,Cv(0,49,191));AUn=Dt(B(311),2,Bq(B(559)));AUo=Dt(B(313),3,Bq(B(560)));AUp=Dt(B(315),4,AS5);AUq=Dt(B(317),5,Bq(B(561)));AUr=Dt(B(318),6,Bq(B(329)));AUs=Dt(B(320),7,Bq(B(562)));AUt=Dt(B(322),8,Bq(B(563)));AUu=AHi(B(324),9,ASO,Cv(237,235,252));AUv=AHi(B(325),10,Bq(B(326)),Bq(B(564)));AUw=Dt(B(328),11,Bq(B(329)));AUx=Dt(B(330),12,Bq(B(331)));AUy=Dt(B(332),13,Bq(B(333)));b=Dt(B(334),14,Bq(B(335)));AUz=b;AS4=H(Cb,[AUl,AUm,AUn,AUo,AUp,AUq,
AUr,AUs,AUt,AUu,AUv,AUw,AUx,AUy,b]);}
function M$(){C.call(this);this.p$=null;}
function ALX(a,b){To(a.p$,b);}
var Mc=F(Gh);
function AGs(a,b,c,d){var e,f,g;e=0;f=d.w;a:{while(true){if(b>f){b=e;break a;}g=Fl(d,a.R);Dn(d,a.R,b);e=a.cI.c(b,c,d);if(e>=0)break;Dn(d,a.R,g);b=b+1|0;}}return b;}
function AOZ(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fl(e,a.R);Dn(e,a.R,c);f=a.cI.c(c,d,e);if(f>=0)break;Dn(e,a.R,g);c=c+(-1)|0;}}return c;}
function AEV(a){return null;}
var O1=F(Bm);
var V2=F(Bm);
function T$(){Fy.call(this);this.wf=0;}
function OR(){Fy.call(this);this.wb=0;}
var WK=F(Bm);
function T4(){var a=this;C.call(a);a.pT=null;a.rR=null;a.s6=0;a.jq=0;}
function JH(a,b){return B2(a.pT)<b?0:1;}
function NO(){var a=this;C.call(a);a.nk=null;a.nl=null;}
function Rq(){var a=this;C.call(a);a.uL=null;a.op=null;}
function Rp(){C.call(this);this.tG=null;}
function T8(){var a=this;C.call(a);a.dm=null;a.iT=null;a.kf=null;a.kn=null;a.nt=0;a.h2=0;a.cy=0;a.w=0;a.dL=0;a.h8=0;a.eP=0;a.c7=0;a.vP=0;a.g7=0;a.iJ=0;}
function BD(a,b,c){a.iT.data[b]=c;}
function Da(a,b){return a.iT.data[b];}
function Ir(a){return QM(a,0);}
function QM(a,b){QA(a,b);return a.dm.data[(b*2|0)+1|0];}
function Dn(a,b,c){a.dm.data[b*2|0]=c;}
function IW(a,b,c){a.dm.data[(b*2|0)+1|0]=c;}
function Fl(a,b){return a.dm.data[b*2|0];}
function HX(a,b){return a.dm.data[(b*2|0)+1|0];}
function AAJ(a){return NX(a,0);}
function NX(a,b){QA(a,b);return a.dm.data[b*2|0];}
function L5(a,b){return a.kf.data[b];}
function D0(a,b,c){a.kf.data[b]=c;}
function QA(a,b){var c;if(!a.h2){c=new DL;U(c);J(c);}if(b>=0&&b<a.nt)return;c=new By;Bj(c,Dd(b));J(c);}
function Wu(a,b,c,d){a.h2=0;a.iJ=2;G_(a.dm,(-1));G_(a.iT,(-1));if(b!==null)a.kn=b;if(c>=0){a.cy=c;a.w=d;}a.dL=a.cy;}
function YU(a){return a.iJ;}
function Xe(a){return a.h8;}
function VY(){C.call(this);this.ti=null;}
function AKI(a){Dw(a.ti);}
var YA=F();
var OK=F(0);
function V4(){var a=this;C.call(a);a.qy=null;a.qz=0;a.qA=null;}
function Li(a,b){var c,d,e,f,g,h,i,j,k;c=a.qy;d=a.qz;e=a.qA;if(b<=d){f=Cg(c);g=new Ui;g.m6=c;h=R(C,1);h.data[0]=e;CY(f,g,B(565),h);}else{i=Cg(c);g=new Uk;g.oX=c;j=R(C,2);k=j.data;k[0]=e;h=BF(1);h.data[0]=250;k[1]=h;CY(i,g,B(566),j);f=Cg(c);g=new Uh;g.p6=c;h=R(C,1);h.data[0]=e;CY(f,g,B(567),h);}}
function RL(){T.call(this);this.u4=null;}
function ANI(a,b){return Co(b)!=2?0:1;}
function LX(){T.call(this);this.vc=null;}
function ADM(a,b){return Co(b)!=1?0:1;}
function QI(){T.call(this);this.uK=null;}
function ADx(a,b){return PO(b);}
function QH(){T.call(this);this.ut=null;}
function AGo(a,b){return 0;}
function VJ(){T.call(this);this.vV=null;}
function AHR(a,b){return !Co(b)?0:1;}
function NS(){T.call(this);this.vp=null;}
function ANL(a,b){return Co(b)!=9?0:1;}
function M3(){T.call(this);this.wk=null;}
function AKl(a,b){return F_(b);}
function Pu(){T.call(this);this.u6=null;}
function ALT(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function LQ(){T.call(this);this.tF=null;}
function AOA(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F_(b);}return b;}
function LV(){T.call(this);this.vw=null;}
function AFu(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F_(b);}return b;}
function MP(){T.call(this);this.vS=null;}
function ANU(a,b){a:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Oh(){T.call(this);this.v9=null;}
function AJd(a,b){return IP(b);}
function Oq(){T.call(this);this.uM=null;}
function ALi(a,b){return Or(b);}
function SE(){T.call(this);this.vB=null;}
function ANA(a,b){return Co(b)!=3?0:1;}
function Rh(){T.call(this);this.tJ=null;}
function AOk(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=F_(b);}return b;}
function L7(){T.call(this);this.wt=null;}
function AFf(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=F_(b);}return b;}
function Lk(){T.call(this);this.kz=0;}
function ARh(a){var b=new Lk();AAn(b,a);return b;}
function AAn(a,b){Bn(a);a.kz=b;}
function AKn(a,b){return a.ba^(a.kz!=Co(b&65535)?0:1);}
var QB=F(Lk);
function AMM(a,b){return a.ba^(!(a.kz>>Co(b&65535)&1)?0:1);}
function OL(){C.call(this);this.tA=null;}
function AIR(a){var b,c;b=a.tA;c=b.nk;b=b.nl;c.Do(b.hF,b.jw,null);}
function UG(){C.call(this);this.mX=null;}
function AK$(a,b){var c,d,e,f;c=a.mX;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.op;c=Bx();b=Ct(b);e=new M;O(e);G(G(e,B(568)),b);Bu(c,N(e));b=Bx();f=d.length;c=new M;O(c);S(G(c,B(569)),f);Bu(b,N(c));}
function UK(){var a=this;C.call(a);a.rJ=null;a.rK=null;}
function AJ0(a,b){var c,d;c=a.rJ;d=a.rK;b.arrayBuffer().then(Bl(c,"f"),Bl(d,"f"));}
function Sm(){var a=this;C.call(a);a.lD=null;a.lE=null;}
function AGZ(a,b){var c;c=a.lD;Li(a.lE,IX(c,b.size));}
function Sp(){C.call(this);this.sL=null;}
function AC4(a,b){var c;c=a.sL;Bu(KR(),$rt_str(b.message));Li(c,0);}
function Ts(){C.call(this);this.uB=null;}
function AIN(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function Uk(){C.call(this);this.oX=null;}
function AKT(a,b){var c,d;c=a.oX;if(!c.hn){b=b.data;c.e.h=Z1(Ej(b[0]),Fu(b[1]));c.hm=1;d=JF(Fq(),c.ev);b=new M;O(b);G(Ht(G(b,B(570)),d),B(232));$rt_globals.console.info($rt_ustr(N(b)));}}
function Uh(){C.call(this);this.p6=null;}
function AIP(a,b){var c,d,e,f,g,h;c=b.data;d=a.p6;e=(Ej(c[2])).data[0];if(e!=1)Hk(d,b);else{d.hn=1;f=Ej(c[0]);g=Fu(c[1]);b=d.e;b.h=AAR(b.h,f,g,d.hm);U9(d,ABu(e));Gf(Cg(d),ATf);FP(Cg(d));h=JF(Fq(),d.ev);b=new M;O(b);G(Ht(G(b,B(571)),h),B(232));$rt_globals.console.info($rt_ustr(N(b)));Vz(d);Jk(d);}}
function Ui(){C.call(this);this.m6=null;}
function AKV(a,b){Hk(a.m6,b);}
var XK=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["ew",ARE(AI$),"co",ARD(AEh)],Qn,0,C,[],0,3,0,0,0,Mf,0,C,[],3,3,0,0,0,LJ,0,C,[],3,3,0,0,0,Vf,0,C,[Mf,LJ],0,3,0,0,0,X6,0,C,[],4,0,0,0,0,XT,0,C,[],4,3,0,0,0,C8,0,C,[],3,3,0,0,0,CH,0,C,[],3,3,0,0,0,Ig,0,C,[],3,3,0,0,0,Bv,"String",1,C,[C8,CH,Ig],0,3,0,Ez,["co",ARD(AEg),"ew",ARE(Bt),"i4",ARE(AGr)],Gi,0,C,[],0,3,0,0,0,Eu,0,Gi,[],0,3,0,0,0,GV,0,Eu,[],0,3,0,0,0,Y8,0,GV,[],0,3,0,0,0,DH,0,C,[C8],1,3,0,0,0,E3,0,DH,[CH],0,3,0,0,["i4",ARE(AIv)],F5,0,C,[C8,Ig],0,0,0,0,["he",ARE(IV),"co",ARD(N)],Hv,
0,C,[],3,3,0,0,0,M,0,F5,[Hv],0,3,0,0,["kO",ARH(AIq),"j2",ARG(AFB),"co",ARD(DE),"he",ARE(AIy),"ll",ARF(AIX)],Ef,0,GV,[],0,3,0,0,0,AAp,0,Ef,[],0,3,0,0,0,YZ,0,Ef,[],0,3,0,0,0,DO,0,Gi,[],0,3,0,0,0,Bm,0,DO,[],0,3,0,0,0,Sy,0,C,[],3,3,0,0,0,Dh,0,C,[],3,3,0,0,0,NQ,0,C,[],3,0,0,0,0,H2,0,C,[Sy,Dh,NQ],1,3,0,0,["gx",ARD(FB)],P_,0,H2,[],0,3,0,0,0,Xq,0,C,[],0,3,0,0,0,ABC,0,C,[],4,3,0,0,0,Ba,0,C,[],3,3,0,0,0,SL,0,C,[Ba],0,3,0,0,0,BC,0,C,[],3,3,0,0,0,ZG,0,C,[BC],1,3,0,0,0,Xu,0,C,[],3,3,0,0,0,ABc,0,C,[],3,3,0,0,0,AA9,0,C,[],
3,3,0,0,0,KX,0,C,[],0,3,0,0,0,X4,0,C,[BC],1,3,0,0,0,BU,0,C,[BC],3,3,0,0,0,SM,0,C,[BU],0,3,0,0,["be",ARE(ACC)],SK,0,C,[BU],0,3,0,0,["be",ARE(ANC)],AA5,0,C,[],4,3,0,0,0,YF,0,C,[],0,3,0,0,0,ACv,0,C,[],4,3,0,0,0,Ml,0,C,[BU],0,3,0,0,["be",ARE(AJ_)],UV,0,C,[BC],1,3,0,0,0,XF,0,C,[],0,3,0,0,0]);
$rt_metadata([Kz,0,C,[],4,3,0,0,0,I5,0,C,[BC],3,3,0,0,0,YT,0,C,[I5],1,3,0,0,["Es",ARE(AOH),"DQ",ARD(AED)],Zi,0,C,[BC],1,3,0,0,0,FA,0,C,[],3,3,0,0,0,RJ,0,C,[FA],0,3,0,0,0,CZ,0,C,[CH],0,3,0,0,0,LD,0,C,[BC],3,3,0,0,0,Rm,0,C,[LD],3,3,0,0,0,D7,0,C,[BC],3,3,0,0,0,ABB,0,C,[Rm,D7],3,3,0,0,0,Gm,0,Bm,[],0,3,0,0,0,MQ,0,C,[BU],0,3,0,0,["be",ARE(ALa)],Z9,0,C,[],4,3,0,0,0,Zg,0,C,[],4,3,0,0,0,By,0,Bm,[],0,3,0,0,0,H8,0,Bm,[],0,3,0,0,0,Of,0,C,[D7],3,3,0,0,0,P1,0,C,[D7],3,3,0,0,0,PS,0,C,[D7],3,3,0,0,0,Ss,0,C,[D7],3,3,0,0,0,V1,
0,C,[D7],3,3,0,0,0,TI,0,C,[D7,Of,P1,PS,Ss,V1],3,3,0,0,0,Nz,0,C,[],3,3,0,0,0,Xt,0,C,[BC,TI,Nz,I5],1,3,0,0,["Cw",ARF(AIT),"Ex",ARF(AJa),"wK",ARE(ADD),"A8",ARG(AKe),"zl",ARE(ANR),"zr",ARD(AEG),"x0",ARG(AC0)],BA,0,Bm,[],0,3,0,0,0,WT,0,Bm,[],0,3,0,0,0,GR,0,By,[],0,3,0,0,0,Ys,0,C,[],0,3,0,0,0,Ny,0,C,[],3,3,0,0,0,Rx,0,C,[Ny],0,3,0,0,0,Ci,0,C,[],3,3,0,0,0,QC,0,C,[Ci],0,3,0,0,0,Bi,0,C,[],3,3,0,0,0,ZB,0,C,[Bi],0,3,0,0,0,Zd,0,C,[BC],1,3,0,0,0,PW,0,C,[BC],3,3,0,0,0,UB,0,C,[PW],0,3,0,0,["A_",ARE(AHB)],Ux,0,C,[Bi],0,3,0,
0,0,O0,0,C,[BC],3,3,0,0,0,Uy,0,C,[O0],0,3,0,0,["s2",ARF(AFS)],ABI,0,C,[BC],1,3,0,0,0,Ch,0,C,[BC],3,3,0,0,0,Uv,0,C,[Ch],0,3,0,0,["b8",ARE(ALj)],Ke,0,C,[],3,3,0,0,0,Eo,0,C,[Ke],1,3,0,0,0,Eb,0,C,[],3,3,0,0,0,Wp,0,C,[Ke],3,3,0,0,0,Me,0,C,[Wp],3,3,0,0,0,N2,0,Eo,[Eb,C8,Me],0,3,0,0,0]);
$rt_metadata([Uw,0,C,[BU],0,3,0,0,["be",ARE(AMw)],Op,0,C,[],0,3,0,0,0,Ks,0,C,[],1,3,0,0,0,ABb,0,Ks,[],0,3,0,0,0,Cp,0,C,[Dh],1,3,0,0,["dH",ARE(AOn)],It,0,C,[FA],0,3,0,0,["ls",ARF(IR)],Yx,0,C,[],0,3,0,0,0,Vk,0,C,[Ch],0,3,0,0,["b8",ARE(AKK)],Vl,0,C,[Ch],0,3,0,0,["b8",ARE(AKZ)],Vm,0,C,[Ch],0,3,0,0,["b8",ARE(AJt)],Vn,0,C,[Ch],0,3,0,0,["b8",ARE(AIU)],Vo,0,C,[Ch],0,3,0,0,["b8",ARE(AJe)],Vp,0,C,[Ch],0,3,0,0,["b8",ARE(ALy)],Vq,0,C,[Ch],0,3,0,0,["b8",ARE(AHd)],Vr,0,C,[Ch],0,3,0,0,["b8",ARE(AOP)],Vs,0,C,[Ch],0,3,0,0,["b8",
ARE(AGx)],Vt,0,C,[Ch],0,3,0,0,["b8",ARE(AMD)],WD,0,C,[Ch],0,3,0,0,["b8",ARE(AOo)],WE,0,C,[Ch],0,3,0,0,["b8",ARE(AI7)],WF,0,C,[Ch],0,3,0,0,["b8",ARE(AJw)],WG,0,C,[Ch],0,3,0,0,["b8",ARE(ALc)],Ta,0,C,[],3,3,0,0,0,Tm,0,C,[Ta],0,3,0,0,0,Tl,0,C,[Ch],0,3,0,0,["b8",ARE(AIh)],LE,0,C,[],0,3,0,0,0,ABV,0,C,[],0,3,0,0,0,Ia,0,C,[],3,3,0,0,0,Cj,0,C,[Ia],3,3,0,0,0,Cs,0,C,[],3,3,0,0,["b4",ARE(AIl),"cz",ARG(ALx),"c8",ARF(AEz),"cP",ARF(ADn)],EB,0,C,[],3,3,0,0,0,EN,0,C,[Ia],3,3,0,0,0,E$,0,C,[],3,3,0,0,0,HF,0,C,[],3,3,0,0,0,FS,
0,C,[HF],3,3,0,0,0,O9,0,C,[Dh],0,3,0,0,0,Bg,0,C,[],0,3,0,0,["co",ARD(ACD)],Vw,0,C,[],0,3,0,0,0,ABa,0,C,[],0,3,0,0,0,XR,0,C,[],3,3,0,0,0,OZ,0,C,[],0,3,0,0,0,KN,0,C,[],0,3,0,0,0,DX,0,KN,[],0,3,0,0,0,U8,0,DX,[],0,3,0,0,0,En,0,DX,[],0,3,0,0,0,PE,0,DX,[],0,3,0,0,0,AAV,0,En,[],0,3,0,0,0,AAs,0,En,[],0,3,0,0,0,X5,0,En,[],0,3,0,0,0,QK,0,C,[BC],3,3,0,0,0,ACt,0,C,[QK],3,3,0,0,0]);
$rt_metadata([OW,0,C,[Dh],0,3,0,0,0,OY,0,C,[],0,3,0,0,0,Cq,0,C,[CH,C8],1,3,0,0,0,Gu,0,Cq,[],12,3,0,XP,0,Ll,0,C,[],3,3,0,0,0,R$,0,C,[Ll],3,3,0,0,0,Ty,0,C,[],3,3,0,0,0,Gb,0,C,[R$,Ty],1,3,0,0,0,IK,0,Gb,[],0,3,0,0,0,YX,0,IK,[],0,3,0,0,0,FX,0,Gb,[],1,3,0,0,0,Ky,0,FX,[],0,3,0,0,["jv",ARG(AH9)],DJ,0,Cq,[],12,3,0,ANN,0,IA,0,C,[CH],1,3,0,0,0,Lq,0,IA,[],0,3,0,YO,0,JB,0,C,[],32,0,0,Xs,0,N8,0,C,[],0,3,0,0,0,Gy,0,Cq,[],12,0,0,Z0,0,F3,0,Cq,[],12,0,0,Z2,0,UC,0,DO,[],0,3,0,0,0,AA4,0,BA,[],0,3,0,0,0,Lp,0,C,[BC],3,3,0,0,0,Wm,
0,C,[Lp],0,3,0,0,["be",ARE(AL_)],Wo,0,C,[Lp],0,3,0,0,["be",ARE(AEa)],GG,0,C,[],1,3,0,0,0,Q4,0,C,[],3,3,0,0,0,Kk,0,GG,[CH,Hv,Ig,Q4],1,3,0,0,0,I7,0,GG,[CH],1,3,0,0,0,Hj,0,C,[],0,3,0,GQ,0,Mj,0,Cp,[],0,3,0,0,["bK",ARD(AI3),"cd",ARF(AHE)],ACf,0,C,[],0,3,0,0,0,Zy,0,C,[BC],1,3,0,0,0,Jg,0,Kk,[],1,0,0,0,0,Zh,0,Jg,[],0,0,0,0,0,J6,0,C,[],1,3,0,0,0,KU,0,C,[],0,3,0,0,0,XC,0,C,[],0,3,0,0,0,Kx,0,C,[BC],3,3,0,0,0,Ms,0,C,[Kx],0,3,0,0,["be",ARE(AGi)],Mr,0,C,[Kx],0,3,0,0,["be",ARE(AKd)],Mq,0,C,[BU],0,3,0,0,["be",ARE(AKU)],Mp,
0,C,[BU],0,3,0,0,["be",ARE(AEN)],R1,0,C,[Ci],0,3,0,0,["ci",ARE(AKt)],R0,0,C,[Ci],0,3,0,0,["ci",ARE(ADN)],RZ,0,C,[Ci],0,3,0,0,["ci",ARE(AHm)],RY,0,C,[Ci],0,3,0,0,["ci",ARE(AHg)],RX,0,C,[Ci],0,3,0,0,["ci",ARE(AHV)],RW,0,C,[Ci],0,3,0,0,["ci",ARE(ADT)],RV,0,C,[Ci],0,3,0,0,["ci",ARE(AFw)],RU,0,C,[Ci],0,3,0,0,["ci",ARE(AKJ)]]);
$rt_metadata([RT,0,C,[Ci],0,3,0,0,["ci",ARE(AN8)],RS,0,C,[Ci],0,3,0,0,["ci",ARE(AO0)],PD,0,C,[Ci],0,3,0,0,["ci",ARE(AIL)],PB,0,C,[Ci],0,3,0,0,["ci",ARE(ACO)],PC,0,C,[Ci],0,3,0,0,["ci",ARE(AGe)],Pz,0,C,[Ci],0,3,0,0,["ci",ARE(AIY)],PA,0,C,[Ci],0,3,0,0,["ci",ARE(AMs)],GP,0,C,[],0,3,0,0,0,NU,0,GP,[],0,3,0,0,0,ABk,0,C,[],0,3,0,0,0,LA,0,GP,[],0,3,0,0,0,Tc,0,C,[BC],3,3,0,0,0,MK,0,C,[Tc],0,3,0,0,["EZ",ARE(AIF)],TT,0,C,[Ba],0,3,0,0,["l",ARE(U$)],VM,0,I7,[],0,0,0,0,0,AAh,0,C,[BC],1,3,0,0,0,Jy,0,C,[],4,3,0,AHT,0,U1,0,
C,[],3,3,0,0,0,RD,0,C,[U1],0,3,0,0,["co",ARD(AFg)],Tr,0,C,[],3,3,0,0,0,Kh,"JsFileHandle",5,C,[Tr],0,3,0,0,["co",ARD(AIe)],J1,0,J6,[],1,3,0,0,0,Om,0,J1,[],0,3,0,0,0,HV,0,DO,[],0,3,0,0,0,JL,0,Cp,[],0,3,0,0,["dH",ARE(AEY),"bK",ARD(AHA),"oo",ARD(AK8),"cd",ARF(AJN),"rb",ARE(ZU)],Xw,0,Cp,[],0,3,0,0,["dH",ARE(AC_),"bK",ARD(AF6),"cd",ARF(AL$)],DR,0,Cp,[],1,3,0,0,0,DS,0,C,[],3,3,0,0,0,U4,0,DR,[Cs,DS],0,3,0,0,["fa",ARF(ANx),"cd",ARF(AFC),"bK",ARD(AGj),"b4",ARE(ALu),"c8",ARF(AHe),"cP",ARF(AEe),"cz",ARG(AKM)],We,0,DR,[Cs],
0,3,0,0,["c8",ARF(AEz),"cP",ARF(ADn),"cd",ARF(AET),"bK",ARD(AK5),"b4",ARE(AMe),"cz",ARG(AH$)],WS,0,DR,[Cs],0,3,0,0,["b4",ARE(AIl),"cz",ARG(ALx),"c8",ARF(AEz),"cP",ARF(ADn),"cd",ARF(ACY),"bK",ARD(ALD),"dH",ARE(AFe)],Ob,0,Cp,[],0,3,0,0,["bK",ARD(ADq),"cd",ARF(ANh)],C3,0,Cp,[],0,3,0,0,["bK",ARD(Q3),"cd",ARF(Ry)],PK,"SelectFileTest",6,C3,[],0,3,0,0,0,AB9,"WorkerTest",7,C3,[],0,3,0,0,0,VI,"RenderTexture",6,C3,[],0,3,0,0,["dH",ARE(AIw),"bK",ARD(AC5),"cd",ARF(AK3)],Q5,"ScissorDemo",6,C3,[],0,3,0,0,["bK",ARD(AOB),"cd",
ARF(AEJ)],NM,0,Cp,[],0,3,0,0,["bK",ARD(AOE),"cd",ARF(AGK),"dH",ARE(AFk)],H0,"ClipboardTest",6,C3,[Cs],0,3,0,0,["b4",ARE(AIl),"c8",ARF(AEz),"cP",ARF(ADn),"cz",ARG(AL3)],O5,0,Cp,[],0,3,0,0,["bK",ARD(AOw),"cd",ARF(AJo)],Vh,0,DR,[DS],0,3,0,0,["fa",ARF(AHH),"bK",ARD(AOW),"cd",ARF(ALl),"dH",ARE(AIs)],P4,0,JL,[],0,3,0,0,["oo",ARD(AHM),"rb",ARE(AEP)],Iq,0,C,[],3,3,0,0,0,Lu,0,C,[Iq,C8],0,3,0,0,0,IN,0,Lu,[],0,0,0,0,0,ABS,0,C,[],0,3,0,0,0,XO,0,C,[],3,3,0,0,0,ACp,0,C,[],0,3,0,0,0,TJ,0,C,[Cs],0,0,0,0,["b4",ARE(ALF),"cz",
ARG(AO6),"c8",ARF(AOO),"cP",ARF(AKb)],Hq,0,C,[],3,3,0,0,["tq",ARD(AFa),"rh",ARD(APb)]]);
$rt_metadata([Y1,0,C,[Hq,Cs],0,3,0,0,["rh",ARD(AF0),"tq",ARD(AEK),"cP",ARF(ALn),"c8",ARF(ANv),"cz",ARG(AG9),"b4",ARE(AFx),"gz",ARE(AKo)],QQ,0,C,[Cj],0,3,0,0,["by",ARE(AJz)],QU,0,C,[Cj],0,3,0,0,["by",ARE(AG8)],Jl,0,C,[Cj],0,3,0,0,["by",ARE(AMg)],QT,0,C,[Ba],0,3,0,0,["l",ARE(ADE)],QS,0,C,[Cj],0,3,0,0,["by",ARE(AO8)],QR,0,C,[E$],0,3,0,0,["hb",ARF(AKR)],QX,0,C,[FS],0,3,0,0,["ga",ARD(AOG)],QW,0,C,[EB],0,3,0,0,["ee",ARG(AIQ)],QV,0,C,[EN],0,3,0,0,["by",ARE(ALR)],B3,0,C,[],0,3,0,0,["ew",ARE(AOJ)],Cx,0,C,[],3,3,0,Dm,
0,H4,0,C,[],0,3,0,0,0,ABl,0,H4,[],0,3,0,0,0,Zj,0,C,[],0,3,0,0,0,SI,0,C,[Cs],0,0,0,0,["b4",ARE(ALd),"cz",ARG(AMH),"c8",ARF(AJf),"cP",ARF(AFG)],Qt,0,C,[Cj],0,3,0,0,["by",ARE(AK9)],Qs,0,C,[Cj],0,3,0,0,["by",ARE(ANF)],Qw,0,C,[E$],0,3,0,0,["hb",ARF(AN3)],Qu,0,C,[Bi],0,3,0,0,["r",ARD(AN2)],Qr,0,C,[EN],0,3,0,0,["by",ARE(AJE)],Qq,0,C,[EB],0,3,0,0,["ee",ARG(AHu)],Ie,0,B3,[],0,3,0,0,0,TR,0,C,[],0,3,0,0,0,Yb,0,C,[],0,3,0,0,0,Xr,0,C,[DS,Hq],0,3,0,0,["tq",ARD(AFa),"rh",ARD(APb),"fa",ARF(AEI),"gz",ARE(ADe)],R3,0,C,[Cj],0,
3,0,0,["by",ARE(ALC)],R6,0,C,[EN],0,3,0,0,["by",ARE(ACS)],AB6,0,C,[],0,3,0,0,["ew",ARE(AO5)],Kb,0,C,[],0,3,0,0,0,R4,0,C,[Bi],0,3,0,0,["r",ARD(AHc)],R2,0,C,[Bi],0,3,0,0,["r",ARD(AMX)],Dx,0,C,[],0,3,0,0,0,NC,0,C,[DS],0,3,0,0,["fa",ARF(AG7)],ZM,0,C,[DS,Hq],0,3,0,0,["tq",ARD(AFa),"rh",ARD(APb),"fa",ARF(AL6),"gz",ARE(AEd)],ND,0,C,[Cj],0,3,0,0,["by",ARE(ANd)],NE,0,C,[EN],0,3,0,0,["by",ARE(AJV)],U7,0,C,[],3,3,0,0,0,G8,0,C,[U7],3,3,0,0,0,EA,0,C,[G8],1,3,0,0,0,L4,0,C,[G8],3,3,0,0,0,FR,0,EA,[L4],1,3,0,0,0,HS,0,C,[],3,
3,0,0,0,MW,0,FR,[Eb,C8,HS],0,3,0,0,["ql",ARE(Bs),"mT",ARD(AKv),"sN",ARE(Ec)],ABU,0,C,[],0,3,0,0,0,S1,0,C,[DS],0,3,0,0,["fa",ARF(AJ6)],S2,0,C,[Cj],0,3,0,0,["by",ARE(ACX)],Mw,0,C,[],3,3,0,0,0,ABh,0,C,[Mw],0,3,0,0,0,ZJ,0,C,[Dh],0,3,0,0,0]);
$rt_metadata([AA8,0,C,[],3,3,0,0,0,Vg,0,C,[Cs],0,0,0,0,["cz",ARG(ALx),"c8",ARF(AJW),"cP",ARF(ALp),"b4",ARE(AFY)],RC,0,C,[EB],0,3,0,0,["ee",ARG(AFj)],Tp,0,C,[],3,3,0,0,0,ZI,0,C,[],0,3,0,0,0,O2,0,C,[Cj],0,3,0,0,["by",ARE(AL7)],P8,0,C,[Ba],0,3,0,0,["l",ARE(ADl)],P7,0,C,[Ba],0,3,0,0,["l",ARE(AOK)],P6,0,C,[Ba],0,3,0,0,["l",ARE(AFE)],P5,0,C,[Ba],0,3,0,0,["l",ARE(AKh)],P3,0,C,[Ba],0,3,0,0,["l",ARE(AJv)],P2,0,C,[Ba],0,3,0,0,["l",ARE(ALm)],SH,0,C,[Cs],0,0,0,0,["cz",ARG(ALx),"cP",ARF(ADn),"b4",ARE(ANf),"c8",ARF(AND)],AAj,
0,C,[],0,3,0,0,0,S$,0,C,[Cs],0,0,0,0,["cz",ARG(ALx),"c8",ARF(ADW),"cP",ARF(AEE),"b4",ARE(ADw)],MZ,0,C,[EB],0,3,0,0,["ee",ARG(ADp)],Re,0,C,[Cj],0,3,0,0,["by",ARE(ANj)],Rd,0,C,[E$],0,3,0,0,["hb",ARF(AFZ)],Rb,0,C,[E$],0,3,0,0,["hb",ARF(AMI)],Ra,0,C,[FS],0,3,0,0,["ga",ARD(AKL)],Rc,0,C,[FS],0,3,0,0,["ga",ARD(AEt)],QL,0,C,[Cj],0,3,0,0,["by",ARE(AF5)],Kj,0,C,[],0,3,0,0,0,Qv,0,C,[Cs,DS],0,3,0,0,["b4",ARE(AEx),"cz",ARG(AIc),"c8",ARF(AGq),"cP",ARF(AOu),"fa",ARF(ANX)],Pp,0,C,[Cj],0,3,0,0,["by",ARE(AGz)],Pq,0,C,[EN],0,
3,0,0,["by",ARE(ACZ)],Pr,0,C,[EB],0,3,0,0,["ee",ARG(ALK)],KQ,0,C,[],0,3,0,0,0,NK,0,C,[BC],3,3,0,0,0,N5,0,C,[NK],0,3,0,0,["s2",ARF(AGF)],NL,0,C,[BC],3,3,0,0,0,N3,0,C,[NL],0,3,0,0,["s2",ARF(AHL)],X7,0,C,[],0,3,0,0,0,Xl,0,C,[BC],3,3,0,0,0,LL,0,C,[Bi],0,3,0,0,["r",ARD(AIS)],LM,0,C,[Bi],0,3,0,0,["r",ARD(AHr)],UN,0,C,[],0,3,0,0,0,W2,0,C,[],0,3,0,0,0,Mx,0,C,[],0,3,0,0,0,EG,0,C,[Dh],0,0,0,0,0,TG,0,C,[Ba],0,3,0,0,0,TF,0,C,[Ba],0,3,0,0,["l",ARE(AMf)],TB,0,C,[Ba],0,3,0,0,["l",ARE(AKf)],TA,0,C,[Bi],0,3,0,0,["r",ARD(AMc)],TD,
0,C,[Bi],0,3,0,0,["r",ARD(AHw)],TC,0,C,[Bi],0,3,0,0,["r",ARD(AJC)],T5,0,C,[Bi],0,3,0,0,["r",ARD(ALE)],Fc,0,Cq,[],12,3,0,AC8,0,IM,0,C,[Dh],0,3,0,0,["gx",ARD(AAy)],Q8,0,C,[Cj],0,3,0,0,["by",ARE(AO9)]]);
$rt_metadata([Q9,0,C,[Cj],0,3,0,0,["by",ARE(AC3)],Sx,0,C,[],0,3,0,0,0,WC,0,C,[],3,3,0,0,0,ER,0,C,[],0,3,0,0,0,G0,0,C,[],4,3,0,0,0,ACx,0,C,[],0,3,0,0,0,Hz,0,C,[],3,3,0,0,0,VW,0,C,[Hz],0,3,0,0,["m4",ARG(ALZ)],VX,0,C,[Hz],0,3,0,0,0,JW,0,C,[],0,3,0,0,0,UJ,0,C,[Bi],0,3,0,0,0,ABi,0,C,[],0,0,0,0,0,WQ,0,C,[Ba],0,3,0,0,["l",ARE(ALq)],MU,0,C,[Tp],0,3,0,0,0,Dq,0,C,[],3,3,0,EE,0,ZQ,0,C,[],0,3,0,0,0,OB,0,C,[Ba],0,3,0,0,["l",ARE(AH2)],UO,0,C,[Cs],0,0,0,0,["b4",ARE(AC2),"cz",ARG(AL1),"c8",ARF(AMW),"cP",ARF(AHU)],Qg,0,C,[Cs],
0,0,0,0,["cz",ARG(ALx),"c8",ARF(AEz),"cP",ARF(ADn),"b4",ARE(AC6)],Yh,0,C,[],0,3,0,0,0,Jq,0,C,[],0,3,0,0,0,EJ,0,C,[],0,3,0,0,0,Lr,0,EJ,[],0,3,0,0,0,LP,0,EJ,[],0,3,0,0,0,O6,0,EJ,[],0,3,0,0,0,H3,0,C,[],3,3,0,0,0,Qa,0,C,[],3,3,0,0,0,F$,0,C,[CH],0,3,0,0,0,IE,0,C,[],0,3,0,0,0,JU,0,FX,[],0,3,0,0,["jv",ARG(AGd)],ABZ,0,C,[],0,3,0,0,0,Wr,0,C,[],0,3,0,0,0,YY,0,C,[BC],4,3,0,0,0,ACl,0,C,[],0,3,0,0,0,Zl,0,C,[],0,3,0,0,0,ABL,0,C,[],3,3,0,0,0,CO,0,C,[BC],1,3,0,0,0,AAb,0,CO,[],1,3,0,0,0,AAS,0,CO,[],1,3,0,0,0,X_,0,CO,[],1,3,
0,0,0,Yu,0,CO,[],1,3,0,0,0,ABj,0,CO,[],1,3,0,0,0,Zv,0,Eo,[Eb,C8],0,3,0,0,0,Cw,0,C,[],0,3,0,0,0,ML,0,C,[Bi],0,3,0,0,["r",ARD(AOt)],Td,0,C,[Bi],0,3,0,0,["r",ARD(AI_)],B4,0,C,[],0,3,0,0,0,Id,0,C,[],0,3,0,0,0,JA,0,C,[],0,3,0,0,0,AB3,0,C,[CH],0,3,0,0,["ew",ARE(AMJ),"i4",ARE(AEr)]]);
$rt_metadata([Wf,0,C,[FA],0,3,0,0,["ls",ARF(AGY)],Wh,0,C,[FA],0,3,0,0,["ls",ARF(AIB)],EK,0,C,[],0,3,0,0,0,GL,0,FR,[HS],1,0,0,0,["sN",ARE(AJp)],Ww,0,GL,[HS],0,0,0,0,["mT",ARD(AGa),"ql",ARE(AOi)],Xd,0,C,[],0,3,0,0,["co",ARD(AG4)],NT,0,C,[G8],3,3,0,0,0,FZ,0,EA,[NT],1,3,0,0,0,Jt,0,FZ,[],1,0,0,0,0,Uu,0,Jt,[],0,0,0,0,0,KE,0,Eo,[],1,0,0,0,0,Us,0,KE,[],0,0,0,0,0,Ut,0,GL,[],0,0,0,0,0,Fp,0,C,[],3,3,0,0,0,Uq,0,C,[Fp],0,0,0,0,0,Ok,0,C,[Fp],3,3,0,0,0,Ur,0,C,[Ok],0,0,0,0,0,WP,0,C,[FA],0,3,0,0,0,KC,0,C,[],0,3,0,0,0,MD,0,C,
[Fp],0,0,0,0,0,YM,0,C,[],4,3,0,0,0,UM,0,C,[Cs],0,0,0,0,["cz",ARG(ALx),"c8",ARF(AEz),"cP",ARF(ADn),"b4",ARE(AMo)],YV,0,C,[BC],1,3,0,0,0,JP,0,C,[Iq,Eb],0,0,0,0,0,HJ,0,JP,[],0,0,0,0,0,TW,0,C,[Ba],0,3,0,0,["l",ARE(AHx)],UT,0,C,[HF],0,3,0,0,["ga",ARD(AOy)],Cd,0,Cq,[],12,3,0,X8,0,IH,0,C,[],0,3,0,0,0,WL,0,C,[],0,3,0,0,0,KK,0,C,[],3,3,0,0,0,P9,0,C,[KK],0,3,0,0,["pD",ARE(AJO)],XN,0,C,[],0,3,0,0,0,W1,0,C,[],0,3,0,0,0,Mo,0,C,[Dh],0,3,0,0,0,Fy,0,HV,[],0,3,0,0,0,VV,0,Eu,[],0,3,0,0,0,Pe,0,C,[Ba],0,3,0,0,["l",ARE(AKH)],S7,
0,C,[Bi],0,3,0,0,["r",ARD(ANa)],Xi,0,C,[],0,3,0,0,0,K2,0,Bm,[],0,3,0,0,0,Lh,0,DH,[CH],0,3,0,0,0,Fj,0,C,[],0,0,0,0,0,Jj,0,C,[],4,3,0,0,0,Uo,0,C,[],0,3,0,0,0,La,0,C,[],1,3,0,0,0,MG,0,C,[Ba],0,3,0,0,["l",ARE(AK0)],UD,0,C,[Ba],0,3,0,0,["l",ARE(AOM)],Y_,0,CO,[],1,3,0,0,0,Qd,0,C,[Bi],0,3,0,0,["r",ARD(AHq)]]);
$rt_metadata([S6,0,C,[],0,3,0,0,0,DL,0,Bm,[],0,3,0,0,0,AAr,0,Eu,[],0,3,0,0,0,Po,0,C,[Ba],0,3,0,0,["l",ARE(ANQ)],ABw,0,C,[CH],0,3,0,0,["ew",ARE(Xg),"i4",ARE(ALh)],MT,0,C,[Ba],0,3,0,0,["l",ARE(ADo)],MR,0,C,[Ba],0,3,0,0,["l",ARE(AFm)],TU,0,C,[Ba],0,3,0,0,0,TS,0,C,[Ba],0,3,0,0,["l",ARE(AEj)],Sz,0,C,[Ba],0,3,0,0,["l",ARE(AN0)],JE,0,La,[],1,3,0,0,0,So,0,JE,[],0,3,0,0,0,OU,0,C,[Ba],0,3,0,0,["l",ARE(AEu)],Ub,0,C,[Bi],0,3,0,0,["r",ARD(AJ8)],Py,0,C,[BU],0,3,0,0,["be",ARE(ACM)],Tx,0,C,[BU],0,3,0,0,["be",ARE(AOl)],ZC,0,
C,[Ci],0,3,0,0,0,Q7,0,C,[Ba],0,3,0,0,["l",ARE(ADF)],Q6,0,C,[Ba],0,3,0,0,["l",ARE(AEk)],Qp,0,C,[Ba],0,3,0,0,["l",ARE(AGL)],RQ,0,C,[Bi],0,3,0,0,["r",ARD(AIO)],Jd,0,DH,[CH],0,3,0,0,0,KH,0,C,[],4,3,0,0,0,Pm,0,C,[Bi],0,3,0,0,["r",ARD(AKF)],LZ,0,C,[BU],0,3,0,0,["be",ARE(APa)],N6,0,C,[Hz],0,3,0,0,["m4",ARG(ADj)],SQ,0,C,[],0,3,0,0,0,Ev,0,C,[Dh],0,3,0,0,["gx",ARD(AKk),"fP",ARD(ANS),"il",ARG(OS),"hK",ARE(XZ),"nn",ARE(AF3),"m_",ARE(AMO),"cz",ARG(ANm),"qi",ARF(AME),"cP",ARF(ANJ),"b4",ARE(AJI),"ee",ARG(AFV)],Kd,0,Ev,[],
0,3,0,0,0,UR,0,Kd,[],0,3,0,0,["fP",ARD(ZP),"m_",ARE(AHG),"hK",ARE(Yr),"nn",ARE(AIj)],Ot,0,C,[Ba],0,3,0,0,0,Pb,0,Ev,[],0,3,0,0,["il",ARG(AFc),"hK",ARE(AMl),"cz",ARG(AHa),"qi",ARF(ANp),"cP",ARF(AGN),"b4",ARE(AH4),"ee",ARG(AMy),"fP",ARD(AJ5)],Sj,0,Ev,[],0,3,0,0,0,SW,0,C,[Ba],0,3,0,0,["l",ARE(AJg)],SX,0,C,[Ba],0,3,0,0,["l",ARE(AHv)],QP,0,DH,[CH],0,3,0,0,0,Sw,0,C,[Bi],0,3,0,0,["r",ARD(ALr)],E4,0,Bm,[],0,3,0,0,0,MJ,0,C,[],0,3,0,0,0,ABz,0,C,[],0,3,0,0,0,RG,0,C,[],0,0,0,0,0,Sk,0,C,[Ba],0,3,0,0,0,Wc,0,C,[BU],0,3,0,0,
["be",ARE(AMr)],Wb,0,C,[BU],0,3,0,0,["be",ARE(AFt)],VE,0,C,[BU],0,3,0,0,["be",ARE(AGR)],VD,0,C,[BU],0,3,0,0,["be",ARE(AHK)],T_,0,C,[KK],0,3,0,0,["pD",ARE(I8)],Xk,0,C,[],1,3,0,0,0,VK,0,C,[],3,3,0,0,0,V7,0,C,[Ch],0,3,0,0,["b8",ARE(AGI)]]);
$rt_metadata([XE,0,C,[],0,3,0,0,0,In,0,E4,[],0,3,0,0,0,Hu,0,Bm,[],0,3,0,0,0,K0,0,Bm,[],0,3,0,0,0,Yl,0,C,[Ba],0,3,0,0,0,Ug,0,C,[Bi],0,3,0,0,["r",ARD(ALL)],VO,0,C,[Ba],0,3,0,0,["l",ARE(AMv)],W3,0,C,[],0,3,0,0,0,GH,0,C,[],0,3,0,0,0,AAM,0,FZ,[],0,0,0,0,0,N$,0,EA,[],0,0,0,0,0,Vu,0,By,[],0,3,0,0,0,Pl,0,C,[Ll],3,3,0,0,0,ME,0,C,[Pl],3,3,0,0,0,K5,0,C,[ME],1,3,0,0,0,YL,0,K5,[],0,3,0,0,0,Qk,0,C,[Bi],0,3,0,0,["r",ARD(AEn)],Qj,0,C,[Bi],0,3,0,0,["r",ARD(ACT)],Qi,0,C,[Bi],0,3,0,0,["r",ARD(AIJ)],Qh,0,C,[Bi],0,3,0,0,["r",ARD(AM$)],Ov,
0,C,[Bi],0,3,0,0,["r",ARD(AMu)],Ox,0,C,[Bi],0,3,0,0,["r",ARD(AHP)],Oy,0,C,[Bi],0,3,0,0,["r",ARD(AES)],U2,0,C,[Bi],0,3,0,0,["r",ARD(ADI)],YG,0,C,[],0,3,0,0,0,ABT,0,C,[],0,3,0,0,0,SB,0,C,[Bi],0,3,0,0,["r",ARD(AIg)],SC,0,C,[Bi],0,3,0,0,["r",ARD(ANB)],SA,0,C,[Bi],0,3,0,0,["r",ARD(AFn)],UQ,0,C,[H3],0,3,0,0,["lx",ARF(AJu)],RA,0,C,[Bi],0,3,0,0,["r",ARD(AIk)],RB,0,C,[Bi],0,3,0,0,["r",ARD(AJs)],Ne,0,C,[Bi],0,3,0,0,["r",ARD(AHf)],Nd,0,C,[Bi],0,3,0,0,["r",ARD(ANi)],T7,0,C,[HF],0,3,0,0,["ga",ARD(AFi)],UE,0,C,[Bi],0,3,0,
0,["r",ARD(ALb)],UI,0,C,[Bi],0,3,0,0,["r",ARD(AIr)],UH,0,C,[Bi],0,3,0,0,["r",ARD(ADC)],UF,0,C,[Bi],0,3,0,0,["r",ARD(AFq)],WO,0,C,[Bi],0,3,0,0,["r",ARD(AID)],Rw,0,C,[H3],0,3,0,0,["lx",ARF(AHz)],OT,0,C,[BU],0,3,0,0,["be",ARE(AFF)],Ih,0,C,[BC],3,3,0,0,0,LU,0,C,[Ih],0,3,0,0,["pC",ARD(AHQ)],LC,0,C,[Ih],0,3,0,0,["pC",ARD(ACF)],Wa,0,C,[BU],0,3,0,0,["be",ARE(AG6)],GB,0,C,[],0,0,0,0,0,Tt,0,GB,[Fp],0,0,0,0,0,PP,0,GB,[Fp],0,0,0,0,0,ST,0,C,[],3,3,0,0,0]);
$rt_metadata([PN,0,C,[C8],4,3,0,0,0,M4,0,C,[Ba],0,3,0,0,["l",ARE(AO4)],Ge,0,Cq,[],12,0,0,TL,0,RK,0,C,[Ba],0,3,0,0,["l",ARE(AIu)],Ps,0,C,[Ba],0,3,0,0,["l",ARE(AHj)],Rg,0,C,[Ba],0,3,0,0,["l",ARE(ADB)],VZ,0,C,[Ba],0,3,0,0,["l",ARE(AOT)],UW,0,C,[Ba],0,3,0,0,["l",ARE(AGc)],VC,0,C,[Ba],0,3,0,0,["l",ARE(AD3)],RO,0,C,[Ba],0,3,0,0,["l",ARE(ADz)],Bz,0,C,[],1,0,0,0,["cb",ARG(Hh),"cg",ARH(Hr),"g$",ARD(AEb),"L",ARE(ANs),"bN",ARE(ANr),"eV",ARD(AOe),"dO",ARD(Is)],Tn,0,C,[],32,0,0,APG,0,N_,0,C,[Ba],0,3,0,0,["l",ARE(AE_)],Sc,
0,C,[Ba],0,3,0,0,["l",ARE(AHl)],WX,0,C,[Bi],0,3,0,0,["r",ARD(AEZ)],CM,0,Bz,[],0,0,0,Lo,["c",ARG(ADH),"F",ARE(AD1)],Gr,0,C,[],0,0,0,0,0,H$,0,BA,[],0,3,0,0,0,VU,0,C,[BU],0,3,0,0,["be",ARE(AKS)],Z3,0,C,[BC],3,3,0,0,0,Tb,0,C,[BU],0,3,0,0,["be",ARE(AKx)],Qz,0,CM,[],0,0,0,0,["c",ARG(ADg),"F",ARE(AL5)],Wx,0,CM,[],0,0,0,0,["c",ARG(AE2)],OC,0,CM,[],0,0,0,0,["c",ARG(AD_)],RE,0,CM,[],0,0,0,0,["c",ARG(ADm),"F",ARE(AKG)],Fg,0,CM,[],0,0,0,0,["c",ARG(ANK)],BS,0,Bz,[],1,0,0,0,["c",ARG(AOF),"bS",ARD(AMZ),"F",ARE(AHY)],ABt,0,
BS,[],0,0,0,0,["bp",ARF(AMt),"cb",ARG(AGf),"cg",ARH(AEQ),"F",ARE(ADk)],BO,0,Bz,[],0,0,0,0,["c",ARG(AGO),"L",ARE(AKz),"bN",ARE(AIK),"F",ARE(ALg),"dO",ARD(AEM)],Il,0,BO,[],0,0,0,0,["c",ARG(AKj),"F",ARE(ALG)],DC,0,Il,[],0,0,0,0,["c",ARG(AFr),"L",ARE(ALo)],LS,0,DC,[],0,0,0,0,["c",ARG(AKs),"F",ARE(ANy)],U3,0,DC,[],0,0,0,0,["c",ARG(ADV),"F",ARE(AM3)],PQ,0,DC,[],0,0,0,0,["c",ARG(AEH),"F",ARE(AO7)],Sr,0,DC,[],0,0,0,0,["c",ARG(ACU),"F",ARE(ALW)],Gh,0,BO,[],0,0,0,0,["c",ARG(ADc),"cb",ARG(AI0),"cg",ARH(AMa),"bN",ARE(AIG),
"eV",ARD(AKD),"dO",ARD(AOh)],Gs,0,C,[],1,0,0,0,0,T,0,Gs,[],1,0,0,NB,["c2",ARD(ADY),"ek",ARD(ADv),"ih",ARD(AMS),"gs",ARD(AOd)],X1,0,T,[],0,0,0,0,["k",ARE(CV),"c2",ARD(CQ),"ek",ARD(AF9),"ih",ARD(ANg),"co",ARD(AJL),"gs",ARD(AGk)],Iy,0,Bm,[],0,3,0,0,0,DN,0,Bz,[],1,0,0,0,["bN",ARE(AMd),"F",ARE(ANG),"dO",ARD(AJk)],CW,0,DN,[],0,0,0,0,["c",ARG(ACW)],EP,0,CW,[],0,0,0,0,["c",ARG(ADK)],CN,0,DN,[],0,0,0,0,["c",ARG(ADb)],Em,0,CW,[],0,0,0,0,["c",ARG(AI6),"L",ARE(AO_)],Ve,0,CW,[],0,0,0,0,["c",ARG(AOx),"cb",ARG(AJH)],V,0,C,
[],1,0,0,0,0,C5,0,BA,[],0,3,0,0,0,L$,0,Gs,[Eb],0,0,0,0,["co",ARD(AJS)],M9,0,Bz,[],0,0,0,0,["c",ARG(AIn),"F",ARE(AKy)]]);
$rt_metadata([VP,0,C,[Eb,C8],0,3,0,0,0,L0,0,BO,[],0,0,0,0,0,O8,0,BO,[],0,0,0,0,["c",ARG(ADG),"L",ARE(AKg),"F",ARE(AEc),"bN",ARE(ADX)],Dp,0,BO,[],0,0,0,0,["c",ARG(AF1),"k",ARE(AGw),"bN",ARE(ADA),"L",ARE(AML),"F",ARE(AGb)],Iw,0,Dp,[],0,0,0,0,["k",ARE(AHZ)],XU,0,BS,[],0,0,0,0,["bp",ARF(AIo)],D3,0,BS,[],0,0,0,0,["bp",ARF(Lz),"bN",ARE(AKB)],NF,0,BO,[],0,0,0,0,["L",ARE(AI5),"c",ARG(ACL),"bN",ARE(AD8),"F",ARE(ANk)],Ea,0,BS,[],0,0,0,0,["bS",ARD(AH8),"bp",ARF(AGX),"cb",ARG(AFW),"cg",ARH(AId),"bN",ARE(ANc)],ABY,0,BS,
[],0,0,0,0,["bp",ARF(ACG)],W8,0,BS,[],0,0,0,0,["bp",ARF(AC7)],E0,0,BO,[],0,0,0,0,["L",ARE(AOg),"c",ARG(AKi),"bN",ARE(AIp),"F",ARE(ALs)],V$,0,E0,[],0,0,0,0,0,SJ,0,E0,[],0,0,0,0,0,WU,0,CN,[],0,0,0,0,["c",ARG(AE7)],Ou,0,CN,[],0,0,0,0,["c",ARG(AJy)],FC,0,CN,[],0,0,0,0,["c",ARG(AMG),"L",ARE(ANO)],Oa,0,FC,[],0,0,0,0,["c",ARG(AH_),"L",ARE(AJT)],EX,0,CN,[],0,0,0,0,["c",ARG(AO1)],Mh,0,EX,[],0,0,0,0,["c",ARG(AHs)],Qc,0,CN,[],0,0,0,0,["c",ARG(AOm)],Ph,0,FC,[],0,0,0,0,["c",ARG(AEf)],TN,0,EX,[],0,0,0,0,["c",ARG(ADr)],Qe,
0,DN,[],0,0,0,0,["c",ARG(AON),"cb",ARG(AMU)],Nf,0,DN,[],0,0,0,0,["c",ARG(AKE),"cb",ARG(ACP)],Ey,0,C,[],1,0,0,0,0,WW,0,CW,[],0,0,0,0,["c",ARG(ADt)],Va,0,Em,[],0,0,0,0,["c",ARG(AJx)],NZ,0,EP,[],0,0,0,0,["c",ARG(AMh)],Pd,0,CW,[],0,0,0,0,["c",ARG(AKw)],S3,0,Em,[],0,0,0,0,["c",ARG(ADy)],PR,0,EP,[],0,0,0,0,["c",ARG(AMx)],JD,0,Bz,[],4,0,0,0,["c",ARG(AII),"F",ARE(AHJ)],Yw,0,Bz,[],0,0,0,0,["c",ARG(ADU),"F",ARE(AD5)],Nb,0,Bz,[],0,0,0,0,["c",ARG(AH3),"F",ARE(AOX)],VR,0,Bz,[],4,0,0,0,["c",ARG(AK_),"F",ARE(AEW)],VA,0,Bz,
[],0,0,0,0,["c",ARG(AKc),"F",ARE(ACE)],Mt,0,Bz,[],0,0,0,0,["c",ARG(AEL),"F",ARE(AGH)],ABO,0,BO,[],0,0,0,0,["c",ARG(AOr),"L",ARE(AD$),"g$",ARD(AJZ),"F",ARE(AD9)],X0,0,BO,[],4,0,0,0,["c",ARG(AJ7),"L",ARE(AL2),"g$",ARD(ACA),"F",ARE(AOC)],ABE,0,Bz,[],4,0,0,0,["c",ARG(AIt),"F",ARE(AGC)],ZZ,0,Bz,[],0,0,0,0,["c",ARG(AKa),"F",ARE(AGt)],W5,0,Bz,[],0,0,0,0,["c",ARG(AHy),"F",ARE(AE1)],GK,0,BO,[],0,0,0,0,["c",ARG(ADu),"L",ARE(ALk),"F",ARE(ALH)],ABJ,0,GK,[],0,0,0,0,["c",ARG(AE6),"cb",ARG(ANu),"cg",ARH(ADh),"bN",ARE(AJr)],Y9,
0,GK,[],0,0,0,0,["c",ARG(AIV)],M8,0,F5,[Hv],0,3,0,0,["kO",ARH(AGl),"j2",ARG(ADZ),"he",ARE(AEp),"ll",ARF(AMY)],Qm,0,BS,[],0,0,0,0,["bp",ARF(AFo),"cb",ARG(ADP),"cg",ARH(AGG),"bN",ARE(AG$)],W4,0,BS,[],0,0,0,0,["bp",ARF(AI2)],Mn,0,BS,[],0,0,0,0,["bp",ARF(AMj)]]);
$rt_metadata([GJ,0,C,[],4,0,0,ALU,0,LH,0,BS,[],0,0,0,0,["bp",ARF(AMq)],Ka,0,BO,[],0,0,0,0,["L",ARE(AKq),"c",ARG(AEX),"cb",ARG(AG5),"cg",ARH(AFv),"bN",ARE(ADf),"F",ARE(AM4)],Kv,0,BO,[],0,0,0,0,["L",ARE(AEo),"c",ARG(ACV),"cb",ARG(AKN),"cg",ARH(AMi),"bN",ARE(AFp),"F",ARE(AKX)],DF,0,BS,[],0,0,0,0,["bp",ARF(ALJ),"cb",ARG(AJM),"cg",ARH(AEl),"bN",ARE(ALw)],Uc,0,Ey,[],0,0,0,0,["g1",ARE(AEC),"q2",ARF(ALB)],Ud,0,Ey,[],0,0,0,0,["g1",ARE(AMA),"q2",ARF(AN_)],AAO,0,C,[],0,0,0,0,0,Xm,0,C,[],0,0,0,0,0,J8,0,V,[],0,0,0,0,["C",
ARD(Zf)],Ja,0,V,[],0,0,0,0,["C",ARD(ZT)],AAI,0,V,[],0,0,0,0,["C",ARD(AL4)],AA_,0,V,[],0,0,0,0,["C",ARD(AM7)],ABd,0,V,[],0,0,0,0,["C",ARD(AF2)],J4,0,V,[],0,0,0,0,["C",ARD(X2)],KF,0,J4,[],0,0,0,0,["C",ARD(YR)],ACq,0,V,[],0,0,0,0,["C",ARD(AG3)],Lx,0,KF,[],0,0,0,0,["C",ARD(W0)],Zr,0,Lx,[],0,0,0,0,["C",ARD(AJl)],ZN,0,V,[],0,0,0,0,["C",ARD(AFh)],Yo,0,V,[],0,0,0,0,["C",ARD(AJh)],X9,0,V,[],0,0,0,0,["C",ARD(AOc)],ABg,0,V,[],0,0,0,0,["C",ARD(AJU)],ACz,0,V,[],0,0,0,0,["C",ARD(ACN)],AAP,0,V,[],0,0,0,0,["C",ARD(AHD)],AAB,
0,V,[],0,0,0,0,["C",ARD(ALN)],ABy,0,V,[],0,0,0,0,["C",ARD(AFd)],XD,0,V,[],0,0,0,0,["C",ARD(AFD)],Xj,0,V,[],0,0,0,0,["C",ARD(AN7)],AAU,0,V,[],0,0,0,0,["C",ARD(ACH)],AA3,0,V,[],0,0,0,0,["C",ARD(AIx)],YK,0,V,[],0,0,0,0,["C",ARD(AFL)],ZR,0,V,[],0,0,0,0,["C",ARD(AGJ)],AB7,0,V,[],0,0,0,0,["C",ARD(AIz)],AA2,0,V,[],0,0,0,0,["C",ARD(ANn)],Y7,0,V,[],0,0,0,0,["C",ARD(AK6)],YI,0,V,[],0,0,0,0,["C",ARD(AJP)],ACu,0,V,[],0,0,0,0,["C",ARD(ALY)],IG,0,V,[],0,0,0,0,["C",ARD(ZO)],ABA,0,IG,[],0,0,0,0,["C",ARD(AJD)],Zw,0,J8,[],0,
0,0,0,["C",ARD(ADO)],YD,0,Ja,[],0,0,0,0,["C",ARD(AGU)],Yc,0,V,[],0,0,0,0,["C",ARD(AIM)],Yy,0,V,[],0,0,0,0,["C",ARD(ANW)],Zm,0,V,[],0,0,0,0,["C",ARD(AGp)],Zt,0,V,[],0,0,0,0,["C",ARD(ACI)],Yi,0,C,[],4,0,0,0,0,XS,0,C,[],4,3,0,0,0,Mu,0,C,[],0,3,0,0,0,AAY,0,C,[],0,3,0,0,0]);
$rt_metadata([Y5,0,C,[],4,3,0,0,0,XX,0,C,[Ia],0,3,0,0,0,Mk,0,C,[Ba],0,3,0,0,["l",ARE(AJK)],PX,0,C,[Ba],0,3,0,0,["l",ARE(AGm)],Up,0,C,[Ba],0,3,0,0,0,VS,0,C,[Ba],0,3,0,0,0,AAQ,0,C,[],3,3,0,0,0,Vd,0,T,[],0,0,0,0,["k",ARE(AF8)],Vb,0,T,[],0,0,0,0,["k",ARE(AC$)],Nk,0,T,[],0,0,0,0,["k",ARE(AIE),"co",ARD(AGM)],Nq,0,T,[],0,0,0,0,["k",ARE(ALM)],No,0,T,[],0,0,0,0,["k",ARE(AMp)],Np,0,T,[],0,0,0,0,["k",ARE(AI1)],Nt,0,T,[],0,0,0,0,["k",ARE(AFH)],Nu,0,T,[],0,0,0,0,["k",ARE(ACB)],Nr,0,T,[],0,0,0,0,["k",ARE(AGQ)],Ns,0,T,[],
0,0,0,0,["k",ARE(AI4)],Nv,0,T,[],0,0,0,0,["k",ARE(ANz)],Nx,0,T,[],0,0,0,0,["k",ARE(AE$)],Nj,0,T,[],0,0,0,0,["k",ARE(APc)],N7,0,T,[],0,0,0,0,["k",ARE(AGT)],Nh,0,T,[],0,0,0,0,["k",ARE(AE9)],Ni,0,T,[],0,0,0,0,["k",ARE(AGA)],Nn,0,T,[],0,0,0,0,["k",ARE(AH6)],Ng,0,T,[],0,0,0,0,["k",ARE(ANb)],Nl,0,T,[],0,0,0,0,["k",ARE(AD2)],Nm,0,T,[],0,0,0,0,["k",ARE(AKW)],K4,0,C,[],3,3,0,0,0,Rf,0,C,[K4],4,3,0,0,0,Cb,0,Cq,[],12,3,0,ABo,0,M$,0,C,[Ba],0,3,0,0,["l",ARE(ALX)],Mc,0,Gh,[],0,0,0,0,["cb",ARG(AGs),"cg",ARH(AOZ),"eV",ARD(AEV)],O1,
0,Bm,[],0,3,0,0,0,V2,0,Bm,[],0,3,0,0,0,T$,0,Fy,[],0,3,0,0,0,OR,0,Fy,[],0,3,0,0,0,WK,0,Bm,[],0,3,0,0,0,T4,0,C,[],0,3,0,0,0,NO,0,C,[Bi],0,3,0,0,0,Rq,0,C,[Ba],0,3,0,0,0,Rp,0,C,[Ba],0,3,0,0,0,T8,0,C,[K4],0,0,0,0,0,VY,0,C,[Bi],0,3,0,0,["r",ARD(AKI)],YA,0,C,[],0,3,0,0,0,OK,0,C,[],3,3,0,0,0,V4,0,C,[OK],0,3,0,0,0,RL,0,T,[],0,0,0,0,["k",ARE(ANI)],LX,0,T,[],0,0,0,0,["k",ARE(ADM)],QI,0,T,[],0,0,0,0,["k",ARE(ADx)],QH,0,T,[],0,0,0,0,["k",ARE(AGo)]]);
$rt_metadata([VJ,0,T,[],0,0,0,0,["k",ARE(AHR)],NS,0,T,[],0,0,0,0,["k",ARE(ANL)],M3,0,T,[],0,0,0,0,["k",ARE(AKl)],Pu,0,T,[],0,0,0,0,["k",ARE(ALT)],LQ,0,T,[],0,0,0,0,["k",ARE(AOA)],LV,0,T,[],0,0,0,0,["k",ARE(AFu)],MP,0,T,[],0,0,0,0,["k",ARE(ANU)],Oh,0,T,[],0,0,0,0,["k",ARE(AJd)],Oq,0,T,[],0,0,0,0,["k",ARE(ALi)],SE,0,T,[],0,0,0,0,["k",ARE(ANA)],Rh,0,T,[],0,0,0,0,["k",ARE(AOk)],L7,0,T,[],0,0,0,0,["k",ARE(AFf)],Lk,0,T,[],0,0,0,0,["k",ARE(AKn)],QB,0,Lk,[],0,0,0,0,["k",ARE(AMM)],OL,0,C,[Ih],0,3,0,0,["pC",ARD(AIR)],UG,
0,C,[BU],0,3,0,0,["be",ARE(AK$)],UK,0,C,[BU],0,3,0,0,["be",ARE(AJ0)],Sm,0,C,[BU],0,3,0,0,["be",ARE(AGZ)],Sp,0,C,[BU],0,3,0,0,["be",ARE(AC4)],Ts,0,C,[BU],0,3,0,0,["be",ARE(AIN)],Uk,0,C,[Ba],0,3,0,0,["l",ARE(AKT)],Uh,0,C,[Ba],0,3,0,0,["l",ARE(AIP)],Ui,0,C,[Ba],0,3,0,0,["l",ARE(AKV)],XK,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.IB=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","[",", ","]","Either src or dest is null","Illegal argument javaObject instanceof ","#wasm","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = vTex;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}",
"WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = uTexTransform.xy + vTex * uTexTransform.zw;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ",
"Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","selectScene ","CodiconDemo","DemoEdit0","RenderTexture","ScissorDemo","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","WindowDemo","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","Consolas","#e3c8ab","#39322b","unsupported","supported","ReadClipboardText is ","","",
"w = ",", lineHeight = ","Segoe UI","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
+"(int field) {\n    return field + this.field;\n  }\n\n  public interface A {\n    int sumField(int field);\n\n    default void foo() {\n      sumField(10);\n    }\n  }\n}\n","java","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","#B9BDC9","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","parser >","open ...",
"Development >","pointer","text","ew-resize","ns-resize","Courier New","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","main.java","5","private static void foo (...);","25","String foo = \"boo\";","131","int a = 5;","class.java","176","public class FindTest extend Test {...};","1234","sub.java","4321","demo.java","23872","demoWWWWWWWWWWWWWWWWWWWWWWWWW.java","demoWWDSADASWDAWDAWDKOAWPDKOPKDPAWKDOADOPKWDOPAKWDOP.java",
"demoWWDSADASWDAWDAWDKOAWPDKOPKDPAWKDOADOPDSAHJDSAKDJSAHDKHDKWDOPAKWDOP.java","scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ",
"int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ","\n","\r","Full file parsed in ","ms","change model language: from = "," to = ","opening file ",".java","prev = "," pixelLocation = ",", next = ","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing",
"CppParser.parse","JavaScriptParser.parseBytes","JavaParser.parse","#A9B7C6","#40332B","#edebfc","#344134","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","toolbar size is unknown","onLeave item ",", item ","trying to display with unknown screen size and dpr","onContextMenu","#616161","tbH onClickOutside","tbV onClickOutside","...","... and "," more usages","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.",
"  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile","|The sample text"," on Copy","newWindow","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","#BBBBBB","onEnter item ","FindUsages size is unknown","#3C3F41","#4B6EAF","\\n","defaultText","keyword","field","#9876AA","string","#6A8759","comma","#CC7832","error","unused","#72737A",
"number","#6897BB","method","#FFC66D","showUsage","braceMatch","#FFEF28","#3B514D","comment","#808080","annotation","#BBB529","type","#287BDE","operator","#5F8C8A"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","closed","Int","Iter","VP","Rep","No definition or usages","Expected "," ints to read, but "," read","readClipboardText error: ","Current Version: ",
"Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin",
"Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid",
"Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes",
"MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended",
"CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants",
"ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Viewport parsed in ","Verdana","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AEh(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
var Long_eq;var Long_ne;var Long_gt;var Long_ge;var Long_lt;var Long_le;var Long_compare;var Long_ucompare;var Long_add;var Long_sub;var Long_inc;var Long_dec;var Long_mul;var Long_div;var Long_rem;var Long_udiv;var Long_urem;var Long_neg;var Long_and;var Long_or;var Long_xor;var Long_shl;var Long_shr;var Long_shru;var Long_not;if(typeof $rt_globals.BigInt!=='function'){Long_eq=function(a,b){return a.hi===b.hi&&a.lo===b.lo;};Long_ne=function(a,b){return a.hi!==b.hi||a.lo!==b.lo;};Long_gt=function(a,b){if(a.hi
<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};Long_ge=function(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Long_lt=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Long_le=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x
=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Long_add=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo
+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_inc=function(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);};Long_dec=function(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);};Long_neg=function(a){return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));};Long_sub=function(a,b){if(a.hi===a.lo
>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_compare=function(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r
=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_ucompare=function(a,b){var r=$rt_ucmp(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_mul=function(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo
=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo
&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);};Long_div=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];};Long_udiv=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];};Long_rem=function(a,b){if($rt_globals.Math.abs(a.hi)
<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];};Long_urem=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];};function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}Long_and=function(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);};Long_or=function(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);};Long_xor=function(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);};Long_shl=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}};Long_shr=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|
a.hi<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}};Long_shru=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}};Long_not=function(a){return new Long(~a.hi,~a.lo);};function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo
=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>
16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo
>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==
0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a){var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,
b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits
=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,
bits+16);return q;}}else {Long_eq=function(a,b){return a===b;};Long_ne=function(a,b){return a!==b;};Long_gt=function(a,b){return a>b;};Long_ge=function(a,b){return a>=b;};Long_lt=function(a,b){return a<b;};Long_le=function(a,b){return a<=b;};Long_add=function(a,b){return $rt_globals.BigInt.asIntN(64,a+b);};Long_inc=function(a){return $rt_globals.BigInt.asIntN(64,a+1);};Long_dec=function(a){return $rt_globals.BigInt.asIntN(64,a -1);};Long_neg=function(a){return $rt_globals.BigInt.asIntN(64, -a);};Long_sub=function(a,
b){return $rt_globals.BigInt.asIntN(64,a -b);};Long_compare=function(a,b){return a<b? -1:a>b?1:0;};Long_ucompare=function(a,b){a=$rt_globals.BigInt.asUintN(64,a);b=$rt_globals.BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Long_mul=function(a,b){return $rt_globals.BigInt.asIntN(64,a*b);};Long_div=function(a,b){return $rt_globals.BigInt.asIntN(64,a/b);};Long_udiv=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)/$rt_globals.BigInt.asUintN(64,b));};Long_rem=function(a,b){return $rt_globals.BigInt.asIntN(64,
a%b);};Long_urem=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)%$rt_globals.BigInt.asUintN(64,b));};Long_and=function(a,b){return $rt_globals.BigInt.asIntN(64,a&b);};Long_or=function(a,b){return $rt_globals.BigInt.asIntN(64,a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Cm=Long_add;var JF=Long_sub;var BN=Long_mul;var De=Long_div;var L1=Long_rem;var APU=Long_or;var CS=Long_and;var AUA=Long_xor;var E9=Long_shl;var Gc=Long_shr;var DU=Long_shru;var AQe=Long_compare;var EY=Long_eq;var AUB=Long_ne;var AFO=Long_lt;var OE=Long_le;var AFy=Long_gt;var Yt=Long_ge;var AUC=Long_not;var AQp=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(AQt);
main.javaException=$rt_javaException;
(function(){var c;c=SM.prototype;c.f=c.be;c=SK.prototype;c.f=c.be;c=Ml.prototype;c.f=c.be;c=YT.prototype;c.getLength=c.DQ;c.get=c.Es;c=MQ.prototype;c.f=c.be;c=Xt.prototype;c.dispatchEvent=c.zl;c.addEventListener=c.Cw;c.removeEventListener=c.Ex;c.getLength=c.zr;c.get=c.wK;c.addEventListener=c.x0;c.removeEventListener=c.A8;c=UB.prototype;c.onAnimationFrame=c.A_;c=Uy.prototype;c.f=c.s2;c=Uv.prototype;c.handleEvent=c.b8;c=Uw.prototype;c.f=c.be;c=Vk.prototype;c.handleEvent=c.b8;c=Vl.prototype;c.handleEvent=c.b8;c
=Vm.prototype;c.handleEvent=c.b8;c=Vn.prototype;c.handleEvent=c.b8;c=Vo.prototype;c.handleEvent=c.b8;c=Vp.prototype;c.handleEvent=c.b8;c=Vq.prototype;c.handleEvent=c.b8;c=Vr.prototype;c.handleEvent=c.b8;c=Vs.prototype;c.handleEvent=c.b8;c=Vt.prototype;c.handleEvent=c.b8;c=WD.prototype;c.handleEvent=c.b8;c=WE.prototype;c.handleEvent=c.b8;c=WF.prototype;c.handleEvent=c.b8;c=WG.prototype;c.handleEvent=c.b8;c=Tl.prototype;c.handleEvent=c.b8;c=Wm.prototype;c.f=c.be;c=Wo.prototype;c.f=c.be;c=Ms.prototype;c.f=c.be;c
=Mr.prototype;c.f=c.be;c=Mq.prototype;c.f=c.be;c=Mp.prototype;c.f=c.be;c=MK.prototype;c.accept=c.EZ;c=N5.prototype;c.f=c.s2;c=N3.prototype;c.f=c.s2;c=Py.prototype;c.f=c.be;c=Tx.prototype;c.f=c.be;c=LZ.prototype;c.f=c.be;c=Wc.prototype;c.f=c.be;c=Wb.prototype;c.f=c.be;c=VE.prototype;c.f=c.be;c=VD.prototype;c.f=c.be;c=V7.prototype;c.handleEvent=c.b8;c=OT.prototype;c.f=c.be;c=LU.prototype;c.onTimer=c.pC;c=LC.prototype;c.onTimer=c.pC;c=Wa.prototype;c.f=c.be;c=VU.prototype;c.f=c.be;c=Tb.prototype;c.f=c.be;c=OL.prototype;c.onTimer
=c.pC;c=UG.prototype;c.f=c.be;c=UK.prototype;c.f=c.be;c=Sm.prototype;c.f=c.be;c=Sp.prototype;c.f=c.be;c=Ts.prototype;c.f=c.be;})();
})(this);
