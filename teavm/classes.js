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
{if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.gJ=f;}
function $rt_cls(cls){return ACm(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FZ(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b3.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AO7(t);}
function $rt_throwableCause(t){return APc(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AUP());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AUQ(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(AUR());}
function $rt_throwCCE(){}
var A=Object.create(null);
var K=$rt_throw;var BE=$rt_compare;var AUS=$rt_nullCheck;var E=$rt_cls;var R=$rt_createArray;var IO=$rt_isInstance;var AUT=$rt_nativeThread;var AUU=$rt_suspending;var AUV=$rt_resuming;var AUW=$rt_invalidPointer;var B=$rt_s;var Bm=$rt_eraseClinit;var V=$rt_imul;var Eg=$rt_wrapException;var AUX=$rt_checkBounds;var AUY=$rt_checkUpperBound;var AUZ=$rt_checkLowerBound;var AU0=$rt_wrapFunction0;var AU1=$rt_wrapFunction1;var AU2=$rt_wrapFunction2;var AU3=$rt_wrapFunction3;var AU4=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var ABb=$rt_createCharArrayFromData;var ATB=$rt_createByteArrayFromData;var AU5=$rt_createShortArrayFromData;var E7=$rt_createIntArrayFromData;var AU6=$rt_createBooleanArrayFromData;var AU7=$rt_createFloatArrayFromData;var AU8=$rt_createDoubleArrayFromData;var AGY=$rt_createLongArrayFromData;var AUO=$rt_createBooleanArray;var DW=$rt_createByteArray;var AU9=$rt_createShortArray;var BN=$rt_createCharArray;var BK=$rt_createIntArray;var AUs=$rt_createLongArray;var AE9=$rt_createFloatArray;var AU$
=$rt_createDoubleArray;var BE=$rt_compare;var AU_=$rt_castToClass;var AVa=$rt_castToInterface;var AVb=Long_toNumber;var Bd=Long_fromInt;var AVc=Long_fromNumber;var Cd=Long_create;var Eo=Long_ZERO;var AVd=Long_hi;var EE=Long_lo;
function C(){this.$id$=0;}
function AVe(){var a=new C();ADA(a);return a;}
function ADA(a){}
function Co(a){return ACm(a.constructor);}
function AL2(a,b){return a!==b?0:1;}
function AGJ(a){var b,c,d,e,f,g,h,i,j;b=YO(a);if(!b)c=B(0);else{d=(((32-NM(b)|0)+4|0)-1|0)/4|0;e=BN(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Hj((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FZ(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function YO(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ALg(a){var b,c,d;if(!IO(a,Em)&&a.constructor.$meta.item===null){b=new V7;X(b);K(b);}b=AFj(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function RR(){var a=this;C.call(a);a.uR=0;a.ra=null;}
function ATP(b){var c,d,e,f,g,h,i,j,k,l;ADy();Y6();ABL();ACP();AER();AAq();ADf();ADC();YX();ACD();AB7();YU();ACC();ACE();ABo();AAx();AAO();ZR();AAX();AAZ();Zc();YY();AEz();c=(Zi()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))O_(B(2),B(3));else{d=new RR;BO(d);e=new Ub;e.sL=d;f=new Nh;c=new $rt_globals.Worker("teavm/worker.js");g=new NR;g.pf=c;g.pg=e;g.ph=f;e=Bk(g,"f");c.onmessage=e;h=H(LQ,[JW(B(4),B(5),400),JW(B(6),B(7),400),JW(B(8),B(5),
700),JW(B(9),B(7),700)]);b=R(LQ,1);b.data[0]=AP6(B(10),Fd(B(11),B(12)),B(5),400);b=(LM(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.sg;f=c.q6;k=new M;O(k);BD(G(G(k,B(13)),f),41);k=N(k);f=c.q1;l=c.o1;f=AI7($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BO(d);c=new Uc;c.tM=d;g=new Ua;e.then(Bk(c,"f"),Bk(g,"f"));}}
function ABr(b){var c,d,e,f,g,h,i,j,k;c=new S3;d=new R6;c.qc=new $rt_globals.TextDecoder("utf-16");e=new V6;e.oU=c;c.rX=e;e=new VZ;e.u8=c;c.mp=e;f=new V0;f.rM=c;c.tW=new $rt_globals.ResizeObserver(Bk(f,"f"));e=new VX;e.og=c;c.m9=e;c.iw=1;f=new O9;f.xW=null;f.jK=AVf;c.l3=f;c.qE=b;f=new VY;f.t6=c;e=Bk(f,"f");b.onmessage=e;e=ABn();b.postMessage(e);c.m2=(D$()).getElementById("canvasDiv");b=Zi();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dP
=b;c.m2.appendChild(b);f=c.dP;e=ANr(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)O_(B(2),B(14));else{g=new Pu;e=c.dP;f=c.mp;g.dF=null;g.hd=e;g.cp=AT0(f);h=$rt_globals.window;i=R(Dr,14);j=i.data;k=new WT;k.no=g;j[0]=CT(g,e,B(15),k);f=new WU;f.sq=g;j[1]=CT(g,e,B(16),f);f=new WV;f.oD=g;j[2]=CT(g,e,B(17),f);f=new WW;f.u3=g;j[3]=CT(g,e,B(18),f);f=new WX;f.ry=g;j[4]=CT(g,e,B(19),f);f=new WY;f.nT=g;j[5]=CT(g,e,B(20),f);k=new WZ;k.vg=g;j[6]=CT(g,e,B(21),k);k=new W0;k.rP=g;j[7]=CT(g,e,B(22),k);k=new W1;k.n6
=g;j[8]=CT(g,e,B(23),k);k=new W2;k.ud=g;j[9]=CT(g,e,B(24),k);k=new Yg;k.tG=g;j[10]=CT(g,e,B(25),k);k=new Yh;k.sG=g;j[11]=ACw(g,h,B(26),k,1);k=new Yi;k.mL=g;j[12]=CT(g,h,B(27),k);k=new Yj;k.uA=g;j[13]=CT(g,h,B(28),k);g.xa=ARs(i);AAH(g,e);c.lC=g;c.gg=ATn(b,c.mp);APH(c.tW,c.dP);e=$rt_globals.window;g=c.m9;e.addEventListener("resize",Bk(g,"handleEvent"));c.fy=ABG(d,AAz(c));TF(c);}AC4(c);}
var Nb=F(0);
var MG=F(0);
function WO(){var a=this;C.call(a);a.kv=null;a.f3=null;}
function ACm(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new WO;c.f3=b;d=c;b.classObject=d;}return c;}
function Ia(a){if(a.kv===null)a.kv=$rt_str(a.f3.$meta.name);return a.kv;}
function HZ(a){return a.f3.$meta.primitive?1:0;}
function Ih(a){return ACm(a.f3.$meta.item);}
var ZU=F();
function Bk(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Lo(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ZD=F();
function AFj(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ACp(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ACp(d[e],c))return 1;e=e+1|0;}return 0;}
var Dh=F(0);
var CJ=F(0);
var I2=F(0);
function Bv(){var a=this;C.call(a);a.b3=null;a.hV=0;}
var AVg=null;var AVh=null;var AVi=null;function EN(){EN=Bm(Bv);AQG();}
function AJw(){var a=new Bv();YZ(a);return a;}
function FZ(a){var b=new Bv();Hs(b,a);return b;}
function HC(a,b,c){var d=new Bv();Yv(d,a,b,c);return d;}
function YZ(a){EN();a.b3=AVg;}
function Hs(a,b){var c,d,e,f;EN();b=b.data;c=b.length;d=BN(c);e=d.data;a.b3=d;f=0;while(f<c){e[f]=b[f];f=f+1|0;}}
function Yv(a,b,c,d){var e,f,g;EN();e=BN(d);f=e.data;a.b3=e;g=0;while(g<d){f[g]=b.data[g+c|0];g=g+1|0;}}
function Mq(b){var c;EN();c=AJw();c.b3=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.b3.data;if(b<c.length)return c[b];}d=new Hh;X(d);K(d);}
function I(a){return a.b3.data.length;}
function Fq(a){return a.b3.data.length?0:1;}
function PR(a,b,c,d,e){var f,g,h;if(b>=0&&b<=c&&c<=I(a)&&e>=0){d=d.data;if((e+(c-b|0)|0)<=d.length){while(b<c){f=e+1|0;g=b+1|0;d[e]=L(a,b);e=f;b=g;}return;}}h=new Bz;X(h);K(h);}
function UF(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function KJ(a,b){if(a===b)return 1;return UF(a,b,0);}
function Ed(a,b){var c,d,e,f;if(a===b)return 1;if(I(b)>I(a))return 0;c=0;d=I(a)-I(b)|0;while(d<I(a)){e=L(a,d);f=c+1|0;if(e!=L(b,c))return 0;d=d+1|0;c=f;}return 1;}
function GM(a,b,c){var d,e,f,g,h;d=Bb(0,c);if(b<65536){e=b&65535;while(true){f=a.b3.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Id(b);h=IU(b);while(true){f=a.b3.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function F5(a,b,c){var d,e,f,g,h;d=Z(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b3.data[d]==e)break;d=d+(-1)|0;}return d;}f=Id(b);g=IU(b);while(true){if(d<1)return (-1);h=a.b3.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function AAj(a,b,c){var d,e,f;d=Bb(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function PO(a,b,c){var d,e;d=Z(c,I(a)-I(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=I(b))break a;if(L(a,d+e|0)!=L(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Cb(a,b,c){var d,e;d=BE(b,c);if(d>0){e=new Bz;X(e);K(e);}if(!d){EN();return AVh;}if(!b&&c==I(a))return a;return HC(a.b3,b,c-b|0);}
function Dj(a,b){return Cb(a,b,I(a));}
function PX(a,b,c){return Cb(a,b,c);}
function Fd(a,b){var c,d,e,f,g,h;if(Fq(b))return a;if(Fq(a))return b;c=BN(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Mq(c);}
function Vy(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BD(d,L(a,f));}f=f+1|0;}G(d,Dj(a,f));return N(d);}
function R$(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return Cb(a,b,c+1|0);}
function AGI(a){return a;}
function Gy(a){var b,c,d,e,f;b=a.b3.data;c=BN(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function CB(b){EN();return b===null?B(29):b.cv();}
function C5(b){var c;EN();c=new M;O(c);return N(U(c,b));}
function Bn(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function Lm(a){var b,c,d,e;a:{if(!a.hV){b=a.b3.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hV=(31*a.hV|0)+e|0;d=d+1|0;}}}return a.hV;}
function L3(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new GG;Bl(b,B(30));K(b);}AVj=1;d=new Re;d.kf=R(CO,10);d.gn=(-1);d.eN=(-1);d.bx=(-1);e=new GO;e.eJ=1;e.bP=b;e.bg=BN(I(b)+2|0);Eh(Gy(b),0,e.bg,0,I(b));f=e.bg.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.rC=g;e.f7=0;E4(e);E4(e);d.g=e;d.dr=0;d.lb=X$(d,(-1),0,null);if(!Di(d.g)){b=new IX;h=d.g;Jr(b,B(31),h.bP,h.c_);K(b);}if(d.nr)d.lb.ej();b=Cn();h=new SN;h.it=(-1);h.kz=(-1);h.wh=d;h.tS=d.lb;h.iQ=a;h.it=0;g=I(a);h.kz=g;e=new VB;i=h.it;j=d.gn;k=d.eN+1|0;l=d.bx+
1|0;e.hG=(-1);m=j+1|0;e.ow=m;e.dO=BK(m*2|0);f=BK(l);e.jH=f;Hz(f,(-1));if(k>0)e.k2=BK(k);Hz(e.dO,(-1));X3(e,a,i,g);h.cu=e;e.fn=1;n=0;m=0;if(!I(a)){f=R(Bv,1);f.data[0]=B(31);}else{while(true){l=I(h.iQ);if(!YW(h.cu))l=h.kz;e=h.cu;if(e.ee>=0&&AAM(e)==1){e=h.cu;e.ee=Jc(e);if(Jc(h.cu)==ACO(h.cu)){e=h.cu;e.ee=e.ee+1|0;}g=h.cu.ee;g=g<=l&&MP(h,g)?1:0;}else g=MP(h,h.it);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BZ(b,PX(a,m,AEi(h)));m=AAu(h);n=g;}a:{BZ(b,PX(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Br(b,
g)))break a;En(b,g);}}if(g<0)g=0;f=HP(b,R(Bv,g));}return f;}
function AIW(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Z(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AQG(){AVg=BN(0);AVh=AJw();AVi=new Th;}
function GA(){var a=this;C.call(a);a.hz=null;a.k0=null;a.jp=0;a.jM=0;}
function AVk(){var a=new GA();X(a);return a;}
function AVl(a){var b=new GA();Bl(b,a);return b;}
function X(a){a.jp=1;a.jM=1;}
function Bl(a,b){a.jp=1;a.jM=1;a.hz=b;}
function AIM(a){return a;}
function AO7(a){return a.hz;}
function APc(a){var b;b=a.k0;if(b===a)b=null;return b;}
var EH=F(GA);
var Hk=F(EH);
var AA5=F(Hk);
var DV=F();
function Fh(){DV.call(this);this.fK=0;}
var AVm=null;var AVn=null;function ADT(a){var b=new Fh();J6(b,a);return b;}
function J6(a,b){a.fK=b;}
function JE(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dd;Bl(b,B(32));K(b);}d=I(b);if(0==d){b=new Dd;Bl(b,B(33));K(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dd;X(b);K(b);}b:{c:{while(f<d){h=f+1|0;i=O3(L(b,f));if(i<0){j=new Dd;k=Cb(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bl(j,N(b));K(j);}if(i>=c){j=new Dd;l=Cb(b,0,d);b=new M;O(b);G(G(U(G(b,B(35)),c),B(36)),l);Bl(j,N(b));K(j);}g=V(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dd;k=Cb(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bl(j,N(b));K(j);}b=new Dd;j=new M;O(j);U(G(j,B(38)),c);Bl(b,N(j));K(b);}
function F4(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AVn===null){AVn=R(Fh,256);c=0;while(true){d=AVn.data;if(c>=d.length)break a;d[c]=ADT(c-128|0);c=c+1|0;}}}return AVn.data[b+128|0];}return ADT(b);}
function L_(a){var b;b=a.fK;return (Nx(AUA(20),b,10)).cv();}
function NM(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Is(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Ki(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function ALb(a,b){b=b;return BE(a.fK,b.fK);}
function ADy(){AVm=E($rt_intcls());}
function Gn(){var a=this;C.call(a);a.D=null;a.Q=0;}
function AVo(){var a=new Gn();O(a);return a;}
function AUA(a){var b=new Gn();F1(b,a);return b;}
function O(a){F1(a,16);}
function F1(a,b){a.D=BN(b);}
function Nx(a,b,c){return ABi(a,a.Q,b,c);}
function ABi(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Ce(a,b,b+1|0);else{Ce(a,b,b+2|0);f=a.D.data;g=b+1|0;f[b]=45;b=g;}a.D.data[b]=Hj(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=V(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Ce(a,b,b+i|0);if(e)e=b;else{f=a.D.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.D.data;b=e+1|0;f[e]=Hj($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ACd(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BE(c,0.0);if(!d){Ce(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Ce(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ce(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ce(a,b,b+8|0);d=b;}else{Ce(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AVp;AB8(c,f);d=f.kE;g=f.kq;h=f.nN;i=1;j=1;if(h)j=2;k=9;l=AP$(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bb(k,i+1|0);g=0;}else{d=d/AVq.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Ce(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.D.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.D.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.D.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function AAd(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BE(c,0.0);if(!d){Ce(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Ce(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ce(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ce(a,b,b+8|0);d=b;}else{Ce(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AVr;ABl(c,f);g=f.ld;h=f.ka;i=f.nm;j=1;k=1;if(i)k=2;l=18;m=ANU(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bb(l,j+1|0);h=0;}else{g=Do(g,AVs.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Ce(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.D.data;k=b+1|0;e[b]=45;}n=Cd(1569325056, 23283064);o=0;while(o<l){if(PN(n,Eo))d=0;else{d=EE(Do(g,n));g
=MX(g,n);}e=a.D.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Do(n,Bd(10));o=o+1|0;}if(h){e=a.D.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function AP$(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ANU(b){var c,d,e,f,g;c=Bd(1);d=0;e=16;f=AVt.data;g=f.length-1|0;while(g>=0){if(Fc(MX(b,BR(c,f[g])),Eo)){d=d|e;c=BR(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BD(a,b){return a.l$(a.Q,b);}
function XO(a,b,c){Ce(a,b,b+1|0);a.D.data[b]=c;return a;}
function JH(a,b){var c,d;c=a.D.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bb(b,Bb(c*2|0,5));a.D=NG(a.D,d);}
function N(a){return HC(a.D,0,a.Q);}
function Xw(a,b,c,d){return a.lB(a.Q,b,c,d);}
function M7(a,b,c,d,e){var f,g,h,i;Ce(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.D.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function It(a,b){return a.kL(b,0,b.data.length);}
function Ce(a,b,c){var d,e,f,g;d=a.Q;e=d-b|0;a.hO((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.D.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.Q=a.Q+(c-b|0)|0;}
var H4=F(0);
var M=F(Gn);
function LU(){var a=new M();ARy(a);return a;}
function ARy(a){O(a);}
function G(a,b){var c;c=a.Q;if(b===null)b=B(29);Mr(a,c,b);return a;}
function B0(a,b){Mr(a,a.Q,b);return a;}
function U(a,b){Nx(a,b,10);return a;}
function H1(a,b){var c,d,e,f,g,h,i,j;c=a.Q;d=1;if(AIg(b,Eo)){d=0;b=ATK(b);}a:{if(Lh(b,Bd(10))<0){if(d)Ce(a,c,c+1|0);else{Ce(a,c,c+2|0);e=a.D.data;f=c+1|0;e[c]=45;c=f;}a.D.data[c]=Hj(EE(b),10);}else{g=1;h=Bd(1);i=FK(Bd(-1),Bd(10));b:{while(true){j=BR(h,Bd(10));if(Lh(j,b)>0){j=h;break b;}g=g+1|0;if(Lh(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Ce(a,c,c+g|0);if(d)f=c;else{e=a.D.data;f=c+1|0;e[c]=45;}while(true){if(Fc(j,Eo))break a;e=a.D.data;c=f+1|0;e[f]=Hj(EE((FK(b,j))),10);b=Nu(b,j);j=FK(j,Bd(10));f=c;}}}return a;}
function Fl(a,b){ACd(a,a.Q,b);return a;}
function YS(a,b){BD(a,b);return a;}
function F9(a,b){Mr(a,a.Q,!b?B(39):B(40));return a;}
function AD9(a,b,c){var d,e,f,g,h,i;d=BE(b,c);if(d<=0){e=a.Q;if(b<=e){if(d){f=e-c|0;a.Q=e-(c-b|0)|0;g=0;while(g<f){h=a.D.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Hh;X(i);K(i);}
function WA(a,b){var c,d,e,f;if(b>=0){c=a.Q;if(b<c){c=c-1|0;a.Q=c;while(b<c){d=a.D.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Hh;X(f);K(f);}
function AK7(a,b,c,d,e){M7(a,b,c,d,e);return a;}
function AH2(a,b,c,d){Xw(a,b,c,d);return a;}
function Zr(a){return a.Q;}
function DT(a){return N(a);}
function ALe(a,b){JH(a,b);}
function ALJ(a,b,c){XO(a,b,c);return a;}
function Mr(a,b,c){var d,e,f;if(b>=0&&b<=a.Q){a:{if(c===null)c=B(29);else if(Fq(c))break a;JH(a,a.Q+I(c)|0);d=a.Q-1|0;while(d>=b){a.D.data[d+I(c)|0]=a.D.data[d];d=d+(-1)|0;}a.Q=a.Q+I(c)|0;d=0;while(d<I(c)){e=a.D.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new Hh;X(c);K(c);}
var Er=F(Hk);
var ACv=F(Er);
function AVu(a){var b=new ACv();AGS(b,a);return b;}
function AGS(a,b){Bl(a,b);}
var AAT=F(Er);
function AVv(a){var b=new AAT();AHc(b,a);return b;}
function AHc(a,b){Bl(a,b);}
var D3=F(GA);
var Bq=F(D3);
function AUQ(a){var b=new Bq();AQ9(b,a);return b;}
function AQ9(a,b){Bl(a,b);}
var T4=F(0);
var Dr=F(0);
function ARs(b){var c;c=new Qj;c.wu=b;return c;}
function CH(b,c){if(b!==null)b.d4();return c;}
var OX=F(0);
function IJ(){var a=this;C.call(a);a.lP=0;a.kY=0;}
var AVw=0;function FT(a){AVw=AVw-1|0;}
function F6(a,b,c){Jm(a,Z9(b,c,400,0));}
function Q3(a,b){return KR(a,b,0.875);}
function KR(a,b,c){return Eq(a,b)+c|0;}
function RE(){var a=this;IJ.call(a);a.jP=null;a.br=null;a.mR=null;}
function Ew(a){var b,c,d;b=a.br;c=a.lP;d=a.kY;b.clearRect(0.0,0.0,c,d);}
function Sq(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.br;d="center";c.textAlign=d;break a;case 2:c=a.br;d="right";c.textAlign=d;break a;default:break a;}d=a.br;c="left";d.textAlign=c;}}
function CC(a,b){Jm(a,b.na);}
function Jm(a,b){var c;if(!(a.mR==b?1:0)){c=a.br;a.mR=b;c.font=b;}}
function Z9(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Ch(a,b,c,d){var e,f,g;e=a.br;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Eq(a,b){var c;c=$rt_ustr(b);return a.br.measureText(c).width;}
function Lv(a,b,c,d){var e,f;e=a.br;f=$rt_ustr(FZ(ABb([35,GJ(b/16|0),GJ(b%16|0),GJ(c/16|0),GJ(c%16|0),GJ(d/16|0),GJ(d%16|0)])));e.fillStyle=f;}
var Y7=F();
var ADN=F();
function C6(b,c){if(b===c)return 1;return b!==null?b.cH(c):c!==null?0:1;}
function BO(b){if(b!==null)return b;b=new GG;Bl(b,B(31));K(b);}
var Bc=F(0);
function Ub(){C.call(this);this.sL=null;}
var BF=F(0);
var ABF=F();
var Y$=F(0);
function JW(b,c,d){return AP6(B(41),Fd(B(11),b),c,d);}
var ADo=F(0);
var ADi=F(0);
function LM(b,c){var d,e,f,g;d=c.data;e=b.data.length;f=d.length;g=Dk(b,e+f|0);Eh(c,0,g,e,f);return g;}
function K2(b,c,d){Eh(b,c,d,0,d.data.length);return d;}
function Rm(b,c,d){var e;if(c>0)Eh(b,0,d,0,c);e=d.data.length;if(c<e)Eh(b,c+1|0,d,c,e-c|0);return d;}
function AAY(b,c,d,e){var f;if(c>0)Eh(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Eh(b,d,e,c,f-d|0);}return e;}
function FX(b){var c;c=new Wp;c.i4=b;return c;}
function ZZ(b,c){if(b.data.length!=c)b=Dk(b,c);return b;}
function ADh(b,c,d){var e;e=c.data.length;if(e==d)c=Dk(c,e*2|0);c.data[d]=b;return c;}
function LQ(){var a=this;C.call(a);a.sg=null;a.q6=null;a.q1=null;a.o1=0;}
function AP6(a,b,c,d){var e=new LQ();AOX(e,a,b,c,d);return e;}
function AOX(a,b,c,d,e){a.sg=b;a.q6=c;a.q1=d;a.o1=e;}
var ZS=F();
function AI7(b,c){return {style:b,weight:c};}
var BQ=F(0);
function Uc(){C.call(this);this.tM=null;}
function AEV(a,b){var c,d,e;c=a.tM;d=0;while(d<b.length){e=b[d];(D$()).fonts.add(e);d=d+1|0;}c.uR=1;b=c.ra;if(b!==null)ABr(b);}
var Ua=F();
function AQN(a,b){$rt_globals.console.info("font load error "+b);}
var ADe=F();
var AAv=F();
function O_(b,c){var d,e,f;d=(D$()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(D$()).getElementById($rt_ustr(b)).appendChild(d);}
function Zi(){return (D$()).createElement("canvas");}
function AEb(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ANr(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AEO=F();
var Nh=F();
function AM_(a,b){var c;c=new Bq;Bl(c,$rt_str(b.message));K(c);}
var Wr=F();
function FF(b){return $rt_str(b);}
var Zm=F();
function NG(b,c){var d,e,f,g;b=b.data;d=BN(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function AD4(b,c){var d,e,f,g;b=b.data;d=DW(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Mg(b,c){var d,e,f,g;b=b.data;d=BK(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dk(b,c){var d,e,f,g;d=b.data;e=U1(Ih(Co(b)),c);f=Z(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Z5(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B0(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,B(43));G(c,e[d]);d=d+1|0;}B0(c,B(44));return N(c);}
function ACL(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B0(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,B(43));U(c,e[d]);d=d+1|0;}B0(c,B(44));return N(c);}
function APv(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B0(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,B(43));Fl(c,e[d]);d=d+1|0;}B0(c,B(44));return N(c);}
function ASe(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);B0(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,B(43));f=e[d];AAd(c,c.Q,f);d=d+1|0;}B0(c,B(44));return N(c);}
function Hz(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BG;X(f);K(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ZJ(b,c,d,e){var f,g;if(c>d){e=new BG;X(e);K(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function AAr(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AVf;e=R(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Z(j,h+f|0);l=h+(2*f|0)|0;m=Z(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.mi(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ACe(b,c){return Ui(b,0,b.data.length,c);}
function Ui(b,c,d,e){var f,g,h,i,j;f=BE(c,d);if(f>0){g=new BG;X(g);K(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var Lt=F();
var AVx=null;var AVy=null;function Bw(){if(AVx===null)AVx=AMB(AVz,0);return AVx;}
function EW(){if(AVy===null)AVy=AMB(AVA,0);return AVy;}
function Eh(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=ACM(b)&&(e+f|0)<=ACM(d)){a:{b:{if(b!==d){g=Ih(Co(b));h=Ih(Co(d));if(g!==null&&h!==null){if(g===h)break b;if(!HZ(g)&&!HZ(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.f3;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ACp(n.constructor,o)?1:0)){R2(b,c,d,e,j);b=new IV;X(b);K(b);}j=j+1|0;k=m;}R2(b,c,d,e,f);return;}if(!HZ(g))break a;if(HZ(h))break b;else break a;}b=new IV;X(b);K(b);}}R2(b,c,
d,e,f);return;}b=new IV;X(b);K(b);}b=new Bz;X(b);K(b);}d=new GG;Bl(d,B(45));K(d);}
function R2(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function FH(){return Long_fromNumber(new Date().getTime());}
function ACQ(){return AVc($rt_globals.performance.now()*1000000.0);}
var JV=F(0);
var AAK=F();
function AR0(a,b){return a.we(b);}
function AG2(a){return a.xG();}
var ABg=F();
var FS=F(0);
var Th=F();
var C7=F();
var AVB=null;var AVC=null;var AVD=null;var AVE=null;var AVF=null;var AVG=null;var AVH=null;var AVI=null;var AVJ=null;var AVK=null;function Xo(b){var c,d;c=new Bv;d=BN(1);d.data[0]=b;Hs(c,d);return c;}
function L8(b){return b>=65536&&b<=1114111?1:0;}
function CF(b){return (b&64512)!=55296?0:1;}
function C4(b){return (b&64512)!=56320?0:1;}
function Mb(b){return !CF(b)&&!C4(b)?0:1;}
function Hr(b,c){return CF(b)&&C4(c)?1:0;}
function Eu(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Id(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function IU(b){return (56320|b&1023)&65535;}
function EX(b){return GF(b)&65535;}
function GF(b){if(AVE===null){if(AVH===null)AVH=ACK();AVE=AA2((AVH.value!==null?$rt_str(AVH.value):null));}return SV(AVE,b);}
function Ey(b){return GD(b)&65535;}
function GD(b){if(AVD===null){if(AVI===null)AVI=ADz();AVD=AA2((AVI.value!==null?$rt_str(AVI.value):null));}return SV(AVD,b);}
function SV(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BE(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function U9(b,c){if(c>=2&&c<=36){b=O3(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function O3(b){var c,d,e,f,g,h,i,j,k,l;if(AVC===null){if(AVJ===null)AVJ=AA7();c=(AVJ.value!==null?$rt_str(AVJ.value):null);d=APd(Gy(c));e=JT(d);f=BK(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Nd(d)|0;j=j+Nd(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AVC=f;}g=AVC.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BE(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Hj(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gv(b){var c;if(b<65536){c=BN(1);c.data[0]=b&65535;return c;}return ABb([Id(b),IU(b)]);}
function Cw(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Mb(b&65535))return 19;if(AVF===null){if(AVK===null)AVK=AED();d=(AVK.value!==null?$rt_str(AVK.value):null);e=R(Nr,16384);f=e.data;g=DW(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=KK(L(d,l));if(m==64){l=l+1|0;m=KK(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|V(c,KK(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=KK(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AIT(k,k+i|0,AD4(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AIT(k,k+i|0,AD4(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AVF=Dk(e,j);}e=AVF.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.rq)o=p+1|0;else{c=d.pd;if(b>=c)return d.pq.data[b-c|0];c=p-1|0;}}return 0;}
function JC(b){a:{switch(Cw(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Gq(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cw(b)!=16?0:1;}
function Pw(b){switch(Cw(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Rf(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Pw(b);}return 1;}
function Y6(){AVB=E($rt_charcls());AVG=R(C7,128);}
function ACK(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ADz(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AA7(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AED(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var MA=F(0);
var SU=F(0);
var Ei=F(0);
var ADM=F(0);
function D$(){return $rt_globals.window.document;}
var GG=F(Bq);
function NR(){var a=this;C.call(a);a.pf=null;a.pg=null;a.ph=null;}
function AOg(a,b){var c,d,e;c=a.pf;d=a.pg;e=a.ph;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=d.sL;b.ra=c;if(b.uR)ABr(c);}}
var ACb=F();
function ACM(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AVL());}return b.data.length;}
function U1(b,c){if(b===null){b=new GG;X(b);K(b);}if(b===E($rt_voidcls())){b=new BG;X(b);K(b);}if(c>=0)return ARg(b.f3,c);b=new Yx;X(b);K(b);}
function ARg(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var ABd=F();
function Fz(){return AR1();}
function AR1(){return Math.random();}
function Z(b,c){if(b<c)c=b;return c;}
function Bb(b,c){if(b>c)c=b;return c;}
function MK(b){if(b<=0)b= -b|0;return b;}
var Bz=F(Bq);
var IV=F(Bq);
var Pl=F(0);
var Ru=F(0);
var Rj=F(0);
var TY=F(0);
var Xx=F(0);
var U$=F(0);
var OG=F(0);
var Y9=F();
function ALE(a,b,c){a.Ew($rt_str(b),Lo(c,"handleEvent"));}
function AL4(a,b,c){a.BA($rt_str(b),Lo(c,"handleEvent"));}
function AF3(a,b){return a.we(b);}
function ANe(a,b,c,d){a.zQ($rt_str(b),Lo(c,"handleEvent"),d?1:0);}
function AQ7(a,b){return !!a.EB(b);}
function AG5(a){return a.xG();}
function AFh(a,b,c,d){a.C8($rt_str(b),Lo(c,"handleEvent"),d?1:0);}
var BG=F(Bq);
var Yx=F(Bq);
var Hh=F(Bz);
var AAg=F();
function ABn(){return "ping";}
var OF=F(0);
function S3(){var a=this;C.call(a);a.qc=null;a.rX=null;a.mp=null;a.m2=null;a.dP=null;a.tW=null;a.m9=null;a.lC=null;a.gg=null;a.iw=0;a.wV=0;a.rj=null;a.fy=null;a.qE=null;a.l3=null;a.sN=0;}
function AC4(a){a.dP.focus();}
function NB(a,b){var c;c=D$();b=$rt_ustr(b);c.title=b;}
function AAz(a){var b,c,d;b=new MB;c=a.gg;d=a.lC.cp;b.be=c;b.m=d;b.bT=a;return b;}
function TF(a){a.wV=$rt_globals.requestAnimationFrame(Bk(a.rX,"onAnimationFrame"));}
function F8(a){a.iw=1;}
function TE(a,b,c){var d,e;a.lC.dF=B3(b,c);d=a.dP;e=b;d.width=e;d=a.dP;e=c;d.height=e;d=a.gg;T(d.dq,b,c);e=d.bq;d=d.dq;b=d.b;c=d.a;e.viewport(0,0,b,c);a.fy.b6(a.gg.dq,KL(a));a.fy.bB();}
function Gx(a,b){var c,d,e;c=a.rj;d=a.dP;if(C6(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.rj=b;}
function JA(a){return $rt_globals.performance.now()/1000.0;}
function KL(a){return $rt_globals.window.devicePixelRatio;}
function Wq(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEe(b,1);else{c=new Xa;d=$rt_globals.window.showDirectoryPicker();e=new W_;e.pi=b;e.pj=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function LW(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEe(b,0);else{c=new XJ;d=$rt_globals.window.showOpenFilePicker();e=new XI;e.qa=b;e.p_=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function CP(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.sN+1|0;a.sN=e;f=a.l3;g=F4(e);f.hS=L$(f,f.hS,g);g=Vh(f,g);MC(g,b);MC(g,b);f.jO=f.jO+1|0;b=a.qE;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bv)f=$rt_ustr(c);else if(IO(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(IO(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(IO(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof K$)){b=new BG;c=Ia(Co(c));f
=new M;O(f);G(G(f,B(46)),c);Bl(b,N(f));K(b);}c=c;f=c.gR;if(f===null)f=c.fg;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function Q4(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new QP;e.nd=b;b=AEL(c);d.then(Bk(e,"f"),Bk(b,"f"));}
function UH(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.qc;b=(Gy(b)).data;f=f.decode(b);b=e.writeText(f);e=new UZ;e.ss=c;c=AEL(d);b.then(Bk(e,"f"),Bk(c,"f"));}
function X0(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AEL(b){var c;c=new MU;c.sE=b;return c;}
var B6=F(0);
var R6=F();
function ABG(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(Bn(B(47),c)){d=new Ng;Ek(d,b);b=$rt_globals.fetch("test.wasm");e=new Np;b=b.then(Bk(e,"f"));e=new No;b=b.then(Bk(e,"f"));e=new Nn;f=new Nm;b.then(Bk(e,"f"),Bk(f,"f"));}else if(!Bn(B(48),c))d=(APZ(I(c)<=0?B(31):Dj(c,1))).bY(b);else{d=new Wg;ABe(d,b);d.z.ef=1;d.B.ef=1;c=new Yc;c.ux=d;Ws(d,c,B(49));c=new Ye;c.ox=d;Ws(d,c,B(50));}return d;}
var Bi=F(0);
var ABz=F();
var ABa=F();
var Rn=F(0);
function V6(){C.call(this);this.oU=null;}
function AKd(a,b){var c,d;c=b;b=a.oU;if(!(!b.fy.cN(c/1000.0)&&!b.iw)){d=b.gg.dq;if(V(d.b,d.a)){b.iw=0;b.fy.bB();}}TF(b);}
function VZ(){C.call(this);this.u8=null;}
function Dg(a){F8(a.u8);}
var Qa=F(0);
function V0(){C.call(this);this.rM=null;}
function AIk(a,b,c){var d,e,f,g;c=a.rM;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dP){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=KL(c);TE(c,Hm(f.width*g),Hm(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];TE(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var ADV=F();
function APH(b,c){AOG(b,c,AFt());}
function AFt(){return {box:'device-pixel-content-box'};}
function AOG(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cl=F(0);
function VX(){C.call(this);this.og=null;}
function AOo(a,b){b=a.og;b.fy.b6(b.gg.dq,KL(b));b.fy.bB();}
var K6=F(0);
function EC(){C.call(this);this.kx=null;}
var Em=F(0);
var XZ=F(0);
var Na=F(0);
function O9(){var a=this;EC.call(a);a.hS=null;a.jK=null;a.xW=null;a.jO=0;}
function Vh(a,b){var c,d;c=a.hS;while(true){if(c===null)return null;d=JD(a.jK,b,c.i_);if(!d)break;c=d>=0?c.b4:c.bQ;}return c;}
function L$(a,b,c){var d,e;if(b===null){b=new Jz;d=null;b.i_=c;b.iz=d;b.fD=1;b.fM=1;return b;}e=JD(a.jK,c,b.i_);if(!e)return b;if(e>=0)b.b4=L$(a,b.b4,c);else b.bQ=L$(a,b.bQ,c);Ej(b);return JS(b);}
function Ke(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=JD(a.jK,c,b.i_);if(d<0)b.bQ=Ke(a,b.bQ,c);else if(d>0)b.b4=Ke(a,b.b4,c);else{e=b.b4;if(e===null)return b.bQ;f=b.bQ;g=R(Jz,e.fD).data;h=0;while(true){b=e.bQ;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b4;while(h>0){h=h+(-1)|0;j=g[h];j.bQ=b;Ej(j);b=JS(j);}e.b4=b;e.bQ=f;Ej(e);b=e;}Ej(b);return JS(b);}
function VY(){C.call(this);this.t6=null;}
function APE(a,b){var c,d,e,f,g,h,i,j,k;c=a.t6.l3;b=b.data;if(!(b===ABn()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BG;X(b);K(b);}if(b.length<1){b=new BG;X(b);K(b);}d=F4(b[0]);e=Vh(c,d);if(e===null)c=null;else{c.hS=Ke(c,c.hS,d);c.jO=c.jO+1|0;c=e.iz;}f=R(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=FF(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new Tc;ADA(e);e.hw=k;}else e=(k instanceof $rt_globals.File?1:0)?ACh(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:ACh(k,null);g[h]=e;h=j;}c.l(f);}}
function Pu(){var a=this;C.call(a);a.cp=null;a.hd=null;a.xa=null;a.dF=null;}
function M9(){return (D$()).activeElement;}
function CT(a,b,c,d){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"));return Xk(a,b,c,d);}
function ACw(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"),!!e);return Xk(a,b,c,d);}
function Xk(a,b,c,d){var e;e=new P8;e.v6=b;e.v8=c;e.v7=d;return e;}
function Ud(a,b){var c;c=new Vk;c.u2=b;return c;}
function ED(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.hd.getBoundingClientRect();e=B3(Hm((b.clientX-d.left)*c),Hm((b.clientY-d.top)*c));f=new Bf;g=a.dF;f.b=g.b;f.a=g.a;d=new Mx;UI(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.h=e;d.vO=f;return d;}
function Yl(a,b,c){var d,e,f,g;d=new O0;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;UI(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j9=0;d.dR=e;d.bk=f;d.hE=c;d.rZ=g;return d;}
function DM(a,b){b.stopPropagation();b.preventDefault();}
function AAH(a,b){var c;c=new XW;c.pA=b;b.onpointerdown=Bk(c,"f");c=new XX;c.oj=b;b.onpointerup=Bk(c,"f");}
function Lk(){var a=this;C.call(a);a.rh=null;a.cF=null;a.bq=null;a.s6=null;a.wy=0;a.xD=0;a.jR=null;a.yb=null;a.xT=null;a.wT=null;a.gk=null;a.hD=null;a.gN=null;a.x1=null;a.o4=null;a.dq=null;a.uL=null;a.lu=0;a.j5=0;a.ma=0;a.lV=0;a.ig=0;a.l9=null;}
function Hq(a,b,c){return GX(a,b,c,400,0);}
function CK(a,b,c){return MJ(a.rh,b,c);}
function Fv(a,b){var c,d,e,f,g;c=a.bq;d=b.bn;e=b.bG;f=b.bl;g=b.bH;c.clearColor(d,e,f,g);a.bq.clear(16384);}
function Ct(a,b){var c;if(b==a.j5)return b;if(!b)a.bq.disable(3042);else{a.bq.enable(3042);a.bq.blendFuncSeparate(770,771,1,1);}c=a.j5;a.j5=b;return c;}
function R1(a,b,c){LD(a,b.b,b.a,c);}
function LD(a,b,c,d){P6(a,b,c,d.b,d.a);}
function P6(a,b,c,d,e){a.lV=1;a.ig=1;Xt(a.l9,b,c,d,e);UJ(a);}
function FI(a){a.lV=0;a.ig=0;UJ(a);}
function UJ(a){var b,c,d,e,f,g;b=a.ma;c=a.lV;if(b!=c){a.ma=c;if(!c)a.bq.disable(3089);else a.bq.enable(3089);}if(a.ma&&a.ig){a.ig=0;d=a.bq;e=a.l9;b=e.dj;c=a.dq.a-e.i9|0;f=e.i8;c=c-f|0;g=e.eL;d.scissor(b,c,g,f);}}
function Ii(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.o4;c=a.lu;d=b.gx.sy;e=b.el;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.el;h=b.m6;e.bindBuffer(34962,h);i=b.gx.mu.data;g=i.length;j=0;while(j<g){k=i[j];l=b.el;m=k.hl;n=k.e$;o=b.gx.kH*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.e$|0;j=j+1|0;}a:{e=b.u5;if(e!==null){c=0;b.el.bindBuffer(34962,e);i=b.gx.rd.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.el;j=e.hl;p=e.e$;m=e.pa;n=b.gx.pu;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.e$|0;g=g+1|0;}}}q=b.up;if(q===null){c=b.r4;if(c>0)b.el.drawArrays(4,0,c);}else{b.el.bindBuffer(34963,q);k=b.el;g=b.uE;k.drawElements(4,g,5123,0);}a.lu=d;}
function Bt(a,b,c,d,e){In(a,a.jR);I$(a.jR,a.bq,b,c,d,a.dq);d=a.jR;GK(a.bq,d.t5,e);Ii(a);}
function YC(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;In(a,a.gN);I$(a.gN,a.bq,b,c,d,a.dq);j=a.gN;d=a.bq;k=j.my;l=e.b;m=e.a;n=f.b;o=f.a;d.uniform4f(k,l,m,n,o);e=j.mx;l=g.b;o=g.a;m=h.b;n=h.a;d.uniform4f(e,l,o,m,n);d=a.gN;GK(a.bq,d.nR,i);Ii(a);}
function EI(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;In(a,a.gk);I$(a.gk,a.bq,b,c,d,a.dq);UE(a.gk,a.bq,f);d=a.gk;j=a.bq;f=f.fH;b=f.b;c=f.a;k=e.bn;l=b;m=k/l;k=e.bG;n=c;o=k/n;k=e.bl/l;l=e.bH/n;d=d.tH;j.uniform4f(d,m,o,k,l);d=a.gk;e=a.bq;GK(e,d.pJ,g);GK(e,d.nx,h);d=d.oI;e.uniform2f(d,i,0.0);Ii(a);}
function CV(a){var b,c;b=new Jy;c=a.s6;b.fH=new Bf;b.d$=c;b.e4=c.dx.createTexture();AVM=AVM+1|0;return b;}
function NW(a,b){Xz(a.bq,b);}
function In(a,b){var c,d;if(b!==a.uL){c=a.bq;d=b.bX;c.useProgram(d);a.uL=b;}}
function ADm(){var a=this;Lk.call(a);a.xe=null;a.xU=null;}
function ATn(a,b){var c=new ADm();AKA(c,a,b);return c;}
function AKA(a,b,c){var d,e,f,g,h,i,j,k,l;d=new UM;a.dq=new Bf;a.lu=0;a.l9=new LZ;a.rh=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(51)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bq=b;a.cF=MJ(d,4,4);g=AE9(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BN(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;f=new P$;JO();k=AVN;f.el=b;f.gx=k;f.r4=h.length/k.kH|0;f.uE
=j.length;k=b.createBuffer();f.m6=k;b.bindBuffer(34962,k);k=g.data;b.bufferData(34962,k,35044);f.u5=null;k=b.createBuffer();f.up=k;if(k!==null){b.bindBuffer(34963,k);k=i.data;b.bufferData(34963,k,35044);}k=null;b.bindBuffer(34962,k);k=null;b.bindBuffer(34963,k);a.o4=f;a.xD=KJ(e,B(52));f=new P_;f.dx=b;a.s6=f;l=b.getParameter(3379);a.wy=l;f=new M;O(f);U(G(f,B(53)),l);$rt_globals.console.info($rt_ustr(N(f)));g=R(Dw,7);i=g.data;d=new WD;IG(d,b,B(54),B(55),AVN);f=d.bX;d.t5=b.getUniformLocation(f,"uColor");a.jR=d;i[0]
=d;f=AST(b,B(56));a.yb=f;i[1]=f;f=ATN(b);a.xT=f;i[2]=f;f=AUd(b);a.wT=f;i[3]=f;f=ATo(b);a.gk=f;i[4]=f;f=AUo(b);a.hD=f;i[5]=f;f=AUa(b);a.gN=f;i[6]=f;a.x1=g;Xz(b,B(57));a.xU=new UK;a.xe=c;}
function GX(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=a.cF;g=Z9(b,c,d,e);Jm(f,g);h=f.br.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Eq(f,B(58));m=Eq(f,B(59));h=new K_;h.mf=b;h.wf=c;n=c|0;if(n!==c){b=new M;O(b);Fl(G(b,B(60)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.o$=n;h.wm=d;h.wR=e;h.dD=i;h.ev=j;h.wc=l;h.l4=k;h.na=g;h.q_=Df(i);h.xM=Df(h.ev);d=m*32.0|0;n=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;a:{h.wj=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(61);}h.v5=b;return h;}
function Cx(){C.call(this);this.bc=null;}
function Ek(a,b){a.bc=b;}
function ARH(a,b){return 0;}
var Jf=F();
var AVf=null;function JD(a,b,c){return b.jQ(c);}
function ABL(){AVf=new Jf;}
function AAm(){var a=this;C.call(a);a.b2=null;a.mr=null;a.bu=null;a.dm=null;a.ey=null;a.fI=null;a.ga=null;a.jI=null;a.kn=null;a.c3=null;a.hB=null;a.od=0;}
function AT0(a){var b=new AAm();ANS(b,a);return b;}
function ANS(a,b){a.b2=CI(R(Cm,0));a.mr=CI(R(Cm,0));a.bu=CI(R(Cr,0));a.dm=CI(R(DF,0));a.ey=CI(R(Ex,0));a.fI=CI(R(EJ,0));a.ga=CI(R(E_,0));a.jI=CI(R(Bi,0));a.kn=CI(R(Bi,0));a.c3=b;}
function Uk(a,b){var c,d,e,f;Dg(a.c3);c=(Cp(!b.hE?a.mr:a.b2)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bz(b);if(f)break;if(b.j9)break;e=e+1|0;}return f;}
function Q1(a,b,c){var d,e,f;Dg(a.c3);d=(Cp(a.fI)).data;e=d.length;f=0;while(f<e){if(d[f].gB(b,c))return 1;f=f+1|0;}return 0;}
function WT(){C.call(this);this.no=null;}
function ANO(a,b){var c;c=a.no;if(Uk(c.cp,Yl(c,b,1)))DM(c,b);}
function WU(){C.call(this);this.sq=null;}
function AN5(a,b){var c;c=a.sq;if(Uk(c.cp,Yl(c,b,0)))DM(c,b);}
function WV(){C.call(this);this.oD=null;}
function AMk(a,b){var c,d,e,f,g,h,i;c=a.oD;if(c.dF!==null){a:{b:{d=ED(c,b);e=c.cp;Dg(e.c3);f=e.hB;if(f!==null)f.l(d);else{g=(Cp(e.bu)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bL(d))break a;i=i+1|0;}}}}DM(c,b);}}
function WW(){C.call(this);this.u3=null;}
function ALF(a,b){var c,d,e,f,g,h;c=a.u3;b.button;if(c.dF!==null)a:{d=ED(c,b);c=c.cp;e=b.button;Dg(c.c3);if(c.hB===null){f=(Cp(c.bu)).data;g=f.length;h=0;while(h<g){b=f[h].b_(d,e);if(b!==null){c.hB=b;c.od=e;break a;}h=h+1|0;}}}}
function WX(){C.call(this);this.ry=null;}
function AL8(a,b){var c,d,e,f,g,h,i;c=a.ry;b.button;if(c.dF!==null){d=ED(c,b);e=c.cp;f=b.button;Dg(e.c3);if(f==e.od&&e.hB!==null)e.hB=null;g=(Cp(e.bu)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cO(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DM(c,b);}}
function WY(){C.call(this);this.nT=null;}
function AOD(a,b){var c,d,e,f,g,h,i,j,k;c=a.nT;if(c.dF!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cp;f=ED(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dg(e.c3);i=(Cp(e.dm)).data;j=i.length;k=0;b:{while(k<j){if(i[k].c1(f,d,h))break b;k=k+1|0;}}DM(c,b);}}
function WZ(){C.call(this);this.vg=null;}
function AJS(a,b){var c,d,e,f,g,h,i,j;c=a.vg;if(c.dF!==null){d=ED(c,b);e=c.cp;f=b.button;g=b.detail;Dg(e.c3);h=(Cp(e.bu)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cs(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DM(c,b);}}
function W0(){C.call(this);this.rP=null;}
function AR7(a,b){var c,d,e,f,g,h,i;c=a.rP;if(c.dF!==null){d=ED(c,b);e=c.cp;Dg(e.c3);f=(Cp(e.ey)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bz(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DM(c,b);}}
function W1(){C.call(this);this.n6=null;}
function AI5(a,b){var c,d,e;b=a.n6.cp;c=(Cp(b.kn)).data;d=c.length;e=0;while(e<d){c[e].q();e=e+1|0;}Dg(b.c3);}
function W2(){C.call(this);this.ud=null;}
function APN(a,b){var c,d,e;b=a.ud.cp;c=(Cp(b.jI)).data;d=c.length;e=0;while(e<d){c[e].q();e=e+1|0;}Dg(b.c3);}
function Yg(){C.call(this);this.tG=null;}
function ARI(a,b){var c;c=a.tG;if(c.dF!==null)ED(c,b);}
function Yh(){C.call(this);this.sG=null;}
function ALU(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.sG;if(M9()===c.hd){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cp(c.cp.ga)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dt();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cp.c3;m=new NK;m.ur=k;m.us=l;g.getAsString(Bk(m,"accept"));DM(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(62)),k),B(63)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function Yi(){C.call(this);this.mL=null;}
function AMo(a,b){var c;c=a.mL;if(M9()===c.hd&&Q1(c.cp,Ud(c,b),0))DM(c,b);}
function Yj(){C.call(this);this.uA=null;}
function AOi(a,b){var c;c=a.uA;if(M9()===c.hd&&Q1(c.cp,Ud(c,b),1))DM(c,b);}
var Uz=F(0);
var UM=F();
function MJ(a,b,c){var d,e,f;d=new RE;AVw=AVw+1|0;d.lP=b;d.kY=c;e=(D$()).createElement("canvas");d.jP=e;f=b;e.width=f;e=d.jP;f=c;e.height=f;d.br=d.jP.getContext("2d");return d;}
var UK=F();
function AKX(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function MB(){var a=this;C.call(a);a.be=null;a.m=null;a.bT=null;}
function AD8(){var a=this;C.call(a);a.hi=null;a.iP=null;a.g9=0;}
function CI(a){var b=new AD8();AJM(b,a);return b;}
function AJM(a,b){a.hi=b;}
function Y(a,b){var c,d,e;c=a.g9;d=a.hi;if(c==d.data.length)a.hi=Dk(d,c+4|0);d=a.hi.data;e=a.g9;a.g9=e+1|0;d[e]=b;a.iP=null;}
function Cp(a){var b;b=a.iP;if(!(b!==null&&b.data.length==a.g9))a.iP=Dk(a.hi,a.g9);return a.iP;}
var IZ=F(0);
var Cm=F(0);
var Cr=F(0);
function AK2(a,b){return 0;}
function AQO(a,b,c){return null;}
function AFL(a,b,c){return 0;}
function AOB(a,b,c,d){return 0;}
var DF=F(0);
var Ex=F(0);
var EJ=F(0);
var EO=F(0);
var E_=F(0);
function Qj(){C.call(this);this.wu=null;}
function Bf(){var a=this;C.call(a);a.b=0;a.a=0;}
function B3(a,b){var c=new Bf();Py(c,a,b);return c;}
function Py(a,b,c){a.b=b;a.a=c;}
function Cv(a,b){a.b=b.b;a.a=b.a;}
function T(a,b,c){a.b=b;a.a=c;}
function YD(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);U(G(U(G(d,B(64)),b),B(65)),c);return N(d);}
function Lb(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function LZ(){var a=this;C.call(a);a.dj=0;a.i9=0;a.eL=0;a.i8=0;}
function Xt(a,b,c,d,e){a.dj=b;a.i9=c;a.eL=d;a.i8=e;}
var ADl=F();
var ZA=F(0);
function P_(){C.call(this);this.dx=null;}
function LH(){var a=this;C.call(a);a.bX=null;a.xO=null;}
function ACg(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(66):B(67);g=$rt_str(b.getShaderInfoLog(e));h=new M;O(h);G(G(h,f),g);g=N(h);b.deleteShader(e);Bo(Bw(),g);Bo(EW(),B(68));Bo(EW(),d);Bo(EW(),B(68));b=new Bq;Bl(b,g);K(b);}
function Dw(){var a=this;LH.call(a);a.n5=null;a.pG=null;a.lH=null;}
function AVO(a,b,c,d){var e=new Dw();IG(e,a,b,c,d);return e;}
function IG(a,b,c,d,e){var f,g,h,i,j,k;a.xO=e;f=ACg(b,35633,c);d=ACg(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bX=g;h=e.sd.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bX;k=c.hl;c=c.p0;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bX;b.linkProgram(c);if(b.getProgramParameter(c,35714)){Xz(b,B(69));a.lH=new Bf;c=a.bX;a.n5=b.getUniformLocation(c,"uResolution");c=a.bX;a.pG=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bq;c=new M;O(c);G(G(c,B(70)),d);Bl(b,N(c));K(b);}
function AAo(a,b,c){var d,e,f;if(!Lb(a.lH,c)){Cv(a.lH,c);d=a.n5;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function I$(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.pG;b.uniform4f(e,i,l,h,j);AAo(a,b,f);}
function WD(){Dw.call(this);this.t5=null;}
function EB(){Dw.call(this);this.rv=null;}
function AST(a,b){var c=new EB();Uh(c,a,b);return c;}
function AVP(a,b,c){var d=new EB();Ul(d,a,b,c);return d;}
function Uh(a,b,c){Ul(a,b,B(54),c);}
function Ul(a,b,c,d){JO();IG(a,b,c,d,AVN);c=a.bX;a.rv=b.getUniformLocation(c,"sDiffuse");}
function UE(a,b,c){var d;d=a.rv;b.uniform1i(d,0);b.activeTexture(33984);c=c.e4;b.bindTexture(3553,c);}
var AA3=F(Dw);
function ATN(a){var b=new AA3();ARd(b,a);return b;}
function ARd(a,b){JO();IG(a,b,B(54),B(71),AVN);}
function AC1(){EB.call(this);this.wD=null;}
function AUd(a){var b=new AC1();AJa(b,a);return b;}
function AJa(a,b){var c;Uh(a,b,B(72));c=a.bX;a.wD=b.getUniformLocation(c,"uContrast");}
function ACA(){var a=this;EB.call(a);a.tH=null;a.pJ=null;a.nx=null;a.oI=null;}
function ATo(a){var b=new ACA();AOx(b,a);return b;}
function AOx(a,b){var c;Ul(a,b,B(73),B(74));c=a.bX;a.tH=b.getUniformLocation(c,"uTexTransform");c=a.bX;a.pJ=b.getUniformLocation(c,"uColor");c=a.bX;a.nx=b.getUniformLocation(c,"uBgColor");c=a.bX;a.oI=b.getUniformLocation(c,"uContrast");}
function ZT(){var a=this;EB.call(a);a.u6=null;a.u4=null;a.ql=null;}
function AUo(a){var b=new ZT();AIA(b,a);return b;}
function AIA(a,b){var c,d;Uh(a,b,B(75));c=a.bX;a.u6=b.getUniformLocation(c,"uColorB");d=a.bX;a.u4=b.getUniformLocation(d,"uColorF");d=a.bX;a.ql=b.getUniformLocation(d,"uContrast");}
function ACy(){var a=this;Dw.call(a);a.nR=null;a.my=null;a.mx=null;}
function AUa(a){var b=new ACy();AIB(b,a);return b;}
function AIB(a,b){var c;JO();IG(a,b,B(54),B(76),AVN);c=a.bX;a.nR=b.getUniformLocation(c,"uColor");c=a.bX;a.my=b.getUniformLocation(c,"uPoints1");c=a.bX;a.mx=b.getUniformLocation(c,"uPoints2");}
var Sd=F(0);
var AEM=F(0);
function GK(b,c,d){var e,f,g,h;e=d.bn;f=d.bG;g=d.bl;h=d.bH;b.uniform4f(c,e,f,g,h);}
function Xz(b,c){var d,e;d=b.getError();if(d){b=Bw();e=new M;O(e);U(G(e,c),d);Bo(b,N(e));}}
function P8(){var a=this;C.call(a);a.v6=null;a.v8=null;a.v7=null;}
function P$(){var a=this;C.call(a);a.el=null;a.gx=null;a.m6=null;a.u5=null;a.up=null;a.r4=0;a.uE=0;}
function Cj(){var a=this;C.call(a);a.v3=null;a.eS=0;}
function C_(a,b,c){a.v3=b;a.eS=c;}
function GS(){var a=this;Cj.call(a);a.sd=null;a.mu=null;a.rd=null;a.kH=0;a.pu=0;a.sy=0;}
var AVN=null;var AVQ=null;function JO(){JO=Bm(GS);AKr();}
function AKr(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new GS;c=R(DX,2);d=c.data;AQ0();d[0]=AVR;d[1]=AVS;JO();C_(b,B(77),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.lY.eS){case 0:f=f+l.e$|0;h=h+1|0;break a;case 1:e=e+l.e$|0;g=g+1|0;break a;default:}}i=i|1<<l.hl;k=k+1|0;}b.sd=c;b.kH=e;b.pu=f;b.sy=i;c=R(DX,g);m=c.data;b.mu=c;c=R(DX,h);n=c.data;b.rd=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.lY.eS){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}AVN
=b;c=R(GS,1);c.data[0]=b;AVQ=c;}
var Mk=F(0);
var TG=F(0);
var U0=F(0);
var Gs=F();
function Jw(){Gs.call(this);this.vA=null;}
function AAP(){var a=this;Jw.call(a);a.xA=0;a.kT=0;a.iJ=null;a.kr=null;a.sX=null;}
function AMB(a,b){var c=new AAP();AQI(c,a,b);return c;}
function AQI(a,b,c){a.vA=b;b=new M;O(b);a.iJ=b;a.kr=BN(32);a.xA=c;AAE();a.sX=AVT;}
function TT(a,b,c,d){var e,$$je;e=a.vA;if(e===null)a.kT=1;if(!(a.kT?0:1))return;a:{try{e.kg(b,c,d);break a;}catch($$e){$$je=Eg($$e);if($$je instanceof IA){}else{throw $$e;}}a.kT=1;}}
function N6(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ABx(b,c,d-c|0);e=DW(Bb(16,Z(e.length,1024)));g=ABm(e,0,e.data.length);h=a.sX;i=new Pr;b=DW(1);j=b.data;j[0]=63;Hf();k=AVU;i.lL=k;i.kZ=k;c=j.length;if(c&&c>=i.mv){i.vY=h;i.pV=b.gJ();i.xp=2.0;i.mv=4.0;i.o_=BN(512);i.nQ=DW(512);k=AVV;if(k===null){i=new BG;Bl(i,B(78));K(i);}i.lL=k;i.kZ=k;a:while(true){if(i.iF==3){f=new D0;X(f);K(f);}i.iF=2;b:{while(true){try{k=Zn(i,f,g);}catch($$e){$$je=Eg($$e);if($$je instanceof Bq){f=$$je;break a;}else{throw $$e;}}if(Im(k))
{d=B8(f);if(d<=0)break b;k=D1(d);}else if(Hc(k))break;h=!L5(k)?i.lL:i.kZ;c:{if(h!==AVV){if(h===AVW)break c;else break b;}d=B8(g);b=i.pV;l=b.data.length;if(d<l){k=AVX;break b;}Xm(g,b,0,l);}EF(f,f.X+Kh(k)|0);}}l=Hc(k);TT(a,e,0,g.X);N4(g);if(!l){while(true){d=i.iF;if(d!=2&&d!=4){f=new D0;X(f);K(f);}f=AVY;if(f===f)i.iF=3;l=Hc(f);TT(a,e,0,g.X);N4(g);if(!l)break;}return;}}K(AHM(f));}i=new BG;Bl(i,B(79));K(i);}
function Bo(a,b){var c,d,e,f,g,h,i,j;BD(B0(a.iJ,b),10);b=a.iJ;c=b.Q;d=a.kr;if(c>d.data.length)d=BN(c);e=0;f=0;if(e>c){b=new Bz;Bl(b,B(80));K(b);}while(e<c){g=d.data;h=f+1|0;i=b.D.data;j=e+1|0;g[f]=i[e];f=h;e=j;}N6(a,d,0,c);a.iJ.Q=0;}
function Gf(){Gs.call(this);this.xf=null;}
function Yq(a){a.xf=DW(1);}
var Ls=F(Gf);
var AVz=null;function AKP(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function ACP(){var b;b=new Ls;Yq(b);AVz=b;}
function DX(){var a=this;Cj.call(a);a.p0=null;a.lY=null;a.e$=0;a.pa=0;a.hl=0;}
var AVR=null;var AVS=null;var AVZ=null;function AQ0(){AQ0=Bm(DX);AJx();}
function ATA(a,b,c,d,e,f,g){var h=new DX();Wv(h,a,b,c,d,e,f,g);return h;}
function Wv(a,b,c,d,e,f,g,h){AQ0();C_(a,b,c);a.p0=d;a.lY=e;a.e$=f;a.pa=g;a.hl=h;}
function AJx(){var b;b=new DX;AMe();Wv(b,B(81),0,B(82),AV0,2,0,0);AVR=b;b=ATA(B(83),1,B(84),AV0,2,0,1);AVS=b;AVZ=H(DX,[AVR,b]);}
function Jn(){var a=this;C.call(a);a.vN=null;a.wG=null;}
function AC7(b){var c,d;if(Fq(b))K(AAJ(b));if(!AC$(L(b,0)))K(AAJ(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AC$(d))break a;else K(AAJ(b));}}c=c+1|0;}}
function AC$(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Mn=F(Jn);
var AVT=null;function AAE(){AAE=Bm(Mn);AIx();}
function ADr(a){var b,c;b=new TU;b.e7=B(85);Hf();c=AVU;b.g1=c;b.lS=c;b.ww=a;b.mH=0.3333333432674408;b.wU=0.5;b.nY=DW(512);b.sp=BN(512);return b;}
function AIx(){var b,c,d,e,f;b=new Mn;AAE();c=R(Bv,0);d=c.data;AC7(B(86));e=d.length;f=0;while(f<e){AC7(d[f]);f=f+1|0;}b.vN=B(86);b.wG=c.gJ();AVT=b;}
function Pc(){var a=this;C.call(a);a.fC=null;a.mk=null;a.j7=null;a.sK=null;a.pt=null;a.pM=null;}
function AAU(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.fC,b,c));}
function M3(a,b){var c,d,e,f,g,h,i,$$je;c=new Bv;d=b;while(a.mk[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.fC,b,d));f=e.data;EN();d=f.length;AAE();g=AVT;h=ABm(e,0,d);a:{try{i=ADr(g);Hf();g=ZK(ACk(ADZ(i,AVV),AVV),h);break a;}catch($$e){$$je=Eg($$e);if($$je instanceof FR){g=$$je;}else{throw $$e;}}h=new Xs;h.jp=1;h.jM=1;h.hz=B(87);h.k0=g;K(h);}if(!g.X&&g.dz==g.mh)c.b3=g.hk;else{f=BN(B8(g));e=f.data;c.b3=f;Nz(g,f,0,e.length);}return c;}
function M_(a,b){var c,d,e;c=new Bv;d=b>>>1|0;e=d;while(a.j7[e]){e=e+1|0;}d=e-d|0;Hs(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.fC,b,d)));return c;}
var GW=F(Cj);
var AV1=null;var AV0=null;var AV2=null;function AMe(){AMe=Bm(GW);AH1();}
function AIp(a,b){var c=new GW();ADs(c,a,b);return c;}
function ADs(a,b,c){AMe();C_(a,b,c);}
function AH1(){var b;AV1=AIp(B(88),0);b=AIp(B(89),1);AV0=b;AV2=H(GW,[AV1,b]);}
var KP=F(Gf);
var AVA=null;function AIJ(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AER(){var b;b=new KP;Yq(b);AVA=b;}
function ADd(){BG.call(this);this.v2=null;}
function AAJ(a){var b=new ADd();AQd(b,a);return b;}
function AQd(a,b){X(a);a.v2=b;}
var V7=F(D3);
var Mm=F(0);
function XW(){C.call(this);this.pA=null;}
function APg(a,b){a.pA.setPointerCapture(b.pointerId);}
function XX(){C.call(this);this.oj=null;}
function AGA(a,b){a.oj.releasePointerCapture(b.pointerId);}
function G8(){var a=this;C.call(a);a.mh=0;a.X=0;a.dz=0;a.hv=0;}
function Wt(a,b){a.hv=(-1);a.mh=b;a.dz=b;}
function EF(a,b){var c,d,e;if(b>=0&&b<=a.dz){a.X=b;if(b<a.hv)a.hv=0;return a;}c=new BG;d=a.dz;e=new M;O(e);BD(U(G(U(G(e,B(90)),b),B(91)),d),93);Bl(c,N(e));K(c);}
function B8(a){return a.dz-a.X|0;}
function DN(a){return a.X>=a.dz?0:1;}
var Sx=F(0);
var La=F(G8);
function AEr(b){var c,d;if(b>=0)return AN7(0,b,BN(b),0,b,0);c=new BG;d=new M;O(d);U(G(d,B(92)),b);Bl(c,N(d));K(c);}
function ABx(b,c,d){return AN7(0,b.data.length,b,c,c+d|0,0);}
function Nz(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bz;i=new M;O(i);U(G(U(G(i,B(93)),g),B(94)),f);Bl(h,N(i));K(h);}if(B8(a)<d){j=new LV;X(j);K(j);}if(d<0){j=new Bz;k=new M;O(k);G(U(G(k,B(95)),d),B(96));Bl(j,N(k));K(j);}g=a.X;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.hk.data[m+a.l6|0];l=l+1|0;c=n;m=o;}a.X=g+d|0;return a;}}b=b.data;j=new Bz;d=b.length;k=new M;O(k);BD(U(G(U(G(k,B(97)),c),B(91)),d),41);Bl(j,N(k));K(j);}
function Kc(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.ml){b=new Ja;X(b);K(b);}e=d-c|0;if(B8(a)<e){b=new H3;X(b);K(b);}if(c>I(b)){f=new Bz;d=I(b);b=new M;O(b);BD(U(G(U(G(b,B(98)),c),B(91)),d),41);Bl(f,N(b));K(f);}if(d>I(b)){f=new Bz;c=I(b);b=new M;O(b);U(G(U(G(b,B(99)),d),B(100)),c);Bl(f,N(b));K(f);}if(c>d){b=new Bz;f=new M;O(f);U(G(U(G(f,B(98)),c),B(101)),d);Bl(b,N(f));K(b);}g=a.X;while(c<d){h=g+1|0;i=c+1|0;SF(a,g,L(b,c));g=h;c=i;}a.X=a.X+e|0;return a;}
function JX(){var a=this;G8.call(a);a.kS=0;a.lA=null;a.w4=null;}
function ABm(b,c,d){var e,f,g;e=b.data;f=new Xl;g=e.length;d=c+d|0;Wt(f,g);AKx();f.w4=AV3;f.kS=0;f.lA=b;f.X=c;f.dz=d;f.w8=0;f.m0=0;return f;}
function Xm(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.m0){e=new Ja;X(e);K(e);}if(B8(a)<d){e=new H3;X(e);K(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bz;j=new M;O(j);U(G(U(G(j,B(102)),h),B(94)),g);Bl(i,N(j));K(i);}if(d<0){e=new Bz;i=new M;O(i);G(U(G(i,B(95)),d),B(96));Bl(e,N(i));K(e);}h=a.X;k=h+a.kS|0;l=0;while(l<d){b=a.lA.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.X=h+d|0;return a;}}b=b.data;e=new Bz;d=b.length;i=new M;O(i);BD(U(G(U(G(i,B(97)),c),B(91)),d),41);Bl(e,N(i));K(e);}
function N4(a){a.X=0;a.dz=a.mh;a.hv=(-1);return a;}
function HL(){C.call(this);this.x6=null;}
var AVW=null;var AVV=null;var AVU=null;function Hf(){Hf=Bm(HL);AL1();}
function AD$(a){var b=new HL();AC3(b,a);return b;}
function AC3(a,b){Hf();a.x6=b;}
function AL1(){AVW=AD$(B(103));AVV=AD$(B(104));AVU=AD$(B(105));}
var Ng=F(Cx);
function ALP(a){}
function AKg(a,b,c){}
function CR(){var a=this;Cx.call(a);a.gv=null;a.p=null;}
function Fi(a,b){var c,d,e;Ek(a,b);a.gv=Z6(0,0,64);c=new Yo;c.cb=new Bf;c.d5=CI(R(Ep,0));c.cX=new Bf;c.ok=new Bf;c.yC=new B5;c.yB=new B5;c.cC=b.be;d=b.bT;c.i1=d;c.cE=UX(d);d=b.m.kn;e=new MH;e.nB=c;Y(d,e);d=b.m.jI;e=new MI;e.qU=c;Y(d,e);a.p=c;Y(b.m.b2,new SC);b=b.m.b2;c=a.p;BO(c);d=new SD;d.sj=c;Y(b,d);}
function E6(a){Fv(a.bc.be,a.gv);}
function G2(a,b,c){var d,e,f,g,h;a:{d=a.p;Cv(d.cb,b);e=d.bR;if(e!==c){d.bR=c;f=(Cp(d.d5)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].gC(e,c);h=h+1|0;}}}}
var Qw=F(0);
var LI=F(0);
function AEl(a){a.ii(Kr());}
function LL(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new H0;c=new I5;d=new Hg;AM9();JU(d,AV4);Lq(c,d,BH(AV5),BH(AV6),BH(AV7),BH(AV5),BH(AV8),BH(AV9),BH(AV$),BH(AV_),BH(AWa),BH(AWb));ABD();e=(AWc.gJ()).data;f=e.length;g=R(IP,f);h=g.data;i=0;while(i<f){h[i]=e[i].kG;i=i+1|0;}j=AA0(Q(B(106)),Q(B(107)),Q(B(108)),Q(B(109)));k=new H_;l=new HH;AJY();m=AWd;J1(l,m,AWe,AWf,AWg,AWh,m);K8(k,l,AAQ(),Zy(Q(B(110)),Q(B(111)),Q(B(112))),AAQ(),ZP(1,0.17499999701976776),AWi,AWj);LT(b,c,g,j,k,ADq(Q(B(113)),Q(B(114)),Q(B(115)),Q(B(116))));a.ii(b);}
function ADP(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new H0;c=new I5;d=new Hg;ABW();JU(d,AWk);Lq(c,d,BH(AWl),BH(AWm),BH(AWn),BH(AWl),BH(AWo),BH(AWp),BH(AWq),BH(AWr),BH(AWs),BH(AWt));AAl();e=(AWu.gJ()).data;f=e.length;g=R(IP,f);h=g.data;i=0;while(i<f){h[i]=e[i].lf;i=i+1|0;}j=AA0(Q(B(117)),Q(B(118)),Q(B(119)),Q(B(120)));k=new H_;l=new HH;AOU();m=AWv;J1(l,m,AWw,AWx,AWy,AWz,m);K8(k,l,Zh(),Zy(Q(B(121)),Q(B(122)),CL(0)),Zh(),ZP(1,0.07500000298023224),AWA,AWB);LT(b,c,g,j,k,ADq(Q(B(123)),Q(B(124)),Q(B(125)),Q(B(126))));a.ii(b);}
var Lf=F(0);
function Mh(){var a=this;CR.call(a);a.z=null;a.B=null;a.dh=null;a.hp=0;a.dn=null;a.c0=null;a.il=null;a.ik=null;a.im=null;a.io=null;a.fz=null;}
function ASR(a){var b=new Mh();ABe(b,a);return b;}
function ABe(a,b){var c,d,e;Fi(a,b);a.c0=new LZ;a.il=new Bf;a.ik=new Bf;a.im=new Bf;a.io=new Bf;a.fz=Sy();c=ANT(a.p);a.dh=c;a.z=AD1(a.p,c);a.B=AD1(a.p,a.dh);c=a.z;c.bO=1;d=new Ra;d.s3=a;e=new Q$;e.uB=a;QR(c,d,d);QR(a.B,e,e);c=a.z;d=new Q_;d.oH=a;c.iW=d;d=a.B;e=new Q8;e.sh=a;d.iW=e;Xh(a.p,c);Y(b.m.bu,a.dh);Y(b.m.dm,a.dh);Y(b.m.dm,a);Y(b.m.bu,a);c=b.m.b2;d=new Q9;d.mS=a;Y(c,d);c=b.m.b2;d=new HO;e=new Q6;e.qt=a;Sr(d,b,e);Y(c,d);Y(b.m.fI,a);Y(b.m.ga,a);b=b.m.ey;c=new Q7;c.tC=a;Y(b,c);LL(a);}
function QC(a,b){if(a.z===b)a.hp=a.hp|1;if(a.B===b)a.hp=a.hp|2;if((a.hp&3)==3)ACz(a);}
function AJ2(a,b,c){if(DY(a.p,a.z))return GI(a.z,b,c);if(!DY(a.p,a.B))return 0;return GI(a.B,b,c);}
function Zx(a){if(DY(a.p,a.z))return Oa(a,a.z);if(!DY(a.p,a.B))return null;return Oa(a,a.B);}
function Oa(a,b){var c;c=new N2;c.qX=b;return c;}
function WI(a,b,c){var d,e,f,g,h,i,j;d=a.dn;if(d!==null&&d.f5!==null){e=b!==a.z?0:1;f=Fy(b);g=(GY(b)+f|0)/2|0;h=g-f|0;d=a.dn;d=d.f5.data[GL(d,g,e)];i=g-(!e?d.hA:d.hC)|0;j=b.bp-V(f,b.O)|0;c.bp=J0(V(((!e?d.hC:d.hA)+i|0)-h|0,c.O)+j|0,IH(c));return;}}
function ACz(a){var b,c,d,e,f,g;Bo(Bw(),B(127));b=a.z.e;c=a.B.e;d=EG(b.f);e=EG(c.f);f=AEp(b.f);g=AEp(c.f);b=a.bc.bT;c=new Ro;c.ui=a;CP(b,c,B(128),H(C,[d,f,e,g]));}
function AEF(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;b=a.dn;if(b!==null&&b.f5!==null){c=Cz(a.p,1.0);d=Fy(a.z);e=GY(a.z);f=Fy(a.B);g=GY(a.B);h=GL(a.dn,d,1);i=GL(a.dn,e,1);j=GL(a.dn,f,0);k=GL(a.dn,g,0);l=Z(h,j);while(l<=Bb(i,k)){m=a.dn.f5.data[l];if(m.j1){b=a.z;h=b.O;n=V(h,m.hC)-b.bp|0;o=n+V(m.lv,h)|0;b=a.B;h=b.O;p=V(h,m.hA)-b.bp|0;q=p+V(m.k8,h)|0;T(a.il,a.c0.dj,n);T(a.im,a.c0.dj,o);b=a.ik;r=a.c0;T(b,r.dj+r.eL|0,p);b=a.io;r=a.c0;T(b,r.dj+r.eL|0,q);s=Z(n,p);t=Bb(o,q)-s|0;b=a.fz;r=a.c0;Gk(b,r.dj,s,r.eL,t);BA(a.fz.bv,
a.dh.S.hf.ht);b=a.fz.bm;r=a.dh.S;BA(b,HG(r.dw,r,m.j1));b=a.p.cC;Ct(b,1);if(n==o){r=a.p.cX;T(r,a.c0.dj-a.z.ba.b|0,c);if(p>=n){u=a.im;T(u,u.b,u.a+c|0);h=n;}else{h=n-c|0;u=a.il;T(u,u.b,u.a-c|0);}Bt(b,a.z.ba.b,h,r,a.fz.bm);}if(p==q){r=a.p.cX;T(r,a.B.cw.b,c);if(n>=p){u=a.io;T(u,u.b,u.a+c|0);}else{p=p-c|0;u=a.ik;T(u,u.b,u.a-c|0);}u=a.c0;Bt(b,u.dj+u.eL|0,p,r,a.fz.bm);}r=a.c0;P6(b,r.dj,r.i9,r.eL,r.i8);r=a.fz;u=r.A;YC(b,u.b,u.a,r.t,a.il,a.ik,a.im,a.io,r.bm);FI(b);Ct(b,0);}l=l+1|0;}return;}}
function AIF(a,b){var c,d;c=K5(a.z,b);d=K5(a.B,b);return !c&&!d?0:1;}
function AQT(a){var b,c,d;E6(a);Mi(a.z);Mi(a.B);b=a.p.cX;c=a.c0;T(b,c.eL,c.i8);c=a.p.cC;d=a.c0;Bt(c,d.dj,d.i9,b,a.dh.S.b8.es);AEF(a);WC(a.dh);}
function APD(a){return Mj(0);}
function AJG(a){Yr(a.z);Yr(a.B);}
function AO3(a){W7(a.z);W7(a.B);}
function APL(a,b){Ys(a.z,b);Ys(a.B,b);}
function AOE(a,b,c){G2(a,b,c);Zl(a,b,c);}
function Zl(a,b,c){var d,e,f,g,h;d=new Bf;e=B$(20.0,c);f=new Bf;g=b.b/2|0;h=e/2|0;Py(f,g-h|0,b.a);LJ(a.z,d,f,c);g=b.b;d.b=(g-(g/2|0)|0)+h|0;LJ(a.B,d,f,c);b=a.c0;g=f.b;Xt(b,g,d.a,d.b-g|0,f.a);}
function AGy(a,b){BO(b);PQ(a.dh,b);Lj(a.z,b);Lj(a.B,b);}
function ABC(a,b){if(b.bk!=121)return 0;return 1;}
function ACJ(a,b){var c,d,e;if(DY(a.p,a.z)){c=a.dh;d=a.z;e=new Vc;e.vm=a;KG(c,b,d,a,a,e);}if(DY(a.p,a.B)){c=a.dh;d=a.B;e=new Vd;e.pN=a;KG(c,b,d,a,a,e);}return 1;}
function ALY(a,b){var c,d;c=DG(a.z,b.h)&&Px(a.z,b)?1:0;d=DG(a.B,b.h)&&Px(a.B,b)?1:0;return !c&&!d?0:1;}
function ALT(a,b,c,d){var e,f;e=DG(a.z,b.h)&&QZ(a.z,b,c,d)?1:0;f=DG(a.B,b.h)&&QZ(a.B,b,c,d)?1:0;return !e&&!f?0:1;}
function AF7(a,b,c){var d,e,f,g,h,i,j,k;d=DG(a.z,b.h);e=DG(a.B,b.h);f=a.p;g=f.eh;h=g!==null?0:1;i=a.z;j=g!==i?0:1;k=g!==a.B?0:1;if(d&&!(!h&&!k))FV(f,i);if(e&&!(!h&&!j))FV(a.p,a.B);if(d){i=Vm(a.z,b,c);if(i!==null)return i;}return !e?null:Vm(a.B,b,c);}
function AI6(a,b,c){var d,e,f,g;d=DG(a.z,b.h);e=DG(a.B,b.h);f=d&&Vf(a.z,b,c)?1:0;g=e&&Vf(a.B,b,c)?1:0;return !f&&!g?0:1;}
function AN2(a,b,c,d){var e,f,g,h;e=DG(a.z,b.h);f=DG(a.B,b.h);g=e&&JN(a.z,c,d)?1:0;h=f&&JN(a.B,c,d)?1:0;return !g&&!h?0:1;}
function ALA(a){return Zx(a);}
var Wg=F(Mh);
function AHV(a){return Mj(1);}
function Ws(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new XT;d=d.then(Bk(e,"f"));f=new XR;f.s9=b;f.s$=c;g=new XS;d.then(Bk(f,"f"),Bk(g,"f"));}
var AEu=F();
function APZ(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(129)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(Lm(b)){case -1570047148:if(!Bn(b,B(130)))break a;d=16;break a;case -1519338717:if(!Bn(b,B(131)))break a;d=2;break a;case -1509980539:if(!Bn(b,B(132)))break a;d=12;break a;case -1073555521:if(!Bn(b,B(133)))break a;d=13;break a;case -1045861099:if(!Bn(b,B(134)))break a;d=17;break a;case -1045861098:if(!Bn(b,B(135)))break a;d=18;break a;case -811765794:if(!Bn(b,B(136)))break a;d=5;break a;case -785237654:if
(!Bn(b,B(137)))break a;d=10;break a;case -631889171:if(!Bn(b,B(138)))break a;d=8;break a;case -439438829:if(!Bn(b,B(139)))break a;d=19;break a;case 2129957:if(!Bn(b,B(140)))break a;d=1;break a;case 3343967:if(!Bn(b,B(141)))break a;d=9;break a;case 3556498:if(!Bn(b,B(142)))break a;d=4;break a;case 485517998:if(!Bn(b,B(143)))break a;d=6;break a;case 544901384:if(!Bn(b,B(144)))break a;d=3;break a;case 1030621992:if(!Bn(b,B(145)))break a;d=15;break a;case 1465713255:if(!Bn(b,B(146)))break a;d=7;break a;case 1554501643:if
(!Bn(b,B(147)))break a;d=14;break a;case 1609169232:if(!Bn(b,B(148)))break a;d=11;break a;default:}}b:{switch(d){case 1:break;case 2:b=new Tx;break b;case 3:case 4:b=new Tw;break b;case 5:b=new Tv;break b;case 6:b=new Tu;break b;case 7:b=new Tt;break b;case 8:case 9:b=new Ts;break b;case 10:b=new Tr;break b;case 11:b=new Tq;break b;case 12:b=new Tp;break b;case 13:b=new Q0;break b;case 14:b=new QW;break b;case 15:b=new QY;break b;case 16:b=new QU;break b;case 17:b=new QV;break b;case 18:b=new QS;break b;case 19:b
=new QT;break b;default:b=new QQ;break b;}b=new Ty;}return b;}
var ABw=F();
var J$=F(La);
function ABf(){var a=this;J$.call(a);a.ml=0;a.l6=0;a.hk=null;}
function AN7(a,b,c,d,e,f){var g=new ABf();ASj(g,a,b,c,d,e,f);return g;}
function ASj(a,b,c,d,e,f,g){Wt(a,c);a.X=e;a.dz=f;a.l6=b;a.ml=g;a.hk=d;}
function SF(a,b,c){a.hk.data[b+a.l6|0]=c;}
function KZ(){var a=this;C.call(a);a.vY=null;a.pV=null;a.xp=0.0;a.mv=0.0;a.lL=null;a.kZ=null;a.iF=0;}
function LO(){var a=this;C.call(a);a.gz=0;a.h$=0;}
var AVY=null;var AVX=null;function Zu(a,b){var c=new LO();Z1(c,a,b);return c;}
function Z1(a,b,c){a.gz=b;a.h$=c;}
function Im(a){return a.gz?0:1;}
function Hc(a){return a.gz!=1?0:1;}
function KO(a){return !QI(a)&&!L5(a)?0:1;}
function QI(a){return a.gz!=2?0:1;}
function L5(a){return a.gz!=3?0:1;}
function Kh(a){var b;if(KO(a))return a.h$;b=new Fj;X(b);K(b);}
function D1(b){return Zu(2,b);}
function VL(a){var b,c;switch(a.gz){case 0:b=new Qb;X(b);K(b);case 1:b=new Xy;X(b);K(b);case 2:b=new VE;c=a.h$;X(b);b.yn=c;K(b);case 3:b=new P1;c=a.h$;X(b);b.yg=c;K(b);default:}}
function AAq(){AVY=Zu(0,0);AVX=Zu(1,0);}
var Zj=F();
var Iv=F(0);
var Np=F();
function AIO(a,b){return b.arrayBuffer();}
var No=F();
function ANd(a,b){var c,d;c=new Pa;d=new O$;return $rt_globals.WebAssembly.instantiate(b,AKW(Bk(c,"f"),Bk(d,"f")));}
var Nn=F();
function ANZ(a,b){AGu(b);}
var Nm=F();
function AHb(a,b){AEb(b);}
function Yc(){C.call(this);this.ux=null;}
function AMX(a,b){Kf(a.ux.z,b);}
function Ye(){C.call(this);this.ox=null;}
function ANA(a,b){Kf(a.ox.B,b);}
var Ty=F();
function ANv(a,b){return ASR(b);}
var Tx=F();
function AGc(a,b){return AUG(b);}
var Tw=F();
function AJX(a,b){return ASW(b);}
var Tv=F();
function AJU(a,b){var c,d,e;c=new Wz;Fi(c,b);d=new Vj;d.l0=new Bf;d.kl=new Bf;c.rE=d;c.dG=Zq();c.cL=Zq();c.eg=MY(c.p);Y(c.p.d5,c);d=b.m.b2;e=new TA;e.tI=c;Y(d,e);Y(b.m.bu,c);b=b.m.ey;d=new TD;d.si=c;Y(b,d);S5(c.cL);c.lE=ER(B(149),25.0);Ic(c.eg,F3(),c.lE);BA(c.gv,CL(43));b=F3();If(c.dG,b);If(c.cL,b);b=c.dG;b.jC=new TC;d=c.cL;d.jC=new Tz;d.jX=new Xu;d.ti=new Xv;KY(b,(NH(0)).i4);KY(c.cL,(NH(0)).i4);return c;}
var Tu=F();
function AKz(a,b){var c,d,e;c=new XM;Fi(c,b);c.kJ=ER(B(150),15.0);d=AEx();c.ex=d;Y(c.p.d5,d);Y(c.p.d5,c);BA(c.gv,CL(43));d=MY(c.p);c.hq=d;Ic(d,F3(),ER(B(149),25.0));d=b.m.b2;e=new OJ;e.vV=c;Y(d,e);d=b.m.ey;e=new OK;e.qA=c;Y(d,e);Y(b.m.bu,Zp(c.hq));Y(b.m.bu,c.ex);b=b.m.dm;d=c.ex;BO(d);e=new OL;e.tZ=d;Y(b,e);return c;}
var Tt=F();
function AGj(a,b){var c,d,e;c=new Yw;Fi(c,b);c.fS=Cn();c.fi=Cn();c.oX=Q(B(151));c.iA=AQa();c.gc=0;d=c.p.d5;e=new Um;e.mN=c;Y(d,e);Y(b.m.bu,c);d=b.m.b2;e=new Un;e.qu=c;Y(d,e);b=Hq(b.be,B(149),35);c.jB=b;c.ib=AEh(E3(b));BA(c.gv,Q(B(152)));return c;}
var Ts=F();
function AHX(a,b){var c,d,e,f;c=new Ph;Ek(c,b);c.f8=AB2();c.ea=0;c.sb=500;c.uI=HI(0,0,0,255,new B5);c.l1=20;c.uX=20;c.oN=Kr();d=b.m.bu;e=new WP;e.iZ=c;f=new Yu;f.rW=e;e.rm=f;Y(d,e);d=b.m.dm;e=new S9;e.n9=c;Y(d,e);c.eb=b.be;c.tc=UX(b.bT);T0(c.f8,Hq(c.eb,B(149),c.uX),c.l1,c.eb);c.g0=Hu();return c;}
var Tr=F();
function ANN(a,b){var c,d;c=new Rc;Gr(c,b);b=b.m.b2;d=new Qc;d.uK=c;Y(b,d);return c;}
var Tq=F();
function ARr(a,b){return AUi(b);}
var Tp=F();
function ASh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Xe;Gr(c,b);c.dX=Ff(0,0,300,300);c.e5=S0(0,0,3,3);d=b.be;b=b.m.bu;e=new T8;e.lc=c;Y(b,e);b=AAD(d);c.pR=b;Go(c.dX,b);G$(c.dX);b=c.dX.bv;FP();BA(b,AWC);BA(c.dX.bm,CM(204,120,50));AMn();e=AWD;f=DW((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CV(d);switch(e.eS){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new Er;X(b);K(b);}b:
{Ni(m,5,5,h);b=m.d$.dx;switch(e.eS){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new Er;X(b);K(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.ky=m;T(c.e5.t,BM(m),C8(c.ky));BA(c.e5.bv,c.lN);return c;}
var Q0=F();
function ALs(a,b){var c,d,e;c=new Sz;Gr(c,b);c.gt=Ff(0,0,300,300);c.kb=new Bf;c.iC=new Bf;c.hJ=new Bf;d=b.be;b=b.m.bu;e=new Wf;e.jF=c;Y(b,e);b=AAD(d);c.rR=b;Go(c.gt,b);G$(c.gt);b=c.gt.bv;FP();BA(b,AWC);BA(c.gt.bm,CM(204,120,50));return c;}
var QW=F();
function AE7(a,b){var c,d,e,f;c=new OT;Ek(c,b);c.wX=20;c.yA=11;c.wB=220;c.jm=new Bf;c.xh=5000;c.gO=1;c.fE=H(Hg,[CL(0),CL(255)]);c.ek=b.be;d=b.m.bu;e=new Ux;e.jw=c;f=new PJ;f.nl=e;e.p8=f;Y(d,e);b=b.m.dm;d=new N1;d.t3=c;Y(b,d);b=CK(c.ek,200,220);c.j6=b;F6(b,B(149),20.0);b=CK(c.ek,200,20);c.fq=b;F6(b,B(149),20.0);c.hT=Hu();return c;}
var QY=F();
function AIK(a,b){var c,d,e;c=new IF;Gr(c,b);Y(b.m.bu,c);d=b.m.b2;e=new SM;e.r0=c;Y(d,e);Y(b.m.fI,new SL);d=b.m.fI;e=new SJ;e.pD=c;Y(d,e);Y(b.m.ga,new SI);d=b.m.ga;e=new SK;e.nq=c;Y(d,e);b=!X0(b.bT)?B(153):B(154);d=new M;O(d);G(G(d,B(155)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var QU=F();
function ALK(a,b){var c,d,e,f,g,h,i,j;c=new Qf;Ek(c,b);c.nz=CL(20);c.fk=Ff(0,0,300,300);d=b.m.b2;e=new Se;e.x7=c;Y(d,e);b=b.be;d=Hq(b,B(10),88);CC(b.cF,d);f=Eq(b.cF,B(156));g=Eq(b.cF,B(157));if(f>g)g=f;h=Df(g);i=Ka(d,1.1799999475479126);j=Bw();e=new M;O(e);U(G(U(G(e,B(158)),h),B(159)),i);Bo(j,N(e));e=CK(b,h,i*2|0);c.ic=e;CC(e,d);Ch(c.ic,B(156),0.0,d.dD);Ch(c.ic,B(157),0.0,i+d.dD);b=CV(b);c.lF=b;CN(b,c.ic);Go(c.fk,c.lF);G$(c.fk);b=c.fk.bv;FP();BA(b,AWC);BA(c.fk.bm,AWE);return c;}
var QV=F();
function APA(a,b){var c;c=new O1;Xg(c,b);Gk(c.b9,0,0,300,300);T(c.cZ,300,300);return c;}
var QS=F();
function AEX(a,b){var c;c=new O2;Xg(c,b);c.fp=new Bf;c.fj=new Bf;T(c.dK,150,140);T(c.cZ,500,100);T(c.eC,150,200);T(c.d9,500,250);return c;}
var QT=F();
function APm(a,b){var c,d,e,f;c=new WQ;Fi(c,b);c.tb=ER(B(150),20.0);d=AEx();c.ec=d;Y(c.p.d5,d);Y(c.p.d5,c);BA(c.gv,CL(43));d=MY(c.p);c.gV=d;Ic(d,F3(),ER(B(149),25.0));d=b.m.b2;e=new QD;e.x4=c;Y(d,e);d=b.m.ey;e=new QE;e.qD=c;Y(d,e);Y(b.m.bu,Zp(c.gV));Y(b.m.bu,c.ec);d=b.m.bu;e=c.p.cE;f=new RK;f.mD=e;Y(d,f);b=b.m.dm;d=c.ec;BO(d);e=new QF;e.r2=d;Y(b,e);return c;}
var QQ=F();
function ALw(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=new Rx;YG(c,b);d=c.cM;e=new II;f=AJz(B(160));g=R(Bv,8);h=I(B(161));i=0;j=0;k=h+1|0;while(true){l=GM(B(161),10,j);m=l>=0?Cb(B(161),j,l):Dj(B(161),j);n=i+1|0;g=ADh(m,g,i);j=l<0?k:l+1|0;if(j>h)break;i=n;}QG(e,ZZ(g,n),B(162),f);Kf(d,e);return c;}
function He(){var a=this;C.call(a);a.bI=0;a.ck=0;a.c2=0;a.i3=0;}
function AWF(a,b,c,d){var e=new He();UI(e,a,b,c,d);return e;}
function UI(a,b,c,d,e){a.bI=d;a.ck=b;a.c2=c;a.i3=e;}
function O0(){var a=this;He.call(a);a.dR=null;a.bk=0;a.hE=0;a.rZ=0;a.j9=0;}
var ADw=F();
function WG(b,c){return (b+(c/2|0)|0)/c|0;}
function PS(b,c,d){if(b<(2147483647/c|0))return WG(V(b,c),d);return 0.5+c*b/d|0;}
function IM(b,c){return ((b+c|0)-1|0)/c|0;}
function Hm(b){return b+0.5|0;}
function Df(b){return b+0.5|0;}
function Ev(b,c,d){return Bb(b,Z(c,d));}
function Mx(){var a=this;He.call(a);a.h=null;a.vO=null;}
var UB=F(0);
function NK(){var a=this;C.call(a);a.ur=null;a.us=null;}
function ALl(a,b){var c,d;c=a.ur;d=a.us;$rt_globals.console.info("paste plain string "+b);c.l(FF(b));Dg(d);}
function Vk(){C.call(this);this.u2=null;}
function WF(a,b){a.u2.clipboardData.setData("text/plain",$rt_ustr(b));}
function Xl(){var a=this;JX.call(a);a.w8=0;a.m0=0;}
function IK(){var a=this;C.call(a);a.A=null;a.t=null;a.bm=null;a.bv=null;}
function Sy(){var a=new IK();St(a);return a;}
function S0(a,b,c,d){var e=new IK();AIh(e,a,b,c,d);return e;}
function St(a){a.A=new Bf;a.t=new Bf;a.bm=new B5;a.bv=new B5;}
function AIh(a,b,c,d,e){a.A=new Bf;a.t=new Bf;a.bm=new B5;a.bv=new B5;Gk(a,b,c,d,e);}
function Gk(a,b,c,d,e){T(a.A,b,c);T(a.t,d,e);}
function Tk(a){T(a.t,0,0);}
function L9(a){var b;b=a.t;return V(b.b,b.a)?0:1;}
function Es(a,b){return F_(b,a.A,a.t);}
function UO(a,b,c,d){var e;e=a.A;Bt(b,e.b+c|0,e.a+d|0,a.t,a.bm);}
function Ur(a,b,c,d,e,f){var g,h,i,j;g=a.A;d=g.b+d|0;e=g.a+e|0;g=a.t;h=a.bv;i=a.bm;In(b,b.hD);I$(b.hD,b.bq,d,e,g,b.dq);UE(b.hD,b.bq,c);g=b.hD;j=b.bq;GK(j,g.u6,h);GK(j,g.u4,i);c=g.ql;j.uniform2f(c,f,0.0);Ii(b);}
function ACR(){var a=this;C.call(a);a.d_=null;a.dZ=null;a.du=null;a.cc=null;a.S=null;}
function ANT(a){var b=new ACR();AKQ(b,a);return b;}
function AKQ(a,b){a.dZ=AEx();a.d_=b;a.cc=MY(b);}
function PQ(a,b){var c;a.S=b;c=a.du;if(c!==null)c.eq=b.W;Ic(a.cc,b.W,b.qJ);}
function WC(a){Je(a.dZ,a.d_.cC);Ix(a.cc);}
function AOL(a,b){return !ZG(a.dZ,b)&&!KA(a.cc,b)?0:1;}
function ASn(a,b,c,d){return !ABu(a.dZ,b,c,d)&&!Jv(a.cc,b,c,d)?0:1;}
function AGB(a,b,c){var d;d=Jq(a.cc,b,c);if(d!==null)return d;return YE(a.dZ,b,c);}
function ANb(a,b,c){return !AEw(a.dZ,b,c)&&!DJ(a.cc)?0:1;}
function VC(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.e;h=ANV();i=c.i;j=0;while(j<i){if(f===null){k=(Br(c,j)).by;l=R$(EL(B1(g.f,k)));m=V3(g.f_);}else{n=f.data;k=n[j].kh.kW;l=!C6(g.f_,n[j].ij)?B(31):R$(EL(B1(g.f,k)));m=V3(n[j].ij);}if(I(l)>153){o=Cb(l,0,150);n=new M;O(n);G(G(n,o),B(163));l=N(n);}if(I(m)>153){o=Cb(m,0,150);n=new M;O(n);G(G(n,o),B(163));m=N(n);}p=C5(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Br(c,j);}if(f!==null){q=new UL;q.nu=d;q.nt=o;}else{q=new UN;q.vG=d;q.vB=n;}Nc(h,
m,p,l,q);j=j+1|0;}r=Q5(h);if(a.du!==null)Uq(a);c=new Rb;n=a.d_;o=new SO;o.oP=a;o.oO=d;AAF(c,n,o);Wj(c,r);d=a.S;X_(c,d.W,d.tg);a.du=ABZ(a.d_);d=ZN(c,a.d_);n=a.S.W;QM(d,n.lZ,n.kp);LR(a.du,d);d=a.du;n=new M;O(n);G(G(n,B(164)),e);IN(d,N(n),a.S.pF,4.0);d=a.du;d.eq=a.S.W;I4(a.dZ,d);d=a.du;s=(d.V.r.a+Cz(d.bt,2.0)|0)+Cz(a.d_,2.0)|0;i=(c.dW+c.dY|0)+c.f9|0;t=Cz(c.cz,5.0);e=B3(Ev(t,b.b,c.cz.cb.b-i|0),Ev(s,b.a,c.cz.cb.a-c.cI.a|0));TJ(c);Z2(c);s=(c.dW+c.dY|0)+c.f9|0;b=c.cz;i=(b.cb.b-e.b|0)-Cz(b,5.0)|0;b=c.cz;t=(b.cb.a-e.a
|0)-Cz(b,5.0)|0;d=B3(Z(s,i),Z(c.cI.a,t));Fo(a.du,e,d);FV(a.d_,c);}
function Uq(a){Kd(a.dZ,a.du);J3(a.du);a.du=null;}
function Ny(a,b){var c;c=new SE;c.tP=a;c.tU=b;return c;}
function KG(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(!DJ(a.cc)){g=a.cc;h=b.h;b=new Tf;b.Y=a;b.bN=c;b.oC=f;b.h3=e;b.iS=d;i=P0();e=b.bN.e;d=Dn(e);e=G6(e);f=b.bN.eB;if(V1(f,d,e)!==null){j=b.Y.S.W.bj;k=new RO;k.oa=b;k.n_=h;D5(i,B(165),j,k);}if(KW(f,d,e)!==null){j=b.Y.S.W.bj;k=new RN;k.pl=b;k.pn=h;D5(i,B(166),j,k);}if(Nv(f,d,e)!==null){e=b.Y.S.W.bj;f=new RL;f.ns=b;f.nv=h;D5(i,B(167),e,f);}e=b.Y.S.W.bj;f=new RM;f.vn=b;f.vo=h;D5(i,B(168),e,f);if(!b.bN.ef){e=b.Y.S.W.bj;f=new PF;f.tT=b;D5(i,B(169),e,f);}e=b.Y.S.W.bj;f
=new PD;f.qv=b;D5(i,B(170),e,f);if(!b.bN.ef&&X0(IL(b))){e=b.Y.S.W.bj;f=new PG;f.sP=b;D5(i,B(171),e,f);}l=b.Y.S.W.bj;d=P0();m=b.Y.S.W.bj;n=R(C$,3);o=n.data;k=b.iS;BO(k);e=new S7;e.of=k;o[0]=D6(B(172),m,e);k=b.Y.S.W.bj;p=b.iS;BO(p);e=new S8;e.rK=p;o[1]=D6(B(173),k,e);e=b.Y.S.W.bj;j=b.iS;BO(j);k=new S6;k.vw=j;o[2]=D6(B(174),e,k);JJ(d,B(175),m,FX(n),AWG);f=b.Y.S.W.bj;n=R(C$,2);o=n.data;k=b.h3;BO(k);j=new Ol;j.r$=k;o[0]=D6(B(176),f,j);j=b.Y.S.W.bj;k=b.h3;BO(k);p=new Oj;p.q0=k;o[1]=D6(B(177),j,p);GP(d,B(178),f,FX(n));f
=b.Y.S.W.bj;j=new Vz;j.rw=b;JJ(d,B(179),f,j,AWG);GP(i,B(180),l,Hv(d));k=b.Y.S.W.bj;d=P0();GP(d,B(181),b.Y.S.W.bj,AEP(b));f=b.Y.S.W.bj;m=new Wx;m.s5=b;D5(d,B(182),f,m);GP(i,B(183),k,Hv(d));Gh(g,h,Hv(i),Ny(a,c));}}
function ALC(a,b,c,d){return Le(a.dZ,b,c,d);}
function Za(b){var c;c=new Wl;c.t$=b;return c;}
var HW=F(0);
function AHA(a){}
function ASu(a){}
function AAV(){var a=this;C.call(a);a.ba=null;a.cw=null;a.ct=null;a.T=null;a.iK=null;a.rH=0;a.lR=null;a.cP=null;a.w=0;a.y=0;a.hh=0;a.k$=0;a.gf=0;a.ji=null;a.eZ=null;a.cB=null;a.O=0;a.e=null;a.ep=null;a.eB=null;a.s=null;a.fN=null;a.dL=null;a.mo=null;a.gE=null;a.ua=0;a.sf=0;a.cK=0;a.cl=0;a.co=0;a.fd=null;a.ew=null;a.et=null;a.bp=0;a.de=0;a.hm=0;a.id=0;a.h4=0;a.wi=0;a.vR=0;a.jD=0;a.i0=0;a.dM=0;a.cY=null;a.h0=0;a.hZ=0;a.eY=null;a.ef=0;a.bO=0;a.iy=null;a.ih=null;a.v4=null;a.g5=null;a.n0=null;a.vy=null;a.iW=null;a.k4
=0;a.rD=null;a.e1=Eo;a.tF=null;a.t4=null;}
function AD1(a,b){var c=new AAV();AKi(c,a,b);return c;}
function AKi(a,b,c){var d,e,f,g;a.ba=new Bf;a.cw=new Bf;a.rH=0;a.lR=R(Bi,10);a.cP=AM$();a.gf=16;a.ji=B(149);a.cB=R(K_,4);d=new II;e=new HU;e.em=GE();e.eK=GE();e.fB=Cn();e.F=MZ(B(31));e.fT=0;e.cx=0;e.dd=Us(e);d.f=e;d.jh=B(184);d.f_=null;a.e=d;f=new Wi;f.nn=CI(R(Mp,0));f.sZ=CI(R(Mp,0));f.tn=CI(R(ML,0));f.oQ=CI(R(Qg,0));f.mM=CI(R(G3,0));f.rL=CI(R(RF,0));a.eB=f;a.s=ANE();e=new Nt;e.eV=R(Js,16);e.eW=0;e.dk=(-1);a.fN=e;a.gE=R(EV,0);a.fd=B3(1,0);a.ew=Hu();a.et=Hu();a.bp=0;a.de=0;a.hm=0;a.h4=1;a.jD=1;a.i0=1;a.dM=3;a.cY
=AB2();a.eY=B(185);a.ef=0;a.bO=0;a.iy=null;a.ih=Cn();e=EW();BO(e);f=new U8;f.yo=e;a.g5=f;a.rD=new B5;e=new U7;e.rs=a;a.tF=e;e=new U3;e.nV=a;a.t4=e;a.ct=b;a.T=b.cC;a.iK=c;g=a.lR.data;b=new U2;b.tE=a;g[0]=b;b=new U5;b.rS=a;g[1]=b;b=new U4;b.oe=a;g[2]=b;b=new Vv;b.t2=a;g[3]=b;b=new Vu;b.qR=a;g[4]=b;b=new Vw;b.nC=a;g[5]=b;AFs();a.id=AWH===AWI?0:1;}
function LJ(a,b,c,d){Cv(a.ba,b);Cv(a.cw,c);Sb(a,b,c,d);}
function QR(a,b,c){a.n0=b;a.vy=c;}
function Sb(a,b,c,d){var e;a.cK=B$(80.0,d);a.cl=B$(1.0,d);a.co=B$(10.0,d);if(!a.bO)Cv(a.ct.cX,a.ba);else T(a.ct.cX,(b.b+c.b|0)-Lp(a)|0,b.a);VM(a.cY,a.ct.cX,Lp(a),c.a,d);b=a.cP;e=B$(2.0,d);b.d0.t.b=e;Uj(a,a.ji,a.gf);V5(a);}
function AIs(a){a.k$=1;LK(a);}
function AG$(a){a.k$=0;}
function LK(a){SH(a.cP,JA(Ck(a)));}
function Lj(a,b){var c,d;a.dL=b;c=a.cP;d=b.b8.tv;BA(c.d0.bm,d);c=a.ew;d=b.b8;Gl(c,d.md,d.lU);c=a.et;b=b.b8;Gl(c,b.md,b.lU);}
function Yr(a){Lc(a,a.eZ.mf,a.gf+1|0);}
function W7(a){var b;b=a.gf;if(b<=7)return;Lc(a,a.eZ.mf,b-1|0);}
function Ys(a,b){Lc(a,b,a.gf);}
function Lc(a,b,c){if(a.ct.bR!==0.0){Uj(a,b,c);F8(Ck(a));}a.gf=c;a.ji=b;}
function Uj(a,b,c){var d,e,f,g,h,i;d=B$(c,a.ct.bR);e=a.eZ;f=e!==null?e.o$:0;if(!(d==f&&C6(b,a.ji))){N3(a.cY);g=a.gE.data;c=g.length;f=0;while(f<c){Qz(g[f]);f=f+1|0;}g=a.e.f.F.data;c=g.length;f=0;while(f<c){Ef(g[f]);f=f+1|0;}g=a.cB.data;c=Hp(0,0);e=a.T;h=d;g[c]=GX(e,b,h,400,0);a.cB.data[Hp(0,1)]=GX(a.T,b,h,400,2);a.cB.data[Hp(1,0)]=GX(a.T,b,h,700,0);a.cB.data[Hp(1,1)]=GX(a.T,b,h,700,2);e=a.cB.data[Hp(0,0)];a.eZ=e;c=E3(e);a.O=Df(c*1.25);a.cP.d0.t.a=E3(a.eZ);a.mo=CH(a.mo,CK(a.T,1024,a.O));f=a.O;i=SZ(a.cP);e=new M;O(e);b
=G(G(e,B(186)),b);BD(b,32);U(G(U(G(U(G(U(b,d),B(187)),c),B(159)),f),B(188)),i);$rt_globals.console.info($rt_ustr(N(e)));if(AWJ){c=Lg(a.eZ,a.O);b=new M;O(b);U(G(b,B(189)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.hh=G7(Fu(a),a.y,a.T.cF,a.cB);GZ(a);V5(a);}}
function Vn(a){return V(CA(a.e.f)+5|0,a.O);}
function IH(a){return Bb(Vn(a)-a.cw.a|0,0);}
function QO(a){return Bb(a.hm-De(a)|0,0);}
function De(a){var b;b=!a.bO?0:C2(a)+a.co|0;return Bb(1,(a.cw.b-a.cK|0)-b|0);}
function Lp(a){return a.bO?a.cK:a.cK-a.co|0;}
function DI(a){return a.cw.a;}
function K5(a,b){var c,d,e;c=a.e.f;d=c.fT;e=c.cx;d=d!=e&&b-c.pL>0.03125?1:0;if(d&&a.k4!=e){a.k4=e;S2(a);}d=J0((a.bp+a.wi|0)-a.vR|0,IH(a));e=a.bp==d?0:1;if(e)E$(a,d);return !Tg(a.cP,b)&&!e&&!a.rH?0:1;}
function E$(a,b){var c,d;c=J0(b,IH(a));if(c!=a.bp){a.bp=c;d=a.vy;if(d!==null)d.h8(c);}}
function Io(a,b){var c,d;c=J0(b,QO(a));if(c!=a.de){a.de=c;d=a.n0;if(d!==null)d.h8(c);}}
function Mi(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;b=IM(a.cw.a,a.O)+7|0;c=a.gE;if(c.data.length<b)a.gE=AAG(b,c,a.ua,a.sf,a.e.f);Ct(a.T,0);R1(a.T,a.ba,a.cw);d=(a.O-SZ(a.cP)|0)/2|0;e=(a.hh-(Qq(a.cP)/2|0)|0)-a.de|0;f=!a.bO?a.cK:(a.cl+a.co|0)+C2(a)|0;PY(a.cP,f+e|0,(d+V(a.w,a.O)|0)-a.bp|0);g=CA(a.e.f);h=Fy(a);i=GY(a);a.ua=h;a.sf=i;j=a.ct.cX;T(j,De(a),a.O);k=!a.bO?a.ba.b+a.cK|0:((a.ba.b+a.cl|0)+a.co|0)+C2(a)|0;l=h;while(l<=i&&l<g){m=B1(a.e.f,l);n=Rk(a,l);ABV(n,m,a.mo,a.cB,a.T,a.O,De(a),a.de);o=n.b0;a.hm
=Bb(a.hm,E1(m)+(40.0*a.ct.bR|0)|0);p=V(a.O,l)-a.bp|0;c=a.ep;q=c===null?null:c.data[l];b=a.ba.a+p|0;m=a.T;r=a.rD;s=!a.id?0.0:0.5;d=De(a);f=a.O;p=a.de;t=a.dL;u=AC9(a.s,l);if(u!==null){if(u.a==(-1))u.a=o.U;u.b=G7(o,u.b,a.T.cF,a.cB);u.a=G7(o,u.a,a.T.cF,a.cB);}AC_(n,b,k,m,r,j,s,d,f,p,t,u,a.iy,a.ih,a.w!=l?0:1,a.ep===null?0:1,q);l=l+1|0;}l=h;while(l<=i&&l<g&&a.jD){n=Rk(a,l);p=V(a.O,l)-a.bp|0;v=AAa(a.s,l);m=a.dL;q=m.b8;r=q.oy;w=a.w==l&&a.ep===null?1:0;a:{if(v)r=q.k1;else{c=a.ep;if(c!==null){c=c.data;if(l<c.length&&
c[l]!==null){r=HG(m.dw,m,c[l].f4);break a;}}if(w)r=q.je;}}ACo(n,a.T,k,a.ba.a+p|0,a.O,j,a.de,De(a),r);l=l+1|0;}if(a.h4){x=Z(i+1|0,g);AB0(a,V(a.O,x)-a.bp|0);}Z8(a);AA$(a,h,i);if(a.i0)AEn(a,h,i,g);if(a.k$&&e>=(( -Qq(a.cP)|0)/2|0)){n=a.cP;m=a.cw;if(ZB(n.d0.A,0,0,m))Vr(a.cP,a.T,a.ba);}ACB(a);ADj(a);FI(a.T);}
function AEn(a,b,c,d){var e,f,g,h,i,j,k,l;while(b<=c&&b<d){a:{e=a.ep;if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.dL;h=HG(h.dw,h,g.f4);}else h=e!==null?a.dL.b8.es:a.dL.b8.je;if(!(a.w!=b&&g===null)){a.fd.b=!a.bO?(a.co-a.cl|0)-a.dM|0:((a.co+C2(a)|0)+a.cl|0)-a.dM|0;i=a.fd;j=a.O;i.a=j;k=a.bO?0:(a.cK-a.co|0)+a.cl|0;j=V(j,b)-a.bp|0;g=a.T;l=a.ba;Bt(g,l.b+k|0,l.a+j|0,i,h);}b=b+1|0;}}
function AA$(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cw.a;e=Z(d,V(CA(a.e.f),a.O)-a.bp|0);f=a.cY;g=a.bp;h=a.ep===null?a.w:(-1);i=a.T;j=a.dL;R1(i,f.fc,f.eD);J8(f,i,b,d);X7(f,b);Ym(f,g,e,j,i);k=j.hf;if(e<d){l=f.fc;Bt(i,l.b,l.a+e|0,B3(f.eD.b,d-e|0),k.ht);}if(b<=h&&h<=c){m=j.hf;c=h/20|0;l=f.cA;j=Br(l,c%l.i|0);k=f.fc;e=V(f.cA.i,f.iG);b=j.eM.a;d=((j.jf.a-(g%e|0)|0)+e|0)%e|0;if((d+b|0)>e)d= -(g%C8(j.bo)|0)|0;b=h%j.dU|0;c=j.M;d=d+V(b,c)|0;if(d<( -c|0))d=d+e|0;T(j.dS,j.eM.b,c);f=j.d3;b=h%j.dU|0;c=j.M;Cs(f,0.0,V(b,c),j.eM.b,
c);E2(j,i,d,k,m.oT,m.uC);}FI(i);}
function Fy(a){return Z(a.bp/a.O|0,CA(a.e.f)-1|0);}
function GY(a){return Z(((a.bp+DI(a)|0)-1|0)/a.O|0,CA(a.e.f)-1|0);}
function V5(a){T0(a.cY,a.cB.data[0],a.O,a.T);J8(a.cY,a.T,Fy(a),DI(a));}
function Rk(a,b){var c;c=a.gE.data;return c[b%c.length|0];}
function AEG(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dp(a.s))Dt(a,a.eY);else{b=D4(a.s);c=FC(a.s);d=c.N;e=b.N;f=(d-e|0)+1|0;g=BK(f);h=g.data;i=R(Bv,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.eY;e=e+1|0;k=f;}l=ET(a.w,a.y);m=new S$;m.rk=a;Ps(a,g,0,0,i,l,m);b.bf=b.bf+I(a.eY)|0;c.bf=c.bf+I(a.eY)|0;L6(a,a.y+I(a.eY)|0,0);DZ(a);}return 1;}
function ACi(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dp(a.s)){b=B1(a.e.f,a.w);if(b.o.data.length>0){c=R8(a,b);if(c===null)return 1;d=a.e.f;e=a.w;f=ET(e,a.y);d.cx=d.cx+1|0;g=d.fB;h=R(G9,1);h.data[0]=AFv(e,0,1,c,f.by,f.bJ);BZ(g,h);JQ(d,e,0,1,c);FY(b,0,I(c));L6(a,a.y-I(c)|0,0);}}else{f=D4(a.s);c=FC(a.s);i=c.N;j=f.N;i=(i-j|0)+1|0;k=BK(i);h=k.data;l=R(Bv,i);m=l.data;e=a.y;n=a.w;o=0;while(j<=c.N){b=B1(a.e.f,j);if(b.o.data.length>0){b=R8(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=Mg(k,o);h=Dk(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.N)f.bf=Bb(0,f.bf-I(b)|0);if(j==c.N){c.bf=Bb(0,c.bf-I(b)|0);L6(a,a.y-I(b)|0,0);}i=i+1|0;}f=ET(n,e);b=new Wh;b.rg=a;Ps(a,p,0,1,h,f,b);}DZ(a);return 1;}
function R8(a,b){var c,d,e,f;c=Ev(0,I(a.eY),XB(b));if(!c)b=null;else{b=B(58);if(c<0){b=new BG;X(b);K(b);}if(c!=1){d=b.b3.data.length;if(d&&c){e=BN(V(d,c));d=0;f=0;while(f<c){PR(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=Mq(e);}else b=AVh;}}return b;}
function Ps(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BK(i);k=AUO(i).data;Hz(j,c);c=0;l=k.length;if(c>l){f=new BG;X(f);K(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.f;o.cx=o.cx+1|0;p=R(G9,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AFv(h[m],n[m],k[m],b[m],f.by,f.bJ);m=m+1|0;}BZ(o.fB,p);c=0;while(c<i){b=e.data;JQ(o,h[c],n[c],k[c],b[c]);g.mm(F4(h[c]),b[c]);c=c+1|0;}}
function ADX(a){var b,c,d,e,f,g,h,i;if(Dp(a.s))GN(a);Ef(B1(a.e.f,a.w));b=a.e.f;c=a.w;d=a.y;e=b.F;f=e.data;g=f[c];e=Dk(e,f.length+1|0);f=e.data;b.F=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DP(R(B9,0));b.F.data[c+1|0]=g;}else if(d==g.U){f[c]=g;f[c+1|0]=DP(R(B9,0));}else{f=(IQ(g,d)).data;e=b.F.data;e[c]=f[0];e[c+1|0]=f[1];}GB(b,c,d,0,B(190));DZ(a);return CE(a,a.w+1|0,0,0);}
function ADB(a){if(Dp(a.s))GN(a);else Pi(a.e.f,a.w,a.y);GZ(a);DZ(a);return 1;}
function YR(a){var b,c,d;if(Dp(a.s)){GN(a);return 1;}b=a.y;if(!b&&!a.w)return 1;if(b){c=a.w;b=b-1|0;Pi(a.e.f,c,b);}else{c=a.w-1|0;b=Fm(a.e.f,c);d=a.e.f;K7(d,c);GB(d,c,Fm(d,c),1,B(190));}DZ(a);return CE(a,c,b,0);}
function Dt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.ef)return 0;if(Dp(a.s))GN(a);c=L3(Vy(b,B(191),B(31)),B(190),(-1));d=c.data;b=a.e.f;e=a.w;f=a.y;Yk(b,e,f,c);g=d.length;if(!g)h=AVh;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BN(i+V(g-1|0,I(B(190)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(190))){m=l+1|0;c[l]=L(B(190),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Mq(k);}GB(b,e,f,0,h);e=a.w;m=(e+g|0)-1|0;CE(a,
m,m!=e?I(d[g-1|0]):a.y+I(d[0])|0,0);E9(a);DZ(a);return 1;}
function GN(a){var b,c,d;b=D4(a.s);c=a.e.f;d=a.s;TP(c,d,Wu(c,d));CE(a,b.N,b.bf,0);E9(a);DZ(a);}
function E9(a){var b;b=a.s;b.c4=0;B4(b.bU,a.w,a.y);B4(a.s.bK,a.w,a.y);}
function C2(a){return a.eZ.l4|0;}
function AB0(a,b){var c,d;c=a.cw.a;if(b<c){d=a.ct.cX;d.a=c-b|0;d.b=!a.bO?De(a)+a.dM|0:De(a)+a.cl|0;c=!a.bO?(a.ba.b+a.cK|0)-a.dM|0:(((a.ba.b+a.co|0)+C2(a)|0)+a.cl|0)-a.dM|0;Bt(a.T,c,a.ba.a+b|0,d,a.dL.b8.es);}}
function ACB(a){var b;b=a.bO?a.ba.b+C2(a)|0:a.ba.b+a.cw.b|0;IE(a.ew,a.bp,a.ba.a,DI(a),Vn(a),b,C2(a));b=!a.bO?a.ba.b+a.cK|0:((a.ba.b+a.cl|0)+a.co|0)+C2(a)|0;My(a.et,a.de,b,De(a),a.hm,a.ba.a+DI(a)|0,C2(a));}
function ADj(a){var b,c;b=PW(a.ew);c=PW(a.et);if(!(!b&&!c)){Ct(a.T,1);if(b)F0(a.ew,a.T);if(c)F0(a.et,a.T);if(b)Gj(a.ew,a.T);if(c)Gj(a.et,a.T);}}
function Z8(a){var b,c,d,e;b=a.fd;c=a.cw;b.a=c.a;b.b=a.cl;d=!a.bO?a.cK-a.co|0:(c.b-Lp(a)|0)-a.cl|0;b=a.T;c=a.ba;Bt(b,c.b+d|0,c.a,a.fd,a.dL.b8.vi);a.fd.b=!a.bO?(a.co-a.cl|0)-a.dM|0:((a.co+C2(a)|0)+a.cl|0)-a.dM|0;e=a.bO?0:(a.cK-a.co|0)+a.cl|0;b=a.T;c=a.ba;Bt(b,c.b+e|0,c.a,a.fd,a.dL.b8.es);}
function J0(b,c){return Z(Bb(0,b),c);}
function HM(a,b){var c,d,e,f,g;b=b.data;$rt_globals.console.info("onFileParsed");a.h0=1;a.hZ=1;c=D8(b[0]);d=FM(b[1]);e=(D8(b[2])).data[0];a.e.f=AB4(c,d);WE(a,ADG(e));Gx(Ck(a),AWK);F8(Ck(a));f=Kx(FH(),a.e1);g=new M;O(g);G(H1(G(g,B(192)),f),B(193));$rt_globals.console.info($rt_ustr(N(g)));g=a.iW;if(g!==null)g.l(a);}
function WE(a,b){var c,d;c=Dn(a.e);if(!C6(c,b)){d=new M;O(d);G(G(G(G(d,B(194)),c),B(195)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.jh=b;}}
function Ck(a){return a.ct.i1;}
function KM(a,b){var c,d,e,f,g,h;c=EA(b);d=new M;O(d);G(G(d,B(196)),c);$rt_globals.console.info($rt_ustr(N(d)));NB(Ck(a),EA(b));CE(a,0,0,0);a.e1=FH();a.h0=0;a.hZ=0;a.ep=null;Ko(a.cY,null);e=new II;f=R(Bv,1);f.data[0]=B(31);AEy(e,f,AUD(B(31),B(31),EA(b),null));a.e=e;CE(a,0,0,0);c=EA(b);g=F5(c,46,I(c)-1|0);if(g!=(-1))c=Dj(c,g);h=!Bn(c,B(197))?5120:10240;c=new Tl;c.uj=a;c.uk=h;c.ul=b;d=b.fg;if(d!==null)Lr(c,JK(b,d.size));else{d=b.gR.getFile();e=new TS;e.ms=b;e.mt=c;b=new TV;b.uG=c;d.then(Bk(e,"f"),Bk(b,"f"));}}
function HD(a,b,c,d,e){if(Hw(a,e))return 1;if(c&&d)return 1;if(c)E$(a,a.bp+((V(b,a.O)*12|0)/10|0)|0);else if(!d){IW(a,a.w+b|0,e);TL(a);}return 1;}
function Uw(a,b,c,d){var e,f,g;if(Hw(a,d))return 1;e=Fu(a);if(!c)f=a.y+b|0;else if(b>=0)f=G0(e,a.y);else{f=a.y;if(!f)f=(-1);else{c=Iz(e,f);if(c>0&&e.dy.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.dy.data[c-1|0];}}if(f>e.U){if((a.w+1|0)<CA(a.e.f))CE(a,a.w+1|0,0,d);}else if(f>=0)Dq(a,f,d);else{b=a.w;if(b>0){g=(B1(a.e.f,b-1|0)).U;CE(a,a.w-1|0,g,d);}}PH(a);return 1;}
function Hw(a,b){if(Dp(a.s)&&!b){E9(a);GZ(a);return 1;}if(!(b&&Dp(a.s)))E9(a);return 0;}
function CE(a,b,c,d){a.y=c;return IW(a,b,d);}
function IW(a,b,c){a.w=Ev(0,b,CA(a.e.f)-1|0);return Dq(a,a.y,c);}
function Dq(a,b,c){a.y=Ev(0,b,(Fu(a)).U);a.hh=a.ct.bR===0.0?0:G7(Fu(a),a.y,a.T.cF,a.cB);LK(a);GZ(a);if(c)a.s.c4=1;KN(a.s,a.w,a.y);a.s.c4=0;return 1;}
function L6(a,b,c){var d;d=RS(a.s);Dq(a,b,c);a.s=d;}
function GZ(a){TL(a);PH(a);}
function TL(a){var b,c,d,e,f;b=a.bp;c=b+DI(a)|0;d=a.w;e=a.O;d=V(d,e);f=d+e|0;if(d<(b+e|0))E$(a,d-e|0);else if(f>(c-e|0))E$(a,(f-DI(a)|0)+a.O|0);}
function PH(a){var b,c,d,e,f;b=Df(a.ct.bR*30.0);c=a.de;d=c+De(a)|0;e=a.hh;f=e+b|0;if(e<(c+b|0))Io(a,e-b|0);else if(f>(d-b|0))Io(a,(f-De(a)|0)+b|0);}
function TR(a,b,c){var d,e,f,g,h,i,j,k,l;Vs(a);d=a.e.f;e=DO(d.em,c);if(e!==null)a.iy=Kl(d,e);if(e!==null)c=e;a:{f=DO(d.eK,c);if(f!==null){c=BV(f);while(true){if(!B7(c))break a;g=BY(c);BZ(a.ih,Kl(d,g));}}}h=b.by;i=b.bJ;b=a.eB;c=Dn(a.e);d=G6(a.e);j=(Cp(b.oQ)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.uc(c,d)){c=b.xN;break b;}l=l+1|0;}c=null;}if(c!==null){d=a.e;b=new Ok;b.xt=a;b.xv=d;b.xu=h;b.xs=i;c.sx(d,h,i,b,a.g5);}}
function HE(a,b){var c;CE(a,b.by,b.bJ,0);c=G0(Fu(a),a.y);B4(a.s.bK,a.w,c);B4(a.s.bU,a.w,a.y);}
function EU(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.ba;e=c-d.b|0;f=Ev(0,((b.a-d.a|0)+a.bp|0)/a.O|0,CA(a.e.f)-1|0);g=!a.bO?a.cK:(a.cl+a.co|0)+C2(a)|0;h=Bb(0,(e-g|0)+a.de|0);b=B1(a.e.f,f);d=a.T.cF;i=a.cB;if(!(b.eo!==null&&!b.fZ))Li(b,d,i);j=b.eo;e=b.o.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.U;else{c=Ui(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.o.data.length)k=b.U;else{j=W$(b,d,i,c);k=0;e=0;while(e<c){k=k+I(b.o.data[e].u)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(AWL){d=new M;O(d);U(G(U(G(U(G(d,B(198)),e),B(199)),h),B(200)),c);$rt_globals.console.info($rt_ustr(N(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return ET(f,k);}
function TI(a,b){var c;c=b.by;a.w=c;a.y=b.bJ;a.hh=G7(B1(a.e.f,c),a.y,a.T.cF,a.cB);LK(a);}
function Fu(a){return B1(a.e.f,a.w);}
function JN(a,b,c){var d,e;d=Df((a.O*4|0)*c/150.0);e=Df(b);if(d)E$(a,a.bp+d|0);if(e)Io(a,a.de+e|0);return 1;}
function Vf(a,b,c){a.s.c4=0;return 1;}
function Vm(a,b,c){var d,e,f;if(c)return null;d=Fg(a.ew,b.h,a.tF,1);if(d!==null)return d;d=Fg(a.et,b.h,a.t4,0);if(d!==null)return d;I6(a);e=EU(a,b.h);f=HS(a.e.f,e.by,e.bJ);TI(a,e);TR(a,e,f);if(!b.bI){b=a.s;if(!b.c4)B4(b.bU,a.w,a.y);}b=a.s;b.c4=1;KN(b,a.w,a.y);b=new RT;b.s8=a;return b;}
function QZ(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:if(b.ck){b=b.h;e=EU(a,b);f=HS(a.e.f,e.by,e.bJ);g=OO(a,f);h=KW(a.eB,Dn(a.e),G6(a.e));if(h!==null){f=a.e;c=e.by;d=e.bJ;e=new T_;e.xl=a;e.xk=b;e.xj=g;h.sx(f,c,d,e,a.g5);}else{e=DO(a.e.f.em,f);if(e!==null){HE(a,e);c=1;}else{e=DO(a.e.f.eK,f);if(e!==null&&!Ec(e)){if(e.i!=1){VC(a.iK,b,e,a,g);c=1;}else{HE(a,Br(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(EU(a,b.h)).by;e=B1(a.e.f,c);c=G5(e,a.y);d=G0(e,a.y);b=Ve(e,c);if((d-1|0)==e.U){B4(a.s.bU,a.w,XB(e));B4(a.s.bK,
a.w,e.U);}else{if(b!==null){b=b.u;i=0;c:{while(true){j=b.b3.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.y;if(c==i){c=G5(e,c-1|0);d=G0(e,c);}else{if(d!=i){Qd(a.s,a.w);break b;}c=G5(e,d+1|0);d=G0(e,c);}}}B4(a.s.bU,a.w,c);a.s.c4=1;CE(a,a.w,d,0);a.s.c4=0;I6(a);}}break a;case 3:break;default:break a;}Qd(a.s,a.w);XL(a.fN);I6(a);}}return 1;}
function Px(a,b){var c,d,e,f,g,h,i,j,k;c=a.ct.cE;if(Fr(a.ew,b.h,c))return 1;if(Fr(a.et,b.h,c))return 1;d=a.cY;if(F_(b.h,d.fc,d.eD)&&Hl(c)?1:0)return 1;e=b.h;f=!a.bO?a.ba.b+a.cK|0:((a.ba.b+a.co|0)+a.cl|0)+C2(a)|0;a:{g=a.ba.a;h=De(a);i=DI(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Hl(c);if(b.ck){e=EU(a,b.h);e.bJ=G5(B1(a.e.f,e.by),e.bJ);b=a.e.f;if(!NT(b.em,e)&&!NT(b.eK,e)?0:1)return DC(c,B(201));}return DC(c,B(184));}
function ANq(a,b){var c,d,e,f;c=b.ck;if(c&&b.bk==65){c=CA(a.e.f)-1|0;d=Fm(a.e.f,c);B4(a.s.bU,0,0);B4(a.s.bK,CA(a.e.f)-1|0,d);return 1;}if(c&&b.bk==80){HN(a);return 1;}if(!a.ef&&c&&b.bk==90){if(Dp(a.s))E9(a);b=a.e.f;b.cx=b.cx+1|0;e=b.fB;d=e.i;if(!d)e=null;else{f=(En(e,d-1|0)).data;e=TH(b,f[0]);c=1;while(c<f.length){TH(b,f[c]);c=c+1|0;}}if(e!==null){CE(a,e.b,e.a,0);DZ(a);}return 1;}if(!c&&!b.c2){if(Bn(b.dR,B(202))){Dt(a,B(203));Dq(a,a.y-1|0,0);c=1;}else if(Bn(b.dR,B(204))){Dt(a,B(205));Dq(a,a.y-1|0,0);c=1;}else if
(Bn(b.dR,B(42))){Dt(a,B(206));Dq(a,a.y-1|0,0);c=1;}else if(Bn(b.dR,B(207))){Dt(a,B(208));Dq(a,a.y-1|0,0);c=1;}else if(Bn(b.dR,B(209))){Dt(a,B(210));Dq(a,a.y-1|0,0);c=1;}else if(!Bn(b.dR,B(211)))c=0;else{Dt(a,B(212));Dq(a,a.y-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.c2&&!b.ck)){d=b.bk;if(d>=48&&d<=57){c=d-48|0;e=a.lR.data[c];if(e!==null)e.q();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bk){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c=1;}if(c)return 1;if
(AA_(a,b))return 1;if(a.ef)c=0;else c:{switch(b.bk){case 8:break;case 9:c=!b.bI?AEG(a):ACi(a);break c;case 13:c=ADX(a);break c;case 46:c=ADB(a);break c;default:c=0;break c;}c=YR(a);}if(c)return 1;if(b.ck&&b.bk==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AJP(b.bk)&&b.bk!=27){if(!b.ck&&!b.c2&&!b.i3)return I(b.dR)>0&&Dt(a,b.dR)?1:0;return 0;}return 0;}
function W8(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bn(B(162),Dn(a.e))){b=Ck(a);c=new Vx;c.uZ=a;d=R(C,3);e=d.data;e[0]=EG(a.e.f);f=Fy(a);g=GY(a);h=Bb(0,f-100|0);f=Z(CA(a.e.f)-1|0,g+100|0);i=BK(3);j=i.data;j[0]=Gd(a.e.f,h);k=a.e.f;l=0;f=Z(f+1|0,k.F.data.length);m=0;while(m<f){l=l+Fm(k,m)|0;if(m!=(k.F.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.f.dd;k=Cn();WS(n,n.cU,k);i=BK(3*k.i|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Br(k,m);h=p+1|0;o[p]=q.bS;l=h+1|0;o[h]=q.bW;p=l+1|0;o[l]=q.fv;m=m+1|
0;}e[2]=i;CP(b,c,B(213),d);}}
function HN(a){var b,c,d,e;b=ABE(Dn(a.e));if(b===null){b=a.iW;if(b!==null)b.l(a);}else{a.e1=FH();c=Ck(a);d=new PK;d.vl=a;e=R(C,1);e.data[0]=EG(a.e.f);CP(c,d,b,e);}}
function S2(a){var b,c,d,e,f,g,h;b=a.e.f.dd;c=Pk(b,b.cU);if(c===null)return;if(Bn(B(184),Dn(a.e)))Pt(a.e.f);a:{d=E7([CY(c),C9(c),c.b$.fv]);e=EG(a.e.f);f=BK(1);g=Dn(a.e);h=(-1);switch(Lm(g)){case 3401:if(!Bn(g,B(214)))break a;h=3;break a;case 98723:if(!Bn(g,B(215)))break a;h=2;break a;case 3254818:if(!Bn(g,B(162)))break a;h=1;break a;case 3556653:if(!Bn(g,B(184)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Ck(a);c=new Yb;c.tR=a;CP(b,c,B(216),H(C,[e,f,d]));}
function GI(a,b,c){var d,e,f,g,h,i;if(c&&a.ef)return 0;d=D4(a.s);e=d.N;if(Dp(a.s)){f=a.e.f;g=a.s;h=Wu(f,g);if(c)TP(f,g,h);if(c){CE(a,d.N,d.bf,0);E9(a);DZ(a);}}else{h=Fd(EL(a.e.f.F.data[e]),B(190));i=Z(CA(a.e.f)-1|0,e);B4(a.s.bK,i,0);if(e>=(CA(a.e.f)-1|0))B4(a.s.bK,i,Fm(a.e.f,i));else B4(a.s.bU,i+1|0,0);if(c)GN(a);else CE(a,e,0,0);}b.l(h);return 1;}
function AA_(a,b){var c,d,e,f;a:{switch(b.bk){case 33:c=b.ck?IW(a,IM(a.bp,a.O),b.bI):HD(a,2-WG(DI(a),a.O)|0,0,b.c2,b.bI);break a;case 34:c=!b.ck?HD(a,WG(DI(a),a.O)-2|0,0,b.c2,b.bI):IW(a,((a.bp+DI(a)|0)/a.O|0)-1|0,b.bI);break a;case 35:if(!Hw(a,b.bI)&&!Dq(a,(Fu(a)).U,b.bI)){c=0;break a;}c=1;break a;case 36:if(!Hw(a,b.bI)&&!Dq(a,0,b.bI)){c=0;break a;}c=1;break a;case 37:c=b.ck;if(c&&b.c2){I6(a);d=a.fN;e=d.dk;if(e<=0)d=null;else{f=d.eV.data;c=e-1|0;d.dk=c;d=f[c];}if(d===null)c=1;else{CE(a,Jb(d),LP(d),0);a.s=RS(d.l8);c
=1;}break a;}c=Uw(a,(-1),c,b.bI);break a;case 38:c=HD(a,(-1),b.ck,b.c2,b.bI);break a;case 39:c=b.ck;if(c&&b.c2){d=a.fN;c=d.dk;if(c==(d.eW-1|0))d=null;else{f=d.eV.data;c=c+1|0;d.dk=c;d=f[c];}if(d===null)c=1;else{CE(a,Jb(d),LP(d),0);a.s=RS(d.l8);c=1;}break a;}c=Uw(a,1,c,b.bI);break a;case 40:c=HD(a,1,b.ck,b.c2,b.bI);break a;default:}c=0;}if(c&&b.bI)B4(a.s.bK,a.w,a.y);if(c)TR(a,ET(a.w,a.y),HS(a.e.f,a.w,a.y));return c;}
function I6(a){var b,c,d,e,f,g,h;b=a.fN;c=b.dk;b=c<0?null:b.eV.data[c];if(b!==null&&a.w==Jb(b)&&a.y==LP(b))return;d=a.fN;b=new Js;c=a.w;e=a.y;f=a.s;b.lo=ET(c,e);g=RS(f);b.l8=g;g.c4=0;e=d.dk;h=d.eW;if(e==(h-1|0))M0(d,b);else{c=e+1|0;while(c<h){XL(d);c=c+1|0;}M0(d,b);}d.dk=d.dk+1|0;}
function DZ(a){a.e.f.pL=JA(Ck(a));}
function Kf(a,b){var c,d,e,f,g,h,i;a.v4=null;Vs(a);c=a.e;a.e=b;a.e1=FH();d=ABE(Dn(a.e));if(d!==null){e=Ck(a);f=new MV;f.p1=a;g=R(C,1);g.data[0]=EG(a.e.f);CP(e,f,d,g);}g=(Cp(a.eB.mM)).data;h=g.length;i=0;while(i<h){g[i].mm(c,b);i=i+1|0;}}
function Vs(a){a.iy=null;Hy(a.ih);}
function ABE(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(Lm(b)){case 3401:if(!Bn(b,B(214)))break a;c=2;break a;case 98723:if(!Bn(b,B(215)))break a;c=1;break a;case 3254818:if(!Bn(b,B(162)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(217);break b;case 2:b=B(218);break b;default:b=null;break b;}b=B(219);}}return b;}
function OO(a,b){var c;c=Kl(a.e.f,b);if(c===null)return B(31);return c.u;}
function DG(a,b){return F_(b,a.ba,a.cw);}
function Lu(a,b){var c,d,e,f,g;a.ep=b;Bo(Bw(),B(220));b=a.ep;if(b===null){Bo(Bw(),B(221));Ko(a.cY,null);}else{b=b.data;c=DW(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.f4<<24>>24;e=e+1|0;}Ko(a.cY,c);}}
var HT=F(0);
function Ra(){C.call(this);this.s3=null;}
function AKb(a,b){var c;c=a.s3;WI(c,c.z,c.B);}
function Q$(){C.call(this);this.uB=null;}
function AMl(a,b){var c;c=a.uB;WI(c,c.B,c.z);}
function Q_(){C.call(this);this.oH=null;}
function AF1(a,b){QC(a.oH,b);}
function Q8(){C.call(this);this.sh=null;}
function AFB(a,b){QC(a.sh,b);}
function Q9(){C.call(this);this.mS=null;}
function ALZ(a,b){return ABC(a.mS,b);}
function HO(){var a=this;C.call(a);a.j_=null;a.oY=null;a.mz=null;}
function AWM(a,b){var c=new HO();Sr(c,a,b);return c;}
function AWN(a,b,c){var d=new HO();VO(d,a,b,c);return d;}
function Sr(a,b,c){VO(a,b,null,c);}
function VO(a,b,c,d){a.j_=b.bT;a.oY=c;a.mz=d;}
function APo(a,b){var c,d;if(b.ck&&b.bk==79){c=a.oY;if(c!==null&&b.bI)Wq(a.j_,c);else LW(a.j_,a.mz);d=1;}else d=0;return d;}
function Q6(){C.call(this);this.qt=null;}
function ANW(a,b){var c,d;c=a.qt;d=DY(c.p,c.z)?c.z:!DY(c.p,c.B)?null:c.B;if(d!==null){KM(d,b);c.dn=null;}}
function Q7(){C.call(this);this.tC=null;}
function AKN(a,b){b=b;return ACJ(a.tC,b);}
var ACl=F();
var Zw=F(0);
function Z6(b,c,d){return HI(b,c,d,255,new B5);}
function HI(b,c,d,e,f){Cs(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Xj(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bn=g+i;e.bG=h+i;e.bl=j+i;return e;}
function JF(b,c,d,e,f){f=Xj(b,c,d,f);f.bH=e;return f;}
function GJ(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function Yo(){var a=this;C.call(a);a.cC=null;a.i1=null;a.cE=null;a.cb=null;a.bR=0.0;a.eh=null;a.d5=null;a.cX=null;a.ok=null;a.yC=null;a.yB=null;}
function KS(a){var b;b=a.eh;if(b!==null)b.sM();}
function JZ(a){var b;b=a.eh;if(b!==null)b.vq();}
function Xh(a,b){var c;c=a.i1.dP!==(D$()).activeElement?0:1;if(c)JZ(a);a.eh=b;if(c)KS(a);}
function FV(a,b){JZ(a);a.eh=b;KS(a);}
function DY(a,b){return b!==a.eh?0:1;}
function IT(a){return a.cC.cF;}
function GV(a,b){return Hq(a.cC,b.iM,B$(b.h1,a.bR));}
function Cz(a,b){return B$(b,a.bR);}
var SC=F();
function ASq(a,b){var c,d,e;c=b.ck;d=c&&!b.bI&&!b.c2&&!b.i3?1:0;a:{if(d){d=b.bk;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bI&&!c&&!b.c2&&!b.i3?1:0;d=d&&b.bk==46?1:0;}b:{if(!d){e=b.bk;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.j9=1;}return 0;}
function SD(){C.call(this);this.sj=null;}
function AFn(a,b){var c;c=a.sj.eh;return c!==null&&c.g6(b)?1:0;}
function B5(){var a=this;C.call(a);a.bn=0.0;a.bG=0.0;a.bl=0.0;a.bH=0.0;}
function ARc(a){var b=new B5();AM6(b,a);return b;}
function Cs(a,b,c,d,e){a.bn=b;a.bG=c;a.bl=d;a.bH=e;}
function AM6(a,b){a.bn=b.bn;a.bG=b.bG;a.bl=b.bl;a.bH=b.bH;}
function BA(a,b){a.bn=b.bn;a.bG=b.bG;a.bl=b.bl;a.bH=b.bH;return a;}
function AR2(a,b){if(a===b)return 1;return b!==null&&Co(a)===Co(b)&&KE(a,b)?1:0;}
function KE(a,b){return b.bn===a.bn&&b.bG===a.bG&&b.bl===a.bl&&b.bH===a.bH?1:0;}
var Ep=F(0);
function ABv(){C.call(this);this.cR=null;}
function AEx(){var a=new ABv();ALx(a);return a;}
function ALx(a){a.cR=Cn();}
function I4(a,b){RG(a.cR,0,b);}
function Kd(a,b){Wn(a.cR,b);}
function Je(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cR.i-1|0;while(c>=0){d=Br(a.cR,c);d.R.e9(b);e=d.V;f=d.eq.iq;if(!LS(e)){if(!Ue(e)&&!(!e.gT&&e.df!==null)){e.gT=0;Rd(e);g=e.d7;h=(g.dD+g.ev+5.0)/10.0;i=Cz(e.g4,e.jb);g=b.cF;j=e.d7;k=e.g8;l=h*2.0;CC(g,j);m=i+KR(g,k,l)|0;e.hQ=m;m=Ev(0,m,e.r.b);if(m){j=CK(b,m,e.r.a);CC(j,e.d7);g=e.g8;l=i;h=l+h;k=e.d7;n=k.dD;Ch(j,g,h,l+n-(n+k.ev)/16.0);g=e.df;if(g===null){g=CV(b);e.df=g;}CN(g,j);FT(j);Cs(e.lK,0.0,0.0,BM(e.df),C8(e.df));}}g=f.rc;j=e.df;if(j===null)Pn(e,b,0,e.r.b,
g);else{i=BM(j);f=f.qi;j=e.G;m=j.b;o=j.a;j=e.df;EI(b,m,o,j.fH,e.lK,j,f,g,0.0);m=e.r.b;if(i<m)Pn(e,b,i,m-i|0,g);}}Ct(b,1);i=Cz(d.bt,2.0);m=LS(d.V);f=d.bt;e=f.cX;f=f.ok;p=m?0:d.V.r.a;g=d.R.r;T(f,g.b,g.a+p|0);ADE(b,f,!m?d.V.G:d.R.G,d.eq.iq.kj, -i|0,e);f=d.R;ACV(b,f.r,f.G,i,p,Rq(d.eq.jn,d.bt.bR),d.eq.jn.mj,e);c=c+(-1)|0;}}
function ZG(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cR;if(c>=d.i)break;a:{e=Br(d,c);f=b.h;if(DH(e.V,f))g=DC(e.bt.cE,null);else{g=Cz(e.bt,7.0);h=Cz(e.bt,25.0);if(V2(e,f.b,g)){i=U_(e,f.b,h);if(PA(e,f.a,g)){g=DC(e.bt.cE,JP(i,B(222)));break a;}if(Qk(e,f.a,g)){g=DC(e.bt.cE,JP( -i|0,B(222)));break a;}}if(M1(e,f.a,g)){h=R9(e,f.a,h);if(Oi(e,f.b,g)){g=DC(e.bt.cE,JP(h,B(223)));break a;}if(T5(e,f.b,g)){g=DC(e.bt.cE,JP( -h|0,B(223)));break a;}}g=0;}}b:{c:{if(!g){if(!DH(e.R,b.h))break c;if(!e.R.bL(b)&&!DC(e.bt.cE,null))break c;}g
=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function ABu(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.cR;if(e>=f.i)break;a:{b:{g=Br(f,e);if(!DH(g.V,b.h)){if(!DH(g.R,b.h))break b;if(!g.R.cs(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function YE(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.cR;if(d>=e.i)return null;a:{f=Br(e,d);if(!c){b:{e=b.h;if(!LS(f.V)&&DH(f.V,e)){g=f.R.G;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.V.G;i=e.b-i|0;k=e.a-k|0;e=new Bf;g=new QH;g.o2=f;g.o5=i;g.o6=k;g.o7=e;g.o8=h;g.o3=j;}else{h=Cz(f.bt,7.0);i=Cz(f.bt,25.0);if(V2(f,e.b,h)){j=U_(f,e.b,i);if(PA(f,e.a,h)){g=Ie(f,e,j,(-1));break b;}if(Qk(f,e.a,h)){g=Ie(f,e,j,1);break b;}}if(M1(f,e.a,h)){i=R9(f,e.a,i);if(Oi(f,e.b,h)){g=Ie(f,e,(-1),i);break b;}if(T5(f,e.b,h)){g=
Ie(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=DH(f.V,b.h)?AWO:f.R.b_(b,c);e=f.R;if(e===null)g=null;else if(g===null)g=!DH(e,b.h)?null:AWO;}if(g!==null)break;d=d+1|0;}return g;}
function AEw(a,b,c){var d,e,f,g;d=0;while(true){e=a.cR;if(d>=e.i)break;a:{b:{f=Br(e,d);if(!DH(f.V,b.h)){if(!DH(f.R,b.h))break b;if(!f.R.cO(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function Le(a,b,c,d){var e,f;e=0;while(true){f=a.cR;if(e>=f.i)break;if((Br(f,e)).R.c1(b,c,d))return 1;e=e+1|0;}return 0;}
function ARf(a,b,c){var d,e,f;d=0;while(true){e=a.cR;if(d>=e.i)break;f=Br(e,d);e=f.R;e.jg(e.G,e.r,c);e=f.V;if(e.gM!==null){e.d7=null;e.hQ=0;e.gT=1;}J9(f);d=d+1|0;}}
function Oq(a,b){var c,d,e;c=0;d=0;while(true){e=a.cR;if(d>=e.i)break;Br(e,d);c=0|c;d=d+1|0;}return c;}
function P5(a,b,c){var d;d=0;while(true){b=a.cR;if(d>=b.i)break;Br(b,d);d=d+1|0;}}
function Y8(){var a=this;C.call(a);a.cG=null;a.ch=null;a.jA=null;a.jr=null;a.ho=null;a.iU=null;}
function MY(a){var b=new Y8();AGW(b,a);return b;}
function AGW(a,b){a.ch=Cn();a.iU=AWP;a.cG=b;Y(b.d5,a);}
function Ic(a,b,c){a.jA=c;a.ho=b;b=BV(a.ch);while(B7(b)){If(BY(b),a.ho);}}
function Gh(a,b,c,d){var e,f;e=a.cG;f=e.cb;if(V(f.b,f.a)&&e.bR!==0.0){if(a.jA!==null&&!DJ(a)){a.iU=d;a.jr=GV(a.cG,a.jA);e=TW(a,b,c,null);b=new Tn;b.tr=a;e.jC=b;FV(a.cG,a);return;}b=new BG;X(b);K(b);}c=new D0;Bl(c,B(224));K(c);}
function DL(a){var b;if(DJ(a)){b=a.cG;if(b.eh===a)b.eh=null;TM(a,null);a.iU.q();a.iU=AWP;}}
function PU(a,b,c,d,e){var f,g,h;f=Zq();S5(f);KY(f,c.dt());If(f,a.ho);H9(f,a.jr);G4(f,a.cG);if(d===null)g=b.b;else{g=b.b;g=a.cG.cb.b<((g+(Ea(d)).b|0)+(Ea(f)).b|0)?g-(Ea(f)).b|0:(g+(Ea(d)).b|0)-d.e0|0;}h=b.a;b=a.cG.cb;J5(f,Bb(0,Z(g,b.b-(Ea(f)).b|0)),Bb(0,Z(h,b.a-(Ea(f)).a|0)));b=new Nw;b.ue=a;b.ug=f;b.uf=e;f.jX=b;BZ(a.ch,f);return f;}
function TW(a,b,c,d){return PU(a,b,c,d,null);}
function AG8(a,b,c){var d,e;a.jr=GV(a.cG,a.jA);d=BV(a.ch);while(B7(d)){e=BY(d);H9(e,a.jr);G4(e,a.cG);}}
function Ix(a){var b,c;if(Ec(a.ch))return;Ct(a.cG.cC,1);b=0;while(true){c=a.ch;if(b>=c.i)break;JL(Br(c,b),a.cG);b=b+1|0;}}
function KA(a,b){var c,d;c=0;d=a.ch.i-1|0;a:{while(d>=0){c=Kp(Br(a.ch,d),b.h,a.cG.cE);if(c)break a;d=d+(-1)|0;}}return c;}
function Jv(a,b,c,d){var e,f;e=0;f=a.ch.i-1|0;a:{while(f>=0){e=Kg(Br(a.ch,f),b.h,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Jq(a,b,c){var d,e,f;d=null;e=a.ch.i-1|0;a:{while(e>=0){f=Br(a.ch,e);d=b.h;c=Es(f.ci,d);if(!c&&!L9(f.ci)){d=f.jC;if(d!==null)d.q();}d=!c?null:AWO;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function AFC(a,b){var c;if(!DJ(a))return 0;a:{switch(b.bk){case 27:DL(a);c=1;break a;default:}c=0;}return c;}
function AEv(b,c){var d,e,f;d=b.dv;e=c.cT;f=c.e0;b=new Bf;c=d.A;Py(b,(c.b-(e*3|0)|0)-f|0,(c.a-e|0)-f|0);return b;}
function TM(a,b){var c,d;c=a.ch.i-1|0;a:{while(true){if(c<0)break a;d=Br(a.ch,c);if(b===d)break;En(a.ch,c);TO(d);c=c+(-1)|0;}}}
function DJ(a){return a.ch.i<=0?0:1;}
function ABh(){var a=this;C.call(a);a.d0=null;a.lj=0.0;a.g2=0.0;a.gF=0;}
function AM$(){var a=new ABh();ARL(a);return a;}
function ARL(a){var b;b=S0(0,0,2,20);a.d0=b;a.lj=0.5;a.g2=0.0;HI(187,187,187,255,b.bm);}
function SZ(a){return a.d0.t.a;}
function Qq(a){return a.d0.t.b;}
function Tg(a,b){var c,d;a:{c=a.gF;if(b>a.g2)while(true){d=a.g2+a.lj;a.g2=d;a.gF=a.gF?0:1;if(b>d)continue;else break a;}}return a.gF==c?0:1;}
function PY(a,b,c){T(a.d0.A,b,c);}
function SH(a,b){a.g2=b+a.lj*1.25;a.gF=1;}
function Vr(a,b,c){if(a.gF)UO(a.d0,b,c.b,c.a);}
function K_(){var a=this;C.call(a);a.mf=null;a.v5=null;a.wf=0.0;a.o$=0;a.wm=0;a.wR=0;a.q_=0;a.xM=0;a.dD=0.0;a.ev=0.0;a.wc=0.0;a.l4=0.0;a.wj=0;a.na=null;}
function E3(a){return Df(a.dD+a.ev);}
function Ka(a,b){return Df((a.dD+a.ev)*b);}
function II(){var a=this;C.call(a);a.f_=null;a.f=null;a.jh=null;a.qk=null;}
function AS9(a,b){var c=new II();AEy(c,a,b);return c;}
function AWQ(a,b,c){var d=new II();QG(d,a,b,c);return d;}
function AEy(a,b,c){QG(a,b,null,c);}
function QG(a,b,c,d){var e,f,g,h,i,j,k;a.f_=d;a.jh=c;if(d===null)c=null;else{c=d.fo;c=c===null?null:!Ed(c,B(225))&&!Ed(c,B(226))&&!Ed(c,B(227))&&!Ed(c,B(228))&&!Ed(c,B(229))&&!Ed(c,B(230))?(Ed(c,B(197))?B(162):!Ed(c,B(231))?null:B(214)):B(215);}e=b.data;a.qk=c;c=new HU;f=e.length;if(!f)g=MZ(B(31));else{g=R(CD,f);h=g.data;i=0;while(i<f){j=new CD;k=R(B9,1);k.data[0]=Sg(e[i]);Ig(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.em=GE();c.eK=GE();c.fB=Cn();if(!b.length){c=new BG;X(c);K(c);}c.F=g;c.fT=0;c.cx=0;c.dd=Us(c);a.f=c;}
function Dn(a){var b;b=a.jh;if(b===null)b=a.qk;return b;}
function G6(a){var b;b=a.f_;return b===null?null:b.hY;}
function Wi(){var a=this;C.call(a);a.nn=null;a.sZ=null;a.tn=null;a.oQ=null;a.mM=null;a.rL=null;}
function KW(a,b,c){return XU(a,Cp(a.nn),b,c);}
function V1(a,b,c){return XU(a,Cp(a.sZ),b,c);}
function XU(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.uc(c,d))return g.wx;f=f+1|0;}return null;}
function Nv(a,b,c){var d,e,f,g;d=(Cp(a.tn)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.uc(b,c))return g.wF;f=f+1|0;}return null;}
function YJ(){var a=this;C.call(a);a.bU=null;a.bK=null;a.c4=0;}
function ANE(){var a=new YJ();AFQ(a);return a;}
function RS(a){var b=new YJ();AE$(b,a);return b;}
function AFQ(a){a.bU=new Gp;a.bK=new Gp;}
function AE$(a,b){var c;c=new Gp;a.bU=c;a.bK=new Gp;XE(c,b.bU);XE(a.bK,b.bK);a.c4=b.c4;}
function KN(a,b,c){B4(a.bK,b,c);if(!a.c4)B4(a.bU,b,c);}
function Qd(a,b){B4(a.bU,b,0);B4(a.bK,b+1|0,0);}
function D4(a){if(X9(a.bU,a.bK)>0)return a.bK;return a.bU;}
function FC(a){if(X9(a.bU,a.bK)<0)return a.bK;return a.bU;}
function AC9(a,b){var c,d,e,f;c=D4(a);d=FC(a);e=c.N;if(e<=b){f=BE(b,d.N);if(f<=0)return B3(b<=e?c.bf:0,f>=0?d.bf:(-1));}return null;}
function Dp(a){var b,c;b=a.bU;c=a.bK;return (b===c?1:c!==null&&Co(b)===Co(c)?(b.N==c.N&&b.bf==c.bf?1:0):0)?0:1;}
function AAa(a,b){var c,d;if(!Dp(a))return 0;c=D4(a);d=FC(a);return c.N<=b&&b<d.N?1:0;}
function Nt(){var a=this;C.call(a);a.eV=null;a.eW=0;a.dk=0;}
function M0(a,b){var c,d,e;c=a.eW;d=a.eV;if(c==d.data.length)a.eV=Dk(d,c+16|0);d=a.eV.data;e=a.eW;a.eW=e+1|0;d[e]=b;}
function XL(a){var b,c,d;b=a.dk;c=a.eW-1|0;if(b==c)a.dk=b-1|0;d=a.eV.data;a.eW=c;d[c]=null;}
function EV(){var a=this;C.call(a);a.bZ=0;a.b0=null;a.eF=null;a.dQ=0;a.da=0;}
var AWR=0;var AWS=0;var AWJ=0;function ABV(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.b0;j=i===b&&!i.ia?0:1;if(j){a.b0=b;Li(b,e.cF,d);}i=a.b0;k=i===null?0:E1(i)<g?IM(E1(a.b0),1024):IM(g,1024)+1|0;l=k<=a.dQ?0:1;if(l)a.dQ=k;if(!(!j&&!l)){if(AWR){m=b.fF;$rt_globals.console.info("fMeasure"+m.data);AWR=0;}if(!AWJ){i=c.br;b="alphabetic";i.textBaseline=b;}else{b=c.br;i="top";b.textBaseline=i;}a.da=h/1024|0;while(true){i=a.eF;if(i.i>=a.dQ)break;BZ(i,CV(e));}k=0;while(k<a.dQ){Ib(a,c,f,d,a.da+k|0);k=k+1|0;}a.b0.ia=0;}if(!Ec(a.eF)
&&h<=E1(a.b0)){k=h/1024|0;g=a.da;if(k!=g){if(MK(k-g|0)>=a.dQ){g=0;while(g<a.dQ){Ib(a,c,f,d,k+g|0);g=g+1|0;}a.da=k;}else{while(true){h=a.da;if(h>=k)break;Ib(a,c,f,d,h+a.dQ|0);a.da=a.da+1|0;}while(true){h=a.da;if(h<=k)break;Ib(a,c,f,d,h-1|0);a.da=a.da-1|0;}}}}}
function Lg(b,c){return (c-E3(b)|0)/2|0;}
function TK(b,c){return Lg(b,c)+b.q_|0;}
function Ib(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Ew(b);f=a.b0.fF;g=e*1024|0;h=O7(a,g);if(h>=a.b0.o.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bZ;a:{while(true){l=a.b0;if(h>=l.o.data.length)break a;l=NA(l,h);m=!AWJ?TK(d.data[l.cd],c):Lg(d.data[l.cd],c);n=d.data;o=f.data;CC(b,n[l.cd]);Ch(b,l.u,k,m);k=o[h]-j+a.bZ;if(k>1024.0)break;h=h+1|0;}}CN(Br(a.eF,e%a.dQ|0),b);}
function AC_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;if(Ec(a.eF))return;if(!a.dQ)return;if(j>E1(a.b0))return;r=a.b0;s=r.eo;t=r.o;u=j/1024|0;v=O7(a,j);w= -a.bZ|0;x=i;a:{while(true){y=t.data;z=y.length;if(v>=z)break a;ba=v!=(z-1|0)?0:1;if(w>=h)break;bb=s.data;r=Br(a.eF,u%a.dQ|0);bc=y[v];bd=bb[v]+a.bZ|0;be=u*1024|0;bf=(bd-be|0)>1024?0:1;bg=u+1|0;bh=bg*1024|0;bi=Z(bh,bd)-j|0;if(bf&&ba)bi=bi+a.bZ|0;if((w+bi|0)>h)bi=h-w|0;bj=l!==null?0:1;b:
{if(!bj){bk=!ba?a.bZ:2*a.bZ|0;z=l.b;bl=l.a;if(!(z<bl&&j<=bl&&(j+bi|0)>(z+bk|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bj){bm=!ba?a.bZ:2*a.bZ|0;if(j>=l.b&&(j+bi|0)<=(l.a+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(o&&!p)bo=k.b8.je;if(bc===m)bo=k.b8.qq;bp=BV(n);d:{e:{while(B7(bp)){f:{bq=BY(bp);if(bq!==null){if(!bq.cH(bc))break f;else break e;}if(bc===null)break e;}}bj=0;break d;}bj=1;}if(bj)bo=k.b8.oB;if(q!==null){y=q.lg;if(y===null)z=0;else{y=y.data;z=v>=y.length?0:y[v];}bo=Vp(k.dw,k,z,q.f4);}if(!bn&&!bl){l.a=Z(l.a,
E1(a.b0));bk=j>=l.b?bi:(Z(bd,bh)-l.b|0)-(!ba?a.bZ:0)|0;bh=(j+bi|0)<=(l.a+(!ba?a.bZ:2*a.bZ|0)|0)?0:(Z(bd,bh)-l.a|0)-(!ba?a.bZ:0)|0;bm=j-be|0;bl=w+c|0;br=bm;bj=bi-bk|0;Cs(e,br,0.0,bj,x);T(f,bj,i);IB(a,d,bl,b,f,e,bc,r,g,k,0,bo);bj=bm+bi|0;Cs(e,bj-bh|0,0.0,bh,x);T(f,bh,i);z=bl+bi|0;IB(a,d,z-bh|0,b,f,e,bc,r,g,k,0,bo);bs=bj-bk|0;bj=bk-bh|0;Cs(e,bs,0.0,bj,x);T(f,bj,i);IB(a,d,z-bk|0,b,f,e,bc,r,g,k,1,bo);}else{Cs(e,j-be|0,0.0,bi,x);T(f,bi,i);IB(a,d,w+c|0,b,f,e,bc,r,g,k,bn,bo);}j=j+bi|0;w=w+bi|0;if(!bf){v=v+(-1)|0;u=
bg;}v=v+1|0;}}}
function IB(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bH!==0.0&&f.bl!==0.0){m=j.u1.data[g.cS];if(k)n=j.b8.k1;else{g=m.nD;if(g===null)g=j.b8.es;if(l===null)l=BO(g);n=l;}g=m.nH;if(AWS)i=0.0;EI(b,c,d,e,f,h,g,n,i);return;}return;}}
function O7(a,b){var c,d,e,f,g,h,i;c=a.b0;d=c.fF;e=0;f=c.o.data.length;g=b;b=BE(e,f);if(b>0){c=new BG;X(c);K(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BE(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function Qz(a){a.b0=null;J_(a.eF,new QA);Hy(a.eF);}
function ACo(a,b,c,d,e,f,g,h,i){var j,k;j=E1(a.b0);if(j)j=j+a.bZ|0;if(!j)j=j-a.bZ|0;k=Bb( -a.bZ|0,j-g|0);if(k>=h)return;T(f,h-k|0,e);Bt(b,c+k|0,d,f,i);}
function AAG(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(EV,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B1(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.b0===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EV;f.bZ=3;f.eF=Cn();f.da=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)Qz(o);h=h+1|0;}return g;}
function ADf(){AWJ=0;}
function ABH(){var a=this;C.call(a);a.fa=null;a.cW=null;a.d6=null;a.eG=null;a.hX=null;a.hW=null;}
function Hu(){var a=new ABH();AIm(a);return a;}
function AIm(a){a.fa=new Bf;a.cW=new Bf;a.d6=new Bf;a.eG=new Bf;a.hX=new B5;a.hW=new B5;}
function PW(a){var b;b=a.cW;return !V(b.b,b.a)?0:1;}
function I0(a,b){return F_(b,a.d6,a.eG);}
function Fg(a,b,c,d){var e,f,g,h,i;e=I0(a,b);f=F_(b,a.fa,a.cW);if(!e&&!f)return null;if(!f){if(!d)c.l(XQ(a,b.b-a.d6.b|0));else c.l(OH(a,b.a-a.d6.a|0));}g=!d?a.fa.b+(a.cW.b/2|0)|0:a.fa.a+(a.cW.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new NU;b.to=a;b.tq=c;b.tp=i;}else{b=new NS;b.qf=a;b.qe=c;b.qg=i;}return b;}
function Gl(a,b,c){if(b!==null&&c!==null){BA(a.hX,c);BA(a.hW,b);return;}}
function AEg(b,c){var d;d=new Uf;d.rf=b;d.mB=c;return d;}
function OH(a,b){var c,d,e;c=a.eG.a;d=a.cW.a;e=c-d|0;return AEg(Z(Bb(0,b-(d/2|0)|0),e),e);}
function XQ(a,b){var c,d,e;c=a.eG.b;d=a.cW.b;e=c-d|0;return AEg(Z(Bb(0,b-(d/2|0)|0),e),e);}
function IE(a,b,c,d,e,f,g){NZ(a,b,c,d,e,f,g,1);}
function My(a,b,c,d,e,f,g){NZ(a,b,c,d,e,f,g,0);}
function NZ(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){T(a.eG,0,0);T(a.cW,0,0);}else{i=Z(g*3|0,d);j=Bb(PS(d,d,e),i);e=e-d|0;i=d-j|0;i=i?PS(b,i,e):0;if(!h){k=a.fa;k.b=i+c|0;k.a=f-g|0;l=a.cW;l.b=j;l.a=g;l=a.d6;l.b=c;l.a=k.a;k=a.eG;k.b=d;k.a=g;}else{k=a.fa;k.b=f-g|0;k.a=i+c|0;l=a.cW;l.b=g;l.a=j;l=a.d6;l.b=k.b;l.a=c;k=a.eG;k.b=g;k.a=d;}}}
function P9(a,b){F0(a,b);Gj(a,b);}
function F0(a,b){var c;c=a.d6;Bt(b,c.b,c.a,a.eG,a.hX);}
function Gj(a,b){var c,d;c=a.cW;c.b=c.b-2|0;c.a=c.a-2|0;d=a.fa;Bt(b,d.b+1|0,d.a+1|0,c,a.hW);b=a.cW;b.b=b.b+2|0;b.a=b.a+2|0;}
function Fr(a,b,c){return I0(a,b)&&Hl(c)?1:0;}
function ABI(){var a=this;C.call(a);a.xz=20;a.fc=null;a.eD=null;a.iH=null;a.kI=0;a.iG=0;a.jo=0.0;a.cA=null;a.lI=null;a.eQ=null;a.fw=null;a.fL=0;}
function AB2(){var a=new ABI();ARa(a);return a;}
function ARa(a){a.xz=20;a.fc=new Bf;a.eD=new Bf;a.cA=Cn();a.lI=DW(0);}
function X7(a,b){var c,d,e,f,g;c=a.fL;if(b==c)return;d=a.cA.i;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Bb(0,(c-1|0)/20|0);f=Bb(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){SS(a,b);a.fL=b;}else{if(a.fL>=b)while(true){if(g<f)break a;a.fL=Tm(Br(a.cA,g%d|0),a.eQ,a.fw,a.fL,b,e,a.jo);g=g+(-1)|0;}while(f<=g){a.fL=Tm(Br(a.cA,f%d|0),a.eQ,a.fw,a.fL,b,e,a.jo);f=f+1|0;}}}}
function Ko(a,b){if(b===null)b=DW(0);a.lI=b;}
function Ym(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;f=BV(a.cA);while(B7(f)){g=BY(f);h=a.fc;i=V(a.cA.i,a.iG);j=a.lI;k=g.eM.a;l=((g.jf.a-(b%i|0)|0)+i|0)%i|0;m=d.hf;n=b+l|0;o=g.M;n=n/o|0;p=l+k|0;q=BE(p,c);if(q<=0){o=k/o|0;k=0;p=0;q=0;while(p<o){i=n+p|0;if(K4(g,j,q,i,d,m)){i=V((p-k|0)+1|0,g.M);T(g.dS,BM(g.bo),i);Cs(g.d3,0.0,V(k,g.M),BM(g.bo),i);i=q;}else{r=Fx(d,j,q,m);E2(g,e,l+V(k,g.M)|0,h,m.e_,r);T(g.dS,BM(g.bo),g.M);Cs(g.d3,0.0,V(p,g.M),BM(g.bo),g.M);k=p;}p=p+1|0;q=i;}r=Fx(d,j,q,m);E2(g,e,l+V(k,g.M)|
0,h,m.e_,r);}else{if(q>0&&l<c){o=Bb(c-l|0,0);k=g.M;q=o/k|0;if(o%k|0)q=q+1|0;s=0;t=0;u=0;while(t<q){v=n+t|0;if(K4(g,j,u,v,d,m)){o=V((t-s|0)+1|0,g.M);T(g.dS,BM(g.bo),o);Cs(g.d3,0.0,V(s,g.M),BM(g.bo),o);v=u;}else{r=Fx(d,j,u,m);E2(g,e,l+V(s,g.M)|0,h,m.e_,r);T(g.dS,BM(g.bo),g.M);Cs(g.d3,0.0,V(t,g.M),BM(g.bo),g.M);s=t;}t=t+1|0;u=v;}r=Fx(d,j,u,m);E2(g,e,l+V(s,g.M)|0,h,m.e_,r);}if(p>i){n=b/g.M|0;o=Z(p%i|0,c);T(g.dS,BM(g.bo),g.M);k=b%C8(g.bo)|0;l=g.M;k=k/l|0;p=k+(o/l|0)|0;if(o%l|0)p=p+1|0;o=k;s=k;i=n;while(o<p){if(K4(g,
j,i,n+(o-k|0)|0,d,m)){l=V((o-s|0)+1|0,g.M);T(g.dS,BM(g.bo),l);Cs(g.d3,0.0,V(s,g.M),BM(g.bo),l);}else{r=Fx(d,j,i,m);l=s-k|0;q=g.M;E2(g,e,V(l,q)-(b%q|0)|0,h,m.e_,r);i=(n+o|0)-k|0;T(g.dS,BM(g.bo),g.M);Cs(g.d3,0.0,V(o,g.M),BM(g.bo),g.M);s=o;}o=o+1|0;}r=Fx(d,j,i,m);n=s-k|0;o=g.M;E2(g,e,V(n,o)-(b%o|0)|0,h,m.e_,r);}}}}
function J8(a,b,c,d){var e,f,g,h,i,j;e=a.cA.i;while(true){f=a.cA.i;g=V(f,a.iG);if(g>(d+a.kI|0))break;h=B3(0,g);i=new Nl;g=a.eD.b;f=a.kI;j=a.iH;i.dS=new Bf;i.d3=new B5;i.jf=h;i.dU=20;i.M=f;i.eM=B3(g,20*f|0);i.f0=TK(j,f);if(i.bo===null)i.bo=CV(b);BZ(a.cA,i);}if(f==e)return;SS(a,c);}
function SS(a,b){var c,d,e,f,g,h,i,j;c=a.cA;d=c.i;e=V((b/(d*20|0)|0)+1|0,d)*20|0;c=BV(c);while(B7(c)){f=BY(c);g=a.eQ;h=a.jo;Ew(g);i=0;while(true){j=f.dU;if(i>=j)break;j=e-V(d,j)|0;if(j<b)j=e;e=j+1|0;Gb(f,g,C5(e),V(f.M,i)+f.f0|0,h);i=i+1|0;}CN(f.bo,g);}}
function T0(a,b,c,d){var e;a.iH=b;a.kI=c;e=c*20|0;a.iG=e;b=CH(a.eQ,CK(d,a.eD.b,e));a.eQ=b;CC(b,a.iH);Sq(a.eQ,2);b=CH(a.fw,CK(d,a.eD.b,c));a.fw=b;CC(b,a.iH);Sq(a.fw,2);}
function N3(a){J_(a.cA,new Ql);Hy(a.cA);a.eQ=CH(a.eQ,null);a.fw=CH(a.fw,null);}
function VM(a,b,c,d,e){Cv(a.fc,b);T(a.eD,c,d);a.jo=e;}
var WB=F(0);
var Hx=F(0);
var EP=F();
function Ec(a){return a.i?0:1;}
function HP(a,b){var c,d,e,f,g,h;c=b.data;d=a.i;e=c.length;if(e<d)b=U1(Ih(Co(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BV(a);while(B7(f)){g=b.data;h=e+1|0;g[e]=BY(f);e=h;}return b;}
var Jj=F(0);
function F$(){EP.call(this);this.cy=0;}
function BV(a){var b;b=new NC;b.gU=a;b.me=a.cy;b.iI=a.nI();b.gj=(-1);return b;}
function Qt(a,b){var c,d;c=a.i;d=0;while(true){if(d>=c)return (-1);if(C6(b,Br(a,d)))break;d=d+1|0;}return d;}
function AMC(a,b){var c,d;if(!IO(b,Jj))return 0;c=b;if(a.i!=c.i)return 0;d=0;while(d<c.i){if(!C6(Br(a,d),Br(c,d)))return 0;d=d+1|0;}return 1;}
var Iw=F(0);
function NY(){var a=this;F$.call(a);a.cn=null;a.i=0;}
function Cn(){var a=new NY();AI3(a);return a;}
function AWT(a){var b=new NY();MS(b,a);return b;}
function AI3(a){MS(a,10);}
function MS(a,b){a.cn=R(C,b);}
function Jt(a,b){var c,d;c=a.cn.data.length;if(c<b){d=c>=1073741823?2147483647:Bb(b,Bb(c*2|0,5));a.cn=Dk(a.cn,d);}}
function Br(a,b){Jh(a,b);return a.cn.data[b];}
function ANx(a){return a.i;}
function BZ(a,b){var c,d;Jt(a,a.i+1|0);c=a.cn.data;d=a.i;a.i=d+1|0;c[d]=b;a.cy=a.cy+1|0;return 1;}
function RG(a,b,c){var d,e,f;Po(a,b);Jt(a,a.i+1|0);d=a.i;e=d;while(e>b){f=a.cn.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cn.data[b]=c;a.i=d+1|0;a.cy=a.cy+1|0;}
function En(a,b){var c,d,e,f;Jh(a,b);c=a.cn.data;d=c[b];e=a.i-1|0;a.i=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cy=a.cy+1|0;return d;}
function Wn(a,b){var c;c=Qt(a,b);if(c<0)return 0;En(a,c);return 1;}
function Hy(a){ZJ(a.cn,0,a.i,null);a.i=0;a.cy=a.cy+1|0;}
function Jh(a,b){var c;if(b>=0&&b<a.i)return;c=new Bz;X(c);K(c);}
function Po(a,b){var c;if(b>=0&&b<=a.i)return;c=new Bz;X(c);K(c);}
function J_(a,b){var c;c=0;while(c<a.i){b.l(a.cn.data[c]);c=c+1|0;}}
function Of(a,b){var c,d,e,f,g,h,i;c=a.cn;d=a.i;if(b===null)b=AVf;e=R(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}AAr(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.cy=a.cy+1|0;}
function U8(){C.call(this);this.yo=null;}
function U7(){C.call(this);this.rs=null;}
function APn(a,b){var c;c=a.rs;E$(c,FQ(b,IH(c)));}
function U3(){C.call(this);this.nV=null;}
function ANf(a,b){var c;c=a.nV;Io(c,FQ(b,QO(c)));}
function U2(){C.call(this);this.tE=null;}
function APj(a){var b,c;b=a.tE;c=b.id?0:1;b.id=c;b=new M;O(b);F9(G(b,B(232)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function U5(){C.call(this);this.rS=null;}
function AJ_(a){var b,c;b=a.rS;c=b.h4?0:1;b.h4=c;b=new M;O(b);F9(G(b,B(233)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function U4(){C.call(this);this.oe=null;}
function AMw(a){var b,c;b=a.oe;c=b.jD^1;b.jD=c;b=new M;O(b);F9(G(b,B(234)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Vv(){C.call(this);this.t2=null;}
function AOK(a){var b,c,d,e,f;b=a.t2;c=(b.dM+3|0)%6|0;b.dM=c;d=b.gE.data;e=d.length;f=0;while(f<e){b=d[f];b.bZ=c;b=b.b0;if(b!==null)b.ia=1;f=f+1|0;}}
function Vu(){C.call(this);this.qR=null;}
function AJN(a){var b;b=a.qR;b.bO=b.bO?0:1;N3(b.cY);b.cY=AB2();Sb(b,b.ba,b.cw,b.ct.bR);}
function Vw(){C.call(this);this.nC=null;}
function AFi(a){var b;b=a.nC;b.i0=b.i0?0:1;}
var Ft=F(Cj);
var AWH=null;var AWU=null;var AWI=null;var AWV=null;function AFs(){AFs=Bm(Ft);AMF();}
function AB9(a,b){var c=new Ft();ABY(c,a,b);return c;}
function ABY(a,b,c){AFs();C_(a,b,c);}
function AMF(){var b;AWH=AB9(B(235),0);AWU=AB9(B(236),1);b=AB9(B(237),2);AWI=b;AWV=H(Ft,[AWH,AWU,b]);}
function Ks(){C.call(this);this.xx=null;}
var AV3=null;var AWW=null;function AKx(){AKx=Bm(Ks);AR$();}
function AIj(a){var b=new Ks();YF(b,a);return b;}
function YF(a,b){AKx();a.xx=b;}
function AR$(){AV3=AIj(B(238));AWW=AIj(B(239));}
var US=F(0);
function Hl(a){return DC(a,null);}
function UX(b){var c;c=new NV;c.nU=b;return c;}
function MH(){C.call(this);this.nB=null;}
function ALD(a){KS(a.nB);}
function MI(){C.call(this);this.qU=null;}
function AJ4(a){JZ(a.qU);}
var Yf=F(0);
var AWP=null;function ADC(){AWP=new NL;}
function HU(){var a=this;C.call(a);a.F=null;a.dd=null;a.em=null;a.eK=null;a.fB=null;a.cx=0;a.fT=0;a.pL=0.0;}
function Us(a){var b,c,d,e,f,g,h,i;b=TN(a);c=new I1;d=new NY;e=N$(0,b,0);f=new X4;f.tB=e;MS(d,1);e=BV(f);g=0;while(true){h=d.cn.data;i=h.length;if(g>=i)break;h[g]=BY(e);g=g+1|0;}d.i=i;Uy(c,d);return c;}
function B1(a,b){return a.F.data[b];}
function CA(a){return a.F.data.length;}
function TN(a){return Gd(a,CA(a));}
function Fm(a,b){return a.F.data[b].U;}
function K7(a,b){var c,d,e,f,g,h,i;c=a.F.data;d=c[b];e=c[b+1|0];f=DP(LM(d.o,e.o));g=a.F;h=g.data.length;if(b<h&&b>=0){i=R(CD,h-1|0);c=i.data;Rm(g,b,i);c[b]=f;a.F=i;return;}d=new Bq;X(d);K(d);}
function Pi(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.F.data;if(!(c<d[b].U?0:1)){d=(B1(a,b)).o.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.u)){f=L(h.u,g);break a;}g=g-I(h.u)|0;f=f+1|0;}f=0;}EN();h=new Bv;d=BN(1);d.data[0]=f;Hs(h,d);GB(a,b,c,1,h);h=a.F.data[b];i=h.o;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].u);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].u)==1)h.o=Rm(i,j,R(B9,e-1|0));else{k=d[j];if(c<=0)l=DD(Dj(k.u,1),k.cS,k.cd);else if(c>=(I(k.u)-1|0)){l=new B9;m=k.u;VG(l,Cb(m,0,I(m)-
1|0),k.cS,k.cd);}else{i=BN(I(k.u)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.u,b);b=b+1|0;}b=n.length;while(c<b){m=k.u;e=c+1|0;n[c]=L(m,e);c=e;}l=DD(FZ(i),k.cS,k.cd);}d[j]=l;}h.U=h.U-1|0;Ef(h);}else if(b!=(d.length-1|0))K7(a,b);}
function Yk(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){XA(a.F.data[b],c,e[0]);return;}g=f-1|0;h=IQ(a.F.data[b],c);d=a.F;i=Dk(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.o.data;m=l.length;c=!m?0:I(l[m-1|0].u);JG(j,j.o.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fq(e[m]))j=DP(R(B9,0));else{j=new CD;l=R(B9,1);l.data[0]=DD(e[m],0,0);Ig(j,l);}d[b+m|0]=j;m=m+1|0;}JG(h[1],0,0,e[g]);d[b+g|0]=h[1];a.F
=i;}
function Wu(a,b){var c,d,e,f,g,h,i;c=D4(b);d=FC(b);e=c.N;if(e==d.N)return Cb(EL(a.F.data[e]),c.bf,d.bf);f=new M;O(f);b=a.F.data[c.N];e=c.bf;BD(B0(f,Dj(EL(b),e)),10);g=a.F;h=c.N+1|0;e=d.N;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;YS(B0(f,EL(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.F.data[d.N];i=d.bf;B0(f,Cb(EL(b),0,i));return N(f);}}b=new W3;X(b);K(b);}
function TP(a,b,c){var d;U6(a,b);d=D4(b);GB(a,d.N,d.bf,1,c);}
function U6(a,b){var c,d,e,f,g,h,i;a:{c=D4(b);d=FC(b);e=c.N;if(e==d.N)FY(a.F.data[e],c.bf,d.bf);else{b=a.F.data[e];FY(b,c.bf,b.U);FY(a.F.data[d.N],0,d.bf);e=c.N+1|0;f=d.N;g=a.F;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(CD,(h-f|0)+e|0);AAY(g,e,f,i);a.F=i;K7(a,c.N);break a;}b=new Bq;X(b);K(b);}b=new Bq;X(b);K(b);}}}
function HS(a,b,c){return ET(b,G5(B1(a,b),c));}
function NF(a,b){var c,d,e;c=0;d=0;while(true){e=a.F.data.length;if(c>=e)break;if((d+(B1(a,c)).U|0)>=b)return B3(c,b-d|0);d=d+((B1(a,c)).U+1|0)|0;c=c+1|0;}return B3(e,0);}
function Gd(a,b){var c,d,e;c=0;d=a.F.data.length;e=0;while(e<b){c=c+Fm(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Kl(a,b){return Ve(B1(a,b.by),b.bJ);}
function EG(a){var b,c,d,e,f,g,h,i,j;b=BN(TN(a));c=b.data;d=a.F.data.length;e=0;f=0;while(e<d){g=a.F.data[e].o.data;h=g.length;i=0;while(i<h){j=g[i].u;PR(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function GB(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cx=a.cx+1|0;f=a.fB;g=R(G9,1);h=new G9;h.eX=b;h.fx=c;i=L3(e,B(190),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=B3(b,c+I(i[0])|0);break a;}k=B3((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=B3(b,c);}i=g.data;h.k3=k;h.jT=d;h.g_=e;i[0]=h;BZ(f,g);JQ(a,b,c,d,e);}
function JQ(a,b,c,d,e){var f;f=Gd(a,b)+c|0;if(!d)PM(a.dd,f,I(e));else Ug(a.dd,f,I(e));}
function TH(a,b){var c,d,e;c=L3(b.g_,B(190),(-1));if(b.jT){Yk(a,b.eX,b.fx,c);PM(a.dd,Gd(a,b.eX)+b.fx|0,I(b.g_));}else{c=c.data;d=ANE();B4(d.bU,b.eX,b.fx);e=c.length;if(e==1)B4(d.bK,b.eX,b.fx+I(c[0])|0);else B4(d.bK,(b.eX+e|0)-1|0,I(c[e-1|0]));U6(a,d);Ug(a.dd,Gd(a,b.eX)+b.fx|0,I(b.g_));}return b.k3;}
function Pt(a){a.fT=a.cx;}
var EY=F();
function Mp(){EY.call(this);this.wx=null;}
function ML(){EY.call(this);this.wF=null;}
function Qg(){EY.call(this);this.xN=null;}
var G3=F(0);
var RF=F(0);
function Gp(){var a=this;C.call(a);a.N=0;a.bf=0;}
function B4(a,b,c){a.N=b;a.bf=c;}
function XE(a,b){a.N=b.N;a.bf=b.bf;}
function X9(a,b){var c;c=BE(a.N,b.N);if(c)return c;return BE(a.bf,b.bf);}
function Js(){var a=this;C.call(a);a.lo=null;a.l8=null;}
function Jb(a){return a.lo.by;}
function LP(a){return a.lo.bJ;}
var Ww=F(0);
function Tc(){C.call(this);this.hw=null;}
function FM(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.hw));}
function D8(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.hw));}
function AHG(a){var b,c;b=a.hw.byteLength;c=new M;O(c);G(U(G(c,B(240)),b),B(241));return N(c);}
var UU=F(0);
function K$(){var a=this;C.call(a);a.gR=null;a.fg=null;a.l2=null;}
function ACh(a,b){var c=new K$();AKs(c,a,b);return c;}
function ASJ(a,b,c){var d=new K$();N5(d,a,b,c);return d;}
function YQ(b){var c,d,e,f,g,h,i,j,k;c=new K$;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=U1(E(Wr),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=f[h];h=h+1|0;}}i=g.data;h=i.length;if(!h)j=R(Bv,0);else{j=R(Bv,h-1|0);g=j.data;h=0;k=g.length;while(h<k){g[h]=FF(i[h]);h=h+1|0;}}}else j=R(Bv,0);N5(c,d,b,j);return c;}
function AKs(a,b,c){N5(a,b,c,R(Bv,0));}
function N5(a,b,c,d){a.gR=b;a.fg=c;a.l2=d;}
function JK(a,b){var c,d,e;c=b|0;if(c===b)return c;d=EA(a);e=new M;O(e);G(G(e,B(242)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function EA(a){var b;b=a.gR;return FF(b!==null?b.name:a.fg.name);}
function AKV(a){var b,c,d,e,f;if(a.fg===null){b=a.l2;c=EA(a);d=Z5(b);e=new M;O(e);G(G(G(e,d),B(243)),c);c=N(e);}else{b=a.l2;c=EA(a);f=JK(a,a.fg.size);d=Z5(b);e=new M;O(e);U(G(G(G(G(e,d),B(243)),c),B(244)),f);c=N(e);}return c;}
function NV(){C.call(this);this.nU=null;}
function DC(a,b){Gx(a.nU,b);return 1;}
function ABs(){var a=this;EC.call(a);a.dB=0;a.ca=null;a.c8=0;a.vp=0.0;a.kR=0;}
function GE(){var a=new ABs();AIc(a);return a;}
function AIc(a){var b;b=AEc(16);a.dB=0;a.ca=R(Ik,b);a.vp=0.75;Va(a);}
function AEc(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Va(a){a.kR=a.ca.data.length*a.vp|0;}
function NT(a,b){return To(a,b)===null?0:1;}
function DO(a,b){var c;c=To(a,b);if(c===null)return null;return c.dH;}
function To(a,b){var c,d;if(b===null)c=Su(a);else{d=b.jz();c=Qe(a,b,d&(a.ca.data.length-1|0),d);}return c;}
function Qe(a,b,c,d){var e;e=a.ca.data[c];while(e!==null&&!(e.jc==d&&Zd(b,e.dE))){e=e.cQ;}return e;}
function Su(a){var b;b=a.ca.data[0];while(b!==null&&b.dE!==null){b=b.cQ;}return b;}
function Ld(a,b,c){var d,e,f;if(b===null){d=Su(a);if(d===null){a.c8=a.c8+1|0;d=UY(a,null,0,0);e=a.dB+1|0;a.dB=e;if(e>a.kR)Vo(a);}}else{e=b.jz();f=e&(a.ca.data.length-1|0);d=Qe(a,b,f,e);if(d===null){a.c8=a.c8+1|0;d=UY(a,b,f,e);e=a.dB+1|0;a.dB=e;if(e>a.kR)Vo(a);}}b=d.dH;d.dH=c;return b;}
function UY(a,b,c,d){var e,f,g;e=new Ik;f=null;e.dE=b;e.dH=f;e.jc=d;g=a.ca.data;e.cQ=g[c];g[c]=e;return e;}
function Vo(a){var b,c,d,e,f,g,h,i;b=a.ca.data.length;b=AEc(!b?1:b<<1);c=R(Ik,b);d=c.data;e=0;f=b-1|0;while(true){g=a.ca.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.jc&f;i=h.cQ;h.cQ=d[b];d[b]=h;h=i;}e=e+1|0;}a.ca=c;Va(a);}
function Zd(b,c){return b!==c&&!b.cH(c)?0:1;}
function CD(){var a=this;C.call(a);a.o=null;a.U=0;a.fF=null;a.eo=null;a.dy=null;a.g$=null;a.fZ=0;a.ia=0;a.hM=0;}
var AWX=0;var AWY=0;var AWL=0;function DP(a){var b=new CD();Ig(b,a);return b;}
function Ig(a,b){var c,d,e,f;c=b.data;a.o=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].u)|0;f=f+1|0;}a.U=d;Ef(a);}
function NA(a,b){return a.o.data[b];}
function G5(a,b){var c;c=Iz(a,b);return c<=0?0:a.dy.data[c-1|0];}
function Iz(a,b){var c,d,e,f;c=a.o.data.length;if(!c)return (-1);if(!(a.dy!==null&&!a.hM)){WR(a);d=0;e=0;f=a.o.data.length;while(d<f){e=e+I(a.o.data[d].u)|0;a.dy.data[d]=e;d=d+1|0;}a.hM=0;}d=Ui(a.dy,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Ve(a,b){var c;c=a.o.data;if(!c.length)return null;return c[Iz(a,b)];}
function FY(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.U){a.o=R(B9,0);Ef(a);a.U=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.o.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].u);i=I(a.o.data[f].u);j=BE(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.o.data[f];if(!b&&c==I(k.u)?1:0){g=a.o;a.o=Rm(g,e,R(B9,g.data.length-1|0));a.U=a.U-d|0;Ef(a);return;}a.o.data[e]=DD(Fd(Cb(k.u,0,b),Dj(k.u,c)),k.cS,k.cd);}else{g=a.o.data;l=g[e];m=g[f];if(b){if(b!=
I(l.u))a.o.data[e]=DD(Cb(l.u,0,b),l.cS,l.cd);e=e+1|0;}if(c==I(m.u))f=f+1|0;else if(c)a.o.data[f]=DD(Dj(m.u,c),m.cS,m.cd);g=a.o;a.o=AAY(g,e,f,R(B9,(g.data.length-f|0)+e|0));}a.U=a.U-d|0;Ef(a);}
function IQ(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(CD,[DP(R(B9,0)),a]);if(b>=a.U)return H(CD,[a,DP(R(B9,0))]);c=a.o;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].u);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(CD,[DP(K2(c,0,R(B9,d))),DP(K2(c,d,R(B9,f-d|0)))]);h=e[d];e=K2(c,0,R(B9,d+1|0));i=e.data;j=K2(c,d,R(B9,f-d|0));c=j.data;i[d]=DD(Cb(h.u,0,b),h.cS,h.cd);c[0]=DD(Dj(h.u,b),h.cS,h.cd);return H(CD,[DP(e),DP(j)]);}
function XA(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.o.data;if(e>=f.length)break a;g=I(f[d].u);if(b<=g)break;b=b-g|0;d=e;}}JG(a,d,b,c);}
function JG(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.o;f=e.data;g=f.length;if(!g){h=R(B9,1);h.data[0]=Sg(d);a.o=h;}else if(!b&&!c){i=R(B9,g+1|0);h=i.data;Eh(e,0,i,1,g);h[0]=Sg(d);a.o=i;}else{j=f[b];if(c<=0)k=DD(Fd(d,j.u),j.cS,j.cd);else if(c>=I(j.u))k=DD(Fd(j.u,d),j.cS,j.cd);else{l=I(d);m=l+c|0;n=I(j.u)-c|0;h=BN(I(j.u)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.u,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.u,g+c|0);g=g+1|0;}k=DD(FZ(h),j.cS,j.cd);}f[b]=k;}a.U=a.U+I(d)|0;Ef(a);}
function XB(a){var b,c,d,e,f,g;b=0;c=a.o.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Mo(f)){if(L(f.u,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Li(a,b,c){var d,e,f,g,h,i,j;d=a.o.data.length;e=a.fF;if(!(e!==null&&e.data.length>=d)){a.fF=AE9(d);a.eo=BK(d);a.fZ=1;}WR(a);if(!a.fZ)AWY=AWY+1|0;else{f=0;g=0.0;AWX=AWX+1|0;h=0;while(h<d){i=c.data;j=a.o.data[h];f=f+I(j.u)|0;a.dy.data[h]=f;CC(b,i[j.cd]);g=g+Eq(b,j.u);a.fF.data[h]=g;a.eo.data[h]=g+0.5|0;h=h+1|0;}a.U=f;a.fZ=0;a.hM=0;}}
function WR(a){var b;b=a.dy;if(!(b!==null&&b.data.length>=a.o.data.length)){a.dy=BK(a.o.data.length);a.hM=1;}}
function Ef(a){a.fZ=1;a.ia=1;a.hM=1;a.g$=null;}
function W$(a,b,c,d){var e,f,g,h,i,j,k;if(a.g$===null)a.g$=R($rt_arraycls($rt_intcls()),a.o.data.length);e=a.g$.data[d];if(e===null){e=c.data;f=a.o.data[d];CC(b,e[f.cd]);f=f.u;e=BK(I(f)-1|0);c=Gy(f);g=!d?0.0:a.fF.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;Yv(f,c,0,k);h[i]=g+Eq(b,f)+0.5|0;i=k;}a.g$.data[d]=e;}return e;}
function G7(a,b,c,d){var e,f,g,h,i;if(a.o.data.length&&b){if(!(!a.fZ&&a.eo!==null))Li(a,c,d);if(b>=a.U)return a.eo.data[a.o.data.length-1|0];e=0;f=0;a:{while(true){g=a.o.data;if(f>=g.length)break a;h=e+I(g[f].u)|0;i=BE(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eo.data[f];}return (W$(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function E1(a){var b,c,d;a:{b=a.o.data.length;if(b){c=a.eo.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function G0(a,b){var c;if(b>=a.U)return b+1|0;c=Iz(a,b);return a.dy.data[c];}
function EL(a){var b,c,d,e;b=new M;F1(b,a.U);c=a.o.data;d=c.length;e=0;while(e<d){B0(b,c[e].u);e=e+1|0;}return N(b);}
function MZ(b){var c,d,e,f;c=R(CD,1);d=c.data;e=new CD;f=R(B9,1);f.data[0]=Sg(b);Ig(e,f);d[0]=e;return c;}
function YX(){AWL=0;}
var NL=F();
function ARO(a){}
function B9(){var a=this;C.call(a);a.u=null;a.cS=0;a.cd=0;}
function Sg(a){var b=new B9();AQz(b,a);return b;}
function DD(a,b,c){var d=new B9();VG(d,a,b,c);return d;}
function AQz(a,b){VG(a,b,0,0);}
function VG(a,b,c,d){a.u=b;a.cS=c;a.cd=d;}
function Hp(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Mo(a){return I(a.u);}
function I1(){var a=this;C.call(a);a.cU=null;a.ed=0;}
var AWZ=null;var AW0=null;function AT3(a){var b=new I1();Uy(b,a);return b;}
function AS5(a,b){var c=new I1();Yp(c,a,b);return c;}
function VN(b,c){var d;d=BE(b.bS,c.bS);if(!d)d=BE(c.bW,b.bW);return d;}
function Uy(a,b){Yp(a,null,b);}
function Yp(a,b,c){var d,e;a.ed=0;if(Ec(c))return;Of(c,AWZ);if(b!==null)a.cU=MN(b);c=BV(c);while(B7(c)){d=BY(c);e=a.cU;if(e!==null){Rr(a,e,MN(d));continue;}a.cU=MN(d);}}
function Pk(a,b){var c;if(b.fb)return b;b=BV(b.bE);while(true){if(!B7(b))return null;c=Pk(a,BY(b));if(c!==null)break;}return c;}
function KH(a,b,c){var d,e,f;d=b.b$;if(d.bS==c.bS&&d.bW==c.bW?1:0){e=BV(b.bE);while(B7(e)){f=KH(a,BY(e),c);if(f!==null)return f;}return b;}b=BV(b.bE);while(true){if(!B7(b))return null;d=BY(b);if(Qm(d,c.bS,c.bW)){e=KH(a,d,c);if(e!==null)break;}}return e;}
function WS(a,b,c){BZ(c,b.b$);b=BV(b.bE);while(B7(b)){WS(a,BY(b),c);}}
function PM(a,b,c){a.ed=0;Jp(a,a.cU,b,c);}
function Jp(a,b,c,d){var e;if(C9(b)<c)return;a:{if(CY(b)>c){KF(b,d);F2(b,d);b=BV(b.bE);while(B7(b)){Jp(a,BY(b),c,d);}}else{if(!Kn(b,c)){if(a.ed)break a;if(C9(b)!=c)break a;}F2(b,d);if(CY(b)==c&&a.ed)KF(b,d);e=BV(b.bE);while(B7(e)){Jp(a,BY(e),c,d);}if(!a.ed){b.fb=1;a.ed=1;}}}}
function Ug(a,b,c){a.ed=0;Mt(a,a.cU,b,c);}
function Mt(a,b,c,d){var e,f,g,h;if(C9(b)<c)return;e=CY(b);f=c+d|0;if(e>f){e= -d|0;KF(b,e);F2(b,e);g=BV(b.bE);while(B7(g)){Mt(a,BY(g),c,d);}b.bE=NN(a,b.bE);}else{g=b.b$;if(c<=g.bS&&g.bW<=f?1:0){if(b!==a.cU){Jx(b,(-1));Kj(b,(-1));}else{Jx(b,0);Kj(b,0);}Hy(b.bE);}else{e=Kn(b,c);f=Kn(b,f);if(e&&f)F2(b, -d|0);else if(e)Kj(b,c);else{if(!f)return;Jx(b,c);F2(b, -d|0);}h=BV(b.bE);while(B7(h)){Mt(a,BY(h),c,d);}b.bE=NN(a,b.bE);if(!a.ed){b.fb=1;a.ed=1;}}}}
function NN(a,b){var c,d,e,f,g,h;c=Cn();d=null;Of(b,AW0);b=BV(b);while(B7(b)){e=BY(b);if(CY(e)==C9(e))continue;if(!e.fb){if(d!==null){BZ(c,d);d=null;}BZ(c,e);}else if(d===null)d=e;else{f=Z(CY(d),CY(e));g=Bb(C9(d),C9(e));h=MN(N$(f,g,d.b$.fv));h.dV=e.dV;h.fb=1;d=h;}}if(d!==null)BZ(c,d);return c;}
function Rr(a,b,c){var d,e;a:{if(OP(b,c)){d=BV(b.bE);while(true){if(!B7(d)){BZ(b.bE,c);c.dV=b;break a;}e=BY(d);if(OP(e,c))break;}Rr(a,e,c);return;}}}
function Sv(a,b,c,d){var e,f,g,h,i,j;if((C9(c)-CY(c)|0)<43)e=Cb(d,CY(c),C9(c));else{e=Cb(d,CY(c),CY(c)+20|0);f=Cb(d,C9(c)-20|0,C9(c));g=new M;O(g);G(G(G(g,e),B(163)),f);e=N(g);}e=Vy(e,B(190),B(245));f=Bw();g=CB(c);h=new M;O(h);i=U(h,b);BD(i,32);g=G(i,g);BD(g,9);G(g,e);Bo(f,N(h));c=BV(c.bE);j=b+1|0;while(B7(c)){Sv(a,j,BY(c),d);}}
function ACD(){AWZ=new XN;AW0=new XP;}
function AEf(){var a=this;C.call(a);a.bS=0;a.bW=0;a.fv=0;}
function N$(a,b,c){var d=new AEf();AIi(d,a,b,c);return d;}
function AIi(a,b,c,d){a.bS=b;a.bW=c;a.fv=d;}
function APW(a,b){var c;if(a===b)return 1;if(b!==null&&Co(a)===Co(b)){c=b;return a.bS==c.bS&&a.bW==c.bW&&a.fv==c.fv?1:0;}return 0;}
function AGR(a,b){var c;b=b;c=BE(a.bS,b.bS);if(!c)c=BE(b.bW,a.bW);return c;}
var XN=F();
function AJA(a,b,c){return VN(b,c);}
var XP=F();
function ALh(a,b,c){b=b;c=c;return VN(b.b$,c.b$);}
var EZ=F();
var AW1=null;var AW2=null;var AW3=null;var AW4=null;var AW5=null;var AW6=null;function AB7(){AW1=new VW;AW2=new VU;AW3=new VV;AW4=new VS;AW5=new VT;AW6=new Yt;}
var Hb=F(F$);
function AMf(a,b){var c;c=new Fj;X(c);K(c);}
function X4(){Hb.call(this);this.tB=null;}
function AIH(a){return 1;}
function ARB(a,b){var c;if(!b)return a.tB;c=new Bz;X(c);K(c);}
function YV(){var a=this;C.call(a);a.b$=null;a.dV=null;a.bE=null;a.fb=0;}
function MN(a){var b=new YV();AOb(b,a);return b;}
function AOb(a,b){a.fb=0;a.b$=b;a.dV=null;a.bE=Cn();}
function CY(a){return a.b$.bS;}
function C9(a){return a.b$.bW;}
function Jx(a,b){a.b$.bS=b;}
function Kj(a,b){a.b$.bW=b;}
function KF(a,b){var c;c=a.b$;c.bS=c.bS+b|0;}
function F2(a,b){var c;c=a.b$;c.bW=c.bW+b|0;}
function Kn(a,b){return CY(a)<=b&&b<C9(a)?1:0;}
function Qm(a,b,c){var d;d=a.b$;return d.bS<=b&&c<=d.bW?1:0;}
function OP(a,b){b=b.b$;return Qm(a,b.bS,b.bW);}
function AJI(a){var b,c,d,e,f;b=a.b$;c=b.bS;d=b.bW;e=b.fv;b=new M;O(b);BD(b,40);BD(U(G(U(G(U(b,c),B(43)),d),B(43)),e),41);b=N(b);c=a.fb;f=new M;O(f);F9(G(G(f,b),B(43)),c);return N(f);}
var OZ=F(0);
var Gi=F(EP);
var Kk=F(Gi);
var VW=F(Kk);
var Lx=F(EC);
var VU=F(Lx);
var VV=F(Hb);
var FG=F(0);
var VS=F();
var Pp=F(0);
var VT=F();
var Yt=F();
function H0(){var a=this;C.call(a);a.b8=null;a.W=null;a.u1=null;a.hf=null;a.dw=null;a.pF=null;a.qJ=null;a.tg=null;}
function AW7(a,b,c,d,e){var f=new H0();LT(f,a,b,c,d,e);return f;}
function Kr(){var b,c,d,e,f,g,h,i;b=new H0;c=new I5;d=new Hg;FP();JU(d,AW8);Lq(c,d,BH(AWC),BH(AW9),BH(AW$),BH(AWC),BH(AW_),BH(AXa),BH(AXb),BH(AXc),BH(AXd),BH(AXe));AB5();e=(AXf.gJ()).data;f=e.length;g=R(IP,f);h=g.data;i=0;while(i<f){h[i]=e[i].lr;i=i+1|0;}LT(b,c,g,AA0(Q(B(246)),Q(B(247)),Q(B(248)),Q(B(249))),F3(),ADq(Q(B(113)),Q(B(114)),Q(B(115)),Q(B(250))));return b;}
function LT(a,b,c,d,e,f){var g;g=c.data;a.pF=ER(B(150),16.0);a.qJ=ER(B(150),17.0);a.tg=ER(B(149),15.0);a.b8=b;a.u1=c;a.hf=d;if(g.length>=15){a.W=e;a.dw=f;return;}b=new BG;X(b);K(b);}
function I5(){var a=this;C.call(a);a.tv=null;a.es=null;a.vi=null;a.ym=null;a.oy=null;a.k1=null;a.qq=null;a.oB=null;a.lU=null;a.md=null;a.je=null;}
function AXg(a,b,c,d,e,f,g,h,i,j,k){var l=new I5();Lq(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Lq(a,b,c,d,e,f,g,h,i,j,k,l){a.tv=b;a.es=c;a.vi=d;a.ym=e;a.oy=f;a.k1=g;a.qq=h;a.oB=i;a.lU=j;a.md=k;a.je=l;}
function NC(){var a=this;C.call(a);a.hK=0;a.me=0;a.iI=0;a.gj=0;a.gU=null;}
function B7(a){return a.hK>=a.iI?0:1;}
function BY(a){var b,c;Pd(a);b=a.hK;a.gj=b;c=a.gU;a.hK=b+1|0;return c.rQ(b);}
function Q2(a){var b,c,d;if(a.gj<0){b=new D0;X(b);K(b);}Pd(a);a.gU.uH(a.gj);a.me=a.gU.cy;c=a.gj;d=a.hK;if(c<d)a.hK=d-1|0;a.iI=a.iI-1|0;a.gj=(-1);}
function Pd(a){var b;if(a.me>=a.gU.cy)return;b=new IS;X(b);K(b);}
function KV(){var a=this;KZ.call(a);a.o_=null;a.nQ=null;}
function Zn(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.o_;e=0;f=0;g=a.nQ;a:{while(true){if((e+32|0)>f&&DN(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Z(B8(b)+j|0,i.length);Nz(b,d,j,f-j|0);e=0;}if(!DN(c)){k=!DN(b)&&e>=f?AVY:AVX;break a;}i=g.data;j=Z(B8(c),i.length);l=new NJ;l.mP=b;l.p7=c;k=ABJ(a,d,e,f,g,0,j,l);e=l.ty;j=l.uQ;if(k===null){if(!DN(b)&&e>=f)k=AVY;else if(!DN(c)&&e>=f)k=AVX;}Xm(c,g,0,j);if(k!==null)break;}}EF(b,b.X-(f-e|0)|0);return k;}
var Pr=F(KV);
function ABJ(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(LN(h,2))break a;i=AVX;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Mb(l)){if((f+3|0)>g){j=j+(-1)|0;if(LN(h,3))break a;i=AVX;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CF(l)){i=D1(1);break a;}if
(j>=d){if(DN(h.mP))break a;i=AVY;break a;}c=j+1|0;m=k[j];if(!C4(m)){j=c+(-2)|0;i=D1(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(LN(h,4))break a;i=AVX;break a;}k=e.data;o=Eu(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.ty=j;h.uQ=f;return i;}
var IA=F(D3);
var XT=F();
function AHu(a,b){return b.text();}
function XR(){var a=this;C.call(a);a.s9=null;a.s$=null;}
function AFl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.s9;d=a.s$;e=R(Bv,8);f=BN(16);g=0;h=0;i=b.length;j=0;while(true){k=BE(j,i);if(k>0)break;k=k>=0?10:b.charCodeAt(j)&65535;if(k==10){l=HC(f,0,g);m=h+1|0;e=ADh(l,e,h);g=0;}else{m=f.data.length;if(m==g)f=NG(f,m*2|0);n=f.data;o=g+1|0;n[g]=k;m=h;g=o;}j=j+1|0;h=m;}c.l(AS9(ZZ(e,h),AJz(d)));}
var XS=F();
function AJr(a,b){AEb(b);}
var Hn=F(0);
function KI(){var a=this;C.call(a);a.dE=null;a.dH=null;}
function AHL(a,b){var c,d;if(a===b)return 1;if(!IO(b,Hn))return 0;a:{b:{c:{d:{c=b;b=a.dE;if(b!==null){if(!b.cH(c.dE))break c;else break d;}if(c.dE!==null)break c;}b=a.dH;if(b!==null){if(!b.cH(c.dH))break c;else break b;}if(c.dH===null)break b;}d=0;break a;}d=1;}return d;}
function Ik(){var a=this;KI.call(a);a.jc=0;a.cQ=null;}
function QX(){var a=this;C.call(a);a.w6=null;a.re=null;a.f5=null;}
function GL(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.f5.data;f=e.length-1|0;g=f;while(true){if(d>g)return Z(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.hA:i.hC;k=!c?i.k8:i.lv;if(j<=k&&k<(j+k|0))return h;j=BE(j,b);if(j<0)d=h+1|0;else{if(j<=0)break;g=h-1|0;}}return h;}
function L2(){var a=this;C.call(a);a.hC=0;a.lv=0;a.hA=0;a.k8=0;a.j1=0;}
function ZH(){var a=this;C.call(a);a.e_=null;a.ht=null;a.oT=null;a.uC=null;}
function AA0(a,b,c,d){var e=new ZH();ANX(e,a,b,c,d);return e;}
function ANX(a,b,c,d,e){a.e_=b;a.ht=c;a.oT=d;a.uC=e;}
function KC(){var a=this;CR.call(a);a.cM=null;a.gh=null;}
function AUG(a){var b=new KC();YG(b,a);return b;}
function YG(a,b){var c,d,e,f;Fi(a,b);c=ANT(a.p);a.gh=c;d=AD1(a.p,c);a.cM=d;Xh(a.p,d);Y(b.m.bu,a.gh);Y(b.m.dm,a.gh);Y(b.m.bu,a.cM);c=b.m.b2;d=new Sk;d.oL=a;Y(c,d);c=b.m.b2;d=new HO;e=a.cM;BO(e);f=new So;f.uz=e;Sr(d,b,f);Y(c,d);c=b.m.fI;d=a.cM;BO(d);e=new Sn;e.mw=d;Y(c,e);c=b.m.ga;d=new Sm;d.pK=a;Y(c,d);c=b.m.dm;d=new Sl;d.vr=a;Y(c,d);b=b.m.ey;c=new Sp;c.nj=a;Y(b,c);LL(a);}
function AHk(a,b){return K5(a.cM,b);}
function AKc(a){E6(a);Mi(a.cM);WC(a.gh);}
function AOc(a){return Mj(0);}
function AMJ(a,b,c){G2(a,b,c);a.k9(b,c);}
function AAs(a,b,c){LJ(a.cM,new Bf,b,c);}
function AGd(a,b){BO(b);PQ(a.gh,b);Lj(a.cM,b);}
function AEt(a,b){if(b.bk!=121)return 0;return 1;}
function Zt(a,b){var c,d,e;if(DY(a.p,a.cM)){c=a.gh;d=a.cM;e=new Te;e.qW=a;KG(c,b,d,a,d,e);}return 1;}
function Zb(){var a=this;Cx.call(a);a.l_=null;a.ln=null;a.di=null;a.gD=null;a.ft=null;a.hn=null;a.vH=null;a.hb=null;a.rt=null;a.mb=null;a.v1=null;a.w0=null;a.gb=null;a.jY=null;a.qH=0;}
function ASW(a){var b=new Zb();ALH(b,a);return b;}
function ALH(a,b){var c,d,e,f,g,h,i;Ek(a,b);c=(Kr()).b8.es;a.l_=c;a.ln=ARc(c);a.di=Ff(0,0,300,300);a.gD=S0(0,0,3,3);a.ft=Ff(0,0,300,300);a.hn=AM$();d=R(Bv,4);e=d.data;e[0]=B(201);e[1]=B(184);e[2]=B(223);e[3]=B(222);a.vH=d;a.hb=R(IK,e.length);c=b.be;f=b.m.bu;g=new T9;g.fr=a;Y(f,g);f=b.m.b2;g=new RX;g.vt=a;Y(f,g);f=b.m.mr;g=new RW;g.oJ=a;Y(f,g);f=b.m.fI;g=new RZ;g.xq=a;Y(f,g);f=b.m.jI;g=new RY;g.vU=a;Y(f,g);f=b.m.ey;g=new RV;g.wW=a;Y(f,g);b=b.m.dm;f=new RU;f.tA=a;Y(b,f);h=CK(a.bc.be,300,300);f=h.br;b="white";f.fillStyle
=b;b=h.br;f="white";b.strokeStyle=f;b=h.br;f=10.0;b.lineWidth=f;h.br.strokeRect(75.0,140.0,150.0,110.0);h.br.fillRect(130.0,190.0,40.0,60.0);h.br.beginPath();h.br.moveTo(50.0,140.0);h.br.lineTo(150.0,60.0);h.br.lineTo(250.0,140.0);h.br.closePath();h.br.stroke();F6(h,B(251),11.0);Lv(h,187,187,187);Pq(a,B(252),h);b=CV(a.bc.be);CN(b,h);FT(h);a.rt=b;Go(a.di,b);G$(a.di);BA(a.di.bv,a.l_);BA(a.di.bm,CM(204,120,50));b=CK(c,255,100);a.gb=b;F6(b,B(150),11.0);b=Bw();i=$rt_str(a.gb.br.font);g=new M;O(g);G(G(g,B(253)),i);Bo(b,
N(g));Eq(a.gb,B(254));Lv(a.gb,169,183,198);Pq(a,B(254),a.gb);b=CV(c);a.mb=b;CN(b,a.gb);Go(a.ft,a.mb);G$(a.ft);Gg(a.ft,CL(255));HF(a.ft,a.l_);a.v1=CV(c);BA(a.gD.bv,a.ln);}
function Pq(a,b,c){Ch(c,b,0.0,20.0);Ch(c,b,0.25,40.0);Ch(c,b,0.5,60.0);Ch(c,b,0.75,80.0);}
function Xb(a,b){JF(Fz(),0.5+Fz()*0.5,0.5+Fz()*0.5,1.0,b.bm);}
function AFw(a,b){var c;a.qH=a.qH+1|0;c=b/5.0;JF(c-(c|0),1.0,1.0,1.0,a.gD.bm);return Tg(a.hn,b);}
function AIz(a){var b,c,d,e,f,g;b=a.bc.be;Fv(b,a.ln);c=a.hb.data;d=c.length;e=0;while(e<d){UO(c[e],b,0,0);e=e+1|0;}DE(a.di,b,a.rt,0,0,0.5);f=a.mb;d=0;while(d<7){g=a.ft;DE(g,b,f,V(d,10+((10*g.t.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.w0;if(g!==null)Ur(a.gD,b,g,0,0,0.0);Vr(a.hn,b,new Bf);NW(b,B(255));}
function APe(a,b,c){var d,e,f,g,h,i,j,k,l;d=Bw();e=CB(b);f=new M;O(f);G(G(f,B(256)),e);Bo(d,N(f));g=Bw();d=new M;O(d);Fl(G(d,B(257)),c);Bo(g,N(d));h=B$(30.0,c);i=B$(10.0,c);j=0;while(true){k=a.hb.data;if(j>=k.length)break;l=1+j|0;k[j]=S0(V(i,l)+V(h,j)|0,h,h,h);Xb(a,a.hb.data[j]);j=l;}T(a.gD.A,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.di;g=d.A;h=b.b;d=d.t;T(g,(h-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.ft;d.A.a=b.a-d.t.a|0;}
function O5(a,b){var c,d,e,f,g;c=Bw();d=!b.hE?B(258):B(259);e=b.dR;f=b.bk;g=b.rZ;b=new M;O(b);F9(G(U(G(G(G(b,d),e),B(260)),f),B(261)),g);Bo(c,N(b));return 0;}
function Wz(){var a=this;CR.call(a);a.rE=null;a.dG=null;a.cL=null;a.eg=null;a.lE=null;}
function AQJ(a,b,c){var d;d=GV(a.p,a.lE);H9(a.dG,d);H9(a.cL,d);G4(a.dG,a.p);G4(a.cL,a.p);}
function NH(b){return I_(b,AQa());}
function I_(b,c){var d;d=P0();KB(d,KU(b,ID(c,25)),!b?null:I_(b-1|0,c));KB(d,KU(b,ID(c,20)),!b?null:I_(b-1|0,c));KB(d,KU(b,ID(c,15)),!b?null:I_(b-1|0,c));KB(d,KU(b,ID(c,10)),!b?null:I_(b-1|0,c));return Hv(d);}
function KU(b,c){var d;if(b){d=new M;O(d);G(G(U(d,b),B(36)),c);c=N(d);}return c;}
function KB(b,c,d){var e,f;e=new GC;f=JF(Fz(),1.0,1.0,1.0,new B5);Yd();Ht(e,f,AXh,AXi);if(d!==null)GP(b,c,e,d);else{d=new UC;d.tD=c;D5(b,c,e,d);}}
function AH3(a,b,c){var d,e;G2(a,b,c);b=a.p.cb;d=Ea(a.dG);e=Ea(a.cL);J5(a.dG,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);J5(a.cL,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AIP(a){var b,c,d,e,f,g,h,i;E6(a);b=a.bc.be;Ct(b,1);c=a.rE;d=a.p;e=d.cb;T(c.l0,e.b,B$(2.0,d.bR));T(c.kl,B$(2.0,d.bR),e.a);FP();f=AXd;g=d.cC;h=e.a/2|0;i=c.l0;Bt(g,0,h-(i.a/2|0)|0,i,f);g=d.cC;h=e.b/2|0;c=c.kl;Bt(g,h-(c.b/2|0)|0,0,c,f);JL(a.dG,a.p);JL(a.cL,a.p);Ix(a.eg);Ct(b,0);}
function AOy(a,b){var c,d,e;c=KA(a.eg,b);d=Kp(a.dG,b.h,a.p.cE);e=Kp(a.cL,b.h,a.p.cE);return !c&&!d&&!e?0:1;}
function AIX(a,b,c){return Jq(a.eg,b,c);}
function AGF(a,b,c){return DJ(a.eg);}
function ANQ(a,b,c,d){var e,f,g;e=Jv(a.eg,b,c,d);f=Kg(a.dG,b.h,c,d);g=Kg(a.cL,b.h,c,d);return !e&&!f&&!g?0:1;}
function XM(){var a=this;CR.call(a);a.hq=null;a.ex=null;a.ie=null;a.kJ=null;}
function AI0(a,b,c){if(b===0.0)X8(a);}
function AN_(a){var b;E6(a);b=a.bc.be;Je(a.ex,b);Ix(a.hq);}
function X8(a){var b,c,d,e,f,g,h;b=a.ie;if(b!==null){Kd(a.ex,b);J3(b);}b=(Kr()).W;c=AUv(a.p,new We);d=ER(B(149),14.0);e=ANV();f=0;while(f<300){g=C5(f);h=new YA;h.sn=B(262);h.sm=g;h.sl=B(263);Nc(e,B(262),g,B(263),h);f=f+1|0;}Wj(c,Q5(e));X_(c,b,d);g=ABZ(a.p);h=ZN(c,a.p);QM(h,b.lZ,b.kp);LR(g,h);g.eq=b;IN(g,B(264),a.kJ,2.0);a.ie=g;I4(a.ex,g);UQ(a);}
function AHf(a,b,c){G2(a,b,c);P5(a.ex,b,c);UQ(a);}
function UQ(a){var b,c,d;b=a.p.cb;Fo(a.ie,B3((b.b*2|0)/10|0,(b.a*4|0)/10|0),B3((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.ie;b=YD(c.R.r);d=new M;O(d);G(G(d,B(265)),b);IN(c,N(d),a.kJ,2.0);}
function APl(a,b){return Oq(a.ex,b);}
function Yw(){var a=this;CR.call(a);a.ib=null;a.fS=null;a.fi=null;a.jB=null;a.oX=null;a.iA=null;a.f1=null;a.fO=null;a.jv=0;a.gc=0;}
function W6(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.fS.i>0){d=Fz();e=a.fS;f=d*(e.i-1|0)|0;e=En(e,f);En(a.fi,f);f=a.gc;g=e.t;a.gc=f-V(g.b,g.a)|0;Ip(a.ib,e.c$);}c=c+1|0;}}
function Ky(a,b){var c,d,e,f,g,h,i,j;c=IT(a.p);CC(c,a.jB);d=0;while(d<b){e=ID(a.iA,1+(Fz()*19.0|0)|0);f=ALW();g=f.c$;h=a.ib;BO(c);i=new RC;i.pc=c;BA(g,Ho(h,e,i));(Xj(Fz(),1.0,1.0,f.bv)).bH=0.5;h=f.A;g=f.c$;T(h,g.bn|0,g.bG|0);h=f.t;g=f.c$;T(h,g.bl|0,g.bH|0);BZ(a.fi,e);BZ(a.fS,f);j=a.gc;h=f.t;a.gc=j+V(h.b,h.a)|0;d=d+1|0;}a.fO=Me(a.ib);}
function AOJ(a){var b,c,d,e,f,g,h,i;E6(a);b=a.bc.be;Ct(b,1);c=a.p.cC;if(a.fi.i){d=a.fO;d=CK(c,d.b,d.a);CC(d,a.jB);e=a.jB.dD;Bt(c,0,0,a.fO,a.oX);f=0;while(f<a.fi.i){g=Br(a.fS,f);h=Br(a.fi,f);g=g.c$;Ch(d,h,g.bn,g.bG+e);f=f+1|0;}g=a.f1;if(!(g!==null&&BM(g)==a.fO.b&&C8(a.f1)==a.fO.a))a.f1=CH(a.f1,CV(c));CN(a.f1,d);FT(d);i=0;while(i<a.fi.i){d=Br(a.fS,i);Gg(d,CL(0));DE(d,c,a.f1,0,0,0.0);i=i+1|0;}}Ct(b,0);}
function AHE(a,b){var c,d;if(a.jv){c=a.fO;d=Z(V(c.b,c.a),2211840);if(a.gc/d<=0.7)Ky(a,Ir(a.iA,5));else W6(a,Ir(a.iA,5));}return a.jv;}
function Ph(){var a=this;Cx.call(a);a.eb=null;a.f8=null;a.g0=null;a.kX=null;a.ea=0;a.sb=0;a.uI=null;a.l1=0;a.uX=0;a.tc=null;a.oN=null;}
function AFO(a){var b,c;b=a.ea;c=new M;O(c);U(G(c,B(266)),b);$rt_globals.console.info($rt_ustr(N(c)));Fv(a.eb,a.uI);IE(a.g0,a.ea,0,Ge(a),5000,a.kX.b,20);Ct(a.eb,1);P9(a.g0,a.eb);Ct(a.eb,0);b=a.ea;c=new M;O(c);U(G(c,B(266)),b);$rt_globals.console.info($rt_ustr(N(c)));X7(a.f8,a.ea/a.l1|0);Ym(a.f8,a.ea,Ge(a),a.oN,a.eb);}
function AQr(a,b,c){a.kX=b;VM(a.f8,B3(0,0),50,Ge(a),c);J8(a.f8,a.eb,0,Ge(a));}
function PZ(a){return 5000-Ge(a)|0;}
function Ge(a){return Z(a.sb,a.kX.a);}
function Db(){var a=this;Cx.call(a);a.lN=null;a.gL=null;a.vW=0.0;}
function AXj(a){var b=new Db();Gr(b,a);return b;}
function Gr(a,b){Ek(a,b);a.lN=Z6(0,0,64);a.gL=new Bf;NB(b.bT,Ia(Co(a)));}
function Sw(a){Fv(a.bc.be,a.lN);}
function S4(a,b,c){Cv(a.gL,b);a.vW=c;}
var Rc=F(Db);
var AEm=F(Db);
function AUi(a){var b=new AEm();ANo(b,a);return b;}
function ANo(a,b){var c,d,e,f,g,h;Gr(a,b);c=b.bT;d=new RB;d.wp=a;e=R(C,1);e.data[0]=B(267);CP(c,d,B(268),e);f=b.bT;g=new RA;g.yi=a;h=R(C,1);h.data[0]=ABb([1,2,3,4,5]);CP(f,g,B(269),h);f=b.bT;g=new Rz;g.oG=a;h=R(C,1);h.data[0]=ATB([1,2,3,4,5]);CP(f,g,B(270),h);f=b.bT;g=new Ry;g.v$=a;h=R(C,1);h.data[0]=E7([1,2,3,4,5]);CP(f,g,B(271),h);f=b.m.b2;d=new HO;g=new Rw;g.xd=a;c=new Rv;c.qs=a;VO(d,b,g,c);Y(f,d);}
function UR(a,b){var c,d,e,f,g,h;c=b.data;d=Bw();e=CB(c[0]);f=new M;O(f);G(G(f,B(272)),e);Bo(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((Sc(b,1)).hw));d=Bw();e=CB(c[1]);if(b===null)f=B(29);else{f=new M;O(f);B0(f,B(42));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)B0(f,B(43));U(f,c[g]);g=g+1|0;}B0(f,B(44));f=N(f);}h=new M;O(h);G(G(G(G(h,B(273)),e),B(274)),f);Bo(d,N(h));}
function Xe(){var a=this;Db.call(a);a.dX=null;a.e5=null;a.ky=null;a.pR=null;a.lD=null;}
function ALc(a,b){b=b/5.0;JF(b-(b|0),1.0,1.0,1.0,a.e5.bm);return 0;}
function AFp(a){Sw(a);DE(a.dX,a.bc.be,a.pR,0,0,0.5);Ur(a.e5,a.bc.be,a.ky,0,0,0.0);NW(a.bc.be,B(255));}
function AN9(a,b,c){var d,e,f;S4(a,b,c);T(a.e5.A,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dX;e=d.A;f=b.b;d=d.t;T(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Sz(){var a=this;Db.call(a);a.gt=null;a.rR=null;a.kb=null;a.iC=null;a.hJ=null;}
function ARV(a){var b,c,d,e,f,g;Sw(a);b=a.bc.be;c=a.iC;LD(b,c.b,c.a,a.hJ);b=a.gt;c=a.rR;d=a.gL;e=a.bc.be;f=0;while(true){g=0;while(true){DE(b,e,c,g,f,0.5);g=g+BM(c)|0;if(g>=d.b)break;}f=f+C8(c)|0;if(f>=d.a)break;}FI(a.bc.be);}
function AG9(a,b,c){S4(a,b,c);T(a.hJ,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function OT(){var a=this;Cx.call(a);a.ek=null;a.j6=null;a.fq=null;a.b7=null;a.eO=0;a.hT=null;a.eP=0;a.wX=20;a.yA=11;a.wB=220;a.jm=null;a.xh=5000;a.gO=0;a.fE=null;}
function ARY(a){var b,c,d,e,f,g,h;b=a.hT;c=a.eP;d=a.jm;IE(b,c,0,d.a,5000,d.b,20);Ct(a.ek,1);P9(a.hT,a.ek);if(a.b7===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Ch(a.j6,C5(e),0.0,c);}b=CV(a.ek);a.b7=b;CN(b,a.j6);}if(a.eP<=a.eO)while(true){f=a.eO;if(f<=a.eP)break;a.eO=f-20|0;b=a.fq;g=a.gO-1|0;a.gO=g;Ch(b,C5(g),0.0,20.0);H6(a.b7,a.fq,0,a.eO%220|0);Ew(a.fq);}else while(a.eO<(a.eP-20|0)){b=a.fq;g=a.gO+1|0;a.gO=g;Ch(b,C5((g+11|0)-1|0),0.0,20.0);H6(a.b7,a.fq,0,a.eO%220|0);Ew(a.fq);a.eO=a.eO+20|0;}b=Ff(0,0,BM(a.b7),C8(a.b7));HK(b,
0,0,BM(a.b7),C8(a.b7));Gg(b,a.fE.data[0]);HF(b,a.fE.data[1]);DE(b,a.ek,a.b7,400,0,1.0);g=a.eP%220|0;f=Z(C8(a.b7)-g|0,200);d=Ff(0,0,BM(a.b7),f);HK(d,0,g,BM(a.b7),f);Gg(d,a.fE.data[0]);HF(d,a.fE.data[1]);DE(d,a.ek,a.b7,0,0,1.0);h=Ff(0,f,BM(a.b7),(C8(a.b7)-f|0)-20|0);HK(h,0,0,BM(a.b7),(C8(a.b7)-f|0)-20|0);Gg(h,a.fE.data[1]);HF(h,a.fE.data[0]);DE(h,a.ek,a.b7,0,0,1.0);}
function AJj(a,b,c){Cv(a.jm,b);}
function AHK(a,b){return 0;}
function R7(a){return 5000-a.jm.a|0;}
function IF(){Db.call(this);this.dI=0;}
function Rs(a){var b,c;b=a.bc.bT;c=new Qo;c.mU=a;Q4(b,c,RP(a));}
function MF(a){var b,c,d,e;b=a.dI+1|0;a.dI=b;c=Ia(E(IF));d=new M;O(d);G(G(U(G(d,B(275)),b),B(36)),c);e=N(d);c=a.bc.bT;d=new Uv;d.p9=e;UH(c,e,d,RP(a));}
function RP(a){var b;b=new V8;b.oS=a;return b;}
function AO$(a,b,c,d){a:{switch(c){case 0:break;case 2:MF(a);break a;default:break a;}Rs(a);}return 1;}
function Qf(){var a=this;Cx.call(a);a.nz=null;a.fk=null;a.lF=null;a.ic=null;}
function ARP(a){var b;b=a.bc.be;Fv(b,a.nz);DE(a.fk,b,a.lF,0,0,0.5);}
function AMd(a,b,c){var d,e,f;d=a.fk;e=d.A;f=b.b;d=d.t;T(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Ga(){var a=this;Cx.call(a);a.oi=null;a.b9=null;a.dK=null;a.cZ=null;a.eC=null;a.d9=null;}
function Xg(a,b){var c,d;Ek(a,b);a.oi=CL(20);a.b9=Sy();a.dK=new Bf;a.cZ=new Bf;a.eC=new Bf;a.d9=new Bf;c=b.m.b2;d=new Qp;d.x3=a;Y(c,d);Y(b.m.bu,a);b=a.b9.bv;FP();BA(b,AWC);BA(a.b9.bm,AWE);}
function AAR(a){var b,c,d;b=a.bc.be;Fv(b,a.oi);c=a.b9;d=c.A;Bt(b,d.b,d.a,c.t,c.bv);Ct(b,1);c=a.b9;d=c.A;YC(b,d.b,d.a,c.t,a.dK,a.cZ,a.eC,a.d9,c.bm);Ct(b,0);}
function AL0(a,b){return 0;}
var O1=F(Ga);
function AMR(a,b,c){var d,e,f;d=a.b9;e=d.A;f=b.b;d=d.t;T(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);T(a.dK,0,0);T(a.cZ,Z(b.b,b.a),Z(b.b,b.a));b=a.eC;d=a.dK;T(b,d.b,d.a+20|0);b=a.d9;d=a.cZ;T(b,d.b,d.a+40|0);}
function AIa(a,b){var c,d,e;Cv(a.dK,b.h);b=a.cZ;c=a.b9;d=c.A;e=d.b;c=c.t;T(b,e+(c.b/2|0)|0,d.a+(c.a/2|0)|0);b=a.eC;c=a.dK;T(b,c.b,c.a+20|0);b=a.d9;c=a.cZ;T(b,c.b,c.a+40|0);return 0;}
function O2(){var a=this;Ga.call(a);a.fp=null;a.fj=null;}
function AJ$(a,b){var c;c=a.cZ;b=b.h;c.a=b.a-50|0;a.d9.a=b.a+100|0;return 1;}
function AGG(a){var b,c,d,e,f,g,h;b=Bb(a.dK.b,a.eC.b);c=Z(a.cZ.b,a.d9.b);d=Z(a.dK.a,a.cZ.a)-50|0;e=Bb(a.eC.a,a.d9.a)+50|0;Gk(a.b9,b,d,c-b|0,e-d|0);AAR(a);f=a.b9.A.b-10|0;W4(a,a.bc.be,10,f,a.dK,a.eC);g=a.b9;h=g.A.b+g.t.b|0;W4(a,a.bc.be,h,f,a.cZ,a.d9);}
function W4(a,b,c,d,e,f){var g;T(a.fp,c,a.b9.A.a);T(a.fj,d,e.a-a.b9.A.a|0);g=a.fp;Bt(b,g.b,g.a,a.fj,a.b9.bv);T(a.fp,c,e.a);T(a.fj,d,f.a-e.a|0);e=a.fp;Bt(b,e.b,e.a,a.fj,a.b9.bm);T(a.fp,c,f.a);e=a.fj;g=a.b9;T(e,d,(g.A.a+g.t.a|0)-f.a|0);e=a.fp;Bt(b,e.b,e.a,a.fj,a.b9.bv);}
function ALj(a,b,c){}
function WQ(){var a=this;CR.call(a);a.gV=null;a.ec=null;a.js=null;a.jt=null;a.tb=null;}
function AKk(a,b,c){if(b===0.0)NP(a);}
function ASc(a){var b;E6(a);b=a.bc.be;Je(a.ec,b);Ix(a.gV);}
function NP(a){W5(a,a.js);W5(a,a.jt);a.js=M8(a,0.5,0,B(276));a.jt=M8(a,1.0,1,B(277));I4(a.ec,a.js);I4(a.ec,a.jt);Xq(a);}
function W5(a,b){if(b!==null){Kd(a.ec,b);J3(b);}}
function M8(a,b,c,d){var e,f,g;e=ABZ(a.p);f=new Wm;g=new PB;g.te=a;g.tf=e;g.td=d;T7(f);f.h6=new B5;f.lq=new Bf;f.sk=g;f.p6=b;if(c)f=ZN(f,a.p);LR(e,f);e.eq=F3();return e;}
function AOq(a,b,c){G2(a,b,c);P5(a.ec,b,c);Xq(a);}
function Xq(a){var b;b=a.p.cb;Fo(a.jt,B3((b.b*2|0)/10|0,(b.a*2|0)/10|0),B3((b.b*7|0)/10|0,(b.a*7|0)/10|0));Fo(a.js,B3(b.b/10|0,b.a/10|0),B3((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function AK9(a,b){return Oq(a.ec,b);}
var Rx=F(KC);
function AKq(a){return Mj(1);}
function AMi(a,b,c){AAs(a,b,c);}
var ACt=F(0);
function H_(){var a=this;C.call(a);a.jn=null;a.iq=null;a.nF=null;a.pY=null;a.bj=null;a.lZ=null;a.kp=null;}
function AXk(a,b,c,d,e,f,g){var h=new H_();K8(h,a,b,c,d,e,f,g);return h;}
function K8(a,b,c,d,e,f,g,h){a.nF=b;a.pY=c;a.iq=d;a.bj=e;a.jn=f;a.lZ=g;a.kp=h;}
function F3(){var b,c,d;b=new H_;c=new HH;Yd();d=AXl;J1(c,d,AXm,AXn,AXo,AXp,d);K8(b,c,ABQ(),Zy(Q(B(278)),Q(B(111)),Q(B(112))),ABQ(),ZP(1,0.125),AXq,AXr);return b;}
function ADn(){var a=this;C.call(a);a.nc=null;a.s2=null;a.rz=null;a.qw=null;}
function ADq(a,b,c,d){var e=new ADn();AKo(e,a,b,c,d);return e;}
function AKo(a,b,c,d,e){a.nc=b;a.s2=c;a.rz=d;a.qw=e;}
function Vp(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dw.s2;break a;case 3:if(c!=3){b=b.dw.qw;break a;}b=b.dw.rz;break a;default:b=b.b8.es;break a;}b=b.dw.nc;}return b;}
function HG(a,b,c){return Vp(a,b,0,c);}
function Ms(){var a=this;C.call(a);a.i_=null;a.iz=null;}
function MC(a,b){var c;c=a.iz;a.iz=b;return c;}
function Jz(){var a=this;Ms.call(a);a.bQ=null;a.b4=null;a.fD=0;a.fM=0;}
function JS(a){var b;b=K0(a);if(b==2){if(K0(a.b4)<0)a.b4=Nf(a.b4);return OQ(a);}if(b!=(-2))return a;if(K0(a.bQ)>0)a.bQ=OQ(a.bQ);return Nf(a);}
function K0(a){var b,c;b=a.b4;c=b===null?0:b.fD;b=a.bQ;return c-(b===null?0:b.fD)|0;}
function Nf(a){var b;b=a.bQ;a.bQ=b.b4;b.b4=a;Ej(a);Ej(b);return b;}
function OQ(a){var b;b=a.b4;a.b4=b.bQ;b.bQ=a;Ej(a);Ej(b);return b;}
function Ej(a){var b,c,d;b=a.b4;c=b===null?0:b.fD;b=a.bQ;d=b===null?0:b.fD;a.fD=Bb(c,d)+1|0;a.fM=1;b=a.bQ;if(b!==null)a.fM=1+b.fM|0;b=a.b4;if(b!==null)a.fM=a.fM+b.fM|0;}
var AD5=F();
function AGu(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Pc;c=c.buffer;d.fC=c;d.mk=new $rt_globals.Int8Array(c);d.j7=new $rt_globals.Uint16Array(c);d.sK=new $rt_globals.Int32Array(c);d.pt=new $rt_globals.Float32Array(c);d.pM=new $rt_globals.Float64Array(c);e=d.fC.byteLength;c=new M;O(c);U(G(c,B(279)),e);CG(N(c));e=b.callToCpp1();c=new M;O(c);U(G(c,B(280)),e);CG(N(c));f=b.callToCpp2();c=new M;O(c);Fl(G(c,B(281)),f);CG(N(c));c=M3(d,b.getC8String());g=new M;O(g);G(G(g,B(282)),c);CG(N(g));c
=M_(d,b.getC16String());g=new M;O(g);G(G(g,B(283)),c);CG(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.fC,h,8));c=ACL(i);g=new M;O(g);G(G(g,B(284)),c);CG(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.fC,h,8));c=APv(j);g=new M;O(g);G(G(g,B(285)),c);CG(N(g));k=AAU(d,b.getCDoubleArray8(),8);l=ASe(k);c=new M;O(c);G(G(c,B(286)),l);CG(DT(c));l=AR4(b.getC8String(),B(287),d);c=LU();G(G(c,B(288)),l);CG(DT(c));l=AL6(b.getC16String(),B(289),
d);c=LU();G(G(c,B(290)),l);CG(DT(c));c=AN4(i,d,b.getCIntArray8(),E7([11,22,33,44,55,66,77,88]));g=LU();G(G(g,B(291)),c);CG(DT(g));c=APM(j,d,b.getCFloatArray8(),100,E7([111,222,333,444,555,666,777,888]));g=LU();G(G(g,B(292)),c);CG(DT(g));b=AP4(k,d,b.getCDoubleArray8(),1000,E7([1111,2222,3333,4444,5555,6666,7777,8888]));c=LU();G(G(c,B(293)),b);CG(DT(c));}
function APM(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(294);h=0;i=e;a:{while(h<g){if(Df(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.pt[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(295);}return B(296);}
function AP4(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(294);h=0;i=e;a:{while(h<g){if(Hm(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.pM[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(295);}return B(296);}
function AN4(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(294);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.sK[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(295);}return B(296);}
function AR4(b,c,d){var e,f,g,h;e=M3(d,b);if(!Bn(c,e))return B(297);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.mk[h])return B(298);f=f+1|0;}return B(295);}
function AL6(b,c,d){var e,f,g,h;e=M_(d,b);if(!Bn(c,e))return B(297);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.j7[h>>>1|0]&65535))return B(298);f=f+1|0;}return B(295);}
function CG(b){O_(B(2),b);}
function AKW(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Sk(){C.call(this);this.oL=null;}
function AMs(a,b){return AEt(a.oL,b);}
function So(){C.call(this);this.uz=null;}
function ARu(a,b){KM(a.uz,b);}
function Sn(){C.call(this);this.mw=null;}
function AMt(a,b,c){return GI(a.mw,b,c);}
function Sm(){C.call(this);this.pK=null;}
function ARe(a){var b,c;b=a.pK.cM;BO(b);c=new QN;c.nA=b;return c;}
function Sl(){C.call(this);this.vr=null;}
function AQD(a,b,c,d){return JN(a.vr.cM,c,d);}
function Sp(){C.call(this);this.nj=null;}
function AJv(a,b){b=b;return Zt(a.nj,b);}
function ADx(){IK.call(this);this.c$=null;}
function ALW(){var a=new ADx();AGp(a);return a;}
function Ff(a,b,c,d){var e=new ADx();ALV(e,a,b,c,d);return e;}
function AGp(a){St(a);a.c$=new B5;}
function ALV(a,b,c,d,e){St(a);a.c$=new B5;Gk(a,b,c,d,e);}
function G$(a){var b,c;b=a.t;c=a.c$;T(b,c.bl-c.bn|0,c.bH-c.bG|0);}
function Go(a,b){HK(a,0,0,BM(b),C8(b));}
function HK(a,b,c,d,e){Cs(a.c$,b,c,d,e);}
function DE(a,b,c,d,e,f){var g;g=a.A;EI(b,g.b+d|0,g.a+e|0,a.t,a.c$,c,a.bm,a.bv,f);}
function Gg(a,b){BA(a.bm,b);}
function HF(a,b){BA(a.bv,b);}
function T9(){C.call(this);this.fr=null;}
function AOj(a,b){var c,d,e,f,g,h,i;c=a.fr;d=c.jY;if(d!==null){e=c.di.A;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.jY=g;}d=b.h;f=d.b;c=c.gD;e=c.t;h=f-e.b|0;f=d.a-e.a|0;T(c.A,h,f);c=a.fr;d=c.bc.bT;b=b.h;f=0;a:{while(true){i=c.hb.data;if(f>=i.length)break;if(Es(i[f],b)){b=c.vH.data[f];break a;}f=f+1|0;}b=null;}Gx(d,b);return 1;}
function APU(a,b,c,d){if(!c&&d==2){b=a.fr;Xb(b,b.di);}return 1;}
function AIw(a,b,c){var d,e;d=Bw();e=new M;O(e);U(G(e,B(299)),c);Bo(d,N(e));if(!c){d=b.h;b=a.fr;b.jY=!Es(b.di,d)?null:d;PY(a.fr.hn,d.b,d.a);b=a.fr;SH(b.hn,JA(b.bc.bT));}return AWO;}
function AH8(a,b,c){var d;b=Bw();d=new M;O(d);U(G(d,B(300)),c);Bo(b,N(d));return 1;}
function RX(){C.call(this);this.vt=null;}
function AOd(a,b){return O5(a.vt,b);}
function RW(){C.call(this);this.oJ=null;}
function AQQ(a,b){return O5(a.oJ,b);}
function RZ(){C.call(this);this.xq=null;}
function ARm(a,b,c){var d,e;Bo(Bw(),B(301));d=!c?B(302):B(28);e=new M;O(e);G(G(G(e,B(303)),d),B(304));WF(b,N(e));return 1;}
function RY(){C.call(this);this.vU=null;}
function ARk(a){Bo(Bw(),B(305));}
function RV(){C.call(this);this.wW=null;}
function AMz(a,b){Bo(Bw(),B(306));return 1;}
function RU(){C.call(this);this.tA=null;}
function AJ9(a,b,c,d){var e,f,g;b=a.tA;e=( -d|0)/10|0;b=b.di;f=b.t;f.b=f.b+e|0;f.a=f.a+e|0;b=b.A;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function Hg(){var a=this;B5.call(a);a.gp=0;a.gs=0;a.gq=0;a.gr=0;}
function CL(a){var b=new Hg();ART(b,a);return b;}
function CM(a,b,c){var d=new Hg();AH0(d,a,b,c);return d;}
function Q(a){var b=new Hg();APP(b,a);return b;}
function Fw(a,b,c,d){var e=new Hg();QL(e,a,b,c,d);return e;}
function BH(a){var b=new Hg();JU(b,a);return b;}
function ART(a,b){QL(a,b,b,b,255);}
function AH0(a,b,c,d){QL(a,b,c,d,255);}
function APP(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.gp=I7(L(b,1))*17|0;a.gs=I7(L(b,2))*17|0;a.gq=I7(L(b,3))*17|0;a.gr=255;}else{a.gp=LC(L(b,1),L(b,2));a.gs=LC(L(b,3),L(b,4));a.gq=LC(L(b,5),L(b,6));a.gr=I(b)!=9?255:LC(L(b,7),L(b,8));}HI(a.gp,a.gs,a.gq,a.gr,a);return;}}
function QL(a,b,c,d,e){a.gp=b;a.gs=c;a.gq=d;a.gr=e;HI(b,c,d,e,a);}
function JU(a,b){a.gp=b.gp;a.gs=b.gs;a.gq=b.gq;a.gr=b.gr;BA(a,b);}
function I7(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function LC(b,c){return (16*I7(b)|0)+I7(c)|0;}
function Vj(){var a=this;C.call(a);a.l0=null;a.kl=null;}
function Z3(){var a=this;C.call(a);a.fu=null;a.ci=null;a.eu=null;a.gu=null;a.ly=null;a.cf=null;a.fU=null;a.cT=0;a.e0=0;a.lQ=0;a.g7=0;a.fW=0;a.jC=null;a.jX=null;a.ti=null;}
function Zq(){var a=new Z3();ARn(a);return a;}
function ARn(a){a.ci=Sy();a.eu=new Bf;a.gu=new Bf;a.cf=AXs;a.g7=(-1);}
function KY(a,b){T2(a);a.cf=b;}
function H9(a,b){a.fu=b;T2(a);}
function If(a,b){var c,d,e,f,g;a.ly=b.jn;c=b.bj.hL;BA(a.ci.bm,c);c=b.iq.kj;BA(a.ci.bv,c);d=0;while(true){e=a.cf.data;if(d>=e.length)break;c=e[d];f=b.bj;c.jG=f;c=c.dv;g=f.lp;f=f.hL;BA(c.bm,g);BA(c.bv,f);d=d+1|0;}}
function TO(a){a.fU=CH(a.fU,null);T(a.eu,0,0);a.cf=AXs;a.g7=(-1);Tk(a.ci);}
function G4(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=IT(b);d=b.bR;BO(a.fu);CC(c,a.fu);e=Ka(a.fu,1.25);f=0;a.cT=B$(2.0,d);a.e0=B$(3.0,d);a.lQ=B$(12.0,d);g=0;h=a.cf.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Q3(c,l.kA);n=a.lQ;n=(n+m|0)+n|0;f=Bb(f,n);b=l.dv;l=b.A;l.b=g;l.a=0;l=b.t;l.b=n;l.a=e;Cs(b.c$,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.eu;b.b=g;b.a=e;b=a.ci.t;n=a.fW;if(!n){m=a.cT;m=(g+m|0)+V(m,a.cf.data.length)|0;}else m=(f+(a.cT*2|0)|0)+(a.e0*2|0)|0;b.b=m;if(!n)e=e+(a.cT*2|0)|0;else{n=a.cT;e=(V(e+n|0,a.cf.data.length)
+n|0)+(a.e0*2|0)|0;}b.a=e;}
function J5(a,b,c){var d,e,f,g,h,i,j;T(a.ci.A,b,c);d=a.cT+a.e0|0;e=a.cf.data;f=e.length;g=0;h=d;while(g<f){i=e[g].dv;j=i.A;j.b=b+d|0;j.a=c+h|0;if(!a.fW){if(!i.t.b)AEE();d=d+(i.t.b+a.cT|0)|0;}else{if(!i.t.a)AEE();h=h+(i.t.a+a.cT|0)|0;}g=g+1|0;}}
function AEE(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Ea(a){var b,c;b=a.eu;if(b.b&&b.a)return a.ci.t;c=new Bq;Bl(c,B(307));K(c);}
function T2(a){T(a.eu,0,0);}
function JL(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.cC;if(!a.cf.data.length)return;a:{if(a.fU!==null){d=a.eu;if(V(d.b,d.a))break a;}d=a.eu;if(!V(d.b,d.a))G4(a,b);d=a.eu;e=d.b;f=d.a;if(!V(e,f))return;d=CK(c,e,f);CC(d,a.fu);g=Ka(a.fu,0.125);h=a.fu;i=h.dD;j=g+i-(i+h.ev)/16.0;k=a.cf.data;f=k.length;l=0;while(l<f){h=k[l];Ch(d,h.kA,h.dv.c$.bn+a.lQ,j);l=l+1|0;}h=CH(a.fU,CV(c));a.fU=h;CN(h,d);FT(d);}if(!L9(a.ci)){d=a.ci;ADE(c,d.t,d.A,d.bv,a.cT,a.gu);d=a.ci;h=d.t;m=d.A;d=d.bm;e=a.cT;n=a.gu;n.b=(h.b-e|0)-e|0;n.a=(h.a-
e|0)-e|0;Bt(c,m.b+e|0,m.a+e|0,n,d);if(a.fW){d=a.ci;ACV(c,d.t,d.A,0,0,Rq(a.ly,b.bR),a.ly.mj,a.gu);}}k=a.cf.data;l=k.length;o=0;while(o<l){DE(k[o].dv,c,a.fU,0,0,0.0);o=o+1|0;}b:{if(a.fW){k=a.cf.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].dv;m=a.gu;e=(a.ci.t.b-(a.cT*2|0)|0)-(a.e0*2|0)|0;b=h.t;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.A;Bt(c,d.b+b.b|0,d.a,m,h.bv);}o=o+1|0;}}}}
function Kp(a,b,c){var d,e,f,g,h,i;d=Es(a.ci,b);e=!d?(-1):Vl(a,b);f=a.g7;if(f!=e){if(f>=0){g=a.cf.data[f];NO(g,0);if(a.ti!==null){f=a.g7;h=Bw();g=CB(g);i=new M;O(i);G(G(U(G(i,B(308)),f),B(309)),g);Bo(h,N(i));}}if(e>=0){h=a.cf.data[e];g=a.jX;if(g!==null)g.nW(b,e,h);NO(h,1);}a.g7=e;}return d&&Hl(c)?1:0;}
function Kg(a,b,c,d){var e,f;e=Vl(a,b);if(e>=0){f=a.cf.data[e];if(!MD(f))f.mq.q();}return 1;}
function Vl(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cf.data;if(c>=d.length)return (-1);e=d[c].dv;if(Es(e,b))return c;if(a.fW){f=e.A;g=f.b;e=e.t;h=e.b;g=g+h|0;i=f.a;f=a.gu;f.b=(a.ci.t.b-(a.cT*2|0)|0)-h|0;f.a=e.a;if(ZB(b,g,i,f))break;}c=c+1|0;}return c;}
function S5(a){a.fW=1;}
function TA(){C.call(this);this.tI=null;}
function AOI(a,b){var c;c=a.tI;if(b.bk==32)TO(c.cL);return 0;}
function TD(){C.call(this);this.si=null;}
function AFa(a,b){var c,d,e,f;b=b;c=a.si;Bo(Bw(),B(310));if(!DJ(c.eg)){d=c.eg;b=b.h;e=NH(4);f=new VH;f.yD=c;Gh(d,b,e,f);}return 1;}
function AEj(){var a=this;C.call(a);a.iM=null;a.h1=0.0;}
function ER(a,b){var c=new AEj();AE2(c,a,b);return c;}
function AE2(a,b,c){a.iM=b;a.h1=c;}
function ASm(a,b){if(a===b)return 1;if(b!==null&&Co(a)===Co(b)){b=b;return a.h1===b.h1&&C6(a.iM,b.iM)?1:0;}return 0;}
var TC=F();
function AJR(a){Bo(Bw(),B(311));}
var Tz=F();
function AP7(a){Bo(Bw(),B(312));}
function C$(){var a=this;C.call(a);a.dv=null;a.mq=null;a.jG=null;a.ir=null;a.jW=null;a.kA=null;}
function AB$(a,b,c){var d=new C$();K9(d,a,b,c);return d;}
function AUj(a,b,c,d,e){var f=new C$();ABK(f,a,b,c,d,e);return f;}
function K9(a,b,c,d){ABK(a,b,c,d,null,null);}
function ABK(a,b,c,d,e,f){var g;g=ALW();a.dv=g;a.kA=c;a.jG=d;a.jW=f;a.mq=b;BA(g.bm,d.lp);BA(a.dv.bv,d.hL);a.ir=e;}
function MD(a){return a.ir===null?0:1;}
function NO(a,b){BA(a.dv.bv,!b?a.jG.hL:a.jG.pO);}
function OJ(){C.call(this);this.vV=null;}
function AG7(a,b){return b.hE&&b.bk==32?1:0;}
function OK(){C.call(this);this.qA=null;}
function AQn(a,b){var c,d,e,f,g,h;b=b;c=a.qA;if(!DJ(c.hq)){d=c.hq;b=b.h;e=R(C$,1);f=e.data;g=new C$;h=new VI;h.pB=c;K9(g,h,B(313),d.ho.bj);f[0]=g;Gh(d,b,FX(e),AWP);}return 1;}
var ACn=F();
function AAD(b){var c,d;c=CK(b,250,64);F6(c,B(251),25.0);Lv(c,187,187,187);Ch(c,B(314),0.0,24.0);Ch(c,B(314),0.25,56.0);d=CV(b);CN(d,c);FT(c);return d;}
function Zp(b){var c;c=new Wk;c.gQ=b;return c;}
function OL(){C.call(this);this.tZ=null;}
function ANn(a,b,c,d){return Le(a.tZ,b,c,d);}
function AD7(){var a=this;C.call(a);a.lM=0;a.lO=0;}
function AQa(){var a=new AD7();AQZ(a);return a;}
function AQZ(a){var b,c;b=ADS(EE((ACQ())));c=EE((ACQ()))^(-559038737);a.lM=b;a.lO=c;c=0;while(c<19){R0(a);c=c+1|0;}}
function R0(a){var b,c;b=a.lM;c=a.lO;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.lM=c;a.lO=b;return b;}
function ADS(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function Ir(a,b){return 5.960464477539063E-8*(R0(a)&16777215)*b|0;}
function Um(){C.call(this);this.mN=null;}
function AM3(a,b,c){var d;d=a.mN;if(b===0.0)Ky(d,100);}
function Un(){C.call(this);this.qu=null;}
function AFf(a,b){var c,d,e;c=a.qu;d=b.bk;if(d==32){c.jv=c.jv?0:1;e=1;}else if(d==13){Ky(c,1);e=1;}else if(d!=8)e=0;else{W6(c,1);e=1;}return e;}
var Ns=F(0);
function AEK(b,c){var d;d=new VF;d.vu=b;d.vv=c;return d;}
function ADu(){var a=this;C.call(a);a.fV=null;a.ge=0;a.iV=0;a.gd=0;}
function AEh(a){var b=new ADu();AI2(b,a);return b;}
function AI2(a,b){a.fV=Cn();a.gd=0;a.iV=2048;a.ge=b;}
function Ho(a,b,c){var d,e,f,g,h,i,j;d=c.q8(b);e=a.iV;if(d>e){c=new Bq;f=new M;O(f);BD(U(G(U(G(f,B(315)),d),B(316)),e),41);Bl(c,N(f));K(c);}if(!a.ge){b=new BG;Bl(b,B(317));K(b);}a:{b=new B5;if(d){b:{c=a.fV;if(c.i>0){c=BV(c);g=d;while(true){if(!B7(c))break b;f=BY(c);if(f.bl>=g)break;}Cs(b,f.bn,f.bG,g,a.ge);f.bn=f.bn+g;h=f.bl-g;f.bl=h;if(h===0.0)Wn(a.fV,f);break a;}}g=a.gd;i=d;Cs(b,0.0,g,i,a.ge);c=a.fV;f=new B5;h=a.gd;g=a.iV-d|0;j=a.ge;f.bn=i;f.bG=h;f.bl=g;f.bH=j;BZ(c,f);a.gd=a.gd+a.ge|0;}}return b;}
function Ip(a,b){var c,d,e,f,g,h,i;a:{c=ARc(b);b=a.fV;if(b.i>0){d=BV(b);while(true){if(!B7(d))break a;e=BY(d);if(e.bG===c.bG){f=e.bn;g=e.bl;h=f+g;i=c.bn;if(h===i){c.bn=f;c.bl=c.bl+g;Q2(d);}else{h=c.bl;if(i+h===f){c.bl=h+g;Q2(d);}}}}}}BZ(a.fV,c);}
function Me(a){return B3(a.iV,a.gd);}
function WP(){var a=this;C.call(a);a.rm=null;a.iZ=null;}
function AG1(a,b,c){if(c)return AWO;return Fg(a.iZ.g0,b.h,a.rm,1);}
function AOt(a,b,c){return 1;}
function AIq(a,b){var c;c=a.iZ;return Fr(c.g0,b.h,c.tc);}
function S9(){C.call(this);this.n9=null;}
function AHJ(a,b,c,d){var e,f;b=a.n9;e=(MK(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.ea=Z(Bb(0,b.ea+V(e,f)|0),PZ(b));return 1;}
function Qc(){C.call(this);this.uK=null;}
function APb(a,b){var c,d,e;c=a.uK;if(b.ck&&b.bk==79){if(!b.bI){b=c.bc.bT;d=new SB;d.uT=c;LW(b,d);}else{b=c.bc.bT;d=new SA;d.xb=c;Wq(b,d);}e=1;}else e=0;return e;}
function RB(){C.call(this);this.wp=null;}
function AFJ(a,b){var c,d,e,f;c=b.data;b=Bw();d=CB(c[0]);e=new M;O(e);G(G(e,B(272)),d);Bo(b,N(e));b=Bw();f=c[1];d=new M;O(d);G(G(d,B(318)),f);Bo(b,N(d));}
function RA(){C.call(this);this.yi=null;}
function AR3(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bw();e=CB(c[0]);f=new M;O(f);G(G(f,B(272)),e);Bo(d,N(f));g=FM(Sc(b,1));b=Bw();d=CB(c[1]);if(g===null)c=B(29);else{c=new M;O(c);B0(c,B(42));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)B0(c,B(43));BD(c,i[h]);h=h+1|0;}B0(c,B(44));c=N(c);}e=new M;O(e);G(G(G(G(e,B(319)),d),B(320)),c);Bo(b,N(e));}
function Rz(){C.call(this);this.oG=null;}
function AH5(a,b){UR(a.oG,b);}
function Ry(){C.call(this);this.v$=null;}
function ANh(a,b){var c,d,e,f,g;c=b.data;d=Bw();e=CB(c[0]);f=new M;O(f);G(G(f,B(272)),e);Bo(d,N(f));g=D8(Sc(b,1));b=Bw();d=CB(c[1]);c=ACL(g);e=new M;O(e);G(G(G(G(e,B(321)),d),B(322)),c);Bo(b,N(e));}
function Rw(){C.call(this);this.xd=null;}
function AMm(a,b){var c,d;c=EW();b=CB(b);d=new M;O(d);G(G(d,B(323)),b);Bo(c,N(d));b=new Fj;X(b);K(b);}
function Rv(){C.call(this);this.qs=null;}
function AOr(a,b){var c,d,e,f;c=a.qs;d=c.bc.bT;e=new Od;e.rx=c;f=R(C,1);f.data[0]=b;CP(d,e,B(324),f);}
function T8(){C.call(this);this.lc=null;}
function AQp(a,b){var c,d,e,f,g,h;c=a.lc;d=c.lD;if(d!==null){e=c.dX.A;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.lD=g;}b=b.h;f=b.b;c=c.e5;d=c.t;f=f-d.b|0;h=b.a-d.a|0;T(c.A,f,h);return 1;}
function AMr(a,b,c){var d;if(!c){d=b.h;b=a.lc;if(!Es(b.dX,d))d=null;b.lD=d;}return AWO;}
var C0=F(0);
var AW8=null;var AWE=null;var AW9=null;var AWC=null;var AW_=null;var AW$=null;var AXb=null;var AXa=null;var AXd=null;var AXc=null;var AXe=null;function FP(){FP=Bm(C0);AJl();}
function AJl(){AW8=CL(187);AWE=Q(B(325));AW9=CL(55);AWC=CL(43);AW_=CM(33,66,131);AW$=CM(60,63,65);AXb=Q(B(326));AXa=Q(B(327));AXd=Fw(85,85,85,128);AXc=Fw(43,43,43,0);AXe=Q(B(249));}
function Ux(){var a=this;C.call(a);a.p8=null;a.jw=null;}
function ANw(a,b,c){var d;if(!c){d=Fg(a.jw.hT,b.h,a.p8,1);if(d!==null)return d;}return AWO;}
function AG3(a,b,c){return 1;}
function AFV(a,b){var c;c=a.jw;return Fr(c.hT,b.h,UX(c.bc.bT));}
function N1(){C.call(this);this.t3=null;}
function AFN(a,b,c,d){var e,f;b=a.t3;e=(MK(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eP=Z(Bb(0,b.eP+V(e,f)|0),R7(b));return 1;}
function SM(){C.call(this);this.r0=null;}
function AQu(a,b){var c,d;a:{c=a.r0;switch(b.bk){case 67:MF(c);d=1;break a;case 86:Rs(c);d=1;break a;default:}d=0;}return d;}
var SL=F();
function AIr(a,b,c){return 0;}
function SJ(){C.call(this);this.pD=null;}
function APV(a,b,c){var d,e;d=a.pD;c=d.dI+1|0;d.dI=c;d=Ia(E(IF));e=new M;O(e);G(G(U(e,c),B(328)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));WF(b,e);return 1;}
var SI=F();
function ANP(a){return null;}
function SK(){C.call(this);this.nq=null;}
function AGT(a){var b,c;b=a.nq;c=new P4;c.r8=b;return c;}
function Se(){C.call(this);this.x7=null;}
function AIy(a,b){return 0;}
function QD(){C.call(this);this.x4=null;}
function AI8(a,b){return b.hE&&b.bk==32?1:0;}
function QE(){C.call(this);this.qD=null;}
function AFg(a,b){var c,d,e,f,g,h;b=b;c=a.qD;if(!DJ(c.gV)){d=c.gV;b=b.h;e=R(C$,1);f=e.data;g=new C$;h=new RI;h.mT=c;K9(g,h,B(313),d.ho.bj);f[0]=g;Gh(d,b,FX(e),AWP);}return 1;}
function QF(){C.call(this);this.r2=null;}
function AOQ(a,b,c,d){return Le(a.r2,b,c,d);}
function ABj(){var a=this;C.call(a);a.hY=null;a.k_=null;a.fo=null;a.yz=null;}
function AJz(a){var b=new ABj();AQt(b,a);return b;}
function AUD(a,b,c,d){var e=new ABj();ABO(e,a,b,c,d);return e;}
function AQt(a,b){ABO(a,null,null,b,null);}
function ABO(a,b,c,d,e){a.hY=b;a.k_=c;a.fo=d;a.yz=e;}
function AQ2(a,b){var c;if(a===b)return 1;if(b!==null&&Co(a)===Co(b)){c=b;return C6(a.hY,c.hY)&&C6(a.k_,c.k_)&&C6(a.fo,c.fo)?1:0;}return 0;}
var CX=F(0);
var AV4=null;var AXt=null;var AV6=null;var AV5=null;var AV8=null;var AV7=null;var AV$=null;var AV9=null;var AWa=null;var AV_=null;var AWb=null;function AM9(){AM9=Bm(CX);AL9();}
function AL9(){AV4=CL(206);AXt=Q(B(329));AV6=Q(B(330));AV5=Q(B(107));AV8=Q(B(331));AV7=Q(B(332));AV$=Q(B(333));AV9=Q(B(334));AWa=Fw(107,106,107,128);AV_=Fw(30,31,34,0);AWb=Q(B(109));}
function Cc(){Cj.call(this);this.kG=null;}
var AXu=null;var AXv=null;var AXw=null;var AXx=null;var AXy=null;var AXz=null;var AXA=null;var AXB=null;var AXC=null;var AXD=null;var AXE=null;var AXF=null;var AXG=null;var AXH=null;var AXI=null;var AWc=null;function ABD(){ABD=Bm(Cc);AGD();}
function Dx(a,b,c){var d=new Cc();XC(d,a,b,c);return d;}
function AS8(a,b,c,d){var e=new Cc();QJ(e,a,b,c,d);return e;}
function XC(a,b,c,d){ABD();C_(a,b,c);a.kG=Iu(d,null);}
function QJ(a,b,c,d,e){ABD();C_(a,b,c);a.kG=Iu(d,e);}
function AGD(){var b,c;b=new Cc;AM9();XC(b,B(335),0,AXt);AXu=b;AXv=Dx(B(336),1,Q(B(337)));AXw=Dx(B(338),2,Q(B(339)));AXx=Dx(B(340),3,Q(B(341)));AXy=Dx(B(342),4,AXt);AXz=Dx(B(343),5,Q(B(344)));AXA=Dx(B(345),6,Q(B(346)));AXB=Dx(B(347),7,Q(B(348)));AXC=Dx(B(349),8,Q(B(350)));c=new Cc;FP();QJ(c,B(351),9,AWE,Q(B(333)));AXD=c;AXE=AS8(B(352),10,AWE,Q(B(110)));AXF=Dx(B(353),11,Q(B(354)));AXG=Dx(B(355),12,Q(B(356)));AXH=Dx(B(357),13,AXt);b=Dx(B(358),14,Q(B(359)));AXI=b;AWc=H(Cc,[AXu,AXv,AXw,AXx,AXy,AXz,AXA,AXB,AXC,AXD,
AXE,AXF,AXG,AXH,b]);}
function IP(){var a=this;C.call(a);a.nH=null;a.nD=null;}
function Iu(a,b){var c=new IP();ALz(c,a,b);return c;}
function ALz(a,b,c){a.nH=b;a.nD=c;}
function HH(){var a=this;C.call(a);a.vD=null;a.pC=null;a.uV=null;a.rY=null;a.qj=null;a.jj=null;}
function AXJ(a,b,c,d,e,f){var g=new HH();J1(g,a,b,c,d,e,f);return g;}
function J1(a,b,c,d,e,f,g){a.vD=b;a.pC=c;a.uV=d;a.rY=e;a.qj=f;a.jj=g;}
function AC5(){var a=this;C.call(a);a.kj=null;a.rc=null;a.qi=null;}
function Zy(a,b,c){var d=new AC5();AOw(d,a,b,c);return d;}
function AOw(a,b,c,d){a.kj=b;a.rc=c;a.qi=d;}
function GC(){var a=this;C.call(a);a.lp=null;a.hL=null;a.pO=null;}
function AXK(a,b,c){var d=new GC();Ht(d,a,b,c);return d;}
function Ht(a,b,c,d){a.lp=b;a.hL=c;a.pO=d;}
function ABQ(){var b,c;b=new GC;c=Q(B(360));Yd();Ht(b,c,AXh,AXi);return b;}
function AAQ(){var b,c;b=new GC;c=Q(B(112));AJY();Ht(b,c,AXL,AXM);return b;}
function Zh(){var b,c;b=new GC;ABW();c=AXN;AOU();Ht(b,c,AXO,AXP);return b;}
function AEQ(){var a=this;C.call(a);a.mj=null;a.ru=0;}
function ZP(a,b){var c=new AEQ();ARK(c,a,b);return c;}
function ARK(a,b,c){var d;d=new B5;a.mj=d;a.ru=b;d.bH=c;}
function Rq(a,b){return B$(a.ru,b);}
var DS=F(0);
var AWg=null;var AWh=null;var AWd=null;var AWe=null;var AWf=null;var AXL=null;var AXM=null;var AWi=null;var AWj=null;function AJY(){AJY=Bm(DS);ANi();}
function ANi(){AWg=Q(B(332));AWh=Q(B(361));AWd=Q(B(112));AWe=Q(B(346));AWf=Q(B(329));AXL=Q(B(332));AXM=Q(B(362));AWi=Q(B(363));AWj=CM(43,45,48);}
var OR=F(0);
var Pa=F();
function AJc(a,b,c){var d,e;d=b;e=c;b=new M;O(b);U(G(U(G(b,B(364)),d),B(365)),e);CG(N(b));return d+e|0;}
var OS=F(0);
var O$=F();
function AKp(a,b,c){var d,e;d=b;e=c;b=new M;O(b);Fl(G(Fl(G(b,B(366)),d),B(365)),e);CG(N(b));return d+e;}
var ZV=F();
var Y3=F(0);
function Jy(){var a=this;C.call(a);a.d$=null;a.e4=null;a.fH=null;}
var AVM=0;function ACF(a){var b;b=a.e4;if(b!==null){AVM=AVM-1|0;a.d$.dx.deleteTexture(b);a.e4=null;}}
function BM(a){return a.fH.b;}
function C8(a){return a.fH.a;}
function TZ(a,b,c,d){var e;e=a.fH;e.b=b;e.a=c;L4(a);a.d$.dx.texStorage2D(3553,1,d,b,c);e=a.d$.dx;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function L4(a){var b,c;b=a.d$.dx;c=a.e4;b.bindTexture(3553,c);}
function CN(a,b){Ni(a,b.lP,b.kY,32856);PT(a,b,0,0);}
function Ni(a,b,c,d){var e,f,g,h;a:{e=a.fH;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){L4(a);break a;}e=a.d$.dx;h=a.e4;e.deleteTexture(h);a.e4=a.d$.dx.createTexture();TZ(a,b,c,d);break a;}}TZ(a,b,c,d);}}
function H6(a,b,c,d){L4(a);PT(a,b,c,d);}
function PT(a,b,c,d){var e;e=a.d$.dx;b=b.jP;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function T3(){C.call(this);this.ki=null;}
var AXs=null;function P0(){var a=new T3();AA9(a);return a;}
function AA9(a){a.ki=Cn();}
function D5(a,b,c,d){PE(a,AB$(d,b,c));}
function D6(b,c,d){return AB$(d,b,c);}
function GP(a,b,c,d){JJ(a,b,c,d,null);}
function JJ(a,b,c,d,e){PE(a,AUj(null,b,c,d,e));}
function PE(a,b){BZ(a.ki,b);}
function Hv(a){return FX(HP(a.ki,AXs));}
function YU(){AXs=R(C$,0);}
var DR=F(0);
var AXo=null;var AXp=null;var AXl=null;var AXm=null;var AXn=null;var AXh=null;var AXi=null;var AXq=null;var AXr=null;function Yd(){Yd=Bm(DR);APQ();}
function APQ(){AXo=Q(B(367));AXp=Q(B(368));AXl=Q(B(360));AXm=Q(B(369));AXn=Q(B(325));AXh=Q(B(367));AXi=Q(B(368));AXq=Fw(118,121,122,128);AXr=CM(63,66,68);}
var Gt=F(0);
var Xu=F();
function AO6(a,b,c,d){var e;b=Bw();d=CB(d);e=new M;O(e);G(G(U(G(e,B(370)),c),B(309)),d);Bo(b,N(e));}
var Xv=F();
function Wk(){C.call(this);this.gQ=null;}
function AFm(a,b){return KA(a.gQ,b);}
function AO8(a,b,c,d){return Jv(a.gQ,b,c,d);}
function AM7(a,b,c){return Jq(a.gQ,b,c);}
function AKy(a,b,c){return DJ(a.gQ);}
function Yu(){C.call(this);this.rW=null;}
function AOu(a,b){var c;c=a.rW.iZ;c.ea=FQ(b,PZ(c));}
var ABT=F();
function PJ(){C.call(this);this.nl=null;}
function AKG(a,b){var c;c=a.nl.jw;c.eP=FQ(b,R7(c));}
function Qp(){C.call(this);this.x3=null;}
function AKL(a,b){return 0;}
function RK(){C.call(this);this.mD=null;}
function AFq(a,b){return DC(a.mD,null);}
var Z$=F();
function Ci(){Cj.call(this);this.lr=null;}
var AXQ=null;var AXR=null;var AXS=null;var AXT=null;var AXU=null;var AXV=null;var AXW=null;var AXX=null;var AXY=null;var AXZ=null;var AX0=null;var AX1=null;var AX2=null;var AX3=null;var AX4=null;var AXf=null;function AB5(){AB5=Bm(Ci);ARF();}
function DK(a,b,c){var d=new Ci();Ya(d,a,b,c);return d;}
function AQE(a,b,c,d){var e=new Ci();ABM(e,a,b,c,d);return e;}
function Ya(a,b,c,d){AB5();C_(a,b,c);a.lr=Iu(d,null);}
function ABM(a,b,c,d,e){AB5();C_(a,b,c);a.lr=Iu(d,e);}
function ARF(){var b;b=new Ci;FP();Ya(b,B(335),0,AWE);AXQ=b;AXR=DK(B(336),1,Q(B(371)));AXS=DK(B(338),2,Q(B(372)));AXT=DK(B(340),3,Q(B(373)));AXU=DK(B(342),4,Q(B(371)));AXV=DK(B(343),5,CM(188,63,60));AXW=DK(B(345),6,Q(B(374)));AXX=DK(B(347),7,Q(B(375)));AXY=DK(B(349),8,Q(B(376)));AXZ=AQE(B(351),9,AWE,CM(52,65,52));AX0=AQE(B(352),10,Q(B(377)),Q(B(378)));AX1=DK(B(353),11,Q(B(379)));AX2=DK(B(355),12,Q(B(380)));AX3=DK(B(357),13,AWE);b=DK(B(358),14,Q(B(359)));AX4=b;AXf=H(Ci,[AXQ,AXR,AXS,AXT,AXU,AXV,AXW,AXX,AXY,AXZ,
AX0,AX1,AX2,AX3,b]);}
var AEa=F();
function ID(b,c){var d,e,f;if(c<=0)return B(31);d=BN(c);e=d.data;e[0]=ACZ(Ir(b,52));f=1;while(f<c){e[f]=ACZ(Ir(b,62));f=f+1|0;}return FZ(d);}
function ACZ(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AAS=F();
function AEC(){var a=this;C.call(a);a.EO=null;a.Cp=null;a.DA=0;a.C6=0;}
var ADY=F(0);
function ADG(b){var c;a:{switch(b){case 0:break;case 1:c=B(162);break a;case 2:c=B(215);break a;case 3:c=B(214);break a;default:c=null;break a;}c=B(184);}return c;}
var CS=F();
var ACf=F(CS);
var ACY=F(CS);
var Z0=F(CS);
var AAi=F(CS);
var ADv=F(CS);
function UC(){C.call(this);this.tD=null;}
function AL3(a){var b;b=a.tD;Bo(Bw(),b);}
var Gm=F(Cj);
var AX5=null;var AWD=null;var AX6=null;function AMn(){AMn=Bm(Gm);AIG();}
function ASb(a,b){var c=new Gm();ZF(c,a,b);return c;}
function ZF(a,b,c){AMn();C_(a,b,c);}
function AIG(){var b;AX5=ASb(B(381),0);b=ASb(B(382),1);AWD=b;AX6=H(Gm,[AX5,b]);}
var Zv=F();
function B$(b,c){return Df(b*c);}
function H$(){var a=this;C.call(a);a.f4=0;a.lg=null;}
var AAC=F();
function Wf(){C.call(this);this.jF=null;}
function APw(a,b){var c,d,e,f,g;c=a.jF;d=c.kb;if(d!==null){e=b.h;f=e.b-d.b|0;g=e.a-d.a|0;e=c.iC;e.b=Ev(0,e.b+f|0,c.gL.b-c.hJ.b|0);c=a.jF;d=c.iC;d.a=Ev(0,d.a+g|0,c.gL.a-c.hJ.a|0);}a.jF.kb=b.h;return 1;}
var AAN=F();
var IS=F(Bq);
function MV(){C.call(this);this.p1=null;}
function API(a,b){HM(a.p1,b);}
function Wp(){C.call(this);this.i4=null;}
function ARS(a){return a.i4;}
function AEJ(){var a=this;C.call(a);a.bt=null;a.V=null;a.R=null;a.eq=null;}
function ABZ(a){var b=new AEJ();ARQ(b,a);return b;}
function ARQ(a,b){var c;a.R=ASS();a.bt=b;c=new TQ;Lz(c);c.lK=new B5;c.g4=b;a.V=c;}
function IN(a,b,c,d){var e,f,g,h;e=a.V;f=C6(e.gM,c)?0:1;g=C6(e.g8,b)?0:1;h=d===e.jb?0:1;if(f){e.gM=c;e.d7=null;X6(e,0);}e.gT=!f&&!g&&!h?0:1;e.g8=b;e.jb=d;e.hQ=0;J9(a);}
function J3(a){var b;b=a.V;b.df=CH(b.df,null);a.R=CH(a.R,null);}
function LR(a,b){var c,d,e;c=a.R;d=c.G;e=c.r;b=CH(c,b);a.R=b;b.jg(d,e,a.bt.bR);}
function Fo(a,b,c){var d;d=a.R;d.jg(b,c,d.d8);J9(a);}
function J9(a){var b,c,d,e;b=a.V;c=a.R.r.b;b.r.b=c;d=b.df;if(d!==null&&c!=BM(d)&&!(c>=b.hQ&&BM(b.df)>=b.hQ))b.gT=1;b=a.V;b.d8=a.bt.bR;if(Ue(b))c=0;else{b=a.V;Rd(b);e=Cz(b.g4,b.jb);X6(b,E3(b.d7)+(e*2|0)|0);c=b.r.a;}b=a.V.G;d=a.R.G;T(b,d.b,d.a-c|0);}
function JP(b,c){if(b<0)c=B(383);else if(b>0)c=B(384);return c;}
function Oi(a,b,c){var d;d=a.V.G.b;return (d-c|0)<=b&&b<d?1:0;}
function T5(a,b,c){var d,e;d=a.V;e=d.G.b+d.r.b|0;return e<=b&&b<(e+c|0)?1:0;}
function PA(a,b,c){var d;d=a.V.G.a;return (d-c|0)<=b&&b<d?1:0;}
function Qk(a,b,c){var d,e;d=a.R;e=d.G.a+d.r.a|0;return e<=b&&b<(e+c|0)?1:0;}
function M1(a,b,c){var d,e,f;d=a.V.G.a-c|0;e=a.R;f=(e.G.a+e.r.a|0)+c|0;return d<=b&&b<f?1:0;}
function R9(a,b,c){var d,e;d=a.V.G.a+c|0;e=a.R;return AC2(b,d,(e.G.a+e.r.a|0)-c|0);}
function V2(a,b,c){var d,e,f;d=a.V;e=d.G.b;f=e-c|0;e=(e+d.r.b|0)+c|0;return f<=b&&b<e?1:0;}
function U_(a,b,c){var d,e;d=a.V;e=d.G.b;return AC2(b,e+c|0,(e+d.r.b|0)-c|0);}
function AC2(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BE(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function Ie(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bf;f=new Bf;g=b.b;h=b.a;b=a.R;i=b.G;j=i.b;k=i.a;b=b.r;l=b.b;m=b.a;b=new XV;b.op=a;b.oo=e;b.om=f;b.ol=c;b.ot=g;b.os=j;b.or=l;b.oq=d;b.ov=h;b.ou=k;b.sr=m;return b;}
var ACc=F(0);
var LE=F(0);
function RC(){C.call(this);this.pc=null;}
function AMK(a,b){return Q3(a.pc,b);}
var QA=F();
function AQ5(a,b){ACF(b);}
var YI=F();
function ADE(b,c,d,e,f,g){g.b=c.b;g.a=f;Bt(b,d.b,d.a,g,e);Bt(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;Bt(b,d.b,d.a+f|0,g,e);Bt(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function ACV(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;Bt(b,j,k,i,h);Bt(b,j,k,i,h);Bt(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;Bt(b,l,j,i,h);Bt(b,l,j,i,h);Bt(b,l+g|0,j+g|0,i,h);}
function Nl(){var a=this;C.call(a);a.bo=null;a.jf=null;a.eM=null;a.dU=0;a.M=0;a.dS=null;a.d3=null;a.f0=0;}
function Tm(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dU;i=V(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bb(i,e))a:{while(true){if(d<=e){j=d;break a;}Ew(c);j=d+(-1)|0;b=C5(d);d=V(j,a.M)%a.eM.a|0;Gb(a,c,b,a.f0,g);H6(a.bo,c,0,d);if(!(j%a.dU|0))break;d=j;}}else{Ew(b);k=a.dU-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Gb(a,b,C5(j),V(a.M,k)+a.f0|0,g);k=k+(-1)|0;j=h;}CN(a.bo,b);j=Bb(i,e);}return j;}k=a.dU;h=V(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Z(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Ew(c);b=C5((d+f|0)+1|0);j=d+1|0;d=
V(d,a.M)%a.eM.a|0;Gb(a,c,b,a.f0,g);H6(a.bo,c,0,d);if(!(j%a.dU|0))break;d=j;}}else{Ew(b);d=0;while(d<a.dU){h=h+1|0;Gb(a,b,C5((h>e?h-f|0:h)+f|0),V(a.M,d)+a.f0|0,g);d=d+1|0;}CN(a.bo,b);j=Z(i,e);}return j;}
function K4(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Fx(e,b,c,f)!==f.ht?0:1;}
function Fx(b,c,d,e){c=c.data;return d<c.length&&c[d]?HG(b.dw,b,c[d]):e.ht;}
function E2(a,b,c,d,e,f){EI(b,a.jf.b+d.b|0,c+d.a|0,a.dS,a.d3,a.bo,e,f,0.0);}
function Gb(a,b,c,d,e){Ch(b,c,a.eM.b-20.0*e,d);}
function Yb(){C.call(this);this.tR=null;}
function ANK(a,b){var c,d,e;c=a.tR;if(c.e.f.cx==c.k4){b=b.data;d=D8(b[0]);e=FM(b[1]);ABB(c.e.f,d,e);Pt(c.e.f);}}
var Y0=F();
function F_(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function ZB(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function ADI(){var a=this;C.call(a);a.by=0;a.bJ=0;}
function ET(a,b){var c=new ADI();ALn(c,a,b);return c;}
function ALn(a,b,c){a.by=b;a.bJ=c;}
function AFx(a,b){var c;if(a===b)return 1;if(b!==null&&Co(a)===Co(b)){c=b;return a.by==c.by&&a.bJ==c.bJ?1:0;}return 0;}
function AOP(a){var b,c,d,e,f,g,h;b=R(C,2).data;b[0]=F4(a.by);b[1]=F4(a.bJ);c=(-1515898884);d=0;while(d<b.length){e=b[d];if(e===null)f=0;else{g=e.fK;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;c=Ki(h,4)^((h>>>7|0)|h<<25)^Ki(c,13);d=d+1|0;}return c;}
function AOm(a,b){var c;b=b;c=BE(a.by,b.by);if(!c)c=BE(a.bJ,b.bJ);return c;}
function RT(){C.call(this);this.s8=null;}
function AMG(a,b){var c;c=a.s8;TI(c,EU(c,b.h));KN(c.s,c.w,c.y);GZ(c);}
var SG=F(0);
var AWO=null;function ACC(){AWO=new Qs;}
var FR=F(IA);
var Xs=F(EH);
function Qo(){C.call(this);this.mU=null;}
function ANL(a,b){var c,d;c=a.mU;d=c.dI+1|0;c.dI=d;c=new M;O(c);G(G(U(c,d),B(385)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Uv(){C.call(this);this.p9=null;}
function AQk(a){var b,c;b=a.p9;c=new M;O(c);G(G(G(c,B(386)),b),B(387));$rt_globals.console.info($rt_ustr(N(c)));}
var Mc=F(DV);
var AX7=0.0;var AX8=null;function ACE(){AX7=$rt_globals.NaN;AX8=E($rt_floatcls());}
var FD=F();
var AVq=null;var AVs=null;var AVt=null;var AVr=null;var AVp=null;function ABo(){AVq=E7([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AVs=AGY([Bd(1),Bd(10),Bd(100),Bd(1000),Bd(10000),Bd(100000),Bd(1000000),Bd(10000000),Bd(100000000),Bd(1000000000),Cd(1410065408, 2),Cd(1215752192, 23),Cd(3567587328, 232),Cd(1316134912, 2328),Cd(276447232, 23283),Cd(2764472320, 232830),Cd(1874919424, 2328306),Cd(1569325056, 23283064),Cd(2808348672, 232830643)]);AVt=AGY([Bd(1),Bd(10),Bd(100),Bd(10000),Bd(100000000),
Cd(1874919424, 2328306)]);AVr=new Ut;AVp=new VP;}
var Kb=F();
var AX9=null;var AX$=null;function AB8(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.nN=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.kE=0;c.kq=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Fc(CW(Bd(e),Bd(8388608)),Eo)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=ACe(AX$,f);if(h<0)h=( -h|0)-2|0;i=AX$.data;j=9+(f-i[h]|0)|0;k=Bd(e);l=AX9.data;m=EE(D7(BR(k,Bd(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=EE(D7(BR(k,Bd(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<
( -g|0);o=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BE(q,r);e=e>0?V(m/q|0,q):e<0?V(m/r|0,r)+r|0:V((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.kE=e;c.kq=h-50|0;}
function AAx(){var b,c,d,e,f,g,h,i;AX9=BK(100);AX$=BK(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AX9.data;g=d+50|0;f[g]=$rt_udiv(e,20);AX$.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:EE(Cq(Bd(h),Gu(BR(Bd(b&((1<<i)-1|0)),Bd(10)),i)));f=AX9.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AX$.data[i]=c;d=d+1|0;}}
function VP(){var a=this;C.call(a);a.kE=0;a.kq=0;a.nN=0;}
function L7(){var a=this;C.call(a);a.ww=null;a.mH=0.0;a.wU=0.0;a.e7=null;a.g1=null;a.lS=null;a.fh=0;}
function ADZ(a,b){var c;if(b!==null){a.g1=b;return a;}c=new BG;Bl(c,B(388));K(c);}
function ACk(a,b){var c;if(b!==null){a.lS=b;return a;}c=new BG;Bl(c,B(388));K(c);}
function P7(a,b,c,d){var e,f,g,$$je;e=a.fh;if(!(e==2&&!d)&&e!=3){a.fh=d?2:1;while(true){try{f=AD2(a,b,c);}catch($$e){$$je=Eg($$e);if($$je instanceof Bq){g=$$je;K(AHM(g));}else{throw $$e;}}if(Hc(f))return f;if(Im(f)){if(d&&DN(b)){g=a.g1;Hf();if(g===AVU)return D1(B8(b));if(B8(c)<=I(a.e7))return AVX;EF(b,b.X+B8(b)|0);if(a.g1===AVV)Kc(c,a.e7);}return f;}if(QI(f)){g=a.g1;Hf();if(g===AVU)return f;if(g===AVV){if(B8(c)<I(a.e7))return AVX;Kc(c,a.e7);}EF(b,b.X+Kh(f)|0);}else if(L5(f)){g=a.lS;Hf();if(g===AVU)break;if(g
===AVV){if(B8(c)<I(a.e7))return AVX;Kc(c,a.e7);}EF(b,b.X+Kh(f)|0);}}return f;}b=new D0;X(b);K(b);}
function ZK(a,b){var c,d,e,f;c=a.fh;if(c&&c!=3){b=new D0;X(b);K(b);}if(!B8(b))return AEr(0);if(a.fh)a.fh=0;d=AEr(Bb(8,B8(b)*a.mH|0));while(true){e=P7(a,b,d,0);if(Im(e))break;if(Hc(e))d=SY(a,d);if(!KO(e))continue;VL(e);}b=P7(a,b,d,1);if(KO(b))VL(b);while(true){f=a.fh;if(f!=3&&f!=2)break;a.fh=3;if(Im(AVY)){d.dz=d.X;d.X=0;d.hv=(-1);return d;}d=SY(a,d);}b=new D0;X(b);K(b);}
function SY(a,b){var c,d,e;c=b.hk;d=NG(c,Bb(8,c.data.length*2|0));e=ABx(d,0,d.data.length);EF(e,b.X);return e;}
var AA8=F(CS);
function QN(){C.call(this);this.nA=null;}
function AJF(a,b){Dt(a.nA,b);}
function V8(){C.call(this);this.oS=null;}
function AR5(a,b){var c,d;c=a.oS;d=c.dI+1|0;c.dI=d;c=b.hz;b=new M;O(b);G(G(U(b,d),B(389)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Qs=F();
function AMS(a,b){}
function EK(){var a=this;C.call(a);a.G=null;a.r=null;a.d8=0.0;}
function ASS(){var a=new EK();Lz(a);return a;}
function Lz(a){a.G=new Bf;a.r=new Bf;}
function ANl(a){}
function AQ8(a){return B3(0,0);}
function P2(a,b,c,d){var e;if(!Lb(a.G,b)){a.ko(b);Cv(a.G,b);}if(!Lb(a.r,c)){a.ke(c);Cv(a.r,c);}e=a.d8;if(e!==d){a.d8=d;a.pP(e,d);}}
function DH(a,b){return F_(b,a.G,a.r);}
function ZL(a,b){var c,d,e,f;c=a.G;d=c.b;e=c.a;f=a.r;Yd();Bt(b,d,e,f,AXh);}
function V9(a,b){var c;c=a.G;LD(b,c.b,c.a,a.r);}
function AQg(a,b){return 0;}
function AIv(a,b){}
function AP0(a,b){}
function AR_(a,b,c){}
function AQx(a,b,c,d){return 0;}
function APO(a,b,c){return null;}
function AQV(a,b,c){return 0;}
function AME(a,b){return 0;}
function AIn(a,b,c,d){return 0;}
function GH(){var a=this;EK.call(a);a.cI=null;a.bA=null;a.ff=null;}
function AX_(){var a=new GH();T7(a);return a;}
function T7(a){Lz(a);a.cI=new Bf;a.bA=new Bf;}
function AFk(a,b){a.ff=b;}
function AEs(a){var b;b=a.bA;b.b=L0(a,b.b);b=a.bA;b.a=Kt(a,b.a);}
function Vq(a,b){a.bA.b=L0(a,b);}
function Rt(a,b){a.bA.a=Kt(a,b);}
function ACs(a,b,c){a.bA.b=L0(a,b);a.bA.a=Kt(a,c);}
function Kt(a,b){return Bb(0,Z(b,a.cI.a-a.r.a|0));}
function L0(a,b){return Bb(0,Z(b,a.cI.b-a.r.b|0));}
function Rb(){var a=this;GH.call(a);a.cz=null;a.dC=null;a.fX=null;a.qL=null;a.dN=null;a.b5=null;a.d1=null;a.fl=null;a.db=0;a.eR=0;a.mC=null;a.dW=0;a.dY=0;a.f9=0;a.fe=0;a.fJ=0;a.cD=0;a.d2=null;a.iX=null;a.nO=null;a.gP=null;}
function AUv(a,b){var c=new Rb();AAF(c,a,b);return c;}
function AAF(a,b,c){T7(a);a.dC=Sy();a.fX=new Bf;a.b5=AYa;a.d1=R(H7,0);a.dW=0;a.dY=0;a.f9=0;a.fe=0;a.fJ=0;a.d2=AEh(0);a.gP=GE();a.cz=b;a.iX=c;a.mC=c;TB(a);}
function TB(a){a.db=B$(2.0,a.cz.bR);}
function WH(a){return a.b5.data.length?0:1;}
function Wj(a,b){OU(a);a.b5=b;}
function OU(a){T(a.fX,0,0);}
function X_(a,b,c){a.nO=b;a.qL=c;a.dN=null;a.d2=null;a.eR=0;OU(a);}
function ASo(a){var b,c;a.fl=CH(a.fl,null);T(a.fX,0,0);b=a.gP;if(b.dB>0){b.dB=0;c=b.ca;ZJ(c,0,c.data.length,null);b.c8=b.c8+1|0;}a.d2=null;a.b5=AYa;a.d1=null;a.dW=0;a.dY=0;a.f9=0;Tk(a.dC);a.iX=null;}
function AHx(a,b,c){TJ(a);TB(a);a.dN=null;a.d2=null;a.eR=0;}
function AKh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=IT(a.cz);if(WH(a))return;Lw(a);CC(c,a.dN);d=D9(a);e=AEK(c,a.eR);f=Z(IM(a.r.a,d),a.b5.data.length)+30|0;g=a.nO.nF;h=a.d1.data;i=h.length;if(i<f){a:{j=a.fe;k=a.fJ;l=a.b5;m=a.d2;n=a.gP;o=R(H7,f);if(i>0){p=o.data;while(j<=k){q=l.data[j];r=j%p.length|0;s=j%i|0;t=h[s];if(t!==null&&t.gA!==q){VA(m,t,n);p[r]=LF(q,m,e,n);h[s]=null;}else if(t!==null&&p[r]===null){p[r]=t;h[s]=null;}else p[r]=LF(q,m,e,n);j=j+1|0;}}else if(f>0){p
=o.data;while(true){if(j>k)break a;p[j%p.length|0]=LF(l.data[j],m,e,n);j=j+1|0;}}}j=0;while(j<i){q=h[j];if(q!==null){VA(m,q,n);h[j]=null;}j=j+1|0;}a.d1=o;Cv(a.fX,Me(a.d2));T1(a,a.cz.cC);}a.fe=Z((a.bA.a+a.db|0)/(D9(a)+a.db|0)|0,a.b5.data.length-1|0);a.fJ=Z((((a.bA.a+a.dC.t.a|0)-1|0)+a.db|0)/(D9(a)+a.db|0)|0,a.b5.data.length-1|0);if(!a.d1.data.length)return;YT(a,e);V9(a,b);t=g.rY;m=a.G;Bt(b,m.b,m.a,a.r,t);m=a.dC.A;u=m.b;v=m.a;w=Cz(a.cz,2.0);m=a.cz.cX;x=a.fe;j=u+w|0;while(x<=a.fJ){n=Nj(a,x);k=V(x,D9(a));i=x+1|
0;y=k+V(i,a.db)|0;k=j+a.dW|0;r=k+a.dY|0;z=a.cD!=x?0:1;ba=!z?t:g.qj;q=!z?g.vD:g.jj;bb=!z?g.pC:g.jj;bc=!z?g.uV:g.jj;bd=(v+y|0)-a.bA.a|0;EI(b,j,bd,n.gY,n.rJ,a.fl,q,ba,0.0);EI(b,k,bd,n.hr,n.h_,a.fl,bb,ba,0.0);EI(b,r,bd,n.hx,n.iO,a.fl,bc,ba,0.0);k=n.gY.b;s=j+k|0;T(m,Bb(0,a.dW-k|0),n.gY.a);Bt(b,s,bd,m,ba);k=j+a.dW|0;s=n.hr.b;be=k+s|0;T(m,Bb(0,a.dY-s|0),n.hr.a);Bt(b,be,bd,m,ba);k=n.hx.b;bf=r+k|0;T(m,Bb(0,(((a.dC.t.b-k|0)-a.dY|0)-a.dW|0)-w|0),n.hx.a);Bt(b,bf,bd,m,ba);bg=(u+a.r.b|0)-w|0;T(m,w,D9(a)+a.db|0);Bt(b,bg,bd,
m,t);x=i;}FI(b);}
function YT(a,b){var c,d,e,f,g,h;c=0;d=a.fe;while(d<=a.fJ){e=Nj(a,d);if(!(e!==null&&e.gA===a.b5.data[d])){f=a.d1.data;g=a.b5;e=a.d2;h=a.gP;c=d%f.length|0;if(f[c]!==null)VA(e,f[c],h);f[c]=LF(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cv(a.fX,Me(a.d2));T1(a,a.cz.cC);}}
function T1(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fX;c=CK(b,c.b+150|0,c.a);CC(c,a.dN);d=a.dN;e=d.dD;f=e-(e+d.ev)/16.0;g=a.d1.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gA.iD;k=d.h_;Ch(c,j,k.bn+a.eR,f+k.bG);j=d.gA.iR;d=d.iO;Ch(c,j,d.bn+a.eR,f+d.bG);}i=i+1|0;}a:{d=a.gP;if(d.dB>0){h=d.c8;i=0;b:while(true){g=d.ca.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.dE;l=j.dH;k=k;l=l.iu;Ch(c,k,l.bn+a.eR,f+l.bG);j=j.cQ;if(h!=d.c8)break b;}i=i+1|0;}b=new IS;X(b);K(b);}}b=CH(a.fl,CV(b));a.fl=b;CN(b,c);FT(c);}
function Nj(a,b){var c;c=a.d1.data;return c[b%c.length|0];}
function ALu(a,b){Cv(a.dC.t,b);}
function AH6(a,b){Cv(a.dC.A,b);}
function Z2(a){var b,c;Lw(a);b=D9(a);c=a.b5.data.length;b=V(b,c)+V(a.db,c+1|0)|0;T(a.cI,a.r.b,b);}
function TJ(a){var b,c,d,e,f,g,h,i,j;b=IT(a.cz);if(WH(a))return;Lw(a);CC(b,a.dN);c=AEK(b,a.eR);d=a.b5.data;e=d.length;f=0;while(f<e){g=d[f];h=JY(c,g.gI);i=JY(c,g.iD);j=JY(c,g.iR);a.dW=Bb(a.dW,h);a.dY=Bb(a.dY,i);a.f9=Bb(a.f9,j);f=f+1|0;}}
function ARi(a,b){var c;c=NX(a,b.h);if(c>=0)a.cD=c;return Es(a.dC,a.G)&&Hl(a.cz.cE)?1:0;}
function AFD(a,b,c){if(!Es(a.dC,b.h)&&!L9(a.dC)){b=a.mC;if(b!==null)b.q();}return null;}
function AFS(a,b,c,d){var e;if(d==1){e=NX(a,b.h);if(e>=0)NI(a,a.b5.data[e]);}return 1;}
function NI(a,b){a.iX.q();b.mG.q();}
function NX(a,b){var c,d,e;if(!a.d1.data.length)return (-1);c=D9(a);d=(b.a-a.G.a|0)+a.bA.a|0;e=a.db;e=(d+e|0)/(c+e|0)|0;if(e<a.b5.data.length)return e;return (-1);}
function D9(a){return E3(a.dN);}
function Lw(a){var b;if(a.dN===null){b=GV(a.cz,a.qL);a.dN=b;a.d2=AEh(E3(b));a.eR=Df(a.dN.l4);}}
function AK1(a,b){var c,d,e;a:{switch(b.bk){case 13:NI(a,a.b5.data[a.cD]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cD=a.fe;b=a.ff;c=a.bA;H2(b,c.b,c.a-(a.r.a/2|0)|0);return 0;case 34:a.cD=a.fJ;b=a.ff;c=a.bA;H2(b,c.b,c.a+(a.r.a/2|0)|0);return 0;case 35:case 39:a.cD=a.b5.data.length-1|0;break a;case 36:case 37:a.cD=0;break a;case 38:d=a.cD;e=a.b5.data.length;a.cD=((d+e
|0)-1|0)%e|0;break a;case 40:a.cD=(a.cD+1|0)%a.b5.data.length|0;break a;default:break a;}a.iX.q();return 0;}e=a.cD;if(e<=a.fe)H2(a.ff,a.bA.b,V(e,D9(a))+V(a.cD,a.db)|0);else if(e>=a.fJ)H2(a.ff,a.bA.b,(V(e+1|0,D9(a))+V(a.cD+2|0,a.db)|0)-a.r.a|0);return 0;}
var We=F();
function ASa(a){}
function AAL(){var a=this;EK.call(a);a.lx=null;a.rO=null;a.t_=null;a.bC=null;a.c5=null;a.c7=null;a.sF=0.0;a.mE=null;a.m1=null;}
function ZN(a,b){var c=new AAL();AQ4(c,a,b);return c;}
function AQ4(a,b,c){var d;c=c.cE;Lz(a);d=new VQ;d.rI=a;a.rO=d;d=new VR;d.ob=a;a.t_=d;a.sF=10.0;a.bC=b;a.lx=c;b.ff=a;}
function AFW(a){var b;b=a.bC;b.ff=null;a.bC=CH(b,null);}
function QM(a,b,c){var d;a.mE=b;a.m1=c;d=a.c5;if(d!==null)Gl(d,b,c);d=a.c7;if(d!==null)Gl(d,b,c);}
function AHC(a,b,c,d){P2(a,b,c,d);P2(a.bC,b,c,d);if(d!==0.0){a.bC.uW();AEs(a.bC);if(Qh(a))H8(a);else a.c7=null;if(XY(a))Ij(a);else a.c5=null;}}
function H2(a,b,c){ACs(a.bC,b,c);if(Qh(a))H8(a);if(XY(a))Ij(a);}
function XY(a){var b;b=a.r.a;return b>0&&a.bC.cI.a>b?1:0;}
function Qh(a){var b;b=a.r.b;return b>0&&a.bC.cI.b>b?1:0;}
function H8(a){var b,c,d,e,f,g;b=a.c7;if(b===null)b=Hu();a.c7=b;Uu(a,b);c=a.c7;b=a.bC;d=b.bA.b;e=a.G;f=e.b;g=a.r;My(c,d,f,g.b,b.cI.b,e.a+g.a|0,JM(a));}
function Ij(a){var b,c,d,e,f,g;b=a.c5;if(b===null)b=Hu();a.c5=b;Uu(a,b);c=a.c5;b=a.bC;d=b.bA.a;e=a.G;f=e.a;g=a.r;IE(c,d,f,g.a,b.cI.a,e.b+g.b|0,JM(a));}
function JM(a){return B$(a.sF,a.d8);}
function Uu(a,b){var c,d;c=a.mE;d=a.m1;if(!(c!==null&&d!==null?(KE(b.hX,c)&&KE(b.hW,d)?1:0):0))Gl(b,c,d);}
function APt(a,b){var c;a.bC.e9(b);if(!(a.c5===null&&a.c7===null)){Ct(b,1);c=a.c5;if(c!==null)F0(c,b);c=a.c7;if(c!==null)F0(c,b);c=a.c5;if(c!==null)Gj(c,b);c=a.c7;if(c!==null)Gj(c,b);Ct(b,0);}}
function M5(a,b){var c,d;a:{b:{c=a.c5;if(!(c!==null&&I0(c,b))){c=a.c7;if(c===null)break b;if(!I0(c,b))break b;}d=1;break a;}d=0;}return d;}
function AJO(a,b,c,d){return !M5(a,b.h)&&!a.bC.cs(b,c,d)?0:1;}
function AQA(a,b,c){var d,e;d=a.c5;if(d!==null){e=Fg(d,b.h,a.rO,1);if(e!==null)return e;}d=a.c7;if(d!==null){e=Fg(d,b.h,a.t_,0);if(e!==null)return e;}return a.bC.b_(b,c);}
function AJm(a,b,c){return M5(a,b.h)?1:0;}
function AKI(a,b){var c,d,e;c=a.c5;d=c!==null&&Fr(c,b.h,a.lx)?1:0;c=a.c7;e=c!==null&&Fr(c,b.h,a.lx)?1:0;return !d&&!e&&!a.bC.bL(b)?0:1;}
function APG(a,b,c,d){var e,f;if(!DH(a,b.h))return 0;e=B$(d*0.25,a.d8);f=B$(c*0.25,a.d8);if(b.bI){f=f+e|0;e=0;}if(a.c5!==null&&e){b=a.bC;Rt(b,b.bA.a+e|0);Ij(a);}if(a.c7!==null&&f){b=a.bC;Vq(b,b.bA.b+f|0);H8(a);}return 1;}
function AM2(a){var b,c;b=JM(a);c=a.bC.jd();c.b=Bb(c.b,b);c.a=Bb(c.a,b);return c;}
function Wm(){var a=this;GH.call(a);a.h6=null;a.lq=null;a.sk=null;a.p6=0.0;}
function ANM(a){var b,c;b=a.cI;c=a.r;T(b,c.b*3|0,c.a*5|0);}
function ALy(a){var b;b=B$(20.0,a.d8);return B3(b,b);}
function AKj(a,b){var c,d,e,f;c=a.sk;d=c.te;e=c.tf;c=c.td;b=CB(b);f=new M;O(f);G(G(G(f,c),B(36)),b);IN(e,N(f),d.tb,3.0);}
function AHZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;ZL(a,b);V9(a,b);c=B$(30.0,a.d8);d=a.bA;e=d.b;f=V(e/c|0,c);g=d.a;h=V(g/c|0,c);d=a.r;i=V(((e+d.b|0)-1|0)/c|0,c);e=V(((g+d.a|0)-1|0)/c|0,c);d=a.lq;d.a=c;d.b=c;a.h6.bH=1.0;while(h<=e){g=a.G.a-a.bA.a|0;j=f;while(j<=i){k=a.G.b-a.bA.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=ADS(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;Xj(n,0.75,a.p6,a.h6);Bt(b,k+j|0,g+h|0,a.lq,a.h6);j=j+c|0;}h=h+c|0;}FI(b);}
function AKZ(a,b){}
function PB(){var a=this;C.call(a);a.te=null;a.tf=null;a.td=null;}
function VI(){C.call(this);this.pB=null;}
function AN8(a){X8(a.pB);}
function RI(){C.call(this);this.mT=null;}
function AJ3(a){NP(a.mT);}
function X1(){C.call(this);this.lm=null;}
var AYa=null;function ANV(){var a=new X1();AAf(a);return a;}
function AAf(a){a.lm=Cn();}
function Nc(a,b,c,d,e){var f;f=new JB;f.mG=e;f.iD=c;f.iR=d;f.gI=b;BZ(a.lm,f);}
function Q5(a){return HP(a.lm,AYa);}
function V3(b){var c,d;if(b===null)b=B(31);else{c=b.fo;if(c===null)b=B(31);else{d=PO(c,B(390),I(c));b=d==(-1)?b.fo:Dj(b.fo,d+1|0);}}return b;}
function AAO(){AYa=R(JB,0);}
function H7(){var a=this;C.call(a);a.rJ=null;a.h_=null;a.iO=null;a.gY=null;a.hr=null;a.hx=null;a.gA=null;}
function LF(b,c,d,e){var f,g,h;f=new H7;f.gY=new Bf;f.hr=new Bf;f.hx=new Bf;f.gA=b;g=DO(e,b.gI);if(g!==null)g.ha=g.ha+1|0;else{g=new Og;h=Ho(c,b.gI,d);g.ha=1;g.iu=h;Ld(e,b.gI,g);}e=g.iu;f.rJ=e;T(f.gY,e.bl|0,e.bH|0);e=Ho(c,b.iD,d);f.h_=e;T(f.hr,e.bl|0,e.bH|0);b=Ho(c,b.iR,d);f.iO=b;T(f.hx,b.bl|0,b.bH|0);return f;}
function VA(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gA.gI;f=DO(d,e);g=f.ha-1|0;f.ha=g;if(!g){a:{h=0;i=null;if(e===null){j=d.ca.data[0];while(j!==null){if(j.dE===null)break a;k=j.cQ;i=j;j=k;}}else{l=e.jz();m=d.ca.data;h=l&(m.length-1|0);j=m[h];while(j!==null&&!(j.jc==l&&Zd(e,j.dE))){k=j.cQ;i=j;j=k;}}}if(j===null)j=null;else{if(i!==null)i.cQ=j.cQ;else d.ca.data[h]=j.cQ;d.c8=d.c8+1|0;d.dB=d.dB-1|0;}Ip(b,f.iu);}Ip(b,c.h_);Ip(b,c.iO);}
function TQ(){var a=this;EK.call(a);a.g4=null;a.g8=null;a.gM=null;a.d7=null;a.jb=0.0;a.gT=0;a.hQ=0;a.df=null;a.lK=null;}
function LS(a){var b;b=a.r;return b.b&&b.a?0:1;}
function Ue(a){var b,c;a:{if(a.gM!==null){b=a.g8;if(b!==null&&!Fq(b)){c=0;break a;}}c=1;}return c;}
function X6(a,b){a.r.a=b;}
function Pn(a,b,c,d,e){var f,g;f=a.g4.cX;T(f,d,a.r.a);g=a.G;Bt(b,g.b+c|0,g.a,f,e);}
function Rd(a){if(a.d7===null)a.d7=GV(a.g4,a.gM);}
function Ut(){var a=this;C.call(a);a.ld=Eo;a.ka=0;a.nm=0;}
function YA(){var a=this;C.call(a);a.sn=null;a.sm=null;a.sl=null;}
function AIb(a){var b,c,d,e,f;b=a.sn;c=a.sm;d=a.sl;e=Bw();f=new M;O(f);b=G(f,b);BD(b,9);b=G(b,c);BD(b,9);G(b,d);Bo(e,N(f));}
function VQ(){C.call(this);this.rI=null;}
function AQ6(a,b){var c,d;c=a.rI;d=FQ(b,c.bC.cI.a-c.r.a|0);Rt(c.bC,d);Ij(c);}
function VR(){C.call(this);this.ob=null;}
function AF5(a,b){var c,d;c=a.ob;d=FQ(b,c.bC.cI.b-c.r.b|0);Vq(c.bC,d);H8(c);}
function JB(){var a=this;C.call(a);a.mG=null;a.iD=null;a.iR=null;a.gI=null;}
var D0=F(Bq);
var ACx=F(EH);
function AHM(a){var b=new ACx();AMg(b,a);return b;}
function AMg(a,b){a.jp=1;a.jM=1;a.k0=b;}
function T_(){var a=this;C.call(a);a.xl=null;a.xk=null;a.xj=null;}
function NU(){var a=this;C.call(a);a.to=null;a.tq=null;a.tp=0;}
function AFM(a,b){var c,d,e;c=a.to;d=a.tq;e=a.tp;d.l(XQ(c,(b.h.b+e|0)-c.d6.b|0));}
function NS(){var a=this;C.call(a);a.qf=null;a.qe=null;a.qg=0;}
function AHN(a,b){var c,d,e;c=a.qf;d=a.qe;e=a.qg;d.l(OH(c,(b.h.a+e|0)-c.d6.a|0));}
function Kw(){var a=this;L7.call(a);a.nY=null;a.sp=null;}
function AD2(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.nY;e=0;f=0;g=a.sp;a:{b:{while(true){if((e+32|0)>f&&DN(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B8(b)+k|0;h=j.length;f=Z(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new Bz;c=new M;O(c);U(G(U(G(c,B(391)),l),B(94)),h);Bl(b,N(c));K(b);}if(B8(b)<m){b=new LV;X(b);K(b);}if(m<0){b=new Bz;c=new M;O(c);G(U(G(c,B(95)),m),B(96));Bl(b,N(c));K(b);}n=b.X;h=n+b.kS|0;e=0;while(e<m){o=k+1|0;i=b.lA.data;l=h+1|0;j[k]=i[h];e=e+
1|0;k=o;h=l;}b.X=n+m|0;e=0;}if(!DN(c)){p=!DN(b)&&e>=f?AVY:AVX;break a;}i=g.data;n=B8(c);o=i.length;n=Z(n,o);q=new Vt;q.ro=b;q.tu=c;p=AEd(a,d,e,f,g,0,n,q);e=q.u0;if(p===null&&0==q.kc)p=AVY;k=q.kc;h=0;if(c.ml){b=new Ja;X(b);K(b);}if(B8(c)<k)break;if(h>o){b=new Bz;c=new M;O(c);BD(U(G(U(G(c,B(97)),h),B(91)),o),41);Bl(b,N(c));K(b);}l=h+k|0;if(l>o){b=new Bz;c=new M;O(c);U(G(U(G(c,B(99)),l),B(94)),o);Bl(b,N(c));K(b);}if(k<0){b=new Bz;c=new M;O(c);G(U(G(c,B(95)),k),B(96));Bl(b,N(c));K(b);}o=c.X;m=0;while(m<k){l=o+1
|0;n=h+1|0;SF(c,o,i[h]);m=m+1|0;o=l;h=n;}c.X=c.X+k|0;if(p!==null)break a;}b=new H3;X(b);K(b);}b=new Bz;c=new M;O(c);BD(U(G(U(G(c,B(97)),k),B(91)),h),41);Bl(b,N(c));K(b);}EF(b,b.X-(f-e|0)|0);return p;}
var TU=F(Kw);
function AEd(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Kz(h,2))break a;i=AVY;break a;}c=k+1|0;n=j[k];if(!FJ(a,n)){c=c+(-2)|0;i=D1(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Kz(h,3))break a;i=AVY;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!FJ(a,n))break b;if(!FJ(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Mb(p)){c=k+(-3)|0;i=D1(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=D1(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Kz(h,4))break a;i=AVY;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B8(h.tu)<2?0:1)break a;i=AVX;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!FJ(a,n))break c;if(!FJ(a,o))break c;if(!FJ(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=Id(r);m=c+1|0;j[c]=IU(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=D1(1);break a;}c=k+(-3)|0;i
=D1(1);}h.u0=c;h.kc=f;return i;}
function FJ(a,b){return (b&192)!=128?0:1;}
function P4(){C.call(this);this.r8=null;}
function AGU(a,b){var c,d;c=a.r8;d=c.dI+1|0;c.dI=d;c=new M;O(c);G(G(U(c,d),B(392)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Vc(){C.call(this);this.vm=null;}
function APS(a){return a.vm.f6();}
function Vd(){C.call(this);this.pN=null;}
function APf(a){return a.pN.f6();}
function Te(){C.call(this);this.qW=null;}
function APT(a){return a.qW.f6();}
function VH(){C.call(this);this.yD=null;}
function AM5(a){Bo(Bw(),B(393));}
function QP(){C.call(this);this.nd=null;}
function AE5(a,b){a.nd.l(FF(b));}
function UZ(){C.call(this);this.ss=null;}
function ARE(a,b){a.ss.q();}
function Ok(){var a=this;C.call(a);a.xt=null;a.xv=null;a.xu=0;a.xs=0;}
var ABN=F();
var ZW=F();
function SB(){C.call(this);this.uT=null;}
function AF4(a,b){var c,d,e,f;c=a.uT;d=CB(b);e=new M;O(e);G(G(e,B(394)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new SX;d.wL=c;d.pr=b;e=new SW;e.vM=c;f=new UV;f.wA=e;e=new Wa;e.nP=d;c=b.fg;if(c!==null)c.arrayBuffer().then(Bk(e,"f"),Bk(f,"f"));else{b=b.gR.getFile();c=new Wd;c.tk=e;c.tl=f;b.then(Bk(c,"f"),Bk(f,"f"));}}
function SA(){C.call(this);this.xb=null;}
function AGL(a,b){var c;b=CB(b);c=new M;O(c);G(G(c,B(395)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var Ql=F();
function AOC(a,b){b=b;b.bo=CH(b.bo,null);}
function Tn(){C.call(this);this.tr=null;}
function AJ5(a){DL(a.tr);}
function N2(){C.call(this);this.qX=null;}
function ANJ(a,b){var c;c=a.qX;Dt(c,b);Lu(c,null);HN(c);}
var J7=F(DV);
var AYb=0.0;var AYc=null;function ZR(){AYb=$rt_globals.NaN;AYc=E($rt_doublecls());}
var LA=F();
var AYd=null;var AYe=null;function ABl(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.nm=Fc(CW(d,Cd(0, 2147483648)),Eo)?0:1;e=CW(d,Cd(4294967295, 1048575));f=EE(Gu(d,52))&2047;if(Fc(e,Eo)&&!f){c.ld=Eo;c.ka=0;return;}g=0;if(f)e=ATe(e,Cd(0, 1048576));else{e=Fp(e,1);while(Fc(CW(e,Cd(0, 1048576)),Eo)){e=Fp(e,1);f=f+(-1)|0;g=g+1|0;}}h=ACe(AYe,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AYe.data[h]|0)|0;j=RD(e,AYd.data[h],i);if(AAh(j,Cd(2808348672, 232830643))){h=h+1|0;i=12+(f-AYe.data[h]|0)|0;j=RD(e,AYd.data[h],
i);}k=D7(AYd.data[h],(63-i|0)-g|0);l=Gu(Cq(k,Bd(1)),1);m=Gu(k,1);if(Fc(e,Cd(0, 1048576)))m=Gu(m,2);n=Bd(10);while(PN(n,m)){n=BR(n,Bd(10));}if(AAh(MX(j,n),Do(m,Bd(2))))n=Do(n,Bd(10));o=Bd(1);while(PN(o,l)){o=BR(o,Bd(10));}if(AHY(Kx(o,MX(j,o)),Do(l,Bd(2))))o=Do(o,Bd(10));f=ATz(n,o);e=f>0?BR(Do(j,n),n):f<0?Cq(BR(Do(j,o),o),o):BR(Do(Cq(j,Do(o,Bd(2))),o),o);if(AAh(e,Cd(2808348672, 232830643))){h=h+1|0;e=Do(e,Bd(10));}else if(AIg(e,Cd(1569325056, 23283064))){h=h+(-1)|0;e=BR(e,Bd(10));}c.ld=e;c.ka=h-330|0;}
function RD(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CW(b,Bd(65535));f=CW(D7(b,16),Bd(65535));g=CW(D7(b,32),Bd(65535));h=CW(D7(b,48),Bd(65535));i=CW(c,Bd(65535));j=CW(D7(c,16),Bd(65535));k=CW(D7(c,32),Bd(65535));l=CW(D7(c,48),Bd(65535));m=Cq(Cq(BR(k,e),BR(j,f)),BR(i,g));n=Cq(Cq(Cq(BR(l,e),BR(k,f)),BR(j,g)),BR(i,h));o=Cq(Cq(Fp(BR(l,h),32+d|0),Fp(Cq(BR(l,g),BR(k,h)),16+d|0)),Fp(Cq(Cq(BR(l,f),BR(k,g)),BR(j,h)),d));return Cq(d>16?Cq(o,Fp(n,d-16|0)):Cq(o,D7(n,16-d|0)),D7(m,32-d|0));}
function AAZ(){var b,c,d,e,f,g,h,i,j,k;AYd=AUs(660);AYe=BK(660);b=Cd(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AYd.data;g=d+330|0;f[g]=FK(e,Bd(80));AYe.data[g]=c;e=FK(e,Bd(10));h=Nu(e,Bd(10));while(PN(e,b)&&Fc(CW(e,Cd(0, 2147483648)),Eo)){e=Fp(e,1);c=c+1|0;h=Fp(h,1);}e=Cq(e,Do(h,Bd(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AHY(e,Cd(3435973836, 214748364))){e=Gu(e,1);j=j+1|0;d=d+(-1)|0;}k=BR(e,Bd(10));b=j<=0?k:Cq(k,Gu(BR(CW(b,Bd((1<<j)-1|0)),Bd(10)),j));f=AYd.data;g=(330-i|0)-1|0;f[g]=FK(b,
Bd(80));AYe.data[g]=d;i=i+1|0;}}
function MU(){C.call(this);this.sE=null;}
function ASt(a,b){var c,d;c=a.sE;d=new Bq;Bl(d,$rt_str(b.message));c.l(d);}
function Uf(){var a=this;C.call(a);a.rf=0;a.mB=0;}
function FQ(a,b){return PS(a.rf,b,a.mB);}
function Nw(){var a=this;C.call(a);a.ue=null;a.ug=null;a.uf=null;}
function ARl(a,b,c,d){var e,f;b=a.ue;e=a.ug;f=a.uf;TM(b,e);if(f!==null)d.mq.q();if(MD(d)){if(d.jW===null)TW(b,AEv(d,e),d.ir,e);else PU(b,AEv(d,e),d.ir,e,d.jW);}}
var Sj=F(DV);
var AYf=null;function FK(b,c){return Long_udiv(b, c);}
function Nu(b,c){return Long_urem(b, c);}
function Lh(b,c){return Long_ucompare(b, c);}
function AAX(){AYf=E($rt_longcls());}
var Fj=F(Bq);
function NJ(){var a=this;C.call(a);a.mP=null;a.p7=null;a.ty=0;a.uQ=0;}
function LN(a,b){return B8(a.p7)<b?0:1;}
var ADK=F();
function UT(b,c,d,e){var f,g;f=b.next();g=new XH;g.m4=b;g.m3=c;g.m7=d;g.m5=e;f.then(Bk(g,"f"),Bk(d,"f"));}
function Zf(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AEe(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(D$()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new XD;f.qM=b;f.qN=d;d.addEventListener("change",Bk(f,"handleEvent"));d.click();}
function Zo(b,c){var d;if(c.isFile?1:0)b.l(YQ(c.file()));else{c=c.createReader();d=new Xr;d.tN=b;c.readEntries(Bk(d,"f"));}}
function Tf(){var a=this;C.call(a);a.bN=null;a.oC=null;a.h3=null;a.iS=null;a.Y=null;}
function IL(a){return a.bN.ct.i1;}
function Oe(a){var b;b=new Pf;b.p4=a;return b;}
function AEP(a){var b,c,d,e,f,g;b=R(C$,4);c=b.data;d=a.Y.S.W.bj;e=a.bN;BO(e);f=new V$;f.ta=e;c[0]=D6(B(396),d,f);e=a.Y.S.W.bj;f=a.bN;BO(f);g=new Wc;g.nM=f;c[1]=D6(B(397),e,g);e=a.Y.S.W.bj;f=a.bN;BO(f);g=new Wb;g.r6=f;c[2]=D6(B(398),e,g);e=a.Y.S.W.bj;f=a.bN;BO(f);g=new V_;g.vE=f;c[3]=D6(B(399),e,g);return FX(b);}
function Jk(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DL(a.Y.cc);d=a.bN.e;e=Dn(d);f=G6(d);g=a.bN.eB;if(c===null)h=null;else{AS0();switch(AYg.data[c.eS]){case 1:h=KW(g,e,f);break a;case 2:h=V1(g,e,f);break a;default:}b=new Er;X(b);K(b);}}c=a.bN;e=EU(c,b);f=HS(c.e.f,e.by,e.bJ);g=OO(c,f);if(h!==null){f=c.e;i=e.by;j=e.bJ;e=new Up;e.vJ=c;e.vI=b;e.vK=g;h.sx(f,i,j,e,c.g5);}else{e=DO(c.e.f.em,f);if(e!==null)HE(c,e);else{e=DO(c.e.f.eK,f);if(e!==null&&!Ec(e))VC(c.iK,b,e,c,g);else{g=c.iK;DL(g.cc);h=g.cc;k=R(C$,1);l=k.data;d=new C$;BO(h);f
=new V4;f.n$=h;K9(d,f,B(400),g.S.W.pY);l[0]=d;Gh(h,b,FX(k),Ny(g,c));}}}}
var Zz=F(0);
function AJP(b){return 112<=b&&b<=123?1:0;}
var XJ=F();
function APz(a,b){Zf(b);}
function XI(){var a=this;C.call(a);a.qa=null;a.p_=null;}
function AHT(a,b){var c,d,e,f,g,h,i;c=a.qa;d=a.p_;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new P3;i.n8=c;i.n7=g;h.then(Bk(i,"f"),Bk(d,"f"));e=e+1|0;}}
var Xa=F();
function AJq(a,b){Zf(b);}
function W_(){var a=this;C.call(a);a.pi=null;a.pj=null;}
function AKn(a,b){var c,d,e,f,g;c=a.pi;d=a.pj;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(Bv,1);g.data[0]=FF(b.name);UT(f,c,d,g);}
var Y2=F();
function AB4(b,c){return ACX(null,b,c,0);}
function ACX(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=ADQ(c);g=BB(f);h=BB(f);i=BB(f);j=R(CD,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<CA(b)){l=BB(f);c[k]=B1(b,k);l=4*l|0;f.e3=f.e3+l|0;}else c[k]=DP(ABS(f,d,0));k=k+1|0;}m=Zg(f,h);n=new HU;n.em=GE();n.eK=GE();n.fB=Cn();if(!c.length){b=new BG;X(b);K(b);}n.F=j;n.fT=0;n.cx=0;n.dd=AT3(m);b=n.em;e=0;while(e<i){Ld(b,ET(BB(f),BB(f)),ET(BB(f),BB(f)));e=e+1|0;}b=n.em;m=n.eK;o=new UW;ST(o,b);while(Jo(o)){UD(o);p=o.hc;q=p.dE;p=p.dH;b=Cn();if(DO(m,p)===null)Ld(m,p,b);BZ(DO(m,
p),q);}if(m.kx===null){b=new Pe;b.u7=m;m.kx=b;}b=m.kx;q=new Rg;ST(q,b.u7);while(Jo(q)){UD(q);b=q.hc.dH;m=AVf;c=R(C,b.i);d=c.data;HP(b,c);AAr(c,m);e=0;g=d.length;while(e<g){m=d[e];Jh(b,e);b.cn.data[e]=m;e=e+1|0;}}Qr(f);return n;}
function ABB(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=ADQ(c);g=BB(f);h=BB(f);i=BB(f);j=BB(f);k=NF(b,g);l=NF(b,h);m=(IQ(B1(b,k.b),k.a)).data[0].o;e=(IQ(B1(b,l.b),l.a)).data[1].o;n=0;o=i-1|0;while(n<i){p=ABS(f,d,g);if(!n)p=LM(m,p);if(n==o)p=LM(p,e);q=k.b+n|0;r=DP(p);b.F.data[q]=r;n=n+1|0;}r=Zg(f,j);Qr(f);if(!Ec(r)){s=N$(g,h,(-1));b=b.dd;f=AS5(s,r);r=KH(b,b.cU,s);if(r!==null){f=f.cU.bE;if(r===b.cU)b.cU=Br(f,0);else if(r.dV!==null){b=new N8;b.so=r;J_(f,b);q=Qt(r.dV.bE,
r);En(r.dV.bE,q);b=r.dV.bE;Po(b,q);if(!Ec(f)){Jt(b,b.i+f.i|0);j=f.i;g=b.i;h=g-1|0;while(h>=q){c=b.cn.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.i=g+j|0;f=BV(f);g=0;while(g<j){c=b.cn.data;h=q+1|0;c[q]=BY(f);g=g+1|0;q=h;}b.cy=b.cy+1|0;}}}}}
function ABS(b,c,d){var e,f,g,h,i,j,k,l;e=BB(b);f=R(B9,e);g=f.data;h=0;while(h<e){i=BB(b);j=BB(b);k=BB(b);l=BB(b);g[h]=DD(HC(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function Zg(b,c){var d,e;d=Cn();e=0;while(e<c){BZ(d,N$(BB(b),BB(b),BB(b)));e=e+1|0;}return d;}
var Xi=F(0);
var AWK=null;function Zc(){AWK=null;}
function XD(){var a=this;C.call(a);a.qM=null;a.qN=null;}
function AJh(a,b){var c,d,e,f,g,h;b=a.qM;c=a.qN;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new MQ;h.mY=b;h.mX=g;$rt_globals.setTimeout(Bk(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=YQ(d.item(f));g=new Mz;g.r_=b;g.sa=c;$rt_globals.setTimeout(Bk(g,"onTimer"),0);f=f+1|0;}}
function AAw(){var a=this;C.call(a);a.ij=null;a.kh=null;}
function AD6(){var a=this;C.call(a);a.yw=0;a.yh=0;a.sH=0;a.kW=0;}
function UL(){var a=this;C.call(a);a.nu=null;a.nt=null;}
function AJZ(a){var b,c,d,e,f,g;b=a.nu;c=a.nt;if(C6(c.ij,b.e.f_)){c=c.kh;CE(b,c.kW,c.sH,0);B4(b.s.bU,c.kW,c.sH);B4(b.s.bK,c.yh,c.yw);}else{d=(Cp(b.eB.rL)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Ck(b);b=new Sh;b.vj=g;b.vk=c;BO(b);c=new PV;c.vC=b;$rt_globals.setTimeout(Bk(c,"onTimer"),0);}}}
function UN(){var a=this;C.call(a);a.vG=null;a.vB=null;}
function AO2(a){HE(a.vG,a.vB);}
function ACI(){var a=this;C.call(a);a.iB=null;a.e3=0;}
function ADQ(a){var b=new ACI();AE_(b,a);return b;}
function AE_(a,b){a.iB=b;a.e3=0;}
function BB(a){var b,c;b=a.iB.data;c=a.e3;a.e3=c+1|0;return b[c];}
function Qr(a){var b,c,d,e;if(a.e3!=a.iB.data.length){b=EW();c=a.iB.data.length;d=a.e3;e=new M;O(e);G(U(G(U(G(e,B(401)),c),B(402)),d),B(403));Bo(b,N(e));}}
var Ja=F(Fj);
var H3=F(Bq);
var LV=F(Bq);
function AAW(){C.call(this);this.BI=null;}
function SE(){var a=this;C.call(a);a.tP=null;a.tU=null;}
function ARJ(a){var b,c;b=a.tP;c=a.tU;FV(b.d_,c);}
function PK(){C.call(this);this.vl=null;}
function ALX(a,b){HM(a.vl,b);}
function SO(){var a=this;C.call(a);a.oP=null;a.oO=null;}
function AGa(a){var b,c;b=a.oP;c=a.oO;FV(b.d_,c);Uq(b);}
var YK=F();
function Sc(b,c){return b.data[c];}
function G9(){var a=this;C.call(a);a.eX=0;a.fx=0;a.k3=null;a.jT=0;a.g_=null;}
function AFv(a,b,c,d,e,f){var g=new G9();AKE(g,a,b,c,d,e,f);return g;}
function AKE(a,b,c,d,e,f,g){a.eX=b;a.fx=c;a.k3=B3(f,g);a.jT=d;a.g_=e;}
function ACS(){Gi.call(this);this.C2=null;}
function Pe(){EP.call(this);this.u7=null;}
var W3=F(Bz);
var Qy=F(0);
var ND=F(0);
var LY=F();
function AAB(){var a=this;LY.call(a);a.E8=null;a.Hc=0;a.FJ=0;a.Dh=0;}
function RO(){var a=this;C.call(a);a.oa=null;a.n_=null;}
function AGN(a){var b,c;b=a.oa;c=a.n_;Vb();Jk(b,c,AYh);}
function RN(){var a=this;C.call(a);a.pl=null;a.pn=null;}
function AFb(a){var b,c;b=a.pl;c=a.pn;Vb();Jk(b,c,AYi);}
function RM(){var a=this;C.call(a);a.vn=null;a.vo=null;}
function ALq(a){Jk(a.vn,a.vo,null);}
function RL(){var a=this;C.call(a);a.ns=null;a.nv=null;}
function AQi(a){var b,c,d,e,f,g,h;b=a.ns;c=a.nv;d=Dn(b.bN.e);e=G6(b.bN.e);d=Nv(b.bN.eB,d,e);DL(b.Y.cc);b=b.bN;e=EU(b,c);if(d!==null){f=b.e;g=e.by;h=e.bJ;e=new PP;e.x_=b;e.ya=c;d.Ia(f,g,h,1,e,b.g5);}}
function PD(){C.call(this);this.qv=null;}
function APC(a){var b;b=a.qv;DL(b.Y.cc);GI(b.bN,Oe(b),0);}
function PF(){C.call(this);this.tT=null;}
function AKt(a){var b;b=a.tT;DL(b.Y.cc);GI(b.bN,Oe(b),1);}
function PG(){C.call(this);this.sP=null;}
function AHe(a){var b,c,d;b=a.sP;DL(b.Y.cc);c=IL(b);b=b.bN;BO(b);d=new Ti;d.sS=b;Q4(c,d,Za(B(404)));}
var XK=F(0);
var AWG=null;function YY(){AWG=new Pz;}
function Wx(){C.call(this);this.s5=null;}
function AF9(a){var b,c,d;b=a.s5;DL(b.Y.cc);c=IL(b);b=b.bN;BO(b);d=new Rp;d.q3=b;LW(c,d);}
function S$(){C.call(this);this.rk=null;}
function AF2(a,b,c){var d,e;c=a.rk;d=c.e.f;e=b.fK;b=c.eY;XA(d.F.data[e],0,b);}
function QH(){var a=this;C.call(a);a.o2=null;a.o5=0;a.o6=0;a.o7=null;a.o8=0;a.o3=0;}
function AJV(a,b){var c,d,e,f,g,h,i,j;c=a.o2;d=a.o5;e=a.o6;f=a.o7;g=a.o8;h=a.o3;i=Cz(c.bt,5.0);d=Z((c.bt.cb.b-d|0)-i|0,Bb((i-d|0)-c.V.r.b|0,b.h.b));j=Z((c.bt.cb.a-e|0)-i|0,Bb((i-e|0)-c.V.r.a|0,b.h.a));T(f,d+g|0,j+h|0);Fo(c,f,c.R.r);}
function XV(){var a=this;C.call(a);a.op=null;a.oo=null;a.om=null;a.ol=0;a.ot=0;a.os=0;a.or=0;a.oq=0;a.ov=0;a.ou=0;a.sr=0;}
function ALp(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.op;d=a.oo;e=a.om;f=a.ol;g=a.ot;h=a.os;i=a.or;j=a.oq;k=a.ov;l=a.ou;m=a.sr;n=Cz(c.bt,5.0);o=c.R.jd();Cv(d,c.R.r);Cv(e,c.R.G);switch(f){case -1:f=Z(h+(b.h.b-g|0)|0,c.bt.cb.b-n|0);g=o.b;h=h+i|0;f=Bb(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Bb((i+b.h.b|0)-g|0,Bb(o.b,n-c.V.G.b|0));}b:{switch(j){case -1:f=Bb(n,Z(l+(b.h.a-k|0)|0,(c.bt.cb.a+c.V.r.a|0)-n|0));g=o.a;h=l+m|0;f=Bb(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Bb((m+b.h.a|0)-k|0,o.a);}Fo(c,e,d);}
function VF(){var a=this;C.call(a);a.vu=null;a.vv=0.0;}
function JY(a,b){return KR(a.vu,b,a.vv*2.0+0.875);}
function S7(){C.call(this);this.of=null;}
function AK0(a){AEl(a.of);}
function S8(){C.call(this);this.rK=null;}
function AMj(a){LL(a.rK);}
function S6(){C.call(this);this.vw=null;}
function ANH(a){ADP(a.vw);}
function Ol(){C.call(this);this.r$=null;}
function AJT(a){a.r$.uN();}
function Oj(){C.call(this);this.q0=null;}
function AQs(a){a.q0.vb();}
function Vz(){C.call(this);this.rw=null;}
function AHI(a){var b,c,d,e,f,g,h,i;b=a.rw;c=(b.oC.dt()).data;d=R(C$,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new YB;i.p3=b;i.p2=h;e[f]=AB$(i,h,b.Y.S.W.bj);f=f+1|0;}return d;}
function V$(){C.call(this);this.ta=null;}
function AOh(a){var b,c,d,e,f;b=a.ta.e.f;c=b.cx;d=new M;O(d);U(G(d,B(405)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.fT;d=new M;O(d);U(G(d,B(406)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.dd;e=FZ(EG(b));Sv(d,0,d.cU,e);b=Bw();f=b.kr;f.data[0]=10;N6(b,f,0,1);}
function Wc(){C.call(this);this.nM=null;}
function AK8(a){S2(a.nM);}
function Wb(){C.call(this);this.r6=null;}
function AF0(a){W8(a.r6);}
function V_(){C.call(this);this.vE=null;}
function AHQ(a){HN(a.vE);}
function Wh(){C.call(this);this.rg=null;}
function AQ$(a,b,c){FY(B1(a.rg.e.f,b.fK),0,I(c));}
function P3(){var a=this;C.call(a);a.n8=null;a.n7=null;}
function AH7(a,b){a.n8.l(ACh(a.n7,b));}
var I3=F(0);
function MQ(){var a=this;C.call(a);a.mY=null;a.mX=null;}
function AKu(a){Zo(a.mY,a.mX);}
function Mz(){var a=this;C.call(a);a.r_=null;a.sa=null;}
function AEY(a){a.r_.l(a.sa);}
var Pz=F();
function XH(){var a=this;C.call(a);a.m4=null;a.m3=null;a.m7=null;a.m5=null;}
function AJK(a,b){var c,d,e,f,g,h,i;c=a.m4;d=a.m3;e=a.m7;f=a.m5;if(!(b.done?1:0)){UT(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new UA;c.pk=d;c.pm=g;c.po=f;b.then(Bk(c,"f"),Bk(e,"f"));}else{h=f.data;c=g.values();b=FF(g.name);i=h.length;f=Dk(f,i+1|0);f.data[i]=b;UT(c,d,e,f);}}}
function G1(){var a=this;C.call(a);a.ix=0;a.sc=0;a.hH=null;a.hc=null;a.py=null;a.jk=null;}
function AYj(a){var b=new G1();ST(b,a);return b;}
function ST(a,b){a.jk=b;a.sc=b.c8;a.hH=null;}
function Jo(a){var b,c;if(a.hH!==null)return 1;while(true){b=a.ix;c=a.jk.ca.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.ix=b+1|0;}return 0;}
function AAc(a){var b;if(a.sc==a.jk.c8)return;b=new IS;X(b);K(b);}
function UD(a){var b,c,d,e;AAc(a);if(!Jo(a)){b=new Yn;X(b);K(b);}b=a.hH;if(b!==null){c=a.hc;if(c!==null)a.py=c;a.hc=b;a.hH=b.cQ;}else{d=a.jk.ca.data;e=a.ix;a.ix=e+1|0;b=d[e];a.hc=b;a.hH=b.cQ;a.py=null;}}
var UW=F(G1);
var Rg=F(G1);
function Re(){var a=this;C.call(a);a.g=null;a.dr=0;a.kf=null;a.nr=0;a.gn=0;a.eN=0;a.bx=0;a.lb=null;}
function J2(a){return a.g.bP;}
function X$(a,b,c,d){var e,f,g,h,i,j;e=Cn();f=a.dr;g=0;if(c!=f)a.dr=c;a:{switch(b){case -1073741784:h=new R3;c=a.bx+1|0;a.bx=c;Fn(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PL;c=a.bx+1|0;a.bx=c;Fn(h,c);break a;case -33554392:h=new Td;c=a.bx+1|0;a.bx=c;Fn(h,c);break a;default:c=a.gn+1|0;a.gn=c;if(d!==null)h=AUb(c);else{h=new FA;Fn(h,0);g=1;}c=a.gn;if(c<=(-1))break a;if(c>=10)break a;a.kf.data[c]=h;break a;}h=new X5;Fn(h,(-1));}while(true){if(E0(a.g)&&a.g.j==(-536870788))
{d=AQP(Ca(a,2),Ca(a,64));while(!Di(a.g)&&E0(a.g)){i=a.g;j=i.j;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cy(d,Bh(i));i=a.g;if(i.bi!=(-536870788))continue;Bh(i);}i=KT(a,d);i.P(h);}else if(a.g.bi==(-536870788)){i=GR(h);Bh(a.g);}else{i=O8(a,h);d=a.g;if(d.bi==(-536870788))Bh(d);}if(i!==null)BZ(e,i);if(Di(a.g))break;if(a.g.bi==(-536870871))break;}if(a.g.kC==(-536870788))BZ(e,GR(h));if(a.dr!=f&&!g){a.dr=f;d=a.g;d.f7=f;d.j=d.bi;d.eH=d.eU;j=d.c_;d.v=j+1|0;d.he=j;E4(d);}switch(b){case -1073741784:break;case -536870872:d
=new MO;FB(d,e,h);return d;case -268435416:d=new Wy;FB(d,e,h);return d;case -134217688:d=new Rh;FB(d,e,h);return d;case -67108824:d=new TX;FB(d,e,h);return d;case -33554392:d=new DQ;FB(d,e,h);return d;default:switch(e.i){case 0:break;case 1:return ATY(Br(e,0),h);default:return ATy(e,h);}return GR(h);}d=new I9;FB(d,e,h);return d;}
function ADg(a){var b,c,d,e,f,g,h;b=BK(4);c=(-1);d=(-1);if(!Di(a.g)&&E0(a.g)){e=b.data;c=Bh(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BN(3);b=e.data;b[0]=c&65535;f=a.g;g=f.bi;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bh(f);f=a.g;g=f.bi;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bh(f);return AQw(e,3);}return AQw(e,2);}if(!Ca(a,2))return AAb(b[0]);if(Ca(a,64))return AOz(b[0]);return AGZ(b[0]);}e=b.data;c=1;while(c<4&&!Di(a.g)&&E0(a.g)){h=c+1|0;e[c]=Bh(a.g);c=h;}if(c==1){h=e[0];if(!(AYk.xX(h)==AYl?0:1))return X2(a,e[0]);}if
(!Ca(a,2))return AUN(b,c);if(Ca(a,64)){f=new XG;N0(f,b,c);return f;}f=new T$;N0(f,b,c);return f;}
function O8(a,b){var c,d,e,f,g,h,i;if(E0(a.g)&&!JR(a.g)&&Kq(a.g.j)){if(Ca(a,128)){c=ADg(a);if(!Di(a.g)){d=a.g;e=d.bi;if(!(e==(-536870871)&&!(b instanceof FA))&&e!=(-536870788)&&!E0(d))c=Md(a,b,c);}}else if(!N_(a.g)&&!VD(a.g)){f=new Ob;O(f);while(!Di(a.g)&&E0(a.g)&&!N_(a.g)&&!VD(a.g)){if(!(!JR(a.g)&&!a.g.j)&&!(!JR(a.g)&&Kq(a.g.j))){g=a.g.j;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bh(a.g);if(!L8(e))BD(f,e&65535);else It(f,Gv(e));}if(!Ca(a,2)){c=new RQ;Dz(c);c.cr
=N(f);e=f.Q;c.bM=e;c.kw=AMT(e);c.le=AMT(c.bM);h=0;while(h<(c.bM-1|0)){Rl(c.kw,L(c.cr,h),(c.bM-h|0)-1|0);Rl(c.le,L(c.cr,(c.bM-h|0)-1|0),(c.bM-h|0)-1|0);h=h+1|0;}}else if(Ca(a,64))c=AUL(f);else{c=new Nk;Dz(c);c.hg=N(f);c.bM=f.Q;}}else c=Md(a,b,XF(a,b));}else{d=a.g;if(d.bi!=(-536870871))c=Md(a,b,XF(a,b));else{if(b instanceof FA)K(B_(B(31),d.bP,N9(d)));c=GR(b);}}a:{if(!Di(a.g)){e=a.g.bi;if(!(e==(-536870871)&&!(b instanceof FA))&&e!=(-536870788)){f=O8(a,b);if(c instanceof C3&&!(c instanceof E5)&&!(c instanceof CQ)
&&!(c instanceof Ez)){i=c;if(!f.bV(i.J)){c=new WN;ES(c,i.J,i.d,i.hF);c.J.P(c);}}if((f.hI()&65535)!=43)c.P(f);else c.P(f.J);break a;}}if(c===null)return null;c.P(b);}if((c.hI()&65535)!=43)return c;return c.J;}
function Md(a,b,c){var d,e,f,g,h;d=a.g;e=d.bi;if(c!==null&&!(c instanceof BW)){switch(e){case -2147483606:Bh(d);d=new Yy;Dc(d,c,b,e);Ml();c.P(AYm);return d;case -2147483605:Bh(d);d=new PC;Dc(d,c,b,(-2147483606));Ml();c.P(AYm);return d;case -2147483585:Bh(d);d=new Pg;Dc(d,c,b,(-536870849));Ml();c.P(AYm);return d;case -2147483525:f=new Ne;d=Fa(d);g=a.eN+1|0;a.eN=g;Jg(f,d,c,b,(-536870849),g);Ml();c.P(AYm);return f;case -1073741782:case -1073741781:Bh(d);d=new RH;Dc(d,c,b,e);c.P(d);return d;case -1073741761:Bh(d);d
=new Qu;Dc(d,c,b,(-536870849));c.P(b);return d;case -1073741701:h=new Vg;d=Fa(d);e=a.eN+1|0;a.eN=e;Jg(h,d,c,b,(-536870849),e);c.P(h);return h;case -536870870:case -536870869:Bh(d);if(c.hI()!=(-2147483602)){d=new CQ;Dc(d,c,b,e);}else if(Ca(a,32)){d=new RJ;Dc(d,c,b,e);}else{d=new Om;f=Pj(a.dr);Dc(d,c,b,e);d.kB=f;}c.P(d);return d;case -536870849:Bh(d);d=new FU;Dc(d,c,b,(-536870849));c.P(b);return d;case -536870789:h=new Fb;d=Fa(d);e=a.eN+1|0;a.eN=e;Jg(h,d,c,b,(-536870849),e);c.P(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bh(d);d=new Yz;ES(d,f,b,e);f.d=d;return d;case -2147483585:Bh(d);c=new WJ;ES(c,f,b,(-2147483585));return c;case -2147483525:c=new O6;Ss(c,Fa(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bh(d);d=new Qn;ES(d,f,b,e);f.d=d;return d;case -1073741761:Bh(d);c=new Uo;ES(c,f,b,(-1073741761));return c;case -1073741701:c=new Ri;Ss(c,Fa(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bh(d);d=AT5(f,b,e);f.d=d;return d;case -536870849:Bh(d);c
=new Ez;ES(c,f,b,(-536870849));return c;case -536870789:return ATb(Fa(d),f,b,(-536870789));default:}return c;}
function XF(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof FA;while(true){a:{e=a.g;f=e.bi;if((f&(-2147418113))==(-2147483608)){Bh(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dr=g;else{if(f!=(-1073741784))g=a.dr;c=X$(a,f,g,b);e=a.g;if(e.bi!=(-536870871))K(B_(B(31),e.bP,e.c_));Bh(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bh(e);c
=AQh(0);break a;case -2147483577:Bh(e);c=new Oh;BP(c);break a;case -2147483558:Bh(e);c=new Xp;h=a.bx+1|0;a.bx=h;ADH(c,h);break a;case -2147483550:Bh(e);c=AQh(1);break a;case -2147483526:Bh(e);c=new W9;BP(c);break a;case -536870876:Bh(e);a.bx=a.bx+1|0;if(Ca(a,8)){if(Ca(a,1)){c=ATp(a.bx);break a;}c=ASI(a.bx);break a;}if(Ca(a,1)){c=ATE(a.bx);break a;}c=AUf(a.bx);break a;case -536870866:Bh(e);if(Ca(a,32)){c=AUy();break a;}c=AT_(Pj(a.dr));break a;case -536870821:Bh(e);i=0;c=a.g;if(c.bi==(-536870818)){i=1;Bh(c);}c
=KT(a,F7(a,i));c.P(b);e=a.g;if(e.bi!=(-536870819))K(B_(B(31),e.bP,e.c_));ON(e,1);Bh(a.g);break a;case -536870818:Bh(e);a.bx=a.bx+1|0;if(!Ca(a,8)){c=new Kv;BP(c);break a;}c=new Nq;e=Pj(a.dr);BP(c);c.q$=e;break a;case 0:j=e.eU;if(j!==null)c=KT(a,j);else{if(Di(e)){c=GR(b);break a;}c=AAb(f&65535);}Bh(a.g);break a;default:break b;}Bh(e);c=new Kv;BP(c);break a;}h=(f&2147483647)-48|0;if(a.gn<h)K(B_(B(31),Fk(e),N9(a.g)));Bh(e);a.bx=a.bx+1|0;c=!Ca(a,2)?ASP(h,a.bx):Ca(a,64)?ATq(h,a.bx):AUI(h,a.bx);a.kf.data[h].kd=1;a.nr
=1;break a;}if(f>=0&&!GT(e)){c=X2(a,f);Bh(a.g);}else if(f==(-536870788))c=GR(b);else{if(f!=(-536870871)){b=new IX;c=!GT(a.g)?Xo(f&65535):a.g.eU.cv();e=a.g;Jr(b,c,e.bP,e.c_);K(b);}if(d){b=new IX;e=a.g;Jr(b,B(31),e.bP,e.c_);K(b);}c=GR(b);}}}if(f!=(-16777176))break;}return c;}
function F7(a,b){var c,d,e,f,g,h,i,j,$$je;c=AQP(Ca(a,2),Ca(a,64));Et(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Di(a.g))break a;h=a.g;b=h.bi;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cy(c,d);d=Bh(a.g);h=a.g;if(h.bi!=(-536870874)){d=38;break d;}if(h.j==(-536870821)){Bh(h);e=1;d=(-1);break d;}Bh(h);if(g){c=F7(a,0);break d;}if(a.g.bi==(-536870819))break d;Xd(c,F7(a,0));break d;case -536870867:if(!g){b=h.j;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bh(h);h=a.g;i=h.bi;if(GT(h))break c;if
(i<0){j=a.g.j;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Kq(i))break e;i=i&65535;break e;}catch($$e){$$je=Eg($$e);if($$je instanceof D3){break b;}else{throw $$e;}}}try{BT(c,d,i);}catch($$e){$$je=Eg($$e);if($$je instanceof D3){break b;}else{throw $$e;}}Bh(a.g);d=(-1);break d;}}if(d>=0)Cy(c,d);d=45;Bh(a.g);break d;case -536870821:if(d>=0){Cy(c,d);d=(-1);}Bh(a.g);j=0;h=a.g;if(h.bi==(-536870818)){Bh(h);j=1;}if(!e)YN(c,F7(a,j));else Xd(c,F7(a,j));e=0;Bh(a.g);break d;case -536870819:if(d>=0)Cy(c,
d);d=93;Bh(a.g);break d;case -536870818:if(d>=0)Cy(c,d);d=94;Bh(a.g);break d;case 0:if(d>=0)Cy(c,d);h=a.g.eU;if(h===null)d=0;else{AEI(c,h);d=(-1);}Bh(a.g);break d;default:}if(d>=0)Cy(c,d);d=Bh(a.g);}g=0;}K(B_(B(31),J2(a),a.g.c_));}K(B_(B(31),J2(a),a.g.c_));}if(!f){if(d>=0)Cy(c,d);return c;}K(B_(B(31),J2(a),a.g.c_-1|0));}
function X2(a,b){var c,d,e;c=L8(b);if(Ca(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AGZ(b&65535);}if(Ca(a,64)&&b>128){if(c){d=new ME;Dz(d);d.bM=2;d.qB=GF(GD(b));return d;}if(OW(b))return AM0(b&65535);if(!SQ(b))return AOz(b&65535);return AKe(b&65535);}}if(!c){if(OW(b))return AM0(b&65535);if(!SQ(b))return AAb(b&65535);return AKe(b&65535);}d=new DU;Dz(d);d.bM=2;d.fQ=b;e=(Gv(b)).data;d.jL=e[0];d.ip=e[1];return d;}
function KT(a,b){var c,d,e;if(!AB1(b)){if(!b.L){if(b.gZ())return AJD(b);return AQj(b);}if(!b.gZ())return AKY(b);c=new Ji;UG(c,b);return c;}c=Ze(b);d=new MW;BP(d);d.pe=c;d.vS=c.bh;if(!b.L){if(b.gZ())return ACG(AJD(HA(b)),d);return ACG(AQj(HA(b)),d);}if(!b.gZ())return ACG(AKY(HA(b)),d);c=new Qi;e=new Ji;UG(e,HA(b));AEo(c,e,d);return c;}
function HB(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Ca(a,b){return (a.dr&b)!=b?0:1;}
function N8(){C.call(this);this.so=null;}
function ASl(a,b){b.dV=a.so.dV;}
var Gw=F(Cj);
var AYi=null;var AYh=null;var AYn=null;function Vb(){Vb=Bm(Gw);AH_();}
function AKB(a,b){var c=new Gw();Z7(c,a,b);return c;}
function Z7(a,b,c){Vb();C_(a,b,c);}
function AH_(){var b;AYi=AKB(B(407),0);b=AKB(B(408),1);AYh=b;AYn=H(Gw,[AYi,b]);}
function Ti(){C.call(this);this.sS=null;}
function ALa(a,b){Dt(a.sS,b);}
function BC(){var a=this;C.call(a);a.d=null;a.cj=0;a.oz=null;a.hF=0;}
var AVj=0;function BP(a){var b,c;b=new Fh;c=AVj;AVj=c+1|0;J6(b,c);a.oz=L_(b);}
function KQ(a,b){var c,d;c=new Fh;d=AVj;AVj=d+1|0;J6(c,d);a.oz=L_(c);a.d=b;}
function HJ(a,b,c,d){var e;e=d.x;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function HY(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AHq(a,b){a.hF=b;}
function AGC(a){return a.hF;}
function APK(a){return a.d;}
function AQF(a,b){a.d=b;}
function AQC(a,b){return 1;}
function ARx(a){return null;}
function Jd(a){var b;a.cj=1;b=a.d;if(b!==null){if(!b.cj){b=b.fs();if(b!==null){a.d.cj=1;a.d=b;}a.d.ej();}else if(b instanceof Gz&&b.en.kd)a.d=b.d;}}
function AEz(){AVj=1;}
var UP=F();
var AYg=null;function AS0(){AS0=Bm(UP);AGg();}
function AGg(){var b,c;Vb();b=BK((AYn.gJ()).data.length);c=b.data;AYg=b;c[AYi.eS]=1;c[AYh.eS]=2;}
function Pf(){C.call(this);this.p4=null;}
function AHz(a,b){UH(IL(a.p4),b,AWP,Za(B(409)));}
function Wl(){C.call(this);this.t$=null;}
function AJe(a,b){var c,d;c=a.t$;d=b.hz;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function YB(){var a=this;C.call(a);a.p3=null;a.p2=null;}
function AHl(a){var b,c;b=a.p3;c=a.p2;b.h3.sW(c);}
function CO(){var a=this;BC.call(a);a.kd=0;a.dA=0;}
var AYm=null;function Ml(){Ml=Bm(CO);AIE();}
function AUb(a){var b=new CO();Fn(b,a);return b;}
function Fn(a,b){Ml();BP(a);a.dA=b;}
function AF8(a,b,c,d){var e,f;e=IC(d,a.dA);JI(d,a.dA,b);f=a.d.c(b,c,d);if(f<0)JI(d,a.dA,e);return f;}
function AL5(a){return a.dA;}
function AGq(a,b){return 0;}
function AIE(){var b;b=new Oc;BP(b);AYm=b;}
function GO(){var a=this;C.call(a);a.bg=null;a.f7=0;a.eJ=0;a.t1=0;a.kC=0;a.bi=0;a.j=0;a.rC=0;a.eU=null;a.eH=null;a.v=0;a.hP=0;a.c_=0;a.he=0;a.bP=null;}
var AYo=null;var AYk=null;var AYl=0;function ON(a,b){if(b>0&&b<3)a.eJ=b;if(b==1){a.j=a.bi;a.eH=a.eU;a.v=a.he;a.he=a.c_;E4(a);}}
function GT(a){return a.eU===null?0:1;}
function JR(a){return a.eH===null?0:1;}
function Bh(a){E4(a);return a.kC;}
function Fa(a){var b;b=a.eU;E4(a);return b;}
function E4(a){var b,c,d,e,f,g,h,$$je;a.kC=a.bi;a.bi=a.j;a.eU=a.eH;a.c_=a.he;a.he=a.v;while(true){b=0;c=a.v>=a.bg.data.length?0:LG(a);a.j=c;a.eH=null;if(a.eJ==4){if(c!=92)return;c=a.v;d=a.bg.data;c=c>=d.length?0:d[BU(a)];a.j=c;switch(c){case 69:break;default:a.j=92;a.v=a.hP;return;}a.eJ=a.t1;a.j=a.v>(a.bg.data.length-2|0)?0:LG(a);}a:{c=a.j;if(c!=92){e=a.eJ;if(e==1)switch(c){case 36:a.j=(-536870876);break a;case 40:if(a.bg.data[a.v]!=63){a.j=(-2147483608);break a;}BU(a);c=a.bg.data[a.v];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.j=(-134217688);BU(a);break b;default:K(B_(B(31),Fk(a),a.v));}a.j=(-67108824);BU(a);}else{switch(c){case 33:break;case 60:BU(a);c=a.bg.data[a.v];e=1;break b;case 61:a.j=(-536870872);BU(a);break b;case 62:a.j=(-33554392);BU(a);break b;default:f=AEA(a);a.j=f;if(f<256){a.f7=f;f=f<<16;a.j=f;a.j=(-1073741784)|f;break b;}f=f&255;a.j=f;a.f7=f;f=f<<16;a.j=f;a.j=(-16777176)|f;break b;}a.j=(-268435416);BU(a);}}if(!e)break;}break a;case 41:a.j=(-536870871);break a;case 42:case 43:case 63:e
=a.v;d=a.bg.data;switch(e>=d.length?42:d[e]){case 43:a.j=c|(-2147483648);BU(a);break a;case 63:a.j=c|(-1073741824);BU(a);break a;default:}a.j=c|(-536870912);break a;case 46:a.j=(-536870866);break a;case 91:a.j=(-536870821);ON(a,2);break a;case 93:if(e!=2)break a;a.j=(-536870819);break a;case 94:a.j=(-536870818);break a;case 123:a.eH=AD3(a,c);break a;case 124:a.j=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.j=(-536870874);break a;case 45:a.j=(-536870867);break a;case 91:a.j=(-536870821);break a;case 93:a.j
=(-536870819);break a;case 94:a.j=(-536870818);break a;default:}}else{c=a.v>=(a.bg.data.length-2|0)?(-1):LG(a);c:{a.j=c;switch(c){case -1:K(B_(B(31),Fk(a),a.v));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.j
=ACq(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eJ!=1)break a;a.j=(-2147483648)|c;break a;case 65:a.j=(-2147483583);break a;case 66:a.j=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:K(B_(B(31),Fk(a),a.v));case 68:case 83:case 87:case 100:case 115:case 119:a.eH=Si(HC(a.bg,
a.hP,1),0);a.j=0;break a;case 71:a.j=(-2147483577);break a;case 80:case 112:break c;case 81:a.t1=a.eJ;a.eJ=4;b=1;break a;case 90:a.j=(-2147483558);break a;case 97:a.j=7;break a;case 98:a.j=(-2147483550);break a;case 99:c=a.v;d=a.bg.data;if(c>=(d.length-2|0))K(B_(B(31),Fk(a),a.v));a.j=d[BU(a)]&31;break a;case 101:a.j=27;break a;case 102:a.j=12;break a;case 110:a.j=10;break a;case 114:a.j=13;break a;case 116:a.j=9;break a;case 117:a.j=PI(a,4);break a;case 120:a.j=PI(a,2);break a;case 122:a.j=(-2147483526);break a;default:}break a;}g
=ACa(a);h=0;if(a.j==80)h=1;try{a.eH=Si(g,h);}catch($$e){$$je=Eg($$e);if($$je instanceof Jl){K(B_(B(31),Fk(a),a.v));}else{throw $$e;}}a.j=0;}}if(b)continue;else break;}}
function ACa(a){var b,c,d,e,f,g;b=new M;F1(b,10);c=a.v;d=a.bg;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=HC(d,BU(a),1);f=new M;O(f);G(G(f,B(410)),b);return N(f);}BU(a);c=0;a:{while(true){g=a.v;d=a.bg.data;if(g>=(d.length-2|0))break;c=d[BU(a)];if(c==125)break a;BD(b,c);}}if(c!=125)K(B_(B(31),a.bP,a.v));}if(!b.Q)K(B_(B(31),a.bP,a.v));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(410)),f);return N(b);}b:{c:{if(I(f)>3){if(KJ(f,B(410)))break c;if(KJ(f,B(411)))break c;}break b;}f=Dj(f,2);}return f;}
function AD3(a,b){var c,d,e,f,g,$$je;c=new M;F1(c,4);d=(-1);e=2147483647;a:{while(true){f=a.v;g=a.bg.data;if(f>=g.length)break a;b=g[BU(a)];if(b==125)break a;if(b==44&&d<0)try{d=JE(DT(c),10);AD9(c,0,Zr(c));continue;}catch($$e){$$je=Eg($$e);if($$je instanceof Dd){break;}else{throw $$e;}}BD(c,b&65535);}K(B_(B(31),a.bP,a.v));}if(b!=125)K(B_(B(31),a.bP,a.v));if(c.Q>0)b:{try{e=JE(DT(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Eg($$e);if($$je instanceof Dd){}else{throw $$e;}}K(B_(B(31),a.bP,a.v));}else if
(d<0)K(B_(B(31),a.bP,a.v));if((d|e|(e-d|0))<0)K(B_(B(31),a.bP,a.v));b=a.v;g=a.bg.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.j=(-2147483525);BU(a);break c;case 63:a.j=(-1073741701);BU(a);break c;default:}a.j=(-536870789);}c=new M6;c.eI=d;c.eE=e;return c;}
function Fk(a){return a.bP;}
function Di(a){return !a.bi&&!a.j&&a.v==a.rC&&!GT(a)?1:0;}
function Kq(b){return b<0?0:1;}
function E0(a){return !Di(a)&&!GT(a)&&Kq(a.bi)?1:0;}
function N_(a){var b;b=a.bi;return b<=56319&&b>=55296?1:0;}
function VD(a){var b;b=a.bi;return b<=57343&&b>=56320?1:0;}
function SQ(b){return b<=56319&&b>=55296?1:0;}
function OW(b){return b<=57343&&b>=56320?1:0;}
function PI(a,b){var c,d,e,f,$$je;c=new M;F1(c,b);d=a.bg.data.length-2|0;e=0;while(true){f=BE(e,b);if(f>=0)break;if(a.v>=d)break;BD(c,a.bg.data[BU(a)]);e=e+1|0;}if(!f)a:{try{b=JE(DT(c),16);}catch($$e){$$je=Eg($$e);if($$je instanceof Dd){break a;}else{throw $$e;}}return b;}K(B_(B(31),a.bP,a.v));}
function ACq(a){var b,c,d,e,f,g;b=3;c=1;d=a.bg.data;e=d.length-2|0;f=U9(d[a.v],8);switch(f){case -1:break;default:if(f>3)b=2;BU(a);a:{while(true){if(c>=b)break a;g=a.v;if(g>=e)break a;g=U9(a.bg.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BU(a);c=c+1|0;}}return f;}K(B_(B(31),a.bP,a.v));}
function AEA(a){var b,c,d,e;b=1;c=a.f7;a:while(true){d=a.v;e=a.bg.data;if(d>=e.length)K(B_(B(31),a.bP,d));b:{c:{switch(e[d]){case 41:BU(a);return c|256;case 45:if(!b)K(B_(B(31),a.bP,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BU(a);}BU(a);return c;}
function BU(a){var b,c,d,e,f;b=a.v;a.hP=b;if(!(a.f7&4))a.v=b+1|0;else{c=a.bg.data.length-2|0;a.v=b+1|0;a:while(true){d=a.v;if(d<c&&Rf(a.bg.data[d])){a.v=a.v+1|0;continue;}d=a.v;if(d>=c)break;e=a.bg.data;if(e[d]!=35)break;a.v=d+1|0;while(true){f=a.v;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.v=f+1|0;}}}return a.hP;}
function ADU(b){return AYo.CP(b);}
function LG(a){var b,c,d,e;b=a.bg.data[BU(a)];if(CF(b)){c=a.hP+1|0;d=a.bg.data;if(c<d.length){e=d[c];if(C4(e)){BU(a);return Eu(b,e);}}}return b;}
function N9(a){return a.c_;}
function IX(){var a=this;BG.call(a);a.xE=null;a.w$=null;a.qm=0;}
function B_(a,b,c){var d=new IX();Jr(d,a,b,c);return d;}
function Jr(a,b,c,d){X(a);a.qm=(-1);a.xE=b;a.w$=c;a.qm=d;}
function Xr(){C.call(this);this.tN=null;}
function ANY(a,b){var c,d;c=a.tN;d=0;while(d<b.length){Zo(c,b[d]);d=d+1|0;}}
var AB6=F(0);
function UA(){var a=this;C.call(a);a.pk=null;a.pm=null;a.po=null;}
function ANz(a,b){a.pk.l(ASJ(a.pm,b,a.po));}
var R3=F(CO);
function AFF(a,b,c,d){var e;e=a.dA;BI(d,e,b-Dl(d,e)|0);return a.d.c(b,c,d);}
function APa(a,b){return 0;}
var X5=F(CO);
function AHo(a,b,c,d){return b;}
var PL=F(CO);
function AGz(a,b,c,d){if(Dl(d,a.dA)!=b)b=(-1);return b;}
function Td(){CO.call(this);this.nf=0;}
function AFK(a,b,c,d){var e;e=a.dA;BI(d,e,b-Dl(d,e)|0);a.nf=b;return b;}
function ANI(a,b){return 0;}
var FA=F(CO);
function AQW(a,b,c,d){if(d.jy!=1&&b!=d.x)return (-1);d.iT=1;JI(d,0,b);return b;}
function BW(){BC.call(this);this.bM=0;}
function Dz(a){BP(a);a.bM=1;}
function ARZ(a,b,c,d){var e;if((b+a.b1()|0)>d.x){d.dl=1;return (-1);}e=a.bw(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function AP9(a){return a.bM;}
function AKC(a,b){return 1;}
var ADF=F(BW);
function GR(a){var b=new ADF();AMc(b,a);return b;}
function AMc(a,b){KQ(a,b);a.bM=1;a.hF=1;a.bM=0;}
function APB(a,b,c){return 0;}
function AIL(a,b,c,d){var e,f,g;e=d.x;f=d.cJ;while(true){g=BE(b,e);if(g>0)return (-1);if(g<0&&C4(L(c,b))&&b>f&&CF(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AHd(a,b,c,d,e){var f,g;f=e.x;g=e.cJ;while(true){if(c<b)return (-1);if(c<f&&C4(L(d,c))&&c>g&&CF(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AFI(a,b){return 0;}
function BS(){var a=this;BC.call(a);a.bF=null;a.en=null;a.Z=0;}
function ATy(a,b){var c=new BS();FB(c,a,b);return c;}
function FB(a,b,c){BP(a);a.bF=b;a.en=c;a.Z=c.dA;}
function AJn(a,b,c,d){var e,f,g,h;if(a.bF===null)return (-1);e=FE(d,a.Z);Dy(d,a.Z,b);f=a.bF.i;g=0;while(true){if(g>=f){Dy(d,a.Z,e);return (-1);}h=(Br(a.bF,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ANC(a,b){a.en.d=b;}
function ALr(a,b){var c;a:{c=a.bF;if(c!==null){c=BV(c);while(true){if(!B7(c))break a;if(!(BY(c)).bV(b))continue;else return 1;}}}return 0;}
function AOl(a,b){return IC(b,a.Z)>=0&&FE(b,a.Z)==IC(b,a.Z)?0:1;}
function AHa(a){var b,c,d,e;a.cj=1;b=a.en;if(b!==null&&!b.cj)Jd(b);a:{b=a.bF;if(b!==null){c=b.i;d=0;while(true){if(d>=c)break a;b=Br(a.bF,d);e=b.fs();if(e===null)e=b;else{b.cj=1;En(a.bF,d);RG(a.bF,d,e);}if(!e.cj)e.ej();d=d+1|0;}}}if(a.d!==null)Jd(a);}
var I9=F(BS);
function ANk(a,b,c,d){var e,f,g,h;e=Dl(d,a.Z);BI(d,a.Z,b);f=a.bF.i;g=0;while(true){if(g>=f){BI(d,a.Z,e);return (-1);}h=(Br(a.bF,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AOM(a,b){return !Dl(b,a.Z)?0:1;}
var DQ=F(I9);
function AHR(a,b,c,d){var e,f,g;e=Dl(d,a.Z);BI(d,a.Z,b);f=a.bF.i;g=0;while(g<f){if((Br(a.bF,g)).c(b,c,d)>=0)return a.d.c(a.en.nf,c,d);g=g+1|0;}BI(d,a.Z,e);return (-1);}
function AOs(a,b){a.d=b;}
var MO=F(DQ);
function ANu(a,b,c,d){var e,f;e=a.bF.i;f=0;while(f<e){if((Br(a.bF,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AQK(a,b){return 0;}
var Wy=F(DQ);
function AGl(a,b,c,d){var e,f;e=a.bF.i;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Br(a.bF,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AQb(a,b){return 0;}
var Rh=F(DQ);
function AG6(a,b,c,d){var e,f,g,h;e=a.bF.i;f=d.i2?0:d.cJ;a:{g=a.d.c(b,c,d);if(g>=0){BI(d,a.Z,b);h=0;while(true){if(h>=e)break a;if((Br(a.bF,h)).cq(f,b,c,d)>=0){BI(d,a.Z,(-1));return g;}h=h+1|0;}}}return (-1);}
function ASp(a,b){return 0;}
var TX=F(DQ);
function AFc(a,b,c,d){var e,f;e=a.bF.i;BI(d,a.Z,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Br(a.bF,f)).cq(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AO1(a,b){return 0;}
function Gz(){BS.call(this);this.cV=null;}
function ATY(a,b){var c=new Gz();ZY(c,a,b);return c;}
function ZY(a,b,c){BP(a);a.cV=b;a.en=c;a.Z=c.dA;}
function AFz(a,b,c,d){var e,f;e=FE(d,a.Z);Dy(d,a.Z,b);f=a.cV.c(b,c,d);if(f>=0)return f;Dy(d,a.Z,e);return (-1);}
function ALM(a,b,c,d){var e;e=a.cV.cm(b,c,d);if(e>=0)Dy(d,a.Z,e);return e;}
function APh(a,b,c,d,e){var f;f=a.cV.cq(b,c,d,e);if(f>=0)Dy(e,a.Z,f);return f;}
function ALm(a,b){return a.cV.bV(b);}
function ANF(a){var b;b=new M$;ZY(b,a.cV,a.en);a.d=b;return b;}
function ARA(a){var b;a.cj=1;b=a.en;if(b!==null&&!b.cj)Jd(b);b=a.cV;if(b!==null&&!b.cj){b=b.fs();if(b!==null){a.cV.cj=1;a.cV=b;}a.cV.ej();}}
var GQ=F();
function W(){var a=this;GQ.call(a);a.bh=0;a.cg=0;a.K=null;a.jE=null;a.j$=null;a.L=0;}
var AYp=null;function OI(){OI=Bm(W);AHB();}
function Bp(a){var b;OI();b=new Xn;b.C=BK(64);a.K=b;}
function AGn(a){return null;}
function AFU(a){return a.K;}
function AB1(a){var b,c,d,e,f;if(!a.cg)b=Hi(a.K,0)>=2048?0:1;else{a:{c=a.K;b=0;d=c.bs;if(b<d){e=c.C.data;f=(e[0]^(-1))>>>0|0;if(f)b=Is(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Is(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AJC(a){return a.L;}
function AP3(a){return a;}
function Ze(a){var b,c;if(a.j$===null){b=a.eT();c=new WL;c.x5=a;c.nJ=b;Bp(c);a.j$=c;Et(c,a.cg);}return a.j$;}
function HA(a){var b,c;if(a.jE===null){b=a.eT();c=new WK;c.xH=a;c.ts=b;c.ub=a;Bp(c);a.jE=c;Et(c,a.bh);a.jE.L=a.L;}return a.jE;}
function ARw(a){return 0;}
function Et(a,b){var c;c=a.bh;if(c^b){a.bh=c?0:1;a.cg=a.cg?0:1;}if(!a.L)a.L=1;return a;}
function AIN(a){return a.bh;}
function Km(b,c){OI();return b.k(c);}
function Iq(b,c){var d,e;OI();if(b.dg()!==null&&c.dg()!==null){b=b.dg();c=c.dg();d=Z(b.C.data.length,c.C.data.length);e=0;a:{while(e<d){if(b.C.data[e]&c.C.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Si(b,c){var d,e,f;OI();d=0;while(true){AOZ();e=AYq.data;if(d>=e.length){f=new Jl;Bl(f,B(31));f.yq=B(31);f.x8=b;K(f);}e=e[d].data;if(Bn(b,e[0]))break;d=d+1|0;}return AC8(e[1],c);}
function AHB(){var b;b=new G_;AOZ();AYp=b;}
function ZO(){var a=this;W.call(a);a.li=0;a.ne=0;a.go=0;a.kV=0;a.dT=0;a.fm=0;a.H=null;a.bD=null;}
function Dm(){var a=new ZO();AR9(a);return a;}
function AQP(a,b){var c=new ZO();AHp(c,a,b);return c;}
function AR9(a){Bp(a);a.H=ASr();}
function AHp(a,b,c){Bp(a);a.H=ASr();a.li=b;a.ne=c;}
function Cy(a,b){a:{if(a.li){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dT){Mu(a.H,HB(b&65535));break a;}LB(a.H,HB(b&65535));break a;}if(a.ne&&b>128){a.go=1;b=GF(GD(b));}}}if(!(!SQ(b)&&!OW(b))){if(a.kV)Mu(a.K,b-55296|0);else LB(a.K,b-55296|0);}if(a.dT)Mu(a.H,b);else LB(a.H,b);if(!a.L&&L8(b))a.L=1;return a;}
function AEI(a,b){var c,d,e;if(!a.L&&b.L)a.L=1;if(a.kV){if(!b.cg)FW(a.K,b.eT());else Da(a.K,b.eT());}else if(!b.cg)FO(a.K,b.eT());else{Fs(a.K,b.eT());Da(a.K,b.eT());a.cg=a.cg?0:1;a.kV=1;}if(!a.fm&&b.dg()!==null){if(a.dT){if(!b.bh)FW(a.H,b.dg());else Da(a.H,b.dg());}else if(!b.bh)FO(a.H,b.dg());else{Fs(a.H,b.dg());Da(a.H,b.dg());a.bh=a.bh?0:1;a.dT=1;}}else{c=a.bh;d=a.bD;if(d!==null){if(!c){e=new OB;e.wb=a;e.uJ=c;e.tX=d;e.tL=b;Bp(e);a.bD=e;}else{e=new OC;e.yy=a;e.q2=c;e.qG=d;e.pT=b;Bp(e);a.bD=e;}}else{if(c&&!a.dT
&&Ma(a.H)){d=new Oy;d.w9=a;d.qP=b;Bp(d);a.bD=d;}else if(!c){d=new Ow;d.kF=a;d.jV=c;d.on=b;Bp(d);a.bD=d;}else{d=new Ox;d.lw=a;d.j3=c;d.tQ=b;Bp(d);a.bD=d;}a.fm=1;}}return a;}
function BT(a,b,c){var d,e,f,g,h;if(b>c){d=new BG;X(d);K(d);}a:{b:{if(!a.li){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cy(a,b);b=b+1|0;}}if(!a.dT)H5(a.H,b,c+1|0);else{d=a.H;c=c+1|0;if(b>c){d=new Bz;X(d);K(d);}e=d.bs;if(b<e){f=Z(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.C.data;h[g]=h[g]&(Il(d,b)|HQ(d,f));}else{h=d.C.data;h[g]=h[g]&Il(d,b);e=g+1|0;while(e<c){d.C.data[e]=0;e=e+1|0;}if(f&31){h=d.C.data;h[c]=h[c]&HQ(d,f);}}Hd(d);}}}}return a;}
function YN(a,b){var c,d,e;if(!a.L&&b.L)a.L=1;if(b.go)a.go=1;c=a.cg;if(!(c^b.cg)){if(!c)FO(a.K,b.K);else Da(a.K,b.K);}else if(c)FW(a.K,b.K);else{Fs(a.K,b.K);Da(a.K,b.K);a.cg=1;}if(!a.fm&&CU(b)!==null){c=a.bh;if(!(c^b.bh)){if(!c)FO(a.H,CU(b));else Da(a.H,CU(b));}else if(c)FW(a.H,CU(b));else{Fs(a.H,CU(b));Da(a.H,CU(b));a.bh=1;}}else{c=a.bh;d=a.bD;if(d!==null){if(!c){e=new Or;e.vX=a;e.sV=c;e.tO=d;e.uq=b;Bp(e);a.bD=e;}else{e=new Pb;e.wl=a;e.un=c;e.mV=d;e.nh=b;Bp(e);a.bD=e;}}else{if(!a.dT&&Ma(a.H)){if(!c){d=new Oz;d.yE
=a;d.pv=b;Bp(d);a.bD=d;}else{d=new OA;d.wq=a;d.t9=b;Bp(d);a.bD=d;}}else if(!c){d=new OD;d.sY=a;d.ri=b;d.qK=c;Bp(d);a.bD=d;}else{d=new OE;d.rG=a;d.r3=b;d.se=c;Bp(d);a.bD=d;}a.fm=1;}}}
function Xd(a,b){var c,d,e;if(!a.L&&b.L)a.L=1;if(b.go)a.go=1;c=a.cg;if(!(c^b.cg)){if(!c)Da(a.K,b.K);else FO(a.K,b.K);}else if(!c)FW(a.K,b.K);else{Fs(a.K,b.K);Da(a.K,b.K);a.cg=0;}if(!a.fm&&CU(b)!==null){c=a.bh;if(!(c^b.bh)){if(!c)Da(a.H,CU(b));else FO(a.H,CU(b));}else if(!c)FW(a.H,CU(b));else{Fs(a.H,CU(b));Da(a.H,CU(b));a.bh=0;}}else{c=a.bh;d=a.bD;if(d!==null){if(!c){e=new Ot;e.wa=a;e.s4=c;e.nG=d;e.qY=b;Bp(e);a.bD=e;}else{e=new Ou;e.wv=a;e.su=c;e.mK=d;e.sU=b;Bp(e);a.bD=e;}}else{if(!a.dT&&Ma(a.H)){if(!c){d=new Oo;d.wr
=a;d.o9=b;Bp(d);a.bD=d;}else{d=new Op;d.yu=a;d.pb=b;Bp(d);a.bD=d;}}else if(!c){d=new Ov;d.vz=a;d.uF=b;d.rV=c;Bp(d);a.bD=d;}else{d=new On;d.rT=a;d.sz=b;d.q4=c;Bp(d);a.bD=d;}a.fm=1;}}}
function CZ(a,b){var c;c=a.bD;if(c!==null)return a.bh^c.k(b);return a.bh^Dv(a.H,b);}
function CU(a){if(!a.fm)return a.H;return null;}
function AID(a){return a.K;}
function AQq(a){var b,c;if(a.bD!==null)return a;b=CU(a);c=new Os;c.vT=a;c.is=b;Bp(c);return Et(c,a.bh);}
function AMH(a){var b,c,d;b=new M;O(b);c=Hi(a.H,0);while(c>=0){It(b,Gv(c));BD(b,124);c=Hi(a.H,c+1|0);}d=b.Q;if(d>0)WA(b,d-1|0);return N(b);}
function AIQ(a){return a.go;}
function Jl(){var a=this;Bq.call(a);a.yq=null;a.x8=null;}
function D2(){BC.call(this);this.J=null;}
function Dc(a,b,c,d){KQ(a,c);a.J=b;a.hF=d;}
function AR8(a){return a.J;}
function APk(a,b){return !a.J.bV(b)&&!a.d.bV(b)?0:1;}
function AQR(a,b){return 1;}
function AMa(a){var b;a.cj=1;b=a.d;if(b!==null&&!b.cj){b=b.fs();if(b!==null){a.d.cj=1;a.d=b;}a.d.ej();}b=a.J;if(b!==null){if(!b.cj){b=b.fs();if(b!==null){a.J.cj=1;a.J=b;}a.J.ej();}else if(b instanceof Gz&&b.en.kd)a.J=b.d;}}
function C3(){D2.call(this);this.bd=null;}
function AT5(a,b,c){var d=new C3();ES(d,a,b,c);return d;}
function ES(a,b,c,d){Dc(a,b,c,d);a.bd=b;}
function AFe(a,b,c,d){var e,f;e=0;a:{while((b+a.bd.b1()|0)<=d.x){f=a.bd.bw(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.bd.b1()|0;e=e+(-1)|0;}return f;}
function E5(){C3.call(this);this.jx=null;}
function ATb(a,b,c,d){var e=new E5();Ss(e,a,b,c,d);return e;}
function Ss(a,b,c,d,e){ES(a,c,d,e);a.jx=b;}
function AF_(a,b,c,d){var e,f,g,h,i;e=a.jx;f=e.eI;g=e.eE;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bd.b1()|0)>d.x)break a;i=a.bd.bw(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.bd.b1()|0;h=h+(-1)|0;}return i;}if((b+a.bd.b1()|0)>d.x){d.dl=1;return (-1);}i=a.bd.bw(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CQ=F(D2);
function AFy(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.J.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var Ez=F(C3);
function ALS(a,b,c,d){var e;e=a.J.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function ASs(a,b){a.d=b;a.J.P(b);}
var WN=F(C3);
function ARR(a,b,c,d){while((b+a.bd.b1()|0)<=d.x&&a.bd.bw(b,c)>0){b=b+a.bd.b1()|0;}return a.d.c(b,c,d);}
function AMD(a,b,c,d){var e,f,g;e=a.d.cm(b,c,d);if(e<0)return (-1);f=e-a.bd.b1()|0;while(f>=b&&a.bd.bw(f,c)>0){g=f-a.bd.b1()|0;e=f;f=g;}return e;}
function Ba(){var a=this;C.call(a);a.lG=null;a.kD=null;}
function AC8(a,b){if(!b&&a.lG===null)a.lG=a.E();else if(b&&a.kD===null)a.kD=Et(a.E(),1);if(b)return a.kD;return a.lG;}
var Dd=F(BG);
function M6(){var a=this;GQ.call(a);a.eI=0;a.eE=0;}
function AMO(a){var b,c,d,e,f;b=a.eI;c=a.eE;d=c==2147483647?B(31):L_(ADT(c));e=new M;O(e);BD(e,123);f=U(e,b);BD(f,44);BD(G(f,d),125);return N(e);}
var Oc=F(BC);
function AK4(a,b,c,d){return b;}
function ANB(a,b){return 0;}
function Xn(){var a=this;C.call(a);a.C=null;a.bs=0;}
function ASr(){var a=new Xn();AGQ(a);return a;}
function AGQ(a){a.C=BK(0);}
function LB(a,b){var c,d;c=b/32|0;if(b>=a.bs){Iy(a,c+1|0);a.bs=b+1|0;}d=a.C.data;d[c]=d[c]|1<<(b%32|0);}
function H5(a,b,c){var d,e,f,g,h;d=BE(b,c);if(d>0){e=new Bz;X(e);K(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bs){Iy(a,f+1|0);a.bs=c;}if(d==f){g=a.C.data;g[d]=g[d]|HQ(a,b)&Il(a,c);}else{g=a.C.data;g[d]=g[d]|HQ(a,b);h=d+1|0;while(h<f){a.C.data[h]=(-1);h=h+1|0;}if(c&31){g=a.C.data;g[f]=g[f]|Il(a,c);}}}
function HQ(a,b){return (-1)<<(b%32|0);}
function Il(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Mu(a,b){var c,d;c=b/32|0;d=a.C.data;if(c<d.length){d[c]=d[c]&Ki((-2),b%32|0);if(b==(a.bs-1|0))Hd(a);}}
function Dv(a,b){var c,d;c=b/32|0;d=a.C.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Hi(a,b){var c,d,e,f;c=a.bs;if(b>=c)return (-1);d=b/32|0;e=a.C.data;f=e[d]>>>(b%32|0)|0;if(f)return Is(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Is(e[f])|0;f=f+1|0;}return (-1);}
function Iy(a,b){var c;c=a.C.data.length;if(c>=b)return;c=Bb((b*3|0)/2|0,(c*2|0)+1|0);a.C=Mg(a.C,c);}
function Hd(a){var b,c,d;b=(a.bs+31|0)/32|0;a.bs=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=NM(a.C.data[c]);if(d<32)break;c=c+(-1)|0;a.bs=a.bs-32|0;}a.bs=a.bs-d|0;}}
function Da(a,b){var c,d,e,f;c=Z(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&b.C.data[d];d=d+1|0;}while(true){f=a.C.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bs=Z(a.bs,b.bs);Hd(a);}
function FW(a,b){var c,d,e;c=Z(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&(b.C.data[d]^(-1));d=d+1|0;}Hd(a);}
function FO(a,b){var c,d,e;c=Bb(a.bs,b.bs);a.bs=c;Iy(a,(c+31|0)/32|0);c=Z(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]|b.C.data[d];d=d+1|0;}}
function Fs(a,b){var c,d,e;c=Bb(a.bs,b.bs);a.bs=c;Iy(a,(c+31|0)/32|0);c=Z(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]^b.C.data[d];d=d+1|0;}Hd(a);}
function Ma(a){return a.bs?0:1;}
function MW(){var a=this;BS.call(a);a.pe=null;a.vS=0;}
function Qi(){var a=this;BS.call(a);a.l5=null;a.lz=null;}
function ACG(a,b){var c=new Qi();AEo(c,a,b);return c;}
function AEo(a,b,c){BP(a);a.l5=b;a.lz=c;}
function AF6(a,b,c,d){var e,f,g,h,i;e=a.l5.c(b,c,d);if(e<0)a:{f=a.lz;g=d.cJ;e=d.x;h=b+1|0;e=BE(h,e);if(e>0){d.dl=1;e=(-1);}else{i=L(c,b);if(!f.pe.k(i))e=(-1);else{if(CF(i)){if(e<0&&C4(L(c,h))){e=(-1);break a;}}else if(C4(i)&&b>g&&CF(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function ANg(a,b){a.d=b;a.lz.d=b;a.l5.P(b);}
function AGE(a,b){return 1;}
function AGm(a,b){return 1;}
function DA(){var a=this;BS.call(a);a.dJ=null;a.w2=0;}
function AKY(a){var b=new DA();UG(b,a);return b;}
function UG(a,b){BP(a);a.dJ=b.ja();a.w2=b.bh;}
function AIt(a,b,c,d){var e,f,g,h;e=d.x;if(b<e){f=b+1|0;g=L(c,b);if(a.k(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(Hr(g,f)&&a.k(Eu(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AI4(a,b){return a.dJ.k(b);}
function AFZ(a,b){if(b instanceof DU)return Km(a.dJ,b.fQ);if(b instanceof El)return Km(a.dJ,b.dc);if(b instanceof DA)return Iq(a.dJ,b.dJ);if(!(b instanceof Ee))return 1;return Iq(a.dJ,b.e6);}
function AKS(a){return a.dJ;}
function APX(a,b){a.d=b;}
function AII(a,b){return 1;}
var Ji=F(DA);
function AKD(a,b){return a.dJ.k(GF(GD(b)));}
function ZE(){var a=this;BW.call(a);a.qd=null;a.wN=0;}
function AJD(a){var b=new ZE();AMU(b,a);return b;}
function AMU(a,b){Dz(a);a.qd=b.ja();a.wN=b.bh;}
function AK5(a,b,c){return !a.qd.k(EX(Ey(L(c,b))))?(-1):1;}
function Ee(){var a=this;BW.call(a);a.e6=null;a.xm=0;}
function AQj(a){var b=new Ee();AN6(b,a);return b;}
function AN6(a,b){Dz(a);a.e6=b.ja();a.xm=b.bh;}
function Mw(a,b,c){return !a.e6.k(L(c,b))?(-1):1;}
function AND(a,b){if(b instanceof El)return Km(a.e6,b.dc);if(b instanceof Ee)return Iq(a.e6,b.e6);if(!(b instanceof DA)){if(!(b instanceof DU))return 1;return 0;}return Iq(a.e6,b.dJ);}
function OM(){var a=this;BS.call(a);a.gK=null;a.lT=null;a.ju=0;}
function AQw(a,b){var c=new OM();AFA(c,a,b);return c;}
function AFA(a,b,c){BP(a);a.gK=b;a.ju=c;}
function ALR(a,b){a.d=b;}
function Qv(a){if(a.lT===null)a.lT=FZ(a.gK);return a.lT;}
function AE4(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.x;f=BK(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?E7([k,l]):E7([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.ju;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gK.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.ju==3){k=f[0];m=a.gK.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.ju==2){b=f[0];m=a.gK.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AGv(a,b){return b instanceof OM&&!Bn(Qv(b),Qv(a))?0:1;}
function AQv(a,b){return 1;}
function El(){BW.call(this);this.dc=0;}
function AAb(a){var b=new El();AN$(b,a);return b;}
function AN$(a,b){Dz(a);a.dc=b;}
function AKO(a){return 1;}
function AJy(a,b,c){return a.dc!=L(c,b)?(-1):1;}
function AIo(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return HJ(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=GM(c,a.dc,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AKU(a,b,c,d,e){var f;if(!(d instanceof Bv))return HY(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=F5(d,a.dc,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AQm(a,b){if(b instanceof El)return b.dc!=a.dc?0:1;if(!(b instanceof Ee)){if(b instanceof DA)return b.k(a.dc);if(!(b instanceof DU))return 1;return 0;}return Mw(b,0,Xo(a.dc))<=0?0:1;}
function AD_(){BW.call(this);this.mF=0;}
function AOz(a){var b=new AD_();AMA(b,a);return b;}
function AMA(a,b){Dz(a);a.mF=EX(Ey(b));}
function AEZ(a,b,c){return a.mF!=EX(Ey(L(c,b)))?(-1):1;}
function YP(){var a=this;BW.call(a);a.uu=0;a.ny=0;}
function AGZ(a){var b=new YP();AOW(b,a);return b;}
function AOW(a,b){Dz(a);a.uu=b;a.ny=HB(b);}
function AFr(a,b,c){return a.uu!=L(c,b)&&a.ny!=L(c,b)?(-1):1;}
function Fe(){var a=this;BS.call(a);a.hu=0;a.ku=null;a.jZ=null;a.jU=0;}
function AUN(a,b){var c=new Fe();N0(c,a,b);return c;}
function N0(a,b,c){BP(a);a.hu=1;a.jZ=b;a.jU=c;}
function ARz(a,b){a.d=b;}
function ANj(a,b,c,d){var e,f,g,h,i,j,k,l;e=BK(4);f=d.x;if(b>=f)return (-1);g=KD(a,b,c,f);h=b+a.hu|0;i=ADU(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Eh(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=KD(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(ADU(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.hu|0;if(h>=f){b=k;break a;}g=KD(a,h,c,f);b=k;}}}if(b!=a.jU)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.jZ.data[g])break;g=g+1|0;}return (-1);}
function Xc(a){var b,c;if(a.ku===null){b=new M;O(b);c=0;while(c<a.jU){It(b,Gv(a.jZ.data[c]));c=c+1|0;}a.ku=N(b);}return a.ku;}
function KD(a,b,c,d){var e,f,g;a.hu=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(Hr(e,f)){g=BN(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CF(g[0])&&C4(g[1])?Eu(g[0],g[1]):g[0];a.hu=2;}}return e;}
function AK6(a,b){return b instanceof Fe&&!Bn(Xc(b),Xc(a))?0:1;}
function AOv(a,b){return 1;}
var XG=F(Fe);
var T$=F(Fe);
var Yy=F(CQ);
function AHt(a,b,c,d){var e;while(true){e=a.J.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var PC=F(CQ);
function AMq(a,b,c,d){var e;e=a.J.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.J.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FU=F(CQ);
function APR(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.J.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AQ1(a,b){a.d=b;a.J.P(b);}
var Pg=F(FU);
function AKR(a,b,c,d){var e;e=a.J.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AMP(a,b){a.d=b;}
function Fb(){var a=this;CQ.call(a);a.f2=null;a.dp=0;}
function AYr(a,b,c,d,e){var f=new Fb();Jg(f,a,b,c,d,e);return f;}
function Jg(a,b,c,d,e,f){Dc(a,c,d,e);a.f2=b;a.dp=f;}
function ASi(a,b,c,d){var e,f;e=M2(d,a.dp);if(!a.J.I(d))return a.d.c(b,c,d);if(e>=a.f2.eE)return a.d.c(b,c,d);f=a.dp;e=e+1|0;Eb(d,f,e);f=a.J.c(b,c,d);if(f>=0){Eb(d,a.dp,0);return f;}f=a.dp;e=e+(-1)|0;Eb(d,f,e);if(e>=a.f2.eI)return a.d.c(b,c,d);Eb(d,a.dp,0);return (-1);}
var Ne=F(Fb);
function AJ7(a,b,c,d){var e,f,g;e=0;f=a.f2.eE;a:{while(true){g=a.J.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.f2.eI)return (-1);return a.d.c(b,c,d);}
var RH=F(CQ);
function ARG(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.J.c(b,c,d);}
var Qu=F(FU);
function AGH(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.J.c(b,c,d);return e;}
var Vg=F(Fb);
function AFP(a,b,c,d){var e,f,g;e=M2(d,a.dp);if(!a.J.I(d))return a.d.c(b,c,d);f=a.f2;if(e>=f.eE){Eb(d,a.dp,0);return a.d.c(b,c,d);}if(e<f.eI){Eb(d,a.dp,e+1|0);g=a.J.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){Eb(d,a.dp,0);return g;}Eb(d,a.dp,e+1|0);g=a.J.c(b,c,d);}return g;}
var RJ=F(D2);
function AR6(a,b,c,d){var e;e=d.x;if(e>b)return a.d.cq(b,e,c,d);return a.d.c(b,c,d);}
function AP5(a,b,c,d){var e;e=d.x;if(a.d.cq(b,e,c,d)>=0)return b;return (-1);}
function Om(){D2.call(this);this.kB=null;}
function ANG(a,b,c,d){var e,f;e=d.x;f=Vi(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cq(b,e,c,d);return a.d.c(b,c,d);}
function AE8(a,b,c,d){var e,f,g,h;e=d.x;f=a.d.cm(b,c,d);if(f<0)return (-1);g=Vi(a,f,e,c);if(g>=0)e=g;g=Bb(f,a.d.cq(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.kB.hy(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Vi(a,b,c,d){while(true){if(b>=c)return (-1);if(a.kB.hy(L(d,b)))break;b=b+1|0;}return b;}
var EM=F();
var AYs=null;var AYt=null;function Pj(b){var c;if(!(b&1)){c=AYt;if(c!==null)return c;c=new VK;AYt=c;return c;}c=AYs;if(c!==null)return c;c=new VJ;AYs=c;return c;}
var Yz=F(C3);
function AFR(a,b,c,d){var e;a:{while(true){if((b+a.bd.b1()|0)>d.x)break a;e=a.bd.bw(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var WJ=F(Ez);
function AMp(a,b,c,d){var e;if((b+a.bd.b1()|0)<=d.x){e=a.bd.bw(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var O6=F(E5);
function APp(a,b,c,d){var e,f,g,h,i;e=a.jx;f=e.eI;g=e.eE;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bd.b1()|0)>d.x)break a;i=a.bd.bw(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.bd.b1()|0)>d.x){d.dl=1;return (-1);}i=a.bd.bw(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Qn=F(C3);
function ANy(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.bd.b1()|0)<=d.x){e=a.bd.bw(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Uo=F(Ez);
function AFY(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.J.c(b,c,d);}
var Ri=F(E5);
function APF(a,b,c,d){var e,f,g,h,i,j;e=a.jx;f=e.eI;g=e.eE;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.bd.b1()|0)<=d.x){i=a.bd.bw(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bd.b1()|0)>d.x){d.dl=1;return (-1);}j=a.bd.bw(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Kv=F(BC);
function ALo(a,b,c,d){if(b&&!(d.fn&&b==d.cJ))return (-1);return a.d.c(b,c,d);}
function AKm(a,b){return 0;}
function AAk(){BC.call(this);this.tY=0;}
function AQh(a){var b=new AAk();AKJ(b,a);return b;}
function AKJ(a,b){BP(a);a.tY=b;}
function AGk(a,b,c,d){var e,f,g;e=b<d.x?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.i2?0:d.cJ;return (e!=32&&!Qx(a,e,b,g,c)?0:1)^(f!=32&&!Qx(a,f,b-1|0,g,c)?0:1)^a.tY?(-1):a.d.c(b,c,d);}
function AGt(a,b){return 0;}
function Qx(a,b,c,d,e){var f;if(!JC(b)&&b!=95){a:{if(Cw(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(JC(f))return 0;if(Cw(f)!=6)return 1;}}return 1;}return 0;}
var Oh=F(BC);
function AKH(a,b,c,d){if(b!=d.hG)return (-1);return a.d.c(b,c,d);}
function ASd(a,b){return 0;}
function Xp(){BC.call(this);this.f$=0;}
function AUf(a){var b=new Xp();ADH(b,a);return b;}
function ADH(a,b){BP(a);a.f$=b;}
function AOf(a,b,c,d){var e,f,g;e=!d.fn?I(c):d.x;if(b>=e){BI(d,a.f$,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BI(d,a.f$,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BI(d,a.f$,0);return a.d.c(b,c,d);}
function AHi(a,b){var c;c=!Dl(b,a.f$)?0:1;BI(b,a.f$,(-1));return c;}
var W9=F(BC);
function ANc(a,b,c,d){if(b<(d.i2?I(c):d.x))return (-1);d.dl=1;d.xR=1;return a.d.c(b,c,d);}
function AEW(a,b){return 0;}
function Nq(){BC.call(this);this.q$=null;}
function AG_(a,b,c,d){a:{if(b!=d.x){if(!b)break a;if(d.fn&&b==d.cJ)break a;if(a.q$.sw(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AJg(a,b){return 0;}
var AD0=F(BS);
function AUy(){var a=new AD0();AM1(a);return a;}
function AM1(a){BP(a);}
function ARM(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dl=1;return (-1);}g=L(c,b);if(CF(g)){h=b+2|0;if(h<=e&&Hr(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AGx(a,b){a.d=b;}
function AMV(a){return (-2147483602);}
function AGw(a,b){return 1;}
function ZM(){BS.call(this);this.k5=null;}
function AT_(a){var b=new ZM();AHg(b,a);return b;}
function AHg(a,b){BP(a);a.k5=b;}
function AM4(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dl=1;return (-1);}g=L(c,b);if(CF(g)){b=b+2|0;if(b<=e){h=L(c,f);if(Hr(g,h))return a.k5.hy(Eu(g,h))?(-1):a.d.c(b,c,d);}}return a.k5.hy(g)?(-1):a.d.c(f,c,d);}
function AO9(a,b){a.d=b;}
function AET(a){return (-2147483602);}
function ARW(a,b){return 1;}
function ADR(){BC.call(this);this.hj=0;}
function ATE(a){var b=new ADR();AJb(b,a);return b;}
function AJb(a,b){BP(a);a.hj=b;}
function AK_(a,b,c,d){var e;e=!d.fn?I(c):d.x;if(b>=e){BI(d,a.hj,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BI(d,a.hj,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AI_(a,b){var c;c=!Dl(b,a.hj)?0:1;BI(b,a.hj,(-1));return c;}
function AB3(){BC.call(this);this.hs=0;}
function ATp(a){var b=new AB3();AJE(b,a);return b;}
function AJE(a,b){BP(a);a.hs=b;}
function ANa(a,b,c,d){if((!d.fn?I(c)-b|0:d.x-b|0)<=0){BI(d,a.hs,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BI(d,a.hs,1);return a.d.c(b+1|0,c,d);}
function AI1(a,b){var c;c=!Dl(b,a.hs)?0:1;BI(b,a.hs,(-1));return c;}
function YM(){BC.call(this);this.fG=0;}
function ASI(a){var b=new YM();ASk(b,a);return b;}
function ASk(a,b){BP(a);a.fG=b;}
function AKa(a,b,c,d){var e,f,g;e=!d.fn?I(c)-b|0:d.x-b|0;if(!e){BI(d,a.fG,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BI(d,a.fG,0);return a.d.c(b,c,d);case 13:if(g!=10){BI(d,a.fG,0);return a.d.c(b,c,d);}BI(d,a.fG,0);return a.d.c(b,c,d);default:}return (-1);}
function AHn(a,b){var c;c=!Dl(b,a.fG)?0:1;BI(b,a.fG,(-1));return c;}
function Ha(){var a=this;BS.call(a);a.m_=0;a.gG=0;}
function AUI(a,b){var c=new Ha();OV(c,a,b);return c;}
function OV(a,b,c){BP(a);a.m_=b;a.gG=c;}
function AFT(a,b,c,d){var e,f,g,h;e=Gc(a,d);if(e!==null&&(b+I(e)|0)<=d.x){f=0;while(true){if(f>=I(e)){BI(d,a.gG,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&HB(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AOp(a,b){a.d=b;}
function Gc(a,b){var c,d;c=a.m_;d=FE(b,c);c=IC(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.k7)?Cb(b.k7,d,c):null;}
function AON(a,b){var c;c=!Dl(b,a.gG)?0:1;BI(b,a.gG,(-1));return c;}
var ADW=F(Ha);
function ASP(a,b){var c=new ADW();AQS(c,a,b);return c;}
function AQS(a,b,c){OV(a,b,c);}
function AHs(a,b,c,d){var e,f;e=Gc(a,d);if(e!==null&&(b+I(e)|0)<=d.x){f=!UF(c,e,b)?(-1):I(e);if(f<0)return (-1);BI(d,a.gG,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AQH(a,b,c,d){var e,f;e=Gc(a,d);f=d.cJ;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=AAj(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AFG(a,b,c,d,e){var f,g;f=Gc(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=PO(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AMh(a,b){return 1;}
var AA6=F(Ha);
function ATq(a,b){var c=new AA6();AI$(c,a,b);return c;}
function AI$(a,b,c){OV(a,b,c);}
function ALG(a,b,c,d){var e,f;e=Gc(a,d);if(e!==null&&(b+I(e)|0)<=d.x){f=0;while(true){if(f>=I(e)){BI(d,a.gG,I(e));return a.d.c(b+I(e)|0,c,d);}if(EX(Ey(L(e,f)))!=EX(Ey(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Ob=F(Gn);
function AIR(a,b,c,d,e){M7(a,b,c,d,e);return a;}
function AGo(a,b,c,d){Xw(a,b,c,d);return a;}
function AGP(a,b){JH(a,b);}
function AP8(a,b,c){XO(a,b,c);return a;}
function RQ(){var a=this;BW.call(a);a.cr=null;a.kw=null;a.le=null;}
function AHO(a,b,c){return !Ku(a,c,b)?(-1):a.bM;}
function AGf(a,b,c,d){var e,f,g;e=d.x;while(true){if(b>e)return (-1);f=L(a.cr,a.bM-1|0);a:{while(true){g=a.bM;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&Ku(a,c,b))break;b=b+S1(a.kw,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bM|0,c,d)>=0)break;b=b+1|0;}return b;}
function AJd(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.cr,0);g=(I(d)-c|0)-a.bM|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&Ku(a,d,c))break;c=c-S1(a.le,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bM|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AJL(a,b){var c;if(b instanceof El)return b.dc!=L(a.cr,0)?0:1;if(b instanceof Ee)return Mw(b,0,Cb(a.cr,0,1))<=0?0:1;if(!(b instanceof DA)){if(!(b instanceof DU))return 1;return I(a.cr)>1&&b.fQ==Eu(L(a.cr,0),L(a.cr,1))?1:0;}a:{b:{b=b;if(!b.k(L(a.cr,0))){if(I(a.cr)<=1)break b;if(!b.k(Eu(L(a.cr,0),L(a.cr,1))))break b;}c=1;break a;}c=0;}return c;}
function Ku(a,b,c){var d;d=0;while(d<a.bM){if(L(b,d+c|0)!=L(a.cr,d))return 0;d=d+1|0;}return 1;}
function YL(){BW.call(this);this.i6=null;}
function AUL(a){var b=new YL();AQo(b,a);return b;}
function AQo(a,b){var c,d,e;Dz(a);c=new M;O(c);d=0;while(true){e=BE(d,b.Q);if(e>=0){a.i6=N(c);a.bM=c.Q;return;}if(d<0)break;if(e>=0)break;BD(c,EX(Ey(b.D.data[d])));d=d+1|0;}b=new Bz;X(b);K(b);}
function ALO(a,b,c){var d;d=0;while(true){if(d>=I(a.i6))return I(a.i6);if(L(a.i6,d)!=EX(Ey(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Nk(){BW.call(this);this.hg=null;}
function APr(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.hg))return I(a.hg);e=L(a.hg,d);f=b+d|0;if(e!=L(c,f)&&HB(L(a.hg,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var G_=F();
var AYu=null;var AYv=null;var AYq=null;function AOZ(){AOZ=Bm(G_);AH$();}
function AH$(){AYu=AUp();AYv=ATx();AYq=H($rt_arraycls(C),[H(C,[B(412),AUJ()]),H(C,[B(413),ASF()]),H(C,[B(414),AUm()]),H(C,[B(415),AUt()]),H(C,[B(416),AYv]),H(C,[B(417),ATH()]),H(C,[B(418),ATv()]),H(C,[B(419),ASU()]),H(C,[B(420),ASO()]),H(C,[B(421),AS1()]),H(C,[B(422),ATd()]),H(C,[B(423),ASY()]),H(C,[B(424),AT4()]),H(C,[B(425),ASz()]),H(C,[B(426),AUq()]),H(C,[B(427),ATc()]),H(C,[B(428),ATF()]),H(C,[B(429),ATa()]),H(C,[B(430),ATG()]),H(C,[B(431),AS4()]),H(C,[B(432),AUx()]),H(C,[B(433),AS7()]),H(C,[B(434),ATL()]),
H(C,[B(435),AUk()]),H(C,[B(436),AUg()]),H(C,[B(437),AUu()]),H(C,[B(438),AS3()]),H(C,[B(439),AT9()]),H(C,[B(440),AYu]),H(C,[B(441),ATR()]),H(C,[B(442),ASV()]),H(C,[B(443),AYu]),H(C,[B(444),ASw()]),H(C,[B(445),AYv]),H(C,[B(446),ATk()]),H(C,[B(447),P(0,127)]),H(C,[B(448),P(128,255)]),H(C,[B(449),P(256,383)]),H(C,[B(450),P(384,591)]),H(C,[B(451),P(592,687)]),H(C,[B(452),P(688,767)]),H(C,[B(453),P(768,879)]),H(C,[B(454),P(880,1023)]),H(C,[B(455),P(1024,1279)]),H(C,[B(456),P(1280,1327)]),H(C,[B(457),P(1328,1423)]),
H(C,[B(458),P(1424,1535)]),H(C,[B(459),P(1536,1791)]),H(C,[B(460),P(1792,1871)]),H(C,[B(461),P(1872,1919)]),H(C,[B(462),P(1920,1983)]),H(C,[B(463),P(2304,2431)]),H(C,[B(464),P(2432,2559)]),H(C,[B(465),P(2560,2687)]),H(C,[B(466),P(2688,2815)]),H(C,[B(467),P(2816,2943)]),H(C,[B(468),P(2944,3071)]),H(C,[B(469),P(3072,3199)]),H(C,[B(470),P(3200,3327)]),H(C,[B(471),P(3328,3455)]),H(C,[B(472),P(3456,3583)]),H(C,[B(473),P(3584,3711)]),H(C,[B(474),P(3712,3839)]),H(C,[B(475),P(3840,4095)]),H(C,[B(476),P(4096,4255)]),
H(C,[B(477),P(4256,4351)]),H(C,[B(478),P(4352,4607)]),H(C,[B(479),P(4608,4991)]),H(C,[B(480),P(4992,5023)]),H(C,[B(481),P(5024,5119)]),H(C,[B(482),P(5120,5759)]),H(C,[B(483),P(5760,5791)]),H(C,[B(484),P(5792,5887)]),H(C,[B(485),P(5888,5919)]),H(C,[B(486),P(5920,5951)]),H(C,[B(487),P(5952,5983)]),H(C,[B(488),P(5984,6015)]),H(C,[B(489),P(6016,6143)]),H(C,[B(490),P(6144,6319)]),H(C,[B(491),P(6400,6479)]),H(C,[B(492),P(6480,6527)]),H(C,[B(493),P(6528,6623)]),H(C,[B(494),P(6624,6655)]),H(C,[B(495),P(6656,6687)]),
H(C,[B(496),P(7424,7551)]),H(C,[B(497),P(7552,7615)]),H(C,[B(498),P(7616,7679)]),H(C,[B(499),P(7680,7935)]),H(C,[B(500),P(7936,8191)]),H(C,[B(501),P(8192,8303)]),H(C,[B(502),P(8304,8351)]),H(C,[B(503),P(8352,8399)]),H(C,[B(504),P(8400,8447)]),H(C,[B(505),P(8448,8527)]),H(C,[B(506),P(8528,8591)]),H(C,[B(507),P(8592,8703)]),H(C,[B(508),P(8704,8959)]),H(C,[B(509),P(8960,9215)]),H(C,[B(510),P(9216,9279)]),H(C,[B(511),P(9280,9311)]),H(C,[B(512),P(9312,9471)]),H(C,[B(513),P(9472,9599)]),H(C,[B(514),P(9600,9631)]),
H(C,[B(515),P(9632,9727)]),H(C,[B(516),P(9728,9983)]),H(C,[B(517),P(9984,10175)]),H(C,[B(518),P(10176,10223)]),H(C,[B(519),P(10224,10239)]),H(C,[B(520),P(10240,10495)]),H(C,[B(521),P(10496,10623)]),H(C,[B(522),P(10624,10751)]),H(C,[B(523),P(10752,11007)]),H(C,[B(524),P(11008,11263)]),H(C,[B(525),P(11264,11359)]),H(C,[B(526),P(11392,11519)]),H(C,[B(527),P(11520,11567)]),H(C,[B(528),P(11568,11647)]),H(C,[B(529),P(11648,11743)]),H(C,[B(530),P(11776,11903)]),H(C,[B(531),P(11904,12031)]),H(C,[B(532),P(12032,12255)]),
H(C,[B(533),P(12272,12287)]),H(C,[B(534),P(12288,12351)]),H(C,[B(535),P(12352,12447)]),H(C,[B(536),P(12448,12543)]),H(C,[B(537),P(12544,12591)]),H(C,[B(538),P(12592,12687)]),H(C,[B(539),P(12688,12703)]),H(C,[B(540),P(12704,12735)]),H(C,[B(541),P(12736,12783)]),H(C,[B(542),P(12784,12799)]),H(C,[B(543),P(12800,13055)]),H(C,[B(544),P(13056,13311)]),H(C,[B(545),P(13312,19893)]),H(C,[B(546),P(19904,19967)]),H(C,[B(547),P(19968,40959)]),H(C,[B(548),P(40960,42127)]),H(C,[B(549),P(42128,42191)]),H(C,[B(550),P(42752,
42783)]),H(C,[B(551),P(43008,43055)]),H(C,[B(552),P(44032,55203)]),H(C,[B(553),P(55296,56191)]),H(C,[B(554),P(56192,56319)]),H(C,[B(555),P(56320,57343)]),H(C,[B(556),P(57344,63743)]),H(C,[B(557),P(63744,64255)]),H(C,[B(558),P(64256,64335)]),H(C,[B(559),P(64336,65023)]),H(C,[B(560),P(65024,65039)]),H(C,[B(561),P(65040,65055)]),H(C,[B(562),P(65056,65071)]),H(C,[B(563),P(65072,65103)]),H(C,[B(564),P(65104,65135)]),H(C,[B(565),P(65136,65279)]),H(C,[B(566),P(65280,65519)]),H(C,[B(567),P(0,1114111)]),H(C,[B(568),
ASZ()]),H(C,[B(569),BL(0,1)]),H(C,[B(570),IY(62,1)]),H(C,[B(571),BL(1,1)]),H(C,[B(572),BL(2,1)]),H(C,[B(573),BL(3,0)]),H(C,[B(574),BL(4,0)]),H(C,[B(575),BL(5,1)]),H(C,[B(576),IY(448,1)]),H(C,[B(577),BL(6,1)]),H(C,[B(578),BL(7,0)]),H(C,[B(579),BL(8,1)]),H(C,[B(580),IY(3584,1)]),H(C,[B(581),BL(9,1)]),H(C,[B(582),BL(10,1)]),H(C,[B(583),BL(11,1)]),H(C,[B(584),IY(28672,0)]),H(C,[B(585),BL(12,0)]),H(C,[B(586),BL(13,0)]),H(C,[B(587),BL(14,0)]),H(C,[B(588),ATr(983040,1,1)]),H(C,[B(589),BL(15,0)]),H(C,[B(590),BL(16,
1)]),H(C,[B(591),BL(18,1)]),H(C,[B(592),ATD(19,0,1)]),H(C,[B(593),IY(1643118592,1)]),H(C,[B(594),BL(20,0)]),H(C,[B(595),BL(21,0)]),H(C,[B(596),BL(22,0)]),H(C,[B(597),BL(23,0)]),H(C,[B(598),BL(24,1)]),H(C,[B(599),IY(2113929216,1)]),H(C,[B(600),BL(25,1)]),H(C,[B(601),BL(26,0)]),H(C,[B(602),BL(27,0)]),H(C,[B(603),BL(28,1)]),H(C,[B(604),BL(29,0)]),H(C,[B(605),BL(30,0)])]);}
function ME(){BW.call(this);this.qB=0;}
function APy(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.qB!=GF(GD(Eu(e,d)))?(-1):2;}
function K3(){BS.call(this);this.gl=0;}
function AM0(a){var b=new K3();AGK(b,a);return b;}
function AGK(a,b){BP(a);a.gl=b;}
function ANs(a,b){a.d=b;}
function AHj(a,b,c,d){var e,f;e=b+1|0;if(e>d.x){d.dl=1;return (-1);}f=L(c,b);if(b>d.cJ&&CF(L(c,b-1|0)))return (-1);if(a.gl!=f)return (-1);return a.d.c(e,c,d);}
function AJJ(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return HJ(a,b,c,d);e=d.cJ;f=d.x;while(true){if(b>=f)return (-1);g=GM(c,a.gl,b);if(g<0)return (-1);if(g>e&&CF(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AHW(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HY(a,b,c,d,e);f=e.cJ;a:{while(true){if(c<b)return (-1);g=F5(d,a.gl,c);if(g<0)break a;if(g<b)break a;if(g>f&&CF(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AFE(a,b){if(b instanceof El)return 0;if(b instanceof Ee)return 0;if(b instanceof DA)return 0;if(b instanceof DU)return 0;if(b instanceof Ln)return 0;if(!(b instanceof K3))return 1;return b.gl!=a.gl?0:1;}
function AQc(a,b){return 1;}
function Ln(){BS.call(this);this.fY=0;}
function AKe(a){var b=new Ln();AM8(b,a);return b;}
function AM8(a,b){BP(a);a.fY=b;}
function AGO(a,b){a.d=b;}
function AFd(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;g=BE(f,e);if(g>0){d.dl=1;return (-1);}h=L(c,b);if(g<0&&C4(L(c,f)))return (-1);if(a.fY!=h)return (-1);return a.d.c(f,c,d);}
function ANR(a,b,c,d){var e,f;if(!(c instanceof Bv))return HJ(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=GM(c,a.fY,b);if(f<0)return (-1);b=f+1|0;if(b<e&&C4(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function APq(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HY(a,b,c,d,e);f=e.x;a:{while(true){if(c<b)return (-1);g=F5(d,a.fY,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&C4(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AHP(a,b){if(b instanceof El)return 0;if(b instanceof Ee)return 0;if(b instanceof DA)return 0;if(b instanceof DU)return 0;if(b instanceof K3)return 0;if(!(b instanceof Ln))return 1;return b.fY!=a.fY?0:1;}
function AN3(a,b){return 1;}
function DU(){var a=this;BW.call(a);a.jL=0;a.ip=0;a.fQ=0;}
function AOO(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.jL==e&&a.ip==d?2:(-1);}
function AMI(a,b,c,d){var e,f;if(!(c instanceof Bv))return HJ(a,b,c,d);e=d.x;while(b<e){b=GM(c,a.jL,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.ip==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AGM(a,b,c,d,e){var f;if(!(d instanceof Bv))return HY(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=F5(d,a.ip,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.jL==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AOA(a,b){if(b instanceof DU)return b.fQ!=a.fQ?0:1;if(b instanceof DA)return b.k(a.fQ);if(b instanceof El)return 0;if(!(b instanceof Ee))return 1;return 0;}
var VJ=F(EM);
function AG0(a,b){return b!=10?0:1;}
function AOH(a,b,c){return b!=10?0:1;}
var VK=F(EM);
function APJ(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ARt(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ACT(){var a=this;C.call(a);a.mn=null;a.j2=null;a.gX=0;a.u_=0;}
function AMT(a){var b=new ACT();AKF(b,a);return b;}
function AKF(a,b){var c,d;while(true){c=a.gX;if(b<c)break;a.gX=c<<1|1;}d=c<<1|1;a.gX=d;d=d+1|0;a.mn=BK(d);a.j2=BK(d);a.u_=b;}
function Rl(a,b,c){var d,e,f,g;d=0;e=a.gX;f=b&e;while(true){g=a.mn.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.j2.data[f]=c;}
function S1(a,b){var c,d,e,f;c=a.gX;d=b&c;e=0;while(true){f=a.mn.data[d];if(!f)break;if(f==b)return a.j2.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.u_;}
var Y4=F();
var K1=F(Ba);
function AUp(){var a=new K1();AJ8(a);return a;}
function AJ8(a){}
function ABc(a){return Cy(BT(Dm(),9,13),32);}
var J4=F(Ba);
function ATx(){var a=new J4();AP_(a);return a;}
function AP_(a){}
function ABX(a){return BT(Dm(),48,57);}
var ACN=F(Ba);
function AUJ(){var a=new ACN();AJo(a);return a;}
function AJo(a){}
function AO_(a){return BT(Dm(),97,122);}
var ADk=F(Ba);
function ASF(){var a=new ADk();AKM(a);return a;}
function AKM(a){}
function AQe(a){return BT(Dm(),65,90);}
var ADp=F(Ba);
function AUm(){var a=new ADp();AGh(a);return a;}
function AGh(a){}
function AIu(a){return BT(Dm(),0,127);}
var KX=F(Ba);
function AUt(){var a=new KX();AHv(a);return a;}
function AHv(a){}
function ZQ(a){return BT(BT(Dm(),97,122),65,90);}
var Ly=F(KX);
function ATH(){var a=new Ly();AKl(a);return a;}
function AKl(a){}
function AAI(a){return BT(ZQ(a),48,57);}
var AEH=F(Ba);
function ATv(){var a=new AEH();AMu(a);return a;}
function AMu(a){}
function AJH(a){return BT(BT(BT(Dm(),33,64),91,96),123,126);}
var Mv=F(Ly);
function ASU(){var a=new Mv();AOk(a);return a;}
function AOk(a){}
function YH(a){return BT(BT(BT(AAI(a),33,64),91,96),123,126);}
var ABp=F(Mv);
function ASO(){var a=new ABp();AP2(a);return a;}
function AP2(a){}
function AMb(a){return Cy(YH(a),32);}
var ABP=F(Ba);
function AS1(){var a=new ABP();APs(a);return a;}
function APs(a){}
function AHH(a){return Cy(Cy(Dm(),32),9);}
var AAe=F(Ba);
function ATd(){var a=new AAe();ARh(a);return a;}
function ARh(a){}
function AL$(a){return Cy(BT(Dm(),0,31),127);}
var ZX=F(Ba);
function ASY(){var a=new ZX();AGs(a);return a;}
function AGs(a){}
function ARv(a){return BT(BT(BT(Dm(),48,57),97,102),65,70);}
var ADt=F(Ba);
function AT4(){var a=new ADt();AF$(a);return a;}
function AF$(a){}
function AMQ(a){var b;b=new Tj;b.w1=a;Bp(b);b.L=1;return b;}
var AES=F(Ba);
function ASz(){var a=new AES();AOF(a);return a;}
function AOF(a){}
function AE6(a){var b;b=new MT;b.w_=a;Bp(b);b.L=1;return b;}
var ACU=F(Ba);
function AUq(){var a=new ACU();AGi(a);return a;}
function AGi(a){}
function AKf(a){var b;b=new Sa;b.wJ=a;Bp(b);return b;}
var ACH=F(Ba);
function ATc(){var a=new ACH();AL_(a);return a;}
function AL_(a){}
function AOS(a){var b;b=new R_;b.ws=a;Bp(b);return b;}
var ADJ=F(Ba);
function ATF(){var a=new ADJ();AHr(a);return a;}
function AHr(a){}
function AHD(a){var b;b=new Xf;b.xY=a;Bp(b);H5(b.K,0,2048);b.L=1;return b;}
var Zk=F(Ba);
function ATa(){var a=new Zk();AGV(a);return a;}
function AGV(a){}
function AH4(a){var b;b=new OY;b.xn=a;Bp(b);b.L=1;return b;}
var Y1=F(Ba);
function ATG(){var a=new Y1();ALL(a);return a;}
function ALL(a){}
function ARq(a){var b;b=new N7;b.yr=a;Bp(b);b.L=1;return b;}
var AC0=F(Ba);
function AS4(){var a=new AC0();AMv(a);return a;}
function AMv(a){}
function AE0(a){var b;b=new QK;b.w3=a;Bp(b);return b;}
var ADb=F(Ba);
function AUx(){var a=new ADb();AJW(a);return a;}
function AJW(a){}
function ALd(a){var b;b=new MM;b.vL=a;Bp(b);b.L=1;return b;}
var AAA=F(Ba);
function AS7(){var a=new AAA();AFH(a);return a;}
function AFH(a){}
function AId(a){var b;b=new MR;b.xr=a;Bp(b);b.L=1;return b;}
var ABU=F(Ba);
function ATL(){var a=new ABU();AG4(a);return a;}
function AG4(a){}
function AJi(a){var b;b=new NQ;b.xV=a;Bp(b);b.L=1;return b;}
var AEk=F(Ba);
function AUk(){var a=new AEk();ALi(a);return a;}
function ALi(a){}
function ALf(a){var b;b=new Pm;b.yc=a;Bp(b);b.L=1;return b;}
var ADa=F(Ba);
function AUg(){var a=new ADa();AMN(a);return a;}
function AMN(a){}
function AQy(a){var b;b=new Pv;b.wM=a;Bp(b);return b;}
var AA4=F(Ba);
function AUu(){var a=new AA4();AGX(a);return a;}
function AGX(a){}
function AOa(a){var b;b=new T6;b.xC=a;Bp(b);return b;}
var AAy=F(Ba);
function AS3(){var a=new AAy();AOV(a);return a;}
function AOV(a){}
function AML(a){var b;b=new SP;b.vP=a;Bp(b);b.L=1;return b;}
var AEN=F(Ba);
function AT9(){var a=new AEN();AJQ(a);return a;}
function AJQ(a){}
function AO5(a){var b;b=new M4;b.yG=a;Bp(b);b.L=1;return b;}
var Ju=F(Ba);
function ATR(){var a=new Ju();AIl(a);return a;}
function AIl(a){}
function ABR(a){return Cy(BT(BT(BT(Dm(),97,122),65,90),48,57),95);}
var ADL=F(Ju);
function ASV(){var a=new ADL();AJ1(a);return a;}
function AJ1(a){}
function AMx(a){var b;b=Et(ABR(a),1);b.L=1;return b;}
var ABt=F(K1);
function ASw(){var a=new ABt();AQ3(a);return a;}
function AQ3(a){}
function AGe(a){var b;b=Et(ABc(a),1);b.L=1;return b;}
var AAt=F(J4);
function ATk(){var a=new AAt();AK3(a);return a;}
function AK3(a){}
function AJu(a){var b;b=Et(ABX(a),1);b.L=1;return b;}
function Z4(){var a=this;Ba.call(a);a.qn=0;a.q5=0;}
function P(a,b){var c=new Z4();ARo(c,a,b);return c;}
function ARo(a,b,c){a.qn=b;a.q5=c;}
function ALt(a){return BT(Dm(),a.qn,a.q5);}
var AAn=F(Ba);
function ASZ(){var a=new AAn();ARC(a);return a;}
function ARC(a){}
function ARb(a){return BT(BT(Dm(),65279,65279),65520,65533);}
function ABk(){var a=this;Ba.call(a);a.lX=0;a.jS=0;a.oA=0;}
function BL(a,b){var c=new ABk();AHm(c,a,b);return c;}
function ATD(a,b,c){var d=new ABk();ARp(d,a,b,c);return d;}
function AHm(a,b,c){a.jS=c;a.lX=b;}
function ARp(a,b,c,d){a.oA=d;a.jS=c;a.lX=b;}
function AIV(a){var b;b=AUE(a.lX);if(a.oA)H5(b.K,0,2048);b.L=a.jS;return b;}
function ABq(){var a=this;Ba.call(a);a.lW=0;a.j4=0;a.ng=0;}
function IY(a,b){var c=new ABq();AIe(c,a,b);return c;}
function ATr(a,b,c){var d=new ABq();AE3(d,a,b,c);return d;}
function AIe(a,b,c){a.j4=c;a.lW=b;}
function AE3(a,b,c,d){a.ng=d;a.j4=c;a.lW=b;}
function AE1(a){var b;b=new R5;ACr(b,a.lW);if(a.ng)H5(b.K,0,2048);b.L=a.j4;return b;}
var Z_=F();
var ZC=F();
function AA2(b){var c,d,e,f,g,h,i;c=APd(Gy(b));d=JT(c);e=BK(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+JT(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Nd(c);h=h+1|0;}return e;}
function KK(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Nr(){var a=this;C.call(a);a.pd=0;a.rq=0;a.pq=null;}
function AIT(a,b,c){var d=new Nr();AP1(d,a,b,c);return d;}
function AP1(a,b,c,d){a.pd=b;a.rq=c;a.pq=d;}
function AC6(){var a=this;C.call(a);a.n2=null;a.qy=0;}
function APd(a){var b=new AC6();AHS(b,a);return b;}
function AHS(a,b){a.n2=b;}
var AA1=F();
function JT(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.n2.data;f=b.qy;b.qy=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+V(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Nd(b){var c,d;c=JT(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function ZI(){C.call(this);this.Gc=null;}
function Vx(){C.call(this);this.uZ=null;}
function AQf(a,b){var c,d,e,f;c=b.data;b=a.uZ;d=D8(c[0]);e=FM(c[1]);ABB(b.e.f,d,e);Gx(Ck(b),AWK);F8(Ck(b));f=Kx(FH(),b.e1);b=new M;O(b);G(H1(G(b,B(606)),f),B(193));$rt_globals.console.info($rt_ustr(N(b)));}
function Rp(){C.call(this);this.q3=null;}
function AIS(a,b){KM(a.q3,b);}
var Y_=F();
function AEp(b){var c,d,e,f,g,h,i,j,k,l;c=new Wo;c.lh=0;c.g3=BK(16);c.e8=0;d=CA(b);HX(c,d);e=0;f=0;while(f<d){g=B1(b,f);h=g.o.data.length;HX(c,h);i=0;while(i<h){j=NA(g,i);k=Mo(j);HX(c,e);HX(c,k);e=e+Mo(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}d=c.lh;if(d&&c.e8!=d){b=EW();d=c.lh;e=c.e8;j=new M;O(j);G(U(G(U(G(j,B(401)),d),B(607)),e),B(608));Bo(b,N(j));}l=c.g3;d=l.data.length;e=c.e8;if(d!=e)l=Mg(l,e);return l;}
function ADc(b){var c,d,e,f,g,h,i,j,k;c=BB(b);d=R(H$,c);e=d.data;f=0;while(f<c){a:{g=BB(b);if(g!=(-1)){h=BB(b);i=BB(b);if(i==(-1)){j=new H$;j.f4=h;e[g]=j;}else{j=new H$;j.f4=h;j.lg=BK(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].lg.data[k]=BB(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function Ro(){C.call(this);this.ui=null;}
function AOT(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.ui;d=D8(c[0]);c=ADQ(d);e=new QX;d=ADc(c);f=ADc(c);g=BB(c);h=R(L2,g);i=h.data;j=0;while(j<g){k=BB(c);l=BB(c);m=BB(c);n=BB(c);o=BB(c);p=new L2;p.hC=k;p.lv=l;p.hA=m;p.k8=n;p.j1=o;i[j]=p;j=j+1|0;}e.w6=d;e.re=f;e.f5=h;b.dn=e;Lu(b.z,d);Lu(b.B,b.dn.re);}
function Up(){var a=this;C.call(a);a.vJ=null;a.vI=null;a.vK=null;}
function PP(){var a=this;C.call(a);a.x_=null;a.ya=null;}
function WL(){var a=this;W.call(a);a.nJ=null;a.x5=null;}
function AIC(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cg^Dv(a.nJ,c):0;}
function WK(){var a=this;W.call(a);a.ts=null;a.ub=null;a.xH=null;}
function AFu(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cg^Dv(a.ts,c):0;return a.ub.k(b)&&!d?1:0;}
function Os(){var a=this;W.call(a);a.is=null;a.vT=null;}
function ALk(a,b){return a.bh^Dv(a.is,b);}
function AJk(a){var b,c,d;b=new M;O(b);c=Hi(a.is,0);while(c>=0){It(b,Gv(c));BD(b,124);c=Hi(a.is,c+1|0);}d=b.Q;if(d>0)WA(b,d-1|0);return N(b);}
function Oy(){var a=this;W.call(a);a.qP=null;a.w9=null;}
function AOR(a,b){return a.qP.k(b);}
function Ow(){var a=this;W.call(a);a.jV=0;a.on=null;a.kF=null;}
function APx(a,b){return !(a.jV^Dv(a.kF.H,b))&&!(a.jV^a.kF.dT^a.on.k(b))?0:1;}
function Ox(){var a=this;W.call(a);a.j3=0;a.tQ=null;a.lw=null;}
function ALN(a,b){return !(a.j3^Dv(a.lw.H,b))&&!(a.j3^a.lw.dT^a.tQ.k(b))?1:0;}
function OB(){var a=this;W.call(a);a.uJ=0;a.tX=null;a.tL=null;a.wb=null;}
function AH9(a,b){return a.uJ^(!a.tX.k(b)&&!a.tL.k(b)?0:1);}
function OC(){var a=this;W.call(a);a.q2=0;a.qG=null;a.pT=null;a.yy=null;}
function AEU(a,b){return a.q2^(!a.qG.k(b)&&!a.pT.k(b)?0:1)?0:1;}
function Oz(){var a=this;W.call(a);a.pv=null;a.yE=null;}
function AJp(a,b){return CZ(a.pv,b);}
function OA(){var a=this;W.call(a);a.t9=null;a.wq=null;}
function ALQ(a,b){return CZ(a.t9,b)?0:1;}
function OD(){var a=this;W.call(a);a.ri=null;a.qK=0;a.sY=null;}
function AQL(a,b){return !CZ(a.ri,b)&&!(a.qK^Dv(a.sY.H,b))?0:1;}
function OE(){var a=this;W.call(a);a.r3=null;a.se=0;a.rG=null;}
function AHy(a,b){return !CZ(a.r3,b)&&!(a.se^Dv(a.rG.H,b))?1:0;}
function Or(){var a=this;W.call(a);a.sV=0;a.tO=null;a.uq=null;a.vX=null;}
function ASv(a,b){return !(a.sV^a.tO.k(b))&&!CZ(a.uq,b)?0:1;}
function Pb(){var a=this;W.call(a);a.un=0;a.mV=null;a.nh=null;a.wl=null;}
function AJt(a,b){return !(a.un^a.mV.k(b))&&!CZ(a.nh,b)?1:0;}
function Oo(){var a=this;W.call(a);a.o9=null;a.wr=null;}
function AHw(a,b){return CZ(a.o9,b);}
function Op(){var a=this;W.call(a);a.pb=null;a.yu=null;}
function AI9(a,b){return CZ(a.pb,b)?0:1;}
function Ov(){var a=this;W.call(a);a.uF=null;a.rV=0;a.vz=null;}
function AKK(a,b){return CZ(a.uF,b)&&a.rV^Dv(a.vz.H,b)?1:0;}
function On(){var a=this;W.call(a);a.sz=null;a.q4=0;a.rT=null;}
function AQl(a,b){return CZ(a.sz,b)&&a.q4^Dv(a.rT.H,b)?0:1;}
function Ot(){var a=this;W.call(a);a.s4=0;a.nG=null;a.qY=null;a.wa=null;}
function AGr(a,b){return a.s4^a.nG.k(b)&&CZ(a.qY,b)?1:0;}
function Ou(){var a=this;W.call(a);a.su=0;a.mK=null;a.sU=null;a.wv=null;}
function AN1(a,b){return a.su^a.mK.k(b)&&CZ(a.sU,b)?0:1;}
var LX=F(0);
function SN(){var a=this;C.call(a);a.wh=null;a.tS=null;a.iQ=null;a.cu=null;a.it=0;a.kz=0;}
function MP(a,b){var c,d,e;c=I(a.iQ);if(b>=0&&b<=c){X3(a.cu,null,(-1),(-1));d=a.cu;d.jy=1;d.ee=b;c=d.hG;if(c<0)c=b;d.hG=c;b=a.tS.cm(b,a.iQ,d);if(b==(-1))a.cu.dl=1;if(b>=0){d=a.cu;if(d.iT){e=d.dO.data;if(e[0]==(-1)){c=d.ee;e[0]=c;e[1]=c;}d.hG=Jc(d);return 1;}}a.cu.ee=(-1);return 0;}d=new Bz;Bl(d,C5(b));K(d);}
function AEi(a){return O4(a.cu,0);}
function AAu(a){return Sf(a.cu,0);}
function ADD(){var a=this;C.call(a);a.BY=null;a.BZ=null;a.BX=0.0;}
function Wo(){var a=this;C.call(a);a.g3=null;a.lh=0;a.e8=0;}
function HX(a,b){var c,d;c=a.g3;d=c.data.length;if(d==a.e8)a.g3=Mg(c,d*2|0);c=a.g3.data;d=a.e8;a.e8=d+1|0;c[d]=b;}
var C1=F(0);
var AWk=null;var AXN=null;var AWm=null;var AWl=null;var AWo=null;var AWn=null;var AWq=null;var AWp=null;var AWs=null;var AWr=null;var AWt=null;function ABW(){ABW=Bm(C1);ALI();}
function ALI(){AWk=CL(0);AXN=CM(0,0,0);AWm=Q(B(609));AWl=CM(255,255,255);AWo=CM(166,214,255);AWn=Q(B(610));AWq=Q(B(611));AWp=Q(B(612));AWs=Fw(205,205,205,153);AWr=Fw(255,255,255,0);AWt=Q(B(120));}
function Cg(){Cj.call(this);this.lf=null;}
var AYw=null;var AYx=null;var AYy=null;var AYz=null;var AYA=null;var AYB=null;var AYC=null;var AYD=null;var AYE=null;var AYF=null;var AYG=null;var AYH=null;var AYI=null;var AYJ=null;var AYK=null;var AWu=null;function AAl(){AAl=Bm(Cg);AIZ();}
function DB(a,b,c){var d=new Cg();WM(d,a,b,c);return d;}
function AJ6(a,b,c,d){var e=new Cg();ACu(e,a,b,c,d);return e;}
function WM(a,b,c,d){AAl();C_(a,b,c);a.lf=Iu(d,null);}
function ACu(a,b,c,d,e){AAl();C_(a,b,c);a.lf=Iu(d,e);}
function AIZ(){var b;b=new Cg;ABW();WM(b,B(335),0,AXN);AYw=b;AYx=DB(B(336),1,CM(0,49,191));AYy=DB(B(338),2,Q(B(613)));AYz=DB(B(340),3,Q(B(614)));AYA=DB(B(342),4,AXN);AYB=DB(B(343),5,Q(B(615)));AYC=DB(B(345),6,Q(B(379)));AYD=DB(B(347),7,Q(B(616)));AYE=DB(B(349),8,Q(B(617)));AYF=AJ6(B(351),9,AXN,CM(237,235,252));AYG=AJ6(B(352),10,Q(B(377)),Q(B(618)));AYH=DB(B(353),11,Q(B(379)));AYI=DB(B(355),12,Q(B(380)));AYJ=DB(B(357),13,Q(B(619)));b=DB(B(358),14,Q(B(359)));AYK=b;AWu=H(Cg,[AYw,AYx,AYy,AYz,AYA,AYB,AYC,AYD,AYE,
AYF,AYG,AYH,AYI,AYJ,b]);}
var Du=F(0);
var AWy=null;var AWz=null;var AWv=null;var AWw=null;var AWx=null;var AXO=null;var AXP=null;var AWA=null;var AWB=null;function AOU(){AOU=Bm(Du);AJf();}
function AJf(){AWy=Q(B(118));AWz=Q(B(620));AWv=Q(B(621));AWw=Q(B(622));AWx=Q(B(623));AXO=Q(B(118));AXP=Q(B(620));AWA=Fw(205,205,205,153);AWB=CM(247,248,250);}
function Og(){var a=this;C.call(a);a.iu=null;a.ha=0;}
function Od(){C.call(this);this.rx=null;}
function AO4(a,b){UR(a.rx,b);}
var M$=F(Gz);
function AIY(a,b,c,d){var e,f,g;e=0;f=d.x;a:{while(true){if(b>f){b=e;break a;}g=FE(d,a.Z);Dy(d,a.Z,b);e=a.cV.c(b,c,d);if(e>=0)break;Dy(d,a.Z,g);b=b+1|0;}}return b;}
function ASg(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=FE(e,a.Z);Dy(e,a.Z,c);f=a.cV.c(c,d,e);if(f>=0)break;Dy(e,a.Z,g);c=c+(-1)|0;}}return c;}
function AHh(a){return null;}
var Qb=F(Bq);
var Xy=F(Bq);
function VE(){FR.call(this);this.yn=0;}
function P1(){FR.call(this);this.yg=0;}
var Yn=F(Bq);
function Vt(){var a=this;C.call(a);a.ro=null;a.tu=null;a.u0=0;a.kc=0;}
function Kz(a,b){return B8(a.ro)<b?0:1;}
function Sh(){var a=this;C.call(a);a.vj=null;a.vk=null;}
function SX(){var a=this;C.call(a);a.wL=null;a.pr=null;}
function SW(){C.call(this);this.vM=null;}
var ACW=F(0);
function Mj(b){return !b?H(Bv,[B(149),B(150),B(624)]):H(Bv,[B(149),B(150),B(624),B(41)]);}
var AAp=F();
function Tl(){var a=this;C.call(a);a.uj=null;a.uk=0;a.ul=null;}
function Lr(a,b){var c,d,e,f,g,h,i,j,k;c=a.uj;d=a.uk;e=a.ul;if(b<=d){f=Ck(c);g=new S_;g.o0=c;h=R(C,1);h.data[0]=e;CP(f,g,B(625),h);}else{i=Ck(c);g=new Ta;g.rF=c;j=R(C,2);k=j.data;k[0]=e;h=BK(1);h.data[0]=250;k[1]=h;CP(i,g,B(626),j);f=Ck(c);g=new Tb;g.nX=c;h=R(C,1);h.data[0]=e;CP(f,g,B(627),h);}}
function VB(){var a=this;C.call(a);a.dO=null;a.jH=null;a.k2=null;a.k7=null;a.ow=0;a.iT=0;a.cJ=0;a.x=0;a.ee=0;a.i2=0;a.fn=0;a.dl=0;a.xR=0;a.hG=0;a.jy=0;}
function BI(a,b,c){a.jH.data[b]=c;}
function Dl(a,b){return a.jH.data[b];}
function Jc(a){return Sf(a,0);}
function Sf(a,b){R4(a,b);return a.dO.data[(b*2|0)+1|0];}
function Dy(a,b,c){a.dO.data[b*2|0]=c;}
function JI(a,b,c){a.dO.data[(b*2|0)+1|0]=c;}
function FE(a,b){return a.dO.data[b*2|0];}
function IC(a,b){return a.dO.data[(b*2|0)+1|0];}
function ACO(a){return O4(a,0);}
function O4(a,b){R4(a,b);return a.dO.data[b*2|0];}
function M2(a,b){return a.k2.data[b];}
function Eb(a,b,c){a.k2.data[b]=c;}
function R4(a,b){var c;if(!a.iT){c=new D0;X(c);K(c);}if(b>=0&&b<a.ow)return;c=new Bz;Bl(c,C5(b));K(c);}
function X3(a,b,c,d){a.iT=0;a.jy=2;Hz(a.dO,(-1));Hz(a.jH,(-1));if(b!==null)a.k7=b;if(c>=0){a.cJ=c;a.x=d;}a.ee=a.cJ;}
function AAM(a){return a.jy;}
function YW(a){return a.i2;}
function V4(){C.call(this);this.n$=null;}
function AQX(a){DL(a.n$);}
function Tj(){W.call(this);this.w1=null;}
function AQU(a,b){return Cw(b)!=2?0:1;}
function MT(){W.call(this);this.w_=null;}
function AGb(a,b){return Cw(b)!=1?0:1;}
function Sa(){W.call(this);this.wJ=null;}
function AFX(a,b){return Rf(b);}
function R_(){W.call(this);this.ws=null;}
function AIU(a,b){return 0;}
function Xf(){W.call(this);this.xY=null;}
function AKv(a,b){return !Cw(b)?0:1;}
function OY(){W.call(this);this.xn=null;}
function AQY(a,b){return Cw(b)!=9?0:1;}
function N7(){W.call(this);this.yr=null;}
function ANm(a,b){return Gq(b);}
function QK(){W.call(this);this.w3=null;}
function AOY(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function MM(){W.call(this);this.vL=null;}
function ARU(a,b){a:{b:{switch(Cw(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gq(b);}return b;}
function MR(){W.call(this);this.xr=null;}
function AHU(a,b){a:{b:{switch(Cw(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gq(b);}return b;}
function NQ(){W.call(this);this.xV=null;}
function AQ_(a,b){a:{switch(Cw(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Pm(){W.call(this);this.yc=null;}
function AL7(a,b){return JC(b);}
function Pv(){W.call(this);this.wM=null;}
function AOn(a,b){return Pw(b);}
function T6(){W.call(this);this.xC=null;}
function AQM(a,b){return Cw(b)!=3?0:1;}
function SP(){W.call(this);this.vP=null;}
function ARD(a,b){a:{b:{switch(Cw(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Gq(b);}return b;}
function M4(){W.call(this);this.yG=null;}
function AHF(a,b){a:{b:{switch(Cw(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Gq(b);}return b;}
function Mf(){W.call(this);this.ll=0;}
function AUE(a){var b=new Mf();ACr(b,a);return b;}
function ACr(a,b){Bp(a);a.ll=b;}
function ANp(a,b){return a.bh^(a.ll!=Cw(b&65535)?0:1);}
var R5=F(Mf);
function APY(a,b){return a.bh^(!(a.ll>>Cw(b&65535)&1)?0:1);}
function PV(){C.call(this);this.vC=null;}
function ALB(a){var b,c;b=a.vC;c=b.vj;b=b.vk;c.Gh(b.ij,b.kh,null);}
function Wa(){C.call(this);this.nP=null;}
function AOe(a,b){var c,d,e,f;c=a.nP;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.pr;c=Bw();b=CB(b);e=new M;O(e);G(G(e,B(628)),b);Bo(c,N(e));b=Bw();f=d.length;c=new M;O(c);U(G(c,B(629)),f);Bo(b,N(c));}
function Wd(){var a=this;C.call(a);a.tk=null;a.tl=null;}
function AMW(a,b){var c,d;c=a.tk;d=a.tl;b.arrayBuffer().then(Bk(c,"f"),Bk(d,"f"));}
function TS(){var a=this;C.call(a);a.ms=null;a.mt=null;}
function AJB(a,b){var c;c=a.ms;Lr(a.mt,JK(c,b.size));}
function TV(){C.call(this);this.uG=null;}
function AFo(a,b){var c;c=a.uG;Bo(EW(),$rt_str(b.message));Lr(c,0);}
function UV(){C.call(this);this.wA=null;}
function ALv(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function Ta(){C.call(this);this.rF=null;}
function AN0(a,b){var c,d;c=a.rF;if(!c.h0){b=b.data;c.e.f=AB4(D8(b[0]),FM(b[1]));c.hZ=1;d=Kx(FH(),c.e1);b=new M;O(b);G(H1(G(b,B(630)),d),B(193));$rt_globals.console.info($rt_ustr(N(b)));}}
function Tb(){C.call(this);this.nX=null;}
function AMy(a,b){var c,d,e,f,g,h;c=b.data;d=a.nX;e=(D8(c[2])).data[0];if(e!=1)HM(d,b);else{d.h0=1;f=D8(c[0]);g=FM(c[1]);b=d.e;b.f=ACX(b.f,f,g,d.hZ);WE(d,ADG(e));Gx(Ck(d),AWK);F8(Ck(d));h=Kx(FH(),d.e1);b=new M;O(b);G(H1(G(b,B(631)),h),B(193));$rt_globals.console.info($rt_ustr(N(b)));W8(d);HN(d);}}
function S_(){C.call(this);this.o0=null;}
function AK$(a,b){HM(a.o0,b);}
var Zs=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["cH",AU1(AL2),"cv",AU0(AGJ)],RR,0,C,[],0,3,0,0,0,Nb,0,C,[],3,3,0,0,0,MG,0,C,[],3,3,0,0,0,WO,0,C,[Nb,MG],0,3,0,0,0,ZU,0,C,[],4,0,0,0,0,ZD,0,C,[],4,3,0,0,0,Dh,0,C,[],3,3,0,0,0,CJ,0,C,[],3,3,0,0,0,I2,0,C,[],3,3,0,0,0,Bv,"String",1,C,[Dh,CJ,I2],0,3,0,EN,["cv",AU0(AGI),"cH",AU1(Bn),"jz",AU0(Lm),"jQ",AU1(AIW)],GA,0,C,[],0,3,0,0,0,EH,0,GA,[],0,3,0,0,0,Hk,0,EH,[],0,3,0,0,0,AA5,0,Hk,[],0,3,0,0,0,DV,0,C,[Dh],1,3,0,0,0,Fh,0,DV,[CJ],0,3,0,0,["jQ",AU1(ALb)],Gn,0,C,[Dh,I2],0,0,0,0,["hO",AU1(JH),
"cv",AU0(N)],H4,0,C,[],3,3,0,0,0,M,0,Gn,[H4],0,3,0,0,["lB",AU4(AK7),"kL",AU3(AH2),"cv",AU0(DT),"hO",AU1(ALe),"l$",AU2(ALJ)],Er,0,Hk,[],0,3,0,0,0,ACv,0,Er,[],0,3,0,0,0,AAT,0,Er,[],0,3,0,0,0,D3,0,GA,[],0,3,0,0,0,Bq,0,D3,[],0,3,0,0,0,T4,0,C,[],3,3,0,0,0,Dr,0,C,[],3,3,0,0,0,OX,0,C,[],3,0,0,0,0,IJ,0,C,[T4,Dr,OX],1,3,0,0,["d4",AU0(FT)],RE,0,IJ,[],0,3,0,0,0,Y7,0,C,[],0,3,0,0,0,ADN,0,C,[],4,3,0,0,0,Bc,0,C,[],3,3,0,0,0,Ub,0,C,[Bc],0,3,0,0,0,BF,0,C,[],3,3,0,0,0,ABF,0,C,[BF],1,3,0,0,0,Y$,0,C,[],3,3,0,0,0,ADo,0,C,[],3,
3,0,0,0,ADi,0,C,[],3,3,0,0,0,LQ,0,C,[],0,3,0,0,0,ZS,0,C,[BF],1,3,0,0,0,BQ,0,C,[BF],3,3,0,0,0,Uc,0,C,[BQ],0,3,0,0,["bb",AU1(AEV)],Ua,0,C,[BQ],0,3,0,0,["bb",AU1(AQN)],ADe,0,C,[],4,3,0,0,0,AAv,0,C,[],0,3,0,0,0,AEO,0,C,[],4,3,0,0,0,Nh,0,C,[BQ],0,3,0,0,["bb",AU1(AM_)],Wr,0,C,[BF],1,3,0,0,0,Zm,0,C,[],0,3,0,0,0]);
$rt_metadata([Lt,0,C,[],4,3,0,0,0,JV,0,C,[BF],3,3,0,0,0,AAK,0,C,[JV],1,3,0,0,["Ht",AU1(AR0),"GO",AU0(AG2)],ABg,0,C,[BF],1,3,0,0,0,FS,0,C,[],3,3,0,0,0,Th,0,C,[FS],0,3,0,0,0,C7,0,C,[CJ],0,3,0,0,0,MA,0,C,[BF],3,3,0,0,0,SU,0,C,[MA],3,3,0,0,0,Ei,0,C,[BF],3,3,0,0,0,ADM,0,C,[SU,Ei],3,3,0,0,0,GG,0,Bq,[],0,3,0,0,0,NR,0,C,[BQ],0,3,0,0,["bb",AU1(AOg)],ACb,0,C,[],4,3,0,0,0,ABd,0,C,[],4,3,0,0,0,Bz,0,Bq,[],0,3,0,0,0,IV,0,Bq,[],0,3,0,0,0,Pl,0,C,[Ei],3,3,0,0,0,Ru,0,C,[Ei],3,3,0,0,0,Rj,0,C,[Ei],3,3,0,0,0,TY,0,C,[Ei],3,3,0,0,
0,Xx,0,C,[Ei],3,3,0,0,0,U$,0,C,[Ei,Pl,Ru,Rj,TY,Xx],3,3,0,0,0,OG,0,C,[],3,3,0,0,0,Y9,0,C,[BF,U$,OG,JV],1,3,0,0,["Fk",AU2(ALE),"Hy",AU2(AL4),"y2",AU1(AF3),"DV",AU3(ANe),"BU",AU1(AQ7),"B4",AU0(AG5),"An",AU3(AFh)],BG,0,Bq,[],0,3,0,0,0,Yx,0,Bq,[],0,3,0,0,0,Hh,0,Bz,[],0,3,0,0,0,AAg,0,C,[],0,3,0,0,0,OF,0,C,[],3,3,0,0,0,S3,0,C,[OF],0,3,0,0,0,B6,0,C,[],3,3,0,0,0,R6,0,C,[B6],0,3,0,0,0,Bi,0,C,[],3,3,0,0,0,ABz,0,C,[Bi],0,3,0,0,0,ABa,0,C,[BF],1,3,0,0,0,Rn,0,C,[BF],3,3,0,0,0,V6,0,C,[Rn],0,3,0,0,["DX",AU1(AKd)],VZ,0,C,[Bi],
0,3,0,0,0,Qa,0,C,[BF],3,3,0,0,0,V0,0,C,[Qa],0,3,0,0,["uU",AU2(AIk)],ADV,0,C,[BF],1,3,0,0,0,Cl,0,C,[BF],3,3,0,0,0,VX,0,C,[Cl],0,3,0,0,["ce",AU1(AOo)],K6,0,C,[],3,3,0,0,0,EC,0,C,[K6],1,3,0,0,0,Em,0,C,[],3,3,0,0,0,XZ,0,C,[K6],3,3,0,0,0,Na,0,C,[XZ],3,3,0,0,0,O9,0,EC,[Em,Dh,Na],0,3,0,0,0]);
$rt_metadata([VY,0,C,[BQ],0,3,0,0,["bb",AU1(APE)],Pu,0,C,[],0,3,0,0,0,Lk,0,C,[],1,3,0,0,0,ADm,0,Lk,[],0,3,0,0,0,Cx,0,C,[Dr],1,3,0,0,["cN",AU1(ARH)],Jf,0,C,[FS],0,3,0,0,["mi",AU2(JD)],AAm,0,C,[],0,3,0,0,0,WT,0,C,[Cl],0,3,0,0,["ce",AU1(ANO)],WU,0,C,[Cl],0,3,0,0,["ce",AU1(AN5)],WV,0,C,[Cl],0,3,0,0,["ce",AU1(AMk)],WW,0,C,[Cl],0,3,0,0,["ce",AU1(ALF)],WX,0,C,[Cl],0,3,0,0,["ce",AU1(AL8)],WY,0,C,[Cl],0,3,0,0,["ce",AU1(AOD)],WZ,0,C,[Cl],0,3,0,0,["ce",AU1(AJS)],W0,0,C,[Cl],0,3,0,0,["ce",AU1(AR7)],W1,0,C,[Cl],0,3,0,0,
["ce",AU1(AI5)],W2,0,C,[Cl],0,3,0,0,["ce",AU1(APN)],Yg,0,C,[Cl],0,3,0,0,["ce",AU1(ARI)],Yh,0,C,[Cl],0,3,0,0,["ce",AU1(ALU)],Yi,0,C,[Cl],0,3,0,0,["ce",AU1(AMo)],Yj,0,C,[Cl],0,3,0,0,["ce",AU1(AOi)],Uz,0,C,[],3,3,0,0,0,UM,0,C,[Uz],0,3,0,0,0,UK,0,C,[Cl],0,3,0,0,["ce",AU1(AKX)],MB,0,C,[],0,3,0,0,0,AD8,0,C,[],0,3,0,0,0,IZ,0,C,[],3,3,0,0,0,Cm,0,C,[IZ],3,3,0,0,0,Cr,0,C,[],3,3,0,0,["bL",AU1(AK2),"b_",AU2(AQO),"cO",AU2(AFL),"cs",AU3(AOB)],DF,0,C,[],3,3,0,0,0,Ex,0,C,[IZ],3,3,0,0,0,EJ,0,C,[],3,3,0,0,0,EO,0,C,[],3,3,0,0,
0,E_,0,C,[EO],3,3,0,0,0,Qj,0,C,[Dr],0,3,0,0,0,Bf,0,C,[],0,3,0,0,["cv",AU0(YD)],LZ,0,C,[],0,3,0,0,0,ADl,0,C,[],0,3,0,0,0,ZA,0,C,[],3,3,0,0,0,P_,0,C,[],0,3,0,0,0,LH,0,C,[],0,3,0,0,0,Dw,0,LH,[],0,3,0,0,0,WD,0,Dw,[],0,3,0,0,0,EB,0,Dw,[],0,3,0,0,0,AA3,0,Dw,[],0,3,0,0,0,AC1,0,EB,[],0,3,0,0,0,ACA,0,EB,[],0,3,0,0,0,ZT,0,EB,[],0,3,0,0,0,ACy,0,Dw,[],0,3,0,0,0,Sd,0,C,[BF],3,3,0,0,0]);
$rt_metadata([AEM,0,C,[Sd],3,3,0,0,0,P8,0,C,[Dr],0,3,0,0,0,P$,0,C,[],0,3,0,0,0,Cj,0,C,[CJ,Dh],1,3,0,0,0,GS,0,Cj,[],12,3,0,JO,0,Mk,0,C,[],3,3,0,0,0,TG,0,C,[Mk],3,3,0,0,0,U0,0,C,[],3,3,0,0,0,Gs,0,C,[TG,U0],1,3,0,0,0,Jw,0,Gs,[],0,3,0,0,0,AAP,0,Jw,[],0,3,0,0,0,Gf,0,Gs,[],1,3,0,0,0,Ls,0,Gf,[],0,3,0,0,["kg",AU3(AKP)],DX,0,Cj,[],12,3,0,AQ0,0,Jn,0,C,[CJ],1,3,0,0,0,Mn,0,Jn,[],0,3,0,AAE,0,Pc,0,C,[],0,3,0,0,0,GW,0,Cj,[],12,0,0,AMe,0,KP,0,Gf,[],0,3,0,0,["kg",AU3(AIJ)],ADd,0,BG,[],0,3,0,0,0,V7,0,D3,[],0,3,0,0,0,Mm,0,C,[BF],
3,3,0,0,0,XW,0,C,[Mm],0,3,0,0,["bb",AU1(APg)],XX,0,C,[Mm],0,3,0,0,["bb",AU1(AGA)],G8,0,C,[],1,3,0,0,0,Sx,0,C,[],3,3,0,0,0,La,0,G8,[CJ,H4,I2,Sx],1,3,0,0,0,JX,0,G8,[CJ],1,3,0,0,0,HL,0,C,[],0,3,0,Hf,0,Ng,0,Cx,[],0,3,0,0,["bB",AU0(ALP),"b6",AU2(AKg)],CR,0,Cx,[],1,3,0,0,["b6",AU2(G2)],Qw,0,C,[],3,3,0,0,0,LI,0,C,[Qw],3,3,0,0,0,Lf,0,C,[],3,3,0,0,0,Mh,0,CR,[Cr,LI,Lf,DF,EJ,E_],0,3,0,0,["gB",AU2(AJ2),"cN",AU1(AIF),"bB",AU0(AQT),"f6",AU0(APD),"uN",AU0(AJG),"vb",AU0(AO3),"sW",AU1(APL),"b6",AU2(AOE),"ii",AU1(AGy),"bL",AU1(ALY),
"cs",AU3(ALT),"b_",AU2(AF7),"cO",AU2(AI6),"c1",AU3(AN2),"dt",AU0(ALA)],Wg,0,Mh,[],0,3,0,0,["f6",AU0(AHV)],AEu,0,C,[],0,3,0,0,0,ABw,0,C,[BF],1,3,0,0,0,J$,0,La,[],1,0,0,0,0,ABf,0,J$,[],0,0,0,0,0,KZ,0,C,[],1,3,0,0,0,LO,0,C,[],0,3,0,0,0,Zj,0,C,[],0,3,0,0,0,Iv,0,C,[BF],3,3,0,0,0,Np,0,C,[Iv],0,3,0,0,["bb",AU1(AIO)],No,0,C,[Iv],0,3,0,0,["bb",AU1(ANd)],Nn,0,C,[BQ],0,3,0,0,["bb",AU1(ANZ)],Nm,0,C,[BQ],0,3,0,0,["bb",AU1(AHb)],Yc,0,C,[Bc],0,3,0,0,["l",AU1(AMX)],Ye,0,C,[Bc],0,3,0,0,["l",AU1(ANA)]]);
$rt_metadata([Ty,0,C,[B6],0,3,0,0,["bY",AU1(ANv)],Tx,0,C,[B6],0,3,0,0,["bY",AU1(AGc)],Tw,0,C,[B6],0,3,0,0,["bY",AU1(AJX)],Tv,0,C,[B6],0,3,0,0,["bY",AU1(AJU)],Tu,0,C,[B6],0,3,0,0,["bY",AU1(AKz)],Tt,0,C,[B6],0,3,0,0,["bY",AU1(AGj)],Ts,0,C,[B6],0,3,0,0,["bY",AU1(AHX)],Tr,0,C,[B6],0,3,0,0,["bY",AU1(ANN)],Tq,0,C,[B6],0,3,0,0,["bY",AU1(ARr)],Tp,0,C,[B6],0,3,0,0,["bY",AU1(ASh)],Q0,0,C,[B6],0,3,0,0,["bY",AU1(ALs)],QW,0,C,[B6],0,3,0,0,["bY",AU1(AE7)],QY,0,C,[B6],0,3,0,0,["bY",AU1(AIK)],QU,0,C,[B6],0,3,0,0,["bY",AU1(ALK)],QV,
0,C,[B6],0,3,0,0,["bY",AU1(APA)],QS,0,C,[B6],0,3,0,0,["bY",AU1(AEX)],QT,0,C,[B6],0,3,0,0,["bY",AU1(APm)],QQ,0,C,[B6],0,3,0,0,["bY",AU1(ALw)],He,0,C,[],0,3,0,0,0,O0,0,He,[],0,3,0,0,0,ADw,0,C,[],0,3,0,0,0,Mx,0,He,[],0,3,0,0,0,UB,0,C,[BF],3,3,0,0,0,NK,0,C,[UB],0,3,0,0,["H4",AU1(ALl)],Vk,0,C,[Bc],0,3,0,0,["l",AU1(WF)],Xl,0,JX,[],0,0,0,0,0,IK,0,C,[],0,3,0,0,0,ACR,0,C,[Cr,DF],0,0,0,0,["bL",AU1(AOL),"cs",AU3(ASn),"b_",AU2(AGB),"cO",AU2(ANb),"c1",AU3(ALC)],HW,0,C,[],3,3,0,0,["vq",AU0(AHA),"sM",AU0(ASu)],AAV,0,C,[HW,
Cr,Lf],0,3,0,0,["sM",AU0(AIs),"vq",AU0(AG$),"uN",AU0(Yr),"vb",AU0(W7),"sW",AU1(Ys),"cO",AU2(Vf),"b_",AU2(Vm),"cs",AU3(QZ),"bL",AU1(Px),"g6",AU1(ANq)],HT,0,C,[],3,3,0,0,0,Ra,0,C,[HT],0,3,0,0,["h8",AU1(AKb)],Q$,0,C,[HT],0,3,0,0,["h8",AU1(AMl)],Q_,0,C,[Bc],0,3,0,0,["l",AU1(AF1)],Q8,0,C,[Bc],0,3,0,0,["l",AU1(AFB)],Q9,0,C,[Cm],0,3,0,0,["bz",AU1(ALZ)],HO,0,C,[Cm],0,3,0,0,["bz",AU1(APo)],Q6,0,C,[Bc],0,3,0,0,["l",AU1(ANW)],Q7,0,C,[Ex],0,3,0,0,["bz",AU1(AKN)],ACl,0,C,[BF],1,3,0,0,0,Zw,0,C,[],3,3,0,0,0,Yo,0,C,[],0,3,
0,0,0,SC,0,C,[Cm],0,3,0,0,["bz",AU1(ASq)],SD,0,C,[Cm],0,3,0,0,["bz",AU1(AFn)],B5,0,C,[],0,3,0,0,["cH",AU1(AR2)],Ep,0,C,[],3,3,0,0,0,ABv,0,C,[Cr,Ep],0,3,0,0,["bL",AU1(ZG),"cs",AU3(ABu),"b_",AU2(YE),"cO",AU2(AEw),"gC",AU2(ARf)],Y8,0,C,[Ep,HW],0,3,0,0,["vq",AU0(AHA),"sM",AU0(ASu),"gC",AU2(AG8),"g6",AU1(AFC)],ABh,0,C,[],0,3,0,0,0,K_,0,C,[],0,3,0,0,0]);
$rt_metadata([II,0,C,[],0,3,0,0,0,Wi,0,C,[],0,3,0,0,0,YJ,0,C,[],0,3,0,0,0,Nt,0,C,[],0,3,0,0,0,EV,0,C,[Dr],0,0,0,0,0,ABH,0,C,[],0,3,0,0,0,ABI,0,C,[Dr],0,3,0,0,0,WB,0,C,[],3,3,0,0,0,Hx,0,C,[WB],3,3,0,0,0,EP,0,C,[Hx],1,3,0,0,0,Jj,0,C,[Hx],3,3,0,0,0,F$,0,EP,[Jj],1,3,0,0,["cH",AU1(AMC)],Iw,0,C,[],3,3,0,0,0,NY,0,F$,[Em,Dh,Iw],0,3,0,0,["rQ",AU1(Br),"nI",AU0(ANx),"uH",AU1(En)],U8,0,C,[Bc],0,3,0,0,0,U7,0,C,[Bc],0,3,0,0,["l",AU1(APn)],U3,0,C,[Bc],0,3,0,0,["l",AU1(ANf)],U2,0,C,[Bi],0,3,0,0,["q",AU0(APj)],U5,0,C,[Bi],0,
3,0,0,["q",AU0(AJ_)],U4,0,C,[Bi],0,3,0,0,["q",AU0(AMw)],Vv,0,C,[Bi],0,3,0,0,["q",AU0(AOK)],Vu,0,C,[Bi],0,3,0,0,["q",AU0(AJN)],Vw,0,C,[Bi],0,3,0,0,["q",AU0(AFi)],Ft,0,Cj,[],12,3,0,AFs,0,Ks,0,C,[],4,3,0,AKx,0,US,0,C,[],3,3,0,0,0,MH,0,C,[Bi],0,3,0,0,["q",AU0(ALD)],MI,0,C,[Bi],0,3,0,0,["q",AU0(AJ4)],Yf,0,C,[],3,3,0,0,0,HU,0,C,[],0,3,0,0,0,EY,0,C,[],0,3,0,0,0,Mp,0,EY,[],0,3,0,0,0,ML,0,EY,[],0,3,0,0,0,Qg,0,EY,[],0,3,0,0,0,G3,0,C,[],3,3,0,0,0,RF,0,C,[],3,3,0,0,0,Gp,0,C,[CJ],0,3,0,0,0,Js,0,C,[],0,3,0,0,0,Ww,0,C,[],
3,3,0,0,0,Tc,0,C,[Ww],0,3,0,0,["cv",AU0(AHG)],UU,0,C,[],3,3,0,0,0,K$,"JsFileHandle",5,C,[UU],0,3,0,0,["cv",AU0(AKV)],NV,0,C,[US],0,3,0,0,0,ABs,0,EC,[Em,Dh],0,3,0,0,0,CD,0,C,[],0,3,0,0,0,NL,0,C,[Bi],0,3,0,0,["q",AU0(ARO)],B9,0,C,[],0,3,0,0,0,I1,0,C,[],0,3,0,0,0,AEf,0,C,[CJ],0,3,0,0,["cH",AU1(APW),"jQ",AU1(AGR)],XN,0,C,[FS],0,3,0,0,["mi",AU2(AJA)]]);
$rt_metadata([XP,0,C,[FS],0,3,0,0,["mi",AU2(ALh)],EZ,0,C,[],0,3,0,0,0,Hb,0,F$,[Iw],1,0,0,0,["uH",AU1(AMf)],X4,0,Hb,[Iw],0,0,0,0,["nI",AU0(AIH),"rQ",AU1(ARB)],YV,0,C,[],0,3,0,0,["cv",AU0(AJI)],OZ,0,C,[Hx],3,3,0,0,0,Gi,0,EP,[OZ],1,3,0,0,0,Kk,0,Gi,[],1,0,0,0,0,VW,0,Kk,[],0,0,0,0,0,Lx,0,EC,[],1,0,0,0,0,VU,0,Lx,[],0,0,0,0,0,VV,0,Hb,[],0,0,0,0,0,FG,0,C,[],3,3,0,0,0,VS,0,C,[FG],0,0,0,0,0,Pp,0,C,[FG],3,3,0,0,0,VT,0,C,[Pp],0,0,0,0,0,Yt,0,C,[FS],0,3,0,0,0,H0,0,C,[],0,3,0,0,0,I5,0,C,[],0,3,0,0,0,NC,0,C,[FG],0,0,0,0,0,KV,
0,KZ,[],1,3,0,0,0,Pr,0,KV,[],0,3,0,0,0,IA,0,D3,[],0,3,0,0,0,XT,0,C,[Iv],0,3,0,0,["bb",AU1(AHu)],XR,0,C,[BQ],0,3,0,0,["bb",AU1(AFl)],XS,0,C,[BQ],0,3,0,0,["bb",AU1(AJr)],Hn,0,C,[],3,3,0,0,0,KI,0,C,[Hn,Em],0,0,0,0,["cH",AU1(AHL)],Ik,0,KI,[],0,0,0,0,0,QX,0,C,[],0,3,0,0,0,L2,0,C,[],0,3,0,0,0,ZH,0,C,[],0,3,0,0,0,KC,0,CR,[LI],0,3,0,0,["cN",AU1(AHk),"bB",AU0(AKc),"f6",AU0(AOc),"b6",AU2(AMJ),"k9",AU2(AAs),"ii",AU1(AGd)],Zb,0,Cx,[],0,3,0,0,["cN",AU1(AFw),"bB",AU0(AIz),"b6",AU2(APe)],Wz,0,CR,[Cr,Ep],0,3,0,0,["gC",AU2(AQJ),
"b6",AU2(AH3),"bB",AU0(AIP),"bL",AU1(AOy),"b_",AU2(AIX),"cO",AU2(AGF),"cs",AU3(ANQ)],XM,0,CR,[Ep],0,3,0,0,["gC",AU2(AI0),"bB",AU0(AN_),"b6",AU2(AHf),"cN",AU1(APl)],Yw,0,CR,[Cr],0,3,0,0,["bL",AU1(AK2),"b_",AU2(AQO),"cO",AU2(AFL),"cs",AU3(AOB),"bB",AU0(AOJ),"cN",AU1(AHE)],Ph,0,Cx,[],0,3,0,0,["bB",AU0(AFO),"b6",AU2(AQr)],Db,0,Cx,[],0,3,0,0,["bB",AU0(Sw),"b6",AU2(S4)],Rc,"SelectFileTest",6,Db,[],0,3,0,0,0,AEm,"WorkerTest",7,Db,[],0,3,0,0,0,Xe,"RenderTexture",6,Db,[],0,3,0,0,["cN",AU1(ALc),"bB",AU0(AFp),"b6",AU2(AN9)],Sz,
"ScissorDemo",6,Db,[],0,3,0,0,["bB",AU0(ARV),"b6",AU2(AG9)],OT,0,Cx,[],0,3,0,0,["bB",AU0(ARY),"b6",AU2(AJj),"cN",AU1(AHK)],IF,"ClipboardTest",6,Db,[Cr],0,3,0,0,["bL",AU1(AK2),"b_",AU2(AQO),"cO",AU2(AFL),"cs",AU3(AO$)],Qf,0,Cx,[],0,3,0,0,["bB",AU0(ARP),"b6",AU2(AMd)],Ga,0,Cx,[Cr],1,3,0,0,["bL",AU1(AK2),"b_",AU2(AQO),"cO",AU2(AFL),"cs",AU3(AOB),"bB",AU0(AAR)],O1,0,Ga,[],0,3,0,0,["b_",AU2(AQO),"cO",AU2(AFL),"cs",AU3(AOB),"b6",AU2(AMR),"bL",AU1(AIa)],O2,0,Ga,[],0,3,0,0,["b_",AU2(AQO),"cO",AU2(AFL),"cs",AU3(AOB),
"bL",AU1(AJ$),"bB",AU0(AGG),"b6",AU2(ALj)],WQ,0,CR,[Ep],0,3,0,0,["gC",AU2(AKk),"bB",AU0(ASc),"b6",AU2(AOq),"cN",AU1(AK9)]]);
$rt_metadata([Rx,0,KC,[],0,3,0,0,["f6",AU0(AKq),"k9",AU2(AMi)],ACt,0,C,[],3,3,0,0,0,H_,0,C,[],0,3,0,0,0,ADn,0,C,[],0,3,0,0,0,Ms,0,C,[Hn,Dh],0,3,0,0,0,Jz,0,Ms,[],0,0,0,0,0,AD5,0,C,[],0,3,0,0,0,Sk,0,C,[Cm],0,3,0,0,["bz",AU1(AMs)],So,0,C,[Bc],0,3,0,0,["l",AU1(ARu)],Sn,0,C,[EJ],0,3,0,0,["gB",AU2(AMt)],Sm,0,C,[E_],0,3,0,0,["dt",AU0(ARe)],Sl,0,C,[DF],0,3,0,0,["c1",AU3(AQD)],Sp,0,C,[Ex],0,3,0,0,["bz",AU1(AJv)],ADx,0,IK,[],0,3,0,0,0,T9,0,C,[Cr],0,0,0,0,["bL",AU1(AOj),"cs",AU3(APU),"b_",AU2(AIw),"cO",AU2(AH8)],RX,0,
C,[Cm],0,3,0,0,["bz",AU1(AOd)],RW,0,C,[Cm],0,3,0,0,["bz",AU1(AQQ)],RZ,0,C,[EJ],0,3,0,0,["gB",AU2(ARm)],RY,0,C,[Bi],0,3,0,0,["q",AU0(ARk)],RV,0,C,[Ex],0,3,0,0,["bz",AU1(AMz)],RU,0,C,[DF],0,3,0,0,["c1",AU3(AJ9)],Hg,0,B5,[],0,3,0,0,0,Vj,0,C,[],0,3,0,0,0,Z3,0,C,[],0,3,0,0,0,TA,0,C,[Cm],0,3,0,0,["bz",AU1(AOI)],TD,0,C,[Ex],0,3,0,0,["bz",AU1(AFa)],AEj,0,C,[],0,3,0,0,["cH",AU1(ASm)],TC,0,C,[Bi],0,3,0,0,["q",AU0(AJR)],Tz,0,C,[Bi],0,3,0,0,["q",AU0(AP7)],C$,0,C,[],0,3,0,0,0,OJ,0,C,[Cm],0,3,0,0,["bz",AU1(AG7)],OK,0,C,[Ex],
0,3,0,0,["bz",AU1(AQn)],ACn,0,C,[],0,3,0,0,0,OL,0,C,[DF],0,3,0,0,["c1",AU3(ANn)],AD7,0,C,[],0,3,0,0,0,Um,0,C,[Ep],0,3,0,0,["gC",AU2(AM3)],Un,0,C,[Cm],0,3,0,0,["bz",AU1(AFf)],Ns,0,C,[],3,3,0,0,0,ADu,0,C,[Ns],0,3,0,0,0,WP,0,C,[Cr],0,0,0,0,["cs",AU3(AOB),"b_",AU2(AG1),"cO",AU2(AOt),"bL",AU1(AIq)],S9,0,C,[DF],0,3,0,0,["c1",AU3(AHJ)],Qc,0,C,[Cm],0,3,0,0,["bz",AU1(APb)],RB,0,C,[Bc],0,3,0,0,["l",AU1(AFJ)],RA,0,C,[Bc],0,3,0,0,["l",AU1(AR3)],Rz,0,C,[Bc],0,3,0,0,["l",AU1(AH5)],Ry,0,C,[Bc],0,3,0,0,["l",AU1(ANh)],Rw,0,
C,[Bc],0,3,0,0,["l",AU1(AMm)],Rv,0,C,[Bc],0,3,0,0,["l",AU1(AOr)],T8,0,C,[Cr],0,0,0,0,["cO",AU2(AFL),"cs",AU3(AOB),"bL",AU1(AQp),"b_",AU2(AMr)],C0,0,C,[],3,3,0,FP,0]);
$rt_metadata([Ux,0,C,[Cr],0,0,0,0,["cs",AU3(AOB),"b_",AU2(ANw),"cO",AU2(AG3),"bL",AU1(AFV)],N1,0,C,[DF],0,3,0,0,["c1",AU3(AFN)],SM,0,C,[Cm],0,3,0,0,["bz",AU1(AQu)],SL,0,C,[EJ],0,3,0,0,["gB",AU2(AIr)],SJ,0,C,[EJ],0,3,0,0,["gB",AU2(APV)],SI,0,C,[E_],0,3,0,0,["dt",AU0(ANP)],SK,0,C,[E_],0,3,0,0,["dt",AU0(AGT)],Se,0,C,[Cm],0,3,0,0,["bz",AU1(AIy)],QD,0,C,[Cm],0,3,0,0,["bz",AU1(AI8)],QE,0,C,[Ex],0,3,0,0,["bz",AU1(AFg)],QF,0,C,[DF],0,3,0,0,["c1",AU3(AOQ)],ABj,0,C,[],0,3,0,0,["cH",AU1(AQ2)],CX,0,C,[],3,3,0,AM9,0,Cc,
0,Cj,[],12,3,0,ABD,0,IP,0,C,[],0,3,0,0,0,HH,0,C,[],0,3,0,0,0,AC5,0,C,[],0,3,0,0,0,GC,0,C,[],4,3,0,0,0,AEQ,0,C,[],0,3,0,0,0,DS,0,C,[],3,3,0,AJY,0,OR,0,C,[BF],3,3,0,0,0,Pa,0,C,[OR],0,3,0,0,["uU",AU2(AJc)],OS,0,C,[BF],3,3,0,0,0,O$,0,C,[OS],0,3,0,0,["uU",AU2(AKp)],ZV,0,C,[],0,3,0,0,0,Y3,0,C,[BF],3,3,0,0,0,Jy,0,C,[Dr],0,3,0,0,["d4",AU0(ACF)],T3,0,C,[],0,3,0,0,0,DR,0,C,[],3,3,0,Yd,0,Gt,0,C,[],3,3,0,0,0,Xu,0,C,[Gt],0,3,0,0,["nW",AU3(AO6)],Xv,0,C,[Gt],0,3,0,0,0,Wk,0,C,[Cr],0,0,0,0,["bL",AU1(AFm),"cs",AU3(AO8),"b_",
AU2(AM7),"cO",AU2(AKy)],Yu,0,C,[Bc],0,3,0,0,["l",AU1(AOu)],ABT,0,C,[],0,3,0,0,0,PJ,0,C,[Bc],0,3,0,0,["l",AU1(AKG)],Qp,0,C,[Cm],0,3,0,0,["bz",AU1(AKL)],RK,0,C,[Cr],0,0,0,0,["b_",AU2(AQO),"cO",AU2(AFL),"cs",AU3(AOB),"bL",AU1(AFq)],Z$,0,C,[],0,3,0,0,0,Ci,0,Cj,[],12,3,0,AB5,0,AEa,0,C,[],0,3,0,0,0,AAS,0,C,[BF],4,3,0,0,0,AEC,0,C,[],0,3,0,0,0,ADY,0,C,[],3,3,0,0,0,CS,0,C,[BF],1,3,0,0,0,ACf,0,CS,[],1,3,0,0,0,ACY,0,CS,[],1,3,0,0,0,Z0,0,CS,[],1,3,0,0,0,AAi,0,CS,[],1,3,0,0,0,ADv,0,CS,[],1,3,0,0,0]);
$rt_metadata([UC,0,C,[Bi],0,3,0,0,["q",AU0(AL3)],Gm,0,Cj,[],12,0,0,AMn,0,Zv,0,C,[],0,3,0,0,0,H$,0,C,[],0,3,0,0,0,AAC,0,C,[],4,3,0,0,0,Wf,0,C,[Cr],0,0,0,0,["b_",AU2(AQO),"cO",AU2(AFL),"cs",AU3(AOB),"bL",AU1(APw)],AAN,0,C,[BF],1,3,0,0,0,IS,0,Bq,[],0,3,0,0,0,MV,0,C,[Bc],0,3,0,0,["l",AU1(API)],Wp,0,C,[EO],0,3,0,0,["dt",AU0(ARS)],AEJ,0,C,[],0,3,0,0,0,ACc,0,C,[],3,3,0,0,0,LE,0,C,[],3,3,0,0,0,RC,0,C,[LE],0,3,0,0,["q8",AU1(AMK)],QA,0,C,[Bc],0,3,0,0,["l",AU1(AQ5)],YI,0,C,[],0,3,0,0,0,Nl,0,C,[Dr],0,3,0,0,0,Yb,0,C,[Bc],
0,3,0,0,["l",AU1(ANK)],Y0,0,C,[],0,3,0,0,0,ADI,0,C,[CJ],0,3,0,0,["cH",AU1(AFx),"jz",AU0(AOP),"jQ",AU1(AOm)],RT,0,C,[Bc],0,3,0,0,["l",AU1(AMG)],SG,0,C,[],3,3,0,0,0,FR,0,IA,[],0,3,0,0,0,Xs,0,EH,[],0,3,0,0,0,Qo,0,C,[Bc],0,3,0,0,["l",AU1(ANL)],Uv,0,C,[Bi],0,3,0,0,["q",AU0(AQk)],Mc,0,DV,[CJ],0,3,0,0,0,FD,0,C,[],0,0,0,0,0,Kb,0,C,[],4,3,0,0,0,VP,0,C,[],0,3,0,0,0,L7,0,C,[],1,3,0,0,0,AA8,0,CS,[],1,3,0,0,0,QN,0,C,[Bc],0,3,0,0,["l",AU1(AJF)],V8,0,C,[Bc],0,3,0,0,["l",AU1(AR5)],Qs,0,C,[Bc],0,3,0,0,["l",AU1(AMS)],EK,0,C,
[Dr],0,3,0,0,["d4",AU0(ANl),"jd",AU0(AQ8),"jg",AU3(P2),"e9",AU1(ZL),"ko",AU1(AIv),"ke",AU1(AP0),"pP",AU2(AR_),"cs",AU3(AQx),"b_",AU2(APO),"cO",AU2(AQV),"bL",AU1(AME),"c1",AU3(AIn)],GH,0,EK,[],0,3,0,0,0,Rb,0,GH,[HW],0,3,0,0,["vq",AU0(AHA),"sM",AU0(ASu),"d4",AU0(ASo),"pP",AU2(AHx),"e9",AU1(AKh),"ke",AU1(ALu),"ko",AU1(AH6),"uW",AU0(Z2),"bL",AU1(ARi),"b_",AU2(AFD),"cs",AU3(AFS),"g6",AU1(AK1)],We,0,C,[Bi],0,3,0,0,["q",AU0(ASa)],AAL,0,EK,[],0,3,0,0,["d4",AU0(AFW),"jg",AU3(AHC),"e9",AU1(APt),"cs",AU3(AJO),"b_",AU2(AQA),
"cO",AU2(AJm),"bL",AU1(AKI),"c1",AU3(APG),"jd",AU0(AM2)],Wm,0,GH,[],0,3,0,0,["uW",AU0(ANM),"jd",AU0(ALy),"ke",AU1(AKj),"e9",AU1(AHZ),"ko",AU1(AKZ)],PB,0,C,[Bc],0,3,0,0,0,VI,0,C,[Bi],0,3,0,0,["q",AU0(AN8)],RI,0,C,[Bi],0,3,0,0,["q",AU0(AJ3)],X1,0,C,[],0,3,0,0,0,H7,0,C,[],0,3,0,0,0,TQ,0,EK,[],0,3,0,0,0,Ut,0,C,[],0,3,0,0,0,YA,0,C,[Bi],0,3,0,0,["q",AU0(AIb)],VQ,0,C,[Bc],0,3,0,0,["l",AU1(AQ6)]]);
$rt_metadata([VR,0,C,[Bc],0,3,0,0,["l",AU1(AF5)],JB,0,C,[],0,3,0,0,0,D0,0,Bq,[],0,3,0,0,0,ACx,0,EH,[],0,3,0,0,0,T_,0,C,[Bc],0,3,0,0,0,NU,0,C,[Bc],0,3,0,0,["l",AU1(AFM)],NS,0,C,[Bc],0,3,0,0,["l",AU1(AHN)],Kw,0,L7,[],1,3,0,0,0,TU,0,Kw,[],0,3,0,0,0,P4,0,C,[Bc],0,3,0,0,["l",AU1(AGU)],Vc,0,C,[EO],0,3,0,0,["dt",AU0(APS)],Vd,0,C,[EO],0,3,0,0,["dt",AU0(APf)],Te,0,C,[EO],0,3,0,0,["dt",AU0(APT)],VH,0,C,[Bi],0,3,0,0,["q",AU0(AM5)],QP,0,C,[BQ],0,3,0,0,["bb",AU1(AE5)],UZ,0,C,[BQ],0,3,0,0,["bb",AU1(ARE)],Ok,0,C,[Bc],0,3,
0,0,0,ABN,0,C,[B6],0,3,0,0,0,ZW,0,C,[B6],0,3,0,0,0,SB,0,C,[Bc],0,3,0,0,["l",AU1(AF4)],SA,0,C,[Bc],0,3,0,0,["l",AU1(AGL)],Ql,0,C,[Bc],0,3,0,0,["l",AU1(AOC)],Tn,0,C,[Bi],0,3,0,0,["q",AU0(AJ5)],N2,0,C,[Bc],0,3,0,0,["l",AU1(ANJ)],J7,0,DV,[CJ],0,3,0,0,0,LA,0,C,[],4,3,0,0,0,MU,0,C,[BQ],0,3,0,0,["bb",AU1(ASt)],Uf,0,C,[],0,3,0,0,0,Nw,0,C,[Gt],0,3,0,0,["nW",AU3(ARl)],Sj,0,DV,[CJ],0,3,0,0,0,Fj,0,Bq,[],0,3,0,0,0,NJ,0,C,[],0,3,0,0,0,ADK,0,C,[],0,3,0,0,0,Tf,0,C,[],0,0,0,0,0,Zz,0,C,[],3,3,0,0,0,XJ,0,C,[BQ],0,3,0,0,["bb",
AU1(APz)],XI,0,C,[BQ],0,3,0,0,["bb",AU1(AHT)],Xa,0,C,[BQ],0,3,0,0,["bb",AU1(AJq)],W_,0,C,[BQ],0,3,0,0,["bb",AU1(AKn)],Y2,0,C,[],1,3,0,0,0,Xi,0,C,[],3,3,0,0,0,XD,0,C,[Cl],0,3,0,0,["ce",AU1(AJh)],AAw,0,C,[],0,3,0,0,0,AD6,0,C,[],0,3,0,0,0,UL,0,C,[Bi],0,3,0,0,["q",AU0(AJZ)],UN,0,C,[Bi],0,3,0,0,["q",AU0(AO2)],ACI,0,C,[],0,3,0,0,0,Ja,0,Fj,[],0,3,0,0,0,H3,0,Bq,[],0,3,0,0,0,LV,0,Bq,[],0,3,0,0,0]);
$rt_metadata([AAW,0,C,[Bc],0,3,0,0,0,SE,0,C,[Bi],0,3,0,0,["q",AU0(ARJ)],PK,0,C,[Bc],0,3,0,0,["l",AU1(ALX)],SO,0,C,[Bi],0,3,0,0,["q",AU0(AGa)],YK,0,C,[],0,3,0,0,0,G9,0,C,[],0,3,0,0,0,ACS,0,Gi,[],0,0,0,0,0,Pe,0,EP,[],0,0,0,0,0,W3,0,Bz,[],0,3,0,0,0,Qy,0,C,[Mk],3,3,0,0,0,ND,0,C,[Qy],3,3,0,0,0,LY,0,C,[ND],1,3,0,0,0,AAB,0,LY,[],0,3,0,0,0,RO,0,C,[Bi],0,3,0,0,["q",AU0(AGN)],RN,0,C,[Bi],0,3,0,0,["q",AU0(AFb)],RM,0,C,[Bi],0,3,0,0,["q",AU0(ALq)],RL,0,C,[Bi],0,3,0,0,["q",AU0(AQi)],PD,0,C,[Bi],0,3,0,0,["q",AU0(APC)],PF,
0,C,[Bi],0,3,0,0,["q",AU0(AKt)],PG,0,C,[Bi],0,3,0,0,["q",AU0(AHe)],XK,0,C,[],3,3,0,0,0,Wx,0,C,[Bi],0,3,0,0,["q",AU0(AF9)],S$,0,C,[G3],0,3,0,0,["mm",AU2(AF2)],QH,0,C,[Bc],0,3,0,0,["l",AU1(AJV)],XV,0,C,[Bc],0,3,0,0,["l",AU1(ALp)],VF,0,C,[LE],0,3,0,0,["q8",AU1(JY)],S7,0,C,[Bi],0,3,0,0,["q",AU0(AK0)],S8,0,C,[Bi],0,3,0,0,["q",AU0(AMj)],S6,0,C,[Bi],0,3,0,0,["q",AU0(ANH)],Ol,0,C,[Bi],0,3,0,0,["q",AU0(AJT)],Oj,0,C,[Bi],0,3,0,0,["q",AU0(AQs)],Vz,0,C,[EO],0,3,0,0,["dt",AU0(AHI)],V$,0,C,[Bi],0,3,0,0,["q",AU0(AOh)],Wc,
0,C,[Bi],0,3,0,0,["q",AU0(AK8)],Wb,0,C,[Bi],0,3,0,0,["q",AU0(AF0)],V_,0,C,[Bi],0,3,0,0,["q",AU0(AHQ)],Wh,0,C,[G3],0,3,0,0,["mm",AU2(AQ$)],P3,0,C,[BQ],0,3,0,0,["bb",AU1(AH7)],I3,0,C,[BF],3,3,0,0,0,MQ,0,C,[I3],0,3,0,0,["q7",AU0(AKu)],Mz,0,C,[I3],0,3,0,0,["q7",AU0(AEY)],Pz,0,C,[Gt],0,3,0,0,0,XH,0,C,[BQ],0,3,0,0,["bb",AU1(AJK)],G1,0,C,[],0,0,0,0,0,UW,0,G1,[FG],0,0,0,0,0,Rg,0,G1,[FG],0,0,0,0,0,Re,0,C,[Dh],4,3,0,0,0,N8,0,C,[Bc],0,3,0,0,["l",AU1(ASl)],Gw,0,Cj,[],12,0,0,Vb,0,Ti,0,C,[Bc],0,3,0,0,["l",AU1(ALa)]]);
$rt_metadata([BC,0,C,[],1,0,0,0,["cm",AU3(HJ),"cq",AU4(HY),"hI",AU0(AGC),"P",AU1(AQF),"bV",AU1(AQC),"fs",AU0(ARx),"ej",AU0(Jd)],UP,0,C,[],32,0,0,AS0,0,Pf,0,C,[Bc],0,3,0,0,["l",AU1(AHz)],Wl,0,C,[Bc],0,3,0,0,["l",AU1(AJe)],YB,0,C,[Bi],0,3,0,0,["q",AU0(AHl)],CO,0,BC,[],0,0,0,Ml,["c",AU3(AF8),"I",AU1(AGq)],GO,0,C,[],0,0,0,0,0,IX,0,BG,[],0,3,0,0,0,Xr,0,C,[BQ],0,3,0,0,["bb",AU1(ANY)],AB6,0,C,[BF],3,3,0,0,0,UA,0,C,[BQ],0,3,0,0,["bb",AU1(ANz)],R3,0,CO,[],0,0,0,0,["c",AU3(AFF),"I",AU1(APa)],X5,0,CO,[],0,0,0,0,["c",AU3(AHo)],PL,
0,CO,[],0,0,0,0,["c",AU3(AGz)],Td,0,CO,[],0,0,0,0,["c",AU3(AFK),"I",AU1(ANI)],FA,0,CO,[],0,0,0,0,["c",AU3(AQW)],BW,0,BC,[],1,0,0,0,["c",AU3(ARZ),"b1",AU0(AP9),"I",AU1(AKC)],ADF,0,BW,[],0,0,0,0,["bw",AU2(APB),"cm",AU3(AIL),"cq",AU4(AHd),"I",AU1(AFI)],BS,0,BC,[],0,0,0,0,["c",AU3(AJn),"P",AU1(ANC),"bV",AU1(ALr),"I",AU1(AOl),"ej",AU0(AHa)],I9,0,BS,[],0,0,0,0,["c",AU3(ANk),"I",AU1(AOM)],DQ,0,I9,[],0,0,0,0,["c",AU3(AHR),"P",AU1(AOs)],MO,0,DQ,[],0,0,0,0,["c",AU3(ANu),"I",AU1(AQK)],Wy,0,DQ,[],0,0,0,0,["c",AU3(AGl),
"I",AU1(AQb)],Rh,0,DQ,[],0,0,0,0,["c",AU3(AG6),"I",AU1(ASp)],TX,0,DQ,[],0,0,0,0,["c",AU3(AFc),"I",AU1(AO1)],Gz,0,BS,[],0,0,0,0,["c",AU3(AFz),"cm",AU3(ALM),"cq",AU4(APh),"bV",AU1(ALm),"fs",AU0(ANF),"ej",AU0(ARA)],GQ,0,C,[],1,0,0,0,0,W,0,GQ,[],1,0,0,OI,["dg",AU0(AGn),"eT",AU0(AFU),"ja",AU0(AP3),"gZ",AU0(ARw)],ZO,0,W,[],0,0,0,0,["k",AU1(CZ),"dg",AU0(CU),"eT",AU0(AID),"ja",AU0(AQq),"cv",AU0(AMH),"gZ",AU0(AIQ)],Jl,0,Bq,[],0,3,0,0,0,D2,0,BC,[],1,0,0,0,["bV",AU1(APk),"I",AU1(AQR),"ej",AU0(AMa)],C3,0,D2,[],0,0,0,0,
["c",AU3(AFe)],E5,0,C3,[],0,0,0,0,["c",AU3(AF_)],CQ,0,D2,[],0,0,0,0,["c",AU3(AFy)],Ez,0,C3,[],0,0,0,0,["c",AU3(ALS),"P",AU1(ASs)],WN,0,C3,[],0,0,0,0,["c",AU3(ARR),"cm",AU3(AMD)],Ba,0,C,[],1,0,0,0,0,Dd,0,BG,[],0,3,0,0,0,M6,0,GQ,[Em],0,0,0,0,["cv",AU0(AMO)],Oc,0,BC,[],0,0,0,0,["c",AU3(AK4),"I",AU1(ANB)],Xn,0,C,[Em,Dh],0,3,0,0,0,MW,0,BS,[],0,0,0,0,0,Qi,0,BS,[],0,0,0,0,["c",AU3(AF6),"P",AU1(ANg),"I",AU1(AGE),"bV",AU1(AGm)],DA,0,BS,[],0,0,0,0,["c",AU3(AIt),"k",AU1(AI4),"bV",AU1(AFZ),"P",AU1(APX),"I",AU1(AII)],Ji,
0,DA,[],0,0,0,0,["k",AU1(AKD)],ZE,0,BW,[],0,0,0,0,["bw",AU2(AK5)],Ee,0,BW,[],0,0,0,0,["bw",AU2(Mw),"bV",AU1(AND)],OM,0,BS,[],0,0,0,0,["P",AU1(ALR),"c",AU3(AE4),"bV",AU1(AGv),"I",AU1(AQv)],El,0,BW,[],0,0,0,0,["b1",AU0(AKO),"bw",AU2(AJy),"cm",AU3(AIo),"cq",AU4(AKU),"bV",AU1(AQm)],AD_,0,BW,[],0,0,0,0,["bw",AU2(AEZ)]]);
$rt_metadata([YP,0,BW,[],0,0,0,0,["bw",AU2(AFr)],Fe,0,BS,[],0,0,0,0,["P",AU1(ARz),"c",AU3(ANj),"bV",AU1(AK6),"I",AU1(AOv)],XG,0,Fe,[],0,0,0,0,0,T$,0,Fe,[],0,0,0,0,0,Yy,0,CQ,[],0,0,0,0,["c",AU3(AHt)],PC,0,CQ,[],0,0,0,0,["c",AU3(AMq)],FU,0,CQ,[],0,0,0,0,["c",AU3(APR),"P",AU1(AQ1)],Pg,0,FU,[],0,0,0,0,["c",AU3(AKR),"P",AU1(AMP)],Fb,0,CQ,[],0,0,0,0,["c",AU3(ASi)],Ne,0,Fb,[],0,0,0,0,["c",AU3(AJ7)],RH,0,CQ,[],0,0,0,0,["c",AU3(ARG)],Qu,0,FU,[],0,0,0,0,["c",AU3(AGH)],Vg,0,Fb,[],0,0,0,0,["c",AU3(AFP)],RJ,0,D2,[],0,0,
0,0,["c",AU3(AR6),"cm",AU3(AP5)],Om,0,D2,[],0,0,0,0,["c",AU3(ANG),"cm",AU3(AE8)],EM,0,C,[],1,0,0,0,0,Yz,0,C3,[],0,0,0,0,["c",AU3(AFR)],WJ,0,Ez,[],0,0,0,0,["c",AU3(AMp)],O6,0,E5,[],0,0,0,0,["c",AU3(APp)],Qn,0,C3,[],0,0,0,0,["c",AU3(ANy)],Uo,0,Ez,[],0,0,0,0,["c",AU3(AFY)],Ri,0,E5,[],0,0,0,0,["c",AU3(APF)],Kv,0,BC,[],4,0,0,0,["c",AU3(ALo),"I",AU1(AKm)],AAk,0,BC,[],0,0,0,0,["c",AU3(AGk),"I",AU1(AGt)],Oh,0,BC,[],0,0,0,0,["c",AU3(AKH),"I",AU1(ASd)],Xp,0,BC,[],4,0,0,0,["c",AU3(AOf),"I",AU1(AHi)],W9,0,BC,[],0,0,0,0,
["c",AU3(ANc),"I",AU1(AEW)],Nq,0,BC,[],0,0,0,0,["c",AU3(AG_),"I",AU1(AJg)],AD0,0,BS,[],0,0,0,0,["c",AU3(ARM),"P",AU1(AGx),"hI",AU0(AMV),"I",AU1(AGw)],ZM,0,BS,[],4,0,0,0,["c",AU3(AM4),"P",AU1(AO9),"hI",AU0(AET),"I",AU1(ARW)],ADR,0,BC,[],4,0,0,0,["c",AU3(AK_),"I",AU1(AI_)],AB3,0,BC,[],0,0,0,0,["c",AU3(ANa),"I",AU1(AI1)],YM,0,BC,[],0,0,0,0,["c",AU3(AKa),"I",AU1(AHn)],Ha,0,BS,[],0,0,0,0,["c",AU3(AFT),"P",AU1(AOp),"I",AU1(AON)],ADW,0,Ha,[],0,0,0,0,["c",AU3(AHs),"cm",AU3(AQH),"cq",AU4(AFG),"bV",AU1(AMh)],AA6,0,Ha,
[],0,0,0,0,["c",AU3(ALG)],Ob,0,Gn,[H4],0,3,0,0,["lB",AU4(AIR),"kL",AU3(AGo),"hO",AU1(AGP),"l$",AU2(AP8)],RQ,0,BW,[],0,0,0,0,["bw",AU2(AHO),"cm",AU3(AGf),"cq",AU4(AJd),"bV",AU1(AJL)],YL,0,BW,[],0,0,0,0,["bw",AU2(ALO)],Nk,0,BW,[],0,0,0,0,["bw",AU2(APr)],G_,0,C,[],4,0,0,AOZ,0,ME,0,BW,[],0,0,0,0,["bw",AU2(APy)],K3,0,BS,[],0,0,0,0,["P",AU1(ANs),"c",AU3(AHj),"cm",AU3(AJJ),"cq",AU4(AHW),"bV",AU1(AFE),"I",AU1(AQc)],Ln,0,BS,[],0,0,0,0,["P",AU1(AGO),"c",AU3(AFd),"cm",AU3(ANR),"cq",AU4(APq),"bV",AU1(AHP),"I",AU1(AN3)],DU,
0,BW,[],0,0,0,0,["bw",AU2(AOO),"cm",AU3(AMI),"cq",AU4(AGM),"bV",AU1(AOA)],VJ,0,EM,[],0,0,0,0,["hy",AU1(AG0),"sw",AU2(AOH)],VK,0,EM,[],0,0,0,0,["hy",AU1(APJ),"sw",AU2(ARt)],ACT,0,C,[],0,0,0,0,0,Y4,0,C,[],0,0,0,0,0,K1,0,Ba,[],0,0,0,0,["E",AU0(ABc)]]);
$rt_metadata([J4,0,Ba,[],0,0,0,0,["E",AU0(ABX)],ACN,0,Ba,[],0,0,0,0,["E",AU0(AO_)],ADk,0,Ba,[],0,0,0,0,["E",AU0(AQe)],ADp,0,Ba,[],0,0,0,0,["E",AU0(AIu)],KX,0,Ba,[],0,0,0,0,["E",AU0(ZQ)],Ly,0,KX,[],0,0,0,0,["E",AU0(AAI)],AEH,0,Ba,[],0,0,0,0,["E",AU0(AJH)],Mv,0,Ly,[],0,0,0,0,["E",AU0(YH)],ABp,0,Mv,[],0,0,0,0,["E",AU0(AMb)],ABP,0,Ba,[],0,0,0,0,["E",AU0(AHH)],AAe,0,Ba,[],0,0,0,0,["E",AU0(AL$)],ZX,0,Ba,[],0,0,0,0,["E",AU0(ARv)],ADt,0,Ba,[],0,0,0,0,["E",AU0(AMQ)],AES,0,Ba,[],0,0,0,0,["E",AU0(AE6)],ACU,0,Ba,[],0,0,
0,0,["E",AU0(AKf)],ACH,0,Ba,[],0,0,0,0,["E",AU0(AOS)],ADJ,0,Ba,[],0,0,0,0,["E",AU0(AHD)],Zk,0,Ba,[],0,0,0,0,["E",AU0(AH4)],Y1,0,Ba,[],0,0,0,0,["E",AU0(ARq)],AC0,0,Ba,[],0,0,0,0,["E",AU0(AE0)],ADb,0,Ba,[],0,0,0,0,["E",AU0(ALd)],AAA,0,Ba,[],0,0,0,0,["E",AU0(AId)],ABU,0,Ba,[],0,0,0,0,["E",AU0(AJi)],AEk,0,Ba,[],0,0,0,0,["E",AU0(ALf)],ADa,0,Ba,[],0,0,0,0,["E",AU0(AQy)],AA4,0,Ba,[],0,0,0,0,["E",AU0(AOa)],AAy,0,Ba,[],0,0,0,0,["E",AU0(AML)],AEN,0,Ba,[],0,0,0,0,["E",AU0(AO5)],Ju,0,Ba,[],0,0,0,0,["E",AU0(ABR)],ADL,0,
Ju,[],0,0,0,0,["E",AU0(AMx)],ABt,0,K1,[],0,0,0,0,["E",AU0(AGe)],AAt,0,J4,[],0,0,0,0,["E",AU0(AJu)],Z4,0,Ba,[],0,0,0,0,["E",AU0(ALt)],AAn,0,Ba,[],0,0,0,0,["E",AU0(ARb)],ABk,0,Ba,[],0,0,0,0,["E",AU0(AIV)],ABq,0,Ba,[],0,0,0,0,["E",AU0(AE1)],Z_,0,C,[],4,0,0,0,0,ZC,0,C,[],4,3,0,0,0,Nr,0,C,[],0,3,0,0,0,AC6,0,C,[],0,3,0,0,0,AA1,0,C,[],4,3,0,0,0,ZI,0,C,[IZ],0,3,0,0,0,Vx,0,C,[Bc],0,3,0,0,["l",AU1(AQf)],Rp,0,C,[Bc],0,3,0,0,["l",AU1(AIS)],Y_,0,C,[],0,3,0,0,0,Ro,0,C,[Bc],0,3,0,0,["l",AU1(AOT)],Up,0,C,[Bc],0,3,0,0,0,PP,
0,C,[Bc],0,3,0,0,0,WL,0,W,[],0,0,0,0,["k",AU1(AIC)],WK,0,W,[],0,0,0,0,["k",AU1(AFu)]]);
$rt_metadata([Os,0,W,[],0,0,0,0,["k",AU1(ALk),"cv",AU0(AJk)],Oy,0,W,[],0,0,0,0,["k",AU1(AOR)],Ow,0,W,[],0,0,0,0,["k",AU1(APx)],Ox,0,W,[],0,0,0,0,["k",AU1(ALN)],OB,0,W,[],0,0,0,0,["k",AU1(AH9)],OC,0,W,[],0,0,0,0,["k",AU1(AEU)],Oz,0,W,[],0,0,0,0,["k",AU1(AJp)],OA,0,W,[],0,0,0,0,["k",AU1(ALQ)],OD,0,W,[],0,0,0,0,["k",AU1(AQL)],OE,0,W,[],0,0,0,0,["k",AU1(AHy)],Or,0,W,[],0,0,0,0,["k",AU1(ASv)],Pb,0,W,[],0,0,0,0,["k",AU1(AJt)],Oo,0,W,[],0,0,0,0,["k",AU1(AHw)],Op,0,W,[],0,0,0,0,["k",AU1(AI9)],Ov,0,W,[],0,0,0,0,["k",
AU1(AKK)],On,0,W,[],0,0,0,0,["k",AU1(AQl)],Ot,0,W,[],0,0,0,0,["k",AU1(AGr)],Ou,0,W,[],0,0,0,0,["k",AU1(AN1)],LX,0,C,[],3,3,0,0,0,SN,0,C,[LX],4,3,0,0,0,ADD,0,C,[G3],0,3,0,0,0,Wo,0,C,[],0,3,0,0,0,C1,0,C,[],3,3,0,ABW,0,Cg,0,Cj,[],12,3,0,AAl,0,Du,0,C,[],3,3,0,AOU,0,Og,0,C,[],0,3,0,0,0,Od,0,C,[Bc],0,3,0,0,["l",AU1(AO4)],M$,0,Gz,[],0,0,0,0,["cm",AU3(AIY),"cq",AU4(ASg),"fs",AU0(AHh)],Qb,0,Bq,[],0,3,0,0,0,Xy,0,Bq,[],0,3,0,0,0,VE,0,FR,[],0,3,0,0,0,P1,0,FR,[],0,3,0,0,0,Yn,0,Bq,[],0,3,0,0,0,Vt,0,C,[],0,3,0,0,0,Sh,0,C,
[Bi],0,3,0,0,0,SX,0,C,[Bc],0,3,0,0,0,SW,0,C,[Bc],0,3,0,0,0,ACW,0,C,[],3,3,0,0,0,AAp,0,C,[],0,3,0,0,0,Tl,0,C,[HT],0,3,0,0,0,VB,0,C,[LX],0,0,0,0,0,V4,0,C,[Bi],0,3,0,0,["q",AU0(AQX)],Tj,0,W,[],0,0,0,0,["k",AU1(AQU)],MT,0,W,[],0,0,0,0,["k",AU1(AGb)],Sa,0,W,[],0,0,0,0,["k",AU1(AFX)],R_,0,W,[],0,0,0,0,["k",AU1(AIU)],Xf,0,W,[],0,0,0,0,["k",AU1(AKv)],OY,0,W,[],0,0,0,0,["k",AU1(AQY)],N7,0,W,[],0,0,0,0,["k",AU1(ANm)],QK,0,W,[],0,0,0,0,["k",AU1(AOY)]]);
$rt_metadata([MM,0,W,[],0,0,0,0,["k",AU1(ARU)],MR,0,W,[],0,0,0,0,["k",AU1(AHU)],NQ,0,W,[],0,0,0,0,["k",AU1(AQ_)],Pm,0,W,[],0,0,0,0,["k",AU1(AL7)],Pv,0,W,[],0,0,0,0,["k",AU1(AOn)],T6,0,W,[],0,0,0,0,["k",AU1(AQM)],SP,0,W,[],0,0,0,0,["k",AU1(ARD)],M4,0,W,[],0,0,0,0,["k",AU1(AHF)],Mf,0,W,[],0,0,0,0,["k",AU1(ANp)],R5,0,Mf,[],0,0,0,0,["k",AU1(APY)],PV,0,C,[I3],0,3,0,0,["q7",AU0(ALB)],Wa,0,C,[BQ],0,3,0,0,["bb",AU1(AOe)],Wd,0,C,[BQ],0,3,0,0,["bb",AU1(AMW)],TS,0,C,[BQ],0,3,0,0,["bb",AU1(AJB)],TV,0,C,[BQ],0,3,0,0,["bb",
AU1(AFo)],UV,0,C,[BQ],0,3,0,0,["bb",AU1(ALv)],Ta,0,C,[Bc],0,3,0,0,["l",AU1(AN0)],Tb,0,C,[Bc],0,3,0,0,["l",AU1(AMy)],S_,0,C,[Bc],0,3,0,0,["l",AU1(AK$)],Zs,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.LS=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","[",", ","]","Either src or dest is null","Illegal argument javaObject instanceof ","#wasm","#diffDemo","ClassL.java","ClassR.java","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ",
"#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ",
"Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#484A4A","#294436","#385570","#283541","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","selectScene ","CodiconDemo","DemoEdit0","RenderTexture","ScissorDemo","LineShaderDemo1",
"LineShaderDemo2","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","WindowDemo","Diff","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","Consolas","Segoe UI","#e3c8ab","#39322b","unsupported","supported","ReadClipboardText is ","","","w = ",", lineHeight = ","example.java","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
+"(int field) {\n    return field + this.field;\n  }\n\n  public interface A {\n    int sumField(int field);\n\n    default void foo() {\n      sumField(10);\n    }\n  }\n}\n","java","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","parser >","open ...","Development >","text","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ",
"\n","\r","Full file parsed in ","ms","change model language: from = "," to = ","opening file ",".java","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing","CppParser.parse","JavaScriptParser.parseBytes","JavaParser.parse","setDiffModel","deleteDiffModel","ns-resize","ew-resize","trying to display with unknown screen size and dpr",".cpp",".cc",".cxx",".hpp",".c",".h",".js","applyContrast = ",
"renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","\\n","#606366","#2B2B2B","#A4A3A3","#323232","#303C47","Courier New","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","main.java","private static void foo (...);","FindUsagesView1","Window 1: ",
"scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","#616161","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ",
"fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","toolbar size is unknown","onLeave item ",", item ","onContextMenu","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ",
"methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile","#A9B7C6","#344134","#40332B"," on Copy","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#BBBBBB","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ",
"#3C3F41","#4B6EAF","#787878","onEnter item ","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA","nwse-resize","nesw-resize"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","/","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","Int","Iter","VP","Rep","No definition or usages","Expected "," ints to read, but "," read","readClipboardText error: ",
"Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W",
"s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic",
"Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing",
"BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo",
"Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms",
"SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Viewport parsed in "," ints to write, but "," written","#EBECF0","#F8F9FB","#edebfc","#FCE8F4","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","Verdana","asyncFullParseFile",
"asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AGJ(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Cq=Long_add;var Kx=Long_sub;var BR=Long_mul;var Do=Long_div;var MX=Long_rem;var ATe=Long_or;var CW=Long_and;var AYL=Long_xor;var Fp=Long_shl;var Gu=Long_shr;var D7=Long_shru;var ATz=Long_compare;var Fc=Long_eq;var AYM=Long_ne;var AIg=Long_lt;var PN=Long_le;var AHY=Long_gt;var AAh=Long_ge;var AYN=Long_not;var ATK=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(ATP);
main.javaException=$rt_javaException;
(function(){var c;c=Uc.prototype;c.f=c.bb;c=Ua.prototype;c.f=c.bb;c=Nh.prototype;c.f=c.bb;c=AAK.prototype;c.getLength=c.GO;c.get=c.Ht;c=NR.prototype;c.f=c.bb;c=Y9.prototype;c.dispatchEvent=c.BU;c.addEventListener=c.Fk;c.removeEventListener=c.Hy;c.getLength=c.B4;c.get=c.y2;c.addEventListener=c.An;c.removeEventListener=c.DV;c=V6.prototype;c.onAnimationFrame=c.DX;c=V0.prototype;c.f=c.uU;c=VX.prototype;c.handleEvent=c.ce;c=VY.prototype;c.f=c.bb;c=WT.prototype;c.handleEvent=c.ce;c=WU.prototype;c.handleEvent=c.ce;c
=WV.prototype;c.handleEvent=c.ce;c=WW.prototype;c.handleEvent=c.ce;c=WX.prototype;c.handleEvent=c.ce;c=WY.prototype;c.handleEvent=c.ce;c=WZ.prototype;c.handleEvent=c.ce;c=W0.prototype;c.handleEvent=c.ce;c=W1.prototype;c.handleEvent=c.ce;c=W2.prototype;c.handleEvent=c.ce;c=Yg.prototype;c.handleEvent=c.ce;c=Yh.prototype;c.handleEvent=c.ce;c=Yi.prototype;c.handleEvent=c.ce;c=Yj.prototype;c.handleEvent=c.ce;c=UK.prototype;c.handleEvent=c.ce;c=XW.prototype;c.f=c.bb;c=XX.prototype;c.f=c.bb;c=Np.prototype;c.f=c.bb;c
=No.prototype;c.f=c.bb;c=Nn.prototype;c.f=c.bb;c=Nm.prototype;c.f=c.bb;c=NK.prototype;c.accept=c.H4;c=XT.prototype;c.f=c.bb;c=XR.prototype;c.f=c.bb;c=XS.prototype;c.f=c.bb;c=Pa.prototype;c.f=c.uU;c=O$.prototype;c.f=c.uU;c=QP.prototype;c.f=c.bb;c=UZ.prototype;c.f=c.bb;c=MU.prototype;c.f=c.bb;c=XJ.prototype;c.f=c.bb;c=XI.prototype;c.f=c.bb;c=Xa.prototype;c.f=c.bb;c=W_.prototype;c.f=c.bb;c=XD.prototype;c.handleEvent=c.ce;c=P3.prototype;c.f=c.bb;c=MQ.prototype;c.onTimer=c.q7;c=Mz.prototype;c.onTimer=c.q7;c=XH.prototype;c.f
=c.bb;c=Xr.prototype;c.f=c.bb;c=UA.prototype;c.f=c.bb;c=PV.prototype;c.onTimer=c.q7;c=Wa.prototype;c.f=c.bb;c=Wd.prototype;c.f=c.bb;c=TS.prototype;c.f=c.bb;c=TV.prototype;c.f=c.bb;c=UV.prototype;c.f=c.bb;})();
})(this);
