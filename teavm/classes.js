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
{if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.ff=f;}
function $rt_cls(cls){return AAs(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FG(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bT.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AMd(t);}
function $rt_throwableCause(t){return AMl(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ARI());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ARJ(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ARK());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BD=$rt_compare;var ARL=$rt_nullCheck;var E=$rt_cls;var R=$rt_createArray;var Ve=$rt_isInstance;var ARM=$rt_nativeThread;var ARN=$rt_suspending;var ARO=$rt_resuming;var ARP=$rt_invalidPointer;var B=$rt_s;var Bo=$rt_eraseClinit;var Bd=$rt_imul;var D6=$rt_wrapException;var ARQ=$rt_checkBounds;var ARR=$rt_checkUpperBound;var ARS=$rt_checkLowerBound;var ART=$rt_wrapFunction0;var ARU=$rt_wrapFunction1;var ARV=$rt_wrapFunction2;var ARW=$rt_wrapFunction3;var ARX=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var Zo=$rt_createCharArrayFromData;var AQw=$rt_createByteArrayFromData;var ARY=$rt_createShortArrayFromData;var ES=$rt_createIntArrayFromData;var ARZ=$rt_createBooleanArrayFromData;var AR0=$rt_createFloatArrayFromData;var AR1=$rt_createDoubleArrayFromData;var AEL=$rt_createLongArrayFromData;var ARH=$rt_createBooleanArray;var EV=$rt_createByteArray;var AR2=$rt_createShortArray;var BL=$rt_createCharArray;var BG=$rt_createIntArray;var ARl=$rt_createLongArray;var AC2=$rt_createFloatArray;var AR3
=$rt_createDoubleArray;var BD=$rt_compare;var AR4=$rt_castToClass;var AR5=$rt_castToInterface;var AR6=Long_toNumber;var Z=Long_fromInt;var AR7=Long_fromNumber;var B9=Long_create;var Ee=Long_ZERO;var AR8=Long_hi;var Es=Long_lo;
function C(){this.$id$=0;}
function AR9(){var a=new C();ABB(a);return a;}
function ABB(a){}
function Cz(a){return AAs(a.constructor);}
function AJl(a,b){return a!==b?0:1;}
function AEs(a){var b,c,d,e,f,g,h,i,j;b=Xf(a);if(!b)c=B(0);else{d=(((32-MO(b)|0)+4|0)-1|0)/4|0;e=BL(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=GT((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FG(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function Xf(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AIM(a){var b,c,d;if(!Ve(a,Ec)&&a.constructor.$meta.item===null){b=new UN;U(b);J(b);}b=ADb(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Qt(){var a=this;C.call(a);a.tt=0;a.p4=null;}
function AQJ(b){var c,d,e,f,g,h,i,j,k,l;ABy();Xz();ZV();AAU();YL();ABg();Xl();ABE();AAR();ACK();Y6();Xp();AAF();AAc();AAG();ZA();YR();Yb();Za();Zc();XI();ZH();ACu();c=(XL()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))N9(B(2),B(3));else{d=new Qt;BI(d);e=new SR;e.rC=d;f=new Mn;c=new $rt_globals.Worker("teavm/worker.js");g=new MS;g.oi=c;g.oj=e;g.ok=f;e=Bl(g,"f");c.onmessage=e;h=H(KX,[I6(B(4),B(5),400),I6(B(6),B(7),400),I6(B(8),B(5),700),I6(B(9),
B(7),700)]);b=R(KX,1);b.data[0]=AM_(B(10),EZ(B(11),B(12)),B(5),400);b=(KS(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.ra;f=c.pY;k=new M;O(k);BB(G(G(k,B(13)),f),41);k=N(k);f=c.pN;l=c.n7;f=AGK($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BI(d);c=new SS;c.su=d;g=new SQ;e.then(Bl(c,"f"),Bl(g,"f"));}}
function ZE(b){var c,d,e,f,g,h,i,j,k;c=new RD;d=new QI;c.o4=new $rt_globals.TextDecoder("utf-16");e=new UM;e.n3=c;c.qP=e;e=new UH;e.tH=c;c.lA=e;f=new UI;f.qE=c;c.sJ=new $rt_globals.ResizeObserver(Bl(f,"f"));e=new UF;e.nE=c;c.mt=e;c.hL=1;f=new N7;f.wm=null;f.iY=AR$;c.lc=f;c.pq=b;f=new UG;f.sS=c;e=Bl(f,"f");b.onmessage=e;e=Zz();b.postMessage(e);c.mh=(DW()).getElementById("canvasDiv");b=XL();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dn
=b;c.mh.appendChild(b);f=c.dn;e=AKD(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)N9(B(2),B(14));else{g=new Ou;e=c.dn;f=c.lA;g.di=null;g.gJ=e;g.cf=AQT(f);h=$rt_globals.window;i=R(Di,14);j=i.data;k=new Vv;k.mO=g;j[0]=CQ(g,e,B(15),k);f=new Vw;f.rj=g;j[1]=CQ(g,e,B(16),f);f=new Vx;f.nT=g;j[2]=CQ(g,e,B(17),f);f=new Vy;f.tB=g;j[3]=CQ(g,e,B(18),f);f=new Vz;f.qw=g;j[4]=CQ(g,e,B(19),f);f=new VA;f.nc=g;j[5]=CQ(g,e,B(20),f);k=new VB;k.tO=g;j[6]=CQ(g,e,B(21),k);k=new VC;k.qH=g;j[7]=CQ(g,e,B(22),k);k=new VD;k.nt
=g;j[8]=CQ(g,e,B(23),k);k=new VE;k.s0=g;j[9]=CQ(g,e,B(24),k);k=new WN;k.sq=g;j[10]=CQ(g,e,B(25),k);k=new WO;k.rx=g;j[11]=AAA(g,h,B(26),k,1);k=new WP;k.lV=g;j[12]=CQ(g,h,B(27),k);k=new WQ;k.tf=g;j[13]=CQ(g,h,B(28),k);g.vI=AOn(i);Y0(g,e);c.kP=g;c.fN=AQi(b,c.lA);AMO(c.sJ,c.dn);e=$rt_globals.window;g=c.mt;e.addEventListener("resize",Bl(g,"handleEvent"));c.e3=ZR(d,YT(c));Sc(c);}AA8(c);}
var Mh=F(0);
var LK=F(0);
function Vq(){var a=this;C.call(a);a.jI=null;a.fA=null;}
function AAs(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Vq;c.fA=b;d=c;b.classObject=d;}return c;}
function HB(a){if(a.jI===null)a.jI=$rt_str(a.fA.$meta.name);return a.jI;}
function Hs(a){return a.fA.$meta.primitive?1:0;}
function HH(a){return AAs(a.fA.$meta.item);}
var Ye=F();
function Bl(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Kw(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var X3=F();
function ADb(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AAv(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AAv(d[e],c))return 1;e=e+1|0;}return 0;}
var C9=F(0);
var CI=F(0);
var Ig=F(0);
function Bv(){var a=this;C.call(a);a.bT=null;a.hl=0;}
var AR_=null;var ASa=null;var ASb=null;function Ez(){Ez=Bo(Bv);ANJ();}
function AG7(){var a=new Bv();Xr(a);return a;}
function FG(a){var b=new Bv();G3(b,a);return b;}
function I4(a,b,c){var d=new Bv();W1(d,a,b,c);return d;}
function Xr(a){Ez();a.bT=AR_;}
function G3(a,b){var c,d,e,f;Ez();b=b.data;c=b.length;d=BL(c);e=d.data;a.bT=d;f=0;while(f<c){e[f]=b[f];f=f+1|0;}}
function W1(a,b,c,d){var e,f,g;Ez();e=BL(d);f=e.data;a.bT=e;g=0;while(g<d){f[g]=b.data[g+c|0];g=g+1|0;}}
function Ls(b){var c;Ez();c=AG7();c.bT=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.bT.data;if(b<c.length)return c[b];}d=new GR;U(d);J(d);}
function I(a){return a.bT.data.length;}
function E_(a){return a.bT.data.length?0:1;}
function OK(a,b,c,d,e){var f,g,h;if(b>=0&&b<=c&&c<=I(a)&&e>=0){d=d.data;if((e+(c-b|0)|0)<=d.length){while(b<c){f=e+1|0;g=b+1|0;d[e]=L(a,b);e=f;b=g;}return;}}h=new By;U(h);J(h);}
function Tn(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Ew(a,b){if(a===b)return 1;return Tn(a,b,0);}
function Gp(a,b,c){var d,e,f,g,h;d=V(0,c);if(b<65536){e=b&65535;while(true){f=a.bT.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=HD(b);h=H7(b);while(true){f=a.bT.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function FM(a,b,c){var d,e,f,g,h;d=X(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bT.data[d]==e)break;d=d+(-1)|0;}return d;}f=HD(b);g=H7(b);while(true){if(d<1)return (-1);h=a.bT.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function YF(a,b,c){var d,e,f;d=V(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function B7(a,b,c){var d,e;d=BD(b,c);if(d>0){e=new By;U(e);J(e);}if(!d){Ez();return ASa;}if(!b&&c==I(a))return a;return I4(a.bT,b,c-b|0);}
function Dr(a,b){return B7(a,b,I(a));}
function OS(a,b,c){return B7(a,b,c);}
function EZ(a,b){var c,d,e,f,g,h;if(E_(b))return a;if(E_(a))return b;c=BL(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Ls(c);}
function Ue(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BB(d,L(a,f));}f=f+1|0;}G(d,Dr(a,f));return N(d);}
function QN(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return B7(a,b,c+1|0);}
function AEr(a){return a;}
function Gg(a){var b,c,d,e,f;b=a.bT.data;c=BL(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cu(b){Ez();return b===null?B(29):b.cp();}
function De(b){var c;Ez();c=new M;O(c);return N(S(c,b));}
function Bt(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function Ku(a){var b,c,d,e;a:{if(!a.hl){b=a.bT.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hl=(31*a.hl|0)+e|0;d=d+1|0;}}}return a.hl;}
function K7(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gm;Bj(b,B(30));J(b);}ASc=1;d=new PS;d.ju=R(CN,10);d.fT=(-1);d.ee=(-1);d.br=(-1);e=new Gr;e.eb=1;e.bE=b;e.ba=BL(I(b)+2|0);D7(Gg(b),0,e.ba,0,I(b));f=e.ba.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.qx=g;e.fD=0;EO(e);EO(e);d.f=e;d.c_=0;d.kr=WL(d,(-1),0,null);if(!C$(d.f)){b=new H$;h=d.f;ID(b,B(31),h.bE,h.cV);J(b);}if(d.mQ)d.kr.dP();b=Ck();h=new Rm;h.hJ=(-1);h.jQ=(-1);h.uM=d;h.sz=d.kr;h.h1=a;h.hJ=0;g=I(a);h.jQ=g;e=new Ug;i=h.hJ;j=d.fT;k=d.ee+1|0;l=d.br+
1|0;e.g7=(-1);m=j+1|0;e.nO=m;e.dm=BG(m*2|0);f=BG(l);e.iT=f;G_(f,(-1));if(k>0)e.kf=BG(k);G_(e.dm,(-1));WD(e,a,i,g);h.co=e;e.eQ=1;n=0;m=0;if(!I(a)){f=R(Bv,1);f.data[0]=B(31);}else{while(true){l=I(h.h1);if(!Xo(h.co))l=h.jQ;e=h.co;if(e.dM>=0&&Y4(e)==1){e=h.co;e.dM=Ir(e);if(Ir(h.co)==AAT(h.co)){e=h.co;e.dM=e.dM+1|0;}g=h.co.dM;g=g<=l&&LU(h,g)?1:0;}else g=LU(h,h.hJ);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BW(b,OS(a,m,ACf(h)));m=YO(h);n=g;}a:{BW(b,OS(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Bs(b,
g)))break a;Ed(b,g);}}if(g<0)g=0;f=Hm(b,R(Bv,g));}return f;}
function AGD(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=X(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function ANJ(){AR_=BL(0);ASa=AG7();ASb=new RP;}
function Gi(){var a=this;C.call(a);a.g2=null;a.ke=null;a.iu=0;a.i0=0;}
function ASd(){var a=new Gi();U(a);return a;}
function ASe(a){var b=new Gi();Bj(b,a);return b;}
function U(a){a.iu=1;a.i0=1;}
function Bj(a,b){a.iu=1;a.i0=1;a.g2=b;}
function AGs(a){return a;}
function AMd(a){return a.g2;}
function AMl(a){var b;b=a.ke;if(b===a)b=null;return b;}
var Eu=F(Gi);
var GV=F(Eu);
var Zg=F(GV);
var DI=F();
function E3(){DI.call(this);this.fc=0;}
var ASf=null;var ASg=null;function ABS(a){var b=new E3();Jc(b,a);return b;}
function Jc(a,b){a.fc=b;}
function IS(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new C6;Bj(b,B(32));J(b);}d=I(b);if(0==d){b=new C6;Bj(b,B(33));J(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new C6;U(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=NZ(L(b,f));if(i<0){j=new C6;k=B7(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bj(j,N(b));J(j);}if(i>=c){j=new C6;l=B7(b,0,d);b=new M;O(b);G(G(S(G(b,B(35)),c),B(36)),l);Bj(j,N(b));J(j);}g=Bd(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new C6;k=B7(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bj(j,N(b));J(j);}b=new C6;j=new M;O(j);S(G(j,B(38)),c);Bj(b,N(j));J(b);}
function FL(b){var c,d;if(b>=(-128)&&b<=127){a:{if(ASg===null){ASg=R(E3,256);c=0;while(true){d=ASg.data;if(c>=d.length)break a;d[c]=ABS(c-128|0);c=c+1|0;}}}return ASg.data[b+128|0];}return ABS(b);}
function Le(a){var b;b=a.fc;return (MC(ARu(20),b,10)).cp();}
function MO(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function HP(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Jr(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function AIG(a,b){b=b;return BD(a.fc,b.fc);}
function ABy(){ASf=E($rt_intcls());}
function F5(){var a=this;C.call(a);a.C=null;a.O=0;}
function ASh(){var a=new F5();O(a);return a;}
function ARu(a){var b=new F5();FJ(b,a);return b;}
function O(a){FJ(a,16);}
function FJ(a,b){a.C=BL(b);}
function MC(a,b,c){return Zu(a,a.O,b,c);}
function Zu(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)B$(a,b,b+1|0);else{B$(a,b,b+2|0);f=a.C.data;g=b+1|0;f[b]=45;b=g;}a.C.data[b]=GT(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bd(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;B$(a,b,b+i|0);if(e)e=b;else{f=a.C.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.C.data;b=e+1|0;f[e]=GT($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AAi(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BD(c,0.0);if(!d){B$(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){B$(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){B$(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B$(a,b,b+8|0);d=b;}else{B$(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=ASi;AAd(c,f);d=f.jV;g=f.jC;h=f.m9;i=1;j=1;if(h)j=2;k=9;l=ANe(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=V(k,i+1|0);g=0;}else{d=d/ASj.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;B$(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.C.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.C.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.C.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function Yx(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BD(c,0.0);if(!d){B$(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){B$(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){B$(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B$(a,b,b+8|0);d=b;}else{B$(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=ASk;Zx(c,f);g=f.kt;h=f.jo;i=f.mJ;j=1;k=1;if(i)k=2;l=18;m=AK3(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=V(l,j+1|0);h=0;}else{g=Df(g,ASl.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;B$(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.C.data;k=b+1|0;e[b]=45;}n=B9(1569325056, 23283064);o=0;while(o<l){if(OJ(n,Ee))d=0;else{d=Es(Df(g,n));g=L2(g,
n);}e=a.C.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Df(n,Z(10));o=o+1|0;}if(h){e=a.C.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function ANe(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AK3(b){var c,d,e,f,g;c=Z(1);d=0;e=16;f=ASm.data;g=f.length-1|0;while(g>=0){if(EY(L2(b,BN(c,f[g])),Ee)){d=d|e;c=BN(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BB(a,b){return a.ll(a.O,b);}
function Wp(a,b,c){B$(a,b,b+1|0);a.C.data[b]=c;return a;}
function IV(a,b){var c,d;c=a.C.data.length;if(c>=b)return;d=c>=1073741823?2147483647:V(b,V(c*2|0,5));a.C=XH(a.C,d);}
function N(a){return I4(a.C,0,a.O);}
function V9(a,b,c,d){return a.kO(a.O,b,c,d);}
function Mb(a,b,c,d,e){var f,g,h,i;B$(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.C.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function HR(a,b){return a.j2(b,0,b.data.length);}
function B$(a,b,c){var d,e,f,g;d=a.O;e=d-b|0;a.he((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.C.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.O=a.O+(c-b|0)|0;}
var Hv=F(0);
var M=F(F5);
function KZ(){var a=new M();AOv(a);return a;}
function AOv(a){O(a);}
function G(a,b){var c;c=a.O;if(b===null)b=B(29);Lt(a,c,b);return a;}
function BX(a,b){Lt(a,a.O,b);return a;}
function S(a,b){MC(a,b,10);return a;}
function Ht(a,b){var c,d,e,f,g,h,i,j;c=a.O;d=1;if(AF1(b,Ee)){d=0;b=AQF(b);}a:{if(Kq(b,Z(10))<0){if(d)B$(a,c,c+1|0);else{B$(a,c,c+2|0);e=a.C.data;f=c+1|0;e[c]=45;c=f;}a.C.data[c]=GT(Es(b),10);}else{g=1;h=Z(1);i=Fs(Z(-1),Z(10));b:{while(true){j=BN(h,Z(10));if(Kq(j,b)>0){j=h;break b;}g=g+1|0;if(Kq(j,i)>0)break;h=j;}}if(!d)g=g+1|0;B$(a,c,c+g|0);if(d)f=c;else{e=a.C.data;f=c+1|0;e[c]=45;}while(true){if(EY(j,Ee))break a;e=a.C.data;c=f+1|0;e[f]=GT(Es((Fs(b,j))),10);b=MA(b,j);j=Fs(j,Z(10));f=c;}}}return a;}
function E6(a,b){AAi(a,a.O,b);return a;}
function Xj(a,b){BB(a,b);return a;}
function FQ(a,b){Lt(a,a.O,!b?B(39):B(40));return a;}
function AB8(a,b,c){var d,e,f,g,h,i;d=BD(b,c);if(d<=0){e=a.O;if(b<=e){if(d){f=e-c|0;a.O=e-(c-b|0)|0;g=0;while(g<f){h=a.C.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new GR;U(i);J(i);}
function Vd(a,b){var c,d,e,f;if(b>=0){c=a.O;if(b<c){c=c-1|0;a.O=c;while(b<c){d=a.C.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new GR;U(f);J(f);}
function AIB(a,b,c,d,e){Mb(a,b,c,d,e);return a;}
function AFO(a,b,c,d){V9(a,b,c,d);return a;}
function XT(a){return a.O;}
function DF(a){return N(a);}
function AIJ(a,b){IV(a,b);}
function AI$(a,b,c){Wp(a,b,c);return a;}
function Lt(a,b,c){var d,e,f;if(b>=0&&b<=a.O){a:{if(c===null)c=B(29);else if(E_(c))break a;IV(a,a.O+I(c)|0);d=a.O-1|0;while(d>=b){a.C.data[d+I(c)|0]=a.C.data[d];d=d+(-1)|0;}a.O=a.O+I(c)|0;d=0;while(d<I(c)){e=a.C.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new GR;U(c);J(c);}
var Eg=F(GV);
var AAz=F(Eg);
function ASn(a){var b=new AAz();AED(b,a);return b;}
function AED(a,b){Bj(a,b);}
var Y9=F(Eg);
function ASo(a){var b=new Y9();AE0(b,a);return b;}
function AE0(a,b){Bj(a,b);}
var DP=F(Gi);
function ASp(){var a=new DP();AAQ(a);return a;}
function AAQ(a){U(a);}
var Bm=F(DP);
function ARJ(a){var b=new Bm();AN9(b,a);return b;}
function AN9(a,b){Bj(a,b);}
var SE=F(0);
var Di=F(0);
function AOn(b){var c;c=new Pd;c.u0=b;return c;}
function CK(b,c){if(b!==null)b.gx();return c;}
var NU=F(0);
function H2(){var a=this;C.call(a);a.k1=0;a.kc=0;}
var ASq=0;function FB(a){ASq=ASq-1|0;}
function FN(a,b,c){Iz(a,Yq(b,c,400,0));}
function PM(a,b){return JX(a,b,0.875);}
function JX(a,b,c){return Ef(a,b)+c|0;}
function Qe(){var a=this;H2.call(a);a.i3=null;a.bn=null;a.l7=null;}
function El(a){var b,c,d;b=a.bn;c=a.k1;d=a.kc;b.clearRect(0.0,0.0,c,d);}
function Q5(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bn;d="center";c.textAlign=d;break a;case 2:c=a.bn;d="right";c.textAlign=d;break a;default:break a;}d=a.bn;c="left";d.textAlign=c;}}
function CC(a,b){Iz(a,b.mz);}
function Iz(a,b){var c;if(!(a.l7==b?1:0)){c=a.bn;a.l7=b;c.font=b;}}
function Yq(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Ce(a,b,c,d){var e,f,g;e=a.bn;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function AAO(a,b){var c,d;if(!b){c=a.bn;d="alphabetic";c.textBaseline=d;}else{d=a.bn;c="top";d.textBaseline=c;}}
function Ef(a,b){var c;c=$rt_ustr(b);return a.bn.measureText(c).width;}
function KD(a,b,c,d){var e,f;e=a.bn;f=$rt_ustr(FG(Zo([35,Gn(b/16|0),Gn(b%16|0),Gn(c/16|0),Gn(c%16|0),Gn(d/16|0),Gn(d%16|0)])));e.fillStyle=f;}
var XA=F();
var ABO=F();
function D_(b,c){if(b===c)return 1;return b!==null?b.ex(c):c!==null?0:1;}
function BI(b){if(b!==null)return b;b=new Gm;Bj(b,B(31));J(b);}
var Y=F(0);
function SR(){C.call(this);this.rC=null;}
var BC=F(0);
var ZQ=F();
var XE=F(0);
function I6(b,c,d){return AM_(B(41),EZ(B(11),b),c,d);}
var ABo=F(0);
var ABj=F(0);
function KS(b,c){var d,e,f,g;d=c.data;e=b.data.length;f=d.length;g=Da(b,e+f|0);D7(c,0,g,e,f);return g;}
function J$(b,c,d){D7(b,c,d,0,d.data.length);return d;}
function P0(b,c,d){var e;if(c>0)D7(b,0,d,0,c);e=d.data.length;if(c<e)D7(b,c+1|0,d,c,e-c|0);return d;}
function Zb(b,c,d,e){var f;if(c>0)D7(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)D7(b,d,e,c,f-d|0);}return e;}
function GU(b){var c;c=new U4;c.h$=b;return c;}
function KX(){var a=this;C.call(a);a.ra=null;a.pY=null;a.pN=null;a.n7=0;}
function AM_(a,b,c,d){var e=new KX();AL5(e,a,b,c,d);return e;}
function AL5(a,b,c,d,e){a.ra=b;a.pY=c;a.pN=d;a.n7=e;}
var Yc=F();
function AGK(b,c){return {style:b,weight:c};}
var BU=F(0);
function SS(){C.call(this);this.su=null;}
function ACO(a,b){var c,d,e;c=a.su;d=0;while(d<b.length){e=b[d];(DW()).fonts.add(e);d=d+1|0;}c.tt=1;b=c.p4;if(b!==null)ZE(b);}
var SQ=F();
function ANS(a,b){$rt_globals.console.info("font load error "+b);}
var ABf=F();
var YP=F();
function N9(b,c){var d,e,f;d=(DW()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(DW()).getElementById($rt_ustr(b)).appendChild(d);}
function XL(){return (DW()).createElement("canvas");}
function AKD(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ACH=F();
var Mn=F();
function AKn(a,b){var c;c=new Bm;Bj(c,$rt_str(b.message));J(c);}
var U6=F();
function Fm(b){return $rt_str(b);}
var XP=F();
function XH(b,c){var d,e,f,g;b=b.data;d=BL(c);e=d.data;f=X(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function AB3(b,c){var d,e,f,g;b=b.data;d=EV(c);e=d.data;f=X(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ACq(b,c){var d,e,f,g;b=b.data;d=BG(c);e=d.data;f=X(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Da(b,c){var d,e,f,g;d=b.data;e=TH(HH(Cz(b)),c);f=X(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Yo(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BX(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(43));G(c,e[d]);d=d+1|0;}BX(c,B(44));return N(c);}
function AAN(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BX(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(43));S(c,e[d]);d=d+1|0;}BX(c,B(44));return N(c);}
function AMC(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BX(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(43));E6(c,e[d]);d=d+1|0;}BX(c,B(44));return N(c);}
function APc(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);BX(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(43));f=e[d];Yx(c,c.O,f);d=d+1|0;}BX(c,B(44));return N(c);}
function G_(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BA;U(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function YM(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AR$;e=R(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=X(j,h+f|0);l=h+(2*f|0)|0;m=X(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.ls(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AAj(b,c){return S0(b,0,b.data.length,c);}
function S0(b,c,d,e){var f,g,h,i,j;f=BD(c,d);if(f>0){g=new BA;U(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var Kz=F();
var ASr=null;var ASs=null;function Bx(){if(ASr===null)ASr=AJU(ASt,0);return ASr;}
function KR(){if(ASs===null)ASs=AJU(ASu,0);return ASs;}
function D7(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=AAP(b)&&(e+f|0)<=AAP(d)){a:{b:{if(b!==d){g=HH(Cz(b));h=HH(Cz(d));if(g!==null&&h!==null){if(g===h)break b;if(!Hs(g)&&!Hs(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fA;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AAv(n.constructor,o)?1:0)){QE(b,c,d,e,j);b=new H8;U(b);J(b);}j=j+1|0;k=m;}QE(b,c,d,e,f);return;}if(!Hs(g))break a;if(Hs(h))break b;else break a;}b=new H8;U(b);J(b);}}QE(b,c,
d,e,f);return;}b=new H8;U(b);J(b);}b=new By;U(b);J(b);}d=new Gm;Bj(d,B(45));J(d);}
function QE(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Fq(){return Long_fromNumber(new Date().getTime());}
function AAV(){return AR7($rt_globals.performance.now()*1000000.0);}
var I5=F(0);
var Y3=F();
function AOX(a,b){return a.uI(b);}
function AEO(a){return a.v$();}
var Zs=F();
var FA=F(0);
var RP=F();
var C0=F();
var ASv=null;var ASw=null;var ASx=null;var ASy=null;var ASz=null;var ASA=null;var ASB=null;var ASC=null;var ASD=null;var ASE=null;function V0(b){var c,d;c=new Bv;d=BL(1);d.data[0]=b;G3(c,d);return c;}
function Lb(b){return b>=65536&&b<=1114111?1:0;}
function CD(b){return (b&64512)!=55296?0:1;}
function CY(b){return (b&64512)!=56320?0:1;}
function Lg(b){return !CD(b)&&!CY(b)?0:1;}
function G2(b,c){return CD(b)&&CY(c)?1:0;}
function Ei(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function HD(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function H7(b){return (56320|b&1023)&65535;}
function EI(b){return Gl(b)&65535;}
function Gl(b){if(ASy===null){if(ASB===null)ASB=AAM();ASy=Ze((ASB.value!==null?$rt_str(ASB.value):null));}return Rt(ASy,b);}
function Em(b){return Gk(b)&65535;}
function Gk(b){if(ASx===null){if(ASC===null)ASC=ABz();ASx=Ze((ASC.value!==null?$rt_str(ASC.value):null));}return Rt(ASx,b);}
function Rt(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BD(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function TP(b,c){if(c>=2&&c<=36){b=NZ(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function NZ(b){var c,d,e,f,g,h,i,j,k,l;if(ASw===null){if(ASD===null)ASD=Zi();c=(ASD.value!==null?$rt_str(ASD.value):null);d=AMm(Gg(c));e=I3(d);f=BG(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Mi(d)|0;j=j+Mi(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}ASw=f;}g=ASw.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BD(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function GT(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gd(b){var c;if(b<65536){c=BL(1);c.data[0]=b&65535;return c;}return Zo([HD(b),H7(b)]);}
function Co(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Lg(b&65535))return 19;if(ASz===null){if(ASE===null)ASE=ACy();d=(ASE.value!==null?$rt_str(ASE.value):null);e=R(Mw,16384);f=e.data;g=EV(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=JQ(L(d,l));if(m==64){l=l+1|0;m=JQ(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bd(c,JQ(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=JQ(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AGz(k,k+i|0,AB3(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AGz(k,k+i|0,AB3(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}ASz=Da(e,j);}e=ASz.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.qh)o=p+1|0;else{c=d.og;if(b>=c)return d.ov.data[b-c|0];c=p-1|0;}}return 0;}
function IP(b){a:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function F_(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Co(b)!=16?0:1;}
function Ow(b){switch(Co(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function PT(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Ow(b);}return 1;}
function Xz(){ASv=E($rt_charcls());ASA=R(C0,128);}
function AAM(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ABz(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function Zi(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ACy(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var LE=F(0);
var Rs=F(0);
var D8=F(0);
var ABN=F(0);
function DW(){return $rt_globals.window.document;}
var Gm=F(Bm);
function MS(){var a=this;C.call(a);a.oi=null;a.oj=null;a.ok=null;}
function ALp(a,b){var c,d,e;c=a.oi;d=a.oj;e=a.ok;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=d.rC;b.p4=c;if(b.tt)ZE(c);}}
var AAh=F();
function AAP(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(ASF());}return b.data.length;}
function TH(b,c){if(b===null){b=new Gm;U(b);J(b);}if(b===E($rt_voidcls())){b=new BA;U(b);J(b);}if(c>=0)return AOc(b.fA,c);b=new W3;U(b);J(b);}
function AOc(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Zq=F();
function Ff(){return AOY();}
function AOY(){return Math.random();}
function X(b,c){if(b<c)c=b;return c;}
function V(b,c){if(b>c)c=b;return c;}
function LP(b){if(b<=0)b= -b|0;return b;}
var By=F(Bm);
var H8=F(Bm);
var Ok=F(0);
var P6=F(0);
var PX=F(0);
var Sy=F(0);
var V$=F(0);
var TQ=F(0);
var NC=F(0);
var XD=F();
function AI6(a,b,c){a.Ch($rt_str(b),Kw(c,"handleEvent"));}
function AJn(a,b,c){a.zB($rt_str(b),Kw(c,"handleEvent"));}
function ADO(a,b){return a.uI(b);}
function AKs(a,b,c,d){a.xY($rt_str(b),Kw(c,"handleEvent"),d?1:0);}
function AN7(a,b){return !!a.Cm(b);}
function AES(a){return a.v$();}
function ADa(a,b,c,d){a.A0($rt_str(b),Kw(c,"handleEvent"),d?1:0);}
var BA=F(Bm);
var W3=F(Bm);
var GR=F(By);
var YC=F();
function Zz(){return "ping";}
var NB=F(0);
function RD(){var a=this;C.call(a);a.o4=null;a.qP=null;a.lA=null;a.mh=null;a.dn=null;a.sJ=null;a.mt=null;a.kP=null;a.fN=null;a.hL=0;a.vn=0;a.qa=null;a.e3=null;a.pq=null;a.lc=null;a.rF=0;}
function AA8(a){a.dn.focus();}
function ME(a,b){var c;c=DW();b=$rt_ustr(b);c.title=b;}
function YT(a){var b,c,d;b=new LF;c=a.fN;d=a.kP.cf;b.Y=c;b.s=d;b.bY=a;return b;}
function Sc(a){a.vn=$rt_globals.requestAnimationFrame(Bl(a.qP,"onAnimationFrame"));}
function FP(a){a.hL=1;}
function Sb(a,b,c){var d,e;a.kP.di=Cf(b,c);d=a.dn;e=b;d.width=e;d=a.dn;e=c;d.height=e;d=a.fN;Bc(d.dt,b,c);e=d.bA;d=d.dt;b=d.a;c=d.b;e.viewport(0,0,b,c);a.e3.ce(a.fN.dt,JR(a));a.e3.bK();}
function Gf(a,b){var c,d,e;c=a.qa;d=a.dn;if(D_(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.qa=b;}
function IO(a){return $rt_globals.performance.now()/1000.0;}
function JR(a){return $rt_globals.window.devicePixelRatio;}
function U5(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ACc(b,1);else{c=new VO;d=$rt_globals.window.showDirectoryPicker();e=new VN;e.om=b;e.on=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function K1(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ACc(b,0);else{c=new Wl;d=$rt_globals.window.showOpenFilePicker();e=new Wk;e.o2=b;e.o1=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function CZ(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.rF+1|0;a.rF=e;f=a.lc;g=FL(e);f.hi=Ld(f,f.hi,g);g=TY(f,g);LG(g,b);LG(g,b);f.i2=f.i2+1|0;b=a.pq;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bv)f=$rt_ustr(c);else if(Ve(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(Ve(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(Ve(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof Kh)){b=new BA;c=HB(Cz(c));f
=new M;O(f);G(G(f,B(46)),c);Bj(b,N(f));J(b);}c=c;f=c.gm;if(f===null)f=c.eJ;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function PO(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new PD;e.mA=b;b=ACE(c);d.then(Bl(e,"f"),Bl(b,"f"));}
function Tp(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.o4;b=(Gg(b)).data;f=f.decode(b);b=e.writeText(f);e=new TF;e.rk=c;c=ACE(d);b.then(Bl(e,"f"),Bl(c,"f"));}
function WA(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function ACE(b){var c;c=new L0;c.rv=b;return c;}
var Ci=F(0);
var QI=F();
function ZR(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(!Bt(B(47),c))d=(AM3(I(c)<=0?B(31):Dr(c,1))).cj(b);else{d=new Ml;D$(d,b);b=$rt_globals.fetch("test.wasm");e=new Mu;b=b.then(Bl(e,"f"));e=new Mt;b=b.then(Bl(e,"f"));e=new Ms;f=new Mr;b.then(Bl(e,"f"),Bl(f,"f"));}return d;}
var Bi=F(0);
var ZL=F();
var Zn=F();
var P1=F(0);
function UM(){C.call(this);this.n3=null;}
function AHM(a,b){var c,d;c=b;b=a.n3;if(!(!b.e3.dI(c/1000.0)&&!b.hL)){d=b.fN.dt;if(Bd(d.a,d.b)){b.hL=0;b.e3.bK();}}Sc(b);}
function UH(){C.call(this);this.tH=null;}
function C8(a){FP(a.tH);}
var O5=F(0);
function UI(){C.call(this);this.qE=null;}
function AF5(a,b,c){var d,e,f,g;c=a.qE;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dn){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=JR(c);Sb(c,GY(f.width*g),GY(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Sb(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var ABU=F();
function AMO(b,c){ALP(b,c,ADj());}
function ADj(){return {box:'device-pixel-content-box'};}
function ALP(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Ch=F(0);
function UF(){C.call(this);this.nE=null;}
function ALy(a,b){b=a.nE;b.e3.ce(b.fN.dt,JR(b));b.e3.bK();}
var Ke=F(0);
function Ep(){C.call(this);this.jN=null;}
var Ec=F(0);
var Wz=F(0);
var Mg=F(0);
function N7(){var a=this;Ep.call(a);a.hi=null;a.iY=null;a.wm=null;a.i2=0;}
function TY(a,b){var c,d;c=a.hi;while(true){if(c===null)return null;d=IR(a.iY,b,c.ig);if(!d)break;c=d>=0?c.bU:c.bG;}return c;}
function Ld(a,b,c){var d,e;if(b===null){b=new IN;d=null;b.ig=c;b.hO=d;b.e8=1;b.fg=1;return b;}e=IR(a.iY,c,b.ig);if(!e)return b;if(e>=0)b.bU=Ld(a,b.bU,c);else b.bG=Ld(a,b.bG,c);D9(b);return I2(b);}
function Jn(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=IR(a.iY,c,b.ig);if(d<0)b.bG=Jn(a,b.bG,c);else if(d>0)b.bU=Jn(a,b.bU,c);else{e=b.bU;if(e===null)return b.bG;f=b.bG;g=R(IN,e.e8).data;h=0;while(true){b=e.bG;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bU;while(h>0){h=h+(-1)|0;j=g[h];j.bG=b;D9(j);b=I2(j);}e.bU=b;e.bG=f;D9(e);b=e;}D9(b);return I2(b);}
function UG(){C.call(this);this.sS=null;}
function AML(a,b){var c,d,e,f,g,h,i,j,k;c=a.sS.lc;b=b.data;if(!(b===Zz()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BA;U(b);J(b);}if(b.length<1){b=new BA;U(b);J(b);}d=FL(b[0]);e=TY(c,d);if(e===null)c=null;else{c.hi=Jn(c,c.hi,d);c.i2=c.i2+1|0;c=e.hO;}f=R(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=Fm(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new RJ;ABB(e);e.gY=k;}else e=(k instanceof $rt_globals.File?1:0)?AAn(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:AAn(k,null);g[h]=e;h=j;}c.m(f);}}
function Ou(){var a=this;C.call(a);a.cf=null;a.gJ=null;a.vI=null;a.di=null;}
function Md(){return (DW()).activeElement;}
function CQ(a,b,c,d){b.addEventListener($rt_ustr(c),Bl(d,"handleEvent"));return VV(a,b,c,d);}
function AAA(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bl(d,"handleEvent"),!!e);return VV(a,b,c,d);}
function VV(a,b,c,d){var e;e=new O1;e.uy=b;e.uA=c;e.uz=d;return e;}
function SU(a,b){var c;c=new T3;c.tA=b;return c;}
function Eq(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gJ.getBoundingClientRect();e=Cf(GY((b.clientX-d.left)*c),GY((b.clientY-d.top)*c));f=new Ba;g=a.di;f.a=g.a;f.b=g.b;d=new LB;Tq(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.k=e;d.ub=f;return d;}
function WT(a,b,c){var d,e,f,g;d=new NY;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Tq(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.jl=0;d.dr=e;d.bk=f;d.iB=c;d.qQ=g;return d;}
function Dz(a,b){b.stopPropagation();b.preventDefault();}
function Y0(a,b){var c;c=new Ww;c.oE=b;b.onpointerdown=Bl(c,"f");c=new Wy;c.nH=b;b.onpointerup=Bl(c,"f");}
function Ks(){var a=this;C.call(a);a.p$=null;a.cx=null;a.bA=null;a.r0=null;a.u5=0;a.v7=0;a.i5=null;a.wB=null;a.wj=null;a.vk=null;a.fQ=null;a.g4=null;a.wr=null;a.n8=null;a.dt=null;a.tp=null;a.kG=0;a.jh=0;a.lm=0;a.k7=0;a.hC=0;a.lk=null;}
function FH(a,b,c){return Fn(a,b,c,400,0);}
function CJ(a,b,c){return LO(a.p$,b,c);}
function Fe(a,b){var c,d,e,f,g;c=a.bA;d=b.bf;e=b.bt;f=b.bl;g=b.bu;c.clearColor(d,e,f,g);a.bA.clear(16384);}
function Cv(a,b){var c;if(b==a.jh)return b;if(!b)a.bA.disable(3042);else{a.bA.enable(3042);a.bA.blendFuncSeparate(770,771,1,1);}c=a.jh;a.jh=b;return c;}
function T$(a,b,c,d){var e,f,g;a.k7=1;a.hC=1;e=a.lk;f=d.a;g=d.b;e.ql=b;e.qm=c;e.qk=f;e.qi=g;Tr(a);}
function UW(a){a.k7=0;a.hC=0;Tr(a);}
function Tr(a){var b,c,d,e,f,g;b=a.lm;c=a.k7;if(b!=c){a.lm=c;if(!c)a.bA.disable(3089);else a.bA.enable(3089);}if(a.lm&&a.hC){a.hC=0;d=a.bA;e=a.lk;b=e.ql;c=a.dt.b-e.qm|0;f=e.qi;c=c-f|0;g=e.qk;d.scissor(b,c,g,f);}}
function J_(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.n8;c=a.kG;d=b.f5.rr;e=b.dR;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dR;h=b.ml;e.bindBuffer(34962,h);i=b.f5.lF.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dR;m=k.gQ;n=k.eF;o=b.f5.jZ*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.eF|0;j=j+1|0;}a:{e=b.tD;if(e!==null){c=0;b.dR.bindBuffer(34962,e);i=b.f5.p6.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dR;j=e.gQ;p=e.eF;m=e.od;n=b.f5.oB;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.eF|0;g=g+1|0;}}}q=b.s7;if(q===null){c=b.qU;if(c>0)b.dR.drawArrays(4,0,c);}else{b.dR.bindBuffer(34963,q);k=b.dR;g=b.tg;k.drawElements(4,g,5123,0);}a.kG=d;}
function BJ(a,b,c,d,e){Kn(a,a.i5);Lm(a.i5,a.bA,b,c,d,a.dt);d=a.i5;HM(a.bA,d.sR,e);J_(a);}
function Hy(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Kn(a,a.fQ);Lm(a.fQ,a.bA,b,c,d,a.dt);Tm(a.fQ,a.bA,f);d=a.fQ;j=a.bA;f=f.fa;b=f.a;c=f.b;k=e.bf;l=b;m=k/l;k=e.bt;n=c;o=k/n;k=e.bl/l;l=e.bu/n;d=d.sr;j.uniform4f(d,m,o,k,l);d=a.fQ;e=a.bA;HM(e,d.oH,g);HM(e,d.mV,h);d=d.nX;e.uniform2f(d,i,0.0);J_(a);}
function CS(a){var b,c;b=new IM;c=a.r0;b.fa=new Ba;b.dF=c;b.ez=c.dc.createTexture();ASG=ASG+1|0;return b;}
function MX(a,b){Wa(a.bA,b);}
function Kn(a,b){var c,d;if(b!==a.tp){c=a.bA;d=b.ci;c.useProgram(d);a.tp=b;}}
function ABn(){var a=this;Ks.call(a);a.vM=null;a.wk=null;}
function AQi(a,b){var c=new ABn();AH7(c,a,b);return c;}
function AH7(a,b,c){var d,e,f,g,h,i,j,k,l;d=new Tt;a.dt=new Ba;a.kG=0;a.lk=new VH;a.p$=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(48)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bA=b;a.cx=LO(d,4,4);g=AC2(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BL(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;k=new O3;XZ();f=ASH;k.dR=b;k.f5=f;k.qU=h.length/f.jZ|0;k.tg
=j.length;f=b.createBuffer();k.ml=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);k.tD=null;f=b.createBuffer();k.s7=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}d=null;b.bindBuffer(34962,d);f=null;b.bindBuffer(34963,f);a.n8=k;a.v7=Ew(e,B(49));f=new O4;f.dc=b;a.r0=f;l=b.getParameter(3379);a.u5=l;f=new M;O(f);S(G(f,B(50)),l);$rt_globals.console.info($rt_ustr(N(f)));g=R(DY,6);i=g.data;d=new Vg;KO(d,b,B(51),B(52),ASH);f=d.ci;d.sR=b.getUniformLocation(f,"uColor");a.i5=d;i[0]
=d;f=APP(b,B(53));a.wB=f;i[1]=f;f=new PJ;KO(f,b,B(51),B(54),ASH);a.wj=f;i[2]=f;f=AQ8(b);a.vk=f;i[3]=f;f=AQj(b);a.fQ=f;i[4]=f;f=ARg(b);a.g4=f;i[5]=f;a.wr=g;Wa(b,B(55));a.wk=new Ts;a.vM=c;}
function Fn(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=a.cx;g=Yq(b,c,d,e);Iz(f,g);h=f.bn.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Ef(f,B(56));m=Ef(f,B(57));h=new Kj;h.lq=b;h.nA=c;n=c|0;if(n!==c){b=new M;O(b);E6(G(b,B(58)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.oa=n;h.nN=d;h.o5=e;h.dg=i;h.dZ=j;h.uG=l;h.ld=k;h.mz=g;h.p2=C7(i);h.wc=C7(h.dZ);d=m*32.0|0;n=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;a:{h.uP=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(59);}h.ux=b;return h;}
function Cp(){C.call(this);this.bh=null;}
function D$(a,b){a.bh=b;}
function AOD(a,b){return 0;}
var It=F();
var AR$=null;function IR(a,b,c){return b.i4(c);}
function ZV(){AR$=new It;}
function YH(){var a=this;C.call(a);a.b2=null;a.lB=null;a.bJ=null;a.eS=null;a.eG=null;a.f9=null;a.gI=null;a.iV=null;a.jA=null;a.cR=null;}
function AQT(a){var b=new YH();AK2(b,a);return b;}
function AK2(a,b){a.b2=CH(R(Cj,0));a.lB=CH(R(Cj,0));a.bJ=CH(R(Ct,0));a.eS=CH(R(EB,0));a.eG=CH(R(EN,0));a.f9=CH(R(E$,0));a.gI=CH(R(FS,0));a.iV=CH(R(Bi,0));a.jA=CH(R(Bi,0));a.cR=b;}
function S4(a,b){var c,d,e,f;C8(a.cR);c=(Cl(!b.iB?a.lB:a.b2)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].by(b);if(f)break;if(b.jl)break;e=e+1|0;}return f;}
function PK(a,b,c){var d,e,f;C8(a.cR);d=(Cl(a.f9)).data;e=d.length;f=0;while(f<e){if(d[f].hb(b,c))return 1;f=f+1|0;}return 0;}
function Vv(){C.call(this);this.mO=null;}
function AKY(a,b){var c;c=a.mO;if(S4(c.cf,WT(c,b,1)))Dz(c,b);}
function Vw(){C.call(this);this.rj=null;}
function ALb(a,b){var c;c=a.rj;if(S4(c.cf,WT(c,b,0)))Dz(c,b);}
function Vx(){C.call(this);this.nT=null;}
function AJH(a,b){var c,d,e,f,g,h;c=a.nT;if(c.di!==null){d=Eq(c,b);e=c.cf;C8(e.cR);f=(Cl(e.bJ)).data;g=f.length;h=0;a:{while(h<g){if(f[h].b4(d))break a;h=h+1|0;}}Dz(c,b);}}
function Vy(){C.call(this);this.tB=null;}
function AI7(a,b){var c,d,e,f,g,h;c=a.tB;b.button;if(c.di!==null){d=Eq(c,b);c=c.cf;e=b.button;C8(c.cR);f=(Cl(c.bJ)).data;g=f.length;h=0;a:{while(h<g){if(f[h].c8(d,e))break a;h=h+1|0;}}}}
function Vz(){C.call(this);this.qw=null;}
function AJr(a,b){var c,d,e,f,g,h,i;c=a.qw;b.button;if(c.di!==null){d=Eq(c,b);e=c.cf;f=b.button;C8(e.cR);g=(Cl(e.bJ)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cP(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Dz(c,b);}}
function VA(){C.call(this);this.nc=null;}
function ALN(a,b){var c,d,e,f,g,h,i,j,k;c=a.nc;if(c.di!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cf;f=Eq(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;C8(e.cR);i=(Cl(e.eS)).data;j=i.length;k=0;b:{while(k<j){if(i[k].ef(f,d,h))break b;k=k+1|0;}}Dz(c,b);}}
function VB(){C.call(this);this.tO=null;}
function AHp(a,b){var c,d,e,f,g,h,i,j;c=a.tO;if(c.di!==null){d=Eq(c,b);e=c.cf;f=b.button;g=b.detail;C8(e.cR);h=(Cl(e.bJ)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cA(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Dz(c,b);}}
function VC(){C.call(this);this.qH=null;}
function AO5(a,b){var c,d,e,f,g,h,i;c=a.qH;if(c.di!==null){d=Eq(c,b);e=c.cf;C8(e.cR);f=(Cl(e.eG)).data;g=f.length;h=0;a:{while(h<g){if(f[h].by(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Dz(c,b);}}
function VD(){C.call(this);this.nt=null;}
function AGJ(a,b){var c,d,e;b=a.nt.cf;c=(Cl(b.jA)).data;d=c.length;e=0;while(e<d){c[e].t();e=e+1|0;}C8(b.cR);}
function VE(){C.call(this);this.s0=null;}
function AMS(a,b){var c,d,e;b=a.s0.cf;c=(Cl(b.iV)).data;d=c.length;e=0;while(e<d){c[e].t();e=e+1|0;}C8(b.cR);}
function WN(){C.call(this);this.sq=null;}
function AOE(a,b){var c;c=a.sq;if(c.di!==null)Eq(c,b);}
function WO(){C.call(this);this.rx=null;}
function AJi(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.rx;if(Md()===c.gJ){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cl(c.cf.gI)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].ga();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cf.cR;m=new MM;m.ta=k;m.tb=l;g.getAsString(Bl(m,"accept"));Dz(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(60)),k),B(61)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function WP(){C.call(this);this.lV=null;}
function AJK(a,b){var c;c=a.lV;if(Md()===c.gJ&&PK(c.cf,SU(c,b),0))Dz(c,b);}
function WQ(){C.call(this);this.tf=null;}
function ALr(a,b){var c;c=a.tf;if(Md()===c.gJ&&PK(c.cf,SU(c,b),1))Dz(c,b);}
var Th=F(0);
var Tt=F();
function LO(a,b,c){var d,e,f;d=new Qe;ASq=ASq+1|0;d.k1=b;d.kc=c;e=(DW()).createElement("canvas");d.i3=e;f=b;e.width=f;e=d.i3;f=c;e.height=f;d.bn=d.i3.getContext("2d");return d;}
var Ts=F();
function AIs(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function LF(){var a=this;C.call(a);a.Y=null;a.s=null;a.bY=null;}
function AB7(){var a=this;C.call(a);a.gN=null;a.h0=null;a.gB=0;}
function CH(a){var b=new AB7();AHl(b,a);return b;}
function AHl(a,b){a.gN=b;}
function Bb(a,b){var c,d,e;c=a.gB;d=a.gN;if(c==d.data.length)a.gN=Da(d,c+4|0);d=a.gN.data;e=a.gB;a.gB=e+1|0;d[e]=b;a.h0=null;}
function Cl(a){var b;b=a.h0;if(!(b!==null&&b.data.length==a.gB))a.h0=Da(a.gN,a.gB);return a.h0;}
var Ia=F(0);
var Cj=F(0);
var Ct=F(0);
function AIw(a,b){return 0;}
function ALM(a,b,c,d){return 0;}
function AEK(a,b,c){return 0;}
function ADz(a,b,c){return 0;}
var EB=F(0);
var EN=F(0);
var E$=F(0);
var HF=F(0);
var FS=F(0);
function Pd(){C.call(this);this.u0=null;}
function Ba(){var a=this;C.call(a);a.a=0;a.b=0;}
function Cf(a,b){var c=new Ba();YA(c,a,b);return c;}
function YA(a,b,c){a.a=b;a.b=c;}
function Dv(a,b){a.a=b.a;a.b=b.b;}
function Bc(a,b,c){a.a=b;a.b=c;}
function ACP(a){var b,c,d;b=a.a;c=a.b;d=new M;O(d);S(G(S(G(d,B(62)),b),B(63)),c);return N(d);}
function Km(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function VH(){var a=this;C.call(a);a.ql=0;a.qm=0;a.qk=0;a.qi=0;}
var ABm=F();
var X1=F(0);
function O4(){C.call(this);this.dc=null;}
function KN(){var a=this;C.call(a);a.ci=null;a.wf=null;}
function AAm(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(64):B(65);d=$rt_str(b.getShaderInfoLog(e));g=new M;O(g);G(G(g,f),d);f=N(g);b.deleteShader(e);Bu(Bx(),f);b=new Bm;Bj(b,f);J(b);}
function DY(){var a=this;KN.call(a);a.ns=null;a.oG=null;a.kT=null;}
function ASI(a,b,c,d){var e=new DY();KO(e,a,b,c,d);return e;}
function KO(a,b,c,d,e){var f,g,h,i,j,k;a.wf=e;f=AAm(b,35633,c);d=AAm(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.ci=g;h=e.q9.data;i=h.length;j=0;while(j<i){c=h[j];d=a.ci;k=c.gQ;c=c.oR;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.ci;b.linkProgram(c);if(b.getProgramParameter(c,35714)){Wa(b,B(66));a.kT=new Ba;c=a.ci;a.ns=b.getUniformLocation(c,"uResolution");c=a.ci;a.oG=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bm;c=new M;O(c);G(G(c,B(67)),d);Bj(b,N(c));J(b);}
function YJ(a,b,c){var d,e,f;if(!Km(a.kT,c)){Dv(a.kT,c);d=a.ns;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function Lm(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.oG;b.uniform4f(e,i,l,h,j);YJ(a,b,f);}
function Vg(){DY.call(this);this.sR=null;}
function Eo(){DY.call(this);this.qq=null;}
function APP(a,b){var c=new Eo();SY(c,a,b);return c;}
function ASJ(a,b,c){var d=new Eo();S6(d,a,b,c);return d;}
function SY(a,b,c){S6(a,b,B(51),c);}
function S6(a,b,c,d){XZ();KO(a,b,c,d,ASH);c=a.ci;a.qq=b.getUniformLocation(c,"sDiffuse");}
function Tm(a,b,c){var d;d=a.qq;b.uniform1i(d,0);b.activeTexture(33984);c=c.ez;b.bindTexture(3553,c);}
var PJ=F(DY);
function AA5(){Eo.call(this);this.u9=null;}
function AQ8(a){var b=new AA5();AGP(b,a);return b;}
function AGP(a,b){var c;SY(a,b,B(68));c=a.ci;a.u9=b.getUniformLocation(c,"uContrast");}
function AAC(){var a=this;Eo.call(a);a.sr=null;a.oH=null;a.mV=null;a.nX=null;}
function AQj(a){var b=new AAC();ALI(b,a);return b;}
function ALI(a,b){var c;S6(a,b,B(69),B(70));c=a.ci;a.sr=b.getUniformLocation(c,"uTexTransform");c=a.ci;a.oH=b.getUniformLocation(c,"uColor");c=a.ci;a.mV=b.getUniformLocation(c,"uBgColor");c=a.ci;a.nX=b.getUniformLocation(c,"uContrast");}
function Yd(){var a=this;Eo.call(a);a.tE=null;a.tC=null;a.pc=null;}
function ARg(a){var b=new Yd();AGi(b,a);return b;}
function AGi(a,b){var c,d;SY(a,b,B(71));c=a.ci;a.tE=b.getUniformLocation(c,"uColorB");d=a.ci;a.tC=b.getUniformLocation(d,"uColorF");d=a.ci;a.pc=b.getUniformLocation(d,"uContrast");}
var QR=F(0);
var ACF=F(0);
function HM(b,c,d){var e,f,g,h;e=d.bf;f=d.bt;g=d.bl;h=d.bu;b.uniform4f(c,e,f,g,h);}
function Wa(b,c){var d,e;d=b.getError();if(d){b=Bx();e=new M;O(e);S(G(e,c),d);Bu(b,N(e));}}
function O1(){var a=this;C.call(a);a.uy=null;a.uA=null;a.uz=null;}
function O3(){var a=this;C.call(a);a.dR=null;a.f5=null;a.ml=null;a.tD=null;a.s7=null;a.qU=0;a.tg=0;}
function Cq(){var a=this;C.call(a);a.ut=null;a.cQ=0;}
function DB(a,b,c){a.ut=b;a.cQ=c;}
function Gu(){var a=this;Cq.call(a);a.q9=null;a.lF=null;a.p6=null;a.jZ=0;a.oB=0;a.rr=0;}
var ASH=null;var ASK=null;function XZ(){XZ=Bo(Gu);AHY();}
function AHY(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Gu;c=R(DK,2);d=c.data;AN3();d[0]=ASL;d[1]=ASM;XZ();DB(b,B(72),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];XC();switch(ASN.data[l.k$.cQ]){case 1:f=f+l.eF|0;h=h+1|0;break a;case 2:e=e+l.eF|0;g=g+1|0;break a;default:}}i=i|1<<l.gQ;k=k+1|0;}b.q9=c;b.jZ=e;b.oB=f;b.rr=i;c=R(DK,g);m=c.data;b.lF=c;c=R(DK,h);n=c.data;b.p6=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];XC();switch(ASN.data[l.k$.cQ]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}ASH=b;c=R(Gu,1);c.data[0]=b;ASK=c;}
var Ll=F(0);
var Se=F(0);
var TG=F(0);
var Gb=F();
function IK(){Gb.call(this);this.t4=null;}
function Y7(){var a=this;IK.call(a);a.v5=0;a.j$=0;a.hX=null;a.jE=null;a.rU=null;}
function AJU(a,b){var c=new Y7();ANM(c,a,b);return c;}
function ANM(a,b,c){a.t4=b;b=new M;O(b);a.hX=b;a.jE=BL(32);a.v5=c;YY();a.rU=ASO;}
function St(a,b,c,d){var e,$$je;e=a.t4;if(e===null)a.j$=1;if(!(a.j$?0:1))return;a:{try{e.jv(b,c,d);break a;}catch($$e){$$je=D6($$e);if($$je instanceof HV){}else{throw $$e;}}a.j$=1;}}
function M4(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ZJ(b,c,d-c|0);e=EV(V(16,X(e.length,1024)));g=Zy(e,0,e.data.length);h=a.rU;i=new Or;b=EV(1);j=b.data;j[0]=63;GQ();k=ASP;i.kW=k;i.kd=k;c=j.length;if(c&&c>=i.lG){i.uo=h;i.oP=b.ff();i.vZ=2.0;i.lG=4.0;i.ob=BL(512);i.m_=EV(512);k=ASQ;if(k===null){i=new BA;Bj(i,B(73));J(i);}i.kW=k;i.kd=k;a:while(true){if(i.hT==3){f=new DM;U(f);J(f);}i.hT=2;b:{while(true){try{k=XQ(i,f,g);}catch($$e){$$je=D6($$e);if($$je instanceof Bm){f=$$je;break a;}else{throw $$e;}}if(HL(k))
{d=B2(f);if(d<=0)break b;k=DN(d);}else if(GM(k))break;h=!K9(k)?i.kW:i.kd;c:{if(h!==ASQ){if(h===ASR)break c;else break b;}d=B2(g);b=i.oP;l=b.data.length;if(d<l){k=ASS;break b;}VX(g,b,0,l);}Et(f,f.R+Jp(k)|0);}}l=GM(k);St(a,e,0,g.R);M2(g);if(!l){while(true){d=i.hT;if(d!=2&&d!=4){f=new DM;U(f);J(f);}f=AST;if(f===f)i.hT=3;l=GM(f);St(a,e,0,g.R);M2(g);if(!l)break;}return;}}J(AFy(f));}i=new BA;Bj(i,B(74));J(i);}
function Bu(a,b){var c,d,e,f,g,h,i,j;BB(BX(a.hX,b),10);b=a.hX;c=b.O;d=a.jE;if(c>d.data.length)d=BL(c);e=0;f=0;if(e>c){b=new By;Bj(b,B(75));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.C.data;j=e+1|0;g[f]=i[e];f=h;e=j;}M4(a,d,0,c);a.hX.O=0;}
function FX(){Gb.call(this);this.vP=null;}
function WX(a){a.vP=EV(1);}
var Ky=F(FX);
var ASt=null;function AIi(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AAU(){var b;b=new Ky;WX(b);ASt=b;}
function DK(){var a=this;Cq.call(a);a.oR=null;a.k$=null;a.eF=0;a.od=0;a.gQ=0;}
var ASL=null;var ASM=null;var ASU=null;function AN3(){AN3=Bo(DK);AG8();}
function AQv(a,b,c,d,e,f,g){var h=new DK();U$(h,a,b,c,d,e,f,g);return h;}
function U$(a,b,c,d,e,f,g,h){AN3();DB(a,b,c);a.oR=d;a.k$=e;a.eF=f;a.od=g;a.gQ=h;}
function AG8(){var b;b=new DK;Z$();U$(b,B(76),0,B(77),ASV,2,0,0);ASL=b;b=AQv(B(78),1,B(79),ASV,2,0,1);ASM=b;ASU=H(DK,[ASL,b]);}
function IA(){var a=this;C.call(a);a.ua=null;a.va=null;}
function AA_(b){var c,d;if(E_(b))J(Y2(b));if(!ABb(L(b,0)))J(Y2(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ABb(d))break a;else J(Y2(b));}}c=c+1|0;}}
function ABb(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Lq=F(IA);
var ASO=null;function YY(){YY=Bo(Lq);AGf();}
function ABq(a){var b,c;b=new Su;b.eD=B(80);GQ();c=ASP;b.gu=c;b.k5=c;b.u2=a;b.lN=0.3333333432674408;b.vl=0.5;b.no=EV(512);b.ri=BL(512);return b;}
function AGf(){var b,c,d,e,f;b=new Lq;YY();c=R(Bv,0);d=c.data;AA_(B(81));e=d.length;f=0;while(f<e){AA_(d[f]);f=f+1|0;}b.ua=B(81);b.va=c.ff();ASO=b;}
var JB=F();
var ASW=null;var ASN=null;function XC(){XC=Bo(JB);AKO();}
function AKO(){var b,c;Z$();b=BG((ASX.ff()).data.length);c=b.data;ASN=b;c[ASY.cQ]=1;c[ASV.cQ]=2;AAa();c=BG((ASZ.ff()).data.length);b=c.data;ASW=c;b[AS0.cQ]=1;b[AS1.cQ]=2;}
function Ob(){var a=this;C.call(a);a.e7=null;a.lv=null;a.jj=null;a.rB=null;a.oA=null;a.oL=null;}
function Y$(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.e7,b,c));}
function L8(a,b){var c,d,e,f,g,h,i,$$je;c=new Bv;d=b;while(a.lv[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.e7,b,d));f=e.data;Ez();d=f.length;YY();g=ASO;h=Zy(e,0,d);a:{try{i=ABq(g);GQ();g=X8(AAq(ABZ(i,ASQ),ASQ),h);break a;}catch($$e){$$je=D6($$e);if($$je instanceof Fy){g=$$je;}else{throw $$e;}}h=new V5;h.iu=1;h.i0=1;h.g2=B(82);h.ke=g;J(h);}if(!g.R&&g.de==g.lr)c.bT=g.gP;else{f=BL(B2(g));e=f.data;c.bT=f;MD(g,f,0,e.length);}return c;}
function Mf(a,b){var c,d,e;c=new Bv;d=b>>>1|0;e=d;while(a.jj[e]){e=e+1|0;}d=e-d|0;G3(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.e7,b,d)));return c;}
var Gy=F(Cq);
var ASY=null;var ASV=null;var ASX=null;function Z$(){Z$=Bo(Gy);AFN();}
function AF$(a,b){var c=new Gy();ABr(c,a,b);return c;}
function ABr(a,b,c){Z$();DB(a,b,c);}
function AFN(){var b;ASY=AF$(B(83),0);b=AF$(B(84),1);ASV=b;ASX=H(Gy,[ASY,b]);}
var F3=F(Cq);
var AS0=null;var AS1=null;var ASZ=null;function AAa(){AAa=Bo(F3);AGm();}
function AO$(a,b){var c=new F3();X5(c,a,b);return c;}
function X5(a,b,c){AAa();DB(a,b,c);}
function AGm(){var b;AS0=AO$(B(85),0);b=AO$(B(86),1);AS1=b;ASZ=H(F3,[AS0,b]);}
var UN=F(DP);
function ABe(){BA.call(this);this.us=null;}
function Y2(a){var b=new ABe();ANj(b,a);return b;}
function ANj(a,b){U(a);a.us=b;}
var Lp=F(0);
function Ww(){C.call(this);this.oE=null;}
function AMo(a,b){a.oE.setPointerCapture(b.pointerId);}
function Wy(){C.call(this);this.nH=null;}
function AEl(a,b){a.nH.releasePointerCapture(b.pointerId);}
function GG(){var a=this;C.call(a);a.lr=0;a.R=0;a.de=0;a.gX=0;}
function U8(a,b){a.gX=(-1);a.lr=b;a.de=b;}
function Et(a,b){var c,d,e;if(b>=0&&b<=a.de){a.R=b;if(b<a.gX)a.gX=0;return a;}c=new BA;d=a.de;e=new M;O(e);BB(S(G(S(G(e,B(87)),b),B(88)),d),93);Bj(c,N(e));J(c);}
function B2(a){return a.de-a.R|0;}
function DA(a){return a.R>=a.de?0:1;}
var Q_=F(0);
var Kk=F(GG);
function ACo(b){var c,d;if(b>=0)return ALf(0,b,BL(b),0,b,0);c=new BA;d=new M;O(d);S(G(d,B(89)),b);Bj(c,N(d));J(c);}
function ZJ(b,c,d){return ALf(0,b.data.length,b,c,c+d|0,0);}
function MD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new By;i=new M;O(i);S(G(S(G(i,B(90)),g),B(91)),f);Bj(h,N(i));J(h);}if(B2(a)<d){j=new K0;U(j);J(j);}if(d<0){j=new By;k=new M;O(k);G(S(G(k,B(92)),d),B(93));Bj(j,N(k));J(j);}g=a.R;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.gP.data[m+a.lg|0];l=l+1|0;c=n;m=o;}a.R=g+d|0;return a;}}b=b.data;j=new By;d=b.length;k=new M;O(k);BB(S(G(S(G(k,B(94)),c),B(88)),d),41);Bj(j,N(k));J(j);}
function Jm(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.lw){b=new In;U(b);J(b);}e=d-c|0;if(B2(a)<e){b=new Hu;U(b);J(b);}if(c>I(b)){f=new By;d=I(b);b=new M;O(b);BB(S(G(S(G(b,B(95)),c),B(88)),d),41);Bj(f,N(b));J(f);}if(d>I(b)){f=new By;c=I(b);b=new M;O(b);S(G(S(G(b,B(96)),d),B(97)),c);Bj(f,N(b));J(f);}if(c>d){b=new By;f=new M;O(f);S(G(S(G(f,B(95)),c),B(98)),d);Bj(b,N(f));J(b);}g=a.R;while(c<d){h=g+1|0;i=c+1|0;Rf(a,g,L(b,c));g=h;c=i;}a.R=a.R+e|0;return a;}
function I7(){var a=this;GG.call(a);a.j9=0;a.kM=null;a.vA=null;}
function Zy(b,c,d){var e,f,g;e=b.data;f=new VW;g=e.length;d=c+d|0;U8(f,g);AH4();f.vA=AS2;f.j9=0;f.kM=b;f.R=c;f.de=d;f.vE=0;f.mg=0;return f;}
function VX(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.mg){e=new In;U(e);J(e);}if(B2(a)<d){e=new Hu;U(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new By;j=new M;O(j);S(G(S(G(j,B(99)),h),B(91)),g);Bj(i,N(j));J(i);}if(d<0){e=new By;i=new M;O(i);G(S(G(i,B(92)),d),B(93));Bj(e,N(i));J(e);}h=a.R;k=h+a.j9|0;l=0;while(l<d){b=a.kM.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.R=h+d|0;return a;}}b=b.data;e=new By;d=b.length;i=new M;O(i);BB(S(G(S(G(i,B(94)),c),B(88)),d),41);Bj(e,N(i));J(e);}
function M2(a){a.R=0;a.de=a.lr;a.gX=(-1);return a;}
function Hj(){C.call(this);this.wv=null;}
var ASR=null;var ASQ=null;var ASP=null;function GQ(){GQ=Bo(Hj);AJk();}
function AB9(a){var b=new Hj();AA7(b,a);return b;}
function AA7(a,b){GQ();a.wv=b;}
function AJk(){ASR=AB9(B(100));ASQ=AB9(B(101));ASP=AB9(B(102));}
var Ml=F(Cp);
function AJe(a){}
function AHP(a,b,c){}
var ACr=F();
function AM3(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(103)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(Ku(b)){case -1570047148:if(!Bt(b,B(104)))break a;d=15;break a;case -1519338717:if(!Bt(b,B(105)))break a;d=1;break a;case -1509980539:if(!Bt(b,B(106)))break a;d=11;break a;case -1073555521:if(!Bt(b,B(107)))break a;d=12;break a;case -811765794:if(!Bt(b,B(108)))break a;d=4;break a;case -785237654:if(!Bt(b,B(109)))break a;d=9;break a;case -631889171:if(!Bt(b,B(110)))break a;d=7;break a;case -439438829:if
(!Bt(b,B(111)))break a;d=16;break a;case 3343967:if(!Bt(b,B(112)))break a;d=8;break a;case 3556498:if(!Bt(b,B(113)))break a;d=3;break a;case 485517998:if(!Bt(b,B(114)))break a;d=5;break a;case 544901384:if(!Bt(b,B(115)))break a;d=2;break a;case 1030621992:if(!Bt(b,B(116)))break a;d=14;break a;case 1465713255:if(!Bt(b,B(117)))break a;d=6;break a;case 1554501643:if(!Bt(b,B(118)))break a;d=13;break a;case 1609169232:if(!Bt(b,B(119)))break a;d=10;break a;default:}}b:{switch(d){case 1:break;case 2:case 3:b=new R6;break b;case 4:b
=new R5;break b;case 5:b=new R4;break b;case 6:b=new R3;break b;case 7:case 8:b=new R2;break b;case 9:b=new R1;break b;case 10:b=new R0;break b;case 11:b=new RZ;break b;case 12:b=new RY;break b;case 13:b=new PI;break b;case 14:b=new PG;break b;case 15:b=new PH;break b;case 16:b=new PE;break b;default:b=new PF;break b;}b=new R7;}return b;}
var ZI=F();
var Jg=F(Kk);
function Zr(){var a=this;Jg.call(a);a.lw=0;a.lg=0;a.gP=null;}
function ALf(a,b,c,d,e,f){var g=new Zr();APg(g,a,b,c,d,e,f);return g;}
function APg(a,b,c,d,e,f,g){U8(a,c);a.R=e;a.de=f;a.lg=b;a.lw=g;a.gP=d;}
function Rf(a,b,c){a.gP.data[b+a.lg|0]=c;}
function J6(){var a=this;C.call(a);a.uo=null;a.oP=null;a.vZ=0.0;a.lG=0.0;a.kW=null;a.kd=null;a.hT=0;}
function KU(){var a=this;C.call(a);a.f8=0;a.hv=0;}
var AST=null;var ASS=null;function XW(a,b){var c=new KU();Yk(c,a,b);return c;}
function Yk(a,b,c){a.f8=b;a.hv=c;}
function HL(a){return a.f8?0:1;}
function GM(a){return a.f8!=1?0:1;}
function JT(a){return !Py(a)&&!K9(a)?0:1;}
function Py(a){return a.f8!=2?0:1;}
function K9(a){return a.f8!=3?0:1;}
function Jp(a){var b;if(JT(a))return a.hv;b=new E4;U(b);J(b);}
function DN(b){return XW(2,b);}
function Ut(a){var b,c;switch(a.f8){case 0:b=new O6;U(b);J(b);case 1:b=new V_;U(b);J(b);case 2:b=new Ui;c=a.hv;U(b);b.wK=c;J(b);case 3:b=new OW;c=a.hv;U(b);b.wG=c;J(b);default:}}
function YL(){AST=XW(0,0);ASS=XW(1,0);}
var XM=F();
var Kx=F(0);
var Mu=F();
function AGu(a,b){return b.arrayBuffer();}
var Mt=F();
function AKr(a,b){var c,d;c=new N$;d=new N8;return $rt_globals.WebAssembly.instantiate(b,AIq(Bl(c,"f"),Bl(d,"f")));}
var Ms=F();
function AK8(a,b){AEf(b);}
var Mr=F();
function AEZ(a,b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
var R7=F();
function AKH(a,b){return ARz(b);}
var R6=F();
function ADY(a,b){return APS(b);}
var R5=F();
function AHx(a,b){var c,d,e;c=new Vc;Hp(c,b);d=new T1;d.k_=new Ba;d.jy=new Ba;c.qz=d;c.dj=XS();c.cB=XS();c.dO=Xm(c.be);Bb(c.be.dA,c);d=b.s.b2;e=new R9;e.ss=c;Bb(d,e);Bb(b.s.bJ,c);b=b.s.eG;d=new Sa;d.rd=c;Bb(b,d);RF(c.cB);b=SL(B(120),25.0);c.rh=b;d=c.dO;d.f3=b;Ly(d,Go());Bh(c.f1,CG(43));b=Go();HI(c.dj,b);HI(c.cB,b);b=c.dj;b.iM=new R$;d=c.cB;d.iM=new R8;d.ja=new V6;d.r_=new V7;J5(b,(MK(0)).h$);J5(c.cB,(MK(0)).h$);return c;}
var R4=F();
function AHs(a,b){var c,d,e;c=new Wn;Hp(c,b);d=c.be.dA;e=new NF;e.mf=c;Bb(d,e);d=AM6(c.be);c.dW=d;WS(d,Go());Bb(b.s.bJ,c);d=b.s.b2;e=new NG;e.pn=c;Bb(d,e);d=b.s.eG;e=new NH;e.sM=c;Bb(d,e);b=FH(b.Y,B(120),25);RL(c.dW,b);Bh(c.f1,CG(43));return c;}
var R3=F();
function AH6(a,b){var c,d,e;c=new W2;Hp(c,b);c.fm=Ck();c.eL=Ck();c.n5=Bq(B(121));c.hP=ANg();c.fJ=0;d=c.be.dA;e=new S7;e.lY=c;Bb(d,e);Bb(b.s.bJ,c);d=b.s.b2;e=new S8;e.pk=c;Bb(d,e);b=FH(b.Y,B(120),35);c.iL=b;c.hz=AOr(FE(b));Bh(c.f1,Bq(B(122)));return c;}
var R2=F();
function AD5(a,b){var c,d,e,f;c=new Og;D$(c,b);c.fE=AJz();c.dG=0;c.q4=500;c.tl=W5(0,0,0,255);c.la=20;c.ty=20;c.nZ=ABC();d=b.s.bJ;e=new Vr;e.h6=c;f=new W0;f.qO=e;e.qd=f;Bb(d,e);d=b.s.eS;e=new RI;e.nx=c;Bb(d,e);c.dH=b.Y;c.r7=TD(b.bY);SA(c.fE,FH(c.dH,B(120),c.ty),c.la,c.dH);c.gt=G5();return c;}
var R1=F();
function AFJ(a,b){var c,d;c=new PP;Ga(c,b);b=b.s.b2;d=new O7;d.to=c;Bb(b,d);return c;}
var R0=F();
function AKX(a,b){return ARb(b);}
var RZ=F();
function AOm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new VS;Ga(c,b);c.dw=E1(0,0,300,300);c.eA=Rz(0,0,3,3);d=b.Y;b=b.s.bJ;e=new SM;e.ks=c;Bb(b,e);b=YX(d);c.oN=b;F7(c.dw,b);GI(c.dw);b=c.dw.U;Dm();Bh(b,AS3);Bh(c.dw.N,Cw(204,120,50));AAa();e=AS1;f=EV((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CS(d);XC();switch(ASW.data[e.cQ]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Eg;U(b);J(b);}b:
{Mo(m,5,5,h);b=m.dF.dc;switch(ASW.data[e.cQ]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Eg;U(b);J(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.jO=m;Bc(c.eA.g,B_(m),C1(c.jO));Bh(c.eA.U,c.kZ);return c;}
var RY=F();
function APe(a,b){var c,d,e;c=new Ra;Ga(c,b);c.fZ=E1(0,0,300,300);c.jp=new Ba;c.hQ=new Ba;c.g_=new Ba;d=b.Y;b=b.s.bJ;e=new UX;e.iP=c;Bb(b,e);b=YX(d);c.qJ=b;F7(c.fZ,b);GI(c.fZ);b=c.fZ.U;Dm();Bh(b,AS3);Bh(c.fZ.N,Cw(204,120,50));return c;}
var PI=F();
function AIX(a,b){var c,d,e,f;c=new NQ;D$(c,b);c.vp=20;c.wV=11;c.u7=220;c.is=new Ba;c.vR=5000;c.gj=1;c.e9=H(Ie,[CG(0),CG(255)]);c.dQ=b.Y;d=b.s.bJ;e=new Te;e.iH=c;f=new OG;f.mH=e;e.oZ=f;Bb(d,e);b=b.s.eS;d=new M1;d.sP=c;Bb(b,d);b=CJ(c.dQ,200,220);c.ji=b;FN(b,B(120),20.0);b=CJ(c.dQ,200,20);c.eU=b;FN(b,B(120),20.0);c.hj=G5();return c;}
var PG=F();
function AC0(a,b){var c,d,e;c=new H0;Ga(c,b);Bb(b.s.bJ,c);d=b.s.b2;e=new Rl;e.qR=c;Bb(d,e);Bb(b.s.f9,new Rk);d=b.s.f9;e=new Ri;e.oF=c;Bb(d,e);Bb(b.s.gI,new Rh);d=b.s.gI;e=new Rj;e.mP=c;Bb(d,e);b=!WA(b.bY)?B(123):B(124);d=new M;O(d);G(G(d,B(125)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var PH=F();
function AGq(a,b){var c,d,e,f,g,h,i,j;c=new O_;D$(c,b);c.mX=CG(20);c.eN=E1(0,0,300,300);d=b.s.b2;e=new QS;e.ww=c;Bb(d,e);b=b.Y;d=FH(b,B(10),88);CC(b.cx,d);f=Ef(b.cx,B(126));g=Ef(b.cx,B(127));if(f>g)g=f;h=C7(g);i=Ji(d,1.1799999475479126);j=Bx();e=new M;O(e);S(G(S(G(e,B(128)),h),B(129)),i);Bu(j,N(e));e=CJ(b,h,i*2|0);c.hA=e;CC(e,d);Ce(c.hA,B(126),0.0,d.dg);Ce(c.hA,B(127),0.0,i+d.dg);b=CS(b);c.kR=b;CM(b,c.hA);F7(c.eN,c.kR);GI(c.eN);b=c.eN.U;Dm();Bh(b,AS3);Bh(c.eN.N,AS4);return c;}
var PE=F();
function AI_(a,b){var c,d,e,f;c=new Vs;Hp(c,b);c.r6=SL(B(130),20.0);d=new QB;d.cE=Ck();c.dK=d;Bb(c.be.dA,d);Bb(c.be.dA,c);Bh(c.f1,CG(43));d=Xm(c.be);c.fn=d;Ly(d,Go());c.fn.f3=SL(B(120),25.0);d=b.s.b2;e=new Pv;e.wt=c;Bb(d,e);d=b.s.eG;e=new Pw;e.pp=c;Bb(d,e);d=b.s.bJ;e=c.fn;f=new UZ;f.gl=e;Bb(d,f);Bb(b.s.bJ,c.dK);d=b.s.bJ;e=c.be.cw;f=new Ql;f.lL=e;Bb(d,f);b=b.s.eS;d=c.dK;BI(d);e=new Px;e.qS=d;Bb(b,e);return c;}
var PF=F();
function AMH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=new P9;W9(c,b);d=c.cL;e=new KQ;f=R(Bv,8);g=I(B(131));h=0;i=0;j=g+1|0;while(true){k=Gp(B(131),10,i);l=k>=0?B7(B(131),i,k):Dr(B(131),i);m=f.data;n=h+1|0;i=m.length;if(i==h)f=Da(f,i*2|0);f.data[h]=l;f=f;i=k<0?j:k+1|0;if(i>g)break;h=n;}if(f.data.length!=n)f=Da(f,n);o=f.data;e.fH=null;e.im=B(132);e.pa=null;p=new Jq;i=o.length;if(!i)m=L3(B(31));else{m=R(Cx,i);f=m.data;g=0;while(g<i){b=new Cx;q=R(B4,1);q.data[0]=QU(o[g]);HG(b,q);f[g]=b;g=g+1|0;}}f=m.data;p.dS
=HE();p.ec=HE();p.e6=Ck();if(!f.length){b=new BA;AAQ(b);J(b);}p.E=m;p.fo=0;p.cq=0;p.c0=S_(p);e.h=p;d.uv=null;Ub(d);b=d.e;d.e=e;d.ew=Fq();p=ZP(Dd(d.e));if(p!==null){l=Cg(d);r=new T6;r.rb=d;f=R(C,1);f.data[0]=F6(d.e.h);CZ(l,r,p,f);}f=(Cl(d.d2.lW)).data;s=f.length;i=0;while(i<s){f[i].lx(b,e);i=i+1|0;}return c;}
function GP(){var a=this;C.call(a);a.bz=0;a.cn=0;a.c9=0;a.kp=0;}
function AS5(a,b,c,d){var e=new GP();Tq(e,a,b,c,d);return e;}
function Tq(a,b,c,d,e){a.bz=d;a.cn=b;a.c9=c;a.kp=e;}
function NY(){var a=this;GP.call(a);a.dr=null;a.bk=0;a.iB=0;a.qQ=0;a.jl=0;}
function ACi(b){var c,d,e;c=b.cn;d=c&&!b.bz&&!b.c9&&!b.kp?1:0;a:{if(d){d=b.bk;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bz&&!c&&!b.c9&&!b.kp?1:0;d=d&&b.bk==46?1:0;}b:{if(!d){e=b.bk;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.jl=1;}return 0;}
var ABw=F();
function Vj(b,c){return (b+(c/2|0)|0)/c|0;}
function OL(b,c,d){if(b<(2147483647/c|0))return Vj(Bd(b,c),d);return 0.5+c*b/d|0;}
function KW(b,c){return ((b+c|0)-1|0)/c|0;}
function GY(b){return b+0.5|0;}
function C7(b){return b+0.5|0;}
function GW(b,c,d){return V(b,X(c,d));}
function LB(){var a=this;GP.call(a);a.k=null;a.ub=null;}
var Tj=F(0);
function MM(){var a=this;C.call(a);a.ta=null;a.tb=null;}
function AIR(a,b){var c,d;c=a.ta;d=a.tb;$rt_globals.console.info("paste plain string "+b);c.m(Fm(b));C8(d);}
function T3(){C.call(this);this.tA=null;}
function Vi(a,b){a.tA.clipboardData.setData("text/plain",$rt_ustr(b));}
function VW(){var a=this;I7.call(a);a.vE=0;a.mg=0;}
var AAr=F();
function Jy(){C.call(this);this.v2=null;}
var AS2=null;var AS6=null;function AH4(){AH4=Bo(Jy);AO8();}
function AF4(a){var b=new Jy();W8(b,a);return b;}
function W8(a,b){AH4();a.v2=b;}
function AO8(){AS2=AF4(B(133));AS6=AF4(B(134));}
var U_=F(0);
function RJ(){C.call(this);this.gY=null;}
function Fu(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gY));}
function Ek(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.gY));}
function AFt(a){var b,c;b=a.gY.byteLength;c=new M;O(c);G(S(G(c,B(135)),b),B(136));return N(c);}
var Ty=F(0);
function Kh(){var a=this;C.call(a);a.gm=null;a.eJ=null;a.lb=null;}
function AAn(a,b){var c=new Kh();AHZ(c,a,b);return c;}
function APG(a,b,c){var d=new Kh();M3(d,a,b,c);return d;}
function Xh(b){var c,d,e,f,g,h,i,j,k;c=new Kh;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=TH(E(U6),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=f[h];h=h+1|0;}}i=g.data;h=i.length;if(!h)j=R(Bv,0);else{j=R(Bv,h-1|0);g=j.data;h=0;k=g.length;while(h<k){g[h]=Fm(i[h]);h=h+1|0;}}}else j=R(Bv,0);M3(c,d,b,j);return c;}
function AHZ(a,b,c){M3(a,b,c,R(Bv,0));}
function M3(a,b,c,d){a.gm=b;a.eJ=c;a.lb=d;}
function IX(a,b){var c,d,e;c=b|0;if(c===b)return c;d=EQ(a);e=new M;O(e);G(G(e,B(137)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function EQ(a){var b;b=a.gm;return Fm(b!==null?b.name:a.eJ.name);}
function AIp(a){var b,c,d,e,f;if(a.eJ===null){b=a.lb;c=EQ(a);d=Yo(b);e=new M;O(e);G(G(G(e,d),B(138)),c);c=N(e);}else{b=a.lb;c=EQ(a);f=IX(a,a.eJ.size);d=Yo(b);e=new M;O(e);S(G(G(G(G(e,d),B(138)),c),B(139)),f);c=N(e);}return c;}
function J1(){var a=this;J6.call(a);a.ob=null;a.m_=null;}
function XQ(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.ob;e=0;f=0;g=a.m_;a:{while(true){if((e+32|0)>f&&DA(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=X(B2(b)+j|0,i.length);MD(b,d,j,f-j|0);e=0;}if(!DA(c)){k=!DA(b)&&e>=f?AST:ASS;break a;}i=g.data;j=X(B2(c),i.length);l=new ML;l.l5=b;l.oY=c;k=ZU(a,d,e,f,g,0,j,l);e=l.sk;j=l.ts;if(k===null){if(!DA(b)&&e>=f)k=AST;else if(!DA(c)&&e>=f)k=ASS;}VX(c,g,0,j);if(k!==null)break;}}Et(b,b.R-(f-e|0)|0);return k;}
var Or=F(J1);
function ZU(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(KT(h,2))break a;i=ASS;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Lg(l)){if((f+3|0)>g){j=j+(-1)|0;if(KT(h,3))break a;i=ASS;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CD(l)){i=DN(1);break a;}if
(j>=d){if(DA(h.l5))break a;i=AST;break a;}c=j+1|0;m=k[j];if(!CY(m)){j=c+(-2)|0;i=DN(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(KT(h,4))break a;i=ASS;break a;}k=e.data;o=Ei(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.sk=j;h.ts=f;return i;}
var HV=F(DP);
function JL(){var a=this;Cp.call(a);a.qt=null;a.e4=null;a.cL=null;a.gR=null;a.pF=null;a.lj=null;}
function ARz(a){var b=new JL();W9(b,a);return b;}
function W9(a,b){var c,d,e,f,g,h;D$(a,b);a.qt=Ol(0,0,64);a.pF=new Ba;a.lj=new Ba;c=ADW(b);a.e4=c;d=new TS;d.ki=c;d.cY=AM6(c);c=Xm(d.ki);d.b7=c;c.f3=SL(B(130),17.0);a.gR=d;c=ARk(a.e4,d);a.cL=c;e=a.e4;f=e.h7.dn!==(DW()).activeElement?0:1;if(f)I$(e);e.en=c;if(f)JY(e);Bb(b.s.bJ,a.gR);Bb(b.s.bJ,a.cL);Bb(b.s.b2,new QX);c=b.s.b2;d=new Q1;d.te=a;Bb(c,d);c=b.s.b2;d=new Jl;g=a.cL;BI(g);h=new Q0;h.lH=g;Ux(d,b,null,h);Bb(c,d);c=b.s.b2;d=a.e4;BI(d);g=new QZ;g.oI=d;Bb(c,g);c=b.s.f9;d=a.cL;BI(d);g=new QY;g.tW=d;Bb(c,g);c=
b.s.gI;d=new Q4;d.mG=a;Bb(c,d);c=b.s.eS;d=new Q3;d.rI=a;Bb(c,d);b=b.s.eG;c=new Q2;c.sA=a;Bb(b,c);ST(a);}
function AE$(a,b){var c,d,e,f;c=a.cL;d=c.e.h;e=d.fo;f=d.cq;e=e!=f&&b-d.oJ>0.03125?1:0;if(e&&c.kj!=f){c.kj=f;RB(c);}e=c.bj;f=D2(c,(e+c.uO|0)-c.ug|0,EH(c));c.bj=f;e=e==f?0:1;return !RN(c.cD,b)&&!e&&!c.qB?0:1;}
function AHL(a){var b;Fe(a.bh.Y,a.qt);ACs(a.cL);b=a.gR;Pb(b.cY);KA(b.b7);}
function ALl(a){return ACt(0);}
function AJ1(a,b,c){var d,e,f;Ki(a.e4,b,c);a.ry(b);b=a.cL;d=a.pF;e=a.lj;Dv(b.cr,d);Dv(b.cM,e);b.cK=Cc(b.q5,c);f=Cc(10.0,c);b.kH=f;f=b.cK-f|0;Uv(b.eE,b.cr,f,b.cM.b,c);d=b.cD;f=Cc(2.0,c);d.dy.g.a=f;S1(b,b.io,b.fM);UL(b);}
function Z4(a,b){Bc(a.lj,b.a,b.b);}
function ST(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new KC;c=new Ie;Dm();NL(c,AS3);d=CU(AS7);e=CU(AS8);f=CU(AS9);g=CU(AS3);h=CU(AS$);i=CU(AS_);j=CU(ATa);Yg();k=(ATb.ff()).data;l=k.length;m=R(IH,l);n=m.data;o=0;while(o<l){n[o]=k[o].kv;o=o+1|0;}Mx(b,c,d,e,f,g,h,i,j,m,ABC(),Go());Up(a,b);}
function Z2(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=new KC;c=new Ie;Dm();NL(c,ATc);d=CU(ATd);e=CU(ATe);f=CU(AS9);g=CU(ATc);h=CU(ATf);i=CU(ATg);j=CU(ATh);ABA();k=(ATi.ff()).data;l=k.length;m=R(IH,l);n=m.data;o=0;while(o<l){n[o]=k[o].k4;o=o+1|0;}p=AJw(CG(173),CG(242),CG(173),Cw(252,250,237));q=new Kb;r=new ER;s=ATj;t=ATe;EE();F4(r,s,t,s,ATk,ATl);u=new ER;s=ATj;t=ATe;v=ATk;F4(u,s,t,s,v,v);RO(q,r,u,ACn(),Bq(B(140)),ACn(),AE3(1,0.07500000298023224));Mx(b,c,d,e,f,g,h,i,j,m,p,q);Up(a,b);}
function Up(a,b){var c;BI(b);c=a.gR;c.bq=b;WS(c.cY,b.bi);Ly(c.b7,b.bi);c=a.cL;c.d$=b;c=c.cD;b=b.pJ;Bh(c.dy.N,b);}
function ACp(a,b){if(b.bk!=121)return 0;return 1;}
function XV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=a.e4;d=a.cL;if(d!==c.en?0:1){c=a.gR;if(!DQ(c.b7)){e=c.b7;f=b.k;b=new RM;b.W=c;b.bs=d;b.gU=a;g=OV();h=b.bs.e;i=Dd(h);j=GE(h);k=b.bs.d2;if(UJ(k,i,j)!==null){h=b.W.bq.bi.bb;l=new Qp;l.nz=b;l.ny=f;DX(g,B(141),h,l);}if(J2(k,i,j)!==null){m=b.W.bq.bi.bb;l=new Qo;l.op=b;l.or=f;DX(g,B(142),m,l);}if(MB(k,i,j)!==null){i=b.W.bq.bi.bb;j=new Qm;j.mT=b;j.mU=f;DX(g,B(143),i,j);}i=b.W.bq.bi.bb;j=new Qn;j.tR=b;j.tS=f;DX(g,B(144),i,j);if(!b.bs.e5){i=b.W.bq.bi.bb;j=new OC;j.sB
=b;DX(g,B(145),i,j);}i=b.W.bq.bi.bb;j=new OA;j.pl=b;DX(g,B(146),i,j);if(!b.bs.e5&&WA(H5(b))){i=b.W.bq.bi.bb;j=new OD;j.rJ=b;DX(g,B(147),i,j);}m=b.W.bq.bi.bb;h=OV();j=b.W.bq.bi.bb;n=R(Dy,2);o=n.data;p=b.gU;BI(p);q=new RG;q.nD=p;o[0]=Ea(B(148),j,q);p=b.W.bq.bi.bb;q=b.gU;BI(q);r=new RH;r.qC=q;o[1]=Ea(B(149),p,r);Er(h,B(150),j,GU(n));j=b.W.bq.bi.bb;n=R(Dy,2);o=n.data;p=b.bs;BI(p);q=new Ng;q.q1=p;o[0]=Ea(B(151),j,q);p=b.W.bq.bi.bb;q=b.bs;BI(q);r=new Nf;r.pM=q;o[1]=Ea(B(152),p,r);Er(h,B(153),j,GU(n));j=b.W.bq.bi.bb;l
=new Uf;l.qs=b;Er(h,B(154),j,l);Er(g,B(155),m,G6(h));k=b.W.bq.bi.bb;m=OV();Er(m,B(156),b.W.bq.bi.bb,ACI(b));h=b.W.bq.bi.bb;i=new Va;i.rY=b;DX(m,B(157),h,i);Er(g,B(158),k,G6(m));Hl(e,f,G6(g),II(c,d));}}return 1;}
function XG(){var a=this;Cp.call(a);a.kB=null;a.c5=null;a.f$=null;a.eX=null;a.gT=null;a.t8=null;a.gF=null;a.qo=null;a.ln=null;a.ur=null;a.vv=null;a.fI=null;a.jb=null;a.pt=0;}
function APS(a){var b=new XG();AI9(b,a);return b;}
function AI9(a,b){var c,d,e,f,g,h,i;D$(a,b);c=new B3;Dm();AAy(c,AS3);a.kB=c;a.c5=E1(0,0,300,300);a.f$=Rz(0,0,3,3);a.eX=E1(0,0,300,300);a.gT=AKm();d=R(Bv,4);e=d.data;e[0]=B(159);e[1]=B(160);e[2]=B(161);e[3]=B(162);a.t8=d;a.gF=R(H4,e.length);f=b.Y;c=b.s.bJ;g=new SO;g.eV=a;Bb(c,g);c=b.s.b2;g=new Qz;g.tY=a;Bb(c,g);c=b.s.lB;g=new Qy;g.nY=a;Bb(c,g);c=b.s.f9;g=new QC;g.v0=a;Bb(c,g);c=b.s.iV;g=new QA;g.uj=a;Bb(c,g);c=b.s.eG;g=new Qx;g.vo=a;Bb(c,g);b=b.s.eS;c=new Qw;c.sl=a;Bb(b,c);h=CJ(a.bh.Y,300,300);c=h.bn;b="white";c.fillStyle
=b;b=h.bn;c="white";b.strokeStyle=c;b=h.bn;c=10.0;b.lineWidth=c;h.bn.strokeRect(75.0,140.0,150.0,110.0);h.bn.fillRect(130.0,190.0,40.0,60.0);h.bn.beginPath();h.bn.moveTo(50.0,140.0);h.bn.lineTo(150.0,60.0);h.bn.lineTo(250.0,140.0);h.bn.closePath();h.bn.stroke();FN(h,B(163),11.0);KD(h,187,187,187);Oq(a,B(164),h);b=CS(a.bh.Y);CM(b,h);FB(h);a.qo=b;F7(a.c5,b);GI(a.c5);Bh(a.c5.U,AS3);Bh(a.c5.N,Cw(204,120,50));b=CJ(f,255,100);a.fI=b;FN(b,B(130),11.0);b=Bx();i=$rt_str(a.fI.bn.font);g=new M;O(g);G(G(g,B(165)),i);Bu(b,
N(g));Ef(a.fI,B(166));KD(a.fI,169,183,198);Oq(a,B(166),a.fI);b=CS(f);a.ln=b;CM(b,a.fI);F7(a.eX,a.ln);GI(a.eX);FY(a.eX,CG(255));Hf(a.eX,AS3);a.ur=CS(f);Bh(a.f$.U,a.kB);}
function Oq(a,b,c){Ce(c,b,0.0,20.0);Ce(c,b,0.25,40.0);Ce(c,b,0.5,60.0);Ce(c,b,0.75,80.0);}
function VP(a,b){IT(Ff(),0.5+Ff()*0.5,0.5+Ff()*0.5,1.0,b.N);}
function ADl(a,b){var c;a.pt=a.pt+1|0;c=b/5.0;IT(c-(c|0),1.0,1.0,1.0,a.f$.N);return RN(a.gT,b);}
function AGh(a){var b,c,d,e,f,g;b=a.bh.Y;Fe(b,a.kB);c=a.gF.data;d=c.length;e=0;while(e<d){Gv(c[e],b,0,0);e=e+1|0;}CL(a.c5,b,a.qo,0,0,0.5);f=a.ln;d=0;while(d<7){g=a.eX;CL(g,b,f,Bd(d,10+((10*g.g.a|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.vv;if(g!==null)S$(a.f$,b,g,0,0,0.0);Ua(a.gT,b,new Ba);MX(b,B(167));}
function AMn(a,b,c){var d,e,f,g,h,i,j,k,l;d=Bx();e=Cu(b);f=new M;O(f);G(G(f,B(168)),e);Bu(d,N(f));g=Bx();d=new M;O(d);E6(G(d,B(169)),c);Bu(g,N(d));h=Cc(30.0,c);i=Cc(10.0,c);j=0;while(true){k=a.gF.data;if(j>=k.length)break;l=1+j|0;k[j]=Rz(Bd(i,l)+Bd(h,j)|0,h,h,h);VP(a,a.gF.data[j]);j=l;}Bc(a.f$.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.c5;g=d.u;h=b.a;d=d.g;Bc(g,(h-d.a|0)/2|0,(b.b-d.b|0)/2|0);d=a.eX;d.u.b=b.b-d.g.b|0;}
function N2(a,b){var c,d,e,f,g;c=Bx();d=!b.iB?B(170):B(171);e=b.dr;f=b.bk;g=b.qQ;b=new M;O(b);FQ(G(S(G(G(G(b,d),e),B(172)),f),B(173)),g);Bu(c,N(b));return 0;}
function DS(){var a=this;Cp.call(a);a.f1=null;a.be=null;}
function Hp(a,b){var c,d;D$(a,b);a.f1=Ol(0,0,64);a.be=ADW(b);Bb(b.s.b2,new Rd);b=b.s.b2;c=a.be;BI(c);d=new Re;d.re=c;Bb(b,d);}
function G4(a){Fe(a.bh.Y,a.f1);}
function H1(a,b,c){Ki(a.be,b,c);}
var DT=F(0);
function Vc(){var a=this;DS.call(a);a.qz=null;a.dj=null;a.cB=null;a.dO=null;a.rh=null;}
function ANN(a,b,c){var d;d=HW(a.be,a.rh);HA(a.dj,d);HA(a.cB,d);GC(a.dj,a.be);GC(a.cB,a.be);}
function MK(b){return Im(b,ANg());}
function Im(b,c){var d;d=OV();JK(d,J0(b,HY(c,25)),!b?null:Im(b-1|0,c));JK(d,J0(b,HY(c,20)),!b?null:Im(b-1|0,c));JK(d,J0(b,HY(c,15)),!b?null:Im(b-1|0,c));JK(d,J0(b,HY(c,10)),!b?null:Im(b-1|0,c));return G6(d);}
function J0(b,c){var d;if(b){d=new M;O(d);G(G(S(d,b),B(36)),c);c=N(d);}return c;}
function JK(b,c,d){var e,f;e=new G0;f=IT(Ff(),1.0,1.0,1.0,new B3);EE();K_(e,f,ATm,ATn);if(d!==null)Er(b,c,e,d);else{d=new Tk;d.sn=c;DX(b,c,e,d);}}
function AFP(a,b,c){var d,e;H1(a,b,c);b=a.be.b5;d=D0(a.dj);e=D0(a.cB);Jb(a.dj,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);Jb(a.cB,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AGv(a){var b,c,d,e,f,g,h,i;G4(a);b=a.bh.Y;Cv(b,1);c=a.qz;d=a.be;e=d.b5;Bc(c.k_,e.a,Cc(2.0,d.bH));Bc(c.jy,Cc(2.0,d.bH),e.b);EE();f=ATo;g=d.c4;h=e.b/2|0;i=c.k_;BJ(g,0,h-(i.b/2|0)|0,i,f);g=d.c4;h=e.a/2|0;c=c.jy;BJ(g,h-(c.a/2|0)|0,0,c,f);IY(a.dj,a.be);IY(a.cB,a.be);KA(a.dO);Cv(b,0);}
function ALJ(a,b){var c,d,e;c=JJ(a.dO,b);d=Jw(a.dj,b.k,a.be.cw);e=Jw(a.cB,b.k,a.be.cw);return !c&&!d&&!e?0:1;}
function AHq(a,b,c){return I9(a.dO,b,c);}
function AEp(a,b,c){return DQ(a.dO);}
function AK0(a,b,c,d){var e,f,g;e=IJ(a.dO,b,c,d);f=Jo(a.dj,b.k,c,d);g=Jo(a.cB,b.k,c,d);return !e&&!f&&!g?0:1;}
function Wn(){DS.call(this);this.dW=null;}
function DJ(b,c,d,e){var f,g,h,i;f=new ER;Dm();g=AS4;h=AS8;EE();F4(f,g,h,g,ATp,ATl);i=new SC;i.mK=c;i.mL=d;i.mI=e;KM(b,c,d,e,f,i);}
function AE5(a,b,c){var d,e;H1(a,b,c);d=a.dW;e=U0(d.b6);Wi(d.b6,(b.a-e.a|0)/2|0,(b.b-e.b|0)/2|0);}
function ALi(a){var b;G4(a);b=a.bh.Y;Cv(b,1);Pb(a.dW);Cv(b,0);}
function AMt(a,b){return PN(a.dW,b.k);}
function AIj(a,b,c,d){return Pp(a.dW,b.k,c,d);}
function S5(a,b){var c,d,e,f;c=a.dW;d=AK4();DJ(d,B(174),B(175),B(176));DJ(d,B(174),B(177),B(178));DJ(d,B(174),B(179),B(180));DJ(d,B(181),B(182),B(183));DJ(d,B(174),B(184),B(176));DJ(d,B(185),B(186),B(176));DJ(d,B(187),B(188),B(176));DJ(d,B(189),B(188),B(176));DJ(d,B(190),B(188),B(176));DJ(d,B(191),B(188),B(176));e=PB(d);f=new Ps;f.vh=a;ON(c,b,e,f);}
function W2(){var a=this;DS.call(a);a.hz=null;a.fm=null;a.eL=null;a.iL=null;a.n5=null;a.hP=null;a.fx=null;a.fi=null;a.iG=0;a.fJ=0;}
function VI(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=0;while(c<b){if(a.fm.j>0){a:{d=Ff();e=a.fm;f=d*(e.j-1|0)|0;e=Ed(e,f);Ed(a.eL,f);f=a.fJ;g=e.g;a.fJ=f-Bd(g.a,g.b)|0;g=a.hz;h=ARs(e.bP);e=g.fq;if(e.j>0){e=BR(e);while(true){if(!B1(e))break a;i=BV(e);if(i.bt===h.bt){j=i.bf;k=i.bl;l=j+k;m=h.bf;if(l===m){h.bf=j;h.bl=h.bl+k;PL(e);}else{l=h.bl;if(m+l===j){h.bl=l+k;PL(e);}}}}}}BW(g.fq,h);}c=c+1|0;}}
function JG(a,b){var c,d,e,f,g,h,i,j;c=K3(a.be);CC(c,a.iL);d=0;while(d<b){e=HY(a.hP,1+(Ff()*19.0|0)|0);f=J9();g=f.bP;h=a.hz;BI(c);i=new Qc;i.of=c;Bh(g,GZ(h,e,i));(GO(Ff(),1.0,1.0,f.U)).bu=0.5;h=f.u;g=f.bP;Bc(h,g.bf|0,g.bt|0);h=f.g;g=f.bP;Bc(h,g.bl|0,g.bu|0);BW(a.eL,e);BW(a.fm,f);j=a.fJ;h=f.g;a.fJ=j+Bd(h.a,h.b)|0;d=d+1|0;}a.fi=Wu(a.hz);}
function AC$(a,b,c){H1(a,b,c);Ki(a.be,b,c);}
function ALS(a){var b,c,d,e,f,g,h,i;G4(a);b=a.bh.Y;Cv(b,1);c=a.be.c4;if(a.eL.j){d=a.fi;d=CJ(c,d.a,d.b);CC(d,a.iL);e=a.iL.dg;BJ(c,0,0,a.fi,a.n5);f=0;while(f<a.eL.j){g=Bs(a.fm,f);h=Bs(a.eL,f);g=g.bP;Ce(d,h,g.bf,g.bt+e);f=f+1|0;}g=a.fx;if(!(g!==null&&B_(g)==a.fi.a&&C1(a.fx)==a.fi.b))a.fx=CK(a.fx,CS(c));CM(a.fx,d);FB(d);i=0;while(i<a.eL.j){d=Bs(a.fm,i);FY(d,CG(0));CL(d,c,a.fx,0,0,0.0);i=i+1|0;}}Cv(b,0);}
function AFr(a,b){var c,d;if(a.iG){c=a.fi;d=X(Bd(c.a,c.b),2211840);if(a.fJ/d<=0.7)JG(a,HO(a.hP,5));else VI(a,HO(a.hP,5));}return a.iG;}
function Og(){var a=this;Cp.call(a);a.dH=null;a.fE=null;a.gt=null;a.kb=null;a.dG=0;a.q4=0;a.tl=null;a.la=0;a.ty=0;a.r7=null;a.nZ=null;}
function ADC(a){var b,c;b=a.dG;c=new M;O(c);S(G(c,B(192)),b);$rt_globals.console.info($rt_ustr(N(c)));Fe(a.dH,a.tl);HZ(a.gt,a.dG,0,FW(a),5000,a.kb.a,20);Cv(a.dH,1);O2(a.gt,a.dH);Cv(a.dH,0);b=a.dG;c=new M;O(c);S(G(c,B(192)),b);$rt_globals.console.info($rt_ustr(N(c)));WJ(a.fE,a.dG/a.la|0);Tc(a.fE,a.dG,FW(a),a.nZ,a.dH);}
function ANx(a,b,c){a.kb=b;Uv(a.fE,Cf(0,0),50,FW(a),c);Je(a.fE,a.dH,0,FW(a));}
function OU(a){return 5000-FW(a)|0;}
function FW(a){return X(a.q4,a.kb.b);}
function C4(){var a=this;Cp.call(a);a.kZ=null;a.gg=null;a.uk=0.0;}
function ATq(a){var b=new C4();Ga(b,a);return b;}
function Ga(a,b){D$(a,b);a.kZ=Ol(0,0,64);a.gg=new Ba;ME(b.bY,HB(Cz(a)));}
function Q$(a){Fe(a.bh.Y,a.kZ);}
function RE(a,b,c){Dv(a.gg,b);a.uk=c;}
var PP=F(C4);
var ACj=F(C4);
function ARb(a){var b=new ACj();AKA(b,a);return b;}
function AKA(a,b){var c,d,e,f,g,h;Ga(a,b);c=b.bY;d=new Qb;d.uU=a;e=R(C,1);e.data[0]=B(193);CZ(c,d,B(194),e);f=b.bY;g=new Qa;g.wI=a;h=R(C,1);h.data[0]=Zo([1,2,3,4,5]);CZ(f,g,B(195),h);f=b.bY;g=new P_;g.nW=a;h=R(C,1);h.data[0]=AQw([1,2,3,4,5]);CZ(f,g,B(196),h);f=b.bY;g=new P$;g.uC=a;h=R(C,1);h.data[0]=ES([1,2,3,4,5]);CZ(f,g,B(197),h);f=b.s.b2;d=new Jl;g=new P8;g.vL=a;c=new P7;c.pi=a;Ux(d,b,g,c);Bb(f,d);}
function Tv(a,b){var c,d,e,f,g,h;c=b.data;d=Bx();e=Cu(c[0]);f=new M;O(f);G(G(f,B(198)),e);Bu(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((QQ(b,1)).gY));d=Bx();e=Cu(c[1]);if(b===null)f=B(29);else{f=new M;O(f);BX(f,B(42));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BX(f,B(43));S(f,c[g]);g=g+1|0;}BX(f,B(44));f=N(f);}h=new M;O(h);G(G(G(G(h,B(199)),e),B(200)),f);Bu(d,N(h));}
function VS(){var a=this;C4.call(a);a.dw=null;a.eA=null;a.jO=null;a.oN=null;a.kQ=null;}
function AIH(a,b){b=b/5.0;IT(b-(b|0),1.0,1.0,1.0,a.eA.N);return 0;}
function ADf(a){Q$(a);CL(a.dw,a.bh.Y,a.oN,0,0,0.5);S$(a.eA,a.bh.Y,a.jO,0,0,0.0);MX(a.bh.Y,B(167));}
function ALg(a,b,c){var d,e,f;RE(a,b,c);Bc(a.eA.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.dw;e=d.u;f=b.a;d=d.g;Bc(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Ra(){var a=this;C4.call(a);a.fZ=null;a.qJ=null;a.jp=null;a.hQ=null;a.g_=null;}
function AOR(a){var b,c,d,e,f,g;Q$(a);b=a.bh.Y;c=a.hQ;T$(b,c.a,c.b,a.g_);b=a.fZ;c=a.qJ;d=a.gg;e=a.bh.Y;f=0;while(true){g=0;while(true){CL(b,e,c,g,f,0.5);g=g+B_(c)|0;if(g>=d.a)break;}f=f+C1(c)|0;if(f>=d.b)break;}UW(a.bh.Y);}
function AEV(a,b,c){RE(a,b,c);Bc(a.g_,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function NQ(){var a=this;Cp.call(a);a.dQ=null;a.ji=null;a.eU=null;a.bX=null;a.eh=0;a.hj=null;a.ej=0;a.vp=20;a.wV=11;a.u7=220;a.is=null;a.vR=5000;a.gj=0;a.e9=null;}
function AOU(a){var b,c,d,e,f,g,h;b=a.hj;c=a.ej;d=a.is;HZ(b,c,0,d.b,5000,d.a,20);Cv(a.dQ,1);O2(a.hj,a.dQ);if(a.bX===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Ce(a.ji,De(e),0.0,c);}b=CS(a.dQ);a.bX=b;CM(b,a.ji);}if(a.ej<=a.eh)while(true){f=a.eh;if(f<=a.ej)break;a.eh=f-20|0;b=a.eU;g=a.gj-1|0;a.gj=g;Ce(b,De(g),0.0,20.0);Hx(a.bX,a.eU,0,a.eh%220|0);El(a.eU);}else while(a.eh<(a.ej-20|0)){b=a.eU;g=a.gj+1|0;a.gj=g;Ce(b,De((g+11|0)-1|0),0.0,20.0);Hx(a.bX,a.eU,0,a.eh%220|0);El(a.eU);a.eh=a.eh+20|0;}b=E1(0,0,B_(a.bX),C1(a.bX));Hi(b,
0,0,B_(a.bX),C1(a.bX));FY(b,a.e9.data[0]);Hf(b,a.e9.data[1]);CL(b,a.dQ,a.bX,400,0,1.0);g=a.ej%220|0;f=X(C1(a.bX)-g|0,200);d=E1(0,0,B_(a.bX),f);Hi(d,0,g,B_(a.bX),f);FY(d,a.e9.data[0]);Hf(d,a.e9.data[1]);CL(d,a.dQ,a.bX,0,0,1.0);h=E1(0,f,B_(a.bX),(C1(a.bX)-f|0)-20|0);Hi(h,0,0,B_(a.bX),(C1(a.bX)-f|0)-20|0);FY(h,a.e9.data[1]);Hf(h,a.e9.data[0]);CL(h,a.dQ,a.bX,0,0,1.0);}
function AGW(a,b,c){Dv(a.is,b);}
function AFx(a,b){return 0;}
function QJ(a){return 5000-a.is.b|0;}
function H0(){C4.call(this);this.dk=0;}
function P4(a){var b,c;b=a.bh.bY;c=new Pk;c.mb=a;PO(b,c,Qq(a));}
function LJ(a){var b,c,d,e;b=a.dk+1|0;a.dk=b;c=HB(E(H0));d=new M;O(d);G(G(S(G(d,B(201)),b),B(36)),c);e=N(d);c=a.bh.bY;d=new Tb;d.o0=e;Tp(c,e,d,Qq(a));}
function Qq(a){var b;b=new UO;b.n1=a;return b;}
function AMg(a,b,c,d){a:{switch(c){case 0:break;case 2:LJ(a);break a;default:break a;}P4(a);}return 1;}
function O_(){var a=this;Cp.call(a);a.mX=null;a.eN=null;a.kR=null;a.hA=null;}
function AOM(a){var b;b=a.bh.Y;Fe(b,a.mX);CL(a.eN,b,a.kR,0,0,0.5);}
function AJB(a,b,c){var d,e,f;d=a.eN;e=d.u;f=b.a;d=d.g;Bc(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Vs(){var a=this;DS.call(a);a.fn=null;a.dK=null;a.iC=null;a.iD=null;a.r6=null;}
function AHS(a,b,c){if(b===0.0)MQ(a);}
function APa(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;G4(a);b=a.bh.Y;c=a.dK;d=c.cE.j-1|0;while(d>=0){e=Bs(c.cE,d);e.p.hK(b);f=e.Q;g=e.gh;if(!KY(f)){if(!SV(f)&&!(!f.go&&f.c1!==null)){f.go=0;PR(f);h=f.dC;i=(h.dg+h.dZ+5.0)/10.0;j=Cs(f.gw,f.ii);h=b.cx;k=f.dC;l=f.gA;m=i*2.0;CC(h,k);n=j+JX(h,l,m)|0;f.hg=n;n=X(n,f.o.a);if(n){h=CJ(b,n,f.o.b);CC(h,f.dC);k=f.gA;o=j;p=o+i;l=f.dC;i=l.dg;Ce(h,k,p,o+i-(i+l.dZ)/16.0);k=f.c1;if(k===null){k=CS(b);f.c1=k;}CM(k,h);FB(h);CE(f.kV,0.0,0.0,B_(f.c1),C1(f.c1));}}h=g.bb.fs;k=f.c1;if(k
===null)On(f,b,0,f.o.a,h);else{n=B_(k);g=g.bb.iW;k=f.x;j=k.a;q=k.b;k=f.c1;Hy(b,j,q,k.fa,f.kV,k,g,h,0.0);j=f.o.a;if(n<j)On(f,b,n,j-n|0,h);}}Cv(b,1);n=Cs(e.M,2.0);j=KY(e.Q);g=e.M;f=g.jB;g=g.nJ;q=j?0:e.Q.o.b;h=e.p.o;Bc(g,h.a,h.b+q|0);U7(b,g,!j?e.Q.x:e.p.x,e.gh.iA, -n|0,f);g=e.p;TZ(b,g.o,g.x,n,q,JI(e.gh.g3,e.M.bH),e.gh.g3.iU,f);d=d+(-1)|0;}KA(a.fn);}
function MQ(a){VG(a,a.iC);VG(a,a.iD);a.iC=Mc(a,0.5,0,B(202));a.iD=Mc(a,1.0,1,B(203));Wr(a.dK,a.iC);Wr(a.dK,a.iD);V3(a);}
function VG(a,b){var c;if(b!==null){U3(a.dK.cE,b);c=b.Q;c.c1=CK(c.c1,null);b.p=CK(b.p,null);}}
function Mc(a,b,c,d){var e,f,g,h;e=new WV;f=a.be;e.p=APO();e.M=f;g=new Sp;KG(g);g.kV=new B3;g.gw=f;e.Q=g;g=new U2;h=new Oy;h.r9=a;h.r$=e;h.r8=d;KG(g);g.dh=new Ba;g.cN=new Ba;g.hs=new B3;g.kD=new Ba;g.rf=h;g.oX=b;if(c){h=new Ph;f=a.be;KG(h);d=new S2;d.nr=h;h.qG=d;d=new S3;d.qu=h;h.sV=d;h.rw=10.0;h.cg=g;h.kJ=f.cw;g=h;}d=e.p;h=d.x;f=d.o;d=CK(d,g);e.p=d;d.il(h,f,e.M.bH);e.gh=Go();return e;}
function ALA(a,b,c){var d,e;H1(a,b,c);b=a.dK;d=0;while(true){e=b.cE;if(d>=e.j)break;Bs(e,d);d=d+1|0;}V3(a);}
function V3(a){var b;b=a.be.b5;C_(a.iD,Cf((b.a*2|0)/10|0,(b.b*2|0)/10|0),Cf((b.a*7|0)/10|0,(b.b*7|0)/10|0));C_(a.iC,Cf(b.a/10|0,b.b/10|0),Cf((b.a*6|0)/10|0,(b.b*6|0)/10|0));}
function AID(a,b){var c,d,e,f;c=a.dK;d=0;e=0;while(true){f=c.cE;if(e>=f.j)break;Bs(f,e);d=0|d;e=e+1|0;}return d;}
var P9=F(JL);
function AHX(a){return ACt(1);}
function AE1(a,b){Z4(a,b);}
var Iq=F(0);
function Lu(){var a=this;C.call(a);a.ig=null;a.hO=null;}
function LG(a,b){var c;c=a.hO;a.hO=b;return c;}
function IN(){var a=this;Lu.call(a);a.bG=null;a.bU=null;a.e8=0;a.fg=0;}
function I2(a){var b;b=J7(a);if(b==2){if(J7(a.bU)<0)a.bU=Mk(a.bU);return NM(a);}if(b!=(-2))return a;if(J7(a.bG)>0)a.bG=NM(a.bG);return Mk(a);}
function J7(a){var b,c;b=a.bU;c=b===null?0:b.e8;b=a.bG;return c-(b===null?0:b.e8)|0;}
function Mk(a){var b;b=a.bG;a.bG=b.bU;b.bU=a;D9(a);D9(b);return b;}
function NM(a){var b;b=a.bU;a.bU=b.bG;b.bG=a;D9(a);D9(b);return b;}
function D9(a){var b,c,d;b=a.bU;c=b===null?0:b.e8;b=a.bG;d=b===null?0:b.e8;a.e8=V(c,d)+1|0;a.fg=1;b=a.bG;if(b!==null)a.fg=1+b.fg|0;b=a.bU;if(b!==null)a.fg=a.fg+b.fg|0;}
var AB4=F();
function AEf(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Ob;c=c.buffer;d.e7=c;d.lv=new $rt_globals.Int8Array(c);d.jj=new $rt_globals.Uint16Array(c);d.rB=new $rt_globals.Int32Array(c);d.oA=new $rt_globals.Float32Array(c);d.oL=new $rt_globals.Float64Array(c);e=d.e7.byteLength;c=new M;O(c);S(G(c,B(204)),e);CF(N(c));e=b.callToCpp1();c=new M;O(c);S(G(c,B(205)),e);CF(N(c));f=b.callToCpp2();c=new M;O(c);E6(G(c,B(206)),f);CF(N(c));c=L8(d,b.getC8String());g=new M;O(g);G(G(g,B(207)),c);CF(N(g));c
=Mf(d,b.getC16String());g=new M;O(g);G(G(g,B(208)),c);CF(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.e7,h,8));c=AAN(i);g=new M;O(g);G(G(g,B(209)),c);CF(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.e7,h,8));c=AMC(j);g=new M;O(g);G(G(g,B(210)),c);CF(N(g));k=Y$(d,b.getCDoubleArray8(),8);l=APc(k);c=new M;O(c);G(G(c,B(211)),l);CF(DF(c));l=AO1(b.getC8String(),B(212),d);c=KZ();G(G(c,B(213)),l);CF(DF(c));l=AJp(b.getC16String(),B(214),
d);c=KZ();G(G(c,B(215)),l);CF(DF(c));c=ALa(i,d,b.getCIntArray8(),ES([11,22,33,44,55,66,77,88]));g=KZ();G(G(g,B(216)),c);CF(DF(g));c=AMR(j,d,b.getCFloatArray8(),100,ES([111,222,333,444,555,666,777,888]));g=KZ();G(G(g,B(217)),c);CF(DF(g));b=AM9(k,d,b.getCDoubleArray8(),1000,ES([1111,2222,3333,4444,5555,6666,7777,8888]));c=KZ();G(G(c,B(218)),b);CF(DF(c));}
function AMR(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(219);h=0;i=e;a:{while(h<g){if(C7(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.oA[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(220);}return B(221);}
function AM9(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(219);h=0;i=e;a:{while(h<g){if(GY(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.oL[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(220);}return B(221);}
function ALa(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(219);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.rB[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(220);}return B(221);}
function AO1(b,c,d){var e,f,g,h;e=L8(d,b);if(!Bt(c,e))return B(222);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.lv[h])return B(223);f=f+1|0;}return B(220);}
function AJp(b,c,d){var e,f,g,h;e=Mf(d,b);if(!Bt(c,e))return B(222);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.jj[h>>>1|0]&65535))return B(223);f=f+1|0;}return B(220);}
function CF(b){N9(B(2),b);}
function AIq(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
var XY=F(0);
function Ol(b,c,d){return Hg(b,c,d,255,new B3);}
function W5(b,c,d,e){return Hg(b,c,d,e,new B3);}
function Hg(b,c,d,e,f){CE(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function GO(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bf=g+i;e.bt=h+i;e.bl=j+i;return e;}
function IT(b,c,d,e,f){f=GO(b,c,d,f);f.bu=e;return f;}
function Gn(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function ACB(){var a=this;C.call(a);a.c4=null;a.h7=null;a.b5=null;a.cw=null;a.bH=0.0;a.en=null;a.dA=null;a.jB=null;a.nJ=null;}
function ADW(a){var b=new ACB();AEx(b,a);return b;}
function AEx(a,b){var c,d;a.b5=new Ba;a.dA=CH(R(DT,0));a.jB=new Ba;a.nJ=new Ba;a.c4=b.Y;c=b.bY;a.h7=c;a.cw=TD(c);c=b.s.jA;d=new LM;d.m2=a;Bb(c,d);b=b.s.iV;c=new LN;c.pK=a;Bb(b,c);}
function Ki(a,b,c){var d,e,f,g;a:{Dv(a.b5,b);d=a.bH;if(d!==c){a.bH=c;e=(Cl(a.dA)).data;f=e.length;g=0;while(true){if(g>=f)break a;e[g].fb(d,c);g=g+1|0;}}}}
function L$(a,b){var c;c=a.en;return c!==null&&c.gz(b)?1:0;}
function JY(a){var b;b=a.en;if(b!==null)b.rE();}
function I$(a){var b;b=a.en;if(b!==null)b.tV();}
function Ln(a,b){I$(a);a.en=b;JY(a);}
function PC(a,b){if(a.en===b)a.en=null;}
function K3(a){return a.c4.cx;}
function HW(a,b){return FH(a.c4,b.hY,Cc(b.ho,a.bH));}
function Cs(a,b){return Cc(b,a.bH);}
function TS(){var a=this;C.call(a);a.ki=null;a.cY=null;a.b7=null;a.bq=null;}
function ALU(a,b){return !PN(a.cY,b.k)&&!JJ(a.b7,b)?0:1;}
function APk(a,b,c,d){return !Pp(a.cY,b.k,c,d)&&!IJ(a.b7,b,c,d)?0:1;}
function AO4(a,b,c){return !Fz(a.cY)&&!I9(a.b7,b,c)?0:1;}
function AKp(a,b,c){return !Fz(a.cY)&&!DQ(a.b7)?0:1;}
function Ru(a,b,c,d){var e;e=Z7(a.cY,c,null,d);F2(a.cY);ON(a.cY,b,e,II(a,d));}
function II(a,b){var c;c=new Uq;c.nb=a;c.na=b;return c;}
function XF(b){var c;c=new Si;c.nP=b;return c;}
var Hq=F(0);
function AFm(a){}
function APr(a){}
function Y_(){var a=this;C.call(a);a.d4=null;a.S=null;a.gH=null;a.qB=0;a.k3=null;a.cD=null;a.A=0;a.z=0;a.gM=0;a.ko=0;a.fM=0;a.io=null;a.dX=null;a.cv=null;a.Z=0;a.e=null;a.d2=null;a.r=null;a.fh=null;a.d$=null;a.lz=null;a.f_=null;a.sW=0;a.q_=0;a.q5=0;a.cK=0;a.jD=0;a.kH=0;a.jX=null;a.eC=null;a.ey=null;a.bj=0;a.cm=0;a.gS=0;a.hB=0;a.hq=0;a.uO=0;a.ug=0;a.iN=0;a.kg=0;a.eE=null;a.cr=null;a.cM=null;a.hn=0;a.hm=0;a.et=null;a.e5=0;a.hN=null;a.hD=null;a.uv=null;a.gy=null;a.kj=0;a.qy=null;a.gZ=null;a.ew=Ee;a.fS=null;a.sp
=null;a.sQ=null;}
function ARk(a,b){var c=new Y_();AHQ(c,a,b);return c;}
function AHQ(a,b,c){var d,e,f;a.qB=0;a.k3=R(Bi,10);a.cD=AKm();a.fM=16;a.io=B(120);a.cv=R(Kj,4);d=new KQ;d.h=ALu();d.im=B(160);d.fH=null;a.e=d;d=new UY;d.mM=CH(R(Lr,0));d.rW=CH(R(Lr,0));d.sd=CH(R(LQ,0));d.n0=CH(R(Pa,0));d.lW=CH(R(H3,0));d.qD=CH(R(Qf,0));a.d2=d;a.r=AKQ();e=new Mz;e.ep=R(IE,16);e.er=0;e.c6=(-1);a.fh=e;a.f_=R(EG,0);a.q5=100;a.jD=1;a.jX=Cf(1,0);a.eC=G5();a.ey=G5();a.bj=0;a.cm=0;a.gS=0;a.hq=1;a.iN=1;a.kg=3;a.eE=AJz();a.cr=new Ba;a.cM=new Ba;a.et=B(224);a.e5=0;a.hN=null;a.hD=Ck();e=KR();BI(e);d=new TO;d.wL
=e;a.gy=d;a.qy=new B3;a.gZ=new Ba;e=new TN;e.qn=a;a.sp=e;e=new TJ;e.ne=a;a.sQ=e;a.d4=b;a.S=b.c4;a.gH=c;f=a.k3.data;b=new TI;b.so=a;f[0]=b;b=new TL;b.qK=a;f[1]=b;b=new TK;b.nB=a;f[2]=b;b=new Ud;b.sO=a;f[3]=b;ADi();a.hB=ATr===ATs?0:1;}
function AGb(a){a.ko=1;KP(a);}
function AEW(a){a.ko=0;}
function KP(a){Rg(a.cD,IO(Cg(a)));}
function Ko(a,b,c){if(a.d4.bH!==0.0){S1(a,b,c);FP(Cg(a));}a.fM=c;a.io=b;}
function S1(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=Cc(c,a.d4.bH);e=a.dX;f=e!==null?e.oa:0;if(!(d==f&&D_(b,a.io))){g=a.eE;Jh(g.cu,new Qv);G9(g.cu);g.ek=CK(g.ek,null);g.e1=CK(g.e1,null);h=a.f_.data;c=h.length;f=0;while(f<c){Pt(h[f]);f=f+1|0;}h=a.e.h.E.data;c=h.length;f=0;while(f<c){D5(h[f]);f=f+1|0;}h=a.cv.data;i=G1(0,0);e=a.S;j=d;h[i]=Fn(e,b,j,400,0);a.cv.data[G1(0,1)]=Fn(a.S,b,j,400,2);a.cv.data[G1(1,0)]=Fn(a.S,b,j,700,0);a.cv.data[G1(1,1)]=Fn(a.S,b,j,700,2);e=a.cv.data[G1(0,0)];a.dX=e;f=FE(e);a.Z=C7(f*1.25);a.cD.dy.g.b
=FE(a.dX);a.lz=CK(a.lz,CJ(a.S,1024,a.Z));e=a.gH.cY;k=a.S;g=a.dX;l=g.nA;if(26.0<l)l=26.0;RL(e,Fn(k,b,l,g.nN,g.o5));i=a.Z;m=Ry(a.cD);e=new M;O(e);b=G(G(e,B(225)),b);BB(b,32);S(G(S(G(S(G(S(b,d),B(226)),f),B(129)),i),B(227)),m);$rt_globals.console.info($rt_ustr(N(e)));if(ATt){c=Kp(a.dX,a.Z);b=new M;O(b);S(G(b,B(228)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.gM=GF(Fd(a),a.z,a.S.cx,a.cv);Gz(a);UL(a);}}
function T8(a){return Bd(CB(a.e.h)+5|0,a.Z);}
function EH(a){return V(T8(a)-a.cM.b|0,0);}
function F8(a){return V(a.gS-DH(a)|0,0);}
function DH(a){return a.cM.a-a.cK|0;}
function Dw(a){return a.cM.b;}
function ACs(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b=KW(a.cM.b,a.Z)+7|0;c=a.f_;if(c.data.length<b)a.f_=YZ(b,c,a.sW,a.q_,a.e.h);Cv(a.S,0);d=a.jX;d.b=a.cM.b;d.a=a.jD;e=a.S;f=a.cr;BJ(e,(f.a+a.cK|0)-a.kH|0,f.b,d,a.d$.r1);d=a.jX;b=a.kH;g=a.jD;d.a=b-g|0;e=a.S;f=a.cr;BJ(e,((f.a+a.cK|0)-b|0)+g|0,f.b,d,a.d$.iK);a.bj=X(a.bj,EH(a));a.cm=X(a.cm,F8(a));g=(a.Z-Ry(a.cD)|0)/2|0;h=(a.gM-(Pl(a.cD)/2|0)|0)-a.cm|0;OT(a.cD,a.cK+h|0,(g+Bd(a.A,a.Z)|0)-a.bj|0);i=CB(a.e.h);j=Kg(a);k=T5(a);a.sW=j;a.q_=k;l=j;while(l<=k&&l<i){m
=B0(a.e.h,l);n=PY(a,l);f=a.lz;o=a.cv;p=a.S;q=a.Z;r=DH(a);s=a.cm;d=n.bR;b=d===m&&!d.hy?0:1;if(b){n.bR=m;Kr(m,p.cx,o);}d=n.bR;g=d===null?0:EM(d)<r?KW(EM(n.bR),1024):KW(r,1024)+1|0;r=g<=n.dp?0:1;if(r)n.dp=g;if(!(!b&&!r)){if(ATu){c=m.e$;$rt_globals.console.info("fMeasure"+c.data);ATu=0;}AAO(f,ATt);AAX(n,f,p,o,q,s);n.bR.hy=0;}AAE(n,f,o,q,s);t=n.bR;a.gS=V(a.gS,EM(m)+(40.0*a.d4.bH|0)|0);r=Bd(a.Z,l)-a.bj|0;d=a.cr;AAK(n,d.b+r|0,d.a+a.cK|0,a.S,a.qy,a.gZ,!a.hB?0.0:0.5,DH(a),a.Z,a.cm,a.d$,ABJ(a,l,t),a.hN,a.hD);l=l+1|0;}q
=j;while(q<=k&&q<i&&a.iN){d=PY(a,q);r=Bd(a.Z,q)-a.bj|0;e=!Yt(a.r,q)?a.d$.lT:a.d$.kN;f=a.S;p=a.cr;AAu(d,f,p.a+a.cK|0,p.b+r|0,a.Z,a.gZ,a.cm,DH(a),e);q=q+1|0;}if(a.ko&&h>=(( -Pl(a.cD)|0)/2|0)){d=a.cD;e=a.cM;if(Nz(d.dy.u,0,0,e))Ua(a.cD,a.S,a.cr);}if(a.hq){s=X(k+1|0,i);Z6(a,Bd(a.Z,s)-a.bj|0);}Zl(a,j,k);AAD(a);ABk(a);}
function ABJ(a,b,c){var d,e,f,g;a:{d=a.r;e=DR(d);d=Fi(d);f=e.K;if(f<=b){g=BD(b,d.K);if(g<=0){d=Cf(b<=f?e.X:0,g>=0?d.X:(-1));break a;}}d=null;}if(d!==null){if(d.b==(-1))d.b=c.P;d.a=GF(c,d.a,a.S.cx,a.cv);d.b=GF(c,d.b,a.S.cx,a.cv);}return d;}
function Zl(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cM.b;e=X(d,Bd(CB(a.e.h),a.Z)-a.bj|0);f=a.eE;g=a.bj;h=a.A;i=a.S;j=a.d$.tK;Je(f,i,b,d);WJ(f,b);Tc(f,g,e,j,i);if(e<d){k=f.fC;BJ(i,k.a,k.b+e|0,Cf(f.eO.a,d-e|0),j.g6);}if(b<=h&&h<=c){c=h/20|0;k=f.cu;k=Bs(k,c%k.j|0);l=f.fC;c=Bd(f.cu.j,f.hU);b=k.ed.b;d=((k.ik.b-(g%c|0)|0)+c|0)%c|0;if((d+b|0)>c)d= -(g%C1(k.bV)|0)|0;b=h%k.du|0;e=k.ea;d=d+Bd(b,e)|0;if(d<( -e|0))d=d+c|0;Bc(k.f2,k.ed.a,e);m=k.ft;b=h%k.du|0;c=k.ea;CE(m,0.0,Bd(b,c),k.ed.a,c);Io(k,i,d,l,j.oV,j.o3);}}
function Kg(a){return X(a.bj/a.Z|0,CB(a.e.h)-1|0);}
function T5(a){return X(((a.bj+Dw(a)|0)-1|0)/a.Z|0,CB(a.e.h)-1|0);}
function UL(a){SA(a.eE,a.cv.data[0],a.Z,a.S);Je(a.eE,a.S,Kg(a),Dw(a));}
function PY(a,b){var c;c=a.f_.data;return c[b%c.length|0];}
function ACA(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dg(a.r))DE(a,a.et);else{b=DR(a.r);c=Fi(a.r);d=c.K;e=b.K;f=(d-e|0)+1|0;g=BG(f);h=g.data;i=R(Bv,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.et;e=e+1|0;k=f;}l=EF(a.A,a.z);m=new U1;m.rG=a;Os(a,g,0,0,i,l,m);b.X=b.X+I(a.et)|0;c.X=c.X+I(a.et)|0;K$(a,a.z+I(a.et)|0,0);DL(a);}return 1;}
function AAo(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dg(a.r)){b=B0(a.e.h,a.A);if(b.q.data.length>0){c=QL(a,b);if(c===null)return 1;d=a.e.h;e=a.A;f=EF(e,a.z);d.cq=d.cq+1|0;g=d.e6;h=R(GH,1);h.data[0]=ADm(e,0,1,c,f.bD,f.bL);BW(g,h);I0(d,e,0,1,c);FF(b,0,I(c));K$(a,a.z-I(c)|0,0);}}else{f=DR(a.r);c=Fi(a.r);i=c.K;j=f.K;i=(i-j|0)+1|0;k=BG(i);h=k.data;l=R(Bv,i);m=l.data;e=a.z;n=a.A;o=0;while(j<=c.K){b=B0(a.e.h,j);if(b.q.data.length>0){b=QL(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=ACq(k,o);h=Da(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.K)f.X=V(0,f.X-I(b)|0);if(j==c.K){c.X=V(0,c.X-I(b)|0);K$(a,a.z-I(b)|0,0);}i=i+1|0;}f=EF(n,e);b=new RC;b.tm=a;Os(a,p,0,1,h,f,b);}DL(a);return 1;}
function QL(a,b){var c,d,e,f;c=GW(0,I(a.et),Wd(b));if(!c)b=null;else{b=B(56);if(c<0){b=new BA;U(b);J(b);}if(c!=1){d=b.bT.data.length;if(d&&c){e=BL(Bd(d,c));d=0;f=0;while(f<c){OK(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=Ls(e);}else b=ASa;}}return b;}
function Os(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BG(i);k=ARH(i).data;G_(j,c);c=0;l=k.length;if(c>l){f=new BA;U(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.h;o.cq=o.cq+1|0;p=R(GH,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ADm(h[m],n[m],k[m],b[m],f.bD,f.bL);m=m+1|0;}BW(o.e6,p);c=0;while(c<i){b=e.data;I0(o,h[c],n[c],k[c],b[c]);g.lx(FL(h[c]),b[c]);c=c+1|0;}}
function ABW(a){var b,c,d,e,f,g,h,i;if(Dg(a.r))Gq(a);D5(B0(a.e.h,a.A));b=a.e.h;c=a.A;d=a.z;e=b.E;f=e.data;g=f[c];e=Da(e,f.length+1|0);f=e.data;b.E=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DC(R(B4,0));b.E.data[c+1|0]=g;}else if(d==g.P){f[c]=g;f[c+1|0]=DC(R(B4,0));}else{f=(H6(g,d)).data;e=b.E.data;e[c]=f[0];e[c+1|0]=f[1];}Gj(b,c,d,0,B(229));DL(a);return CA(a,a.A+1|0,0,0);}
function ABD(a){if(Dg(a.r))Gq(a);else Oh(a.e.h,a.A,a.z);Gz(a);DL(a);return 1;}
function Xi(a){var b,c,d;if(Dg(a.r)){Gq(a);return 1;}b=a.z;if(!b&&!a.A)return 1;if(b){c=a.A;b=b-1|0;Oh(a.e.h,c,b);}else{c=a.A-1|0;b=E7(a.e.h,c);d=a.e.h;Kf(d,c);Gj(d,c,E7(d,c),1,B(229));}DL(a);return CA(a,c,b,0);}
function DE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.e5)return 0;if(Dg(a.r))Gq(a);c=K7(Ue(b,B(230),B(31)),B(229),(-1));d=c.data;b=a.e.h;e=a.A;f=a.z;WR(b,e,f,c);g=d.length;if(!g)h=ASa;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BL(i+Bd(g-1|0,I(B(229)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(229))){m=l+1|0;c[l]=L(B(229),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Ls(k);}Gj(b,e,f,0,h);e=a.A;m=(e+g|0)-1|
0;CA(a,m,m!=e?I(d[g-1|0]):a.z+I(d[0])|0,0);EU(a);DL(a);return 1;}
function Gq(a){var b,c,d;b=DR(a.r);c=a.e.h;d=a.r;Sn(c,d,U9(c,d));CA(a,b.K,b.X,0);EU(a);DL(a);}
function EU(a){var b;b=a.r;b.cS=0;BZ(b.bM,a.A,a.z);BZ(a.r.bB,a.A,a.z);}
function Pi(a){return a.dX.ld|0;}
function Z6(a,b){var c,d,e;c=a.cM.b;if(b<c){d=a.gZ;d.b=c-b|0;d.a=DH(a);d=a.S;e=a.cr;BJ(d,e.a+a.cK|0,e.b+b|0,a.gZ,a.d$.iK);}}
function AAD(a){HZ(a.eC,a.bj,a.cr.b,Dw(a),T8(a),a.cr.a+a.cM.a|0,Pi(a));LC(a.ey,a.cm,a.cr.a+a.cK|0,DH(a),a.gS,a.cr.b+Dw(a)|0,Pi(a));}
function ABk(a){var b,c;b=OR(a.eC);c=OR(a.ey);if(!(!b&&!c)){Cv(a.S,1);if(b)FI(a.eC,a.S);if(c)FI(a.ey,a.S);if(b)F0(a.eC,a.S);if(c)F0(a.ey,a.S);}}
function D2(a,b,c){return X(V(0,b),c);}
function Hk(a,b){var c,d,e,f,g;b=b.data;a.hn=1;a.hm=1;c=Ek(b[0]);d=Fu(b[1]);e=(Ek(b[2])).data[0];a.e.h=Z_(c,d);Vh(a,ABG(e));Gf(Cg(a),ATv);FP(Cg(a));f=JF(Fq(),a.ew);g=new M;O(g);G(Ht(G(g,B(231)),f),B(232));$rt_globals.console.info($rt_ustr(N(g)));}
function Vh(a,b){var c,d;c=Dd(a.e);if(!D_(c,b)){d=new M;O(d);G(G(G(G(d,B(233)),c),B(234)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.im=b;}}
function Cg(a){return a.d4.h7;}
function QK(a,b){var c,d,e,f,g;c=EQ(b);d=new M;O(d);G(G(d,B(235)),c);$rt_globals.console.info($rt_ustr(N(d)));ME(Cg(a),EQ(b));CA(a,0,0,0);a.ew=Fq();a.hn=0;a.hm=0;a.e.h=ALu();CA(a,0,0,0);c=EQ(b);e=FM(c,46,I(c)-1|0);if(e!=(-1))c=Dr(c,e);f=!Bt(c,B(236))?5120:10240;c=new Wb;c.qV=a;c.qW=f;c.qX=b;d=b.eJ;if(d!==null)Li(c,IX(b,d.size));else{d=b.gm.getFile();g=new Ss;g.lD=b;g.lE=c;b=new Sv;b.ti=c;d.then(Bl(g,"f"),Bl(b,"f"));}}
function Hd(a,b,c,d,e){if(G7(a,e))return 1;if(c&&d)return 1;if(c)a.bj=D2(a,a.bj+((Bd(b,a.Z)*12|0)/10|0)|0,EH(a));else if(!d){H9(a,a.A+b|0,e);Sj(a);}return 1;}
function Td(a,b,c,d){var e,f,g;if(G7(a,d))return 1;e=Fd(a);if(!c)f=a.z+b|0;else if(b>=0)f=GA(e,a.z);else{f=a.z;if(!f)f=(-1);else{c=HU(e,f);if(c>0&&e.dd.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.dd.data[c-1|0];}}if(f>e.P){if((a.A+1|0)<CB(a.e.h))CA(a,a.A+1|0,0,d);}else if(f>=0)Dh(a,f,d);else{b=a.A;if(b>0){g=(B0(a.e.h,b-1|0)).P;CA(a,a.A-1|0,g,d);}}OE(a);return 1;}
function G7(a,b){if(Dg(a.r)&&!b){EU(a);Gz(a);return 1;}if(!(b&&Dg(a.r)))EU(a);return 0;}
function CA(a,b,c,d){a.z=c;return H9(a,b,d);}
function H9(a,b,c){a.A=GW(0,b,CB(a.e.h)-1|0);return Dh(a,a.z,c);}
function Dh(a,b,c){a.z=GW(0,b,(Fd(a)).P);a.gM=a.d4.bH===0.0?0:GF(Fd(a),a.z,a.S.cx,a.cv);KP(a);Gz(a);if(c)a.r.cS=1;JS(a.r,a.A,a.z);a.r.cS=0;return 1;}
function K$(a,b,c){var d;d=Qu(a.r);Dh(a,b,c);a.r=d;}
function Gz(a){Sj(a);OE(a);}
function Sj(a){var b,c,d,e,f;b=a.bj;c=b+Dw(a)|0;d=a.A;e=a.Z;d=Bd(d,e);f=d+e|0;if(d<(b+e|0))a.bj=D2(a,d-e|0,EH(a));else if(f>(c-e|0))a.bj=D2(a,(f-Dw(a)|0)+a.Z|0,EH(a));}
function OE(a){var b,c,d,e,f;b=C7(a.d4.bH*30.0);c=a.cm;d=c+DH(a)|0;e=a.gM;f=e+b|0;if(e<(c+b|0))a.cm=D2(a,e-b|0,F8(a));else if(f>(d-b|0))a.cm=D2(a,(f-DH(a)|0)+b|0,F8(a));}
function Sr(a,b,c){var d,e,f,g,h,i,j,k,l;Ub(a);d=a.e.h;e=Ej(d.dS,c);if(e!==null)a.hN=Pg(d,e);if(e!==null)c=e;a:{f=Ej(d.ec,c);if(f!==null){c=BR(f);while(true){if(!B1(c))break a;g=BV(c);BW(a.hD,Pg(d,g));}}}h=b.bD;i=b.bL;b=a.d2;c=Dd(a.e);d=GE(a.e);j=(Cl(b.n0)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.sZ(c,d)){c=b.wd;break b;}l=l+1|0;}c=null;}if(c!==null){d=a.e;b=new Sq;b.vX=a;b.vY=d;b.vV=h;b.vW=i;c.rq(d,h,i,b,a.gy);}}
function He(a,b){var c;CA(a,b.bD,b.bL,0);c=GA(Fd(a),a.z);BZ(a.r.bB,a.A,c);BZ(a.r.bM,a.A,a.z);}
function Fo(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.cr;e=c-d.a|0;f=GW(0,((b.b-d.b|0)+a.bj|0)/a.Z|0,CB(a.e.h)-1|0);g=V(0,(e-a.cK|0)+a.cm|0);b=B0(a.e.h,f);d=a.S.cx;h=a.cv;if(!(b.dV!==null&&!b.fv))Kr(b,d,h);i=b.dV;e=b.q.data.length;if(!e)j=0;else if(g<=0)j=0;else{k=i.data;if(g>=k[e-1|0])j=b.P;else{l=S0(i,0,e,g);if(l<0)l=( -l|0)-1|0;if(l==b.q.data.length)j=b.P;else{i=VM(b,d,h,l);j=0;c=0;while(c<l){j=j+I(b.q.data[c].w)|0;c=c+1|0;}c=!l?0:k[l-1|0];e=k[l];l=0;a:{while(true){h=i.data;if(l>=h.length){m=e;break a;}m
=h[l];if(g<m)break;j=j+1|0;l=l+1|0;e=m;c=m;}}if(ATw){b=new M;O(b);S(G(S(G(S(G(b,B(237)),c),B(238)),g),B(239)),m);$rt_globals.console.info($rt_ustr(N(b)));n=j;$rt_globals.console.info(" pos = "+n);}if((g-c|0)>(m-g|0))j=j+1|0;}}}return EF(f,j);}
function Sg(a,b){var c;c=b.bD;a.A=c;a.z=b.bL;a.gM=GF(B0(a.e.h,c),a.z,a.S.cx,a.cv);KP(a);}
function Fd(a){return B0(a.e.h,a.A);}
function ALC(a,b,c){a.r.cS=0;if(a.fS!==null)a.fS=null;return 1;}
function ANL(a,b,c){var d,e,f,g,h,i,j;if(!c){d=E2(a.eC,b.k,a.sp,1);a.fS=d;if(d!==null)return 1;d=E2(a.ey,b.k,a.sQ,0);a.fS=d;if(d!==null)return 1;a:{Ii(a);d=b.k;e=Fo(a,d);f=OO(a.e.h,e.bD,e.bL);if(b.cn){g=J2(a.d2,Dd(a.e),GE(a.e));if(g!==null){h=a.e;c=e.bD;i=e.bL;j=new T4;j.uK=a;j.uJ=d;g.rq(h,c,i,j,a.gy);}else{g=Ej(a.e.h.dS,f);if(g!==null){He(a,g);c=1;}else{g=Ej(a.e.h.ec,f);if(g!==null&&!D3(g)){if(g.j!=1){Ru(a.gH,d,g,a);c=1;}else{He(a,Bs(g,0));c=1;}}else c=0;}if(c)break a;}}Sg(a,e);Sr(a,e,f);if(!b.bz){b=a.r;if
(!b.cS)BZ(b.bM,a.A,a.z);}b=a.r;b.cS=1;JS(b,a.A,a.z);b=new T2;b.qf=a;a.fS=b;}}return 1;}
function AHj(a,b,c,d){var e,f,g;if(!c&&d==3){O9(a.r,a.A);Wm(a.fh);Ii(a);return 1;}if(!c&&d==2){a:{c=(Fo(a,b.k)).bD;e=B0(a.e.h,c);c=GD(e,a.z);d=GA(e,a.z);b=TV(e,c);if((d-1|0)==e.P){BZ(a.r.bM,a.A,Wd(e));BZ(a.r.bB,a.A,e.P);}else{if(b!==null){b=b.w;f=0;b:{while(true){g=b.bT.data;if(f>=g.length)break;if(g[f]!=32){f=0;break b;}f=f+1|0;}f=1;}if(f){f=a.z;if(c==f){c=GD(e,c-1|0);d=GA(e,c);}else{if(d!=f){O9(a.r,a.A);break a;}c=GD(e,d+1|0);d=GA(e,c);}}}BZ(a.r.bM,a.A,c);a.r.cS=1;CA(a,a.A,d,0);a.r.cS=0;}}Ii(a);return 1;}return 1;}
function AFK(a,b){var c,d,e,f,g,h,i,j;c=a.fS;if(c!==null){c.m(b);return 1;}c=a.d4.cw;if(Fa(a.eC,b.k,c))return 1;if(Fa(a.ey,b.k,c))return 1;d=a.eE;if(Ha(b.k,d.fC,d.eO)&&GX(c)?1:0)return 1;a:{d=b.k;e=a.cr;f=e.a+a.cK|0;g=e.b;h=DH(a);i=Dw(a);j=d.a;if(j>=f&&j<(f+h|0)){f=d.b;if(f>=g&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return GX(c);if(b.cn){d=Fo(a,b.k);Wx(a.e.h,d);b=a.e.h;if(!MU(b.dS,d)&&!MU(b.ec,d)?0:1)return Ds(c,B(159));}return Ds(c,B(160));}
function AKC(a,b){var c,d,e,f;c=b.cn;if(c&&b.bk==65){c=CB(a.e.h)-1|0;d=E7(a.e.h,c);BZ(a.r.bM,0,0);BZ(a.r.bB,CB(a.e.h)-1|0,d);return 1;}if(c&&b.bk==80){Jk(a);return 1;}if(!a.e5&&c&&b.bk==90){if(Dg(a.r))EU(a);b=a.e.h;b.cq=b.cq+1|0;e=b.e6;d=e.j;if(!d)e=null;else{f=(Ed(e,d-1|0)).data;e=Sf(b,f[0]);c=1;while(c<f.length){Sf(b,f[c]);c=c+1|0;}}if(e!==null){CA(a,e.a,e.b,0);DL(a);}return 1;}if(!c&&!b.c9){if(Bt(b.dr,B(240))){DE(a,B(241));Dh(a,a.z-1|0,0);c=1;}else if(Bt(b.dr,B(242))){DE(a,B(243));Dh(a,a.z-1|0,0);c=1;}else if
(Bt(b.dr,B(42))){DE(a,B(244));Dh(a,a.z-1|0,0);c=1;}else if(Bt(b.dr,B(245))){DE(a,B(246));Dh(a,a.z-1|0,0);c=1;}else if(Bt(b.dr,B(247))){DE(a,B(248));Dh(a,a.z-1|0,0);c=1;}else if(!Bt(b.dr,B(249)))c=0;else{DE(a,B(250));Dh(a,a.z-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.c9&&!b.cn)){d=b.bk;if(d>=48&&d<=57){c=d-48|0;e=a.k3.data[c];if(e!==null)e.t();c=1;break a;}}c=0;}if(c)return 1;d=b.bk;if(112<=d&&d<=123)c=1;else b:{switch(d){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(Zm(a,b))return 1;if(a.e5)c=0;else c:{switch(b.bk){case 8:break;case 9:c=!b.bz?ACA(a):AAo(a);break c;case 13:c=ABW(a);break c;case 46:c=ABD(a);break c;default:c=0;break c;}c=Xi(a);}if(c)return 1;if(b.cn&&b.bk==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(b.bk==27)return 0;return I(b.dr)>0&&DE(a,b.dr)?1:0;}
function VK(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bt(B(132),Dd(a.e))){b=Cg(a);c=new Mm;c.pj=a;d=R(C,3);e=d.data;e[0]=F6(a.e.h);f=Kg(a);g=T5(a);h=V(0,f-100|0);f=X(CB(a.e.h)-1|0,g+100|0);i=BG(3);j=i.data;j[0]=FV(a.e.h,h);k=a.e.h;l=0;f=X(f+1|0,k.E.data.length);m=0;while(m<f){l=l+E7(k,m)|0;if(m!=(k.E.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.h.c0;k=Ck();Vu(n,n.cH,k);i=BG(3*k.j|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bs(k,m);h=p+1|0;o[p]=q.bI;l=h+1|0;o[h]=q.bO;p=l+1|0;o[l]=q.e0;m=m+1|0;}e[2]
=i;CZ(b,c,B(251),d);}}
function Jk(a){var b,c,d,e;b=ZP(Dd(a.e));if(b!==null){a.ew=Fq();c=Cg(a);d=new VY;d.pv=a;e=R(C,1);e.data[0]=F6(a.e.h);CZ(c,d,b,e);}}
function RB(a){var b,c,d,e,f,g,h;b=a.e.h.c0;c=Oj(b,b.cH);if(c===null)return;if(Bt(B(160),Dd(a.e)))Ot(a.e.h);a:{d=ES([CV(c),C2(c),c.b3.e0]);e=F6(a.e.h);f=BG(1);g=Dd(a.e);h=(-1);switch(Ku(g)){case 3401:if(!Bt(g,B(252)))break a;h=3;break a;case 98723:if(!Bt(g,B(253)))break a;h=2;break a;case 3254818:if(!Bt(g,B(132)))break a;h=1;break a;case 3556653:if(!Bt(g,B(160)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Cg(a);c=new SF;c.oU=a;CZ(b,c,B(254),H(C,[e,f,d]));}
function Kl(a,b,c){var d,e,f,g,h,i;if(c&&a.e5)return 0;d=DR(a.r);e=d.K;if(Dg(a.r)){f=a.e.h;g=a.r;h=U9(f,g);if(c)Sn(f,g,h);if(c){CA(a,d.K,d.X,0);EU(a);DL(a);}}else{h=EZ(Ex(a.e.h.E.data[e]),B(229));i=X(CB(a.e.h)-1|0,e);BZ(a.r.bB,i,0);if(e>=(CB(a.e.h)-1|0))BZ(a.r.bB,i,E7(a.e.h,i));else BZ(a.r.bM,i+1|0,0);if(c)Gq(a);else CA(a,e,0,0);}b.m(h);return 1;}
function Zm(a,b){var c,d,e,f;a:{switch(b.bk){case 33:c=b.cn?H9(a,KW(a.bj,a.Z),b.bz):Hd(a,2-Vj(Dw(a),a.Z)|0,0,b.c9,b.bz);break a;case 34:c=!b.cn?Hd(a,Vj(Dw(a),a.Z)-2|0,0,b.c9,b.bz):H9(a,((a.bj+Dw(a)|0)/a.Z|0)-1|0,b.bz);break a;case 35:if(!G7(a,b.bz)&&!Dh(a,(Fd(a)).P,b.bz)){c=0;break a;}c=1;break a;case 36:if(!G7(a,b.bz)&&!Dh(a,0,b.bz)){c=0;break a;}c=1;break a;case 37:c=b.cn;if(c&&b.c9){Ii(a);d=a.fh;e=d.c6;if(e<=0)d=null;else{f=d.ep.data;c=e-1|0;d.c6=c;d=f[c];}if(d===null)c=0;else{CA(a,Ip(d),KV(d),0);a.r=Qu(d.li);c
=1;}break a;}c=Td(a,(-1),c,b.bz);break a;case 38:c=Hd(a,(-1),b.cn,b.c9,b.bz);break a;case 39:c=b.cn;if(c&&b.c9){d=a.fh;c=d.c6;if(c==(d.er-1|0))d=null;else{f=d.ep.data;c=c+1|0;d.c6=c;d=f[c];}if(d===null)c=0;else{CA(a,Ip(d),KV(d),0);a.r=Qu(d.li);c=1;}break a;}c=Td(a,1,c,b.bz);break a;case 40:c=Hd(a,1,b.cn,b.c9,b.bz);break a;default:}c=0;}if(c&&b.bz)BZ(a.r.bB,a.A,a.z);if(c)Sr(a,EF(a.A,a.z),OO(a.e.h,a.A,a.z));return c;}
function Ii(a){var b,c,d,e,f,g,h;b=a.fh;c=b.c6;b=c<0?null:b.ep.data[c];if(b!==null&&a.A==Ip(b)&&a.z==KV(b))return;d=a.fh;b=new IE;c=a.A;e=a.z;f=a.r;b.kC=EF(c,e);g=Qu(f);b.li=g;g.cS=0;e=d.c6;h=d.er;if(e==(h-1|0))L4(d,b);else{c=e+1|0;while(c<h){Wm(d);c=c+1|0;}L4(d,b);}d.c6=d.c6+1|0;}
function DL(a){a.e.h.oJ=IO(Cg(a));}
function Ub(a){a.hN=null;G9(a.hD);}
function ZP(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(Ku(b)){case 3401:if(!Bt(b,B(252)))break a;c=2;break a;case 98723:if(!Bt(b,B(253)))break a;c=1;break a;case 3254818:if(!Bt(b,B(132)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(255);break b;case 2:b=B(256);break b;default:b=null;break b;}b=B(257);}}return b;}
var QX=F();
function AJN(a,b){return ACi(b);}
function Q1(){C.call(this);this.te=null;}
function AHi(a,b){return ACp(a.te,b);}
function Jl(){var a=this;C.call(a);a.jn=null;a.n6=null;a.lJ=null;}
function ATx(a,b,c){var d=new Jl();Ux(d,a,b,c);return d;}
function Ux(a,b,c,d){a.jn=b.bY;a.n6=c;a.lJ=d;}
function AMv(a,b){var c,d;if(b.cn&&b.bk==79){c=a.n6;if(c!==null&&b.bz)U5(a.jn,c);else K1(a.jn,a.lJ);d=1;}else d=0;return d;}
function Q0(){C.call(this);this.lH=null;}
function ADP(a,b){QK(a.lH,b);}
function QZ(){C.call(this);this.oI=null;}
function APm(a,b){return L$(a.oI,b);}
function QY(){C.call(this);this.tW=null;}
function AK5(a,b,c){return Kl(a.tW,b,c);}
function Q4(){C.call(this);this.mG=null;}
function AOW(a){var b,c;b=a.mG.cL;BI(b);c=new MI;c.tP=b;return c;}
function Q3(){C.call(this);this.rI=null;}
function AI2(a,b,c,d){var e,f;b=a.rI.cL;e=C7((b.Z*4|0)*d/150.0);f=C7(c);b.bj=D2(b,b.bj+e|0,EH(b));b.cm=D2(b,b.cm+f|0,F8(b));return 1;}
function Q2(){C.call(this);this.sA=null;}
function AL6(a,b){b=b;return XV(a.sA,b);}
function B3(){var a=this;C.call(a);a.bf=0.0;a.bt=0.0;a.bl=0.0;a.bu=0.0;}
function ARs(a){var b=new B3();AAy(b,a);return b;}
function CE(a,b,c,d,e){a.bf=b;a.bt=c;a.bl=d;a.bu=e;}
function AAy(a,b){a.bf=b.bf;a.bt=b.bt;a.bl=b.bl;a.bu=b.bu;}
function Bh(a,b){a.bf=b.bf;a.bt=b.bt;a.bl=b.bl;a.bu=b.bu;return a;}
function AOZ(a,b){var c;if(a===b)return 1;a:{if(b!==null&&Cz(a)===Cz(b)){b=b;if(b.bf===a.bf&&b.bt===a.bt&&b.bl===a.bl&&b.bu===a.bu?1:0){c=1;break a;}}c=0;}return c;}
var Cy=F(0);
var AS7=null;var ATd=null;var AS3=null;var AS4=null;var AS8=null;var AS9=null;var AS$=null;var ATc=null;var ATj=null;var ATe=null;var ATf=null;var AS_=null;var ATg=null;var ATa=null;var ATh=null;function Dm(){Dm=Bo(Cy);AKI();}
function AKI(){AS7=CG(187);ATd=CG(0);AS3=CG(43);AS4=Bq(B(258));AS8=CG(85);AS9=Cw(60,63,65);AS$=Cw(33,66,131);ATc=Cw(255,255,255);ATj=Cw(0,0,0);ATe=Cw(212,212,212);ATf=Cw(166,214,255);AS_=Bq(B(259));ATg=Bq(B(260));ATa=Bq(B(261));ATh=Bq(B(260));}
function H4(){var a=this;C.call(a);a.u=null;a.g=null;a.N=null;a.U=null;}
function J3(){var a=new H4();Q7(a);return a;}
function Rz(a,b,c,d){var e=new H4();AF2(e,a,b,c,d);return e;}
function Q7(a){a.u=new Ba;a.g=new Ba;a.N=new B3;a.U=new B3;}
function AF2(a,b,c,d,e){a.u=new Ba;a.g=new Ba;a.N=new B3;a.U=new B3;F1(a,b,c,d,e);}
function F1(a,b,c,d,e){Bc(a.u,b,c);Bc(a.g,d,e);}
function RS(a){Bc(a.g,0,0);}
function Ib(a){var b;b=a.g;return Bd(b.a,b.b)?0:1;}
function DU(a,b){return Ha(b,a.u,a.g);}
function Gv(a,b,c,d){var e;e=a.u;BJ(b,e.a+c|0,e.b+d|0,a.g,a.N);}
function S$(a,b,c,d,e,f){var g,h,i,j;g=a.u;d=g.a+d|0;e=g.b+e|0;g=a.g;h=a.U;i=a.N;Kn(b,b.g4);Lm(b.g4,b.bA,d,e,g,b.dt);Tm(b.g4,b.bA,c);g=b.g4;j=b.bA;HM(j,g.tE,h);HM(j,g.tC,i);c=g.pc;j.uniform2f(c,f,0.0);J_(b);}
function ABx(){H4.call(this);this.bP=null;}
function J9(){var a=new ABx();AEa(a);return a;}
function E1(a,b,c,d){var e=new ABx();AJj(e,a,b,c,d);return e;}
function AEa(a){Q7(a);a.bP=new B3;}
function AJj(a,b,c,d,e){Q7(a);a.bP=new B3;F1(a,b,c,d,e);}
function GI(a){var b,c;b=a.g;c=a.bP;Bc(b,c.bl-c.bf|0,c.bu-c.bt|0);}
function F7(a,b){Hi(a,0,0,B_(b),C1(b));}
function Hi(a,b,c,d,e){CE(a.bP,b,c,d,e);}
function CL(a,b,c,d,e,f){var g;g=a.u;Hy(b,g.a+d|0,g.b+e|0,a.g,a.bP,c,a.N,a.U,f);}
function FY(a,b){Bh(a.N,b);}
function If(a,b,c){Bh(a.N,b);Bh(a.U,c);}
function Hf(a,b){Bh(a.U,b);}
function Zt(){var a=this;C.call(a);a.dy=null;a.kx=0.0;a.gv=0.0;a.gb=0;}
function AKm(){var a=new Zt();AOG(a);return a;}
function AOG(a){var b;b=Rz(0,0,2,20);a.dy=b;a.kx=0.5;a.gv=0.0;Hg(187,187,187,255,b.N);}
function Ry(a){return a.dy.g.b;}
function Pl(a){return a.dy.g.a;}
function RN(a,b){var c,d;a:{c=a.gb;if(b>a.gv)while(true){d=a.gv+a.kx;a.gv=d;a.gb=a.gb?0:1;if(b>d)continue;else break a;}}return a.gb==c?0:1;}
function OT(a,b,c){Bc(a.dy.u,b,c);}
function Rg(a,b){a.gv=b+a.kx*1.25;a.gb=1;}
function Ua(a,b,c){if(a.gb)Gv(a.dy,b,c.a,c.b);}
function SO(){C.call(this);this.eV=null;}
function ALs(a,b){var c,d,e,f,g,h,i;c=a.eV;d=c.jb;if(d!==null){e=c.c5.u;f=e.a;g=b.k;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.jb=g;}d=b.k;f=d.a;c=c.f$;e=c.g;h=f-e.a|0;f=d.b-e.b|0;Bc(c.u,h,f);c=a.eV;d=c.bh.bY;b=b.k;f=0;a:{while(true){i=c.gF.data;if(f>=i.length)break;if(DU(i[f],b)){b=c.t8.data[f];break a;}f=f+1|0;}b=null;}Gf(d,b);return 1;}
function AMW(a,b,c,d){if(!c&&d==2){b=a.eV;VP(b,b.c5);}return 1;}
function AJs(a,b,c){var d,e;d=Bx();e=new M;O(e);S(G(e,B(262)),c);Bu(d,N(e));if(!c){d=b.k;b=a.eV;b.jb=!DU(b.c5,d)?null:d;OT(a.eV.gT,d.a,d.b);b=a.eV;Rg(b.gT,IO(b.bh.bY));}return 1;}
function AFT(a,b,c){var d;b=Bx();d=new M;O(d);S(G(d,B(263)),c);Bu(b,N(d));return 1;}
function Qz(){C.call(this);this.tY=null;}
function ALm(a,b){return N2(a.tY,b);}
function Qy(){C.call(this);this.nY=null;}
function ANV(a,b){return N2(a.nY,b);}
function QC(){C.call(this);this.v0=null;}
function AOh(a,b,c){var d,e;Bu(Bx(),B(264));d=!c?B(265):B(28);e=new M;O(e);G(G(G(e,B(266)),d),B(267));Vi(b,N(e));return 1;}
function QA(){C.call(this);this.uj=null;}
function AOg(a){Bu(Bx(),B(268));}
function Qx(){C.call(this);this.vo=null;}
function AJS(a,b){Bu(Bx(),B(269));return 1;}
function Qw(){C.call(this);this.sl=null;}
function AHF(a,b,c,d){var e,f,g;b=a.sl;e=( -d|0)/10|0;b=b.c5;f=b.g;f.a=f.a+e|0;f.b=f.b+e|0;b=b.u;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function Ie(){var a=this;B3.call(a);a.fV=0;a.fY=0;a.fW=0;a.fX=0;}
function CG(a){var b=new Ie();AOP(b,a);return b;}
function Cw(a,b,c){var d=new Ie();AFM(d,a,b,c);return d;}
function Bq(a){var b=new Ie();AMU(b,a);return b;}
function ATy(a,b,c,d){var e=new Ie();PA(e,a,b,c,d);return e;}
function CU(a){var b=new Ie();NL(b,a);return b;}
function AOP(a,b){PA(a,b,b,b,255);}
function AFM(a,b,c,d){PA(a,b,c,d,255);}
function AMU(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.fV=Ij(L(b,1))*17|0;a.fY=Ij(L(b,2))*17|0;a.fW=Ij(L(b,3))*17|0;a.fX=255;}else{a.fV=KJ(L(b,1),L(b,2));a.fY=KJ(L(b,3),L(b,4));a.fW=KJ(L(b,5),L(b,6));a.fX=I(b)!=9?255:KJ(L(b,7),L(b,8));}Hg(a.fV,a.fY,a.fW,a.fX,a);return;}}
function PA(a,b,c,d,e){a.fV=b;a.fY=c;a.fW=d;a.fX=e;Hg(b,c,d,e,a);}
function NL(a,b){a.fV=b.fV;a.fY=b.fY;a.fW=b.fW;a.fX=b.fX;Bh(a,b);}
function Ij(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function KJ(b,c){return (16*Ij(b)|0)+Ij(c)|0;}
function T1(){var a=this;C.call(a);a.k_=null;a.jy=null;}
function Yl(){var a=this;C.call(a);a.eZ=null;a.ca=null;a.dY=null;a.f0=null;a.kK=null;a.b0=null;a.fp=null;a.cG=0;a.ev=0;a.k2=0;a.fy=0;a.fr=0;a.iM=null;a.ja=null;a.r_=null;}
function XS(){var a=new Yl();AOi(a);return a;}
function AOi(a){a.ca=J3();a.dY=new Ba;a.f0=new Ba;a.b0=ATz;a.fy=(-1);}
function J5(a,b){SB(a);a.b0=b;}
function HA(a,b){a.eZ=b;SB(a);}
function HI(a,b){var c,d,e,f;a.kK=b.g3;c=b.bb.fs;Bh(a.ca.N,c);c=b.iA;Bh(a.ca.U,c);d=0;while(true){e=a.b0.data;if(d>=e.length)break;f=e[d];c=b.bb;f.iS=c;If(f.db,c.iW,c.fs);if(a.fy==d)IQ(a.b0.data[d],1);d=d+1|0;}}
function Sm(a){a.fp=CK(a.fp,null);Bc(a.dY,0,0);a.b0=ATz;a.fy=(-1);RS(a.ca);}
function GC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=K3(b);d=b.bH;BI(a.eZ);CC(c,a.eZ);e=Ji(a.eZ,1.25);f=0;a.cG=Cc(2.0,d);a.ev=Cc(3.0,d);a.k2=Cc(12.0,d);g=0;h=a.b0.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=PM(c,l.jR);n=a.k2;n=(n+m|0)+n|0;f=V(f,n);b=l.db;l=b.u;l.a=g;l.b=0;l=b.g;l.a=n;l.b=e;CE(b.bP,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.dY;b.a=g;b.b=e;b=a.ca.g;n=a.fr;if(!n){m=a.cG;m=(g+m|0)+Bd(m,a.b0.data.length)|0;}else m=(f+(a.cG*2|0)|0)+(a.ev*2|0)|0;b.a=m;if(!n)e=e+(a.cG*2|0)|0;else{n=a.cG;e=(Bd(e+n|0,a.b0.data.length)
+n|0)+(a.ev*2|0)|0;}b.b=e;}
function Jb(a,b,c){var d,e,f,g,h,i,j;Bc(a.ca.u,b,c);d=a.cG+a.ev|0;e=a.b0.data;f=e.length;g=0;h=d;while(g<f){i=e[g].db;j=i.u;j.a=b+d|0;j.b=c+h|0;if(!a.fr){if(!i.g.a)ACz();d=d+(i.g.a+a.cG|0)|0;}else{if(!i.g.b)ACz();h=h+(i.g.b+a.cG|0)|0;}g=g+1|0;}}
function ACz(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function D0(a){var b,c;b=a.dY;if(b.a&&b.b)return a.ca.g;c=new Bm;Bj(c,B(270));J(c);}
function SB(a){Bc(a.dY,0,0);}
function IY(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=b.c4;if(!a.b0.data.length)return;a:{if(a.fp!==null){d=a.dY;if(Bd(d.a,d.b))break a;}d=a.dY;if(!Bd(d.a,d.b))GC(a,b);d=a.dY;e=d.a;f=d.b;if(!Bd(e,f))return;d=CJ(c,e,f);CC(d,a.eZ);g=Ji(a.eZ,0.125);h=a.eZ;i=h.dg;g=g+i-(i+h.dZ)/16.0;j=a.b0.data;f=j.length;k=0;while(k<f){l=j[k];Ce(d,l.jR,l.db.bP.bf+a.k2,g);k=k+1|0;}h=CK(a.fp,CS(c));a.fp=h;CM(h,d);FB(d);}if(!Ib(a.ca)){d=a.ca;U7(c,d.g,d.u,d.U,a.cG,a.f0);d=a.ca;Yn(c,d.g,d.u,d.N,a.cG,a.f0);if(a.fr){d=a.ca;TZ(c,d.g,d.u,0,0,JI(a.kK,
b.bH),a.kK.iU,a.f0);}}j=a.b0.data;k=j.length;m=0;while(m<k){CL(j[m].db,c,a.fp,0,0,0.0);m=m+1|0;}b:{if(a.fr){j=a.b0.data;k=j.length;m=0;while(true){if(m>=k)break b;h=j[m].db;l=a.f0;e=(a.ca.g.a-(a.cG*2|0)|0)-(a.ev*2|0)|0;b=h.g;e=e-b.a|0;l.a=e;l.b=b.b;if(e>0){d=h.u;BJ(c,d.a+b.a|0,d.b,l,h.U);}m=m+1|0;}}}}
function Jw(a,b,c){var d,e,f,g,h,i;d=DU(a.ca,b);e=!d?(-1):T7(a,b);f=a.fy;if(f!=e){if(f>=0){g=a.b0.data[f];IQ(g,0);if(a.r_!==null){f=a.fy;h=Bx();g=Cu(g);i=new M;O(i);G(G(S(G(i,B(271)),f),B(272)),g);Bu(h,N(i));}}if(e>=0){h=a.b0.data[e];IQ(h,1);g=a.ja;if(g!==null)g.nm(b,e,h);}a.fy=e;}return d&&GX(c)?1:0;}
function Jo(a,b,c,d){var e,f;e=T7(a,b);if(e>=0){f=a.b0.data[e];if(!LH(f))f.tQ.t();}return 1;}
function T7(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.b0.data;if(c>=d.length)return (-1);e=d[c].db;if(DU(e,b))return c;if(a.fr){f=e.u;g=f.a;e=e.g;h=e.a;g=g+h|0;i=f.b;f=a.f0;f.a=(a.ca.g.a-(a.cG*2|0)|0)-h|0;f.b=e.b;if(Nz(b,g,i,f))break;}c=c+1|0;}return c;}
function RF(a){a.fr=1;}
function XB(){var a=this;C.call(a);a.cy=null;a.b_=null;a.f3=null;a.ix=null;a.h9=null;a.h3=null;}
function Xm(a){var b=new XB();AEH(b,a);return b;}
function AEH(a,b){a.b_=Ck();a.h3=ATA;a.cy=b;Bb(b.dA,a);}
function Ly(a,b){a.h9=b;b=BR(a.b_);while(B1(b)){HI(BV(b),a.h9);}}
function Hl(a,b,c,d){var e,f;e=a.cy;f=e.b5;if(Bd(f.a,f.b)&&e.bH!==0.0){if(a.f3!==null&&!DQ(a)){a.h3=d;a.ix=HW(a.cy,a.f3);e=Sw(a,b,c,null);b=new RW;b.lI=a;e.iM=b;Ln(a.cy,a);return;}b=new BA;U(b);J(b);}c=new DM;Bj(c,B(273));J(c);}
function Dx(a){if(DQ(a)){PC(a.cy,a);Sk(a,null);a.h3.t();a.h3=ATA;}}
function Sw(a,b,c,d){var e,f,g,h;e=XS();RF(e);J5(e,c.ga());HI(e,a.h9);HA(e,a.ix);GC(e,a.cy);if(d===null)f=b.a;else{g=b.a;f=a.cy.b5.a<((g+(D0(d)).a|0)+(D0(e)).a|0)?g-(D0(e)).a|0:(g+(D0(d)).a|0)-d.ev|0;}h=b.b;b=a.cy.b5;Jb(e,V(0,X(f,b.a-(D0(e)).a|0)),V(0,X(h,b.b-(D0(e)).b|0)));b=new N_;b.lO=a;b.lP=e;e.ja=b;BW(a.b_,e);return e;}
function AEU(a,b,c){var d,e;a.ix=HW(a.cy,a.f3);d=BR(a.b_);while(B1(d)){e=BV(d);HA(e,a.ix);GC(e,a.cy);}}
function KA(a){var b,c;if(D3(a.b_))return;Cv(a.cy.c4,1);b=0;while(true){c=a.b_;if(b>=c.j)break;IY(Bs(c,b),a.cy);b=b+1|0;}}
function JJ(a,b){var c,d;c=0;d=a.b_.j-1|0;a:{while(d>=0){c=Jw(Bs(a.b_,d),b.k,a.cy.cw);if(c)break a;d=d+(-1)|0;}}return c;}
function IJ(a,b,c,d){var e,f;e=0;f=a.b_.j-1|0;a:{while(f>=0){e=Jo(Bs(a.b_,f),b.k,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function I9(a,b,c){var d,e,f,g;d=0;e=a.b_.j-1|0;a:{while(e>=0){f=Bs(a.b_,e);g=b.k;d=DU(f.ca,g);if(!d&&!Ib(f.ca)){f=f.iM;if(f!==null)f.t();}if(d)break a;e=e+(-1)|0;}}return d;}
function ADq(a,b){var c;if(!DQ(a))return 0;a:{switch(b.bk){case 27:Dx(a);c=1;break a;default:}c=0;}return c;}
function Sk(a,b){var c,d;c=a.b_.j-1|0;a:{while(true){if(c<0)break a;d=Bs(a.b_,c);if(b===d)break;Ed(a.b_,c);Sm(d);c=c+(-1)|0;}}}
function DQ(a){return a.b_.j<=0?0:1;}
function R9(){C.call(this);this.ss=null;}
function ALR(a,b){var c;c=a.ss;if(b.bk==32)Sm(c.cB);return 0;}
function Sa(){C.call(this);this.rd=null;}
function AC4(a,b){var c,d,e,f;b=b;c=a.rd;Bu(Bx(),B(274));if(!DQ(c.dO)){d=c.dO;b=b.k;e=MK(4);f=new Ul;f.wW=c;Hl(d,b,e,f);}return 1;}
function ACg(){var a=this;C.call(a);a.hY=null;a.ho=0.0;}
function SL(a,b){var c=new ACg();ACV(c,a,b);return c;}
function ACV(a,b,c){a.hY=b;a.ho=c;}
function APj(a,b){if(a===b)return 1;if(b!==null&&Cz(a)===Cz(b)){b=b;return a.ho===b.ho&&D_(a.hY,b.hY)?1:0;}return 0;}
function Kb(){var a=this;C.call(a);a.hx=null;a.sc=null;a.tM=null;a.iA=null;a.bb=null;a.g3=null;}
function ATB(a,b,c,d,e,f){var g=new Kb();RO(g,a,b,c,d,e,f);return g;}
function Go(){var b,c,d,e,f,g;b=new Kb;c=new ER;Dm();d=AS4;e=AS8;EE();F4(c,d,e,d,ATp,ATl);f=new ER;d=AS4;e=AS8;g=ATp;F4(f,d,e,d,g,g);RO(b,c,f,Xk(),Bq(B(275)),Xk(),AE3(1,0.125));return b;}
function RO(a,b,c,d,e,f,g){a.hx=b;a.sc=c;a.tM=d;a.iA=e;a.bb=f;a.g3=g;}
var R$=F();
function AHo(a){Bu(Bx(),B(276));}
var R8=F();
function ANb(a){Bu(Bx(),B(277));}
function Dy(){var a=this;C.call(a);a.db=null;a.tQ=null;a.iS=null;a.jK=null;a.jR=null;}
function ABY(a,b,c){var d=new Dy();Qk(d,a,b,c);return d;}
function AQZ(a,b,c,d){var e=new Dy();ZC(e,a,b,c,d);return e;}
function Qk(a,b,c,d){ZC(a,b,c,d,null);}
function ZC(a,b,c,d,e){var f;f=J9();a.db=f;a.jR=c;a.iS=d;a.tQ=b;Bh(f.N,d.iW);Bh(a.db.U,d.fs);a.jK=e;}
function LH(a){return a.jK===null?0:1;}
function IQ(a,b){Bh(a.db.U,!b?a.iS.fs:a.iS.sX);}
function NF(){C.call(this);this.mf=null;}
function AHh(a,b,c){var d;d=a.mf;if(b===0.0)S5(d,new Ba);}
function ZW(){var a=this;C.call(a);a.b6=null;a.d5=null;a.nM=null;a.hw=null;a.iq=null;}
function AM6(a){var b=new ZW();AL7(b,a);return b;}
function AL7(a,b){var c;c=new JW;c.bZ=J3();c.eq=new Ba;c.f7=new Ba;c.bm=ATC;c.b1=(-1);c.cW=0;c.c3=0;c.eM=0;c.lu=0;a.b6=c;a.hw=ATA;a.d5=b;Bb(b.dA,a);b=a.b6;c=new UU;c.tX=a;b.tx=c;}
function RL(a,b){var c;a.nM=b;c=a.b6;c.eu=b;Uo(c);}
function WS(a,b){var c,d,e,f,g,h;a.iq=b;c=a.b6;c.lC=b.g3;d=b.hx.bF;Bh(c.bZ.N,d);c.vO=d;d=b.iA;Bh(c.bZ.U,d);e=0;while(true){f=c.bm.data;if(e>=f.length)break;g=f[e];h=b.hx;g.ct=h;If(g.bW,h.jG,h.bF);If(g.ck,h.lf,h.bF);If(g.cC,h.lt,h.bF);Bh(g.dJ.U,h.bF);Bh(g.dz.U,h.bF);Bh(g.d3.U,h.bF);if(c.b1==e)F9(c.bm.data[e],1);e=e+1|0;}}
function ON(a,b,c,d){var e,f,g,h;if(a.nM!==null&&!Fz(a)){e=a.b6;Uo(e);e.bm=c;Lc(a.b6,a.d5);e=a.b6;f=b.a;g=b.b;b=a.d5.b5;h=U0(e);Wi(e,V(0,X(f,b.a-h.a|0)),V(0,X(g,b.b-h.b|0)));Ln(a.d5,a);a.hw=d;return;}b=new BA;U(b);J(b);}
function F2(a){var b;if(!Fz(a))return 0;PC(a.d5,a);a.hw.t();a.hw=ATA;b=a.b6;b.ei=CK(b.ei,null);Bc(b.eq,0,0);b.bm=ATC;b.b1=(-1);b.cW=0;b.c3=0;b.eM=0;RS(b.bZ);return 1;}
function AMj(a,b,c){Lc(a.b6,a.d5);}
function Pb(a){AAH(a.b6,a.d5);}
function PN(a,b){var c,d,e,f,g;c=a.b6;d=a.d5.cw;e=DU(c.bZ,b);f=!e?(-1):RV(c,b);if(c.b1!=f&&f>=0){F9(c.bm.data[f],1);g=c.b1;if(g>=0)F9(c.bm.data[g],0);c.b1=f;}return e&&GX(d)?1:0;}
function Pp(a,b,c,d){var e;e=a.b6;if(!DU(e.bZ,b)){if(!Ib(e.bZ)){b=e.tx;if(b!==null)F2(b.tX);}c=0;}else{if(d==1){c=RV(e,b);if(c>=0)e.bm.data[c].km.t();}c=1;}return c;}
function Fz(a){return LL(a.b6)?0:1;}
function WF(a,b){return b===null?B(31):b.DX();}
function Z7(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=d.e;BI(a.iq);f=AK4();g=0;h=c!==null?c.data.length:b.j;i=0;a:{while(true){if(i>=h)break a;if(c===null){j=(Bs(b,i)).bD;k=QN(Ex(B0(e.h,j)));l=WF(a,e.fH);}else{m=c.data;j=m[i].jw.ka;k=!D_(e.fH,m[i].hF)?B(31):QN(Ex(B0(e.h,j)));l=WF(a,m[i].hF);}if(I(k)>43){n=B7(k,0,40);k=new M;O(k);G(G(k,n),B(278));k=N(k);}if(I(l)>43){n=B7(l,0,40);o=new M;O(o);G(G(o,n),B(278));l=N(o);}n=De(j+1|0);g=g+1|0;if(g>20)break;if(c!==null){m=c.data;o=null;p=m[i];}else{p=null;o=Bs(b,i);}if
(c!==null){q=new SI;q.p7=d;q.p8=p;}else{q=new SG;q.s9=d;q.s$=o;}p=new WY;p.m4=a;p.m3=q;KM(f,l,n,k,a.iq.hx,p);i=i+1|0;}r=h-(g-1|0)|0;b=new M;O(b);G(S(G(b,B(279)),r),B(280));KM(f,N(b),B(31),B(31),a.iq.sc,new SH);}return PB(f);}
function AEo(a,b){var c,d;if(!Fz(a))return 0;a:{c=b.bk;switch(c){case 13:b=a.b6;d=b.b1;if(d==(-1))c=0;else{b.bm.data[d].km.t();c=1;}break a;case 27:break;case 37:case 38:case 39:case 40:b=a.b6;d=b.b1;if(d>=0)F9(b.bm.data[d],0);b:{c:{switch(c){case 38:c=b.bm.data.length;c=((c+b.b1|0)-1|0)%c|0;b.b1=c;if(c!=20)break b;b.b1=19;break b;case 39:b.b1=X(b.bm.data.length,20)-1|0;break b;case 40:break c;default:}b.b1=0;break b;}c=b.b1;if(c==19)b.b1=0;else b.b1=(c+1|0)%b.bm.data.length|0;}F9(b.bm.data[b.b1],1);c=1;break a;default:c
=0;break a;}c=F2(a);}return c;}
function NG(){C.call(this);this.pn=null;}
function ANt(a,b){var c,d;c=a.pn;if(b.bk!=32)d=0;else{F2(c.dW);d=1;}return d;}
function NH(){C.call(this);this.sM=null;}
function AJ9(a,b){var c;b=b;c=a.sM;if(!Fz(c.dW))S5(c,b.k);return 1;}
var Vf=F(0);
var G8=F(0);
var EA=F();
function D3(a){return a.j?0:1;}
function Hm(a,b){var c,d,e,f,g,h;c=b.data;d=a.j;e=c.length;if(e<d)b=TH(HH(Cz(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BR(a);while(B1(f)){g=b.data;h=e+1|0;g[e]=BV(f);e=h;}return b;}
var L6=F(0);
function FR(){EA.call(this);this.cs=0;}
function BR(a){var b;b=new MF;b.gp=a;b.lo=a.cs;b.hW=a.m6();b.fP=(-1);return b;}
function Pm(a,b){var c,d;c=a.j;d=0;while(true){if(d>=c)return (-1);if(D_(b,Bs(a,d)))break;d=d+1|0;}return d;}
var HS=F(0);
function MY(){var a=this;FR.call(a);a.cd=null;a.j=0;}
function Ck(){var a=new MY();AGH(a);return a;}
function ATD(a){var b=new MY();LX(b,a);return b;}
function AGH(a){LX(a,10);}
function LX(a,b){a.cd=R(C,b);}
function IF(a,b){var c,d;c=a.cd.data.length;if(c<b){d=c>=1073741823?2147483647:V(b,V(c*2|0,5));a.cd=Da(a.cd,d);}}
function Bs(a,b){Iv(a,b);return a.cd.data[b];}
function AKJ(a){return a.j;}
function BW(a,b){var c,d;IF(a,a.j+1|0);c=a.cd.data;d=a.j;a.j=d+1|0;c[d]=b;a.cs=a.cs+1|0;return 1;}
function Qg(a,b,c){var d,e,f;Oo(a,b);IF(a,a.j+1|0);d=a.j;e=d;while(e>b){f=a.cd.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cd.data[b]=c;a.j=d+1|0;a.cs=a.cs+1|0;}
function Ed(a,b){var c,d,e,f;Iv(a,b);c=a.cd.data;d=c[b];e=a.j-1|0;a.j=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cs=a.cs+1|0;return d;}
function U3(a,b){var c;c=Pm(a,b);if(c<0)return 0;Ed(a,c);return 1;}
function G9(a){var b,c,d,e,f,g;b=a.cd;c=0;d=a.j;e=null;if(c>d){e=new BA;U(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.j=0;a.cs=a.cs+1|0;}
function Iv(a,b){var c;if(b>=0&&b<a.j)return;c=new By;U(c);J(c);}
function Oo(a,b){var c;if(b>=0&&b<=a.j)return;c=new By;U(c);J(c);}
function Jh(a,b){var c;c=0;while(c<a.j){b.m(a.cd.data[c]);c=c+1|0;}}
function Nc(a,b){var c,d,e,f,g,h,i;c=a.cd;d=a.j;if(b===null)b=AR$;e=R(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}YM(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.cs=a.cs+1|0;}
function AB6(){var a=this;C.call(a);a.kY=0;a.k0=0;}
function ANg(){var a=new AB6();AN2(a);return a;}
function AN2(a){var b,c;b=ABR(Es((AAV())));c=Es((AAV()))^(-559038737);a.kY=b;a.k0=c;c=0;while(c<19){QD(a);c=c+1|0;}}
function QD(a){var b,c;b=a.kY;c=a.k0;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.kY=c;a.k0=b;return b;}
function ABR(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function HO(a,b){return 5.960464477539063E-8*(QD(a)&16777215)*b|0;}
function S7(){C.call(this);this.lY=null;}
function AKi(a,b,c){var d;d=a.lY;if(b===0.0)JG(d,100);}
function S8(){C.call(this);this.pk=null;}
function AC9(a,b){var c,d,e;c=a.pk;d=b.bk;if(d==32){c.iG=c.iG?0:1;e=1;}else if(d==13){JG(c,1);e=1;}else if(d!=8)e=0;else{VI(c,1);e=1;}return e;}
var My=F(0);
function ABt(){var a=this;C.call(a);a.fq=null;a.fL=0;a.h4=0;a.fK=0;}
function AOr(a){var b=new ABt();AGG(b,a);return b;}
function AGG(a,b){a.fq=Ck();a.fK=0;a.h4=2048;a.fL=b;}
function GZ(a,b,c){var d,e,f,g,h,i,j;d=c.p0(b);e=a.h4;if(d>e){c=new Bm;f=new M;O(f);BB(S(G(S(G(f,B(281)),d),B(282)),e),41);Bj(c,N(f));J(c);}if(!a.fL){b=new BA;Bj(b,B(283));J(b);}a:{b=new B3;if(d){b:{c=a.fq;if(c.j>0){c=BR(c);g=d;while(true){if(!B1(c))break b;f=BV(c);if(f.bl>=g)break;}CE(b,f.bf,f.bt,g,a.fL);f.bf=f.bf+g;h=f.bl-g;f.bl=h;if(h===0.0)U3(a.fq,f);break a;}}g=a.fK;i=d;CE(b,0.0,g,i,a.fL);c=a.fq;f=new B3;h=a.fK;g=a.h4-d|0;j=a.fL;f.bf=i;f.bt=h;f.bl=g;f.bu=j;BW(c,f);a.fK=a.fK+a.fL|0;}}return b;}
function Wu(a){return Cf(a.h4,a.fK);}
function ZT(){var a=this;C.call(a);a.v4=20;a.fC=null;a.eO=null;a.hV=null;a.j0=0;a.hU=0;a.it=0.0;a.cu=null;a.ek=null;a.e1=null;a.fd=0;}
function AJz(){var a=new ZT();AN_(a);return a;}
function AN_(a){a.v4=20;a.fC=new Ba;a.eO=new Ba;a.cu=Ck();}
function WJ(a,b){var c,d,e,f,g;c=a.fd;if(b==c)return;d=a.cu.j;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=V(0,(c-1|0)/20|0);f=V(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){Rq(a,b);a.fd=b;}else{if(a.fd>=b)while(true){if(g<f)break a;a.fd=RT(Bs(a.cu,g%d|0),a.ek,a.e1,a.fd,b,e,a.it);g=g+(-1)|0;}while(f<=g){a.fd=RT(Bs(a.cu,f%d|0),a.ek,a.e1,a.fd,b,e,a.it);f=f+1|0;}}}}
function Tc(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=BR(a.cu);while(B1(f)){g=BV(f);h=a.fC;i=Bd(a.cu.j,a.hU);j=g.ed.b;k=((g.ik.b-(b%i|0)|0)+i|0)%i|0;l=k+j|0;m=BD(l,c);if(m<=0){Bc(g.f2,B_(g.bV),j);CE(g.ft,0.0,0.0,B_(g.bV),j);Io(g,e,k,h,d.iv,d.g6);}else{if(m>0&&k<c){m=V(c-k|0,0);Bc(g.f2,B_(g.bV),m);CE(g.ft,0.0,0.0,B_(g.bV),m);Io(g,e,k,h,d.iv,d.g6);}if(l>i){m=X(l%i|0,c);Bc(g.f2,B_(g.bV),m);CE(g.ft,0.0,b%C1(g.bV)|0,B_(g.bV),m);Io(g,e,0,h,d.iv,d.g6);}}}}
function Je(a,b,c,d){var e,f,g,h,i,j;e=a.cu.j;while(true){f=a.cu.j;g=Bd(f,a.hU);if(g>(d+a.j0|0))break;h=Cf(0,g);i=new Mq;g=a.eO.a;f=a.j0;j=a.hV;i.f2=new Ba;i.ft=new B3;i.ik=h;i.du=20;i.ea=f;i.ed=Cf(g,20*f|0);i.fw=Sh(j,f);if(i.bV===null)i.bV=CS(b);BW(a.cu,i);}if(f==e)return;Rq(a,c);}
function Rq(a,b){var c,d,e,f,g,h,i,j;c=a.cu;d=c.j;e=Bd((b/(d*20|0)|0)+1|0,d)*20|0;c=BR(c);while(B1(c)){f=BV(c);g=a.ek;h=a.it;El(g);i=0;while(true){j=f.du;if(i>=j)break;j=e-Bd(d,j)|0;if(j<b)j=e;e=j+1|0;FT(f,g,De(e),Bd(f.ea,i)+f.fw|0,h);i=i+1|0;}CM(f.bV,g);}}
function SA(a,b,c,d){var e;a.hV=b;a.j0=c;e=c*20|0;a.hU=e;b=CK(a.ek,CJ(d,a.eO.a,e));a.ek=b;CC(b,a.hV);Q5(a.ek,2);b=CK(a.e1,CJ(d,a.eO.a,c));a.e1=b;CC(b,a.hV);Q5(a.e1,2);}
function Uv(a,b,c,d,e){Dv(a.fC,b);Bc(a.eO,c,d);a.it=e;}
var ABi=F(0);
function ABC(){return AJw(Cw(96,99,102),Cw(49,51,53),Cw(164,163,163),CG(50));}
function Vr(){var a=this;C.call(a);a.iy=null;a.qd=null;a.h6=null;}
function AJ$(a,b,c){if(!c){b=E2(a.h6.gt,b.k,a.qd,1);a.iy=b;if(b!==null)return 1;}return 1;}
function ALE(a,b,c){if(a.iy!==null)a.iy=null;return 1;}
function AF_(a,b){var c;c=a.iy;if(c!==null){c.m(b);return 1;}c=a.h6;return Fa(c.gt,b.k,c.r7);}
function RI(){C.call(this);this.nx=null;}
function AFw(a,b,c,d){var e,f;b=a.nx;e=(LP(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.dG=X(V(0,b.dG+Bd(e,f)|0),OU(b));return 1;}
var Tw=F(0);
function GX(a){return Ds(a,null);}
function TD(b){var c;c=new MW;c.nd=b;return c;}
function ZS(){var a=this;C.call(a);a.eH=null;a.cJ=null;a.dB=null;a.d8=null;a.lQ=null;a.i$=null;}
function G5(){var a=new ZS();AF7(a);return a;}
function AF7(a){var b;a.eH=new Ba;a.cJ=new Ba;a.dB=new Ba;a.d8=new Ba;b=new B3;a.lQ=b;a.i$=new B3;EE();Bh(b,ATo);Bh(a.i$,ATE);}
function OR(a){var b;b=a.cJ;return !Bd(b.a,b.b)?0:1;}
function Ic(a,b){return Ha(b,a.dB,a.d8);}
function E2(a,b,c,d){var e,f,g,h,i;e=Ic(a,b);f=Ha(b,a.eH,a.cJ);if(!e&&!f)return null;if(!f){if(!d)c.m(Ws(a,b.a-a.dB.a|0));else c.m(ND(a,b.b-a.dB.b|0));}g=!d?a.eH.a+(a.cJ.a/2|0)|0:a.eH.b+(a.cJ.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new MV;b.se=a;b.sg=c;b.sf=i;}else{b=new MT;b.o9=a;b.o8=c;b.o$=i;}return b;}
function ACe(b,c){var d;d=new SW;d.p9=b;d.lK=c;return d;}
function ND(a,b){var c,d,e;c=a.d8.b;d=a.cJ.b;e=c-d|0;return ACe(X(V(0,b-(d/2|0)|0),e),e);}
function Ws(a,b){var c,d,e;c=a.d8.a;d=a.cJ.a;e=c-d|0;return ACe(X(V(0,b-(d/2|0)|0),e),e);}
function HZ(a,b,c,d,e,f,g){MZ(a,b,c,d,e,f,g,1);}
function LC(a,b,c,d,e,f,g){MZ(a,b,c,d,e,f,g,0);}
function MZ(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bc(a.d8,0,0);Bc(a.cJ,0,0);}else{i=X(g*3|0,d);j=V(OL(d,d,e),i);e=e-d|0;i=d-j|0;i=i?OL(b,i,e):0;if(!h){k=a.eH;k.a=i+c|0;k.b=f-g|0;l=a.cJ;l.a=j;l.b=g;l=a.dB;l.a=c;l.b=k.b;k=a.d8;k.a=d;k.b=g;}else{k=a.eH;k.a=f-g|0;k.b=i+c|0;l=a.cJ;l.a=g;l.b=j;l=a.dB;l.a=k.a;l.b=c;k=a.d8;k.a=g;k.b=d;}}}
function O2(a,b){FI(a,b);F0(a,b);}
function FI(a,b){var c;c=a.dB;BJ(b,c.a,c.b,a.d8,a.lQ);}
function F0(a,b){var c,d;c=a.cJ;c.a=c.a-2|0;c.b=c.b-2|0;d=a.eH;BJ(b,d.a+1|0,d.b+1|0,c,a.i$);b=a.cJ;b.a=b.a+2|0;b.b=b.b+2|0;}
function Fa(a,b,c){return Ic(a,b)&&GX(c)?1:0;}
function O7(){C.call(this);this.to=null;}
function AMk(a,b){var c,d,e;c=a.to;if(b.cn&&b.bk==79){if(!b.bz){b=c.bh.bY;d=new Rc;d.tu=c;K1(b,d);}else{b=c.bh.bY;d=new Rb;d.vJ=c;U5(b,d);}e=1;}else e=0;return e;}
function Qb(){C.call(this);this.uU=null;}
function ADx(a,b){var c,d,e,f;c=b.data;b=Bx();d=Cu(c[0]);e=new M;O(e);G(G(e,B(198)),d);Bu(b,N(e));b=Bx();f=c[1];d=new M;O(d);G(G(d,B(284)),f);Bu(b,N(d));}
function Qa(){C.call(this);this.wI=null;}
function AO0(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bx();e=Cu(c[0]);f=new M;O(f);G(G(f,B(198)),e);Bu(d,N(f));g=Fu(QQ(b,1));b=Bx();d=Cu(c[1]);if(g===null)c=B(29);else{c=new M;O(c);BX(c,B(42));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BX(c,B(43));BB(c,i[h]);h=h+1|0;}BX(c,B(44));c=N(c);}e=new M;O(e);G(G(G(G(e,B(285)),d),B(286)),c);Bu(b,N(e));}
function P_(){C.call(this);this.nW=null;}
function AFR(a,b){Tv(a.nW,b);}
function P$(){C.call(this);this.uC=null;}
function AKv(a,b){var c,d,e,f,g;c=b.data;d=Bx();e=Cu(c[0]);f=new M;O(f);G(G(f,B(198)),e);Bu(d,N(f));g=Ek(QQ(b,1));b=Bx();d=Cu(c[1]);c=AAN(g);e=new M;O(e);G(G(G(G(e,B(287)),d),B(288)),c);Bu(b,N(e));}
function P8(){C.call(this);this.vL=null;}
function AJJ(a,b){var c,d;c=KR();b=Cu(b);d=new M;O(d);G(G(d,B(289)),b);Bu(c,N(d));b=new E4;U(b);J(b);}
function P7(){C.call(this);this.pi=null;}
function ALB(a,b){var c,d,e,f;c=a.pi;d=c.bh.bY;e=new Na;e.qv=c;f=R(C,1);f.data[0]=b;CZ(d,e,B(290),f);}
function SM(){C.call(this);this.ks=null;}
function ANv(a,b){var c,d,e,f,g,h;c=a.ks;d=c.kQ;if(d!==null){e=c.dw.u;f=e.a;g=b.k;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.kQ=g;}b=b.k;f=b.a;c=c.eA;d=c.g;f=f-d.a|0;h=b.b-d.b|0;Bc(c.u,f,h);return 1;}
function ANT(a,b,c){var d;if(!c){d=b.k;b=a.ks;if(!DU(b.dw,d))d=null;b.kQ=d;}return 1;}
var AAt=F();
function YX(b){var c,d;c=CJ(b,250,64);FN(c,B(163),25.0);KD(c,187,187,187);Ce(c,B(291),0.0,24.0);Ce(c,B(291),0.25,56.0);d=CS(b);CM(d,c);FB(c);return d;}
function Te(){var a=this;C.call(a);a.ic=null;a.oZ=null;a.iH=null;}
function AD8(a,b,c){if(!c){b=E2(a.iH.hj,b.k,a.oZ,1);a.ic=b;if(b!==null)return 1;}return 1;}
function AEP(a,b,c){if(a.ic!==null)a.ic=null;return 1;}
function ADI(a,b){var c;c=a.ic;if(c!==null){c.m(b);return 1;}c=a.iH;return Fa(c.hj,b.k,TD(c.bh.bY));}
function M1(){C.call(this);this.sP=null;}
function ADB(a,b,c,d){var e,f;b=a.sP;e=(LP(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.ej=X(V(0,b.ej+Bd(e,f)|0),QJ(b));return 1;}
function Rl(){C.call(this);this.qR=null;}
function ANz(a,b){var c,d;a:{c=a.qR;switch(b.bk){case 67:LJ(c);d=1;break a;case 86:P4(c);d=1;break a;default:}d=0;}return d;}
var Rk=F();
function AGa(a,b,c){return 0;}
function Ri(){C.call(this);this.oF=null;}
function AMY(a,b,c){var d,e;d=a.oF;c=d.dk+1|0;d.dk=c;d=HB(E(H0));e=new M;O(e);G(G(S(e,c),B(292)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));Vi(b,e);return 1;}
var Rh=F();
function AKZ(a){return null;}
function Rj(){C.call(this);this.mP=null;}
function AEE(a){var b,c;b=a.mP;c=new OZ;c.q0=b;return c;}
function QS(){C.call(this);this.ww=null;}
function AGg(a,b){return 0;}
function Kj(){var a=this;C.call(a);a.lq=null;a.ux=null;a.nA=0.0;a.oa=0;a.nN=0;a.o5=0;a.p2=0;a.wc=0;a.dg=0.0;a.dZ=0.0;a.uG=0.0;a.ld=0.0;a.uP=0;a.mz=null;}
function FE(a){return C7(a.dg+a.dZ);}
function Ji(a,b){return C7((a.dg+a.dZ)*b);}
function QB(){var a=this;C.call(a);a.cE=null;a.g0=null;a.qj=0;}
function Wr(a,b){Qg(a.cE,0,b);}
function AEI(a,b){var c,d,e,f;c=a.g0;if(c!==null){c.m(b);return 1;}d=0;while(true){c=a.cE;if(d>=c.j)break;a:{b:{e=Bs(c,d);if(!AA$(e,b.k)){if(!Fk(e.p,b.k))break b;if(!e.p.b4(b)&&!Ds(e.M.cw,null))break b;}f=1;break a;}f=0;}if(f)return 1;d=d+1|0;}return 0;}
function AIn(a,b,c,d){var e,f,g;e=0;while(true){f=a.cE;if(e>=f.j)break;g=Bs(f,e);if(Fk(g.p,b.k)&&g.p.cA(b,c,d)?1:0)return 1;e=e+1|0;}return 0;}
function AGC(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;if(a.g0!==null)return 1;d=0;while(true){e=a.cE;if(d>=e.j)break;a:{f=Bs(e,d);if(!c){e=b.k;if(!KY(f.Q)&&Fk(f.Q,e)){g=f.p.x;h=g.a;i=e.a;h=h-i|0;j=g.b;k=e.b;j=j-k|0;e=f.Q.x;i=e.a-i|0;k=e.b-k|0;g=new Ba;e=new Qs;e.sG=f;e.sH=i;e.sE=k;e.sF=g;e.sC=h;e.sD=j;}else{h=Cs(f.M,7.0);i=Cs(f.M,25.0);j=L5(f,e.b,h);k=UK(f,e.a,h);l=TR(f,e.a,i);m=QM(f,e.b,i);n=k&&Ox(f,e.b,h)?1:0;o=j&&Ne(f,e.a,h)?1:0;i=j&&SJ(f,e.a,h)?1:0;h=k&&Pe(f,e.b,h)?1:0;if(n){if(l<0)e=TB(f,e);else if(l>0)e=Tf(f,
e);else{g=new Ba;p=new Ba;h=e.b;e=f.p;j=e.x.b;i=e.o.b;e=new TW;e.rN=f;e.rL=h;e.rM=j;e.rP=i;e.rR=p;e.rO=g;}}else if(o){if(m<0)e=TB(f,e);else if(m>0)e=N6(f,e);else{g=new Ba;p=new Ba;h=e.a;e=f.p;i=e.x.a;j=e.o.a;e=new WE;e.pW=f;e.pV=h;e.pU=i;e.pT=j;e.pS=p;e.pR=g;}}else if(i){if(m<0)e=Tf(f,e);else if(m>0)e=Nq(f,e);else{g=new Ba;h=e.a;i=f.p.o.a;e=new Vn;e.l8=f;e.l9=h;e.l$=i;e.l_=g;}}else if(!h)e=null;else if(l<0)e=N6(f,e);else if(l>0)e=Nq(f,e);else{g=new Ba;h=e.b;i=f.p.o.b;e=new Lz;e.mZ=f;e.mY=h;e.m1=i;e.m0=g;}}if
(e!==null)break a;}e=f.p.qF(b,c);if(e===null)e=!Fk(f.p,b.k)?null:ATF;}if(e!==null){a.g0=e;a.qj=c;return 1;}d=d+1|0;}return 0;}
function AOK(a,b,c){var d,e;if(c==a.qj&&a.g0!==null){a.g0=null;return 1;}d=0;while(true){e=a.cE;if(d>=e.j)break;if((Bs(e,d)).p.cP(b,c))return 1;d=d+1|0;}return 0;}
function AOb(a,b,c){var d,e,f;d=0;while(true){e=a.cE;if(d>=e.j)break;f=Bs(e,d);e=f.p;e.il(e.x,e.o,c);e=f.Q;if(e.gi!==null){e.dC=null;e.hg=0;e.go=1;}Jf(f);d=d+1|0;}}
function Pv(){C.call(this);this.wt=null;}
function AGL(a,b){return b.iB&&b.bk==32?1:0;}
function Pw(){C.call(this);this.pp=null;}
function AC_(a,b){var c,d,e,f,g,h;b=b;c=a.pp;if(!DQ(c.fn)){d=c.fn;b=b.k;e=R(Dy,1);f=e.data;g=new Dy;h=new Qi;h.ma=c;Qk(g,h,B(293),d.h9.bb);f[0]=g;Hl(d,b,GU(e),ATA);}return 1;}
function Px(){C.call(this);this.qS=null;}
function ALZ(a,b,c,d){var e,f,g,h;e=a.qS;f=0;a:{while(true){g=e.cE;if(f>=g.j)break;if((Bs(g,f)).p.ef(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function KQ(){var a=this;C.call(a);a.fH=null;a.h=null;a.im=null;a.pa=null;}
function Dd(a){var b;b=a.im;if(b===null)b=a.pa;return b;}
function GE(a){var b;b=a.fH;return b===null?null:b.ue;}
var NN=F(0);
var N$=F();
function AGR(a,b,c){var d,e;d=b;e=c;b=new M;O(b);S(G(S(G(b,B(294)),d),B(295)),e);CF(N(b));return d+e|0;}
var NO=F(0);
var N8=F();
function AHW(a,b,c){var d,e;d=b;e=c;b=new M;O(b);E6(G(E6(G(b,B(296)),d),B(295)),e);CF(N(b));return d+e;}
var Yf=F();
var Xv=F(0);
function LM(){C.call(this);this.m2=null;}
function AI5(a){JY(a.m2);}
function LN(){C.call(this);this.pK=null;}
function AHC(a){I$(a.pK);}
function UY(){var a=this;C.call(a);a.mM=null;a.rW=null;a.sd=null;a.n0=null;a.lW=null;a.qD=null;}
function J2(a,b,c){return Wv(a,Cl(a.mM),b,c);}
function UJ(a,b,c){return Wv(a,Cl(a.rW),b,c);}
function Wv(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.sZ(c,d))return g.u3;f=f+1|0;}return null;}
function MB(a,b,c){var d,e,f,g;d=(Cl(a.sd)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.sZ(b,c))return g.u_;f=f+1|0;}return null;}
function Xa(){var a=this;C.call(a);a.bM=null;a.bB=null;a.cS=0;}
function AKQ(){var a=new Xa();ADE(a);return a;}
function Qu(a){var b=new Xa();AC3(b,a);return b;}
function ADE(a){a.bM=new F$;a.bB=new F$;}
function AC3(a,b){var c;c=new F$;a.bM=c;a.bB=new F$;Wf(c,b.bM);Wf(a.bB,b.bB);a.cS=b.cS;}
function JS(a,b,c){BZ(a.bB,b,c);if(!a.cS)BZ(a.bM,b,c);}
function O9(a,b){BZ(a.bM,b,0);BZ(a.bB,b+1|0,0);}
function DR(a){if(WK(a.bM,a.bB)>0)return a.bB;return a.bM;}
function Fi(a){if(WK(a.bM,a.bB)<0)return a.bB;return a.bM;}
function Dg(a){var b,c;b=a.bM;c=a.bB;return (b===c?1:c!==null&&Cz(b)===Cz(c)?(b.K==c.K&&b.X==c.X?1:0):0)?0:1;}
function Yt(a,b){var c,d;if(!Dg(a))return 0;c=DR(a);d=Fi(a);return c.K<=b&&b<d.K?1:0;}
function Mz(){var a=this;C.call(a);a.ep=null;a.er=0;a.c6=0;}
function L4(a,b){var c,d,e;c=a.er;d=a.ep;if(c==d.data.length)a.ep=Da(d,c+16|0);d=a.ep.data;e=a.er;a.er=e+1|0;d[e]=b;}
function Wm(a){var b,c,d;b=a.c6;c=a.er-1|0;if(b==c)a.c6=b-1|0;d=a.ep.data;a.er=c;d[c]=null;}
function EG(){var a=this;C.call(a);a.bQ=0;a.bR=null;a.d7=null;a.dp=0;a.cX=0;}
var ATu=0;var ATG=0;var ATt=0;function Kp(b,c){return (c-FE(b)|0)/2|0;}
function Sh(b,c){return Kp(b,c)+b.p2|0;}
function AAE(a,b,c,d,e){var f,g;if(D3(a.d7))return;if(e>EM(a.bR))return;f=e/1024|0;e=a.cX;if(f==e)return;if(LP(f-e|0)>=a.dp){g=0;while(g<a.dp){HC(a,b,d,c,f+g|0);g=g+1|0;}a.cX=f;return;}while(true){e=a.cX;if(e>=f)break;HC(a,b,d,c,e+a.dp|0);a.cX=a.cX+1|0;}while(true){e=a.cX;if(e<=f)break;HC(a,b,d,c,e-1|0);a.cX=a.cX-1|0;}}
function HC(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;El(b);f=a.bR.e$;g=e*1024|0;h=N4(a,g);if(h>=a.bR.q.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bQ;a:{while(true){l=a.bR.q.data;if(h>=l.length)break a;m=l[h];n=!ATt?Sh(d.data[m.b8],c):Kp(d.data[m.b8],c);o=f.data;CC(b,d.data[m.b8]);Ce(b,m.w,k,n);k=o[h]-j+a.bQ;if(k>1024.0)break;h=h+1|0;}}CM(Bs(a.d7,e%a.dp|0),b);}
function AAK(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp;if(D3(a.d7))return;if(!a.dp)return;if(j>EM(a.bR))return;o=a.bR;p=o.dV;q=o.q;r=j/1024|0;s=N4(a,j);t= -a.bQ|0;u=i;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=h)break;y=p.data;o=Bs(a.d7,r%a.dp|0);z=v[s];ba=y[s]+a.bQ|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=X(be,ba)-j|0;if(bc&&x)bf=bf+a.bQ|0;if((t+bf|0)>h)bf=h-t|0;bg=l!==null?0:1;b:{if(!bg){bh=!x
?a.bQ:2*a.bQ|0;bi=l.a;w=l.b;if(!(bi<w&&j<=w&&(j+bf|0)>(bi+bh|0)?0:1)){bh=0;break b;}}bh=1;}c:{if(!bg){bj=!x?a.bQ:2*a.bQ|0;if(j>=l.a&&(j+bf|0)<=(l.b+bj|0)?1:0){bk=1;break c;}}bk=0;}bl=null;if(z===m)bl=k.p3;bm=BR(n);d:{e:{while(B1(bm)){f:{bn=BV(bm);if(bn!==null){if(!bn.ex(z))break f;else break e;}if(z===null)break e;}}bi=0;break d;}bi=1;}if(bi)bl=k.mN;if(!bk&&!bh){l.b=X(l.b,EM(a.bR));bj=j>=l.a?bf:(X(ba,be)-l.a|0)-(!x?a.bQ:0)|0;bi=(j+bf|0)<=(l.b+(!x?a.bQ:2*a.bQ|0)|0)?0:(X(ba,be)-l.b|0)-(!x?a.bQ:0)|0;w=j-bb|0;be
=t+c|0;bo=w;x=bf-bj|0;CE(e,bo,0.0,x,u);Bc(f,x,i);HQ(a,d,be,b,f,e,z,o,g,k,0,bl);w=w+bf|0;CE(e,w-bi|0,0.0,bi,u);Bc(f,bi,i);be=be+bf|0;HQ(a,d,be-bi|0,b,f,e,z,o,g,k,0,bl);bp=w-bj|0;bi=bj-bi|0;CE(e,bp,0.0,bi,u);Bc(f,bi,i);HQ(a,d,be-bj|0,b,f,e,z,o,g,k,1,bl);}else{CE(e,j-bb|0,0.0,bf,u);Bc(f,bf,i);HQ(a,d,t+c|0,b,f,e,z,o,g,k,bk,bl);}j=j+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function HQ(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.a&&e.b){if(f.bu!==0.0&&f.bl!==0.0){m=j.nR.data[g.cF];if(k)n=j.kN;else{g=m.q7;if(g===null)g=j.iK;if(l===null)l=BI(g);n=l;}g=m.q6;if(ATG)i=0.0;Hy(b,c,d,e,f,h,g,n,i);return;}return;}}
function N4(a,b){var c,d,e,f,g,h,i;c=a.bR;d=c.e$;e=0;f=c.q.data.length;g=b;b=BD(e,f);if(b>0){c=new BA;U(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BD(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AAX(a,b,c,d,e,f){var g,h;a.cX=f/1024|0;while(true){g=a.d7;if(g.j>=a.dp)break;BW(g,CS(c));}h=0;while(h<a.dp){HC(a,b,e,d,a.cX+h|0);h=h+1|0;}}
function Pt(a){a.bR=null;Jh(a.d7,new Pu);G9(a.d7);}
function AAu(a,b,c,d,e,f,g,h,i){var j,k;j=EM(a.bR);if(j)j=j+a.bQ|0;if(!j)j=j-a.bQ|0;k=V( -a.bQ|0,j-g|0);if(k>=h)return;Bc(f,h-k|0,e);BJ(b,c+k|0,d,f,i);}
function YZ(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(EG,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B0(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bR===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EG;f.bQ=3;f.d7=Ck();f.cX=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)Pt(o);h=h+1|0;}return g;}
function ABg(){ATt=0;}
function TO(){C.call(this);this.wL=null;}
function TN(){C.call(this);this.qn=null;}
function AMu(a,b){var c;c=a.qn;c.bj=Fx(b,EH(c));}
function TJ(){C.call(this);this.ne=null;}
function AKt(a,b){var c;c=a.ne;c.cm=Fx(b,F8(c));}
function TI(){C.call(this);this.so=null;}
function AMr(a){var b,c;b=a.so;c=b.hB?0:1;b.hB=c;b=new M;O(b);FQ(G(b,B(297)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function TL(){C.call(this);this.qK=null;}
function AHH(a){var b,c;b=a.qK;c=b.hq?0:1;b.hq=c;b=new M;O(b);FQ(G(b,B(298)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function TK(){C.call(this);this.nB=null;}
function AJQ(a){var b,c;b=a.nB;c=b.iN^1;b.iN=c;b=new M;O(b);FQ(G(b,B(299)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Ud(){C.call(this);this.sO=null;}
function ALT(a){var b,c,d,e,f;b=a.sO;c=(b.kg+3|0)%6|0;b.kg=c;d=b.f_.data;e=d.length;f=0;while(f<e){b=d[f];b.bQ=c;b=b.bR;if(b!==null)b.hy=1;f=f+1|0;}}
var Fc=F(Cq);
var ATr=null;var ATH=null;var ATs=null;var ATI=null;function ADi(){ADi=Bo(Fc);AJX();}
function AAe(a,b){var c=new Fc();Z5(c,a,b);return c;}
function Z5(a,b,c){ADi();DB(a,b,c);}
function AJX(){var b;ATr=AAe(B(300),0);ATH=AAe(B(301),1);b=AAe(B(302),2);ATs=b;ATI=H(Fc,[ATr,ATH,b]);}
function IM(){var a=this;C.call(a);a.dF=null;a.ez=null;a.fa=null;}
var ASG=0;function AAI(a){var b;b=a.ez;if(b!==null){ASG=ASG-1|0;a.dF.dc.deleteTexture(b);a.ez=null;}}
function B_(a){return a.fa.a;}
function C1(a){return a.fa.b;}
function Sz(a,b,c,d){var e;e=a.fa;e.a=b;e.b=c;K8(a);a.dF.dc.texStorage2D(3553,1,d,b,c);e=a.dF.dc;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function K8(a){var b,c;b=a.dF.dc;c=a.ez;b.bindTexture(3553,c);}
function CM(a,b){Mo(a,b.k1,b.kc,32856);OM(a,b,0,0);}
function Mo(a,b,c,d){var e,f,g,h;a:{e=a.fa;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){K8(a);break a;}e=a.dF.dc;h=a.ez;e.deleteTexture(h);a.ez=a.dF.dc.createTexture();Sz(a,b,c,d);break a;}}Sz(a,b,c,d);}}
function Hx(a,b,c,d){K8(a);OM(a,b,c,d);}
function OM(a,b,c,d){var e;e=a.dF.dc;b=b.i3;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Rd=F();
function APn(a,b){return ACi(b);}
function Re(){C.call(this);this.re=null;}
function ADd(a,b){return L$(a.re,b);}
function SD(){C.call(this);this.jx=null;}
var ATz=null;function OV(){var a=new SD();Zk(a);return a;}
function Zk(a){a.jx=Ck();}
function DX(a,b,c,d){OB(a,ABY(d,b,c));}
function Ea(b,c,d){return ABY(d,b,c);}
function Er(a,b,c,d){OB(a,AQZ(null,b,c,d));}
function OB(a,b){BW(a.jx,b);}
function G6(a){return GU(Hm(a.jx,ATz));}
function Xl(){ATz=R(Dy,0);}
var WM=F(0);
var ATA=null;function ABE(){ATA=new MN;}
function ER(){var a=this;C.call(a);a.jG=null;a.lf=null;a.lt=null;a.bF=null;a.eR=null;}
function ATJ(a,b,c,d,e){var f=new ER();F4(f,a,b,c,d,e);return f;}
function F4(a,b,c,d,e,f){a.jG=b;a.lf=c;a.lt=d;a.bF=e;a.eR=f;}
function G0(){var a=this;C.call(a);a.iW=null;a.fs=null;a.sX=null;}
function ATK(a,b,c){var d=new G0();K_(d,a,b,c);return d;}
function K_(a,b,c,d){a.iW=b;a.fs=c;a.sX=d;}
function Xk(){var b,c;b=new G0;c=Bq(B(303));EE();K_(b,c,ATm,ATn);return b;}
function ACn(){var b,c;b=new G0;Dm();c=ATj;EE();K_(b,c,ATk,ATn);return b;}
function ACJ(){var a=this;C.call(a);a.iU=null;a.qp=0;}
function AE3(a,b){var c=new ACJ();AOF(c,a,b);return c;}
function AOF(a,b,c){var d;d=new B3;a.iU=d;a.qp=b;d.bu=c;}
function JI(a,b){return Cc(a.qp,b);}
var Hz=F(0);
var V6=F();
function AMc(a,b,c,d){var e;b=Bx();d=Cu(d);e=new M;O(e);G(G(S(G(e,B(304)),c),B(272)),d);Bu(b,N(e));}
var V7=F();
function JW(){var a=this;C.call(a);a.bZ=null;a.eq=null;a.f7=null;a.lC=null;a.vO=null;a.eu=null;a.bm=null;a.ei=null;a.dx=0;a.hk=0;a.b1=0;a.tx=null;a.cW=0;a.c3=0;a.eM=0;a.lu=0;}
var ATL=0;function LL(a){return a.bm.data.length?0:1;}
function Lc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=K3(b);if(LL(a))return;BI(a.eu);CC(c,a.eu);d=FE(a.eu);a.dx=Cc(2.0,b.bH);e=C7(a.eu.ld);a.hk=e;f=e;g=new Uj;g.tZ=c;g.t0=f;h=AOr(d);i=a.bm.data;e=i.length;j=0;while(j<e){k=i[j];l=I8(g,k.eg);if(Ew(k.eg,B(278)))a.lu=l;else{m=I8(g,k.iE);n=I8(g,k.iQ);a.cW=V(a.cW,l);a.c3=V(a.c3,m);a.eM=V(a.eM,n);}j=j+1|0;}e=((a.cW+a.c3|0)+a.eM|0)+(a.hk*2|0)|0;i=a.bm.data;j=i.length;n=0;while(n<j){k=i[n];Bh(k.bW.bP,GZ(h,k.eg,g));KB(k.bW,0.0);if(!Ew(k.eg,B(278))){Bh(k.ck.bP,GZ(h,k.iE,g));KB(k.ck,
a.cW-k.bW.g.a|0);Bh(k.cC.bP,GZ(h,k.iQ,g));KB(k.cC,(a.cW-k.bW.g.a|0)+(a.c3-k.ck.g.a|0)|0);a.cW=V(a.cW,k.bW.g.a);a.c3=V(a.c3,k.ck.g.a);a.eM=V(a.eM,k.cC.g.a);}n=n+1|0;}Dv(a.eq,Wu(h));b=a.bZ.g;j=V(e,a.lu);l=a.dx;b.a=j+(l*2|0)|0;a.bZ.g.b=Bd(d+l|0,a.bm.data.length)+l|0;}
function LZ(a,b){var c,d,e,f,g,h;if(Ew(b.eg,B(278)))return;c=b.dJ;d=b.bW;e=d.u;f=e.a;d=d.g;g=d.a;F1(c,f+g|0,e.b,a.cW-g|0,d.b);c=b.dz;d=b.dJ;g=d.u.a+d.g.a|0;d=b.ck;e=d.g;f=e.a;F1(c,g+f|0,d.u.b,a.c3-f|0,e.b);c=b.d3;d=b.dz;f=d.u.a+d.g.a|0;d=b.cC;b=d.g;h=b.a;F1(c,f+h|0,d.u.b,(((a.bZ.g.a-h|0)-a.c3|0)-a.cW|0)-(a.dx*2|0)|0,b.b);}
function KB(b,c){var d,e;d=b.u;e=b.bP;d.a=e.bf+c|0;d.b=e.bt|0;b=b.g;b.a=e.bl|0;b.b=e.bu|0;}
function Wi(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;Bc(a.bZ.u,b,c);d=a.dx;e=a.bm.data;f=e.length;g=0;h=b+d|0;while(g<f){i=e[g];j=i.bW;k=i.ck;l=i.cC;m=j.u;m.a=h;n=c+d|0;m.b=n;m=k.u;b=a.cW;o=j.g;m.a=h+(b-o.a|0)|0;m.b=n;m=l.u;m.a=(h+(b-o.a|0)|0)+(a.c3-k.g.a|0)|0;m.b=n;if(!Ew(i.eg,B(278))){LZ(a,i);m=i.dJ.u;m.a=h+j.g.a|0;m.b=n;m=i.dz.u;m.a=(h+k.u.a|0)+k.g.a|0;m.b=n;m=i.d3.u;m.a=(h+l.u.a|0)+l.g.a|0;m.b=n;}if(!(j.g.b&&k.g.b&&l.g.b))$rt_globals.console.info("FindUsages.setPos: tRect.size == 0");d=d+(j.g.b+a.dx|0)|0;g=g+
1|0;}}
function U0(a){var b,c;b=a.eq;if(b.a&&b.b)return a.bZ.g;c=new Bm;Bj(c,B(305));J(c);}
function Uo(a){Bc(a.eq,0,0);}
function AAH(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(!a.bm.data.length)return;a:{if(a.ei!==null){c=a.eq;if(Bd(c.a,c.b))break a;}c=a.eq;if(!Bd(c.a,c.b))Lc(a,b);c=a.eq;d=c.a;e=c.b;if(!Bd(d,e))return;c=b.c4;f=CJ(c,d+150|0,e);CC(f,a.eu);g=a.eu;h=g.dg;h=h-(h+g.dZ)/16.0;i=a.bm.data;d=i.length;e=0;while(e<d){g=i[e];j=g.eg;k=g.bW.bP;Ce(f,j,k.bf+a.hk,h+k.bt);j=g.iE;k=g.ck.bP;Ce(f,j,k.bf+a.hk,h+k.bt);j=g.iQ;g=g.cC.bP;Ce(f,j,g.bf+a.hk,h+g.bt);e=e+1|0;}c=CK(a.ei,CS(c));a.ei=c;CM(c,f);FB(f);}c=b.c4;Cv(c,1);if(!Ib(a.bZ)){f=a.bZ;U7(c,
f.g,f.u,f.U,a.dx,a.f7);f=a.bZ;Yn(c,f.g,f.u,f.N,a.dx,a.f7);f=a.bZ;TZ(c,f.g,f.u,0,0,JI(a.lC,b.bH),a.lC.iU,a.f7);}i=a.bm.data;l=i.length;m=0;while(m<l){f=i[m];LZ(a,f);CL(f.bW,c,a.ei,0,0,1.0);CL(f.ck,c,a.ei,f.bW.g.a,0,1.0);CL(f.cC,c,a.ei,f.bW.g.a+f.ck.g.a|0,0,1.0);Gv(f.dJ,c,0,0);Gv(f.dz,c,0,0);Gv(f.d3,c,0,0);if(ATL){(GO(1.0,1.0,1.0,f.dJ.N)).bu=0.30000001192092896;(GO(0.2,1.0,1.0,f.dz.N)).bu=0.30000001192092896;(GO(0.5,1.0,1.0,f.d3.N)).bu=0.30000001192092896;}m=m+1|0;}i=a.bm.data;e=i.length;l=0;while(l<e){f=i[l];g
=f.bW;j=f.ck;k=f.cC;b=a.f7;d=a.bZ.g.a-(a.dx*2|0)|0;c=g.g;b.a=d-c.a|0;b.b=(c.b+j.g.b|0)+k.g.b|0;l=l+1|0;}}
function RV(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.bm.data;if(c>=d.length)return (-1);e=d[c].bW;if(DU(e,b))return c;f=e.u;g=f.a;e=e.g;h=e.a;g=g+h|0;i=f.b;f=a.f7;f.a=(a.bZ.g.a-(a.dx*2|0)|0)-h|0;f.b=e.b;if(Nz(b,g,i,f))break;c=c+1|0;}return c;}
function AAR(){ATL=0;}
function UU(){C.call(this);this.tX=null;}
function ABu(){var a=this;C.call(a);a.iv=null;a.g6=null;a.oV=null;a.o3=null;}
function AJw(a,b,c,d){var e=new ABu();AOL(e,a,b,c,d);return e;}
function AOL(a,b,c,d,e){a.iv=b;a.g6=c;a.oV=d;a.o3=e;}
function W0(){C.call(this);this.qO=null;}
function ALF(a,b){var c;c=a.qO.h6;c.dG=Fx(b,OU(c));}
function MW(){C.call(this);this.nd=null;}
function Ds(a,b){Gf(a.nd,b);return 1;}
var Dq=F(0);
var ATo=null;var ATE=null;var ATm=null;var ATM=null;var ATn=null;var ATp=null;var ATN=null;var ATl=null;var ATk=null;function EE(){EE=Bo(Dq);AHA();}
function AHA(){ATo=W5(50,50,50,100);ATE=W5(80,80,80,200);ATm=Bq(B(306));ATM=Bq(B(275));ATn=Bq(B(307));ATp=Bq(B(306));ATN=Bq(B(275));ATl=Bq(B(307));Dm();ATk=ATc;}
var Z0=F();
function OG(){C.call(this);this.mH=null;}
function AIb(a,b){var c;c=a.mH.iH;c.ej=Fx(b,QJ(c));}
function UZ(){C.call(this);this.gl=null;}
function ADc(a,b){return JJ(a.gl,b);}
function AMe(a,b,c,d){return IJ(a.gl,b,c,d);}
function ANa(a,b,c){return I9(a.gl,b,c);}
function AH5(a,b,c){return DQ(a.gl);}
function Ql(){C.call(this);this.lL=null;}
function ADg(a,b){return Ds(a.lL,null);}
var Yr=F();
function Jq(){var a=this;C.call(a);a.E=null;a.c0=null;a.dS=null;a.ec=null;a.e6=null;a.cq=0;a.fo=0;a.oJ=0.0;}
function ALu(){var a=new Jq();AM0(a);return a;}
function AM0(a){a.dS=HE();a.ec=HE();a.e6=Ck();a.E=L3(B(31));a.fo=0;a.cq=0;a.c0=S_(a);}
function S_(a){var b,c,d,e,f,g,h,i;b=Sl(a);c=new Id;d=new MY;e=M8(0,b,0);f=new WG;f.sm=e;LX(d,1);e=BR(f);g=0;while(true){h=d.cd.data;i=h.length;if(g>=i)break;h[g]=BV(e);g=g+1|0;}d.j=i;Tg(c,d);return c;}
function B0(a,b){return a.E.data[b];}
function CB(a){return a.E.data.length;}
function Sl(a){return FV(a,CB(a));}
function E7(a,b){return a.E.data[b].P;}
function Kf(a,b){var c,d,e,f,g,h,i;c=a.E.data;d=c[b];e=c[b+1|0];f=DC(KS(d.q,e.q));g=a.E;h=g.data.length;if(b<h&&b>=0){i=R(Cx,h-1|0);c=i.data;P0(g,b,i);c[b]=f;a.E=i;return;}d=new Bm;U(d);J(d);}
function Oh(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.E.data;if(!(c<d[b].P?0:1)){d=(B0(a,b)).q.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.w)){f=L(h.w,g);break a;}g=g-I(h.w)|0;f=f+1|0;}f=0;}Ez();h=new Bv;d=BL(1);d.data[0]=f;G3(h,d);Gj(a,b,c,1,h);h=a.E.data[b];i=h.q;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].w);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].w)==1)h.q=P0(i,j,R(B4,e-1|0));else{k=d[j];if(c<=0)l=Dt(Dr(k.w,1),k.cF,k.b8);else if(c>=(I(k.w)-1|0)){l=new B4;m=k.w;Uk(l,B7(m,0,I(m)-
1|0),k.cF,k.b8);}else{i=BL(I(k.w)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.w,b);b=b+1|0;}b=n.length;while(c<b){m=k.w;e=c+1|0;n[c]=L(m,e);c=e;}l=Dt(FG(i),k.cF,k.b8);}d[j]=l;}h.P=h.P-1|0;D5(h);}else if(b!=(d.length-1|0))Kf(a,b);}
function WR(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Wc(a.E.data[b],c,e[0]);return;}g=f-1|0;h=H6(a.E.data[b],c);d=a.E;i=Da(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.q.data;m=l.length;c=!m?0:I(l[m-1|0].w);IU(j,j.q.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(E_(e[m]))j=DC(R(B4,0));else{j=new Cx;l=R(B4,1);l.data[0]=Dt(e[m],0,0);HG(j,l);}d[b+m|0]=j;m=m+1|0;}IU(h[1],0,0,e[g]);d[b+g|0]=h[1];a.E
=i;}
function U9(a,b){var c,d,e,f,g,h,i;c=DR(b);d=Fi(b);e=c.K;if(e==d.K)return B7(Ex(a.E.data[e]),c.X,d.X);f=new M;O(f);b=a.E.data[c.K];e=c.X;BB(BX(f,Dr(Ex(b),e)),10);g=a.E;h=c.K+1|0;e=d.K;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;Xj(BX(f,Ex(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.E.data[d.K];i=d.X;BX(f,B7(Ex(b),0,i));return N(f);}}b=new VF;U(b);J(b);}
function Sn(a,b,c){var d;TM(a,b);d=DR(b);Gj(a,d.K,d.X,1,c);}
function TM(a,b){var c,d,e,f,g,h,i;a:{c=DR(b);d=Fi(b);e=c.K;if(e==d.K)FF(a.E.data[e],c.X,d.X);else{b=a.E.data[e];FF(b,c.X,b.P);FF(a.E.data[d.K],0,d.X);e=c.K+1|0;f=d.K;g=a.E;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(Cx,(h-f|0)+e|0);Zb(g,e,f,i);a.E=i;Kf(a,c.K);break a;}b=new Bm;U(b);J(b);}b=new Bm;U(b);J(b);}}}
function OO(a,b,c){return EF(b,GD(B0(a,b),c));}
function Wx(a,b){b.bL=GD(B0(a,b.bD),b.bL);}
function MJ(a,b){var c,d,e;c=0;d=0;while(true){e=a.E.data.length;if(c>=e)break;if((d+(B0(a,c)).P|0)>=b)return Cf(c,b-d|0);d=d+((B0(a,c)).P+1|0)|0;c=c+1|0;}return Cf(e,0);}
function FV(a,b){var c,d,e;c=0;d=a.E.data.length;e=0;while(e<b){c=c+E7(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Pg(a,b){return TV(B0(a,b.bD),b.bL);}
function F6(a){var b,c,d,e,f,g,h,i,j;b=BL(Sl(a));c=b.data;d=a.E.data.length;e=0;f=0;while(e<d){g=a.E.data[e].q.data;h=g.length;i=0;while(i<h){j=g[i].w;OK(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gj(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cq=a.cq+1|0;f=a.e6;g=R(GH,1);h=new GH;h.es=b;h.e2=c;i=K7(e,B(229),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=Cf(b,c+I(i[0])|0);break a;}k=Cf((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=Cf(b,c);}i=g.data;h.kh=k;h.i8=d;h.gE=e;i[0]=h;BW(f,g);I0(a,b,c,d,e);}
function I0(a,b,c,d,e){var f;f=FV(a,b)+c|0;if(!d)OI(a.c0,f,I(e));else SX(a.c0,f,I(e));}
function Sf(a,b){var c,d,e;c=K7(b.gE,B(229),(-1));if(b.i8){WR(a,b.es,b.e2,c);OI(a.c0,FV(a,b.es)+b.e2|0,I(b.gE));}else{c=c.data;d=AKQ();BZ(d.bM,b.es,b.e2);e=c.length;if(e==1)BZ(d.bB,b.es,b.e2+I(c[0])|0);else BZ(d.bB,(b.es+e|0)-1|0,I(c[e-1|0]));TM(a,d);SX(a.c0,FV(a,b.es)+b.e2|0,I(b.gE));}return b.kh;}
function Ot(a){a.fo=a.cq;}
var EJ=F();
function Lr(){EJ.call(this);this.u3=null;}
function LQ(){EJ.call(this);this.u_=null;}
function Pa(){EJ.call(this);this.wd=null;}
var H3=F(0);
var Qf=F(0);
function F$(){var a=this;C.call(a);a.K=0;a.X=0;}
function BZ(a,b,c){a.K=b;a.X=c;}
function Wf(a,b){a.K=b.K;a.X=b.X;}
function WK(a,b){var c;c=BD(a.K,b.K);if(c)return c;return BD(a.X,b.X);}
function IE(){var a=this;C.call(a);a.kC=null;a.li=null;}
function Ip(a){return a.kC.bD;}
function KV(a){return a.kC.bL;}
var JU=F(FX);
var ASu=null;function AGp(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function ACK(){var b;b=new JU;WX(b);ASu=b;}
var AB_=F();
function HY(b,c){var d,e,f;if(c<=0)return B(31);d=BL(c);e=d.data;e[0]=AA3(HO(b,52));f=1;while(f<c){e[f]=AA3(HO(b,62));f=f+1|0;}return FG(d);}
function AA3(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
function WB(){C.call(this);this.kA=null;}
var ATC=null;function AK4(){var a=new WB();Yz(a);return a;}
function Yz(a){a.kA=Ck();}
function KM(a,b,c,d,e,f){var g;g=new JA;g.bW=J9();g.ck=J9();g.cC=J9();g.dJ=J3();g.dz=J3();g.d3=J3();g.eg=b;g.iE=c;g.iQ=d;g.ct=e;g.km=f;Bh(g.bW.N,e.jG);Bh(g.bW.U,e.bF);Bh(g.ck.N,e.lf);Bh(g.ck.U,e.bF);Bh(g.cC.N,e.lt);Bh(g.cC.U,e.bF);Bh(g.dJ.N,e.bF);Bh(g.dz.N,e.bF);Bh(g.d3.N,e.bF);BW(a.kA,g);}
function PB(a){return Hm(a.kA,ATC);}
function Y6(){ATC=R(JA,0);}
var Y8=F();
function ACx(){var a=this;C.call(a);a.Cx=null;a.Aj=null;a.Bq=0;a.AY=0;}
function Zv(){var a=this;C.call(a);a.ue=null;a.Cf=null;}
var ABX=F(0);
function ABG(b){var c;a:{switch(b){case 0:break;case 1:c=B(132);break a;case 2:c=B(253);break a;case 3:c=B(252);break a;default:c=null;break a;}c=B(160);}return c;}
var CP=F();
var AAl=F(CP);
var AA2=F(CP);
var Yj=F(CP);
var YE=F(CP);
var ABv=F(CP);
function ZF(){var a=this;Ep.call(a);a.gk=0;a.cO=null;a.ge=0;a.tT=0.0;a.j8=0;}
function HE(){var a=new ZF();AFX(a);return a;}
function AFX(a){var b;b=ACa(16);a.gk=0;a.cO=R(HJ,b);a.tT=0.75;TT(a);}
function ACa(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function TT(a){a.j8=a.cO.data.length*a.tT|0;}
function MU(a,b){return RX(a,b)===null?0:1;}
function Ej(a,b){var c;c=RX(a,b);if(c===null)return null;return c.fB;}
function RX(a,b){var c,d;if(b===null)c=Q8(a);else{d=X6(b);c=O$(a,b,d&(a.cO.data.length-1|0),d);}return c;}
function O$(a,b,c,d){var e,f;e=a.cO.data[c];while(e!==null){if(e.ky==d){f=e.hE;if(b!==f&&!Xq(b,f)?0:1)break;}e=e.eY;}return e;}
function Q8(a){var b;b=a.cO.data[0];while(b!==null&&b.hE!==null){b=b.eY;}return b;}
function R_(a,b,c){var d,e,f;if(b===null){d=Q8(a);if(d===null){a.ge=a.ge+1|0;d=TE(a,null,0,0);e=a.gk+1|0;a.gk=e;if(e>a.j8)T9(a);}}else{e=X6(b);f=e&(a.cO.data.length-1|0);d=O$(a,b,f,e);if(d===null){a.ge=a.ge+1|0;d=TE(a,b,f,e);e=a.gk+1|0;a.gk=e;if(e>a.j8)T9(a);}}b=d.fB;d.fB=c;return b;}
function TE(a,b,c,d){var e,f,g;e=new HJ;f=null;e.hE=b;e.fB=f;e.ky=d;g=a.cO.data;e.eY=g[c];g[c]=e;return e;}
function T9(a){var b,c,d,e,f,g,h,i;b=a.cO.data.length;b=ACa(!b?1:b<<1);c=R(HJ,b);d=c.data;e=0;f=b-1|0;while(true){g=a.cO.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.ky&f;i=h.eY;h.eY=d[b];d[b]=h;h=i;}e=e+1|0;}a.cO=c;TT(a);}
function X6(b){var c,d,e,f,g,h;c=R(C,2).data;c[0]=FL(b.bD);c[1]=FL(b.bL);d=(-1515898884);e=0;while(e<c.length){b=c[e];if(b===null)f=0;else{g=b.fc;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;d=Jr(h,4)^((h>>>7|0)|h<<25)^Jr(d,13);e=e+1|0;}return d;}
function Cx(){var a=this;C.call(a);a.q=null;a.P=0;a.e$=null;a.dV=null;a.dd=null;a.gD=null;a.fv=0;a.hy=0;a.hc=0;}
var ATO=0;var ATP=0;var ATw=0;function DC(a){var b=new Cx();HG(b,a);return b;}
function HG(a,b){var c,d,e,f;c=b.data;a.q=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].w)|0;f=f+1|0;}a.P=d;D5(a);}
function GD(a,b){var c;c=HU(a,b);return c<=0?0:a.dd.data[c-1|0];}
function HU(a,b){var c,d,e,f;c=a.q.data.length;if(!c)return (-1);if(!(a.dd!==null&&!a.hc)){Vt(a);d=0;e=0;f=a.q.data.length;while(d<f){e=e+I(a.q.data[d].w)|0;a.dd.data[d]=e;d=d+1|0;}a.hc=0;}d=S0(a.dd,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function TV(a,b){var c;c=a.q.data;if(!c.length)return null;return c[HU(a,b)];}
function FF(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.P){a.q=R(B4,0);D5(a);a.P=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.q.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].w);i=I(a.q.data[f].w);j=BD(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.q.data[f];if(!b&&c==I(k.w)?1:0){g=a.q;a.q=P0(g,e,R(B4,g.data.length-1|0));a.P=a.P-d|0;D5(a);return;}a.q.data[e]=Dt(EZ(B7(k.w,0,b),Dr(k.w,c)),k.cF,k.b8);}else{g=a.q.data;l=g[e];m=g[f];if(b){if(b!=
I(l.w))a.q.data[e]=Dt(B7(l.w,0,b),l.cF,l.b8);e=e+1|0;}if(c==I(m.w))f=f+1|0;else if(c)a.q.data[f]=Dt(Dr(m.w,c),m.cF,m.b8);g=a.q;a.q=Zb(g,e,f,R(B4,(g.data.length-f|0)+e|0));}a.P=a.P-d|0;D5(a);}
function H6(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(Cx,[DC(R(B4,0)),a]);if(b>=a.P)return H(Cx,[a,DC(R(B4,0))]);c=a.q;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].w);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(Cx,[DC(J$(c,0,R(B4,d))),DC(J$(c,d,R(B4,f-d|0)))]);h=e[d];e=J$(c,0,R(B4,d+1|0));i=e.data;j=J$(c,d,R(B4,f-d|0));c=j.data;i[d]=Dt(B7(h.w,0,b),h.cF,h.b8);c[0]=Dt(Dr(h.w,b),h.cF,h.b8);return H(Cx,[DC(e),DC(j)]);}
function Wc(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.q.data;if(e>=f.length)break a;g=I(f[d].w);if(b<=g)break;b=b-g|0;d=e;}}IU(a,d,b,c);}
function IU(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.q;f=e.data;g=f.length;if(!g){h=R(B4,1);h.data[0]=QU(d);a.q=h;}else if(!b&&!c){i=R(B4,g+1|0);h=i.data;D7(e,0,i,1,g);h[0]=QU(d);a.q=i;}else{j=f[b];if(c<=0)k=Dt(EZ(d,j.w),j.cF,j.b8);else if(c>=I(j.w))k=Dt(EZ(j.w,d),j.cF,j.b8);else{l=I(d);m=l+c|0;n=I(j.w)-c|0;h=BL(I(j.w)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.w,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.w,g+c|0);g=g+1|0;}k=Dt(FG(h),j.cF,j.b8);}f[b]=k;}a.P=a.P+I(d)|0;D5(a);}
function Wd(a){var b,c,d,e,f,g;b=0;c=a.q.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<I(f.w)){if(L(f.w,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Kr(a,b,c){var d,e,f,g,h,i,j;d=a.q.data.length;e=a.e$;if(!(e!==null&&e.data.length>=d)){a.e$=AC2(d);a.dV=BG(d);a.fv=1;}Vt(a);if(!a.fv)ATP=ATP+1|0;else{f=0;g=0.0;ATO=ATO+1|0;h=0;while(h<d){i=c.data;j=a.q.data[h];f=f+I(j.w)|0;a.dd.data[h]=f;CC(b,i[j.b8]);g=g+Ef(b,j.w);a.e$.data[h]=g;a.dV.data[h]=g+0.5|0;h=h+1|0;}a.P=f;a.fv=0;a.hc=0;}}
function Vt(a){var b;b=a.dd;if(!(b!==null&&b.data.length>=a.q.data.length)){a.dd=BG(a.q.data.length);a.hc=1;}}
function D5(a){a.fv=1;a.hy=1;a.hc=1;a.gD=null;}
function VM(a,b,c,d){var e,f,g,h,i,j,k;if(a.gD===null)a.gD=R($rt_arraycls($rt_intcls()),a.q.data.length);e=a.gD.data[d];if(e===null){e=c.data;f=a.q.data[d];CC(b,e[f.b8]);f=f.w;e=BG(I(f)-1|0);c=Gg(f);g=!d?0.0:a.e$.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;W1(f,c,0,k);h[i]=g+Ef(b,f)+0.5|0;i=k;}a.gD.data[d]=e;}return e;}
function GF(a,b,c,d){var e,f,g,h,i;if(a.q.data.length&&b){if(!(!a.fv&&a.dV!==null))Kr(a,c,d);if(b>=a.P)return a.dV.data[a.q.data.length-1|0];e=0;f=0;a:{while(true){g=a.q.data;if(f>=g.length)break a;h=e+I(g[f].w)|0;i=BD(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.dV.data[f];}return (VM(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function EM(a){var b,c,d;a:{b=a.q.data.length;if(b){c=a.dV.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GA(a,b){var c;if(b>=a.P)return b+1|0;c=HU(a,b);return a.dd.data[c];}
function Ex(a){var b,c,d,e;b=new M;FJ(b,a.P);c=a.q.data;d=c.length;e=0;while(e<d){BX(b,c[e].w);e=e+1|0;}return N(b);}
function L3(b){var c,d,e,f;c=R(Cx,1);d=c.data;e=new Cx;f=R(B4,1);f.data[0]=QU(b);HG(e,f);d[0]=e;return c;}
function Xp(){ATw=0;}
var MN=F();
function AOJ(a){}
function Tk(){C.call(this);this.sn=null;}
function AJm(a){var b;b=a.sn;Bu(Bx(),b);}
function B4(){var a=this;C.call(a);a.w=null;a.cF=0;a.b8=0;}
function QU(a){var b=new B4();ANE(b,a);return b;}
function Dt(a,b,c){var d=new B4();Uk(d,a,b,c);return d;}
function ANE(a,b){Uk(a,b,0,0);}
function Uk(a,b,c,d){a.w=b;a.cF=c;a.b8=d;}
function G1(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Id(){var a=this;C.call(a);a.cH=null;a.dL=0;}
var ATQ=null;var ATR=null;function AQW(a){var b=new Id();Tg(b,a);return b;}
function AP1(a,b){var c=new Id();WW(c,a,b);return c;}
function Uw(b,c){var d;d=BD(b.bI,c.bI);if(!d)d=BD(c.bO,b.bO);return d;}
function Tg(a,b){WW(a,null,b);}
function WW(a,b,c){var d,e;a.dL=0;if(D3(c))return;Nc(c,ATQ);if(b!==null)a.cH=LS(b);c=BR(c);while(B1(c)){d=BV(c);e=a.cH;if(e!==null){P3(a,e,LS(d));continue;}a.cH=LS(d);}}
function Oj(a,b){var c;if(b.eI)return b;b=BR(b.bw);while(true){if(!B1(b))return null;c=Oj(a,BV(b));if(c!==null)break;}return c;}
function JO(a,b,c){var d,e,f;d=b.b3;if(d.bI==c.bI&&d.bO==c.bO?1:0){e=BR(b.bw);while(B1(e)){f=JO(a,BV(e),c);if(f!==null)return f;}return b;}b=BR(b.bw);while(true){if(!B1(b))return null;d=BV(b);if(Pf(d,c.bI,c.bO)){e=JO(a,d,c);if(e!==null)break;}}return e;}
function Vu(a,b,c){BW(c,b.b3);b=BR(b.bw);while(B1(b)){Vu(a,BV(b),c);}}
function OI(a,b,c){a.dL=0;IC(a,a.cH,b,c);}
function IC(a,b,c,d){var e;if(C2(b)<c)return;a:{if(CV(b)>c){JN(b,d);FK(b,d);b=BR(b.bw);while(B1(b)){IC(a,BV(b),c,d);}}else{if(!Jv(b,c)){if(a.dL)break a;if(C2(b)!=c)break a;}FK(b,d);if(CV(b)==c&&a.dL)JN(b,d);e=BR(b.bw);while(B1(e)){IC(a,BV(e),c,d);}if(!a.dL){b.eI=1;a.dL=1;}}}}
function SX(a,b,c){a.dL=0;Lv(a,a.cH,b,c);}
function Lv(a,b,c,d){var e,f,g,h;if(C2(b)<c)return;e=CV(b);f=c+d|0;if(e>f){e= -d|0;JN(b,e);FK(b,e);g=BR(b.bw);while(B1(g)){Lv(a,BV(g),c,d);}b.bw=MP(a,b.bw);}else{g=b.b3;if(c<=g.bI&&g.bO<=f?1:0){if(b!==a.cH){IL(b,(-1));Js(b,(-1));}else{IL(b,0);Js(b,0);}G9(b.bw);}else{e=Jv(b,c);f=Jv(b,f);if(e&&f)FK(b, -d|0);else if(e)Js(b,c);else{if(!f)return;IL(b,c);FK(b, -d|0);}h=BR(b.bw);while(B1(h)){Lv(a,BV(h),c,d);}b.bw=MP(a,b.bw);if(!a.dL){b.eI=1;a.dL=1;}}}}
function MP(a,b){var c,d,e,f,g,h;c=Ck();d=null;Nc(b,ATR);b=BR(b);while(B1(b)){e=BV(b);if(CV(e)==C2(e))continue;if(!e.eI){if(d!==null){BW(c,d);d=null;}BW(c,e);}else if(d===null)d=e;else{f=X(CV(d),CV(e));g=V(C2(d),C2(e));h=LS(M8(f,g,d.b3.e0));h.dv=e.dv;h.eI=1;d=h;}}if(d!==null)BW(c,d);return c;}
function P3(a,b,c){var d,e;a:{if(NK(b,c)){d=BR(b.bw);while(true){if(!B1(d)){BW(b.bw,c);c.dv=b;break a;}e=BV(d);if(NK(e,c))break;}P3(a,e,c);return;}}}
function Q9(a,b,c,d){var e,f,g,h,i,j;if((C2(c)-CV(c)|0)<43)e=B7(d,CV(c),C2(c));else{e=B7(d,CV(c),CV(c)+20|0);f=B7(d,C2(c)-20|0,C2(c));g=new M;O(g);G(G(G(g,e),B(278)),f);e=N(g);}e=Ue(e,B(229),B(308));f=Bx();g=Cu(c);h=new M;O(h);i=S(h,b);BB(i,32);g=G(i,g);BB(g,9);G(g,e);Bu(f,N(h));c=BR(c.bw);j=b+1|0;while(B1(c)){Q9(a,j,BV(c),d);}}
function AAF(){ATQ=new Wo;ATR=new Wq;}
function JA(){var a=this;C.call(a);a.bW=null;a.ck=null;a.cC=null;a.dJ=null;a.dz=null;a.d3=null;a.km=null;a.ct=null;a.eg=null;a.iE=null;a.iQ=null;}
function F9(a,b){Bh(a.bW.U,!b?a.ct.bF:a.ct.eR);Bh(a.ck.U,!b?a.ct.bF:a.ct.eR);Bh(a.cC.U,!b?a.ct.bF:a.ct.eR);Bh(a.dJ.N,!b?a.ct.bF:a.ct.eR);Bh(a.dz.N,!b?a.ct.bF:a.ct.eR);Bh(a.d3.N,!b?a.ct.bF:a.ct.eR);}
function ACd(){var a=this;C.call(a);a.bI=0;a.bO=0;a.e0=0;}
function M8(a,b,c){var d=new ACd();AF3(d,a,b,c);return d;}
function AF3(a,b,c,d){a.bI=b;a.bO=c;a.e0=d;}
function AMZ(a,b){var c;if(a===b)return 1;if(b!==null&&Cz(a)===Cz(b)){c=b;return a.bI==c.bI&&a.bO==c.bO&&a.e0==c.e0?1:0;}return 0;}
function AEC(a,b){var c;b=b;c=BD(a.bI,b.bI);if(!c)c=BD(b.bO,a.bO);return c;}
var Wo=F();
function AG$(a,b,c){return Uw(b,c);}
var Wq=F();
function AIN(a,b,c){b=b;c=c;return Uw(b.b3,c.b3);}
var EK=F();
var ATS=null;var ATT=null;var ATU=null;var ATV=null;var ATW=null;var ATX=null;function AAc(){ATS=new UE;ATT=new UC;ATU=new UD;ATV=new UA;ATW=new UB;ATX=new WZ;}
var GL=F(FR);
function AJD(a,b){var c;c=new E4;U(c);J(c);}
function WG(){GL.call(this);this.sm=null;}
function AGn(a){return 1;}
function AOy(a,b){var c;if(!b)return a.sm;c=new By;U(c);J(c);}
function Xn(){var a=this;C.call(a);a.b3=null;a.dv=null;a.bw=null;a.eI=0;}
function LS(a){var b=new Xn();ALk(b,a);return b;}
function ALk(a,b){a.eI=0;a.b3=b;a.dv=null;a.bw=Ck();}
function CV(a){return a.b3.bI;}
function C2(a){return a.b3.bO;}
function IL(a,b){a.b3.bI=b;}
function Js(a,b){a.b3.bO=b;}
function JN(a,b){var c;c=a.b3;c.bI=c.bI+b|0;}
function FK(a,b){var c;c=a.b3;c.bO=c.bO+b|0;}
function Jv(a,b){return CV(a)<=b&&b<C2(a)?1:0;}
function Pf(a,b,c){var d;d=a.b3;return d.bI<=b&&c<=d.bO?1:0;}
function NK(a,b){b=b.b3;return Pf(a,b.bI,b.bO);}
function AHe(a){var b,c,d,e,f;b=a.b3;c=b.bI;d=b.bO;e=b.e0;b=new M;O(b);BB(b,40);BB(S(G(S(G(S(b,c),B(43)),d),B(43)),e),41);b=N(b);c=a.eI;f=new M;O(f);FQ(G(G(f,b),B(43)),c);return N(f);}
var NX=F(0);
var FZ=F(EA);
var Jt=F(FZ);
var UE=F(Jt);
var KE=F(Ep);
var UC=F(KE);
var UD=F(GL);
var Fp=F(0);
var UA=F();
var Op=F(0);
var UB=F();
var WZ=F();
function KC(){var a=this;C.call(a);a.iK=null;a.pJ=null;a.r1=null;a.ud=null;a.lT=null;a.kN=null;a.p3=null;a.mN=null;a.bi=null;a.nR=null;a.tK=null;}
function ATY(a,b,c,d,e,f,g,h,i,j,k){var l=new KC();Mx(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Mx(a,b,c,d,e,f,g,h,i,j,k,l){var m;m=j.data;a.iK=b;a.pJ=c;a.r1=d;a.ud=e;a.lT=f;a.kN=g;a.p3=h;a.mN=i;a.nR=j;a.tK=k;if(m.length>=15){a.bi=l;return;}b=new BA;U(b);J(b);}
function MF(){var a=this;C.call(a);a.ha=0;a.lo=0;a.hW=0;a.fP=0;a.gp=null;}
function B1(a){return a.ha>=a.hW?0:1;}
function BV(a){var b,c;Oc(a);b=a.ha;a.fP=b;c=a.gp;a.ha=b+1|0;return c.qI(b);}
function PL(a){var b,c,d;if(a.fP<0){b=new DM;U(b);J(b);}Oc(a);a.gp.tk(a.fP);a.lo=a.gp.cs;c=a.fP;d=a.ha;if(c<d)a.ha=d-1|0;a.hW=a.hW-1|0;a.fP=(-1);}
function Oc(a){var b;if(a.lo>=a.gp.cs)return;b=new K2;U(b);J(b);}
var YW=F();
function UX(){C.call(this);this.iP=null;}
function AMD(a,b){var c,d,e,f,g;c=a.iP;d=c.jp;if(d!==null){e=b.k;f=e.a-d.a|0;g=e.b-d.b|0;e=c.hQ;e.a=GW(0,e.a+f|0,c.gg.a-c.g_.a|0);c=a.iP;d=c.hQ;d.b=GW(0,d.b+g|0,c.gg.b-c.g_.b|0);}a.iP.jp=b.k;return 1;}
var Y5=F();
function JP(){var a=this;C.call(a);a.hE=null;a.fB=null;}
function HJ(){var a=this;JP.call(a);a.ky=0;a.eY=null;}
function T6(){C.call(this);this.rb=null;}
function AHI(a,b){Hk(a.rb,b);}
function U4(){C.call(this);this.h$=null;}
function AOO(a){return a.h$;}
function Cd(){Cq.call(this);this.kv=null;}
var ATZ=null;var AT0=null;var AT1=null;var AT2=null;var AT3=null;var AT4=null;var AT5=null;var AT6=null;var AT7=null;var AT8=null;var AT9=null;var AT$=null;var AT_=null;var AUa=null;var AUb=null;var ATb=null;function Yg(){Yg=Bo(Cd);AOo();}
function Dk(a,b,c){var d=new Cd();Sd(d,a,b,c);return d;}
function AOq(a,b,c,d){var e=new Cd();AAk(e,a,b,c,d);return e;}
function Sd(a,b,c,d){Yg();DB(a,b,c);a.kv=So(d,null);}
function AAk(a,b,c,d,e){Yg();DB(a,b,c);a.kv=So(d,e);}
function AOo(){var b;b=new Cd;Dm();Sd(b,B(309),0,AS4);ATZ=b;AT0=Dk(B(310),1,Cw(204,120,50));AT1=Dk(B(311),2,Bq(B(312)));AT2=Dk(B(313),3,Bq(B(314)));AT3=Dk(B(315),4,Bq(B(316)));AT4=Dk(B(317),5,Cw(188,63,60));AT5=Dk(B(318),6,Bq(B(319)));AT6=Dk(B(320),7,Bq(B(321)));AT7=Dk(B(322),8,Bq(B(323)));AT8=AOq(B(324),9,AS4,Cw(52,65,52));AT9=AOq(B(325),10,Bq(B(326)),Bq(B(327)));AT$=Dk(B(328),11,Bq(B(329)));AT_=Dk(B(330),12,Bq(B(331)));AUa=Dk(B(332),13,Bq(B(333)));b=Dk(B(334),14,Bq(B(335)));AUb=b;ATb=H(Cd,[ATZ,AT0,AT1,AT2,
AT3,AT4,AT5,AT6,AT7,AT8,AT9,AT$,AT_,AUa,b]);}
function IH(){var a=this;C.call(a);a.q6=null;a.q7=null;}
function So(a,b){var c=new IH();AEg(c,a,b);return c;}
function AEg(a,b,c){a.q6=b;a.q7=c;}
function WV(){var a=this;C.call(a);a.M=null;a.Q=null;a.p=null;a.gh=null;}
function C_(a,b,c){var d;d=a.p;d.il(b,c,d.dD);Jf(a);}
function Jf(a){var b,c,d,e;b=a.Q;c=a.p.o.a;b.o.a=c;d=b.c1;if(d!==null&&c!=B_(d)&&!(c>=b.hg&&B_(b.c1)>=b.hg))b.go=1;b=a.Q;b.dD=a.M.bH;if(SV(b))c=0;else{b=a.Q;PR(b);e=Cs(b.gw,b.ii);WI(b,FE(b.dC)+(e*2|0)|0);c=b.o.b;}b=a.Q.x;d=a.p.x;Bc(b,d.a,d.b-c|0);}
function AA$(a,b){var c,d,e,f,g,h,i,j,k,l;if(Fk(a.Q,b))return Ds(a.M.cw,null);c=Cs(a.M,7.0);d=Cs(a.M,25.0);e=L5(a,b.b,c);f=UK(a,b.a,c);g=TR(a,b.a,d);h=QM(a,b.b,d);i=f&&Ox(a,b.b,c)?1:0;j=e&&Ne(a,b.a,c)?1:0;k=e&&SJ(a,b.a,c)?1:0;l=f&&Pe(a,b.b,c)?1:0;if(i)return Ds(a.M.cw,g<0?B(336):g<=0?B(162):B(337));if(j)return Ds(a.M.cw,h<0?B(336):h<=0?B(161):B(337));if(k)return Ds(a.M.cw,h<0?B(337):h<=0?B(161):B(336));if(!l)return 0;return Ds(a.M.cw,g<0?B(337):g<=0?B(162):B(336));}
function Ne(a,b,c){var d;d=a.Q.x.a;return (d-c|0)<=b&&b<d?1:0;}
function SJ(a,b,c){var d,e;d=a.Q;e=d.x.a+d.o.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Ox(a,b,c){var d;d=a.Q.x.b;return (d-c|0)<=b&&b<d?1:0;}
function Pe(a,b,c){var d,e;d=a.p;e=d.x.b+d.o.b|0;return e<=b&&b<(e+c|0)?1:0;}
function L5(a,b,c){var d,e,f;d=a.Q.x.b-c|0;e=a.p;f=(e.x.b+e.o.b|0)+c|0;return d<=b&&b<f?1:0;}
function QM(a,b,c){var d,e;d=a.Q.x.b+c|0;e=a.p;return AA6(b,d,(e.x.b+e.o.b|0)-c|0);}
function UK(a,b,c){var d,e,f;d=a.Q;e=d.x.a;f=e-c|0;e=(e+d.o.a|0)+c|0;return f<=b&&b<e?1:0;}
function TR(a,b,c){var d,e;d=a.Q;e=d.x.a;return AA6(b,e+c|0,(e+d.o.a|0)-c|0);}
function AA6(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BD(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function TB(a,b){var c,d,e,f,g,h,i,j,k;c=new Ba;d=new Ba;e=b.a;f=b.b;b=a.p;g=b.x;h=g.b;i=g.a;b=b.o;j=b.b;k=b.a;b=new NP;b.mu=a;b.mv=f;b.mx=h;b.mp=j;b.mq=e;b.mr=i;b.ms=k;b.mn=d;b.mo=c;return b;}
function Tf(a,b){var c,d,e,f,g,h,i;c=new Ba;d=new Ba;e=b.a;f=b.b;b=a.p;g=b.x.b;b=b.o;h=b.b;i=b.a;b=new Wt;b.px=a;b.py=f;b.pB=g;b.pC=h;b.pD=e;b.pE=i;b.pz=d;b.pA=c;return b;}
function Nq(a,b){var c,d,e,f,g;c=new Ba;d=b.a;e=b.b;b=a.p.o;f=b.a;g=b.b;b=new SN;b.lZ=a;b.lX=d;b.l1=f;b.l0=e;b.l3=g;b.l2=c;return b;}
function N6(a,b){var c,d,e,f,g,h,i,j;c=new Ba;d=new Ba;e=b.a;f=b.b;b=a.p;g=b.o;h=g.a;i=g.b;j=b.x.a;b=new O8;b.nh=a;b.nf=e;b.ng=j;b.nk=h;b.nl=f;b.ni=i;b.nj=d;b.nn=c;return b;}
var KK=F(0);
function Qc(){C.call(this);this.of=null;}
function AJ2(a,b){return PM(a.of,b);}
var XX=F();
function Cc(b,c){return C7(b*c);}
var W_=F();
function Yn(b,c,d,e,f,g){g.a=(c.a-f|0)-f|0;g.b=(c.b-f|0)-f|0;BJ(b,d.a+f|0,d.b+f|0,g,e);}
function U7(b,c,d,e,f,g){g.a=c.a;g.b=f;BJ(b,d.a,d.b,g,e);BJ(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;BJ(b,d.a,d.b+f|0,g,e);BJ(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function TZ(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;BJ(b,j,k,i,h);BJ(b,j,k,i,h);BJ(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;BJ(b,l,j,i,h);BJ(b,l,j,i,h);BJ(b,l+g|0,j+g|0,i,h);}
function Mq(){var a=this;C.call(a);a.bV=null;a.ik=null;a.ed=null;a.du=0;a.ea=0;a.f2=null;a.ft=null;a.fw=0;}
function RT(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.du;i=Bd(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=V(i,e))a:{while(true){if(d<=e){j=d;break a;}El(c);j=d+(-1)|0;b=De(d);d=Bd(j,a.ea)%a.ed.b|0;FT(a,c,b,a.fw,g);Hx(a.bV,c,0,d);if(!(j%a.du|0))break;d=j;}}else{El(b);k=a.du-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;FT(a,b,De(j),Bd(a.ea,k)+a.fw|0,g);k=k+(-1)|0;j=h;}CM(a.bV,b);j=V(i,e);}return j;}k=a.du;h=Bd(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=X(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}El(c);b=De((d+f|0)+1|0);j=d+1|
0;d=Bd(d,a.ea)%a.ed.b|0;FT(a,c,b,a.fw,g);Hx(a.bV,c,0,d);if(!(j%a.du|0))break;d=j;}}else{El(b);d=0;while(d<a.du){h=h+1|0;FT(a,b,De((h>e?h-f|0:h)+f|0),Bd(a.ea,d)+a.fw|0,g);d=d+1|0;}CM(a.bV,b);j=X(i,e);}return j;}
function Io(a,b,c,d,e,f){Hy(b,a.ik.a+d.a|0,c+d.b|0,a.f2,a.ft,a.bV,e,f,0.0);}
function FT(a,b,c,d,e){Ce(b,c,a.ed.a-20.0*e,d);}
var Fy=F(HV);
var V5=F(Eu);
function Pk(){C.call(this);this.mb=null;}
function AKV(a,b){var c,d;c=a.mb;d=c.dk+1|0;c.dk=d;c=new M;O(c);G(G(S(c,d),B(338)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Tb(){C.call(this);this.o0=null;}
function ANq(a){var b,c;b=a.o0;c=new M;O(c);G(G(G(c,B(339)),b),B(340));$rt_globals.console.info($rt_ustr(N(c)));}
var Xs=F();
function Ha(b,c,d){var e,f;a:{e=b.a;f=c.a;if(e>=f&&e<(f+d.a|0)){e=b.b;f=c.b;if(e>=f&&e<(f+d.b|0)){e=1;break a;}}e=0;}return e;}
function Nz(b,c,d,e){var f;a:{f=b.a;if(f>=c&&f<(c+e.a|0)){c=b.b;if(c>=d&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
var K2=F(Bm);
var Lh=F(DI);
var AUc=0.0;var AUd=null;function AAG(){AUc=$rt_globals.NaN;AUd=E($rt_floatcls());}
var Fj=F();
var ASj=null;var ASl=null;var ASm=null;var ASk=null;var ASi=null;function ZA(){ASj=ES([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);ASl=AEL([Z(1),Z(10),Z(100),Z(1000),Z(10000),Z(100000),Z(1000000),Z(10000000),Z(100000000),Z(1000000000),B9(1410065408, 2),B9(1215752192, 23),B9(3567587328, 232),B9(1316134912, 2328),B9(276447232, 23283),B9(2764472320, 232830),B9(1874919424, 2328306),B9(1569325056, 23283064),B9(2808348672, 232830643)]);ASm=AEL([Z(1),Z(10),Z(100),Z(10000),Z(100000000),B9(1874919424, 2328306)]);ASk
=new Ta;ASi=new Uy;}
var Jj=F();
var AUe=null;var AUf=null;function AAd(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.m9=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.jV=0;c.jC=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(EY(CT(Z(e),Z(8388608)),Ee)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AAj(AUf,f);if(h<0)h=( -h|0)-2|0;i=AUf.data;j=9+(f-i[h]|0)|0;k=Z(e);l=AUe.data;m=Es(DV(BN(k,Z(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=Es(DV(BN(k,Z(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<( -g|
0);o=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BD(q,r);e=e>0?Bd(m/q|0,q):e<0?Bd(m/r|0,r)+r|0:Bd((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.jV=e;c.jC=h-50|0;}
function YR(){var b,c,d,e,f,g,h,i;AUe=BG(100);AUf=BG(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AUe.data;g=d+50|0;f[g]=$rt_udiv(e,20);AUf.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Es(Cm(Z(h),Gc(BN(Z(b&((1<<i)-1|0)),Z(10)),i)));f=AUe.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AUf.data[i]=c;d=d+1|0;}}
function Uy(){var a=this;C.call(a);a.jV=0;a.jC=0;a.m9=0;}
function La(){var a=this;C.call(a);a.u2=null;a.lN=0.0;a.vl=0.0;a.eD=null;a.gu=null;a.k5=null;a.eK=0;}
function ABZ(a,b){var c;if(b!==null){a.gu=b;return a;}c=new BA;Bj(c,B(341));J(c);}
function AAq(a,b){var c;if(b!==null){a.k5=b;return a;}c=new BA;Bj(c,B(341));J(c);}
function O0(a,b,c,d){var e,f,g,$$je;e=a.eK;if(!(e==2&&!d)&&e!=3){a.eK=d?2:1;while(true){try{f=AB1(a,b,c);}catch($$e){$$je=D6($$e);if($$je instanceof Bm){g=$$je;J(AFy(g));}else{throw $$e;}}if(GM(f))return f;if(HL(f)){if(d&&DA(b)){g=a.gu;GQ();if(g===ASP)return DN(B2(b));if(B2(c)<=I(a.eD))return ASS;Et(b,b.R+B2(b)|0);if(a.gu===ASQ)Jm(c,a.eD);}return f;}if(Py(f)){g=a.gu;GQ();if(g===ASP)return f;if(g===ASQ){if(B2(c)<I(a.eD))return ASS;Jm(c,a.eD);}Et(b,b.R+Jp(f)|0);}else if(K9(f)){g=a.k5;GQ();if(g===ASP)break;if(g
===ASQ){if(B2(c)<I(a.eD))return ASS;Jm(c,a.eD);}Et(b,b.R+Jp(f)|0);}}return f;}b=new DM;U(b);J(b);}
function X8(a,b){var c,d,e,f;c=a.eK;if(c&&c!=3){b=new DM;U(b);J(b);}if(!B2(b))return ACo(0);if(a.eK)a.eK=0;d=ACo(V(8,B2(b)*a.lN|0));while(true){e=O0(a,b,d,0);if(HL(e))break;if(GM(e))d=Rx(a,d);if(!JT(e))continue;Ut(e);}b=O0(a,b,d,1);if(JT(b))Ut(b);while(true){f=a.eK;if(f!=3&&f!=2)break;a.eK=3;if(HL(AST)){d.de=d.R;d.R=0;d.gX=(-1);return d;}d=Rx(a,d);}b=new DM;U(b);J(b);}
function Rx(a,b){var c,d,e;c=b.gP;d=XH(c,V(8,c.data.length*2|0));e=ZJ(d,0,d.data.length);Et(e,b.R);return e;}
function MI(){C.call(this);this.tP=null;}
function ALc(a,b){DE(a.tP,b);}
function UO(){C.call(this);this.n1=null;}
function AO2(a,b){var c,d;c=a.n1;d=c.dk+1|0;c.dk=d;c=b.g2;b=new M;O(b);G(G(S(b,d),B(342)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Zj=F(CP);
function Qi(){C.call(this);this.ma=null;}
function AHB(a){MQ(a.ma);}
function Ta(){var a=this;C.call(a);a.kt=Ee;a.jo=0;a.mJ=0;}
var DM=F(Bm);
var AAB=F(Eu);
function AFy(a){var b=new AAB();AJE(b,a);return b;}
function AJE(a,b){a.iu=1;a.i0=1;a.ke=b;}
var Pu=F();
function AN6(a,b){AAI(b);}
function ABI(){var a=this;C.call(a);a.bD=0;a.bL=0;}
function EF(a,b){var c=new ABI();AIT(c,a,b);return c;}
function AIT(a,b,c){a.bD=b;a.bL=c;}
function Xq(a,b){var c;if(a===b)return 1;if(b!==null&&Cz(a)===Cz(b)){c=b;return a.bD==c.bD&&a.bL==c.bL?1:0;}return 0;}
function ALw(a,b){var c;b=b;c=BD(a.bD,b.bD);if(!c)c=BD(a.bL,b.bL);return c;}
function MV(){var a=this;C.call(a);a.se=null;a.sg=null;a.sf=0;}
function ADA(a,b){var c,d,e;c=a.se;d=a.sg;e=a.sf;d.m(Ws(c,(b.k.a+e|0)-c.dB.a|0));}
function MT(){var a=this;C.call(a);a.o9=null;a.o8=null;a.o$=0;}
function AFz(a,b){var c,d,e;c=a.o9;d=a.o8;e=a.o$;d.m(ND(c,(b.k.b+e|0)-c.dB.b|0));}
function T4(){var a=this;C.call(a);a.uK=null;a.uJ=null;}
function T2(){C.call(this);this.qf=null;}
function AEu(a,b){var c;c=a.qf;Sg(c,Fo(c,b.k));JS(c.r,c.A,c.z);Gz(c);}
function SF(){C.call(this);this.oU=null;}
function AOe(a,b){var c,d,e;c=a.oU;if(c.e.h.cq==c.kj){b=b.data;d=Ek(b[0]);e=Fu(b[1]);ZO(c.e.h,d,e);Ot(c.e.h);}}
function JE(){var a=this;La.call(a);a.no=null;a.ri=null;}
function AB1(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.no;e=0;f=0;g=a.ri;a:{b:{while(true){if((e+32|0)>f&&DA(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B2(b)+k|0;h=j.length;f=X(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new By;c=new M;O(c);S(G(S(G(c,B(343)),l),B(91)),h);Bj(b,N(c));J(b);}if(B2(b)<m){b=new K0;U(b);J(b);}if(m<0){b=new By;c=new M;O(c);G(S(G(c,B(92)),m),B(93));Bj(b,N(c));J(b);}n=b.R;h=n+b.j9|0;e=0;while(e<m){o=k+1|0;i=b.kM.data;l=h+1|0;j[k]=i[h];e=e+
1|0;k=o;h=l;}b.R=n+m|0;e=0;}if(!DA(c)){p=!DA(b)&&e>=f?AST:ASS;break a;}i=g.data;n=B2(c);o=i.length;n=X(n,o);q=new Uc;q.qe=b;q.si=c;p=ACb(a,d,e,f,g,0,n,q);e=q.tz;if(p===null&&0==q.jq)p=AST;k=q.jq;h=0;if(c.lw){b=new In;U(b);J(b);}if(B2(c)<k)break;if(h>o){b=new By;c=new M;O(c);BB(S(G(S(G(c,B(94)),h),B(88)),o),41);Bj(b,N(c));J(b);}l=h+k|0;if(l>o){b=new By;c=new M;O(c);S(G(S(G(c,B(96)),l),B(91)),o);Bj(b,N(c));J(b);}if(k<0){b=new By;c=new M;O(c);G(S(G(c,B(92)),k),B(93));Bj(b,N(c));J(b);}o=c.R;m=0;while(m<k){l=o+1
|0;n=h+1|0;Rf(c,o,i[h]);m=m+1|0;o=l;h=n;}c.R=c.R+k|0;if(p!==null)break a;}b=new Hu;U(b);J(b);}b=new By;c=new M;O(c);BB(S(G(S(G(c,B(94)),k),B(88)),h),41);Bj(b,N(c));J(b);}Et(b,b.R-(f-e|0)|0);return p;}
var Su=F(JE);
function ACb(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(JH(h,2))break a;i=AST;break a;}c=k+1|0;n=j[k];if(!Fr(a,n)){c=c+(-2)|0;i=DN(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(JH(h,3))break a;i=AST;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Fr(a,n))break b;if(!Fr(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Lg(p)){c=k+(-3)|0;i=DN(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=DN(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(JH(h,4))break a;i=AST;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B2(h.si)<2?0:1)break a;i=ASS;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Fr(a,n))break c;if(!Fr(a,o))break c;if(!Fr(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=HD(r);m=c+1|0;j[c]=H7(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=DN(1);break a;}c=k+(-3)|0;i
=DN(1);}h.tz=c;h.jq=f;return i;}
function Fr(a,b){return (b&192)!=128?0:1;}
function OZ(){C.call(this);this.q0=null;}
function AEF(a,b){var c,d;c=a.q0;d=c.dk+1|0;c.dk=d;c=new M;O(c);G(G(S(c,d),B(344)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Ul(){C.call(this);this.wW=null;}
function AKk(a){Bu(Bx(),B(345));}
function PD(){C.call(this);this.mA=null;}
function ACY(a,b){a.mA.m(Fm(b));}
function TF(){C.call(this);this.rk=null;}
function AOB(a,b){a.rk.t();}
function Rc(){C.call(this);this.tu=null;}
function ADQ(a,b){var c,d,e,f;c=a.tu;d=Cu(b);e=new M;O(e);G(G(e,B(346)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new Rw;d.ve=c;d.oy=b;e=new Rv;e.t_=c;f=new Tz;f.u6=e;e=new UR;e.m$=d;c=b.eJ;if(c!==null)c.arrayBuffer().then(Bl(e,"f"),Bl(f,"f"));else{b=b.gm.getFile();c=new UV;c.sa=e;c.sb=f;b.then(Bl(c,"f"),Bl(f,"f"));}}
function Rb(){C.call(this);this.vJ=null;}
function AEv(a,b){var c;b=Cu(b);c=new M;O(c);G(G(c,B(347)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var ZM=F();
var Qv=F();
function AGX(a,b){b=b;b.bV=CK(b.bV,null);}
function RW(){C.call(this);this.lI=null;}
function AI0(a){Dx(a.lI);}
var Jd=F(DI);
var AUg=0.0;var AUh=null;function Yb(){AUg=$rt_globals.NaN;AUh=E($rt_doublecls());}
var KH=F();
var AUi=null;var AUj=null;function Zx(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.mJ=EY(CT(d,B9(0, 2147483648)),Ee)?0:1;e=CT(d,B9(4294967295, 1048575));f=Es(Gc(d,52))&2047;if(EY(e,Ee)&&!f){c.kt=Ee;c.jo=0;return;}g=0;if(f)e=AP$(e,B9(0, 1048576));else{e=E9(e,1);while(EY(CT(e,B9(0, 1048576)),Ee)){e=E9(e,1);f=f+(-1)|0;g=g+1|0;}}h=AAj(AUj,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AUj.data[h]|0)|0;j=Qd(e,AUi.data[h],i);if(YD(j,B9(2808348672, 232830643))){h=h+1|0;i=12+(f-AUj.data[h]|0)|0;j=Qd(e,AUi.data[h],
i);}k=DV(AUi.data[h],(63-i|0)-g|0);l=Gc(Cm(k,Z(1)),1);m=Gc(k,1);if(EY(e,B9(0, 1048576)))m=Gc(m,2);n=Z(10);while(OJ(n,m)){n=BN(n,Z(10));}if(YD(L2(j,n),Df(m,Z(2))))n=Df(n,Z(10));o=Z(1);while(OJ(o,l)){o=BN(o,Z(10));}if(AFL(JF(o,L2(j,o)),Df(l,Z(2))))o=Df(o,Z(10));f=AQu(n,o);e=f>0?BN(Df(j,n),n):f<0?Cm(BN(Df(j,o),o),o):BN(Df(Cm(j,Df(o,Z(2))),o),o);if(YD(e,B9(2808348672, 232830643))){h=h+1|0;e=Df(e,Z(10));}else if(AF1(e,B9(1569325056, 23283064))){h=h+(-1)|0;e=BN(e,Z(10));}c.kt=e;c.jo=h-330|0;}
function Qd(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CT(b,Z(65535));f=CT(DV(b,16),Z(65535));g=CT(DV(b,32),Z(65535));h=CT(DV(b,48),Z(65535));i=CT(c,Z(65535));j=CT(DV(c,16),Z(65535));k=CT(DV(c,32),Z(65535));l=CT(DV(c,48),Z(65535));m=Cm(Cm(BN(k,e),BN(j,f)),BN(i,g));n=Cm(Cm(Cm(BN(l,e),BN(k,f)),BN(j,g)),BN(i,h));o=Cm(Cm(E9(BN(l,h),32+d|0),E9(Cm(BN(l,g),BN(k,h)),16+d|0)),E9(Cm(Cm(BN(l,f),BN(k,g)),BN(j,h)),d));return Cm(d>16?Cm(o,E9(n,d-16|0)):Cm(o,DV(n,16-d|0)),DV(m,32-d|0));}
function Zc(){var b,c,d,e,f,g,h,i,j,k;AUi=ARl(660);AUj=BG(660);b=B9(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AUi.data;g=d+330|0;f[g]=Fs(e,Z(80));AUj.data[g]=c;e=Fs(e,Z(10));h=MA(e,Z(10));while(OJ(e,b)&&EY(CT(e,B9(0, 2147483648)),Ee)){e=E9(e,1);c=c+1|0;h=E9(h,1);}e=Cm(e,Df(h,Z(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AFL(e,B9(3435973836, 214748364))){e=Gc(e,1);j=j+1|0;d=d+(-1)|0;}k=BN(e,Z(10));b=j<=0?k:Cm(k,Gc(BN(CT(b,Z((1<<j)-1|0)),Z(10)),j));f=AUi.data;g=(330-i|0)-1|0;f[g]=Fs(b,Z(80));AUj.data[g]
=d;i=i+1|0;}}
function Ps(){C.call(this);this.vh=null;}
function AKT(a){Bu(Bx(),B(348));}
function L0(){C.call(this);this.rv=null;}
function APq(a,b){var c,d;c=a.rv;d=new Bm;Bj(d,$rt_str(b.message));c.m(d);}
function N_(){var a=this;C.call(a);a.lO=null;a.lP=null;}
function ADv(a,b,c,d){var e,f,g,h;b=a.lO;e=a.lP;Sk(b,e);if(LH(d)){f=d.db;g=e.cG;c=e.ev;h=new Ba;f=f.u;YA(h,(f.a-(g*3|0)|0)-c|0,(f.b-g|0)-c|0);Sw(b,h,d.jK,e);}}
function SW(){var a=this;C.call(a);a.p9=0;a.lK=0;}
function Fx(a,b){return OL(a.p9,b,a.lK);}
function Ev(){var a=this;C.call(a);a.x=null;a.o=null;a.dD=0.0;}
function APO(){var a=new Ev();KG(a);return a;}
function KG(a){a.x=new Ba;a.o=new Ba;}
function AKy(a){}
function AN8(a){return Cf(0,0);}
function OX(a,b,c,d){if(!Km(a.x,b)){a.nI(b);Dv(a.x,b);}if(!Km(a.o,c)){a.nu(c);Dv(a.o,c);}if(a.dD!==d)a.dD=d;}
function Fk(a,b){return Ha(b,a.x,a.o);}
function X9(a,b){var c,d,e,f;c=a.x;d=c.a;e=c.b;f=a.o;EE();BJ(b,d,e,f,ATm);}
function ANm(a,b){return 0;}
function AGe(a,b){}
function AM4(a,b){}
function AO9(a,b,c){}
function ANC(a,b,c,d){return 0;}
function AMT(a,b,c){return null;}
function ANZ(a,b,c){return 0;}
function AJW(a,b){return 0;}
function AF8(a,b,c,d){return 0;}
function Kd(){var a=this;Ev.call(a);a.dh=null;a.cN=null;}
function T_(a,b){a.cN.a=VJ(a,b);}
function P5(a,b){a.cN.b=PQ(a,b);}
function PQ(a,b){return V(0,X(b,a.dh.b-a.o.b|0));}
function VJ(a,b){return V(0,X(b,a.dh.a-a.o.a|0));}
function U2(){var a=this;Kd.call(a);a.hs=null;a.kD=null;a.rf=null;a.oX=0.0;}
function ZZ(a){var b;b=Cc(20.0,a.dD);return Cf(b,b);}
function AHR(a,b){var c,d,e,f,g,h,i;c=a.rf;d=c.r9;e=c.r$;c=c.r8;b=Cu(b);f=new M;O(f);G(G(G(f,c),B(36)),b);b=N(f);c=d.r6;d=e.Q;g=D_(d.gi,c)?0:1;h=D_(d.gA,b)?0:1;i=3.0===d.ii?0:1;if(g){d.gi=c;d.dC=null;WI(d,0);}d.go=!g&&!h&&!i?0:1;d.gA=b;d.ii=3.0;d.hg=0;Jf(e);}
function YB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;X9(a,b);c=a.x;T$(b,c.a,c.b,a.o);d=Cc(30.0,a.dD);c=a.cN;e=c.a;f=Bd(e/d|0,d);g=c.b;h=Bd(g/d|0,d);c=a.o;i=Bd(((e+c.a|0)-1|0)/d|0,d);j=Bd(((g+c.b|0)-1|0)/d|0,d);c=a.kD;c.b=d;c.a=d;a.hs.bu=1.0;while(h<=j){e=a.x.b-a.cN.b|0;g=f;while(g<=i){k=a.x.a-a.cN.a|0;l=((37*g|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=ABR(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;GO(n,0.75,a.oX,a.hs);BJ(b,k+g|0,e+h|0,a.kD,a.hs);g=g+d|0;}h=h+d|0;}UW(b);}
function AIu(a,b){}
function Oy(){var a=this;C.call(a);a.r9=null;a.r$=null;a.r8=null;}
function Ph(){var a=this;Ev.call(a);a.kJ=null;a.qG=null;a.sV=null;a.cg=null;a.dN=null;a.dT=null;a.rw=0.0;}
function AFp(a,b,c,d){OX(a,b,c,d);OX(a.cg,b,c,d);if(d!==0.0){b=a.cg;c=b.dh;b=b.o;Bc(c,b.a*3|0,b.b*5|0);b=a.cg;c=b.cN;c.a=VJ(b,c.a);c=b.cN;c.b=PQ(b,c.b);if(a.cg.dh.a<=a.o.a?0:1)JC(a);else a.dT=null;if(a.cg.dh.b<=a.o.b?0:1)Kc(a);else a.dN=null;}}
function JC(a){var b,c,d,e,f,g;b=a.dT;if(b===null){b=G5();a.dT=b;}c=a.cg;d=c.cN.a;e=a.x;f=e.a;g=a.o;LC(b,d,f,g.a,c.dh.a,e.b+g.b|0,IZ(a));}
function Kc(a){var b,c,d,e,f,g;b=a.dN;if(b===null){b=G5();a.dN=b;}c=a.cg;d=c.cN.b;e=a.x;f=e.b;g=a.o;HZ(b,d,f,g.b,c.dh.b,e.a+g.a|0,IZ(a));}
function IZ(a){return Cc(a.rw,a.dD);}
function AMA(a,b){var c;YB(a.cg,b);if(!(a.dN===null&&a.dT===null)){Cv(b,1);c=a.dN;if(c!==null)FI(c,b);c=a.dT;if(c!==null)FI(c,b);c=a.dN;if(c!==null)F0(c,b);c=a.dT;if(c!==null)F0(c,b);Cv(b,0);}}
function L_(a,b){var c,d;a:{b:{c=a.dN;if(!(c!==null&&Ic(c,b))){c=a.dT;if(c===null)break b;if(!Ic(c,b))break b;}d=1;break a;}d=0;}return d;}
function AHm(a,b,c,d){return L_(a,b.k)?1:0;}
function ANF(a,b,c){var d;d=a.dN;if(d!==null){d=E2(d,b.k,a.qG,1);if(d!==null)return d;}d=a.dT;if(d!==null){d=E2(d,b.k,a.sV,0);if(d!==null)return d;}return null;}
function AGZ(a,b,c){return L_(a,b.k)?1:0;}
function AId(a,b){var c,d,e;c=a.dN;d=c!==null&&Fa(c,b.k,a.kJ)?1:0;c=a.dT;e=c!==null&&Fa(c,b.k,a.kJ)?1:0;return !d&&!e?0:1;}
function AMN(a,b,c,d){var e,f;if(!Fk(a,b.k))return 0;e=Cc(d*0.25,a.dD);f=Cc(c*0.25,a.dD);if(b.bz){f=f+e|0;e=0;}if(e){b=a.cg;P5(b,b.cN.b+e|0);Kc(a);}if(f){b=a.cg;T_(b,b.cN.a+f|0);JC(a);}return 1;}
function AKh(a){var b,c;b=IZ(a);c=ZZ(a.cg);c.a=V(c.a,b);c.b=V(c.b,b);return c;}
function Sp(){var a=this;Ev.call(a);a.gw=null;a.gA=null;a.gi=null;a.dC=null;a.ii=0.0;a.go=0;a.hg=0;a.c1=null;a.kV=null;}
function KY(a){var b;b=a.o;return b.a&&b.b?0:1;}
function SV(a){var b,c;a:{if(a.gi!==null){b=a.gA;if(b!==null&&!E_(b)){c=0;break a;}}c=1;}return c;}
function WI(a,b){a.o.b=b;}
function On(a,b,c,d,e){var f,g;f=a.gw.jB;Bc(f,d,a.o.b);g=a.x;BJ(b,g.a+c|0,g.b,f,e);}
function PR(a){if(a.dC===null)a.dC=HW(a.gw,a.gi);}
function S2(){C.call(this);this.nr=null;}
function AJt(a,b){var c,d;c=a.nr;d=Fx(b,c.cg.dh.b-c.o.b|0);P5(c.cg,d);Kc(c);}
function S3(){C.call(this);this.qu=null;}
function AHG(a,b){var c,d;c=a.qu;d=Fx(b,c.cg.dh.a-c.o.a|0);T_(c.cg,d);JC(c);}
var QW=F(DI);
var AUk=null;function Fs(b,c){return Long_udiv(b, c);}
function MA(b,c){return Long_urem(b, c);}
function Kq(b,c){return Long_ucompare(b, c);}
function Za(){AUk=E($rt_longcls());}
function SC(){var a=this;C.call(a);a.mK=null;a.mL=null;a.mI=null;}
function ALG(a){var b,c,d,e,f;b=a.mK;c=a.mL;d=a.mI;e=Bx();f=new M;O(f);b=G(f,b);BB(b,9);b=G(b,c);BB(b,9);G(b,d);Bu(e,N(f));}
var E4=F(Bm);
function ML(){var a=this;C.call(a);a.l5=null;a.oY=null;a.sk=0;a.ts=0;}
function KT(a,b){return B2(a.oY)<b?0:1;}
var ABL=F();
function Tx(b,c,d,e){var f,g;f=b.next();g=new Wj;g.mj=b;g.mi=c;g.mm=d;g.mk=e;f.then(Bl(g,"f"),Bl(d,"f"));}
function XK(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ACc(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(DW()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new We;f.pG=b;f.pH=d;d.addEventListener("change",Bl(f,"handleEvent"));d.click();}
function XR(b,c){var d;if(c.isFile?1:0)b.m(Xh(c.file()));else{c=c.createReader();d=new V4;d.sw=b;c.readEntries(Bl(d,"f"));}}
function RM(){var a=this;C.call(a);a.bs=null;a.gU=null;a.W=null;}
function H5(a){return a.gU.e4.h7;}
function Nb(a){var b;b=new Oe;b.oW=a;return b;}
function ACI(a){var b,c,d,e,f,g;b=R(Dy,4);c=b.data;d=a.W.bq.bi.bb;e=a.bs;BI(e);f=new UP;f.r3=e;c[0]=Ea(B(349),d,f);e=a.W.bq.bi.bb;f=a.bs;BI(f);g=new UT;g.m8=f;c[1]=Ea(B(350),e,g);e=a.W.bq.bi.bb;f=a.bs;BI(f);g=new US;g.qZ=f;c[2]=Ea(B(351),e,g);e=a.W.bq.bi.bb;f=a.bs;BI(f);g=new UQ;g.t7=f;c[3]=Ea(B(352),e,g);return GU(b);}
function Ix(a,b,c){var d,e,f,g,h,i,j,k,l,m;a:{Dx(a.W.b7);d=a.bs.e;e=Dd(d);f=GE(d);g=a.bs.d2;if(c===null)h=null;else{APW();switch(AUl.data[c.cQ]){case 1:h=J2(g,e,f);break a;case 2:h=UJ(g,e,f);break a;default:}b=new Eg;U(b);J(b);}}c=a.bs;e=Fo(c,b);if(h!==null){f=c.e;i=e.bD;j=e.bL;e=new Uz;e.vs=c;e.vr=b;h.rq(f,i,j,e,c.gy);}else{Wx(c.e.h,e);f=Ej(c.e.h.dS,e);if(f!==null)He(c,f);else{e=Ej(c.e.h.ec,e);if(e!==null&&!D3(e))Ru(c.gH,b,e,c);else{e=c.gH;Dx(e.b7);f=e.b7;k=R(Dy,1);l=k.data;g=new Dy;BI(f);m=new V8;m.tN=f;Qk(g,
m,B(353),e.bq.bi.tM);l[0]=g;Hl(f,b,GU(k),II(e,c));}}}}
function Sq(){var a=this;C.call(a);a.vX=null;a.vY=null;a.vV=0;a.vW=0;}
var Wl=F();
function AMG(a,b){XK(b);}
function Wk(){var a=this;C.call(a);a.o2=null;a.o1=null;}
function AFG(a,b){var c,d,e,f,g,h,i;c=a.o2;d=a.o1;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new OY;i.nw=c;i.nv=g;h.then(Bl(i,"f"),Bl(d,"f"));e=e+1|0;}}
var VO=F();
function AG3(a,b){XK(b);}
function VN(){var a=this;C.call(a);a.om=null;a.on=null;}
function AHV(a,b){var c,d,e,f,g;c=a.om;d=a.on;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(Bv,1);g.data[0]=Fm(b.name);Tx(f,c,d,g);}
function Uj(){var a=this;C.call(a);a.tZ=null;a.t0=0.0;}
function I8(a,b){return JX(a.tZ,b,a.t0*2.0+0.875);}
var Xu=F();
function Z_(b,c){return AA1(null,b,c,0);}
function AA1(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=AHt(c);g=B8(f);h=B8(f);i=B8(f);j=R(Cx,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<CB(b)){l=B8(f);c[k]=B0(b,k);l=4*l|0;f.fe=f.fe+l|0;}else c[k]=DC(Xy(f,d,0));k=k+1|0;}m=ACk(f,h);n=new Jq;n.dS=HE();n.ec=HE();n.e6=Ck();if(!c.length){b=new BA;U(b);J(b);}n.E=j;n.fo=0;n.cq=0;n.c0=AQW(m);b=n.dS;e=0;while(e<i){R_(b,EF(B8(f),B8(f)),EF(B8(f),B8(f)));e=e+1|0;}b=n.dS;m=n.ec;o=new TA;Rr(o,b);while(IB(o)){Tl(o);b=o.gG;p=b.hE;q=b.fB;b=Ck();if(Ej(m,q)===null)R_(m,q,b);BW(Ej(m,
q),p);}if(m.jN===null){b=new Od;b.tF=m;m.jN=b;}b=m.jN;q=new PU;Rr(q,b.tF);while(IB(q)){Tl(q);b=q.gG.fB;m=AR$;c=R(C,b.j);d=c.data;Hm(b,c);YM(c,m);e=0;g=d.length;while(e<g){m=d[e];Iv(b,e);b.cd.data[e]=m;e=e+1|0;}}NV(f);return n;}
function ZO(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=AHt(c);g=B8(f);h=B8(f);i=B8(f);j=B8(f);k=MJ(b,g);l=MJ(b,h);m=(H6(B0(b,k.a),k.b)).data[0].q;e=(H6(B0(b,l.a),l.b)).data[1].q;n=0;o=i-1|0;while(n<i){p=Xy(f,d,g);if(!n)p=KS(m,p);if(n==o)p=KS(p,e);q=k.a+n|0;r=DC(p);b.E.data[q]=r;n=n+1|0;}r=ACk(f,j);NV(f);if(!D3(r)){s=M8(g,h,(-1));b=b.c0;f=AP1(s,r);r=JO(b,b.cH,s);if(r!==null){f=f.cH.bw;if(r===b.cH)b.cH=Bs(f,0);else if(r.dv!==null){b=new M6;b.rg=r;Jh(f,b);q=Pm(r.dv.bw,
r);Ed(r.dv.bw,q);b=r.dv.bw;Oo(b,q);if(!D3(f)){IF(b,b.j+f.j|0);j=f.j;g=b.j;h=g-1|0;while(h>=q){c=b.cd.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.j=g+j|0;f=BR(f);g=0;while(g<j){c=b.cd.data;h=q+1|0;c[q]=BV(f);g=g+1|0;q=h;}b.cs=b.cs+1|0;}}}}}
function Xy(b,c,d){var e,f,g,h,i,j,k,l;e=B8(b);f=R(B4,e);g=f.data;h=0;while(h<e){i=B8(b);j=B8(b);k=B8(b);l=B8(b);g[h]=Dt(I4(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function ACk(b,c){var d,e;d=Ck();e=0;while(e<c){BW(d,M8(B8(b),B8(b),B8(b)));e=e+1|0;}return d;}
var VU=F(0);
var ATv=null;function XI(){ATv=null;}
function We(){var a=this;C.call(a);a.pG=null;a.pH=null;}
function AGU(a,b){var c,d,e,f,g,h;b=a.pG;c=a.pH;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new LV;h.me=b;h.md=g;$rt_globals.setTimeout(Bl(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Xh(d.item(f));g=new LD;g.q2=b;g.q3=c;$rt_globals.setTimeout(Bl(g,"onTimer"),0);f=f+1|0;}}
function XO(){var a=this;C.call(a);a.iz=null;a.fe=0;}
function AHt(a){var b=new XO();ANk(b,a);return b;}
function ANk(a,b){a.iz=b;a.fe=0;}
function B8(a){var b,c;b=a.iz.data;c=a.fe;a.fe=c+1|0;return b[c];}
function NV(a){var b,c,d,e;if(a.fe!=a.iz.data.length){b=KR();c=a.iz.data.length;d=a.fe;e=new M;O(e);G(S(G(S(G(e,B(354)),c),B(355)),d),B(356));Bu(b,N(e));}}
var In=F(E4);
var Hu=F(Bm);
var K0=F(Bm);
function Yv(){C.call(this);this.CR=null;}
function Uq(){var a=this;C.call(a);a.nb=null;a.na=null;}
function AL0(a){var b,c;b=a.nb;c=a.na;Ln(b.ki,c);}
function VY(){C.call(this);this.pv=null;}
function AMK(a,b){Hk(a.pv,b);}
var Xb=F();
function QQ(b,c){return b.data[c];}
function GH(){var a=this;C.call(a);a.es=0;a.e2=0;a.kh=null;a.i8=0;a.gE=null;}
function ADm(a,b,c,d,e,f){var g=new GH();AH_(g,a,b,c,d,e,f);return g;}
function AH_(a,b,c,d,e,f,g){a.es=b;a.e2=c;a.kh=Cf(f,g);a.i8=d;a.gE=e;}
function AAW(){FZ.call(this);this.AU=null;}
function Od(){EA.call(this);this.tF=null;}
var VF=F(By);
var Pr=F(0);
var MG=F(0);
var K5=F();
function YV(){var a=this;K5.call(a);a.CS=null;a.EN=0;a.Do=0;a.A9=0;}
function Qp(){var a=this;C.call(a);a.nz=null;a.ny=null;}
function AEy(a){var b,c;b=a.nz;c=a.ny;TU();Ix(b,c,AUm);}
function Qo(){var a=this;C.call(a);a.op=null;a.or=null;}
function AC5(a){var b,c;b=a.op;c=a.or;TU();Ix(b,c,AUn);}
function Qn(){var a=this;C.call(a);a.tR=null;a.tS=null;}
function AIV(a){Ix(a.tR,a.tS,null);}
function Qm(){var a=this;C.call(a);a.mT=null;a.mU=null;}
function ANo(a){var b,c,d,e,f,g,h;b=a.mT;c=a.mU;d=Dd(b.bs.e);e=GE(b.bs.e);d=MB(b.bs.d2,d,e);Dx(b.W.b7);b=b.bs;e=Fo(b,c);if(d!==null){f=b.e;g=e.bD;h=e.bL;e=new V2;e.um=b;e.un=c;d.FH(f,g,h,1,e,b.gy);}}
function OA(){C.call(this);this.pl=null;}
function AMJ(a){var b;b=a.pl;Dx(b.W.b7);Kl(b.bs,Nb(b),0);}
function OC(){C.call(this);this.sB=null;}
function AH0(a){var b;b=a.sB;Dx(b.W.b7);Kl(b.bs,Nb(b),1);}
function OD(){C.call(this);this.rJ=null;}
function AE4(a){var b,c,d;b=a.rJ;Dx(b.W.b7);c=H5(b);b=b.bs;BI(b);d=new RQ;d.rK=b;PO(c,d,XF(B(357)));}
function Va(){C.call(this);this.rY=null;}
function ADT(a){var b,c,d;b=a.rY;Dx(b.W.b7);c=H5(b);b=b.bs;BI(b);d=new P2;d.pP=b;K1(c,d);}
function YQ(){var a=this;C.call(a);a.hF=null;a.jw=null;}
function AB5(){var a=this;C.call(a);a.wT=0;a.wH=0;a.rz=0;a.ka=0;}
var SH=F();
function AIr(a){}
function SI(){var a=this;C.call(a);a.p7=null;a.p8=null;}
function ANR(a){var b,c,d,e,f,g;b=a.p7;c=a.p8;if(D_(c.hF,b.e.fH)){c=c.jw;CA(b,c.ka,c.rz,0);BZ(b.r.bM,c.ka,c.rz);BZ(b.r.bB,c.wH,c.wT);}else{d=(Cl(b.d2.qD)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Cg(b);b=new NS;b.nF=g;b.nG=c;BI(b);c=new OQ;c.t5=b;$rt_globals.setTimeout(Bl(c,"onTimer"),0);}}}
function SG(){var a=this;C.call(a);a.s9=null;a.s$=null;}
function AFA(a){He(a.s9,a.s$);}
function U1(){C.call(this);this.rG=null;}
function AJI(a,b,c){var d,e;c=a.rG;d=c.e.h;e=b.fc;b=c.et;Wc(d.E.data[e],0,b);}
function RG(){C.call(this);this.nD=null;}
function AIv(a){ST(a.nD);}
function RH(){C.call(this);this.qC=null;}
function AJG(a){Z2(a.qC);}
function Ng(){C.call(this);this.q1=null;}
function AHr(a){var b;b=a.q1;Ko(b,b.dX.lq,b.fM+1|0);}
function Nf(){C.call(this);this.pM=null;}
function ANy(a){var b,c;b=a.pM;c=b.fM;if(c>7)Ko(b,b.dX.lq,c-1|0);}
function Uf(){C.call(this);this.qs=null;}
function AFv(a){var b,c,d,e,f,g,h,i;b=a.qs;c=(b.gU.ox()).data;d=R(Dy,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new W7;i.oT=b;i.oS=h;e[f]=ABY(i,h,b.W.bq.bi.bb);f=f+1|0;}return d;}
function UP(){C.call(this);this.r3=null;}
function ALq(a){var b,c,d,e,f;b=a.r3.e.h;c=b.cq;d=new M;O(d);S(G(d,B(358)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.fo;d=new M;O(d);S(G(d,B(359)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.c0;e=FG(F6(b));Q9(d,0,d.cH,e);b=Bx();f=b.jE;f.data[0]=10;M4(b,f,0,1);}
function UT(){C.call(this);this.m8=null;}
function AIC(a){RB(a.m8);}
function US(){C.call(this);this.qZ=null;}
function ADN(a){VK(a.qZ);}
function UQ(){C.call(this);this.t7=null;}
function AFD(a){Jk(a.t7);}
function WY(){var a=this;C.call(a);a.m4=null;a.m3=null;}
function AIP(a){var b,c;b=a.m4;c=a.m3;F2(b);c.t();}
function RC(){C.call(this);this.tm=null;}
function AHK(a,b,c){FF(B0(a.tm.e.h,b.fc),0,I(c));}
function OY(){var a=this;C.call(a);a.nw=null;a.nv=null;}
function AFS(a,b){a.nw.m(AAn(a.nv,b));}
var Ih=F(0);
function LV(){var a=this;C.call(a);a.me=null;a.md=null;}
function AH1(a){XR(a.me,a.md);}
function LD(){var a=this;C.call(a);a.q2=null;a.q3=null;}
function ACR(a){a.q2.m(a.q3);}
function Wj(){var a=this;C.call(a);a.mj=null;a.mi=null;a.mm=null;a.mk=null;}
function AHg(a,b){var c,d,e,f,g,h,i;c=a.mj;d=a.mi;e=a.mm;f=a.mk;if(!(b.done?1:0)){Tx(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Ti;c.oo=d;c.oq=g;c.os=f;b.then(Bl(c,"f"),Bl(e,"f"));}else{h=f.data;c=g.values();b=Fm(g.name);i=h.length;f=Da(f,i+1|0);f.data[i]=b;Tx(c,d,e,f);}}}
function GB(){var a=this;C.call(a);a.hM=0;a.q8=0;a.g9=null;a.gG=null;a.oD=null;a.ip=null;}
function AUo(a){var b=new GB();Rr(b,a);return b;}
function Rr(a,b){a.ip=b;a.q8=b.ge;a.g9=null;}
function IB(a){var b,c;if(a.g9!==null)return 1;while(true){b=a.hM;c=a.ip.cO.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.hM=b+1|0;}return 0;}
function Yw(a){var b;if(a.q8==a.ip.ge)return;b=new K2;U(b);J(b);}
function Tl(a){var b,c,d,e;Yw(a);if(!IB(a)){b=new WU;U(b);J(b);}b=a.g9;if(b!==null){c=a.gG;if(c!==null)a.oD=c;a.gG=b;a.g9=b.eY;}else{d=a.ip.cO.data;e=a.hM;a.hM=e+1|0;b=d[e];a.gG=b;a.g9=b.eY;a.oD=null;}}
var TA=F(GB);
var PU=F(GB);
var SZ=F(0);
var ATF=null;function ZH(){ATF=new RU;}
function PS(){var a=this;C.call(a);a.f=null;a.c_=0;a.ju=null;a.mQ=0;a.fT=0;a.ee=0;a.br=0;a.kr=null;}
function I_(a){return a.f.bE;}
function WL(a,b,c,d){var e,f,g,h,i,j;e=Ck();f=a.c_;g=0;if(c!=f)a.c_=c;a:{switch(b){case -1073741784:h=new QF;c=a.br+1|0;a.br=c;E8(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new OH;c=a.br+1|0;a.br=c;E8(h,c);break a;case -33554392:h=new RK;c=a.br+1|0;a.br=c;E8(h,c);break a;default:c=a.fT+1|0;a.fT=c;if(d!==null)h=AQ6(c);else{h=new Fg;E8(h,0);g=1;}c=a.fT;if(c<=(-1))break a;if(c>=10)break a;a.ju.data[c]=h;break a;}h=new WH;E8(h,(-1));}while(true){if(EL(a.f)&&a.f.i==(-536870788))
{d=ANU(B6(a,2),B6(a,64));while(!C$(a.f)&&EL(a.f)){i=a.f;j=i.i;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cr(d,Bf(i));i=a.f;if(i.bd!=(-536870788))continue;Bf(i);}i=JZ(a,d);i.L(h);}else if(a.f.bd==(-536870788)){i=Gt(h);Bf(a.f);}else{i=N5(a,h);d=a.f;if(d.bd==(-536870788))Bf(d);}if(i!==null)BW(e,i);if(C$(a.f))break;if(a.f.bd==(-536870871))break;}if(a.f.jT==(-536870788))BW(e,Gt(h));if(a.c_!=f&&!g){a.c_=f;d=a.f;d.fD=f;d.i=d.bd;d.d9=d.em;j=d.cV;d.v=j+1|0;d.gK=j;EO(d);}switch(b){case -1073741784:break;case -536870872:d
=new LT;Fh(d,e,h);return d;case -268435416:d=new Vb;Fh(d,e,h);return d;case -134217688:d=new PV;Fh(d,e,h);return d;case -67108824:d=new Sx;Fh(d,e,h);return d;case -33554392:d=new DD;Fh(d,e,h);return d;default:switch(e.j){case 0:break;case 1:return AQR(Bs(e,0),h);default:return AQt(e,h);}return Gt(h);}d=new Il;Fh(d,e,h);return d;}
function ABh(a){var b,c,d,e,f,g,h;b=BG(4);c=(-1);d=(-1);if(!C$(a.f)&&EL(a.f)){e=b.data;c=Bf(a.f);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BL(3);b=e.data;b[0]=c&65535;f=a.f;g=f.bd;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bf(f);f=a.f;g=f.bd;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bf(f);return ANB(e,3);}return ANB(e,2);}if(!B6(a,2))return Yu(b[0]);if(B6(a,64))return ALK(b[0]);return AEM(b[0]);}e=b.data;c=1;while(c<4&&!C$(a.f)&&EL(a.f)){h=c+1|0;e[c]=Bf(a.f);c=h;}if(c==1){h=e[0];if(!(AUp.wn(h)==AUq?0:1))return WC(a,e[0]);}if
(!B6(a,2))return ARG(b,c);if(B6(a,64)){f=new Wh;M0(f,b,c);return f;}f=new SP;M0(f,b,c);return f;}
function N5(a,b){var c,d,e,f,g,h,i;if(EL(a.f)&&!I1(a.f)&&Jx(a.f.i)){if(B6(a,128)){c=ABh(a);if(!C$(a.f)){d=a.f;e=d.bd;if(!(e==(-536870871)&&!(b instanceof Fg))&&e!=(-536870788)&&!EL(d))c=Lj(a,b,c);}}else if(!M9(a.f)&&!Uh(a.f)){f=new M$;O(f);while(!C$(a.f)&&EL(a.f)&&!M9(a.f)&&!Uh(a.f)){if(!(!I1(a.f)&&!a.f.i)&&!(!I1(a.f)&&Jx(a.f.i))){g=a.f.i;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bf(a.f);if(!Lb(e))BB(f,e&65535);else HR(f,Gd(e));}if(!B6(a,2)){c=new Qr;Do(c);c.cl
=N(f);e=f.O;c.bC=e;c.jJ=AJ_(e);c.ku=AJ_(c.bC);h=0;while(h<(c.bC-1|0)){PZ(c.jJ,L(c.cl,h),(c.bC-h|0)-1|0);PZ(c.ku,L(c.cl,(c.bC-h|0)-1|0),(c.bC-h|0)-1|0);h=h+1|0;}}else if(B6(a,64))c=ARD(f);else{c=new Mp;Do(c);c.gL=N(f);c.bC=f.O;}}else c=Lj(a,b,Wg(a,b));}else{d=a.f;if(d.bd!=(-536870871))c=Lj(a,b,Wg(a,b));else{if(b instanceof Fg)J(B5(B(31),d.bE,M7(d)));c=Gt(b);}}a:{if(!C$(a.f)){e=a.f.bd;if(!(e==(-536870871)&&!(b instanceof Fg))&&e!=(-536870788)){f=N5(a,b);if(c instanceof CX&&!(c instanceof EP)&&!(c instanceof CO)
&&!(c instanceof En)){i=c;if(!f.bN(i.H)){c=new Vp;ED(c,i.H,i.d,i.g5);c.H.L(c);}}if((f.g$()&65535)!=43)c.L(f);else c.L(f.H);break a;}}if(c===null)return null;c.L(b);}if((c.g$()&65535)!=43)return c;return c.H;}
function Lj(a,b,c){var d,e,f,g,h;d=a.f;e=d.bd;if(c!==null&&!(c instanceof BS)){switch(e){case -2147483606:Bf(d);d=new W4;C5(d,c,b,e);Lo();c.L(AUr);return d;case -2147483605:Bf(d);d=new Oz;C5(d,c,b,(-2147483606));Lo();c.L(AUr);return d;case -2147483585:Bf(d);d=new Of;C5(d,c,b,(-536870849));Lo();c.L(AUr);return d;case -2147483525:f=new Mj;d=EW(d);g=a.ee+1|0;a.ee=g;Iu(f,d,c,b,(-536870849),g);Lo();c.L(AUr);return f;case -1073741782:case -1073741781:Bf(d);d=new Qh;C5(d,c,b,e);c.L(d);return d;case -1073741761:Bf(d);d
=new Pn;C5(d,c,b,(-536870849));c.L(b);return d;case -1073741701:h=new TX;d=EW(d);e=a.ee+1|0;a.ee=e;Iu(h,d,c,b,(-536870849),e);c.L(h);return h;case -536870870:case -536870869:Bf(d);if(c.g$()!=(-2147483602)){d=new CO;C5(d,c,b,e);}else if(B6(a,32)){d=new Qj;C5(d,c,b,e);}else{d=new Nh;f=Oi(a.c_);C5(d,c,b,e);d.jS=f;}c.L(d);return d;case -536870849:Bf(d);d=new FC;C5(d,c,b,(-536870849));c.L(b);return d;case -536870789:h=new EX;d=EW(d);e=a.ee+1|0;a.ee=e;Iu(h,d,c,b,(-536870849),e);c.L(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bf(d);d=new W6;ED(d,f,b,e);f.d=d;return d;case -2147483585:Bf(d);c=new Vk;ED(c,f,b,(-2147483585));return c;case -2147483525:c=new N3;Q6(c,EW(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bf(d);d=new Pj;ED(d,f,b,e);f.d=d;return d;case -1073741761:Bf(d);c=new S9;ED(c,f,b,(-1073741761));return c;case -1073741701:c=new PW;Q6(c,EW(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bf(d);d=AQY(f,b,e);f.d=d;return d;case -536870849:Bf(d);c
=new En;ED(c,f,b,(-536870849));return c;case -536870789:return AP7(EW(d),f,b,(-536870789));default:}return c;}
function Wg(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fg;while(true){a:{e=a.f;f=e.bd;if((f&(-2147418113))==(-2147483608)){Bf(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.c_=g;else{if(f!=(-1073741784))g=a.c_;c=WL(a,f,g,b);e=a.f;if(e.bd!=(-536870871))J(B5(B(31),e.bE,e.cV));Bf(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bf(e);c
=ANn(0);break a;case -2147483577:Bf(e);c=new Nd;BK(c);break a;case -2147483558:Bf(e);c=new V1;h=a.br+1|0;a.br=h;ABH(c,h);break a;case -2147483550:Bf(e);c=ANn(1);break a;case -2147483526:Bf(e);c=new VL;BK(c);break a;case -536870876:Bf(e);a.br=a.br+1|0;if(B6(a,8)){if(B6(a,1)){c=AQk(a.br);break a;}c=APF(a.br);break a;}if(B6(a,1)){c=AQz(a.br);break a;}c=AQ$(a.br);break a;case -536870866:Bf(e);if(B6(a,32)){c=ARr();break a;}c=AQ5(Oi(a.c_));break a;case -536870821:Bf(e);i=0;c=a.f;if(c.bd==(-536870818)){i=1;Bf(c);}c
=JZ(a,FO(a,i));c.L(b);e=a.f;if(e.bd!=(-536870819))J(B5(B(31),e.bE,e.cV));NJ(e,1);Bf(a.f);break a;case -536870818:Bf(e);a.br=a.br+1|0;if(!B6(a,8)){c=new JD;BK(c);break a;}c=new Mv;e=Oi(a.c_);BK(c);c.p1=e;break a;case 0:j=e.em;if(j!==null)c=JZ(a,j);else{if(C$(e)){c=Gt(b);break a;}c=Yu(f&65535);}Bf(a.f);break a;default:break b;}Bf(e);c=new JD;BK(c);break a;}h=(f&2147483647)-48|0;if(a.fT<h)J(B5(B(31),E5(e),M7(a.f)));Bf(e);a.br=a.br+1|0;c=!B6(a,2)?APM(h,a.br):B6(a,64)?AQl(h,a.br):ARA(h,a.br);a.ju.data[h].jt=1;a.mQ
=1;break a;}if(f>=0&&!Gw(e)){c=WC(a,f);Bf(a.f);}else if(f==(-536870788))c=Gt(b);else{if(f!=(-536870871)){b=new H$;c=!Gw(a.f)?V0(f&65535):a.f.em.cp();e=a.f;ID(b,c,e.bE,e.cV);J(b);}if(d){b=new H$;e=a.f;ID(b,B(31),e.bE,e.cV);J(b);}c=Gt(b);}}}if(f!=(-16777176))break;}return c;}
function FO(a,b){var c,d,e,f,g,h,i,j,$$je;c=ANU(B6(a,2),B6(a,64));Eh(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(C$(a.f))break a;h=a.f;b=h.bd;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cr(c,d);d=Bf(a.f);h=a.f;if(h.bd!=(-536870874)){d=38;break d;}if(h.i==(-536870821)){Bf(h);e=1;d=(-1);break d;}Bf(h);if(g){c=FO(a,0);break d;}if(a.f.bd==(-536870819))break d;VR(c,FO(a,0));break d;case -536870867:if(!g){b=h.i;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bf(h);h=a.f;i=h.bd;if(Gw(h))break c;if
(i<0){j=a.f.i;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Jx(i))break e;i=i&65535;break e;}catch($$e){$$je=D6($$e);if($$je instanceof DP){break b;}else{throw $$e;}}}try{BP(c,d,i);}catch($$e){$$je=D6($$e);if($$je instanceof DP){break b;}else{throw $$e;}}Bf(a.f);d=(-1);break d;}}if(d>=0)Cr(c,d);d=45;Bf(a.f);break d;case -536870821:if(d>=0){Cr(c,d);d=(-1);}Bf(a.f);j=0;h=a.f;if(h.bd==(-536870818)){Bf(h);j=1;}if(!e)Xe(c,FO(a,j));else VR(c,FO(a,j));e=0;Bf(a.f);break d;case -536870819:if(d>=0)Cr(c,
d);d=93;Bf(a.f);break d;case -536870818:if(d>=0)Cr(c,d);d=94;Bf(a.f);break d;case 0:if(d>=0)Cr(c,d);h=a.f.em;if(h===null)d=0;else{ACD(c,h);d=(-1);}Bf(a.f);break d;default:}if(d>=0)Cr(c,d);d=Bf(a.f);}g=0;}J(B5(B(31),I_(a),a.f.cV));}J(B5(B(31),I_(a),a.f.cV));}if(!f){if(d>=0)Cr(c,d);return c;}J(B5(B(31),I_(a),a.f.cV-1|0));}
function WC(a,b){var c,d,e;c=Lb(b);if(B6(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AEM(b&65535);}if(B6(a,64)&&b>128){if(c){d=new LI;Do(d);d.bC=2;d.po=Gl(Gk(b));return d;}if(NT(b))return AKf(b&65535);if(!Ro(b))return ALK(b&65535);return AHN(b&65535);}}if(!c){if(NT(b))return AKf(b&65535);if(!Ro(b))return Yu(b&65535);return AHN(b&65535);}d=new DG;Do(d);d.bC=2;d.fk=b;e=(Gd(b)).data;d.iZ=e[0];d.hG=e[1];return d;}
function JZ(a,b){var c,d,e;if(!Z8(b)){if(!b.J){if(b.gs())return AHb(b);return ANp(b);}if(!b.gs())return AIt(b);c=new Iw;To(c,b);return c;}c=XJ(b);d=new L1;BK(d);d.oh=c;d.uh=c.bc;if(!b.J){if(b.gs())return AAJ(AHb(Hb(b)),d);return AAJ(ANp(Hb(b)),d);}if(!b.gs())return AAJ(AIt(Hb(b)),d);c=new Pc;e=new Iw;To(e,Hb(b));ACl(c,e,d);return c;}
function Hc(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B6(a,b){return (a.c_&b)!=b?0:1;}
function M6(){C.call(this);this.rg=null;}
function APi(a,b){b.dv=a.rg.dv;}
var Ge=F(Cq);
var AUn=null;var AUm=null;var AUs=null;function TU(){TU=Bo(Ge);AFW();}
function AH8(a,b){var c=new Ge();Yp(c,a,b);return c;}
function Yp(a,b,c){TU();DB(a,b,c);}
function AFW(){var b;AUn=AH8(B(360),0);b=AH8(B(361),1);AUm=b;AUs=H(Ge,[AUn,b]);}
function RQ(){C.call(this);this.rK=null;}
function AIF(a,b){DE(a.rK,b);}
function Qs(){var a=this;C.call(a);a.sG=null;a.sH=0;a.sE=0;a.sF=null;a.sC=0;a.sD=0;}
function AD0(a,b){var c,d,e,f,g,h,i,j;c=a.sG;d=a.sH;e=a.sE;f=a.sF;g=a.sC;h=a.sD;i=Cs(c.M,5.0);d=X((c.M.b5.a-d|0)-i|0,V((i-d|0)-c.Q.o.a|0,b.k.a));j=X((c.M.b5.b-e|0)-i|0,V((i-e|0)-c.Q.o.b|0,b.k.b));Bc(f,d+g|0,j+h|0);C_(c,f,c.p.o);}
function NP(){var a=this;C.call(a);a.mu=null;a.mv=0;a.mx=0;a.mp=0;a.mq=0;a.mr=0;a.ms=0;a.mn=null;a.mo=null;}
function AIL(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.mu;d=a.mv;e=a.mx;f=a.mp;g=a.mq;h=a.mr;i=a.ms;j=a.mn;k=a.mo;l=Cs(c.M,5.0);m=c.p.dq();d=X(e+(b.k.b-d|0)|0,(c.M.b5.b+c.Q.o.b|0)-l|0);e=e+f|0;d=e-d|0;d=V(m.b,d);e=e-d|0;l=X(h+(b.k.a-g|0)|0,c.M.b5.a-l|0);f=h+i|0;l=f-l|0;l=V(m.a,l);Bc(j,f-l|0,e);Bc(k,l,d);C_(c,j,k);}
function TW(){var a=this;C.call(a);a.rN=null;a.rL=0;a.rM=0;a.rP=0;a.rR=null;a.rO=null;}
function AMX(a,b){var c,d,e,f,g,h,i,j;c=a.rN;d=a.rL;e=a.rM;f=a.rP;g=a.rR;h=a.rO;i=Cs(c.M,5.0);j=c.p.dq();d=X(e+(b.k.b-d|0)|0,(c.M.b5.b+c.Q.o.b|0)-i|0);e=e+f|0;d=e-d|0;d=V(j.b,d);Bc(g,c.p.x.a,e-d|0);Bc(h,c.p.o.a,d);C_(c,g,h);}
function Wt(){var a=this;C.call(a);a.px=null;a.py=0;a.pB=0;a.pC=0;a.pD=0;a.pE=0;a.pz=null;a.pA=null;}
function AJC(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.px;d=a.py;e=a.pB;f=a.pC;g=a.pD;h=a.pE;i=a.pz;j=a.pA;k=Cs(c.M,5.0);l=c.p.dq();d=X(e+(b.k.b-d|0)|0,(c.M.b5.b+c.Q.o.b|0)-k|0);e=e+f|0;d=e-d|0;d=V(l.b,d);e=e-d|0;h=V(h+(b.k.a-g|0)|0,V(l.a,k-c.Q.x.a|0));Bc(i,c.p.x.a,e);Bc(j,h,d);C_(c,i,j);}
function WE(){var a=this;C.call(a);a.pW=null;a.pV=0;a.pU=0;a.pT=0;a.pS=null;a.pR=null;}
function AO_(a,b){var c,d,e,f,g,h,i,j;c=a.pW;d=a.pV;e=a.pU;f=a.pT;g=a.pS;h=a.pR;i=Cs(c.M,5.0);j=c.p.dq();d=X(e+(b.k.a-d|0)|0,c.M.b5.a-i|0);e=e+f|0;d=e-d|0;d=V(j.a,d);Bc(g,e-d|0,c.p.x.b);Bc(h,d,c.p.o.b);C_(c,g,h);}
function O8(){var a=this;C.call(a);a.nh=null;a.nf=0;a.ng=0;a.nk=0;a.nl=0;a.ni=0;a.nj=null;a.nn=null;}
function ALe(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.nh;d=a.nf;e=a.ng;f=a.nk;g=a.nl;h=a.ni;i=a.nj;j=a.nn;k=Cs(c.M,5.0);l=c.p.dq();d=X(e+(b.k.a-d|0)|0,c.M.b5.a-k|0);m=e+f|0;d=m-d|0;d=V(l.a,d);m=m-d|0;f=V(h+(b.k.b-g|0)|0,l.b);Bc(i,m,c.p.x.b);Bc(j,d,f);C_(c,i,j);}
function Vn(){var a=this;C.call(a);a.l8=null;a.l9=0;a.l$=0;a.l_=null;}
function AI4(a,b){var c,d,e,f,g,h;c=a.l8;d=a.l9;e=a.l$;f=a.l_;g=Cs(c.M,5.0);h=c.p.dq();Bc(f,V(e+(b.k.a-d|0)|0,V(h.a,g-c.Q.x.a|0)),c.p.o.b);C_(c,c.p.x,f);}
function SN(){var a=this;C.call(a);a.lZ=null;a.lX=0;a.l1=0;a.l0=0;a.l3=0;a.l2=null;}
function AFo(a,b){var c,d,e,f,g,h,i,j;c=a.lZ;d=a.lX;e=a.l1;f=a.l0;g=a.l3;h=a.l2;i=Cs(c.M,5.0);j=c.p.dq();Bc(h,V(e+(b.k.a-d|0)|0,V(j.a,i-c.Q.x.a|0)),V(g+(b.k.b-f|0)|0,j.b));C_(c,c.p.x,h);}
function Lz(){var a=this;C.call(a);a.mZ=null;a.mY=0;a.m1=0;a.m0=null;}
function AEQ(a,b){var c,d,e,f,g;c=a.mZ;d=a.mY;e=a.m1;f=a.m0;Cs(c.M,5.0);g=c.p.dq();d=V(e+(b.k.b-d|0)|0,g.b);Bc(f,c.p.o.a,d);C_(c,c.p.x,f);}
var RU=F();
function ADL(a,b){}
function Bz(){var a=this;C.call(a);a.d=null;a.cb=0;a.nQ=null;a.g5=0;}
var ASc=0;function BK(a){var b,c;b=new E3;c=ASc;ASc=c+1|0;Jc(b,c);a.nQ=Le(b);}
function JV(a,b){var c,d;c=new E3;d=ASc;ASc=d+1|0;Jc(c,d);a.nQ=Le(c);a.d=b;}
function Hh(a,b,c,d){var e;e=d.y;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Hr(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AFe(a,b){a.g5=b;}
function AEm(a){return a.g5;}
function AMQ(a){return a.d;}
function ANI(a,b){a.d=b;}
function ANH(a,b){return 1;}
function AOu(a){return null;}
function Is(a){var b;a.cb=1;b=a.d;if(b!==null){if(!b.cb){b=b.eW();if(b!==null){a.d.cb=1;a.d=b;}a.d.dP();}else if(b instanceof Gh&&b.dU.jt)a.d=b.d;}}
function ACu(){ASc=1;}
var Tu=F();
var AUl=null;function APW(){APW=Bo(Tu);AD2();}
function AD2(){var b,c;TU();b=BG((AUs.ff()).data.length);c=b.data;AUl=b;c[AUn.cQ]=1;c[AUm.cQ]=2;}
function Oe(){C.call(this);this.oW=null;}
function AFl(a,b){Tp(H5(a.oW),b,ATA,XF(B(362)));}
function Si(){C.call(this);this.nP=null;}
function AHw(a,b){var c,d;c=a.nP;d=b.g2;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function W7(){var a=this;C.call(a);a.oT=null;a.oS=null;}
function AE_(a){var b,c;b=a.oT;c=a.oS;b=b.bs;Ko(b,c,b.fM);}
function CN(){var a=this;Bz.call(a);a.jt=0;a.df=0;}
var AUr=null;function Lo(){Lo=Bo(CN);AGl();}
function AQ6(a){var b=new CN();E8(b,a);return b;}
function E8(a,b){Lo();BK(a);a.df=b;}
function ADS(a,b,c,d){var e,f;e=HX(d,a.df);IW(d,a.df,b);f=a.d.c(b,c,d);if(f<0)IW(d,a.df,e);return f;}
function AJo(a){return a.df;}
function AEb(a,b){return 0;}
function AGl(){var b;b=new M_;BK(b);AUr=b;}
function Gr(){var a=this;C.call(a);a.ba=null;a.fD=0;a.eb=0;a.sN=0;a.jT=0;a.bd=0;a.i=0;a.qx=0;a.em=null;a.d9=null;a.v=0;a.hf=0;a.cV=0;a.gK=0;a.bE=null;}
var AUt=null;var AUp=null;var AUq=0;function NJ(a,b){if(b>0&&b<3)a.eb=b;if(b==1){a.i=a.bd;a.d9=a.em;a.v=a.gK;a.gK=a.cV;EO(a);}}
function Gw(a){return a.em===null?0:1;}
function I1(a){return a.d9===null?0:1;}
function Bf(a){EO(a);return a.jT;}
function EW(a){var b;b=a.em;EO(a);return b;}
function EO(a){var b,c,d,e,f,g,h,$$je;a.jT=a.bd;a.bd=a.i;a.em=a.d9;a.cV=a.gK;a.gK=a.v;while(true){b=0;c=a.v>=a.ba.data.length?0:KL(a);a.i=c;a.d9=null;if(a.eb==4){if(c!=92)return;c=a.v;d=a.ba.data;c=c>=d.length?0:d[BQ(a)];a.i=c;switch(c){case 69:break;default:a.i=92;a.v=a.hf;return;}a.eb=a.sN;a.i=a.v>(a.ba.data.length-2|0)?0:KL(a);}a:{c=a.i;if(c!=92){e=a.eb;if(e==1)switch(c){case 36:a.i=(-536870876);break a;case 40:if(a.ba.data[a.v]!=63){a.i=(-2147483608);break a;}BQ(a);c=a.ba.data[a.v];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.i=(-134217688);BQ(a);break b;default:J(B5(B(31),E5(a),a.v));}a.i=(-67108824);BQ(a);}else{switch(c){case 33:break;case 60:BQ(a);c=a.ba.data[a.v];e=1;break b;case 61:a.i=(-536870872);BQ(a);break b;case 62:a.i=(-33554392);BQ(a);break b;default:f=ACv(a);a.i=f;if(f<256){a.fD=f;f=f<<16;a.i=f;a.i=(-1073741784)|f;break b;}f=f&255;a.i=f;a.fD=f;f=f<<16;a.i=f;a.i=(-16777176)|f;break b;}a.i=(-268435416);BQ(a);}}if(!e)break;}break a;case 41:a.i=(-536870871);break a;case 42:case 43:case 63:e
=a.v;d=a.ba.data;switch(e>=d.length?42:d[e]){case 43:a.i=c|(-2147483648);BQ(a);break a;case 63:a.i=c|(-1073741824);BQ(a);break a;default:}a.i=c|(-536870912);break a;case 46:a.i=(-536870866);break a;case 91:a.i=(-536870821);NJ(a,2);break a;case 93:if(e!=2)break a;a.i=(-536870819);break a;case 94:a.i=(-536870818);break a;case 123:a.d9=AB2(a,c);break a;case 124:a.i=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.i=(-536870874);break a;case 45:a.i=(-536870867);break a;case 91:a.i=(-536870821);break a;case 93:a.i
=(-536870819);break a;case 94:a.i=(-536870818);break a;default:}}else{c=a.v>=(a.ba.data.length-2|0)?(-1):KL(a);c:{a.i=c;switch(c){case -1:J(B5(B(31),E5(a),a.v));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.i
=AAw(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eb!=1)break a;a.i=(-2147483648)|c;break a;case 65:a.i=(-2147483583);break a;case 66:a.i=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B5(B(31),E5(a),a.v));case 68:case 83:case 87:case 100:case 115:case 119:a.d9=QV(I4(a.ba,
a.hf,1),0);a.i=0;break a;case 71:a.i=(-2147483577);break a;case 80:case 112:break c;case 81:a.sN=a.eb;a.eb=4;b=1;break a;case 90:a.i=(-2147483558);break a;case 97:a.i=7;break a;case 98:a.i=(-2147483550);break a;case 99:c=a.v;d=a.ba.data;if(c>=(d.length-2|0))J(B5(B(31),E5(a),a.v));a.i=d[BQ(a)]&31;break a;case 101:a.i=27;break a;case 102:a.i=12;break a;case 110:a.i=10;break a;case 114:a.i=13;break a;case 116:a.i=9;break a;case 117:a.i=OF(a,4);break a;case 120:a.i=OF(a,2);break a;case 122:a.i=(-2147483526);break a;default:}break a;}g
=AAg(a);h=0;if(a.i==80)h=1;try{a.d9=QV(g,h);}catch($$e){$$je=D6($$e);if($$je instanceof Iy){J(B5(B(31),E5(a),a.v));}else{throw $$e;}}a.i=0;}}if(b)continue;else break;}}
function AAg(a){var b,c,d,e,f,g;b=new M;FJ(b,10);c=a.v;d=a.ba;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=I4(d,BQ(a),1);f=new M;O(f);G(G(f,B(363)),b);return N(f);}BQ(a);c=0;a:{while(true){g=a.v;d=a.ba.data;if(g>=(d.length-2|0))break;c=d[BQ(a)];if(c==125)break a;BB(b,c);}}if(c!=125)J(B5(B(31),a.bE,a.v));}if(!b.O)J(B5(B(31),a.bE,a.v));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(363)),f);return N(b);}b:{c:{if(I(f)>3){if(Ew(f,B(363)))break c;if(Ew(f,B(364)))break c;}break b;}f=Dr(f,2);}return f;}
function AB2(a,b){var c,d,e,f,g,$$je;c=new M;FJ(c,4);d=(-1);e=2147483647;a:{while(true){f=a.v;g=a.ba.data;if(f>=g.length)break a;b=g[BQ(a)];if(b==125)break a;if(b==44&&d<0)try{d=IS(DF(c),10);AB8(c,0,XT(c));continue;}catch($$e){$$je=D6($$e);if($$je instanceof C6){break;}else{throw $$e;}}BB(c,b&65535);}J(B5(B(31),a.bE,a.v));}if(b!=125)J(B5(B(31),a.bE,a.v));if(c.O>0)b:{try{e=IS(DF(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=D6($$e);if($$je instanceof C6){}else{throw $$e;}}J(B5(B(31),a.bE,a.v));}else if
(d<0)J(B5(B(31),a.bE,a.v));if((d|e|(e-d|0))<0)J(B5(B(31),a.bE,a.v));b=a.v;g=a.ba.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.i=(-2147483525);BQ(a);break c;case 63:a.i=(-1073741701);BQ(a);break c;default:}a.i=(-536870789);}c=new Ma;c.d_=d;c.d6=e;return c;}
function E5(a){return a.bE;}
function C$(a){return !a.bd&&!a.i&&a.v==a.qx&&!Gw(a)?1:0;}
function Jx(b){return b<0?0:1;}
function EL(a){return !C$(a)&&!Gw(a)&&Jx(a.bd)?1:0;}
function M9(a){var b;b=a.bd;return b<=56319&&b>=55296?1:0;}
function Uh(a){var b;b=a.bd;return b<=57343&&b>=56320?1:0;}
function Ro(b){return b<=56319&&b>=55296?1:0;}
function NT(b){return b<=57343&&b>=56320?1:0;}
function OF(a,b){var c,d,e,f,$$je;c=new M;FJ(c,b);d=a.ba.data.length-2|0;e=0;while(true){f=BD(e,b);if(f>=0)break;if(a.v>=d)break;BB(c,a.ba.data[BQ(a)]);e=e+1|0;}if(!f)a:{try{b=IS(DF(c),16);}catch($$e){$$je=D6($$e);if($$je instanceof C6){break a;}else{throw $$e;}}return b;}J(B5(B(31),a.bE,a.v));}
function AAw(a){var b,c,d,e,f,g;b=3;c=1;d=a.ba.data;e=d.length-2|0;f=TP(d[a.v],8);switch(f){case -1:break;default:if(f>3)b=2;BQ(a);a:{while(true){if(c>=b)break a;g=a.v;if(g>=e)break a;g=TP(a.ba.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BQ(a);c=c+1|0;}}return f;}J(B5(B(31),a.bE,a.v));}
function ACv(a){var b,c,d,e;b=1;c=a.fD;a:while(true){d=a.v;e=a.ba.data;if(d>=e.length)J(B5(B(31),a.bE,d));b:{c:{switch(e[d]){case 41:BQ(a);return c|256;case 45:if(!b)J(B5(B(31),a.bE,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BQ(a);}BQ(a);return c;}
function BQ(a){var b,c,d,e,f;b=a.v;a.hf=b;if(!(a.fD&4))a.v=b+1|0;else{c=a.ba.data.length-2|0;a.v=b+1|0;a:while(true){d=a.v;if(d<c&&PT(a.ba.data[d])){a.v=a.v+1|0;continue;}d=a.v;if(d>=c)break;e=a.ba.data;if(e[d]!=35)break;a.v=d+1|0;while(true){f=a.v;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.v=f+1|0;}}}return a.hf;}
function ABT(b){return AUt.AH(b);}
function KL(a){var b,c,d,e;b=a.ba.data[BQ(a)];if(CD(b)){c=a.hf+1|0;d=a.ba.data;if(c<d.length){e=d[c];if(CY(e)){BQ(a);return Ei(b,e);}}}return b;}
function M7(a){return a.cV;}
function H$(){var a=this;BA.call(a);a.v8=null;a.vG=null;a.pe=0;}
function B5(a,b,c){var d=new H$();ID(d,a,b,c);return d;}
function ID(a,b,c,d){U(a);a.pe=(-1);a.v8=b;a.vG=c;a.pe=d;}
function V4(){C.call(this);this.sw=null;}
function AK6(a,b){var c,d;c=a.sw;d=0;while(d<b.length){XR(c,b[d]);d=d+1|0;}}
var AAb=F(0);
function Ti(){var a=this;C.call(a);a.oo=null;a.oq=null;a.os=null;}
function AKL(a,b){a.oo.m(APG(a.oq,b,a.os));}
var QF=F(CN);
function ADs(a,b,c,d){var e;e=a.df;BE(d,e,b-Db(d,e)|0);return a.d.c(b,c,d);}
function AMi(a,b){return 0;}
var WH=F(CN);
function AFc(a,b,c,d){return b;}
var OH=F(CN);
function AEk(a,b,c,d){if(Db(d,a.df)!=b)b=(-1);return b;}
function RK(){CN.call(this);this.mC=0;}
function ADy(a,b,c,d){var e;e=a.df;BE(d,e,b-Db(d,e)|0);a.mC=b;return b;}
function AKU(a,b){return 0;}
var Fg=F(CN);
function AN0(a,b,c,d){if(d.iJ!=1&&b!=d.y)return (-1);d.h2=1;IW(d,0,b);return b;}
function BS(){Bz.call(this);this.bC=0;}
function Do(a){BK(a);a.bC=1;}
function AOV(a,b,c,d){var e;if((b+a.bS()|0)>d.y){d.c7=1;return (-1);}e=a.bp(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function ANd(a){return a.bC;}
function AH9(a,b){return 1;}
var ABF=F(BS);
function Gt(a){var b=new ABF();AJA(b,a);return b;}
function AJA(a,b){JV(a,b);a.bC=1;a.g5=1;a.bC=0;}
function AMI(a,b,c){return 0;}
function AGr(a,b,c,d){var e,f,g;e=d.y;f=d.cz;while(true){g=BD(b,e);if(g>0)return (-1);if(g<0&&CY(L(c,b))&&b>f&&CD(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AE2(a,b,c,d,e){var f,g;f=e.y;g=e.cz;while(true){if(c<b)return (-1);if(c<f&&CY(L(d,c))&&c>g&&CD(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ADw(a,b){return 0;}
function BO(){var a=this;Bz.call(a);a.bx=null;a.dU=null;a.T=0;}
function AQt(a,b){var c=new BO();Fh(c,a,b);return c;}
function Fh(a,b,c){BK(a);a.bx=b;a.dU=c;a.T=c.df;}
function AG0(a,b,c,d){var e,f,g,h;if(a.bx===null)return (-1);e=Fl(d,a.T);Dn(d,a.T,b);f=a.bx.j;g=0;while(true){if(g>=f){Dn(d,a.T,e);return (-1);}h=(Bs(a.bx,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AKN(a,b){a.dU.d=b;}
function AIW(a,b){var c;a:{c=a.bx;if(c!==null){c=BR(c);while(true){if(!B1(c))break a;if(!(BV(c)).bN(b))continue;else return 1;}}}return 0;}
function ALv(a,b){return HX(b,a.T)>=0&&Fl(b,a.T)==HX(b,a.T)?0:1;}
function AEY(a){var b,c,d,e;a.cb=1;b=a.dU;if(b!==null&&!b.cb)Is(b);a:{b=a.bx;if(b!==null){c=b.j;d=0;while(true){if(d>=c)break a;b=Bs(a.bx,d);e=b.eW();if(e===null)e=b;else{b.cb=1;Ed(a.bx,d);Qg(a.bx,d,e);}if(!e.cb)e.dP();d=d+1|0;}}}if(a.d!==null)Is(a);}
var Il=F(BO);
function AKx(a,b,c,d){var e,f,g,h;e=Db(d,a.T);BE(d,a.T,b);f=a.bx.j;g=0;while(true){if(g>=f){BE(d,a.T,e);return (-1);}h=(Bs(a.bx,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ALV(a,b){return !Db(b,a.T)?0:1;}
var DD=F(Il);
function AFE(a,b,c,d){var e,f,g;e=Db(d,a.T);BE(d,a.T,b);f=a.bx.j;g=0;while(g<f){if((Bs(a.bx,g)).c(b,c,d)>=0)return a.d.c(a.dU.mC,c,d);g=g+1|0;}BE(d,a.T,e);return (-1);}
function ALD(a,b){a.d=b;}
var LT=F(DD);
function AKG(a,b,c,d){var e,f;e=a.bx.j;f=0;while(f<e){if((Bs(a.bx,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function ANO(a,b){return 0;}
var Vb=F(DD);
function AD7(a,b,c,d){var e,f;e=a.bx.j;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bx,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ANh(a,b){return 0;}
var PV=F(DD);
function AET(a,b,c,d){var e,f,g,h;e=a.bx.j;f=d.h8?0:d.cz;a:{g=a.d.c(b,c,d);if(g>=0){BE(d,a.T,b);h=0;while(true){if(h>=e)break a;if((Bs(a.bx,h)).ch(f,b,c,d)>=0){BE(d,a.T,(-1));return g;}h=h+1|0;}}}return (-1);}
function APl(a,b){return 0;}
var Sx=F(DD);
function AC6(a,b,c,d){var e,f;e=a.bx.j;BE(d,a.T,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bx,f)).ch(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AL_(a,b){return 0;}
function Gh(){BO.call(this);this.cI=null;}
function AQR(a,b){var c=new Gh();Yi(c,a,b);return c;}
function Yi(a,b,c){BK(a);a.cI=b;a.dU=c;a.T=c.df;}
function ADo(a,b,c,d){var e,f;e=Fl(d,a.T);Dn(d,a.T,b);f=a.cI.c(b,c,d);if(f>=0)return f;Dn(d,a.T,e);return (-1);}
function AJb(a,b,c,d){var e;e=a.cI.cc(b,c,d);if(e>=0)Dn(d,a.T,e);return e;}
function AMp(a,b,c,d,e){var f;f=a.cI.ch(b,c,d,e);if(f>=0)Dn(e,a.T,f);return f;}
function AIS(a,b){return a.cI.bN(b);}
function AKR(a){var b;b=new Me;Yi(b,a.cI,a.dU);a.d=b;return b;}
function AOx(a){var b;a.cb=1;b=a.dU;if(b!==null&&!b.cb)Is(b);b=a.cI;if(b!==null&&!b.cb){b=b.eW();if(b!==null){a.cI.cb=1;a.cI=b;}a.cI.dP();}}
var Gs=F();
function T(){var a=this;Gs.call(a);a.bc=0;a.b$=0;a.I=null;a.iO=null;a.jm=null;a.J=0;}
var AUu=null;function NE(){NE=Bo(T);AFn();}
function Bn(a){var b;NE();b=new VZ;b.B=BG(64);a.I=b;}
function AD$(a){return null;}
function ADH(a){return a.I;}
function Z8(a){var b,c,d,e,f;if(!a.b$)b=GS(a.I,0)>=2048?0:1;else{a:{c=a.I;b=0;d=c.bo;if(b<d){e=c.B.data;f=(e[0]^(-1))>>>0|0;if(f)b=HP(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+HP(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AHa(a){return a.J;}
function AM8(a){return a;}
function XJ(a){var b,c;if(a.jm===null){b=a.el();c=new Vo;c.wu=a;c.m7=b;Bn(c);a.jm=c;Eh(c,a.b$);}return a.jm;}
function Hb(a){var b,c;if(a.iO===null){b=a.el();c=new Vl;c.v_=a;c.sh=b;c.sY=a;Bn(c);a.iO=c;Eh(c,a.bc);a.iO.J=a.J;}return a.iO;}
function AOt(a){return 0;}
function Eh(a,b){var c;c=a.bc;if(c^b){a.bc=c?0:1;a.b$=a.b$?0:1;}if(!a.J)a.J=1;return a;}
function AGt(a){return a.bc;}
function Ju(b,c){NE();return b.l(c);}
function HN(b,c){var d,e;NE();if(b.c2()!==null&&c.c2()!==null){b=b.c2();c=c.c2();d=X(b.B.data.length,c.B.data.length);e=0;a:{while(e<d){if(b.B.data[e]&c.B.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function QV(b,c){var d,e,f;NE();d=0;while(true){AL9();e=AUv.data;if(d>=e.length){f=new Iy;Bj(f,B(31));f.wO=B(31);f.wx=b;J(f);}e=e[d].data;if(Bt(b,e[0]))break;d=d+1|0;}return ABa(e[1],c);}
function AFn(){var b;b=new GJ;AL9();AUu=b;}
function X_(){var a=this;T.call(a);a.kw=0;a.mB=0;a.fU=0;a.j_=0;a.ds=0;a.eP=0;a.F=null;a.bv=null;}
function Dc(){var a=new X_();AO7(a);return a;}
function ANU(a,b){var c=new X_();AFd(c,a,b);return c;}
function AO7(a){Bn(a);a.F=APo();}
function AFd(a,b,c){Bn(a);a.F=APo();a.kw=b;a.mB=c;}
function Cr(a,b){a:{if(a.kw){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ds){Lw(a.F,Hc(b&65535));break a;}KI(a.F,Hc(b&65535));break a;}if(a.mB&&b>128){a.fU=1;b=Gl(Gk(b));}}}if(!(!Ro(b)&&!NT(b))){if(a.j_)Lw(a.I,b-55296|0);else KI(a.I,b-55296|0);}if(a.ds)Lw(a.F,b);else KI(a.F,b);if(!a.J&&Lb(b))a.J=1;return a;}
function ACD(a,b){var c,d,e;if(!a.J&&b.J)a.J=1;if(a.j_){if(!b.b$)FD(a.I,b.el());else C3(a.I,b.el());}else if(!b.b$)Fw(a.I,b.el());else{Fb(a.I,b.el());C3(a.I,b.el());a.b$=a.b$?0:1;a.j_=1;}if(!a.eP&&b.c2()!==null){if(a.ds){if(!b.bc)FD(a.F,b.c2());else C3(a.F,b.c2());}else if(!b.bc)Fw(a.F,b.c2());else{Fb(a.F,b.c2());C3(a.F,b.c2());a.bc=a.bc?0:1;a.ds=1;}}else{c=a.bc;d=a.bv;if(d!==null){if(!c){e=new Nw;e.uF=a;e.tn=c;e.sK=d;e.st=b;Bn(e);a.bv=e;}else{e=new Nx;e.wU=a;e.pO=c;e.ps=d;e.oO=b;Bn(e);a.bv=e;}}else{if(c&&!a.ds
&&Lf(a.F)){d=new Nt;d.vF=a;d.pI=b;Bn(d);a.bv=d;}else if(!c){d=new Nr;d.jW=a;d.i_=c;d.nK=b;Bn(d);a.bv=d;}else{d=new Ns;d.kI=a;d.jf=c;d.sy=b;Bn(d);a.bv=d;}a.eP=1;}}return a;}
function BP(a,b,c){var d,e,f,g,h;if(b>c){d=new BA;U(d);J(d);}a:{b:{if(!a.kw){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cr(a,b);b=b+1|0;}}if(!a.ds)Hw(a.F,b,c+1|0);else{d=a.F;c=c+1|0;if(b>c){d=new By;U(d);J(d);}e=d.bo;if(b<e){f=X(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.B.data;h[g]=h[g]&(HK(d,b)|Hn(d,f));}else{h=d.B.data;h[g]=h[g]&HK(d,b);e=g+1|0;while(e<c){d.B.data[e]=0;e=e+1|0;}if(f&31){h=d.B.data;h[c]=h[c]&Hn(d,f);}}GN(d);}}}}return a;}
function Xe(a,b){var c,d,e;if(!a.J&&b.J)a.J=1;if(b.fU)a.fU=1;c=a.b$;if(!(c^b.b$)){if(!c)Fw(a.I,b.I);else C3(a.I,b.I);}else if(c)FD(a.I,b.I);else{Fb(a.I,b.I);C3(a.I,b.I);a.b$=1;}if(!a.eP&&CR(b)!==null){c=a.bc;if(!(c^b.bc)){if(!c)Fw(a.F,CR(b));else C3(a.F,CR(b));}else if(c)FD(a.F,CR(b));else{Fb(a.F,CR(b));C3(a.F,CR(b));a.bc=1;}}else{c=a.bc;d=a.bv;if(d!==null){if(!c){e=new Nl;e.ul=a;e.rS=c;e.sx=d;e.s_=b;Bn(e);a.bv=e;}else{e=new Oa;e.uR=a;e.s6=c;e.mc=d;e.mE=b;Bn(e);a.bv=e;}}else{if(!a.ds&&Lf(a.F)){if(!c){d=new Nu;d.wX
=a;d.oC=b;Bn(d);a.bv=d;}else{d=new Nv;d.uV=a;d.sT=b;Bn(d);a.bv=d;}}else if(!c){d=new Ny;d.rV=a;d.p_=b;d.pw=c;Bn(d);a.bv=d;}else{d=new NA;d.qA=a;d.qT=b;d.q$=c;Bn(d);a.bv=d;}a.eP=1;}}}
function VR(a,b){var c,d,e;if(!a.J&&b.J)a.J=1;if(b.fU)a.fU=1;c=a.b$;if(!(c^b.b$)){if(!c)C3(a.I,b.I);else Fw(a.I,b.I);}else if(!c)FD(a.I,b.I);else{Fb(a.I,b.I);C3(a.I,b.I);a.b$=0;}if(!a.eP&&CR(b)!==null){c=a.bc;if(!(c^b.bc)){if(!c)C3(a.F,CR(b));else Fw(a.F,CR(b));}else if(!c)FD(a.F,CR(b));else{Fb(a.F,CR(b));C3(a.F,CR(b));a.bc=0;}}else{c=a.bc;d=a.bv;if(d!==null){if(!c){e=new Nn;e.uE=a;e.rX=c;e.m5=d;e.pL=b;Bn(e);a.bv=e;}else{e=new No;e.u1=a;e.rl=c;e.lU=d;e.rQ=b;Bn(e);a.bv=e;}}else{if(!a.ds&&Lf(a.F)){if(!c){d=new Nj;d.uW
=a;d.n_=b;Bn(d);a.bv=d;}else{d=new Nk;d.wS=a;d.oe=b;Bn(d);a.bv=d;}}else if(!c){d=new Np;d.t3=a;d.th=b;d.qM=c;Bn(d);a.bv=d;}else{d=new Ni;d.qL=a;d.rs=b;d.pQ=c;Bn(d);a.bv=d;}a.eP=1;}}}
function CW(a,b){var c;c=a.bv;if(c!==null)return a.bc^c.l(b);return a.bc^Dl(a.F,b);}
function CR(a){if(!a.eP)return a.F;return null;}
function AGk(a){return a.I;}
function ANw(a){var b,c;if(a.bv!==null)return a;b=CR(a);c=new Nm;c.ui=a;c.hI=b;Bn(c);return Eh(c,a.bc);}
function AJZ(a){var b,c,d;b=new M;O(b);c=GS(a.F,0);while(c>=0){HR(b,Gd(c));BB(b,124);c=GS(a.F,c+1|0);}d=b.O;if(d>0)Vd(b,d-1|0);return N(b);}
function AGw(a){return a.fU;}
function Iy(){var a=this;Bm.call(a);a.wO=null;a.wx=null;}
function DO(){Bz.call(this);this.H=null;}
function C5(a,b,c,d){JV(a,c);a.H=b;a.g5=d;}
function AO6(a){return a.H;}
function AMs(a,b){return !a.H.bN(b)&&!a.d.bN(b)?0:1;}
function ANW(a,b){return 1;}
function AJx(a){var b;a.cb=1;b=a.d;if(b!==null&&!b.cb){b=b.eW();if(b!==null){a.d.cb=1;a.d=b;}a.d.dP();}b=a.H;if(b!==null){if(!b.cb){b=b.eW();if(b!==null){a.H.cb=1;a.H=b;}a.H.dP();}else if(b instanceof Gh&&b.dU.jt)a.H=b.d;}}
function CX(){DO.call(this);this.V=null;}
function AQY(a,b,c){var d=new CX();ED(d,a,b,c);return d;}
function ED(a,b,c,d){C5(a,b,c,d);a.V=b;}
function AC8(a,b,c,d){var e,f;e=0;a:{while((b+a.V.bS()|0)<=d.y){f=a.V.bp(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.V.bS()|0;e=e+(-1)|0;}return f;}
function EP(){CX.call(this);this.iI=null;}
function AP7(a,b,c,d){var e=new EP();Q6(e,a,b,c,d);return e;}
function Q6(a,b,c,d,e){ED(a,c,d,e);a.iI=b;}
function ADV(a,b,c,d){var e,f,g,h,i;e=a.iI;f=e.d_;g=e.d6;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.V.bS()|0)>d.y)break a;i=a.V.bp(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.V.bS()|0;h=h+(-1)|0;}return i;}if((b+a.V.bS()|0)>d.y){d.c7=1;return (-1);}i=a.V.bp(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CO=F(DO);
function ADn(a,b,c,d){var e;if(!a.H.G(d))return a.d.c(b,c,d);e=a.H.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var En=F(CX);
function AJh(a,b,c,d){var e;e=a.H.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function APp(a,b){a.d=b;a.H.L(b);}
var Vp=F(CX);
function AON(a,b,c,d){while((b+a.V.bS()|0)<=d.y&&a.V.bp(b,c)>0){b=b+a.V.bS()|0;}return a.d.c(b,c,d);}
function AJV(a,b,c,d){var e,f,g;e=a.d.cc(b,c,d);if(e<0)return (-1);f=e-a.V.bS()|0;while(f>=b&&a.V.bp(f,c)>0){g=f-a.V.bS()|0;e=f;f=g;}return e;}
function W(){var a=this;C.call(a);a.kS=null;a.jU=null;}
function ABa(a,b){if(!b&&a.kS===null)a.kS=a.D();else if(b&&a.jU===null)a.jU=Eh(a.D(),1);if(b)return a.jU;return a.kS;}
var C6=F(BA);
function Ma(){var a=this;Gs.call(a);a.d_=0;a.d6=0;}
function AJ6(a){var b,c,d,e,f;b=a.d_;c=a.d6;d=c==2147483647?B(31):Le(ABS(c));e=new M;O(e);BB(e,123);f=S(e,b);BB(f,44);BB(G(f,d),125);return N(e);}
var M_=F(Bz);
function AIy(a,b,c,d){return b;}
function AKM(a,b){return 0;}
function VZ(){var a=this;C.call(a);a.B=null;a.bo=0;}
function APo(){var a=new VZ();AEB(a);return a;}
function AEB(a){a.B=BG(0);}
function KI(a,b){var c,d;c=b/32|0;if(b>=a.bo){HT(a,c+1|0);a.bo=b+1|0;}d=a.B.data;d[c]=d[c]|1<<(b%32|0);}
function Hw(a,b,c){var d,e,f,g,h;d=BD(b,c);if(d>0){e=new By;U(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bo){HT(a,f+1|0);a.bo=c;}if(d==f){g=a.B.data;g[d]=g[d]|Hn(a,b)&HK(a,c);}else{g=a.B.data;g[d]=g[d]|Hn(a,b);h=d+1|0;while(h<f){a.B.data[h]=(-1);h=h+1|0;}if(c&31){g=a.B.data;g[f]=g[f]|HK(a,c);}}}
function Hn(a,b){return (-1)<<(b%32|0);}
function HK(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Lw(a,b){var c,d;c=b/32|0;d=a.B.data;if(c<d.length){d[c]=d[c]&Jr((-2),b%32|0);if(b==(a.bo-1|0))GN(a);}}
function Dl(a,b){var c,d;c=b/32|0;d=a.B.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function GS(a,b){var c,d,e,f;c=a.bo;if(b>=c)return (-1);d=b/32|0;e=a.B.data;f=e[d]>>>(b%32|0)|0;if(f)return HP(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+HP(e[f])|0;f=f+1|0;}return (-1);}
function HT(a,b){var c;c=a.B.data.length;if(c>=b)return;c=V((b*3|0)/2|0,(c*2|0)+1|0);a.B=ACq(a.B,c);}
function GN(a){var b,c,d;b=(a.bo+31|0)/32|0;a.bo=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=MO(a.B.data[c]);if(d<32)break;c=c+(-1)|0;a.bo=a.bo-32|0;}a.bo=a.bo-d|0;}}
function C3(a,b){var c,d,e,f;c=X(a.B.data.length,b.B.data.length);d=0;while(d<c){e=a.B.data;e[d]=e[d]&b.B.data[d];d=d+1|0;}while(true){f=a.B.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bo=X(a.bo,b.bo);GN(a);}
function FD(a,b){var c,d,e;c=X(a.B.data.length,b.B.data.length);d=0;while(d<c){e=a.B.data;e[d]=e[d]&(b.B.data[d]^(-1));d=d+1|0;}GN(a);}
function Fw(a,b){var c,d,e;c=V(a.bo,b.bo);a.bo=c;HT(a,(c+31|0)/32|0);c=X(a.B.data.length,b.B.data.length);d=0;while(d<c){e=a.B.data;e[d]=e[d]|b.B.data[d];d=d+1|0;}}
function Fb(a,b){var c,d,e;c=V(a.bo,b.bo);a.bo=c;HT(a,(c+31|0)/32|0);c=X(a.B.data.length,b.B.data.length);d=0;while(d<c){e=a.B.data;e[d]=e[d]^b.B.data[d];d=d+1|0;}GN(a);}
function Lf(a){return a.bo?0:1;}
function L1(){var a=this;BO.call(a);a.oh=null;a.uh=0;}
function Pc(){var a=this;BO.call(a);a.le=null;a.kL=null;}
function AAJ(a,b){var c=new Pc();ACl(c,a,b);return c;}
function ACl(a,b,c){BK(a);a.le=b;a.kL=c;}
function ADR(a,b,c,d){var e,f,g,h,i;e=a.le.c(b,c,d);if(e<0)a:{f=a.kL;g=d.cz;e=d.y;h=b+1|0;e=BD(h,e);if(e>0){d.c7=1;e=(-1);}else{i=L(c,b);if(!f.oh.l(i))e=(-1);else{if(CD(i)){if(e<0&&CY(L(c,h))){e=(-1);break a;}}else if(CY(i)&&b>g&&CD(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AKu(a,b){a.d=b;a.kL.d=b;a.le.L(b);}
function AEn(a,b){return 1;}
function AD9(a,b){return 1;}
function Dp(){var a=this;BO.call(a);a.dl=null;a.vy=0;}
function AIt(a){var b=new Dp();To(b,a);return b;}
function To(a,b){BK(a);a.dl=b.ih();a.vy=b.bc;}
function AGc(a,b,c,d){var e,f,g,h;e=d.y;if(b<e){f=b+1|0;g=L(c,b);if(a.l(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(G2(g,f)&&a.l(Ei(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AGI(a,b){return a.dl.l(b);}
function ADM(a,b){if(b instanceof DG)return Ju(a.dl,b.fk);if(b instanceof Eb)return Ju(a.dl,b.cZ);if(b instanceof Dp)return HN(a.dl,b.dl);if(!(b instanceof D4))return 1;return HN(a.dl,b.eB);}
function AIl(a){return a.dl;}
function AM1(a,b){a.d=b;}
function AGo(a,b){return 1;}
var Iw=F(Dp);
function AH$(a,b){return a.dl.l(Gl(Gk(b)));}
function X4(){var a=this;BS.call(a);a.o7=null;a.vg=0;}
function AHb(a){var b=new X4();AKa(b,a);return b;}
function AKa(a,b){Do(a);a.o7=b.ih();a.vg=b.bc;}
function AIz(a,b,c){return !a.o7.l(EI(Em(L(c,b))))?(-1):1;}
function D4(){var a=this;BS.call(a);a.eB=null;a.vT=0;}
function ANp(a){var b=new D4();ALd(b,a);return b;}
function ALd(a,b){Do(a);a.eB=b.ih();a.vT=b.bc;}
function LA(a,b,c){return !a.eB.l(L(c,b))?(-1):1;}
function AKP(a,b){if(b instanceof Eb)return Ju(a.eB,b.cZ);if(b instanceof D4)return HN(a.eB,b.eB);if(!(b instanceof Dp)){if(!(b instanceof DG))return 1;return 0;}return HN(a.eB,b.dl);}
function NI(){var a=this;BO.call(a);a.gf=null;a.k6=null;a.iF=0;}
function ANB(a,b){var c=new NI();ADp(c,a,b);return c;}
function ADp(a,b,c){BK(a);a.gf=b;a.iF=c;}
function AJg(a,b){a.d=b;}
function Po(a){if(a.k6===null)a.k6=FG(a.gf);return a.k6;}
function ACX(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.y;f=BG(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?ES([k,l]):ES([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.iF;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gf.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.iF==3){k=f[0];m=a.gf.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.iF==2){b=f[0];m=a.gf.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AEh(a,b){return b instanceof NI&&!Bt(Po(b),Po(a))?0:1;}
function ANA(a,b){return 1;}
function Eb(){BS.call(this);this.cZ=0;}
function Yu(a){var b=new Eb();ALh(b,a);return b;}
function ALh(a,b){Do(a);a.cZ=b;}
function AIh(a){return 1;}
function AG9(a,b,c){return a.cZ!=L(c,b)?(-1):1;}
function AF9(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return Hh(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=Gp(c,a.cZ,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AIo(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hr(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FM(d,a.cZ,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ANs(a,b){if(b instanceof Eb)return b.cZ!=a.cZ?0:1;if(!(b instanceof D4)){if(b instanceof Dp)return b.l(a.cZ);if(!(b instanceof DG))return 1;return 0;}return LA(b,0,V0(a.cZ))<=0?0:1;}
function AB$(){BS.call(this);this.lM=0;}
function ALK(a){var b=new AB$();AJT(b,a);return b;}
function AJT(a,b){Do(a);a.lM=EI(Em(b));}
function ACS(a,b,c){return a.lM!=EI(Em(L(c,b)))?(-1):1;}
function Xg(){var a=this;BS.call(a);a.tc=0;a.mW=0;}
function AEM(a){var b=new Xg();AL4(b,a);return b;}
function AL4(a,b){Do(a);a.tc=b;a.mW=Hc(b);}
function ADh(a,b,c){return a.tc!=L(c,b)&&a.mW!=L(c,b)?(-1):1;}
function E0(){var a=this;BO.call(a);a.gW=0;a.jH=null;a.jc=null;a.i9=0;}
function ARG(a,b){var c=new E0();M0(c,a,b);return c;}
function M0(a,b,c){BK(a);a.gW=1;a.jc=b;a.i9=c;}
function AOw(a,b){a.d=b;}
function AKw(a,b,c,d){var e,f,g,h,i,j,k,l;e=BG(4);f=d.y;if(b>=f)return (-1);g=JM(a,b,c,f);h=b+a.gW|0;i=ABT(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;D7(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=JM(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(ABT(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.gW|0;if(h>=f){b=k;break a;}g=JM(a,h,c,f);b=k;}}}if(b!=a.i9)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.jc.data[g])break;g=g+1|0;}return (-1);}
function VQ(a){var b,c;if(a.jH===null){b=new M;O(b);c=0;while(c<a.i9){HR(b,Gd(a.jc.data[c]));c=c+1|0;}a.jH=N(b);}return a.jH;}
function JM(a,b,c,d){var e,f,g;a.gW=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(G2(e,f)){g=BL(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CD(g[0])&&CY(g[1])?Ei(g[0],g[1]):g[0];a.gW=2;}}return e;}
function AIA(a,b){return b instanceof E0&&!Bt(VQ(b),VQ(a))?0:1;}
function ALH(a,b){return 1;}
var Wh=F(E0);
var SP=F(E0);
var W4=F(CO);
function AFh(a,b,c,d){var e;while(true){e=a.H.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var Oz=F(CO);
function AJM(a,b,c,d){var e;e=a.H.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.H.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FC=F(CO);
function AMV(a,b,c,d){var e;if(!a.H.G(d))return a.d.c(b,c,d);e=a.H.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AN4(a,b){a.d=b;a.H.L(b);}
var Of=F(FC);
function AIk(a,b,c,d){var e;e=a.H.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AJ7(a,b){a.d=b;}
function EX(){var a=this;CO.call(a);a.fz=null;a.c$=0;}
function AUw(a,b,c,d,e){var f=new EX();Iu(f,a,b,c,d,e);return f;}
function Iu(a,b,c,d,e,f){C5(a,c,d,e);a.fz=b;a.c$=f;}
function APf(a,b,c,d){var e,f;e=L7(d,a.c$);if(!a.H.G(d))return a.d.c(b,c,d);if(e>=a.fz.d6)return a.d.c(b,c,d);f=a.c$;e=e+1|0;D1(d,f,e);f=a.H.c(b,c,d);if(f>=0){D1(d,a.c$,0);return f;}f=a.c$;e=e+(-1)|0;D1(d,f,e);if(e>=a.fz.d_)return a.d.c(b,c,d);D1(d,a.c$,0);return (-1);}
var Mj=F(EX);
function AHD(a,b,c,d){var e,f,g;e=0;f=a.fz.d6;a:{while(true){g=a.H.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fz.d_)return (-1);return a.d.c(b,c,d);}
var Qh=F(CO);
function AOC(a,b,c,d){var e;if(!a.H.G(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.H.c(b,c,d);}
var Pn=F(FC);
function AEq(a,b,c,d){var e;if(!a.H.G(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.H.c(b,c,d);return e;}
var TX=F(EX);
function ADD(a,b,c,d){var e,f,g;e=L7(d,a.c$);if(!a.H.G(d))return a.d.c(b,c,d);f=a.fz;if(e>=f.d6){D1(d,a.c$,0);return a.d.c(b,c,d);}if(e<f.d_){D1(d,a.c$,e+1|0);g=a.H.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){D1(d,a.c$,0);return g;}D1(d,a.c$,e+1|0);g=a.H.c(b,c,d);}return g;}
var Qj=F(DO);
function AO3(a,b,c,d){var e;e=d.y;if(e>b)return a.d.ch(b,e,c,d);return a.d.c(b,c,d);}
function AM$(a,b,c,d){var e;e=d.y;if(a.d.ch(b,e,c,d)>=0)return b;return (-1);}
function Nh(){DO.call(this);this.jS=null;}
function AKS(a,b,c,d){var e,f;e=d.y;f=T0(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.ch(b,e,c,d);return a.d.c(b,c,d);}
function AC1(a,b,c,d){var e,f,g,h;e=d.y;f=a.d.cc(b,c,d);if(f<0)return (-1);g=T0(a,f,e,c);if(g>=0)e=g;g=V(f,a.d.ch(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.jS.g1(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function T0(a,b,c,d){while(true){if(b>=c)return (-1);if(a.jS.g1(L(d,b)))break;b=b+1|0;}return b;}
var Ey=F();
var AUx=null;var AUy=null;function Oi(b){var c;if(!(b&1)){c=AUy;if(c!==null)return c;c=new Un;AUy=c;return c;}c=AUx;if(c!==null)return c;c=new Um;AUx=c;return c;}
var W6=F(CX);
function ADF(a,b,c,d){var e;a:{while(true){if((b+a.V.bS()|0)>d.y)break a;e=a.V.bp(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Vk=F(En);
function AJL(a,b,c,d){var e;if((b+a.V.bS()|0)<=d.y){e=a.V.bp(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var N3=F(EP);
function AMw(a,b,c,d){var e,f,g,h,i;e=a.iI;f=e.d_;g=e.d6;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.V.bS()|0)>d.y)break a;i=a.V.bp(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.V.bS()|0)>d.y){d.c7=1;return (-1);}i=a.V.bp(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Pj=F(CX);
function AKK(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.V.bS()|0)<=d.y){e=a.V.bp(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var S9=F(En);
function ADK(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.H.c(b,c,d);}
var PW=F(EP);
function AMM(a,b,c,d){var e,f,g,h,i,j;e=a.iI;f=e.d_;g=e.d6;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.V.bS()|0)<=d.y){i=a.V.bp(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.V.bS()|0)>d.y){d.c7=1;return (-1);}j=a.V.bp(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var JD=F(Bz);
function AIU(a,b,c,d){if(b&&!(d.eQ&&b==d.cz))return (-1);return a.d.c(b,c,d);}
function AHU(a,b){return 0;}
function YG(){Bz.call(this);this.sL=0;}
function ANn(a){var b=new YG();AIe(b,a);return b;}
function AIe(a,b){BK(a);a.sL=b;}
function AD6(a,b,c,d){var e,f,g;e=b<d.y?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.h8?0:d.cz;return (e!=32&&!Pq(a,e,b,g,c)?0:1)^(f!=32&&!Pq(a,f,b-1|0,g,c)?0:1)^a.sL?(-1):a.d.c(b,c,d);}
function AEe(a,b){return 0;}
function Pq(a,b,c,d,e){var f;if(!IP(b)&&b!=95){a:{if(Co(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(IP(f))return 0;if(Co(f)!=6)return 1;}}return 1;}return 0;}
var Nd=F(Bz);
function AIc(a,b,c,d){if(b!=d.g7)return (-1);return a.d.c(b,c,d);}
function APb(a,b){return 0;}
function V1(){Bz.call(this);this.fG=0;}
function AQ$(a){var b=new V1();ABH(b,a);return b;}
function ABH(a,b){BK(a);a.fG=b;}
function ALo(a,b,c,d){var e,f,g;e=!d.eQ?I(c):d.y;if(b>=e){BE(d,a.fG,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BE(d,a.fG,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BE(d,a.fG,0);return a.d.c(b,c,d);}
function AE8(a,b){var c;c=!Db(b,a.fG)?0:1;BE(b,a.fG,(-1));return c;}
var VL=F(Bz);
function AKq(a,b,c,d){if(b<(d.h8?I(c):d.y))return (-1);d.c7=1;d.wi=1;return a.d.c(b,c,d);}
function ACQ(a,b){return 0;}
function Mv(){Bz.call(this);this.p1=null;}
function AEX(a,b,c,d){a:{if(b!=d.y){if(!b)break a;if(d.eQ&&b==d.cz)break a;if(a.p1.rn(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AGT(a,b){return 0;}
var AB0=F(BO);
function ARr(){var a=new AB0();AKg(a);return a;}
function AKg(a){BK(a);}
function AOH(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.c7=1;return (-1);}g=L(c,b);if(CD(g)){h=b+2|0;if(h<=e&&G2(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AEj(a,b){a.d=b;}
function AKb(a){return (-2147483602);}
function AEi(a,b){return 1;}
function X$(){BO.call(this);this.kk=null;}
function AQ5(a){var b=new X$();AE6(b,a);return b;}
function AE6(a,b){BK(a);a.kk=b;}
function AKj(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.c7=1;return (-1);}g=L(c,b);if(CD(g)){b=b+2|0;if(b<=e){h=L(c,f);if(G2(g,h))return a.kk.g1(Ei(g,h))?(-1):a.d.c(b,c,d);}}return a.kk.g1(g)?(-1):a.d.c(f,c,d);}
function AMf(a,b){a.d=b;}
function ACM(a){return (-2147483602);}
function AOS(a,b){return 1;}
function ABQ(){Bz.call(this);this.gO=0;}
function AQz(a){var b=new ABQ();AGQ(b,a);return b;}
function AGQ(a,b){BK(a);a.gO=b;}
function AIE(a,b,c,d){var e;e=!d.eQ?I(c):d.y;if(b>=e){BE(d,a.gO,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BE(d,a.gO,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AGO(a,b){var c;c=!Db(b,a.gO)?0:1;BE(b,a.gO,(-1));return c;}
function Z9(){Bz.call(this);this.gV=0;}
function AQk(a){var b=new Z9();AHc(b,a);return b;}
function AHc(a,b){BK(a);a.gV=b;}
function AKo(a,b,c,d){if((!d.eQ?I(c)-b|0:d.y-b|0)<=0){BE(d,a.gV,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BE(d,a.gV,1);return a.d.c(b+1|0,c,d);}
function AGF(a,b){var c;c=!Db(b,a.gV)?0:1;BE(b,a.gV,(-1));return c;}
function Xd(){Bz.call(this);this.e_=0;}
function APF(a){var b=new Xd();APh(b,a);return b;}
function APh(a,b){BK(a);a.e_=b;}
function AHJ(a,b,c,d){var e,f,g;e=!d.eQ?I(c)-b|0:d.y-b|0;if(!e){BE(d,a.e_,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BE(d,a.e_,0);return a.d.c(b,c,d);case 13:if(g!=10){BE(d,a.e_,0);return a.d.c(b,c,d);}BE(d,a.e_,0);return a.d.c(b,c,d);default:}return (-1);}
function AFb(a,b){var c;c=!Db(b,a.e_)?0:1;BE(b,a.e_,(-1));return c;}
function GK(){var a=this;BO.call(a);a.my=0;a.gc=0;}
function ARA(a,b){var c=new GK();NR(c,a,b);return c;}
function NR(a,b,c){BK(a);a.my=b;a.gc=c;}
function ADG(a,b,c,d){var e,f,g,h;e=FU(a,d);if(e!==null&&(b+I(e)|0)<=d.y){f=0;while(true){if(f>=I(e)){BE(d,a.gc,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&Hc(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ALz(a,b){a.d=b;}
function FU(a,b){var c,d;c=a.my;d=Fl(b,c);c=HX(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.kn)?B7(b.kn,d,c):null;}
function ALW(a,b){var c;c=!Db(b,a.gc)?0:1;BE(b,a.gc,(-1));return c;}
var ABV=F(GK);
function APM(a,b){var c=new ABV();ANX(c,a,b);return c;}
function ANX(a,b,c){NR(a,b,c);}
function AFg(a,b,c,d){var e,f;e=FU(a,d);if(e!==null&&(b+I(e)|0)<=d.y){f=!Tn(c,e,b)?(-1):I(e);if(f<0)return (-1);BE(d,a.gc,f);return a.d.c(b+f|0,c,d);}return (-1);}
function ANK(a,b,c,d){var e,f;e=FU(a,d);f=d.cz;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=YF(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ADt(a,b,c,d,e){var f,g;f=FU(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=X(c,I(d)-I(f)|0);b:{c:while(true){if(g<0){g=(-1);break b;}c=0;while(true){if(c>=I(f))break c;if(L(d,g+c|0)!=L(f,c))break;c=c+1|0;}g=g+(-1)|0;}}if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AJF(a,b){return 1;}
var Zh=F(GK);
function AQl(a,b){var c=new Zh();AGN(c,a,b);return c;}
function AGN(a,b,c){NR(a,b,c);}
function AI8(a,b,c,d){var e,f;e=FU(a,d);if(e!==null&&(b+I(e)|0)<=d.y){f=0;while(true){if(f>=I(e)){BE(d,a.gc,I(e));return a.d.c(b+I(e)|0,c,d);}if(EI(Em(L(e,f)))!=EI(Em(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var M$=F(F5);
function AGx(a,b,c,d,e){Mb(a,b,c,d,e);return a;}
function AD_(a,b,c,d){V9(a,b,c,d);return a;}
function AEA(a,b){IV(a,b);}
function ANc(a,b,c){Wp(a,b,c);return a;}
function Qr(){var a=this;BS.call(a);a.cl=null;a.jJ=null;a.ku=null;}
function AFB(a,b,c){return !Jz(a,c,b)?(-1):a.bC;}
function AD1(a,b,c,d){var e,f,g;e=d.y;while(true){if(b>e)return (-1);f=L(a.cl,a.bC-1|0);a:{while(true){g=a.bC;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&Jz(a,c,b))break;b=b+RA(a.jJ,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bC|0,c,d)>=0)break;b=b+1|0;}return b;}
function AGS(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.cl,0);g=(I(d)-c|0)-a.bC|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&Jz(a,d,c))break;c=c-RA(a.ku,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bC|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AHk(a,b){var c;if(b instanceof Eb)return b.cZ!=L(a.cl,0)?0:1;if(b instanceof D4)return LA(b,0,B7(a.cl,0,1))<=0?0:1;if(!(b instanceof Dp)){if(!(b instanceof DG))return 1;return I(a.cl)>1&&b.fk==Ei(L(a.cl,0),L(a.cl,1))?1:0;}a:{b:{b=b;if(!b.l(L(a.cl,0))){if(I(a.cl)<=1)break b;if(!b.l(Ei(L(a.cl,0),L(a.cl,1))))break b;}c=1;break a;}c=0;}return c;}
function Jz(a,b,c){var d;d=0;while(d<a.bC){if(L(b,d+c|0)!=L(a.cl,d))return 0;d=d+1|0;}return 1;}
function Xc(){BS.call(this);this.ia=null;}
function ARD(a){var b=new Xc();ANu(b,a);return b;}
function ANu(a,b){var c,d,e;Do(a);c=new M;O(c);d=0;while(true){e=BD(d,b.O);if(e>=0){a.ia=N(c);a.bC=c.O;return;}if(d<0)break;if(e>=0)break;BB(c,EI(Em(b.C.data[d])));d=d+1|0;}b=new By;U(b);J(b);}
function AJd(a,b,c){var d;d=0;while(true){if(d>=I(a.ia))return I(a.ia);if(L(a.ia,d)!=EI(Em(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Mp(){BS.call(this);this.gL=null;}
function AMy(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.gL))return I(a.gL);e=L(a.gL,d);f=b+d|0;if(e!=L(c,f)&&Hc(L(a.gL,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var GJ=F();
var AUz=null;var AUA=null;var AUv=null;function AL9(){AL9=Bo(GJ);AFV();}
function AFV(){AUz=ARh();AUA=AQs();AUv=H($rt_arraycls(C),[H(C,[B(365),ARB()]),H(C,[B(366),APC()]),H(C,[B(367),ARe()]),H(C,[B(368),ARm()]),H(C,[B(369),AUA]),H(C,[B(370),AQC()]),H(C,[B(371),AQq()]),H(C,[B(372),APQ()]),H(C,[B(373),APL()]),H(C,[B(374),APX()]),H(C,[B(375),AP9()]),H(C,[B(376),APU()]),H(C,[B(377),AQX()]),H(C,[B(378),APw()]),H(C,[B(379),ARi()]),H(C,[B(380),AP8()]),H(C,[B(381),AQA()]),H(C,[B(382),AP6()]),H(C,[B(383),AQB()]),H(C,[B(384),AP0()]),H(C,[B(385),ARq()]),H(C,[B(386),AP3()]),H(C,[B(387),AQG()]),
H(C,[B(388),ARc()]),H(C,[B(389),AQ_()]),H(C,[B(390),ARn()]),H(C,[B(391),APZ()]),H(C,[B(392),AQ3()]),H(C,[B(393),AUz]),H(C,[B(394),AQK()]),H(C,[B(395),APR()]),H(C,[B(396),AUz]),H(C,[B(397),APt()]),H(C,[B(398),AUA]),H(C,[B(399),AQf()]),H(C,[B(400),P(0,127)]),H(C,[B(401),P(128,255)]),H(C,[B(402),P(256,383)]),H(C,[B(403),P(384,591)]),H(C,[B(404),P(592,687)]),H(C,[B(405),P(688,767)]),H(C,[B(406),P(768,879)]),H(C,[B(407),P(880,1023)]),H(C,[B(408),P(1024,1279)]),H(C,[B(409),P(1280,1327)]),H(C,[B(410),P(1328,1423)]),
H(C,[B(411),P(1424,1535)]),H(C,[B(412),P(1536,1791)]),H(C,[B(413),P(1792,1871)]),H(C,[B(414),P(1872,1919)]),H(C,[B(415),P(1920,1983)]),H(C,[B(416),P(2304,2431)]),H(C,[B(417),P(2432,2559)]),H(C,[B(418),P(2560,2687)]),H(C,[B(419),P(2688,2815)]),H(C,[B(420),P(2816,2943)]),H(C,[B(421),P(2944,3071)]),H(C,[B(422),P(3072,3199)]),H(C,[B(423),P(3200,3327)]),H(C,[B(424),P(3328,3455)]),H(C,[B(425),P(3456,3583)]),H(C,[B(426),P(3584,3711)]),H(C,[B(427),P(3712,3839)]),H(C,[B(428),P(3840,4095)]),H(C,[B(429),P(4096,4255)]),
H(C,[B(430),P(4256,4351)]),H(C,[B(431),P(4352,4607)]),H(C,[B(432),P(4608,4991)]),H(C,[B(433),P(4992,5023)]),H(C,[B(434),P(5024,5119)]),H(C,[B(435),P(5120,5759)]),H(C,[B(436),P(5760,5791)]),H(C,[B(437),P(5792,5887)]),H(C,[B(438),P(5888,5919)]),H(C,[B(439),P(5920,5951)]),H(C,[B(440),P(5952,5983)]),H(C,[B(441),P(5984,6015)]),H(C,[B(442),P(6016,6143)]),H(C,[B(443),P(6144,6319)]),H(C,[B(444),P(6400,6479)]),H(C,[B(445),P(6480,6527)]),H(C,[B(446),P(6528,6623)]),H(C,[B(447),P(6624,6655)]),H(C,[B(448),P(6656,6687)]),
H(C,[B(449),P(7424,7551)]),H(C,[B(450),P(7552,7615)]),H(C,[B(451),P(7616,7679)]),H(C,[B(452),P(7680,7935)]),H(C,[B(453),P(7936,8191)]),H(C,[B(454),P(8192,8303)]),H(C,[B(455),P(8304,8351)]),H(C,[B(456),P(8352,8399)]),H(C,[B(457),P(8400,8447)]),H(C,[B(458),P(8448,8527)]),H(C,[B(459),P(8528,8591)]),H(C,[B(460),P(8592,8703)]),H(C,[B(461),P(8704,8959)]),H(C,[B(462),P(8960,9215)]),H(C,[B(463),P(9216,9279)]),H(C,[B(464),P(9280,9311)]),H(C,[B(465),P(9312,9471)]),H(C,[B(466),P(9472,9599)]),H(C,[B(467),P(9600,9631)]),
H(C,[B(468),P(9632,9727)]),H(C,[B(469),P(9728,9983)]),H(C,[B(470),P(9984,10175)]),H(C,[B(471),P(10176,10223)]),H(C,[B(472),P(10224,10239)]),H(C,[B(473),P(10240,10495)]),H(C,[B(474),P(10496,10623)]),H(C,[B(475),P(10624,10751)]),H(C,[B(476),P(10752,11007)]),H(C,[B(477),P(11008,11263)]),H(C,[B(478),P(11264,11359)]),H(C,[B(479),P(11392,11519)]),H(C,[B(480),P(11520,11567)]),H(C,[B(481),P(11568,11647)]),H(C,[B(482),P(11648,11743)]),H(C,[B(483),P(11776,11903)]),H(C,[B(484),P(11904,12031)]),H(C,[B(485),P(12032,12255)]),
H(C,[B(486),P(12272,12287)]),H(C,[B(487),P(12288,12351)]),H(C,[B(488),P(12352,12447)]),H(C,[B(489),P(12448,12543)]),H(C,[B(490),P(12544,12591)]),H(C,[B(491),P(12592,12687)]),H(C,[B(492),P(12688,12703)]),H(C,[B(493),P(12704,12735)]),H(C,[B(494),P(12736,12783)]),H(C,[B(495),P(12784,12799)]),H(C,[B(496),P(12800,13055)]),H(C,[B(497),P(13056,13311)]),H(C,[B(498),P(13312,19893)]),H(C,[B(499),P(19904,19967)]),H(C,[B(500),P(19968,40959)]),H(C,[B(501),P(40960,42127)]),H(C,[B(502),P(42128,42191)]),H(C,[B(503),P(42752,
42783)]),H(C,[B(504),P(43008,43055)]),H(C,[B(505),P(44032,55203)]),H(C,[B(506),P(55296,56191)]),H(C,[B(507),P(56192,56319)]),H(C,[B(508),P(56320,57343)]),H(C,[B(509),P(57344,63743)]),H(C,[B(510),P(63744,64255)]),H(C,[B(511),P(64256,64335)]),H(C,[B(512),P(64336,65023)]),H(C,[B(513),P(65024,65039)]),H(C,[B(514),P(65040,65055)]),H(C,[B(515),P(65056,65071)]),H(C,[B(516),P(65072,65103)]),H(C,[B(517),P(65104,65135)]),H(C,[B(518),P(65136,65279)]),H(C,[B(519),P(65280,65519)]),H(C,[B(520),P(0,1114111)]),H(C,[B(521),
APV()]),H(C,[B(522),BH(0,1)]),H(C,[B(523),H_(62,1)]),H(C,[B(524),BH(1,1)]),H(C,[B(525),BH(2,1)]),H(C,[B(526),BH(3,0)]),H(C,[B(527),BH(4,0)]),H(C,[B(528),BH(5,1)]),H(C,[B(529),H_(448,1)]),H(C,[B(530),BH(6,1)]),H(C,[B(531),BH(7,0)]),H(C,[B(532),BH(8,1)]),H(C,[B(533),H_(3584,1)]),H(C,[B(534),BH(9,1)]),H(C,[B(535),BH(10,1)]),H(C,[B(536),BH(11,1)]),H(C,[B(537),H_(28672,0)]),H(C,[B(538),BH(12,0)]),H(C,[B(539),BH(13,0)]),H(C,[B(540),BH(14,0)]),H(C,[B(541),AQm(983040,1,1)]),H(C,[B(542),BH(15,0)]),H(C,[B(543),BH(16,
1)]),H(C,[B(544),BH(18,1)]),H(C,[B(545),AQy(19,0,1)]),H(C,[B(546),H_(1643118592,1)]),H(C,[B(547),BH(20,0)]),H(C,[B(548),BH(21,0)]),H(C,[B(549),BH(22,0)]),H(C,[B(550),BH(23,0)]),H(C,[B(551),BH(24,1)]),H(C,[B(552),H_(2113929216,1)]),H(C,[B(553),BH(25,1)]),H(C,[B(554),BH(26,0)]),H(C,[B(555),BH(27,0)]),H(C,[B(556),BH(28,1)]),H(C,[B(557),BH(29,0)]),H(C,[B(558),BH(30,0)])]);}
function LI(){BS.call(this);this.po=0;}
function AMF(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.po!=Gl(Gk(Ei(e,d)))?(-1):2;}
function Ka(){BO.call(this);this.fR=0;}
function AKf(a){var b=new Ka();AEt(b,a);return b;}
function AEt(a,b){BK(a);a.fR=b;}
function AKE(a,b){a.d=b;}
function AE9(a,b,c,d){var e,f;e=b+1|0;if(e>d.y){d.c7=1;return (-1);}f=L(c,b);if(b>d.cz&&CD(L(c,b-1|0)))return (-1);if(a.fR!=f)return (-1);return a.d.c(e,c,d);}
function AHf(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return Hh(a,b,c,d);e=d.cz;f=d.y;while(true){if(b>=f)return (-1);g=Gp(c,a.fR,b);if(g<0)return (-1);if(g>e&&CD(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AFI(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hr(a,b,c,d,e);f=e.cz;a:{while(true){if(c<b)return (-1);g=FM(d,a.fR,c);if(g<0)break a;if(g<b)break a;if(g>f&&CD(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ADr(a,b){if(b instanceof Eb)return 0;if(b instanceof D4)return 0;if(b instanceof Dp)return 0;if(b instanceof DG)return 0;if(b instanceof Kv)return 0;if(!(b instanceof Ka))return 1;return b.fR!=a.fR?0:1;}
function ANi(a,b){return 1;}
function Kv(){BO.call(this);this.fu=0;}
function AHN(a){var b=new Kv();AKl(b,a);return b;}
function AKl(a,b){BK(a);a.fu=b;}
function AEz(a,b){a.d=b;}
function AC7(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;g=BD(f,e);if(g>0){d.c7=1;return (-1);}h=L(c,b);if(g<0&&CY(L(c,f)))return (-1);if(a.fu!=h)return (-1);return a.d.c(f,c,d);}
function AK1(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hh(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=Gp(c,a.fu,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CY(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function AMx(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hr(a,b,c,d,e);f=e.y;a:{while(true){if(c<b)return (-1);g=FM(d,a.fu,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CY(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AFC(a,b){if(b instanceof Eb)return 0;if(b instanceof D4)return 0;if(b instanceof Dp)return 0;if(b instanceof DG)return 0;if(b instanceof Ka)return 0;if(!(b instanceof Kv))return 1;return b.fu!=a.fu?0:1;}
function AK_(a,b){return 1;}
function DG(){var a=this;BS.call(a);a.iZ=0;a.hG=0;a.fk=0;}
function ALY(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.iZ==e&&a.hG==d?2:(-1);}
function AJ0(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hh(a,b,c,d);e=d.y;while(b<e){b=Gp(c,a.iZ,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.hG==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AEw(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hr(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FM(d,a.hG,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.iZ==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ALL(a,b){if(b instanceof DG)return b.fk!=a.fk?0:1;if(b instanceof Dp)return b.l(a.fk);if(b instanceof Eb)return 0;if(!(b instanceof D4))return 1;return 0;}
var Um=F(Ey);
function AEN(a,b){return b!=10?0:1;}
function ALQ(a,b,c){return b!=10?0:1;}
var Un=F(Ey);
function AMP(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AOp(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AAY(){var a=this;C.call(a);a.ly=null;a.je=null;a.gr=0;a.tJ=0;}
function AJ_(a){var b=new AAY();AIa(b,a);return b;}
function AIa(a,b){var c,d;while(true){c=a.gr;if(b<c)break;a.gr=c<<1|1;}d=c<<1|1;a.gr=d;d=d+1|0;a.ly=BG(d);a.je=BG(d);a.tJ=b;}
function PZ(a,b,c){var d,e,f,g;d=0;e=a.gr;f=b&e;while(true){g=a.ly.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.je.data[f]=c;}
function RA(a,b){var c,d,e,f;c=a.gr;d=b&c;e=0;while(true){f=a.ly.data[d];if(!f)break;if(f==b)return a.je.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.tJ;}
var Xw=F();
var J8=F(W);
function ARh(){var a=new J8();AHE(a);return a;}
function AHE(a){}
function Zp(a){return Cr(BP(Dc(),9,13),32);}
var Ja=F(W);
function AQs(){var a=new Ja();ANf(a);return a;}
function ANf(a){}
function Z3(a){return BP(Dc(),48,57);}
var AAS=F(W);
function ARB(){var a=new AAS();AG1(a);return a;}
function AG1(a){}
function AMh(a){return BP(Dc(),97,122);}
var ABl=F(W);
function APC(){var a=new ABl();AIg(a);return a;}
function AIg(a){}
function ANl(a){return BP(Dc(),65,90);}
var ABp=F(W);
function ARe(){var a=new ABp();AD3(a);return a;}
function AD3(a){}
function AGd(a){return BP(Dc(),0,127);}
var J4=F(W);
function ARm(){var a=new J4();AFi(a);return a;}
function AFi(a){}
function Ya(a){return BP(BP(Dc(),97,122),65,90);}
var KF=F(J4);
function AQC(){var a=new KF();AHT(a);return a;}
function AHT(a){}
function Y1(a){return BP(Ya(a),48,57);}
var ACC=F(W);
function AQq(){var a=new ACC();AJO(a);return a;}
function AJO(a){}
function AHd(a){return BP(BP(BP(Dc(),33,64),91,96),123,126);}
var Lx=F(KF);
function APQ(){var a=new Lx();ALt(a);return a;}
function ALt(a){}
function W$(a){return BP(BP(BP(Y1(a),33,64),91,96),123,126);}
var ZB=F(Lx);
function APL(){var a=new ZB();AM7(a);return a;}
function AM7(a){}
function AJy(a){return Cr(W$(a),32);}
var ZX=F(W);
function APX(){var a=new ZX();AMz(a);return a;}
function AMz(a){}
function AFu(a){return Cr(Cr(Dc(),32),9);}
var Yy=F(W);
function AP9(){var a=new Yy();AOd(a);return a;}
function AOd(a){}
function AJu(a){return Cr(BP(Dc(),0,31),127);}
var Yh=F(W);
function APU(){var a=new Yh();AEd(a);return a;}
function AEd(a){}
function AOs(a){return BP(BP(BP(Dc(),48,57),97,102),65,70);}
var ABs=F(W);
function AQX(){var a=new ABs();ADU(a);return a;}
function ADU(a){}
function AJ8(a){var b;b=new RR;b.vx=a;Bn(b);b.J=1;return b;}
var ACL=F(W);
function APw(){var a=new ACL();ALO(a);return a;}
function ALO(a){}
function ACZ(a){var b;b=new LY;b.vH=a;Bn(b);b.J=1;return b;}
var AAZ=F(W);
function ARi(){var a=new AAZ();AD4(a);return a;}
function AD4(a){}
function AHO(a){var b;b=new QP;b.vd=a;Bn(b);return b;}
var AAL=F(W);
function AP8(){var a=new AAL();AJv(a);return a;}
function AJv(a){}
function AL2(a){var b;b=new QO;b.uY=a;Bn(b);return b;}
var ABK=F(W);
function AQA(){var a=new ABK();AFf(a);return a;}
function AFf(a){}
function AFq(a){var b;b=new VT;b.wo=a;Bn(b);Hw(b.I,0,2048);b.J=1;return b;}
var XN=F(W);
function AP6(){var a=new XN();AEG(a);return a;}
function AEG(a){}
function AFQ(a){var b;b=new NW;b.vU=a;Bn(b);b.J=1;return b;}
var Xt=F(W);
function AQB(){var a=new Xt();AJa(a);return a;}
function AJa(a){}
function AOl(a){var b;b=new M5;b.wP=a;Bn(b);b.J=1;return b;}
var AA4=F(W);
function AP0(){var a=new AA4();AJP(a);return a;}
function AJP(a){}
function ACT(a){var b;b=new Pz;b.vz=a;Bn(b);return b;}
var ABd=F(W);
function ARq(){var a=new ABd();AHv(a);return a;}
function AHv(a){}
function AII(a){var b;b=new LR;b.t$=a;Bn(b);b.J=1;return b;}
var YU=F(W);
function AP3(){var a=new YU();ADu(a);return a;}
function ADu(a){}
function AFY(a){var b;b=new LW;b.v1=a;Bn(b);b.J=1;return b;}
var Z1=F(W);
function AQG(){var a=new Z1();AER(a);return a;}
function AER(a){}
function AGV(a){var b;b=new MR;b.wl=a;Bn(b);b.J=1;return b;}
var ACh=F(W);
function ARc(){var a=new ACh();AIO(a);return a;}
function AIO(a){}
function AIK(a){var b;b=new Om;b.wC=a;Bn(b);b.J=1;return b;}
var ABc=F(W);
function AQ_(){var a=new ABc();AJ5(a);return a;}
function AJ5(a){}
function AND(a){var b;b=new Ov;b.vf=a;Bn(b);return b;}
var Zf=F(W);
function ARn(){var a=new Zf();AEJ(a);return a;}
function AEJ(a){}
function ALj(a){var b;b=new SK;b.v6=a;Bn(b);return b;}
var YS=F(W);
function APZ(){var a=new YS();AL3(a);return a;}
function AL3(a){}
function AJ3(a){var b;b=new Rn;b.uc=a;Bn(b);b.J=1;return b;}
var ACG=F(W);
function AQ3(){var a=new ACG();AHn(a);return a;}
function AHn(a){}
function AMb(a){var b;b=new L9;b.wY=a;Bn(b);b.J=1;return b;}
var IG=F(W);
function AQK(){var a=new IG();AF6(a);return a;}
function AF6(a){}
function ZY(a){return Cr(BP(BP(BP(Dc(),97,122),65,90),48,57),95);}
var ABM=F(IG);
function APR(){var a=new ABM();AHz(a);return a;}
function AHz(a){}
function AJR(a){var b;b=Eh(ZY(a),1);b.J=1;return b;}
var ZG=F(J8);
function APt(){var a=new ZG();AN5(a);return a;}
function AN5(a){}
function ADZ(a){var b;b=Eh(Zp(a),1);b.J=1;return b;}
var YN=F(Ja);
function AQf(){var a=new YN();AIx(a);return a;}
function AIx(a){}
function AG6(a){var b;b=Eh(Z3(a),1);b.J=1;return b;}
function Ym(){var a=this;W.call(a);a.pf=0;a.pX=0;}
function P(a,b){var c=new Ym();AOj(c,a,b);return c;}
function AOj(a,b,c){a.pf=b;a.pX=c;}
function AIY(a){return BP(Dc(),a.pf,a.pX);}
var YI=F(W);
function APV(){var a=new YI();AOz(a);return a;}
function AOz(a){}
function AOa(a){return BP(BP(Dc(),65279,65279),65520,65533);}
function Zw(){var a=this;W.call(a);a.k9=0;a.i7=0;a.nS=0;}
function BH(a,b){var c=new Zw();AFa(c,a,b);return c;}
function AQy(a,b,c){var d=new Zw();AOk(d,a,b,c);return d;}
function AFa(a,b,c){a.i7=c;a.k9=b;}
function AOk(a,b,c,d){a.nS=d;a.i7=c;a.k9=b;}
function AGB(a){var b;b=ARx(a.k9);if(a.nS)Hw(b.I,0,2048);b.J=a.i7;return b;}
function ZD(){var a=this;W.call(a);a.k8=0;a.jg=0;a.mD=0;}
function H_(a,b){var c=new ZD();AFZ(c,a,b);return c;}
function AQm(a,b,c){var d=new ZD();ACW(d,a,b,c);return d;}
function AFZ(a,b,c){a.jg=c;a.k8=b;}
function ACW(a,b,c,d){a.mD=d;a.jg=c;a.k8=b;}
function ACU(a){var b;b=new QH;AAx(b,a.k8);if(a.mD)Hw(b.I,0,2048);b.J=a.jg;return b;}
var Ys=F();
var X2=F();
function Ze(b){var c,d,e,f,g,h,i;c=AMm(Gg(b));d=I3(c);e=BG(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+I3(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Mi(c);h=h+1|0;}return e;}
function JQ(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Mw(){var a=this;C.call(a);a.og=0;a.qh=0;a.ov=null;}
function AGz(a,b,c){var d=new Mw();AM5(d,a,b,c);return d;}
function AM5(a,b,c,d){a.og=b;a.qh=c;a.ov=d;}
function AA9(){var a=this;C.call(a);a.nq=null;a.pm=0;}
function AMm(a){var b=new AA9();AFF(b,a);return b;}
function AFF(a,b){a.nq=b;}
var Zd=F();
function I3(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.nq.data;f=b.pm;b.pm=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bd(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Mi(b){var c,d;c=I3(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function X7(){C.call(this);this.DS=null;}
function Mm(){C.call(this);this.pj=null;}
function AJY(a,b){var c,d,e,f;c=b.data;b=a.pj;d=Ek(c[0]);e=Fu(c[1]);ZO(b.e.h,d,e);Gf(Cg(b),ATv);FP(Cg(b));f=JF(Fq(),b.ew);b=new M;O(b);G(Ht(G(b,B(559)),f),B(232));$rt_globals.console.info($rt_ustr(N(b)));}
function P2(){C.call(this);this.pP=null;}
function AGy(a,b){QK(a.pP,b);}
function Uz(){var a=this;C.call(a);a.vs=null;a.vr=null;}
function V2(){var a=this;C.call(a);a.um=null;a.un=null;}
var AA0=F(0);
function ACt(b){return !b?H(Bv,[B(120),B(130),B(560)]):H(Bv,[B(120),B(130),B(560),B(41)]);}
function Vo(){var a=this;T.call(a);a.m7=null;a.wu=null;}
function AGj(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b$^Dl(a.m7,c):0;}
function Vl(){var a=this;T.call(a);a.sh=null;a.sY=null;a.v_=null;}
function ADk(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b$^Dl(a.sh,c):0;return a.sY.l(b)&&!d?1:0;}
function Nm(){var a=this;T.call(a);a.hI=null;a.ui=null;}
function AIQ(a,b){return a.bc^Dl(a.hI,b);}
function AGY(a){var b,c,d;b=new M;O(b);c=GS(a.hI,0);while(c>=0){HR(b,Gd(c));BB(b,124);c=GS(a.hI,c+1|0);}d=b.O;if(d>0)Vd(b,d-1|0);return N(b);}
function Nt(){var a=this;T.call(a);a.pI=null;a.vF=null;}
function AL1(a,b){return a.pI.l(b);}
function Nr(){var a=this;T.call(a);a.i_=0;a.nK=null;a.jW=null;}
function AME(a,b){return !(a.i_^Dl(a.jW.F,b))&&!(a.i_^a.jW.ds^a.nK.l(b))?0:1;}
function Ns(){var a=this;T.call(a);a.jf=0;a.sy=null;a.kI=null;}
function AJc(a,b){return !(a.jf^Dl(a.kI.F,b))&&!(a.jf^a.kI.ds^a.sy.l(b))?1:0;}
function Nw(){var a=this;T.call(a);a.tn=0;a.sK=null;a.st=null;a.uF=null;}
function AFU(a,b){return a.tn^(!a.sK.l(b)&&!a.st.l(b)?0:1);}
function Nx(){var a=this;T.call(a);a.pO=0;a.ps=null;a.oO=null;a.wU=null;}
function ACN(a,b){return a.pO^(!a.ps.l(b)&&!a.oO.l(b)?0:1)?0:1;}
function Nu(){var a=this;T.call(a);a.oC=null;a.wX=null;}
function AG2(a,b){return CW(a.oC,b);}
function Nv(){var a=this;T.call(a);a.sT=null;a.uV=null;}
function AJf(a,b){return CW(a.sT,b)?0:1;}
function Ny(){var a=this;T.call(a);a.p_=null;a.pw=0;a.rV=null;}
function ANP(a,b){return !CW(a.p_,b)&&!(a.pw^Dl(a.rV.F,b))?0:1;}
function NA(){var a=this;T.call(a);a.qT=null;a.q$=0;a.qA=null;}
function AFk(a,b){return !CW(a.qT,b)&&!(a.q$^Dl(a.qA.F,b))?1:0;}
function Nl(){var a=this;T.call(a);a.rS=0;a.sx=null;a.s_=null;a.ul=null;}
function APs(a,b){return !(a.rS^a.sx.l(b))&&!CW(a.s_,b)?0:1;}
function Oa(){var a=this;T.call(a);a.s6=0;a.mc=null;a.mE=null;a.uR=null;}
function AG5(a,b){return !(a.s6^a.mc.l(b))&&!CW(a.mE,b)?1:0;}
function Nj(){var a=this;T.call(a);a.n_=null;a.uW=null;}
function AFj(a,b){return CW(a.n_,b);}
function Nk(){var a=this;T.call(a);a.oe=null;a.wS=null;}
function AGM(a,b){return CW(a.oe,b)?0:1;}
function Np(){var a=this;T.call(a);a.th=null;a.qM=0;a.t3=null;}
function AIf(a,b){return CW(a.th,b)&&a.qM^Dl(a.t3.F,b)?1:0;}
function Ni(){var a=this;T.call(a);a.rs=null;a.pQ=0;a.qL=null;}
function ANr(a,b){return CW(a.rs,b)&&a.pQ^Dl(a.qL.F,b)?0:1;}
function Nn(){var a=this;T.call(a);a.rX=0;a.m5=null;a.pL=null;a.uE=null;}
function AEc(a,b){return a.rX^a.m5.l(b)&&CW(a.pL,b)?1:0;}
function No(){var a=this;T.call(a);a.rl=0;a.lU=null;a.rQ=null;a.u1=null;}
function AK$(a,b){return a.rl^a.lU.l(b)&&CW(a.rQ,b)?0:1;}
var K4=F(0);
function Rm(){var a=this;C.call(a);a.uM=null;a.sz=null;a.h1=null;a.co=null;a.hJ=0;a.jQ=0;}
function LU(a,b){var c,d,e;c=I(a.h1);if(b>=0&&b<=c){WD(a.co,null,(-1),(-1));d=a.co;d.iJ=1;d.dM=b;c=d.g7;if(c<0)c=b;d.g7=c;b=a.sz.cc(b,a.h1,d);if(b==(-1))a.co.c7=1;if(b>=0){d=a.co;if(d.h2){e=d.dm.data;if(e[0]==(-1)){c=d.dM;e[0]=c;e[1]=c;}d.g7=Ir(d);return 1;}}a.co.dM=(-1);return 0;}d=new By;Bj(d,De(b));J(d);}
function ACf(a){return N1(a.co,0);}
function YO(a){return QT(a.co,0);}
function Cb(){Cq.call(this);this.k4=null;}
var AUB=null;var AUC=null;var AUD=null;var AUE=null;var AUF=null;var AUG=null;var AUH=null;var AUI=null;var AUJ=null;var AUK=null;var AUL=null;var AUM=null;var AUN=null;var AUO=null;var AUP=null;var ATi=null;function ABA(){ABA=Bo(Cb);ALX();}
function Du(a,b,c){var d=new Cb();N0(d,a,b,c);return d;}
function AHu(a,b,c,d){var e=new Cb();X0(e,a,b,c,d);return e;}
function N0(a,b,c,d){ABA();DB(a,b,c);a.k4=So(d,null);}
function X0(a,b,c,d,e){ABA();DB(a,b,c);a.k4=So(d,e);}
function ALX(){var b;b=new Cb;Dm();N0(b,B(309),0,ATj);AUB=b;AUC=Du(B(310),1,Cw(0,49,191));AUD=Du(B(311),2,Bq(B(561)));AUE=Du(B(313),3,Bq(B(562)));AUF=Du(B(315),4,ATj);AUG=Du(B(317),5,Bq(B(563)));AUH=Du(B(318),6,Bq(B(329)));AUI=Du(B(320),7,Bq(B(564)));AUJ=Du(B(322),8,Bq(B(565)));AUK=AHu(B(324),9,AS4,Cw(237,235,252));AUL=AHu(B(325),10,Bq(B(326)),Bq(B(566)));AUM=Du(B(328),11,Bq(B(329)));AUN=Du(B(330),12,Bq(B(331)));AUO=Du(B(332),13,Bq(B(333)));b=Du(B(334),14,Bq(B(335)));AUP=b;ATi=H(Cb,[AUB,AUC,AUD,AUE,AUF,AUG,
AUH,AUI,AUJ,AUK,AUL,AUM,AUN,AUO,b]);}
function Na(){C.call(this);this.qv=null;}
function AMa(a,b){Tv(a.qv,b);}
var Me=F(Gh);
function AGE(a,b,c,d){var e,f,g;e=0;f=d.y;a:{while(true){if(b>f){b=e;break a;}g=Fl(d,a.T);Dn(d,a.T,b);e=a.cI.c(b,c,d);if(e>=0)break;Dn(d,a.T,g);b=b+1|0;}}return b;}
function APd(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fl(e,a.T);Dn(e,a.T,c);f=a.cI.c(c,d,e);if(f>=0)break;Dn(e,a.T,g);c=c+(-1)|0;}}return c;}
function AE7(a){return null;}
var O6=F(Bm);
var V_=F(Bm);
function Ui(){Fy.call(this);this.wK=0;}
function OW(){Fy.call(this);this.wG=0;}
var WU=F(Bm);
function Uc(){var a=this;C.call(a);a.qe=null;a.si=null;a.tz=0;a.jq=0;}
function JH(a,b){return B2(a.qe)<b?0:1;}
function NS(){var a=this;C.call(a);a.nF=null;a.nG=null;}
function Rw(){var a=this;C.call(a);a.ve=null;a.oy=null;}
function Rv(){C.call(this);this.t_=null;}
function Ug(){var a=this;C.call(a);a.dm=null;a.iT=null;a.kf=null;a.kn=null;a.nO=0;a.h2=0;a.cz=0;a.y=0;a.dM=0;a.h8=0;a.eQ=0;a.c7=0;a.wi=0;a.g7=0;a.iJ=0;}
function BE(a,b,c){a.iT.data[b]=c;}
function Db(a,b){return a.iT.data[b];}
function Ir(a){return QT(a,0);}
function QT(a,b){QG(a,b);return a.dm.data[(b*2|0)+1|0];}
function Dn(a,b,c){a.dm.data[b*2|0]=c;}
function IW(a,b,c){a.dm.data[(b*2|0)+1|0]=c;}
function Fl(a,b){return a.dm.data[b*2|0];}
function HX(a,b){return a.dm.data[(b*2|0)+1|0];}
function AAT(a){return N1(a,0);}
function N1(a,b){QG(a,b);return a.dm.data[b*2|0];}
function L7(a,b){return a.kf.data[b];}
function D1(a,b,c){a.kf.data[b]=c;}
function QG(a,b){var c;if(!a.h2){c=new DM;U(c);J(c);}if(b>=0&&b<a.nO)return;c=new By;Bj(c,De(b));J(c);}
function WD(a,b,c,d){a.h2=0;a.iJ=2;G_(a.dm,(-1));G_(a.iT,(-1));if(b!==null)a.kn=b;if(c>=0){a.cz=c;a.y=d;}a.dM=a.cz;}
function Y4(a){return a.iJ;}
function Xo(a){return a.h8;}
function V8(){C.call(this);this.tN=null;}
function AKW(a){Dx(a.tN);}
var YK=F();
var OP=F(0);
function Wb(){var a=this;C.call(a);a.qV=null;a.qW=0;a.qX=null;}
function Li(a,b){var c,d,e,f,g,h,i,j,k;c=a.qV;d=a.qW;e=a.qX;if(b<=d){f=Cg(c);g=new Us;g.np=c;h=R(C,1);h.data[0]=e;CZ(f,g,B(567),h);}else{i=Cg(c);g=new Uu;g.o6=c;j=R(C,2);k=j.data;k[0]=e;h=BG(1);h.data[0]=250;k[1]=h;CZ(i,g,B(568),j);f=Cg(c);g=new Ur;g.qr=c;h=R(C,1);h.data[0]=e;CZ(f,g,B(569),h);}}
function RR(){T.call(this);this.vx=null;}
function ANY(a,b){return Co(b)!=2?0:1;}
function LY(){T.call(this);this.vH=null;}
function ADX(a,b){return Co(b)!=1?0:1;}
function QP(){T.call(this);this.vd=null;}
function ADJ(a,b){return PT(b);}
function QO(){T.call(this);this.uY=null;}
function AGA(a,b){return 0;}
function VT(){T.call(this);this.wo=null;}
function AH2(a,b){return !Co(b)?0:1;}
function NW(){T.call(this);this.vU=null;}
function AN1(a,b){return Co(b)!=9?0:1;}
function M5(){T.call(this);this.wP=null;}
function AKz(a,b){return F_(b);}
function Pz(){T.call(this);this.vz=null;}
function AL8(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function LR(){T.call(this);this.t$=null;}
function AOQ(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F_(b);}return b;}
function LW(){T.call(this);this.v1=null;}
function AFH(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F_(b);}return b;}
function MR(){T.call(this);this.wl=null;}
function AN$(a,b){a:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Om(){T.call(this);this.wC=null;}
function AJq(a,b){return IP(b);}
function Ov(){T.call(this);this.vf=null;}
function ALx(a,b){return Ow(b);}
function SK(){T.call(this);this.v6=null;}
function ANQ(a,b){return Co(b)!=3?0:1;}
function Rn(){T.call(this);this.uc=null;}
function AOA(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=F_(b);}return b;}
function L9(){T.call(this);this.wY=null;}
function AFs(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=F_(b);}return b;}
function Lk(){T.call(this);this.kz=0;}
function ARx(a){var b=new Lk();AAx(b,a);return b;}
function AAx(a,b){Bn(a);a.kz=b;}
function AKB(a,b){return a.bc^(a.kz!=Co(b&65535)?0:1);}
var QH=F(Lk);
function AM2(a,b){return a.bc^(!(a.kz>>Co(b&65535)&1)?0:1);}
function OQ(){C.call(this);this.t5=null;}
function AI3(a){var b,c;b=a.t5;c=b.nF;b=b.nG;c.DZ(b.hF,b.jw,null);}
function UR(){C.call(this);this.m$=null;}
function ALn(a,b){var c,d,e,f;c=a.m$;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.oy;c=Bx();b=Cu(b);e=new M;O(e);G(G(e,B(570)),b);Bu(c,N(e));b=Bx();f=d.length;c=new M;O(c);S(G(c,B(571)),f);Bu(b,N(c));}
function UV(){var a=this;C.call(a);a.sa=null;a.sb=null;}
function AKc(a,b){var c,d;c=a.sa;d=a.sb;b.arrayBuffer().then(Bl(c,"f"),Bl(d,"f"));}
function Ss(){var a=this;C.call(a);a.lD=null;a.lE=null;}
function AG_(a,b){var c;c=a.lD;Li(a.lE,IX(c,b.size));}
function Sv(){C.call(this);this.ti=null;}
function ADe(a,b){var c;c=a.ti;Bu(KR(),$rt_str(b.message));Li(c,0);}
function Tz(){C.call(this);this.u6=null;}
function AIZ(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function Uu(){C.call(this);this.o6=null;}
function AK7(a,b){var c,d;c=a.o6;if(!c.hn){b=b.data;c.e.h=Z_(Ek(b[0]),Fu(b[1]));c.hm=1;d=JF(Fq(),c.ew);b=new M;O(b);G(Ht(G(b,B(572)),d),B(232));$rt_globals.console.info($rt_ustr(N(b)));}}
function Ur(){C.call(this);this.qr=null;}
function AI1(a,b){var c,d,e,f,g,h;c=b.data;d=a.qr;e=(Ek(c[2])).data[0];if(e!=1)Hk(d,b);else{d.hn=1;f=Ek(c[0]);g=Fu(c[1]);b=d.e;b.h=AA1(b.h,f,g,d.hm);Vh(d,ABG(e));Gf(Cg(d),ATv);FP(Cg(d));h=JF(Fq(),d.ew);b=new M;O(b);G(Ht(G(b,B(573)),h),B(232));$rt_globals.console.info($rt_ustr(N(b)));VK(d);Jk(d);}}
function Us(){C.call(this);this.np=null;}
function AK9(a,b){Hk(a.np,b);}
var XU=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["ex",ARU(AJl),"cp",ART(AEs)],Qt,0,C,[],0,3,0,0,0,Mh,0,C,[],3,3,0,0,0,LK,0,C,[],3,3,0,0,0,Vq,0,C,[Mh,LK],0,3,0,0,0,Ye,0,C,[],4,0,0,0,0,X3,0,C,[],4,3,0,0,0,C9,0,C,[],3,3,0,0,0,CI,0,C,[],3,3,0,0,0,Ig,0,C,[],3,3,0,0,0,Bv,"String",1,C,[C9,CI,Ig],0,3,0,Ez,["cp",ART(AEr),"ex",ARU(Bt),"i4",ARU(AGD)],Gi,0,C,[],0,3,0,0,0,Eu,0,Gi,[],0,3,0,0,0,GV,0,Eu,[],0,3,0,0,0,Zg,0,GV,[],0,3,0,0,0,DI,0,C,[C9],1,3,0,0,0,E3,0,DI,[CI],0,3,0,0,["i4",ARU(AIG)],F5,0,C,[C9,Ig],0,0,0,0,["he",ARU(IV),"cp",ART(N)],Hv,
0,C,[],3,3,0,0,0,M,0,F5,[Hv],0,3,0,0,["kO",ARX(AIB),"j2",ARW(AFO),"cp",ART(DF),"he",ARU(AIJ),"ll",ARV(AI$)],Eg,0,GV,[],0,3,0,0,0,AAz,0,Eg,[],0,3,0,0,0,Y9,0,Eg,[],0,3,0,0,0,DP,0,Gi,[],0,3,0,0,0,Bm,0,DP,[],0,3,0,0,0,SE,0,C,[],3,3,0,0,0,Di,0,C,[],3,3,0,0,0,NU,0,C,[],3,0,0,0,0,H2,0,C,[SE,Di,NU],1,3,0,0,["gx",ART(FB)],Qe,0,H2,[],0,3,0,0,0,XA,0,C,[],0,3,0,0,0,ABO,0,C,[],4,3,0,0,0,Y,0,C,[],3,3,0,0,0,SR,0,C,[Y],0,3,0,0,0,BC,0,C,[],3,3,0,0,0,ZQ,0,C,[BC],1,3,0,0,0,XE,0,C,[],3,3,0,0,0,ABo,0,C,[],3,3,0,0,0,ABj,0,C,[],3,
3,0,0,0,KX,0,C,[],0,3,0,0,0,Yc,0,C,[BC],1,3,0,0,0,BU,0,C,[BC],3,3,0,0,0,SS,0,C,[BU],0,3,0,0,["bg",ARU(ACO)],SQ,0,C,[BU],0,3,0,0,["bg",ARU(ANS)],ABf,0,C,[],4,3,0,0,0,YP,0,C,[],0,3,0,0,0,ACH,0,C,[],4,3,0,0,0,Mn,0,C,[BU],0,3,0,0,["bg",ARU(AKn)],U6,0,C,[BC],1,3,0,0,0,XP,0,C,[],0,3,0,0,0]);
$rt_metadata([Kz,0,C,[],4,3,0,0,0,I5,0,C,[BC],3,3,0,0,0,Y3,0,C,[I5],1,3,0,0,["E4",ARU(AOX),"Ep",ART(AEO)],Zs,0,C,[BC],1,3,0,0,0,FA,0,C,[],3,3,0,0,0,RP,0,C,[FA],0,3,0,0,0,C0,0,C,[CI],0,3,0,0,0,LE,0,C,[BC],3,3,0,0,0,Rs,0,C,[LE],3,3,0,0,0,D8,0,C,[BC],3,3,0,0,0,ABN,0,C,[Rs,D8],3,3,0,0,0,Gm,0,Bm,[],0,3,0,0,0,MS,0,C,[BU],0,3,0,0,["bg",ARU(ALp)],AAh,0,C,[],4,3,0,0,0,Zq,0,C,[],4,3,0,0,0,By,0,Bm,[],0,3,0,0,0,H8,0,Bm,[],0,3,0,0,0,Ok,0,C,[D8],3,3,0,0,0,P6,0,C,[D8],3,3,0,0,0,PX,0,C,[D8],3,3,0,0,0,Sy,0,C,[D8],3,3,0,0,0,V$,
0,C,[D8],3,3,0,0,0,TQ,0,C,[D8,Ok,P6,PX,Sy,V$],3,3,0,0,0,NC,0,C,[],3,3,0,0,0,XD,0,C,[BC,TQ,NC,I5],1,3,0,0,["C8",ARV(AI6),"E$",ARV(AJn),"xd",ARU(ADO),"BH",ARW(AKs),"zT",ARU(AN7),"zZ",ART(AES),"yv",ARW(ADa)],BA,0,Bm,[],0,3,0,0,0,W3,0,Bm,[],0,3,0,0,0,GR,0,By,[],0,3,0,0,0,YC,0,C,[],0,3,0,0,0,NB,0,C,[],3,3,0,0,0,RD,0,C,[NB],0,3,0,0,0,Ci,0,C,[],3,3,0,0,0,QI,0,C,[Ci],0,3,0,0,0,Bi,0,C,[],3,3,0,0,0,ZL,0,C,[Bi],0,3,0,0,0,Zn,0,C,[BC],1,3,0,0,0,P1,0,C,[BC],3,3,0,0,0,UM,0,C,[P1],0,3,0,0,["BK",ARU(AHM)],UH,0,C,[Bi],0,3,0,
0,0,O5,0,C,[BC],3,3,0,0,0,UI,0,C,[O5],0,3,0,0,["tv",ARV(AF5)],ABU,0,C,[BC],1,3,0,0,0,Ch,0,C,[BC],3,3,0,0,0,UF,0,C,[Ch],0,3,0,0,["b9",ARU(ALy)],Ke,0,C,[],3,3,0,0,0,Ep,0,C,[Ke],1,3,0,0,0,Ec,0,C,[],3,3,0,0,0,Wz,0,C,[Ke],3,3,0,0,0,Mg,0,C,[Wz],3,3,0,0,0,N7,0,Ep,[Ec,C9,Mg],0,3,0,0,0]);
$rt_metadata([UG,0,C,[BU],0,3,0,0,["bg",ARU(AML)],Ou,0,C,[],0,3,0,0,0,Ks,0,C,[],1,3,0,0,0,ABn,0,Ks,[],0,3,0,0,0,Cp,0,C,[Di],1,3,0,0,["dI",ARU(AOD)],It,0,C,[FA],0,3,0,0,["ls",ARV(IR)],YH,0,C,[],0,3,0,0,0,Vv,0,C,[Ch],0,3,0,0,["b9",ARU(AKY)],Vw,0,C,[Ch],0,3,0,0,["b9",ARU(ALb)],Vx,0,C,[Ch],0,3,0,0,["b9",ARU(AJH)],Vy,0,C,[Ch],0,3,0,0,["b9",ARU(AI7)],Vz,0,C,[Ch],0,3,0,0,["b9",ARU(AJr)],VA,0,C,[Ch],0,3,0,0,["b9",ARU(ALN)],VB,0,C,[Ch],0,3,0,0,["b9",ARU(AHp)],VC,0,C,[Ch],0,3,0,0,["b9",ARU(AO5)],VD,0,C,[Ch],0,3,0,0,["b9",
ARU(AGJ)],VE,0,C,[Ch],0,3,0,0,["b9",ARU(AMS)],WN,0,C,[Ch],0,3,0,0,["b9",ARU(AOE)],WO,0,C,[Ch],0,3,0,0,["b9",ARU(AJi)],WP,0,C,[Ch],0,3,0,0,["b9",ARU(AJK)],WQ,0,C,[Ch],0,3,0,0,["b9",ARU(ALr)],Th,0,C,[],3,3,0,0,0,Tt,0,C,[Th],0,3,0,0,0,Ts,0,C,[Ch],0,3,0,0,["b9",ARU(AIs)],LF,0,C,[],0,3,0,0,0,AB7,0,C,[],0,3,0,0,0,Ia,0,C,[],3,3,0,0,0,Cj,0,C,[Ia],3,3,0,0,0,Ct,0,C,[],3,3,0,0,["b4",ARU(AIw),"cA",ARW(ALM),"c8",ARV(AEK),"cP",ARV(ADz)],EB,0,C,[],3,3,0,0,0,EN,0,C,[Ia],3,3,0,0,0,E$,0,C,[],3,3,0,0,0,HF,0,C,[],3,3,0,0,0,FS,
0,C,[HF],3,3,0,0,0,Pd,0,C,[Di],0,3,0,0,0,Ba,0,C,[],0,3,0,0,["cp",ART(ACP)],VH,0,C,[],0,3,0,0,0,ABm,0,C,[],0,3,0,0,0,X1,0,C,[],3,3,0,0,0,O4,0,C,[],0,3,0,0,0,KN,0,C,[],0,3,0,0,0,DY,0,KN,[],0,3,0,0,0,Vg,0,DY,[],0,3,0,0,0,Eo,0,DY,[],0,3,0,0,0,PJ,0,DY,[],0,3,0,0,0,AA5,0,Eo,[],0,3,0,0,0,AAC,0,Eo,[],0,3,0,0,0,Yd,0,Eo,[],0,3,0,0,0,QR,0,C,[BC],3,3,0,0,0,ACF,0,C,[QR],3,3,0,0,0]);
$rt_metadata([O1,0,C,[Di],0,3,0,0,0,O3,0,C,[],0,3,0,0,0,Cq,0,C,[CI,C9],1,3,0,0,0,Gu,0,Cq,[],12,3,0,XZ,0,Ll,0,C,[],3,3,0,0,0,Se,0,C,[Ll],3,3,0,0,0,TG,0,C,[],3,3,0,0,0,Gb,0,C,[Se,TG],1,3,0,0,0,IK,0,Gb,[],0,3,0,0,0,Y7,0,IK,[],0,3,0,0,0,FX,0,Gb,[],1,3,0,0,0,Ky,0,FX,[],0,3,0,0,["jv",ARW(AIi)],DK,0,Cq,[],12,3,0,AN3,0,IA,0,C,[CI],1,3,0,0,0,Lq,0,IA,[],0,3,0,YY,0,JB,0,C,[],32,0,0,XC,0,Ob,0,C,[],0,3,0,0,0,Gy,0,Cq,[],12,0,0,Z$,0,F3,0,Cq,[],12,0,0,AAa,0,UN,0,DP,[],0,3,0,0,0,ABe,0,BA,[],0,3,0,0,0,Lp,0,C,[BC],3,3,0,0,0,Ww,
0,C,[Lp],0,3,0,0,["bg",ARU(AMo)],Wy,0,C,[Lp],0,3,0,0,["bg",ARU(AEl)],GG,0,C,[],1,3,0,0,0,Q_,0,C,[],3,3,0,0,0,Kk,0,GG,[CI,Hv,Ig,Q_],1,3,0,0,0,I7,0,GG,[CI],1,3,0,0,0,Hj,0,C,[],0,3,0,GQ,0,Ml,0,Cp,[],0,3,0,0,["bK",ART(AJe),"ce",ARV(AHP)],ACr,0,C,[],0,3,0,0,0,ZI,0,C,[BC],1,3,0,0,0,Jg,0,Kk,[],1,0,0,0,0,Zr,0,Jg,[],0,0,0,0,0,J6,0,C,[],1,3,0,0,0,KU,0,C,[],0,3,0,0,0,XM,0,C,[],0,3,0,0,0,Kx,0,C,[BC],3,3,0,0,0,Mu,0,C,[Kx],0,3,0,0,["bg",ARU(AGu)],Mt,0,C,[Kx],0,3,0,0,["bg",ARU(AKr)],Ms,0,C,[BU],0,3,0,0,["bg",ARU(AK8)],Mr,
0,C,[BU],0,3,0,0,["bg",ARU(AEZ)],R7,0,C,[Ci],0,3,0,0,["cj",ARU(AKH)],R6,0,C,[Ci],0,3,0,0,["cj",ARU(ADY)],R5,0,C,[Ci],0,3,0,0,["cj",ARU(AHx)],R4,0,C,[Ci],0,3,0,0,["cj",ARU(AHs)],R3,0,C,[Ci],0,3,0,0,["cj",ARU(AH6)],R2,0,C,[Ci],0,3,0,0,["cj",ARU(AD5)],R1,0,C,[Ci],0,3,0,0,["cj",ARU(AFJ)],R0,0,C,[Ci],0,3,0,0,["cj",ARU(AKX)]]);
$rt_metadata([RZ,0,C,[Ci],0,3,0,0,["cj",ARU(AOm)],RY,0,C,[Ci],0,3,0,0,["cj",ARU(APe)],PI,0,C,[Ci],0,3,0,0,["cj",ARU(AIX)],PG,0,C,[Ci],0,3,0,0,["cj",ARU(AC0)],PH,0,C,[Ci],0,3,0,0,["cj",ARU(AGq)],PE,0,C,[Ci],0,3,0,0,["cj",ARU(AI_)],PF,0,C,[Ci],0,3,0,0,["cj",ARU(AMH)],GP,0,C,[],0,3,0,0,0,NY,0,GP,[],0,3,0,0,0,ABw,0,C,[],0,3,0,0,0,LB,0,GP,[],0,3,0,0,0,Tj,0,C,[BC],3,3,0,0,0,MM,0,C,[Tj],0,3,0,0,["FA",ARU(AIR)],T3,0,C,[Y],0,3,0,0,["m",ARU(Vi)],VW,0,I7,[],0,0,0,0,0,AAr,0,C,[BC],1,3,0,0,0,Jy,0,C,[],4,3,0,AH4,0,U_,0,C,
[],3,3,0,0,0,RJ,0,C,[U_],0,3,0,0,["cp",ART(AFt)],Ty,0,C,[],3,3,0,0,0,Kh,"JsFileHandle",5,C,[Ty],0,3,0,0,["cp",ART(AIp)],J1,0,J6,[],1,3,0,0,0,Or,0,J1,[],0,3,0,0,0,HV,0,DP,[],0,3,0,0,0,JL,0,Cp,[],0,3,0,0,["dI",ARU(AE$),"bK",ART(AHL),"ox",ART(ALl),"ce",ARV(AJ1),"ry",ARU(Z4)],XG,0,Cp,[],0,3,0,0,["dI",ARU(ADl),"bK",ART(AGh),"ce",ARV(AMn)],DS,0,Cp,[],1,3,0,0,0,DT,0,C,[],3,3,0,0,0,Vc,0,DS,[Ct,DT],0,3,0,0,["fb",ARV(ANN),"ce",ARV(AFP),"bK",ART(AGv),"b4",ARU(ALJ),"c8",ARV(AHq),"cP",ARV(AEp),"cA",ARW(AK0)],Wn,0,DS,[Ct],
0,3,0,0,["c8",ARV(AEK),"cP",ARV(ADz),"ce",ARV(AE5),"bK",ART(ALi),"b4",ARU(AMt),"cA",ARW(AIj)],W2,0,DS,[Ct],0,3,0,0,["b4",ARU(AIw),"cA",ARW(ALM),"c8",ARV(AEK),"cP",ARV(ADz),"ce",ARV(AC$),"bK",ART(ALS),"dI",ARU(AFr)],Og,0,Cp,[],0,3,0,0,["bK",ART(ADC),"ce",ARV(ANx)],C4,0,Cp,[],0,3,0,0,["bK",ART(Q$),"ce",ARV(RE)],PP,"SelectFileTest",6,C4,[],0,3,0,0,0,ACj,"WorkerTest",7,C4,[],0,3,0,0,0,VS,"RenderTexture",6,C4,[],0,3,0,0,["dI",ARU(AIH),"bK",ART(ADf),"ce",ARV(ALg)],Ra,"ScissorDemo",6,C4,[],0,3,0,0,["bK",ART(AOR),"ce",
ARV(AEV)],NQ,0,Cp,[],0,3,0,0,["bK",ART(AOU),"ce",ARV(AGW),"dI",ARU(AFx)],H0,"ClipboardTest",6,C4,[Ct],0,3,0,0,["b4",ARU(AIw),"c8",ARV(AEK),"cP",ARV(ADz),"cA",ARW(AMg)],O_,0,Cp,[],0,3,0,0,["bK",ART(AOM),"ce",ARV(AJB)],Vs,0,DS,[DT],0,3,0,0,["fb",ARV(AHS),"bK",ART(APa),"ce",ARV(ALA),"dI",ARU(AID)],P9,0,JL,[],0,3,0,0,["ox",ART(AHX),"ry",ARU(AE1)],Iq,0,C,[],3,3,0,0,0,Lu,0,C,[Iq,C9],0,3,0,0,0,IN,0,Lu,[],0,0,0,0,0,AB4,0,C,[],0,3,0,0,0,XY,0,C,[],3,3,0,0,0,ACB,0,C,[],0,3,0,0,0,TS,0,C,[Ct],0,0,0,0,["b4",ARU(ALU),"cA",
ARW(APk),"c8",ARV(AO4),"cP",ARV(AKp)],Hq,0,C,[],3,3,0,0,["tV",ART(AFm),"rE",ART(APr)]]);
$rt_metadata([Y_,0,C,[Hq,Ct],0,3,0,0,["rE",ART(AGb),"tV",ART(AEW),"cP",ARV(ALC),"c8",ARV(ANL),"cA",ARW(AHj),"b4",ARU(AFK),"gz",ARU(AKC)],QX,0,C,[Cj],0,3,0,0,["by",ARU(AJN)],Q1,0,C,[Cj],0,3,0,0,["by",ARU(AHi)],Jl,0,C,[Cj],0,3,0,0,["by",ARU(AMv)],Q0,0,C,[Y],0,3,0,0,["m",ARU(ADP)],QZ,0,C,[Cj],0,3,0,0,["by",ARU(APm)],QY,0,C,[E$],0,3,0,0,["hb",ARV(AK5)],Q4,0,C,[FS],0,3,0,0,["ga",ART(AOW)],Q3,0,C,[EB],0,3,0,0,["ef",ARW(AI2)],Q2,0,C,[EN],0,3,0,0,["by",ARU(AL6)],B3,0,C,[],0,3,0,0,["ex",ARU(AOZ)],Cy,0,C,[],3,3,0,Dm,
0,H4,0,C,[],0,3,0,0,0,ABx,0,H4,[],0,3,0,0,0,Zt,0,C,[],0,3,0,0,0,SO,0,C,[Ct],0,0,0,0,["b4",ARU(ALs),"cA",ARW(AMW),"c8",ARV(AJs),"cP",ARV(AFT)],Qz,0,C,[Cj],0,3,0,0,["by",ARU(ALm)],Qy,0,C,[Cj],0,3,0,0,["by",ARU(ANV)],QC,0,C,[E$],0,3,0,0,["hb",ARV(AOh)],QA,0,C,[Bi],0,3,0,0,["t",ART(AOg)],Qx,0,C,[EN],0,3,0,0,["by",ARU(AJS)],Qw,0,C,[EB],0,3,0,0,["ef",ARW(AHF)],Ie,0,B3,[],0,3,0,0,0,T1,0,C,[],0,3,0,0,0,Yl,0,C,[],0,3,0,0,0,XB,0,C,[DT,Hq],0,3,0,0,["tV",ART(AFm),"rE",ART(APr),"fb",ARV(AEU),"gz",ARU(ADq)],R9,0,C,[Cj],0,
3,0,0,["by",ARU(ALR)],Sa,0,C,[EN],0,3,0,0,["by",ARU(AC4)],ACg,0,C,[],0,3,0,0,["ex",ARU(APj)],Kb,0,C,[],0,3,0,0,0,R$,0,C,[Bi],0,3,0,0,["t",ART(AHo)],R8,0,C,[Bi],0,3,0,0,["t",ART(ANb)],Dy,0,C,[],0,3,0,0,0,NF,0,C,[DT],0,3,0,0,["fb",ARV(AHh)],ZW,0,C,[DT,Hq],0,3,0,0,["tV",ART(AFm),"rE",ART(APr),"fb",ARV(AMj),"gz",ARU(AEo)],NG,0,C,[Cj],0,3,0,0,["by",ARU(ANt)],NH,0,C,[EN],0,3,0,0,["by",ARU(AJ9)],Vf,0,C,[],3,3,0,0,0,G8,0,C,[Vf],3,3,0,0,0,EA,0,C,[G8],1,3,0,0,0,L6,0,C,[G8],3,3,0,0,0,FR,0,EA,[L6],1,3,0,0,0,HS,0,C,[],3,
3,0,0,0,MY,0,FR,[Ec,C9,HS],0,3,0,0,["qI",ARU(Bs),"m6",ART(AKJ),"tk",ARU(Ed)],AB6,0,C,[],0,3,0,0,0,S7,0,C,[DT],0,3,0,0,["fb",ARV(AKi)],S8,0,C,[Cj],0,3,0,0,["by",ARU(AC9)],My,0,C,[],3,3,0,0,0,ABt,0,C,[My],0,3,0,0,0,ZT,0,C,[Di],0,3,0,0,0]);
$rt_metadata([ABi,0,C,[],3,3,0,0,0,Vr,0,C,[Ct],0,0,0,0,["cA",ARW(ALM),"c8",ARV(AJ$),"cP",ARV(ALE),"b4",ARU(AF_)],RI,0,C,[EB],0,3,0,0,["ef",ARW(AFw)],Tw,0,C,[],3,3,0,0,0,ZS,0,C,[],0,3,0,0,0,O7,0,C,[Cj],0,3,0,0,["by",ARU(AMk)],Qb,0,C,[Y],0,3,0,0,["m",ARU(ADx)],Qa,0,C,[Y],0,3,0,0,["m",ARU(AO0)],P_,0,C,[Y],0,3,0,0,["m",ARU(AFR)],P$,0,C,[Y],0,3,0,0,["m",ARU(AKv)],P8,0,C,[Y],0,3,0,0,["m",ARU(AJJ)],P7,0,C,[Y],0,3,0,0,["m",ARU(ALB)],SM,0,C,[Ct],0,0,0,0,["cA",ARW(ALM),"cP",ARV(ADz),"b4",ARU(ANv),"c8",ARV(ANT)],AAt,0,
C,[],0,3,0,0,0,Te,0,C,[Ct],0,0,0,0,["cA",ARW(ALM),"c8",ARV(AD8),"cP",ARV(AEP),"b4",ARU(ADI)],M1,0,C,[EB],0,3,0,0,["ef",ARW(ADB)],Rl,0,C,[Cj],0,3,0,0,["by",ARU(ANz)],Rk,0,C,[E$],0,3,0,0,["hb",ARV(AGa)],Ri,0,C,[E$],0,3,0,0,["hb",ARV(AMY)],Rh,0,C,[FS],0,3,0,0,["ga",ART(AKZ)],Rj,0,C,[FS],0,3,0,0,["ga",ART(AEE)],QS,0,C,[Cj],0,3,0,0,["by",ARU(AGg)],Kj,0,C,[],0,3,0,0,0,QB,0,C,[Ct,DT],0,3,0,0,["b4",ARU(AEI),"cA",ARW(AIn),"c8",ARV(AGC),"cP",ARV(AOK),"fb",ARV(AOb)],Pv,0,C,[Cj],0,3,0,0,["by",ARU(AGL)],Pw,0,C,[EN],0,3,
0,0,["by",ARU(AC_)],Px,0,C,[EB],0,3,0,0,["ef",ARW(ALZ)],KQ,0,C,[],0,3,0,0,0,NN,0,C,[BC],3,3,0,0,0,N$,0,C,[NN],0,3,0,0,["tv",ARV(AGR)],NO,0,C,[BC],3,3,0,0,0,N8,0,C,[NO],0,3,0,0,["tv",ARV(AHW)],Yf,0,C,[],0,3,0,0,0,Xv,0,C,[BC],3,3,0,0,0,LM,0,C,[Bi],0,3,0,0,["t",ART(AI5)],LN,0,C,[Bi],0,3,0,0,["t",ART(AHC)],UY,0,C,[],0,3,0,0,0,Xa,0,C,[],0,3,0,0,0,Mz,0,C,[],0,3,0,0,0,EG,0,C,[Di],0,0,0,0,0,TO,0,C,[Y],0,3,0,0,0,TN,0,C,[Y],0,3,0,0,["m",ARU(AMu)],TJ,0,C,[Y],0,3,0,0,["m",ARU(AKt)],TI,0,C,[Bi],0,3,0,0,["t",ART(AMr)],TL,
0,C,[Bi],0,3,0,0,["t",ART(AHH)],TK,0,C,[Bi],0,3,0,0,["t",ART(AJQ)],Ud,0,C,[Bi],0,3,0,0,["t",ART(ALT)],Fc,0,Cq,[],12,3,0,ADi,0,IM,0,C,[Di],0,3,0,0,["gx",ART(AAI)],Rd,0,C,[Cj],0,3,0,0,["by",ARU(APn)]]);
$rt_metadata([Re,0,C,[Cj],0,3,0,0,["by",ARU(ADd)],SD,0,C,[],0,3,0,0,0,WM,0,C,[],3,3,0,0,0,ER,0,C,[],0,3,0,0,0,G0,0,C,[],4,3,0,0,0,ACJ,0,C,[],0,3,0,0,0,Hz,0,C,[],3,3,0,0,0,V6,0,C,[Hz],0,3,0,0,["nm",ARW(AMc)],V7,0,C,[Hz],0,3,0,0,0,JW,0,C,[],0,3,0,0,0,UU,0,C,[Bi],0,3,0,0,0,ABu,0,C,[],0,0,0,0,0,W0,0,C,[Y],0,3,0,0,["m",ARU(ALF)],MW,0,C,[Tw],0,3,0,0,0,Dq,0,C,[],3,3,0,EE,0,Z0,0,C,[],0,3,0,0,0,OG,0,C,[Y],0,3,0,0,["m",ARU(AIb)],UZ,0,C,[Ct],0,0,0,0,["b4",ARU(ADc),"cA",ARW(AMe),"c8",ARV(ANa),"cP",ARV(AH5)],Ql,0,C,[Ct],
0,0,0,0,["cA",ARW(ALM),"c8",ARV(AEK),"cP",ARV(ADz),"b4",ARU(ADg)],Yr,0,C,[],0,3,0,0,0,Jq,0,C,[],0,3,0,0,0,EJ,0,C,[],0,3,0,0,0,Lr,0,EJ,[],0,3,0,0,0,LQ,0,EJ,[],0,3,0,0,0,Pa,0,EJ,[],0,3,0,0,0,H3,0,C,[],3,3,0,0,0,Qf,0,C,[],3,3,0,0,0,F$,0,C,[CI],0,3,0,0,0,IE,0,C,[],0,3,0,0,0,JU,0,FX,[],0,3,0,0,["jv",ARW(AGp)],AB_,0,C,[],0,3,0,0,0,WB,0,C,[],0,3,0,0,0,Y8,0,C,[BC],4,3,0,0,0,ACx,0,C,[],0,3,0,0,0,Zv,0,C,[],0,3,0,0,0,ABX,0,C,[],3,3,0,0,0,CP,0,C,[BC],1,3,0,0,0,AAl,0,CP,[],1,3,0,0,0,AA2,0,CP,[],1,3,0,0,0,Yj,0,CP,[],1,3,
0,0,0,YE,0,CP,[],1,3,0,0,0,ABv,0,CP,[],1,3,0,0,0,ZF,0,Ep,[Ec,C9],0,3,0,0,0,Cx,0,C,[],0,3,0,0,0,MN,0,C,[Bi],0,3,0,0,["t",ART(AOJ)],Tk,0,C,[Bi],0,3,0,0,["t",ART(AJm)],B4,0,C,[],0,3,0,0,0,Id,0,C,[],0,3,0,0,0,JA,0,C,[],0,3,0,0,0,ACd,0,C,[CI],0,3,0,0,["ex",ARU(AMZ),"i4",ARU(AEC)]]);
$rt_metadata([Wo,0,C,[FA],0,3,0,0,["ls",ARV(AG$)],Wq,0,C,[FA],0,3,0,0,["ls",ARV(AIN)],EK,0,C,[],0,3,0,0,0,GL,0,FR,[HS],1,0,0,0,["tk",ARU(AJD)],WG,0,GL,[HS],0,0,0,0,["m6",ART(AGn),"qI",ARU(AOy)],Xn,0,C,[],0,3,0,0,["cp",ART(AHe)],NX,0,C,[G8],3,3,0,0,0,FZ,0,EA,[NX],1,3,0,0,0,Jt,0,FZ,[],1,0,0,0,0,UE,0,Jt,[],0,0,0,0,0,KE,0,Ep,[],1,0,0,0,0,UC,0,KE,[],0,0,0,0,0,UD,0,GL,[],0,0,0,0,0,Fp,0,C,[],3,3,0,0,0,UA,0,C,[Fp],0,0,0,0,0,Op,0,C,[Fp],3,3,0,0,0,UB,0,C,[Op],0,0,0,0,0,WZ,0,C,[FA],0,3,0,0,0,KC,0,C,[],0,3,0,0,0,MF,0,C,
[Fp],0,0,0,0,0,YW,0,C,[],4,3,0,0,0,UX,0,C,[Ct],0,0,0,0,["cA",ARW(ALM),"c8",ARV(AEK),"cP",ARV(ADz),"b4",ARU(AMD)],Y5,0,C,[BC],1,3,0,0,0,JP,0,C,[Iq,Ec],0,0,0,0,0,HJ,0,JP,[],0,0,0,0,0,T6,0,C,[Y],0,3,0,0,["m",ARU(AHI)],U4,0,C,[HF],0,3,0,0,["ga",ART(AOO)],Cd,0,Cq,[],12,3,0,Yg,0,IH,0,C,[],0,3,0,0,0,WV,0,C,[],0,3,0,0,0,KK,0,C,[],3,3,0,0,0,Qc,0,C,[KK],0,3,0,0,["p0",ARU(AJ2)],XX,0,C,[],0,3,0,0,0,W_,0,C,[],0,3,0,0,0,Mq,0,C,[Di],0,3,0,0,0,Fy,0,HV,[],0,3,0,0,0,V5,0,Eu,[],0,3,0,0,0,Pk,0,C,[Y],0,3,0,0,["m",ARU(AKV)],Tb,0,
C,[Bi],0,3,0,0,["t",ART(ANq)],Xs,0,C,[],0,3,0,0,0,K2,0,Bm,[],0,3,0,0,0,Lh,0,DI,[CI],0,3,0,0,0,Fj,0,C,[],0,0,0,0,0,Jj,0,C,[],4,3,0,0,0,Uy,0,C,[],0,3,0,0,0,La,0,C,[],1,3,0,0,0,MI,0,C,[Y],0,3,0,0,["m",ARU(ALc)],UO,0,C,[Y],0,3,0,0,["m",ARU(AO2)],Zj,0,CP,[],1,3,0,0,0,Qi,0,C,[Bi],0,3,0,0,["t",ART(AHB)]]);
$rt_metadata([Ta,0,C,[],0,3,0,0,0,DM,0,Bm,[],0,3,0,0,0,AAB,0,Eu,[],0,3,0,0,0,Pu,0,C,[Y],0,3,0,0,["m",ARU(AN6)],ABI,0,C,[CI],0,3,0,0,["ex",ARU(Xq),"i4",ARU(ALw)],MV,0,C,[Y],0,3,0,0,["m",ARU(ADA)],MT,0,C,[Y],0,3,0,0,["m",ARU(AFz)],T4,0,C,[Y],0,3,0,0,0,T2,0,C,[Y],0,3,0,0,["m",ARU(AEu)],SF,0,C,[Y],0,3,0,0,["m",ARU(AOe)],JE,0,La,[],1,3,0,0,0,Su,0,JE,[],0,3,0,0,0,OZ,0,C,[Y],0,3,0,0,["m",ARU(AEF)],Ul,0,C,[Bi],0,3,0,0,["t",ART(AKk)],PD,0,C,[BU],0,3,0,0,["bg",ARU(ACY)],TF,0,C,[BU],0,3,0,0,["bg",ARU(AOB)],Rc,0,C,[Y],
0,3,0,0,["m",ARU(ADQ)],Rb,0,C,[Y],0,3,0,0,["m",ARU(AEv)],ZM,0,C,[Ci],0,3,0,0,0,Qv,0,C,[Y],0,3,0,0,["m",ARU(AGX)],RW,0,C,[Bi],0,3,0,0,["t",ART(AI0)],Jd,0,DI,[CI],0,3,0,0,0,KH,0,C,[],4,3,0,0,0,Ps,0,C,[Bi],0,3,0,0,["t",ART(AKT)],L0,0,C,[BU],0,3,0,0,["bg",ARU(APq)],N_,0,C,[Hz],0,3,0,0,["nm",ARW(ADv)],SW,0,C,[],0,3,0,0,0,Ev,0,C,[Di],0,3,0,0,["gx",ART(AKy),"dq",ART(AN8),"il",ARW(OX),"hK",ARU(X9),"nI",ARU(AGe),"nu",ARU(AM4),"cA",ARW(ANC),"qF",ARV(AMT),"cP",ARV(ANZ),"b4",ARU(AJW),"ef",ARW(AF8)],Kd,0,Ev,[],0,3,0,0,0,U2,
0,Kd,[],0,3,0,0,["dq",ART(ZZ),"nu",ARU(AHR),"hK",ARU(YB),"nI",ARU(AIu)],Oy,0,C,[Y],0,3,0,0,0,Ph,0,Ev,[],0,3,0,0,["il",ARW(AFp),"hK",ARU(AMA),"cA",ARW(AHm),"qF",ARV(ANF),"cP",ARV(AGZ),"b4",ARU(AId),"ef",ARW(AMN),"dq",ART(AKh)],Sp,0,Ev,[],0,3,0,0,0,S2,0,C,[Y],0,3,0,0,["m",ARU(AJt)],S3,0,C,[Y],0,3,0,0,["m",ARU(AHG)],QW,0,DI,[CI],0,3,0,0,0,SC,0,C,[Bi],0,3,0,0,["t",ART(ALG)],E4,0,Bm,[],0,3,0,0,0,ML,0,C,[],0,3,0,0,0,ABL,0,C,[],0,3,0,0,0,RM,0,C,[],0,0,0,0,0,Sq,0,C,[Y],0,3,0,0,0,Wl,0,C,[BU],0,3,0,0,["bg",ARU(AMG)],Wk,
0,C,[BU],0,3,0,0,["bg",ARU(AFG)],VO,0,C,[BU],0,3,0,0,["bg",ARU(AG3)],VN,0,C,[BU],0,3,0,0,["bg",ARU(AHV)],Uj,0,C,[KK],0,3,0,0,["p0",ARU(I8)],Xu,0,C,[],1,3,0,0,0,VU,0,C,[],3,3,0,0,0,We,0,C,[Ch],0,3,0,0,["b9",ARU(AGU)]]);
$rt_metadata([XO,0,C,[],0,3,0,0,0,In,0,E4,[],0,3,0,0,0,Hu,0,Bm,[],0,3,0,0,0,K0,0,Bm,[],0,3,0,0,0,Yv,0,C,[Y],0,3,0,0,0,Uq,0,C,[Bi],0,3,0,0,["t",ART(AL0)],VY,0,C,[Y],0,3,0,0,["m",ARU(AMK)],Xb,0,C,[],0,3,0,0,0,GH,0,C,[],0,3,0,0,0,AAW,0,FZ,[],0,0,0,0,0,Od,0,EA,[],0,0,0,0,0,VF,0,By,[],0,3,0,0,0,Pr,0,C,[Ll],3,3,0,0,0,MG,0,C,[Pr],3,3,0,0,0,K5,0,C,[MG],1,3,0,0,0,YV,0,K5,[],0,3,0,0,0,Qp,0,C,[Bi],0,3,0,0,["t",ART(AEy)],Qo,0,C,[Bi],0,3,0,0,["t",ART(AC5)],Qn,0,C,[Bi],0,3,0,0,["t",ART(AIV)],Qm,0,C,[Bi],0,3,0,0,["t",ART(ANo)],OA,
0,C,[Bi],0,3,0,0,["t",ART(AMJ)],OC,0,C,[Bi],0,3,0,0,["t",ART(AH0)],OD,0,C,[Bi],0,3,0,0,["t",ART(AE4)],Va,0,C,[Bi],0,3,0,0,["t",ART(ADT)],YQ,0,C,[],0,3,0,0,0,AB5,0,C,[],0,3,0,0,0,SH,0,C,[Bi],0,3,0,0,["t",ART(AIr)],SI,0,C,[Bi],0,3,0,0,["t",ART(ANR)],SG,0,C,[Bi],0,3,0,0,["t",ART(AFA)],U1,0,C,[H3],0,3,0,0,["lx",ARV(AJI)],RG,0,C,[Bi],0,3,0,0,["t",ART(AIv)],RH,0,C,[Bi],0,3,0,0,["t",ART(AJG)],Ng,0,C,[Bi],0,3,0,0,["t",ART(AHr)],Nf,0,C,[Bi],0,3,0,0,["t",ART(ANy)],Uf,0,C,[HF],0,3,0,0,["ga",ART(AFv)],UP,0,C,[Bi],0,3,0,
0,["t",ART(ALq)],UT,0,C,[Bi],0,3,0,0,["t",ART(AIC)],US,0,C,[Bi],0,3,0,0,["t",ART(ADN)],UQ,0,C,[Bi],0,3,0,0,["t",ART(AFD)],WY,0,C,[Bi],0,3,0,0,["t",ART(AIP)],RC,0,C,[H3],0,3,0,0,["lx",ARV(AHK)],OY,0,C,[BU],0,3,0,0,["bg",ARU(AFS)],Ih,0,C,[BC],3,3,0,0,0,LV,0,C,[Ih],0,3,0,0,["pZ",ART(AH1)],LD,0,C,[Ih],0,3,0,0,["pZ",ART(ACR)],Wj,0,C,[BU],0,3,0,0,["bg",ARU(AHg)],GB,0,C,[],0,0,0,0,0,TA,0,GB,[Fp],0,0,0,0,0,PU,0,GB,[Fp],0,0,0,0,0,SZ,0,C,[],3,3,0,0,0]);
$rt_metadata([PS,0,C,[C9],4,3,0,0,0,M6,0,C,[Y],0,3,0,0,["m",ARU(APi)],Ge,0,Cq,[],12,0,0,TU,0,RQ,0,C,[Y],0,3,0,0,["m",ARU(AIF)],Qs,0,C,[Y],0,3,0,0,["m",ARU(AD0)],NP,0,C,[Y],0,3,0,0,["m",ARU(AIL)],TW,0,C,[Y],0,3,0,0,["m",ARU(AMX)],Wt,0,C,[Y],0,3,0,0,["m",ARU(AJC)],WE,0,C,[Y],0,3,0,0,["m",ARU(AO_)],O8,0,C,[Y],0,3,0,0,["m",ARU(ALe)],Vn,0,C,[Y],0,3,0,0,["m",ARU(AI4)],SN,0,C,[Y],0,3,0,0,["m",ARU(AFo)],Lz,0,C,[Y],0,3,0,0,["m",ARU(AEQ)],RU,0,C,[Y],0,3,0,0,["m",ARU(ADL)],Bz,0,C,[],1,0,0,0,["cc",ARW(Hh),"ch",ARX(Hr),
"g$",ART(AEm),"L",ARU(ANI),"bN",ARU(ANH),"eW",ART(AOu),"dP",ART(Is)],Tu,0,C,[],32,0,0,APW,0,Oe,0,C,[Y],0,3,0,0,["m",ARU(AFl)],Si,0,C,[Y],0,3,0,0,["m",ARU(AHw)],W7,0,C,[Bi],0,3,0,0,["t",ART(AE_)],CN,0,Bz,[],0,0,0,Lo,["c",ARW(ADS),"G",ARU(AEb)],Gr,0,C,[],0,0,0,0,0,H$,0,BA,[],0,3,0,0,0,V4,0,C,[BU],0,3,0,0,["bg",ARU(AK6)],AAb,0,C,[BC],3,3,0,0,0,Ti,0,C,[BU],0,3,0,0,["bg",ARU(AKL)],QF,0,CN,[],0,0,0,0,["c",ARW(ADs),"G",ARU(AMi)],WH,0,CN,[],0,0,0,0,["c",ARW(AFc)],OH,0,CN,[],0,0,0,0,["c",ARW(AEk)],RK,0,CN,[],0,0,0,0,
["c",ARW(ADy),"G",ARU(AKU)],Fg,0,CN,[],0,0,0,0,["c",ARW(AN0)],BS,0,Bz,[],1,0,0,0,["c",ARW(AOV),"bS",ART(ANd),"G",ARU(AH9)],ABF,0,BS,[],0,0,0,0,["bp",ARV(AMI),"cc",ARW(AGr),"ch",ARX(AE2),"G",ARU(ADw)],BO,0,Bz,[],0,0,0,0,["c",ARW(AG0),"L",ARU(AKN),"bN",ARU(AIW),"G",ARU(ALv),"dP",ART(AEY)],Il,0,BO,[],0,0,0,0,["c",ARW(AKx),"G",ARU(ALV)],DD,0,Il,[],0,0,0,0,["c",ARW(AFE),"L",ARU(ALD)],LT,0,DD,[],0,0,0,0,["c",ARW(AKG),"G",ARU(ANO)],Vb,0,DD,[],0,0,0,0,["c",ARW(AD7),"G",ARU(ANh)],PV,0,DD,[],0,0,0,0,["c",ARW(AET),"G",
ARU(APl)],Sx,0,DD,[],0,0,0,0,["c",ARW(AC6),"G",ARU(AL_)],Gh,0,BO,[],0,0,0,0,["c",ARW(ADo),"cc",ARW(AJb),"ch",ARX(AMp),"bN",ARU(AIS),"eW",ART(AKR),"dP",ART(AOx)],Gs,0,C,[],1,0,0,0,0,T,0,Gs,[],1,0,0,NE,["c2",ART(AD$),"el",ART(ADH),"ih",ART(AM8),"gs",ART(AOt)],X_,0,T,[],0,0,0,0,["l",ARU(CW),"c2",ART(CR),"el",ART(AGk),"ih",ART(ANw),"cp",ART(AJZ),"gs",ART(AGw)],Iy,0,Bm,[],0,3,0,0,0,DO,0,Bz,[],1,0,0,0,["bN",ARU(AMs),"G",ARU(ANW),"dP",ART(AJx)],CX,0,DO,[],0,0,0,0,["c",ARW(AC8)],EP,0,CX,[],0,0,0,0,["c",ARW(ADV)],CO,
0,DO,[],0,0,0,0,["c",ARW(ADn)],En,0,CX,[],0,0,0,0,["c",ARW(AJh),"L",ARU(APp)],Vp,0,CX,[],0,0,0,0,["c",ARW(AON),"cc",ARW(AJV)]]);
$rt_metadata([W,0,C,[],1,0,0,0,0,C6,0,BA,[],0,3,0,0,0,Ma,0,Gs,[Ec],0,0,0,0,["cp",ART(AJ6)],M_,0,Bz,[],0,0,0,0,["c",ARW(AIy),"G",ARU(AKM)],VZ,0,C,[Ec,C9],0,3,0,0,0,L1,0,BO,[],0,0,0,0,0,Pc,0,BO,[],0,0,0,0,["c",ARW(ADR),"L",ARU(AKu),"G",ARU(AEn),"bN",ARU(AD9)],Dp,0,BO,[],0,0,0,0,["c",ARW(AGc),"l",ARU(AGI),"bN",ARU(ADM),"L",ARU(AM1),"G",ARU(AGo)],Iw,0,Dp,[],0,0,0,0,["l",ARU(AH$)],X4,0,BS,[],0,0,0,0,["bp",ARV(AIz)],D4,0,BS,[],0,0,0,0,["bp",ARV(LA),"bN",ARU(AKP)],NI,0,BO,[],0,0,0,0,["L",ARU(AJg),"c",ARW(ACX),"bN",
ARU(AEh),"G",ARU(ANA)],Eb,0,BS,[],0,0,0,0,["bS",ART(AIh),"bp",ARV(AG9),"cc",ARW(AF9),"ch",ARX(AIo),"bN",ARU(ANs)],AB$,0,BS,[],0,0,0,0,["bp",ARV(ACS)],Xg,0,BS,[],0,0,0,0,["bp",ARV(ADh)],E0,0,BO,[],0,0,0,0,["L",ARU(AOw),"c",ARW(AKw),"bN",ARU(AIA),"G",ARU(ALH)],Wh,0,E0,[],0,0,0,0,0,SP,0,E0,[],0,0,0,0,0,W4,0,CO,[],0,0,0,0,["c",ARW(AFh)],Oz,0,CO,[],0,0,0,0,["c",ARW(AJM)],FC,0,CO,[],0,0,0,0,["c",ARW(AMV),"L",ARU(AN4)],Of,0,FC,[],0,0,0,0,["c",ARW(AIk),"L",ARU(AJ7)],EX,0,CO,[],0,0,0,0,["c",ARW(APf)],Mj,0,EX,[],0,0,
0,0,["c",ARW(AHD)],Qh,0,CO,[],0,0,0,0,["c",ARW(AOC)],Pn,0,FC,[],0,0,0,0,["c",ARW(AEq)],TX,0,EX,[],0,0,0,0,["c",ARW(ADD)],Qj,0,DO,[],0,0,0,0,["c",ARW(AO3),"cc",ARW(AM$)],Nh,0,DO,[],0,0,0,0,["c",ARW(AKS),"cc",ARW(AC1)],Ey,0,C,[],1,0,0,0,0,W6,0,CX,[],0,0,0,0,["c",ARW(ADF)],Vk,0,En,[],0,0,0,0,["c",ARW(AJL)],N3,0,EP,[],0,0,0,0,["c",ARW(AMw)],Pj,0,CX,[],0,0,0,0,["c",ARW(AKK)],S9,0,En,[],0,0,0,0,["c",ARW(ADK)],PW,0,EP,[],0,0,0,0,["c",ARW(AMM)],JD,0,Bz,[],4,0,0,0,["c",ARW(AIU),"G",ARU(AHU)],YG,0,Bz,[],0,0,0,0,["c",
ARW(AD6),"G",ARU(AEe)],Nd,0,Bz,[],0,0,0,0,["c",ARW(AIc),"G",ARU(APb)],V1,0,Bz,[],4,0,0,0,["c",ARW(ALo),"G",ARU(AE8)],VL,0,Bz,[],0,0,0,0,["c",ARW(AKq),"G",ARU(ACQ)],Mv,0,Bz,[],0,0,0,0,["c",ARW(AEX),"G",ARU(AGT)],AB0,0,BO,[],0,0,0,0,["c",ARW(AOH),"L",ARU(AEj),"g$",ART(AKb),"G",ARU(AEi)],X$,0,BO,[],4,0,0,0,["c",ARW(AKj),"L",ARU(AMf),"g$",ART(ACM),"G",ARU(AOS)],ABQ,0,Bz,[],4,0,0,0,["c",ARW(AIE),"G",ARU(AGO)],Z9,0,Bz,[],0,0,0,0,["c",ARW(AKo),"G",ARU(AGF)],Xd,0,Bz,[],0,0,0,0,["c",ARW(AHJ),"G",ARU(AFb)],GK,0,BO,[],
0,0,0,0,["c",ARW(ADG),"L",ARU(ALz),"G",ARU(ALW)],ABV,0,GK,[],0,0,0,0,["c",ARW(AFg),"cc",ARW(ANK),"ch",ARX(ADt),"bN",ARU(AJF)],Zh,0,GK,[],0,0,0,0,["c",ARW(AI8)]]);
$rt_metadata([M$,0,F5,[Hv],0,3,0,0,["kO",ARX(AGx),"j2",ARW(AD_),"he",ARU(AEA),"ll",ARV(ANc)],Qr,0,BS,[],0,0,0,0,["bp",ARV(AFB),"cc",ARW(AD1),"ch",ARX(AGS),"bN",ARU(AHk)],Xc,0,BS,[],0,0,0,0,["bp",ARV(AJd)],Mp,0,BS,[],0,0,0,0,["bp",ARV(AMy)],GJ,0,C,[],4,0,0,AL9,0,LI,0,BS,[],0,0,0,0,["bp",ARV(AMF)],Ka,0,BO,[],0,0,0,0,["L",ARU(AKE),"c",ARW(AE9),"cc",ARW(AHf),"ch",ARX(AFI),"bN",ARU(ADr),"G",ARU(ANi)],Kv,0,BO,[],0,0,0,0,["L",ARU(AEz),"c",ARW(AC7),"cc",ARW(AK1),"ch",ARX(AMx),"bN",ARU(AFC),"G",ARU(AK_)],DG,0,BS,[],
0,0,0,0,["bp",ARV(ALY),"cc",ARW(AJ0),"ch",ARX(AEw),"bN",ARU(ALL)],Um,0,Ey,[],0,0,0,0,["g1",ARU(AEN),"rn",ARV(ALQ)],Un,0,Ey,[],0,0,0,0,["g1",ARU(AMP),"rn",ARV(AOp)],AAY,0,C,[],0,0,0,0,0,Xw,0,C,[],0,0,0,0,0,J8,0,W,[],0,0,0,0,["D",ART(Zp)],Ja,0,W,[],0,0,0,0,["D",ART(Z3)],AAS,0,W,[],0,0,0,0,["D",ART(AMh)],ABl,0,W,[],0,0,0,0,["D",ART(ANl)],ABp,0,W,[],0,0,0,0,["D",ART(AGd)],J4,0,W,[],0,0,0,0,["D",ART(Ya)],KF,0,J4,[],0,0,0,0,["D",ART(Y1)],ACC,0,W,[],0,0,0,0,["D",ART(AHd)],Lx,0,KF,[],0,0,0,0,["D",ART(W$)],ZB,0,Lx,[],
0,0,0,0,["D",ART(AJy)],ZX,0,W,[],0,0,0,0,["D",ART(AFu)],Yy,0,W,[],0,0,0,0,["D",ART(AJu)],Yh,0,W,[],0,0,0,0,["D",ART(AOs)],ABs,0,W,[],0,0,0,0,["D",ART(AJ8)],ACL,0,W,[],0,0,0,0,["D",ART(ACZ)],AAZ,0,W,[],0,0,0,0,["D",ART(AHO)],AAL,0,W,[],0,0,0,0,["D",ART(AL2)],ABK,0,W,[],0,0,0,0,["D",ART(AFq)],XN,0,W,[],0,0,0,0,["D",ART(AFQ)],Xt,0,W,[],0,0,0,0,["D",ART(AOl)],AA4,0,W,[],0,0,0,0,["D",ART(ACT)],ABd,0,W,[],0,0,0,0,["D",ART(AII)],YU,0,W,[],0,0,0,0,["D",ART(AFY)],Z1,0,W,[],0,0,0,0,["D",ART(AGV)],ACh,0,W,[],0,0,0,0,["D",
ART(AIK)],ABc,0,W,[],0,0,0,0,["D",ART(AND)],Zf,0,W,[],0,0,0,0,["D",ART(ALj)],YS,0,W,[],0,0,0,0,["D",ART(AJ3)],ACG,0,W,[],0,0,0,0,["D",ART(AMb)],IG,0,W,[],0,0,0,0,["D",ART(ZY)],ABM,0,IG,[],0,0,0,0,["D",ART(AJR)],ZG,0,J8,[],0,0,0,0,["D",ART(ADZ)],YN,0,Ja,[],0,0,0,0,["D",ART(AG6)],Ym,0,W,[],0,0,0,0,["D",ART(AIY)],YI,0,W,[],0,0,0,0,["D",ART(AOa)],Zw,0,W,[],0,0,0,0,["D",ART(AGB)],ZD,0,W,[],0,0,0,0,["D",ART(ACU)]]);
$rt_metadata([Ys,0,C,[],4,0,0,0,0,X2,0,C,[],4,3,0,0,0,Mw,0,C,[],0,3,0,0,0,AA9,0,C,[],0,3,0,0,0,Zd,0,C,[],4,3,0,0,0,X7,0,C,[Ia],0,3,0,0,0,Mm,0,C,[Y],0,3,0,0,["m",ARU(AJY)],P2,0,C,[Y],0,3,0,0,["m",ARU(AGy)],Uz,0,C,[Y],0,3,0,0,0,V2,0,C,[Y],0,3,0,0,0,AA0,0,C,[],3,3,0,0,0,Vo,0,T,[],0,0,0,0,["l",ARU(AGj)],Vl,0,T,[],0,0,0,0,["l",ARU(ADk)],Nm,0,T,[],0,0,0,0,["l",ARU(AIQ),"cp",ART(AGY)],Nt,0,T,[],0,0,0,0,["l",ARU(AL1)],Nr,0,T,[],0,0,0,0,["l",ARU(AME)],Ns,0,T,[],0,0,0,0,["l",ARU(AJc)],Nw,0,T,[],0,0,0,0,["l",ARU(AFU)],Nx,
0,T,[],0,0,0,0,["l",ARU(ACN)],Nu,0,T,[],0,0,0,0,["l",ARU(AG2)],Nv,0,T,[],0,0,0,0,["l",ARU(AJf)],Ny,0,T,[],0,0,0,0,["l",ARU(ANP)],NA,0,T,[],0,0,0,0,["l",ARU(AFk)],Nl,0,T,[],0,0,0,0,["l",ARU(APs)],Oa,0,T,[],0,0,0,0,["l",ARU(AG5)],Nj,0,T,[],0,0,0,0,["l",ARU(AFj)],Nk,0,T,[],0,0,0,0,["l",ARU(AGM)],Np,0,T,[],0,0,0,0,["l",ARU(AIf)],Ni,0,T,[],0,0,0,0,["l",ARU(ANr)],Nn,0,T,[],0,0,0,0,["l",ARU(AEc)],No,0,T,[],0,0,0,0,["l",ARU(AK$)],K4,0,C,[],3,3,0,0,0,Rm,0,C,[K4],4,3,0,0,0,Cb,0,Cq,[],12,3,0,ABA,0,Na,0,C,[Y],0,3,0,0,["m",
ARU(AMa)],Me,0,Gh,[],0,0,0,0,["cc",ARW(AGE),"ch",ARX(APd),"eW",ART(AE7)],O6,0,Bm,[],0,3,0,0,0,V_,0,Bm,[],0,3,0,0,0,Ui,0,Fy,[],0,3,0,0,0,OW,0,Fy,[],0,3,0,0,0,WU,0,Bm,[],0,3,0,0,0,Uc,0,C,[],0,3,0,0,0,NS,0,C,[Bi],0,3,0,0,0,Rw,0,C,[Y],0,3,0,0,0,Rv,0,C,[Y],0,3,0,0,0,Ug,0,C,[K4],0,0,0,0,0,V8,0,C,[Bi],0,3,0,0,["t",ART(AKW)],YK,0,C,[],0,3,0,0,0,OP,0,C,[],3,3,0,0,0,Wb,0,C,[OP],0,3,0,0,0]);
$rt_metadata([RR,0,T,[],0,0,0,0,["l",ARU(ANY)],LY,0,T,[],0,0,0,0,["l",ARU(ADX)],QP,0,T,[],0,0,0,0,["l",ARU(ADJ)],QO,0,T,[],0,0,0,0,["l",ARU(AGA)],VT,0,T,[],0,0,0,0,["l",ARU(AH2)],NW,0,T,[],0,0,0,0,["l",ARU(AN1)],M5,0,T,[],0,0,0,0,["l",ARU(AKz)],Pz,0,T,[],0,0,0,0,["l",ARU(AL8)],LR,0,T,[],0,0,0,0,["l",ARU(AOQ)],LW,0,T,[],0,0,0,0,["l",ARU(AFH)],MR,0,T,[],0,0,0,0,["l",ARU(AN$)],Om,0,T,[],0,0,0,0,["l",ARU(AJq)],Ov,0,T,[],0,0,0,0,["l",ARU(ALx)],SK,0,T,[],0,0,0,0,["l",ARU(ANQ)],Rn,0,T,[],0,0,0,0,["l",ARU(AOA)],L9,
0,T,[],0,0,0,0,["l",ARU(AFs)],Lk,0,T,[],0,0,0,0,["l",ARU(AKB)],QH,0,Lk,[],0,0,0,0,["l",ARU(AM2)],OQ,0,C,[Ih],0,3,0,0,["pZ",ART(AI3)],UR,0,C,[BU],0,3,0,0,["bg",ARU(ALn)],UV,0,C,[BU],0,3,0,0,["bg",ARU(AKc)],Ss,0,C,[BU],0,3,0,0,["bg",ARU(AG_)],Sv,0,C,[BU],0,3,0,0,["bg",ARU(ADe)],Tz,0,C,[BU],0,3,0,0,["bg",ARU(AIZ)],Uu,0,C,[Y],0,3,0,0,["m",ARU(AK7)],Ur,0,C,[Y],0,3,0,0,["m",ARU(AI1)],Us,0,C,[Y],0,3,0,0,["m",ARU(AK9)],XU,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.Jc=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
"number","#6897BB","method","#FFC66D","showUsage","braceMatch","#FFEF28","#3B514D","comment","#808080","annotation","#BBB529","type","#287BDE","operator","#5F8C8A","nwse-resize","nesw-resize"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","closed","Int","Iter","VP","Rep","No definition or usages","Expected "," ints to read, but "," read","readClipboardText error: ",
"Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W",
"s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic",
"Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing",
"BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo",
"Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms",
"SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Viewport parsed in ","Verdana","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AEs(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Cm=Long_add;var JF=Long_sub;var BN=Long_mul;var Df=Long_div;var L2=Long_rem;var AP$=Long_or;var CT=Long_and;var AUQ=Long_xor;var E9=Long_shl;var Gc=Long_shr;var DV=Long_shru;var AQu=Long_compare;var EY=Long_eq;var AUR=Long_ne;var AF1=Long_lt;var OJ=Long_le;var AFL=Long_gt;var YD=Long_ge;var AUS=Long_not;var AQF=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(AQJ);
main.javaException=$rt_javaException;
(function(){var c;c=SS.prototype;c.f=c.bg;c=SQ.prototype;c.f=c.bg;c=Mn.prototype;c.f=c.bg;c=Y3.prototype;c.getLength=c.Ep;c.get=c.E4;c=MS.prototype;c.f=c.bg;c=XD.prototype;c.dispatchEvent=c.zT;c.addEventListener=c.C8;c.removeEventListener=c.E$;c.getLength=c.zZ;c.get=c.xd;c.addEventListener=c.yv;c.removeEventListener=c.BH;c=UM.prototype;c.onAnimationFrame=c.BK;c=UI.prototype;c.f=c.tv;c=UF.prototype;c.handleEvent=c.b9;c=UG.prototype;c.f=c.bg;c=Vv.prototype;c.handleEvent=c.b9;c=Vw.prototype;c.handleEvent=c.b9;c
=Vx.prototype;c.handleEvent=c.b9;c=Vy.prototype;c.handleEvent=c.b9;c=Vz.prototype;c.handleEvent=c.b9;c=VA.prototype;c.handleEvent=c.b9;c=VB.prototype;c.handleEvent=c.b9;c=VC.prototype;c.handleEvent=c.b9;c=VD.prototype;c.handleEvent=c.b9;c=VE.prototype;c.handleEvent=c.b9;c=WN.prototype;c.handleEvent=c.b9;c=WO.prototype;c.handleEvent=c.b9;c=WP.prototype;c.handleEvent=c.b9;c=WQ.prototype;c.handleEvent=c.b9;c=Ts.prototype;c.handleEvent=c.b9;c=Ww.prototype;c.f=c.bg;c=Wy.prototype;c.f=c.bg;c=Mu.prototype;c.f=c.bg;c
=Mt.prototype;c.f=c.bg;c=Ms.prototype;c.f=c.bg;c=Mr.prototype;c.f=c.bg;c=MM.prototype;c.accept=c.FA;c=N$.prototype;c.f=c.tv;c=N8.prototype;c.f=c.tv;c=PD.prototype;c.f=c.bg;c=TF.prototype;c.f=c.bg;c=L0.prototype;c.f=c.bg;c=Wl.prototype;c.f=c.bg;c=Wk.prototype;c.f=c.bg;c=VO.prototype;c.f=c.bg;c=VN.prototype;c.f=c.bg;c=We.prototype;c.handleEvent=c.b9;c=OY.prototype;c.f=c.bg;c=LV.prototype;c.onTimer=c.pZ;c=LD.prototype;c.onTimer=c.pZ;c=Wj.prototype;c.f=c.bg;c=V4.prototype;c.f=c.bg;c=Ti.prototype;c.f=c.bg;c=OQ.prototype;c.onTimer
=c.pZ;c=UR.prototype;c.f=c.bg;c=UV.prototype;c.f=c.bg;c=Ss.prototype;c.f=c.bg;c=Sv.prototype;c.f=c.bg;c=Tz.prototype;c.f=c.bg;})();
})(this);
