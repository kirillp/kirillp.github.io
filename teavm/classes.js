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
{if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.eF=f;}
function $rt_cls(cls){return ABS(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FS(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bX.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AN_(t);}
function $rt_throwableCause(t){return AOg(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ATM());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ATN(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ATO());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BG=$rt_compare;var ATP=$rt_nullCheck;var E=$rt_cls;var Q=$rt_createArray;var IB=$rt_isInstance;var ATQ=$rt_nativeThread;var ATR=$rt_suspending;var ATS=$rt_resuming;var ATT=$rt_invalidPointer;var B=$rt_s;var Bl=$rt_eraseClinit;var Z=$rt_imul;var Ef=$rt_wrapException;var ATU=$rt_checkBounds;var ATV=$rt_checkUpperBound;var ATW=$rt_checkLowerBound;var ATX=$rt_wrapFunction0;var ATY=$rt_wrapFunction1;var ATZ=$rt_wrapFunction2;var AT0=$rt_wrapFunction3;var AT1=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var AAH=$rt_createCharArrayFromData;var ASB=$rt_createByteArrayFromData;var AT2=$rt_createShortArrayFromData;var E4=$rt_createIntArrayFromData;var AT3=$rt_createBooleanArrayFromData;var AT4=$rt_createFloatArrayFromData;var AT5=$rt_createDoubleArrayFromData;var AGe=$rt_createLongArrayFromData;var ATL=$rt_createBooleanArray;var E9=$rt_createByteArray;var AT6=$rt_createShortArray;var BM=$rt_createCharArray;var BC=$rt_createIntArray;var ATp=$rt_createLongArray;var AEt=$rt_createFloatArray;var AT7
=$rt_createDoubleArray;var BG=$rt_compare;var AT8=$rt_castToClass;var AT9=$rt_castToInterface;var AT$=Long_toNumber;var Bb=Long_fromInt;var AT_=Long_fromNumber;var Cc=Long_create;var Em=Long_ZERO;var AUa=Long_hi;var EC=Long_lo;
function C(){this.$id$=0;}
function AUb(){var a=new C();AC1(a);return a;}
function AC1(a){}
function Cn(a){return ABS(a.constructor);}
function ALc(a,b){return a!==b?0:1;}
function AF1(a){var b,c,d,e,f,g,h,i,j;b=Yh(a);if(!b)c=B(0);else{d=(((32-NA(b)|0)+4|0)-1|0)/4|0;e=BM(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=G_((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FS(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function Yh(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AKt(a){var b,c,d;if(!IB(a,Ek)&&a.constructor.$meta.item===null){b=new VF;V(b);J(b);}b=AEF(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Rw(){var a=this;C.call(a);a.ui=0;a.qE=null;}
function ASO(b){var c,d,e,f,g,h,i,j,k,l;ACZ();Yz();ABe();ACh();ZW();ACJ();Yn();AC3();AEa();Yq();AB8();ABA();AB7();AB9();AAU();Z3();Zl();AAr();AAt();AAj();YJ();Yr();ADV();c=(YP()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))OW(B(2),B(3));else{d=new Rw;BF(d);e=new TP;e.se=d;f=new M8;c=new $rt_globals.Worker("teavm/worker.js");g=new NF;g.oK=c;g.oL=e;g.oM=f;e=Bm(g,"f");c.onmessage=e;h=H(LI,[JM(B(4),B(5),400),JM(B(6),B(7),400),JM(B(8),B(5),700),
JM(B(9),B(7),700)]);b=Q(LI,1);b.data[0]=AO7(B(10),Fb(B(11),B(12)),B(5),400);b=(LE(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.rM;f=c.qy;k=new M;O(k);BA(G(G(k,B(13)),f),41);k=N(k);f=c.qt;l=c.ot;f=AIm($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BF(d);c=new TQ;c.te=d;g=new TO;e.then(Bm(c,"f"),Bm(g,"f"));}}
function AAX(b){var c,d,e,f,g,h,i,j,k;c=new SI;d=new RK;c.pI=new $rt_globals.TextDecoder("utf-16");e=new VE;e.on=c;c.rq=e;e=new Vx;e.uz=c;c.lV=e;f=new Vy;f.rf=c;c.tn=new $rt_globals.ResizeObserver(Bm(f,"f"));e=new Vv;e.nM=c;c.mB=e;c.h3=1;f=new OU;f.xk=null;f.je=AUc;c.lx=f;c.p$=b;f=new Vw;f.tz=c;e=Bm(f,"f");b.onmessage=e;e=AAT();b.postMessage(e);c.mu=(D8()).getElementById("canvasDiv");b=YP();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dC
=b;c.mu.appendChild(b);f=c.dC;e=AMB(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)OW(B(2),B(14));else{g=new Pf;e=c.dC;f=c.lV;g.dv=null;g.gS=e;g.cl=ASY(f);h=$rt_globals.window;i=Q(Ds,14);j=i.data;k=new Wq;k.mS=g;j[0]=CS(g,e,B(15),k);f=new Wr;f.rW=g;j[1]=CS(g,e,B(16),f);f=new Ws;f.n7=g;j[2]=CS(g,e,B(17),f);f=new Wt;f.uu=g;j[3]=CS(g,e,B(18),f);f=new Wu;f.q5=g;j[4]=CS(g,e,B(19),f);f=new Wv;f.nl=g;j[5]=CS(g,e,B(20),f);k=new Ww;k.uL=g;j[6]=CS(g,e,B(21),k);k=new Wx;k.ri=g;j[7]=CS(g,e,B(22),k);k=new Wy;k.nw
=g;j[8]=CS(g,e,B(23),k);k=new Wz;k.tJ=g;j[9]=CS(g,e,B(24),k);k=new XN;k.s$=g;j[10]=CS(g,e,B(25),k);k=new XO;k.sa=g;j[11]=AB3(g,h,B(26),k,1);k=new XP;k.md=g;j[12]=CS(g,h,B(27),k);k=new XQ;k.t2=g;j[13]=CS(g,h,B(28),k);g.wF=AQr(i);AAc(g,e);c.k8=g;c.fX=ASn(b,c.lV);AOK(c.tn,c.dC);e=$rt_globals.window;g=c.mB;e.addEventListener("resize",Bm(g,"handleEvent"));c.fe=AA_(d,Z5(c));Tf(c);}ACx(c);}
var M2=F(0);
var Mu=F(0);
function Wl(){var a=this;C.call(a);a.j2=null;a.fK=null;}
function ABS(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Wl;c.fK=b;d=c;b.classObject=d;}return c;}
function H1(a){if(a.j2===null)a.j2=$rt_str(a.fK.$meta.name);return a.j2;}
function HO(a){return a.fK.$meta.primitive?1:0;}
function H8(a){return ABS(a.fK.$meta.item);}
var Zo=F();
function Bm(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Li(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Y9=F();
function AEF(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ABV(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ABV(d[e],c))return 1;e=e+1|0;}return 0;}
var Di=F(0);
var CI=F(0);
var IO=F(0);
function Bu(){var a=this;C.call(a);a.bX=null;a.hw=0;}
var AUd=null;var AUe=null;var AUf=null;function EL(){EL=Bl(Bu);APH();}
function AIO(){var a=new Bu();Ys(a);return a;}
function FS(a){var b=new Bu();Hj(b,a);return b;}
function JK(a,b,c){var d=new Bu();X1(d,a,b,c);return d;}
function Ys(a){EL();a.bX=AUd;}
function Hj(a,b){var c,d,e,f;EL();b=b.data;c=b.length;d=BM(c);e=d.data;a.bX=d;f=0;while(f<c){e[f]=b[f];f=f+1|0;}}
function X1(a,b,c,d){var e,f,g;EL();e=BM(d);f=e.data;a.bX=e;g=0;while(g<d){f[g]=b.data[g+c|0];g=g+1|0;}}
function Me(b){var c;EL();c=AIO();c.bX=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.bX.data;if(b<c.length)return c[b];}d=new G9;V(d);J(d);}
function I(a){return a.bX.data.length;}
function Fo(a){return a.bX.data.length?0:1;}
function PA(a,b,c,d,e){var f,g,h;if(b>=0&&b<=c&&c<=I(a)&&e>=0){d=d.data;if((e+(c-b|0)|0)<=d.length){while(b<c){f=e+1|0;g=b+1|0;d[e]=L(a,b);e=f;b=g;}return;}}h=new Bw;V(h);J(h);}
function Ug(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function KB(a,b){if(a===b)return 1;return Ug(a,b,0);}
function Ec(a,b){var c,d,e,f;if(a===b)return 1;if(I(b)>I(a))return 0;c=0;d=I(a)-I(b)|0;while(d<I(a)){e=L(a,d);f=c+1|0;if(e!=L(b,c))return 0;d=d+1|0;c=f;}return 1;}
function GC(a,b,c){var d,e,f,g,h;d=Ba(0,c);if(b<65536){e=b&65535;while(true){f=a.bX.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=H4(b);h=IG(b);while(true){f=a.bX.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function FY(a,b,c){var d,e,f,g,h;d=Y(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bX.data[d]==e)break;d=d+(-1)|0;}return d;}f=H4(b);g=IG(b);while(true){if(d<1)return (-1);h=a.bX.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function ZP(a,b,c){var d,e,f;d=Ba(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function Px(a,b,c){var d,e;d=Y(c,I(a)-I(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=I(b))break a;if(L(a,d+e|0)!=L(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function B$(a,b,c){var d,e;d=BG(b,c);if(d>0){e=new Bw;V(e);J(e);}if(!d){EL();return AUe;}if(!b&&c==I(a))return a;return JK(a.bX,b,c-b|0);}
function Dk(a,b){return B$(a,b,I(a));}
function PG(a,b,c){return B$(a,b,c);}
function Fb(a,b){var c,d,e,f,g,h;if(Fo(b))return a;if(Fo(a))return b;c=BM(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Me(c);}
function U8(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BA(d,L(a,f));}f=f+1|0;}G(d,Dk(a,f));return N(d);}
function RO(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return B$(a,b,c+1|0);}
function AF0(a){return a;}
function Gp(a){var b,c,d,e,f;b=a.bX.data;c=BM(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cq(b){EL();return b===null?B(29):b.cr();}
function C5(b){var c;EL();c=new M;O(c);return N(T(c,b));}
function Bq(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bu))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function Lg(a){var b,c,d,e;a:{if(!a.hw){b=a.bX.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hw=(31*a.hw|0)+e|0;d=d+1|0;}}}return a.hw;}
function LS(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gy;Bj(b,B(30));J(b);}AUg=1;d=new QS;d.jM=Q(CN,10);d.f4=(-1);d.ev=(-1);d.br=(-1);e=new GE;e.es=1;e.bJ=b;e.bb=BM(I(b)+2|0);Eg(Gp(b),0,e.bb,0,I(b));f=e.bb.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.q8=g;e.fM=0;E1(e);E1(e);d.g=e;d.dh=0;d.kK=XE(d,(-1),0,null);if(!Dj(d.g)){b=new IJ;h=d.g;Je(b,B(31),h.bJ,h.c7);J(b);}if(d.mV)d.kK.d6();b=Cm();h=new Ss;h.h0=(-1);h.j7=(-1);h.vJ=d;h.tj=d.kK;h.io=a;h.h0=0;g=I(a);h.j7=g;e=new U_;i=h.h0;j=d.f4;k=d.ev+1|0;l=d.br+
1|0;e.hf=(-1);m=j+1|0;e.n1=m;e.dB=BC(m*2|0);f=BC(l);e.jc=f;Hr(f,(-1));if(k>0)e.kA=BC(k);Hr(e.dB,(-1));Xv(e,a,i,g);h.cq=e;e.e6=1;n=0;m=0;if(!I(a)){f=Q(Bu,1);f.data[0]=B(31);}else{while(true){l=I(h.io);if(!Yp(h.cq))l=h.j7;e=h.cq;if(e.d3>=0&&AAh(e)==1){e=h.cq;e.d3=I0(e);if(I0(h.cq)==ACg(h.cq)){e=h.cq;e.d3=e.d3+1|0;}g=h.cq.d3;g=g<=l&&MC(h,g)?1:0;}else g=MC(h,h.h0);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;B0(b,PG(a,m,ADH(h)));m=Z0(h);n=g;}a:{B0(b,PG(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Bp(b,
g)))break a;El(b,g);}}if(g<0)g=0;f=HF(b,Q(Bu,g));}return f;}
function AIa(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Y(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function APH(){AUd=BM(0);AUe=AIO();AUf=new SU;}
function Gr(){var a=this;C.call(a);a.ha=null;a.ky=null;a.iW=0;a.jg=0;}
function AUh(){var a=new Gr();V(a);return a;}
function AUi(a){var b=new Gr();Bj(b,a);return b;}
function V(a){a.iW=1;a.jg=1;}
function Bj(a,b){a.iW=1;a.jg=1;a.ha=b;}
function AH2(a){return a;}
function AN_(a){return a.ha;}
function AOg(a){var b;b=a.ky;if(b===a)b=null;return b;}
var EF=F(Gr);
var Ha=F(EF);
var AAz=F(Ha);
var DU=F();
function Ff(){DU.call(this);this.fp=0;}
var AUj=null;var AUk=null;function ADh(a){var b=new Ff();JW(b,a);return b;}
function JW(a,b){a.fp=b;}
function Jr(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new De;Bj(b,B(32));J(b);}d=I(b);if(0==d){b=new De;Bj(b,B(33));J(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new De;V(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=OO(L(b,f));if(i<0){j=new De;k=B$(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bj(j,N(b));J(j);}if(i>=c){j=new De;l=B$(b,0,d);b=new M;O(b);G(G(T(G(b,B(35)),c),B(36)),l);Bj(j,N(b));J(j);}g=Z(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new De;k=B$(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bj(j,N(b));J(j);}b=new De;j=new M;O(j);T(G(j,B(38)),c);Bj(b,N(j));J(b);}
function FX(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AUk===null){AUk=Q(Ff,256);c=0;while(true){d=AUk.data;if(c>=d.length)break a;d[c]=ADh(c-128|0);c=c+1|0;}}}return AUk.data[b+128|0];}return ADh(b);}
function L0(a){var b;b=a.fp;return (Nm(ATy(20),b,10)).cr();}
function NA(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Ig(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function J$(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function AKn(a,b){b=b;return BG(a.fp,b.fp);}
function ACZ(){AUj=E($rt_intcls());}
function Ge(){var a=this;C.call(a);a.A=null;a.L=0;}
function AUl(){var a=new Ge();O(a);return a;}
function ATy(a){var b=new Ge();FU(b,a);return b;}
function O(a){FU(a,16);}
function FU(a,b){a.A=BM(b);}
function Nm(a,b,c){return AAO(a,a.L,b,c);}
function AAO(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cd(a,b,b+1|0);else{Cd(a,b,b+2|0);f=a.A.data;g=b+1|0;f[b]=45;b=g;}a.A.data[b]=G_(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Z(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cd(a,b,b+i|0);if(e)e=b;else{f=a.A.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.A.data;b=e+1|0;f[e]=G_($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ABJ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BG(c,0.0);if(!d){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Cd(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cd(a,b,b+8|0);d=b;}else{Cd(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AUm;ABB(c,f);d=f.ka;g=f.jX;h=f.ng;i=1;j=1;if(h)j=2;k=9;l=APa(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Ba(k,i+1|0);g=0;}else{d=d/AUn.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cd(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.A.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.A.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.A.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function ZI(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BG(c,0.0);if(!d){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Cd(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cd(a,b,b+8|0);d=b;}else{Cd(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AUo;AAR(c,f);g=f.kM;h=f.jF;i=f.mQ;j=1;k=1;if(i)k=2;l=18;m=AM2(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Ba(l,j+1|0);h=0;}else{g=Dp(g,AUp.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cd(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.A.data;k=b+1|0;e[b]=45;}n=Cc(1569325056, 23283064);o=0;while(o<l){if(Pw(n,Em))d=0;else{d=EC(Dp(g,n));g
=ML(g,n);}e=a.A.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Dp(n,Bb(10));o=o+1|0;}if(h){e=a.A.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function APa(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AM2(b){var c,d,e,f,g;c=Bb(1);d=0;e=16;f=AUq.data;g=f.length-1|0;while(g>=0){if(Fa(ML(b,BP(c,f[g])),Em)){d=d|e;c=BP(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BA(a,b){return a.lE(a.L,b);}
function Xj(a,b,c){Cd(a,b,b+1|0);a.A.data[b]=c;return a;}
function Jv(a,b){var c,d;c=a.A.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.A=YI(a.A,d);}
function N(a){return JK(a.A,0,a.L);}
function W3(a,b,c,d){return a.k7(a.L,b,c,d);}
function MW(a,b,c,d,e){var f,g,h,i;Cd(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.A.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Ih(a,b){return a.kj(b,0,b.data.length);}
function Cd(a,b,c){var d,e,f,g;d=a.L;e=d-b|0;a.hp((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.A.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.L=a.L+(c-b|0)|0;}
var HT=F(0);
var M=F(Ge);
function LL(){var a=new M();AQy(a);return a;}
function AQy(a){O(a);}
function G(a,b){var c;c=a.L;if(b===null)b=B(29);Mf(a,c,b);return a;}
function B1(a,b){Mf(a,a.L,b);return a;}
function T(a,b){Nm(a,b,10);return a;}
function HQ(a,b){var c,d,e,f,g,h,i,j;c=a.L;d=1;if(AHx(b,Em)){d=0;b=ASK(b);}a:{if(Lb(b,Bb(10))<0){if(d)Cd(a,c,c+1|0);else{Cd(a,c,c+2|0);e=a.A.data;f=c+1|0;e[c]=45;c=f;}a.A.data[c]=G_(EC(b),10);}else{g=1;h=Bb(1);i=FE(Bb(-1),Bb(10));b:{while(true){j=BP(h,Bb(10));if(Lb(j,b)>0){j=h;break b;}g=g+1|0;if(Lb(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cd(a,c,c+g|0);if(d)f=c;else{e=a.A.data;f=c+1|0;e[c]=45;}while(true){if(Fa(j,Em))break a;e=a.A.data;c=f+1|0;e[f]=G_(EC((FE(b,j))),10);b=Nj(b,j);j=FE(j,Bb(10));f=c;}}}return a;}
function Fj(a,b){ABJ(a,a.L,b);return a;}
function Yl(a,b){BA(a,b);return a;}
function F2(a,b){Mf(a,a.L,!b?B(39):B(40));return a;}
function ADx(a,b,c){var d,e,f,g,h,i;d=BG(b,c);if(d<=0){e=a.L;if(b<=e){if(d){f=e-c|0;a.L=e-(c-b|0)|0;g=0;while(g<f){h=a.A.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new G9;V(i);J(i);}
function V8(a,b){var c,d,e,f;if(b>=0){c=a.L;if(b<c){c=c-1|0;a.L=c;while(b<c){d=a.A.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new G9;V(f);J(f);}
function AKi(a,b,c,d,e){MW(a,b,c,d,e);return a;}
function AHi(a,b,c,d){W3(a,b,c,d);return a;}
function YX(a){return a.L;}
function DS(a){return N(a);}
function AKq(a,b){Jv(a,b);}
function AKX(a,b,c){Xj(a,b,c);return a;}
function Mf(a,b,c){var d,e,f;if(b>=0&&b<=a.L){a:{if(c===null)c=B(29);else if(Fo(c))break a;Jv(a,a.L+I(c)|0);d=a.L-1|0;while(d>=b){a.A.data[d+I(c)|0]=a.A.data[d];d=d+(-1)|0;}a.L=a.L+I(c)|0;d=0;while(d<I(c)){e=a.A.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new G9;V(c);J(c);}
var Ep=F(Ha);
var AB1=F(Ep);
function AUr(a){var b=new AB1();AF$(b,a);return b;}
function AF$(a,b){Bj(a,b);}
var AAn=F(Ep);
function AUs(a){var b=new AAn();AGu(b,a);return b;}
function AGu(a,b){Bj(a,b);}
var D1=F(Gr);
var Bo=F(D1);
function ATN(a){var b=new Bo();AP$(b,a);return b;}
function AP$(a,b){Bj(a,b);}
var TH=F(0);
var Ds=F(0);
function AQr(b){var c;c=new P5;c.v0=b;return c;}
function CG(b,c){if(b!==null)b.dS();return c;}
var OK=F(0);
function Iv(){var a=this;C.call(a);a.lj=0;a.kw=0;}
var AUt=0;function FM(a){AUt=AUt-1|0;}
function FZ(a,b,c){I_(a,ZB(b,c,400,0));}
function QH(a,b){return KJ(a,b,0.875);}
function KJ(a,b,c){return Eo(a,b)+c|0;}
function Ri(){var a=this;Iv.call(a);a.jj=null;a.bn=null;a.mj=null;}
function Eu(a){var b,c,d;b=a.bn;c=a.lj;d=a.kw;b.clearRect(0.0,0.0,c,d);}
function R7(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bn;d="center";c.textAlign=d;break a;case 2:c=a.bn;d="right";c.textAlign=d;break a;default:break a;}d=a.bn;c="left";d.textAlign=c;}}
function Cy(a,b){I_(a,b.mE);}
function I_(a,b){var c;if(!(a.mj==b?1:0)){c=a.bn;a.mj=b;c.font=b;}}
function ZB(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Ch(a,b,c,d){var e,f,g;e=a.bn;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Eo(a,b){var c;c=$rt_ustr(b);return a.bn.measureText(c).width;}
function Lo(a,b,c,d){var e,f;e=a.bn;f=$rt_ustr(FS(AAH([35,GB(b/16|0),GB(b%16|0),GB(c/16|0),GB(c%16|0),GB(d/16|0),GB(d%16|0)])));e.fillStyle=f;}
var YA=F();
var ADc=F();
function C6(b,c){if(b===c)return 1;return b!==null?b.cD(c):c!==null?0:1;}
function BF(b){if(b!==null)return b;b=new Gy;Bj(b,B(31));J(b);}
var Bc=F(0);
function TP(){C.call(this);this.se=null;}
var BB=F(0);
var AA$=F();
var YE=F(0);
function JM(b,c,d){return AO7(B(41),Fb(B(11),b),c,d);}
var ACQ=F(0);
var ACL=F(0);
function LE(b,c){var d,e,f,g;d=c.data;e=b.data.length;f=d.length;g=Dl(b,e+f|0);Eg(c,0,g,e,f);return g;}
function KU(b,c,d){Eg(b,c,d,0,d.data.length);return d;}
function Q1(b,c,d){var e;if(c>0)Eg(b,0,d,0,c);e=d.data.length;if(c<e)Eg(b,c+1|0,d,c,e-c|0);return d;}
function AAs(b,c,d,e){var f;if(c>0)Eg(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Eg(b,d,e,c,f-d|0);}return e;}
function FQ(b){var c;c=new VY;c.iA=b;return c;}
function LI(){var a=this;C.call(a);a.rM=null;a.qy=null;a.qt=null;a.ot=0;}
function AO7(a,b,c,d){var e=new LI();AN1(e,a,b,c,d);return e;}
function AN1(a,b,c,d,e){a.rM=b;a.qy=c;a.qt=d;a.ot=e;}
var Zm=F();
function AIm(b,c){return {style:b,weight:c};}
var BX=F(0);
function TQ(){C.call(this);this.te=null;}
function AEe(a,b){var c,d,e;c=a.te;d=0;while(d<b.length){e=b[d];(D8()).fonts.add(e);d=d+1|0;}c.ui=1;b=c.qE;if(b!==null)AAX(b);}
var TO=F();
function APO(a,b){$rt_globals.console.info("font load error "+b);}
var ACI=F();
var Z1=F();
function OW(b,c){var d,e,f;d=(D8()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(D8()).getElementById($rt_ustr(b)).appendChild(d);}
function YP(){return (D8()).createElement("canvas");}
function AMB(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AD9=F();
var M8=F();
function AMj(a,b){var c;c=new Bo;Bj(c,$rt_str(b.message));J(c);}
var V0=F();
function FA(b){return $rt_str(b);}
var YS=F();
function YI(b,c){var d,e,f,g;b=b.data;d=BM(c);e=d.data;f=Y(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ADs(b,c){var d,e,f,g;b=b.data;d=E9(c);e=d.data;f=Y(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function L7(b,c){var d,e,f,g;b=b.data;d=BC(c);e=d.data;f=Y(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dl(b,c){var d,e,f,g;d=b.data;e=UD(H8(Cn(b)),c);f=Y(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Zx(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B1(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B1(c,B(43));G(c,e[d]);d=d+1|0;}B1(c,B(44));return N(c);}
function ACd(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B1(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B1(c,B(43));T(c,e[d]);d=d+1|0;}B1(c,B(44));return N(c);}
function AOx(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B1(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B1(c,B(43));Fj(c,e[d]);d=d+1|0;}B1(c,B(44));return N(c);}
function ARe(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);B1(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B1(c,B(43));f=e[d];ZI(c,c.L,f);d=d+1|0;}B1(c,B(44));return N(c);}
function Hr(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BD;V(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Zd(b,c,d,e){var f,g;if(c>d){e=new BD;V(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ZX(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AUc;e=Q(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Y(j,h+f|0);l=h+(2*f|0)|0;m=Y(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.lO(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ABK(b,c){return TW(b,0,b.data.length,c);}
function TW(b,c,d,e){var f,g,h,i,j;f=BG(c,d);if(f>0){g=new BD;V(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var Ln=F();
var AUu=null;var AUv=null;function Bv(){if(AUu===null)AUu=ALL(AUw,0);return AUu;}
function Iu(){if(AUv===null)AUv=ALL(AUx,0);return AUv;}
function Eg(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=ACe(b)&&(e+f|0)<=ACe(d)){a:{b:{if(b!==d){g=H8(Cn(b));h=H8(Cn(d));if(g!==null&&h!==null){if(g===h)break b;if(!HO(g)&&!HO(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fK;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ABV(n.constructor,o)?1:0)){RG(b,c,d,e,j);b=new IH;V(b);J(b);}j=j+1|0;k=m;}RG(b,c,d,e,f);return;}if(!HO(g))break a;if(HO(h))break b;else break a;}b=new IH;V(b);J(b);}}RG(b,c,
d,e,f);return;}b=new IH;V(b);J(b);}b=new Bw;V(b);J(b);}d=new Gy;Bj(d,B(45));J(d);}
function RG(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function FC(){return Long_fromNumber(new Date().getTime());}
function ACi(){return AT_($rt_globals.performance.now()*1000000.0);}
var JL=F(0);
var AAf=F();
function AQ0(a,b){return a.vG(b);}
function AGi(a){return a.w6();}
var AAM=F();
var FL=F(0);
var SU=F();
var C7=F();
var AUy=null;var AUz=null;var AUA=null;var AUB=null;var AUC=null;var AUD=null;var AUE=null;var AUF=null;var AUG=null;var AUH=null;function WW(b){var c,d;c=new Bu;d=BM(1);d.data[0]=b;Hj(c,d);return c;}
function LX(b){return b>=65536&&b<=1114111?1:0;}
function CD(b){return (b&64512)!=55296?0:1;}
function C4(b){return (b&64512)!=56320?0:1;}
function L2(b){return !CD(b)&&!C4(b)?0:1;}
function Hi(b,c){return CD(b)&&C4(c)?1:0;}
function Es(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function H4(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function IG(b){return (56320|b&1023)&65535;}
function EV(b){return Gx(b)&65535;}
function Gx(b){if(AUB===null){if(AUE===null)AUE=ACc();AUB=AAx((AUE.value!==null?$rt_str(AUE.value):null));}return SA(AUB,b);}
function Ew(b){return Gu(b)&65535;}
function Gu(b){if(AUA===null){if(AUF===null)AUF=AC0();AUA=AAx((AUF.value!==null?$rt_str(AUF.value):null));}return SA(AUA,b);}
function SA(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BG(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function UL(b,c){if(c>=2&&c<=36){b=OO(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function OO(b){var c,d,e,f,g,h,i,j,k,l;if(AUz===null){if(AUG===null)AUG=AAB();c=(AUG.value!==null?$rt_str(AUG.value):null);d=AOh(Gp(c));e=JI(d);f=BC(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+M4(d)|0;j=j+M4(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AUz=f;}g=AUz.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BG(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function G_(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gm(b){var c;if(b<65536){c=BM(1);c.data[0]=b&65535;return c;}return AAH([H4(b),IG(b)]);}
function Ct(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&L2(b&65535))return 19;if(AUC===null){if(AUH===null)AUH=ADZ();d=(AUH.value!==null?$rt_str(AUH.value):null);e=Q(Ng,16384);f=e.data;g=E9(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=KC(L(d,l));if(m==64){l=l+1|0;m=KC(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Z(c,KC(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=KC(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AH9(k,k+i|0,ADs(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AH9(k,k+i|0,ADs(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AUC=Dl(e,j);}e=AUC.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.qS)o=p+1|0;else{c=d.oI;if(b>=c)return d.oW.data[b-c|0];c=p-1|0;}}return 0;}
function Jp(b){a:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Gh(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ct(b)!=16?0:1;}
function Ph(b){switch(Ct(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function QT(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Ph(b);}return 1;}
function Yz(){AUy=E($rt_charcls());AUD=Q(C7,128);}
function ACc(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AC0(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AAB(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ADZ(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Mo=F(0);
var Sz=F(0);
var Eh=F(0);
var ADb=F(0);
function D8(){return $rt_globals.window.document;}
var Gy=F(Bo);
function NF(){var a=this;C.call(a);a.oK=null;a.oL=null;a.oM=null;}
function ANm(a,b){var c,d,e;c=a.oK;d=a.oL;e=a.oM;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=d.se;b.qE=c;if(b.ui)AAX(c);}}
var ABI=F();
function ACe(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AUI());}return b.data.length;}
function UD(b,c){if(b===null){b=new Gy;V(b);J(b);}if(b===E($rt_voidcls())){b=new BD;V(b);J(b);}if(c>=0)return AQf(b.fK,c);b=new X3;V(b);J(b);}
function AQf(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var AAK=F();
function Fu(){return AQ1();}
function AQ1(){return Math.random();}
function Y(b,c){if(b<c)c=b;return c;}
function Ba(b,c){if(b>c)c=b;return c;}
function I1(b){if(b<=0)b= -b|0;return b;}
var Bw=F(Bo);
var IH=F(Bo);
var O8=F(0);
var Q$=F(0);
var QY=F(0);
var TB=F(0);
var W4=F(0);
var UM=F(0);
var Ot=F(0);
var YD=F();
function AKR(a,b,c){a.DH($rt_str(b),Li(c,"handleEvent"));}
function ALe(a,b,c){a.AT($rt_str(b),Li(c,"handleEvent"));}
function AFm(a,b){return a.vG(b);}
function AMo(a,b,c,d){a.za($rt_str(b),Li(c,"handleEvent"),d?1:0);}
function AP8(a,b){return !!a.DM(b);}
function AGl(a){return a.w6();}
function AEE(a,b,c,d){a.Cn($rt_str(b),Li(c,"handleEvent"),d?1:0);}
var BD=F(Bo);
var X3=F(Bo);
var G9=F(Bw);
var ZM=F();
function AAT(){return "ping";}
var Os=F(0);
function SI(){var a=this;C.call(a);a.pI=null;a.rq=null;a.lV=null;a.mu=null;a.dC=null;a.tn=null;a.mB=null;a.k8=null;a.fX=null;a.h3=0;a.wm=0;a.qM=null;a.fe=null;a.p$=null;a.lx=null;a.sh=0;}
function ACx(a){a.dC.focus();}
function Nq(a,b){var c;c=D8();b=$rt_ustr(b);c.title=b;}
function Z5(a){var b,c,d;b=new Mp;c=a.fX;d=a.k8.cl;b.bk=c;b.l=d;b.bO=a;return b;}
function Tf(a){a.wm=$rt_globals.requestAnimationFrame(Bm(a.rq,"onAnimationFrame"));}
function F1(a){a.h3=1;}
function Te(a,b,c){var d,e;a.k8.dv=BW(b,c);d=a.dC;e=b;d.width=e;d=a.dC;e=c;d.height=e;d=a.fX;Bf(d.dG,b,c);e=d.bD;d=d.dG;b=d.b;c=d.a;e.viewport(0,0,b,c);a.fe.cj(a.fX.dG,KD(a));a.fe.bK();}
function Go(a,b){var c,d,e;c=a.qM;d=a.dC;if(C6(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.qM=b;}
function Jn(a){return $rt_globals.performance.now()/1000.0;}
function KD(a){return $rt_globals.window.devicePixelRatio;}
function VZ(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADD(b,1);else{c=new WJ;d=$rt_globals.window.showDirectoryPicker();e=new WI;e.oN=b;e.oO=c;d.then(Bm(e,"f"),Bm(c,"f"));}}
function LN(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADD(b,0);else{c=new Xe;d=$rt_globals.window.showOpenFilePicker();e=new Xd;e.pG=b;e.pF=c;d.then(Bm(e,"f"),Bm(c,"f"));}}
function CO(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.sh+1|0;a.sh=e;f=a.lx;g=FX(e);f.ht=LZ(f,f.ht,g);g=UT(f,g);Mq(g,b);Mq(g,b);f.ji=f.ji+1|0;b=a.p$;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bu)f=$rt_ustr(c);else if(IB(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(IB(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(IB(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof K3)){b=new BD;c=H1(Cn(c));f
=new M;O(f);G(G(f,B(46)),c);Bj(b,N(f));J(b);}c=c;f=c.gv;if(f===null)f=c.eZ;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function QI(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new Qu;e.mH=b;b=AD6(c);d.then(Bm(e,"f"),Bm(b,"f"));}
function Ui(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.pI;b=(Gp(b)).data;f=f.decode(b);b=e.writeText(f);e=new UB;e.rY=c;c=AD6(d);b.then(Bm(e,"f"),Bm(c,"f"));}
function Xs(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AD6(b){var c;c=new MI;c.r$=b;return c;}
var Cb=F(0);
var RK=F();
function AA_(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(!Bq(B(47),c))d=(AO0(I(c)<=0?B(31):Dk(c,1))).b$(b);else{d=new M7;EP(d,b);b=$rt_globals.fetch("test.wasm");e=new Ne;b=b.then(Bm(e,"f"));e=new Nd;b=b.then(Bm(e,"f"));e=new Nc;f=new Nb;b.then(Bm(e,"f"),Bm(f,"f"));}return d;}
var Bh=F(0);
var AA5=F();
var AAG=F();
var Q2=F(0);
function VE(){C.call(this);this.on=null;}
function AJs(a,b){var c,d;c=b;b=a.on;if(!(!b.fe.cK(c/1000.0)&&!b.h3)){d=b.fX.dG;if(Z(d.b,d.a)){b.h3=0;b.fe.bK();}}Tf(b);}
function Vx(){C.call(this);this.uz=null;}
function Dh(a){F1(a.uz);}
var PW=F(0);
function Vy(){C.call(this);this.rf=null;}
function AHB(a,b,c){var d,e,f,g;c=a.rf;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dC){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=KD(c);Te(c,Hc(f.width*g),Hc(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Te(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var ADj=F();
function AOK(b,c){ANL(b,c,AEO());}
function AEO(){return {box:'device-pixel-content-box'};}
function ANL(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cl=F(0);
function Vv(){C.call(this);this.nM=null;}
function ANu(a,b){b=a.nM;b.fe.cj(b.fX.dG,KD(b));b.fe.bK();}
var KY=F(0);
function EA(){C.call(this);this.j5=null;}
var Ek=F(0);
var Xr=F(0);
var M1=F(0);
function OU(){var a=this;EA.call(a);a.ht=null;a.je=null;a.xk=null;a.ji=0;}
function UT(a,b){var c,d;c=a.ht;while(true){if(c===null)return null;d=Jq(a.je,b,c.iG);if(!d)break;c=d>=0?c.bY:c.bL;}return c;}
function LZ(a,b,c){var d,e;if(b===null){b=new Jm;d=null;b.iG=c;b.h6=d;b.fi=1;b.fr=1;return b;}e=Jq(a.je,c,b.iG);if(!e)return b;if(e>=0)b.bY=LZ(a,b.bY,c);else b.bL=LZ(a,b.bL,c);Ei(b);return JH(b);}
function J7(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Jq(a.je,c,b.iG);if(d<0)b.bL=J7(a,b.bL,c);else if(d>0)b.bY=J7(a,b.bY,c);else{e=b.bY;if(e===null)return b.bL;f=b.bL;g=Q(Jm,e.fi).data;h=0;while(true){b=e.bL;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bY;while(h>0){h=h+(-1)|0;j=g[h];j.bL=b;Ei(j);b=JH(j);}e.bY=b;e.bL=f;Ei(e);b=e;}Ei(b);return JH(b);}
function Vw(){C.call(this);this.tz=null;}
function AOH(a,b){var c,d,e,f,g,h,i,j,k;c=a.tz.lx;b=b.data;if(!(b===AAT()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BD;V(b);J(b);}if(b.length<1){b=new BD;V(b);J(b);}d=FX(b[0]);e=UT(c,d);if(e===null)c=null;else{c.ht=J7(c,c.ht,d);c.ji=c.ji+1|0;c=e.h6;}f=Q(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=FA(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new SQ;AC1(e);e.g9=k;}else e=(k instanceof $rt_globals.File?1:0)?ABN(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:ABN(k,null);g[h]=e;h=j;}c.n(f);}}
function Pf(){var a=this;C.call(a);a.cl=null;a.gS=null;a.wF=null;a.dv=null;}
function MY(){return (D8()).activeElement;}
function CS(a,b,c,d){b.addEventListener($rt_ustr(c),Bm(d,"handleEvent"));return WS(a,b,c,d);}
function AB3(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bm(d,"handleEvent"),!!e);return WS(a,b,c,d);}
function WS(a,b,c,d){var e;e=new PS;e.vs=b;e.vx=c;e.vv=d;return e;}
function TR(a,b){var c;c=new UW;c.ut=b;return c;}
function EB(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gS.getBoundingClientRect();e=BW(Hc((b.clientX-d.left)*c),Hc((b.clientY-d.top)*c));f=new Bi;g=a.dv;f.b=g.b;f.a=g.a;d=new Ml;Uj(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.h=e;d.va=f;return d;}
function XS(a,b,c){var d,e,f,g;d=new ON;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Uj(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.jC=0;d.dE=e;d.bg=f;d.hd=c;d.rs=g;return d;}
function DL(a,b){b.stopPropagation();b.preventDefault();}
function AAc(a,b){var c;c=new Xo;c.o7=b;b.onpointerdown=Bm(c,"f");c=new Xp;c.nO=b;b.onpointerup=Bm(c,"f");}
function Le(){var a=this;C.call(a);a.qK=null;a.cB=null;a.bD=null;a.sA=null;a.v4=0;a.w2=0;a.jl=null;a.xB=null;a.xh=null;a.wk=null;a.f1=null;a.hc=null;a.xp=null;a.ow=null;a.dG=null;a.ub=null;a.k1=0;a.jy=0;a.lG=0;a.lp=0;a.hS=0;a.lD=null;}
function Hh(a,b,c){return GN(a,b,c,400,0);}
function CK(a,b,c){return Mx(a.qK,b,c);}
function Gw(a,b){var c,d,e,f,g;c=a.bD;d=b.bl;e=b.bz;f=b.bh;g=b.bA;c.clearColor(d,e,f,g);a.bD.clear(16384);}
function CJ(a,b){var c;if(b==a.jy)return b;if(!b)a.bD.disable(3042);else{a.bD.enable(3042);a.bD.blendFuncSeparate(770,771,1,1);}c=a.jy;a.jy=b;return c;}
function Lw(a,b,c,d){var e,f,g;a.lp=1;a.hS=1;e=a.lD;f=d.b;g=d.a;e.qV=b;e.qW=c;e.qU=f;e.qT=g;Uk(a);}
function Iw(a){a.lp=0;a.hS=0;Uk(a);}
function Uk(a){var b,c,d,e,f,g;b=a.lG;c=a.lp;if(b!=c){a.lG=c;if(!c)a.bD.disable(3089);else a.bD.enable(3089);}if(a.lG&&a.hS){a.hS=0;d=a.bD;e=a.lD;b=e.qV;c=a.dG.a-e.qW|0;f=e.qT;c=c-f|0;g=e.qU;d.scissor(b,c,g,f);}}
function KV(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.ow;c=a.k1;d=b.gd.r4;e=b.d8;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.d8;h=b.my;e.bindBuffer(34962,h);i=b.gd.l0.data;g=i.length;j=0;while(j<g){k=i[j];l=b.d8;m=k.gZ;n=k.eS;o=b.gd.kf*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.eS|0;j=j+1|0;}a:{e=b.uw;if(e!==null){c=0;b.d8.bindBuffer(34962,e);i=b.gd.qI.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.d8;j=e.gZ;p=e.eS;m=e.oF;n=b.gd.o1;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.eS|0;g=g+1|0;}}}q=b.tR;if(q===null){c=b.rx;if(c>0)b.d8.drawArrays(4,0,c);}else{b.d8.bindBuffer(34963,q);k=b.d8;g=b.t6;k.drawElements(4,g,5123,0);}a.k1=d;}
function By(a,b,c,d,e){K7(a,a.jl);L$(a.jl,a.bD,b,c,d,a.dG);d=a.jl;Ib(a.bD,d.ty,e);KV(a);}
function EG(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;K7(a,a.f1);L$(a.f1,a.bD,b,c,d,a.dG);Uf(a.f1,a.bD,f);d=a.f1;j=a.bD;f=f.fm;b=f.b;c=f.a;k=e.bl;l=b;m=k/l;k=e.bz;n=c;o=k/n;k=e.bh/l;l=e.bA/n;d=d.s_;j.uniform4f(d,m,o,k,l);d=a.f1;e=a.bD;Ib(e,d.pe,g);Ib(e,d.m2,h);d=d.oa;e.uniform2f(d,i,0.0);KV(a);}
function CU(a){var b,c;b=new Jl;c=a.sA;b.fm=new Bi;b.dX=c;b.eM=c.dm.createTexture();AUJ=AUJ+1|0;return b;}
function NL(a,b){W6(a.bD,b);}
function K7(a,b){var c,d;if(b!==a.ub){c=a.bD;d=b.cn;c.useProgram(d);a.ub=b;}}
function ACP(){var a=this;Le.call(a);a.wJ=null;a.xi=null;}
function ASn(a,b){var c=new ACP();AJO(c,a,b);return c;}
function AJO(a,b,c){var d,e,f,g,h,i,j,k,l;d=new Un;a.dG=new Bi;a.k1=0;a.lD=new WC;a.qK=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(48)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bD=b;a.cB=Mx(d,4,4);g=AEt(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BM(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;k=new PU;Y3();f=AUK;k.d8=b;k.gd=f;k.rx=h.length/f.kf|0;k.t6
=j.length;f=b.createBuffer();k.my=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);k.uw=null;f=b.createBuffer();k.tR=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}d=null;b.bindBuffer(34962,d);f=null;b.bindBuffer(34963,f);a.ow=k;a.w2=KB(e,B(49));f=new PV;f.dm=b;a.sA=f;l=b.getParameter(3379);a.v4=l;f=new M;O(f);T(G(f,B(50)),l);$rt_globals.console.info($rt_ustr(N(f)));g=Q(D9,6);i=g.data;d=new V_;LC(d,b,B(51),B(52),AUK);f=d.cn;d.ty=b.getUniformLocation(f,"uColor");a.jl=d;i[0]
=d;f=ART(b,B(53));a.xB=f;i[1]=f;f=new QE;LC(f,b,B(51),B(54),AUK);a.xh=f;i[2]=f;f=ATa(b);a.wk=f;i[3]=f;f=ASo(b);a.f1=f;i[4]=f;f=ATl(b);a.hc=f;i[5]=f;a.xp=g;W6(b,B(55));a.xi=new Ul;a.wJ=c;}
function GN(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=a.cB;g=ZB(b,c,d,e);I_(f,g);h=f.bn.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Eo(f,B(56));m=Eo(f,B(57));h=new K4;h.lL=b;h.vH=c;n=c|0;if(n!==c){b=new M;O(b);Fj(G(b,B(58)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.oD=n;h.vP=d;h.wj=e;h.dt=i;h.ee=j;h.vE=l;h.ly=k;h.mE=g;h.qD=Dg(i);h.xa=Dg(h.ee);d=m*32.0|0;n=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;a:{h.vM=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(59);}h.vr=b;return h;}
function CC(){C.call(this);this.bj=null;}
function EP(a,b){a.bj=b;}
function AQH(a,b){return 0;}
var I4=F();
var AUc=null;function Jq(a,b,c){return b.jk(c);}
function ABe(){AUc=new I4;}
function ZS(){var a=this;C.call(a);a.b3=null;a.lX=null;a.bt=null;a.df=null;a.eh=null;a.fn=null;a.fR=null;a.jd=null;a.jU=null;a.cZ=null;a.hb=null;a.nJ=0;}
function ASY(a){var b=new ZS();AM0(b,a);return b;}
function AM0(a,b){a.b3=CH(Q(Cs,0));a.lX=CH(Q(Cs,0));a.bt=CH(Q(Cx,0));a.df=CH(Q(DE,0));a.eh=CH(Q(Ev,0));a.fn=CH(Q(EH,0));a.fR=CH(Q(E8,0));a.jd=CH(Q(Bh,0));a.jU=CH(Q(Bh,0));a.cZ=b;}
function TY(a,b){var c,d,e,f;Dh(a.cZ);c=(Co(!b.hd?a.lX:a.b3)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bB(b);if(f)break;if(b.jC)break;e=e+1|0;}return f;}
function QF(a,b,c){var d,e,f;Dh(a.cZ);d=(Co(a.fn)).data;e=d.length;f=0;while(f<e){if(d[f].gg(b,c))return 1;f=f+1|0;}return 0;}
function Wq(){C.call(this);this.mS=null;}
function AMW(a,b){var c;c=a.mS;if(TY(c.cl,XS(c,b,1)))DL(c,b);}
function Wr(){C.call(this);this.rW=null;}
function AM_(a,b){var c;c=a.rW;if(TY(c.cl,XS(c,b,0)))DL(c,b);}
function Ws(){C.call(this);this.n7=null;}
function ALv(a,b){var c,d,e,f,g,h,i;c=a.n7;if(c.dv!==null){a:{b:{d=EB(c,b);e=c.cl;Dh(e.cZ);f=e.hb;if(f!==null)f.n(d);else{g=(Co(e.bt)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bR(d))break a;i=i+1|0;}}}}DL(c,b);}}
function Wt(){C.call(this);this.uu=null;}
function AKT(a,b){var c,d,e,f,g,h;c=a.uu;b.button;if(c.dv!==null)a:{d=EB(c,b);c=c.cl;e=b.button;Dh(c.cZ);if(c.hb===null){f=(Co(c.bt)).data;g=f.length;h=0;while(h<g){b=f[h].b5(d,e);if(b!==null){c.hb=b;c.nJ=e;break a;}h=h+1|0;}}}}
function Wu(){C.call(this);this.q5=null;}
function ALi(a,b){var c,d,e,f,g,h,i;c=a.q5;b.button;if(c.dv!==null){d=EB(c,b);e=c.cl;f=b.button;Dh(e.cZ);if(f==e.nJ&&e.hb!==null)e.hb=null;g=(Co(e.bt)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cL(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DL(c,b);}}
function Wv(){C.call(this);this.nl=null;}
function ANI(a,b){var c,d,e,f,g,h,i,j,k;c=a.nl;if(c.dv!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cl;f=EB(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dh(e.cZ);i=(Co(e.df)).data;j=i.length;k=0;b:{while(k<j){if(i[k].cW(f,d,h))break b;k=k+1|0;}}DL(c,b);}}
function Ww(){C.call(this);this.uL=null;}
function AI8(a,b){var c,d,e,f,g,h,i,j;c=a.uL;if(c.dv!==null){d=EB(c,b);e=c.cl;f=b.button;g=b.detail;Dh(e.cZ);h=(Co(e.bt)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cp(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DL(c,b);}}
function Wx(){C.call(this);this.ri=null;}
function AQ7(a,b){var c,d,e,f,g,h,i;c=a.ri;if(c.dv!==null){d=EB(c,b);e=c.cl;Dh(e.cZ);f=(Co(e.eh)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bB(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DL(c,b);}}
function Wy(){C.call(this);this.nw=null;}
function AIk(a,b){var c,d,e;b=a.nw.cl;c=(Co(b.jU)).data;d=c.length;e=0;while(e<d){c[e].p();e=e+1|0;}Dh(b.cZ);}
function Wz(){C.call(this);this.tJ=null;}
function AOQ(a,b){var c,d,e;b=a.tJ.cl;c=(Co(b.jd)).data;d=c.length;e=0;while(e<d){c[e].p();e=e+1|0;}Dh(b.cZ);}
function XN(){C.call(this);this.s$=null;}
function AQI(a,b){var c;c=a.s$;if(c.dv!==null)EB(c,b);}
function XO(){C.call(this);this.sa=null;}
function AK8(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.sa;if(MY()===c.gS){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Co(c.cl.fR)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dj();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cl.cZ;m=new Ny;m.tT=k;m.tU=l;g.getAsString(Bm(m,"accept"));DL(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(60)),k),B(61)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function XP(){C.call(this);this.md=null;}
function ALy(a,b){var c;c=a.md;if(MY()===c.gS&&QF(c.cl,TR(c,b),0))DL(c,b);}
function XQ(){C.call(this);this.t2=null;}
function ANo(a,b){var c;c=a.t2;if(MY()===c.gS&&QF(c.cl,TR(c,b),1))DL(c,b);}
var Ua=F(0);
var Un=F();
function Mx(a,b,c){var d,e,f;d=new Ri;AUt=AUt+1|0;d.lj=b;d.kw=c;e=(D8()).createElement("canvas");d.jj=e;f=b;e.width=f;e=d.jj;f=c;e.height=f;d.bn=d.jj.getContext("2d");return d;}
var Ul=F();
function AJ$(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Mp(){var a=this;C.call(a);a.bk=null;a.l=null;a.bO=null;}
function ADw(){var a=this;C.call(a);a.gW=null;a.im=null;a.gM=0;}
function CH(a){var b=new ADw();AI2(b,a);return b;}
function AI2(a,b){a.gW=b;}
function W(a,b){var c,d,e;c=a.gM;d=a.gW;if(c==d.data.length)a.gW=Dl(d,c+4|0);d=a.gW.data;e=a.gM;a.gM=e+1|0;d[e]=b;a.im=null;}
function Co(a){var b;b=a.im;if(!(b!==null&&b.data.length==a.gM))a.im=Dl(a.gW,a.gM);return a.im;}
var IL=F(0);
var Cs=F(0);
var Cx=F(0);
function AKd(a,b){return 0;}
function APP(a,b,c){return null;}
function AE6(a,b,c){return 0;}
function ANH(a,b,c,d){return 0;}
var DE=F(0);
var Ev=F(0);
var EH=F(0);
var EM=F(0);
var E8=F(0);
function P5(){C.call(this);this.v0=null;}
function Bi(){var a=this;C.call(a);a.b=0;a.a=0;}
function BW(a,b){var c=new Bi();ZL(c,a,b);return c;}
function ZL(a,b,c){a.b=b;a.a=c;}
function CA(a,b){a.b=b.b;a.a=b.a;}
function Bf(a,b,c){a.b=b;a.a=c;}
function X8(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);T(G(T(G(d,B(62)),b),B(63)),c);return N(d);}
function K6(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function WC(){var a=this;C.call(a);a.qV=0;a.qW=0;a.qU=0;a.qT=0;}
var ACO=F();
var Y6=F(0);
function PV(){C.call(this);this.dm=null;}
function LA(){var a=this;C.call(a);a.cn=null;a.xc=null;}
function ABM(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(64):B(65);d=$rt_str(b.getShaderInfoLog(e));g=new M;O(g);G(G(g,f),d);f=N(g);b.deleteShader(e);Bt(Bv(),f);b=new Bo;Bj(b,f);J(b);}
function D9(){var a=this;LA.call(a);a.nv=null;a.pb=null;a.lb=null;}
function AUL(a,b,c,d){var e=new D9();LC(e,a,b,c,d);return e;}
function LC(a,b,c,d,e){var f,g,h,i,j,k;a.xc=e;f=ABM(b,35633,c);d=ABM(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.cn=g;h=e.rJ.data;i=h.length;j=0;while(j<i){c=h[j];d=a.cn;k=c.gZ;c=c.pu;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.cn;b.linkProgram(c);if(b.getProgramParameter(c,35714)){W6(b,B(66));a.lb=new Bi;c=a.cn;a.nv=b.getUniformLocation(c,"uResolution");c=a.cn;a.pb=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bo;c=new M;O(c);G(G(c,B(67)),d);Bj(b,N(c));J(b);}
function ZU(a,b,c){var d,e,f;if(!K6(a.lb,c)){CA(a.lb,c);d=a.nv;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function L$(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.pb;b.uniform4f(e,i,l,h,j);ZU(a,b,f);}
function V_(){D9.call(this);this.ty=null;}
function Ez(){D9.call(this);this.q1=null;}
function ART(a,b){var c=new Ez();TV(c,a,b);return c;}
function AUM(a,b,c){var d=new Ez();TZ(d,a,b,c);return d;}
function TV(a,b,c){TZ(a,b,B(51),c);}
function TZ(a,b,c,d){Y3();LC(a,b,c,d,AUK);c=a.cn;a.q1=b.getUniformLocation(c,"sDiffuse");}
function Uf(a,b,c){var d;d=a.q1;b.uniform1i(d,0);b.activeTexture(33984);c=c.eM;b.bindTexture(3553,c);}
var QE=F(D9);
function ACu(){Ez.call(this);this.v9=null;}
function ATa(a){var b=new ACu();AIr(b,a);return b;}
function AIr(a,b){var c;TV(a,b,B(68));c=a.cn;a.v9=b.getUniformLocation(c,"uContrast");}
function AB5(){var a=this;Ez.call(a);a.s_=null;a.pe=null;a.m2=null;a.oa=null;}
function ASo(a){var b=new AB5();AND(b,a);return b;}
function AND(a,b){var c;TZ(a,b,B(69),B(70));c=a.cn;a.s_=b.getUniformLocation(c,"uTexTransform");c=a.cn;a.pe=b.getUniformLocation(c,"uColor");c=a.cn;a.m2=b.getUniformLocation(c,"uBgColor");c=a.cn;a.oa=b.getUniformLocation(c,"uContrast");}
function Zn(){var a=this;Ez.call(a);a.ux=null;a.uv=null;a.pR=null;}
function ATl(a){var b=new Zn();AHR(b,a);return b;}
function AHR(a,b){var c,d;TV(a,b,B(71));c=a.cn;a.ux=b.getUniformLocation(c,"uColorB");d=a.cn;a.uv=b.getUniformLocation(d,"uColorF");d=a.cn;a.pR=b.getUniformLocation(d,"uContrast");}
var RV=F(0);
var AD7=F(0);
function Ib(b,c,d){var e,f,g,h;e=d.bl;f=d.bz;g=d.bh;h=d.bA;b.uniform4f(c,e,f,g,h);}
function W6(b,c){var d,e;d=b.getError();if(d){b=Bv();e=new M;O(e);T(G(e,c),d);Bt(b,N(e));}}
function PS(){var a=this;C.call(a);a.vs=null;a.vx=null;a.vv=null;}
function PU(){var a=this;C.call(a);a.d8=null;a.gd=null;a.my=null;a.uw=null;a.tR=null;a.rx=0;a.t6=0;}
function Cj(){var a=this;C.call(a);a.vp=null;a.cY=0;}
function C_(a,b,c){a.vp=b;a.cY=c;}
function GI(){var a=this;Cj.call(a);a.rJ=null;a.l0=null;a.qI=null;a.kf=0;a.o1=0;a.r4=0;}
var AUK=null;var AUN=null;function Y3(){Y3=Bl(GI);AJF();}
function AJF(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new GI;c=Q(DV,2);d=c.data;AP1();d[0]=AUO;d[1]=AUP;Y3();C_(b,B(72),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];YC();switch(AUQ.data[l.ls.cY]){case 1:f=f+l.eS|0;h=h+1|0;break a;case 2:e=e+l.eS|0;g=g+1|0;break a;default:}}i=i|1<<l.gZ;k=k+1|0;}b.rJ=c;b.kf=e;b.o1=f;b.r4=i;c=Q(DV,g);m=c.data;b.l0=c;c=Q(DV,h);n=c.data;b.qI=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];YC();switch(AUQ.data[l.ls.cY]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}AUK=b;c=Q(GI,1);c.data[0]=b;AUN=c;}
var L9=F(0);
var Th=F(0);
var UC=F(0);
var Gj=F();
function Jj(){Gj.call(this);this.u1=null;}
function AAk(){var a=this;Jj.call(a);a.wZ=0;a.kr=0;a.ig=null;a.jY=null;a.ss=null;}
function ALL(a,b){var c=new AAk();APJ(c,a,b);return c;}
function APJ(a,b,c){a.u1=b;b=new M;O(b);a.ig=b;a.jY=BM(32);a.wZ=c;Z$();a.ss=AUR;}
function Tw(a,b,c,d){var e,$$je;e=a.u1;if(e===null)a.kr=1;if(!(a.kr?0:1))return;a:{try{e.jN(b,c,d);break a;}catch($$e){$$je=Ef($$e);if($$je instanceof In){}else{throw $$e;}}a.kr=1;}}
function NU(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AA3(b,c,d-c|0);e=E9(Ba(16,Y(e.length,1024)));g=AAS(e,0,e.data.length);h=a.ss;i=new Pc;b=E9(1);j=b.data;j[0]=63;G6();k=AUS;i.le=k;i.kx=k;c=j.length;if(c&&c>=i.l1){i.vk=h;i.pp=b.eF();i.wS=2.0;i.l1=4.0;i.oE=BM(512);i.nj=E9(512);k=AUT;if(k===null){i=new BD;Bj(i,B(73));J(i);}i.le=k;i.kx=k;a:while(true){if(i.ib==3){f=new DY;V(f);J(f);}i.ib=2;b:{while(true){try{k=YT(i,f,g);}catch($$e){$$je=Ef($$e);if($$je instanceof Bo){f=$$je;break a;}else{throw $$e;}}if(Ia(k))
{d=B6(f);if(d<=0)break b;k=DZ(d);}else if(G3(k))break;h=!LU(k)?i.le:i.kx;c:{if(h!==AUT){if(h===AUU)break c;else break b;}d=B6(g);b=i.pp;l=b.data.length;if(d<l){k=AUV;break b;}WU(g,b,0,l);}ED(f,f.V+J9(k)|0);}}l=G3(k);Tw(a,e,0,g.V);NS(g);if(!l){while(true){d=i.ib;if(d!=2&&d!=4){f=new DY;V(f);J(f);}f=AUW;if(f===f)i.ib=3;l=G3(f);Tw(a,e,0,g.V);NS(g);if(!l)break;}return;}}J(AG5(f));}i=new BD;Bj(i,B(74));J(i);}
function Bt(a,b){var c,d,e,f,g,h,i,j;BA(B1(a.ig,b),10);b=a.ig;c=b.L;d=a.jY;if(c>d.data.length)d=BM(c);e=0;f=0;if(e>c){b=new Bw;Bj(b,B(75));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.A.data;j=e+1|0;g[f]=i[e];f=h;e=j;}NU(a,d,0,c);a.ig.L=0;}
function F9(){Gj.call(this);this.wK=null;}
function XW(a){a.wK=E9(1);}
var Lm=F(F9);
var AUw=null;function AJ2(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function ACh(){var b;b=new Lm;XW(b);AUw=b;}
function DV(){var a=this;Cj.call(a);a.pu=null;a.ls=null;a.eS=0;a.oF=0;a.gZ=0;}
var AUO=null;var AUP=null;var AUX=null;function AP1(){AP1=Bl(DV);AIP();}
function ASA(a,b,c,d,e,f,g){var h=new DV();V3(h,a,b,c,d,e,f,g);return h;}
function V3(a,b,c,d,e,f,g,h){AP1();C_(a,b,c);a.pu=d;a.ls=e;a.eS=f;a.oF=g;a.gZ=h;}
function AIP(){var b;b=new DV;ABv();V3(b,B(76),0,B(77),AUY,2,0,0);AUO=b;b=ASA(B(78),1,B(79),AUY,2,0,1);AUP=b;AUX=H(DV,[AUO,b]);}
function Ja(){var a=this;C.call(a);a.u_=null;a.wa=null;}
function ACA(b){var c,d;if(Fo(b))J(AAe(b));if(!ACD(L(b,0)))J(AAe(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ACD(d))break a;else J(AAe(b));}}c=c+1|0;}}
function ACD(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Mb=F(Ja);
var AUR=null;function Z$(){Z$=Bl(Mb);AHO();}
function ACS(a){var b,c;b=new Tx;b.eP=B(80);G6();c=AUS;b.gF=c;b.lm=c;b.v2=a;b.l_=0.3333333432674408;b.wl=0.5;b.np=E9(512);b.rV=BM(512);return b;}
function AHO(){var b,c,d,e,f;b=new Mb;Z$();c=Q(Bu,0);d=c.data;ACA(B(81));e=d.length;f=0;while(f<e){ACA(d[f]);f=f+1|0;}b.u_=B(81);b.wa=c.eF();AUR=b;}
var Km=F();
var AUZ=null;var AUQ=null;function YC(){YC=Bl(Km);AMM();}
function AMM(){var b,c;ABv();b=BC((AU0.eF()).data.length);c=b.data;AUQ=b;c[AU1.cY]=1;c[AUY.cY]=2;ABx();c=BC((AU2.eF()).data.length);b=c.data;AUZ=c;b[AU3.cY]=1;b[AU4.cY]=2;}
function OZ(){var a=this;C.call(a);a.fh=null;a.lQ=null;a.jA=null;a.sd=null;a.o0=null;a.ph=null;}
function AAp(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.fh,b,c));}
function MR(a,b){var c,d,e,f,g,h,i,$$je;c=new Bu;d=b;while(a.lQ[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.fh,b,d));f=e.data;EL();d=f.length;Z$();g=AUR;h=AAS(e,0,d);a:{try{i=ACS(g);G6();g=Ze(ABQ(ADn(i,AUT),AUT),h);break a;}catch($$e){$$je=Ef($$e);if($$je instanceof FK){g=$$je;}else{throw $$e;}}h=new W0;h.iW=1;h.jg=1;h.ha=B(82);h.ky=g;J(h);}if(!g.V&&g.dp==g.lN)c.bX=g.gY;else{f=BM(B6(g));e=f.data;c.bX=f;No(g,f,0,e.length);}return c;}
function M0(a,b){var c,d,e;c=new Bu;d=b>>>1|0;e=d;while(a.jA[e]){e=e+1|0;}d=e-d|0;Hj(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.fh,b,d)));return c;}
var GM=F(Cj);
var AU1=null;var AUY=null;var AU0=null;function ABv(){ABv=Bl(GM);AHh();}
function AHG(a,b){var c=new GM();ACT(c,a,b);return c;}
function ACT(a,b,c){ABv();C_(a,b,c);}
function AHh(){var b;AU1=AHG(B(83),0);b=AHG(B(84),1);AUY=b;AU0=H(GM,[AU1,b]);}
var Gd=F(Cj);
var AU3=null;var AU4=null;var AU2=null;function ABx(){ABx=Bl(Gd);AHW();}
function ARb(a,b){var c=new Gd();Y_(c,a,b);return c;}
function Y_(a,b,c){ABx();C_(a,b,c);}
function AHW(){var b;AU3=ARb(B(85),0);b=ARb(B(86),1);AU4=b;AU2=H(Gd,[AU3,b]);}
var VF=F(D1);
function ACH(){BD.call(this);this.vo=null;}
function AAe(a){var b=new ACH();APg(b,a);return b;}
function APg(a,b){V(a);a.vo=b;}
var Ma=F(0);
function Xo(){C.call(this);this.o7=null;}
function AOj(a,b){a.o7.setPointerCapture(b.pointerId);}
function Xp(){C.call(this);this.nO=null;}
function AFT(a,b){a.nO.releasePointerCapture(b.pointerId);}
function GX(){var a=this;C.call(a);a.lN=0;a.V=0;a.dp=0;a.g8=0;}
function V1(a,b){a.g8=(-1);a.lN=b;a.dp=b;}
function ED(a,b){var c,d,e;if(b>=0&&b<=a.dp){a.V=b;if(b<a.g8)a.g8=0;return a;}c=new BD;d=a.dp;e=new M;O(e);BA(T(G(T(G(e,B(87)),b),B(88)),d),93);Bj(c,N(e));J(c);}
function B6(a){return a.dp-a.V|0;}
function DM(a){return a.V>=a.dp?0:1;}
var Sc=F(0);
var K5=F(GX);
function ADO(b){var c,d;if(b>=0)return ANb(0,b,BM(b),0,b,0);c=new BD;d=new M;O(d);T(G(d,B(89)),b);Bj(c,N(d));J(c);}
function AA3(b,c,d){return ANb(0,b.data.length,b,c,c+d|0,0);}
function No(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bw;i=new M;O(i);T(G(T(G(i,B(90)),g),B(91)),f);Bj(h,N(i));J(h);}if(B6(a)<d){j=new LM;V(j);J(j);}if(d<0){j=new Bw;k=new M;O(k);G(T(G(k,B(92)),d),B(93));Bj(j,N(k));J(j);}g=a.V;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.gY.data[m+a.lA|0];l=l+1|0;c=n;m=o;}a.V=g+d|0;return a;}}b=b.data;j=new Bw;d=b.length;k=new M;O(k);BA(T(G(T(G(k,B(94)),c),B(88)),d),41);Bj(j,N(k));J(j);}
function J5(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.lR){b=new IX;V(b);J(b);}e=d-c|0;if(B6(a)<e){b=new HS;V(b);J(b);}if(c>I(b)){f=new Bw;d=I(b);b=new M;O(b);BA(T(G(T(G(b,B(95)),c),B(88)),d),41);Bj(f,N(b));J(f);}if(d>I(b)){f=new Bw;c=I(b);b=new M;O(b);T(G(T(G(b,B(96)),d),B(97)),c);Bj(f,N(b));J(f);}if(c>d){b=new Bw;f=new M;O(f);T(G(T(G(f,B(95)),c),B(98)),d);Bj(b,N(f));J(b);}g=a.V;while(c<d){h=g+1|0;i=c+1|0;Sk(a,g,L(b,c));g=h;c=i;}a.V=a.V+e|0;return a;}
function JN(){var a=this;GX.call(a);a.kq=0;a.k6=null;a.ww=null;}
function AAS(b,c,d){var e,f,g;e=b.data;f=new WT;g=e.length;d=c+d|0;V1(f,g);AJL();f.ww=AU5;f.kq=0;f.k6=b;f.V=c;f.dp=d;f.wB=0;f.ms=0;return f;}
function WU(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.ms){e=new IX;V(e);J(e);}if(B6(a)<d){e=new HS;V(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bw;j=new M;O(j);T(G(T(G(j,B(99)),h),B(91)),g);Bj(i,N(j));J(i);}if(d<0){e=new Bw;i=new M;O(i);G(T(G(i,B(92)),d),B(93));Bj(e,N(i));J(e);}h=a.V;k=h+a.kq|0;l=0;while(l<d){b=a.k6.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.V=h+d|0;return a;}}b=b.data;e=new Bw;d=b.length;i=new M;O(i);BA(T(G(T(G(i,B(94)),c),B(88)),d),41);Bj(e,N(i));J(e);}
function NS(a){a.V=0;a.dp=a.lN;a.g8=(-1);return a;}
function HC(){C.call(this);this.xt=null;}
var AUU=null;var AUT=null;var AUS=null;function G6(){G6=Bl(HC);ALb();}
function ADy(a){var b=new HC();ACw(b,a);return b;}
function ACw(a,b){G6();a.xt=b;}
function ALb(){AUU=ADy(B(100));AUT=ADy(B(101));AUS=ADy(B(102));}
var M7=F(CC);
function AK3(a){}
function AJv(a,b,c){}
var ADR=F();
function AO0(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(103)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(Lg(b)){case -1570047148:if(!Bq(b,B(104)))break a;d=16;break a;case -1519338717:if(!Bq(b,B(105)))break a;d=2;break a;case -1509980539:if(!Bq(b,B(106)))break a;d=12;break a;case -1073555521:if(!Bq(b,B(107)))break a;d=13;break a;case -811765794:if(!Bq(b,B(108)))break a;d=5;break a;case -785237654:if(!Bq(b,B(109)))break a;d=10;break a;case -631889171:if(!Bq(b,B(110)))break a;d=8;break a;case -439438829:if
(!Bq(b,B(111)))break a;d=17;break a;case 2129957:if(!Bq(b,B(112)))break a;d=1;break a;case 3343967:if(!Bq(b,B(113)))break a;d=9;break a;case 3556498:if(!Bq(b,B(114)))break a;d=4;break a;case 485517998:if(!Bq(b,B(115)))break a;d=6;break a;case 544901384:if(!Bq(b,B(116)))break a;d=3;break a;case 1030621992:if(!Bq(b,B(117)))break a;d=15;break a;case 1465713255:if(!Bq(b,B(118)))break a;d=7;break a;case 1554501643:if(!Bq(b,B(119)))break a;d=14;break a;case 1609169232:if(!Bq(b,B(120)))break a;d=11;break a;default:}}b:
{switch(d){case 1:break;case 2:b=new S9;break b;case 3:case 4:b=new S8;break b;case 5:b=new S7;break b;case 6:b=new S6;break b;case 7:b=new S5;break b;case 8:case 9:b=new S4;break b;case 10:b=new S3;break b;case 11:b=new S2;break b;case 12:b=new S1;break b;case 13:b=new QC;break b;case 14:b=new Qz;break b;case 15:b=new QB;break b;case 16:b=new Qx;break b;case 17:b=new Qy;break b;default:b=new Qv;break b;}b=new S$;}return b;}
var AA2=F();
var J0=F(K5);
function AAL(){var a=this;J0.call(a);a.lR=0;a.lA=0;a.gY=null;}
function ANb(a,b,c,d,e,f){var g=new AAL();ARj(g,a,b,c,d,e,f);return g;}
function ARj(a,b,c,d,e,f,g){V1(a,c);a.V=e;a.dp=f;a.lA=b;a.lR=g;a.gY=d;}
function Sk(a,b,c){a.gY.data[b+a.lA|0]=c;}
function KR(){var a=this;C.call(a);a.vk=null;a.pp=null;a.wS=0.0;a.l1=0.0;a.le=null;a.kx=null;a.ib=0;}
function LG(){var a=this;C.call(a);a.ge=0;a.hL=0;}
var AUW=null;var AUV=null;function Y0(a,b){var c=new LG();Zt(c,a,b);return c;}
function Zt(a,b,c){a.ge=b;a.hL=c;}
function Ia(a){return a.ge?0:1;}
function G3(a){return a.ge!=1?0:1;}
function KG(a){return !Qo(a)&&!LU(a)?0:1;}
function Qo(a){return a.ge!=2?0:1;}
function LU(a){return a.ge!=3?0:1;}
function J9(a){var b;if(KG(a))return a.hL;b=new Fh;V(b);J(b);}
function DZ(b){return Y0(2,b);}
function Vj(a){var b,c;switch(a.ge){case 0:b=new PX;V(b);J(b);case 1:b=new W5;V(b);J(b);case 2:b=new Vc;c=a.hL;V(b);b.xM=c;J(b);case 3:b=new PK;c=a.hL;V(b);b.xG=c;J(b);default:}}
function ZW(){AUW=Y0(0,0);AUV=Y0(1,0);}
var YQ=F();
var Ll=F(0);
var Ne=F();
function AH4(a,b){return b.arrayBuffer();}
var Nd=F();
function AMn(a,b){var c,d;c=new OX;d=new OV;return $rt_globals.WebAssembly.instantiate(b,AJ9(Bm(c,"f"),Bm(d,"f")));}
var Nc=F();
function AM6(a,b){AFO(b);}
var Nb=F();
function AGt(a,b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
var S$=F();
function AMF(a,b){var c,d,e,f;c=new Xy;Fg(c,b);d=AM1(c.s);c.ek=d;c.N=ADp(c.s,d);c.M=ADp(c.s,c.ek);d=c.N;d.bI=1;e=new QO;e.sx=c;f=new QM;f.t3=c;Qw(d,e,e);Qw(c.M,f,f);WP(c.s,c.N);W(b.l.bt,c.ek);W(b.l.df,c.ek);W(b.l.df,c);W(b.l.bt,c);d=b.l.b3;e=new QN;e.vZ=c;W(d,e);d=b.l.b3;e=new HE;f=new QK;f.rN=c;R8(e,b,f);W(d,e);W(b.l.fn,c);W(b.l.fR,c);b=b.l.eh;d=new QL;d.mk=c;W(b,d);AAb(c);return c;}
var S9=F();
function AFx(a,b){return ATD(b);}
var S8=F();
function AJb(a,b){return ARW(b);}
var S7=F();
function AI$(a,b){var c,d,e;c=new V7;Fg(c,b);d=new UV;d.lu=new Bi;d.jS=new Bi;c.q$=d;c.dw=YW();c.cI=YW();c.d4=MM(c.s);W(c.s.dT,c);d=b.l.b3;e=new Ta;e.ta=c;W(d,e);W(b.l.bt,c);b=b.l.eh;d=new Td;d.rO=c;W(b,d);SK(c.cI);c.k$=EQ(B(121),25.0);H3(c.d4,FW(),c.k$);BI(c.ga,C3(43));b=FW();H6(c.dw,b);H6(c.cI,b);b=c.dw;b.i9=new Tc;d=c.cI;d.i9=new S_;d.jr=new W1;d.sM=new W2;KQ(b,(Nv(0)).iA);KQ(c.cI,(Nv(0)).iA);return c;}
var S6=F();
function AJN(a,b){var c,d,e;c=new Xh;Fg(c,b);c.kh=EQ(B(122),15.0);d=ADU();c.eg=d;W(c.s.dT,d);W(c.s.dT,c);BI(c.ga,C3(43));d=MM(c.s);c.g3=d;H3(d,FW(),EQ(B(121),25.0));d=b.l.b3;e=new Ow;e.vh=c;W(d,e);d=b.l.eh;e=new Ox;e.p5=c;W(d,e);W(b.l.bt,YV(c.g3));W(b.l.bt,c.eg);b=b.l.df;d=c.eg;BF(d);e=new Oy;e.tq=d;W(b,e);return c;}
var S5=F();
function AFD(a,b){var c,d,e;c=new X2;Fg(c,b);c.fx=Cm();c.e1=Cm();c.oq=S(B(123));c.h7=APc();c.fT=0;d=c.s.dT;e=new T0;e.mf=c;W(d,e);W(b.l.bt,c);d=b.l.b3;e=new T1;e.p0=c;W(d,e);b=Hh(b.bk,B(121),35);c.i8=b;c.hO=ADG(E0(b));BI(c.ga,S(B(124)));return c;}
var S4=F();
function AHd(a,b){var c,d,e,f;c=new O4;EP(c,b);c.fN=ABt();c.dZ=0;c.rG=500;c.t$=Hz(0,0,0,255,new BZ);c.lv=20;c.up=20;c.of=AAo();d=b.l.bt;e=new Wm;e.iw=c;f=new X0;f.rp=e;e.qO=f;W(d,e);d=b.l.df;e=new SO;e.nz=c;W(d,e);c.d0=b.bk;c.sF=Uz(b.bO);TD(c.fN,Hh(c.d0,B(121),c.up),c.lv,c.d0);c.gE=Hl();return c;}
var S3=F();
function AMV(a,b){var c,d;c=new QQ;Gi(c,b);b=b.l.b3;d=new PY;d.ua=c;W(b,d);return c;}
var S2=F();
function AQq(a,b){return ATf(b);}
var S1=F();
function ARh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new WN;Gi(c,b);c.dK=Fd(0,0,300,300);c.eN=SF(0,0,3,3);d=b.bk;b=b.l.bt;e=new TL;e.kL=c;W(b,e);b=Z9(d);c.pl=b;Gf(c.dK,b);GZ(c.dK);b=c.dK.b2;G7();BI(b,AU6);BI(c.dK.bT,CL(204,120,50));ABx();e=AU4;f=E9((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CU(d);YC();switch(AUZ.data[e.cY]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Ep;V(b);J(b);}b:
{M9(m,5,5,h);b=m.dX.dm;switch(AUZ.data[e.cY]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Ep;V(b);J(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.j6=m;Bf(c.eN.y,Ce(m),C8(c.j6));BI(c.eN.b2,c.lh);return c;}
var QC=F();
function AKG(a,b){var c,d,e;c=new Se;Gi(c,b);c.f$=Fd(0,0,300,300);c.jG=new Bi;c.h$=new Bi;c.hk=new Bi;d=b.bk;b=b.l.bt;e=new VQ;e.ja=c;W(b,e);b=Z9(d);c.rk=b;Gf(c.f$,b);GZ(c.f$);b=c.f$.b2;G7();BI(b,AU6);BI(c.f$.bT,CL(204,120,50));return c;}
var Qz=F();
function AEr(a,b){var c,d,e,f;c=new OG;EP(c,b);c.wo=20;c.xZ=11;c.v7=220;c.iT=new Bi;c.wO=5000;c.gr=1;c.fj=H(G8,[C3(0),C3(255)]);c.d7=b.bk;d=b.l.bt;e=new T$;e.i3=c;f=new Pt;f.mP=e;e.pC=f;W(d,e);b=b.l.df;d=new NQ;d.tu=c;W(b,d);b=CK(c.d7,200,220);c.jz=b;FZ(b,B(121),20.0);b=CK(c.d7,200,20);c.e8=b;FZ(b,B(121),20.0);c.hu=Hl();return c;}
var QB=F();
function AH0(a,b){var c,d,e;c=new Ir;Gi(c,b);W(b.l.bt,c);d=b.l.b3;e=new Sr;e.rt=c;W(d,e);W(b.l.fn,new Sq);d=b.l.fn;e=new So;e.o$=c;W(d,e);W(b.l.fR,new Sn);d=b.l.fR;e=new Sp;e.mU=c;W(d,e);b=!Xs(b.bO)?B(125):B(126);d=new M;O(d);G(G(d,B(127)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var Qx=F();
function AKY(a,b){var c,d,e,f,g,h,i,j;c=new P1;EP(c,b);c.m4=C3(20);c.e2=Fd(0,0,300,300);d=b.l.b3;e=new RW;e.xu=c;W(d,e);b=b.bk;d=Hh(b,B(10),88);Cy(b.cB,d);f=Eo(b.cB,B(128));g=Eo(b.cB,B(129));if(f>g)g=f;h=Dg(g);i=J2(d,1.1799999475479126);j=Bv();e=new M;O(e);T(G(T(G(e,B(130)),h),B(131)),i);Bt(j,N(e));e=CK(b,h,i*2|0);c.hP=e;Cy(e,d);Ch(c.hP,B(128),0.0,d.dt);Ch(c.hP,B(129),0.0,i+d.dt);b=CU(b);c.k_=b;CM(b,c.hP);Gf(c.e2,c.k_);GZ(c.e2);b=c.e2.b2;G7();BI(b,AU6);BI(c.e2.bT,AU7);return c;}
var Qy=F();
function AOD(a,b){var c,d,e,f;c=new Wn;Fg(c,b);c.sE=EQ(B(122),20.0);d=ADU();c.d1=d;W(c.s.dT,d);W(c.s.dT,c);BI(c.ga,C3(43));d=MM(c.s);c.gz=d;H3(d,FW(),EQ(B(121),25.0));d=b.l.b3;e=new Qj;e.xr=c;W(d,e);d=b.l.eh;e=new Qk;e.p8=c;W(d,e);W(b.l.bt,YV(c.gz));W(b.l.bt,c.d1);d=b.l.bt;e=c.s.cA;f=new Ro;f.l7=e;W(d,f);b=b.l.df;d=c.d1;BF(d);e=new Ql;e.rv=d;W(b,e);return c;}
var Qv=F();
function AEg(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Rb;X_(c,b);d=c.cJ;e=new It;f=AQt(null,null,B(132),null);g=Q(Bu,8);h=I(B(133));i=0;j=0;k=h+1|0;while(true){l=GC(B(133),10,j);m=l>=0?B$(B(133),j,l):Dk(B(133),j);n=g.data;o=i+1|0;j=n.length;if(j==i)g=Dl(g,j*2|0);g.data[i]=m;g=g;j=l<0?k:l+1|0;if(j>h)break;i=o;}if(g.data.length!=o)g=Dl(g,o);Qm(e,g,B(134),f);d.vq=null;U4(d);b=d.e;d.e=e;d.eK=FC();p=AA8(Do(d.e));if(p!==null){f=Ck(d);m=new MJ;m.pv=d;n=Q(C,1);n.data[0]=EE(d.e.f);CO(f,m,p,n);}n=(Co(d.ej.me)).data;i
=n.length;j=0;while(j<i){n[j].lS(b,e);j=j+1|0;}return c;}
function G5(){var a=this;C.call(a);a.bC=0;a.cf=0;a.cX=0;a.iz=0;}
function AU8(a,b,c,d){var e=new G5();Uj(e,a,b,c,d);return e;}
function Uj(a,b,c,d,e){a.bC=d;a.cf=b;a.cX=c;a.iz=e;}
function ON(){var a=this;G5.call(a);a.dE=null;a.bg=0;a.hd=0;a.rs=0;a.jC=0;}
var ACX=F();
function Wc(b,c){return (b+(c/2|0)|0)/c|0;}
function PB(b,c,d){if(b<(2147483647/c|0))return Wc(Z(b,c),d);return 0.5+c*b/d|0;}
function Iz(b,c){return ((b+c|0)-1|0)/c|0;}
function Hc(b){return b+0.5|0;}
function Dg(b){return b+0.5|0;}
function Et(b,c,d){return Ba(b,Y(c,d));}
function Ml(){var a=this;G5.call(a);a.h=null;a.va=null;}
var Uc=F(0);
function Ny(){var a=this;C.call(a);a.tT=null;a.tU=null;}
function AKx(a,b){var c,d;c=a.tT;d=a.tU;$rt_globals.console.info("paste plain string "+b);c.n(FA(b));Dh(d);}
function UW(){C.call(this);this.ut=null;}
function Wb(a,b){a.ut.clipboardData.setData("text/plain",$rt_ustr(b));}
function WT(){var a=this;JN.call(a);a.wB=0;a.ms=0;}
var ABR=F();
function Kj(){C.call(this);this.wW=null;}
var AU5=null;var AU9=null;function AJL(){AJL=Bl(Kj);AQ$();}
function AHA(a){var b=new Kj();X9(b,a);return b;}
function X9(a,b){AJL();a.wW=b;}
function AQ$(){AU5=AHA(B(135));AU9=AHA(B(136));}
var V4=F(0);
function SQ(){C.call(this);this.g9=null;}
function FG(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.g9));}
function D6(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.g9));}
function AGZ(a){var b,c;b=a.g9.byteLength;c=new M;O(c);G(T(G(c,B(137)),b),B(138));return N(c);}
var Uv=F(0);
function K3(){var a=this;C.call(a);a.gv=null;a.eZ=null;a.lw=null;}
function ABN(a,b){var c=new K3();AJG(c,a,b);return c;}
function ARK(a,b,c){var d=new K3();NT(d,a,b,c);return d;}
function Yj(b){var c,d,e,f,g,h,i,j,k;c=new K3;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=UD(E(V0),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=f[h];h=h+1|0;}}i=g.data;h=i.length;if(!h)j=Q(Bu,0);else{j=Q(Bu,h-1|0);g=j.data;h=0;k=g.length;while(h<k){g[h]=FA(i[h]);h=h+1|0;}}}else j=Q(Bu,0);NT(c,d,b,j);return c;}
function AJG(a,b,c){NT(a,b,c,Q(Bu,0));}
function NT(a,b,c,d){a.gv=b;a.eZ=c;a.lw=d;}
function Jy(a,b){var c,d,e;c=b|0;if(c===b)return c;d=Ey(a);e=new M;O(e);G(G(e,B(139)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function Ey(a){var b;b=a.gv;return FA(b!==null?b.name:a.eZ.name);}
function AJ8(a){var b,c,d,e,f;if(a.eZ===null){b=a.lw;c=Ey(a);d=Zx(b);e=new M;O(e);G(G(G(e,d),B(140)),c);c=N(e);}else{b=a.lw;c=Ey(a);f=Jy(a,a.eZ.size);d=Zx(b);e=new M;O(e);T(G(G(G(G(e,d),B(140)),c),B(141)),f);c=N(e);}return c;}
function KN(){var a=this;KR.call(a);a.oE=null;a.nj=null;}
function YT(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.oE;e=0;f=0;g=a.nj;a:{while(true){if((e+32|0)>f&&DM(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Y(B6(b)+j|0,i.length);No(b,d,j,f-j|0);e=0;}if(!DM(c)){k=!DM(b)&&e>=f?AUW:AUV;break a;}i=g.data;j=Y(B6(c),i.length);l=new Nx;l.mh=b;l.pB=c;k=ABc(a,d,e,f,g,0,j,l);e=l.s2;j=l.uh;if(k===null){if(!DM(b)&&e>=f)k=AUW;else if(!DM(c)&&e>=f)k=AUV;}WU(c,g,0,j);if(k!==null)break;}}ED(b,b.V-(f-e|0)|0);return k;}
var Pc=F(KN);
function ABc(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(LF(h,2))break a;i=AUV;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!L2(l)){if((f+3|0)>g){j=j+(-1)|0;if(LF(h,3))break a;i=AUV;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CD(l)){i=DZ(1);break a;}if
(j>=d){if(DM(h.mh))break a;i=AUW;break a;}c=j+1|0;m=k[j];if(!C4(m)){j=c+(-2)|0;i=DZ(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(LF(h,4))break a;i=AUV;break a;}k=e.data;o=Es(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.s2=j;h.uh=f;return i;}
var In=F(D1);
function CQ(){var a=this;CC.call(a);a.ga=null;a.s=null;}
function Fg(a,b){var c,d,e;EP(a,b);a.ga=Zy(0,0,64);c=new XU;c.b7=new Bi;c.dT=CH(Q(En,0));c.dQ=new Bi;c.nP=new Bi;c.x1=new BZ;c.x0=new BZ;c.cV=b.bk;d=b.bO;c.ix=d;c.cA=Uz(d);d=b.l.jU;e=new Mv;e.m6=c;W(d,e);d=b.l.jd;e=new Mw;e.qo=c;W(d,e);a.s=c;W(b.l.b3,new Sh);b=b.l.b3;c=a.s;BF(c);d=new Si;d.rP=c;W(b,d);}
function E3(a){Gw(a.bj.bk,a.ga);}
function GR(a,b,c){var d,e,f,g,h;a:{d=a.s;CA(d.b7,b);e=d.bM;if(e!==c){d.bM=c;f=(Co(d.dT)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].gh(e,c);h=h+1|0;}}}}
var Kd=F(0);
var K_=F(0);
function Xy(){var a=this;CQ.call(a);a.N=null;a.M=null;a.ek=null;}
function AJg(a,b,c){if(DW(a.s,a.N))return GA(a.N,b,c);if(!DW(a.s,a.M))return 0;return GA(a.M,b,c);}
function We(a,b,c){var d,e;d=10*b.U|0;if(I1(b.bm-c.bm|0)>d){e=b.bm;c.bm=Hx(Ba(e-d|0,Y(c.bm,e+d|0)),Is(c));}c.cG=Hx(b.cG,Kh(c));}
function AHV(a,b){var c,d;c=KX(a.N,b);d=KX(a.M,b);return !c&&!d?0:1;}
function APU(a){E3(a);L8(a.N);L8(a.M);V$(a.ek);}
function VJ(a){return Xz(0);}
function AIW(a){XX(a.N);XX(a.M);}
function AN7(a){WE(a.N);WE(a.M);}
function AOO(a,b){XY(a.N,b);XY(a.M,b);}
function ANJ(a,b,c){var d,e,f;GR(a,b,c);d=new Bi;e=BW(b.b/2|0,b.a);LB(a.N,d,e,c);f=b.b;d.b=f-(f/2|0)|0;LB(a.M,d,e,c);}
function AOC(a){JF(a,Ki());}
function AAb(a){JF(a,ABD());}
function AO_(a){JF(a,AAI());}
function JF(a,b){BF(b);Pz(a.ek,b);Ld(a.N,b);Ld(a.M,b);}
function AK_(a,b){var c,d;c=DF(a.N,b.h)&&Pi(a.N,b)?1:0;d=DF(a.M,b.h)&&Pi(a.M,b)?1:0;return !c&&!d?0:1;}
function AK7(a,b,c,d){var e,f;e=DF(a.N,b.h)&&QD(a.N,b,c,d)?1:0;f=DF(a.M,b.h)&&QD(a.M,b,c,d)?1:0;return !e&&!f?0:1;}
function AFq(a,b,c){var d,e,f,g,h,i,j,k;d=DF(a.N,b.h);e=DF(a.M,b.h);f=a.s;g=f.d5;h=g!==null?0:1;i=a.N;j=g!==i?0:1;k=g!==a.M?0:1;if(d&&!(!h&&!k))FO(f,i);if(e&&!(!h&&!j))FO(a.s,a.M);if(d){i=UZ(a.N,b,c);if(i!==null)return i;}return !e?null:UZ(a.M,b,c);}
function AIl(a,b,c){var d,e,f,g;d=DF(a.N,b.h);e=DF(a.M,b.h);f=d&&UR(a.N,b,c)?1:0;g=e&&UR(a.M,b,c)?1:0;return !f&&!g?0:1;}
function AM8(a,b,c,d){var e,f,g,h;e=DF(a.N,b.h);f=DF(a.M,b.h);g=e&&JC(a.N,c,d)?1:0;h=f&&JC(a.M,c,d)?1:0;return !g&&!h?0:1;}
function AKN(a){var b,c;if(DW(a.s,a.N)){b=a.N;BF(b);c=new Q5;c.tZ=b;}else if(!DW(a.s,a.M))c=null;else{b=a.M;BF(b);c=new Q4;c.og=b;}return c;}
function Ku(){var a=this;CQ.call(a);a.cJ=null;a.fY=null;}
function ATD(a){var b=new Ku();X_(b,a);return b;}
function X_(a,b){var c,d,e,f;Fg(a,b);c=AM1(a.s);a.fY=c;d=ADp(a.s,c);a.cJ=d;WP(a.s,d);W(b.l.bt,a.fY);W(b.l.df,a.fY);W(b.l.bt,a.cJ);c=b.l.b3;d=new R1;d.od=a;W(c,d);c=b.l.b3;d=new HE;e=a.cJ;BF(e);f=new R5;f.t1=e;R8(d,b,f);W(c,d);c=b.l.fn;d=a.cJ;BF(d);e=new R4;e.l2=d;W(c,e);c=b.l.fR;d=new R3;d.pf=a;W(c,d);c=b.l.df;d=new R2;d.uS=a;W(c,d);b=b.l.eh;c=new R6;c.mN=a;W(b,c);AB2(a);}
function AGC(a,b){return KX(a.cJ,b);}
function AJr(a){E3(a);L8(a.cJ);V$(a.fY);}
function ANi(a){return Xz(0);}
function ALT(a,b,c){GR(a,b,c);a.qG(b,c);}
function ZY(a,b,c){LB(a.cJ,new Bi,b,c);}
function ALR(a){Jt(a,Ki());}
function AB2(a){Jt(a,ABD());}
function AKS(a){Jt(a,AAI());}
function Jt(a,b){BF(b);Pz(a.fY,b);Ld(a.cJ,b);}
function ADQ(a,b){if(b.bg!=121)return 0;return 1;}
function YZ(a,b){var c,d,e;if(DW(a.s,a.cJ)){c=a.fY;d=a.cJ;e=new NJ;e.sG=a;Ky(c,b,d,a,d,e);}return 1;}
function YH(){var a=this;CC.call(a);a.lF=null;a.kU=null;a.dc=null;a.gi=null;a.e_=null;a.g1=null;a.u8=null;a.gQ=null;a.qZ=null;a.lH=null;a.vn=null;a.wr=null;a.fS=null;a.js=null;a.qb=0;}
function ARW(a){var b=new YH();AKV(b,a);return b;}
function AKV(a,b){var c,d,e,f,g,h,i;EP(a,b);c=(Ki()).cu.gt;a.lF=c;a.kU=AQc(c);a.dc=Fd(0,0,300,300);a.gi=SF(0,0,3,3);a.e_=Fd(0,0,300,300);a.g1=AMi();d=Q(Bu,4);e=d.data;e[0]=B(142);e[1]=B(143);e[2]=B(144);e[3]=B(145);a.u8=d;a.gQ=Q(Ix,e.length);c=b.bk;f=b.l.bt;g=new TM;g.e9=a;W(f,g);f=b.l.b3;g=new RC;g.uU=a;W(f,g);f=b.l.lX;g=new RB;g.ob=a;W(f,g);f=b.l.fn;g=new RE;g.wT=a;W(f,g);f=b.l.jd;g=new RD;g.vg=a;W(f,g);f=b.l.eh;g=new RA;g.wn=a;W(f,g);b=b.l.df;f=new Rz;f.s4=a;W(b,f);h=CK(a.bj.bk,300,300);f=h.bn;b="white";f.fillStyle
=b;b=h.bn;f="white";b.strokeStyle=f;b=h.bn;f=10.0;b.lineWidth=f;h.bn.strokeRect(75.0,140.0,150.0,110.0);h.bn.fillRect(130.0,190.0,40.0,60.0);h.bn.beginPath();h.bn.moveTo(50.0,140.0);h.bn.lineTo(150.0,60.0);h.bn.lineTo(250.0,140.0);h.bn.closePath();h.bn.stroke();FZ(h,B(146),11.0);Lo(h,187,187,187);Pb(a,B(147),h);b=CU(a.bj.bk);CM(b,h);FM(h);a.qZ=b;Gf(a.dc,b);GZ(a.dc);BI(a.dc.b2,a.lF);BI(a.dc.bT,CL(204,120,50));b=CK(c,255,100);a.fS=b;FZ(b,B(122),11.0);b=Bv();i=$rt_str(a.fS.bn.font);g=new M;O(g);G(G(g,B(148)),i);Bt(b,
N(g));Eo(a.fS,B(149));Lo(a.fS,169,183,198);Pb(a,B(149),a.fS);b=CU(c);a.lH=b;CM(b,a.fS);Gf(a.e_,a.lH);GZ(a.e_);F$(a.e_,C3(255));Hw(a.e_,a.lF);a.vn=CU(c);BI(a.gi.b2,a.kU);}
function Pb(a,b,c){Ch(c,b,0.0,20.0);Ch(c,b,0.25,40.0);Ch(c,b,0.5,60.0);Ch(c,b,0.75,80.0);}
function WK(a,b){Js(Fu(),0.5+Fu()*0.5,0.5+Fu()*0.5,1.0,b.bT);}
function AEQ(a,b){var c;a.qb=a.qb+1|0;c=b/5.0;Js(c-(c|0),1.0,1.0,1.0,a.gi.bT);return ST(a.g1,b);}
function AHQ(a){var b,c,d,e,f,g;b=a.bj.bk;Gw(b,a.kU);c=a.gQ.data;d=c.length;e=0;while(e<d){Up(c[e],b,0,0);e=e+1|0;}DD(a.dc,b,a.qZ,0,0,0.5);f=a.lH;d=0;while(d<7){g=a.e_;DD(g,b,f,Z(d,10+((10*g.y.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.wr;if(g!==null)T4(a.gi,b,g,0,0,0.0);U3(a.g1,b,new Bi);NL(b,B(150));}
function AOi(a,b,c){var d,e,f,g,h,i,j,k,l;d=Bv();e=Cq(b);f=new M;O(f);G(G(f,B(151)),e);Bt(d,N(f));g=Bv();d=new M;O(d);Fj(G(d,B(152)),c);Bt(g,N(d));h=B_(30.0,c);i=B_(10.0,c);j=0;while(true){k=a.gQ.data;if(j>=k.length)break;l=1+j|0;k[j]=SF(Z(i,l)+Z(h,j)|0,h,h,h);WK(a,a.gQ.data[j]);j=l;}Bf(a.gi.P,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dc;g=d.P;h=b.b;d=d.y;Bf(g,(h-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.e_;d.P.a=b.a-d.y.a|0;}
function OQ(a,b){var c,d,e,f,g;c=Bv();d=!b.hd?B(153):B(154);e=b.dE;f=b.bg;g=b.rs;b=new M;O(b);F2(G(T(G(G(G(b,d),e),B(155)),f),B(156)),g);Bt(c,N(b));return 0;}
var En=F(0);
function V7(){var a=this;CQ.call(a);a.q$=null;a.dw=null;a.cI=null;a.d4=null;a.k$=null;}
function APK(a,b,c){var d;d=GL(a.s,a.k$);HY(a.dw,d);HY(a.cI,d);GT(a.dw,a.s);GT(a.cI,a.s);}
function Nv(b){return IW(b,APc());}
function IW(b,c){var d;d=PJ();Kt(d,KM(b,Ip(c,25)),!b?null:IW(b-1|0,c));Kt(d,KM(b,Ip(c,20)),!b?null:IW(b-1|0,c));Kt(d,KM(b,Ip(c,15)),!b?null:IW(b-1|0,c));Kt(d,KM(b,Ip(c,10)),!b?null:IW(b-1|0,c));return Hm(d);}
function KM(b,c){var d;if(b){d=new M;O(d);G(G(T(d,b),B(36)),c);c=N(d);}return c;}
function Kt(b,c,d){var e,f;e=new Gt;f=Js(Fu(),1.0,1.0,1.0,new BZ);XH();Hk(e,f,AU$,AU_);if(d!==null)GF(b,c,e,d);else{d=new Ud;d.s6=c;D3(b,c,e,d);}}
function AHj(a,b,c){var d,e;GR(a,b,c);b=a.s.b7;d=D_(a.dw);e=D_(a.cI);JV(a.dw,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);JV(a.cI,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AH5(a){var b,c,d,e,f,g,h,i;E3(a);b=a.bj.bk;CJ(b,1);c=a.q$;d=a.s;e=d.b7;Bf(c.lu,e.b,B_(2.0,d.bM));Bf(c.jS,B_(2.0,d.bM),e.a);G7();f=AVa;g=d.cV;h=e.a/2|0;i=c.lu;By(g,0,h-(i.a/2|0)|0,i,f);g=d.cV;h=e.b/2|0;c=c.jS;By(g,h-(c.b/2|0)|0,0,c,f);JA(a.dw,a.s);JA(a.cI,a.s);Ik(a.d4);CJ(b,0);}
function ANE(a,b){var c,d,e;c=Ks(a.d4,b);d=Kf(a.dw,b.h,a.s.cA);e=Kf(a.cI,b.h,a.s.cA);return !c&&!d&&!e?0:1;}
function AIb(a,b,c){return Jd(a.d4,b,c);}
function AFY(a,b,c){return DI(a.d4);}
function AMY(a,b,c,d){var e,f,g;e=Ji(a.d4,b,c,d);f=J8(a.dw,b.h,c,d);g=J8(a.cI,b.h,c,d);return !e&&!f&&!g?0:1;}
function Xh(){var a=this;CQ.call(a);a.g3=null;a.eg=null;a.hR=null;a.kh=null;}
function AIe(a,b,c){if(b===0.0)XC(a);}
function ANf(a){var b;E3(a);b=a.bj.bk;I3(a.eg,b);Ik(a.g3);}
function XC(a){var b,c,d,e,f,g,h;b=a.hR;if(b!==null){J6(a.eg,b);JS(b);}b=(Ki()).T;c=ATt(a.s,new VP);d=EQ(B(121),14.0);e=AM3();f=0;while(f<300){g=C5(f);h=new X6;h.rT=B(157);h.rS=g;h.rR=B(158);M3(e,B(157),g,B(158),h);f=f+1|0;}VS(c,QJ(e));XF(c,b,d);g=ABq(a.s);h=Zh(c,a.s);Qs(h,b.lt,b.jW);LJ(g,h);g.ea=b;IA(g,B(159),a.kh,2.0);a.hR=g;IQ(a.eg,g);Ur(a);}
function AGx(a,b,c){GR(a,b,c);PO(a.eg,b,c);Ur(a);}
function Ur(a){var b,c,d;b=a.s.b7;Fm(a.hR,BW((b.b*2|0)/10|0,(b.a*4|0)/10|0),BW((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.hR;b=X8(c.O.q);d=new M;O(d);G(G(d,B(160)),b);IA(c,N(d),a.kh,2.0);}
function AOo(a,b){return Oc(a.eg,b);}
function X2(){var a=this;CQ.call(a);a.hO=null;a.fx=null;a.e1=null;a.i8=null;a.oq=null;a.h7=null;a.fI=null;a.ft=null;a.i2=0;a.fT=0;}
function WD(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.fx.i>0){d=Fu();e=a.fx;f=d*(e.i-1|0)|0;e=El(e,f);El(a.e1,f);f=a.fT;g=e.y;a.fT=f-Z(g.b,g.a)|0;Id(a.hO,e.c6);}c=c+1|0;}}
function Kq(a,b){var c,d,e,f,g,h,i,j;c=IF(a.s);Cy(c,a.i8);d=0;while(d<b){e=Ip(a.h7,1+(Fu()*19.0|0)|0);f=AK$();g=f.c6;h=a.hO;BF(c);i=new Rg;i.oH=c;BI(g,Hf(h,e,i));(WR(Fu(),1.0,1.0,f.b2)).bA=0.5;h=f.P;g=f.c6;Bf(h,g.bl|0,g.bz|0);h=f.y;g=f.c6;Bf(h,g.bh|0,g.bA|0);B0(a.e1,e);B0(a.fx,f);j=a.fT;h=f.y;a.fT=j+Z(h.b,h.a)|0;d=d+1|0;}a.ft=L5(a.hO);}
function ANO(a){var b,c,d,e,f,g,h,i;E3(a);b=a.bj.bk;CJ(b,1);c=a.s.cV;if(a.e1.i){d=a.ft;d=CK(c,d.b,d.a);Cy(d,a.i8);e=a.i8.dt;By(c,0,0,a.ft,a.oq);f=0;while(f<a.e1.i){g=Bp(a.fx,f);h=Bp(a.e1,f);g=g.c6;Ch(d,h,g.bl,g.bz+e);f=f+1|0;}g=a.fI;if(!(g!==null&&Ce(g)==a.ft.b&&C8(a.fI)==a.ft.a))a.fI=CG(a.fI,CU(c));CM(a.fI,d);FM(d);i=0;while(i<a.e1.i){d=Bp(a.fx,i);F$(d,C3(0));DD(d,c,a.fI,0,0,0.0);i=i+1|0;}}CJ(b,0);}
function AGX(a,b){var c,d;if(a.i2){c=a.ft;d=Y(Z(c.b,c.a),2211840);if(a.fT/d<=0.7)Kq(a,If(a.h7,5));else WD(a,If(a.h7,5));}return a.i2;}
function O4(){var a=this;CC.call(a);a.d0=null;a.fN=null;a.gE=null;a.kv=null;a.dZ=0;a.rG=0;a.t$=null;a.lv=0;a.up=0;a.sF=null;a.of=null;}
function AE9(a){var b,c;b=a.dZ;c=new M;O(c);T(G(c,B(161)),b);$rt_globals.console.info($rt_ustr(N(c)));Gw(a.d0,a.t$);Iq(a.gE,a.dZ,0,F8(a),5000,a.kv.b,20);CJ(a.d0,1);PT(a.gE,a.d0);CJ(a.d0,0);b=a.dZ;c=new M;O(c);T(G(c,B(161)),b);$rt_globals.console.info($rt_ustr(N(c)));XB(a.fN,a.dZ/a.lv|0);Qt(a.fN,a.dZ,F8(a),a.of,a.d0);}
function APt(a,b,c){a.kv=b;Vk(a.fN,BW(0,0),50,F8(a),c);JY(a.fN,a.d0,0,F8(a));}
function PI(a){return 5000-F8(a)|0;}
function F8(a){return Y(a.rG,a.kv.a);}
function Dc(){var a=this;CC.call(a);a.lh=null;a.gp=null;a.vi=0.0;}
function AVb(a){var b=new Dc();Gi(b,a);return b;}
function Gi(a,b){EP(a,b);a.lh=Zy(0,0,64);a.gp=new Bi;Nq(b.bO,H1(Cn(a)));}
function Sb(a){Gw(a.bj.bk,a.lh);}
function SJ(a,b,c){CA(a.gp,b);a.vi=c;}
var QQ=F(Dc);
var ADK=F(Dc);
function ATf(a){var b=new ADK();AMy(b,a);return b;}
function AMy(a,b){var c,d,e,f,g,h;Gi(a,b);c=b.bO;d=new Rf;d.vS=a;e=Q(C,1);e.data[0]=B(162);CO(c,d,B(163),e);f=b.bO;g=new Re;g.xI=a;h=Q(C,1);h.data[0]=AAH([1,2,3,4,5]);CO(f,g,B(164),h);f=b.bO;g=new Rd;g.n_=a;h=Q(C,1);h.data[0]=ASB([1,2,3,4,5]);CO(f,g,B(165),h);f=b.bO;g=new Rc;g.vA=a;h=Q(C,1);h.data[0]=E4([1,2,3,4,5]);CO(f,g,B(166),h);f=b.l.b3;d=new HE;g=new Ra;g.wI=a;c=new Q_;c.pZ=a;Vm(d,b,g,c);W(f,d);}
function Us(a,b){var c,d,e,f,g,h;c=b.data;d=Bv();e=Cq(c[0]);f=new M;O(f);G(G(f,B(167)),e);Bt(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((RT(b,1)).g9));d=Bv();e=Cq(c[1]);if(b===null)f=B(29);else{f=new M;O(f);B1(f,B(42));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)B1(f,B(43));T(f,c[g]);g=g+1|0;}B1(f,B(44));f=N(f);}h=new M;O(h);G(G(G(G(h,B(168)),e),B(169)),f);Bt(d,N(h));}
function WN(){var a=this;Dc.call(a);a.dK=null;a.eN=null;a.j6=null;a.pl=null;a.k9=null;}
function AKo(a,b){b=b/5.0;Js(b-(b|0),1.0,1.0,1.0,a.eN.bT);return 0;}
function AEK(a){Sb(a);DD(a.dK,a.bj.bk,a.pl,0,0,0.5);T4(a.eN,a.bj.bk,a.j6,0,0,0.0);NL(a.bj.bk,B(150));}
function ANd(a,b,c){var d,e,f;SJ(a,b,c);Bf(a.eN.P,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dK;e=d.P;f=b.b;d=d.y;Bf(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Se(){var a=this;Dc.call(a);a.f$=null;a.rk=null;a.jG=null;a.h$=null;a.hk=null;}
function AQV(a){var b,c,d,e,f,g;Sb(a);b=a.bj.bk;c=a.h$;Lw(b,c.b,c.a,a.hk);b=a.f$;c=a.rk;d=a.gp;e=a.bj.bk;f=0;while(true){g=0;while(true){DD(b,e,c,g,f,0.5);g=g+Ce(c)|0;if(g>=d.b)break;}f=f+C8(c)|0;if(f>=d.a)break;}Iw(a.bj.bk);}
function AGp(a,b,c){SJ(a,b,c);Bf(a.hk,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function OG(){var a=this;CC.call(a);a.d7=null;a.jz=null;a.e8=null;a.b1=null;a.ew=0;a.hu=null;a.ex=0;a.wo=20;a.xZ=11;a.v7=220;a.iT=null;a.wO=5000;a.gr=0;a.fj=null;}
function AQY(a){var b,c,d,e,f,g,h;b=a.hu;c=a.ex;d=a.iT;Iq(b,c,0,d.a,5000,d.b,20);CJ(a.d7,1);PT(a.hu,a.d7);if(a.b1===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Ch(a.jz,C5(e),0.0,c);}b=CU(a.d7);a.b1=b;CM(b,a.jz);}if(a.ex<=a.ew)while(true){f=a.ew;if(f<=a.ex)break;a.ew=f-20|0;b=a.e8;g=a.gr-1|0;a.gr=g;Ch(b,C5(g),0.0,20.0);HV(a.b1,a.e8,0,a.ew%220|0);Eu(a.e8);}else while(a.ew<(a.ex-20|0)){b=a.e8;g=a.gr+1|0;a.gr=g;Ch(b,C5((g+11|0)-1|0),0.0,20.0);HV(a.b1,a.e8,0,a.ew%220|0);Eu(a.e8);a.ew=a.ew+20|0;}b=Fd(0,0,Ce(a.b1),C8(a.b1));HB(b,
0,0,Ce(a.b1),C8(a.b1));F$(b,a.fj.data[0]);Hw(b,a.fj.data[1]);DD(b,a.d7,a.b1,400,0,1.0);g=a.ex%220|0;f=Y(C8(a.b1)-g|0,200);d=Fd(0,0,Ce(a.b1),f);HB(d,0,g,Ce(a.b1),f);F$(d,a.fj.data[0]);Hw(d,a.fj.data[1]);DD(d,a.d7,a.b1,0,0,1.0);h=Fd(0,f,Ce(a.b1),(C8(a.b1)-f|0)-20|0);HB(h,0,0,Ce(a.b1),(C8(a.b1)-f|0)-20|0);F$(h,a.fj.data[1]);Hw(h,a.fj.data[0]);DD(h,a.d7,a.b1,0,0,1.0);}
function AIB(a,b,c){CA(a.iT,b);}
function AG3(a,b){return 0;}
function RL(a){return 5000-a.iT.a|0;}
function Ir(){Dc.call(this);this.dy=0;}
function Q8(a){var b,c;b=a.bj.bO;c=new P9;c.mm=a;QI(b,c,Ru(a));}
function Mt(a){var b,c,d,e;b=a.dy+1|0;a.dy=b;c=H1(E(Ir));d=new M;O(d);G(G(T(G(d,B(170)),b),B(36)),c);e=N(d);c=a.bj.bO;d=new T8;d.pD=e;Ui(c,e,d,Ru(a));}
function Ru(a){var b;b=new VG;b.ol=a;return b;}
function AOc(a,b,c,d){a:{switch(c){case 0:break;case 2:Mt(a);break a;default:break a;}Q8(a);}return 1;}
function P1(){var a=this;CC.call(a);a.m4=null;a.e2=null;a.k_=null;a.hP=null;}
function AQP(a){var b;b=a.bj.bk;Gw(b,a.m4);DD(a.e2,b,a.k_,0,0,0.5);}
function ALp(a,b,c){var d,e,f;d=a.e2;e=d.P;f=b.b;d=d.y;Bf(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Wn(){var a=this;CQ.call(a);a.gz=null;a.d1=null;a.iZ=null;a.i0=null;a.sE=null;}
function AJz(a,b,c){if(b===0.0)ND(a);}
function ARc(a){var b;E3(a);b=a.bj.bk;I3(a.d1,b);Ik(a.gz);}
function ND(a){WB(a,a.iZ);WB(a,a.i0);a.iZ=MX(a,0.5,0,B(171));a.i0=MX(a,1.0,1,B(172));IQ(a.d1,a.iZ);IQ(a.d1,a.i0);WY(a);}
function WB(a,b){if(b!==null){J6(a.d1,b);JS(b);}}
function MX(a,b,c,d){var e,f,g;e=ABq(a.s);f=new VV;g=new Pl;g.sI=a;g.sJ=e;g.sH=d;TK(f);f.hH=new BZ;f.kX=new Bi;f.rQ=g;f.pA=b;if(c)f=Zh(f,a.s);LJ(e,f);e.ea=FW();return e;}
function ANw(a,b,c){GR(a,b,c);PO(a.d1,b,c);WY(a);}
function WY(a){var b;b=a.s.b7;Fm(a.i0,BW((b.b*2|0)/10|0,(b.a*2|0)/10|0),BW((b.b*7|0)/10|0,(b.a*7|0)/10|0));Fm(a.iZ,BW(b.b/10|0,b.a/10|0),BW((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function AKk(a,b){return Oc(a.d1,b);}
var Rb=F(Ku);
function AJE(a){return Xz(1);}
function ALt(a,b,c){ZY(a,b,c);}
var He=F(0);
function Mg(){var a=this;C.call(a);a.iG=null;a.h6=null;}
function Mq(a,b){var c;c=a.h6;a.h6=b;return c;}
function Jm(){var a=this;Mg.call(a);a.bL=null;a.bY=null;a.fi=0;a.fr=0;}
function JH(a){var b;b=KS(a);if(b==2){if(KS(a.bY)<0)a.bY=M6(a.bY);return OD(a);}if(b!=(-2))return a;if(KS(a.bL)>0)a.bL=OD(a.bL);return M6(a);}
function KS(a){var b,c;b=a.bY;c=b===null?0:b.fi;b=a.bL;return c-(b===null?0:b.fi)|0;}
function M6(a){var b;b=a.bL;a.bL=b.bY;b.bY=a;Ei(a);Ei(b);return b;}
function OD(a){var b;b=a.bY;a.bY=b.bL;b.bL=a;Ei(a);Ei(b);return b;}
function Ei(a){var b,c,d;b=a.bY;c=b===null?0:b.fi;b=a.bL;d=b===null?0:b.fi;a.fi=Ba(c,d)+1|0;a.fr=1;b=a.bL;if(b!==null)a.fr=1+b.fr|0;b=a.bY;if(b!==null)a.fr=a.fr+b.fr|0;}
var ADt=F();
function AFO(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new OZ;c=c.buffer;d.fh=c;d.lQ=new $rt_globals.Int8Array(c);d.jA=new $rt_globals.Uint16Array(c);d.sd=new $rt_globals.Int32Array(c);d.o0=new $rt_globals.Float32Array(c);d.ph=new $rt_globals.Float64Array(c);e=d.fh.byteLength;c=new M;O(c);T(G(c,B(173)),e);CF(N(c));e=b.callToCpp1();c=new M;O(c);T(G(c,B(174)),e);CF(N(c));f=b.callToCpp2();c=new M;O(c);Fj(G(c,B(175)),f);CF(N(c));c=MR(d,b.getC8String());g=new M;O(g);G(G(g,B(176)),c);CF(N(g));c
=M0(d,b.getC16String());g=new M;O(g);G(G(g,B(177)),c);CF(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.fh,h,8));c=ACd(i);g=new M;O(g);G(G(g,B(178)),c);CF(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.fh,h,8));c=AOx(j);g=new M;O(g);G(G(g,B(179)),c);CF(N(g));k=AAp(d,b.getCDoubleArray8(),8);l=ARe(k);c=new M;O(c);G(G(c,B(180)),l);CF(DS(c));l=AQ4(b.getC8String(),B(181),d);c=LL();G(G(c,B(182)),l);CF(DS(c));l=ALg(b.getC16String(),B(183),
d);c=LL();G(G(c,B(184)),l);CF(DS(c));c=AM$(i,d,b.getCIntArray8(),E4([11,22,33,44,55,66,77,88]));g=LL();G(G(g,B(185)),c);CF(DS(g));c=AOP(j,d,b.getCFloatArray8(),100,E4([111,222,333,444,555,666,777,888]));g=LL();G(G(g,B(186)),c);CF(DS(g));b=AO5(k,d,b.getCDoubleArray8(),1000,E4([1111,2222,3333,4444,5555,6666,7777,8888]));c=LL();G(G(c,B(187)),b);CF(DS(c));}
function AOP(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(188);h=0;i=e;a:{while(h<g){if(Dg(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.o0[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(189);}return B(190);}
function AO5(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(188);h=0;i=e;a:{while(h<g){if(Hc(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.ph[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(189);}return B(190);}
function AM$(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(188);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.sd[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(189);}return B(190);}
function AQ4(b,c,d){var e,f,g,h;e=MR(d,b);if(!Bq(c,e))return B(191);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.lQ[h])return B(192);f=f+1|0;}return B(189);}
function ALg(b,c,d){var e,f,g,h;e=M0(d,b);if(!Bq(c,e))return B(191);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.jA[h>>>1|0]&65535))return B(192);f=f+1|0;}return B(189);}
function CF(b){OW(B(2),b);}
function AJ9(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function ACj(){var a=this;C.call(a);a.dY=null;a.dM=null;a.dk=null;a.b8=null;a.Z=null;}
function AM1(a){var b=new ACj();AJ3(b,a);return b;}
function AJ3(a,b){a.dM=ADU();a.dY=b;a.b8=MM(b);}
function Pz(a,b){var c;a.Z=b;c=a.dk;if(c!==null)c.ea=b.T;H3(a.b8,b.T,b.qd);}
function V$(a){I3(a.dM,a.dY.cV);Ik(a.b8);}
function ANQ(a,b){return !Za(a.dM,b)&&!Ks(a.b8,b)?0:1;}
function ARn(a,b,c,d){return !AA0(a.dM,b,c,d)&&!Ji(a.b8,b,c,d)?0:1;}
function AFU(a,b,c){var d;d=Jd(a.b8,b,c);if(d!==null)return d;return X$(a.dM,b,c);}
function AMl(a,b,c){return !ADT(a.dM,b,c)&&!DI(a.b8)?0:1;}
function Va(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.e;h=AM3();i=c.i;j=0;while(j<i){if(f===null){k=(Bp(c,j)).bs;l=RO(EJ(B2(g.f,k)));m=VB(g.fQ);}else{n=f.data;k=n[j].jO.ku;l=!C6(g.fQ,n[j].hU)?B(31):RO(EJ(B2(g.f,k)));m=VB(n[j].hU);}if(I(l)>153){o=B$(l,0,150);n=new M;O(n);G(G(n,o),B(193));l=N(n);}if(I(m)>153){o=B$(m,0,150);n=new M;O(n);G(G(n,o),B(193));m=N(n);}p=C5(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Bp(c,j);}if(f!==null){q=new Um;q.mY=d;q.mX=o;}else{q=new Uo;q.u7=d;q.u2=n;}M3(h,
m,p,l,q);j=j+1|0;}r=QJ(h);if(a.dk!==null)T3(a);c=new QP;n=a.dY;o=new St;o.oi=a;o.oh=d;Z_(c,n,o);VS(c,r);d=a.Z;XF(c,d.T,d.sK);a.dk=ABq(a.dY);d=Zh(c,a.dY);n=a.Z.T;Qs(d,n.lt,n.jW);LJ(a.dk,d);d=a.dk;n=new M;O(n);G(G(n,B(194)),e);IA(d,N(n),a.Z.pa,4.0);d=a.dk;d.ea=a.Z.T;IQ(a.dM,d);d=a.dk;s=(d.S.q.a+Cv(d.bp,2.0)|0)+Cv(a.dY,2.0)|0;i=(c.dJ+c.dL|0)+c.fO|0;t=Cv(c.cv,5.0);e=BW(Et(t,b.b,c.cv.b7.b-i|0),Et(s,b.a,c.cv.b7.a-c.cE.a|0));Tk(c);Zu(c);s=(c.dJ+c.dL|0)+c.fO|0;b=c.cv;i=(b.b7.b-e.b|0)-Cv(b,5.0)|0;b=c.cv;t=(b.b7.a-e.a
|0)-Cv(b,5.0)|0;d=BW(Y(s,i),Y(c.cE.a,t));Fm(a.dk,e,d);FO(a.dY,c);}
function T3(a){J6(a.dM,a.dk);JS(a.dk);a.dk=null;}
function Nn(a,b){var c;c=new Sj;c.th=a;c.tl=b;return c;}
function Ky(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(!DI(a.b8)){g=a.b8;h=b.h;b=new SS;b.W=a;b.bH=c;b.n6=f;b.hE=e;b.iq=d;i=PJ();e=b.bH.e;d=Do(e);e=GV(e);f=b.bH.ej;if(Vz(f,d,e)!==null){j=b.W.Z.T.bf;k=new Rs;k.nF=b;k.nE=h;D3(i,B(195),j,k);}if(KO(f,d,e)!==null){j=b.W.Z.T.bf;k=new Rr;k.oQ=b;k.oS=h;D3(i,B(196),j,k);}if(Nk(f,d,e)!==null){e=b.W.Z.T.bf;f=new Rp;f.mW=b;f.mZ=h;D3(i,B(197),e,f);}e=b.W.Z.T.bf;f=new Rq;f.uO=b;f.uP=h;D3(i,B(198),e,f);if(!b.bH.ff){e=b.W.Z.T.bf;f=new Pp;f.tk=b;D3(i,B(199),e,f);}e=b.W.Z.T.bf;f
=new Pn;f.p1=b;D3(i,B(200),e,f);if(!b.bH.ff&&Xs(Iy(b))){e=b.W.Z.T.bf;f=new Pq;f.sk=b;D3(i,B(201),e,f);}l=b.W.Z.T.bf;d=PJ();m=b.W.Z.T.bf;n=Q(C$,3);o=n.data;k=b.iq;BF(k);e=new SM;e.nL=k;o[0]=D4(B(202),m,e);k=b.W.Z.T.bf;p=b.iq;BF(p);e=new SN;e.rd=p;o[1]=D4(B(203),k,e);e=b.W.Z.T.bf;j=b.iq;BF(j);k=new SL;k.uX=j;o[2]=D4(B(204),e,k);Jx(d,B(205),m,FQ(n),AVc);f=b.W.Z.T.bf;n=Q(C$,2);o=n.data;k=b.hE;BF(k);j=new N9;j.rD=k;o[0]=D4(B(206),f,j);j=b.W.Z.T.bf;k=b.hE;BF(k);p=new N8;p.qs=k;o[1]=D4(B(207),j,p);GF(d,B(208),f,FQ(n));f
=b.W.Z.T.bf;j=new U9;j.q2=b;Jx(d,B(209),f,j,AVc);GF(i,B(210),l,Hm(d));k=b.W.Z.T.bf;d=PJ();GF(d,B(211),b.W.Z.T.bf,AD$(b));f=b.W.Z.T.bf;m=new V5;m.sz=b;D3(d,B(212),f,m);GF(i,B(213),k,Hm(d));F_(g,h,Hm(i),Nn(a,c));}}
function AKP(a,b,c,d){return K$(a.dM,b,c,d);}
function YG(b){var c;c=new VU;c.tD=b;return c;}
var HL=F(0);
function AGS(a){}
function ARu(a){}
function AAq(){var a=this;C.call(a);a.bc=null;a.cz=null;a.cg=null;a.Q=null;a.ih=null;a.ra=0;a.ll=null;a.cM=null;a.w=0;a.x=0;a.gV=0;a.kH=0;a.fW=0;a.iP=null;a.eI=null;a.cx=null;a.U=0;a.e=null;a.ej=null;a.r=null;a.fs=null;a.ep=null;a.lU=null;a.gj=null;a.tF=0;a.rL=0;a.rH=0;a.cH=0;a.cU=0;a.ck=0;a.eW=null;a.ef=null;a.ec=null;a.bm=0;a.cG=0;a.g0=0;a.hQ=0;a.hF=0;a.vL=0;a.vd=0;a.i$=0;a.kB=0;a.dR=null;a.hB=0;a.hA=0;a.eH=null;a.ff=0;a.bI=0;a.h5=null;a.hT=null;a.vq=null;a.gJ=null;a.nq=null;a.uZ=null;a.kD=0;a.q9=null;a.eK
=Em;a.s8=null;a.tx=null;}
function ADp(a,b){var c=new AAq();AJx(c,a,b);return c;}
function AJx(a,b,c){var d,e,f,g;a.bc=new Bi;a.cz=new Bi;a.ra=0;a.ll=Q(Bh,10);a.cM=AMi();a.fW=16;a.iP=B(121);a.cx=Q(K4,4);d=new It;e=new HK;e.d9=Gv();e.et=Gv();e.fg=Cm();e.C=MN(B(31));e.fz=0;e.cs=0;e.c_=T5(e);d.f=e;d.iO=B(143);d.fQ=null;a.e=d;f=new VR;f.mR=CH(Q(Md,0));f.su=CH(Q(Md,0));f.sR=CH(Q(My,0));f.oj=CH(Q(P2,0));f.me=CH(Q(GS,0));f.re=CH(Q(Rj,0));a.ej=f;a.r=AMO();e=new Ni;e.eD=Q(Jf,16);e.eE=0;e.dd=(-1);a.fs=e;a.gj=Q(EU,0);a.rH=100;a.eW=BW(1,0);a.ef=Hl();a.ec=Hl();a.bm=0;a.cG=0;a.g0=0;a.hF=1;a.i$=1;a.kB=
3;a.dR=ABt();a.eH=B(214);a.ff=0;a.bI=0;a.h5=null;a.hT=Cm();e=Iu();BF(e);f=new UK;f.xN=e;a.gJ=f;a.q9=new BZ;e=new UJ;e.qY=a;a.s8=e;e=new UF;e.nn=a;a.tx=e;a.cg=b;a.Q=b.cV;a.ih=c;g=a.ll.data;b=new UE;b.s7=a;g[0]=b;b=new UH;b.rl=a;g[1]=b;b=new UG;b.nK=a;g[2]=b;b=new U7;b.tt=a;g[3]=b;b=new U6;b.ql=a;g[4]=b;AEN();a.hQ=AVd===AVe?0:1;}
function LB(a,b,c,d){CA(a.bc,b);CA(a.cz,c);RU(a,b,c,d);}
function Qw(a,b,c){a.nq=b;a.uZ=c;}
function RU(a,b,c,d){var e;a.cH=B_(a.rH,d);a.cU=B_(1.0,d);a.ck=B_(10.0,d);if(!a.bI)CA(a.cg.dQ,a.bc);else Bf(a.cg.dQ,(b.b+c.b|0)-Lj(a)|0,b.a);Vk(a.dR,a.cg.dQ,Lj(a),c.a,d);b=a.cM;e=B_(2.0,d);b.dN.y.b=e;TX(a,a.iP,a.fW);VD(a);}
function AHJ(a){a.kH=1;LD(a);}
function AGq(a){a.kH=0;}
function LD(a){Sm(a.cM,Jn(Ck(a)));}
function Ld(a,b){var c,d;a.ep=b;c=a.cM;d=b.cu.sZ;BI(c.dN.bT,d);c=a.ef;d=b.cu;Gc(c,d.lJ,d.lo);c=a.ec;b=b.cu;Gc(c,b.lJ,b.lo);}
function XX(a){K8(a,a.eI.lL,a.fW+1|0);}
function WE(a){var b;b=a.fW;if(b<=7)return;K8(a,a.eI.lL,b-1|0);}
function XY(a,b){K8(a,b,a.fW);}
function K8(a,b,c){if(a.cg.bM!==0.0){TX(a,b,c);F1(Ck(a));}a.fW=c;a.iP=b;}
function TX(a,b,c){var d,e,f,g,h,i;d=B_(c,a.cg.bM);e=a.eI;f=e!==null?e.oD:0;if(!(d==f&&C6(b,a.iP))){NR(a.dR);g=a.gj.data;c=g.length;f=0;while(f<c){Qh(g[f]);f=f+1|0;}g=a.e.f.C.data;c=g.length;f=0;while(f<c){Ee(g[f]);f=f+1|0;}g=a.cx.data;c=Hg(0,0);e=a.Q;h=d;g[c]=GN(e,b,h,400,0);a.cx.data[Hg(0,1)]=GN(a.Q,b,h,400,2);a.cx.data[Hg(1,0)]=GN(a.Q,b,h,700,0);a.cx.data[Hg(1,1)]=GN(a.Q,b,h,700,2);e=a.cx.data[Hg(0,0)];a.eI=e;c=E0(e);a.U=Dg(c*1.25);a.cM.dN.y.a=E0(a.eI);a.lU=CG(a.lU,CK(a.Q,1024,a.U));f=a.U;i=SE(a.cM);e=new M;O(e);b
=G(G(e,B(215)),b);BA(b,32);T(G(T(G(T(G(T(b,d),B(216)),c),B(131)),f),B(217)),i);$rt_globals.console.info($rt_ustr(N(e)));if(AVf){c=La(a.eI,a.U);b=new M;O(b);T(G(b,B(218)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.gV=GW(Fs(a),a.x,a.Q.cB,a.cx);GO(a);VD(a);}}
function U0(a){return Z(Cw(a.e.f)+5|0,a.U);}
function Is(a){return Ba(U0(a)-a.cz.a|0,0);}
function Kh(a){return Ba(a.g0-Df(a)|0,0);}
function Df(a){var b;b=!a.bI?0:C1(a)+a.ck|0;return (a.cz.b-a.cH|0)-b|0;}
function Lj(a){return a.bI?a.cH:a.cH-a.ck|0;}
function DH(a){return a.cz.a;}
function KX(a,b){var c,d,e;c=a.e.f;d=c.fz;e=c.cs;d=d!=e&&b-c.pg>0.03125?1:0;if(d&&a.kD!=e){a.kD=e;SH(a);}d=Hx((a.bm+a.vL|0)-a.vd|0,Is(a));e=a.bm==d?0:1;if(e)E7(a,d);return !ST(a.cM,b)&&!e&&!a.ra?0:1;}
function E7(a,b){var c,d;c=Hx(b,Is(a));if(c!=a.bm){a.bm=c;d=a.uZ;if(d!==null)d.hJ(c);}}
function Ic(a,b){var c,d;c=Hx(b,Kh(a));if(c!=a.cG){a.cG=c;d=a.nq;if(d!==null)d.hJ(c);}}
function L8(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=Iz(a.cz.a,a.U)+7|0;c=a.gj;if(c.data.length<b)a.gj=AAa(b,c,a.tF,a.rL,a.e.f);CJ(a.Q,0);d=a.Q;e=a.bc;f=a.cz;Lw(d,e.b,e.a,f);g=(a.U-SE(a.cM)|0)/2|0;h=(a.gV-(P$(a.cM)/2|0)|0)-a.cG|0;i=!a.bI?a.cH:(a.cU+a.ck|0)+C1(a)|0;PH(a.cM,i+h|0,(g+Z(a.w,a.U)|0)-a.bm|0);j=Cw(a.e.f);ZA(a);k=K2(a);l=UX(a);a.tF=k;a.rL=l;m=a.cg.dQ;Bf(m,Df(a),a.U);n=!a.bI?a.bc.b+a.cH|0:((a.bc.b+a.cU|0)+a.ck|0)+C1(a)|0;o=k;while(o<=l&&o<j){e=B2(a.e.f,o);p=QZ(a,o);ABm(p,e,a.lU,a.cx,
a.Q,a.U,Df(a),a.cG);q=p.bV;a.g0=Ba(a.g0,EZ(e)+(40.0*a.cg.bM|0)|0);r=Z(a.U,o)-a.bm|0;i=a.bc.a+r|0;f=a.Q;s=a.q9;t=!a.hQ?0.0:0.5;r=Df(a);u=a.U;v=a.cG;w=a.ep;d=ACC(a.r,o);if(d!==null){if(d.a==(-1))d.a=q.R;d.b=GW(q,d.b,a.Q.cB,a.cx);d.a=GW(q,d.a,a.Q.cB,a.cx);}AAv(p,i,n,f,s,m,t,r,u,v,w,d,a.h5,a.hT,a.w!=o?0:1);o=o+1|0;}o=k;while(o<=l&&o<j&&a.i$){d=QZ(a,o);r=Z(a.U,o)-a.bm|0;u=ZE(a.r,o);e=a.ep.cu;f=e.n2;v=a.w!=o?0:1;if(u)f=e.kz;else if(v)f=e.iL;ABU(d,a.Q,n,a.bc.a+r|0,a.U,m,a.cG,Df(a),f);if(v){a.eW.b=a.bI?a.ck+C1(a)|0
:a.ck-Cv(a.cg,3.0)|0;d=a.eW;d.a=a.U;x=a.bI?0:(a.cH-a.ck|0)+a.cU|0;e=a.Q;f=a.bc;By(e,f.b+x|0,f.a+r|0,d,a.ep.cu.iL);}o=o+1|0;}if(a.kH&&h>=(( -P$(a.cM)|0)/2|0)){e=a.cM;d=a.cz;if(Y7(e.dN.P,0,0,d))U3(a.cM,a.Q,a.bc);}if(a.hF){y=Y(l+1|0,j);ABr(a,Z(a.U,y)-a.bm|0);}AAE(a,k,l);AB6(a);ACM(a);Iw(a.Q);}
function AAE(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cz.a;e=Y(d,Z(Cw(a.e.f),a.U)-a.bm|0);f=a.dR;g=a.bm;h=a.w;i=a.Q;j=a.ep.p9;JY(f,i,b,d);XB(f,b);Qt(f,g,e,j,i);if(e<d){k=f.fL;By(i,k.b,k.a+e|0,BW(f.e4.b,d-e|0),j.g6);}if(b<=h&&h<=c){c=h/20|0;k=f.cw;k=Bp(k,c%k.i|0);l=f.fL;c=Z(f.cw.i,f.ic);b=k.eu.a;d=((k.iM.a-(g%c|0)|0)+c|0)%c|0;if((d+b|0)>c)d= -(g%C8(k.b0)|0)|0;b=h%k.dH|0;e=k.er;d=d+Z(b,e)|0;if(d<( -e|0))d=d+c|0;Bf(k.gb,k.eu.b,e);m=k.fE;b=h%k.dH|0;c=k.er;CE(m,0.0,Z(b,c),k.eu.b,c);IY(k,i,d,l,j.om,j.t4);}}
function K2(a){return Y(a.bm/a.U|0,Cw(a.e.f)-1|0);}
function UX(a){return Y(((a.bm+DH(a)|0)-1|0)/a.U|0,Cw(a.e.f)-1|0);}
function VD(a){TD(a.dR,a.cx.data[0],a.U,a.Q);JY(a.dR,a.Q,K2(a),DH(a));}
function QZ(a,b){var c;c=a.gj.data;return c[b%c.length|0];}
function AD1(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dq(a.r))Db(a,a.eH);else{b=D2(a.r);c=Fx(a.r);d=c.J;e=b.J;f=(d-e|0)+1|0;g=BC(f);h=g.data;i=Q(Bu,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.eH;e=e+1|0;k=f;}l=ES(a.w,a.x);m=new PP;m.m0=a;Pd(a,g,0,0,i,l,m);b.ba=b.ba+I(a.eH)|0;c.ba=c.ba+I(a.eH)|0;LV(a,a.x+I(a.eH)|0,0);DX(a);}return 1;}
function ABO(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dq(a.r)){b=B2(a.e.f,a.w);if(b.o.data.length>0){c=RM(a,b);if(c===null)return 1;d=a.e.f;e=a.w;f=ES(e,a.x);d.cs=d.cs+1|0;g=d.fg;h=Q(GY,1);h.data[0]=AER(e,0,1,c,f.bs,f.bE);B0(g,h);JE(d,e,0,1,c);FR(b,0,I(c));LV(a,a.x-I(c)|0,0);}}else{f=D2(a.r);c=Fx(a.r);i=c.J;j=f.J;i=(i-j|0)+1|0;k=BC(i);h=k.data;l=Q(Bu,i);m=l.data;e=a.x;n=a.w;o=0;while(j<=c.J){b=B2(a.e.f,j);if(b.o.data.length>0){b=RM(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=L7(k,o);h=Dl(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.J)f.ba=Ba(0,f.ba-I(b)|0);if(j==c.J){c.ba=Ba(0,c.ba-I(b)|0);LV(a,a.x-I(b)|0,0);}i=i+1|0;}f=ES(n,e);b=new MS;b.nH=a;Pd(a,p,0,1,h,f,b);}DX(a);return 1;}
function RM(a,b){var c,d,e,f;c=Et(0,I(a.eH),W8(b));if(!c)b=null;else{b=B(56);if(c<0){b=new BD;V(b);J(b);}if(c!=1){d=b.bX.data.length;if(d&&c){e=BM(Z(d,c));d=0;f=0;while(f<c){PA(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=Me(e);}else b=AUe;}}return b;}
function Pd(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BC(i);k=ATL(i).data;Hr(j,c);c=0;l=k.length;if(c>l){f=new BD;V(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.f;o.cs=o.cs+1|0;p=Q(GY,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AER(h[m],n[m],k[m],b[m],f.bs,f.bE);m=m+1|0;}B0(o.fg,p);c=0;while(c<i){b=e.data;JE(o,h[c],n[c],k[c],b[c]);g.lS(FX(h[c]),b[c]);c=c+1|0;}}
function ADl(a){var b,c,d,e,f,g,h,i;if(Dq(a.r))GD(a);Ee(B2(a.e.f,a.w));b=a.e.f;c=a.w;d=a.x;e=b.C;f=e.data;g=f[c];e=Dl(e,f.length+1|0);f=e.data;b.C=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DO(Q(B7,0));b.C.data[c+1|0]=g;}else if(d==g.R){f[c]=g;f[c+1|0]=DO(Q(B7,0));}else{f=(ID(g,d)).data;e=b.C.data;e[c]=f[0];e[c+1|0]=f[1];}Gs(b,c,d,0,B(219));DX(a);return CB(a,a.w+1|0,0,0);}
function AC2(a){if(Dq(a.r))GD(a);else O5(a.e.f,a.w,a.x);GO(a);DX(a);return 1;}
function Yk(a){var b,c,d;if(Dq(a.r)){GD(a);return 1;}b=a.x;if(!b&&!a.w)return 1;if(b){c=a.w;b=b-1|0;O5(a.e.f,c,b);}else{c=a.w-1|0;b=Fk(a.e.f,c);d=a.e.f;KZ(d,c);Gs(d,c,Fk(d,c),1,B(219));}DX(a);return CB(a,c,b,0);}
function Db(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.ff)return 0;if(Dq(a.r))GD(a);c=LS(U8(b,B(220),B(31)),B(219),(-1));d=c.data;b=a.e.f;e=a.w;f=a.x;XR(b,e,f,c);g=d.length;if(!g)h=AUe;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BM(i+Z(g-1|0,I(B(219)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(219))){m=l+1|0;c[l]=L(B(219),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Me(k);}Gs(b,e,f,0,h);e=a.w;m=(e+g|0)-1|0;CB(a,
m,m!=e?I(d[g-1|0]):a.x+I(d[0])|0,0);E6(a);DX(a);return 1;}
function GD(a){var b,c,d;b=D2(a.r);c=a.e.f;d=a.r;Ts(c,d,V2(c,d));CB(a,b.J,b.ba,0);E6(a);DX(a);}
function E6(a){var b;b=a.r;b.c0=0;B4(b.bP,a.w,a.x);B4(a.r.bF,a.w,a.x);}
function C1(a){return a.eI.ly|0;}
function ABr(a,b){var c,d,e;c=a.cz.a;if(b<c){d=a.cg.dQ;d.a=c-b|0;d.b=!a.bI?Df(a):Df(a)+a.cU|0;e=!a.bI?a.bc.b+a.cH|0:(a.bc.b+a.ck|0)+C1(a)|0;By(a.Q,e,a.bc.a+b|0,d,a.ep.cu.gt);}}
function AB6(a){var b;b=a.bI?a.bc.b+C1(a)|0:a.bc.b+a.cz.b|0;Iq(a.ef,a.bm,a.bc.a,DH(a),U0(a),b,C1(a));b=!a.bI?a.bc.b+a.cH|0:((a.bc.b+a.cU|0)+a.ck|0)+C1(a)|0;Mm(a.ec,a.cG,b,Df(a),a.g0,a.bc.a+DH(a)|0,C1(a));}
function ACM(a){var b,c;b=PF(a.ef);c=PF(a.ec);if(!(!b&&!c)){CJ(a.Q,1);if(b)FT(a.ef,a.Q);if(c)FT(a.ec,a.Q);if(b)Gb(a.ef,a.Q);if(c)Gb(a.ec,a.Q);}}
function ZA(a){var b,c,d,e;b=a.eW;c=a.cz;b.a=c.a;b.b=a.cU;d=!a.bI?a.cH-a.ck|0:(c.b-Lj(a)|0)-a.cU|0;b=a.Q;c=a.bc;By(b,c.b+d|0,c.a,a.eW,a.ep.cu.uN);a.eW.b=!a.bI?a.ck-a.cU|0:a.ck+C1(a)|0;e=a.bI?0:(a.cH-a.ck|0)+a.cU|0;b=a.Q;c=a.bc;By(b,c.b+e|0,c.a,a.eW,a.ep.cu.gt);}
function Hx(b,c){return Y(Ba(0,b),c);}
function HD(a,b){var c,d,e,f,g;b=b.data;a.hB=1;a.hA=1;c=D6(b[0]);d=FG(b[1]);e=(D6(b[2])).data[0];a.e.f=ABw(c,d);Wa(a,AC7(e));Go(Ck(a),AVg);F1(Ck(a));f=Kp(FC(),a.eK);g=new M;O(g);G(HQ(G(g,B(221)),f),B(222));$rt_globals.console.info($rt_ustr(N(g)));}
function Wa(a,b){var c,d;c=Do(a.e);if(!C6(c,b)){d=new M;O(d);G(G(G(G(d,B(223)),c),B(224)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.iO=b;}}
function Ck(a){return a.cg.ix;}
function KE(a,b){var c,d,e,f,g,h,i;c=Ey(b);d=new M;O(d);G(G(d,B(225)),c);$rt_globals.console.info($rt_ustr(N(d)));Nq(Ck(a),Ey(b));CB(a,0,0,0);a.eK=FC();a.hB=0;a.hA=0;e=new It;f=Q(Bu,1);f.data[0]=B(31);Qm(e,f,null,AQt(B(31),B(31),Ey(b),null));a.e=e;CB(a,0,0,0);c=Ey(b);g=FY(c,46,I(c)-1|0);if(g!=(-1))c=Dk(c,g);h=!Bq(c,B(226))?5120:10240;c=new Rt;c.nC=a;c.nB=h;c.nA=b;i=b.eZ;if(i!==null)Jz(c,Jy(b,i.size));else{i=b.gv.getFile();d=new Tv;d.lY=b;d.lZ=c;b=new Ty;b.t8=c;i.then(Bm(d,"f"),Bm(b,"f"));}}
function Hu(a,b,c,d,e){if(Hn(a,e))return 1;if(c&&d)return 1;if(c)E7(a,a.bm+((Z(b,a.U)*12|0)/10|0)|0);else if(!d){II(a,a.w+b|0,e);Tm(a);}return 1;}
function T9(a,b,c,d){var e,f,g;if(Hn(a,d))return 1;e=Fs(a);if(!c)f=a.x+b|0;else if(b>=0)f=GP(e,a.x);else{f=a.x;if(!f)f=(-1);else{c=Im(e,f);if(c>0&&e.dn.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.dn.data[c-1|0];}}if(f>e.R){if((a.w+1|0)<Cw(a.e.f))CB(a,a.w+1|0,0,d);}else if(f>=0)Dr(a,f,d);else{b=a.w;if(b>0){g=(B2(a.e.f,b-1|0)).R;CB(a,a.w-1|0,g,d);}}Pr(a);return 1;}
function Hn(a,b){if(Dq(a.r)&&!b){E6(a);GO(a);return 1;}if(!(b&&Dq(a.r)))E6(a);return 0;}
function CB(a,b,c,d){a.x=c;return II(a,b,d);}
function II(a,b,c){a.w=Et(0,b,Cw(a.e.f)-1|0);return Dr(a,a.x,c);}
function Dr(a,b,c){a.x=Et(0,b,(Fs(a)).R);a.gV=a.cg.bM===0.0?0:GW(Fs(a),a.x,a.Q.cB,a.cx);LD(a);GO(a);if(c)a.r.c0=1;KF(a.r,a.w,a.x);a.r.c0=0;return 1;}
function LV(a,b,c){var d;d=Rx(a.r);Dr(a,b,c);a.r=d;}
function GO(a){Tm(a);Pr(a);}
function Tm(a){var b,c,d,e,f;b=a.bm;c=b+DH(a)|0;d=a.w;e=a.U;d=Z(d,e);f=d+e|0;if(d<(b+e|0))E7(a,d-e|0);else if(f>(c-e|0))E7(a,(f-DH(a)|0)+a.U|0);}
function Pr(a){var b,c,d,e,f;b=Dg(a.cg.bM*30.0);c=a.cG;d=c+Df(a)|0;e=a.gV;f=e+b|0;if(e<(c+b|0))Ic(a,e-b|0);else if(f>(d-b|0))Ic(a,(f-Df(a)|0)+b|0);}
function Tu(a,b,c){var d,e,f,g,h,i,j,k,l;U4(a);d=a.e.f;e=DN(d.d9,c);if(e!==null)a.h5=Kb(d,e);if(e!==null)c=e;a:{f=DN(d.et,c);if(f!==null){c=BT(f);while(true){if(!B5(c))break a;g=BY(c);B0(a.hT,Kb(d,g));}}}h=b.bs;i=b.bE;b=a.ej;c=Do(a.e);d=GV(a.e);j=(Co(b.oj)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.tH(c,d)){c=b.xb;break b;}l=l+1|0;}c=null;}if(c!==null){d=a.e;b=new MH;b.vt=a;b.vu=d;b.vw=h;b.vy=i;c.r3(d,h,i,b,a.gJ);}}
function Hv(a,b){var c;CB(a,b.bs,b.bE,0);c=GP(Fs(a),a.x);B4(a.r.bF,a.w,c);B4(a.r.bP,a.w,a.x);}
function ET(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.bc;e=c-d.b|0;f=Et(0,((b.a-d.a|0)+a.bm|0)/a.U|0,Cw(a.e.f)-1|0);g=!a.bI?a.cH:(a.cU+a.ck|0)+C1(a)|0;h=Ba(0,(e-g|0)+a.cG|0);b=B2(a.e.f,f);d=a.Q.cB;i=a.cx;if(!(b.d_!==null&&!b.fG))Lc(b,d,i);j=b.d_;e=b.o.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.R;else{c=TW(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.o.data.length)k=b.R;else{j=WH(b,d,i,c);k=0;e=0;while(e<c){k=k+I(b.o.data[e].t)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(AVh){d=new M;O(d);T(G(T(G(T(G(d,B(227)),e),B(228)),h),B(229)),c);$rt_globals.console.info($rt_ustr(N(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return ES(f,k);}
function Tj(a,b){var c;c=b.bs;a.w=c;a.x=b.bE;a.gV=GW(B2(a.e.f,c),a.x,a.Q.cB,a.cx);LD(a);}
function Fs(a){return B2(a.e.f,a.w);}
function JC(a,b,c){var d,e;d=Dg((a.U*4|0)*c/150.0);e=Dg(b);if(d)E7(a,a.bm+d|0);if(e)Ic(a,a.cG+e|0);return 1;}
function UR(a,b,c){a.r.c0=0;return 1;}
function UZ(a,b,c){var d,e,f;if(c)return null;d=Fe(a.ef,b.h,a.s8,1);if(d!==null)return d;d=Fe(a.ec,b.h,a.tx,0);if(d!==null)return d;IS(a);e=ET(a,b.h);f=HI(a.e.f,e.bs,e.bE);Tj(a,e);Tu(a,e,f);if(!b.bC){b=a.r;if(!b.c0)B4(b.bP,a.w,a.x);}b=a.r;b.c0=1;KF(b,a.w,a.x);b=new Tg;b.uc=a;return b;}
function QD(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:if(b.cf){b=b.h;e=ET(a,b);f=HI(a.e.f,e.bs,e.bE);g=OB(a,f);h=KO(a.ej,Do(a.e),GV(a.e));if(h!==null){f=a.e;c=e.bs;d=e.bE;e=new Sd;e.vV=a;e.vW=b;e.vU=g;h.r3(f,c,d,e,a.gJ);}else{e=DN(a.e.f.d9,f);if(e!==null){Hv(a,e);c=1;}else{e=DN(a.e.f.et,f);if(e!==null&&!Eb(e)){if(e.i!=1){Va(a.ih,b,e,a,g);c=1;}else{Hv(a,Bp(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(ET(a,b.h)).bs;e=B2(a.e.f,c);c=GU(e,a.x);d=GP(e,a.x);b=UQ(e,c);if((d-1|0)==e.R){B4(a.r.bP,a.w,W8(e));B4(a.r.bF,
a.w,e.R);}else{if(b!==null){b=b.t;i=0;c:{while(true){j=b.bX.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.x;if(c==i){c=GU(e,c-1|0);d=GP(e,c);}else{if(d!=i){PZ(a.r,a.w);break b;}c=GU(e,d+1|0);d=GP(e,c);}}}B4(a.r.bP,a.w,c);a.r.c0=1;CB(a,a.w,d,0);a.r.c0=0;IS(a);}}break a;case 3:break;default:break a;}PZ(a.r,a.w);Xg(a.fs);IS(a);}}return 1;}
function Pi(a,b){var c,d,e,f,g,h,i,j,k;c=a.cg.cA;if(Fp(a.ef,b.h,c))return 1;if(Fp(a.ec,b.h,c))return 1;d=a.dR;if(F4(b.h,d.fL,d.e4)&&Hb(c)?1:0)return 1;e=b.h;f=!a.bI?a.bc.b+a.cH|0:((a.bc.b+a.ck|0)+a.cU|0)+C1(a)|0;a:{g=a.bc.a;h=Df(a);i=DH(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Hb(c);if(b.cf){e=ET(a,b.h);e.bE=GU(B2(a.e.f,e.bs),e.bE);b=a.e.f;if(!NH(b.d9,e)&&!NH(b.et,e)?0:1)return DB(c,B(142));}return DB(c,B(143));}
function AMA(a,b){var c,d,e,f;c=b.cf;if(c&&b.bg==65){c=Cw(a.e.f)-1|0;d=Fk(a.e.f,c);B4(a.r.bP,0,0);B4(a.r.bF,Cw(a.e.f)-1|0,d);return 1;}if(c&&b.bg==80){J4(a);return 1;}if(!a.ff&&c&&b.bg==90){if(Dq(a.r))E6(a);b=a.e.f;b.cs=b.cs+1|0;e=b.fg;d=e.i;if(!d)e=null;else{f=(El(e,d-1|0)).data;e=Ti(b,f[0]);c=1;while(c<f.length){Ti(b,f[c]);c=c+1|0;}}if(e!==null){CB(a,e.b,e.a,0);DX(a);}return 1;}if(!c&&!b.cX){if(Bq(b.dE,B(230))){Db(a,B(231));Dr(a,a.x-1|0,0);c=1;}else if(Bq(b.dE,B(232))){Db(a,B(233));Dr(a,a.x-1|0,0);c=1;}else if
(Bq(b.dE,B(42))){Db(a,B(234));Dr(a,a.x-1|0,0);c=1;}else if(Bq(b.dE,B(235))){Db(a,B(236));Dr(a,a.x-1|0,0);c=1;}else if(Bq(b.dE,B(237))){Db(a,B(238));Dr(a,a.x-1|0,0);c=1;}else if(!Bq(b.dE,B(239)))c=0;else{Db(a,B(240));Dr(a,a.x-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cX&&!b.cf)){d=b.bg;if(d>=48&&d<=57){c=d-48|0;e=a.ll.data[c];if(e!==null)e.p();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bg){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c=1;}if(c)return 1;if
(AAF(a,b))return 1;if(a.ff)c=0;else c:{switch(b.bg){case 8:break;case 9:c=!b.bC?AD1(a):ABO(a);break c;case 13:c=ADl(a);break c;case 46:c=AC2(a);break c;default:c=0;break c;}c=Yk(a);}if(c)return 1;if(b.cf&&b.bg==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AI5(b.bg)&&b.bg!=27){if(!b.cf&&!b.cX&&!b.iz)return I(b.dE)>0&&Db(a,b.dE)?1:0;return 0;}return 0;}
function WF(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bq(B(134),Do(a.e))){b=Ck(a);c=new To;c.m5=a;d=Q(C,3);e=d.data;e[0]=EE(a.e.f);f=K2(a);g=UX(a);h=Ba(0,f-100|0);f=Y(Cw(a.e.f)-1|0,g+100|0);i=BC(3);j=i.data;j[0]=F7(a.e.f,h);k=a.e.f;l=0;f=Y(f+1|0,k.C.data.length);m=0;while(m<f){l=l+Fk(k,m)|0;if(m!=(k.C.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.f.c_;k=Cm();Wp(n,n.cR,k);i=BC(3*k.i|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bp(k,m);h=p+1|0;o[p]=q.bN;l=h+1|0;o[h]=q.bS;p=l+1|0;o[l]=q.fb;m=m+1|
0;}e[2]=i;CO(b,c,B(241),d);}}
function J4(a){var b,c,d,e;b=AA8(Do(a.e));if(b!==null){a.eK=FC();c=Ck(a);d=new QX;d.si=a;e=Q(C,1);e.data[0]=EE(a.e.f);CO(c,d,b,e);}}
function SH(a){var b,c,d,e,f,g,h;b=a.e.f.c_;c=O7(b,b.cR);if(c===null)return;if(Bq(B(143),Do(a.e)))Pe(a.e.f);a:{d=E4([CX(c),C9(c),c.b4.fb]);e=EE(a.e.f);f=BC(1);g=Do(a.e);h=(-1);switch(Lg(g)){case 3401:if(!Bq(g,B(242)))break a;h=3;break a;case 98723:if(!Bq(g,B(243)))break a;h=2;break a;case 3254818:if(!Bq(g,B(134)))break a;h=1;break a;case 3556653:if(!Bq(g,B(143)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Ck(a);c=new SP;c.uC=a;CO(b,c,B(244),H(C,[e,f,d]));}
function GA(a,b,c){var d,e,f,g,h,i;if(c&&a.ff)return 0;d=D2(a.r);e=d.J;if(Dq(a.r)){f=a.e.f;g=a.r;h=V2(f,g);if(c)Ts(f,g,h);if(c){CB(a,d.J,d.ba,0);E6(a);DX(a);}}else{h=Fb(EJ(a.e.f.C.data[e]),B(219));i=Y(Cw(a.e.f)-1|0,e);B4(a.r.bF,i,0);if(e>=(Cw(a.e.f)-1|0))B4(a.r.bF,i,Fk(a.e.f,i));else B4(a.r.bP,i+1|0,0);if(c)GD(a);else CB(a,e,0,0);}b.n(h);return 1;}
function AAF(a,b){var c,d,e,f;a:{switch(b.bg){case 33:c=b.cf?II(a,Iz(a.bm,a.U),b.bC):Hu(a,2-Wc(DH(a),a.U)|0,0,b.cX,b.bC);break a;case 34:c=!b.cf?Hu(a,Wc(DH(a),a.U)-2|0,0,b.cX,b.bC):II(a,((a.bm+DH(a)|0)/a.U|0)-1|0,b.bC);break a;case 35:if(!Hn(a,b.bC)&&!Dr(a,(Fs(a)).R,b.bC)){c=0;break a;}c=1;break a;case 36:if(!Hn(a,b.bC)&&!Dr(a,0,b.bC)){c=0;break a;}c=1;break a;case 37:c=b.cf;if(c&&b.cX){IS(a);d=a.fs;e=d.dd;if(e<=0)d=null;else{f=d.eD.data;c=e-1|0;d.dd=c;d=f[c];}if(d===null)c=1;else{CB(a,IZ(d),LH(d),0);a.r=Rx(d.lC);c
=1;}break a;}c=T9(a,(-1),c,b.bC);break a;case 38:c=Hu(a,(-1),b.cf,b.cX,b.bC);break a;case 39:c=b.cf;if(c&&b.cX){d=a.fs;c=d.dd;if(c==(d.eE-1|0))d=null;else{f=d.eD.data;c=c+1|0;d.dd=c;d=f[c];}if(d===null)c=1;else{CB(a,IZ(d),LH(d),0);a.r=Rx(d.lC);c=1;}break a;}c=T9(a,1,c,b.bC);break a;case 40:c=Hu(a,1,b.cf,b.cX,b.bC);break a;default:}c=0;}if(c&&b.bC)B4(a.r.bF,a.w,a.x);if(c)Tu(a,ES(a.w,a.x),HI(a.e.f,a.w,a.x));return c;}
function IS(a){var b,c,d,e,f,g,h;b=a.fs;c=b.dd;b=c<0?null:b.eD.data[c];if(b!==null&&a.w==IZ(b)&&a.x==LH(b))return;d=a.fs;b=new Jf;c=a.w;e=a.x;f=a.r;b.kV=ES(c,e);g=Rx(f);b.lC=g;g.c0=0;e=d.dd;h=d.eE;if(e==(h-1|0))MO(d,b);else{c=e+1|0;while(c<h){Xg(d);c=c+1|0;}MO(d,b);}d.dd=d.dd+1|0;}
function DX(a){a.e.f.pg=Jn(Ck(a));}
function U4(a){a.h5=null;Hp(a.hT);}
function AA8(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(Lg(b)){case 3401:if(!Bq(b,B(242)))break a;c=2;break a;case 98723:if(!Bq(b,B(243)))break a;c=1;break a;case 3254818:if(!Bq(b,B(134)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(245);break b;case 2:b=B(246);break b;default:b=null;break b;}b=B(247);}}return b;}
function OB(a,b){var c;c=Kb(a.e.f,b);if(c===null)return B(31);return c.t;}
function DF(a,b){return F4(b,a.bc,a.cz);}
var HJ=F(0);
function QO(){C.call(this);this.sx=null;}
function AJq(a,b){var c;c=a.sx;We(c,c.N,c.M);}
function QM(){C.call(this);this.t3=null;}
function ALw(a,b){var c;c=a.t3;We(c,c.M,c.N);}
function QN(){C.call(this);this.vZ=null;}
function AEB(a,b){return b.bg!=121?0:1;}
function HE(){var a=this;C.call(a);a.jE=null;a.or=null;a.l3=null;}
function AVi(a,b){var c=new HE();R8(c,a,b);return c;}
function AVj(a,b,c){var d=new HE();Vm(d,a,b,c);return d;}
function R8(a,b,c){Vm(a,b,null,c);}
function Vm(a,b,c,d){a.jE=b.bO;a.or=c;a.l3=d;}
function AOq(a,b){var c,d;if(b.cf&&b.bg==79){c=a.or;if(c!==null&&b.bC)VZ(a.jE,c);else LN(a.jE,a.l3);d=1;}else d=0;return d;}
function QK(){C.call(this);this.rN=null;}
function AEW(a,b){var c,d,e,f,g,h;c=a.rN;d=DW(c.s,c.N)?c.N:!DW(c.s,c.M)?null:c.M;if(d!==null)KE(d,b);b=c.N.e;d=c.M.e;e=EE(b.f);f=EE(d.f);g=ADM(b.f);h=ADM(d.f);b=c.bj.bO;d=new Or;d.ws=c;CO(b,d,B(248),H(C,[e,g,f,h]));}
function QL(){C.call(this);this.mk=null;}
function ALa(a,b){var c,d,e,f;b=b;c=a.mk;if(DW(c.s,c.N)){d=c.ek;e=c.N;f=new RP;f.oU=c;Ky(d,b,e,c,c,f);}if(DW(c.s,c.M)){d=c.ek;e=c.M;f=new RQ;f.uA=c;Ky(d,b,e,c,c,f);}return 1;}
function R1(){C.call(this);this.od=null;}
function ALD(a,b){return ADQ(a.od,b);}
function R5(){C.call(this);this.t1=null;}
function AQu(a,b){KE(a.t1,b);}
function R4(){C.call(this);this.l2=null;}
function ALE(a,b,c){return GA(a.l2,b,c);}
function R3(){C.call(this);this.pf=null;}
function AQd(a){var b,c;b=a.pf.cJ;BF(b);c=new XI;c.m$=b;return c;}
function R2(){C.call(this);this.uS=null;}
function APE(a,b,c,d){return JC(a.uS.cJ,c,d);}
function R6(){C.call(this);this.mN=null;}
function AIN(a,b){b=b;return YZ(a.mN,b);}
function HP(){var a=this;C.call(a);a.cu=null;a.T=null;a.us=null;a.p9=null;a.pa=null;a.qd=null;a.sK=null;}
function AVk(a,b,c,d){var e=new HP();JU(e,a,b,c,d);return e;}
function Ki(){var b,c,d,e,f,g,h,i;b=new HP;c=new IR;d=new G8;G7();JJ(d,AVl);Lk(c,d,BE(AU6),BE(AVm),BE(AVn),BE(AU6),BE(AVo),BE(AVp),BE(AVq),BE(AVr),BE(AVa),BE(AVs));ABy();e=(AVt.eF()).data;f=e.length;g=Q(IC,f);h=g.data;i=0;while(i<f){h[i]=e[i].kY;i=i+1|0;}JU(b,c,g,AAo(),FW());return b;}
function ABD(){var b,c,d,e,f,g,h,i,j,k,l;b=new HP;c=new IR;d=new G8;AMh();JJ(d,AVu);Lk(c,d,BE(AVv),BE(AVw),BE(AVx),BE(AVv),BE(AVy),BE(AVz),BE(AVA),BE(AVB),BE(AVC),BE(AVD));AA9();e=(AVE.eF()).data;f=e.length;g=Q(IC,f);h=g.data;i=0;while(i<f){h[i]=e[i].kd;i=i+1|0;}j=AAu(S(B(249)),S(B(250)),S(B(251)),S(B(252)));d=new H0;k=new Hy;AJc();l=AVF;JQ(k,l,AVG,AVH,AVI,AVJ,l);K0(d,k,AAl(),Y4(S(B(253)),S(B(254)),S(B(255))),AAl(),Zj(1,0.17499999701976776),AVK,AVL);JU(b,c,g,j,d);return b;}
function AAI(){var b,c,d,e,f,g,h,i,j,k,l;b=new HP;c=new IR;d=new G8;ABn();JJ(d,AVM);Lk(c,d,BE(AVN),BE(AVO),BE(AVP),BE(AVN),BE(AVQ),BE(AVR),BE(AVS),BE(AVT),BE(AVU),BE(AVV));ZR();e=(AVW.eF()).data;f=e.length;g=Q(IC,f);h=g.data;i=0;while(i<f){h[i]=e[i].kO;i=i+1|0;}j=AAu(S(B(256)),S(B(257)),S(B(258)),S(B(259)));d=new H0;k=new Hy;ANY();l=AVX;JQ(k,l,AVY,AVZ,AV0,AV1,l);K0(d,k,YO(),Y4(S(B(260)),S(B(261)),C3(0)),YO(),Zj(1,0.07500000298023224),AV2,AV3);JU(b,c,g,j,d);return b;}
function JU(a,b,c,d,e){var f;f=c.data;a.pa=EQ(B(122),16.0);a.qd=EQ(B(122),17.0);a.sK=EQ(B(121),15.0);a.cu=b;a.us=c;a.p9=d;if(f.length>=15){a.T=e;return;}b=new BD;V(b);J(b);}
function IR(){var a=this;C.call(a);a.sZ=null;a.gt=null;a.uN=null;a.xL=null;a.n2=null;a.kz=null;a.pX=null;a.n5=null;a.lo=null;a.lJ=null;a.iL=null;}
function AV4(a,b,c,d,e,f,g,h,i,j,k){var l=new IR();Lk(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Lk(a,b,c,d,e,f,g,h,i,j,k,l){a.sZ=b;a.gt=c;a.uN=d;a.xL=e;a.n2=f;a.kz=g;a.pX=h;a.n5=i;a.lo=j;a.lJ=k;a.iL=l;}
function BZ(){var a=this;C.call(a);a.bl=0.0;a.bz=0.0;a.bh=0.0;a.bA=0.0;}
function AQc(a){var b=new BZ();AMe(b,a);return b;}
function CE(a,b,c,d,e){a.bl=b;a.bz=c;a.bh=d;a.bA=e;}
function AMe(a,b){a.bl=b.bl;a.bz=b.bz;a.bh=b.bh;a.bA=b.bA;}
function BI(a,b){a.bl=b.bl;a.bz=b.bz;a.bh=b.bh;a.bA=b.bA;return a;}
function AQ2(a,b){if(a===b)return 1;return b!==null&&Cn(a)===Cn(b)&&Kw(a,b)?1:0;}
function Kw(a,b){return b.bl===a.bl&&b.bz===a.bz&&b.bh===a.bh&&b.bA===a.bA?1:0;}
function Ix(){var a=this;C.call(a);a.P=null;a.y=null;a.bT=null;a.b2=null;}
function AKF(){var a=new Ix();R$(a);return a;}
function SF(a,b,c,d){var e=new Ix();AHy(e,a,b,c,d);return e;}
function R$(a){a.P=new Bi;a.y=new Bi;a.bT=new BZ;a.b2=new BZ;}
function AHy(a,b,c,d,e){a.P=new Bi;a.y=new Bi;a.bT=new BZ;a.b2=new BZ;PQ(a,b,c,d,e);}
function PQ(a,b,c,d,e){Bf(a.P,b,c);Bf(a.y,d,e);}
function SX(a){Bf(a.y,0,0);}
function LY(a){var b;b=a.y;return Z(b.b,b.a)?0:1;}
function Eq(a,b){return F4(b,a.P,a.y);}
function Up(a,b,c,d){var e;e=a.P;By(b,e.b+c|0,e.a+d|0,a.y,a.bT);}
function T4(a,b,c,d,e,f){var g,h,i,j;g=a.P;d=g.b+d|0;e=g.a+e|0;g=a.y;h=a.b2;i=a.bT;K7(b,b.hc);L$(b.hc,b.bD,d,e,g,b.dG);Uf(b.hc,b.bD,c);g=b.hc;j=b.bD;Ib(j,g.ux,h);Ib(j,g.uv,i);c=g.pR;j.uniform2f(c,f,0.0);KV(b);}
function ACY(){Ix.call(this);this.c6=null;}
function AK$(){var a=new ACY();AFJ(a);return a;}
function Fd(a,b,c,d){var e=new ACY();AK9(e,a,b,c,d);return e;}
function AFJ(a){R$(a);a.c6=new BZ;}
function AK9(a,b,c,d,e){R$(a);a.c6=new BZ;PQ(a,b,c,d,e);}
function GZ(a){var b,c;b=a.y;c=a.c6;Bf(b,c.bh-c.bl|0,c.bA-c.bz|0);}
function Gf(a,b){HB(a,0,0,Ce(b),C8(b));}
function HB(a,b,c,d,e){CE(a.c6,b,c,d,e);}
function DD(a,b,c,d,e,f){var g;g=a.P;EG(b,g.b+d|0,g.a+e|0,a.y,a.c6,c,a.bT,a.b2,f);}
function F$(a,b){BI(a.bT,b);}
function Hw(a,b){BI(a.b2,b);}
function AAN(){var a=this;C.call(a);a.dN=null;a.kR=0.0;a.gG=0.0;a.gk=0;}
function AMi(){var a=new AAN();AQL(a);return a;}
function AQL(a){var b;b=SF(0,0,2,20);a.dN=b;a.kR=0.5;a.gG=0.0;Hz(187,187,187,255,b.bT);}
function SE(a){return a.dN.y.a;}
function P$(a){return a.dN.y.b;}
function ST(a,b){var c,d;a:{c=a.gk;if(b>a.gG)while(true){d=a.gG+a.kR;a.gG=d;a.gk=a.gk?0:1;if(b>d)continue;else break a;}}return a.gk==c?0:1;}
function PH(a,b,c){Bf(a.dN.P,b,c);}
function Sm(a,b){a.gG=b+a.kR*1.25;a.gk=1;}
function U3(a,b,c){if(a.gk)Up(a.dN,b,c.b,c.a);}
function TM(){C.call(this);this.e9=null;}
function ANp(a,b){var c,d,e,f,g,h,i;c=a.e9;d=c.js;if(d!==null){e=c.dc.P;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.js=g;}d=b.h;f=d.b;c=c.gi;e=c.y;h=f-e.b|0;f=d.a-e.a|0;Bf(c.P,h,f);c=a.e9;d=c.bj.bO;b=b.h;f=0;a:{while(true){i=c.gQ.data;if(f>=i.length)break;if(Eq(i[f],b)){b=c.u8.data[f];break a;}f=f+1|0;}b=null;}Go(d,b);return 1;}
function AOV(a,b,c,d){if(!c&&d==2){b=a.e9;WK(b,b.dc);}return 1;}
function AHN(a,b,c){var d,e;d=Bv();e=new M;O(e);T(G(e,B(262)),c);Bt(d,N(e));if(!c){d=b.h;b=a.e9;b.js=!Eq(b.dc,d)?null:d;PH(a.e9.g1,d.b,d.a);b=a.e9;Sm(b.g1,Jn(b.bj.bO));}return AV5;}
function AHo(a,b,c){var d;b=Bv();d=new M;O(d);T(G(d,B(263)),c);Bt(b,N(d));return 1;}
function RC(){C.call(this);this.uU=null;}
function ANj(a,b){return OQ(a.uU,b);}
function RB(){C.call(this);this.ob=null;}
function APR(a,b){return OQ(a.ob,b);}
function RE(){C.call(this);this.wT=null;}
function AQl(a,b,c){var d,e;Bt(Bv(),B(264));d=!c?B(265):B(28);e=new M;O(e);G(G(G(e,B(266)),d),B(267));Wb(b,N(e));return 1;}
function RD(){C.call(this);this.vg=null;}
function AQj(a){Bt(Bv(),B(268));}
function RA(){C.call(this);this.wn=null;}
function ALJ(a,b){Bt(Bv(),B(269));return 1;}
function Rz(){C.call(this);this.s4=null;}
function AJn(a,b,c,d){var e,f,g;b=a.s4;e=( -d|0)/10|0;b=b.dc;f=b.y;f.b=f.b+e|0;f.a=f.a+e|0;b=b.P;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function G8(){var a=this;BZ.call(a);a.f6=0;a.f9=0;a.f7=0;a.f8=0;}
function C3(a){var b=new G8();AQT(b,a);return b;}
function CL(a,b,c){var d=new G8();AHg(d,a,b,c);return d;}
function S(a){var b=new G8();AOS(b,a);return b;}
function Ft(a,b,c,d){var e=new G8();Qr(e,a,b,c,d);return e;}
function BE(a){var b=new G8();JJ(b,a);return b;}
function AQT(a,b){Qr(a,b,b,b,255);}
function AHg(a,b,c,d){Qr(a,b,c,d,255);}
function AOS(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.f6=IT(L(b,1))*17|0;a.f9=IT(L(b,2))*17|0;a.f7=IT(L(b,3))*17|0;a.f8=255;}else{a.f6=Lv(L(b,1),L(b,2));a.f9=Lv(L(b,3),L(b,4));a.f7=Lv(L(b,5),L(b,6));a.f8=I(b)!=9?255:Lv(L(b,7),L(b,8));}Hz(a.f6,a.f9,a.f7,a.f8,a);return;}}
function Qr(a,b,c,d,e){a.f6=b;a.f9=c;a.f7=d;a.f8=e;Hz(b,c,d,e,a);}
function JJ(a,b){a.f6=b.f6;a.f9=b.f9;a.f7=b.f7;a.f8=b.f8;BI(a,b);}
function IT(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Lv(b,c){return (16*IT(b)|0)+IT(c)|0;}
function UV(){var a=this;C.call(a);a.lu=null;a.jS=null;}
function Zv(){var a=this;C.call(a);a.fa=null;a.cd=null;a.ed=null;a.f_=null;a.k4=null;a.ca=null;a.fA=null;a.cQ=0;a.eJ=0;a.lk=0;a.gK=0;a.fC=0;a.i9=null;a.jr=null;a.sM=null;}
function YW(){var a=new Zv();AQm(a);return a;}
function AQm(a){a.cd=AKF();a.ed=new Bi;a.f_=new Bi;a.ca=AV6;a.gK=(-1);}
function KQ(a,b){TF(a);a.ca=b;}
function HY(a,b){a.fa=b;TF(a);}
function H6(a,b){var c,d,e,f,g;a.k4=b.iU;c=b.bf.hm;BI(a.cd.bT,c);c=b.hX.jQ;BI(a.cd.b2,c);d=0;while(true){e=a.ca.data;if(d>=e.length)break;c=e[d];f=b.bf;c.jb=f;c=c.dl;g=f.kW;f=f.hm;BI(c.bT,g);BI(c.b2,f);d=d+1|0;}}
function Tr(a){a.fA=CG(a.fA,null);Bf(a.ed,0,0);a.ca=AV6;a.gK=(-1);SX(a.cd);}
function GT(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=IF(b);d=b.bM;BF(a.fa);Cy(c,a.fa);e=J2(a.fa,1.25);f=0;a.cQ=B_(2.0,d);a.eJ=B_(3.0,d);a.lk=B_(12.0,d);g=0;h=a.ca.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=QH(c,l.j8);n=a.lk;n=(n+m|0)+n|0;f=Ba(f,n);b=l.dl;l=b.P;l.b=g;l.a=0;l=b.y;l.b=n;l.a=e;CE(b.c6,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.ed;b.b=g;b.a=e;b=a.cd.y;n=a.fC;if(!n){m=a.cQ;m=(g+m|0)+Z(m,a.ca.data.length)|0;}else m=(f+(a.cQ*2|0)|0)+(a.eJ*2|0)|0;b.b=m;if(!n)e=e+(a.cQ*2|0)|0;else{n=a.cQ;e=(Z(e+n|0,a.ca.data.length)
+n|0)+(a.eJ*2|0)|0;}b.a=e;}
function JV(a,b,c){var d,e,f,g,h,i,j;Bf(a.cd.P,b,c);d=a.cQ+a.eJ|0;e=a.ca.data;f=e.length;g=0;h=d;while(g<f){i=e[g].dl;j=i.P;j.b=b+d|0;j.a=c+h|0;if(!a.fC){if(!i.y.b)AD0();d=d+(i.y.b+a.cQ|0)|0;}else{if(!i.y.a)AD0();h=h+(i.y.a+a.cQ|0)|0;}g=g+1|0;}}
function AD0(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function D_(a){var b,c;b=a.ed;if(b.b&&b.a)return a.cd.y;c=new Bo;Bj(c,B(270));J(c);}
function TF(a){Bf(a.ed,0,0);}
function JA(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.cV;if(!a.ca.data.length)return;a:{if(a.fA!==null){d=a.ed;if(Z(d.b,d.a))break a;}d=a.ed;if(!Z(d.b,d.a))GT(a,b);d=a.ed;e=d.b;f=d.a;if(!Z(e,f))return;d=CK(c,e,f);Cy(d,a.fa);g=J2(a.fa,0.125);h=a.fa;i=h.dt;j=g+i-(i+h.ee)/16.0;k=a.ca.data;f=k.length;l=0;while(l<f){h=k[l];Ch(d,h.j8,h.dl.c6.bl+a.lk,j);l=l+1|0;}h=CG(a.fA,CU(c));a.fA=h;CM(h,d);FM(d);}if(!LY(a.cd)){d=a.cd;AC5(c,d.y,d.P,d.b2,a.cQ,a.f_);d=a.cd;h=d.y;m=d.P;d=d.bT;e=a.cQ;n=a.f_;n.b=(h.b-e|0)-e|0;n.a=(h.a-
e|0)-e|0;By(c,m.b+e|0,m.a+e|0,n,d);if(a.fC){d=a.cd;ACn(c,d.y,d.P,0,0,Q6(a.k4,b.bM),a.k4.lP,a.f_);}}k=a.ca.data;l=k.length;o=0;while(o<l){DD(k[o].dl,c,a.fA,0,0,0.0);o=o+1|0;}b:{if(a.fC){k=a.ca.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].dl;m=a.f_;e=(a.cd.y.b-(a.cQ*2|0)|0)-(a.eJ*2|0)|0;b=h.y;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.P;By(c,d.b+b.b|0,d.a,m,h.b2);}o=o+1|0;}}}}
function Kf(a,b,c){var d,e,f,g,h,i;d=Eq(a.cd,b);e=!d?(-1):UY(a,b);f=a.gK;if(f!=e){if(f>=0){g=a.ca.data[f];NC(g,0);if(a.sM!==null){f=a.gK;h=Bv();g=Cq(g);i=new M;O(i);G(G(T(G(i,B(271)),f),B(272)),g);Bt(h,N(i));}}if(e>=0){h=a.ca.data[e];g=a.jr;if(g!==null)g.no(b,e,h);NC(h,1);}a.gK=e;}return d&&Hb(c)?1:0;}
function J8(a,b,c,d){var e,f;e=UY(a,b);if(e>=0){f=a.ca.data[e];if(!Mr(f))f.lW.p();}return 1;}
function UY(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.ca.data;if(c>=d.length)return (-1);e=d[c].dl;if(Eq(e,b))return c;if(a.fC){f=e.P;g=f.b;e=e.y;h=e.b;g=g+h|0;i=f.a;f=a.f_;f.b=(a.cd.y.b-(a.cQ*2|0)|0)-h|0;f.a=e.a;if(Y7(b,g,i,f))break;}c=c+1|0;}return c;}
function SK(a){a.fC=1;}
function YB(){var a=this;C.call(a);a.cC=null;a.cc=null;a.i7=null;a.iY=null;a.g2=null;a.is=null;}
function MM(a){var b=new YB();AGc(b,a);return b;}
function AGc(a,b){a.cc=Cm();a.is=AV7;a.cC=b;W(b.dT,a);}
function H3(a,b,c){a.i7=c;a.g2=b;b=BT(a.cc);while(B5(b)){H6(BY(b),a.g2);}}
function F_(a,b,c,d){var e,f;e=a.cC;f=e.b7;if(Z(f.b,f.a)&&e.bM!==0.0){if(a.i7!==null&&!DI(a)){a.is=d;a.iY=GL(a.cC,a.i7);e=Tz(a,b,c,null);b=new SZ;b.sV=a;e.i9=b;FO(a.cC,a);return;}b=new BD;V(b);J(b);}c=new DY;Bj(c,B(273));J(c);}
function DK(a){var b;if(DI(a)){b=a.cC;if(b.d5===a)b.d5=null;Tn(a,null);a.is.p();a.is=AV7;}}
function PD(a,b,c,d,e){var f,g,h;f=YW();SK(f);KQ(f,c.dj());H6(f,a.g2);HY(f,a.iY);GT(f,a.cC);if(d===null)g=b.b;else{g=b.b;g=a.cC.b7.b<((g+(D_(d)).b|0)+(D_(f)).b|0)?g-(D_(f)).b|0:(g+(D_(d)).b|0)-d.eJ|0;}h=b.a;b=a.cC.b7;JV(f,Ba(0,Y(g,b.b-(D_(f)).b|0)),Ba(0,Y(h,b.a-(D_(f)).a|0)));b=new Nl;b.tK=a;b.tM=f;b.tL=e;f.jr=b;B0(a.cc,f);return f;}
function Tz(a,b,c,d){return PD(a,b,c,d,null);}
function AGo(a,b,c){var d,e;a.iY=GL(a.cC,a.i7);d=BT(a.cc);while(B5(d)){e=BY(d);HY(e,a.iY);GT(e,a.cC);}}
function Ik(a){var b,c;if(Eb(a.cc))return;CJ(a.cC.cV,1);b=0;while(true){c=a.cc;if(b>=c.i)break;JA(Bp(c,b),a.cC);b=b+1|0;}}
function Ks(a,b){var c,d;c=0;d=a.cc.i-1|0;a:{while(d>=0){c=Kf(Bp(a.cc,d),b.h,a.cC.cA);if(c)break a;d=d+(-1)|0;}}return c;}
function Ji(a,b,c,d){var e,f;e=0;f=a.cc.i-1|0;a:{while(f>=0){e=J8(Bp(a.cc,f),b.h,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Jd(a,b,c){var d,e,f;d=null;e=a.cc.i-1|0;a:{while(e>=0){f=Bp(a.cc,e);d=b.h;c=Eq(f.cd,d);if(!c&&!LY(f.cd)){d=f.i9;if(d!==null)d.p();}d=!c?null:AV5;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function AEX(a,b){var c;if(!DI(a))return 0;a:{switch(b.bg){case 27:DK(a);c=1;break a;default:}c=0;}return c;}
function ADS(b,c){var d,e,f;d=b.dl;e=c.cQ;f=c.eJ;b=new Bi;c=d.P;ZL(b,(c.b-(e*3|0)|0)-f|0,(c.a-e|0)-f|0);return b;}
function Tn(a,b){var c,d;c=a.cc.i-1|0;a:{while(true){if(c<0)break a;d=Bp(a.cc,c);if(b===d)break;El(a.cc,c);Tr(d);c=c+(-1)|0;}}}
function DI(a){return a.cc.i<=0?0:1;}
function XU(){var a=this;C.call(a);a.cV=null;a.ix=null;a.cA=null;a.b7=null;a.bM=0.0;a.d5=null;a.dT=null;a.dQ=null;a.nP=null;a.x1=null;a.x0=null;}
function KK(a){var b;b=a.d5;if(b!==null)b.sg();}
function JP(a){var b;b=a.d5;if(b!==null)b.uR();}
function WP(a,b){var c;c=a.ix.dC!==(D8()).activeElement?0:1;if(c)JP(a);a.d5=b;if(c)KK(a);}
function FO(a,b){JP(a);a.d5=b;KK(a);}
function DW(a,b){return b!==a.d5?0:1;}
function IF(a){return a.cV.cB;}
function GL(a,b){return Hh(a.cV,b.ij,B_(b.hC,a.bM));}
function Cv(a,b){return B_(b,a.bM);}
function Ta(){C.call(this);this.ta=null;}
function ANN(a,b){var c;c=a.ta;if(b.bg==32)Tr(c.cI);return 0;}
function Td(){C.call(this);this.rO=null;}
function AEw(a,b){var c,d,e,f;b=b;c=a.rO;Bt(Bv(),B(274));if(!DI(c.d4)){d=c.d4;b=b.h;e=Nv(4);f=new Vf;f.x2=c;F_(d,b,e,f);}return 1;}
function ADI(){var a=this;C.call(a);a.ij=null;a.hC=0.0;}
function EQ(a,b){var c=new ADI();AEl(c,a,b);return c;}
function AEl(a,b,c){a.ij=b;a.hC=c;}
function ARm(a,b){if(a===b)return 1;if(b!==null&&Cn(a)===Cn(b)){b=b;return a.hC===b.hC&&C6(a.ij,b.ij)?1:0;}return 0;}
function H0(){var a=this;C.call(a);a.iU=null;a.hX=null;a.m9=null;a.ps=null;a.bf=null;a.lt=null;a.jW=null;}
function AV8(a,b,c,d,e,f,g){var h=new H0();K0(h,a,b,c,d,e,f,g);return h;}
function K0(a,b,c,d,e,f,g,h){a.m9=b;a.ps=c;a.hX=d;a.bf=e;a.iU=f;a.lt=g;a.jW=h;}
function FW(){var b,c,d;b=new H0;c=new Hy;XH();d=AV9;JQ(c,d,AV$,AV_,AWa,AWb,d);K0(b,c,ABh(),Y4(S(B(275)),S(B(254)),S(B(255))),ABh(),Zj(1,0.125),AWc,AWd);return b;}
var Tc=F();
function AI7(a){Bt(Bv(),B(276));}
var S_=F();
function AO8(a){Bt(Bv(),B(277));}
function C$(){var a=this;C.call(a);a.dl=null;a.lW=null;a.jb=null;a.hY=null;a.jq=null;a.j8=null;}
function ABE(a,b,c){var d=new C$();K1(d,a,b,c);return d;}
function ATg(a,b,c,d,e){var f=new C$();ABd(f,a,b,c,d,e);return f;}
function K1(a,b,c,d){ABd(a,b,c,d,null,null);}
function ABd(a,b,c,d,e,f){var g;g=AK$();a.dl=g;a.j8=c;a.jb=d;a.jq=f;a.lW=b;BI(g.bT,d.kW);BI(a.dl.b2,d.hm);a.hY=e;}
function Mr(a){return a.hY===null?0:1;}
function NC(a,b){BI(a.dl.b2,!b?a.jb.hm:a.jb.pi);}
function AA1(){C.call(this);this.cO=null;}
function ADU(){var a=new AA1();AKK(a);return a;}
function AKK(a){a.cO=Cm();}
function IQ(a,b){Rk(a.cO,0,b);}
function J6(a,b){VW(a.cO,b);}
function I3(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cO.i-1|0;while(c>=0){d=Bp(a.cO,c);d.O.eR(b);e=d.S;f=d.ea.hX;if(!LK(e)){if(!TS(e)&&!(!e.gx&&e.da!==null)){e.gx=0;QR(e);g=e.dV;h=(g.dt+g.ee+5.0)/10.0;i=Cv(e.gI,e.iI);g=b.cB;j=e.dV;k=e.gL;l=h*2.0;Cy(g,j);m=i+KJ(g,k,l)|0;e.hr=m;m=Et(0,m,e.q.b);if(m){j=CK(b,m,e.q.a);Cy(j,e.dV);g=e.gL;l=i;h=l+h;k=e.dV;n=k.dt;Ch(j,g,h,l+n-(n+k.ee)/16.0);g=e.da;if(g===null){g=CU(b);e.da=g;}CM(g,j);FM(j);CE(e.ld,0.0,0.0,Ce(e.da),C8(e.da));}}g=f.qH;j=e.da;if(j===null)O$(e,b,0,e.q.b,
g);else{i=Ce(j);f=f.pO;j=e.D;m=j.b;o=j.a;j=e.da;EG(b,m,o,j.fm,e.ld,j,f,g,0.0);m=e.q.b;if(i<m)O$(e,b,i,m-i|0,g);}}CJ(b,1);i=Cv(d.bp,2.0);m=LK(d.S);f=d.bp;e=f.dQ;f=f.nP;p=m?0:d.S.q.a;g=d.O.q;Bf(f,g.b,g.a+p|0);AC5(b,f,!m?d.S.D:d.O.D,d.ea.hX.jQ, -i|0,e);f=d.O;ACn(b,f.q,f.D,i,p,Q6(d.ea.iU,d.bp.bM),d.ea.iU.lP,e);c=c+(-1)|0;}}
function Za(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cO;if(c>=d.i)break;a:{e=Bp(d,c);f=b.h;if(DG(e.S,f))g=DB(e.bp.cA,null);else{g=Cv(e.bp,7.0);h=Cv(e.bp,25.0);if(VA(e,f.b,g)){i=UN(e,f.b,h);if(Pk(e,f.a,g)){g=DB(e.bp.cA,JD(i,B(145)));break a;}if(P6(e,f.a,g)){g=DB(e.bp.cA,JD( -i|0,B(145)));break a;}}if(MP(e,f.a,g)){h=RN(e,f.a,h);if(N7(e,f.b,g)){g=DB(e.bp.cA,JD(h,B(144)));break a;}if(TI(e,f.b,g)){g=DB(e.bp.cA,JD( -h|0,B(144)));break a;}}g=0;}}b:{c:{if(!g){if(!DG(e.O,b.h))break c;if(!e.O.bR(b)&&!DB(e.bp.cA,null))break c;}g
=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function AA0(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.cO;if(e>=f.i)break;a:{b:{g=Bp(f,e);if(!DG(g.S,b.h)){if(!DG(g.O,b.h))break b;if(!g.O.cp(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function X$(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.cO;if(d>=e.i)return null;a:{f=Bp(e,d);if(!c){b:{e=b.h;if(!LK(f.S)&&DG(f.S,e)){g=f.O.D;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.S.D;i=e.b-i|0;k=e.a-k|0;e=new Bi;g=new Qn;g.ou=f;g.ox=i;g.oy=k;g.oz=e;g.oA=h;g.ov=j;}else{h=Cv(f.bp,7.0);i=Cv(f.bp,25.0);if(VA(f,e.b,h)){j=UN(f,e.b,i);if(Pk(f,e.a,h)){g=H5(f,e,j,(-1));break b;}if(P6(f,e.a,h)){g=H5(f,e,j,1);break b;}}if(MP(f,e.a,h)){i=RN(f,e.a,i);if(N7(f,e.b,h)){g=H5(f,e,(-1),i);break b;}if(TI(f,e.b,h)){g=
H5(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=DG(f.S,b.h)?AV5:f.O.b5(b,c);e=f.O;if(e===null)g=null;else if(g===null)g=!DG(e,b.h)?null:AV5;}if(g!==null)break;d=d+1|0;}return g;}
function ADT(a,b,c){var d,e,f,g;d=0;while(true){e=a.cO;if(d>=e.i)break;a:{b:{f=Bp(e,d);if(!DG(f.S,b.h)){if(!DG(f.O,b.h))break b;if(!f.O.cL(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function K$(a,b,c,d){var e,f;e=0;while(true){f=a.cO;if(e>=f.i)break;if((Bp(f,e)).O.cW(b,c,d))return 1;e=e+1|0;}return 0;}
function AQe(a,b,c){var d,e,f;d=0;while(true){e=a.cO;if(d>=e.i)break;f=Bp(e,d);e=f.O;e.iN(e.D,e.q,c);e=f.S;if(e.gq!==null){e.dV=null;e.hr=0;e.gx=1;}JZ(f);d=d+1|0;}}
function Oc(a,b){var c,d,e;c=0;d=0;while(true){e=a.cO;if(d>=e.i)break;Bp(e,d);c=0|c;d=d+1|0;}return c;}
function PO(a,b,c){var d;d=0;while(true){b=a.cO;if(d>=b.i)break;Bp(b,d);d=d+1|0;}}
function Ow(){C.call(this);this.vh=null;}
function AGn(a,b){return b.hd&&b.bg==32?1:0;}
function Ox(){C.call(this);this.p5=null;}
function APp(a,b){var c,d,e,f,g,h;b=b;c=a.p5;if(!DI(c.g3)){d=c.g3;b=b.h;e=Q(C$,1);f=e.data;g=new C$;h=new Vg;h.o8=c;K1(g,h,B(278),d.g2.bf);f[0]=g;F_(d,b,FQ(e),AV7);}return 1;}
var ABT=F();
function Z9(b){var c,d;c=CK(b,250,64);FZ(c,B(146),25.0);Lo(c,187,187,187);Ch(c,B(279),0.0,24.0);Ch(c,B(279),0.25,56.0);d=CU(b);CM(d,c);FM(c);return d;}
function YV(b){var c;c=new VT;c.gu=b;return c;}
function Oy(){C.call(this);this.tq=null;}
function AMx(a,b,c,d){return K$(a.tq,b,c,d);}
var V9=F(0);
var Ho=F(0);
var EN=F();
function Eb(a){return a.i?0:1;}
function HF(a,b){var c,d,e,f,g,h;c=b.data;d=a.i;e=c.length;if(e<d)b=UD(H8(Cn(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BT(a);while(B5(f)){g=b.data;h=e+1|0;g[e]=BY(f);e=h;}return b;}
var I8=F(0);
function F3(){EN.call(this);this.ct=0;}
function BT(a){var b;b=new Nr;b.gy=a;b.lK=a.ct;b.ie=a.nb();b.f0=(-1);return b;}
function Qb(a,b){var c,d;c=a.i;d=0;while(true){if(d>=c)return (-1);if(C6(b,Bp(a,d)))break;d=d+1|0;}return d;}
function ALM(a,b){var c,d;if(!IB(b,I8))return 0;c=b;if(a.i!=c.i)return 0;d=0;while(d<c.i){if(!C6(Bp(a,d),Bp(c,d)))return 0;d=d+1|0;}return 1;}
var Ij=F(0);
function NN(){var a=this;F3.call(a);a.ci=null;a.i=0;}
function Cm(){var a=new NN();AIh(a);return a;}
function AWe(a){var b=new NN();MF(b,a);return b;}
function AIh(a){MF(a,10);}
function MF(a,b){a.ci=Q(C,b);}
function Jg(a,b){var c,d;c=a.ci.data.length;if(c<b){d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.ci=Dl(a.ci,d);}}
function Bp(a,b){I6(a,b);return a.ci.data[b];}
function AMH(a){return a.i;}
function B0(a,b){var c,d;Jg(a,a.i+1|0);c=a.ci.data;d=a.i;a.i=d+1|0;c[d]=b;a.ct=a.ct+1|0;return 1;}
function Rk(a,b,c){var d,e,f;O_(a,b);Jg(a,a.i+1|0);d=a.i;e=d;while(e>b){f=a.ci.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.ci.data[b]=c;a.i=d+1|0;a.ct=a.ct+1|0;}
function El(a,b){var c,d,e,f;I6(a,b);c=a.ci.data;d=c[b];e=a.i-1|0;a.i=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.ct=a.ct+1|0;return d;}
function VW(a,b){var c;c=Qb(a,b);if(c<0)return 0;El(a,c);return 1;}
function Hp(a){Zd(a.ci,0,a.i,null);a.i=0;a.ct=a.ct+1|0;}
function I6(a,b){var c;if(b>=0&&b<a.i)return;c=new Bw;V(c);J(c);}
function O_(a,b){var c;if(b>=0&&b<=a.i)return;c=new Bw;V(c);J(c);}
function J1(a,b){var c;c=0;while(c<a.i){b.n(a.ci.data[c]);c=c+1|0;}}
function N4(a,b){var c,d,e,f,g,h,i;c=a.ci;d=a.i;if(b===null)b=AUc;e=Q(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}ZX(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.ct=a.ct+1|0;}
function ADv(){var a=this;C.call(a);a.lg=0;a.li=0;}
function APc(){var a=new ADv();AP0(a);return a;}
function AP0(a){var b,c;b=ADg(EC((ACi())));c=EC((ACi()))^(-559038737);a.lg=b;a.li=c;c=0;while(c<19){RF(a);c=c+1|0;}}
function RF(a){var b,c;b=a.lg;c=a.li;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.lg=c;a.li=b;return b;}
function ADg(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function If(a,b){return 5.960464477539063E-8*(RF(a)&16777215)*b|0;}
function T0(){C.call(this);this.mf=null;}
function AMb(a,b,c){var d;d=a.mf;if(b===0.0)Kq(d,100);}
function T1(){C.call(this);this.p0=null;}
function AEC(a,b){var c,d,e;c=a.p0;d=b.bg;if(d==32){c.i2=c.i2?0:1;e=1;}else if(d==13){Kq(c,1);e=1;}else if(d!=8)e=0;else{WD(c,1);e=1;}return e;}
var Nh=F(0);
function AD5(b,c){var d;d=new Vd;d.uV=b;d.uW=c;return d;}
function ACV(){var a=this;C.call(a);a.fB=null;a.fV=0;a.it=0;a.fU=0;}
function ADG(a){var b=new ACV();AIg(b,a);return b;}
function AIg(a,b){a.fB=Cm();a.fU=0;a.it=2048;a.fV=b;}
function Hf(a,b,c){var d,e,f,g,h,i,j;d=c.qA(b);e=a.it;if(d>e){c=new Bo;f=new M;O(f);BA(T(G(T(G(f,B(280)),d),B(281)),e),41);Bj(c,N(f));J(c);}if(!a.fV){b=new BD;Bj(b,B(282));J(b);}a:{b=new BZ;if(d){b:{c=a.fB;if(c.i>0){c=BT(c);g=d;while(true){if(!B5(c))break b;f=BY(c);if(f.bh>=g)break;}CE(b,f.bl,f.bz,g,a.fV);f.bl=f.bl+g;h=f.bh-g;f.bh=h;if(h===0.0)VW(a.fB,f);break a;}}g=a.fU;i=d;CE(b,0.0,g,i,a.fV);c=a.fB;f=new BZ;h=a.fU;g=a.it-d|0;j=a.fV;f.bl=i;f.bz=h;f.bh=g;f.bA=j;B0(c,f);a.fU=a.fU+a.fV|0;}}return b;}
function Id(a,b){var c,d,e,f,g,h,i;a:{c=AQc(b);b=a.fB;if(b.i>0){d=BT(b);while(true){if(!B5(d))break a;e=BY(d);if(e.bz===c.bz){f=e.bl;g=e.bh;h=f+g;i=c.bl;if(h===i){c.bl=f;c.bh=c.bh+g;QG(d);}else{h=c.bh;if(i+h===f){c.bh=h+g;QG(d);}}}}}}B0(a.fB,c);}
function L5(a){return BW(a.it,a.fU);}
function ABb(){var a=this;C.call(a);a.wY=20;a.fL=null;a.e4=null;a.id=null;a.kg=0;a.ic=0;a.iV=0.0;a.cw=null;a.w3=null;a.ey=null;a.fc=null;a.fq=0;}
function ABt(){var a=new ABb();AQa(a);return a;}
function AQa(a){var b;a.wY=20;a.fL=new Bi;a.e4=new Bi;a.cw=Cm();b=Q(BZ,1);b.data[0]=null;a.w3=b;}
function XB(a,b){var c,d,e,f,g;c=a.fq;if(b==c)return;d=a.cw.i;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Ba(0,(c-1|0)/20|0);f=Ba(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){Sx(a,b);a.fq=b;}else{if(a.fq>=b)while(true){if(g<f)break a;a.fq=SY(Bp(a.cw,g%d|0),a.ey,a.fc,a.fq,b,e,a.iV);g=g+(-1)|0;}while(f<=g){a.fq=SY(Bp(a.cw,f%d|0),a.ey,a.fc,a.fq,b,e,a.iV);f=f+1|0;}}}}
function Qt(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=BT(a.cw);while(B5(f)){g=BY(f);h=a.fL;i=Z(a.cw.i,a.ic);j=g.eu.a;k=((g.iM.a-(b%i|0)|0)+i|0)%i|0;l=k+j|0;m=BG(l,c);if(m<=0){Bf(g.gb,Ce(g.b0),j);CE(g.fE,0.0,0.0,Ce(g.b0),j);IY(g,e,k,h,d.h9,d.g6);}else{if(m>0&&k<c){m=Ba(c-k|0,0);Bf(g.gb,Ce(g.b0),m);CE(g.fE,0.0,0.0,Ce(g.b0),m);IY(g,e,k,h,d.h9,d.g6);}if(l>i){m=Y(l%i|0,c);Bf(g.gb,Ce(g.b0),m);CE(g.fE,0.0,b%C8(g.b0)|0,Ce(g.b0),m);IY(g,e,0,h,d.h9,d.g6);}}}}
function JY(a,b,c,d){var e,f,g,h,i,j;e=a.cw.i;while(true){f=a.cw.i;g=Z(f,a.ic);if(g>(d+a.kg|0))break;h=BW(0,g);i=new Na;g=a.e4.b;f=a.kg;j=a.id;i.gb=new Bi;i.fE=new BZ;i.iM=h;i.dH=20;i.er=f;i.eu=BW(g,20*f|0);i.fH=Tl(j,f);if(i.b0===null)i.b0=CU(b);B0(a.cw,i);}if(f==e)return;Sx(a,c);}
function Sx(a,b){var c,d,e,f,g,h,i,j;c=a.cw;d=c.i;e=Z((b/(d*20|0)|0)+1|0,d)*20|0;c=BT(c);while(B5(c)){f=BY(c);g=a.ey;h=a.iV;Eu(g);i=0;while(true){j=f.dH;if(i>=j)break;j=e-Z(d,j)|0;if(j<b)j=e;e=j+1|0;F5(f,g,C5(e),Z(f.er,i)+f.fH|0,h);i=i+1|0;}CM(f.b0,g);}}
function TD(a,b,c,d){var e;a.id=b;a.kg=c;e=c*20|0;a.ic=e;b=CG(a.ey,CK(d,a.e4.b,e));a.ey=b;Cy(b,a.id);R7(a.ey,2);b=CG(a.fc,CK(d,a.e4.b,c));a.fc=b;Cy(b,a.id);R7(a.fc,2);}
function NR(a){J1(a.cw,new Ry);Hp(a.cw);a.ey=CG(a.ey,null);a.fc=CG(a.fc,null);}
function Vk(a,b,c,d,e){CA(a.fL,b);Bf(a.e4,c,d);a.iV=e;}
var Y2=F(0);
function Zy(b,c,d){return Hz(b,c,d,255,new BZ);}
function Hz(b,c,d,e,f){CE(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function WR(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bl=g+i;e.bz=h+i;e.bh=j+i;return e;}
function Js(b,c,d,e,f){f=WR(b,c,d,f);f.bA=e;return f;}
function GB(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function Zb(){var a=this;C.call(a);a.h9=null;a.g6=null;a.om=null;a.t4=null;}
function AAu(a,b,c,d){var e=new Zb();AM4(e,a,b,c,d);return e;}
function AAo(){return AAu(S(B(283)),S(B(284)),S(B(285)),S(B(286)));}
function AM4(a,b,c,d,e){a.h9=b;a.g6=c;a.om=d;a.t4=e;}
function Wm(){var a=this;C.call(a);a.qO=null;a.iw=null;}
function AGh(a,b,c){if(c)return AV5;return Fe(a.iw.gE,b.h,a.qO,1);}
function ANz(a,b,c){return 1;}
function AHH(a,b){var c;c=a.iw;return Fp(c.gE,b.h,c.sF);}
function SO(){C.call(this);this.nz=null;}
function AG2(a,b,c,d){var e,f;b=a.nz;e=(I1(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.dZ=Y(Ba(0,b.dZ+Z(e,f)|0),PI(b));return 1;}
var Ut=F(0);
function Hb(a){return DB(a,null);}
function Uz(b){var c;c=new NK;c.nm=b;return c;}
function ABa(){var a=this;C.call(a);a.eU=null;a.cT=null;a.dU=null;a.en=null;a.hy=null;a.hx=null;}
function Hl(){var a=new ABa();AHD(a);return a;}
function AHD(a){a.eU=new Bi;a.cT=new Bi;a.dU=new Bi;a.en=new Bi;a.hy=new BZ;a.hx=new BZ;}
function PF(a){var b;b=a.cT;return !Z(b.b,b.a)?0:1;}
function IM(a,b){return F4(b,a.dU,a.en);}
function Fe(a,b,c,d){var e,f,g,h,i;e=IM(a,b);f=F4(b,a.eU,a.cT);if(!e&&!f)return null;if(!f){if(!d)c.n(Xl(a,b.b-a.dU.b|0));else c.n(Ou(a,b.a-a.dU.a|0));}g=!d?a.eU.b+(a.cT.b/2|0)|0:a.eU.a+(a.cT.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new NI;b.sS=a;b.sU=c;b.sT=i;}else{b=new NG;b.pL=a;b.pK=c;b.pM=i;}return b;}
function Gc(a,b,c){if(b!==null&&c!==null){BI(a.hy,c);BI(a.hx,b);return;}}
function ADF(b,c){var d;d=new TT;d.qJ=b;d.l5=c;return d;}
function Ou(a,b){var c,d,e;c=a.en.a;d=a.cT.a;e=c-d|0;return ADF(Y(Ba(0,b-(d/2|0)|0),e),e);}
function Xl(a,b){var c,d,e;c=a.en.b;d=a.cT.b;e=c-d|0;return ADF(Y(Ba(0,b-(d/2|0)|0),e),e);}
function Iq(a,b,c,d,e,f,g){NO(a,b,c,d,e,f,g,1);}
function Mm(a,b,c,d,e,f,g){NO(a,b,c,d,e,f,g,0);}
function NO(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bf(a.en,0,0);Bf(a.cT,0,0);}else{i=Y(g*3|0,d);j=Ba(PB(d,d,e),i);e=e-d|0;i=d-j|0;i=i?PB(b,i,e):0;if(!h){k=a.eU;k.b=i+c|0;k.a=f-g|0;l=a.cT;l.b=j;l.a=g;l=a.dU;l.b=c;l.a=k.a;k=a.en;k.b=d;k.a=g;}else{k=a.eU;k.b=f-g|0;k.a=i+c|0;l=a.cT;l.b=g;l.a=j;l=a.dU;l.b=k.b;l.a=c;k=a.en;k.b=g;k.a=d;}}}
function PT(a,b){FT(a,b);Gb(a,b);}
function FT(a,b){var c;c=a.dU;By(b,c.b,c.a,a.en,a.hy);}
function Gb(a,b){var c,d;c=a.cT;c.b=c.b-2|0;c.a=c.a-2|0;d=a.eU;By(b,d.b+1|0,d.a+1|0,c,a.hx);b=a.cT;b.b=b.b+2|0;b.a=b.a+2|0;}
function Fp(a,b,c){return IM(a,b)&&Hb(c)?1:0;}
function PY(){C.call(this);this.ua=null;}
function AOf(a,b){var c,d,e;c=a.ua;if(b.cf&&b.bg==79){if(!b.bC){b=c.bj.bO;d=new Sg;d.uk=c;LN(b,d);}else{b=c.bj.bO;d=new Sf;d.wG=c;VZ(b,d);}e=1;}else e=0;return e;}
function Rf(){C.call(this);this.vS=null;}
function AE4(a,b){var c,d,e,f;c=b.data;b=Bv();d=Cq(c[0]);e=new M;O(e);G(G(e,B(167)),d);Bt(b,N(e));b=Bv();f=c[1];d=new M;O(d);G(G(d,B(287)),f);Bt(b,N(d));}
function Re(){C.call(this);this.xI=null;}
function AQ3(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bv();e=Cq(c[0]);f=new M;O(f);G(G(f,B(167)),e);Bt(d,N(f));g=FG(RT(b,1));b=Bv();d=Cq(c[1]);if(g===null)c=B(29);else{c=new M;O(c);B1(c,B(42));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)B1(c,B(43));BA(c,i[h]);h=h+1|0;}B1(c,B(44));c=N(c);}e=new M;O(e);G(G(G(G(e,B(288)),d),B(289)),c);Bt(b,N(e));}
function Rd(){C.call(this);this.n_=null;}
function AHl(a,b){Us(a.n_,b);}
function Rc(){C.call(this);this.vA=null;}
function AMr(a,b){var c,d,e,f,g;c=b.data;d=Bv();e=Cq(c[0]);f=new M;O(f);G(G(f,B(167)),e);Bt(d,N(f));g=D6(RT(b,1));b=Bv();d=Cq(c[1]);c=ACd(g);e=new M;O(e);G(G(G(G(e,B(290)),d),B(291)),c);Bt(b,N(e));}
function Ra(){C.call(this);this.wI=null;}
function ALx(a,b){var c,d;c=Iu();b=Cq(b);d=new M;O(d);G(G(d,B(292)),b);Bt(c,N(d));b=new Fh;V(b);J(b);}
function Q_(){C.call(this);this.pZ=null;}
function ANx(a,b){var c,d,e,f;c=a.pZ;d=c.bj.bO;e=new N2;e.q4=c;f=Q(C,1);f.data[0]=b;CO(d,e,B(293),f);}
function TL(){C.call(this);this.kL=null;}
function APr(a,b){var c,d,e,f,g,h;c=a.kL;d=c.k9;if(d!==null){e=c.dK.P;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.k9=g;}b=b.h;f=b.b;c=c.eN;d=c.y;f=f-d.b|0;h=b.a-d.a|0;Bf(c.P,f,h);return 1;}
function ALC(a,b,c){var d;if(!c){d=b.h;b=a.kL;if(!Eq(b.dK,d))d=null;b.k9=d;}return AV5;}
var CZ=F(0);
var AVl=null;var AU7=null;var AVm=null;var AU6=null;var AVo=null;var AVn=null;var AVq=null;var AVp=null;var AVa=null;var AVr=null;var AVs=null;function G7(){G7=Bl(CZ);AIE();}
function AIE(){AVl=C3(187);AU7=S(B(294));AVm=C3(55);AU6=C3(43);AVo=CL(33,66,131);AVn=CL(60,63,65);AVq=S(B(295));AVp=S(B(296));AVa=Ft(85,85,85,128);AVr=Ft(43,43,43,0);AVs=S(B(286));}
function T$(){var a=this;C.call(a);a.pC=null;a.i3=null;}
function AMG(a,b,c){var d;if(!c){d=Fe(a.i3.hu,b.h,a.pC,1);if(d!==null)return d;}return AV5;}
function AGj(a,b,c){return 1;}
function AFf(a,b){var c;c=a.i3;return Fp(c.hu,b.h,Uz(c.bj.bO));}
function NQ(){C.call(this);this.tu=null;}
function AE8(a,b,c,d){var e,f;b=a.tu;e=(I1(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.ex=Y(Ba(0,b.ex+Z(e,f)|0),RL(b));return 1;}
function Sr(){C.call(this);this.rt=null;}
function APv(a,b){var c,d;a:{c=a.rt;switch(b.bg){case 67:Mt(c);d=1;break a;case 86:Q8(c);d=1;break a;default:}d=0;}return d;}
var Sq=F();
function AHI(a,b,c){return 0;}
function So(){C.call(this);this.o$=null;}
function AOW(a,b,c){var d,e;d=a.o$;c=d.dy+1|0;d.dy=c;d=H1(E(Ir));e=new M;O(e);G(G(T(e,c),B(297)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));Wb(b,e);return 1;}
var Sn=F();
function AMX(a){return null;}
function Sp(){C.call(this);this.mU=null;}
function AF_(a){var b,c;b=a.mU;c=new PN;c.rB=b;return c;}
function RW(){C.call(this);this.xu=null;}
function AHP(a,b){return 0;}
function K4(){var a=this;C.call(a);a.lL=null;a.vr=null;a.vH=0.0;a.oD=0;a.vP=0;a.wj=0;a.qD=0;a.xa=0;a.dt=0.0;a.ee=0.0;a.vE=0.0;a.ly=0.0;a.vM=0;a.mE=null;}
function E0(a){return Dg(a.dt+a.ee);}
function J2(a,b){return Dg((a.dt+a.ee)*b);}
function Qj(){C.call(this);this.xr=null;}
function AIn(a,b){return b.hd&&b.bg==32?1:0;}
function Qk(){C.call(this);this.p8=null;}
function AED(a,b){var c,d,e,f,g,h;b=b;c=a.p8;if(!DI(c.gz)){d=c.gz;b=b.h;e=Q(C$,1);f=e.data;g=new C$;h=new Rm;h.ml=c;K1(g,h,B(278),d.g2.bf);f[0]=g;F_(d,b,FQ(e),AV7);}return 1;}
function Ql(){C.call(this);this.rv=null;}
function ANV(a,b,c,d){return K$(a.rv,b,c,d);}
function It(){var a=this;C.call(a);a.fQ=null;a.f=null;a.iO=null;a.pQ=null;}
function AWf(a,b,c){var d=new It();Qm(d,a,b,c);return d;}
function Qm(a,b,c,d){var e,f,g,h,i,j,k;a.fQ=d;a.iO=c;if(d===null)c=null;else{c=d.e7;c=c===null?null:!Ec(c,B(298))&&!Ec(c,B(299))&&!Ec(c,B(300))&&!Ec(c,B(301))&&!Ec(c,B(302))&&!Ec(c,B(303))?(Ec(c,B(226))?B(134):!Ec(c,B(304))?null:B(242)):B(243);}e=b.data;a.pQ=c;c=new HK;f=e.length;if(!f)g=MN(B(31));else{g=Q(Cz,f);h=g.data;i=0;while(i<f){j=new Cz;k=Q(B7,1);k.data[0]=RY(e[i]);H7(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.d9=Gv();c.et=Gv();c.fg=Cm();if(!b.length){c=new BD;V(c);J(c);}c.C=g;c.fz=0;c.cs=0;c.c_=T5(c);a.f=c;}
function Do(a){var b;b=a.iO;if(b===null)b=a.pQ;return b;}
function GV(a){var b;b=a.fQ;return b===null?null:b.hz;}
function AAP(){var a=this;C.call(a);a.hz=null;a.kI=null;a.e7=null;a.xY=null;}
function AQt(a,b,c,d){var e=new AAP();AKz(e,a,b,c,d);return e;}
function AKz(a,b,c,d,e){a.hz=b;a.kI=c;a.e7=d;a.xY=e;}
function AP3(a,b){var c;if(a===b)return 1;if(b!==null&&Cn(a)===Cn(b)){c=b;return C6(a.hz,c.hz)&&C6(a.kI,c.kI)&&C6(a.e7,c.e7)?1:0;}return 0;}
var OE=F(0);
var OX=F();
function AIt(a,b,c){var d,e;d=b;e=c;b=new M;O(b);T(G(T(G(b,B(305)),d),B(306)),e);CF(N(b));return d+e|0;}
var OF=F(0);
var OV=F();
function AJD(a,b,c){var d,e;d=b;e=c;b=new M;O(b);Fj(G(Fj(G(b,B(307)),d),B(306)),e);CF(N(b));return d+e;}
var Zp=F();
var Yw=F(0);
var Sh=F();
function ARq(a,b){var c,d,e;c=b.cf;d=c&&!b.bC&&!b.cX&&!b.iz?1:0;a:{if(d){d=b.bg;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bC&&!c&&!b.cX&&!b.iz?1:0;d=d&&b.bg==46?1:0;}b:{if(!d){e=b.bg;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.jC=1;}return 0;}
function Si(){C.call(this);this.rP=null;}
function AEI(a,b){var c;c=a.rP.d5;return c!==null&&c.hW(b)?1:0;}
function VR(){var a=this;C.call(a);a.mR=null;a.su=null;a.sR=null;a.oj=null;a.me=null;a.re=null;}
function KO(a,b,c){return Xm(a,Co(a.mR),b,c);}
function Vz(a,b,c){return Xm(a,Co(a.su),b,c);}
function Xm(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.tH(c,d))return g.v3;f=f+1|0;}return null;}
function Nk(a,b,c){var d,e,f,g;d=(Co(a.sR)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.tH(b,c))return g.v_;f=f+1|0;}return null;}
function Yc(){var a=this;C.call(a);a.bP=null;a.bF=null;a.c0=0;}
function AMO(){var a=new Yc();AE_(a);return a;}
function Rx(a){var b=new Yc();AEu(b,a);return b;}
function AE_(a){a.bP=new Gg;a.bF=new Gg;}
function AEu(a,b){var c;c=new Gg;a.bP=c;a.bF=new Gg;W_(c,b.bP);W_(a.bF,b.bF);a.c0=b.c0;}
function KF(a,b,c){B4(a.bF,b,c);if(!a.c0)B4(a.bP,b,c);}
function PZ(a,b){B4(a.bP,b,0);B4(a.bF,b+1|0,0);}
function D2(a){if(XD(a.bP,a.bF)>0)return a.bF;return a.bP;}
function Fx(a){if(XD(a.bP,a.bF)<0)return a.bF;return a.bP;}
function ACC(a,b){var c,d,e,f;c=D2(a);d=Fx(a);e=c.J;if(e<=b){f=BG(b,d.J);if(f<=0)return BW(b<=e?c.ba:0,f>=0?d.ba:(-1));}return null;}
function Dq(a){var b,c;b=a.bP;c=a.bF;return (b===c?1:c!==null&&Cn(b)===Cn(c)?(b.J==c.J&&b.ba==c.ba?1:0):0)?0:1;}
function ZE(a,b){var c,d;if(!Dq(a))return 0;c=D2(a);d=Fx(a);return c.J<=b&&b<d.J?1:0;}
function Ni(){var a=this;C.call(a);a.eD=null;a.eE=0;a.dd=0;}
function MO(a,b){var c,d,e;c=a.eE;d=a.eD;if(c==d.data.length)a.eD=Dl(d,c+16|0);d=a.eD.data;e=a.eE;a.eE=e+1|0;d[e]=b;}
function Xg(a){var b,c,d;b=a.dd;c=a.eE-1|0;if(b==c)a.dd=b-1|0;d=a.eD.data;a.eE=c;d[c]=null;}
function EU(){var a=this;C.call(a);a.bU=0;a.bV=null;a.em=null;a.dD=0;a.c8=0;}
var AWg=0;var AWh=0;var AVf=0;function ABm(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.bV;j=i===b&&!i.hN?0:1;if(j){a.bV=b;Lc(b,e.cB,d);}i=a.bV;k=i===null?0:EZ(i)<g?Iz(EZ(a.bV),1024):Iz(g,1024)+1|0;l=k<=a.dD?0:1;if(l)a.dD=k;if(!(!j&&!l)){if(AWg){m=b.fk;$rt_globals.console.info("fMeasure"+m.data);AWg=0;}if(!AVf){i=c.bn;b="alphabetic";i.textBaseline=b;}else{b=c.bn;i="top";b.textBaseline=i;}a.c8=h/1024|0;while(true){i=a.em;if(i.i>=a.dD)break;B0(i,CU(e));}k=0;while(k<a.dD){H2(a,c,f,d,a.c8+k|0);k=k+1|0;}a.bV.hN=0;}if(!Eb(a.em)
&&h<=EZ(a.bV)){k=h/1024|0;g=a.c8;if(k!=g){if(I1(k-g|0)>=a.dD){g=0;while(g<a.dD){H2(a,c,f,d,k+g|0);g=g+1|0;}a.c8=k;}else{while(true){h=a.c8;if(h>=k)break;H2(a,c,f,d,h+a.dD|0);a.c8=a.c8+1|0;}while(true){h=a.c8;if(h<=k)break;H2(a,c,f,d,h-1|0);a.c8=a.c8-1|0;}}}}}
function La(b,c){return (c-E0(b)|0)/2|0;}
function Tl(b,c){return La(b,c)+b.qD|0;}
function H2(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Eu(b);f=a.bV.fk;g=e*1024|0;h=OS(a,g);if(h>=a.bV.o.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bU;a:{while(true){l=a.bV;if(h>=l.o.data.length)break a;l=Np(l,h);m=!AVf?Tl(d.data[l.b9],c):La(d.data[l.b9],c);n=d.data;o=f.data;Cy(b,n[l.b9]);Ch(b,l.t,k,m);k=o[h]-j+a.bU;if(k>1024.0)break;h=h+1|0;}}CM(Bp(a.em,e%a.dD|0),b);}
function AAv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br;if(Eb(a.em))return;if(!a.dD)return;if(j>EZ(a.bV))return;p=a.bV;q=p.d_;r=p.o;s=j/1024|0;t=OS(a,j);u= -a.bU|0;v=i;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=h)break;z=q.data;ba=Bp(a.em,s%a.dD|0);bb=w[t];bc=z[t]+a.bU|0;bd=s*1024|0;be=(bc-bd|0)>1024?0:1;bf=s+1|0;bg=bf*1024|0;bh=Y(bg,bc)-j|0;if(be&&y)bh=bh+a.bU|0;if((u+bh|0)>h)bh=h-u|0;bi=l!==null?0:1;b:{if(!bi)
{bj=!y?a.bU:2*a.bU|0;bk=l.b;x=l.a;if(!(bk<x&&j<=x&&(j+bh|0)>(bk+bj|0)?0:1)){bj=0;break b;}}bj=1;}c:{if(!bi){bl=!y?a.bU:2*a.bU|0;if(j>=l.b&&(j+bh|0)<=(l.a+bl|0)?1:0){bm=1;break c;}}bm=0;}bn=null;if(o)bn=k.cu.iL;if(bb===m)bn=k.cu.pX;p=BT(n);d:{e:{while(B5(p)){f:{bo=BY(p);if(bo!==null){if(!bo.cD(bb))break f;else break e;}if(bb===null)break e;}}x=0;break d;}x=1;}if(x)bn=k.cu.n5;if(!bm&&!bj){l.a=Y(l.a,EZ(a.bV));bp=j>=l.b?bh:(Y(bc,bg)-l.b|0)-(!y?a.bU:0)|0;bl=(j+bh|0)<=(l.a+(!y?a.bU:2*a.bU|0)|0)?0:(Y(bc,bg)-l.a|0)
-(!y?a.bU:0)|0;bk=j-bd|0;bc=u+c|0;bq=bk;x=bh-bp|0;CE(e,bq,0.0,x,v);Bf(f,x,i);Hd(a,d,bc,b,f,e,bb,ba,g,k,0,bn);bd=bk+bh|0;CE(e,bd-bl|0,0.0,bl,v);Bf(f,bl,i);x=bc+bh|0;Hd(a,d,x-bl|0,b,f,e,bb,ba,g,k,0,bn);br=bd-bp|0;bk=bp-bl|0;CE(e,br,0.0,bk,v);Bf(f,bk,i);Hd(a,d,x-bp|0,b,f,e,bb,ba,g,k,1,bn);}else{CE(e,j-bd|0,0.0,bh,v);Bf(f,bh,i);Hd(a,d,u+c|0,b,f,e,bb,ba,g,k,bm,bn);}j=j+bh|0;u=u+bh|0;if(!be){t=t+(-1)|0;s=bf;}t=t+1|0;}}}
function Hd(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bA!==0.0&&f.bh!==0.0){m=j.us.data[g.cP];if(k)n=j.cu.kz;else{g=m.m7;if(g===null)g=j.cu.gt;if(l===null)l=BF(g);n=l;}g=m.na;if(AWh)i=0.0;EG(b,c,d,e,f,h,g,n,i);return;}return;}}
function OS(a,b){var c,d,e,f,g,h,i;c=a.bV;d=c.fk;e=0;f=c.o.data.length;g=b;b=BG(e,f);if(b>0){c=new BD;V(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BG(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function Qh(a){a.bV=null;J1(a.em,new Qi);Hp(a.em);}
function ABU(a,b,c,d,e,f,g,h,i){var j,k;j=EZ(a.bV);if(j)j=j+a.bU|0;if(!j)j=j-a.bU|0;k=Ba( -a.bU|0,j-g|0);if(k>=h)return;Bf(f,h-k|0,e);By(b,c+k|0,d,f,i);}
function AAa(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=Q(EU,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B2(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bV===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EU;f.bU=3;f.em=Cm();f.c8=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)Qh(o);h=h+1|0;}return g;}
function ACJ(){AVf=0;}
function UK(){C.call(this);this.xN=null;}
function UJ(){C.call(this);this.qY=null;}
function AOp(a,b){var c;c=a.qY;E7(c,FJ(b,Is(c)));}
function UF(){C.call(this);this.nn=null;}
function AMp(a,b){var c;c=a.nn;Ic(c,FJ(b,Kh(c)));}
function UE(){C.call(this);this.s7=null;}
function AOm(a){var b,c;b=a.s7;c=b.hQ?0:1;b.hQ=c;b=new M;O(b);F2(G(b,B(308)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function UH(){C.call(this);this.rl=null;}
function AJo(a){var b,c;b=a.rl;c=b.hF?0:1;b.hF=c;b=new M;O(b);F2(G(b,B(309)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function UG(){C.call(this);this.nK=null;}
function ALH(a){var b,c;b=a.nK;c=b.i$^1;b.i$=c;b=new M;O(b);F2(G(b,B(310)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function U7(){C.call(this);this.tt=null;}
function ANP(a){var b,c,d,e,f;b=a.tt;c=(b.kB+3|0)%6|0;b.kB=c;d=b.gj.data;e=d.length;f=0;while(f<e){b=d[f];b.bU=c;b=b.bV;if(b!==null)b.hN=1;f=f+1|0;}}
function U6(){C.call(this);this.ql=null;}
function AI3(a){var b;b=a.ql;b.bI=b.bI?0:1;NR(b.dR);b.dR=ABt();RU(b,b.bc,b.cz,b.cg.bM);}
var Fr=F(Cj);
var AVd=null;var AWi=null;var AVe=null;var AWj=null;function AEN(){AEN=Bl(Fr);ALP();}
function ABC(a,b){var c=new Fr();ABp(c,a,b);return c;}
function ABp(a,b,c){AEN();C_(a,b,c);}
function ALP(){var b;AVd=ABC(B(311),0);AWi=ABC(B(312),1);b=ABC(B(313),2);AVe=b;AWj=H(Fr,[AVd,AWi,b]);}
var ABZ=F(0);
function Jl(){var a=this;C.call(a);a.dX=null;a.eM=null;a.fm=null;}
var AUJ=0;function AB$(a){var b;b=a.eM;if(b!==null){AUJ=AUJ-1|0;a.dX.dm.deleteTexture(b);a.eM=null;}}
function Ce(a){return a.fm.b;}
function C8(a){return a.fm.a;}
function TC(a,b,c,d){var e;e=a.fm;e.b=b;e.a=c;LT(a);a.dX.dm.texStorage2D(3553,1,d,b,c);e=a.dX.dm;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function LT(a){var b,c;b=a.dX.dm;c=a.eM;b.bindTexture(3553,c);}
function CM(a,b){M9(a,b.lj,b.kw,32856);PC(a,b,0,0);}
function M9(a,b,c,d){var e,f,g,h;a:{e=a.fm;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){LT(a);break a;}e=a.dX.dm;h=a.eM;e.deleteTexture(h);a.eM=a.dX.dm.createTexture();TC(a,b,c,d);break a;}}TC(a,b,c,d);}}
function HV(a,b,c,d){LT(a);PC(a,b,c,d);}
function PC(a,b,c,d){var e;e=a.dX.dm;b=b.jj;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function TG(){C.call(this);this.jP=null;}
var AV6=null;function PJ(){var a=new TG();AAD(a);return a;}
function AAD(a){a.jP=Cm();}
function D3(a,b,c,d){Po(a,ABE(d,b,c));}
function D4(b,c,d){return ABE(d,b,c);}
function GF(a,b,c,d){Jx(a,b,c,d,null);}
function Jx(a,b,c,d,e){Po(a,ATg(null,b,c,d,e));}
function Po(a,b){B0(a.jP,b);}
function Hm(a){return FQ(HF(a.jP,AV6));}
function Yn(){AV6=Q(C$,0);}
var XM=F(0);
var AV7=null;function AC3(){AV7=new Nz;}
function Hy(){var a=this;C.call(a);a.u4=null;a.o9=null;a.un=null;a.rr=null;a.pP=null;a.iQ=null;}
function AWk(a,b,c,d,e,f){var g=new Hy();JQ(g,a,b,c,d,e,f);return g;}
function JQ(a,b,c,d,e,f,g){a.u4=b;a.o9=c;a.un=d;a.rr=e;a.pP=f;a.iQ=g;}
function ACy(){var a=this;C.call(a);a.jQ=null;a.qH=null;a.pO=null;}
function Y4(a,b,c){var d=new ACy();ANC(d,a,b,c);return d;}
function ANC(a,b,c,d){a.jQ=b;a.qH=c;a.pO=d;}
function Gt(){var a=this;C.call(a);a.kW=null;a.hm=null;a.pi=null;}
function AWl(a,b,c){var d=new Gt();Hk(d,a,b,c);return d;}
function Hk(a,b,c,d){a.kW=b;a.hm=c;a.pi=d;}
function ABh(){var b,c;b=new Gt;c=S(B(314));XH();Hk(b,c,AU$,AU_);return b;}
function AAl(){var b,c;b=new Gt;c=S(B(255));AJc();Hk(b,c,AWm,AWn);return b;}
function YO(){var b,c;b=new Gt;ABn();c=AWo;ANY();Hk(b,c,AWp,AWq);return b;}
function AD_(){var a=this;C.call(a);a.lP=null;a.q0=0;}
function Zj(a,b){var c=new AD_();AQK(c,a,b);return c;}
function AQK(a,b,c){var d;d=new BZ;a.lP=d;a.q0=b;d.bA=c;}
function Q6(a,b){return B_(a.q0,b);}
var DQ=F(0);
var AWa=null;var AWb=null;var AV9=null;var AV$=null;var AV_=null;var AU$=null;var AU_=null;var AWc=null;var AWd=null;function XH(){XH=Bl(DQ);AOT();}
function AOT(){AWa=S(B(315));AWb=S(B(316));AV9=S(B(314));AV$=S(B(317));AV_=S(B(294));AU$=S(B(315));AU_=S(B(316));AWc=Ft(118,121,122,128);AWd=CL(63,66,68);}
var Gk=F(0);
var W1=F();
function AN$(a,b,c,d){var e;b=Bv();d=Cq(d);e=new M;O(e);G(G(T(G(e,B(318)),c),B(272)),d);Bt(b,N(e));}
var W2=F();
function VT(){C.call(this);this.gu=null;}
function AEH(a,b){return Ks(a.gu,b);}
function AOa(a,b,c,d){return Ji(a.gu,b,c,d);}
function AMf(a,b,c){return Jd(a.gu,b,c);}
function AJM(a,b,c){return DI(a.gu);}
function X0(){C.call(this);this.rp=null;}
function ANA(a,b){var c;c=a.rp.iw;c.dZ=FJ(b,PI(c));}
function NK(){C.call(this);this.nm=null;}
function DB(a,b){Go(a.nm,b);return 1;}
var ABk=F();
function Pt(){C.call(this);this.mP=null;}
function AJU(a,b){var c;c=a.mP.i3;c.ex=FJ(b,RL(c));}
function Ro(){C.call(this);this.l7=null;}
function AEL(a,b){return DB(a.l7,null);}
var ZC=F();
function Mv(){C.call(this);this.m6=null;}
function AKQ(a){KK(a.m6);}
function Mw(){C.call(this);this.qo=null;}
function AJi(a){JP(a.qo);}
function HK(){var a=this;C.call(a);a.C=null;a.c_=null;a.d9=null;a.et=null;a.fg=null;a.cs=0;a.fz=0;a.pg=0.0;}
function T5(a){var b,c,d,e,f,g,h,i;b=Tp(a);c=new IN;d=new NN;e=NY(0,b,0);f=new Xw;f.s5=e;MF(d,1);e=BT(f);g=0;while(true){h=d.ci.data;i=h.length;if(g>=i)break;h[g]=BY(e);g=g+1|0;}d.i=i;T_(c,d);return c;}
function B2(a,b){return a.C.data[b];}
function Cw(a){return a.C.data.length;}
function Tp(a){return F7(a,Cw(a));}
function Fk(a,b){return a.C.data[b].R;}
function KZ(a,b){var c,d,e,f,g,h,i;c=a.C.data;d=c[b];e=c[b+1|0];f=DO(LE(d.o,e.o));g=a.C;h=g.data.length;if(b<h&&b>=0){i=Q(Cz,h-1|0);c=i.data;Q1(g,b,i);c[b]=f;a.C=i;return;}d=new Bo;V(d);J(d);}
function O5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.C.data;if(!(c<d[b].R?0:1)){d=(B2(a,b)).o.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.t)){f=L(h.t,g);break a;}g=g-I(h.t)|0;f=f+1|0;}f=0;}EL();h=new Bu;d=BM(1);d.data[0]=f;Hj(h,d);Gs(a,b,c,1,h);h=a.C.data[b];i=h.o;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].t);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].t)==1)h.o=Q1(i,j,Q(B7,e-1|0));else{k=d[j];if(c<=0)l=DC(Dk(k.t,1),k.cP,k.b9);else if(c>=(I(k.t)-1|0)){l=new B7;m=k.t;Ve(l,B$(m,0,I(m)-
1|0),k.cP,k.b9);}else{i=BM(I(k.t)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.t,b);b=b+1|0;}b=n.length;while(c<b){m=k.t;e=c+1|0;n[c]=L(m,e);c=e;}l=DC(FS(i),k.cP,k.b9);}d[j]=l;}h.R=h.R-1|0;Ee(h);}else if(b!=(d.length-1|0))KZ(a,b);}
function XR(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){W7(a.C.data[b],c,e[0]);return;}g=f-1|0;h=ID(a.C.data[b],c);d=a.C;i=Dl(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.o.data;m=l.length;c=!m?0:I(l[m-1|0].t);Ju(j,j.o.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fo(e[m]))j=DO(Q(B7,0));else{j=new Cz;l=Q(B7,1);l.data[0]=DC(e[m],0,0);H7(j,l);}d[b+m|0]=j;m=m+1|0;}Ju(h[1],0,0,e[g]);d[b+g|0]=h[1];a.C
=i;}
function V2(a,b){var c,d,e,f,g,h,i;c=D2(b);d=Fx(b);e=c.J;if(e==d.J)return B$(EJ(a.C.data[e]),c.ba,d.ba);f=new M;O(f);b=a.C.data[c.J];e=c.ba;BA(B1(f,Dk(EJ(b),e)),10);g=a.C;h=c.J+1|0;e=d.J;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;Yl(B1(f,EJ(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.C.data[d.J];i=d.ba;B1(f,B$(EJ(b),0,i));return N(f);}}b=new WA;V(b);J(b);}
function Ts(a,b,c){var d;UI(a,b);d=D2(b);Gs(a,d.J,d.ba,1,c);}
function UI(a,b){var c,d,e,f,g,h,i;a:{c=D2(b);d=Fx(b);e=c.J;if(e==d.J)FR(a.C.data[e],c.ba,d.ba);else{b=a.C.data[e];FR(b,c.ba,b.R);FR(a.C.data[d.J],0,d.ba);e=c.J+1|0;f=d.J;g=a.C;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=Q(Cz,(h-f|0)+e|0);AAs(g,e,f,i);a.C=i;KZ(a,c.J);break a;}b=new Bo;V(b);J(b);}b=new Bo;V(b);J(b);}}}
function HI(a,b,c){return ES(b,GU(B2(a,b),c));}
function Nu(a,b){var c,d,e;c=0;d=0;while(true){e=a.C.data.length;if(c>=e)break;if((d+(B2(a,c)).R|0)>=b)return BW(c,b-d|0);d=d+((B2(a,c)).R+1|0)|0;c=c+1|0;}return BW(e,0);}
function F7(a,b){var c,d,e;c=0;d=a.C.data.length;e=0;while(e<b){c=c+Fk(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Kb(a,b){return UQ(B2(a,b.bs),b.bE);}
function EE(a){var b,c,d,e,f,g,h,i,j;b=BM(Tp(a));c=b.data;d=a.C.data.length;e=0;f=0;while(e<d){g=a.C.data[e].o.data;h=g.length;i=0;while(i<h){j=g[i].t;PA(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gs(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cs=a.cs+1|0;f=a.fg;g=Q(GY,1);h=new GY;h.eG=b;h.fd=c;i=LS(e,B(219),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BW(b,c+I(i[0])|0);break a;}k=BW((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=BW(b,c);}i=g.data;h.kC=k;h.jn=d;h.gO=e;i[0]=h;B0(f,g);JE(a,b,c,d,e);}
function JE(a,b,c,d,e){var f;f=F7(a,b)+c|0;if(!d)Pv(a.c_,f,I(e));else TU(a.c_,f,I(e));}
function Ti(a,b){var c,d,e;c=LS(b.gO,B(219),(-1));if(b.jn){XR(a,b.eG,b.fd,c);Pv(a.c_,F7(a,b.eG)+b.fd|0,I(b.gO));}else{c=c.data;d=AMO();B4(d.bP,b.eG,b.fd);e=c.length;if(e==1)B4(d.bF,b.eG,b.fd+I(c[0])|0);else B4(d.bF,(b.eG+e|0)-1|0,I(c[e-1|0]));UI(a,d);TU(a.c_,F7(a,b.eG)+b.fd|0,I(b.gO));}return b.kC;}
function Pe(a){a.fz=a.cs;}
var EW=F();
function Md(){EW.call(this);this.v3=null;}
function My(){EW.call(this);this.v_=null;}
function P2(){EW.call(this);this.xb=null;}
var GS=F(0);
var Rj=F(0);
function Gg(){var a=this;C.call(a);a.J=0;a.ba=0;}
function B4(a,b,c){a.J=b;a.ba=c;}
function W_(a,b){a.J=b.J;a.ba=b.ba;}
function XD(a,b){var c;c=BG(a.J,b.J);if(c)return c;return BG(a.ba,b.ba);}
function Jf(){var a=this;C.call(a);a.kV=null;a.lC=null;}
function IZ(a){return a.kV.bs;}
function LH(a){return a.kV.bE;}
var KH=F(F9);
var AUx=null;function AHZ(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AEa(){var b;b=new KH;XW(b);AUx=b;}
function Ci(){Cj.call(this);this.kY=null;}
var AWr=null;var AWs=null;var AWt=null;var AWu=null;var AWv=null;var AWw=null;var AWx=null;var AWy=null;var AWz=null;var AWA=null;var AWB=null;var AWC=null;var AWD=null;var AWE=null;var AWF=null;var AVt=null;function ABy(){ABy=Bl(Ci);AQF();}
function DJ(a,b,c){var d=new Ci();XG(d,a,b,c);return d;}
function APF(a,b,c,d){var e=new Ci();ABf(e,a,b,c,d);return e;}
function XG(a,b,c,d){ABy();C_(a,b,c);a.kY=Ii(d,null);}
function ABf(a,b,c,d,e){ABy();C_(a,b,c);a.kY=Ii(d,e);}
function AQF(){var b;b=new Ci;G7();XG(b,B(319),0,AU7);AWr=b;AWs=DJ(B(320),1,S(B(321)));AWt=DJ(B(322),2,S(B(323)));AWu=DJ(B(324),3,S(B(325)));AWv=DJ(B(326),4,S(B(321)));AWw=DJ(B(327),5,CL(188,63,60));AWx=DJ(B(328),6,S(B(329)));AWy=DJ(B(330),7,S(B(331)));AWz=DJ(B(332),8,S(B(333)));AWA=APF(B(334),9,AU7,CL(52,65,52));AWB=APF(B(335),10,S(B(336)),S(B(337)));AWC=DJ(B(338),11,S(B(339)));AWD=DJ(B(340),12,S(B(341)));AWE=DJ(B(342),13,AU7);b=DJ(B(343),14,S(B(344)));AWF=b;AVt=H(Ci,[AWr,AWs,AWt,AWu,AWv,AWw,AWx,AWy,AWz,AWA,
AWB,AWC,AWD,AWE,b]);}
function IC(){var a=this;C.call(a);a.na=null;a.m7=null;}
function Ii(a,b){var c=new IC();AKM(c,a,b);return c;}
function AKM(a,b,c){a.na=b;a.m7=c;}
var ADA=F();
function Ip(b,c){var d,e,f;if(c<=0)return B(31);d=BM(c);e=d.data;e[0]=ACs(If(b,52));f=1;while(f<c){e[f]=ACs(If(b,62));f=f+1|0;}return FS(d);}
function ACs(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AAm=F();
function ADY(){var a=this;C.call(a);a.DZ=null;a.BH=null;a.CN=0;a.Cl=0;}
var ADm=F(0);
function AC7(b){var c;a:{switch(b){case 0:break;case 1:c=B(134);break a;case 2:c=B(243);break a;case 3:c=B(242);break a;default:c=null;break a;}c=B(143);}return c;}
var CR=F();
var ABL=F(CR);
var ACq=F(CR);
var Zs=F(CR);
var ZO=F(CR);
var ACW=F(CR);
function AAY(){var a=this;EA.call(a);a.dr=0;a.b6=null;a.c4=0;a.uQ=0.0;a.kp=0;}
function Gv(){var a=new AAY();AHt(a);return a;}
function AHt(a){var b;b=ADB(16);a.dr=0;a.b6=Q(H$,b);a.uQ=0.75;UO(a);}
function ADB(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function UO(a){a.kp=a.b6.data.length*a.uQ|0;}
function NH(a,b){return S0(a,b)===null?0:1;}
function DN(a,b){var c;c=S0(a,b);if(c===null)return null;return c.dx;}
function S0(a,b){var c,d;if(b===null)c=R_(a);else{d=b.i6();c=P0(a,b,d&(a.b6.data.length-1|0),d);}return c;}
function P0(a,b,c,d){var e;e=a.b6.data[c];while(e!==null&&!(e.iJ==d&&YK(b,e.du))){e=e.cN;}return e;}
function R_(a){var b;b=a.b6.data[0];while(b!==null&&b.du!==null){b=b.cN;}return b;}
function K9(a,b,c){var d,e,f;if(b===null){d=R_(a);if(d===null){a.c4=a.c4+1|0;d=UA(a,null,0,0);e=a.dr+1|0;a.dr=e;if(e>a.kp)U1(a);}}else{e=b.i6();f=e&(a.b6.data.length-1|0);d=P0(a,b,f,e);if(d===null){a.c4=a.c4+1|0;d=UA(a,b,f,e);e=a.dr+1|0;a.dr=e;if(e>a.kp)U1(a);}}b=d.dx;d.dx=c;return b;}
function UA(a,b,c,d){var e,f,g;e=new H$;f=null;e.du=b;e.dx=f;e.iJ=d;g=a.b6.data;e.cN=g[c];g[c]=e;return e;}
function U1(a){var b,c,d,e,f,g,h,i;b=a.b6.data.length;b=ADB(!b?1:b<<1);c=Q(H$,b);d=c.data;e=0;f=b-1|0;while(true){g=a.b6.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.iJ&f;i=h.cN;h.cN=d[b];d[b]=h;h=i;}e=e+1|0;}a.b6=c;UO(a);}
function YK(b,c){return b!==c&&!b.cD(c)?0:1;}
function Cz(){var a=this;C.call(a);a.o=null;a.R=0;a.fk=null;a.d_=null;a.dn=null;a.gN=null;a.fG=0;a.hN=0;a.hn=0;}
var AWG=0;var AWH=0;var AVh=0;function DO(a){var b=new Cz();H7(b,a);return b;}
function H7(a,b){var c,d,e,f;c=b.data;a.o=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].t)|0;f=f+1|0;}a.R=d;Ee(a);}
function Np(a,b){return a.o.data[b];}
function GU(a,b){var c;c=Im(a,b);return c<=0?0:a.dn.data[c-1|0];}
function Im(a,b){var c,d,e,f;c=a.o.data.length;if(!c)return (-1);if(!(a.dn!==null&&!a.hn)){Wo(a);d=0;e=0;f=a.o.data.length;while(d<f){e=e+I(a.o.data[d].t)|0;a.dn.data[d]=e;d=d+1|0;}a.hn=0;}d=TW(a.dn,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function UQ(a,b){var c;c=a.o.data;if(!c.length)return null;return c[Im(a,b)];}
function FR(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.R){a.o=Q(B7,0);Ee(a);a.R=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.o.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].t);i=I(a.o.data[f].t);j=BG(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.o.data[f];if(!b&&c==I(k.t)?1:0){g=a.o;a.o=Q1(g,e,Q(B7,g.data.length-1|0));a.R=a.R-d|0;Ee(a);return;}a.o.data[e]=DC(Fb(B$(k.t,0,b),Dk(k.t,c)),k.cP,k.b9);}else{g=a.o.data;l=g[e];m=g[f];if(b){if(b!=
I(l.t))a.o.data[e]=DC(B$(l.t,0,b),l.cP,l.b9);e=e+1|0;}if(c==I(m.t))f=f+1|0;else if(c)a.o.data[f]=DC(Dk(m.t,c),m.cP,m.b9);g=a.o;a.o=AAs(g,e,f,Q(B7,(g.data.length-f|0)+e|0));}a.R=a.R-d|0;Ee(a);}
function ID(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(Cz,[DO(Q(B7,0)),a]);if(b>=a.R)return H(Cz,[a,DO(Q(B7,0))]);c=a.o;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].t);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(Cz,[DO(KU(c,0,Q(B7,d))),DO(KU(c,d,Q(B7,f-d|0)))]);h=e[d];e=KU(c,0,Q(B7,d+1|0));i=e.data;j=KU(c,d,Q(B7,f-d|0));c=j.data;i[d]=DC(B$(h.t,0,b),h.cP,h.b9);c[0]=DC(Dk(h.t,b),h.cP,h.b9);return H(Cz,[DO(e),DO(j)]);}
function W7(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.o.data;if(e>=f.length)break a;g=I(f[d].t);if(b<=g)break;b=b-g|0;d=e;}}Ju(a,d,b,c);}
function Ju(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.o;f=e.data;g=f.length;if(!g){h=Q(B7,1);h.data[0]=RY(d);a.o=h;}else if(!b&&!c){i=Q(B7,g+1|0);h=i.data;Eg(e,0,i,1,g);h[0]=RY(d);a.o=i;}else{j=f[b];if(c<=0)k=DC(Fb(d,j.t),j.cP,j.b9);else if(c>=I(j.t))k=DC(Fb(j.t,d),j.cP,j.b9);else{l=I(d);m=l+c|0;n=I(j.t)-c|0;h=BM(I(j.t)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.t,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.t,g+c|0);g=g+1|0;}k=DC(FS(h),j.cP,j.b9);}f[b]=k;}a.R=a.R+I(d)|0;Ee(a);}
function W8(a){var b,c,d,e,f,g;b=0;c=a.o.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Mc(f)){if(L(f.t,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Lc(a,b,c){var d,e,f,g,h,i,j;d=a.o.data.length;e=a.fk;if(!(e!==null&&e.data.length>=d)){a.fk=AEt(d);a.d_=BC(d);a.fG=1;}Wo(a);if(!a.fG)AWH=AWH+1|0;else{f=0;g=0.0;AWG=AWG+1|0;h=0;while(h<d){i=c.data;j=a.o.data[h];f=f+I(j.t)|0;a.dn.data[h]=f;Cy(b,i[j.b9]);g=g+Eo(b,j.t);a.fk.data[h]=g;a.d_.data[h]=g+0.5|0;h=h+1|0;}a.R=f;a.fG=0;a.hn=0;}}
function Wo(a){var b;b=a.dn;if(!(b!==null&&b.data.length>=a.o.data.length)){a.dn=BC(a.o.data.length);a.hn=1;}}
function Ee(a){a.fG=1;a.hN=1;a.hn=1;a.gN=null;}
function WH(a,b,c,d){var e,f,g,h,i,j,k;if(a.gN===null)a.gN=Q($rt_arraycls($rt_intcls()),a.o.data.length);e=a.gN.data[d];if(e===null){e=c.data;f=a.o.data[d];Cy(b,e[f.b9]);f=f.t;e=BC(I(f)-1|0);c=Gp(f);g=!d?0.0:a.fk.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bu;k=i+1|0;X1(f,c,0,k);h[i]=g+Eo(b,f)+0.5|0;i=k;}a.gN.data[d]=e;}return e;}
function GW(a,b,c,d){var e,f,g,h,i;if(a.o.data.length&&b){if(!(!a.fG&&a.d_!==null))Lc(a,c,d);if(b>=a.R)return a.d_.data[a.o.data.length-1|0];e=0;f=0;a:{while(true){g=a.o.data;if(f>=g.length)break a;h=e+I(g[f].t)|0;i=BG(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.d_.data[f];}return (WH(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function EZ(a){var b,c,d;a:{b=a.o.data.length;if(b){c=a.d_.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GP(a,b){var c;if(b>=a.R)return b+1|0;c=Im(a,b);return a.dn.data[c];}
function EJ(a){var b,c,d,e;b=new M;FU(b,a.R);c=a.o.data;d=c.length;e=0;while(e<d){B1(b,c[e].t);e=e+1|0;}return N(b);}
function MN(b){var c,d,e,f;c=Q(Cz,1);d=c.data;e=new Cz;f=Q(B7,1);f.data[0]=RY(b);H7(e,f);d[0]=e;return c;}
function Yq(){AVh=0;}
var Nz=F();
function AQO(a){}
function Ud(){C.call(this);this.s6=null;}
function ALd(a){var b;b=a.s6;Bt(Bv(),b);}
function B7(){var a=this;C.call(a);a.t=null;a.cP=0;a.b9=0;}
function RY(a){var b=new B7();APA(b,a);return b;}
function DC(a,b,c){var d=new B7();Ve(d,a,b,c);return d;}
function APA(a,b){Ve(a,b,0,0);}
function Ve(a,b,c,d){a.t=b;a.cP=c;a.b9=d;}
function Hg(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Mc(a){return I(a.t);}
function IN(){var a=this;C.call(a);a.cR=null;a.d2=0;}
var AWI=null;var AWJ=null;function AS1(a){var b=new IN();T_(b,a);return b;}
function AR5(a,b){var c=new IN();XV(c,a,b);return c;}
function Vl(b,c){var d;d=BG(b.bN,c.bN);if(!d)d=BG(c.bS,b.bS);return d;}
function T_(a,b){XV(a,null,b);}
function XV(a,b,c){var d,e;a.d2=0;if(Eb(c))return;N4(c,AWI);if(b!==null)a.cR=MA(b);c=BT(c);while(B5(c)){d=BY(c);e=a.cR;if(e!==null){Q7(a,e,MA(d));continue;}a.cR=MA(d);}}
function O7(a,b){var c;if(b.eV)return b;b=BT(b.bx);while(true){if(!B5(b))return null;c=O7(a,BY(b));if(c!==null)break;}return c;}
function Kz(a,b,c){var d,e,f;d=b.b4;if(d.bN==c.bN&&d.bS==c.bS?1:0){e=BT(b.bx);while(B5(e)){f=Kz(a,BY(e),c);if(f!==null)return f;}return b;}b=BT(b.bx);while(true){if(!B5(b))return null;d=BY(b);if(P7(d,c.bN,c.bS)){e=Kz(a,d,c);if(e!==null)break;}}return e;}
function Wp(a,b,c){B0(c,b.b4);b=BT(b.bx);while(B5(b)){Wp(a,BY(b),c);}}
function Pv(a,b,c){a.d2=0;Jc(a,a.cR,b,c);}
function Jc(a,b,c,d){var e;if(C9(b)<c)return;a:{if(CX(b)>c){Kx(b,d);FV(b,d);b=BT(b.bx);while(B5(b)){Jc(a,BY(b),c,d);}}else{if(!Ke(b,c)){if(a.d2)break a;if(C9(b)!=c)break a;}FV(b,d);if(CX(b)==c&&a.d2)Kx(b,d);e=BT(b.bx);while(B5(e)){Jc(a,BY(e),c,d);}if(!a.d2){b.eV=1;a.d2=1;}}}}
function TU(a,b,c){a.d2=0;Mh(a,a.cR,b,c);}
function Mh(a,b,c,d){var e,f,g,h;if(C9(b)<c)return;e=CX(b);f=c+d|0;if(e>f){e= -d|0;Kx(b,e);FV(b,e);g=BT(b.bx);while(B5(g)){Mh(a,BY(g),c,d);}b.bx=NB(a,b.bx);}else{g=b.b4;if(c<=g.bN&&g.bS<=f?1:0){if(b!==a.cR){Jk(b,(-1));J_(b,(-1));}else{Jk(b,0);J_(b,0);}Hp(b.bx);}else{e=Ke(b,c);f=Ke(b,f);if(e&&f)FV(b, -d|0);else if(e)J_(b,c);else{if(!f)return;Jk(b,c);FV(b, -d|0);}h=BT(b.bx);while(B5(h)){Mh(a,BY(h),c,d);}b.bx=NB(a,b.bx);if(!a.d2){b.eV=1;a.d2=1;}}}}
function NB(a,b){var c,d,e,f,g,h;c=Cm();d=null;N4(b,AWJ);b=BT(b);while(B5(b)){e=BY(b);if(CX(e)==C9(e))continue;if(!e.eV){if(d!==null){B0(c,d);d=null;}B0(c,e);}else if(d===null)d=e;else{f=Y(CX(d),CX(e));g=Ba(C9(d),C9(e));h=MA(NY(f,g,d.b4.fb));h.dI=e.dI;h.eV=1;d=h;}}if(d!==null)B0(c,d);return c;}
function Q7(a,b,c){var d,e;a:{if(OC(b,c)){d=BT(b.bx);while(true){if(!B5(d)){B0(b.bx,c);c.dI=b;break a;}e=BY(d);if(OC(e,c))break;}Q7(a,e,c);return;}}}
function Sa(a,b,c,d){var e,f,g,h,i,j;if((C9(c)-CX(c)|0)<43)e=B$(d,CX(c),C9(c));else{e=B$(d,CX(c),CX(c)+20|0);f=B$(d,C9(c)-20|0,C9(c));g=new M;O(g);G(G(G(g,e),B(193)),f);e=N(g);}e=U8(e,B(219),B(345));f=Bv();g=Cq(c);h=new M;O(h);i=T(h,b);BA(i,32);g=G(i,g);BA(g,9);G(g,e);Bt(f,N(h));c=BT(c.bx);j=b+1|0;while(B5(c)){Sa(a,j,BY(c),d);}}
function AB8(){AWI=new Xi;AWJ=new Xk;}
function ADE(){var a=this;C.call(a);a.bN=0;a.bS=0;a.fb=0;}
function NY(a,b,c){var d=new ADE();AHz(d,a,b,c);return d;}
function AHz(a,b,c,d){a.bN=b;a.bS=c;a.fb=d;}
function AOX(a,b){var c;if(a===b)return 1;if(b!==null&&Cn(a)===Cn(b)){c=b;return a.bN==c.bN&&a.bS==c.bS&&a.fb==c.fb?1:0;}return 0;}
function AF9(a,b){var c;b=b;c=BG(a.bN,b.bN);if(!c)c=BG(b.bS,a.bS);return c;}
var Xi=F();
function AIR(a,b,c){return Vl(b,c);}
var Xk=F();
function AKu(a,b,c){b=b;c=c;return Vl(b.b4,c.b4);}
var EX=F();
var AWK=null;var AWL=null;var AWM=null;var AWN=null;var AWO=null;var AWP=null;function ABA(){AWK=new Vu;AWL=new Vs;AWM=new Vt;AWN=new Vq;AWO=new Vr;AWP=new XZ;}
var G2=F(F3);
function ALq(a,b){var c;c=new Fh;V(c);J(c);}
function Xw(){G2.call(this);this.s5=null;}
function AHX(a){return 1;}
function AQB(a,b){var c;if(!b)return a.s5;c=new Bw;V(c);J(c);}
function Yo(){var a=this;C.call(a);a.b4=null;a.dI=null;a.bx=null;a.eV=0;}
function MA(a){var b=new Yo();ANh(b,a);return b;}
function ANh(a,b){a.eV=0;a.b4=b;a.dI=null;a.bx=Cm();}
function CX(a){return a.b4.bN;}
function C9(a){return a.b4.bS;}
function Jk(a,b){a.b4.bN=b;}
function J_(a,b){a.b4.bS=b;}
function Kx(a,b){var c;c=a.b4;c.bN=c.bN+b|0;}
function FV(a,b){var c;c=a.b4;c.bS=c.bS+b|0;}
function Ke(a,b){return CX(a)<=b&&b<C9(a)?1:0;}
function P7(a,b,c){var d;d=a.b4;return d.bN<=b&&c<=d.bS?1:0;}
function OC(a,b){b=b.b4;return P7(a,b.bN,b.bS);}
function AIY(a){var b,c,d,e,f;b=a.b4;c=b.bN;d=b.bS;e=b.fb;b=new M;O(b);BA(b,40);BA(T(G(T(G(T(b,c),B(43)),d),B(43)),e),41);b=N(b);c=a.eV;f=new M;O(f);F2(G(G(f,b),B(43)),c);return N(f);}
var OM=F(0);
var Ga=F(EN);
var Ka=F(Ga);
var Vu=F(Ka);
var Lq=F(EA);
var Vs=F(Lq);
var Vt=F(G2);
var FB=F(0);
var Vq=F();
var Pa=F(0);
var Vr=F();
var XZ=F();
function Nr(){var a=this;C.call(a);a.hl=0;a.lK=0;a.ie=0;a.f0=0;a.gy=null;}
function B5(a){return a.hl>=a.ie?0:1;}
function BY(a){var b,c;O0(a);b=a.hl;a.f0=b;c=a.gy;a.hl=b+1|0;return c.rj(b);}
function QG(a){var b,c,d;if(a.f0<0){b=new DY;V(b);J(b);}O0(a);a.gy.t9(a.f0);a.lK=a.gy.ct;c=a.f0;d=a.hl;if(c<d)a.hl=d-1|0;a.ie=a.ie-1|0;a.f0=(-1);}
function O0(a){var b;if(a.lK>=a.gy.ct)return;b=new IE;V(b);J(b);}
var Z8=F();
function VQ(){C.call(this);this.ja=null;}
function AOy(a,b){var c,d,e,f,g;c=a.ja;d=c.jG;if(d!==null){e=b.h;f=e.b-d.b|0;g=e.a-d.a|0;e=c.h$;e.b=Et(0,e.b+f|0,c.gp.b-c.hk.b|0);c=a.ja;d=c.h$;d.a=Et(0,d.a+g|0,c.gp.a-c.hk.a|0);}a.ja.jG=b.h;return 1;}
var AAi=F();
function KA(){var a=this;C.call(a);a.du=null;a.dx=null;}
function AG4(a,b){var c,d;if(a===b)return 1;if(!IB(b,He))return 0;a:{b:{c:{d:{c=b;b=a.du;if(b!==null){if(!b.cD(c.du))break c;else break d;}if(c.du!==null)break c;}b=a.dx;if(b!==null){if(!b.cD(c.dx))break c;else break b;}if(c.dx===null)break b;}d=0;break a;}d=1;}return d;}
function H$(){var a=this;KA.call(a);a.iJ=0;a.cN=null;}
function MJ(){C.call(this);this.pv=null;}
function AOL(a,b){HD(a.pv,b);}
function VY(){C.call(this);this.iA=null;}
function AQS(a){return a.iA;}
var CW=F(0);
var AVu=null;var AWQ=null;var AVw=null;var AVv=null;var AVy=null;var AVx=null;var AVA=null;var AVz=null;var AVC=null;var AVB=null;var AVD=null;function AMh(){AMh=Bl(CW);ALj();}
function ALj(){AVu=C3(206);AWQ=S(B(346));AVw=S(B(347));AVv=S(B(250));AVy=S(B(348));AVx=S(B(349));AVA=S(B(350));AVz=S(B(351));AVC=Ft(107,106,107,128);AVB=Ft(30,31,34,0);AVD=S(B(252));}
function Ca(){Cj.call(this);this.kd=null;}
var AWR=null;var AWS=null;var AWT=null;var AWU=null;var AWV=null;var AWW=null;var AWX=null;var AWY=null;var AWZ=null;var AW0=null;var AW1=null;var AW2=null;var AW3=null;var AW4=null;var AW5=null;var AVE=null;function AA9(){AA9=Bl(Ca);AFW();}
function Dw(a,b,c){var d=new Ca();W9(d,a,b,c);return d;}
function AR8(a,b,c,d){var e=new Ca();Qp(e,a,b,c,d);return e;}
function W9(a,b,c,d){AA9();C_(a,b,c);a.kd=Ii(d,null);}
function Qp(a,b,c,d,e){AA9();C_(a,b,c);a.kd=Ii(d,e);}
function AFW(){var b,c;b=new Ca;AMh();W9(b,B(319),0,AWQ);AWR=b;AWS=Dw(B(320),1,S(B(352)));AWT=Dw(B(322),2,S(B(353)));AWU=Dw(B(324),3,S(B(354)));AWV=Dw(B(326),4,AWQ);AWW=Dw(B(327),5,S(B(355)));AWX=Dw(B(328),6,S(B(356)));AWY=Dw(B(330),7,S(B(357)));AWZ=Dw(B(332),8,S(B(358)));c=new Ca;G7();Qp(c,B(334),9,AU7,S(B(350)));AW0=c;AW1=AR8(B(335),10,AU7,S(B(253)));AW2=Dw(B(338),11,S(B(359)));AW3=Dw(B(340),12,S(B(360)));AW4=Dw(B(342),13,AWQ);b=Dw(B(343),14,S(B(344)));AW5=b;AVE=H(Ca,[AWR,AWS,AWT,AWU,AWV,AWW,AWX,AWY,AWZ,AW0,
AW1,AW2,AW3,AW4,b]);}
var DR=F(0);
var AVI=null;var AVJ=null;var AVF=null;var AVG=null;var AVH=null;var AWm=null;var AWn=null;var AVK=null;var AVL=null;function AJc(){AJc=Bl(DR);AMs();}
function AMs(){AVI=S(B(349));AVJ=S(B(361));AVF=S(B(255));AVG=S(B(356));AVH=S(B(346));AWm=S(B(349));AWn=S(B(362));AVK=S(B(363));AVL=CL(43,45,48);}
function AD4(){var a=this;C.call(a);a.bp=null;a.S=null;a.O=null;a.ea=null;}
function ABq(a){var b=new AD4();AQQ(b,a);return b;}
function AQQ(a,b){var c;a.O=ARS();a.bp=b;c=new Tt;Ls(c);c.ld=new BZ;c.gI=b;a.S=c;}
function IA(a,b,c,d){var e,f,g,h;e=a.S;f=C6(e.gq,c)?0:1;g=C6(e.gL,b)?0:1;h=d===e.iI?0:1;if(f){e.gq=c;e.dV=null;XA(e,0);}e.gx=!f&&!g&&!h?0:1;e.gL=b;e.iI=d;e.hr=0;JZ(a);}
function JS(a){var b;b=a.S;b.da=CG(b.da,null);a.O=CG(a.O,null);}
function LJ(a,b){var c,d,e;c=a.O;d=c.D;e=c.q;b=CG(c,b);a.O=b;b.iN(d,e,a.bp.bM);}
function Fm(a,b,c){var d;d=a.O;d.iN(b,c,d.dW);JZ(a);}
function JZ(a){var b,c,d,e;b=a.S;c=a.O.q.b;b.q.b=c;d=b.da;if(d!==null&&c!=Ce(d)&&!(c>=b.hr&&Ce(b.da)>=b.hr))b.gx=1;b=a.S;b.dW=a.bp.bM;if(TS(b))c=0;else{b=a.S;QR(b);e=Cv(b.gI,b.iI);XA(b,E0(b.dV)+(e*2|0)|0);c=b.q.a;}b=a.S.D;d=a.O.D;Bf(b,d.b,d.a-c|0);}
function JD(b,c){if(b<0)c=B(364);else if(b>0)c=B(365);return c;}
function N7(a,b,c){var d;d=a.S.D.b;return (d-c|0)<=b&&b<d?1:0;}
function TI(a,b,c){var d,e;d=a.S;e=d.D.b+d.q.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Pk(a,b,c){var d;d=a.S.D.a;return (d-c|0)<=b&&b<d?1:0;}
function P6(a,b,c){var d,e;d=a.O;e=d.D.a+d.q.a|0;return e<=b&&b<(e+c|0)?1:0;}
function MP(a,b,c){var d,e,f;d=a.S.D.a-c|0;e=a.O;f=(e.D.a+e.q.a|0)+c|0;return d<=b&&b<f?1:0;}
function RN(a,b,c){var d,e;d=a.S.D.a+c|0;e=a.O;return ACv(b,d,(e.D.a+e.q.a|0)-c|0);}
function VA(a,b,c){var d,e,f;d=a.S;e=d.D.b;f=e-c|0;e=(e+d.q.b|0)+c|0;return f<=b&&b<e?1:0;}
function UN(a,b,c){var d,e;d=a.S;e=d.D.b;return ACv(b,e+c|0,(e+d.q.b|0)-c|0);}
function ACv(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BG(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function H5(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bi;f=new Bi;g=b.b;h=b.a;b=a.O;i=b.D;j=i.b;k=i.a;b=b.q;l=b.b;m=b.a;b=new Xn;b.nU=a;b.nT=e;b.nR=f;b.nQ=c;b.nY=g;b.nX=j;b.nW=l;b.nV=d;b.n0=h;b.nZ=k;b.rX=m;return b;}
var Lx=F(0);
function Rg(){C.call(this);this.oH=null;}
function ALU(a,b){return QH(a.oH,b);}
var Sl=F(0);
var AV5=null;function AB7(){AV5=new Qa;}
function AC9(){var a=this;C.call(a);a.bs=0;a.bE=0;}
function ES(a,b){var c=new AC9();AKA(c,a,b);return c;}
function AKA(a,b,c){a.bs=b;a.bE=c;}
function AES(a,b){var c;if(a===b)return 1;if(b!==null&&Cn(a)===Cn(b)){c=b;return a.bs==c.bs&&a.bE==c.bE?1:0;}return 0;}
function ANU(a){var b,c,d,e,f,g,h;b=Q(C,2).data;b[0]=FX(a.bs);b[1]=FX(a.bE);c=(-1515898884);d=0;while(d<b.length){e=b[d];if(e===null)f=0;else{g=e.fp;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;c=J$(h,4)^((h>>>7|0)|h<<25)^J$(c,13);d=d+1|0;}return c;}
function ANs(a,b){var c;b=b;c=BG(a.bs,b.bs);if(!c)c=BG(a.bE,b.bE);return c;}
function Tg(){C.call(this);this.uc=null;}
function AGU(a,b){var c;c=a.uc;Tj(c,ET(c,b.h));KF(c.r,c.w,c.x);GO(c);}
var Y1=F();
function B_(b,c){return Dg(b*c);}
var Yb=F();
function AC5(b,c,d,e,f,g){g.b=c.b;g.a=f;By(b,d.b,d.a,g,e);By(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;By(b,d.b,d.a+f|0,g,e);By(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function ACn(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;By(b,j,k,i,h);By(b,j,k,i,h);By(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;By(b,l,j,i,h);By(b,l,j,i,h);By(b,l+g|0,j+g|0,i,h);}
function Na(){var a=this;C.call(a);a.b0=null;a.iM=null;a.eu=null;a.dH=0;a.er=0;a.gb=null;a.fE=null;a.fH=0;}
function SY(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dH;i=Z(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Ba(i,e))a:{while(true){if(d<=e){j=d;break a;}Eu(c);j=d+(-1)|0;b=C5(d);d=Z(j,a.er)%a.eu.a|0;F5(a,c,b,a.fH,g);HV(a.b0,c,0,d);if(!(j%a.dH|0))break;d=j;}}else{Eu(b);k=a.dH-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;F5(a,b,C5(j),Z(a.er,k)+a.fH|0,g);k=k+(-1)|0;j=h;}CM(a.b0,b);j=Ba(i,e);}return j;}k=a.dH;h=Z(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Y(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Eu(c);b=C5((d+f|0)+1|0);j=d+1|0;d
=Z(d,a.er)%a.eu.a|0;F5(a,c,b,a.fH,g);HV(a.b0,c,0,d);if(!(j%a.dH|0))break;d=j;}}else{Eu(b);d=0;while(d<a.dH){h=h+1|0;F5(a,b,C5((h>e?h-f|0:h)+f|0),Z(a.er,d)+a.fH|0,g);d=d+1|0;}CM(a.b0,b);j=Y(i,e);}return j;}
function IY(a,b,c,d,e,f){EG(b,a.iM.b+d.b|0,c+d.a|0,a.gb,a.fE,a.b0,e,f,0.0);}
function F5(a,b,c,d,e){Ch(b,c,a.eu.b-20.0*e,d);}
var FK=F(In);
var W0=F(EF);
function P9(){C.call(this);this.mm=null;}
function AMT(a,b){var c,d;c=a.mm;d=c.dy+1|0;c.dy=d;c=new M;O(c);G(G(T(c,d),B(366)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function T8(){C.call(this);this.pD=null;}
function APm(a){var b,c;b=a.pD;c=new M;O(c);G(G(G(c,B(367)),b),B(368));$rt_globals.console.info($rt_ustr(N(c)));}
var Yt=F();
function F4(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function Y7(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
var IE=F(Bo);
var L3=F(DU);
var AW6=0.0;var AW7=null;function AB9(){AW6=$rt_globals.NaN;AW7=E($rt_floatcls());}
var Fy=F();
var AUn=null;var AUp=null;var AUq=null;var AUo=null;var AUm=null;function AAU(){AUn=E4([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AUp=AGe([Bb(1),Bb(10),Bb(100),Bb(1000),Bb(10000),Bb(100000),Bb(1000000),Bb(10000000),Bb(100000000),Bb(1000000000),Cc(1410065408, 2),Cc(1215752192, 23),Cc(3567587328, 232),Cc(1316134912, 2328),Cc(276447232, 23283),Cc(2764472320, 232830),Cc(1874919424, 2328306),Cc(1569325056, 23283064),Cc(2808348672, 232830643)]);AUq=AGe([Bb(1),Bb(10),Bb(100),Bb(10000),Bb(100000000),
Cc(1874919424, 2328306)]);AUo=new T6;AUm=new Vn;}
var J3=F();
var AW8=null;var AW9=null;function ABB(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.ng=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.ka=0;c.jX=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Fa(CV(Bb(e),Bb(8388608)),Em)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=ABK(AW9,f);if(h<0)h=( -h|0)-2|0;i=AW9.data;j=9+(f-i[h]|0)|0;k=Bb(e);l=AW8.data;m=EC(D5(BP(k,Bb(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=EC(D5(BP(k,Bb(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<
( -g|0);o=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BG(q,r);e=e>0?Z(m/q|0,q):e<0?Z(m/r|0,r)+r|0:Z((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.ka=e;c.jX=h-50|0;}
function Z3(){var b,c,d,e,f,g,h,i;AW8=BC(100);AW9=BC(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AW8.data;g=d+50|0;f[g]=$rt_udiv(e,20);AW9.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:EC(Cp(Bb(h),Gl(BP(Bb(b&((1<<i)-1|0)),Bb(10)),i)));f=AW8.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AW9.data[i]=c;d=d+1|0;}}
function Vn(){var a=this;C.call(a);a.ka=0;a.jX=0;a.ng=0;}
function LW(){var a=this;C.call(a);a.v2=null;a.l_=0.0;a.wl=0.0;a.eP=null;a.gF=null;a.lm=null;a.e0=0;}
function ADn(a,b){var c;if(b!==null){a.gF=b;return a;}c=new BD;Bj(c,B(369));J(c);}
function ABQ(a,b){var c;if(b!==null){a.lm=b;return a;}c=new BD;Bj(c,B(369));J(c);}
function PR(a,b,c,d){var e,f,g,$$je;e=a.e0;if(!(e==2&&!d)&&e!=3){a.e0=d?2:1;while(true){try{f=ADq(a,b,c);}catch($$e){$$je=Ef($$e);if($$je instanceof Bo){g=$$je;J(AG5(g));}else{throw $$e;}}if(G3(f))return f;if(Ia(f)){if(d&&DM(b)){g=a.gF;G6();if(g===AUS)return DZ(B6(b));if(B6(c)<=I(a.eP))return AUV;ED(b,b.V+B6(b)|0);if(a.gF===AUT)J5(c,a.eP);}return f;}if(Qo(f)){g=a.gF;G6();if(g===AUS)return f;if(g===AUT){if(B6(c)<I(a.eP))return AUV;J5(c,a.eP);}ED(b,b.V+J9(f)|0);}else if(LU(f)){g=a.lm;G6();if(g===AUS)break;if(g
===AUT){if(B6(c)<I(a.eP))return AUV;J5(c,a.eP);}ED(b,b.V+J9(f)|0);}}return f;}b=new DY;V(b);J(b);}
function Ze(a,b){var c,d,e,f;c=a.e0;if(c&&c!=3){b=new DY;V(b);J(b);}if(!B6(b))return ADO(0);if(a.e0)a.e0=0;d=ADO(Ba(8,B6(b)*a.l_|0));while(true){e=PR(a,b,d,0);if(Ia(e))break;if(G3(e))d=SD(a,d);if(!KG(e))continue;Vj(e);}b=PR(a,b,d,1);if(KG(b))Vj(b);while(true){f=a.e0;if(f!=3&&f!=2)break;a.e0=3;if(Ia(AUW)){d.dp=d.V;d.V=0;d.g8=(-1);return d;}d=SD(a,d);}b=new DY;V(b);J(b);}
function SD(a,b){var c,d,e;c=b.gY;d=YI(c,Ba(8,c.data.length*2|0));e=AA3(d,0,d.data.length);ED(e,b.V);return e;}
function XI(){C.call(this);this.m$=null;}
function AFk(a,b){Db(a.m$,b);}
function VG(){C.call(this);this.ol=null;}
function AQ5(a,b){var c,d;c=a.ol;d=c.dy+1|0;c.dy=d;c=b.ha;b=new M;O(b);G(G(T(b,d),B(370)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Qa=F();
function AL3(a,b){}
var AAC=F(CR);
function Rm(){C.call(this);this.ml=null;}
function AJh(a){ND(a.ml);}
function Vg(){C.call(this);this.o8=null;}
function ANc(a){XC(a.o8);}
function T6(){var a=this;C.call(a);a.kM=Em;a.jF=0;a.mQ=0;}
var DY=F(Bo);
var AB4=F(EF);
function AG5(a){var b=new AB4();ALr(b,a);return b;}
function ALr(a,b){a.iW=1;a.jg=1;a.ky=b;}
var Qi=F();
function AP6(a,b){AB$(b);}
function Q5(){C.call(this);this.tZ=null;}
function AIu(a,b){Db(a.tZ,b);}
function Q4(){C.call(this);this.og=null;}
function ALW(a,b){Db(a.og,b);}
function Sd(){var a=this;C.call(a);a.vV=null;a.vW=null;a.vU=null;}
function NI(){var a=this;C.call(a);a.sS=null;a.sU=null;a.sT=0;}
function AE7(a,b){var c,d,e;c=a.sS;d=a.sU;e=a.sT;d.n(Xl(c,(b.h.b+e|0)-c.dU.b|0));}
function NG(){var a=this;C.call(a);a.pL=null;a.pK=null;a.pM=0;}
function AG6(a,b){var c,d,e;c=a.pL;d=a.pK;e=a.pM;d.n(Ou(c,(b.h.a+e|0)-c.dU.a|0));}
function SP(){C.call(this);this.uC=null;}
function AGP(a,b){var c,d,e;c=a.uC;if(c.e.f.cs==c.kD){b=b.data;d=D6(b[0]);e=FG(b[1]);AA7(c.e.f,d,e);Pe(c.e.f);}}
function Ko(){var a=this;LW.call(a);a.np=null;a.rV=null;}
function ADq(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.np;e=0;f=0;g=a.rV;a:{b:{while(true){if((e+32|0)>f&&DM(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B6(b)+k|0;h=j.length;f=Y(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new Bw;c=new M;O(c);T(G(T(G(c,B(371)),l),B(91)),h);Bj(b,N(c));J(b);}if(B6(b)<m){b=new LM;V(b);J(b);}if(m<0){b=new Bw;c=new M;O(c);G(T(G(c,B(92)),m),B(93));Bj(b,N(c));J(b);}n=b.V;h=n+b.kq|0;e=0;while(e<m){o=k+1|0;i=b.k6.data;l=h+1|0;j[k]=i[h];e=e+
1|0;k=o;h=l;}b.V=n+m|0;e=0;}if(!DM(c)){p=!DM(b)&&e>=f?AUW:AUV;break a;}i=g.data;n=B6(c);o=i.length;n=Y(n,o);q=new U5;q.qQ=b;q.sY=c;p=ADC(a,d,e,f,g,0,n,q);e=q.ur;if(p===null&&0==q.jH)p=AUW;k=q.jH;h=0;if(c.lR){b=new IX;V(b);J(b);}if(B6(c)<k)break;if(h>o){b=new Bw;c=new M;O(c);BA(T(G(T(G(c,B(94)),h),B(88)),o),41);Bj(b,N(c));J(b);}l=h+k|0;if(l>o){b=new Bw;c=new M;O(c);T(G(T(G(c,B(96)),l),B(91)),o);Bj(b,N(c));J(b);}if(k<0){b=new Bw;c=new M;O(c);G(T(G(c,B(92)),k),B(93));Bj(b,N(c));J(b);}o=c.V;m=0;while(m<k){l=o+1
|0;n=h+1|0;Sk(c,o,i[h]);m=m+1|0;o=l;h=n;}c.V=c.V+k|0;if(p!==null)break a;}b=new HS;V(b);J(b);}b=new Bw;c=new M;O(c);BA(T(G(T(G(c,B(94)),k),B(88)),h),41);Bj(b,N(c));J(b);}ED(b,b.V-(f-e|0)|0);return p;}
var Tx=F(Ko);
function ADC(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Kr(h,2))break a;i=AUW;break a;}c=k+1|0;n=j[k];if(!FD(a,n)){c=c+(-2)|0;i=DZ(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Kr(h,3))break a;i=AUW;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!FD(a,n))break b;if(!FD(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(L2(p)){c=k+(-3)|0;i=DZ(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=DZ(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Kr(h,4))break a;i=AUW;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B6(h.sY)<2?0:1)break a;i=AUV;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!FD(a,n))break c;if(!FD(a,o))break c;if(!FD(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=H4(r);m=c+1|0;j[c]=IG(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=DZ(1);break a;}c=k+(-3)|0;i
=DZ(1);}h.ur=c;h.jH=f;return i;}
function FD(a,b){return (b&192)!=128?0:1;}
function PN(){C.call(this);this.rB=null;}
function AGa(a,b){var c,d;c=a.rB;d=c.dy+1|0;c.dy=d;c=new M;O(c);G(G(T(c,d),B(372)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Vf(){C.call(this);this.x2=null;}
function AMd(a){Bt(Bv(),B(373));}
function NJ(){C.call(this);this.sG=null;}
function AEn(a){return a.sG.kb();}
function RP(){C.call(this);this.oU=null;}
function AIj(a){return VJ(a.oU);}
function RQ(){C.call(this);this.uA=null;}
function AFd(a){return VJ(a.uA);}
function Qu(){C.call(this);this.mH=null;}
function AEp(a,b){a.mH.n(FA(b));}
function UB(){C.call(this);this.rY=null;}
function AQE(a,b){a.rY.p();}
function MH(){var a=this;C.call(a);a.vt=null;a.vu=null;a.vw=0;a.vy=0;}
var ABF=F();
function Sg(){C.call(this);this.uk=null;}
function AFn(a,b){var c,d,e,f;c=a.uk;d=Cq(b);e=new M;O(e);G(G(e,B(374)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new SC;d.we=c;d.oY=b;e=new SB;e.u$=c;f=new Uw;f.v6=e;e=new VL;e.ni=d;c=b.eZ;if(c!==null)c.arrayBuffer().then(Bm(e,"f"),Bm(f,"f"));else{b=b.gv.getFile();c=new VO;c.sO=e;c.sP=f;b.then(Bm(c,"f"),Bm(f,"f"));}}
function Sf(){C.call(this);this.wG=null;}
function AF3(a,b){var c;b=Cq(b);c=new M;O(c);G(G(c,B(375)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var ACr=F();
function SZ(){C.call(this);this.sV=null;}
function AJj(a){DK(a.sV);}
var JX=F(DU);
var AW$=0.0;var AW_=null;function Zl(){AW$=$rt_globals.NaN;AW_=E($rt_doublecls());}
var Lt=F();
var AXa=null;var AXb=null;function AAR(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.mQ=Fa(CV(d,Cc(0, 2147483648)),Em)?0:1;e=CV(d,Cc(4294967295, 1048575));f=EC(Gl(d,52))&2047;if(Fa(e,Em)&&!f){c.kM=Em;c.jF=0;return;}g=0;if(f)e=ASd(e,Cc(0, 1048576));else{e=Fn(e,1);while(Fa(CV(e,Cc(0, 1048576)),Em)){e=Fn(e,1);f=f+(-1)|0;g=g+1|0;}}h=ABK(AXb,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AXb.data[h]|0)|0;j=Rh(e,AXa.data[h],i);if(ZN(j,Cc(2808348672, 232830643))){h=h+1|0;i=12+(f-AXb.data[h]|0)|0;j=Rh(e,AXa.data[h],
i);}k=D5(AXa.data[h],(63-i|0)-g|0);l=Gl(Cp(k,Bb(1)),1);m=Gl(k,1);if(Fa(e,Cc(0, 1048576)))m=Gl(m,2);n=Bb(10);while(Pw(n,m)){n=BP(n,Bb(10));}if(ZN(ML(j,n),Dp(m,Bb(2))))n=Dp(n,Bb(10));o=Bb(1);while(Pw(o,l)){o=BP(o,Bb(10));}if(AHe(Kp(o,ML(j,o)),Dp(l,Bb(2))))o=Dp(o,Bb(10));f=ASz(n,o);e=f>0?BP(Dp(j,n),n):f<0?Cp(BP(Dp(j,o),o),o):BP(Dp(Cp(j,Dp(o,Bb(2))),o),o);if(ZN(e,Cc(2808348672, 232830643))){h=h+1|0;e=Dp(e,Bb(10));}else if(AHx(e,Cc(1569325056, 23283064))){h=h+(-1)|0;e=BP(e,Bb(10));}c.kM=e;c.jF=h-330|0;}
function Rh(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CV(b,Bb(65535));f=CV(D5(b,16),Bb(65535));g=CV(D5(b,32),Bb(65535));h=CV(D5(b,48),Bb(65535));i=CV(c,Bb(65535));j=CV(D5(c,16),Bb(65535));k=CV(D5(c,32),Bb(65535));l=CV(D5(c,48),Bb(65535));m=Cp(Cp(BP(k,e),BP(j,f)),BP(i,g));n=Cp(Cp(Cp(BP(l,e),BP(k,f)),BP(j,g)),BP(i,h));o=Cp(Cp(Fn(BP(l,h),32+d|0),Fn(Cp(BP(l,g),BP(k,h)),16+d|0)),Fn(Cp(Cp(BP(l,f),BP(k,g)),BP(j,h)),d));return Cp(d>16?Cp(o,Fn(n,d-16|0)):Cp(o,D5(n,16-d|0)),D5(m,32-d|0));}
function AAt(){var b,c,d,e,f,g,h,i,j,k;AXa=ATp(660);AXb=BC(660);b=Cc(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AXa.data;g=d+330|0;f[g]=FE(e,Bb(80));AXb.data[g]=c;e=FE(e,Bb(10));h=Nj(e,Bb(10));while(Pw(e,b)&&Fa(CV(e,Cc(0, 2147483648)),Em)){e=Fn(e,1);c=c+1|0;h=Fn(h,1);}e=Cp(e,Dp(h,Bb(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AHe(e,Cc(3435973836, 214748364))){e=Gl(e,1);j=j+1|0;d=d+(-1)|0;}k=BP(e,Bb(10));b=j<=0?k:Cp(k,Gl(BP(CV(b,Bb((1<<j)-1|0)),Bb(10)),j));f=AXa.data;g=(330-i|0)-1|0;f[g]=FE(b,
Bb(80));AXb.data[g]=d;i=i+1|0;}}
function MI(){C.call(this);this.r$=null;}
function ARt(a,b){var c,d;c=a.r$;d=new Bo;Bj(d,$rt_str(b.message));c.n(d);}
function TT(){var a=this;C.call(a);a.qJ=0;a.l5=0;}
function FJ(a,b){return PB(a.qJ,b,a.l5);}
function EI(){var a=this;C.call(a);a.D=null;a.q=null;a.dW=0.0;}
function ARS(){var a=new EI();Ls(a);return a;}
function Ls(a){a.D=new Bi;a.q=new Bi;}
function AMv(a){}
function AP9(a){return BW(0,0);}
function PL(a,b,c,d){var e;if(!K6(a.D,b)){a.jV(b);CA(a.D,b);}if(!K6(a.q,c)){a.jL(c);CA(a.q,c);}e=a.dW;if(e!==d){a.dW=d;a.pj(e,d);}}
function DG(a,b){return F4(b,a.D,a.q);}
function Zf(a,b){var c,d,e,f;c=a.D;d=c.b;e=c.a;f=a.q;XH();By(b,d,e,f,AU$);}
function VH(a,b){var c;c=a.D;Lw(b,c.b,c.a,a.q);}
function APi(a,b){return 0;}
function AHM(a,b){}
function AO1(a,b){}
function AQ_(a,b,c){}
function APy(a,b,c,d){return 0;}
function AOR(a,b,c){return null;}
function APW(a,b,c){return 0;}
function ALO(a,b){return 0;}
function AHE(a,b,c,d){return 0;}
function Gz(){var a=this;EI.call(a);a.cE=null;a.bu=null;a.eY=null;}
function AXc(){var a=new Gz();TK(a);return a;}
function TK(a){Ls(a);a.cE=new Bi;a.bu=new Bi;}
function AEG(a,b){a.eY=b;}
function ADP(a){var b;b=a.bu;b.b=LQ(a,b.b);b=a.bu;b.a=Kk(a,b.a);}
function U2(a,b){a.bu.b=LQ(a,b);}
function Q9(a,b){a.bu.a=Kk(a,b);}
function ABY(a,b,c){a.bu.b=LQ(a,b);a.bu.a=Kk(a,c);}
function Kk(a,b){return Ba(0,Y(b,a.cE.a-a.q.a|0));}
function LQ(a,b){return Ba(0,Y(b,a.cE.b-a.q.b|0));}
function QP(){var a=this;Gz.call(a);a.cv=null;a.ds=null;a.fD=null;a.qf=null;a.dA=null;a.bZ=null;a.dO=null;a.e3=null;a.c9=0;a.ez=0;a.l6=null;a.dJ=0;a.dL=0;a.fO=0;a.eX=0;a.fo=0;a.cy=0;a.dP=null;a.iu=null;a.nh=null;a.gs=null;}
function ATt(a,b){var c=new QP();Z_(c,a,b);return c;}
function Z_(a,b,c){TK(a);a.ds=AKF();a.fD=new Bi;a.bZ=AXd;a.dO=Q(HW,0);a.dJ=0;a.dL=0;a.fO=0;a.eX=0;a.fo=0;a.dP=ADG(0);a.gs=Gv();a.cv=b;a.iu=c;a.l6=c;Tb(a);}
function Tb(a){a.c9=B_(2.0,a.cv.bM);}
function Wd(a){return a.bZ.data.length?0:1;}
function VS(a,b){OH(a);a.bZ=b;}
function OH(a){Bf(a.fD,0,0);}
function XF(a,b,c){a.nh=b;a.qf=c;a.dA=null;a.dP=null;a.ez=0;OH(a);}
function ARo(a){var b,c;a.e3=CG(a.e3,null);Bf(a.fD,0,0);b=a.gs;if(b.dr>0){b.dr=0;c=b.b6;Zd(c,0,c.data.length,null);b.c4=b.c4+1|0;}a.dP=null;a.bZ=AXd;a.dO=null;a.dJ=0;a.dL=0;a.fO=0;SX(a.ds);a.iu=null;}
function AGO(a,b,c){Tk(a);Tb(a);a.dA=null;a.dP=null;a.ez=0;}
function AJw(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=IF(a.cv);if(Wd(a))return;Lp(a);Cy(c,a.dA);d=D7(a);e=AD5(c,a.ez);f=Y(Iz(a.q.a,d),a.bZ.data.length)+30|0;g=a.nh.m9;h=a.dO.data;i=h.length;if(i<f){a:{j=a.eX;k=a.fo;l=a.bZ;m=a.dP;n=a.gs;o=Q(HW,f);if(i>0){p=o.data;while(j<=k){q=l.data[j];r=j%p.length|0;s=j%i|0;t=h[s];if(t!==null&&t.gf!==q){U$(m,t,n);p[r]=Ly(q,m,e,n);h[s]=null;}else if(t!==null&&p[r]===null){p[r]=t;h[s]=null;}else p[r]=Ly(q,m,e,n);j=j+1|0;}}else if(f>0){p
=o.data;while(true){if(j>k)break a;p[j%p.length|0]=Ly(l.data[j],m,e,n);j=j+1|0;}}}j=0;while(j<i){q=h[j];if(q!==null){U$(m,q,n);h[j]=null;}j=j+1|0;}a.dO=o;CA(a.fD,L5(a.dP));TE(a,a.cv.cV);}a.eX=Y((a.bu.a+a.c9|0)/(D7(a)+a.c9|0)|0,a.bZ.data.length-1|0);a.fo=Y((((a.bu.a+a.ds.y.a|0)-1|0)+a.c9|0)/(D7(a)+a.c9|0)|0,a.bZ.data.length-1|0);if(!a.dO.data.length)return;Ym(a,e);VH(a,b);t=g.rr;m=a.D;By(b,m.b,m.a,a.q,t);m=a.ds.P;u=m.b;v=m.a;w=Cv(a.cv,2.0);m=a.cv.dQ;x=a.eX;j=u+w|0;while(x<=a.fo){n=M$(a,x);k=Z(x,D7(a));i=x+1|
0;y=k+Z(i,a.c9)|0;k=j+a.dJ|0;r=k+a.dL|0;z=a.cy!=x?0:1;ba=!z?t:g.pP;q=!z?g.u4:g.iQ;bb=!z?g.o9:g.iQ;bc=!z?g.un:g.iQ;bd=(v+y|0)-a.bu.a|0;EG(b,j,bd,n.gC,n.rc,a.e3,q,ba,0.0);EG(b,k,bd,n.g4,n.hM,a.e3,bb,ba,0.0);EG(b,r,bd,n.g$,n.il,a.e3,bc,ba,0.0);k=n.gC.b;s=j+k|0;Bf(m,Ba(0,a.dJ-k|0),n.gC.a);By(b,s,bd,m,ba);k=j+a.dJ|0;s=n.g4.b;be=k+s|0;Bf(m,Ba(0,a.dL-s|0),n.g4.a);By(b,be,bd,m,ba);k=n.g$.b;bf=r+k|0;Bf(m,Ba(0,(((a.ds.y.b-k|0)-a.dL|0)-a.dJ|0)-w|0),n.g$.a);By(b,bf,bd,m,ba);bg=(u+a.q.b|0)-w|0;Bf(m,w,D7(a)+a.c9|0);By(b,
bg,bd,m,t);x=i;}Iw(b);}
function Ym(a,b){var c,d,e,f,g,h;c=0;d=a.eX;while(d<=a.fo){e=M$(a,d);if(!(e!==null&&e.gf===a.bZ.data[d])){f=a.dO.data;g=a.bZ;e=a.dP;h=a.gs;c=d%f.length|0;if(f[c]!==null)U$(e,f[c],h);f[c]=Ly(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){CA(a.fD,L5(a.dP));TE(a,a.cv.cV);}}
function TE(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fD;c=CK(b,c.b+150|0,c.a);Cy(c,a.dA);d=a.dA;e=d.dt;f=e-(e+d.ee)/16.0;g=a.dO.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gf.h_;k=d.hM;Ch(c,j,k.bl+a.ez,f+k.bz);j=d.gf.ip;d=d.il;Ch(c,j,d.bl+a.ez,f+d.bz);}i=i+1|0;}a:{d=a.gs;if(d.dr>0){h=d.c4;i=0;b:while(true){g=d.b6.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.du;l=j.dx;k=k;l=l.h1;Ch(c,k,l.bl+a.ez,f+l.bz);j=j.cN;if(h!=d.c4)break b;}i=i+1|0;}b=new IE;V(b);J(b);}}b=CG(a.e3,CU(b));a.e3=b;CM(b,c);FM(c);}
function M$(a,b){var c;c=a.dO.data;return c[b%c.length|0];}
function AKI(a,b){CA(a.ds.y,b);}
function AHm(a,b){CA(a.ds.P,b);}
function Zu(a){var b,c;Lp(a);b=D7(a);c=a.bZ.data.length;b=Z(b,c)+Z(a.c9,c+1|0)|0;Bf(a.cE,a.q.b,b);}
function Tk(a){var b,c,d,e,f,g,h,i,j;b=IF(a.cv);if(Wd(a))return;Lp(a);Cy(b,a.dA);c=AD5(b,a.ez);d=a.bZ.data;e=d.length;f=0;while(f<e){g=d[f];h=JO(c,g.gn);i=JO(c,g.h_);j=JO(c,g.ip);a.dJ=Ba(a.dJ,h);a.dL=Ba(a.dL,i);a.fO=Ba(a.fO,j);f=f+1|0;}}
function AQh(a,b){var c;c=NM(a,b.h);if(c>=0)a.cy=c;return Eq(a.ds,a.D)&&Hb(a.cv.cA)?1:0;}
function AEY(a,b,c){if(!Eq(a.ds,b.h)&&!LY(a.ds)){b=a.l6;if(b!==null)b.p();}return null;}
function AFb(a,b,c,d){var e;if(d==1){e=NM(a,b.h);if(e>=0)Nw(a,a.bZ.data[e]);}return 1;}
function Nw(a,b){a.iu.p();b.l$.p();}
function NM(a,b){var c,d,e;if(!a.dO.data.length)return (-1);c=D7(a);d=(b.a-a.D.a|0)+a.bu.a|0;e=a.c9;e=(d+e|0)/(c+e|0)|0;if(e<a.bZ.data.length)return e;return (-1);}
function D7(a){return E0(a.dA);}
function Lp(a){var b;if(a.dA===null){b=GL(a.cv,a.qf);a.dA=b;a.dP=ADG(E0(b));a.ez=Dg(a.dA.ly);}}
function AKc(a,b){var c,d,e;a:{switch(b.bg){case 13:Nw(a,a.bZ.data[a.cy]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cy=a.eX;b=a.eY;c=a.bu;HR(b,c.b,c.a-(a.q.a/2|0)|0);return 0;case 34:a.cy=a.fo;b=a.eY;c=a.bu;HR(b,c.b,c.a+(a.q.a/2|0)|0);return 0;case 35:case 39:a.cy=a.bZ.data.length-1|0;break a;case 36:case 37:a.cy=0;break a;case 38:d=a.cy;e=a.bZ.data.length;a.cy=((d+e
|0)-1|0)%e|0;break a;case 40:a.cy=(a.cy+1|0)%a.bZ.data.length|0;break a;default:break a;}a.iu.p();return 0;}e=a.cy;if(e<=a.eX)HR(a.eY,a.bu.b,Z(e,D7(a))+Z(a.cy,a.c9)|0);else if(e>=a.fo)HR(a.eY,a.bu.b,(Z(e+1|0,D7(a))+Z(a.cy+2|0,a.c9)|0)-a.q.a|0);return 0;}
var VP=F();
function ARa(a){}
function AAg(){var a=this;EI.call(a);a.k3=null;a.rh=null;a.tE=null;a.bv=null;a.c1=null;a.c3=null;a.r_=0.0;a.l8=null;a.mt=null;}
function Zh(a,b){var c=new AAg();AP5(c,a,b);return c;}
function AP5(a,b,c){var d;c=c.cA;Ls(a);d=new Vo;d.rb=a;a.rh=d;d=new Vp;d.nG=a;a.tE=d;a.r_=10.0;a.bv=b;a.k3=c;b.eY=a;}
function AFg(a){var b;b=a.bv;b.eY=null;a.bv=CG(b,null);}
function Qs(a,b,c){var d;a.l8=b;a.mt=c;d=a.c1;if(d!==null)Gc(d,b,c);d=a.c3;if(d!==null)Gc(d,b,c);}
function AGV(a,b,c,d){PL(a,b,c,d);PL(a.bv,b,c,d);if(d!==0.0){a.bv.uo();ADP(a.bv);if(P3(a))HX(a);else a.c3=null;if(Xq(a))H9(a);else a.c1=null;}}
function HR(a,b,c){ABY(a.bv,b,c);if(P3(a))HX(a);if(Xq(a))H9(a);}
function Xq(a){var b;b=a.q.a;return b>0&&a.bv.cE.a>b?1:0;}
function P3(a){var b;b=a.q.b;return b>0&&a.bv.cE.b>b?1:0;}
function HX(a){var b,c,d,e,f,g;b=a.c3;if(b===null)b=Hl();a.c3=b;T7(a,b);c=a.c3;b=a.bv;d=b.bu.b;e=a.D;f=e.b;g=a.q;Mm(c,d,f,g.b,b.cE.b,e.a+g.a|0,JB(a));}
function H9(a){var b,c,d,e,f,g;b=a.c1;if(b===null)b=Hl();a.c1=b;T7(a,b);c=a.c1;b=a.bv;d=b.bu.a;e=a.D;f=e.a;g=a.q;Iq(c,d,f,g.a,b.cE.a,e.b+g.b|0,JB(a));}
function JB(a){return B_(a.r_,a.dW);}
function T7(a,b){var c,d;c=a.l8;d=a.mt;if(!(c!==null&&d!==null?(Kw(b.hy,c)&&Kw(b.hx,d)?1:0):0))Gc(b,c,d);}
function AOv(a,b){var c;a.bv.eR(b);if(!(a.c1===null&&a.c3===null)){CJ(b,1);c=a.c1;if(c!==null)FT(c,b);c=a.c3;if(c!==null)FT(c,b);c=a.c1;if(c!==null)Gb(c,b);c=a.c3;if(c!==null)Gb(c,b);CJ(b,0);}}
function MU(a,b){var c,d;a:{b:{c=a.c1;if(!(c!==null&&IM(c,b))){c=a.c3;if(c===null)break b;if(!IM(c,b))break b;}d=1;break a;}d=0;}return d;}
function AI4(a,b,c,d){return !MU(a,b.h)&&!a.bv.cp(b,c,d)?0:1;}
function APB(a,b,c){var d,e;d=a.c1;if(d!==null){e=Fe(d,b.h,a.rh,1);if(e!==null)return e;}d=a.c3;if(d!==null){e=Fe(d,b.h,a.tE,0);if(e!==null)return e;}return a.bv.b5(b,c);}
function AIF(a,b,c){return MU(a,b.h)?1:0;}
function AJW(a,b){var c,d,e;c=a.c1;d=c!==null&&Fp(c,b.h,a.k3)?1:0;c=a.c3;e=c!==null&&Fp(c,b.h,a.k3)?1:0;return !d&&!e&&!a.bv.bR(b)?0:1;}
function AOJ(a,b,c,d){var e,f;if(!DG(a,b.h))return 0;e=B_(d*0.25,a.dW);f=B_(c*0.25,a.dW);if(b.bC){f=f+e|0;e=0;}if(a.c1!==null&&e){b=a.bv;Q9(b,b.bu.a+e|0);H9(a);}if(a.c3!==null&&f){b=a.bv;U2(b,b.bu.b+f|0);HX(a);}return 1;}
function AMa(a){var b,c;b=JB(a);c=a.bv.iK();c.b=Ba(c.b,b);c.a=Ba(c.a,b);return c;}
function VV(){var a=this;Gz.call(a);a.hH=null;a.kX=null;a.rQ=null;a.pA=0.0;}
function AMU(a){var b,c;b=a.cE;c=a.q;Bf(b,c.b*3|0,c.a*5|0);}
function AKL(a){var b;b=B_(20.0,a.dW);return BW(b,b);}
function AJy(a,b){var c,d,e,f;c=a.rQ;d=c.sI;e=c.sJ;c=c.sH;b=Cq(b);f=new M;O(f);G(G(G(f,c),B(36)),b);IA(e,N(f),d.sE,3.0);}
function AHf(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;Zf(a,b);VH(a,b);c=B_(30.0,a.dW);d=a.bu;e=d.b;f=Z(e/c|0,c);g=d.a;h=Z(g/c|0,c);d=a.q;i=Z(((e+d.b|0)-1|0)/c|0,c);e=Z(((g+d.a|0)-1|0)/c|0,c);d=a.kX;d.a=c;d.b=c;a.hH.bA=1.0;while(h<=e){g=a.D.a-a.bu.a|0;j=f;while(j<=i){k=a.D.b-a.bu.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=ADg(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;WR(n,0.75,a.pA,a.hH);By(b,k+j|0,g+h|0,a.kX,a.hH);j=j+c|0;}h=h+c|0;}Iw(b);}
function AKa(a,b){}
function Pl(){var a=this;C.call(a);a.sI=null;a.sJ=null;a.sH=null;}
function Nl(){var a=this;C.call(a);a.tK=null;a.tM=null;a.tL=null;}
function AQk(a,b,c,d){var e,f;b=a.tK;e=a.tM;f=a.tL;Tn(b,e);if(f!==null)d.lW.p();if(Mr(d)){if(d.jq===null)Tz(b,ADS(d,e),d.hY,e);else PD(b,ADS(d,e),d.hY,e,d.jq);}}
function Xt(){C.call(this);this.kT=null;}
var AXd=null;function AM3(){var a=new Xt();ZK(a);return a;}
function ZK(a){a.kT=Cm();}
function M3(a,b,c,d,e){var f;f=new Jo;f.l$=e;f.h_=c;f.ip=d;f.gn=b;B0(a.kT,f);}
function QJ(a){return HF(a.kT,AXd);}
function VB(b){var c,d;if(b===null)b=B(31);else{c=b.e7;if(c===null)b=B(31);else{d=Px(c,B(376),I(c));b=d==(-1)?b.e7:Dk(b.e7,d+1|0);}}return b;}
function AAj(){AXd=Q(Jo,0);}
function HW(){var a=this;C.call(a);a.rc=null;a.hM=null;a.il=null;a.gC=null;a.g4=null;a.g$=null;a.gf=null;}
function Ly(b,c,d,e){var f,g,h;f=new HW;f.gC=new Bi;f.g4=new Bi;f.g$=new Bi;f.gf=b;g=DN(e,b.gn);if(g!==null)g.gP=g.gP+1|0;else{g=new N5;h=Hf(c,b.gn,d);g.gP=1;g.h1=h;K9(e,b.gn,g);}e=g.h1;f.rc=e;Bf(f.gC,e.bh|0,e.bA|0);e=Hf(c,b.h_,d);f.hM=e;Bf(f.g4,e.bh|0,e.bA|0);b=Hf(c,b.ip,d);f.il=b;Bf(f.g$,b.bh|0,b.bA|0);return f;}
function U$(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gf.gn;f=DN(d,e);g=f.gP-1|0;f.gP=g;if(!g){a:{h=0;i=null;if(e===null){j=d.b6.data[0];while(j!==null){if(j.du===null)break a;k=j.cN;i=j;j=k;}}else{l=e.i6();m=d.b6.data;h=l&(m.length-1|0);j=m[h];while(j!==null&&!(j.iJ==l&&YK(e,j.du))){k=j.cN;i=j;j=k;}}}if(j===null)j=null;else{if(i!==null)i.cN=j.cN;else d.b6.data[h]=j.cN;d.c4=d.c4+1|0;d.dr=d.dr-1|0;}Id(b,f.h1);}Id(b,c.hM);Id(b,c.il);}
function Tt(){var a=this;EI.call(a);a.gI=null;a.gL=null;a.gq=null;a.dV=null;a.iI=0.0;a.gx=0;a.hr=0;a.da=null;a.ld=null;}
function LK(a){var b;b=a.q;return b.b&&b.a?0:1;}
function TS(a){var b,c;a:{if(a.gq!==null){b=a.gL;if(b!==null&&!Fo(b)){c=0;break a;}}c=1;}return c;}
function XA(a,b){a.q.a=b;}
function O$(a,b,c,d,e){var f,g;f=a.gI.dQ;Bf(f,d,a.q.a);g=a.D;By(b,g.b+c|0,g.a,f,e);}
function QR(a){if(a.dV===null)a.dV=GL(a.gI,a.gq);}
var R0=F(DU);
var AXe=null;function FE(b,c){return Long_udiv(b, c);}
function Nj(b,c){return Long_urem(b, c);}
function Lb(b,c){return Long_ucompare(b, c);}
function AAr(){AXe=E($rt_longcls());}
function X6(){var a=this;C.call(a);a.rT=null;a.rS=null;a.rR=null;}
function AHs(a){var b,c,d,e,f;b=a.rT;c=a.rS;d=a.rR;e=Bv();f=new M;O(f);b=G(f,b);BA(b,9);b=G(b,c);BA(b,9);G(b,d);Bt(e,N(f));}
function Vo(){C.call(this);this.rb=null;}
function AP7(a,b){var c,d;c=a.rb;d=FJ(b,c.bv.cE.a-c.q.a|0);Q9(c.bv,d);H9(c);}
function Vp(){C.call(this);this.nG=null;}
function AFo(a,b){var c,d;c=a.nG;d=FJ(b,c.bv.cE.b-c.q.b|0);U2(c.bv,d);HX(c);}
function Jo(){var a=this;C.call(a);a.l$=null;a.h_=null;a.ip=null;a.gn=null;}
var Fh=F(Bo);
function Nx(){var a=this;C.call(a);a.mh=null;a.pB=null;a.s2=0;a.uh=0;}
function LF(a,b){return B6(a.pB)<b?0:1;}
var AC_=F();
function Uu(b,c,d,e){var f,g;f=b.next();g=new Xc;g.mw=b;g.mv=c;g.mz=d;g.mx=e;f.then(Bm(g,"f"),Bm(d,"f"));}
function YM(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ADD(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(D8()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new W$;f.qg=b;f.qh=d;d.addEventListener("change",Bm(f,"handleEvent"));d.click();}
function YU(b,c){var d;if(c.isFile?1:0)b.n(Yj(c.file()));else{c=c.createReader();d=new WZ;d.tf=b;c.readEntries(Bm(d,"f"));}}
function SS(){var a=this;C.call(a);a.bH=null;a.n6=null;a.hE=null;a.iq=null;a.W=null;}
function Iy(a){return a.bH.cg.ix;}
function N3(a){var b;b=new O2;b.py=a;return b;}
function AD$(a){var b,c,d,e,f,g;b=Q(C$,4);c=b.data;d=a.W.Z.T.bf;e=a.bH;BF(e);f=new VI;f.sD=e;c[0]=D4(B(377),d,f);e=a.W.Z.T.bf;f=a.bH;BF(f);g=new VN;g.nf=f;c[1]=D4(B(378),e,g);e=a.W.Z.T.bf;f=a.bH;BF(f);g=new VM;g.rz=f;c[2]=D4(B(379),e,g);e=a.W.Z.T.bf;f=a.bH;BF(f);g=new VK;g.u5=f;c[3]=D4(B(380),e,g);return FQ(b);}
function I9(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DK(a.W.b8);d=a.bH.e;e=Do(d);f=GV(d);g=a.bH.ej;if(c===null)h=null;else{AR0();switch(AXf.data[c.cY]){case 1:h=KO(g,e,f);break a;case 2:h=Vz(g,e,f);break a;default:}b=new Ep;V(b);J(b);}}c=a.bH;e=ET(c,b);f=HI(c.e.f,e.bs,e.bE);g=OB(c,f);if(h!==null){f=c.e;i=e.bs;j=e.bE;e=new Py;e.xy=c;e.xz=b;e.xA=g;h.r3(f,i,j,e,c.gJ);}else{e=DN(c.e.f.d9,f);if(e!==null)Hv(c,e);else{e=DN(c.e.f.et,f);if(e!==null&&!Eb(e))Va(c.ih,b,e,c,g);else{g=c.ih;DK(g.b8);h=g.b8;k=Q(C$,1);l=k.data;d=new C$;BF(h);f
=new VC;f.nD=h;K1(d,f,B(381),g.Z.T.ps);l[0]=d;F_(h,b,FQ(k),Nn(g,c));}}}}
var Y5=F(0);
function AI5(b){return 112<=b&&b<=123?1:0;}
var Ry=F();
function AIC(a,b){b=b;b.b0=CG(b.b0,null);}
var Xe=F();
function AOB(a,b){YM(b);}
function Xd(){var a=this;C.call(a);a.pG=null;a.pF=null;}
function AHa(a,b){var c,d,e,f,g,h,i;c=a.pG;d=a.pF;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new PM;i.ny=c;i.nx=g;h.then(Bm(i,"f"),Bm(d,"f"));e=e+1|0;}}
var WJ=F();
function AIJ(a,b){YM(b);}
function WI(){var a=this;C.call(a);a.oN=null;a.oO=null;}
function AJC(a,b){var c,d,e,f,g;c=a.oN;d=a.oO;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=Q(Bu,1);g.data[0]=FA(b.name);Uu(f,c,d,g);}
var Yv=F();
function ABw(b,c){return ACp(null,b,c,0);}
function ACp(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=ADe(c);g=BO(f);h=BO(f);i=BO(f);j=Q(Cz,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<Cw(b)){l=BO(f);c[k]=B2(b,k);l=4*l|0;f.eL=f.eL+l|0;}else c[k]=DO(ABj(f,d,0));k=k+1|0;}m=YN(f,h);n=new HK;n.d9=Gv();n.et=Gv();n.fg=Cm();if(!c.length){b=new BD;V(b);J(b);}n.C=j;n.fz=0;n.cs=0;n.c_=AS1(m);b=n.d9;e=0;while(e<i){K9(b,ES(BO(f),BO(f)),ES(BO(f),BO(f)));e=e+1|0;}b=n.d9;m=n.et;o=new Ux;Sy(o,b);while(Jb(o)){Ue(o);p=o.gR;q=p.du;p=p.dx;b=Cm();if(DN(m,p)===null)K9(m,p,b);B0(DN(m,
p),q);}if(m.j5===null){b=new O1;b.uy=m;m.j5=b;}b=m.j5;q=new QU;Sy(q,b.uy);while(Jb(q)){Ue(q);b=q.gR.dx;m=AUc;c=Q(C,b.i);d=c.data;HF(b,c);ZX(c,m);e=0;g=d.length;while(e<g){m=d[e];I6(b,e);b.ci.data[e]=m;e=e+1|0;}}P_(f);return n;}
function AA7(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=ADe(c);g=BO(f);h=BO(f);i=BO(f);j=BO(f);k=Nu(b,g);l=Nu(b,h);m=(ID(B2(b,k.b),k.a)).data[0].o;e=(ID(B2(b,l.b),l.a)).data[1].o;n=0;o=i-1|0;while(n<i){p=ABj(f,d,g);if(!n)p=LE(m,p);if(n==o)p=LE(p,e);q=k.b+n|0;r=DO(p);b.C.data[q]=r;n=n+1|0;}r=YN(f,j);P_(f);if(!Eb(r)){s=NY(g,h,(-1));b=b.c_;f=AR5(s,r);r=Kz(b,b.cR,s);if(r!==null){f=f.cR.bx;if(r===b.cR)b.cR=Bp(f,0);else if(r.dI!==null){b=new NW;b.rU=r;J1(f,b);q=Qb(r.dI.bx,
r);El(r.dI.bx,q);b=r.dI.bx;O_(b,q);if(!Eb(f)){Jg(b,b.i+f.i|0);j=f.i;g=b.i;h=g-1|0;while(h>=q){c=b.ci.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.i=g+j|0;f=BT(f);g=0;while(g<j){c=b.ci.data;h=q+1|0;c[q]=BY(f);g=g+1|0;q=h;}b.ct=b.ct+1|0;}}}}}
function ABj(b,c,d){var e,f,g,h,i,j,k,l;e=BO(b);f=Q(B7,e);g=f.data;h=0;while(h<e){i=BO(b);j=BO(b);k=BO(b);l=BO(b);g[h]=DC(JK(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function YN(b,c){var d,e;d=Cm();e=0;while(e<c){B0(d,NY(BO(b),BO(b),BO(b)));e=e+1|0;}return d;}
var WQ=F(0);
var AVg=null;function YJ(){AVg=null;}
function W$(){var a=this;C.call(a);a.qg=null;a.qh=null;}
function AIz(a,b){var c,d,e,f,g,h;b=a.qg;c=a.qh;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new MD;h.mq=b;h.mp=g;$rt_globals.setTimeout(Bm(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Yj(d.item(f));g=new Mn;g.rE=b;g.rF=c;$rt_globals.setTimeout(Bm(g,"onTimer"),0);f=f+1|0;}}
function Z2(){var a=this;C.call(a);a.hU=null;a.jO=null;}
function ADu(){var a=this;C.call(a);a.xV=0;a.xH=0;a.sb=0;a.ku=0;}
function Um(){var a=this;C.call(a);a.mY=null;a.mX=null;}
function AJd(a){var b,c,d,e,f,g;b=a.mY;c=a.mX;if(C6(c.hU,b.e.fQ)){c=c.jO;CB(b,c.ku,c.sb,0);B4(b.r.bP,c.ku,c.sb);B4(b.r.bF,c.xH,c.xV);}else{d=(Co(b.ej.re)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Ck(b);b=new Tq;b.tw=g;b.tv=c;BF(b);c=new PE;c.u3=b;$rt_globals.setTimeout(Bm(c,"onTimer"),0);}}}
function Uo(){var a=this;C.call(a);a.u7=null;a.u2=null;}
function AN6(a){Hv(a.u7,a.u2);}
function ACb(){var a=this;C.call(a);a.h8=null;a.eL=0;}
function ADe(a){var b=new ACb();AEv(b,a);return b;}
function AEv(a,b){a.h8=b;a.eL=0;}
function BO(a){var b,c;b=a.h8.data;c=a.eL;a.eL=c+1|0;return b[c];}
function P_(a){var b,c,d,e;if(a.eL!=a.h8.data.length){b=Iu();c=a.h8.data.length;d=a.eL;e=new M;O(e);G(T(G(T(G(e,B(382)),c),B(383)),d),B(384));Bt(b,N(e));}}
var IX=F(Fh);
var HS=F(Bo);
var LM=F(Bo);
function ZG(){C.call(this);this.Ei=null;}
function Sj(){var a=this;C.call(a);a.th=null;a.tl=null;}
function AQJ(a){var b,c;b=a.th;c=a.tl;FO(b.dY,c);}
function QX(){C.call(this);this.si=null;}
function AJZ(a,b){HD(a.si,b);}
function St(){var a=this;C.call(a);a.oi=null;a.oh=null;}
function AFv(a){var b,c;b=a.oi;c=a.oh;FO(b.dY,c);T3(b);}
var Yd=F();
function RT(b,c){return b.data[c];}
function GY(){var a=this;C.call(a);a.eG=0;a.fd=0;a.kC=null;a.jn=0;a.gO=null;}
function AER(a,b,c,d,e,f){var g=new GY();AJS(g,a,b,c,d,e,f);return g;}
function AJS(a,b,c,d,e,f,g){a.eG=b;a.fd=c;a.kC=BW(f,g);a.jn=d;a.gO=e;}
function ACk(){Ga.call(this);this.Ch=null;}
function O1(){EN.call(this);this.uy=null;}
var WA=F(Bw);
var Qg=F(0);
var Ns=F(0);
var LP=F();
function Z7(){var a=this;LP.call(a);a.Ej=null;a.Gk=0;a.ET=0;a.Cw=0;}
function Rs(){var a=this;C.call(a);a.nF=null;a.nE=null;}
function AF5(a){var b,c;b=a.nF;c=a.nE;UP();I9(b,c,AXg);}
function Rr(){var a=this;C.call(a);a.oQ=null;a.oS=null;}
function AEx(a){var b,c;b=a.oQ;c=a.oS;UP();I9(b,c,AXh);}
function Rq(){var a=this;C.call(a);a.uO=null;a.uP=null;}
function AKD(a){I9(a.uO,a.uP,null);}
function Rp(){var a=this;C.call(a);a.mW=null;a.mZ=null;}
function APk(a){var b,c,d,e,f,g,h;b=a.mW;c=a.mZ;d=Do(b.bH.e);e=GV(b.bH.e);d=Nk(b.bH.ej,d,e);DK(b.W.b8);b=b.bH;e=ET(b,c);if(d!==null){f=b.e;g=e.bs;h=e.bE;e=new Qe;e.wM=b;e.wL=c;d.Hi(f,g,h,1,e,b.gJ);}}
function Pn(){C.call(this);this.p1=null;}
function AOF(a){var b;b=a.p1;DK(b.W.b8);GA(b.bH,N3(b),0);}
function Pp(){C.call(this);this.tk=null;}
function AJH(a){var b;b=a.tk;DK(b.W.b8);GA(b.bH,N3(b),1);}
function Pq(){C.call(this);this.sk=null;}
function AGw(a){var b,c,d;b=a.sk;DK(b.W.b8);c=Iy(b);b=b.bH;BF(b);d=new SV;d.sn=b;QI(c,d,YG(B(385)));}
var Xf=F(0);
var AVc=null;function Yr(){AVc=new Pj;}
function V5(){C.call(this);this.sz=null;}
function AFs(a){var b,c,d;b=a.sz;DK(b.W.b8);c=Iy(b);b=b.bH;BF(b);d=new Q3;d.qv=b;LN(c,d);}
function PP(){C.call(this);this.m0=null;}
function AOG(a,b,c){var d,e;c=a.m0;d=c.e.f;e=b.fp;b=c.eH;W7(d.C.data[e],0,b);}
function SM(){C.call(this);this.nL=null;}
function AKb(a){a.nL.s9();}
function SN(){C.call(this);this.rd=null;}
function ALu(a){a.rd.oo();}
function SL(){C.call(this);this.uX=null;}
function AMR(a){a.uX.pT();}
function N9(){C.call(this);this.rD=null;}
function AI9(a){a.rD.ue();}
function N8(){C.call(this);this.qs=null;}
function APu(a){a.qs.uG();}
function U9(){C.call(this);this.q2=null;}
function AG1(a){var b,c,d,e,f,g,h,i;b=a.q2;c=(b.n6.dj()).data;d=Q(C$,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new X7;i.px=b;i.pw=h;e[f]=ABE(i,h,b.W.Z.T.bf);f=f+1|0;}return d;}
function VI(){C.call(this);this.sD=null;}
function ANn(a){var b,c,d,e,f;b=a.sD.e.f;c=b.cs;d=new M;O(d);T(G(d,B(386)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.fz;d=new M;O(d);T(G(d,B(387)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.c_;e=FS(EE(b));Sa(d,0,d.cR,e);b=Bv();f=b.jY;f.data[0]=10;NU(b,f,0,1);}
function VN(){C.call(this);this.nf=null;}
function AKj(a){SH(a.nf);}
function VM(){C.call(this);this.rz=null;}
function AFl(a){WF(a.rz);}
function VK(){C.call(this);this.u5=null;}
function AG9(a){J4(a.u5);}
function MS(){C.call(this);this.nH=null;}
function AKs(a,b,c){FR(B2(a.nH.e.f,b.fp),0,I(c));}
function PM(){var a=this;C.call(a);a.ny=null;a.nx=null;}
function AHn(a,b){a.ny.n(ABN(a.nx,b));}
var IP=F(0);
function MD(){var a=this;C.call(a);a.mq=null;a.mp=null;}
function AJI(a){YU(a.mq,a.mp);}
function Mn(){var a=this;C.call(a);a.rE=null;a.rF=null;}
function AEh(a){a.rE.n(a.rF);}
var Pj=F();
function Xc(){var a=this;C.call(a);a.mw=null;a.mv=null;a.mz=null;a.mx=null;}
function AI0(a,b){var c,d,e,f,g,h,i;c=a.mw;d=a.mv;e=a.mz;f=a.mx;if(!(b.done?1:0)){Uu(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Ub;c.oP=d;c.oR=g;c.oT=f;b.then(Bm(c,"f"),Bm(e,"f"));}else{h=f.data;c=g.values();b=FA(g.name);i=h.length;f=Dl(f,i+1|0);f.data[i]=b;Uu(c,d,e,f);}}}
function GQ(){var a=this;C.call(a);a.h4=0;a.rI=0;a.hh=null;a.gR=null;a.o5=null;a.iR=null;}
function AXi(a){var b=new GQ();Sy(b,a);return b;}
function Sy(a,b){a.iR=b;a.rI=b.c4;a.hh=null;}
function Jb(a){var b,c;if(a.hh!==null)return 1;while(true){b=a.h4;c=a.iR.b6.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.h4=b+1|0;}return 0;}
function ZH(a){var b;if(a.rI==a.iR.c4)return;b=new IE;V(b);J(b);}
function Ue(a){var b,c,d,e;ZH(a);if(!Jb(a)){b=new XT;V(b);J(b);}b=a.hh;if(b!==null){c=a.gR;if(c!==null)a.o5=c;a.gR=b;a.hh=b.cN;}else{d=a.iR.b6.data;e=a.h4;a.h4=e+1|0;b=d[e];a.gR=b;a.hh=b.cN;a.o5=null;}}
var Ux=F(GQ);
var QU=F(GQ);
function QS(){var a=this;C.call(a);a.g=null;a.dh=0;a.jM=null;a.mV=0;a.f4=0;a.ev=0;a.br=0;a.kK=null;}
function JR(a){return a.g.bJ;}
function XE(a,b,c,d){var e,f,g,h,i,j;e=Cm();f=a.dh;g=0;if(c!=f)a.dh=c;a:{switch(b){case -1073741784:h=new RH;c=a.br+1|0;a.br=c;Fl(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Pu;c=a.br+1|0;a.br=c;Fl(h,c);break a;case -33554392:h=new SR;c=a.br+1|0;a.br=c;Fl(h,c);break a;default:c=a.f4+1|0;a.f4=c;if(d!==null)h=AS$(c);else{h=new Fv;Fl(h,0);g=1;}c=a.f4;if(c<=(-1))break a;if(c>=10)break a;a.jM.data[c]=h;break a;}h=new Xx;Fl(h,(-1));}while(true){if(EY(a.g)&&a.g.j==(-536870788))
{d=APQ(B9(a,2),B9(a,64));while(!Dj(a.g)&&EY(a.g)){i=a.g;j=i.j;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cu(d,Be(i));i=a.g;if(i.be!=(-536870788))continue;Be(i);}i=KL(a,d);i.K(h);}else if(a.g.be==(-536870788)){i=GH(h);Be(a.g);}else{i=OT(a,h);d=a.g;if(d.be==(-536870788))Be(d);}if(i!==null)B0(e,i);if(Dj(a.g))break;if(a.g.be==(-536870871))break;}if(a.g.j$==(-536870788))B0(e,GH(h));if(a.dh!=f&&!g){a.dh=f;d=a.g;d.fM=f;d.j=d.be;d.eo=d.eB;j=d.c7;d.u=j+1|0;d.gT=j;E1(d);}switch(b){case -1073741784:break;case -536870872:d
=new MB;Fw(d,e,h);return d;case -268435416:d=new V6;Fw(d,e,h);return d;case -134217688:d=new QV;Fw(d,e,h);return d;case -67108824:d=new TA;Fw(d,e,h);return d;case -33554392:d=new DP;Fw(d,e,h);return d;default:switch(e.i){case 0:break;case 1:return ASW(Bp(e,0),h);default:return ASy(e,h);}return GH(h);}d=new IV;Fw(d,e,h);return d;}
function ACK(a){var b,c,d,e,f,g,h;b=BC(4);c=(-1);d=(-1);if(!Dj(a.g)&&EY(a.g)){e=b.data;c=Be(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BM(3);b=e.data;b[0]=c&65535;f=a.g;g=f.be;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Be(f);f=a.g;g=f.be;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Be(f);return APx(e,3);}return APx(e,2);}if(!B9(a,2))return ZF(b[0]);if(B9(a,64))return ANF(b[0]);return AGf(b[0]);}e=b.data;c=1;while(c<4&&!Dj(a.g)&&EY(a.g)){h=c+1|0;e[c]=Be(a.g);c=h;}if(c==1){h=e[0];if(!(AXj.xl(h)==AXk?0:1))return Xu(a,e[0]);}if
(!B9(a,2))return ATK(b,c);if(B9(a,64)){f=new Xb;NP(f,b,c);return f;}f=new TN;NP(f,b,c);return f;}
function OT(a,b){var c,d,e,f,g,h,i;if(EY(a.g)&&!JG(a.g)&&Kg(a.g.j)){if(B9(a,128)){c=ACK(a);if(!Dj(a.g)){d=a.g;e=d.be;if(!(e==(-536870871)&&!(b instanceof Fv))&&e!=(-536870788)&&!EY(d))c=L4(a,b,c);}}else if(!NZ(a.g)&&!Vb(a.g)){f=new N0;O(f);while(!Dj(a.g)&&EY(a.g)&&!NZ(a.g)&&!Vb(a.g)){if(!(!JG(a.g)&&!a.g.j)&&!(!JG(a.g)&&Kg(a.g.j))){g=a.g.j;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Be(a.g);if(!LX(e))BA(f,e&65535);else Ih(f,Gm(e));}if(!B9(a,2)){c=new Rv;Dy(c);c.co
=N(f);e=f.L;c.bG=e;c.j3=AL4(e);c.kN=AL4(c.bG);h=0;while(h<(c.bG-1|0)){Q0(c.j3,L(c.co,h),(c.bG-h|0)-1|0);Q0(c.kN,L(c.co,(c.bG-h|0)-1|0),(c.bG-h|0)-1|0);h=h+1|0;}}else if(B9(a,64))c=ATH(f);else{c=new M_;Dy(c);c.gU=N(f);c.bG=f.L;}}else c=L4(a,b,Xa(a,b));}else{d=a.g;if(d.be!=(-536870871))c=L4(a,b,Xa(a,b));else{if(b instanceof Fv)J(B8(B(31),d.bJ,NX(d)));c=GH(b);}}a:{if(!Dj(a.g)){e=a.g.be;if(!(e==(-536870871)&&!(b instanceof Fv))&&e!=(-536870788)){f=OT(a,b);if(c instanceof C2&&!(c instanceof E2)&&!(c instanceof CP)
&&!(c instanceof Ex)){i=c;if(!f.bQ(i.G)){c=new Wk;ER(c,i.G,i.d,i.he);c.G.K(c);}}if((f.hi()&65535)!=43)c.K(f);else c.K(f.G);break a;}}if(c===null)return null;c.K(b);}if((c.hi()&65535)!=43)return c;return c.G;}
function L4(a,b,c){var d,e,f,g,h;d=a.g;e=d.be;if(c!==null&&!(c instanceof BU)){switch(e){case -2147483606:Be(d);d=new X4;Dd(d,c,b,e);L_();c.K(AXl);return d;case -2147483605:Be(d);d=new Pm;Dd(d,c,b,(-2147483606));L_();c.K(AXl);return d;case -2147483585:Be(d);d=new O3;Dd(d,c,b,(-536870849));L_();c.K(AXl);return d;case -2147483525:f=new M5;d=E$(d);g=a.ev+1|0;a.ev=g;I5(f,d,c,b,(-536870849),g);L_();c.K(AXl);return f;case -1073741782:case -1073741781:Be(d);d=new Rl;Dd(d,c,b,e);c.K(d);return d;case -1073741761:Be(d);d
=new Qc;Dd(d,c,b,(-536870849));c.K(b);return d;case -1073741701:h=new US;d=E$(d);e=a.ev+1|0;a.ev=e;I5(h,d,c,b,(-536870849),e);c.K(h);return h;case -536870870:case -536870869:Be(d);if(c.hi()!=(-2147483602)){d=new CP;Dd(d,c,b,e);}else if(B9(a,32)){d=new Rn;Dd(d,c,b,e);}else{d=new N$;f=O6(a.dh);Dd(d,c,b,e);d.j9=f;}c.K(d);return d;case -536870849:Be(d);d=new FN;Dd(d,c,b,(-536870849));c.K(b);return d;case -536870789:h=new E_;d=E$(d);e=a.ev+1|0;a.ev=e;I5(h,d,c,b,(-536870849),e);c.K(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Be(d);d=new X5;ER(d,f,b,e);f.d=d;return d;case -2147483585:Be(d);c=new Wf;ER(c,f,b,(-2147483585));return c;case -2147483525:c=new OR;R9(c,E$(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Be(d);d=new P8;ER(d,f,b,e);f.d=d;return d;case -1073741761:Be(d);c=new T2;ER(c,f,b,(-1073741761));return c;case -1073741701:c=new QW;R9(c,E$(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Be(d);d=AS3(f,b,e);f.d=d;return d;case -536870849:Be(d);c
=new Ex;ER(c,f,b,(-536870849));return c;case -536870789:return ASa(E$(d),f,b,(-536870789));default:}return c;}
function Xa(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fv;while(true){a:{e=a.g;f=e.be;if((f&(-2147418113))==(-2147483608)){Be(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dh=g;else{if(f!=(-1073741784))g=a.dh;c=XE(a,f,g,b);e=a.g;if(e.be!=(-536870871))J(B8(B(31),e.bJ,e.c7));Be(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Be(e);c
=APj(0);break a;case -2147483577:Be(e);c=new N6;BL(c);break a;case -2147483558:Be(e);c=new WX;h=a.br+1|0;a.br=h;AC8(c,h);break a;case -2147483550:Be(e);c=APj(1);break a;case -2147483526:Be(e);c=new WG;BL(c);break a;case -536870876:Be(e);a.br=a.br+1|0;if(B9(a,8)){if(B9(a,1)){c=ASp(a.br);break a;}c=ARJ(a.br);break a;}if(B9(a,1)){c=ASE(a.br);break a;}c=ATc(a.br);break a;case -536870866:Be(e);if(B9(a,32)){c=ATw();break a;}c=AS9(O6(a.dh));break a;case -536870821:Be(e);i=0;c=a.g;if(c.be==(-536870818)){i=1;Be(c);}c
=KL(a,F0(a,i));c.K(b);e=a.g;if(e.be!=(-536870819))J(B8(B(31),e.bJ,e.c7));OA(e,1);Be(a.g);break a;case -536870818:Be(e);a.br=a.br+1|0;if(!B9(a,8)){c=new Kn;BL(c);break a;}c=new Nf;e=O6(a.dh);BL(c);c.qC=e;break a;case 0:j=e.eB;if(j!==null)c=KL(a,j);else{if(Dj(e)){c=GH(b);break a;}c=ZF(f&65535);}Be(a.g);break a;default:break b;}Be(e);c=new Kn;BL(c);break a;}h=(f&2147483647)-48|0;if(a.f4<h)J(B8(B(31),Fi(e),NX(a.g)));Be(e);a.br=a.br+1|0;c=!B9(a,2)?ARQ(h,a.br):B9(a,64)?ASq(h,a.br):ATE(h,a.br);a.jM.data[h].jK=1;a.mV
=1;break a;}if(f>=0&&!GJ(e)){c=Xu(a,f);Be(a.g);}else if(f==(-536870788))c=GH(b);else{if(f!=(-536870871)){b=new IJ;c=!GJ(a.g)?WW(f&65535):a.g.eB.cr();e=a.g;Je(b,c,e.bJ,e.c7);J(b);}if(d){b=new IJ;e=a.g;Je(b,B(31),e.bJ,e.c7);J(b);}c=GH(b);}}}if(f!=(-16777176))break;}return c;}
function F0(a,b){var c,d,e,f,g,h,i,j,$$je;c=APQ(B9(a,2),B9(a,64));Er(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Dj(a.g))break a;h=a.g;b=h.be;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cu(c,d);d=Be(a.g);h=a.g;if(h.be!=(-536870874)){d=38;break d;}if(h.j==(-536870821)){Be(h);e=1;d=(-1);break d;}Be(h);if(g){c=F0(a,0);break d;}if(a.g.be==(-536870819))break d;WM(c,F0(a,0));break d;case -536870867:if(!g){b=h.j;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Be(h);h=a.g;i=h.be;if(GJ(h))break c;if
(i<0){j=a.g.j;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Kg(i))break e;i=i&65535;break e;}catch($$e){$$je=Ef($$e);if($$je instanceof D1){break b;}else{throw $$e;}}}try{BR(c,d,i);}catch($$e){$$je=Ef($$e);if($$je instanceof D1){break b;}else{throw $$e;}}Be(a.g);d=(-1);break d;}}if(d>=0)Cu(c,d);d=45;Be(a.g);break d;case -536870821:if(d>=0){Cu(c,d);d=(-1);}Be(a.g);j=0;h=a.g;if(h.be==(-536870818)){Be(h);j=1;}if(!e)Yg(c,F0(a,j));else WM(c,F0(a,j));e=0;Be(a.g);break d;case -536870819:if(d>=0)Cu(c,
d);d=93;Be(a.g);break d;case -536870818:if(d>=0)Cu(c,d);d=94;Be(a.g);break d;case 0:if(d>=0)Cu(c,d);h=a.g.eB;if(h===null)d=0;else{AD3(c,h);d=(-1);}Be(a.g);break d;default:}if(d>=0)Cu(c,d);d=Be(a.g);}g=0;}J(B8(B(31),JR(a),a.g.c7));}J(B8(B(31),JR(a),a.g.c7));}if(!f){if(d>=0)Cu(c,d);return c;}J(B8(B(31),JR(a),a.g.c7-1|0));}
function Xu(a,b){var c,d,e;c=LX(b);if(B9(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AGf(b&65535);}if(B9(a,64)&&b>128){if(c){d=new Ms;Dy(d);d.bG=2;d.p6=Gx(Gu(b));return d;}if(OJ(b))return AL$(b&65535);if(!Sv(b))return ANF(b&65535);return AJt(b&65535);}}if(!c){if(OJ(b))return AL$(b&65535);if(!Sv(b))return ZF(b&65535);return AJt(b&65535);}d=new DT;Dy(d);d.bG=2;d.fv=b;e=(Gm(b)).data;d.jf=e[0];d.hV=e[1];return d;}
function KL(a,b){var c,d,e;if(!ABs(b)){if(!b.I){if(b.gD())return AIU(b);return APl(b);}if(!b.gD())return AJ_(b);c=new I7;Uh(c,b);return c;}c=YL(b);d=new MK;BL(d);d.oJ=c;d.ve=c.bd;if(!b.I){if(b.gD())return AB_(AIU(Hs(b)),d);return AB_(APl(Hs(b)),d);}if(!b.gD())return AB_(AJ_(Hs(b)),d);c=new P4;e=new I7;Uh(e,Hs(b));ADL(c,e,d);return c;}
function Ht(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B9(a,b){return (a.dh&b)!=b?0:1;}
function NW(){C.call(this);this.rU=null;}
function ARl(a,b){b.dI=a.rU.dI;}
var Gn=F(Cj);
var AXh=null;var AXg=null;var AXm=null;function UP(){UP=Bl(Gn);AHr();}
function AJP(a,b){var c=new Gn();Zz(c,a,b);return c;}
function Zz(a,b,c){UP();C_(a,b,c);}
function AHr(){var b;AXh=AJP(B(388),0);b=AJP(B(389),1);AXg=b;AXm=H(Gn,[AXh,b]);}
function SV(){C.call(this);this.sn=null;}
function AKm(a,b){Db(a.sn,b);}
function Qn(){var a=this;C.call(a);a.ou=null;a.ox=0;a.oy=0;a.oz=null;a.oA=0;a.ov=0;}
function AI_(a,b){var c,d,e,f,g,h,i,j;c=a.ou;d=a.ox;e=a.oy;f=a.oz;g=a.oA;h=a.ov;i=Cv(c.bp,5.0);d=Y((c.bp.b7.b-d|0)-i|0,Ba((i-d|0)-c.S.q.b|0,b.h.b));j=Y((c.bp.b7.a-e|0)-i|0,Ba((i-e|0)-c.S.q.a|0,b.h.a));Bf(f,d+g|0,j+h|0);Fm(c,f,c.O.q);}
function Xn(){var a=this;C.call(a);a.nU=null;a.nT=null;a.nR=null;a.nQ=0;a.nY=0;a.nX=0;a.nW=0;a.nV=0;a.n0=0;a.nZ=0;a.rX=0;}
function AKC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.nU;d=a.nT;e=a.nR;f=a.nQ;g=a.nY;h=a.nX;i=a.nW;j=a.nV;k=a.n0;l=a.nZ;m=a.rX;n=Cv(c.bp,5.0);o=c.O.iK();CA(d,c.O.q);CA(e,c.O.D);switch(f){case -1:f=Y(h+(b.h.b-g|0)|0,c.bp.b7.b-n|0);g=o.b;h=h+i|0;f=Ba(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Ba((i+b.h.b|0)-g|0,Ba(o.b,n-c.S.D.b|0));}b:{switch(j){case -1:f=Ba(n,Y(l+(b.h.a-k|0)|0,(c.bp.b7.a+c.S.q.a|0)-n|0));g=o.a;h=l+m|0;f=Ba(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Ba((m+b.h.a|0)-k|0,o.a);}Fm(c,e,d);}
function Vd(){var a=this;C.call(a);a.uV=null;a.uW=0.0;}
function JO(a,b){return KJ(a.uV,b,a.uW*2.0+0.875);}
function Bz(){var a=this;C.call(a);a.d=null;a.ce=0;a.n3=null;a.he=0;}
var AUg=0;function BL(a){var b,c;b=new Ff;c=AUg;AUg=c+1|0;JW(b,c);a.n3=L0(b);}
function KI(a,b){var c,d;c=new Ff;d=AUg;AUg=d+1|0;JW(c,d);a.n3=L0(c);a.d=b;}
function HA(a,b,c,d){var e;e=d.v;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function HN(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AGI(a,b){a.he=b;}
function AFV(a){return a.he;}
function AON(a){return a.d;}
function APG(a,b){a.d=b;}
function APD(a,b){return 1;}
function AQx(a){return null;}
function I2(a){var b;a.ce=1;b=a.d;if(b!==null){if(!b.ce){b=b.e$();if(b!==null){a.d.ce=1;a.d=b;}a.d.d6();}else if(b instanceof Gq&&b.d$.jK)a.d=b.d;}}
function ADV(){AUg=1;}
var Uq=F();
var AXf=null;function AR0(){AR0=Bl(Uq);AFA();}
function AFA(){var b,c;UP();b=BC((AXm.eF()).data.length);c=b.data;AXf=b;c[AXh.cY]=1;c[AXg.cY]=2;}
function O2(){C.call(this);this.py=null;}
function AGR(a,b){Ui(Iy(a.py),b,AV7,YG(B(390)));}
function VU(){C.call(this);this.tD=null;}
function AIw(a,b){var c,d;c=a.tD;d=b.ha;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function X7(){var a=this;C.call(a);a.px=null;a.pw=null;}
function AGD(a){var b,c;b=a.px;c=a.pw;b.hE.sr(c);}
function CN(){var a=this;Bz.call(a);a.jK=0;a.dq=0;}
var AXl=null;function L_(){L_=Bl(CN);AHU();}
function AS$(a){var b=new CN();Fl(b,a);return b;}
function Fl(a,b){L_();BL(a);a.dq=b;}
function AFr(a,b,c,d){var e,f;e=Io(d,a.dq);Jw(d,a.dq,b);f=a.d.c(b,c,d);if(f<0)Jw(d,a.dq,e);return f;}
function ALf(a){return a.dq;}
function AFK(a,b){return 0;}
function AHU(){var b;b=new N1;BL(b);AXl=b;}
function GE(){var a=this;C.call(a);a.bb=null;a.fM=0;a.es=0;a.ts=0;a.j$=0;a.be=0;a.j=0;a.q8=0;a.eB=null;a.eo=null;a.u=0;a.hq=0;a.c7=0;a.gT=0;a.bJ=null;}
var AXn=null;var AXj=null;var AXk=0;function OA(a,b){if(b>0&&b<3)a.es=b;if(b==1){a.j=a.be;a.eo=a.eB;a.u=a.gT;a.gT=a.c7;E1(a);}}
function GJ(a){return a.eB===null?0:1;}
function JG(a){return a.eo===null?0:1;}
function Be(a){E1(a);return a.j$;}
function E$(a){var b;b=a.eB;E1(a);return b;}
function E1(a){var b,c,d,e,f,g,h,$$je;a.j$=a.be;a.be=a.j;a.eB=a.eo;a.c7=a.gT;a.gT=a.u;while(true){b=0;c=a.u>=a.bb.data.length?0:Lz(a);a.j=c;a.eo=null;if(a.es==4){if(c!=92)return;c=a.u;d=a.bb.data;c=c>=d.length?0:d[BS(a)];a.j=c;switch(c){case 69:break;default:a.j=92;a.u=a.hq;return;}a.es=a.ts;a.j=a.u>(a.bb.data.length-2|0)?0:Lz(a);}a:{c=a.j;if(c!=92){e=a.es;if(e==1)switch(c){case 36:a.j=(-536870876);break a;case 40:if(a.bb.data[a.u]!=63){a.j=(-2147483608);break a;}BS(a);c=a.bb.data[a.u];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.j=(-134217688);BS(a);break b;default:J(B8(B(31),Fi(a),a.u));}a.j=(-67108824);BS(a);}else{switch(c){case 33:break;case 60:BS(a);c=a.bb.data[a.u];e=1;break b;case 61:a.j=(-536870872);BS(a);break b;case 62:a.j=(-33554392);BS(a);break b;default:f=ADW(a);a.j=f;if(f<256){a.fM=f;f=f<<16;a.j=f;a.j=(-1073741784)|f;break b;}f=f&255;a.j=f;a.fM=f;f=f<<16;a.j=f;a.j=(-16777176)|f;break b;}a.j=(-268435416);BS(a);}}if(!e)break;}break a;case 41:a.j=(-536870871);break a;case 42:case 43:case 63:e
=a.u;d=a.bb.data;switch(e>=d.length?42:d[e]){case 43:a.j=c|(-2147483648);BS(a);break a;case 63:a.j=c|(-1073741824);BS(a);break a;default:}a.j=c|(-536870912);break a;case 46:a.j=(-536870866);break a;case 91:a.j=(-536870821);OA(a,2);break a;case 93:if(e!=2)break a;a.j=(-536870819);break a;case 94:a.j=(-536870818);break a;case 123:a.eo=ADr(a,c);break a;case 124:a.j=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.j=(-536870874);break a;case 45:a.j=(-536870867);break a;case 91:a.j=(-536870821);break a;case 93:a.j
=(-536870819);break a;case 94:a.j=(-536870818);break a;default:}}else{c=a.u>=(a.bb.data.length-2|0)?(-1):Lz(a);c:{a.j=c;switch(c){case -1:J(B8(B(31),Fi(a),a.u));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.j
=ABW(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.es!=1)break a;a.j=(-2147483648)|c;break a;case 65:a.j=(-2147483583);break a;case 66:a.j=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B8(B(31),Fi(a),a.u));case 68:case 83:case 87:case 100:case 115:case 119:a.eo=RZ(JK(a.bb,
a.hq,1),0);a.j=0;break a;case 71:a.j=(-2147483577);break a;case 80:case 112:break c;case 81:a.ts=a.es;a.es=4;b=1;break a;case 90:a.j=(-2147483558);break a;case 97:a.j=7;break a;case 98:a.j=(-2147483550);break a;case 99:c=a.u;d=a.bb.data;if(c>=(d.length-2|0))J(B8(B(31),Fi(a),a.u));a.j=d[BS(a)]&31;break a;case 101:a.j=27;break a;case 102:a.j=12;break a;case 110:a.j=10;break a;case 114:a.j=13;break a;case 116:a.j=9;break a;case 117:a.j=Ps(a,4);break a;case 120:a.j=Ps(a,2);break a;case 122:a.j=(-2147483526);break a;default:}break a;}g
=ABH(a);h=0;if(a.j==80)h=1;try{a.eo=RZ(g,h);}catch($$e){$$je=Ef($$e);if($$je instanceof I$){J(B8(B(31),Fi(a),a.u));}else{throw $$e;}}a.j=0;}}if(b)continue;else break;}}
function ABH(a){var b,c,d,e,f,g;b=new M;FU(b,10);c=a.u;d=a.bb;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=JK(d,BS(a),1);f=new M;O(f);G(G(f,B(391)),b);return N(f);}BS(a);c=0;a:{while(true){g=a.u;d=a.bb.data;if(g>=(d.length-2|0))break;c=d[BS(a)];if(c==125)break a;BA(b,c);}}if(c!=125)J(B8(B(31),a.bJ,a.u));}if(!b.L)J(B8(B(31),a.bJ,a.u));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(391)),f);return N(b);}b:{c:{if(I(f)>3){if(KB(f,B(391)))break c;if(KB(f,B(392)))break c;}break b;}f=Dk(f,2);}return f;}
function ADr(a,b){var c,d,e,f,g,$$je;c=new M;FU(c,4);d=(-1);e=2147483647;a:{while(true){f=a.u;g=a.bb.data;if(f>=g.length)break a;b=g[BS(a)];if(b==125)break a;if(b==44&&d<0)try{d=Jr(DS(c),10);ADx(c,0,YX(c));continue;}catch($$e){$$je=Ef($$e);if($$je instanceof De){break;}else{throw $$e;}}BA(c,b&65535);}J(B8(B(31),a.bJ,a.u));}if(b!=125)J(B8(B(31),a.bJ,a.u));if(c.L>0)b:{try{e=Jr(DS(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Ef($$e);if($$je instanceof De){}else{throw $$e;}}J(B8(B(31),a.bJ,a.u));}else if
(d<0)J(B8(B(31),a.bJ,a.u));if((d|e|(e-d|0))<0)J(B8(B(31),a.bJ,a.u));b=a.u;g=a.bb.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.j=(-2147483525);BS(a);break c;case 63:a.j=(-1073741701);BS(a);break c;default:}a.j=(-536870789);}c=new MV;c.eq=d;c.el=e;return c;}
function Fi(a){return a.bJ;}
function Dj(a){return !a.be&&!a.j&&a.u==a.q8&&!GJ(a)?1:0;}
function Kg(b){return b<0?0:1;}
function EY(a){return !Dj(a)&&!GJ(a)&&Kg(a.be)?1:0;}
function NZ(a){var b;b=a.be;return b<=56319&&b>=55296?1:0;}
function Vb(a){var b;b=a.be;return b<=57343&&b>=56320?1:0;}
function Sv(b){return b<=56319&&b>=55296?1:0;}
function OJ(b){return b<=57343&&b>=56320?1:0;}
function Ps(a,b){var c,d,e,f,$$je;c=new M;FU(c,b);d=a.bb.data.length-2|0;e=0;while(true){f=BG(e,b);if(f>=0)break;if(a.u>=d)break;BA(c,a.bb.data[BS(a)]);e=e+1|0;}if(!f)a:{try{b=Jr(DS(c),16);}catch($$e){$$je=Ef($$e);if($$je instanceof De){break a;}else{throw $$e;}}return b;}J(B8(B(31),a.bJ,a.u));}
function ABW(a){var b,c,d,e,f,g;b=3;c=1;d=a.bb.data;e=d.length-2|0;f=UL(d[a.u],8);switch(f){case -1:break;default:if(f>3)b=2;BS(a);a:{while(true){if(c>=b)break a;g=a.u;if(g>=e)break a;g=UL(a.bb.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BS(a);c=c+1|0;}}return f;}J(B8(B(31),a.bJ,a.u));}
function ADW(a){var b,c,d,e;b=1;c=a.fM;a:while(true){d=a.u;e=a.bb.data;if(d>=e.length)J(B8(B(31),a.bJ,d));b:{c:{switch(e[d]){case 41:BS(a);return c|256;case 45:if(!b)J(B8(B(31),a.bJ,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BS(a);}BS(a);return c;}
function BS(a){var b,c,d,e,f;b=a.u;a.hq=b;if(!(a.fM&4))a.u=b+1|0;else{c=a.bb.data.length-2|0;a.u=b+1|0;a:while(true){d=a.u;if(d<c&&QT(a.bb.data[d])){a.u=a.u+1|0;continue;}d=a.u;if(d>=c)break;e=a.bb.data;if(e[d]!=35)break;a.u=d+1|0;while(true){f=a.u;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.u=f+1|0;}}}return a.hq;}
function ADi(b){return AXn.B7(b);}
function Lz(a){var b,c,d,e;b=a.bb.data[BS(a)];if(CD(b)){c=a.hq+1|0;d=a.bb.data;if(c<d.length){e=d[c];if(C4(e)){BS(a);return Es(b,e);}}}return b;}
function NX(a){return a.c7;}
function IJ(){var a=this;BD.call(a);a.w4=null;a.wD=null;a.pS=0;}
function B8(a,b,c){var d=new IJ();Je(d,a,b,c);return d;}
function Je(a,b,c,d){V(a);a.pS=(-1);a.w4=b;a.wD=c;a.pS=d;}
function WZ(){C.call(this);this.tf=null;}
function AM5(a,b){var c,d;c=a.tf;d=0;while(d<b.length){YU(c,b[d]);d=d+1|0;}}
var ABz=F(0);
function Ub(){var a=this;C.call(a);a.oP=null;a.oR=null;a.oT=null;}
function AMJ(a,b){a.oP.n(ARK(a.oR,b,a.oT));}
var RH=F(CN);
function AE0(a,b,c,d){var e;e=a.dq;BH(d,e,b-Dm(d,e)|0);return a.d.c(b,c,d);}
function AOe(a,b){return 0;}
var Xx=F(CN);
function AGG(a,b,c,d){return b;}
var Pu=F(CN);
function AFS(a,b,c,d){if(Dm(d,a.dq)!=b)b=(-1);return b;}
function SR(){CN.call(this);this.mJ=0;}
function AE5(a,b,c,d){var e;e=a.dq;BH(d,e,b-Dm(d,e)|0);a.mJ=b;return b;}
function AMS(a,b){return 0;}
var Fv=F(CN);
function APX(a,b,c,d){if(d.i5!=1&&b!=d.v)return (-1);d.ir=1;Jw(d,0,b);return b;}
function BU(){Bz.call(this);this.bG=0;}
function Dy(a){BL(a);a.bG=1;}
function AQZ(a,b,c,d){var e;if((b+a.bW()|0)>d.v){d.de=1;return (-1);}e=a.bq(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function AO$(a){return a.bG;}
function AJQ(a,b){return 1;}
var AC6=F(BU);
function GH(a){var b=new AC6();ALo(b,a);return b;}
function ALo(a,b){KI(a,b);a.bG=1;a.he=1;a.bG=0;}
function AOE(a,b,c){return 0;}
function AH1(a,b,c,d){var e,f,g;e=d.v;f=d.cF;while(true){g=BG(b,e);if(g>0)return (-1);if(g<0&&C4(L(c,b))&&b>f&&CD(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AGv(a,b,c,d,e){var f,g;f=e.v;g=e.cF;while(true){if(c<b)return (-1);if(c<f&&C4(L(d,c))&&c>g&&CD(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AE3(a,b){return 0;}
function BQ(){var a=this;Bz.call(a);a.by=null;a.d$=null;a.X=0;}
function ASy(a,b){var c=new BQ();Fw(c,a,b);return c;}
function Fw(a,b,c){BL(a);a.by=b;a.d$=c;a.X=c.dq;}
function AIG(a,b,c,d){var e,f,g,h;if(a.by===null)return (-1);e=Fz(d,a.X);Dx(d,a.X,b);f=a.by.i;g=0;while(true){if(g>=f){Dx(d,a.X,e);return (-1);}h=(Bp(a.by,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AML(a,b){a.d$.d=b;}
function AKE(a,b){var c;a:{c=a.by;if(c!==null){c=BT(c);while(true){if(!B5(c))break a;if(!(BY(c)).bQ(b))continue;else return 1;}}}return 0;}
function ANr(a,b){return Io(b,a.X)>=0&&Fz(b,a.X)==Io(b,a.X)?0:1;}
function AGs(a){var b,c,d,e;a.ce=1;b=a.d$;if(b!==null&&!b.ce)I2(b);a:{b=a.by;if(b!==null){c=b.i;d=0;while(true){if(d>=c)break a;b=Bp(a.by,d);e=b.e$();if(e===null)e=b;else{b.ce=1;El(a.by,d);Rk(a.by,d,e);}if(!e.ce)e.d6();d=d+1|0;}}}if(a.d!==null)I2(a);}
var IV=F(BQ);
function AMu(a,b,c,d){var e,f,g,h;e=Dm(d,a.X);BH(d,a.X,b);f=a.by.i;g=0;while(true){if(g>=f){BH(d,a.X,e);return (-1);}h=(Bp(a.by,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ANR(a,b){return !Dm(b,a.X)?0:1;}
var DP=F(IV);
function AG$(a,b,c,d){var e,f,g;e=Dm(d,a.X);BH(d,a.X,b);f=a.by.i;g=0;while(g<f){if((Bp(a.by,g)).c(b,c,d)>=0)return a.d.c(a.d$.mJ,c,d);g=g+1|0;}BH(d,a.X,e);return (-1);}
function ANy(a,b){a.d=b;}
var MB=F(DP);
function AME(a,b,c,d){var e,f;e=a.by.i;f=0;while(f<e){if((Bp(a.by,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function APL(a,b){return 0;}
var V6=F(DP);
function AFF(a,b,c,d){var e,f;e=a.by.i;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bp(a.by,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function APe(a,b){return 0;}
var QV=F(DP);
function AGm(a,b,c,d){var e,f,g,h;e=a.by.i;f=d.iy?0:d.cF;a:{g=a.d.c(b,c,d);if(g>=0){BH(d,a.X,b);h=0;while(true){if(h>=e)break a;if((Bp(a.by,h)).cm(f,b,c,d)>=0){BH(d,a.X,(-1));return g;}h=h+1|0;}}}return (-1);}
function ARp(a,b){return 0;}
var TA=F(DP);
function AEy(a,b,c,d){var e,f;e=a.by.i;BH(d,a.X,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bp(a.by,f)).cm(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AN5(a,b){return 0;}
function Gq(){BQ.call(this);this.cS=null;}
function ASW(a,b){var c=new Gq();Zr(c,a,b);return c;}
function Zr(a,b,c){BL(a);a.cS=b;a.d$=c;a.X=c.dq;}
function AEU(a,b,c,d){var e,f;e=Fz(d,a.X);Dx(d,a.X,b);f=a.cS.c(b,c,d);if(f>=0)return f;Dx(d,a.X,e);return (-1);}
function AK0(a,b,c,d){var e;e=a.cS.ch(b,c,d);if(e>=0)Dx(d,a.X,e);return e;}
function AOk(a,b,c,d,e){var f;f=a.cS.cm(b,c,d,e);if(f>=0)Dx(e,a.X,f);return f;}
function AKy(a,b){return a.cS.bQ(b);}
function AMP(a){var b;b=new MZ;Zr(b,a.cS,a.d$);a.d=b;return b;}
function AQA(a){var b;a.ce=1;b=a.d$;if(b!==null&&!b.ce)I2(b);b=a.cS;if(b!==null&&!b.ce){b=b.e$();if(b!==null){a.cS.ce=1;a.cS=b;}a.cS.d6();}}
var GG=F();
function U(){var a=this;GG.call(a);a.bd=0;a.cb=0;a.H=null;a.i_=null;a.jD=null;a.I=0;}
var AXo=null;function Ov(){Ov=Bl(U);AGT();}
function Bn(a){var b;Ov();b=new WV;b.z=BC(64);a.H=b;}
function AFH(a){return null;}
function AFe(a){return a.H;}
function ABs(a){var b,c,d,e,f;if(!a.cb)b=G$(a.H,0)>=2048?0:1;else{a:{c=a.H;b=0;d=c.bo;if(b<d){e=c.z.data;f=(e[0]^(-1))>>>0|0;if(f)b=Ig(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Ig(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AIT(a){return a.I;}
function AO4(a){return a;}
function YL(a){var b,c;if(a.jD===null){b=a.eA();c=new Wi;c.xs=a;c.nc=b;Bn(c);a.jD=c;Er(c,a.cb);}return a.jD;}
function Hs(a){var b,c;if(a.i_===null){b=a.eA();c=new Wg;c.w7=a;c.sW=b;c.tG=a;Bn(c);a.i_=c;Er(c,a.bd);a.i_.I=a.I;}return a.i_;}
function AQw(a){return 0;}
function Er(a,b){var c;c=a.bd;if(c^b){a.bd=c?0:1;a.cb=a.cb?0:1;}if(!a.I)a.I=1;return a;}
function AH3(a){return a.bd;}
function Kc(b,c){Ov();return b.k(c);}
function Ie(b,c){var d,e;Ov();if(b.db()!==null&&c.db()!==null){b=b.db();c=c.db();d=Y(b.z.data.length,c.z.data.length);e=0;a:{while(e<d){if(b.z.data[e]&c.z.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function RZ(b,c){var d,e,f;Ov();d=0;while(true){AN3();e=AXp.data;if(d>=e.length){f=new I$;Bj(f,B(31));f.xP=B(31);f.xv=b;J(f);}e=e[d].data;if(Bq(b,e[0]))break;d=d+1|0;}return ACB(e[1],c);}
function AGT(){var b;b=new G0;AN3();AXo=b;}
function Zi(){var a=this;U.call(a);a.kQ=0;a.mI=0;a.f5=0;a.kt=0;a.dF=0;a.e5=0;a.E=null;a.bw=null;}
function Dn(){var a=new Zi();AQ9(a);return a;}
function APQ(a,b){var c=new Zi();AGH(c,a,b);return c;}
function AQ9(a){Bn(a);a.E=ARr();}
function AGH(a,b,c){Bn(a);a.E=ARr();a.kQ=b;a.mI=c;}
function Cu(a,b){a:{if(a.kQ){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dF){Mi(a.E,Ht(b&65535));break a;}Lu(a.E,Ht(b&65535));break a;}if(a.mI&&b>128){a.f5=1;b=Gx(Gu(b));}}}if(!(!Sv(b)&&!OJ(b))){if(a.kt)Mi(a.H,b-55296|0);else Lu(a.H,b-55296|0);}if(a.dF)Mi(a.E,b);else Lu(a.E,b);if(!a.I&&LX(b))a.I=1;return a;}
function AD3(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(a.kt){if(!b.cb)FP(a.H,b.eA());else Da(a.H,b.eA());}else if(!b.cb)FI(a.H,b.eA());else{Fq(a.H,b.eA());Da(a.H,b.eA());a.cb=a.cb?0:1;a.kt=1;}if(!a.e5&&b.db()!==null){if(a.dF){if(!b.bd)FP(a.E,b.db());else Da(a.E,b.db());}else if(!b.bd)FI(a.E,b.db());else{Fq(a.E,b.db());Da(a.E,b.db());a.bd=a.bd?0:1;a.dF=1;}}else{c=a.bd;d=a.bw;if(d!==null){if(!c){e=new On;e.vD=a;e.t_=c;e.to=d;e.td=b;Bn(e);a.bw=e;}else{e=new Oo;e.xX=a;e.qu=c;e.qa=d;e.pn=b;Bn(e);a.bw=e;}}else{if(c&&!a.dF
&&L1(a.E)){d=new Ok;d.wC=a;d.qj=b;Bn(d);a.bw=d;}else if(!c){d=new Oi;d.kc=a;d.jp=c;d.nS=b;Bn(d);a.bw=d;}else{d=new Oj;d.k2=a;d.jw=c;d.ti=b;Bn(d);a.bw=d;}a.e5=1;}}return a;}
function BR(a,b,c){var d,e,f,g,h;if(b>c){d=new BD;V(d);J(d);}a:{b:{if(!a.kQ){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cu(a,b);b=b+1|0;}}if(!a.dF)HU(a.E,b,c+1|0);else{d=a.E;c=c+1|0;if(b>c){d=new Bw;V(d);J(d);}e=d.bo;if(b<e){f=Y(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.z.data;h[g]=h[g]&(H_(d,b)|HG(d,f));}else{h=d.z.data;h[g]=h[g]&H_(d,b);e=g+1|0;while(e<c){d.z.data[e]=0;e=e+1|0;}if(f&31){h=d.z.data;h[c]=h[c]&HG(d,f);}}G4(d);}}}}return a;}
function Yg(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.f5)a.f5=1;c=a.cb;if(!(c^b.cb)){if(!c)FI(a.H,b.H);else Da(a.H,b.H);}else if(c)FP(a.H,b.H);else{Fq(a.H,b.H);Da(a.H,b.H);a.cb=1;}if(!a.e5&&CT(b)!==null){c=a.bd;if(!(c^b.bd)){if(!c)FI(a.E,CT(b));else Da(a.E,CT(b));}else if(c)FP(a.E,CT(b));else{Fq(a.E,CT(b));Da(a.E,CT(b));a.bd=1;}}else{c=a.bd;d=a.bw;if(d!==null){if(!c){e=new Od;e.vj=a;e.sq=c;e.tg=d;e.tS=b;Bn(e);a.bw=e;}else{e=new OY;e.vO=a;e.tP=c;e.mn=d;e.mL=b;Bn(e);a.bw=e;}}else{if(!a.dF&&L1(a.E)){if(!c){d=new Ol;d.x3
=a;d.o2=b;Bn(d);a.bw=d;}else{d=new Om;d.vT=a;d.tC=b;Bn(d);a.bw=d;}}else if(!c){d=new Op;d.st=a;d.qL=b;d.qe=c;Bn(d);a.bw=d;}else{d=new Oq;d.q_=a;d.rw=b;d.rK=c;Bn(d);a.bw=d;}a.e5=1;}}}
function WM(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.f5)a.f5=1;c=a.cb;if(!(c^b.cb)){if(!c)Da(a.H,b.H);else FI(a.H,b.H);}else if(!c)FP(a.H,b.H);else{Fq(a.H,b.H);Da(a.H,b.H);a.cb=0;}if(!a.e5&&CT(b)!==null){c=a.bd;if(!(c^b.bd)){if(!c)Da(a.E,CT(b));else FI(a.E,CT(b));}else if(!c)FP(a.E,CT(b));else{Fq(a.E,CT(b));Da(a.E,CT(b));a.bd=0;}}else{c=a.bd;d=a.bw;if(d!==null){if(!c){e=new Of;e.vC=a;e.sy=c;e.m_=d;e.qq=b;Bn(e);a.bw=e;}else{e=new Og;e.v1=a;e.r0=c;e.mc=d;e.sp=b;Bn(e);a.bw=e;}}else{if(!a.dF&&L1(a.E)){if(!c){d=new Oa;d.vX
=a;d.oB=b;Bn(d);a.bw=d;}else{d=new Ob;d.xT=a;d.oG=b;Bn(d);a.bw=d;}}else if(!c){d=new Oh;d.u0=a;d.t7=b;d.ro=c;Bn(d);a.bw=d;}else{d=new N_;d.rm=a;d.r5=b;d.qw=c;Bn(d);a.bw=d;}a.e5=1;}}}
function CY(a,b){var c;c=a.bw;if(c!==null)return a.bd^c.k(b);return a.bd^Dv(a.E,b);}
function CT(a){if(!a.e5)return a.E;return null;}
function AHT(a){return a.H;}
function APs(a){var b,c;if(a.bw!==null)return a;b=CT(a);c=new Oe;c.vf=a;c.hZ=b;Bn(c);return Er(c,a.bd);}
function ALQ(a){var b,c,d;b=new M;O(b);c=G$(a.E,0);while(c>=0){Ih(b,Gm(c));BA(b,124);c=G$(a.E,c+1|0);}d=b.L;if(d>0)V8(b,d-1|0);return N(b);}
function AH6(a){return a.f5;}
function I$(){var a=this;Bo.call(a);a.xP=null;a.xv=null;}
function D0(){Bz.call(this);this.G=null;}
function Dd(a,b,c,d){KI(a,c);a.G=b;a.he=d;}
function AQ8(a){return a.G;}
function AOn(a,b){return !a.G.bQ(b)&&!a.d.bQ(b)?0:1;}
function APS(a,b){return 1;}
function ALm(a){var b;a.ce=1;b=a.d;if(b!==null&&!b.ce){b=b.e$();if(b!==null){a.d.ce=1;a.d=b;}a.d.d6();}b=a.G;if(b!==null){if(!b.ce){b=b.e$();if(b!==null){a.G.ce=1;a.G=b;}a.G.d6();}else if(b instanceof Gq&&b.d$.jK)a.G=b.d;}}
function C2(){D0.call(this);this.Y=null;}
function AS3(a,b,c){var d=new C2();ER(d,a,b,c);return d;}
function ER(a,b,c,d){Dd(a,b,c,d);a.Y=b;}
function AEA(a,b,c,d){var e,f;e=0;a:{while((b+a.Y.bW()|0)<=d.v){f=a.Y.bq(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.Y.bW()|0;e=e+(-1)|0;}return f;}
function E2(){C2.call(this);this.i4=null;}
function ASa(a,b,c,d){var e=new E2();R9(e,a,b,c,d);return e;}
function R9(a,b,c,d,e){ER(a,c,d,e);a.i4=b;}
function AFu(a,b,c,d){var e,f,g,h,i;e=a.i4;f=e.eq;g=e.el;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.Y.bW()|0)>d.v)break a;i=a.Y.bq(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.Y.bW()|0;h=h+(-1)|0;}return i;}if((b+a.Y.bW()|0)>d.v){d.de=1;return (-1);}i=a.Y.bq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CP=F(D0);
function AET(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.G.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var Ex=F(C2);
function AK6(a,b,c,d){var e;e=a.G.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function ARs(a,b){a.d=b;a.G.K(b);}
var Wk=F(C2);
function AQR(a,b,c,d){while((b+a.Y.bW()|0)<=d.v&&a.Y.bq(b,c)>0){b=b+a.Y.bW()|0;}return a.d.c(b,c,d);}
function ALN(a,b,c,d){var e,f,g;e=a.d.ch(b,c,d);if(e<0)return (-1);f=e-a.Y.bW()|0;while(f>=b&&a.Y.bq(f,c)>0){g=f-a.Y.bW()|0;e=f;f=g;}return e;}
function X(){var a=this;C.call(a);a.la=null;a.j_=null;}
function ACB(a,b){if(!b&&a.la===null)a.la=a.B();else if(b&&a.j_===null)a.j_=Er(a.B(),1);if(b)return a.j_;return a.la;}
var De=F(BD);
function MV(){var a=this;GG.call(a);a.eq=0;a.el=0;}
function ALZ(a){var b,c,d,e,f;b=a.eq;c=a.el;d=c==2147483647?B(31):L0(ADh(c));e=new M;O(e);BA(e,123);f=T(e,b);BA(f,44);BA(G(f,d),125);return N(e);}
var N1=F(Bz);
function AKf(a,b,c,d){return b;}
function AMK(a,b){return 0;}
function WV(){var a=this;C.call(a);a.z=null;a.bo=0;}
function ARr(){var a=new WV();AF8(a);return a;}
function AF8(a){a.z=BC(0);}
function Lu(a,b){var c,d;c=b/32|0;if(b>=a.bo){Il(a,c+1|0);a.bo=b+1|0;}d=a.z.data;d[c]=d[c]|1<<(b%32|0);}
function HU(a,b,c){var d,e,f,g,h;d=BG(b,c);if(d>0){e=new Bw;V(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bo){Il(a,f+1|0);a.bo=c;}if(d==f){g=a.z.data;g[d]=g[d]|HG(a,b)&H_(a,c);}else{g=a.z.data;g[d]=g[d]|HG(a,b);h=d+1|0;while(h<f){a.z.data[h]=(-1);h=h+1|0;}if(c&31){g=a.z.data;g[f]=g[f]|H_(a,c);}}}
function HG(a,b){return (-1)<<(b%32|0);}
function H_(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Mi(a,b){var c,d;c=b/32|0;d=a.z.data;if(c<d.length){d[c]=d[c]&J$((-2),b%32|0);if(b==(a.bo-1|0))G4(a);}}
function Dv(a,b){var c,d;c=b/32|0;d=a.z.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function G$(a,b){var c,d,e,f;c=a.bo;if(b>=c)return (-1);d=b/32|0;e=a.z.data;f=e[d]>>>(b%32|0)|0;if(f)return Ig(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Ig(e[f])|0;f=f+1|0;}return (-1);}
function Il(a,b){var c;c=a.z.data.length;if(c>=b)return;c=Ba((b*3|0)/2|0,(c*2|0)+1|0);a.z=L7(a.z,c);}
function G4(a){var b,c,d;b=(a.bo+31|0)/32|0;a.bo=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=NA(a.z.data[c]);if(d<32)break;c=c+(-1)|0;a.bo=a.bo-32|0;}a.bo=a.bo-d|0;}}
function Da(a,b){var c,d,e,f;c=Y(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]&b.z.data[d];d=d+1|0;}while(true){f=a.z.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bo=Y(a.bo,b.bo);G4(a);}
function FP(a,b){var c,d,e;c=Y(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]&(b.z.data[d]^(-1));d=d+1|0;}G4(a);}
function FI(a,b){var c,d,e;c=Ba(a.bo,b.bo);a.bo=c;Il(a,(c+31|0)/32|0);c=Y(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]|b.z.data[d];d=d+1|0;}}
function Fq(a,b){var c,d,e;c=Ba(a.bo,b.bo);a.bo=c;Il(a,(c+31|0)/32|0);c=Y(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]^b.z.data[d];d=d+1|0;}G4(a);}
function L1(a){return a.bo?0:1;}
function MK(){var a=this;BQ.call(a);a.oJ=null;a.ve=0;}
function P4(){var a=this;BQ.call(a);a.lz=null;a.k5=null;}
function AB_(a,b){var c=new P4();ADL(c,a,b);return c;}
function ADL(a,b,c){BL(a);a.lz=b;a.k5=c;}
function AFp(a,b,c,d){var e,f,g,h,i;e=a.lz.c(b,c,d);if(e<0)a:{f=a.k5;g=d.cF;e=d.v;h=b+1|0;e=BG(h,e);if(e>0){d.de=1;e=(-1);}else{i=L(c,b);if(!f.oJ.k(i))e=(-1);else{if(CD(i)){if(e<0&&C4(L(c,h))){e=(-1);break a;}}else if(C4(i)&&b>g&&CD(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AMq(a,b){a.d=b;a.k5.d=b;a.lz.K(b);}
function AFX(a,b){return 1;}
function AFG(a,b){return 1;}
function Dz(){var a=this;BQ.call(a);a.dz=null;a.wu=0;}
function AJ_(a){var b=new Dz();Uh(b,a);return b;}
function Uh(a,b){BL(a);a.dz=b.iH();a.wu=b.bd;}
function AHK(a,b,c,d){var e,f,g,h;e=d.v;if(b<e){f=b+1|0;g=L(c,b);if(a.k(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(Hi(g,f)&&a.k(Es(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AIi(a,b){return a.dz.k(b);}
function AFj(a,b){if(b instanceof DT)return Kc(a.dz,b.fv);if(b instanceof Ej)return Kc(a.dz,b.c$);if(b instanceof Dz)return Ie(a.dz,b.dz);if(!(b instanceof Ed))return 1;return Ie(a.dz,b.eO);}
function AJ5(a){return a.dz;}
function AOY(a,b){a.d=b;}
function AHY(a,b){return 1;}
var I7=F(Dz);
function AJR(a,b){return a.dz.k(Gx(Gu(b)));}
function Y$(){var a=this;BU.call(a);a.pJ=null;a.wg=0;}
function AIU(a){var b=new Y$();AL5(b,a);return b;}
function AL5(a,b){Dy(a);a.pJ=b.iH();a.wg=b.bd;}
function AKg(a,b,c){return !a.pJ.k(EV(Ew(L(c,b))))?(-1):1;}
function Ed(){var a=this;BU.call(a);a.eO=null;a.wQ=0;}
function APl(a){var b=new Ed();ANa(b,a);return b;}
function ANa(a,b){Dy(a);a.eO=b.iH();a.wQ=b.bd;}
function Mk(a,b,c){return !a.eO.k(L(c,b))?(-1):1;}
function AMN(a,b){if(b instanceof Ej)return Kc(a.eO,b.c$);if(b instanceof Ed)return Ie(a.eO,b.eO);if(!(b instanceof Dz)){if(!(b instanceof DT))return 1;return 0;}return Ie(a.eO,b.dz);}
function Oz(){var a=this;BQ.call(a);a.go=null;a.ln=null;a.i1=0;}
function APx(a,b){var c=new Oz();AEV(c,a,b);return c;}
function AEV(a,b,c){BL(a);a.go=b;a.i1=c;}
function AK5(a,b){a.d=b;}
function Qd(a){if(a.ln===null)a.ln=FS(a.go);return a.ln;}
function AEo(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.v;f=BC(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?E4([k,l]):E4([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.i1;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.go.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.i1==3){k=f[0];m=a.go.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.i1==2){b=f[0];m=a.go.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AFP(a,b){return b instanceof Oz&&!Bq(Qd(b),Qd(a))?0:1;}
function APw(a,b){return 1;}
function Ej(){BU.call(this);this.c$=0;}
function ZF(a){var b=new Ej();ANe(b,a);return b;}
function ANe(a,b){Dy(a);a.c$=b;}
function AJ1(a){return 1;}
function AIQ(a,b,c){return a.c$!=L(c,b)?(-1):1;}
function AHF(a,b,c,d){var e,f,g;if(!(c instanceof Bu))return HA(a,b,c,d);e=d.v;while(true){if(b>=e)return (-1);f=GC(c,a.c$,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AJ7(a,b,c,d,e){var f;if(!(d instanceof Bu))return HN(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FY(d,a.c$,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function APo(a,b){if(b instanceof Ej)return b.c$!=a.c$?0:1;if(!(b instanceof Ed)){if(b instanceof Dz)return b.k(a.c$);if(!(b instanceof DT))return 1;return 0;}return Mk(b,0,WW(a.c$))<=0?0:1;}
function ADz(){BU.call(this);this.l9=0;}
function ANF(a){var b=new ADz();ALK(b,a);return b;}
function ALK(a,b){Dy(a);a.l9=EV(Ew(b));}
function AEi(a,b,c){return a.l9!=EV(Ew(L(c,b)))?(-1):1;}
function Yi(){var a=this;BU.call(a);a.tW=0;a.m3=0;}
function AGf(a){var b=new Yi();AN0(b,a);return b;}
function AN0(a,b){Dy(a);a.tW=b;a.m3=Ht(b);}
function AEM(a,b,c){return a.tW!=L(c,b)&&a.m3!=L(c,b)?(-1):1;}
function Fc(){var a=this;BQ.call(a);a.g7=0;a.j1=null;a.jt=null;a.jo=0;}
function ATK(a,b){var c=new Fc();NP(c,a,b);return c;}
function NP(a,b,c){BL(a);a.g7=1;a.jt=b;a.jo=c;}
function AQz(a,b){a.d=b;}
function AMt(a,b,c,d){var e,f,g,h,i,j,k,l;e=BC(4);f=d.v;if(b>=f)return (-1);g=Kv(a,b,c,f);h=b+a.g7|0;i=ADi(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Eg(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Kv(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(ADi(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.g7|0;if(h>=f){b=k;break a;}g=Kv(a,h,c,f);b=k;}}}if(b!=a.jo)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.jt.data[g])break;g=g+1|0;}return (-1);}
function WL(a){var b,c;if(a.j1===null){b=new M;O(b);c=0;while(c<a.jo){Ih(b,Gm(a.jt.data[c]));c=c+1|0;}a.j1=N(b);}return a.j1;}
function Kv(a,b,c,d){var e,f,g;a.g7=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(Hi(e,f)){g=BM(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CD(g[0])&&C4(g[1])?Es(g[0],g[1]):g[0];a.g7=2;}}return e;}
function AKh(a,b){return b instanceof Fc&&!Bq(WL(b),WL(a))?0:1;}
function ANB(a,b){return 1;}
var Xb=F(Fc);
var TN=F(Fc);
var X4=F(CP);
function AGL(a,b,c,d){var e;while(true){e=a.G.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var Pm=F(CP);
function ALB(a,b,c,d){var e;e=a.G.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.G.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FN=F(CP);
function AOU(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.G.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AP2(a,b){a.d=b;a.G.K(b);}
var O3=F(FN);
function AJ4(a,b,c,d){var e;e=a.G.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AL0(a,b){a.d=b;}
function E_(){var a=this;CP.call(a);a.fJ=null;a.dg=0;}
function AXq(a,b,c,d,e){var f=new E_();I5(f,a,b,c,d,e);return f;}
function I5(a,b,c,d,e,f){Dd(a,c,d,e);a.fJ=b;a.dg=f;}
function ARi(a,b,c,d){var e,f;e=MQ(d,a.dg);if(!a.G.F(d))return a.d.c(b,c,d);if(e>=a.fJ.el)return a.d.c(b,c,d);f=a.dg;e=e+1|0;Ea(d,f,e);f=a.G.c(b,c,d);if(f>=0){Ea(d,a.dg,0);return f;}f=a.dg;e=e+(-1)|0;Ea(d,f,e);if(e>=a.fJ.eq)return a.d.c(b,c,d);Ea(d,a.dg,0);return (-1);}
var M5=F(E_);
function AJl(a,b,c,d){var e,f,g;e=0;f=a.fJ.el;a:{while(true){g=a.G.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fJ.eq)return (-1);return a.d.c(b,c,d);}
var Rl=F(CP);
function AQG(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.G.c(b,c,d);}
var Qc=F(FN);
function AFZ(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.G.c(b,c,d);return e;}
var US=F(E_);
function AE$(a,b,c,d){var e,f,g;e=MQ(d,a.dg);if(!a.G.F(d))return a.d.c(b,c,d);f=a.fJ;if(e>=f.el){Ea(d,a.dg,0);return a.d.c(b,c,d);}if(e<f.eq){Ea(d,a.dg,e+1|0);g=a.G.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){Ea(d,a.dg,0);return g;}Ea(d,a.dg,e+1|0);g=a.G.c(b,c,d);}return g;}
var Rn=F(D0);
function AQ6(a,b,c,d){var e;e=d.v;if(e>b)return a.d.cm(b,e,c,d);return a.d.c(b,c,d);}
function AO6(a,b,c,d){var e;e=d.v;if(a.d.cm(b,e,c,d)>=0)return b;return (-1);}
function N$(){D0.call(this);this.j9=null;}
function AMQ(a,b,c,d){var e,f;e=d.v;f=UU(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cm(b,e,c,d);return a.d.c(b,c,d);}
function AEs(a,b,c,d){var e,f,g,h;e=d.v;f=a.d.ch(b,c,d);if(f<0)return (-1);g=UU(a,f,e,c);if(g>=0)e=g;g=Ba(f,a.d.cm(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.j9.g_(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function UU(a,b,c,d){while(true){if(b>=c)return (-1);if(a.j9.g_(L(d,b)))break;b=b+1|0;}return b;}
var EK=F();
var AXr=null;var AXs=null;function O6(b){var c;if(!(b&1)){c=AXs;if(c!==null)return c;c=new Vi;AXs=c;return c;}c=AXr;if(c!==null)return c;c=new Vh;AXr=c;return c;}
var X5=F(C2);
function AFa(a,b,c,d){var e;a:{while(true){if((b+a.Y.bW()|0)>d.v)break a;e=a.Y.bq(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Wf=F(Ex);
function ALz(a,b,c,d){var e;if((b+a.Y.bW()|0)<=d.v){e=a.Y.bq(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var OR=F(E2);
function AOr(a,b,c,d){var e,f,g,h,i;e=a.i4;f=e.eq;g=e.el;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.Y.bW()|0)>d.v)break a;i=a.Y.bq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.Y.bW()|0)>d.v){d.de=1;return (-1);}i=a.Y.bq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var P8=F(C2);
function AMI(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.Y.bW()|0)<=d.v){e=a.Y.bq(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var T2=F(Ex);
function AFi(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.G.c(b,c,d);}
var QW=F(E2);
function AOI(a,b,c,d){var e,f,g,h,i,j;e=a.i4;f=e.eq;g=e.el;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.Y.bW()|0)<=d.v){i=a.Y.bq(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.Y.bW()|0)>d.v){d.de=1;return (-1);}j=a.Y.bq(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Kn=F(Bz);
function AKB(a,b,c,d){if(b&&!(d.e6&&b==d.cF))return (-1);return a.d.c(b,c,d);}
function AJB(a,b){return 0;}
function ZQ(){Bz.call(this);this.tp=0;}
function APj(a){var b=new ZQ();AJX(b,a);return b;}
function AJX(a,b){BL(a);a.tp=b;}
function AFE(a,b,c,d){var e,f,g;e=b<d.v?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.iy?0:d.cF;return (e!=32&&!Qf(a,e,b,g,c)?0:1)^(f!=32&&!Qf(a,f,b-1|0,g,c)?0:1)^a.tp?(-1):a.d.c(b,c,d);}
function AFN(a,b){return 0;}
function Qf(a,b,c,d,e){var f;if(!Jp(b)&&b!=95){a:{if(Ct(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(Jp(f))return 0;if(Ct(f)!=6)return 1;}}return 1;}return 0;}
var N6=F(Bz);
function AJV(a,b,c,d){if(b!=d.hf)return (-1);return a.d.c(b,c,d);}
function ARd(a,b){return 0;}
function WX(){Bz.call(this);this.fP=0;}
function ATc(a){var b=new WX();AC8(b,a);return b;}
function AC8(a,b){BL(a);a.fP=b;}
function ANl(a,b,c,d){var e,f,g;e=!d.e6?I(c):d.v;if(b>=e){BH(d,a.fP,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BH(d,a.fP,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BH(d,a.fP,0);return a.d.c(b,c,d);}
function AGA(a,b){var c;c=!Dm(b,a.fP)?0:1;BH(b,a.fP,(-1));return c;}
var WG=F(Bz);
function AMm(a,b,c,d){if(b<(d.iy?I(c):d.v))return (-1);d.de=1;d.xf=1;return a.d.c(b,c,d);}
function AEf(a,b){return 0;}
function Nf(){Bz.call(this);this.qC=null;}
function AGr(a,b,c,d){a:{if(b!=d.v){if(!b)break a;if(d.e6&&b==d.cF)break a;if(a.qC.r2(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AIy(a,b){return 0;}
var ADo=F(BQ);
function ATw(){var a=new ADo();AL_(a);return a;}
function AL_(a){BL(a);}
function AQM(a,b,c,d){var e,f,g,h;e=d.v;f=b+1|0;if(f>e){d.de=1;return (-1);}g=L(c,b);if(CD(g)){h=b+2|0;if(h<=e&&Hi(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AFR(a,b){a.d=b;}
function AL6(a){return (-2147483602);}
function AFQ(a,b){return 1;}
function Zg(){BQ.call(this);this.kE=null;}
function AS9(a){var b=new Zg();AGy(b,a);return b;}
function AGy(a,b){BL(a);a.kE=b;}
function AMc(a,b,c,d){var e,f,g,h;e=d.v;f=b+1|0;if(f>e){d.de=1;return (-1);}g=L(c,b);if(CD(g)){b=b+2|0;if(b<=e){h=L(c,f);if(Hi(g,h))return a.kE.g_(Es(g,h))?(-1):a.d.c(b,c,d);}}return a.kE.g_(g)?(-1):a.d.c(f,c,d);}
function AOb(a,b){a.d=b;}
function AEc(a){return (-2147483602);}
function AQW(a,b){return 1;}
function ADf(){Bz.call(this);this.gX=0;}
function ASE(a){var b=new ADf();AIs(b,a);return b;}
function AIs(a,b){BL(a);a.gX=b;}
function AKl(a,b,c,d){var e;e=!d.e6?I(c):d.v;if(b>=e){BH(d,a.gX,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BH(d,a.gX,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AIq(a,b){var c;c=!Dm(b,a.gX)?0:1;BH(b,a.gX,(-1));return c;}
function ABu(){Bz.call(this);this.g5=0;}
function ASp(a){var b=new ABu();AIV(b,a);return b;}
function AIV(a,b){BL(a);a.g5=b;}
function AMk(a,b,c,d){if((!d.e6?I(c)-b|0:d.v-b|0)<=0){BH(d,a.g5,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BH(d,a.g5,1);return a.d.c(b+1|0,c,d);}
function AIf(a,b){var c;c=!Dm(b,a.g5)?0:1;BH(b,a.g5,(-1));return c;}
function Yf(){Bz.call(this);this.fl=0;}
function ARJ(a){var b=new Yf();ARk(b,a);return b;}
function ARk(a,b){BL(a);a.fl=b;}
function AJp(a,b,c,d){var e,f,g;e=!d.e6?I(c)-b|0:d.v-b|0;if(!e){BH(d,a.fl,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BH(d,a.fl,0);return a.d.c(b,c,d);case 13:if(g!=10){BH(d,a.fl,0);return a.d.c(b,c,d);}BH(d,a.fl,0);return a.d.c(b,c,d);default:}return (-1);}
function AGF(a,b){var c;c=!Dm(b,a.fl)?0:1;BH(b,a.fl,(-1));return c;}
function G1(){var a=this;BQ.call(a);a.mD=0;a.gl=0;}
function ATE(a,b){var c=new G1();OI(c,a,b);return c;}
function OI(a,b,c){BL(a);a.mD=b;a.gl=c;}
function AFc(a,b,c,d){var e,f,g,h;e=F6(a,d);if(e!==null&&(b+I(e)|0)<=d.v){f=0;while(true){if(f>=I(e)){BH(d,a.gl,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&Ht(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ANv(a,b){a.d=b;}
function F6(a,b){var c,d;c=a.mD;d=Fz(b,c);c=Io(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.kG)?B$(b.kG,d,c):null;}
function ANS(a,b){var c;c=!Dm(b,a.gl)?0:1;BH(b,a.gl,(-1));return c;}
var ADk=F(G1);
function ARQ(a,b){var c=new ADk();APT(c,a,b);return c;}
function APT(a,b,c){OI(a,b,c);}
function AGK(a,b,c,d){var e,f;e=F6(a,d);if(e!==null&&(b+I(e)|0)<=d.v){f=!Ug(c,e,b)?(-1):I(e);if(f<0)return (-1);BH(d,a.gl,f);return a.d.c(b+f|0,c,d);}return (-1);}
function API(a,b,c,d){var e,f;e=F6(a,d);f=d.cF;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=ZP(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AE1(a,b,c,d,e){var f,g;f=F6(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Px(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ALs(a,b){return 1;}
var AAA=F(G1);
function ASq(a,b){var c=new AAA();AIp(c,a,b);return c;}
function AIp(a,b,c){OI(a,b,c);}
function AKU(a,b,c,d){var e,f;e=F6(a,d);if(e!==null&&(b+I(e)|0)<=d.v){f=0;while(true){if(f>=I(e)){BH(d,a.gl,I(e));return a.d.c(b+I(e)|0,c,d);}if(EV(Ew(L(e,f)))!=EV(Ew(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var N0=F(Ge);
function AH7(a,b,c,d,e){MW(a,b,c,d,e);return a;}
function AFI(a,b,c,d){W3(a,b,c,d);return a;}
function AF7(a,b){Jv(a,b);}
function AO9(a,b,c){Xj(a,b,c);return a;}
function Rv(){var a=this;BU.call(a);a.co=null;a.j3=null;a.kN=null;}
function AG7(a,b,c){return !Kl(a,c,b)?(-1):a.bG;}
function AFz(a,b,c,d){var e,f,g;e=d.v;while(true){if(b>e)return (-1);f=L(a.co,a.bG-1|0);a:{while(true){g=a.bG;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&Kl(a,c,b))break;b=b+SG(a.j3,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bG|0,c,d)>=0)break;b=b+1|0;}return b;}
function AIv(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.co,0);g=(I(d)-c|0)-a.bG|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&Kl(a,d,c))break;c=c-SG(a.kN,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bG|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AI1(a,b){var c;if(b instanceof Ej)return b.c$!=L(a.co,0)?0:1;if(b instanceof Ed)return Mk(b,0,B$(a.co,0,1))<=0?0:1;if(!(b instanceof Dz)){if(!(b instanceof DT))return 1;return I(a.co)>1&&b.fv==Es(L(a.co,0),L(a.co,1))?1:0;}a:{b:{b=b;if(!b.k(L(a.co,0))){if(I(a.co)<=1)break b;if(!b.k(Es(L(a.co,0),L(a.co,1))))break b;}c=1;break a;}c=0;}return c;}
function Kl(a,b,c){var d;d=0;while(d<a.bG){if(L(b,d+c|0)!=L(a.co,d))return 0;d=d+1|0;}return 1;}
function Ye(){BU.call(this);this.iC=null;}
function ATH(a){var b=new Ye();APq(b,a);return b;}
function APq(a,b){var c,d,e;Dy(a);c=new M;O(c);d=0;while(true){e=BG(d,b.L);if(e>=0){a.iC=N(c);a.bG=c.L;return;}if(d<0)break;if(e>=0)break;BA(c,EV(Ew(b.A.data[d])));d=d+1|0;}b=new Bw;V(b);J(b);}
function AK2(a,b,c){var d;d=0;while(true){if(d>=I(a.iC))return I(a.iC);if(L(a.iC,d)!=EV(Ew(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function M_(){BU.call(this);this.gU=null;}
function AOt(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.gU))return I(a.gU);e=L(a.gU,d);f=b+d|0;if(e!=L(c,f)&&Ht(L(a.gU,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var G0=F();
var AXt=null;var AXu=null;var AXp=null;function AN3(){AN3=Bl(G0);AHq();}
function AHq(){AXt=ATm();AXu=ASx();AXp=H($rt_arraycls(C),[H(C,[B(393),ATF()]),H(C,[B(394),ARG()]),H(C,[B(395),ATj()]),H(C,[B(396),ATq()]),H(C,[B(397),AXu]),H(C,[B(398),ASH()]),H(C,[B(399),ASv()]),H(C,[B(400),ARU()]),H(C,[B(401),ARP()]),H(C,[B(402),AR1()]),H(C,[B(403),ASc()]),H(C,[B(404),ARY()]),H(C,[B(405),AS2()]),H(C,[B(406),ARA()]),H(C,[B(407),ATn()]),H(C,[B(408),ASb()]),H(C,[B(409),ASF()]),H(C,[B(410),AR_()]),H(C,[B(411),ASG()]),H(C,[B(412),AR4()]),H(C,[B(413),ATv()]),H(C,[B(414),AR7()]),H(C,[B(415),ASL()]),
H(C,[B(416),ATh()]),H(C,[B(417),ATd()]),H(C,[B(418),ATr()]),H(C,[B(419),AR3()]),H(C,[B(420),AS7()]),H(C,[B(421),AXt]),H(C,[B(422),ASP()]),H(C,[B(423),ARV()]),H(C,[B(424),AXt]),H(C,[B(425),ARx()]),H(C,[B(426),AXu]),H(C,[B(427),ASk()]),H(C,[B(428),P(0,127)]),H(C,[B(429),P(128,255)]),H(C,[B(430),P(256,383)]),H(C,[B(431),P(384,591)]),H(C,[B(432),P(592,687)]),H(C,[B(433),P(688,767)]),H(C,[B(434),P(768,879)]),H(C,[B(435),P(880,1023)]),H(C,[B(436),P(1024,1279)]),H(C,[B(437),P(1280,1327)]),H(C,[B(438),P(1328,1423)]),
H(C,[B(439),P(1424,1535)]),H(C,[B(440),P(1536,1791)]),H(C,[B(441),P(1792,1871)]),H(C,[B(442),P(1872,1919)]),H(C,[B(443),P(1920,1983)]),H(C,[B(444),P(2304,2431)]),H(C,[B(445),P(2432,2559)]),H(C,[B(446),P(2560,2687)]),H(C,[B(447),P(2688,2815)]),H(C,[B(448),P(2816,2943)]),H(C,[B(449),P(2944,3071)]),H(C,[B(450),P(3072,3199)]),H(C,[B(451),P(3200,3327)]),H(C,[B(452),P(3328,3455)]),H(C,[B(453),P(3456,3583)]),H(C,[B(454),P(3584,3711)]),H(C,[B(455),P(3712,3839)]),H(C,[B(456),P(3840,4095)]),H(C,[B(457),P(4096,4255)]),
H(C,[B(458),P(4256,4351)]),H(C,[B(459),P(4352,4607)]),H(C,[B(460),P(4608,4991)]),H(C,[B(461),P(4992,5023)]),H(C,[B(462),P(5024,5119)]),H(C,[B(463),P(5120,5759)]),H(C,[B(464),P(5760,5791)]),H(C,[B(465),P(5792,5887)]),H(C,[B(466),P(5888,5919)]),H(C,[B(467),P(5920,5951)]),H(C,[B(468),P(5952,5983)]),H(C,[B(469),P(5984,6015)]),H(C,[B(470),P(6016,6143)]),H(C,[B(471),P(6144,6319)]),H(C,[B(472),P(6400,6479)]),H(C,[B(473),P(6480,6527)]),H(C,[B(474),P(6528,6623)]),H(C,[B(475),P(6624,6655)]),H(C,[B(476),P(6656,6687)]),
H(C,[B(477),P(7424,7551)]),H(C,[B(478),P(7552,7615)]),H(C,[B(479),P(7616,7679)]),H(C,[B(480),P(7680,7935)]),H(C,[B(481),P(7936,8191)]),H(C,[B(482),P(8192,8303)]),H(C,[B(483),P(8304,8351)]),H(C,[B(484),P(8352,8399)]),H(C,[B(485),P(8400,8447)]),H(C,[B(486),P(8448,8527)]),H(C,[B(487),P(8528,8591)]),H(C,[B(488),P(8592,8703)]),H(C,[B(489),P(8704,8959)]),H(C,[B(490),P(8960,9215)]),H(C,[B(491),P(9216,9279)]),H(C,[B(492),P(9280,9311)]),H(C,[B(493),P(9312,9471)]),H(C,[B(494),P(9472,9599)]),H(C,[B(495),P(9600,9631)]),
H(C,[B(496),P(9632,9727)]),H(C,[B(497),P(9728,9983)]),H(C,[B(498),P(9984,10175)]),H(C,[B(499),P(10176,10223)]),H(C,[B(500),P(10224,10239)]),H(C,[B(501),P(10240,10495)]),H(C,[B(502),P(10496,10623)]),H(C,[B(503),P(10624,10751)]),H(C,[B(504),P(10752,11007)]),H(C,[B(505),P(11008,11263)]),H(C,[B(506),P(11264,11359)]),H(C,[B(507),P(11392,11519)]),H(C,[B(508),P(11520,11567)]),H(C,[B(509),P(11568,11647)]),H(C,[B(510),P(11648,11743)]),H(C,[B(511),P(11776,11903)]),H(C,[B(512),P(11904,12031)]),H(C,[B(513),P(12032,12255)]),
H(C,[B(514),P(12272,12287)]),H(C,[B(515),P(12288,12351)]),H(C,[B(516),P(12352,12447)]),H(C,[B(517),P(12448,12543)]),H(C,[B(518),P(12544,12591)]),H(C,[B(519),P(12592,12687)]),H(C,[B(520),P(12688,12703)]),H(C,[B(521),P(12704,12735)]),H(C,[B(522),P(12736,12783)]),H(C,[B(523),P(12784,12799)]),H(C,[B(524),P(12800,13055)]),H(C,[B(525),P(13056,13311)]),H(C,[B(526),P(13312,19893)]),H(C,[B(527),P(19904,19967)]),H(C,[B(528),P(19968,40959)]),H(C,[B(529),P(40960,42127)]),H(C,[B(530),P(42128,42191)]),H(C,[B(531),P(42752,
42783)]),H(C,[B(532),P(43008,43055)]),H(C,[B(533),P(44032,55203)]),H(C,[B(534),P(55296,56191)]),H(C,[B(535),P(56192,56319)]),H(C,[B(536),P(56320,57343)]),H(C,[B(537),P(57344,63743)]),H(C,[B(538),P(63744,64255)]),H(C,[B(539),P(64256,64335)]),H(C,[B(540),P(64336,65023)]),H(C,[B(541),P(65024,65039)]),H(C,[B(542),P(65040,65055)]),H(C,[B(543),P(65056,65071)]),H(C,[B(544),P(65072,65103)]),H(C,[B(545),P(65104,65135)]),H(C,[B(546),P(65136,65279)]),H(C,[B(547),P(65280,65519)]),H(C,[B(548),P(0,1114111)]),H(C,[B(549),
ARZ()]),H(C,[B(550),BK(0,1)]),H(C,[B(551),IK(62,1)]),H(C,[B(552),BK(1,1)]),H(C,[B(553),BK(2,1)]),H(C,[B(554),BK(3,0)]),H(C,[B(555),BK(4,0)]),H(C,[B(556),BK(5,1)]),H(C,[B(557),IK(448,1)]),H(C,[B(558),BK(6,1)]),H(C,[B(559),BK(7,0)]),H(C,[B(560),BK(8,1)]),H(C,[B(561),IK(3584,1)]),H(C,[B(562),BK(9,1)]),H(C,[B(563),BK(10,1)]),H(C,[B(564),BK(11,1)]),H(C,[B(565),IK(28672,0)]),H(C,[B(566),BK(12,0)]),H(C,[B(567),BK(13,0)]),H(C,[B(568),BK(14,0)]),H(C,[B(569),ASr(983040,1,1)]),H(C,[B(570),BK(15,0)]),H(C,[B(571),BK(16,
1)]),H(C,[B(572),BK(18,1)]),H(C,[B(573),ASD(19,0,1)]),H(C,[B(574),IK(1643118592,1)]),H(C,[B(575),BK(20,0)]),H(C,[B(576),BK(21,0)]),H(C,[B(577),BK(22,0)]),H(C,[B(578),BK(23,0)]),H(C,[B(579),BK(24,1)]),H(C,[B(580),IK(2113929216,1)]),H(C,[B(581),BK(25,1)]),H(C,[B(582),BK(26,0)]),H(C,[B(583),BK(27,0)]),H(C,[B(584),BK(28,1)]),H(C,[B(585),BK(29,0)]),H(C,[B(586),BK(30,0)])]);}
function Ms(){BU.call(this);this.p6=0;}
function AOA(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.p6!=Gx(Gu(Es(e,d)))?(-1):2;}
function KW(){BQ.call(this);this.f2=0;}
function AL$(a){var b=new KW();AF2(b,a);return b;}
function AF2(a,b){BL(a);a.f2=b;}
function AMC(a,b){a.d=b;}
function AGB(a,b,c,d){var e,f;e=b+1|0;if(e>d.v){d.de=1;return (-1);}f=L(c,b);if(b>d.cF&&CD(L(c,b-1|0)))return (-1);if(a.f2!=f)return (-1);return a.d.c(e,c,d);}
function AIZ(a,b,c,d){var e,f,g,h;if(!(c instanceof Bu))return HA(a,b,c,d);e=d.cF;f=d.v;while(true){if(b>=f)return (-1);g=GC(c,a.f2,b);if(g<0)return (-1);if(g>e&&CD(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AHc(a,b,c,d,e){var f,g;if(!(d instanceof Bu))return HN(a,b,c,d,e);f=e.cF;a:{while(true){if(c<b)return (-1);g=FY(d,a.f2,c);if(g<0)break a;if(g<b)break a;if(g>f&&CD(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AEZ(a,b){if(b instanceof Ej)return 0;if(b instanceof Ed)return 0;if(b instanceof Dz)return 0;if(b instanceof DT)return 0;if(b instanceof Lh)return 0;if(!(b instanceof KW))return 1;return b.f2!=a.f2?0:1;}
function APf(a,b){return 1;}
function Lh(){BQ.call(this);this.fF=0;}
function AJt(a){var b=new Lh();AMg(b,a);return b;}
function AMg(a,b){BL(a);a.fF=b;}
function AF6(a,b){a.d=b;}
function AEz(a,b,c,d){var e,f,g,h;e=d.v;f=b+1|0;g=BG(f,e);if(g>0){d.de=1;return (-1);}h=L(c,b);if(g<0&&C4(L(c,f)))return (-1);if(a.fF!=h)return (-1);return a.d.c(f,c,d);}
function AMZ(a,b,c,d){var e,f;if(!(c instanceof Bu))return HA(a,b,c,d);e=d.v;while(true){if(b>=e)return (-1);f=GC(c,a.fF,b);if(f<0)return (-1);b=f+1|0;if(b<e&&C4(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function AOs(a,b,c,d,e){var f,g;if(!(d instanceof Bu))return HN(a,b,c,d,e);f=e.v;a:{while(true){if(c<b)return (-1);g=FY(d,a.fF,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&C4(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AG8(a,b){if(b instanceof Ej)return 0;if(b instanceof Ed)return 0;if(b instanceof Dz)return 0;if(b instanceof DT)return 0;if(b instanceof KW)return 0;if(!(b instanceof Lh))return 1;return b.fF!=a.fF?0:1;}
function AM9(a,b){return 1;}
function DT(){var a=this;BU.call(a);a.jf=0;a.hV=0;a.fv=0;}
function ANT(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.jf==e&&a.hV==d?2:(-1);}
function ALS(a,b,c,d){var e,f;if(!(c instanceof Bu))return HA(a,b,c,d);e=d.v;while(b<e){b=GC(c,a.jf,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.hV==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AF4(a,b,c,d,e){var f;if(!(d instanceof Bu))return HN(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FY(d,a.hV,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.jf==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ANG(a,b){if(b instanceof DT)return b.fv!=a.fv?0:1;if(b instanceof Dz)return b.k(a.fv);if(b instanceof Ej)return 0;if(!(b instanceof Ed))return 1;return 0;}
var Vh=F(EK);
function AGg(a,b){return b!=10?0:1;}
function ANM(a,b,c){return b!=10?0:1;}
var Vi=F(EK);
function AOM(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AQs(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ACl(){var a=this;C.call(a);a.lT=null;a.jv=null;a.gB=0;a.uE=0;}
function AL4(a){var b=new ACl();AJT(b,a);return b;}
function AJT(a,b){var c,d;while(true){c=a.gB;if(b<c)break;a.gB=c<<1|1;}d=c<<1|1;a.gB=d;d=d+1|0;a.lT=BC(d);a.jv=BC(d);a.uE=b;}
function Q0(a,b,c){var d,e,f,g;d=0;e=a.gB;f=b&e;while(true){g=a.lT.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jv.data[f]=c;}
function SG(a,b){var c,d,e,f;c=a.gB;d=b&c;e=0;while(true){f=a.lT.data[d];if(!f)break;if(f==b)return a.jv.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.uE;}
var Yx=F();
var KT=F(X);
function ATm(){var a=new KT();AJm(a);return a;}
function AJm(a){}
function AAJ(a){return Cu(BR(Dn(),9,13),32);}
var JT=F(X);
function ASx(){var a=new JT();APb(a);return a;}
function APb(a){}
function ABo(a){return BR(Dn(),48,57);}
var ACf=F(X);
function ATF(){var a=new ACf();AIH(a);return a;}
function AIH(a){}
function AOd(a){return BR(Dn(),97,122);}
var ACN=F(X);
function ARG(){var a=new ACN();AJ0(a);return a;}
function AJ0(a){}
function APh(a){return BR(Dn(),65,90);}
var ACR=F(X);
function ATj(){var a=new ACR();AFB(a);return a;}
function AFB(a){}
function AHL(a){return BR(Dn(),0,127);}
var KP=F(X);
function ATq(){var a=new KP();AGM(a);return a;}
function AGM(a){}
function Zk(a){return BR(BR(Dn(),97,122),65,90);}
var Lr=F(KP);
function ASH(){var a=new Lr();AJA(a);return a;}
function AJA(a){}
function AAd(a){return BR(Zk(a),48,57);}
var AD2=F(X);
function ASv(){var a=new AD2();ALF(a);return a;}
function ALF(a){}
function AIX(a){return BR(BR(BR(Dn(),33,64),91,96),123,126);}
var Mj=F(Lr);
function ARU(){var a=new Mj();ANq(a);return a;}
function ANq(a){}
function Ya(a){return BR(BR(BR(AAd(a),33,64),91,96),123,126);}
var AAV=F(Mj);
function ARP(){var a=new AAV();AO3(a);return a;}
function AO3(a){}
function ALn(a){return Cu(Ya(a),32);}
var ABg=F(X);
function AR1(){var a=new ABg();AOu(a);return a;}
function AOu(a){}
function AG0(a){return Cu(Cu(Dn(),32),9);}
var ZJ=F(X);
function ASc(){var a=new ZJ();AQg(a);return a;}
function AQg(a){}
function ALk(a){return Cu(BR(Dn(),0,31),127);}
var Zq=F(X);
function ARY(){var a=new Zq();AFM(a);return a;}
function AFM(a){}
function AQv(a){return BR(BR(BR(Dn(),48,57),97,102),65,70);}
var ACU=F(X);
function AS2(){var a=new ACU();AFt(a);return a;}
function AFt(a){}
function AL2(a){var b;b=new SW;b.wt=a;Bn(b);b.I=1;return b;}
var AEb=F(X);
function ARA(){var a=new AEb();ANK(a);return a;}
function ANK(a){}
function AEq(a){var b;b=new MG;b.wE=a;Bn(b);b.I=1;return b;}
var ACm=F(X);
function ATn(){var a=new ACm();AFC(a);return a;}
function AFC(a){}
function AJu(a){var b;b=new RS;b.wd=a;Bn(b);return b;}
var ACa=F(X);
function ASb(){var a=new ACa();ALl(a);return a;}
function ALl(a){}
function ANX(a){var b;b=new RR;b.vY=a;Bn(b);return b;}
var AC$=F(X);
function ASF(){var a=new AC$();AGJ(a);return a;}
function AGJ(a){}
function AGW(a){var b;b=new WO;b.xm=a;Bn(b);HU(b.H,0,2048);b.I=1;return b;}
var YR=F(X);
function AR_(){var a=new YR();AGb(a);return a;}
function AGb(a){}
function AHk(a){var b;b=new OL;b.wR=a;Bn(b);b.I=1;return b;}
var Yu=F(X);
function ASG(){var a=new Yu();AKZ(a);return a;}
function AKZ(a){}
function AQp(a){var b;b=new NV;b.xQ=a;Bn(b);b.I=1;return b;}
var ACt=F(X);
function AR4(){var a=new ACt();ALG(a);return a;}
function ALG(a){}
function AEj(a){var b;b=new Qq;b.wv=a;Bn(b);return b;}
var ACF=F(X);
function ATv(){var a=new ACF();AJa(a);return a;}
function AJa(a){}
function AKp(a){var b;b=new Mz;b.u9=a;Bn(b);b.I=1;return b;}
var Z6=F(X);
function AR7(){var a=new Z6();AE2(a);return a;}
function AE2(a){}
function AHu(a){var b;b=new ME;b.wU=a;Bn(b);b.I=1;return b;}
var ABl=F(X);
function ASL(){var a=new ABl();AGk(a);return a;}
function AGk(a){}
function AIA(a){var b;b=new NE;b.xj=a;Bn(b);b.I=1;return b;}
var ADJ=F(X);
function ATh(){var a=new ADJ();AKv(a);return a;}
function AKv(a){}
function AKr(a){var b;b=new O9;b.xC=a;Bn(b);b.I=1;return b;}
var ACE=F(X);
function ATd(){var a=new ACE();ALY(a);return a;}
function ALY(a){}
function APz(a){var b;b=new Pg;b.wf=a;Bn(b);return b;}
var AAy=F(X);
function ATr(){var a=new AAy();AGd(a);return a;}
function AGd(a){}
function ANg(a){var b;b=new TJ;b.w1=a;Bn(b);return b;}
var Z4=F(X);
function AR3(){var a=new Z4();ANZ(a);return a;}
function ANZ(a){}
function ALV(a){var b;b=new Su;b.vb=a;Bn(b);b.I=1;return b;}
var AD8=F(X);
function AS7(){var a=new AD8();AI6(a);return a;}
function AI6(a){}
function AN9(a){var b;b=new MT;b.x5=a;Bn(b);b.I=1;return b;}
var Jh=F(X);
function ASP(){var a=new Jh();AHC(a);return a;}
function AHC(a){}
function ABi(a){return Cu(BR(BR(BR(Dn(),97,122),65,90),48,57),95);}
var ADa=F(Jh);
function ARV(){var a=new ADa();AJf(a);return a;}
function AJf(a){}
function ALI(a){var b;b=Er(ABi(a),1);b.I=1;return b;}
var AAZ=F(KT);
function ARx(){var a=new AAZ();AP4(a);return a;}
function AP4(a){}
function AFy(a){var b;b=Er(AAJ(a),1);b.I=1;return b;}
var ZZ=F(JT);
function ASk(){var a=new ZZ();AKe(a);return a;}
function AKe(a){}
function AIM(a){var b;b=Er(ABo(a),1);b.I=1;return b;}
function Zw(){var a=this;X.call(a);a.pU=0;a.qx=0;}
function P(a,b){var c=new Zw();AQn(c,a,b);return c;}
function AQn(a,b,c){a.pU=b;a.qx=c;}
function AKH(a){return BR(Dn(),a.pU,a.qx);}
var ZT=F(X);
function ARZ(){var a=new ZT();AQC(a);return a;}
function AQC(a){}
function AQb(a){return BR(BR(Dn(),65279,65279),65520,65533);}
function AAQ(){var a=this;X.call(a);a.lr=0;a.jm=0;a.n4=0;}
function BK(a,b){var c=new AAQ();AGE(c,a,b);return c;}
function ASD(a,b,c){var d=new AAQ();AQo(d,a,b,c);return d;}
function AGE(a,b,c){a.jm=c;a.lr=b;}
function AQo(a,b,c,d){a.n4=d;a.jm=c;a.lr=b;}
function AH_(a){var b;b=ATB(a.lr);if(a.n4)HU(b.H,0,2048);b.I=a.jm;return b;}
function AAW(){var a=this;X.call(a);a.lq=0;a.jx=0;a.mK=0;}
function IK(a,b){var c=new AAW();AHv(c,a,b);return c;}
function ASr(a,b,c){var d=new AAW();AEm(d,a,b,c);return d;}
function AHv(a,b,c){a.jx=c;a.lq=b;}
function AEm(a,b,c,d){a.mK=d;a.jx=c;a.lq=b;}
function AEk(a){var b;b=new RJ;ABX(b,a.lq);if(a.mK)HU(b.H,0,2048);b.I=a.jx;return b;}
var ZD=F();
var Y8=F();
function AAx(b){var c,d,e,f,g,h,i;c=AOh(Gp(b));d=JI(c);e=BC(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+JI(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=M4(c);h=h+1|0;}return e;}
function KC(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Ng(){var a=this;C.call(a);a.oI=0;a.qS=0;a.oW=null;}
function AH9(a,b,c){var d=new Ng();AO2(d,a,b,c);return d;}
function AO2(a,b,c,d){a.oI=b;a.qS=c;a.oW=d;}
function ACz(){var a=this;C.call(a);a.ns=null;a.p3=0;}
function AOh(a){var b=new ACz();AG_(b,a);return b;}
function AG_(a,b){a.ns=b;}
var AAw=F();
function JI(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.ns.data;f=b.p3;b.p3=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Z(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function M4(b){var c,d;c=JI(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function Zc(){C.call(this);this.Fm=null;}
function To(){C.call(this);this.m5=null;}
function ARf(a,b){var c,d,e,f;c=b.data;b=a.m5;d=D6(c[0]);e=FG(c[1]);AA7(b.e.f,d,e);Go(Ck(b),AVg);F1(Ck(b));f=Kp(FC(),b.eK);b=new M;O(b);G(HQ(G(b,B(587)),f),B(222));$rt_globals.console.info($rt_ustr(N(b)));}
function Q3(){C.call(this);this.qv=null;}
function AH8(a,b){KE(a.qv,b);}
function Py(){var a=this;C.call(a);a.xy=null;a.xz=null;a.xA=null;}
function Qe(){var a=this;C.call(a);a.wM=null;a.wL=null;}
function Wi(){var a=this;U.call(a);a.nc=null;a.xs=null;}
function AHS(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cb^Dv(a.nc,c):0;}
function Wg(){var a=this;U.call(a);a.sW=null;a.tG=null;a.w7=null;}
function AEP(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cb^Dv(a.sW,c):0;return a.tG.k(b)&&!d?1:0;}
function Oe(){var a=this;U.call(a);a.hZ=null;a.vf=null;}
function AKw(a,b){return a.bd^Dv(a.hZ,b);}
function AID(a){var b,c,d;b=new M;O(b);c=G$(a.hZ,0);while(c>=0){Ih(b,Gm(c));BA(b,124);c=G$(a.hZ,c+1|0);}d=b.L;if(d>0)V8(b,d-1|0);return N(b);}
function Ok(){var a=this;U.call(a);a.qj=null;a.wC=null;}
function ANW(a,b){return a.qj.k(b);}
function Oi(){var a=this;U.call(a);a.jp=0;a.nS=null;a.kc=null;}
function AOz(a,b){return !(a.jp^Dv(a.kc.E,b))&&!(a.jp^a.kc.dF^a.nS.k(b))?0:1;}
function Oj(){var a=this;U.call(a);a.jw=0;a.ti=null;a.k2=null;}
function AK1(a,b){return !(a.jw^Dv(a.k2.E,b))&&!(a.jw^a.k2.dF^a.ti.k(b))?1:0;}
function On(){var a=this;U.call(a);a.t_=0;a.to=null;a.td=null;a.vD=null;}
function AHp(a,b){return a.t_^(!a.to.k(b)&&!a.td.k(b)?0:1);}
function Oo(){var a=this;U.call(a);a.qu=0;a.qa=null;a.pn=null;a.xX=null;}
function AEd(a,b){return a.qu^(!a.qa.k(b)&&!a.pn.k(b)?0:1)?0:1;}
function Ol(){var a=this;U.call(a);a.o2=null;a.x3=null;}
function AII(a,b){return CY(a.o2,b);}
function Om(){var a=this;U.call(a);a.tC=null;a.vT=null;}
function AK4(a,b){return CY(a.tC,b)?0:1;}
function Op(){var a=this;U.call(a);a.qL=null;a.qe=0;a.st=null;}
function APM(a,b){return !CY(a.qL,b)&&!(a.qe^Dv(a.st.E,b))?0:1;}
function Oq(){var a=this;U.call(a);a.rw=null;a.rK=0;a.q_=null;}
function AGQ(a,b){return !CY(a.rw,b)&&!(a.rK^Dv(a.q_.E,b))?1:0;}
function Od(){var a=this;U.call(a);a.sq=0;a.tg=null;a.tS=null;a.vj=null;}
function ARv(a,b){return !(a.sq^a.tg.k(b))&&!CY(a.tS,b)?0:1;}
function OY(){var a=this;U.call(a);a.tP=0;a.mn=null;a.mL=null;a.vO=null;}
function AIL(a,b){return !(a.tP^a.mn.k(b))&&!CY(a.mL,b)?1:0;}
function Oa(){var a=this;U.call(a);a.oB=null;a.vX=null;}
function AGN(a,b){return CY(a.oB,b);}
function Ob(){var a=this;U.call(a);a.oG=null;a.xT=null;}
function AIo(a,b){return CY(a.oG,b)?0:1;}
function Oh(){var a=this;U.call(a);a.t7=null;a.ro=0;a.u0=null;}
function AJY(a,b){return CY(a.t7,b)&&a.ro^Dv(a.u0.E,b)?1:0;}
function N_(){var a=this;U.call(a);a.r5=null;a.qw=0;a.rm=null;}
function APn(a,b){return CY(a.r5,b)&&a.qw^Dv(a.rm.E,b)?0:1;}
function Of(){var a=this;U.call(a);a.sy=0;a.m_=null;a.qq=null;a.vC=null;}
function AFL(a,b){return a.sy^a.m_.k(b)&&CY(a.qq,b)?1:0;}
function Og(){var a=this;U.call(a);a.r0=0;a.mc=null;a.sp=null;a.v1=null;}
function AM7(a,b){return a.r0^a.mc.k(b)&&CY(a.sp,b)?0:1;}
var LO=F(0);
function Ss(){var a=this;C.call(a);a.vJ=null;a.tj=null;a.io=null;a.cq=null;a.h0=0;a.j7=0;}
function MC(a,b){var c,d,e;c=I(a.io);if(b>=0&&b<=c){Xv(a.cq,null,(-1),(-1));d=a.cq;d.i5=1;d.d3=b;c=d.hf;if(c<0)c=b;d.hf=c;b=a.tj.ch(b,a.io,d);if(b==(-1))a.cq.de=1;if(b>=0){d=a.cq;if(d.ir){e=d.dB.data;if(e[0]==(-1)){c=d.d3;e[0]=c;e[1]=c;}d.hf=I0(d);return 1;}}a.cq.d3=(-1);return 0;}d=new Bw;Bj(d,C5(b));J(d);}
function ADH(a){return OP(a.cq,0);}
function Z0(a){return RX(a.cq,0);}
var C0=F(0);
var AVM=null;var AWo=null;var AVO=null;var AVN=null;var AVQ=null;var AVP=null;var AVS=null;var AVR=null;var AVU=null;var AVT=null;var AVV=null;function ABn(){ABn=Bl(C0);AKW();}
function AKW(){AVM=C3(0);AWo=CL(0,0,0);AVO=S(B(588));AVN=CL(255,255,255);AVQ=CL(166,214,255);AVP=S(B(589));AVS=S(B(590));AVR=S(B(591));AVU=Ft(205,205,205,153);AVT=Ft(255,255,255,0);AVV=S(B(259));}
function Cg(){Cj.call(this);this.kO=null;}
var AXv=null;var AXw=null;var AXx=null;var AXy=null;var AXz=null;var AXA=null;var AXB=null;var AXC=null;var AXD=null;var AXE=null;var AXF=null;var AXG=null;var AXH=null;var AXI=null;var AXJ=null;var AVW=null;function ZR(){ZR=Bl(Cg);AId();}
function DA(a,b,c){var d=new Cg();Wj(d,a,b,c);return d;}
function AJk(a,b,c,d){var e=new Cg();AB0(e,a,b,c,d);return e;}
function Wj(a,b,c,d){ZR();C_(a,b,c);a.kO=Ii(d,null);}
function AB0(a,b,c,d,e){ZR();C_(a,b,c);a.kO=Ii(d,e);}
function AId(){var b;b=new Cg;ABn();Wj(b,B(319),0,AWo);AXv=b;AXw=DA(B(320),1,CL(0,49,191));AXx=DA(B(322),2,S(B(592)));AXy=DA(B(324),3,S(B(593)));AXz=DA(B(326),4,AWo);AXA=DA(B(327),5,S(B(594)));AXB=DA(B(328),6,S(B(339)));AXC=DA(B(330),7,S(B(595)));AXD=DA(B(332),8,S(B(596)));AXE=AJk(B(334),9,AWo,CL(237,235,252));AXF=AJk(B(335),10,S(B(336)),S(B(597)));AXG=DA(B(338),11,S(B(339)));AXH=DA(B(340),12,S(B(341)));AXI=DA(B(342),13,S(B(598)));b=DA(B(343),14,S(B(344)));AXJ=b;AVW=H(Cg,[AXv,AXw,AXx,AXy,AXz,AXA,AXB,AXC,AXD,
AXE,AXF,AXG,AXH,AXI,b]);}
var Du=F(0);
var AV0=null;var AV1=null;var AVX=null;var AVY=null;var AVZ=null;var AWp=null;var AWq=null;var AV2=null;var AV3=null;function ANY(){ANY=Bl(Du);AIx();}
function AIx(){AV0=S(B(257));AV1=S(B(599));AVX=S(B(600));AVY=S(B(601));AVZ=S(B(602));AWp=S(B(257));AWq=S(B(599));AV2=Ft(205,205,205,153);AV3=CL(247,248,250);}
function N2(){C.call(this);this.q4=null;}
function AN8(a,b){Us(a.q4,b);}
var MZ=F(Gq);
function AIc(a,b,c,d){var e,f,g;e=0;f=d.v;a:{while(true){if(b>f){b=e;break a;}g=Fz(d,a.X);Dx(d,a.X,b);e=a.cS.c(b,c,d);if(e>=0)break;Dx(d,a.X,g);b=b+1|0;}}return b;}
function ARg(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fz(e,a.X);Dx(e,a.X,c);f=a.cS.c(c,d,e);if(f>=0)break;Dx(e,a.X,g);c=c+(-1)|0;}}return c;}
function AGz(a){return null;}
var PX=F(Bo);
var W5=F(Bo);
function Vc(){FK.call(this);this.xM=0;}
function PK(){FK.call(this);this.xG=0;}
var XT=F(Bo);
function U5(){var a=this;C.call(a);a.qQ=null;a.sY=null;a.ur=0;a.jH=0;}
function Kr(a,b){return B6(a.qQ)<b?0:1;}
function Tq(){var a=this;C.call(a);a.tw=null;a.tv=null;}
function SC(){var a=this;C.call(a);a.we=null;a.oY=null;}
function SB(){C.call(this);this.u$=null;}
var ACo=F(0);
function Xz(b){return !b?H(Bu,[B(121),B(122),B(603)]):H(Bu,[B(121),B(122),B(603),B(41)]);}
var YF=F();
function ADM(b){var c,d,e,f,g,h,i,j,k,l;c=new VX;c.kP=0;c.gH=BC(16);c.eQ=0;d=Cw(b);HM(c,d);e=0;f=0;while(f<d){g=B2(b,f);h=g.o.data.length;HM(c,h);i=0;while(i<h){j=Np(g,i);k=Mc(j);HM(c,e);HM(c,k);e=e+Mc(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}d=c.kP;if(d&&c.eQ!=d){b=Iu();d=c.kP;e=c.eQ;j=new M;O(j);G(T(G(T(G(j,B(382)),d),B(604)),e),B(605));Bt(b,N(j));}l=c.gH;d=l.data.length;e=c.eQ;if(d!=e)l=L7(l,e);return l;}
function ACG(b){var c,d,e,f,g,h,i,j,k;c=BO(b);d=Q(HZ,c);e=d.data;f=0;while(f<c){a:{g=BO(b);if(g!=(-1)){h=BO(b);i=BO(b);if(i==(-1)){j=new HZ;j.oC=h;e[g]=j;}else{j=new HZ;j.oC=h;j.q3=BC(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].q3.data[k]=BO(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function Or(){C.call(this);this.ws=null;}
function AL1(a,b){var c,d,e,f;c=D6(b.data[0]);b=ADe(c);d=new QA;c=ACG(b);e=ACG(b);d.wz=c;d.wy=e;b=Bv();d=Cq(d);f=new M;O(f);G(G(f,B(606)),d);Bt(b,N(f));}
var ZV=F();
function Rt(){var a=this;C.call(a);a.nC=null;a.nB=0;a.nA=null;}
function Jz(a,b){var c,d,e,f,g,h,i,j,k;c=a.nC;d=a.nB;e=a.nA;if(b<=d){f=Ck(c);g=new XJ;g.mG=c;h=Q(C,1);h.data[0]=e;CO(f,g,B(607),h);}else{i=Ck(c);g=new XK;g.tI=c;j=Q(C,2);k=j.data;k[0]=e;h=BC(1);h.data[0]=250;k[1]=h;CO(i,g,B(608),j);f=Ck(c);g=new XL;g.sf=c;h=Q(C,1);h.data[0]=e;CO(f,g,B(609),h);}}
function U_(){var a=this;C.call(a);a.dB=null;a.jc=null;a.kA=null;a.kG=null;a.n1=0;a.ir=0;a.cF=0;a.v=0;a.d3=0;a.iy=0;a.e6=0;a.de=0;a.xf=0;a.hf=0;a.i5=0;}
function BH(a,b,c){a.jc.data[b]=c;}
function Dm(a,b){return a.jc.data[b];}
function I0(a){return RX(a,0);}
function RX(a,b){RI(a,b);return a.dB.data[(b*2|0)+1|0];}
function Dx(a,b,c){a.dB.data[b*2|0]=c;}
function Jw(a,b,c){a.dB.data[(b*2|0)+1|0]=c;}
function Fz(a,b){return a.dB.data[b*2|0];}
function Io(a,b){return a.dB.data[(b*2|0)+1|0];}
function ACg(a){return OP(a,0);}
function OP(a,b){RI(a,b);return a.dB.data[b*2|0];}
function MQ(a,b){return a.kA.data[b];}
function Ea(a,b,c){a.kA.data[b]=c;}
function RI(a,b){var c;if(!a.ir){c=new DY;V(c);J(c);}if(b>=0&&b<a.n1)return;c=new Bw;Bj(c,C5(b));J(c);}
function Xv(a,b,c,d){a.ir=0;a.i5=2;Hr(a.dB,(-1));Hr(a.jc,(-1));if(b!==null)a.kG=b;if(c>=0){a.cF=c;a.v=d;}a.d3=a.cF;}
function AAh(a){return a.i5;}
function Yp(a){return a.iy;}
function AC4(){var a=this;C.call(a);a.Be=null;a.Bf=null;a.Bd=0.0;}
function VC(){C.call(this);this.nD=null;}
function APY(a){DK(a.nD);}
function VX(){var a=this;C.call(a);a.gH=null;a.kP=0;a.eQ=0;}
function HM(a,b){var c,d;c=a.gH;d=c.data.length;if(d==a.eQ)a.gH=L7(c,d*2|0);c=a.gH.data;d=a.eQ;a.eQ=d+1|0;c[d]=b;}
function N5(){var a=this;C.call(a);a.h1=null;a.gP=0;}
function SW(){U.call(this);this.wt=null;}
function APV(a,b){return Ct(b)!=2?0:1;}
function MG(){U.call(this);this.wE=null;}
function AFw(a,b){return Ct(b)!=1?0:1;}
function RS(){U.call(this);this.wd=null;}
function AFh(a,b){return QT(b);}
function RR(){U.call(this);this.vY=null;}
function AH$(a,b){return 0;}
function WO(){U.call(this);this.xm=null;}
function AJJ(a,b){return !Ct(b)?0:1;}
function OL(){U.call(this);this.wR=null;}
function APZ(a,b){return Ct(b)!=9?0:1;}
function NV(){U.call(this);this.xQ=null;}
function AMw(a,b){return Gh(b);}
function Qq(){U.call(this);this.wv=null;}
function AN2(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Mz(){U.call(this);this.u9=null;}
function AQU(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gh(b);}return b;}
function ME(){U.call(this);this.wU=null;}
function AHb(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gh(b);}return b;}
function NE(){U.call(this);this.xj=null;}
function AP_(a,b){a:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function O9(){U.call(this);this.xC=null;}
function ALh(a,b){return Jp(b);}
function Pg(){U.call(this);this.wf=null;}
function ANt(a,b){return Ph(b);}
function TJ(){U.call(this);this.w1=null;}
function APN(a,b){return Ct(b)!=3?0:1;}
function Su(){U.call(this);this.vb=null;}
function AQD(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Gh(b);}return b;}
function MT(){U.call(this);this.x5=null;}
function AGY(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Gh(b);}return b;}
function L6(){U.call(this);this.kS=0;}
function ATB(a){var b=new L6();ABX(b,a);return b;}
function ABX(a,b){Bn(a);a.kS=b;}
function AMz(a,b){return a.bd^(a.kS!=Ct(b&65535)?0:1);}
var RJ=F(L6);
function AOZ(a,b){return a.bd^(!(a.kS>>Ct(b&65535)&1)?0:1);}
function PE(){C.call(this);this.u3=null;}
function AKO(a){var b,c;b=a.u3;c=b.tw;b=b.tv;c.Fr(b.hU,b.jO,null);}
function VL(){C.call(this);this.ni=null;}
function ANk(a,b){var c,d,e,f;c=a.ni;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.oY;c=Bv();b=Cq(b);e=new M;O(e);G(G(e,B(610)),b);Bt(c,N(e));b=Bv();f=d.length;c=new M;O(c);T(G(c,B(611)),f);Bt(b,N(c));}
function VO(){var a=this;C.call(a);a.sO=null;a.sP=null;}
function AL7(a,b){var c,d;c=a.sO;d=a.sP;b.arrayBuffer().then(Bm(c,"f"),Bm(d,"f"));}
function Tv(){var a=this;C.call(a);a.lY=null;a.lZ=null;}
function AIS(a,b){var c;c=a.lY;Jz(a.lZ,Jy(c,b.size));}
function Ty(){C.call(this);this.t8=null;}
function AEJ(a,b){var c;c=a.t8;Bt(Iu(),$rt_str(b.message));Jz(c,0);}
function Uw(){C.call(this);this.v6=null;}
function AKJ(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function QA(){var a=this;C.call(a);a.wz=null;a.wy=null;}
function HZ(){var a=this;C.call(a);a.oC=0;a.q3=null;}
function XK(){C.call(this);this.tI=null;}
function APd(a,b){var c,d;c=a.tI;if(!c.hB){b=b.data;c.e.f=ABw(D6(b[0]),FG(b[1]));c.hA=1;d=Kp(FC(),c.eK);b=new M;O(b);G(HQ(G(b,B(612)),d),B(222));$rt_globals.console.info($rt_ustr(N(b)));}}
function XL(){C.call(this);this.sf=null;}
function ALA(a,b){var c,d,e,f,g,h;c=b.data;d=a.sf;e=(D6(c[2])).data[0];if(e!=1)HD(d,b);else{d.hB=1;f=D6(c[0]);g=FG(c[1]);b=d.e;b.f=ACp(b.f,f,g,d.hA);Wa(d,AC7(e));Go(Ck(d),AVg);F1(Ck(d));h=Kp(FC(),d.eK);b=new M;O(b);G(HQ(G(b,B(613)),h),B(222));$rt_globals.console.info($rt_ustr(N(b)));WF(d);J4(d);}}
function XJ(){C.call(this);this.mG=null;}
function ARw(a,b){HD(a.mG,b);}
var YY=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["cD",ATY(ALc),"cr",ATX(AF1)],Rw,0,C,[],0,3,0,0,0,M2,0,C,[],3,3,0,0,0,Mu,0,C,[],3,3,0,0,0,Wl,0,C,[M2,Mu],0,3,0,0,0,Zo,0,C,[],4,0,0,0,0,Y9,0,C,[],4,3,0,0,0,Di,0,C,[],3,3,0,0,0,CI,0,C,[],3,3,0,0,0,IO,0,C,[],3,3,0,0,0,Bu,"String",1,C,[Di,CI,IO],0,3,0,EL,["cr",ATX(AF0),"cD",ATY(Bq),"i6",ATX(Lg),"jk",ATY(AIa)],Gr,0,C,[],0,3,0,0,0,EF,0,Gr,[],0,3,0,0,0,Ha,0,EF,[],0,3,0,0,0,AAz,0,Ha,[],0,3,0,0,0,DU,0,C,[Di],1,3,0,0,0,Ff,0,DU,[CI],0,3,0,0,["jk",ATY(AKn)],Ge,0,C,[Di,IO],0,0,0,0,["hp",ATY(Jv),
"cr",ATX(N)],HT,0,C,[],3,3,0,0,0,M,0,Ge,[HT],0,3,0,0,["k7",AT1(AKi),"kj",AT0(AHi),"cr",ATX(DS),"hp",ATY(AKq),"lE",ATZ(AKX)],Ep,0,Ha,[],0,3,0,0,0,AB1,0,Ep,[],0,3,0,0,0,AAn,0,Ep,[],0,3,0,0,0,D1,0,Gr,[],0,3,0,0,0,Bo,0,D1,[],0,3,0,0,0,TH,0,C,[],3,3,0,0,0,Ds,0,C,[],3,3,0,0,0,OK,0,C,[],3,0,0,0,0,Iv,0,C,[TH,Ds,OK],1,3,0,0,["dS",ATX(FM)],Ri,0,Iv,[],0,3,0,0,0,YA,0,C,[],0,3,0,0,0,ADc,0,C,[],4,3,0,0,0,Bc,0,C,[],3,3,0,0,0,TP,0,C,[Bc],0,3,0,0,0,BB,0,C,[],3,3,0,0,0,AA$,0,C,[BB],1,3,0,0,0,YE,0,C,[],3,3,0,0,0,ACQ,0,C,[],3,
3,0,0,0,ACL,0,C,[],3,3,0,0,0,LI,0,C,[],0,3,0,0,0,Zm,0,C,[BB],1,3,0,0,0,BX,0,C,[BB],3,3,0,0,0,TQ,0,C,[BX],0,3,0,0,["bi",ATY(AEe)],TO,0,C,[BX],0,3,0,0,["bi",ATY(APO)],ACI,0,C,[],4,3,0,0,0,Z1,0,C,[],0,3,0,0,0,AD9,0,C,[],4,3,0,0,0,M8,0,C,[BX],0,3,0,0,["bi",ATY(AMj)],V0,0,C,[BB],1,3,0,0,0,YS,0,C,[],0,3,0,0,0]);
$rt_metadata([Ln,0,C,[],4,3,0,0,0,JL,0,C,[BB],3,3,0,0,0,AAf,0,C,[JL],1,3,0,0,["GC",ATY(AQ0),"FW",ATX(AGi)],AAM,0,C,[BB],1,3,0,0,0,FL,0,C,[],3,3,0,0,0,SU,0,C,[FL],0,3,0,0,0,C7,0,C,[CI],0,3,0,0,0,Mo,0,C,[BB],3,3,0,0,0,Sz,0,C,[Mo],3,3,0,0,0,Eh,0,C,[BB],3,3,0,0,0,ADb,0,C,[Sz,Eh],3,3,0,0,0,Gy,0,Bo,[],0,3,0,0,0,NF,0,C,[BX],0,3,0,0,["bi",ATY(ANm)],ABI,0,C,[],4,3,0,0,0,AAK,0,C,[],4,3,0,0,0,Bw,0,Bo,[],0,3,0,0,0,IH,0,Bo,[],0,3,0,0,0,O8,0,C,[Eh],3,3,0,0,0,Q$,0,C,[Eh],3,3,0,0,0,QY,0,C,[Eh],3,3,0,0,0,TB,0,C,[Eh],3,3,0,0,
0,W4,0,C,[Eh],3,3,0,0,0,UM,0,C,[Eh,O8,Q$,QY,TB,W4],3,3,0,0,0,Ot,0,C,[],3,3,0,0,0,YD,0,C,[BB,UM,Ot,JL],1,3,0,0,["Ex",ATZ(AKR),"GI",ATZ(ALe),"yo",ATY(AFm),"C7",AT0(AMo),"Ba",ATY(AP8),"Bk",ATX(AGl),"zI",AT0(AEE)],BD,0,Bo,[],0,3,0,0,0,X3,0,Bo,[],0,3,0,0,0,G9,0,Bw,[],0,3,0,0,0,ZM,0,C,[],0,3,0,0,0,Os,0,C,[],3,3,0,0,0,SI,0,C,[Os],0,3,0,0,0,Cb,0,C,[],3,3,0,0,0,RK,0,C,[Cb],0,3,0,0,0,Bh,0,C,[],3,3,0,0,0,AA5,0,C,[Bh],0,3,0,0,0,AAG,0,C,[BB],1,3,0,0,0,Q2,0,C,[BB],3,3,0,0,0,VE,0,C,[Q2],0,3,0,0,["C9",ATY(AJs)],Vx,0,C,[Bh],
0,3,0,0,0,PW,0,C,[BB],3,3,0,0,0,Vy,0,C,[PW],0,3,0,0,["ul",ATZ(AHB)],ADj,0,C,[BB],1,3,0,0,0,Cl,0,C,[BB],3,3,0,0,0,Vv,0,C,[Cl],0,3,0,0,["b_",ATY(ANu)],KY,0,C,[],3,3,0,0,0,EA,0,C,[KY],1,3,0,0,0,Ek,0,C,[],3,3,0,0,0,Xr,0,C,[KY],3,3,0,0,0,M1,0,C,[Xr],3,3,0,0,0,OU,0,EA,[Ek,Di,M1],0,3,0,0,0]);
$rt_metadata([Vw,0,C,[BX],0,3,0,0,["bi",ATY(AOH)],Pf,0,C,[],0,3,0,0,0,Le,0,C,[],1,3,0,0,0,ACP,0,Le,[],0,3,0,0,0,CC,0,C,[Ds],1,3,0,0,["cK",ATY(AQH)],I4,0,C,[FL],0,3,0,0,["lO",ATZ(Jq)],ZS,0,C,[],0,3,0,0,0,Wq,0,C,[Cl],0,3,0,0,["b_",ATY(AMW)],Wr,0,C,[Cl],0,3,0,0,["b_",ATY(AM_)],Ws,0,C,[Cl],0,3,0,0,["b_",ATY(ALv)],Wt,0,C,[Cl],0,3,0,0,["b_",ATY(AKT)],Wu,0,C,[Cl],0,3,0,0,["b_",ATY(ALi)],Wv,0,C,[Cl],0,3,0,0,["b_",ATY(ANI)],Ww,0,C,[Cl],0,3,0,0,["b_",ATY(AI8)],Wx,0,C,[Cl],0,3,0,0,["b_",ATY(AQ7)],Wy,0,C,[Cl],0,3,0,0,["b_",
ATY(AIk)],Wz,0,C,[Cl],0,3,0,0,["b_",ATY(AOQ)],XN,0,C,[Cl],0,3,0,0,["b_",ATY(AQI)],XO,0,C,[Cl],0,3,0,0,["b_",ATY(AK8)],XP,0,C,[Cl],0,3,0,0,["b_",ATY(ALy)],XQ,0,C,[Cl],0,3,0,0,["b_",ATY(ANo)],Ua,0,C,[],3,3,0,0,0,Un,0,C,[Ua],0,3,0,0,0,Ul,0,C,[Cl],0,3,0,0,["b_",ATY(AJ$)],Mp,0,C,[],0,3,0,0,0,ADw,0,C,[],0,3,0,0,0,IL,0,C,[],3,3,0,0,0,Cs,0,C,[IL],3,3,0,0,0,Cx,0,C,[],3,3,0,0,["bR",ATY(AKd),"b5",ATZ(APP),"cL",ATZ(AE6),"cp",AT0(ANH)],DE,0,C,[],3,3,0,0,0,Ev,0,C,[IL],3,3,0,0,0,EH,0,C,[],3,3,0,0,0,EM,0,C,[],3,3,0,0,0,E8,
0,C,[EM],3,3,0,0,0,P5,0,C,[Ds],0,3,0,0,0,Bi,0,C,[],0,3,0,0,["cr",ATX(X8)],WC,0,C,[],0,3,0,0,0,ACO,0,C,[],0,3,0,0,0,Y6,0,C,[],3,3,0,0,0,PV,0,C,[],0,3,0,0,0,LA,0,C,[],0,3,0,0,0,D9,0,LA,[],0,3,0,0,0,V_,0,D9,[],0,3,0,0,0,Ez,0,D9,[],0,3,0,0,0,QE,0,D9,[],0,3,0,0,0,ACu,0,Ez,[],0,3,0,0,0,AB5,0,Ez,[],0,3,0,0,0,Zn,0,Ez,[],0,3,0,0,0,RV,0,C,[BB],3,3,0,0,0,AD7,0,C,[RV],3,3,0,0,0]);
$rt_metadata([PS,0,C,[Ds],0,3,0,0,0,PU,0,C,[],0,3,0,0,0,Cj,0,C,[CI,Di],1,3,0,0,0,GI,0,Cj,[],12,3,0,Y3,0,L9,0,C,[],3,3,0,0,0,Th,0,C,[L9],3,3,0,0,0,UC,0,C,[],3,3,0,0,0,Gj,0,C,[Th,UC],1,3,0,0,0,Jj,0,Gj,[],0,3,0,0,0,AAk,0,Jj,[],0,3,0,0,0,F9,0,Gj,[],1,3,0,0,0,Lm,0,F9,[],0,3,0,0,["jN",AT0(AJ2)],DV,0,Cj,[],12,3,0,AP1,0,Ja,0,C,[CI],1,3,0,0,0,Mb,0,Ja,[],0,3,0,Z$,0,Km,0,C,[],32,0,0,YC,0,OZ,0,C,[],0,3,0,0,0,GM,0,Cj,[],12,0,0,ABv,0,Gd,0,Cj,[],12,0,0,ABx,0,VF,0,D1,[],0,3,0,0,0,ACH,0,BD,[],0,3,0,0,0,Ma,0,C,[BB],3,3,0,0,0,Xo,
0,C,[Ma],0,3,0,0,["bi",ATY(AOj)],Xp,0,C,[Ma],0,3,0,0,["bi",ATY(AFT)],GX,0,C,[],1,3,0,0,0,Sc,0,C,[],3,3,0,0,0,K5,0,GX,[CI,HT,IO,Sc],1,3,0,0,0,JN,0,GX,[CI],1,3,0,0,0,HC,0,C,[],0,3,0,G6,0,M7,0,CC,[],0,3,0,0,["bK",ATX(AK3),"cj",ATZ(AJv)],ADR,0,C,[],0,3,0,0,0,AA2,0,C,[BB],1,3,0,0,0,J0,0,K5,[],1,0,0,0,0,AAL,0,J0,[],0,0,0,0,0,KR,0,C,[],1,3,0,0,0,LG,0,C,[],0,3,0,0,0,YQ,0,C,[],0,3,0,0,0,Ll,0,C,[BB],3,3,0,0,0,Ne,0,C,[Ll],0,3,0,0,["bi",ATY(AH4)],Nd,0,C,[Ll],0,3,0,0,["bi",ATY(AMn)],Nc,0,C,[BX],0,3,0,0,["bi",ATY(AM6)],Nb,
0,C,[BX],0,3,0,0,["bi",ATY(AGt)],S$,0,C,[Cb],0,3,0,0,["b$",ATY(AMF)],S9,0,C,[Cb],0,3,0,0,["b$",ATY(AFx)],S8,0,C,[Cb],0,3,0,0,["b$",ATY(AJb)],S7,0,C,[Cb],0,3,0,0,["b$",ATY(AI$)],S6,0,C,[Cb],0,3,0,0,["b$",ATY(AJN)],S5,0,C,[Cb],0,3,0,0,["b$",ATY(AFD)],S4,0,C,[Cb],0,3,0,0,["b$",ATY(AHd)],S3,0,C,[Cb],0,3,0,0,["b$",ATY(AMV)]]);
$rt_metadata([S2,0,C,[Cb],0,3,0,0,["b$",ATY(AQq)],S1,0,C,[Cb],0,3,0,0,["b$",ATY(ARh)],QC,0,C,[Cb],0,3,0,0,["b$",ATY(AKG)],Qz,0,C,[Cb],0,3,0,0,["b$",ATY(AEr)],QB,0,C,[Cb],0,3,0,0,["b$",ATY(AH0)],Qx,0,C,[Cb],0,3,0,0,["b$",ATY(AKY)],Qy,0,C,[Cb],0,3,0,0,["b$",ATY(AOD)],Qv,0,C,[Cb],0,3,0,0,["b$",ATY(AEg)],G5,0,C,[],0,3,0,0,0,ON,0,G5,[],0,3,0,0,0,ACX,0,C,[],0,3,0,0,0,Ml,0,G5,[],0,3,0,0,0,Uc,0,C,[BB],3,3,0,0,0,Ny,0,C,[Uc],0,3,0,0,["Ha",ATY(AKx)],UW,0,C,[Bc],0,3,0,0,["n",ATY(Wb)],WT,0,JN,[],0,0,0,0,0,ABR,0,C,[BB],1,
3,0,0,0,Kj,0,C,[],4,3,0,AJL,0,V4,0,C,[],3,3,0,0,0,SQ,0,C,[V4],0,3,0,0,["cr",ATX(AGZ)],Uv,0,C,[],3,3,0,0,0,K3,"JsFileHandle",5,C,[Uv],0,3,0,0,["cr",ATX(AJ8)],KN,0,KR,[],1,3,0,0,0,Pc,0,KN,[],0,3,0,0,0,In,0,D1,[],0,3,0,0,0,CQ,0,CC,[],1,3,0,0,["cj",ATZ(GR)],Kd,0,C,[],3,3,0,0,0,K_,0,C,[],3,3,0,0,0,Xy,0,CQ,[Cx,Kd,K_,DE,EH,E8],0,3,0,0,["gg",ATZ(AJg),"cK",ATY(AHV),"bK",ATX(APU),"ue",ATX(AIW),"uG",ATX(AN7),"sr",ATY(AOO),"cj",ATZ(ANJ),"s9",ATX(AOC),"oo",ATX(AAb),"pT",ATX(AO_),"bR",ATY(AK_),"cp",AT0(AK7),"b5",ATZ(AFq),
"cL",ATZ(AIl),"cW",AT0(AM8),"dj",ATX(AKN)],Ku,0,CQ,[Kd],0,3,0,0,["cK",ATY(AGC),"bK",ATX(AJr),"kb",ATX(ANi),"cj",ATZ(ALT),"qG",ATZ(ZY),"s9",ATX(ALR),"oo",ATX(AB2),"pT",ATX(AKS)],YH,0,CC,[],0,3,0,0,["cK",ATY(AEQ),"bK",ATX(AHQ),"cj",ATZ(AOi)],En,0,C,[],3,3,0,0,0,V7,0,CQ,[Cx,En],0,3,0,0,["gh",ATZ(APK),"cj",ATZ(AHj),"bK",ATX(AH5),"bR",ATY(ANE),"b5",ATZ(AIb),"cL",ATZ(AFY),"cp",AT0(AMY)],Xh,0,CQ,[En],0,3,0,0,["gh",ATZ(AIe),"bK",ATX(ANf),"cj",ATZ(AGx),"cK",ATY(AOo)],X2,0,CQ,[Cx],0,3,0,0,["bR",ATY(AKd),"b5",ATZ(APP),
"cL",ATZ(AE6),"cp",AT0(ANH),"bK",ATX(ANO),"cK",ATY(AGX)],O4,0,CC,[],0,3,0,0,["bK",ATX(AE9),"cj",ATZ(APt)],Dc,0,CC,[],0,3,0,0,["bK",ATX(Sb),"cj",ATZ(SJ)],QQ,"SelectFileTest",6,Dc,[],0,3,0,0,0,ADK,"WorkerTest",7,Dc,[],0,3,0,0,0,WN,"RenderTexture",6,Dc,[],0,3,0,0,["cK",ATY(AKo),"bK",ATX(AEK),"cj",ATZ(ANd)],Se,"ScissorDemo",6,Dc,[],0,3,0,0,["bK",ATX(AQV),"cj",ATZ(AGp)],OG,0,CC,[],0,3,0,0,["bK",ATX(AQY),"cj",ATZ(AIB),"cK",ATY(AG3)],Ir,"ClipboardTest",6,Dc,[Cx],0,3,0,0,["bR",ATY(AKd),"b5",ATZ(APP),"cL",ATZ(AE6),"cp",
AT0(AOc)],P1,0,CC,[],0,3,0,0,["bK",ATX(AQP),"cj",ATZ(ALp)],Wn,0,CQ,[En],0,3,0,0,["gh",ATZ(AJz),"bK",ATX(ARc),"cj",ATZ(ANw),"cK",ATY(AKk)],Rb,0,Ku,[],0,3,0,0,["kb",ATX(AJE),"qG",ATZ(ALt)],He,0,C,[],3,3,0,0,0,Mg,0,C,[He,Di],0,3,0,0,0,Jm,0,Mg,[],0,0,0,0,0,ADt,0,C,[],0,3,0,0,0]);
$rt_metadata([ACj,0,C,[Cx,DE],0,0,0,0,["bR",ATY(ANQ),"cp",AT0(ARn),"b5",ATZ(AFU),"cL",ATZ(AMl),"cW",AT0(AKP)],HL,0,C,[],3,3,0,0,["uR",ATX(AGS),"sg",ATX(ARu)],AAq,0,C,[HL,Cx,K_],0,3,0,0,["sg",ATX(AHJ),"uR",ATX(AGq),"ue",ATX(XX),"uG",ATX(WE),"sr",ATY(XY),"cL",ATZ(UR),"b5",ATZ(UZ),"cp",AT0(QD),"bR",ATY(Pi),"hW",ATY(AMA)],HJ,0,C,[],3,3,0,0,0,QO,0,C,[HJ],0,3,0,0,["hJ",ATY(AJq)],QM,0,C,[HJ],0,3,0,0,["hJ",ATY(ALw)],QN,0,C,[Cs],0,3,0,0,["bB",ATY(AEB)],HE,0,C,[Cs],0,3,0,0,["bB",ATY(AOq)],QK,0,C,[Bc],0,3,0,0,["n",ATY(AEW)],QL,
0,C,[Ev],0,3,0,0,["bB",ATY(ALa)],R1,0,C,[Cs],0,3,0,0,["bB",ATY(ALD)],R5,0,C,[Bc],0,3,0,0,["n",ATY(AQu)],R4,0,C,[EH],0,3,0,0,["gg",ATZ(ALE)],R3,0,C,[E8],0,3,0,0,["dj",ATX(AQd)],R2,0,C,[DE],0,3,0,0,["cW",AT0(APE)],R6,0,C,[Ev],0,3,0,0,["bB",ATY(AIN)],HP,0,C,[],0,3,0,0,0,IR,0,C,[],0,3,0,0,0,BZ,0,C,[],0,3,0,0,["cD",ATY(AQ2)],Ix,0,C,[],0,3,0,0,0,ACY,0,Ix,[],0,3,0,0,0,AAN,0,C,[],0,3,0,0,0,TM,0,C,[Cx],0,0,0,0,["bR",ATY(ANp),"cp",AT0(AOV),"b5",ATZ(AHN),"cL",ATZ(AHo)],RC,0,C,[Cs],0,3,0,0,["bB",ATY(ANj)],RB,0,C,[Cs],0,
3,0,0,["bB",ATY(APR)],RE,0,C,[EH],0,3,0,0,["gg",ATZ(AQl)],RD,0,C,[Bh],0,3,0,0,["p",ATX(AQj)],RA,0,C,[Ev],0,3,0,0,["bB",ATY(ALJ)],Rz,0,C,[DE],0,3,0,0,["cW",AT0(AJn)],G8,0,BZ,[],0,3,0,0,0,UV,0,C,[],0,3,0,0,0,Zv,0,C,[],0,3,0,0,0,YB,0,C,[En,HL],0,3,0,0,["uR",ATX(AGS),"sg",ATX(ARu),"gh",ATZ(AGo),"hW",ATY(AEX)],XU,0,C,[],0,3,0,0,0,Ta,0,C,[Cs],0,3,0,0,["bB",ATY(ANN)],Td,0,C,[Ev],0,3,0,0,["bB",ATY(AEw)],ADI,0,C,[],0,3,0,0,["cD",ATY(ARm)],H0,0,C,[],0,3,0,0,0,Tc,0,C,[Bh],0,3,0,0,["p",ATX(AI7)],S_,0,C,[Bh],0,3,0,0,["p",
ATX(AO8)],C$,0,C,[],0,3,0,0,0,AA1,0,C,[Cx,En],0,3,0,0,["bR",ATY(Za),"cp",AT0(AA0),"b5",ATZ(X$),"cL",ATZ(ADT),"gh",ATZ(AQe)],Ow,0,C,[Cs],0,3,0,0,["bB",ATY(AGn)],Ox,0,C,[Ev],0,3,0,0,["bB",ATY(APp)],ABT,0,C,[],0,3,0,0,0,Oy,0,C,[DE],0,3,0,0,["cW",AT0(AMx)],V9,0,C,[],3,3,0,0,0,Ho,0,C,[V9],3,3,0,0,0,EN,0,C,[Ho],1,3,0,0,0,I8,0,C,[Ho],3,3,0,0,0]);
$rt_metadata([F3,0,EN,[I8],1,3,0,0,["cD",ATY(ALM)],Ij,0,C,[],3,3,0,0,0,NN,0,F3,[Ek,Di,Ij],0,3,0,0,["rj",ATY(Bp),"nb",ATX(AMH),"t9",ATY(El)],ADv,0,C,[],0,3,0,0,0,T0,0,C,[En],0,3,0,0,["gh",ATZ(AMb)],T1,0,C,[Cs],0,3,0,0,["bB",ATY(AEC)],Nh,0,C,[],3,3,0,0,0,ACV,0,C,[Nh],0,3,0,0,0,ABb,0,C,[Ds],0,3,0,0,0,Y2,0,C,[],3,3,0,0,0,Zb,0,C,[],0,3,0,0,0,Wm,0,C,[Cx],0,0,0,0,["cp",AT0(ANH),"b5",ATZ(AGh),"cL",ATZ(ANz),"bR",ATY(AHH)],SO,0,C,[DE],0,3,0,0,["cW",AT0(AG2)],Ut,0,C,[],3,3,0,0,0,ABa,0,C,[],0,3,0,0,0,PY,0,C,[Cs],0,3,0,
0,["bB",ATY(AOf)],Rf,0,C,[Bc],0,3,0,0,["n",ATY(AE4)],Re,0,C,[Bc],0,3,0,0,["n",ATY(AQ3)],Rd,0,C,[Bc],0,3,0,0,["n",ATY(AHl)],Rc,0,C,[Bc],0,3,0,0,["n",ATY(AMr)],Ra,0,C,[Bc],0,3,0,0,["n",ATY(ALx)],Q_,0,C,[Bc],0,3,0,0,["n",ATY(ANx)],TL,0,C,[Cx],0,0,0,0,["cL",ATZ(AE6),"cp",AT0(ANH),"bR",ATY(APr),"b5",ATZ(ALC)],CZ,0,C,[],3,3,0,G7,0,T$,0,C,[Cx],0,0,0,0,["cp",AT0(ANH),"b5",ATZ(AMG),"cL",ATZ(AGj),"bR",ATY(AFf)],NQ,0,C,[DE],0,3,0,0,["cW",AT0(AE8)],Sr,0,C,[Cs],0,3,0,0,["bB",ATY(APv)],Sq,0,C,[EH],0,3,0,0,["gg",ATZ(AHI)],So,
0,C,[EH],0,3,0,0,["gg",ATZ(AOW)],Sn,0,C,[E8],0,3,0,0,["dj",ATX(AMX)],Sp,0,C,[E8],0,3,0,0,["dj",ATX(AF_)],RW,0,C,[Cs],0,3,0,0,["bB",ATY(AHP)],K4,0,C,[],0,3,0,0,0,Qj,0,C,[Cs],0,3,0,0,["bB",ATY(AIn)],Qk,0,C,[Ev],0,3,0,0,["bB",ATY(AED)],Ql,0,C,[DE],0,3,0,0,["cW",AT0(ANV)],It,0,C,[],0,3,0,0,0,AAP,0,C,[],0,3,0,0,["cD",ATY(AP3)],OE,0,C,[BB],3,3,0,0,0,OX,0,C,[OE],0,3,0,0,["ul",ATZ(AIt)],OF,0,C,[BB],3,3,0,0,0,OV,0,C,[OF],0,3,0,0,["ul",ATZ(AJD)],Zp,0,C,[],0,3,0,0,0,Yw,0,C,[BB],3,3,0,0,0,Sh,0,C,[Cs],0,3,0,0,["bB",ATY(ARq)],Si,
0,C,[Cs],0,3,0,0,["bB",ATY(AEI)],VR,0,C,[],0,3,0,0,0,Yc,0,C,[],0,3,0,0,0,Ni,0,C,[],0,3,0,0,0,EU,0,C,[Ds],0,0,0,0,0]);
$rt_metadata([UK,0,C,[Bc],0,3,0,0,0,UJ,0,C,[Bc],0,3,0,0,["n",ATY(AOp)],UF,0,C,[Bc],0,3,0,0,["n",ATY(AMp)],UE,0,C,[Bh],0,3,0,0,["p",ATX(AOm)],UH,0,C,[Bh],0,3,0,0,["p",ATX(AJo)],UG,0,C,[Bh],0,3,0,0,["p",ATX(ALH)],U7,0,C,[Bh],0,3,0,0,["p",ATX(ANP)],U6,0,C,[Bh],0,3,0,0,["p",ATX(AI3)],Fr,0,Cj,[],12,3,0,AEN,0,ABZ,0,C,[],3,3,0,0,0,Jl,0,C,[Ds],0,3,0,0,["dS",ATX(AB$)],TG,0,C,[],0,3,0,0,0,XM,0,C,[],3,3,0,0,0,Hy,0,C,[],0,3,0,0,0,ACy,0,C,[],0,3,0,0,0,Gt,0,C,[],4,3,0,0,0,AD_,0,C,[],0,3,0,0,0,DQ,0,C,[],3,3,0,XH,0,Gk,0,C,
[],3,3,0,0,0,W1,0,C,[Gk],0,3,0,0,["no",AT0(AN$)],W2,0,C,[Gk],0,3,0,0,0,VT,0,C,[Cx],0,0,0,0,["bR",ATY(AEH),"cp",AT0(AOa),"b5",ATZ(AMf),"cL",ATZ(AJM)],X0,0,C,[Bc],0,3,0,0,["n",ATY(ANA)],NK,0,C,[Ut],0,3,0,0,0,ABk,0,C,[],0,3,0,0,0,Pt,0,C,[Bc],0,3,0,0,["n",ATY(AJU)],Ro,0,C,[Cx],0,0,0,0,["b5",ATZ(APP),"cL",ATZ(AE6),"cp",AT0(ANH),"bR",ATY(AEL)],ZC,0,C,[],0,3,0,0,0,Mv,0,C,[Bh],0,3,0,0,["p",ATX(AKQ)],Mw,0,C,[Bh],0,3,0,0,["p",ATX(AJi)],HK,0,C,[],0,3,0,0,0,EW,0,C,[],0,3,0,0,0,Md,0,EW,[],0,3,0,0,0,My,0,EW,[],0,3,0,0,0,P2,
0,EW,[],0,3,0,0,0,GS,0,C,[],3,3,0,0,0,Rj,0,C,[],3,3,0,0,0,Gg,0,C,[CI],0,3,0,0,0,Jf,0,C,[],0,3,0,0,0,KH,0,F9,[],0,3,0,0,["jN",AT0(AHZ)],Ci,0,Cj,[],12,3,0,ABy,0,IC,0,C,[],0,3,0,0,0,ADA,0,C,[],0,3,0,0,0,AAm,0,C,[BB],4,3,0,0,0,ADY,0,C,[],0,3,0,0,0,ADm,0,C,[],3,3,0,0,0,CR,0,C,[BB],1,3,0,0,0,ABL,0,CR,[],1,3,0,0,0,ACq,0,CR,[],1,3,0,0,0,Zs,0,CR,[],1,3,0,0,0]);
$rt_metadata([ZO,0,CR,[],1,3,0,0,0,ACW,0,CR,[],1,3,0,0,0,AAY,0,EA,[Ek,Di],0,3,0,0,0,Cz,0,C,[],0,3,0,0,0,Nz,0,C,[Bh],0,3,0,0,["p",ATX(AQO)],Ud,0,C,[Bh],0,3,0,0,["p",ATX(ALd)],B7,0,C,[],0,3,0,0,0,IN,0,C,[],0,3,0,0,0,ADE,0,C,[CI],0,3,0,0,["cD",ATY(AOX),"jk",ATY(AF9)],Xi,0,C,[FL],0,3,0,0,["lO",ATZ(AIR)],Xk,0,C,[FL],0,3,0,0,["lO",ATZ(AKu)],EX,0,C,[],0,3,0,0,0,G2,0,F3,[Ij],1,0,0,0,["t9",ATY(ALq)],Xw,0,G2,[Ij],0,0,0,0,["nb",ATX(AHX),"rj",ATY(AQB)],Yo,0,C,[],0,3,0,0,["cr",ATX(AIY)],OM,0,C,[Ho],3,3,0,0,0,Ga,0,EN,[OM],
1,3,0,0,0,Ka,0,Ga,[],1,0,0,0,0,Vu,0,Ka,[],0,0,0,0,0,Lq,0,EA,[],1,0,0,0,0,Vs,0,Lq,[],0,0,0,0,0,Vt,0,G2,[],0,0,0,0,0,FB,0,C,[],3,3,0,0,0,Vq,0,C,[FB],0,0,0,0,0,Pa,0,C,[FB],3,3,0,0,0,Vr,0,C,[Pa],0,0,0,0,0,XZ,0,C,[FL],0,3,0,0,0,Nr,0,C,[FB],0,0,0,0,0,Z8,0,C,[],4,3,0,0,0,VQ,0,C,[Cx],0,0,0,0,["b5",ATZ(APP),"cL",ATZ(AE6),"cp",AT0(ANH),"bR",ATY(AOy)],AAi,0,C,[BB],1,3,0,0,0,KA,0,C,[He,Ek],0,0,0,0,["cD",ATY(AG4)],H$,0,KA,[],0,0,0,0,0,MJ,0,C,[Bc],0,3,0,0,["n",ATY(AOL)],VY,0,C,[EM],0,3,0,0,["dj",ATX(AQS)],CW,0,C,[],3,3,0,
AMh,0,Ca,0,Cj,[],12,3,0,AA9,0,DR,0,C,[],3,3,0,AJc,0,AD4,0,C,[],0,3,0,0,0,Lx,0,C,[],3,3,0,0,0,Rg,0,C,[Lx],0,3,0,0,["qA",ATY(ALU)],Sl,0,C,[],3,3,0,0,0,AC9,0,C,[CI],0,3,0,0,["cD",ATY(AES),"i6",ATX(ANU),"jk",ATY(ANs)],Tg,0,C,[Bc],0,3,0,0,["n",ATY(AGU)],Y1,0,C,[],0,3,0,0,0,Yb,0,C,[],0,3,0,0,0,Na,0,C,[Ds],0,3,0,0,0,FK,0,In,[],0,3,0,0,0,W0,0,EF,[],0,3,0,0,0,P9,0,C,[Bc],0,3,0,0,["n",ATY(AMT)]]);
$rt_metadata([T8,0,C,[Bh],0,3,0,0,["p",ATX(APm)],Yt,0,C,[],0,3,0,0,0,IE,0,Bo,[],0,3,0,0,0,L3,0,DU,[CI],0,3,0,0,0,Fy,0,C,[],0,0,0,0,0,J3,0,C,[],4,3,0,0,0,Vn,0,C,[],0,3,0,0,0,LW,0,C,[],1,3,0,0,0,XI,0,C,[Bc],0,3,0,0,["n",ATY(AFk)],VG,0,C,[Bc],0,3,0,0,["n",ATY(AQ5)],Qa,0,C,[Bc],0,3,0,0,["n",ATY(AL3)],AAC,0,CR,[],1,3,0,0,0,Rm,0,C,[Bh],0,3,0,0,["p",ATX(AJh)],Vg,0,C,[Bh],0,3,0,0,["p",ATX(ANc)],T6,0,C,[],0,3,0,0,0,DY,0,Bo,[],0,3,0,0,0,AB4,0,EF,[],0,3,0,0,0,Qi,0,C,[Bc],0,3,0,0,["n",ATY(AP6)],Q5,0,C,[Bc],0,3,0,0,["n",
ATY(AIu)],Q4,0,C,[Bc],0,3,0,0,["n",ATY(ALW)],Sd,0,C,[Bc],0,3,0,0,0,NI,0,C,[Bc],0,3,0,0,["n",ATY(AE7)],NG,0,C,[Bc],0,3,0,0,["n",ATY(AG6)],SP,0,C,[Bc],0,3,0,0,["n",ATY(AGP)],Ko,0,LW,[],1,3,0,0,0,Tx,0,Ko,[],0,3,0,0,0,PN,0,C,[Bc],0,3,0,0,["n",ATY(AGa)],Vf,0,C,[Bh],0,3,0,0,["p",ATX(AMd)],NJ,0,C,[EM],0,3,0,0,["dj",ATX(AEn)],RP,0,C,[EM],0,3,0,0,["dj",ATX(AIj)],RQ,0,C,[EM],0,3,0,0,["dj",ATX(AFd)],Qu,0,C,[BX],0,3,0,0,["bi",ATY(AEp)],UB,0,C,[BX],0,3,0,0,["bi",ATY(AQE)],MH,0,C,[Bc],0,3,0,0,0,ABF,0,C,[Cb],0,3,0,0,0,Sg,
0,C,[Bc],0,3,0,0,["n",ATY(AFn)],Sf,0,C,[Bc],0,3,0,0,["n",ATY(AF3)],ACr,0,C,[Cb],0,3,0,0,0,SZ,0,C,[Bh],0,3,0,0,["p",ATX(AJj)],JX,0,DU,[CI],0,3,0,0,0,Lt,0,C,[],4,3,0,0,0,MI,0,C,[BX],0,3,0,0,["bi",ATY(ARt)],TT,0,C,[],0,3,0,0,0,EI,0,C,[Ds],0,3,0,0,["dS",ATX(AMv),"iK",ATX(AP9),"iN",AT0(PL),"eR",ATY(Zf),"jV",ATY(AHM),"jL",ATY(AO1),"pj",ATZ(AQ_),"cp",AT0(APy),"b5",ATZ(AOR),"cL",ATZ(APW),"bR",ATY(ALO),"cW",AT0(AHE)],Gz,0,EI,[],0,3,0,0,0,QP,0,Gz,[HL],0,3,0,0,["uR",ATX(AGS),"sg",ATX(ARu),"dS",ATX(ARo),"pj",ATZ(AGO),"eR",
ATY(AJw),"jL",ATY(AKI),"jV",ATY(AHm),"uo",ATX(Zu),"bR",ATY(AQh),"b5",ATZ(AEY),"cp",AT0(AFb),"hW",ATY(AKc)],VP,0,C,[Bh],0,3,0,0,["p",ATX(ARa)],AAg,0,EI,[],0,3,0,0,["dS",ATX(AFg),"iN",AT0(AGV),"eR",ATY(AOv),"cp",AT0(AI4),"b5",ATZ(APB),"cL",ATZ(AIF),"bR",ATY(AJW),"cW",AT0(AOJ),"iK",ATX(AMa)],VV,0,Gz,[],0,3,0,0,["uo",ATX(AMU),"iK",ATX(AKL),"jL",ATY(AJy),"eR",ATY(AHf),"jV",ATY(AKa)],Pl,0,C,[Bc],0,3,0,0,0]);
$rt_metadata([Nl,0,C,[Gk],0,3,0,0,["no",AT0(AQk)],Xt,0,C,[],0,3,0,0,0,HW,0,C,[],0,3,0,0,0,Tt,0,EI,[],0,3,0,0,0,R0,0,DU,[CI],0,3,0,0,0,X6,0,C,[Bh],0,3,0,0,["p",ATX(AHs)],Vo,0,C,[Bc],0,3,0,0,["n",ATY(AP7)],Vp,0,C,[Bc],0,3,0,0,["n",ATY(AFo)],Jo,0,C,[],0,3,0,0,0,Fh,0,Bo,[],0,3,0,0,0,Nx,0,C,[],0,3,0,0,0,AC_,0,C,[],0,3,0,0,0,SS,0,C,[],0,0,0,0,0,Y5,0,C,[],3,3,0,0,0,Ry,0,C,[Bc],0,3,0,0,["n",ATY(AIC)],Xe,0,C,[BX],0,3,0,0,["bi",ATY(AOB)],Xd,0,C,[BX],0,3,0,0,["bi",ATY(AHa)],WJ,0,C,[BX],0,3,0,0,["bi",ATY(AIJ)],WI,0,C,[BX],
0,3,0,0,["bi",ATY(AJC)],Yv,0,C,[],1,3,0,0,0,WQ,0,C,[],3,3,0,0,0,W$,0,C,[Cl],0,3,0,0,["b_",ATY(AIz)],Z2,0,C,[],0,3,0,0,0,ADu,0,C,[],0,3,0,0,0,Um,0,C,[Bh],0,3,0,0,["p",ATX(AJd)],Uo,0,C,[Bh],0,3,0,0,["p",ATX(AN6)],ACb,0,C,[],0,3,0,0,0,IX,0,Fh,[],0,3,0,0,0,HS,0,Bo,[],0,3,0,0,0,LM,0,Bo,[],0,3,0,0,0,ZG,0,C,[Bc],0,3,0,0,0,Sj,0,C,[Bh],0,3,0,0,["p",ATX(AQJ)],QX,0,C,[Bc],0,3,0,0,["n",ATY(AJZ)],St,0,C,[Bh],0,3,0,0,["p",ATX(AFv)],Yd,0,C,[],0,3,0,0,0,GY,0,C,[],0,3,0,0,0,ACk,0,Ga,[],0,0,0,0,0,O1,0,EN,[],0,0,0,0,0,WA,0,Bw,
[],0,3,0,0,0,Qg,0,C,[L9],3,3,0,0,0,Ns,0,C,[Qg],3,3,0,0,0,LP,0,C,[Ns],1,3,0,0,0,Z7,0,LP,[],0,3,0,0,0,Rs,0,C,[Bh],0,3,0,0,["p",ATX(AF5)],Rr,0,C,[Bh],0,3,0,0,["p",ATX(AEx)],Rq,0,C,[Bh],0,3,0,0,["p",ATX(AKD)],Rp,0,C,[Bh],0,3,0,0,["p",ATX(APk)],Pn,0,C,[Bh],0,3,0,0,["p",ATX(AOF)],Pp,0,C,[Bh],0,3,0,0,["p",ATX(AJH)],Pq,0,C,[Bh],0,3,0,0,["p",ATX(AGw)]]);
$rt_metadata([Xf,0,C,[],3,3,0,0,0,V5,0,C,[Bh],0,3,0,0,["p",ATX(AFs)],PP,0,C,[GS],0,3,0,0,["lS",ATZ(AOG)],SM,0,C,[Bh],0,3,0,0,["p",ATX(AKb)],SN,0,C,[Bh],0,3,0,0,["p",ATX(ALu)],SL,0,C,[Bh],0,3,0,0,["p",ATX(AMR)],N9,0,C,[Bh],0,3,0,0,["p",ATX(AI9)],N8,0,C,[Bh],0,3,0,0,["p",ATX(APu)],U9,0,C,[EM],0,3,0,0,["dj",ATX(AG1)],VI,0,C,[Bh],0,3,0,0,["p",ATX(ANn)],VN,0,C,[Bh],0,3,0,0,["p",ATX(AKj)],VM,0,C,[Bh],0,3,0,0,["p",ATX(AFl)],VK,0,C,[Bh],0,3,0,0,["p",ATX(AG9)],MS,0,C,[GS],0,3,0,0,["lS",ATZ(AKs)],PM,0,C,[BX],0,3,0,0,
["bi",ATY(AHn)],IP,0,C,[BB],3,3,0,0,0,MD,0,C,[IP],0,3,0,0,["qz",ATX(AJI)],Mn,0,C,[IP],0,3,0,0,["qz",ATX(AEh)],Pj,0,C,[Gk],0,3,0,0,0,Xc,0,C,[BX],0,3,0,0,["bi",ATY(AI0)],GQ,0,C,[],0,0,0,0,0,Ux,0,GQ,[FB],0,0,0,0,0,QU,0,GQ,[FB],0,0,0,0,0,QS,0,C,[Di],4,3,0,0,0,NW,0,C,[Bc],0,3,0,0,["n",ATY(ARl)],Gn,0,Cj,[],12,0,0,UP,0,SV,0,C,[Bc],0,3,0,0,["n",ATY(AKm)],Qn,0,C,[Bc],0,3,0,0,["n",ATY(AI_)],Xn,0,C,[Bc],0,3,0,0,["n",ATY(AKC)],Vd,0,C,[Lx],0,3,0,0,["qA",ATY(JO)],Bz,0,C,[],1,0,0,0,["ch",AT0(HA),"cm",AT1(HN),"hi",ATX(AFV),
"K",ATY(APG),"bQ",ATY(APD),"e$",ATX(AQx),"d6",ATX(I2)],Uq,0,C,[],32,0,0,AR0,0,O2,0,C,[Bc],0,3,0,0,["n",ATY(AGR)],VU,0,C,[Bc],0,3,0,0,["n",ATY(AIw)],X7,0,C,[Bh],0,3,0,0,["p",ATX(AGD)],CN,0,Bz,[],0,0,0,L_,["c",AT0(AFr),"F",ATY(AFK)],GE,0,C,[],0,0,0,0,0,IJ,0,BD,[],0,3,0,0,0,WZ,0,C,[BX],0,3,0,0,["bi",ATY(AM5)],ABz,0,C,[BB],3,3,0,0,0,Ub,0,C,[BX],0,3,0,0,["bi",ATY(AMJ)],RH,0,CN,[],0,0,0,0,["c",AT0(AE0),"F",ATY(AOe)],Xx,0,CN,[],0,0,0,0,["c",AT0(AGG)],Pu,0,CN,[],0,0,0,0,["c",AT0(AFS)],SR,0,CN,[],0,0,0,0,["c",AT0(AE5),
"F",ATY(AMS)],Fv,0,CN,[],0,0,0,0,["c",AT0(APX)],BU,0,Bz,[],1,0,0,0,["c",AT0(AQZ),"bW",ATX(AO$),"F",ATY(AJQ)],AC6,0,BU,[],0,0,0,0,["bq",ATZ(AOE),"ch",AT0(AH1),"cm",AT1(AGv),"F",ATY(AE3)],BQ,0,Bz,[],0,0,0,0,["c",AT0(AIG),"K",ATY(AML),"bQ",ATY(AKE),"F",ATY(ANr),"d6",ATX(AGs)],IV,0,BQ,[],0,0,0,0,["c",AT0(AMu),"F",ATY(ANR)]]);
$rt_metadata([DP,0,IV,[],0,0,0,0,["c",AT0(AG$),"K",ATY(ANy)],MB,0,DP,[],0,0,0,0,["c",AT0(AME),"F",ATY(APL)],V6,0,DP,[],0,0,0,0,["c",AT0(AFF),"F",ATY(APe)],QV,0,DP,[],0,0,0,0,["c",AT0(AGm),"F",ATY(ARp)],TA,0,DP,[],0,0,0,0,["c",AT0(AEy),"F",ATY(AN5)],Gq,0,BQ,[],0,0,0,0,["c",AT0(AEU),"ch",AT0(AK0),"cm",AT1(AOk),"bQ",ATY(AKy),"e$",ATX(AMP),"d6",ATX(AQA)],GG,0,C,[],1,0,0,0,0,U,0,GG,[],1,0,0,Ov,["db",ATX(AFH),"eA",ATX(AFe),"iH",ATX(AO4),"gD",ATX(AQw)],Zi,0,U,[],0,0,0,0,["k",ATY(CY),"db",ATX(CT),"eA",ATX(AHT),"iH",
ATX(APs),"cr",ATX(ALQ),"gD",ATX(AH6)],I$,0,Bo,[],0,3,0,0,0,D0,0,Bz,[],1,0,0,0,["bQ",ATY(AOn),"F",ATY(APS),"d6",ATX(ALm)],C2,0,D0,[],0,0,0,0,["c",AT0(AEA)],E2,0,C2,[],0,0,0,0,["c",AT0(AFu)],CP,0,D0,[],0,0,0,0,["c",AT0(AET)],Ex,0,C2,[],0,0,0,0,["c",AT0(AK6),"K",ATY(ARs)],Wk,0,C2,[],0,0,0,0,["c",AT0(AQR),"ch",AT0(ALN)],X,0,C,[],1,0,0,0,0,De,0,BD,[],0,3,0,0,0,MV,0,GG,[Ek],0,0,0,0,["cr",ATX(ALZ)],N1,0,Bz,[],0,0,0,0,["c",AT0(AKf),"F",ATY(AMK)],WV,0,C,[Ek,Di],0,3,0,0,0,MK,0,BQ,[],0,0,0,0,0,P4,0,BQ,[],0,0,0,0,["c",
AT0(AFp),"K",ATY(AMq),"F",ATY(AFX),"bQ",ATY(AFG)],Dz,0,BQ,[],0,0,0,0,["c",AT0(AHK),"k",ATY(AIi),"bQ",ATY(AFj),"K",ATY(AOY),"F",ATY(AHY)],I7,0,Dz,[],0,0,0,0,["k",ATY(AJR)],Y$,0,BU,[],0,0,0,0,["bq",ATZ(AKg)],Ed,0,BU,[],0,0,0,0,["bq",ATZ(Mk),"bQ",ATY(AMN)],Oz,0,BQ,[],0,0,0,0,["K",ATY(AK5),"c",AT0(AEo),"bQ",ATY(AFP),"F",ATY(APw)],Ej,0,BU,[],0,0,0,0,["bW",ATX(AJ1),"bq",ATZ(AIQ),"ch",AT0(AHF),"cm",AT1(AJ7),"bQ",ATY(APo)],ADz,0,BU,[],0,0,0,0,["bq",ATZ(AEi)],Yi,0,BU,[],0,0,0,0,["bq",ATZ(AEM)],Fc,0,BQ,[],0,0,0,0,["K",
ATY(AQz),"c",AT0(AMt),"bQ",ATY(AKh),"F",ATY(ANB)],Xb,0,Fc,[],0,0,0,0,0,TN,0,Fc,[],0,0,0,0,0,X4,0,CP,[],0,0,0,0,["c",AT0(AGL)],Pm,0,CP,[],0,0,0,0,["c",AT0(ALB)],FN,0,CP,[],0,0,0,0,["c",AT0(AOU),"K",ATY(AP2)],O3,0,FN,[],0,0,0,0,["c",AT0(AJ4),"K",ATY(AL0)],E_,0,CP,[],0,0,0,0,["c",AT0(ARi)],M5,0,E_,[],0,0,0,0,["c",AT0(AJl)],Rl,0,CP,[],0,0,0,0,["c",AT0(AQG)],Qc,0,FN,[],0,0,0,0,["c",AT0(AFZ)],US,0,E_,[],0,0,0,0,["c",AT0(AE$)],Rn,0,D0,[],0,0,0,0,["c",AT0(AQ6),"ch",AT0(AO6)],N$,0,D0,[],0,0,0,0,["c",AT0(AMQ),"ch",AT0(AEs)],EK,
0,C,[],1,0,0,0,0,X5,0,C2,[],0,0,0,0,["c",AT0(AFa)],Wf,0,Ex,[],0,0,0,0,["c",AT0(ALz)],OR,0,E2,[],0,0,0,0,["c",AT0(AOr)],P8,0,C2,[],0,0,0,0,["c",AT0(AMI)]]);
$rt_metadata([T2,0,Ex,[],0,0,0,0,["c",AT0(AFi)],QW,0,E2,[],0,0,0,0,["c",AT0(AOI)],Kn,0,Bz,[],4,0,0,0,["c",AT0(AKB),"F",ATY(AJB)],ZQ,0,Bz,[],0,0,0,0,["c",AT0(AFE),"F",ATY(AFN)],N6,0,Bz,[],0,0,0,0,["c",AT0(AJV),"F",ATY(ARd)],WX,0,Bz,[],4,0,0,0,["c",AT0(ANl),"F",ATY(AGA)],WG,0,Bz,[],0,0,0,0,["c",AT0(AMm),"F",ATY(AEf)],Nf,0,Bz,[],0,0,0,0,["c",AT0(AGr),"F",ATY(AIy)],ADo,0,BQ,[],0,0,0,0,["c",AT0(AQM),"K",ATY(AFR),"hi",ATX(AL6),"F",ATY(AFQ)],Zg,0,BQ,[],4,0,0,0,["c",AT0(AMc),"K",ATY(AOb),"hi",ATX(AEc),"F",ATY(AQW)],ADf,
0,Bz,[],4,0,0,0,["c",AT0(AKl),"F",ATY(AIq)],ABu,0,Bz,[],0,0,0,0,["c",AT0(AMk),"F",ATY(AIf)],Yf,0,Bz,[],0,0,0,0,["c",AT0(AJp),"F",ATY(AGF)],G1,0,BQ,[],0,0,0,0,["c",AT0(AFc),"K",ATY(ANv),"F",ATY(ANS)],ADk,0,G1,[],0,0,0,0,["c",AT0(AGK),"ch",AT0(API),"cm",AT1(AE1),"bQ",ATY(ALs)],AAA,0,G1,[],0,0,0,0,["c",AT0(AKU)],N0,0,Ge,[HT],0,3,0,0,["k7",AT1(AH7),"kj",AT0(AFI),"hp",ATY(AF7),"lE",ATZ(AO9)],Rv,0,BU,[],0,0,0,0,["bq",ATZ(AG7),"ch",AT0(AFz),"cm",AT1(AIv),"bQ",ATY(AI1)],Ye,0,BU,[],0,0,0,0,["bq",ATZ(AK2)],M_,0,BU,[],
0,0,0,0,["bq",ATZ(AOt)],G0,0,C,[],4,0,0,AN3,0,Ms,0,BU,[],0,0,0,0,["bq",ATZ(AOA)],KW,0,BQ,[],0,0,0,0,["K",ATY(AMC),"c",AT0(AGB),"ch",AT0(AIZ),"cm",AT1(AHc),"bQ",ATY(AEZ),"F",ATY(APf)],Lh,0,BQ,[],0,0,0,0,["K",ATY(AF6),"c",AT0(AEz),"ch",AT0(AMZ),"cm",AT1(AOs),"bQ",ATY(AG8),"F",ATY(AM9)],DT,0,BU,[],0,0,0,0,["bq",ATZ(ANT),"ch",AT0(ALS),"cm",AT1(AF4),"bQ",ATY(ANG)],Vh,0,EK,[],0,0,0,0,["g_",ATY(AGg),"r2",ATZ(ANM)],Vi,0,EK,[],0,0,0,0,["g_",ATY(AOM),"r2",ATZ(AQs)],ACl,0,C,[],0,0,0,0,0,Yx,0,C,[],0,0,0,0,0,KT,0,X,[],0,
0,0,0,["B",ATX(AAJ)],JT,0,X,[],0,0,0,0,["B",ATX(ABo)],ACf,0,X,[],0,0,0,0,["B",ATX(AOd)],ACN,0,X,[],0,0,0,0,["B",ATX(APh)],ACR,0,X,[],0,0,0,0,["B",ATX(AHL)],KP,0,X,[],0,0,0,0,["B",ATX(Zk)],Lr,0,KP,[],0,0,0,0,["B",ATX(AAd)],AD2,0,X,[],0,0,0,0,["B",ATX(AIX)],Mj,0,Lr,[],0,0,0,0,["B",ATX(Ya)],AAV,0,Mj,[],0,0,0,0,["B",ATX(ALn)],ABg,0,X,[],0,0,0,0,["B",ATX(AG0)],ZJ,0,X,[],0,0,0,0,["B",ATX(ALk)],Zq,0,X,[],0,0,0,0,["B",ATX(AQv)],ACU,0,X,[],0,0,0,0,["B",ATX(AL2)],AEb,0,X,[],0,0,0,0,["B",ATX(AEq)],ACm,0,X,[],0,0,0,0,["B",
ATX(AJu)],ACa,0,X,[],0,0,0,0,["B",ATX(ANX)],AC$,0,X,[],0,0,0,0,["B",ATX(AGW)],YR,0,X,[],0,0,0,0,["B",ATX(AHk)],Yu,0,X,[],0,0,0,0,["B",ATX(AQp)],ACt,0,X,[],0,0,0,0,["B",ATX(AEj)]]);
$rt_metadata([ACF,0,X,[],0,0,0,0,["B",ATX(AKp)],Z6,0,X,[],0,0,0,0,["B",ATX(AHu)],ABl,0,X,[],0,0,0,0,["B",ATX(AIA)],ADJ,0,X,[],0,0,0,0,["B",ATX(AKr)],ACE,0,X,[],0,0,0,0,["B",ATX(APz)],AAy,0,X,[],0,0,0,0,["B",ATX(ANg)],Z4,0,X,[],0,0,0,0,["B",ATX(ALV)],AD8,0,X,[],0,0,0,0,["B",ATX(AN9)],Jh,0,X,[],0,0,0,0,["B",ATX(ABi)],ADa,0,Jh,[],0,0,0,0,["B",ATX(ALI)],AAZ,0,KT,[],0,0,0,0,["B",ATX(AFy)],ZZ,0,JT,[],0,0,0,0,["B",ATX(AIM)],Zw,0,X,[],0,0,0,0,["B",ATX(AKH)],ZT,0,X,[],0,0,0,0,["B",ATX(AQb)],AAQ,0,X,[],0,0,0,0,["B",ATX(AH_)],AAW,
0,X,[],0,0,0,0,["B",ATX(AEk)],ZD,0,C,[],4,0,0,0,0,Y8,0,C,[],4,3,0,0,0,Ng,0,C,[],0,3,0,0,0,ACz,0,C,[],0,3,0,0,0,AAw,0,C,[],4,3,0,0,0,Zc,0,C,[IL],0,3,0,0,0,To,0,C,[Bc],0,3,0,0,["n",ATY(ARf)],Q3,0,C,[Bc],0,3,0,0,["n",ATY(AH8)],Py,0,C,[Bc],0,3,0,0,0,Qe,0,C,[Bc],0,3,0,0,0,Wi,0,U,[],0,0,0,0,["k",ATY(AHS)],Wg,0,U,[],0,0,0,0,["k",ATY(AEP)],Oe,0,U,[],0,0,0,0,["k",ATY(AKw),"cr",ATX(AID)],Ok,0,U,[],0,0,0,0,["k",ATY(ANW)],Oi,0,U,[],0,0,0,0,["k",ATY(AOz)],Oj,0,U,[],0,0,0,0,["k",ATY(AK1)],On,0,U,[],0,0,0,0,["k",ATY(AHp)],Oo,
0,U,[],0,0,0,0,["k",ATY(AEd)],Ol,0,U,[],0,0,0,0,["k",ATY(AII)],Om,0,U,[],0,0,0,0,["k",ATY(AK4)],Op,0,U,[],0,0,0,0,["k",ATY(APM)],Oq,0,U,[],0,0,0,0,["k",ATY(AGQ)],Od,0,U,[],0,0,0,0,["k",ATY(ARv)],OY,0,U,[],0,0,0,0,["k",ATY(AIL)],Oa,0,U,[],0,0,0,0,["k",ATY(AGN)],Ob,0,U,[],0,0,0,0,["k",ATY(AIo)],Oh,0,U,[],0,0,0,0,["k",ATY(AJY)],N_,0,U,[],0,0,0,0,["k",ATY(APn)],Of,0,U,[],0,0,0,0,["k",ATY(AFL)],Og,0,U,[],0,0,0,0,["k",ATY(AM7)],LO,0,C,[],3,3,0,0,0,Ss,0,C,[LO],4,3,0,0,0,C0,0,C,[],3,3,0,ABn,0,Cg,0,Cj,[],12,3,0,ZR,0]);
$rt_metadata([Du,0,C,[],3,3,0,ANY,0,N2,0,C,[Bc],0,3,0,0,["n",ATY(AN8)],MZ,0,Gq,[],0,0,0,0,["ch",AT0(AIc),"cm",AT1(ARg),"e$",ATX(AGz)],PX,0,Bo,[],0,3,0,0,0,W5,0,Bo,[],0,3,0,0,0,Vc,0,FK,[],0,3,0,0,0,PK,0,FK,[],0,3,0,0,0,XT,0,Bo,[],0,3,0,0,0,U5,0,C,[],0,3,0,0,0,Tq,0,C,[Bh],0,3,0,0,0,SC,0,C,[Bc],0,3,0,0,0,SB,0,C,[Bc],0,3,0,0,0,ACo,0,C,[],3,3,0,0,0,YF,0,C,[],0,3,0,0,0,Or,0,C,[Bc],0,3,0,0,["n",ATY(AL1)],ZV,0,C,[],0,3,0,0,0,Rt,0,C,[HJ],0,3,0,0,0,U_,0,C,[LO],0,0,0,0,0,AC4,0,C,[GS],0,3,0,0,0,VC,0,C,[Bh],0,3,0,0,["p",
ATX(APY)],VX,0,C,[],0,3,0,0,0,N5,0,C,[],0,3,0,0,0,SW,0,U,[],0,0,0,0,["k",ATY(APV)],MG,0,U,[],0,0,0,0,["k",ATY(AFw)],RS,0,U,[],0,0,0,0,["k",ATY(AFh)],RR,0,U,[],0,0,0,0,["k",ATY(AH$)],WO,0,U,[],0,0,0,0,["k",ATY(AJJ)],OL,0,U,[],0,0,0,0,["k",ATY(APZ)],NV,0,U,[],0,0,0,0,["k",ATY(AMw)],Qq,0,U,[],0,0,0,0,["k",ATY(AN2)],Mz,0,U,[],0,0,0,0,["k",ATY(AQU)],ME,0,U,[],0,0,0,0,["k",ATY(AHb)],NE,0,U,[],0,0,0,0,["k",ATY(AP_)],O9,0,U,[],0,0,0,0,["k",ATY(ALh)],Pg,0,U,[],0,0,0,0,["k",ATY(ANt)],TJ,0,U,[],0,0,0,0,["k",ATY(APN)],Su,
0,U,[],0,0,0,0,["k",ATY(AQD)],MT,0,U,[],0,0,0,0,["k",ATY(AGY)],L6,0,U,[],0,0,0,0,["k",ATY(AMz)],RJ,0,L6,[],0,0,0,0,["k",ATY(AOZ)],PE,0,C,[IP],0,3,0,0,["qz",ATX(AKO)],VL,0,C,[BX],0,3,0,0,["bi",ATY(ANk)],VO,0,C,[BX],0,3,0,0,["bi",ATY(AL7)],Tv,0,C,[BX],0,3,0,0,["bi",ATY(AIS)],Ty,0,C,[BX],0,3,0,0,["bi",ATY(AEJ)],Uw,0,C,[BX],0,3,0,0,["bi",ATY(AKJ)],QA,0,C,[],0,3,0,0,0,HZ,0,C,[],0,3,0,0,0,XK,0,C,[Bc],0,3,0,0,["n",ATY(APd)],XL,0,C,[Bc],0,3,0,0,["n",ATY(ALA)]]);
$rt_metadata([XJ,0,C,[Bc],0,3,0,0,["n",ATY(ARw)],YY,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.KY=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","[",", ","]","Either src or dest is null","Illegal argument javaObject instanceof ","#wasm","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = vTex;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}",
"WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = uTexTransform.xy + vTex * uTexTransform.zw;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ",
"Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","selectScene ","CodiconDemo","DemoEdit0","RenderTexture","ScissorDemo","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","WindowDemo","Diff","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","Consolas","Segoe UI","#e3c8ab","#39322b","unsupported","supported","ReadClipboardText is ",
"","","w = ",", lineHeight = ","example.java","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
+"(int field) {\n    return field + this.field;\n  }\n\n  public interface A {\n    int sumField(int field);\n\n    default void foo() {\n      sumField(10);\n    }\n  }\n}\n","java","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","pointer","text","ew-resize","ns-resize","Courier New","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",
", keyCode = ",", isRepeated = ","main.java","private static void foo (...);","FindUsagesView1","Window 1: ","scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐",
"c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","parser >","open ...","Development >","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ",
"\n","\r","Full file parsed in ","ms","change model language: from = "," to = ","opening file ",".java","prev = "," pixelLocation = ",", next = ","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing","CppParser.parse","JavaScriptParser.parseBytes","JavaParser.parse","DiffUtils.findDiffs","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","mouseDown b=","mouseUp b=","onCopy",
"copied","This is a "," text sample","focus lost","menu","toolbar size is unknown","onLeave item ",", item ","trying to display with unknown screen size and dpr","onContextMenu","#616161","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","#606366","#2B2B2B","#A4A3A3","#323232","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",
", ints = ","todo: add directory worker test ","asyncWithFile","#A9B7C6","#344134","#40332B"," on Copy",".cpp",".cc",".cxx",".hpp",".c",".h",".js","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","#BBBBBB","#3C3F41","#4B6EAF","#787878","onEnter item ","defaultText","keyword","#CC7832","field","#9876AA","string","#6A8759","comma","error","unused","#72737A","number","#6897BB","method","#FFC66D","showUsage","braceMatch","#FFEF28",
"#3B514D","comment","#808080","annotation","#BBB529","type","operator","#5F8C8A","\\n","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","#CF8E6D","#C77DBB","#6AAB73","#F75464","#6F737A","#2AACB8","#56A8F5","#7A7E85","#B3AE60","#2E436E","#2E426D","#4D4E51","nwse-resize","nesw-resize"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","/","Int",
"Iter","VP","Rep","No definition or usages","Expected "," ints to read, but "," read","readClipboardText error: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit",
"javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo",
"Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical",
"ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters",
"CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A",
"VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Viewport parsed in ","#EBECF0","#F8F9FB","#edebfc","#FCE8F4","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000",
"#818594","#080808","Verdana"," ints to write, but "," written","info = ","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
Bu.prototype.toString=function(){return $rt_ustr(this);};
Bu.prototype.valueOf=Bu.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AF1(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Cp=Long_add;var Kp=Long_sub;var BP=Long_mul;var Dp=Long_div;var ML=Long_rem;var ASd=Long_or;var CV=Long_and;var AXK=Long_xor;var Fn=Long_shl;var Gl=Long_shr;var D5=Long_shru;var ASz=Long_compare;var Fa=Long_eq;var AXL=Long_ne;var AHx=Long_lt;var Pw=Long_le;var AHe=Long_gt;var ZN=Long_ge;var AXM=Long_not;var ASK=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(ASO);
main.javaException=$rt_javaException;
(function(){var c;c=TQ.prototype;c.f=c.bi;c=TO.prototype;c.f=c.bi;c=M8.prototype;c.f=c.bi;c=AAf.prototype;c.getLength=c.FW;c.get=c.GC;c=NF.prototype;c.f=c.bi;c=YD.prototype;c.dispatchEvent=c.Ba;c.addEventListener=c.Ex;c.removeEventListener=c.GI;c.getLength=c.Bk;c.get=c.yo;c.addEventListener=c.zI;c.removeEventListener=c.C7;c=VE.prototype;c.onAnimationFrame=c.C9;c=Vy.prototype;c.f=c.ul;c=Vv.prototype;c.handleEvent=c.b_;c=Vw.prototype;c.f=c.bi;c=Wq.prototype;c.handleEvent=c.b_;c=Wr.prototype;c.handleEvent=c.b_;c
=Ws.prototype;c.handleEvent=c.b_;c=Wt.prototype;c.handleEvent=c.b_;c=Wu.prototype;c.handleEvent=c.b_;c=Wv.prototype;c.handleEvent=c.b_;c=Ww.prototype;c.handleEvent=c.b_;c=Wx.prototype;c.handleEvent=c.b_;c=Wy.prototype;c.handleEvent=c.b_;c=Wz.prototype;c.handleEvent=c.b_;c=XN.prototype;c.handleEvent=c.b_;c=XO.prototype;c.handleEvent=c.b_;c=XP.prototype;c.handleEvent=c.b_;c=XQ.prototype;c.handleEvent=c.b_;c=Ul.prototype;c.handleEvent=c.b_;c=Xo.prototype;c.f=c.bi;c=Xp.prototype;c.f=c.bi;c=Ne.prototype;c.f=c.bi;c
=Nd.prototype;c.f=c.bi;c=Nc.prototype;c.f=c.bi;c=Nb.prototype;c.f=c.bi;c=Ny.prototype;c.accept=c.Ha;c=OX.prototype;c.f=c.ul;c=OV.prototype;c.f=c.ul;c=Qu.prototype;c.f=c.bi;c=UB.prototype;c.f=c.bi;c=MI.prototype;c.f=c.bi;c=Xe.prototype;c.f=c.bi;c=Xd.prototype;c.f=c.bi;c=WJ.prototype;c.f=c.bi;c=WI.prototype;c.f=c.bi;c=W$.prototype;c.handleEvent=c.b_;c=PM.prototype;c.f=c.bi;c=MD.prototype;c.onTimer=c.qz;c=Mn.prototype;c.onTimer=c.qz;c=Xc.prototype;c.f=c.bi;c=WZ.prototype;c.f=c.bi;c=Ub.prototype;c.f=c.bi;c=PE.prototype;c.onTimer
=c.qz;c=VL.prototype;c.f=c.bi;c=VO.prototype;c.f=c.bi;c=Tv.prototype;c.f=c.bi;c=Ty.prototype;c.f=c.bi;c=Uw.prototype;c.f=c.bi;})();
})(this);
