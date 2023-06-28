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
{if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.eH=f;}
function $rt_cls(cls){return Qw(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return E_(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bT.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AIq(t);}
function $rt_throwableCause(t){return AIv(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ANz());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ANA(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ANB());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BD=$rt_compare;var ANC=$rt_nullCheck;var E=$rt_cls;var R=$rt_createArray;var J$=$rt_isInstance;var AND=$rt_nativeThread;var ANE=$rt_suspending;var ANF=$rt_resuming;var ANG=$rt_invalidPointer;var B=$rt_s;var Bk=$rt_eraseClinit;var Bc=$rt_imul;var DR=$rt_wrapException;var ANH=$rt_checkBounds;var ANI=$rt_checkUpperBound;var ANJ=$rt_checkLowerBound;var ANK=$rt_wrapFunction0;var ANL=$rt_wrapFunction1;var ANM=$rt_wrapFunction2;var ANN=$rt_wrapFunction3;var ANO=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var WS=$rt_createCharArrayFromData;var AMo=$rt_createByteArrayFromData;var ANP=$rt_createShortArrayFromData;var EB=$rt_createIntArrayFromData;var ANQ=$rt_createBooleanArrayFromData;var ANR=$rt_createFloatArrayFromData;var ANS=$rt_createDoubleArrayFromData;var ABO=$rt_createLongArrayFromData;var ANT=$rt_createBooleanArray;var ED=$rt_createByteArray;var ANU=$rt_createShortArray;var BN=$rt_createCharArray;var BS=$rt_createIntArray;var ANc=$rt_createLongArray;var AAh=$rt_createFloatArray;var ANV
=$rt_createDoubleArray;var BD=$rt_compare;var ANW=$rt_castToClass;var ANX=$rt_castToInterface;var ANY=Long_toNumber;var W=Long_fromInt;var ANZ=Long_fromNumber;var B1=Long_create;var D0=Long_ZERO;var AN0=Long_hi;var Ee=Long_lo;
function C(){this.$id$=0;}
function AN1(){var a=new C();YT(a);return a;}
function YT(a){}
function CB(a){return Qw(a.constructor);}
function PG(a,b){return a!==b?0:1;}
function ABC(a){var b,c,d,e,f,g,h,i,j;b=KY(a);if(!b)c=B(0);else{d=(((32-LP(b)|0)+4|0)-1|0)/4|0;e=BN(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Gi((b>>>g|0)&15,16);g=g-4|0;h=i;}c=E_(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function KY(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AFk(a){var b,c,d;if(!J$(a,DY)&&a.constructor.$meta.item===null){b=new Sc;U(b);J(b);}b=AAn(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function OU(){var a=this;C.call(a);a.qv=0;a.nA=null;}
function AMB(b){var c,d,e,f,g,h,i,j,k;YQ();U1();Xl();Yg();V_();YW();YA();UO();Z0();Wx();UR();X3();XC();X4();W5();Wg();VB();WE();WG();U9();ZK();ZF();c=(Va()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))M7(B(2),B(3));else{d=new OU;Ck(d);e=new QI;e.oV=d;f=new Ls;c=new $rt_globals.Worker("teavm/worker.js");g=new LV;g.mm=c;g.mn=e;g.mp=f;e=Bf(g,"f");c.onmessage=e;b=R(J9,4).data;b[0]=Ik(B(4),B(5),400);b[1]=Ik(B(6),B(7),400);b[2]=Ik(B(8),B(5),700);b[3]
=Ik(B(9),B(7),700);g=new $rt_globals.Array();h=b.length;i=0;while(i<h){c=b[i];e=c.oz;f=c.nv;j=new M;O(j);BB(G(G(j,B(10)),f),41);j=N(j);f=c.nr;k=c.mb;c=ADz($rt_ustr(f),k);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(j),c)).load();g.push(c);i=i+1|0;}e=$rt_globals.Promise.all(g);Ck(d);c=new QJ;c.pz=d;g=new QH;e.then(Bf(c,"f"),Bf(g,"f"));}}
function W9(b){var c,d,e,f,g,h,i,j,k;c=new PE;d=new N4;c.mZ=new $rt_globals.TextDecoder("utf-16");e=new Sb;e.l5=c;c.oi=e;f=new R8;f.qK=c;c.qU=f;g=new NA;g.gM=AIJ();h=R(Ct,0);g.pV=h;g.el=h;g.iX=1;g.hr=0;g.c2=f;c.jC=g;g=new R9;g.n6=c;c.pJ=new $rt_globals.ResizeObserver(Bf(g,"f"));e=new R6;e.lB=c;c.kS=e;c.gP=1;c.jZ=AIJ();c.nc=b;g=new R7;g.pX=c;e=Bf(g,"f");b.onmessage=e;e=W4();b.postMessage(e);c.kM=(DH()).getElementById("canvasDiv");b=Va();i=0;b.tabIndex=i;g=b.style;g.setProperty("width","100%");g.setProperty("height",
"100%");g.setProperty("outline","none");c.cV=b;c.kM.appendChild(b);f=c.cV;i=AG1(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",i);if(b===null)M7(B(2),B(11));else{i=new No;e=c.cV;g=c.jC;i.cR=null;i.fO=e;i.b4=g;f=$rt_globals.window;h=R(CQ,14);j=h.data;k=new ST;k.k8=i;j[0]=CE(i,e,B(12),k);g=new SU;g.oD=i;j[1]=CE(i,e,B(13),g);g=new SV;g.lQ=i;j[2]=CE(i,e,B(14),g);g=new SW;g.qD=i;j[3]=CE(i,e,B(15),g);g=new SX;g.nW=i;j[4]=CE(i,e,B(16),g);g=new SY;g.lk=i;j[5]=CE(i,e,B(17),g);g=new SZ;g.qT=i;j[6]=CE(i,e,B(18),g);g=new S0;g.n$
=i;j[7]=CE(i,e,B(19),g);g=new S1;g.lu=i;j[8]=CE(i,e,B(20),g);g=new S2;g.p4=i;j[9]=CE(i,e,B(21),g);j[10]=CE(i,e,B(22),ALn(i));j[11]=XX(i,f,B(23),AL7(i),1);j[12]=CE(i,f,B(24),ANm(i));j[13]=CE(i,f,B(25),AMf(i));i.sI=AKn(h);Wq(i,e);c.oB=i;c.e6=AMa(b,c.qU);AF9(c.pJ,c.cV);e=$rt_globals.window;i=c.kS;e.addEventListener("resize",Bf(i,"handleEvent"));c.ev=Wo(d,Wi(c));Qd(c);}Yr(c);}
var Ln=F(0);
var KT=F(0);
function SK(){var a=this;C.call(a);a.io=null;a.d7=null;}
function Qw(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new SK;c.d7=b;d=c;b.classObject=d;}return c;}
function AFA(a){var b,c;b=KY(a);c=new M;O(c);T(G(c,B(26)),b);return N(c);}
function GT(a){if(a.io===null)a.io=$rt_str(a.d7.$meta.name);return a.io;}
function GK(a){return a.d7.$meta.primitive?1:0;}
function GZ(a){return Qw(a.d7.$meta.item);}
function RJ(a){return Qw(a.d7.$meta.superclass);}
var VG=F();
function Bf(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function JE(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Vs=F();
function AAn(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function XT(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(XT(d[e],c))return 1;e=e+1|0;}return 0;}
var CV=F(0);
var Cz=F(0);
var Hy=F(0);
function BA(){var a=this;C.call(a);a.bT=null;a.go=0;}
var AN2=null;var AN3=null;var AN4=null;function El(){El=Bk(BA);AJJ();}
function ADZ(){var a=new BA();UT(a);return a;}
function E_(a){var b=new BA();Gq(b,a);return b;}
function Ii(a,b,c){var d=new BA();Uu(d,a,b,c);return d;}
function UT(a){El();a.bT=AN2;}
function Gq(a,b){var c,d,e,f;El();b=b.data;c=b.length;d=BN(c);e=d.data;a.bT=d;f=0;while(f<c){e[f]=b[f];f=f+1|0;}}
function Uu(a,b,c,d){var e,f,g;El();e=BN(d);f=e.data;a.bT=e;g=0;while(g<d){f[g]=b.data[g+c|0];g=g+1|0;}}
function Um(b){var c;El();c=ADZ();c.bT=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.bT.data;if(b<c.length)return c[b];}d=new Gg;U(d);J(d);}
function I(a){return a.bT.data.length;}
function FI(a){return a.bT.data.length?0:1;}
function Q6(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function FK(a,b){if(a===b)return 1;return Q6(a,b,0);}
function FU(a,b,c){var d,e,f,g,h;d=Bg(0,c);if(b<65536){e=b&65535;while(true){f=a.bT.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=GV(b);h=Hp(b);while(true){f=a.bT.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Ff(a,b,c){var d,e,f,g,h;d=Z(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bT.data[d]==e)break;d=d+(-1)|0;}return d;}f=GV(b);g=Hp(b);while(true){if(d<1)return (-1);h=a.bT.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function V6(a,b,c){var d,e,f;d=Bg(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function B5(a,b,c){var d,e;d=BD(b,c);if(d>0){e=new Bu;U(e);J(e);}if(!d){El();return AN3;}if(!b&&c==I(a))return a;return Ii(a.bT,b,c-b|0);}
function Dc(a,b){return B5(a,b,I(a));}
function NJ(a,b,c){return B5(a,b,c);}
function Fs(a,b){var c,d,e,f,g,h;if(FI(b))return a;if(FI(a))return b;c=BN(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Um(c);}
function RI(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BB(d,L(a,f));}f=f+1|0;}G(d,Dc(a,f));return N(d);}
function O2(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return B5(a,b,c+1|0);}
function ABB(a){return a;}
function FJ(a){var b,c,d,e,f;b=a.bT.data;c=BN(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cj(b){El();return b===null?B(27):b.bH();}
function C0(b){var c;El();c=new M;O(c);return N(T(c,b));}
function Br(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BA))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function JC(a){var b,c,d,e;a:{if(!a.go){b=a.bT.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.go=(31*a.go|0)+e|0;d=d+1|0;}}}return a.go;}
function Ti(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new FQ;Bb(b,B(28));J(b);}AN5=1;d=new Oo;d.ia=R(CA,10);d.e_=(-1);d.dI=(-1);d.bd=(-1);e=new FW;e.dF=1;e.bo=b;e.R=BN(I(b)+2|0);DT(FJ(b),0,e.R,0,I(b));f=e.R.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.nX=g;e.e0=0;Ew(e);Ew(e);d.f=e;d.cL=0;d.jb=Ub(d,(-1),0,null);if(!CW(d.f)){b=new Hs;h=d.f;H0(b,B(29),h.bo,h.cy);J(b);}if(d.k9)d.jb.dm();b=Cy();h=new Pl;h.gN=(-1);h.iv=(-1);h.rL=d;h.pF=d.jb;h.g0=a;h.gN=0;g=I(a);h.iv=g;e=new RK;i=h.gN;j=d.e_;k=d.dI+1|0;l=d.bd+1|0;e.f_
=(-1);m=j+1|0;e.lL=m;e.cU=BS(m*2|0);f=BS(l);e.hB=f;Ic(f,(-1));if(k>0)e.i1=BS(k);Ic(e.cU,(-1));T6(e,a,i,g);h.b2=e;e.ek=1;n=0;m=0;if(!I(a)){f=R(BA,1);f.data[0]=B(29);}else{while(true){l=I(h.g0);if(!UQ(h.b2))l=h.iv;e=h.b2;if(e.dj>=0&&Wv(e)==1){e=h.b2;e.dj=HM(e);if(HM(h.b2)==Yf(h.b2)){e=h.b2;e.dj=e.dj+1|0;}g=h.b2.dj;g=g<=l&&K1(h,g)?1:0;}else g=K1(h,h.gN);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Cc(b,NJ(a,m,Zy(h)));m=Wc(h);n=g;}a:{Cc(b,NJ(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(BK(b,g)))break a;F7(b,
g);}}if(g<0)g=0;f=GE(b,R(BA,g));}return f;}
function ADs(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Z(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AJJ(){AN2=BN(0);AN3=ADZ();AN4=new PN;}
function FM(){var a=this;C.call(a);a.f6=null;a.i0=null;a.hj=0;a.hE=0;}
function AN6(){var a=new FM();U(a);return a;}
function AN7(a){var b=new FM();Bb(b,a);return b;}
function U(a){a.hj=1;a.hE=1;}
function Bb(a,b){a.hj=1;a.hE=1;a.f6=b;}
function ADj(a){return a;}
function AIq(a){return a.f6;}
function AIv(a){var b;b=a.i0;if(b===a)b=null;return b;}
var Ei=F(FM);
var Gj=F(Ei);
var WK=F(Gj);
var Du=F();
function Eg(){Du.call(this);this.eD=0;}
var AN8=null;var AN9=null;function Y9(a){var b=new Eg();Iq(b,a);return b;}
function Iq(a,b){a.eD=b;}
function H9(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new CU;Bb(b,B(30));J(b);}d=I(b);if(0==d){b=new CU;Bb(b,B(31));J(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new CU;U(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=MZ(L(b,f));if(i<0){j=new CU;k=B5(b,0,d);b=new M;O(b);G(G(b,B(32)),k);Bb(j,N(b));J(j);}if(i>=c){j=new CU;l=B5(b,0,d);b=new M;O(b);G(G(T(G(b,B(33)),c),B(34)),l);Bb(j,N(b));J(j);}g=Bc(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new CU;k=B5(b,0,d);b=new M;O(b);G(G(b,B(35)),k);Bb(j,N(b));J(j);}b=new CU;j=new M;O(j);T(G(j,B(36)),c);Bb(b,N(j));J(b);}
function Fe(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AN9===null){AN9=R(Eg,256);c=0;while(true){d=AN9.data;if(c>=d.length)break a;d[c]=Y9(c-128|0);c=c+1|0;}}}return AN9.data[b+128|0];}return Y9(b);}
function Km(a){var b;b=a.eD;return (LG(ANj(20),b,10)).bH();}
function LP(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function G8(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function IF(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function AFe(a,b){b=b;return BD(a.eD,b.eD);}
function YQ(){AN8=E($rt_intcls());}
function Fy(){var a=this;C.call(a);a.w=null;a.I=0;}
function AN$(){var a=new Fy();O(a);return a;}
function ANj(a){var b=new Fy();Fa(b,a);return b;}
function O(a){Fa(a,16);}
function Fa(a,b){a.w=BN(b);}
function LG(a,b,c){return WY(a,a.I,b,c);}
function WY(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)B2(a,b,b+1|0);else{B2(a,b,b+2|0);f=a.w.data;g=b+1|0;f[b]=45;b=g;}a.w.data[b]=Gi(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bc(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;B2(a,b,b+i|0);if(e)e=b;else{f=a.w.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.w.data;b=e+1|0;f[e]=Gi($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function XJ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BD(c,0.0);if(!d){B2(a,b,b+3|0);e=a.w.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){B2(a,b,b+4|0);e=a.w.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){B2(a,b,b+3|0);e=a.w.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B2(a,b,b+8|0);d=b;}else{B2(a,b,b+9|0);e=a.w.data;d=b+1|0;e[b]=45;}e=a.w.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AN_;XD(c,f);d=f.iC;g=f.ii;h=f.lg;i=1;j=1;if(h)j=2;k=9;l=AJg(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bg(k,i+1|0);g=0;}else{d=d/AOa.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;B2(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.w.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.w.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.w.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function VZ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BD(c,0.0);if(!d){B2(a,b,b+3|0);e=a.w.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){B2(a,b,b+4|0);e=a.w.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){B2(a,b,b+3|0);e=a.w.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B2(a,b,b+8|0);d=b;}else{B2(a,b,b+9|0);e=a.w.data;d=b+1|0;e[b]=45;}e=a.w.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AOb;W2(c,f);g=f.jd;h=f.h4;i=f.k2;j=1;k=1;if(i)k=2;l=18;m=AHl(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bg(l,j+1|0);h=0;}else{g=C2(g,AOc.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;B2(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.w.data;k=b+1|0;e[b]=45;}n=B1(1569325056, 23283064);o=0;while(o<l){if(Nz(n,D0))d=0;else{d=Ee(C2(g,n));g=
K$(g,n);}e=a.w.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=C2(n,W(10));o=o+1|0;}if(h){e=a.w.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function AJg(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AHl(b){var c,d,e,f,g;c=W(1);d=0;e=16;f=AOd.data;g=f.length-1|0;while(g>=0){if(EG(K$(b,BI(c,f[g])),D0)){d=d|e;c=BI(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BB(a,b){return a.j3(a.I,b);}
function TP(a,b,c){B2(a,b,b+1|0);a.w.data[b]=c;return a;}
function Ia(a,b){var c,d;c=a.w.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bg(b,Bg(c*2|0,5));a.w=U8(a.w,d);}
function N(a){return Ii(a.w,0,a.I);}
function Tz(a,b,c,d){return a.jy(a.I,b,c,d);}
function Lh(a,b,c,d,e){var f,g,h,i;B2(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.w.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function G_(a,b){return a.iK(b,0,b.data.length);}
function B2(a,b,c){var d,e,f,g;d=a.I;e=d-b|0;a.gh((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.w.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.I=a.I+(c-b|0)|0;}
var GN=F(0);
var M=F(Fy);
function J_(){var a=new M();AKv(a);return a;}
function AKv(a){O(a);}
function G(a,b){KA(a,a.I,b===null?B(27):b.bH());return a;}
function BR(a,b){KA(a,a.I,b);return a;}
function T(a,b){LG(a,b,10);return a;}
function GL(a,b){var c,d,e,f,g,h,i,j;c=a.I;d=1;if(ACQ(b,D0)){d=0;b=AMx(b);}a:{if(Jy(b,W(10))<0){if(d)B2(a,c,c+1|0);else{B2(a,c,c+2|0);e=a.w.data;f=c+1|0;e[c]=45;c=f;}a.w.data[c]=Gi(Ee(b),10);}else{g=1;h=W(1);i=E1(W(-1),W(10));b:{while(true){j=BI(h,W(10));if(Jy(j,b)>0){j=h;break b;}g=g+1|0;if(Jy(j,i)>0)break;h=j;}}if(!d)g=g+1|0;B2(a,c,c+g|0);if(d)f=c;else{e=a.w.data;f=c+1|0;e[c]=45;}while(true){if(EG(j,D0))break a;e=a.w.data;c=f+1|0;e[f]=Gi(Ee((E1(b,j))),10);b=LD(b,j);j=E1(j,W(10));f=c;}}}return a;}
function Fz(a,b){XJ(a,a.I,b);return a;}
function Ni(a,b){VZ(a,a.I,b);return a;}
function UM(a,b){BB(a,b);return a;}
function Fj(a,b){KA(a,a.I,!b?B(37):B(38));return a;}
function Zo(a,b,c){var d,e,f,g,h,i;d=BD(b,c);if(d<=0){e=a.I;if(b<=e){if(d){f=e-c|0;a.I=e-(c-b|0)|0;g=0;while(g<f){h=a.w.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Gg;U(i);J(i);}
function Sv(a,b){var c,d,e,f;if(b>=0){c=a.I;if(b<c){c=c-1|0;a.I=c;while(b<c){d=a.w.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Gg;U(f);J(f);}
function AFc(a,b,c,d,e){Lh(a,b,c,d,e);return a;}
function ACF(a,b,c,d){Tz(a,b,c,d);return a;}
function Vi(a){return a.I;}
function Ds(a){return N(a);}
function AFi(a,b){Ia(a,b);}
function AFH(a,b,c){TP(a,b,c);return a;}
function KA(a,b,c){var d,e,f;if(b>=0&&b<=a.I){a:{if(c===null)c=B(27);else if(FI(c))break a;Ia(a,a.I+I(c)|0);d=a.I-1|0;while(d>=b){a.w.data[d+I(c)|0]=a.w.data[d];d=d+(-1)|0;}a.I=a.I+I(c)|0;d=0;while(d<I(c)){e=a.w.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new Gg;U(c);J(c);}
var D2=F(Gj);
var XW=F(D2);
function AOe(a){var b=new XW();ABJ(b,a);return b;}
function ABJ(a,b){Bb(a,b);}
var WB=F(D2);
function AOf(a){var b=new WB();ABZ(b,a);return b;}
function ABZ(a,b){Bb(a,b);}
var DD=F(FM);
function AOg(){var a=new DD();Yc(a);return a;}
function Yc(a){U(a);}
var Bh=F(DD);
function ANA(a){var b=new Bh();AJ8(b,a);return b;}
function AJ8(a,b){Bb(a,b);}
var QA=F(0);
var CQ=F(0);
function AKn(b){var c;c=new N1;c.rX=b;return c;}
function Dx(b,c){if(b!==null)b.gI();return c;}
var MQ=F(0);
function Hk(){var a=this;C.call(a);a.jJ=0;a.iY=0;}
var AOh=0;function HC(a){AOh=AOh-1|0;}
function Fg(a,b,c){HX(a,VS(b,c,400,0));}
function OM(){var a=this;Hk.call(a);a.hH=null;a.ba=null;a.kE=null;}
function D8(a){var b,c,d;b=a.ba;c=a.jJ;d=a.iY;b.clearRect(0.0,0.0,c,d);}
function O_(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.ba;d="center";c.textAlign=d;break a;case 2:c=a.ba;d="right";c.textAlign=d;break a;default:break a;}d=a.ba;c="left";d.textAlign=c;}}
function Dw(a,b){HX(a,b.kV);}
function HX(a,b){var c;if(!(a.kE==b?1:0)){c=a.ba;a.kE=b;c.font=b;}}
function VS(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Cp(a,b,c,d){var e,f,g;e=a.ba;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Ya(a,b){var c,d;if(!b){c=a.ba;d="alphabetic";c.textBaseline=d;}else{d=a.ba;c="top";d.textBaseline=c;}}
function Dj(a,b){var c;c=$rt_ustr(b);return a.ba.measureText(c).width;}
function JK(a,b,c,d){var e,f;e=a.ba;f=$rt_ustr(E_(WS([35,FS(b/16|0),FS(b%16|0),FS(c/16|0),FS(c%16|0),FS(d/16|0),FS(d%16|0)])));e.fillStyle=f;}
var U2=F();
var Y6=F();
function FX(b,c){if(b===c)return 1;return b!==null?b.d1(c):c!==null?0:1;}
function Ck(b){if(b!==null)return b;b=new FQ;Bb(b,B(29));J(b);}
var Bd=F(0);
function QI(){C.call(this);this.oV=null;}
var Bz=F(0);
var Xg=F();
var U6=F(0);
function Ik(b,c,d){var e;e=new J9;b=Fs(B(39),b);e.oz=B(40);e.nv=b;e.nr=c;e.mb=d;return e;}
var VC=F();
function ADz(b,c){return {style:b,weight:c};}
var BQ=F(0);
function QJ(){C.call(this);this.pz=null;}
function Z5(a,b){var c,d,e;c=a.pz;d=0;while(d<b.length){e=b[d];(DH()).fonts.add(e);d=d+1|0;}c.qv=1;b=c.nA;if(b!==null)W9(b);}
var QH=F();
function AJP(a,b){$rt_globals.console.info("font load error"+b);}
var Yz=F();
var Wd=F();
function M7(b,c){var d,e,f;d=(DH()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(DH()).getElementById($rt_ustr(b)).appendChild(d);}
function Va(){return (DH()).createElement("canvas");}
function AG1(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ZZ=F();
var Ls=F();
function AGM(a,b){var c;c=new Bh;Bb(c,$rt_str(b.message));J(c);}
var Sm=F();
function EW(b){return $rt_str(b);}
function J9(){var a=this;C.call(a);a.oz=null;a.nv=null;a.nr=null;a.mb=0;}
var Ij=F(0);
var Wt=F();
function AKV(a,b){return a.rH(b);}
function ABS(a){return a.s7();}
var WW=F();
var E8=F(0);
var PN=F();
var CO=F();
var AOi=null;var AOj=null;var AOk=null;var AOl=null;var AOm=null;var AOn=null;var AOo=null;var AOp=null;var AOq=null;var AOr=null;function Tq(b){var c,d;c=new BA;d=BN(1);d.data[0]=b;Gq(c,d);return c;}
function Kk(b){return b>=65536&&b<=1114111?1:0;}
function Cs(b){return (b&64512)!=55296?0:1;}
function CL(b){return (b&64512)!=56320?0:1;}
function Ko(b){return !Cs(b)&&!CL(b)?0:1;}
function Gp(b,c){return Cs(b)&&CL(c)?1:0;}
function D4(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function GV(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Hp(b){return (56320|b&1023)&65535;}
function Es(b){return FP(b)&65535;}
function FP(b){if(AOl===null){if(AOo===null)AOo=X$();AOl=WI((AOo.value!==null?$rt_str(AOo.value):null));}return Pt(AOl,b);}
function D9(b){return FO(b)&65535;}
function FO(b){if(AOk===null){if(AOp===null)AOp=YR();AOk=WI((AOp.value!==null?$rt_str(AOp.value):null));}return Pt(AOk,b);}
function Pt(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BD(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function Rs(b,c){if(c>=2&&c<=36){b=MZ(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function MZ(b){var c,d,e,f,g,h,i,j,k,l;if(AOj===null){if(AOq===null)AOq=WM();c=(AOq.value!==null?$rt_str(AOq.value):null);d=AIx(FJ(c));e=Ih(d);f=BS(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Lo(d)|0;j=j+Lo(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AOj=f;}g=AOj.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BD(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Gi(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function FF(b){var c;if(b<65536){c=BN(1);c.data[0]=b&65535;return c;}return WS([GV(b),Hp(b)]);}
function Ch(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Ko(b&65535))return 19;if(AOm===null){if(AOr===null)AOr=ZS();d=(AOr.value!==null?$rt_str(AOr.value):null);e=R(LC,16384);f=e.data;g=ED(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=I7(L(d,l));if(m==64){l=l+1|0;m=I7(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bc(c,I7(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=I7(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=ADp(k,k+i|0,Zh(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=ADp(k,k+i|0,Zh(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AOm=CX(e,j);}e=AOm.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.nN)o=p+1|0;else{c=d.mk;if(b>=c)return d.mx.data[b-c|0];c=p-1|0;}}return 0;}
function H8(b){a:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function FC(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ch(b)!=16?0:1;}
function Nq(b){switch(Ch(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Op(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Nq(b);}return 1;}
function U1(){AOi=E($rt_charcls());AOn=R(CO,128);}
function X$(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function YR(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function WM(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ZS(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var KK=F(0);
var Ps=F(0);
var DU=F(0);
var Y5=F(0);
function DH(){return $rt_globals.window.document;}
var FQ=F(Bh);
function LV(){var a=this;C.call(a);a.mm=null;a.mn=null;a.mp=null;}
function AHF(a,b){var c,d,e;c=a.mm;d=a.mn;e=a.mp;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=d.oV;b.nA=c;if(b.qv)W9(c);}}
var Ng=F(0);
var OD=F(0);
var Ou=F(0);
var Qu=F(0);
var TA=F(0);
var Rt=F(0);
var MD=F(0);
var U5=F();
function AFD(a,b,c){a.yG($rt_str(b),JE(c,"handleEvent"));}
function AFV(a,b,c){a.wo($rt_str(b),JE(c,"handleEvent"));}
function AAW(a,b){return a.rH(b);}
function AGS(a,b,c,d){a.u2($rt_str(b),JE(c,"handleEvent"),d?1:0);}
function AJ6(a,b){return !!a.yK(b);}
function ABU(a){return a.s7();}
function AAm(a,b,c,d){a.xw($rt_str(b),JE(c,"handleEvent"),d?1:0);}
var Bu=F(Bh);
var Gg=F(Bu);
var V3=F();
function W4(){return "ping";}
var MC=F(0);
function PE(){var a=this;C.call(a);a.mZ=null;a.oi=null;a.qU=null;a.jC=null;a.kM=null;a.cV=null;a.pJ=null;a.kS=null;a.oB=null;a.e6=null;a.gP=0;a.sq=0;a.nF=null;a.ev=null;a.nc=null;a.jZ=null;a.oY=0;}
function Yr(a){a.cV.focus();}
function Wi(a){var b,c,d;b=new KL;c=a.e6;d=a.jC;b.be=c;b.cE=d;b.u=a;return b;}
function Qd(a){a.sq=$rt_globals.requestAnimationFrame(Bf(a.oi,"onAnimationFrame"));}
function Fi(a){a.gP=1;}
function Qc(a,b,c){var d,e;a.oB.cR=Cx(b,c);d=a.cV;e=b;d.width=e;d=a.cV;e=c;d.height=e;d=a.e6;Bo(d.dk,b,c);e=d.bA;d=d.dk;b=d.a;c=d.b;e.viewport(0,0,b,c);a.ev.ct(a.e6.dk,I9(a));a.ev.b$();}
function FH(a,b){var c,d,e;c=a.nF;d=a.cV;if(FX(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.nF=b;}
function H7(a){return $rt_globals.performance.now()/1000.0;}
function I9(a){return $rt_globals.window.devicePixelRatio;}
function J8(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))Zw(b,1);else{c=new Ta;d=$rt_globals.window.showDirectoryPicker();e=new S_;e.mq=b;e.mr=c;d.then(Bf(e,"f"),Bf(c,"f"));}}
function Kc(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))Zw(b,0);else{c=new TL;d=$rt_globals.window.showOpenFilePicker();e=new TK;e.mW=b;e.mV=c;d.then(Bf(e,"f"),Bf(c,"f"));}}
function CM(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.oY+1|0;a.oY=e;Ur(a.jZ,Fe(e),b);b=a.nc;f=d.length;g=new $rt_globals.Array(f+2|0);h=e;g[0]=h;c=$rt_ustr(c);g[1]=c;h=new $rt_globals.Array();e=0;while(e<f){c=d[e];if(c instanceof BA)c=$rt_ustr(c);else if(J$(c,$rt_arraycls($rt_bytecls())))c=c.data.buffer;else if(J$(c,$rt_arraycls($rt_charcls())))c=c.data.buffer;else if(J$(c,$rt_arraycls($rt_intcls())))c=c.data.buffer;else{if(!(c instanceof Jq)){b=new BC;c=GT(CB(c));h=new M;O(h);G(G(h,B(41)),c);Bb(b,N(h));J(b);}i=c;c
=i.fz;if(c===null)c=i.eb;}g[e+2|0]=c;if(c instanceof $rt_globals.ArrayBuffer?1:0)h.push(c);e=e+1|0;}b.postMessage(g,h);}
function Om(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new Og;e.kW=b;b=ZW(c);d.then(Bf(e,"f"),Bf(b,"f"));}
function Q8(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.mZ;b=(FJ(b)).data;f=f.decode(b);b=e.writeText(f);e=new Ri;e.oE=c;c=ZW(d);b.then(Bf(e,"f"),Bf(c,"f"));}
function T1(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function ZW(b){var c;c=new K8;c.oQ=b;return c;}
var Cw=F(0);
var N4=F();
function Wo(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(!Br(B(42),c))d=(AI8(I(c)<=0?B(29):Dc(c,1))).cx(b);else{d=new Lr;FT(d,b);b=$rt_globals.fetch("test.wasm");e=new LA;b=b.then(Bf(e,"f"));e=new Lz;b=b.then(Bf(e,"f"));e=new Ly;f=new Lx;b.then(Bf(e,"f"),Bf(f,"f"));}return d;}
var Be=F(0);
var Wy=F();
var WQ=F();
var Oz=F(0);
function Sb(){C.call(this);this.l5=null;}
function AEv(a,b){var c,d;c=b;b=a.l5;if(!(!b.ev.cX(c/1000.0)&&!b.gP)){d=b.e6.dk;if(Bc(d.a,d.b)){b.gP=0;b.ev.b$();}}Qd(b);}
function R8(){C.call(this);this.qK=null;}
function Dv(a){Fi(a.qK);}
var HR=F();
function C_(a,b){var c,d,e;a.iX=0;a.el=a.pV;a.hr=a.hr+1|0;c=Fe(0);d=JT(a.gM,c);e=d===null?null:d.d9;d=a.gM;if(e!==null)e=Ye(e,b);else{e=R(Ct,1);e.data[0]=b;}Ur(d,c,e);c=new Tl;c.sm=a;c.sn=0;c.sl=b;return c;}
function NA(){var a=this;HR.call(a);a.c2=null;a.gM=null;a.pV=null;a.el=null;a.iX=0;a.hr=0;}
function Dr(a){var b,c,d,e,f,g,h,i;if(a.iX)return a.el;b=a.el.data.length;c=a.hr;if(b!=c)a.el=R(Ct,c);b=0;d=a.gM;if(d.eW===null){e=new Sn;e.p6=d;d.eW=e;}d=d.eW.ho();while(d.hG()){f=d.gy();g=f.data;h=a.el;i=g.length;DT(f,0,h,b,i);b=b+i|0;}return a.el;}
function QO(a,b){var c,d,e;Dv(a.c2);c=(Dr(a)).data;d=c.length;e=0;a:{while(true){if(e>=d)break a;if(c[e].di(b))break;if(b.la)break a;e=e+1|0;}return 1;}return 0;}
function JQ(a,b,c,d,e){var f,g,h;Dv(a.c2);f=(Dr(a)).data;g=f.length;h=0;while(h<g){if(f[h].dr(b,c,d,e))return 1;h=h+1|0;}return 0;}
function Oi(a,b,c){var d,e,f;Dv(a.c2);d=(Dr(a)).data;e=d.length;f=0;while(f<e){if(d[f].gf(b,c))return 1;f=f+1|0;}return 0;}
var NU=F(0);
function R9(){C.call(this);this.n6=null;}
function ACV(a,b,c){var d,e,f,g;c=a.n6;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.cV){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=I9(c);Qc(c,B4(f.width*g),B4(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Qc(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var Y_=F();
function AF9(b,c){AH6(b,c,AAt());}
function AAt(){return {box:'device-pixel-content-box'};}
function AH6(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cb=F(0);
function R6(){C.call(this);this.lB=null;}
function AHR(a,b){b=a.lB;b.ev.ct(b.e6.dk,I9(b));b.ev.b$();}
var Jn=F(0);
function Ea(){C.call(this);this.eW=null;}
var DY=F(0);
var T0=F(0);
var Lm=F(0);
function VD(){var a=this;Ea.call(a);a.c6=null;a.eE=null;a.tj=null;a.fs=0;a.h5=null;}
function AIJ(){var a=new VD();ABc(a);return a;}
function ABc(a){a.tj=null;a.eE=AOs;}
function Ur(a,b,c){var d,e;a.c6=Kl(a,a.c6,b);d=JT(a,b);e=KO(d,c);KO(d,c);a.fs=a.fs+1|0;return e;}
function JT(a,b){var c,d;c=a.c6;while(true){if(c===null)return null;d=Ez(a.eE,b,c.dG);if(!d)break;c=d>=0?c.bq:c.bj;}return c;}
function Uo(a,b,c){var d,e,f,g,h;d=R(Ey,KF(a));e=d.data;f=0;g=a.c6;a:{while(g!==null){h=Ez(a.eE,b,g.dG);if(c)h= -h|0;if(!h){c=f+1|0;e[f]=g;break a;}if(h>=0)g=HV(g,c);else{h=f+1|0;e[f]=g;g=G4(g,c);f=h;}}c=f;}return CX(d,c);}
function Mg(a,b,c){var d,e,f,g,h;d=R(Ey,KF(a));e=d.data;f=0;g=a.c6;while(g!==null){h=Ez(a.eE,b,g.dG);if(c)h= -h|0;if(h>=0)g=HV(g,c);else{h=f+1|0;e[f]=g;g=G4(g,c);f=h;}}return CX(d,f);}
function Sz(a,b){var c,d,e,f,g;c=R(Ey,KF(a));d=c.data;e=0;f=a.c6;while(f!==null){g=e+1|0;d[e]=f;f=G4(f,b);e=g;}return CX(c,e);}
function Kl(a,b,c){var d,e;if(b===null){b=new Ey;d=null;b.dG=c;b.d9=d;b.dl=1;b.eI=1;return b;}e=Ez(a.eE,c,b.dG);if(!e)return b;if(e>=0)b.bq=Kl(a,b.bq,c);else b.bj=Kl(a,b.bj,c);DV(b);return Ig(b);}
function IA(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Ez(a.eE,c,b.dG);if(d<0)b.bj=IA(a,b.bj,c);else if(d>0)b.bq=IA(a,b.bq,c);else{e=b.bq;if(e===null)return b.bj;f=b.bj;g=R(Ey,e.dl).data;h=0;while(true){b=e.bj;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bq;while(h>0){h=h+(-1)|0;j=g[h];j.bj=b;DV(j);b=Ig(j);}e.bq=b;e.bj=f;DV(e);b=e;}DV(b);return Ig(b);}
function KF(a){var b;b=a.c6;return b===null?0:b.dl;}
function R7(){C.call(this);this.pX=null;}
function AIU(a,b){var c,d,e,f,g,h,i,j;c=a.pX.jZ;b=b.data;if(!(b===W4()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BC;U(b);J(b);}if(b.length<1){b=new BC;U(b);J(b);}d=Fe(b[0]);e=JT(c,d);if(e===null)c=null;else{c.c6=IA(c,c.c6,d);c.fs=c.fs+1|0;c=e.d9;}c=c;f=R(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;e=b[j];if(typeof e==='string'?1:0)d=EW(e);else if(e instanceof $rt_globals.ArrayBuffer?1:0){d=new PH;YT(d);d.f2=e;}else d=(e instanceof $rt_globals.File?1:0)?XO(null,e):!(e instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:XO(e,null);g[h]=d;h=j;}c.m(f);}}
var Ct=F(0);
function AJQ(a,b){return 0;}
function ADJ(a,b){return 0;}
function ADC(a,b,c,d,e){return 0;}
function Z3(a,b,c,d){return 0;}
function AFw(a,b){return 0;}
function ALj(a,b,c){return 0;}
function ACS(a){return null;}
function ACo(a){}
function AGJ(a){}
function No(){var a=this;C.call(a);a.fO=null;a.b4=null;a.sI=null;a.cR=null;}
function Lj(){return (DH()).activeElement;}
function CE(a,b,c,d){b.addEventListener($rt_ustr(c),Bf(d,"handleEvent"));return Tk(a,b,c,d);}
function XX(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bf(d,"handleEvent"),!!e);return Tk(a,b,c,d);}
function Tk(a,b,c,d){var e;e=new NR;e.rw=b;e.ry=c;e.rx=d;return e;}
function QK(a,b){var c;c=new RA;c.qC=b;return c;}
function Eb(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.fO.getBoundingClientRect();e=Cx(B4((b.clientX-d.left)*c),B4((b.clientY-d.top)*c));f=new Bn;g=a.cR;f.a=g.a;f.b=g.b;d=new KI;Q9(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.L=e;d.re=f;return d;}
function Un(a,b,c){var d,e,f,g;d=new MV;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Q9(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.la=0;d.cY=e;d.bn=f;d.c0=c;d.jn=g;return d;}
function Di(a,b){b.stopPropagation();b.preventDefault();}
function Wq(a,b){var c;c=new TX;c.mF=b;b.onpointerdown=Bf(c,"f");c=new TZ;c.lE=b;b.onpointerup=Bf(c,"f");}
function JA(){var a=this;C.call(a);a.nD=null;a.bv=null;a.bA=null;a.pd=null;a.s3=0;a.hI=null;a.ty=null;a.tg=null;a.sk=null;a.e8=null;a.f7=null;a.to=null;a.gO=null;a.dk=null;a.qq=null;a.en=0;a.hX=0;}
function Go(a,b,c){return F4(a,b,c,400,0);}
function Da(a,b,c){return KU(a.nD,b,c);}
function Jj(a,b){var c,d,e,f,g;c=a.bA;d=b.b7;e=b.cP;f=b.cA;g=b.cg;c.clearColor(d,e,f,g);a.bA.clear(16384);}
function Co(a,b){var c;if(b==a.hX)return b;if(!b)a.bA.disable(3042);else{a.bA.enable(3042);a.bA.blendFuncSeparate(770,771,1,1);}c=a.hX;a.hX=b;return c;}
function Bt(a,b,c,d,e){Ju(a,a.hI);Kt(a.hI,a.bA,b,c,d,a.dk);d=a.hI;G5(a.bA,d.pW,e);a.en=Ix(a.gO,a.en);}
function IY(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Ju(a,a.e8);Kt(a.e8,a.bA,b,c,d,a.dk);Q5(a.e8,a.bA,f);d=a.e8;j=a.bA;k=e.b7;l=f.bI;k=k/l;m=e.cP;n=f.cn;m=m/n;l=e.cA/l;n=e.cg/n;o=d.px;j.uniform4f(o,k,m,l,n);d=a.e8;e=a.bA;G5(e,d.mH,g);G5(e,d.lb,h);d=d.lV;e.uniform2f(d,i,0.0);a.en=Ix(a.gO,a.en);}
function Dq(a){var b,c;b=new H6;c=a.pd;b.eh=c;b.fF=c.dt.createTexture();AOt=AOt+1|0;return b;}
function LY(a,b){TC(a.bA,b);}
function Ju(a,b){var c,d;if(b!==a.qq){c=a.bA;d=b.bX;c.useProgram(d);a.qq=b;}}
function YH(){var a=this;JA.call(a);a.sM=null;a.th=null;}
function AMa(a,b){var c=new YH();AEN(c,a,b);return c;}
function AEN(a,b,c){var d,e,f,g,h,i,j,k,l;d=new Q_;a.dk=new Bn;a.en=0;a.nD=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(43)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bA=b;a.bv=KU(d,4,4);g=AAh(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BN(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;k=new NS;Vn();f=AOu;k.dp=b;k.fj=f;k.om=h.length/f.iG|0;k.qk=j.length;l=
b.createBuffer();k.kQ=l;b.bindBuffer(34962,l);f=g.data;b.bufferData(34962,f,35044);k.qF=null;l=b.createBuffer();k.qb=l;if(l!==null){b.bindBuffer(34963,l);f=i.data;b.bufferData(34963,f,35044);}l=null;b.bindBuffer(34962,l);l=null;b.bindBuffer(34963,l);a.gO=k;a.s3=FK(e,B(44));f=new NT;f.dt=b;a.pd=f;i=R(DJ,6);g=i.data;f=new Sx;JZ(f,b,B(45),B(46),AOu);e=f.bX;f.pW=b.getUniformLocation(e,"uColor");a.hI=f;g[0]=f;f=ALI(b,B(47));a.ty=f;g[1]=f;f=new Oj;JZ(f,b,B(45),B(48),AOu);a.tg=f;g[2]=f;f=new RG;QM(f,b,B(49));d=f.bX;f.r9
=b.getUniformLocation(d,"uContrast");a.sk=f;g[3]=f;f=AMb(b);a.e8=f;g[4]=f;f=AM9(b);a.f7=f;g[5]=f;a.to=i;TC(b,B(50));a.th=new Q$;a.sM=c;}
function F4(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=a.bv;g=VS(b,c,d,e);HX(f,g);h=f.ba.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Dj(f,B(51));m=Dj(f,B(52));h=new Jr;h.j8=b;h.rJ=c;n=c|0;if(n!==c){b=new M;O(b);Fz(G(b,B(53)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.iu=n;h.rQ=d;h.sj=e;h.gz=i;h.fD=j;h.rF=l;h.hw=k;h.kV=g;h.i9=EH(i);h.pa=EH(h.fD);d=m*32.0|0;n=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;a:{h.rN=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(54);}h.ru=b;return h;}
function C3(){C.call(this);this.V=null;}
function FT(a,b){a.V=b;}
var HQ=F();
var AOs=null;function Ez(a,b,c){return b.gn(c);}
function Xl(){AOs=new HQ;}
function ST(){C.call(this);this.k8=null;}
function AHj(a,b){var c;c=a.k8;if(QO(c.b4,Un(c,b,1)))Di(c,b);}
function SU(){C.call(this);this.oD=null;}
function AHt(a,b){var c;c=a.oD;if(QO(c.b4,Un(c,b,0)))Di(c,b);}
function SV(){C.call(this);this.lQ=null;}
function AF_(a,b){var c,d,e,f,g,h;c=a.lQ;if(c.cR!==null){d=Eb(c,b);e=c.b4;Dv(e.c2);f=(Dr(e)).data;g=f.length;h=0;a:{while(h<g){if(f[h].dK(d))break a;h=h+1|0;}}Di(c,b);}}
function SW(){C.call(this);this.qD=null;}
function AFE(a,b){var c,d;c=a.qD;b.button;if(c.cR!==null){d=Eb(c,b);JQ(c.b4,d,b.button,1,1);}}
function SX(){C.call(this);this.nW=null;}
function AFZ(a,b){var c,d;c=a.nW;b.button;if(c.cR!==null){d=Eb(c,b);if(JQ(c.b4,d,b.button,0,1))Di(c,b);}}
function SY(){C.call(this);this.lk=null;}
function AH4(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.lk;if(c.cR!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.b4;f=Eb(c,b);g=d;h=g*b.deltaX;i=g*b.deltaY;Dv(e.c2);j=(Dr(e)).data;k=j.length;l=0;b:{while(l<k){if(j[l].fW(f,h,i))break b;l=l+1|0;}}Di(c,b);}}
function SZ(){C.call(this);this.qT=null;}
function AEe(a,b){var c,d;c=a.qT;if(c.cR!==null){d=Eb(c,b);if(JQ(c.b4,d,b.button,1,2))Di(c,b);}}
function S0(){C.call(this);this.n$=null;}
function AK2(a,b){var c,d,e,f,g,h,i;c=a.n$;if(c.cR!==null){d=Eb(c,b);e=c.b4;Dv(e.c2);f=(Dr(e)).data;g=f.length;h=0;a:{while(h<g){if(f[h].fn(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Di(c,b);}}
function S1(){C.call(this);this.lu=null;}
function ADy(a,b){var c,d,e;b=a.lu.b4;c=(Dr(b)).data;d=c.length;e=0;while(e<d){c[e].nq();e=e+1|0;}Dv(b.c2);}
function S2(){C.call(this);this.p4=null;}
function AI1(a,b){var c,d,e;b=a.p4.b4;c=(Dr(b)).data;d=c.length;e=0;while(e<d){c[e].iM();e=e+1|0;}Dv(b.c2);}
function ZO(){C.call(this);this.pw=null;}
function ALn(a){var b=new ZO();AA3(b,a);return b;}
function AA3(a,b){a.pw=b;}
function AKG(a,b){var c;c=a.pw;if(c.cR!==null)Eb(c,b);}
function ZP(){C.call(this);this.oR=null;}
function AL7(a){var b=new ZP();ALh(b,a);return b;}
function ALh(a,b){a.oR=b;}
function AFQ(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.oR;if(Lj()===c.fO){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Dr(c.b4)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].jo();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.b4.c2;m=new LO;m.qf=k;m.qg=l;g.getAsString(Bf(m,"accept"));Di(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);m=new M;O(m);G(G(G(G(m,B(55)),k),B(56)),g);$rt_globals.console.info($rt_ustr(N(m)));}e=e+1|0;}}}
function ZQ(){C.call(this);this.kz=null;}
function ANm(a){var b=new ZQ();AGF(b,a);return b;}
function AGF(a,b){a.kz=b;}
function AGb(a,b){var c;c=a.kz;if(Lj()===c.fO&&Oi(c.b4,QK(c,b),0))Di(c,b);}
function ZR(){C.call(this);this.qj=null;}
function AMf(a){var b=new ZR();AH3(b,a);return b;}
function AH3(a,b){a.qj=b;}
function AHI(a,b){var c;c=a.qj;if(Lj()===c.fO&&Oi(c.b4,QK(c,b),1))Di(c,b);}
var Q0=F(0);
var Q_=F();
function KU(a,b,c){var d,e,f;d=new OM;AOh=AOh+1|0;d.jJ=b;d.iY=c;e=(DH()).createElement("canvas");d.hH=e;f=b;e.width=f;e=d.hH;f=c;e.height=f;d.ba=d.hH.getContext("2d");return d;}
var Q$=F();
function AE7(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function KL(){var a=this;C.call(a);a.be=null;a.cE=null;a.u=null;}
function N1(){C.call(this);this.rX=null;}
function Bn(){var a=this;C.call(a);a.a=0;a.b=0;}
function Cx(a,b){var c=new Bn();V2(c,a,b);return c;}
function V2(a,b,c){a.a=b;a.b=c;}
function C1(a,b){a.a=b.a;a.b=b.b;}
function Bo(a,b,c){a.a=b;a.b=c;}
function Z6(a){var b,c,d;b=a.a;c=a.b;d=new M;O(d);T(G(T(G(d,B(57)),b),B(58)),c);return N(d);}
var YG=F();
var Vq=F(0);
function NT(){C.call(this);this.dt=null;}
function JX(){var a=this;C.call(a);a.bX=null;a.td=null;}
function XN(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(59):B(60);d=$rt_str(b.getShaderInfoLog(e));g=new M;O(g);G(G(g,f),d);f=N(g);b.deleteShader(e);Bq(Bv(),f);b=new Bh;Bb(b,f);J(b);}
function DJ(){var a=this;JX.call(a);a.lt=null;a.mG=null;a.oH=null;}
function AOv(a,b,c,d){var e=new DJ();JZ(e,a,b,c,d);return e;}
function JZ(a,b,c,d,e){var f,g,h,i,j,k;a.td=e;f=XN(b,35633,c);d=XN(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bX=g;h=e.ow.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bX;k=c.fT;c=c.mR;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bX;b.linkProgram(c);if(b.getProgramParameter(c,35714)){TC(b,B(61));a.oH=new Bn;c=a.bX;a.lt=b.getUniformLocation(c,"uResolution");c=a.bX;a.mG=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bh;c=new M;O(c);G(G(c,B(62)),d);Bb(b,N(c));J(b);}
function V9(a,b,c){var d,e,f;d=a.oH;if(!(d.a==c.a&&d.b==c.b?1:0)){C1(d,c);d=a.lt;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function Kt(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.mG;b.uniform4f(e,i,l,h,j);V9(a,b,f);}
function Sx(){DJ.call(this);this.pW=null;}
function D_(){DJ.call(this);this.nR=null;}
function ALI(a,b){var c=new D_();QM(c,a,b);return c;}
function AOw(a,b,c){var d=new D_();QQ(d,a,b,c);return d;}
function QM(a,b,c){QQ(a,b,B(45),c);}
function QQ(a,b,c,d){Vn();JZ(a,b,c,d,AOu);c=a.bX;a.nR=b.getUniformLocation(c,"sDiffuse");}
function Q5(a,b,c){var d;d=a.nR;b.uniform1i(d,0);b.activeTexture(33984);c=c.fF;b.bindTexture(3553,c);}
var Oj=F(DJ);
function RG(){D_.call(this);this.r9=null;}
function X1(){var a=this;D_.call(a);a.px=null;a.mH=null;a.lb=null;a.lV=null;}
function AMb(a){var b=new X1();AHY(b,a);return b;}
function AHY(a,b){var c;QQ(a,b,B(63),B(64));c=a.bX;a.px=b.getUniformLocation(c,"uTexTransform");c=a.bX;a.mH=b.getUniformLocation(c,"uColor");c=a.bX;a.lb=b.getUniformLocation(c,"uBgColor");c=a.bX;a.lV=b.getUniformLocation(c,"uContrast");}
function VE(){var a=this;D_.call(a);a.qG=null;a.qE=null;a.m3=null;}
function AM9(a){var b=new VE();AC8(b,a);return b;}
function AC8(a,b){var c,d;QM(a,b,B(65));c=a.bX;a.qG=b.getUniformLocation(c,"uColorB");d=a.bX;a.qE=b.getUniformLocation(d,"uColorF");d=a.bX;a.m3=b.getUniformLocation(d,"uContrast");}
var O7=F(0);
var ZX=F(0);
function G5(b,c,d){var e,f,g,h;e=d.b7;f=d.cP;g=d.cA;h=d.cg;b.uniform4f(c,e,f,g,h);}
function TC(b,c){var d,e;d=b.getError();if(d){b=Bv();e=new M;O(e);T(G(e,c),d);Bq(b,N(e));}}
function NR(){var a=this;C.call(a);a.rw=null;a.ry=null;a.rx=null;}
function NS(){var a=this;C.call(a);a.dp=null;a.fj=null;a.kQ=null;a.qF=null;a.qb=null;a.om=0;a.qk=0;}
function Ix(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.fj.oM;d=a.dp;b=b^c;e=0;while(b){f=1<<e;if(b&f){if(!(c&f))d.disableVertexAttribArray(e);else d.enableVertexAttribArray(e);b=b^f;}e=e+1|0;}b=0;d=a.dp;g=a.kQ;d.bindBuffer(34962,g);h=a.fj.ki.data;f=h.length;i=0;while(i<f){d=h[i];g=a.dp;j=d.fT;k=d.d8;l=a.fj.iG*4|0;e=b*4|0;g.vertexAttribPointer(j,k,5126,!!0,l,e);b=b+d.d8|0;i=i+1|0;}a:{d=a.qF;if(d!==null){b=0;a.dp.bindBuffer(34962,d);h=a.fj.nC.data;e=h.length;f=0;while(true){if(f>=e)break a;d=h[f];g=a.dp;i=d.fT;j=d.d8;m
=d.mi;n=a.fj.mC;g.vertexAttribPointer(i,j,5121,!!m,n,b);b=b+d.d8|0;f=f+1|0;}}}d=a.qb;if(d===null){b=a.om;if(b>0)a.dp.drawArrays(4,0,b);}else{a.dp.bindBuffer(34963,d);d=a.dp;f=a.qk;d.drawElements(4,f,5123,0);}return c;}
function Cd(){var a=this;C.call(a);a.rr=null;a.b6=0;}
function Dm(a,b,c){a.rr=b;a.b6=c;}
function AI$(a){return a.b6;}
function AAO(a,b){return a!==b?0:1;}
function Hr(a){var b;b=CB(a);if(!PG(RJ(b),E(Cd)))b=RJ(b);return b;}
function UG(a,b){var c,d,e;if(Hr(b)===Hr(a))return BD(a.b6,b.b6);c=new BC;d=Hr(a);b=Hr(b);e=new M;O(e);G(G(G(G(e,B(66)),d),B(67)),b);Bb(c,N(e));J(c);}
function AFb(a,b){return UG(a,b);}
function F0(){var a=this;Cd.call(a);a.ow=null;a.ki=null;a.nC=null;a.iG=0;a.mC=0;a.oM=0;}
var AOu=null;var AOx=null;function Vn(){Vn=Bk(F0);AEF();}
function AEF(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new F0;c=R(Dz,2);d=c.data;AJZ();d[0]=AOy;d[1]=AOz;Vn();Dm(b,B(68),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];U4();switch(AOA.data[l.jV.b6]){case 1:f=f+l.d8|0;h=h+1|0;break a;case 2:e=e+l.d8|0;g=g+1|0;break a;default:}}i=i|1<<l.fT;k=k+1|0;}b.ow=c;b.iG=e;b.mC=f;b.oM=i;c=R(Dz,g);m=c.data;b.ki=c;c=R(Dz,h);n=c.data;b.nC=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];U4();switch(AOA.data[l.jV.b6]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}AOu=b;c=R(F0,1);c.data[0]=b;AOx=c;}
var JH=F();
var AOB=null;var AOC=null;function Bv(){if(AOB===null)AOB=AGk(AOD,0);return AOB;}
function J1(){if(AOC===null)AOC=AGk(AOE,0);return AOC;}
function DT(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Yb(b)&&(e+f|0)<=Yb(d)){a:{b:{if(b!==d){g=GZ(CB(b));h=GZ(CB(d));if(g!==null&&h!==null){if(g===h)break b;if(!GK(g)&&!GK(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.d7;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&XT(n.constructor,o)?1:0)){OX(b,c,d,e,j);b=new Hq;U(b);J(b);}j=j+1|0;k=m;}OX(b,c,d,e,f);return;}if(!GK(g))break a;if(GK(h))break b;else break a;}b=new Hq;U(b);J(b);}}OX(b,c,d,
e,f);return;}b=new Hq;U(b);J(b);}b=new Bu;U(b);J(b);}d=new FQ;Bb(d,B(69));J(d);}
function OX(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EY(){return Long_fromNumber(new Date().getTime());}
function Yh(){return ANZ($rt_globals.performance.now()*1000000.0);}
var Ks=F(0);
var Qf=F(0);
var Rj=F(0);
var FD=F();
function H4(){FD.call(this);this.q5=null;}
function Wz(){var a=this;H4.call(a);a.s1=0;a.iT=0;a.gY=null;a.ik=null;a.o7=null;}
function AGk(a,b){var c=new Wz();AJL(c,a,b);return c;}
function AJL(a,b,c){a.q5=b;b=new M;O(b);a.gY=b;a.ik=BN(32);a.s1=c;Wn();a.o7=AOF;}
function Qp(a,b,c,d){var e,$$je;e=a.q5;if(e===null)a.iT=1;if(!(a.iT?0:1))return;a:{try{e.ib(b,c,d);break a;}catch($$e){$$je=DR($$e);if($$je instanceof Hc){}else{throw $$e;}}a.iT=1;}}
function L5(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=Xb(b,c,d-c|0);e=ED(Bg(16,Z(e.length,1024)));g=W3(e,0,e.data.length);h=a.o7;i=new Nm;b=ED(1);j=b.data;j[0]=63;Gf();k=AOG;i.jF=k;i.iZ=k;c=j.length;if(c&&c>=i.kk){i.rm=h;i.mP=b.eH();i.sV=2.0;i.kk=4.0;i.mg=BN(512);i.li=ED(512);k=AOH;if(k===null){i=new BC;Bb(i,B(70));J(i);}i.jF=k;i.iZ=k;a:while(true){if(i.gV==3){f=new DW;U(f);J(f);}i.gV=2;b:{while(true){try{k=Vf(i,f,g);}catch($$e){$$je=DR($$e);if($$je instanceof Bh){f=$$je;break a;}else{throw $$e;}}if(G3(k))
{d=BU(f);if(d<=0)break b;k=DB(d);}else if(Gc(k))break;h=!Ki(k)?i.jF:i.iZ;c:{if(h!==AOH){if(h===AOI)break c;else break b;}d=BU(g);b=i.mP;l=b.data.length;if(d<l){k=AOJ;break b;}Tn(g,b,0,l);}Eh(f,f.K+IB(k)|0);}}l=Gc(k);Qp(a,e,0,g.K);L3(g);if(!l){while(true){d=i.gV;if(d!=2&&d!=4){f=new DW;U(f);J(f);}f=AOK;if(f===f)i.gV=3;l=Gc(f);Qp(a,e,0,g.K);L3(g);if(!l)break;}return;}}J(ACp(f));}i=new BC;Bb(i,B(71));J(i);}
function Bq(a,b){var c,d,e,f,g,h,i,j;BB(BR(a.gY,b),10);b=a.gY;c=b.I;d=a.ik;if(c>d.data.length)d=BN(c);e=0;f=0;if(e>c){b=new Bu;Bb(b,B(72));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.w.data;j=e+1|0;g[f]=i[e];f=h;e=j;}L5(a,d,0,c);a.gY.I=0;}
function Fr(){FD.call(this);this.sO=null;}
function Uq(a){a.sO=ED(1);}
var JG=F(Fr);
var AOD=null;function AE0(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Yg(){var b;b=new JG;Uq(b);AOD=b;}
function Dz(){var a=this;Cd.call(a);a.mR=null;a.jV=null;a.d8=0;a.mi=0;a.fT=0;}
var AOy=null;var AOz=null;var AOL=null;function AJZ(){AJZ=Bk(Dz);AD0();}
function AMn(a,b,c,d,e,f,g){var h=new Dz();Sr(h,a,b,c,d,e,f,g);return h;}
function Sr(a,b,c,d,e,f,g,h){AJZ();Dm(a,b,c);a.mR=d;a.jV=e;a.d8=f;a.mi=g;a.fT=h;}
function AD0(){var b;b=new Dz;Xy();Sr(b,B(73),0,B(74),AOM,2,0,0);AOy=b;b=AMn(B(75),1,B(76),AOM,2,0,1);AOz=b;AOL=H(Dz,[AOy,b]);}
function HY(){var a=this;C.call(a);a.rc=null;a.sa=null;}
function Yt(b){var c,d;if(FI(b))J(Ws(b));if(!Yv(L(b,0)))J(Ws(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(Yv(d))break a;else J(Ws(b));}}c=c+1|0;}}
function Yv(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Kx=F(HY);
var AOF=null;function Wn(){Wn=Bk(Kx);AC5();}
function YJ(a){var b,c;b=new Qq;b.d4=B(77);Gf();c=AOG;b.fI=c;b.jQ=c;b.rZ=a;b.kr=0.3333333432674408;b.so=0.5;b.lq=ED(512);b.oC=BN(512);return b;}
function AC5(){var b,c,d,e,f;b=new Kx;Wn();c=R(BA,0);d=c.data;Yt(B(78));e=d.length;f=0;while(f<e){Yt(d[f]);f=f+1|0;}b.rc=B(78);b.sa=c.eH();AOF=b;}
var IT=F();
var AON=null;var AOA=null;function U4(){U4=Bk(IT);AHa();}
function AHa(){var b,c;Xy();b=BS((AOO.eH()).data.length);c=b.data;AOA=b;c[AOP.b6]=1;c[AOM.b6]=2;XA();c=BS((AOQ.eH()).data.length);b=c.data;AON=c;b[AOR.b6]=1;b[AOS.b6]=2;}
function M$(){var a=this;C.call(a);a.ex=null;a.kc=null;a.hZ=null;a.oU=null;a.mB=null;a.mK=null;}
function WC(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.ex,b,c));}
function Lc(a,b){var c,d,e,f,g,h,i,$$je;c=new BA;d=b;while(a.kc[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.ex,b,d));f=e.data;El();d=f.length;Wn();g=AOF;h=W3(e,0,d);a:{try{i=YJ(g);Gf();g=Vx(XQ(Zd(i,AOH),AOH),h);break a;}catch($$e){$$je=DR($$e);if($$je instanceof E7){g=$$je;}else{throw $$e;}}h=new Tu;h.hj=1;h.hE=1;h.f6=B(79);h.i0=g;J(h);}if(!g.K&&g.cN==g.ka)c.bT=g.fS;else{f=BN(BU(g));e=f.data;c.bT=f;LH(g,f,0,e.length);}return c;}
function Ll(a,b){var c,d,e;c=new BA;d=b>>>1|0;e=d;while(a.hZ[e]){e=e+1|0;}d=e-d|0;Gq(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.ex,b,d)));return c;}
var F3=F(Cd);
var AOP=null;var AOM=null;var AOO=null;function Xy(){Xy=Bk(F3);ACE();}
function AC1(a,b){var c=new F3();YK(c,a,b);return c;}
function YK(a,b,c){Xy();Dm(a,b,c);}
function ACE(){var b;AOP=AC1(B(80),0);b=AC1(B(81),1);AOM=b;AOO=H(F3,[AOP,b]);}
var Fx=F(Cd);
var AOR=null;var AOS=null;var AOQ=null;function XA(){XA=Bk(Fx);ADc();}
function AK6(a,b){var c=new Fx();Vu(c,a,b);return c;}
function Vu(a,b,c){XA();Dm(a,b,c);}
function ADc(){var b;AOR=AK6(B(82),0);b=AK6(B(83),1);AOS=b;AOQ=H(Fx,[AOR,b]);}
var Sc=F(DD);
var BC=F(Bh);
function Yy(){BC.call(this);this.rq=null;}
function Ws(a){var b=new Yy();AJn(b,a);return b;}
function AJn(a,b){U(a);a.rq=b;}
var Kw=F(0);
function TX(){C.call(this);this.mF=null;}
function AIy(a,b){a.mF.setPointerCapture(b.pointerId);}
function TZ(){C.call(this);this.lE=null;}
function ABw(a,b){a.lE.releasePointerCapture(b.pointerId);}
var WU=F();
function Jv(){return AKW();}
function AKW(){return Math.random();}
function Z(b,c){if(b<c)c=b;return c;}
function Bg(b,c){if(b>c)c=b;return c;}
function KV(b){if(b<=0)b= -b|0;return b;}
var Ve=F();
function U8(b,c){var d,e,f,g;b=b.data;d=BN(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Zh(b,c){var d,e,f,g;b=b.data;d=ED(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ZG(b,c){var d,e,f,g;b=b.data;d=BS(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function CX(b,c){var d,e,f,g;d=b.data;e=Rk(GZ(CB(b)),c);f=Z(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function VQ(b){var c,d,e;if(b===null)return B(27);c=new M;O(c);BR(c,B(84));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BR(c,B(85));G(c,e[d]);d=d+1|0;}BR(c,B(86));return N(c);}
function X_(b){var c,d,e;if(b===null)return B(27);c=new M;O(c);BR(c,B(84));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BR(c,B(85));T(c,e[d]);d=d+1|0;}BR(c,B(86));return N(c);}
function AIO(b){var c,d,e;if(b===null)return B(27);c=new M;O(c);BR(c,B(84));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BR(c,B(85));Fz(c,e[d]);d=d+1|0;}BR(c,B(86));return N(c);}
function AK8(b){var c,d,e;if(b===null)return B(27);c=new M;O(c);BR(c,B(84));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BR(c,B(85));Ni(c,e[d]);d=d+1|0;}BR(c,B(86));return N(c);}
function Ic(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BC;U(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Wa(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AOs;e=R(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Z(j,h+f|0);l=h+(2*f|0)|0;m=Z(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.kb(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function XK(b,c){return XZ(b,0,b.data.length,c);}
function XZ(b,c,d,e){var f,g,h,i,j;f=BD(c,d);if(f>0){g=new BC;U(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function F9(){var a=this;C.call(a);a.ka=0;a.K=0;a.cN=0;a.f0=0;}
function So(a,b){a.f0=(-1);a.ka=b;a.cN=b;}
function Eh(a,b){var c,d,e;if(b>=0&&b<=a.cN){a.K=b;if(b<a.f0)a.f0=0;return a;}c=new BC;d=a.cN;e=new M;O(e);BB(T(G(T(G(e,B(87)),b),B(88)),d),93);Bb(c,N(e));J(c);}
function BU(a){return a.cN-a.K|0;}
function Dl(a){return a.K>=a.cN?0:1;}
var Pe=F(0);
var Js=F(F9);
function ZE(b){var c,d;if(b>=0)return AHv(0,b,BN(b),0,b,0);c=new BC;d=new M;O(d);T(G(d,B(89)),b);Bb(c,N(d));J(c);}
function Xb(b,c,d){return AHv(0,b.data.length,b,c,c+d|0,0);}
function LH(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bu;i=new M;O(i);T(G(T(G(i,B(90)),g),B(91)),f);Bb(h,N(i));J(h);}if(BU(a)<d){j=new Ka;U(j);J(j);}if(d<0){j=new Bu;k=new M;O(k);G(T(G(k,B(92)),d),B(93));Bb(j,N(k));J(j);}g=a.K;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.fS.data[m+a.j1|0];l=l+1|0;c=n;m=o;}a.K=g+d|0;return a;}}b=b.data;j=new Bu;d=b.length;k=new M;O(k);BB(T(G(T(G(k,B(94)),c),B(88)),d),41);Bb(j,N(k));J(j);}
function Iz(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.kd){b=new HF;U(b);J(b);}e=d-c|0;if(BU(a)<e){b=new GM;U(b);J(b);}if(c>I(b)){f=new Bu;d=I(b);b=new M;O(b);BB(T(G(T(G(b,B(95)),c),B(88)),d),41);Bb(f,N(b));J(f);}if(d>I(b)){f=new Bu;c=I(b);b=new M;O(b);T(G(T(G(b,B(96)),d),B(97)),c);Bb(f,N(b));J(f);}if(c>d){b=new Bu;f=new M;O(f);T(G(T(G(f,B(95)),c),B(98)),d);Bb(b,N(f));J(b);}g=a.K;while(c<d){h=g+1|0;i=c+1|0;Pi(a,g,L(b,c));g=h;c=i;}a.K=a.K+e|0;return a;}
function Il(){var a=this;F9.call(a);a.iS=0;a.jw=null;a.sA=null;}
function W3(b,c,d){var e,f,g;e=b.data;f=new Tm;g=e.length;d=c+d|0;So(f,g);AEK();f.sA=AOT;f.iS=0;f.jw=b;f.K=c;f.cN=d;f.sE=0;f.kL=0;return f;}
function Tn(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.kL){e=new HF;U(e);J(e);}if(BU(a)<d){e=new GM;U(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bu;j=new M;O(j);T(G(T(G(j,B(99)),h),B(91)),g);Bb(i,N(j));J(i);}if(d<0){e=new Bu;i=new M;O(i);G(T(G(i,B(92)),d),B(93));Bb(e,N(i));J(e);}h=a.K;k=h+a.iS|0;l=0;while(l<d){b=a.jw.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.K=h+d|0;return a;}}b=b.data;e=new Bu;d=b.length;i=new M;O(i);BB(T(G(T(G(i,B(94)),c),B(88)),d),41);Bb(e,N(i));J(e);}
function L3(a){a.K=0;a.cN=a.ka;a.f0=(-1);return a;}
function GB(){C.call(this);this.tt=null;}
var AOI=null;var AOH=null;var AOG=null;function Gf(){Gf=Bk(GB);AFT();}
function Zr(a){var b=new GB();Yq(b,a);return b;}
function Yq(a,b){Gf();a.tt=b;}
function AFT(){AOI=Zr(B(100));AOH=Zr(B(101));AOG=Zr(B(102));}
var Lr=F(C3);
function AJ7(a,b){return 0;}
function AFM(a){}
function AHA(a,b,c){}
var ZH=F();
function AI8(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(103)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(JC(b)){case -1519338717:if(!Br(b,B(104)))break a;d=1;break a;case -1509980539:if(!Br(b,B(105)))break a;d=10;break a;case -811765794:if(!Br(b,B(106)))break a;d=4;break a;case -785237654:if(!Br(b,B(107)))break a;d=8;break a;case -631889171:if(!Br(b,B(108)))break a;d=6;break a;case 3343967:if(!Br(b,B(109)))break a;d=7;break a;case 3556498:if(!Br(b,B(110)))break a;d=3;break a;case 485517998:if
(!Br(b,B(111)))break a;d=5;break a;case 544901384:if(!Br(b,B(112)))break a;d=2;break a;case 1030621992:if(!Br(b,B(113)))break a;d=12;break a;case 1554501643:if(!Br(b,B(114)))break a;d=11;break a;case 1609169232:if(!Br(b,B(115)))break a;d=9;break a;default:}}b:{switch(d){case 1:break;case 2:case 3:b=new P9;break b;case 4:b=new P8;break b;case 5:b=new P7;break b;case 6:case 7:b=new P6;break b;case 8:b=new P5;break b;case 9:b=new P4;break b;case 10:b=new P3;break b;case 11:b=new P2;break b;case 12:b=new P1;break b;default:b
=new Oh;break b;}b=new P$;}return b;}
var Xa=F();
var It=F(Js);
function WV(){var a=this;It.call(a);a.kd=0;a.j1=0;a.fS=null;}
function AHv(a,b,c,d,e,f){var g=new WV();ALb(g,a,b,c,d,e,f);return g;}
function ALb(a,b,c,d,e,f,g){So(a,c);a.K=e;a.cN=f;a.j1=b;a.kd=g;a.fS=d;}
function Pi(a,b,c){a.fS.data[b+a.j1|0]=c;}
function Jh(){var a=this;C.call(a);a.rm=null;a.mP=null;a.sV=0.0;a.kk=0.0;a.jF=null;a.iZ=null;a.gV=0;}
function J6(){var a=this;C.call(a);a.fk=0;a.gA=0;}
var AOK=null;var AOJ=null;function Vl(a,b){var c=new J6();VN(c,a,b);return c;}
function VN(a,b,c){a.fk=b;a.gA=c;}
function G3(a){return a.fk?0:1;}
function Gc(a){return a.fk!=1?0:1;}
function I$(a){return !Od(a)&&!Ki(a)?0:1;}
function Od(a){return a.fk!=2?0:1;}
function Ki(a){return a.fk!=3?0:1;}
function IB(a){var b;if(I$(a))return a.gA;b=new Fv;U(b);J(b);}
function DB(b){return Vl(2,b);}
function RU(a){var b,c;switch(a.fk){case 0:b=new NV;U(b);J(b);case 1:b=new TB;U(b);J(b);case 2:b=new RN;c=a.gA;U(b);b.tK=c;J(b);case 3:b=new NN;c=a.gA;U(b);b.tF=c;J(b);default:}}
function V_(){AOK=Vl(0,0);AOJ=Vl(1,0);}
var Vb=F();
var JF=F(0);
var LA=F();
function ADl(a,b){return b.arrayBuffer();}
var Lz=F();
function AGR(a,b){var c,d;c=new M8;d=new M6;return $rt_globals.WebAssembly.instantiate(b,AE6(Bf(c,"f"),Bf(d,"f")));}
var Ly=F();
function AHp(a,b){ABq(b);}
var Lx=F();
function ABY(a,b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
var P$=F();
function AG5(a,b){return ANq(b);}
var P9=F();
function AA7(a,b){return ALL(b);}
var P8=F();
function AEk(a,b){var c,d;c=new Su;EN(c,b);c.da=Vh();c.cp=Vh();c.jt=new Bn;c.jW=new Bn;c.gp=Hd(b.u);c.dT=AA4(b.be);C_(b.cE,c);PF(c.cp);b=Go(b.be,B(116),25);c.kj=b;d=c.dT;Cm();Sy(d,b,AOU);Bx(c.f4,Dy(43));LR(c,c.da);LR(c,c.cp);b=c.da;b.hx=new P_;d=c.cp;d.hx=new Qb;d.hO=new Tx;d.pk=new Ty;Jg(b,Ku(LM(0)));Jg(c.cp,Ku(LM(0)));return c;}
var P7=F();
function AEg(a,b){var c,d;c=new TN;EN(c,b);c.qz=new Bn;c.oF=new Bn;c.qX=new Bn;c.ma=Hd(b.u);c.cw=Zm(b.be);C_(b.cE,c);b=Go(b.be,B(116),25);d=c.cw;Cm();J2(d,b,AOV);Bx(c.f4,Dy(43));return c;}
var P6=F();
function AEL(a,b){var c,d,e,f;c=new Nc;FT(c,b);c.e1=AF5();c.df=0;c.or=500;c.qo=Ux(0,0,0,255);c.jX=20;c.qA=20;c.lZ=YU();d=b.cE;e=new SL;e.fU=c;f=new Ut;f.oh=e;e.nJ=f;C_(d,e);b=b.be;c.dH=b;Qv(c.e1,Go(b,B(116),c.qA),c.jX,c.dH);c.fH=LS();return c;}
var P5=F();
function ABe(a,b){var c;c=new On;EN(c,b);C_(b.cE,c);return c;}
var P4=F();
function ACz(a,b){return AM4(b);}
var P3=F();
function AHi(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Te;EN(c,b);c.c9=NC(0,0,300,300);c.d2=PA(0,0,3,3);d=b.be;b=b.cE;e=new QE;e.jc=c;e.p8=new Bn;C_(b,e);b=Da(d,200,50);Fg(b,B(117),11.0);JK(b,187,187,187);Cp(b,B(118),0.0,20.0);Cp(b,B(118),0.25,40.0);e=Dq(d);Df(e,b);HC(b);c.mM=e;IN(c.c9,e);Kf(c.c9);b=c.c9.P;EA();Bx(b,AOW);Bx(c.c9.bh,Cq(204,120,50));XA();b=AOS;f=ED((b===b?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=
(-1);j=j+1|0;}h=h+1|0;}a:{d=Dq(d);U4();switch(AON.data[b.b6]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new D2;U(b);J(b);}b:{Lu(d,5,5,h);e=d.eh.dt;switch(AON.data[b.b6]){case 1:i=6403;break b;case 2:i=6408;break b;default:}b=new D2;U(b);J(b);}b=f.data;m=b.buffer;n=b.byteOffset;o=b.byteLength;p=new $rt_globals.Uint8Array(m,n,o);e.texSubImage2D(3553,0,0,0,5,5,i,5121,p);c.l_=d;Bo(c.d2.h,d.bI,d.cn);Bx(c.d2.P,c.f4);return c;}
var P2=F();
function AKm(a,b){var c,d,e;c=new MN;FT(c,b);c.sr=20;c.tW=11;c.r6=220;c.hh=new Bn;c.sQ=5000;c.fv=1;c.ey=H(Hx,[Dy(0),Dy(255)]);c.dn=b.be;b=b.cE;d=new Ok;d.f9=c;e=new SD;e.qM=d;d.l1=e;C_(b,d);b=Da(c.dn,200,220);c.hY=b;Fg(b,B(116),20.0);b=Da(c.dn,200,20);c.ep=b;Fg(b,B(116),20.0);c.gk=LS();return c;}
var P1=F();
function AK$(a,b){var c,d;c=new Hi;EN(c,b);C_(b.cE,c);b=!T1(b.u)?B(119):B(120);d=new M;O(d);G(G(d,B(121)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var Oh=F();
function AFx(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=new OG;UB(c,b);d=c.t;e=new J0;f=R(BA,8);g=I(B(122));h=0;i=0;j=g+1|0;while(true){k=FU(B(122),10,i);l=k>=0?B5(B(122),i,k):Dc(B(122),i);m=f.data;n=h+1|0;i=m.length;if(i==h)f=CX(f,i*2|0);f.data[h]=l;f=f;i=k<0?j:k+1|0;if(i>g)break;h=n;}if(f.data.length!=n)f=CX(f,n);o=f.data;b=null;l=null;e.e3=b;e.ra=l;e.hc=B(123);e.m2=null;p=new ID;i=o.length;if(!i)q=K_(B(29));else{q=R(Cl,i);m=q.data;g=0;while(g<i){b=new Cl;r=R(BZ,1);r.data[0]=Xk(o[g]);GY(b,r);m[g]=b;g=
g+1|0;}}f=q.data;p.dq=GX();p.de=GX();p.ge=Cy();if(!f.length){b=new BC;Yc(b);J(b);}p.A=q;p.eO=0;p.cI=0;p.cC=QT(p);e.g=p;b=d.e;d.e=e;d.d0=EY();p=Xf(Dg(d.e));if(p!==null){l=d.bG.u;s=new Ud;s.l0=d;f=R(C,1);f.data[0]=FA(d.e.g);CM(l,s,p,f);}f=d.ea.kA.e5.data;t=f.length;i=0;while(i<t){p=f[i];if(p!==null)p.BD(b,e);i=i+1|0;}return c;}
function Ge(){var a=this;C.call(a);a.bp=0;a.b1=0;a.cZ=0;a.g4=0;}
function AOX(a,b,c,d){var e=new Ge();Q9(e,a,b,c,d);return e;}
function Q9(a,b,c,d,e){a.bp=d;a.b1=b;a.cZ=c;a.g4=e;}
function MV(){var a=this;Ge.call(a);a.cY=null;a.bn=0;a.c0=0;a.jn=0;a.la=0;}
function VF(b){var c,d;c=b.b1;if(c&&!b.bp&&!b.cZ&&!b.g4?1:0){d=b.bn;if(!(d!=67&&d!=88&&d!=45))return 1;}d=b.bp&&!c&&!b.cZ&&!b.g4?1:0;return d&&b.bn==46?1:0;}
function W1(b){var c;c=b.bn;return c!=122&&c!=123&&c!=116?0:1;}
var YP=F();
function SC(b,c){return (b+(c/2|0)|0)/c|0;}
function ND(b,c,d){if(b<(2147483647/c|0))return SC(Bc(b,c),d);return c*b/d|0;}
function J7(b,c){return ((b+c|0)-1|0)/c|0;}
function B4(b){return b+0.5|0;}
function EH(b){return b+0.5|0;}
function HI(b,c,d){return Bg(b,Z(c,d));}
function KI(){var a=this;Ge.call(a);a.L=null;a.re=null;}
var Q2=F(0);
function LO(){var a=this;C.call(a);a.qf=null;a.qg=null;}
function AFp(a,b){var c,d;c=a.qf;d=a.qg;$rt_globals.console.info("paste plain string "+b);c.m(EW(b));Dv(d);}
function RA(){C.call(this);this.qC=null;}
function SB(a,b){a.qC.clipboardData.setData("text/plain",$rt_ustr(b));}
function Tm(){var a=this;Il.call(a);a.sE=0;a.kL=0;}
var XR=F();
function IP(){C.call(this);this.sY=null;}
var AOT=null;var AOY=null;function AEK(){AEK=Bk(IP);AK5();}
function ACU(a){var b=new IP();UA(b,a);return b;}
function UA(a,b){AEK();a.sY=b;}
function AK5(){AOT=ACU(B(124));AOY=ACU(B(125));}
var Ss=F(0);
function PH(){C.call(this);this.f2=null;}
function E4(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.f2));}
function D5(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.f2));}
function ACk(a){var b,c;b=a.f2.byteLength;c=new M;O(c);G(T(G(c,B(126)),b),B(127));return N(c);}
var Re=F(0);
function Jq(){var a=this;C.call(a);a.fz=null;a.eb=null;a.jY=null;}
function XO(a,b){var c=new Jq();AEG(c,a,b);return c;}
function ALA(a,b,c){var d=new Jq();L4(d,a,b,c);return d;}
function UK(b){var c,d,e,f,g,h,i,j,k;c=new Jq;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=Rk(E(Sm),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=f[h];h=h+1|0;}}i=g.data;h=i.length;if(!h)j=R(BA,0);else{j=R(BA,h-1|0);g=j.data;h=0;k=g.length;while(h<k){g[h]=EW(i[h]);h=h+1|0;}}}else j=R(BA,0);L4(c,d,b,j);return c;}
function AEG(a,b,c){L4(a,b,c,R(BA,0));}
function L4(a,b,c,d){a.fz=b;a.eb=c;a.jY=d;}
function Id(a,b){var c,d,e;c=b|0;if(c===b)return c;d=Fb(a);e=new M;O(e);G(G(e,B(128)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function Fb(a){var b;b=a.fz;return EW(b!==null?b.name:a.eb.name);}
function AE5(a){var b,c,d,e,f;if(a.eb===null){b=a.jY;c=Fb(a);d=VQ(b);e=new M;O(e);G(G(G(e,d),B(129)),c);c=N(e);}else{b=a.jY;c=Fb(a);f=Id(a,a.eb.size);d=VQ(b);e=new M;O(e);T(G(G(G(G(e,d),B(129)),c),B(130)),f);c=N(e);}return c;}
function Jd(){var a=this;Jh.call(a);a.mg=null;a.li=null;}
function Vf(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.mg;e=0;f=0;g=a.li;a:{while(true){if((e+32|0)>f&&Dl(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Z(BU(b)+j|0,i.length);LH(b,d,j,f-j|0);e=0;}if(!Dl(c)){k=!Dl(b)&&e>=f?AOK:AOJ;break a;}i=g.data;j=Z(BU(c),i.length);l=new LN;l.kC=b;l.mT=c;k=Xj(a,d,e,f,g,0,j,l);e=l.pr;j=l.qu;if(k===null){if(!Dl(b)&&e>=f)k=AOK;else if(!Dl(c)&&e>=f)k=AOJ;}Tn(c,g,0,j);if(k!==null)break;}}Eh(b,b.K-(f-e|0)|0);return k;}
var Nm=F(Jd);
function Xj(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(J3(h,2))break a;i=AOJ;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Ko(l)){if((f+3|0)>g){j=j+(-1)|0;if(J3(h,3))break a;i=AOJ;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Cs(l)){i=DB(1);break a;}if
(j>=d){if(Dl(h.kC))break a;i=AOK;break a;}c=j+1|0;m=k[j];if(!CL(m)){j=c+(-2)|0;i=DB(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(J3(h,4))break a;i=AOJ;break a;}k=e.data;o=D4(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.pr=j;h.qu=f;return i;}
var Hc=F(DD);
function Cn(){var a=this;C3.call(a);a.f4=null;a.dY=null;a.dZ=0.0;}
function AOZ(a){var b=new Cn();EN(b,a);return b;}
function AO0(a,b){var c=new Cn();Rw(c,a,b);return c;}
function EN(a,b){Rw(a,b,1);}
function Rw(a,b,c){var d;FT(a,b);a.f4=Fp(0,0,64,255,new B_);a.dY=new Bn;if(c){b=GT(CB(a));d=DH();b=$rt_ustr(b);d.title=b;}}
function AKD(a,b){return 0;}
function GW(a){Jj(a.V.be,a.f4);}
function R_(a,b,c){C1(a.dY,b);a.dZ=c;}
function I0(){var a=this;Cn.call(a);a.i$=null;a.h9=null;a.bV=null;a.rd=null;a.t=null;a.nl=null;}
function ANq(a){var b=new I0();UB(b,a);return b;}
function UB(a,b){var c;Rw(a,b,0);a.nl=new Bn;a.i$=b.be;a.h9=Hd(b.u);a.bV=AA4(a.i$);a.t=ALs(b);b=b.cE;c=new Sk;c.br=a;C_(b,c);}
function AHH(a){return a.t;}
function AB5(a,b){var c,d,e,f;c=a.t;d=c.e.g;e=d.eO;f=d.cI;e=e!=f&&b-d.mI>0.03125?1:0;if(e&&c.i3!=f){c.i3=f;PC(c);}e=c.W;f=DN(c,(e+c.rM|0)-c.ri|0,Er(c));c.W=f;e=e==f?0:1;return !PL(c.cs,b)&&!e&&!c.n3?0:1;}
function AEu(a){GW(a);ZJ(a.t);QY(a.bV);}
function Zq(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=NM();d=a.t.e;e=Dg(d);f=Hm(d);g=a.t.ea;if(R$(g,e,f)!==null){Cm();h=AO1;i=new Uj;i.o$=a;i.o_=b;DI(c,B(131),h,i);}if(Je(g,e,f)!==null){Cm();h=AO1;i=new Ug;i.pS=a;i.pR=b;DI(c,B(132),h,i);}if(LE(g,e,f)!==null){Cm();h=AO1;i=new Ui;i.n1=a;i.n0=b;DI(c,B(133),h,i);}Cm();i=AO1;d=new Uh;d.nd=a;d.ne=b;DI(c,B(134),i,d);if(!a.t.ew){d=AO1;h=new S5;h.l6=a;DI(c,B(135),d,h);}d=AO1;h=new S6;h.qL=a;DI(c,B(136),d,h);if(!a.t.ew&&T1(a.V.u)){d=AO1;h=new S7;h.ln=a;DI(c,B(137),d,h);}d=AO2;h
=NM();i=AO2;j=R(EZ,2);k=j.data;g=AO1;l=a.t;Ck(l);m=new T2;m.pl=l;k[0]=CN(B(138),g,m);g=AO1;l=a.t;Ck(l);m=new T4;m.mY=l;k[1]=CN(B(139),g,m);Ed(h,B(140),i,HG(j));e=AO2;j=R(EZ,2);k=j.data;g=AO1;l=a.t;Ck(l);m=new TT;m.od=l;k[0]=CN(B(141),g,m);g=AO1;l=a.t;Ck(l);m=new TS;m.lC=l;k[1]=CN(B(142),g,m);Ed(h,B(143),e,HG(j));e=AO2;j=R(EZ,4);k=j.data;l=FR();f=new MW;f.nh=a;k[0]=CN(B(144),l,f);l=FR();f=new MU;f.ok=a;k[1]=CN(B(145),l,f);l=FR();f=new MY;f.lx=a;k[2]=CN(B(40),l,f);g=FR();l=new MX;l.m9=a;k[3]=CN(B(116),g,l);Ed(h,
B(146),e,HG(j));Ed(c,B(147),d,Gr(h));d=AO2;h=NM();i=AO2;j=R(EZ,4);k=j.data;g=AO1;l=a.t;Ck(l);m=new SO;m.pT=l;k[0]=CN(B(148),g,m);g=AO1;l=a.t;Ck(l);m=new SN;m.lo=l;k[1]=CN(B(149),g,m);g=AO1;l=a.t;Ck(l);m=new SQ;m.nU=l;k[2]=CN(B(150),g,m);g=AO1;l=a.t;Ck(l);m=new SP;m.qe=l;k[3]=CN(B(151),g,m);Ed(h,B(152),i,HG(j));e=AO1;f=new KN;f.lW=a;DI(h,B(153),e,f);Ed(c,B(154),d,Gr(h));return Gr(c);}
function Qg(a){var b;b=new PM;b.mf=a;return b;}
function Kb(a,b,c){var d,e,f,g,h,i,j,k;a:{D1(a.bV);d=a.t.e;e=Dg(d);f=Hm(d);g=a.t.ea;if(c===null)h=null;else{ANk();switch(AO3.data[c.b6]){case 1:h=Je(g,e,f);break a;case 2:h=R$(g,e,f);break a;default:}b=new D2;U(b);J(b);}}c=a.t;e=Hg(c,b);if(h!==null){f=c.e;i=e.bY;j=e.b3;e=new SJ;e.tr=c;e.ts=b;h.s4(f,i,j,e,c.gK);}else{TY(c.e.g,e);f=DG(c.e.g.dq,e);if(f!==null)Hv(c,f);else{e=DG(c.e.g.de,e);if(e!==null&&!DO(e))k=Qy(c.cd,e,c,c.e);else{h=X7();Cm();Hh(h,B(155),B(29),B(29),AO4,new TD);k=IK(h);}if(!D6(c.cd)){e=c.cd;f
=new SM;f.ly=c;Iy(e,b,k,f);}}}}
function YO(b){var c;c=new MB;c.nO=b;return c;}
function Tw(a){var b,c,d;b=a.V.u;c=a.t;Ck(c);d=new Ra;d.oc=c;Kc(b,d);}
function ADP(a,b,c){var d,e,f,g,h;C1(a.dY,b);d=a.t;e=a.nl;f=a.dY;C1(d.ca,e);C1(d.ed,f);d.du=c;d.ci=B4(d.os*c);g=B4(10.0*d.du);d.js=g;g=d.ci-g|0;RV(d.d6,d.ca,g,Cr(d),d.du);d.cs.dv.h.a=B4(2.0*d.du);QN(d,d.hd,d.dd);Sa(d);KS(d);JY(d.cd,f,c);JY(d.dM,f,c);if(a.dZ!==c){a.dZ=c;g=B4(20.0*c);h=Go(a.i$,B(144),g);a.rd=h;e=a.bV;Cm();Sy(e,h,AOU);}TW(a.bV,b,c);}
function U7(){var a=this;C3.call(a);a.jm=null;a.cG=null;a.fl=null;a.er=null;a.fX=null;a.q9=null;a.fM=null;a.nQ=null;a.j4=null;a.rp=null;a.sv=null;a.e4=null;a.hP=null;a.ni=0;}
function ALL(a){var b=new U7();AFG(b,a);return b;}
function AFG(a,b){var c,d,e,f,g,h,i;FT(a,b);c=new B_;EA();d=AOW;c.b7=d.b7;c.cP=d.cP;c.cA=d.cA;c.cg=d.cg;a.jm=c;a.cG=NC(0,0,300,300);a.fl=PA(0,0,3,3);a.er=NC(0,0,300,300);a.fX=AGL();e=R(BA,4);f=e.data;f[0]=B(156);f[1]=B(157);f[2]=B(158);f[3]=B(159);a.q9=e;a.fM=R(Hl,f.length);d=b.be;c=b.cE;g=new QF;g.dJ=a;g.qO=new Bn;C_(c,g);h=Da(a.V.be,300,300);c=h.ba;b="white";c.fillStyle=b;b=h.ba;c="white";b.strokeStyle=c;b=h.ba;c=10.0;b.lineWidth=c;h.ba.strokeRect(75.0,140.0,150.0,110.0);h.ba.fillRect(130.0,190.0,40.0,60.0);h.ba.beginPath();h.ba.moveTo(50.0,
140.0);h.ba.lineTo(150.0,60.0);h.ba.lineTo(250.0,140.0);h.ba.closePath();h.ba.stroke();Fg(h,B(117),11.0);JK(h,187,187,187);Nl(a,B(160),h);b=Dq(a.V.be);Df(b,h);HC(h);a.nQ=b;IN(a.cG,b);Kf(a.cG);Bx(a.cG.P,AOW);Bx(a.cG.bh,Cq(204,120,50));b=Da(d,255,100);a.e4=b;Fg(b,B(144),11.0);b=Bv();i=$rt_str(a.e4.ba.font);g=new M;O(g);G(G(g,B(161)),i);Bq(b,N(g));Dj(a.e4,B(162));JK(a.e4,169,183,198);Nl(a,B(162),a.e4);b=Dq(d);a.j4=b;Df(b,a.e4);IN(a.er,a.j4);Kf(a.er);GD(a.er,Dy(255));Gy(a.er,AOW);a.rp=Dq(d);Bx(a.fl.P,a.jm);}
function Nl(a,b,c){Cp(c,b,0.0,20.0);Cp(c,b,0.25,40.0);Cp(c,b,0.5,60.0);Cp(c,b,0.75,80.0);}
function Tb(a,b){H$(Jv(),0.5+Jv()*0.5,0.5+Jv()*0.5,1.0,b.bh);}
function AAv(a,b){var c;a.ni=a.ni+1|0;c=b/5.0;H$(c-(c|0),1.0,1.0,1.0,a.fl.bh);return PL(a.fX,b);}
function AC6(a){var b,c,d,e,f,g;b=a.V.be;Jj(b,a.jm);c=a.fM.data;d=c.length;e=0;while(e<d){JL(c[e],b,0,0);e=e+1|0;}De(a.cG,b,a.nQ,0,0,0.5);f=a.j4;d=0;while(d<7){g=a.er;De(g,b,f,Bc(d,10+((10*g.h.a|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.sv;if(g!==null)QS(a.fl,b,g,0,0,0.0);RE(a.fX,b,new Bn);LY(b,B(163));}
function ALa(a,b,c){var d,e,f,g,h,i,j,k,l;d=Bv();e=Cj(b);f=new M;O(f);G(G(f,B(164)),e);Bq(d,N(f));f=Bv();g=new M;O(g);Ni(G(g,B(165)),c);Bq(f,N(g));h=B4(c*30.0);i=B4(c*10.0);j=0;while(true){k=a.fM.data;if(j>=k.length)break;l=1+j|0;k[j]=PA(Bc(i,l)+Bc(h,j)|0,h,h,h);Tb(a,a.fM.data[j]);j=l;}Bo(a.fl.l,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.cG;f=d.l;h=b.a;d=d.h;Bo(f,(h-d.a|0)/2|0,(b.b-d.b|0)/2|0);d=a.er;d.l.b=b.b-d.h.b|0;}
function Su(){var a=this;Cn.call(a);a.gp=null;a.kj=null;a.da=null;a.cp=null;a.jt=null;a.jW=null;a.dT=null;}
function LR(a,b){OT(b,a.kj);Cm();Li(b,AOU);S4(b,AO5);}
function LM(b){var c,d,e;c=new Tp;d=Ee((Yh()));d=d^d<<7;d=d^(d>>>1|0);e=d^d<<9;d=Ee((Yh()))^(-559038737);c.jH=e;c.jI=d;d=0;while(d<19){OW(c);d=d+1|0;}return HE(b,c);}
function HE(b,c){var d;d=NM();IZ(d,Jc(b,JS(c,25)),!b?null:HE(b-1|0,c));IZ(d,Jc(b,JS(c,20)),!b?null:HE(b-1|0,c));IZ(d,Jc(b,JS(c,15)),!b?null:HE(b-1|0,c));IZ(d,Jc(b,JS(c,10)),!b?null:HE(b-1|0,c));return Gr(d);}
function Jc(b,c){var d;if(b){d=new M;O(d);G(G(T(d,b),B(34)),c);c=N(d);}return c;}
function IZ(b,c,d){var e;e=FR();if(d!==null)Ed(b,c,e,d);else{d=new PK;d.ks=c;DI(b,c,e,d);}}
function AAf(a,b,c){var d,e;C1(a.dY,b);Bo(a.jt,b.a,B4(c)*2|0);Bo(a.jW,B4(c)*2|0,b.b);TW(a.dT,b,c);if(a.dZ!==c){Fu(a.da,a.V.be.bv,c);Fu(a.cp,a.V.be.bv,c);}a.dZ=c;d=DL(a.da);e=DL(a.cp);Ip(a.da,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);Ip(a.cp,(b.a-e.a|0)/2|0,((b.b+(3*e.b|0)|0)/2|0)+5|0);}
function ADm(a){var b,c,d,e,f;GW(a);b=a.V.be;Co(b,1);Cm();c=AO6;d=a.dY.b/2|0;e=a.jt;Bt(b,0,d-(e.b/2|0)|0,e,c);f=a.dY.a/2|0;e=a.jW;Bt(b,f-(e.a/2|0)|0,0,e,c);Co(b,1);HP(a.da,b,a.dZ);HP(a.cp,b,a.dZ);QY(a.dT);Co(b,0);}
function AHZ(a,b){var c,d,e;c=RO(a.dT,b.L,a.gp);d=IL(a.da,b.L,a.gp);e=IL(a.cp,b.L,a.gp);return !c&&!d&&!e?0:1;}
function AJW(a,b,c,d,e){var f,g,h;f=Mx(a.dT,b.L,c,d,e);g=IO(a.da,b.L,c,d,e);h=IO(a.cp,b.L,c,d,e);return !f&&!g&&!h?0:1;}
function ABy(a,b){var c,d,e;Bq(Bv(),B(166));if(!F5(a.dT)){c=a.dT;b=b.L;d=LM(4);e=new KM;e.r7=a;Nw(c,b,d,e);}return 1;}
function AD5(a,b){if(b.c0&&b.bn==32){Ql(a.cp);return 1;}return 0;}
function ABK(a,b){return 0;}
function TN(){var a=this;Cn.call(a);a.ma=null;a.qz=null;a.oF=null;a.qX=null;a.cw=null;}
function EK(b,c,d,e){var f,g,h,i;f=new Fd;EA();g=AO7;h=AO8;Cm();GI(f,g,h,g,AOV,AO9);i=new Ot;i.o5=c;i.o6=d;i.o4=e;Hh(b,c,d,e,f,i);}
function AKE(a,b,c){var d,e;R_(a,b,c);C1(a.qz,b);Bo(a.oF,b.a,B4(c)*2|0);Bo(a.qX,B4(c)*2|0,b.b);if(!D6(a.cw))QP(a,new Bn);JY(a.cw,b,c);d=a.cw;e=J5(d.b9);TH(d.b9,(b.a-e.a|0)/2|0,(b.b-e.b|0)/2|0);}
function AHy(a){var b;GW(a);b=a.V.be;Co(b,1);IE(a.cw);Co(b,0);}
function AID(a,b){return Jw(a.cw,b.L,a.ma);}
function AFR(a,b,c,d,e){return JV(a.cw,b.L,c,d,e);}
function AH1(a,b){Bq(Bv(),B(166));if(!D6(a.cw))QP(a,b.L);return 1;}
function QP(a,b){var c,d,e,f;c=a.cw;d=X7();EK(d,B(167),B(168),B(169));EK(d,B(167),B(170),B(171));EK(d,B(167),B(172),B(173));EK(d,B(174),B(175),B(176));EK(d,B(167),B(177),B(169));EK(d,B(178),B(179),B(169));EK(d,B(180),B(181),B(169));e=IK(d);f=new RT;f.rv=a;Iy(c,b,e,f);}
function AEW(a,b){var c;c=b.c0;if(c&&b.bn==32){Fw(a.cw);return 1;}if(!c)return 0;TU(a.cw,b);return 1;}
function AIE(a,b){return 0;}
function Nc(){var a=this;C3.call(a);a.dH=null;a.e1=null;a.fH=null;a.iW=null;a.df=0;a.or=0;a.qo=null;a.jX=0;a.qA=0;a.lZ=null;}
function AHG(a,b){return 0;}
function AAM(a){var b,c;b=a.df;c=new M;O(c);T(G(c,B(182)),b);$rt_globals.console.info($rt_ustr(N(c)));Jj(a.dH,a.qo);I6(a.fH,a.df,a.iW.a,Fq(a),5000,20);Co(a.dH,1);G0(a.fH,a.dH,Cx(0,0));Co(a.dH,0);b=a.df;c=new M;O(c);T(G(c,B(182)),b);$rt_globals.console.info($rt_ustr(N(c)));T_(a.e1,a.df/a.jX|0);QW(a.e1,a.df,Fq(a),a.lZ,a.dH);}
function AAI(a,b,c){a.iW=b;RV(a.e1,Cx(0,0),50,Fq(a),c);Is(a.e1,a.dH,0,Fq(a));}
function NL(a){return 5000-Fq(a)|0;}
function Fq(a){return Z(a.or,a.iW.b);}
var On=F(Cn);
function AHE(a,b){var c;if(b.c0&&b.b1&&b.bn==79){if(!b.bp){b=a.V.u;c=new TJ;c.pL=a;Kc(b,c);}else{b=a.V.u;c=new TM;c.sJ=a;J8(b,c);}return 1;}return 0;}
var ZA=F(Cn);
function AM4(a){var b=new ZA();AGZ(b,a);return b;}
function AGZ(a,b){var c,d,e,f,g;EN(a,b);c=b.u;d=new OK;d.rT=a;e=R(C,1);e.data[0]=B(183);CM(c,d,B(184),e);f=b.u;c=new OJ;c.tH=a;e=R(C,1);e.data[0]=WS([1,2,3,4,5]);CM(f,c,B(185),e);f=b.u;c=new OI;c.lU=a;e=R(C,1);e.data[0]=AMo([1,2,3,4,5]);CM(f,c,B(186),e);f=b.u;c=new OH;c.rA=a;e=R(C,1);e.data[0]=EB([1,2,3,4,5]);CM(f,c,B(187),e);f=b.cE;g=new NB;c=new OF;c.sL=a;d=new OE;d.m$=a;g.h3=b.u;g.l9=c;g.kl=d;C_(f,g);}
function Rb(a,b){var c,d,e,f,g,h;c=b.data;d=Bv();e=Cj(c[0]);f=new M;O(f);G(G(f,B(188)),e);Bq(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((O6(b,1)).f2));d=Bv();e=Cj(c[1]);if(b===null)f=B(27);else{f=new M;O(f);BR(f,B(84));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BR(f,B(85));T(f,c[g]);g=g+1|0;}BR(f,B(86));f=N(f);}h=new M;O(h);G(G(G(G(h,B(189)),e),B(190)),f);Bq(d,N(h));}
function Te(){var a=this;Cn.call(a);a.c9=null;a.d2=null;a.l_=null;a.mM=null;a.jz=null;}
function AFf(a,b){b=b/5.0;H$(b-(b|0),1.0,1.0,1.0,a.d2.bh);return 0;}
function AAp(a){GW(a);De(a.c9,a.V.be,a.mM,0,0,0.5);QS(a.d2,a.V.be,a.l_,0,0,0.0);LY(a.V.be,B(163));}
function AKl(a,b,c){var d,e,f;R_(a,b,c);Bo(a.d2.l,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.c9;e=d.l;f=b.a;d=d.h;Bo(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function MN(){var a=this;C3.call(a);a.dn=null;a.hY=null;a.ep=null;a.b_=null;a.dL=0;a.gk=null;a.dO=0;a.sr=20;a.tW=11;a.r6=220;a.hh=null;a.sQ=5000;a.fv=0;a.ey=null;}
function AKT(a){var b,c,d,e,f,g,h;b=a.gk;c=a.dO;d=a.hh;I6(b,c,d.a,d.b,5000,20);Co(a.dn,1);G0(a.gk,a.dn,Cx(0,0));if(a.b_===null){c=0;while(c<11){c=c+1|0;e=20*c|0;Cp(a.hY,C0(c),0.0,e);}b=Dq(a.dn);a.b_=b;Df(b,a.hY);}if(a.dO<=a.dL)while(true){f=a.dL;if(f<=a.dO)break;a.dL=f-20|0;b=a.ep;g=a.fv-1|0;a.fv=g;Cp(b,C0(g),0.0,20.0);GP(a.b_,a.ep,0,a.dL%220|0);D8(a.ep);}else while(a.dL<(a.dO-20|0)){b=a.ep;g=a.fv+1|0;a.fv=g;Cp(b,C0((g+11|0)-1|0),0.0,20.0);GP(a.b_,a.ep,0,a.dL%220|0);D8(a.ep);a.dL=a.dL+20|0;}b=new J4;d=a.b_;Px(b,
0,0,d.bI,d.cn);d=a.b_;GA(b,0,0,d.bI,d.cn);GD(b,a.ey.data[0]);Gy(b,a.ey.data[1]);De(b,a.dn,a.b_,400,0,1.0);g=a.dO%220|0;f=Z(a.b_.cn-g|0,200);d=NC(0,0,a.b_.bI,f);GA(d,0,g,a.b_.bI,f);GD(d,a.ey.data[0]);Gy(d,a.ey.data[1]);De(d,a.dn,a.b_,0,0,1.0);h=new J4;b=a.b_;Px(h,0,f,b.bI,(b.cn-f|0)-20|0);b=a.b_;GA(h,0,0,b.bI,(b.cn-f|0)-20|0);GD(h,a.ey.data[1]);Gy(h,a.ey.data[0]);De(h,a.dn,a.b_,0,0,1.0);}
function AAr(a,b,c){C1(a.hh,b);}
function ACn(a,b){return 0;}
function O1(a){return 5000-a.hh.b|0;}
function Hi(){Cn.call(this);this.cS=0;}
function AFr(a,b){a:{if(b.c0){switch(b.bn){case 67:break;case 86:OC(a);break a;default:break a;}KR(a);}}return 1;}
function OC(a){var b,c;b=a.V.u;c=new N6;c.kF=a;Om(b,c,OR(a));}
function KR(a){var b,c,d,e;b=a.cS+1|0;a.cS=b;c=GT(E(Hi));d=new M;O(d);G(G(T(G(d,B(191)),b),B(34)),c);e=N(d);c=a.V.u;d=new QV;d.mU=e;Q8(c,e,d,OR(a));}
function OR(a){var b;b=new Sd;b.l2=a;return b;}
function AEn(a,b,c,d,e){a:{if(d){switch(c){case 0:break;case 2:KR(a);break a;default:break a;}OC(a);}}return 1;}
function ACy(a,b,c){var d,e;c=a.cS+1|0;a.cS=c;d=GT(E(Hi));e=new M;O(e);G(G(T(e,c),B(192)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));SB(b,e);return 1;}
function AEV(a){var b;b=new NP;b.oo=a;return b;}
function AAi(a,b){return 1;}
var OG=F(I0);
var Gl=F(0);
function KB(){var a=this;C.call(a);a.dG=null;a.d9=null;}
function KO(a,b){var c;c=a.d9;a.d9=b;return c;}
function ACX(a,b){var c,d;if(!J$(b,Gl))return 0;a:{c=b;d=a.dG;if(d!==null){b=c.tO();if(d===b?1:b instanceof Eg&&b.eD==d.eD?1:0)break a;}else if(c.tO()===null)break a;return 0;}b=a.d9;return b!==null?PG(b,c.sX()):c.sX()!==null?0:1;}
function Ey(){var a=this;KB.call(a);a.bj=null;a.bq=null;a.dl=0;a.eI=0;}
function Ig(a){var b;b=Ji(a);if(b==2){if(Ji(a.bq)<0)a.bq=Lq(a.bq);return MJ(a);}if(b!=(-2))return a;if(Ji(a.bj)>0)a.bj=MJ(a.bj);return Lq(a);}
function Ji(a){var b,c;b=a.bq;c=b===null?0:b.dl;b=a.bj;return c-(b===null?0:b.dl)|0;}
function Lq(a){var b;b=a.bj;a.bj=b.bq;b.bq=a;DV(a);DV(b);return b;}
function MJ(a){var b;b=a.bq;a.bq=b.bj;b.bj=a;DV(a);DV(b);return b;}
function DV(a){var b,c,d;b=a.bq;c=b===null?0:b.dl;b=a.bj;d=b===null?0:b.dl;a.dl=Bg(c,d)+1|0;a.eI=1;b=a.bj;if(b!==null)a.eI=1+b.eI|0;b=a.bq;if(b!==null)a.eI=a.eI+b.eI|0;}
function G4(a,b){return b?a.bq:a.bj;}
function HV(a,b){return b?a.bj:a.bq;}
var Zi=F();
function ABq(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new M$;c=c.buffer;d.ex=c;d.kc=new $rt_globals.Int8Array(c);d.hZ=new $rt_globals.Uint16Array(c);d.oU=new $rt_globals.Int32Array(c);d.mB=new $rt_globals.Float32Array(c);d.mK=new $rt_globals.Float64Array(c);e=d.ex.byteLength;c=new M;O(c);T(G(c,B(193)),e);Cv(N(c));e=b.callToCpp1();c=new M;O(c);T(G(c,B(194)),e);Cv(N(c));f=b.callToCpp2();c=new M;O(c);Fz(G(c,B(195)),f);Cv(N(c));c=Lc(d,b.getC8String());g=new M;O(g);G(G(g,B(196)),c);Cv(N(g));c
=Ll(d,b.getC16String());g=new M;O(g);G(G(g,B(197)),c);Cv(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.ex,h,8));c=X_(i);g=new M;O(g);G(G(g,B(198)),c);Cv(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.ex,h,8));c=AIO(j);g=new M;O(g);G(G(g,B(199)),c);Cv(N(g));k=WC(d,b.getCDoubleArray8(),8);l=AK8(k);c=new M;O(c);G(G(c,B(200)),l);Cv(Ds(c));l=AKY(b.getC8String(),B(201),d);c=J_();G(G(c,B(202)),l);Cv(Ds(c));l=AFX(b.getC16String(),B(203),
d);c=J_();G(G(c,B(204)),l);Cv(Ds(c));c=AHs(i,d,b.getCIntArray8(),EB([11,22,33,44,55,66,77,88]));g=J_();G(G(g,B(205)),c);Cv(Ds(g));c=AIZ(j,d,b.getCFloatArray8(),100,EB([111,222,333,444,555,666,777,888]));g=J_();G(G(g,B(206)),c);Cv(Ds(g));b=AJc(k,d,b.getCDoubleArray8(),1000,EB([1111,2222,3333,4444,5555,6666,7777,8888]));c=J_();G(G(c,B(207)),b);Cv(Ds(c));}
function AIZ(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(208);h=0;i=e;a:{while(h<g){if(EH(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.mB[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(209);}return B(210);}
function AJc(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(208);h=0;i=e;a:{while(h<g){if(B4(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.mK[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(209);}return B(210);}
function AHs(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(208);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.oU[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(209);}return B(210);}
function AKY(b,c,d){var e,f,g,h;e=Lc(d,b);if(!Br(c,e))return B(211);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.kc[h])return B(212);f=f+1|0;}return B(209);}
function AFX(b,c,d){var e,f,g,h;e=Ll(d,b);if(!Br(c,e))return B(211);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.hZ[h>>>1|0]&65535))return B(212);f=f+1|0;}return B(209);}
function Cv(b){M7(B(2),b);}
function AE6(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
var Rc=F(0);
function Gk(a){return I8(a,null);}
function Hd(b){var c;c=new LX;c.ll=b;return c;}
function U3(){var a=this;C.call(a);a.f1=null;a.cf=null;a.fx=null;a.gm=0.0;a.jE=null;a.ig=null;a.qt=null;a.g2=null;}
function AA4(a){var b=new U3();AEf(b,a);return b;}
function AEf(a,b){a.f1=new Bn;a.cf=Cy();Cm();a.ig=AOU;a.qt=AO5;a.g2=AO$;a.fx=b;}
function Sy(a,b,c){a.jE=b;a.ig=c;}
function Nw(a,b,c,d){var e;if(a.jE!==null&&!F5(a)){a.g2=d;e=Qs(a,b,c,null);b=new TR;b.oj=a;e.hx=b;return;}b=new BC;U(b);J(b);}
function D1(a){if(F5(a)){Qj(a,null);a.g2.q();a.g2=AO$;}}
function Qs(a,b,c,d){var e,f,g;e=a.f1;if(Bc(e.a,e.b)&&a.gm!==0.0){e=Vh();PF(e);Jg(e,Ku(c));OT(e,a.jE);Li(e,a.ig);S4(e,a.qt);Fu(e,a.fx.bv,a.gm);if(d===null)f=b.a;else{g=b.a;f=a.f1.a<((g+(DL(d)).a|0)+(DL(e)).a|0)?g-(DL(e)).a|0:g+(DL(d)).a|0;}g=b.b;b=a.f1;Ip(e,Bg(0,Z(f,b.a-(DL(e)).a|0)),Bg(0,Z(g,b.b-(DL(e)).b|0)));b=new T$;b.nT=a;b.nS=e;e.hO=b;Cc(a.cf,e);return e;}c=new DW;Bb(c,B(213));J(c);}
function TW(a,b,c){C1(a.f1,b);if(a.gm!==c){b=BV(a.cf);while(B9(b)){Fu(BX(b),a.fx.bv,c);}a.gm=c;}}
function QY(a){var b,c;if(!DO(a.cf))Co(a.fx,1);b=0;while(true){c=a.cf;if(b>=c.o)break;HP(BK(c,b),a.fx,a.gm);b=b+1|0;}}
function RO(a,b,c){var d,e;d=0;e=a.cf.o-1|0;a:{while(e>=0){d=IL(BK(a.cf,e),b,c);if(d)break a;e=e+(-1)|0;}}return d;}
function Mx(a,b,c,d,e){var f,g;f=0;g=a.cf.o-1|0;a:{while(g>=0){f=IO(BK(a.cf,g),b,c,d,e);if(f)break a;g=g+(-1)|0;}}return f;}
function Qj(a,b){var c,d;c=a.cf.o-1|0;a:{while(true){if(c<0)break a;d=BK(a.cf,c);if(b===d)break;F7(a.cf,c);Ql(d);c=c+(-1)|0;}}}
function F5(a){return a.cf.o<=0?0:1;}
function WD(){var a=this;C.call(a);a.n3=0;a.jO=0;a.jL=null;a.bG=null;a.G=null;a.cs=null;a.z=0;a.O=0;a.bS=0;a.i_=0;a.dd=0;a.hd=null;a.c$=null;a.bP=null;a.Q=0;a.e=null;a.ea=null;a.y=null;a.cF=null;a.kf=null;a.fm=null;a.p1=0;a.oy=0;a.os=0;a.ci=0;a.ij=0;a.js=0;a.gU=null;a.eK=null;a.eU=null;a.eM=null;a.W=0;a.bN=0;a.fV=0;a.du=0.0;a.gE=0;a.gt=0;a.rM=0;a.ri=0;a.hy=0;a.i2=0;a.d6=null;a.ca=null;a.ed=null;a.gr=0;a.gq=0;a.q6=null;a.fw=0;a.ew=0;a.cd=null;a.dM=null;a.gR=null;a.gF=null;a.gK=null;a.i3=0;a.nZ=null;a.he=null;a.d0
=D0;a.bB=null;a.eo=null;a.pv=null;a.pU=null;}
function ALs(a){var b=new WD();AJo(b,a);return b;}
function AJo(a,b){var c,d,e;a.n3=0;a.jL=R(Be,10);a.cs=AGL();a.dd=16;a.hd=B(116);a.bP=R(Jr,4);c=new J0;c.g=AHN();c.hc=B(157);c.e3=null;a.e=c;c=new Sj;c.k3=He(R(Ky,0));c.o9=He(R(Ky,0));c.po=He(R(KW,0));c.r1=He(R(NY,0));c.kA=He(R(Sh,0));c.n4=He(R(ON,0));a.ea=c;a.y=AHc();a.cF=We();a.fm=R(Eq,0);a.os=100;a.ij=1;a.gU=Cx(1,0);a.eK=Xq();a.eU=LS();a.eM=LS();a.W=0;a.bN=0;a.fV=0;a.gt=1;a.hy=1;a.i2=3;a.d6=AF5();a.ca=new Bn;a.ed=new Bn;a.q6=B(214);a.fw=0;a.ew=0;a.gR=null;a.gF=Cy();c=J1();Ck(c);d=new Rr;d.tL=c;a.gK=d;a.nZ
=new B_;a.he=new Bn;a.bB=new Bn;c=new Rq;c.nP=a;a.pv=c;c=new Rm;c.lm=a;a.pU=c;a.bG=b;a.G=b.be;if(b.u.cV!==(DH()).activeElement?0:1)Ft(a);e=a.jL.data;b=new Rl;b.pu=a;e[0]=b;b=new Ro;b.oa=a;e[1]=b;b=new Rn;b.lz=a;e[2]=b;b=new RH;b.pQ=a;e[3]=b;AAs();a.gE=AO_===APa?0:1;a.cd=Zm(a.G);a.dM=Zm(a.G);}
function Ft(a){a.i_=1;Hj(a);}
function MM(a){a.i_=0;}
function Hj(a){Pj(a.cs,H7(a.bG.u));}
function ER(a,b,c){if(a.du!==0.0)QN(a,b,c);a.dd=c;a.hd=b;Fi(a.bG.u);}
function QN(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=B4(c*a.du);e=a.c$;f=e!==null?e.iu:0;if(!(d==f&&FX(b,a.hd))){g=a.d6;Iu(g.b8,new OV);Gu(g.b8);g.dP=Dx(g.dP,null);g.eu=Dx(g.eu,null);h=a.fm.data;c=h.length;f=0;while(f<c){Oa(h[f]);f=f+1|0;}h=a.e.g.A.data;c=h.length;f=0;while(f<c){DQ(h[f]);f=f+1|0;}h=a.bP.data;i=Gn(0,0);e=a.G;j=d;h[i]=F4(e,b,j,400,0);a.bP.data[Gn(0,1)]=F4(a.G,b,j,400,2);a.bP.data[Gn(1,0)]=F4(a.G,b,j,700,0);a.bP.data[Gn(1,1)]=F4(a.G,b,j,700,2);e=a.bP.data[Gn(0,0)];a.c$=e;k=HK(e);l=EH(k*1.375);a.Q=l;a.jO
=l*0|0;e=a.cs;m=a.c$;e.dv.h.b=l-(((l/2|0)-((((m.i9+m.pa|0)+m.iu|0)/2|0)/2|0)|0)*2|0)|0;a.kf=Dx(a.kf,Da(a.G,512,l));e=a.cd;m=a.c$;Cm();J2(e,m,AOV);J2(a.dM,a.c$,AOV);c=a.Q;f=Pz(a.cs);e=new M;O(e);b=G(G(e,B(215)),b);BB(b,32);T(G(T(G(T(G(T(b,d),B(216)),k),B(217)),c),B(218)),f);$rt_globals.console.info($rt_ustr(N(e)));if(APb){c=Jx(a.c$,a.Q);b=new M;O(b);T(G(b,B(219)),c);$rt_globals.console.info($rt_ustr(N(b)));}KS(a);a.bS=E2(DS(a),a.O,a.G.bv,a.bP);EX(a);Sa(a);}}
function PR(a){return Bc(Ca(a.e.g)+5|0,a.Q);}
function Er(a){return Bg(PR(a)-Cr(a)|0,0);}
function FB(a){return Bg(a.fV-Ec(a)|0,0);}
function Ec(a){return a.ed.a-a.ci|0;}
function Cr(a){return a.ed.b-a.jO|0;}
function KS(a){IC(a.eK,0,Cr(a),a.ed.a,a.jO);Bx(a.eK.bh,a.cF.kv);a.gU.b=Cr(a);}
function ZJ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;b=Cr(a);c=a.ed.a;d=J7(Cr(a),a.Q)+7|0;e=a.fm;if(e.data.length<d)a.fm=Wp(d,e,a.p1,a.oy,a.e.g);Co(a.G,0);f=a.gU;f.a=a.ij;g=a.G;h=a.ca;Bt(g,(h.a+a.ci|0)-a.js|0,h.b,f,a.cF.pe);f=a.gU;i=a.js;j=a.ij;f.a=i-j|0;g=a.G;h=a.ca;Bt(g,((h.a+a.ci|0)-i|0)+j|0,h.b,f,a.cF.hv);a.W=Z(a.W,Er(a));a.bN=Z(a.bN,FB(a));i=(a.Q-Pz(a.cs)|0)/2|0;j=(a.bS-(N7(a.cs)/2|0)|0)-a.bN|0;NK(a.cs,a.ci+j|0,(i+Bc(a.z,a.Q)|0)-a.W|0);k=Ca(a.e.g);l=Jp(a);m=RB(a);a.p1=l;a.oy=m;n=l;while(n<=m&&n<k)
{h=B7(a.e.g,n);f=Ow(a,n);g=a.kf;e=a.bP;o=a.G;i=a.Q;p=Ec(a);q=a.bN;r=f.bx;s=r===h&&!r.gC?0:1;if(s){f.bx=h;Jz(h,o.bv,e);}p=Wu(f,p);t=p<=f.cW?0:1;if(t)f.cW=p;if(!(!s&&!t)){if(APc){u=h.ez;$rt_globals.console.info("fMeasure"+u.data);APc=0;}Ya(g,APb);Yj(f,g,o,e,i,q);f.bx.gC=0;}X2(f,g,e,i,q);o=f.bx;a.fV=Bg(a.fV,D7(h)+(40.0*a.du|0)|0);s=Bc(a.Q,n)-a.W|0;g=a.ca;X8(f,g.b+s|0,g.a+a.ci|0,a.G,a.nZ,a.he,!a.gE?0.0:0.5,Ec(a),a.Q,a.bN,a.cF,Y1(a,n,o),a.gR,a.gF);n=n+1|0;}p=l;while(p<=m&&p<k&&a.hy){f=Ow(a,p);s=Bc(a.Q,p)-a.W|0;g
=!VV(a.y,p)?a.cF.kx:a.cF.jx;h=a.G;o=a.ca;XS(f,h,o.a+a.ci|0,o.b+s|0,a.Q,a.he,a.bN,Ec(a),g);p=p+1|0;}if(a.i_&&j>=(( -N7(a.cs)|0)/2|0)){f=a.cs;g=a.ed;if(Mz(f.dv.l,0,0,g))RE(a.cs,a.G,a.ca);}if(a.gt){q=Z(m+1|0,k);UN(a,b,c,Bc(a.Q,q)-a.W|0);}Xw(a,b,l,m);XI(a);Co(a.G,1);I6(a.eU,a.W,c,Cr(a),PR(a),OQ(a));f=a.eM;i=a.bN;j=a.ci;L0(f,i,b,c-j|0,a.fV,j,OQ(a),0);YD(a);IE(a.cd);IE(a.dM);}
function Y1(a,b,c){var d,e,f,g;a:{d=a.y;e=Ep(d);d=G7(d);f=e.X;if(f<=b){g=BD(b,d.X);if(g<=0){d=Cx(b<=f?e.by:0,g>=0?d.by:(-1));break a;}}d=null;}if(d!==null){if(d.b==(-1))d.b=c.J;d.a=E2(c,d.a,a.G.bv,a.bP);d.b=E2(c,d.b,a.G.bv,a.bP);}return d;}
function Xw(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=Z(b,Bc(Ca(a.e.g),a.Q)-a.W|0);f=a.d6;g=a.W;h=a.z;i=a.G;j=a.cF.qR;Is(f,i,c,b);T_(f,c);QW(f,g,e,j,i);if(e<b){k=f.fL;Bt(i,k.a,k.b+e|0,Cx(f.eg.a,b-e|0),j.f$);}if(c<=h&&h<=d){c=h/20|0;k=f.b8;l=BK(k,c%k.o|0);m=f.fL;e=Bc(f.b8.o,f.gW);k=l.em;b=k.b;d=((l.hb.b-(g%e|0)|0)+e|0)%e|0;if((d+b|0)>e)d= -(g%l.bF.cn|0)|0;c=h%l.c4|0;b=l.dE;c=d+Bc(c,b)|0;if(c<( -b|0))c=c+e|0;Bo(l.fh,k.a,b);f=l.eR;b=h%l.c4|0;d=l.dE;Cu(f,0.0,Bc(b,d),l.em.a,d);HJ(l,i,c,m,j.mS,j.mX);}}
function Jp(a){return Z(a.W/a.Q|0,Ca(a.e.g)-1|0);}
function RB(a){return Z(((a.W+Cr(a)|0)-1|0)/a.Q|0,Ca(a.e.g)-1|0);}
function Sa(a){Qv(a.d6,a.bP.data[0],a.Q,a.G);Is(a.d6,a.G,Jp(a),Cr(a));}
function Ow(a,b){var c;c=a.fm.data;return c[b%c.length|0];}
function Zb(a){var b,c,d,e,f,g,h,i;if(DE(a.y))FV(a);DQ(B7(a.e.g,a.z));b=a.e.g;c=a.z;d=a.O;e=b.A;f=e.data;g=f[c];e=CX(e,f.length+1|0);f=e.data;b.A=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=Dn(R(BZ,0));b.A.data[c+1|0]=g;}else if(d==g.J){f[c]=g;f[c+1|0]=Dn(R(BZ,0));}else{f=(Hn(g,d)).data;e=b.A.data;e[c]=f[0];e[c+1|0]=f[1];}FN(b,c,d,0,B(220));Em(a);return CS(a,a.z+1|0,0,0);}
function YV(a){if(DE(a.y))FV(a);else Nd(a.e.g,a.z,a.O);EX(a);Em(a);return 1;}
function UL(a){var b,c,d;if(DE(a.y)){FV(a);return 1;}b=a.O;if(!b&&!a.z)return 1;if(b){c=a.z;b=b-1|0;Nd(a.e.g,c,b);}else{c=a.z-1|0;b=EL(a.e.g,c);d=a.e.g;Jo(d,c);FN(d,c,EL(d,c),1,B(220));}Em(a);return CS(a,c,b,0);}
function Dp(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.ew)return 0;if(DE(a.y))FV(a);c=Ti(RI(b,B(221),B(29)),B(220),(-1));d=c.data;b=a.e.g;e=a.z;f=a.O;Ul(b,e,f,c);g=d.length;if(!g)h=AN3;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BN(i+Bc(g-1|0,I(B(220)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(220))){m=l+1|0;c[l]=L(B(220),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Um(k);}FN(b,e,f,0,h);e=a.z;m=(e+g|0)-1|
0;CS(a,m,m!=e?I(d[g-1|0]):a.O+I(d[0])|0,0);EC(a);Em(a);return 1;}
function FV(a){var b,c,d;b=Ep(a.y);c=a.e.g;d=a.y;Qm(c,d,Sp(c,d));CS(a,b.X,b.by,0);EC(a);Em(a);}
function EC(a){var b;b=a.y;b.c3=0;B$(b.b5,a.z,a.O);B$(a.y.bU,a.z,a.O);}
function OQ(a){return a.c$.hw|0;}
function UN(a,b,c,d){var e,f,g;if(d<b){e=a.he;e.b=b-d|0;b=a.ci;e.a=c-b|0;f=a.G;g=a.ca;Bt(f,g.a+b|0,g.b+d|0,e,a.cF.hv);}}
function YD(a){if(NI(a.eU)){Co(a.G,1);G0(a.eU,a.G,a.ca);}if(NI(a.eM)){Co(a.G,1);G0(a.eM,a.G,a.ca);}}
function XI(a){var b,c,d;Co(a.G,0);Fp(0,0,0,128,a.eK.bh);b=a.eK;c=a.G;d=a.ca;JL(b,c,d.a,d.b);}
function DN(a,b,c){return Z(Bg(0,b),c);}
function GC(a,b){var c,d,e,f,g;b=b.data;a.gr=1;a.gq=1;c=D5(b[0]);d=E4(b[1]);e=(D5(b[2])).data[0];a.e.g=Xz(c,d);SA(a,YY(e));FH(a.bG.u,APd);Fi(a.bG.u);f=IW(EY(),a.d0);g=new M;O(g);G(GL(G(g,B(222)),f),B(223));$rt_globals.console.info($rt_ustr(N(g)));}
function SA(a,b){var c,d;c=Dg(a.e);if(!FX(c,b)){d=new M;O(d);G(G(G(G(d,B(224)),c),B(225)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.hc=b;}}
function Gx(a,b,c,d,e){if(Gs(a,e))return 1;if(c&&d)return 1;if(c)a.W=DN(a,a.W+((Bc(b,a.Q)*12|0)/10|0)|0,Er(a));else if(!d){Ga(a,a.z+b|0,e);Qi(a);}return 1;}
function QX(a,b,c,d){var e,f,g;if(Gs(a,d))return 1;e=DS(a);if(!c)f=a.O+b|0;else if(b>=0)f=RM(e,a.bS);else{b=a.bS;g=F8(e,b);if(!g&&!b)f=(-1);else{f=0;b=0;while(b<g){f=f+I(e.n.data[b].p)|0;b=b+1|0;}}}if(f>e.J){if((a.z+1|0)<Ca(a.e.g)){a.O=0;Ga(a,a.z+1|0,d);}}else if(f>=0)C4(a,f,d);else{c=a.z;if(c>0){a.O=(B7(a.e.g,c-1|0)).J;Ga(a,a.z-1|0,d);}}Nu(a);return 1;}
function Gs(a,b){if(DE(a.y)&&!b){EC(a);EX(a);return 1;}if(!(b&&DE(a.y)))EC(a);return 0;}
function CS(a,b,c,d){a.z=HI(0,b,Ca(a.e.g)-1|0);return C4(a,c,d);}
function Ga(a,b,c){a.z=HI(0,b,Ca(a.e.g)-1|0);return C4(a,a.O,c);}
function C4(a,b,c){a.O=HI(0,b,(DS(a)).J);a.bS=E2(DS(a),a.O,a.G.bv,a.bP);Hj(a);EX(a);if(c)a.y.c3=1;O3(a.y,a.z,a.O);a.y.c3=0;return 1;}
function EX(a){Qi(a);Nu(a);}
function Qi(a){var b,c,d,e,f;b=a.W;c=b+Cr(a)|0;d=a.z;e=a.Q;d=Bc(d,e);f=d+e|0;if(d<(b+e|0))a.W=DN(a,d-e|0,Er(a));else if(f>(c-e|0))a.W=DN(a,(f-Cr(a)|0)+a.Q|0,Er(a));}
function Nu(a){var b,c,d,e,f;b=(a.du|0)*30|0;c=a.bN;d=c+Ec(a)|0;e=a.bS;f=e+b|0;if(e<(c+b|0))a.bN=DN(a,e-b|0,FB(a));else if(f>(d-b|0))a.bN=DN(a,(f-Ec(a)|0)+b|0,FB(a));}
function I2(a){var b,c,d,e,f;a.gR=null;Gu(a.gF);if(a.z>=Ca(a.e.g))return;b=a.e.g;c=a.z;d=a.bS;if(!(!Ol(b,c,d)&&!(Ma(b,c,d)===null?0:1)?0:1))return;if(!Ol(a.e.g,a.z,a.bS)){b=JI(a.e.g,a.z,a.bS);e=Ma(a.e.g,a.z,a.bS);}else{b=L1(a.e.g,a.z,a.bS);e=DG(a.e.g.de,b);}a.gR=N3(a.e.g,b);b=BV(e);while(B9(b)){f=BX(b);Cc(a.gF,N3(a.e.g,f));}}
function Hv(a,b){var c;CS(a,b.bY,b.b3,0);c=RM(DS(a),a.bS);B$(a.y.bU,a.z,c);B$(a.y.b5,a.z,a.O);Fw(a.cd);}
function Hg(a,b){var c,d;c=b.a;d=HI(0,(b.b+a.W|0)/a.Q|0,Ca(a.e.g)-1|0);c=Bg(0,(c-a.ci|0)+a.bN|0);return JN(d,PP(B7(a.e.g,d),c,a.G.bv,a.bP));}
function OA(a,b){CS(a,b.iV,b.oS,0);B$(a.y.b5,b.iV,b.oS);B$(a.y.bU,b.tG,b.tU);}
function DS(a){return B7(a.e.g,a.z);}
function Vp(a,b){var c,d,e;if(!b.c0)a.fw=0;if(!VF(b)&&!W1(b)){if(b.b1&&b.bn==65){c=Ca(a.e.g)-1|0;d=EL(a.e.g,c);B$(a.y.b5,0,0);B$(a.y.bU,Ca(a.e.g)-1|0,d);return 1;}if(!b.c0)return 0;if(D6(a.cd)&&TU(a.cd,b))return 1;d=b.bn;c=b.b1;if(c&&d==80){Iw(a);return 1;}if(!a.ew&&c&&d==90){if(DE(a.y))EC(a);b=ZI(a.e.g);if(b!==null){CS(a,b.a,b.b,0);Em(a);}return 1;}if(!c&&!b.cZ){if(Br(b.cY,B(226))){Dp(a,B(227));C4(a,a.O-1|0,0);c=1;}else if(Br(b.cY,B(228))){Dp(a,B(229));C4(a,a.O-1|0,0);c=1;}else if(Br(b.cY,B(84))){Dp(a,B(230));C4(a,
a.O-1|0,0);c=1;}else if(Br(b.cY,B(231))){Dp(a,B(232));C4(a,a.O-1|0,0);c=1;}else if(Br(b.cY,B(233))){Dp(a,B(234));C4(a,a.O-1|0,0);c=1;}else if(!Br(b.cY,B(235)))c=0;else{Dp(a,B(236));C4(a,a.O-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cZ&&!b.b1)){d=b.bn;if(d>=48&&d<=57){c=d-48|0;e=a.jL.data[c];if(e!==null)e.q();c=1;break a;}}c=0;}if(c)return 1;if(WP(a,b))return 1;if(a.ew)c=0;else b:{switch(b.bn){case 8:break;case 9:Dp(a,a.q6);c=1;break b;case 13:c=Zb(a);break b;case 16:case 18:case 20:case 45:c=1;break b;case 46:c
=YV(a);break b;default:c=0;break b;}c=UL(a);}if(c)return 1;c=b.b1;if(c&&b.bn==87){$rt_globals.console.info("Ctrl-W pressed ;)");return 1;}if(!c&&!b.cZ&&!b.g4){if(b.bn==27)return 0;return I(b.cY)>0&&Dp(a,b.cY)?1:0;}a.fw=c;return 0;}return 0;}
function S8(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(Br(B(123),Dg(a.e))){b=a.bG.u;c=new Nr;c.o0=a;d=R(C,3);e=d.data;e[0]=FA(a.e.g);f=Jp(a);g=RB(a);h=Bg(0,f-100|0);f=Z(Ca(a.e.g)-1|0,g+100|0);i=BS(3);j=i.data;j[0]=Fo(a.e.g,h);k=a.e.g;l=0;f=Z(f+1|0,k.A.data.length);m=0;while(m<f){l=l+EL(k,m)|0;if(m!=(k.A.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.g.cC;k=Cy();SR(n,n.cl,k);i=BS(3*k.o|0);j=i.data;g=0;m=0;o=j.length;while(g<o){p=BK(k,m);h=g+1|0;j[g]=p.bs;f=h+1|0;j[h]=p.bu;g=f+1|0;j[f]=p.et;m=m+1|0;}e[2]
=i;CM(b,c,B(237),d);}}
function Iw(a){var b,c,d,e;b=Xf(Dg(a.e));if(b!==null){a.d0=EY();c=a.bG.u;d=new Sq;d.ls=a;e=R(C,1);e.data[0]=FA(a.e.g);CM(c,d,b,e);}}
function PC(a){var b,c,d,e,f,g,h;b=a.e.g.cC;c=Nf(b,b.cl);if(c===null)return;if(Br(B(157),Dg(a.e)))Nn(a.e.g);a:{d=EB([CH(c),CP(c),c.bE.et]);e=FA(a.e.g);f=BS(1);g=Dg(a.e);h=(-1);switch(JC(g)){case 3401:if(!Br(g,B(238)))break a;h=3;break a;case 98723:if(!Br(g,B(239)))break a;h=2;break a;case 3254818:if(!Br(g,B(123)))break a;h=1;break a;case 3556653:if(!Br(g,B(157)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=a.bG.u;c=new Ts;c.m_=a;CM(b,c,B(240),H(C,[e,f,d]));}
function Jt(a,b,c){var d,e,f,g,h,i;if(c&&a.ew)return 0;d=Ep(a.y);e=d.X;if(DE(a.y)){f=a.e.g;g=a.y;h=Sp(f,g);if(c)Qm(f,g,h);if(c){CS(a,d.X,d.by,0);EC(a);Em(a);}}else{h=Fs(Ej(a.e.g.A.data[e]),B(220));i=Z(Ca(a.e.g)-1|0,e);B$(a.y.bU,i,0);if(e>=(Ca(a.e.g)-1|0))B$(a.y.bU,i,EL(a.e.g,i));else B$(a.y.b5,i+1|0,0);if(c)FV(a);else CS(a,e,0,0);}b.m(h);return 1;}
function WP(a,b){var c;a:{switch(b.bn){case 33:c=b.b1?Ga(a,J7(a.W,a.Q),b.bp):Gx(a,2-SC(Cr(a),a.Q)|0,0,b.cZ,b.bp);break a;case 34:c=!b.b1?Gx(a,SC(Cr(a),a.Q)-2|0,0,b.cZ,b.bp):Ga(a,((a.W+Cr(a)|0)/a.Q|0)-1|0,b.bp);break a;case 35:if(!Gs(a,b.bp)&&!C4(a,(DS(a)).J,b.bp)){c=0;break a;}c=1;break a;case 36:if(!Gs(a,b.bp)&&!C4(a,0,b.bp)){c=0;break a;}c=1;break a;case 37:c=QX(a,(-1),b.b1,b.bp);break a;case 38:c=Gx(a,(-1),b.b1,b.cZ,b.bp);break a;case 39:c=QX(a,1,b.b1,b.bp);break a;case 40:c=Gx(a,1,b.b1,b.cZ,b.bp);break a;default:}c
=0;}if(c&&b.bp)B$(a.y.bU,a.z,a.O);I2(a);return c;}
function Em(a){a.e.g.mI=H7(a.bG.u);}
function Xf(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(JC(b)){case 3401:if(!Br(b,B(238)))break a;c=2;break a;case 98723:if(!Br(b,B(239)))break a;c=1;break a;case 3254818:if(!Br(b,B(123)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(241);break b;case 2:b=B(242);break b;default:b=null;break b;}b=B(243);}}return b;}
function Sk(){C.call(this);this.br=null;}
function AIo(a){Ft(a.br.t);}
function AGt(a){D1(a.br.bV);MM(a.br.t);}
function ADv(a,b,c,d){var e,f;b=a.br.t;e=B4((b.Q*4|0)*d/150.0);f=B4(c);b.W=DN(b,b.W+e|0,Er(b));b.bN=DN(b,b.bN+f|0,FB(b));return 1;}
function ADf(a,b,c,d,e){var f,g,h,i,j,k;a:{if(!Mx(a.br.bV,b.L,c,d,e)){f=a.br.t;g=f.bB;h=b.L;i=h.a;j=f.ca;Bo(g,i-j.a|0,h.b-j.b|0);if(!d)f.y.c3=0;b:{if(!d&&f.eo!==null){f.eo=null;c=1;}else if(JV(f.cd,f.bB,c,d,e))c=1;else if(JV(f.dM,f.bB,c,d,e))c=1;else if(!c&&e==2&&d){g=f.bB;f.z=HI(0,(g.b+f.W|0)/f.Q|0,Ca(f.e.g)-1|0);b=DS(f);c=PP(b,Bg(0,(g.a-f.ci|0)+f.bN|0),f.G.bv,f.bP);f.O=c;f.bS=E2(b,c,f.G.bv,f.bP);I2(f);Hj(f);EX(f);b=DS(f);c=NE(b,f.bS);i=F8(b,f.bS);d=b.n.data.length;if(i>=d)i=d-1|0;e=0;k=0;while(k<(i+1|0)){e
=e+I(b.n.data[k].p)|0;k=k+1|0;}B$(f.y.b5,f.z,c);f.y.c3=1;CS(f,f.z,e,0);f.y.c3=0;c=1;}else{if(!c&&e==1&&d){g=Gm(f.eU,f.bB,f.pv,1);f.eo=g;if(g!==null){c=1;break b;}g=Gm(f.eM,f.bB,f.pU,0);f.eo=g;if(g!==null){c=1;break b;}if(Dk(f.eK,f.bB)){f.eo=APe;c=1;break b;}g=new Ry;g.kJ=f;g.kK=b;f.eo=g;g.m(f.bB);}c=1;}}if(!c){c=0;break a;}}c=1;}return c;}
function AKK(a,b){var c,d,e,f;if(!F5(a.br.bV)){c=a.br;d=c.bV;b=b.L;c=Zq(c,b);e=a.br.t;Ck(e);f=new Q3;f.lM=e;Nw(d,b,c,f);MM(a.br.t);}return 1;}
function AIw(a,b){var c,d,e,f,g,h,i,j,k;a:{c=a.br;if(!RO(c.bV,b.L,c.h9)){b:{c=a.br;d=c.t;c=c.h9;e=d.bB;b=b.L;f=b.a;g=d.ca;Bo(e,f-g.a|0,b.b-g.b|0);if(Jw(d.cd,d.bB,c))f=1;else if(Jw(d.dM,d.bB,c))f=1;else{b=d.eo;if(b!==null){b.m(d.bB);f=1;}else if(GS(d.eU,d.bB,c))f=1;else if(GS(d.eM,d.bB,c))f=1;else{b=d.d6;if(Ie(d.bB,Cx(0,0),b.eg)&&Gk(c)?1:0)f=1;else{c:{b=d.bB;h=d.ci;i=Ec(d);j=Cr(d);k=b.a;if(k>=h&&k<(h+i|0)){h=b.b;if(h>=0&&h<(0+j|0)){f=1;break c;}}f=0;}if(!f)f=Gk(c);else{if(d.fw){b=Hg(d,d.bB);TY(d.e.g,b);d=d.e.g;if
(!LW(d.dq,b)&&!LW(d.de,b)?0:1){f=I8(c,B(156));break b;}}f=I8(c,B(157));}}}}}if(!f){f=0;break a;}}f=1;}return f;}
function ACq(a,b){var c;if(!b.c0)c=0;else if(b.bn==27&&F5(a.br.bV)){D1(a.br.bV);c=1;}else if(b.b1&&b.bn==79){if(!b.bp)Tw(a.br);else J8(a.br.V.u,new Lf);c=1;}else c=0;return !c&&!Vp(a.br.t,b)?0:1;}
function AF$(a,b,c){return Jt(a.br.t,b,c);}
function AAL(a){var b,c;b=a.br.t;Ck(b);c=new QB;c.lG=b;return c;}
function B_(){var a=this;C.call(a);a.b7=0.0;a.cP=0.0;a.cA=0.0;a.cg=0.0;}
function Cu(a,b,c,d,e){a.b7=b;a.cP=c;a.cA=d;a.cg=e;}
function Bx(a,b){a.b7=b.b7;a.cP=b.cP;a.cA=b.cA;a.cg=b.cg;return a;}
var CK=F(0);
var AOW=null;var AO7=null;var AO8=null;var APf=null;var APg=null;var APh=null;var APi=null;var APj=null;var APk=null;var APl=null;var APm=null;function EA(){EA=Bk(CK);AG6();}
function AG6(){AOW=Dy(43);AO7=Bl(B(244));AO8=Dy(85);APf=Cq(60,63,65);APg=Cq(33,66,131);APh=Cq(255,255,255);APi=Cq(0,0,0);APj=Cq(212,212,212);APk=Cq(166,214,255);APl=Bl(B(245));APm=Bl(B(246));}
function Hl(){var a=this;C.call(a);a.l=null;a.h=null;a.bh=null;a.P=null;}
function Xq(){var a=new Hl();Pb(a);return a;}
function PA(a,b,c,d){var e=new Hl();ACR(e,a,b,c,d);return e;}
function Pb(a){a.l=new Bn;a.h=new Bn;a.bh=new B_;a.P=new B_;}
function ACR(a,b,c,d,e){a.l=new Bn;a.h=new Bn;a.bh=new B_;a.P=new B_;IC(a,b,c,d,e);}
function IC(a,b,c,d,e){Bo(a.l,b,c);Bo(a.h,d,e);}
function PQ(a){Bo(a.h,0,0);}
function Hu(a){var b;b=a.h;return Bc(b.a,b.b)?0:1;}
function Dk(a,b){return Ie(b,a.l,a.h);}
function JL(a,b,c,d){var e;e=a.l;Bt(b,e.a+c|0,e.b+d|0,a.h,a.bh);}
function QS(a,b,c,d,e,f){var g,h,i;g=a.l;d=g.a+d|0;e=g.b+e|0;g=a.h;h=a.P;i=a.bh;Ju(b,b.f7);Kt(b.f7,b.bA,d,e,g,b.dk);Q5(b.f7,b.bA,c);c=b.f7;g=b.bA;G5(g,c.qG,h);G5(g,c.qE,i);c=c.m3;g.uniform2f(c,f,0.0);b.en=Ix(b.gO,b.en);}
function J4(){Hl.call(this);this.ck=null;}
function Py(){var a=new J4();ABl(a);return a;}
function NC(a,b,c,d){var e=new J4();Px(e,a,b,c,d);return e;}
function ABl(a){Pb(a);a.ck=new B_;}
function Px(a,b,c,d,e){Pb(a);a.ck=new B_;IC(a,b,c,d,e);}
function Kf(a){var b,c;b=a.h;c=a.ck;Bo(b,c.cA-c.b7|0,c.cg-c.cP|0);}
function IN(a,b){GA(a,0,0,b.bI,b.cn);}
function GA(a,b,c,d,e){Cu(a.ck,b,c,d,e);}
function De(a,b,c,d,e,f){var g;g=a.l;IY(b,g.a+d|0,g.b+e|0,a.h,a.ck,c,a.bh,a.P,f);}
function GD(a,b){Bx(a.bh,b);}
function Gy(a,b){Bx(a.P,b);}
function WX(){var a=this;C.call(a);a.dv=null;a.ji=0.0;a.fJ=0.0;a.fo=0;}
function AGL(){var a=new WX();AKH(a);return a;}
function AKH(a){var b;b=PA(0,0,2,20);a.dv=b;a.ji=0.5;a.fJ=0.0;Fp(187,187,187,255,b.bh);}
function Pz(a){return a.dv.h.b;}
function N7(a){return a.dv.h.a;}
function PL(a,b){var c,d;a:{c=a.fo;if(b>a.fJ)while(true){d=a.fJ+a.ji;a.fJ=d;a.fo=a.fo?0:1;if(b>d)continue;else break a;}}return a.fo==c?0:1;}
function NK(a,b,c){Bo(a.dv.l,b,c);}
function Pj(a,b){a.fJ=b+a.ji*1.25;a.fo=1;}
function RE(a,b,c){if(a.fo)JL(a.dv,b,c.a,c.b);}
function QF(){var a=this;C.call(a);a.qO=null;a.dJ=null;}
function AHJ(a,b){var c,d,e,f,g,h,i;c=a.dJ;d=c.hP;if(d!==null){e=c.cG.l;f=e.a;g=b.L;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.hP=g;}d=b.L;f=d.a;c=c.fl;e=c.h;f=f-e.a|0;h=d.b-e.b|0;Bo(c.l,f,h);b=b.L;a.qO=b;c=a.dJ;d=c.V.u;f=0;a:{while(true){i=c.fM.data;if(f>=i.length)break;if(Dk(i[f],b)){b=c.q9.data[f];break a;}f=f+1|0;}b=null;}FH(d,b);return 1;}
function AEA(a,b,c,d){var e,f,g;e=( -d|0)/10|0;b=a.dJ.cG;f=b.h;f.a=f.a+e|0;f.b=f.b+e|0;b=b.l;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function AKe(a,b,c,d,e){var f,g,h;f=!d?B(247):B(248);g=Bv();h=new M;O(h);T(G(T(G(h,f),c),B(249)),e);Bq(g,N(h));if(!c&&e==1){g=b.L;b=a.dJ;b.hP=d&&Dk(b.cG,g)?g:null;if(d){NK(a.dJ.fX,g.a,g.b);b=a.dJ;Pj(b.fX,H7(b.V.u));}}if(!c&&e==2){b=a.dJ;Tb(b,b.cG);}return 1;}
function AGP(a,b){var c,d,e,f,g,h;c=Bv();d=!b.c0?B(250):B(251);e=b.cY;f=b.bn;g=b.jn;h=new M;O(h);Fj(G(T(G(G(G(h,d),e),B(252)),f),B(253)),g);Bq(c,N(h));return !VF(b)&&!W1(b)?1:0;}
function AKr(a,b){Bq(Bv(),B(254));return 1;}
function AA9(a,b,c){var d,e;Bq(Bv(),B(255));d=!c?B(256):B(25);e=new M;O(e);G(G(G(e,B(257)),d),B(258));SB(b,N(e));return 1;}
function AIP(a){Bq(Bv(),B(259));}
function Hx(){var a=this;B_.call(a);a.fb=0;a.fe=0;a.fc=0;a.fd=0;}
function Dy(a){var b=new Hx();AKO(b,a);return b;}
function Cq(a,b,c){var d=new Hx();ACB(d,a,b,c);return d;}
function Bl(a){var b=new Hx();AI2(b,a);return b;}
function APn(a,b,c,d){var e=new Hx();Of(e,a,b,c,d);return e;}
function C8(a){var b=new Hx();MI(b,a);return b;}
function AKO(a,b){Of(a,b,b,b,255);}
function ACB(a,b,c,d){Of(a,b,c,d,255);}
function AI2(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.fb=HA(L(b,1))*17|0;a.fe=HA(L(b,2))*17|0;a.fc=HA(L(b,3))*17|0;a.fd=255;}else{a.fb=JU(L(b,1),L(b,2));a.fe=JU(L(b,3),L(b,4));a.fc=JU(L(b,5),L(b,6));a.fd=I(b)!=9?255:JU(L(b,7),L(b,8));}Fp(a.fb,a.fe,a.fc,a.fd,a);return;}}
function Of(a,b,c,d,e){a.fb=b;a.fe=c;a.fc=d;a.fd=e;Fp(b,c,d,e,a);}
function MI(a,b){a.fb=b.fb;a.fe=b.fe;a.fc=b.fc;a.fd=b.fd;Bx(a,b);}
function HA(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function JU(b,c){return (16*HA(b)|0)+HA(c)|0;}
function VO(){var a=this;C.call(a);a.fg=null;a.Y=null;a.dw=null;a.cb=null;a.eC=null;a.bZ=null;a.eP=null;a.bi=0;a.jK=0;a.gl=0;a.eQ=0;a.hx=null;a.hO=null;a.pk=null;}
function Vh(){var a=new VO();AKf(a);return a;}
function AKf(a){var b;a.Y=Xq();a.dw=new Bn;a.cb=new Bn;b=new B_;b.cg=0.125;a.eC=b;a.bZ=APo;a.gl=(-1);}
function Jg(a,b){Qx(a);a.bZ=b;}
function Li(a,b){Bx(a.Y.bh,b);}
function S4(a,b){Bx(a.Y.P,b);}
function OT(a,b){a.fg=b;Qx(a);}
function Ql(a){a.eP=Dx(a.eP,null);Bo(a.dw,0,0);a.bZ=APo;a.gl=(-1);PQ(a.Y);}
function Fu(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.fg;if(d===null){b=new Bh;Bb(b,B(260));J(b);}Dw(b,d);e=HK(a.fg);f=0;a.bi=B4(2.0*c);a.jK=EH(a.fg.hw);g=0;h=a.bZ.data;i=h.length;j=0;k=e;while(j<i){d=h[j];l=Dj(b,d.iw)+0.875|0;m=a.jK;m=(m+l|0)+m|0;f=Bg(f,m);d=d.c8;n=d.l;n.a=g;n.b=0;n=d.h;n.a=m;n.b=e;Cu(d.ck,g,0.0,m,k);g=g+m|0;j=j+1|0;}b=a.dw;b.a=g;b.b=e;b=a.Y.h;l=a.eQ;if(l)m=f+(a.bi*2|0)|0;else{m=a.bi;m=(g+m|0)+Bc(m,a.bZ.data.length)|0;}b.a=m;if(!l)e=e+(a.bi*2|0)|0;else{m=a.bi;e=Bc(e+m|0,a.bZ.data.length)+m|0;}b.b
=e;}
function Ip(a,b,c){var d,e,f,g,h,i,j;Bo(a.Y.l,b,c);d=a.bi;e=a.bZ.data;f=e.length;g=0;h=d;while(g<f){i=e[g].c8;j=i.l;j.a=b+d|0;j.b=c+h|0;if(!a.eQ){if(!i.h.a)ZT();d=d+(i.h.a+a.bi|0)|0;}else{if(!i.h.b)ZT();h=h+(i.h.b+a.bi|0)|0;}g=g+1|0;}}
function ZT(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function DL(a){var b,c;b=a.dw;if(b.a==9&&!b.b){c=new Bh;Bb(c,B(261));J(c);}return a.Y.h;}
function Qx(a){Bo(a.dw,0,0);}
function HP(a,b,c){var d,e,f,g,h,i,j,k,l;if(!a.bZ.data.length)return;a:{if(a.eP!==null){d=a.dw;if(Bc(d.a,d.b))break a;}d=a.dw;if(!Bc(d.a,d.b))Fu(a,b.bv,c);d=a.dw;e=d.a;f=d.b;if(!Bc(e,f))return;d=Da(b,e,f);Dw(d,a.fg);g=a.fg;h=g.gz;h=h-(h+g.fD)/16.0;i=a.bZ.data;e=i.length;f=0;while(f<e){g=i[f];Cp(d,g.iw,g.c8.ck.b7+a.jK,h);f=f+1|0;}g=Dx(a.eP,Dq(b));a.eP=g;Df(g,d);HC(d);}if(!Hu(a.Y))VM(a,b);i=a.bZ.data;e=i.length;f=0;while(f<e){De(i[f].c8,b,a.eP,0,0,0.0);f=f+1|0;}b:{if(a.eQ){i=a.bZ.data;f=i.length;j=0;while(true)
{if(j>=f)break b;d=i[j].c8;g=a.cb;e=a.Y.h.a-(a.bi*2|0)|0;k=d.h;e=e-k.a|0;g.a=e;g.b=k.b;if(e>0){l=d.l;Bt(b,l.a+k.a|0,l.b,g,d.P);}j=j+1|0;}}}}
function VM(a,b){var c,d,e,f,g;c=a.cb;d=a.Y;c.a=d.h.a;c.b=a.bi;e=d.l;Bt(b,e.a,e.b,c,d.P);c=a.Y;d=c.l;Bt(b,d.a,(d.b+c.h.b|0)-a.bi|0,a.cb,c.P);c=a.cb;f=a.bi;c.a=f;d=a.Y;c.b=(d.h.b-f|0)-f|0;e=d.l;Bt(b,e.a,e.b+f|0,c,d.P);c=a.Y;d=c.l;f=d.a+c.h.a|0;g=a.bi;Bt(b,f-g|0,d.b+g|0,a.cb,c.P);c=a.cb;d=a.Y;e=d.h;f=e.a;g=a.bi;c.a=(f-g|0)-g|0;c.b=(e.b-g|0)-g|0;e=d.l;Bt(b,e.a+g|0,e.b+g|0,c,d.bh);if(a.eQ){c=a.cb;d=a.Y;e=d.h;c.a=e.a;f=a.bi;c.b=f;d=d.l;Bt(b,d.a+f|0,d.b+e.b|0,c,a.eC);c=a.Y;d=c.l;Bt(b,d.a+a.bi|0,d.b+c.h.b|0,a.cb,a.eC);c
=a.Y;d=c.l;f=d.a;g=a.bi;Bt(b,f+(g*2|0)|0,(d.b+c.h.b|0)+g|0,a.cb,a.eC);c=a.cb;f=a.bi;c.a=f;d=a.Y;e=d.h;c.b=e.b-f|0;d=d.l;Bt(b,d.a+e.a|0,d.b+f|0,c,a.eC);c=a.Y;d=c.l;Bt(b,d.a+c.h.a|0,d.b+a.bi|0,a.cb,a.eC);c=a.Y;d=c.l;f=d.a+c.h.a|0;g=a.bi;Bt(b,f+g|0,d.b+(g*2|0)|0,a.cb,a.eC);}}
function IL(a,b,c){var d,e,f,g,h,i;d=Dk(a.Y,b);e=!d?(-1):RC(a,b);f=a.gl;if(f!=e){if(f>=0){g=a.bZ.data[f];LT(g,0);if(a.pk!==null){f=a.gl;h=Bv();g=Cj(g);i=new M;O(i);G(G(T(G(i,B(262)),f),B(263)),g);Bq(h,N(i));}}if(e>=0){h=a.bZ.data[e];LT(h,1);g=a.hO;if(g!==null)g.lp(b,e,h);}a.gl=e;}return d&&Gk(c)?1:0;}
function IO(a,b,c,d,e){var f,g;if(!Dk(a.Y,b)){if(d&&!Hu(a.Y)){b=a.hx;if(b!==null)b.q();}return 0;}if(e==1&&d){f=RC(a,b);if(f>=0){g=a.bZ.data[f];if(!KP(g))g.qV.q();}}return 1;}
function RC(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.bZ.data;if(c>=d.length)return (-1);e=d[c].c8;if(Dk(e,b))return c;if(a.eQ){f=e.l;g=f.a;e=e.h;h=e.a;g=g+h|0;i=f.b;f=a.cb;f.a=(a.Y.h.a-(a.bi*2|0)|0)-h|0;f.b=e.b;if(Mz(b,g,i,f))break;}c=c+1|0;}return c;}
function PF(a){a.eQ=1;}
var Cf=F(0);
var AO6=null;var APp=null;var AOU=null;var AO5=null;var APq=null;var APr=null;var AOV=null;var APs=null;var AO9=null;var APt=null;var APu=null;var APv=null;var AO4=null;var AO1=null;var AO2=null;var APw=null;function Cm(){Cm=Bk(Cf);AEo();}
function FR(){Cm();return Wm(H$(Jv(),1.0,1.0,1.0,new B_),AOU,APq);}
function AEo(){var b,c,d,e,f;AO6=Ux(50,50,50,100);APp=Ux(80,80,80,200);AOU=Bl(B(264));AO5=Bl(B(265));APq=Bl(B(266));APr=Bl(B(267));AOV=Bl(B(264));APs=Bl(B(265));AO9=Bl(B(266));APt=Bl(B(267));b=new Fd;EA();c=AO7;GI(b,c,AO8,c,AOV,AO9);APu=b;d=new Fd;e=Bl(B(268));b=AO8;c=AO7;f=AOV;GI(d,e,b,c,f,f);APv=d;d=new Fd;e=Bl(B(269));b=AO8;c=AO7;f=APt;GI(d,e,b,c,f,f);AO4=d;AO1=Wm(Bl(B(269)),AOU,APq);AO2=Wm(Bl(B(268)),AOU,APq);d=new K7;e=Bl(B(269));b=APr;Zj(d,e,b,b);APw=d;}
var P_=F();
function AJY(a){Bq(Bv(),B(270));}
var Qb=F();
function AIc(a){Bq(Bv(),B(271));}
function EZ(){var a=this;C.call(a);a.c8=null;a.qV=null;a.j9=null;a.iq=null;a.iw=null;}
function AJB(a,b,c){var d=new EZ();AER(d,a,b,c);return d;}
function AMR(a,b,c,d){var e=new EZ();W7(e,a,b,c,d);return e;}
function AER(a,b,c,d){W7(a,b,c,d,null);}
function W7(a,b,c,d,e){var f;f=Py();a.c8=f;a.iw=c;a.j9=d;a.qV=b;Bx(f.bh,d.qJ);Bx(a.c8.P,d.id);a.iq=e;}
function KP(a){return a.iq===null?0:1;}
function LT(a,b){Bx(a.c8.P,!b?a.j9.id:a.j9.p2);}
function Xn(){var a=this;C.call(a);a.h0=null;a.b9=null;a.f3=null;a.p0=null;a.gx=0.0;a.ih=null;a.hT=null;a.gB=null;}
function Zm(a){var b=new Xn();AKa(b,a);return b;}
function AKa(a,b){a.h0=new Bn;a.b9=AJk();Cm();a.p0=APs;a.hT=AOV;a.gB=AO$;a.f3=b;}
function J2(a,b,c){a.ih=b;a.hT=c;}
function Iy(a,b,c,d){var e,f,g,h;if(a.ih!==null&&!D6(a)){a.gB=d;e=AJk();RS(e);e.bf=c;e.eJ=a.ih;RS(e);f=a.hT;Bx(e.Z.bh,f);d=a.p0;Bx(e.Z.P,d);Im(e,a.f3.bv,a.gx);g=b.a;h=b.b;b=a.h0;TH(e,Bg(0,Z(g,b.a-(J5(e)).a|0)),Bg(0,Z(h,b.b-(J5(e)).b|0)));a.b9=e;b=new LF;b.pC=a;e.qx=b;return;}b=new BC;U(b);J(b);}
function Fw(a){var b;if(!D6(a))return 0;b=a.b9;b.dN=Dx(b.dN,null);Bo(b.dW,0,0);b.bf=APx;b.bO=(-1);PQ(b.Z);a.gB.q();a.gB=AO$;return 1;}
function JY(a,b,c){C1(a.h0,b);if(a.gx!==c){if(!HN(a.b9))Im(a.b9,a.f3.bv,c);a.gx=c;}}
function IE(a){if(!HN(a.b9))Co(a.f3,1);X0(a.b9,a.f3,a.gx);}
function Jw(a,b,c){var d,e,f,g;d=a.b9;e=Dk(d.Z,b);f=!e?(-1):PU(d,b);if(d.bO!=f&&f>=0){GQ(d.bf.data[f],1);g=d.bO;if(g>=0)GQ(d.bf.data[g],0);d.bO=f;}return e&&Gk(c)?1:0;}
function JV(a,b,c,d,e){var f;f=a.b9;if(!Dk(f.Z,b)){if(d&&!Hu(f.Z)){b=f.qx;if(b!==null)Fw(b.pC);}c=0;}else{if(e==1&&d){c=PU(f,b);if(c>=0)f.bf.data[c].i6.q();}c=1;}return c;}
function D6(a){return HN(a.b9)?0:1;}
function Qy(a,b,c,d){return WR(a,b,null,c,d);}
function T7(a,b){return b===null?B(29):b.z8();}
function WR(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r;f=X7();g=0;h=c!==null?c.data.length:b.o;i=0;a:{while(true){if(i>=h)break a;if(c===null){j=(BK(b,i)).bY;k=O2(Ej(B7(e.g,j)));l=T7(a,e.e3);}else{m=c.data;j=m[i].gD.iV;k=!FX(d.e.e3,m[i].gH)?B(272):O2(Ej(B7(e.g,j)));l=T7(a,m[i].gH);}if(I(k)>43){n=B5(k,0,40);o=new M;O(o);G(G(o,n),B(273));k=N(o);}n=C0(j+1|0);g=g+1|0;if(g>20)break;if(c!==null){m=c.data;o=null;p=m[i];}else{p=null;o=BK(b,i);}if(c!==null){q=new Pg;q.pN=d;q.pO=p;}else{q=new Pf;q.lF=d;q.lD=o;}Cm();Hh(f,
l,n,k,APu,q);i=i+1|0;}r=b.o-(g-1|0)|0;b=new M;O(b);G(T(G(b,B(274)),r),B(275));o=N(b);Cm();Hh(f,o,B(29),B(29),APv,new Ph);}return IK(f);}
function TU(a,b){var c,d;a:{c=b.bn;switch(c){case 13:b=a.b9;d=b.bO;if(d==(-1))c=0;else{b.bf.data[d].i6.q();c=1;}break a;case 27:break;case 37:case 38:case 39:case 40:b=a.b9;d=b.bO;if(d>=0)GQ(b.bf.data[d],0);b:{c:{switch(c){case 38:c=b.bf.data.length;c=((c+b.bO|0)-1|0)%c|0;b.bO=c;if(c!=20)break b;b.bO=19;break b;case 39:b.bO=Z(b.bf.data.length,20)-1|0;break b;case 40:break c;default:}b.bO=0;break b;}c=b.bO;if(c==19)b.bO=0;else b.bO=(c+1|0)%b.bf.data.length|0;}GQ(b.bf.data[b.bO],1);c=1;break a;default:c=0;break a;}c
=Fw(a);}return c;}
function Xi(){var a=this;C.call(a);a.s0=20;a.fL=null;a.eg=null;a.gX=null;a.iH=0;a.gW=0;a.hi=0.0;a.b8=null;a.dP=null;a.eu=null;a.eF=0;}
function AF5(){var a=new Xi();AJ$(a);return a;}
function AJ$(a){a.s0=20;a.fL=new Bn;a.eg=new Bn;a.b8=Cy();}
function T_(a,b){var c,d,e,f,g;c=a.eF;if(b==c)return;d=a.b8.o;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Bg(0,(c-1|0)/20|0);f=Bg(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){Pp(a,b);a.eF=b;}else{if(a.eF>=b)while(true){if(g<f)break a;a.eF=PT(BK(a.b8,g%d|0),a.dP,a.eu,a.eF,b,e,a.hi);g=g+(-1)|0;}while(f<=g){a.eF=PT(BK(a.b8,f%d|0),a.dP,a.eu,a.eF,b,e,a.hi);f=f+1|0;}}}}
function QW(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=BV(a.b8);while(B9(f)){g=BX(f);h=a.fL;i=Bc(a.b8.o,a.gW);j=g.em.b;k=((g.hb.b-(b%i|0)|0)+i|0)%i|0;l=k+j|0;m=BD(l,c);if(m<=0){Bo(g.fh,g.bF.bI,j);Cu(g.eR,0.0,0.0,g.bF.bI,j);HJ(g,e,k,h,d.hk,d.f$);}else{if(m>0&&k<c){m=Bg(c-k|0,0);Bo(g.fh,g.bF.bI,m);Cu(g.eR,0.0,0.0,g.bF.bI,m);HJ(g,e,k,h,d.hk,d.f$);}if(l>i){m=Z(l%i|0,c);Bo(g.fh,g.bF.bI,m);n=g.eR;o=g.bF;Cu(n,0.0,b%o.cn|0,o.bI,m);HJ(g,e,0,h,d.hk,d.f$);}}}}
function Is(a,b,c,d){var e,f,g,h,i,j;e=a.b8.o;while(true){f=a.b8.o;g=Bc(f,a.gW);if(g>(d+a.iH|0))break;h=Cx(0,g);i=new Lw;g=a.eg.a;f=a.iH;j=a.gX;i.fh=new Bn;i.eR=new B_;i.hb=h;i.c4=20;i.dE=f;i.em=Cx(g,20*f|0);i.eV=Qh(j,f);if(i.bF===null)i.bF=Dq(b);Cc(a.b8,i);}if(f==e)return;Pp(a,c);}
function Pp(a,b){var c,d,e,f,g,h,i,j;c=a.b8;d=c.o;e=Bc((b/(d*20|0)|0)+1|0,d)*20|0;c=BV(c);while(B9(c)){f=BX(c);g=a.dP;h=a.hi;D8(g);i=0;while(true){j=f.c4;if(i>=j)break;j=e-Bc(d,j)|0;if(j<b)j=e;e=j+1|0;Fm(f,g,C0(e),Bc(f.dE,i)+f.eV|0,h);i=i+1|0;}Df(f.bF,g);}}
function Qv(a,b,c,d){var e;a.gX=b;a.iH=c;e=c*20|0;a.gW=e;b=Dx(a.dP,Da(d,a.eg.a,e));a.dP=b;Dw(b,a.gX);O_(a.dP,2);b=Dx(a.eu,Da(d,a.eg.a,c));a.eu=b;Dw(b,a.gX);O_(a.eu,2);}
function RV(a,b,c,d,e){C1(a.fL,b);Bo(a.eg,c,d);a.hi=e;}
var Vm=F(0);
function Ux(b,c,d,e){return Fp(b,c,d,e,new B_);}
function Fp(b,c,d,e,f){Cu(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function H$(b,c,d,e,f){var g,h,i,j;g=b*6.0;c=d*c;h=g%2.0-1.0;if(h<=0.0)h= -h;i=c*(1.0-h);d=d-c;j=0.0;if(g>=1.0){if(g<2.0){b=c;c=i;i=b;}else if(g<3.0){b=c;j=i;c=0.0;i=b;}else if(g<4.0){j=c;c=0.0;}else if(g>=5.0){j=i;i=0.0;}else{j=c;c=i;i=0.0;}}f.b7=c+d;f.cP=i+d;f.cA=j+d;f.cg=e;return f;}
function FS(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var YC=F(0);
function YU(){return AF2(Cq(96,99,102),Cq(49,51,53),Cq(164,163,163),Dy(50));}
function SL(){var a=this;C.call(a);a.hm=null;a.nJ=null;a.fU=null;}
function ACg(a,b,c,d){var e,f;e=(KV(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b=a.fU;b.df=Z(Bg(0,b.df+Bc(e,f)|0),NL(b));return 1;}
function AC7(a,b,c,d,e){if(!d&&a.hm!==null){a.hm=null;return 1;}if(!c&&e==1&&d){b=Gm(a.fU.fH,b.L,a.nJ,1);a.hm=b;if(b!==null)return 1;}return 1;}
function AC2(a,b){var c;c=a.hm;if(c!==null){c.m(b.L);return 1;}c=a.fU;return GS(c.fH,b.L,Hd(c.V.u));}
function Xh(){var a=this;C.call(a);a.d$=null;a.co=null;a.db=null;a.dB=null;a.kt=null;a.hM=null;}
function LS(){var a=new Xh();ACZ(a);return a;}
function ACZ(a){var b;a.d$=new Bn;a.co=new Bn;a.db=new Bn;a.dB=new Bn;b=new B_;a.kt=b;a.hM=new B_;Cm();Bx(b,AO6);Bx(a.hM,APp);}
function NI(a){var b;b=a.co;return !Bc(b.a,b.b)?0:1;}
function Tv(a,b){return Ie(b,a.db,a.dB);}
function Gm(a,b,c,d){var e,f,g,h;e=Tv(a,b);f=Ie(b,a.d$,a.co);if(!e&&!f)return null;if(!f){if(!d)c.m(PZ(a,b.a-a.db.a|0));else c.m(PY(a,b.b-a.db.b|0));}g=!d?a.d$.a+(a.co.a/2|0)|0:a.d$.b+(a.co.b/2|0)|0;h=!d?b.a:b.b;g=!f?0:g-h|0;if(!d){b=new Ue;b.k6=a;b.k5=c;b.k4=g;}else{b=new Uf;b.q0=a;b.qZ=c;b.qY=g;}return b;}
function Vk(b,c){var d;d=new K3;d.pj=b;d.pi=c;return d;}
function PY(a,b){var c,d,e;c=a.dB.b;d=a.co.b;e=c-d|0;return Vk(Z(Bg(0,b-(d/2|0)|0),e),e);}
function PZ(a,b){var c,d,e;c=a.dB.a;d=a.co.a;e=c-d|0;return Vk(Z(Bg(0,b-(d/2|0)|0),e),e);}
function I6(a,b,c,d,e,f){L0(a,b,c,d,e,0,f,1);}
function L0(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bo(a.dB,0,0);Bo(a.co,0,0);}else{i=g*3|0;i=Bg(ND(d,d,e),i);j=ND(b,d-i|0,e-d|0);if(!h){k=a.d$;k.a=j+f|0;k.b=c-g|0;l=a.co;l.a=i;l.b=g;l=a.db;l.a=f;l.b=k.b;k=a.dB;k.a=d;k.b=g;}else{l=a.d$;l.a=c-g|0;l.b=j+f|0;k=a.co;k.a=g;k.b=i;k=a.db;k.a=l.a;k.b=f;k=a.dB;k.a=g;k.b=d;}}}
function G0(a,b,c){var d,e,f;d=c.a;e=a.db;Bt(b,d+e.a|0,c.b+e.b|0,a.dB,a.kt);e=a.co;e.a=e.a-2|0;e.b=e.b-2|0;d=c.a;f=a.d$;Bt(b,(d+f.a|0)+1|0,(c.b+f.b|0)+1|0,e,a.hM);b=a.co;b.a=b.a+2|0;b.b=b.b+2|0;}
function GS(a,b,c){return Tv(a,b)&&Gk(c)?1:0;}
function OK(){C.call(this);this.rT=null;}
function AAH(a,b){var c,d,e,f;c=b.data;b=Bv();d=Cj(c[0]);e=new M;O(e);G(G(e,B(188)),d);Bq(b,N(e));b=Bv();f=c[1];d=new M;O(d);G(G(d,B(276)),f);Bq(b,N(d));}
function OJ(){C.call(this);this.tH=null;}
function AKX(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bv();e=Cj(c[0]);f=new M;O(f);G(G(f,B(188)),e);Bq(d,N(f));g=E4(O6(b,1));b=Bv();d=Cj(c[1]);if(g===null)c=B(27);else{c=new M;O(c);BR(c,B(84));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BR(c,B(85));BB(c,i[h]);h=h+1|0;}BR(c,B(86));c=N(c);}e=new M;O(e);G(G(G(G(e,B(277)),d),B(278)),c);Bq(b,N(e));}
function OI(){C.call(this);this.lU=null;}
function ACH(a,b){Rb(a.lU,b);}
function OH(){C.call(this);this.rA=null;}
function AGV(a,b){var c,d,e,f,g;c=b.data;d=Bv();e=Cj(c[0]);f=new M;O(f);G(G(f,B(188)),e);Bq(d,N(f));g=D5(O6(b,1));b=Bv();d=Cj(c[1]);c=X_(g);e=new M;O(e);G(G(G(G(e,B(279)),d),B(280)),c);Bq(b,N(e));}
function NB(){var a=this;C.call(a);a.h3=null;a.l9=null;a.kl=null;}
function AAe(a,b){var c;c=b.c0&&!b.jn?1:0;if(c&&b.b1&&b.bn==79){if(!b.bp)Kc(a.h3,a.kl);else J8(a.h3,a.l9);return 1;}return 0;}
function OF(){C.call(this);this.sL=null;}
function AGa(a,b){var c,d;c=J1();b=Cj(b);d=new M;O(d);G(G(d,B(281)),b);Bq(c,N(d));b=new Fv;U(b);J(b);}
function OE(){C.call(this);this.m$=null;}
function AHT(a,b){var c,d,e,f;c=a.m$;d=c.V.u;e=new Md;e.nV=c;f=R(C,1);f.data[0]=b;CM(d,e,B(282),f);}
function QE(){var a=this;C.call(a);a.p8=null;a.jc=null;}
function AJz(a,b){var c,d,e,f,g,h;c=a.jc;d=c.jz;if(d!==null){e=c.c9.l;f=e.a;g=b.L;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.jz=g;}d=b.L;h=d.a;c=c.d2;e=c.h;h=h-e.a|0;f=d.b-e.b|0;Bo(c.l,h,f);a.p8=b.L;return 1;}
function AHo(a,b,c,d,e){var f;if(!c&&e==1){f=b.L;b=a.jc;if(!(d&&Dk(b.c9,f)))f=null;b.jz=f;}return 1;}
function Ok(){var a=this;C.call(a);a.g9=null;a.l1=null;a.f9=null;}
function AAz(a,b,c,d){var e,f;e=(KV(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b=a.f9;b.dO=Z(Bg(0,b.dO+Bc(e,f)|0),O1(b));return 1;}
function AIX(a,b,c,d,e){if(!d&&a.g9!==null){a.g9=null;return 1;}if(!c&&e==1&&d){b=Gm(a.f9.gk,b.L,a.l1,1);a.g9=b;if(b!==null)return 1;}return 1;}
function ABg(a,b){var c;c=a.g9;if(c!==null){c.m(b.L);return 1;}c=a.f9;return GS(c.gk,b.L,Hd(c.V.u));}
function J0(){var a=this;C.call(a);a.e3=null;a.g=null;a.ra=null;a.hc=null;a.m2=null;}
function Dg(a){var b;b=a.hc;if(b===null)b=a.m2;return b;}
function Hm(a){var b;b=a.e3;return b===null?null:b.rg;}
var XH=F();
function Yb(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(APy());}return b.data.length;}
function Rk(b,c){if(b===null){b=new FQ;U(b);J(b);}if(b===E($rt_voidcls())){b=new BC;U(b);J(b);}if(c>=0)return AKb(b.d7,c);b=new Uv;U(b);J(b);}
function AKb(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Hq=F(Bh);
var MK=F(0);
var M8=F();
function ADH(a,b,c){var d,e;d=b;e=c;b=new M;O(b);T(G(T(G(b,B(283)),d),B(284)),e);Cv(N(b));return d+e|0;}
var ML=F(0);
var M6=F();
function AEE(a,b,c){var d,e;d=b;e=c;b=new M;O(b);Fz(G(Fz(G(b,B(285)),d),B(284)),e);Cv(N(b));return d+e;}
var VH=F();
var UX=F(0);
function LX(){C.call(this);this.ll=null;}
function I8(a,b){FH(a.ll,b);return 1;}
var Sw=F(0);
var Gt=F(0);
var DA=F();
function DO(a){return a.o?0:1;}
function GE(a,b){var c,d,e,f,g,h;c=b.data;d=a.o;e=c.length;if(e<d)b=Rk(GZ(CB(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BV(a);while(B9(f)){g=b.data;h=e+1|0;g[e]=BX(f);e=h;}return b;}
var La=F(0);
function Fk(){DA.call(this);this.cc=0;}
function BV(a){var b;b=new LI;b.lj=a;b.p$=a.cc;b.mN=a.le();b.nY=(-1);return b;}
var Ha=F(0);
function LZ(){var a=this;Fk.call(a);a.bR=null;a.o=0;}
function Cy(){var a=new LZ();ADw(a);return a;}
function APz(a){var b=new LZ();K5(b,a);return b;}
function ADw(a){K5(a,10);}
function K5(a,b){a.bR=R(C,b);}
function H1(a,b){var c,d;c=a.bR.data.length;if(c<b){d=c>=1073741823?2147483647:Bg(b,Bg(c*2|0,5));a.bR=CX(a.bR,d);}}
function BK(a,b){HT(a,b);return a.bR.data[b];}
function AG7(a){return a.o;}
function Cc(a,b){var c,d;H1(a,a.o+1|0);c=a.bR.data;d=a.o;a.o=d+1|0;c[d]=b;a.cc=a.cc+1|0;return 1;}
function F7(a,b){var c,d,e,f;HT(a,b);c=a.bR.data;d=c[b];e=a.o-1|0;a.o=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cc=a.cc+1|0;return d;}
function Gu(a){var b,c,d,e,f,g;b=a.bR;c=0;d=a.o;e=null;if(c>d){e=new BC;U(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.o=0;a.cc=a.cc+1|0;}
function HT(a,b){var c;if(b>=0&&b<a.o)return;c=new Bu;U(c);J(c);}
function Nj(a,b){var c;if(b>=0&&b<=a.o)return;c=new Bu;U(c);J(c);}
function Iu(a,b){var c;c=0;while(c<a.o){b.m(a.bR.data[c]);c=c+1|0;}}
function Me(a,b){var c,d,e,f,g,h,i;c=a.bR;d=a.o;if(b===null)b=AOs;e=R(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}Wa(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.cc=a.cc+1|0;}
var HH=F(0);
var AO$=null;var APe=null;var APA=null;function YW(){AO$=new RZ;APe=new R0;APA=new RY;}
function Jr(){var a=this;C.call(a);a.j8=null;a.ru=null;a.rJ=0.0;a.iu=0;a.rQ=0;a.sj=0;a.i9=0;a.pa=0;a.gz=0.0;a.fD=0.0;a.rF=0.0;a.hw=0.0;a.rN=0;a.kV=null;}
function HK(a){return EH(a.gz+a.fD);}
function Sj(){var a=this;C.call(a);a.k3=null;a.o9=null;a.po=null;a.r1=null;a.kA=null;a.n4=null;}
function Je(a,b,c){return TV(a,a.k3.e5,b,c);}
function R$(a,b,c){return TV(a,a.o9.e5,b,c);}
function TV(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g!==null&&g.tB(c,d))return g.r0;f=f+1|0;}return null;}
function LE(a,b,c){var d,e,f,g;d=a.po.e5.data;e=d.length;f=0;while(f<e){g=d[f];if(g!==null&&g.tB(b,c))return g.r_;f=f+1|0;}return null;}
function UD(){var a=this;C.call(a);a.b5=null;a.bU=null;a.c3=0;}
function AHc(){var a=new UD();AAP(a);return a;}
function AAP(a){a.b5=new IQ;a.bU=new IQ;}
function O3(a,b,c){B$(a.bU,b,c);if(!a.c3)B$(a.b5,b,c);}
function Ep(a){if(Ua(a.b5,a.bU)>0)return a.bU;return a.b5;}
function G7(a){if(Ua(a.b5,a.bU)<0)return a.bU;return a.b5;}
function DE(a){var b,c;b=a.b5;c=a.bU;return (b===c?1:c!==null&&CB(b)===CB(c)?(b.X==c.X&&b.by==c.by?1:0):0)?0:1;}
function VV(a,b){var c,d;if(!DE(a))return 0;c=Ep(a);d=G7(a);return c.X<=b&&b<d.X?1:0;}
function JJ(){var a=this;C.call(a);a.hv=null;a.pe=null;a.kv=null;a.kx=null;a.jx=null;a.ny=null;a.k7=null;a.lO=null;a.qR=null;}
function APB(a,b,c,d,e,f,g,h,i){var j=new JJ();PJ(j,a,b,c,d,e,f,g,h,i);return j;}
function We(){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=new JJ;c=new Hx;EA();MI(c,AOW);d=C8(AO8);e=C8(APf);f=C8(AOW);g=C8(APg);h=C8(APl);i=C8(APm);VI();j=(APC.eH()).data;k=j.length;l=R(H3,k);m=l.data;n=0;while(n<k){m[n]=j[n].jg;n=n+1|0;}PJ(b,c,d,e,f,g,h,i,l,YU());return b;}
function PJ(a,b,c,d,e,f,g,h,i,j){var k;k=i.data;a.hv=b;a.pe=c;a.kv=d;a.kx=e;a.jx=f;a.ny=g;a.k7=h;a.lO=i;a.qR=j;if(k.length>=15)return;b=new BC;U(b);J(b);}
function Eq(){var a=this;C.call(a);a.bw=0;a.bx=null;a.dA=null;a.cW=0;a.cz=0;}
var APc=0;var APD=0;var APb=0;function Jx(b,c){return (c-HK(b)|0)/2|0;}
function Qh(b,c){return Jx(b,c)+b.i9|0;}
function X2(a,b,c,d,e){var f,g;if(DO(a.dA))return;if(e>D7(a.bx))return;f=e/512|0;e=a.cz;if(f==e)return;if(KV(f-e|0)>=a.cW){g=0;while(g<a.cW){GU(a,b,d,c,f+g|0);g=g+1|0;}a.cz=f;return;}while(true){e=a.cz;if(e>=f)break;GU(a,b,d,c,e+a.cW|0);a.cz=a.cz+1|0;}while(true){e=a.cz;if(e<=f)break;GU(a,b,d,c,e-1|0);a.cz=a.cz-1|0;}}
function GU(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;D8(b);f=a.bx.ez;g=e*512|0;h=M4(a,g);if(h>=a.bx.n.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bw;a:{while(true){l=a.bx.n.data;if(h>=l.length)break a;m=l[h];n=!APb?Qh(d.data[m.bJ],c):Jx(d.data[m.bJ],c);o=f.data;Dw(b,d.data[m.bJ]);Cp(b,m.p,k,n);k=o[h]-j+a.bw;if(k>512.0)break;h=h+1|0;}}Df(BK(a.dA,e%a.cW|0),b);}
function X8(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn;if(DO(a.dA))return;if(!a.cW)return;if(j>D7(a.bx))return;o=a.bx;p=o.cu.data;q=o.n;r=j/512|0;s=M4(a,j);if(s>p.length)return;t= -a.bw|0;u=i;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;w=s!=(w-1|0)?0:1;if(t>=h)break;x=BK(a.dA,r%a.cW|0);y=v[s];z=p[s]+a.bw|0;ba=r*512|0;bb=(z-ba|0)>512?0:1;bc=r+1|0;bd=bc*512|0;be=Z(bd,z)-j|0;if(bb&&w)be=be+a.bw|0;if((t+be|0)>h)be=h-t|0;bf=l!==null?0:1;b:{if(!bf){bg
=!w?a.bw:2*a.bw|0;bh=l.a;bi=l.b;if(!(bh<bi&&j<=bi&&(j+be|0)>(bh+bg|0)?0:1)){bj=0;break b;}}bj=1;}c:{if(!bf){bf=!w?a.bw:2*a.bw|0;if(j>=l.a&&(j+be|0)<=(l.b+bf|0)?1:0){bi=1;break c;}}bi=0;}o=null;if(y===m)o=k.ny;bk=BV(n);d:{e:{while(B9(bk)){f:{bl=BX(bk);if(bl!==null){if(!bl.d1(y))break f;else break e;}if(y===null)break e;}}bh=0;break d;}bh=1;}if(bh)o=k.k7;if(!bi&&!bj){l.b=Z(l.b,D7(a.bx));bg=j>=l.a?be:(Z(z,bd)-l.a|0)-(!w?a.bw:0)|0;bm=(j+be|0)<=(l.b+(!w?a.bw:2*a.bw|0)|0)?0:(Z(z,bd)-l.b|0)-(!w?a.bw:0)|0;bh=j-ba|0;bi
=t+c|0;bn=bh;w=be-bg|0;Cu(e,bn,0.0,w,u);Bo(f,w,i);G$(a,d,bi,b,f,e,y,x,g,k,0,o);bd=bh+be|0;Cu(e,bd-bm|0,0.0,bm,u);Bo(f,bm,i);w=bi+be|0;G$(a,d,w-bm|0,b,f,e,y,x,g,k,0,o);bn=bd-bg|0;bh=bg-bm|0;Cu(e,bn,0.0,bh,u);Bo(f,bh,i);G$(a,d,w-bg|0,b,f,e,y,x,g,k,1,o);}else{Cu(e,j-ba|0,0.0,be,u);Bo(f,be,i);G$(a,d,t+c|0,b,f,e,y,x,g,k,bi,o);}j=j+be|0;t=t+be|0;if(!bb){s=s+(-1)|0;r=bc;}s=s+1|0;}}}
function G$(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.a&&e.b){if(f.cg!==0.0&&f.cA!==0.0){m=j.lO.data[g.cj];if(k)n=j.jx;else{g=m.ou;if(g===null)g=j.hv;if(l===null)l=Ck(g);n=l;}g=m.ot;if(APD)i=0.0;IY(b,c,d,e,f,h,g,n,i);return;}return;}}
function M4(a,b){var c,d,e,f,g,h,i;c=a.bx;d=c.ez;e=0;f=c.n.data.length;g=b;b=BD(e,f);if(b>0){c=new BC;U(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BD(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function Wu(a,b){var c;c=a.bx;if(c===null)return 0;if(D7(c)<b)return J7(D7(a.bx),512);return J7(b,512)+1|0;}
function Yj(a,b,c,d,e,f){var g,h;a.cz=f/512|0;while(true){g=a.dA;if(g.o>=a.cW)break;Cc(g,Dq(c));}h=0;while(h<a.cW){GU(a,b,e,d,a.cz+h|0);h=h+1|0;}}
function Oa(a){a.bx=null;Iu(a.dA,new Ob);Gu(a.dA);}
function XS(a,b,c,d,e,f,g,h,i){var j,k;j=D7(a.bx);if(j)j=j+a.bw|0;if(!j)j=j-a.bw|0;k=Bg( -a.bw|0,j-g|0);if(k>=h)return;Bo(f,h-k|0,e);Bt(b,c+k|0,d,f,i);}
function Wp(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(Eq,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B7(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bx===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new Eq;f.bw=3;f.dA=Cy();f.cz=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)Oa(o);h=h+1|0;}return g;}
function YA(){APb=0;}
function Rr(){C.call(this);this.tL=null;}
function Rq(){C.call(this);this.nP=null;}
function AIF(a,b){var c;c=a.nP;c.W=G9(b,Er(c));}
function Rm(){C.call(this);this.lm=null;}
function AGT(a,b){var c;c=a.lm;c.bN=G9(b,FB(c));}
function Rl(){C.call(this);this.pu=null;}
function AIB(a){var b,c;b=a.pu;c=b.gE?0:1;b.gE=c;b=new M;O(b);Fj(G(b,B(286)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Ro(){C.call(this);this.oa=null;}
function AEs(a){var b,c;b=a.oa;c=b.gt?0:1;b.gt=c;b=new M;O(b);Fj(G(b,B(287)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Rn(){C.call(this);this.lz=null;}
function AGh(a){var b,c;b=a.lz;c=b.hy^1;b.hy=c;b=new M;O(b);Fj(G(b,B(288)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function RH(){C.call(this);this.pQ=null;}
function AH8(a){var b,c,d,e,f;b=a.pQ;c=(b.i2+3|0)%6|0;b.i2=c;d=b.fm.data;e=d.length;f=0;while(f<e){b=d[f];b.bw=c;b=b.bx;if(b!==null)b.gC=1;f=f+1|0;}}
var EQ=F(Cd);
var AO_=null;var APE=null;var APa=null;var APF=null;function AAs(){AAs=Bk(EQ);AGm();}
function XE(a,b){var c=new EQ();Xu(c,a,b);return c;}
function Xu(a,b,c){AAs();Dm(a,b,c);}
function AGm(){var b;AO_=XE(B(289),0);APE=XE(B(290),1);b=XE(B(291),2);APa=b;APF=H(EQ,[AO_,APE,b]);}
function H6(){var a=this;C.call(a);a.eh=null;a.fF=null;a.bI=0;a.cn=0;}
var AOt=0;function X5(a){var b;b=a.fF;if(b!==null){AOt=AOt-1|0;a.eh.dt.deleteTexture(b);a.fF=null;}}
function Kh(a){var b,c;b=a.eh.dt;c=a.fF;b.bindTexture(3553,c);}
function Df(a,b){Lu(a,b.jJ,b.iY,32856);NF(a,b,0,0);}
function Lu(a,b,c,d){var e,f,g;a:{e=a.bI;if(e){f=a.cn;if(f){if(e==b&&f==c){Kh(a);break a;}g=new Bh;Bb(g,B(292));J(g);}}a.bI=b;a.cn=c;Kh(a);a.eh.dt.texStorage2D(3553,1,d,b,c);g=a.eh.dt;g.texParameteri(3553,10242,33071);g.texParameteri(3553,10243,33071);g.texParameteri(3553,10241,9729);g.texParameteri(3553,10240,9729);}}
function GP(a,b,c,d){Kh(a);NF(a,b,c,d);}
function NF(a,b,c,d){var e;e=a.eh.dt;b=b.hH;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function Qz(){C.call(this);this.ic=null;}
var APo=null;function NM(){var a=new Qz();WO(a);return a;}
function WO(a){a.ic=Cy();}
function DI(a,b,c,d){Nt(a,AJB(d,b,c));}
function CN(b,c,d){return AJB(d,b,c);}
function Ed(a,b,c,d){Nt(a,AMR(null,b,c,d));}
function Nt(a,b){Cc(a.ic,b);}
function Gr(a){return HG(GE(a.ic,APo));}
function UO(){APo=R(EZ,0);}
var GR=F(0);
var Tx=F();
function AIp(a,b,c,d){var e;b=Bv();d=Cj(d);e=new M;O(e);G(G(T(G(e,B(293)),c),B(263)),d);Bq(b,N(e));}
var Ty=F();
function Tp(){var a=this;C.call(a);a.jH=0;a.jI=0;}
function OW(a){var b,c;b=a.jH;c=a.jI;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.jH=c;a.jI=b;return b;}
function QD(a,b){return 5.960464477539063E-8*(OW(a)&16777215)*b|0;}
function Xm(){var a=this;C.call(a);a.Z=null;a.dW=null;a.ce=null;a.eB=null;a.eJ=null;a.bf=null;a.dN=null;a.bD=0;a.ft=0;a.bO=0;a.qx=null;}
function AJk(){var a=new Xm();AK0(a);return a;}
function AK0(a){var b;a.Z=Xq();a.dW=new Bn;a.ce=new Bn;b=new B_;b.cg=0.125;a.eB=b;a.bf=APx;a.bO=(-1);}
function HN(a){return a.bf.data.length?0:1;}
function Im(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;d=a.eJ;if(d===null){b=new Bh;Bb(b,B(294));J(b);}Dw(b,d);e=HK(a.eJ);f=0;a.bD=B4(2.0*c);a.ft=EH(a.eJ.hw);g=0;h=0;i=0;j=0;k=a.bf.data;l=k.length;m=0;while(m<l){n=k[m];if(!FK(n.ff,B(273))){o=Dj(b,n.ff)+0.875|0;p=Dj(b,n.jM)+0.875|0;q=Dj(b,n.j5)+0.875|0;h=Bg(h,o);i=Bg(i,p);j=Bg(j,q);}m=m+1|0;}k=a.bf.data;q=k.length;o=0;r=e;while(o<q){d=k[o];s=a.ft;l=s+h|0;m=i+s|0;s=j+s|0;if(FK(d.ff,B(273))){l=(Dj(b,d.ff)+0.875|0)+a.ft|0;m=0;s=0;}p=(l+m|0)+s|0;f=Bg(f,p);n=d.cq;t
=n.l;t.a=g;t.b=0;t=n.h;t.a=l;t.b=e;Cu(n.ck,g,0.0,l,r);n=d.cQ;t=n.l;l=g+l|0;t.a=l;t.b=0;t=n.h;t.a=m;t.b=e;Cu(n.ck,l,0.0,m,r);n=d.dc;d=n.l;l=l+m|0;d.a=l;d.b=0;d=n.h;d.a=s;d.b=e;Cu(n.ck,l,0.0,s,r);g=g+p|0;o=o+1|0;}b=a.dW;b.a=g;b.b=e;b=a.Z.h;l=a.bD;b.a=f+(l*2|0)|0;b.b=Bc(e+l|0,a.bf.data.length)+l|0;}
function TH(a,b,c){var d,e,f,g,h,i,j,k,l;Bo(a.Z.l,b,c);d=a.bD;e=a.bf.data;f=e.length;g=0;h=b+d|0;while(g<f){i=e[g];j=i.cq;k=i.cQ;l=i.dc;i=j.l;i.a=h;b=c+d|0;i.b=b;i=k.l;i.a=h;i.b=b;i=l.l;i.a=h;i.b=b;if(!(j.h.b&&k.h.b&&l.h.b))$rt_globals.console.info("FindUsages.setPos: tRect.size == 0");d=d+(j.h.b+a.bD|0)|0;g=g+1|0;}}
function J5(a){var b,c;b=a.dW;if(b.a&&b.b)return a.Z.h;c=new Bh;Bb(c,B(295));J(c);}
function RS(a){Bo(a.dW,0,0);}
function X0(a,b,c){var d,e,f,g,h,i,j,k,l;if(!a.bf.data.length)return;a:{if(a.dN!==null){d=a.dW;if(Bc(d.a,d.b))break a;}d=a.dW;if(!Bc(d.a,d.b))Im(a,b.bv,c);d=a.dW;e=d.a;f=d.b;if(!Bc(e,f))return;d=Da(b,e+150|0,f);Dw(d,a.eJ);g=a.eJ;h=g.gz;h=h-(h+g.fD)/16.0;i=a.bf.data;e=i.length;f=0;while(f<e){g=i[f];Cp(d,g.ff,g.cq.ck.b7+a.ft,h);Cp(d,g.jM,g.cQ.ck.b7+a.ft,h);Cp(d,g.j5,g.dc.ck.b7+a.ft,h);f=f+1|0;}g=Dx(a.dN,Dq(b));a.dN=g;Df(g,d);HC(d);}if(!Hu(a.Z))Zk(a,b);i=a.bf.data;f=i.length;j=0;while(j<f){d=i[j];De(d.cq,b,a.dN,
0,0,2.0);De(d.cQ,b,a.dN,d.cq.h.a,0,2.0);De(d.dc,b,a.dN,d.cq.h.a+d.cQ.h.a|0,0,2.0);j=j+1|0;}i=a.bf.data;f=i.length;j=0;while(j<f){d=i[j];g=d.cq;k=d.cQ;l=d.dc;b=a.ce;e=a.Z.h.a-(a.bD*2|0)|0;d=g.h;b.a=e-d.a|0;b.b=(d.b+k.h.b|0)+l.h.b|0;j=j+1|0;}}
function Zk(a,b){var c,d,e,f,g;c=a.ce;d=a.Z;c.a=d.h.a;c.b=a.bD;e=d.l;Bt(b,e.a,e.b,c,d.P);c=a.Z;d=c.l;Bt(b,d.a,(d.b+c.h.b|0)-a.bD|0,a.ce,c.P);c=a.ce;f=a.bD;c.a=f;d=a.Z;c.b=(d.h.b-f|0)-f|0;e=d.l;Bt(b,e.a,e.b+f|0,c,d.P);c=a.Z;d=c.l;f=d.a+c.h.a|0;g=a.bD;Bt(b,f-g|0,d.b+g|0,a.ce,c.P);c=a.ce;d=a.Z;e=d.h;f=e.a;g=a.bD;c.a=(f-g|0)-g|0;c.b=(e.b-g|0)-g|0;e=d.l;Bt(b,e.a+g|0,e.b+g|0,c,d.bh);c=a.ce;d=a.Z;e=d.h;c.a=e.a;f=a.bD;c.b=f;d=d.l;Bt(b,d.a+f|0,d.b+e.b|0,c,a.eB);c=a.Z;d=c.l;Bt(b,d.a+a.bD|0,d.b+c.h.b|0,a.ce,a.eB);c=a.Z;d
=c.l;f=d.a;g=a.bD;Bt(b,f+(g*2|0)|0,(d.b+c.h.b|0)+g|0,a.ce,a.eB);c=a.ce;f=a.bD;c.a=f;d=a.Z;e=d.h;c.b=e.b-f|0;d=d.l;Bt(b,d.a+e.a|0,d.b+f|0,c,a.eB);c=a.Z;d=c.l;Bt(b,d.a+c.h.a|0,d.b+a.bD|0,a.ce,a.eB);c=a.Z;d=c.l;f=d.a+c.h.a|0;g=a.bD;Bt(b,f+g|0,d.b+(g*2|0)|0,a.ce,a.eB);}
function PU(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.bf.data;if(c>=d.length)return (-1);e=d[c].cq;if(Dk(e,b))return c;f=e.l;g=f.a;e=e.h;h=e.a;g=g+h|0;i=f.b;f=a.ce;f.a=(a.Z.h.a-(a.bD*2|0)|0)-h|0;f.b=e.b;if(Mz(b,g,i,f))break;c=c+1|0;}return c;}
function YM(){var a=this;C.call(a);a.hk=null;a.f$=null;a.mS=null;a.mX=null;}
function AF2(a,b,c,d){var e=new YM();AKM(e,a,b,c,d);return e;}
function AKM(a,b,c,d,e){a.hk=b;a.f$=c;a.mS=d;a.mX=e;}
function Ut(){C.call(this);this.oh=null;}
function AHV(a,b){var c;c=a.oh.fU;c.df=G9(b,NL(c));}
var Xr=F();
function SD(){C.call(this);this.qM=null;}
function AA_(a,b){var c;c=a.qM.f9;c.dO=G9(b,O1(c));}
var VT=F();
function ID(){var a=this;C.call(a);a.A=null;a.cC=null;a.dq=null;a.de=null;a.ge=null;a.cI=0;a.eO=0;a.mI=0.0;}
function AHN(){var a=new ID();AI5(a);return a;}
function AI5(a){a.dq=GX();a.de=GX();a.ge=Cy();a.A=K_(B(29));a.eO=0;a.cI=0;a.cC=QT(a);}
function QT(a){var b,c,d,e,f,g,h,i;b=Qk(a);c=new Hw;d=new LZ;e=L$(0,b,0);f=new T8;f.pt=e;K5(d,1);e=BV(f);g=0;while(true){h=d.bR.data;i=h.length;if(g>=i)break;h[g]=BX(e);g=g+1|0;}d.o=i;QZ(c,d);return c;}
function B7(a,b){return a.A.data[b];}
function Ca(a){return a.A.data.length;}
function Qk(a){return Fo(a,Ca(a));}
function EL(a,b){return a.A.data[b].J;}
function Jo(a,b){var c,d,e,f,g,h,i;c=a.A.data;d=c[b];e=c[b+1|0];f=Dn(Sg(d.n,e.n));g=a.A;h=g.data.length;if(b<h&&b>=0){i=R(Cl,h-1|0);c=i.data;Oy(g,b,i);c[b]=f;a.A=i;return;}d=new Bh;U(d);J(d);}
function Nd(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.A.data;if(!(c<d[b].J?0:1)){d=(B7(a,b)).n.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.p)){f=L(h.p,g);break a;}g=g-I(h.p)|0;f=f+1|0;}f=0;}El();h=new BA;d=BN(1);d.data[0]=f;Gq(h,d);FN(a,b,c,1,h);h=a.A.data[b];i=h.n;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].p);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].p)==1)h.n=Oy(i,j,R(BZ,e-1|0));else{k=d[j];if(c<=0)l=Dd(Dc(k.p,1),k.cj,k.bJ);else if(c>=(I(k.p)-1|0)){l=new BZ;m=k.p;RP(l,B5(m,0,I(m)-
1|0),k.cj,k.bJ);}else{i=BN(I(k.p)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.p,b);b=b+1|0;}b=n.length;while(c<b){m=k.p;e=c+1|0;n[c]=L(m,e);c=e;}l=Dd(E_(i),k.cj,k.bJ);}d[j]=l;}h.J=h.J-1|0;DQ(h);}else if(b!=(d.length-1|0))Jo(a,b);}
function Ul(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){g=a.A.data[b];h=e[0];b=0;a:{while(true){i=b+1|0;d=g.n.data;if(i>=d.length)break a;f=I(d[b].p);if(c<=f)break;c=c-f|0;b=i;}}H_(g,b,c,h);g.J=g.J+I(h)|0;DQ(g);return;}f=f-1|0;j=Hn(a.A.data[b],c);d=a.A;k=CX(d,d.data.length+f|0);d=k.data;l=d.length-1|0;while(true){c=l-f|0;if(c<=b)break;d[l]=d[c];l=l+(-1)|0;}j=j.data;g=j[0];h=e[0];m=g.n.data;i=m.length;c=!i?0:I(m[i-1|0].p);H_(g,g.n.data.length-1|0,c,h);d[b]=j[0];i=1;while(i<f){if(FI(e[i]))h
=Dn(R(BZ,0));else{h=new Cl;m=R(BZ,1);m.data[0]=Dd(e[i],0,0);GY(h,m);}d[b+i|0]=h;i=i+1|0;}H_(j[1],0,0,e[f]);d[b+f|0]=j[1];a.A=k;}
function Sp(a,b){var c,d,e,f,g,h,i;c=Ep(b);d=G7(b);e=c.X;if(e==d.X)return B5(Ej(a.A.data[e]),c.by,d.by);f=new M;O(f);b=a.A.data[c.X];e=c.by;BB(BR(f,Dc(Ej(b),e)),10);g=a.A;h=c.X+1|0;e=d.X;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;UM(BR(f,Ej(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.A.data[d.X];i=d.by;BR(f,B5(Ej(b),0,i));return N(f);}}b=new S3;U(b);J(b);}
function Qm(a,b,c){var d;Rp(a,b);d=Ep(b);FN(a,d.X,d.by,1,c);}
function Rp(a,b){var c,d,e,f,g,h,i;a:{c=Ep(b);d=G7(b);e=c.X;if(e==d.X)HL(a.A.data[e],c.by,d.by);else{b=a.A.data[e];HL(b,c.by,b.J);HL(a.A.data[d.X],0,d.by);e=c.X+1|0;f=d.X;g=a.A;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(Cl,(h-f|0)+e|0);WF(g,e,f,i);a.A=i;Jo(a,c.X);break a;}b=new Bh;U(b);J(b);}b=new Bh;U(b);J(b);}}}
function Ol(a,b,c){return L1(a,b,c)===null?0:1;}
function L1(a,b,c){return DG(a.dq,JI(a,b,c));}
function Ma(a,b,c){return DG(a.de,JI(a,b,c));}
function JI(a,b,c){var d;d=B7(a,b);return JN(b,d.cu!==null?NE(d,c):(-1));}
function TY(a,b){b.b3=Si(B7(a,b.bY),b.b3);}
function LL(a,b){var c,d,e;c=0;d=0;while(true){e=a.A.data.length;if(c>=e)break;if((d+(B7(a,c)).J|0)>=b)return Cx(c,b-d|0);d=d+((B7(a,c)).J+1|0)|0;c=c+1|0;}return Cx(e,0);}
function Fo(a,b){var c,d,e;c=0;d=a.A.data.length;e=0;while(e<b){c=c+EL(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function N3(a,b){var c,d,e,f,g,h;c=B7(a,b.bY);d=b.b3;e=0;a:{while(true){f=e+1|0;g=c.n.data;if(f>=g.length)break a;h=I(g[e].p);if(d<h)break;d=d-h|0;e=f;}}return c.n.data[e];}
function FA(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=BN(Qk(a));c=b.data;d=a.A.data.length;e=0;f=0;a:{while(e<d){g=a.A.data[e].n.data;h=g.length;i=0;while(i<h){j=g[i].p;k=0;l=I(j);if(k>l)break a;if(l>I(j))break a;if(f<0)break a;if((f+(l-k|0)|0)>c.length)break a;m=f;while(k<l){n=m+1|0;o=k+1|0;c[m]=L(j,k);m=n;k=o;}f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}j=new Bu;U(j);J(j);}
function FN(a,b,c,d,e){var f,g,h;a.cI=a.cI+1|0;f=a.ge;g=new SS;g.c7=b;g.dQ=c;g.ko=d;g.gS=e;Cc(f,g);h=Fo(a,b)+c|0;if(!d)Ny(a.cC,h,I(e));else QL(a.cC,h,I(e));}
function ZI(a){var b,c,d,e,f;a.cI=a.cI+1|0;b=a.ge;c=b.o;if(!c)return null;b=F7(b,c-1|0);d=Ti(b.gS,B(220),(-1));if(b.ko){e=d.data;Ul(a,b.c7,b.dQ,d);Ny(a.cC,Fo(a,b.c7)+b.dQ|0,I(b.gS));c=e.length;if(c==1)return Cx(b.c7,b.dQ+I(e[0])|0);return Cx((b.c7+c|0)-1|0,I(e[c-1|0]));}d=d.data;f=AHc();B$(f.b5,b.c7,b.dQ);c=d.length;if(c==1)B$(f.bU,b.c7,b.dQ+I(d[0])|0);else B$(f.bU,(b.c7+c|0)-1|0,I(d[c-1|0]));Rp(a,f);QL(a.cC,Fo(a,b.c7)+b.dQ|0,I(b.gS));return Cx(b.c7,b.dQ);}
function Nn(a){a.eO=a.cI;}
function Zn(){C.call(this);this.e5=null;}
function He(a){var b=new Zn();AEc(b,a);return b;}
function AEc(a,b){a.e5=b;}
var Et=F();
function Ky(){Et.call(this);this.r0=null;}
function KW(){Et.call(this);this.r_=null;}
var NY=F(Et);
var Sh=F(0);
var ON=F(0);
function IQ(){var a=this;C.call(a);a.X=0;a.by=0;}
function B$(a,b,c){a.X=b;a.by=c;}
function Ua(a,b){var c;c=BD(a.X,b.X);if(c)return c;return BD(a.by,b.by);}
var I_=F(Fr);
var AOE=null;function ADh(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function Z0(){var b;b=new I_;Uq(b);AOE=b;}
function Fd(){var a=this;C.call(a);a.lS=null;a.pG=null;a.qy=null;a.ej=null;a.ha=null;}
function APG(a,b,c,d,e){var f=new Fd();GI(f,a,b,c,d,e);return f;}
function GI(a,b,c,d,e,f){a.lS=b;a.pG=c;a.qy=d;a.ej=e;a.ha=f;}
function K7(){var a=this;C.call(a);a.qJ=null;a.id=null;a.p2=null;}
function Wm(a,b,c){var d=new K7();Zj(d,a,b,c);return d;}
function Zj(a,b,c,d){a.qJ=b;a.id=c;a.p2=d;}
var Zt=F();
function JS(b,c){var d,e,f;if(c<=0)return B(29);d=BN(c);e=d.data;e[0]=Yo(QD(b,52));f=1;while(f<c){e[f]=Yo(QD(b,62));f=f+1|0;}return E_(d);}
function Yo(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
function T3(){C.call(this);this.jl=null;}
var APx=null;function X7(){var a=new T3();V1(a);return a;}
function V1(a){a.jl=Cy();}
function Hh(a,b,c,d,e,f){var g;g=new IS;g.cq=Py();g.cQ=Py();g.dc=Py();g.ff=b;g.jM=c;g.j5=d;g.d5=e;g.i6=f;Bx(g.cq.bh,e.lS);Bx(g.cq.P,e.ej);Bx(g.cQ.bh,e.pG);Bx(g.cQ.P,e.ej);Bx(g.dc.bh,e.qy);Bx(g.dc.P,e.ej);Cc(a.jl,g);}
function IK(a){return GE(a.jl,APx);}
function Wx(){APx=R(IS,0);}
function ZN(){var a=this;C.call(a);a.yS=null;a.wZ=null;a.xR=0;a.xt=0;}
function WZ(){var a=this;C.call(a);a.rg=null;a.yE=null;}
var Zc=F(0);
function YY(b){var c;a:{switch(b){case 0:break;case 1:c=B(123);break a;case 2:c=B(239);break a;case 3:c=B(238);break a;default:c=null;break a;}c=B(157);}return c;}
var CD=F();
var XM=F(CD);
var Yn=F(CD);
var VL=F(CD);
var V5=F(CD);
var YN=F(CD);
var RZ=F();
function AA8(a){}
var R0=F();
function AKg(a,b){}
var Nb=F(0);
var RY=F();
function W$(){var a=this;Ea.call(a);a.fy=0;a.cr=null;a.fr=0;a.qW=0.0;a.iR=0;}
function GX(){var a=new W$();ACM(a);return a;}
function ACM(a){var b;b=Zu(16);a.fy=0;a.cr=R(G1,b);a.qW=0.75;Ru(a);}
function Zu(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Ru(a){a.iR=a.cr.data.length*a.qW|0;}
function LW(a,b){return P0(a,b)===null?0:1;}
function DG(a,b){var c;c=P0(a,b);if(c===null)return null;return c.eZ;}
function P0(a,b){var c,d;if(b===null)c=Pc(a);else{d=Vv(b);c=NX(a,b,d&(a.cr.data.length-1|0),d);}return c;}
function NX(a,b,c,d){var e,f;e=a.cr.data[c];while(e!==null){if(e.jj==d){f=e.gG;if(b!==f&&!US(b,f)?0:1)break;}e=e.es;}return e;}
function Pc(a){var b;b=a.cr.data[0];while(b!==null&&b.gG!==null){b=b.es;}return b;}
function Qa(a,b,c){var d,e,f;if(b===null){d=Pc(a);if(d===null){a.fr=a.fr+1|0;d=Rh(a,null,0,0);e=a.fy+1|0;a.fy=e;if(e>a.iR)RD(a);}}else{e=Vv(b);f=e&(a.cr.data.length-1|0);d=NX(a,b,f,e);if(d===null){a.fr=a.fr+1|0;d=Rh(a,b,f,e);e=a.fy+1|0;a.fy=e;if(e>a.iR)RD(a);}}b=d.eZ;d.eZ=c;return b;}
function Rh(a,b,c,d){var e,f,g;e=new G1;f=null;e.gG=b;e.eZ=f;e.jj=d;g=a.cr.data;e.es=g[c];g[c]=e;return e;}
function RD(a){var b,c,d,e,f,g,h,i;b=a.cr.data.length;b=Zu(!b?1:b<<1);c=R(G1,b);d=c.data;e=0;f=b-1|0;while(true){g=a.cr.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.jj&f;i=h.es;h.es=d[b];d[b]=h;h=i;}e=e+1|0;}a.cr=c;Ru(a);}
function Vv(b){var c,d,e,f,g,h;c=R(C,2).data;c[0]=Fe(b.bY);c[1]=Fe(b.b3);d=(-1515898884);e=0;while(e<c.length){b=c[e];if(b===null)f=0;else{g=b.eD;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;d=IF(h,4)^((h>>>7|0)|h<<25)^IF(d,13);e=e+1|0;}return d;}
function Cl(){var a=this;C.call(a);a.n=null;a.J=0;a.ez=null;a.cu=null;a.fK=null;a.eT=0;a.gC=0;}
var APH=0;var API=0;var APJ=0;function Dn(a){var b=new Cl();GY(b,a);return b;}
function GY(a,b){var c,d,e,f;c=b.data;a.n=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].p)|0;f=f+1|0;}a.J=d;}
function Si(a,b){var c,d,e,f;c=0;d=0;e=a.n.data.length;a:{while(true){if(d>=e)break a;f=c+I(a.n.data[d].p)|0;if(f>b)break;d=d+1|0;c=f;}}return c;}
function HL(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.J){a.n=R(BZ,0);DQ(a);a.J=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.n.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].p);i=I(a.n.data[f].p);j=BD(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.n.data[f];if(!b&&c==I(k.p)?1:0){g=a.n;a.n=Oy(g,e,R(BZ,g.data.length-1|0));a.J=a.J-d|0;DQ(a);return;}a.n.data[e]=Dd(Fs(B5(k.p,0,b),Dc(k.p,c)),k.cj,k.bJ);}else{g=a.n.data;l=g[e];m=g[f];if(b){if(b!=
I(l.p))a.n.data[e]=Dd(B5(l.p,0,b),l.cj,l.bJ);e=e+1|0;}if(c==I(m.p))f=f+1|0;else if(c)a.n.data[f]=Dd(Dc(m.p,c),m.cj,m.bJ);g=a.n;a.n=WF(g,e,f,R(BZ,(g.data.length-f|0)+e|0));}a.J=a.J-d|0;DQ(a);}
function Hn(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(Cl,[Dn(R(BZ,0)),a]);if(b>=a.J)return H(Cl,[a,Dn(R(BZ,0))]);c=a.n;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].p);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(Cl,[Dn(Jl(c,0,R(BZ,d))),Dn(Jl(c,d,R(BZ,f-d|0)))]);h=e[d];e=Jl(c,0,R(BZ,d+1|0));i=e.data;j=Jl(c,d,R(BZ,f-d|0));c=j.data;i[d]=Dd(B5(h.p,0,b),h.cj,h.bJ);c[0]=Dd(Dc(h.p,b),h.cj,h.bJ);return H(Cl,[Dn(e),Dn(j)]);}
function H_(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=a.n.data;if(!e.length){f=R(BZ,1);f.data[0]=Xk(d);a.n=f;}else{g=e[b];if(c<=0)h=Dd(Fs(d,g.p),g.cj,g.bJ);else if(c>=I(g.p))h=Dd(Fs(g.p,d),g.cj,g.bJ);else{i=I(d);j=i+c|0;k=I(g.p)-c|0;f=BN(I(g.p)+i|0);l=f.data;m=0;while(m<c){l[m]=L(g.p,m);m=m+1|0;}m=0;while(m<i){l[m+c|0]=L(d,m);m=m+1|0;}m=0;while(m<k){l[m+j|0]=L(g.p,m+c|0);m=m+1|0;}h=Dd(E_(f),g.cj,g.bJ);}e[b]=h;}a.J=a.J+I(d)|0;DQ(a);}
function Jz(a,b,c){var d,e,f,g,h,i,j;d=a.n.data.length;e=a.ez;if(!(e!==null&&e.data.length>=d)){a.ez=AAh(d);a.cu=BS(d);a.eT=1;}if(!a.eT)API=API+1|0;else{f=0;g=0.0;APH=APH+1|0;h=0;while(h<d){i=c.data;j=a.n.data[h];f=f+I(j.p)|0;Dw(b,i[j.bJ]);g=g+Dj(b,j.p);a.ez.data[h]=g;a.cu.data[h]=g+0.5|0;h=h+1|0;}a.J=f;a.eT=0;}}
function DQ(a){a.eT=1;a.gC=1;a.fK=null;}
function PP(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!(a.cu!==null&&!a.eT))Jz(a,c,d);e=a.cu;f=a.n.data.length;if(!f)return 0;if(b<=0)return 0;g=e.data;if(b>=g[f-1|0])return a.J;f=F8(a,b);if(f==a.n.data.length)return a.J;h=S$(a,c,d,f);i=0;j=0;while(j<f){i=i+I(a.n.data[j].p)|0;j=j+1|0;}k=!f?0:g[f-1|0];l=g[f];j=0;a:{while(true){d=h.data;if(j>=d.length){f=l;break a;}f=d[j];if(b<f)break;i=i+1|0;j=j+1|0;l=f;k=f;}}if(APJ){c=new M;O(c);T(G(T(G(T(G(c,B(296)),k),B(297)),b),B(298)),f);$rt_globals.console.info($rt_ustr(N(c)));m
=i;$rt_globals.console.info(" pos = "+m);}if((b-k|0)>(f-b|0))i=i+1|0;return i;}
function S$(a,b,c,d){var e,f,g,h,i,j,k;if(a.fK===null)a.fK=R($rt_arraycls($rt_intcls()),a.n.data.length);e=a.fK.data[d];if(e===null){e=c.data;f=a.n.data[d];Dw(b,e[f.bJ]);f=f.p;e=BS(I(f)-1|0);c=FJ(f);g=!d?0.0:a.ez.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BA;k=i+1|0;Uu(f,c,0,k);h[i]=g+Dj(b,f)+0.5|0;i=k;}a.fK.data[d]=e;}return e;}
function F8(a,b){var c;c=XZ(a.cu,0,a.n.data.length,b);if(c<0)c=( -c|0)-1|0;return c;}
function NE(a,b){var c,d,e;c=F8(a,b);if(!c)return 0;b=c+(-1)|0;d=0;e=0;while(e<=b){d=d+I(a.n.data[e].p)|0;e=e+1|0;}return d;}
function E2(a,b,c,d){var e,f,g,h,i;if(!a.n.data.length)return 0;if(!b)return 0;if(!(!a.eT&&a.cu!==null))Jz(a,c,d);if(b>=a.J)return a.cu.data[a.n.data.length-1|0];e=0;f=0;a:{while(true){g=a.n.data;if(f>=g.length)break a;h=e+I(g[f].p)|0;i=BD(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.cu.data[f];}return (S$(a,c,d,f)).data[(b-e|0)-1|0];}
function D7(a){var b,c,d;a:{b=a.n.data.length;if(b){c=a.cu.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function RM(a,b){var c,d,e;c=F8(a,b);if(a.cu.data[c]==b)c=c+1|0;c=c+1|0;if(c>=a.n.data.length&&b==D7(a))return 2147483647;d=0;e=0;while(e<c){d=d+I(a.n.data[e].p)|0;e=e+1|0;}return d;}
function Ej(a){var b,c,d,e;b=new M;Fa(b,a.J);c=a.n.data;d=c.length;e=0;while(e<d){BR(b,c[e].p);e=e+1|0;}return N(b);}
function K_(b){var c,d,e,f;c=R(Cl,1);d=c.data;e=new Cl;f=R(BZ,1);f.data[0]=Xk(b);GY(e,f);d[0]=e;return c;}
function UR(){APJ=0;}
function B8(){Cd.call(this);this.jg=null;}
var APK=null;var APL=null;var APM=null;var APN=null;var APO=null;var APP=null;var APQ=null;var APR=null;var APS=null;var APT=null;var APU=null;var APV=null;var APW=null;var APX=null;var APY=null;var APC=null;function VI(){VI=Bk(B8);AKo();}
function C6(a,b,c){var d=new B8();Qe(d,a,b,c);return d;}
function AKq(a,b,c,d){var e=new B8();XL(e,a,b,c,d);return e;}
function Qe(a,b,c,d){VI();Dm(a,b,c);a.jg=Qn(d,null);}
function XL(a,b,c,d,e){VI();Dm(a,b,c);a.jg=Qn(d,e);}
function AKo(){var b;b=new B8;EA();Qe(b,B(299),0,AO7);APK=b;APL=C6(B(300),1,Cq(204,120,50));APM=C6(B(301),2,Bl(B(302)));APN=C6(B(303),3,Bl(B(304)));APO=C6(B(305),4,Bl(B(306)));APP=C6(B(307),5,Cq(188,63,60));APQ=C6(B(308),6,Bl(B(309)));APR=C6(B(310),7,Bl(B(311)));APS=C6(B(312),8,Bl(B(313)));APT=AKq(B(314),9,AO7,Cq(52,65,52));APU=AKq(B(315),10,Bl(B(316)),Bl(B(317)));APV=C6(B(318),11,Bl(B(319)));APW=C6(B(320),12,Bl(B(321)));APX=C6(B(322),13,Bl(B(323)));b=C6(B(324),14,Bl(B(325)));APY=b;APC=H(B8,[APK,APL,APM,APN,
APO,APP,APQ,APR,APS,APT,APU,APV,APW,APX,b]);}
function H3(){var a=this;C.call(a);a.ot=null;a.ou=null;}
function Qn(a,b){var c=new H3();ABr(c,a,b);return c;}
function ABr(a,b,c){a.ot=b;a.ou=c;}
var WA=F();
function PK(){C.call(this);this.ks=null;}
function AJ4(a){var b;b=a.ks;Bq(Bv(),b);}
var YE=F(0);
function Sg(b,c){var d,e,f,g;d=c.data;e=b.data.length;f=d.length;g=CX(b,e+f|0);DT(c,0,g,e,f);return g;}
function Jl(b,c,d){DT(b,c,d,0,d.data.length);return d;}
function Oy(b,c,d){var e;if(c>0)DT(b,0,d,0,c);e=d.data.length;if(c<e)DT(b,c+1|0,d,c,e-c|0);return d;}
function WF(b,c,d,e){var f;if(c>0)DT(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)DT(b,d,e,c,f-d|0);}return e;}
function Ye(b,c){var d,e;d=b.data.length;e=CX(b,d+1|0);e.data[d]=c;return e;}
function HG(b){var c;c=new Sl;c.nG=b;return c;}
function BZ(){var a=this;C.call(a);a.p=null;a.cj=0;a.bJ=0;}
function Xk(a){var b=new BZ();AJF(b,a);return b;}
function Dd(a,b,c){var d=new BZ();RP(d,a,b,c);return d;}
function AJF(a,b){RP(a,b,0,0);}
function RP(a,b,c,d){a.p=b;a.cj=c;a.bJ=d;}
function Gn(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Hw(){var a=this;C.call(a);a.cl=null;a.dh=0;}
var APZ=null;var AP0=null;function AMO(a){var b=new Hw();QZ(b,a);return b;}
function ALT(a,b){var c=new Hw();Up(c,a,b);return c;}
function RW(b,c){var d;d=BD(b.bs,c.bs);if(!d)d=BD(c.bu,b.bu);return d;}
function QZ(a,b){Up(a,null,b);}
function Up(a,b,c){var d,e;a.dh=0;if(DO(c))return;Me(c,APZ);if(b!==null)a.cl=KZ(b);c=BV(c);while(B9(c)){d=BX(c);e=a.cl;if(e!==null){OB(a,e,KZ(d));continue;}a.cl=KZ(d);}}
function Nf(a,b){var c;if(b.d_)return b;b=BV(b.bk);while(true){if(!B9(b))return null;c=Nf(a,BX(b));if(c!==null)break;}return c;}
function I4(a,b,c){var d,e,f;d=b.bE;if(d.bs==c.bs&&d.bu==c.bu?1:0){e=BV(b.bk);while(B9(e)){f=I4(a,BX(e),c);if(f!==null)return f;}return b;}b=BV(b.bk);while(true){if(!B9(b))return null;d=BX(b);if(N2(d,c.bs,c.bu)){e=I4(a,d,c);if(e!==null)break;}}return e;}
function SR(a,b,c){Cc(c,b.bE);b=BV(b.bk);while(B9(b)){SR(a,BX(b),c);}}
function Ny(a,b,c){a.dh=0;HZ(a,a.cl,b,c);}
function HZ(a,b,c,d){var e;if(CP(b)<c)return;a:{if(CH(b)>c){I3(b,d);Fc(b,d);b=BV(b.bk);while(B9(b)){HZ(a,BX(b),c,d);}}else{if(!IJ(b,c)){if(a.dh)break a;if(CP(b)!=c)break a;}Fc(b,d);if(CH(b)==c&&a.dh)I3(b,d);e=BV(b.bk);while(B9(e)){HZ(a,BX(e),c,d);}if(!a.dh){b.d_=1;a.dh=1;}}}}
function QL(a,b,c){a.dh=0;KC(a,a.cl,b,c);}
function KC(a,b,c,d){var e,f,g,h;if(CP(b)<c)return;e=CH(b);f=c+d|0;if(e>f){e= -d|0;I3(b,e);Fc(b,e);g=BV(b.bk);while(B9(g)){KC(a,BX(g),c,d);}b.bk=LQ(a,b.bk);}else{g=b.bE;if(c<=g.bs&&g.bu<=f?1:0){if(b!==a.cl){H5(b,(-1));IG(b,(-1));}else{H5(b,0);IG(b,0);}Gu(b.bk);}else{e=IJ(b,c);f=IJ(b,f);if(e&&f)Fc(b, -d|0);else if(e)IG(b,c);else{if(!f)return;H5(b,c);Fc(b, -d|0);}h=BV(b.bk);while(B9(h)){KC(a,BX(h),c,d);}b.bk=LQ(a,b.bk);if(!a.dh){b.d_=1;a.dh=1;}}}}
function LQ(a,b){var c,d,e,f,g,h;c=Cy();d=null;Me(b,AP0);b=BV(b);while(B9(b)){e=BX(b);if(CH(e)==CP(e))continue;if(!e.d_){if(d!==null){Cc(c,d);d=null;}Cc(c,e);}else if(d===null)d=e;else{f=Z(CH(d),CH(e));g=Bg(CP(d),CP(e));h=KZ(L$(f,g,d.bE.et));h.c5=e.c5;h.d_=1;d=h;}}if(d!==null)Cc(c,d);return c;}
function OB(a,b,c){var d,e;a:{if(MH(b,c)){d=BV(b.bk);while(true){if(!B9(d)){Cc(b.bk,c);c.c5=b;break a;}e=BX(d);if(MH(e,c))break;}OB(a,e,c);return;}}}
function Pd(a,b,c,d){var e,f,g,h,i,j;if((CP(c)-CH(c)|0)<43)e=B5(d,CH(c),CP(c));else{e=B5(d,CH(c),CH(c)+20|0);f=B5(d,CP(c)-20|0,CP(c));g=new M;O(g);G(G(G(g,e),B(273)),f);e=N(g);}e=RI(e,B(220),B(326));f=Bv();g=Cj(c);h=new M;O(h);i=T(h,b);BB(i,32);g=G(i,g);BB(g,9);G(g,e);Bq(f,N(h));c=BV(c.bk);j=b+1|0;while(B9(c)){Pd(a,j,BX(c),d);}}
function X3(){APZ=new TO;AP0=new TQ;}
function IS(){var a=this;C.call(a);a.cq=null;a.cQ=null;a.dc=null;a.i6=null;a.d5=null;a.ff=null;a.jM=null;a.j5=null;}
function GQ(a,b){Bx(a.cq.P,!b?a.d5.ej:a.d5.ha);Bx(a.cQ.P,!b?a.d5.ej:a.d5.ha);Bx(a.dc.P,!b?a.d5.ej:a.d5.ha);}
function Zx(){var a=this;C.call(a);a.bs=0;a.bu=0;a.et=0;}
function L$(a,b,c){var d=new Zx();ACT(d,a,b,c);return d;}
function ACT(a,b,c,d){a.bs=b;a.bu=c;a.et=d;}
function AI4(a,b){var c;if(a===b)return 1;if(b!==null&&CB(a)===CB(b)){c=b;return a.bs==c.bs&&a.bu==c.bu&&a.et==c.et?1:0;}return 0;}
function ABI(a,b){var c;b=b;c=BD(a.bs,b.bs);if(!c)c=BD(b.bu,a.bu);return c;}
var TO=F();
function AD3(a,b,c){return RW(b,c);}
var TQ=F();
function AFm(a,b,c){b=b;c=c;return RW(b.bE,c.bE);}
var Eu=F();
var AP1=null;var AP2=null;var AP3=null;var AP4=null;var AP5=null;var AP6=null;function XC(){AP1=new R5;AP2=new R3;AP3=new R4;AP4=new R1;AP5=new R2;AP6=new Us;}
var Uv=F(Bh);
var Gb=F(Fk);
function T8(){Gb.call(this);this.pt=null;}
function ADd(a){return 1;}
function AKy(a,b){var c;if(!b)return a.pt;c=new Bu;U(c);J(c);}
function UP(){var a=this;C.call(a);a.bE=null;a.c5=null;a.bk=null;a.d_=0;}
function KZ(a){var b=new UP();AHB(b,a);return b;}
function AHB(a,b){a.d_=0;a.bE=b;a.c5=null;a.bk=Cy();}
function CH(a){return a.bE.bs;}
function CP(a){return a.bE.bu;}
function H5(a,b){a.bE.bs=b;}
function IG(a,b){a.bE.bu=b;}
function I3(a,b){var c;c=a.bE;c.bs=c.bs+b|0;}
function Fc(a,b){var c;c=a.bE;c.bu=c.bu+b|0;}
function IJ(a,b){return CH(a)<=b&&b<CP(a)?1:0;}
function N2(a,b,c){var d;d=a.bE;return d.bs<=b&&c<=d.bu?1:0;}
function MH(a,b){b=b.bE;return N2(a,b.bs,b.bu);}
function AD$(a){var b,c,d,e,f;b=a.bE;c=b.bs;d=b.bu;e=b.et;b=new M;O(b);BB(b,40);BB(T(G(T(G(T(b,c),B(85)),d),B(85)),e),41);b=N(b);c=a.d_;f=new M;O(f);Fj(G(G(f,b),B(85)),c);return N(f);}
var MT=F(0);
var Ef=F(DA);
var IH=F(Ef);
var R5=F(IH);
var JM=F(Ea);
var R3=F(JM);
var R4=F(Gb);
var DZ=F(0);
var R1=F();
var Nk=F(0);
var R2=F();
var Us=F();
function LI(){var a=this;C.call(a);a.j6=0;a.p$=0;a.mN=0;a.nY=0;a.lj=null;}
function B9(a){return a.j6>=a.mN?0:1;}
function BX(a){var b,c,d;b=a.p$;c=a.lj;if(b<c.cc){c=new Ho;U(c);J(c);}d=a.j6;a.nY=d;a.j6=d+1|0;return c.n_(d);}
var Wl=F();
function Sn(){DA.call(this);this.p6=null;}
function AIG(a){var b,c,d,e,f;b=a.p6;if(b.h5===null){c=new NW;d=null;e=null;c.sU=(-1);c.c_=b;c.hA=d;c.j_=1;c.jS=0;c.hu=e;c.hQ=1;c.je=0;c.n7=0;b.h5=c;}e=b.h5;if(e.n7){f=!e.je?Sz(e.c_,1):!e.hQ?Mg(e.c_,e.hu,1):Uo(e.c_,e.hu,1);c=ADY(e.c_,f,e.hA,e.j_,e.jS,1);}else{f=!e.jS?Sz(e.c_,0):!e.j_?Mg(e.c_,e.hA,0):Uo(e.c_,e.hA,0);c=ADY(e.c_,f,e.hu,e.je,e.hQ,0);}b=new M3;b.r3=a;b.iy=c;return b;}
var Ww=F();
function I5(){var a=this;C.call(a);a.gG=null;a.eZ=null;}
function G1(){var a=this;I5.call(a);a.jj=0;a.es=null;}
function RT(){C.call(this);this.rv=null;}
function ADD(a){Bq(Bv(),B(327));}
function Ud(){C.call(this);this.l0=null;}
function ACD(a,b){GC(a.l0,b);}
var Pk=F(0);
function Sl(){C.call(this);this.nG=null;}
function Ku(a){return a.nG;}
function Ot(){var a=this;C.call(a);a.o5=null;a.o6=null;a.o4=null;}
function AJ3(a){var b,c,d,e,f;b=a.o5;c=a.o6;d=a.o4;e=Bv();f=new M;O(f);b=G(f,b);BB(b,9);b=G(b,c);BB(b,9);G(b,d);Bq(e,N(f));}
function M3(){var a=this;C.call(a);a.iy=null;a.r3=null;}
function ABR(a){return a.iy.dg<=0?0:1;}
function AGG(a){var b,c,d,e,f;b=a.iy;if(b.mo!=b.j$.fs){b=new Ho;U(b);J(b);}c=b.dg;if(!c){b=new Kz;U(b);J(b);}a:{d=b.hC.data;e=c-1|0;b.dg=e;f=d[e];b.lR=f;f=HV(f,b.hp);if(f!==null)while(true){if(f===null)break a;d=b.hC.data;c=b.dg;b.dg=c+1|0;d[c]=f;f=G4(f,b.hp);}}Ov(b);return b.lR.d9;}
function Lw(){var a=this;C.call(a);a.bF=null;a.hb=null;a.em=null;a.c4=0;a.dE=0;a.fh=null;a.eR=null;a.eV=0;}
function PT(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.c4;i=Bc(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bg(i,e))a:{while(true){if(d<=e){j=d;break a;}D8(c);j=d+(-1)|0;b=C0(d);d=Bc(j,a.dE)%a.em.b|0;Fm(a,c,b,a.eV,g);GP(a.bF,c,0,d);if(!(j%a.c4|0))break;d=j;}}else{D8(b);k=a.c4-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Fm(a,b,C0(j),Bc(a.dE,k)+a.eV|0,g);k=k+(-1)|0;j=h;}Df(a.bF,b);j=Bg(i,e);}return j;}k=a.c4;h=Bc(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Z(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}D8(c);b=C0((d+f|0)+1|0);j=d+
1|0;d=Bc(d,a.dE)%a.em.b|0;Fm(a,c,b,a.eV,g);GP(a.bF,c,0,d);if(!(j%a.c4|0))break;d=j;}}else{D8(b);d=0;while(d<a.c4){h=h+1|0;Fm(a,b,C0((h>e?h-f|0:h)+f|0),Bc(a.dE,d)+a.eV|0,g);d=d+1|0;}Df(a.bF,b);j=Z(i,e);}return j;}
function HJ(a,b,c,d,e,f){IY(b,a.hb.a+d.a|0,c+d.b|0,a.fh,a.eR,a.bF,e,f,0.0);}
function Fm(a,b,c,d,e){Cp(b,c,a.em.a-20.0*e,d);}
function Tl(){var a=this;C.call(a);a.sm=null;a.sn=0;a.sl=null;}
function LF(){C.call(this);this.pC=null;}
var E7=F(Hc);
var Tu=F(Ei);
var Ho=F(Bh);
var Kp=F(Du);
var AP7=0.0;var AP8=null;function X4(){AP7=$rt_globals.NaN;AP8=E($rt_floatcls());}
var EU=F();
var AOa=null;var AOc=null;var AOd=null;var AOb=null;var AN_=null;function W5(){AOa=EB([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AOc=ABO([W(1),W(10),W(100),W(1000),W(10000),W(100000),W(1000000),W(10000000),W(100000000),W(1000000000),B1(1410065408, 2),B1(1215752192, 23),B1(3567587328, 232),B1(1316134912, 2328),B1(276447232, 23283),B1(2764472320, 232830),B1(1874919424, 2328306),B1(1569325056, 23283064),B1(2808348672, 232830643)]);AOd=ABO([W(1),W(10),W(100),W(10000),W(100000000),B1(1874919424, 2328306)]);AOb
=new QU;AN_=new RX;}
var Iv=F();
var AP9=null;var AP$=null;function XD(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.lg=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.iC=0;c.ii=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(EG(CG(W(e),W(8388608)),D0)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=XK(AP$,f);if(h<0)h=( -h|0)-2|0;i=AP$.data;j=9+(f-i[h]|0)|0;k=W(e);l=AP9.data;m=Ee(DF(BI(k,W(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=Ee(DF(BI(k,W(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<( -g|0);o
=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BD(q,r);e=e>0?Bc(m/q|0,q):e<0?Bc(m/r|0,r)+r|0:Bc((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.iC=e;c.ii=h-50|0;}
function Wg(){var b,c,d,e,f,g,h,i;AP9=BS(100);AP$=BS(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AP9.data;g=d+50|0;f[g]=$rt_udiv(e,20);AP$.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Ee(Ce(W(h),FE(BI(W(b&((1<<i)-1|0)),W(10)),i)));f=AP9.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AP$.data[i]=c;d=d+1|0;}}
function RX(){var a=this;C.call(a);a.iC=0;a.ii=0;a.lg=0;}
function Kj(){var a=this;C.call(a);a.rZ=null;a.kr=0.0;a.so=0.0;a.d4=null;a.fI=null;a.jQ=null;a.ee=0;}
function Zd(a,b){var c;if(b!==null){a.fI=b;return a;}c=new BC;Bb(c,B(328));J(c);}
function XQ(a,b){var c;if(b!==null){a.jQ=b;return a;}c=new BC;Bb(c,B(328));J(c);}
function NQ(a,b,c,d){var e,f,g,$$je;e=a.ee;if(!(e==2&&!d)&&e!=3){a.ee=d?2:1;while(true){try{f=Zf(a,b,c);}catch($$e){$$je=DR($$e);if($$je instanceof Bh){g=$$je;J(ACp(g));}else{throw $$e;}}if(Gc(f))return f;if(G3(f)){if(d&&Dl(b)){g=a.fI;Gf();if(g===AOG)return DB(BU(b));if(BU(c)<=I(a.d4))return AOJ;Eh(b,b.K+BU(b)|0);if(a.fI===AOH)Iz(c,a.d4);}return f;}if(Od(f)){g=a.fI;Gf();if(g===AOG)return f;if(g===AOH){if(BU(c)<I(a.d4))return AOJ;Iz(c,a.d4);}Eh(b,b.K+IB(f)|0);}else if(Ki(f)){g=a.jQ;Gf();if(g===AOG)break;if(g
===AOH){if(BU(c)<I(a.d4))return AOJ;Iz(c,a.d4);}Eh(b,b.K+IB(f)|0);}}return f;}b=new DW;U(b);J(b);}
function Vx(a,b){var c,d,e,f;c=a.ee;if(c&&c!=3){b=new DW;U(b);J(b);}if(!BU(b))return ZE(0);if(a.ee)a.ee=0;d=ZE(Bg(8,BU(b)*a.kr|0));while(true){e=NQ(a,b,d,0);if(G3(e))break;if(Gc(e))d=Pw(a,d);if(!I$(e))continue;RU(e);}b=NQ(a,b,d,1);if(I$(b))RU(b);while(true){f=a.ee;if(f!=3&&f!=2)break;a.ee=3;if(G3(AOK)){d.cN=d.K;d.K=0;d.f0=(-1);return d;}d=Pw(a,d);}b=new DW;U(b);J(b);}
function Pw(a,b){var c,d,e;c=b.fS;d=U8(c,Bg(8,c.data.length*2|0));e=Xb(d,0,d.data.length);Eh(e,b.K);return e;}
var WN=F(CD);
function QU(){var a=this;C.call(a);a.jd=D0;a.h4=0;a.k2=0;}
var DW=F(Bh);
var XY=F(Ei);
function ACp(a){var b=new XY();AF7(b,a);return b;}
function AF7(a,b){a.hj=1;a.hE=1;a.i0=b;}
var Ob=F();
function AJ5(a,b){X5(b);}
function NW(){var a=this;Ef.call(a);a.sU=0;a.c_=null;a.hA=null;a.j_=0;a.jS=0;a.hu=null;a.hQ=0;a.je=0;a.n7=0;}
function Ts(){C.call(this);this.m_=null;}
function AFl(a,b){var c,d,e;c=a.m_;if(c.e.g.cI==c.i3){b=b.data;d=D5(b[0]);e=E4(b[1]);Xe(c.e.g,d,e);Nn(c.e.g);}}
var UU=F();
function Ie(b,c,d){var e,f;a:{e=b.a;f=c.a;if(e>=f&&e<(f+d.a|0)){e=b.b;f=c.b;if(e>=f&&e<(f+d.b|0)){e=1;break a;}}e=0;}return e;}
function Mz(b,c,d,e){var f;a:{f=b.a;if(f>=c&&f<(c+e.a|0)){c=b.b;if(c>=d&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function IV(){var a=this;Kj.call(a);a.lq=null;a.oC=null;}
function Zf(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.lq;e=0;f=0;g=a.oC;a:{b:{while(true){if((e+32|0)>f&&Dl(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=BU(b)+k|0;h=j.length;f=Z(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new Bu;c=new M;O(c);T(G(T(G(c,B(329)),l),B(91)),h);Bb(b,N(c));J(b);}if(BU(b)<m){b=new Ka;U(b);J(b);}if(m<0){b=new Bu;c=new M;O(c);G(T(G(c,B(92)),m),B(93));Bb(b,N(c));J(b);}n=b.K;h=n+b.iS|0;e=0;while(e<m){o=k+1|0;i=b.jw.data;l=h+1|0;j[k]=i[h];e=e+1
|0;k=o;h=l;}b.K=n+m|0;e=0;}if(!Dl(c)){p=!Dl(b)&&e>=f?AOK:AOJ;break a;}i=g.data;n=BU(c);o=i.length;n=Z(n,o);q=new RF;q.nL=b;q.pq=c;p=Zv(a,d,e,f,g,0,n,q);e=q.qB;if(p===null&&0==q.h6)p=AOK;k=q.h6;h=0;if(c.kd){b=new HF;U(b);J(b);}if(BU(c)<k)break;if(h>o){b=new Bu;c=new M;O(c);BB(T(G(T(G(c,B(94)),h),B(88)),o),41);Bb(b,N(c));J(b);}l=h+k|0;if(l>o){b=new Bu;c=new M;O(c);T(G(T(G(c,B(96)),l),B(91)),o);Bb(b,N(c));J(b);}if(k<0){b=new Bu;c=new M;O(c);G(T(G(c,B(92)),k),B(93));Bb(b,N(c));J(b);}o=c.K;m=0;while(m<k){l=o+1|0;n
=h+1|0;Pi(c,o,i[h]);m=m+1|0;o=l;h=n;}c.K=c.K+k|0;if(p!==null)break a;}b=new GM;U(b);J(b);}b=new Bu;c=new M;O(c);BB(T(G(T(G(c,B(94)),k),B(88)),h),41);Bb(b,N(c));J(b);}Eh(b,b.K-(f-e|0)|0);return p;}
var Qq=F(IV);
function Zv(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(IX(h,2))break a;i=AOK;break a;}c=k+1|0;n=j[k];if(!E0(a,n)){c=c+(-2)|0;i=DB(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(IX(h,3))break a;i=AOK;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!E0(a,n))break b;if(!E0(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Ko(p)){c=k+(-3)|0;i=DB(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=DB(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(IX(h,4))break a;i=AOK;break a;}if((f+2|0)>g){c=k+(-1)|0;if(BU(h.pq)<2?0:1)break a;i=AOJ;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!E0(a,n))break c;if(!E0(a,o))break c;if(!E0(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=GV(r);m=c+1|0;j[c]=Hp(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=DB(1);break a;}c=k+(-3)|0;i
=DB(1);}h.qB=c;h.h6=f;return i;}
function E0(a,b){return (b&192)!=128?0:1;}
var OV=F();
function ADN(a,b){b=b;b.bF=Dx(b.bF,null);}
var Ir=F(Du);
var AP_=0.0;var AQa=null;function VB(){AP_=$rt_globals.NaN;AQa=E($rt_doublecls());}
var JP=F();
var AQb=null;var AQc=null;function W2(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.k2=EG(CG(d,B1(0, 2147483648)),D0)?0:1;e=CG(d,B1(4294967295, 1048575));f=Ee(FE(d,52))&2047;if(EG(e,D0)&&!f){c.jd=D0;c.h4=0;return;}g=0;if(f)e=AL2(e,B1(0, 1048576));else{e=EO(e,1);while(EG(CG(e,B1(0, 1048576)),D0)){e=EO(e,1);f=f+(-1)|0;g=g+1|0;}}h=XK(AQc,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AQc.data[h]|0)|0;j=OL(e,AQb.data[h],i);if(V4(j,B1(2808348672, 232830643))){h=h+1|0;i=12+(f-AQc.data[h]|0)|0;j=OL(e,AQb.data[h],i);}k
=DF(AQb.data[h],(63-i|0)-g|0);l=FE(Ce(k,W(1)),1);m=FE(k,1);if(EG(e,B1(0, 1048576)))m=FE(m,2);n=W(10);while(Nz(n,m)){n=BI(n,W(10));}if(V4(K$(j,n),C2(m,W(2))))n=C2(n,W(10));o=W(1);while(Nz(o,l)){o=BI(o,W(10));}if(ACA(IW(o,K$(j,o)),C2(l,W(2))))o=C2(o,W(10));f=AMm(n,o);e=f>0?BI(C2(j,n),n):f<0?Ce(BI(C2(j,o),o),o):BI(C2(Ce(j,C2(o,W(2))),o),o);if(V4(e,B1(2808348672, 232830643))){h=h+1|0;e=C2(e,W(10));}else if(ACQ(e,B1(1569325056, 23283064))){h=h+(-1)|0;e=BI(e,W(10));}c.jd=e;c.h4=h-330|0;}
function OL(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CG(b,W(65535));f=CG(DF(b,16),W(65535));g=CG(DF(b,32),W(65535));h=CG(DF(b,48),W(65535));i=CG(c,W(65535));j=CG(DF(c,16),W(65535));k=CG(DF(c,32),W(65535));l=CG(DF(c,48),W(65535));m=Ce(Ce(BI(k,e),BI(j,f)),BI(i,g));n=Ce(Ce(Ce(BI(l,e),BI(k,f)),BI(j,g)),BI(i,h));o=Ce(Ce(EO(BI(l,h),32+d|0),EO(Ce(BI(l,g),BI(k,h)),16+d|0)),EO(Ce(Ce(BI(l,f),BI(k,g)),BI(j,h)),d));return Ce(d>16?Ce(o,EO(n,d-16|0)):Ce(o,DF(n,16-d|0)),DF(m,32-d|0));}
function WG(){var b,c,d,e,f,g,h,i,j,k;AQb=ANc(660);AQc=BS(660);b=B1(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AQb.data;g=d+330|0;f[g]=E1(e,W(80));AQc.data[g]=c;e=E1(e,W(10));h=LD(e,W(10));while(Nz(e,b)&&EG(CG(e,B1(0, 2147483648)),D0)){e=EO(e,1);c=c+1|0;h=EO(h,1);}e=Ce(e,C2(h,W(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(ACA(e,B1(3435973836, 214748364))){e=FE(e,1);j=j+1|0;d=d+(-1)|0;}k=BI(e,W(10));b=j<=0?k:Ce(k,FE(BI(CG(b,W((1<<j)-1|0)),W(10)),j));f=AQb.data;g=(330-i|0)-1|0;f[g]=E1(b,W(80));AQc.data[g]
=d;i=i+1|0;}}
var O$=F(Du);
var AQd=null;function E1(b,c){return Long_udiv(b, c);}
function LD(b,c){return Long_urem(b, c);}
function Jy(b,c){return Long_ucompare(b, c);}
function WE(){AQd=E($rt_longcls());}
var Fv=F(Bh);
function LN(){var a=this;C.call(a);a.kC=null;a.mT=null;a.pr=0;a.qu=0;}
function J3(a,b){return BU(a.mT)<b?0:1;}
function Uz(){var a=this;C.call(a);a.mo=0;a.j$=null;a.hC=null;a.lR=null;a.ph=null;a.ps=0;a.pc=0;a.dg=0;a.hp=0;}
function ADY(a,b,c,d,e,f){var g=new Uz();AAC(g,a,b,c,d,e,f);return g;}
function AAC(a,b,c,d,e,f,g){var h,i;a.j$=b;a.mo=b.fs;b=b.c6;h=b!==null?b.dl:0;i=c.data;a.hC=CX(c,h);a.dg=i.length;a.ph=d;a.ps=e;a.pc=f;a.hp=g;Ov(a);}
function Ov(a){var b,c;if(a.ps){b=a.dg;if(b){c=Ez(a.j$.eE,a.hC.data[b-1|0].dG,a.ph);if(a.hp)c= -c|0;if(!a.pc){if(c>=0)a.dg=0;}else if(c>0)a.dg=0;return;}}}
var UW=F();
function Xz(b,c){return Ym(null,b,c,0);}
function Ym(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=AEh(c);g=B0(f);h=B0(f);i=B0(f);j=R(Cl,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<Ca(b)){l=B0(f);c[k]=B7(b,k);l=4*l|0;f.eG=f.eG+l|0;}else c[k]=Dn(U0(f,d,0));k=k+1|0;}m=ZB(f,h);n=new ID;n.dq=GX();n.de=GX();n.ge=Cy();if(!c.length){b=new BC;U(b);J(b);}n.A=j;n.eO=0;n.cI=0;n.cC=AMO(m);b=n.dq;e=0;while(e<i){Qa(b,JN(B0(f),B0(f)),JN(B0(f),B0(f)));e=e+1|0;}b=n.dq;m=n.de;o=new Rg;Pr(o,b);while(Lt(o)){Q4(o);b=o.fN;p=b.gG;q=b.eZ;b=Cy();if(DG(m,q)===null)Qa(m,q,b);Cc(DG(m,
q),p);}if(m.eW===null){b=new M_;b.qH=m;m.eW=b;}b=m.eW.ho();while(b.hG()){m=b.gy();q=AOs;c=R(C,m.o);d=c.data;GE(m,c);Wa(c,q);e=0;g=d.length;while(e<g){q=d[e];HT(m,e);m.bR.data[e]=q;e=e+1|0;}}MR(f);return n;}
function Xe(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=AEh(c);g=B0(f);h=B0(f);i=B0(f);j=B0(f);k=LL(b,g);l=LL(b,h);m=(Hn(B7(b,k.a),k.b)).data[0].n;e=(Hn(B7(b,l.a),l.b)).data[1].n;n=0;o=i-1|0;while(n<i){p=U0(f,d,g);if(!n)p=Sg(m,p);if(n==o)p=Sg(p,e);q=k.a+n|0;r=Dn(p);b.A.data[q]=r;n=n+1|0;}r=ZB(f,j);MR(f);if(!DO(r)){s=L$(g,h,(-1));b=b.cC;f=ALT(s,r);r=I4(b,b.cl,s);if(r!==null){f=f.cl.bk;if(r===b.cl)b.cl=BK(f,0);else if(r.c5!==null){b=new L7;b.oA=r;Iu(f,b);b=r.c5.bk;h=b.o;q
=0;a:{while(true){if(q>=h){q=(-1);break a;}if(FX(r,BK(b,q)))break;q=q+1|0;}}F7(r.c5.bk,q);b=r.c5.bk;Nj(b,q);if(!DO(f)){H1(b,b.o+f.o|0);j=f.o;g=b.o;h=g-1|0;while(h>=q){c=b.bR.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.o=g+j|0;f=BV(f);g=0;while(g<j){c=b.bR.data;h=q+1|0;c[q]=BX(f);g=g+1|0;q=h;}b.cc=b.cc+1|0;}}}}}
function U0(b,c,d){var e,f,g,h,i,j,k,l;e=B0(b);f=R(BZ,e);g=f.data;h=0;while(h<e){i=B0(b);j=B0(b);k=B0(b);l=B0(b);g[h]=Dd(Ii(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function ZB(b,c){var d,e;d=Cy();e=0;while(e<c){Cc(d,L$(B0(b),B0(b),B0(b)));e=e+1|0;}return d;}
var Th=F(0);
var APd=null;function U9(){APd=null;}
function Vd(){var a=this;C.call(a);a.hn=null;a.eG=0;}
function AEh(a){var b=new Vd();AJp(b,a);return b;}
function AJp(a,b){a.hn=b;a.eG=0;}
function B0(a){var b,c;b=a.hn.data;c=a.eG;a.eG=c+1|0;return b[c];}
function MR(a){var b,c,d,e;if(a.eG!=a.hn.data.length){b=J1();c=a.hn.data.length;d=a.eG;e=new M;O(e);G(T(G(T(G(e,B(330)),c),B(331)),d),B(332));Bq(b,N(e));}}
function Y0(){var a=this;C.call(a);a.bY=0;a.b3=0;}
function JN(a,b){var c=new Y0();AFs(c,a,b);return c;}
function AFs(a,b,c){a.bY=b;a.b3=c;}
function US(a,b){var c;if(a===b)return 1;if(b!==null&&CB(a)===CB(b)){c=b;return a.bY==c.bY&&a.b3==c.b3?1:0;}return 0;}
function AHP(a,b){var c;b=b;c=BD(a.bY,b.bY);if(!c)c=BD(a.b3,b.b3);return c;}
var HF=F(Fv);
var GM=F(Bh);
var Ka=F(Bh);
var UE=F();
function O6(b,c){return b.data[c];}
function Yi(){Ef.call(this);this.xs=null;}
function M_(){DA.call(this);this.qH=null;}
function ACW(a){var b;b=new Oq;Pr(b,a.qH);return b;}
function F6(){var a=this;C.call(a);a.gQ=0;a.ov=0;a.gb=null;a.fN=null;a.mE=null;a.hf=null;}
function AQe(a){var b=new F6();Pr(b,a);return b;}
function Pr(a,b){a.hf=b;a.ov=b.fr;a.gb=null;}
function Lt(a){var b,c;if(a.gb!==null)return 1;while(true){b=a.gQ;c=a.hf.cr.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.gQ=b+1|0;}return 0;}
function VY(a){var b;if(a.ov==a.hf.fr)return;b=new Ho;U(b);J(b);}
function Q4(a){var b,c,d,e;VY(a);if(!Lt(a)){b=new Kz;U(b);J(b);}b=a.gb;if(b!==null){c=a.fN;if(c!==null)a.mE=c;a.fN=b;a.gb=b.es;}else{d=a.hf.cr.data;e=a.gQ;a.gQ=e+1|0;b=d[e];a.fN=b;a.gb=b.es;a.mE=null;}}
var Rg=F(F6);
var Oq=F(F6);
function AIl(a){Q4(a);return a.fN.eZ;}
function TJ(){C.call(this);this.pL=null;}
function AEz(a,b){var c,d,e,f;c=a.pL;d=Cj(b);e=new M;O(e);G(G(e,B(333)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new Pv;d.se=c;d.mz=b;e=new Pu;e.rb=c;f=new Rf;f.r5=e;e=new Se;e.lh=d;c=b.eb;if(c!==null)c.arrayBuffer().then(Bf(e,"f"),Bf(f,"f"));else{b=b.fz.getFile();c=new Sf;c.pm=e;c.pn=f;b.then(Bf(c,"f"),Bf(f,"f"));}}
function TM(){C.call(this);this.sJ=null;}
function AKL(a,b){var c;b=Cj(b);c=new M;O(c);G(G(c,B(334)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function KM(){C.call(this);this.r7=null;}
function AJh(a){Bq(Bv(),B(327));}
function Q3(){C.call(this);this.lM=null;}
function AA5(a){Ft(a.lM);}
function QB(){C.call(this);this.lG=null;}
function ADG(a,b){Dp(a.lG,b);}
function NP(){C.call(this);this.oo=null;}
function ABL(a,b){var c,d;c=a.oo;d=c.cS+1|0;c.cS=d;c=new M;O(c);G(G(T(c,d),B(335)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var Kz=F(Bh);
function L7(){C.call(this);this.oA=null;}
function ALd(a,b){b.c5=a.oA.c5;}
var Lf=F();
function ADT(a,b){var c;b=Cj(b);c=new M;O(c);G(G(c,B(334)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function QV(){C.call(this);this.mU=null;}
function AJv(a){var b,c;b=a.mU;c=new M;O(c);G(G(G(c,B(336)),b),B(337));$rt_globals.console.info($rt_ustr(N(c)));}
function N6(){C.call(this);this.kF=null;}
function AHh(a,b){var c,d;c=a.kF;d=c.cS+1|0;c.cS=d;c=new M;O(c);G(G(T(c,d),B(338)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Sd(){C.call(this);this.l2=null;}
function AKZ(a,b){var c,d;c=a.l2;d=c.cS+1|0;c.cS=d;c=b.f6;b=new M;O(b);G(G(T(b,d),B(339)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Y3=F();
function Rd(b,c,d,e){var f,g;f=b.next();g=new TI;g.kO=b;g.kN=c;g.kR=d;g.kP=e;f.then(Bf(g,"f"),Bf(d,"f"));}
function U_(b){$rt_globals.console.info("JsFileDialog: "+b);}
function Zw(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(DH()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new TE;f.nm=b;f.nn=d;d.addEventListener("change",Bf(f,"handleEvent"));d.click();}
function Vg(b,c){var d;if(c.isFile?1:0)b.m(UK(c.file()));else{c=c.createReader();d=new Tt;d.pB=b;c.readEntries(Bf(d,"f"));}}
var Zp=F();
function Ry(){var a=this;C.call(a);a.kJ=null;a.kK=null;}
function AHM(a,b){var c,d,e,f,g,h,i,j,k;a:{c=a.kJ;d=a.kK.bp;e=Hg(c,b);if(c.fw){f=c.e.g;g=e.bY;h=e.b3;f=JN(g,Si(B7(f,g),h));i=Je(c.ea,Dg(c.e),Hm(c.e));if(i!==null){f=c.e;h=e.bY;g=e.b3;j=new NZ;j.tI=c;j.tJ=b;i.s4(f,h,g,j,c.gK);}else{b:{i=DG(c.e.g.dq,f);if(i!==null){Hv(c,i);h=1;}else{f=DG(c.e.g.de,f);if(f!==null&&!DO(f)){if(f.o==1){Hv(c,BK(f,0));h=1;break b;}if(!D6(c.cd)){i=c.cd;k=Qy(i,f,c,c.e);f=new Lg;f.lK=c;Iy(i,b,k,f);}}h=0;}}if(h)break a;}}h=e.bY;c.z=h;c.O=e.b3;c.bS=E2(B7(c.e.g,h),c.O,c.G.bv,c.bP);I2(c);Hj(c);EX(c);if
(d)c.y.c3=1;b=c.y;if(!b.c3){B$(b.b5,c.z,c.O);c.y.c3=1;}O3(c.y,c.z,c.O);}}
function TR(){C.call(this);this.oj=null;}
function AHW(a){D1(a.oj);}
function Ra(){C.call(this);this.oc=null;}
function AAX(a,b){var c,d,e,f,g;c=a.oc;d=Fb(b);e=new M;O(e);G(G(e,B(340)),d);$rt_globals.console.info($rt_ustr(N(e)));CS(c,0,0,0);c.d0=EY();c.gr=0;c.gq=0;c.e.g=AHN();CS(c,0,0,0);d=Fb(b);f=Ff(d,46,I(d)-1|0);if(f!=(-1))d=Dc(d,f);g=!Br(d,B(341))?5120:10240;d=new PS;d.n9=c;d.n8=g;d.n5=b;c=b.eb;if(c!==null)KG(d,Id(b,c.size));else{c=b.fz.getFile();e=new Qo;e.kg=b;e.kh=d;b=new Qr;b.qm=d;c.then(Bf(e,"f"),Bf(b,"f"));}}
function Ri(){C.call(this);this.oE=null;}
function AKC(a,b){a.oE.q();}
function Og(){C.call(this);this.kW=null;}
function AAc(a,b){a.kW.m(EW(b));}
var TL=F();
function AIS(a,b){U_(b);}
function TK(){var a=this;C.call(a);a.mW=null;a.mV=null;}
function ACv(a,b){var c,d,e,f,g,h,i;c=a.mW;d=a.mV;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new NO;i.lw=c;i.lv=g;h.then(Bf(i,"f"),Bf(d,"f"));e=e+1|0;}}
var Ta=F();
function ADU(a,b){U_(b);}
function S_(){var a=this;C.call(a);a.mq=null;a.mr=null;}
function AEC(a,b){var c,d,e,f,g;c=a.mq;d=a.mr;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(BA,1);g.data[0]=EW(b.name);Rd(f,c,d,g);}
function T$(){var a=this;C.call(a);a.nT=null;a.nS=null;}
function ACC(a,b,c,d){var e,f,g,h;b=a.nT;e=a.nS;Qj(b,e);if(KP(d)){f=d.c8;g=e.bi;h=new Bn;f=f.l;V2(h,f.a-(g*3|0)|0,f.b-g|0);Qs(b,h,d.iq,e);}}
function Uj(){var a=this;C.call(a);a.o$=null;a.o_=null;}
function AFg(a){var b,c;b=a.o$;c=a.o_;Rv();Kb(b,c,AQf);}
function Ug(){var a=this;C.call(a);a.pS=null;a.pR=null;}
function AJr(a){var b,c;b=a.pS;c=a.pR;Rv();Kb(b,c,AQg);}
function Uh(){var a=this;C.call(a);a.nd=null;a.ne=null;}
function AIh(a){Kb(a.nd,a.ne,null);}
function Ui(){var a=this;C.call(a);a.n1=null;a.n0=null;}
function AFC(a){var b,c,d,e,f,g,h;b=a.n1;c=a.n0;d=Dg(b.t.e);e=Hm(b.t.e);d=LE(b.t.ea,d,e);D1(b.bV);b=b.t;e=Hg(b,c);if(d!==null){f=b.e;g=e.bY;h=e.b3;e=new Uc;e.s_=b;e.ta=c;d.BG(f,g,h,1,e,b.gK);}}
function S6(){C.call(this);this.qL=null;}
function AA0(a){var b;b=a.qL;D1(b.bV);Jt(b.t,Qg(b),0);}
function S5(){C.call(this);this.l6=null;}
function AKQ(a){var b;b=a.l6;D1(b.bV);Jt(b.t,Qg(b),1);}
function S7(){C.call(this);this.ln=null;}
function AC_(a){var b,c,d;b=a.ln;D1(b.bV);c=b.V.u;b=b.t;Ck(b);d=new Uk;d.lI=b;Om(c,d,YO(B(342)));}
function KN(){C.call(this);this.lW=null;}
function AAJ(a){Tw(a.lW);}
function K8(){C.call(this);this.oQ=null;}
function ALi(a,b){var c,d;c=a.oQ;d=new Bh;Bb(d,$rt_str(b.message));c.m(d);}
function TE(){var a=this;C.call(a);a.nm=null;a.nn=null;}
function ADL(a,b){var c,d,e,f,g,h;b=a.nm;c=a.nn;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new K2;h.kI=b;h.kH=g;$rt_globals.setTimeout(Bf(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=UK(d.item(f));g=new KJ;g.op=b;g.oq=c;$rt_globals.setTimeout(Bf(g,"onTimer"),0);f=f+1|0;}}
var PD=F(0);
function K3(){var a=this;C.call(a);a.pj=0;a.pi=0;}
function G9(a,b){return ND(a.pj,b,a.pi);}
function T2(){C.call(this);this.pl=null;}
function ACm(a){a.pl.cF=We();}
function T4(){C.call(this);this.mY=null;}
function AIM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=a.mY;c=new JJ;d=new Hx;EA();MI(d,APh);e=C8(APj);f=C8(APf);g=C8(APh);h=C8(APk);i=C8(APl);j=C8(APm);YS();k=(AQh.eH()).data;l=k.length;m=R(H3,l);n=m.data;o=0;while(o<l){n[o]=k[o].jN;o=o+1|0;}PJ(c,d,e,f,g,h,i,j,m,AF2(Dy(173),Dy(242),Dy(173),Cq(252,250,237)));b.cF=c;}
function TT(){C.call(this);this.od=null;}
function AFU(a){var b;b=a.od;ER(b,b.c$.j8,b.dd+1|0);}
function TS(){C.call(this);this.lC=null;}
function AEM(a){var b,c;b=a.lC;c=b.dd;if(c>7)ER(b,b.c$.j8,c-1|0);}
function MW(){C.call(this);this.nh=null;}
function ADg(a){var b;b=a.nh.t;ER(b,B(144),b.dd);}
function MU(){C.call(this);this.ok=null;}
function AKA(a){var b;b=a.ok.t;ER(b,B(145),b.dd);}
function MY(){C.call(this);this.lx=null;}
function ACd(a){var b;b=a.lx.t;ER(b,B(40),b.dd);}
function MX(){C.call(this);this.m9=null;}
function AD2(a){var b;b=a.m9.t;ER(b,B(116),b.dd);}
function SO(){C.call(this);this.pT=null;}
function AED(a){var b,c,d,e,f;b=a.pT.e.g;c=b.cI;d=new M;O(d);T(G(d,B(343)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.eO;d=new M;O(d);T(G(d,B(344)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.cC;e=E_(FA(b));Pd(d,0,d.cl,e);b=Bv();f=b.ik;f.data[0]=10;L5(b,f,0,1);}
function SN(){C.call(this);this.lo=null;}
function AHw(a){PC(a.lo);}
function SQ(){C.call(this);this.nU=null;}
function AI0(a){S8(a.nU);}
function SP(){C.call(this);this.qe=null;}
function AFu(a){Iw(a.qe);}
var NV=F(Bh);
var TB=F(Bh);
function RN(){E7.call(this);this.tK=0;}
function NN(){E7.call(this);this.tF=0;}
function RF(){var a=this;C.call(a);a.nL=null;a.pq=null;a.qB=0;a.h6=0;}
function IX(a,b){return BU(a.nL)<b?0:1;}
function Sq(){C.call(this);this.ls=null;}
function AGv(a,b){GC(a.ls,b);}
function Ue(){var a=this;C.call(a);a.k6=null;a.k5=null;a.k4=0;}
function AFS(a,b){var c,d,e;c=a.k6;d=a.k5;e=a.k4;d.m(PZ(c,(b.a+e|0)-c.db.a|0));}
function Uf(){var a=this;C.call(a);a.q0=null;a.qZ=null;a.qY=0;}
function AJ1(a,b){var c,d,e;c=a.q0;d=a.qZ;e=a.qY;d.m(PY(c,(b.b+e|0)-c.db.b|0));}
function SS(){var a=this;C.call(a);a.c7=0;a.dQ=0;a.ko=0;a.gS=null;}
var FG=F(Cd);
var AQg=null;var AQf=null;var AQi=null;function Rv(){Rv=Bk(FG);ACL();}
function AEO(a,b){var c=new FG();VR(c,a,b);return c;}
function VR(a,b,c){Rv();Dm(a,b,c);}
function ACL(){var b;AQg=AEO(B(345),0);b=AEO(B(346),1);AQf=b;AQi=H(FG,[AQg,b]);}
function Uk(){C.call(this);this.lI=null;}
function AJm(a,b){Dp(a.lI,b);}
var L8=F();
var AO3=null;function ANk(){ANk=Bk(L8);AC9();}
function AC9(){var b,c;Rv();b=BS((AQi.eH()).data.length);c=b.data;AO3=b;c[AQg.b6]=1;c[AQf.b6]=2;}
function PM(){C.call(this);this.mf=null;}
function AEp(a,b){Q8(a.mf.V.u,b,AO$,YO(B(347)));}
function MB(){C.call(this);this.nO=null;}
function AIs(a,b){var c,d;c=a.nO;d=b.f6;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function NO(){var a=this;C.call(a);a.lw=null;a.lv=null;}
function ACI(a,b){a.lw.m(XO(a.lv,b));}
var Hz=F(0);
function K2(){var a=this;C.call(a);a.kI=null;a.kH=null;}
function AEH(a){Vg(a.kI,a.kH);}
function KJ(){var a=this;C.call(a);a.op=null;a.oq=null;}
function Z8(a){a.op.m(a.oq);}
function TI(){var a=this;C.call(a);a.kO=null;a.kN=null;a.kR=null;a.kP=null;}
function AEa(a,b){var c,d,e,f,g;c=a.kO;d=a.kN;e=a.kR;f=a.kP;if(!(b.done?1:0)){Rd(c,d,e,f);g=b.value;if(!(g.kind==='file'?1:0))Rd(g.values(),d,e,Ye(f,EW(g.name)));else{b=g.getFile();c=new Q1;c.ms=d;c.mt=g;c.mu=f;b.then(Bf(c,"f"),Bf(e,"f"));}}}
function Nr(){C.call(this);this.o0=null;}
function AAE(a,b){var c,d,e,f;c=b.data;b=a.o0;d=D5(c[0]);e=E4(c[1]);Xe(b.e.g,d,e);FH(b.bG.u,APd);Fi(b.bG.u);f=IW(EY(),b.d0);b=new M;O(b);G(GL(G(b,B(348)),f),B(223));$rt_globals.console.info($rt_ustr(N(b)));}
function VX(){C.call(this);this.y8=null;}
function NZ(){var a=this;C.call(a);a.tI=null;a.tJ=null;}
function SJ(){var a=this;C.call(a);a.tr=null;a.ts=null;}
function SM(){C.call(this);this.ly=null;}
function AHn(a){Ft(a.ly);}
function Uc(){var a=this;C.call(a);a.s_=null;a.ta=null;}
var S3=F(Bu);
var N_=F(0);
var LJ=F(0);
var Ke=F();
function Wk(){var a=this;Ke.call(a);a.y9=null;a.AT=0;a.zG=0;a.xD=0;}
function Lg(){C.call(this);this.lK=null;}
function AJs(a){Ft(a.lK);}
var TD=F();
function AKi(a){}
function B6(){Cd.call(this);this.jN=null;}
var AQj=null;var AQk=null;var AQl=null;var AQm=null;var AQn=null;var AQo=null;var AQp=null;var AQq=null;var AQr=null;var AQs=null;var AQt=null;var AQu=null;var AQv=null;var AQw=null;var AQx=null;var AQh=null;function YS(){YS=Bk(B6);AH$();}
function Dh(a,b,c){var d=new B6();M0(d,a,b,c);return d;}
function AEi(a,b,c,d){var e=new B6();Vo(e,a,b,c,d);return e;}
function M0(a,b,c,d){YS();Dm(a,b,c);a.jN=Qn(d,null);}
function Vo(a,b,c,d,e){YS();Dm(a,b,c);a.jN=Qn(d,e);}
function AH$(){var b;b=new B6;EA();M0(b,B(299),0,APi);AQj=b;AQk=Dh(B(300),1,Cq(0,49,191));AQl=Dh(B(301),2,Bl(B(349)));AQm=Dh(B(303),3,Bl(B(350)));AQn=Dh(B(305),4,APi);AQo=Dh(B(307),5,Bl(B(351)));AQp=Dh(B(308),6,Bl(B(319)));AQq=Dh(B(310),7,Bl(B(352)));AQr=Dh(B(312),8,Bl(B(353)));AQs=AEi(B(314),9,AO7,Cq(237,235,252));AQt=AEi(B(315),10,Bl(B(316)),Bl(B(354)));AQu=Dh(B(318),11,Bl(B(319)));AQv=Dh(B(320),12,Bl(B(321)));AQw=Dh(B(322),13,Bl(B(323)));b=Dh(B(324),14,Bl(B(325)));AQx=b;AQh=H(B6,[AQj,AQk,AQl,AQm,AQn,AQo,
AQp,AQq,AQr,AQs,AQt,AQu,AQv,AQw,b]);}
function Tt(){C.call(this);this.pB=null;}
function AHm(a,b){var c,d;c=a.pB;d=0;while(d<b.length){Vg(c,b[d]);d=d+1|0;}}
var XB=F(0);
function Q1(){var a=this;C.call(a);a.ms=null;a.mt=null;a.mu=null;}
function AG9(a,b){a.ms.m(ALA(a.mt,b,a.mu));}
function Oo(){var a=this;C.call(a);a.f=null;a.cL=0;a.ia=null;a.k9=0;a.e_=0;a.dI=0;a.bd=0;a.jb=null;}
function In(a){return a.f.bo;}
function Ub(a,b,c,d){var e,f,g,h,i,j;e=Cy();f=a.cL;g=0;if(c!=f)a.cL=c;a:{switch(b){case -1073741784:h=new OY;c=a.bd+1|0;a.bd=c;EM(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Nx;c=a.bd+1|0;a.bd=c;EM(h,c);break a;case -33554392:h=new PI;c=a.bd+1|0;a.bd=c;EM(h,c);break a;default:c=a.e_+1|0;a.e_=c;if(d!==null)h=AMY(c);else{h=new ES;EM(h,0);g=1;}c=a.e_;if(c<=(-1))break a;if(c>=10)break a;a.ia.data[c]=h;break a;}h=new T9;EM(h,(-1));}while(true){if(Ev(a.f)&&a.f.i==(-536870788))
{d=AJR(BY(a,2),BY(a,64));while(!CW(a.f)&&Ev(a.f)){i=a.f;j=i.i;if(j&&j!=(-536870788)&&j!=(-536870871))break;Ci(d,Y(i));i=a.f;if(i.T!=(-536870788))continue;Y(i);}i=Jb(a,d);i.H(h);}else if(a.f.T==(-536870788)){i=FZ(h);Y(a.f);}else{i=M5(a,h);d=a.f;if(d.T==(-536870788))Y(d);}if(i!==null)Cc(e,i);if(CW(a.f))break;if(a.f.T==(-536870871))break;}if(a.f.iz==(-536870788))Cc(e,FZ(h));if(a.cL!=f&&!g){a.cL=f;d=a.f;d.e0=f;d.i=d.T;d.dC=d.dS;j=d.cy;d.r=j+1|0;d.fP=j;Ew(d);}switch(b){case -1073741784:break;case -536870872:d=new K0;ET(d,
e,h);return d;case -268435416:d=new St;ET(d,e,h);return d;case -134217688:d=new Or;ET(d,e,h);return d;case -67108824:d=new Qt;ET(d,e,h);return d;case -33554392:d=new Do;ET(d,e,h);return d;default:switch(e.o){case 0:break;case 1:return AMK(BK(e,0),h);default:return AMl(e,h);}return FZ(h);}d=new HD;ET(d,e,h);return d;}
function YB(a){var b,c,d,e,f,g,h;b=BS(4);c=(-1);d=(-1);if(!CW(a.f)&&Ev(a.f)){e=b.data;c=Y(a.f);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BN(3);b=e.data;b[0]=c&65535;f=a.f;g=f.T;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Y(f);f=a.f;g=f.T;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Y(f);return AJD(e,3);}return AJD(e,2);}if(!BY(a,2))return VW(b[0]);if(BY(a,64))return AH0(b[0]);return ABP(b[0]);}e=b.data;c=1;while(c<4&&!CW(a.f)&&Ev(a.f)){h=c+1|0;e[c]=Y(a.f);c=h;}if(c==1){h=e[0];if(!(AQy.tk(h)==AQz?0:1))return T5(a,e[0]);}if(!BY(a,
2))return ANy(b,c);if(BY(a,64)){f=new TG;L2(f,b,c);return f;}f=new QG;L2(f,b,c);return f;}
function M5(a,b){var c,d,e,f,g,h,i;if(Ev(a.f)&&!If(a.f)&&IM(a.f.i)){if(BY(a,128)){c=YB(a);if(!CW(a.f)){d=a.f;e=d.T;if(!(e==(-536870871)&&!(b instanceof ES))&&e!=(-536870788)&&!Ev(d))c=Kq(a,b,c);}}else if(!L_(a.f)&&!RL(a.f)){f=new Mb;O(f);while(!CW(a.f)&&Ev(a.f)&&!L_(a.f)&&!RL(a.f)){if(!(!If(a.f)&&!a.f.i)&&!(!If(a.f)&&IM(a.f.i))){g=a.f.i;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Y(a.f);if(!Kk(e))BB(f,e&65535);else G_(f,FF(e));}if(!BY(a,2)){c=new OS;C$(c);c.b0
=N(f);e=f.I;c.bm=e;c.ip=AGx(e);c.jf=AGx(c.bm);h=0;while(h<(c.bm-1|0)){Ox(c.ip,L(c.b0,h),(c.bm-h|0)-1|0);Ox(c.jf,L(c.b0,(c.bm-h|0)-1|0),(c.bm-h|0)-1|0);h=h+1|0;}}else if(BY(a,64))c=ANv(f);else{c=new Lv;C$(c);c.fQ=N(f);c.bm=f.I;}}else c=Kq(a,b,TF(a,b));}else{d=a.f;if(d.T!=(-536870871))c=Kq(a,b,TF(a,b));else{if(b instanceof ES)J(BW(B(29),d.bo,L9(d)));c=FZ(b);}}a:{if(!CW(a.f)){e=a.f.T;if(!(e==(-536870871)&&!(b instanceof ES))&&e!=(-536870788)){f=M5(a,b);if(c instanceof CJ&&!(c instanceof Ex)&&!(c instanceof CC)
&&!(c instanceof D$)){i=c;if(!f.bt(i.D)){c=new SI;Eo(c,i.D,i.d,i.f8);c.D.H(c);}}if((f.gc()&65535)!=43)c.H(f);else c.H(f.D);break a;}}if(c===null)return null;c.H(b);}if((c.gc()&65535)!=43)return c;return c.D;}
function Kq(a,b,c){var d,e,f,g,h;d=a.f;e=d.T;if(c!==null&&!(c instanceof BO)){switch(e){case -2147483606:Y(d);d=new Uw;CT(d,c,b,e);Kv();c.H(AQA);return d;case -2147483605:Y(d);d=new Ns;CT(d,c,b,(-2147483606));Kv();c.H(AQA);return d;case -2147483585:Y(d);d=new Na;CT(d,c,b,(-536870849));Kv();c.H(AQA);return d;case -2147483525:f=new Lp;d=EE(d);g=a.dI+1|0;a.dI=g;HS(f,d,c,b,(-536870849),g);Kv();c.H(AQA);return f;case -1073741782:case -1073741781:Y(d);d=new OO;CT(d,c,b,e);c.H(d);return d;case -1073741761:Y(d);d=new N8;CT(d,
c,b,(-536870849));c.H(b);return d;case -1073741701:h=new Rx;d=EE(d);e=a.dI+1|0;a.dI=e;HS(h,d,c,b,(-536870849),e);c.H(h);return h;case -536870870:case -536870869:Y(d);if(c.gc()!=(-2147483602)){d=new CC;CT(d,c,b,e);}else if(BY(a,32)){d=new OP;CT(d,c,b,e);}else{d=new Mh;f=Ne(a.cL);CT(d,c,b,e);d.ix=f;}c.H(d);return d;case -536870849:Y(d);d=new E9;CT(d,c,b,(-536870849));c.H(b);return d;case -536870789:h=new EF;d=EE(d);e=a.dI+1|0;a.dI=e;HS(h,d,c,b,(-536870849),e);c.H(h);return h;default:}return c;}f=null;if(c!==null)f
=c;switch(e){case -2147483606:case -2147483605:Y(d);d=new Uy;Eo(d,f,b,e);f.d=d;return d;case -2147483585:Y(d);c=new SE;Eo(c,f,b,(-2147483585));return c;case -2147483525:c=new M2;Pa(c,EE(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Y(d);d=new N5;Eo(d,f,b,e);f.d=d;return d;case -1073741761:Y(d);c=new QR;Eo(c,f,b,(-1073741761));return c;case -1073741701:c=new Os;Pa(c,EE(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Y(d);d=AMQ(f,b,e);f.d=d;return d;case -536870849:Y(d);c=new D$;Eo(c,
f,b,(-536870849));return c;case -536870789:return ALZ(EE(d),f,b,(-536870789));default:}return c;}
function TF(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof ES;while(true){a:{e=a.f;f=e.T;if((f&(-2147418113))==(-2147483608)){Y(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.cL=g;else{if(f!=(-1073741784))g=a.cL;c=Ub(a,f,g,b);e=a.f;if(e.T!=(-536870871))J(BW(B(29),e.bo,e.cy));Y(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Y(e);c
=AJt(0);break a;case -2147483577:Y(e);c=new Mf;BG(c);break a;case -2147483558:Y(e);c=new Tr;h=a.bd+1|0;a.bd=h;YZ(c,h);break a;case -2147483550:Y(e);c=AJt(1);break a;case -2147483526:Y(e);c=new S9;BG(c);break a;case -536870876:Y(e);a.bd=a.bd+1|0;if(BY(a,8)){if(BY(a,1)){c=AMc(a.bd);break a;}c=ALz(a.bd);break a;}if(BY(a,1)){c=AMr(a.bd);break a;}c=AM1(a.bd);break a;case -536870866:Y(e);if(BY(a,32)){c=ANh();break a;}c=AMX(Ne(a.cL));break a;case -536870821:Y(e);i=0;c=a.f;if(c.T==(-536870818)){i=1;Y(c);}c=Jb(a,Fh(a,
i));c.H(b);e=a.f;if(e.T!=(-536870819))J(BW(B(29),e.bo,e.cy));MG(e,1);Y(a.f);break a;case -536870818:Y(e);a.bd=a.bd+1|0;if(!BY(a,8)){c=new IU;BG(c);break a;}c=new LB;e=Ne(a.cL);BG(c);c.nx=e;break a;case 0:j=e.dS;if(j!==null)c=Jb(a,j);else{if(CW(e)){c=FZ(b);break a;}c=VW(f&65535);}Y(a.f);break a;default:break b;}Y(e);c=new IU;BG(c);break a;}h=(f&2147483647)-48|0;if(a.e_<h)J(BW(B(29),EJ(e),L9(a.f)));Y(e);a.bd=a.bd+1|0;c=!BY(a,2)?ALG(h,a.bd):BY(a,64)?AMd(h,a.bd):ANs(h,a.bd);a.ia.data[h].h$=1;a.k9=1;break a;}if(f
>=0&&!F1(e)){c=T5(a,f);Y(a.f);}else if(f==(-536870788))c=FZ(b);else{if(f!=(-536870871)){b=new Hs;c=!F1(a.f)?Tq(f&65535):a.f.dS.bH();e=a.f;H0(b,c,e.bo,e.cy);J(b);}if(d){b=new Hs;e=a.f;H0(b,B(29),e.bo,e.cy);J(b);}c=FZ(b);}}}if(f!=(-16777176))break;}return c;}
function Fh(a,b){var c,d,e,f,g,h,i,j,$$je;c=AJR(BY(a,2),BY(a,64));D3(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(CW(a.f))break a;h=a.f;b=h.T;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Ci(c,d);d=Y(a.f);h=a.f;if(h.T!=(-536870874)){d=38;break d;}if(h.i==(-536870821)){Y(h);e=1;d=(-1);break d;}Y(h);if(g){c=Fh(a,0);break d;}if(a.f.T==(-536870819))break d;Td(c,Fh(a,0));break d;case -536870867:if(!g){b=h.i;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Y(h);h=a.f;i=h.T;if(F1(h))break c;if
(i<0){j=a.f.i;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(IM(i))break e;i=i&65535;break e;}catch($$e){$$je=DR($$e);if($$je instanceof DD){break b;}else{throw $$e;}}}try{BL(c,d,i);}catch($$e){$$je=DR($$e);if($$je instanceof DD){break b;}else{throw $$e;}}Y(a.f);d=(-1);break d;}}if(d>=0)Ci(c,d);d=45;Y(a.f);break d;case -536870821:if(d>=0){Ci(c,d);d=(-1);}Y(a.f);j=0;h=a.f;if(h.T==(-536870818)){Y(h);j=1;}if(!e)UI(c,Fh(a,j));else Td(c,Fh(a,j));e=0;Y(a.f);break d;case -536870819:if(d>=0)Ci(c,d);d=
93;Y(a.f);break d;case -536870818:if(d>=0)Ci(c,d);d=94;Y(a.f);break d;case 0:if(d>=0)Ci(c,d);h=a.f.dS;if(h===null)d=0;else{ZV(c,h);d=(-1);}Y(a.f);break d;default:}if(d>=0)Ci(c,d);d=Y(a.f);}g=0;}J(BW(B(29),In(a),a.f.cy));}J(BW(B(29),In(a),a.f.cy));}if(!f){if(d>=0)Ci(c,d);return c;}J(BW(B(29),In(a),a.f.cy-1|0));}
function T5(a,b){var c,d,e;c=Kk(b);if(BY(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return ABP(b&65535);}if(BY(a,64)&&b>128){if(c){d=new KQ;C$(d);d.bm=2;d.nb=FP(FO(b));return d;}if(MP(b))return AGD(b&65535);if(!Pn(b))return AH0(b&65535);return AEw(b&65535);}}if(!c){if(MP(b))return AGD(b&65535);if(!Pn(b))return VW(b&65535);return AEw(b&65535);}d=new Dt;C$(d);d.bm=2;d.eL=b;e=(FF(b)).data;d.hD=e[0];d.gJ=e[1];return d;}
function Jb(a,b){var c,d,e;if(!Xv(b)){if(!b.F){if(b.fG())return AD7(b);return AJu(b);}if(!b.fG())return AE8(b);c=new HU;Q7(c,b);return c;}c=U$(b);d=new K9;BG(d);d.ml=c;d.rj=c.S;if(!b.F){if(b.fG())return X6(AD7(Gv(b)),d);return X6(AJu(Gv(b)),d);}if(!b.fG())return X6(AE8(Gv(b)),d);c=new N0;e=new HU;Q7(e,Gv(b));ZC(c,e,d);return c;}
function Gw(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function BY(a,b){return (a.cL&b)!=b?0:1;}
function Wf(){var a=this;C.call(a);a.gH=null;a.gD=null;}
function Zl(){var a=this;C.call(a);a.tU=0;a.tG=0;a.oS=0;a.iV=0;}
var Ph=F();
function AGH(a){}
function Pg(){var a=this;C.call(a);a.pN=null;a.pO=null;}
function AHg(a){var b,c,d,e,f,g,h;b=a.pN;c=a.pO;if(D6(b.dM))Fw(b.dM);if(FX(c.gH,b.e.e3))OA(b,c.gD);else{d=b.ea.n4.e5.data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){h=new Tf;h.kp=b;h.kn=g;h.km=c;Ck(h);b=new NH;b.q7=h;$rt_globals.setTimeout(Bf(b,"onTimer"),0);}}}
function Pf(){var a=this;C.call(a);a.lF=null;a.lD=null;}
function AI_(a){Hv(a.lF,a.lD);}
function Bw(){var a=this;C.call(a);a.d=null;a.bM=0;a.lN=null;a.f8=0;}
var AN5=0;function BG(a){var b,c;b=new Eg;c=AN5;AN5=c+1|0;Iq(b,c);a.lN=Km(b);}
function Ja(a,b){var c,d;c=new Eg;d=AN5;AN5=d+1|0;Iq(c,d);a.lN=Km(c);a.d=b;}
function Gz(a,b,c,d){var e;e=d.s;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function GJ(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AB$(a,b){a.f8=b;}
function ABx(a){return a.f8;}
function AIY(a){return a.d;}
function AJI(a,b){a.d=b;}
function AJH(a,b){return 1;}
function AKu(a){return null;}
function HO(a){var b;a.bM=1;b=a.d;if(b!==null){if(!b.bM){b=b.eq();if(b!==null){a.d.bM=1;a.d=b;}a.d.dm();}else if(b instanceof FL&&b.ds.h$)a.d=b.d;}}
function ZK(){AN5=1;}
function Md(){C.call(this);this.nV=null;}
function AIm(a,b){Rb(a.nV,b);}
function CA(){var a=this;Bw.call(a);a.h$=0;a.cO=0;}
var AQA=null;function Kv(){Kv=Bk(CA);ADb();}
function AMY(a){var b=new CA();EM(b,a);return b;}
function EM(a,b){Kv();BG(a);a.cO=b;}
function AAZ(a,b,c,d){var e,f;e=Hf(d,a.cO);Ib(d,a.cO,b);f=a.d.c(b,c,d);if(f<0)Ib(d,a.cO,e);return f;}
function AFW(a){return a.cO;}
function ABm(a,b){return 0;}
function ADb(){var b;b=new Mc;BG(b);AQA=b;}
function FW(){var a=this;C.call(a);a.R=null;a.e0=0;a.dF=0;a.pP=0;a.iz=0;a.T=0;a.i=0;a.nX=0;a.dS=null;a.dC=null;a.r=0;a.gi=0;a.cy=0;a.fP=0;a.bo=null;}
var AQB=null;var AQy=null;var AQz=0;function MG(a,b){if(b>0&&b<3)a.dF=b;if(b==1){a.i=a.T;a.dC=a.dS;a.r=a.fP;a.fP=a.cy;Ew(a);}}
function F1(a){return a.dS===null?0:1;}
function If(a){return a.dC===null?0:1;}
function Y(a){Ew(a);return a.iz;}
function EE(a){var b;b=a.dS;Ew(a);return b;}
function Ew(a){var b,c,d,e,f,g,h,$$je;a.iz=a.T;a.T=a.i;a.dS=a.dC;a.cy=a.fP;a.fP=a.r;while(true){b=0;c=a.r>=a.R.data.length?0:JW(a);a.i=c;a.dC=null;if(a.dF==4){if(c!=92)return;c=a.r;d=a.R.data;c=c>=d.length?0:d[BM(a)];a.i=c;switch(c){case 69:break;default:a.i=92;a.r=a.gi;return;}a.dF=a.pP;a.i=a.r>(a.R.data.length-2|0)?0:JW(a);}a:{c=a.i;if(c!=92){e=a.dF;if(e==1)switch(c){case 36:a.i=(-536870876);break a;case 40:if(a.R.data[a.r]!=63){a.i=(-2147483608);break a;}BM(a);c=a.R.data[a.r];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.i=(-134217688);BM(a);break b;default:J(BW(B(29),EJ(a),a.r));}a.i=(-67108824);BM(a);}else{switch(c){case 33:break;case 60:BM(a);c=a.R.data[a.r];e=1;break b;case 61:a.i=(-536870872);BM(a);break b;case 62:a.i=(-33554392);BM(a);break b;default:f=ZL(a);a.i=f;if(f<256){a.e0=f;f=f<<16;a.i=f;a.i=(-1073741784)|f;break b;}f=f&255;a.i=f;a.e0=f;f=f<<16;a.i=f;a.i=(-16777176)|f;break b;}a.i=(-268435416);BM(a);}}if(!e)break;}break a;case 41:a.i=(-536870871);break a;case 42:case 43:case 63:e=a.r;d
=a.R.data;switch(e>=d.length?42:d[e]){case 43:a.i=c|(-2147483648);BM(a);break a;case 63:a.i=c|(-1073741824);BM(a);break a;default:}a.i=c|(-536870912);break a;case 46:a.i=(-536870866);break a;case 91:a.i=(-536870821);MG(a,2);break a;case 93:if(e!=2)break a;a.i=(-536870819);break a;case 94:a.i=(-536870818);break a;case 123:a.dC=Zg(a,c);break a;case 124:a.i=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.i=(-536870874);break a;case 45:a.i=(-536870867);break a;case 91:a.i=(-536870821);break a;case 93:a.i
=(-536870819);break a;case 94:a.i=(-536870818);break a;default:}}else{c=a.r>=(a.R.data.length-2|0)?(-1):JW(a);c:{a.i=c;switch(c){case -1:J(BW(B(29),EJ(a),a.r));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.i
=XU(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.dF!=1)break a;a.i=(-2147483648)|c;break a;case 65:a.i=(-2147483583);break a;case 66:a.i=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(BW(B(29),EJ(a),a.r));case 68:case 83:case 87:case 100:case 115:case 119:a.dC=O9(Ii(a.R,
a.gi,1),0);a.i=0;break a;case 71:a.i=(-2147483577);break a;case 80:case 112:break c;case 81:a.pP=a.dF;a.dF=4;b=1;break a;case 90:a.i=(-2147483558);break a;case 97:a.i=7;break a;case 98:a.i=(-2147483550);break a;case 99:c=a.r;d=a.R.data;if(c>=(d.length-2|0))J(BW(B(29),EJ(a),a.r));a.i=d[BM(a)]&31;break a;case 101:a.i=27;break a;case 102:a.i=12;break a;case 110:a.i=10;break a;case 114:a.i=13;break a;case 116:a.i=9;break a;case 117:a.i=Nv(a,4);break a;case 120:a.i=Nv(a,2);break a;case 122:a.i=(-2147483526);break a;default:}break a;}g
=XG(a);h=0;if(a.i==80)h=1;try{a.dC=O9(g,h);}catch($$e){$$je=DR($$e);if($$je instanceof HW){J(BW(B(29),EJ(a),a.r));}else{throw $$e;}}a.i=0;}}if(b)continue;else break;}}
function XG(a){var b,c,d,e,f,g;b=new M;Fa(b,10);c=a.r;d=a.R;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Ii(d,BM(a),1);f=new M;O(f);G(G(f,B(355)),b);return N(f);}BM(a);c=0;a:{while(true){g=a.r;d=a.R.data;if(g>=(d.length-2|0))break;c=d[BM(a)];if(c==125)break a;BB(b,c);}}if(c!=125)J(BW(B(29),a.bo,a.r));}if(!b.I)J(BW(B(29),a.bo,a.r));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(355)),f);return N(b);}b:{c:{if(I(f)>3){if(FK(f,B(355)))break c;if(FK(f,B(356)))break c;}break b;}f=Dc(f,2);}return f;}
function Zg(a,b){var c,d,e,f,g,$$je;c=new M;Fa(c,4);d=(-1);e=2147483647;a:{while(true){f=a.r;g=a.R.data;if(f>=g.length)break a;b=g[BM(a)];if(b==125)break a;if(b==44&&d<0)try{d=H9(Ds(c),10);Zo(c,0,Vi(c));continue;}catch($$e){$$je=DR($$e);if($$je instanceof CU){break;}else{throw $$e;}}BB(c,b&65535);}J(BW(B(29),a.bo,a.r));}if(b!=125)J(BW(B(29),a.bo,a.r));if(c.I>0)b:{try{e=H9(Ds(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=DR($$e);if($$je instanceof CU){}else{throw $$e;}}J(BW(B(29),a.bo,a.r));}else if(d<
0)J(BW(B(29),a.bo,a.r));if((d|e|(e-d|0))<0)J(BW(B(29),a.bo,a.r));b=a.r;g=a.R.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.i=(-2147483525);BM(a);break c;case 63:a.i=(-1073741701);BM(a);break c;default:}a.i=(-536870789);}c=new Le;c.dD=d;c.dz=e;return c;}
function EJ(a){return a.bo;}
function CW(a){return !a.T&&!a.i&&a.r==a.nX&&!F1(a)?1:0;}
function IM(b){return b<0?0:1;}
function Ev(a){return !CW(a)&&!F1(a)&&IM(a.T)?1:0;}
function L_(a){var b;b=a.T;return b<=56319&&b>=55296?1:0;}
function RL(a){var b;b=a.T;return b<=57343&&b>=56320?1:0;}
function Pn(b){return b<=56319&&b>=55296?1:0;}
function MP(b){return b<=57343&&b>=56320?1:0;}
function Nv(a,b){var c,d,e,f,$$je;c=new M;Fa(c,b);d=a.R.data.length-2|0;e=0;while(true){f=BD(e,b);if(f>=0)break;if(a.r>=d)break;BB(c,a.R.data[BM(a)]);e=e+1|0;}if(!f)a:{try{b=H9(Ds(c),16);}catch($$e){$$je=DR($$e);if($$je instanceof CU){break a;}else{throw $$e;}}return b;}J(BW(B(29),a.bo,a.r));}
function XU(a){var b,c,d,e,f,g;b=3;c=1;d=a.R.data;e=d.length-2|0;f=Rs(d[a.r],8);switch(f){case -1:break;default:if(f>3)b=2;BM(a);a:{while(true){if(c>=b)break a;g=a.r;if(g>=e)break a;g=Rs(a.R.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BM(a);c=c+1|0;}}return f;}J(BW(B(29),a.bo,a.r));}
function ZL(a){var b,c,d,e;b=1;c=a.e0;a:while(true){d=a.r;e=a.R.data;if(d>=e.length)J(BW(B(29),a.bo,d));b:{c:{switch(e[d]){case 41:BM(a);return c|256;case 45:if(!b)J(BW(B(29),a.bo,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BM(a);}BM(a);return c;}
function BM(a){var b,c,d,e,f;b=a.r;a.gi=b;if(!(a.e0&4))a.r=b+1|0;else{c=a.R.data.length-2|0;a.r=b+1|0;a:while(true){d=a.r;if(d<c&&Op(a.R.data[d])){a.r=a.r+1|0;continue;}d=a.r;if(d>=c)break;e=a.R.data;if(e[d]!=35)break;a.r=d+1|0;while(true){f=a.r;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.r=f+1|0;}}}return a.gi;}
function Y$(b){return AQB.xh(b);}
function JW(a){var b,c,d,e;b=a.R.data[BM(a)];if(Cs(b)){c=a.gi+1|0;d=a.R.data;if(c<d.length){e=d[c];if(CL(e)){BM(a);return D4(b,e);}}}return b;}
function L9(a){return a.cy;}
function Hs(){var a=this;BC.call(a);a.s5=null;a.sG=null;a.m5=0;}
function BW(a,b,c){var d=new Hs();H0(d,a,b,c);return d;}
function H0(a,b,c,d){U(a);a.m5=(-1);a.s5=b;a.sG=c;a.m5=d;}
var OY=F(CA);
function AAB(a,b,c,d){var e;e=a.cO;BE(d,e,b-CY(d,e)|0);return a.d.c(b,c,d);}
function AIu(a,b){return 0;}
var T9=F(CA);
function AB8(a,b,c,d){return b;}
var Nx=F(CA);
function ABv(a,b,c,d){if(CY(d,a.cO)!=b)b=(-1);return b;}
function PI(){CA.call(this);this.kY=0;}
function AAK(a,b,c,d){var e;e=a.cO;BE(d,e,b-CY(d,e)|0);a.kY=b;return b;}
function AHf(a,b){return 0;}
var ES=F(CA);
function AJV(a,b,c,d){if(d.ht!=1&&b!=d.s)return (-1);d.g1=1;Ib(d,0,b);return b;}
function BO(){Bw.call(this);this.bm=0;}
function C$(a){BG(a);a.bm=1;}
function AKU(a,b,c,d){var e;if((b+a.bz()|0)>d.s){d.cH=1;return (-1);}e=a.bc(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function AJf(a){return a.bm;}
function AEP(a,b){return 1;}
var YX=F(BO);
function FZ(a){var b=new YX();AF6(b,a);return b;}
function AF6(a,b){Ja(a,b);a.bm=1;a.f8=1;a.bm=0;}
function AIT(a,b,c){return 0;}
function ADi(a,b,c,d){var e,f,g;e=d.s;f=d.ch;while(true){g=BD(b,e);if(g>0)return (-1);if(g<0&&CL(L(c,b))&&b>f&&Cs(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AB0(a,b,c,d,e){var f,g;f=e.s;g=e.ch;while(true){if(c<b)return (-1);if(c<f&&CL(L(d,c))&&c>g&&Cs(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AAG(a,b){return 0;}
function BJ(){var a=this;Bw.call(a);a.bl=null;a.ds=null;a.M=0;}
function AMl(a,b){var c=new BJ();ET(c,a,b);return c;}
function ET(a,b,c){BG(a);a.bl=b;a.ds=c;a.M=c.cO;}
function ADQ(a,b,c,d){var e,f,g,h;if(a.bl===null)return (-1);e=EV(d,a.M);C9(d,a.M,b);f=a.bl.o;g=0;while(true){if(g>=f){C9(d,a.M,e);return (-1);}h=(BK(a.bl,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AG_(a,b){a.ds.d=b;}
function AFv(a,b){var c;a:{c=a.bl;if(c!==null){c=BV(c);while(true){if(!B9(c))break a;if(!(BX(c)).bt(b))continue;else return 1;}}}return 0;}
function AHO(a,b){return Hf(b,a.M)>=0&&EV(b,a.M)==Hf(b,a.M)?0:1;}
function ABX(a){var b,c,d,e,f,g,h,i;a.bM=1;b=a.ds;if(b!==null&&!b.bM)HO(b);a:{b=a.bl;if(b!==null){c=b.o;d=0;while(true){if(d>=c)break a;b=BK(a.bl,d);e=b.eq();if(e===null)e=b;else{b.bM=1;F7(a.bl,d);f=a.bl;Nj(f,d);H1(f,f.o+1|0);g=f.o;h=g;while(h>d){i=f.bR.data;i[h]=i[h-1|0];h=h+(-1)|0;}f.bR.data[d]=e;f.o=g+1|0;f.cc=f.cc+1|0;}if(!e.bM)e.dm();d=d+1|0;}}}if(a.d!==null)HO(a);}
var HD=F(BJ);
function AGX(a,b,c,d){var e,f,g,h;e=CY(d,a.M);BE(d,a.M,b);f=a.bl.o;g=0;while(true){if(g>=f){BE(d,a.M,e);return (-1);}h=(BK(a.bl,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AH9(a,b){return !CY(b,a.M)?0:1;}
var Do=F(HD);
function ACt(a,b,c,d){var e,f,g;e=CY(d,a.M);BE(d,a.M,b);f=a.bl.o;g=0;while(g<f){if((BK(a.bl,g)).c(b,c,d)>=0)return a.d.c(a.ds.kY,c,d);g=g+1|0;}BE(d,a.M,e);return (-1);}
function AHU(a,b){a.d=b;}
var K0=F(Do);
function AG4(a,b,c,d){var e,f;e=a.bl.o;f=0;while(f<e){if((BK(a.bl,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AJM(a,b){return 0;}
var St=F(Do);
function ABh(a,b,c,d){var e,f;e=a.bl.o;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((BK(a.bl,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AJj(a,b){return 0;}
var Or=F(Do);
function ABV(a,b,c,d){var e,f,g,h;e=a.bl.o;f=d.g3?0:d.ch;a:{g=a.d.c(b,c,d);if(g>=0){BE(d,a.M,b);h=0;while(true){if(h>=e)break a;if((BK(a.bl,h)).bW(f,b,c,d)>=0){BE(d,a.M,(-1));return g;}h=h+1|0;}}}return (-1);}
function ALe(a,b){return 0;}
var Qt=F(Do);
function AAj(a,b,c,d){var e,f;e=a.bl.o;BE(d,a.M,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((BK(a.bl,f)).bW(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AIk(a,b){return 0;}
function FL(){BJ.call(this);this.cm=null;}
function AMK(a,b){var c=new FL();VK(c,a,b);return c;}
function VK(a,b,c){BG(a);a.cm=b;a.ds=c;a.M=c.cO;}
function AAx(a,b,c,d){var e,f;e=EV(d,a.M);C9(d,a.M,b);f=a.cm.c(b,c,d);if(f>=0)return f;C9(d,a.M,e);return (-1);}
function AFJ(a,b,c,d){var e;e=a.cm.bQ(b,c,d);if(e>=0)C9(d,a.M,e);return e;}
function AIz(a,b,c,d,e){var f;f=a.cm.bW(b,c,d,e);if(f>=0)C9(e,a.M,f);return f;}
function AFq(a,b){return a.cm.bt(b);}
function AHd(a){var b;b=new Lk;VK(b,a.cm,a.ds);a.d=b;return b;}
function AKx(a){var b;a.bM=1;b=a.ds;if(b!==null&&!b.bM)HO(b);b=a.cm;if(b!==null&&!b.bM){b=b.eq();if(b!==null){a.cm.bM=1;a.cm=b;}a.cm.dm();}}
var FY=F();
function S(){var a=this;FY.call(a);a.S=0;a.bL=0;a.E=null;a.hz=null;a.h2=null;a.F=0;}
var AQC=null;function ME(){ME=Bk(S);ACh();}
function Bj(a){var b;ME();b=new To;b.v=BS(64);a.E=b;}
function ABj(a){return null;}
function AAS(a){return a.E;}
function Xv(a){var b,c,d,e,f;if(!a.bL)b=Gh(a.E,0)>=2048?0:1;else{a:{c=a.E;b=0;d=c.bb;if(b<d){e=c.v.data;f=(e[0]^(-1))>>>0|0;if(f)b=G8(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+G8(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AD6(a){return a.F;}
function AJb(a){return a;}
function U$(a){var b,c;if(a.h2===null){b=a.dR();c=new SH;c.tq=a;c.lf=b;Bj(c);a.h2=c;D3(c,a.bL);}return a.h2;}
function Gv(a){var b,c;if(a.hz===null){b=a.dR();c=new SF;c.s8=a;c.pp=b;c.p3=a;Bj(c);a.hz=c;D3(c,a.S);a.hz.F=a.F;}return a.hz;}
function AKt(a){return 0;}
function D3(a,b){var c;c=a.S;if(c^b){a.S=c?0:1;a.bL=a.bL?0:1;}if(!a.F)a.F=1;return a;}
function ADk(a){return a.S;}
function II(b,c){ME();return b.j(c);}
function G6(b,c){var d,e;ME();if(b.cD()!==null&&c.cD()!==null){b=b.cD();c=c.cD();d=Z(b.v.data.length,c.v.data.length);e=0;a:{while(e<d){if(b.v.data[e]&c.v.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function O9(b,c){var d,e,f;ME();d=0;while(true){AIi();e=AQD.data;if(d>=e.length){f=new HW;Bb(f,B(29));f.tN=B(29);f.tu=b;J(f);}e=e[d].data;if(Br(b,e[0]))break;d=d+1|0;}return Yu(e[1],c);}
function ACh(){var b;b=new F$;AIi();AQC=b;}
function Vz(){var a=this;S.call(a);a.jh=0;a.kX=0;a.fa=0;a.iU=0;a.c1=0;a.ei=0;a.B=null;a.bg=null;}
function CZ(){var a=new Vz();AK4(a);return a;}
function AJR(a,b){var c=new Vz();AB9(c,a,b);return c;}
function AK4(a){Bj(a);a.B=ALf();}
function AB9(a,b,c){Bj(a);a.B=ALf();a.jh=b;a.kX=c;}
function Ci(a,b){a:{if(a.jh){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.c1){KD(a.B,Gw(b&65535));break a;}JR(a.B,Gw(b&65535));break a;}if(a.kX&&b>128){a.fa=1;b=FP(FO(b));}}}if(!(!Pn(b)&&!MP(b))){if(a.iU)KD(a.E,b-55296|0);else JR(a.E,b-55296|0);}if(a.c1)KD(a.B,b);else JR(a.B,b);if(!a.F&&Kk(b))a.F=1;return a;}
function ZV(a,b){var c,d,e;if(!a.F&&b.F)a.F=1;if(a.iU){if(!b.bL)E$(a.E,b.dR());else CR(a.E,b.dR());}else if(!b.bL)E6(a.E,b.dR());else{EP(a.E,b.dR());CR(a.E,b.dR());a.bL=a.bL?0:1;a.iU=1;}if(!a.ei&&b.cD()!==null){if(a.c1){if(!b.S)E$(a.B,b.cD());else CR(a.B,b.cD());}else if(!b.S)E6(a.B,b.cD());else{EP(a.B,b.cD());CR(a.B,b.cD());a.S=a.S?0:1;a.c1=1;}}else{c=a.S;d=a.bg;if(d!==null){if(!c){e=new Mv;e.rE=a;e.qp=c;e.pK=d;e.py=b;Bj(e);a.bg=e;}else{e=new Mw;e.tV=a;e.ns=c;e.ng=d;e.mO=b;Bj(e);a.bg=e;}}else{if(c&&!a.c1&&
Kn(a.B)){d=new Ms;d.sF=a;d.no=b;Bj(d);a.bg=d;}else if(!c){d=new Mq;d.iE=a;d.hN=c;d.lH=b;Bj(d);a.bg=d;}else{d=new Mr;d.ju=a;d.hV=c;d.pE=b;Bj(d);a.bg=d;}a.ei=1;}}return a;}
function BL(a,b,c){var d,e,f,g,h;if(b>c){d=new BC;U(d);J(d);}a:{b:{if(!a.jh){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Ci(a,b);b=b+1|0;}}if(!a.c1)GO(a.B,b,c+1|0);else{d=a.B;c=c+1|0;if(b>c){d=new Bu;U(d);J(d);}e=d.bb;if(b<e){f=Z(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.v.data;h[g]=h[g]&(G2(d,b)|GF(d,f));}else{h=d.v.data;h[g]=h[g]&G2(d,b);e=g+1|0;while(e<c){d.v.data[e]=0;e=e+1|0;}if(f&31){h=d.v.data;h[c]=h[c]&GF(d,f);}}Gd(d);}}}}return a;}
function UI(a,b){var c,d,e;if(!a.F&&b.F)a.F=1;if(b.fa)a.fa=1;c=a.bL;if(!(c^b.bL)){if(!c)E6(a.E,b.E);else CR(a.E,b.E);}else if(c)E$(a.E,b.E);else{EP(a.E,b.E);CR(a.E,b.E);a.bL=1;}if(!a.ei&&CF(b)!==null){c=a.S;if(!(c^b.S)){if(!c)E6(a.B,CF(b));else CR(a.B,CF(b));}else if(c)E$(a.B,CF(b));else{EP(a.B,CF(b));CR(a.B,CF(b));a.S=1;}}else{c=a.S;d=a.bg;if(d!==null){if(!c){e=new Ml;e.rl=a;e.o3=c;e.pD=d;e.qd=b;Bj(e);a.bg=e;}else{e=new M9;e.rP=a;e.qa=c;e.kG=d;e.k0=b;Bj(e);a.bg=e;}}else{if(!a.c1&&Kn(a.B)){if(!c){d=new Mt;d.tX
=a;d.mD=b;Bj(d);a.bg=d;}else{d=new Mu;d.rU=a;d.pY=b;Bj(d);a.bg=d;}}else if(!c){d=new My;d.o8=a;d.nE=b;d.nk=c;Bj(d);a.bg=d;}else{d=new MA;d.n2=a;d.ol=b;d.ox=c;Bj(d);a.bg=d;}a.ei=1;}}}
function Td(a,b){var c,d,e;if(!a.F&&b.F)a.F=1;if(b.fa)a.fa=1;c=a.bL;if(!(c^b.bL)){if(!c)CR(a.E,b.E);else E6(a.E,b.E);}else if(!c)E$(a.E,b.E);else{EP(a.E,b.E);CR(a.E,b.E);a.bL=0;}if(!a.ei&&CF(b)!==null){c=a.S;if(!(c^b.S)){if(!c)CR(a.B,CF(b));else E6(a.B,CF(b));}else if(!c)E$(a.B,CF(b));else{EP(a.B,CF(b));CR(a.B,CF(b));a.S=0;}}else{c=a.S;d=a.bg;if(d!==null){if(!c){e=new Mn;e.rD=a;e.pb=c;e.ld=d;e.np=b;Bj(e);a.bg=e;}else{e=new Mo;e.rY=a;e.oG=c;e.ky=d;e.o2=b;Bj(e);a.bg=e;}}else{if(!a.c1&&Kn(a.B)){if(!c){d=new Mj;d.rV
=a;d.md=b;Bj(d);a.bg=d;}else{d=new Mk;d.tT=a;d.mj=b;Bj(d);a.bg=d;}}else if(!c){d=new Mp;d.q4=a;d.ql=b;d.oe=c;Bj(d);a.bg=d;}else{d=new Mi;d.ob=a;d.oN=b;d.nt=c;Bj(d);a.bg=d;}a.ei=1;}}}
function CI(a,b){var c;c=a.bg;if(c!==null)return a.S^c.j(b);return a.S^C7(a.B,b);}
function CF(a){if(!a.ei)return a.B;return null;}
function ADa(a){return a.E;}
function AJA(a){var b,c;if(a.bg!==null)return a;b=CF(a);c=new Mm;c.rk=a;c.gL=b;Bj(c);return D3(c,a.S);}
function AGn(a){var b,c,d;b=new M;O(b);c=Gh(a.B,0);while(c>=0){G_(b,FF(c));BB(b,124);c=Gh(a.B,c+1|0);}d=b.I;if(d>0)Sv(b,d-1|0);return N(b);}
function ADn(a){return a.fa;}
function HW(){var a=this;Bh.call(a);a.tN=null;a.tu=null;}
function DC(){Bw.call(this);this.D=null;}
function CT(a,b,c,d){Ja(a,c);a.D=b;a.f8=d;}
function AK3(a){return a.D;}
function AIC(a,b){return !a.D.bt(b)&&!a.d.bt(b)?0:1;}
function AJS(a,b){return 1;}
function AF3(a){var b;a.bM=1;b=a.d;if(b!==null&&!b.bM){b=b.eq();if(b!==null){a.d.bM=1;a.d=b;}a.d.dm();}b=a.D;if(b!==null){if(!b.bM){b=b.eq();if(b!==null){a.D.bM=1;a.D=b;}a.D.dm();}else if(b instanceof FL&&b.ds.h$)a.D=b.d;}}
function CJ(){DC.call(this);this.N=null;}
function AMQ(a,b,c){var d=new CJ();Eo(d,a,b,c);return d;}
function Eo(a,b,c,d){CT(a,b,c,d);a.N=b;}
function AAl(a,b,c,d){var e,f;e=0;a:{while((b+a.N.bz()|0)<=d.s){f=a.N.bc(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.N.bz()|0;e=e+(-1)|0;}return f;}
function Ex(){CJ.call(this);this.hs=null;}
function ALZ(a,b,c,d){var e=new Ex();Pa(e,a,b,c,d);return e;}
function Pa(a,b,c,d,e){Eo(a,c,d,e);a.hs=b;}
function AA2(a,b,c,d){var e,f,g,h,i;e=a.hs;f=e.dD;g=e.dz;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.N.bz()|0)>d.s)break a;i=a.N.bc(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.N.bz()|0;h=h+(-1)|0;}return i;}if((b+a.N.bz()|0)>d.s){d.cH=1;return (-1);}i=a.N.bc(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CC=F(DC);
function AAw(a,b,c,d){var e;if(!a.D.C(d))return a.d.c(b,c,d);e=a.D.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var D$=F(CJ);
function AFP(a,b,c,d){var e;e=a.D.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function ALg(a,b){a.d=b;a.D.H(b);}
var SI=F(CJ);
function AKN(a,b,c,d){while((b+a.N.bz()|0)<=d.s&&a.N.bc(b,c)>0){b=b+a.N.bz()|0;}return a.d.c(b,c,d);}
function AGl(a,b,c,d){var e,f,g;e=a.d.bQ(b,c,d);if(e<0)return (-1);f=e-a.N.bz()|0;while(f>=b&&a.N.bc(f,c)>0){g=f-a.N.bz()|0;e=f;f=g;}return e;}
function V(){var a=this;C.call(a);a.jA=null;a.iA=null;}
function Yu(a,b){if(!b&&a.jA===null)a.jA=a.x();else if(b&&a.iA===null)a.iA=D3(a.x(),1);if(b)return a.iA;return a.jA;}
var CU=F(BC);
function Le(){var a=this;FY.call(a);a.dD=0;a.dz=0;}
function AGs(a){var b,c,d,e,f;b=a.dD;c=a.dz;d=c==2147483647?B(29):Km(Y9(c));e=new M;O(e);BB(e,123);f=T(e,b);BB(f,44);BB(G(f,d),125);return N(e);}
var Mc=F(Bw);
function AE$(a,b,c,d){return b;}
function AG$(a,b){return 0;}
function To(){var a=this;C.call(a);a.v=null;a.bb=0;}
function ALf(){var a=new To();ABH(a);return a;}
function ABH(a){a.v=BS(0);}
function JR(a,b){var c,d;c=b/32|0;if(b>=a.bb){Hb(a,c+1|0);a.bb=b+1|0;}d=a.v.data;d[c]=d[c]|1<<(b%32|0);}
function GO(a,b,c){var d,e,f,g,h;d=BD(b,c);if(d>0){e=new Bu;U(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bb){Hb(a,f+1|0);a.bb=c;}if(d==f){g=a.v.data;g[d]=g[d]|GF(a,b)&G2(a,c);}else{g=a.v.data;g[d]=g[d]|GF(a,b);h=d+1|0;while(h<f){a.v.data[h]=(-1);h=h+1|0;}if(c&31){g=a.v.data;g[f]=g[f]|G2(a,c);}}}
function GF(a,b){return (-1)<<(b%32|0);}
function G2(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function KD(a,b){var c,d;c=b/32|0;d=a.v.data;if(c<d.length){d[c]=d[c]&IF((-2),b%32|0);if(b==(a.bb-1|0))Gd(a);}}
function C7(a,b){var c,d;c=b/32|0;d=a.v.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Gh(a,b){var c,d,e,f;c=a.bb;if(b>=c)return (-1);d=b/32|0;e=a.v.data;f=e[d]>>>(b%32|0)|0;if(f)return G8(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+G8(e[f])|0;f=f+1|0;}return (-1);}
function Hb(a,b){var c;c=a.v.data.length;if(c>=b)return;c=Bg((b*3|0)/2|0,(c*2|0)+1|0);a.v=ZG(a.v,c);}
function Gd(a){var b,c,d;b=(a.bb+31|0)/32|0;a.bb=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=LP(a.v.data[c]);if(d<32)break;c=c+(-1)|0;a.bb=a.bb-32|0;}a.bb=a.bb-d|0;}}
function CR(a,b){var c,d,e,f;c=Z(a.v.data.length,b.v.data.length);d=0;while(d<c){e=a.v.data;e[d]=e[d]&b.v.data[d];d=d+1|0;}while(true){f=a.v.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bb=Z(a.bb,b.bb);Gd(a);}
function E$(a,b){var c,d,e;c=Z(a.v.data.length,b.v.data.length);d=0;while(d<c){e=a.v.data;e[d]=e[d]&(b.v.data[d]^(-1));d=d+1|0;}Gd(a);}
function E6(a,b){var c,d,e;c=Bg(a.bb,b.bb);a.bb=c;Hb(a,(c+31|0)/32|0);c=Z(a.v.data.length,b.v.data.length);d=0;while(d<c){e=a.v.data;e[d]=e[d]|b.v.data[d];d=d+1|0;}}
function EP(a,b){var c,d,e;c=Bg(a.bb,b.bb);a.bb=c;Hb(a,(c+31|0)/32|0);c=Z(a.v.data.length,b.v.data.length);d=0;while(d<c){e=a.v.data;e[d]=e[d]^b.v.data[d];d=d+1|0;}Gd(a);}
function Kn(a){return a.bb?0:1;}
function K9(){var a=this;BJ.call(a);a.ml=null;a.rj=0;}
function N0(){var a=this;BJ.call(a);a.j0=null;a.jv=null;}
function X6(a,b){var c=new N0();ZC(c,a,b);return c;}
function ZC(a,b,c){BG(a);a.j0=b;a.jv=c;}
function AAY(a,b,c,d){var e,f,g,h,i;e=a.j0.c(b,c,d);if(e<0)a:{f=a.jv;g=d.ch;e=d.s;h=b+1|0;e=BD(h,e);if(e>0){d.cH=1;e=(-1);}else{i=L(c,b);if(!f.ml.j(i))e=(-1);else{if(Cs(i)){if(e<0&&CL(L(c,h))){e=(-1);break a;}}else if(CL(i)&&b>g&&Cs(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AGU(a,b){a.d=b;a.jv.d=b;a.j0.H(b);}
function ABz(a,b){return 1;}
function ABi(a,b){return 1;}
function Db(){var a=this;BJ.call(a);a.cT=null;a.sy=0;}
function AE8(a){var b=new Db();Q7(b,a);return b;}
function Q7(a,b){BG(a);a.cT=b.g_();a.sy=b.S;}
function AC3(a,b,c,d){var e,f,g,h;e=d.s;if(b<e){f=b+1|0;g=L(c,b);if(a.j(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(Gp(g,f)&&a.j(D4(g,f)))return a.d.c(b,c,d);}}return (-1);}
function ADx(a,b){return a.cT.j(b);}
function AAV(a,b){if(b instanceof Dt)return II(a.cT,b.eL);if(b instanceof DX)return II(a.cT,b.cB);if(b instanceof Db)return G6(a.cT,b.cT);if(!(b instanceof DP))return 1;return G6(a.cT,b.d3);}
function AE2(a){return a.cT;}
function AI6(a,b){a.d=b;}
function ADe(a,b){return 1;}
var HU=F(Db);
function AEQ(a,b){return a.cT.j(FP(FO(b)));}
function Vt(){var a=this;BO.call(a);a.m0=null;a.sg=0;}
function AD7(a){var b=new Vt();AGy(b,a);return b;}
function AGy(a,b){C$(a);a.m0=b.g_();a.sg=b.S;}
function AE_(a,b,c){return !a.m0.j(Es(D9(L(c,b))))?(-1):1;}
function DP(){var a=this;BO.call(a);a.d3=null;a.sS=0;}
function AJu(a){var b=new DP();AHu(b,a);return b;}
function AHu(a,b){C$(a);a.d3=b.g_();a.sS=b.S;}
function KH(a,b,c){return !a.d3.j(L(c,b))?(-1):1;}
function AHb(a,b){if(b instanceof DX)return II(a.d3,b.cB);if(b instanceof DP)return G6(a.d3,b.d3);if(!(b instanceof Db)){if(!(b instanceof Dt))return 1;return 0;}return G6(a.d3,b.cT);}
function MF(){var a=this;BJ.call(a);a.fu=null;a.jR=null;a.hq=0;}
function AJD(a,b){var c=new MF();AAy(c,a,b);return c;}
function AAy(a,b,c){BG(a);a.fu=b;a.hq=c;}
function AFO(a,b){a.d=b;}
function N9(a){if(a.jR===null)a.jR=E_(a.fu);return a.jR;}
function AAb(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.s;f=BS(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?EB([k,l]):EB([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.hq;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.fu.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.hq==3){k=f[0];m=a.fu.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.hq==2){b=f[0];m=a.fu.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function ABs(a,b){return b instanceof MF&&!Br(N9(b),N9(a))?0:1;}
function AJC(a,b){return 1;}
function DX(){BO.call(this);this.cB=0;}
function VW(a){var b=new DX();AHx(b,a);return b;}
function AHx(a,b){C$(a);a.cB=b;}
function AEZ(a){return 1;}
function AD1(a,b,c){return a.cB!=L(c,b)?(-1):1;}
function AC0(a,b,c,d){var e,f,g;if(!(c instanceof BA))return Gz(a,b,c,d);e=d.s;while(true){if(b>=e)return (-1);f=FU(c,a.cB,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AE4(a,b,c,d,e){var f;if(!(d instanceof BA))return GJ(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Ff(d,a.cB,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AJx(a,b){if(b instanceof DX)return b.cB!=a.cB?0:1;if(!(b instanceof DP)){if(b instanceof Db)return b.j(a.cB);if(!(b instanceof Dt))return 1;return 0;}return KH(b,0,Tq(a.cB))<=0?0:1;}
function Zs(){BO.call(this);this.kq=0;}
function AH0(a){var b=new Zs();AGj(b,a);return b;}
function AGj(a,b){C$(a);a.kq=Es(D9(b));}
function Z9(a,b,c){return a.kq!=Es(D9(L(c,b)))?(-1):1;}
function UJ(){var a=this;BO.call(a);a.qh=0;a.lc=0;}
function ABP(a){var b=new UJ();AIf(b,a);return b;}
function AIf(a,b){C$(a);a.qh=b;a.lc=Gw(b);}
function AAq(a,b,c){return a.qh!=L(c,b)&&a.lc!=L(c,b)?(-1):1;}
function EI(){var a=this;BJ.call(a);a.fZ=0;a.im=null;a.hR=null;a.hL=0;}
function ANy(a,b){var c=new EI();L2(c,a,b);return c;}
function L2(a,b,c){BG(a);a.fZ=1;a.hR=b;a.hL=c;}
function AKw(a,b){a.d=b;}
function AGW(a,b,c,d){var e,f,g,h,i,j,k,l;e=BS(4);f=d.s;if(b>=f)return (-1);g=I1(a,b,c,f);h=b+a.fZ|0;i=Y$(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;DT(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=I1(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(Y$(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.fZ|0;if(h>=f){b=k;break a;}g=I1(a,h,c,f);b=k;}}}if(b!=a.hL)return (-1);i=e.data;g=0;while(true){if(g>=
b)return a.d.c(h,c,d);if(i[g]!=a.hR.data[g])break;g=g+1|0;}return (-1);}
function Tc(a){var b,c;if(a.im===null){b=new M;O(b);c=0;while(c<a.hL){G_(b,FF(a.hR.data[c]));c=c+1|0;}a.im=N(b);}return a.im;}
function I1(a,b,c,d){var e,f,g;a.fZ=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(Gp(e,f)){g=BN(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Cs(g[0])&&CL(g[1])?D4(g[0],g[1]):g[0];a.fZ=2;}}return e;}
function AFa(a,b){return b instanceof EI&&!Br(Tc(b),Tc(a))?0:1;}
function AHX(a,b){return 1;}
var TG=F(EI);
var QG=F(EI);
var Uw=F(CC);
function ACb(a,b,c,d){var e;while(true){e=a.D.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var Ns=F(CC);
function AGd(a,b,c,d){var e;e=a.D.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.D.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var E9=F(CC);
function AI3(a,b,c,d){var e;if(!a.D.C(d))return a.d.c(b,c,d);e=a.D.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AJ0(a,b){a.d=b;a.D.H(b);}
var Na=F(E9);
function AE1(a,b,c,d){var e;e=a.D.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AGu(a,b){a.d=b;}
function EF(){var a=this;CC.call(a);a.eX=null;a.cJ=0;}
function AQE(a,b,c,d,e){var f=new EF();HS(f,a,b,c,d,e);return f;}
function HS(a,b,c,d,e,f){CT(a,c,d,e);a.eX=b;a.cJ=f;}
function AK_(a,b,c,d){var e,f;e=Lb(d,a.cJ);if(!a.D.C(d))return a.d.c(b,c,d);if(e>=a.eX.dz)return a.d.c(b,c,d);f=a.cJ;e=e+1|0;DM(d,f,e);f=a.D.c(b,c,d);if(f>=0){DM(d,a.cJ,0);return f;}f=a.cJ;e=e+(-1)|0;DM(d,f,e);if(e>=a.eX.dD)return a.d.c(b,c,d);DM(d,a.cJ,0);return (-1);}
var Lp=F(EF);
function AEq(a,b,c,d){var e,f,g;e=0;f=a.eX.dz;a:{while(true){g=a.D.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.eX.dD)return (-1);return a.d.c(b,c,d);}
var OO=F(CC);
function AKF(a,b,c,d){var e;if(!a.D.C(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.D.c(b,c,d);}
var N8=F(E9);
function ABA(a,b,c,d){var e;if(!a.D.C(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.D.c(b,c,d);return e;}
var Rx=F(EF);
function AAN(a,b,c,d){var e,f,g;e=Lb(d,a.cJ);if(!a.D.C(d))return a.d.c(b,c,d);f=a.eX;if(e>=f.dz){DM(d,a.cJ,0);return a.d.c(b,c,d);}if(e<f.dD){DM(d,a.cJ,e+1|0);g=a.D.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){DM(d,a.cJ,0);return g;}DM(d,a.cJ,e+1|0);g=a.D.c(b,c,d);}return g;}
var OP=F(DC);
function AK1(a,b,c,d){var e;e=d.s;if(e>b)return a.d.bW(b,e,c,d);return a.d.c(b,c,d);}
function AJd(a,b,c,d){var e;e=d.s;if(a.d.bW(b,e,c,d)>=0)return b;return (-1);}
function Mh(){DC.call(this);this.ix=null;}
function AHe(a,b,c,d){var e,f;e=d.s;f=Rz(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.bW(b,e,c,d);return a.d.c(b,c,d);}
function AAg(a,b,c,d){var e,f,g,h;e=d.s;f=a.d.bQ(b,c,d);if(f<0)return (-1);g=Rz(a,f,e,c);if(g>=0)e=g;g=Bg(f,a.d.bW(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.ix.f5(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Rz(a,b,c,d){while(true){if(b>=c)return (-1);if(a.ix.f5(L(d,b)))break;b=b+1|0;}return b;}
var Ek=F();
var AQF=null;var AQG=null;function Ne(b){var c;if(!(b&1)){c=AQG;if(c!==null)return c;c=new RR;AQG=c;return c;}c=AQF;if(c!==null)return c;c=new RQ;AQF=c;return c;}
var Uy=F(CJ);
function AAQ(a,b,c,d){var e;a:{while(true){if((b+a.N.bz()|0)>d.s)break a;e=a.N.bc(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var SE=F(D$);
function AGc(a,b,c,d){var e;if((b+a.N.bz()|0)<=d.s){e=a.N.bc(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var M2=F(Ex);
function AIH(a,b,c,d){var e,f,g,h,i;e=a.hs;f=e.dD;g=e.dz;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.N.bz()|0)>d.s)break a;i=a.N.bc(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.N.bz()|0)>d.s){d.cH=1;return (-1);}i=a.N.bc(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var N5=F(CJ);
function AG8(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.N.bz()|0)<=d.s){e=a.N.bc(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var QR=F(D$);
function AAU(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.D.c(b,c,d);}
var Os=F(Ex);
function AIV(a,b,c,d){var e,f,g,h,i,j;e=a.hs;f=e.dD;g=e.dz;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.N.bz()|0)<=d.s){i=a.N.bc(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.N.bz()|0)>d.s){d.cH=1;return (-1);}j=a.N.bc(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var IU=F(Bw);
function AFt(a,b,c,d){if(b&&!(d.ek&&b==d.ch))return (-1);return a.d.c(b,c,d);}
function AEB(a,b){return 0;}
function V7(){Bw.call(this);this.pM=0;}
function AJt(a){var b=new V7();AEU(b,a);return b;}
function AEU(a,b){BG(a);a.pM=b;}
function ABf(a,b,c,d){var e,f,g;e=b<d.s?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.g3?0:d.ch;return (e!=32&&!N$(a,e,b,g,c)?0:1)^(f!=32&&!N$(a,f,b-1|0,g,c)?0:1)^a.pM?(-1):a.d.c(b,c,d);}
function ABp(a,b){return 0;}
function N$(a,b,c,d,e){var f;if(!H8(b)&&b!=95){a:{if(Ch(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(H8(f))return 0;if(Ch(f)!=6)return 1;}}return 1;}return 0;}
var Mf=F(Bw);
function AET(a,b,c,d){if(b!=d.f_)return (-1);return a.d.c(b,c,d);}
function AK7(a,b){return 0;}
function Tr(){Bw.call(this);this.e2=0;}
function AM1(a){var b=new Tr();YZ(b,a);return b;}
function YZ(a,b){BG(a);a.e2=b;}
function AHD(a,b,c,d){var e,f,g;e=!d.ek?I(c):d.s;if(b>=e){BE(d,a.e2,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BE(d,a.e2,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BE(d,a.e2,0);return a.d.c(b,c,d);}
function AB3(a,b){var c;c=!CY(b,a.e2)?0:1;BE(b,a.e2,(-1));return c;}
var S9=F(Bw);
function AGQ(a,b,c,d){if(b<(d.g3?I(c):d.s))return (-1);d.cH=1;d.tf=1;return a.d.c(b,c,d);}
function Z7(a,b){return 0;}
function LB(){Bw.call(this);this.nx=null;}
function ABW(a,b,c,d){a:{if(b!=d.s){if(!b)break a;if(d.ek&&b==d.ch)break a;if(a.nx.oJ(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function ADK(a,b){return 0;}
var Ze=F(BJ);
function ANh(){var a=new Ze();AGE(a);return a;}
function AGE(a){BG(a);}
function AKI(a,b,c,d){var e,f,g,h;e=d.s;f=b+1|0;if(f>e){d.cH=1;return (-1);}g=L(c,b);if(Cs(g)){h=b+2|0;if(h<=e&&Gp(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function ABu(a,b){a.d=b;}
function AGz(a){return (-2147483602);}
function ABt(a,b){return 1;}
function Vy(){BJ.call(this);this.i4=null;}
function AMX(a){var b=new Vy();AB1(b,a);return b;}
function AB1(a,b){BG(a);a.i4=b;}
function AGI(a,b,c,d){var e,f,g,h;e=d.s;f=b+1|0;if(f>e){d.cH=1;return (-1);}g=L(c,b);if(Cs(g)){b=b+2|0;if(b<=e){h=L(c,f);if(Gp(g,h))return a.i4.f5(D4(g,h))?(-1):a.d.c(b,c,d);}}return a.i4.f5(g)?(-1):a.d.c(f,c,d);}
function AIr(a,b){a.d=b;}
function Z2(a){return (-2147483602);}
function AKR(a,b){return 1;}
function Y8(){Bw.call(this);this.fR=0;}
function AMr(a){var b=new Y8();ADF(b,a);return b;}
function ADF(a,b){BG(a);a.fR=b;}
function AFd(a,b,c,d){var e;e=!d.ek?I(c):d.s;if(b>=e){BE(d,a.fR,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BE(d,a.fR,1);return a.d.c(b+1|0,c,d);}return (-1);}
function ADE(a,b){var c;c=!CY(b,a.fR)?0:1;BE(b,a.fR,(-1));return c;}
function Xx(){Bw.call(this);this.fY=0;}
function AMc(a){var b=new Xx();AD8(b,a);return b;}
function AD8(a,b){BG(a);a.fY=b;}
function AGN(a,b,c,d){if((!d.ek?I(c)-b|0:d.s-b|0)<=0){BE(d,a.fY,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BE(d,a.fY,1);return a.d.c(b+1|0,c,d);}
function ADu(a,b){var c;c=!CY(b,a.fY)?0:1;BE(b,a.fY,(-1));return c;}
function UH(){Bw.call(this);this.eA=0;}
function ALz(a){var b=new UH();ALc(b,a);return b;}
function ALc(a,b){BG(a);a.eA=b;}
function AEt(a,b,c,d){var e,f,g;e=!d.ek?I(c)-b|0:d.s-b|0;if(!e){BE(d,a.eA,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BE(d,a.eA,0);return a.d.c(b,c,d);case 13:if(g!=10){BE(d,a.eA,0);return a.d.c(b,c,d);}BE(d,a.eA,0);return a.d.c(b,c,d);default:}return (-1);}
function AB7(a,b){var c;c=!CY(b,a.eA)?0:1;BE(b,a.eA,(-1));return c;}
function F_(){var a=this;BJ.call(a);a.kU=0;a.fp=0;}
function ANs(a,b){var c=new F_();MO(c,a,b);return c;}
function MO(a,b,c){BG(a);a.kU=b;a.fp=c;}
function AAR(a,b,c,d){var e,f,g,h;e=Fn(a,d);if(e!==null&&(b+I(e)|0)<=d.s){f=0;while(true){if(f>=I(e)){BE(d,a.fp,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&Gw(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AHS(a,b){a.d=b;}
function Fn(a,b){var c,d;c=a.kU;d=EV(b,c);c=Hf(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.i8)?B5(b.i8,d,c):null;}
function AH_(a,b){var c;c=!CY(b,a.fp)?0:1;BE(b,a.fp,(-1));return c;}
var Za=F(F_);
function ALG(a,b){var c=new Za();AJT(c,a,b);return c;}
function AJT(a,b,c){MO(a,b,c);}
function ACa(a,b,c,d){var e,f;e=Fn(a,d);if(e!==null&&(b+I(e)|0)<=d.s){f=!Q6(c,e,b)?(-1):I(e);if(f<0)return (-1);BE(d,a.fp,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AJK(a,b,c,d){var e,f;e=Fn(a,d);f=d.ch;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=V6(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AAD(a,b,c,d,e){var f,g;f=Fn(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Z(c,I(d)-I(f)|0);b:{c:while(true){if(g<0){g=(-1);break b;}c=0;while(true){if(c>=I(f))break c;if(L(d,g+c|0)!=L(f,c))break;c=c+1|0;}g=g+(-1)|0;}}if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AF8(a,b){return 1;}
var WL=F(F_);
function AMd(a,b){var c=new WL();ADB(c,a,b);return c;}
function ADB(a,b,c){MO(a,b,c);}
function AFF(a,b,c,d){var e,f;e=Fn(a,d);if(e!==null&&(b+I(e)|0)<=d.s){f=0;while(true){if(f>=I(e)){BE(d,a.fp,I(e));return a.d.c(b+I(e)|0,c,d);}if(Es(D9(L(e,f)))!=Es(D9(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Mb=F(Fy);
function ADo(a,b,c,d,e){Lh(a,b,c,d,e);return a;}
function ABk(a,b,c,d){Tz(a,b,c,d);return a;}
function ABG(a,b){Ia(a,b);}
function AJe(a,b,c){TP(a,b,c);return a;}
function OS(){var a=this;BO.call(a);a.b0=null;a.ip=null;a.jf=null;}
function ACr(a,b,c){return !IR(a,c,b)?(-1):a.bm;}
function ABa(a,b,c,d){var e,f,g;e=d.s;while(true){if(b>e)return (-1);f=L(a.b0,a.bm-1|0);a:{while(true){g=a.bm;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&IR(a,c,b))break;b=b+PB(a.ip,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bm|0,c,d)>=0)break;b=b+1|0;}return b;}
function ADI(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.b0,0);g=(I(d)-c|0)-a.bm|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&IR(a,d,c))break;c=c-PB(a.jf,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bm|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AEb(a,b){var c;if(b instanceof DX)return b.cB!=L(a.b0,0)?0:1;if(b instanceof DP)return KH(b,0,B5(a.b0,0,1))<=0?0:1;if(!(b instanceof Db)){if(!(b instanceof Dt))return 1;return I(a.b0)>1&&b.eL==D4(L(a.b0,0),L(a.b0,1))?1:0;}a:{b:{b=b;if(!b.j(L(a.b0,0))){if(I(a.b0)<=1)break b;if(!b.j(D4(L(a.b0,0),L(a.b0,1))))break b;}c=1;break a;}c=0;}return c;}
function IR(a,b,c){var d;d=0;while(d<a.bm){if(L(b,d+c|0)!=L(a.b0,d))return 0;d=d+1|0;}return 1;}
function UF(){BO.call(this);this.g6=null;}
function ANv(a){var b=new UF();AJy(b,a);return b;}
function AJy(a,b){var c,d,e;C$(a);c=new M;O(c);d=0;while(true){e=BD(d,b.I);if(e>=0){a.g6=N(c);a.bm=c.I;return;}if(d<0)break;if(e>=0)break;BB(c,Es(D9(b.w.data[d])));d=d+1|0;}b=new Bu;U(b);J(b);}
function AFL(a,b,c){var d;d=0;while(true){if(d>=I(a.g6))return I(a.g6);if(L(a.g6,d)!=Es(D9(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Lv(){BO.call(this);this.fQ=null;}
function AIK(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.fQ))return I(a.fQ);e=L(a.fQ,d);f=b+d|0;if(e!=L(c,f)&&Gw(L(a.fQ,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var F$=F();
var AQH=null;var AQI=null;var AQD=null;function AIi(){AIi=Bk(F$);ACK();}
function ACK(){AQH=AM$();AQI=AMk();AQD=H($rt_arraycls(C),[H(C,[B(357),ANt()]),H(C,[B(358),ALw()]),H(C,[B(359),AM7()]),H(C,[B(360),ANd()]),H(C,[B(361),AQI]),H(C,[B(362),AMu()]),H(C,[B(363),AMi()]),H(C,[B(364),ALJ()]),H(C,[B(365),ALF()]),H(C,[B(366),ALP()]),H(C,[B(367),AL1()]),H(C,[B(368),ALN()]),H(C,[B(369),AMP()]),H(C,[B(370),ALp()]),H(C,[B(371),ANa()]),H(C,[B(372),AL0()]),H(C,[B(373),AMs()]),H(C,[B(374),ALY()]),H(C,[B(375),AMt()]),H(C,[B(376),ALS()]),H(C,[B(377),ANg()]),H(C,[B(378),ALV()]),H(C,[B(379),AMy()]),
H(C,[B(380),AM5()]),H(C,[B(381),AM2()]),H(C,[B(382),ANe()]),H(C,[B(383),ALR()]),H(C,[B(384),AMV()]),H(C,[B(385),AQH]),H(C,[B(386),AMD()]),H(C,[B(387),ALK()]),H(C,[B(388),AQH]),H(C,[B(389),ALl()]),H(C,[B(390),AQI]),H(C,[B(391),AL9()]),H(C,[B(392),P(0,127)]),H(C,[B(393),P(128,255)]),H(C,[B(394),P(256,383)]),H(C,[B(395),P(384,591)]),H(C,[B(396),P(592,687)]),H(C,[B(397),P(688,767)]),H(C,[B(398),P(768,879)]),H(C,[B(399),P(880,1023)]),H(C,[B(400),P(1024,1279)]),H(C,[B(401),P(1280,1327)]),H(C,[B(402),P(1328,1423)]),
H(C,[B(403),P(1424,1535)]),H(C,[B(404),P(1536,1791)]),H(C,[B(405),P(1792,1871)]),H(C,[B(406),P(1872,1919)]),H(C,[B(407),P(1920,1983)]),H(C,[B(408),P(2304,2431)]),H(C,[B(409),P(2432,2559)]),H(C,[B(410),P(2560,2687)]),H(C,[B(411),P(2688,2815)]),H(C,[B(412),P(2816,2943)]),H(C,[B(413),P(2944,3071)]),H(C,[B(414),P(3072,3199)]),H(C,[B(415),P(3200,3327)]),H(C,[B(416),P(3328,3455)]),H(C,[B(417),P(3456,3583)]),H(C,[B(418),P(3584,3711)]),H(C,[B(419),P(3712,3839)]),H(C,[B(420),P(3840,4095)]),H(C,[B(421),P(4096,4255)]),
H(C,[B(422),P(4256,4351)]),H(C,[B(423),P(4352,4607)]),H(C,[B(424),P(4608,4991)]),H(C,[B(425),P(4992,5023)]),H(C,[B(426),P(5024,5119)]),H(C,[B(427),P(5120,5759)]),H(C,[B(428),P(5760,5791)]),H(C,[B(429),P(5792,5887)]),H(C,[B(430),P(5888,5919)]),H(C,[B(431),P(5920,5951)]),H(C,[B(432),P(5952,5983)]),H(C,[B(433),P(5984,6015)]),H(C,[B(434),P(6016,6143)]),H(C,[B(435),P(6144,6319)]),H(C,[B(436),P(6400,6479)]),H(C,[B(437),P(6480,6527)]),H(C,[B(438),P(6528,6623)]),H(C,[B(439),P(6624,6655)]),H(C,[B(440),P(6656,6687)]),
H(C,[B(441),P(7424,7551)]),H(C,[B(442),P(7552,7615)]),H(C,[B(443),P(7616,7679)]),H(C,[B(444),P(7680,7935)]),H(C,[B(445),P(7936,8191)]),H(C,[B(446),P(8192,8303)]),H(C,[B(447),P(8304,8351)]),H(C,[B(448),P(8352,8399)]),H(C,[B(449),P(8400,8447)]),H(C,[B(450),P(8448,8527)]),H(C,[B(451),P(8528,8591)]),H(C,[B(452),P(8592,8703)]),H(C,[B(453),P(8704,8959)]),H(C,[B(454),P(8960,9215)]),H(C,[B(455),P(9216,9279)]),H(C,[B(456),P(9280,9311)]),H(C,[B(457),P(9312,9471)]),H(C,[B(458),P(9472,9599)]),H(C,[B(459),P(9600,9631)]),
H(C,[B(460),P(9632,9727)]),H(C,[B(461),P(9728,9983)]),H(C,[B(462),P(9984,10175)]),H(C,[B(463),P(10176,10223)]),H(C,[B(464),P(10224,10239)]),H(C,[B(465),P(10240,10495)]),H(C,[B(466),P(10496,10623)]),H(C,[B(467),P(10624,10751)]),H(C,[B(468),P(10752,11007)]),H(C,[B(469),P(11008,11263)]),H(C,[B(470),P(11264,11359)]),H(C,[B(471),P(11392,11519)]),H(C,[B(472),P(11520,11567)]),H(C,[B(473),P(11568,11647)]),H(C,[B(474),P(11648,11743)]),H(C,[B(475),P(11776,11903)]),H(C,[B(476),P(11904,12031)]),H(C,[B(477),P(12032,12255)]),
H(C,[B(478),P(12272,12287)]),H(C,[B(479),P(12288,12351)]),H(C,[B(480),P(12352,12447)]),H(C,[B(481),P(12448,12543)]),H(C,[B(482),P(12544,12591)]),H(C,[B(483),P(12592,12687)]),H(C,[B(484),P(12688,12703)]),H(C,[B(485),P(12704,12735)]),H(C,[B(486),P(12736,12783)]),H(C,[B(487),P(12784,12799)]),H(C,[B(488),P(12800,13055)]),H(C,[B(489),P(13056,13311)]),H(C,[B(490),P(13312,19893)]),H(C,[B(491),P(19904,19967)]),H(C,[B(492),P(19968,40959)]),H(C,[B(493),P(40960,42127)]),H(C,[B(494),P(42128,42191)]),H(C,[B(495),P(42752,
42783)]),H(C,[B(496),P(43008,43055)]),H(C,[B(497),P(44032,55203)]),H(C,[B(498),P(55296,56191)]),H(C,[B(499),P(56192,56319)]),H(C,[B(500),P(56320,57343)]),H(C,[B(501),P(57344,63743)]),H(C,[B(502),P(63744,64255)]),H(C,[B(503),P(64256,64335)]),H(C,[B(504),P(64336,65023)]),H(C,[B(505),P(65024,65039)]),H(C,[B(506),P(65040,65055)]),H(C,[B(507),P(65056,65071)]),H(C,[B(508),P(65072,65103)]),H(C,[B(509),P(65104,65135)]),H(C,[B(510),P(65136,65279)]),H(C,[B(511),P(65280,65519)]),H(C,[B(512),P(0,1114111)]),H(C,[B(513),
ALO()]),H(C,[B(514),BF(0,1)]),H(C,[B(515),Ht(62,1)]),H(C,[B(516),BF(1,1)]),H(C,[B(517),BF(2,1)]),H(C,[B(518),BF(3,0)]),H(C,[B(519),BF(4,0)]),H(C,[B(520),BF(5,1)]),H(C,[B(521),Ht(448,1)]),H(C,[B(522),BF(6,1)]),H(C,[B(523),BF(7,0)]),H(C,[B(524),BF(8,1)]),H(C,[B(525),Ht(3584,1)]),H(C,[B(526),BF(9,1)]),H(C,[B(527),BF(10,1)]),H(C,[B(528),BF(11,1)]),H(C,[B(529),Ht(28672,0)]),H(C,[B(530),BF(12,0)]),H(C,[B(531),BF(13,0)]),H(C,[B(532),BF(14,0)]),H(C,[B(533),AMe(983040,1,1)]),H(C,[B(534),BF(15,0)]),H(C,[B(535),BF(16,
1)]),H(C,[B(536),BF(18,1)]),H(C,[B(537),AMq(19,0,1)]),H(C,[B(538),Ht(1643118592,1)]),H(C,[B(539),BF(20,0)]),H(C,[B(540),BF(21,0)]),H(C,[B(541),BF(22,0)]),H(C,[B(542),BF(23,0)]),H(C,[B(543),BF(24,1)]),H(C,[B(544),Ht(2113929216,1)]),H(C,[B(545),BF(25,1)]),H(C,[B(546),BF(26,0)]),H(C,[B(547),BF(27,0)]),H(C,[B(548),BF(28,1)]),H(C,[B(549),BF(29,0)]),H(C,[B(550),BF(30,0)])]);}
function KQ(){BO.call(this);this.nb=0;}
function AIR(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.nb!=FP(FO(D4(e,d)))?(-1):2;}
function Jm(){BJ.call(this);this.e9=0;}
function AGD(a){var b=new Jm();ABD(b,a);return b;}
function ABD(a,b){BG(a);a.e9=b;}
function AG2(a,b){a.d=b;}
function AB4(a,b,c,d){var e,f;e=b+1|0;if(e>d.s){d.cH=1;return (-1);}f=L(c,b);if(b>d.ch&&Cs(L(c,b-1|0)))return (-1);if(a.e9!=f)return (-1);return a.d.c(e,c,d);}
function AD_(a,b,c,d){var e,f,g,h;if(!(c instanceof BA))return Gz(a,b,c,d);e=d.ch;f=d.s;while(true){if(b>=f)return (-1);g=FU(c,a.e9,b);if(g<0)return (-1);if(g>e&&Cs(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function ACx(a,b,c,d,e){var f,g;if(!(d instanceof BA))return GJ(a,b,c,d,e);f=e.ch;a:{while(true){if(c<b)return (-1);g=Ff(d,a.e9,c);if(g<0)break a;if(g<b)break a;if(g>f&&Cs(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AAA(a,b){if(b instanceof DX)return 0;if(b instanceof DP)return 0;if(b instanceof Db)return 0;if(b instanceof Dt)return 0;if(b instanceof JD)return 0;if(!(b instanceof Jm))return 1;return b.e9!=a.e9?0:1;}
function AJl(a,b){return 1;}
function JD(){BJ.call(this);this.eS=0;}
function AEw(a){var b=new JD();AGK(b,a);return b;}
function AGK(a,b){BG(a);a.eS=b;}
function ABF(a,b){a.d=b;}
function AAk(a,b,c,d){var e,f,g,h;e=d.s;f=b+1|0;g=BD(f,e);if(g>0){d.cH=1;return (-1);}h=L(c,b);if(g<0&&CL(L(c,f)))return (-1);if(a.eS!=h)return (-1);return a.d.c(f,c,d);}
function AHk(a,b,c,d){var e,f;if(!(c instanceof BA))return Gz(a,b,c,d);e=d.s;while(true){if(b>=e)return (-1);f=FU(c,a.eS,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CL(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function AII(a,b,c,d,e){var f,g;if(!(d instanceof BA))return GJ(a,b,c,d,e);f=e.s;a:{while(true){if(c<b)return (-1);g=Ff(d,a.eS,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CL(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ACs(a,b){if(b instanceof DX)return 0;if(b instanceof DP)return 0;if(b instanceof Db)return 0;if(b instanceof Dt)return 0;if(b instanceof Jm)return 0;if(!(b instanceof JD))return 1;return b.eS!=a.eS?0:1;}
function AHr(a,b){return 1;}
function Dt(){var a=this;BO.call(a);a.hD=0;a.gJ=0;a.eL=0;}
function AIa(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.hD==e&&a.gJ==d?2:(-1);}
function AGo(a,b,c,d){var e,f;if(!(c instanceof BA))return Gz(a,b,c,d);e=d.s;while(b<e){b=FU(c,a.hD,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.gJ==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function ABE(a,b,c,d,e){var f;if(!(d instanceof BA))return GJ(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Ff(d,a.gJ,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.hD==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AH2(a,b){if(b instanceof Dt)return b.eL!=a.eL?0:1;if(b instanceof Db)return b.j(a.eL);if(b instanceof DX)return 0;if(!(b instanceof DP))return 1;return 0;}
var RQ=F(Ek);
function ABQ(a,b){return b!=10?0:1;}
function AH7(a,b,c){return b!=10?0:1;}
var RR=F(Ek);
function AIW(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AKp(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function Yk(){var a=this;C.call(a);a.ke=null;a.hU=null;a.fE=0;a.qQ=0;}
function AGx(a){var b=new Yk();AES(b,a);return b;}
function AES(a,b){var c,d;while(true){c=a.fE;if(b<c)break;a.fE=c<<1|1;}d=c<<1|1;a.fE=d;d=d+1|0;a.ke=BS(d);a.hU=BS(d);a.qQ=b;}
function Ox(a,b,c){var d,e,f,g;d=0;e=a.fE;f=b&e;while(true){g=a.ke.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.hU.data[f]=c;}
function PB(a,b){var c,d,e,f;c=a.fE;d=b&c;e=0;while(true){f=a.ke.data[d];if(!f)break;if(f==b)return a.hU.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.qQ;}
var UY=F();
var Jk=F(V);
function AM$(){var a=new Jk();AEr(a);return a;}
function AEr(a){}
function WT(a){return Ci(BL(CZ(),9,13),32);}
var Io=F(V);
function AMk(){var a=new Io();AJi(a);return a;}
function AJi(a){}
function Xt(a){return BL(CZ(),48,57);}
var Yd=F(V);
function ANt(){var a=new Yd();ADR(a);return a;}
function ADR(a){}
function AIt(a){return BL(CZ(),97,122);}
var YF=F(V);
function ALw(){var a=new YF();AEY(a);return a;}
function AEY(a){}
function AJq(a){return BL(CZ(),65,90);}
var YI=F(V);
function AM7(){var a=new YI();ABb(a);return a;}
function ABb(a){}
function AC4(a){return BL(CZ(),0,127);}
var Jf=F(V);
function ANd(){var a=new Jf();ACc(a);return a;}
function ACc(a){}
function VA(a){return BL(BL(CZ(),97,122),65,90);}
var JO=F(Jf);
function AMu(){var a=new JO();AEy(a);return a;}
function AEy(a){}
function Wr(a){return BL(VA(a),48,57);}
var ZU=F(V);
function AMi(){var a=new ZU();AGf(a);return a;}
function AGf(a){}
function AD9(a){return BL(BL(BL(CZ(),33,64),91,96),123,126);}
var KE=F(JO);
function ALJ(){var a=new KE();AHL(a);return a;}
function AHL(a){}
function UC(a){return BL(BL(BL(Wr(a),33,64),91,96),123,126);}
var W6=F(KE);
function ALF(){var a=new W6();AJa(a);return a;}
function AJa(a){}
function AF4(a){return Ci(UC(a),32);}
var Xo=F(V);
function ALP(){var a=new Xo();AIL(a);return a;}
function AIL(a){}
function ACl(a){return Ci(Ci(CZ(),32),9);}
var V0=F(V);
function AL1(){var a=new V0();AKc(a);return a;}
function AKc(a){}
function AF0(a){return Ci(BL(CZ(),0,31),127);}
var VJ=F(V);
function ALN(){var a=new VJ();ABo(a);return a;}
function ABo(a){}
function AKs(a){return BL(BL(BL(CZ(),48,57),97,102),65,70);}
var YL=F(V);
function AMP(){var a=new YL();AA1(a);return a;}
function AA1(a){}
function AGw(a){var b;b=new PO;b.sx=a;Bj(b);b.F=1;return b;}
var Z1=F(V);
function ALp(){var a=new Z1();AH5(a);return a;}
function AH5(a){}
function AAd(a){var b;b=new K6;b.sH=a;Bj(b);b.F=1;return b;}
var Yl=F(V);
function ANa(){var a=new Yl();ABd(a);return a;}
function ABd(a){}
function AEx(a){var b;b=new O5;b.sd=a;Bj(b);return b;}
var X9=F(V);
function AL0(){var a=new X9();AF1(a);return a;}
function AF1(a){}
function AId(a){var b;b=new O4;b.rW=a;Bj(b);return b;}
var Y2=F(V);
function AMs(){var a=new Y2();AB_(a);return a;}
function AB_(a){}
function ACi(a){var b;b=new Tg;b.tl=a;Bj(b);GO(b.E,0,2048);b.F=1;return b;}
var Vc=F(V);
function ALY(){var a=new Vc();ABM(a);return a;}
function ABM(a){}
function ACG(a){var b;b=new MS;b.sT=a;Bj(b);b.F=1;return b;}
var UV=F(V);
function AMt(){var a=new UV();AFI(a);return a;}
function AFI(a){}
function AKk(a){var b;b=new L6;b.tP=a;Bj(b);b.F=1;return b;}
var Yp=F(V);
function ALS(){var a=new Yp();AGg(a);return a;}
function AGg(a){}
function Z$(a){var b;b=new Oe;b.sz=a;Bj(b);return b;}
var Yx=F(V);
function ANg(){var a=new Yx();AEj(a);return a;}
function AEj(a){}
function AFh(a){var b;b=new KX;b.q_=a;Bj(b);b.F=1;return b;}
var Wj=F(V);
function ALV(){var a=new Wj();AAF(a);return a;}
function AAF(a){}
function ACN(a){var b;b=new K4;b.sW=a;Bj(b);b.F=1;return b;}
var Xs=F(V);
function AMy(){var a=new Xs();ABT(a);return a;}
function ABT(a){}
function ADM(a){var b;b=new LU;b.ti=a;Bj(b);b.F=1;return b;}
var Zz=F(V);
function AM5(){var a=new Zz();AFn(a);return a;}
function AFn(a){}
function AFj(a){var b;b=new Nh;b.tA=a;Bj(b);b.F=1;return b;}
var Yw=F(V);
function AM2(){var a=new Yw();AGr(a);return a;}
function AGr(a){}
function AJE(a){var b;b=new Np;b.sf=a;Bj(b);return b;}
var WJ=F(V);
function ANe(){var a=new WJ();ABN(a);return a;}
function ABN(a){}
function AHz(a){var b;b=new QC;b.s2=a;Bj(b);return b;}
var Wh=F(V);
function ALR(){var a=new Wh();AIe(a);return a;}
function AIe(a){}
function AGp(a){var b;b=new Pm;b.rf=a;Bj(b);b.F=1;return b;}
var ZY=F(V);
function AMV(){var a=new ZY();AEd(a);return a;}
function AEd(a){}
function AIn(a){var b;b=new Ld;b.tY=a;Bj(b);b.F=1;return b;}
var H2=F(V);
function AMD(){var a=new H2();ACY(a);return a;}
function ACY(a){}
function Xp(a){return Ci(BL(BL(BL(CZ(),97,122),65,90),48,57),95);}
var Y4=F(H2);
function ALK(){var a=new Y4();AEm(a);return a;}
function AEm(a){}
function AGi(a){var b;b=D3(Xp(a),1);b.F=1;return b;}
var W_=F(Jk);
function ALl(){var a=new W_();AJ2(a);return a;}
function AJ2(a){}
function AA$(a){var b;b=D3(WT(a),1);b.F=1;return b;}
var Wb=F(Io);
function AL9(){var a=new Wb();AE9(a);return a;}
function AE9(a){}
function ADX(a){var b;b=D3(Xt(a),1);b.F=1;return b;}
function VP(){var a=this;V.call(a);a.m6=0;a.nu=0;}
function P(a,b){var c=new VP();AKh(c,a,b);return c;}
function AKh(a,b,c){a.m6=b;a.nu=c;}
function AFy(a){return BL(CZ(),a.m6,a.nu);}
var V8=F(V);
function ALO(){var a=new V8();AKz(a);return a;}
function AKz(a){}
function AJ_(a){return BL(BL(CZ(),65279,65279),65520,65533);}
function W0(){var a=this;V.call(a);a.jU=0;a.hK=0;a.lP=0;}
function BF(a,b){var c=new W0();AB6(c,a,b);return c;}
function AMq(a,b,c){var d=new W0();AKj(d,a,b,c);return d;}
function AB6(a,b,c){a.hK=c;a.jU=b;}
function AKj(a,b,c,d){a.lP=d;a.hK=c;a.jU=b;}
function ADr(a){var b;b=ANo(a.jU);if(a.lP)GO(b.E,0,2048);b.F=a.hK;return b;}
function W8(){var a=this;V.call(a);a.jT=0;a.hW=0;a.kZ=0;}
function Ht(a,b){var c=new W8();ACO(c,a,b);return c;}
function AMe(a,b,c){var d=new W8();AAa(d,a,b,c);return d;}
function ACO(a,b,c){a.hW=c;a.jT=b;}
function AAa(a,b,c,d){a.kZ=d;a.hW=c;a.jT=b;}
function Z_(a){var b;b=new O0;XV(b,a.jT);if(a.kZ)GO(b.E,0,2048);b.F=a.hW;return b;}
var VU=F();
var Vr=F();
function WI(b){var c,d,e,f,g,h,i;c=AIx(FJ(b));d=Ih(c);e=BS(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+Ih(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Lo(c);h=h+1|0;}return e;}
function I7(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function LC(){var a=this;C.call(a);a.mk=0;a.nN=0;a.mx=null;}
function ADp(a,b,c){var d=new LC();AI9(d,a,b,c);return d;}
function AI9(a,b,c,d){a.mk=b;a.nN=c;a.mx=d;}
function Ys(){var a=this;C.call(a);a.lr=null;a.na=0;}
function AIx(a){var b=new Ys();ACu(b,a);return b;}
function ACu(a,b){a.lr=b;}
var WH=F();
function Ih(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.lr.data;f=b.na;b.na=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bc(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Lo(b){var c,d;c=Ih(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Tj=F(0);
function Vw(){C.call(this);this.z4=null;}
function Pv(){var a=this;C.call(a);a.se=null;a.mz=null;}
function Pu(){C.call(this);this.rb=null;}
function SH(){var a=this;S.call(a);a.lf=null;a.tq=null;}
function AC$(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.bL^C7(a.lf,c):0;}
function SF(){var a=this;S.call(a);a.pp=null;a.p3=null;a.s8=null;}
function AAu(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.bL^C7(a.pp,c):0;return a.p3.j(b)&&!d?1:0;}
function Mm(){var a=this;S.call(a);a.gL=null;a.rk=null;}
function AFo(a,b){return a.S^C7(a.gL,b);}
function ADO(a){var b,c,d;b=new M;O(b);c=Gh(a.gL,0);while(c>=0){G_(b,FF(c));BB(b,124);c=Gh(a.gL,c+1|0);}d=b.I;if(d>0)Sv(b,d-1|0);return N(b);}
function Ms(){var a=this;S.call(a);a.no=null;a.sF=null;}
function AIb(a,b){return a.no.j(b);}
function Mq(){var a=this;S.call(a);a.hN=0;a.lH=null;a.iE=null;}
function AIQ(a,b){return !(a.hN^C7(a.iE.B,b))&&!(a.hN^a.iE.c1^a.lH.j(b))?0:1;}
function Mr(){var a=this;S.call(a);a.hV=0;a.pE=null;a.ju=null;}
function AFK(a,b){return !(a.hV^C7(a.ju.B,b))&&!(a.hV^a.ju.c1^a.pE.j(b))?1:0;}
function Mv(){var a=this;S.call(a);a.qp=0;a.pK=null;a.py=null;a.rE=null;}
function ACJ(a,b){return a.qp^(!a.pK.j(b)&&!a.py.j(b)?0:1);}
function Mw(){var a=this;S.call(a);a.ns=0;a.ng=null;a.mO=null;a.tV=null;}
function Z4(a,b){return a.ns^(!a.ng.j(b)&&!a.mO.j(b)?0:1)?0:1;}
function Mt(){var a=this;S.call(a);a.mD=null;a.tX=null;}
function ADS(a,b){return CI(a.mD,b);}
function Mu(){var a=this;S.call(a);a.pY=null;a.rU=null;}
function AFN(a,b){return CI(a.pY,b)?0:1;}
function My(){var a=this;S.call(a);a.nE=null;a.nk=0;a.o8=null;}
function AJN(a,b){return !CI(a.nE,b)&&!(a.nk^C7(a.o8.B,b))?0:1;}
function MA(){var a=this;S.call(a);a.ol=null;a.ox=0;a.n2=null;}
function ACf(a,b){return !CI(a.ol,b)&&!(a.ox^C7(a.n2.B,b))?1:0;}
function Ml(){var a=this;S.call(a);a.o3=0;a.pD=null;a.qd=null;a.rl=null;}
function ALk(a,b){return !(a.o3^a.pD.j(b))&&!CI(a.qd,b)?0:1;}
function M9(){var a=this;S.call(a);a.qa=0;a.kG=null;a.k0=null;a.rP=null;}
function ADW(a,b){return !(a.qa^a.kG.j(b))&&!CI(a.k0,b)?1:0;}
function Mj(){var a=this;S.call(a);a.md=null;a.rV=null;}
function ACe(a,b){return CI(a.md,b);}
function Mk(){var a=this;S.call(a);a.mj=null;a.tT=null;}
function ADA(a,b){return CI(a.mj,b)?0:1;}
function Mp(){var a=this;S.call(a);a.ql=null;a.oe=0;a.q4=null;}
function AEX(a,b){return CI(a.ql,b)&&a.oe^C7(a.q4.B,b)?1:0;}
function Mi(){var a=this;S.call(a);a.oN=null;a.nt=0;a.ob=null;}
function AJw(a,b){return CI(a.oN,b)&&a.nt^C7(a.ob.B,b)?0:1;}
function Mn(){var a=this;S.call(a);a.pb=0;a.ld=null;a.np=null;a.rD=null;}
function ABn(a,b){return a.pb^a.ld.j(b)&&CI(a.np,b)?1:0;}
function Mo(){var a=this;S.call(a);a.oG=0;a.ky=null;a.o2=null;a.rY=null;}
function AHq(a,b){return a.oG^a.ky.j(b)&&CI(a.o2,b)?0:1;}
var Kd=F(0);
function Pl(){var a=this;C.call(a);a.rL=null;a.pF=null;a.g0=null;a.b2=null;a.gN=0;a.iv=0;}
function K1(a,b){var c,d,e;c=I(a.g0);if(b>=0&&b<=c){T6(a.b2,null,(-1),(-1));d=a.b2;d.ht=1;d.dj=b;c=d.f_;if(c<0)c=b;d.f_=c;b=a.pF.bQ(b,a.g0,d);if(b==(-1))a.b2.cH=1;if(b>=0){d=a.b2;if(d.g1){e=d.cU.data;if(e[0]==(-1)){c=d.dj;e[0]=c;e[1]=c;}d.f_=HM(d);return 1;}}a.b2.dj=(-1);return 0;}d=new Bu;Bb(d,C0(b));J(d);}
function Zy(a){return M1(a.b2,0);}
function Wc(a){return O8(a.b2,0);}
var V$=F();
var NG=F(0);
function PS(){var a=this;C.call(a);a.n9=null;a.n8=0;a.n5=null;}
function KG(a,b){var c,d,e,f,g,h,i;c=a.n9;d=a.n8;e=a.n5;if(b<=d){f=c.bG.u;g=new PV;g.qP=c;h=R(C,1);h.data[0]=e;CM(f,g,B(551),h);}else{g=c.bG.u;i=new PX;i.o1=c;CM(g,i,B(552),H(C,[e,ZG(AQJ,1)]));f=c.bG.u;g=new PW;g.me=c;h=R(C,1);h.data[0]=e;CM(f,g,B(553),h);}}
var Lk=F(FL);
function ADt(a,b,c,d){var e,f,g;e=0;f=d.s;a:{while(true){if(b>f){b=e;break a;}g=EV(d,a.M);C9(d,a.M,b);e=a.cm.c(b,c,d);if(e>=0)break;C9(d,a.M,g);b=b+1|0;}}return b;}
function AK9(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=EV(e,a.M);C9(e,a.M,c);f=a.cm.c(c,d,e);if(f>=0)break;C9(e,a.M,g);c=c+(-1)|0;}}return c;}
function AB2(a){return null;}
function Se(){C.call(this);this.lh=null;}
function AHC(a,b){var c,d,e,f;c=a.lh;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.mz;c=Bv();b=Cj(b);e=new M;O(e);G(G(e,B(554)),b);Bq(c,N(e));b=Bv();f=d.length;c=new M;O(c);T(G(c,B(555)),f);Bq(b,N(c));}
function Sf(){var a=this;C.call(a);a.pm=null;a.pn=null;}
function AGA(a,b){var c,d;c=a.pm;d=a.pn;b.arrayBuffer().then(Bf(c,"f"),Bf(d,"f"));}
function Tf(){var a=this;C.call(a);a.kp=null;a.kn=null;a.km=null;}
function Qo(){var a=this;C.call(a);a.kg=null;a.kh=null;}
function AD4(a,b){var c;c=a.kg;KG(a.kh,Id(c,b.size));}
function Qr(){C.call(this);this.qm=null;}
function AAo(a,b){var c;c=a.qm;Bq(J1(),$rt_str(b.message));KG(c,0);}
function RK(){var a=this;C.call(a);a.cU=null;a.hB=null;a.i1=null;a.i8=null;a.lL=0;a.g1=0;a.ch=0;a.s=0;a.dj=0;a.g3=0;a.ek=0;a.cH=0;a.tf=0;a.f_=0;a.ht=0;}
function BE(a,b,c){a.hB.data[b]=c;}
function CY(a,b){return a.hB.data[b];}
function HM(a){return O8(a,0);}
function O8(a,b){OZ(a,b);return a.cU.data[(b*2|0)+1|0];}
function C9(a,b,c){a.cU.data[b*2|0]=c;}
function Ib(a,b,c){a.cU.data[(b*2|0)+1|0]=c;}
function EV(a,b){return a.cU.data[b*2|0];}
function Hf(a,b){return a.cU.data[(b*2|0)+1|0];}
function Yf(a){return M1(a,0);}
function M1(a,b){OZ(a,b);return a.cU.data[b*2|0];}
function Lb(a,b){return a.i1.data[b];}
function DM(a,b,c){a.i1.data[b]=c;}
function OZ(a,b){var c;if(!a.g1){c=new DW;U(c);J(c);}if(b>=0&&b<a.lL)return;c=new Bu;Bb(c,C0(b));J(c);}
function T6(a,b,c,d){a.g1=0;a.ht=2;Ic(a.cU,(-1));Ic(a.hB,(-1));if(b!==null)a.i8=b;if(c>=0){a.ch=c;a.s=d;}a.dj=a.ch;}
function Wv(a){return a.ht;}
function UQ(a){return a.g3;}
function Rf(){C.call(this);this.r5=null;}
function AFz(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function PO(){S.call(this);this.sx=null;}
function AJU(a,b){return Ch(b)!=2?0:1;}
function K6(){S.call(this);this.sH=null;}
function AA6(a,b){return Ch(b)!=1?0:1;}
function O5(){S.call(this);this.sd=null;}
function AAT(a,b){return Op(b);}
function O4(){S.call(this);this.rW=null;}
function ADq(a,b){return 0;}
function Tg(){S.call(this);this.tl=null;}
function AEI(a,b){return !Ch(b)?0:1;}
function MS(){S.call(this);this.sT=null;}
function AJX(a,b){return Ch(b)!=9?0:1;}
function L6(){S.call(this);this.tP=null;}
function AGY(a,b){return FC(b);}
function Oe(){S.call(this);this.sz=null;}
function AIg(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function KX(){S.call(this);this.q_=null;}
function AKP(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FC(b);}return b;}
function K4(){S.call(this);this.sW=null;}
function ACw(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FC(b);}return b;}
function LU(){S.call(this);this.ti=null;}
function AJ9(a,b){a:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Nh(){S.call(this);this.tA=null;}
function AFY(a,b){return H8(b);}
function Np(){S.call(this);this.sf=null;}
function AHQ(a,b){return Nq(b);}
function QC(){S.call(this);this.s2=null;}
function AJO(a,b){return Ch(b)!=3?0:1;}
function Pm(){S.call(this);this.rf=null;}
function AKB(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=FC(b);}return b;}
function Ld(){S.call(this);this.tY=null;}
function ACj(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=FC(b);}return b;}
function Kr(){S.call(this);this.jk=0;}
function ANo(a){var b=new Kr();XV(b,a);return b;}
function XV(a,b){Bj(a);a.jk=b;}
function AG0(a,b){return a.S^(a.jk!=Ch(b&65535)?0:1);}
var O0=F(Kr);
function AI7(a,b){return a.S^(!(a.jk>>Ch(b&65535)&1)?0:1);}
function NH(){C.call(this);this.q7=null;}
function AFB(a){var b,c,d;b=a.q7;c=b.kp;d=b.kn;b=b.km;d.A7(b.gH,b.gD.AP(),null);OA(c,b.gD);}
function PX(){C.call(this);this.o1=null;}
function AGO(a,b){var c,d;c=a.o1;if(!c.gr){b=b.data;c.e.g=Xz(D5(b[0]),E4(b[1]));c.gq=1;d=IW(EY(),c.d0);b=new M;O(b);G(GL(G(b,B(556)),d),B(223));$rt_globals.console.info($rt_ustr(N(b)));}}
var Pq=F(0);
var AQJ=null;function ZF(){var b;b=BS(1);b.data[0]=250;AQJ=b;}
function PW(){C.call(this);this.me=null;}
function AGe(a,b){var c,d,e,f,g,h;c=b.data;d=a.me;e=(D5(c[2])).data[0];if(e!=1)GC(d,b);else{d.gr=1;f=D5(c[0]);g=E4(c[1]);b=d.e;b.g=Ym(b.g,f,g,d.gq);SA(d,YY(e));FH(d.bG.u,APd);Fi(d.bG.u);h=IW(EY(),d.d0);b=new M;O(b);G(GL(G(b,B(557)),h),B(223));$rt_globals.console.info($rt_ustr(N(b)));S8(d);Iw(d);}}
function PV(){C.call(this);this.qP=null;}
function AHK(a,b){GC(a.qP,b);}
var Vj=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker",6,"menu"]);
$rt_metadata([C,0,0,[],0,3,0,0,["d1",ANL(PG),"bH",ANK(ABC)],OU,0,C,[],0,3,0,0,0,Ln,0,C,[],3,3,0,0,0,KT,0,C,[],3,3,0,0,0,SK,0,C,[Ln,KT],0,3,0,0,["bH",ANK(AFA)],VG,0,C,[],4,0,0,0,0,Vs,0,C,[],4,3,0,0,0,CV,0,C,[],3,3,0,0,0,Cz,0,C,[],3,3,0,0,0,Hy,0,C,[],3,3,0,0,0,BA,"String",1,C,[CV,Cz,Hy],0,3,0,El,["bH",ANK(ABB),"d1",ANL(Br),"gn",ANL(ADs)],FM,0,C,[],0,3,0,0,0,Ei,0,FM,[],0,3,0,0,0,Gj,0,Ei,[],0,3,0,0,0,WK,0,Gj,[],0,3,0,0,0,Du,0,C,[CV],1,3,0,0,0,Eg,0,Du,[Cz],0,3,0,0,["gn",ANL(AFe)],Fy,0,C,[CV,Hy],0,0,0,0,["gh",ANL(Ia),
"bH",ANK(N)],GN,0,C,[],3,3,0,0,0,M,0,Fy,[GN],0,3,0,0,["jy",ANO(AFc),"iK",ANN(ACF),"bH",ANK(Ds),"gh",ANL(AFi),"j3",ANM(AFH)],D2,0,Gj,[],0,3,0,0,0,XW,0,D2,[],0,3,0,0,0,WB,0,D2,[],0,3,0,0,0,DD,0,FM,[],0,3,0,0,0,Bh,0,DD,[],0,3,0,0,0,QA,0,C,[],3,3,0,0,0,CQ,0,C,[],3,3,0,0,0,MQ,0,C,[],3,0,0,0,0,Hk,0,C,[QA,CQ,MQ],1,3,0,0,["gI",ANK(HC)],OM,0,Hk,[],0,3,0,0,0,U2,0,C,[],0,3,0,0,0,Y6,0,C,[],4,3,0,0,0,Bd,0,C,[],3,3,0,0,0,QI,0,C,[Bd],0,3,0,0,0,Bz,0,C,[],3,3,0,0,0,Xg,0,C,[Bz],1,3,0,0,0,U6,0,C,[],3,3,0,0,0,VC,0,C,[Bz],1,3,0,
0,0,BQ,0,C,[Bz],3,3,0,0,0,QJ,0,C,[BQ],0,3,0,0,["U",ANL(Z5)],QH,0,C,[BQ],0,3,0,0,["U",ANL(AJP)],Yz,0,C,[],4,3,0,0,0,Wd,0,C,[],0,3,0,0,0,ZZ,0,C,[],4,3,0,0,0,Ls,0,C,[BQ],0,3,0,0,["U",ANL(AGM)],Sm,0,C,[Bz],1,3,0,0,0,J9,0,C,[],0,3,0,0,0,Ij,0,C,[Bz],3,3,0,0,0,Wt,0,C,[Ij],1,3,0,0,["A5",ANL(AKV),"Ax",ANK(ABS)],WW,0,C,[Bz],1,3,0,0,0]);
$rt_metadata([E8,0,C,[],3,3,0,0,0,PN,0,C,[E8],0,3,0,0,0,CO,0,C,[Cz],0,3,0,0,0,KK,0,C,[Bz],3,3,0,0,0,Ps,0,C,[KK],3,3,0,0,0,DU,0,C,[Bz],3,3,0,0,0,Y5,0,C,[Ps,DU],3,3,0,0,0,FQ,0,Bh,[],0,3,0,0,0,LV,0,C,[BQ],0,3,0,0,["U",ANL(AHF)],Ng,0,C,[DU],3,3,0,0,0,OD,0,C,[DU],3,3,0,0,0,Ou,0,C,[DU],3,3,0,0,0,Qu,0,C,[DU],3,3,0,0,0,TA,0,C,[DU],3,3,0,0,0,Rt,0,C,[DU,Ng,OD,Ou,Qu,TA],3,3,0,0,0,MD,0,C,[],3,3,0,0,0,U5,0,C,[Bz,Rt,MD,Ij],1,3,0,0,["zm",ANM(AFD),"A_",ANM(AFV),"ub",ANL(AAW),"x9",ANN(AGS),"wD",ANL(AJ6),"wI",ANK(ABU),"vq",ANN(AAm)],Bu,
0,Bh,[],0,3,0,0,0,Gg,0,Bu,[],0,3,0,0,0,V3,0,C,[],0,3,0,0,0,MC,0,C,[],3,3,0,0,0,PE,0,C,[MC],0,3,0,0,0,Cw,0,C,[],3,3,0,0,0,N4,0,C,[Cw],0,3,0,0,0,Be,0,C,[],3,3,0,0,0,Wy,0,C,[Be],0,3,0,0,0,WQ,0,C,[Bz],1,3,0,0,0,Oz,0,C,[Bz],3,3,0,0,0,Sb,0,C,[Oz],0,3,0,0,["ya",ANL(AEv)],R8,0,C,[Be],0,3,0,0,0,HR,0,C,[],1,3,0,0,0,NA,0,HR,[],0,3,0,0,0,NU,0,C,[Bz],3,3,0,0,0,R9,0,C,[NU],0,3,0,0,["qw",ANM(ACV)],Y_,0,C,[Bz],1,3,0,0,0,Cb,0,C,[Bz],3,3,0,0,0,R6,0,C,[Cb],0,3,0,0,["bK",ANL(AHR)],Jn,0,C,[],3,3,0,0,0,Ea,0,C,[Jn],1,3,0,0,0,DY,0,
C,[],3,3,0,0,0,T0,0,C,[Jn],3,3,0,0,0,Lm,0,C,[T0],3,3,0,0,0,VD,0,Ea,[DY,CV,Lm],0,3,0,0,0,R7,0,C,[BQ],0,3,0,0,["U",ANL(AIU)],Ct,0,C,[],3,3,0,0,["di",ANL(AJQ),"dK",ANL(ADJ),"dr",ANO(ADC),"fW",ANN(Z3),"fn",ANL(AFw),"gf",ANM(ALj),"jo",ANK(ACS),"nq",ANK(ACo),"iM",ANK(AGJ)],No,0,C,[],0,3,0,0,0,JA,0,C,[],1,3,0,0,0,YH,0,JA,[],0,3,0,0,0,C3,0,C,[CQ],1,3,0,0,0,HQ,0,C,[E8],0,3,0,0,["kb",ANM(Ez)]]);
$rt_metadata([ST,0,C,[Cb],0,3,0,0,["bK",ANL(AHj)],SU,0,C,[Cb],0,3,0,0,["bK",ANL(AHt)],SV,0,C,[Cb],0,3,0,0,["bK",ANL(AF_)],SW,0,C,[Cb],0,3,0,0,["bK",ANL(AFE)],SX,0,C,[Cb],0,3,0,0,["bK",ANL(AFZ)],SY,0,C,[Cb],0,3,0,0,["bK",ANL(AH4)],SZ,0,C,[Cb],0,3,0,0,["bK",ANL(AEe)],S0,0,C,[Cb],0,3,0,0,["bK",ANL(AK2)],S1,0,C,[Cb],0,3,0,0,["bK",ANL(ADy)],S2,0,C,[Cb],0,3,0,0,["bK",ANL(AI1)],ZO,0,C,[Cb],0,3,0,0,["bK",ANL(AKG)],ZP,0,C,[Cb],0,3,0,0,["bK",ANL(AFQ)],ZQ,0,C,[Cb],0,3,0,0,["bK",ANL(AGb)],ZR,0,C,[Cb],0,3,0,0,["bK",ANL(AHI)],Q0,
0,C,[],3,3,0,0,0,Q_,0,C,[Q0],0,3,0,0,0,Q$,0,C,[Cb],0,3,0,0,["bK",ANL(AE7)],KL,0,C,[],0,3,0,0,0,N1,0,C,[CQ],0,3,0,0,0,Bn,0,C,[],0,3,0,0,["bH",ANK(Z6)],YG,0,C,[],0,3,0,0,0,Vq,0,C,[],3,3,0,0,0,NT,0,C,[],0,3,0,0,0,JX,0,C,[],0,3,0,0,0,DJ,0,JX,[],0,3,0,0,0,Sx,0,DJ,[],0,3,0,0,0,D_,0,DJ,[],0,3,0,0,0,Oj,0,DJ,[],0,3,0,0,0,RG,0,D_,[],0,3,0,0,0,X1,0,D_,[],0,3,0,0,0,VE,0,D_,[],0,3,0,0,0,O7,0,C,[Bz],3,3,0,0,0,ZX,0,C,[O7],3,3,0,0,0,NR,0,C,[CQ],0,3,0,0,0,NS,0,C,[],0,3,0,0,0,Cd,0,C,[Cz,CV],1,3,0,0,["d1",ANL(AAO),"gn",ANL(AFb)],F0,
0,Cd,[],12,3,0,Vn,0,JH,0,C,[],4,3,0,0,0,Ks,0,C,[],3,3,0,0,0,Qf,0,C,[Ks],3,3,0,0,0,Rj,0,C,[],3,3,0,0,0,FD,0,C,[Qf,Rj],1,3,0,0,0,H4,0,FD,[],0,3,0,0,0,Wz,0,H4,[],0,3,0,0,0,Fr,0,FD,[],1,3,0,0,0,JG,0,Fr,[],0,3,0,0,["ib",ANN(AE0)],Dz,0,Cd,[],12,3,0,AJZ,0,HY,0,C,[Cz],1,3,0,0,0,Kx,0,HY,[],0,3,0,Wn,0,IT,0,C,[],32,0,0,U4,0]);
$rt_metadata([M$,0,C,[],0,3,0,0,0,F3,0,Cd,[],12,0,0,Xy,0,Fx,0,Cd,[],12,0,0,XA,0,Sc,0,DD,[],0,3,0,0,0,BC,0,Bh,[],0,3,0,0,0,Yy,0,BC,[],0,3,0,0,0,Kw,0,C,[Bz],3,3,0,0,0,TX,0,C,[Kw],0,3,0,0,["U",ANL(AIy)],TZ,0,C,[Kw],0,3,0,0,["U",ANL(ABw)],WU,0,C,[],4,3,0,0,0,Ve,0,C,[],0,3,0,0,0,F9,0,C,[],1,3,0,0,0,Pe,0,C,[],3,3,0,0,0,Js,0,F9,[Cz,GN,Hy,Pe],1,3,0,0,0,Il,0,F9,[Cz],1,3,0,0,0,GB,0,C,[],0,3,0,Gf,0,Lr,0,C3,[],0,3,0,0,["cX",ANL(AJ7),"b$",ANK(AFM),"ct",ANM(AHA)],ZH,0,C,[],0,3,0,0,0,Xa,0,C,[Bz],1,3,0,0,0,It,0,Js,[],1,0,0,
0,0,WV,0,It,[],0,0,0,0,0,Jh,0,C,[],1,3,0,0,0,J6,0,C,[],0,3,0,0,0,Vb,0,C,[],0,3,0,0,0,JF,0,C,[Bz],3,3,0,0,0,LA,0,C,[JF],0,3,0,0,["U",ANL(ADl)],Lz,0,C,[JF],0,3,0,0,["U",ANL(AGR)],Ly,0,C,[BQ],0,3,0,0,["U",ANL(AHp)],Lx,0,C,[BQ],0,3,0,0,["U",ANL(ABY)],P$,0,C,[Cw],0,3,0,0,["cx",ANL(AG5)],P9,0,C,[Cw],0,3,0,0,["cx",ANL(AA7)],P8,0,C,[Cw],0,3,0,0,["cx",ANL(AEk)],P7,0,C,[Cw],0,3,0,0,["cx",ANL(AEg)],P6,0,C,[Cw],0,3,0,0,["cx",ANL(AEL)],P5,0,C,[Cw],0,3,0,0,["cx",ANL(ABe)],P4,0,C,[Cw],0,3,0,0,["cx",ANL(ACz)],P3,0,C,[Cw],0,
3,0,0,["cx",ANL(AHi)],P2,0,C,[Cw],0,3,0,0,["cx",ANL(AKm)],P1,0,C,[Cw],0,3,0,0,["cx",ANL(AK$)],Oh,0,C,[Cw],0,3,0,0,["cx",ANL(AFx)],Ge,0,C,[],0,3,0,0,0,MV,0,Ge,[],0,3,0,0,0,YP,0,C,[],0,3,0,0,0,KI,0,Ge,[],0,3,0,0,0,Q2,0,C,[Bz],3,3,0,0,0,LO,0,C,[Q2],0,3,0,0,["Bz",ANL(AFp)],RA,0,C,[Bd],0,3,0,0,["m",ANL(SB)],Tm,0,Il,[],0,0,0,0,0,XR,0,C,[Bz],1,3,0,0,0,IP,0,C,[],4,3,0,AEK,0]);
$rt_metadata([Ss,0,C,[],3,3,0,0,0,PH,0,C,[Ss],0,3,0,0,["bH",ANK(ACk)],Re,0,C,[],3,3,0,0,0,Jq,"JsFileHandle",5,C,[Re],0,3,0,0,["bH",ANK(AE5)],Jd,0,Jh,[],1,3,0,0,0,Nm,0,Jd,[],0,3,0,0,0,Hc,0,DD,[],0,3,0,0,0,Cn,0,C3,[],0,3,0,0,["cX",ANL(AKD),"b$",ANK(GW),"ct",ANM(R_)],I0,"DemoEdit0",6,Cn,[],0,3,0,0,["cX",ANL(AB5),"b$",ANK(AEu),"ct",ANM(ADP)],U7,0,C3,[],0,3,0,0,["cX",ANL(AAv),"b$",ANK(AC6),"ct",ANM(ALa)],Su,"ToolbarDemo",8,Cn,[Ct],0,3,0,0,["fW",ANN(Z3),"gf",ANM(ALj),"jo",ANK(ACS),"nq",ANK(ACo),"iM",ANK(AGJ),"ct",
ANM(AAf),"b$",ANK(ADm),"dK",ANL(AHZ),"dr",ANO(AJW),"fn",ANL(ABy),"di",ANL(AD5),"cX",ANL(ABK)],TN,"FindUsagesDemo",8,Cn,[Ct],0,3,0,0,["fW",ANN(Z3),"gf",ANM(ALj),"jo",ANK(ACS),"nq",ANK(ACo),"iM",ANK(AGJ),"ct",ANM(AKE),"b$",ANK(AHy),"dK",ANL(AID),"dr",ANO(AFR),"fn",ANL(AH1),"di",ANL(AEW),"cX",ANL(AIE)],Nc,0,C3,[],0,3,0,0,["cX",ANL(AHG),"b$",ANK(AAM),"ct",ANM(AAI)],On,"SelectFileTest",6,Cn,[Ct],0,3,0,0,["dK",ANL(ADJ),"dr",ANO(ADC),"fW",ANN(Z3),"fn",ANL(AFw),"gf",ANM(ALj),"jo",ANK(ACS),"nq",ANK(ACo),"iM",ANK(AGJ),
"di",ANL(AHE)],ZA,"WorkerTest",7,Cn,[],0,3,0,0,0,Te,"RenderTexture",6,Cn,[],0,3,0,0,["cX",ANL(AFf),"b$",ANK(AAp),"ct",ANM(AKl)],MN,0,C3,[],0,3,0,0,["b$",ANK(AKT),"ct",ANM(AAr),"cX",ANL(ACn)],Hi,"ClipboardTest",6,Cn,[Ct],0,3,0,0,["dK",ANL(ADJ),"fW",ANN(Z3),"nq",ANK(ACo),"iM",ANK(AGJ),"di",ANL(AFr),"dr",ANO(AEn),"gf",ANM(ACy),"jo",ANK(AEV),"fn",ANL(AAi)],OG,"DemoEdit1",6,I0,[],0,3,0,0,0,Gl,0,C,[],3,3,0,0,0,KB,0,C,[Gl,CV],0,3,0,0,["d1",ANL(ACX)],Ey,0,KB,[],0,0,0,0,0,Zi,0,C,[],0,3,0,0,0,Rc,0,C,[],3,3,0,0,0,U3,0,
C,[],0,3,0,0,0,WD,0,C,[CQ],0,3,0,0,0,Sk,0,C,[Ct],0,0,0,0,["nq",ANK(AIo),"iM",ANK(AGt),"fW",ANN(ADv),"dr",ANO(ADf),"fn",ANL(AKK),"dK",ANL(AIw),"di",ANL(ACq),"gf",ANM(AF$),"jo",ANK(AAL)],B_,0,C,[],0,3,0,0,0,CK,0,C,[],3,3,0,EA,0,Hl,0,C,[],0,3,0,0,0,J4,0,Hl,[],0,3,0,0,0,WX,0,C,[],0,3,0,0,0,QF,0,C,[Ct],0,0,0,0,["jo",ANK(ACS),"nq",ANK(ACo),"dK",ANL(AHJ),"fW",ANN(AEA),"dr",ANO(AKe),"di",ANL(AGP),"fn",ANL(AKr),"gf",ANM(AA9),"iM",ANK(AIP)],Hx,0,B_,[],0,3,0,0,0,VO,0,C,[],0,3,0,0,0,Cf,0,C,[],3,3,0,Cm,0,P_,0,C,[Be],0,3,
0,0,["q",ANK(AJY)],Qb,0,C,[Be],0,3,0,0,["q",ANK(AIc)],EZ,0,C,[],0,3,0,0,0,Xn,0,C,[],0,3,0,0,0,Xi,0,C,[CQ],0,3,0,0,0,Vm,0,C,[],3,3,0,0,0,YC,0,C,[],3,3,0,0,0,SL,0,C,[Ct],0,0,0,0,["di",ANL(AJQ),"fn",ANL(AFw),"gf",ANM(ALj),"jo",ANK(ACS),"nq",ANK(ACo),"iM",ANK(AGJ),"fW",ANN(ACg),"dr",ANO(AC7),"dK",ANL(AC2)],Xh,0,C,[],0,3,0,0,0,OK,0,C,[Bd],0,3,0,0,["m",ANL(AAH)],OJ,0,C,[Bd],0,3,0,0,["m",ANL(AKX)],OI,0,C,[Bd],0,3,0,0,["m",ANL(ACH)],OH,0,C,[Bd],0,3,0,0,["m",ANL(AGV)],NB,0,C,[Ct],0,3,0,0,["dK",ANL(ADJ),"dr",ANO(ADC),
"fW",ANN(Z3),"fn",ANL(AFw),"gf",ANM(ALj),"jo",ANK(ACS),"nq",ANK(ACo),"iM",ANK(AGJ),"di",ANL(AAe)]]);
$rt_metadata([OF,0,C,[Bd],0,3,0,0,["m",ANL(AGa)],OE,0,C,[Bd],0,3,0,0,["m",ANL(AHT)],QE,0,C,[Ct],0,0,0,0,["di",ANL(AJQ),"fW",ANN(Z3),"fn",ANL(AFw),"gf",ANM(ALj),"jo",ANK(ACS),"nq",ANK(ACo),"iM",ANK(AGJ),"dK",ANL(AJz),"dr",ANO(AHo)],Ok,0,C,[Ct],0,0,0,0,["di",ANL(AJQ),"fn",ANL(AFw),"gf",ANM(ALj),"jo",ANK(ACS),"nq",ANK(ACo),"iM",ANK(AGJ),"fW",ANN(AAz),"dr",ANO(AIX),"dK",ANL(ABg)],J0,0,C,[],0,3,0,0,0,XH,0,C,[],4,3,0,0,0,Hq,0,Bh,[],0,3,0,0,0,MK,0,C,[Bz],3,3,0,0,0,M8,0,C,[MK],0,3,0,0,["qw",ANM(ADH)],ML,0,C,[Bz],3,
3,0,0,0,M6,0,C,[ML],0,3,0,0,["qw",ANM(AEE)],VH,0,C,[],0,3,0,0,0,UX,0,C,[Bz],3,3,0,0,0,LX,0,C,[Rc],0,3,0,0,0,Sw,0,C,[],3,3,0,0,0,Gt,0,C,[Sw],3,3,0,0,0,DA,0,C,[Gt],1,3,0,0,0,La,0,C,[Gt],3,3,0,0,0,Fk,0,DA,[La],1,3,0,0,0,Ha,0,C,[],3,3,0,0,0,LZ,0,Fk,[DY,CV,Ha],0,3,0,0,["n_",ANL(BK),"le",ANK(AG7)],HH,0,C,[],3,3,0,0,0,Jr,0,C,[],0,3,0,0,0,Sj,0,C,[],0,3,0,0,0,UD,0,C,[],0,3,0,0,0,JJ,0,C,[],0,3,0,0,0,Eq,0,C,[CQ],0,0,0,0,0,Rr,0,C,[Bd],0,3,0,0,0,Rq,0,C,[Bd],0,3,0,0,["m",ANL(AIF)],Rm,0,C,[Bd],0,3,0,0,["m",ANL(AGT)],Rl,0,
C,[Be],0,3,0,0,["q",ANK(AIB)],Ro,0,C,[Be],0,3,0,0,["q",ANK(AEs)],Rn,0,C,[Be],0,3,0,0,["q",ANK(AGh)],RH,0,C,[Be],0,3,0,0,["q",ANK(AH8)],EQ,0,Cd,[],12,3,0,AAs,0,H6,0,C,[CQ],0,3,0,0,["gI",ANK(X5)],Qz,0,C,[],0,3,0,0,0,GR,0,C,[],3,3,0,0,0,Tx,0,C,[GR],0,3,0,0,["lp",ANN(AIp)],Ty,0,C,[GR],0,3,0,0,0,Tp,0,C,[],0,3,0,0,0,Xm,0,C,[],0,3,0,0,0,YM,0,C,[],0,0,0,0,0,Ut,0,C,[Bd],0,3,0,0,["m",ANL(AHV)],Xr,0,C,[],0,3,0,0,0,SD,0,C,[Bd],0,3,0,0,["m",ANL(AA_)],VT,0,C,[],0,3,0,0,0,ID,0,C,[],0,3,0,0,0,Zn,0,C,[],0,3,0,0,0,Et,0,C,[],
0,3,0,0,0]);
$rt_metadata([Ky,0,Et,[],0,3,0,0,0,KW,0,Et,[],0,3,0,0,0,NY,0,Et,[],0,3,0,0,0,Sh,0,C,[],3,3,0,0,0,ON,0,C,[],3,3,0,0,0,IQ,0,C,[Cz],0,3,0,0,0,I_,0,Fr,[],0,3,0,0,["ib",ANN(ADh)],Fd,0,C,[],4,3,0,0,0,K7,0,C,[],4,3,0,0,0,Zt,0,C,[],0,3,0,0,0,T3,0,C,[],0,3,0,0,0,ZN,0,C,[],0,3,0,0,0,WZ,0,C,[],0,3,0,0,0,Zc,0,C,[],3,3,0,0,0,CD,0,C,[Bz],1,3,0,0,0,XM,0,CD,[],1,3,0,0,0,Yn,0,CD,[],1,3,0,0,0,VL,0,CD,[],1,3,0,0,0,V5,0,CD,[],1,3,0,0,0,YN,0,CD,[],1,3,0,0,0,RZ,0,C,[Be],0,3,0,0,["q",ANK(AA8)],R0,0,C,[Bd],0,3,0,0,["m",ANL(AKg)],Nb,
0,C,[],3,3,0,0,0,RY,0,C,[Nb],0,3,0,0,0,W$,0,Ea,[DY,CV],0,3,0,0,0,Cl,0,C,[],0,3,0,0,0,B8,0,Cd,[],12,3,0,VI,0,H3,0,C,[],0,3,0,0,0,WA,0,C,[Bz],4,3,0,0,0,PK,0,C,[Be],0,3,0,0,["q",ANK(AJ4)],YE,0,C,[],3,3,0,0,0,BZ,0,C,[],0,3,0,0,0,Hw,0,C,[],0,3,0,0,0,IS,0,C,[],0,3,0,0,0,Zx,0,C,[Cz],0,3,0,0,["d1",ANL(AI4),"gn",ANL(ABI)],TO,0,C,[E8],0,3,0,0,["kb",ANM(AD3)],TQ,0,C,[E8],0,3,0,0,["kb",ANM(AFm)],Eu,0,C,[],0,3,0,0,0,Uv,0,Bh,[],0,3,0,0,0,Gb,0,Fk,[Ha],1,0,0,0,0,T8,0,Gb,[Ha],0,0,0,0,["le",ANK(ADd),"n_",ANL(AKy)],UP,0,C,[],
0,3,0,0,["bH",ANK(AD$)],MT,0,C,[Gt],3,3,0,0,0,Ef,0,DA,[MT],1,3,0,0,0,IH,0,Ef,[],1,0,0,0,0,R5,0,IH,[],0,0,0,0,0,JM,0,Ea,[],1,0,0,0,0,R3,0,JM,[],0,0,0,0,0,R4,0,Gb,[],0,0,0,0,0,DZ,0,C,[],3,3,0,0,0]);
$rt_metadata([R1,0,C,[DZ],0,0,0,0,0,Nk,0,C,[DZ],3,3,0,0,0,R2,0,C,[Nk],0,0,0,0,0,Us,0,C,[E8],0,3,0,0,0,LI,0,C,[DZ],0,0,0,0,0,Wl,0,C,[],4,3,0,0,0,Sn,0,DA,[],0,0,0,0,["ho",ANK(AIG)],Ww,0,C,[Bz],1,3,0,0,0,I5,0,C,[Gl,DY],0,0,0,0,0,G1,0,I5,[],0,0,0,0,0,RT,0,C,[Be],0,3,0,0,["q",ANK(ADD)],Ud,0,C,[Bd],0,3,0,0,["m",ANL(ACD)],Pk,0,C,[],3,3,0,0,0,Sl,0,C,[Pk],0,3,0,0,0,Ot,0,C,[Be],0,3,0,0,["q",ANK(AJ3)],M3,0,C,[DZ],0,0,0,0,["hG",ANK(ABR),"gy",ANK(AGG)],Lw,0,C,[CQ],0,3,0,0,0,Tl,0,C,[CQ],0,3,0,0,0,LF,0,C,[Be],0,3,0,0,0,E7,
0,Hc,[],0,3,0,0,0,Tu,0,Ei,[],0,3,0,0,0,Ho,0,Bh,[],0,3,0,0,0,Kp,0,Du,[Cz],0,3,0,0,0,EU,0,C,[],0,0,0,0,0,Iv,0,C,[],4,3,0,0,0,RX,0,C,[],0,3,0,0,0,Kj,0,C,[],1,3,0,0,0,WN,0,CD,[],1,3,0,0,0,QU,0,C,[],0,3,0,0,0,DW,0,Bh,[],0,3,0,0,0,XY,0,Ei,[],0,3,0,0,0,Ob,0,C,[Bd],0,3,0,0,["m",ANL(AJ5)],NW,0,Ef,[],0,0,0,0,0,Ts,0,C,[Bd],0,3,0,0,["m",ANL(AFl)],UU,0,C,[],0,3,0,0,0,IV,0,Kj,[],1,3,0,0,0,Qq,0,IV,[],0,3,0,0,0,OV,0,C,[Bd],0,3,0,0,["m",ANL(ADN)],Ir,0,Du,[Cz],0,3,0,0,0,JP,0,C,[],4,3,0,0,0,O$,0,Du,[Cz],0,3,0,0,0,Fv,0,Bh,[],0,
3,0,0,0,LN,0,C,[],0,3,0,0,0,Uz,0,C,[DZ],0,0,0,0,0,UW,0,C,[],1,3,0,0,0,Th,0,C,[],3,3,0,0,0,Vd,0,C,[],0,3,0,0,0,Y0,0,C,[Cz],0,3,0,0,["d1",ANL(US),"gn",ANL(AHP)],HF,0,Fv,[],0,3,0,0,0,GM,0,Bh,[],0,3,0,0,0]);
$rt_metadata([Ka,0,Bh,[],0,3,0,0,0,UE,0,C,[],0,3,0,0,0,Yi,0,Ef,[],0,0,0,0,0,M_,0,DA,[],0,0,0,0,["ho",ANK(ACW)],F6,0,C,[],0,0,0,0,["hG",ANK(Lt)],Rg,0,F6,[DZ],0,0,0,0,0,Oq,0,F6,[DZ],0,0,0,0,["gy",ANK(AIl)],TJ,0,C,[Bd],0,3,0,0,["m",ANL(AEz)],TM,0,C,[Bd],0,3,0,0,["m",ANL(AKL)],KM,0,C,[Be],0,3,0,0,["q",ANK(AJh)],Q3,0,C,[Be],0,3,0,0,["q",ANK(AA5)],QB,0,C,[Bd],0,3,0,0,["m",ANL(ADG)],NP,0,C,[Bd],0,3,0,0,["m",ANL(ABL)],Kz,0,Bh,[],0,3,0,0,0,L7,0,C,[Bd],0,3,0,0,["m",ANL(ALd)],Lf,0,C,[Bd],0,3,0,0,["m",ANL(ADT)],QV,0,C,
[Be],0,3,0,0,["q",ANK(AJv)],N6,0,C,[Bd],0,3,0,0,["m",ANL(AHh)],Sd,0,C,[Bd],0,3,0,0,["m",ANL(AKZ)],Y3,0,C,[],0,3,0,0,0,Zp,0,C,[Cw],0,3,0,0,0,Ry,0,C,[Bd],0,3,0,0,["m",ANL(AHM)],TR,0,C,[Be],0,3,0,0,["q",ANK(AHW)],Ra,0,C,[Bd],0,3,0,0,["m",ANL(AAX)],Ri,0,C,[BQ],0,3,0,0,["U",ANL(AKC)],Og,0,C,[BQ],0,3,0,0,["U",ANL(AAc)],TL,0,C,[BQ],0,3,0,0,["U",ANL(AIS)],TK,0,C,[BQ],0,3,0,0,["U",ANL(ACv)],Ta,0,C,[BQ],0,3,0,0,["U",ANL(ADU)],S_,0,C,[BQ],0,3,0,0,["U",ANL(AEC)],T$,0,C,[GR],0,3,0,0,["lp",ANN(ACC)],Uj,0,C,[Be],0,3,0,0,["q",
ANK(AFg)],Ug,0,C,[Be],0,3,0,0,["q",ANK(AJr)],Uh,0,C,[Be],0,3,0,0,["q",ANK(AIh)],Ui,0,C,[Be],0,3,0,0,["q",ANK(AFC)],S6,0,C,[Be],0,3,0,0,["q",ANK(AA0)],S5,0,C,[Be],0,3,0,0,["q",ANK(AKQ)],S7,0,C,[Be],0,3,0,0,["q",ANK(AC_)],KN,0,C,[Be],0,3,0,0,["q",ANK(AAJ)],K8,0,C,[BQ],0,3,0,0,["U",ANL(ALi)],TE,0,C,[Cb],0,3,0,0,["bK",ANL(ADL)],PD,0,C,[],3,3,0,0,0,K3,0,C,[PD],0,3,0,0,0,T2,0,C,[Be],0,3,0,0,["q",ANK(ACm)],T4,0,C,[Be],0,3,0,0,["q",ANK(AIM)],TT,0,C,[Be],0,3,0,0,["q",ANK(AFU)],TS,0,C,[Be],0,3,0,0,["q",ANK(AEM)],MW,0,
C,[Be],0,3,0,0,["q",ANK(ADg)],MU,0,C,[Be],0,3,0,0,["q",ANK(AKA)],MY,0,C,[Be],0,3,0,0,["q",ANK(ACd)]]);
$rt_metadata([MX,0,C,[Be],0,3,0,0,["q",ANK(AD2)],SO,0,C,[Be],0,3,0,0,["q",ANK(AED)],SN,0,C,[Be],0,3,0,0,["q",ANK(AHw)],SQ,0,C,[Be],0,3,0,0,["q",ANK(AI0)],SP,0,C,[Be],0,3,0,0,["q",ANK(AFu)],NV,0,Bh,[],0,3,0,0,0,TB,0,Bh,[],0,3,0,0,0,RN,0,E7,[],0,3,0,0,0,NN,0,E7,[],0,3,0,0,0,RF,0,C,[],0,3,0,0,0,Sq,0,C,[Bd],0,3,0,0,["m",ANL(AGv)],Ue,0,C,[Bd],0,3,0,0,["m",ANL(AFS)],Uf,0,C,[Bd],0,3,0,0,["m",ANL(AJ1)],SS,0,C,[],0,3,0,0,0,FG,0,Cd,[],12,0,0,Rv,0,Uk,0,C,[Bd],0,3,0,0,["m",ANL(AJm)],L8,0,C,[],32,0,0,ANk,0,PM,0,C,[Bd],0,
3,0,0,["m",ANL(AEp)],MB,0,C,[Bd],0,3,0,0,["m",ANL(AIs)],NO,0,C,[BQ],0,3,0,0,["U",ANL(ACI)],Hz,0,C,[Bz],3,3,0,0,0,K2,0,C,[Hz],0,3,0,0,["nw",ANK(AEH)],KJ,0,C,[Hz],0,3,0,0,["nw",ANK(Z8)],TI,0,C,[BQ],0,3,0,0,["U",ANL(AEa)],Nr,0,C,[Bd],0,3,0,0,["m",ANL(AAE)],VX,0,C,[Bd],0,3,0,0,0,NZ,0,C,[Bd],0,3,0,0,0,SJ,0,C,[Bd],0,3,0,0,0,SM,0,C,[Be],0,3,0,0,["q",ANK(AHn)],Uc,0,C,[Bd],0,3,0,0,0,S3,0,Bu,[],0,3,0,0,0,N_,0,C,[Ks],3,3,0,0,0,LJ,0,C,[N_],3,3,0,0,0,Ke,0,C,[LJ],1,3,0,0,0,Wk,0,Ke,[],0,3,0,0,0,Lg,0,C,[Be],0,3,0,0,["q",ANK(AJs)],TD,
0,C,[Be],0,3,0,0,["q",ANK(AKi)],B6,0,Cd,[],12,3,0,YS,0,Tt,0,C,[BQ],0,3,0,0,["U",ANL(AHm)],XB,0,C,[Bz],3,3,0,0,0,Q1,0,C,[BQ],0,3,0,0,["U",ANL(AG9)],Oo,0,C,[CV],4,3,0,0,0,Wf,0,C,[],0,3,0,0,0,Zl,0,C,[],0,3,0,0,0,Ph,0,C,[Be],0,3,0,0,["q",ANK(AGH)],Pg,0,C,[Be],0,3,0,0,["q",ANK(AHg)],Pf,0,C,[Be],0,3,0,0,["q",ANK(AI_)],Bw,0,C,[],1,0,0,0,["bQ",ANN(Gz),"bW",ANO(GJ),"gc",ANK(ABx),"H",ANL(AJI),"bt",ANL(AJH),"eq",ANK(AKu),"dm",ANK(HO)],Md,0,C,[Bd],0,3,0,0,["m",ANL(AIm)],CA,0,Bw,[],0,0,0,Kv,["c",ANN(AAZ),"C",ANL(ABm)]]);
$rt_metadata([FW,0,C,[],0,0,0,0,0,Hs,0,BC,[],0,3,0,0,0,OY,0,CA,[],0,0,0,0,["c",ANN(AAB),"C",ANL(AIu)],T9,0,CA,[],0,0,0,0,["c",ANN(AB8)],Nx,0,CA,[],0,0,0,0,["c",ANN(ABv)],PI,0,CA,[],0,0,0,0,["c",ANN(AAK),"C",ANL(AHf)],ES,0,CA,[],0,0,0,0,["c",ANN(AJV)],BO,0,Bw,[],1,0,0,0,["c",ANN(AKU),"bz",ANK(AJf),"C",ANL(AEP)],YX,0,BO,[],0,0,0,0,["bc",ANM(AIT),"bQ",ANN(ADi),"bW",ANO(AB0),"C",ANL(AAG)],BJ,0,Bw,[],0,0,0,0,["c",ANN(ADQ),"H",ANL(AG_),"bt",ANL(AFv),"C",ANL(AHO),"dm",ANK(ABX)],HD,0,BJ,[],0,0,0,0,["c",ANN(AGX),"C",
ANL(AH9)],Do,0,HD,[],0,0,0,0,["c",ANN(ACt),"H",ANL(AHU)],K0,0,Do,[],0,0,0,0,["c",ANN(AG4),"C",ANL(AJM)],St,0,Do,[],0,0,0,0,["c",ANN(ABh),"C",ANL(AJj)],Or,0,Do,[],0,0,0,0,["c",ANN(ABV),"C",ANL(ALe)],Qt,0,Do,[],0,0,0,0,["c",ANN(AAj),"C",ANL(AIk)],FL,0,BJ,[],0,0,0,0,["c",ANN(AAx),"bQ",ANN(AFJ),"bW",ANO(AIz),"bt",ANL(AFq),"eq",ANK(AHd),"dm",ANK(AKx)],FY,0,C,[],1,0,0,0,0,S,0,FY,[],1,0,0,ME,["cD",ANK(ABj),"dR",ANK(AAS),"g_",ANK(AJb),"fG",ANK(AKt)],Vz,0,S,[],0,0,0,0,["j",ANL(CI),"cD",ANK(CF),"dR",ANK(ADa),"g_",ANK(AJA),
"bH",ANK(AGn),"fG",ANK(ADn)],HW,0,Bh,[],0,3,0,0,0,DC,0,Bw,[],1,0,0,0,["bt",ANL(AIC),"C",ANL(AJS),"dm",ANK(AF3)],CJ,0,DC,[],0,0,0,0,["c",ANN(AAl)],Ex,0,CJ,[],0,0,0,0,["c",ANN(AA2)],CC,0,DC,[],0,0,0,0,["c",ANN(AAw)],D$,0,CJ,[],0,0,0,0,["c",ANN(AFP),"H",ANL(ALg)],SI,0,CJ,[],0,0,0,0,["c",ANN(AKN),"bQ",ANN(AGl)],V,0,C,[],1,0,0,0,0,CU,0,BC,[],0,3,0,0,0,Le,0,FY,[DY],0,0,0,0,["bH",ANK(AGs)],Mc,0,Bw,[],0,0,0,0,["c",ANN(AE$),"C",ANL(AG$)],To,0,C,[DY,CV],0,3,0,0,0,K9,0,BJ,[],0,0,0,0,0,N0,0,BJ,[],0,0,0,0,["c",ANN(AAY),
"H",ANL(AGU),"C",ANL(ABz),"bt",ANL(ABi)],Db,0,BJ,[],0,0,0,0,["c",ANN(AC3),"j",ANL(ADx),"bt",ANL(AAV),"H",ANL(AI6),"C",ANL(ADe)],HU,0,Db,[],0,0,0,0,["j",ANL(AEQ)],Vt,0,BO,[],0,0,0,0,["bc",ANM(AE_)],DP,0,BO,[],0,0,0,0,["bc",ANM(KH),"bt",ANL(AHb)],MF,0,BJ,[],0,0,0,0,["H",ANL(AFO),"c",ANN(AAb),"bt",ANL(ABs),"C",ANL(AJC)],DX,0,BO,[],0,0,0,0,["bz",ANK(AEZ),"bc",ANM(AD1),"bQ",ANN(AC0),"bW",ANO(AE4),"bt",ANL(AJx)],Zs,0,BO,[],0,0,0,0,["bc",ANM(Z9)],UJ,0,BO,[],0,0,0,0,["bc",ANM(AAq)],EI,0,BJ,[],0,0,0,0,["H",ANL(AKw),
"c",ANN(AGW),"bt",ANL(AFa),"C",ANL(AHX)],TG,0,EI,[],0,0,0,0,0,QG,0,EI,[],0,0,0,0,0,Uw,0,CC,[],0,0,0,0,["c",ANN(ACb)],Ns,0,CC,[],0,0,0,0,["c",ANN(AGd)],E9,0,CC,[],0,0,0,0,["c",ANN(AI3),"H",ANL(AJ0)],Na,0,E9,[],0,0,0,0,["c",ANN(AE1),"H",ANL(AGu)],EF,0,CC,[],0,0,0,0,["c",ANN(AK_)]]);
$rt_metadata([Lp,0,EF,[],0,0,0,0,["c",ANN(AEq)],OO,0,CC,[],0,0,0,0,["c",ANN(AKF)],N8,0,E9,[],0,0,0,0,["c",ANN(ABA)],Rx,0,EF,[],0,0,0,0,["c",ANN(AAN)],OP,0,DC,[],0,0,0,0,["c",ANN(AK1),"bQ",ANN(AJd)],Mh,0,DC,[],0,0,0,0,["c",ANN(AHe),"bQ",ANN(AAg)],Ek,0,C,[],1,0,0,0,0,Uy,0,CJ,[],0,0,0,0,["c",ANN(AAQ)],SE,0,D$,[],0,0,0,0,["c",ANN(AGc)],M2,0,Ex,[],0,0,0,0,["c",ANN(AIH)],N5,0,CJ,[],0,0,0,0,["c",ANN(AG8)],QR,0,D$,[],0,0,0,0,["c",ANN(AAU)],Os,0,Ex,[],0,0,0,0,["c",ANN(AIV)],IU,0,Bw,[],4,0,0,0,["c",ANN(AFt),"C",ANL(AEB)],V7,
0,Bw,[],0,0,0,0,["c",ANN(ABf),"C",ANL(ABp)],Mf,0,Bw,[],0,0,0,0,["c",ANN(AET),"C",ANL(AK7)],Tr,0,Bw,[],4,0,0,0,["c",ANN(AHD),"C",ANL(AB3)],S9,0,Bw,[],0,0,0,0,["c",ANN(AGQ),"C",ANL(Z7)],LB,0,Bw,[],0,0,0,0,["c",ANN(ABW),"C",ANL(ADK)],Ze,0,BJ,[],0,0,0,0,["c",ANN(AKI),"H",ANL(ABu),"gc",ANK(AGz),"C",ANL(ABt)],Vy,0,BJ,[],4,0,0,0,["c",ANN(AGI),"H",ANL(AIr),"gc",ANK(Z2),"C",ANL(AKR)],Y8,0,Bw,[],4,0,0,0,["c",ANN(AFd),"C",ANL(ADE)],Xx,0,Bw,[],0,0,0,0,["c",ANN(AGN),"C",ANL(ADu)],UH,0,Bw,[],0,0,0,0,["c",ANN(AEt),"C",ANL(AB7)],F_,
0,BJ,[],0,0,0,0,["c",ANN(AAR),"H",ANL(AHS),"C",ANL(AH_)],Za,0,F_,[],0,0,0,0,["c",ANN(ACa),"bQ",ANN(AJK),"bW",ANO(AAD),"bt",ANL(AF8)],WL,0,F_,[],0,0,0,0,["c",ANN(AFF)],Mb,0,Fy,[GN],0,3,0,0,["jy",ANO(ADo),"iK",ANN(ABk),"gh",ANL(ABG),"j3",ANM(AJe)],OS,0,BO,[],0,0,0,0,["bc",ANM(ACr),"bQ",ANN(ABa),"bW",ANO(ADI),"bt",ANL(AEb)],UF,0,BO,[],0,0,0,0,["bc",ANM(AFL)],Lv,0,BO,[],0,0,0,0,["bc",ANM(AIK)],F$,0,C,[],4,0,0,AIi,0,KQ,0,BO,[],0,0,0,0,["bc",ANM(AIR)],Jm,0,BJ,[],0,0,0,0,["H",ANL(AG2),"c",ANN(AB4),"bQ",ANN(AD_),"bW",
ANO(ACx),"bt",ANL(AAA),"C",ANL(AJl)],JD,0,BJ,[],0,0,0,0,["H",ANL(ABF),"c",ANN(AAk),"bQ",ANN(AHk),"bW",ANO(AII),"bt",ANL(ACs),"C",ANL(AHr)],Dt,0,BO,[],0,0,0,0,["bc",ANM(AIa),"bQ",ANN(AGo),"bW",ANO(ABE),"bt",ANL(AH2)],RQ,0,Ek,[],0,0,0,0,["f5",ANL(ABQ),"oJ",ANM(AH7)],RR,0,Ek,[],0,0,0,0,["f5",ANL(AIW),"oJ",ANM(AKp)],Yk,0,C,[],0,0,0,0,0,UY,0,C,[],0,0,0,0,0,Jk,0,V,[],0,0,0,0,["x",ANK(WT)],Io,0,V,[],0,0,0,0,["x",ANK(Xt)],Yd,0,V,[],0,0,0,0,["x",ANK(AIt)],YF,0,V,[],0,0,0,0,["x",ANK(AJq)],YI,0,V,[],0,0,0,0,["x",ANK(AC4)],Jf,
0,V,[],0,0,0,0,["x",ANK(VA)],JO,0,Jf,[],0,0,0,0,["x",ANK(Wr)],ZU,0,V,[],0,0,0,0,["x",ANK(AD9)],KE,0,JO,[],0,0,0,0,["x",ANK(UC)],W6,0,KE,[],0,0,0,0,["x",ANK(AF4)]]);
$rt_metadata([Xo,0,V,[],0,0,0,0,["x",ANK(ACl)],V0,0,V,[],0,0,0,0,["x",ANK(AF0)],VJ,0,V,[],0,0,0,0,["x",ANK(AKs)],YL,0,V,[],0,0,0,0,["x",ANK(AGw)],Z1,0,V,[],0,0,0,0,["x",ANK(AAd)],Yl,0,V,[],0,0,0,0,["x",ANK(AEx)],X9,0,V,[],0,0,0,0,["x",ANK(AId)],Y2,0,V,[],0,0,0,0,["x",ANK(ACi)],Vc,0,V,[],0,0,0,0,["x",ANK(ACG)],UV,0,V,[],0,0,0,0,["x",ANK(AKk)],Yp,0,V,[],0,0,0,0,["x",ANK(Z$)],Yx,0,V,[],0,0,0,0,["x",ANK(AFh)],Wj,0,V,[],0,0,0,0,["x",ANK(ACN)],Xs,0,V,[],0,0,0,0,["x",ANK(ADM)],Zz,0,V,[],0,0,0,0,["x",ANK(AFj)],Yw,0,
V,[],0,0,0,0,["x",ANK(AJE)],WJ,0,V,[],0,0,0,0,["x",ANK(AHz)],Wh,0,V,[],0,0,0,0,["x",ANK(AGp)],ZY,0,V,[],0,0,0,0,["x",ANK(AIn)],H2,0,V,[],0,0,0,0,["x",ANK(Xp)],Y4,0,H2,[],0,0,0,0,["x",ANK(AGi)],W_,0,Jk,[],0,0,0,0,["x",ANK(AA$)],Wb,0,Io,[],0,0,0,0,["x",ANK(ADX)],VP,0,V,[],0,0,0,0,["x",ANK(AFy)],V8,0,V,[],0,0,0,0,["x",ANK(AJ_)],W0,0,V,[],0,0,0,0,["x",ANK(ADr)],W8,0,V,[],0,0,0,0,["x",ANK(Z_)],VU,0,C,[],4,0,0,0,0,Vr,0,C,[],4,3,0,0,0,LC,0,C,[],0,3,0,0,0,Ys,0,C,[],0,3,0,0,0,WH,0,C,[],4,3,0,0,0,Tj,0,C,[],3,3,0,0,0,Vw,
0,C,[Tj],0,3,0,0,0,Pv,0,C,[Bd],0,3,0,0,0,Pu,0,C,[Bd],0,3,0,0,0,SH,0,S,[],0,0,0,0,["j",ANL(AC$)],SF,0,S,[],0,0,0,0,["j",ANL(AAu)],Mm,0,S,[],0,0,0,0,["j",ANL(AFo),"bH",ANK(ADO)],Ms,0,S,[],0,0,0,0,["j",ANL(AIb)],Mq,0,S,[],0,0,0,0,["j",ANL(AIQ)],Mr,0,S,[],0,0,0,0,["j",ANL(AFK)],Mv,0,S,[],0,0,0,0,["j",ANL(ACJ)],Mw,0,S,[],0,0,0,0,["j",ANL(Z4)],Mt,0,S,[],0,0,0,0,["j",ANL(ADS)],Mu,0,S,[],0,0,0,0,["j",ANL(AFN)],My,0,S,[],0,0,0,0,["j",ANL(AJN)],MA,0,S,[],0,0,0,0,["j",ANL(ACf)],Ml,0,S,[],0,0,0,0,["j",ANL(ALk)],M9,0,S,
[],0,0,0,0,["j",ANL(ADW)]]);
$rt_metadata([Mj,0,S,[],0,0,0,0,["j",ANL(ACe)],Mk,0,S,[],0,0,0,0,["j",ANL(ADA)],Mp,0,S,[],0,0,0,0,["j",ANL(AEX)],Mi,0,S,[],0,0,0,0,["j",ANL(AJw)],Mn,0,S,[],0,0,0,0,["j",ANL(ABn)],Mo,0,S,[],0,0,0,0,["j",ANL(AHq)],Kd,0,C,[],3,3,0,0,0,Pl,0,C,[Kd],4,3,0,0,0,V$,0,C,[],0,3,0,0,0,NG,0,C,[],3,3,0,0,0,PS,0,C,[NG],0,3,0,0,0,Lk,0,FL,[],0,0,0,0,["bQ",ANN(ADt),"bW",ANO(AK9),"eq",ANK(AB2)],Se,0,C,[BQ],0,3,0,0,["U",ANL(AHC)],Sf,0,C,[BQ],0,3,0,0,["U",ANL(AGA)],Tf,0,C,[Be],0,3,0,0,0,Qo,0,C,[BQ],0,3,0,0,["U",ANL(AD4)],Qr,0,C,
[BQ],0,3,0,0,["U",ANL(AAo)],RK,0,C,[Kd],0,0,0,0,0,Rf,0,C,[BQ],0,3,0,0,["U",ANL(AFz)],PO,0,S,[],0,0,0,0,["j",ANL(AJU)],K6,0,S,[],0,0,0,0,["j",ANL(AA6)],O5,0,S,[],0,0,0,0,["j",ANL(AAT)],O4,0,S,[],0,0,0,0,["j",ANL(ADq)],Tg,0,S,[],0,0,0,0,["j",ANL(AEI)],MS,0,S,[],0,0,0,0,["j",ANL(AJX)],L6,0,S,[],0,0,0,0,["j",ANL(AGY)],Oe,0,S,[],0,0,0,0,["j",ANL(AIg)],KX,0,S,[],0,0,0,0,["j",ANL(AKP)],K4,0,S,[],0,0,0,0,["j",ANL(ACw)],LU,0,S,[],0,0,0,0,["j",ANL(AJ9)],Nh,0,S,[],0,0,0,0,["j",ANL(AFY)],Np,0,S,[],0,0,0,0,["j",ANL(AHQ)],QC,
0,S,[],0,0,0,0,["j",ANL(AJO)],Pm,0,S,[],0,0,0,0,["j",ANL(AKB)],Ld,0,S,[],0,0,0,0,["j",ANL(ACj)],Kr,0,S,[],0,0,0,0,["j",ANL(AG0)],O0,0,Kr,[],0,0,0,0,["j",ANL(AI7)],NH,0,C,[Hz],0,3,0,0,["nw",ANK(AFB)],PX,0,C,[Bd],0,3,0,0,["m",ANL(AGO)],Pq,0,C,[],3,3,0,0,0,PW,0,C,[Bd],0,3,0,0,["m",ANL(AGe)],PV,0,C,[Bd],0,3,0,0,["m",ANL(AHK)],Vj,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.EZ=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","url(","FATAL: WebGL is not enabled in the browser","keydown","keyup",
"mousemove","mousedown","mouseup","wheel","dblclick","contextmenu","focus","blur","drop","paste","copy","cut","javaClass@","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","fonts/","JetBrains Mono","Illegal argument javaObject instanceof ","#wasm","[Graphics] GL version: ","WebGL 2","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = vTex;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = uTexTransform.xy + vTex * uTexTransform.zw;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","Can\'t compare "," to ","POS2_UV2","Either src or dest is null","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","[",", ","]","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ",
"Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","selectScene ","DemoEdit0","RenderTexture","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","TextureRegionTestScene","WorkerTest","Consolas","Courier New","|The sample text","unsupported","supported","ReadClipboardText is ","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
+"(int field) {\n    return field + this.field;\n  }\n\n  public interface A {\n    int sumField(int field);\n\n    default void foo() {\n      sumField(10);\n    }\n  }\n}\n","java","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Segoe UI","Verdana","Fonts >","Settings >","Int","Iter",
"VP","Rep","parser >","open ...","Development >","No definition or usages","pointer","text","ew-resize","ns-resize","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","onContextMenu","main.java  ","5    ","private static void foo (...);           ","25   ","String foo = \"boo\";                      ","131  ","int a = 5;                               ","class.java ","176  ","public class FindTest extend Test {...}; ","1234 ",
"sub.java   ","4321 ","demo.java  ","23872","scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText "," on Copy","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ",
"double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","trying to display popup with unknown screen size and dpr","  ","Set editor font to: ",", ascent+descent = ",", lineHeight = ",", caretHeight = ","topBase(font, lineHeight) = ","\n","\r","Full file parsed in ","ms","change model language: from = "," to = ","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing","CppParser.parse","JavaScriptParser.parseBytes",
"JavaParser.parse","#A9B7C6","#40332B","#344134","unClick b=","click b=",", count=","key up = ","key down = ",", keyCode = ",", isRepeated = ","menu","onCopy","copied","This is a "," text sample","focus lost","Toolbar font has not been set","toolbar size is unknown","onLeave item ",", item ","#3C3F41","#616161","#4B6EAF","#781732","#CCCCCC","#BBBBBB","tbH onClickOutside","tbV onClickOutside","other file...","...","... and "," more usages","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ",
"methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","trying to redefine texture size in setContent","onEnter item ","FindUsages font has not been set","FindUsages size is unknown","prev = "," pixelLocation = ",", next = ","defaultText","keyword","field","#9876AA","string","#6A8759","comma","#CC7832","error","unused","#72737A","number","#6897BB",
"method","#FFC66D","showUsage","braceMatch","#FFEF28","#3B514D","comment","#808080","annotation","#BBB529","type","#287BDE","operator","#5F8C8A","\\n","onPopupClosed","newAction must be non-null","The last byte in dst ","Expected "," ints to read, but "," read","showOpenFilePicker -> ","showDirectoryPicker -> "," onPastePlainText: "," writeClipboardText \'","\' ok"," readClipboardText: "," error: ","opening file ",".java","readClipboardText error: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ",
"Viewport parsed in ","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s",
"S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog",
"Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements",
"GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo",
"Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms",
"SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
BA.prototype.toString=function(){return $rt_ustr(this);};
BA.prototype.valueOf=BA.prototype.toString;C.prototype.toString=function(){return $rt_ustr(ABC(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Ce=Long_add;var IW=Long_sub;var BI=Long_mul;var C2=Long_div;var K$=Long_rem;var AL2=Long_or;var CG=Long_and;var AQK=Long_xor;var EO=Long_shl;var FE=Long_shr;var DF=Long_shru;var AMm=Long_compare;var EG=Long_eq;var AQL=Long_ne;var ACQ=Long_lt;var Nz=Long_le;var ACA=Long_gt;var V4=Long_ge;var AQM=Long_not;var AMx=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(AMB);
main.javaException=$rt_javaException;
(function(){var c;c=QJ.prototype;c.f=c.U;c=QH.prototype;c.f=c.U;c=Ls.prototype;c.f=c.U;c=Wt.prototype;c.getLength=c.Ax;c.get=c.A5;c=LV.prototype;c.f=c.U;c=U5.prototype;c.dispatchEvent=c.wD;c.addEventListener=c.zm;c.removeEventListener=c.A_;c.getLength=c.wI;c.get=c.ub;c.addEventListener=c.vq;c.removeEventListener=c.x9;c=Sb.prototype;c.onAnimationFrame=c.ya;c=R9.prototype;c.f=c.qw;c=R6.prototype;c.handleEvent=c.bK;c=R7.prototype;c.f=c.U;c=ST.prototype;c.handleEvent=c.bK;c=SU.prototype;c.handleEvent=c.bK;c=SV.prototype;c.handleEvent
=c.bK;c=SW.prototype;c.handleEvent=c.bK;c=SX.prototype;c.handleEvent=c.bK;c=SY.prototype;c.handleEvent=c.bK;c=SZ.prototype;c.handleEvent=c.bK;c=S0.prototype;c.handleEvent=c.bK;c=S1.prototype;c.handleEvent=c.bK;c=S2.prototype;c.handleEvent=c.bK;c=ZO.prototype;c.handleEvent=c.bK;c=ZP.prototype;c.handleEvent=c.bK;c=ZQ.prototype;c.handleEvent=c.bK;c=ZR.prototype;c.handleEvent=c.bK;c=Q$.prototype;c.handleEvent=c.bK;c=TX.prototype;c.f=c.U;c=TZ.prototype;c.f=c.U;c=LA.prototype;c.f=c.U;c=Lz.prototype;c.f=c.U;c=Ly.prototype;c.f
=c.U;c=Lx.prototype;c.f=c.U;c=LO.prototype;c.accept=c.Bz;c=M8.prototype;c.f=c.qw;c=M6.prototype;c.f=c.qw;c=Ri.prototype;c.f=c.U;c=Og.prototype;c.f=c.U;c=TL.prototype;c.f=c.U;c=TK.prototype;c.f=c.U;c=Ta.prototype;c.f=c.U;c=S_.prototype;c.f=c.U;c=K8.prototype;c.f=c.U;c=TE.prototype;c.handleEvent=c.bK;c=NO.prototype;c.f=c.U;c=K2.prototype;c.onTimer=c.nw;c=KJ.prototype;c.onTimer=c.nw;c=TI.prototype;c.f=c.U;c=Tt.prototype;c.f=c.U;c=Q1.prototype;c.f=c.U;c=Se.prototype;c.f=c.U;c=Sf.prototype;c.f=c.U;c=Qo.prototype;c.f
=c.U;c=Qr.prototype;c.f=c.U;c=Rf.prototype;c.f=c.U;c=NH.prototype;c.onTimer=c.nw;})();
})(this);
