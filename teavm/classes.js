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
function $rt_cls(cls){return ACa(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FS(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bX.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AOG(t);}
function $rt_throwableCause(t){return AON(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AUj());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AUk(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(AUl());}
function $rt_throwCCE(){}
var A=Object.create(null);
var K=$rt_throw;var BE=$rt_compare;var AUm=$rt_nullCheck;var E=$rt_cls;var Q=$rt_createArray;var ID=$rt_isInstance;var AUn=$rt_nativeThread;var AUo=$rt_suspending;var AUp=$rt_resuming;var AUq=$rt_invalidPointer;var B=$rt_s;var Bm=$rt_eraseClinit;var Ba=$rt_imul;var Ef=$rt_wrapException;var AUr=$rt_checkBounds;var AUs=$rt_checkUpperBound;var AUt=$rt_checkLowerBound;var AUu=$rt_wrapFunction0;var AUv=$rt_wrapFunction1;var AUw=$rt_wrapFunction2;var AUx=$rt_wrapFunction3;var AUy=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var AAW=$rt_createCharArrayFromData;var AS9=$rt_createByteArrayFromData;var AUz=$rt_createShortArrayFromData;var E4=$rt_createIntArrayFromData;var AUA=$rt_createBooleanArrayFromData;var AUB=$rt_createFloatArrayFromData;var AUC=$rt_createDoubleArrayFromData;var AGF=$rt_createLongArrayFromData;var AUi=$rt_createBooleanArray;var E9=$rt_createByteArray;var AUD=$rt_createShortArray;var BL=$rt_createCharArray;var BC=$rt_createIntArray;var ATY=$rt_createLongArray;var AES=$rt_createFloatArray;var AUE
=$rt_createDoubleArray;var BE=$rt_compare;var AUF=$rt_castToClass;var AUG=$rt_castToInterface;var AUH=Long_toNumber;var Bc=Long_fromInt;var AUI=Long_fromNumber;var Cc=Long_create;var Em=Long_ZERO;var AUJ=Long_hi;var EC=Long_lo;
function C(){this.$id$=0;}
function AUK(){var a=new C();ADl(a);return a;}
function ADl(a){}
function Cn(a){return ACa(a.constructor);}
function ALH(a,b){return a!==b?0:1;}
function AGq(a){var b,c,d,e,f,g,h,i,j;b=Yu(a);if(!b)c=B(0);else{d=(((32-NC(b)|0)+4|0)-1|0)/4|0;e=BL(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=G_((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FS(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function Yu(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AKZ(a){var b,c,d;if(!ID(a,Ek)&&a.constructor.$meta.item===null){b=new VL;V(b);K(b);}b=AE3(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function RB(){var a=this;C.call(a);a.uv=0;a.qK=null;}
function ATk(b){var c,d,e,f,g,h,i,j,k,l;ADj();YM();ABv();ACD();Z$();AC4();ADn();AEz();YD();ACr();ABS();YA();ACq();ACs();AA$();AAf();AAx();Zz();AAG();AAI();YV();YE();AEi();c=(Y1()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))OY(B(2),B(3));else{d=new RB;BG(d);e=new TU;e.so=d;f=new M9;c=new $rt_globals.Worker("teavm/worker.js");g=new NH;g.oP=c;g.oQ=e;g.oR=f;e=Bj(g,"f");c.onmessage=e;h=H(LJ,[JN(B(4),B(5),400),JN(B(6),B(7),400),JN(B(8),B(5),700),
JN(B(9),B(7),700)]);b=Q(LJ,1);b.data[0]=APA(B(10),Fb(B(11),B(12)),B(5),400);b=(LF(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.rW;f=c.qE;k=new M;O(k);BA(G(G(k,B(13)),f),41);k=N(k);f=c.qy;l=c.ow;f=AIQ($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BG(d);c=new TV;c.tq=d;g=new TT;e.then(Bj(c,"f"),Bj(g,"f"));}}
function ABb(b){var c,d,e,f,g,h,i,j,k;c=new SL;d=new RP;c.pL=new $rt_globals.TextDecoder("utf-16");e=new VK;e.oq=c;c.ry=e;e=new VD;e.uM=c;c.lY=e;f=new VE;f.rn=c;c.tz=new $rt_globals.ResizeObserver(Bj(f,"f"));e=new VB;e.nO=c;c.mE=e;c.h4=1;f=new OW;f.xu=null;f.jf=AUL;c.lA=f;c.qd=b;f=new VC;f.tL=c;e=Bj(f,"f");b.onmessage=e;e=AA9();b.postMessage(e);c.mx=(D8()).getElementById("canvasDiv");b=Y1();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dC
=b;c.mx.appendChild(b);f=c.dC;e=AM6(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)OY(B(2),B(14));else{g=new Ph;e=c.dC;f=c.lY;g.dv=null;g.gU=e;g.cl=ATv(f);h=$rt_globals.window;i=Q(Ds,14);j=i.data;k=new WB;k.mV=g;j[0]=CS(g,e,B(15),k);f=new WC;f.r6=g;j[1]=CS(g,e,B(16),f);f=new WD;f.n$=g;j[2]=CS(g,e,B(17),f);f=new WE;f.uH=g;j[3]=CS(g,e,B(18),f);f=new WF;f.rb=g;j[4]=CS(g,e,B(19),f);f=new WG;f.no=g;j[5]=CS(g,e,B(20),f);k=new WH;k.uX=g;j[6]=CS(g,e,B(21),k);k=new WI;k.rq=g;j[7]=CS(g,e,B(22),k);k=new WJ;k.nz
=g;j[8]=CS(g,e,B(23),k);k=new WK;k.tV=g;j[9]=CS(g,e,B(24),k);k=new X0;k.tk=g;j[10]=CS(g,e,B(25),k);k=new X1;k.sk=g;j[11]=ACl(g,h,B(26),k,1);k=new X2;k.mg=g;j[12]=CS(g,h,B(27),k);k=new X3;k.ud=g;j[13]=CS(g,h,B(28),k);g.wP=AQX(i);AAq(g,e);c.k_=g;c.fX=ASV(b,c.lY);APe(c.tz,c.dC);e=$rt_globals.window;g=c.mE;e.addEventListener("resize",Bj(g,"handleEvent"));c.ff=ABq(d,AAh(c));Tk(c);}ACS(c);}
var M3=F(0);
var Mw=F(0);
function Ww(){var a=this;C.call(a);a.j3=null;a.fK=null;}
function ACa(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Ww;c.fK=b;d=c;b.classObject=d;}return c;}
function H2(a){if(a.j3===null)a.j3=$rt_str(a.fK.$meta.name);return a.j3;}
function HP(a){return a.fK.$meta.primitive?1:0;}
function H9(a){return ACa(a.fK.$meta.item);}
var ZC=F();
function Bj(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Lk(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Zl=F();
function AE3(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ACd(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ACd(d[e],c))return 1;e=e+1|0;}return 0;}
var Di=F(0);
var CI=F(0);
var IQ=F(0);
function Bv(){var a=this;C.call(a);a.bX=null;a.hy=0;}
var AUM=null;var AUN=null;var AUO=null;function EL(){EL=Bm(Bv);AQb();}
function AJf(){var a=new Bv();YF(a);return a;}
function FS(a){var b=new Bv();Hj(b,a);return b;}
function Ht(a,b,c){var d=new Bv();Yc(d,a,b,c);return d;}
function YF(a){EL();a.bX=AUM;}
function Hj(a,b){var c,d,e,f;EL();b=b.data;c=b.length;d=BL(c);e=d.data;a.bX=d;f=0;while(f<c){e[f]=b[f];f=f+1|0;}}
function Yc(a,b,c,d){var e,f,g;EL();e=BL(d);f=e.data;a.bX=e;g=0;while(g<d){f[g]=b.data[g+c|0];g=g+1|0;}}
function Mg(b){var c;EL();c=AJf();c.bX=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.bX.data;if(b<c.length)return c[b];}d=new G9;V(d);K(d);}
function I(a){return a.bX.data.length;}
function Fo(a){return a.bX.data.length?0:1;}
function PC(a,b,c,d,e){var f,g,h;if(b>=0&&b<=c&&c<=I(a)&&e>=0){d=d.data;if((e+(c-b|0)|0)<=d.length){while(b<c){f=e+1|0;g=b+1|0;d[e]=L(a,b);e=f;b=g;}return;}}h=new Bx;V(h);K(h);}
function Um(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function KD(a,b){if(a===b)return 1;return Um(a,b,0);}
function Ec(a,b){var c,d,e,f;if(a===b)return 1;if(I(b)>I(a))return 0;c=0;d=I(a)-I(b)|0;while(d<I(a)){e=L(a,d);f=c+1|0;if(e!=L(b,c))return 0;d=d+1|0;c=f;}return 1;}
function GC(a,b,c){var d,e,f,g,h;d=Bb(0,c);if(b<65536){e=b&65535;while(true){f=a.bX.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=H5(b);h=II(b);while(true){f=a.bX.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function FY(a,b,c){var d,e,f,g,h;d=Z(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bX.data[d]==e)break;d=d+(-1)|0;}return d;}f=H5(b);g=II(b);while(true){if(d<1)return (-1);h=a.bX.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Z3(a,b,c){var d,e,f;d=Bb(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function Pz(a,b,c){var d,e;d=Z(c,I(a)-I(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=I(b))break a;if(L(a,d+e|0)!=L(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function B$(a,b,c){var d,e;d=BE(b,c);if(d>0){e=new Bx;V(e);K(e);}if(!d){EL();return AUN;}if(!b&&c==I(a))return a;return Ht(a.bX,b,c-b|0);}
function Dk(a,b){return B$(a,b,I(a));}
function PI(a,b,c){return B$(a,b,c);}
function Fb(a,b){var c,d,e,f,g,h;if(Fo(b))return a;if(Fo(a))return b;c=BL(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Mg(c);}
function Vc(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BA(d,L(a,f));}f=f+1|0;}G(d,Dk(a,f));return N(d);}
function RT(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return B$(a,b,c+1|0);}
function AGp(a){return a;}
function Gp(a){var b,c,d,e,f;b=a.bX.data;c=BL(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cx(b){EL();return b===null?B(29):b.cr();}
function C5(b){var c;EL();c=new M;O(c);return N(T(c,b));}
function Bq(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function Li(a){var b,c,d,e;a:{if(!a.hy){b=a.bX.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hy=(31*a.hy|0)+e|0;d=d+1|0;}}}return a.hy;}
function LT(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gy;Bl(b,B(30));K(b);}AUP=1;d=new QZ;d.jN=Q(CN,10);d.f4=(-1);d.ex=(-1);d.br=(-1);e=new GE;e.eu=1;e.bJ=b;e.bc=BL(I(b)+2|0);Eg(Gp(b),0,e.bc,0,I(b));f=e.bc.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.re=g;e.fM=0;E1(e);E1(e);d.g=e;d.dh=0;d.kN=XP(d,(-1),0,null);if(!Dj(d.g)){b=new IL;h=d.g;Jg(b,B(31),h.bJ,h.c7);K(b);}if(d.mY)d.kN.d8();b=Cm();h=new Sv;h.h1=(-1);h.j8=(-1);h.vW=d;h.tv=d.kN;h.ip=a;h.h1=0;g=I(a);h.j8=g;e=new Vf;i=h.h1;j=d.f4;k=d.ex+1|0;l=d.br+
1|0;e.hi=(-1);m=j+1|0;e.n3=m;e.dB=BC(m*2|0);f=BC(l);e.jd=f;Hq(f,(-1));if(k>0)e.kB=BC(k);Hq(e.dB,(-1));XH(e,a,i,g);h.cq=e;e.e7=1;n=0;m=0;if(!I(a)){f=Q(Bv,1);f.data[0]=B(31);}else{while(true){l=I(h.ip);if(!YC(h.cq))l=h.j8;e=h.cq;if(e.d3>=0&&AAv(e)==1){e=h.cq;e.d3=I2(e);if(I2(h.cq)==ACC(h.cq)){e=h.cq;e.d3=e.d3+1|0;}g=h.cq.d3;g=g<=l&&ME(h,g)?1:0;}else g=ME(h,h.h1);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;B0(b,PI(a,m,AD4(h)));m=AAc(h);n=g;}a:{B0(b,PI(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Bp(b,
g)))break a;El(b,g);}}if(g<0)g=0;f=HF(b,Q(Bv,g));}return f;}
function AIE(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Z(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AQb(){AUM=BL(0);AUN=AJf();AUO=new SZ;}
function Gr(){var a=this;C.call(a);a.hd=null;a.kz=null;a.iX=0;a.jh=0;}
function AUQ(){var a=new Gr();V(a);return a;}
function AUR(a){var b=new Gr();Bl(b,a);return b;}
function V(a){a.iX=1;a.jh=1;}
function Bl(a,b){a.iX=1;a.jh=1;a.hd=b;}
function AIu(a){return a;}
function AOG(a){return a.hd;}
function AON(a){var b;b=a.kz;if(b===a)b=null;return b;}
var EF=F(Gr);
var Ha=F(EF);
var AAO=F(Ha);
var DU=F();
function Ff(){DU.call(this);this.fp=0;}
var AUS=null;var AUT=null;function ADD(a){var b=new Ff();JX(b,a);return b;}
function JX(a,b){a.fp=b;}
function Jt(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new De;Bl(b,B(32));K(b);}d=I(b);if(0==d){b=new De;Bl(b,B(33));K(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new De;V(b);K(b);}b:{c:{while(f<d){h=f+1|0;i=OQ(L(b,f));if(i<0){j=new De;k=B$(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bl(j,N(b));K(j);}if(i>=c){j=new De;l=B$(b,0,d);b=new M;O(b);G(G(T(G(b,B(35)),c),B(36)),l);Bl(j,N(b));K(j);}g=Ba(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new De;k=B$(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bl(j,N(b));K(j);}b=new De;j=new M;O(j);T(G(j,B(38)),c);Bl(b,N(j));K(b);}
function FX(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AUT===null){AUT=Q(Ff,256);c=0;while(true){d=AUT.data;if(c>=d.length)break a;d[c]=ADD(c-128|0);c=c+1|0;}}}return AUT.data[b+128|0];}return ADD(b);}
function L1(a){var b;b=a.fp;return (Nn(AT6(20),b,10)).cr();}
function NC(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Ih(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Ka(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function AKU(a,b){b=b;return BE(a.fp,b.fp);}
function ADj(){AUS=E($rt_intcls());}
function Ge(){var a=this;C.call(a);a.A=null;a.N=0;}
function AUU(){var a=new Ge();O(a);return a;}
function AT6(a){var b=new Ge();FU(b,a);return b;}
function O(a){FU(a,16);}
function FU(a,b){a.A=BL(b);}
function Nn(a,b,c){return AA4(a,a.N,b,c);}
function AA4(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cd(a,b,b+1|0);else{Cd(a,b,b+2|0);f=a.A.data;g=b+1|0;f[b]=45;b=g;}a.A.data[b]=G_(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Ba(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cd(a,b,b+i|0);if(e)e=b;else{f=a.A.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.A.data;b=e+1|0;f[e]=G_($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AB3(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BE(c,0.0);if(!d){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Cd(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cd(a,b,b+8|0);d=b;}else{Cd(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AUV;ABT(c,f);d=f.kb;g=f.jY;h=f.ni;i=1;j=1;if(h)j=2;k=9;l=APF(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bb(k,i+1|0);g=0;}else{d=d/AUW.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cd(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.A.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.A.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.A.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function ZW(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BE(c,0.0);if(!d){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Cd(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cd(a,b,b+8|0);d=b;}else{Cd(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AUX;AA7(c,f);g=f.kP;h=f.jG;i=f.mT;j=1;k=1;if(i)k=2;l=18;m=ANw(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bb(l,j+1|0);h=0;}else{g=Dp(g,AUY.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cd(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.A.data;k=b+1|0;e[b]=45;}n=Cc(1569325056, 23283064);o=0;while(o<l){if(Py(n,Em))d=0;else{d=EC(Dp(g,n));g
=MN(g,n);}e=a.A.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Dp(n,Bc(10));o=o+1|0;}if(h){e=a.A.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function APF(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ANw(b){var c,d,e,f,g;c=Bc(1);d=0;e=16;f=AUZ.data;g=f.length-1|0;while(g>=0){if(Fa(MN(b,BQ(c,f[g])),Em)){d=d|e;c=BQ(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BA(a,b){return a.lH(a.N,b);}
function Xv(a,b,c){Cd(a,b,b+1|0);a.A.data[b]=c;return a;}
function Jx(a,b){var c,d;c=a.A.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bb(b,Bb(c*2|0,5));a.A=Nw(a.A,d);}
function N(a){return Ht(a.A,0,a.N);}
function Xc(a,b,c,d){return a.k$(a.N,b,c,d);}
function MX(a,b,c,d,e){var f,g,h,i;Cd(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.A.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Ii(a,b){return a.kk(b,0,b.data.length);}
function Cd(a,b,c){var d,e,f,g;d=a.N;e=d-b|0;a.hr((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.A.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.N=a.N+(c-b|0)|0;}
var HU=F(0);
var M=F(Ge);
function LM(){var a=new M();AQ3(a);return a;}
function AQ3(a){O(a);}
function G(a,b){var c;c=a.N;if(b===null)b=B(29);Mh(a,c,b);return a;}
function B1(a,b){Mh(a,a.N,b);return a;}
function T(a,b){Nn(a,b,10);return a;}
function HR(a,b){var c,d,e,f,g,h,i,j;c=a.N;d=1;if(AH1(b,Em)){d=0;b=ATg(b);}a:{if(Ld(b,Bc(10))<0){if(d)Cd(a,c,c+1|0);else{Cd(a,c,c+2|0);e=a.A.data;f=c+1|0;e[c]=45;c=f;}a.A.data[c]=G_(EC(b),10);}else{g=1;h=Bc(1);i=FE(Bc(-1),Bc(10));b:{while(true){j=BQ(h,Bc(10));if(Ld(j,b)>0){j=h;break b;}g=g+1|0;if(Ld(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cd(a,c,c+g|0);if(d)f=c;else{e=a.A.data;f=c+1|0;e[c]=45;}while(true){if(Fa(j,Em))break a;e=a.A.data;c=f+1|0;e[f]=G_(EC((FE(b,j))),10);b=Nk(b,j);j=FE(j,Bc(10));f=c;}}}return a;}
function Fj(a,b){AB3(a,a.N,b);return a;}
function Yy(a,b){BA(a,b);return a;}
function F2(a,b){Mh(a,a.N,!b?B(39):B(40));return a;}
function ADT(a,b,c){var d,e,f,g,h,i;d=BE(b,c);if(d<=0){e=a.N;if(b<=e){if(d){f=e-c|0;a.N=e-(c-b|0)|0;g=0;while(g<f){h=a.A.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new G9;V(i);K(i);}
function Wh(a,b){var c,d,e,f;if(b>=0){c=a.N;if(b<c){c=c-1|0;a.N=c;while(b<c){d=a.A.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new G9;V(f);K(f);}
function AKP(a,b,c,d,e){MX(a,b,c,d,e);return a;}
function AHM(a,b,c,d){Xc(a,b,c,d);return a;}
function Y$(a){return a.N;}
function DS(a){return N(a);}
function AKX(a,b){Jx(a,b);}
function ALq(a,b,c){Xv(a,b,c);return a;}
function Mh(a,b,c){var d,e,f;if(b>=0&&b<=a.N){a:{if(c===null)c=B(29);else if(Fo(c))break a;Jx(a,a.N+I(c)|0);d=a.N-1|0;while(d>=b){a.A.data[d+I(c)|0]=a.A.data[d];d=d+(-1)|0;}a.N=a.N+I(c)|0;d=0;while(d<I(c)){e=a.A.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new G9;V(c);K(c);}
var Ep=F(Ha);
var ACj=F(Ep);
function AU0(a){var b=new ACj();AGz(b,a);return b;}
function AGz(a,b){Bl(a,b);}
var AAB=F(Ep);
function AU1(a){var b=new AAB();AGV(b,a);return b;}
function AGV(a,b){Bl(a,b);}
var D1=F(Gr);
var Bo=F(D1);
function AUk(a){var b=new Bo();AQE(b,a);return b;}
function AQE(a,b){Bl(a,b);}
var TM=F(0);
var Ds=F(0);
function AQX(b){var c;c=new P6;c.wa=b;return c;}
function CG(b,c){if(b!==null)b.dS();return c;}
var OM=F(0);
function Ix(){var a=this;C.call(a);a.lm=0;a.kx=0;}
var AU2=0;function FM(a){AU2=AU2-1|0;}
function FZ(a,b,c){Jb(a,ZQ(b,c,400,0));}
function QM(a,b){return KL(a,b,0.875);}
function KL(a,b,c){return Eo(a,b)+c|0;}
function Rn(){var a=this;Ix.call(a);a.jk=null;a.bn=null;a.mm=null;}
function Eu(a){var b,c,d;b=a.bn;c=a.lm;d=a.kx;b.clearRect(0.0,0.0,c,d);}
function R$(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bn;d="center";c.textAlign=d;break a;case 2:c=a.bn;d="right";c.textAlign=d;break a;default:break a;}d=a.bn;c="left";d.textAlign=c;}}
function Cy(a,b){Jb(a,b.mH);}
function Jb(a,b){var c;if(!(a.mm==b?1:0)){c=a.bn;a.mm=b;c.font=b;}}
function ZQ(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Ch(a,b,c,d){var e,f,g;e=a.bn;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Eo(a,b){var c;c=$rt_ustr(b);return a.bn.measureText(c).width;}
function Lp(a,b,c,d){var e,f;e=a.bn;f=$rt_ustr(FS(AAW([35,GB(b/16|0),GB(b%16|0),GB(c/16|0),GB(c%16|0),GB(d/16|0),GB(d%16|0)])));e.fillStyle=f;}
var YN=F();
var ADy=F();
function C6(b,c){if(b===c)return 1;return b!==null?b.cD(c):c!==null?0:1;}
function BG(b){if(b!==null)return b;b=new Gy;Bl(b,B(31));K(b);}
var Y=F(0);
function TU(){C.call(this);this.so=null;}
var BB=F(0);
var ABp=F();
var YR=F(0);
function JN(b,c,d){return APA(B(41),Fb(B(11),b),c,d);}
var ADa=F(0);
var AC7=F(0);
function LF(b,c){var d,e,f,g;d=c.data;e=b.data.length;f=d.length;g=Dl(b,e+f|0);Eg(c,0,g,e,f);return g;}
function KW(b,c,d){Eg(b,c,d,0,d.data.length);return d;}
function Q8(b,c,d){var e;if(c>0)Eg(b,0,d,0,c);e=d.data.length;if(c<e)Eg(b,c+1|0,d,c,e-c|0);return d;}
function AAH(b,c,d,e){var f;if(c>0)Eg(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Eg(b,d,e,c,f-d|0);}return e;}
function FQ(b){var c;c=new V8;c.iB=b;return c;}
function ZG(b,c){if(b.data.length!=c)b=Dl(b,c);return b;}
function AC6(b,c,d){var e;e=c.data.length;if(e==d)c=Dl(c,e*2|0);c.data[d]=b;return c;}
function LJ(){var a=this;C.call(a);a.rW=null;a.qE=null;a.qy=null;a.ow=0;}
function APA(a,b,c,d){var e=new LJ();AOw(e,a,b,c,d);return e;}
function AOw(a,b,c,d,e){a.rW=b;a.qE=c;a.qy=d;a.ow=e;}
var ZA=F();
function AIQ(b,c){return {style:b,weight:c};}
var BN=F(0);
function TV(){C.call(this);this.tq=null;}
function AED(a,b){var c,d,e;c=a.tq;d=0;while(d<b.length){e=b[d];(D8()).fonts.add(e);d=d+1|0;}c.uv=1;b=c.qK;if(b!==null)ABb(b);}
var TT=F();
function AQi(a,b){$rt_globals.console.info("font load error "+b);}
var AC3=F();
var AAd=F();
function OY(b,c){var d,e,f;d=(D8()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(D8()).getElementById($rt_ustr(b)).appendChild(d);}
function Y1(){return (D8()).createElement("canvas");}
function ADX(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AM6(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AEw=F();
var M9=F();
function AMO(a,b){var c;c=new Bo;Bl(c,$rt_str(b.message));K(c);}
var V$=F();
function FA(b){return $rt_str(b);}
var Y5=F();
function Nw(b,c){var d,e,f,g;b=b.data;d=BL(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ADO(b,c){var d,e,f,g;b=b.data;d=E9(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function L8(b,c){var d,e,f,g;b=b.data;d=BC(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dl(b,c){var d,e,f,g;d=b.data;e=UJ(H9(Cn(b)),c);f=Z(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ZM(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B1(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B1(c,B(43));G(c,e[d]);d=d+1|0;}B1(c,B(44));return N(c);}
function ACz(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B1(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B1(c,B(43));T(c,e[d]);d=d+1|0;}B1(c,B(44));return N(c);}
function AO4(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B1(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B1(c,B(43));Fj(c,e[d]);d=d+1|0;}B1(c,B(44));return N(c);}
function ARK(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);B1(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B1(c,B(43));f=e[d];ZW(c,c.N,f);d=d+1|0;}B1(c,B(44));return N(c);}
function Hq(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BD;V(f);K(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Zr(b,c,d,e){var f,g;if(c>d){e=new BD;V(e);K(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Z_(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AUL;e=Q(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Z(j,h+f|0);l=h+(2*f|0)|0;m=Z(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.lR(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AB4(b,c){return T1(b,0,b.data.length,c);}
function T1(b,c,d,e){var f,g,h,i,j;f=BE(c,d);if(f>0){g=new BD;V(g);K(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var Lo=F();
var AU3=null;var AU4=null;function Bu(){if(AU3===null)AU3=AMe(AU5,0);return AU3;}
function Iw(){if(AU4===null)AU4=AMe(AU6,0);return AU4;}
function Eg(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=ACA(b)&&(e+f|0)<=ACA(d)){a:{b:{if(b!==d){g=H9(Cn(b));h=H9(Cn(d));if(g!==null&&h!==null){if(g===h)break b;if(!HP(g)&&!HP(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fK;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ACd(n.constructor,o)?1:0)){RL(b,c,d,e,j);b=new IJ;V(b);K(b);}j=j+1|0;k=m;}RL(b,c,d,e,f);return;}if(!HP(g))break a;if(HP(h))break b;else break a;}b=new IJ;V(b);K(b);}}RL(b,c,
d,e,f);return;}b=new IJ;V(b);K(b);}b=new Bx;V(b);K(b);}d=new Gy;Bl(d,B(45));K(d);}
function RL(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function FC(){return Long_fromNumber(new Date().getTime());}
function ACE(){return AUI($rt_globals.performance.now()*1000000.0);}
var JM=F(0);
var AAt=F();
function ARt(a,b){return a.vT(b);}
function AGJ(a){return a.xe();}
var AA2=F();
var FL=F(0);
var SZ=F();
var C7=F();
var AU7=null;var AU8=null;var AU9=null;var AU$=null;var AU_=null;var AVa=null;var AVb=null;var AVc=null;var AVd=null;var AVe=null;function W7(b){var c,d;c=new Bv;d=BL(1);d.data[0]=b;Hj(c,d);return c;}
function LY(b){return b>=65536&&b<=1114111?1:0;}
function CD(b){return (b&64512)!=55296?0:1;}
function C4(b){return (b&64512)!=56320?0:1;}
function L3(b){return !CD(b)&&!C4(b)?0:1;}
function Hi(b,c){return CD(b)&&C4(c)?1:0;}
function Es(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function H5(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function II(b){return (56320|b&1023)&65535;}
function EV(b){return Gx(b)&65535;}
function Gx(b){if(AU$===null){if(AVb===null)AVb=ACy();AU$=AAM((AVb.value!==null?$rt_str(AVb.value):null));}return SD(AU$,b);}
function Ew(b){return Gu(b)&65535;}
function Gu(b){if(AU9===null){if(AVc===null)AVc=ADk();AU9=AAM((AVc.value!==null?$rt_str(AVc.value):null));}return SD(AU9,b);}
function SD(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BE(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function UR(b,c){if(c>=2&&c<=36){b=OQ(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function OQ(b){var c,d,e,f,g,h,i,j,k,l;if(AU8===null){if(AVd===null)AVd=AAQ();c=(AVd.value!==null?$rt_str(AVd.value):null);d=AOO(Gp(c));e=JK(d);f=BC(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+M5(d)|0;j=j+M5(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AU8=f;}g=AU8.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BE(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function G_(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gm(b){var c;if(b<65536){c=BL(1);c.data[0]=b&65535;return c;}return AAW([H5(b),II(b)]);}
function Ct(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&L3(b&65535))return 19;if(AU_===null){if(AVe===null)AVe=AEm();d=(AVe.value!==null?$rt_str(AVe.value):null);e=Q(Nh,16384);f=e.data;g=E9(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=KE(L(d,l));if(m==64){l=l+1|0;m=KE(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Ba(c,KE(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=KE(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AIB(k,k+i|0,ADO(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AIB(k,k+i|0,ADO(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AU_=Dl(e,j);}e=AU_.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.qY)o=p+1|0;else{c=d.oN;if(b>=c)return d.o0.data[b-c|0];c=p-1|0;}}return 0;}
function Jr(b){a:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Gh(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ct(b)!=16?0:1;}
function Pj(b){switch(Ct(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Q0(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Pj(b);}return 1;}
function YM(){AU7=E($rt_charcls());AVa=Q(C7,128);}
function ACy(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ADk(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AAQ(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AEm(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Mq=F(0);
var SC=F(0);
var Eh=F(0);
var ADx=F(0);
function D8(){return $rt_globals.window.document;}
var Gy=F(Bo);
function NH(){var a=this;C.call(a);a.oP=null;a.oQ=null;a.oR=null;}
function ANT(a,b){var c,d,e;c=a.oP;d=a.oQ;e=a.oR;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=d.so;b.qK=c;if(b.uv)ABb(c);}}
var AB0=F();
function ACA(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AVf());}return b.data.length;}
function UJ(b,c){if(b===null){b=new Gy;V(b);K(b);}if(b===E($rt_voidcls())){b=new BD;V(b);K(b);}if(c>=0)return AQL(b.fK,c);b=new Ye;V(b);K(b);}
function AQL(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var AAZ=F();
function Fu(){return ARu();}
function ARu(){return Math.random();}
function Z(b,c){if(b<c)c=b;return c;}
function Bb(b,c){if(b>c)c=b;return c;}
function I3(b){if(b<=0)b= -b|0;return b;}
var Bx=F(Bo);
var IJ=F(Bo);
var O$=F(0);
var Rd=F(0);
var Q5=F(0);
var TG=F(0);
var Xd=F(0);
var US=F(0);
var Ou=F(0);
var YQ=F();
function ALk(a,b,c){a.DZ($rt_str(b),Lk(c,"handleEvent"));}
function ALJ(a,b,c){a.A8($rt_str(b),Lk(c,"handleEvent"));}
function AFL(a,b){return a.vT(b);}
function AMT(a,b,c,d){a.zm($rt_str(b),Lk(c,"handleEvent"),d?1:0);}
function AQC(a,b){return !!a.D4(b);}
function AGM(a){return a.xe();}
function AE2(a,b,c,d){a.CE($rt_str(b),Lk(c,"handleEvent"),d?1:0);}
var BD=F(Bo);
var Ye=F(Bo);
var G9=F(Bx);
var Z0=F();
function AA9(){return "ping";}
var Ot=F(0);
function SL(){var a=this;C.call(a);a.pL=null;a.ry=null;a.lY=null;a.mx=null;a.dC=null;a.tz=null;a.mE=null;a.k_=null;a.fX=null;a.h4=0;a.wy=0;a.qS=null;a.ff=null;a.qd=null;a.lA=null;a.sr=0;}
function ACS(a){a.dC.focus();}
function Nr(a,b){var c;c=D8();b=$rt_ustr(b);c.title=b;}
function AAh(a){var b,c,d;b=new Mr;c=a.fX;d=a.k_.cl;b.bk=c;b.m=d;b.bO=a;return b;}
function Tk(a){a.wy=$rt_globals.requestAnimationFrame(Bj(a.ry,"onAnimationFrame"));}
function F1(a){a.h4=1;}
function Tj(a,b,c){var d,e;a.k_.dv=BX(b,c);d=a.dC;e=b;d.width=e;d=a.dC;e=c;d.height=e;d=a.fX;Bg(d.dG,b,c);e=d.bD;d=d.dG;b=d.b;c=d.a;e.viewport(0,0,b,c);a.ff.cj(a.fX.dG,KF(a));a.ff.bK();}
function Go(a,b){var c,d,e;c=a.qS;d=a.dC;if(C6(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.qS=b;}
function Jp(a){return $rt_globals.performance.now()/1000.0;}
function KF(a){return $rt_globals.window.devicePixelRatio;}
function V9(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AD0(b,1);else{c=new WU;d=$rt_globals.window.showDirectoryPicker();e=new WT;e.oS=b;e.oT=c;d.then(Bj(e,"f"),Bj(c,"f"));}}
function LO(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AD0(b,0);else{c=new Xq;d=$rt_globals.window.showOpenFilePicker();e=new Xp;e.pJ=b;e.pI=c;d.then(Bj(e,"f"),Bj(c,"f"));}}
function CO(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.sr+1|0;a.sr=e;f=a.lA;g=FX(e);f.hv=L0(f,f.hv,g);g=UZ(f,g);Ms(g,b);Ms(g,b);f.jj=f.jj+1|0;b=a.qd;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bv)f=$rt_ustr(c);else if(ID(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(ID(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(ID(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof K5)){b=new BD;c=H2(Cn(c));f
=new M;O(f);G(G(f,B(46)),c);Bl(b,N(f));K(b);}c=c;f=c.gw;if(f===null)f=c.e0;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function QN(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new Qz;e.mK=b;b=AEt(c);d.then(Bj(e,"f"),Bj(b,"f"));}
function Uo(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.pL;b=(Gp(b)).data;f=f.decode(b);b=e.writeText(f);e=new UH;e.r8=c;c=AEt(d);b.then(Bj(e,"f"),Bj(c,"f"));}
function XE(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AEt(b){var c;c=new MK;c.si=b;return c;}
var Cb=F(0);
var RP=F();
function ABq(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(!Bq(B(47),c)){if(Bq(B(48),c)){d=new VX;AA0(d,b);c=new XS;c.ua=d;V_(d,c,B(49));c=new XY;c.n4=d;V_(d,c,B(50));}else d=(APt(I(c)<=0?B(31):Dk(c,1))).b$(b);}else{d=new M8;EP(d,b);b=$rt_globals.fetch("test.wasm");e=new Nf;b=b.then(Bj(e,"f"));e=new Ne;b=b.then(Bj(e,"f"));e=new Nd;f=new Nc;b.then(Bj(e,"f"),Bj(f,"f"));}return d;}
var Bh=F(0);
var ABj=F();
var AAV=F();
var Q9=F(0);
function VK(){C.call(this);this.oq=null;}
function AJX(a,b){var c,d;c=b;b=a.oq;if(!(!b.ff.cK(c/1000.0)&&!b.h4)){d=b.fX.dG;if(Ba(d.b,d.a)){b.h4=0;b.ff.bK();}}Tk(b);}
function VD(){C.call(this);this.uM=null;}
function Dh(a){F1(a.uM);}
var PX=F(0);
function VE(){C.call(this);this.rn=null;}
function AH5(a,b,c){var d,e,f,g;c=a.rn;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dC){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=KF(c);Tj(c,Hc(f.width*g),Hc(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Tj(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var ADF=F();
function APe(b,c){AOg(b,c,AFa());}
function AFa(){return {box:'device-pixel-content-box'};}
function AOg(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cl=F(0);
function VB(){C.call(this);this.nO=null;}
function AN1(a,b){b=a.nO;b.ff.cj(b.fX.dG,KF(b));b.ff.bK();}
var K0=F(0);
function EA(){C.call(this);this.j6=null;}
var Ek=F(0);
var XD=F(0);
var M2=F(0);
function OW(){var a=this;EA.call(a);a.hv=null;a.jf=null;a.xu=null;a.jj=0;}
function UZ(a,b){var c,d;c=a.hv;while(true){if(c===null)return null;d=Js(a.jf,b,c.iH);if(!d)break;c=d>=0?c.bY:c.bL;}return c;}
function L0(a,b,c){var d,e;if(b===null){b=new Jo;d=null;b.iH=c;b.h7=d;b.fi=1;b.fr=1;return b;}e=Js(a.jf,c,b.iH);if(!e)return b;if(e>=0)b.bY=L0(a,b.bY,c);else b.bL=L0(a,b.bL,c);Ei(b);return JJ(b);}
function J8(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Js(a.jf,c,b.iH);if(d<0)b.bL=J8(a,b.bL,c);else if(d>0)b.bY=J8(a,b.bY,c);else{e=b.bY;if(e===null)return b.bL;f=b.bL;g=Q(Jo,e.fi).data;h=0;while(true){b=e.bL;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bY;while(h>0){h=h+(-1)|0;j=g[h];j.bL=b;Ei(j);b=JJ(j);}e.bY=b;e.bL=f;Ei(e);b=e;}Ei(b);return JJ(b);}
function VC(){C.call(this);this.tL=null;}
function APb(a,b){var c,d,e,f,g,h,i,j,k;c=a.tL.lA;b=b.data;if(!(b===AA9()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BD;V(b);K(b);}if(b.length<1){b=new BD;V(b);K(b);}d=FX(b[0]);e=UZ(c,d);if(e===null)c=null;else{c.hv=J8(c,c.hv,d);c.jj=c.jj+1|0;c=e.h7;}f=Q(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=FA(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new ST;ADl(e);e.ha=k;}else e=(k instanceof $rt_globals.File?1:0)?AB7(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:AB7(k,null);g[h]=e;h=j;}c.l(f);}}
function Ph(){var a=this;C.call(a);a.cl=null;a.gU=null;a.wP=null;a.dv=null;}
function MZ(){return (D8()).activeElement;}
function CS(a,b,c,d){b.addEventListener($rt_ustr(c),Bj(d,"handleEvent"));return W3(a,b,c,d);}
function ACl(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bj(d,"handleEvent"),!!e);return W3(a,b,c,d);}
function W3(a,b,c,d){var e;e=new PT;e.vF=b;e.vK=c;e.vI=d;return e;}
function TW(a,b){var c;c=new U2;c.uG=b;return c;}
function EB(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gU.getBoundingClientRect();e=BX(Hc((b.clientX-d.left)*c),Hc((b.clientY-d.top)*c));f=new Bk;g=a.dv;f.b=g.b;f.a=g.a;d=new Mn;Up(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.h=e;d.vn=f;return d;}
function X5(a,b,c){var d,e,f,g;d=new OP;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Up(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.jD=0;d.dE=e;d.bh=f;d.hg=c;d.rA=g;return d;}
function DL(a,b){b.stopPropagation();b.preventDefault();}
function AAq(a,b){var c;c=new XA;c.o_=b;b.onpointerdown=Bj(c,"f");c=new XB;c.nQ=b;b.onpointerup=Bj(c,"f");}
function Lg(){var a=this;C.call(a);a.qQ=null;a.cB=null;a.bD=null;a.sK=null;a.we=0;a.xa=0;a.jm=null;a.xL=null;a.xr=null;a.ww=null;a.f1=null;a.hf=null;a.xz=null;a.oz=null;a.dG=null;a.uo=null;a.k4=0;a.jz=0;a.lJ=0;a.ls=0;a.hU=0;a.lG=null;}
function Hh(a,b,c){return GN(a,b,c,400,0);}
function CK(a,b,c){return Mz(a.qQ,b,c);}
function Gw(a,b){var c,d,e,f,g;c=a.bD;d=b.bl;e=b.bz;f=b.bi;g=b.bA;c.clearColor(d,e,f,g);a.bD.clear(16384);}
function CJ(a,b){var c;if(b==a.jz)return b;if(!b)a.bD.disable(3042);else{a.bD.enable(3042);a.bD.blendFuncSeparate(770,771,1,1);}c=a.jz;a.jz=b;return c;}
function Lx(a,b,c,d){var e,f,g;a.ls=1;a.hU=1;e=a.lG;f=d.b;g=d.a;e.q1=b;e.q2=c;e.q0=f;e.qZ=g;Uq(a);}
function Iy(a){a.ls=0;a.hU=0;Uq(a);}
function Uq(a){var b,c,d,e,f,g;b=a.lJ;c=a.ls;if(b!=c){a.lJ=c;if(!c)a.bD.disable(3089);else a.bD.enable(3089);}if(a.lJ&&a.hU){a.hU=0;d=a.bD;e=a.lG;b=e.q1;c=a.dG.a-e.q2|0;f=e.qZ;c=c-f|0;g=e.q0;d.scissor(b,c,g,f);}}
function KX(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.oz;c=a.k4;d=b.gd.sc;e=b.d$;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.d$;h=b.mB;e.bindBuffer(34962,h);i=b.gd.l3.data;g=i.length;j=0;while(j<g){k=i[j];l=b.d$;m=k.g1;n=k.eT;o=b.gd.kg*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.eT|0;j=j+1|0;}a:{e=b.uJ;if(e!==null){c=0;b.d$.bindBuffer(34962,e);i=b.gd.qN.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.d$;j=e.g1;p=e.eT;m=e.oI;n=b.gd.o5;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.eT|0;g=g+1|0;}}}q=b.t4;if(q===null){c=b.rF;if(c>0)b.d$.drawArrays(4,0,c);}else{b.d$.bindBuffer(34963,q);k=b.d$;g=b.uh;k.drawElements(4,g,5123,0);}a.k4=d;}
function By(a,b,c,d,e){K9(a,a.jm);Ma(a.jm,a.bD,b,c,d,a.dG);d=a.jm;Ic(a.bD,d.tK,e);KX(a);}
function EG(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;K9(a,a.f1);Ma(a.f1,a.bD,b,c,d,a.dG);Ul(a.f1,a.bD,f);d=a.f1;j=a.bD;f=f.fm;b=f.b;c=f.a;k=e.bl;l=b;m=k/l;k=e.bz;n=c;o=k/n;k=e.bi/l;l=e.bA/n;d=d.tl;j.uniform4f(d,m,o,k,l);d=a.f1;e=a.bD;Ic(e,d.pi,g);Ic(e,d.m4,h);d=d.oe;e.uniform2f(d,i,0.0);KX(a);}
function CU(a){var b,c;b=new Jn;c=a.sK;b.fm=new Bk;b.dX=c;b.eN=c.dm.createTexture();AVg=AVg+1|0;return b;}
function NN(a,b){Xf(a.bD,b);}
function K9(a,b){var c,d;if(b!==a.uo){c=a.bD;d=b.cn;c.useProgram(d);a.uo=b;}}
function AC_(){var a=this;Lg.call(a);a.wT=null;a.xs=null;}
function ASV(a,b){var c=new AC_();AKi(c,a,b);return c;}
function AKi(a,b,c){var d,e,f,g,h,i,j,k,l;d=new Ut;a.dG=new Bk;a.k4=0;a.lG=new WN;a.qQ=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(51)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bD=b;a.cB=Mz(d,4,4);g=AES(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BL(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;k=new PV;Ze();f=AVh;k.d$=b;k.gd=f;k.rF=h.length/f.kg|0;k.uh
=j.length;f=b.createBuffer();k.mB=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);k.uJ=null;f=b.createBuffer();k.t4=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}d=null;b.bindBuffer(34962,d);f=null;b.bindBuffer(34963,f);a.oz=k;a.xa=KD(e,B(52));f=new PW;f.dm=b;a.sK=f;l=b.getParameter(3379);a.we=l;f=new M;O(f);T(G(f,B(53)),l);$rt_globals.console.info($rt_ustr(N(f)));g=Q(D9,6);i=g.data;d=new Wk;LD(d,b,B(54),B(55),AVh);f=d.cn;d.tK=b.getUniformLocation(f,"uColor");a.jm=d;i[0]
=d;f=ASp(b,B(56));a.xL=f;i[1]=f;f=new QJ;LD(f,b,B(54),B(57),AVh);a.xr=f;i[2]=f;f=ATJ(b);a.ww=f;i[3]=f;f=ASW(b);a.f1=f;i[4]=f;f=ATU(b);a.hf=f;i[5]=f;a.xz=g;Xf(b,B(58));a.xs=new Ur;a.wT=c;}
function GN(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=a.cB;g=ZQ(b,c,d,e);Jb(f,g);h=f.bn.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Eo(f,B(59));m=Eo(f,B(60));h=new K6;h.lO=b;h.vU=c;n=c|0;if(n!==c){b=new M;O(b);Fj(G(b,B(61)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.oG=n;h.v2=d;h.wv=e;h.dt=i;h.eg=j;h.vR=l;h.lB=k;h.mH=g;h.qJ=Dg(i);h.xk=Dg(h.eg);d=m*32.0|0;n=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;a:{h.vZ=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(62);}h.vE=b;return h;}
function CC(){C.call(this);this.bj=null;}
function EP(a,b){a.bj=b;}
function ARa(a,b){return 0;}
var I6=F();
var AUL=null;function Js(a,b,c){return b.jl(c);}
function ABv(){AUL=new I6;}
function Z6(){var a=this;C.call(a);a.b3=null;a.l0=null;a.bt=null;a.df=null;a.ej=null;a.fn=null;a.fR=null;a.je=null;a.jV=null;a.cZ=null;a.he=null;a.nL=0;}
function ATv(a){var b=new Z6();ANu(b,a);return b;}
function ANu(a,b){a.b3=CH(Q(Cs,0));a.l0=CH(Q(Cs,0));a.bt=CH(Q(Cw,0));a.df=CH(Q(DE,0));a.ej=CH(Q(Ev,0));a.fn=CH(Q(EH,0));a.fR=CH(Q(E8,0));a.je=CH(Q(Bh,0));a.jV=CH(Q(Bh,0));a.cZ=b;}
function T3(a,b){var c,d,e,f;Dh(a.cZ);c=(Co(!b.hg?a.l0:a.b3)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bB(b);if(f)break;if(b.jD)break;e=e+1|0;}return f;}
function QK(a,b,c){var d,e,f;Dh(a.cZ);d=(Co(a.fn)).data;e=d.length;f=0;while(f<e){if(d[f].gh(b,c))return 1;f=f+1|0;}return 0;}
function WB(){C.call(this);this.mV=null;}
function ANq(a,b){var c;c=a.mV;if(T3(c.cl,X5(c,b,1)))DL(c,b);}
function WC(){C.call(this);this.r6=null;}
function ANG(a,b){var c;c=a.r6;if(T3(c.cl,X5(c,b,0)))DL(c,b);}
function WD(){C.call(this);this.n$=null;}
function AL0(a,b){var c,d,e,f,g,h,i;c=a.n$;if(c.dv!==null){a:{b:{d=EB(c,b);e=c.cl;Dh(e.cZ);f=e.he;if(f!==null)f.l(d);else{g=(Co(e.bt)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bR(d))break a;i=i+1|0;}}}}DL(c,b);}}
function WE(){C.call(this);this.uH=null;}
function ALm(a,b){var c,d,e,f,g,h;c=a.uH;b.button;if(c.dv!==null)a:{d=EB(c,b);c=c.cl;e=b.button;Dh(c.cZ);if(c.he===null){f=(Co(c.bt)).data;g=f.length;h=0;while(h<g){b=f[h].b5(d,e);if(b!==null){c.he=b;c.nL=e;break a;}h=h+1|0;}}}}
function WF(){C.call(this);this.rb=null;}
function ALN(a,b){var c,d,e,f,g,h,i;c=a.rb;b.button;if(c.dv!==null){d=EB(c,b);e=c.cl;f=b.button;Dh(e.cZ);if(f==e.nL&&e.he!==null)e.he=null;g=(Co(e.bt)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cL(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DL(c,b);}}
function WG(){C.call(this);this.no=null;}
function AOd(a,b){var c,d,e,f,g,h,i,j,k;c=a.no;if(c.dv!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cl;f=EB(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dh(e.cZ);i=(Co(e.df)).data;j=i.length;k=0;b:{while(k<j){if(i[k].cW(f,d,h))break b;k=k+1|0;}}DL(c,b);}}
function WH(){C.call(this);this.uX=null;}
function AJA(a,b){var c,d,e,f,g,h,i,j;c=a.uX;if(c.dv!==null){d=EB(c,b);e=c.cl;f=b.button;g=b.detail;Dh(e.cZ);h=(Co(e.bt)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cp(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DL(c,b);}}
function WI(){C.call(this);this.rq=null;}
function ARA(a,b){var c,d,e,f,g,h,i;c=a.rq;if(c.dv!==null){d=EB(c,b);e=c.cl;Dh(e.cZ);f=(Co(e.ej)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bB(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DL(c,b);}}
function WJ(){C.call(this);this.nz=null;}
function AIN(a,b){var c,d,e;b=a.nz.cl;c=(Co(b.jV)).data;d=c.length;e=0;while(e<d){c[e].p();e=e+1|0;}Dh(b.cZ);}
function WK(){C.call(this);this.tV=null;}
function APj(a,b){var c,d,e;b=a.tV.cl;c=(Co(b.je)).data;d=c.length;e=0;while(e<d){c[e].p();e=e+1|0;}Dh(b.cZ);}
function X0(){C.call(this);this.tk=null;}
function ARb(a,b){var c;c=a.tk;if(c.dv!==null)EB(c,b);}
function X1(){C.call(this);this.sk=null;}
function ALB(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.sk;if(MZ()===c.gU){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Co(c.cl.fR)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dj();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cl.cZ;m=new NA;m.t6=k;m.t7=l;g.getAsString(Bj(m,"accept"));DL(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(63)),k),B(64)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function X2(){C.call(this);this.mg=null;}
function AL3(a,b){var c;c=a.mg;if(MZ()===c.gU&&QK(c.cl,TW(c,b),0))DL(c,b);}
function X3(){C.call(this);this.ud=null;}
function ANV(a,b){var c;c=a.ud;if(MZ()===c.gU&&QK(c.cl,TW(c,b),1))DL(c,b);}
var Ug=F(0);
var Ut=F();
function Mz(a,b,c){var d,e,f;d=new Rn;AU2=AU2+1|0;d.lm=b;d.kx=c;e=(D8()).createElement("canvas");d.jk=e;f=b;e.width=f;e=d.jk;f=c;e.height=f;d.bn=d.jk.getContext("2d");return d;}
var Ur=F();
function AKF(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Mr(){var a=this;C.call(a);a.bk=null;a.m=null;a.bO=null;}
function ADS(){var a=this;C.call(a);a.gY=null;a.io=null;a.gO=0;}
function CH(a){var b=new ADS();AJu(b,a);return b;}
function AJu(a,b){a.gY=b;}
function W(a,b){var c,d,e;c=a.gO;d=a.gY;if(c==d.data.length)a.gY=Dl(d,c+4|0);d=a.gY.data;e=a.gO;a.gO=e+1|0;d[e]=b;a.io=null;}
function Co(a){var b;b=a.io;if(!(b!==null&&b.data.length==a.gO))a.io=Dl(a.gY,a.gO);return a.io;}
var IN=F(0);
var Cs=F(0);
var Cw=F(0);
function AKK(a,b){return 0;}
function AQj(a,b,c){return null;}
function AFt(a,b,c){return 0;}
function AOc(a,b,c,d){return 0;}
var DE=F(0);
var Ev=F(0);
var EH=F(0);
var EM=F(0);
var E8=F(0);
function P6(){C.call(this);this.wa=null;}
function Bk(){var a=this;C.call(a);a.b=0;a.a=0;}
function BX(a,b){var c=new Bk();ZZ(c,a,b);return c;}
function ZZ(a,b,c){a.b=b;a.a=c;}
function CA(a,b){a.b=b.b;a.a=b.a;}
function Bg(a,b,c){a.b=b;a.a=c;}
function Yj(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);T(G(T(G(d,B(65)),b),B(66)),c);return N(d);}
function K8(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function WN(){var a=this;C.call(a);a.q1=0;a.q2=0;a.q0=0;a.qZ=0;}
var AC$=F();
var Zi=F(0);
function PW(){C.call(this);this.dm=null;}
function LB(){var a=this;C.call(a);a.cn=null;a.xm=null;}
function AB6(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(67):B(68);d=$rt_str(b.getShaderInfoLog(e));g=new M;O(g);G(G(g,f),d);f=N(g);b.deleteShader(e);Br(Bu(),f);b=new Bo;Bl(b,f);K(b);}
function D9(){var a=this;LB.call(a);a.ny=null;a.pf=null;a.le=null;}
function AVi(a,b,c,d){var e=new D9();LD(e,a,b,c,d);return e;}
function LD(a,b,c,d,e){var f,g,h,i,j,k;a.xm=e;f=AB6(b,35633,c);d=AB6(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.cn=g;h=e.rT.data;i=h.length;j=0;while(j<i){c=h[j];d=a.cn;k=c.g1;c=c.py;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.cn;b.linkProgram(c);if(b.getProgramParameter(c,35714)){Xf(b,B(69));a.le=new Bk;c=a.cn;a.ny=b.getUniformLocation(c,"uResolution");c=a.cn;a.pf=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bo;c=new M;O(c);G(G(c,B(70)),d);Bl(b,N(c));K(b);}
function Z8(a,b,c){var d,e,f;if(!K8(a.le,c)){CA(a.le,c);d=a.ny;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function Ma(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.pf;b.uniform4f(e,i,l,h,j);Z8(a,b,f);}
function Wk(){D9.call(this);this.tK=null;}
function Ez(){D9.call(this);this.q8=null;}
function ASp(a,b){var c=new Ez();T0(c,a,b);return c;}
function AVj(a,b,c){var d=new Ez();T4(d,a,b,c);return d;}
function T0(a,b,c){T4(a,b,B(54),c);}
function T4(a,b,c,d){Ze();LD(a,b,c,d,AVh);c=a.cn;a.q8=b.getUniformLocation(c,"sDiffuse");}
function Ul(a,b,c){var d;d=a.q8;b.uniform1i(d,0);b.activeTexture(33984);c=c.eN;b.bindTexture(3553,c);}
var QJ=F(D9);
function ACP(){Ez.call(this);this.wj=null;}
function ATJ(a){var b=new ACP();AIV(b,a);return b;}
function AIV(a,b){var c;T0(a,b,B(71));c=a.cn;a.wj=b.getUniformLocation(c,"uContrast");}
function ACo(){var a=this;Ez.call(a);a.tl=null;a.pi=null;a.m4=null;a.oe=null;}
function ASW(a){var b=new ACo();AN$(b,a);return b;}
function AN$(a,b){var c;T4(a,b,B(72),B(73));c=a.cn;a.tl=b.getUniformLocation(c,"uTexTransform");c=a.cn;a.pi=b.getUniformLocation(c,"uColor");c=a.cn;a.m4=b.getUniformLocation(c,"uBgColor");c=a.cn;a.oe=b.getUniformLocation(c,"uContrast");}
function ZB(){var a=this;Ez.call(a);a.uK=null;a.uI=null;a.pU=null;}
function ATU(a){var b=new ZB();AIj(b,a);return b;}
function AIj(a,b){var c,d;T0(a,b,B(74));c=a.cn;a.uK=b.getUniformLocation(c,"uColorB");d=a.cn;a.uI=b.getUniformLocation(d,"uColorF");d=a.cn;a.pU=b.getUniformLocation(d,"uContrast");}
var RY=F(0);
var AEu=F(0);
function Ic(b,c,d){var e,f,g,h;e=d.bl;f=d.bz;g=d.bi;h=d.bA;b.uniform4f(c,e,f,g,h);}
function Xf(b,c){var d,e;d=b.getError();if(d){b=Bu();e=new M;O(e);T(G(e,c),d);Br(b,N(e));}}
function PT(){var a=this;C.call(a);a.vF=null;a.vK=null;a.vI=null;}
function PV(){var a=this;C.call(a);a.d$=null;a.gd=null;a.mB=null;a.uJ=null;a.t4=null;a.rF=0;a.uh=0;}
function Cj(){var a=this;C.call(a);a.vC=null;a.cY=0;}
function C_(a,b,c){a.vC=b;a.cY=c;}
function GI(){var a=this;Cj.call(a);a.rT=null;a.l3=null;a.qN=null;a.kg=0;a.o5=0;a.sc=0;}
var AVh=null;var AVk=null;function Ze(){Ze=Bm(GI);AJ$();}
function AJ$(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new GI;c=Q(DV,2);d=c.data;AQv();d[0]=AVl;d[1]=AVm;Ze();C_(b,B(75),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];YP();switch(AVn.data[l.lv.cY]){case 1:f=f+l.eT|0;h=h+1|0;break a;case 2:e=e+l.eT|0;g=g+1|0;break a;default:}}i=i|1<<l.g1;k=k+1|0;}b.rT=c;b.kg=e;b.o5=f;b.sc=i;c=Q(DV,g);m=c.data;b.l3=c;c=Q(DV,h);n=c.data;b.qN=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];YP();switch(AVn.data[l.lv.cY]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}AVh=b;c=Q(GI,1);c.data[0]=b;AVk=c;}
var L_=F(0);
var Tm=F(0);
var UI=F(0);
var Gj=F();
function Jl(){Gj.call(this);this.vc=null;}
function AAy(){var a=this;Jl.call(a);a.w9=0;a.ks=0;a.ih=null;a.jZ=null;a.sC=null;}
function AMe(a,b){var c=new AAy();AQd(c,a,b);return c;}
function AQd(a,b,c){a.vc=b;b=new M;O(b);a.ih=b;a.jZ=BL(32);a.w9=c;AAm();a.sC=AVo;}
function TB(a,b,c,d){var e,$$je;e=a.vc;if(e===null)a.ks=1;if(!(a.ks?0:1))return;a:{try{e.jO(b,c,d);break a;}catch($$e){$$je=Ef($$e);if($$je instanceof Ip){}else{throw $$e;}}a.ks=1;}}
function NW(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ABh(b,c,d-c|0);e=E9(Bb(16,Z(e.length,1024)));g=AA8(e,0,e.data.length);h=a.sC;i=new Pe;b=E9(1);j=b.data;j[0]=63;G6();k=AVp;i.lh=k;i.ky=k;c=j.length;if(c&&c>=i.l4){i.vx=h;i.pt=b.eG();i.w2=2.0;i.l4=4.0;i.oH=BL(512);i.nm=E9(512);k=AVq;if(k===null){i=new BD;Bl(i,B(76));K(i);}i.lh=k;i.ky=k;a:while(true){if(i.ic==3){f=new DY;V(f);K(f);}i.ic=2;b:{while(true){try{k=Y6(i,f,g);}catch($$e){$$je=Ef($$e);if($$je instanceof Bo){f=$$je;break a;}else{throw $$e;}}if(Ib(k))
{d=B6(f);if(d<=0)break b;k=DZ(d);}else if(G3(k))break;h=!LV(k)?i.lh:i.ky;c:{if(h!==AVq){if(h===AVr)break c;else break b;}d=B6(g);b=i.pt;l=b.data.length;if(d<l){k=AVs;break b;}W5(g,b,0,l);}ED(f,f.V+J_(k)|0);}}l=G3(k);TB(a,e,0,g.V);NU(g);if(!l){while(true){d=i.ic;if(d!=2&&d!=4){f=new DY;V(f);K(f);}f=AVt;if(f===f)i.ic=3;l=G3(f);TB(a,e,0,g.V);NU(g);if(!l)break;}return;}}K(AHx(f));}i=new BD;Bl(i,B(77));K(i);}
function Br(a,b){var c,d,e,f,g,h,i,j;BA(B1(a.ih,b),10);b=a.ih;c=b.N;d=a.jZ;if(c>d.data.length)d=BL(c);e=0;f=0;if(e>c){b=new Bx;Bl(b,B(78));K(b);}while(e<c){g=d.data;h=f+1|0;i=b.A.data;j=e+1|0;g[f]=i[e];f=h;e=j;}NW(a,d,0,c);a.ih.N=0;}
function F9(){Gj.call(this);this.wU=null;}
function X9(a){a.wU=E9(1);}
var Ln=F(F9);
var AU5=null;function AKx(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function ACD(){var b;b=new Ln;X9(b);AU5=b;}
function DV(){var a=this;Cj.call(a);a.py=null;a.lv=null;a.eT=0;a.oI=0;a.g1=0;}
var AVl=null;var AVm=null;var AVu=null;function AQv(){AQv=Bm(DV);AJg();}
function AS8(a,b,c,d,e,f,g){var h=new DV();Wc(h,a,b,c,d,e,f,g);return h;}
function Wc(a,b,c,d,e,f,g,h){AQv();C_(a,b,c);a.py=d;a.lv=e;a.eT=f;a.oI=g;a.g1=h;}
function AJg(){var b;b=new DV;ABN();Wc(b,B(79),0,B(80),AVv,2,0,0);AVl=b;b=AS8(B(81),1,B(82),AVv,2,0,1);AVm=b;AVu=H(DV,[AVl,b]);}
function Jc(){var a=this;C.call(a);a.vm=null;a.wm=null;}
function ACV(b){var c,d;if(Fo(b))K(AAs(b));if(!ACY(L(b,0)))K(AAs(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ACY(d))break a;else K(AAs(b));}}c=c+1|0;}}
function ACY(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Md=F(Jc);
var AVo=null;function AAm(){AAm=Bm(Md);AIg();}
function ADc(a){var b,c;b=new TC;b.eQ=B(83);G6();c=AVp;b.gG=c;b.lp=c;b.wc=a;b.mc=0.3333333432674408;b.wx=0.5;b.ns=E9(512);b.r5=BL(512);return b;}
function AIg(){var b,c,d,e,f;b=new Md;AAm();c=Q(Bv,0);d=c.data;ACV(B(84));e=d.length;f=0;while(f<e){ACV(d[f]);f=f+1|0;}b.vm=B(84);b.wm=c.eG();AVo=b;}
var Ko=F();
var AVw=null;var AVn=null;function YP(){YP=Bm(Ko);ANg();}
function ANg(){var b,c;ABN();b=BC((AVx.eG()).data.length);c=b.data;AVn=b;c[AVy.cY]=1;c[AVv.cY]=2;ABP();c=BC((AVz.eG()).data.length);b=c.data;AVw=c;b[AVA.cY]=1;b[AVB.cY]=2;}
function O1(){var a=this;C.call(a);a.fh=null;a.lT=null;a.jB=null;a.sn=null;a.o4=null;a.pl=null;}
function AAD(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.fh,b,c));}
function MT(a,b){var c,d,e,f,g,h,i,$$je;c=new Bv;d=b;while(a.lT[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.fh,b,d));f=e.data;EL();d=f.length;AAm();g=AVo;h=AA8(e,0,d);a:{try{i=ADc(g);G6();g=Zs(AB$(ADJ(i,AVq),AVq),h);break a;}catch($$e){$$je=Ef($$e);if($$je instanceof FK){g=$$je;}else{throw $$e;}}h=new W_;h.iX=1;h.jh=1;h.hd=B(85);h.kz=g;K(h);}if(!g.V&&g.dp==g.lQ)c.bX=g.g0;else{f=BL(B6(g));e=f.data;c.bX=f;Np(g,f,0,e.length);}return c;}
function M1(a,b){var c,d,e;c=new Bv;d=b>>>1|0;e=d;while(a.jB[e]){e=e+1|0;}d=e-d|0;Hj(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.fh,b,d)));return c;}
var GM=F(Cj);
var AVy=null;var AVv=null;var AVx=null;function ABN(){ABN=Bm(GM);AHL();}
function AH$(a,b){var c=new GM();ADd(c,a,b);return c;}
function ADd(a,b,c){ABN();C_(a,b,c);}
function AHL(){var b;AVy=AH$(B(86),0);b=AH$(B(87),1);AVv=b;AVx=H(GM,[AVy,b]);}
var Gd=F(Cj);
var AVA=null;var AVB=null;var AVz=null;function ABP(){ABP=Bm(Gd);AIo();}
function ARH(a,b){var c=new Gd();Zn(c,a,b);return c;}
function Zn(a,b,c){ABP();C_(a,b,c);}
function AIo(){var b;AVA=ARH(B(88),0);b=ARH(B(89),1);AVB=b;AVz=H(Gd,[AVA,b]);}
var VL=F(D1);
function AC2(){BD.call(this);this.vB=null;}
function AAs(a){var b=new AC2();APL(b,a);return b;}
function APL(a,b){V(a);a.vB=b;}
var Mc=F(0);
function XA(){C.call(this);this.o_=null;}
function AOQ(a,b){a.o_.setPointerCapture(b.pointerId);}
function XB(){C.call(this);this.nQ=null;}
function AGi(a,b){a.nQ.releasePointerCapture(b.pointerId);}
function GX(){var a=this;C.call(a);a.lQ=0;a.V=0;a.dp=0;a.g_=0;}
function Wa(a,b){a.g_=(-1);a.lQ=b;a.dp=b;}
function ED(a,b){var c,d,e;if(b>=0&&b<=a.dp){a.V=b;if(b<a.g_)a.g_=0;return a;}c=new BD;d=a.dp;e=new M;O(e);BA(T(G(T(G(e,B(90)),b),B(91)),d),93);Bl(c,N(e));K(c);}
function B6(a){return a.dp-a.V|0;}
function DM(a){return a.V>=a.dp?0:1;}
var Sf=F(0);
var K7=F(GX);
function AD_(b){var c,d;if(b>=0)return ANI(0,b,BL(b),0,b,0);c=new BD;d=new M;O(d);T(G(d,B(92)),b);Bl(c,N(d));K(c);}
function ABh(b,c,d){return ANI(0,b.data.length,b,c,c+d|0,0);}
function Np(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bx;i=new M;O(i);T(G(T(G(i,B(93)),g),B(94)),f);Bl(h,N(i));K(h);}if(B6(a)<d){j=new LN;V(j);K(j);}if(d<0){j=new Bx;k=new M;O(k);G(T(G(k,B(95)),d),B(96));Bl(j,N(k));K(j);}g=a.V;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.g0.data[m+a.lD|0];l=l+1|0;c=n;m=o;}a.V=g+d|0;return a;}}b=b.data;j=new Bx;d=b.length;k=new M;O(k);BA(T(G(T(G(k,B(97)),c),B(91)),d),41);Bl(j,N(k));K(j);}
function J6(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.lU){b=new IZ;V(b);K(b);}e=d-c|0;if(B6(a)<e){b=new HT;V(b);K(b);}if(c>I(b)){f=new Bx;d=I(b);b=new M;O(b);BA(T(G(T(G(b,B(98)),c),B(91)),d),41);Bl(f,N(b));K(f);}if(d>I(b)){f=new Bx;c=I(b);b=new M;O(b);T(G(T(G(b,B(99)),d),B(100)),c);Bl(f,N(b));K(f);}if(c>d){b=new Bx;f=new M;O(f);T(G(T(G(f,B(98)),c),B(101)),d);Bl(b,N(f));K(b);}g=a.V;while(c<d){h=g+1|0;i=c+1|0;Sn(a,g,L(b,c));g=h;c=i;}a.V=a.V+e|0;return a;}
function JO(){var a=this;GX.call(a);a.kr=0;a.k9=null;a.wH=null;}
function AA8(b,c,d){var e,f,g;e=b.data;f=new W4;g=e.length;d=c+d|0;Wa(f,g);AKf();f.wH=AVC;f.kr=0;f.k9=b;f.V=c;f.dp=d;f.wL=0;f.mv=0;return f;}
function W5(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.mv){e=new IZ;V(e);K(e);}if(B6(a)<d){e=new HT;V(e);K(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bx;j=new M;O(j);T(G(T(G(j,B(102)),h),B(94)),g);Bl(i,N(j));K(i);}if(d<0){e=new Bx;i=new M;O(i);G(T(G(i,B(95)),d),B(96));Bl(e,N(i));K(e);}h=a.V;k=h+a.kr|0;l=0;while(l<d){b=a.k9.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.V=h+d|0;return a;}}b=b.data;e=new Bx;d=b.length;i=new M;O(i);BA(T(G(T(G(i,B(97)),c),B(91)),d),41);Bl(e,N(i));K(e);}
function NU(a){a.V=0;a.dp=a.lQ;a.g_=(-1);return a;}
function HC(){C.call(this);this.xD=null;}
var AVr=null;var AVq=null;var AVp=null;function G6(){G6=Bm(HC);ALG();}
function ADU(a){var b=new HC();ACR(b,a);return b;}
function ACR(a,b){G6();a.xD=b;}
function ALG(){AVr=ADU(B(103));AVq=ADU(B(104));AVp=ADU(B(105));}
var M8=F(CC);
function ALw(a){}
function AJ0(a,b,c){}
function CQ(){var a=this;CC.call(a);a.ga=null;a.s=null;}
function Fg(a,b){var c,d,e;EP(a,b);a.ga=ZN(0,0,64);c=new X7;c.b7=new Bk;c.dT=CH(Q(En,0));c.dQ=new Bk;c.nR=new Bk;c.ya=new BZ;c.x_=new BZ;c.cV=b.bk;d=b.bO;c.iy=d;c.cA=UE(d);d=b.m.jV;e=new Mx;e.m8=c;W(d,e);d=b.m.je;e=new My;e.qt=c;W(d,e);a.s=c;W(b.m.b3,new Sk);b=b.m.b3;c=a.s;BG(c);d=new Sl;d.rZ=c;W(b,d);}
function E3(a){Gw(a.bj.bk,a.ga);}
function GR(a,b,c){var d,e,f,g,h;a:{d=a.s;CA(d.b7,b);e=d.bM;if(e!==c){d.bM=c;f=(Co(d.dT)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].gi(e,c);h=h+1|0;}}}}
var Kf=F(0);
var Lb=F(0);
function L9(){var a=this;CQ.call(a);a.G=null;a.D=null;a.em=null;a.g5=0;a.rO=null;}
function ASn(a){var b=new L9();AA0(b,a);return b;}
function AA0(a,b){var c,d,e;Fg(a,b);c=ANv(a.s);a.em=c;a.G=ADL(a.s,c);a.D=ADL(a.s,a.em);AEf(a,1);c=a.G;c.bI=1;d=new QV;d.sH=a;e=new QT;e.ue=a;QA(c,d,d);QA(a.D,e,e);c=a.G;d=new QU;d.od=a;c.kF=d;d=a.D;e=new QR;e.rX=a;d.kF=e;W0(a.s,c);W(b.m.bt,a.em);W(b.m.df,a.em);W(b.m.df,a);W(b.m.bt,a);c=b.m.b3;d=new QS;d.mn=a;W(c,d);c=b.m.b3;d=new HE;e=new QP;e.p4=a;R_(d,b,e);W(c,d);W(b.m.fn,a);W(b.m.fR,a);b=b.m.ej;c=new QQ;c.tf=a;W(b,c);AAp(a);}
function Qn(a,b){if(a.G===b)a.g5=a.g5|1;if(a.D===b)a.g5=a.g5|2;if((a.g5&3)==3)ACn(a);}
function AJK(a,b,c){if(DW(a.s,a.G))return GA(a.G,b,c);if(!DW(a.s,a.D))return 0;return GA(a.D,b,c);}
function Zf(a){var b,c;if(DW(a.s,a.G)){b=a.G;BG(b);c=new SW;c.t0=b;return c;}if(!DW(a.s,a.D))return null;b=a.D;BG(b);c=new SX;c.qD=b;return c;}
function Wp(a,b,c){var d,e;d=10*b.U|0;if(I3(b.bm-c.bm|0)>d){e=b.bm;c.bm=Hx(Bb(e-d|0,Z(c.bm,e+d|0)),Iu(c));}c.cG=Hx(b.cG,Kj(c));}
function ACn(a){var b,c,d,e,f,g;Br(Bu(),B(106));b=a.G.e;c=a.D.e;d=EE(b.f);e=EE(c.f);f=AD9(b.f);g=AD9(c.f);b=a.bj.bO;c=new MM;c.ra=a;CO(b,c,B(107),H(C,[d,f,e,g]));}
function AEf(a,b){a.G.d4=b;a.D.d4=b;}
function AIn(a,b){var c,d;c=KZ(a.G,b);d=KZ(a.D,b);return !c&&!d?0:1;}
function AQo(a){E3(a);L$(a.G);L$(a.D);Wj(a.em);}
function VP(a){return XK(0);}
function AJo(a){X$(a.G);X$(a.D);}
function AOC(a){WP(a.G);WP(a.D);}
function APh(a,b){X_(a.G,b);X_(a.D,b);}
function AOe(a,b,c){GR(a,b,c);Y4(a,b,c);}
function Y4(a,b,c){var d,e,f;d=new Bk;e=BX(b.b/2|0,b.a);LC(a.G,d,e,c);f=b.b;d.b=f-(f/2|0)|0;LC(a.D,d,e,c);}
function AO9(a){JH(a,Kk());}
function AAp(a){JH(a,ABV());}
function APE(a){JH(a,AAX());}
function JH(a,b){BG(b);PB(a.em,b);Lf(a.G,b);Lf(a.D,b);}
function ABm(a,b){if(b.bh!=121)return 0;return 1;}
function ACx(a,b){var c,d,e;if(DW(a.s,a.G)){c=a.em;d=a.G;e=new P9;e.nl=a;KA(c,b,d,a,a,e);}if(DW(a.s,a.D)){c=a.em;d=a.D;e=new P$;e.q4=a;KA(c,b,d,a,a,e);}return 1;}
function ALE(a,b){var c,d;c=DF(a.G,b.h)&&Pk(a.G,b)?1:0;d=DF(a.D,b.h)&&Pk(a.D,b)?1:0;return !c&&!d?0:1;}
function ALA(a,b,c,d){var e,f;e=DF(a.G,b.h)&&QH(a.G,b,c,d)?1:0;f=DF(a.D,b.h)&&QH(a.D,b,c,d)?1:0;return !e&&!f?0:1;}
function AFP(a,b,c){var d,e,f,g,h,i,j,k;d=DF(a.G,b.h);e=DF(a.D,b.h);f=a.s;g=f.d6;h=g!==null?0:1;i=a.G;j=g!==i?0:1;k=g!==a.D?0:1;if(d&&!(!h&&!k))FO(f,i);if(e&&!(!h&&!j))FO(a.s,a.D);if(d){i=U5(a.G,b,c);if(i!==null)return i;}return !e?null:U5(a.D,b,c);}
function AIP(a,b,c){var d,e,f,g;d=DF(a.G,b.h);e=DF(a.D,b.h);f=d&&UX(a.G,b,c)?1:0;g=e&&UX(a.D,b,c)?1:0;return !f&&!g?0:1;}
function AND(a,b,c,d){var e,f,g,h;e=DF(a.G,b.h);f=DF(a.D,b.h);g=e&&JE(a.G,c,d)?1:0;h=f&&JE(a.D,c,d)?1:0;return !g&&!h?0:1;}
function ALg(a){return Zf(a);}
var VX=F(L9);
function V_(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new V5;d=d.then(Bj(e,"f"));f=new V6;f.oJ=b;f.p1=c;g=new V4;d.then(Bj(f,"f"),Bj(g,"f"));}
var AEc=F();
function APt(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(108)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(Li(b)){case -1570047148:if(!Bq(b,B(109)))break a;d=16;break a;case -1519338717:if(!Bq(b,B(110)))break a;d=2;break a;case -1509980539:if(!Bq(b,B(111)))break a;d=12;break a;case -1073555521:if(!Bq(b,B(112)))break a;d=13;break a;case -811765794:if(!Bq(b,B(113)))break a;d=5;break a;case -785237654:if(!Bq(b,B(114)))break a;d=10;break a;case -631889171:if(!Bq(b,B(115)))break a;d=8;break a;case -439438829:if
(!Bq(b,B(116)))break a;d=17;break a;case 2129957:if(!Bq(b,B(117)))break a;d=1;break a;case 3343967:if(!Bq(b,B(118)))break a;d=9;break a;case 3556498:if(!Bq(b,B(119)))break a;d=4;break a;case 485517998:if(!Bq(b,B(120)))break a;d=6;break a;case 544901384:if(!Bq(b,B(121)))break a;d=3;break a;case 1030621992:if(!Bq(b,B(122)))break a;d=15;break a;case 1465713255:if(!Bq(b,B(123)))break a;d=7;break a;case 1554501643:if(!Bq(b,B(124)))break a;d=14;break a;case 1609169232:if(!Bq(b,B(125)))break a;d=11;break a;default:}}b:
{switch(d){case 1:break;case 2:b=new Tc;break b;case 3:case 4:b=new Tb;break b;case 5:b=new Ta;break b;case 6:b=new S_;break b;case 7:b=new S$;break b;case 8:case 9:b=new S9;break b;case 10:b=new S8;break b;case 11:b=new S7;break b;case 12:b=new S6;break b;case 13:b=new QI;break b;case 14:b=new QE;break b;case 15:b=new QG;break b;case 16:b=new QC;break b;case 17:b=new QD;break b;default:b=new QB;break b;}b=new Td;}return b;}
var ABg=F();
var J1=F(K7);
function AA1(){var a=this;J1.call(a);a.lU=0;a.lD=0;a.g0=null;}
function ANI(a,b,c,d,e,f){var g=new AA1();ARQ(g,a,b,c,d,e,f);return g;}
function ARQ(a,b,c,d,e,f,g){Wa(a,c);a.V=e;a.dp=f;a.lD=b;a.lU=g;a.g0=d;}
function Sn(a,b,c){a.g0.data[b+a.lD|0]=c;}
function KT(){var a=this;C.call(a);a.vx=null;a.pt=null;a.w2=0.0;a.l4=0.0;a.lh=null;a.ky=null;a.ic=0;}
function LH(){var a=this;C.call(a);a.gf=0;a.hN=0;}
var AVt=null;var AVs=null;function Zb(a,b){var c=new LH();ZI(c,a,b);return c;}
function ZI(a,b,c){a.gf=b;a.hN=c;}
function Ib(a){return a.gf?0:1;}
function G3(a){return a.gf!=1?0:1;}
function KI(a){return !Qt(a)&&!LV(a)?0:1;}
function Qt(a){return a.gf!=2?0:1;}
function LV(a){return a.gf!=3?0:1;}
function J_(a){var b;if(KI(a))return a.hN;b=new Fh;V(b);K(b);}
function DZ(b){return Zb(2,b);}
function Vp(a){var b,c;switch(a.gf){case 0:b=new PY;V(b);K(b);case 1:b=new Xe;V(b);K(b);case 2:b=new Vi;c=a.hN;V(b);b.xX=c;K(b);case 3:b=new PM;c=a.hN;V(b);b.xQ=c;K(b);default:}}
function Z$(){AVt=Zb(0,0);AVs=Zb(1,0);}
var Y2=F();
var Ik=F(0);
var Nf=F();
function AIw(a,b){return b.arrayBuffer();}
var Ne=F();
function AMS(a,b){var c,d;c=new OZ;d=new OX;return $rt_globals.WebAssembly.instantiate(b,AKE(Bj(c,"f"),Bj(d,"f")));}
var Nd=F();
function ANB(a,b){AGd(b);}
var Nc=F();
function AGU(a,b){ADX(b);}
function XS(){C.call(this);this.ua=null;}
function AMA(a,b){J9(a.ua.G,b);}
function XY(){C.call(this);this.n4=null;}
function ANd(a,b){J9(a.n4.D,b);}
var Td=F();
function AM$(a,b){return ASn(b);}
var Tc=F();
function AFW(a,b){return AUa(b);}
var Tb=F();
function AJF(a,b){return ASs(b);}
var Ta=F();
function AJC(a,b){var c,d,e;c=new Wg;Fg(c,b);d=new U1;d.lx=new Bk;d.jT=new Bk;c.rg=d;c.dw=Y9();c.cI=Y9();c.d5=MO(c.s);W(c.s.dT,c);d=b.m.b3;e=new Tf;e.tm=c;W(d,e);W(b.m.bt,c);b=b.m.ej;d=new Ti;d.rY=c;W(b,d);SN(c.cI);c.lb=EQ(B(126),25.0);H4(c.d5,FW(),c.lb);BI(c.ga,C3(43));b=FW();H7(c.dw,b);H7(c.cI,b);b=c.dw;b.i$=new Th;d=c.cI;d.i$=new Te;d.js=new Xa;d.sX=new Xb;KS(b,(Nx(0)).iB);KS(c.cI,(Nx(0)).iB);return c;}
var S_=F();
function AKh(a,b){var c,d,e;c=new Xt;Fg(c,b);c.ki=EQ(B(127),15.0);d=AEg();c.ei=d;W(c.s.dT,d);W(c.s.dT,c);BI(c.ga,C3(43));d=MO(c.s);c.g6=d;H4(d,FW(),EQ(B(126),25.0));d=b.m.b3;e=new Ox;e.vu=c;W(d,e);d=b.m.ej;e=new Oy;e.p$=c;W(d,e);W(b.m.bt,Y8(c.g6));W(b.m.bt,c.ei);b=b.m.df;d=c.ei;BG(d);e=new Oz;e.tC=d;W(b,e);return c;}
var S$=F();
function AF3(a,b){var c,d,e;c=new Yd;Fg(c,b);c.fx=Cm();c.e2=Cm();c.ot=S(B(128));c.h8=APH();c.fT=0;d=c.s.dT;e=new T5;e.mi=c;W(d,e);W(b.m.bt,c);d=b.m.b3;e=new T6;e.p5=c;W(d,e);b=Hh(b.bk,B(126),35);c.i9=b;c.hQ=AD3(E0(b));BI(c.ga,S(B(129)));return c;}
var S9=F();
function AHH(a,b){var c,d,e,f;c=new O6;EP(c,b);c.fN=ABL();c.dZ=0;c.rP=500;c.ul=Hz(0,0,0,255,new BZ);c.ly=20;c.uC=20;c.oj=AAC();d=b.m.bt;e=new Wx;e.ix=c;f=new Yb;f.rx=e;e.qU=f;W(d,e);d=b.m.df;e=new SR;e.nC=c;W(d,e);c.d0=b.bk;c.sP=UE(b.bO);TI(c.fN,Hh(c.d0,B(126),c.uC),c.ly,c.d0);c.gF=Hl();return c;}
var S8=F();
function ANp(a,b){var c,d;c=new QX;Gi(c,b);b=b.m.b3;d=new PZ;d.un=c;W(b,d);return c;}
var S7=F();
function AQW(a,b){return ATO(b);}
var S6=F();
function ARO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new WY;Gi(c,b);c.dK=Fd(0,0,300,300);c.eO=SI(0,0,3,3);d=b.bk;b=b.m.bt;e=new TQ;e.kO=c;W(b,e);b=AAl(d);c.pp=b;Gf(c.dK,b);GZ(c.dK);b=c.dK.b2;G7();BI(b,AVD);BI(c.dK.bT,CL(204,120,50));ABP();e=AVB;f=E9((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CU(d);YP();switch(AVw.data[e.cY]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Ep;V(b);K(b);}b:
{M$(m,5,5,h);b=m.dX.dm;switch(AVw.data[e.cY]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Ep;V(b);K(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.j7=m;Bg(c.eO.y,Ce(m),C8(c.j7));BI(c.eO.b2,c.lk);return c;}
var QI=F();
function AK_(a,b){var c,d,e;c=new Sh;Gi(c,b);c.f$=Fd(0,0,300,300);c.jH=new Bk;c.h_=new Bk;c.hm=new Bk;d=b.bk;b=b.m.bt;e=new VW;e.jb=c;W(b,e);b=AAl(d);c.rs=b;Gf(c.f$,b);GZ(c.f$);b=c.f$.b2;G7();BI(b,AVD);BI(c.f$.bT,CL(204,120,50));return c;}
var QE=F();
function AEQ(a,b){var c,d,e,f;c=new OI;EP(c,b);c.wA=20;c.x$=11;c.wh=220;c.iU=new Bk;c.wY=5000;c.gs=1;c.fj=H(G8,[C3(0),C3(255)]);c.d9=b.bk;d=b.m.bt;e=new Ud;e.i4=c;f=new Pv;f.mS=e;e.pF=f;W(d,e);b=b.m.df;d=new NS;d.tG=c;W(b,d);b=CK(c.d9,200,220);c.jA=b;FZ(b,B(126),20.0);b=CK(c.d9,200,20);c.e9=b;FZ(b,B(126),20.0);c.hw=Hl();return c;}
var QG=F();
function AIs(a,b){var c,d,e;c=new It;Gi(c,b);W(b.m.bt,c);d=b.m.b3;e=new Su;e.rB=c;W(d,e);W(b.m.fn,new St);d=b.m.fn;e=new Sr;e.pc=c;W(d,e);W(b.m.fR,new Sq);d=b.m.fR;e=new Ss;e.mX=c;W(d,e);b=!XE(b.bO)?B(130):B(131);d=new M;O(d);G(G(d,B(132)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var QC=F();
function ALr(a,b){var c,d,e,f,g,h,i,j;c=new P2;EP(c,b);c.m6=C3(20);c.e3=Fd(0,0,300,300);d=b.m.b3;e=new RZ;e.xE=c;W(d,e);b=b.bk;d=Hh(b,B(10),88);Cy(b.cB,d);f=Eo(b.cB,B(133));g=Eo(b.cB,B(134));if(f>g)g=f;h=Dg(g);i=J3(d,1.1799999475479126);j=Bu();e=new M;O(e);T(G(T(G(e,B(135)),h),B(136)),i);Br(j,N(e));e=CK(b,h,i*2|0);c.hR=e;Cy(e,d);Ch(c.hR,B(133),0.0,d.dt);Ch(c.hR,B(134),0.0,i+d.dt);b=CU(b);c.lc=b;CM(b,c.hR);Gf(c.e3,c.lc);GZ(c.e3);b=c.e3.b2;G7();BI(b,AVD);BI(c.e3.bT,AVE);return c;}
var QD=F();
function AO$(a,b){var c,d,e,f;c=new Wy;Fg(c,b);c.sO=EQ(B(127),20.0);d=AEg();c.d1=d;W(c.s.dT,d);W(c.s.dT,c);BI(c.ga,C3(43));d=MO(c.s);c.gA=d;H4(d,FW(),EQ(B(126),25.0));d=b.m.b3;e=new Qo;e.xB=c;W(d,e);d=b.m.ej;e=new Qp;e.qb=c;W(d,e);W(b.m.bt,Y8(c.gA));W(b.m.bt,c.d1);d=b.m.bt;e=c.s.cA;f=new Rt;f.l$=e;W(d,f);b=b.m.df;d=c.d1;BG(d);e=new Qq;e.rD=d;W(b,e);return c;}
var QB=F();
function AEF(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=new Rg;Ym(c,b);d=c.cJ;e=new Iv;f=AJi(B(137));g=Q(Bv,8);h=I(B(138));i=0;j=0;k=h+1|0;while(true){l=GC(B(138),10,j);m=l>=0?B$(B(138),j,l):Dk(B(138),j);n=i+1|0;g=AC6(m,g,i);j=l<0?k:l+1|0;if(j>h)break;i=n;}Qr(e,ZG(g,n),B(139),f);J9(d,e);return c;}
function G5(){var a=this;C.call(a);a.bC=0;a.cf=0;a.cX=0;a.iA=0;}
function AVF(a,b,c,d){var e=new G5();Up(e,a,b,c,d);return e;}
function Up(a,b,c,d,e){a.bC=d;a.cf=b;a.cX=c;a.iA=e;}
function OP(){var a=this;G5.call(a);a.dE=null;a.bh=0;a.hg=0;a.rA=0;a.jD=0;}
var ADh=F();
function Wn(b,c){return (b+(c/2|0)|0)/c|0;}
function PD(b,c,d){if(b<(2147483647/c|0))return Wn(Ba(b,c),d);return 0.5+c*b/d|0;}
function IB(b,c){return ((b+c|0)-1|0)/c|0;}
function Hc(b){return b+0.5|0;}
function Dg(b){return b+0.5|0;}
function Et(b,c,d){return Bb(b,Z(c,d));}
function Mn(){var a=this;G5.call(a);a.h=null;a.vn=null;}
var Ui=F(0);
function NA(){var a=this;C.call(a);a.t6=null;a.t7=null;}
function AK3(a,b){var c,d;c=a.t6;d=a.t7;$rt_globals.console.info("paste plain string "+b);c.l(FA(b));Dh(d);}
function U2(){C.call(this);this.uG=null;}
function Wm(a,b){a.uG.clipboardData.setData("text/plain",$rt_ustr(b));}
function W4(){var a=this;JO.call(a);a.wL=0;a.mv=0;}
function ACF(){var a=this;C.call(a);a.dY=null;a.dM=null;a.dk=null;a.b8=null;a.ba=null;}
function ANv(a){var b=new ACF();AKy(b,a);return b;}
function AKy(a,b){a.dM=AEg();a.dY=b;a.b8=MO(b);}
function PB(a,b){var c;a.ba=b;c=a.dk;if(c!==null)c.ec=b.T;H4(a.b8,b.T,b.qi);}
function Wj(a){I5(a.dM,a.dY.cV);Im(a.b8);}
function AOl(a,b){return !Zo(a.dM,b)&&!Ku(a.b8,b)?0:1;}
function ARU(a,b,c,d){return !ABe(a.dM,b,c,d)&&!Jk(a.b8,b,c,d)?0:1;}
function AGj(a,b,c){var d;d=Jf(a.b8,b,c);if(d!==null)return d;return Yk(a.dM,b,c);}
function AMQ(a,b,c){return !AEe(a.dM,b,c)&&!DI(a.b8)?0:1;}
function Vg(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.e;h=ANx();i=c.i;j=0;while(j<i){if(f===null){k=(Bp(c,j)).bs;l=RT(EJ(B2(g.f,k)));m=VH(g.fQ);}else{n=f.data;k=n[j].jP.kv;l=!C6(g.fQ,n[j].hW)?B(31):RT(EJ(B2(g.f,k)));m=VH(n[j].hW);}if(I(l)>153){o=B$(l,0,150);n=new M;O(n);G(G(n,o),B(140));l=N(n);}if(I(m)>153){o=B$(m,0,150);n=new M;O(n);G(G(n,o),B(140));m=N(n);}p=C5(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Bp(c,j);}if(f!==null){q=new Us;q.m1=d;q.m0=o;}else{q=new Uu;q.vi=d;q.vd=n;}M4(h,
m,p,l,q);j=j+1|0;}r=QO(h);if(a.dk!==null)T8(a);c=new QW;n=a.dY;o=new Sw;o.ol=a;o.ok=d;AAn(c,n,o);VZ(c,r);d=a.ba;XQ(c,d.T,d.sV);a.dk=ABI(a.dY);d=Zv(c,a.dY);n=a.ba.T;Qx(d,n.lw,n.jX);LK(a.dk,d);d=a.dk;n=new M;O(n);G(G(n,B(141)),e);IC(d,N(n),a.ba.pe,4.0);d=a.dk;d.ec=a.ba.T;IS(a.dM,d);d=a.dk;s=(d.S.q.a+Cv(d.bp,2.0)|0)+Cv(a.dY,2.0)|0;i=(c.dJ+c.dL|0)+c.fO|0;t=Cv(c.cv,5.0);e=BX(Et(t,b.b,c.cv.b7.b-i|0),Et(s,b.a,c.cv.b7.a-c.cE.a|0));Tp(c);ZJ(c);s=(c.dJ+c.dL|0)+c.fO|0;b=c.cv;i=(b.b7.b-e.b|0)-Cv(b,5.0)|0;b=c.cv;t=(b.b7.a
-e.a|0)-Cv(b,5.0)|0;d=BX(Z(s,i),Z(c.cE.a,t));Fm(a.dk,e,d);FO(a.dY,c);}
function T8(a){J7(a.dM,a.dk);JT(a.dk);a.dk=null;}
function No(a,b){var c;c=new Sm;c.tt=a;c.tx=b;return c;}
function KA(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(!DI(a.b8)){g=a.b8;h=b.h;b=new SV;b.W=a;b.bH=c;b.n9=f;b.hG=e;b.ir=d;i=PL();e=b.bH.e;d=Do(e);e=GV(e);f=b.bH.el;if(VF(f,d,e)!==null){j=b.W.ba.T.bg;k=new Rx;k.nI=b;k.nH=h;D3(i,B(142),j,k);}if(KQ(f,d,e)!==null){j=b.W.ba.T.bg;k=new Rw;k.oV=b;k.oX=h;D3(i,B(143),j,k);}if(Nl(f,d,e)!==null){e=b.W.ba.T.bg;f=new Ru;f.mZ=b;f.m2=h;D3(i,B(144),e,f);}e=b.W.ba.T.bg;f=new Rv;f.u1=b;f.u2=h;D3(i,B(145),e,f);if(!b.bH.d4){e=b.W.ba.T.bg;f=new Pr;f.tw=b;D3(i,B(146),e,f);}e=b.W.ba.T.bg;f
=new Pp;f.p6=b;D3(i,B(147),e,f);if(!b.bH.d4&&XE(IA(b))){e=b.W.ba.T.bg;f=new Ps;f.su=b;D3(i,B(148),e,f);}l=b.W.ba.T.bg;d=PL();m=b.W.ba.T.bg;n=Q(C$,3);o=n.data;k=b.ir;BG(k);e=new SP;e.nN=k;o[0]=D4(B(149),m,e);k=b.W.ba.T.bg;p=b.ir;BG(p);e=new SQ;e.rl=p;o[1]=D4(B(150),k,e);e=b.W.ba.T.bg;j=b.ir;BG(j);k=new SO;k.u$=j;o[2]=D4(B(151),e,k);Jz(d,B(152),m,FQ(n),AVG);f=b.W.ba.T.bg;n=Q(C$,2);o=n.data;k=b.hG;BG(k);j=new N_;j.rL=k;o[0]=D4(B(153),f,j);j=b.W.ba.T.bg;k=b.hG;BG(k);p=new N$;p.qx=k;o[1]=D4(B(154),j,p);GF(d,B(155),
f,FQ(n));f=b.W.ba.T.bg;j=new Vd;j.q9=b;Jz(d,B(156),f,j,AVG);GF(i,B(157),l,Hm(d));k=b.W.ba.T.bg;d=PL();GF(d,B(158),b.W.ba.T.bg,AEx(b));f=b.W.ba.T.bg;m=new We;m.sJ=b;D3(d,B(159),f,m);GF(i,B(160),k,Hm(d));F_(g,h,Hm(i),No(a,c));}}
function ALi(a,b,c,d){return La(a.dM,b,c,d);}
function YT(b){var c;c=new V1;c.tP=b;return c;}
var HM=F(0);
function AHk(a){}
function AR1(a){}
function AAE(){var a=this;C.call(a);a.bd=null;a.cz=null;a.cg=null;a.Q=null;a.ii=null;a.ri=0;a.lo=null;a.cM=null;a.w=0;a.x=0;a.gX=0;a.kK=0;a.fW=0;a.iQ=null;a.eJ=null;a.cx=null;a.U=0;a.e=null;a.u0=null;a.el=null;a.r=null;a.fs=null;a.er=null;a.lX=null;a.gk=null;a.tR=0;a.rV=0;a.rR=0;a.cH=0;a.cU=0;a.ck=0;a.eX=null;a.eh=null;a.ee=null;a.bm=0;a.cG=0;a.g2=0;a.hS=0;a.hH=0;a.vY=0;a.vq=0;a.i_=0;a.kC=0;a.dR=null;a.hD=0;a.hC=0;a.eI=null;a.d4=0;a.bI=0;a.h6=null;a.hV=null;a.vD=null;a.gK=null;a.nt=null;a.va=null;a.kF=null;a.kE
=0;a.rf=null;a.eL=Em;a.ti=null;a.tJ=null;}
function ADL(a,b){var c=new AAE();AJ2(c,a,b);return c;}
function AJ2(a,b,c){var d,e,f,g;a.bd=new Bk;a.cz=new Bk;a.ri=0;a.lo=Q(Bh,10);a.cM=AMN();a.fW=16;a.iQ=B(126);a.cx=Q(K6,4);d=new Iv;e=new HK;e.d_=Gv();e.ev=Gv();e.fg=Cm();e.C=MP(B(31));e.fz=0;e.cs=0;e.c_=T$(e);d.f=e;d.iP=B(161);d.fQ=null;a.e=d;f=new VY;f.mU=CH(Q(Mf,0));f.sE=CH(Q(Mf,0));f.s2=CH(Q(MA,0));f.om=CH(Q(P3,0));f.mh=CH(Q(GS,0));f.rm=CH(Q(Ro,0));a.el=f;a.r=ANi();e=new Nj;e.eE=Q(Jh,16);e.eF=0;e.dd=(-1);a.fs=e;a.gk=Q(EU,0);a.rR=100;a.eX=BX(1,0);a.eh=Hl();a.ee=Hl();a.bm=0;a.cG=0;a.g2=0;a.hH=1;a.i_=1;a.kC=
3;a.dR=ABL();a.eI=B(162);a.d4=0;a.bI=0;a.h6=null;a.hV=Cm();e=Iw();BG(e);f=new UQ;f.xY=e;a.gK=f;a.rf=new BZ;e=new UP;e.q5=a;a.ti=e;e=new UL;e.nq=a;a.tJ=e;a.cg=b;a.Q=b.cV;a.ii=c;g=a.lo.data;b=new UK;b.th=a;g[0]=b;b=new UN;b.rt=a;g[1]=b;b=new UM;b.nM=a;g[2]=b;b=new Vb;b.tF=a;g[3]=b;b=new Va;b.qq=a;g[4]=b;AE_();a.hS=AVH===AVI?0:1;}
function LC(a,b,c,d){CA(a.bd,b);CA(a.cz,c);RW(a,b,c,d);}
function QA(a,b,c){a.nt=b;a.va=c;}
function RW(a,b,c,d){var e;a.cH=B_(a.rR,d);a.cU=B_(1.0,d);a.ck=B_(10.0,d);if(!a.bI)CA(a.cg.dQ,a.bd);else Bg(a.cg.dQ,(b.b+c.b|0)-Ll(a)|0,b.a);Vq(a.dR,a.cg.dQ,Ll(a),c.a,d);b=a.cM;e=B_(2.0,d);b.dN.y.b=e;T2(a,a.iQ,a.fW);VJ(a);}
function AIb(a){a.kK=1;LE(a);}
function AGR(a){a.kK=0;}
function LE(a){Sp(a.cM,Jp(Ck(a)));}
function Lf(a,b){var c,d;a.er=b;c=a.cM;d=b.cu.s$;BI(c.dN.bT,d);c=a.eh;d=b.cu;Gc(c,d.lM,d.lr);c=a.ee;b=b.cu;Gc(c,b.lM,b.lr);}
function X$(a){K$(a,a.eJ.lO,a.fW+1|0);}
function WP(a){var b;b=a.fW;if(b<=7)return;K$(a,a.eJ.lO,b-1|0);}
function X_(a,b){K$(a,b,a.fW);}
function K$(a,b,c){if(a.cg.bM!==0.0){T2(a,b,c);F1(Ck(a));}a.fW=c;a.iQ=b;}
function T2(a,b,c){var d,e,f,g,h,i;d=B_(c,a.cg.bM);e=a.eJ;f=e!==null?e.oG:0;if(!(d==f&&C6(b,a.iQ))){NT(a.dR);g=a.gk.data;c=g.length;f=0;while(f<c){Qk(g[f]);f=f+1|0;}g=a.e.f.C.data;c=g.length;f=0;while(f<c){Ee(g[f]);f=f+1|0;}g=a.cx.data;c=Hg(0,0);e=a.Q;h=d;g[c]=GN(e,b,h,400,0);a.cx.data[Hg(0,1)]=GN(a.Q,b,h,400,2);a.cx.data[Hg(1,0)]=GN(a.Q,b,h,700,0);a.cx.data[Hg(1,1)]=GN(a.Q,b,h,700,2);e=a.cx.data[Hg(0,0)];a.eJ=e;c=E0(e);a.U=Dg(c*1.25);a.cM.dN.y.a=E0(a.eJ);a.lX=CG(a.lX,CK(a.Q,1024,a.U));f=a.U;i=SH(a.cM);e=new M;O(e);b
=G(G(e,B(163)),b);BA(b,32);T(G(T(G(T(G(T(b,d),B(164)),c),B(136)),f),B(165)),i);$rt_globals.console.info($rt_ustr(N(e)));if(AVJ){c=Lc(a.eJ,a.U);b=new M;O(b);T(G(b,B(166)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.gX=GW(Fs(a),a.x,a.Q.cB,a.cx);GO(a);VJ(a);}}
function U6(a){return Ba(Cp(a.e.f)+5|0,a.U);}
function Iu(a){return Bb(U6(a)-a.cz.a|0,0);}
function Kj(a){return Bb(a.g2-Df(a)|0,0);}
function Df(a){var b;b=!a.bI?0:C1(a)+a.ck|0;return (a.cz.b-a.cH|0)-b|0;}
function Ll(a){return a.bI?a.cH:a.cH-a.ck|0;}
function DH(a){return a.cz.a;}
function KZ(a,b){var c,d,e;c=a.e.f;d=c.fz;e=c.cs;d=d!=e&&b-c.pk>0.03125?1:0;if(d&&a.kE!=e){a.kE=e;SK(a);}d=Hx((a.bm+a.vY|0)-a.vq|0,Iu(a));e=a.bm==d?0:1;if(e)E7(a,d);return !SY(a.cM,b)&&!e&&!a.ri?0:1;}
function E7(a,b){var c,d;c=Hx(b,Iu(a));if(c!=a.bm){a.bm=c;d=a.va;if(d!==null)d.hL(c);}}
function Id(a,b){var c,d;c=Hx(b,Kj(a));if(c!=a.cG){a.cG=c;d=a.nt;if(d!==null)d.hL(c);}}
function L$(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=IB(a.cz.a,a.U)+7|0;c=a.gk;if(c.data.length<b)a.gk=AAo(b,c,a.tR,a.rV,a.e.f);CJ(a.Q,0);d=a.Q;e=a.bd;f=a.cz;Lx(d,e.b,e.a,f);g=(a.U-SH(a.cM)|0)/2|0;h=(a.gX-(Qb(a.cM)/2|0)|0)-a.cG|0;i=!a.bI?a.cH:(a.cU+a.ck|0)+C1(a)|0;PJ(a.cM,i+h|0,(g+Ba(a.w,a.U)|0)-a.bm|0);j=Cp(a.e.f);ZP(a);k=K4(a);l=U3(a);a.tR=k;a.rV=l;m=a.cg.dQ;Bg(m,Df(a),a.U);n=!a.bI?a.bd.b+a.cH|0:((a.bd.b+a.cU|0)+a.ck|0)+C1(a)|0;o=k;while(o<=l&&o<j){e=B2(a.e.f,o);p=Q6(a,o);ABE(p,e,a.lX,a.cx,
a.Q,a.U,Df(a),a.cG);q=p.bV;a.g2=Bb(a.g2,EZ(e)+(40.0*a.cg.bM|0)|0);r=Ba(a.U,o)-a.bm|0;i=a.bd.a+r|0;f=a.Q;s=a.rf;t=!a.hS?0.0:0.5;r=Df(a);u=a.U;v=a.cG;w=a.er;d=ACX(a.r,o);if(d!==null){if(d.a==(-1))d.a=q.R;d.b=GW(q,d.b,a.Q.cB,a.cx);d.a=GW(q,d.a,a.Q.cB,a.cx);}AAK(p,i,n,f,s,m,t,r,u,v,w,d,a.h6,a.hV,a.w!=o?0:1);o=o+1|0;}o=k;while(o<=l&&o<j&&a.i_){d=Q6(a,o);r=Ba(a.U,o)-a.bm|0;u=ZT(a.r,o);e=a.er.cu;f=e.n5;v=a.w!=o?0:1;if(u)f=e.kA;else if(v)f=e.iM;ACc(d,a.Q,n,a.bd.a+r|0,a.U,m,a.cG,Df(a),f);if(v){a.eX.b=a.bI?a.ck+C1(a)
|0:a.ck-Cv(a.cg,3.0)|0;d=a.eX;d.a=a.U;x=a.bI?0:(a.cH-a.ck|0)+a.cU|0;e=a.Q;f=a.bd;By(e,f.b+x|0,f.a+r|0,d,a.er.cu.iM);}o=o+1|0;}if(a.kK&&h>=(( -Qb(a.cM)|0)/2|0)){e=a.cM;d=a.cz;if(Zj(e.dN.P,0,0,d))U9(a.cM,a.Q,a.bd);}if(a.hH){y=Z(l+1|0,j);ABJ(a,Ba(a.U,y)-a.bm|0);}AAT(a,k,l);ACp(a);AC8(a);Iy(a.Q);}
function AAT(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cz.a;e=Z(d,Ba(Cp(a.e.f),a.U)-a.bm|0);f=a.dR;g=a.bm;h=a.w;i=a.Q;j=a.er.qc;JZ(f,i,b,d);XM(f,b);Qy(f,g,e,j,i);if(e<d){k=f.fL;By(i,k.b,k.a+e|0,BX(f.e5.b,d-e|0),j.g9);}if(b<=h&&h<=c){c=h/20|0;k=f.cw;k=Bp(k,c%k.i|0);l=f.fL;c=Ba(f.cw.i,f.id);b=k.ew.a;d=((k.iN.a-(g%c|0)|0)+c|0)%c|0;if((d+b|0)>c)d= -(g%C8(k.b0)|0)|0;b=h%k.dH|0;e=k.et;d=d+Ba(b,e)|0;if(d<( -e|0))d=d+c|0;Bg(k.gb,k.ew.b,e);m=k.fE;b=h%k.dH|0;c=k.et;CE(m,0.0,Ba(b,c),k.ew.b,c);I0(k,i,d,l,j.op,j.uf);}}
function K4(a){return Z(a.bm/a.U|0,Cp(a.e.f)-1|0);}
function U3(a){return Z(((a.bm+DH(a)|0)-1|0)/a.U|0,Cp(a.e.f)-1|0);}
function VJ(a){TI(a.dR,a.cx.data[0],a.U,a.Q);JZ(a.dR,a.Q,K4(a),DH(a));}
function Q6(a,b){var c;c=a.gk.data;return c[b%c.length|0];}
function AEo(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dq(a.r))Db(a,a.eI);else{b=D2(a.r);c=Fx(a.r);d=c.L;e=b.L;f=(d-e|0)+1|0;g=BC(f);h=g.data;i=Q(Bv,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.eI;e=e+1|0;k=f;}l=ES(a.w,a.x);m=new UF;m.sS=a;Pf(a,g,0,0,i,l,m);b.bb=b.bb+I(a.eI)|0;c.bb=c.bb+I(a.eI)|0;LW(a,a.x+I(a.eI)|0,0);DX(a);}return 1;}
function AB8(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dq(a.r)){b=B2(a.e.f,a.w);if(b.o.data.length>0){c=RR(a,b);if(c===null)return 1;d=a.e.f;e=a.w;f=ES(e,a.x);d.cs=d.cs+1|0;g=d.fg;h=Q(GY,1);h.data[0]=AFc(e,0,1,c,f.bs,f.bE);B0(g,h);JG(d,e,0,1,c);FR(b,0,I(c));LW(a,a.x-I(c)|0,0);}}else{f=D2(a.r);c=Fx(a.r);i=c.L;j=f.L;i=(i-j|0)+1|0;k=BC(i);h=k.data;l=Q(Bv,i);m=l.data;e=a.x;n=a.w;o=0;while(j<=c.L){b=B2(a.e.f,j);if(b.o.data.length>0){b=RR(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=L8(k,o);h=Dl(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.L)f.bb=Bb(0,f.bb-I(b)|0);if(j==c.L){c.bb=Bb(0,c.bb-I(b)|0);LW(a,a.x-I(b)|0,0);}i=i+1|0;}f=ES(n,e);b=new Xm;b.oM=a;Pf(a,p,0,1,h,f,b);}DX(a);return 1;}
function RR(a,b){var c,d,e,f;c=Et(0,I(a.eI),Xh(b));if(!c)b=null;else{b=B(59);if(c<0){b=new BD;V(b);K(b);}if(c!=1){d=b.bX.data.length;if(d&&c){e=BL(Ba(d,c));d=0;f=0;while(f<c){PC(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=Mg(e);}else b=AUN;}}return b;}
function Pf(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BC(i);k=AUi(i).data;Hq(j,c);c=0;l=k.length;if(c>l){f=new BD;V(f);K(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.f;o.cs=o.cs+1|0;p=Q(GY,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AFc(h[m],n[m],k[m],b[m],f.bs,f.bE);m=m+1|0;}B0(o.fg,p);c=0;while(c<i){b=e.data;JG(o,h[c],n[c],k[c],b[c]);g.lV(FX(h[c]),b[c]);c=c+1|0;}}
function ADH(a){var b,c,d,e,f,g,h,i;if(Dq(a.r))GD(a);Ee(B2(a.e.f,a.w));b=a.e.f;c=a.w;d=a.x;e=b.C;f=e.data;g=f[c];e=Dl(e,f.length+1|0);f=e.data;b.C=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DO(Q(B7,0));b.C.data[c+1|0]=g;}else if(d==g.R){f[c]=g;f[c+1|0]=DO(Q(B7,0));}else{f=(IF(g,d)).data;e=b.C.data;e[c]=f[0];e[c+1|0]=f[1];}Gs(b,c,d,0,B(167));DX(a);return CB(a,a.w+1|0,0,0);}
function ADm(a){if(Dq(a.r))GD(a);else O7(a.e.f,a.w,a.x);GO(a);DX(a);return 1;}
function Yx(a){var b,c,d;if(Dq(a.r)){GD(a);return 1;}b=a.x;if(!b&&!a.w)return 1;if(b){c=a.w;b=b-1|0;O7(a.e.f,c,b);}else{c=a.w-1|0;b=Fk(a.e.f,c);d=a.e.f;K1(d,c);Gs(d,c,Fk(d,c),1,B(167));}DX(a);return CB(a,c,b,0);}
function Db(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.d4)return 0;if(Dq(a.r))GD(a);c=LT(Vc(b,B(168),B(31)),B(167),(-1));d=c.data;b=a.e.f;e=a.w;f=a.x;X4(b,e,f,c);g=d.length;if(!g)h=AUN;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BL(i+Ba(g-1|0,I(B(167)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(167))){m=l+1|0;c[l]=L(B(167),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Mg(k);}Gs(b,e,f,0,h);e=a.w;m=(e+g|0)-1|
0;CB(a,m,m!=e?I(d[g-1|0]):a.x+I(d[0])|0,0);E6(a);DX(a);return 1;}
function GD(a){var b,c,d;b=D2(a.r);c=a.e.f;d=a.r;Tx(c,d,Wb(c,d));CB(a,b.L,b.bb,0);E6(a);DX(a);}
function E6(a){var b;b=a.r;b.c0=0;B4(b.bP,a.w,a.x);B4(a.r.bF,a.w,a.x);}
function C1(a){return a.eJ.lB|0;}
function ABJ(a,b){var c,d,e;c=a.cz.a;if(b<c){d=a.cg.dQ;d.a=c-b|0;d.b=!a.bI?Df(a):Df(a)+a.cU|0;e=!a.bI?a.bd.b+a.cH|0:(a.bd.b+a.ck|0)+C1(a)|0;By(a.Q,e,a.bd.a+b|0,d,a.er.cu.gu);}}
function ACp(a){var b;b=a.bI?a.bd.b+C1(a)|0:a.bd.b+a.cz.b|0;Is(a.eh,a.bm,a.bd.a,DH(a),U6(a),b,C1(a));b=!a.bI?a.bd.b+a.cH|0:((a.bd.b+a.cU|0)+a.ck|0)+C1(a)|0;Mo(a.ee,a.cG,b,Df(a),a.g2,a.bd.a+DH(a)|0,C1(a));}
function AC8(a){var b,c;b=PH(a.eh);c=PH(a.ee);if(!(!b&&!c)){CJ(a.Q,1);if(b)FT(a.eh,a.Q);if(c)FT(a.ee,a.Q);if(b)Gb(a.eh,a.Q);if(c)Gb(a.ee,a.Q);}}
function ZP(a){var b,c,d,e;b=a.eX;c=a.cz;b.a=c.a;b.b=a.cU;d=!a.bI?a.cH-a.ck|0:(c.b-Ll(a)|0)-a.cU|0;b=a.Q;c=a.bd;By(b,c.b+d|0,c.a,a.eX,a.er.cu.uZ);a.eX.b=!a.bI?a.ck-a.cU|0:a.ck+C1(a)|0;e=a.bI?0:(a.cH-a.ck|0)+a.cU|0;b=a.Q;c=a.bd;By(b,c.b+e|0,c.a,a.eX,a.er.cu.gu);}
function Hx(b,c){return Z(Bb(0,b),c);}
function HD(a,b){var c,d,e,f,g;b=b.data;$rt_globals.console.info("onFileParsed");a.hD=1;a.hC=1;c=D6(b[0]);d=FG(b[1]);e=(D6(b[2])).data[0];a.e.f=ABO(c,d);Wl(a,ADr(e));Go(Ck(a),AVK);F1(Ck(a));f=Kr(FC(),a.eL);g=new M;O(g);G(HR(G(g,B(169)),f),B(170));$rt_globals.console.info($rt_ustr(N(g)));g=a.kF;if(g!==null)g.l(a);}
function Wl(a,b){var c,d;c=Do(a.e);if(!C6(c,b)){d=new M;O(d);G(G(G(G(d,B(171)),c),B(172)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.iP=b;}}
function Ck(a){return a.cg.iy;}
function KG(a,b){var c,d,e,f,g,h;c=Ey(b);d=new M;O(d);G(G(d,B(173)),c);$rt_globals.console.info($rt_ustr(N(d)));Nr(Ck(a),Ey(b));CB(a,0,0,0);a.eL=FC();a.hD=0;a.hC=0;e=new Iv;f=Q(Bv,1);f.data[0]=B(31);AEh(e,f,AT9(B(31),B(31),Ey(b),null));a.e=e;CB(a,0,0,0);c=Ey(b);g=FY(c,46,I(c)-1|0);if(g!=(-1))c=Dk(c,g);h=!Bq(c,B(174))?5120:10240;c=new Ry;c.nF=a;c.nE=h;c.nD=b;d=b.e0;if(d!==null)JB(c,JA(b,d.size));else{d=b.gw.getFile();e=new TA;e.l1=b;e.l2=c;b=new TD;b.uj=c;d.then(Bj(e,"f"),Bj(b,"f"));}}
function Hu(a,b,c,d,e){if(Hn(a,e))return 1;if(c&&d)return 1;if(c)E7(a,a.bm+((Ba(b,a.U)*12|0)/10|0)|0);else if(!d){IK(a,a.w+b|0,e);Tr(a);}return 1;}
function Uc(a,b,c,d){var e,f,g;if(Hn(a,d))return 1;e=Fs(a);if(!c)f=a.x+b|0;else if(b>=0)f=GP(e,a.x);else{f=a.x;if(!f)f=(-1);else{c=Io(e,f);if(c>0&&e.dn.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.dn.data[c-1|0];}}if(f>e.R){if((a.w+1|0)<Cp(a.e.f))CB(a,a.w+1|0,0,d);}else if(f>=0)Dr(a,f,d);else{b=a.w;if(b>0){g=(B2(a.e.f,b-1|0)).R;CB(a,a.w-1|0,g,d);}}Pt(a);return 1;}
function Hn(a,b){if(Dq(a.r)&&!b){E6(a);GO(a);return 1;}if(!(b&&Dq(a.r)))E6(a);return 0;}
function CB(a,b,c,d){a.x=c;return IK(a,b,d);}
function IK(a,b,c){a.w=Et(0,b,Cp(a.e.f)-1|0);return Dr(a,a.x,c);}
function Dr(a,b,c){a.x=Et(0,b,(Fs(a)).R);a.gX=a.cg.bM===0.0?0:GW(Fs(a),a.x,a.Q.cB,a.cx);LE(a);GO(a);if(c)a.r.c0=1;KH(a.r,a.w,a.x);a.r.c0=0;return 1;}
function LW(a,b,c){var d;d=RC(a.r);Dr(a,b,c);a.r=d;}
function GO(a){Tr(a);Pt(a);}
function Tr(a){var b,c,d,e,f;b=a.bm;c=b+DH(a)|0;d=a.w;e=a.U;d=Ba(d,e);f=d+e|0;if(d<(b+e|0))E7(a,d-e|0);else if(f>(c-e|0))E7(a,(f-DH(a)|0)+a.U|0);}
function Pt(a){var b,c,d,e,f;b=Dg(a.cg.bM*30.0);c=a.cG;d=c+Df(a)|0;e=a.gX;f=e+b|0;if(e<(c+b|0))Id(a,e-b|0);else if(f>(d-b|0))Id(a,(f-Df(a)|0)+b|0);}
function Tz(a,b,c){var d,e,f,g,h,i,j,k,l;U$(a);d=a.e.f;e=DN(d.d_,c);if(e!==null)a.h6=Kd(d,e);if(e!==null)c=e;a:{f=DN(d.ev,c);if(f!==null){c=BU(f);while(true){if(!B5(c))break a;g=BY(c);B0(a.hV,Kd(d,g));}}}h=b.bs;i=b.bE;b=a.el;c=Do(a.e);d=GV(a.e);j=(Co(b.om)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.tT(c,d)){c=b.xl;break b;}l=l+1|0;}c=null;}if(c!==null){d=a.e;b=new MJ;b.vG=a;b.vH=d;b.vJ=h;b.vL=i;c.sb(d,h,i,b,a.gK);}}
function Hv(a,b){var c;CB(a,b.bs,b.bE,0);c=GP(Fs(a),a.x);B4(a.r.bF,a.w,c);B4(a.r.bP,a.w,a.x);}
function ET(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.bd;e=c-d.b|0;f=Et(0,((b.a-d.a|0)+a.bm|0)/a.U|0,Cp(a.e.f)-1|0);g=!a.bI?a.cH:(a.cU+a.ck|0)+C1(a)|0;h=Bb(0,(e-g|0)+a.cG|0);b=B2(a.e.f,f);d=a.Q.cB;i=a.cx;if(!(b.eb!==null&&!b.fG))Le(b,d,i);j=b.eb;e=b.o.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.R;else{c=T1(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.o.data.length)k=b.R;else{j=WS(b,d,i,c);k=0;e=0;while(e<c){k=k+I(b.o.data[e].t)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(AVL){d=new M;O(d);T(G(T(G(T(G(d,B(175)),e),B(176)),h),B(177)),c);$rt_globals.console.info($rt_ustr(N(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return ES(f,k);}
function To(a,b){var c;c=b.bs;a.w=c;a.x=b.bE;a.gX=GW(B2(a.e.f,c),a.x,a.Q.cB,a.cx);LE(a);}
function Fs(a){return B2(a.e.f,a.w);}
function JE(a,b,c){var d,e;d=Dg((a.U*4|0)*c/150.0);e=Dg(b);if(d)E7(a,a.bm+d|0);if(e)Id(a,a.cG+e|0);return 1;}
function UX(a,b,c){a.r.c0=0;return 1;}
function U5(a,b,c){var d,e,f;if(c)return null;d=Fe(a.eh,b.h,a.ti,1);if(d!==null)return d;d=Fe(a.ee,b.h,a.tJ,0);if(d!==null)return d;IU(a);e=ET(a,b.h);f=HI(a.e.f,e.bs,e.bE);To(a,e);Tz(a,e,f);if(!b.bC){b=a.r;if(!b.c0)B4(b.bP,a.w,a.x);}b=a.r;b.c0=1;KH(b,a.w,a.x);b=new Tl;b.up=a;return b;}
function QH(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:if(b.cf){b=b.h;e=ET(a,b);f=HI(a.e.f,e.bs,e.bE);g=OD(a,f);h=KQ(a.el,Do(a.e),GV(a.e));if(h!==null){f=a.e;c=e.bs;d=e.bE;e=new Sg;e.v8=a;e.v9=b;e.v7=g;h.sb(f,c,d,e,a.gK);}else{e=DN(a.e.f.d_,f);if(e!==null){Hv(a,e);c=1;}else{e=DN(a.e.f.ev,f);if(e!==null&&!Eb(e)){if(e.i!=1){Vg(a.ii,b,e,a,g);c=1;}else{Hv(a,Bp(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(ET(a,b.h)).bs;e=B2(a.e.f,c);c=GU(e,a.x);d=GP(e,a.x);b=UW(e,c);if((d-1|0)==e.R){B4(a.r.bP,a.w,Xh(e));B4(a.r.bF,
a.w,e.R);}else{if(b!==null){b=b.t;i=0;c:{while(true){j=b.bX.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.x;if(c==i){c=GU(e,c-1|0);d=GP(e,c);}else{if(d!=i){P0(a.r,a.w);break b;}c=GU(e,d+1|0);d=GP(e,c);}}}B4(a.r.bP,a.w,c);a.r.c0=1;CB(a,a.w,d,0);a.r.c0=0;IU(a);}}break a;case 3:break;default:break a;}P0(a.r,a.w);Xs(a.fs);IU(a);}}return 1;}
function Pk(a,b){var c,d,e,f,g,h,i,j,k;c=a.cg.cA;if(Fp(a.eh,b.h,c))return 1;if(Fp(a.ee,b.h,c))return 1;d=a.dR;if(F4(b.h,d.fL,d.e5)&&Hb(c)?1:0)return 1;e=b.h;f=!a.bI?a.bd.b+a.cH|0:((a.bd.b+a.ck|0)+a.cU|0)+C1(a)|0;a:{g=a.bd.a;h=Df(a);i=DH(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Hb(c);if(b.cf){e=ET(a,b.h);e.bE=GU(B2(a.e.f,e.bs),e.bE);b=a.e.f;if(!NJ(b.d_,e)&&!NJ(b.ev,e)?0:1)return DB(c,B(178));}return DB(c,B(161));}
function AM5(a,b){var c,d,e,f;c=b.cf;if(c&&b.bh==65){c=Cp(a.e.f)-1|0;d=Fk(a.e.f,c);B4(a.r.bP,0,0);B4(a.r.bF,Cp(a.e.f)-1|0,d);return 1;}if(c&&b.bh==80){J5(a);return 1;}if(!a.d4&&c&&b.bh==90){if(Dq(a.r))E6(a);b=a.e.f;b.cs=b.cs+1|0;e=b.fg;d=e.i;if(!d)e=null;else{f=(El(e,d-1|0)).data;e=Tn(b,f[0]);c=1;while(c<f.length){Tn(b,f[c]);c=c+1|0;}}if(e!==null){CB(a,e.b,e.a,0);DX(a);}return 1;}if(!c&&!b.cX){if(Bq(b.dE,B(179))){Db(a,B(180));Dr(a,a.x-1|0,0);c=1;}else if(Bq(b.dE,B(181))){Db(a,B(182));Dr(a,a.x-1|0,0);c=1;}else if
(Bq(b.dE,B(42))){Db(a,B(183));Dr(a,a.x-1|0,0);c=1;}else if(Bq(b.dE,B(184))){Db(a,B(185));Dr(a,a.x-1|0,0);c=1;}else if(Bq(b.dE,B(186))){Db(a,B(187));Dr(a,a.x-1|0,0);c=1;}else if(!Bq(b.dE,B(188)))c=0;else{Db(a,B(189));Dr(a,a.x-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cX&&!b.cf)){d=b.bh;if(d>=48&&d<=57){c=d-48|0;e=a.lo.data[c];if(e!==null)e.p();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bh){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c=1;}if(c)return 1;if
(AAU(a,b))return 1;if(a.d4)c=0;else c:{switch(b.bh){case 8:break;case 9:c=!b.bC?AEo(a):AB8(a);break c;case 13:c=ADH(a);break c;case 46:c=ADm(a);break c;default:c=0;break c;}c=Yx(a);}if(c)return 1;if(b.cf&&b.bh==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AJx(b.bh)&&b.bh!=27){if(!b.cf&&!b.cX&&!b.iA)return I(b.dE)>0&&Db(a,b.dE)?1:0;return 0;}return 0;}
function WQ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bq(B(139),Do(a.e))){b=Ck(a);c=new Tt;c.m7=a;d=Q(C,3);e=d.data;e[0]=EE(a.e.f);f=K4(a);g=U3(a);h=Bb(0,f-100|0);f=Z(Cp(a.e.f)-1|0,g+100|0);i=BC(3);j=i.data;j[0]=F7(a.e.f,h);k=a.e.f;l=0;f=Z(f+1|0,k.C.data.length);m=0;while(m<f){l=l+Fk(k,m)|0;if(m!=(k.C.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.f.c_;k=Cm();WA(n,n.cR,k);i=BC(3*k.i|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bp(k,m);h=p+1|0;o[p]=q.bN;l=h+1|0;o[h]=q.bS;p=l+1|0;o[l]=q.fc;m=m+1|
0;}e[2]=i;CO(b,c,B(190),d);}}
function J5(a){var b,c,d,e;b=ABn(Do(a.e));if(b!==null){a.eL=FC();c=Ck(a);d=new Q4;d.ss=a;e=Q(C,1);e.data[0]=EE(a.e.f);CO(c,d,b,e);}}
function SK(a){var b,c,d,e,f,g,h;b=a.e.f.c_;c=O9(b,b.cR);if(c===null)return;if(Bq(B(161),Do(a.e)))Pg(a.e.f);a:{d=E4([CX(c),C9(c),c.b4.fc]);e=EE(a.e.f);f=BC(1);g=Do(a.e);h=(-1);switch(Li(g)){case 3401:if(!Bq(g,B(191)))break a;h=3;break a;case 98723:if(!Bq(g,B(192)))break a;h=2;break a;case 3254818:if(!Bq(g,B(139)))break a;h=1;break a;case 3556653:if(!Bq(g,B(161)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Ck(a);c=new SS;c.uO=a;CO(b,c,B(193),H(C,[e,f,d]));}
function GA(a,b,c){var d,e,f,g,h,i;if(c&&a.d4)return 0;d=D2(a.r);e=d.L;if(Dq(a.r)){f=a.e.f;g=a.r;h=Wb(f,g);if(c)Tx(f,g,h);if(c){CB(a,d.L,d.bb,0);E6(a);DX(a);}}else{h=Fb(EJ(a.e.f.C.data[e]),B(167));i=Z(Cp(a.e.f)-1|0,e);B4(a.r.bF,i,0);if(e>=(Cp(a.e.f)-1|0))B4(a.r.bF,i,Fk(a.e.f,i));else B4(a.r.bP,i+1|0,0);if(c)GD(a);else CB(a,e,0,0);}b.l(h);return 1;}
function AAU(a,b){var c,d,e,f;a:{switch(b.bh){case 33:c=b.cf?IK(a,IB(a.bm,a.U),b.bC):Hu(a,2-Wn(DH(a),a.U)|0,0,b.cX,b.bC);break a;case 34:c=!b.cf?Hu(a,Wn(DH(a),a.U)-2|0,0,b.cX,b.bC):IK(a,((a.bm+DH(a)|0)/a.U|0)-1|0,b.bC);break a;case 35:if(!Hn(a,b.bC)&&!Dr(a,(Fs(a)).R,b.bC)){c=0;break a;}c=1;break a;case 36:if(!Hn(a,b.bC)&&!Dr(a,0,b.bC)){c=0;break a;}c=1;break a;case 37:c=b.cf;if(c&&b.cX){IU(a);d=a.fs;e=d.dd;if(e<=0)d=null;else{f=d.eE.data;c=e-1|0;d.dd=c;d=f[c];}if(d===null)c=1;else{CB(a,I1(d),LI(d),0);a.r=RC(d.lF);c
=1;}break a;}c=Uc(a,(-1),c,b.bC);break a;case 38:c=Hu(a,(-1),b.cf,b.cX,b.bC);break a;case 39:c=b.cf;if(c&&b.cX){d=a.fs;c=d.dd;if(c==(d.eF-1|0))d=null;else{f=d.eE.data;c=c+1|0;d.dd=c;d=f[c];}if(d===null)c=1;else{CB(a,I1(d),LI(d),0);a.r=RC(d.lF);c=1;}break a;}c=Uc(a,1,c,b.bC);break a;case 40:c=Hu(a,1,b.cf,b.cX,b.bC);break a;default:}c=0;}if(c&&b.bC)B4(a.r.bF,a.w,a.x);if(c)Tz(a,ES(a.w,a.x),HI(a.e.f,a.w,a.x));return c;}
function IU(a){var b,c,d,e,f,g,h;b=a.fs;c=b.dd;b=c<0?null:b.eE.data[c];if(b!==null&&a.w==I1(b)&&a.x==LI(b))return;d=a.fs;b=new Jh;c=a.w;e=a.x;f=a.r;b.kY=ES(c,e);g=RC(f);b.lF=g;g.c0=0;e=d.dd;h=d.eF;if(e==(h-1|0))MQ(d,b);else{c=e+1|0;while(c<h){Xs(d);c=c+1|0;}MQ(d,b);}d.dd=d.dd+1|0;}
function DX(a){a.e.f.pk=Jp(Ck(a));}
function J9(a,b){var c,d,e,f,g,h,i;a.vD=null;U$(a);c=a.e;a.e=b;a.eL=FC();d=ABn(Do(a.e));if(d!==null){e=Ck(a);f=new OB;f.rQ=a;g=Q(C,1);g.data[0]=EE(a.e.f);CO(e,f,d,g);}g=(Co(a.el.mh)).data;h=g.length;i=0;while(i<h){g[i].lV(c,b);i=i+1|0;}}
function U$(a){a.h6=null;Hp(a.hV);}
function ABn(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(Li(b)){case 3401:if(!Bq(b,B(191)))break a;c=2;break a;case 98723:if(!Bq(b,B(192)))break a;c=1;break a;case 3254818:if(!Bq(b,B(139)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(194);break b;case 2:b=B(195);break b;default:b=null;break b;}b=B(196);}}return b;}
function OD(a,b){var c;c=Kd(a.e.f,b);if(c===null)return B(31);return c.t;}
function DF(a,b){return F4(b,a.bd,a.cz);}
function Ue(a,b){var c,d,e;a.u0=b;Br(Bu(),B(197));c=Bu();d=a.u0.data.length;e=new M;O(e);T(G(e,B(198)),d);Br(c,N(e));c=Bu();d=Cp(a.e.f);e=new M;O(e);T(G(e,B(199)),d);Br(c,N(e));}
var HJ=F(0);
function QV(){C.call(this);this.sH=null;}
function AJV(a,b){var c;c=a.sH;Wp(c,c.G,c.D);}
function QT(){C.call(this);this.ue=null;}
function AL1(a,b){var c;c=a.ue;Wp(c,c.D,c.G);}
function QU(){C.call(this);this.od=null;}
function AFK(a,b){Qn(a.od,b);}
function QR(){C.call(this);this.rX=null;}
function AFj(a,b){Qn(a.rX,b);}
function QS(){C.call(this);this.mn=null;}
function ALF(a,b){return ABm(a.mn,b);}
function HE(){var a=this;C.call(a);a.jF=null;a.ou=null;a.l6=null;}
function AVM(a,b){var c=new HE();R_(c,a,b);return c;}
function AVN(a,b,c){var d=new HE();Vs(d,a,b,c);return d;}
function R_(a,b,c){Vs(a,b,null,c);}
function Vs(a,b,c,d){a.jF=b.bO;a.ou=c;a.l6=d;}
function AOX(a,b){var c,d;if(b.cf&&b.bh==79){c=a.ou;if(c!==null&&b.bC)V9(a.jF,c);else LO(a.jF,a.l6);d=1;}else d=0;return d;}
function QP(){C.call(this);this.p4=null;}
function ANy(a,b){var c;c=a.p4;c=DW(c.s,c.G)?c.G:!DW(c.s,c.D)?null:c.D;if(c!==null)KG(c,b);}
function QQ(){C.call(this);this.tf=null;}
function AKv(a,b){b=b;return ACx(a.tf,b);}
var AB_=F();
var Zd=F(0);
function ZN(b,c,d){return Hz(b,c,d,255,new BZ);}
function Hz(b,c,d,e,f){CE(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function W2(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bl=g+i;e.bz=h+i;e.bi=j+i;return e;}
function Ju(b,c,d,e,f){f=W2(b,c,d,f);f.bA=e;return f;}
function GB(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function X7(){var a=this;C.call(a);a.cV=null;a.iy=null;a.cA=null;a.b7=null;a.bM=0.0;a.d6=null;a.dT=null;a.dQ=null;a.nR=null;a.ya=null;a.x_=null;}
function KM(a){var b;b=a.d6;if(b!==null)b.sq();}
function JQ(a){var b;b=a.d6;if(b!==null)b.u4();}
function W0(a,b){var c;c=a.iy.dC!==(D8()).activeElement?0:1;if(c)JQ(a);a.d6=b;if(c)KM(a);}
function FO(a,b){JQ(a);a.d6=b;KM(a);}
function DW(a,b){return b!==a.d6?0:1;}
function IH(a){return a.cV.cB;}
function GL(a,b){return Hh(a.cV,b.ik,B_(b.hE,a.bM));}
function Cv(a,b){return B_(b,a.bM);}
var Sk=F();
function ARX(a,b){var c,d,e;c=b.cf;d=c&&!b.bC&&!b.cX&&!b.iA?1:0;a:{if(d){d=b.bh;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bC&&!c&&!b.cX&&!b.iA?1:0;d=d&&b.bh==46?1:0;}b:{if(!d){e=b.bh;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.jD=1;}return 0;}
function Sl(){C.call(this);this.rZ=null;}
function AE6(a,b){var c;c=a.rZ.d6;return c!==null&&c.gL(b)?1:0;}
var En=F(0);
function ABf(){C.call(this);this.cO=null;}
function AEg(){var a=new ABf();ALd(a);return a;}
function ALd(a){a.cO=Cm();}
function IS(a,b){Rp(a.cO,0,b);}
function J7(a,b){V3(a.cO,b);}
function I5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cO.i-1|0;while(c>=0){d=Bp(a.cO,c);d.O.eS(b);e=d.S;f=d.ec.hY;if(!LL(e)){if(!TX(e)&&!(!e.gy&&e.da!==null)){e.gy=0;QY(e);g=e.dV;h=(g.dt+g.eg+5.0)/10.0;i=Cv(e.gJ,e.iJ);g=b.cB;j=e.dV;k=e.gN;l=h*2.0;Cy(g,j);m=i+KL(g,k,l)|0;e.ht=m;m=Et(0,m,e.q.b);if(m){j=CK(b,m,e.q.a);Cy(j,e.dV);g=e.gN;l=i;h=l+h;k=e.dV;n=k.dt;Ch(j,g,h,l+n-(n+k.eg)/16.0);g=e.da;if(g===null){g=CU(b);e.da=g;}CM(g,j);FM(j);CE(e.lg,0.0,0.0,Ce(e.da),C8(e.da));}}g=f.qM;j=e.da;if(j===null)Pa(e,b,0,e.q.b,
g);else{i=Ce(j);f=f.pR;j=e.E;m=j.b;o=j.a;j=e.da;EG(b,m,o,j.fm,e.lg,j,f,g,0.0);m=e.q.b;if(i<m)Pa(e,b,i,m-i|0,g);}}CJ(b,1);i=Cv(d.bp,2.0);m=LL(d.S);f=d.bp;e=f.dQ;f=f.nR;p=m?0:d.S.q.a;g=d.O.q;Bg(f,g.b,g.a+p|0);ADp(b,f,!m?d.S.E:d.O.E,d.ec.hY.jR, -i|0,e);f=d.O;ACJ(b,f.q,f.E,i,p,Q_(d.ec.iV,d.bp.bM),d.ec.iV.lS,e);c=c+(-1)|0;}}
function Zo(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cO;if(c>=d.i)break;a:{e=Bp(d,c);f=b.h;if(DG(e.S,f))g=DB(e.bp.cA,null);else{g=Cv(e.bp,7.0);h=Cv(e.bp,25.0);if(VG(e,f.b,g)){i=UT(e,f.b,h);if(Pm(e,f.a,g)){g=DB(e.bp.cA,JF(i,B(200)));break a;}if(P7(e,f.a,g)){g=DB(e.bp.cA,JF( -i|0,B(200)));break a;}}if(MR(e,f.a,g)){h=RS(e,f.a,h);if(N9(e,f.b,g)){g=DB(e.bp.cA,JF(h,B(201)));break a;}if(TN(e,f.b,g)){g=DB(e.bp.cA,JF( -h|0,B(201)));break a;}}g=0;}}b:{c:{if(!g){if(!DG(e.O,b.h))break c;if(!e.O.bR(b)&&!DB(e.bp.cA,null))break c;}g
=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function ABe(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.cO;if(e>=f.i)break;a:{b:{g=Bp(f,e);if(!DG(g.S,b.h)){if(!DG(g.O,b.h))break b;if(!g.O.cp(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function Yk(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.cO;if(d>=e.i)return null;a:{f=Bp(e,d);if(!c){b:{e=b.h;if(!LL(f.S)&&DG(f.S,e)){g=f.O.E;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.S.E;i=e.b-i|0;k=e.a-k|0;e=new Bk;g=new Qs;g.ox=f;g.oA=i;g.oB=k;g.oC=e;g.oD=h;g.oy=j;}else{h=Cv(f.bp,7.0);i=Cv(f.bp,25.0);if(VG(f,e.b,h)){j=UT(f,e.b,i);if(Pm(f,e.a,h)){g=H6(f,e,j,(-1));break b;}if(P7(f,e.a,h)){g=H6(f,e,j,1);break b;}}if(MR(f,e.a,h)){i=RS(f,e.a,i);if(N9(f,e.b,h)){g=H6(f,e,(-1),i);break b;}if(TN(f,e.b,h)){g=
H6(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=DG(f.S,b.h)?AVO:f.O.b5(b,c);e=f.O;if(e===null)g=null;else if(g===null)g=!DG(e,b.h)?null:AVO;}if(g!==null)break;d=d+1|0;}return g;}
function AEe(a,b,c){var d,e,f,g;d=0;while(true){e=a.cO;if(d>=e.i)break;a:{b:{f=Bp(e,d);if(!DG(f.S,b.h)){if(!DG(f.O,b.h))break b;if(!f.O.cL(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function La(a,b,c,d){var e,f;e=0;while(true){f=a.cO;if(e>=f.i)break;if((Bp(f,e)).O.cW(b,c,d))return 1;e=e+1|0;}return 0;}
function AQK(a,b,c){var d,e,f;d=0;while(true){e=a.cO;if(d>=e.i)break;f=Bp(e,d);e=f.O;e.iO(e.E,e.q,c);e=f.S;if(e.gr!==null){e.dV=null;e.ht=0;e.gy=1;}J0(f);d=d+1|0;}}
function Oe(a,b){var c,d,e;c=0;d=0;while(true){e=a.cO;if(d>=e.i)break;Bp(e,d);c=0|c;d=d+1|0;}return c;}
function PQ(a,b,c){var d;d=0;while(true){b=a.cO;if(d>=b.i)break;Bp(b,d);d=d+1|0;}}
function YO(){var a=this;C.call(a);a.cC=null;a.cc=null;a.i8=null;a.iZ=null;a.g4=null;a.it=null;}
function MO(a){var b=new YO();AGD(b,a);return b;}
function AGD(a,b){a.cc=Cm();a.it=AVP;a.cC=b;W(b.dT,a);}
function H4(a,b,c){a.i8=c;a.g4=b;b=BU(a.cc);while(B5(b)){H7(BY(b),a.g4);}}
function F_(a,b,c,d){var e,f;e=a.cC;f=e.b7;if(Ba(f.b,f.a)&&e.bM!==0.0){if(a.i8!==null&&!DI(a)){a.it=d;a.iZ=GL(a.cC,a.i8);e=TE(a,b,c,null);b=new S4;b.s6=a;e.i$=b;FO(a.cC,a);return;}b=new BD;V(b);K(b);}c=new DY;Bl(c,B(202));K(c);}
function DK(a){var b;if(DI(a)){b=a.cC;if(b.d6===a)b.d6=null;Ts(a,null);a.it.p();a.it=AVP;}}
function PF(a,b,c,d,e){var f,g,h;f=Y9();SN(f);KS(f,c.dj());H7(f,a.g4);HZ(f,a.iZ);GT(f,a.cC);if(d===null)g=b.b;else{g=b.b;g=a.cC.b7.b<((g+(D_(d)).b|0)+(D_(f)).b|0)?g-(D_(f)).b|0:(g+(D_(d)).b|0)-d.eK|0;}h=b.a;b=a.cC.b7;JW(f,Bb(0,Z(g,b.b-(D_(f)).b|0)),Bb(0,Z(h,b.a-(D_(f)).a|0)));b=new Nm;b.tW=a;b.tY=f;b.tX=e;f.js=b;B0(a.cc,f);return f;}
function TE(a,b,c,d){return PF(a,b,c,d,null);}
function AGP(a,b,c){var d,e;a.iZ=GL(a.cC,a.i8);d=BU(a.cc);while(B5(d)){e=BY(d);HZ(e,a.iZ);GT(e,a.cC);}}
function Im(a){var b,c;if(Eb(a.cc))return;CJ(a.cC.cV,1);b=0;while(true){c=a.cc;if(b>=c.i)break;JC(Bp(c,b),a.cC);b=b+1|0;}}
function Ku(a,b){var c,d;c=0;d=a.cc.i-1|0;a:{while(d>=0){c=Kh(Bp(a.cc,d),b.h,a.cC.cA);if(c)break a;d=d+(-1)|0;}}return c;}
function Jk(a,b,c,d){var e,f;e=0;f=a.cc.i-1|0;a:{while(f>=0){e=J$(Bp(a.cc,f),b.h,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Jf(a,b,c){var d,e,f;d=null;e=a.cc.i-1|0;a:{while(e>=0){f=Bp(a.cc,e);d=b.h;c=Eq(f.cd,d);if(!c&&!LZ(f.cd)){d=f.i$;if(d!==null)d.p();}d=!c?null:AVO;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function AFk(a,b){var c;if(!DI(a))return 0;a:{switch(b.bh){case 27:DK(a);c=1;break a;default:}c=0;}return c;}
function AEd(b,c){var d,e,f;d=b.dl;e=c.cQ;f=c.eK;b=new Bk;c=d.P;ZZ(b,(c.b-(e*3|0)|0)-f|0,(c.a-e|0)-f|0);return b;}
function Ts(a,b){var c,d;c=a.cc.i-1|0;a:{while(true){if(c<0)break a;d=Bp(a.cc,c);if(b===d)break;El(a.cc,c);Tw(d);c=c+(-1)|0;}}}
function DI(a){return a.cc.i<=0?0:1;}
function AA3(){var a=this;C.call(a);a.dN=null;a.kU=0.0;a.gH=0.0;a.gl=0;}
function AMN(){var a=new AA3();ARe(a);return a;}
function ARe(a){var b;b=SI(0,0,2,20);a.dN=b;a.kU=0.5;a.gH=0.0;Hz(187,187,187,255,b.bT);}
function SH(a){return a.dN.y.a;}
function Qb(a){return a.dN.y.b;}
function SY(a,b){var c,d;a:{c=a.gl;if(b>a.gH)while(true){d=a.gH+a.kU;a.gH=d;a.gl=a.gl?0:1;if(b>d)continue;else break a;}}return a.gl==c?0:1;}
function PJ(a,b,c){Bg(a.dN.P,b,c);}
function Sp(a,b){a.gH=b+a.kU*1.25;a.gl=1;}
function U9(a,b,c){if(a.gl)Uv(a.dN,b,c.b,c.a);}
function K6(){var a=this;C.call(a);a.lO=null;a.vE=null;a.vU=0.0;a.oG=0;a.v2=0;a.wv=0;a.qJ=0;a.xk=0;a.dt=0.0;a.eg=0.0;a.vR=0.0;a.lB=0.0;a.vZ=0;a.mH=null;}
function E0(a){return Dg(a.dt+a.eg);}
function J3(a,b){return Dg((a.dt+a.eg)*b);}
function Iv(){var a=this;C.call(a);a.fQ=null;a.f=null;a.iP=null;a.pT=null;}
function ASF(a,b){var c=new Iv();AEh(c,a,b);return c;}
function AVQ(a,b,c){var d=new Iv();Qr(d,a,b,c);return d;}
function AEh(a,b,c){Qr(a,b,null,c);}
function Qr(a,b,c,d){var e,f,g,h,i,j,k;a.fQ=d;a.iP=c;if(d===null)c=null;else{c=d.e8;c=c===null?null:!Ec(c,B(203))&&!Ec(c,B(204))&&!Ec(c,B(205))&&!Ec(c,B(206))&&!Ec(c,B(207))&&!Ec(c,B(208))?(Ec(c,B(174))?B(139):!Ec(c,B(209))?null:B(191)):B(192);}e=b.data;a.pT=c;c=new HK;f=e.length;if(!f)g=MP(B(31));else{g=Q(Cz,f);h=g.data;i=0;while(i<f){j=new Cz;k=Q(B7,1);k.data[0]=R1(e[i]);H8(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.d_=Gv();c.ev=Gv();c.fg=Cm();if(!b.length){c=new BD;V(c);K(c);}c.C=g;c.fz=0;c.cs=0;c.c_=T$(c);a.f=c;}
function Do(a){var b;b=a.iP;if(b===null)b=a.pT;return b;}
function GV(a){var b;b=a.fQ;return b===null?null:b.hB;}
function VY(){var a=this;C.call(a);a.mU=null;a.sE=null;a.s2=null;a.om=null;a.mh=null;a.rm=null;}
function KQ(a,b,c){return Xy(a,Co(a.mU),b,c);}
function VF(a,b,c){return Xy(a,Co(a.sE),b,c);}
function Xy(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.tT(c,d))return g.wd;f=f+1|0;}return null;}
function Nl(a,b,c){var d,e,f,g;d=(Co(a.s2)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.tT(b,c))return g.wl;f=f+1|0;}return null;}
function Yp(){var a=this;C.call(a);a.bP=null;a.bF=null;a.c0=0;}
function ANi(){var a=new Yp();AFy(a);return a;}
function RC(a){var b=new Yp();AET(b,a);return b;}
function AFy(a){a.bP=new Gg;a.bF=new Gg;}
function AET(a,b){var c;c=new Gg;a.bP=c;a.bF=new Gg;Xk(c,b.bP);Xk(a.bF,b.bF);a.c0=b.c0;}
function KH(a,b,c){B4(a.bF,b,c);if(!a.c0)B4(a.bP,b,c);}
function P0(a,b){B4(a.bP,b,0);B4(a.bF,b+1|0,0);}
function D2(a){if(XO(a.bP,a.bF)>0)return a.bF;return a.bP;}
function Fx(a){if(XO(a.bP,a.bF)<0)return a.bF;return a.bP;}
function ACX(a,b){var c,d,e,f;c=D2(a);d=Fx(a);e=c.L;if(e<=b){f=BE(b,d.L);if(f<=0)return BX(b<=e?c.bb:0,f>=0?d.bb:(-1));}return null;}
function Dq(a){var b,c;b=a.bP;c=a.bF;return (b===c?1:c!==null&&Cn(b)===Cn(c)?(b.L==c.L&&b.bb==c.bb?1:0):0)?0:1;}
function ZT(a,b){var c,d;if(!Dq(a))return 0;c=D2(a);d=Fx(a);return c.L<=b&&b<d.L?1:0;}
function Nj(){var a=this;C.call(a);a.eE=null;a.eF=0;a.dd=0;}
function MQ(a,b){var c,d,e;c=a.eF;d=a.eE;if(c==d.data.length)a.eE=Dl(d,c+16|0);d=a.eE.data;e=a.eF;a.eF=e+1|0;d[e]=b;}
function Xs(a){var b,c,d;b=a.dd;c=a.eF-1|0;if(b==c)a.dd=b-1|0;d=a.eE.data;a.eF=c;d[c]=null;}
function EU(){var a=this;C.call(a);a.bU=0;a.bV=null;a.eo=null;a.dD=0;a.c8=0;}
var AVR=0;var AVS=0;var AVJ=0;function ABE(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.bV;j=i===b&&!i.hP?0:1;if(j){a.bV=b;Le(b,e.cB,d);}i=a.bV;k=i===null?0:EZ(i)<g?IB(EZ(a.bV),1024):IB(g,1024)+1|0;l=k<=a.dD?0:1;if(l)a.dD=k;if(!(!j&&!l)){if(AVR){m=b.fk;$rt_globals.console.info("fMeasure"+m.data);AVR=0;}if(!AVJ){i=c.bn;b="alphabetic";i.textBaseline=b;}else{b=c.bn;i="top";b.textBaseline=i;}a.c8=h/1024|0;while(true){i=a.eo;if(i.i>=a.dD)break;B0(i,CU(e));}k=0;while(k<a.dD){H3(a,c,f,d,a.c8+k|0);k=k+1|0;}a.bV.hP=0;}if(!Eb(a.eo)
&&h<=EZ(a.bV)){k=h/1024|0;g=a.c8;if(k!=g){if(I3(k-g|0)>=a.dD){g=0;while(g<a.dD){H3(a,c,f,d,k+g|0);g=g+1|0;}a.c8=k;}else{while(true){h=a.c8;if(h>=k)break;H3(a,c,f,d,h+a.dD|0);a.c8=a.c8+1|0;}while(true){h=a.c8;if(h<=k)break;H3(a,c,f,d,h-1|0);a.c8=a.c8-1|0;}}}}}
function Lc(b,c){return (c-E0(b)|0)/2|0;}
function Tq(b,c){return Lc(b,c)+b.qJ|0;}
function H3(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Eu(b);f=a.bV.fk;g=e*1024|0;h=OU(a,g);if(h>=a.bV.o.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bU;a:{while(true){l=a.bV;if(h>=l.o.data.length)break a;l=Nq(l,h);m=!AVJ?Tq(d.data[l.b9],c):Lc(d.data[l.b9],c);n=d.data;o=f.data;Cy(b,n[l.b9]);Ch(b,l.t,k,m);k=o[h]-j+a.bU;if(k>1024.0)break;h=h+1|0;}}CM(Bp(a.eo,e%a.dD|0),b);}
function AAK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br;if(Eb(a.eo))return;if(!a.dD)return;if(j>EZ(a.bV))return;p=a.bV;q=p.eb;r=p.o;s=j/1024|0;t=OU(a,j);u= -a.bU|0;v=i;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=h)break;z=q.data;ba=Bp(a.eo,s%a.dD|0);bb=w[t];bc=z[t]+a.bU|0;bd=s*1024|0;be=(bc-bd|0)>1024?0:1;bf=s+1|0;bg=bf*1024|0;bh=Z(bg,bc)-j|0;if(be&&y)bh=bh+a.bU|0;if((u+bh|0)>h)bh=h-u|0;bi=l!==null?0:1;b:{if(!bi)
{bj=!y?a.bU:2*a.bU|0;bk=l.b;x=l.a;if(!(bk<x&&j<=x&&(j+bh|0)>(bk+bj|0)?0:1)){bj=0;break b;}}bj=1;}c:{if(!bi){bl=!y?a.bU:2*a.bU|0;if(j>=l.b&&(j+bh|0)<=(l.a+bl|0)?1:0){bm=1;break c;}}bm=0;}bn=null;if(o)bn=k.cu.iM;if(bb===m)bn=k.cu.p0;p=BU(n);d:{e:{while(B5(p)){f:{bo=BY(p);if(bo!==null){if(!bo.cD(bb))break f;else break e;}if(bb===null)break e;}}x=0;break d;}x=1;}if(x)bn=k.cu.n8;if(!bm&&!bj){l.a=Z(l.a,EZ(a.bV));bp=j>=l.b?bh:(Z(bc,bg)-l.b|0)-(!y?a.bU:0)|0;bl=(j+bh|0)<=(l.a+(!y?a.bU:2*a.bU|0)|0)?0:(Z(bc,bg)-l.a|0)
-(!y?a.bU:0)|0;bk=j-bd|0;bc=u+c|0;bq=bk;x=bh-bp|0;CE(e,bq,0.0,x,v);Bg(f,x,i);Hd(a,d,bc,b,f,e,bb,ba,g,k,0,bn);bd=bk+bh|0;CE(e,bd-bl|0,0.0,bl,v);Bg(f,bl,i);x=bc+bh|0;Hd(a,d,x-bl|0,b,f,e,bb,ba,g,k,0,bn);br=bd-bp|0;bk=bp-bl|0;CE(e,br,0.0,bk,v);Bg(f,bk,i);Hd(a,d,x-bp|0,b,f,e,bb,ba,g,k,1,bn);}else{CE(e,j-bd|0,0.0,bh,v);Bg(f,bh,i);Hd(a,d,u+c|0,b,f,e,bb,ba,g,k,bm,bn);}j=j+bh|0;u=u+bh|0;if(!be){t=t+(-1)|0;s=bf;}t=t+1|0;}}}
function Hd(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bA!==0.0&&f.bi!==0.0){m=j.uF.data[g.cP];if(k)n=j.cu.kA;else{g=m.m9;if(g===null)g=j.cu.gu;if(l===null)l=BG(g);n=l;}g=m.nc;if(AVS)i=0.0;EG(b,c,d,e,f,h,g,n,i);return;}return;}}
function OU(a,b){var c,d,e,f,g,h,i;c=a.bV;d=c.fk;e=0;f=c.o.data.length;g=b;b=BE(e,f);if(b>0){c=new BD;V(c);K(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BE(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function Qk(a){a.bV=null;J2(a.eo,new Ql);Hp(a.eo);}
function ACc(a,b,c,d,e,f,g,h,i){var j,k;j=EZ(a.bV);if(j)j=j+a.bU|0;if(!j)j=j-a.bU|0;k=Bb( -a.bU|0,j-g|0);if(k>=h)return;Bg(f,h-k|0,e);By(b,c+k|0,d,f,i);}
function AAo(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=Q(EU,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B2(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bV===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EU;f.bU=3;f.eo=Cm();f.c8=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)Qk(o);h=h+1|0;}return g;}
function AC4(){AVJ=0;}
function ABr(){var a=this;C.call(a);a.eV=null;a.cT=null;a.dU=null;a.ep=null;a.hA=null;a.hz=null;}
function Hl(){var a=new ABr();AH7(a);return a;}
function AH7(a){a.eV=new Bk;a.cT=new Bk;a.dU=new Bk;a.ep=new Bk;a.hA=new BZ;a.hz=new BZ;}
function PH(a){var b;b=a.cT;return !Ba(b.b,b.a)?0:1;}
function IO(a,b){return F4(b,a.dU,a.ep);}
function Fe(a,b,c,d){var e,f,g,h,i;e=IO(a,b);f=F4(b,a.eV,a.cT);if(!e&&!f)return null;if(!f){if(!d)c.l(Xx(a,b.b-a.dU.b|0));else c.l(Ov(a,b.a-a.dU.a|0));}g=!d?a.eV.b+(a.cT.b/2|0)|0:a.eV.a+(a.cT.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new NK;b.s3=a;b.s5=c;b.s4=i;}else{b=new NI;b.pO=a;b.pN=c;b.pP=i;}return b;}
function Gc(a,b,c){if(b!==null&&c!==null){BI(a.hA,c);BI(a.hz,b);return;}}
function AD2(b,c){var d;d=new TY;d.qP=b;d.l8=c;return d;}
function Ov(a,b){var c,d,e;c=a.ep.a;d=a.cT.a;e=c-d|0;return AD2(Z(Bb(0,b-(d/2|0)|0),e),e);}
function Xx(a,b){var c,d,e;c=a.ep.b;d=a.cT.b;e=c-d|0;return AD2(Z(Bb(0,b-(d/2|0)|0),e),e);}
function Is(a,b,c,d,e,f,g){NQ(a,b,c,d,e,f,g,1);}
function Mo(a,b,c,d,e,f,g){NQ(a,b,c,d,e,f,g,0);}
function NQ(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bg(a.ep,0,0);Bg(a.cT,0,0);}else{i=Z(g*3|0,d);j=Bb(PD(d,d,e),i);e=e-d|0;i=d-j|0;i=i?PD(b,i,e):0;if(!h){k=a.eV;k.b=i+c|0;k.a=f-g|0;l=a.cT;l.b=j;l.a=g;l=a.dU;l.b=c;l.a=k.a;k=a.ep;k.b=d;k.a=g;}else{k=a.eV;k.b=f-g|0;k.a=i+c|0;l=a.cT;l.b=g;l.a=j;l=a.dU;l.b=k.b;l.a=c;k=a.ep;k.b=g;k.a=d;}}}
function PU(a,b){FT(a,b);Gb(a,b);}
function FT(a,b){var c;c=a.dU;By(b,c.b,c.a,a.ep,a.hA);}
function Gb(a,b){var c,d;c=a.cT;c.b=c.b-2|0;c.a=c.a-2|0;d=a.eV;By(b,d.b+1|0,d.a+1|0,c,a.hz);b=a.cT;b.b=b.b+2|0;b.a=b.a+2|0;}
function Fp(a,b,c){return IO(a,b)&&Hb(c)?1:0;}
function ABs(){var a=this;C.call(a);a.w8=20;a.fL=null;a.e5=null;a.ie=null;a.kh=0;a.id=0;a.iW=0.0;a.cw=null;a.xb=null;a.eA=null;a.fd=null;a.fq=0;}
function ABL(){var a=new ABs();AQG(a);return a;}
function AQG(a){var b;a.w8=20;a.fL=new Bk;a.e5=new Bk;a.cw=Cm();b=Q(BZ,1);b.data[0]=null;a.xb=b;}
function XM(a,b){var c,d,e,f,g;c=a.fq;if(b==c)return;d=a.cw.i;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Bb(0,(c-1|0)/20|0);f=Bb(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){SA(a,b);a.fq=b;}else{if(a.fq>=b)while(true){if(g<f)break a;a.fq=S3(Bp(a.cw,g%d|0),a.eA,a.fd,a.fq,b,e,a.iW);g=g+(-1)|0;}while(f<=g){a.fq=S3(Bp(a.cw,f%d|0),a.eA,a.fd,a.fq,b,e,a.iW);f=f+1|0;}}}}
function Qy(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=BU(a.cw);while(B5(f)){g=BY(f);h=a.fL;i=Ba(a.cw.i,a.id);j=g.ew.a;k=((g.iN.a-(b%i|0)|0)+i|0)%i|0;l=k+j|0;m=BE(l,c);if(m<=0){Bg(g.gb,Ce(g.b0),j);CE(g.fE,0.0,0.0,Ce(g.b0),j);I0(g,e,k,h,d.h$,d.g9);}else{if(m>0&&k<c){m=Bb(c-k|0,0);Bg(g.gb,Ce(g.b0),m);CE(g.fE,0.0,0.0,Ce(g.b0),m);I0(g,e,k,h,d.h$,d.g9);}if(l>i){m=Z(l%i|0,c);Bg(g.gb,Ce(g.b0),m);CE(g.fE,0.0,b%C8(g.b0)|0,Ce(g.b0),m);I0(g,e,0,h,d.h$,d.g9);}}}}
function JZ(a,b,c,d){var e,f,g,h,i,j;e=a.cw.i;while(true){f=a.cw.i;g=Ba(f,a.id);if(g>(d+a.kh|0))break;h=BX(0,g);i=new Nb;g=a.e5.b;f=a.kh;j=a.ie;i.gb=new Bk;i.fE=new BZ;i.iN=h;i.dH=20;i.et=f;i.ew=BX(g,20*f|0);i.fH=Tq(j,f);if(i.b0===null)i.b0=CU(b);B0(a.cw,i);}if(f==e)return;SA(a,c);}
function SA(a,b){var c,d,e,f,g,h,i,j;c=a.cw;d=c.i;e=Ba((b/(d*20|0)|0)+1|0,d)*20|0;c=BU(c);while(B5(c)){f=BY(c);g=a.eA;h=a.iW;Eu(g);i=0;while(true){j=f.dH;if(i>=j)break;j=e-Ba(d,j)|0;if(j<b)j=e;e=j+1|0;F5(f,g,C5(e),Ba(f.et,i)+f.fH|0,h);i=i+1|0;}CM(f.b0,g);}}
function TI(a,b,c,d){var e;a.ie=b;a.kh=c;e=c*20|0;a.id=e;b=CG(a.eA,CK(d,a.e5.b,e));a.eA=b;Cy(b,a.ie);R$(a.eA,2);b=CG(a.fd,CK(d,a.e5.b,c));a.fd=b;Cy(b,a.ie);R$(a.fd,2);}
function NT(a){J2(a.cw,new RD);Hp(a.cw);a.eA=CG(a.eA,null);a.fd=CG(a.fd,null);}
function Vq(a,b,c,d,e){CA(a.fL,b);Bg(a.e5,c,d);a.iW=e;}
var Wi=F(0);
var Ho=F(0);
var EN=F();
function Eb(a){return a.i?0:1;}
function HF(a,b){var c,d,e,f,g,h;c=b.data;d=a.i;e=c.length;if(e<d)b=UJ(H9(Cn(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BU(a);while(B5(f)){g=b.data;h=e+1|0;g[e]=BY(f);e=h;}return b;}
var I$=F(0);
function F3(){EN.call(this);this.ct=0;}
function BU(a){var b;b=new Ns;b.gz=a;b.lN=a.ct;b.ig=a.nd();b.f0=(-1);return b;}
function Qe(a,b){var c,d;c=a.i;d=0;while(true){if(d>=c)return (-1);if(C6(b,Bp(a,d)))break;d=d+1|0;}return d;}
function AMf(a,b){var c,d;if(!ID(b,I$))return 0;c=b;if(a.i!=c.i)return 0;d=0;while(d<c.i){if(!C6(Bp(a,d),Bp(c,d)))return 0;d=d+1|0;}return 1;}
var Il=F(0);
function NP(){var a=this;F3.call(a);a.ci=null;a.i=0;}
function Cm(){var a=new NP();AIL(a);return a;}
function AVT(a){var b=new NP();MH(b,a);return b;}
function AIL(a){MH(a,10);}
function MH(a,b){a.ci=Q(C,b);}
function Ji(a,b){var c,d;c=a.ci.data.length;if(c<b){d=c>=1073741823?2147483647:Bb(b,Bb(c*2|0,5));a.ci=Dl(a.ci,d);}}
function Bp(a,b){I8(a,b);return a.ci.data[b];}
function ANa(a){return a.i;}
function B0(a,b){var c,d;Ji(a,a.i+1|0);c=a.ci.data;d=a.i;a.i=d+1|0;c[d]=b;a.ct=a.ct+1|0;return 1;}
function Rp(a,b,c){var d,e,f;Pb(a,b);Ji(a,a.i+1|0);d=a.i;e=d;while(e>b){f=a.ci.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.ci.data[b]=c;a.i=d+1|0;a.ct=a.ct+1|0;}
function El(a,b){var c,d,e,f;I8(a,b);c=a.ci.data;d=c[b];e=a.i-1|0;a.i=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.ct=a.ct+1|0;return d;}
function V3(a,b){var c;c=Qe(a,b);if(c<0)return 0;El(a,c);return 1;}
function Hp(a){Zr(a.ci,0,a.i,null);a.i=0;a.ct=a.ct+1|0;}
function I8(a,b){var c;if(b>=0&&b<a.i)return;c=new Bx;V(c);K(c);}
function Pb(a,b){var c;if(b>=0&&b<=a.i)return;c=new Bx;V(c);K(c);}
function J2(a,b){var c;c=0;while(c<a.i){b.l(a.ci.data[c]);c=c+1|0;}}
function N6(a,b){var c,d,e,f,g,h,i;c=a.ci;d=a.i;if(b===null)b=AUL;e=Q(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}Z_(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.ct=a.ct+1|0;}
function UQ(){C.call(this);this.xY=null;}
function BZ(){var a=this;C.call(a);a.bl=0.0;a.bz=0.0;a.bi=0.0;a.bA=0.0;}
function AQI(a){var b=new BZ();AMJ(b,a);return b;}
function CE(a,b,c,d,e){a.bl=b;a.bz=c;a.bi=d;a.bA=e;}
function AMJ(a,b){a.bl=b.bl;a.bz=b.bz;a.bi=b.bi;a.bA=b.bA;}
function BI(a,b){a.bl=b.bl;a.bz=b.bz;a.bi=b.bi;a.bA=b.bA;return a;}
function ARv(a,b){if(a===b)return 1;return b!==null&&Cn(a)===Cn(b)&&Ky(a,b)?1:0;}
function Ky(a,b){return b.bl===a.bl&&b.bz===a.bz&&b.bi===a.bi&&b.bA===a.bA?1:0;}
function UP(){C.call(this);this.q5=null;}
function AOW(a,b){var c;c=a.q5;E7(c,FJ(b,Iu(c)));}
function UL(){C.call(this);this.nq=null;}
function AMU(a,b){var c;c=a.nq;Id(c,FJ(b,Kj(c)));}
function UK(){C.call(this);this.th=null;}
function AOT(a){var b,c;b=a.th;c=b.hS?0:1;b.hS=c;b=new M;O(b);F2(G(b,B(210)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function UN(){C.call(this);this.rt=null;}
function AJT(a){var b,c;b=a.rt;c=b.hH?0:1;b.hH=c;b=new M;O(b);F2(G(b,B(211)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function UM(){C.call(this);this.nM=null;}
function AMa(a){var b,c;b=a.nM;c=b.i_^1;b.i_=c;b=new M;O(b);F2(G(b,B(212)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Vb(){C.call(this);this.tF=null;}
function AOk(a){var b,c,d,e,f;b=a.tF;c=(b.kC+3|0)%6|0;b.kC=c;d=b.gk.data;e=d.length;f=0;while(f<e){b=d[f];b.bU=c;b=b.bV;if(b!==null)b.hP=1;f=f+1|0;}}
function Va(){C.call(this);this.qq=null;}
function AJv(a){var b;b=a.qq;b.bI=b.bI?0:1;NT(b.dR);b.dR=ABL();RW(b,b.bd,b.cz,b.cg.bM);}
var Fr=F(Cj);
var AVH=null;var AVU=null;var AVI=null;var AVV=null;function AE_(){AE_=Bm(Fr);AMi();}
function ABU(a,b){var c=new Fr();ABH(c,a,b);return c;}
function ABH(a,b,c){AE_();C_(a,b,c);}
function AMi(){var b;AVH=ABU(B(213),0);AVU=ABU(B(214),1);b=ABU(B(215),2);AVI=b;AVV=H(Fr,[AVH,AVU,b]);}
function Kl(){C.call(this);this.w6=null;}
var AVC=null;var AVW=null;function AKf(){AKf=Bm(Kl);ARD();}
function AH4(a){var b=new Kl();Yl(b,a);return b;}
function Yl(a,b){AKf();a.w6=b;}
function ARD(){AVC=AH4(B(216));AVW=AH4(B(217));}
var Uz=F(0);
function Hb(a){return DB(a,null);}
function UE(b){var c;c=new NM;c.np=b;return c;}
function Mx(){C.call(this);this.m8=null;}
function ALj(a){KM(a.m8);}
function My(){C.call(this);this.qt=null;}
function AJM(a){JQ(a.qt);}
var XZ=F(0);
var AVP=null;function ADn(){AVP=new NB;}
function Iz(){var a=this;C.call(a);a.P=null;a.y=null;a.bT=null;a.b2=null;}
function AK$(){var a=new Iz();Sb(a);return a;}
function SI(a,b,c,d){var e=new Iz();AH2(e,a,b,c,d);return e;}
function Sb(a){a.P=new Bk;a.y=new Bk;a.bT=new BZ;a.b2=new BZ;}
function AH2(a,b,c,d,e){a.P=new Bk;a.y=new Bk;a.bT=new BZ;a.b2=new BZ;PR(a,b,c,d,e);}
function PR(a,b,c,d,e){Bg(a.P,b,c);Bg(a.y,d,e);}
function S2(a){Bg(a.y,0,0);}
function LZ(a){var b;b=a.y;return Ba(b.b,b.a)?0:1;}
function Eq(a,b){return F4(b,a.P,a.y);}
function Uv(a,b,c,d){var e;e=a.P;By(b,e.b+c|0,e.a+d|0,a.y,a.bT);}
function T9(a,b,c,d,e,f){var g,h,i,j;g=a.P;d=g.b+d|0;e=g.a+e|0;g=a.y;h=a.b2;i=a.bT;K9(b,b.hf);Ma(b.hf,b.bD,d,e,g,b.dG);Ul(b.hf,b.bD,c);g=b.hf;j=b.bD;Ic(j,g.uK,h);Ic(j,g.uI,i);c=g.pU;j.uniform2f(c,f,0.0);KX(b);}
function HK(){var a=this;C.call(a);a.C=null;a.c_=null;a.d_=null;a.ev=null;a.fg=null;a.cs=0;a.fz=0;a.pk=0.0;}
function T$(a){var b,c,d,e,f,g,h,i;b=Tu(a);c=new IP;d=new NP;e=N0(0,b,0);f=new XI;f.te=e;MH(d,1);e=BU(f);g=0;while(true){h=d.ci.data;i=h.length;if(g>=i)break;h[g]=BY(e);g=g+1|0;}d.i=i;Uf(c,d);return c;}
function B2(a,b){return a.C.data[b];}
function Cp(a){return a.C.data.length;}
function Tu(a){return F7(a,Cp(a));}
function Fk(a,b){return a.C.data[b].R;}
function K1(a,b){var c,d,e,f,g,h,i;c=a.C.data;d=c[b];e=c[b+1|0];f=DO(LF(d.o,e.o));g=a.C;h=g.data.length;if(b<h&&b>=0){i=Q(Cz,h-1|0);c=i.data;Q8(g,b,i);c[b]=f;a.C=i;return;}d=new Bo;V(d);K(d);}
function O7(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.C.data;if(!(c<d[b].R?0:1)){d=(B2(a,b)).o.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.t)){f=L(h.t,g);break a;}g=g-I(h.t)|0;f=f+1|0;}f=0;}EL();h=new Bv;d=BL(1);d.data[0]=f;Hj(h,d);Gs(a,b,c,1,h);h=a.C.data[b];i=h.o;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].t);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].t)==1)h.o=Q8(i,j,Q(B7,e-1|0));else{k=d[j];if(c<=0)l=DC(Dk(k.t,1),k.cP,k.b9);else if(c>=(I(k.t)-1|0)){l=new B7;m=k.t;Vk(l,B$(m,0,I(m)-
1|0),k.cP,k.b9);}else{i=BL(I(k.t)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.t,b);b=b+1|0;}b=n.length;while(c<b){m=k.t;e=c+1|0;n[c]=L(m,e);c=e;}l=DC(FS(i),k.cP,k.b9);}d[j]=l;}h.R=h.R-1|0;Ee(h);}else if(b!=(d.length-1|0))K1(a,b);}
function X4(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Xg(a.C.data[b],c,e[0]);return;}g=f-1|0;h=IF(a.C.data[b],c);d=a.C;i=Dl(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.o.data;m=l.length;c=!m?0:I(l[m-1|0].t);Jw(j,j.o.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fo(e[m]))j=DO(Q(B7,0));else{j=new Cz;l=Q(B7,1);l.data[0]=DC(e[m],0,0);H8(j,l);}d[b+m|0]=j;m=m+1|0;}Jw(h[1],0,0,e[g]);d[b+g|0]=h[1];a.C
=i;}
function Wb(a,b){var c,d,e,f,g,h,i;c=D2(b);d=Fx(b);e=c.L;if(e==d.L)return B$(EJ(a.C.data[e]),c.bb,d.bb);f=new M;O(f);b=a.C.data[c.L];e=c.bb;BA(B1(f,Dk(EJ(b),e)),10);g=a.C;h=c.L+1|0;e=d.L;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;Yy(B1(f,EJ(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.C.data[d.L];i=d.bb;B1(f,B$(EJ(b),0,i));return N(f);}}b=new WL;V(b);K(b);}
function Tx(a,b,c){var d;UO(a,b);d=D2(b);Gs(a,d.L,d.bb,1,c);}
function UO(a,b){var c,d,e,f,g,h,i;a:{c=D2(b);d=Fx(b);e=c.L;if(e==d.L)FR(a.C.data[e],c.bb,d.bb);else{b=a.C.data[e];FR(b,c.bb,b.R);FR(a.C.data[d.L],0,d.bb);e=c.L+1|0;f=d.L;g=a.C;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=Q(Cz,(h-f|0)+e|0);AAH(g,e,f,i);a.C=i;K1(a,c.L);break a;}b=new Bo;V(b);K(b);}b=new Bo;V(b);K(b);}}}
function HI(a,b,c){return ES(b,GU(B2(a,b),c));}
function Nv(a,b){var c,d,e;c=0;d=0;while(true){e=a.C.data.length;if(c>=e)break;if((d+(B2(a,c)).R|0)>=b)return BX(c,b-d|0);d=d+((B2(a,c)).R+1|0)|0;c=c+1|0;}return BX(e,0);}
function F7(a,b){var c,d,e;c=0;d=a.C.data.length;e=0;while(e<b){c=c+Fk(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Kd(a,b){return UW(B2(a,b.bs),b.bE);}
function EE(a){var b,c,d,e,f,g,h,i,j;b=BL(Tu(a));c=b.data;d=a.C.data.length;e=0;f=0;while(e<d){g=a.C.data[e].o.data;h=g.length;i=0;while(i<h){j=g[i].t;PC(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gs(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cs=a.cs+1|0;f=a.fg;g=Q(GY,1);h=new GY;h.eH=b;h.fe=c;i=LT(e,B(167),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BX(b,c+I(i[0])|0);break a;}k=BX((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=BX(b,c);}i=g.data;h.kD=k;h.jo=d;h.gQ=e;i[0]=h;B0(f,g);JG(a,b,c,d,e);}
function JG(a,b,c,d,e){var f;f=F7(a,b)+c|0;if(!d)Px(a.c_,f,I(e));else TZ(a.c_,f,I(e));}
function Tn(a,b){var c,d,e;c=LT(b.gQ,B(167),(-1));if(b.jo){X4(a,b.eH,b.fe,c);Px(a.c_,F7(a,b.eH)+b.fe|0,I(b.gQ));}else{c=c.data;d=ANi();B4(d.bP,b.eH,b.fe);e=c.length;if(e==1)B4(d.bF,b.eH,b.fe+I(c[0])|0);else B4(d.bF,(b.eH+e|0)-1|0,I(c[e-1|0]));UO(a,d);TZ(a.c_,F7(a,b.eH)+b.fe|0,I(b.gQ));}return b.kD;}
function Pg(a){a.fz=a.cs;}
var EW=F();
function Mf(){EW.call(this);this.wd=null;}
function MA(){EW.call(this);this.wl=null;}
function P3(){EW.call(this);this.xl=null;}
var GS=F(0);
var Ro=F(0);
function Gg(){var a=this;C.call(a);a.L=0;a.bb=0;}
function B4(a,b,c){a.L=b;a.bb=c;}
function Xk(a,b){a.L=b.L;a.bb=b.bb;}
function XO(a,b){var c;c=BE(a.L,b.L);if(c)return c;return BE(a.bb,b.bb);}
function Jh(){var a=this;C.call(a);a.kY=null;a.lF=null;}
function I1(a){return a.kY.bs;}
function LI(a){return a.kY.bE;}
var KJ=F(F9);
var AU6=null;function AIr(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AEz(){var b;b=new KJ;X9(b);AU6=b;}
var Wd=F(0);
function ST(){C.call(this);this.ha=null;}
function FG(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.ha));}
function D6(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.ha));}
function AHr(a){var b,c;b=a.ha.byteLength;c=new M;O(c);G(T(G(c,B(218)),b),B(219));return N(c);}
var UB=F(0);
function K5(){var a=this;C.call(a);a.gw=null;a.e0=null;a.lz=null;}
function AB7(a,b){var c=new K5();AJ_(c,a,b);return c;}
function ASf(a,b,c){var d=new K5();NV(d,a,b,c);return d;}
function Yw(b){var c,d,e,f,g,h,i,j,k;c=new K5;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=UJ(E(V$),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=f[h];h=h+1|0;}}i=g.data;h=i.length;if(!h)j=Q(Bv,0);else{j=Q(Bv,h-1|0);g=j.data;h=0;k=g.length;while(h<k){g[h]=FA(i[h]);h=h+1|0;}}}else j=Q(Bv,0);NV(c,d,b,j);return c;}
function AJ_(a,b,c){NV(a,b,c,Q(Bv,0));}
function NV(a,b,c,d){a.gw=b;a.e0=c;a.lz=d;}
function JA(a,b){var c,d,e;c=b|0;if(c===b)return c;d=Ey(a);e=new M;O(e);G(G(e,B(220)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function Ey(a){var b;b=a.gw;return FA(b!==null?b.name:a.e0.name);}
function AKD(a){var b,c,d,e,f;if(a.e0===null){b=a.lz;c=Ey(a);d=ZM(b);e=new M;O(e);G(G(G(e,d),B(221)),c);c=N(e);}else{b=a.lz;c=Ey(a);f=JA(a,a.e0.size);d=ZM(b);e=new M;O(e);T(G(G(G(G(e,d),B(221)),c),B(222)),f);c=N(e);}return c;}
function NM(){C.call(this);this.np=null;}
function DB(a,b){Go(a.np,b);return 1;}
function ABc(){var a=this;EA.call(a);a.dr=0;a.b6=null;a.c4=0;a.u3=0.0;a.kq=0;}
function Gv(){var a=new ABc();AHX(a);return a;}
function AHX(a){var b;b=ADY(16);a.dr=0;a.b6=Q(H_,b);a.u3=0.75;UU(a);}
function ADY(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function UU(a){a.kq=a.b6.data.length*a.u3|0;}
function NJ(a,b){return S5(a,b)===null?0:1;}
function DN(a,b){var c;c=S5(a,b);if(c===null)return null;return c.dx;}
function S5(a,b){var c,d;if(b===null)c=Sc(a);else{d=b.i7();c=P1(a,b,d&(a.b6.data.length-1|0),d);}return c;}
function P1(a,b,c,d){var e;e=a.b6.data[c];while(e!==null&&!(e.iK==d&&YW(b,e.du))){e=e.cN;}return e;}
function Sc(a){var b;b=a.b6.data[0];while(b!==null&&b.du!==null){b=b.cN;}return b;}
function K_(a,b,c){var d,e,f;if(b===null){d=Sc(a);if(d===null){a.c4=a.c4+1|0;d=UG(a,null,0,0);e=a.dr+1|0;a.dr=e;if(e>a.kq)U7(a);}}else{e=b.i7();f=e&(a.b6.data.length-1|0);d=P1(a,b,f,e);if(d===null){a.c4=a.c4+1|0;d=UG(a,b,f,e);e=a.dr+1|0;a.dr=e;if(e>a.kq)U7(a);}}b=d.dx;d.dx=c;return b;}
function UG(a,b,c,d){var e,f,g;e=new H_;f=null;e.du=b;e.dx=f;e.iK=d;g=a.b6.data;e.cN=g[c];g[c]=e;return e;}
function U7(a){var b,c,d,e,f,g,h,i;b=a.b6.data.length;b=ADY(!b?1:b<<1);c=Q(H_,b);d=c.data;e=0;f=b-1|0;while(true){g=a.b6.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.iK&f;i=h.cN;h.cN=d[b];d[b]=h;h=i;}e=e+1|0;}a.b6=c;UU(a);}
function YW(b,c){return b!==c&&!b.cD(c)?0:1;}
function Cz(){var a=this;C.call(a);a.o=null;a.R=0;a.fk=null;a.eb=null;a.dn=null;a.gP=null;a.fG=0;a.hP=0;a.hp=0;}
var AVX=0;var AVY=0;var AVL=0;function DO(a){var b=new Cz();H8(b,a);return b;}
function H8(a,b){var c,d,e,f;c=b.data;a.o=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].t)|0;f=f+1|0;}a.R=d;Ee(a);}
function Nq(a,b){return a.o.data[b];}
function GU(a,b){var c;c=Io(a,b);return c<=0?0:a.dn.data[c-1|0];}
function Io(a,b){var c,d,e,f;c=a.o.data.length;if(!c)return (-1);if(!(a.dn!==null&&!a.hp)){Wz(a);d=0;e=0;f=a.o.data.length;while(d<f){e=e+I(a.o.data[d].t)|0;a.dn.data[d]=e;d=d+1|0;}a.hp=0;}d=T1(a.dn,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function UW(a,b){var c;c=a.o.data;if(!c.length)return null;return c[Io(a,b)];}
function FR(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.R){a.o=Q(B7,0);Ee(a);a.R=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.o.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].t);i=I(a.o.data[f].t);j=BE(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.o.data[f];if(!b&&c==I(k.t)?1:0){g=a.o;a.o=Q8(g,e,Q(B7,g.data.length-1|0));a.R=a.R-d|0;Ee(a);return;}a.o.data[e]=DC(Fb(B$(k.t,0,b),Dk(k.t,c)),k.cP,k.b9);}else{g=a.o.data;l=g[e];m=g[f];if(b){if(b!=
I(l.t))a.o.data[e]=DC(B$(l.t,0,b),l.cP,l.b9);e=e+1|0;}if(c==I(m.t))f=f+1|0;else if(c)a.o.data[f]=DC(Dk(m.t,c),m.cP,m.b9);g=a.o;a.o=AAH(g,e,f,Q(B7,(g.data.length-f|0)+e|0));}a.R=a.R-d|0;Ee(a);}
function IF(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(Cz,[DO(Q(B7,0)),a]);if(b>=a.R)return H(Cz,[a,DO(Q(B7,0))]);c=a.o;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].t);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(Cz,[DO(KW(c,0,Q(B7,d))),DO(KW(c,d,Q(B7,f-d|0)))]);h=e[d];e=KW(c,0,Q(B7,d+1|0));i=e.data;j=KW(c,d,Q(B7,f-d|0));c=j.data;i[d]=DC(B$(h.t,0,b),h.cP,h.b9);c[0]=DC(Dk(h.t,b),h.cP,h.b9);return H(Cz,[DO(e),DO(j)]);}
function Xg(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.o.data;if(e>=f.length)break a;g=I(f[d].t);if(b<=g)break;b=b-g|0;d=e;}}Jw(a,d,b,c);}
function Jw(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.o;f=e.data;g=f.length;if(!g){h=Q(B7,1);h.data[0]=R1(d);a.o=h;}else if(!b&&!c){i=Q(B7,g+1|0);h=i.data;Eg(e,0,i,1,g);h[0]=R1(d);a.o=i;}else{j=f[b];if(c<=0)k=DC(Fb(d,j.t),j.cP,j.b9);else if(c>=I(j.t))k=DC(Fb(j.t,d),j.cP,j.b9);else{l=I(d);m=l+c|0;n=I(j.t)-c|0;h=BL(I(j.t)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.t,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.t,g+c|0);g=g+1|0;}k=DC(FS(h),j.cP,j.b9);}f[b]=k;}a.R=a.R+I(d)|0;Ee(a);}
function Xh(a){var b,c,d,e,f,g;b=0;c=a.o.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Me(f)){if(L(f.t,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Le(a,b,c){var d,e,f,g,h,i,j;d=a.o.data.length;e=a.fk;if(!(e!==null&&e.data.length>=d)){a.fk=AES(d);a.eb=BC(d);a.fG=1;}Wz(a);if(!a.fG)AVY=AVY+1|0;else{f=0;g=0.0;AVX=AVX+1|0;h=0;while(h<d){i=c.data;j=a.o.data[h];f=f+I(j.t)|0;a.dn.data[h]=f;Cy(b,i[j.b9]);g=g+Eo(b,j.t);a.fk.data[h]=g;a.eb.data[h]=g+0.5|0;h=h+1|0;}a.R=f;a.fG=0;a.hp=0;}}
function Wz(a){var b;b=a.dn;if(!(b!==null&&b.data.length>=a.o.data.length)){a.dn=BC(a.o.data.length);a.hp=1;}}
function Ee(a){a.fG=1;a.hP=1;a.hp=1;a.gP=null;}
function WS(a,b,c,d){var e,f,g,h,i,j,k;if(a.gP===null)a.gP=Q($rt_arraycls($rt_intcls()),a.o.data.length);e=a.gP.data[d];if(e===null){e=c.data;f=a.o.data[d];Cy(b,e[f.b9]);f=f.t;e=BC(I(f)-1|0);c=Gp(f);g=!d?0.0:a.fk.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;Yc(f,c,0,k);h[i]=g+Eo(b,f)+0.5|0;i=k;}a.gP.data[d]=e;}return e;}
function GW(a,b,c,d){var e,f,g,h,i;if(a.o.data.length&&b){if(!(!a.fG&&a.eb!==null))Le(a,c,d);if(b>=a.R)return a.eb.data[a.o.data.length-1|0];e=0;f=0;a:{while(true){g=a.o.data;if(f>=g.length)break a;h=e+I(g[f].t)|0;i=BE(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eb.data[f];}return (WS(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function EZ(a){var b,c,d;a:{b=a.o.data.length;if(b){c=a.eb.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GP(a,b){var c;if(b>=a.R)return b+1|0;c=Io(a,b);return a.dn.data[c];}
function EJ(a){var b,c,d,e;b=new M;FU(b,a.R);c=a.o.data;d=c.length;e=0;while(e<d){B1(b,c[e].t);e=e+1|0;}return N(b);}
function MP(b){var c,d,e,f;c=Q(Cz,1);d=c.data;e=new Cz;f=Q(B7,1);f.data[0]=R1(b);H8(e,f);d[0]=e;return c;}
function YD(){AVL=0;}
var NB=F();
function ARh(a){}
function B7(){var a=this;C.call(a);a.t=null;a.cP=0;a.b9=0;}
function R1(a){var b=new B7();AP6(b,a);return b;}
function DC(a,b,c){var d=new B7();Vk(d,a,b,c);return d;}
function AP6(a,b){Vk(a,b,0,0);}
function Vk(a,b,c,d){a.t=b;a.cP=c;a.b9=d;}
function Hg(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Me(a){return I(a.t);}
function IP(){var a=this;C.call(a);a.cR=null;a.d2=0;}
var AVZ=null;var AV0=null;function ATy(a){var b=new IP();Uf(b,a);return b;}
function ASB(a,b){var c=new IP();X8(c,a,b);return c;}
function Vr(b,c){var d;d=BE(b.bN,c.bN);if(!d)d=BE(c.bS,b.bS);return d;}
function Uf(a,b){X8(a,null,b);}
function X8(a,b,c){var d,e;a.d2=0;if(Eb(c))return;N6(c,AVZ);if(b!==null)a.cR=MC(b);c=BU(c);while(B5(c)){d=BY(c);e=a.cR;if(e!==null){Ra(a,e,MC(d));continue;}a.cR=MC(d);}}
function O9(a,b){var c;if(b.eW)return b;b=BU(b.bx);while(true){if(!B5(b))return null;c=O9(a,BY(b));if(c!==null)break;}return c;}
function KB(a,b,c){var d,e,f;d=b.b4;if(d.bN==c.bN&&d.bS==c.bS?1:0){e=BU(b.bx);while(B5(e)){f=KB(a,BY(e),c);if(f!==null)return f;}return b;}b=BU(b.bx);while(true){if(!B5(b))return null;d=BY(b);if(P8(d,c.bN,c.bS)){e=KB(a,d,c);if(e!==null)break;}}return e;}
function WA(a,b,c){B0(c,b.b4);b=BU(b.bx);while(B5(b)){WA(a,BY(b),c);}}
function Px(a,b,c){a.d2=0;Je(a,a.cR,b,c);}
function Je(a,b,c,d){var e;if(C9(b)<c)return;a:{if(CX(b)>c){Kz(b,d);FV(b,d);b=BU(b.bx);while(B5(b)){Je(a,BY(b),c,d);}}else{if(!Kg(b,c)){if(a.d2)break a;if(C9(b)!=c)break a;}FV(b,d);if(CX(b)==c&&a.d2)Kz(b,d);e=BU(b.bx);while(B5(e)){Je(a,BY(e),c,d);}if(!a.d2){b.eW=1;a.d2=1;}}}}
function TZ(a,b,c){a.d2=0;Mj(a,a.cR,b,c);}
function Mj(a,b,c,d){var e,f,g,h;if(C9(b)<c)return;e=CX(b);f=c+d|0;if(e>f){e= -d|0;Kz(b,e);FV(b,e);g=BU(b.bx);while(B5(g)){Mj(a,BY(g),c,d);}b.bx=ND(a,b.bx);}else{g=b.b4;if(c<=g.bN&&g.bS<=f?1:0){if(b!==a.cR){Jm(b,(-1));Kb(b,(-1));}else{Jm(b,0);Kb(b,0);}Hp(b.bx);}else{e=Kg(b,c);f=Kg(b,f);if(e&&f)FV(b, -d|0);else if(e)Kb(b,c);else{if(!f)return;Jm(b,c);FV(b, -d|0);}h=BU(b.bx);while(B5(h)){Mj(a,BY(h),c,d);}b.bx=ND(a,b.bx);if(!a.d2){b.eW=1;a.d2=1;}}}}
function ND(a,b){var c,d,e,f,g,h;c=Cm();d=null;N6(b,AV0);b=BU(b);while(B5(b)){e=BY(b);if(CX(e)==C9(e))continue;if(!e.eW){if(d!==null){B0(c,d);d=null;}B0(c,e);}else if(d===null)d=e;else{f=Z(CX(d),CX(e));g=Bb(C9(d),C9(e));h=MC(N0(f,g,d.b4.fc));h.dI=e.dI;h.eW=1;d=h;}}if(d!==null)B0(c,d);return c;}
function Ra(a,b,c){var d,e;a:{if(OE(b,c)){d=BU(b.bx);while(true){if(!B5(d)){B0(b.bx,c);c.dI=b;break a;}e=BY(d);if(OE(e,c))break;}Ra(a,e,c);return;}}}
function Sd(a,b,c,d){var e,f,g,h,i,j;if((C9(c)-CX(c)|0)<43)e=B$(d,CX(c),C9(c));else{e=B$(d,CX(c),CX(c)+20|0);f=B$(d,C9(c)-20|0,C9(c));g=new M;O(g);G(G(G(g,e),B(140)),f);e=N(g);}e=Vc(e,B(167),B(223));f=Bu();g=Cx(c);h=new M;O(h);i=T(h,b);BA(i,32);g=G(i,g);BA(g,9);G(g,e);Br(f,N(h));c=BU(c.bx);j=b+1|0;while(B5(c)){Sd(a,j,BY(c),d);}}
function ACr(){AVZ=new Xu;AV0=new Xw;}
function AD1(){var a=this;C.call(a);a.bN=0;a.bS=0;a.fc=0;}
function N0(a,b,c){var d=new AD1();AH3(d,a,b,c);return d;}
function AH3(a,b,c,d){a.bN=b;a.bS=c;a.fc=d;}
function APq(a,b){var c;if(a===b)return 1;if(b!==null&&Cn(a)===Cn(b)){c=b;return a.bN==c.bN&&a.bS==c.bS&&a.fc==c.fc?1:0;}return 0;}
function AGy(a,b){var c;b=b;c=BE(a.bN,b.bN);if(!c)c=BE(b.bS,a.bS);return c;}
var Xu=F();
function AJj(a,b,c){return Vr(b,c);}
var Xw=F();
function AK0(a,b,c){b=b;c=c;return Vr(b.b4,c.b4);}
var EX=F();
var AV1=null;var AV2=null;var AV3=null;var AV4=null;var AV5=null;var AV6=null;function ABS(){AV1=new VA;AV2=new Vy;AV3=new Vz;AV4=new Vw;AV5=new Vx;AV6=new Ya;}
var G2=F(F3);
function ALV(a,b){var c;c=new Fh;V(c);K(c);}
function XI(){G2.call(this);this.te=null;}
function AIp(a){return 1;}
function AQ6(a,b){var c;if(!b)return a.te;c=new Bx;V(c);K(c);}
function YB(){var a=this;C.call(a);a.b4=null;a.dI=null;a.bx=null;a.eW=0;}
function MC(a){var b=new YB();ANO(b,a);return b;}
function ANO(a,b){a.eW=0;a.b4=b;a.dI=null;a.bx=Cm();}
function CX(a){return a.b4.bN;}
function C9(a){return a.b4.bS;}
function Jm(a,b){a.b4.bN=b;}
function Kb(a,b){a.b4.bS=b;}
function Kz(a,b){var c;c=a.b4;c.bN=c.bN+b|0;}
function FV(a,b){var c;c=a.b4;c.bS=c.bS+b|0;}
function Kg(a,b){return CX(a)<=b&&b<C9(a)?1:0;}
function P8(a,b,c){var d;d=a.b4;return d.bN<=b&&c<=d.bS?1:0;}
function OE(a,b){b=b.b4;return P8(a,b.bN,b.bS);}
function AJq(a){var b,c,d,e,f;b=a.b4;c=b.bN;d=b.bS;e=b.fc;b=new M;O(b);BA(b,40);BA(T(G(T(G(T(b,c),B(43)),d),B(43)),e),41);b=N(b);c=a.eW;f=new M;O(f);F2(G(G(f,b),B(43)),c);return N(f);}
var OO=F(0);
var Ga=F(EN);
var Kc=F(Ga);
var VA=F(Kc);
var Lr=F(EA);
var Vy=F(Lr);
var Vz=F(G2);
var FB=F(0);
var Vw=F();
var Pc=F(0);
var Vx=F();
var Ya=F();
function Ns(){var a=this;C.call(a);a.hn=0;a.lN=0;a.ig=0;a.f0=0;a.gz=null;}
function B5(a){return a.hn>=a.ig?0:1;}
function BY(a){var b,c;O2(a);b=a.hn;a.f0=b;c=a.gz;a.hn=b+1|0;return c.rr(b);}
function QL(a){var b,c,d;if(a.f0<0){b=new DY;V(b);K(b);}O2(a);a.gz.uk(a.f0);a.lN=a.gz.ct;c=a.f0;d=a.hn;if(c<d)a.hn=d-1|0;a.ig=a.ig-1|0;a.f0=(-1);}
function O2(a){var b;if(a.lN>=a.gz.ct)return;b=new IG;V(b);K(b);}
function KP(){var a=this;KT.call(a);a.oH=null;a.nm=null;}
function Y6(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.oH;e=0;f=0;g=a.nm;a:{while(true){if((e+32|0)>f&&DM(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Z(B6(b)+j|0,i.length);Np(b,d,j,f-j|0);e=0;}if(!DM(c)){k=!DM(b)&&e>=f?AVt:AVs;break a;}i=g.data;j=Z(B6(c),i.length);l=new Nz;l.mk=b;l.pE=c;k=ABt(a,d,e,f,g,0,j,l);e=l.tb;j=l.uu;if(k===null){if(!DM(b)&&e>=f)k=AVt;else if(!DM(c)&&e>=f)k=AVs;}W5(c,g,0,j);if(k!==null)break;}}ED(b,b.V-(f-e|0)|0);return k;}
var Pe=F(KP);
function ABt(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(LG(h,2))break a;i=AVs;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!L3(l)){if((f+3|0)>g){j=j+(-1)|0;if(LG(h,3))break a;i=AVs;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CD(l)){i=DZ(1);break a;}if
(j>=d){if(DM(h.mk))break a;i=AVt;break a;}c=j+1|0;m=k[j];if(!C4(m)){j=c+(-2)|0;i=DZ(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(LG(h,4))break a;i=AVs;break a;}k=e.data;o=Es(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.tb=j;h.uu=f;return i;}
var Ip=F(D1);
var V5=F();
function AF8(a,b){return b.text();}
function V6(){var a=this;C.call(a);a.oJ=null;a.p1=null;}
function AHb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.oJ;d=a.p1;e=Q(Bv,8);f=BL(16);g=0;h=0;i=b.length;j=0;while(true){k=BE(j,i);if(k>0)break;k=k>=0?10:b.charCodeAt(j)&65535;if(k==10){l=Ht(f,0,g);m=h+1|0;e=AC6(l,e,h);g=0;}else{m=f.data.length;if(m==g)f=Nw(f,m*2|0);n=f.data;o=g+1|0;n[g]=k;m=h;g=o;}j=j+1|0;h=m;}c.l(ASF(ZG(e,h),AJi(d)));}
var V4=F();
function AG9(a,b){ADX(b);}
function HQ(){var a=this;C.call(a);a.cu=null;a.T=null;a.uF=null;a.qc=null;a.pe=null;a.qi=null;a.sV=null;}
function AV7(a,b,c,d){var e=new HQ();JV(e,a,b,c,d);return e;}
function Kk(){var b,c,d,e,f,g,h,i;b=new HQ;c=new IT;d=new G8;G7();JL(d,AV8);Lm(c,d,BF(AVD),BF(AV9),BF(AV$),BF(AVD),BF(AV_),BF(AWa),BF(AWb),BF(AWc),BF(AWd),BF(AWe));ABQ();e=(AWf.eG()).data;f=e.length;g=Q(IE,f);h=g.data;i=0;while(i<f){h[i]=e[i].k1;i=i+1|0;}JV(b,c,g,AAC(),FW());return b;}
function ABV(){var b,c,d,e,f,g,h,i,j,k,l;b=new HQ;c=new IT;d=new G8;AMM();JL(d,AWg);Lm(c,d,BF(AWh),BF(AWi),BF(AWj),BF(AWh),BF(AWk),BF(AWl),BF(AWm),BF(AWn),BF(AWo),BF(AWp));ABo();e=(AWq.eG()).data;f=e.length;g=Q(IE,f);h=g.data;i=0;while(i<f){h[i]=e[i].ke;i=i+1|0;}j=AAJ(S(B(224)),S(B(225)),S(B(226)),S(B(227)));d=new H1;k=new Hy;AJG();l=AWr;JR(k,l,AWs,AWt,AWu,AWv,l);K2(d,k,AAz(),Zg(S(B(228)),S(B(229)),S(B(230))),AAz(),Zx(1,0.17499999701976776),AWw,AWx);JV(b,c,g,j,d);return b;}
function AAX(){var b,c,d,e,f,g,h,i,j,k,l;b=new HQ;c=new IT;d=new G8;ABF();JL(d,AWy);Lm(c,d,BF(AWz),BF(AWA),BF(AWB),BF(AWz),BF(AWC),BF(AWD),BF(AWE),BF(AWF),BF(AWG),BF(AWH));Z5();e=(AWI.eG()).data;f=e.length;g=Q(IE,f);h=g.data;i=0;while(i<f){h[i]=e[i].kR;i=i+1|0;}j=AAJ(S(B(231)),S(B(232)),S(B(233)),S(B(234)));d=new H1;k=new Hy;AOt();l=AWJ;JR(k,l,AWK,AWL,AWM,AWN,l);K2(d,k,Y0(),Zg(S(B(235)),S(B(236)),C3(0)),Y0(),Zx(1,0.07500000298023224),AWO,AWP);JV(b,c,g,j,d);return b;}
function JV(a,b,c,d,e){var f;f=c.data;a.pe=EQ(B(127),16.0);a.qi=EQ(B(127),17.0);a.sV=EQ(B(126),15.0);a.cu=b;a.uF=c;a.qc=d;if(f.length>=15){a.T=e;return;}b=new BD;V(b);K(b);}
var He=F(0);
function KC(){var a=this;C.call(a);a.du=null;a.dx=null;}
function AHw(a,b){var c,d;if(a===b)return 1;if(!ID(b,He))return 0;a:{b:{c:{d:{c=b;b=a.du;if(b!==null){if(!b.cD(c.du))break c;else break d;}if(c.du!==null)break c;}b=a.dx;if(b!==null){if(!b.cD(c.dx))break c;else break b;}if(c.dx===null)break b;}d=0;break a;}d=1;}return d;}
function H_(){var a=this;KC.call(a);a.iK=0;a.cN=null;}
function Kw(){var a=this;CQ.call(a);a.cJ=null;a.fY=null;}
function AUa(a){var b=new Kw();Ym(b,a);return b;}
function Ym(a,b){var c,d,e,f;Fg(a,b);c=ANv(a.s);a.fY=c;d=ADL(a.s,c);a.cJ=d;W0(a.s,d);W(b.m.bt,a.fY);W(b.m.df,a.fY);W(b.m.bt,a.cJ);c=b.m.b3;d=new R4;d.oh=a;W(c,d);c=b.m.b3;d=new HE;e=a.cJ;BG(e);f=new R8;f.uc=e;R_(d,b,f);W(c,d);c=b.m.fn;d=a.cJ;BG(d);e=new R7;e.l5=d;W(c,e);c=b.m.fR;d=new R6;d.pj=a;W(c,d);c=b.m.df;d=new R5;d.u5=a;W(c,d);b=b.m.ej;c=new R9;c.mQ=a;W(b,c);ACk(a);}
function AG4(a,b){return KZ(a.cJ,b);}
function AJW(a){E3(a);L$(a.cJ);Wj(a.fY);}
function ANP(a){return XK(0);}
function AMn(a,b,c){GR(a,b,c);a.kJ(b,c);}
function AAa(a,b,c){LC(a.cJ,new Bk,b,c);}
function AMk(a){Jv(a,Kk());}
function ACk(a){Jv(a,ABV());}
function ALl(a){Jv(a,AAX());}
function Jv(a,b){BG(b);PB(a.fY,b);Lf(a.cJ,b);}
function AEb(a,b){if(b.bh!=121)return 0;return 1;}
function Za(a,b){var c,d,e;if(DW(a.s,a.cJ)){c=a.fY;d=a.cJ;e=new NL;e.sQ=a;KA(c,b,d,a,d,e);}return 1;}
function YU(){var a=this;CC.call(a);a.lI=null;a.kX=null;a.dc=null;a.gj=null;a.fa=null;a.g3=null;a.vj=null;a.gS=null;a.q6=null;a.lK=null;a.vA=null;a.wD=null;a.fS=null;a.jt=null;a.qg=0;}
function ASs(a){var b=new YU();ALo(b,a);return b;}
function ALo(a,b){var c,d,e,f,g,h,i;EP(a,b);c=(Kk()).cu.gu;a.lI=c;a.kX=AQI(c);a.dc=Fd(0,0,300,300);a.gj=SI(0,0,3,3);a.fa=Fd(0,0,300,300);a.g3=AMN();d=Q(Bv,4);e=d.data;e[0]=B(178);e[1]=B(161);e[2]=B(201);e[3]=B(200);a.vj=d;a.gS=Q(Iz,e.length);c=b.bk;f=b.m.bt;g=new TR;g.e$=a;W(f,g);f=b.m.b3;g=new RH;g.u7=a;W(f,g);f=b.m.l0;g=new RG;g.of=a;W(f,g);f=b.m.fn;g=new RJ;g.w3=a;W(f,g);f=b.m.je;g=new RI;g.vt=a;W(f,g);f=b.m.ej;g=new RF;g.wz=a;W(f,g);b=b.m.df;f=new RE;f.td=a;W(b,f);h=CK(a.bj.bk,300,300);f=h.bn;b="white";f.fillStyle
=b;b=h.bn;f="white";b.strokeStyle=f;b=h.bn;f=10.0;b.lineWidth=f;h.bn.strokeRect(75.0,140.0,150.0,110.0);h.bn.fillRect(130.0,190.0,40.0,60.0);h.bn.beginPath();h.bn.moveTo(50.0,140.0);h.bn.lineTo(150.0,60.0);h.bn.lineTo(250.0,140.0);h.bn.closePath();h.bn.stroke();FZ(h,B(237),11.0);Lp(h,187,187,187);Pd(a,B(238),h);b=CU(a.bj.bk);CM(b,h);FM(h);a.q6=b;Gf(a.dc,b);GZ(a.dc);BI(a.dc.b2,a.lI);BI(a.dc.bT,CL(204,120,50));b=CK(c,255,100);a.fS=b;FZ(b,B(127),11.0);b=Bu();i=$rt_str(a.fS.bn.font);g=new M;O(g);G(G(g,B(239)),i);Br(b,
N(g));Eo(a.fS,B(240));Lp(a.fS,169,183,198);Pd(a,B(240),a.fS);b=CU(c);a.lK=b;CM(b,a.fS);Gf(a.fa,a.lK);GZ(a.fa);F$(a.fa,C3(255));Hw(a.fa,a.lI);a.vA=CU(c);BI(a.gj.b2,a.kX);}
function Pd(a,b,c){Ch(c,b,0.0,20.0);Ch(c,b,0.25,40.0);Ch(c,b,0.5,60.0);Ch(c,b,0.75,80.0);}
function WV(a,b){Ju(Fu(),0.5+Fu()*0.5,0.5+Fu()*0.5,1.0,b.bT);}
function AFd(a,b){var c;a.qg=a.qg+1|0;c=b/5.0;Ju(c-(c|0),1.0,1.0,1.0,a.gj.bT);return SY(a.g3,b);}
function AIi(a){var b,c,d,e,f,g;b=a.bj.bk;Gw(b,a.kX);c=a.gS.data;d=c.length;e=0;while(e<d){Uv(c[e],b,0,0);e=e+1|0;}DD(a.dc,b,a.q6,0,0,0.5);f=a.lK;d=0;while(d<7){g=a.fa;DD(g,b,f,Ba(d,10+((10*g.y.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.wD;if(g!==null)T9(a.gj,b,g,0,0,0.0);U9(a.g3,b,new Bk);NN(b,B(241));}
function AOP(a,b,c){var d,e,f,g,h,i,j,k,l;d=Bu();e=Cx(b);f=new M;O(f);G(G(f,B(242)),e);Br(d,N(f));g=Bu();d=new M;O(d);Fj(G(d,B(243)),c);Br(g,N(d));h=B_(30.0,c);i=B_(10.0,c);j=0;while(true){k=a.gS.data;if(j>=k.length)break;l=1+j|0;k[j]=SI(Ba(i,l)+Ba(h,j)|0,h,h,h);WV(a,a.gS.data[j]);j=l;}Bg(a.gj.P,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dc;g=d.P;h=b.b;d=d.y;Bg(g,(h-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.fa;d.P.a=b.a-d.y.a|0;}
function OS(a,b){var c,d,e,f,g;c=Bu();d=!b.hg?B(244):B(245);e=b.dE;f=b.bh;g=b.rA;b=new M;O(b);F2(G(T(G(G(G(b,d),e),B(246)),f),B(247)),g);Br(c,N(b));return 0;}
function Wg(){var a=this;CQ.call(a);a.rg=null;a.dw=null;a.cI=null;a.d5=null;a.lb=null;}
function AQe(a,b,c){var d;d=GL(a.s,a.lb);HZ(a.dw,d);HZ(a.cI,d);GT(a.dw,a.s);GT(a.cI,a.s);}
function Nx(b){return IY(b,APH());}
function IY(b,c){var d;d=PL();Kv(d,KO(b,Ir(c,25)),!b?null:IY(b-1|0,c));Kv(d,KO(b,Ir(c,20)),!b?null:IY(b-1|0,c));Kv(d,KO(b,Ir(c,15)),!b?null:IY(b-1|0,c));Kv(d,KO(b,Ir(c,10)),!b?null:IY(b-1|0,c));return Hm(d);}
function KO(b,c){var d;if(b){d=new M;O(d);G(G(T(d,b),B(36)),c);c=N(d);}return c;}
function Kv(b,c,d){var e,f;e=new Gt;f=Ju(Fu(),1.0,1.0,1.0,new BZ);XT();Hk(e,f,AWQ,AWR);if(d!==null)GF(b,c,e,d);else{d=new Uj;d.tg=c;D3(b,c,e,d);}}
function AHN(a,b,c){var d,e;GR(a,b,c);b=a.s.b7;d=D_(a.dw);e=D_(a.cI);JW(a.dw,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);JW(a.cI,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AIx(a){var b,c,d,e,f,g,h,i;E3(a);b=a.bj.bk;CJ(b,1);c=a.rg;d=a.s;e=d.b7;Bg(c.lx,e.b,B_(2.0,d.bM));Bg(c.jT,B_(2.0,d.bM),e.a);G7();f=AWd;g=d.cV;h=e.a/2|0;i=c.lx;By(g,0,h-(i.a/2|0)|0,i,f);g=d.cV;h=e.b/2|0;c=c.jT;By(g,h-(c.b/2|0)|0,0,c,f);JC(a.dw,a.s);JC(a.cI,a.s);Im(a.d5);CJ(b,0);}
function AN_(a,b){var c,d,e;c=Ku(a.d5,b);d=Kh(a.dw,b.h,a.s.cA);e=Kh(a.cI,b.h,a.s.cA);return !c&&!d&&!e?0:1;}
function AIF(a,b,c){return Jf(a.d5,b,c);}
function AGn(a,b,c){return DI(a.d5);}
function ANs(a,b,c,d){var e,f,g;e=Jk(a.d5,b,c,d);f=J$(a.dw,b.h,c,d);g=J$(a.cI,b.h,c,d);return !e&&!f&&!g?0:1;}
function Xt(){var a=this;CQ.call(a);a.g6=null;a.ei=null;a.hT=null;a.ki=null;}
function AII(a,b,c){if(b===0.0)XN(a);}
function ANM(a){var b;E3(a);b=a.bj.bk;I5(a.ei,b);Im(a.g6);}
function XN(a){var b,c,d,e,f,g,h;b=a.hT;if(b!==null){J7(a.ei,b);JT(b);}b=(Kk()).T;c=AT1(a.s,new VV);d=EQ(B(126),14.0);e=ANx();f=0;while(f<300){g=C5(f);h=new Yh;h.r3=B(248);h.r2=g;h.r1=B(249);M4(e,B(248),g,B(249),h);f=f+1|0;}VZ(c,QO(e));XQ(c,b,d);g=ABI(a.s);h=Zv(c,a.s);Qx(h,b.lw,b.jX);LK(g,h);g.ec=b;IC(g,B(250),a.ki,2.0);a.hT=g;IS(a.ei,g);Ux(a);}
function AGY(a,b,c){GR(a,b,c);PQ(a.ei,b,c);Ux(a);}
function Ux(a){var b,c,d;b=a.s.b7;Fm(a.hT,BX((b.b*2|0)/10|0,(b.a*4|0)/10|0),BX((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.hT;b=Yj(c.O.q);d=new M;O(d);G(G(d,B(251)),b);IC(c,N(d),a.ki,2.0);}
function AOV(a,b){return Oe(a.ei,b);}
function Yd(){var a=this;CQ.call(a);a.hQ=null;a.fx=null;a.e2=null;a.i9=null;a.ot=null;a.h8=null;a.fI=null;a.ft=null;a.i3=0;a.fT=0;}
function WO(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.fx.i>0){d=Fu();e=a.fx;f=d*(e.i-1|0)|0;e=El(e,f);El(a.e2,f);f=a.fT;g=e.y;a.fT=f-Ba(g.b,g.a)|0;Ie(a.hQ,e.c6);}c=c+1|0;}}
function Ks(a,b){var c,d,e,f,g,h,i,j;c=IH(a.s);Cy(c,a.i9);d=0;while(d<b){e=Ir(a.h8,1+(Fu()*19.0|0)|0);f=ALD();g=f.c6;h=a.hQ;BG(c);i=new Rl;i.oL=c;BI(g,Hf(h,e,i));(W2(Fu(),1.0,1.0,f.b2)).bA=0.5;h=f.P;g=f.c6;Bg(h,g.bl|0,g.bz|0);h=f.y;g=f.c6;Bg(h,g.bi|0,g.bA|0);B0(a.e2,e);B0(a.fx,f);j=a.fT;h=f.y;a.fT=j+Ba(h.b,h.a)|0;d=d+1|0;}a.ft=L6(a.hQ);}
function AOj(a){var b,c,d,e,f,g,h,i;E3(a);b=a.bj.bk;CJ(b,1);c=a.s.cV;if(a.e2.i){d=a.ft;d=CK(c,d.b,d.a);Cy(d,a.i9);e=a.i9.dt;By(c,0,0,a.ft,a.ot);f=0;while(f<a.e2.i){g=Bp(a.fx,f);h=Bp(a.e2,f);g=g.c6;Ch(d,h,g.bl,g.bz+e);f=f+1|0;}g=a.fI;if(!(g!==null&&Ce(g)==a.ft.b&&C8(a.fI)==a.ft.a))a.fI=CG(a.fI,CU(c));CM(a.fI,d);FM(d);i=0;while(i<a.e2.i){d=Bp(a.fx,i);F$(d,C3(0));DD(d,c,a.fI,0,0,0.0);i=i+1|0;}}CJ(b,0);}
function AHp(a,b){var c,d;if(a.i3){c=a.ft;d=Z(Ba(c.b,c.a),2211840);if(a.fT/d<=0.7)Ks(a,Ig(a.h8,5));else WO(a,Ig(a.h8,5));}return a.i3;}
function O6(){var a=this;CC.call(a);a.d0=null;a.fN=null;a.gF=null;a.kw=null;a.dZ=0;a.rP=0;a.ul=null;a.ly=0;a.uC=0;a.sP=null;a.oj=null;}
function AFw(a){var b,c;b=a.dZ;c=new M;O(c);T(G(c,B(252)),b);$rt_globals.console.info($rt_ustr(N(c)));Gw(a.d0,a.ul);Is(a.gF,a.dZ,0,F8(a),5000,a.kw.b,20);CJ(a.d0,1);PU(a.gF,a.d0);CJ(a.d0,0);b=a.dZ;c=new M;O(c);T(G(c,B(252)),b);$rt_globals.console.info($rt_ustr(N(c)));XM(a.fN,a.dZ/a.ly|0);Qy(a.fN,a.dZ,F8(a),a.oj,a.d0);}
function APY(a,b,c){a.kw=b;Vq(a.fN,BX(0,0),50,F8(a),c);JZ(a.fN,a.d0,0,F8(a));}
function PK(a){return 5000-F8(a)|0;}
function F8(a){return Z(a.rP,a.kw.a);}
function Dc(){var a=this;CC.call(a);a.lk=null;a.gq=null;a.vv=0.0;}
function AWS(a){var b=new Dc();Gi(b,a);return b;}
function Gi(a,b){EP(a,b);a.lk=ZN(0,0,64);a.gq=new Bk;Nr(b.bO,H2(Cn(a)));}
function Se(a){Gw(a.bj.bk,a.lk);}
function SM(a,b,c){CA(a.gq,b);a.vv=c;}
var QX=F(Dc);
var AD7=F(Dc);
function ATO(a){var b=new AD7();AM3(b,a);return b;}
function AM3(a,b){var c,d,e,f,g,h;Gi(a,b);c=b.bO;d=new Rk;d.v5=a;e=Q(C,1);e.data[0]=B(253);CO(c,d,B(254),e);f=b.bO;g=new Rj;g.xS=a;h=Q(C,1);h.data[0]=AAW([1,2,3,4,5]);CO(f,g,B(255),h);f=b.bO;g=new Ri;g.oc=a;h=Q(C,1);h.data[0]=AS9([1,2,3,4,5]);CO(f,g,B(256),h);f=b.bO;g=new Rh;g.vN=a;h=Q(C,1);h.data[0]=E4([1,2,3,4,5]);CO(f,g,B(257),h);f=b.m.b3;d=new HE;g=new Rf;g.wS=a;c=new Re;c.p3=a;Vs(d,b,g,c);W(f,d);}
function Uy(a,b){var c,d,e,f,g,h;c=b.data;d=Bu();e=Cx(c[0]);f=new M;O(f);G(G(f,B(258)),e);Br(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((RX(b,1)).ha));d=Bu();e=Cx(c[1]);if(b===null)f=B(29);else{f=new M;O(f);B1(f,B(42));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)B1(f,B(43));T(f,c[g]);g=g+1|0;}B1(f,B(44));f=N(f);}h=new M;O(h);G(G(G(G(h,B(259)),e),B(260)),f);Br(d,N(h));}
function WY(){var a=this;Dc.call(a);a.dK=null;a.eO=null;a.j7=null;a.pp=null;a.la=null;}
function AKV(a,b){b=b/5.0;Ju(b-(b|0),1.0,1.0,1.0,a.eO.bT);return 0;}
function AE8(a){Se(a);DD(a.dK,a.bj.bk,a.pp,0,0,0.5);T9(a.eO,a.bj.bk,a.j7,0,0,0.0);NN(a.bj.bk,B(241));}
function ANK(a,b,c){var d,e,f;SM(a,b,c);Bg(a.eO.P,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dK;e=d.P;f=b.b;d=d.y;Bg(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Sh(){var a=this;Dc.call(a);a.f$=null;a.rs=null;a.jH=null;a.h_=null;a.hm=null;}
function ARo(a){var b,c,d,e,f,g;Se(a);b=a.bj.bk;c=a.h_;Lx(b,c.b,c.a,a.hm);b=a.f$;c=a.rs;d=a.gq;e=a.bj.bk;f=0;while(true){g=0;while(true){DD(b,e,c,g,f,0.5);g=g+Ce(c)|0;if(g>=d.b)break;}f=f+C8(c)|0;if(f>=d.a)break;}Iy(a.bj.bk);}
function AGQ(a,b,c){SM(a,b,c);Bg(a.hm,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function OI(){var a=this;CC.call(a);a.d9=null;a.jA=null;a.e9=null;a.b1=null;a.ey=0;a.hw=null;a.ez=0;a.wA=20;a.x$=11;a.wh=220;a.iU=null;a.wY=5000;a.gs=0;a.fj=null;}
function ARr(a){var b,c,d,e,f,g,h;b=a.hw;c=a.ez;d=a.iU;Is(b,c,0,d.a,5000,d.b,20);CJ(a.d9,1);PU(a.hw,a.d9);if(a.b1===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Ch(a.jA,C5(e),0.0,c);}b=CU(a.d9);a.b1=b;CM(b,a.jA);}if(a.ez<=a.ey)while(true){f=a.ey;if(f<=a.ez)break;a.ey=f-20|0;b=a.e9;g=a.gs-1|0;a.gs=g;Ch(b,C5(g),0.0,20.0);HW(a.b1,a.e9,0,a.ey%220|0);Eu(a.e9);}else while(a.ey<(a.ez-20|0)){b=a.e9;g=a.gs+1|0;a.gs=g;Ch(b,C5((g+11|0)-1|0),0.0,20.0);HW(a.b1,a.e9,0,a.ey%220|0);Eu(a.e9);a.ey=a.ey+20|0;}b=Fd(0,0,Ce(a.b1),C8(a.b1));HB(b,
0,0,Ce(a.b1),C8(a.b1));F$(b,a.fj.data[0]);Hw(b,a.fj.data[1]);DD(b,a.d9,a.b1,400,0,1.0);g=a.ez%220|0;f=Z(C8(a.b1)-g|0,200);d=Fd(0,0,Ce(a.b1),f);HB(d,0,g,Ce(a.b1),f);F$(d,a.fj.data[0]);Hw(d,a.fj.data[1]);DD(d,a.d9,a.b1,0,0,1.0);h=Fd(0,f,Ce(a.b1),(C8(a.b1)-f|0)-20|0);HB(h,0,0,Ce(a.b1),(C8(a.b1)-f|0)-20|0);F$(h,a.fj.data[1]);Hw(h,a.fj.data[0]);DD(h,a.d9,a.b1,0,0,1.0);}
function AI4(a,b,c){CA(a.iU,b);}
function AHv(a,b){return 0;}
function RQ(a){return 5000-a.iU.a|0;}
function It(){Dc.call(this);this.dy=0;}
function Rb(a){var b,c;b=a.bj.bO;c=new Qa;c.mp=a;QN(b,c,Rz(a));}
function Mv(a){var b,c,d,e;b=a.dy+1|0;a.dy=b;c=H2(E(It));d=new M;O(d);G(G(T(G(d,B(261)),b),B(36)),c);e=N(d);c=a.bj.bO;d=new Ub;d.pG=e;Uo(c,e,d,Rz(a));}
function Rz(a){var b;b=new VM;b.oo=a;return b;}
function AOJ(a,b,c,d){a:{switch(c){case 0:break;case 2:Mv(a);break a;default:break a;}Rb(a);}return 1;}
function P2(){var a=this;CC.call(a);a.m6=null;a.e3=null;a.lc=null;a.hR=null;}
function ARi(a){var b;b=a.bj.bk;Gw(b,a.m6);DD(a.e3,b,a.lc,0,0,0.5);}
function ALU(a,b,c){var d,e,f;d=a.e3;e=d.P;f=b.b;d=d.y;Bg(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Wy(){var a=this;CQ.call(a);a.gA=null;a.d1=null;a.i0=null;a.i1=null;a.sO=null;}
function AJ4(a,b,c){if(b===0.0)NF(a);}
function ARI(a){var b;E3(a);b=a.bj.bk;I5(a.d1,b);Im(a.gA);}
function NF(a){WM(a,a.i0);WM(a,a.i1);a.i0=MY(a,0.5,0,B(262));a.i1=MY(a,1.0,1,B(263));IS(a.d1,a.i0);IS(a.d1,a.i1);W9(a);}
function WM(a,b){if(b!==null){J7(a.d1,b);JT(b);}}
function MY(a,b,c,d){var e,f,g;e=ABI(a.s);f=new V2;g=new Pn;g.sT=a;g.sU=e;g.sR=d;TP(f);f.hJ=new BZ;f.k0=new Bk;f.r0=g;f.pD=b;if(c)f=Zv(f,a.s);LK(e,f);e.ec=FW();return e;}
function AN3(a,b,c){GR(a,b,c);PQ(a.d1,b,c);W9(a);}
function W9(a){var b;b=a.s.b7;Fm(a.i1,BX((b.b*2|0)/10|0,(b.a*2|0)/10|0),BX((b.b*7|0)/10|0,(b.a*7|0)/10|0));Fm(a.i0,BX(b.b/10|0,b.a/10|0),BX((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function AKR(a,b){return Oe(a.d1,b);}
var Rg=F(Kw);
function AJ9(a){return XK(1);}
function ALY(a,b,c){AAa(a,b,c);}
function IT(){var a=this;C.call(a);a.s$=null;a.gu=null;a.uZ=null;a.xW=null;a.n5=null;a.kA=null;a.p0=null;a.n8=null;a.lr=null;a.lM=null;a.iM=null;}
function AWT(a,b,c,d,e,f,g,h,i,j,k){var l=new IT();Lm(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Lm(a,b,c,d,e,f,g,h,i,j,k,l){a.s$=b;a.gu=c;a.uZ=d;a.xW=e;a.n5=f;a.kA=g;a.p0=h;a.n8=i;a.lr=j;a.lM=k;a.iM=l;}
var ACh=F(0);
function Zp(){var a=this;C.call(a);a.h$=null;a.g9=null;a.op=null;a.uf=null;}
function AAJ(a,b,c,d){var e=new Zp();ANz(e,a,b,c,d);return e;}
function AAC(){return AAJ(S(B(264)),S(B(265)),S(B(266)),S(B(267)));}
function ANz(a,b,c,d,e){a.h$=b;a.g9=c;a.op=d;a.uf=e;}
function H1(){var a=this;C.call(a);a.iV=null;a.hY=null;a.m_=null;a.pw=null;a.bg=null;a.lw=null;a.jX=null;}
function AWU(a,b,c,d,e,f,g){var h=new H1();K2(h,a,b,c,d,e,f,g);return h;}
function K2(a,b,c,d,e,f,g,h){a.m_=b;a.pw=c;a.hY=d;a.bg=e;a.iV=f;a.lw=g;a.jX=h;}
function FW(){var b,c,d;b=new H1;c=new Hy;XT();d=AWV;JR(c,d,AWW,AWX,AWY,AWZ,d);K2(b,c,ABz(),Zg(S(B(268)),S(B(229)),S(B(230))),ABz(),Zx(1,0.125),AW0,AW1);return b;}
function Mi(){var a=this;C.call(a);a.iH=null;a.h7=null;}
function Ms(a,b){var c;c=a.h7;a.h7=b;return c;}
function Jo(){var a=this;Mi.call(a);a.bL=null;a.bY=null;a.fi=0;a.fr=0;}
function JJ(a){var b;b=KU(a);if(b==2){if(KU(a.bY)<0)a.bY=M7(a.bY);return OF(a);}if(b!=(-2))return a;if(KU(a.bL)>0)a.bL=OF(a.bL);return M7(a);}
function KU(a){var b,c;b=a.bY;c=b===null?0:b.fi;b=a.bL;return c-(b===null?0:b.fi)|0;}
function M7(a){var b;b=a.bL;a.bL=b.bY;b.bY=a;Ei(a);Ei(b);return b;}
function OF(a){var b;b=a.bY;a.bY=b.bL;b.bL=a;Ei(a);Ei(b);return b;}
function Ei(a){var b,c,d;b=a.bY;c=b===null?0:b.fi;b=a.bL;d=b===null?0:b.fi;a.fi=Bb(c,d)+1|0;a.fr=1;b=a.bL;if(b!==null)a.fr=1+b.fr|0;b=a.bY;if(b!==null)a.fr=a.fr+b.fr|0;}
var ADP=F();
function AGd(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new O1;c=c.buffer;d.fh=c;d.lT=new $rt_globals.Int8Array(c);d.jB=new $rt_globals.Uint16Array(c);d.sn=new $rt_globals.Int32Array(c);d.o4=new $rt_globals.Float32Array(c);d.pl=new $rt_globals.Float64Array(c);e=d.fh.byteLength;c=new M;O(c);T(G(c,B(269)),e);CF(N(c));e=b.callToCpp1();c=new M;O(c);T(G(c,B(270)),e);CF(N(c));f=b.callToCpp2();c=new M;O(c);Fj(G(c,B(271)),f);CF(N(c));c=MT(d,b.getC8String());g=new M;O(g);G(G(g,B(272)),c);CF(N(g));c
=M1(d,b.getC16String());g=new M;O(g);G(G(g,B(273)),c);CF(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.fh,h,8));c=ACz(i);g=new M;O(g);G(G(g,B(274)),c);CF(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.fh,h,8));c=AO4(j);g=new M;O(g);G(G(g,B(275)),c);CF(N(g));k=AAD(d,b.getCDoubleArray8(),8);l=ARK(k);c=new M;O(c);G(G(c,B(276)),l);CF(DS(c));l=ARx(b.getC8String(),B(277),d);c=LM();G(G(c,B(278)),l);CF(DS(c));l=ALL(b.getC16String(),B(279),
d);c=LM();G(G(c,B(280)),l);CF(DS(c));c=ANF(i,d,b.getCIntArray8(),E4([11,22,33,44,55,66,77,88]));g=LM();G(G(g,B(281)),c);CF(DS(g));c=APi(j,d,b.getCFloatArray8(),100,E4([111,222,333,444,555,666,777,888]));g=LM();G(G(g,B(282)),c);CF(DS(g));b=APy(k,d,b.getCDoubleArray8(),1000,E4([1111,2222,3333,4444,5555,6666,7777,8888]));c=LM();G(G(c,B(283)),b);CF(DS(c));}
function APi(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(284);h=0;i=e;a:{while(h<g){if(Dg(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.o4[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(285);}return B(286);}
function APy(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(284);h=0;i=e;a:{while(h<g){if(Hc(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.pl[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(285);}return B(286);}
function ANF(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(284);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.sn[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(285);}return B(286);}
function ARx(b,c,d){var e,f,g,h;e=MT(d,b);if(!Bq(c,e))return B(287);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.lT[h])return B(288);f=f+1|0;}return B(285);}
function ALL(b,c,d){var e,f,g,h;e=M1(d,b);if(!Bq(c,e))return B(287);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.jB[h>>>1|0]&65535))return B(288);f=f+1|0;}return B(285);}
function CF(b){OY(B(2),b);}
function AKE(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function R4(){C.call(this);this.oh=null;}
function AL8(a,b){return AEb(a.oh,b);}
function R8(){C.call(this);this.uc=null;}
function AQZ(a,b){KG(a.uc,b);}
function R7(){C.call(this);this.l5=null;}
function AL9(a,b,c){return GA(a.l5,b,c);}
function R6(){C.call(this);this.pj=null;}
function AQJ(a){var b,c;b=a.pj.cJ;BG(b);c=new XU;c.na=b;return c;}
function R5(){C.call(this);this.u5=null;}
function AP$(a,b,c,d){return JE(a.u5.cJ,c,d);}
function R9(){C.call(this);this.mQ=null;}
function AJe(a,b){b=b;return Za(a.mQ,b);}
function ADi(){Iz.call(this);this.c6=null;}
function ALD(){var a=new ADi();AF$(a);return a;}
function Fd(a,b,c,d){var e=new ADi();ALC(e,a,b,c,d);return e;}
function AF$(a){Sb(a);a.c6=new BZ;}
function ALC(a,b,c,d,e){Sb(a);a.c6=new BZ;PR(a,b,c,d,e);}
function GZ(a){var b,c;b=a.y;c=a.c6;Bg(b,c.bi-c.bl|0,c.bA-c.bz|0);}
function Gf(a,b){HB(a,0,0,Ce(b),C8(b));}
function HB(a,b,c,d,e){CE(a.c6,b,c,d,e);}
function DD(a,b,c,d,e,f){var g;g=a.P;EG(b,g.b+d|0,g.a+e|0,a.y,a.c6,c,a.bT,a.b2,f);}
function F$(a,b){BI(a.bT,b);}
function Hw(a,b){BI(a.b2,b);}
function TR(){C.call(this);this.e$=null;}
function ANW(a,b){var c,d,e,f,g,h,i;c=a.e$;d=c.jt;if(d!==null){e=c.dc.P;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.jt=g;}d=b.h;f=d.b;c=c.gj;e=c.y;h=f-e.b|0;f=d.a-e.a|0;Bg(c.P,h,f);c=a.e$;d=c.bj.bO;b=b.h;f=0;a:{while(true){i=c.gS.data;if(f>=i.length)break;if(Eq(i[f],b)){b=c.vj.data[f];break a;}f=f+1|0;}b=null;}Go(d,b);return 1;}
function APo(a,b,c,d){if(!c&&d==2){b=a.e$;WV(b,b.dc);}return 1;}
function AIf(a,b,c){var d,e;d=Bu();e=new M;O(e);T(G(e,B(289)),c);Br(d,N(e));if(!c){d=b.h;b=a.e$;b.jt=!Eq(b.dc,d)?null:d;PJ(a.e$.g3,d.b,d.a);b=a.e$;Sp(b.g3,Jp(b.bj.bO));}return AVO;}
function AHS(a,b,c){var d;b=Bu();d=new M;O(d);T(G(d,B(290)),c);Br(b,N(d));return 1;}
function RH(){C.call(this);this.u7=null;}
function ANQ(a,b){return OS(a.u7,b);}
function RG(){C.call(this);this.of=null;}
function AQl(a,b){return OS(a.of,b);}
function RJ(){C.call(this);this.w3=null;}
function AQR(a,b,c){var d,e;Br(Bu(),B(291));d=!c?B(292):B(28);e=new M;O(e);G(G(G(e,B(293)),d),B(294));Wm(b,N(e));return 1;}
function RI(){C.call(this);this.vt=null;}
function AQP(a){Br(Bu(),B(295));}
function RF(){C.call(this);this.wz=null;}
function AMc(a,b){Br(Bu(),B(296));return 1;}
function RE(){C.call(this);this.td=null;}
function AJR(a,b,c,d){var e,f,g;b=a.td;e=( -d|0)/10|0;b=b.dc;f=b.y;f.b=f.b+e|0;f.a=f.a+e|0;b=b.P;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function G8(){var a=this;BZ.call(a);a.f6=0;a.f9=0;a.f7=0;a.f8=0;}
function C3(a){var b=new G8();ARm(b,a);return b;}
function CL(a,b,c){var d=new G8();AHK(d,a,b,c);return d;}
function S(a){var b=new G8();APl(b,a);return b;}
function Ft(a,b,c,d){var e=new G8();Qw(e,a,b,c,d);return e;}
function BF(a){var b=new G8();JL(b,a);return b;}
function ARm(a,b){Qw(a,b,b,b,255);}
function AHK(a,b,c,d){Qw(a,b,c,d,255);}
function APl(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.f6=IV(L(b,1))*17|0;a.f9=IV(L(b,2))*17|0;a.f7=IV(L(b,3))*17|0;a.f8=255;}else{a.f6=Lw(L(b,1),L(b,2));a.f9=Lw(L(b,3),L(b,4));a.f7=Lw(L(b,5),L(b,6));a.f8=I(b)!=9?255:Lw(L(b,7),L(b,8));}Hz(a.f6,a.f9,a.f7,a.f8,a);return;}}
function Qw(a,b,c,d,e){a.f6=b;a.f9=c;a.f7=d;a.f8=e;Hz(b,c,d,e,a);}
function JL(a,b){a.f6=b.f6;a.f9=b.f9;a.f7=b.f7;a.f8=b.f8;BI(a,b);}
function IV(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Lw(b,c){return (16*IV(b)|0)+IV(c)|0;}
function U1(){var a=this;C.call(a);a.lx=null;a.jT=null;}
function ZK(){var a=this;C.call(a);a.fb=null;a.cd=null;a.ef=null;a.f_=null;a.k7=null;a.ca=null;a.fA=null;a.cQ=0;a.eK=0;a.ln=0;a.gM=0;a.fC=0;a.i$=null;a.js=null;a.sX=null;}
function Y9(){var a=new ZK();AQS(a);return a;}
function AQS(a){a.cd=AK$();a.ef=new Bk;a.f_=new Bk;a.ca=AW2;a.gM=(-1);}
function KS(a,b){TK(a);a.ca=b;}
function HZ(a,b){a.fb=b;TK(a);}
function H7(a,b){var c,d,e,f,g;a.k7=b.iV;c=b.bg.ho;BI(a.cd.bT,c);c=b.hY.jR;BI(a.cd.b2,c);d=0;while(true){e=a.ca.data;if(d>=e.length)break;c=e[d];f=b.bg;c.jc=f;c=c.dl;g=f.kZ;f=f.ho;BI(c.bT,g);BI(c.b2,f);d=d+1|0;}}
function Tw(a){a.fA=CG(a.fA,null);Bg(a.ef,0,0);a.ca=AW2;a.gM=(-1);S2(a.cd);}
function GT(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=IH(b);d=b.bM;BG(a.fb);Cy(c,a.fb);e=J3(a.fb,1.25);f=0;a.cQ=B_(2.0,d);a.eK=B_(3.0,d);a.ln=B_(12.0,d);g=0;h=a.ca.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=QM(c,l.j9);n=a.ln;n=(n+m|0)+n|0;f=Bb(f,n);b=l.dl;l=b.P;l.b=g;l.a=0;l=b.y;l.b=n;l.a=e;CE(b.c6,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.ef;b.b=g;b.a=e;b=a.cd.y;n=a.fC;if(!n){m=a.cQ;m=(g+m|0)+Ba(m,a.ca.data.length)|0;}else m=(f+(a.cQ*2|0)|0)+(a.eK*2|0)|0;b.b=m;if(!n)e=e+(a.cQ*2|0)|0;else{n=a.cQ;e=(Ba(e+n|0,a.ca.data.length)
+n|0)+(a.eK*2|0)|0;}b.a=e;}
function JW(a,b,c){var d,e,f,g,h,i,j;Bg(a.cd.P,b,c);d=a.cQ+a.eK|0;e=a.ca.data;f=e.length;g=0;h=d;while(g<f){i=e[g].dl;j=i.P;j.b=b+d|0;j.a=c+h|0;if(!a.fC){if(!i.y.b)AEn();d=d+(i.y.b+a.cQ|0)|0;}else{if(!i.y.a)AEn();h=h+(i.y.a+a.cQ|0)|0;}g=g+1|0;}}
function AEn(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function D_(a){var b,c;b=a.ef;if(b.b&&b.a)return a.cd.y;c=new Bo;Bl(c,B(297));K(c);}
function TK(a){Bg(a.ef,0,0);}
function JC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.cV;if(!a.ca.data.length)return;a:{if(a.fA!==null){d=a.ef;if(Ba(d.b,d.a))break a;}d=a.ef;if(!Ba(d.b,d.a))GT(a,b);d=a.ef;e=d.b;f=d.a;if(!Ba(e,f))return;d=CK(c,e,f);Cy(d,a.fb);g=J3(a.fb,0.125);h=a.fb;i=h.dt;j=g+i-(i+h.eg)/16.0;k=a.ca.data;f=k.length;l=0;while(l<f){h=k[l];Ch(d,h.j9,h.dl.c6.bl+a.ln,j);l=l+1|0;}h=CG(a.fA,CU(c));a.fA=h;CM(h,d);FM(d);}if(!LZ(a.cd)){d=a.cd;ADp(c,d.y,d.P,d.b2,a.cQ,a.f_);d=a.cd;h=d.y;m=d.P;d=d.bT;e=a.cQ;n=a.f_;n.b=(h.b-e|0)-e|0;n.a=(h.a
-e|0)-e|0;By(c,m.b+e|0,m.a+e|0,n,d);if(a.fC){d=a.cd;ACJ(c,d.y,d.P,0,0,Q_(a.k7,b.bM),a.k7.lS,a.f_);}}k=a.ca.data;l=k.length;o=0;while(o<l){DD(k[o].dl,c,a.fA,0,0,0.0);o=o+1|0;}b:{if(a.fC){k=a.ca.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].dl;m=a.f_;e=(a.cd.y.b-(a.cQ*2|0)|0)-(a.eK*2|0)|0;b=h.y;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.P;By(c,d.b+b.b|0,d.a,m,h.b2);}o=o+1|0;}}}}
function Kh(a,b,c){var d,e,f,g,h,i;d=Eq(a.cd,b);e=!d?(-1):U4(a,b);f=a.gM;if(f!=e){if(f>=0){g=a.ca.data[f];NE(g,0);if(a.sX!==null){f=a.gM;h=Bu();g=Cx(g);i=new M;O(i);G(G(T(G(i,B(298)),f),B(299)),g);Br(h,N(i));}}if(e>=0){h=a.ca.data[e];g=a.js;if(g!==null)g.nr(b,e,h);NE(h,1);}a.gM=e;}return d&&Hb(c)?1:0;}
function J$(a,b,c,d){var e,f;e=U4(a,b);if(e>=0){f=a.ca.data[e];if(!Mt(f))f.lZ.p();}return 1;}
function U4(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.ca.data;if(c>=d.length)return (-1);e=d[c].dl;if(Eq(e,b))return c;if(a.fC){f=e.P;g=f.b;e=e.y;h=e.b;g=g+h|0;i=f.a;f=a.f_;f.b=(a.cd.y.b-(a.cQ*2|0)|0)-h|0;f.a=e.a;if(Zj(b,g,i,f))break;}c=c+1|0;}return c;}
function SN(a){a.fC=1;}
function Tf(){C.call(this);this.tm=null;}
function AOi(a,b){var c;c=a.tm;if(b.bh==32)Tw(c.cI);return 0;}
function Ti(){C.call(this);this.rY=null;}
function AEV(a,b){var c,d,e,f;b=b;c=a.rY;Br(Bu(),B(300));if(!DI(c.d5)){d=c.d5;b=b.h;e=Nx(4);f=new Vl;f.yb=c;F_(d,b,e,f);}return 1;}
function AD5(){var a=this;C.call(a);a.ik=null;a.hE=0.0;}
function EQ(a,b){var c=new AD5();AEK(c,a,b);return c;}
function AEK(a,b,c){a.ik=b;a.hE=c;}
function ART(a,b){if(a===b)return 1;if(b!==null&&Cn(a)===Cn(b)){b=b;return a.hE===b.hE&&C6(a.ik,b.ik)?1:0;}return 0;}
var Th=F();
function AJz(a){Br(Bu(),B(301));}
var Te=F();
function APB(a){Br(Bu(),B(302));}
function C$(){var a=this;C.call(a);a.dl=null;a.lZ=null;a.jc=null;a.hZ=null;a.jr=null;a.j9=null;}
function ABW(a,b,c){var d=new C$();K3(d,a,b,c);return d;}
function ATP(a,b,c,d,e){var f=new C$();ABu(f,a,b,c,d,e);return f;}
function K3(a,b,c,d){ABu(a,b,c,d,null,null);}
function ABu(a,b,c,d,e,f){var g;g=ALD();a.dl=g;a.j9=c;a.jc=d;a.jr=f;a.lZ=b;BI(g.bT,d.kZ);BI(a.dl.b2,d.ho);a.hZ=e;}
function Mt(a){return a.hZ===null?0:1;}
function NE(a,b){BI(a.dl.b2,!b?a.jc.ho:a.jc.pm);}
function Ox(){C.call(this);this.vu=null;}
function AGO(a,b){return b.hg&&b.bh==32?1:0;}
function Oy(){C.call(this);this.p$=null;}
function APU(a,b){var c,d,e,f,g,h;b=b;c=a.p$;if(!DI(c.g6)){d=c.g6;b=b.h;e=Q(C$,1);f=e.data;g=new C$;h=new Vm;h.pa=c;K3(g,h,B(303),d.g4.bg);f[0]=g;F_(d,b,FQ(e),AVP);}return 1;}
var ACb=F();
function AAl(b){var c,d;c=CK(b,250,64);FZ(c,B(237),25.0);Lp(c,187,187,187);Ch(c,B(304),0.0,24.0);Ch(c,B(304),0.25,56.0);d=CU(b);CM(d,c);FM(c);return d;}
function Y8(b){var c;c=new V0;c.gv=b;return c;}
function Oz(){C.call(this);this.tC=null;}
function AM2(a,b,c,d){return La(a.tC,b,c,d);}
function ADR(){var a=this;C.call(a);a.lj=0;a.ll=0;}
function APH(){var a=new ADR();AQu(a);return a;}
function AQu(a){var b,c;b=ADC(EC((ACE())));c=EC((ACE()))^(-559038737);a.lj=b;a.ll=c;c=0;while(c<19){RK(a);c=c+1|0;}}
function RK(a){var b,c;b=a.lj;c=a.ll;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.lj=c;a.ll=b;return b;}
function ADC(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function Ig(a,b){return 5.960464477539063E-8*(RK(a)&16777215)*b|0;}
function T5(){C.call(this);this.mi=null;}
function AMG(a,b,c){var d;d=a.mi;if(b===0.0)Ks(d,100);}
function T6(){C.call(this);this.p5=null;}
function AE0(a,b){var c,d,e;c=a.p5;d=b.bh;if(d==32){c.i3=c.i3?0:1;e=1;}else if(d==13){Ks(c,1);e=1;}else if(d!=8)e=0;else{WO(c,1);e=1;}return e;}
var Ni=F(0);
function AEs(b,c){var d;d=new Vj;d.u8=b;d.u9=c;return d;}
function ADf(){var a=this;C.call(a);a.fB=null;a.fV=0;a.iu=0;a.fU=0;}
function AD3(a){var b=new ADf();AIK(b,a);return b;}
function AIK(a,b){a.fB=Cm();a.fU=0;a.iu=2048;a.fV=b;}
function Hf(a,b,c){var d,e,f,g,h,i,j;d=c.qG(b);e=a.iu;if(d>e){c=new Bo;f=new M;O(f);BA(T(G(T(G(f,B(305)),d),B(306)),e),41);Bl(c,N(f));K(c);}if(!a.fV){b=new BD;Bl(b,B(307));K(b);}a:{b=new BZ;if(d){b:{c=a.fB;if(c.i>0){c=BU(c);g=d;while(true){if(!B5(c))break b;f=BY(c);if(f.bi>=g)break;}CE(b,f.bl,f.bz,g,a.fV);f.bl=f.bl+g;h=f.bi-g;f.bi=h;if(h===0.0)V3(a.fB,f);break a;}}g=a.fU;i=d;CE(b,0.0,g,i,a.fV);c=a.fB;f=new BZ;h=a.fU;g=a.iu-d|0;j=a.fV;f.bl=i;f.bz=h;f.bi=g;f.bA=j;B0(c,f);a.fU=a.fU+a.fV|0;}}return b;}
function Ie(a,b){var c,d,e,f,g,h,i;a:{c=AQI(b);b=a.fB;if(b.i>0){d=BU(b);while(true){if(!B5(d))break a;e=BY(d);if(e.bz===c.bz){f=e.bl;g=e.bi;h=f+g;i=c.bl;if(h===i){c.bl=f;c.bi=c.bi+g;QL(d);}else{h=c.bi;if(i+h===f){c.bi=h+g;QL(d);}}}}}}B0(a.fB,c);}
function L6(a){return BX(a.iu,a.fU);}
function Wx(){var a=this;C.call(a);a.qU=null;a.ix=null;}
function AGI(a,b,c){if(c)return AVO;return Fe(a.ix.gF,b.h,a.qU,1);}
function AN6(a,b,c){return 1;}
function AH_(a,b){var c;c=a.ix;return Fp(c.gF,b.h,c.sP);}
function SR(){C.call(this);this.nC=null;}
function AHu(a,b,c,d){var e,f;b=a.nC;e=(I3(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.dZ=Z(Bb(0,b.dZ+Ba(e,f)|0),PK(b));return 1;}
function PZ(){C.call(this);this.un=null;}
function AOM(a,b){var c,d,e;c=a.un;if(b.cf&&b.bh==79){if(!b.bC){b=c.bj.bO;d=new Sj;d.ux=c;LO(b,d);}else{b=c.bj.bO;d=new Si;d.wQ=c;V9(b,d);}e=1;}else e=0;return e;}
function Rk(){C.call(this);this.v5=null;}
function AFr(a,b){var c,d,e,f;c=b.data;b=Bu();d=Cx(c[0]);e=new M;O(e);G(G(e,B(258)),d);Br(b,N(e));b=Bu();f=c[1];d=new M;O(d);G(G(d,B(308)),f);Br(b,N(d));}
function Rj(){C.call(this);this.xS=null;}
function ARw(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bu();e=Cx(c[0]);f=new M;O(f);G(G(f,B(258)),e);Br(d,N(f));g=FG(RX(b,1));b=Bu();d=Cx(c[1]);if(g===null)c=B(29);else{c=new M;O(c);B1(c,B(42));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)B1(c,B(43));BA(c,i[h]);h=h+1|0;}B1(c,B(44));c=N(c);}e=new M;O(e);G(G(G(G(e,B(309)),d),B(310)),c);Br(b,N(e));}
function Ri(){C.call(this);this.oc=null;}
function AHP(a,b){Uy(a.oc,b);}
function Rh(){C.call(this);this.vN=null;}
function AMW(a,b){var c,d,e,f,g;c=b.data;d=Bu();e=Cx(c[0]);f=new M;O(f);G(G(f,B(258)),e);Br(d,N(f));g=D6(RX(b,1));b=Bu();d=Cx(c[1]);c=ACz(g);e=new M;O(e);G(G(G(G(e,B(311)),d),B(312)),c);Br(b,N(e));}
function Rf(){C.call(this);this.wS=null;}
function AL2(a,b){var c,d;c=Iw();b=Cx(b);d=new M;O(d);G(G(d,B(313)),b);Br(c,N(d));b=new Fh;V(b);K(b);}
function Re(){C.call(this);this.p3=null;}
function AN4(a,b){var c,d,e,f;c=a.p3;d=c.bj.bO;e=new N4;e.q_=c;f=Q(C,1);f.data[0]=b;CO(d,e,B(314),f);}
function TQ(){C.call(this);this.kO=null;}
function APW(a,b){var c,d,e,f,g,h;c=a.kO;d=c.la;if(d!==null){e=c.dK.P;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.la=g;}b=b.h;f=b.b;c=c.eO;d=c.y;f=f-d.b|0;h=b.a-d.a|0;Bg(c.P,f,h);return 1;}
function AL7(a,b,c){var d;if(!c){d=b.h;b=a.kO;if(!Eq(b.dK,d))d=null;b.la=d;}return AVO;}
var CZ=F(0);
var AV8=null;var AVE=null;var AV9=null;var AVD=null;var AV_=null;var AV$=null;var AWb=null;var AWa=null;var AWd=null;var AWc=null;var AWe=null;function G7(){G7=Bm(CZ);AI7();}
function AI7(){AV8=C3(187);AVE=S(B(315));AV9=C3(55);AVD=C3(43);AV_=CL(33,66,131);AV$=CL(60,63,65);AWb=S(B(316));AWa=S(B(317));AWd=Ft(85,85,85,128);AWc=Ft(43,43,43,0);AWe=S(B(267));}
function Ud(){var a=this;C.call(a);a.pF=null;a.i4=null;}
function AM_(a,b,c){var d;if(!c){d=Fe(a.i4.hw,b.h,a.pF,1);if(d!==null)return d;}return AVO;}
function AGK(a,b,c){return 1;}
function AFD(a,b){var c;c=a.i4;return Fp(c.hw,b.h,UE(c.bj.bO));}
function NS(){C.call(this);this.tG=null;}
function AFv(a,b,c,d){var e,f;b=a.tG;e=(I3(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.ez=Z(Bb(0,b.ez+Ba(e,f)|0),RQ(b));return 1;}
function Su(){C.call(this);this.rB=null;}
function AP1(a,b){var c,d;a:{c=a.rB;switch(b.bh){case 67:Mv(c);d=1;break a;case 86:Rb(c);d=1;break a;default:}d=0;}return d;}
var St=F();
function AIa(a,b,c){return 0;}
function Sr(){C.call(this);this.pc=null;}
function APp(a,b,c){var d,e;d=a.pc;c=d.dy+1|0;d.dy=c;d=H2(E(It));e=new M;O(e);G(G(T(e,c),B(318)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));Wm(b,e);return 1;}
var Sq=F();
function ANr(a){return null;}
function Ss(){C.call(this);this.mX=null;}
function AGA(a){var b,c;b=a.mX;c=new PP;c.rJ=b;return c;}
function RZ(){C.call(this);this.xE=null;}
function AIh(a,b){return 0;}
function Qo(){C.call(this);this.xB=null;}
function AIR(a,b){return b.hg&&b.bh==32?1:0;}
function Qp(){C.call(this);this.qb=null;}
function AE1(a,b){var c,d,e,f,g,h;b=b;c=a.qb;if(!DI(c.gA)){d=c.gA;b=b.h;e=Q(C$,1);f=e.data;g=new C$;h=new Rr;h.mo=c;K3(g,h,B(303),d.g4.bg);f[0]=g;F_(d,b,FQ(e),AVP);}return 1;}
function Qq(){C.call(this);this.rD=null;}
function AOq(a,b,c,d){return La(a.rD,b,c,d);}
function AA5(){var a=this;C.call(a);a.hB=null;a.kL=null;a.e8=null;a.x9=null;}
function AJi(a){var b=new AA5();AP0(b,a);return b;}
function AT9(a,b,c,d){var e=new AA5();ABx(e,a,b,c,d);return e;}
function AP0(a,b){ABx(a,null,null,b,null);}
function ABx(a,b,c,d,e){a.hB=b;a.kL=c;a.e8=d;a.x9=e;}
function AQx(a,b){var c;if(a===b)return 1;if(b!==null&&Cn(a)===Cn(b)){c=b;return C6(a.hB,c.hB)&&C6(a.kL,c.kL)&&C6(a.e8,c.e8)?1:0;}return 0;}
var CW=F(0);
var AWg=null;var AW3=null;var AWi=null;var AWh=null;var AWk=null;var AWj=null;var AWm=null;var AWl=null;var AWo=null;var AWn=null;var AWp=null;function AMM(){AMM=Bm(CW);ALO();}
function ALO(){AWg=C3(206);AW3=S(B(319));AWi=S(B(320));AWh=S(B(225));AWk=S(B(321));AWj=S(B(322));AWm=S(B(323));AWl=S(B(324));AWo=Ft(107,106,107,128);AWn=Ft(30,31,34,0);AWp=S(B(227));}
function Ca(){Cj.call(this);this.ke=null;}
var AW4=null;var AW5=null;var AW6=null;var AW7=null;var AW8=null;var AW9=null;var AW$=null;var AW_=null;var AXa=null;var AXb=null;var AXc=null;var AXd=null;var AXe=null;var AXf=null;var AXg=null;var AWq=null;function ABo(){ABo=Bm(Ca);AGl();}
function Dw(a,b,c){var d=new Ca();Xi(d,a,b,c);return d;}
function ASE(a,b,c,d){var e=new Ca();Qu(e,a,b,c,d);return e;}
function Xi(a,b,c,d){ABo();C_(a,b,c);a.ke=Ij(d,null);}
function Qu(a,b,c,d,e){ABo();C_(a,b,c);a.ke=Ij(d,e);}
function AGl(){var b,c;b=new Ca;AMM();Xi(b,B(325),0,AW3);AW4=b;AW5=Dw(B(326),1,S(B(327)));AW6=Dw(B(328),2,S(B(329)));AW7=Dw(B(330),3,S(B(331)));AW8=Dw(B(332),4,AW3);AW9=Dw(B(333),5,S(B(334)));AW$=Dw(B(335),6,S(B(336)));AW_=Dw(B(337),7,S(B(338)));AXa=Dw(B(339),8,S(B(340)));c=new Ca;G7();Qu(c,B(341),9,AVE,S(B(323)));AXb=c;AXc=ASE(B(342),10,AVE,S(B(228)));AXd=Dw(B(343),11,S(B(344)));AXe=Dw(B(345),12,S(B(346)));AXf=Dw(B(347),13,AW3);b=Dw(B(348),14,S(B(349)));AXg=b;AWq=H(Ca,[AW4,AW5,AW6,AW7,AW8,AW9,AW$,AW_,AXa,AXb,
AXc,AXd,AXe,AXf,b]);}
function IE(){var a=this;C.call(a);a.nc=null;a.m9=null;}
function Ij(a,b){var c=new IE();ALf(c,a,b);return c;}
function ALf(a,b,c){a.nc=b;a.m9=c;}
function Hy(){var a=this;C.call(a);a.vf=null;a.pb=null;a.uA=null;a.rz=null;a.pS=null;a.iR=null;}
function AXh(a,b,c,d,e,f){var g=new Hy();JR(g,a,b,c,d,e,f);return g;}
function JR(a,b,c,d,e,f,g){a.vf=b;a.pb=c;a.uA=d;a.rz=e;a.pS=f;a.iR=g;}
function ACT(){var a=this;C.call(a);a.jR=null;a.qM=null;a.pR=null;}
function Zg(a,b,c){var d=new ACT();AN9(d,a,b,c);return d;}
function AN9(a,b,c,d){a.jR=b;a.qM=c;a.pR=d;}
function Gt(){var a=this;C.call(a);a.kZ=null;a.ho=null;a.pm=null;}
function AXi(a,b,c){var d=new Gt();Hk(d,a,b,c);return d;}
function Hk(a,b,c,d){a.kZ=b;a.ho=c;a.pm=d;}
function ABz(){var b,c;b=new Gt;c=S(B(350));XT();Hk(b,c,AWQ,AWR);return b;}
function AAz(){var b,c;b=new Gt;c=S(B(230));AJG();Hk(b,c,AXj,AXk);return b;}
function Y0(){var b,c;b=new Gt;ABF();c=AXl;AOt();Hk(b,c,AXm,AXn);return b;}
function AEy(){var a=this;C.call(a);a.lS=null;a.q7=0;}
function Zx(a,b){var c=new AEy();ARd(c,a,b);return c;}
function ARd(a,b,c){var d;d=new BZ;a.lS=d;a.q7=b;d.bA=c;}
function Q_(a,b){return B_(a.q7,b);}
var DR=F(0);
var AWu=null;var AWv=null;var AWr=null;var AWs=null;var AWt=null;var AXj=null;var AXk=null;var AWw=null;var AWx=null;function AJG(){AJG=Bm(DR);AMX();}
function AMX(){AWu=S(B(322));AWv=S(B(351));AWr=S(B(230));AWs=S(B(336));AWt=S(B(319));AXj=S(B(322));AXk=S(B(352));AWw=S(B(353));AWx=CL(43,45,48);}
var OG=F(0);
var OZ=F();
function AIX(a,b,c){var d,e;d=b;e=c;b=new M;O(b);T(G(T(G(b,B(354)),d),B(355)),e);CF(N(b));return d+e|0;}
var OH=F(0);
var OX=F();
function AJ8(a,b,c){var d,e;d=b;e=c;b=new M;O(b);Fj(G(Fj(G(b,B(356)),d),B(355)),e);CF(N(b));return d+e;}
var ZD=F();
var YJ=F(0);
function Jn(){var a=this;C.call(a);a.dX=null;a.eN=null;a.fm=null;}
var AVg=0;function ACt(a){var b;b=a.eN;if(b!==null){AVg=AVg-1|0;a.dX.dm.deleteTexture(b);a.eN=null;}}
function Ce(a){return a.fm.b;}
function C8(a){return a.fm.a;}
function TH(a,b,c,d){var e;e=a.fm;e.b=b;e.a=c;LU(a);a.dX.dm.texStorage2D(3553,1,d,b,c);e=a.dX.dm;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function LU(a){var b,c;b=a.dX.dm;c=a.eN;b.bindTexture(3553,c);}
function CM(a,b){M$(a,b.lm,b.kx,32856);PE(a,b,0,0);}
function M$(a,b,c,d){var e,f,g,h;a:{e=a.fm;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){LU(a);break a;}e=a.dX.dm;h=a.eN;e.deleteTexture(h);a.eN=a.dX.dm.createTexture();TH(a,b,c,d);break a;}}TH(a,b,c,d);}}
function HW(a,b,c,d){LU(a);PE(a,b,c,d);}
function PE(a,b,c,d){var e;e=a.dX.dm;b=b.jk;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function TL(){C.call(this);this.jQ=null;}
var AW2=null;function PL(){var a=new TL();AAS(a);return a;}
function AAS(a){a.jQ=Cm();}
function D3(a,b,c,d){Pq(a,ABW(d,b,c));}
function D4(b,c,d){return ABW(d,b,c);}
function GF(a,b,c,d){Jz(a,b,c,d,null);}
function Jz(a,b,c,d,e){Pq(a,ATP(null,b,c,d,e));}
function Pq(a,b){B0(a.jQ,b);}
function Hm(a){return FQ(HF(a.jQ,AW2));}
function YA(){AW2=Q(C$,0);}
var DQ=F(0);
var AWY=null;var AWZ=null;var AWV=null;var AWW=null;var AWX=null;var AWQ=null;var AWR=null;var AW0=null;var AW1=null;function XT(){XT=Bm(DQ);APm();}
function APm(){AWY=S(B(357));AWZ=S(B(358));AWV=S(B(350));AWW=S(B(359));AWX=S(B(315));AWQ=S(B(357));AWR=S(B(358));AW0=Ft(118,121,122,128);AW1=CL(63,66,68);}
var Gk=F(0);
var Xa=F();
function AOF(a,b,c,d){var e;b=Bu();d=Cx(d);e=new M;O(e);G(G(T(G(e,B(360)),c),B(299)),d);Br(b,N(e));}
var Xb=F();
function V0(){C.call(this);this.gv=null;}
function AE5(a,b){return Ku(a.gv,b);}
function AOH(a,b,c,d){return Jk(a.gv,b,c,d);}
function AMK(a,b,c){return Jf(a.gv,b,c);}
function AKg(a,b,c){return DI(a.gv);}
function Yb(){C.call(this);this.rx=null;}
function AN7(a,b){var c;c=a.rx.ix;c.dZ=FJ(b,PK(c));}
var ABC=F();
function Pv(){C.call(this);this.mS=null;}
function AKo(a,b){var c;c=a.mS.i4;c.ez=FJ(b,RQ(c));}
function Rt(){C.call(this);this.l$=null;}
function AE9(a,b){return DB(a.l$,null);}
var ZR=F();
function Ci(){Cj.call(this);this.k1=null;}
var AXo=null;var AXp=null;var AXq=null;var AXr=null;var AXs=null;var AXt=null;var AXu=null;var AXv=null;var AXw=null;var AXx=null;var AXy=null;var AXz=null;var AXA=null;var AXB=null;var AXC=null;var AWf=null;function ABQ(){ABQ=Bm(Ci);AQ$();}
function DJ(a,b,c){var d=new Ci();XR(d,a,b,c);return d;}
function AP_(a,b,c,d){var e=new Ci();ABw(e,a,b,c,d);return e;}
function XR(a,b,c,d){ABQ();C_(a,b,c);a.k1=Ij(d,null);}
function ABw(a,b,c,d,e){ABQ();C_(a,b,c);a.k1=Ij(d,e);}
function AQ$(){var b;b=new Ci;G7();XR(b,B(325),0,AVE);AXo=b;AXp=DJ(B(326),1,S(B(361)));AXq=DJ(B(328),2,S(B(362)));AXr=DJ(B(330),3,S(B(363)));AXs=DJ(B(332),4,S(B(361)));AXt=DJ(B(333),5,CL(188,63,60));AXu=DJ(B(335),6,S(B(364)));AXv=DJ(B(337),7,S(B(365)));AXw=DJ(B(339),8,S(B(366)));AXx=AP_(B(341),9,AVE,CL(52,65,52));AXy=AP_(B(342),10,S(B(367)),S(B(368)));AXz=DJ(B(343),11,S(B(369)));AXA=DJ(B(345),12,S(B(370)));AXB=DJ(B(347),13,AVE);b=DJ(B(348),14,S(B(349)));AXC=b;AWf=H(Ci,[AXo,AXp,AXq,AXr,AXs,AXt,AXu,AXv,AXw,AXx,
AXy,AXz,AXA,AXB,b]);}
var ADW=F();
function Ir(b,c){var d,e,f;if(c<=0)return B(31);d=BL(c);e=d.data;e[0]=ACN(Ig(b,52));f=1;while(f<c){e[f]=ACN(Ig(b,62));f=f+1|0;}return FS(d);}
function ACN(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AAA=F();
function AEl(){var a=this;C.call(a);a.Ef=null;a.BY=null;a.C4=0;a.CC=0;}
var ADI=F(0);
function ADr(b){var c;a:{switch(b){case 0:break;case 1:c=B(139);break a;case 2:c=B(192);break a;case 3:c=B(191);break a;default:c=null;break a;}c=B(161);}return c;}
var CR=F();
var AB5=F(CR);
var ACM=F(CR);
var ZH=F(CR);
var Z2=F(CR);
var ADg=F(CR);
function Uj(){C.call(this);this.tg=null;}
function ALI(a){var b;b=a.tg;Br(Bu(),b);}
var AAk=F();
function VW(){C.call(this);this.jb=null;}
function AO5(a,b){var c,d,e,f,g;c=a.jb;d=c.jH;if(d!==null){e=b.h;f=e.b-d.b|0;g=e.a-d.a|0;e=c.h_;e.b=Et(0,e.b+f|0,c.gq.b-c.hm.b|0);c=a.jb;d=c.h_;d.a=Et(0,d.a+g|0,c.gq.a-c.hm.a|0);}a.jb.jH=b.h;return 1;}
var AAw=F();
var IG=F(Bo);
function OB(){C.call(this);this.rQ=null;}
function AFX(a,b){HD(a.rQ,b);}
function V8(){C.call(this);this.iB=null;}
function ARl(a){return a.iB;}
function AEr(){var a=this;C.call(a);a.bp=null;a.S=null;a.O=null;a.ec=null;}
function ABI(a){var b=new AEr();ARj(b,a);return b;}
function ARj(a,b){var c;a.O=ASo();a.bp=b;c=new Ty;Lt(c);c.lg=new BZ;c.gJ=b;a.S=c;}
function IC(a,b,c,d){var e,f,g,h;e=a.S;f=C6(e.gr,c)?0:1;g=C6(e.gN,b)?0:1;h=d===e.iJ?0:1;if(f){e.gr=c;e.dV=null;XL(e,0);}e.gy=!f&&!g&&!h?0:1;e.gN=b;e.iJ=d;e.ht=0;J0(a);}
function JT(a){var b;b=a.S;b.da=CG(b.da,null);a.O=CG(a.O,null);}
function LK(a,b){var c,d,e;c=a.O;d=c.E;e=c.q;b=CG(c,b);a.O=b;b.iO(d,e,a.bp.bM);}
function Fm(a,b,c){var d;d=a.O;d.iO(b,c,d.dW);J0(a);}
function J0(a){var b,c,d,e;b=a.S;c=a.O.q.b;b.q.b=c;d=b.da;if(d!==null&&c!=Ce(d)&&!(c>=b.ht&&Ce(b.da)>=b.ht))b.gy=1;b=a.S;b.dW=a.bp.bM;if(TX(b))c=0;else{b=a.S;QY(b);e=Cv(b.gJ,b.iJ);XL(b,E0(b.dV)+(e*2|0)|0);c=b.q.a;}b=a.S.E;d=a.O.E;Bg(b,d.b,d.a-c|0);}
function JF(b,c){if(b<0)c=B(371);else if(b>0)c=B(372);return c;}
function N9(a,b,c){var d;d=a.S.E.b;return (d-c|0)<=b&&b<d?1:0;}
function TN(a,b,c){var d,e;d=a.S;e=d.E.b+d.q.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Pm(a,b,c){var d;d=a.S.E.a;return (d-c|0)<=b&&b<d?1:0;}
function P7(a,b,c){var d,e;d=a.O;e=d.E.a+d.q.a|0;return e<=b&&b<(e+c|0)?1:0;}
function MR(a,b,c){var d,e,f;d=a.S.E.a-c|0;e=a.O;f=(e.E.a+e.q.a|0)+c|0;return d<=b&&b<f?1:0;}
function RS(a,b,c){var d,e;d=a.S.E.a+c|0;e=a.O;return ACQ(b,d,(e.E.a+e.q.a|0)-c|0);}
function VG(a,b,c){var d,e,f;d=a.S;e=d.E.b;f=e-c|0;e=(e+d.q.b|0)+c|0;return f<=b&&b<e?1:0;}
function UT(a,b,c){var d,e;d=a.S;e=d.E.b;return ACQ(b,e+c|0,(e+d.q.b|0)-c|0);}
function ACQ(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BE(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function H6(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bk;f=new Bk;g=b.b;h=b.a;b=a.O;i=b.E;j=i.b;k=i.a;b=b.q;l=b.b;m=b.a;b=new Xz;b.nW=a;b.nV=e;b.nT=f;b.nS=c;b.n0=g;b.nZ=j;b.nY=l;b.nX=d;b.n2=h;b.n1=k;b.r7=m;return b;}
var AB1=F(0);
var Ly=F(0);
function Rl(){C.call(this);this.oL=null;}
function AMo(a,b){return QM(a.oL,b);}
var Ql=F();
function AQA(a,b){ACt(b);}
var Zc=F();
function B_(b,c){return Dg(b*c);}
var Yo=F();
function ADp(b,c,d,e,f,g){g.b=c.b;g.a=f;By(b,d.b,d.a,g,e);By(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;By(b,d.b,d.a+f|0,g,e);By(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function ACJ(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;By(b,j,k,i,h);By(b,j,k,i,h);By(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;By(b,l,j,i,h);By(b,l,j,i,h);By(b,l+g|0,j+g|0,i,h);}
function Nb(){var a=this;C.call(a);a.b0=null;a.iN=null;a.ew=null;a.dH=0;a.et=0;a.gb=null;a.fE=null;a.fH=0;}
function S3(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dH;i=Ba(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bb(i,e))a:{while(true){if(d<=e){j=d;break a;}Eu(c);j=d+(-1)|0;b=C5(d);d=Ba(j,a.et)%a.ew.a|0;F5(a,c,b,a.fH,g);HW(a.b0,c,0,d);if(!(j%a.dH|0))break;d=j;}}else{Eu(b);k=a.dH-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;F5(a,b,C5(j),Ba(a.et,k)+a.fH|0,g);k=k+(-1)|0;j=h;}CM(a.b0,b);j=Bb(i,e);}return j;}k=a.dH;h=Ba(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Z(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Eu(c);b=C5((d+f|0)+1|0);j=d+
1|0;d=Ba(d,a.et)%a.ew.a|0;F5(a,c,b,a.fH,g);HW(a.b0,c,0,d);if(!(j%a.dH|0))break;d=j;}}else{Eu(b);d=0;while(d<a.dH){h=h+1|0;F5(a,b,C5((h>e?h-f|0:h)+f|0),Ba(a.et,d)+a.fH|0,g);d=d+1|0;}CM(a.b0,b);j=Z(i,e);}return j;}
function I0(a,b,c,d,e,f){EG(b,a.iN.b+d.b|0,c+d.a|0,a.gb,a.fE,a.b0,e,f,0.0);}
function F5(a,b,c,d,e){Ch(b,c,a.ew.b-20.0*e,d);}
function SS(){C.call(this);this.uO=null;}
function AHh(a,b){var c,d,e;c=a.uO;if(c.e.f.cs==c.kE){b=b.data;d=D6(b[0]);e=FG(b[1]);ABl(c.e.f,d,e);Pg(c.e.f);}}
var YG=F();
function F4(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function Zj(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function ADt(){var a=this;C.call(a);a.bs=0;a.bE=0;}
function ES(a,b){var c=new ADt();AK5(c,a,b);return c;}
function AK5(a,b,c){a.bs=b;a.bE=c;}
function AFe(a,b){var c;if(a===b)return 1;if(b!==null&&Cn(a)===Cn(b)){c=b;return a.bs==c.bs&&a.bE==c.bE?1:0;}return 0;}
function AOp(a){var b,c,d,e,f,g,h;b=Q(C,2).data;b[0]=FX(a.bs);b[1]=FX(a.bE);c=(-1515898884);d=0;while(d<b.length){e=b[d];if(e===null)f=0;else{g=e.fp;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;c=Ka(h,4)^((h>>>7|0)|h<<25)^Ka(c,13);d=d+1|0;}return c;}
function ANZ(a,b){var c;b=b;c=BE(a.bs,b.bs);if(!c)c=BE(a.bE,b.bE);return c;}
function Tl(){C.call(this);this.up=null;}
function AHm(a,b){var c;c=a.up;To(c,ET(c,b.h));KH(c.r,c.w,c.x);GO(c);}
var So=F(0);
var AVO=null;function ACq(){AVO=new Qd;}
var FK=F(Ip);
var W_=F(EF);
function Qa(){C.call(this);this.mp=null;}
function ANn(a,b){var c,d;c=a.mp;d=c.dy+1|0;c.dy=d;c=new M;O(c);G(G(T(c,d),B(373)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Ub(){C.call(this);this.pG=null;}
function APR(a){var b,c;b=a.pG;c=new M;O(c);G(G(G(c,B(374)),b),B(375));$rt_globals.console.info($rt_ustr(N(c)));}
var L4=F(DU);
var AXD=0.0;var AXE=null;function ACs(){AXD=$rt_globals.NaN;AXE=E($rt_floatcls());}
var Fy=F();
var AUW=null;var AUY=null;var AUZ=null;var AUX=null;var AUV=null;function AA$(){AUW=E4([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AUY=AGF([Bc(1),Bc(10),Bc(100),Bc(1000),Bc(10000),Bc(100000),Bc(1000000),Bc(10000000),Bc(100000000),Bc(1000000000),Cc(1410065408, 2),Cc(1215752192, 23),Cc(3567587328, 232),Cc(1316134912, 2328),Cc(276447232, 23283),Cc(2764472320, 232830),Cc(1874919424, 2328306),Cc(1569325056, 23283064),Cc(2808348672, 232830643)]);AUZ=AGF([Bc(1),Bc(10),Bc(100),Bc(10000),Bc(100000000),
Cc(1874919424, 2328306)]);AUX=new T_;AUV=new Vt;}
var J4=F();
var AXF=null;var AXG=null;function ABT(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.ni=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.kb=0;c.jY=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Fa(CV(Bc(e),Bc(8388608)),Em)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AB4(AXG,f);if(h<0)h=( -h|0)-2|0;i=AXG.data;j=9+(f-i[h]|0)|0;k=Bc(e);l=AXF.data;m=EC(D5(BQ(k,Bc(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=EC(D5(BQ(k,Bc(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<
( -g|0);o=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BE(q,r);e=e>0?Ba(m/q|0,q):e<0?Ba(m/r|0,r)+r|0:Ba((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.kb=e;c.jY=h-50|0;}
function AAf(){var b,c,d,e,f,g,h,i;AXF=BC(100);AXG=BC(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AXF.data;g=d+50|0;f[g]=$rt_udiv(e,20);AXG.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:EC(Cq(Bc(h),Gl(BQ(Bc(b&((1<<i)-1|0)),Bc(10)),i)));f=AXF.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AXG.data[i]=c;d=d+1|0;}}
function Vt(){var a=this;C.call(a);a.kb=0;a.jY=0;a.ni=0;}
function LX(){var a=this;C.call(a);a.wc=null;a.mc=0.0;a.wx=0.0;a.eQ=null;a.gG=null;a.lp=null;a.e1=0;}
function ADJ(a,b){var c;if(b!==null){a.gG=b;return a;}c=new BD;Bl(c,B(376));K(c);}
function AB$(a,b){var c;if(b!==null){a.lp=b;return a;}c=new BD;Bl(c,B(376));K(c);}
function PS(a,b,c,d){var e,f,g,$$je;e=a.e1;if(!(e==2&&!d)&&e!=3){a.e1=d?2:1;while(true){try{f=ADM(a,b,c);}catch($$e){$$je=Ef($$e);if($$je instanceof Bo){g=$$je;K(AHx(g));}else{throw $$e;}}if(G3(f))return f;if(Ib(f)){if(d&&DM(b)){g=a.gG;G6();if(g===AVp)return DZ(B6(b));if(B6(c)<=I(a.eQ))return AVs;ED(b,b.V+B6(b)|0);if(a.gG===AVq)J6(c,a.eQ);}return f;}if(Qt(f)){g=a.gG;G6();if(g===AVp)return f;if(g===AVq){if(B6(c)<I(a.eQ))return AVs;J6(c,a.eQ);}ED(b,b.V+J_(f)|0);}else if(LV(f)){g=a.lp;G6();if(g===AVp)break;if(g
===AVq){if(B6(c)<I(a.eQ))return AVs;J6(c,a.eQ);}ED(b,b.V+J_(f)|0);}}return f;}b=new DY;V(b);K(b);}
function Zs(a,b){var c,d,e,f;c=a.e1;if(c&&c!=3){b=new DY;V(b);K(b);}if(!B6(b))return AD_(0);if(a.e1)a.e1=0;d=AD_(Bb(8,B6(b)*a.mc|0));while(true){e=PS(a,b,d,0);if(Ib(e))break;if(G3(e))d=SG(a,d);if(!KI(e))continue;Vp(e);}b=PS(a,b,d,1);if(KI(b))Vp(b);while(true){f=a.e1;if(f!=3&&f!=2)break;a.e1=3;if(Ib(AVt)){d.dp=d.V;d.V=0;d.g_=(-1);return d;}d=SG(a,d);}b=new DY;V(b);K(b);}
function SG(a,b){var c,d,e;c=b.g0;d=Nw(c,Bb(8,c.data.length*2|0));e=ABh(d,0,d.data.length);ED(e,b.V);return e;}
var AAR=F(CR);
function XU(){C.call(this);this.na=null;}
function AFI(a,b){Db(a.na,b);}
function VM(){C.call(this);this.oo=null;}
function ARy(a,b){var c,d;c=a.oo;d=c.dy+1|0;c.dy=d;c=b.hd;b=new M;O(b);G(G(T(b,d),B(377)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Qd=F();
function AMv(a,b){}
function EI(){var a=this;C.call(a);a.E=null;a.q=null;a.dW=0.0;}
function ASo(){var a=new EI();Lt(a);return a;}
function Lt(a){a.E=new Bk;a.q=new Bk;}
function AM0(a){}
function AQD(a){return BX(0,0);}
function PN(a,b,c,d){var e;if(!K8(a.E,b)){a.jW(b);CA(a.E,b);}if(!K8(a.q,c)){a.jM(c);CA(a.q,c);}e=a.dW;if(e!==d){a.dW=d;a.pn(e,d);}}
function DG(a,b){return F4(b,a.E,a.q);}
function Zt(a,b){var c,d,e,f;c=a.E;d=c.b;e=c.a;f=a.q;XT();By(b,d,e,f,AWQ);}
function VN(a,b){var c;c=a.E;Lx(b,c.b,c.a,a.q);}
function APN(a,b){return 0;}
function AIe(a,b){}
function APu(a,b){}
function ARF(a,b,c){}
function AP4(a,b,c,d){return 0;}
function APk(a,b,c){return null;}
function AQq(a,b,c){return 0;}
function AMh(a,b){return 0;}
function AH8(a,b,c,d){return 0;}
function Gz(){var a=this;EI.call(a);a.cE=null;a.bu=null;a.eZ=null;}
function AXH(){var a=new Gz();TP(a);return a;}
function TP(a){Lt(a);a.cE=new Bk;a.bu=new Bk;}
function AE4(a,b){a.eZ=b;}
function AEa(a){var b;b=a.bu;b.b=LR(a,b.b);b=a.bu;b.a=Km(a,b.a);}
function U8(a,b){a.bu.b=LR(a,b);}
function Rc(a,b){a.bu.a=Km(a,b);}
function ACg(a,b,c){a.bu.b=LR(a,b);a.bu.a=Km(a,c);}
function Km(a,b){return Bb(0,Z(b,a.cE.a-a.q.a|0));}
function LR(a,b){return Bb(0,Z(b,a.cE.b-a.q.b|0));}
function QW(){var a=this;Gz.call(a);a.cv=null;a.ds=null;a.fD=null;a.qk=null;a.dA=null;a.bZ=null;a.dO=null;a.e4=null;a.c9=0;a.eB=0;a.l9=null;a.dJ=0;a.dL=0;a.fO=0;a.eY=0;a.fo=0;a.cy=0;a.dP=null;a.iv=null;a.nj=null;a.gt=null;}
function AT1(a,b){var c=new QW();AAn(c,a,b);return c;}
function AAn(a,b,c){TP(a);a.ds=AK$();a.fD=new Bk;a.bZ=AXI;a.dO=Q(HX,0);a.dJ=0;a.dL=0;a.fO=0;a.eY=0;a.fo=0;a.dP=AD3(0);a.gt=Gv();a.cv=b;a.iv=c;a.l9=c;Tg(a);}
function Tg(a){a.c9=B_(2.0,a.cv.bM);}
function Wo(a){return a.bZ.data.length?0:1;}
function VZ(a,b){OJ(a);a.bZ=b;}
function OJ(a){Bg(a.fD,0,0);}
function XQ(a,b,c){a.nj=b;a.qk=c;a.dA=null;a.dP=null;a.eB=0;OJ(a);}
function ARV(a){var b,c;a.e4=CG(a.e4,null);Bg(a.fD,0,0);b=a.gt;if(b.dr>0){b.dr=0;c=b.b6;Zr(c,0,c.data.length,null);b.c4=b.c4+1|0;}a.dP=null;a.bZ=AXI;a.dO=null;a.dJ=0;a.dL=0;a.fO=0;S2(a.ds);a.iv=null;}
function AHg(a,b,c){Tp(a);Tg(a);a.dA=null;a.dP=null;a.eB=0;}
function AJ1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=IH(a.cv);if(Wo(a))return;Lq(a);Cy(c,a.dA);d=D7(a);e=AEs(c,a.eB);f=Z(IB(a.q.a,d),a.bZ.data.length)+30|0;g=a.nj.m_;h=a.dO.data;i=h.length;if(i<f){a:{j=a.eY;k=a.fo;l=a.bZ;m=a.dP;n=a.gt;o=Q(HX,f);if(i>0){p=o.data;while(j<=k){q=l.data[j];r=j%p.length|0;s=j%i|0;t=h[s];if(t!==null&&t.gg!==q){Ve(m,t,n);p[r]=Lz(q,m,e,n);h[s]=null;}else if(t!==null&&p[r]===null){p[r]=t;h[s]=null;}else p[r]=Lz(q,m,e,n);j=j+1|0;}}else if(f>0){p
=o.data;while(true){if(j>k)break a;p[j%p.length|0]=Lz(l.data[j],m,e,n);j=j+1|0;}}}j=0;while(j<i){q=h[j];if(q!==null){Ve(m,q,n);h[j]=null;}j=j+1|0;}a.dO=o;CA(a.fD,L6(a.dP));TJ(a,a.cv.cV);}a.eY=Z((a.bu.a+a.c9|0)/(D7(a)+a.c9|0)|0,a.bZ.data.length-1|0);a.fo=Z((((a.bu.a+a.ds.y.a|0)-1|0)+a.c9|0)/(D7(a)+a.c9|0)|0,a.bZ.data.length-1|0);if(!a.dO.data.length)return;Yz(a,e);VN(a,b);t=g.rz;m=a.E;By(b,m.b,m.a,a.q,t);m=a.ds.P;u=m.b;v=m.a;w=Cv(a.cv,2.0);m=a.cv.dQ;x=a.eY;j=u+w|0;while(x<=a.fo){n=M_(a,x);k=Ba(x,D7(a));i=x+1
|0;y=k+Ba(i,a.c9)|0;k=j+a.dJ|0;r=k+a.dL|0;z=a.cy!=x?0:1;ba=!z?t:g.pS;q=!z?g.vf:g.iR;bb=!z?g.pb:g.iR;bc=!z?g.uA:g.iR;bd=(v+y|0)-a.bu.a|0;EG(b,j,bd,n.gD,n.rk,a.e4,q,ba,0.0);EG(b,k,bd,n.g7,n.hO,a.e4,bb,ba,0.0);EG(b,r,bd,n.hb,n.im,a.e4,bc,ba,0.0);k=n.gD.b;s=j+k|0;Bg(m,Bb(0,a.dJ-k|0),n.gD.a);By(b,s,bd,m,ba);k=j+a.dJ|0;s=n.g7.b;be=k+s|0;Bg(m,Bb(0,a.dL-s|0),n.g7.a);By(b,be,bd,m,ba);k=n.hb.b;bf=r+k|0;Bg(m,Bb(0,(((a.ds.y.b-k|0)-a.dL|0)-a.dJ|0)-w|0),n.hb.a);By(b,bf,bd,m,ba);bg=(u+a.q.b|0)-w|0;Bg(m,w,D7(a)+a.c9|0);By(b,
bg,bd,m,t);x=i;}Iy(b);}
function Yz(a,b){var c,d,e,f,g,h;c=0;d=a.eY;while(d<=a.fo){e=M_(a,d);if(!(e!==null&&e.gg===a.bZ.data[d])){f=a.dO.data;g=a.bZ;e=a.dP;h=a.gt;c=d%f.length|0;if(f[c]!==null)Ve(e,f[c],h);f[c]=Lz(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){CA(a.fD,L6(a.dP));TJ(a,a.cv.cV);}}
function TJ(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fD;c=CK(b,c.b+150|0,c.a);Cy(c,a.dA);d=a.dA;e=d.dt;f=e-(e+d.eg)/16.0;g=a.dO.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gg.ia;k=d.hO;Ch(c,j,k.bl+a.eB,f+k.bz);j=d.gg.iq;d=d.im;Ch(c,j,d.bl+a.eB,f+d.bz);}i=i+1|0;}a:{d=a.gt;if(d.dr>0){h=d.c4;i=0;b:while(true){g=d.b6.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.du;l=j.dx;k=k;l=l.h2;Ch(c,k,l.bl+a.eB,f+l.bz);j=j.cN;if(h!=d.c4)break b;}i=i+1|0;}b=new IG;V(b);K(b);}}b=CG(a.e4,CU(b));a.e4=b;CM(b,c);FM(c);}
function M_(a,b){var c;c=a.dO.data;return c[b%c.length|0];}
function ALb(a,b){CA(a.ds.y,b);}
function AHQ(a,b){CA(a.ds.P,b);}
function ZJ(a){var b,c;Lq(a);b=D7(a);c=a.bZ.data.length;b=Ba(b,c)+Ba(a.c9,c+1|0)|0;Bg(a.cE,a.q.b,b);}
function Tp(a){var b,c,d,e,f,g,h,i,j;b=IH(a.cv);if(Wo(a))return;Lq(a);Cy(b,a.dA);c=AEs(b,a.eB);d=a.bZ.data;e=d.length;f=0;while(f<e){g=d[f];h=JP(c,g.go);i=JP(c,g.ia);j=JP(c,g.iq);a.dJ=Bb(a.dJ,h);a.dL=Bb(a.dL,i);a.fO=Bb(a.fO,j);f=f+1|0;}}
function AQN(a,b){var c;c=NO(a,b.h);if(c>=0)a.cy=c;return Eq(a.ds,a.E)&&Hb(a.cv.cA)?1:0;}
function AFl(a,b,c){if(!Eq(a.ds,b.h)&&!LZ(a.ds)){b=a.l9;if(b!==null)b.p();}return null;}
function AFA(a,b,c,d){var e;if(d==1){e=NO(a,b.h);if(e>=0)Ny(a,a.bZ.data[e]);}return 1;}
function Ny(a,b){a.iv.p();b.mb.p();}
function NO(a,b){var c,d,e;if(!a.dO.data.length)return (-1);c=D7(a);d=(b.a-a.E.a|0)+a.bu.a|0;e=a.c9;e=(d+e|0)/(c+e|0)|0;if(e<a.bZ.data.length)return e;return (-1);}
function D7(a){return E0(a.dA);}
function Lq(a){var b;if(a.dA===null){b=GL(a.cv,a.qk);a.dA=b;a.dP=AD3(E0(b));a.eB=Dg(a.dA.lB);}}
function AKJ(a,b){var c,d,e;a:{switch(b.bh){case 13:Ny(a,a.bZ.data[a.cy]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cy=a.eY;b=a.eZ;c=a.bu;HS(b,c.b,c.a-(a.q.a/2|0)|0);return 0;case 34:a.cy=a.fo;b=a.eZ;c=a.bu;HS(b,c.b,c.a+(a.q.a/2|0)|0);return 0;case 35:case 39:a.cy=a.bZ.data.length-1|0;break a;case 36:case 37:a.cy=0;break a;case 38:d=a.cy;e=a.bZ.data.length;a.cy=((d+e
|0)-1|0)%e|0;break a;case 40:a.cy=(a.cy+1|0)%a.bZ.data.length|0;break a;default:break a;}a.iv.p();return 0;}e=a.cy;if(e<=a.eY)HS(a.eZ,a.bu.b,Ba(e,D7(a))+Ba(a.cy,a.c9)|0);else if(e>=a.fo)HS(a.eZ,a.bu.b,(Ba(e+1|0,D7(a))+Ba(a.cy+2|0,a.c9)|0)-a.q.a|0);return 0;}
var VV=F();
function ARG(a){}
function AAu(){var a=this;EI.call(a);a.k6=null;a.rp=null;a.tQ=null;a.bv=null;a.c1=null;a.c3=null;a.sj=0.0;a.l_=null;a.mw=null;}
function Zv(a,b){var c=new AAu();AQz(c,a,b);return c;}
function AQz(a,b,c){var d;c=c.cA;Lt(a);d=new Vu;d.rj=a;a.rp=d;d=new Vv;d.nJ=a;a.tQ=d;a.sj=10.0;a.bv=b;a.k6=c;b.eZ=a;}
function AFE(a){var b;b=a.bv;b.eZ=null;a.bv=CG(b,null);}
function Qx(a,b,c){var d;a.l_=b;a.mw=c;d=a.c1;if(d!==null)Gc(d,b,c);d=a.c3;if(d!==null)Gc(d,b,c);}
function AHn(a,b,c,d){PN(a,b,c,d);PN(a.bv,b,c,d);if(d!==0.0){a.bv.uB();AEa(a.bv);if(P4(a))HY(a);else a.c3=null;if(XC(a))H$(a);else a.c1=null;}}
function HS(a,b,c){ACg(a.bv,b,c);if(P4(a))HY(a);if(XC(a))H$(a);}
function XC(a){var b;b=a.q.a;return b>0&&a.bv.cE.a>b?1:0;}
function P4(a){var b;b=a.q.b;return b>0&&a.bv.cE.b>b?1:0;}
function HY(a){var b,c,d,e,f,g;b=a.c3;if(b===null)b=Hl();a.c3=b;Ua(a,b);c=a.c3;b=a.bv;d=b.bu.b;e=a.E;f=e.b;g=a.q;Mo(c,d,f,g.b,b.cE.b,e.a+g.a|0,JD(a));}
function H$(a){var b,c,d,e,f,g;b=a.c1;if(b===null)b=Hl();a.c1=b;Ua(a,b);c=a.c1;b=a.bv;d=b.bu.a;e=a.E;f=e.a;g=a.q;Is(c,d,f,g.a,b.cE.a,e.b+g.b|0,JD(a));}
function JD(a){return B_(a.sj,a.dW);}
function Ua(a,b){var c,d;c=a.l_;d=a.mw;if(!(c!==null&&d!==null?(Ky(b.hA,c)&&Ky(b.hz,d)?1:0):0))Gc(b,c,d);}
function AO2(a,b){var c;a.bv.eS(b);if(!(a.c1===null&&a.c3===null)){CJ(b,1);c=a.c1;if(c!==null)FT(c,b);c=a.c3;if(c!==null)FT(c,b);c=a.c1;if(c!==null)Gb(c,b);c=a.c3;if(c!==null)Gb(c,b);CJ(b,0);}}
function MV(a,b){var c,d;a:{b:{c=a.c1;if(!(c!==null&&IO(c,b))){c=a.c3;if(c===null)break b;if(!IO(c,b))break b;}d=1;break a;}d=0;}return d;}
function AJw(a,b,c,d){return !MV(a,b.h)&&!a.bv.cp(b,c,d)?0:1;}
function AP7(a,b,c){var d,e;d=a.c1;if(d!==null){e=Fe(d,b.h,a.rp,1);if(e!==null)return e;}d=a.c3;if(d!==null){e=Fe(d,b.h,a.tQ,0);if(e!==null)return e;}return a.bv.b5(b,c);}
function AI8(a,b,c){return MV(a,b.h)?1:0;}
function AKq(a,b){var c,d,e;c=a.c1;d=c!==null&&Fp(c,b.h,a.k6)?1:0;c=a.c3;e=c!==null&&Fp(c,b.h,a.k6)?1:0;return !d&&!e&&!a.bv.bR(b)?0:1;}
function APd(a,b,c,d){var e,f;if(!DG(a,b.h))return 0;e=B_(d*0.25,a.dW);f=B_(c*0.25,a.dW);if(b.bC){f=f+e|0;e=0;}if(a.c1!==null&&e){b=a.bv;Rc(b,b.bu.a+e|0);H$(a);}if(a.c3!==null&&f){b=a.bv;U8(b,b.bu.b+f|0);HY(a);}return 1;}
function AMF(a){var b,c;b=JD(a);c=a.bv.iL();c.b=Bb(c.b,b);c.a=Bb(c.a,b);return c;}
function V2(){var a=this;Gz.call(a);a.hJ=null;a.k0=null;a.r0=null;a.pD=0.0;}
function ANo(a){var b,c;b=a.cE;c=a.q;Bg(b,c.b*3|0,c.a*5|0);}
function ALe(a){var b;b=B_(20.0,a.dW);return BX(b,b);}
function AJ3(a,b){var c,d,e,f;c=a.r0;d=c.sT;e=c.sU;c=c.sR;b=Cx(b);f=new M;O(f);G(G(G(f,c),B(36)),b);IC(e,N(f),d.sO,3.0);}
function AHJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;Zt(a,b);VN(a,b);c=B_(30.0,a.dW);d=a.bu;e=d.b;f=Ba(e/c|0,c);g=d.a;h=Ba(g/c|0,c);d=a.q;i=Ba(((e+d.b|0)-1|0)/c|0,c);e=Ba(((g+d.a|0)-1|0)/c|0,c);d=a.k0;d.a=c;d.b=c;a.hJ.bA=1.0;while(h<=e){g=a.E.a-a.bu.a|0;j=f;while(j<=i){k=a.E.b-a.bu.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=ADC(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;W2(n,0.75,a.pD,a.hJ);By(b,k+j|0,g+h|0,a.k0,a.hJ);j=j+c|0;}h=h+c|0;}Iy(b);}
function AKH(a,b){}
function Pn(){var a=this;C.call(a);a.sT=null;a.sU=null;a.sR=null;}
function Vm(){C.call(this);this.pa=null;}
function ANJ(a){XN(a.pa);}
function Rr(){C.call(this);this.mo=null;}
function AJL(a){NF(a.mo);}
function XF(){C.call(this);this.kW=null;}
var AXI=null;function ANx(){var a=new XF();ZY(a);return a;}
function ZY(a){a.kW=Cm();}
function M4(a,b,c,d,e){var f;f=new Jq;f.mb=e;f.ia=c;f.iq=d;f.go=b;B0(a.kW,f);}
function QO(a){return HF(a.kW,AXI);}
function VH(b){var c,d;if(b===null)b=B(31);else{c=b.e8;if(c===null)b=B(31);else{d=Pz(c,B(378),I(c));b=d==(-1)?b.e8:Dk(b.e8,d+1|0);}}return b;}
function AAx(){AXI=Q(Jq,0);}
function HX(){var a=this;C.call(a);a.rk=null;a.hO=null;a.im=null;a.gD=null;a.g7=null;a.hb=null;a.gg=null;}
function Lz(b,c,d,e){var f,g,h;f=new HX;f.gD=new Bk;f.g7=new Bk;f.hb=new Bk;f.gg=b;g=DN(e,b.go);if(g!==null)g.gR=g.gR+1|0;else{g=new N7;h=Hf(c,b.go,d);g.gR=1;g.h2=h;K_(e,b.go,g);}e=g.h2;f.rk=e;Bg(f.gD,e.bi|0,e.bA|0);e=Hf(c,b.ia,d);f.hO=e;Bg(f.g7,e.bi|0,e.bA|0);b=Hf(c,b.iq,d);f.im=b;Bg(f.hb,b.bi|0,b.bA|0);return f;}
function Ve(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gg.go;f=DN(d,e);g=f.gR-1|0;f.gR=g;if(!g){a:{h=0;i=null;if(e===null){j=d.b6.data[0];while(j!==null){if(j.du===null)break a;k=j.cN;i=j;j=k;}}else{l=e.i7();m=d.b6.data;h=l&(m.length-1|0);j=m[h];while(j!==null&&!(j.iK==l&&YW(e,j.du))){k=j.cN;i=j;j=k;}}}if(j===null)j=null;else{if(i!==null)i.cN=j.cN;else d.b6.data[h]=j.cN;d.c4=d.c4+1|0;d.dr=d.dr-1|0;}Ie(b,f.h2);}Ie(b,c.hO);Ie(b,c.im);}
function Ty(){var a=this;EI.call(a);a.gJ=null;a.gN=null;a.gr=null;a.dV=null;a.iJ=0.0;a.gy=0;a.ht=0;a.da=null;a.lg=null;}
function LL(a){var b;b=a.q;return b.b&&b.a?0:1;}
function TX(a){var b,c;a:{if(a.gr!==null){b=a.gN;if(b!==null&&!Fo(b)){c=0;break a;}}c=1;}return c;}
function XL(a,b){a.q.a=b;}
function Pa(a,b,c,d,e){var f,g;f=a.gJ.dQ;Bg(f,d,a.q.a);g=a.E;By(b,g.b+c|0,g.a,f,e);}
function QY(a){if(a.dV===null)a.dV=GL(a.gJ,a.gr);}
function T_(){var a=this;C.call(a);a.kP=Em;a.jG=0;a.mT=0;}
function Yh(){var a=this;C.call(a);a.r3=null;a.r2=null;a.r1=null;}
function AHW(a){var b,c,d,e,f;b=a.r3;c=a.r2;d=a.r1;e=Bu();f=new M;O(f);b=G(f,b);BA(b,9);b=G(b,c);BA(b,9);G(b,d);Br(e,N(f));}
function Vu(){C.call(this);this.rj=null;}
function AQB(a,b){var c,d;c=a.rj;d=FJ(b,c.bv.cE.a-c.q.a|0);Rc(c.bv,d);H$(c);}
function Vv(){C.call(this);this.nJ=null;}
function AFN(a,b){var c,d;c=a.nJ;d=FJ(b,c.bv.cE.b-c.q.b|0);U8(c.bv,d);HY(c);}
function Jq(){var a=this;C.call(a);a.mb=null;a.ia=null;a.iq=null;a.go=null;}
var DY=F(Bo);
var ACm=F(EF);
function AHx(a){var b=new ACm();ALW(b,a);return b;}
function ALW(a,b){a.iX=1;a.jh=1;a.kz=b;}
function SW(){C.call(this);this.t0=null;}
function AIO(a,b){Db(a.t0,b);}
function SX(){C.call(this);this.qD=null;}
function ARE(a,b){Db(a.qD,b);}
function Sg(){var a=this;C.call(a);a.v8=null;a.v9=null;a.v7=null;}
function NK(){var a=this;C.call(a);a.s3=null;a.s5=null;a.s4=0;}
function AFu(a,b){var c,d,e;c=a.s3;d=a.s5;e=a.s4;d.l(Xx(c,(b.h.b+e|0)-c.dU.b|0));}
function NI(){var a=this;C.call(a);a.pO=null;a.pN=null;a.pP=0;}
function AHy(a,b){var c,d,e;c=a.pO;d=a.pN;e=a.pP;d.l(Ov(c,(b.h.a+e|0)-c.dU.a|0));}
function Kq(){var a=this;LX.call(a);a.ns=null;a.r5=null;}
function ADM(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.ns;e=0;f=0;g=a.r5;a:{b:{while(true){if((e+32|0)>f&&DM(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B6(b)+k|0;h=j.length;f=Z(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new Bx;c=new M;O(c);T(G(T(G(c,B(379)),l),B(94)),h);Bl(b,N(c));K(b);}if(B6(b)<m){b=new LN;V(b);K(b);}if(m<0){b=new Bx;c=new M;O(c);G(T(G(c,B(95)),m),B(96));Bl(b,N(c));K(b);}n=b.V;h=n+b.kr|0;e=0;while(e<m){o=k+1|0;i=b.k9.data;l=h+1|0;j[k]=i[h];e=e+
1|0;k=o;h=l;}b.V=n+m|0;e=0;}if(!DM(c)){p=!DM(b)&&e>=f?AVt:AVs;break a;}i=g.data;n=B6(c);o=i.length;n=Z(n,o);q=new U_;q.qW=b;q.s9=c;p=ADZ(a,d,e,f,g,0,n,q);e=q.uE;if(p===null&&0==q.jI)p=AVt;k=q.jI;h=0;if(c.lU){b=new IZ;V(b);K(b);}if(B6(c)<k)break;if(h>o){b=new Bx;c=new M;O(c);BA(T(G(T(G(c,B(97)),h),B(91)),o),41);Bl(b,N(c));K(b);}l=h+k|0;if(l>o){b=new Bx;c=new M;O(c);T(G(T(G(c,B(99)),l),B(94)),o);Bl(b,N(c));K(b);}if(k<0){b=new Bx;c=new M;O(c);G(T(G(c,B(95)),k),B(96));Bl(b,N(c));K(b);}o=c.V;m=0;while(m<k){l=o+1
|0;n=h+1|0;Sn(c,o,i[h]);m=m+1|0;o=l;h=n;}c.V=c.V+k|0;if(p!==null)break a;}b=new HT;V(b);K(b);}b=new Bx;c=new M;O(c);BA(T(G(T(G(c,B(97)),k),B(91)),h),41);Bl(b,N(c));K(b);}ED(b,b.V-(f-e|0)|0);return p;}
var TC=F(Kq);
function ADZ(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Kt(h,2))break a;i=AVt;break a;}c=k+1|0;n=j[k];if(!FD(a,n)){c=c+(-2)|0;i=DZ(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Kt(h,3))break a;i=AVt;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!FD(a,n))break b;if(!FD(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(L3(p)){c=k+(-3)|0;i=DZ(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=DZ(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Kt(h,4))break a;i=AVt;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B6(h.s9)<2?0:1)break a;i=AVs;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!FD(a,n))break c;if(!FD(a,o))break c;if(!FD(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=H5(r);m=c+1|0;j[c]=II(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=DZ(1);break a;}c=k+(-3)|0;i
=DZ(1);}h.uE=c;h.jI=f;return i;}
function FD(a,b){return (b&192)!=128?0:1;}
function PP(){C.call(this);this.rJ=null;}
function AGB(a,b){var c,d;c=a.rJ;d=c.dy+1|0;c.dy=d;c=new M;O(c);G(G(T(c,d),B(380)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function P9(){C.call(this);this.nl=null;}
function AMl(a){return VP(a.nl);}
function P$(){C.call(this);this.q4=null;}
function AKa(a){return VP(a.q4);}
function NL(){C.call(this);this.sQ=null;}
function AEM(a){return a.sQ.kc();}
function Vl(){C.call(this);this.yb=null;}
function AMI(a){Br(Bu(),B(381));}
function Qz(){C.call(this);this.mK=null;}
function AEO(a,b){a.mK.l(FA(b));}
function UH(){C.call(this);this.r8=null;}
function AQ9(a,b){a.r8.p();}
function MJ(){var a=this;C.call(a);a.vG=null;a.vH=null;a.vJ=0;a.vL=0;}
var AB2=F();
var ABX=F();
function Sj(){C.call(this);this.ux=null;}
function AFM(a,b){var c,d,e,f;c=a.ux;d=Cx(b);e=new M;O(e);G(G(e,B(382)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new SF;d.wq=c;d.o2=b;e=new SE;e.vl=c;f=new UC;f.wg=e;e=new VR;e.nk=d;c=b.e0;if(c!==null)c.arrayBuffer().then(Bj(e,"f"),Bj(f,"f"));else{b=b.gw.getFile();c=new VU;c.sZ=e;c.s0=f;b.then(Bj(c,"f"),Bj(f,"f"));}}
function Si(){C.call(this);this.wQ=null;}
function AGs(a,b){var c;b=Cx(b);c=new M;O(c);G(G(c,B(383)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var RD=F();
function AI5(a,b){b=b;b.b0=CG(b.b0,null);}
function S4(){C.call(this);this.s6=null;}
function AJN(a){DK(a.s6);}
var JY=F(DU);
var AXJ=0.0;var AXK=null;function Zz(){AXJ=$rt_globals.NaN;AXK=E($rt_doublecls());}
var Lu=F();
var AXL=null;var AXM=null;function AA7(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.mT=Fa(CV(d,Cc(0, 2147483648)),Em)?0:1;e=CV(d,Cc(4294967295, 1048575));f=EC(Gl(d,52))&2047;if(Fa(e,Em)&&!f){c.kP=Em;c.jG=0;return;}g=0;if(f)e=ASM(e,Cc(0, 1048576));else{e=Fn(e,1);while(Fa(CV(e,Cc(0, 1048576)),Em)){e=Fn(e,1);f=f+(-1)|0;g=g+1|0;}}h=AB4(AXM,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AXM.data[h]|0)|0;j=Rm(e,AXL.data[h],i);if(Z1(j,Cc(2808348672, 232830643))){h=h+1|0;i=12+(f-AXM.data[h]|0)|0;j=Rm(e,AXL.data[h],
i);}k=D5(AXL.data[h],(63-i|0)-g|0);l=Gl(Cq(k,Bc(1)),1);m=Gl(k,1);if(Fa(e,Cc(0, 1048576)))m=Gl(m,2);n=Bc(10);while(Py(n,m)){n=BQ(n,Bc(10));}if(Z1(MN(j,n),Dp(m,Bc(2))))n=Dp(n,Bc(10));o=Bc(1);while(Py(o,l)){o=BQ(o,Bc(10));}if(AHI(Kr(o,MN(j,o)),Dp(l,Bc(2))))o=Dp(o,Bc(10));f=AS7(n,o);e=f>0?BQ(Dp(j,n),n):f<0?Cq(BQ(Dp(j,o),o),o):BQ(Dp(Cq(j,Dp(o,Bc(2))),o),o);if(Z1(e,Cc(2808348672, 232830643))){h=h+1|0;e=Dp(e,Bc(10));}else if(AH1(e,Cc(1569325056, 23283064))){h=h+(-1)|0;e=BQ(e,Bc(10));}c.kP=e;c.jG=h-330|0;}
function Rm(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CV(b,Bc(65535));f=CV(D5(b,16),Bc(65535));g=CV(D5(b,32),Bc(65535));h=CV(D5(b,48),Bc(65535));i=CV(c,Bc(65535));j=CV(D5(c,16),Bc(65535));k=CV(D5(c,32),Bc(65535));l=CV(D5(c,48),Bc(65535));m=Cq(Cq(BQ(k,e),BQ(j,f)),BQ(i,g));n=Cq(Cq(Cq(BQ(l,e),BQ(k,f)),BQ(j,g)),BQ(i,h));o=Cq(Cq(Fn(BQ(l,h),32+d|0),Fn(Cq(BQ(l,g),BQ(k,h)),16+d|0)),Fn(Cq(Cq(BQ(l,f),BQ(k,g)),BQ(j,h)),d));return Cq(d>16?Cq(o,Fn(n,d-16|0)):Cq(o,D5(n,16-d|0)),D5(m,32-d|0));}
function AAI(){var b,c,d,e,f,g,h,i,j,k;AXL=ATY(660);AXM=BC(660);b=Cc(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AXL.data;g=d+330|0;f[g]=FE(e,Bc(80));AXM.data[g]=c;e=FE(e,Bc(10));h=Nk(e,Bc(10));while(Py(e,b)&&Fa(CV(e,Cc(0, 2147483648)),Em)){e=Fn(e,1);c=c+1|0;h=Fn(h,1);}e=Cq(e,Dp(h,Bc(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AHI(e,Cc(3435973836, 214748364))){e=Gl(e,1);j=j+1|0;d=d+(-1)|0;}k=BQ(e,Bc(10));b=j<=0?k:Cq(k,Gl(BQ(CV(b,Bc((1<<j)-1|0)),Bc(10)),j));f=AXL.data;g=(330-i|0)-1|0;f[g]=FE(b,
Bc(80));AXM.data[g]=d;i=i+1|0;}}
function MK(){C.call(this);this.si=null;}
function AR0(a,b){var c,d;c=a.si;d=new Bo;Bl(d,$rt_str(b.message));c.l(d);}
function TY(){var a=this;C.call(a);a.qP=0;a.l8=0;}
function FJ(a,b){return PD(a.qP,b,a.l8);}
function Nm(){var a=this;C.call(a);a.tW=null;a.tY=null;a.tX=null;}
function AQQ(a,b,c,d){var e,f;b=a.tW;e=a.tY;f=a.tX;Ts(b,e);if(f!==null)d.lZ.p();if(Mt(d)){if(d.jr===null)TE(b,AEd(d,e),d.hZ,e);else PF(b,AEd(d,e),d.hZ,e,d.jr);}}
var R3=F(DU);
var AXN=null;function FE(b,c){return Long_udiv(b, c);}
function Nk(b,c){return Long_urem(b, c);}
function Ld(b,c){return Long_ucompare(b, c);}
function AAG(){AXN=E($rt_longcls());}
var Fh=F(Bo);
function Nz(){var a=this;C.call(a);a.mk=null;a.pE=null;a.tb=0;a.uu=0;}
function LG(a,b){return B6(a.pE)<b?0:1;}
var ADv=F();
function UA(b,c,d,e){var f,g;f=b.next();g=new Xo;g.mz=b;g.my=c;g.mC=d;g.mA=e;f.then(Bj(g,"f"),Bj(d,"f"));}
function YY(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AD0(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(D8()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Xj;f.ql=b;f.qm=d;d.addEventListener("change",Bj(f,"handleEvent"));d.click();}
function Y7(b,c){var d;if(c.isFile?1:0)b.l(Yw(c.file()));else{c=c.createReader();d=new W$;d.tr=b;c.readEntries(Bj(d,"f"));}}
function SV(){var a=this;C.call(a);a.bH=null;a.n9=null;a.hG=null;a.ir=null;a.W=null;}
function IA(a){return a.bH.cg.iy;}
function N5(a){var b;b=new O4;b.pB=a;return b;}
function AEx(a){var b,c,d,e,f,g;b=Q(C$,4);c=b.data;d=a.W.ba.T.bg;e=a.bH;BG(e);f=new VO;f.sN=e;c[0]=D4(B(384),d,f);e=a.W.ba.T.bg;f=a.bH;BG(f);g=new VT;g.nh=f;c[1]=D4(B(385),e,g);e=a.W.ba.T.bg;f=a.bH;BG(f);g=new VS;g.rH=f;c[2]=D4(B(386),e,g);e=a.W.ba.T.bg;f=a.bH;BG(f);g=new VQ;g.vg=f;c[3]=D4(B(387),e,g);return FQ(b);}
function I_(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DK(a.W.b8);d=a.bH.e;e=Do(d);f=GV(d);g=a.bH.el;if(c===null)h=null;else{ASw();switch(AXO.data[c.cY]){case 1:h=KQ(g,e,f);break a;case 2:h=VF(g,e,f);break a;default:}b=new Ep;V(b);K(b);}}c=a.bH;e=ET(c,b);f=HI(c.e.f,e.bs,e.bE);g=OD(c,f);if(h!==null){f=c.e;i=e.bs;j=e.bE;e=new PA;e.xI=c;e.xJ=b;e.xK=g;h.sb(f,i,j,e,c.gK);}else{e=DN(c.e.f.d_,f);if(e!==null)Hv(c,e);else{e=DN(c.e.f.ev,f);if(e!==null&&!Eb(e))Vg(c.ii,b,e,c,g);else{g=c.ii;DK(g.b8);h=g.b8;k=Q(C$,1);l=k.data;d=new C$;BG(h);f
=new VI;f.nG=h;K3(d,f,B(388),g.ba.T.pw);l[0]=d;F_(h,b,FQ(k),No(g,c));}}}}
var Zh=F(0);
function AJx(b){return 112<=b&&b<=123?1:0;}
var Xq=F();
function AO8(a,b){YY(b);}
function Xp(){var a=this;C.call(a);a.pJ=null;a.pI=null;}
function AHE(a,b){var c,d,e,f,g,h,i;c=a.pJ;d=a.pI;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new PO;i.nB=c;i.nA=g;h.then(Bj(i,"f"),Bj(d,"f"));e=e+1|0;}}
var WU=F();
function AJa(a,b){YY(b);}
function WT(){var a=this;C.call(a);a.oS=null;a.oT=null;}
function AJ7(a,b){var c,d,e,f,g;c=a.oS;d=a.oT;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=Q(Bv,1);g.data[0]=FA(b.name);UA(f,c,d,g);}
var YI=F();
function ABO(b,c){return ACL(null,b,c,0);}
function ACL(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=ADA(c);g=BP(f);h=BP(f);i=BP(f);j=Q(Cz,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<Cp(b)){l=BP(f);c[k]=B2(b,k);l=4*l|0;f.eM=f.eM+l|0;}else c[k]=DO(ABB(f,d,0));k=k+1|0;}m=YZ(f,h);n=new HK;n.d_=Gv();n.ev=Gv();n.fg=Cm();if(!c.length){b=new BD;V(b);K(b);}n.C=j;n.fz=0;n.cs=0;n.c_=ATy(m);b=n.d_;e=0;while(e<i){K_(b,ES(BP(f),BP(f)),ES(BP(f),BP(f)));e=e+1|0;}b=n.d_;m=n.ev;o=new UD;SB(o,b);while(Jd(o)){Uk(o);p=o.gT;q=p.du;p=p.dx;b=Cm();if(DN(m,p)===null)K_(m,p,b);B0(DN(m,
p),q);}if(m.j6===null){b=new O3;b.uL=m;m.j6=b;}b=m.j6;q=new Q1;SB(q,b.uL);while(Jd(q)){Uk(q);b=q.gT.dx;m=AUL;c=Q(C,b.i);d=c.data;HF(b,c);Z_(c,m);e=0;g=d.length;while(e<g){m=d[e];I8(b,e);b.ci.data[e]=m;e=e+1|0;}}Qc(f);return n;}
function ABl(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=ADA(c);g=BP(f);h=BP(f);i=BP(f);j=BP(f);k=Nv(b,g);l=Nv(b,h);m=(IF(B2(b,k.b),k.a)).data[0].o;e=(IF(B2(b,l.b),l.a)).data[1].o;n=0;o=i-1|0;while(n<i){p=ABB(f,d,g);if(!n)p=LF(m,p);if(n==o)p=LF(p,e);q=k.b+n|0;r=DO(p);b.C.data[q]=r;n=n+1|0;}r=YZ(f,j);Qc(f);if(!Eb(r)){s=N0(g,h,(-1));b=b.c_;f=ASB(s,r);r=KB(b,b.cR,s);if(r!==null){f=f.cR.bx;if(r===b.cR)b.cR=Bp(f,0);else if(r.dI!==null){b=new NY;b.r4=r;J2(f,b);q=Qe(r.dI.bx,
r);El(r.dI.bx,q);b=r.dI.bx;Pb(b,q);if(!Eb(f)){Ji(b,b.i+f.i|0);j=f.i;g=b.i;h=g-1|0;while(h>=q){c=b.ci.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.i=g+j|0;f=BU(f);g=0;while(g<j){c=b.ci.data;h=q+1|0;c[q]=BY(f);g=g+1|0;q=h;}b.ct=b.ct+1|0;}}}}}
function ABB(b,c,d){var e,f,g,h,i,j,k,l;e=BP(b);f=Q(B7,e);g=f.data;h=0;while(h<e){i=BP(b);j=BP(b);k=BP(b);l=BP(b);g[h]=DC(Ht(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function YZ(b,c){var d,e;d=Cm();e=0;while(e<c){B0(d,N0(BP(b),BP(b),BP(b)));e=e+1|0;}return d;}
var W1=F(0);
var AVK=null;function YV(){AVK=null;}
function Xj(){var a=this;C.call(a);a.ql=null;a.qm=null;}
function AI2(a,b){var c,d,e,f,g,h;b=a.ql;c=a.qm;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new MF;h.mt=b;h.ms=g;$rt_globals.setTimeout(Bj(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Yw(d.item(f));g=new Mp;g.rM=b;g.rN=c;$rt_globals.setTimeout(Bj(g,"onTimer"),0);f=f+1|0;}}
function AAe(){var a=this;C.call(a);a.hW=null;a.jP=null;}
function ADQ(){var a=this;C.call(a);a.x6=0;a.xR=0;a.sl=0;a.kv=0;}
function Us(){var a=this;C.call(a);a.m1=null;a.m0=null;}
function AJH(a){var b,c,d,e,f,g;b=a.m1;c=a.m0;if(C6(c.hW,b.e.fQ)){c=c.jP;CB(b,c.kv,c.sl,0);B4(b.r.bP,c.kv,c.sl);B4(b.r.bF,c.xR,c.x6);}else{d=(Co(b.el.rm)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Ck(b);b=new Tv;b.tI=g;b.tH=c;BG(b);c=new PG;c.ve=b;$rt_globals.setTimeout(Bj(c,"onTimer"),0);}}}
function Uu(){var a=this;C.call(a);a.vi=null;a.vd=null;}
function AOB(a){Hv(a.vi,a.vd);}
function ACw(){var a=this;C.call(a);a.h9=null;a.eM=0;}
function ADA(a){var b=new ACw();AEU(b,a);return b;}
function AEU(a,b){a.h9=b;a.eM=0;}
function BP(a){var b,c;b=a.h9.data;c=a.eM;a.eM=c+1|0;return b[c];}
function Qc(a){var b,c,d,e;if(a.eM!=a.h9.data.length){b=Iw();c=a.h9.data.length;d=a.eM;e=new M;O(e);G(T(G(T(G(e,B(389)),c),B(390)),d),B(391));Br(b,N(e));}}
var IZ=F(Fh);
var HT=F(Bo);
var LN=F(Bo);
function AAF(){C.call(this);this.Bf=null;}
function Sm(){var a=this;C.call(a);a.tt=null;a.tx=null;}
function ARc(a){var b,c;b=a.tt;c=a.tx;FO(b.dY,c);}
function Q4(){C.call(this);this.ss=null;}
function AKt(a,b){HD(a.ss,b);}
function Sw(){var a=this;C.call(a);a.ol=null;a.ok=null;}
function AFU(a){var b,c;b=a.ol;c=a.ok;FO(b.dY,c);T8(b);}
var Yq=F();
function RX(b,c){return b.data[c];}
function GY(){var a=this;C.call(a);a.eH=0;a.fe=0;a.kD=null;a.jo=0;a.gQ=null;}
function AFc(a,b,c,d,e,f){var g=new GY();AKm(g,a,b,c,d,e,f);return g;}
function AKm(a,b,c,d,e,f,g){a.eH=b;a.fe=c;a.kD=BX(f,g);a.jo=d;a.gQ=e;}
function ACG(){Ga.call(this);this.Cy=null;}
function O3(){EN.call(this);this.uL=null;}
var WL=F(Bx);
var Qj=F(0);
var Nt=F(0);
var LQ=F();
function AAj(){var a=this;LQ.call(a);a.EA=null;a.GC=0;a.E_=0;a.CN=0;}
function Rx(){var a=this;C.call(a);a.nI=null;a.nH=null;}
function AGu(a){var b,c;b=a.nI;c=a.nH;UV();I_(b,c,AXP);}
function Rw(){var a=this;C.call(a);a.oV=null;a.oX=null;}
function AEW(a){var b,c;b=a.oV;c=a.oX;UV();I_(b,c,AXQ);}
function Rv(){var a=this;C.call(a);a.u1=null;a.u2=null;}
function AK8(a){I_(a.u1,a.u2,null);}
function Ru(){var a=this;C.call(a);a.mZ=null;a.m2=null;}
function APP(a){var b,c,d,e,f,g,h;b=a.mZ;c=a.m2;d=Do(b.bH.e);e=GV(b.bH.e);d=Nl(b.bH.el,d,e);DK(b.W.b8);b=b.bH;e=ET(b,c);if(d!==null){f=b.e;g=e.bs;h=e.bE;e=new Qh;e.wW=b;e.wV=c;d.HA(f,g,h,1,e,b.gK);}}
function Pp(){C.call(this);this.p6=null;}
function APa(a){var b;b=a.p6;DK(b.W.b8);GA(b.bH,N5(b),0);}
function Pr(){C.call(this);this.tw=null;}
function AKb(a){var b;b=a.tw;DK(b.W.b8);GA(b.bH,N5(b),1);}
function Ps(){C.call(this);this.su=null;}
function AGX(a){var b,c,d;b=a.su;DK(b.W.b8);c=IA(b);b=b.bH;BG(b);d=new S0;d.sx=b;QN(c,d,YT(B(392)));}
var Xr=F(0);
var AVG=null;function YE(){AVG=new Pl;}
function We(){C.call(this);this.sJ=null;}
function AFR(a){var b,c,d;b=a.sJ;DK(b.W.b8);c=IA(b);b=b.bH;BG(b);d=new Q$;d.qA=b;LO(c,d);}
function UF(){C.call(this);this.sS=null;}
function AJS(a,b,c){var d,e;c=a.sS;d=c.e.f;e=b.fp;b=c.eI;Xg(d.C.data[e],0,b);}
function Qs(){var a=this;C.call(a);a.ox=null;a.oA=0;a.oB=0;a.oC=null;a.oD=0;a.oy=0;}
function AJD(a,b){var c,d,e,f,g,h,i,j;c=a.ox;d=a.oA;e=a.oB;f=a.oC;g=a.oD;h=a.oy;i=Cv(c.bp,5.0);d=Z((c.bp.b7.b-d|0)-i|0,Bb((i-d|0)-c.S.q.b|0,b.h.b));j=Z((c.bp.b7.a-e|0)-i|0,Bb((i-e|0)-c.S.q.a|0,b.h.a));Bg(f,d+g|0,j+h|0);Fm(c,f,c.O.q);}
function Xz(){var a=this;C.call(a);a.nW=null;a.nV=null;a.nT=null;a.nS=0;a.n0=0;a.nZ=0;a.nY=0;a.nX=0;a.n2=0;a.n1=0;a.r7=0;}
function AK7(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.nW;d=a.nV;e=a.nT;f=a.nS;g=a.n0;h=a.nZ;i=a.nY;j=a.nX;k=a.n2;l=a.n1;m=a.r7;n=Cv(c.bp,5.0);o=c.O.iL();CA(d,c.O.q);CA(e,c.O.E);switch(f){case -1:f=Z(h+(b.h.b-g|0)|0,c.bp.b7.b-n|0);g=o.b;h=h+i|0;f=Bb(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Bb((i+b.h.b|0)-g|0,Bb(o.b,n-c.S.E.b|0));}b:{switch(j){case -1:f=Bb(n,Z(l+(b.h.a-k|0)|0,(c.bp.b7.a+c.S.q.a|0)-n|0));g=o.a;h=l+m|0;f=Bb(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Bb((m+b.h.a|0)-k|0,o.a);}Fm(c,e,d);}
function Vj(){var a=this;C.call(a);a.u8=null;a.u9=0.0;}
function JP(a,b){return KL(a.u8,b,a.u9*2.0+0.875);}
function SP(){C.call(this);this.nN=null;}
function AKI(a){a.nN.tj();}
function SQ(){C.call(this);this.rl=null;}
function ALZ(a){a.rl.or();}
function SO(){C.call(this);this.u$=null;}
function ANl(a){a.u$.pW();}
function N_(){C.call(this);this.rL=null;}
function AJB(a){a.rL.ur();}
function N$(){C.call(this);this.qx=null;}
function APZ(a){a.qx.uS();}
function Vd(){C.call(this);this.q9=null;}
function AHt(a){var b,c,d,e,f,g,h,i;b=a.q9;c=(b.n9.dj()).data;d=Q(C$,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new Yi;i.pA=b;i.pz=h;e[f]=ABW(i,h,b.W.ba.T.bg);f=f+1|0;}return d;}
function VO(){C.call(this);this.sN=null;}
function ANU(a){var b,c,d,e,f;b=a.sN.e.f;c=b.cs;d=new M;O(d);T(G(d,B(393)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.fz;d=new M;O(d);T(G(d,B(394)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.c_;e=FS(EE(b));Sd(d,0,d.cR,e);b=Bu();f=b.jZ;f.data[0]=10;NW(b,f,0,1);}
function VT(){C.call(this);this.nh=null;}
function AKQ(a){SK(a.nh);}
function VS(){C.call(this);this.rH=null;}
function AFJ(a){WQ(a.rH);}
function VQ(){C.call(this);this.vg=null;}
function AHB(a){J5(a.vg);}
function Xm(){C.call(this);this.oM=null;}
function AGZ(a,b,c){FR(B2(a.oM.e.f,b.fp),0,I(c));}
function PO(){var a=this;C.call(a);a.nB=null;a.nA=null;}
function AHR(a,b){a.nB.l(AB7(a.nA,b));}
var IR=F(0);
function MF(){var a=this;C.call(a);a.mt=null;a.ms=null;}
function AKc(a){Y7(a.mt,a.ms);}
function Mp(){var a=this;C.call(a);a.rM=null;a.rN=null;}
function AEG(a){a.rM.l(a.rN);}
var Pl=F();
function Xo(){var a=this;C.call(a);a.mz=null;a.my=null;a.mC=null;a.mA=null;}
function AJs(a,b){var c,d,e,f,g,h,i;c=a.mz;d=a.my;e=a.mC;f=a.mA;if(!(b.done?1:0)){UA(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Uh;c.oU=d;c.oW=g;c.oY=f;b.then(Bj(c,"f"),Bj(e,"f"));}else{h=f.data;c=g.values();b=FA(g.name);i=h.length;f=Dl(f,i+1|0);f.data[i]=b;UA(c,d,e,f);}}}
function GQ(){var a=this;C.call(a);a.h5=0;a.rS=0;a.hk=null;a.gT=null;a.o9=null;a.iS=null;}
function AXR(a){var b=new GQ();SB(b,a);return b;}
function SB(a,b){a.iS=b;a.rS=b.c4;a.hk=null;}
function Jd(a){var b,c;if(a.hk!==null)return 1;while(true){b=a.h5;c=a.iS.b6.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.h5=b+1|0;}return 0;}
function ZV(a){var b;if(a.rS==a.iS.c4)return;b=new IG;V(b);K(b);}
function Uk(a){var b,c,d,e;ZV(a);if(!Jd(a)){b=new X6;V(b);K(b);}b=a.hk;if(b!==null){c=a.gT;if(c!==null)a.o9=c;a.gT=b;a.hk=b.cN;}else{d=a.iS.b6.data;e=a.h5;a.h5=e+1|0;b=d[e];a.gT=b;a.hk=b.cN;a.o9=null;}}
var UD=F(GQ);
var Q1=F(GQ);
function QZ(){var a=this;C.call(a);a.g=null;a.dh=0;a.jN=null;a.mY=0;a.f4=0;a.ex=0;a.br=0;a.kN=null;}
function JS(a){return a.g.bJ;}
function XP(a,b,c,d){var e,f,g,h,i,j;e=Cm();f=a.dh;g=0;if(c!=f)a.dh=c;a:{switch(b){case -1073741784:h=new RM;c=a.br+1|0;a.br=c;Fl(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Pw;c=a.br+1|0;a.br=c;Fl(h,c);break a;case -33554392:h=new SU;c=a.br+1|0;a.br=c;Fl(h,c);break a;default:c=a.f4+1|0;a.f4=c;if(d!==null)h=ATH(c);else{h=new Fv;Fl(h,0);g=1;}c=a.f4;if(c<=(-1))break a;if(c>=10)break a;a.jN.data[c]=h;break a;}h=new XJ;Fl(h,(-1));}while(true){if(EY(a.g)&&a.g.j==(-536870788))
{d=AQk(B9(a,2),B9(a,64));while(!Dj(a.g)&&EY(a.g)){i=a.g;j=i.j;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cu(d,Bf(i));i=a.g;if(i.bf!=(-536870788))continue;Bf(i);}i=KN(a,d);i.M(h);}else if(a.g.bf==(-536870788)){i=GH(h);Bf(a.g);}else{i=OV(a,h);d=a.g;if(d.bf==(-536870788))Bf(d);}if(i!==null)B0(e,i);if(Dj(a.g))break;if(a.g.bf==(-536870871))break;}if(a.g.j_==(-536870788))B0(e,GH(h));if(a.dh!=f&&!g){a.dh=f;d=a.g;d.fM=f;d.j=d.bf;d.eq=d.eD;j=d.c7;d.u=j+1|0;d.gV=j;E1(d);}switch(b){case -1073741784:break;case -536870872:d
=new MD;Fw(d,e,h);return d;case -268435416:d=new Wf;Fw(d,e,h);return d;case -134217688:d=new Q2;Fw(d,e,h);return d;case -67108824:d=new TF;Fw(d,e,h);return d;case -33554392:d=new DP;Fw(d,e,h);return d;default:switch(e.i){case 0:break;case 1:return ATt(Bp(e,0),h);default:return AS6(e,h);}return GH(h);}d=new IX;Fw(d,e,h);return d;}
function AC5(a){var b,c,d,e,f,g,h;b=BC(4);c=(-1);d=(-1);if(!Dj(a.g)&&EY(a.g)){e=b.data;c=Bf(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BL(3);b=e.data;b[0]=c&65535;f=a.g;g=f.bf;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bf(f);f=a.g;g=f.bf;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bf(f);return AP3(e,3);}return AP3(e,2);}if(!B9(a,2))return ZU(b[0]);if(B9(a,64))return AOa(b[0]);return AGG(b[0]);}e=b.data;c=1;while(c<4&&!Dj(a.g)&&EY(a.g)){h=c+1|0;e[c]=Bf(a.g);c=h;}if(c==1){h=e[0];if(!(AXS.xv(h)==AXT?0:1))return XG(a,e[0]);}if
(!B9(a,2))return AUh(b,c);if(B9(a,64)){f=new Xn;NR(f,b,c);return f;}f=new TS;NR(f,b,c);return f;}
function OV(a,b){var c,d,e,f,g,h,i;if(EY(a.g)&&!JI(a.g)&&Ki(a.g.j)){if(B9(a,128)){c=AC5(a);if(!Dj(a.g)){d=a.g;e=d.bf;if(!(e==(-536870871)&&!(b instanceof Fv))&&e!=(-536870788)&&!EY(d))c=L5(a,b,c);}}else if(!N1(a.g)&&!Vh(a.g)){f=new N2;O(f);while(!Dj(a.g)&&EY(a.g)&&!N1(a.g)&&!Vh(a.g)){if(!(!JI(a.g)&&!a.g.j)&&!(!JI(a.g)&&Ki(a.g.j))){g=a.g.j;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bf(a.g);if(!LY(e))BA(f,e&65535);else Ii(f,Gm(e));}if(!B9(a,2)){c=new RA;Dy(c);c.co
=N(f);e=f.N;c.bG=e;c.j4=AMw(e);c.kQ=AMw(c.bG);h=0;while(h<(c.bG-1|0)){Q7(c.j4,L(c.co,h),(c.bG-h|0)-1|0);Q7(c.kQ,L(c.co,(c.bG-h|0)-1|0),(c.bG-h|0)-1|0);h=h+1|0;}}else if(B9(a,64))c=AUf(f);else{c=new Na;Dy(c);c.gW=N(f);c.bG=f.N;}}else c=L5(a,b,Xl(a,b));}else{d=a.g;if(d.bf!=(-536870871))c=L5(a,b,Xl(a,b));else{if(b instanceof Fv)K(B8(B(31),d.bJ,NZ(d)));c=GH(b);}}a:{if(!Dj(a.g)){e=a.g.bf;if(!(e==(-536870871)&&!(b instanceof Fv))&&e!=(-536870788)){f=OV(a,b);if(c instanceof C2&&!(c instanceof E2)&&!(c instanceof CP)
&&!(c instanceof Ex)){i=c;if(!f.bQ(i.I)){c=new Wv;ER(c,i.I,i.d,i.hh);c.I.M(c);}}if((f.hl()&65535)!=43)c.M(f);else c.M(f.I);break a;}}if(c===null)return null;c.M(b);}if((c.hl()&65535)!=43)return c;return c.I;}
function L5(a,b,c){var d,e,f,g,h;d=a.g;e=d.bf;if(c!==null&&!(c instanceof BV)){switch(e){case -2147483606:Bf(d);d=new Yf;Dd(d,c,b,e);Mb();c.M(AXU);return d;case -2147483605:Bf(d);d=new Po;Dd(d,c,b,(-2147483606));Mb();c.M(AXU);return d;case -2147483585:Bf(d);d=new O5;Dd(d,c,b,(-536870849));Mb();c.M(AXU);return d;case -2147483525:f=new M6;d=E$(d);g=a.ex+1|0;a.ex=g;I7(f,d,c,b,(-536870849),g);Mb();c.M(AXU);return f;case -1073741782:case -1073741781:Bf(d);d=new Rq;Dd(d,c,b,e);c.M(d);return d;case -1073741761:Bf(d);d
=new Qf;Dd(d,c,b,(-536870849));c.M(b);return d;case -1073741701:h=new UY;d=E$(d);e=a.ex+1|0;a.ex=e;I7(h,d,c,b,(-536870849),e);c.M(h);return h;case -536870870:case -536870869:Bf(d);if(c.hl()!=(-2147483602)){d=new CP;Dd(d,c,b,e);}else if(B9(a,32)){d=new Rs;Dd(d,c,b,e);}else{d=new Oa;f=O8(a.dh);Dd(d,c,b,e);d.j$=f;}c.M(d);return d;case -536870849:Bf(d);d=new FN;Dd(d,c,b,(-536870849));c.M(b);return d;case -536870789:h=new E_;d=E$(d);e=a.ex+1|0;a.ex=e;I7(h,d,c,b,(-536870849),e);c.M(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bf(d);d=new Yg;ER(d,f,b,e);f.d=d;return d;case -2147483585:Bf(d);c=new Wq;ER(c,f,b,(-2147483585));return c;case -2147483525:c=new OT;Sa(c,E$(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bf(d);d=new P_;ER(d,f,b,e);f.d=d;return d;case -1073741761:Bf(d);c=new T7;ER(c,f,b,(-1073741761));return c;case -1073741701:c=new Q3;Sa(c,E$(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bf(d);d=ATA(f,b,e);f.d=d;return d;case -536870849:Bf(d);c
=new Ex;ER(c,f,b,(-536870849));return c;case -536870789:return ASJ(E$(d),f,b,(-536870789));default:}return c;}
function Xl(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fv;while(true){a:{e=a.g;f=e.bf;if((f&(-2147418113))==(-2147483608)){Bf(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dh=g;else{if(f!=(-1073741784))g=a.dh;c=XP(a,f,g,b);e=a.g;if(e.bf!=(-536870871))K(B8(B(31),e.bJ,e.c7));Bf(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bf(e);c
=APO(0);break a;case -2147483577:Bf(e);c=new N8;BM(c);break a;case -2147483558:Bf(e);c=new W8;h=a.br+1|0;a.br=h;ADs(c,h);break a;case -2147483550:Bf(e);c=APO(1);break a;case -2147483526:Bf(e);c=new WR;BM(c);break a;case -536870876:Bf(e);a.br=a.br+1|0;if(B9(a,8)){if(B9(a,1)){c=ASX(a.br);break a;}c=ASe(a.br);break a;}if(B9(a,1)){c=ATa(a.br);break a;}c=ATL(a.br);break a;case -536870866:Bf(e);if(B9(a,32)){c=AT4();break a;}c=ATG(O8(a.dh));break a;case -536870821:Bf(e);i=0;c=a.g;if(c.bf==(-536870818)){i=1;Bf(c);}c
=KN(a,F0(a,i));c.M(b);e=a.g;if(e.bf!=(-536870819))K(B8(B(31),e.bJ,e.c7));OC(e,1);Bf(a.g);break a;case -536870818:Bf(e);a.br=a.br+1|0;if(!B9(a,8)){c=new Kp;BM(c);break a;}c=new Ng;e=O8(a.dh);BM(c);c.qI=e;break a;case 0:j=e.eD;if(j!==null)c=KN(a,j);else{if(Dj(e)){c=GH(b);break a;}c=ZU(f&65535);}Bf(a.g);break a;default:break b;}Bf(e);c=new Kp;BM(c);break a;}h=(f&2147483647)-48|0;if(a.f4<h)K(B8(B(31),Fi(e),NZ(a.g)));Bf(e);a.br=a.br+1|0;c=!B9(a,2)?ASl(h,a.br):B9(a,64)?ASY(h,a.br):AUc(h,a.br);a.jN.data[h].jL=1;a.mY
=1;break a;}if(f>=0&&!GJ(e)){c=XG(a,f);Bf(a.g);}else if(f==(-536870788))c=GH(b);else{if(f!=(-536870871)){b=new IL;c=!GJ(a.g)?W7(f&65535):a.g.eD.cr();e=a.g;Jg(b,c,e.bJ,e.c7);K(b);}if(d){b=new IL;e=a.g;Jg(b,B(31),e.bJ,e.c7);K(b);}c=GH(b);}}}if(f!=(-16777176))break;}return c;}
function F0(a,b){var c,d,e,f,g,h,i,j,$$je;c=AQk(B9(a,2),B9(a,64));Er(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Dj(a.g))break a;h=a.g;b=h.bf;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cu(c,d);d=Bf(a.g);h=a.g;if(h.bf!=(-536870874)){d=38;break d;}if(h.j==(-536870821)){Bf(h);e=1;d=(-1);break d;}Bf(h);if(g){c=F0(a,0);break d;}if(a.g.bf==(-536870819))break d;WX(c,F0(a,0));break d;case -536870867:if(!g){b=h.j;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bf(h);h=a.g;i=h.bf;if(GJ(h))break c;if
(i<0){j=a.g.j;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Ki(i))break e;i=i&65535;break e;}catch($$e){$$je=Ef($$e);if($$je instanceof D1){break b;}else{throw $$e;}}}try{BS(c,d,i);}catch($$e){$$je=Ef($$e);if($$je instanceof D1){break b;}else{throw $$e;}}Bf(a.g);d=(-1);break d;}}if(d>=0)Cu(c,d);d=45;Bf(a.g);break d;case -536870821:if(d>=0){Cu(c,d);d=(-1);}Bf(a.g);j=0;h=a.g;if(h.bf==(-536870818)){Bf(h);j=1;}if(!e)Yt(c,F0(a,j));else WX(c,F0(a,j));e=0;Bf(a.g);break d;case -536870819:if(d>=0)Cu(c,
d);d=93;Bf(a.g);break d;case -536870818:if(d>=0)Cu(c,d);d=94;Bf(a.g);break d;case 0:if(d>=0)Cu(c,d);h=a.g.eD;if(h===null)d=0;else{AEq(c,h);d=(-1);}Bf(a.g);break d;default:}if(d>=0)Cu(c,d);d=Bf(a.g);}g=0;}K(B8(B(31),JS(a),a.g.c7));}K(B8(B(31),JS(a),a.g.c7));}if(!f){if(d>=0)Cu(c,d);return c;}K(B8(B(31),JS(a),a.g.c7-1|0));}
function XG(a,b){var c,d,e;c=LY(b);if(B9(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AGG(b&65535);}if(B9(a,64)&&b>128){if(c){d=new Mu;Dy(d);d.bG=2;d.p_=Gx(Gu(b));return d;}if(OL(b))return AMD(b&65535);if(!Sy(b))return AOa(b&65535);return AJY(b&65535);}}if(!c){if(OL(b))return AMD(b&65535);if(!Sy(b))return ZU(b&65535);return AJY(b&65535);}d=new DT;Dy(d);d.bG=2;d.fv=b;e=(Gm(b)).data;d.jg=e[0];d.hX=e[1];return d;}
function KN(a,b){var c,d,e;if(!ABK(b)){if(!b.K){if(b.gE())return AJm(b);return APQ(b);}if(!b.gE())return AKG(b);c=new I9;Un(c,b);return c;}c=YX(b);d=new ML;BM(d);d.oO=c;d.vr=c.be;if(!b.K){if(b.gE())return ACu(AJm(Hr(b)),d);return ACu(APQ(Hr(b)),d);}if(!b.gE())return ACu(AKG(Hr(b)),d);c=new P5;e=new I9;Un(e,Hr(b));AD8(c,e,d);return c;}
function Hs(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B9(a,b){return (a.dh&b)!=b?0:1;}
function NY(){C.call(this);this.r4=null;}
function ARS(a,b){b.dI=a.r4.dI;}
var Gn=F(Cj);
var AXQ=null;var AXP=null;var AXV=null;function UV(){UV=Bm(Gn);AHV();}
function AKj(a,b){var c=new Gn();ZO(c,a,b);return c;}
function ZO(a,b,c){UV();C_(a,b,c);}
function AHV(){var b;AXQ=AKj(B(395),0);b=AKj(B(396),1);AXP=b;AXV=H(Gn,[AXQ,b]);}
function S0(){C.call(this);this.sx=null;}
function AKT(a,b){Db(a.sx,b);}
function Bz(){var a=this;C.call(a);a.d=null;a.ce=0;a.n6=null;a.hh=0;}
var AUP=0;function BM(a){var b,c;b=new Ff;c=AUP;AUP=c+1|0;JX(b,c);a.n6=L1(b);}
function KK(a,b){var c,d;c=new Ff;d=AUP;AUP=d+1|0;JX(c,d);a.n6=L1(c);a.d=b;}
function HA(a,b,c,d){var e;e=d.v;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function HO(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AG_(a,b){a.hh=b;}
function AGk(a){return a.hh;}
function APg(a){return a.d;}
function AQa(a,b){a.d=b;}
function AP9(a,b){return 1;}
function AQ2(a){return null;}
function I4(a){var b;a.ce=1;b=a.d;if(b!==null){if(!b.ce){b=b.e_();if(b!==null){a.d.ce=1;a.d=b;}a.d.d8();}else if(b instanceof Gq&&b.ea.jL)a.d=b.d;}}
function AEi(){AUP=1;}
var Uw=F();
var AXO=null;function ASw(){ASw=Bm(Uw);AF0();}
function AF0(){var b,c;UV();b=BC((AXV.eG()).data.length);c=b.data;AXO=b;c[AXQ.cY]=1;c[AXP.cY]=2;}
function O4(){C.call(this);this.pB=null;}
function AHj(a,b){Uo(IA(a.pB),b,AVP,YT(B(397)));}
function V1(){C.call(this);this.tP=null;}
function AIZ(a,b){var c,d;c=a.tP;d=b.hd;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function Yi(){var a=this;C.call(a);a.pA=null;a.pz=null;}
function AG5(a){var b,c;b=a.pA;c=a.pz;b.hG.sB(c);}
function CN(){var a=this;Bz.call(a);a.jL=0;a.dq=0;}
var AXU=null;function Mb(){Mb=Bm(CN);AIm();}
function ATH(a){var b=new CN();Fl(b,a);return b;}
function Fl(a,b){Mb();BM(a);a.dq=b;}
function AFQ(a,b,c,d){var e,f;e=Iq(d,a.dq);Jy(d,a.dq,b);f=a.d.c(b,c,d);if(f<0)Jy(d,a.dq,e);return f;}
function ALK(a){return a.dq;}
function AF_(a,b){return 0;}
function AIm(){var b;b=new N3;BM(b);AXU=b;}
function GE(){var a=this;C.call(a);a.bc=null;a.fM=0;a.eu=0;a.tE=0;a.j_=0;a.bf=0;a.j=0;a.re=0;a.eD=null;a.eq=null;a.u=0;a.hs=0;a.c7=0;a.gV=0;a.bJ=null;}
var AXW=null;var AXS=null;var AXT=0;function OC(a,b){if(b>0&&b<3)a.eu=b;if(b==1){a.j=a.bf;a.eq=a.eD;a.u=a.gV;a.gV=a.c7;E1(a);}}
function GJ(a){return a.eD===null?0:1;}
function JI(a){return a.eq===null?0:1;}
function Bf(a){E1(a);return a.j_;}
function E$(a){var b;b=a.eD;E1(a);return b;}
function E1(a){var b,c,d,e,f,g,h,$$je;a.j_=a.bf;a.bf=a.j;a.eD=a.eq;a.c7=a.gV;a.gV=a.u;while(true){b=0;c=a.u>=a.bc.data.length?0:LA(a);a.j=c;a.eq=null;if(a.eu==4){if(c!=92)return;c=a.u;d=a.bc.data;c=c>=d.length?0:d[BT(a)];a.j=c;switch(c){case 69:break;default:a.j=92;a.u=a.hs;return;}a.eu=a.tE;a.j=a.u>(a.bc.data.length-2|0)?0:LA(a);}a:{c=a.j;if(c!=92){e=a.eu;if(e==1)switch(c){case 36:a.j=(-536870876);break a;case 40:if(a.bc.data[a.u]!=63){a.j=(-2147483608);break a;}BT(a);c=a.bc.data[a.u];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.j=(-134217688);BT(a);break b;default:K(B8(B(31),Fi(a),a.u));}a.j=(-67108824);BT(a);}else{switch(c){case 33:break;case 60:BT(a);c=a.bc.data[a.u];e=1;break b;case 61:a.j=(-536870872);BT(a);break b;case 62:a.j=(-33554392);BT(a);break b;default:f=AEj(a);a.j=f;if(f<256){a.fM=f;f=f<<16;a.j=f;a.j=(-1073741784)|f;break b;}f=f&255;a.j=f;a.fM=f;f=f<<16;a.j=f;a.j=(-16777176)|f;break b;}a.j=(-268435416);BT(a);}}if(!e)break;}break a;case 41:a.j=(-536870871);break a;case 42:case 43:case 63:e
=a.u;d=a.bc.data;switch(e>=d.length?42:d[e]){case 43:a.j=c|(-2147483648);BT(a);break a;case 63:a.j=c|(-1073741824);BT(a);break a;default:}a.j=c|(-536870912);break a;case 46:a.j=(-536870866);break a;case 91:a.j=(-536870821);OC(a,2);break a;case 93:if(e!=2)break a;a.j=(-536870819);break a;case 94:a.j=(-536870818);break a;case 123:a.eq=ADN(a,c);break a;case 124:a.j=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.j=(-536870874);break a;case 45:a.j=(-536870867);break a;case 91:a.j=(-536870821);break a;case 93:a.j
=(-536870819);break a;case 94:a.j=(-536870818);break a;default:}}else{c=a.u>=(a.bc.data.length-2|0)?(-1):LA(a);c:{a.j=c;switch(c){case -1:K(B8(B(31),Fi(a),a.u));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.j
=ACe(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eu!=1)break a;a.j=(-2147483648)|c;break a;case 65:a.j=(-2147483583);break a;case 66:a.j=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:K(B8(B(31),Fi(a),a.u));case 68:case 83:case 87:case 100:case 115:case 119:a.eq=R2(Ht(a.bc,
a.hs,1),0);a.j=0;break a;case 71:a.j=(-2147483577);break a;case 80:case 112:break c;case 81:a.tE=a.eu;a.eu=4;b=1;break a;case 90:a.j=(-2147483558);break a;case 97:a.j=7;break a;case 98:a.j=(-2147483550);break a;case 99:c=a.u;d=a.bc.data;if(c>=(d.length-2|0))K(B8(B(31),Fi(a),a.u));a.j=d[BT(a)]&31;break a;case 101:a.j=27;break a;case 102:a.j=12;break a;case 110:a.j=10;break a;case 114:a.j=13;break a;case 116:a.j=9;break a;case 117:a.j=Pu(a,4);break a;case 120:a.j=Pu(a,2);break a;case 122:a.j=(-2147483526);break a;default:}break a;}g
=ABZ(a);h=0;if(a.j==80)h=1;try{a.eq=R2(g,h);}catch($$e){$$je=Ef($$e);if($$je instanceof Ja){K(B8(B(31),Fi(a),a.u));}else{throw $$e;}}a.j=0;}}if(b)continue;else break;}}
function ABZ(a){var b,c,d,e,f,g;b=new M;FU(b,10);c=a.u;d=a.bc;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Ht(d,BT(a),1);f=new M;O(f);G(G(f,B(398)),b);return N(f);}BT(a);c=0;a:{while(true){g=a.u;d=a.bc.data;if(g>=(d.length-2|0))break;c=d[BT(a)];if(c==125)break a;BA(b,c);}}if(c!=125)K(B8(B(31),a.bJ,a.u));}if(!b.N)K(B8(B(31),a.bJ,a.u));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(398)),f);return N(b);}b:{c:{if(I(f)>3){if(KD(f,B(398)))break c;if(KD(f,B(399)))break c;}break b;}f=Dk(f,2);}return f;}
function ADN(a,b){var c,d,e,f,g,$$je;c=new M;FU(c,4);d=(-1);e=2147483647;a:{while(true){f=a.u;g=a.bc.data;if(f>=g.length)break a;b=g[BT(a)];if(b==125)break a;if(b==44&&d<0)try{d=Jt(DS(c),10);ADT(c,0,Y$(c));continue;}catch($$e){$$je=Ef($$e);if($$je instanceof De){break;}else{throw $$e;}}BA(c,b&65535);}K(B8(B(31),a.bJ,a.u));}if(b!=125)K(B8(B(31),a.bJ,a.u));if(c.N>0)b:{try{e=Jt(DS(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Ef($$e);if($$je instanceof De){}else{throw $$e;}}K(B8(B(31),a.bJ,a.u));}else if
(d<0)K(B8(B(31),a.bJ,a.u));if((d|e|(e-d|0))<0)K(B8(B(31),a.bJ,a.u));b=a.u;g=a.bc.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.j=(-2147483525);BT(a);break c;case 63:a.j=(-1073741701);BT(a);break c;default:}a.j=(-536870789);}c=new MW;c.es=d;c.en=e;return c;}
function Fi(a){return a.bJ;}
function Dj(a){return !a.bf&&!a.j&&a.u==a.re&&!GJ(a)?1:0;}
function Ki(b){return b<0?0:1;}
function EY(a){return !Dj(a)&&!GJ(a)&&Ki(a.bf)?1:0;}
function N1(a){var b;b=a.bf;return b<=56319&&b>=55296?1:0;}
function Vh(a){var b;b=a.bf;return b<=57343&&b>=56320?1:0;}
function Sy(b){return b<=56319&&b>=55296?1:0;}
function OL(b){return b<=57343&&b>=56320?1:0;}
function Pu(a,b){var c,d,e,f,$$je;c=new M;FU(c,b);d=a.bc.data.length-2|0;e=0;while(true){f=BE(e,b);if(f>=0)break;if(a.u>=d)break;BA(c,a.bc.data[BT(a)]);e=e+1|0;}if(!f)a:{try{b=Jt(DS(c),16);}catch($$e){$$je=Ef($$e);if($$je instanceof De){break a;}else{throw $$e;}}return b;}K(B8(B(31),a.bJ,a.u));}
function ACe(a){var b,c,d,e,f,g;b=3;c=1;d=a.bc.data;e=d.length-2|0;f=UR(d[a.u],8);switch(f){case -1:break;default:if(f>3)b=2;BT(a);a:{while(true){if(c>=b)break a;g=a.u;if(g>=e)break a;g=UR(a.bc.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BT(a);c=c+1|0;}}return f;}K(B8(B(31),a.bJ,a.u));}
function AEj(a){var b,c,d,e;b=1;c=a.fM;a:while(true){d=a.u;e=a.bc.data;if(d>=e.length)K(B8(B(31),a.bJ,d));b:{c:{switch(e[d]){case 41:BT(a);return c|256;case 45:if(!b)K(B8(B(31),a.bJ,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BT(a);}BT(a);return c;}
function BT(a){var b,c,d,e,f;b=a.u;a.hs=b;if(!(a.fM&4))a.u=b+1|0;else{c=a.bc.data.length-2|0;a.u=b+1|0;a:while(true){d=a.u;if(d<c&&Q0(a.bc.data[d])){a.u=a.u+1|0;continue;}d=a.u;if(d>=c)break;e=a.bc.data;if(e[d]!=35)break;a.u=d+1|0;while(true){f=a.u;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.u=f+1|0;}}}return a.hs;}
function ADE(b){return AXW.Cm(b);}
function LA(a){var b,c,d,e;b=a.bc.data[BT(a)];if(CD(b)){c=a.hs+1|0;d=a.bc.data;if(c<d.length){e=d[c];if(C4(e)){BT(a);return Es(b,e);}}}return b;}
function NZ(a){return a.c7;}
function IL(){var a=this;BD.call(a);a.xc=null;a.wN=null;a.pV=0;}
function B8(a,b,c){var d=new IL();Jg(d,a,b,c);return d;}
function Jg(a,b,c,d){V(a);a.pV=(-1);a.xc=b;a.wN=c;a.pV=d;}
function W$(){C.call(this);this.tr=null;}
function ANA(a,b){var c,d;c=a.tr;d=0;while(d<b.length){Y7(c,b[d]);d=d+1|0;}}
var ABR=F(0);
function Uh(){var a=this;C.call(a);a.oU=null;a.oW=null;a.oY=null;}
function ANc(a,b){a.oU.l(ASf(a.oW,b,a.oY));}
var RM=F(CN);
function AFn(a,b,c,d){var e;e=a.dq;BH(d,e,b-Dm(d,e)|0);return a.d.c(b,c,d);}
function AOL(a,b){return 0;}
var XJ=F(CN);
function AG8(a,b,c,d){return b;}
var Pw=F(CN);
function AGh(a,b,c,d){if(Dm(d,a.dq)!=b)b=(-1);return b;}
function SU(){CN.call(this);this.mM=0;}
function AFs(a,b,c,d){var e;e=a.dq;BH(d,e,b-Dm(d,e)|0);a.mM=b;return b;}
function ANm(a,b){return 0;}
var Fv=F(CN);
function AQr(a,b,c,d){if(d.i6!=1&&b!=d.v)return (-1);d.is=1;Jy(d,0,b);return b;}
function BV(){Bz.call(this);this.bG=0;}
function Dy(a){BM(a);a.bG=1;}
function ARs(a,b,c,d){var e;if((b+a.bW()|0)>d.v){d.de=1;return (-1);}e=a.bq(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function APD(a){return a.bG;}
function AKk(a,b){return 1;}
var ADq=F(BV);
function GH(a){var b=new ADq();ALT(b,a);return b;}
function ALT(a,b){KK(a,b);a.bG=1;a.hh=1;a.bG=0;}
function AO_(a,b,c){return 0;}
function AIt(a,b,c,d){var e,f,g;e=d.v;f=d.cF;while(true){g=BE(b,e);if(g>0)return (-1);if(g<0&&C4(L(c,b))&&b>f&&CD(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AGW(a,b,c,d,e){var f,g;f=e.v;g=e.cF;while(true){if(c<b)return (-1);if(c<f&&C4(L(d,c))&&c>g&&CD(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AFq(a,b){return 0;}
function BR(){var a=this;Bz.call(a);a.by=null;a.ea=null;a.X=0;}
function AS6(a,b){var c=new BR();Fw(c,a,b);return c;}
function Fw(a,b,c){BM(a);a.by=b;a.ea=c;a.X=c.dq;}
function AI9(a,b,c,d){var e,f,g,h;if(a.by===null)return (-1);e=Fz(d,a.X);Dx(d,a.X,b);f=a.by.i;g=0;while(true){if(g>=f){Dx(d,a.X,e);return (-1);}h=(Bp(a.by,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ANf(a,b){a.ea.d=b;}
function AK9(a,b){var c;a:{c=a.by;if(c!==null){c=BU(c);while(true){if(!B5(c))break a;if(!(BY(c)).bQ(b))continue;else return 1;}}}return 0;}
function ANY(a,b){return Iq(b,a.X)>=0&&Fz(b,a.X)==Iq(b,a.X)?0:1;}
function AGT(a){var b,c,d,e;a.ce=1;b=a.ea;if(b!==null&&!b.ce)I4(b);a:{b=a.by;if(b!==null){c=b.i;d=0;while(true){if(d>=c)break a;b=Bp(a.by,d);e=b.e_();if(e===null)e=b;else{b.ce=1;El(a.by,d);Rp(a.by,d,e);}if(!e.ce)e.d8();d=d+1|0;}}}if(a.d!==null)I4(a);}
var IX=F(BR);
function AMZ(a,b,c,d){var e,f,g,h;e=Dm(d,a.X);BH(d,a.X,b);f=a.by.i;g=0;while(true){if(g>=f){BH(d,a.X,e);return (-1);}h=(Bp(a.by,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AOm(a,b){return !Dm(b,a.X)?0:1;}
var DP=F(IX);
function AHC(a,b,c,d){var e,f,g;e=Dm(d,a.X);BH(d,a.X,b);f=a.by.i;g=0;while(g<f){if((Bp(a.by,g)).c(b,c,d)>=0)return a.d.c(a.ea.mM,c,d);g=g+1|0;}BH(d,a.X,e);return (-1);}
function AN5(a,b){a.d=b;}
var MD=F(DP);
function AM9(a,b,c,d){var e,f;e=a.by.i;f=0;while(f<e){if((Bp(a.by,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AQf(a,b){return 0;}
var Wf=F(DP);
function AF5(a,b,c,d){var e,f;e=a.by.i;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bp(a.by,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function APJ(a,b){return 0;}
var Q2=F(DP);
function AGN(a,b,c,d){var e,f,g,h;e=a.by.i;f=d.iz?0:d.cF;a:{g=a.d.c(b,c,d);if(g>=0){BH(d,a.X,b);h=0;while(true){if(h>=e)break a;if((Bp(a.by,h)).cm(f,b,c,d)>=0){BH(d,a.X,(-1));return g;}h=h+1|0;}}}return (-1);}
function ARW(a,b){return 0;}
var TF=F(DP);
function AEX(a,b,c,d){var e,f;e=a.by.i;BH(d,a.X,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bp(a.by,f)).cm(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AOA(a,b){return 0;}
function Gq(){BR.call(this);this.cS=null;}
function ATt(a,b){var c=new Gq();ZF(c,a,b);return c;}
function ZF(a,b,c){BM(a);a.cS=b;a.ea=c;a.X=c.dq;}
function AFg(a,b,c,d){var e,f;e=Fz(d,a.X);Dx(d,a.X,b);f=a.cS.c(b,c,d);if(f>=0)return f;Dx(d,a.X,e);return (-1);}
function ALt(a,b,c,d){var e;e=a.cS.ch(b,c,d);if(e>=0)Dx(d,a.X,e);return e;}
function AOR(a,b,c,d,e){var f;f=a.cS.cm(b,c,d,e);if(f>=0)Dx(e,a.X,f);return f;}
function AK4(a,b){return a.cS.bQ(b);}
function ANj(a){var b;b=new M0;ZF(b,a.cS,a.ea);a.d=b;return b;}
function AQ5(a){var b;a.ce=1;b=a.ea;if(b!==null&&!b.ce)I4(b);b=a.cS;if(b!==null&&!b.ce){b=b.e_();if(b!==null){a.cS.ce=1;a.cS=b;}a.cS.d8();}}
var GG=F();
function U(){var a=this;GG.call(a);a.be=0;a.cb=0;a.J=null;a.ja=null;a.jE=null;a.K=0;}
var AXX=null;function Ow(){Ow=Bm(U);AHl();}
function Bn(a){var b;Ow();b=new W6;b.z=BC(64);a.J=b;}
function AF7(a){return null;}
function AFC(a){return a.J;}
function ABK(a){var b,c,d,e,f;if(!a.cb)b=G$(a.J,0)>=2048?0:1;else{a:{c=a.J;b=0;d=c.bo;if(b<d){e=c.z.data;f=(e[0]^(-1))>>>0|0;if(f)b=Ih(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Ih(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AJl(a){return a.K;}
function APx(a){return a;}
function YX(a){var b,c;if(a.jE===null){b=a.eC();c=new Wt;c.xC=a;c.ne=b;Bn(c);a.jE=c;Er(c,a.cb);}return a.jE;}
function Hr(a){var b,c;if(a.ja===null){b=a.eC();c=new Wr;c.xf=a;c.s7=b;c.tS=a;Bn(c);a.ja=c;Er(c,a.be);a.ja.K=a.K;}return a.ja;}
function AQ1(a){return 0;}
function Er(a,b){var c;c=a.be;if(c^b){a.be=c?0:1;a.cb=a.cb?0:1;}if(!a.K)a.K=1;return a;}
function AIv(a){return a.be;}
function Ke(b,c){Ow();return b.k(c);}
function If(b,c){var d,e;Ow();if(b.db()!==null&&c.db()!==null){b=b.db();c=c.db();d=Z(b.z.data.length,c.z.data.length);e=0;a:{while(e<d){if(b.z.data[e]&c.z.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function R2(b,c){var d,e,f;Ow();d=0;while(true){AOy();e=AXY.data;if(d>=e.length){f=new Ja;Bl(f,B(31));f.x0=B(31);f.xF=b;K(f);}e=e[d].data;if(Bq(b,e[0]))break;d=d+1|0;}return ACW(e[1],c);}
function AHl(){var b;b=new G0;AOy();AXX=b;}
function Zw(){var a=this;U.call(a);a.kT=0;a.mL=0;a.f5=0;a.ku=0;a.dF=0;a.e6=0;a.F=null;a.bw=null;}
function Dn(){var a=new Zw();ARC(a);return a;}
function AQk(a,b){var c=new Zw();AG$(c,a,b);return c;}
function ARC(a){Bn(a);a.F=ARY();}
function AG$(a,b,c){Bn(a);a.F=ARY();a.kT=b;a.mL=c;}
function Cu(a,b){a:{if(a.kT){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dF){Mk(a.F,Hs(b&65535));break a;}Lv(a.F,Hs(b&65535));break a;}if(a.mL&&b>128){a.f5=1;b=Gx(Gu(b));}}}if(!(!Sy(b)&&!OL(b))){if(a.ku)Mk(a.J,b-55296|0);else Lv(a.J,b-55296|0);}if(a.dF)Mk(a.F,b);else Lv(a.F,b);if(!a.K&&LY(b))a.K=1;return a;}
function AEq(a,b){var c,d,e;if(!a.K&&b.K)a.K=1;if(a.ku){if(!b.cb)FP(a.J,b.eC());else Da(a.J,b.eC());}else if(!b.cb)FI(a.J,b.eC());else{Fq(a.J,b.eC());Da(a.J,b.eC());a.cb=a.cb?0:1;a.ku=1;}if(!a.e6&&b.db()!==null){if(a.dF){if(!b.be)FP(a.F,b.db());else Da(a.F,b.db());}else if(!b.be)FI(a.F,b.db());else{Fq(a.F,b.db());Da(a.F,b.db());a.be=a.be?0:1;a.dF=1;}}else{c=a.be;d=a.bw;if(d!==null){if(!c){e=new Op;e.vQ=a;e.um=c;e.tA=d;e.tp=b;Bn(e);a.bw=e;}else{e=new Oq;e.x8=a;e.qz=c;e.qf=d;e.pr=b;Bn(e);a.bw=e;}}else{if(c&&!a.dF
&&L2(a.F)){d=new Om;d.wM=a;d.qo=b;Bn(d);a.bw=d;}else if(!c){d=new Ok;d.kd=a;d.jq=c;d.nU=b;Bn(d);a.bw=d;}else{d=new Ol;d.k5=a;d.jx=c;d.tu=b;Bn(d);a.bw=d;}a.e6=1;}}return a;}
function BS(a,b,c){var d,e,f,g,h;if(b>c){d=new BD;V(d);K(d);}a:{b:{if(!a.kT){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cu(a,b);b=b+1|0;}}if(!a.dF)HV(a.F,b,c+1|0);else{d=a.F;c=c+1|0;if(b>c){d=new Bx;V(d);K(d);}e=d.bo;if(b<e){f=Z(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.z.data;h[g]=h[g]&(Ia(d,b)|HG(d,f));}else{h=d.z.data;h[g]=h[g]&Ia(d,b);e=g+1|0;while(e<c){d.z.data[e]=0;e=e+1|0;}if(f&31){h=d.z.data;h[c]=h[c]&HG(d,f);}}G4(d);}}}}return a;}
function Yt(a,b){var c,d,e;if(!a.K&&b.K)a.K=1;if(b.f5)a.f5=1;c=a.cb;if(!(c^b.cb)){if(!c)FI(a.J,b.J);else Da(a.J,b.J);}else if(c)FP(a.J,b.J);else{Fq(a.J,b.J);Da(a.J,b.J);a.cb=1;}if(!a.e6&&CT(b)!==null){c=a.be;if(!(c^b.be)){if(!c)FI(a.F,CT(b));else Da(a.F,CT(b));}else if(c)FP(a.F,CT(b));else{Fq(a.F,CT(b));Da(a.F,CT(b));a.be=1;}}else{c=a.be;d=a.bw;if(d!==null){if(!c){e=new Of;e.vw=a;e.sA=c;e.ts=d;e.t5=b;Bn(e);a.bw=e;}else{e=new O0;e.v1=a;e.t2=c;e.mq=d;e.mO=b;Bn(e);a.bw=e;}}else{if(!a.dF&&L2(a.F)){if(!c){d=new On;d.yc
=a;d.o6=b;Bn(d);a.bw=d;}else{d=new Oo;d.v6=a;d.tO=b;Bn(d);a.bw=d;}}else if(!c){d=new Or;d.sD=a;d.qR=b;d.qj=c;Bn(d);a.bw=d;}else{d=new Os;d.rh=a;d.rE=b;d.rU=c;Bn(d);a.bw=d;}a.e6=1;}}}
function WX(a,b){var c,d,e;if(!a.K&&b.K)a.K=1;if(b.f5)a.f5=1;c=a.cb;if(!(c^b.cb)){if(!c)Da(a.J,b.J);else FI(a.J,b.J);}else if(!c)FP(a.J,b.J);else{Fq(a.J,b.J);Da(a.J,b.J);a.cb=0;}if(!a.e6&&CT(b)!==null){c=a.be;if(!(c^b.be)){if(!c)Da(a.F,CT(b));else FI(a.F,CT(b));}else if(!c)FP(a.F,CT(b));else{Fq(a.F,CT(b));Da(a.F,CT(b));a.be=0;}}else{c=a.be;d=a.bw;if(d!==null){if(!c){e=new Oh;e.vP=a;e.sI=c;e.nb=d;e.qv=b;Bn(e);a.bw=e;}else{e=new Oi;e.wb=a;e.r$=c;e.mf=d;e.sz=b;Bn(e);a.bw=e;}}else{if(!a.dF&&L2(a.F)){if(!c){d=new Oc;d.v$
=a;d.oE=b;Bn(d);a.bw=d;}else{d=new Od;d.x4=a;d.oK=b;Bn(d);a.bw=d;}}else if(!c){d=new Oj;d.vb=a;d.ui=b;d.rw=c;Bn(d);a.bw=d;}else{d=new Ob;d.ru=a;d.sd=b;d.qB=c;Bn(d);a.bw=d;}a.e6=1;}}}
function CY(a,b){var c;c=a.bw;if(c!==null)return a.be^c.k(b);return a.be^Dv(a.F,b);}
function CT(a){if(!a.e6)return a.F;return null;}
function AIl(a){return a.J;}
function APX(a){var b,c;if(a.bw!==null)return a;b=CT(a);c=new Og;c.vs=a;c.h0=b;Bn(c);return Er(c,a.be);}
function AMj(a){var b,c,d;b=new M;O(b);c=G$(a.F,0);while(c>=0){Ii(b,Gm(c));BA(b,124);c=G$(a.F,c+1|0);}d=b.N;if(d>0)Wh(b,d-1|0);return N(b);}
function AIy(a){return a.f5;}
function Ja(){var a=this;Bo.call(a);a.x0=null;a.xF=null;}
function D0(){Bz.call(this);this.I=null;}
function Dd(a,b,c,d){KK(a,c);a.I=b;a.hh=d;}
function ARB(a){return a.I;}
function AOU(a,b){return !a.I.bQ(b)&&!a.d.bQ(b)?0:1;}
function AQm(a,b){return 1;}
function ALR(a){var b;a.ce=1;b=a.d;if(b!==null&&!b.ce){b=b.e_();if(b!==null){a.d.ce=1;a.d=b;}a.d.d8();}b=a.I;if(b!==null){if(!b.ce){b=b.e_();if(b!==null){a.I.ce=1;a.I=b;}a.I.d8();}else if(b instanceof Gq&&b.ea.jL)a.I=b.d;}}
function C2(){D0.call(this);this.Z=null;}
function ATA(a,b,c){var d=new C2();ER(d,a,b,c);return d;}
function ER(a,b,c,d){Dd(a,b,c,d);a.Z=b;}
function AEZ(a,b,c,d){var e,f;e=0;a:{while((b+a.Z.bW()|0)<=d.v){f=a.Z.bq(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.Z.bW()|0;e=e+(-1)|0;}return f;}
function E2(){C2.call(this);this.i5=null;}
function ASJ(a,b,c,d){var e=new E2();Sa(e,a,b,c,d);return e;}
function Sa(a,b,c,d,e){ER(a,c,d,e);a.i5=b;}
function AFT(a,b,c,d){var e,f,g,h,i;e=a.i5;f=e.es;g=e.en;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.Z.bW()|0)>d.v)break a;i=a.Z.bq(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.Z.bW()|0;h=h+(-1)|0;}return i;}if((b+a.Z.bW()|0)>d.v){d.de=1;return (-1);}i=a.Z.bq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CP=F(D0);
function AFf(a,b,c,d){var e;if(!a.I.H(d))return a.d.c(b,c,d);e=a.I.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var Ex=F(C2);
function ALz(a,b,c,d){var e;e=a.I.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function ARZ(a,b){a.d=b;a.I.M(b);}
var Wv=F(C2);
function ARk(a,b,c,d){while((b+a.Z.bW()|0)<=d.v&&a.Z.bq(b,c)>0){b=b+a.Z.bW()|0;}return a.d.c(b,c,d);}
function AMg(a,b,c,d){var e,f,g;e=a.d.ch(b,c,d);if(e<0)return (-1);f=e-a.Z.bW()|0;while(f>=b&&a.Z.bq(f,c)>0){g=f-a.Z.bW()|0;e=f;f=g;}return e;}
function X(){var a=this;C.call(a);a.ld=null;a.ka=null;}
function ACW(a,b){if(!b&&a.ld===null)a.ld=a.B();else if(b&&a.ka===null)a.ka=Er(a.B(),1);if(b)return a.ka;return a.ld;}
var De=F(BD);
function MW(){var a=this;GG.call(a);a.es=0;a.en=0;}
function AMs(a){var b,c,d,e,f;b=a.es;c=a.en;d=c==2147483647?B(31):L1(ADD(c));e=new M;O(e);BA(e,123);f=T(e,b);BA(f,44);BA(G(f,d),125);return N(e);}
var N3=F(Bz);
function AKM(a,b,c,d){return b;}
function ANe(a,b){return 0;}
function W6(){var a=this;C.call(a);a.z=null;a.bo=0;}
function ARY(){var a=new W6();AGx(a);return a;}
function AGx(a){a.z=BC(0);}
function Lv(a,b){var c,d;c=b/32|0;if(b>=a.bo){In(a,c+1|0);a.bo=b+1|0;}d=a.z.data;d[c]=d[c]|1<<(b%32|0);}
function HV(a,b,c){var d,e,f,g,h;d=BE(b,c);if(d>0){e=new Bx;V(e);K(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bo){In(a,f+1|0);a.bo=c;}if(d==f){g=a.z.data;g[d]=g[d]|HG(a,b)&Ia(a,c);}else{g=a.z.data;g[d]=g[d]|HG(a,b);h=d+1|0;while(h<f){a.z.data[h]=(-1);h=h+1|0;}if(c&31){g=a.z.data;g[f]=g[f]|Ia(a,c);}}}
function HG(a,b){return (-1)<<(b%32|0);}
function Ia(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Mk(a,b){var c,d;c=b/32|0;d=a.z.data;if(c<d.length){d[c]=d[c]&Ka((-2),b%32|0);if(b==(a.bo-1|0))G4(a);}}
function Dv(a,b){var c,d;c=b/32|0;d=a.z.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function G$(a,b){var c,d,e,f;c=a.bo;if(b>=c)return (-1);d=b/32|0;e=a.z.data;f=e[d]>>>(b%32|0)|0;if(f)return Ih(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Ih(e[f])|0;f=f+1|0;}return (-1);}
function In(a,b){var c;c=a.z.data.length;if(c>=b)return;c=Bb((b*3|0)/2|0,(c*2|0)+1|0);a.z=L8(a.z,c);}
function G4(a){var b,c,d;b=(a.bo+31|0)/32|0;a.bo=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=NC(a.z.data[c]);if(d<32)break;c=c+(-1)|0;a.bo=a.bo-32|0;}a.bo=a.bo-d|0;}}
function Da(a,b){var c,d,e,f;c=Z(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]&b.z.data[d];d=d+1|0;}while(true){f=a.z.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bo=Z(a.bo,b.bo);G4(a);}
function FP(a,b){var c,d,e;c=Z(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]&(b.z.data[d]^(-1));d=d+1|0;}G4(a);}
function FI(a,b){var c,d,e;c=Bb(a.bo,b.bo);a.bo=c;In(a,(c+31|0)/32|0);c=Z(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]|b.z.data[d];d=d+1|0;}}
function Fq(a,b){var c,d,e;c=Bb(a.bo,b.bo);a.bo=c;In(a,(c+31|0)/32|0);c=Z(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]^b.z.data[d];d=d+1|0;}G4(a);}
function L2(a){return a.bo?0:1;}
function ML(){var a=this;BR.call(a);a.oO=null;a.vr=0;}
function P5(){var a=this;BR.call(a);a.lC=null;a.k8=null;}
function ACu(a,b){var c=new P5();AD8(c,a,b);return c;}
function AD8(a,b,c){BM(a);a.lC=b;a.k8=c;}
function AFO(a,b,c,d){var e,f,g,h,i;e=a.lC.c(b,c,d);if(e<0)a:{f=a.k8;g=d.cF;e=d.v;h=b+1|0;e=BE(h,e);if(e>0){d.de=1;e=(-1);}else{i=L(c,b);if(!f.oO.k(i))e=(-1);else{if(CD(i)){if(e<0&&C4(L(c,h))){e=(-1);break a;}}else if(C4(i)&&b>g&&CD(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AMV(a,b){a.d=b;a.k8.d=b;a.lC.M(b);}
function AGm(a,b){return 1;}
function AF6(a,b){return 1;}
function Dz(){var a=this;BR.call(a);a.dz=null;a.wF=0;}
function AKG(a){var b=new Dz();Un(b,a);return b;}
function Un(a,b){BM(a);a.dz=b.iI();a.wF=b.be;}
function AIc(a,b,c,d){var e,f,g,h;e=d.v;if(b<e){f=b+1|0;g=L(c,b);if(a.k(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(Hi(g,f)&&a.k(Es(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AIM(a,b){return a.dz.k(b);}
function AFH(a,b){if(b instanceof DT)return Ke(a.dz,b.fv);if(b instanceof Ej)return Ke(a.dz,b.c$);if(b instanceof Dz)return If(a.dz,b.dz);if(!(b instanceof Ed))return 1;return If(a.dz,b.eP);}
function AKA(a){return a.dz;}
function APr(a,b){a.d=b;}
function AIq(a,b){return 1;}
var I9=F(Dz);
function AKl(a,b){return a.dz.k(Gx(Gu(b)));}
function Zm(){var a=this;BV.call(a);a.pM=null;a.ws=0;}
function AJm(a){var b=new Zm();AMx(b,a);return b;}
function AMx(a,b){Dy(a);a.pM=b.iI();a.ws=b.be;}
function AKN(a,b,c){return !a.pM.k(EV(Ew(L(c,b))))?(-1):1;}
function Ed(){var a=this;BV.call(a);a.eP=null;a.w0=0;}
function APQ(a){var b=new Ed();ANH(b,a);return b;}
function ANH(a,b){Dy(a);a.eP=b.iI();a.w0=b.be;}
function Mm(a,b,c){return !a.eP.k(L(c,b))?(-1):1;}
function ANh(a,b){if(b instanceof Ej)return Ke(a.eP,b.c$);if(b instanceof Ed)return If(a.eP,b.eP);if(!(b instanceof Dz)){if(!(b instanceof DT))return 1;return 0;}return If(a.eP,b.dz);}
function OA(){var a=this;BR.call(a);a.gp=null;a.lq=null;a.i2=0;}
function AP3(a,b){var c=new OA();AFi(c,a,b);return c;}
function AFi(a,b,c){BM(a);a.gp=b;a.i2=c;}
function ALy(a,b){a.d=b;}
function Qg(a){if(a.lq===null)a.lq=FS(a.gp);return a.lq;}
function AEN(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.v;f=BC(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?E4([k,l]):E4([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.i2;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gp.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.i2==3){k=f[0];m=a.gp.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.i2==2){b=f[0];m=a.gp.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AGe(a,b){return b instanceof OA&&!Bq(Qg(b),Qg(a))?0:1;}
function AP2(a,b){return 1;}
function Ej(){BV.call(this);this.c$=0;}
function ZU(a){var b=new Ej();ANL(b,a);return b;}
function ANL(a,b){Dy(a);a.c$=b;}
function AKw(a){return 1;}
function AJh(a,b,c){return a.c$!=L(c,b)?(-1):1;}
function AH9(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return HA(a,b,c,d);e=d.v;while(true){if(b>=e)return (-1);f=GC(c,a.c$,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AKC(a,b,c,d,e){var f;if(!(d instanceof Bv))return HO(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FY(d,a.c$,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function APT(a,b){if(b instanceof Ej)return b.c$!=a.c$?0:1;if(!(b instanceof Ed)){if(b instanceof Dz)return b.k(a.c$);if(!(b instanceof DT))return 1;return 0;}return Mm(b,0,W7(a.c$))<=0?0:1;}
function ADV(){BV.call(this);this.ma=0;}
function AOa(a){var b=new ADV();AMd(b,a);return b;}
function AMd(a,b){Dy(a);a.ma=EV(Ew(b));}
function AEH(a,b,c){return a.ma!=EV(Ew(L(c,b)))?(-1):1;}
function Yv(){var a=this;BV.call(a);a.t9=0;a.m5=0;}
function AGG(a){var b=new Yv();AOv(b,a);return b;}
function AOv(a,b){Dy(a);a.t9=b;a.m5=Hs(b);}
function AE$(a,b,c){return a.t9!=L(c,b)&&a.m5!=L(c,b)?(-1):1;}
function Fc(){var a=this;BR.call(a);a.g$=0;a.j2=null;a.ju=null;a.jp=0;}
function AUh(a,b){var c=new Fc();NR(c,a,b);return c;}
function NR(a,b,c){BM(a);a.g$=1;a.ju=b;a.jp=c;}
function AQ4(a,b){a.d=b;}
function AMY(a,b,c,d){var e,f,g,h,i,j,k,l;e=BC(4);f=d.v;if(b>=f)return (-1);g=Kx(a,b,c,f);h=b+a.g$|0;i=ADE(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Eg(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Kx(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(ADE(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.g$|0;if(h>=f){b=k;break a;}g=Kx(a,h,c,f);b=k;}}}if(b!=a.jp)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.ju.data[g])break;g=g+1|0;}return (-1);}
function WW(a){var b,c;if(a.j2===null){b=new M;O(b);c=0;while(c<a.jp){Ii(b,Gm(a.ju.data[c]));c=c+1|0;}a.j2=N(b);}return a.j2;}
function Kx(a,b,c,d){var e,f,g;a.g$=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(Hi(e,f)){g=BL(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CD(g[0])&&C4(g[1])?Es(g[0],g[1]):g[0];a.g$=2;}}return e;}
function AKO(a,b){return b instanceof Fc&&!Bq(WW(b),WW(a))?0:1;}
function AN8(a,b){return 1;}
var Xn=F(Fc);
var TS=F(Fc);
var Yf=F(CP);
function AHd(a,b,c,d){var e;while(true){e=a.I.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var Po=F(CP);
function AL6(a,b,c,d){var e;e=a.I.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.I.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FN=F(CP);
function APn(a,b,c,d){var e;if(!a.I.H(d))return a.d.c(b,c,d);e=a.I.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AQw(a,b){a.d=b;a.I.M(b);}
var O5=F(FN);
function AKz(a,b,c,d){var e;e=a.I.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AMt(a,b){a.d=b;}
function E_(){var a=this;CP.call(a);a.fJ=null;a.dg=0;}
function AXZ(a,b,c,d,e){var f=new E_();I7(f,a,b,c,d,e);return f;}
function I7(a,b,c,d,e,f){Dd(a,c,d,e);a.fJ=b;a.dg=f;}
function ARP(a,b,c,d){var e,f;e=MS(d,a.dg);if(!a.I.H(d))return a.d.c(b,c,d);if(e>=a.fJ.en)return a.d.c(b,c,d);f=a.dg;e=e+1|0;Ea(d,f,e);f=a.I.c(b,c,d);if(f>=0){Ea(d,a.dg,0);return f;}f=a.dg;e=e+(-1)|0;Ea(d,f,e);if(e>=a.fJ.es)return a.d.c(b,c,d);Ea(d,a.dg,0);return (-1);}
var M6=F(E_);
function AJP(a,b,c,d){var e,f,g;e=0;f=a.fJ.en;a:{while(true){g=a.I.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fJ.es)return (-1);return a.d.c(b,c,d);}
var Rq=F(CP);
function AQ_(a,b,c,d){var e;if(!a.I.H(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.I.c(b,c,d);}
var Qf=F(FN);
function AGo(a,b,c,d){var e;if(!a.I.H(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.I.c(b,c,d);return e;}
var UY=F(E_);
function AFx(a,b,c,d){var e,f,g;e=MS(d,a.dg);if(!a.I.H(d))return a.d.c(b,c,d);f=a.fJ;if(e>=f.en){Ea(d,a.dg,0);return a.d.c(b,c,d);}if(e<f.es){Ea(d,a.dg,e+1|0);g=a.I.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){Ea(d,a.dg,0);return g;}Ea(d,a.dg,e+1|0);g=a.I.c(b,c,d);}return g;}
var Rs=F(D0);
function ARz(a,b,c,d){var e;e=d.v;if(e>b)return a.d.cm(b,e,c,d);return a.d.c(b,c,d);}
function APz(a,b,c,d){var e;e=d.v;if(a.d.cm(b,e,c,d)>=0)return b;return (-1);}
function Oa(){D0.call(this);this.j$=null;}
function ANk(a,b,c,d){var e,f;e=d.v;f=U0(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cm(b,e,c,d);return a.d.c(b,c,d);}
function AER(a,b,c,d){var e,f,g,h;e=d.v;f=a.d.ch(b,c,d);if(f<0)return (-1);g=U0(a,f,e,c);if(g>=0)e=g;g=Bb(f,a.d.cm(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.j$.hc(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function U0(a,b,c,d){while(true){if(b>=c)return (-1);if(a.j$.hc(L(d,b)))break;b=b+1|0;}return b;}
var EK=F();
var AX0=null;var AX1=null;function O8(b){var c;if(!(b&1)){c=AX1;if(c!==null)return c;c=new Vo;AX1=c;return c;}c=AX0;if(c!==null)return c;c=new Vn;AX0=c;return c;}
var Yg=F(C2);
function AFz(a,b,c,d){var e;a:{while(true){if((b+a.Z.bW()|0)>d.v)break a;e=a.Z.bq(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Wq=F(Ex);
function AL4(a,b,c,d){var e;if((b+a.Z.bW()|0)<=d.v){e=a.Z.bq(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var OT=F(E2);
function AOY(a,b,c,d){var e,f,g,h,i;e=a.i5;f=e.es;g=e.en;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.Z.bW()|0)>d.v)break a;i=a.Z.bq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.Z.bW()|0)>d.v){d.de=1;return (-1);}i=a.Z.bq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var P_=F(C2);
function ANb(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.Z.bW()|0)<=d.v){e=a.Z.bq(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var T7=F(Ex);
function AFG(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.I.c(b,c,d);}
var Q3=F(E2);
function APc(a,b,c,d){var e,f,g,h,i,j;e=a.i5;f=e.es;g=e.en;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.Z.bW()|0)<=d.v){i=a.Z.bq(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.Z.bW()|0)>d.v){d.de=1;return (-1);}j=a.Z.bq(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Kp=F(Bz);
function AK6(a,b,c,d){if(b&&!(d.e7&&b==d.cF))return (-1);return a.d.c(b,c,d);}
function AJ6(a,b){return 0;}
function Z4(){Bz.call(this);this.tB=0;}
function APO(a){var b=new Z4();AKr(b,a);return b;}
function AKr(a,b){BM(a);a.tB=b;}
function AF4(a,b,c,d){var e,f,g;e=b<d.v?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.iz?0:d.cF;return (e!=32&&!Qi(a,e,b,g,c)?0:1)^(f!=32&&!Qi(a,f,b-1|0,g,c)?0:1)^a.tB?(-1):a.d.c(b,c,d);}
function AGc(a,b){return 0;}
function Qi(a,b,c,d,e){var f;if(!Jr(b)&&b!=95){a:{if(Ct(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(Jr(f))return 0;if(Ct(f)!=6)return 1;}}return 1;}return 0;}
var N8=F(Bz);
function AKp(a,b,c,d){if(b!=d.hi)return (-1);return a.d.c(b,c,d);}
function ARJ(a,b){return 0;}
function W8(){Bz.call(this);this.fP=0;}
function ATL(a){var b=new W8();ADs(b,a);return b;}
function ADs(a,b){BM(a);a.fP=b;}
function ANS(a,b,c,d){var e,f,g;e=!d.e7?I(c):d.v;if(b>=e){BH(d,a.fP,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BH(d,a.fP,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BH(d,a.fP,0);return a.d.c(b,c,d);}
function AG2(a,b){var c;c=!Dm(b,a.fP)?0:1;BH(b,a.fP,(-1));return c;}
var WR=F(Bz);
function AMR(a,b,c,d){if(b<(d.iz?I(c):d.v))return (-1);d.de=1;d.xp=1;return a.d.c(b,c,d);}
function AEE(a,b){return 0;}
function Ng(){Bz.call(this);this.qI=null;}
function AGS(a,b,c,d){a:{if(b!=d.v){if(!b)break a;if(d.e7&&b==d.cF)break a;if(a.qI.sa(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AI1(a,b){return 0;}
var ADK=F(BR);
function AT4(){var a=new ADK();AME(a);return a;}
function AME(a){BM(a);}
function ARf(a,b,c,d){var e,f,g,h;e=d.v;f=b+1|0;if(f>e){d.de=1;return (-1);}g=L(c,b);if(CD(g)){h=b+2|0;if(h<=e&&Hi(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AGg(a,b){a.d=b;}
function AMy(a){return (-2147483602);}
function AGf(a,b){return 1;}
function Zu(){BR.call(this);this.kG=null;}
function ATG(a){var b=new Zu();AG0(b,a);return b;}
function AG0(a,b){BM(a);a.kG=b;}
function AMH(a,b,c,d){var e,f,g,h;e=d.v;f=b+1|0;if(f>e){d.de=1;return (-1);}g=L(c,b);if(CD(g)){b=b+2|0;if(b<=e){h=L(c,f);if(Hi(g,h))return a.kG.hc(Es(g,h))?(-1):a.d.c(b,c,d);}}return a.kG.hc(g)?(-1):a.d.c(f,c,d);}
function AOI(a,b){a.d=b;}
function AEB(a){return (-2147483602);}
function ARp(a,b){return 1;}
function ADB(){Bz.call(this);this.gZ=0;}
function ATa(a){var b=new ADB();AIW(b,a);return b;}
function AIW(a,b){BM(a);a.gZ=b;}
function AKS(a,b,c,d){var e;e=!d.e7?I(c):d.v;if(b>=e){BH(d,a.gZ,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BH(d,a.gZ,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AIU(a,b){var c;c=!Dm(b,a.gZ)?0:1;BH(b,a.gZ,(-1));return c;}
function ABM(){Bz.call(this);this.g8=0;}
function ASX(a){var b=new ABM();AJn(b,a);return b;}
function AJn(a,b){BM(a);a.g8=b;}
function AMP(a,b,c,d){if((!d.e7?I(c)-b|0:d.v-b|0)<=0){BH(d,a.g8,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BH(d,a.g8,1);return a.d.c(b+1|0,c,d);}
function AIJ(a,b){var c;c=!Dm(b,a.g8)?0:1;BH(b,a.g8,(-1));return c;}
function Ys(){Bz.call(this);this.fl=0;}
function ASe(a){var b=new Ys();ARR(b,a);return b;}
function ARR(a,b){BM(a);a.fl=b;}
function AJU(a,b,c,d){var e,f,g;e=!d.e7?I(c)-b|0:d.v-b|0;if(!e){BH(d,a.fl,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BH(d,a.fl,0);return a.d.c(b,c,d);case 13:if(g!=10){BH(d,a.fl,0);return a.d.c(b,c,d);}BH(d,a.fl,0);return a.d.c(b,c,d);default:}return (-1);}
function AG7(a,b){var c;c=!Dm(b,a.fl)?0:1;BH(b,a.fl,(-1));return c;}
function G1(){var a=this;BR.call(a);a.mG=0;a.gm=0;}
function AUc(a,b){var c=new G1();OK(c,a,b);return c;}
function OK(a,b,c){BM(a);a.mG=b;a.gm=c;}
function AFB(a,b,c,d){var e,f,g,h;e=F6(a,d);if(e!==null&&(b+I(e)|0)<=d.v){f=0;while(true){if(f>=I(e)){BH(d,a.gm,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&Hs(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AN2(a,b){a.d=b;}
function F6(a,b){var c,d;c=a.mG;d=Fz(b,c);c=Iq(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.kI)?B$(b.kI,d,c):null;}
function AOn(a,b){var c;c=!Dm(b,a.gm)?0:1;BH(b,a.gm,(-1));return c;}
var ADG=F(G1);
function ASl(a,b){var c=new ADG();AQn(c,a,b);return c;}
function AQn(a,b,c){OK(a,b,c);}
function AHc(a,b,c,d){var e,f;e=F6(a,d);if(e!==null&&(b+I(e)|0)<=d.v){f=!Um(c,e,b)?(-1):I(e);if(f<0)return (-1);BH(d,a.gm,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AQc(a,b,c,d){var e,f;e=F6(a,d);f=d.cF;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=Z3(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AFo(a,b,c,d,e){var f,g;f=F6(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Pz(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ALX(a,b){return 1;}
var AAP=F(G1);
function ASY(a,b){var c=new AAP();AIT(c,a,b);return c;}
function AIT(a,b,c){OK(a,b,c);}
function ALn(a,b,c,d){var e,f;e=F6(a,d);if(e!==null&&(b+I(e)|0)<=d.v){f=0;while(true){if(f>=I(e)){BH(d,a.gm,I(e));return a.d.c(b+I(e)|0,c,d);}if(EV(Ew(L(e,f)))!=EV(Ew(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var N2=F(Ge);
function AIz(a,b,c,d,e){MX(a,b,c,d,e);return a;}
function AF9(a,b,c,d){Xc(a,b,c,d);return a;}
function AGw(a,b){Jx(a,b);}
function APC(a,b,c){Xv(a,b,c);return a;}
function RA(){var a=this;BV.call(a);a.co=null;a.j4=null;a.kQ=null;}
function AHz(a,b,c){return !Kn(a,c,b)?(-1):a.bG;}
function AFZ(a,b,c,d){var e,f,g;e=d.v;while(true){if(b>e)return (-1);f=L(a.co,a.bG-1|0);a:{while(true){g=a.bG;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&Kn(a,c,b))break;b=b+SJ(a.j4,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bG|0,c,d)>=0)break;b=b+1|0;}return b;}
function AIY(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.co,0);g=(I(d)-c|0)-a.bG|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&Kn(a,d,c))break;c=c-SJ(a.kQ,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bG|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AJt(a,b){var c;if(b instanceof Ej)return b.c$!=L(a.co,0)?0:1;if(b instanceof Ed)return Mm(b,0,B$(a.co,0,1))<=0?0:1;if(!(b instanceof Dz)){if(!(b instanceof DT))return 1;return I(a.co)>1&&b.fv==Es(L(a.co,0),L(a.co,1))?1:0;}a:{b:{b=b;if(!b.k(L(a.co,0))){if(I(a.co)<=1)break b;if(!b.k(Es(L(a.co,0),L(a.co,1))))break b;}c=1;break a;}c=0;}return c;}
function Kn(a,b,c){var d;d=0;while(d<a.bG){if(L(b,d+c|0)!=L(a.co,d))return 0;d=d+1|0;}return 1;}
function Yr(){BV.call(this);this.iD=null;}
function AUf(a){var b=new Yr();APV(b,a);return b;}
function APV(a,b){var c,d,e;Dy(a);c=new M;O(c);d=0;while(true){e=BE(d,b.N);if(e>=0){a.iD=N(c);a.bG=c.N;return;}if(d<0)break;if(e>=0)break;BA(c,EV(Ew(b.A.data[d])));d=d+1|0;}b=new Bx;V(b);K(b);}
function ALv(a,b,c){var d;d=0;while(true){if(d>=I(a.iD))return I(a.iD);if(L(a.iD,d)!=EV(Ew(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Na(){BV.call(this);this.gW=null;}
function AO0(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.gW))return I(a.gW);e=L(a.gW,d);f=b+d|0;if(e!=L(c,f)&&Hs(L(a.gW,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var G0=F();
var AX2=null;var AX3=null;var AXY=null;function AOy(){AOy=Bm(G0);AHU();}
function AHU(){AX2=ATV();AX3=AS5();AXY=H($rt_arraycls(C),[H(C,[B(400),AUd()]),H(C,[B(401),ASb()]),H(C,[B(402),ATS()]),H(C,[B(403),ATZ()]),H(C,[B(404),AX3]),H(C,[B(405),ATd()]),H(C,[B(406),AS3()]),H(C,[B(407),ASq()]),H(C,[B(408),ASk()]),H(C,[B(409),ASx()]),H(C,[B(410),ASL()]),H(C,[B(411),ASu()]),H(C,[B(412),ATz()]),H(C,[B(413),AR7()]),H(C,[B(414),ATW()]),H(C,[B(415),ASK()]),H(C,[B(416),ATb()]),H(C,[B(417),ASI()]),H(C,[B(418),ATc()]),H(C,[B(419),ASA()]),H(C,[B(420),AT3()]),H(C,[B(421),ASD()]),H(C,[B(422),ATh()]),
H(C,[B(423),ATQ()]),H(C,[B(424),ATM()]),H(C,[B(425),AT0()]),H(C,[B(426),ASz()]),H(C,[B(427),ATE()]),H(C,[B(428),AX2]),H(C,[B(429),ATm()]),H(C,[B(430),ASr()]),H(C,[B(431),AX2]),H(C,[B(432),AR4()]),H(C,[B(433),AX3]),H(C,[B(434),ASS()]),H(C,[B(435),P(0,127)]),H(C,[B(436),P(128,255)]),H(C,[B(437),P(256,383)]),H(C,[B(438),P(384,591)]),H(C,[B(439),P(592,687)]),H(C,[B(440),P(688,767)]),H(C,[B(441),P(768,879)]),H(C,[B(442),P(880,1023)]),H(C,[B(443),P(1024,1279)]),H(C,[B(444),P(1280,1327)]),H(C,[B(445),P(1328,1423)]),
H(C,[B(446),P(1424,1535)]),H(C,[B(447),P(1536,1791)]),H(C,[B(448),P(1792,1871)]),H(C,[B(449),P(1872,1919)]),H(C,[B(450),P(1920,1983)]),H(C,[B(451),P(2304,2431)]),H(C,[B(452),P(2432,2559)]),H(C,[B(453),P(2560,2687)]),H(C,[B(454),P(2688,2815)]),H(C,[B(455),P(2816,2943)]),H(C,[B(456),P(2944,3071)]),H(C,[B(457),P(3072,3199)]),H(C,[B(458),P(3200,3327)]),H(C,[B(459),P(3328,3455)]),H(C,[B(460),P(3456,3583)]),H(C,[B(461),P(3584,3711)]),H(C,[B(462),P(3712,3839)]),H(C,[B(463),P(3840,4095)]),H(C,[B(464),P(4096,4255)]),
H(C,[B(465),P(4256,4351)]),H(C,[B(466),P(4352,4607)]),H(C,[B(467),P(4608,4991)]),H(C,[B(468),P(4992,5023)]),H(C,[B(469),P(5024,5119)]),H(C,[B(470),P(5120,5759)]),H(C,[B(471),P(5760,5791)]),H(C,[B(472),P(5792,5887)]),H(C,[B(473),P(5888,5919)]),H(C,[B(474),P(5920,5951)]),H(C,[B(475),P(5952,5983)]),H(C,[B(476),P(5984,6015)]),H(C,[B(477),P(6016,6143)]),H(C,[B(478),P(6144,6319)]),H(C,[B(479),P(6400,6479)]),H(C,[B(480),P(6480,6527)]),H(C,[B(481),P(6528,6623)]),H(C,[B(482),P(6624,6655)]),H(C,[B(483),P(6656,6687)]),
H(C,[B(484),P(7424,7551)]),H(C,[B(485),P(7552,7615)]),H(C,[B(486),P(7616,7679)]),H(C,[B(487),P(7680,7935)]),H(C,[B(488),P(7936,8191)]),H(C,[B(489),P(8192,8303)]),H(C,[B(490),P(8304,8351)]),H(C,[B(491),P(8352,8399)]),H(C,[B(492),P(8400,8447)]),H(C,[B(493),P(8448,8527)]),H(C,[B(494),P(8528,8591)]),H(C,[B(495),P(8592,8703)]),H(C,[B(496),P(8704,8959)]),H(C,[B(497),P(8960,9215)]),H(C,[B(498),P(9216,9279)]),H(C,[B(499),P(9280,9311)]),H(C,[B(500),P(9312,9471)]),H(C,[B(501),P(9472,9599)]),H(C,[B(502),P(9600,9631)]),
H(C,[B(503),P(9632,9727)]),H(C,[B(504),P(9728,9983)]),H(C,[B(505),P(9984,10175)]),H(C,[B(506),P(10176,10223)]),H(C,[B(507),P(10224,10239)]),H(C,[B(508),P(10240,10495)]),H(C,[B(509),P(10496,10623)]),H(C,[B(510),P(10624,10751)]),H(C,[B(511),P(10752,11007)]),H(C,[B(512),P(11008,11263)]),H(C,[B(513),P(11264,11359)]),H(C,[B(514),P(11392,11519)]),H(C,[B(515),P(11520,11567)]),H(C,[B(516),P(11568,11647)]),H(C,[B(517),P(11648,11743)]),H(C,[B(518),P(11776,11903)]),H(C,[B(519),P(11904,12031)]),H(C,[B(520),P(12032,12255)]),
H(C,[B(521),P(12272,12287)]),H(C,[B(522),P(12288,12351)]),H(C,[B(523),P(12352,12447)]),H(C,[B(524),P(12448,12543)]),H(C,[B(525),P(12544,12591)]),H(C,[B(526),P(12592,12687)]),H(C,[B(527),P(12688,12703)]),H(C,[B(528),P(12704,12735)]),H(C,[B(529),P(12736,12783)]),H(C,[B(530),P(12784,12799)]),H(C,[B(531),P(12800,13055)]),H(C,[B(532),P(13056,13311)]),H(C,[B(533),P(13312,19893)]),H(C,[B(534),P(19904,19967)]),H(C,[B(535),P(19968,40959)]),H(C,[B(536),P(40960,42127)]),H(C,[B(537),P(42128,42191)]),H(C,[B(538),P(42752,
42783)]),H(C,[B(539),P(43008,43055)]),H(C,[B(540),P(44032,55203)]),H(C,[B(541),P(55296,56191)]),H(C,[B(542),P(56192,56319)]),H(C,[B(543),P(56320,57343)]),H(C,[B(544),P(57344,63743)]),H(C,[B(545),P(63744,64255)]),H(C,[B(546),P(64256,64335)]),H(C,[B(547),P(64336,65023)]),H(C,[B(548),P(65024,65039)]),H(C,[B(549),P(65040,65055)]),H(C,[B(550),P(65056,65071)]),H(C,[B(551),P(65072,65103)]),H(C,[B(552),P(65104,65135)]),H(C,[B(553),P(65136,65279)]),H(C,[B(554),P(65280,65519)]),H(C,[B(555),P(0,1114111)]),H(C,[B(556),
ASv()]),H(C,[B(557),BK(0,1)]),H(C,[B(558),IM(62,1)]),H(C,[B(559),BK(1,1)]),H(C,[B(560),BK(2,1)]),H(C,[B(561),BK(3,0)]),H(C,[B(562),BK(4,0)]),H(C,[B(563),BK(5,1)]),H(C,[B(564),IM(448,1)]),H(C,[B(565),BK(6,1)]),H(C,[B(566),BK(7,0)]),H(C,[B(567),BK(8,1)]),H(C,[B(568),IM(3584,1)]),H(C,[B(569),BK(9,1)]),H(C,[B(570),BK(10,1)]),H(C,[B(571),BK(11,1)]),H(C,[B(572),IM(28672,0)]),H(C,[B(573),BK(12,0)]),H(C,[B(574),BK(13,0)]),H(C,[B(575),BK(14,0)]),H(C,[B(576),ASZ(983040,1,1)]),H(C,[B(577),BK(15,0)]),H(C,[B(578),BK(16,
1)]),H(C,[B(579),BK(18,1)]),H(C,[B(580),AS_(19,0,1)]),H(C,[B(581),IM(1643118592,1)]),H(C,[B(582),BK(20,0)]),H(C,[B(583),BK(21,0)]),H(C,[B(584),BK(22,0)]),H(C,[B(585),BK(23,0)]),H(C,[B(586),BK(24,1)]),H(C,[B(587),IM(2113929216,1)]),H(C,[B(588),BK(25,1)]),H(C,[B(589),BK(26,0)]),H(C,[B(590),BK(27,0)]),H(C,[B(591),BK(28,1)]),H(C,[B(592),BK(29,0)]),H(C,[B(593),BK(30,0)])]);}
function Mu(){BV.call(this);this.p_=0;}
function AO7(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.p_!=Gx(Gu(Es(e,d)))?(-1):2;}
function KY(){BR.call(this);this.f2=0;}
function AMD(a){var b=new KY();AGr(b,a);return b;}
function AGr(a,b){BM(a);a.f2=b;}
function AM7(a,b){a.d=b;}
function AG3(a,b,c,d){var e,f;e=b+1|0;if(e>d.v){d.de=1;return (-1);}f=L(c,b);if(b>d.cF&&CD(L(c,b-1|0)))return (-1);if(a.f2!=f)return (-1);return a.d.c(e,c,d);}
function AJr(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return HA(a,b,c,d);e=d.cF;f=d.v;while(true){if(b>=f)return (-1);g=GC(c,a.f2,b);if(g<0)return (-1);if(g>e&&CD(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AHG(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HO(a,b,c,d,e);f=e.cF;a:{while(true){if(c<b)return (-1);g=FY(d,a.f2,c);if(g<0)break a;if(g<b)break a;if(g>f&&CD(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AFm(a,b){if(b instanceof Ej)return 0;if(b instanceof Ed)return 0;if(b instanceof Dz)return 0;if(b instanceof DT)return 0;if(b instanceof Lj)return 0;if(!(b instanceof KY))return 1;return b.f2!=a.f2?0:1;}
function APK(a,b){return 1;}
function Lj(){BR.call(this);this.fF=0;}
function AJY(a){var b=new Lj();AML(b,a);return b;}
function AML(a,b){BM(a);a.fF=b;}
function AGv(a,b){a.d=b;}
function AEY(a,b,c,d){var e,f,g,h;e=d.v;f=b+1|0;g=BE(f,e);if(g>0){d.de=1;return (-1);}h=L(c,b);if(g<0&&C4(L(c,f)))return (-1);if(a.fF!=h)return (-1);return a.d.c(f,c,d);}
function ANt(a,b,c,d){var e,f;if(!(c instanceof Bv))return HA(a,b,c,d);e=d.v;while(true){if(b>=e)return (-1);f=GC(c,a.fF,b);if(f<0)return (-1);b=f+1|0;if(b<e&&C4(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function AOZ(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HO(a,b,c,d,e);f=e.v;a:{while(true){if(c<b)return (-1);g=FY(d,a.fF,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&C4(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AHA(a,b){if(b instanceof Ej)return 0;if(b instanceof Ed)return 0;if(b instanceof Dz)return 0;if(b instanceof DT)return 0;if(b instanceof KY)return 0;if(!(b instanceof Lj))return 1;return b.fF!=a.fF?0:1;}
function ANE(a,b){return 1;}
function DT(){var a=this;BV.call(a);a.jg=0;a.hX=0;a.fv=0;}
function AOo(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.jg==e&&a.hX==d?2:(-1);}
function AMm(a,b,c,d){var e,f;if(!(c instanceof Bv))return HA(a,b,c,d);e=d.v;while(b<e){b=GC(c,a.jg,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.hX==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AGt(a,b,c,d,e){var f;if(!(d instanceof Bv))return HO(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FY(d,a.hX,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.jg==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AOb(a,b){if(b instanceof DT)return b.fv!=a.fv?0:1;if(b instanceof Dz)return b.k(a.fv);if(b instanceof Ej)return 0;if(!(b instanceof Ed))return 1;return 0;}
var Vn=F(EK);
function AGH(a,b){return b!=10?0:1;}
function AOh(a,b,c){return b!=10?0:1;}
var Vo=F(EK);
function APf(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AQY(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ACH(){var a=this;C.call(a);a.lW=null;a.jw=null;a.gC=0;a.uQ=0;}
function AMw(a){var b=new ACH();AKn(b,a);return b;}
function AKn(a,b){var c,d;while(true){c=a.gC;if(b<c)break;a.gC=c<<1|1;}d=c<<1|1;a.gC=d;d=d+1|0;a.lW=BC(d);a.jw=BC(d);a.uQ=b;}
function Q7(a,b,c){var d,e,f,g;d=0;e=a.gC;f=b&e;while(true){g=a.lW.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jw.data[f]=c;}
function SJ(a,b){var c,d,e,f;c=a.gC;d=b&c;e=0;while(true){f=a.lW.data[d];if(!f)break;if(f==b)return a.jw.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.uQ;}
var YK=F();
var KV=F(X);
function ATV(){var a=new KV();AJQ(a);return a;}
function AJQ(a){}
function AAY(a){return Cu(BS(Dn(),9,13),32);}
var JU=F(X);
function AS5(){var a=new JU();APG(a);return a;}
function APG(a){}
function ABG(a){return BS(Dn(),48,57);}
var ACB=F(X);
function AUd(){var a=new ACB();AI$(a);return a;}
function AI$(a){}
function AOK(a){return BS(Dn(),97,122);}
var AC9=F(X);
function ASb(){var a=new AC9();AKu(a);return a;}
function AKu(a){}
function APM(a){return BS(Dn(),65,90);}
var ADb=F(X);
function ATS(){var a=new ADb();AF1(a);return a;}
function AF1(a){}
function AId(a){return BS(Dn(),0,127);}
var KR=F(X);
function ATZ(){var a=new KR();AHe(a);return a;}
function AHe(a){}
function Zy(a){return BS(BS(Dn(),97,122),65,90);}
var Ls=F(KR);
function ATd(){var a=new Ls();AJ5(a);return a;}
function AJ5(a){}
function AAr(a){return BS(Zy(a),48,57);}
var AEp=F(X);
function AS3(){var a=new AEp();AL$(a);return a;}
function AL$(a){}
function AJp(a){return BS(BS(BS(Dn(),33,64),91,96),123,126);}
var Ml=F(Ls);
function ASq(){var a=new Ml();ANX(a);return a;}
function ANX(a){}
function Yn(a){return BS(BS(BS(AAr(a),33,64),91,96),123,126);}
var AA_=F(Ml);
function ASk(){var a=new AA_();APw(a);return a;}
function APw(a){}
function ALS(a){return Cu(Yn(a),32);}
var ABy=F(X);
function ASx(){var a=new ABy();AO1(a);return a;}
function AO1(a){}
function AHs(a){return Cu(Cu(Dn(),32),9);}
var ZX=F(X);
function ASL(){var a=new ZX();AQM(a);return a;}
function AQM(a){}
function ALP(a){return Cu(BS(Dn(),0,31),127);}
var ZE=F(X);
function ASu(){var a=new ZE();AGb(a);return a;}
function AGb(a){}
function AQ0(a){return BS(BS(BS(Dn(),48,57),97,102),65,70);}
var ADe=F(X);
function ATz(){var a=new ADe();AFS(a);return a;}
function AFS(a){}
function AMu(a){var b;b=new S1;b.wE=a;Bn(b);b.K=1;return b;}
var AEA=F(X);
function AR7(){var a=new AEA();AOf(a);return a;}
function AOf(a){}
function AEP(a){var b;b=new MI;b.wO=a;Bn(b);b.K=1;return b;}
var ACI=F(X);
function ATW(){var a=new ACI();AF2(a);return a;}
function AF2(a){}
function AJZ(a){var b;b=new RV;b.wp=a;Bn(b);return b;}
var ACv=F(X);
function ASK(){var a=new ACv();ALQ(a);return a;}
function ALQ(a){}
function AOs(a){var b;b=new RU;b.v_=a;Bn(b);return b;}
var ADu=F(X);
function ATb(){var a=new ADu();AHa(a);return a;}
function AHa(a){}
function AHo(a){var b;b=new WZ;b.xw=a;Bn(b);HV(b.J,0,2048);b.K=1;return b;}
var Y3=F(X);
function ASI(){var a=new Y3();AGC(a);return a;}
function AGC(a){}
function AHO(a){var b;b=new ON;b.w1=a;Bn(b);b.K=1;return b;}
var YH=F(X);
function ATc(){var a=new YH();ALs(a);return a;}
function ALs(a){}
function AQV(a){var b;b=new NX;b.x1=a;Bn(b);b.K=1;return b;}
var ACO=F(X);
function ASA(){var a=new ACO();AL_(a);return a;}
function AL_(a){}
function AEI(a){var b;b=new Qv;b.wG=a;Bn(b);return b;}
var AC0=F(X);
function AT3(){var a=new AC0();AJE(a);return a;}
function AJE(a){}
function AKW(a){var b;b=new MB;b.vk=a;Bn(b);b.K=1;return b;}
var AAi=F(X);
function ASD(){var a=new AAi();AFp(a);return a;}
function AFp(a){}
function AHY(a){var b;b=new MG;b.w4=a;Bn(b);b.K=1;return b;}
var ABD=F(X);
function ATh(){var a=new ABD();AGL(a);return a;}
function AGL(a){}
function AI3(a){var b;b=new NG;b.xt=a;Bn(b);b.K=1;return b;}
var AD6=F(X);
function ATQ(){var a=new AD6();AK1(a);return a;}
function AK1(a){}
function AKY(a){var b;b=new O_;b.xM=a;Bn(b);b.K=1;return b;}
var ACZ=F(X);
function ATM(){var a=new ACZ();AMr(a);return a;}
function AMr(a){}
function AP5(a){var b;b=new Pi;b.wr=a;Bn(b);return b;}
var AAN=F(X);
function AT0(){var a=new AAN();AGE(a);return a;}
function AGE(a){}
function ANN(a){var b;b=new TO;b.w_=a;Bn(b);return b;}
var AAg=F(X);
function ASz(){var a=new AAg();AOu(a);return a;}
function AOu(a){}
function AMp(a){var b;b=new Sx;b.vo=a;Bn(b);b.K=1;return b;}
var AEv=F(X);
function ATE(){var a=new AEv();AJy(a);return a;}
function AJy(a){}
function AOE(a){var b;b=new MU;b.ye=a;Bn(b);b.K=1;return b;}
var Jj=F(X);
function ATm(){var a=new Jj();AH6(a);return a;}
function AH6(a){}
function ABA(a){return Cu(BS(BS(BS(Dn(),97,122),65,90),48,57),95);}
var ADw=F(Jj);
function ASr(){var a=new ADw();AJJ(a);return a;}
function AJJ(a){}
function AMb(a){var b;b=Er(ABA(a),1);b.K=1;return b;}
var ABd=F(KV);
function AR4(){var a=new ABd();AQy(a);return a;}
function AQy(a){}
function AFY(a){var b;b=Er(AAY(a),1);b.K=1;return b;}
var AAb=F(JU);
function ASS(){var a=new AAb();AKL(a);return a;}
function AKL(a){}
function AJd(a){var b;b=Er(ABG(a),1);b.K=1;return b;}
function ZL(){var a=this;X.call(a);a.pX=0;a.qC=0;}
function P(a,b){var c=new ZL();AQT(c,a,b);return c;}
function AQT(a,b,c){a.pX=b;a.qC=c;}
function ALa(a){return BS(Dn(),a.pX,a.qC);}
var Z7=F(X);
function ASv(){var a=new Z7();AQ7(a);return a;}
function AQ7(a){}
function AQH(a){return BS(BS(Dn(),65279,65279),65520,65533);}
function AA6(){var a=this;X.call(a);a.lu=0;a.jn=0;a.n7=0;}
function BK(a,b){var c=new AA6();AG6(c,a,b);return c;}
function AS_(a,b,c){var d=new AA6();AQU(d,a,b,c);return d;}
function AG6(a,b,c){a.jn=c;a.lu=b;}
function AQU(a,b,c,d){a.n7=d;a.jn=c;a.lu=b;}
function AID(a){var b;b=AT$(a.lu);if(a.n7)HV(b.J,0,2048);b.K=a.jn;return b;}
function ABa(){var a=this;X.call(a);a.lt=0;a.jy=0;a.mN=0;}
function IM(a,b){var c=new ABa();AHZ(c,a,b);return c;}
function ASZ(a,b,c){var d=new ABa();AEL(d,a,b,c);return d;}
function AHZ(a,b,c){a.jy=c;a.lt=b;}
function AEL(a,b,c,d){a.mN=d;a.jy=c;a.lt=b;}
function AEJ(a){var b;b=new RO;ACf(b,a.lt);if(a.mN)HV(b.J,0,2048);b.K=a.jy;return b;}
var ZS=F();
var Zk=F();
function AAM(b){var c,d,e,f,g,h,i;c=AOO(Gp(b));d=JK(c);e=BC(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+JK(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=M5(c);h=h+1|0;}return e;}
function KE(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Nh(){var a=this;C.call(a);a.oN=0;a.qY=0;a.o0=null;}
function AIB(a,b,c){var d=new Nh();APv(d,a,b,c);return d;}
function APv(a,b,c,d){a.oN=b;a.qY=c;a.o0=d;}
function ACU(){var a=this;C.call(a);a.nv=null;a.p8=0;}
function AOO(a){var b=new ACU();AHD(b,a);return b;}
function AHD(a,b){a.nv=b;}
var AAL=F();
function JK(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.nv.data;f=b.p8;b.p8=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Ba(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function M5(b){var c,d;c=JK(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function Zq(){C.call(this);this.FE=null;}
function Tt(){C.call(this);this.m7=null;}
function ARL(a,b){var c,d,e,f;c=b.data;b=a.m7;d=D6(c[0]);e=FG(c[1]);ABl(b.e.f,d,e);Go(Ck(b),AVK);F1(Ck(b));f=Kr(FC(),b.eL);b=new M;O(b);G(HR(G(b,B(594)),f),B(170));$rt_globals.console.info($rt_ustr(N(b)));}
function Q$(){C.call(this);this.qA=null;}
function AIA(a,b){KG(a.qA,b);}
var YS=F();
function AD9(b){var c,d,e,f,g,h,i,j,k,l;c=new V7;c.kS=0;c.gI=BC(16);c.eR=0;d=Cp(b);HN(c,d);e=0;f=0;while(f<d){g=B2(b,f);h=g.o.data.length;HN(c,h);i=0;while(i<h){j=Nq(g,i);k=Me(j);HN(c,e);HN(c,k);e=e+Me(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}d=c.kS;if(d&&c.eR!=d){b=Iw();d=c.kS;e=c.eR;j=new M;O(j);G(T(G(T(G(j,B(389)),d),B(595)),e),B(596));Br(b,N(j));}l=c.gI;d=l.data.length;e=c.eR;if(d!=e)l=L8(l,e);return l;}
function AC1(b){var c,d,e,f,g,h,i,j,k;c=BP(b);d=Q(H0,c);e=d.data;f=0;while(f<c){a:{g=BP(b);if(g!=(-1)){h=BP(b);i=BP(b);if(i==(-1)){j=new H0;j.oF=h;e[g]=j;}else{j=new H0;j.oF=h;j.q$=BC(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].q$.data[k]=BP(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function MM(){C.call(this);this.ra=null;}
function AFh(a,b){var c,d,e,f;c=b.data;b=a.ra;d=D6(c[0]);c=ADA(d);e=new QF;d=AC1(c);f=AC1(c);e.wJ=d;e.qO=f;b.rO=e;Ue(b.G,d);Ue(b.D,b.rO.qO);}
function PA(){var a=this;C.call(a);a.xI=null;a.xJ=null;a.xK=null;}
function Qh(){var a=this;C.call(a);a.wW=null;a.wV=null;}
function Wt(){var a=this;U.call(a);a.ne=null;a.xC=null;}
function AIk(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cb^Dv(a.ne,c):0;}
function Wr(){var a=this;U.call(a);a.s7=null;a.tS=null;a.xf=null;}
function AFb(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cb^Dv(a.s7,c):0;return a.tS.k(b)&&!d?1:0;}
function Og(){var a=this;U.call(a);a.h0=null;a.vs=null;}
function AK2(a,b){return a.be^Dv(a.h0,b);}
function AI6(a){var b,c,d;b=new M;O(b);c=G$(a.h0,0);while(c>=0){Ii(b,Gm(c));BA(b,124);c=G$(a.h0,c+1|0);}d=b.N;if(d>0)Wh(b,d-1|0);return N(b);}
function Om(){var a=this;U.call(a);a.qo=null;a.wM=null;}
function AOr(a,b){return a.qo.k(b);}
function Ok(){var a=this;U.call(a);a.jq=0;a.nU=null;a.kd=null;}
function AO6(a,b){return !(a.jq^Dv(a.kd.F,b))&&!(a.jq^a.kd.dF^a.nU.k(b))?0:1;}
function Ol(){var a=this;U.call(a);a.jx=0;a.tu=null;a.k5=null;}
function ALu(a,b){return !(a.jx^Dv(a.k5.F,b))&&!(a.jx^a.k5.dF^a.tu.k(b))?1:0;}
function Op(){var a=this;U.call(a);a.um=0;a.tA=null;a.tp=null;a.vQ=null;}
function AHT(a,b){return a.um^(!a.tA.k(b)&&!a.tp.k(b)?0:1);}
function Oq(){var a=this;U.call(a);a.qz=0;a.qf=null;a.pr=null;a.x8=null;}
function AEC(a,b){return a.qz^(!a.qf.k(b)&&!a.pr.k(b)?0:1)?0:1;}
function On(){var a=this;U.call(a);a.o6=null;a.yc=null;}
function AI_(a,b){return CY(a.o6,b);}
function Oo(){var a=this;U.call(a);a.tO=null;a.v6=null;}
function ALx(a,b){return CY(a.tO,b)?0:1;}
function Or(){var a=this;U.call(a);a.qR=null;a.qj=0;a.sD=null;}
function AQg(a,b){return !CY(a.qR,b)&&!(a.qj^Dv(a.sD.F,b))?0:1;}
function Os(){var a=this;U.call(a);a.rE=null;a.rU=0;a.rh=null;}
function AHi(a,b){return !CY(a.rE,b)&&!(a.rU^Dv(a.rh.F,b))?1:0;}
function Of(){var a=this;U.call(a);a.sA=0;a.ts=null;a.t5=null;a.vw=null;}
function AR2(a,b){return !(a.sA^a.ts.k(b))&&!CY(a.t5,b)?0:1;}
function O0(){var a=this;U.call(a);a.t2=0;a.mq=null;a.mO=null;a.v1=null;}
function AJc(a,b){return !(a.t2^a.mq.k(b))&&!CY(a.mO,b)?1:0;}
function Oc(){var a=this;U.call(a);a.oE=null;a.v$=null;}
function AHf(a,b){return CY(a.oE,b);}
function Od(){var a=this;U.call(a);a.oK=null;a.x4=null;}
function AIS(a,b){return CY(a.oK,b)?0:1;}
function Oj(){var a=this;U.call(a);a.ui=null;a.rw=0;a.vb=null;}
function AKs(a,b){return CY(a.ui,b)&&a.rw^Dv(a.vb.F,b)?1:0;}
function Ob(){var a=this;U.call(a);a.sd=null;a.qB=0;a.ru=null;}
function APS(a,b){return CY(a.sd,b)&&a.qB^Dv(a.ru.F,b)?0:1;}
function Oh(){var a=this;U.call(a);a.sI=0;a.nb=null;a.qv=null;a.vP=null;}
function AGa(a,b){return a.sI^a.nb.k(b)&&CY(a.qv,b)?1:0;}
function Oi(){var a=this;U.call(a);a.r$=0;a.mf=null;a.sz=null;a.wb=null;}
function ANC(a,b){return a.r$^a.mf.k(b)&&CY(a.sz,b)?0:1;}
var LP=F(0);
function Sv(){var a=this;C.call(a);a.vW=null;a.tv=null;a.ip=null;a.cq=null;a.h1=0;a.j8=0;}
function ME(a,b){var c,d,e;c=I(a.ip);if(b>=0&&b<=c){XH(a.cq,null,(-1),(-1));d=a.cq;d.i6=1;d.d3=b;c=d.hi;if(c<0)c=b;d.hi=c;b=a.tv.ch(b,a.ip,d);if(b==(-1))a.cq.de=1;if(b>=0){d=a.cq;if(d.is){e=d.dB.data;if(e[0]==(-1)){c=d.d3;e[0]=c;e[1]=c;}d.hi=I2(d);return 1;}}a.cq.d3=(-1);return 0;}d=new Bx;Bl(d,C5(b));K(d);}
function AD4(a){return OR(a.cq,0);}
function AAc(a){return R0(a.cq,0);}
function ADo(){var a=this;C.call(a);a.Bv=null;a.Bw=null;a.Bu=0.0;}
function V7(){var a=this;C.call(a);a.gI=null;a.kS=0;a.eR=0;}
function HN(a,b){var c,d;c=a.gI;d=c.data.length;if(d==a.eR)a.gI=L8(c,d*2|0);c=a.gI.data;d=a.eR;a.eR=d+1|0;c[d]=b;}
var C0=F(0);
var AWy=null;var AXl=null;var AWA=null;var AWz=null;var AWC=null;var AWB=null;var AWE=null;var AWD=null;var AWG=null;var AWF=null;var AWH=null;function ABF(){ABF=Bm(C0);ALp();}
function ALp(){AWy=C3(0);AXl=CL(0,0,0);AWA=S(B(597));AWz=CL(255,255,255);AWC=CL(166,214,255);AWB=S(B(598));AWE=S(B(599));AWD=S(B(600));AWG=Ft(205,205,205,153);AWF=Ft(255,255,255,0);AWH=S(B(234));}
function Cg(){Cj.call(this);this.kR=null;}
var AX4=null;var AX5=null;var AX6=null;var AX7=null;var AX8=null;var AX9=null;var AX$=null;var AX_=null;var AYa=null;var AYb=null;var AYc=null;var AYd=null;var AYe=null;var AYf=null;var AYg=null;var AWI=null;function Z5(){Z5=Bm(Cg);AIH();}
function DA(a,b,c){var d=new Cg();Wu(d,a,b,c);return d;}
function AJO(a,b,c,d){var e=new Cg();ACi(e,a,b,c,d);return e;}
function Wu(a,b,c,d){Z5();C_(a,b,c);a.kR=Ij(d,null);}
function ACi(a,b,c,d,e){Z5();C_(a,b,c);a.kR=Ij(d,e);}
function AIH(){var b;b=new Cg;ABF();Wu(b,B(325),0,AXl);AX4=b;AX5=DA(B(326),1,CL(0,49,191));AX6=DA(B(328),2,S(B(601)));AX7=DA(B(330),3,S(B(602)));AX8=DA(B(332),4,AXl);AX9=DA(B(333),5,S(B(603)));AX$=DA(B(335),6,S(B(369)));AX_=DA(B(337),7,S(B(604)));AYa=DA(B(339),8,S(B(605)));AYb=AJO(B(341),9,AXl,CL(237,235,252));AYc=AJO(B(342),10,S(B(367)),S(B(606)));AYd=DA(B(343),11,S(B(369)));AYe=DA(B(345),12,S(B(370)));AYf=DA(B(347),13,S(B(607)));b=DA(B(348),14,S(B(349)));AYg=b;AWI=H(Cg,[AX4,AX5,AX6,AX7,AX8,AX9,AX$,AX_,AYa,
AYb,AYc,AYd,AYe,AYf,b]);}
var Du=F(0);
var AWM=null;var AWN=null;var AWJ=null;var AWK=null;var AWL=null;var AXm=null;var AXn=null;var AWO=null;var AWP=null;function AOt(){AOt=Bm(Du);AI0();}
function AI0(){AWM=S(B(232));AWN=S(B(608));AWJ=S(B(609));AWK=S(B(610));AWL=S(B(611));AXm=S(B(232));AXn=S(B(608));AWO=Ft(205,205,205,153);AWP=CL(247,248,250);}
function N7(){var a=this;C.call(a);a.h2=null;a.gR=0;}
function N4(){C.call(this);this.q_=null;}
function AOD(a,b){Uy(a.q_,b);}
var M0=F(Gq);
function AIG(a,b,c,d){var e,f,g;e=0;f=d.v;a:{while(true){if(b>f){b=e;break a;}g=Fz(d,a.X);Dx(d,a.X,b);e=a.cS.c(b,c,d);if(e>=0)break;Dx(d,a.X,g);b=b+1|0;}}return b;}
function ARN(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fz(e,a.X);Dx(e,a.X,c);f=a.cS.c(c,d,e);if(f>=0)break;Dx(e,a.X,g);c=c+(-1)|0;}}return c;}
function AG1(a){return null;}
var PY=F(Bo);
var Xe=F(Bo);
function Vi(){FK.call(this);this.xX=0;}
function PM(){FK.call(this);this.xQ=0;}
var X6=F(Bo);
function U_(){var a=this;C.call(a);a.qW=null;a.s9=null;a.uE=0;a.jI=0;}
function Kt(a,b){return B6(a.qW)<b?0:1;}
function Tv(){var a=this;C.call(a);a.tI=null;a.tH=null;}
function SF(){var a=this;C.call(a);a.wq=null;a.o2=null;}
function SE(){C.call(this);this.vl=null;}
var ACK=F(0);
function XK(b){return !b?H(Bv,[B(126),B(127),B(612)]):H(Bv,[B(126),B(127),B(612),B(41)]);}
var Z9=F();
function Ry(){var a=this;C.call(a);a.nF=null;a.nE=0;a.nD=null;}
function JB(a,b){var c,d,e,f,g,h,i,j,k;c=a.nF;d=a.nE;e=a.nD;if(b<=d){f=Ck(c);g=new XV;g.mJ=c;h=Q(C,1);h.data[0]=e;CO(f,g,B(613),h);}else{i=Ck(c);g=new XW;g.tU=c;j=Q(C,2);k=j.data;k[0]=e;h=BC(1);h.data[0]=250;k[1]=h;CO(i,g,B(614),j);f=Ck(c);g=new XX;g.sp=c;h=Q(C,1);h.data[0]=e;CO(f,g,B(615),h);}}
function Vf(){var a=this;C.call(a);a.dB=null;a.jd=null;a.kB=null;a.kI=null;a.n3=0;a.is=0;a.cF=0;a.v=0;a.d3=0;a.iz=0;a.e7=0;a.de=0;a.xp=0;a.hi=0;a.i6=0;}
function BH(a,b,c){a.jd.data[b]=c;}
function Dm(a,b){return a.jd.data[b];}
function I2(a){return R0(a,0);}
function R0(a,b){RN(a,b);return a.dB.data[(b*2|0)+1|0];}
function Dx(a,b,c){a.dB.data[b*2|0]=c;}
function Jy(a,b,c){a.dB.data[(b*2|0)+1|0]=c;}
function Fz(a,b){return a.dB.data[b*2|0];}
function Iq(a,b){return a.dB.data[(b*2|0)+1|0];}
function ACC(a){return OR(a,0);}
function OR(a,b){RN(a,b);return a.dB.data[b*2|0];}
function MS(a,b){return a.kB.data[b];}
function Ea(a,b,c){a.kB.data[b]=c;}
function RN(a,b){var c;if(!a.is){c=new DY;V(c);K(c);}if(b>=0&&b<a.n3)return;c=new Bx;Bl(c,C5(b));K(c);}
function XH(a,b,c,d){a.is=0;a.i6=2;Hq(a.dB,(-1));Hq(a.jd,(-1));if(b!==null)a.kI=b;if(c>=0){a.cF=c;a.v=d;}a.d3=a.cF;}
function AAv(a){return a.i6;}
function YC(a){return a.iz;}
function VI(){C.call(this);this.nG=null;}
function AQs(a){DK(a.nG);}
function QF(){var a=this;C.call(a);a.wJ=null;a.qO=null;}
function H0(){var a=this;C.call(a);a.oF=0;a.q$=null;}
function S1(){U.call(this);this.wE=null;}
function AQp(a,b){return Ct(b)!=2?0:1;}
function MI(){U.call(this);this.wO=null;}
function AFV(a,b){return Ct(b)!=1?0:1;}
function RV(){U.call(this);this.wp=null;}
function AFF(a,b){return Q0(b);}
function RU(){U.call(this);this.v_=null;}
function AIC(a,b){return 0;}
function WZ(){U.call(this);this.xw=null;}
function AKd(a,b){return !Ct(b)?0:1;}
function ON(){U.call(this);this.w1=null;}
function AQt(a,b){return Ct(b)!=9?0:1;}
function NX(){U.call(this);this.x1=null;}
function AM1(a,b){return Gh(b);}
function Qv(){U.call(this);this.wG=null;}
function AOx(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function MB(){U.call(this);this.vk=null;}
function ARn(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gh(b);}return b;}
function MG(){U.call(this);this.w4=null;}
function AHF(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gh(b);}return b;}
function NG(){U.call(this);this.xt=null;}
function AQF(a,b){a:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function O_(){U.call(this);this.xM=null;}
function ALM(a,b){return Jr(b);}
function Pi(){U.call(this);this.wr=null;}
function AN0(a,b){return Pj(b);}
function TO(){U.call(this);this.w_=null;}
function AQh(a,b){return Ct(b)!=3?0:1;}
function Sx(){U.call(this);this.vo=null;}
function AQ8(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Gh(b);}return b;}
function MU(){U.call(this);this.ye=null;}
function AHq(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Gh(b);}return b;}
function L7(){U.call(this);this.kV=0;}
function AT$(a){var b=new L7();ACf(b,a);return b;}
function ACf(a,b){Bn(a);a.kV=b;}
function AM4(a,b){return a.be^(a.kV!=Ct(b&65535)?0:1);}
var RO=F(L7);
function APs(a,b){return a.be^(!(a.kV>>Ct(b&65535)&1)?0:1);}
function PG(){C.call(this);this.ve=null;}
function ALh(a){var b,c;b=a.ve;c=b.tI;b=b.tH;c.FJ(b.hW,b.jP,null);}
function VR(){C.call(this);this.nk=null;}
function ANR(a,b){var c,d,e,f;c=a.nk;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.o2;c=Bu();b=Cx(b);e=new M;O(e);G(G(e,B(616)),b);Br(c,N(e));b=Bu();f=d.length;c=new M;O(c);T(G(c,B(617)),f);Br(b,N(c));}
function VU(){var a=this;C.call(a);a.sZ=null;a.s0=null;}
function AMz(a,b){var c,d;c=a.sZ;d=a.s0;b.arrayBuffer().then(Bj(c,"f"),Bj(d,"f"));}
function TA(){var a=this;C.call(a);a.l1=null;a.l2=null;}
function AJk(a,b){var c;c=a.l1;JB(a.l2,JA(c,b.size));}
function TD(){C.call(this);this.uj=null;}
function AE7(a,b){var c;c=a.uj;Br(Iw(),$rt_str(b.message));JB(c,0);}
function UC(){C.call(this);this.wg=null;}
function ALc(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function XW(){C.call(this);this.tU=null;}
function API(a,b){var c,d;c=a.tU;if(!c.hD){b=b.data;c.e.f=ABO(D6(b[0]),FG(b[1]));c.hC=1;d=Kr(FC(),c.eL);b=new M;O(b);G(HR(G(b,B(618)),d),B(170));$rt_globals.console.info($rt_ustr(N(b)));}}
function XX(){C.call(this);this.sp=null;}
function AL5(a,b){var c,d,e,f,g,h;c=b.data;d=a.sp;e=(D6(c[2])).data[0];if(e!=1)HD(d,b);else{d.hD=1;f=D6(c[0]);g=FG(c[1]);b=d.e;b.f=ACL(b.f,f,g,d.hC);Wl(d,ADr(e));Go(Ck(d),AVK);F1(Ck(d));h=Kr(FC(),d.eL);b=new M;O(b);G(HR(G(b,B(619)),h),B(170));$rt_globals.console.info($rt_ustr(N(b)));WQ(d);J5(d);}}
function XV(){C.call(this);this.mJ=null;}
function AR3(a,b){HD(a.mJ,b);}
var Y_=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["cD",AUv(ALH),"cr",AUu(AGq)],RB,0,C,[],0,3,0,0,0,M3,0,C,[],3,3,0,0,0,Mw,0,C,[],3,3,0,0,0,Ww,0,C,[M3,Mw],0,3,0,0,0,ZC,0,C,[],4,0,0,0,0,Zl,0,C,[],4,3,0,0,0,Di,0,C,[],3,3,0,0,0,CI,0,C,[],3,3,0,0,0,IQ,0,C,[],3,3,0,0,0,Bv,"String",1,C,[Di,CI,IQ],0,3,0,EL,["cr",AUu(AGp),"cD",AUv(Bq),"i7",AUu(Li),"jl",AUv(AIE)],Gr,0,C,[],0,3,0,0,0,EF,0,Gr,[],0,3,0,0,0,Ha,0,EF,[],0,3,0,0,0,AAO,0,Ha,[],0,3,0,0,0,DU,0,C,[Di],1,3,0,0,0,Ff,0,DU,[CI],0,3,0,0,["jl",AUv(AKU)],Ge,0,C,[Di,IQ],0,0,0,0,["hr",AUv(Jx),
"cr",AUu(N)],HU,0,C,[],3,3,0,0,0,M,0,Ge,[HU],0,3,0,0,["k$",AUy(AKP),"kk",AUx(AHM),"cr",AUu(DS),"hr",AUv(AKX),"lH",AUw(ALq)],Ep,0,Ha,[],0,3,0,0,0,ACj,0,Ep,[],0,3,0,0,0,AAB,0,Ep,[],0,3,0,0,0,D1,0,Gr,[],0,3,0,0,0,Bo,0,D1,[],0,3,0,0,0,TM,0,C,[],3,3,0,0,0,Ds,0,C,[],3,3,0,0,0,OM,0,C,[],3,0,0,0,0,Ix,0,C,[TM,Ds,OM],1,3,0,0,["dS",AUu(FM)],Rn,0,Ix,[],0,3,0,0,0,YN,0,C,[],0,3,0,0,0,ADy,0,C,[],4,3,0,0,0,Y,0,C,[],3,3,0,0,0,TU,0,C,[Y],0,3,0,0,0,BB,0,C,[],3,3,0,0,0,ABp,0,C,[BB],1,3,0,0,0,YR,0,C,[],3,3,0,0,0,ADa,0,C,[],3,3,
0,0,0,AC7,0,C,[],3,3,0,0,0,LJ,0,C,[],0,3,0,0,0,ZA,0,C,[BB],1,3,0,0,0,BN,0,C,[BB],3,3,0,0,0,TV,0,C,[BN],0,3,0,0,["Y",AUv(AED)],TT,0,C,[BN],0,3,0,0,["Y",AUv(AQi)],AC3,0,C,[],4,3,0,0,0,AAd,0,C,[],0,3,0,0,0,AEw,0,C,[],4,3,0,0,0,M9,0,C,[BN],0,3,0,0,["Y",AUv(AMO)],V$,0,C,[BB],1,3,0,0,0,Y5,0,C,[],0,3,0,0,0]);
$rt_metadata([Lo,0,C,[],4,3,0,0,0,JM,0,C,[BB],3,3,0,0,0,AAt,0,C,[JM],1,3,0,0,["GU",AUv(ARt),"Gc",AUu(AGJ)],AA2,0,C,[BB],1,3,0,0,0,FL,0,C,[],3,3,0,0,0,SZ,0,C,[FL],0,3,0,0,0,C7,0,C,[CI],0,3,0,0,0,Mq,0,C,[BB],3,3,0,0,0,SC,0,C,[Mq],3,3,0,0,0,Eh,0,C,[BB],3,3,0,0,0,ADx,0,C,[SC,Eh],3,3,0,0,0,Gy,0,Bo,[],0,3,0,0,0,NH,0,C,[BN],0,3,0,0,["Y",AUv(ANT)],AB0,0,C,[],4,3,0,0,0,AAZ,0,C,[],4,3,0,0,0,Bx,0,Bo,[],0,3,0,0,0,IJ,0,Bo,[],0,3,0,0,0,O$,0,C,[Eh],3,3,0,0,0,Rd,0,C,[Eh],3,3,0,0,0,Q5,0,C,[Eh],3,3,0,0,0,TG,0,C,[Eh],3,3,0,0,
0,Xd,0,C,[Eh],3,3,0,0,0,US,0,C,[Eh,O$,Rd,Q5,TG,Xd],3,3,0,0,0,Ou,0,C,[],3,3,0,0,0,YQ,0,C,[BB,US,Ou,JM],1,3,0,0,["EO",AUw(ALk),"GZ",AUw(ALJ),"yA",AUv(AFL),"Dn",AUx(AMT),"Br",AUv(AQC),"BB",AUu(AGM),"zW",AUx(AE2)],BD,0,Bo,[],0,3,0,0,0,Ye,0,Bo,[],0,3,0,0,0,G9,0,Bx,[],0,3,0,0,0,Z0,0,C,[],0,3,0,0,0,Ot,0,C,[],3,3,0,0,0,SL,0,C,[Ot],0,3,0,0,0,Cb,0,C,[],3,3,0,0,0,RP,0,C,[Cb],0,3,0,0,0,Bh,0,C,[],3,3,0,0,0,ABj,0,C,[Bh],0,3,0,0,0,AAV,0,C,[BB],1,3,0,0,0,Q9,0,C,[BB],3,3,0,0,0,VK,0,C,[Q9],0,3,0,0,["Dp",AUv(AJX)],VD,0,C,[Bh],
0,3,0,0,0,PX,0,C,[BB],3,3,0,0,0,VE,0,C,[PX],0,3,0,0,["uy",AUw(AH5)],ADF,0,C,[BB],1,3,0,0,0,Cl,0,C,[BB],3,3,0,0,0,VB,0,C,[Cl],0,3,0,0,["b_",AUv(AN1)],K0,0,C,[],3,3,0,0,0,EA,0,C,[K0],1,3,0,0,0,Ek,0,C,[],3,3,0,0,0,XD,0,C,[K0],3,3,0,0,0,M2,0,C,[XD],3,3,0,0,0,OW,0,EA,[Ek,Di,M2],0,3,0,0,0]);
$rt_metadata([VC,0,C,[BN],0,3,0,0,["Y",AUv(APb)],Ph,0,C,[],0,3,0,0,0,Lg,0,C,[],1,3,0,0,0,AC_,0,Lg,[],0,3,0,0,0,CC,0,C,[Ds],1,3,0,0,["cK",AUv(ARa)],I6,0,C,[FL],0,3,0,0,["lR",AUw(Js)],Z6,0,C,[],0,3,0,0,0,WB,0,C,[Cl],0,3,0,0,["b_",AUv(ANq)],WC,0,C,[Cl],0,3,0,0,["b_",AUv(ANG)],WD,0,C,[Cl],0,3,0,0,["b_",AUv(AL0)],WE,0,C,[Cl],0,3,0,0,["b_",AUv(ALm)],WF,0,C,[Cl],0,3,0,0,["b_",AUv(ALN)],WG,0,C,[Cl],0,3,0,0,["b_",AUv(AOd)],WH,0,C,[Cl],0,3,0,0,["b_",AUv(AJA)],WI,0,C,[Cl],0,3,0,0,["b_",AUv(ARA)],WJ,0,C,[Cl],0,3,0,0,["b_",
AUv(AIN)],WK,0,C,[Cl],0,3,0,0,["b_",AUv(APj)],X0,0,C,[Cl],0,3,0,0,["b_",AUv(ARb)],X1,0,C,[Cl],0,3,0,0,["b_",AUv(ALB)],X2,0,C,[Cl],0,3,0,0,["b_",AUv(AL3)],X3,0,C,[Cl],0,3,0,0,["b_",AUv(ANV)],Ug,0,C,[],3,3,0,0,0,Ut,0,C,[Ug],0,3,0,0,0,Ur,0,C,[Cl],0,3,0,0,["b_",AUv(AKF)],Mr,0,C,[],0,3,0,0,0,ADS,0,C,[],0,3,0,0,0,IN,0,C,[],3,3,0,0,0,Cs,0,C,[IN],3,3,0,0,0,Cw,0,C,[],3,3,0,0,["bR",AUv(AKK),"b5",AUw(AQj),"cL",AUw(AFt),"cp",AUx(AOc)],DE,0,C,[],3,3,0,0,0,Ev,0,C,[IN],3,3,0,0,0,EH,0,C,[],3,3,0,0,0,EM,0,C,[],3,3,0,0,0,E8,
0,C,[EM],3,3,0,0,0,P6,0,C,[Ds],0,3,0,0,0,Bk,0,C,[],0,3,0,0,["cr",AUu(Yj)],WN,0,C,[],0,3,0,0,0,AC$,0,C,[],0,3,0,0,0,Zi,0,C,[],3,3,0,0,0,PW,0,C,[],0,3,0,0,0,LB,0,C,[],0,3,0,0,0,D9,0,LB,[],0,3,0,0,0,Wk,0,D9,[],0,3,0,0,0,Ez,0,D9,[],0,3,0,0,0,QJ,0,D9,[],0,3,0,0,0,ACP,0,Ez,[],0,3,0,0,0,ACo,0,Ez,[],0,3,0,0,0,ZB,0,Ez,[],0,3,0,0,0,RY,0,C,[BB],3,3,0,0,0,AEu,0,C,[RY],3,3,0,0,0]);
$rt_metadata([PT,0,C,[Ds],0,3,0,0,0,PV,0,C,[],0,3,0,0,0,Cj,0,C,[CI,Di],1,3,0,0,0,GI,0,Cj,[],12,3,0,Ze,0,L_,0,C,[],3,3,0,0,0,Tm,0,C,[L_],3,3,0,0,0,UI,0,C,[],3,3,0,0,0,Gj,0,C,[Tm,UI],1,3,0,0,0,Jl,0,Gj,[],0,3,0,0,0,AAy,0,Jl,[],0,3,0,0,0,F9,0,Gj,[],1,3,0,0,0,Ln,0,F9,[],0,3,0,0,["jO",AUx(AKx)],DV,0,Cj,[],12,3,0,AQv,0,Jc,0,C,[CI],1,3,0,0,0,Md,0,Jc,[],0,3,0,AAm,0,Ko,0,C,[],32,0,0,YP,0,O1,0,C,[],0,3,0,0,0,GM,0,Cj,[],12,0,0,ABN,0,Gd,0,Cj,[],12,0,0,ABP,0,VL,0,D1,[],0,3,0,0,0,AC2,0,BD,[],0,3,0,0,0,Mc,0,C,[BB],3,3,0,0,
0,XA,0,C,[Mc],0,3,0,0,["Y",AUv(AOQ)],XB,0,C,[Mc],0,3,0,0,["Y",AUv(AGi)],GX,0,C,[],1,3,0,0,0,Sf,0,C,[],3,3,0,0,0,K7,0,GX,[CI,HU,IQ,Sf],1,3,0,0,0,JO,0,GX,[CI],1,3,0,0,0,HC,0,C,[],0,3,0,G6,0,M8,0,CC,[],0,3,0,0,["bK",AUu(ALw),"cj",AUw(AJ0)],CQ,0,CC,[],1,3,0,0,["cj",AUw(GR)],Kf,0,C,[],3,3,0,0,0,Lb,0,C,[],3,3,0,0,0,L9,0,CQ,[Cw,Kf,Lb,DE,EH,E8],0,3,0,0,["gh",AUw(AJK),"cK",AUv(AIn),"bK",AUu(AQo),"ur",AUu(AJo),"uS",AUu(AOC),"sB",AUv(APh),"cj",AUw(AOe),"tj",AUu(AO9),"or",AUu(AAp),"pW",AUu(APE),"bR",AUv(ALE),"cp",AUx(ALA),
"b5",AUw(AFP),"cL",AUw(AIP),"cW",AUx(AND),"dj",AUu(ALg)],VX,0,L9,[],0,3,0,0,0,AEc,0,C,[],0,3,0,0,0,ABg,0,C,[BB],1,3,0,0,0,J1,0,K7,[],1,0,0,0,0,AA1,0,J1,[],0,0,0,0,0,KT,0,C,[],1,3,0,0,0,LH,0,C,[],0,3,0,0,0,Y2,0,C,[],0,3,0,0,0,Ik,0,C,[BB],3,3,0,0,0,Nf,0,C,[Ik],0,3,0,0,["Y",AUv(AIw)],Ne,0,C,[Ik],0,3,0,0,["Y",AUv(AMS)],Nd,0,C,[BN],0,3,0,0,["Y",AUv(ANB)],Nc,0,C,[BN],0,3,0,0,["Y",AUv(AGU)],XS,0,C,[Y],0,3,0,0,["l",AUv(AMA)],XY,0,C,[Y],0,3,0,0,["l",AUv(ANd)],Td,0,C,[Cb],0,3,0,0,["b$",AUv(AM$)]]);
$rt_metadata([Tc,0,C,[Cb],0,3,0,0,["b$",AUv(AFW)],Tb,0,C,[Cb],0,3,0,0,["b$",AUv(AJF)],Ta,0,C,[Cb],0,3,0,0,["b$",AUv(AJC)],S_,0,C,[Cb],0,3,0,0,["b$",AUv(AKh)],S$,0,C,[Cb],0,3,0,0,["b$",AUv(AF3)],S9,0,C,[Cb],0,3,0,0,["b$",AUv(AHH)],S8,0,C,[Cb],0,3,0,0,["b$",AUv(ANp)],S7,0,C,[Cb],0,3,0,0,["b$",AUv(AQW)],S6,0,C,[Cb],0,3,0,0,["b$",AUv(ARO)],QI,0,C,[Cb],0,3,0,0,["b$",AUv(AK_)],QE,0,C,[Cb],0,3,0,0,["b$",AUv(AEQ)],QG,0,C,[Cb],0,3,0,0,["b$",AUv(AIs)],QC,0,C,[Cb],0,3,0,0,["b$",AUv(ALr)],QD,0,C,[Cb],0,3,0,0,["b$",AUv(AO$)],QB,
0,C,[Cb],0,3,0,0,["b$",AUv(AEF)],G5,0,C,[],0,3,0,0,0,OP,0,G5,[],0,3,0,0,0,ADh,0,C,[],0,3,0,0,0,Mn,0,G5,[],0,3,0,0,0,Ui,0,C,[BB],3,3,0,0,0,NA,0,C,[Ui],0,3,0,0,["Hs",AUv(AK3)],U2,0,C,[Y],0,3,0,0,["l",AUv(Wm)],W4,0,JO,[],0,0,0,0,0,ACF,0,C,[Cw,DE],0,0,0,0,["bR",AUv(AOl),"cp",AUx(ARU),"b5",AUw(AGj),"cL",AUw(AMQ),"cW",AUx(ALi)],HM,0,C,[],3,3,0,0,["u4",AUu(AHk),"sq",AUu(AR1)],AAE,0,C,[HM,Cw,Lb],0,3,0,0,["sq",AUu(AIb),"u4",AUu(AGR),"ur",AUu(X$),"uS",AUu(WP),"sB",AUv(X_),"cL",AUw(UX),"b5",AUw(U5),"cp",AUx(QH),"bR",AUv(Pk),
"gL",AUv(AM5)],HJ,0,C,[],3,3,0,0,0,QV,0,C,[HJ],0,3,0,0,["hL",AUv(AJV)],QT,0,C,[HJ],0,3,0,0,["hL",AUv(AL1)],QU,0,C,[Y],0,3,0,0,["l",AUv(AFK)],QR,0,C,[Y],0,3,0,0,["l",AUv(AFj)],QS,0,C,[Cs],0,3,0,0,["bB",AUv(ALF)],HE,0,C,[Cs],0,3,0,0,["bB",AUv(AOX)],QP,0,C,[Y],0,3,0,0,["l",AUv(ANy)],QQ,0,C,[Ev],0,3,0,0,["bB",AUv(AKv)],AB_,0,C,[BB],1,3,0,0,0,Zd,0,C,[],3,3,0,0,0,X7,0,C,[],0,3,0,0,0,Sk,0,C,[Cs],0,3,0,0,["bB",AUv(ARX)],Sl,0,C,[Cs],0,3,0,0,["bB",AUv(AE6)],En,0,C,[],3,3,0,0,0,ABf,0,C,[Cw,En],0,3,0,0,["bR",AUv(Zo),"cp",
AUx(ABe),"b5",AUw(Yk),"cL",AUw(AEe),"gi",AUw(AQK)],YO,0,C,[En,HM],0,3,0,0,["u4",AUu(AHk),"sq",AUu(AR1),"gi",AUw(AGP),"gL",AUv(AFk)],AA3,0,C,[],0,3,0,0,0,K6,0,C,[],0,3,0,0,0,Iv,0,C,[],0,3,0,0,0,VY,0,C,[],0,3,0,0,0,Yp,0,C,[],0,3,0,0,0,Nj,0,C,[],0,3,0,0,0,EU,0,C,[Ds],0,0,0,0,0]);
$rt_metadata([ABr,0,C,[],0,3,0,0,0,ABs,0,C,[Ds],0,3,0,0,0,Wi,0,C,[],3,3,0,0,0,Ho,0,C,[Wi],3,3,0,0,0,EN,0,C,[Ho],1,3,0,0,0,I$,0,C,[Ho],3,3,0,0,0,F3,0,EN,[I$],1,3,0,0,["cD",AUv(AMf)],Il,0,C,[],3,3,0,0,0,NP,0,F3,[Ek,Di,Il],0,3,0,0,["rr",AUv(Bp),"nd",AUu(ANa),"uk",AUv(El)],UQ,0,C,[Y],0,3,0,0,0,BZ,0,C,[],0,3,0,0,["cD",AUv(ARv)],UP,0,C,[Y],0,3,0,0,["l",AUv(AOW)],UL,0,C,[Y],0,3,0,0,["l",AUv(AMU)],UK,0,C,[Bh],0,3,0,0,["p",AUu(AOT)],UN,0,C,[Bh],0,3,0,0,["p",AUu(AJT)],UM,0,C,[Bh],0,3,0,0,["p",AUu(AMa)],Vb,0,C,[Bh],0,
3,0,0,["p",AUu(AOk)],Va,0,C,[Bh],0,3,0,0,["p",AUu(AJv)],Fr,0,Cj,[],12,3,0,AE_,0,Kl,0,C,[],4,3,0,AKf,0,Uz,0,C,[],3,3,0,0,0,Mx,0,C,[Bh],0,3,0,0,["p",AUu(ALj)],My,0,C,[Bh],0,3,0,0,["p",AUu(AJM)],XZ,0,C,[],3,3,0,0,0,Iz,0,C,[],0,3,0,0,0,HK,0,C,[],0,3,0,0,0,EW,0,C,[],0,3,0,0,0,Mf,0,EW,[],0,3,0,0,0,MA,0,EW,[],0,3,0,0,0,P3,0,EW,[],0,3,0,0,0,GS,0,C,[],3,3,0,0,0,Ro,0,C,[],3,3,0,0,0,Gg,0,C,[CI],0,3,0,0,0,Jh,0,C,[],0,3,0,0,0,KJ,0,F9,[],0,3,0,0,["jO",AUx(AIr)],Wd,0,C,[],3,3,0,0,0,ST,0,C,[Wd],0,3,0,0,["cr",AUu(AHr)],UB,0,
C,[],3,3,0,0,0,K5,"JsFileHandle",5,C,[UB],0,3,0,0,["cr",AUu(AKD)],NM,0,C,[Uz],0,3,0,0,0,ABc,0,EA,[Ek,Di],0,3,0,0,0,Cz,0,C,[],0,3,0,0,0,NB,0,C,[Bh],0,3,0,0,["p",AUu(ARh)],B7,0,C,[],0,3,0,0,0,IP,0,C,[],0,3,0,0,0,AD1,0,C,[CI],0,3,0,0,["cD",AUv(APq),"jl",AUv(AGy)],Xu,0,C,[FL],0,3,0,0,["lR",AUw(AJj)],Xw,0,C,[FL],0,3,0,0,["lR",AUw(AK0)],EX,0,C,[],0,3,0,0,0,G2,0,F3,[Il],1,0,0,0,["uk",AUv(ALV)]]);
$rt_metadata([XI,0,G2,[Il],0,0,0,0,["nd",AUu(AIp),"rr",AUv(AQ6)],YB,0,C,[],0,3,0,0,["cr",AUu(AJq)],OO,0,C,[Ho],3,3,0,0,0,Ga,0,EN,[OO],1,3,0,0,0,Kc,0,Ga,[],1,0,0,0,0,VA,0,Kc,[],0,0,0,0,0,Lr,0,EA,[],1,0,0,0,0,Vy,0,Lr,[],0,0,0,0,0,Vz,0,G2,[],0,0,0,0,0,FB,0,C,[],3,3,0,0,0,Vw,0,C,[FB],0,0,0,0,0,Pc,0,C,[FB],3,3,0,0,0,Vx,0,C,[Pc],0,0,0,0,0,Ya,0,C,[FL],0,3,0,0,0,Ns,0,C,[FB],0,0,0,0,0,KP,0,KT,[],1,3,0,0,0,Pe,0,KP,[],0,3,0,0,0,Ip,0,D1,[],0,3,0,0,0,V5,0,C,[Ik],0,3,0,0,["Y",AUv(AF8)],V6,0,C,[BN],0,3,0,0,["Y",AUv(AHb)],V4,
0,C,[BN],0,3,0,0,["Y",AUv(AG9)],HQ,0,C,[],0,3,0,0,0,He,0,C,[],3,3,0,0,0,KC,0,C,[He,Ek],0,0,0,0,["cD",AUv(AHw)],H_,0,KC,[],0,0,0,0,0,Kw,0,CQ,[Kf],0,3,0,0,["cK",AUv(AG4),"bK",AUu(AJW),"kc",AUu(ANP),"cj",AUw(AMn),"kJ",AUw(AAa),"tj",AUu(AMk),"or",AUu(ACk),"pW",AUu(ALl)],YU,0,CC,[],0,3,0,0,["cK",AUv(AFd),"bK",AUu(AIi),"cj",AUw(AOP)],Wg,0,CQ,[Cw,En],0,3,0,0,["gi",AUw(AQe),"cj",AUw(AHN),"bK",AUu(AIx),"bR",AUv(AN_),"b5",AUw(AIF),"cL",AUw(AGn),"cp",AUx(ANs)],Xt,0,CQ,[En],0,3,0,0,["gi",AUw(AII),"bK",AUu(ANM),"cj",AUw(AGY),
"cK",AUv(AOV)],Yd,0,CQ,[Cw],0,3,0,0,["bR",AUv(AKK),"b5",AUw(AQj),"cL",AUw(AFt),"cp",AUx(AOc),"bK",AUu(AOj),"cK",AUv(AHp)],O6,0,CC,[],0,3,0,0,["bK",AUu(AFw),"cj",AUw(APY)],Dc,0,CC,[],0,3,0,0,["bK",AUu(Se),"cj",AUw(SM)],QX,"SelectFileTest",6,Dc,[],0,3,0,0,0,AD7,"WorkerTest",7,Dc,[],0,3,0,0,0,WY,"RenderTexture",6,Dc,[],0,3,0,0,["cK",AUv(AKV),"bK",AUu(AE8),"cj",AUw(ANK)],Sh,"ScissorDemo",6,Dc,[],0,3,0,0,["bK",AUu(ARo),"cj",AUw(AGQ)],OI,0,CC,[],0,3,0,0,["bK",AUu(ARr),"cj",AUw(AI4),"cK",AUv(AHv)],It,"ClipboardTest",
6,Dc,[Cw],0,3,0,0,["bR",AUv(AKK),"b5",AUw(AQj),"cL",AUw(AFt),"cp",AUx(AOJ)],P2,0,CC,[],0,3,0,0,["bK",AUu(ARi),"cj",AUw(ALU)],Wy,0,CQ,[En],0,3,0,0,["gi",AUw(AJ4),"bK",AUu(ARI),"cj",AUw(AN3),"cK",AUv(AKR)],Rg,0,Kw,[],0,3,0,0,["kc",AUu(AJ9),"kJ",AUw(ALY)],IT,0,C,[],0,3,0,0,0,ACh,0,C,[],3,3,0,0,0,Zp,0,C,[],0,3,0,0,0,H1,0,C,[],0,3,0,0,0,Mi,0,C,[He,Di],0,3,0,0,0,Jo,0,Mi,[],0,0,0,0,0,ADP,0,C,[],0,3,0,0,0,R4,0,C,[Cs],0,3,0,0,["bB",AUv(AL8)],R8,0,C,[Y],0,3,0,0,["l",AUv(AQZ)]]);
$rt_metadata([R7,0,C,[EH],0,3,0,0,["gh",AUw(AL9)],R6,0,C,[E8],0,3,0,0,["dj",AUu(AQJ)],R5,0,C,[DE],0,3,0,0,["cW",AUx(AP$)],R9,0,C,[Ev],0,3,0,0,["bB",AUv(AJe)],ADi,0,Iz,[],0,3,0,0,0,TR,0,C,[Cw],0,0,0,0,["bR",AUv(ANW),"cp",AUx(APo),"b5",AUw(AIf),"cL",AUw(AHS)],RH,0,C,[Cs],0,3,0,0,["bB",AUv(ANQ)],RG,0,C,[Cs],0,3,0,0,["bB",AUv(AQl)],RJ,0,C,[EH],0,3,0,0,["gh",AUw(AQR)],RI,0,C,[Bh],0,3,0,0,["p",AUu(AQP)],RF,0,C,[Ev],0,3,0,0,["bB",AUv(AMc)],RE,0,C,[DE],0,3,0,0,["cW",AUx(AJR)],G8,0,BZ,[],0,3,0,0,0,U1,0,C,[],0,3,0,0,
0,ZK,0,C,[],0,3,0,0,0,Tf,0,C,[Cs],0,3,0,0,["bB",AUv(AOi)],Ti,0,C,[Ev],0,3,0,0,["bB",AUv(AEV)],AD5,0,C,[],0,3,0,0,["cD",AUv(ART)],Th,0,C,[Bh],0,3,0,0,["p",AUu(AJz)],Te,0,C,[Bh],0,3,0,0,["p",AUu(APB)],C$,0,C,[],0,3,0,0,0,Ox,0,C,[Cs],0,3,0,0,["bB",AUv(AGO)],Oy,0,C,[Ev],0,3,0,0,["bB",AUv(APU)],ACb,0,C,[],0,3,0,0,0,Oz,0,C,[DE],0,3,0,0,["cW",AUx(AM2)],ADR,0,C,[],0,3,0,0,0,T5,0,C,[En],0,3,0,0,["gi",AUw(AMG)],T6,0,C,[Cs],0,3,0,0,["bB",AUv(AE0)],Ni,0,C,[],3,3,0,0,0,ADf,0,C,[Ni],0,3,0,0,0,Wx,0,C,[Cw],0,0,0,0,["cp",AUx(AOc),
"b5",AUw(AGI),"cL",AUw(AN6),"bR",AUv(AH_)],SR,0,C,[DE],0,3,0,0,["cW",AUx(AHu)],PZ,0,C,[Cs],0,3,0,0,["bB",AUv(AOM)],Rk,0,C,[Y],0,3,0,0,["l",AUv(AFr)],Rj,0,C,[Y],0,3,0,0,["l",AUv(ARw)],Ri,0,C,[Y],0,3,0,0,["l",AUv(AHP)],Rh,0,C,[Y],0,3,0,0,["l",AUv(AMW)],Rf,0,C,[Y],0,3,0,0,["l",AUv(AL2)],Re,0,C,[Y],0,3,0,0,["l",AUv(AN4)],TQ,0,C,[Cw],0,0,0,0,["cL",AUw(AFt),"cp",AUx(AOc),"bR",AUv(APW),"b5",AUw(AL7)],CZ,0,C,[],3,3,0,G7,0,Ud,0,C,[Cw],0,0,0,0,["cp",AUx(AOc),"b5",AUw(AM_),"cL",AUw(AGK),"bR",AUv(AFD)],NS,0,C,[DE],0,3,
0,0,["cW",AUx(AFv)],Su,0,C,[Cs],0,3,0,0,["bB",AUv(AP1)],St,0,C,[EH],0,3,0,0,["gh",AUw(AIa)],Sr,0,C,[EH],0,3,0,0,["gh",AUw(APp)],Sq,0,C,[E8],0,3,0,0,["dj",AUu(ANr)],Ss,0,C,[E8],0,3,0,0,["dj",AUu(AGA)],RZ,0,C,[Cs],0,3,0,0,["bB",AUv(AIh)],Qo,0,C,[Cs],0,3,0,0,["bB",AUv(AIR)]]);
$rt_metadata([Qp,0,C,[Ev],0,3,0,0,["bB",AUv(AE1)],Qq,0,C,[DE],0,3,0,0,["cW",AUx(AOq)],AA5,0,C,[],0,3,0,0,["cD",AUv(AQx)],CW,0,C,[],3,3,0,AMM,0,Ca,0,Cj,[],12,3,0,ABo,0,IE,0,C,[],0,3,0,0,0,Hy,0,C,[],0,3,0,0,0,ACT,0,C,[],0,3,0,0,0,Gt,0,C,[],4,3,0,0,0,AEy,0,C,[],0,3,0,0,0,DR,0,C,[],3,3,0,AJG,0,OG,0,C,[BB],3,3,0,0,0,OZ,0,C,[OG],0,3,0,0,["uy",AUw(AIX)],OH,0,C,[BB],3,3,0,0,0,OX,0,C,[OH],0,3,0,0,["uy",AUw(AJ8)],ZD,0,C,[],0,3,0,0,0,YJ,0,C,[BB],3,3,0,0,0,Jn,0,C,[Ds],0,3,0,0,["dS",AUu(ACt)],TL,0,C,[],0,3,0,0,0,DQ,0,C,
[],3,3,0,XT,0,Gk,0,C,[],3,3,0,0,0,Xa,0,C,[Gk],0,3,0,0,["nr",AUx(AOF)],Xb,0,C,[Gk],0,3,0,0,0,V0,0,C,[Cw],0,0,0,0,["bR",AUv(AE5),"cp",AUx(AOH),"b5",AUw(AMK),"cL",AUw(AKg)],Yb,0,C,[Y],0,3,0,0,["l",AUv(AN7)],ABC,0,C,[],0,3,0,0,0,Pv,0,C,[Y],0,3,0,0,["l",AUv(AKo)],Rt,0,C,[Cw],0,0,0,0,["b5",AUw(AQj),"cL",AUw(AFt),"cp",AUx(AOc),"bR",AUv(AE9)],ZR,0,C,[],0,3,0,0,0,Ci,0,Cj,[],12,3,0,ABQ,0,ADW,0,C,[],0,3,0,0,0,AAA,0,C,[BB],4,3,0,0,0,AEl,0,C,[],0,3,0,0,0,ADI,0,C,[],3,3,0,0,0,CR,0,C,[BB],1,3,0,0,0,AB5,0,CR,[],1,3,0,0,0,ACM,
0,CR,[],1,3,0,0,0,ZH,0,CR,[],1,3,0,0,0,Z2,0,CR,[],1,3,0,0,0,ADg,0,CR,[],1,3,0,0,0,Uj,0,C,[Bh],0,3,0,0,["p",AUu(ALI)],AAk,0,C,[],4,3,0,0,0,VW,0,C,[Cw],0,0,0,0,["b5",AUw(AQj),"cL",AUw(AFt),"cp",AUx(AOc),"bR",AUv(AO5)],AAw,0,C,[BB],1,3,0,0,0,IG,0,Bo,[],0,3,0,0,0,OB,0,C,[Y],0,3,0,0,["l",AUv(AFX)],V8,0,C,[EM],0,3,0,0,["dj",AUu(ARl)],AEr,0,C,[],0,3,0,0,0,AB1,0,C,[],3,3,0,0,0,Ly,0,C,[],3,3,0,0,0]);
$rt_metadata([Rl,0,C,[Ly],0,3,0,0,["qG",AUv(AMo)],Ql,0,C,[Y],0,3,0,0,["l",AUv(AQA)],Zc,0,C,[],0,3,0,0,0,Yo,0,C,[],0,3,0,0,0,Nb,0,C,[Ds],0,3,0,0,0,SS,0,C,[Y],0,3,0,0,["l",AUv(AHh)],YG,0,C,[],0,3,0,0,0,ADt,0,C,[CI],0,3,0,0,["cD",AUv(AFe),"i7",AUu(AOp),"jl",AUv(ANZ)],Tl,0,C,[Y],0,3,0,0,["l",AUv(AHm)],So,0,C,[],3,3,0,0,0,FK,0,Ip,[],0,3,0,0,0,W_,0,EF,[],0,3,0,0,0,Qa,0,C,[Y],0,3,0,0,["l",AUv(ANn)],Ub,0,C,[Bh],0,3,0,0,["p",AUu(APR)],L4,0,DU,[CI],0,3,0,0,0,Fy,0,C,[],0,0,0,0,0,J4,0,C,[],4,3,0,0,0,Vt,0,C,[],0,3,0,0,0,LX,
0,C,[],1,3,0,0,0,AAR,0,CR,[],1,3,0,0,0,XU,0,C,[Y],0,3,0,0,["l",AUv(AFI)],VM,0,C,[Y],0,3,0,0,["l",AUv(ARy)],Qd,0,C,[Y],0,3,0,0,["l",AUv(AMv)],EI,0,C,[Ds],0,3,0,0,["dS",AUu(AM0),"iL",AUu(AQD),"iO",AUx(PN),"eS",AUv(Zt),"jW",AUv(AIe),"jM",AUv(APu),"pn",AUw(ARF),"cp",AUx(AP4),"b5",AUw(APk),"cL",AUw(AQq),"bR",AUv(AMh),"cW",AUx(AH8)],Gz,0,EI,[],0,3,0,0,0,QW,0,Gz,[HM],0,3,0,0,["u4",AUu(AHk),"sq",AUu(AR1),"dS",AUu(ARV),"pn",AUw(AHg),"eS",AUv(AJ1),"jM",AUv(ALb),"jW",AUv(AHQ),"uB",AUu(ZJ),"bR",AUv(AQN),"b5",AUw(AFl),"cp",
AUx(AFA),"gL",AUv(AKJ)],VV,0,C,[Bh],0,3,0,0,["p",AUu(ARG)],AAu,0,EI,[],0,3,0,0,["dS",AUu(AFE),"iO",AUx(AHn),"eS",AUv(AO2),"cp",AUx(AJw),"b5",AUw(AP7),"cL",AUw(AI8),"bR",AUv(AKq),"cW",AUx(APd),"iL",AUu(AMF)],V2,0,Gz,[],0,3,0,0,["uB",AUu(ANo),"iL",AUu(ALe),"jM",AUv(AJ3),"eS",AUv(AHJ),"jW",AUv(AKH)],Pn,0,C,[Y],0,3,0,0,0,Vm,0,C,[Bh],0,3,0,0,["p",AUu(ANJ)],Rr,0,C,[Bh],0,3,0,0,["p",AUu(AJL)],XF,0,C,[],0,3,0,0,0,HX,0,C,[],0,3,0,0,0,Ty,0,EI,[],0,3,0,0,0,T_,0,C,[],0,3,0,0,0,Yh,0,C,[Bh],0,3,0,0,["p",AUu(AHW)],Vu,0,C,
[Y],0,3,0,0,["l",AUv(AQB)],Vv,0,C,[Y],0,3,0,0,["l",AUv(AFN)],Jq,0,C,[],0,3,0,0,0,DY,0,Bo,[],0,3,0,0,0,ACm,0,EF,[],0,3,0,0,0,SW,0,C,[Y],0,3,0,0,["l",AUv(AIO)],SX,0,C,[Y],0,3,0,0,["l",AUv(ARE)],Sg,0,C,[Y],0,3,0,0,0,NK,0,C,[Y],0,3,0,0,["l",AUv(AFu)],NI,0,C,[Y],0,3,0,0,["l",AUv(AHy)],Kq,0,LX,[],1,3,0,0,0,TC,0,Kq,[],0,3,0,0,0,PP,0,C,[Y],0,3,0,0,["l",AUv(AGB)]]);
$rt_metadata([P9,0,C,[EM],0,3,0,0,["dj",AUu(AMl)],P$,0,C,[EM],0,3,0,0,["dj",AUu(AKa)],NL,0,C,[EM],0,3,0,0,["dj",AUu(AEM)],Vl,0,C,[Bh],0,3,0,0,["p",AUu(AMI)],Qz,0,C,[BN],0,3,0,0,["Y",AUv(AEO)],UH,0,C,[BN],0,3,0,0,["Y",AUv(AQ9)],MJ,0,C,[Y],0,3,0,0,0,AB2,0,C,[Cb],0,3,0,0,0,ABX,0,C,[Cb],0,3,0,0,0,Sj,0,C,[Y],0,3,0,0,["l",AUv(AFM)],Si,0,C,[Y],0,3,0,0,["l",AUv(AGs)],RD,0,C,[Y],0,3,0,0,["l",AUv(AI5)],S4,0,C,[Bh],0,3,0,0,["p",AUu(AJN)],JY,0,DU,[CI],0,3,0,0,0,Lu,0,C,[],4,3,0,0,0,MK,0,C,[BN],0,3,0,0,["Y",AUv(AR0)],TY,
0,C,[],0,3,0,0,0,Nm,0,C,[Gk],0,3,0,0,["nr",AUx(AQQ)],R3,0,DU,[CI],0,3,0,0,0,Fh,0,Bo,[],0,3,0,0,0,Nz,0,C,[],0,3,0,0,0,ADv,0,C,[],0,3,0,0,0,SV,0,C,[],0,0,0,0,0,Zh,0,C,[],3,3,0,0,0,Xq,0,C,[BN],0,3,0,0,["Y",AUv(AO8)],Xp,0,C,[BN],0,3,0,0,["Y",AUv(AHE)],WU,0,C,[BN],0,3,0,0,["Y",AUv(AJa)],WT,0,C,[BN],0,3,0,0,["Y",AUv(AJ7)],YI,0,C,[],1,3,0,0,0,W1,0,C,[],3,3,0,0,0,Xj,0,C,[Cl],0,3,0,0,["b_",AUv(AI2)],AAe,0,C,[],0,3,0,0,0,ADQ,0,C,[],0,3,0,0,0,Us,0,C,[Bh],0,3,0,0,["p",AUu(AJH)],Uu,0,C,[Bh],0,3,0,0,["p",AUu(AOB)],ACw,0,
C,[],0,3,0,0,0,IZ,0,Fh,[],0,3,0,0,0,HT,0,Bo,[],0,3,0,0,0,LN,0,Bo,[],0,3,0,0,0,AAF,0,C,[Y],0,3,0,0,0,Sm,0,C,[Bh],0,3,0,0,["p",AUu(ARc)],Q4,0,C,[Y],0,3,0,0,["l",AUv(AKt)],Sw,0,C,[Bh],0,3,0,0,["p",AUu(AFU)],Yq,0,C,[],0,3,0,0,0,GY,0,C,[],0,3,0,0,0,ACG,0,Ga,[],0,0,0,0,0,O3,0,EN,[],0,0,0,0,0,WL,0,Bx,[],0,3,0,0,0,Qj,0,C,[L_],3,3,0,0,0,Nt,0,C,[Qj],3,3,0,0,0]);
$rt_metadata([LQ,0,C,[Nt],1,3,0,0,0,AAj,0,LQ,[],0,3,0,0,0,Rx,0,C,[Bh],0,3,0,0,["p",AUu(AGu)],Rw,0,C,[Bh],0,3,0,0,["p",AUu(AEW)],Rv,0,C,[Bh],0,3,0,0,["p",AUu(AK8)],Ru,0,C,[Bh],0,3,0,0,["p",AUu(APP)],Pp,0,C,[Bh],0,3,0,0,["p",AUu(APa)],Pr,0,C,[Bh],0,3,0,0,["p",AUu(AKb)],Ps,0,C,[Bh],0,3,0,0,["p",AUu(AGX)],Xr,0,C,[],3,3,0,0,0,We,0,C,[Bh],0,3,0,0,["p",AUu(AFR)],UF,0,C,[GS],0,3,0,0,["lV",AUw(AJS)],Qs,0,C,[Y],0,3,0,0,["l",AUv(AJD)],Xz,0,C,[Y],0,3,0,0,["l",AUv(AK7)],Vj,0,C,[Ly],0,3,0,0,["qG",AUv(JP)],SP,0,C,[Bh],0,3,
0,0,["p",AUu(AKI)],SQ,0,C,[Bh],0,3,0,0,["p",AUu(ALZ)],SO,0,C,[Bh],0,3,0,0,["p",AUu(ANl)],N_,0,C,[Bh],0,3,0,0,["p",AUu(AJB)],N$,0,C,[Bh],0,3,0,0,["p",AUu(APZ)],Vd,0,C,[EM],0,3,0,0,["dj",AUu(AHt)],VO,0,C,[Bh],0,3,0,0,["p",AUu(ANU)],VT,0,C,[Bh],0,3,0,0,["p",AUu(AKQ)],VS,0,C,[Bh],0,3,0,0,["p",AUu(AFJ)],VQ,0,C,[Bh],0,3,0,0,["p",AUu(AHB)],Xm,0,C,[GS],0,3,0,0,["lV",AUw(AGZ)],PO,0,C,[BN],0,3,0,0,["Y",AUv(AHR)],IR,0,C,[BB],3,3,0,0,0,MF,0,C,[IR],0,3,0,0,["qF",AUu(AKc)],Mp,0,C,[IR],0,3,0,0,["qF",AUu(AEG)],Pl,0,C,[Gk],
0,3,0,0,0,Xo,0,C,[BN],0,3,0,0,["Y",AUv(AJs)],GQ,0,C,[],0,0,0,0,0,UD,0,GQ,[FB],0,0,0,0,0,Q1,0,GQ,[FB],0,0,0,0,0,QZ,0,C,[Di],4,3,0,0,0,NY,0,C,[Y],0,3,0,0,["l",AUv(ARS)],Gn,0,Cj,[],12,0,0,UV,0,S0,0,C,[Y],0,3,0,0,["l",AUv(AKT)],Bz,0,C,[],1,0,0,0,["ch",AUx(HA),"cm",AUy(HO),"hl",AUu(AGk),"M",AUv(AQa),"bQ",AUv(AP9),"e_",AUu(AQ2),"d8",AUu(I4)],Uw,0,C,[],32,0,0,ASw,0,O4,0,C,[Y],0,3,0,0,["l",AUv(AHj)],V1,0,C,[Y],0,3,0,0,["l",AUv(AIZ)],Yi,0,C,[Bh],0,3,0,0,["p",AUu(AG5)],CN,0,Bz,[],0,0,0,Mb,["c",AUx(AFQ),"H",AUv(AF_)],GE,
0,C,[],0,0,0,0,0,IL,0,BD,[],0,3,0,0,0,W$,0,C,[BN],0,3,0,0,["Y",AUv(ANA)],ABR,0,C,[BB],3,3,0,0,0,Uh,0,C,[BN],0,3,0,0,["Y",AUv(ANc)]]);
$rt_metadata([RM,0,CN,[],0,0,0,0,["c",AUx(AFn),"H",AUv(AOL)],XJ,0,CN,[],0,0,0,0,["c",AUx(AG8)],Pw,0,CN,[],0,0,0,0,["c",AUx(AGh)],SU,0,CN,[],0,0,0,0,["c",AUx(AFs),"H",AUv(ANm)],Fv,0,CN,[],0,0,0,0,["c",AUx(AQr)],BV,0,Bz,[],1,0,0,0,["c",AUx(ARs),"bW",AUu(APD),"H",AUv(AKk)],ADq,0,BV,[],0,0,0,0,["bq",AUw(AO_),"ch",AUx(AIt),"cm",AUy(AGW),"H",AUv(AFq)],BR,0,Bz,[],0,0,0,0,["c",AUx(AI9),"M",AUv(ANf),"bQ",AUv(AK9),"H",AUv(ANY),"d8",AUu(AGT)],IX,0,BR,[],0,0,0,0,["c",AUx(AMZ),"H",AUv(AOm)],DP,0,IX,[],0,0,0,0,["c",AUx(AHC),
"M",AUv(AN5)],MD,0,DP,[],0,0,0,0,["c",AUx(AM9),"H",AUv(AQf)],Wf,0,DP,[],0,0,0,0,["c",AUx(AF5),"H",AUv(APJ)],Q2,0,DP,[],0,0,0,0,["c",AUx(AGN),"H",AUv(ARW)],TF,0,DP,[],0,0,0,0,["c",AUx(AEX),"H",AUv(AOA)],Gq,0,BR,[],0,0,0,0,["c",AUx(AFg),"ch",AUx(ALt),"cm",AUy(AOR),"bQ",AUv(AK4),"e_",AUu(ANj),"d8",AUu(AQ5)],GG,0,C,[],1,0,0,0,0,U,0,GG,[],1,0,0,Ow,["db",AUu(AF7),"eC",AUu(AFC),"iI",AUu(APx),"gE",AUu(AQ1)],Zw,0,U,[],0,0,0,0,["k",AUv(CY),"db",AUu(CT),"eC",AUu(AIl),"iI",AUu(APX),"cr",AUu(AMj),"gE",AUu(AIy)],Ja,0,Bo,
[],0,3,0,0,0,D0,0,Bz,[],1,0,0,0,["bQ",AUv(AOU),"H",AUv(AQm),"d8",AUu(ALR)],C2,0,D0,[],0,0,0,0,["c",AUx(AEZ)],E2,0,C2,[],0,0,0,0,["c",AUx(AFT)],CP,0,D0,[],0,0,0,0,["c",AUx(AFf)],Ex,0,C2,[],0,0,0,0,["c",AUx(ALz),"M",AUv(ARZ)],Wv,0,C2,[],0,0,0,0,["c",AUx(ARk),"ch",AUx(AMg)],X,0,C,[],1,0,0,0,0,De,0,BD,[],0,3,0,0,0,MW,0,GG,[Ek],0,0,0,0,["cr",AUu(AMs)],N3,0,Bz,[],0,0,0,0,["c",AUx(AKM),"H",AUv(ANe)],W6,0,C,[Ek,Di],0,3,0,0,0,ML,0,BR,[],0,0,0,0,0,P5,0,BR,[],0,0,0,0,["c",AUx(AFO),"M",AUv(AMV),"H",AUv(AGm),"bQ",AUv(AF6)],Dz,
0,BR,[],0,0,0,0,["c",AUx(AIc),"k",AUv(AIM),"bQ",AUv(AFH),"M",AUv(APr),"H",AUv(AIq)],I9,0,Dz,[],0,0,0,0,["k",AUv(AKl)],Zm,0,BV,[],0,0,0,0,["bq",AUw(AKN)],Ed,0,BV,[],0,0,0,0,["bq",AUw(Mm),"bQ",AUv(ANh)],OA,0,BR,[],0,0,0,0,["M",AUv(ALy),"c",AUx(AEN),"bQ",AUv(AGe),"H",AUv(AP2)],Ej,0,BV,[],0,0,0,0,["bW",AUu(AKw),"bq",AUw(AJh),"ch",AUx(AH9),"cm",AUy(AKC),"bQ",AUv(APT)],ADV,0,BV,[],0,0,0,0,["bq",AUw(AEH)],Yv,0,BV,[],0,0,0,0,["bq",AUw(AE$)],Fc,0,BR,[],0,0,0,0,["M",AUv(AQ4),"c",AUx(AMY),"bQ",AUv(AKO),"H",AUv(AN8)],Xn,
0,Fc,[],0,0,0,0,0,TS,0,Fc,[],0,0,0,0,0,Yf,0,CP,[],0,0,0,0,["c",AUx(AHd)],Po,0,CP,[],0,0,0,0,["c",AUx(AL6)],FN,0,CP,[],0,0,0,0,["c",AUx(APn),"M",AUv(AQw)],O5,0,FN,[],0,0,0,0,["c",AUx(AKz),"M",AUv(AMt)],E_,0,CP,[],0,0,0,0,["c",AUx(ARP)],M6,0,E_,[],0,0,0,0,["c",AUx(AJP)],Rq,0,CP,[],0,0,0,0,["c",AUx(AQ_)]]);
$rt_metadata([Qf,0,FN,[],0,0,0,0,["c",AUx(AGo)],UY,0,E_,[],0,0,0,0,["c",AUx(AFx)],Rs,0,D0,[],0,0,0,0,["c",AUx(ARz),"ch",AUx(APz)],Oa,0,D0,[],0,0,0,0,["c",AUx(ANk),"ch",AUx(AER)],EK,0,C,[],1,0,0,0,0,Yg,0,C2,[],0,0,0,0,["c",AUx(AFz)],Wq,0,Ex,[],0,0,0,0,["c",AUx(AL4)],OT,0,E2,[],0,0,0,0,["c",AUx(AOY)],P_,0,C2,[],0,0,0,0,["c",AUx(ANb)],T7,0,Ex,[],0,0,0,0,["c",AUx(AFG)],Q3,0,E2,[],0,0,0,0,["c",AUx(APc)],Kp,0,Bz,[],4,0,0,0,["c",AUx(AK6),"H",AUv(AJ6)],Z4,0,Bz,[],0,0,0,0,["c",AUx(AF4),"H",AUv(AGc)],N8,0,Bz,[],0,0,0,
0,["c",AUx(AKp),"H",AUv(ARJ)],W8,0,Bz,[],4,0,0,0,["c",AUx(ANS),"H",AUv(AG2)],WR,0,Bz,[],0,0,0,0,["c",AUx(AMR),"H",AUv(AEE)],Ng,0,Bz,[],0,0,0,0,["c",AUx(AGS),"H",AUv(AI1)],ADK,0,BR,[],0,0,0,0,["c",AUx(ARf),"M",AUv(AGg),"hl",AUu(AMy),"H",AUv(AGf)],Zu,0,BR,[],4,0,0,0,["c",AUx(AMH),"M",AUv(AOI),"hl",AUu(AEB),"H",AUv(ARp)],ADB,0,Bz,[],4,0,0,0,["c",AUx(AKS),"H",AUv(AIU)],ABM,0,Bz,[],0,0,0,0,["c",AUx(AMP),"H",AUv(AIJ)],Ys,0,Bz,[],0,0,0,0,["c",AUx(AJU),"H",AUv(AG7)],G1,0,BR,[],0,0,0,0,["c",AUx(AFB),"M",AUv(AN2),"H",
AUv(AOn)],ADG,0,G1,[],0,0,0,0,["c",AUx(AHc),"ch",AUx(AQc),"cm",AUy(AFo),"bQ",AUv(ALX)],AAP,0,G1,[],0,0,0,0,["c",AUx(ALn)],N2,0,Ge,[HU],0,3,0,0,["k$",AUy(AIz),"kk",AUx(AF9),"hr",AUv(AGw),"lH",AUw(APC)],RA,0,BV,[],0,0,0,0,["bq",AUw(AHz),"ch",AUx(AFZ),"cm",AUy(AIY),"bQ",AUv(AJt)],Yr,0,BV,[],0,0,0,0,["bq",AUw(ALv)],Na,0,BV,[],0,0,0,0,["bq",AUw(AO0)],G0,0,C,[],4,0,0,AOy,0,Mu,0,BV,[],0,0,0,0,["bq",AUw(AO7)],KY,0,BR,[],0,0,0,0,["M",AUv(AM7),"c",AUx(AG3),"ch",AUx(AJr),"cm",AUy(AHG),"bQ",AUv(AFm),"H",AUv(APK)],Lj,0,
BR,[],0,0,0,0,["M",AUv(AGv),"c",AUx(AEY),"ch",AUx(ANt),"cm",AUy(AOZ),"bQ",AUv(AHA),"H",AUv(ANE)],DT,0,BV,[],0,0,0,0,["bq",AUw(AOo),"ch",AUx(AMm),"cm",AUy(AGt),"bQ",AUv(AOb)],Vn,0,EK,[],0,0,0,0,["hc",AUv(AGH),"sa",AUw(AOh)],Vo,0,EK,[],0,0,0,0,["hc",AUv(APf),"sa",AUw(AQY)],ACH,0,C,[],0,0,0,0,0,YK,0,C,[],0,0,0,0,0,KV,0,X,[],0,0,0,0,["B",AUu(AAY)],JU,0,X,[],0,0,0,0,["B",AUu(ABG)],ACB,0,X,[],0,0,0,0,["B",AUu(AOK)],AC9,0,X,[],0,0,0,0,["B",AUu(APM)],ADb,0,X,[],0,0,0,0,["B",AUu(AId)],KR,0,X,[],0,0,0,0,["B",AUu(Zy)],Ls,
0,KR,[],0,0,0,0,["B",AUu(AAr)],AEp,0,X,[],0,0,0,0,["B",AUu(AJp)],Ml,0,Ls,[],0,0,0,0,["B",AUu(Yn)],AA_,0,Ml,[],0,0,0,0,["B",AUu(ALS)],ABy,0,X,[],0,0,0,0,["B",AUu(AHs)],ZX,0,X,[],0,0,0,0,["B",AUu(ALP)]]);
$rt_metadata([ZE,0,X,[],0,0,0,0,["B",AUu(AQ0)],ADe,0,X,[],0,0,0,0,["B",AUu(AMu)],AEA,0,X,[],0,0,0,0,["B",AUu(AEP)],ACI,0,X,[],0,0,0,0,["B",AUu(AJZ)],ACv,0,X,[],0,0,0,0,["B",AUu(AOs)],ADu,0,X,[],0,0,0,0,["B",AUu(AHo)],Y3,0,X,[],0,0,0,0,["B",AUu(AHO)],YH,0,X,[],0,0,0,0,["B",AUu(AQV)],ACO,0,X,[],0,0,0,0,["B",AUu(AEI)],AC0,0,X,[],0,0,0,0,["B",AUu(AKW)],AAi,0,X,[],0,0,0,0,["B",AUu(AHY)],ABD,0,X,[],0,0,0,0,["B",AUu(AI3)],AD6,0,X,[],0,0,0,0,["B",AUu(AKY)],ACZ,0,X,[],0,0,0,0,["B",AUu(AP5)],AAN,0,X,[],0,0,0,0,["B",AUu(ANN)],AAg,
0,X,[],0,0,0,0,["B",AUu(AMp)],AEv,0,X,[],0,0,0,0,["B",AUu(AOE)],Jj,0,X,[],0,0,0,0,["B",AUu(ABA)],ADw,0,Jj,[],0,0,0,0,["B",AUu(AMb)],ABd,0,KV,[],0,0,0,0,["B",AUu(AFY)],AAb,0,JU,[],0,0,0,0,["B",AUu(AJd)],ZL,0,X,[],0,0,0,0,["B",AUu(ALa)],Z7,0,X,[],0,0,0,0,["B",AUu(AQH)],AA6,0,X,[],0,0,0,0,["B",AUu(AID)],ABa,0,X,[],0,0,0,0,["B",AUu(AEJ)],ZS,0,C,[],4,0,0,0,0,Zk,0,C,[],4,3,0,0,0,Nh,0,C,[],0,3,0,0,0,ACU,0,C,[],0,3,0,0,0,AAL,0,C,[],4,3,0,0,0,Zq,0,C,[IN],0,3,0,0,0,Tt,0,C,[Y],0,3,0,0,["l",AUv(ARL)],Q$,0,C,[Y],0,3,0,0,
["l",AUv(AIA)],YS,0,C,[],0,3,0,0,0,MM,0,C,[Y],0,3,0,0,["l",AUv(AFh)],PA,0,C,[Y],0,3,0,0,0,Qh,0,C,[Y],0,3,0,0,0,Wt,0,U,[],0,0,0,0,["k",AUv(AIk)],Wr,0,U,[],0,0,0,0,["k",AUv(AFb)],Og,0,U,[],0,0,0,0,["k",AUv(AK2),"cr",AUu(AI6)],Om,0,U,[],0,0,0,0,["k",AUv(AOr)],Ok,0,U,[],0,0,0,0,["k",AUv(AO6)],Ol,0,U,[],0,0,0,0,["k",AUv(ALu)],Op,0,U,[],0,0,0,0,["k",AUv(AHT)],Oq,0,U,[],0,0,0,0,["k",AUv(AEC)],On,0,U,[],0,0,0,0,["k",AUv(AI_)],Oo,0,U,[],0,0,0,0,["k",AUv(ALx)],Or,0,U,[],0,0,0,0,["k",AUv(AQg)],Os,0,U,[],0,0,0,0,["k",AUv(AHi)],Of,
0,U,[],0,0,0,0,["k",AUv(AR2)]]);
$rt_metadata([O0,0,U,[],0,0,0,0,["k",AUv(AJc)],Oc,0,U,[],0,0,0,0,["k",AUv(AHf)],Od,0,U,[],0,0,0,0,["k",AUv(AIS)],Oj,0,U,[],0,0,0,0,["k",AUv(AKs)],Ob,0,U,[],0,0,0,0,["k",AUv(APS)],Oh,0,U,[],0,0,0,0,["k",AUv(AGa)],Oi,0,U,[],0,0,0,0,["k",AUv(ANC)],LP,0,C,[],3,3,0,0,0,Sv,0,C,[LP],4,3,0,0,0,ADo,0,C,[GS],0,3,0,0,0,V7,0,C,[],0,3,0,0,0,C0,0,C,[],3,3,0,ABF,0,Cg,0,Cj,[],12,3,0,Z5,0,Du,0,C,[],3,3,0,AOt,0,N7,0,C,[],0,3,0,0,0,N4,0,C,[Y],0,3,0,0,["l",AUv(AOD)],M0,0,Gq,[],0,0,0,0,["ch",AUx(AIG),"cm",AUy(ARN),"e_",AUu(AG1)],PY,
0,Bo,[],0,3,0,0,0,Xe,0,Bo,[],0,3,0,0,0,Vi,0,FK,[],0,3,0,0,0,PM,0,FK,[],0,3,0,0,0,X6,0,Bo,[],0,3,0,0,0,U_,0,C,[],0,3,0,0,0,Tv,0,C,[Bh],0,3,0,0,0,SF,0,C,[Y],0,3,0,0,0,SE,0,C,[Y],0,3,0,0,0,ACK,0,C,[],3,3,0,0,0,Z9,0,C,[],0,3,0,0,0,Ry,0,C,[HJ],0,3,0,0,0,Vf,0,C,[LP],0,0,0,0,0,VI,0,C,[Bh],0,3,0,0,["p",AUu(AQs)],QF,0,C,[],0,3,0,0,0,H0,0,C,[],0,3,0,0,0,S1,0,U,[],0,0,0,0,["k",AUv(AQp)],MI,0,U,[],0,0,0,0,["k",AUv(AFV)],RV,0,U,[],0,0,0,0,["k",AUv(AFF)],RU,0,U,[],0,0,0,0,["k",AUv(AIC)],WZ,0,U,[],0,0,0,0,["k",AUv(AKd)],ON,
0,U,[],0,0,0,0,["k",AUv(AQt)],NX,0,U,[],0,0,0,0,["k",AUv(AM1)],Qv,0,U,[],0,0,0,0,["k",AUv(AOx)],MB,0,U,[],0,0,0,0,["k",AUv(ARn)],MG,0,U,[],0,0,0,0,["k",AUv(AHF)],NG,0,U,[],0,0,0,0,["k",AUv(AQF)],O_,0,U,[],0,0,0,0,["k",AUv(ALM)],Pi,0,U,[],0,0,0,0,["k",AUv(AN0)],TO,0,U,[],0,0,0,0,["k",AUv(AQh)],Sx,0,U,[],0,0,0,0,["k",AUv(AQ8)],MU,0,U,[],0,0,0,0,["k",AUv(AHq)],L7,0,U,[],0,0,0,0,["k",AUv(AM4)]]);
$rt_metadata([RO,0,L7,[],0,0,0,0,["k",AUv(APs)],PG,0,C,[IR],0,3,0,0,["qF",AUu(ALh)],VR,0,C,[BN],0,3,0,0,["Y",AUv(ANR)],VU,0,C,[BN],0,3,0,0,["Y",AUv(AMz)],TA,0,C,[BN],0,3,0,0,["Y",AUv(AJk)],TD,0,C,[BN],0,3,0,0,["Y",AUv(AE7)],UC,0,C,[BN],0,3,0,0,["Y",AUv(ALc)],XW,0,C,[Y],0,3,0,0,["l",AUv(API)],XX,0,C,[Y],0,3,0,0,["l",AUv(AL5)],XV,0,C,[Y],0,3,0,0,["l",AUv(AR3)],Y_,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.Lh=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","[",", ","]","Either src or dest is null","Illegal argument javaObject instanceof ","#wasm","#diffDemo","ClassL.java","ClassR.java","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ",
"#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = vTex;\n  gl_Position = pos;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = uTexTransform.xy + vTex * uTexTransform.zw;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ",
"Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","sendToDiff","DiffUtils.findDiffs","selectScene ","CodiconDemo","DemoEdit0","RenderTexture","ScissorDemo","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","WindowDemo","Diff","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","Consolas","Segoe UI","#e3c8ab","#39322b","unsupported",
"supported","ReadClipboardText is ","","","w = ",", lineHeight = ","example.java","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
+"(int field) {\n    return field + this.field;\n  }\n\n  public interface A {\n    int sumField(int field);\n\n    default void foo() {\n      sumField(10);\n    }\n  }\n}\n","java","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","parser >","open ...","Development >","text","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ",
"\n","\r","Full file parsed in ","ms","change model language: from = "," to = ","opening file ",".java","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing","CppParser.parse","JavaScriptParser.parseBytes","JavaParser.parse","EditorComponent::setDiffModel","  diffModel.length = ","  model.document.length() = ","ns-resize","ew-resize","trying to display with unknown screen size and dpr",".cpp",
".cc",".cxx",".hpp",".c",".h",".js","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","\\n","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","Courier New","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ",
"key up = ","key down = ",", keyCode = ",", isRepeated = ","main.java","private static void foo (...);","FindUsagesView1","Window 1: ","scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","#606366","#2B2B2B","#A4A3A3","#323232","#616161","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string",
"c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","toolbar size is unknown","onLeave item ",", item ","onContextMenu","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",
") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile","#A9B7C6","#344134","#40332B"," on Copy","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5",
"showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#BBBBBB","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#3C3F41","#4B6EAF","#787878","onEnter item ","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","nwse-resize","nesw-resize"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","/","The last byte in dst "," onPastePlainText: ","onPopupClosed",
"showOpenFilePicker -> ","showDirectoryPicker -> ","Int","Iter","VP","Rep","No definition or usages","Expected "," ints to read, but "," read","readClipboardText error: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart",
"javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam",
"Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols",
"NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation",
"CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea",
"CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Viewport parsed in "," ints to write, but "," written","#EBECF0",
"#F8F9FB","#edebfc","#FCE8F4","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","Verdana","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AGq(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Cq=Long_add;var Kr=Long_sub;var BQ=Long_mul;var Dp=Long_div;var MN=Long_rem;var ASM=Long_or;var CV=Long_and;var AYh=Long_xor;var Fn=Long_shl;var Gl=Long_shr;var D5=Long_shru;var AS7=Long_compare;var Fa=Long_eq;var AYi=Long_ne;var AH1=Long_lt;var Py=Long_le;var AHI=Long_gt;var Z1=Long_ge;var AYj=Long_not;var ATg=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(ATk);
main.javaException=$rt_javaException;
(function(){var c;c=TV.prototype;c.f=c.Y;c=TT.prototype;c.f=c.Y;c=M9.prototype;c.f=c.Y;c=AAt.prototype;c.getLength=c.Gc;c.get=c.GU;c=NH.prototype;c.f=c.Y;c=YQ.prototype;c.dispatchEvent=c.Br;c.addEventListener=c.EO;c.removeEventListener=c.GZ;c.getLength=c.BB;c.get=c.yA;c.addEventListener=c.zW;c.removeEventListener=c.Dn;c=VK.prototype;c.onAnimationFrame=c.Dp;c=VE.prototype;c.f=c.uy;c=VB.prototype;c.handleEvent=c.b_;c=VC.prototype;c.f=c.Y;c=WB.prototype;c.handleEvent=c.b_;c=WC.prototype;c.handleEvent=c.b_;c=WD.prototype;c.handleEvent
=c.b_;c=WE.prototype;c.handleEvent=c.b_;c=WF.prototype;c.handleEvent=c.b_;c=WG.prototype;c.handleEvent=c.b_;c=WH.prototype;c.handleEvent=c.b_;c=WI.prototype;c.handleEvent=c.b_;c=WJ.prototype;c.handleEvent=c.b_;c=WK.prototype;c.handleEvent=c.b_;c=X0.prototype;c.handleEvent=c.b_;c=X1.prototype;c.handleEvent=c.b_;c=X2.prototype;c.handleEvent=c.b_;c=X3.prototype;c.handleEvent=c.b_;c=Ur.prototype;c.handleEvent=c.b_;c=XA.prototype;c.f=c.Y;c=XB.prototype;c.f=c.Y;c=Nf.prototype;c.f=c.Y;c=Ne.prototype;c.f=c.Y;c=Nd.prototype;c.f
=c.Y;c=Nc.prototype;c.f=c.Y;c=NA.prototype;c.accept=c.Hs;c=V5.prototype;c.f=c.Y;c=V6.prototype;c.f=c.Y;c=V4.prototype;c.f=c.Y;c=OZ.prototype;c.f=c.uy;c=OX.prototype;c.f=c.uy;c=Qz.prototype;c.f=c.Y;c=UH.prototype;c.f=c.Y;c=MK.prototype;c.f=c.Y;c=Xq.prototype;c.f=c.Y;c=Xp.prototype;c.f=c.Y;c=WU.prototype;c.f=c.Y;c=WT.prototype;c.f=c.Y;c=Xj.prototype;c.handleEvent=c.b_;c=PO.prototype;c.f=c.Y;c=MF.prototype;c.onTimer=c.qF;c=Mp.prototype;c.onTimer=c.qF;c=Xo.prototype;c.f=c.Y;c=W$.prototype;c.f=c.Y;c=Uh.prototype;c.f
=c.Y;c=PG.prototype;c.onTimer=c.qF;c=VR.prototype;c.f=c.Y;c=VU.prototype;c.f=c.Y;c=TA.prototype;c.f=c.Y;c=TD.prototype;c.f=c.Y;c=UC.prototype;c.f=c.Y;})();
})(this);
