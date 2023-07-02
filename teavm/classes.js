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
{if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.eG=f;}
function $rt_cls(cls){return QD(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Fb(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bV.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AIt(t);}
function $rt_throwableCause(t){return AIx(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ANC());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AND(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ANE());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BD=$rt_compare;var ANF=$rt_nullCheck;var E=$rt_cls;var R=$rt_createArray;var Ka=$rt_isInstance;var ANG=$rt_nativeThread;var ANH=$rt_suspending;var ANI=$rt_resuming;var ANJ=$rt_invalidPointer;var B=$rt_s;var Bk=$rt_eraseClinit;var Bc=$rt_imul;var DS=$rt_wrapException;var ANK=$rt_checkBounds;var ANL=$rt_checkUpperBound;var ANM=$rt_checkLowerBound;var ANN=$rt_wrapFunction0;var ANO=$rt_wrapFunction1;var ANP=$rt_wrapFunction2;var ANQ=$rt_wrapFunction3;var ANR=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var WW=$rt_createCharArrayFromData;var AMr=$rt_createByteArrayFromData;var ANS=$rt_createShortArrayFromData;var EE=$rt_createIntArrayFromData;var ANT=$rt_createBooleanArrayFromData;var ANU=$rt_createFloatArrayFromData;var ANV=$rt_createDoubleArrayFromData;var ABP=$rt_createLongArrayFromData;var ANW=$rt_createBooleanArray;var EG=$rt_createByteArray;var ANX=$rt_createShortArray;var BN=$rt_createCharArray;var BS=$rt_createIntArray;var ANf=$rt_createLongArray;var AAi=$rt_createFloatArray;var ANY
=$rt_createDoubleArray;var BD=$rt_compare;var ANZ=$rt_castToClass;var AN0=$rt_castToInterface;var AN1=Long_toNumber;var W=Long_fromInt;var AN2=Long_fromNumber;var B3=Long_create;var D2=Long_ZERO;var AN3=Long_hi;var Ef=Long_lo;
function C(){this.$id$=0;}
function AN4(){var a=new C();YY(a);return a;}
function YY(a){}
function CA(a){return QD(a.constructor);}
function PR(a,b){return a!==b?0:1;}
function ABC(a){var b,c,d,e,f,g,h,i,j;b=KZ(a);if(!b)c=B(0);else{d=(((32-LT(b)|0)+4|0)-1|0)/4|0;e=BN(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Gi((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Fb(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function KZ(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AFo(a){var b,c,d;if(!Ka(a,D0)&&a.constructor.$meta.item===null){b=new Sq;U(b);J(b);}b=AAo(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function O7(){var a=this;C.call(a);a.qE=0;a.nK=null;}
function AME(b){var c,d,e,f,g,h,i,j,k;YV();U7();Xq();Yk();Wf();YF();UU();Y0();Z1();WB();UX();X8();XH();X9();W9();Wl();VH();WI();WK();Vd();ZL();c=(Vg()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Na(B(2),B(3));else{d=new O7;Cf(d);e=new QQ;e.o3=d;f=new Lu;c=new $rt_globals.Worker("teavm/worker.js");g=new LY;g.mp=c;g.mq=e;g.ms=f;e=Be(g,"f");c.onmessage=e;b=R(J_,4).data;b[0]=Im(B(4),B(5),400);b[1]=Im(B(6),B(7),400);b[2]=Im(B(8),B(5),700);b[3]
=Im(B(9),B(7),700);g=new $rt_globals.Array();h=b.length;i=0;while(i<h){c=b[i];e=c.oE;f=c.nC;j=new M;O(j);BB(G(G(j,B(10)),f),41);j=N(j);f=c.ny;k=c.mf;c=ADD($rt_ustr(f),k);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(j),c)).load();g.push(c);i=i+1|0;}e=$rt_globals.Promise.all(g);Cf(d);c=new QR;c.pO=d;g=new QP;e.then(Be(c,"f"),Be(g,"f"));}}
function Xb(b){var c,d,e,f,g,h,i,j,k;c=new PP;d=new Oa;c.m4=new $rt_globals.TextDecoder("utf-16");e=new Sp;e.l$=c;c.op=e;f=new Sk;f.qR=c;c.q4=f;g=new NH;g.gT=AIK();h=R(Cs,0);g.p5=h;g.ej=h;g.i5=1;g.hD=0;g.c6=f;c.jI=g;g=new Sl;g.of=c;c.pV=new $rt_globals.ResizeObserver(Be(g,"f"));e=new Si;e.lK=c;c.k0=e;c.gW=1;c.j3=AIK();c.ni=b;g=new Sj;g.p7=c;e=Be(g,"f");b.onmessage=e;e=W8();b.postMessage(e);c.kS=(DI()).getElementById("canvasDiv");b=Vg();i=0;b.tabIndex=i;g=b.style;g.setProperty("width","100%");g.setProperty("height",
"100%");g.setProperty("outline","none");c.cZ=b;c.kS.appendChild(b);f=c.cZ;i=AG6(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",i);if(b===null)Na(B(2),B(11));else{i=new Nu;e=c.cZ;g=c.jI;i.cU=null;i.fS=e;i.b7=g;f=$rt_globals.window;h=R(CO,14);j=h.data;k=new S6;k.le=i;j[0]=CD(i,e,B(12),k);g=new S7;g.oJ=i;j[1]=CD(i,e,B(13),g);g=new S8;g.lW=i;j[2]=CD(i,e,B(14),g);g=new S9;g.qL=i;j[3]=CD(i,e,B(15),g);g=new S$;g.n4=i;j[4]=CD(i,e,B(16),g);g=new S_;g.lt=i;j[5]=CD(i,e,B(17),g);g=new Ta;g.q3=i;j[6]=CD(i,e,B(18),g);g=new Tb;g.oh
=i;j[7]=CD(i,e,B(19),g);g=new Tc;g.lF=i;j[8]=CD(i,e,B(20),g);g=new Td;g.qb=i;j[9]=CD(i,e,B(21),g);j[10]=CD(i,e,B(22),ALq(i));j[11]=X2(i,f,B(23),AL$(i),1);j[12]=CD(i,f,B(24),ANp(i));j[13]=CD(i,f,B(25),AMi(i));i.sS=AKo(h);Wu(i,e);c.oH=i;c.e8=AMd(b,c.q4);AGc(c.pV,c.cZ);e=$rt_globals.window;i=c.k0;e.addEventListener("resize",Be(i,"handleEvent"));c.et=Ws(d,Wn(c));Qj(c);}Yw(c);}
var Ln=F(0);
var KT=F(0);
function SY(){var a=this;C.call(a);a.iB=null;a.d7=null;}
function QD(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new SY;c.d7=b;d=c;b.classObject=d;}return c;}
function AFD(a){var b,c;b=KZ(a);c=new M;O(c);T(G(c,B(26)),b);return N(c);}
function GT(a){if(a.iB===null)a.iB=$rt_str(a.d7.$meta.name);return a.iB;}
function GL(a){return a.d7.$meta.primitive?1:0;}
function GZ(a){return QD(a.d7.$meta.item);}
function RV(a){return QD(a.d7.$meta.superclass);}
var VM=F();
function Be(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function JH(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Vy=F();
function AAo(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function XY(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(XY(d[e],c))return 1;e=e+1|0;}return 0;}
var CT=F(0);
var Cy=F(0);
var Hy=F(0);
function Bx(){var a=this;C.call(a);a.bV=null;a.gu=0;}
var AN5=null;var AN6=null;var AN7=null;function En(){En=Bk(Bx);AJJ();}
function AD3(){var a=new Bx();UZ(a);return a;}
function Fb(a){var b=new Bx();Gs(b,a);return b;}
function Ik(a,b,c){var d=new Bx();UA(d,a,b,c);return d;}
function UZ(a){En();a.bV=AN5;}
function Gs(a,b){var c,d,e,f;En();b=b.data;c=b.length;d=BN(c);e=d.data;a.bV=d;f=0;while(f<c){e[f]=b[f];f=f+1|0;}}
function UA(a,b,c,d){var e,f,g;En();e=BN(d);f=e.data;a.bV=e;g=0;while(g<d){f[g]=b.data[g+c|0];g=g+1|0;}}
function Us(b){var c;En();c=AD3();c.bV=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.bV.data;if(b<c.length)return c[b];}d=new Gg;U(d);J(d);}
function I(a){return a.bV.data.length;}
function FJ(a){return a.bV.data.length?0:1;}
function Rf(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function FL(a,b){if(a===b)return 1;return Rf(a,b,0);}
function FU(a,b,c){var d,e,f,g,h;d=Bf(0,c);if(b<65536){e=b&65535;while(true){f=a.bV.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=GV(b);h=Ho(b);while(true){f=a.bV.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Fg(a,b,c){var d,e,f,g,h;d=Z(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bV.data[d]==e)break;d=d+(-1)|0;}return d;}f=GV(b);g=Ho(b);while(true){if(d<1)return (-1);h=a.bV.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Wa(a,b,c){var d,e,f;d=Bf(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function B6(a,b,c){var d,e;d=BD(b,c);if(d>0){e=new Bv;U(e);J(e);}if(!d){En();return AN6;}if(!b&&c==I(a))return a;return Ik(a.bV,b,c-b|0);}
function Dc(a,b){return B6(a,b,I(a));}
function NQ(a,b,c){return B6(a,b,c);}
function Ft(a,b){var c,d,e,f,g,h;if(FJ(b))return a;if(FJ(a))return b;c=BN(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Us(c);}
function RU(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BB(d,L(a,f));}f=f+1|0;}G(d,Dc(a,f));return N(d);}
function Pe(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return B6(a,b,c+1|0);}
function ABB(a){return a;}
function FK(a){var b,c,d,e,f;b=a.bV.data;c=BN(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cj(b){En();return b===null?B(27):b.bI();}
function CZ(b){var c;En();c=new M;O(c);return N(T(c,b));}
function Br(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bx))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function JF(a){var b,c,d,e;a:{if(!a.gu){b=a.bV.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.gu=(31*a.gu|0)+e|0;d=d+1|0;}}}return a.gu;}
function Tu(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new FR;Ba(b,B(28));J(b);}AN8=1;d=new OA;d.im=R(Cz,10);d.fb=(-1);d.dJ=(-1);d.bi=(-1);e=new FW;e.dG=1;e.br=b;e.T=BN(I(b)+2|0);DU(FK(b),0,e.T,0,I(b));f=e.T.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.n7=g;e.e0=0;Ez(e);Ez(e);d.f=e;d.cO=0;d.jh=Uk(d,(-1),0,null);if(!CU(d.f)){b=new Hr;h=d.f;H1(b,B(29),h.br,h.cz);J(b);}if(d.lg)d.jh.dp();b=Cx();h=new Px;h.gU=(-1);h.iG=(-1);h.rU=d;h.pT=d.jh;h.g9=a;h.gU=0;g=I(a);h.iG=g;e=new RW;i=h.gU;j=d.fb;k=d.dJ+1|0;l=d.bi+1|0;e.gd
=(-1);m=j+1|0;e.lR=m;e.cY=BS(m*2|0);f=BS(l);e.hN=f;Ie(f,(-1));if(k>0)e.i9=BS(k);Ie(e.cY,(-1));Ue(e,a,i,g);h.b5=e;e.ei=1;n=0;m=0;if(!I(a)){f=R(Bx,1);f.data[0]=B(29);}else{while(true){l=I(h.g9);if(!UW(h.b5))l=h.iG;e=h.b5;if(e.dl>=0&&Wz(e)==1){e=h.b5;e.dl=HM(e);if(HM(h.b5)==Yj(h.b5)){e=h.b5;e.dl=e.dl+1|0;}g=h.b5.dl;g=g<=l&&K2(h,g)?1:0;}else g=K2(h,h.gU);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Cc(b,NQ(a,m,Zz(h)));m=Wi(h);n=g;}a:{Cc(b,NQ(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(BK(b,g)))break a;F7(b,
g);}}if(g<0)g=0;f=GG(b,R(Bx,g));}return f;}
function ADv(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Z(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AJJ(){AN5=BN(0);AN6=AD3();AN7=new PV;}
function FN(){var a=this;C.call(a);a.f$=null;a.i8=null;a.hu=0;a.hR=0;}
function AN9(){var a=new FN();U(a);return a;}
function AN$(a){var b=new FN();Ba(b,a);return b;}
function U(a){a.hu=1;a.hR=1;}
function Ba(a,b){a.hu=1;a.hR=1;a.f$=b;}
function ADm(a){return a;}
function AIt(a){return a.f$;}
function AIx(a){var b;b=a.i8;if(b===a)b=null;return b;}
var Ek=F(FN);
var Gj=F(Ek);
var WO=F(Gj);
var Dv=F();
function Eh(){Dv.call(this);this.eC=0;}
var AN_=null;var AOa=null;function Zb(a){var b=new Eh();Is(b,a);return b;}
function Is(a,b){a.eC=b;}
function H_(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new CS;Ba(b,B(30));J(b);}d=I(b);if(0==d){b=new CS;Ba(b,B(31));J(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new CS;U(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=M4(L(b,f));if(i<0){j=new CS;k=B6(b,0,d);b=new M;O(b);G(G(b,B(32)),k);Ba(j,N(b));J(j);}if(i>=c){j=new CS;l=B6(b,0,d);b=new M;O(b);G(G(T(G(b,B(33)),c),B(34)),l);Ba(j,N(b));J(j);}g=Bc(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new CS;k=B6(b,0,d);b=new M;O(b);G(G(b,B(35)),k);Ba(j,N(b));J(j);}b=new CS;j=new M;O(j);T(G(j,B(36)),c);Ba(b,N(j));J(b);}
function Ff(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AOa===null){AOa=R(Eh,256);c=0;while(true){d=AOa.data;if(c>=d.length)break a;d[c]=Zb(c-128|0);c=c+1|0;}}}return AOa.data[b+128|0];}return Zb(b);}
function Kq(a){var b;b=a.eC;return (LJ(ANm(20),b,10)).bI();}
function LT(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function G8(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function IH(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function AFi(a,b){b=b;return BD(a.eC,b.eC);}
function YV(){AN_=E($rt_intcls());}
function Fy(){var a=this;C.call(a);a.w=null;a.J=0;}
function AOb(){var a=new Fy();O(a);return a;}
function ANm(a){var b=new Fy();Fc(b,a);return b;}
function O(a){Fc(a,16);}
function Fc(a,b){a.w=BN(b);}
function LJ(a,b,c){return W2(a,a.J,b,c);}
function W2(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)B4(a,b,b+1|0);else{B4(a,b,b+2|0);f=a.w.data;g=b+1|0;f[b]=45;b=g;}a.w.data[b]=Gi(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bc(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;B4(a,b,b+i|0);if(e)e=b;else{f=a.w.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.w.data;b=e+1|0;f[e]=Gi($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function XO(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BD(c,0.0);if(!d){B4(a,b,b+3|0);e=a.w.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){B4(a,b,b+4|0);e=a.w.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){B4(a,b,b+3|0);e=a.w.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B4(a,b,b+8|0);d=b;}else{B4(a,b,b+9|0);e=a.w.data;d=b+1|0;e[b]=45;}e=a.w.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AOc;XI(c,f);d=f.iM;g=f.iv;h=f.lp;i=1;j=1;if(h)j=2;k=9;l=AJh(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bf(k,i+1|0);g=0;}else{d=d/AOd.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;B4(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.w.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.w.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.w.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function V5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BD(c,0.0);if(!d){B4(a,b,b+3|0);e=a.w.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){B4(a,b,b+4|0);e=a.w.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){B4(a,b,b+3|0);e=a.w.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B4(a,b,b+8|0);d=b;}else{B4(a,b,b+9|0);e=a.w.data;d=b+1|0;e[b]=45;}e=a.w.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AOe;W6(c,f);g=f.jj;h=f.ie;i=f.k$;j=1;k=1;if(i)k=2;l=18;m=AHp(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bf(l,j+1|0);h=0;}else{g=C2(g,AOf.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;B4(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.w.data;k=b+1|0;e[b]=45;}n=B3(1569325056, 23283064);o=0;while(o<l){if(NF(n,D2))d=0;else{d=Ef(C2(g,n));g=
K$(g,n);}e=a.w.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=C2(n,W(10));o=o+1|0;}if(h){e=a.w.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function AJh(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AHp(b){var c,d,e,f,g;c=W(1);d=0;e=16;f=AOg.data;g=f.length-1|0;while(g>=0){if(EJ(K$(b,BI(c,f[g])),D2)){d=d|e;c=BI(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BB(a,b){return a.j9(a.J,b);}
function T0(a,b,c){B4(a,b,b+1|0);a.w.data[b]=c;return a;}
function Ic(a,b){var c,d;c=a.w.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bf(b,Bf(c*2|0,5));a.w=Vc(a.w,d);}
function N(a){return Ik(a.w,0,a.J);}
function TK(a,b,c,d){return a.jE(a.J,b,c,d);}
function Li(a,b,c,d,e){var f,g,h,i;B4(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.w.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function G_(a,b){return a.iS(b,0,b.data.length);}
function B4(a,b,c){var d,e,f,g;d=a.J;e=d-b|0;a.gl((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.w.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.J=a.J+(c-b|0)|0;}
var GO=F(0);
var M=F(Fy);
function Kb(){var a=new M();AKy(a);return a;}
function AKy(a){O(a);}
function G(a,b){KD(a,a.J,b===null?B(27):b.bI());return a;}
function BR(a,b){KD(a,a.J,b);return a;}
function T(a,b){LJ(a,b,10);return a;}
function GM(a,b){var c,d,e,f,g,h,i,j;c=a.J;d=1;if(ACS(b,D2)){d=0;b=AMA(b);}a:{if(JB(b,W(10))<0){if(d)B4(a,c,c+1|0);else{B4(a,c,c+2|0);e=a.w.data;f=c+1|0;e[c]=45;c=f;}a.w.data[c]=Gi(Ef(b),10);}else{g=1;h=W(1);i=E3(W(-1),W(10));b:{while(true){j=BI(h,W(10));if(JB(j,b)>0){j=h;break b;}g=g+1|0;if(JB(j,i)>0)break;h=j;}}if(!d)g=g+1|0;B4(a,c,c+g|0);if(d)f=c;else{e=a.w.data;f=c+1|0;e[c]=45;}while(true){if(EJ(j,D2))break a;e=a.w.data;c=f+1|0;e[f]=Gi(Ef((E3(b,j))),10);b=LG(b,j);j=E3(j,W(10));f=c;}}}return a;}
function Fz(a,b){XO(a,a.J,b);return a;}
function No(a,b){V5(a,a.J,b);return a;}
function UR(a,b){BB(a,b);return a;}
function Fk(a,b){KD(a,a.J,!b?B(37):B(38));return a;}
function Zq(a,b,c){var d,e,f,g,h,i;d=BD(b,c);if(d<=0){e=a.J;if(b<=e){if(d){f=e-c|0;a.J=e-(c-b|0)|0;g=0;while(g<f){h=a.w.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Gg;U(i);J(i);}
function SK(a,b){var c,d,e,f;if(b>=0){c=a.J;if(b<c){c=c-1|0;a.J=c;while(b<c){d=a.w.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Gg;U(f);J(f);}
function AFg(a,b,c,d,e){Li(a,b,c,d,e);return a;}
function ACF(a,b,c,d){TK(a,b,c,d);return a;}
function Vo(a){return a.J;}
function Dt(a){return N(a);}
function AFm(a,b){Ic(a,b);}
function AFK(a,b,c){T0(a,b,c);return a;}
function KD(a,b,c){var d,e,f;if(b>=0&&b<=a.J){a:{if(c===null)c=B(27);else if(FJ(c))break a;Ic(a,a.J+I(c)|0);d=a.J-1|0;while(d>=b){a.w.data[d+I(c)|0]=a.w.data[d];d=d+(-1)|0;}a.J=a.J+I(c)|0;d=0;while(d<I(c)){e=a.w.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new Gg;U(c);J(c);}
var D3=F(Gj);
var X1=F(D3);
function AOh(a){var b=new X1();ABJ(b,a);return b;}
function ABJ(a,b){Ba(a,b);}
var WF=F(D3);
function AOi(a){var b=new WF();AB0(b,a);return b;}
function AB0(a,b){Ba(a,b);}
var DD=F(FN);
function AOj(){var a=new DD();Yg(a);return a;}
function Yg(a){U(a);}
var Bh=F(DD);
function AND(a){var b=new Bh();AJ9(b,a);return b;}
function AJ9(a,b){Ba(a,b);}
var QH=F(0);
var CO=F(0);
function AKo(b){var c;c=new N9;c.r6=b;return c;}
function Dy(b,c){if(b!==null)b.gN();return c;}
var MW=F(0);
function Hj(){var a=this;C.call(a);a.jO=0;a.i6=0;}
var AOk=0;function HC(a){AOk=AOk-1|0;}
function Fh(a,b,c){HY(a,VY(b,c,400,0));}
function OY(){var a=this;Hj.call(a);a.hU=null;a.bc=null;a.kL=null;}
function D8(a){var b,c,d;b=a.bc;c=a.jO;d=a.i6;b.clearRect(0.0,0.0,c,d);}
function Po(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bc;d="center";c.textAlign=d;break a;case 2:c=a.bc;d="right";c.textAlign=d;break a;default:break a;}d=a.bc;c="left";d.textAlign=c;}}
function Dx(a,b){HY(a,b.k3);}
function HY(a,b){var c;if(!(a.kL==b?1:0)){c=a.bc;a.kL=b;c.font=b;}}
function VY(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Co(a,b,c,d){var e,f,g;e=a.bc;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Ye(a,b){var c,d;if(!b){c=a.bc;d="alphabetic";c.textBaseline=d;}else{d=a.bc;c="top";d.textBaseline=c;}}
function Dk(a,b){var c;c=$rt_ustr(b);return a.bc.measureText(c).width;}
function JO(a,b,c,d){var e,f;e=a.bc;f=$rt_ustr(Fb(WW([35,FS(b/16|0),FS(b%16|0),FS(c/16|0),FS(c%16|0),FS(d/16|0),FS(d%16|0)])));e.fillStyle=f;}
var U8=F();
var Y$=F();
function FX(b,c){if(b===c)return 1;return b!==null?b.d1(c):c!==null?0:1;}
function Cf(b){if(b!==null)return b;b=new FR;Ba(b,B(29));J(b);}
var Bd=F(0);
function QQ(){C.call(this);this.o3=null;}
var BA=F(0);
var Xl=F();
var Va=F(0);
function Im(b,c,d){var e;e=new J_;b=Ft(B(39),b);e.oE=B(40);e.nC=b;e.ny=c;e.mf=d;return e;}
var VI=F();
function ADD(b,c){return {style:b,weight:c};}
var BQ=F(0);
function QR(){C.call(this);this.pO=null;}
function Z6(a,b){var c,d,e;c=a.pO;d=0;while(d<b.length){e=b[d];(DI()).fonts.add(e);d=d+1|0;}c.qE=1;b=c.nK;if(b!==null)Xb(b);}
var QP=F();
function AJP(a,b){$rt_globals.console.info("font load error"+b);}
var YE=F();
var Wj=F();
function Na(b,c){var d,e,f;d=(DI()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(DI()).getElementById($rt_ustr(b)).appendChild(d);}
function Vg(){return (DI()).createElement("canvas");}
function AG6(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var Z0=F();
var Lu=F();
function AGR(a,b){var c;c=new Bh;Ba(c,$rt_str(b.message));J(c);}
var SB=F();
function EZ(b){return $rt_str(b);}
function J_(){var a=this;C.call(a);a.oE=null;a.nC=null;a.ny=null;a.mf=0;}
var Il=F(0);
var Wx=F();
function AKY(a,b){return a.rQ(b);}
function ABT(a){return a.tf();}
var W0=F();
var E$=F(0);
var PV=F();
var CM=F();
var AOl=null;var AOm=null;var AOn=null;var AOo=null;var AOp=null;var AOq=null;var AOr=null;var AOs=null;var AOt=null;var AOu=null;function TC(b){var c,d;c=new Bx;d=BN(1);d.data[0]=b;Gs(c,d);return c;}
function Ko(b){return b>=65536&&b<=1114111?1:0;}
function Cr(b){return (b&64512)!=55296?0:1;}
function CK(b){return (b&64512)!=56320?0:1;}
function Ks(b){return !Cr(b)&&!CK(b)?0:1;}
function Gr(b,c){return Cr(b)&&CK(c)?1:0;}
function D5(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function GV(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Ho(b){return (56320|b&1023)&65535;}
function Eu(b){return FQ(b)&65535;}
function FQ(b){if(AOo===null){if(AOr===null)AOr=Yc();AOo=WM((AOr.value!==null?$rt_str(AOr.value):null));}return PE(AOo,b);}
function D9(b){return FP(b)&65535;}
function FP(b){if(AOn===null){if(AOs===null)AOs=YW();AOn=WM((AOs.value!==null?$rt_str(AOs.value):null));}return PE(AOn,b);}
function PE(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BD(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function RD(b,c){if(c>=2&&c<=36){b=M4(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function M4(b){var c,d,e,f,g,h,i,j,k,l;if(AOm===null){if(AOt===null)AOt=WQ();c=(AOt.value!==null?$rt_str(AOt.value):null);d=AIz(FK(c));e=Ij(d);f=BS(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Lo(d)|0;j=j+Lo(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AOm=f;}g=AOm.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BD(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Gi(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function FG(b){var c;if(b<65536){c=BN(1);c.data[0]=b&65535;return c;}return WW([GV(b),Ho(b)]);}
function Ch(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Ks(b&65535))return 19;if(AOp===null){if(AOu===null)AOu=ZT();d=(AOu.value!==null?$rt_str(AOu.value):null);e=R(LE,16384);f=e.data;g=EG(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=I8(L(d,l));if(m==64){l=l+1|0;m=I8(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bc(c,I8(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=I8(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=ADs(k,k+i|0,Zk(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=ADs(k,k+i|0,Zk(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AOp=CV(e,j);}e=AOp.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.nW)o=p+1|0;else{c=d.mn;if(b>=c)return d.mB.data[b-c|0];c=p-1|0;}}return 0;}
function H9(b){a:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function FD(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ch(b)!=16?0:1;}
function Nw(b){switch(Ch(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function OB(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Nw(b);}return 1;}
function U7(){AOl=E($rt_charcls());AOq=R(CM,128);}
function Yc(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function YW(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function WQ(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ZT(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var KM=F(0);
var PD=F(0);
var DV=F(0);
var Y9=F(0);
function DI(){return $rt_globals.window.document;}
var FR=F(Bh);
function LY(){var a=this;C.call(a);a.mp=null;a.mq=null;a.ms=null;}
function AHL(a,b){var c,d,e;c=a.mp;d=a.mq;e=a.ms;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=d.o3;b.nK=c;if(b.qE)Xb(c);}}
var Nm=F(0);
var OP=F(0);
var OH=F(0);
var QB=F(0);
var TL=F(0);
var RE=F(0);
var MI=F(0);
var U_=F();
function AFG(a,b,c){a.yW($rt_str(b),JH(c,"handleEvent"));}
function AF0(a,b,c){a.wC($rt_str(b),JH(c,"handleEvent"));}
function AAX(a,b){return a.rQ(b);}
function AGX(a,b,c,d){a.va($rt_str(b),JH(c,"handleEvent"),d?1:0);}
function AJ7(a,b){return !!a.y0(b);}
function ABV(a){return a.tf();}
function AAn(a,b,c,d){a.xN($rt_str(b),JH(c,"handleEvent"),d?1:0);}
var Bv=F(Bh);
var Gg=F(Bv);
var V9=F();
function W8(){return "ping";}
var MH=F(0);
function PP(){var a=this;C.call(a);a.m4=null;a.op=null;a.q4=null;a.jI=null;a.kS=null;a.cZ=null;a.pV=null;a.k0=null;a.oH=null;a.e8=null;a.gW=0;a.sy=0;a.nQ=null;a.et=null;a.ni=null;a.j3=null;a.o6=0;}
function Yw(a){a.cZ.focus();}
function Wn(a){var b,c,d;b=new KN;c=a.e8;d=a.jI;b.bj=c;b.cH=d;b.u=a;return b;}
function Qj(a){a.sy=$rt_globals.requestAnimationFrame(Be(a.op,"onAnimationFrame"));}
function Fj(a){a.gW=1;}
function Qi(a,b,c){var d,e;a.oH.cU=Cw(b,c);d=a.cZ;e=b;d.width=e;d=a.cZ;e=c;d.height=e;d=a.e8;Bn(d.dm,b,c);e=d.bC;d=d.dm;b=d.a;c=d.b;e.viewport(0,0,b,c);a.et.cu(a.e8.dm,I$(a));a.et.cb();}
function FI(a,b){var c,d,e;c=a.nQ;d=a.cZ;if(FX(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.nQ=b;}
function H8(a){return $rt_globals.performance.now()/1000.0;}
function I$(a){return $rt_globals.window.devicePixelRatio;}
function J$(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))Zx(b,1);else{c=new Tn;d=$rt_globals.window.showDirectoryPicker();e=new Tm;e.mu=b;e.mv=c;d.then(Be(e,"f"),Be(c,"f"));}}
function Ke(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))Zx(b,0);else{c=new TW;d=$rt_globals.window.showOpenFilePicker();e=new TV;e.m1=b;e.m0=c;d.then(Be(e,"f"),Be(c,"f"));}}
function CL(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.o6+1|0;a.o6=e;Ux(a.j3,Ff(e),b);b=a.ni;f=d.length;g=new $rt_globals.Array(f+2|0);h=e;g[0]=h;c=$rt_ustr(c);g[1]=c;h=new $rt_globals.Array();e=0;while(e<f){c=d[e];if(c instanceof Bx)c=$rt_ustr(c);else if(Ka(c,$rt_arraycls($rt_bytecls())))c=c.data.buffer;else if(Ka(c,$rt_arraycls($rt_charcls())))c=c.data.buffer;else if(Ka(c,$rt_arraycls($rt_intcls())))c=c.data.buffer;else{if(!(c instanceof Jt)){b=new BC;c=GT(CA(c));h=new M;O(h);G(G(h,B(41)),c);Ba(b,N(h));J(b);}i=c;c
=i.fB;if(c===null)c=i.eb;}g[e+2|0]=c;if(c instanceof $rt_globals.ArrayBuffer?1:0)h.push(c);e=e+1|0;}b.postMessage(g,h);}
function Oy(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new Os;e.k4=b;b=ZX(c);d.then(Be(e,"f"),Be(b,"f"));}
function Rh(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.m4;b=(FK(b)).data;f=f.decode(b);b=e.writeText(f);e=new Rt;e.oK=c;c=ZX(d);b.then(Be(e,"f"),Be(c,"f"));}
function T_(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function ZX(b){var c;c=new K8;c.oX=b;return c;}
var Cv=F(0);
var Oa=F();
function Ws(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(!Br(B(42),c))d=(AI9(I(c)<=0?B(29):Dc(c,1))).cy(b);else{d=new Ls;FT(d,b);b=$rt_globals.fetch("test.wasm");e=new LC;b=b.then(Be(e,"f"));e=new LB;b=b.then(Be(e,"f"));e=new LA;f=new Lz;b.then(Be(e,"f"),Be(f,"f"));}return d;}
var Bg=F(0);
var WC=F();
var WU=F();
var OM=F(0);
function Sp(){C.call(this);this.l$=null;}
function AEy(a,b){var c,d;c=b;b=a.l$;if(!(!b.et.di(c/1000.0)&&!b.gW)){d=b.e8.dm;if(Bc(d.a,d.b)){b.gW=0;b.et.cb();}}Qj(b);}
function Sk(){C.call(this);this.qR=null;}
function Dw(a){Fj(a.qR);}
var HR=F();
function C$(a,b){var c,d,e;a.i5=0;a.ej=a.p5;a.hD=a.hD+1|0;c=Ff(0);d=JX(a.gT,c);e=d===null?null:d.d9;d=a.gT;if(e!==null)e=Yi(e,b);else{e=R(Cs,1);e.data[0]=b;}Ux(d,c,e);c=new Tx;c.su=a;c.sv=0;c.st=b;return c;}
function NH(){var a=this;HR.call(a);a.c6=null;a.gT=null;a.p5=null;a.ej=null;a.i5=0;a.hD=0;}
function Ds(a){var b,c,d,e,f,g,h,i;if(a.i5)return a.ej;b=a.ej.data.length;c=a.hD;if(b!=c)a.ej=R(Cs,c);b=0;d=a.gT;if(d.eX===null){e=new SC;e.qe=d;d.eX=e;}d=d.eX.hA();while(d.hT()){f=d.gF();g=f.data;h=a.ej;i=g.length;DU(f,0,h,b,i);b=b+i|0;}return a.ej;}
function QW(a,b){var c,d,e;Dw(a.c6);c=(Ds(a)).data;d=c.length;e=0;a:{while(true){if(e>=d)break a;if(c[e].c5(b))break;if(b.lj)break a;e=e+1|0;}return 1;}return 0;}
function JU(a,b,c,d,e){var f,g,h;Dw(a.c6);f=(Ds(a)).data;g=f.length;h=0;while(h<g){if(f[h].dt(b,c,d,e))return 1;h=h+1|0;}return 0;}
function Ou(a,b,c){var d,e,f;Dw(a.c6);d=(Ds(a)).data;e=d.length;f=0;while(f<e){if(d[f].gj(b,c))return 1;f=f+1|0;}return 0;}
var N1=F(0);
function Sl(){C.call(this);this.of=null;}
function ACX(a,b,c){var d,e,f,g;c=a.of;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.cZ){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=I$(c);Qi(c,BU(f.width*g),BU(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Qi(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var Zd=F();
function AGc(b,c){AH9(b,c,AAu());}
function AAu(){return {box:'device-pixel-content-box'};}
function AH9(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cb=F(0);
function Si(){C.call(this);this.lK=null;}
function AHV(a,b){b=a.lK;b.et.cu(b.e8.dm,I$(b));b.et.cb();}
var Jq=F(0);
function Eb(){C.call(this);this.eX=null;}
var D0=F(0);
var T$=F(0);
var Lm=F(0);
function VJ(){var a=this;Eb.call(a);a.c$=null;a.eD=null;a.tr=null;a.fu=0;a.ig=null;}
function AIK(){var a=new VJ();ABc(a);return a;}
function ABc(a){a.tr=null;a.eD=AOv;}
function Ux(a,b,c){var d,e;a.c$=Kp(a,a.c$,b);d=JX(a,b);e=KP(d,c);KP(d,c);a.fu=a.fu+1|0;return e;}
function JX(a,b){var c,d;c=a.c$;while(true){if(c===null)return null;d=ED(a.eD,b,c.dH);if(!d)break;c=d>=0?c.bt:c.bm;}return c;}
function Uu(a,b,c){var d,e,f,g,h;d=R(EB,KI(a));e=d.data;f=0;g=a.c$;a:{while(g!==null){h=ED(a.eD,b,g.dH);if(c)h= -h|0;if(!h){c=f+1|0;e[f]=g;break a;}if(h>=0)g=HV(g,c);else{h=f+1|0;e[f]=g;g=G4(g,c);f=h;}}c=f;}return CV(d,c);}
function Mm(a,b,c){var d,e,f,g,h;d=R(EB,KI(a));e=d.data;f=0;g=a.c$;while(g!==null){h=ED(a.eD,b,g.dH);if(c)h= -h|0;if(h>=0)g=HV(g,c);else{h=f+1|0;e[f]=g;g=G4(g,c);f=h;}}return CV(d,f);}
function SN(a,b){var c,d,e,f,g;c=R(EB,KI(a));d=c.data;e=0;f=a.c$;while(f!==null){g=e+1|0;d[e]=f;f=G4(f,b);e=g;}return CV(c,e);}
function Kp(a,b,c){var d,e;if(b===null){b=new EB;d=null;b.dH=c;b.d9=d;b.dn=1;b.eH=1;return b;}e=ED(a.eD,c,b.dH);if(!e)return b;if(e>=0)b.bt=Kp(a,b.bt,c);else b.bm=Kp(a,b.bm,c);DW(b);return Ii(b);}
function ID(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=ED(a.eD,c,b.dH);if(d<0)b.bm=ID(a,b.bm,c);else if(d>0)b.bt=ID(a,b.bt,c);else{e=b.bt;if(e===null)return b.bm;f=b.bm;g=R(EB,e.dn).data;h=0;while(true){b=e.bm;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bt;while(h>0){h=h+(-1)|0;j=g[h];j.bm=b;DW(j);b=Ii(j);}e.bt=b;e.bm=f;DW(e);b=e;}DW(b);return Ii(b);}
function KI(a){var b;b=a.c$;return b===null?0:b.dn;}
function Sj(){C.call(this);this.p7=null;}
function AIV(a,b){var c,d,e,f,g,h,i,j;c=a.p7.j3;b=b.data;if(!(b===W8()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BC;U(b);J(b);}if(b.length<1){b=new BC;U(b);J(b);}d=Ff(b[0]);e=JX(c,d);if(e===null)c=null;else{c.c$=ID(c,c.c$,d);c.fu=c.fu+1|0;c=e.d9;}c=c;f=R(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;e=b[j];if(typeof e==='string'?1:0)d=EZ(e);else if(e instanceof $rt_globals.ArrayBuffer?1:0){d=new PS;YY(d);d.f6=e;}else d=(e instanceof $rt_globals.File?1:0)?XT(null,e):!(e instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:XT(e,null);g[h]=d;h=j;}c.n(f);}}
var Cs=F(0);
function AJQ(a,b){return 0;}
function ADN(a,b){return 0;}
function ADG(a,b,c,d,e){return 0;}
function Z4(a,b,c,d){return 0;}
function AFz(a,b){return 0;}
function ALm(a,b,c){return 0;}
function ACU(a){return null;}
function ACo(a){}
function AGO(a){}
function Nu(){var a=this;C.call(a);a.fS=null;a.b7=null;a.sS=null;a.cU=null;}
function Lj(){return (DI()).activeElement;}
function CD(a,b,c,d){b.addEventListener($rt_ustr(c),Be(d,"handleEvent"));return Tw(a,b,c,d);}
function X2(a,b,c,d,e){b.addEventListener($rt_ustr(c),Be(d,"handleEvent"),!!e);return Tw(a,b,c,d);}
function Tw(a,b,c,d){var e;e=new NY;e.rF=b;e.rH=c;e.rG=d;return e;}
function QS(a,b){var c;c=new RL;c.qK=b;return c;}
function Ec(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.fS.getBoundingClientRect();e=Cw(BU((b.clientX-d.left)*c),BU((b.clientY-d.top)*c));f=new Bm;g=a.cU;f.a=g.a;f.b=g.b;d=new KK;Ri(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.S=e;d.rn=f;return d;}
function Ut(a,b,c){var d,e,f,g;d=new M2;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Ri(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.lj=0;d.c1=e;d.bq=f;d.c3=c;d.ju=g;return d;}
function Dj(a,b){b.stopPropagation();b.preventDefault();}
function Wu(a,b){var c;c=new T6;c.mK=b;b.onpointerdown=Be(c,"f");c=new T8;c.lM=b;b.onpointerup=Be(c,"f");}
function JD(){var a=this;C.call(a);a.nN=null;a.bx=null;a.bC=null;a.pn=null;a.tb=0;a.hV=null;a.tH=null;a.to=null;a.ss=null;a.e$=null;a.f_=null;a.tw=null;a.gV=null;a.dm=null;a.qA=null;a.el=0;a.h9=0;}
function Gq(a,b,c){return F4(a,b,c,400,0);}
function C_(a,b,c){return KV(a.nN,b,c);}
function Jl(a,b){var c,d,e,f,g;c=a.bC;d=b.b_;e=b.cT;f=b.cC;g=b.ch;c.clearColor(d,e,f,g);a.bC.clear(16384);}
function Cn(a,b){var c;if(b==a.h9)return b;if(!b)a.bC.disable(3042);else{a.bC.enable(3042);a.bC.blendFuncSeparate(770,771,1,1);}c=a.h9;a.h9=b;return c;}
function Bt(a,b,c,d,e){Jx(a,a.hV);Kx(a.hV,a.bC,b,c,d,a.dm);d=a.hV;G5(a.bC,d.p6,e);a.el=IA(a.gV,a.el);}
function IZ(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Jx(a,a.e$);Kx(a.e$,a.bC,b,c,d,a.dm);Re(a.e$,a.bC,f);d=a.e$;j=a.bC;k=e.b_;l=f.bJ;k=k/l;m=e.cT;n=f.cq;m=m/n;l=e.cC/l;n=e.ch/n;o=d.pM;j.uniform4f(o,k,m,l,n);d=a.e$;e=a.bC;G5(e,d.mM,g);G5(e,d.lk,h);d=d.l1;e.uniform2f(d,i,0.0);a.el=IA(a.gV,a.el);}
function Dr(a){var b,c;b=new H7;c=a.pn;b.eg=c;b.fH=c.dv.createTexture();AOw=AOw+1|0;return b;}
function L1(a,b){TN(a.bC,b);}
function Jx(a,b){var c,d;if(b!==a.qA){c=a.bC;d=b.b0;c.useProgram(d);a.qA=b;}}
function YM(){var a=this;JD.call(a);a.sW=null;a.tp=null;}
function AMd(a,b){var c=new YM();AER(c,a,b);return c;}
function AER(a,b,c){var d,e,f,g,h,i,j,k,l;d=new Rk;a.dm=new Bm;a.el=0;a.nN=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(43)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bC=b;a.bx=KV(d,4,4);g=AAi(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BN(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;k=new NZ;Vt();f=AOx;k.dr=b;k.fl=f;k.or=h.length/f.iP|0;k.qu=j.length;l=
b.createBuffer();k.kW=l;b.bindBuffer(34962,l);f=g.data;b.bufferData(34962,f,35044);k.qN=null;l=b.createBuffer();k.ql=l;if(l!==null){b.bindBuffer(34963,l);f=i.data;b.bufferData(34963,f,35044);}l=null;b.bindBuffer(34962,l);l=null;b.bindBuffer(34963,l);a.gV=k;a.tb=FL(e,B(44));f=new N0;f.dv=b;a.pn=f;i=R(DK,6);g=i.data;f=new SM;J2(f,b,B(45),B(46),AOx);e=f.b0;f.p6=b.getUniformLocation(e,"uColor");a.hV=f;g[0]=f;f=ALL(b,B(47));a.tH=f;g[1]=f;f=new Ov;J2(f,b,B(45),B(48),AOx);a.to=f;g[2]=f;f=new RS;QU(f,b,B(49));d=f.b0;f.sf
=b.getUniformLocation(d,"uContrast");a.ss=f;g[3]=f;f=AMe(b);a.e$=f;g[4]=f;f=ANa(b);a.f_=f;g[5]=f;a.tw=i;TN(b,B(50));a.tp=new Rj;a.sW=c;}
function F4(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=a.bx;g=VY(b,c,d,e);HY(f,g);h=f.bc.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Dk(f,B(51));m=Dk(f,B(52));h=new Ju;h.kd=b;h.rS=c;n=c|0;if(n!==c){b=new M;O(b);Fz(G(b,B(53)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.mi=n;h.rZ=d;h.sr=e;h.fE=i;h.eN=j;h.rO=l;h.j4=k;h.k3=g;h.nH=EK(i);h.tj=EK(h.eN);d=m*32.0|0;n=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;a:{h.rW=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(54);}h.rD=b;return h;}
function C3(){C.call(this);this.X=null;}
function FT(a,b){a.X=b;}
var HQ=F();
var AOv=null;function ED(a,b,c){return b.gs(c);}
function Xq(){AOv=new HQ;}
function S6(){C.call(this);this.le=null;}
function AHn(a,b){var c;c=a.le;if(QW(c.b7,Ut(c,b,1)))Dj(c,b);}
function S7(){C.call(this);this.oJ=null;}
function AHy(a,b){var c;c=a.oJ;if(QW(c.b7,Ut(c,b,0)))Dj(c,b);}
function S8(){C.call(this);this.lW=null;}
function AGe(a,b){var c,d,e,f,g,h;c=a.lW;if(c.cU!==null){d=Ec(c,b);e=c.b7;Dw(e.c6);f=(Ds(e)).data;g=f.length;h=0;a:{while(h<g){if(f[h].dL(d))break a;h=h+1|0;}}Dj(c,b);}}
function S9(){C.call(this);this.qL=null;}
function AFH(a,b){var c,d;c=a.qL;b.button;if(c.cU!==null){d=Ec(c,b);JU(c.b7,d,b.button,1,1);}}
function S$(){C.call(this);this.n4=null;}
function AF4(a,b){var c,d;c=a.n4;b.button;if(c.cU!==null){d=Ec(c,b);if(JU(c.b7,d,b.button,0,1))Dj(c,b);}}
function S_(){C.call(this);this.lt=null;}
function AH7(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.lt;if(c.cU!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.b7;f=Ec(c,b);g=d;h=g*b.deltaX;i=g*b.deltaY;Dw(e.c6);j=(Ds(e)).data;k=j.length;l=0;b:{while(l<k){if(j[l].f0(f,h,i))break b;l=l+1|0;}}Dj(c,b);}}
function Ta(){C.call(this);this.q3=null;}
function AEh(a,b){var c,d;c=a.q3;if(c.cU!==null){d=Ec(c,b);if(JU(c.b7,d,b.button,1,2))Dj(c,b);}}
function Tb(){C.call(this);this.oh=null;}
function AK5(a,b){var c,d,e,f,g,h,i;c=a.oh;if(c.cU!==null){d=Ec(c,b);e=c.b7;Dw(e.c6);f=(Ds(e)).data;g=f.length;h=0;a:{while(h<g){if(f[h].fp(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Dj(c,b);}}
function Tc(){C.call(this);this.lF=null;}
function ADC(a,b){var c,d,e;b=a.lF.b7;c=(Ds(b)).data;d=c.length;e=0;while(e<d){c[e].nx();e=e+1|0;}Dw(b.c6);}
function Td(){C.call(this);this.qb=null;}
function AI2(a,b){var c,d,e;b=a.qb.b7;c=(Ds(b)).data;d=c.length;e=0;while(e<d){c[e].iU();e=e+1|0;}Dw(b.c6);}
function ZP(){C.call(this);this.pK=null;}
function ALq(a){var b=new ZP();AA3(b,a);return b;}
function AA3(a,b){a.pK=b;}
function AKI(a,b){var c;c=a.pK;if(c.cU!==null)Ec(c,b);}
function ZQ(){C.call(this);this.oY=null;}
function AL$(a){var b=new ZQ();ALk(b,a);return b;}
function ALk(a,b){a.oY=b;}
function AFU(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.oY;if(Lj()===c.fS){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Ds(c.b7)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].jv();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.b7.c6;m=new LR;m.qp=k;m.qq=l;g.getAsString(Be(m,"accept"));Dj(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);m=new M;O(m);G(G(G(G(m,B(55)),k),B(56)),g);$rt_globals.console.info($rt_ustr(N(m)));}e=e+1|0;}}}
function ZR(){C.call(this);this.kG=null;}
function ANp(a){var b=new ZR();AGL(b,a);return b;}
function AGL(a,b){a.kG=b;}
function AGh(a,b){var c;c=a.kG;if(Lj()===c.fS&&Ou(c.b7,QS(c,b),0))Dj(c,b);}
function ZS(){C.call(this);this.qt=null;}
function AMi(a){var b=new ZS();AH6(b,a);return b;}
function AH6(a,b){a.qt=b;}
function AHO(a,b){var c;c=a.qt;if(Lj()===c.fS&&Ou(c.b7,QS(c,b),1))Dj(c,b);}
var Q$=F(0);
var Rk=F();
function KV(a,b,c){var d,e,f;d=new OY;AOk=AOk+1|0;d.jO=b;d.i6=c;e=(DI()).createElement("canvas");d.hU=e;f=b;e.width=f;e=d.hU;f=c;e.height=f;d.bc=d.hU.getContext("2d");return d;}
var Rj=F();
function AE$(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function KN(){var a=this;C.call(a);a.bj=null;a.cH=null;a.u=null;}
function N9(){C.call(this);this.r6=null;}
function Bm(){var a=this;C.call(a);a.a=0;a.b=0;}
function Cw(a,b){var c=new Bm();V8(c,a,b);return c;}
function V8(a,b,c){a.a=b;a.b=c;}
function C0(a,b){a.a=b.a;a.b=b.b;}
function Bn(a,b,c){a.a=b;a.b=c;}
function Z7(a){var b,c,d;b=a.a;c=a.b;d=new M;O(d);T(G(T(G(d,B(57)),b),B(58)),c);return N(d);}
var YL=F();
var Vw=F(0);
function N0(){C.call(this);this.dv=null;}
function J1(){var a=this;C.call(a);a.b0=null;a.tl=null;}
function XS(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(59):B(60);d=$rt_str(b.getShaderInfoLog(e));g=new M;O(g);G(G(g,f),d);f=N(g);b.deleteShader(e);Bq(Bw(),f);b=new Bh;Ba(b,f);J(b);}
function DK(){var a=this;J1.call(a);a.lE=null;a.mL=null;a.oO=null;}
function AOy(a,b,c,d){var e=new DK();J2(e,a,b,c,d);return e;}
function J2(a,b,c,d,e){var f,g,h,i,j,k;a.tl=e;f=XS(b,35633,c);d=XS(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.b0=g;h=e.oB.data;i=h.length;j=0;while(j<i){c=h[j];d=a.b0;k=c.fX;c=c.mW;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.b0;b.linkProgram(c);if(b.getProgramParameter(c,35714)){TN(b,B(61));a.oO=new Bm;c=a.b0;a.lE=b.getUniformLocation(c,"uResolution");c=a.b0;a.mL=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bh;c=new M;O(c);G(G(c,B(62)),d);Ba(b,N(c));J(b);}
function Wd(a,b,c){var d,e,f;d=a.oO;if(!(d.a==c.a&&d.b==c.b?1:0)){C0(d,c);d=a.lE;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function Kx(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.mL;b.uniform4f(e,i,l,h,j);Wd(a,b,f);}
function SM(){DK.call(this);this.p6=null;}
function Ea(){DK.call(this);this.n0=null;}
function ALL(a,b){var c=new Ea();QU(c,a,b);return c;}
function AOz(a,b,c){var d=new Ea();QY(d,a,b,c);return d;}
function QU(a,b,c){QY(a,b,B(45),c);}
function QY(a,b,c,d){Vt();J2(a,b,c,d,AOx);c=a.b0;a.n0=b.getUniformLocation(c,"sDiffuse");}
function Re(a,b,c){var d;d=a.n0;b.uniform1i(d,0);b.activeTexture(33984);c=c.fH;b.bindTexture(3553,c);}
var Ov=F(DK);
function RS(){Ea.call(this);this.sf=null;}
function X6(){var a=this;Ea.call(a);a.pM=null;a.mM=null;a.lk=null;a.l1=null;}
function AMe(a){var b=new X6();AH1(b,a);return b;}
function AH1(a,b){var c;QY(a,b,B(63),B(64));c=a.b0;a.pM=b.getUniformLocation(c,"uTexTransform");c=a.b0;a.mM=b.getUniformLocation(c,"uColor");c=a.b0;a.lk=b.getUniformLocation(c,"uBgColor");c=a.b0;a.l1=b.getUniformLocation(c,"uContrast");}
function VK(){var a=this;Ea.call(a);a.qO=null;a.qM=null;a.m9=null;}
function ANa(a){var b=new VK();AC_(b,a);return b;}
function AC_(a,b){var c,d;QU(a,b,B(65));c=a.b0;a.qO=b.getUniformLocation(c,"uColorB");d=a.b0;a.qM=b.getUniformLocation(d,"uColorF");d=a.b0;a.m9=b.getUniformLocation(d,"uContrast");}
var Pk=F(0);
var ZY=F(0);
function G5(b,c,d){var e,f,g,h;e=d.b_;f=d.cT;g=d.cC;h=d.ch;b.uniform4f(c,e,f,g,h);}
function TN(b,c){var d,e;d=b.getError();if(d){b=Bw();e=new M;O(e);T(G(e,c),d);Bq(b,N(e));}}
function NY(){var a=this;C.call(a);a.rF=null;a.rH=null;a.rG=null;}
function NZ(){var a=this;C.call(a);a.dr=null;a.fl=null;a.kW=null;a.qN=null;a.ql=null;a.or=0;a.qu=0;}
function IA(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.fl.oT;d=a.dr;b=b^c;e=0;while(b){f=1<<e;if(b&f){if(!(c&f))d.disableVertexAttribArray(e);else d.enableVertexAttribArray(e);b=b^f;}e=e+1|0;}b=0;d=a.dr;g=a.kW;d.bindBuffer(34962,g);h=a.fl.ks.data;f=h.length;i=0;while(i<f){d=h[i];g=a.dr;j=d.fX;k=d.d8;l=a.fl.iP*4|0;e=b*4|0;g.vertexAttribPointer(j,k,5126,!!0,l,e);b=b+d.d8|0;i=i+1|0;}a:{d=a.qN;if(d!==null){b=0;a.dr.bindBuffer(34962,d);h=a.fl.nM.data;e=h.length;f=0;while(true){if(f>=e)break a;d=h[f];g=a.dr;i=d.fX;j=d.d8;m
=d.ml;n=a.fl.mH;g.vertexAttribPointer(i,j,5121,!!m,n,b);b=b+d.d8|0;f=f+1|0;}}}d=a.ql;if(d===null){b=a.or;if(b>0)a.dr.drawArrays(4,0,b);}else{a.dr.bindBuffer(34963,d);d=a.dr;f=a.qu;d.drawElements(4,f,5123,0);}return c;}
function Cd(){var a=this;C.call(a);a.rA=null;a.b9=0;}
function Dn(a,b,c){a.rA=b;a.b9=c;}
function AI_(a){return a.b9;}
function AAP(a,b){return a!==b?0:1;}
function Hq(a){var b;b=CA(a);if(!PR(RV(b),E(Cd)))b=RV(b);return b;}
function UM(a,b){var c,d,e;if(Hq(b)===Hq(a))return BD(a.b9,b.b9);c=new BC;d=Hq(a);b=Hq(b);e=new M;O(e);G(G(G(G(e,B(66)),d),B(67)),b);Ba(c,N(e));J(c);}
function AFf(a,b){return UM(a,b);}
function F0(){var a=this;Cd.call(a);a.oB=null;a.ks=null;a.nM=null;a.iP=0;a.mH=0;a.oT=0;}
var AOx=null;var AOA=null;function Vt(){Vt=Bk(F0);AEJ();}
function AEJ(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new F0;c=R(Dz,2);d=c.data;AJZ();d[0]=AOB;d[1]=AOC;Vt();Dn(b,B(68),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];U$();switch(AOD.data[l.jZ.b9]){case 1:f=f+l.d8|0;h=h+1|0;break a;case 2:e=e+l.d8|0;g=g+1|0;break a;default:}}i=i|1<<l.fX;k=k+1|0;}b.oB=c;b.iP=e;b.mH=f;b.oT=i;c=R(Dz,g);m=c.data;b.ks=c;c=R(Dz,h);n=c.data;b.nM=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];U$();switch(AOD.data[l.jZ.b9]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}AOx=b;c=R(F0,1);c.data[0]=b;AOA=c;}
var JL=F();
var AOE=null;var AOF=null;function Bw(){if(AOE===null)AOE=AGq(AOG,0);return AOE;}
function J4(){if(AOF===null)AOF=AGq(AOH,0);return AOF;}
function DU(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Yf(b)&&(e+f|0)<=Yf(d)){a:{b:{if(b!==d){g=GZ(CA(b));h=GZ(CA(d));if(g!==null&&h!==null){if(g===h)break b;if(!GL(g)&&!GL(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.d7;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&XY(n.constructor,o)?1:0)){O_(b,c,d,e,j);b=new Hp;U(b);J(b);}j=j+1|0;k=m;}O_(b,c,d,e,f);return;}if(!GL(g))break a;if(GL(h))break b;else break a;}b=new Hp;U(b);J(b);}}O_(b,c,d,
e,f);return;}b=new Hp;U(b);J(b);}b=new Bv;U(b);J(b);}d=new FR;Ba(d,B(69));J(d);}
function O_(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function E1(){return Long_fromNumber(new Date().getTime());}
function Yl(){return AN2($rt_globals.performance.now()*1000000.0);}
var Kw=F(0);
var Ql=F(0);
var Ru=F(0);
var FE=F();
function H5(){FE.call(this);this.rd=null;}
function WD(){var a=this;H5.call(a);a.s_=0;a.i1=0;a.g7=null;a.ix=null;a.pe=null;}
function AGq(a,b){var c=new WD();AJL(c,a,b);return c;}
function AJL(a,b,c){a.rd=b;b=new M;O(b);a.g7=b;a.ix=BN(32);a.s_=c;Wr();a.pe=AOI;}
function Qw(a,b,c,d){var e,$$je;e=a.rd;if(e===null)a.i1=1;if(!(a.i1?0:1))return;a:{try{e.io(b,c,d);break a;}catch($$e){$$je=DS($$e);if($$je instanceof Hc){}else{throw $$e;}}a.i1=1;}}
function L_(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=Xg(b,c,d-c|0);e=EG(Bf(16,Z(e.length,1024)));g=W7(e,0,e.data.length);h=a.pe;i=new Ns;b=EG(1);j=b.data;j[0]=63;Gf();k=AOJ;i.jK=k;i.i7=k;c=j.length;if(c&&c>=i.ku){i.rv=h;i.mU=b.eG();i.s5=2.0;i.ku=4.0;i.mj=BN(512);i.lr=EG(512);k=AOK;if(k===null){i=new BC;Ba(i,B(70));J(i);}i.jK=k;i.i7=k;a:while(true){if(i.g4==3){f=new DX;U(f);J(f);}i.g4=2;b:{while(true){try{k=Vl(i,f,g);}catch($$e){$$je=DS($$e);if($$je instanceof Bh){f=$$je;break a;}else{throw $$e;}}if(G3(k))
{d=BW(f);if(d<=0)break b;k=DB(d);}else if(Gc(k))break;h=!Kl(k)?i.jK:i.i7;c:{if(h!==AOK){if(h===AOL)break c;else break b;}d=BW(g);b=i.mU;l=b.data.length;if(d<l){k=AOM;break b;}Tz(g,b,0,l);}Ei(f,f.M+IE(k)|0);}}l=Gc(k);Qw(a,e,0,g.M);L6(g);if(!l){while(true){d=i.g4;if(d!=2&&d!=4){f=new DX;U(f);J(f);}f=AON;if(f===f)i.g4=3;l=Gc(f);Qw(a,e,0,g.M);L6(g);if(!l)break;}return;}}J(ACp(f));}i=new BC;Ba(i,B(71));J(i);}
function Bq(a,b){var c,d,e,f,g,h,i,j;BB(BR(a.g7,b),10);b=a.g7;c=b.J;d=a.ix;if(c>d.data.length)d=BN(c);e=0;f=0;if(e>c){b=new Bv;Ba(b,B(72));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.w.data;j=e+1|0;g[f]=i[e];f=h;e=j;}L_(a,d,0,c);a.g7.J=0;}
function Fs(){FE.call(this);this.sY=null;}
function Uw(a){a.sY=EG(1);}
var JK=F(Fs);
var AOG=null;function AE3(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Yk(){var b;b=new JK;Uw(b);AOG=b;}
function Dz(){var a=this;Cd.call(a);a.mW=null;a.jZ=null;a.d8=0;a.ml=0;a.fX=0;}
var AOB=null;var AOC=null;var AOO=null;function AJZ(){AJZ=Bk(Dz);AD4();}
function AMq(a,b,c,d,e,f,g){var h=new Dz();SG(h,a,b,c,d,e,f,g);return h;}
function SG(a,b,c,d,e,f,g,h){AJZ();Dn(a,b,c);a.mW=d;a.jZ=e;a.d8=f;a.ml=g;a.fX=h;}
function AD4(){var b;b=new Dz;XD();SG(b,B(73),0,B(74),AOP,2,0,0);AOB=b;b=AMq(B(75),1,B(76),AOP,2,0,1);AOC=b;AOO=H(Dz,[AOB,b]);}
function HZ(){var a=this;C.call(a);a.rl=null;a.si=null;}
function Yy(b){var c,d;if(FJ(b))J(Ww(b));if(!YA(L(b,0)))J(Ww(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(YA(d))break a;else J(Ww(b));}}c=c+1|0;}}
function YA(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var KA=F(HZ);
var AOI=null;function Wr(){Wr=Bk(KA);AC8();}
function YO(a){var b,c;b=new Qx;b.d4=B(77);Gf();c=AOJ;b.fL=c;b.jU=c;b.r8=a;b.ky=0.3333333432674408;b.sw=0.5;b.lB=EG(512);b.oI=BN(512);return b;}
function AC8(){var b,c,d,e,f;b=new KA;Wr();c=R(Bx,0);d=c.data;Yy(B(78));e=d.length;f=0;while(f<e){Yy(d[f]);f=f+1|0;}b.rl=B(78);b.si=c.eG();AOI=b;}
var IU=F();
var AOQ=null;var AOD=null;function U$(){U$=Bk(IU);AHf();}
function AHf(){var b,c;XD();b=BS((AOR.eG()).data.length);c=b.data;AOD=b;c[AOS.b9]=1;c[AOP.b9]=2;XF();c=BS((AOT.eG()).data.length);b=c.data;AOQ=c;b[AOU.b9]=1;b[AOV.b9]=2;}
function Nd(){var a=this;C.call(a);a.ev=null;a.km=null;a.h_=null;a.o2=null;a.mG=null;a.mP=null;}
function WG(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.ev,b,c));}
function Ld(a,b){var c,d,e,f,g,h,i,$$je;c=new Bx;d=b;while(a.km[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.ev,b,d));f=e.data;En();d=f.length;Wr();g=AOI;h=W7(e,0,d);a:{try{i=YO(g);Gf();g=VD(XV(Zg(i,AOK),AOK),h);break a;}catch($$e){$$je=DS($$e);if($$je instanceof E9){g=$$je;}else{throw $$e;}}h=new TF;h.hu=1;h.hR=1;h.f$=B(79);h.i8=g;J(h);}if(!g.M&&g.cR==g.kg)c.bV=g.fW;else{f=BN(BW(g));e=f.data;c.bV=f;LK(g,f,0,e.length);}return c;}
function Ll(a,b){var c,d,e;c=new Bx;d=b>>>1|0;e=d;while(a.h_[e]){e=e+1|0;}d=e-d|0;Gs(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.ev,b,d)));return c;}
var F3=F(Cd);
var AOS=null;var AOP=null;var AOR=null;function XD(){XD=Bk(F3);ACE();}
function AC4(a,b){var c=new F3();YP(c,a,b);return c;}
function YP(a,b,c){XD();Dn(a,b,c);}
function ACE(){var b;AOS=AC4(B(80),0);b=AC4(B(81),1);AOP=b;AOR=H(F3,[AOS,b]);}
var Fw=F(Cd);
var AOU=null;var AOV=null;var AOT=null;function XF(){XF=Bk(Fw);ADf();}
function AK9(a,b){var c=new Fw();VA(c,a,b);return c;}
function VA(a,b,c){XF();Dn(a,b,c);}
function ADf(){var b;AOU=AK9(B(82),0);b=AK9(B(83),1);AOV=b;AOT=H(Fw,[AOU,b]);}
var Sq=F(DD);
var BC=F(Bh);
function YD(){BC.call(this);this.rz=null;}
function Ww(a){var b=new YD();AJm(b,a);return b;}
function AJm(a,b){U(a);a.rz=b;}
var Kz=F(0);
function T6(){C.call(this);this.mK=null;}
function AIA(a,b){a.mK.setPointerCapture(b.pointerId);}
function T8(){C.call(this);this.lM=null;}
function ABw(a,b){a.lM.releasePointerCapture(b.pointerId);}
var WY=F();
function Jz(){return AKZ();}
function AKZ(){return Math.random();}
function Z(b,c){if(b<c)c=b;return c;}
function Bf(b,c){if(b>c)c=b;return c;}
function KW(b){if(b<=0)b= -b|0;return b;}
var Vk=F();
function Vc(b,c){var d,e,f,g;b=b.data;d=BN(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Zk(b,c){var d,e,f,g;b=b.data;d=EG(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function CV(b,c){var d,e,f,g;d=b.data;e=Rv(GZ(CA(b)),c);f=Z(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function VW(b){var c,d,e;if(b===null)return B(27);c=new M;O(c);BR(c,B(84));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BR(c,B(85));G(c,e[d]);d=d+1|0;}BR(c,B(86));return N(c);}
function Yd(b){var c,d,e;if(b===null)return B(27);c=new M;O(c);BR(c,B(84));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BR(c,B(85));T(c,e[d]);d=d+1|0;}BR(c,B(86));return N(c);}
function AIP(b){var c,d,e;if(b===null)return B(27);c=new M;O(c);BR(c,B(84));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BR(c,B(85));Fz(c,e[d]);d=d+1|0;}BR(c,B(86));return N(c);}
function AK_(b){var c,d,e;if(b===null)return B(27);c=new M;O(c);BR(c,B(84));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BR(c,B(85));No(c,e[d]);d=d+1|0;}BR(c,B(86));return N(c);}
function Ie(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BC;U(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Wg(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AOv;e=R(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Z(j,h+f|0);l=h+(2*f|0)|0;m=Z(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.kh(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function XP(b,c){return X4(b,0,b.data.length,c);}
function X4(b,c,d,e){var f,g,h,i,j;f=BD(c,d);if(f>0){g=new BC;U(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function F9(){var a=this;C.call(a);a.kg=0;a.M=0;a.cR=0;a.f4=0;}
function SD(a,b){a.f4=(-1);a.kg=b;a.cR=b;}
function Ei(a,b){var c,d,e;if(b>=0&&b<=a.cR){a.M=b;if(b<a.f4)a.f4=0;return a;}c=new BC;d=a.cR;e=new M;O(e);BB(T(G(T(G(e,B(87)),b),B(88)),d),93);Ba(c,N(e));J(c);}
function BW(a){return a.cR-a.M|0;}
function Dm(a){return a.M>=a.cR?0:1;}
var Pt=F(0);
var Jv=F(F9);
function ZG(b){var c,d;if(b>=0)return AHA(0,b,BN(b),0,b,0);c=new BC;d=new M;O(d);T(G(d,B(89)),b);Ba(c,N(d));J(c);}
function Xg(b,c,d){return AHA(0,b.data.length,b,c,c+d|0,0);}
function LK(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bv;i=new M;O(i);T(G(T(G(i,B(90)),g),B(91)),f);Ba(h,N(i));J(h);}if(BW(a)<d){j=new Kc;U(j);J(j);}if(d<0){j=new Bv;k=new M;O(k);G(T(G(k,B(92)),d),B(93));Ba(j,N(k));J(j);}g=a.M;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.fW.data[m+a.j7|0];l=l+1|0;c=n;m=o;}a.M=g+d|0;return a;}}b=b.data;j=new Bv;d=b.length;k=new M;O(k);BB(T(G(T(G(k,B(94)),c),B(88)),d),41);Ba(j,N(k));J(j);}
function IC(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.kn){b=new HF;U(b);J(b);}e=d-c|0;if(BW(a)<e){b=new GN;U(b);J(b);}if(c>I(b)){f=new Bv;d=I(b);b=new M;O(b);BB(T(G(T(G(b,B(95)),c),B(88)),d),41);Ba(f,N(b));J(f);}if(d>I(b)){f=new Bv;c=I(b);b=new M;O(b);T(G(T(G(b,B(96)),d),B(97)),c);Ba(f,N(b));J(f);}if(c>d){b=new Bv;f=new M;O(f);T(G(T(G(f,B(95)),c),B(98)),d);Ba(b,N(f));J(b);}g=a.M;while(c<d){h=g+1|0;i=c+1|0;Pv(a,g,L(b,c));g=h;c=i;}a.M=a.M+e|0;return a;}
function In(){var a=this;F9.call(a);a.i0=0;a.jC=null;a.sJ=null;}
function W7(b,c,d){var e,f,g;e=b.data;f=new Ty;g=e.length;d=c+d|0;SD(f,g);AEO();f.sJ=AOW;f.i0=0;f.jC=b;f.M=c;f.cR=d;f.sN=0;f.kR=0;return f;}
function Tz(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.kR){e=new HF;U(e);J(e);}if(BW(a)<d){e=new GN;U(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bv;j=new M;O(j);T(G(T(G(j,B(99)),h),B(91)),g);Ba(i,N(j));J(i);}if(d<0){e=new Bv;i=new M;O(i);G(T(G(i,B(92)),d),B(93));Ba(e,N(i));J(e);}h=a.M;k=h+a.i0|0;l=0;while(l<d){b=a.jC.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.M=h+d|0;return a;}}b=b.data;e=new Bv;d=b.length;i=new M;O(i);BB(T(G(T(G(i,B(94)),c),B(88)),d),41);Ba(e,N(i));J(e);}
function L6(a){a.M=0;a.cR=a.kg;a.f4=(-1);return a;}
function GD(){C.call(this);this.tB=null;}
var AOL=null;var AOK=null;var AOJ=null;function Gf(){Gf=Bk(GD);AFX();}
function Zs(a){var b=new GD();Yv(b,a);return b;}
function Yv(a,b){Gf();a.tB=b;}
function AFX(){AOL=Zs(B(100));AOK=Zs(B(101));AOJ=Zs(B(102));}
var Ls=F(C3);
function AJ8(a,b){return 0;}
function AFQ(a){}
function AHF(a,b,c){}
var ZH=F();
function AI9(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(103)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(JF(b)){case -1519338717:if(!Br(b,B(104)))break a;d=1;break a;case -1509980539:if(!Br(b,B(105)))break a;d=10;break a;case -811765794:if(!Br(b,B(106)))break a;d=4;break a;case -785237654:if(!Br(b,B(107)))break a;d=8;break a;case -631889171:if(!Br(b,B(108)))break a;d=6;break a;case 3343967:if(!Br(b,B(109)))break a;d=7;break a;case 3556498:if(!Br(b,B(110)))break a;d=3;break a;case 485517998:if
(!Br(b,B(111)))break a;d=5;break a;case 544901384:if(!Br(b,B(112)))break a;d=2;break a;case 1030621992:if(!Br(b,B(113)))break a;d=12;break a;case 1554501643:if(!Br(b,B(114)))break a;d=11;break a;case 1609169232:if(!Br(b,B(115)))break a;d=9;break a;default:}}b:{switch(d){case 1:break;case 2:case 3:b=new Qd;break b;case 4:b=new Qc;break b;case 5:b=new Qb;break b;case 6:case 7:b=new Qa;break b;case 8:b=new P_;break b;case 9:b=new P$;break b;case 10:b=new P9;break b;case 11:b=new P8;break b;case 12:b=new P7;break b;default:b
=new Ot;break b;}b=new Qe;}return b;}
var Xe=F();
var Iv=F(Jv);
function WZ(){var a=this;Iv.call(a);a.kn=0;a.j7=0;a.fW=null;}
function AHA(a,b,c,d,e,f){var g=new WZ();ALe(g,a,b,c,d,e,f);return g;}
function ALe(a,b,c,d,e,f,g){SD(a,c);a.M=e;a.cR=f;a.j7=b;a.kn=g;a.fW=d;}
function Pv(a,b,c){a.fW.data[b+a.j7|0]=c;}
function Ji(){var a=this;C.call(a);a.rv=null;a.mU=null;a.s5=0.0;a.ku=0.0;a.jK=null;a.i7=null;a.g4=0;}
function J8(){var a=this;C.call(a);a.fm=0;a.gG=0;}
var AON=null;var AOM=null;function Vr(a,b){var c=new J8();VT(c,a,b);return c;}
function VT(a,b,c){a.fm=b;a.gG=c;}
function G3(a){return a.fm?0:1;}
function Gc(a){return a.fm!=1?0:1;}
function I_(a){return !Oo(a)&&!Kl(a)?0:1;}
function Oo(a){return a.fm!=2?0:1;}
function Kl(a){return a.fm!=3?0:1;}
function IE(a){var b;if(I_(a))return a.gG;b=new Fv;U(b);J(b);}
function DB(b){return Vr(2,b);}
function R7(a){var b,c;switch(a.fm){case 0:b=new N2;U(b);J(b);case 1:b=new TM;U(b);J(b);case 2:b=new RZ;c=a.gG;U(b);b.tV=c;J(b);case 3:b=new NU;c=a.gG;U(b);b.tO=c;J(b);default:}}
function Wf(){AON=Vr(0,0);AOM=Vr(1,0);}
var Vh=F();
var JJ=F(0);
var LC=F();
function ADo(a,b){return b.arrayBuffer();}
var LB=F();
function AGW(a,b){var c,d;c=new Nb;d=new M_;return $rt_globals.WebAssembly.instantiate(b,AE9(Be(c,"f"),Be(d,"f")));}
var LA=F();
function AHt(a,b){ABq(b);}
var Lz=F();
function ABZ(a,b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
var Qe=F();
function AG$(a,b){return ANt(b);}
var Qd=F();
function AA7(a,b){return ALO(b);}
var Qc=F();
function AEn(a,b){var c,d;c=new SJ;ER(c,b);c.de=Vn();c.cs=Vn();c.jz=new Bm;c.j0=new Bm;c.gv=Hd(b.u);c.dT=AA4(b.bj);C$(b.cH,c);PQ(c.cs);b=Gq(b.bj,B(116),25);c.kt=b;c.dT.hx=b;Bu(c.f8,CW(43));LV(c,c.de);LV(c,c.cs);b=c.de;b.hI=new Qf;d=c.cs;d.hI=new Qh;d.h1=new TI;d.pv=new TJ;Jh(b,(LP(0)).hc);Jh(c.cs,(LP(0)).hc);return c;}
var Qb=F();
function AEj(a,b){var c,d;c=new TY;ER(c,b);c.qH=new Bm;c.oL=new Bm;c.q7=new Bm;c.me=Hd(b.u);c.cx=AJ0(b.bj);C$(b.cH,c);b=Gq(b.bj,B(116),25);d=c.cx;C1();OE(d,b,AOX);Bu(c.f8,CW(43));return c;}
var Qa=F();
function AEP(a,b){var c,d,e,f;c=new Ni;FT(c,b);c.e1=AF$();c.dh=0;c.ow=500;c.qy=UD(0,0,0,255);c.j1=20;c.qI=20;c.l5=YZ();d=b.cH;e=new SZ;e.fY=c;f=new Uz;f.oo=e;e.nT=f;C$(d,e);b=b.bj;c.dI=b;QC(c.e1,Gq(b,B(116),c.qI),c.j1,c.dI);c.fK=LW();return c;}
var P_=F();
function ABe(a,b){var c;c=new Oz;ER(c,b);C$(b.cH,c);return c;}
var P$=F();
function ACB(a,b){return AM7(b);}
var P9=F();
function AHm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Tr;ER(c,b);c.da=NJ(0,0,300,300);c.d2=PL(0,0,3,3);d=b.bj;b=b.cH;e=new QL;e.ji=c;e.qg=new Bm;C$(b,e);b=C_(d,200,50);Fh(b,B(117),11.0);JO(b,187,187,187);Co(b,B(118),0.0,20.0);Co(b,B(118),0.25,40.0);e=Dr(d);Df(e,b);HC(b);c.mR=e;IO(c.da,e);Ki(c.da);b=c.da.O;D_();Bu(b,AOY);Bu(c.da.bh,Cp(204,120,50));XF();b=AOV;f=EG((b===b?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=
(-1);j=j+1|0;}h=h+1|0;}a:{d=Dr(d);U$();switch(AOQ.data[b.b9]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new D3;U(b);J(b);}b:{Lw(d,5,5,h);e=d.eg.dv;switch(AOQ.data[b.b9]){case 1:i=6403;break b;case 2:i=6408;break b;default:}b=new D3;U(b);J(b);}b=f.data;m=b.buffer;n=b.byteOffset;o=b.byteLength;p=new $rt_globals.Uint8Array(m,n,o);e.texSubImage2D(3553,0,0,0,5,5,i,5121,p);c.md=d;Bn(c.d2.h,d.bJ,d.cq);Bu(c.d2.O,c.f8);return c;}
var P8=F();
function AKn(a,b){var c,d,e;c=new MT;FT(c,b);c.sz=20;c.t7=11;c.sd=220;c.hs=new Bm;c.s0=5000;c.fx=1;c.ew=H(Hw,[CW(0),CW(255)]);c.dq=b.bj;b=b.cH;d=new Ow;d.gb=c;e=new SR;e.qT=d;d.l6=e;C$(b,d);b=C_(c.dq,200,220);c.h$=b;Fh(b,B(116),20.0);b=C_(c.dq,200,20);c.en=b;Fh(b,B(116),20.0);c.go=LW();return c;}
var P7=F();
function ALb(a,b){var c,d;c=new Hh;ER(c,b);C$(b.cH,c);b=!T_(b.u)?B(119):B(120);d=new M;O(d);G(G(d,B(121)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var Ot=F();
function AFA(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=new OS;UH(c,b);d=c.k;e=new J3;f=R(Bx,8);g=I(B(122));h=0;i=0;j=g+1|0;while(true){k=FU(B(122),10,i);l=k>=0?B6(B(122),i,k):Dc(B(122),i);m=f.data;n=h+1|0;i=m.length;if(i==h)f=CV(f,i*2|0);f.data[h]=l;f=f;i=k<0?j:k+1|0;if(i>g)break;h=n;}if(f.data.length!=n)f=CV(f,n);o=f.data;b=null;l=null;e.e4=b;e.rj=l;e.hn=B(123);e.m7=null;p=new IG;i=o.length;if(!i)q=K_(B(29));else{q=R(Ck,i);m=q.data;g=0;while(g<i){b=new Ck;r=R(B0,1);r.data[0]=Xp(o[g]);GY(b,r);m[g]=b;g=
g+1|0;}}f=q.data;p.ds=GX();p.dg=GX();p.gi=Cx();if(!f.length){b=new BC;Yg(b);J(b);}p.A=q;p.eP=0;p.cL=0;p.cF=Q2(p);e.g=p;b=d.e;d.e=e;d.d0=E1();p=Xk(Dg(d.e));if(p!==null){l=d.bH.u;s=new Pu;s.o9=d;f=R(C,1);f.data[0]=FA(d.e.g);CL(l,s,p,f);}f=d.ea.kH.e6.data;t=f.length;i=0;while(i<t){p=f[i];if(p!==null)p.BP(b,e);i=i+1|0;}return c;}
function Ge(){var a=this;C.call(a);a.bs=0;a.b3=0;a.c2=0;a.hb=0;}
function AOZ(a,b,c,d){var e=new Ge();Ri(e,a,b,c,d);return e;}
function Ri(a,b,c,d,e){a.bs=d;a.b3=b;a.c2=c;a.hb=e;}
function M2(){var a=this;Ge.call(a);a.c1=null;a.bq=0;a.c3=0;a.ju=0;a.lj=0;}
function VL(b){var c,d;c=b.b3;if(c&&!b.bs&&!b.c2&&!b.hb?1:0){d=b.bq;if(!(d!=67&&d!=88&&d!=45))return 1;}d=b.bs&&!c&&!b.c2&&!b.hb?1:0;return d&&b.bq==46?1:0;}
function W5(b){var c;c=b.bq;return c!=122&&c!=123&&c!=116?0:1;}
var YU=F();
function SQ(b,c){return (b+(c/2|0)|0)/c|0;}
function NK(b,c,d){if(b<(2147483647/c|0))return SQ(Bc(b,c),d);return 0.5+c*b/d|0;}
function J9(b,c){return ((b+c|0)-1|0)/c|0;}
function BU(b){return b+0.5|0;}
function EK(b){return b+0.5|0;}
function HI(b,c,d){return Bf(b,Z(c,d));}
function KK(){var a=this;Ge.call(a);a.S=null;a.rn=null;}
var Ra=F(0);
function LR(){var a=this;C.call(a);a.qp=null;a.qq=null;}
function AFs(a,b){var c,d;c=a.qp;d=a.qq;$rt_globals.console.info("paste plain string "+b);c.n(EZ(b));Dw(d);}
function RL(){C.call(this);this.qK=null;}
function SP(a,b){a.qK.clipboardData.setData("text/plain",$rt_ustr(b));}
function Ty(){var a=this;In.call(a);a.sN=0;a.kR=0;}
var XW=F();
function IQ(){C.call(this);this.s8=null;}
var AOW=null;var AO0=null;function AEO(){AEO=Bk(IQ);AK8();}
function ACW(a){var b=new IQ();UG(b,a);return b;}
function UG(a,b){AEO();a.s8=b;}
function AK8(){AOW=ACW(B(124));AO0=ACW(B(125));}
var SH=F(0);
function PS(){C.call(this);this.f6=null;}
function E6(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.f6));}
function D6(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.f6));}
function ACk(a){var b,c;b=a.f6.byteLength;c=new M;O(c);G(T(G(c,B(126)),b),B(127));return N(c);}
var Rp=F(0);
function Jt(){var a=this;C.call(a);a.fB=null;a.eb=null;a.j2=null;}
function XT(a,b){var c=new Jt();AEK(c,a,b);return c;}
function ALD(a,b,c){var d=new Jt();L7(d,a,b,c);return d;}
function UQ(b){var c,d,e,f,g,h,i,j,k;c=new Jt;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=Rv(E(SB),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=f[h];h=h+1|0;}}i=g.data;h=i.length;if(!h)j=R(Bx,0);else{j=R(Bx,h-1|0);g=j.data;h=0;k=g.length;while(h<k){g[h]=EZ(i[h]);h=h+1|0;}}}else j=R(Bx,0);L7(c,d,b,j);return c;}
function AEK(a,b,c){L7(a,b,c,R(Bx,0));}
function L7(a,b,c,d){a.fB=b;a.eb=c;a.j2=d;}
function If(a,b){var c,d,e;c=b|0;if(c===b)return c;d=Fd(a);e=new M;O(e);G(G(e,B(128)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function Fd(a){var b;b=a.fB;return EZ(b!==null?b.name:a.eb.name);}
function AE8(a){var b,c,d,e,f;if(a.eb===null){b=a.j2;c=Fd(a);d=VW(b);e=new M;O(e);G(G(G(e,d),B(129)),c);c=N(e);}else{b=a.j2;c=Fd(a);f=If(a,a.eb.size);d=VW(b);e=new M;O(e);T(G(G(G(G(e,d),B(129)),c),B(130)),f);c=N(e);}return c;}
function Je(){var a=this;Ji.call(a);a.mj=null;a.lr=null;}
function Vl(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.mj;e=0;f=0;g=a.lr;a:{while(true){if((e+32|0)>f&&Dm(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Z(BW(b)+j|0,i.length);LK(b,d,j,f-j|0);e=0;}if(!Dm(c)){k=!Dm(b)&&e>=f?AON:AOM;break a;}i=g.data;j=Z(BW(c),i.length);l=new LQ;l.kJ=b;l.mY=c;k=Xo(a,d,e,f,g,0,j,l);e=l.pE;j=l.qD;if(k===null){if(!Dm(b)&&e>=f)k=AON;else if(!Dm(c)&&e>=f)k=AOM;}Tz(c,g,0,j);if(k!==null)break;}}Ei(b,b.M-(f-e|0)|0);return k;}
var Ns=F(Je);
function Xo(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(J5(h,2))break a;i=AOM;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Ks(l)){if((f+3|0)>g){j=j+(-1)|0;if(J5(h,3))break a;i=AOM;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Cr(l)){i=DB(1);break a;}if
(j>=d){if(Dm(h.kJ))break a;i=AON;break a;}c=j+1|0;m=k[j];if(!CK(m)){j=c+(-2)|0;i=DB(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(J5(h,4))break a;i=AOM;break a;}k=e.data;o=D5(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.pE=j;h.qD=f;return i;}
var Hc=F(DD);
function Cm(){var a=this;C3.call(a);a.f8=null;a.dX=null;a.dZ=0.0;}
function AO1(a){var b=new Cm();ER(b,a);return b;}
function AO2(a,b){var c=new Cm();RH(c,a,b);return c;}
function ER(a,b){RH(a,b,1);}
function RH(a,b,c){var d;FT(a,b);a.f8=Fq(0,0,64,255,new B_);a.dX=new Bm;if(c){b=GT(CA(a));d=DI();b=$rt_ustr(b);d.title=b;}}
function AKF(a,b){return 0;}
function GW(a){Jl(a.X.bj,a.f8);}
function Sn(a,b,c){C0(a.dX,b);a.dZ=c;}
function I1(){var a=this;Cm.call(a);a.nI=null;a.lC=null;a.rm=null;a.k=null;a.nr=null;}
function ANt(a){var b=new I1();UH(b,a);return b;}
function UH(a,b){var c;RH(a,b,0);a.nr=new Bm;a.nI=b.bj;a.lC=Hd(b.u);a.k=ALv(b);b=b.cH;c=new Sz;c.bW=a;C$(b,c);}
function AHN(a){return a.k;}
function AB6(a,b){var c,d,e,f;c=a.k;d=c.e.g;e=d.eP;f=d.cL;e=e!=f&&b-d.mN>0.03125?1:0;if(e&&c.i_!=f){c.i_=f;PN(c);}e=c.Y;f=DO(c,(e+c.rV|0)-c.rr|0,Et(c));c.Y=f;e=e==f?0:1;return !PU(c.cl,b)&&!e&&!c.ob?0:1;}
function AEx(a){GW(a);ZJ(a.k);}
function Zr(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=NT();d=a.k.e;e=Dg(d);f=Hl(d);g=a.k.ea;if(Sm(g,e,f)!==null){h=a.k.G.K.be;i=new Uq;i.pi=a;i.pj=b;DJ(c,B(131),h,i);}if(Jf(g,e,f)!==null){h=a.k.G.K.be;i=new Un;i.p2=a;i.p1=b;DJ(c,B(132),h,i);}if(LH(g,e,f)!==null){h=a.k.G.K.be;i=new Up;i.n_=a;i.n$=b;DJ(c,B(133),h,i);}d=a.k.G.K.be;h=new Uo;h.nj=a;h.nk=b;DJ(c,B(134),d,h);d=a.k;if(!d.eu){d=d.G.K.be;h=new Tg;h.l_=a;DJ(c,B(135),d,h);}d=a.k.G.K.be;h=new Th;h.qS=a;DJ(c,B(136),d,h);if(!a.k.eu&&T_(a.X.u)){d=a.k.G.K.be;h=new Ti;h.lw
=a;DJ(c,B(137),d,h);}d=a.k.G.K.be;h=NT();e=a.k;f=e.G.K.be;j=R(DF,2);k=j.data;Cf(e);l=new Ua;l.pw=e;k[0]=DY(B(138),f,l);g=a.k;l=g.G.K.be;Cf(g);m=new Uc;m.m3=g;k[1]=DY(B(139),l,m);Ee(h,B(140),f,HG(j));e=a.k;f=e.G.K.be;j=R(DF,2);k=j.data;Cf(e);l=new T3;l.ol=e;k[0]=DY(B(141),f,l);g=a.k;l=g.G.K.be;Cf(g);m=new T2;m.lL=g;k[1]=DY(B(142),l,m);Ee(h,B(143),f,HG(j));e=a.k.G.K.be;f=new M3;f.nn=a;Ee(h,B(144),e,f);Ee(c,B(145),d,Gt(h));d=a.k.G.K.be;h=NT();e=a.k;f=e.G.K.be;j=R(DF,4);k=j.data;Cf(e);l=new S1;l.p3=e;k[0]=DY(B(146),
f,l);g=a.k;l=g.G.K.be;Cf(g);m=new S0;m.ly=g;k[1]=DY(B(147),l,m);g=a.k;l=g.G.K.be;Cf(g);m=new S3;m.n2=g;k[2]=DY(B(148),l,m);g=a.k;l=g.G.K.be;Cf(g);m=new S2;m.qo=g;k[3]=DY(B(149),l,m);Ee(h,B(150),f,HG(j));e=a.k.G.K.be;f=new KO;f.l2=a;DJ(h,B(151),e,f);Ee(c,B(152),d,Gt(h));return Gt(c);}
function AHH(a){return ZK(0);}
function Qm(a){var b;b=new NG;b.pf=a;return b;}
function Kd(a,b,c){var d,e,f,g,h,i,j,k,l;a:{Di(a.k.bE);d=a.k.e;e=Dg(d);f=Hl(d);g=a.k.ea;if(c===null)h=null;else{ANn();switch(AO3.data[c.b9]){case 1:h=Jf(g,e,f);break a;case 2:h=Sm(g,e,f);break a;default:}b=new D3;U(b);J(b);}}c=a.k;e=Hg(c,b);if(h!==null){f=c.e;i=e.b1;j=e.b6;e=new M1;e.tT=c;e.tU=b;h.tc(f,i,j,e,c.gP);}else{T7(c.e.g,e);f=DH(c.e.g.ds,e);if(f!==null)Hu(c,f);else{e=DH(c.e.g.dg,e);if(e!==null&&!DP(e)){Ej(c.bZ);f=c.bZ;k=QF(f,e,c,c.e);e=new M0;e.nX=c;IB(f,b,k,e);}else{Ej(c.bZ);Di(c.bE);f=c.bE;k=R(DF,
1);l=k.data;g=new DF;Cf(f);e=new RO;e.oN=f;O2(g,e,B(153),c.G.K.qZ);l[0]=g;e=HG(k);g=new TO;g.lz=c;Iw(f,b,e,g);}}}}
function YT(b){var c;c=new O8;c.lf=b;return c;}
function TH(a){var b,c,d;b=a.X.u;c=a.k;Cf(c);d=new T9;d.kM=c;Ke(b,d);}
function ADT(a,b,c){var d,e,f,g;C0(a.dX,b);b=a.k;d=a.nr;e=a.dX;C0(b.cd,d);C0(b.ed,e);b.db=c;b.cj=BU(b.ox*c);f=BU(10.0*b.db);b.jy=f;g=b.cj-f|0;R8(b.d5,b.cd,g,Cq(b),b.db);b.cl.dc.h.a=BU(2.0*b.db);QV(b,b.ho,b.e7);So(b);KS(b);R9(b.bZ,e,c);T5(b.bE,e,c);if(a.dZ!==c){a.dZ=c;f=BU(17.0*c);b=Gq(a.nI,B(154),f);a.rm=b;a.k.bE.hx=b;}}
function Vb(){var a=this;C3.call(a);a.js=null;a.cJ=null;a.fn=null;a.ep=null;a.f1=null;a.rh=null;a.fQ=null;a.nZ=null;a.j$=null;a.ry=null;a.sD=null;a.e5=null;a.h2=null;a.no=0;}
function ALO(a){var b=new Vb();AFJ(b,a);return b;}
function AFJ(a,b){var c,d,e,f,g,h,i;FT(a,b);c=new B_;D_();d=AOY;c.b_=d.b_;c.cT=d.cT;c.cC=d.cC;c.ch=d.ch;a.js=c;a.cJ=NJ(0,0,300,300);a.fn=PL(0,0,3,3);a.ep=NJ(0,0,300,300);a.f1=AGQ();e=R(Bx,4);f=e.data;f[0]=B(155);f[1]=B(156);f[2]=B(157);f[3]=B(158);a.rh=e;a.fQ=R(Hk,f.length);d=b.bj;c=b.cH;g=new QN;g.dK=a;g.qV=new Bm;C$(c,g);h=C_(a.X.bj,300,300);c=h.bc;b="white";c.fillStyle=b;b=h.bc;c="white";b.strokeStyle=c;b=h.bc;c=10.0;b.lineWidth=c;h.bc.strokeRect(75.0,140.0,150.0,110.0);h.bc.fillRect(130.0,190.0,40.0,60.0);h.bc.beginPath();h.bc.moveTo(50.0,
140.0);h.bc.lineTo(150.0,60.0);h.bc.lineTo(250.0,140.0);h.bc.closePath();h.bc.stroke();Fh(h,B(117),11.0);JO(h,187,187,187);Nr(a,B(159),h);b=Dr(a.X.bj);Df(b,h);HC(h);a.nZ=b;IO(a.cJ,b);Ki(a.cJ);Bu(a.cJ.O,AOY);Bu(a.cJ.bh,Cp(204,120,50));b=C_(d,255,100);a.e5=b;Fh(b,B(154),11.0);b=Bw();i=$rt_str(a.e5.bc.font);g=new M;O(g);G(G(g,B(160)),i);Bq(b,N(g));Dk(a.e5,B(161));JO(a.e5,169,183,198);Nr(a,B(161),a.e5);b=Dr(d);a.j$=b;Df(b,a.e5);IO(a.ep,a.j$);Ki(a.ep);GF(a.ep,CW(255));GA(a.ep,AOY);a.ry=Dr(d);Bu(a.fn.O,a.js);}
function Nr(a,b,c){Co(c,b,0.0,20.0);Co(c,b,0.25,40.0);Co(c,b,0.5,60.0);Co(c,b,0.75,80.0);}
function To(a,b){Ia(Jz(),0.5+Jz()*0.5,0.5+Jz()*0.5,1.0,b.bh);}
function AAw(a,b){var c;a.no=a.no+1|0;c=b/5.0;Ia(c-(c|0),1.0,1.0,1.0,a.fn.bh);return PU(a.f1,b);}
function AC9(a){var b,c,d,e,f,g;b=a.X.bj;Jl(b,a.js);c=a.fQ.data;d=c.length;e=0;while(e<d){JP(c[e],b,0,0);e=e+1|0;}De(a.cJ,b,a.nZ,0,0,0.5);f=a.j$;d=0;while(d<7){g=a.ep;De(g,b,f,Bc(d,10+((10*g.h.a|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.sD;if(g!==null)Q1(a.fn,b,g,0,0,0.0);RQ(a.f1,b,new Bm);L1(b,B(162));}
function ALd(a,b,c){var d,e,f,g,h,i,j,k,l;d=Bw();e=Cj(b);f=new M;O(f);G(G(f,B(163)),e);Bq(d,N(f));f=Bw();g=new M;O(g);No(G(g,B(164)),c);Bq(f,N(g));h=BU(c*30.0);i=BU(c*10.0);j=0;while(true){k=a.fQ.data;if(j>=k.length)break;l=1+j|0;k[j]=PL(Bc(i,l)+Bc(h,j)|0,h,h,h);To(a,a.fQ.data[j]);j=l;}Bn(a.fn.m,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.cJ;f=d.m;h=b.a;d=d.h;Bn(f,(h-d.a|0)/2|0,(b.b-d.b|0)/2|0);d=a.ep;d.m.b=b.b-d.h.b|0;}
function SJ(){var a=this;Cm.call(a);a.gv=null;a.kt=null;a.de=null;a.cs=null;a.jz=null;a.j0=null;a.dT=null;}
function LV(a,b){O6(b,a.kt);C1();HX(b,AO4);Kg(b,AO5);}
function LP(b){var c,d,e;c=new TB;d=Ef((Yl()));d=d^d<<7;d=d^(d>>>1|0);e=d^d<<9;d=Ef((Yl()))^(-559038737);c.jM=e;c.jN=d;d=0;while(d<19){O$(c);d=d+1|0;}return HE(b,c);}
function HE(b,c){var d;d=NT();I0(d,Jd(b,JW(c,25)),!b?null:HE(b-1|0,c));I0(d,Jd(b,JW(c,20)),!b?null:HE(b-1|0,c));I0(d,Jd(b,JW(c,15)),!b?null:HE(b-1|0,c));I0(d,Jd(b,JW(c,10)),!b?null:HE(b-1|0,c));return Gt(d);}
function Jd(b,c){var d;if(b){d=new M;O(d);G(G(T(d,b),B(34)),c);c=N(d);}return c;}
function I0(b,c,d){var e,f;e=new Go;f=Ia(Jz(),1.0,1.0,1.0,new B_);C1();Km(e,f,AO4,AO6);if(d!==null)Ee(b,c,e,d);else{d=new Rc;d.pH=c;DJ(b,c,e,d);}}
function AAg(a,b,c){var d,e;C0(a.dX,b);Bn(a.jz,b.a,BU(c)*2|0);Bn(a.j0,BU(c)*2|0,b.b);T5(a.dT,b,c);if(a.dZ!==c){Fu(a.de,a.X.bj.bx,c);Fu(a.cs,a.X.bj.bx,c);}a.dZ=c;d=DM(a.de);e=DM(a.cs);Ir(a.de,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);Ir(a.cs,(b.a-e.a|0)/2|0,((b.b+(3*e.b|0)|0)/2|0)+5|0);}
function ADp(a){var b,c,d,e,f;GW(a);b=a.X.bj;Cn(b,1);C1();c=AO7;d=a.dX.b/2|0;e=a.jz;Bt(b,0,d-(e.b/2|0)|0,e,c);f=a.dX.a/2|0;e=a.j0;Bt(b,f-(e.a/2|0)|0,0,e,c);Cn(b,1);HP(a.de,b,a.dZ);HP(a.cs,b,a.dZ);Q8(a.dT);Cn(b,0);}
function AH2(a,b){var c,d,e;c=R0(a.dT,b.S,a.gv);d=IM(a.de,b.S,a.gv);e=IM(a.cs,b.S,a.gv);return !c&&!d&&!e?0:1;}
function AJW(a,b,c,d,e){var f,g,h;f=MD(a.dT,b.S,c,d,e);g=IP(a.de,b.S,c,d,e);h=IP(a.cs,b.S,c,d,e);return !f&&!g&&!h?0:1;}
function ABy(a,b){var c,d,e;Bq(Bw(),B(165));if(!F5(a.dT)){c=a.dT;b=b.S;d=LP(4);e=new LS;e.sF=a;Iw(c,b,d,e);}return 1;}
function AD8(a,b){if(b.c3&&b.bq==32){Qs(a.cs);return 1;}return 0;}
function ABK(a,b){return 0;}
function TY(){var a=this;Cm.call(a);a.me=null;a.qH=null;a.oL=null;a.q7=null;a.cx=null;}
function EO(b,c,d,e){var f,g,h,i;f=new EC;D_();g=AO8;h=AO9;C1();Fx(f,g,h,g,AOX,AO$);i=new OG;i.pc=c;i.pd=d;i.pb=e;J0(b,c,d,e,f,i);}
function AKG(a,b,c){var d,e;Sn(a,b,c);C0(a.qH,b);Bn(a.oL,b.a,BU(c)*2|0);Bn(a.q7,BU(c)*2|0,b.b);if(!Ex(a.cx))QX(a,new Bm);R9(a.cx,b,c);d=a.cx;e=J7(d.b4);TS(d.b4,(b.a-e.a|0)/2|0,(b.b-e.b|0)/2|0);}
function AHD(a){var b;GW(a);b=a.X.bj;Cn(b,1);N6(a.cx);Cn(b,0);}
function AIF(a,b){return Qn(a.cx,b.S,a.me);}
function AFV(a,b,c,d,e){return R4(a.cx,b.S,c,d,e);}
function AH4(a,b){Bq(Bw(),B(165));if(!Ex(a.cx))QX(a,b.S);return 1;}
function QX(a,b){var c,d,e,f;c=a.cx;d=AHq();EO(d,B(166),B(167),B(168));EO(d,B(166),B(169),B(170));EO(d,B(166),B(171),B(172));EO(d,B(173),B(174),B(175));EO(d,B(166),B(176),B(168));EO(d,B(177),B(178),B(168));EO(d,B(179),B(180),B(168));e=Or(d);f=new R6;f.rE=a;IB(c,b,e,f);}
function AEZ(a,b){var c;c=b.c3;if(c&&b.bq==32){Ej(a.cx);return 1;}if(!c)return 0;QM(a.cx,b);return 1;}
function Ni(){var a=this;C3.call(a);a.dI=null;a.e1=null;a.fK=null;a.i4=null;a.dh=0;a.ow=0;a.qy=null;a.j1=0;a.qI=0;a.l5=null;}
function AHM(a,b){return 0;}
function AAN(a){var b,c;b=a.dh;c=new M;O(c);T(G(c,B(181)),b);$rt_globals.console.info($rt_ustr(N(c)));Jl(a.dI,a.qy);I7(a.fK,a.dh,a.i4.a,Fr(a),5000,20);Cn(a.dI,1);G0(a.fK,a.dI,Cw(0,0));Cn(a.dI,0);b=a.dh;c=new M;O(c);T(G(c,B(181)),b);$rt_globals.console.info($rt_ustr(N(c)));Ui(a.e1,a.dh/a.j1|0);Q5(a.e1,a.dh,Fr(a),a.l5,a.dI);}
function AAJ(a,b,c){a.i4=b;R8(a.e1,Cw(0,0),50,Fr(a),c);Iu(a.e1,a.dI,0,Fr(a));}
function NS(a){return 5000-Fr(a)|0;}
function Fr(a){return Z(a.ow,a.i4.b);}
var Oz=F(Cm);
function AHK(a,b){var c;if(b.c3&&b.b3&&b.bq==79){if(!b.bs){b=a.X.u;c=new TU;c.pX=a;Ke(b,c);}else{b=a.X.u;c=new TX;c.sT=a;J$(b,c);}return 1;}return 0;}
var ZB=F(Cm);
function AM7(a){var b=new ZB();AG4(b,a);return b;}
function AG4(a,b){var c,d,e,f,g;ER(a,b);c=b.u;d=new OW;d.r2=a;e=R(C,1);e.data[0]=B(182);CL(c,d,B(183),e);f=b.u;c=new OV;c.tQ=a;e=R(C,1);e.data[0]=WW([1,2,3,4,5]);CL(f,c,B(184),e);f=b.u;c=new OU;c.l0=a;e=R(C,1);e.data[0]=AMr([1,2,3,4,5]);CL(f,c,B(185),e);f=b.u;c=new OT;c.rJ=a;e=R(C,1);e.data[0]=EE([1,2,3,4,5]);CL(f,c,B(186),e);f=b.cH;g=new NI;c=new OR;c.sV=a;d=new OQ;d.nd=a;g.id=b.u;g.mb=c;g.kv=d;C$(f,g);}
function Rm(a,b){var c,d,e,f,g,h;c=b.data;d=Bw();e=Cj(c[0]);f=new M;O(f);G(G(f,B(187)),e);Bq(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((Pj(b,1)).f6));d=Bw();e=Cj(c[1]);if(b===null)f=B(27);else{f=new M;O(f);BR(f,B(84));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BR(f,B(85));T(f,c[g]);g=g+1|0;}BR(f,B(86));f=N(f);}h=new M;O(h);G(G(G(G(h,B(188)),e),B(189)),f);Bq(d,N(h));}
function Tr(){var a=this;Cm.call(a);a.da=null;a.d2=null;a.md=null;a.mR=null;a.jF=null;}
function AFj(a,b){b=b/5.0;Ia(b-(b|0),1.0,1.0,1.0,a.d2.bh);return 0;}
function AAq(a){GW(a);De(a.da,a.X.bj,a.mR,0,0,0.5);Q1(a.d2,a.X.bj,a.md,0,0,0.0);L1(a.X.bj,B(162));}
function AKm(a,b,c){var d,e,f;Sn(a,b,c);Bn(a.d2.m,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.da;e=d.m;f=b.a;d=d.h;Bn(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function MT(){var a=this;C3.call(a);a.dq=null;a.h$=null;a.en=null;a.cc=null;a.dM=0;a.go=null;a.dO=0;a.sz=20;a.t7=11;a.sd=220;a.hs=null;a.s0=5000;a.fx=0;a.ew=null;}
function AKW(a){var b,c,d,e,f,g,h;b=a.go;c=a.dO;d=a.hs;I7(b,c,d.a,d.b,5000,20);Cn(a.dq,1);G0(a.go,a.dq,Cw(0,0));if(a.cc===null){c=0;while(c<11){c=c+1|0;e=20*c|0;Co(a.h$,CZ(c),0.0,e);}b=Dr(a.dq);a.cc=b;Df(b,a.h$);}if(a.dO<=a.dM)while(true){f=a.dM;if(f<=a.dO)break;a.dM=f-20|0;b=a.en;g=a.fx-1|0;a.fx=g;Co(b,CZ(g),0.0,20.0);GQ(a.cc,a.en,0,a.dM%220|0);D8(a.en);}else while(a.dM<(a.dO-20|0)){b=a.en;g=a.fx+1|0;a.fx=g;Co(b,CZ((g+11|0)-1|0),0.0,20.0);GQ(a.cc,a.en,0,a.dM%220|0);D8(a.en);a.dM=a.dM+20|0;}b=new J6;d=a.cc;PI(b,
0,0,d.bJ,d.cq);d=a.cc;GC(b,0,0,d.bJ,d.cq);GF(b,a.ew.data[0]);GA(b,a.ew.data[1]);De(b,a.dq,a.cc,400,0,1.0);g=a.dO%220|0;f=Z(a.cc.cq-g|0,200);d=NJ(0,0,a.cc.bJ,f);GC(d,0,g,a.cc.bJ,f);GF(d,a.ew.data[0]);GA(d,a.ew.data[1]);De(d,a.dq,a.cc,0,0,1.0);h=new J6;b=a.cc;PI(h,0,f,b.bJ,(b.cq-f|0)-20|0);b=a.cc;GC(h,0,0,b.bJ,(b.cq-f|0)-20|0);GF(h,a.ew.data[1]);GA(h,a.ew.data[0]);De(h,a.dq,a.cc,0,0,1.0);}
function AAs(a,b,c){C0(a.hs,b);}
function ACn(a,b){return 0;}
function Pd(a){return 5000-a.hs.b|0;}
function Hh(){Cm.call(this);this.cV=0;}
function AFu(a,b){a:{if(b.c3){switch(b.bq){case 67:break;case 86:OO(a);break a;default:break a;}KR(a);}}return 1;}
function OO(a){var b,c;b=a.X.u;c=new Oc;c.kN=a;Oy(b,c,O4(a));}
function KR(a){var b,c,d,e;b=a.cV+1|0;a.cV=b;c=GT(E(Hh));d=new M;O(d);G(G(T(G(d,B(190)),b),B(34)),c);e=N(d);c=a.X.u;d=new Q4;d.mZ=e;Rh(c,e,d,O4(a));}
function O4(a){var b;b=new Sr;b.l7=a;return b;}
function AEq(a,b,c,d,e){a:{if(d){switch(c){case 0:break;case 2:KR(a);break a;default:break a;}OO(a);}}return 1;}
function ACA(a,b,c){var d,e;c=a.cV+1|0;a.cV=c;d=GT(E(Hh));e=new M;O(e);G(G(T(e,c),B(191)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));SP(b,e);return 1;}
function AEY(a){var b;b=new NW;b.ot=a;return b;}
function AAj(a,b){return 1;}
var OS=F(I1);
function AEI(a){return ZK(1);}
var Gl=F(0);
function KE(){var a=this;C.call(a);a.dH=null;a.d9=null;}
function KP(a,b){var c;c=a.d9;a.d9=b;return c;}
function ACZ(a,b){var c,d;if(!Ka(b,Gl))return 0;a:{c=b;d=a.dH;if(d!==null){b=c.tZ();if(d===b?1:b instanceof Eh&&b.eC==d.eC?1:0)break a;}else if(c.tZ()===null)break a;return 0;}b=a.d9;return b!==null?PR(b,c.s7()):c.s7()!==null?0:1;}
function EB(){var a=this;KE.call(a);a.bm=null;a.bt=null;a.dn=0;a.eH=0;}
function Ii(a){var b;b=Jk(a);if(b==2){if(Jk(a.bt)<0)a.bt=Lq(a.bt);return MP(a);}if(b!=(-2))return a;if(Jk(a.bm)>0)a.bm=MP(a.bm);return Lq(a);}
function Jk(a){var b,c;b=a.bt;c=b===null?0:b.dn;b=a.bm;return c-(b===null?0:b.dn)|0;}
function Lq(a){var b;b=a.bm;a.bm=b.bt;b.bt=a;DW(a);DW(b);return b;}
function MP(a){var b;b=a.bt;a.bt=b.bm;b.bm=a;DW(a);DW(b);return b;}
function DW(a){var b,c,d;b=a.bt;c=b===null?0:b.dn;b=a.bm;d=b===null?0:b.dn;a.dn=Bf(c,d)+1|0;a.eH=1;b=a.bm;if(b!==null)a.eH=1+b.eH|0;b=a.bt;if(b!==null)a.eH=a.eH+b.eH|0;}
function G4(a,b){return b?a.bt:a.bm;}
function HV(a,b){return b?a.bm:a.bt;}
var Zm=F();
function ABq(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Nd;c=c.buffer;d.ev=c;d.km=new $rt_globals.Int8Array(c);d.h_=new $rt_globals.Uint16Array(c);d.o2=new $rt_globals.Int32Array(c);d.mG=new $rt_globals.Float32Array(c);d.mP=new $rt_globals.Float64Array(c);e=d.ev.byteLength;c=new M;O(c);T(G(c,B(192)),e);Cu(N(c));e=b.callToCpp1();c=new M;O(c);T(G(c,B(193)),e);Cu(N(c));f=b.callToCpp2();c=new M;O(c);Fz(G(c,B(194)),f);Cu(N(c));c=Ld(d,b.getC8String());g=new M;O(g);G(G(g,B(195)),c);Cu(N(g));c
=Ll(d,b.getC16String());g=new M;O(g);G(G(g,B(196)),c);Cu(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.ev,h,8));c=Yd(i);g=new M;O(g);G(G(g,B(197)),c);Cu(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.ev,h,8));c=AIP(j);g=new M;O(g);G(G(g,B(198)),c);Cu(N(g));k=WG(d,b.getCDoubleArray8(),8);l=AK_(k);c=new M;O(c);G(G(c,B(199)),l);Cu(Dt(c));l=AK1(b.getC8String(),B(200),d);c=Kb();G(G(c,B(201)),l);Cu(Dt(c));l=AF2(b.getC16String(),B(202),
d);c=Kb();G(G(c,B(203)),l);Cu(Dt(c));c=AHx(i,d,b.getCIntArray8(),EE([11,22,33,44,55,66,77,88]));g=Kb();G(G(g,B(204)),c);Cu(Dt(g));c=AI0(j,d,b.getCFloatArray8(),100,EE([111,222,333,444,555,666,777,888]));g=Kb();G(G(g,B(205)),c);Cu(Dt(g));b=AJc(k,d,b.getCDoubleArray8(),1000,EE([1111,2222,3333,4444,5555,6666,7777,8888]));c=Kb();G(G(c,B(206)),b);Cu(Dt(c));}
function AI0(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(207);h=0;i=e;a:{while(h<g){if(EK(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.mG[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(208);}return B(209);}
function AJc(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(207);h=0;i=e;a:{while(h<g){if(BU(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.mP[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(208);}return B(209);}
function AHx(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(207);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.o2[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(208);}return B(209);}
function AK1(b,c,d){var e,f,g,h;e=Ld(d,b);if(!Br(c,e))return B(210);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.km[h])return B(211);f=f+1|0;}return B(208);}
function AF2(b,c,d){var e,f,g,h;e=Ll(d,b);if(!Br(c,e))return B(210);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.h_[h>>>1|0]&65535))return B(211);f=f+1|0;}return B(208);}
function Cu(b){Na(B(2),b);}
function AE9(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
var Rn=F(0);
function Gk(a){return I9(a,null);}
function Hd(b){var c;c=new L0;c.lu=b;return c;}
function WH(){var a=this;C.call(a);a.ob=0;a.jT=0;a.jQ=null;a.bH=null;a.H=null;a.cl=null;a.z=0;a.Q=0;a.bU=0;a.jf=0;a.e7=0;a.ho=null;a.dw=null;a.bR=null;a.R=0;a.e=null;a.ea=null;a.y=null;a.G=null;a.kp=null;a.fo=null;a.p$=0;a.oD=0;a.ox=0;a.cj=0;a.iw=0;a.jy=0;a.g3=null;a.eJ=null;a.eV=null;a.eL=null;a.Y=0;a.bP=0;a.fZ=0;a.db=0.0;a.gJ=0;a.gA=0;a.rV=0;a.rr=0;a.hJ=0;a.i$=0;a.d5=null;a.cd=null;a.ed=null;a.gy=0;a.gx=0;a.re=null;a.fy=0;a.eu=0;a.bZ=null;a.bE=null;a.gZ=null;a.gK=null;a.gP=null;a.i_=0;a.n9=null;a.hp=null;a.d0
=D2;a.bD=null;a.em=null;a.pJ=null;a.p4=null;}
function ALv(a){var b=new WH();AJn(b,a);return b;}
function AJn(a,b){var c,d,e;a.ob=0;a.jQ=R(Bg,10);a.cl=AGQ();a.e7=16;a.ho=B(116);a.bR=R(Ju,4);c=new J3;c.g=AHR();c.hn=B(156);c.e4=null;a.e=c;c=new Sy;c.k_=He(R(KB,0));c.ph=He(R(KB,0));c.pA=He(R(KX,0));c.r$=He(R(N5,0));c.kH=He(R(Sw,0));c.oe=He(R(OZ,0));a.ea=c;a.y=AHh();a.fo=R(Es,0);a.ox=100;a.iw=1;a.g3=Cw(1,0);a.eJ=Xv();a.eV=LW();a.eL=LW();a.Y=0;a.bP=0;a.fZ=0;a.gA=1;a.hJ=1;a.i$=3;a.d5=AF$();a.cd=new Bm;a.ed=new Bm;a.re=B(212);a.fy=0;a.eu=0;a.gZ=null;a.gK=Cx();c=J4();Cf(c);d=new RC;d.tW=c;a.gP=d;a.n9=new B_;a.hp
=new Bm;a.bD=new Bm;c=new RB;c.nY=a;a.pJ=c;c=new Rx;c.lv=a;a.p4=c;a.bH=b;c=b.bj;a.H=c;a.bZ=AJ0(c);a.bE=AA4(a.H);Lt(a);if(b.u.cZ!==(DI()).activeElement?0:1)EM(a);e=a.jQ.data;b=new Rw;b.pI=a;e[0]=b;b=new Rz;b.oj=a;e[1]=b;b=new Ry;b.lI=a;e[2]=b;b=new RT;b.p0=a;e[3]=b;AAt();a.gJ=AO_===APa?0:1;}
function EM(a){a.jf=1;Hi(a);}
function MS(a){a.jf=0;}
function Hi(a){Pw(a.cl,H8(a.bH.u));}
function Lt(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=new JN;c=new Hw;D_();MO(c,AOY);d=CG(APb);e=CG(AO9);f=CG(APc);g=CG(AOY);h=CG(APd);i=CG(APe);j=CG(APf);VO();k=(APg.eG()).data;l=k.length;m=R(H4,l);n=m.data;o=0;while(o<l){n[o]=k[o].jm;o=o+1|0;}p=YZ();q=new Jp;r=new EC;s=AO8;t=AO9;C1();Fx(r,s,t,s,AOX,AO$);u=new EC;t=AO8;s=AO9;v=AOX;Fx(u,t,s,t,v,v);Te(q,r,u,US(),Bp(B(213)),US());LF(b,c,d,e,f,g,h,i,j,m,p,q);a.G=b;NB(a);}
function NB(a){var b,c,d,e,f,g,h,i,j;b=a.bZ;c=a.G;b.gY=c;d=c.K;e=d.eO.cI;b.gw=e;b.j_=d.gq;b=b.b4;QZ(b,e);RJ(b,c.K.gq);f=b.bf.data;g=f.length;h=0;while(h<g){b=f[h];d=c.K.eO;b.dy=d;Hx(b.ck,d.iz,d.cI);d=b.cE;e=c.K.eO;Hx(d,e.j6,e.cI);d=b.cX;e=c.K.eO;Hx(d,e.kk,e.cI);if(b.iu)FC(b,1);h=h+1|0;}b=a.bE;c=a.G;e=BV(b.b$);while(B2(e)){i=BX(e);d=c.K;j=d.be.fI;b.is=j;b.ki=d.gq;HX(i,j);Kg(i,c.K.gq);f=i.bM.data;g=f.length;h=0;while(h<g){d=f[h];MJ(d,c);if(Gn(d))KU(i,c,d);h=h+1|0;}}b=a.cl;c=a.G.nv;Bu(b.dc.bh,c);}
function Jy(a,b,c){if(a.db!==0.0)QV(a,b,c);a.e7=c;a.ho=b;Fj(a.bH.u);}
function QV(a,b,c){var d,e,f,g,h,i,j,k;d=BU(c*a.db);e=a.dw;f=e!==null?e.mi:0;if(!(d==f&&FX(b,a.ho))){g=a.d5;Ix(g.ca,new O9);Gw(g.ca);g.dP=Dy(g.dP,null);g.es=Dy(g.es,null);h=a.fo.data;c=h.length;f=0;while(f<c){Ol(h[f]);f=f+1|0;}h=a.e.g.A.data;c=h.length;f=0;while(f<c){DR(h[f]);f=f+1|0;}h=a.bR.data;i=Gp(0,0);e=a.H;j=d;h[i]=F4(e,b,j,400,0);a.bR.data[Gp(0,1)]=F4(a.H,b,j,400,2);a.bR.data[Gp(1,0)]=F4(a.H,b,j,700,0);a.bR.data[Gp(1,1)]=F4(a.H,b,j,700,2);e=a.bR.data[Gp(0,0)];a.dw=e;c=HK(e);f=EK(c*1.25);a.R=f;a.jT=f*
0|0;a.cl.dc.h.b=HK(a.dw);a.kp=Dy(a.kp,C_(a.H,1024,a.R));e=a.bZ;k=a.dw;C1();OE(e,k,AOX);f=a.R;i=PK(a.cl);k=new M;O(k);b=G(G(k,B(214)),b);BB(b,32);T(G(T(G(T(G(T(b,d),B(215)),c),B(216)),f),B(217)),i);$rt_globals.console.info($rt_ustr(N(k)));if(APh){c=JA(a.dw,a.R);b=new M;O(b);T(G(b,B(218)),c);$rt_globals.console.info($rt_ustr(N(b)));}KS(a);a.bU=E4(DT(a),a.Q,a.H.bx,a.bR);E0(a);So(a);}}
function PZ(a){return Bc(Ca(a.e.g)+5|0,a.R);}
function Et(a){return Bf(PZ(a)-Cq(a)|0,0);}
function FB(a){return Bf(a.fZ-Ed(a)|0,0);}
function Ed(a){return a.ed.a-a.cj|0;}
function Cq(a){return a.ed.b-a.jT|0;}
function KS(a){IF(a.eJ,0,Cq(a),a.ed.a,a.jT);Bu(a.eJ.bh,a.G.kB);a.g3.b=Cq(a);}
function ZJ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;b=Cq(a);c=a.ed.a;d=J9(Cq(a),a.R)+7|0;e=a.fo;if(e.data.length<d)a.fo=Wt(d,e,a.p$,a.oD,a.e.g);Cn(a.H,0);f=a.g3;f.a=a.iw;g=a.H;h=a.cd;Bt(g,(h.a+a.cj|0)-a.jy|0,h.b,f,a.G.po);f=a.g3;i=a.jy;j=a.iw;f.a=i-j|0;g=a.H;h=a.cd;Bt(g,((h.a+a.cj|0)-i|0)+j|0,h.b,f,a.G.hH);a.Y=Z(a.Y,Et(a));a.bP=Z(a.bP,FB(a));i=(a.R-PK(a.cl)|0)/2|0;j=(a.bU-(Od(a.cl)/2|0)|0)-a.bP|0;NR(a.cl,a.cj+j|0,(i+Bc(a.z,a.R)|0)-a.Y|0);k=Ca(a.e.g);l=Js(a);m=RM(a);a.p$=l;a.oD=m;n=l;while(n<=m&&n<k){h
=B8(a.e.g,n);f=OJ(a,n);g=a.kp;e=a.bR;o=a.H;i=a.R;p=Ed(a);q=a.bP;r=f.bz;s=r===h&&!r.gI?0:1;if(s){f.bz=h;JC(h,o.bx,e);}p=Wy(f,p);t=p<=f.c0?0:1;if(t)f.c0=p;if(!(!s&&!t)){if(APi){u=h.ex;$rt_globals.console.info("fMeasure"+u.data);APi=0;}Ye(g,APh);Yn(f,g,o,e,i,q);f.bz.gI=0;}X7(f,g,e,i,q);o=f.bz;a.fZ=Bf(a.fZ,D7(h)+(40.0*a.db|0)|0);s=Bc(a.R,n)-a.Y|0;g=a.cd;Ya(f,g.b+s|0,g.a+a.cj|0,a.H,a.n9,a.hp,!a.gJ?0.0:0.5,Ed(a),a.R,a.bP,a.G,Y5(a,n,o),a.gZ,a.gK);n=n+1|0;}p=l;while(p<=m&&p<k&&a.hJ){f=OJ(a,p);s=Bc(a.R,p)-a.Y|0;g=!V1(a.y,
p)?a.G.kD:a.G.jD;h=a.H;o=a.cd;XX(f,h,o.a+a.cj|0,o.b+s|0,a.R,a.hp,a.bP,Ed(a),g);p=p+1|0;}if(a.jf&&j>=(( -Od(a.cl)|0)/2|0)){f=a.cl;g=a.ed;if(MF(f.dc.m,0,0,g))RQ(a.cl,a.H,a.cd);}if(a.gA){q=Z(m+1|0,k);UT(a,b,c,Bc(a.R,q)-a.Y|0);}XB(a,b,l,m);XN(a);Cn(a.H,1);I7(a.eV,a.Y,c,Cq(a),PZ(a),O3(a));f=a.eL;i=a.bP;j=a.cj;L3(f,i,b,c-j|0,a.fZ,j,O3(a),0);YI(a);N6(a.bZ);Q8(a.bE);}
function Y5(a,b,c){var d,e,f,g;a:{d=a.y;e=Er(d);d=G7(d);f=e.Z;if(f<=b){g=BD(b,d.Z);if(g<=0){d=Cw(b<=f?e.bA:0,g>=0?d.bA:(-1));break a;}}d=null;}if(d!==null){if(d.b==(-1))d.b=c.L;d.a=E4(c,d.a,a.H.bx,a.bR);d.b=E4(c,d.b,a.H.bx,a.bR);}return d;}
function XB(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=Z(b,Bc(Ca(a.e.g),a.R)-a.Y|0);f=a.d5;g=a.Y;h=a.z;i=a.H;j=a.G.qX;Iu(f,i,c,b);Ui(f,c);Q5(f,g,e,j,i);if(e<b){k=f.fP;Bt(i,k.a,k.b+e|0,Cw(f.ef.a,b-e|0),j.gc);}if(c<=h&&h<=d){c=h/20|0;k=f.ca;l=BK(k,c%k.p|0);m=f.fP;e=Bc(f.ca.p,f.g5);k=l.ek;b=k.b;d=((l.hm.b-(g%e|0)|0)+e|0)%e|0;if((d+b|0)>e)d= -(g%l.bG.cq|0)|0;c=h%l.c8|0;b=l.dF;c=d+Bc(c,b)|0;if(c<( -b|0))c=c+e|0;Bn(l.fj,k.a,b);f=l.eS;b=h%l.c8|0;d=l.dF;Ct(f,0.0,Bc(b,d),l.ek.a,d);HJ(l,i,c,m,j.mX,j.m2);}}
function Js(a){return Z(a.Y/a.R|0,Ca(a.e.g)-1|0);}
function RM(a){return Z(((a.Y+Cq(a)|0)-1|0)/a.R|0,Ca(a.e.g)-1|0);}
function So(a){QC(a.d5,a.bR.data[0],a.R,a.H);Iu(a.d5,a.H,Js(a),Cq(a));}
function OJ(a,b){var c;c=a.fo.data;return c[b%c.length|0];}
function Dq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.eu)return 0;if(DE(a.y))FV(a);c=Tu(RU(b,B(219),B(29)),B(220),(-1));d=c.data;b=a.e.g;e=a.z;f=a.Q;Ur(b,e,f,c);g=d.length;if(!g)h=AN6;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BN(i+Bc(g-1|0,I(B(220)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(220))){m=l+1|0;c[l]=L(B(220),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Us(k);}FO(b,e,f,0,h);e=a.z;m=(e+g|0)-1|
0;CQ(a,m,m!=e?I(d[g-1|0]):a.Q+I(d[0])|0,0);EF(a);Eo(a);return 1;}
function FV(a){var b,c,d;b=Er(a.y);c=a.e.g;d=a.y;Qt(c,d,SE(c,d));CQ(a,b.Z,b.bA,0);EF(a);Eo(a);}
function EF(a){var b;b=a.y;b.c7=0;B$(b.b8,a.z,a.Q);B$(a.y.bX,a.z,a.Q);}
function O3(a){return a.dw.j4|0;}
function UT(a,b,c,d){var e,f,g;if(d<b){e=a.hp;e.b=b-d|0;b=a.cj;e.a=c-b|0;f=a.H;g=a.cd;Bt(f,g.a+b|0,g.b+d|0,e,a.G.hH);}}
function YI(a){if(NP(a.eV)){Cn(a.H,1);G0(a.eV,a.H,a.cd);}if(NP(a.eL)){Cn(a.H,1);G0(a.eL,a.H,a.cd);}}
function XN(a){var b,c,d;Cn(a.H,0);Fq(0,0,0,128,a.eJ.bh);b=a.eJ;c=a.H;d=a.cd;JP(b,c,d.a,d.b);}
function DO(a,b,c){return Z(Bf(0,b),c);}
function GE(a,b){var c,d,e,f,g;b=b.data;a.gy=1;a.gx=1;c=D6(b[0]);d=E6(b[1]);e=(D6(b[2])).data[0];a.e.g=XE(c,d);SO(a,Y2(e));FI(a.bH.u,APj);Fj(a.bH.u);f=IX(E1(),a.d0);g=new M;O(g);G(GM(G(g,B(221)),f),B(222));$rt_globals.console.info($rt_ustr(N(g)));}
function SO(a,b){var c,d;c=Dg(a.e);if(!FX(c,b)){d=new M;O(d);G(G(G(G(d,B(223)),c),B(224)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.hn=b;}}
function Gz(a,b,c,d,e){if(Gu(a,e))return 1;if(c&&d)return 1;if(c)a.Y=DO(a,a.Y+((Bc(b,a.R)*12|0)/10|0)|0,Et(a));else if(!d){Ga(a,a.z+b|0,e);Qp(a);}return 1;}
function Q7(a,b,c,d){var e,f,g;if(Gu(a,d))return 1;e=DT(a);if(!c)f=a.Q+b|0;else if(b>=0)f=RY(e,a.bU);else{b=a.bU;g=F8(e,b);if(!g&&!b)f=(-1);else{f=0;b=0;while(b<g){f=f+I(e.o.data[b].q)|0;b=b+1|0;}}}if(f>e.L){if((a.z+1|0)<Ca(a.e.g)){a.Q=0;Ga(a,a.z+1|0,d);}}else if(f>=0)C4(a,f,d);else{c=a.z;if(c>0){a.Q=(B8(a.e.g,c-1|0)).L;Ga(a,a.z-1|0,d);}}Nz(a);return 1;}
function Gu(a,b){if(DE(a.y)&&!b){EF(a);E0(a);return 1;}if(!(b&&DE(a.y)))EF(a);return 0;}
function CQ(a,b,c,d){a.z=HI(0,b,Ca(a.e.g)-1|0);return C4(a,c,d);}
function Ga(a,b,c){a.z=HI(0,b,Ca(a.e.g)-1|0);return C4(a,a.Q,c);}
function C4(a,b,c){a.Q=HI(0,b,(DT(a)).L);a.bU=a.db===0.0?0:E4(DT(a),a.Q,a.H.bx,a.bR);Hi(a);E0(a);if(c)a.y.c7=1;Pg(a.y,a.z,a.Q);a.y.c7=0;return 1;}
function E0(a){Qp(a);Nz(a);}
function Qp(a){var b,c,d,e,f;b=a.Y;c=b+Cq(a)|0;d=a.z;e=a.R;d=Bc(d,e);f=d+e|0;if(d<(b+e|0))a.Y=DO(a,d-e|0,Et(a));else if(f>(c-e|0))a.Y=DO(a,(f-Cq(a)|0)+a.R|0,Et(a));}
function Nz(a){var b,c,d,e,f;b=(a.db|0)*30|0;c=a.bP;d=c+Ed(a)|0;e=a.bU;f=e+b|0;if(e<(c+b|0))a.bP=DO(a,e-b|0,FB(a));else if(f>(d-b|0))a.bP=DO(a,(f-Ed(a)|0)+b|0,FB(a));}
function I3(a){var b,c,d,e,f;a.gZ=null;Gw(a.gK);if(a.z>=Ca(a.e.g))return;b=a.e.g;c=a.z;d=a.bU;if(!(!Ox(b,c,d)&&!(Mg(b,c,d)===null?0:1)?0:1))return;if(!Ox(a.e.g,a.z,a.bU)){b=JM(a.e.g,a.z,a.bU);e=Mg(a.e.g,a.z,a.bU);}else{b=L4(a.e.g,a.z,a.bU);e=DH(a.e.g.dg,b);}a.gZ=N_(a.e.g,b);b=BV(e);while(B2(b)){f=BX(b);Cc(a.gK,N_(a.e.g,f));}}
function Hu(a,b){var c;CQ(a,b.b1,b.b6,0);c=RY(DT(a),a.bU);B$(a.y.bX,a.z,c);B$(a.y.b8,a.z,a.Q);Ej(a.bZ);}
function Hg(a,b){var c,d;c=b.a;d=HI(0,(b.b+a.Y|0)/a.R|0,Ca(a.e.g)-1|0);c=Bf(0,(c-a.cj|0)+a.bP|0);return JR(d,PX(B8(a.e.g,d),c,a.H.bx,a.bR));}
function DT(a){return B8(a.e.g,a.z);}
function Vv(a,b){var c,d,e;if(!b.c3)a.fy=0;if(!VL(b)&&!W5(b)){if(b.b3&&b.bq==65){c=Ca(a.e.g)-1|0;d=EP(a.e.g,c);B$(a.y.b8,0,0);B$(a.y.bX,Ca(a.e.g)-1|0,d);return 1;}if(!b.c3)return 0;if(QM(a.bZ,b))return 1;e=a.bE;if(!F5(e))c=0;else a:{switch(b.bq){case 27:Di(e);c=1;break a;default:}c=0;}if(c)return 1;c=b.bq;d=b.b3;if(d&&c==80){Iz(a);return 1;}if(!a.eu&&d&&c==90){if(DE(a.y))EF(a);b=ZI(a.e.g);if(b!==null){CQ(a,b.a,b.b,0);Eo(a);}return 1;}if(!d&&!b.c2){if(Br(b.c1,B(225))){Dq(a,B(226));C4(a,a.Q-1|0,0);c=1;}else if
(Br(b.c1,B(227))){Dq(a,B(228));C4(a,a.Q-1|0,0);c=1;}else if(Br(b.c1,B(84))){Dq(a,B(229));C4(a,a.Q-1|0,0);c=1;}else if(Br(b.c1,B(230))){Dq(a,B(231));C4(a,a.Q-1|0,0);c=1;}else if(Br(b.c1,B(232))){Dq(a,B(233));C4(a,a.Q-1|0,0);c=1;}else if(!Br(b.c1,B(234)))c=0;else{Dq(a,B(235));C4(a,a.Q-1|0,0);c=1;}}else c=0;if(c)return 1;b:{if(!(!b.c2&&!b.b3)){d=b.bq;if(d>=48&&d<=57){c=d-48|0;e=a.jQ.data[c];if(e!==null)e.s();c=1;break b;}}c=0;}if(c)return 1;if(WT(a,b))return 1;if(Xf(a,b))return 1;c=b.b3;if(c&&b.bq==87){$rt_globals.console.info("Ctrl-W pressed ;)");return 1;}if
(!c&&!b.c2&&!b.hb){if(b.bq==27)return 0;return I(b.c1)>0&&Dq(a,b.c1)?1:0;}a.fy=c;return 0;}return 0;}
function Tj(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(Br(B(123),Dg(a.e))){b=a.bH.u;c=new P1;c.lx=a;d=R(C,3);e=d.data;e[0]=FA(a.e.g);f=Js(a);g=RM(a);h=Bf(0,f-100|0);f=Z(Ca(a.e.g)-1|0,g+100|0);i=BS(3);j=i.data;j[0]=Fp(a.e.g,h);k=a.e.g;l=0;f=Z(f+1|0,k.A.data.length);m=0;while(m<f){l=l+EP(k,m)|0;if(m!=(k.A.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.g.cF;k=Cx();S4(n,n.co,k);i=BS(3*k.p|0);j=i.data;g=0;m=0;o=j.length;while(g<o){p=BK(k,m);h=g+1|0;j[g]=p.bu;f=h+1|0;j[h]=p.bw;g=f+1|0;j[f]=p.er;m=m+1|0;}e[2]
=i;CL(b,c,B(236),d);}}
function Iz(a){var b,c,d,e;b=Xk(Dg(a.e));if(b!==null){a.d0=E1();c=a.bH.u;d=new La;d.l3=a;e=R(C,1);e.data[0]=FA(a.e.g);CL(c,d,b,e);}}
function PN(a){var b,c,d,e,f,g,h;b=a.e.g.cF;c=Nl(b,b.co);if(c===null)return;if(Br(B(156),Dg(a.e)))Nt(a.e.g);a:{d=EE([CH(c),CN(c),c.bF.er]);e=FA(a.e.g);f=BS(1);g=Dg(a.e);h=(-1);switch(JF(g)){case 3401:if(!Br(g,B(237)))break a;h=3;break a;case 98723:if(!Br(g,B(238)))break a;h=2;break a;case 3254818:if(!Br(g,B(123)))break a;h=1;break a;case 3556653:if(!Br(g,B(156)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=a.bH.u;c=new Q6;c.n6=a;CL(b,c,B(239),H(C,[e,f,d]));}
function Jw(a,b,c){var d,e,f,g,h,i;if(c&&a.eu)return 0;d=Er(a.y);e=d.Z;if(DE(a.y)){f=a.e.g;g=a.y;h=SE(f,g);if(c)Qt(f,g,h);if(c){CQ(a,d.Z,d.bA,0);EF(a);Eo(a);}}else{h=Ft(El(a.e.g.A.data[e]),B(220));i=Z(Ca(a.e.g)-1|0,e);B$(a.y.bX,i,0);if(e>=(Ca(a.e.g)-1|0))B$(a.y.bX,i,EP(a.e.g,i));else B$(a.y.b8,i+1|0,0);if(c)FV(a);else CQ(a,e,0,0);}b.n(h);return 1;}
function Xf(a,b){var c,d,e,f,g,h,i;if(a.eu)return 0;a:{switch(b.bq){case 8:if(DE(a.y)){FV(a);c=1;}else{d=a.Q;if(!d&&!a.z)c=1;else{if(d){e=a.z;d=d-1|0;Nj(a.e.g,e,d);}else{e=a.z-1|0;d=EP(a.e.g,e);b=a.e.g;Jr(b,e);FO(b,e,EP(b,e),1,B(220));}Eo(a);c=CQ(a,e,d,0);}}break a;case 9:Dq(a,a.re);c=1;break a;case 13:if(DE(a.y))FV(a);DR(B8(a.e.g,a.z));b=a.e.g;c=a.z;d=a.Q;f=b.A;g=f.data;h=g[c];f=CV(f,g.length+1|0);g=f.data;b.A=f;i=g.length-1|0;while(true){e=i-1|0;if(e<=c)break;g[i]=g[e];i=i+(-1)|0;}if(!d){g[c]=Do(R(B0,0));b.A.data[c
+1|0]=h;}else if(d==h.L){g[c]=h;g[c+1|0]=Do(R(B0,0));}else{g=(Hm(h,d)).data;f=b.A.data;f[c]=g[0];f[c+1|0]=g[1];}FO(b,c,d,0,B(220));Eo(a);c=CQ(a,a.z+1|0,0,0);break a;case 16:case 18:case 20:case 45:break;case 46:if(DE(a.y))FV(a);else Nj(a.e.g,a.z,a.Q);E0(a);Eo(a);c=1;break a;default:c=0;break a;}c=1;}return c;}
function WT(a,b){var c;a:{switch(b.bq){case 33:c=b.b3?Ga(a,J9(a.Y,a.R),b.bs):Gz(a,2-SQ(Cq(a),a.R)|0,0,b.c2,b.bs);break a;case 34:c=!b.b3?Gz(a,SQ(Cq(a),a.R)-2|0,0,b.c2,b.bs):Ga(a,((a.Y+Cq(a)|0)/a.R|0)-1|0,b.bs);break a;case 35:if(!Gu(a,b.bs)&&!C4(a,(DT(a)).L,b.bs)){c=0;break a;}c=1;break a;case 36:if(!Gu(a,b.bs)&&!C4(a,0,b.bs)){c=0;break a;}c=1;break a;case 37:c=Q7(a,(-1),b.b3,b.bs);break a;case 38:c=Gz(a,(-1),b.b3,b.c2,b.bs);break a;case 39:c=Q7(a,1,b.b3,b.bs);break a;case 40:c=Gz(a,1,b.b3,b.c2,b.bs);break a;default:}c
=0;}if(c&&b.bs)B$(a.y.bX,a.z,a.Q);I3(a);return c;}
function Eo(a){a.e.g.mN=H8(a.bH.u);}
function Xk(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(JF(b)){case 3401:if(!Br(b,B(237)))break a;c=2;break a;case 98723:if(!Br(b,B(238)))break a;c=1;break a;case 3254818:if(!Br(b,B(123)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(240);break b;case 2:b=B(241);break b;default:b=null;break b;}b=B(242);}}return b;}
function Sz(){C.call(this);this.bW=null;}
function AIr(a){EM(a.bW.k);}
function AGA(a){Di(a.bW.k.bE);MS(a.bW.k);}
function ADz(a,b,c,d){var e,f;b=a.bW.k;e=BU((b.R*4|0)*d/150.0);f=BU(c);b.Y=DO(b,b.Y+e|0,Et(b));b.bP=DO(b,b.bP+f|0,FB(b));return 1;}
function ADj(a,b,c,d,e){var f,g,h,i,j,k;f=a.bW.k;g=f.bD;h=b.S;i=h.a;j=f.cd;Bn(g,i-j.a|0,h.b-j.b|0);if(!d)f.y.c7=0;a:{if(!d&&f.em!==null){f.em=null;c=1;}else if(R4(f.bZ,f.bD,c,d,e))c=1;else if(MD(f.bE,f.bD,c,d,e))c=1;else if(!c&&e==2&&d){b=f.bD;f.z=HI(0,(b.b+f.Y|0)/f.R|0,Ca(f.e.g)-1|0);g=DT(f);c=PX(g,Bf(0,(b.a-f.cj|0)+f.bP|0),f.H.bx,f.bR);f.Q=c;f.bU=E4(g,c,f.H.bx,f.bR);I3(f);Hi(f);E0(f);b=DT(f);c=NL(b,f.bU);i=F8(b,f.bU);d=b.o.data.length;if(i>=d)i=d-1|0;e=0;k=0;while(k<(i+1|0)){e=e+I(b.o.data[k].q)|0;k=k+1|0;}B$(f.y.b8,
f.z,c);f.y.c7=1;CQ(f,f.z,e,0);f.y.c7=0;c=1;}else{if(!c&&e==1&&d){g=Gm(f.eV,f.bD,f.pJ,1);f.em=g;if(g!==null){c=1;break a;}g=Gm(f.eL,f.bD,f.p4,0);f.em=g;if(g!==null){c=1;break a;}if(Dl(f.eJ,f.bD)){f.em=APk;c=1;break a;}g=new Pf;g.nE=f;g.nF=b;f.em=g;g.n(f.bD);}c=1;}}return c;}
function AKM(a,b){var c,d,e,f;if(!F5(a.bW.k.bE)){c=a.bW;d=c.k.bE;b=b.S;c=Zr(c,b);e=a.bW.k;Cf(e);f=new Rb;f.lS=e;Iw(d,b,c,f);MS(a.bW.k);}return 1;}
function AIy(a,b){var c,d,e,f,g,h,i,j,k;a:{c=a.bW;d=c.k;c=c.lC;e=d.bD;b=b.S;f=b.a;g=d.cd;Bn(e,f-g.a|0,b.b-g.b|0);if(Qn(d.bZ,d.bD,c))f=1;else if(R0(d.bE,d.bD,c))f=1;else{b=d.em;if(b!==null){b.n(d.bD);f=1;}else if(GS(d.eV,d.bD,c))f=1;else if(GS(d.eL,d.bD,c))f=1;else{b=d.d5;if(Ig(d.bD,Cw(0,0),b.ef)&&Gk(c)?1:0)f=1;else{b:{b=d.bD;h=d.cj;i=Ed(d);j=Cq(d);k=b.a;if(k>=h&&k<(h+i|0)){h=b.b;if(h>=0&&h<(0+j|0)){f=1;break b;}}f=0;}if(!f)f=Gk(c);else{if(d.fy){b=Hg(d,d.bD);T7(d.e.g,b);d=d.e.g;if(!LZ(d.ds,b)&&!LZ(d.dg,b)?0:
1){f=I9(c,B(155));break a;}}f=I9(c,B(156));}}}}}return f;}
function ACr(a,b){var c;if(!b.c3)c=0;else if(b.b3&&b.bq==79){if(!b.bs)TH(a.bW);else J$(a.bW.X.u,new Lg);c=1;}else c=0;return !c&&!Vv(a.bW.k,b)?0:1;}
function AGd(a,b,c){return Jw(a.bW.k,b,c);}
function AAM(a){var b,c;b=a.bW.k;Cf(b);c=new QI;c.lN=b;return c;}
function B_(){var a=this;C.call(a);a.b_=0.0;a.cT=0.0;a.cC=0.0;a.ch=0.0;}
function Ct(a,b,c,d,e){a.b_=b;a.cT=c;a.cC=d;a.ch=e;}
function Bu(a,b){a.b_=b.b_;a.cT=b.cT;a.cC=b.cC;a.ch=b.ch;return a;}
var Cl=F(0);
var APb=null;var APl=null;var AOY=null;var AO8=null;var AO9=null;var APc=null;var APd=null;var APm=null;var APn=null;var APo=null;var APp=null;var APe=null;var APq=null;var APf=null;var APr=null;function D_(){D_=Bk(Cl);AG_();}
function AG_(){APb=CW(187);APl=CW(0);AOY=CW(43);AO8=Bp(B(243));AO9=CW(85);APc=Cp(60,63,65);APd=Cp(33,66,131);APm=Cp(255,255,255);APn=Cp(0,0,0);APo=Cp(212,212,212);APp=Cp(166,214,255);APe=Bp(B(244));APq=Bp(B(245));APf=Bp(B(246));APr=Bp(B(245));}
function Hk(){var a=this;C.call(a);a.m=null;a.h=null;a.bh=null;a.O=null;}
function Xv(){var a=new Hk();Pq(a);return a;}
function PL(a,b,c,d){var e=new Hk();ACT(e,a,b,c,d);return e;}
function Pq(a){a.m=new Bm;a.h=new Bm;a.bh=new B_;a.O=new B_;}
function ACT(a,b,c,d,e){a.m=new Bm;a.h=new Bm;a.bh=new B_;a.O=new B_;IF(a,b,c,d,e);}
function IF(a,b,c,d,e){Bn(a.m,b,c);Bn(a.h,d,e);}
function PY(a){Bn(a.h,0,0);}
function Ht(a){var b;b=a.h;return Bc(b.a,b.b)?0:1;}
function Dl(a,b){return Ig(b,a.m,a.h);}
function JP(a,b,c,d){var e;e=a.m;Bt(b,e.a+c|0,e.b+d|0,a.h,a.bh);}
function Q1(a,b,c,d,e,f){var g,h,i;g=a.m;d=g.a+d|0;e=g.b+e|0;g=a.h;h=a.O;i=a.bh;Jx(b,b.f_);Kx(b.f_,b.bC,d,e,g,b.dm);Re(b.f_,b.bC,c);c=b.f_;g=b.bC;G5(g,c.qO,h);G5(g,c.qM,i);c=c.m9;g.uniform2f(c,f,0.0);b.el=IA(b.gV,b.el);}
function J6(){Hk.call(this);this.cn=null;}
function PJ(){var a=new J6();ABl(a);return a;}
function NJ(a,b,c,d){var e=new J6();PI(e,a,b,c,d);return e;}
function ABl(a){Pq(a);a.cn=new B_;}
function PI(a,b,c,d,e){Pq(a);a.cn=new B_;IF(a,b,c,d,e);}
function Ki(a){var b,c;b=a.h;c=a.cn;Bn(b,c.cC-c.b_|0,c.ch-c.cT|0);}
function IO(a,b){GC(a,0,0,b.bJ,b.cq);}
function GC(a,b,c,d,e){Ct(a.cn,b,c,d,e);}
function De(a,b,c,d,e,f){var g;g=a.m;IZ(b,g.a+d|0,g.b+e|0,a.h,a.cn,c,a.bh,a.O,f);}
function GF(a,b){Bu(a.bh,b);}
function Hx(a,b,c){Bu(a.bh,b);Bu(a.O,c);}
function GA(a,b){Bu(a.O,b);}
function W1(){var a=this;C.call(a);a.dc=null;a.jo=0.0;a.fM=0.0;a.fq=0;}
function AGQ(){var a=new W1();AKJ(a);return a;}
function AKJ(a){var b;b=PL(0,0,2,20);a.dc=b;a.jo=0.5;a.fM=0.0;Fq(187,187,187,255,b.bh);}
function PK(a){return a.dc.h.b;}
function Od(a){return a.dc.h.a;}
function PU(a,b){var c,d;a:{c=a.fq;if(b>a.fM)while(true){d=a.fM+a.jo;a.fM=d;a.fq=a.fq?0:1;if(b>d)continue;else break a;}}return a.fq==c?0:1;}
function NR(a,b,c){Bn(a.dc.m,b,c);}
function Pw(a,b){a.fM=b+a.jo*1.25;a.fq=1;}
function RQ(a,b,c){if(a.fq)JP(a.dc,b,c.a,c.b);}
function QN(){var a=this;C.call(a);a.qV=null;a.dK=null;}
function AHP(a,b){var c,d,e,f,g,h,i;c=a.dK;d=c.h2;if(d!==null){e=c.cJ.m;f=e.a;g=b.S;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.h2=g;}d=b.S;f=d.a;c=c.fn;e=c.h;f=f-e.a|0;h=d.b-e.b|0;Bn(c.m,f,h);b=b.S;a.qV=b;c=a.dK;d=c.X.u;f=0;a:{while(true){i=c.fQ.data;if(f>=i.length)break;if(Dl(i[f],b)){b=c.rh.data[f];break a;}f=f+1|0;}b=null;}FI(d,b);return 1;}
function AED(a,b,c,d){var e,f,g;e=( -d|0)/10|0;b=a.dK.cJ;f=b.h;f.a=f.a+e|0;f.b=f.b+e|0;b=b.m;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function AKf(a,b,c,d,e){var f,g,h;f=!d?B(247):B(248);g=Bw();h=new M;O(h);T(G(T(G(h,f),c),B(249)),e);Bq(g,N(h));if(!c&&e==1){g=b.S;b=a.dK;b.h2=d&&Dl(b.cJ,g)?g:null;if(d){NR(a.dK.f1,g.a,g.b);b=a.dK;Pw(b.f1,H8(b.X.u));}}if(!c&&e==2){b=a.dK;To(b,b.cJ);}return 1;}
function AGU(a,b){var c,d,e,f,g,h;c=Bw();d=!b.c3?B(250):B(251);e=b.c1;f=b.bq;g=b.ju;h=new M;O(h);Fk(G(T(G(G(G(h,d),e),B(252)),f),B(253)),g);Bq(c,N(h));return !VL(b)&&!W5(b)?1:0;}
function AKu(a,b){Bq(Bw(),B(254));return 1;}
function AA9(a,b,c){var d,e;Bq(Bw(),B(255));d=!c?B(256):B(25);e=new M;O(e);G(G(G(e,B(257)),d),B(258));SP(b,N(e));return 1;}
function AIQ(a){Bq(Bw(),B(259));}
function Hw(){var a=this;B_.call(a);a.fd=0;a.fg=0;a.fe=0;a.ff=0;}
function CW(a){var b=new Hw();AKR(b,a);return b;}
function Cp(a,b,c){var d=new Hw();ACD(d,a,b,c);return d;}
function Bp(a){var b=new Hw();AI3(b,a);return b;}
function APs(a,b,c,d){var e=new Hw();Oq(e,a,b,c,d);return e;}
function CG(a){var b=new Hw();MO(b,a);return b;}
function AKR(a,b){Oq(a,b,b,b,255);}
function ACD(a,b,c,d){Oq(a,b,c,d,255);}
function AI3(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.fd=HA(L(b,1))*17|0;a.fg=HA(L(b,2))*17|0;a.fe=HA(L(b,3))*17|0;a.ff=255;}else{a.fd=JY(L(b,1),L(b,2));a.fg=JY(L(b,3),L(b,4));a.fe=JY(L(b,5),L(b,6));a.ff=I(b)!=9?255:JY(L(b,7),L(b,8));}Fq(a.fd,a.fg,a.fe,a.ff,a);return;}}
function Oq(a,b,c,d,e){a.fd=b;a.fg=c;a.fe=d;a.ff=e;Fq(b,c,d,e,a);}
function MO(a,b){a.fd=b.fd;a.fg=b.fg;a.fe=b.fe;a.ff=b.ff;Bu(a,b);}
function HA(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function JY(b,c){return (16*HA(b)|0)+HA(c)|0;}
function VU(){var a=this;C.call(a);a.fi=null;a.ba=null;a.dx=null;a.ce=null;a.eB=null;a.bM=null;a.eQ=null;a.bl=0;a.dY=0;a.jP=0;a.gp=0;a.eR=0;a.hI=null;a.h1=null;a.pv=null;}
function Vn(){var a=new VU();AKh(a);return a;}
function AKh(a){var b;a.ba=Xv();a.dx=new Bm;a.ce=new Bm;b=new B_;b.ch=0.125;a.eB=b;a.bM=APt;a.gp=(-1);}
function Jh(a,b){QE(a);a.bM=b;}
function HX(a,b){Bu(a.ba.bh,b);}
function Kg(a,b){Bu(a.ba.O,b);}
function O6(a,b){a.fi=b;QE(a);}
function KU(a,b,c){var d,e,f;c=(c.gR.kj()).data;d=c.length;e=0;while(e<d){f=c[e];MJ(f,b);if(Gn(f))KU(a,b,f);e=e+1|0;}}
function Qs(a){a.eQ=Dy(a.eQ,null);Bn(a.dx,0,0);a.bM=APt;a.gp=(-1);PY(a.ba);}
function Fu(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.fi;if(d===null){b=new Bh;Ba(b,B(260));J(b);}Dx(b,d);e=ND(a.fi,1.25);f=0;a.bl=BU(2.0*c);a.dY=BU(3.0*c);a.jP=BU(12.0*c);g=0;h=a.bM.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Dk(b,l.iH)+0.875|0;n=a.jP;n=(n+m|0)+n|0;f=Bf(f,n);d=l.cQ;l=d.m;l.a=g;l.b=0;l=d.h;l.a=n;l.b=e;Ct(d.cn,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.dx;b.a=g;b.b=e;b=a.ba.h;m=a.eR;if(!m){n=a.bl;n=(g+n|0)+Bc(n,a.bM.data.length)|0;}else n=(f+(a.bl*2|0)|0)+(a.dY*2|0)|0;b.a=n;if(!m)e=e+(a.bl*2|0)|0;else{m=a.bl;e
=(Bc(e+m|0,a.bM.data.length)+m|0)+(a.dY*2|0)|0;}b.b=e;}
function Ir(a,b,c){var d,e,f,g,h,i,j;Bn(a.ba.m,b,c);d=a.bl+a.dY|0;e=a.bM.data;f=e.length;g=0;h=d;while(g<f){i=e[g].cQ;j=i.m;j.a=b+d|0;j.b=c+h|0;if(!a.eR){if(!i.h.a)ZU();d=d+(i.h.a+a.bl|0)|0;}else{if(!i.h.b)ZU();h=h+(i.h.b+a.bl|0)|0;}g=g+1|0;}}
function ZU(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function DM(a){var b,c;b=a.dx;if(b.a&&b.b)return a.ba.h;c=new Bh;Ba(c,B(261));J(c);}
function QE(a){Bn(a.dx,0,0);}
function HP(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(!a.bM.data.length)return;a:{if(a.eQ!==null){d=a.dx;if(Bc(d.a,d.b))break a;}d=a.dx;if(!Bc(d.a,d.b))Fu(a,b.bx,c);d=a.dx;e=d.a;f=d.b;if(!Bc(e,f))return;d=C_(b,e,f);Dx(d,a.fi);g=ND(a.fi,0.125);h=a.fi;i=h.fE;g=g+i-(i+h.eN)/16.0;j=a.bM.data;e=j.length;f=0;while(f<e){h=j[f];Co(d,h.iH,h.cQ.cn.b_+a.jP,g);f=f+1|0;}h=Dy(a.eQ,Dr(b));a.eQ=h;Df(h,d);HC(d);}if(!Ht(a.ba))VS(a,b);j=a.bM.data;e=j.length;f=0;while(f<e){De(j[f].cQ,b,a.eQ,0,0,0.0);f=f+1|0;}b:{if(a.eR){j=a.bM.data;f=
j.length;k=0;while(true){if(k>=f)break b;d=j[k].cQ;h=a.ce;e=(a.ba.h.a-(a.bl*2|0)|0)-(a.dY*2|0)|0;l=d.h;e=e-l.a|0;h.a=e;h.b=l.b;if(e>0){m=d.m;Bt(b,m.a+l.a|0,m.b,h,d.O);}k=k+1|0;}}}}
function VS(a,b){var c,d,e,f,g;c=a.ce;d=a.ba;c.a=d.h.a;c.b=a.bl;e=d.m;Bt(b,e.a,e.b,c,d.O);c=a.ba;d=c.m;Bt(b,d.a,(d.b+c.h.b|0)-a.bl|0,a.ce,c.O);c=a.ce;f=a.bl;c.a=f;d=a.ba;c.b=(d.h.b-f|0)-f|0;e=d.m;Bt(b,e.a,e.b+f|0,c,d.O);c=a.ba;d=c.m;f=d.a+c.h.a|0;g=a.bl;Bt(b,f-g|0,d.b+g|0,a.ce,c.O);c=a.ce;d=a.ba;e=d.h;f=e.a;g=a.bl;c.a=(f-g|0)-g|0;c.b=(e.b-g|0)-g|0;e=d.m;Bt(b,e.a+g|0,e.b+g|0,c,d.bh);if(a.eR){c=a.ce;d=a.ba;e=d.h;c.a=e.a;f=a.bl;c.b=f;d=d.m;Bt(b,d.a+f|0,d.b+e.b|0,c,a.eB);c=a.ba;d=c.m;Bt(b,d.a+a.bl|0,d.b+c.h.b|0,
a.ce,a.eB);c=a.ba;d=c.m;f=d.a;g=a.bl;Bt(b,f+(g*2|0)|0,(d.b+c.h.b|0)+g|0,a.ce,a.eB);c=a.ce;f=a.bl;c.a=f;d=a.ba;e=d.h;c.b=e.b-f|0;d=d.m;Bt(b,d.a+e.a|0,d.b+f|0,c,a.eB);c=a.ba;d=c.m;Bt(b,d.a+c.h.a|0,d.b+a.bl|0,a.ce,a.eB);c=a.ba;d=c.m;f=d.a+c.h.a|0;g=a.bl;Bt(b,f+g|0,d.b+(g*2|0)|0,a.ce,a.eB);}}
function IM(a,b,c){var d,e,f,g,h,i;d=Dl(a.ba,b);e=!d?(-1):RN(a,b);f=a.gp;if(f!=e){if(f>=0){g=a.bM.data[f];H$(g,0);if(a.pv!==null){f=a.gp;h=Bw();g=Cj(g);i=new M;O(i);G(G(T(G(i,B(262)),f),B(263)),g);Bq(h,N(i));}}if(e>=0){h=a.bM.data[e];H$(h,1);g=a.h1;if(g!==null)g.lA(b,e,h);}a.gp=e;}return d&&Gk(c)?1:0;}
function IP(a,b,c,d,e){var f,g;if(!Dl(a.ba,b)){if(d&&!Ht(a.ba)){b=a.hI;if(b!==null)b.s();}return 0;}if(e==1&&d){f=RN(a,b);if(f>=0){g=a.bM.data[f];if(!Gn(g))g.q5.s();}}return 1;}
function RN(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.bM.data;if(c>=d.length)return (-1);e=d[c].cQ;if(Dl(e,b))return c;if(a.eR){f=e.m;g=f.a;e=e.h;h=e.a;g=g+h|0;i=f.b;f=a.ce;f.a=(a.ba.h.a-(a.bl*2|0)|0)-h|0;f.b=e.b;if(MF(b,g,i,f))break;}c=c+1|0;}return c;}
function PQ(a){a.eR=1;}
function U9(){var a=this;C.call(a);a.f5=null;a.b$=null;a.fz=null;a.gr=0.0;a.hx=null;a.is=null;a.ki=null;a.g_=null;}
function AA4(a){var b=new U9();AEi(b,a);return b;}
function AEi(a,b){a.f5=new Bm;a.b$=Cx();C1();a.is=AO4;a.ki=AO5;a.g_=APu;a.fz=b;}
function Iw(a,b,c,d){var e;if(a.hx!==null&&!F5(a)){a.g_=d;e=Qz(a,b,c,null);b=new P2;b.pB=a;e.hI=b;return;}b=new BC;U(b);J(b);}
function Di(a){if(F5(a)){Qq(a,null);a.g_.s();a.g_=APu;}}
function Qz(a,b,c,d){var e,f,g;e=a.f5;if(Bc(e.a,e.b)&&a.gr!==0.0){e=Vn();PQ(e);Jh(e,c.kj());O6(e,a.hx);HX(e,a.is);Kg(e,a.ki);Fu(e,a.fz.bx,a.gr);if(d===null)f=b.a;else{g=b.a;f=a.f5.a<((g+(DM(d)).a|0)+(DM(e)).a|0)?g-(DM(e)).a|0:(g+(DM(d)).a|0)-d.dY|0;}g=b.b;b=a.f5;Ir(e,Bf(0,Z(f,b.a-(DM(e)).a|0)),Bf(0,Z(g,b.b-(DM(e)).b|0)));b=new LI;b.qc=a;b.qd=e;e.h1=b;Cc(a.b$,e);return e;}c=new DX;Ba(c,B(264));J(c);}
function T5(a,b,c){C0(a.f5,b);if(a.gr!==c){b=BV(a.b$);while(B2(b)){Fu(BX(b),a.fz.bx,c);}a.gr=c;}}
function Q8(a){var b,c;if(!DP(a.b$))Cn(a.fz,1);b=0;while(true){c=a.b$;if(b>=c.p)break;HP(BK(c,b),a.fz,a.gr);b=b+1|0;}}
function R0(a,b,c){var d,e;d=0;e=a.b$.p-1|0;a:{while(e>=0){d=IM(BK(a.b$,e),b,c);if(d)break a;e=e+(-1)|0;}}return d;}
function MD(a,b,c,d,e){var f,g;f=0;g=a.b$.p-1|0;a:{while(g>=0){f=IP(BK(a.b$,g),b,c,d,e);if(f)break a;g=g+(-1)|0;}}return f;}
function Qq(a,b){var c,d;c=a.b$.p-1|0;a:{while(true){if(c<0)break a;d=BK(a.b$,c);if(b===d)break;F7(a.b$,c);Qs(d);c=c+(-1)|0;}}}
function F5(a){return a.b$.p<=0?0:1;}
var Qf=F();
function AJY(a){Bq(Bw(),B(265));}
var Qh=F();
function AIf(a){Bq(Bw(),B(266));}
function DF(){var a=this;C.call(a);a.cQ=null;a.q5=null;a.hM=null;a.gR=null;a.iH=null;a.jt=0;}
function AJA(a,b,c){var d=new DF();O2(d,a,b,c);return d;}
function AMU(a,b,c,d){var e=new DF();W_(e,a,b,c,d);return e;}
function O2(a,b,c,d){W_(a,b,c,d,null);}
function W_(a,b,c,d,e){var f;f=PJ();a.cQ=f;a.jt=0;a.iH=c;a.hM=d;a.q5=b;Bu(f.bh,d.kl);Bu(a.cQ.O,d.fI);a.gR=e;}
function Gn(a){return a.gR===null?0:1;}
function H$(a,b){Bu(a.cQ.O,!b?a.hM.fI:a.hM.p_);a.jt=b;}
function MJ(a,b){b=b.K.be;a.hM=b;Hx(a.cQ,b.kl,b.fI);if(a.jt)H$(a,1);}
function Xs(){var a=this;C.call(a);a.ia=null;a.b4=null;a.f7=null;a.j_=null;a.gE=0.0;a.it=null;a.gw=null;a.gH=null;a.gY=null;}
function AJ0(a){var b=new Xs();AKb(b,a);return b;}
function AKb(a,b){a.ia=new Bm;a.b4=AJk();C1();a.j_=APv;a.gw=AOX;a.gH=APu;a.f7=b;}
function OE(a,b,c){a.it=b;a.gw=c;}
function IB(a,b,c,d){var e,f,g;if(a.it!==null&&!Ex(a)){a.gH=d;e=AJk();R5(e);e.bf=c;e.eI=a.it;R5(e);QZ(e,a.gw);RJ(e,a.j_);Io(e,a.f7.bx,a.gE);f=b.a;g=b.b;b=a.ia;TS(e,Bf(0,Z(f,b.a-(J7(e)).a|0)),Bf(0,Z(g,b.b-(J7(e)).b|0)));a.b4=e;b=new Ne;b.n1=a;e.qG=b;return;}b=new BC;U(b);J(b);}
function Ej(a){var b;if(!Ex(a))return 0;b=a.b4;b.dN=Dy(b.dN,null);Bn(b.dV,0,0);b.bf=APw;b.bQ=(-1);PY(b.bb);a.gH.s();a.gH=APu;return 1;}
function R9(a,b,c){C0(a.ia,b);if(a.gE!==c){if(!HN(a.b4))Io(a.b4,a.f7.bx,c);a.gE=c;}}
function N6(a){if(!HN(a.b4))Cn(a.f7,1);X5(a.b4,a.f7,a.gE);}
function Qn(a,b,c){var d,e,f,g;d=a.b4;e=Dl(d.bb,b);f=!e?(-1):P3(d,b);if(d.bQ!=f&&f>=0){FC(d.bf.data[f],1);g=d.bQ;if(g>=0)FC(d.bf.data[g],0);d.bQ=f;}return e&&Gk(c)?1:0;}
function R4(a,b,c,d,e){var f;f=a.b4;if(!Dl(f.bb,b)){if(d&&!Ht(f.bb)){b=f.qG;if(b!==null)Ej(b.n1);}c=0;}else{if(e==1&&d){c=P3(f,b);if(c>=0)f.bf.data[c].jc.s();}c=1;}return c;}
function Ex(a){return HN(a.b4)?0:1;}
function QF(a,b,c,d){return WV(a,b,null,c,d);}
function Uf(a,b){return b===null?B(29):b.Ak();}
function WV(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r;if(a.gY===null){b=new Bh;Ba(b,B(267));J(b);}f=AHq();g=0;h=c!==null?c.data.length:b.p;i=0;a:{while(true){if(i>=h)break a;if(c===null){j=(BK(b,i)).b1;k=Pe(El(B8(e.g,j)));l=Uf(a,e.e4);}else{m=c.data;j=m[i].ip.i3;k=!FX(d.e.e4,m[i].gM)?B(29):Pe(El(B8(e.g,j)));l=Uf(a,m[i].gM);}if(I(k)>43){n=B6(k,0,40);o=new M;O(o);G(G(o,n),B(268));k=N(o);}n=CZ(j+1|0);g=g+1|0;if(g>20)break;if(c!==null){m=c.data;o=null;p=m[i];}else{p=null;o=BK(b,i);}if(c!==null){q=new Og;q.kZ=d;q.kY
=p;}else{q=new Oi;q.nh=d;q.ng=o;}J0(f,l,n,k,a.gY.K.eO,q);i=i+1|0;}r=b.p-(g-1|0)|0;b=new M;O(b);G(T(G(b,B(269)),r),B(270));J0(f,N(b),B(29),B(29),a.gY.K.pz,new Oh);}return Or(f);}
function QM(a,b){var c,d;if(!Ex(a))return 0;a:{c=b.bq;switch(c){case 13:b=a.b4;d=b.bQ;if(d==(-1))c=0;else{b.bf.data[d].jc.s();c=1;}break a;case 27:break;case 37:case 38:case 39:case 40:b=a.b4;d=b.bQ;if(d>=0)FC(b.bf.data[d],0);b:{c:{switch(c){case 38:c=b.bf.data.length;c=((c+b.bQ|0)-1|0)%c|0;b.bQ=c;if(c!=20)break b;b.bQ=19;break b;case 39:b.bQ=Z(b.bf.data.length,20)-1|0;break b;case 40:break c;default:}b.bQ=0;break b;}c=b.bQ;if(c==19)b.bQ=0;else b.bQ=(c+1|0)%b.bf.data.length|0;}FC(b.bf.data[b.bQ],1);c=1;break a;default:c
=0;break a;}c=Ej(a);}return c;}
var Db=F(0);
var AO7=null;var APx=null;var AO4=null;var AO5=null;var AO6=null;var AOX=null;var APv=null;var AO$=null;var APy=null;function C1(){C1=Bk(Db);AEr();}
function AEr(){AO7=UD(50,50,50,100);APx=UD(80,80,80,200);AO4=Bp(B(271));AO5=Bp(B(213));AO6=Bp(B(272));AOX=Bp(B(271));APv=Bp(B(213));AO$=Bp(B(272));D_();APy=APm;}
function Xn(){var a=this;C.call(a);a.s$=20;a.fP=null;a.ef=null;a.g6=null;a.iQ=0;a.g5=0;a.ht=0.0;a.ca=null;a.dP=null;a.es=null;a.eE=0;}
function AF$(){var a=new Xn();AJ_(a);return a;}
function AJ_(a){a.s$=20;a.fP=new Bm;a.ef=new Bm;a.ca=Cx();}
function Ui(a,b){var c,d,e,f,g;c=a.eE;if(b==c)return;d=a.ca.p;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Bf(0,(c-1|0)/20|0);f=Bf(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){PB(a,b);a.eE=b;}else{if(a.eE>=b)while(true){if(g<f)break a;a.eE=P0(BK(a.ca,g%d|0),a.dP,a.es,a.eE,b,e,a.ht);g=g+(-1)|0;}while(f<=g){a.eE=P0(BK(a.ca,f%d|0),a.dP,a.es,a.eE,b,e,a.ht);f=f+1|0;}}}}
function Q5(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=BV(a.ca);while(B2(f)){g=BX(f);h=a.fP;i=Bc(a.ca.p,a.g5);j=g.ek.b;k=((g.hm.b-(b%i|0)|0)+i|0)%i|0;l=k+j|0;m=BD(l,c);if(m<=0){Bn(g.fj,g.bG.bJ,j);Ct(g.eS,0.0,0.0,g.bG.bJ,j);HJ(g,e,k,h,d.hv,d.gc);}else{if(m>0&&k<c){m=Bf(c-k|0,0);Bn(g.fj,g.bG.bJ,m);Ct(g.eS,0.0,0.0,g.bG.bJ,m);HJ(g,e,k,h,d.hv,d.gc);}if(l>i){m=Z(l%i|0,c);Bn(g.fj,g.bG.bJ,m);n=g.eS;o=g.bG;Ct(n,0.0,b%o.cq|0,o.bJ,m);HJ(g,e,0,h,d.hv,d.gc);}}}}
function Iu(a,b,c,d){var e,f,g,h,i,j;e=a.ca.p;while(true){f=a.ca.p;g=Bc(f,a.g5);if(g>(d+a.iQ|0))break;h=Cw(0,g);i=new Ly;g=a.ef.a;f=a.iQ;j=a.g6;i.fj=new Bm;i.eS=new B_;i.hm=h;i.c8=20;i.dF=f;i.ek=Cw(g,20*f|0);i.eW=Qo(j,f);if(i.bG===null)i.bG=Dr(b);Cc(a.ca,i);}if(f==e)return;PB(a,c);}
function PB(a,b){var c,d,e,f,g,h,i,j;c=a.ca;d=c.p;e=Bc((b/(d*20|0)|0)+1|0,d)*20|0;c=BV(c);while(B2(c)){f=BX(c);g=a.dP;h=a.ht;D8(g);i=0;while(true){j=f.c8;if(i>=j)break;j=e-Bc(d,j)|0;if(j<b)j=e;e=j+1|0;Fn(f,g,CZ(e),Bc(f.dF,i)+f.eW|0,h);i=i+1|0;}Df(f.bG,g);}}
function QC(a,b,c,d){var e;a.g6=b;a.iQ=c;e=c*20|0;a.g5=e;b=Dy(a.dP,C_(d,a.ef.a,e));a.dP=b;Dx(b,a.g6);Po(a.dP,2);b=Dy(a.es,C_(d,a.ef.a,c));a.es=b;Dx(b,a.g6);Po(a.es,2);}
function R8(a,b,c,d,e){C0(a.fP,b);Bn(a.ef,c,d);a.ht=e;}
var Vs=F(0);
function UD(b,c,d,e){return Fq(b,c,d,e,new B_);}
function Fq(b,c,d,e,f){Ct(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Ia(b,c,d,e,f){var g,h,i,j;g=b*6.0;c=d*c;h=g%2.0-1.0;if(h<=0.0)h= -h;i=c*(1.0-h);d=d-c;j=0.0;if(g>=1.0){if(g<2.0){b=c;c=i;i=b;}else if(g<3.0){b=c;j=i;c=0.0;i=b;}else if(g<4.0){j=c;c=0.0;}else if(g>=5.0){j=i;i=0.0;}else{j=c;c=i;i=0.0;}}f.b_=c+d;f.cT=i+d;f.cC=j+d;f.ch=e;return f;}
function FS(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var YH=F(0);
function YZ(){return AF7(Cp(96,99,102),Cp(49,51,53),Cp(164,163,163),CW(50));}
function SZ(){var a=this;C.call(a);a.hy=null;a.nT=null;a.fY=null;}
function ACg(a,b,c,d){var e,f;e=(KW(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b=a.fY;b.dh=Z(Bf(0,b.dh+Bc(e,f)|0),NS(b));return 1;}
function AC$(a,b,c,d,e){if(!d&&a.hy!==null){a.hy=null;return 1;}if(!c&&e==1&&d){b=Gm(a.fY.fK,b.S,a.nT,1);a.hy=b;if(b!==null)return 1;}return 1;}
function AC5(a,b){var c;c=a.hy;if(c!==null){c.n(b.S);return 1;}c=a.fY;return GS(c.fK,b.S,Hd(c.X.u));}
function Xm(){var a=this;C.call(a);a.d$=null;a.cr=null;a.df=null;a.dC=null;a.kz=null;a.hZ=null;}
function LW(){var a=new Xm();AC1(a);return a;}
function AC1(a){var b;a.d$=new Bm;a.cr=new Bm;a.df=new Bm;a.dC=new Bm;b=new B_;a.kz=b;a.hZ=new B_;C1();Bu(b,AO7);Bu(a.hZ,APx);}
function NP(a){var b;b=a.cr;return !Bc(b.a,b.b)?0:1;}
function TG(a,b){return Ig(b,a.df,a.dC);}
function Gm(a,b,c,d){var e,f,g,h;e=TG(a,b);f=Ig(b,a.d$,a.cr);if(!e&&!f)return null;if(!f){if(!d)c.n(P5(a,b.a-a.df.a|0));else c.n(P4(a,b.b-a.df.b|0));}g=!d?a.d$.a+(a.cr.a/2|0)|0:a.d$.b+(a.cr.b/2|0)|0;h=!d?b.a:b.b;g=!f?0:g-h|0;if(!d){b=new Ul;b.lc=a;b.lb=c;b.la=g;}else{b=new Um;b.q$=a;b.q9=c;b.q8=g;}return b;}
function Vq(b,c){var d;d=new K4;d.pu=b;d.pt=c;return d;}
function P4(a,b){var c,d,e;c=a.dC.b;d=a.cr.b;e=c-d|0;return Vq(Z(Bf(0,b-(d/2|0)|0),e),e);}
function P5(a,b){var c,d,e;c=a.dC.a;d=a.cr.a;e=c-d|0;return Vq(Z(Bf(0,b-(d/2|0)|0),e),e);}
function I7(a,b,c,d,e,f){L3(a,b,c,d,e,0,f,1);}
function L3(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bn(a.dC,0,0);Bn(a.cr,0,0);}else{i=g*3|0;i=Bf(NK(d,d,e),i);j=NK(b,d-i|0,e-d|0);if(!h){k=a.d$;k.a=j+f|0;k.b=c-g|0;l=a.cr;l.a=i;l.b=g;l=a.df;l.a=f;l.b=k.b;k=a.dC;k.a=d;k.b=g;}else{l=a.d$;l.a=c-g|0;l.b=j+f|0;k=a.cr;k.a=g;k.b=i;k=a.df;k.a=l.a;k.b=f;k=a.dC;k.a=g;k.b=d;}}}
function G0(a,b,c){var d,e,f;d=c.a;e=a.df;Bt(b,d+e.a|0,c.b+e.b|0,a.dC,a.kz);e=a.cr;e.a=e.a-2|0;e.b=e.b-2|0;d=c.a;f=a.d$;Bt(b,(d+f.a|0)+1|0,(c.b+f.b|0)+1|0,e,a.hZ);b=a.cr;b.a=b.a+2|0;b.b=b.b+2|0;}
function GS(a,b,c){return TG(a,b)&&Gk(c)?1:0;}
function OW(){C.call(this);this.r2=null;}
function AAI(a,b){var c,d,e,f;c=b.data;b=Bw();d=Cj(c[0]);e=new M;O(e);G(G(e,B(187)),d);Bq(b,N(e));b=Bw();f=c[1];d=new M;O(d);G(G(d,B(273)),f);Bq(b,N(d));}
function OV(){C.call(this);this.tQ=null;}
function AK0(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bw();e=Cj(c[0]);f=new M;O(f);G(G(f,B(187)),e);Bq(d,N(f));g=E6(Pj(b,1));b=Bw();d=Cj(c[1]);if(g===null)c=B(27);else{c=new M;O(c);BR(c,B(84));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BR(c,B(85));BB(c,i[h]);h=h+1|0;}BR(c,B(86));c=N(c);}e=new M;O(e);G(G(G(G(e,B(274)),d),B(275)),c);Bq(b,N(e));}
function OU(){C.call(this);this.l0=null;}
function ACI(a,b){Rm(a.l0,b);}
function OT(){C.call(this);this.rJ=null;}
function AG0(a,b){var c,d,e,f,g;c=b.data;d=Bw();e=Cj(c[0]);f=new M;O(f);G(G(f,B(187)),e);Bq(d,N(f));g=D6(Pj(b,1));b=Bw();d=Cj(c[1]);c=Yd(g);e=new M;O(e);G(G(G(G(e,B(276)),d),B(277)),c);Bq(b,N(e));}
function NI(){var a=this;C.call(a);a.id=null;a.mb=null;a.kv=null;}
function AAf(a,b){var c;c=b.c3&&!b.ju?1:0;if(c&&b.b3&&b.bq==79){if(!b.bs)Ke(a.id,a.kv);else J$(a.id,a.mb);return 1;}return 0;}
function OR(){C.call(this);this.sV=null;}
function AGf(a,b){var c,d;c=J4();b=Cj(b);d=new M;O(d);G(G(d,B(278)),b);Bq(c,N(d));b=new Fv;U(b);J(b);}
function OQ(){C.call(this);this.nd=null;}
function AHX(a,b){var c,d,e,f;c=a.nd;d=c.X.u;e=new Mj;e.n3=c;f=R(C,1);f.data[0]=b;CL(d,e,B(279),f);}
function QL(){var a=this;C.call(a);a.qg=null;a.ji=null;}
function AJy(a,b){var c,d,e,f,g,h;c=a.ji;d=c.jF;if(d!==null){e=c.da.m;f=e.a;g=b.S;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.jF=g;}d=b.S;h=d.a;c=c.d2;e=c.h;h=h-e.a|0;f=d.b-e.b|0;Bn(c.m,h,f);a.qg=b.S;return 1;}
function AHs(a,b,c,d,e){var f;if(!c&&e==1){f=b.S;b=a.ji;if(!(d&&Dl(b.da,f)))f=null;b.jF=f;}return 1;}
function Ow(){var a=this;C.call(a);a.hh=null;a.l6=null;a.gb=null;}
function AAA(a,b,c,d){var e,f;e=(KW(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b=a.gb;b.dO=Z(Bf(0,b.dO+Bc(e,f)|0),Pd(b));return 1;}
function AIY(a,b,c,d,e){if(!d&&a.hh!==null){a.hh=null;return 1;}if(!c&&e==1&&d){b=Gm(a.gb.go,b.S,a.l6,1);a.hh=b;if(b!==null)return 1;}return 1;}
function ABg(a,b){var c;c=a.hh;if(c!==null){c.n(b.S);return 1;}c=a.gb;return GS(c.go,b.S,Hd(c.X.u));}
function J3(){var a=this;C.call(a);a.e4=null;a.g=null;a.rj=null;a.hn=null;a.m7=null;}
function Dg(a){var b;b=a.hn;if(b===null)b=a.m7;return b;}
function Hl(a){var b;b=a.e4;return b===null?null:b.rp;}
var XM=F();
function Yf(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(APz());}return b.data.length;}
function Rv(b,c){if(b===null){b=new FR;U(b);J(b);}if(b===E($rt_voidcls())){b=new BC;U(b);J(b);}if(c>=0)return AKc(b.d7,c);b=new UB;U(b);J(b);}
function AKc(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Hp=F(Bh);
var MQ=F(0);
var Nb=F();
function ADL(a,b,c){var d,e;d=b;e=c;b=new M;O(b);T(G(T(G(b,B(280)),d),B(281)),e);Cu(N(b));return d+e|0;}
var MR=F(0);
var M_=F();
function AEH(a,b,c){var d,e;d=b;e=c;b=new M;O(b);Fz(G(Fz(G(b,B(282)),d),B(281)),e);Cu(N(b));return d+e;}
var VN=F();
var U3=F(0);
function L0(){C.call(this);this.lu=null;}
function I9(a,b){FI(a.lu,b);return 1;}
function Ju(){var a=this;C.call(a);a.kd=null;a.rD=null;a.rS=0.0;a.mi=0;a.rZ=0;a.sr=0;a.nH=0;a.tj=0;a.fE=0.0;a.eN=0.0;a.rO=0.0;a.j4=0.0;a.rW=0;a.k3=null;}
function HK(a){return EK(a.fE+a.eN);}
function ND(a,b){return EK((a.fE+a.eN)*b);}
function Sy(){var a=this;C.call(a);a.k_=null;a.ph=null;a.pA=null;a.r$=null;a.kH=null;a.oe=null;}
function Jf(a,b,c){return T4(a,a.k_.e6,b,c);}
function Sm(a,b,c){return T4(a,a.ph.e6,b,c);}
function T4(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g!==null&&g.tK(c,d))return g.r9;f=f+1|0;}return null;}
function LH(a,b,c){var d,e,f,g;d=a.pA.e6.data;e=d.length;f=0;while(f<e){g=d[f];if(g!==null&&g.tK(b,c))return g.sh;f=f+1|0;}return null;}
function UJ(){var a=this;C.call(a);a.b8=null;a.bX=null;a.c7=0;}
function AHh(){var a=new UJ();AAQ(a);return a;}
function AAQ(a){a.b8=new IR;a.bX=new IR;}
function Pg(a,b,c){B$(a.bX,b,c);if(!a.c7)B$(a.b8,b,c);}
function Er(a){if(Uj(a.b8,a.bX)>0)return a.bX;return a.b8;}
function G7(a){if(Uj(a.b8,a.bX)<0)return a.bX;return a.b8;}
function DE(a){var b,c;b=a.b8;c=a.bX;return (b===c?1:c!==null&&CA(b)===CA(c)?(b.Z==c.Z&&b.bA==c.bA?1:0):0)?0:1;}
function V1(a,b){var c,d;if(!DE(a))return 0;c=Er(a);d=G7(a);return c.Z<=b&&b<d.Z?1:0;}
function Es(){var a=this;C.call(a);a.by=0;a.bz=null;a.dB=null;a.c0=0;a.cA=0;}
var APi=0;var APA=0;var APh=0;function JA(b,c){return (c-HK(b)|0)/2|0;}
function Qo(b,c){return JA(b,c)+b.nH|0;}
function X7(a,b,c,d,e){var f,g;if(DP(a.dB))return;if(e>D7(a.bz))return;f=e/1024|0;e=a.cA;if(f==e)return;if(KW(f-e|0)>=a.c0){g=0;while(g<a.c0){GU(a,b,d,c,f+g|0);g=g+1|0;}a.cA=f;return;}while(true){e=a.cA;if(e>=f)break;GU(a,b,d,c,e+a.c0|0);a.cA=a.cA+1|0;}while(true){e=a.cA;if(e<=f)break;GU(a,b,d,c,e-1|0);a.cA=a.cA-1|0;}}
function GU(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;D8(b);f=a.bz.ex;g=e*1024|0;h=M9(a,g);if(h>=a.bz.o.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.by;a:{while(true){l=a.bz.o.data;if(h>=l.length)break a;m=l[h];n=!APh?Qo(d.data[m.bK],c):JA(d.data[m.bK],c);o=f.data;Dx(b,d.data[m.bK]);Co(b,m.q,k,n);k=o[h]-j+a.by;if(k>1024.0)break;h=h+1|0;}}Df(BK(a.dB,e%a.c0|0),b);}
function Ya(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn;if(DP(a.dB))return;if(!a.c0)return;if(j>D7(a.bz))return;o=a.bz;p=o.cv.data;q=o.o;r=j/1024|0;s=M9(a,j);if(s>p.length)return;t= -a.by|0;u=i;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;w=s!=(w-1|0)?0:1;if(t>=h)break;x=BK(a.dB,r%a.c0|0);y=v[s];z=p[s]+a.by|0;ba=r*1024|0;bb=(z-ba|0)>1024?0:1;bc=r+1|0;bd=bc*1024|0;be=Z(bd,z)-j|0;if(bb&&w)be=be+a.by|0;if((t+be|0)>h)be=h-t|0;bf=l!==null?0:1;b:{if(!bf)
{bg=!w?a.by:2*a.by|0;bh=l.a;bi=l.b;if(!(bh<bi&&j<=bi&&(j+be|0)>(bh+bg|0)?0:1)){bj=0;break b;}}bj=1;}c:{if(!bf){bf=!w?a.by:2*a.by|0;if(j>=l.a&&(j+be|0)<=(l.b+bf|0)?1:0){bi=1;break c;}}bi=0;}o=null;if(y===m)o=k.nJ;bk=BV(n);d:{e:{while(B2(bk)){f:{bl=BX(bk);if(bl!==null){if(!bl.d1(y))break f;else break e;}if(y===null)break e;}}bh=0;break d;}bh=1;}if(bh)o=k.ld;if(!bi&&!bj){l.b=Z(l.b,D7(a.bz));bg=j>=l.a?be:(Z(z,bd)-l.a|0)-(!w?a.by:0)|0;bm=(j+be|0)<=(l.b+(!w?a.by:2*a.by|0)|0)?0:(Z(z,bd)-l.b|0)-(!w?a.by:0)|0;bh=j-ba
|0;bi=t+c|0;bn=bh;w=be-bg|0;Ct(e,bn,0.0,w,u);Bn(f,w,i);G$(a,d,bi,b,f,e,y,x,g,k,0,o);bd=bh+be|0;Ct(e,bd-bm|0,0.0,bm,u);Bn(f,bm,i);w=bi+be|0;G$(a,d,w-bm|0,b,f,e,y,x,g,k,0,o);bn=bd-bg|0;bh=bg-bm|0;Ct(e,bn,0.0,bh,u);Bn(f,bh,i);G$(a,d,w-bg|0,b,f,e,y,x,g,k,1,o);}else{Ct(e,j-ba|0,0.0,be,u);Bn(f,be,i);G$(a,d,t+c|0,b,f,e,y,x,g,k,bi,o);}j=j+be|0;t=t+be|0;if(!bb){s=s+(-1)|0;r=bc;}s=s+1|0;}}}
function G$(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.a&&e.b){if(f.ch!==0.0&&f.cC!==0.0){m=j.lU.data[g.cm];if(k)n=j.jD;else{g=m.oz;if(g===null)g=j.hH;if(l===null)l=Cf(g);n=l;}g=m.oy;if(APA)i=0.0;IZ(b,c,d,e,f,h,g,n,i);return;}return;}}
function M9(a,b){var c,d,e,f,g,h,i;c=a.bz;d=c.ex;e=0;f=c.o.data.length;g=b;b=BD(e,f);if(b>0){c=new BC;U(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BD(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function Wy(a,b){var c;c=a.bz;if(c===null)return 0;if(D7(c)<b)return J9(D7(a.bz),1024);return J9(b,1024)+1|0;}
function Yn(a,b,c,d,e,f){var g,h;a.cA=f/1024|0;while(true){g=a.dB;if(g.p>=a.c0)break;Cc(g,Dr(c));}h=0;while(h<a.c0){GU(a,b,e,d,a.cA+h|0);h=h+1|0;}}
function Ol(a){a.bz=null;Ix(a.dB,new Om);Gw(a.dB);}
function XX(a,b,c,d,e,f,g,h,i){var j,k;j=D7(a.bz);if(j)j=j+a.by|0;if(!j)j=j-a.by|0;k=Bf( -a.by|0,j-g|0);if(k>=h)return;Bn(f,h-k|0,e);Bt(b,c+k|0,d,f,i);}
function Wt(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(Es,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B8(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bz===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new Es;f.by=3;f.dB=Cx();f.cA=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)Ol(o);h=h+1|0;}return g;}
function YF(){APh=0;}
var SL=F(0);
var Gv=F(0);
var DA=F();
function DP(a){return a.p?0:1;}
function GG(a,b){var c,d,e,f,g,h;c=b.data;d=a.p;e=c.length;if(e<d)b=Rv(GZ(CA(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BV(a);while(B2(f)){g=b.data;h=e+1|0;g[e]=BX(f);e=h;}return b;}
var Lb=F(0);
function Fl(){DA.call(this);this.cf=0;}
function BV(a){var b;b=new LL;b.ls=a;b.qi=a.cf;b.mS=a.ln();b.n8=(-1);return b;}
var Ha=F(0);
function L2(){var a=this;Fl.call(a);a.bT=null;a.p=0;}
function Cx(){var a=new L2();ADA(a);return a;}
function APB(a){var b=new L2();K6(b,a);return b;}
function ADA(a){K6(a,10);}
function K6(a,b){a.bT=R(C,b);}
function H2(a,b){var c,d;c=a.bT.data.length;if(c<b){d=c>=1073741823?2147483647:Bf(b,Bf(c*2|0,5));a.bT=CV(a.bT,d);}}
function BK(a,b){HT(a,b);return a.bT.data[b];}
function AHa(a){return a.p;}
function Cc(a,b){var c,d;H2(a,a.p+1|0);c=a.bT.data;d=a.p;a.p=d+1|0;c[d]=b;a.cf=a.cf+1|0;return 1;}
function F7(a,b){var c,d,e,f;HT(a,b);c=a.bT.data;d=c[b];e=a.p-1|0;a.p=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cf=a.cf+1|0;return d;}
function Gw(a){var b,c,d,e,f,g;b=a.bT;c=0;d=a.p;e=null;if(c>d){e=new BC;U(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.p=0;a.cf=a.cf+1|0;}
function HT(a,b){var c;if(b>=0&&b<a.p)return;c=new Bv;U(c);J(c);}
function Np(a,b){var c;if(b>=0&&b<=a.p)return;c=new Bv;U(c);J(c);}
function Ix(a,b){var c;c=0;while(c<a.p){b.n(a.bT.data[c]);c=c+1|0;}}
function Mk(a,b){var c,d,e,f,g,h,i;c=a.bT;d=a.p;if(b===null)b=AOv;e=R(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}Wg(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.cf=a.cf+1|0;}
function RC(){C.call(this);this.tW=null;}
function RB(){C.call(this);this.nY=null;}
function AIG(a,b){var c;c=a.nY;c.Y=G9(b,Et(c));}
function Rx(){C.call(this);this.lv=null;}
function AGY(a,b){var c;c=a.lv;c.bP=G9(b,FB(c));}
function Rw(){C.call(this);this.pI=null;}
function AID(a){var b,c;b=a.pI;c=b.gJ?0:1;b.gJ=c;b=new M;O(b);Fk(G(b,B(283)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Rz(){C.call(this);this.oj=null;}
function AEv(a){var b,c;b=a.oj;c=b.gA?0:1;b.gA=c;b=new M;O(b);Fk(G(b,B(284)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Ry(){C.call(this);this.lI=null;}
function AGn(a){var b,c;b=a.lI;c=b.hJ^1;b.hJ=c;b=new M;O(b);Fk(G(b,B(285)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function RT(){C.call(this);this.p0=null;}
function AH_(a){var b,c,d,e,f;b=a.p0;c=(b.i$+3|0)%6|0;b.i$=c;d=b.fo.data;e=d.length;f=0;while(f<e){b=d[f];b.by=c;b=b.bz;if(b!==null)b.gI=1;f=f+1|0;}}
var EU=F(Cd);
var AO_=null;var APC=null;var APa=null;var APD=null;function AAt(){AAt=Bk(EU);AGs();}
function XJ(a,b){var c=new EU();Xz(c,a,b);return c;}
function Xz(a,b,c){AAt();Dn(a,b,c);}
function AGs(){var b;AO_=XJ(B(286),0);APC=XJ(B(287),1);b=XJ(B(288),2);APa=b;APD=H(EU,[AO_,APC,b]);}
function H7(){var a=this;C.call(a);a.eg=null;a.fH=null;a.bJ=0;a.cq=0;}
var AOw=0;function X$(a){var b;b=a.fH;if(b!==null){AOw=AOw-1|0;a.eg.dv.deleteTexture(b);a.fH=null;}}
function Kk(a){var b,c;b=a.eg.dv;c=a.fH;b.bindTexture(3553,c);}
function Df(a,b){Lw(a,b.jO,b.i6,32856);NM(a,b,0,0);}
function Lw(a,b,c,d){var e,f,g;a:{e=a.bJ;if(e){f=a.cq;if(f){if(e==b&&f==c){Kk(a);break a;}g=new Bh;Ba(g,B(289));J(g);}}a.bJ=b;a.cq=c;Kk(a);a.eg.dv.texStorage2D(3553,1,d,b,c);g=a.eg.dv;g.texParameteri(3553,10242,33071);g.texParameteri(3553,10243,33071);g.texParameteri(3553,10241,9729);g.texParameteri(3553,10240,9729);}}
function GQ(a,b,c,d){Kk(a);NM(a,b,c,d);}
function NM(a,b,c,d){var e;e=a.eg.dv;b=b.hU;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function QG(){C.call(this);this.iq=null;}
var APt=null;function NT(){var a=new QG();WS(a);return a;}
function WS(a){a.iq=Cx();}
function DJ(a,b,c,d){Ny(a,AJA(d,b,c));}
function DY(b,c,d){return AJA(d,b,c);}
function Ee(a,b,c,d){Ny(a,AMU(null,b,c,d));}
function Ny(a,b){Cc(a.iq,b);}
function Gt(a){return HG(GG(a.iq,APt));}
function UU(){APt=R(DF,0);}
var HH=F(0);
var APu=null;var APk=null;var APE=null;function Y0(){APu=new Sb;APk=new Sc;APE=new Sa;}
var GR=F(0);
var TI=F();
function AIs(a,b,c,d){var e;b=Bw();d=Cj(d);e=new M;O(e);G(G(T(G(e,B(290)),c),B(263)),d);Bq(b,N(e));}
var TJ=F();
function TB(){var a=this;C.call(a);a.jM=0;a.jN=0;}
function O$(a){var b,c;b=a.jM;c=a.jN;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.jM=c;a.jN=b;return b;}
function QK(a,b){return 5.960464477539063E-8*(O$(a)&16777215)*b|0;}
function Xr(){var a=this;C.call(a);a.bb=null;a.dV=null;a.cg=null;a.ez=null;a.dW=0;a.n5=null;a.eI=null;a.bf=null;a.dN=null;a.cB=0;a.fv=0;a.bQ=0;a.qG=null;}
function AJk(){var a=new Xr();AK3(a);return a;}
function AK3(a){var b;a.bb=Xv();a.dV=new Bm;a.cg=new Bm;b=new B_;b.ch=0.07500000298023224;a.ez=b;a.bf=APw;a.bQ=(-1);}
function HN(a){return a.bf.data.length?0:1;}
function QZ(a,b){Bu(a.bb.bh,b);a.n5=b;}
function RJ(a,b){Bu(a.bb.O,b);}
function Io(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;d=a.eI;if(d===null){b=new Bh;Ba(b,B(291));J(b);}Dx(b,d);e=HK(a.eI);f=0;a.cB=BU(2.0*c);a.dW=BU(c);a.fv=EK(a.eI.j4);g=0;h=0;i=0;j=0;k=a.bf.data;l=k.length;m=0;while(m<l){d=k[m];if(!FL(d.fh,B(268))){n=Dk(b,d.fh)+0.875|0;o=Dk(b,d.jR)+0.875|0;p=Dk(b,d.ka)+0.875|0;h=Bf(h,n);i=Bf(i,o);j=Bf(j,p);}m=m+1|0;}k=a.bf.data;o=k.length;p=0;q=e;while(p<o){d=k[p];n=a.fv;l=n+h|0;m=i+n|0;r=j+n|0;f=Bf(f,(l+m|0)+r|0);if(FL(d.fh,B(268))){l=(Dk(b,d.fh)+0.875|0)+a.fv|0;m=f-l|
0;r=0;}s=d.ck;t=s.m;t.a=g;t.b=0;t=s.h;t.a=l;t.b=e;Ct(s.cn,g,0.0,l,q);s=d.cE;t=s.m;n=g+l|0;t.a=n;t.b=0;t=s.h;t.a=m;t.b=e;Ct(s.cn,n,0.0,m,q);s=d.cX;d=s.m;n=n+m|0;d.a=n;d.b=0;d=s.h;d.a=r;d.b=e;Ct(s.cn,n,0.0,r,q);g=g+((l+m|0)+r|0)|0;p=p+1|0;}b=a.dV;b.a=g;b.b=e;b=a.bb.h;n=a.cB;b.a=f+(n*2|0)|0;b.b=Bc(e+n|0,a.bf.data.length)+n|0;}
function TS(a,b,c){var d,e,f,g,h,i,j,k,l;Bn(a.bb.m,b,c);d=a.cB;e=a.bf.data;f=e.length;g=0;h=b+d|0;while(g<f){i=e[g];j=i.ck;k=i.cE;l=i.cX;i=j.m;i.a=h;b=c+d|0;i.b=b;i=k.m;i.a=h;i.b=b;i=l.m;i.a=h;i.b=b;if(!(j.h.b&&k.h.b&&l.h.b))$rt_globals.console.info("FindUsages.setPos: tRect.size == 0");d=d+(j.h.b+a.cB|0)|0;g=g+1|0;}}
function J7(a){var b,c;b=a.dV;if(b.a&&b.b)return a.bb.h;c=new Bh;Ba(c,B(292));J(c);}
function R5(a){Bn(a.dV,0,0);}
function X5(a,b,c){var d,e,f,g,h,i,j,k,l;if(!a.bf.data.length)return;a:{if(a.dN!==null){d=a.dV;if(Bc(d.a,d.b))break a;}d=a.dV;if(!Bc(d.a,d.b))Io(a,b.bx,c);d=a.dV;e=d.a;f=d.b;if(!Bc(e,f))return;d=C_(b,e+150|0,f);Dx(d,a.eI);g=a.eI;h=g.fE;h=h-(h+g.eN)/16.0;i=a.bf.data;e=i.length;f=0;while(f<e){g=i[f];Co(d,g.fh,g.ck.cn.b_+a.fv,h);Co(d,g.jR,g.cE.cn.b_+a.fv,h);Co(d,g.ka,g.cX.cn.b_+a.fv,h);f=f+1|0;}g=Dy(a.dN,Dr(b));a.dN=g;Df(g,d);HC(d);}if(!Ht(a.bb))Zn(a,b);i=a.bf.data;f=i.length;j=0;while(j<f){d=i[j];De(d.ck,b,a.dN,
0,0,2.0);De(d.cE,b,a.dN,d.ck.h.a,0,2.0);De(d.cX,b,a.dN,d.ck.h.a+d.cE.h.a|0,0,2.0);j=j+1|0;}i=a.bf.data;f=i.length;j=0;while(j<f){d=i[j];g=d.ck;k=d.cE;l=d.cX;b=a.cg;e=a.bb.h.a-(a.cB*2|0)|0;d=g.h;b.a=e-d.a|0;b.b=(d.b+k.h.b|0)+l.h.b|0;j=j+1|0;}}
function Zn(a,b){var c,d,e,f,g;c=a.cg;d=a.bb;c.a=d.h.a;c.b=a.cB;e=d.m;Bt(b,e.a,e.b,c,d.O);c=a.bb;d=c.m;Bt(b,d.a,(d.b+c.h.b|0)-a.cB|0,a.cg,c.O);c=a.cg;f=a.cB;c.a=f;d=a.bb;c.b=(d.h.b-f|0)-f|0;e=d.m;Bt(b,e.a,e.b+f|0,c,d.O);c=a.bb;d=c.m;f=d.a+c.h.a|0;g=a.cB;Bt(b,f-g|0,d.b+g|0,a.cg,c.O);c=a.cg;d=a.bb;e=d.h;f=e.a;g=a.cB;c.a=(f-g|0)-g|0;c.b=(e.b-g|0)-g|0;d=d.m;Bt(b,d.a+g|0,d.b+g|0,c,a.n5);c=a.cg;d=a.bb;e=d.h;c.a=e.a;f=a.dW;c.b=f;d=d.m;Bt(b,d.a+f|0,d.b+e.b|0,c,a.ez);c=a.bb;d=c.m;Bt(b,d.a+a.dW|0,d.b+c.h.b|0,a.cg,a.ez);c
=a.bb;d=c.m;f=d.a;g=a.dW;Bt(b,f+(g*2|0)|0,(d.b+c.h.b|0)+g|0,a.cg,a.ez);c=a.cg;f=a.dW;c.a=f;d=a.bb;e=d.h;c.b=e.b-f|0;d=d.m;Bt(b,d.a+e.a|0,d.b+f|0,c,a.ez);c=a.bb;d=c.m;Bt(b,d.a+c.h.a|0,d.b+a.dW|0,a.cg,a.ez);c=a.bb;d=c.m;f=d.a+c.h.a|0;g=a.dW;Bt(b,f+g|0,d.b+(g*2|0)|0,a.cg,a.ez);}
function P3(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.bf.data;if(c>=d.length)return (-1);e=d[c].ck;if(Dl(e,b))return c;f=e.m;g=f.a;e=e.h;h=e.a;g=g+h|0;i=f.b;f=a.cg;f.a=(a.bb.h.a-(a.cB*2|0)|0)-h|0;f.b=e.b;if(MF(b,g,i,f))break;c=c+1|0;}return c;}
function YR(){var a=this;C.call(a);a.hv=null;a.gc=null;a.mX=null;a.m2=null;}
function AF7(a,b,c,d){var e=new YR();AKO(e,a,b,c,d);return e;}
function AKO(a,b,c,d,e){a.hv=b;a.gc=c;a.mX=d;a.m2=e;}
function Uz(){C.call(this);this.oo=null;}
function AHZ(a,b){var c;c=a.oo.fY;c.dh=G9(b,NS(c));}
var Xw=F();
function SR(){C.call(this);this.qT=null;}
function AA_(a,b){var c;c=a.qT.gb;c.dO=G9(b,Pd(c));}
var VZ=F();
function IG(){var a=this;C.call(a);a.A=null;a.cF=null;a.ds=null;a.dg=null;a.gi=null;a.cL=0;a.eP=0;a.mN=0.0;}
function AHR(){var a=new IG();AI6(a);return a;}
function AI6(a){a.ds=GX();a.dg=GX();a.gi=Cx();a.A=K_(B(29));a.eP=0;a.cL=0;a.cF=Q2(a);}
function Q2(a){var b,c,d,e,f,g,h,i;b=Qr(a);c=new Hv;d=new L2;e=Me(0,b,0);f=new Ug;f.pG=e;K6(d,1);e=BV(f);g=0;while(true){h=d.bT.data;i=h.length;if(g>=i)break;h[g]=BX(e);g=g+1|0;}d.p=i;Q9(c,d);return c;}
function B8(a,b){return a.A.data[b];}
function Ca(a){return a.A.data.length;}
function Qr(a){return Fp(a,Ca(a));}
function EP(a,b){return a.A.data[b].L;}
function Jr(a,b){var c,d,e,f,g,h,i;c=a.A.data;d=c[b];e=c[b+1|0];f=Do(Sv(d.o,e.o));g=a.A;h=g.data.length;if(b<h&&b>=0){i=R(Ck,h-1|0);c=i.data;OL(g,b,i);c[b]=f;a.A=i;return;}d=new Bh;U(d);J(d);}
function Nj(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.A.data;if(!(c<d[b].L?0:1)){d=(B8(a,b)).o.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.q)){f=L(h.q,g);break a;}g=g-I(h.q)|0;f=f+1|0;}f=0;}En();h=new Bx;d=BN(1);d.data[0]=f;Gs(h,d);FO(a,b,c,1,h);h=a.A.data[b];i=h.o;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].q);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].q)==1)h.o=OL(i,j,R(B0,e-1|0));else{k=d[j];if(c<=0)l=Dd(Dc(k.q,1),k.cm,k.bK);else if(c>=(I(k.q)-1|0)){l=new B0;m=k.q;R1(l,B6(m,0,I(m)-
1|0),k.cm,k.bK);}else{i=BN(I(k.q)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.q,b);b=b+1|0;}b=n.length;while(c<b){m=k.q;e=c+1|0;n[c]=L(m,e);c=e;}l=Dd(Fb(i),k.cm,k.bK);}d[j]=l;}h.L=h.L-1|0;DR(h);}else if(b!=(d.length-1|0))Jr(a,b);}
function Ur(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){g=a.A.data[b];h=e[0];b=0;a:{while(true){i=b+1|0;d=g.o.data;if(i>=d.length)break a;f=I(d[b].q);if(c<=f)break;c=c-f|0;b=i;}}Ib(g,b,c,h);g.L=g.L+I(h)|0;DR(g);return;}f=f-1|0;j=Hm(a.A.data[b],c);d=a.A;k=CV(d,d.data.length+f|0);d=k.data;l=d.length-1|0;while(true){c=l-f|0;if(c<=b)break;d[l]=d[c];l=l+(-1)|0;}j=j.data;g=j[0];h=e[0];m=g.o.data;i=m.length;c=!i?0:I(m[i-1|0].q);Ib(g,g.o.data.length-1|0,c,h);d[b]=j[0];i=1;while(i<f){if(FJ(e[i]))h
=Do(R(B0,0));else{h=new Ck;m=R(B0,1);m.data[0]=Dd(e[i],0,0);GY(h,m);}d[b+i|0]=h;i=i+1|0;}Ib(j[1],0,0,e[f]);d[b+f|0]=j[1];a.A=k;}
function SE(a,b){var c,d,e,f,g,h,i;c=Er(b);d=G7(b);e=c.Z;if(e==d.Z)return B6(El(a.A.data[e]),c.bA,d.bA);f=new M;O(f);b=a.A.data[c.Z];e=c.bA;BB(BR(f,Dc(El(b),e)),10);g=a.A;h=c.Z+1|0;e=d.Z;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;UR(BR(f,El(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.A.data[d.Z];i=d.bA;BR(f,B6(El(b),0,i));return N(f);}}b=new Tf;U(b);J(b);}
function Qt(a,b,c){var d;RA(a,b);d=Er(b);FO(a,d.Z,d.bA,1,c);}
function RA(a,b){var c,d,e,f,g,h,i;a:{c=Er(b);d=G7(b);e=c.Z;if(e==d.Z)HL(a.A.data[e],c.bA,d.bA);else{b=a.A.data[e];HL(b,c.bA,b.L);HL(a.A.data[d.Z],0,d.bA);e=c.Z+1|0;f=d.Z;g=a.A;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(Ck,(h-f|0)+e|0);WJ(g,e,f,i);a.A=i;Jr(a,c.Z);break a;}b=new Bh;U(b);J(b);}b=new Bh;U(b);J(b);}}}
function Ox(a,b,c){return L4(a,b,c)===null?0:1;}
function L4(a,b,c){return DH(a.ds,JM(a,b,c));}
function Mg(a,b,c){return DH(a.dg,JM(a,b,c));}
function JM(a,b,c){var d;d=B8(a,b);return JR(b,d.cv!==null?NL(d,c):(-1));}
function T7(a,b){b.b6=Sx(B8(a,b.b1),b.b6);}
function LO(a,b){var c,d,e;c=0;d=0;while(true){e=a.A.data.length;if(c>=e)break;if((d+(B8(a,c)).L|0)>=b)return Cw(c,b-d|0);d=d+((B8(a,c)).L+1|0)|0;c=c+1|0;}return Cw(e,0);}
function Fp(a,b){var c,d,e;c=0;d=a.A.data.length;e=0;while(e<b){c=c+EP(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function N_(a,b){var c,d,e,f,g,h;c=B8(a,b.b1);d=b.b6;e=0;a:{while(true){f=e+1|0;g=c.o.data;if(f>=g.length)break a;h=I(g[e].q);if(d<h)break;d=d-h|0;e=f;}}return c.o.data[e];}
function FA(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=BN(Qr(a));c=b.data;d=a.A.data.length;e=0;f=0;a:{while(e<d){g=a.A.data[e].o.data;h=g.length;i=0;while(i<h){j=g[i].q;k=0;l=I(j);if(k>l)break a;if(l>I(j))break a;if(f<0)break a;if((f+(l-k|0)|0)>c.length)break a;m=f;while(k<l){n=m+1|0;o=k+1|0;c[m]=L(j,k);m=n;k=o;}f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}j=new Bv;U(j);J(j);}
function FO(a,b,c,d,e){var f,g,h;a.cL=a.cL+1|0;f=a.gi;g=new S5;g.c_=b;g.dQ=c;g.kw=d;g.g1=e;Cc(f,g);h=Fp(a,b)+c|0;if(!d)NE(a.cF,h,I(e));else QT(a.cF,h,I(e));}
function ZI(a){var b,c,d,e,f;a.cL=a.cL+1|0;b=a.gi;c=b.p;if(!c)return null;b=F7(b,c-1|0);d=Tu(b.g1,B(220),(-1));if(b.kw){e=d.data;Ur(a,b.c_,b.dQ,d);NE(a.cF,Fp(a,b.c_)+b.dQ|0,I(b.g1));c=e.length;if(c==1)return Cw(b.c_,b.dQ+I(e[0])|0);return Cw((b.c_+c|0)-1|0,I(e[c-1|0]));}d=d.data;f=AHh();B$(f.b8,b.c_,b.dQ);c=d.length;if(c==1)B$(f.bX,b.c_,b.dQ+I(d[0])|0);else B$(f.bX,(b.c_+c|0)-1|0,I(d[c-1|0]));RA(a,f);QT(a.cF,Fp(a,b.c_)+b.dQ|0,I(b.g1));return Cw(b.c_,b.dQ);}
function Nt(a){a.eP=a.cL;}
function Zp(){C.call(this);this.e6=null;}
function He(a){var b=new Zp();AEf(b,a);return b;}
function AEf(a,b){a.e6=b;}
var Ev=F();
function KB(){Ev.call(this);this.r9=null;}
function KX(){Ev.call(this);this.sh=null;}
var N5=F(Ev);
var Sw=F(0);
var OZ=F(0);
function IR(){var a=this;C.call(a);a.Z=0;a.bA=0;}
function B$(a,b,c){a.Z=b;a.bA=c;}
function Uj(a,b){var c;c=BD(a.Z,b.Z);if(c)return c;return BD(a.bA,b.bA);}
var Ja=F(Fs);
var AOH=null;function ADk(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function Z1(){var b;b=new Ja;Uw(b);AOH=b;}
var Zu=F();
function JW(b,c){var d,e,f;if(c<=0)return B(29);d=BN(c);e=d.data;e[0]=Yt(QK(b,52));f=1;while(f<c){e[f]=Yt(QK(b,62));f=f+1|0;}return Fb(d);}
function Yt(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
function Ub(){C.call(this);this.jr=null;}
var APw=null;function AHq(){var a=new Ub();V7(a);return a;}
function V7(a){a.jr=Cx();}
function J0(a,b,c,d,e,f){var g;g=new IT;g.ck=PJ();g.cE=PJ();g.cX=PJ();g.iu=0;g.fh=b;g.jR=c;g.ka=d;g.dy=e;g.jc=f;Bu(g.ck.bh,e.iz);Bu(g.ck.O,e.cI);Bu(g.cE.bh,e.j6);Bu(g.cE.O,e.cI);Bu(g.cX.bh,e.kk);Bu(g.cX.O,e.cI);Cc(a.jr,g);}
function Or(a){return GG(a.jr,APw);}
function WB(){APw=R(IT,0);}
function ZO(){var a=this;C.call(a);a.y7=null;a.xb=null;a.x$=0;a.xK=0;}
function W3(){var a=this;C.call(a);a.rp=null;a.yU=null;}
var Zf=F(0);
function Y2(b){var c;a:{switch(b){case 0:break;case 1:c=B(123);break a;case 2:c=B(238);break a;case 3:c=B(237);break a;default:c=null;break a;}c=B(156);}return c;}
var CC=F();
var XR=F(CC);
var Ys=F(CC);
var VR=F(CC);
var V_=F(CC);
var YS=F(CC);
function Xc(){var a=this;Eb.call(a);a.fA=0;a.ct=null;a.ft=0;a.q6=0.0;a.iZ=0;}
function GX(){var a=new Xc();ACO(a);return a;}
function ACO(a){var b;b=Zv(16);a.fA=0;a.ct=R(G1,b);a.q6=0.75;RF(a);}
function Zv(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function RF(a){a.iZ=a.ct.data.length*a.q6|0;}
function LZ(a,b){return P6(a,b)===null?0:1;}
function DH(a,b){var c;c=P6(a,b);if(c===null)return null;return c.eZ;}
function P6(a,b){var c,d;if(b===null)c=Pr(a);else{d=VB(b);c=N4(a,b,d&(a.ct.data.length-1|0),d);}return c;}
function N4(a,b,c,d){var e,f;e=a.ct.data[c];while(e!==null){if(e.jp==d){f=e.gL;if(b!==f&&!UY(b,f)?0:1)break;}e=e.eq;}return e;}
function Pr(a){var b;b=a.ct.data[0];while(b!==null&&b.gL!==null){b=b.eq;}return b;}
function Qg(a,b,c){var d,e,f;if(b===null){d=Pr(a);if(d===null){a.ft=a.ft+1|0;d=Rs(a,null,0,0);e=a.fA+1|0;a.fA=e;if(e>a.iZ)RP(a);}}else{e=VB(b);f=e&(a.ct.data.length-1|0);d=N4(a,b,f,e);if(d===null){a.ft=a.ft+1|0;d=Rs(a,b,f,e);e=a.fA+1|0;a.fA=e;if(e>a.iZ)RP(a);}}b=d.eZ;d.eZ=c;return b;}
function Rs(a,b,c,d){var e,f,g;e=new G1;f=null;e.gL=b;e.eZ=f;e.jp=d;g=a.ct.data;e.eq=g[c];g[c]=e;return e;}
function RP(a){var b,c,d,e,f,g,h,i;b=a.ct.data.length;b=Zv(!b?1:b<<1);c=R(G1,b);d=c.data;e=0;f=b-1|0;while(true){g=a.ct.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.jp&f;i=h.eq;h.eq=d[b];d[b]=h;h=i;}e=e+1|0;}a.ct=c;RF(a);}
function VB(b){var c,d,e,f,g,h;c=R(C,2).data;c[0]=Ff(b.b1);c[1]=Ff(b.b6);d=(-1515898884);e=0;while(e<c.length){b=c[e];if(b===null)f=0;else{g=b.eC;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;d=IH(h,4)^((h>>>7|0)|h<<25)^IH(d,13);e=e+1|0;}return d;}
function Ck(){var a=this;C.call(a);a.o=null;a.L=0;a.ex=null;a.cv=null;a.fO=null;a.eU=0;a.gI=0;}
var APF=0;var APG=0;var APH=0;function Do(a){var b=new Ck();GY(b,a);return b;}
function GY(a,b){var c,d,e,f;c=b.data;a.o=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].q)|0;f=f+1|0;}a.L=d;}
function Sx(a,b){var c,d,e,f;c=0;d=0;e=a.o.data.length;a:{while(true){if(d>=e)break a;f=c+I(a.o.data[d].q)|0;if(f>b)break;d=d+1|0;c=f;}}return c;}
function HL(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.L){a.o=R(B0,0);DR(a);a.L=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.o.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].q);i=I(a.o.data[f].q);j=BD(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.o.data[f];if(!b&&c==I(k.q)?1:0){g=a.o;a.o=OL(g,e,R(B0,g.data.length-1|0));a.L=a.L-d|0;DR(a);return;}a.o.data[e]=Dd(Ft(B6(k.q,0,b),Dc(k.q,c)),k.cm,k.bK);}else{g=a.o.data;l=g[e];m=g[f];if(b){if(b!=
I(l.q))a.o.data[e]=Dd(B6(l.q,0,b),l.cm,l.bK);e=e+1|0;}if(c==I(m.q))f=f+1|0;else if(c)a.o.data[f]=Dd(Dc(m.q,c),m.cm,m.bK);g=a.o;a.o=WJ(g,e,f,R(B0,(g.data.length-f|0)+e|0));}a.L=a.L-d|0;DR(a);}
function Hm(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(Ck,[Do(R(B0,0)),a]);if(b>=a.L)return H(Ck,[a,Do(R(B0,0))]);c=a.o;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].q);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(Ck,[Do(Jn(c,0,R(B0,d))),Do(Jn(c,d,R(B0,f-d|0)))]);h=e[d];e=Jn(c,0,R(B0,d+1|0));i=e.data;j=Jn(c,d,R(B0,f-d|0));c=j.data;i[d]=Dd(B6(h.q,0,b),h.cm,h.bK);c[0]=Dd(Dc(h.q,b),h.cm,h.bK);return H(Ck,[Do(e),Do(j)]);}
function Ib(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=a.o.data;if(!e.length){f=R(B0,1);f.data[0]=Xp(d);a.o=f;}else{g=e[b];if(c<=0)h=Dd(Ft(d,g.q),g.cm,g.bK);else if(c>=I(g.q))h=Dd(Ft(g.q,d),g.cm,g.bK);else{i=I(d);j=i+c|0;k=I(g.q)-c|0;f=BN(I(g.q)+i|0);l=f.data;m=0;while(m<c){l[m]=L(g.q,m);m=m+1|0;}m=0;while(m<i){l[m+c|0]=L(d,m);m=m+1|0;}m=0;while(m<k){l[m+j|0]=L(g.q,m+c|0);m=m+1|0;}h=Dd(Fb(f),g.cm,g.bK);}e[b]=h;}a.L=a.L+I(d)|0;DR(a);}
function JC(a,b,c){var d,e,f,g,h,i,j;d=a.o.data.length;e=a.ex;if(!(e!==null&&e.data.length>=d)){a.ex=AAi(d);a.cv=BS(d);a.eU=1;}if(!a.eU)APG=APG+1|0;else{f=0;g=0.0;APF=APF+1|0;h=0;while(h<d){i=c.data;j=a.o.data[h];f=f+I(j.q)|0;Dx(b,i[j.bK]);g=g+Dk(b,j.q);a.ex.data[h]=g;a.cv.data[h]=g+0.5|0;h=h+1|0;}a.L=f;a.eU=0;}}
function DR(a){a.eU=1;a.gI=1;a.fO=null;}
function PX(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!(a.cv!==null&&!a.eU))JC(a,c,d);e=a.cv;f=a.o.data.length;if(!f)return 0;if(b<=0)return 0;g=e.data;if(b>=g[f-1|0])return a.L;f=F8(a,b);if(f==a.o.data.length)return a.L;h=Tl(a,c,d,f);i=0;j=0;while(j<f){i=i+I(a.o.data[j].q)|0;j=j+1|0;}k=!f?0:g[f-1|0];l=g[f];j=0;a:{while(true){d=h.data;if(j>=d.length){f=l;break a;}f=d[j];if(b<f)break;i=i+1|0;j=j+1|0;l=f;k=f;}}if(APH){c=new M;O(c);T(G(T(G(T(G(c,B(293)),k),B(294)),b),B(295)),f);$rt_globals.console.info($rt_ustr(N(c)));m
=i;$rt_globals.console.info(" pos = "+m);}if((b-k|0)>(f-b|0))i=i+1|0;return i;}
function Tl(a,b,c,d){var e,f,g,h,i,j,k;if(a.fO===null)a.fO=R($rt_arraycls($rt_intcls()),a.o.data.length);e=a.fO.data[d];if(e===null){e=c.data;f=a.o.data[d];Dx(b,e[f.bK]);f=f.q;e=BS(I(f)-1|0);c=FK(f);g=!d?0.0:a.ex.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bx;k=i+1|0;UA(f,c,0,k);h[i]=g+Dk(b,f)+0.5|0;i=k;}a.fO.data[d]=e;}return e;}
function F8(a,b){var c;c=X4(a.cv,0,a.o.data.length,b);if(c<0)c=( -c|0)-1|0;return c;}
function NL(a,b){var c,d,e;c=F8(a,b);if(!c)return 0;b=c+(-1)|0;d=0;e=0;while(e<=b){d=d+I(a.o.data[e].q)|0;e=e+1|0;}return d;}
function E4(a,b,c,d){var e,f,g,h,i;if(!a.o.data.length)return 0;if(!b)return 0;if(!(!a.eU&&a.cv!==null))JC(a,c,d);if(b>=a.L)return a.cv.data[a.o.data.length-1|0];e=0;f=0;a:{while(true){g=a.o.data;if(f>=g.length)break a;h=e+I(g[f].q)|0;i=BD(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.cv.data[f];}return (Tl(a,c,d,f)).data[(b-e|0)-1|0];}
function D7(a){var b,c,d;a:{b=a.o.data.length;if(b){c=a.cv.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function RY(a,b){var c,d,e;c=F8(a,b);if(a.cv.data[c]==b)c=c+1|0;c=c+1|0;if(c>=a.o.data.length&&b==D7(a))return 2147483647;d=0;e=0;while(e<c){d=d+I(a.o.data[e].q)|0;e=e+1|0;}return d;}
function El(a){var b,c,d,e;b=new M;Fc(b,a.L);c=a.o.data;d=c.length;e=0;while(e<d){BR(b,c[e].q);e=e+1|0;}return N(b);}
function K_(b){var c,d,e,f;c=R(Ck,1);d=c.data;e=new Ck;f=R(B0,1);f.data[0]=Xp(b);GY(e,f);d[0]=e;return c;}
function UX(){APH=0;}
var Sb=F();
function AA8(a){}
var Sc=F();
function AKi(a,b){}
var Nh=F(0);
var Sa=F();
var WE=F();
function Rc(){C.call(this);this.pH=null;}
function AFZ(a){var b;b=a.pH;Bq(Bw(),b);}
var YJ=F(0);
function Sv(b,c){var d,e,f,g;d=c.data;e=b.data.length;f=d.length;g=CV(b,e+f|0);DU(c,0,g,e,f);return g;}
function Jn(b,c,d){DU(b,c,d,0,d.data.length);return d;}
function OL(b,c,d){var e;if(c>0)DU(b,0,d,0,c);e=d.data.length;if(c<e)DU(b,c+1|0,d,c,e-c|0);return d;}
function WJ(b,c,d,e){var f;if(c>0)DU(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)DU(b,d,e,c,f-d|0);}return e;}
function Yi(b,c){var d,e;d=b.data.length;e=CV(b,d+1|0);e.data[d]=c;return e;}
function HG(b){var c;c=new SA;c.hc=b;return c;}
function B0(){var a=this;C.call(a);a.q=null;a.cm=0;a.bK=0;}
function Xp(a){var b=new B0();AJF(b,a);return b;}
function Dd(a,b,c){var d=new B0();R1(d,a,b,c);return d;}
function AJF(a,b){R1(a,b,0,0);}
function R1(a,b,c,d){a.q=b;a.cm=c;a.bK=d;}
function Gp(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Hv(){var a=this;C.call(a);a.co=null;a.dk=0;}
var API=null;var APJ=null;function AMR(a){var b=new Hv();Q9(b,a);return b;}
function ALW(a,b){var c=new Hv();Uv(c,a,b);return c;}
function R$(b,c){var d;d=BD(b.bu,c.bu);if(!d)d=BD(c.bw,b.bw);return d;}
function Q9(a,b){Uv(a,null,b);}
function Uv(a,b,c){var d,e;a.dk=0;if(DP(c))return;Mk(c,API);if(b!==null)a.co=K0(b);c=BV(c);while(B2(c)){d=BX(c);e=a.co;if(e!==null){ON(a,e,K0(d));continue;}a.co=K0(d);}}
function Nl(a,b){var c;if(b.d_)return b;b=BV(b.bn);while(true){if(!B2(b))return null;c=Nl(a,BX(b));if(c!==null)break;}return c;}
function I5(a,b,c){var d,e,f;d=b.bF;if(d.bu==c.bu&&d.bw==c.bw?1:0){e=BV(b.bn);while(B2(e)){f=I5(a,BX(e),c);if(f!==null)return f;}return b;}b=BV(b.bn);while(true){if(!B2(b))return null;d=BX(b);if(N$(d,c.bu,c.bw)){e=I5(a,d,c);if(e!==null)break;}}return e;}
function S4(a,b,c){Cc(c,b.bF);b=BV(b.bn);while(B2(b)){S4(a,BX(b),c);}}
function NE(a,b,c){a.dk=0;H0(a,a.co,b,c);}
function H0(a,b,c,d){var e;if(CN(b)<c)return;a:{if(CH(b)>c){I4(b,d);Fe(b,d);b=BV(b.bn);while(B2(b)){H0(a,BX(b),c,d);}}else{if(!IL(b,c)){if(a.dk)break a;if(CN(b)!=c)break a;}Fe(b,d);if(CH(b)==c&&a.dk)I4(b,d);e=BV(b.bn);while(B2(e)){H0(a,BX(e),c,d);}if(!a.dk){b.d_=1;a.dk=1;}}}}
function QT(a,b,c){a.dk=0;KF(a,a.co,b,c);}
function KF(a,b,c,d){var e,f,g,h;if(CN(b)<c)return;e=CH(b);f=c+d|0;if(e>f){e= -d|0;I4(b,e);Fe(b,e);g=BV(b.bn);while(B2(g)){KF(a,BX(g),c,d);}b.bn=LU(a,b.bn);}else{g=b.bF;if(c<=g.bu&&g.bw<=f?1:0){if(b!==a.co){H6(b,(-1));II(b,(-1));}else{H6(b,0);II(b,0);}Gw(b.bn);}else{e=IL(b,c);f=IL(b,f);if(e&&f)Fe(b, -d|0);else if(e)II(b,c);else{if(!f)return;H6(b,c);Fe(b, -d|0);}h=BV(b.bn);while(B2(h)){KF(a,BX(h),c,d);}b.bn=LU(a,b.bn);if(!a.dk){b.d_=1;a.dk=1;}}}}
function LU(a,b){var c,d,e,f,g,h;c=Cx();d=null;Mk(b,APJ);b=BV(b);while(B2(b)){e=BX(b);if(CH(e)==CN(e))continue;if(!e.d_){if(d!==null){Cc(c,d);d=null;}Cc(c,e);}else if(d===null)d=e;else{f=Z(CH(d),CH(e));g=Bf(CN(d),CN(e));h=K0(Me(f,g,d.bF.er));h.c9=e.c9;h.d_=1;d=h;}}if(d!==null)Cc(c,d);return c;}
function ON(a,b,c){var d,e;a:{if(MN(b,c)){d=BV(b.bn);while(true){if(!B2(d)){Cc(b.bn,c);c.c9=b;break a;}e=BX(d);if(MN(e,c))break;}ON(a,e,c);return;}}}
function Ps(a,b,c,d){var e,f,g,h,i,j;if((CN(c)-CH(c)|0)<43)e=B6(d,CH(c),CN(c));else{e=B6(d,CH(c),CH(c)+20|0);f=B6(d,CN(c)-20|0,CN(c));g=new M;O(g);G(G(G(g,e),B(268)),f);e=N(g);}e=RU(e,B(220),B(296));f=Bw();g=Cj(c);h=new M;O(h);i=T(h,b);BB(i,32);g=G(i,g);BB(g,9);G(g,e);Bq(f,N(h));c=BV(c.bn);j=b+1|0;while(B2(c)){Ps(a,j,BX(c),d);}}
function X8(){API=new TZ;APJ=new T1;}
function Go(){var a=this;C.call(a);a.kl=null;a.fI=null;a.p_=null;}
function APK(a,b,c){var d=new Go();Km(d,a,b,c);return d;}
function Km(a,b,c,d){a.kl=b;a.fI=c;a.p_=d;}
function US(){var b,c;b=new Go;c=Bp(B(297));C1();Km(b,c,AO4,AO6);return b;}
function ZF(){var b,c;b=new Go;D_();c=APn;C1();Km(b,c,APy,AO6);return b;}
function IT(){var a=this;C.call(a);a.ck=null;a.cE=null;a.cX=null;a.jc=null;a.dy=null;a.fh=null;a.jR=null;a.ka=null;a.iu=0;}
function FC(a,b){Bu(a.ck.O,!b?a.dy.cI:a.dy.hk);Bu(a.cE.O,!b?a.dy.cI:a.dy.hk);Bu(a.cX.O,!b?a.dy.cI:a.dy.hk);a.iu=b;}
function Zy(){var a=this;C.call(a);a.bu=0;a.bw=0;a.er=0;}
function Me(a,b,c){var d=new Zy();ACV(d,a,b,c);return d;}
function ACV(a,b,c,d){a.bu=b;a.bw=c;a.er=d;}
function AI5(a,b){var c;if(a===b)return 1;if(b!==null&&CA(a)===CA(b)){c=b;return a.bu==c.bu&&a.bw==c.bw&&a.er==c.er?1:0;}return 0;}
function ABI(a,b){var c;b=b;c=BD(a.bu,b.bu);if(!c)c=BD(b.bw,a.bw);return c;}
var TZ=F();
function AD6(a,b,c){return R$(b,c);}
var T1=F();
function AFp(a,b,c){b=b;c=c;return R$(b.bF,c.bF);}
var Ew=F();
var APL=null;var APM=null;var APN=null;var APO=null;var APP=null;var APQ=null;function XH(){APL=new Sh;APM=new Sf;APN=new Sg;APO=new Sd;APP=new Se;APQ=new Uy;}
var UB=F(Bh);
var Gb=F(Fl);
function Ug(){Gb.call(this);this.pG=null;}
function ADg(a){return 1;}
function AKB(a,b){var c;if(!b)return a.pG;c=new Bv;U(c);J(c);}
function UV(){var a=this;C.call(a);a.bF=null;a.c9=null;a.bn=null;a.d_=0;}
function K0(a){var b=new UV();AHG(b,a);return b;}
function AHG(a,b){a.d_=0;a.bF=b;a.c9=null;a.bn=Cx();}
function CH(a){return a.bF.bu;}
function CN(a){return a.bF.bw;}
function H6(a,b){a.bF.bu=b;}
function II(a,b){a.bF.bw=b;}
function I4(a,b){var c;c=a.bF;c.bu=c.bu+b|0;}
function Fe(a,b){var c;c=a.bF;c.bw=c.bw+b|0;}
function IL(a,b){return CH(a)<=b&&b<CN(a)?1:0;}
function N$(a,b,c){var d;d=a.bF;return d.bu<=b&&c<=d.bw?1:0;}
function MN(a,b){b=b.bF;return N$(a,b.bu,b.bw);}
function AEb(a){var b,c,d,e,f;b=a.bF;c=b.bu;d=b.bw;e=b.er;b=new M;O(b);BB(b,40);BB(T(G(T(G(T(b,c),B(85)),d),B(85)),e),41);b=N(b);c=a.d_;f=new M;O(f);Fk(G(G(f,b),B(85)),c);return N(f);}
var MZ=F(0);
var Eg=F(DA);
var IJ=F(Eg);
var Sh=F(IJ);
var JQ=F(Eb);
var Sf=F(JQ);
var Sg=F(Gb);
var D1=F(0);
var Sd=F();
var Nq=F(0);
var Se=F();
var Uy=F();
function LL(){var a=this;C.call(a);a.kb=0;a.qi=0;a.mS=0;a.n8=0;a.ls=null;}
function B2(a){return a.kb>=a.mS?0:1;}
function BX(a){var b,c,d;b=a.qi;c=a.ls;if(b<c.cf){c=new Hn;U(c);J(c);}d=a.kb;a.n8=d;a.kb=d+1|0;return c.oi(d);}
var Wq=F();
function SC(){DA.call(this);this.qe=null;}
function AIH(a){var b,c,d,e,f;b=a.qe;if(b.ig===null){c=new N3;d=null;e=null;c.s4=(-1);c.dd=b;c.hL=d;c.kf=1;c.jW=0;c.hG=e;c.h3=1;c.jk=0;c.og=0;b.ig=c;}e=b.ig;if(e.og){f=!e.jk?SN(e.dd,1):!e.h3?Mm(e.dd,e.hG,1):Uu(e.dd,e.hG,1);c=AD2(e.dd,f,e.hL,e.kf,e.jW,1);}else{f=!e.jW?SN(e.dd,0):!e.kf?Mm(e.dd,e.hL,0):Uu(e.dd,e.hL,0);c=AD2(e.dd,f,e.hG,e.jk,e.h3,0);}b=new M8;b.sa=a;b.iJ=c;return b;}
var WA=F();
function JN(){var a=this;C.call(a);a.hH=null;a.nv=null;a.po=null;a.kB=null;a.kD=null;a.jD=null;a.nJ=null;a.ld=null;a.K=null;a.lU=null;a.qX=null;}
function APR(a,b,c,d,e,f,g,h,i,j,k){var l=new JN();LF(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function LF(a,b,c,d,e,f,g,h,i,j,k,l){var m;m=j.data;a.hH=b;a.nv=c;a.po=d;a.kB=e;a.kD=f;a.jD=g;a.nJ=h;a.ld=i;a.lU=j;a.qX=k;if(m.length>=15){a.K=l;return;}b=new BC;U(b);J(b);}
function I6(){var a=this;C.call(a);a.gL=null;a.eZ=null;}
function G1(){var a=this;I6.call(a);a.jp=0;a.eq=null;}
function R6(){C.call(this);this.rE=null;}
function ADH(a){Bq(Bw(),B(298));}
function Pu(){C.call(this);this.o9=null;}
function AKp(a,b){GE(a.o9,b);}
function Jp(){var a=this;C.call(a);a.eO=null;a.pz=null;a.qZ=null;a.gq=null;a.be=null;}
function APS(a,b,c,d,e){var f=new Jp();Te(f,a,b,c,d,e);return f;}
function Te(a,b,c,d,e,f){a.eO=b;a.pz=c;a.qZ=d;a.gq=e;a.be=f;}
var Jj=F(0);
function SA(){C.call(this);this.hc=null;}
function AKQ(a){return a.hc;}
function B9(){Cd.call(this);this.jm=null;}
var APT=null;var APU=null;var APV=null;var APW=null;var APX=null;var APY=null;var APZ=null;var AP0=null;var AP1=null;var AP2=null;var AP3=null;var AP4=null;var AP5=null;var AP6=null;var AP7=null;var APg=null;function VO(){VO=Bk(B9);AKq();}
function C6(a,b,c){var d=new B9();Qk(d,a,b,c);return d;}
function AKt(a,b,c,d){var e=new B9();XQ(e,a,b,c,d);return e;}
function Qk(a,b,c,d){VO();Dn(a,b,c);a.jm=Qu(d,null);}
function XQ(a,b,c,d,e){VO();Dn(a,b,c);a.jm=Qu(d,e);}
function AKq(){var b;b=new B9;D_();Qk(b,B(299),0,AO8);APT=b;APU=C6(B(300),1,Cp(204,120,50));APV=C6(B(301),2,Bp(B(302)));APW=C6(B(303),3,Bp(B(304)));APX=C6(B(305),4,Bp(B(306)));APY=C6(B(307),5,Cp(188,63,60));APZ=C6(B(308),6,Bp(B(309)));AP0=C6(B(310),7,Bp(B(311)));AP1=C6(B(312),8,Bp(B(313)));AP2=AKt(B(314),9,AO8,Cp(52,65,52));AP3=AKt(B(315),10,Bp(B(316)),Bp(B(317)));AP4=C6(B(318),11,Bp(B(319)));AP5=C6(B(320),12,Bp(B(321)));AP6=C6(B(322),13,Bp(B(323)));b=C6(B(324),14,Bp(B(325)));AP7=b;APg=H(B9,[APT,APU,APV,APW,
APX,APY,APZ,AP0,AP1,AP2,AP3,AP4,AP5,AP6,b]);}
function H4(){var a=this;C.call(a);a.oy=null;a.oz=null;}
function Qu(a,b){var c=new H4();ABr(c,a,b);return c;}
function ABr(a,b,c){a.oy=b;a.oz=c;}
function EC(){var a=this;C.call(a);a.iz=null;a.j6=null;a.kk=null;a.cI=null;a.hk=null;}
function AP8(a,b,c,d,e){var f=new EC();Fx(f,a,b,c,d,e);return f;}
function Fx(a,b,c,d,e,f){a.iz=b;a.j6=c;a.kk=d;a.cI=e;a.hk=f;}
function OG(){var a=this;C.call(a);a.pc=null;a.pd=null;a.pb=null;}
function AJ5(a){var b,c,d,e,f;b=a.pc;c=a.pd;d=a.pb;e=Bw();f=new M;O(f);b=G(f,b);BB(b,9);b=G(b,c);BB(b,9);G(b,d);Bq(e,N(f));}
function M8(){var a=this;C.call(a);a.iJ=null;a.sa=null;}
function ABS(a){return a.iJ.dj<=0?0:1;}
function AGM(a){var b,c,d,e,f;b=a.iJ;if(b.mr!=b.ke.fu){b=new Hn;U(b);J(b);}c=b.dj;if(!c){b=new KC;U(b);J(b);}a:{d=b.hP.data;e=c-1|0;b.dj=e;f=d[e];b.lX=f;f=HV(f,b.hB);if(f!==null)while(true){if(f===null)break a;d=b.hP.data;c=b.dj;b.dj=c+1|0;d[c]=f;f=G4(f,b.hB);}}OI(b);return b.lX.d9;}
function Ly(){var a=this;C.call(a);a.bG=null;a.hm=null;a.ek=null;a.c8=0;a.dF=0;a.fj=null;a.eS=null;a.eW=0;}
function P0(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.c8;i=Bc(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bf(i,e))a:{while(true){if(d<=e){j=d;break a;}D8(c);j=d+(-1)|0;b=CZ(d);d=Bc(j,a.dF)%a.ek.b|0;Fn(a,c,b,a.eW,g);GQ(a.bG,c,0,d);if(!(j%a.c8|0))break;d=j;}}else{D8(b);k=a.c8-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Fn(a,b,CZ(j),Bc(a.dF,k)+a.eW|0,g);k=k+(-1)|0;j=h;}Df(a.bG,b);j=Bf(i,e);}return j;}k=a.c8;h=Bc(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Z(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}D8(c);b=CZ((d+f|0)+1|0);j=d+
1|0;d=Bc(d,a.dF)%a.ek.b|0;Fn(a,c,b,a.eW,g);GQ(a.bG,c,0,d);if(!(j%a.c8|0))break;d=j;}}else{D8(b);d=0;while(d<a.c8){h=h+1|0;Fn(a,b,CZ((h>e?h-f|0:h)+f|0),Bc(a.dF,d)+a.eW|0,g);d=d+1|0;}Df(a.bG,b);j=Z(i,e);}return j;}
function HJ(a,b,c,d,e,f){IZ(b,a.hm.a+d.a|0,c+d.b|0,a.fj,a.eS,a.bG,e,f,0.0);}
function Fn(a,b,c,d,e){Co(b,c,a.ek.a-20.0*e,d);}
function Tx(){var a=this;C.call(a);a.su=null;a.sv=0;a.st=null;}
function Ne(){C.call(this);this.n1=null;}
var E9=F(Hc);
var TF=F(Ek);
var Hn=F(Bh);
var Kt=F(Dv);
var AP9=0.0;var AP$=null;function X9(){AP9=$rt_globals.NaN;AP$=E($rt_floatcls());}
var EX=F();
var AOd=null;var AOf=null;var AOg=null;var AOe=null;var AOc=null;function W9(){AOd=EE([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AOf=ABP([W(1),W(10),W(100),W(1000),W(10000),W(100000),W(1000000),W(10000000),W(100000000),W(1000000000),B3(1410065408, 2),B3(1215752192, 23),B3(3567587328, 232),B3(1316134912, 2328),B3(276447232, 23283),B3(2764472320, 232830),B3(1874919424, 2328306),B3(1569325056, 23283064),B3(2808348672, 232830643)]);AOg=ABP([W(1),W(10),W(100),W(10000),W(100000000),B3(1874919424, 2328306)]);AOe
=new Q3;AOc=new R_;}
var Iy=F();
var AP_=null;var AQa=null;function XI(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.lp=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.iM=0;c.iv=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(EJ(CF(W(e),W(8388608)),D2)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=XP(AQa,f);if(h<0)h=( -h|0)-2|0;i=AQa.data;j=9+(f-i[h]|0)|0;k=W(e);l=AP_.data;m=Ef(DG(BI(k,W(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=Ef(DG(BI(k,W(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<( -g|0);o
=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BD(q,r);e=e>0?Bc(m/q|0,q):e<0?Bc(m/r|0,r)+r|0:Bc((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.iM=e;c.iv=h-50|0;}
function Wl(){var b,c,d,e,f,g,h,i;AP_=BS(100);AQa=BS(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AP_.data;g=d+50|0;f[g]=$rt_udiv(e,20);AQa.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Ef(Ce(W(h),FF(BI(W(b&((1<<i)-1|0)),W(10)),i)));f=AP_.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AQa.data[i]=c;d=d+1|0;}}
function R_(){var a=this;C.call(a);a.iM=0;a.iv=0;a.lp=0;}
function Kn(){var a=this;C.call(a);a.r8=null;a.ky=0.0;a.sw=0.0;a.d4=null;a.fL=null;a.jU=null;a.ee=0;}
function Zg(a,b){var c;if(b!==null){a.fL=b;return a;}c=new BC;Ba(c,B(326));J(c);}
function XV(a,b){var c;if(b!==null){a.jU=b;return a;}c=new BC;Ba(c,B(326));J(c);}
function NX(a,b,c,d){var e,f,g,$$je;e=a.ee;if(!(e==2&&!d)&&e!=3){a.ee=d?2:1;while(true){try{f=Zi(a,b,c);}catch($$e){$$je=DS($$e);if($$je instanceof Bh){g=$$je;J(ACp(g));}else{throw $$e;}}if(Gc(f))return f;if(G3(f)){if(d&&Dm(b)){g=a.fL;Gf();if(g===AOJ)return DB(BW(b));if(BW(c)<=I(a.d4))return AOM;Ei(b,b.M+BW(b)|0);if(a.fL===AOK)IC(c,a.d4);}return f;}if(Oo(f)){g=a.fL;Gf();if(g===AOJ)return f;if(g===AOK){if(BW(c)<I(a.d4))return AOM;IC(c,a.d4);}Ei(b,b.M+IE(f)|0);}else if(Kl(f)){g=a.jU;Gf();if(g===AOJ)break;if(g
===AOK){if(BW(c)<I(a.d4))return AOM;IC(c,a.d4);}Ei(b,b.M+IE(f)|0);}}return f;}b=new DX;U(b);J(b);}
function VD(a,b){var c,d,e,f;c=a.ee;if(c&&c!=3){b=new DX;U(b);J(b);}if(!BW(b))return ZG(0);if(a.ee)a.ee=0;d=ZG(Bf(8,BW(b)*a.ky|0));while(true){e=NX(a,b,d,0);if(G3(e))break;if(Gc(e))d=PH(a,d);if(!I_(e))continue;R7(e);}b=NX(a,b,d,1);if(I_(b))R7(b);while(true){f=a.ee;if(f!=3&&f!=2)break;a.ee=3;if(G3(AON)){d.cR=d.M;d.M=0;d.f4=(-1);return d;}d=PH(a,d);}b=new DX;U(b);J(b);}
function PH(a,b){var c,d,e;c=b.fW;d=Vc(c,Bf(8,c.data.length*2|0));e=Xg(d,0,d.data.length);Ei(e,b.M);return e;}
var WR=F(CC);
function Q3(){var a=this;C.call(a);a.jj=D2;a.ie=0;a.k$=0;}
var DX=F(Bh);
var X3=F(Ek);
function ACp(a){var b=new X3();AGa(b,a);return b;}
function AGa(a,b){a.hu=1;a.hR=1;a.i8=b;}
var Om=F();
function AJ6(a,b){X$(b);}
function N3(){var a=this;Eg.call(a);a.s4=0;a.dd=null;a.hL=null;a.kf=0;a.jW=0;a.hG=null;a.h3=0;a.jk=0;a.og=0;}
function Q6(){C.call(this);this.n6=null;}
function AAF(a,b){var c,d,e;c=a.n6;if(c.e.g.cL==c.i_){b=b.data;d=D6(b[0]);e=E6(b[1]);Xj(c.e.g,d,e);Nt(c.e.g);}}
var U0=F();
function Ig(b,c,d){var e,f;a:{e=b.a;f=c.a;if(e>=f&&e<(f+d.a|0)){e=b.b;f=c.b;if(e>=f&&e<(f+d.b|0)){e=1;break a;}}e=0;}return e;}
function MF(b,c,d,e){var f;a:{f=b.a;if(f>=c&&f<(c+e.a|0)){c=b.b;if(c>=d&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function IW(){var a=this;Kn.call(a);a.lB=null;a.oI=null;}
function Zi(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.lB;e=0;f=0;g=a.oI;a:{b:{while(true){if((e+32|0)>f&&Dm(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=BW(b)+k|0;h=j.length;f=Z(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new Bv;c=new M;O(c);T(G(T(G(c,B(327)),l),B(91)),h);Ba(b,N(c));J(b);}if(BW(b)<m){b=new Kc;U(b);J(b);}if(m<0){b=new Bv;c=new M;O(c);G(T(G(c,B(92)),m),B(93));Ba(b,N(c));J(b);}n=b.M;h=n+b.i0|0;e=0;while(e<m){o=k+1|0;i=b.jC.data;l=h+1|0;j[k]=i[h];e=e+1
|0;k=o;h=l;}b.M=n+m|0;e=0;}if(!Dm(c)){p=!Dm(b)&&e>=f?AON:AOM;break a;}i=g.data;n=BW(c);o=i.length;n=Z(n,o);q=new RR;q.nU=b;q.pD=c;p=Zw(a,d,e,f,g,0,n,q);e=q.qJ;if(p===null&&0==q.ih)p=AON;k=q.ih;h=0;if(c.kn){b=new HF;U(b);J(b);}if(BW(c)<k)break;if(h>o){b=new Bv;c=new M;O(c);BB(T(G(T(G(c,B(94)),h),B(88)),o),41);Ba(b,N(c));J(b);}l=h+k|0;if(l>o){b=new Bv;c=new M;O(c);T(G(T(G(c,B(96)),l),B(91)),o);Ba(b,N(c));J(b);}if(k<0){b=new Bv;c=new M;O(c);G(T(G(c,B(92)),k),B(93));Ba(b,N(c));J(b);}o=c.M;m=0;while(m<k){l=o+1|0;n
=h+1|0;Pv(c,o,i[h]);m=m+1|0;o=l;h=n;}c.M=c.M+k|0;if(p!==null)break a;}b=new GN;U(b);J(b);}b=new Bv;c=new M;O(c);BB(T(G(T(G(c,B(94)),k),B(88)),h),41);Ba(b,N(c));J(b);}Ei(b,b.M-(f-e|0)|0);return p;}
var Qx=F(IW);
function Zw(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(IY(h,2))break a;i=AON;break a;}c=k+1|0;n=j[k];if(!E2(a,n)){c=c+(-2)|0;i=DB(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(IY(h,3))break a;i=AON;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!E2(a,n))break b;if(!E2(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Ks(p)){c=k+(-3)|0;i=DB(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=DB(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(IY(h,4))break a;i=AON;break a;}if((f+2|0)>g){c=k+(-1)|0;if(BW(h.pD)<2?0:1)break a;i=AOM;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!E2(a,n))break c;if(!E2(a,o))break c;if(!E2(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=GV(r);m=c+1|0;j[c]=Ho(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=DB(1);break a;}c=k+(-3)|0;i
=DB(1);}h.qJ=c;h.ih=f;return i;}
function E2(a,b){return (b&192)!=128?0:1;}
var O9=F();
function ADR(a,b){b=b;b.bG=Dy(b.bG,null);}
var It=F(Dv);
var AQb=0.0;var AQc=null;function VH(){AQb=$rt_globals.NaN;AQc=E($rt_doublecls());}
var JT=F();
var AQd=null;var AQe=null;function W6(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.k$=EJ(CF(d,B3(0, 2147483648)),D2)?0:1;e=CF(d,B3(4294967295, 1048575));f=Ef(FF(d,52))&2047;if(EJ(e,D2)&&!f){c.jj=D2;c.ie=0;return;}g=0;if(f)e=AL5(e,B3(0, 1048576));else{e=ES(e,1);while(EJ(CF(e,B3(0, 1048576)),D2)){e=ES(e,1);f=f+(-1)|0;g=g+1|0;}}h=XP(AQe,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AQe.data[h]|0)|0;j=OX(e,AQd.data[h],i);if(V$(j,B3(2808348672, 232830643))){h=h+1|0;i=12+(f-AQe.data[h]|0)|0;j=OX(e,AQd.data[h],i);}k
=DG(AQd.data[h],(63-i|0)-g|0);l=FF(Ce(k,W(1)),1);m=FF(k,1);if(EJ(e,B3(0, 1048576)))m=FF(m,2);n=W(10);while(NF(n,m)){n=BI(n,W(10));}if(V$(K$(j,n),C2(m,W(2))))n=C2(n,W(10));o=W(1);while(NF(o,l)){o=BI(o,W(10));}if(ACC(IX(o,K$(j,o)),C2(l,W(2))))o=C2(o,W(10));f=AMp(n,o);e=f>0?BI(C2(j,n),n):f<0?Ce(BI(C2(j,o),o),o):BI(C2(Ce(j,C2(o,W(2))),o),o);if(V$(e,B3(2808348672, 232830643))){h=h+1|0;e=C2(e,W(10));}else if(ACS(e,B3(1569325056, 23283064))){h=h+(-1)|0;e=BI(e,W(10));}c.jj=e;c.ie=h-330|0;}
function OX(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CF(b,W(65535));f=CF(DG(b,16),W(65535));g=CF(DG(b,32),W(65535));h=CF(DG(b,48),W(65535));i=CF(c,W(65535));j=CF(DG(c,16),W(65535));k=CF(DG(c,32),W(65535));l=CF(DG(c,48),W(65535));m=Ce(Ce(BI(k,e),BI(j,f)),BI(i,g));n=Ce(Ce(Ce(BI(l,e),BI(k,f)),BI(j,g)),BI(i,h));o=Ce(Ce(ES(BI(l,h),32+d|0),ES(Ce(BI(l,g),BI(k,h)),16+d|0)),ES(Ce(Ce(BI(l,f),BI(k,g)),BI(j,h)),d));return Ce(d>16?Ce(o,ES(n,d-16|0)):Ce(o,DG(n,16-d|0)),DG(m,32-d|0));}
function WK(){var b,c,d,e,f,g,h,i,j,k;AQd=ANf(660);AQe=BS(660);b=B3(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AQd.data;g=d+330|0;f[g]=E3(e,W(80));AQe.data[g]=c;e=E3(e,W(10));h=LG(e,W(10));while(NF(e,b)&&EJ(CF(e,B3(0, 2147483648)),D2)){e=ES(e,1);c=c+1|0;h=ES(h,1);}e=Ce(e,C2(h,W(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(ACC(e,B3(3435973836, 214748364))){e=FF(e,1);j=j+1|0;d=d+(-1)|0;}k=BI(e,W(10));b=j<=0?k:Ce(k,FF(BI(CF(b,W((1<<j)-1|0)),W(10)),j));f=AQd.data;g=(330-i|0)-1|0;f[g]=E3(b,W(80));AQe.data[g]
=d;i=i+1|0;}}
var Pn=F(Dv);
var AQf=null;function E3(b,c){return Long_udiv(b, c);}
function LG(b,c){return Long_urem(b, c);}
function JB(b,c){return Long_ucompare(b, c);}
function WI(){AQf=E($rt_longcls());}
var Fv=F(Bh);
function LQ(){var a=this;C.call(a);a.kJ=null;a.mY=null;a.pE=0;a.qD=0;}
function J5(a,b){return BW(a.mY)<b?0:1;}
function UF(){var a=this;C.call(a);a.mr=0;a.ke=null;a.hP=null;a.lX=null;a.ps=null;a.pF=0;a.pl=0;a.dj=0;a.hB=0;}
function AD2(a,b,c,d,e,f){var g=new UF();AAD(g,a,b,c,d,e,f);return g;}
function AAD(a,b,c,d,e,f,g){var h,i;a.ke=b;a.mr=b.fu;b=b.c$;h=b!==null?b.dn:0;i=c.data;a.hP=CV(c,h);a.dj=i.length;a.ps=d;a.pF=e;a.pl=f;a.hB=g;OI(a);}
function OI(a){var b,c;if(a.pF){b=a.dj;if(b){c=ED(a.ke.eD,a.hP.data[b-1|0].dH,a.ps);if(a.hB)c= -c|0;if(!a.pl){if(c>=0)a.dj=0;}else if(c>0)a.dj=0;return;}}}
var U2=F();
function XE(b,c){return Yr(null,b,c,0);}
function Yr(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=AEk(c);g=B1(f);h=B1(f);i=B1(f);j=R(Ck,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<Ca(b)){l=B1(f);c[k]=B8(b,k);l=4*l|0;f.eF=f.eF+l|0;}else c[k]=Do(U6(f,d,0));k=k+1|0;}m=ZC(f,h);n=new IG;n.ds=GX();n.dg=GX();n.gi=Cx();if(!c.length){b=new BC;U(b);J(b);}n.A=j;n.eP=0;n.cL=0;n.cF=AMR(m);b=n.ds;e=0;while(e<i){Qg(b,JR(B1(f),B1(f)),JR(B1(f),B1(f)));e=e+1|0;}b=n.ds;m=n.dg;o=new Rr;PC(o,b);while(Lv(o)){Rd(o);b=o.fR;p=b.gL;q=b.eZ;b=Cx();if(DH(m,q)===null)Qg(m,q,b);Cc(DH(m,
q),p);}if(m.eX===null){b=new Nf;b.qP=m;m.eX=b;}b=m.eX.hA();while(b.hT()){m=b.gF();q=AOv;c=R(C,m.p);d=c.data;GG(m,c);Wg(c,q);e=0;g=d.length;while(e<g){q=d[e];HT(m,e);m.bT.data[e]=q;e=e+1|0;}}MX(f);return n;}
function Xj(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=AEk(c);g=B1(f);h=B1(f);i=B1(f);j=B1(f);k=LO(b,g);l=LO(b,h);m=(Hm(B8(b,k.a),k.b)).data[0].o;e=(Hm(B8(b,l.a),l.b)).data[1].o;n=0;o=i-1|0;while(n<i){p=U6(f,d,g);if(!n)p=Sv(m,p);if(n==o)p=Sv(p,e);q=k.a+n|0;r=Do(p);b.A.data[q]=r;n=n+1|0;}r=ZC(f,j);MX(f);if(!DP(r)){s=Me(g,h,(-1));b=b.cF;f=ALW(s,r);r=I5(b,b.co,s);if(r!==null){f=f.co.bn;if(r===b.co)b.co=BK(f,0);else if(r.c9!==null){b=new Mb;b.oG=r;Ix(f,b);b=r.c9.bn;h=b.p;q
=0;a:{while(true){if(q>=h){q=(-1);break a;}if(FX(r,BK(b,q)))break;q=q+1|0;}}F7(r.c9.bn,q);b=r.c9.bn;Np(b,q);if(!DP(f)){H2(b,b.p+f.p|0);j=f.p;g=b.p;h=g-1|0;while(h>=q){c=b.bT.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.p=g+j|0;f=BV(f);g=0;while(g<j){c=b.bT.data;h=q+1|0;c[q]=BX(f);g=g+1|0;q=h;}b.cf=b.cf+1|0;}}}}}
function U6(b,c,d){var e,f,g,h,i,j,k,l;e=B1(b);f=R(B0,e);g=f.data;h=0;while(h<e){i=B1(b);j=B1(b);k=B1(b);l=B1(b);g[h]=Dd(Ik(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function ZC(b,c){var d,e;d=Cx();e=0;while(e<c){Cc(d,Me(B1(b),B1(b),B1(b)));e=e+1|0;}return d;}
var Tt=F(0);
var APj=null;function Vd(){APj=null;}
function Vj(){var a=this;C.call(a);a.hz=null;a.eF=0;}
function AEk(a){var b=new Vj();AJo(b,a);return b;}
function AJo(a,b){a.hz=b;a.eF=0;}
function B1(a){var b,c;b=a.hz.data;c=a.eF;a.eF=c+1|0;return b[c];}
function MX(a){var b,c,d,e;if(a.eF!=a.hz.data.length){b=J4();c=a.hz.data.length;d=a.eF;e=new M;O(e);G(T(G(T(G(e,B(328)),c),B(329)),d),B(330));Bq(b,N(e));}}
function Y4(){var a=this;C.call(a);a.b1=0;a.b6=0;}
function JR(a,b){var c=new Y4();AFv(c,a,b);return c;}
function AFv(a,b,c){a.b1=b;a.b6=c;}
function UY(a,b){var c;if(a===b)return 1;if(b!==null&&CA(a)===CA(b)){c=b;return a.b1==c.b1&&a.b6==c.b6?1:0;}return 0;}
function AHT(a,b){var c;b=b;c=BD(a.b1,b.b1);if(!c)c=BD(a.b6,b.b6);return c;}
var HF=F(Fv);
var GN=F(Bh);
var Kc=F(Bh);
var UK=F();
function Pj(b,c){return b.data[c];}
function Ym(){Eg.call(this);this.xJ=null;}
function Nf(){DA.call(this);this.qP=null;}
function ACY(a){var b;b=new OC;PC(b,a.qP);return b;}
function F6(){var a=this;C.call(a);a.gX=0;a.oA=0;a.gf=null;a.fR=null;a.mJ=null;a.hq=null;}
function AQg(a){var b=new F6();PC(b,a);return b;}
function PC(a,b){a.hq=b;a.oA=b.ft;a.gf=null;}
function Lv(a){var b,c;if(a.gf!==null)return 1;while(true){b=a.gX;c=a.hq.ct.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.gX=b+1|0;}return 0;}
function V4(a){var b;if(a.oA==a.hq.ft)return;b=new Hn;U(b);J(b);}
function Rd(a){var b,c,d,e;V4(a);if(!Lv(a)){b=new KC;U(b);J(b);}b=a.gf;if(b!==null){c=a.fR;if(c!==null)a.mJ=c;a.fR=b;a.gf=b.eq;}else{d=a.hq.ct.data;e=a.gX;a.gX=e+1|0;b=d[e];a.fR=b;a.gf=b.eq;a.mJ=null;}}
var Rr=F(F6);
var OC=F(F6);
function AIo(a){Rd(a);return a.fR.eZ;}
function TU(){C.call(this);this.pX=null;}
function AEC(a,b){var c,d,e,f;c=a.pX;d=Cj(b);e=new M;O(e);G(G(e,B(331)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new PG;d.sm=c;d.mE=b;e=new PF;e.rk=c;f=new Rq;f.sc=e;e=new Ss;e.lq=d;c=b.eb;if(c!==null)c.arrayBuffer().then(Be(e,"f"),Be(f,"f"));else{b=b.fB.getFile();c=new Su;c.px=e;c.py=f;b.then(Be(c,"f"),Be(f,"f"));}}
function TX(){C.call(this);this.sT=null;}
function AKN(a,b){var c;b=Cj(b);c=new M;O(c);G(G(c,B(332)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Rb(){C.call(this);this.lS=null;}
function AA5(a){EM(a.lS);}
function LS(){C.call(this);this.sF=null;}
function ADx(a){Bq(Bw(),B(298));}
function NW(){C.call(this);this.ot=null;}
function ABL(a,b){var c,d;c=a.ot;d=c.cV+1|0;c.cV=d;c=new M;O(c);G(G(T(c,d),B(333)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function QI(){C.call(this);this.lN=null;}
function ADK(a,b){Dq(a.lN,b);}
var KC=F(Bh);
function Mb(){C.call(this);this.oG=null;}
function ALg(a,b){b.c9=a.oG.c9;}
function Q4(){C.call(this);this.mZ=null;}
function AJu(a){var b,c;b=a.mZ;c=new M;O(c);G(G(G(c,B(334)),b),B(335));$rt_globals.console.info($rt_ustr(N(c)));}
function Oc(){C.call(this);this.kN=null;}
function AHl(a,b){var c,d;c=a.kN;d=c.cV+1|0;c.cV=d;c=new M;O(c);G(G(T(c,d),B(336)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var Lg=F();
function ADX(a,b){var c;b=Cj(b);c=new M;O(c);G(G(c,B(332)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Sr(){C.call(this);this.l7=null;}
function AK2(a,b){var c,d;c=a.l7;d=c.cV+1|0;c.cV=d;c=b.f$;b=new M;O(b);G(G(T(b,d),B(337)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Y7=F();
function Ro(b,c,d,e){var f,g;f=b.next();g=new TT;g.kU=b;g.kT=c;g.kX=d;g.kV=e;f.then(Be(g,"f"),Be(d,"f"));}
function Vf(b){$rt_globals.console.info("JsFileDialog: "+b);}
function Zx(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(DI()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new TP;f.ns=b;f.nt=d;d.addEventListener("change",Be(f,"handleEvent"));d.click();}
function Vm(b,c){var d;if(c.isFile?1:0)b.n(UQ(c.file()));else{c=c.createReader();d=new TE;d.pQ=b;c.readEntries(Be(d,"f"));}}
var Zl=F();
function Pf(){var a=this;C.call(a);a.nE=null;a.nF=null;}
function AKr(a,b){var c,d,e,f,g,h,i,j,k;a:{c=a.nE;d=a.nF.bs;e=Hg(c,b);if(c.fy){f=c.e.g;g=e.b1;h=e.b6;f=JR(g,Sx(B8(f,g),h));i=Jf(c.ea,Dg(c.e),Hl(c.e));if(i!==null){f=c.e;h=e.b1;g=e.b6;j=new N7;j.tR=c;j.tS=b;i.tc(f,h,g,j,c.gP);}else{b:{i=DH(c.e.g.ds,f);if(i!==null){Hu(c,i);h=1;}else{f=DH(c.e.g.dg,f);if(f!==null&&!DP(f)){if(f.p==1){Hu(c,BK(f,0));h=1;break b;}if(!Ex(c.bZ)){i=c.bZ;k=QF(i,f,c,c.e);f=new Lh;f.lQ=c;IB(i,b,k,f);}}h=0;}}if(h)break a;}}h=e.b1;c.z=h;c.Q=e.b6;c.bU=E4(B8(c.e.g,h),c.Q,c.H.bx,c.bR);I3(c);Hi(c);E0(c);if
(d)c.y.c7=1;b=c.y;if(!b.c7){B$(b.b8,c.z,c.Q);c.y.c7=1;}Pg(c.y,c.z,c.Q);}}
function P2(){C.call(this);this.pB=null;}
function AEs(a){Di(a.pB);}
function Rt(){C.call(this);this.oK=null;}
function AKE(a,b){a.oK.s();}
function Os(){C.call(this);this.k4=null;}
function AAd(a,b){a.k4.n(EZ(b));}
function T9(){C.call(this);this.kM=null;}
function AJf(a,b){var c,d,e,f,g;c=a.kM;d=Fd(b);e=new M;O(e);G(G(e,B(338)),d);$rt_globals.console.info($rt_ustr(N(e)));CQ(c,0,0,0);c.d0=E1();c.gy=0;c.gx=0;c.e.g=AHR();CQ(c,0,0,0);d=Fd(b);f=Fg(d,46,I(d)-1|0);if(f!=(-1))d=Dc(d,f);g=!Br(d,B(339))?5120:10240;d=new Rl;d.q0=c;d.q1=g;d.q2=b;c=b.eb;if(c!==null)JI(d,If(b,c.size));else{c=b.fB.getFile();e=new Qv;e.kq=b;e.kr=d;b=new Qy;b.qw=d;c.then(Be(e,"f"),Be(b,"f"));}}
var TW=F();
function AIT(a,b){Vf(b);}
function TV(){var a=this;C.call(a);a.m1=null;a.m0=null;}
function ACw(a,b){var c,d,e,f,g,h,i;c=a.m1;d=a.m0;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new NV;i.lH=c;i.lG=g;h.then(Be(i,"f"),Be(d,"f"));e=e+1|0;}}
var Tn=F();
function ADY(a,b){Vf(b);}
function Tm(){var a=this;C.call(a);a.mu=null;a.mv=null;}
function AEF(a,b){var c,d,e,f,g;c=a.mu;d=a.mv;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(Bx,1);g.data[0]=EZ(b.name);Ro(f,c,d,g);}
function Uq(){var a=this;C.call(a);a.pi=null;a.pj=null;}
function AFk(a){var b,c;b=a.pi;c=a.pj;RG();Kd(b,c,AQh);}
function Un(){var a=this;C.call(a);a.p2=null;a.p1=null;}
function AJq(a){var b,c;b=a.p2;c=a.p1;RG();Kd(b,c,AQi);}
function Uo(){var a=this;C.call(a);a.nj=null;a.nk=null;}
function AIk(a){Kd(a.nj,a.nk,null);}
function Up(){var a=this;C.call(a);a.n_=null;a.n$=null;}
function AFF(a){var b,c,d,e,f,g,h;b=a.n_;c=a.n$;d=Dg(b.k.e);e=Hl(b.k.e);d=LH(b.k.ea,d,e);Di(b.k.bE);b=b.k;e=Hg(b,c);if(d!==null){f=b.e;g=e.b1;h=e.b6;e=new SX;e.tz=b;e.tA=c;d.BS(f,g,h,1,e,b.gP);}}
function Th(){C.call(this);this.qS=null;}
function AA0(a){var b;b=a.qS;Di(b.k.bE);Jw(b.k,Qm(b),0);}
function Tg(){C.call(this);this.l_=null;}
function AKT(a){var b;b=a.l_;Di(b.k.bE);Jw(b.k,Qm(b),1);}
function Ti(){C.call(this);this.lw=null;}
function ADc(a){var b,c,d;b=a.lw;Di(b.k.bE);c=b.X.u;b=b.k;Cf(b);d=new St;d.nP=b;Oy(c,d,YT(B(340)));}
function KO(){C.call(this);this.l2=null;}
function AAK(a){TH(a.l2);}
function LI(){var a=this;C.call(a);a.qc=null;a.qd=null;}
function AKg(a,b,c,d){var e,f,g,h;b=a.qc;e=a.qd;Qq(b,e);if(Gn(d)){f=d.cQ;g=e.bl;c=e.dY;h=new Bm;f=f.m;V8(h,(f.a-(g*3|0)|0)-c|0,(f.b-g|0)-c|0);Qz(b,h,d.gR,e);}}
function K8(){C.call(this);this.oX=null;}
function ALl(a,b){var c,d;c=a.oX;d=new Bh;Ba(d,$rt_str(b.message));c.n(d);}
function TP(){var a=this;C.call(a);a.ns=null;a.nt=null;}
function ADP(a,b){var c,d,e,f,g,h;b=a.ns;c=a.nt;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new K3;h.kQ=b;h.kP=g;$rt_globals.setTimeout(Be(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=UQ(d.item(f));g=new KL;g.ou=b;g.ov=c;$rt_globals.setTimeout(Be(g,"onTimer"),0);f=f+1|0;}}
var PO=F(0);
function K4(){var a=this;C.call(a);a.pu=0;a.pt=0;}
function G9(a,b){return NK(a.pu,b,a.pt);}
function Ua(){C.call(this);this.pw=null;}
function ACm(a){Lt(a.pw);}
function Uc(){C.call(this);this.m3=null;}
function AIN(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;b=a.m3;c=new JN;d=new Hw;D_();MO(d,APm);e=CG(APl);f=CG(APo);g=CG(APc);h=CG(APm);i=CG(APp);j=CG(APq);k=CG(APr);YX();l=(AQj.eG()).data;m=l.length;n=R(H4,m);o=n.data;p=0;while(p<m){o[p]=l[p].jS;p=p+1|0;}q=AF7(CW(173),CW(242),CW(173),Cp(252,250,237));r=new Jp;s=new EC;t=APn;u=APo;C1();Fx(s,t,u,t,APy,AO$);u=new EC;t=APn;v=APo;w=APy;Fx(u,t,v,t,w,w);Te(r,s,u,ZF(),Bp(B(341)),ZF());LF(c,d,e,f,g,h,i,j,k,n,q,r);b.G=c;NB(b);}
function T3(){C.call(this);this.ol=null;}
function AFY(a){var b;b=a.ol;Jy(b,b.dw.kd,b.e7+1|0);}
function T2(){C.call(this);this.lL=null;}
function AEQ(a){var b,c;b=a.lL;c=b.e7;if(c>7)Jy(b,b.dw.kd,c-1|0);}
function M3(){C.call(this);this.nn=null;}
function ACq(a){var b,c,d,e,f,g,h,i,j;b=a.nn;c=(b.mD()).data;d=R(DF,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new DF;j=new SF;j.o8=b;j.o7=h;O2(i,j,h,b.k.G.K.be);e[f]=i;f=f+1|0;}return d;}
function S1(){C.call(this);this.p3=null;}
function AEG(a){var b,c,d,e,f;b=a.p3.e.g;c=b.cL;d=new M;O(d);T(G(d,B(342)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.eP;d=new M;O(d);T(G(d,B(343)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.cF;e=Fb(FA(b));Ps(d,0,d.co,e);b=Bw();f=b.ix;f.data[0]=10;L_(b,f,0,1);}
function S0(){C.call(this);this.ly=null;}
function AHB(a){PN(a.ly);}
function S3(){C.call(this);this.n2=null;}
function AI1(a){Tj(a.n2);}
function S2(){C.call(this);this.qo=null;}
function AFx(a){Iz(a.qo);}
var N2=F(Bh);
var TM=F(Bh);
function RZ(){E9.call(this);this.tV=0;}
function NU(){E9.call(this);this.tO=0;}
function RR(){var a=this;C.call(a);a.nU=null;a.pD=null;a.qJ=0;a.ih=0;}
function IY(a,b){return BW(a.nU)<b?0:1;}
function La(){C.call(this);this.l3=null;}
function ACL(a,b){GE(a.l3,b);}
function Ul(){var a=this;C.call(a);a.lc=null;a.lb=null;a.la=0;}
function AFW(a,b){var c,d,e;c=a.lc;d=a.lb;e=a.la;d.n(P5(c,(b.a+e|0)-c.df.a|0));}
function Um(){var a=this;C.call(a);a.q$=null;a.q9=null;a.q8=0;}
function AJ2(a,b){var c,d,e;c=a.q$;d=a.q9;e=a.q8;d.n(P4(c,(b.b+e|0)-c.df.b|0));}
function S5(){var a=this;C.call(a);a.c_=0;a.dQ=0;a.kw=0;a.g1=null;}
var FH=F(Cd);
var AQi=null;var AQh=null;var AQk=null;function RG(){RG=Bk(FH);ACN();}
function AES(a,b){var c=new FH();VX(c,a,b);return c;}
function VX(a,b,c){RG();Dn(a,b,c);}
function ACN(){var b;AQi=AES(B(344),0);b=AES(B(345),1);AQh=b;AQk=H(FH,[AQi,b]);}
function St(){C.call(this);this.nP=null;}
function ABM(a,b){Dq(a.nP,b);}
var Mc=F();
var AO3=null;function ANn(){ANn=Bk(Mc);ADa();}
function ADa(){var b,c;RG();b=BS((AQk.eG()).data.length);c=b.data;AO3=b;c[AQi.b9]=1;c[AQh.b9]=2;}
function NG(){C.call(this);this.pf=null;}
function AE_(a,b){Rh(a.pf.X.u,b,APu,YT(B(346)));}
function O8(){C.call(this);this.lf=null;}
function ACG(a,b){var c,d;c=a.lf;d=b.f$;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function NV(){var a=this;C.call(a);a.lH=null;a.lG=null;}
function ACJ(a,b){a.lH.n(XT(a.lG,b));}
var Hz=F(0);
function K3(){var a=this;C.call(a);a.kQ=null;a.kP=null;}
function AEL(a){Vm(a.kQ,a.kP);}
function KL(){var a=this;C.call(a);a.ou=null;a.ov=null;}
function Z9(a){a.ou.n(a.ov);}
function TT(){var a=this;C.call(a);a.kU=null;a.kT=null;a.kX=null;a.kV=null;}
function AEd(a,b){var c,d,e,f,g;c=a.kU;d=a.kT;e=a.kX;f=a.kV;if(!(b.done?1:0)){Ro(c,d,e,f);g=b.value;if(!(g.kind==='file'?1:0))Ro(g.values(),d,e,Yi(f,EZ(g.name)));else{b=g.getFile();c=new Q_;c.mw=d;c.mx=g;c.my=f;b.then(Be(c,"f"),Be(e,"f"));}}}
function P1(){C.call(this);this.lx=null;}
function AGz(a,b){var c,d,e,f;c=b.data;b=a.lx;d=D6(c[0]);e=E6(c[1]);Xj(b.e.g,d,e);FI(b.bH.u,APj);Fj(b.bH.u);f=IX(E1(),b.d0);b=new M;O(b);G(GM(G(b,B(347)),f),B(222));$rt_globals.console.info($rt_ustr(N(b)));}
function V3(){C.call(this);this.zl=null;}
function N7(){var a=this;C.call(a);a.tR=null;a.tS=null;}
function M1(){var a=this;C.call(a);a.tT=null;a.tU=null;}
function M0(){C.call(this);this.nX=null;}
function AC2(a){EM(a.nX);}
function SX(){var a=this;C.call(a);a.tz=null;a.tA=null;}
var Tf=F(Bv);
var Ok=F(0);
var LM=F(0);
var Kh=F();
function Wp(){var a=this;Kh.call(a);a.zm=null;a.A7=0;a.zU=0;a.xU=0;}
function Lh(){C.call(this);this.lQ=null;}
function AJr(a){EM(a.lQ);}
function TO(){C.call(this);this.lz=null;}
function AGg(a){EM(a.lz);}
function B7(){Cd.call(this);this.jS=null;}
var AQl=null;var AQm=null;var AQn=null;var AQo=null;var AQp=null;var AQq=null;var AQr=null;var AQs=null;var AQt=null;var AQu=null;var AQv=null;var AQw=null;var AQx=null;var AQy=null;var AQz=null;var AQj=null;function YX(){YX=Bk(B7);AIb();}
function Dh(a,b,c){var d=new B7();M5(d,a,b,c);return d;}
function AEl(a,b,c,d){var e=new B7();Vu(e,a,b,c,d);return e;}
function M5(a,b,c,d){YX();Dn(a,b,c);a.jS=Qu(d,null);}
function Vu(a,b,c,d,e){YX();Dn(a,b,c);a.jS=Qu(d,e);}
function AIb(){var b;b=new B7;D_();M5(b,B(299),0,APn);AQl=b;AQm=Dh(B(300),1,Cp(0,49,191));AQn=Dh(B(301),2,Bp(B(348)));AQo=Dh(B(303),3,Bp(B(349)));AQp=Dh(B(305),4,APn);AQq=Dh(B(307),5,Bp(B(350)));AQr=Dh(B(308),6,Bp(B(319)));AQs=Dh(B(310),7,Bp(B(351)));AQt=Dh(B(312),8,Bp(B(352)));AQu=AEl(B(314),9,AO8,Cp(237,235,252));AQv=AEl(B(315),10,Bp(B(316)),Bp(B(353)));AQw=Dh(B(318),11,Bp(B(319)));AQx=Dh(B(320),12,Bp(B(321)));AQy=Dh(B(322),13,Bp(B(323)));b=Dh(B(324),14,Bp(B(325)));AQz=b;AQj=H(B7,[AQl,AQm,AQn,AQo,AQp,AQq,
AQr,AQs,AQt,AQu,AQv,AQw,AQx,AQy,b]);}
function RO(){C.call(this);this.oN=null;}
function ACy(a){Di(a.oN);}
function TE(){C.call(this);this.pQ=null;}
function AHr(a,b){var c,d;c=a.pQ;d=0;while(d<b.length){Vm(c,b[d]);d=d+1|0;}}
var XG=F(0);
function Q_(){var a=this;C.call(a);a.mw=null;a.mx=null;a.my=null;}
function AHc(a,b){a.mw.n(ALD(a.mx,b,a.my));}
function OA(){var a=this;C.call(a);a.f=null;a.cO=0;a.im=null;a.lg=0;a.fb=0;a.dJ=0;a.bi=0;a.jh=null;}
function Ip(a){return a.f.br;}
function Uk(a,b,c,d){var e,f,g,h,i,j;e=Cx();f=a.cO;g=0;if(c!=f)a.cO=c;a:{switch(b){case -1073741784:h=new Pa;c=a.bi+1|0;a.bi=c;EQ(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new NC;c=a.bi+1|0;a.bi=c;EQ(h,c);break a;case -33554392:h=new PT;c=a.bi+1|0;a.bi=c;EQ(h,c);break a;default:c=a.fb+1|0;a.fb=c;if(d!==null)h=AM1(c);else{h=new EV;EQ(h,0);g=1;}c=a.fb;if(c<=(-1))break a;if(c>=10)break a;a.im.data[c]=h;break a;}h=new Uh;EQ(h,(-1));}while(true){if(Ey(a.f)&&a.f.i==(-536870788))
{d=AJR(BZ(a,2),BZ(a,64));while(!CU(a.f)&&Ey(a.f)){i=a.f;j=i.i;if(j&&j!=(-536870788)&&j!=(-536870871))break;Ci(d,Y(i));i=a.f;if(i.V!=(-536870788))continue;Y(i);}i=Jc(a,d);i.I(h);}else if(a.f.V==(-536870788)){i=FZ(h);Y(a.f);}else{i=M$(a,h);d=a.f;if(d.V==(-536870788))Y(d);}if(i!==null)Cc(e,i);if(CU(a.f))break;if(a.f.V==(-536870871))break;}if(a.f.iK==(-536870788))Cc(e,FZ(h));if(a.cO!=f&&!g){a.cO=f;d=a.f;d.e0=f;d.i=d.V;d.dD=d.dS;j=d.cz;d.r=j+1|0;d.fT=j;Ez(d);}switch(b){case -1073741784:break;case -536870872:d=new K1;EW(d,
e,h);return d;case -268435416:d=new SI;EW(d,e,h);return d;case -134217688:d=new OD;EW(d,e,h);return d;case -67108824:d=new QA;EW(d,e,h);return d;case -33554392:d=new Dp;EW(d,e,h);return d;default:switch(e.p){case 0:break;case 1:return AMN(BK(e,0),h);default:return AMo(e,h);}return FZ(h);}d=new HD;EW(d,e,h);return d;}
function YG(a){var b,c,d,e,f,g,h;b=BS(4);c=(-1);d=(-1);if(!CU(a.f)&&Ey(a.f)){e=b.data;c=Y(a.f);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BN(3);b=e.data;b[0]=c&65535;f=a.f;g=f.V;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Y(f);f=a.f;g=f.V;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Y(f);return AJD(e,3);}return AJD(e,2);}if(!BZ(a,2))return V2(b[0]);if(BZ(a,64))return AH3(b[0]);return ABQ(b[0]);}e=b.data;c=1;while(c<4&&!CU(a.f)&&Ey(a.f)){h=c+1|0;e[c]=Y(a.f);c=h;}if(c==1){h=e[0];if(!(AQA.ts(h)==AQB?0:1))return Ud(a,e[0]);}if(!BZ(a,
2))return ANB(b,c);if(BZ(a,64)){f=new TR;L5(f,b,c);return f;}f=new QO;L5(f,b,c);return f;}
function M$(a,b){var c,d,e,f,g,h,i;if(Ey(a.f)&&!Ih(a.f)&&IN(a.f.i)){if(BZ(a,128)){c=YG(a);if(!CU(a.f)){d=a.f;e=d.V;if(!(e==(-536870871)&&!(b instanceof EV))&&e!=(-536870788)&&!Ey(d))c=Ku(a,b,c);}}else if(!Mf(a.f)&&!RX(a.f)){f=new Mh;O(f);while(!CU(a.f)&&Ey(a.f)&&!Mf(a.f)&&!RX(a.f)){if(!(!Ih(a.f)&&!a.f.i)&&!(!Ih(a.f)&&IN(a.f.i))){g=a.f.i;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Y(a.f);if(!Ko(e))BB(f,e&65535);else G_(f,FG(e));}if(!BZ(a,2)){c=new O5;C9(c);c.b2
=N(f);e=f.J;c.bp=e;c.iC=AGD(e);c.jl=AGD(c.bp);h=0;while(h<(c.bp-1|0)){OK(c.iC,L(c.b2,h),(c.bp-h|0)-1|0);OK(c.jl,L(c.b2,(c.bp-h|0)-1|0),(c.bp-h|0)-1|0);h=h+1|0;}}else if(BZ(a,64))c=ANy(f);else{c=new Lx;C9(c);c.fU=N(f);c.bp=f.J;}}else c=Ku(a,b,TQ(a,b));}else{d=a.f;if(d.V!=(-536870871))c=Ku(a,b,TQ(a,b));else{if(b instanceof EV)J(BY(B(29),d.br,Md(d)));c=FZ(b);}}a:{if(!CU(a.f)){e=a.f.V;if(!(e==(-536870871)&&!(b instanceof EV))&&e!=(-536870788)){f=M$(a,b);if(c instanceof CJ&&!(c instanceof EA)&&!(c instanceof CB)
&&!(c instanceof D$)){i=c;if(!f.bv(i.D)){c=new SW;Eq(c,i.D,i.d,i.ga);c.D.I(c);}}if((f.gg()&65535)!=43)c.I(f);else c.I(f.D);break a;}}if(c===null)return null;c.I(b);}if((c.gg()&65535)!=43)return c;return c.D;}
function Ku(a,b,c){var d,e,f,g,h;d=a.f;e=d.V;if(c!==null&&!(c instanceof BO)){switch(e){case -2147483606:Y(d);d=new UC;CR(d,c,b,e);Ky();c.I(AQC);return d;case -2147483605:Y(d);d=new Nx;CR(d,c,b,(-2147483606));Ky();c.I(AQC);return d;case -2147483585:Y(d);d=new Ng;CR(d,c,b,(-536870849));Ky();c.I(AQC);return d;case -2147483525:f=new Lp;d=EH(d);g=a.dJ+1|0;a.dJ=g;HS(f,d,c,b,(-536870849),g);Ky();c.I(AQC);return f;case -1073741782:case -1073741781:Y(d);d=new O0;CR(d,c,b,e);c.I(d);return d;case -1073741761:Y(d);d=new Oe;CR(d,
c,b,(-536870849));c.I(b);return d;case -1073741701:h=new RI;d=EH(d);e=a.dJ+1|0;a.dJ=e;HS(h,d,c,b,(-536870849),e);c.I(h);return h;case -536870870:case -536870869:Y(d);if(c.gg()!=(-2147483602)){d=new CB;CR(d,c,b,e);}else if(BZ(a,32)){d=new O1;CR(d,c,b,e);}else{d=new Mn;f=Nk(a.cO);CR(d,c,b,e);d.iI=f;}c.I(d);return d;case -536870849:Y(d);d=new E_;CR(d,c,b,(-536870849));c.I(b);return d;case -536870789:h=new EI;d=EH(d);e=a.dJ+1|0;a.dJ=e;HS(h,d,c,b,(-536870849),e);c.I(h);return h;default:}return c;}f=null;if(c!==null)f
=c;switch(e){case -2147483606:case -2147483605:Y(d);d=new UE;Eq(d,f,b,e);f.d=d;return d;case -2147483585:Y(d);c=new SS;Eq(c,f,b,(-2147483585));return c;case -2147483525:c=new M7;Pp(c,EH(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Y(d);d=new Ob;Eq(d,f,b,e);f.d=d;return d;case -1073741761:Y(d);c=new Q0;Eq(c,f,b,(-1073741761));return c;case -1073741701:c=new OF;Pp(c,EH(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Y(d);d=AMT(f,b,e);f.d=d;return d;case -536870849:Y(d);c=new D$;Eq(c,
f,b,(-536870849));return c;case -536870789:return AL2(EH(d),f,b,(-536870789));default:}return c;}
function TQ(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof EV;while(true){a:{e=a.f;f=e.V;if((f&(-2147418113))==(-2147483608)){Y(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.cO=g;else{if(f!=(-1073741784))g=a.cO;c=Uk(a,f,g,b);e=a.f;if(e.V!=(-536870871))J(BY(B(29),e.br,e.cz));Y(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Y(e);c
=AJs(0);break a;case -2147483577:Y(e);c=new Ml;BG(c);break a;case -2147483558:Y(e);c=new TD;h=a.bi+1|0;a.bi=h;Y3(c,h);break a;case -2147483550:Y(e);c=AJs(1);break a;case -2147483526:Y(e);c=new Tk;BG(c);break a;case -536870876:Y(e);a.bi=a.bi+1|0;if(BZ(a,8)){if(BZ(a,1)){c=AMf(a.bi);break a;}c=ALC(a.bi);break a;}if(BZ(a,1)){c=AMu(a.bi);break a;}c=AM4(a.bi);break a;case -536870866:Y(e);if(BZ(a,32)){c=ANk();break a;}c=AM0(Nk(a.cO));break a;case -536870821:Y(e);i=0;c=a.f;if(c.V==(-536870818)){i=1;Y(c);}c=Jc(a,Fi(a,
i));c.I(b);e=a.f;if(e.V!=(-536870819))J(BY(B(29),e.br,e.cz));MM(e,1);Y(a.f);break a;case -536870818:Y(e);a.bi=a.bi+1|0;if(!BZ(a,8)){c=new IV;BG(c);break a;}c=new LD;e=Nk(a.cO);BG(c);c.nG=e;break a;case 0:j=e.dS;if(j!==null)c=Jc(a,j);else{if(CU(e)){c=FZ(b);break a;}c=V2(f&65535);}Y(a.f);break a;default:break b;}Y(e);c=new IV;BG(c);break a;}h=(f&2147483647)-48|0;if(a.fb<h)J(BY(B(29),EN(e),Md(a.f)));Y(e);a.bi=a.bi+1|0;c=!BZ(a,2)?ALJ(h,a.bi):BZ(a,64)?AMg(h,a.bi):ANv(h,a.bi);a.im.data[h].ik=1;a.lg=1;break a;}if(f
>=0&&!F1(e)){c=Ud(a,f);Y(a.f);}else if(f==(-536870788))c=FZ(b);else{if(f!=(-536870871)){b=new Hr;c=!F1(a.f)?TC(f&65535):a.f.dS.bI();e=a.f;H1(b,c,e.br,e.cz);J(b);}if(d){b=new Hr;e=a.f;H1(b,B(29),e.br,e.cz);J(b);}c=FZ(b);}}}if(f!=(-16777176))break;}return c;}
function Fi(a,b){var c,d,e,f,g,h,i,j,$$je;c=AJR(BZ(a,2),BZ(a,64));D4(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(CU(a.f))break a;h=a.f;b=h.V;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Ci(c,d);d=Y(a.f);h=a.f;if(h.V!=(-536870874)){d=38;break d;}if(h.i==(-536870821)){Y(h);e=1;d=(-1);break d;}Y(h);if(g){c=Fi(a,0);break d;}if(a.f.V==(-536870819))break d;Tq(c,Fi(a,0));break d;case -536870867:if(!g){b=h.i;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Y(h);h=a.f;i=h.V;if(F1(h))break c;if
(i<0){j=a.f.i;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(IN(i))break e;i=i&65535;break e;}catch($$e){$$je=DS($$e);if($$je instanceof DD){break b;}else{throw $$e;}}}try{BL(c,d,i);}catch($$e){$$je=DS($$e);if($$je instanceof DD){break b;}else{throw $$e;}}Y(a.f);d=(-1);break d;}}if(d>=0)Ci(c,d);d=45;Y(a.f);break d;case -536870821:if(d>=0){Ci(c,d);d=(-1);}Y(a.f);j=0;h=a.f;if(h.V==(-536870818)){Y(h);j=1;}if(!e)UO(c,Fi(a,j));else Tq(c,Fi(a,j));e=0;Y(a.f);break d;case -536870819:if(d>=0)Ci(c,d);d=
93;Y(a.f);break d;case -536870818:if(d>=0)Ci(c,d);d=94;Y(a.f);break d;case 0:if(d>=0)Ci(c,d);h=a.f.dS;if(h===null)d=0;else{ZW(c,h);d=(-1);}Y(a.f);break d;default:}if(d>=0)Ci(c,d);d=Y(a.f);}g=0;}J(BY(B(29),Ip(a),a.f.cz));}J(BY(B(29),Ip(a),a.f.cz));}if(!f){if(d>=0)Ci(c,d);return c;}J(BY(B(29),Ip(a),a.f.cz-1|0));}
function Ud(a,b){var c,d,e;c=Ko(b);if(BZ(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return ABQ(b&65535);}if(BZ(a,64)&&b>128){if(c){d=new KQ;C9(d);d.bp=2;d.nf=FQ(FP(b));return d;}if(MV(b))return AGJ(b&65535);if(!Pz(b))return AH3(b&65535);return AEz(b&65535);}}if(!c){if(MV(b))return AGJ(b&65535);if(!Pz(b))return V2(b&65535);return AEz(b&65535);}d=new Du;C9(d);d.bp=2;d.eK=b;e=(FG(b)).data;d.hQ=e[0];d.gO=e[1];return d;}
function Jc(a,b){var c,d,e;if(!XA(b)){if(!b.F){if(b.fJ())return AD$(b);return AJt(b);}if(!b.fJ())return AFa(b);c=new HU;Rg(c,b);return c;}c=Ve(b);d=new K9;BG(d);d.mo=c;d.rs=c.U;if(!b.F){if(b.fJ())return X_(AD$(Gx(b)),d);return X_(AJt(Gx(b)),d);}if(!b.fJ())return X_(AFa(Gx(b)),d);c=new N8;e=new HU;Rg(e,Gx(b));ZD(c,e,d);return c;}
function Gy(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function BZ(a,b){return (a.cO&b)!=b?0:1;}
function Wk(){var a=this;C.call(a);a.gM=null;a.ip=null;}
function Zo(){var a=this;C.call(a);a.t5=0;a.tP=0;a.o0=0;a.i3=0;}
var Oh=F();
function AHv(a){}
function Og(){var a=this;C.call(a);a.kZ=null;a.kY=null;}
function AGi(a){var b,c,d,e,f,g;b=a.kZ;c=a.kY;if(Ex(b.bZ))Ej(b.bZ);if(FX(c.gM,b.e.e4)){c=c.ip;CQ(b,c.i3,c.o0,0);B$(b.y.b8,c.i3,c.o0);B$(b.y.bX,c.tP,c.t5);}else{d=b.ea.oe.e6.data;e=d.length;f=0;a:{while(true){if(f>=e){b=null;break a;}b=d[f];if(b!==null)break;f=f+1|0;}}if(b!==null){g=new Lr;g.od=b;g.oc=c;Cf(g);b=new NO;b.rf=g;$rt_globals.setTimeout(Be(b,"onTimer"),0);}}}
function Oi(){var a=this;C.call(a);a.nh=null;a.ng=null;}
function AJC(a){Hu(a.nh,a.ng);}
function SF(){var a=this;C.call(a);a.o8=null;a.o7=null;}
function AFL(a){var b,c;b=a.o8;c=a.o7;b=b.k;Jy(b,c,b.e7);}
function By(){var a=this;C.call(a);a.d=null;a.bO=0;a.lT=null;a.ga=0;}
var AN8=0;function BG(a){var b,c;b=new Eh;c=AN8;AN8=c+1|0;Is(b,c);a.lT=Kq(b);}
function Jb(a,b){var c,d;c=new Eh;d=AN8;AN8=d+1|0;Is(c,d);a.lT=Kq(c);a.d=b;}
function GB(a,b,c,d){var e;e=d.t;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function GK(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AB_(a,b){a.ga=b;}
function ABx(a){return a.ga;}
function AIZ(a){return a.d;}
function AJI(a,b){a.d=b;}
function AJH(a,b){return 1;}
function AKx(a){return null;}
function HO(a){var b;a.bO=1;b=a.d;if(b!==null){if(!b.bO){b=b.eo();if(b!==null){a.d.bO=1;a.d=b;}a.d.dp();}else if(b instanceof FM&&b.du.ik)a.d=b.d;}}
function ZL(){AN8=1;}
function Mj(){C.call(this);this.n3=null;}
function AIp(a,b){Rm(a.n3,b);}
function Cz(){var a=this;By.call(a);a.ik=0;a.cS=0;}
var AQC=null;function Ky(){Ky=Bk(Cz);ADe();}
function AM1(a){var b=new Cz();EQ(b,a);return b;}
function EQ(a,b){Ky();BG(a);a.cS=b;}
function AAZ(a,b,c,d){var e,f;e=Hf(d,a.cS);Id(d,a.cS,b);f=a.d.c(b,c,d);if(f<0)Id(d,a.cS,e);return f;}
function AF1(a){return a.cS;}
function ABm(a,b){return 0;}
function ADe(){var b;b=new Mi;BG(b);AQC=b;}
function FW(){var a=this;C.call(a);a.T=null;a.e0=0;a.dG=0;a.pZ=0;a.iK=0;a.V=0;a.i=0;a.n7=0;a.dS=null;a.dD=null;a.r=0;a.gm=0;a.cz=0;a.fT=0;a.br=null;}
var AQD=null;var AQA=null;var AQB=0;function MM(a,b){if(b>0&&b<3)a.dG=b;if(b==1){a.i=a.V;a.dD=a.dS;a.r=a.fT;a.fT=a.cz;Ez(a);}}
function F1(a){return a.dS===null?0:1;}
function Ih(a){return a.dD===null?0:1;}
function Y(a){Ez(a);return a.iK;}
function EH(a){var b;b=a.dS;Ez(a);return b;}
function Ez(a){var b,c,d,e,f,g,h,$$je;a.iK=a.V;a.V=a.i;a.dS=a.dD;a.cz=a.fT;a.fT=a.r;while(true){b=0;c=a.r>=a.T.data.length?0:JZ(a);a.i=c;a.dD=null;if(a.dG==4){if(c!=92)return;c=a.r;d=a.T.data;c=c>=d.length?0:d[BM(a)];a.i=c;switch(c){case 69:break;default:a.i=92;a.r=a.gm;return;}a.dG=a.pZ;a.i=a.r>(a.T.data.length-2|0)?0:JZ(a);}a:{c=a.i;if(c!=92){e=a.dG;if(e==1)switch(c){case 36:a.i=(-536870876);break a;case 40:if(a.T.data[a.r]!=63){a.i=(-2147483608);break a;}BM(a);c=a.T.data[a.r];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.i=(-134217688);BM(a);break b;default:J(BY(B(29),EN(a),a.r));}a.i=(-67108824);BM(a);}else{switch(c){case 33:break;case 60:BM(a);c=a.T.data[a.r];e=1;break b;case 61:a.i=(-536870872);BM(a);break b;case 62:a.i=(-33554392);BM(a);break b;default:f=ZM(a);a.i=f;if(f<256){a.e0=f;f=f<<16;a.i=f;a.i=(-1073741784)|f;break b;}f=f&255;a.i=f;a.e0=f;f=f<<16;a.i=f;a.i=(-16777176)|f;break b;}a.i=(-268435416);BM(a);}}if(!e)break;}break a;case 41:a.i=(-536870871);break a;case 42:case 43:case 63:e=a.r;d
=a.T.data;switch(e>=d.length?42:d[e]){case 43:a.i=c|(-2147483648);BM(a);break a;case 63:a.i=c|(-1073741824);BM(a);break a;default:}a.i=c|(-536870912);break a;case 46:a.i=(-536870866);break a;case 91:a.i=(-536870821);MM(a,2);break a;case 93:if(e!=2)break a;a.i=(-536870819);break a;case 94:a.i=(-536870818);break a;case 123:a.dD=Zj(a,c);break a;case 124:a.i=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.i=(-536870874);break a;case 45:a.i=(-536870867);break a;case 91:a.i=(-536870821);break a;case 93:a.i
=(-536870819);break a;case 94:a.i=(-536870818);break a;default:}}else{c=a.r>=(a.T.data.length-2|0)?(-1):JZ(a);c:{a.i=c;switch(c){case -1:J(BY(B(29),EN(a),a.r));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.i
=XZ(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.dG!=1)break a;a.i=(-2147483648)|c;break a;case 65:a.i=(-2147483583);break a;case 66:a.i=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(BY(B(29),EN(a),a.r));case 68:case 83:case 87:case 100:case 115:case 119:a.dD=Pm(Ik(a.T,
a.gm,1),0);a.i=0;break a;case 71:a.i=(-2147483577);break a;case 80:case 112:break c;case 81:a.pZ=a.dG;a.dG=4;b=1;break a;case 90:a.i=(-2147483558);break a;case 97:a.i=7;break a;case 98:a.i=(-2147483550);break a;case 99:c=a.r;d=a.T.data;if(c>=(d.length-2|0))J(BY(B(29),EN(a),a.r));a.i=d[BM(a)]&31;break a;case 101:a.i=27;break a;case 102:a.i=12;break a;case 110:a.i=10;break a;case 114:a.i=13;break a;case 116:a.i=9;break a;case 117:a.i=NA(a,4);break a;case 120:a.i=NA(a,2);break a;case 122:a.i=(-2147483526);break a;default:}break a;}g
=XL(a);h=0;if(a.i==80)h=1;try{a.dD=Pm(g,h);}catch($$e){$$je=DS($$e);if($$je instanceof HW){J(BY(B(29),EN(a),a.r));}else{throw $$e;}}a.i=0;}}if(b)continue;else break;}}
function XL(a){var b,c,d,e,f,g;b=new M;Fc(b,10);c=a.r;d=a.T;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Ik(d,BM(a),1);f=new M;O(f);G(G(f,B(354)),b);return N(f);}BM(a);c=0;a:{while(true){g=a.r;d=a.T.data;if(g>=(d.length-2|0))break;c=d[BM(a)];if(c==125)break a;BB(b,c);}}if(c!=125)J(BY(B(29),a.br,a.r));}if(!b.J)J(BY(B(29),a.br,a.r));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(354)),f);return N(b);}b:{c:{if(I(f)>3){if(FL(f,B(354)))break c;if(FL(f,B(355)))break c;}break b;}f=Dc(f,2);}return f;}
function Zj(a,b){var c,d,e,f,g,$$je;c=new M;Fc(c,4);d=(-1);e=2147483647;a:{while(true){f=a.r;g=a.T.data;if(f>=g.length)break a;b=g[BM(a)];if(b==125)break a;if(b==44&&d<0)try{d=H_(Dt(c),10);Zq(c,0,Vo(c));continue;}catch($$e){$$je=DS($$e);if($$je instanceof CS){break;}else{throw $$e;}}BB(c,b&65535);}J(BY(B(29),a.br,a.r));}if(b!=125)J(BY(B(29),a.br,a.r));if(c.J>0)b:{try{e=H_(Dt(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=DS($$e);if($$je instanceof CS){}else{throw $$e;}}J(BY(B(29),a.br,a.r));}else if(d<
0)J(BY(B(29),a.br,a.r));if((d|e|(e-d|0))<0)J(BY(B(29),a.br,a.r));b=a.r;g=a.T.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.i=(-2147483525);BM(a);break c;case 63:a.i=(-1073741701);BM(a);break c;default:}a.i=(-536870789);}c=new Lf;c.dE=d;c.dA=e;return c;}
function EN(a){return a.br;}
function CU(a){return !a.V&&!a.i&&a.r==a.n7&&!F1(a)?1:0;}
function IN(b){return b<0?0:1;}
function Ey(a){return !CU(a)&&!F1(a)&&IN(a.V)?1:0;}
function Mf(a){var b;b=a.V;return b<=56319&&b>=55296?1:0;}
function RX(a){var b;b=a.V;return b<=57343&&b>=56320?1:0;}
function Pz(b){return b<=56319&&b>=55296?1:0;}
function MV(b){return b<=57343&&b>=56320?1:0;}
function NA(a,b){var c,d,e,f,$$je;c=new M;Fc(c,b);d=a.T.data.length-2|0;e=0;while(true){f=BD(e,b);if(f>=0)break;if(a.r>=d)break;BB(c,a.T.data[BM(a)]);e=e+1|0;}if(!f)a:{try{b=H_(Dt(c),16);}catch($$e){$$je=DS($$e);if($$je instanceof CS){break a;}else{throw $$e;}}return b;}J(BY(B(29),a.br,a.r));}
function XZ(a){var b,c,d,e,f,g;b=3;c=1;d=a.T.data;e=d.length-2|0;f=RD(d[a.r],8);switch(f){case -1:break;default:if(f>3)b=2;BM(a);a:{while(true){if(c>=b)break a;g=a.r;if(g>=e)break a;g=RD(a.T.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BM(a);c=c+1|0;}}return f;}J(BY(B(29),a.br,a.r));}
function ZM(a){var b,c,d,e;b=1;c=a.e0;a:while(true){d=a.r;e=a.T.data;if(d>=e.length)J(BY(B(29),a.br,d));b:{c:{switch(e[d]){case 41:BM(a);return c|256;case 45:if(!b)J(BY(B(29),a.br,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BM(a);}BM(a);return c;}
function BM(a){var b,c,d,e,f;b=a.r;a.gm=b;if(!(a.e0&4))a.r=b+1|0;else{c=a.T.data.length-2|0;a.r=b+1|0;a:while(true){d=a.r;if(d<c&&OB(a.T.data[d])){a.r=a.r+1|0;continue;}d=a.r;if(d>=c)break;e=a.T.data;if(e[d]!=35)break;a.r=d+1|0;while(true){f=a.r;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.r=f+1|0;}}}return a.gm;}
function Zc(b){return AQD.xx(b);}
function JZ(a){var b,c,d,e;b=a.T.data[BM(a)];if(Cr(b)){c=a.gm+1|0;d=a.T.data;if(c<d.length){e=d[c];if(CK(e)){BM(a);return D5(b,e);}}}return b;}
function Md(a){return a.cz;}
function Hr(){var a=this;BC.call(a);a.td=null;a.sQ=null;a.m_=0;}
function BY(a,b,c){var d=new Hr();H1(d,a,b,c);return d;}
function H1(a,b,c,d){U(a);a.m_=(-1);a.td=b;a.sQ=c;a.m_=d;}
var Pa=F(Cz);
function AAC(a,b,c,d){var e;e=a.cS;BE(d,e,b-CX(d,e)|0);return a.d.c(b,c,d);}
function AIw(a,b){return 0;}
var Uh=F(Cz);
function AB9(a,b,c,d){return b;}
var NC=F(Cz);
function ABv(a,b,c,d){if(CX(d,a.cS)!=b)b=(-1);return b;}
function PT(){Cz.call(this);this.k6=0;}
function AAL(a,b,c,d){var e;e=a.cS;BE(d,e,b-CX(d,e)|0);a.k6=b;return b;}
function AHk(a,b){return 0;}
var EV=F(Cz);
function AJV(a,b,c,d){if(d.hF!=1&&b!=d.t)return (-1);d.g$=1;Id(d,0,b);return b;}
function BO(){By.call(this);this.bp=0;}
function C9(a){BG(a);a.bp=1;}
function AKX(a,b,c,d){var e;if((b+a.bB()|0)>d.t){d.cK=1;return (-1);}e=a.bg(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function AJg(a){return a.bp;}
function AET(a,b){return 1;}
var Y1=F(BO);
function FZ(a){var b=new Y1();AF_(b,a);return b;}
function AF_(a,b){Jb(a,b);a.bp=1;a.ga=1;a.bp=0;}
function AIU(a,b,c){return 0;}
function ADl(a,b,c,d){var e,f,g;e=d.t;f=d.ci;while(true){g=BD(b,e);if(g>0)return (-1);if(g<0&&CK(L(c,b))&&b>f&&Cr(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AB1(a,b,c,d,e){var f,g;f=e.t;g=e.ci;while(true){if(c<b)return (-1);if(c<f&&CK(L(d,c))&&c>g&&Cr(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AAH(a,b){return 0;}
function BJ(){var a=this;By.call(a);a.bo=null;a.du=null;a.N=0;}
function AMo(a,b){var c=new BJ();EW(c,a,b);return c;}
function EW(a,b,c){BG(a);a.bo=b;a.du=c;a.N=c.cS;}
function ADU(a,b,c,d){var e,f,g,h;if(a.bo===null)return (-1);e=EY(d,a.N);C8(d,a.N,b);f=a.bo.p;g=0;while(true){if(g>=f){C8(d,a.N,e);return (-1);}h=(BK(a.bo,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AHe(a,b){a.du.d=b;}
function AFy(a,b){var c;a:{c=a.bo;if(c!==null){c=BV(c);while(true){if(!B2(c))break a;if(!(BX(c)).bv(b))continue;else return 1;}}}return 0;}
function AHS(a,b){return Hf(b,a.N)>=0&&EY(b,a.N)==Hf(b,a.N)?0:1;}
function ABY(a){var b,c,d,e,f,g,h,i;a.bO=1;b=a.du;if(b!==null&&!b.bO)HO(b);a:{b=a.bo;if(b!==null){c=b.p;d=0;while(true){if(d>=c)break a;b=BK(a.bo,d);e=b.eo();if(e===null)e=b;else{b.bO=1;F7(a.bo,d);f=a.bo;Np(f,d);H2(f,f.p+1|0);g=f.p;h=g;while(h>d){i=f.bT.data;i[h]=i[h-1|0];h=h+(-1)|0;}f.bT.data[d]=e;f.p=g+1|0;f.cf=f.cf+1|0;}if(!e.bO)e.dp();d=d+1|0;}}}if(a.d!==null)HO(a);}
var HD=F(BJ);
function AG2(a,b,c,d){var e,f,g,h;e=CX(d,a.N);BE(d,a.N,b);f=a.bo.p;g=0;while(true){if(g>=f){BE(d,a.N,e);return (-1);}h=(BK(a.bo,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AIa(a,b){return !CX(b,a.N)?0:1;}
var Dp=F(HD);
function ACu(a,b,c,d){var e,f,g;e=CX(d,a.N);BE(d,a.N,b);f=a.bo.p;g=0;while(g<f){if((BK(a.bo,g)).c(b,c,d)>=0)return a.d.c(a.du.k6,c,d);g=g+1|0;}BE(d,a.N,e);return (-1);}
function AHY(a,b){a.d=b;}
var K1=F(Dp);
function AG9(a,b,c,d){var e,f;e=a.bo.p;f=0;while(f<e){if((BK(a.bo,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AJM(a,b){return 0;}
var SI=F(Dp);
function ABh(a,b,c,d){var e,f;e=a.bo.p;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((BK(a.bo,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AJj(a,b){return 0;}
var OD=F(Dp);
function ABW(a,b,c,d){var e,f,g,h;e=a.bo.p;f=d.ha?0:d.ci;a:{g=a.d.c(b,c,d);if(g>=0){BE(d,a.N,b);h=0;while(true){if(h>=e)break a;if((BK(a.bo,h)).bY(f,b,c,d)>=0){BE(d,a.N,(-1));return g;}h=h+1|0;}}}return (-1);}
function ALh(a,b){return 0;}
var QA=F(Dp);
function AAk(a,b,c,d){var e,f;e=a.bo.p;BE(d,a.N,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((BK(a.bo,f)).bY(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AIn(a,b){return 0;}
function FM(){BJ.call(this);this.cp=null;}
function AMN(a,b){var c=new FM();VQ(c,a,b);return c;}
function VQ(a,b,c){BG(a);a.cp=b;a.du=c;a.N=c.cS;}
function AAy(a,b,c,d){var e,f;e=EY(d,a.N);C8(d,a.N,b);f=a.cp.c(b,c,d);if(f>=0)return f;C8(d,a.N,e);return (-1);}
function AFN(a,b,c,d){var e;e=a.cp.bS(b,c,d);if(e>=0)C8(d,a.N,e);return e;}
function AIB(a,b,c,d,e){var f;f=a.cp.bY(b,c,d,e);if(f>=0)C8(e,a.N,f);return f;}
function AFt(a,b){return a.cp.bv(b);}
function AHi(a){var b;b=new Lk;VQ(b,a.cp,a.du);a.d=b;return b;}
function AKA(a){var b;a.bO=1;b=a.du;if(b!==null&&!b.bO)HO(b);b=a.cp;if(b!==null&&!b.bO){b=b.eo();if(b!==null){a.cp.bO=1;a.cp=b;}a.cp.dp();}}
var FY=F();
function S(){var a=this;FY.call(a);a.U=0;a.bN=0;a.E=null;a.hK=null;a.ic=null;a.F=0;}
var AQE=null;function MK(){MK=Bk(S);ACh();}
function Bj(a){var b;MK();b=new TA;b.v=BS(64);a.E=b;}
function ABj(a){return null;}
function AAT(a){return a.E;}
function XA(a){var b,c,d,e,f;if(!a.bN)b=Gh(a.E,0)>=2048?0:1;else{a:{c=a.E;b=0;d=c.bd;if(b<d){e=c.v.data;f=(e[0]^(-1))>>>0|0;if(f)b=G8(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+G8(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AD9(a){return a.F;}
function AJb(a){return a;}
function Ve(a){var b,c;if(a.ic===null){b=a.dR();c=new SV;c.ty=a;c.lo=b;Bj(c);a.ic=c;D4(c,a.bN);}return a.ic;}
function Gx(a){var b,c;if(a.hK===null){b=a.dR();c=new ST;c.tg=a;c.pC=b;c.qa=a;Bj(c);a.hK=c;D4(c,a.U);a.hK.F=a.F;}return a.hK;}
function AKw(a){return 0;}
function D4(a,b){var c;c=a.U;if(c^b){a.U=c?0:1;a.bN=a.bN?0:1;}if(!a.F)a.F=1;return a;}
function ADn(a){return a.U;}
function IK(b,c){MK();return b.j(c);}
function G6(b,c){var d,e;MK();if(b.cG()!==null&&c.cG()!==null){b=b.cG();c=c.cG();d=Z(b.v.data.length,c.v.data.length);e=0;a:{while(e<d){if(b.v.data[e]&c.v.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Pm(b,c){var d,e,f;MK();d=0;while(true){AIl();e=AQF.data;if(d>=e.length){f=new HW;Ba(f,B(29));f.tY=B(29);f.tC=b;J(f);}e=e[d].data;if(Br(b,e[0]))break;d=d+1|0;}return Yz(e[1],c);}
function ACh(){var b;b=new F$;AIl();AQE=b;}
function VF(){var a=this;S.call(a);a.jn=0;a.k5=0;a.fc=0;a.i2=0;a.c4=0;a.eh=0;a.B=null;a.bk=null;}
function CY(){var a=new VF();AK7(a);return a;}
function AJR(a,b){var c=new VF();AB$(c,a,b);return c;}
function AK7(a){Bj(a);a.B=ALi();}
function AB$(a,b,c){Bj(a);a.B=ALi();a.jn=b;a.k5=c;}
function Ci(a,b){a:{if(a.jn){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.c4){KG(a.B,Gy(b&65535));break a;}JV(a.B,Gy(b&65535));break a;}if(a.k5&&b>128){a.fc=1;b=FQ(FP(b));}}}if(!(!Pz(b)&&!MV(b))){if(a.i2)KG(a.E,b-55296|0);else JV(a.E,b-55296|0);}if(a.c4)KG(a.B,b);else JV(a.B,b);if(!a.F&&Ko(b))a.F=1;return a;}
function ZW(a,b){var c,d,e;if(!a.F&&b.F)a.F=1;if(a.i2){if(!b.bN)Fa(a.E,b.dR());else CP(a.E,b.dR());}else if(!b.bN)E8(a.E,b.dR());else{ET(a.E,b.dR());CP(a.E,b.dR());a.bN=a.bN?0:1;a.i2=1;}if(!a.eh&&b.cG()!==null){if(a.c4){if(!b.U)Fa(a.B,b.cG());else CP(a.B,b.cG());}else if(!b.U)E8(a.B,b.cG());else{ET(a.B,b.cG());CP(a.B,b.cG());a.U=a.U?0:1;a.c4=1;}}else{c=a.U;d=a.bk;if(d!==null){if(!c){e=new MB;e.rN=a;e.qz=c;e.pW=d;e.pN=b;Bj(e);a.bk=e;}else{e=new MC;e.t6=a;e.nz=c;e.nm=d;e.mT=b;Bj(e);a.bk=e;}}else{if(c&&!a.c4&&
Kr(a.B)){d=new My;d.sP=a;d.nu=b;Bj(d);a.bk=d;}else if(!c){d=new Mw;d.iN=a;d.h0=c;d.lO=b;Bj(d);a.bk=d;}else{d=new Mx;d.jA=a;d.h7=c;d.pS=b;Bj(d);a.bk=d;}a.eh=1;}}return a;}
function BL(a,b,c){var d,e,f,g,h;if(b>c){d=new BC;U(d);J(d);}a:{b:{if(!a.jn){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Ci(a,b);b=b+1|0;}}if(!a.c4)GP(a.B,b,c+1|0);else{d=a.B;c=c+1|0;if(b>c){d=new Bv;U(d);J(d);}e=d.bd;if(b<e){f=Z(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.v.data;h[g]=h[g]&(G2(d,b)|GH(d,f));}else{h=d.v.data;h[g]=h[g]&G2(d,b);e=g+1|0;while(e<c){d.v.data[e]=0;e=e+1|0;}if(f&31){h=d.v.data;h[c]=h[c]&GH(d,f);}}Gd(d);}}}}return a;}
function UO(a,b){var c,d,e;if(!a.F&&b.F)a.F=1;if(b.fc)a.fc=1;c=a.bN;if(!(c^b.bN)){if(!c)E8(a.E,b.E);else CP(a.E,b.E);}else if(c)Fa(a.E,b.E);else{ET(a.E,b.E);CP(a.E,b.E);a.bN=1;}if(!a.eh&&CE(b)!==null){c=a.U;if(!(c^b.U)){if(!c)E8(a.B,CE(b));else CP(a.B,CE(b));}else if(c)Fa(a.B,CE(b));else{ET(a.B,CE(b));CP(a.B,CE(b));a.U=1;}}else{c=a.U;d=a.bk;if(d!==null){if(!c){e=new Mr;e.ru=a;e.pa=c;e.pR=d;e.qn=b;Bj(e);a.bk=e;}else{e=new Nc;e.rY=a;e.qk=c;e.kO=d;e.k8=b;Bj(e);a.bk=e;}}else{if(!a.c4&&Kr(a.B)){if(!c){d=new Mz;d.t8
=a;d.mI=b;Bj(d);a.bk=d;}else{d=new MA;d.r3=a;d.p8=b;Bj(d);a.bk=d;}}else if(!c){d=new ME;d.pg=a;d.nO=b;d.nq=c;Bj(d);a.bk=d;}else{d=new MG;d.oa=a;d.oq=b;d.oC=c;Bj(d);a.bk=d;}a.eh=1;}}}
function Tq(a,b){var c,d,e;if(!a.F&&b.F)a.F=1;if(b.fc)a.fc=1;c=a.bN;if(!(c^b.bN)){if(!c)CP(a.E,b.E);else E8(a.E,b.E);}else if(!c)Fa(a.E,b.E);else{ET(a.E,b.E);CP(a.E,b.E);a.bN=0;}if(!a.eh&&CE(b)!==null){c=a.U;if(!(c^b.U)){if(!c)CP(a.B,CE(b));else E8(a.B,CE(b));}else if(!c)Fa(a.B,CE(b));else{ET(a.B,CE(b));CP(a.B,CE(b));a.U=0;}}else{c=a.U;d=a.bk;if(d!==null){if(!c){e=new Mt;e.rM=a;e.pk=c;e.lm=d;e.nw=b;Bj(e);a.bk=e;}else{e=new Mu;e.r7=a;e.oM=c;e.kE=d;e.o_=b;Bj(e);a.bk=e;}}else{if(!a.c4&&Kr(a.B)){if(!c){d=new Mp;d.r4
=a;d.mh=b;Bj(d);a.bk=d;}else{d=new Mq;d.t4=a;d.mm=b;Bj(d);a.bk=d;}}else if(!c){d=new Mv;d.rc=a;d.qv=b;d.om=c;Bj(d);a.bk=d;}else{d=new Mo;d.ok=a;d.oU=b;d.nA=c;Bj(d);a.bk=d;}a.eh=1;}}}
function CI(a,b){var c;c=a.bk;if(c!==null)return a.U^c.j(b);return a.U^C7(a.B,b);}
function CE(a){if(!a.eh)return a.B;return null;}
function ADd(a){return a.E;}
function AJz(a){var b,c;if(a.bk!==null)return a;b=CE(a);c=new Ms;c.rt=a;c.gS=b;Bj(c);return D4(c,a.U);}
function AGt(a){var b,c,d;b=new M;O(b);c=Gh(a.B,0);while(c>=0){G_(b,FG(c));BB(b,124);c=Gh(a.B,c+1|0);}d=b.J;if(d>0)SK(b,d-1|0);return N(b);}
function ADq(a){return a.fc;}
function HW(){var a=this;Bh.call(a);a.tY=null;a.tC=null;}
function DC(){By.call(this);this.D=null;}
function CR(a,b,c,d){Jb(a,c);a.D=b;a.ga=d;}
function AK6(a){return a.D;}
function AIE(a,b){return !a.D.bv(b)&&!a.d.bv(b)?0:1;}
function AJS(a,b){return 1;}
function AF8(a){var b;a.bO=1;b=a.d;if(b!==null&&!b.bO){b=b.eo();if(b!==null){a.d.bO=1;a.d=b;}a.d.dp();}b=a.D;if(b!==null){if(!b.bO){b=b.eo();if(b!==null){a.D.bO=1;a.D=b;}a.D.dp();}else if(b instanceof FM&&b.du.ik)a.D=b.d;}}
function CJ(){DC.call(this);this.P=null;}
function AMT(a,b,c){var d=new CJ();Eq(d,a,b,c);return d;}
function Eq(a,b,c,d){CR(a,b,c,d);a.P=b;}
function AAm(a,b,c,d){var e,f;e=0;a:{while((b+a.P.bB()|0)<=d.t){f=a.P.bg(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.P.bB()|0;e=e+(-1)|0;}return f;}
function EA(){CJ.call(this);this.hE=null;}
function AL2(a,b,c,d){var e=new EA();Pp(e,a,b,c,d);return e;}
function Pp(a,b,c,d,e){Eq(a,c,d,e);a.hE=b;}
function AA2(a,b,c,d){var e,f,g,h,i;e=a.hE;f=e.dE;g=e.dA;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.P.bB()|0)>d.t)break a;i=a.P.bg(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.P.bB()|0;h=h+(-1)|0;}return i;}if((b+a.P.bB()|0)>d.t){d.cK=1;return (-1);}i=a.P.bg(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CB=F(DC);
function AAx(a,b,c,d){var e;if(!a.D.C(d))return a.d.c(b,c,d);e=a.D.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var D$=F(CJ);
function AFT(a,b,c,d){var e;e=a.D.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function ALj(a,b){a.d=b;a.D.I(b);}
var SW=F(CJ);
function AKP(a,b,c,d){while((b+a.P.bB()|0)<=d.t&&a.P.bg(b,c)>0){b=b+a.P.bB()|0;}return a.d.c(b,c,d);}
function AGr(a,b,c,d){var e,f,g;e=a.d.bS(b,c,d);if(e<0)return (-1);f=e-a.P.bB()|0;while(f>=b&&a.P.bg(f,c)>0){g=f-a.P.bB()|0;e=f;f=g;}return e;}
function V(){var a=this;C.call(a);a.jG=null;a.iL=null;}
function Yz(a,b){if(!b&&a.jG===null)a.jG=a.x();else if(b&&a.iL===null)a.iL=D4(a.x(),1);if(b)return a.iL;return a.jG;}
var CS=F(BC);
function Lf(){var a=this;FY.call(a);a.dE=0;a.dA=0;}
function AGy(a){var b,c,d,e,f;b=a.dE;c=a.dA;d=c==2147483647?B(29):Kq(Zb(c));e=new M;O(e);BB(e,123);f=T(e,b);BB(f,44);BB(G(f,d),125);return N(e);}
var Mi=F(By);
function AFc(a,b,c,d){return b;}
function AHd(a,b){return 0;}
function TA(){var a=this;C.call(a);a.v=null;a.bd=0;}
function ALi(){var a=new TA();ABH(a);return a;}
function ABH(a){a.v=BS(0);}
function JV(a,b){var c,d;c=b/32|0;if(b>=a.bd){Hb(a,c+1|0);a.bd=b+1|0;}d=a.v.data;d[c]=d[c]|1<<(b%32|0);}
function GP(a,b,c){var d,e,f,g,h;d=BD(b,c);if(d>0){e=new Bv;U(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bd){Hb(a,f+1|0);a.bd=c;}if(d==f){g=a.v.data;g[d]=g[d]|GH(a,b)&G2(a,c);}else{g=a.v.data;g[d]=g[d]|GH(a,b);h=d+1|0;while(h<f){a.v.data[h]=(-1);h=h+1|0;}if(c&31){g=a.v.data;g[f]=g[f]|G2(a,c);}}}
function GH(a,b){return (-1)<<(b%32|0);}
function G2(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function KG(a,b){var c,d;c=b/32|0;d=a.v.data;if(c<d.length){d[c]=d[c]&IH((-2),b%32|0);if(b==(a.bd-1|0))Gd(a);}}
function C7(a,b){var c,d;c=b/32|0;d=a.v.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Gh(a,b){var c,d,e,f;c=a.bd;if(b>=c)return (-1);d=b/32|0;e=a.v.data;f=e[d]>>>(b%32|0)|0;if(f)return G8(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+G8(e[f])|0;f=f+1|0;}return (-1);}
function Hb(a,b){var c,d,e,f;c=a.v.data.length;if(c>=b)return;c=Bf((b*3|0)/2|0,(c*2|0)+1|0);d=a.v.data;e=BS(c);f=e.data;b=Z(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.v=e;}
function Gd(a){var b,c,d;b=(a.bd+31|0)/32|0;a.bd=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=LT(a.v.data[c]);if(d<32)break;c=c+(-1)|0;a.bd=a.bd-32|0;}a.bd=a.bd-d|0;}}
function CP(a,b){var c,d,e,f;c=Z(a.v.data.length,b.v.data.length);d=0;while(d<c){e=a.v.data;e[d]=e[d]&b.v.data[d];d=d+1|0;}while(true){f=a.v.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bd=Z(a.bd,b.bd);Gd(a);}
function Fa(a,b){var c,d,e;c=Z(a.v.data.length,b.v.data.length);d=0;while(d<c){e=a.v.data;e[d]=e[d]&(b.v.data[d]^(-1));d=d+1|0;}Gd(a);}
function E8(a,b){var c,d,e;c=Bf(a.bd,b.bd);a.bd=c;Hb(a,(c+31|0)/32|0);c=Z(a.v.data.length,b.v.data.length);d=0;while(d<c){e=a.v.data;e[d]=e[d]|b.v.data[d];d=d+1|0;}}
function ET(a,b){var c,d,e;c=Bf(a.bd,b.bd);a.bd=c;Hb(a,(c+31|0)/32|0);c=Z(a.v.data.length,b.v.data.length);d=0;while(d<c){e=a.v.data;e[d]=e[d]^b.v.data[d];d=d+1|0;}Gd(a);}
function Kr(a){return a.bd?0:1;}
function K9(){var a=this;BJ.call(a);a.mo=null;a.rs=0;}
function N8(){var a=this;BJ.call(a);a.j5=null;a.jB=null;}
function X_(a,b){var c=new N8();ZD(c,a,b);return c;}
function ZD(a,b,c){BG(a);a.j5=b;a.jB=c;}
function AAY(a,b,c,d){var e,f,g,h,i;e=a.j5.c(b,c,d);if(e<0)a:{f=a.jB;g=d.ci;e=d.t;h=b+1|0;e=BD(h,e);if(e>0){d.cK=1;e=(-1);}else{i=L(c,b);if(!f.mo.j(i))e=(-1);else{if(Cr(i)){if(e<0&&CK(L(c,h))){e=(-1);break a;}}else if(CK(i)&&b>g&&Cr(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AGZ(a,b){a.d=b;a.jB.d=b;a.j5.I(b);}
function ABz(a,b){return 1;}
function ABi(a,b){return 1;}
function Da(){var a=this;BJ.call(a);a.cW=null;a.sH=0;}
function AFa(a){var b=new Da();Rg(b,a);return b;}
function Rg(a,b){BG(a);a.cW=b.hj();a.sH=b.U;}
function AC6(a,b,c,d){var e,f,g,h;e=d.t;if(b<e){f=b+1|0;g=L(c,b);if(a.j(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(Gr(g,f)&&a.j(D5(g,f)))return a.d.c(b,c,d);}}return (-1);}
function ADB(a,b){return a.cW.j(b);}
function AAW(a,b){if(b instanceof Du)return IK(a.cW,b.eK);if(b instanceof DZ)return IK(a.cW,b.cD);if(b instanceof Da)return G6(a.cW,b.cW);if(!(b instanceof DQ))return 1;return G6(a.cW,b.d3);}
function AE5(a){return a.cW;}
function AI7(a,b){a.d=b;}
function ADh(a,b){return 1;}
var HU=F(Da);
function AEU(a,b){return a.cW.j(FQ(FP(b)));}
function Vz(){var a=this;BO.call(a);a.m5=null;a.so=0;}
function AD$(a){var b=new Vz();AGE(b,a);return b;}
function AGE(a,b){C9(a);a.m5=b.hj();a.so=b.U;}
function AFd(a,b,c){return !a.m5.j(Eu(D9(L(c,b))))?(-1):1;}
function DQ(){var a=this;BO.call(a);a.d3=null;a.s2=0;}
function AJt(a){var b=new DQ();AHz(b,a);return b;}
function AHz(a,b){C9(a);a.d3=b.hj();a.s2=b.U;}
function KJ(a,b,c){return !a.d3.j(L(c,b))?(-1):1;}
function AHg(a,b){if(b instanceof DZ)return IK(a.d3,b.cD);if(b instanceof DQ)return G6(a.d3,b.d3);if(!(b instanceof Da)){if(!(b instanceof Du))return 1;return 0;}return G6(a.d3,b.cW);}
function ML(){var a=this;BJ.call(a);a.fw=null;a.jV=null;a.hC=0;}
function AJD(a,b){var c=new ML();AAz(c,a,b);return c;}
function AAz(a,b,c){BG(a);a.fw=b;a.hC=c;}
function AFS(a,b){a.d=b;}
function Of(a){if(a.jV===null)a.jV=Fb(a.fw);return a.jV;}
function AAc(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.t;f=BS(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?EE([k,l]):EE([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.hC;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.fw.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.hC==3){k=f[0];m=a.fw.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.hC==2){b=f[0];m=a.fw.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function ABs(a,b){return b instanceof ML&&!Br(Of(b),Of(a))?0:1;}
function AJB(a,b){return 1;}
function DZ(){BO.call(this);this.cD=0;}
function V2(a){var b=new DZ();AHC(b,a);return b;}
function AHC(a,b){C9(a);a.cD=b;}
function AE2(a){return 1;}
function AD5(a,b,c){return a.cD!=L(c,b)?(-1):1;}
function AC3(a,b,c,d){var e,f,g;if(!(c instanceof Bx))return GB(a,b,c,d);e=d.t;while(true){if(b>=e)return (-1);f=FU(c,a.cD,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AE7(a,b,c,d,e){var f;if(!(d instanceof Bx))return GK(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Fg(d,a.cD,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AJw(a,b){if(b instanceof DZ)return b.cD!=a.cD?0:1;if(!(b instanceof DQ)){if(b instanceof Da)return b.j(a.cD);if(!(b instanceof Du))return 1;return 0;}return KJ(b,0,TC(a.cD))<=0?0:1;}
function Zt(){BO.call(this);this.kx=0;}
function AH3(a){var b=new Zt();AGp(b,a);return b;}
function AGp(a,b){C9(a);a.kx=Eu(D9(b));}
function Z$(a,b,c){return a.kx!=Eu(D9(L(c,b)))?(-1):1;}
function UP(){var a=this;BO.call(a);a.qr=0;a.ll=0;}
function ABQ(a){var b=new UP();AIi(b,a);return b;}
function AIi(a,b){C9(a);a.qr=b;a.ll=Gy(b);}
function AAr(a,b,c){return a.qr!=L(c,b)&&a.ll!=L(c,b)?(-1):1;}
function EL(){var a=this;BJ.call(a);a.f3=0;a.iA=null;a.h4=null;a.hY=0;}
function ANB(a,b){var c=new EL();L5(c,a,b);return c;}
function L5(a,b,c){BG(a);a.f3=1;a.h4=b;a.hY=c;}
function AKz(a,b){a.d=b;}
function AG1(a,b,c,d){var e,f,g,h,i,j,k,l;e=BS(4);f=d.t;if(b>=f)return (-1);g=I2(a,b,c,f);h=b+a.f3|0;i=Zc(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;DU(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=I2(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(Zc(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.f3|0;if(h>=f){b=k;break a;}g=I2(a,h,c,f);b=k;}}}if(b!=a.hY)return (-1);i=e.data;g=0;while(true){if(g>=
b)return a.d.c(h,c,d);if(i[g]!=a.h4.data[g])break;g=g+1|0;}return (-1);}
function Tp(a){var b,c;if(a.iA===null){b=new M;O(b);c=0;while(c<a.hY){G_(b,FG(a.h4.data[c]));c=c+1|0;}a.iA=N(b);}return a.iA;}
function I2(a,b,c,d){var e,f,g;a.f3=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(Gr(e,f)){g=BN(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Cr(g[0])&&CK(g[1])?D5(g[0],g[1]):g[0];a.f3=2;}}return e;}
function AFe(a,b){return b instanceof EL&&!Br(Tp(b),Tp(a))?0:1;}
function AH0(a,b){return 1;}
var TR=F(EL);
var QO=F(EL);
var UC=F(CB);
function ACc(a,b,c,d){var e;while(true){e=a.D.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var Nx=F(CB);
function AGk(a,b,c,d){var e;e=a.D.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.D.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var E_=F(CB);
function AI4(a,b,c,d){var e;if(!a.D.C(d))return a.d.c(b,c,d);e=a.D.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AJ1(a,b){a.d=b;a.D.I(b);}
var Ng=F(E_);
function AE4(a,b,c,d){var e;e=a.D.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AGB(a,b){a.d=b;}
function EI(){var a=this;CB.call(a);a.eY=null;a.cM=0;}
function AQG(a,b,c,d,e){var f=new EI();HS(f,a,b,c,d,e);return f;}
function HS(a,b,c,d,e,f){CR(a,c,d,e);a.eY=b;a.cM=f;}
function ALc(a,b,c,d){var e,f;e=Lc(d,a.cM);if(!a.D.C(d))return a.d.c(b,c,d);if(e>=a.eY.dA)return a.d.c(b,c,d);f=a.cM;e=e+1|0;DN(d,f,e);f=a.D.c(b,c,d);if(f>=0){DN(d,a.cM,0);return f;}f=a.cM;e=e+(-1)|0;DN(d,f,e);if(e>=a.eY.dE)return a.d.c(b,c,d);DN(d,a.cM,0);return (-1);}
var Lp=F(EI);
function AEt(a,b,c,d){var e,f,g;e=0;f=a.eY.dA;a:{while(true){g=a.D.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.eY.dE)return (-1);return a.d.c(b,c,d);}
var O0=F(CB);
function AKH(a,b,c,d){var e;if(!a.D.C(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.D.c(b,c,d);}
var Oe=F(E_);
function ABA(a,b,c,d){var e;if(!a.D.C(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.D.c(b,c,d);return e;}
var RI=F(EI);
function AAO(a,b,c,d){var e,f,g;e=Lc(d,a.cM);if(!a.D.C(d))return a.d.c(b,c,d);f=a.eY;if(e>=f.dA){DN(d,a.cM,0);return a.d.c(b,c,d);}if(e<f.dE){DN(d,a.cM,e+1|0);g=a.D.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){DN(d,a.cM,0);return g;}DN(d,a.cM,e+1|0);g=a.D.c(b,c,d);}return g;}
var O1=F(DC);
function AK4(a,b,c,d){var e;e=d.t;if(e>b)return a.d.bY(b,e,c,d);return a.d.c(b,c,d);}
function AJd(a,b,c,d){var e;e=d.t;if(a.d.bY(b,e,c,d)>=0)return b;return (-1);}
function Mn(){DC.call(this);this.iI=null;}
function AHj(a,b,c,d){var e,f;e=d.t;f=RK(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.bY(b,e,c,d);return a.d.c(b,c,d);}
function AAh(a,b,c,d){var e,f,g,h;e=d.t;f=a.d.bS(b,c,d);if(f<0)return (-1);g=RK(a,f,e,c);if(g>=0)e=g;g=Bf(f,a.d.bY(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.iI.f9(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function RK(a,b,c,d){while(true){if(b>=c)return (-1);if(a.iI.f9(L(d,b)))break;b=b+1|0;}return b;}
var Em=F();
var AQH=null;var AQI=null;function Nk(b){var c;if(!(b&1)){c=AQI;if(c!==null)return c;c=new R3;AQI=c;return c;}c=AQH;if(c!==null)return c;c=new R2;AQH=c;return c;}
var UE=F(CJ);
function AAR(a,b,c,d){var e;a:{while(true){if((b+a.P.bB()|0)>d.t)break a;e=a.P.bg(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var SS=F(D$);
function AGj(a,b,c,d){var e;if((b+a.P.bB()|0)<=d.t){e=a.P.bg(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var M7=F(EA);
function AII(a,b,c,d){var e,f,g,h,i;e=a.hE;f=e.dE;g=e.dA;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.P.bB()|0)>d.t)break a;i=a.P.bg(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.P.bB()|0)>d.t){d.cK=1;return (-1);}i=a.P.bg(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Ob=F(CJ);
function AHb(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.P.bB()|0)<=d.t){e=a.P.bg(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Q0=F(D$);
function AAV(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.D.c(b,c,d);}
var OF=F(EA);
function AIW(a,b,c,d){var e,f,g,h,i,j;e=a.hE;f=e.dE;g=e.dA;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.P.bB()|0)<=d.t){i=a.P.bg(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.P.bB()|0)>d.t){d.cK=1;return (-1);}j=a.P.bg(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var IV=F(By);
function AFw(a,b,c,d){if(b&&!(d.ei&&b==d.ci))return (-1);return a.d.c(b,c,d);}
function AEE(a,b){return 0;}
function Wb(){By.call(this);this.pY=0;}
function AJs(a){var b=new Wb();AEX(b,a);return b;}
function AEX(a,b){BG(a);a.pY=b;}
function ABf(a,b,c,d){var e,f,g;e=b<d.t?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.ha?0:d.ci;return (e!=32&&!Oj(a,e,b,g,c)?0:1)^(f!=32&&!Oj(a,f,b-1|0,g,c)?0:1)^a.pY?(-1):a.d.c(b,c,d);}
function ABp(a,b){return 0;}
function Oj(a,b,c,d,e){var f;if(!H9(b)&&b!=95){a:{if(Ch(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(H9(f))return 0;if(Ch(f)!=6)return 1;}}return 1;}return 0;}
var Ml=F(By);
function AEW(a,b,c,d){if(b!=d.gd)return (-1);return a.d.c(b,c,d);}
function AK$(a,b){return 0;}
function TD(){By.call(this);this.e3=0;}
function AM4(a){var b=new TD();Y3(b,a);return b;}
function Y3(a,b){BG(a);a.e3=b;}
function AHJ(a,b,c,d){var e,f,g;e=!d.ei?I(c):d.t;if(b>=e){BE(d,a.e3,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BE(d,a.e3,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BE(d,a.e3,0);return a.d.c(b,c,d);}
function AB4(a,b){var c;c=!CX(b,a.e3)?0:1;BE(b,a.e3,(-1));return c;}
var Tk=F(By);
function AGV(a,b,c,d){if(b<(d.ha?I(c):d.t))return (-1);d.cK=1;d.tn=1;return a.d.c(b,c,d);}
function Z8(a,b){return 0;}
function LD(){By.call(this);this.nG=null;}
function ABX(a,b,c,d){a:{if(b!=d.t){if(!b)break a;if(d.ei&&b==d.ci)break a;if(a.nG.oQ(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function ADO(a,b){return 0;}
var Zh=F(BJ);
function ANk(){var a=new Zh();AGK(a);return a;}
function AGK(a){BG(a);}
function AKK(a,b,c,d){var e,f,g,h;e=d.t;f=b+1|0;if(f>e){d.cK=1;return (-1);}g=L(c,b);if(Cr(g)){h=b+2|0;if(h<=e&&Gr(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function ABu(a,b){a.d=b;}
function AGF(a){return (-2147483602);}
function ABt(a,b){return 1;}
function VE(){BJ.call(this);this.ja=null;}
function AM0(a){var b=new VE();AB2(b,a);return b;}
function AB2(a,b){BG(a);a.ja=b;}
function AGN(a,b,c,d){var e,f,g,h;e=d.t;f=b+1|0;if(f>e){d.cK=1;return (-1);}g=L(c,b);if(Cr(g)){b=b+2|0;if(b<=e){h=L(c,f);if(Gr(g,h))return a.ja.f9(D5(g,h))?(-1):a.d.c(b,c,d);}}return a.ja.f9(g)?(-1):a.d.c(f,c,d);}
function AIu(a,b){a.d=b;}
function Z3(a){return (-2147483602);}
function AKU(a,b){return 1;}
function Za(){By.call(this);this.fV=0;}
function AMu(a){var b=new Za();ADJ(b,a);return b;}
function ADJ(a,b){BG(a);a.fV=b;}
function AFh(a,b,c,d){var e;e=!d.ei?I(c):d.t;if(b>=e){BE(d,a.fV,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BE(d,a.fV,1);return a.d.c(b+1|0,c,d);}return (-1);}
function ADI(a,b){var c;c=!CX(b,a.fV)?0:1;BE(b,a.fV,(-1));return c;}
function XC(){By.call(this);this.f2=0;}
function AMf(a){var b=new XC();AD_(b,a);return b;}
function AD_(a,b){BG(a);a.f2=b;}
function AGS(a,b,c,d){if((!d.ei?I(c)-b|0:d.t-b|0)<=0){BE(d,a.f2,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BE(d,a.f2,1);return a.d.c(b+1|0,c,d);}
function ADy(a,b){var c;c=!CX(b,a.f2)?0:1;BE(b,a.f2,(-1));return c;}
function UN(){By.call(this);this.ey=0;}
function ALC(a){var b=new UN();ALf(b,a);return b;}
function ALf(a,b){BG(a);a.ey=b;}
function AEw(a,b,c,d){var e,f,g;e=!d.ei?I(c)-b|0:d.t-b|0;if(!e){BE(d,a.ey,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BE(d,a.ey,0);return a.d.c(b,c,d);case 13:if(g!=10){BE(d,a.ey,0);return a.d.c(b,c,d);}BE(d,a.ey,0);return a.d.c(b,c,d);default:}return (-1);}
function AB8(a,b){var c;c=!CX(b,a.ey)?0:1;BE(b,a.ey,(-1));return c;}
function F_(){var a=this;BJ.call(a);a.k2=0;a.fr=0;}
function ANv(a,b){var c=new F_();MU(c,a,b);return c;}
function MU(a,b,c){BG(a);a.k2=b;a.fr=c;}
function AAS(a,b,c,d){var e,f,g,h;e=Fo(a,d);if(e!==null&&(b+I(e)|0)<=d.t){f=0;while(true){if(f>=I(e)){BE(d,a.fr,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&Gy(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AHW(a,b){a.d=b;}
function Fo(a,b){var c,d;c=a.k2;d=EY(b,c);c=Hf(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.je)?B6(b.je,d,c):null;}
function AIc(a,b){var c;c=!CX(b,a.fr)?0:1;BE(b,a.fr,(-1));return c;}
var Ze=F(F_);
function ALJ(a,b){var c=new Ze();AJT(c,a,b);return c;}
function AJT(a,b,c){MU(a,b,c);}
function ACb(a,b,c,d){var e,f;e=Fo(a,d);if(e!==null&&(b+I(e)|0)<=d.t){f=!Rf(c,e,b)?(-1):I(e);if(f<0)return (-1);BE(d,a.fr,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AJK(a,b,c,d){var e,f;e=Fo(a,d);f=d.ci;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=Wa(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AAE(a,b,c,d,e){var f,g;f=Fo(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Z(c,I(d)-I(f)|0);b:{c:while(true){if(g<0){g=(-1);break b;}c=0;while(true){if(c>=I(f))break c;if(L(d,g+c|0)!=L(f,c))break;c=c+1|0;}g=g+(-1)|0;}}if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AGb(a,b){return 1;}
var WP=F(F_);
function AMg(a,b){var c=new WP();ADF(c,a,b);return c;}
function ADF(a,b,c){MU(a,b,c);}
function AFI(a,b,c,d){var e,f;e=Fo(a,d);if(e!==null&&(b+I(e)|0)<=d.t){f=0;while(true){if(f>=I(e)){BE(d,a.fr,I(e));return a.d.c(b+I(e)|0,c,d);}if(Eu(D9(L(e,f)))!=Eu(D9(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Mh=F(Fy);
function ADr(a,b,c,d,e){Li(a,b,c,d,e);return a;}
function ABk(a,b,c,d){TK(a,b,c,d);return a;}
function ABG(a,b){Ic(a,b);}
function AJe(a,b,c){T0(a,b,c);return a;}
function O5(){var a=this;BO.call(a);a.b2=null;a.iC=null;a.jl=null;}
function ACs(a,b,c){return !IS(a,c,b)?(-1):a.bp;}
function ABa(a,b,c,d){var e,f,g;e=d.t;while(true){if(b>e)return (-1);f=L(a.b2,a.bp-1|0);a:{while(true){g=a.bp;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&IS(a,c,b))break;b=b+PM(a.iC,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bp|0,c,d)>=0)break;b=b+1|0;}return b;}
function ADM(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.b2,0);g=(I(d)-c|0)-a.bp|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&IS(a,d,c))break;c=c-PM(a.jl,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bp|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AEe(a,b){var c;if(b instanceof DZ)return b.cD!=L(a.b2,0)?0:1;if(b instanceof DQ)return KJ(b,0,B6(a.b2,0,1))<=0?0:1;if(!(b instanceof Da)){if(!(b instanceof Du))return 1;return I(a.b2)>1&&b.eK==D5(L(a.b2,0),L(a.b2,1))?1:0;}a:{b:{b=b;if(!b.j(L(a.b2,0))){if(I(a.b2)<=1)break b;if(!b.j(D5(L(a.b2,0),L(a.b2,1))))break b;}c=1;break a;}c=0;}return c;}
function IS(a,b,c){var d;d=0;while(d<a.bp){if(L(b,d+c|0)!=L(a.b2,d))return 0;d=d+1|0;}return 1;}
function UL(){BO.call(this);this.he=null;}
function ANy(a){var b=new UL();AJx(b,a);return b;}
function AJx(a,b){var c,d,e;C9(a);c=new M;O(c);d=0;while(true){e=BD(d,b.J);if(e>=0){a.he=N(c);a.bp=c.J;return;}if(d<0)break;if(e>=0)break;BB(c,Eu(D9(b.w.data[d])));d=d+1|0;}b=new Bv;U(b);J(b);}
function AFP(a,b,c){var d;d=0;while(true){if(d>=I(a.he))return I(a.he);if(L(a.he,d)!=Eu(D9(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Lx(){BO.call(this);this.fU=null;}
function AIL(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.fU))return I(a.fU);e=L(a.fU,d);f=b+d|0;if(e!=L(c,f)&&Gy(L(a.fU,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var F$=F();
var AQJ=null;var AQK=null;var AQF=null;function AIl(){AIl=Bk(F$);ACM();}
function ACM(){AQJ=ANb();AQK=AMn();AQF=H($rt_arraycls(C),[H(C,[B(356),ANw()]),H(C,[B(357),ALz()]),H(C,[B(358),AM$()]),H(C,[B(359),ANg()]),H(C,[B(360),AQK]),H(C,[B(361),AMx()]),H(C,[B(362),AMl()]),H(C,[B(363),ALM()]),H(C,[B(364),ALI()]),H(C,[B(365),ALS()]),H(C,[B(366),AL4()]),H(C,[B(367),ALQ()]),H(C,[B(368),AMS()]),H(C,[B(369),ALs()]),H(C,[B(370),ANd()]),H(C,[B(371),AL3()]),H(C,[B(372),AMv()]),H(C,[B(373),AL1()]),H(C,[B(374),AMw()]),H(C,[B(375),ALV()]),H(C,[B(376),ANj()]),H(C,[B(377),ALY()]),H(C,[B(378),AMB()]),
H(C,[B(379),AM8()]),H(C,[B(380),AM5()]),H(C,[B(381),ANh()]),H(C,[B(382),ALU()]),H(C,[B(383),AMY()]),H(C,[B(384),AQJ]),H(C,[B(385),AMG()]),H(C,[B(386),ALN()]),H(C,[B(387),AQJ]),H(C,[B(388),ALo()]),H(C,[B(389),AQK]),H(C,[B(390),AMa()]),H(C,[B(391),P(0,127)]),H(C,[B(392),P(128,255)]),H(C,[B(393),P(256,383)]),H(C,[B(394),P(384,591)]),H(C,[B(395),P(592,687)]),H(C,[B(396),P(688,767)]),H(C,[B(397),P(768,879)]),H(C,[B(398),P(880,1023)]),H(C,[B(399),P(1024,1279)]),H(C,[B(400),P(1280,1327)]),H(C,[B(401),P(1328,1423)]),
H(C,[B(402),P(1424,1535)]),H(C,[B(403),P(1536,1791)]),H(C,[B(404),P(1792,1871)]),H(C,[B(405),P(1872,1919)]),H(C,[B(406),P(1920,1983)]),H(C,[B(407),P(2304,2431)]),H(C,[B(408),P(2432,2559)]),H(C,[B(409),P(2560,2687)]),H(C,[B(410),P(2688,2815)]),H(C,[B(411),P(2816,2943)]),H(C,[B(412),P(2944,3071)]),H(C,[B(413),P(3072,3199)]),H(C,[B(414),P(3200,3327)]),H(C,[B(415),P(3328,3455)]),H(C,[B(416),P(3456,3583)]),H(C,[B(417),P(3584,3711)]),H(C,[B(418),P(3712,3839)]),H(C,[B(419),P(3840,4095)]),H(C,[B(420),P(4096,4255)]),
H(C,[B(421),P(4256,4351)]),H(C,[B(422),P(4352,4607)]),H(C,[B(423),P(4608,4991)]),H(C,[B(424),P(4992,5023)]),H(C,[B(425),P(5024,5119)]),H(C,[B(426),P(5120,5759)]),H(C,[B(427),P(5760,5791)]),H(C,[B(428),P(5792,5887)]),H(C,[B(429),P(5888,5919)]),H(C,[B(430),P(5920,5951)]),H(C,[B(431),P(5952,5983)]),H(C,[B(432),P(5984,6015)]),H(C,[B(433),P(6016,6143)]),H(C,[B(434),P(6144,6319)]),H(C,[B(435),P(6400,6479)]),H(C,[B(436),P(6480,6527)]),H(C,[B(437),P(6528,6623)]),H(C,[B(438),P(6624,6655)]),H(C,[B(439),P(6656,6687)]),
H(C,[B(440),P(7424,7551)]),H(C,[B(441),P(7552,7615)]),H(C,[B(442),P(7616,7679)]),H(C,[B(443),P(7680,7935)]),H(C,[B(444),P(7936,8191)]),H(C,[B(445),P(8192,8303)]),H(C,[B(446),P(8304,8351)]),H(C,[B(447),P(8352,8399)]),H(C,[B(448),P(8400,8447)]),H(C,[B(449),P(8448,8527)]),H(C,[B(450),P(8528,8591)]),H(C,[B(451),P(8592,8703)]),H(C,[B(452),P(8704,8959)]),H(C,[B(453),P(8960,9215)]),H(C,[B(454),P(9216,9279)]),H(C,[B(455),P(9280,9311)]),H(C,[B(456),P(9312,9471)]),H(C,[B(457),P(9472,9599)]),H(C,[B(458),P(9600,9631)]),
H(C,[B(459),P(9632,9727)]),H(C,[B(460),P(9728,9983)]),H(C,[B(461),P(9984,10175)]),H(C,[B(462),P(10176,10223)]),H(C,[B(463),P(10224,10239)]),H(C,[B(464),P(10240,10495)]),H(C,[B(465),P(10496,10623)]),H(C,[B(466),P(10624,10751)]),H(C,[B(467),P(10752,11007)]),H(C,[B(468),P(11008,11263)]),H(C,[B(469),P(11264,11359)]),H(C,[B(470),P(11392,11519)]),H(C,[B(471),P(11520,11567)]),H(C,[B(472),P(11568,11647)]),H(C,[B(473),P(11648,11743)]),H(C,[B(474),P(11776,11903)]),H(C,[B(475),P(11904,12031)]),H(C,[B(476),P(12032,12255)]),
H(C,[B(477),P(12272,12287)]),H(C,[B(478),P(12288,12351)]),H(C,[B(479),P(12352,12447)]),H(C,[B(480),P(12448,12543)]),H(C,[B(481),P(12544,12591)]),H(C,[B(482),P(12592,12687)]),H(C,[B(483),P(12688,12703)]),H(C,[B(484),P(12704,12735)]),H(C,[B(485),P(12736,12783)]),H(C,[B(486),P(12784,12799)]),H(C,[B(487),P(12800,13055)]),H(C,[B(488),P(13056,13311)]),H(C,[B(489),P(13312,19893)]),H(C,[B(490),P(19904,19967)]),H(C,[B(491),P(19968,40959)]),H(C,[B(492),P(40960,42127)]),H(C,[B(493),P(42128,42191)]),H(C,[B(494),P(42752,
42783)]),H(C,[B(495),P(43008,43055)]),H(C,[B(496),P(44032,55203)]),H(C,[B(497),P(55296,56191)]),H(C,[B(498),P(56192,56319)]),H(C,[B(499),P(56320,57343)]),H(C,[B(500),P(57344,63743)]),H(C,[B(501),P(63744,64255)]),H(C,[B(502),P(64256,64335)]),H(C,[B(503),P(64336,65023)]),H(C,[B(504),P(65024,65039)]),H(C,[B(505),P(65040,65055)]),H(C,[B(506),P(65056,65071)]),H(C,[B(507),P(65072,65103)]),H(C,[B(508),P(65104,65135)]),H(C,[B(509),P(65136,65279)]),H(C,[B(510),P(65280,65519)]),H(C,[B(511),P(0,1114111)]),H(C,[B(512),
ALR()]),H(C,[B(513),BF(0,1)]),H(C,[B(514),Hs(62,1)]),H(C,[B(515),BF(1,1)]),H(C,[B(516),BF(2,1)]),H(C,[B(517),BF(3,0)]),H(C,[B(518),BF(4,0)]),H(C,[B(519),BF(5,1)]),H(C,[B(520),Hs(448,1)]),H(C,[B(521),BF(6,1)]),H(C,[B(522),BF(7,0)]),H(C,[B(523),BF(8,1)]),H(C,[B(524),Hs(3584,1)]),H(C,[B(525),BF(9,1)]),H(C,[B(526),BF(10,1)]),H(C,[B(527),BF(11,1)]),H(C,[B(528),Hs(28672,0)]),H(C,[B(529),BF(12,0)]),H(C,[B(530),BF(13,0)]),H(C,[B(531),BF(14,0)]),H(C,[B(532),AMh(983040,1,1)]),H(C,[B(533),BF(15,0)]),H(C,[B(534),BF(16,
1)]),H(C,[B(535),BF(18,1)]),H(C,[B(536),AMt(19,0,1)]),H(C,[B(537),Hs(1643118592,1)]),H(C,[B(538),BF(20,0)]),H(C,[B(539),BF(21,0)]),H(C,[B(540),BF(22,0)]),H(C,[B(541),BF(23,0)]),H(C,[B(542),BF(24,1)]),H(C,[B(543),Hs(2113929216,1)]),H(C,[B(544),BF(25,1)]),H(C,[B(545),BF(26,0)]),H(C,[B(546),BF(27,0)]),H(C,[B(547),BF(28,1)]),H(C,[B(548),BF(29,0)]),H(C,[B(549),BF(30,0)])]);}
function KQ(){BO.call(this);this.nf=0;}
function AIS(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.nf!=FQ(FP(D5(e,d)))?(-1):2;}
function Jo(){BJ.call(this);this.e_=0;}
function AGJ(a){var b=new Jo();ABD(b,a);return b;}
function ABD(a,b){BG(a);a.e_=b;}
function AG7(a,b){a.d=b;}
function AB5(a,b,c,d){var e,f;e=b+1|0;if(e>d.t){d.cK=1;return (-1);}f=L(c,b);if(b>d.ci&&Cr(L(c,b-1|0)))return (-1);if(a.e_!=f)return (-1);return a.d.c(e,c,d);}
function AEc(a,b,c,d){var e,f,g,h;if(!(c instanceof Bx))return GB(a,b,c,d);e=d.ci;f=d.t;while(true){if(b>=f)return (-1);g=FU(c,a.e_,b);if(g<0)return (-1);if(g>e&&Cr(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function ACz(a,b,c,d,e){var f,g;if(!(d instanceof Bx))return GK(a,b,c,d,e);f=e.ci;a:{while(true){if(c<b)return (-1);g=Fg(d,a.e_,c);if(g<0)break a;if(g<b)break a;if(g>f&&Cr(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AAB(a,b){if(b instanceof DZ)return 0;if(b instanceof DQ)return 0;if(b instanceof Da)return 0;if(b instanceof Du)return 0;if(b instanceof JG)return 0;if(!(b instanceof Jo))return 1;return b.e_!=a.e_?0:1;}
function AJl(a,b){return 1;}
function JG(){BJ.call(this);this.eT=0;}
function AEz(a){var b=new JG();AGP(b,a);return b;}
function AGP(a,b){BG(a);a.eT=b;}
function ABF(a,b){a.d=b;}
function AAl(a,b,c,d){var e,f,g,h;e=d.t;f=b+1|0;g=BD(f,e);if(g>0){d.cK=1;return (-1);}h=L(c,b);if(g<0&&CK(L(c,f)))return (-1);if(a.eT!=h)return (-1);return a.d.c(f,c,d);}
function AHo(a,b,c,d){var e,f;if(!(c instanceof Bx))return GB(a,b,c,d);e=d.t;while(true){if(b>=e)return (-1);f=FU(c,a.eT,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CK(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function AIJ(a,b,c,d,e){var f,g;if(!(d instanceof Bx))return GK(a,b,c,d,e);f=e.t;a:{while(true){if(c<b)return (-1);g=Fg(d,a.eT,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CK(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ACt(a,b){if(b instanceof DZ)return 0;if(b instanceof DQ)return 0;if(b instanceof Da)return 0;if(b instanceof Du)return 0;if(b instanceof Jo)return 0;if(!(b instanceof JG))return 1;return b.eT!=a.eT?0:1;}
function AHw(a,b){return 1;}
function Du(){var a=this;BO.call(a);a.hQ=0;a.gO=0;a.eK=0;}
function AId(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.hQ==e&&a.gO==d?2:(-1);}
function AGu(a,b,c,d){var e,f;if(!(c instanceof Bx))return GB(a,b,c,d);e=d.t;while(b<e){b=FU(c,a.hQ,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.gO==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function ABE(a,b,c,d,e){var f;if(!(d instanceof Bx))return GK(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Fg(d,a.gO,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.hQ==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AH5(a,b){if(b instanceof Du)return b.eK!=a.eK?0:1;if(b instanceof Da)return b.j(a.eK);if(b instanceof DZ)return 0;if(!(b instanceof DQ))return 1;return 0;}
var R2=F(Em);
function ABR(a,b){return b!=10?0:1;}
function AH$(a,b,c){return b!=10?0:1;}
var R3=F(Em);
function AIX(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AKs(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function Yo(){var a=this;C.call(a);a.ko=null;a.h6=null;a.fG=0;a.qW=0;}
function AGD(a){var b=new Yo();AEV(b,a);return b;}
function AEV(a,b){var c,d;while(true){c=a.fG;if(b<c)break;a.fG=c<<1|1;}d=c<<1|1;a.fG=d;d=d+1|0;a.ko=BS(d);a.h6=BS(d);a.qW=b;}
function OK(a,b,c){var d,e,f,g;d=0;e=a.fG;f=b&e;while(true){g=a.ko.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.h6.data[f]=c;}
function PM(a,b){var c,d,e,f;c=a.fG;d=b&c;e=0;while(true){f=a.ko.data[d];if(!f)break;if(f==b)return a.h6.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.qW;}
var U4=F();
var Jm=F(V);
function ANb(){var a=new Jm();AEu(a);return a;}
function AEu(a){}
function WX(a){return Ci(BL(CY(),9,13),32);}
var Iq=F(V);
function AMn(){var a=new Iq();AJi(a);return a;}
function AJi(a){}
function Xy(a){return BL(CY(),48,57);}
var Yh=F(V);
function ANw(){var a=new Yh();ADV(a);return a;}
function ADV(a){}
function AIv(a){return BL(CY(),97,122);}
var YK=F(V);
function ALz(){var a=new YK();AE1(a);return a;}
function AE1(a){}
function AJp(a){return BL(CY(),65,90);}
var YN=F(V);
function AM$(){var a=new YN();ABb(a);return a;}
function ABb(a){}
function AC7(a){return BL(CY(),0,127);}
var Jg=F(V);
function ANg(){var a=new Jg();ACd(a);return a;}
function ACd(a){}
function VG(a){return BL(BL(CY(),97,122),65,90);}
var JS=F(Jg);
function AMx(){var a=new JS();AEB(a);return a;}
function AEB(a){}
function Wv(a){return BL(VG(a),48,57);}
var ZV=F(V);
function AMl(){var a=new ZV();AGl(a);return a;}
function AGl(a){}
function AEa(a){return BL(BL(BL(CY(),33,64),91,96),123,126);}
var KH=F(JS);
function ALM(){var a=new KH();AHQ(a);return a;}
function AHQ(a){}
function UI(a){return BL(BL(BL(Wv(a),33,64),91,96),123,126);}
var W$=F(KH);
function ALI(){var a=new W$();AJa(a);return a;}
function AJa(a){}
function AF9(a){return Ci(UI(a),32);}
var Xt=F(V);
function ALS(){var a=new Xt();AIM(a);return a;}
function AIM(a){}
function ACl(a){return Ci(Ci(CY(),32),9);}
var V6=F(V);
function AL4(){var a=new V6();AKd(a);return a;}
function AKd(a){}
function AF5(a){return Ci(BL(CY(),0,31),127);}
var VP=F(V);
function ALQ(){var a=new VP();ABo(a);return a;}
function ABo(a){}
function AKv(a){return BL(BL(BL(CY(),48,57),97,102),65,70);}
var YQ=F(V);
function AMS(){var a=new YQ();AA1(a);return a;}
function AA1(a){}
function AGC(a){var b;b=new PW;b.sG=a;Bj(b);b.F=1;return b;}
var Z2=F(V);
function ALs(){var a=new Z2();AH8(a);return a;}
function AH8(a){}
function AAe(a){var b;b=new K7;b.sR=a;Bj(b);b.F=1;return b;}
var Yp=F(V);
function ANd(){var a=new Yp();ABd(a);return a;}
function ABd(a){}
function AEA(a){var b;b=new Pi;b.sl=a;Bj(b);return b;}
var Yb=F(V);
function AL3(){var a=new Yb();AF6(a);return a;}
function AF6(a){}
function AIg(a){var b;b=new Ph;b.r5=a;Bj(b);return b;}
var Y6=F(V);
function AMv(){var a=new Y6();ACa(a);return a;}
function ACa(a){}
function ACi(a){var b;b=new Ts;b.tt=a;Bj(b);GP(b.E,0,2048);b.F=1;return b;}
var Vi=F(V);
function AL1(){var a=new Vi();ABN(a);return a;}
function ABN(a){}
function ACH(a){var b;b=new MY;b.s3=a;Bj(b);b.F=1;return b;}
var U1=F(V);
function AMw(){var a=new U1();AFM(a);return a;}
function AFM(a){}
function AKl(a){var b;b=new Ma;b.t0=a;Bj(b);b.F=1;return b;}
var Yu=F(V);
function ALV(){var a=new Yu();AGm(a);return a;}
function AGm(a){}
function Z_(a){var b;b=new Op;b.sI=a;Bj(b);return b;}
var YC=F(V);
function ANj(){var a=new YC();AEm(a);return a;}
function AEm(a){}
function AFl(a){var b;b=new KY;b.ri=a;Bj(b);b.F=1;return b;}
var Wo=F(V);
function ALY(){var a=new Wo();AAG(a);return a;}
function AAG(a){}
function ACP(a){var b;b=new K5;b.s6=a;Bj(b);b.F=1;return b;}
var Xx=F(V);
function AMB(){var a=new Xx();ABU(a);return a;}
function ABU(a){}
function ADQ(a){var b;b=new LX;b.tq=a;Bj(b);b.F=1;return b;}
var ZA=F(V);
function AM8(){var a=new ZA();AFq(a);return a;}
function AFq(a){}
function AFn(a){var b;b=new Nn;b.tJ=a;Bj(b);b.F=1;return b;}
var YB=F(V);
function AM5(){var a=new YB();AGx(a);return a;}
function AGx(a){}
function AJE(a){var b;b=new Nv;b.sn=a;Bj(b);return b;}
var WN=F(V);
function ANh(){var a=new WN();ABO(a);return a;}
function ABO(a){}
function AHE(a){var b;b=new QJ;b.ta=a;Bj(b);return b;}
var Wm=F(V);
function ALU(){var a=new Wm();AIh(a);return a;}
function AIh(a){}
function AGv(a){var b;b=new Py;b.ro=a;Bj(b);b.F=1;return b;}
var ZZ=F(V);
function AMY(){var a=new ZZ();AEg(a);return a;}
function AEg(a){}
function AIq(a){var b;b=new Le;b.t9=a;Bj(b);b.F=1;return b;}
var H3=F(V);
function AMG(){var a=new H3();AC0(a);return a;}
function AC0(a){}
function Xu(a){return Ci(BL(BL(BL(CY(),97,122),65,90),48,57),95);}
var Y8=F(H3);
function ALN(){var a=new Y8();AEp(a);return a;}
function AEp(a){}
function AGo(a){var b;b=D4(Xu(a),1);b.F=1;return b;}
var Xd=F(Jm);
function ALo(){var a=new Xd();AJ4(a);return a;}
function AJ4(a){}
function AA$(a){var b;b=D4(WX(a),1);b.F=1;return b;}
var Wh=F(Iq);
function AMa(){var a=new Wh();AFb(a);return a;}
function AFb(a){}
function AD1(a){var b;b=D4(Xy(a),1);b.F=1;return b;}
function VV(){var a=this;V.call(a);a.na=0;a.nB=0;}
function P(a,b){var c=new VV();AKj(c,a,b);return c;}
function AKj(a,b,c){a.na=b;a.nB=c;}
function AFB(a){return BL(CY(),a.na,a.nB);}
var Wc=F(V);
function ALR(){var a=new Wc();AKC(a);return a;}
function AKC(a){}
function AKa(a){return BL(BL(CY(),65279,65279),65520,65533);}
function W4(){var a=this;V.call(a);a.jY=0;a.hX=0;a.lV=0;}
function BF(a,b){var c=new W4();AB7(c,a,b);return c;}
function AMt(a,b,c){var d=new W4();AKk(d,a,b,c);return d;}
function AB7(a,b,c){a.hX=c;a.jY=b;}
function AKk(a,b,c,d){a.lV=d;a.hX=c;a.jY=b;}
function ADu(a){var b;b=ANr(a.jY);if(a.lV)GP(b.E,0,2048);b.F=a.hX;return b;}
function Xa(){var a=this;V.call(a);a.jX=0;a.h8=0;a.k7=0;}
function Hs(a,b){var c=new Xa();ACQ(c,a,b);return c;}
function AMh(a,b,c){var d=new Xa();AAb(d,a,b,c);return d;}
function ACQ(a,b,c){a.h8=c;a.jX=b;}
function AAb(a,b,c,d){a.k7=d;a.h8=c;a.jX=b;}
function AAa(a){var b;b=new Pc;X0(b,a.jX);if(a.k7)GP(b.E,0,2048);b.F=a.h8;return b;}
var V0=F();
var Vx=F();
function WM(b){var c,d,e,f,g,h,i;c=AIz(FK(b));d=Ij(c);e=BS(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+Ij(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Lo(c);h=h+1|0;}return e;}
function I8(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function LE(){var a=this;C.call(a);a.mn=0;a.nW=0;a.mB=null;}
function ADs(a,b,c){var d=new LE();AI$(d,a,b,c);return d;}
function AI$(a,b,c,d){a.mn=b;a.nW=c;a.mB=d;}
function Yx(){var a=this;C.call(a);a.lD=null;a.ne=0;}
function AIz(a){var b=new Yx();ACv(b,a);return b;}
function ACv(a,b){a.lD=b;}
var WL=F();
function Ij(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.lD.data;f=b.ne;b.ne=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bc(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Lo(b){var c,d;c=Ij(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Tv=F(0);
function VC(){C.call(this);this.Ag=null;}
function PG(){var a=this;C.call(a);a.sm=null;a.mE=null;}
function PF(){C.call(this);this.rk=null;}
var Yq=F(0);
function ZK(b){return !b?H(Bx,[B(116),B(154),B(550)]):H(Bx,[B(116),B(154),B(550),B(40)]);}
function SV(){var a=this;S.call(a);a.lo=null;a.ty=null;}
function ADb(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.bN^C7(a.lo,c):0;}
function ST(){var a=this;S.call(a);a.pC=null;a.qa=null;a.tg=null;}
function AAv(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.bN^C7(a.pC,c):0;return a.qa.j(b)&&!d?1:0;}
function Ms(){var a=this;S.call(a);a.gS=null;a.rt=null;}
function AFr(a,b){return a.U^C7(a.gS,b);}
function ADS(a){var b,c,d;b=new M;O(b);c=Gh(a.gS,0);while(c>=0){G_(b,FG(c));BB(b,124);c=Gh(a.gS,c+1|0);}d=b.J;if(d>0)SK(b,d-1|0);return N(b);}
function My(){var a=this;S.call(a);a.nu=null;a.sP=null;}
function AIe(a,b){return a.nu.j(b);}
function Mw(){var a=this;S.call(a);a.h0=0;a.lO=null;a.iN=null;}
function AIR(a,b){return !(a.h0^C7(a.iN.B,b))&&!(a.h0^a.iN.c4^a.lO.j(b))?0:1;}
function Mx(){var a=this;S.call(a);a.h7=0;a.pS=null;a.jA=null;}
function AFO(a,b){return !(a.h7^C7(a.jA.B,b))&&!(a.h7^a.jA.c4^a.pS.j(b))?1:0;}
function MB(){var a=this;S.call(a);a.qz=0;a.pW=null;a.pN=null;a.rN=null;}
function ACK(a,b){return a.qz^(!a.pW.j(b)&&!a.pN.j(b)?0:1);}
function MC(){var a=this;S.call(a);a.nz=0;a.nm=null;a.mT=null;a.t6=null;}
function Z5(a,b){return a.nz^(!a.nm.j(b)&&!a.mT.j(b)?0:1)?0:1;}
function Mz(){var a=this;S.call(a);a.mI=null;a.t8=null;}
function ADW(a,b){return CI(a.mI,b);}
function MA(){var a=this;S.call(a);a.p8=null;a.r3=null;}
function AFR(a,b){return CI(a.p8,b)?0:1;}
function ME(){var a=this;S.call(a);a.nO=null;a.nq=0;a.pg=null;}
function AJN(a,b){return !CI(a.nO,b)&&!(a.nq^C7(a.pg.B,b))?0:1;}
function MG(){var a=this;S.call(a);a.oq=null;a.oC=0;a.oa=null;}
function ACf(a,b){return !CI(a.oq,b)&&!(a.oC^C7(a.oa.B,b))?1:0;}
function Mr(){var a=this;S.call(a);a.pa=0;a.pR=null;a.qn=null;a.ru=null;}
function ALn(a,b){return !(a.pa^a.pR.j(b))&&!CI(a.qn,b)?0:1;}
function Nc(){var a=this;S.call(a);a.qk=0;a.kO=null;a.k8=null;a.rY=null;}
function AD0(a,b){return !(a.qk^a.kO.j(b))&&!CI(a.k8,b)?1:0;}
function Mp(){var a=this;S.call(a);a.mh=null;a.r4=null;}
function ACe(a,b){return CI(a.mh,b);}
function Mq(){var a=this;S.call(a);a.mm=null;a.t4=null;}
function ADE(a,b){return CI(a.mm,b)?0:1;}
function Mv(){var a=this;S.call(a);a.qv=null;a.om=0;a.rc=null;}
function AE0(a,b){return CI(a.qv,b)&&a.om^C7(a.rc.B,b)?1:0;}
function Mo(){var a=this;S.call(a);a.oU=null;a.nA=0;a.ok=null;}
function AJv(a,b){return CI(a.oU,b)&&a.nA^C7(a.ok.B,b)?0:1;}
function Mt(){var a=this;S.call(a);a.pk=0;a.lm=null;a.nw=null;a.rM=null;}
function ABn(a,b){return a.pk^a.lm.j(b)&&CI(a.nw,b)?1:0;}
function Mu(){var a=this;S.call(a);a.oM=0;a.kE=null;a.o_=null;a.r7=null;}
function AHu(a,b){return a.oM^a.kE.j(b)&&CI(a.o_,b)?0:1;}
var Kf=F(0);
function Px(){var a=this;C.call(a);a.rU=null;a.pT=null;a.g9=null;a.b5=null;a.gU=0;a.iG=0;}
function K2(a,b){var c,d,e;c=I(a.g9);if(b>=0&&b<=c){Ue(a.b5,null,(-1),(-1));d=a.b5;d.hF=1;d.dl=b;c=d.gd;if(c<0)c=b;d.gd=c;b=a.pT.bS(b,a.g9,d);if(b==(-1))a.b5.cK=1;if(b>=0){d=a.b5;if(d.g$){e=d.cY.data;if(e[0]==(-1)){c=d.dl;e[0]=c;e[1]=c;}d.gd=HM(d);return 1;}}a.b5.dl=(-1);return 0;}d=new Bv;Ba(d,CZ(b));J(d);}
function Zz(a){return M6(a.b5,0);}
function Wi(a){return Pl(a.b5,0);}
var We=F();
var NN=F(0);
function Rl(){var a=this;C.call(a);a.q0=null;a.q1=0;a.q2=null;}
function JI(a,b){var c,d,e,f,g,h,i,j,k;c=a.q0;d=a.q1;e=a.q2;if(b<=d){f=c.bH.u;g=new L8;g.kF=c;h=R(C,1);h.data[0]=e;CL(f,g,B(551),h);}else{i=c.bH.u;g=new L$;g.pL=c;j=R(C,2);k=j.data;k[0]=e;h=BS(1);h.data[0]=250;k[1]=h;CL(i,g,B(552),j);f=c.bH.u;g=new L9;g.oZ=c;h=R(C,1);h.data[0]=e;CL(f,g,B(553),h);}}
var Lk=F(FM);
function ADw(a,b,c,d){var e,f,g;e=0;f=d.t;a:{while(true){if(b>f){b=e;break a;}g=EY(d,a.N);C8(d,a.N,b);e=a.cp.c(b,c,d);if(e>=0)break;C8(d,a.N,g);b=b+1|0;}}return b;}
function ALa(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=EY(e,a.N);C8(e,a.N,c);f=a.cp.c(c,d,e);if(f>=0)break;C8(e,a.N,g);c=c+(-1)|0;}}return c;}
function AB3(a){return null;}
function Ss(){C.call(this);this.lq=null;}
function AHI(a,b){var c,d,e,f;c=a.lq;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.mE;c=Bw();b=Cj(b);e=new M;O(e);G(G(e,B(554)),b);Bq(c,N(e));b=Bw();f=d.length;c=new M;O(c);T(G(c,B(555)),f);Bq(b,N(c));}
function Su(){var a=this;C.call(a);a.px=null;a.py=null;}
function AGG(a,b){var c,d;c=a.px;d=a.py;b.arrayBuffer().then(Be(c,"f"),Be(d,"f"));}
function Lr(){var a=this;C.call(a);a.od=null;a.oc=null;}
function Qv(){var a=this;C.call(a);a.kq=null;a.kr=null;}
function AD7(a,b){var c;c=a.kq;JI(a.kr,If(c,b.size));}
function Qy(){C.call(this);this.qw=null;}
function AAp(a,b){var c;c=a.qw;Bq(J4(),$rt_str(b.message));JI(c,0);}
function RW(){var a=this;C.call(a);a.cY=null;a.hN=null;a.i9=null;a.je=null;a.lR=0;a.g$=0;a.ci=0;a.t=0;a.dl=0;a.ha=0;a.ei=0;a.cK=0;a.tn=0;a.gd=0;a.hF=0;}
function BE(a,b,c){a.hN.data[b]=c;}
function CX(a,b){return a.hN.data[b];}
function HM(a){return Pl(a,0);}
function Pl(a,b){Pb(a,b);return a.cY.data[(b*2|0)+1|0];}
function C8(a,b,c){a.cY.data[b*2|0]=c;}
function Id(a,b,c){a.cY.data[(b*2|0)+1|0]=c;}
function EY(a,b){return a.cY.data[b*2|0];}
function Hf(a,b){return a.cY.data[(b*2|0)+1|0];}
function Yj(a){return M6(a,0);}
function M6(a,b){Pb(a,b);return a.cY.data[b*2|0];}
function Lc(a,b){return a.i9.data[b];}
function DN(a,b,c){a.i9.data[b]=c;}
function Pb(a,b){var c;if(!a.g$){c=new DX;U(c);J(c);}if(b>=0&&b<a.lR)return;c=new Bv;Ba(c,CZ(b));J(c);}
function Ue(a,b,c,d){a.g$=0;a.hF=2;Ie(a.cY,(-1));Ie(a.hN,(-1));if(b!==null)a.je=b;if(c>=0){a.ci=c;a.t=d;}a.dl=a.ci;}
function Wz(a){return a.hF;}
function UW(a){return a.ha;}
function Rq(){C.call(this);this.sc=null;}
function AFC(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function PW(){S.call(this);this.sG=null;}
function AJU(a,b){return Ch(b)!=2?0:1;}
function K7(){S.call(this);this.sR=null;}
function AA6(a,b){return Ch(b)!=1?0:1;}
function Pi(){S.call(this);this.sl=null;}
function AAU(a,b){return OB(b);}
function Ph(){S.call(this);this.r5=null;}
function ADt(a,b){return 0;}
function Ts(){S.call(this);this.tt=null;}
function AEM(a,b){return !Ch(b)?0:1;}
function MY(){S.call(this);this.s3=null;}
function AJX(a,b){return Ch(b)!=9?0:1;}
function Ma(){S.call(this);this.t0=null;}
function AG3(a,b){return FD(b);}
function Op(){S.call(this);this.sI=null;}
function AIj(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function KY(){S.call(this);this.ri=null;}
function AKS(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FD(b);}return b;}
function K5(){S.call(this);this.s6=null;}
function ACx(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FD(b);}return b;}
function LX(){S.call(this);this.tq=null;}
function AJ$(a,b){a:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Nn(){S.call(this);this.tJ=null;}
function AF3(a,b){return H9(b);}
function Nv(){S.call(this);this.sn=null;}
function AHU(a,b){return Nw(b);}
function QJ(){S.call(this);this.ta=null;}
function AJO(a,b){return Ch(b)!=3?0:1;}
function Py(){S.call(this);this.ro=null;}
function AKD(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=FD(b);}return b;}
function Le(){S.call(this);this.t9=null;}
function ACj(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=FD(b);}return b;}
function Kv(){S.call(this);this.jq=0;}
function ANr(a){var b=new Kv();X0(b,a);return b;}
function X0(a,b){Bj(a);a.jq=b;}
function AG5(a,b){return a.U^(a.jq!=Ch(b&65535)?0:1);}
var Pc=F(Kv);
function AI8(a,b){return a.U^(!(a.jq>>Ch(b&65535)&1)?0:1);}
function NO(){C.call(this);this.rf=null;}
function AFE(a){var b,c;b=a.rf;c=b.od;b=b.oc;c.Am(b.gM,b.ip,null);}
function L$(){C.call(this);this.pL=null;}
function AGT(a,b){var c,d;c=a.pL;if(!c.gy){b=b.data;c.e.g=XE(D6(b[0]),E6(b[1]));c.gx=1;d=IX(E1(),c.d0);b=new M;O(b);G(GM(G(b,B(556)),d),B(222));$rt_globals.console.info($rt_ustr(N(b)));}}
function L9(){C.call(this);this.oZ=null;}
function ADi(a,b){var c,d,e,f,g,h;c=b.data;d=a.oZ;e=(D6(c[2])).data[0];if(e!=1)GE(d,b);else{d.gy=1;f=D6(c[0]);g=E6(c[1]);b=d.e;b.g=Yr(b.g,f,g,d.gx);SO(d,Y2(e));FI(d.bH.u,APj);Fj(d.bH.u);h=IX(E1(),d.d0);b=new M;O(b);G(GM(G(b,B(557)),h),B(222));$rt_globals.console.info($rt_ustr(N(b)));Tj(d);Iz(d);}}
function L8(){C.call(this);this.kF=null;}
function AJ3(a,b){GE(a.kF,b);}
var Vp=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker",6,"menu"]);
$rt_metadata([C,0,0,[],0,3,0,0,["d1",ANO(PR),"bI",ANN(ABC)],O7,0,C,[],0,3,0,0,0,Ln,0,C,[],3,3,0,0,0,KT,0,C,[],3,3,0,0,0,SY,0,C,[Ln,KT],0,3,0,0,["bI",ANN(AFD)],VM,0,C,[],4,0,0,0,0,Vy,0,C,[],4,3,0,0,0,CT,0,C,[],3,3,0,0,0,Cy,0,C,[],3,3,0,0,0,Hy,0,C,[],3,3,0,0,0,Bx,"String",1,C,[CT,Cy,Hy],0,3,0,En,["bI",ANN(ABB),"d1",ANO(Br),"gs",ANO(ADv)],FN,0,C,[],0,3,0,0,0,Ek,0,FN,[],0,3,0,0,0,Gj,0,Ek,[],0,3,0,0,0,WO,0,Gj,[],0,3,0,0,0,Dv,0,C,[CT],1,3,0,0,0,Eh,0,Dv,[Cy],0,3,0,0,["gs",ANO(AFi)],Fy,0,C,[CT,Hy],0,0,0,0,["gl",ANO(Ic),
"bI",ANN(N)],GO,0,C,[],3,3,0,0,0,M,0,Fy,[GO],0,3,0,0,["jE",ANR(AFg),"iS",ANQ(ACF),"bI",ANN(Dt),"gl",ANO(AFm),"j9",ANP(AFK)],D3,0,Gj,[],0,3,0,0,0,X1,0,D3,[],0,3,0,0,0,WF,0,D3,[],0,3,0,0,0,DD,0,FN,[],0,3,0,0,0,Bh,0,DD,[],0,3,0,0,0,QH,0,C,[],3,3,0,0,0,CO,0,C,[],3,3,0,0,0,MW,0,C,[],3,0,0,0,0,Hj,0,C,[QH,CO,MW],1,3,0,0,["gN",ANN(HC)],OY,0,Hj,[],0,3,0,0,0,U8,0,C,[],0,3,0,0,0,Y$,0,C,[],4,3,0,0,0,Bd,0,C,[],3,3,0,0,0,QQ,0,C,[Bd],0,3,0,0,0,BA,0,C,[],3,3,0,0,0,Xl,0,C,[BA],1,3,0,0,0,Va,0,C,[],3,3,0,0,0,VI,0,C,[BA],1,3,0,
0,0,BQ,0,C,[BA],3,3,0,0,0,QR,0,C,[BQ],0,3,0,0,["W",ANO(Z6)],QP,0,C,[BQ],0,3,0,0,["W",ANO(AJP)],YE,0,C,[],4,3,0,0,0,Wj,0,C,[],0,3,0,0,0,Z0,0,C,[],4,3,0,0,0,Lu,0,C,[BQ],0,3,0,0,["W",ANO(AGR)],SB,0,C,[BA],1,3,0,0,0,J_,0,C,[],0,3,0,0,0,Il,0,C,[BA],3,3,0,0,0,Wx,0,C,[Il],1,3,0,0,["Bh",ANO(AKY),"AN",ANN(ABT)],W0,0,C,[BA],1,3,0,0,0]);
$rt_metadata([E$,0,C,[],3,3,0,0,0,PV,0,C,[E$],0,3,0,0,0,CM,0,C,[Cy],0,3,0,0,0,KM,0,C,[BA],3,3,0,0,0,PD,0,C,[KM],3,3,0,0,0,DV,0,C,[BA],3,3,0,0,0,Y9,0,C,[PD,DV],3,3,0,0,0,FR,0,Bh,[],0,3,0,0,0,LY,0,C,[BQ],0,3,0,0,["W",ANO(AHL)],Nm,0,C,[DV],3,3,0,0,0,OP,0,C,[DV],3,3,0,0,0,OH,0,C,[DV],3,3,0,0,0,QB,0,C,[DV],3,3,0,0,0,TL,0,C,[DV],3,3,0,0,0,RE,0,C,[DV,Nm,OP,OH,QB,TL],3,3,0,0,0,MI,0,C,[],3,3,0,0,0,U_,0,C,[BA,RE,MI,Il],1,3,0,0,["zB",ANP(AFG),"Bm",ANP(AF0),"um",ANO(AAX),"yo",ANQ(AGX),"wR",ANO(AJ7),"wW",ANN(ABV),"vB",ANQ(AAn)],Bv,
0,Bh,[],0,3,0,0,0,Gg,0,Bv,[],0,3,0,0,0,V9,0,C,[],0,3,0,0,0,MH,0,C,[],3,3,0,0,0,PP,0,C,[MH],0,3,0,0,0,Cv,0,C,[],3,3,0,0,0,Oa,0,C,[Cv],0,3,0,0,0,Bg,0,C,[],3,3,0,0,0,WC,0,C,[Bg],0,3,0,0,0,WU,0,C,[BA],1,3,0,0,0,OM,0,C,[BA],3,3,0,0,0,Sp,0,C,[OM],0,3,0,0,["yq",ANO(AEy)],Sk,0,C,[Bg],0,3,0,0,0,HR,0,C,[],1,3,0,0,0,NH,0,HR,[],0,3,0,0,0,N1,0,C,[BA],3,3,0,0,0,Sl,0,C,[N1],0,3,0,0,["qF",ANP(ACX)],Zd,0,C,[BA],1,3,0,0,0,Cb,0,C,[BA],3,3,0,0,0,Si,0,C,[Cb],0,3,0,0,["bL",ANO(AHV)],Jq,0,C,[],3,3,0,0,0,Eb,0,C,[Jq],1,3,0,0,0,D0,0,
C,[],3,3,0,0,0,T$,0,C,[Jq],3,3,0,0,0,Lm,0,C,[T$],3,3,0,0,0,VJ,0,Eb,[D0,CT,Lm],0,3,0,0,0,Sj,0,C,[BQ],0,3,0,0,["W",ANO(AIV)],Cs,0,C,[],3,3,0,0,["c5",ANO(AJQ),"dL",ANO(ADN),"dt",ANR(ADG),"f0",ANQ(Z4),"fp",ANO(AFz),"gj",ANP(ALm),"jv",ANN(ACU),"nx",ANN(ACo),"iU",ANN(AGO)],Nu,0,C,[],0,3,0,0,0,JD,0,C,[],1,3,0,0,0,YM,0,JD,[],0,3,0,0,0,C3,0,C,[CO],1,3,0,0,0,HQ,0,C,[E$],0,3,0,0,["kh",ANP(ED)]]);
$rt_metadata([S6,0,C,[Cb],0,3,0,0,["bL",ANO(AHn)],S7,0,C,[Cb],0,3,0,0,["bL",ANO(AHy)],S8,0,C,[Cb],0,3,0,0,["bL",ANO(AGe)],S9,0,C,[Cb],0,3,0,0,["bL",ANO(AFH)],S$,0,C,[Cb],0,3,0,0,["bL",ANO(AF4)],S_,0,C,[Cb],0,3,0,0,["bL",ANO(AH7)],Ta,0,C,[Cb],0,3,0,0,["bL",ANO(AEh)],Tb,0,C,[Cb],0,3,0,0,["bL",ANO(AK5)],Tc,0,C,[Cb],0,3,0,0,["bL",ANO(ADC)],Td,0,C,[Cb],0,3,0,0,["bL",ANO(AI2)],ZP,0,C,[Cb],0,3,0,0,["bL",ANO(AKI)],ZQ,0,C,[Cb],0,3,0,0,["bL",ANO(AFU)],ZR,0,C,[Cb],0,3,0,0,["bL",ANO(AGh)],ZS,0,C,[Cb],0,3,0,0,["bL",ANO(AHO)],Q$,
0,C,[],3,3,0,0,0,Rk,0,C,[Q$],0,3,0,0,0,Rj,0,C,[Cb],0,3,0,0,["bL",ANO(AE$)],KN,0,C,[],0,3,0,0,0,N9,0,C,[CO],0,3,0,0,0,Bm,0,C,[],0,3,0,0,["bI",ANN(Z7)],YL,0,C,[],0,3,0,0,0,Vw,0,C,[],3,3,0,0,0,N0,0,C,[],0,3,0,0,0,J1,0,C,[],0,3,0,0,0,DK,0,J1,[],0,3,0,0,0,SM,0,DK,[],0,3,0,0,0,Ea,0,DK,[],0,3,0,0,0,Ov,0,DK,[],0,3,0,0,0,RS,0,Ea,[],0,3,0,0,0,X6,0,Ea,[],0,3,0,0,0,VK,0,Ea,[],0,3,0,0,0,Pk,0,C,[BA],3,3,0,0,0,ZY,0,C,[Pk],3,3,0,0,0,NY,0,C,[CO],0,3,0,0,0,NZ,0,C,[],0,3,0,0,0,Cd,0,C,[Cy,CT],1,3,0,0,["d1",ANO(AAP),"gs",ANO(AFf)],F0,
0,Cd,[],12,3,0,Vt,0,JL,0,C,[],4,3,0,0,0,Kw,0,C,[],3,3,0,0,0,Ql,0,C,[Kw],3,3,0,0,0,Ru,0,C,[],3,3,0,0,0,FE,0,C,[Ql,Ru],1,3,0,0,0,H5,0,FE,[],0,3,0,0,0,WD,0,H5,[],0,3,0,0,0,Fs,0,FE,[],1,3,0,0,0,JK,0,Fs,[],0,3,0,0,["io",ANQ(AE3)],Dz,0,Cd,[],12,3,0,AJZ,0,HZ,0,C,[Cy],1,3,0,0,0,KA,0,HZ,[],0,3,0,Wr,0,IU,0,C,[],32,0,0,U$,0]);
$rt_metadata([Nd,0,C,[],0,3,0,0,0,F3,0,Cd,[],12,0,0,XD,0,Fw,0,Cd,[],12,0,0,XF,0,Sq,0,DD,[],0,3,0,0,0,BC,0,Bh,[],0,3,0,0,0,YD,0,BC,[],0,3,0,0,0,Kz,0,C,[BA],3,3,0,0,0,T6,0,C,[Kz],0,3,0,0,["W",ANO(AIA)],T8,0,C,[Kz],0,3,0,0,["W",ANO(ABw)],WY,0,C,[],4,3,0,0,0,Vk,0,C,[],0,3,0,0,0,F9,0,C,[],1,3,0,0,0,Pt,0,C,[],3,3,0,0,0,Jv,0,F9,[Cy,GO,Hy,Pt],1,3,0,0,0,In,0,F9,[Cy],1,3,0,0,0,GD,0,C,[],0,3,0,Gf,0,Ls,0,C3,[],0,3,0,0,["di",ANO(AJ8),"cb",ANN(AFQ),"cu",ANP(AHF)],ZH,0,C,[],0,3,0,0,0,Xe,0,C,[BA],1,3,0,0,0,Iv,0,Jv,[],1,0,0,
0,0,WZ,0,Iv,[],0,0,0,0,0,Ji,0,C,[],1,3,0,0,0,J8,0,C,[],0,3,0,0,0,Vh,0,C,[],0,3,0,0,0,JJ,0,C,[BA],3,3,0,0,0,LC,0,C,[JJ],0,3,0,0,["W",ANO(ADo)],LB,0,C,[JJ],0,3,0,0,["W",ANO(AGW)],LA,0,C,[BQ],0,3,0,0,["W",ANO(AHt)],Lz,0,C,[BQ],0,3,0,0,["W",ANO(ABZ)],Qe,0,C,[Cv],0,3,0,0,["cy",ANO(AG$)],Qd,0,C,[Cv],0,3,0,0,["cy",ANO(AA7)],Qc,0,C,[Cv],0,3,0,0,["cy",ANO(AEn)],Qb,0,C,[Cv],0,3,0,0,["cy",ANO(AEj)],Qa,0,C,[Cv],0,3,0,0,["cy",ANO(AEP)],P_,0,C,[Cv],0,3,0,0,["cy",ANO(ABe)],P$,0,C,[Cv],0,3,0,0,["cy",ANO(ACB)],P9,0,C,[Cv],0,
3,0,0,["cy",ANO(AHm)],P8,0,C,[Cv],0,3,0,0,["cy",ANO(AKn)],P7,0,C,[Cv],0,3,0,0,["cy",ANO(ALb)],Ot,0,C,[Cv],0,3,0,0,["cy",ANO(AFA)],Ge,0,C,[],0,3,0,0,0,M2,0,Ge,[],0,3,0,0,0,YU,0,C,[],0,3,0,0,0,KK,0,Ge,[],0,3,0,0,0,Ra,0,C,[BA],3,3,0,0,0,LR,0,C,[Ra],0,3,0,0,["BL",ANO(AFs)],RL,0,C,[Bd],0,3,0,0,["n",ANO(SP)],Ty,0,In,[],0,0,0,0,0,XW,0,C,[BA],1,3,0,0,0,IQ,0,C,[],4,3,0,AEO,0]);
$rt_metadata([SH,0,C,[],3,3,0,0,0,PS,0,C,[SH],0,3,0,0,["bI",ANN(ACk)],Rp,0,C,[],3,3,0,0,0,Jt,"JsFileHandle",5,C,[Rp],0,3,0,0,["bI",ANN(AE8)],Je,0,Ji,[],1,3,0,0,0,Ns,0,Je,[],0,3,0,0,0,Hc,0,DD,[],0,3,0,0,0,Cm,0,C3,[],0,3,0,0,["di",ANO(AKF),"cb",ANN(GW),"cu",ANP(Sn)],I1,"DemoEdit0",6,Cm,[],0,3,0,0,["di",ANO(AB6),"cb",ANN(AEx),"mD",ANN(AHH),"cu",ANP(ADT)],Vb,0,C3,[],0,3,0,0,["di",ANO(AAw),"cb",ANN(AC9),"cu",ANP(ALd)],SJ,"ToolbarDemo",8,Cm,[Cs],0,3,0,0,["f0",ANQ(Z4),"gj",ANP(ALm),"jv",ANN(ACU),"nx",ANN(ACo),"iU",
ANN(AGO),"cu",ANP(AAg),"cb",ANN(ADp),"dL",ANO(AH2),"dt",ANR(AJW),"fp",ANO(ABy),"c5",ANO(AD8),"di",ANO(ABK)],TY,"FindUsagesDemo",8,Cm,[Cs],0,3,0,0,["f0",ANQ(Z4),"gj",ANP(ALm),"jv",ANN(ACU),"nx",ANN(ACo),"iU",ANN(AGO),"cu",ANP(AKG),"cb",ANN(AHD),"dL",ANO(AIF),"dt",ANR(AFV),"fp",ANO(AH4),"c5",ANO(AEZ)],Ni,0,C3,[],0,3,0,0,["di",ANO(AHM),"cb",ANN(AAN),"cu",ANP(AAJ)],Oz,"SelectFileTest",6,Cm,[Cs],0,3,0,0,["dL",ANO(ADN),"dt",ANR(ADG),"f0",ANQ(Z4),"fp",ANO(AFz),"gj",ANP(ALm),"jv",ANN(ACU),"nx",ANN(ACo),"iU",ANN(AGO),
"c5",ANO(AHK)],ZB,"WorkerTest",7,Cm,[],0,3,0,0,0,Tr,"RenderTexture",6,Cm,[],0,3,0,0,["di",ANO(AFj),"cb",ANN(AAq),"cu",ANP(AKm)],MT,0,C3,[],0,3,0,0,["cb",ANN(AKW),"cu",ANP(AAs),"di",ANO(ACn)],Hh,"ClipboardTest",6,Cm,[Cs],0,3,0,0,["dL",ANO(ADN),"f0",ANQ(Z4),"nx",ANN(ACo),"iU",ANN(AGO),"c5",ANO(AFu),"dt",ANR(AEq),"gj",ANP(ACA),"jv",ANN(AEY),"fp",ANO(AAj)],OS,"DemoEdit1",6,I1,[],0,3,0,0,["mD",ANN(AEI)],Gl,0,C,[],3,3,0,0,0,KE,0,C,[Gl,CT],0,3,0,0,["d1",ANO(ACZ)],EB,0,KE,[],0,0,0,0,0,Zm,0,C,[],0,3,0,0,0,Rn,0,C,[],
3,3,0,0,0,WH,0,C,[CO],0,3,0,0,0,Sz,0,C,[Cs],0,0,0,0,["nx",ANN(AIr),"iU",ANN(AGA),"f0",ANQ(ADz),"dt",ANR(ADj),"fp",ANO(AKM),"dL",ANO(AIy),"c5",ANO(ACr),"gj",ANP(AGd),"jv",ANN(AAM)],B_,0,C,[],0,3,0,0,0,Cl,0,C,[],3,3,0,D_,0,Hk,0,C,[],0,3,0,0,0,J6,0,Hk,[],0,3,0,0,0,W1,0,C,[],0,3,0,0,0,QN,0,C,[Cs],0,0,0,0,["jv",ANN(ACU),"nx",ANN(ACo),"dL",ANO(AHP),"f0",ANQ(AED),"dt",ANR(AKf),"c5",ANO(AGU),"fp",ANO(AKu),"gj",ANP(AA9),"iU",ANN(AIQ)],Hw,0,B_,[],0,3,0,0,0,VU,0,C,[],0,3,0,0,0,U9,0,C,[],0,3,0,0,0,Qf,0,C,[Bg],0,3,0,0,["s",
ANN(AJY)],Qh,0,C,[Bg],0,3,0,0,["s",ANN(AIf)],DF,0,C,[],0,3,0,0,0,Xs,0,C,[],0,3,0,0,0,Db,0,C,[],3,3,0,C1,0,Xn,0,C,[CO],0,3,0,0,0,Vs,0,C,[],3,3,0,0,0,YH,0,C,[],3,3,0,0,0,SZ,0,C,[Cs],0,0,0,0,["c5",ANO(AJQ),"fp",ANO(AFz),"gj",ANP(ALm),"jv",ANN(ACU),"nx",ANN(ACo),"iU",ANN(AGO),"f0",ANQ(ACg),"dt",ANR(AC$),"dL",ANO(AC5)],Xm,0,C,[],0,3,0,0,0,OW,0,C,[Bd],0,3,0,0,["n",ANO(AAI)],OV,0,C,[Bd],0,3,0,0,["n",ANO(AK0)],OU,0,C,[Bd],0,3,0,0,["n",ANO(ACI)],OT,0,C,[Bd],0,3,0,0,["n",ANO(AG0)],NI,0,C,[Cs],0,3,0,0,["dL",ANO(ADN),"dt",
ANR(ADG),"f0",ANQ(Z4),"fp",ANO(AFz),"gj",ANP(ALm),"jv",ANN(ACU),"nx",ANN(ACo),"iU",ANN(AGO),"c5",ANO(AAf)]]);
$rt_metadata([OR,0,C,[Bd],0,3,0,0,["n",ANO(AGf)],OQ,0,C,[Bd],0,3,0,0,["n",ANO(AHX)],QL,0,C,[Cs],0,0,0,0,["c5",ANO(AJQ),"f0",ANQ(Z4),"fp",ANO(AFz),"gj",ANP(ALm),"jv",ANN(ACU),"nx",ANN(ACo),"iU",ANN(AGO),"dL",ANO(AJy),"dt",ANR(AHs)],Ow,0,C,[Cs],0,0,0,0,["c5",ANO(AJQ),"fp",ANO(AFz),"gj",ANP(ALm),"jv",ANN(ACU),"nx",ANN(ACo),"iU",ANN(AGO),"f0",ANQ(AAA),"dt",ANR(AIY),"dL",ANO(ABg)],J3,0,C,[],0,3,0,0,0,XM,0,C,[],4,3,0,0,0,Hp,0,Bh,[],0,3,0,0,0,MQ,0,C,[BA],3,3,0,0,0,Nb,0,C,[MQ],0,3,0,0,["qF",ANP(ADL)],MR,0,C,[BA],3,
3,0,0,0,M_,0,C,[MR],0,3,0,0,["qF",ANP(AEH)],VN,0,C,[],0,3,0,0,0,U3,0,C,[BA],3,3,0,0,0,L0,0,C,[Rn],0,3,0,0,0,Ju,0,C,[],0,3,0,0,0,Sy,0,C,[],0,3,0,0,0,UJ,0,C,[],0,3,0,0,0,Es,0,C,[CO],0,0,0,0,0,SL,0,C,[],3,3,0,0,0,Gv,0,C,[SL],3,3,0,0,0,DA,0,C,[Gv],1,3,0,0,0,Lb,0,C,[Gv],3,3,0,0,0,Fl,0,DA,[Lb],1,3,0,0,0,Ha,0,C,[],3,3,0,0,0,L2,0,Fl,[D0,CT,Ha],0,3,0,0,["oi",ANO(BK),"ln",ANN(AHa)],RC,0,C,[Bd],0,3,0,0,0,RB,0,C,[Bd],0,3,0,0,["n",ANO(AIG)],Rx,0,C,[Bd],0,3,0,0,["n",ANO(AGY)],Rw,0,C,[Bg],0,3,0,0,["s",ANN(AID)],Rz,0,C,[Bg],
0,3,0,0,["s",ANN(AEv)],Ry,0,C,[Bg],0,3,0,0,["s",ANN(AGn)],RT,0,C,[Bg],0,3,0,0,["s",ANN(AH_)],EU,0,Cd,[],12,3,0,AAt,0,H7,0,C,[CO],0,3,0,0,["gN",ANN(X$)],QG,0,C,[],0,3,0,0,0,HH,0,C,[],3,3,0,0,0,GR,0,C,[],3,3,0,0,0,TI,0,C,[GR],0,3,0,0,["lA",ANQ(AIs)],TJ,0,C,[GR],0,3,0,0,0,TB,0,C,[],0,3,0,0,0,Xr,0,C,[],0,3,0,0,0,YR,0,C,[],0,0,0,0,0,Uz,0,C,[Bd],0,3,0,0,["n",ANO(AHZ)],Xw,0,C,[],0,3,0,0,0,SR,0,C,[Bd],0,3,0,0,["n",ANO(AA_)],VZ,0,C,[],0,3,0,0,0,IG,0,C,[],0,3,0,0,0,Zp,0,C,[],0,3,0,0,0,Ev,0,C,[],0,3,0,0,0,KB,0,Ev,[],0,
3,0,0,0]);
$rt_metadata([KX,0,Ev,[],0,3,0,0,0,N5,0,Ev,[],0,3,0,0,0,Sw,0,C,[],3,3,0,0,0,OZ,0,C,[],3,3,0,0,0,IR,0,C,[Cy],0,3,0,0,0,Ja,0,Fs,[],0,3,0,0,["io",ANQ(ADk)],Zu,0,C,[],0,3,0,0,0,Ub,0,C,[],0,3,0,0,0,ZO,0,C,[],0,3,0,0,0,W3,0,C,[],0,3,0,0,0,Zf,0,C,[],3,3,0,0,0,CC,0,C,[BA],1,3,0,0,0,XR,0,CC,[],1,3,0,0,0,Ys,0,CC,[],1,3,0,0,0,VR,0,CC,[],1,3,0,0,0,V_,0,CC,[],1,3,0,0,0,YS,0,CC,[],1,3,0,0,0,Xc,0,Eb,[D0,CT],0,3,0,0,0,Ck,0,C,[],0,3,0,0,0,Sb,0,C,[Bg],0,3,0,0,["s",ANN(AA8)],Sc,0,C,[Bd],0,3,0,0,["n",ANO(AKi)],Nh,0,C,[],3,3,0,
0,0,Sa,0,C,[Nh],0,3,0,0,0,WE,0,C,[BA],4,3,0,0,0,Rc,0,C,[Bg],0,3,0,0,["s",ANN(AFZ)],YJ,0,C,[],3,3,0,0,0,B0,0,C,[],0,3,0,0,0,Hv,0,C,[],0,3,0,0,0,Go,0,C,[],4,3,0,0,0,IT,0,C,[],0,3,0,0,0,Zy,0,C,[Cy],0,3,0,0,["d1",ANO(AI5),"gs",ANO(ABI)],TZ,0,C,[E$],0,3,0,0,["kh",ANP(AD6)],T1,0,C,[E$],0,3,0,0,["kh",ANP(AFp)],Ew,0,C,[],0,3,0,0,0,UB,0,Bh,[],0,3,0,0,0,Gb,0,Fl,[Ha],1,0,0,0,0,Ug,0,Gb,[Ha],0,0,0,0,["ln",ANN(ADg),"oi",ANO(AKB)],UV,0,C,[],0,3,0,0,["bI",ANN(AEb)],MZ,0,C,[Gv],3,3,0,0,0,Eg,0,DA,[MZ],1,3,0,0,0,IJ,0,Eg,[],1,
0,0,0,0,Sh,0,IJ,[],0,0,0,0,0,JQ,0,Eb,[],1,0,0,0,0,Sf,0,JQ,[],0,0,0,0,0,Sg,0,Gb,[],0,0,0,0,0,D1,0,C,[],3,3,0,0,0,Sd,0,C,[D1],0,0,0,0,0,Nq,0,C,[D1],3,3,0,0,0,Se,0,C,[Nq],0,0,0,0,0,Uy,0,C,[E$],0,3,0,0,0]);
$rt_metadata([LL,0,C,[D1],0,0,0,0,0,Wq,0,C,[],4,3,0,0,0,SC,0,DA,[],0,0,0,0,["hA",ANN(AIH)],WA,0,C,[BA],1,3,0,0,0,JN,0,C,[],0,3,0,0,0,I6,0,C,[Gl,D0],0,0,0,0,0,G1,0,I6,[],0,0,0,0,0,R6,0,C,[Bg],0,3,0,0,["s",ANN(ADH)],Pu,0,C,[Bd],0,3,0,0,["n",ANO(AKp)],Jp,0,C,[],0,3,0,0,0,Jj,0,C,[],3,3,0,0,0,SA,0,C,[Jj],0,3,0,0,["kj",ANN(AKQ)],B9,0,Cd,[],12,3,0,VO,0,H4,0,C,[],0,3,0,0,0,EC,0,C,[],0,3,0,0,0,OG,0,C,[Bg],0,3,0,0,["s",ANN(AJ5)],M8,0,C,[D1],0,0,0,0,["hT",ANN(ABS),"gF",ANN(AGM)],Ly,0,C,[CO],0,3,0,0,0,Tx,0,C,[CO],0,3,0,
0,0,Ne,0,C,[Bg],0,3,0,0,0,E9,0,Hc,[],0,3,0,0,0,TF,0,Ek,[],0,3,0,0,0,Hn,0,Bh,[],0,3,0,0,0,Kt,0,Dv,[Cy],0,3,0,0,0,EX,0,C,[],0,0,0,0,0,Iy,0,C,[],4,3,0,0,0,R_,0,C,[],0,3,0,0,0,Kn,0,C,[],1,3,0,0,0,WR,0,CC,[],1,3,0,0,0,Q3,0,C,[],0,3,0,0,0,DX,0,Bh,[],0,3,0,0,0,X3,0,Ek,[],0,3,0,0,0,Om,0,C,[Bd],0,3,0,0,["n",ANO(AJ6)],N3,0,Eg,[],0,0,0,0,0,Q6,0,C,[Bd],0,3,0,0,["n",ANO(AAF)],U0,0,C,[],0,3,0,0,0,IW,0,Kn,[],1,3,0,0,0,Qx,0,IW,[],0,3,0,0,0,O9,0,C,[Bd],0,3,0,0,["n",ANO(ADR)],It,0,Dv,[Cy],0,3,0,0,0,JT,0,C,[],4,3,0,0,0,Pn,0,Dv,
[Cy],0,3,0,0,0,Fv,0,Bh,[],0,3,0,0,0,LQ,0,C,[],0,3,0,0,0,UF,0,C,[D1],0,0,0,0,0,U2,0,C,[],1,3,0,0,0,Tt,0,C,[],3,3,0,0,0,Vj,0,C,[],0,3,0,0,0,Y4,0,C,[Cy],0,3,0,0,["d1",ANO(UY),"gs",ANO(AHT)],HF,0,Fv,[],0,3,0,0,0]);
$rt_metadata([GN,0,Bh,[],0,3,0,0,0,Kc,0,Bh,[],0,3,0,0,0,UK,0,C,[],0,3,0,0,0,Ym,0,Eg,[],0,0,0,0,0,Nf,0,DA,[],0,0,0,0,["hA",ANN(ACY)],F6,0,C,[],0,0,0,0,["hT",ANN(Lv)],Rr,0,F6,[D1],0,0,0,0,0,OC,0,F6,[D1],0,0,0,0,["gF",ANN(AIo)],TU,0,C,[Bd],0,3,0,0,["n",ANO(AEC)],TX,0,C,[Bd],0,3,0,0,["n",ANO(AKN)],Rb,0,C,[Bg],0,3,0,0,["s",ANN(AA5)],LS,0,C,[Bg],0,3,0,0,["s",ANN(ADx)],NW,0,C,[Bd],0,3,0,0,["n",ANO(ABL)],QI,0,C,[Bd],0,3,0,0,["n",ANO(ADK)],KC,0,Bh,[],0,3,0,0,0,Mb,0,C,[Bd],0,3,0,0,["n",ANO(ALg)],Q4,0,C,[Bg],0,3,0,0,["s",
ANN(AJu)],Oc,0,C,[Bd],0,3,0,0,["n",ANO(AHl)],Lg,0,C,[Bd],0,3,0,0,["n",ANO(ADX)],Sr,0,C,[Bd],0,3,0,0,["n",ANO(AK2)],Y7,0,C,[],0,3,0,0,0,Zl,0,C,[Cv],0,3,0,0,0,Pf,0,C,[Bd],0,3,0,0,["n",ANO(AKr)],P2,0,C,[Bg],0,3,0,0,["s",ANN(AEs)],Rt,0,C,[BQ],0,3,0,0,["W",ANO(AKE)],Os,0,C,[BQ],0,3,0,0,["W",ANO(AAd)],T9,0,C,[Bd],0,3,0,0,["n",ANO(AJf)],TW,0,C,[BQ],0,3,0,0,["W",ANO(AIT)],TV,0,C,[BQ],0,3,0,0,["W",ANO(ACw)],Tn,0,C,[BQ],0,3,0,0,["W",ANO(ADY)],Tm,0,C,[BQ],0,3,0,0,["W",ANO(AEF)],Uq,0,C,[Bg],0,3,0,0,["s",ANN(AFk)],Un,0,
C,[Bg],0,3,0,0,["s",ANN(AJq)],Uo,0,C,[Bg],0,3,0,0,["s",ANN(AIk)],Up,0,C,[Bg],0,3,0,0,["s",ANN(AFF)],Th,0,C,[Bg],0,3,0,0,["s",ANN(AA0)],Tg,0,C,[Bg],0,3,0,0,["s",ANN(AKT)],Ti,0,C,[Bg],0,3,0,0,["s",ANN(ADc)],KO,0,C,[Bg],0,3,0,0,["s",ANN(AAK)],LI,0,C,[GR],0,3,0,0,["lA",ANQ(AKg)],K8,0,C,[BQ],0,3,0,0,["W",ANO(ALl)],TP,0,C,[Cb],0,3,0,0,["bL",ANO(ADP)],PO,0,C,[],3,3,0,0,0,K4,0,C,[PO],0,3,0,0,0,Ua,0,C,[Bg],0,3,0,0,["s",ANN(ACm)],Uc,0,C,[Bg],0,3,0,0,["s",ANN(AIN)],T3,0,C,[Bg],0,3,0,0,["s",ANN(AFY)],T2,0,C,[Bg],0,3,0,
0,["s",ANN(AEQ)],M3,0,C,[Jj],0,3,0,0,["kj",ANN(ACq)],S1,0,C,[Bg],0,3,0,0,["s",ANN(AEG)]]);
$rt_metadata([S0,0,C,[Bg],0,3,0,0,["s",ANN(AHB)],S3,0,C,[Bg],0,3,0,0,["s",ANN(AI1)],S2,0,C,[Bg],0,3,0,0,["s",ANN(AFx)],N2,0,Bh,[],0,3,0,0,0,TM,0,Bh,[],0,3,0,0,0,RZ,0,E9,[],0,3,0,0,0,NU,0,E9,[],0,3,0,0,0,RR,0,C,[],0,3,0,0,0,La,0,C,[Bd],0,3,0,0,["n",ANO(ACL)],Ul,0,C,[Bd],0,3,0,0,["n",ANO(AFW)],Um,0,C,[Bd],0,3,0,0,["n",ANO(AJ2)],S5,0,C,[],0,3,0,0,0,FH,0,Cd,[],12,0,0,RG,0,St,0,C,[Bd],0,3,0,0,["n",ANO(ABM)],Mc,0,C,[],32,0,0,ANn,0,NG,0,C,[Bd],0,3,0,0,["n",ANO(AE_)],O8,0,C,[Bd],0,3,0,0,["n",ANO(ACG)],NV,0,C,[BQ],0,
3,0,0,["W",ANO(ACJ)],Hz,0,C,[BA],3,3,0,0,0,K3,0,C,[Hz],0,3,0,0,["nD",ANN(AEL)],KL,0,C,[Hz],0,3,0,0,["nD",ANN(Z9)],TT,0,C,[BQ],0,3,0,0,["W",ANO(AEd)],P1,0,C,[Bd],0,3,0,0,["n",ANO(AGz)],V3,0,C,[Bd],0,3,0,0,0,N7,0,C,[Bd],0,3,0,0,0,M1,0,C,[Bd],0,3,0,0,0,M0,0,C,[Bg],0,3,0,0,["s",ANN(AC2)],SX,0,C,[Bd],0,3,0,0,0,Tf,0,Bv,[],0,3,0,0,0,Ok,0,C,[Kw],3,3,0,0,0,LM,0,C,[Ok],3,3,0,0,0,Kh,0,C,[LM],1,3,0,0,0,Wp,0,Kh,[],0,3,0,0,0,Lh,0,C,[Bg],0,3,0,0,["s",ANN(AJr)],TO,0,C,[Bg],0,3,0,0,["s",ANN(AGg)],B7,0,Cd,[],12,3,0,YX,0,RO,0,
C,[Bg],0,3,0,0,["s",ANN(ACy)],TE,0,C,[BQ],0,3,0,0,["W",ANO(AHr)],XG,0,C,[BA],3,3,0,0,0,Q_,0,C,[BQ],0,3,0,0,["W",ANO(AHc)],OA,0,C,[CT],4,3,0,0,0,Wk,0,C,[],0,3,0,0,0,Zo,0,C,[],0,3,0,0,0,Oh,0,C,[Bg],0,3,0,0,["s",ANN(AHv)],Og,0,C,[Bg],0,3,0,0,["s",ANN(AGi)],Oi,0,C,[Bg],0,3,0,0,["s",ANN(AJC)],SF,0,C,[Bg],0,3,0,0,["s",ANN(AFL)],By,0,C,[],1,0,0,0,["bS",ANQ(GB),"bY",ANR(GK),"gg",ANN(ABx),"I",ANO(AJI),"bv",ANO(AJH),"eo",ANN(AKx),"dp",ANN(HO)],Mj,0,C,[Bd],0,3,0,0,["n",ANO(AIp)],Cz,0,By,[],0,0,0,Ky,["c",ANQ(AAZ),"C",ANO(ABm)]]);
$rt_metadata([FW,0,C,[],0,0,0,0,0,Hr,0,BC,[],0,3,0,0,0,Pa,0,Cz,[],0,0,0,0,["c",ANQ(AAC),"C",ANO(AIw)],Uh,0,Cz,[],0,0,0,0,["c",ANQ(AB9)],NC,0,Cz,[],0,0,0,0,["c",ANQ(ABv)],PT,0,Cz,[],0,0,0,0,["c",ANQ(AAL),"C",ANO(AHk)],EV,0,Cz,[],0,0,0,0,["c",ANQ(AJV)],BO,0,By,[],1,0,0,0,["c",ANQ(AKX),"bB",ANN(AJg),"C",ANO(AET)],Y1,0,BO,[],0,0,0,0,["bg",ANP(AIU),"bS",ANQ(ADl),"bY",ANR(AB1),"C",ANO(AAH)],BJ,0,By,[],0,0,0,0,["c",ANQ(ADU),"I",ANO(AHe),"bv",ANO(AFy),"C",ANO(AHS),"dp",ANN(ABY)],HD,0,BJ,[],0,0,0,0,["c",ANQ(AG2),"C",
ANO(AIa)],Dp,0,HD,[],0,0,0,0,["c",ANQ(ACu),"I",ANO(AHY)],K1,0,Dp,[],0,0,0,0,["c",ANQ(AG9),"C",ANO(AJM)],SI,0,Dp,[],0,0,0,0,["c",ANQ(ABh),"C",ANO(AJj)],OD,0,Dp,[],0,0,0,0,["c",ANQ(ABW),"C",ANO(ALh)],QA,0,Dp,[],0,0,0,0,["c",ANQ(AAk),"C",ANO(AIn)],FM,0,BJ,[],0,0,0,0,["c",ANQ(AAy),"bS",ANQ(AFN),"bY",ANR(AIB),"bv",ANO(AFt),"eo",ANN(AHi),"dp",ANN(AKA)],FY,0,C,[],1,0,0,0,0,S,0,FY,[],1,0,0,MK,["cG",ANN(ABj),"dR",ANN(AAT),"hj",ANN(AJb),"fJ",ANN(AKw)],VF,0,S,[],0,0,0,0,["j",ANO(CI),"cG",ANN(CE),"dR",ANN(ADd),"hj",ANN(AJz),
"bI",ANN(AGt),"fJ",ANN(ADq)],HW,0,Bh,[],0,3,0,0,0,DC,0,By,[],1,0,0,0,["bv",ANO(AIE),"C",ANO(AJS),"dp",ANN(AF8)],CJ,0,DC,[],0,0,0,0,["c",ANQ(AAm)],EA,0,CJ,[],0,0,0,0,["c",ANQ(AA2)],CB,0,DC,[],0,0,0,0,["c",ANQ(AAx)],D$,0,CJ,[],0,0,0,0,["c",ANQ(AFT),"I",ANO(ALj)],SW,0,CJ,[],0,0,0,0,["c",ANQ(AKP),"bS",ANQ(AGr)],V,0,C,[],1,0,0,0,0,CS,0,BC,[],0,3,0,0,0,Lf,0,FY,[D0],0,0,0,0,["bI",ANN(AGy)],Mi,0,By,[],0,0,0,0,["c",ANQ(AFc),"C",ANO(AHd)],TA,0,C,[D0,CT],0,3,0,0,0,K9,0,BJ,[],0,0,0,0,0,N8,0,BJ,[],0,0,0,0,["c",ANQ(AAY),
"I",ANO(AGZ),"C",ANO(ABz),"bv",ANO(ABi)],Da,0,BJ,[],0,0,0,0,["c",ANQ(AC6),"j",ANO(ADB),"bv",ANO(AAW),"I",ANO(AI7),"C",ANO(ADh)],HU,0,Da,[],0,0,0,0,["j",ANO(AEU)],Vz,0,BO,[],0,0,0,0,["bg",ANP(AFd)],DQ,0,BO,[],0,0,0,0,["bg",ANP(KJ),"bv",ANO(AHg)],ML,0,BJ,[],0,0,0,0,["I",ANO(AFS),"c",ANQ(AAc),"bv",ANO(ABs),"C",ANO(AJB)],DZ,0,BO,[],0,0,0,0,["bB",ANN(AE2),"bg",ANP(AD5),"bS",ANQ(AC3),"bY",ANR(AE7),"bv",ANO(AJw)],Zt,0,BO,[],0,0,0,0,["bg",ANP(Z$)],UP,0,BO,[],0,0,0,0,["bg",ANP(AAr)],EL,0,BJ,[],0,0,0,0,["I",ANO(AKz),
"c",ANQ(AG1),"bv",ANO(AFe),"C",ANO(AH0)],TR,0,EL,[],0,0,0,0,0,QO,0,EL,[],0,0,0,0,0,UC,0,CB,[],0,0,0,0,["c",ANQ(ACc)],Nx,0,CB,[],0,0,0,0,["c",ANQ(AGk)],E_,0,CB,[],0,0,0,0,["c",ANQ(AI4),"I",ANO(AJ1)],Ng,0,E_,[],0,0,0,0,["c",ANQ(AE4),"I",ANO(AGB)],EI,0,CB,[],0,0,0,0,["c",ANQ(ALc)]]);
$rt_metadata([Lp,0,EI,[],0,0,0,0,["c",ANQ(AEt)],O0,0,CB,[],0,0,0,0,["c",ANQ(AKH)],Oe,0,E_,[],0,0,0,0,["c",ANQ(ABA)],RI,0,EI,[],0,0,0,0,["c",ANQ(AAO)],O1,0,DC,[],0,0,0,0,["c",ANQ(AK4),"bS",ANQ(AJd)],Mn,0,DC,[],0,0,0,0,["c",ANQ(AHj),"bS",ANQ(AAh)],Em,0,C,[],1,0,0,0,0,UE,0,CJ,[],0,0,0,0,["c",ANQ(AAR)],SS,0,D$,[],0,0,0,0,["c",ANQ(AGj)],M7,0,EA,[],0,0,0,0,["c",ANQ(AII)],Ob,0,CJ,[],0,0,0,0,["c",ANQ(AHb)],Q0,0,D$,[],0,0,0,0,["c",ANQ(AAV)],OF,0,EA,[],0,0,0,0,["c",ANQ(AIW)],IV,0,By,[],4,0,0,0,["c",ANQ(AFw),"C",ANO(AEE)],Wb,
0,By,[],0,0,0,0,["c",ANQ(ABf),"C",ANO(ABp)],Ml,0,By,[],0,0,0,0,["c",ANQ(AEW),"C",ANO(AK$)],TD,0,By,[],4,0,0,0,["c",ANQ(AHJ),"C",ANO(AB4)],Tk,0,By,[],0,0,0,0,["c",ANQ(AGV),"C",ANO(Z8)],LD,0,By,[],0,0,0,0,["c",ANQ(ABX),"C",ANO(ADO)],Zh,0,BJ,[],0,0,0,0,["c",ANQ(AKK),"I",ANO(ABu),"gg",ANN(AGF),"C",ANO(ABt)],VE,0,BJ,[],4,0,0,0,["c",ANQ(AGN),"I",ANO(AIu),"gg",ANN(Z3),"C",ANO(AKU)],Za,0,By,[],4,0,0,0,["c",ANQ(AFh),"C",ANO(ADI)],XC,0,By,[],0,0,0,0,["c",ANQ(AGS),"C",ANO(ADy)],UN,0,By,[],0,0,0,0,["c",ANQ(AEw),"C",ANO(AB8)],F_,
0,BJ,[],0,0,0,0,["c",ANQ(AAS),"I",ANO(AHW),"C",ANO(AIc)],Ze,0,F_,[],0,0,0,0,["c",ANQ(ACb),"bS",ANQ(AJK),"bY",ANR(AAE),"bv",ANO(AGb)],WP,0,F_,[],0,0,0,0,["c",ANQ(AFI)],Mh,0,Fy,[GO],0,3,0,0,["jE",ANR(ADr),"iS",ANQ(ABk),"gl",ANO(ABG),"j9",ANP(AJe)],O5,0,BO,[],0,0,0,0,["bg",ANP(ACs),"bS",ANQ(ABa),"bY",ANR(ADM),"bv",ANO(AEe)],UL,0,BO,[],0,0,0,0,["bg",ANP(AFP)],Lx,0,BO,[],0,0,0,0,["bg",ANP(AIL)],F$,0,C,[],4,0,0,AIl,0,KQ,0,BO,[],0,0,0,0,["bg",ANP(AIS)],Jo,0,BJ,[],0,0,0,0,["I",ANO(AG7),"c",ANQ(AB5),"bS",ANQ(AEc),"bY",
ANR(ACz),"bv",ANO(AAB),"C",ANO(AJl)],JG,0,BJ,[],0,0,0,0,["I",ANO(ABF),"c",ANQ(AAl),"bS",ANQ(AHo),"bY",ANR(AIJ),"bv",ANO(ACt),"C",ANO(AHw)],Du,0,BO,[],0,0,0,0,["bg",ANP(AId),"bS",ANQ(AGu),"bY",ANR(ABE),"bv",ANO(AH5)],R2,0,Em,[],0,0,0,0,["f9",ANO(ABR),"oQ",ANP(AH$)],R3,0,Em,[],0,0,0,0,["f9",ANO(AIX),"oQ",ANP(AKs)],Yo,0,C,[],0,0,0,0,0,U4,0,C,[],0,0,0,0,0,Jm,0,V,[],0,0,0,0,["x",ANN(WX)],Iq,0,V,[],0,0,0,0,["x",ANN(Xy)],Yh,0,V,[],0,0,0,0,["x",ANN(AIv)],YK,0,V,[],0,0,0,0,["x",ANN(AJp)],YN,0,V,[],0,0,0,0,["x",ANN(AC7)],Jg,
0,V,[],0,0,0,0,["x",ANN(VG)],JS,0,Jg,[],0,0,0,0,["x",ANN(Wv)],ZV,0,V,[],0,0,0,0,["x",ANN(AEa)],KH,0,JS,[],0,0,0,0,["x",ANN(UI)],W$,0,KH,[],0,0,0,0,["x",ANN(AF9)]]);
$rt_metadata([Xt,0,V,[],0,0,0,0,["x",ANN(ACl)],V6,0,V,[],0,0,0,0,["x",ANN(AF5)],VP,0,V,[],0,0,0,0,["x",ANN(AKv)],YQ,0,V,[],0,0,0,0,["x",ANN(AGC)],Z2,0,V,[],0,0,0,0,["x",ANN(AAe)],Yp,0,V,[],0,0,0,0,["x",ANN(AEA)],Yb,0,V,[],0,0,0,0,["x",ANN(AIg)],Y6,0,V,[],0,0,0,0,["x",ANN(ACi)],Vi,0,V,[],0,0,0,0,["x",ANN(ACH)],U1,0,V,[],0,0,0,0,["x",ANN(AKl)],Yu,0,V,[],0,0,0,0,["x",ANN(Z_)],YC,0,V,[],0,0,0,0,["x",ANN(AFl)],Wo,0,V,[],0,0,0,0,["x",ANN(ACP)],Xx,0,V,[],0,0,0,0,["x",ANN(ADQ)],ZA,0,V,[],0,0,0,0,["x",ANN(AFn)],YB,0,
V,[],0,0,0,0,["x",ANN(AJE)],WN,0,V,[],0,0,0,0,["x",ANN(AHE)],Wm,0,V,[],0,0,0,0,["x",ANN(AGv)],ZZ,0,V,[],0,0,0,0,["x",ANN(AIq)],H3,0,V,[],0,0,0,0,["x",ANN(Xu)],Y8,0,H3,[],0,0,0,0,["x",ANN(AGo)],Xd,0,Jm,[],0,0,0,0,["x",ANN(AA$)],Wh,0,Iq,[],0,0,0,0,["x",ANN(AD1)],VV,0,V,[],0,0,0,0,["x",ANN(AFB)],Wc,0,V,[],0,0,0,0,["x",ANN(AKa)],W4,0,V,[],0,0,0,0,["x",ANN(ADu)],Xa,0,V,[],0,0,0,0,["x",ANN(AAa)],V0,0,C,[],4,0,0,0,0,Vx,0,C,[],4,3,0,0,0,LE,0,C,[],0,3,0,0,0,Yx,0,C,[],0,3,0,0,0,WL,0,C,[],4,3,0,0,0,Tv,0,C,[],3,3,0,0,0,VC,
0,C,[Tv],0,3,0,0,0,PG,0,C,[Bd],0,3,0,0,0,PF,0,C,[Bd],0,3,0,0,0,Yq,0,C,[],3,3,0,0,0,SV,0,S,[],0,0,0,0,["j",ANO(ADb)],ST,0,S,[],0,0,0,0,["j",ANO(AAv)],Ms,0,S,[],0,0,0,0,["j",ANO(AFr),"bI",ANN(ADS)],My,0,S,[],0,0,0,0,["j",ANO(AIe)],Mw,0,S,[],0,0,0,0,["j",ANO(AIR)],Mx,0,S,[],0,0,0,0,["j",ANO(AFO)],MB,0,S,[],0,0,0,0,["j",ANO(ACK)],MC,0,S,[],0,0,0,0,["j",ANO(Z5)],Mz,0,S,[],0,0,0,0,["j",ANO(ADW)],MA,0,S,[],0,0,0,0,["j",ANO(AFR)],ME,0,S,[],0,0,0,0,["j",ANO(AJN)],MG,0,S,[],0,0,0,0,["j",ANO(ACf)],Mr,0,S,[],0,0,0,0,["j",
ANO(ALn)]]);
$rt_metadata([Nc,0,S,[],0,0,0,0,["j",ANO(AD0)],Mp,0,S,[],0,0,0,0,["j",ANO(ACe)],Mq,0,S,[],0,0,0,0,["j",ANO(ADE)],Mv,0,S,[],0,0,0,0,["j",ANO(AE0)],Mo,0,S,[],0,0,0,0,["j",ANO(AJv)],Mt,0,S,[],0,0,0,0,["j",ANO(ABn)],Mu,0,S,[],0,0,0,0,["j",ANO(AHu)],Kf,0,C,[],3,3,0,0,0,Px,0,C,[Kf],4,3,0,0,0,We,0,C,[],0,3,0,0,0,NN,0,C,[],3,3,0,0,0,Rl,0,C,[NN],0,3,0,0,0,Lk,0,FM,[],0,0,0,0,["bS",ANQ(ADw),"bY",ANR(ALa),"eo",ANN(AB3)],Ss,0,C,[BQ],0,3,0,0,["W",ANO(AHI)],Su,0,C,[BQ],0,3,0,0,["W",ANO(AGG)],Lr,0,C,[Bg],0,3,0,0,0,Qv,0,C,[BQ],
0,3,0,0,["W",ANO(AD7)],Qy,0,C,[BQ],0,3,0,0,["W",ANO(AAp)],RW,0,C,[Kf],0,0,0,0,0,Rq,0,C,[BQ],0,3,0,0,["W",ANO(AFC)],PW,0,S,[],0,0,0,0,["j",ANO(AJU)],K7,0,S,[],0,0,0,0,["j",ANO(AA6)],Pi,0,S,[],0,0,0,0,["j",ANO(AAU)],Ph,0,S,[],0,0,0,0,["j",ANO(ADt)],Ts,0,S,[],0,0,0,0,["j",ANO(AEM)],MY,0,S,[],0,0,0,0,["j",ANO(AJX)],Ma,0,S,[],0,0,0,0,["j",ANO(AG3)],Op,0,S,[],0,0,0,0,["j",ANO(AIj)],KY,0,S,[],0,0,0,0,["j",ANO(AKS)],K5,0,S,[],0,0,0,0,["j",ANO(ACx)],LX,0,S,[],0,0,0,0,["j",ANO(AJ$)],Nn,0,S,[],0,0,0,0,["j",ANO(AF3)],Nv,
0,S,[],0,0,0,0,["j",ANO(AHU)],QJ,0,S,[],0,0,0,0,["j",ANO(AJO)],Py,0,S,[],0,0,0,0,["j",ANO(AKD)],Le,0,S,[],0,0,0,0,["j",ANO(ACj)],Kv,0,S,[],0,0,0,0,["j",ANO(AG5)],Pc,0,Kv,[],0,0,0,0,["j",ANO(AI8)],NO,0,C,[Hz],0,3,0,0,["nD",ANN(AFE)],L$,0,C,[Bd],0,3,0,0,["n",ANO(AGT)],L9,0,C,[Bd],0,3,0,0,["n",ANO(ADi)],L8,0,C,[Bd],0,3,0,0,["n",ANO(AJ3)],Vp,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.E$=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","url(","FATAL: WebGL is not enabled in the browser","keydown","keyup",
"mousemove","mousedown","mouseup","wheel","dblclick","contextmenu","focus","blur","drop","paste","copy","cut","javaClass@","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","fonts/","JetBrains Mono","Illegal argument javaObject instanceof ","#wasm","[Graphics] GL version: ","WebGL 2","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = vTex;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = uTexTransform.xy + vTex * uTexTransform.zw;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","Can\'t compare "," to ","POS2_UV2","Either src or dest is null","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","[",", ","]","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ",
"Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","selectScene ","DemoEdit0","RenderTexture","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","TextureRegionTestScene","WorkerTest","Consolas","Courier New","|The sample text","unsupported","supported","ReadClipboardText is ","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
+"(int field) {\n    return field + this.field;\n  }\n\n  public interface A {\n    int sumField(int field);\n\n    default void foo() {\n      sumField(10);\n    }\n  }\n}\n","java","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","Int","Iter","VP","Rep","parser >",
"open ...","Development >","No definition or usages","Segoe UI","pointer","text","ew-resize","ns-resize","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","onContextMenu","main.java  ","5    ","private static void foo (...);           ","25   ","String foo = \"boo\";                      ","131  ","int a = 5;                               ","class.java ","176  ","public class FindTest extend Test {...}; ","1234 ","sub.java   ",
"4321 ","demo.java  ","23872","scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText "," on Copy","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ",
"fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","  ","#616161","Set editor font to: ",", ascent+descent = ",", lineHeight = ",", caretHeight = ","topBase(font, lineHeight) = ","\r","\n","Full file parsed in ","ms","change model language: from = "," to = ","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing","CppParser.parse","JavaScriptParser.parseBytes","JavaParser.parse","#A9B7C6","#40332B","#edebfc","#344134",
"unClick b=","click b=",", count=","key up = ","key down = ",", keyCode = ",", isRepeated = ","menu","onCopy","copied","This is a "," text sample","focus lost","Toolbar font has not been set","toolbar size is unknown","onLeave item ",", item ","trying to display popup with unknown screen size and dpr","tbH onClickOutside","tbV onClickOutside","Editor color scheme has not been set","...","... and "," more usages","#3C3F41","#4B6EAF","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",
", ints = ","todo: add directory worker test ","asyncWithFile","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","trying to redefine texture size in setContent","onEnter item ","FindUsages font has not been set","FindUsages size is unknown","prev = "," pixelLocation = ",", next = ","\\n","#BBBBBB","onPopupClosed","defaultText","keyword","field","#9876AA","string","#6A8759","comma","#CC7832","error","unused","#72737A","number","#6897BB",
"method","#FFC66D","showUsage","braceMatch","#FFEF28","#3B514D","comment","#808080","annotation","#BBB529","type","#287BDE","operator","#5F8C8A","newAction must be non-null","The last byte in dst ","Expected "," ints to read, but "," read","showOpenFilePicker -> ","showDirectoryPicker -> "," onPastePlainText: "," writeClipboardText \'","\' ok"," readClipboardText: "," error: ","opening file ",".java","readClipboardText error: ","#B9BDC9","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ",
"Viewport parsed in ","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s",
"S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog",
"Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements",
"GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo",
"Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms",
"SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Verdana","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
Bx.prototype.toString=function(){return $rt_ustr(this);};
Bx.prototype.valueOf=Bx.prototype.toString;C.prototype.toString=function(){return $rt_ustr(ABC(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Ce=Long_add;var IX=Long_sub;var BI=Long_mul;var C2=Long_div;var K$=Long_rem;var AL5=Long_or;var CF=Long_and;var AQL=Long_xor;var ES=Long_shl;var FF=Long_shr;var DG=Long_shru;var AMp=Long_compare;var EJ=Long_eq;var AQM=Long_ne;var ACS=Long_lt;var NF=Long_le;var ACC=Long_gt;var V$=Long_ge;var AQN=Long_not;var AMA=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(AME);
main.javaException=$rt_javaException;
(function(){var c;c=QR.prototype;c.f=c.W;c=QP.prototype;c.f=c.W;c=Lu.prototype;c.f=c.W;c=Wx.prototype;c.getLength=c.AN;c.get=c.Bh;c=LY.prototype;c.f=c.W;c=U_.prototype;c.dispatchEvent=c.wR;c.addEventListener=c.zB;c.removeEventListener=c.Bm;c.getLength=c.wW;c.get=c.um;c.addEventListener=c.vB;c.removeEventListener=c.yo;c=Sp.prototype;c.onAnimationFrame=c.yq;c=Sl.prototype;c.f=c.qF;c=Si.prototype;c.handleEvent=c.bL;c=Sj.prototype;c.f=c.W;c=S6.prototype;c.handleEvent=c.bL;c=S7.prototype;c.handleEvent=c.bL;c=S8.prototype;c.handleEvent
=c.bL;c=S9.prototype;c.handleEvent=c.bL;c=S$.prototype;c.handleEvent=c.bL;c=S_.prototype;c.handleEvent=c.bL;c=Ta.prototype;c.handleEvent=c.bL;c=Tb.prototype;c.handleEvent=c.bL;c=Tc.prototype;c.handleEvent=c.bL;c=Td.prototype;c.handleEvent=c.bL;c=ZP.prototype;c.handleEvent=c.bL;c=ZQ.prototype;c.handleEvent=c.bL;c=ZR.prototype;c.handleEvent=c.bL;c=ZS.prototype;c.handleEvent=c.bL;c=Rj.prototype;c.handleEvent=c.bL;c=T6.prototype;c.f=c.W;c=T8.prototype;c.f=c.W;c=LC.prototype;c.f=c.W;c=LB.prototype;c.f=c.W;c=LA.prototype;c.f
=c.W;c=Lz.prototype;c.f=c.W;c=LR.prototype;c.accept=c.BL;c=Nb.prototype;c.f=c.qF;c=M_.prototype;c.f=c.qF;c=Rt.prototype;c.f=c.W;c=Os.prototype;c.f=c.W;c=TW.prototype;c.f=c.W;c=TV.prototype;c.f=c.W;c=Tn.prototype;c.f=c.W;c=Tm.prototype;c.f=c.W;c=K8.prototype;c.f=c.W;c=TP.prototype;c.handleEvent=c.bL;c=NV.prototype;c.f=c.W;c=K3.prototype;c.onTimer=c.nD;c=KL.prototype;c.onTimer=c.nD;c=TT.prototype;c.f=c.W;c=TE.prototype;c.f=c.W;c=Q_.prototype;c.f=c.W;c=Ss.prototype;c.f=c.W;c=Su.prototype;c.f=c.W;c=Qv.prototype;c.f
=c.W;c=Qy.prototype;c.f=c.W;c=Rq.prototype;c.f=c.W;c=NO.prototype;c.onTimer=c.nD;})();
})(this);
