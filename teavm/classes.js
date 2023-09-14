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
function $rt_cls(cls){return AB8(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FS(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bX.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AOB(t);}
function $rt_throwableCause(t){return AOI(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AUf());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AUg(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(AUh());}
function $rt_throwCCE(){}
var A=Object.create(null);
var K=$rt_throw;var BE=$rt_compare;var AUi=$rt_nullCheck;var E=$rt_cls;var Q=$rt_createArray;var ID=$rt_isInstance;var AUj=$rt_nativeThread;var AUk=$rt_suspending;var AUl=$rt_resuming;var AUm=$rt_invalidPointer;var B=$rt_s;var Bm=$rt_eraseClinit;var Ba=$rt_imul;var Ef=$rt_wrapException;var AUn=$rt_checkBounds;var AUo=$rt_checkUpperBound;var AUp=$rt_checkLowerBound;var AUq=$rt_wrapFunction0;var AUr=$rt_wrapFunction1;var AUs=$rt_wrapFunction2;var AUt=$rt_wrapFunction3;var AUu=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var AAV=$rt_createCharArrayFromData;var AS5=$rt_createByteArrayFromData;var AUv=$rt_createShortArrayFromData;var E4=$rt_createIntArrayFromData;var AUw=$rt_createBooleanArrayFromData;var AUx=$rt_createFloatArrayFromData;var AUy=$rt_createDoubleArrayFromData;var AGC=$rt_createLongArrayFromData;var AUe=$rt_createBooleanArray;var E9=$rt_createByteArray;var AUz=$rt_createShortArray;var BL=$rt_createCharArray;var BC=$rt_createIntArray;var ATU=$rt_createLongArray;var AEN=$rt_createFloatArray;var AUA
=$rt_createDoubleArray;var BE=$rt_compare;var AUB=$rt_castToClass;var AUC=$rt_castToInterface;var AUD=Long_toNumber;var Bc=Long_fromInt;var AUE=Long_fromNumber;var Cc=Long_create;var Em=Long_ZERO;var AUF=Long_hi;var EC=Long_lo;
function C(){this.$id$=0;}
function AUG(){var a=new C();ADg(a);return a;}
function ADg(a){}
function Cn(a){return AB8(a.constructor);}
function ALE(a,b){return a!==b?0:1;}
function AGn(a){var b,c,d,e,f,g,h,i,j;b=Yt(a);if(!b)c=B(0);else{d=(((32-NB(b)|0)+4|0)-1|0)/4|0;e=BL(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=G_((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FS(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function Yt(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AKX(a){var b,c,d;if(!ID(a,Ek)&&a.constructor.$meta.item===null){b=new VN;V(b);K(b);}b=AEZ(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function RA(){var a=this;C.call(a);a.us=0;a.qI=null;}
function ATg(b){var c,d,e,f,g,h,i,j,k,l;ADe();YL();ABu();ACy();Z$();ACZ();ADi();AEv();YC();ACm();ABR();Yz();ACl();ACn();AA9();AAf();AAw();Zy();AAF();AAH();YU();YD();AEe();c=(Y0()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))OW(B(2),B(3));else{d=new RA;BG(d);e=new TU;e.sl=d;f=new M8;c=new $rt_globals.Worker("teavm/worker.js");g=new NG;g.oO=c;g.oP=e;g.oQ=f;e=Bj(g,"f");c.onmessage=e;h=H(LH,[JL(B(4),B(5),400),JL(B(6),B(7),400),JL(B(8),B(5),700),
JL(B(9),B(7),700)]);b=Q(LH,1);b.data[0]=APx(B(10),Fb(B(11),B(12)),B(5),400);b=(LD(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.rT;f=c.qC;k=new M;O(k);BA(G(G(k,B(13)),f),41);k=N(k);f=c.qw;l=c.ov;f=AIN($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BG(d);c=new TV;c.tn=d;g=new TT;e.then(Bj(c,"f"),Bj(g,"f"));}}
function ABa(b){var c,d,e,f,g,h,i,j,k;c=new SK;d=new RO;c.pK=new $rt_globals.TextDecoder("utf-16");e=new VM;e.oq=c;c.rv=e;e=new VF;e.uK=c;c.lZ=e;f=new VG;f.rk=c;c.tw=new $rt_globals.ResizeObserver(Bj(f,"f"));e=new VD;e.nO=c;c.mF=e;c.h6=1;f=new OU;f.xr=null;f.jh=AUH;c.lB=f;c.qa=b;f=new VE;f.tI=c;e=Bj(f,"f");b.onmessage=e;e=AA8();b.postMessage(e);c.my=(D8()).getElementById("canvasDiv");b=Y0();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dC
=b;c.my.appendChild(b);f=c.dC;e=AM1(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)OW(B(2),B(14));else{g=new Pf;e=c.dC;f=c.lZ;g.dv=null;g.gV=e;g.cl=ATr(f);h=$rt_globals.window;i=Q(Ds,14);j=i.data;k=new Wz;k.mW=g;j[0]=CS(g,e,B(15),k);f=new WA;f.r3=g;j[1]=CS(g,e,B(16),f);f=new WB;f.n$=g;j[2]=CS(g,e,B(17),f);f=new WC;f.uF=g;j[3]=CS(g,e,B(18),f);f=new WD;f.q$=g;j[4]=CS(g,e,B(19),f);f=new WE;f.no=g;j[5]=CS(g,e,B(20),f);k=new WF;k.uV=g;j[6]=CS(g,e,B(21),k);k=new WG;k.rn=g;j[7]=CS(g,e,B(22),k);k=new WH;k.nz
=g;j[8]=CS(g,e,B(23),k);k=new WI;k.tS=g;j[9]=CS(g,e,B(24),k);k=new XZ;k.th=g;j[10]=CS(g,e,B(25),k);k=new X0;k.sh=g;j[11]=ACg(g,h,B(26),k,1);k=new X1;k.mh=g;j[12]=CS(g,h,B(27),k);k=new X2;k.ua=g;j[13]=CS(g,h,B(28),k);g.wM=AQT(i);AAp(g,e);c.la=g;c.fY=ASR(b,c.lZ);APa(c.tw,c.dC);e=$rt_globals.window;g=c.mF;e.addEventListener("resize",Bj(g,"handleEvent"));c.ff=ABp(d,AAh(c));Tk(c);}ACN(c);}
var M2=F(0);
var Mv=F(0);
function Wu(){var a=this;C.call(a);a.j5=null;a.fK=null;}
function AB8(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Wu;c.fK=b;d=c;b.classObject=d;}return c;}
function H2(a){if(a.j5===null)a.j5=$rt_str(a.fK.$meta.name);return a.j5;}
function HP(a){return a.fK.$meta.primitive?1:0;}
function H9(a){return AB8(a.fK.$meta.item);}
var ZB=F();
function Bj(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Lg(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Zk=F();
function AEZ(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AB_(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AB_(d[e],c))return 1;e=e+1|0;}return 0;}
var Di=F(0);
var CI=F(0);
var IQ=F(0);
function Bv(){var a=this;C.call(a);a.bX=null;a.hz=0;}
var AUI=null;var AUJ=null;var AUK=null;function EL(){EL=Bm(Bv);AP9();}
function AJd(){var a=new Bv();YE(a);return a;}
function FS(a){var b=new Bv();Hj(b,a);return b;}
function Ht(a,b,c){var d=new Bv();Yb(d,a,b,c);return d;}
function YE(a){EL();a.bX=AUI;}
function Hj(a,b){var c,d,e,f;EL();b=b.data;c=b.length;d=BL(c);e=d.data;a.bX=d;f=0;while(f<c){e[f]=b[f];f=f+1|0;}}
function Yb(a,b,c,d){var e,f,g;EL();e=BL(d);f=e.data;a.bX=e;g=0;while(g<d){f[g]=b.data[g+c|0];g=g+1|0;}}
function Mf(b){var c;EL();c=AJd();c.bX=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.bX.data;if(b<c.length)return c[b];}d=new G9;V(d);K(d);}
function I(a){return a.bX.data.length;}
function Fo(a){return a.bX.data.length?0:1;}
function PA(a,b,c,d,e){var f,g,h;if(b>=0&&b<=c&&c<=I(a)&&e>=0){d=d.data;if((e+(c-b|0)|0)<=d.length){while(b<c){f=e+1|0;g=b+1|0;d[e]=L(a,b);e=f;b=g;}return;}}h=new Bx;V(h);K(h);}
function Uo(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Kz(a,b){if(a===b)return 1;return Uo(a,b,0);}
function Ec(a,b){var c,d,e,f;if(a===b)return 1;if(I(b)>I(a))return 0;c=0;d=I(a)-I(b)|0;while(d<I(a)){e=L(a,d);f=c+1|0;if(e!=L(b,c))return 0;d=d+1|0;c=f;}return 1;}
function GC(a,b,c){var d,e,f,g,h;d=Bb(0,c);if(b<65536){e=b&65535;while(true){f=a.bX.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=H5(b);h=II(b);while(true){f=a.bX.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function FY(a,b,c){var d,e,f,g,h;d=Z(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bX.data[d]==e)break;d=d+(-1)|0;}return d;}f=H5(b);g=II(b);while(true){if(d<1)return (-1);h=a.bX.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Z3(a,b,c){var d,e,f;d=Bb(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function Px(a,b,c){var d,e;d=Z(c,I(a)-I(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=I(b))break a;if(L(a,d+e|0)!=L(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function B$(a,b,c){var d,e;d=BE(b,c);if(d>0){e=new Bx;V(e);K(e);}if(!d){EL();return AUJ;}if(!b&&c==I(a))return a;return Ht(a.bX,b,c-b|0);}
function Dk(a,b){return B$(a,b,I(a));}
function PG(a,b,c){return B$(a,b,c);}
function Fb(a,b){var c,d,e,f,g,h;if(Fo(b))return a;if(Fo(a))return b;c=BL(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Mf(c);}
function Ve(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BA(d,L(a,f));}f=f+1|0;}G(d,Dk(a,f));return N(d);}
function RS(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return B$(a,b,c+1|0);}
function AGm(a){return a;}
function Gp(a){var b,c,d,e,f;b=a.bX.data;c=BL(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cx(b){EL();return b===null?B(29):b.cr();}
function C5(b){var c;EL();c=new M;O(c);return N(T(c,b));}
function Bq(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function Le(a){var b,c,d,e;a:{if(!a.hz){b=a.bX.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hz=(31*a.hz|0)+e|0;d=d+1|0;}}}return a.hz;}
function LR(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gy;Bl(b,B(30));K(b);}AUL=1;d=new QY;d.jP=Q(CN,10);d.f5=(-1);d.ex=(-1);d.br=(-1);e=new GE;e.eu=1;e.bJ=b;e.bc=BL(I(b)+2|0);Eg(Gp(b),0,e.bc,0,I(b));f=e.bc.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.rb=g;e.fN=0;E1(e);E1(e);d.g=e;d.dh=0;d.kO=XP(d,(-1),0,null);if(!Dj(d.g)){b=new IL;h=d.g;Jg(b,B(31),h.bJ,h.c7);K(b);}if(d.mZ)d.kO.d8();b=Cm();h=new Su;h.h3=(-1);h.j$=(-1);h.vU=d;h.ts=d.kO;h.ir=a;h.h3=0;g=I(a);h.j$=g;e=new Vh;i=h.h3;j=d.f5;k=d.ex+1|0;l=d.br+
1|0;e.hj=(-1);m=j+1|0;e.n3=m;e.dB=BC(m*2|0);f=BC(l);e.jf=f;Hq(f,(-1));if(k>0)e.kC=BC(k);Hq(e.dB,(-1));XI(e,a,i,g);h.cq=e;e.e7=1;n=0;m=0;if(!I(a)){f=Q(Bv,1);f.data[0]=B(31);}else{while(true){l=I(h.ir);if(!YB(h.cq))l=h.j$;e=h.cq;if(e.d3>=0&&AAu(e)==1){e=h.cq;e.d3=I2(e);if(I2(h.cq)==ACx(h.cq)){e=h.cq;e.d3=e.d3+1|0;}g=h.cq.d3;g=g<=l&&MD(h,g)?1:0;}else g=MD(h,h.h3);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;B0(b,PG(a,m,AD0(h)));m=AAc(h);n=g;}a:{B0(b,PG(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Bp(b,
g)))break a;El(b,g);}}if(g<0)g=0;f=HF(b,Q(Bv,g));}return f;}
function AIB(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Z(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AP9(){AUI=BL(0);AUJ=AJd();AUK=new SZ;}
function Gr(){var a=this;C.call(a);a.he=null;a.kA=null;a.iZ=0;a.jj=0;}
function AUM(){var a=new Gr();V(a);return a;}
function AUN(a){var b=new Gr();Bl(b,a);return b;}
function V(a){a.iZ=1;a.jj=1;}
function Bl(a,b){a.iZ=1;a.jj=1;a.he=b;}
function AIr(a){return a;}
function AOB(a){return a.he;}
function AOI(a){var b;b=a.kA;if(b===a)b=null;return b;}
var EF=F(Gr);
var Ha=F(EF);
var AAN=F(Ha);
var DU=F();
function Ff(){DU.call(this);this.fp=0;}
var AUO=null;var AUP=null;function ADz(a){var b=new Ff();JV(b,a);return b;}
function JV(a,b){a.fp=b;}
function Jt(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new De;Bl(b,B(32));K(b);}d=I(b);if(0==d){b=new De;Bl(b,B(33));K(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new De;V(b);K(b);}b:{c:{while(f<d){h=f+1|0;i=OO(L(b,f));if(i<0){j=new De;k=B$(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bl(j,N(b));K(j);}if(i>=c){j=new De;l=B$(b,0,d);b=new M;O(b);G(G(T(G(b,B(35)),c),B(36)),l);Bl(j,N(b));K(j);}g=Ba(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new De;k=B$(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bl(j,N(b));K(j);}b=new De;j=new M;O(j);T(G(j,B(38)),c);Bl(b,N(j));K(b);}
function FX(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AUP===null){AUP=Q(Ff,256);c=0;while(true){d=AUP.data;if(c>=d.length)break a;d[c]=ADz(c-128|0);c=c+1|0;}}}return AUP.data[b+128|0];}return ADz(b);}
function LZ(a){var b;b=a.fp;return (Nm(AT2(20),b,10)).cr();}
function NB(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Ih(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function J$(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function AKS(a,b){b=b;return BE(a.fp,b.fp);}
function ADe(){AUO=E($rt_intcls());}
function Ge(){var a=this;C.call(a);a.A=null;a.N=0;}
function AUQ(){var a=new Ge();O(a);return a;}
function AT2(a){var b=new Ge();FU(b,a);return b;}
function O(a){FU(a,16);}
function FU(a,b){a.A=BL(b);}
function Nm(a,b,c){return AA2(a,a.N,b,c);}
function AA2(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cd(a,b,b+1|0);else{Cd(a,b,b+2|0);f=a.A.data;g=b+1|0;f[b]=45;b=g;}a.A.data[b]=G_(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Ba(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cd(a,b,b+i|0);if(e)e=b;else{f=a.A.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.A.data;b=e+1|0;f[e]=G_($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ABZ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BE(c,0.0);if(!d){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Cd(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cd(a,b,b+8|0);d=b;}else{Cd(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AUR;ABS(c,f);d=f.kd;g=f.j0;h=f.nj;i=1;j=1;if(h)j=2;k=9;l=APB(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bb(k,i+1|0);g=0;}else{d=d/AUS.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cd(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.A.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.A.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.A.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function ZW(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BE(c,0.0);if(!d){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Cd(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cd(a,b,b+8|0);d=b;}else{Cd(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AUT;AA5(c,f);g=f.kQ;h=f.jI;i=f.mU;j=1;k=1;if(i)k=2;l=18;m=ANr(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bb(l,j+1|0);h=0;}else{g=Dp(g,AUU.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cd(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.A.data;k=b+1|0;e[b]=45;}n=Cc(1569325056, 23283064);o=0;while(o<l){if(Pw(n,Em))d=0;else{d=EC(Dp(g,n));g
=MM(g,n);}e=a.A.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Dp(n,Bc(10));o=o+1|0;}if(h){e=a.A.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function APB(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ANr(b){var c,d,e,f,g;c=Bc(1);d=0;e=16;f=AUV.data;g=f.length-1|0;while(g>=0){if(Fa(MM(b,BQ(c,f[g])),Em)){d=d|e;c=BQ(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BA(a,b){return a.lI(a.N,b);}
function Xt(a,b,c){Cd(a,b,b+1|0);a.A.data[b]=c;return a;}
function Jw(a,b){var c,d;c=a.A.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bb(b,Bb(c*2|0,5));a.A=Nv(a.A,d);}
function N(a){return Ht(a.A,0,a.N);}
function Xa(a,b,c,d){return a.k_(a.N,b,c,d);}
function MW(a,b,c,d,e){var f,g,h,i;Cd(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.A.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Ii(a,b){return a.kl(b,0,b.data.length);}
function Cd(a,b,c){var d,e,f,g;d=a.N;e=d-b|0;a.hs((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.A.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.N=a.N+(c-b|0)|0;}
var HU=F(0);
var M=F(Ge);
function LK(){var a=new M();AQZ(a);return a;}
function AQZ(a){O(a);}
function G(a,b){var c;c=a.N;if(b===null)b=B(29);Mg(a,c,b);return a;}
function B1(a,b){Mg(a,a.N,b);return a;}
function T(a,b){Nm(a,b,10);return a;}
function HR(a,b){var c,d,e,f,g,h,i,j;c=a.N;d=1;if(AHY(b,Em)){d=0;b=ATc(b);}a:{if(K_(b,Bc(10))<0){if(d)Cd(a,c,c+1|0);else{Cd(a,c,c+2|0);e=a.A.data;f=c+1|0;e[c]=45;c=f;}a.A.data[c]=G_(EC(b),10);}else{g=1;h=Bc(1);i=FE(Bc(-1),Bc(10));b:{while(true){j=BQ(h,Bc(10));if(K_(j,b)>0){j=h;break b;}g=g+1|0;if(K_(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cd(a,c,c+g|0);if(d)f=c;else{e=a.A.data;f=c+1|0;e[c]=45;}while(true){if(Fa(j,Em))break a;e=a.A.data;c=f+1|0;e[f]=G_(EC((FE(b,j))),10);b=Nj(b,j);j=FE(j,Bc(10));f=c;}}}return a;}
function Fj(a,b){ABZ(a,a.N,b);return a;}
function Yx(a,b){BA(a,b);return a;}
function F2(a,b){Mg(a,a.N,!b?B(39):B(40));return a;}
function ADP(a,b,c){var d,e,f,g,h,i;d=BE(b,c);if(d<=0){e=a.N;if(b<=e){if(d){f=e-c|0;a.N=e-(c-b|0)|0;g=0;while(g<f){h=a.A.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new G9;V(i);K(i);}
function Wf(a,b){var c,d,e,f;if(b>=0){c=a.N;if(b<c){c=c-1|0;a.N=c;while(b<c){d=a.A.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new G9;V(f);K(f);}
function AKN(a,b,c,d,e){MW(a,b,c,d,e);return a;}
function AHJ(a,b,c,d){Xa(a,b,c,d);return a;}
function Y9(a){return a.N;}
function DS(a){return N(a);}
function AKV(a,b){Jw(a,b);}
function ALn(a,b,c){Xt(a,b,c);return a;}
function Mg(a,b,c){var d,e,f;if(b>=0&&b<=a.N){a:{if(c===null)c=B(29);else if(Fo(c))break a;Jw(a,a.N+I(c)|0);d=a.N-1|0;while(d>=b){a.A.data[d+I(c)|0]=a.A.data[d];d=d+(-1)|0;}a.N=a.N+I(c)|0;d=0;while(d<I(c)){e=a.A.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new G9;V(c);K(c);}
var Ep=F(Ha);
var ACf=F(Ep);
function AUW(a){var b=new ACf();AGw(b,a);return b;}
function AGw(a,b){Bl(a,b);}
var AAA=F(Ep);
function AUX(a){var b=new AAA();AGS(b,a);return b;}
function AGS(a,b){Bl(a,b);}
var D1=F(Gr);
var Bo=F(D1);
function AUg(a){var b=new Bo();AQA(b,a);return b;}
function AQA(a,b){Bl(a,b);}
var TM=F(0);
var Ds=F(0);
function AQT(b){var c;c=new P4;c.v9=b;return c;}
function CG(b,c){if(b!==null)b.dS();return c;}
var OK=F(0);
function Ix(){var a=this;C.call(a);a.ln=0;a.ky=0;}
var AUY=0;function FM(a){AUY=AUY-1|0;}
function FZ(a,b,c){Jb(a,ZQ(b,c,400,0));}
function QL(a,b){return KH(a,b,0.875);}
function KH(a,b,c){return Eo(a,b)+c|0;}
function Rm(){var a=this;Ix.call(a);a.jm=null;a.bn=null;a.mn=null;}
function Eu(a){var b,c,d;b=a.bn;c=a.ln;d=a.ky;b.clearRect(0.0,0.0,c,d);}
function R9(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bn;d="center";c.textAlign=d;break a;case 2:c=a.bn;d="right";c.textAlign=d;break a;default:break a;}d=a.bn;c="left";d.textAlign=c;}}
function Cy(a,b){Jb(a,b.mI);}
function Jb(a,b){var c;if(!(a.mn==b?1:0)){c=a.bn;a.mn=b;c.font=b;}}
function ZQ(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Ch(a,b,c,d){var e,f,g;e=a.bn;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Eo(a,b){var c;c=$rt_ustr(b);return a.bn.measureText(c).width;}
function Ll(a,b,c,d){var e,f;e=a.bn;f=$rt_ustr(FS(AAV([35,GB(b/16|0),GB(b%16|0),GB(c/16|0),GB(c%16|0),GB(d/16|0),GB(d%16|0)])));e.fillStyle=f;}
var YM=F();
var ADt=F();
function C6(b,c){if(b===c)return 1;return b!==null?b.cD(c):c!==null?0:1;}
function BG(b){if(b!==null)return b;b=new Gy;Bl(b,B(31));K(b);}
var Y=F(0);
function TU(){C.call(this);this.sl=null;}
var BB=F(0);
var ABo=F();
var YQ=F(0);
function JL(b,c,d){return APx(B(41),Fb(B(11),b),c,d);}
var AC7=F(0);
var AC2=F(0);
function LD(b,c){var d,e,f,g;d=c.data;e=b.data.length;f=d.length;g=Dl(b,e+f|0);Eg(c,0,g,e,f);return g;}
function KS(b,c,d){Eg(b,c,d,0,d.data.length);return d;}
function Q7(b,c,d){var e;if(c>0)Eg(b,0,d,0,c);e=d.data.length;if(c<e)Eg(b,c+1|0,d,c,e-c|0);return d;}
function AAG(b,c,d,e){var f;if(c>0)Eg(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Eg(b,d,e,c,f-d|0);}return e;}
function FQ(b){var c;c=new V6;c.iD=b;return c;}
function ZG(b,c){if(b.data.length!=c)b=Dl(b,c);return b;}
function AC1(b,c,d){var e;e=c.data.length;if(e==d)c=Dl(c,e*2|0);c.data[d]=b;return c;}
function LH(){var a=this;C.call(a);a.rT=null;a.qC=null;a.qw=null;a.ov=0;}
function APx(a,b,c,d){var e=new LH();AOr(e,a,b,c,d);return e;}
function AOr(a,b,c,d,e){a.rT=b;a.qC=c;a.qw=d;a.ov=e;}
var Zz=F();
function AIN(b,c){return {style:b,weight:c};}
var BN=F(0);
function TV(){C.call(this);this.tn=null;}
function AEz(a,b){var c,d,e;c=a.tn;d=0;while(d<b.length){e=b[d];(D8()).fonts.add(e);d=d+1|0;}c.us=1;b=c.qI;if(b!==null)ABa(b);}
var TT=F();
function AQe(a,b){$rt_globals.console.info("font load error "+b);}
var ACY=F();
var AAd=F();
function OW(b,c){var d,e,f;d=(D8()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(D8()).getElementById($rt_ustr(b)).appendChild(d);}
function Y0(){return (D8()).createElement("canvas");}
function ADT(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AM1(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AEs=F();
var M8=F();
function AMJ(a,b){var c;c=new Bo;Bl(c,$rt_str(b.message));K(c);}
var V8=F();
function FA(b){return $rt_str(b);}
var Y4=F();
function Nv(b,c){var d,e,f,g;b=b.data;d=BL(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ADK(b,c){var d,e,f,g;b=b.data;d=E9(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function L6(b,c){var d,e,f,g;b=b.data;d=BC(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dl(b,c){var d,e,f,g;d=b.data;e=UL(H9(Cn(b)),c);f=Z(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ZM(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B1(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B1(c,B(43));G(c,e[d]);d=d+1|0;}B1(c,B(44));return N(c);}
function ACu(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B1(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B1(c,B(43));T(c,e[d]);d=d+1|0;}B1(c,B(44));return N(c);}
function AO0(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B1(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B1(c,B(43));Fj(c,e[d]);d=d+1|0;}B1(c,B(44));return N(c);}
function ARG(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);B1(c,B(42));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B1(c,B(43));f=e[d];ZW(c,c.N,f);d=d+1|0;}B1(c,B(44));return N(c);}
function Hq(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BD;V(f);K(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Zq(b,c,d,e){var f,g;if(c>d){e=new BD;V(e);K(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Z_(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AUH;e=Q(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Z(j,h+f|0);l=h+(2*f|0)|0;m=Z(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.lS(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AB0(b,c){return T1(b,0,b.data.length,c);}
function T1(b,c,d,e){var f,g,h,i,j;f=BE(c,d);if(f>0){g=new BD;V(g);K(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var Lk=F();
var AUZ=null;var AU0=null;function Bu(){if(AUZ===null)AUZ=AMb(AU1,0);return AUZ;}
function Iw(){if(AU0===null)AU0=AMb(AU2,0);return AU0;}
function Eg(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=ACv(b)&&(e+f|0)<=ACv(d)){a:{b:{if(b!==d){g=H9(Cn(b));h=H9(Cn(d));if(g!==null&&h!==null){if(g===h)break b;if(!HP(g)&&!HP(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fK;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AB_(n.constructor,o)?1:0)){RK(b,c,d,e,j);b=new IJ;V(b);K(b);}j=j+1|0;k=m;}RK(b,c,d,e,f);return;}if(!HP(g))break a;if(HP(h))break b;else break a;}b=new IJ;V(b);K(b);}}RK(b,c,
d,e,f);return;}b=new IJ;V(b);K(b);}b=new Bx;V(b);K(b);}d=new Gy;Bl(d,B(45));K(d);}
function RK(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function FC(){return Long_fromNumber(new Date().getTime());}
function ACz(){return AUE($rt_globals.performance.now()*1000000.0);}
var JK=F(0);
var AAs=F();
function ARp(a,b){return a.vR(b);}
function AGG(a){return a.xb();}
var AA0=F();
var FL=F(0);
var SZ=F();
var C7=F();
var AU3=null;var AU4=null;var AU5=null;var AU6=null;var AU7=null;var AU8=null;var AU9=null;var AU$=null;var AU_=null;var AVa=null;function W5(b){var c,d;c=new Bv;d=BL(1);d.data[0]=b;Hj(c,d);return c;}
function LW(b){return b>=65536&&b<=1114111?1:0;}
function CD(b){return (b&64512)!=55296?0:1;}
function C4(b){return (b&64512)!=56320?0:1;}
function L1(b){return !CD(b)&&!C4(b)?0:1;}
function Hi(b,c){return CD(b)&&C4(c)?1:0;}
function Es(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function H5(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function II(b){return (56320|b&1023)&65535;}
function EV(b){return Gx(b)&65535;}
function Gx(b){if(AU6===null){if(AU9===null)AU9=ACt();AU6=AAL((AU9.value!==null?$rt_str(AU9.value):null));}return SC(AU6,b);}
function Ew(b){return Gu(b)&65535;}
function Gu(b){if(AU5===null){if(AU$===null)AU$=ADf();AU5=AAL((AU$.value!==null?$rt_str(AU$.value):null));}return SC(AU5,b);}
function SC(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BE(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function UT(b,c){if(c>=2&&c<=36){b=OO(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function OO(b){var c,d,e,f,g,h,i,j,k,l;if(AU4===null){if(AU_===null)AU_=AAP();c=(AU_.value!==null?$rt_str(AU_.value):null);d=AOJ(Gp(c));e=JI(d);f=BC(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+M4(d)|0;j=j+M4(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AU4=f;}g=AU4.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BE(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function G_(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gm(b){var c;if(b<65536){c=BL(1);c.data[0]=b&65535;return c;}return AAV([H5(b),II(b)]);}
function Ct(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&L1(b&65535))return 19;if(AU7===null){if(AVa===null)AVa=AEi();d=(AVa.value!==null?$rt_str(AVa.value):null);e=Q(Ng,16384);f=e.data;g=E9(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=KA(L(d,l));if(m==64){l=l+1|0;m=KA(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Ba(c,KA(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=KA(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AIy(k,k+i|0,ADK(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AIy(k,k+i|0,ADK(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AU7=Dl(e,j);}e=AU7.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.qW)o=p+1|0;else{c=d.oM;if(b>=c)return d.oZ.data[b-c|0];c=p-1|0;}}return 0;}
function Jr(b){a:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Gh(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ct(b)!=16?0:1;}
function Ph(b){switch(Ct(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function QZ(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Ph(b);}return 1;}
function YL(){AU3=E($rt_charcls());AU8=Q(C7,128);}
function ACt(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ADf(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AAP(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AEi(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Mp=F(0);
var SB=F(0);
var Eh=F(0);
var ADs=F(0);
function D8(){return $rt_globals.window.document;}
var Gy=F(Bo);
function NG(){var a=this;C.call(a);a.oO=null;a.oP=null;a.oQ=null;}
function ANO(a,b){var c,d,e;c=a.oO;d=a.oP;e=a.oQ;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=d.sl;b.qI=c;if(b.us)ABa(c);}}
var ABX=F();
function ACv(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AVb());}return b.data.length;}
function UL(b,c){if(b===null){b=new Gy;V(b);K(b);}if(b===E($rt_voidcls())){b=new BD;V(b);K(b);}if(c>=0)return AQH(b.fK,c);b=new Yd;V(b);K(b);}
function AQH(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var AAX=F();
function Fu(){return ARq();}
function ARq(){return Math.random();}
function Z(b,c){if(b<c)c=b;return c;}
function Bb(b,c){if(b>c)c=b;return c;}
function I3(b){if(b<=0)b= -b|0;return b;}
var Bx=F(Bo);
var IJ=F(Bo);
var O8=F(0);
var Rc=F(0);
var Q4=F(0);
var TG=F(0);
var Xb=F(0);
var UU=F(0);
var Os=F(0);
var YP=F();
function ALi(a,b,c){a.DX($rt_str(b),Lg(c,"handleEvent"));}
function ALG(a,b,c){a.A5($rt_str(b),Lg(c,"handleEvent"));}
function AFH(a,b){return a.vR(b);}
function AMO(a,b,c,d){a.zj($rt_str(b),Lg(c,"handleEvent"),d?1:0);}
function AQy(a,b){return !!a.D2(b);}
function AGJ(a){return a.xb();}
function AEY(a,b,c,d){a.CC($rt_str(b),Lg(c,"handleEvent"),d?1:0);}
var BD=F(Bo);
var Yd=F(Bo);
var G9=F(Bx);
var Z0=F();
function AA8(){return "ping";}
var Or=F(0);
function SK(){var a=this;C.call(a);a.pK=null;a.rv=null;a.lZ=null;a.my=null;a.dC=null;a.tw=null;a.mF=null;a.la=null;a.fY=null;a.h6=0;a.wv=0;a.qQ=null;a.ff=null;a.qa=null;a.lB=null;a.so=0;}
function ACN(a){a.dC.focus();}
function Nq(a,b){var c;c=D8();b=$rt_ustr(b);c.title=b;}
function AAh(a){var b,c,d;b=new Mq;c=a.fY;d=a.la.cl;b.bk=c;b.m=d;b.bO=a;return b;}
function Tk(a){a.wv=$rt_globals.requestAnimationFrame(Bj(a.rv,"onAnimationFrame"));}
function F1(a){a.h6=1;}
function Tj(a,b,c){var d,e;a.la.dv=BX(b,c);d=a.dC;e=b;d.width=e;d=a.dC;e=c;d.height=e;d=a.fY;Bg(d.dG,b,c);e=d.bD;d=d.dG;b=d.b;c=d.a;e.viewport(0,0,b,c);a.ff.cj(a.fY.dG,KB(a));a.ff.bK();}
function Go(a,b){var c,d,e;c=a.qQ;d=a.dC;if(C6(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.qQ=b;}
function Jp(a){return $rt_globals.performance.now()/1000.0;}
function KB(a){return $rt_globals.window.devicePixelRatio;}
function V7(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADW(b,1);else{c=new WS;d=$rt_globals.window.showDirectoryPicker();e=new WR;e.oR=b;e.oS=c;d.then(Bj(e,"f"),Bj(c,"f"));}}
function LM(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADW(b,0);else{c=new Xo;d=$rt_globals.window.showOpenFilePicker();e=new Xn;e.pI=b;e.pH=c;d.then(Bj(e,"f"),Bj(c,"f"));}}
function CO(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.so+1|0;a.so=e;f=a.lB;g=FX(e);f.hw=LY(f,f.hw,g);g=U1(f,g);Mr(g,b);Mr(g,b);f.jl=f.jl+1|0;b=a.qa;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bv)f=$rt_ustr(c);else if(ID(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(ID(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(ID(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof K1)){b=new BD;c=H2(Cn(c));f
=new M;O(f);G(G(f,B(46)),c);Bl(b,N(f));K(b);}c=c;f=c.gx;if(f===null)f=c.e0;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function QM(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new Qx;e.mL=b;b=AEp(c);d.then(Bj(e,"f"),Bj(b,"f"));}
function Uq(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.pK;b=(Gp(b)).data;f=f.decode(b);b=e.writeText(f);e=new UJ;e.r5=c;c=AEp(d);b.then(Bj(e,"f"),Bj(c,"f"));}
function XF(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AEp(b){var c;c=new MJ;c.sf=b;return c;}
var Cb=F(0);
var RO=F();
function ABp(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(Bq(B(47),c)){d=new M7;EP(d,b);b=$rt_globals.fetch("test.wasm");e=new Ne;b=b.then(Bj(e,"f"));e=new Nd;b=b.then(Bj(e,"f"));e=new Nc;f=new Nb;b.then(Bj(e,"f"),Bj(f,"f"));}else if(!Bq(B(48),c))d=(APq(I(c)<=0?B(31):Dk(c,1))).b$(b);else{d=new VY;AAY(d,b);d.G.d4=1;d.D.d4=1;c=new XS;c.t9=d;V9(d,c,B(49));c=new XX;c.n4=d;V9(d,c,B(50));}return d;}
var Bh=F(0);
var ABi=F();
var AAU=F();
var Q8=F(0);
function VM(){C.call(this);this.oq=null;}
function AJW(a,b){var c,d;c=b;b=a.oq;if(!(!b.ff.cK(c/1000.0)&&!b.h6)){d=b.fY.dG;if(Ba(d.b,d.a)){b.h6=0;b.ff.bK();}}Tk(b);}
function VF(){C.call(this);this.uK=null;}
function Dh(a){F1(a.uK);}
var PV=F(0);
function VG(){C.call(this);this.rk=null;}
function AH2(a,b,c){var d,e,f,g;c=a.rk;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dC){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=KB(c);Tj(c,Hc(f.width*g),Hc(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Tj(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var ADB=F();
function APa(b,c){AOb(b,c,AE9());}
function AE9(){return {box:'device-pixel-content-box'};}
function AOb(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cl=F(0);
function VD(){C.call(this);this.nO=null;}
function ANW(a,b){b=a.nO;b.ff.cj(b.fY.dG,KB(b));b.ff.bK();}
var KW=F(0);
function EA(){C.call(this);this.j8=null;}
var Ek=F(0);
var XE=F(0);
var M1=F(0);
function OU(){var a=this;EA.call(a);a.hw=null;a.jh=null;a.xr=null;a.jl=0;}
function U1(a,b){var c,d;c=a.hw;while(true){if(c===null)return null;d=Js(a.jh,b,c.iJ);if(!d)break;c=d>=0?c.bY:c.bL;}return c;}
function LY(a,b,c){var d,e;if(b===null){b=new Jo;d=null;b.iJ=c;b.h9=d;b.fi=1;b.fr=1;return b;}e=Js(a.jh,c,b.iJ);if(!e)return b;if(e>=0)b.bY=LY(a,b.bY,c);else b.bL=LY(a,b.bL,c);Ei(b);return JH(b);}
function J6(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Js(a.jh,c,b.iJ);if(d<0)b.bL=J6(a,b.bL,c);else if(d>0)b.bY=J6(a,b.bY,c);else{e=b.bY;if(e===null)return b.bL;f=b.bL;g=Q(Jo,e.fi).data;h=0;while(true){b=e.bL;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bY;while(h>0){h=h+(-1)|0;j=g[h];j.bL=b;Ei(j);b=JH(j);}e.bY=b;e.bL=f;Ei(e);b=e;}Ei(b);return JH(b);}
function VE(){C.call(this);this.tI=null;}
function AO9(a,b){var c,d,e,f,g,h,i,j,k;c=a.tI.lB;b=b.data;if(!(b===AA8()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BD;V(b);K(b);}if(b.length<1){b=new BD;V(b);K(b);}d=FX(b[0]);e=U1(c,d);if(e===null)c=null;else{c.hw=J6(c,c.hw,d);c.jl=c.jl+1|0;c=e.h9;}f=Q(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=FA(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new SS;ADg(e);e.hb=k;}else e=(k instanceof $rt_globals.File?1:0)?AB3(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:AB3(k,null);g[h]=e;h=j;}c.l(f);}}
function Pf(){var a=this;C.call(a);a.cl=null;a.gV=null;a.wM=null;a.dv=null;}
function MY(){return (D8()).activeElement;}
function CS(a,b,c,d){b.addEventListener($rt_ustr(c),Bj(d,"handleEvent"));return W1(a,b,c,d);}
function ACg(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bj(d,"handleEvent"),!!e);return W1(a,b,c,d);}
function W1(a,b,c,d){var e;e=new PR;e.vD=b;e.vI=c;e.vG=d;return e;}
function TW(a,b){var c;c=new U4;c.uE=b;return c;}
function EB(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gV.getBoundingClientRect();e=BX(Hc((b.clientX-d.left)*c),Hc((b.clientY-d.top)*c));f=new Bk;g=a.dv;f.b=g.b;f.a=g.a;d=new Mm;Ur(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.h=e;d.vl=f;return d;}
function X4(a,b,c){var d,e,f,g;d=new ON;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Ur(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.jF=0;d.dE=e;d.bh=f;d.hh=c;d.rx=g;return d;}
function DL(a,b){b.stopPropagation();b.preventDefault();}
function AAp(a,b){var c;c=new XB;c.o$=b;b.onpointerdown=Bj(c,"f");c=new XC;c.nQ=b;b.onpointerup=Bj(c,"f");}
function Lc(){var a=this;C.call(a);a.qO=null;a.cB=null;a.bD=null;a.sH=null;a.wb=0;a.w9=0;a.jo=null;a.xI=null;a.xo=null;a.wt=null;a.f2=null;a.hg=null;a.xw=null;a.oy=null;a.dG=null;a.ul=null;a.k5=0;a.jB=0;a.lK=0;a.lt=0;a.hV=0;a.lH=null;}
function Hh(a,b,c){return GN(a,b,c,400,0);}
function CK(a,b,c){return My(a.qO,b,c);}
function Gw(a,b){var c,d,e,f,g;c=a.bD;d=b.bl;e=b.bz;f=b.bi;g=b.bA;c.clearColor(d,e,f,g);a.bD.clear(16384);}
function CJ(a,b){var c;if(b==a.jB)return b;if(!b)a.bD.disable(3042);else{a.bD.enable(3042);a.bD.blendFuncSeparate(770,771,1,1);}c=a.jB;a.jB=b;return c;}
function Lt(a,b,c,d){var e,f,g;a.lt=1;a.hV=1;e=a.lH;f=d.b;g=d.a;e.qZ=b;e.q0=c;e.qY=f;e.qX=g;Us(a);}
function Iy(a){a.lt=0;a.hV=0;Us(a);}
function Us(a){var b,c,d,e,f,g;b=a.lK;c=a.lt;if(b!=c){a.lK=c;if(!c)a.bD.disable(3089);else a.bD.enable(3089);}if(a.lK&&a.hV){a.hV=0;d=a.bD;e=a.lH;b=e.qZ;c=a.dG.a-e.q0|0;f=e.qX;c=c-f|0;g=e.qY;d.scissor(b,c,g,f);}}
function KT(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.oy;c=a.k5;d=b.ge.r_;e=b.d$;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.d$;h=b.mC;e.bindBuffer(34962,h);i=b.ge.l4.data;g=i.length;j=0;while(j<g){k=i[j];l=b.d$;m=k.g2;n=k.eT;o=b.ge.kh*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.eT|0;j=j+1|0;}a:{e=b.uH;if(e!==null){c=0;b.d$.bindBuffer(34962,e);i=b.ge.qL.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.d$;j=e.g2;p=e.eT;m=e.oH;n=b.ge.o4;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.eT|0;g=g+1|0;}}}q=b.t1;if(q===null){c=b.rC;if(c>0)b.d$.drawArrays(4,0,c);}else{b.d$.bindBuffer(34963,q);k=b.d$;g=b.ue;k.drawElements(4,g,5123,0);}a.k5=d;}
function By(a,b,c,d,e){K5(a,a.jo);L_(a.jo,a.bD,b,c,d,a.dG);d=a.jo;Ic(a.bD,d.tH,e);KT(a);}
function EG(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;K5(a,a.f2);L_(a.f2,a.bD,b,c,d,a.dG);Un(a.f2,a.bD,f);d=a.f2;j=a.bD;f=f.fm;b=f.b;c=f.a;k=e.bl;l=b;m=k/l;k=e.bz;n=c;o=k/n;k=e.bi/l;l=e.bA/n;d=d.ti;j.uniform4f(d,m,o,k,l);d=a.f2;e=a.bD;Ic(e,d.ph,g);Ic(e,d.m5,h);d=d.oe;e.uniform2f(d,i,0.0);KT(a);}
function CU(a){var b,c;b=new Jn;c=a.sH;b.fm=new Bk;b.dX=c;b.eN=c.dm.createTexture();AVc=AVc+1|0;return b;}
function NL(a,b){Xd(a.bD,b);}
function K5(a,b){var c,d;if(b!==a.ul){c=a.bD;d=b.cn;c.useProgram(d);a.ul=b;}}
function AC6(){var a=this;Lc.call(a);a.wQ=null;a.xp=null;}
function ASR(a,b){var c=new AC6();AKg(c,a,b);return c;}
function AKg(a,b,c){var d,e,f,g,h,i,j,k,l;d=new Uv;a.dG=new Bk;a.k5=0;a.lH=new WL;a.qO=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(51)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bD=b;a.cB=My(d,4,4);g=AEN(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BL(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;k=new PT;Zd();f=AVd;k.d$=b;k.ge=f;k.rC=h.length/f.kh|0;k.ue
=j.length;f=b.createBuffer();k.mC=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);k.uH=null;f=b.createBuffer();k.t1=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}d=null;b.bindBuffer(34962,d);f=null;b.bindBuffer(34963,f);a.oy=k;a.w9=Kz(e,B(52));f=new PU;f.dm=b;a.sH=f;l=b.getParameter(3379);a.wb=l;f=new M;O(f);T(G(f,B(53)),l);$rt_globals.console.info($rt_ustr(N(f)));g=Q(D9,6);i=g.data;d=new Wi;LA(d,b,B(54),B(55),AVd);f=d.cn;d.tH=b.getUniformLocation(f,"uColor");a.jo=d;i[0]
=d;f=ASl(b,B(56));a.xI=f;i[1]=f;f=new QH;LA(f,b,B(54),B(57),AVd);a.xo=f;i[2]=f;f=ATF(b);a.wt=f;i[3]=f;f=ASS(b);a.f2=f;i[4]=f;f=ATQ(b);a.hg=f;i[5]=f;a.xw=g;Xd(b,B(58));a.xp=new Ut;a.wQ=c;}
function GN(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=a.cB;g=ZQ(b,c,d,e);Jb(f,g);h=f.bn.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Eo(f,B(59));m=Eo(f,B(60));h=new K2;h.lP=b;h.vS=c;n=c|0;if(n!==c){b=new M;O(b);Fj(G(b,B(61)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.oF=n;h.vZ=d;h.ws=e;h.dt=i;h.eg=j;h.vP=l;h.lC=k;h.mI=g;h.qH=Dg(i);h.xh=Dg(h.eg);d=m*32.0|0;n=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;a:{h.vW=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(62);}h.vC=b;return h;}
function CC(){C.call(this);this.bj=null;}
function EP(a,b){a.bj=b;}
function AQ8(a,b){return 0;}
var I6=F();
var AUH=null;function Js(a,b,c){return b.jn(c);}
function ABu(){AUH=new I6;}
function Z6(){var a=this;C.call(a);a.b3=null;a.l1=null;a.bt=null;a.df=null;a.ej=null;a.fn=null;a.fS=null;a.jg=null;a.jX=null;a.cZ=null;a.hf=null;a.nL=0;}
function ATr(a){var b=new Z6();ANp(b,a);return b;}
function ANp(a,b){a.b3=CH(Q(Cs,0));a.l1=CH(Q(Cs,0));a.bt=CH(Q(Cw,0));a.df=CH(Q(DE,0));a.ej=CH(Q(Ev,0));a.fn=CH(Q(EH,0));a.fS=CH(Q(E8,0));a.jg=CH(Q(Bh,0));a.jX=CH(Q(Bh,0));a.cZ=b;}
function T3(a,b){var c,d,e,f;Dh(a.cZ);c=(Co(!b.hh?a.l1:a.b3)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bB(b);if(f)break;if(b.jF)break;e=e+1|0;}return f;}
function QI(a,b,c){var d,e,f;Dh(a.cZ);d=(Co(a.fn)).data;e=d.length;f=0;while(f<e){if(d[f].gi(b,c))return 1;f=f+1|0;}return 0;}
function Wz(){C.call(this);this.mW=null;}
function ANl(a,b){var c;c=a.mW;if(T3(c.cl,X4(c,b,1)))DL(c,b);}
function WA(){C.call(this);this.r3=null;}
function ANB(a,b){var c;c=a.r3;if(T3(c.cl,X4(c,b,0)))DL(c,b);}
function WB(){C.call(this);this.n$=null;}
function ALX(a,b){var c,d,e,f,g,h,i;c=a.n$;if(c.dv!==null){a:{b:{d=EB(c,b);e=c.cl;Dh(e.cZ);f=e.hf;if(f!==null)f.l(d);else{g=(Co(e.bt)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bR(d))break a;i=i+1|0;}}}}DL(c,b);}}
function WC(){C.call(this);this.uF=null;}
function ALj(a,b){var c,d,e,f,g,h;c=a.uF;b.button;if(c.dv!==null)a:{d=EB(c,b);c=c.cl;e=b.button;Dh(c.cZ);if(c.hf===null){f=(Co(c.bt)).data;g=f.length;h=0;while(h<g){b=f[h].b5(d,e);if(b!==null){c.hf=b;c.nL=e;break a;}h=h+1|0;}}}}
function WD(){C.call(this);this.q$=null;}
function ALK(a,b){var c,d,e,f,g,h,i;c=a.q$;b.button;if(c.dv!==null){d=EB(c,b);e=c.cl;f=b.button;Dh(e.cZ);if(f==e.nL&&e.hf!==null)e.hf=null;g=(Co(e.bt)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cL(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DL(c,b);}}
function WE(){C.call(this);this.no=null;}
function AN$(a,b){var c,d,e,f,g,h,i,j,k;c=a.no;if(c.dv!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cl;f=EB(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dh(e.cZ);i=(Co(e.df)).data;j=i.length;k=0;b:{while(k<j){if(i[k].cW(f,d,h))break b;k=k+1|0;}}DL(c,b);}}
function WF(){C.call(this);this.uV=null;}
function AJz(a,b){var c,d,e,f,g,h,i,j;c=a.uV;if(c.dv!==null){d=EB(c,b);e=c.cl;f=b.button;g=b.detail;Dh(e.cZ);h=(Co(e.bt)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cp(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DL(c,b);}}
function WG(){C.call(this);this.rn=null;}
function ARw(a,b){var c,d,e,f,g,h,i;c=a.rn;if(c.dv!==null){d=EB(c,b);e=c.cl;Dh(e.cZ);f=(Co(e.ej)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bB(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DL(c,b);}}
function WH(){C.call(this);this.nz=null;}
function AIK(a,b){var c,d,e;b=a.nz.cl;c=(Co(b.jX)).data;d=c.length;e=0;while(e<d){c[e].p();e=e+1|0;}Dh(b.cZ);}
function WI(){C.call(this);this.tS=null;}
function APf(a,b){var c,d,e;b=a.tS.cl;c=(Co(b.jg)).data;d=c.length;e=0;while(e<d){c[e].p();e=e+1|0;}Dh(b.cZ);}
function XZ(){C.call(this);this.th=null;}
function AQ9(a,b){var c;c=a.th;if(c.dv!==null)EB(c,b);}
function X0(){C.call(this);this.sh=null;}
function ALy(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.sh;if(MY()===c.gV){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Co(c.cl.fS)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dj();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cl.cZ;m=new Nz;m.t3=k;m.t4=l;g.getAsString(Bj(m,"accept"));DL(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(63)),k),B(64)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function X1(){C.call(this);this.mh=null;}
function AL0(a,b){var c;c=a.mh;if(MY()===c.gV&&QI(c.cl,TW(c,b),0))DL(c,b);}
function X2(){C.call(this);this.ua=null;}
function ANQ(a,b){var c;c=a.ua;if(MY()===c.gV&&QI(c.cl,TW(c,b),1))DL(c,b);}
var Ui=F(0);
var Uv=F();
function My(a,b,c){var d,e,f;d=new Rm;AUY=AUY+1|0;d.ln=b;d.ky=c;e=(D8()).createElement("canvas");d.jm=e;f=b;e.width=f;e=d.jm;f=c;e.height=f;d.bn=d.jm.getContext("2d");return d;}
var Ut=F();
function AKD(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Mq(){var a=this;C.call(a);a.bk=null;a.m=null;a.bO=null;}
function ADO(){var a=this;C.call(a);a.gZ=null;a.iq=null;a.gP=0;}
function CH(a){var b=new ADO();AJt(b,a);return b;}
function AJt(a,b){a.gZ=b;}
function W(a,b){var c,d,e;c=a.gP;d=a.gZ;if(c==d.data.length)a.gZ=Dl(d,c+4|0);d=a.gZ.data;e=a.gP;a.gP=e+1|0;d[e]=b;a.iq=null;}
function Co(a){var b;b=a.iq;if(!(b!==null&&b.data.length==a.gP))a.iq=Dl(a.gZ,a.gP);return a.iq;}
var IN=F(0);
var Cs=F(0);
var Cw=F(0);
function AKI(a,b){return 0;}
function AQf(a,b,c){return null;}
function AFq(a,b,c){return 0;}
function AN9(a,b,c,d){return 0;}
var DE=F(0);
var Ev=F(0);
var EH=F(0);
var EM=F(0);
var E8=F(0);
function P4(){C.call(this);this.v9=null;}
function Bk(){var a=this;C.call(a);a.b=0;a.a=0;}
function BX(a,b){var c=new Bk();ZZ(c,a,b);return c;}
function ZZ(a,b,c){a.b=b;a.a=c;}
function CA(a,b){a.b=b.b;a.a=b.a;}
function Bg(a,b,c){a.b=b;a.a=c;}
function Yi(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);T(G(T(G(d,B(65)),b),B(66)),c);return N(d);}
function K4(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function WL(){var a=this;C.call(a);a.qZ=0;a.q0=0;a.qY=0;a.qX=0;}
var AC5=F();
var Zh=F(0);
function PU(){C.call(this);this.dm=null;}
function Lx(){var a=this;C.call(a);a.cn=null;a.xj=null;}
function AB2(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(67):B(68);d=$rt_str(b.getShaderInfoLog(e));g=new M;O(g);G(G(g,f),d);f=N(g);b.deleteShader(e);Br(Bu(),f);b=new Bo;Bl(b,f);K(b);}
function D9(){var a=this;Lx.call(a);a.ny=null;a.pe=null;a.lf=null;}
function AVe(a,b,c,d){var e=new D9();LA(e,a,b,c,d);return e;}
function LA(a,b,c,d,e){var f,g,h,i,j,k;a.xj=e;f=AB2(b,35633,c);d=AB2(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.cn=g;h=e.rQ.data;i=h.length;j=0;while(j<i){c=h[j];d=a.cn;k=c.g2;c=c.px;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.cn;b.linkProgram(c);if(b.getProgramParameter(c,35714)){Xd(b,B(69));a.lf=new Bk;c=a.cn;a.ny=b.getUniformLocation(c,"uResolution");c=a.cn;a.pe=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bo;c=new M;O(c);G(G(c,B(70)),d);Bl(b,N(c));K(b);}
function Z8(a,b,c){var d,e,f;if(!K4(a.lf,c)){CA(a.lf,c);d=a.ny;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function L_(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.pe;b.uniform4f(e,i,l,h,j);Z8(a,b,f);}
function Wi(){D9.call(this);this.tH=null;}
function Ez(){D9.call(this);this.q5=null;}
function ASl(a,b){var c=new Ez();T0(c,a,b);return c;}
function AVf(a,b,c){var d=new Ez();T4(d,a,b,c);return d;}
function T0(a,b,c){T4(a,b,B(54),c);}
function T4(a,b,c,d){Zd();LA(a,b,c,d,AVd);c=a.cn;a.q5=b.getUniformLocation(c,"sDiffuse");}
function Un(a,b,c){var d;d=a.q5;b.uniform1i(d,0);b.activeTexture(33984);c=c.eN;b.bindTexture(3553,c);}
var QH=F(D9);
function ACK(){Ez.call(this);this.wg=null;}
function ATF(a){var b=new ACK();AIS(b,a);return b;}
function AIS(a,b){var c;T0(a,b,B(71));c=a.cn;a.wg=b.getUniformLocation(c,"uContrast");}
function ACj(){var a=this;Ez.call(a);a.ti=null;a.ph=null;a.m5=null;a.oe=null;}
function ASS(a){var b=new ACj();AN5(b,a);return b;}
function AN5(a,b){var c;T4(a,b,B(72),B(73));c=a.cn;a.ti=b.getUniformLocation(c,"uTexTransform");c=a.cn;a.ph=b.getUniformLocation(c,"uColor");c=a.cn;a.m5=b.getUniformLocation(c,"uBgColor");c=a.cn;a.oe=b.getUniformLocation(c,"uContrast");}
function ZA(){var a=this;Ez.call(a);a.uI=null;a.uG=null;a.pT=null;}
function ATQ(a){var b=new ZA();AIg(b,a);return b;}
function AIg(a,b){var c,d;T0(a,b,B(74));c=a.cn;a.uI=b.getUniformLocation(c,"uColorB");d=a.cn;a.uG=b.getUniformLocation(d,"uColorF");d=a.cn;a.pT=b.getUniformLocation(d,"uContrast");}
var RX=F(0);
var AEq=F(0);
function Ic(b,c,d){var e,f,g,h;e=d.bl;f=d.bz;g=d.bi;h=d.bA;b.uniform4f(c,e,f,g,h);}
function Xd(b,c){var d,e;d=b.getError();if(d){b=Bu();e=new M;O(e);T(G(e,c),d);Br(b,N(e));}}
function PR(){var a=this;C.call(a);a.vD=null;a.vI=null;a.vG=null;}
function PT(){var a=this;C.call(a);a.d$=null;a.ge=null;a.mC=null;a.uH=null;a.t1=null;a.rC=0;a.ue=0;}
function Cj(){var a=this;C.call(a);a.vA=null;a.cY=0;}
function C_(a,b,c){a.vA=b;a.cY=c;}
function GI(){var a=this;Cj.call(a);a.rQ=null;a.l4=null;a.qL=null;a.kh=0;a.o4=0;a.r_=0;}
var AVd=null;var AVg=null;function Zd(){Zd=Bm(GI);AJ9();}
function AJ9(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new GI;c=Q(DV,2);d=c.data;AQr();d[0]=AVh;d[1]=AVi;Zd();C_(b,B(75),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];YO();switch(AVj.data[l.lw.cY]){case 1:f=f+l.eT|0;h=h+1|0;break a;case 2:e=e+l.eT|0;g=g+1|0;break a;default:}}i=i|1<<l.g2;k=k+1|0;}b.rQ=c;b.kh=e;b.o4=f;b.r_=i;c=Q(DV,g);m=c.data;b.l4=c;c=Q(DV,h);n=c.data;b.qL=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];YO();switch(AVj.data[l.lw.cY]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}AVd=b;c=Q(GI,1);c.data[0]=b;AVg=c;}
var L$=F(0);
var Tm=F(0);
var UK=F(0);
var Gj=F();
function Jl(){Gj.call(this);this.va=null;}
function AAx(){var a=this;Jl.call(a);a.w6=0;a.kt=0;a.ij=null;a.j1=null;a.sz=null;}
function AMb(a,b){var c=new AAx();AP_(c,a,b);return c;}
function AP_(a,b,c){a.va=b;b=new M;O(b);a.ij=b;a.j1=BL(32);a.w6=c;AAm();a.sz=AVk;}
function TB(a,b,c,d){var e,$$je;e=a.va;if(e===null)a.kt=1;if(!(a.kt?0:1))return;a:{try{e.jQ(b,c,d);break a;}catch($$e){$$je=Ef($$e);if($$je instanceof Ip){}else{throw $$e;}}a.kt=1;}}
function NU(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ABg(b,c,d-c|0);e=E9(Bb(16,Z(e.length,1024)));g=AA7(e,0,e.data.length);h=a.sz;i=new Pc;b=E9(1);j=b.data;j[0]=63;G6();k=AVl;i.li=k;i.kz=k;c=j.length;if(c&&c>=i.l5){i.vv=h;i.ps=b.eG();i.wZ=2.0;i.l5=4.0;i.oG=BL(512);i.nm=E9(512);k=AVm;if(k===null){i=new BD;Bl(i,B(76));K(i);}i.li=k;i.kz=k;a:while(true){if(i.ie==3){f=new DY;V(f);K(f);}i.ie=2;b:{while(true){try{k=Y5(i,f,g);}catch($$e){$$je=Ef($$e);if($$je instanceof Bo){f=$$je;break a;}else{throw $$e;}}if(Ib(k))
{d=B6(f);if(d<=0)break b;k=DZ(d);}else if(G3(k))break;h=!LT(k)?i.li:i.kz;c:{if(h!==AVm){if(h===AVn)break c;else break b;}d=B6(g);b=i.ps;l=b.data.length;if(d<l){k=AVo;break b;}W3(g,b,0,l);}ED(f,f.V+J9(k)|0);}}l=G3(k);TB(a,e,0,g.V);NS(g);if(!l){while(true){d=i.ie;if(d!=2&&d!=4){f=new DY;V(f);K(f);}f=AVp;if(f===f)i.ie=3;l=G3(f);TB(a,e,0,g.V);NS(g);if(!l)break;}return;}}K(AHt(f));}i=new BD;Bl(i,B(77));K(i);}
function Br(a,b){var c,d,e,f,g,h,i,j;BA(B1(a.ij,b),10);b=a.ij;c=b.N;d=a.j1;if(c>d.data.length)d=BL(c);e=0;f=0;if(e>c){b=new Bx;Bl(b,B(78));K(b);}while(e<c){g=d.data;h=f+1|0;i=b.A.data;j=e+1|0;g[f]=i[e];f=h;e=j;}NU(a,d,0,c);a.ij.N=0;}
function F9(){Gj.call(this);this.wR=null;}
function X8(a){a.wR=E9(1);}
var Lj=F(F9);
var AU1=null;function AKv(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function ACy(){var b;b=new Lj;X8(b);AU1=b;}
function DV(){var a=this;Cj.call(a);a.px=null;a.lw=null;a.eT=0;a.oH=0;a.g2=0;}
var AVh=null;var AVi=null;var AVq=null;function AQr(){AQr=Bm(DV);AJe();}
function AS4(a,b,c,d,e,f,g){var h=new DV();Wa(h,a,b,c,d,e,f,g);return h;}
function Wa(a,b,c,d,e,f,g,h){AQr();C_(a,b,c);a.px=d;a.lw=e;a.eT=f;a.oH=g;a.g2=h;}
function AJe(){var b;b=new DV;ABM();Wa(b,B(79),0,B(80),AVr,2,0,0);AVh=b;b=AS4(B(81),1,B(82),AVr,2,0,1);AVi=b;AVq=H(DV,[AVh,b]);}
function Jc(){var a=this;C.call(a);a.vk=null;a.wj=null;}
function ACQ(b){var c,d;if(Fo(b))K(AAr(b));if(!ACT(L(b,0)))K(AAr(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ACT(d))break a;else K(AAr(b));}}c=c+1|0;}}
function ACT(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Mc=F(Jc);
var AVk=null;function AAm(){AAm=Bm(Mc);AId();}
function AC9(a){var b,c;b=new TC;b.eQ=B(83);G6();c=AVl;b.gH=c;b.lq=c;b.v_=a;b.md=0.3333333432674408;b.wu=0.5;b.ns=E9(512);b.r2=BL(512);return b;}
function AId(){var b,c,d,e,f;b=new Mc;AAm();c=Q(Bv,0);d=c.data;ACQ(B(84));e=d.length;f=0;while(f<e){ACQ(d[f]);f=f+1|0;}b.vk=B(84);b.wj=c.eG();AVk=b;}
var Kk=F();
var AVs=null;var AVj=null;function YO(){YO=Bm(Kk);ANb();}
function ANb(){var b,c;ABM();b=BC((AVt.eG()).data.length);c=b.data;AVj=b;c[AVu.cY]=1;c[AVr.cY]=2;ABO();c=BC((AVv.eG()).data.length);b=c.data;AVs=c;b[AVw.cY]=1;b[AVx.cY]=2;}
function OZ(){var a=this;C.call(a);a.fh=null;a.lU=null;a.jD=null;a.sk=null;a.o3=null;a.pk=null;}
function AAC(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.fh,b,c));}
function MS(a,b){var c,d,e,f,g,h,i,$$je;c=new Bv;d=b;while(a.lU[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.fh,b,d));f=e.data;EL();d=f.length;AAm();g=AVk;h=AA7(e,0,d);a:{try{i=AC9(g);G6();g=Zr(AB6(ADF(i,AVm),AVm),h);break a;}catch($$e){$$je=Ef($$e);if($$je instanceof FK){g=$$je;}else{throw $$e;}}h=new W9;h.iZ=1;h.jj=1;h.he=B(85);h.kA=g;K(h);}if(!g.V&&g.dp==g.lR)c.bX=g.g1;else{f=BL(B6(g));e=f.data;c.bX=f;No(g,f,0,e.length);}return c;}
function M0(a,b){var c,d,e;c=new Bv;d=b>>>1|0;e=d;while(a.jD[e]){e=e+1|0;}d=e-d|0;Hj(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.fh,b,d)));return c;}
var GM=F(Cj);
var AVu=null;var AVr=null;var AVt=null;function ABM(){ABM=Bm(GM);AHI();}
function AH7(a,b){var c=new GM();AC$(c,a,b);return c;}
function AC$(a,b,c){ABM();C_(a,b,c);}
function AHI(){var b;AVu=AH7(B(86),0);b=AH7(B(87),1);AVr=b;AVt=H(GM,[AVu,b]);}
var Gd=F(Cj);
var AVw=null;var AVx=null;var AVv=null;function ABO(){ABO=Bm(Gd);AIl();}
function ARD(a,b){var c=new Gd();Zm(c,a,b);return c;}
function Zm(a,b,c){ABO();C_(a,b,c);}
function AIl(){var b;AVw=ARD(B(88),0);b=ARD(B(89),1);AVx=b;AVv=H(Gd,[AVw,b]);}
var VN=F(D1);
function ACX(){BD.call(this);this.vz=null;}
function AAr(a){var b=new ACX();APH(b,a);return b;}
function APH(a,b){V(a);a.vz=b;}
var Mb=F(0);
function XB(){C.call(this);this.o$=null;}
function AOL(a,b){a.o$.setPointerCapture(b.pointerId);}
function XC(){C.call(this);this.nQ=null;}
function AGf(a,b){a.nQ.releasePointerCapture(b.pointerId);}
function GX(){var a=this;C.call(a);a.lR=0;a.V=0;a.dp=0;a.ha=0;}
function V$(a,b){a.ha=(-1);a.lR=b;a.dp=b;}
function ED(a,b){var c,d,e;if(b>=0&&b<=a.dp){a.V=b;if(b<a.ha)a.ha=0;return a;}c=new BD;d=a.dp;e=new M;O(e);BA(T(G(T(G(e,B(90)),b),B(91)),d),93);Bl(c,N(e));K(c);}
function B6(a){return a.dp-a.V|0;}
function DM(a){return a.V>=a.dp?0:1;}
var Se=F(0);
var K3=F(GX);
function AD8(b){var c,d;if(b>=0)return AND(0,b,BL(b),0,b,0);c=new BD;d=new M;O(d);T(G(d,B(92)),b);Bl(c,N(d));K(c);}
function ABg(b,c,d){return AND(0,b.data.length,b,c,c+d|0,0);}
function No(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bx;i=new M;O(i);T(G(T(G(i,B(93)),g),B(94)),f);Bl(h,N(i));K(h);}if(B6(a)<d){j=new LL;V(j);K(j);}if(d<0){j=new Bx;k=new M;O(k);G(T(G(k,B(95)),d),B(96));Bl(j,N(k));K(j);}g=a.V;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.g1.data[m+a.lE|0];l=l+1|0;c=n;m=o;}a.V=g+d|0;return a;}}b=b.data;j=new Bx;d=b.length;k=new M;O(k);BA(T(G(T(G(k,B(97)),c),B(91)),d),41);Bl(j,N(k));K(j);}
function J4(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.lV){b=new IZ;V(b);K(b);}e=d-c|0;if(B6(a)<e){b=new HT;V(b);K(b);}if(c>I(b)){f=new Bx;d=I(b);b=new M;O(b);BA(T(G(T(G(b,B(98)),c),B(91)),d),41);Bl(f,N(b));K(f);}if(d>I(b)){f=new Bx;c=I(b);b=new M;O(b);T(G(T(G(b,B(99)),d),B(100)),c);Bl(f,N(b));K(f);}if(c>d){b=new Bx;f=new M;O(f);T(G(T(G(f,B(98)),c),B(101)),d);Bl(b,N(f));K(b);}g=a.V;while(c<d){h=g+1|0;i=c+1|0;Sm(a,g,L(b,c));g=h;c=i;}a.V=a.V+e|0;return a;}
function JM(){var a=this;GX.call(a);a.ks=0;a.k$=null;a.wE=null;}
function AA7(b,c,d){var e,f,g;e=b.data;f=new W2;g=e.length;d=c+d|0;V$(f,g);AKd();f.wE=AVy;f.ks=0;f.k$=b;f.V=c;f.dp=d;f.wI=0;f.mw=0;return f;}
function W3(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.mw){e=new IZ;V(e);K(e);}if(B6(a)<d){e=new HT;V(e);K(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bx;j=new M;O(j);T(G(T(G(j,B(102)),h),B(94)),g);Bl(i,N(j));K(i);}if(d<0){e=new Bx;i=new M;O(i);G(T(G(i,B(95)),d),B(96));Bl(e,N(i));K(e);}h=a.V;k=h+a.ks|0;l=0;while(l<d){b=a.k$.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.V=h+d|0;return a;}}b=b.data;e=new Bx;d=b.length;i=new M;O(i);BA(T(G(T(G(i,B(97)),c),B(91)),d),41);Bl(e,N(i));K(e);}
function NS(a){a.V=0;a.dp=a.lR;a.ha=(-1);return a;}
function HC(){C.call(this);this.xA=null;}
var AVn=null;var AVm=null;var AVl=null;function G6(){G6=Bm(HC);ALD();}
function ADQ(a){var b=new HC();ACM(b,a);return b;}
function ACM(a,b){G6();a.xA=b;}
function ALD(){AVn=ADQ(B(103));AVm=ADQ(B(104));AVl=ADQ(B(105));}
var M7=F(CC);
function ALt(a){}
function AJZ(a,b,c){}
function CQ(){var a=this;CC.call(a);a.gb=null;a.s=null;}
function Fg(a,b){var c,d,e;EP(a,b);a.gb=ZN(0,0,64);c=new X6;c.b7=new Bk;c.dT=CH(Q(En,0));c.dQ=new Bk;c.nR=new Bk;c.x9=new BZ;c.x8=new BZ;c.cV=b.bk;d=b.bO;c.iA=d;c.cA=UG(d);d=b.m.jX;e=new Mw;e.m$=c;W(d,e);d=b.m.jg;e=new Mx;e.qq=c;W(d,e);a.s=c;W(b.m.b3,new Sj);b=b.m.b3;c=a.s;BG(c);d=new Sk;d.rW=c;W(b,d);}
function E3(a){Gw(a.bj.bk,a.gb);}
function GR(a,b,c){var d,e,f,g,h;a:{d=a.s;CA(d.b7,b);e=d.bM;if(e!==c){d.bM=c;f=(Co(d.dT)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].gj(e,c);h=h+1|0;}}}}
var Qe=F(0);
var Ly=F(0);
function AD3(a){a.hX(QK());}
function LC(a){var b,c,d,e,f,g,h,i,j,k,l;b=new HQ;c=new IT;d=new G8;AMH();JJ(d,AVz);Li(c,d,BF(AVA),BF(AVB),BF(AVC),BF(AVA),BF(AVD),BF(AVE),BF(AVF),BF(AVG),BF(AVH),BF(AVI));ABm();e=(AVJ.eG()).data;f=e.length;g=Q(IE,f);h=g.data;i=0;while(i<f){h[i]=e[i].kf;i=i+1|0;}j=AAI(S(B(106)),S(B(107)),S(B(108)),S(B(109)));d=new H1;k=new Hy;AJF();l=AVK;JP(k,l,AVL,AVM,AVN,AVO,l);KY(d,k,AAy(),Zf(S(B(110)),S(B(111)),S(B(112))),AAy(),Zw(1,0.17499999701976776),AVP,AVQ);JT(b,c,g,j,d);a.hX(b);}
function ADv(a){var b,c,d,e,f,g,h,i,j,k,l;b=new HQ;c=new IT;d=new G8;ABE();JJ(d,AVR);Li(c,d,BF(AVS),BF(AVT),BF(AVU),BF(AVS),BF(AVV),BF(AVW),BF(AVX),BF(AVY),BF(AVZ),BF(AV0));Z5();e=(AV1.eG()).data;f=e.length;g=Q(IE,f);h=g.data;i=0;while(i<f){h[i]=e[i].kS;i=i+1|0;}j=AAI(S(B(113)),S(B(114)),S(B(115)),S(B(116)));d=new H1;k=new Hy;AOo();l=AV2;JP(k,l,AV3,AV4,AV5,AV6,l);KY(d,k,YZ(),Zf(S(B(117)),S(B(118)),C3(0)),YZ(),Zw(1,0.07500000298023224),AV7,AV8);JT(b,c,g,j,d);a.hX(b);}
var K9=F(0);
function L7(){var a=this;CQ.call(a);a.G=null;a.D=null;a.em=null;a.g6=0;a.rL=null;}
function ASj(a){var b=new L7();AAY(b,a);return b;}
function AAY(a,b){var c,d,e;Fg(a,b);c=ANq(a.s);a.em=c;a.G=ADH(a.s,c);a.D=ADH(a.s,a.em);c=a.G;c.bI=1;d=new QU;d.sE=a;e=new QS;e.ub=a;Qy(c,d,d);Qy(a.D,e,e);c=a.G;d=new QT;d.od=a;c.kG=d;d=a.D;e=new QQ;e.rU=a;d.kG=e;WY(a.s,c);W(b.m.bt,a.em);W(b.m.df,a.em);W(b.m.df,a);W(b.m.bt,a);c=b.m.b3;d=new QR;d.mo=a;W(c,d);c=b.m.b3;d=new HE;e=new QO;e.p1=a;R$(d,b,e);W(c,d);W(b.m.fn,a);W(b.m.fS,a);b=b.m.ej;c=new QP;c.td=a;W(b,c);LC(a);}
function Qk(a,b){if(a.G===b)a.g6=a.g6|1;if(a.D===b)a.g6=a.g6|2;if((a.g6&3)==3)ACi(a);}
function AJJ(a,b,c){if(DW(a.s,a.G))return GA(a.G,b,c);if(!DW(a.s,a.D))return 0;return GA(a.D,b,c);}
function Ze(a){var b,c;if(DW(a.s,a.G)){b=a.G;BG(b);c=new SW;c.tX=b;return c;}if(!DW(a.s,a.D))return null;b=a.D;BG(b);c=new SX;c.qB=b;return c;}
function Wn(a,b,c){var d,e;d=10*b.U|0;if(I3(b.bm-c.bm|0)>d){e=b.bm;c.bm=Hx(Bb(e-d|0,Z(c.bm,e+d|0)),Iu(c));}c.cG=Hx(b.cG,Kg(c));}
function ACi(a){var b,c,d,e,f,g;Br(Bu(),B(119));b=a.G.e;c=a.D.e;d=EE(b.f);e=EE(c.f);f=AD6(b.f);g=AD6(c.f);b=a.bj.bO;c=new ML;c.q9=a;CO(b,c,B(120),H(C,[d,f,e,g]));}
function AIk(a,b){var c,d;c=KV(a.G,b);d=KV(a.D,b);return !c&&!d?0:1;}
function AQk(a){E3(a);L8(a.G);L8(a.D);Wh(a.em);}
function AO8(a){return L9(0);}
function AJn(a){X9(a.G);X9(a.D);}
function AOx(a){WN(a.G);WN(a.D);}
function APd(a,b){X$(a.G,b);X$(a.D,b);}
function AN_(a,b,c){GR(a,b,c);Y3(a,b,c);}
function Y3(a,b,c){var d,e,f;d=new Bk;e=BX(b.b/2|0,b.a);Lz(a.G,d,e,c);f=b.b;d.b=f-(f/2|0)|0;Lz(a.D,d,e,c);}
function AGd(a,b){BG(b);Pz(a.em,b);Lb(a.G,b);Lb(a.D,b);}
function ABl(a,b){if(b.bh!=121)return 0;return 1;}
function ACs(a,b){var c,d,e;if(DW(a.s,a.G)){c=a.em;d=a.G;e=new T$;e.oJ=a;Kw(c,b,d,a,a,e);}if(DW(a.s,a.D)){c=a.em;d=a.D;e=new T_;e.uB=a;Kw(c,b,d,a,a,e);}return 1;}
function ALB(a,b){var c,d;c=DF(a.G,b.h)&&Pi(a.G,b)?1:0;d=DF(a.D,b.h)&&Pi(a.D,b)?1:0;return !c&&!d?0:1;}
function ALx(a,b,c,d){var e,f;e=DF(a.G,b.h)&&QF(a.G,b,c,d)?1:0;f=DF(a.D,b.h)&&QF(a.D,b,c,d)?1:0;return !e&&!f?0:1;}
function AFL(a,b,c){var d,e,f,g,h,i,j,k;d=DF(a.G,b.h);e=DF(a.D,b.h);f=a.s;g=f.d6;h=g!==null?0:1;i=a.G;j=g!==i?0:1;k=g!==a.D?0:1;if(d&&!(!h&&!k))FO(f,i);if(e&&!(!h&&!j))FO(a.s,a.D);if(d){i=U7(a.G,b,c);if(i!==null)return i;}return !e?null:U7(a.D,b,c);}
function AIM(a,b,c){var d,e,f,g;d=DF(a.G,b.h);e=DF(a.D,b.h);f=d&&UZ(a.G,b,c)?1:0;g=e&&UZ(a.D,b,c)?1:0;return !f&&!g?0:1;}
function ANy(a,b,c,d){var e,f,g,h;e=DF(a.G,b.h);f=DF(a.D,b.h);g=e&&JD(a.G,c,d)?1:0;h=f&&JD(a.D,c,d)?1:0;return !g&&!h?0:1;}
function ALe(a){return Ze(a);}
var VY=F(L7);
function AHC(a){return L9(1);}
function V9(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new Xy;d=d.then(Bj(e,"f"));f=new Xw;f.sJ=b;f.sK=c;g=new Xx;d.then(Bj(f,"f"),Bj(g,"f"));}
var AD_=F();
function APq(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(121)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(Le(b)){case -1570047148:if(!Bq(b,B(122)))break a;d=16;break a;case -1519338717:if(!Bq(b,B(123)))break a;d=2;break a;case -1509980539:if(!Bq(b,B(124)))break a;d=12;break a;case -1073555521:if(!Bq(b,B(125)))break a;d=13;break a;case -811765794:if(!Bq(b,B(126)))break a;d=5;break a;case -785237654:if(!Bq(b,B(127)))break a;d=10;break a;case -631889171:if(!Bq(b,B(128)))break a;d=8;break a;case -439438829:if
(!Bq(b,B(129)))break a;d=17;break a;case 2129957:if(!Bq(b,B(130)))break a;d=1;break a;case 3343967:if(!Bq(b,B(131)))break a;d=9;break a;case 3556498:if(!Bq(b,B(132)))break a;d=4;break a;case 485517998:if(!Bq(b,B(133)))break a;d=6;break a;case 544901384:if(!Bq(b,B(134)))break a;d=3;break a;case 1030621992:if(!Bq(b,B(135)))break a;d=15;break a;case 1465713255:if(!Bq(b,B(136)))break a;d=7;break a;case 1554501643:if(!Bq(b,B(137)))break a;d=14;break a;case 1609169232:if(!Bq(b,B(138)))break a;d=11;break a;default:}}b:
{switch(d){case 1:break;case 2:b=new Tc;break b;case 3:case 4:b=new Tb;break b;case 5:b=new Ta;break b;case 6:b=new S_;break b;case 7:b=new S$;break b;case 8:case 9:b=new S9;break b;case 10:b=new S8;break b;case 11:b=new S7;break b;case 12:b=new S6;break b;case 13:b=new QG;break b;case 14:b=new QC;break b;case 15:b=new QE;break b;case 16:b=new QA;break b;case 17:b=new QB;break b;default:b=new Qz;break b;}b=new Td;}return b;}
var ABf=F();
var JZ=F(K3);
function AAZ(){var a=this;JZ.call(a);a.lV=0;a.lE=0;a.g1=null;}
function AND(a,b,c,d,e,f){var g=new AAZ();ARM(g,a,b,c,d,e,f);return g;}
function ARM(a,b,c,d,e,f,g){V$(a,c);a.V=e;a.dp=f;a.lE=b;a.lV=g;a.g1=d;}
function Sm(a,b,c){a.g1.data[b+a.lE|0]=c;}
function KP(){var a=this;C.call(a);a.vv=null;a.ps=null;a.wZ=0.0;a.l5=0.0;a.li=null;a.kz=null;a.ie=0;}
function LF(){var a=this;C.call(a);a.gg=0;a.hO=0;}
var AVp=null;var AVo=null;function Za(a,b){var c=new LF();ZI(c,a,b);return c;}
function ZI(a,b,c){a.gg=b;a.hO=c;}
function Ib(a){return a.gg?0:1;}
function G3(a){return a.gg!=1?0:1;}
function KE(a){return !Qq(a)&&!LT(a)?0:1;}
function Qq(a){return a.gg!=2?0:1;}
function LT(a){return a.gg!=3?0:1;}
function J9(a){var b;if(KE(a))return a.hO;b=new Fh;V(b);K(b);}
function DZ(b){return Za(2,b);}
function Vr(a){var b,c;switch(a.gg){case 0:b=new PW;V(b);K(b);case 1:b=new Xc;V(b);K(b);case 2:b=new Vk;c=a.hO;V(b);b.xU=c;K(b);case 3:b=new PK;c=a.hO;V(b);b.xN=c;K(b);default:}}
function Z$(){AVp=Za(0,0);AVo=Za(1,0);}
var Y1=F();
var Ik=F(0);
var Ne=F();
function AIt(a,b){return b.arrayBuffer();}
var Nd=F();
function AMN(a,b){var c,d;c=new OX;d=new OV;return $rt_globals.WebAssembly.instantiate(b,AKC(Bj(c,"f"),Bj(d,"f")));}
var Nc=F();
function ANw(a,b){AF_(b);}
var Nb=F();
function AGR(a,b){ADT(b);}
function XS(){C.call(this);this.t9=null;}
function AMv(a,b){J7(a.t9.G,b);}
function XX(){C.call(this);this.n4=null;}
function AM$(a,b){J7(a.n4.D,b);}
var Td=F();
function AM5(a,b){return ASj(b);}
var Tc=F();
function AFS(a,b){return AT8(b);}
var Tb=F();
function AJE(a,b){return ASo(b);}
var Ta=F();
function AJB(a,b){var c,d,e;c=new We;Fg(c,b);d=new U3;d.ly=new Bk;d.jV=new Bk;c.rd=d;c.dw=Y8();c.cI=Y8();c.d5=MN(c.s);W(c.s.dT,c);d=b.m.b3;e=new Tf;e.tj=c;W(d,e);W(b.m.bt,c);b=b.m.ej;d=new Ti;d.rV=c;W(b,d);SM(c.cI);c.lc=EQ(B(139),25.0);H4(c.d5,FW(),c.lc);BI(c.gb,C3(43));b=FW();H7(c.dw,b);H7(c.cI,b);b=c.dw;b.ja=new Th;d=c.cI;d.ja=new Te;d.ju=new W$;d.sV=new W_;KO(b,(Nw(0)).iD);KO(c.cI,(Nw(0)).iD);return c;}
var S_=F();
function AKf(a,b){var c,d,e;c=new Xr;Fg(c,b);c.kj=EQ(B(140),15.0);d=AEc();c.ei=d;W(c.s.dT,d);W(c.s.dT,c);BI(c.gb,C3(43));d=MN(c.s);c.g7=d;H4(d,FW(),EQ(B(139),25.0));d=b.m.b3;e=new Ov;e.vs=c;W(d,e);d=b.m.ej;e=new Ow;e.p7=c;W(d,e);W(b.m.bt,Y7(c.g7));W(b.m.bt,c.ei);b=b.m.df;d=c.ei;BG(d);e=new Ox;e.tz=d;W(b,e);return c;}
var S$=F();
function AF0(a,b){var c,d,e;c=new Yc;Fg(c,b);c.fx=Cm();c.e2=Cm();c.os=S(B(141));c.h$=APD();c.fU=0;d=c.s.dT;e=new T5;e.mj=c;W(d,e);W(b.m.bt,c);d=b.m.b3;e=new T6;e.p2=c;W(d,e);b=Hh(b.bk,B(139),35);c.i_=b;c.hR=ADZ(E0(b));BI(c.gb,S(B(142)));return c;}
var S9=F();
function AHE(a,b){var c,d,e,f;c=new O4;EP(c,b);c.fO=ABK();c.dZ=0;c.rM=500;c.ui=Hz(0,0,0,255,new BZ);c.lz=20;c.uz=20;c.oj=AAB();d=b.m.bt;e=new Wv;e.iz=c;f=new Ya;f.ru=e;e.qS=f;W(d,e);d=b.m.df;e=new SQ;e.nC=c;W(d,e);c.d0=b.bk;c.sO=UG(b.bO);TI(c.fO,Hh(c.d0,B(139),c.uz),c.lz,c.d0);c.gG=Hl();return c;}
var S8=F();
function ANk(a,b){var c,d;c=new QW;Gi(c,b);b=b.m.b3;d=new PX;d.uk=c;W(b,d);return c;}
var S7=F();
function AQS(a,b){return ATK(b);}
var S6=F();
function ARK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new WW;Gi(c,b);c.dK=Fd(0,0,300,300);c.eO=SH(0,0,3,3);d=b.bk;b=b.m.bt;e=new TQ;e.kP=c;W(b,e);b=AAl(d);c.po=b;Gf(c.dK,b);GZ(c.dK);b=c.dK.b2;G7();BI(b,AV9);BI(c.dK.bT,CL(204,120,50));ABO();e=AVx;f=E9((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CU(d);YO();switch(AVs.data[e.cY]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Ep;V(b);K(b);}b:
{M9(m,5,5,h);b=m.dX.dm;switch(AVs.data[e.cY]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Ep;V(b);K(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.j9=m;Bg(c.eO.y,Ce(m),C8(c.j9));BI(c.eO.b2,c.ll);return c;}
var QG=F();
function AK9(a,b){var c,d,e;c=new Sg;Gi(c,b);c.f_=Fd(0,0,300,300);c.jJ=new Bk;c.ib=new Bk;c.hn=new Bk;d=b.bk;b=b.m.bt;e=new VX;e.jd=c;W(b,e);b=AAl(d);c.rp=b;Gf(c.f_,b);GZ(c.f_);b=c.f_.b2;G7();BI(b,AV9);BI(c.f_.bT,CL(204,120,50));return c;}
var QC=F();
function AEL(a,b){var c,d,e,f;c=new OG;EP(c,b);c.wx=20;c.x7=11;c.we=220;c.iW=new Bk;c.wV=5000;c.gt=1;c.fj=H(G8,[C3(0),C3(255)]);c.d9=b.bk;d=b.m.bt;e=new Uf;e.i6=c;f=new Pt;f.mT=e;e.pE=f;W(d,e);b=b.m.df;d=new NQ;d.tD=c;W(b,d);b=CK(c.d9,200,220);c.jC=b;FZ(b,B(139),20.0);b=CK(c.d9,200,20);c.e9=b;FZ(b,B(139),20.0);c.hx=Hl();return c;}
var QE=F();
function AIp(a,b){var c,d,e;c=new It;Gi(c,b);W(b.m.bt,c);d=b.m.b3;e=new St;e.ry=c;W(d,e);W(b.m.fn,new Ss);d=b.m.fn;e=new Sq;e.pb=c;W(d,e);W(b.m.fS,new Sp);d=b.m.fS;e=new Sr;e.mY=c;W(d,e);b=!XF(b.bO)?B(143):B(144);d=new M;O(d);G(G(d,B(145)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var QA=F();
function ALo(a,b){var c,d,e,f,g,h,i,j;c=new P0;EP(c,b);c.m7=C3(20);c.e3=Fd(0,0,300,300);d=b.m.b3;e=new RY;e.xB=c;W(d,e);b=b.bk;d=Hh(b,B(10),88);Cy(b.cB,d);f=Eo(b.cB,B(146));g=Eo(b.cB,B(147));if(f>g)g=f;h=Dg(g);i=J1(d,1.1799999475479126);j=Bu();e=new M;O(e);T(G(T(G(e,B(148)),h),B(149)),i);Br(j,N(e));e=CK(b,h,i*2|0);c.hS=e;Cy(e,d);Ch(c.hS,B(146),0.0,d.dt);Ch(c.hS,B(147),0.0,i+d.dt);b=CU(b);c.ld=b;CM(b,c.hS);Gf(c.e3,c.ld);GZ(c.e3);b=c.e3.b2;G7();BI(b,AV9);BI(c.e3.bT,AV$);return c;}
var QB=F();
function AO5(a,b){var c,d,e,f;c=new Ww;Fg(c,b);c.sN=EQ(B(140),20.0);d=AEc();c.d1=d;W(c.s.dT,d);W(c.s.dT,c);BI(c.gb,C3(43));d=MN(c.s);c.gB=d;H4(d,FW(),EQ(B(139),25.0));d=b.m.b3;e=new Ql;e.xy=c;W(d,e);d=b.m.ej;e=new Qm;e.p$=c;W(d,e);W(b.m.bt,Y7(c.gB));W(b.m.bt,c.d1);d=b.m.bt;e=c.s.cA;f=new Rs;f.l_=e;W(d,f);b=b.m.df;d=c.d1;BG(d);e=new Qn;e.rA=d;W(b,e);return c;}
var Qz=F();
function AEB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=new Rf;Yl(c,b);d=c.cJ;e=new Iv;f=AJg(B(150));g=Q(Bv,8);h=I(B(151));i=0;j=0;k=h+1|0;while(true){l=GC(B(151),10,j);m=l>=0?B$(B(151),j,l):Dk(B(151),j);n=i+1|0;g=AC1(m,g,i);j=l<0?k:l+1|0;if(j>h)break;i=n;}Qo(e,ZG(g,n),B(152),f);J7(d,e);return c;}
function G5(){var a=this;C.call(a);a.bC=0;a.cf=0;a.cX=0;a.iC=0;}
function AV_(a,b,c,d){var e=new G5();Ur(e,a,b,c,d);return e;}
function Ur(a,b,c,d,e){a.bC=d;a.cf=b;a.cX=c;a.iC=e;}
function ON(){var a=this;G5.call(a);a.dE=null;a.bh=0;a.hh=0;a.rx=0;a.jF=0;}
var ADc=F();
function Wl(b,c){return (b+(c/2|0)|0)/c|0;}
function PB(b,c,d){if(b<(2147483647/c|0))return Wl(Ba(b,c),d);return 0.5+c*b/d|0;}
function IB(b,c){return ((b+c|0)-1|0)/c|0;}
function Hc(b){return b+0.5|0;}
function Dg(b){return b+0.5|0;}
function Et(b,c,d){return Bb(b,Z(c,d));}
function Mm(){var a=this;G5.call(a);a.h=null;a.vl=null;}
var Uk=F(0);
function Nz(){var a=this;C.call(a);a.t3=null;a.t4=null;}
function AK1(a,b){var c,d;c=a.t3;d=a.t4;$rt_globals.console.info("paste plain string "+b);c.l(FA(b));Dh(d);}
function U4(){C.call(this);this.uE=null;}
function Wk(a,b){a.uE.clipboardData.setData("text/plain",$rt_ustr(b));}
function W2(){var a=this;JM.call(a);a.wI=0;a.mw=0;}
function ACA(){var a=this;C.call(a);a.dY=null;a.dM=null;a.dk=null;a.b8=null;a.ba=null;}
function ANq(a){var b=new ACA();AKw(b,a);return b;}
function AKw(a,b){a.dM=AEc();a.dY=b;a.b8=MN(b);}
function Pz(a,b){var c;a.ba=b;c=a.dk;if(c!==null)c.ec=b.T;H4(a.b8,b.T,b.qf);}
function Wh(a){I5(a.dM,a.dY.cV);Im(a.b8);}
function AOg(a,b){return !Zn(a.dM,b)&&!Kq(a.b8,b)?0:1;}
function ARQ(a,b,c,d){return !ABd(a.dM,b,c,d)&&!Jk(a.b8,b,c,d)?0:1;}
function AGg(a,b,c){var d;d=Jf(a.b8,b,c);if(d!==null)return d;return Yj(a.dM,b,c);}
function AML(a,b,c){return !AEb(a.dM,b,c)&&!DI(a.b8)?0:1;}
function Vi(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.e;h=ANs();i=c.i;j=0;while(j<i){if(f===null){k=(Bp(c,j)).bs;l=RS(EJ(B2(g.f,k)));m=VJ(g.fR);}else{n=f.data;k=n[j].jR.kw;l=!C6(g.fR,n[j].hY)?B(31):RS(EJ(B2(g.f,k)));m=VJ(n[j].hY);}if(I(l)>153){o=B$(l,0,150);n=new M;O(n);G(G(n,o),B(153));l=N(n);}if(I(m)>153){o=B$(m,0,150);n=new M;O(n);G(G(n,o),B(153));m=N(n);}p=C5(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Bp(c,j);}if(f!==null){q=new Uu;q.m2=d;q.m1=o;}else{q=new Uw;q.vg=d;q.vb=n;}M3(h,
m,p,l,q);j=j+1|0;}r=QN(h);if(a.dk!==null)T8(a);c=new QV;n=a.dY;o=new Sv;o.ol=a;o.ok=d;AAn(c,n,o);V0(c,r);d=a.ba;XQ(c,d.T,d.sT);a.dk=ABH(a.dY);d=Zu(c,a.dY);n=a.ba.T;Qu(d,n.lx,n.jZ);LI(a.dk,d);d=a.dk;n=new M;O(n);G(G(n,B(154)),e);IC(d,N(n),a.ba.pd,4.0);d=a.dk;d.ec=a.ba.T;IS(a.dM,d);d=a.dk;s=(d.S.q.a+Cv(d.bp,2.0)|0)+Cv(a.dY,2.0)|0;i=(c.dJ+c.dL|0)+c.fP|0;t=Cv(c.cv,5.0);e=BX(Et(t,b.b,c.cv.b7.b-i|0),Et(s,b.a,c.cv.b7.a-c.cE.a|0));Tp(c);ZJ(c);s=(c.dJ+c.dL|0)+c.fP|0;b=c.cv;i=(b.b7.b-e.b|0)-Cv(b,5.0)|0;b=c.cv;t=(b.b7.a
-e.a|0)-Cv(b,5.0)|0;d=BX(Z(s,i),Z(c.cE.a,t));Fm(a.dk,e,d);FO(a.dY,c);}
function T8(a){J5(a.dM,a.dk);JR(a.dk);a.dk=null;}
function Nn(a,b){var c;c=new Sl;c.tq=a;c.tu=b;return c;}
function Kw(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(!DI(a.b8)){g=a.b8;h=b.h;b=new SV;b.W=a;b.bH=c;b.n9=f;b.hH=e;b.it=d;i=PJ();e=b.bH.e;d=Do(e);e=GV(e);f=b.bH.el;if(VH(f,d,e)!==null){j=b.W.ba.T.bg;k=new Rw;k.nI=b;k.nH=h;D3(i,B(155),j,k);}if(KM(f,d,e)!==null){j=b.W.ba.T.bg;k=new Rv;k.oU=b;k.oW=h;D3(i,B(156),j,k);}if(Nk(f,d,e)!==null){e=b.W.ba.T.bg;f=new Rt;f.m0=b;f.m3=h;D3(i,B(157),e,f);}e=b.W.ba.T.bg;f=new Ru;f.uZ=b;f.u0=h;D3(i,B(158),e,f);if(!b.bH.d4){e=b.W.ba.T.bg;f=new Pp;f.tt=b;D3(i,B(159),e,f);}e=b.W.ba.T.bg;f
=new Pn;f.p3=b;D3(i,B(160),e,f);if(!b.bH.d4&&XF(IA(b))){e=b.W.ba.T.bg;f=new Pq;f.sr=b;D3(i,B(161),e,f);}l=b.W.ba.T.bg;d=PJ();m=b.W.ba.T.bg;n=Q(C$,3);o=n.data;k=b.it;BG(k);e=new SO;e.nN=k;o[0]=D4(B(162),m,e);k=b.W.ba.T.bg;p=b.it;BG(p);e=new SP;e.ri=p;o[1]=D4(B(163),k,e);e=b.W.ba.T.bg;j=b.it;BG(j);k=new SN;k.u8=j;o[2]=D4(B(164),e,k);Jy(d,B(165),m,FQ(n),AWa);f=b.W.ba.T.bg;n=Q(C$,2);o=n.data;k=b.hH;BG(k);j=new N9;j.rI=k;o[0]=D4(B(166),f,j);j=b.W.ba.T.bg;k=b.hH;BG(k);p=new N8;p.qv=k;o[1]=D4(B(167),j,p);GF(d,B(168),
f,FQ(n));f=b.W.ba.T.bg;j=new Vf;j.q6=b;Jy(d,B(169),f,j,AWa);GF(i,B(170),l,Hm(d));k=b.W.ba.T.bg;d=PJ();GF(d,B(171),b.W.ba.T.bg,AEt(b));f=b.W.ba.T.bg;m=new Wc;m.sG=b;D3(d,B(172),f,m);GF(i,B(173),k,Hm(d));F_(g,h,Hm(i),Nn(a,c));}}
function ALg(a,b,c,d){return K8(a.dM,b,c,d);}
function YS(b){var c;c=new V2;c.tM=b;return c;}
var HM=F(0);
function AHg(a){}
function ARX(a){}
function AAD(){var a=this;C.call(a);a.bd=null;a.cz=null;a.cg=null;a.Q=null;a.ik=null;a.rf=0;a.lp=null;a.cM=null;a.w=0;a.x=0;a.gY=0;a.kL=0;a.fX=0;a.iS=null;a.eJ=null;a.cx=null;a.U=0;a.e=null;a.uY=null;a.el=null;a.r=null;a.fs=null;a.er=null;a.lY=null;a.gl=null;a.tO=0;a.rS=0;a.rO=0;a.cH=0;a.cU=0;a.ck=0;a.eX=null;a.eh=null;a.ee=null;a.bm=0;a.cG=0;a.g3=0;a.hT=0;a.hI=0;a.vV=0;a.vo=0;a.jb=0;a.kD=0;a.dR=null;a.hE=0;a.hD=0;a.eI=null;a.d4=0;a.bI=0;a.h8=null;a.hW=null;a.vB=null;a.gL=null;a.nt=null;a.u$=null;a.kG=null;a.kF
=0;a.rc=null;a.eL=Em;a.tg=null;a.tG=null;}
function ADH(a,b){var c=new AAD();AJ1(c,a,b);return c;}
function AJ1(a,b,c){var d,e,f,g;a.bd=new Bk;a.cz=new Bk;a.rf=0;a.lp=Q(Bh,10);a.cM=AMI();a.fX=16;a.iS=B(139);a.cx=Q(K2,4);d=new Iv;e=new HK;e.d_=Gv();e.ev=Gv();e.fg=Cm();e.C=MO(B(31));e.fz=0;e.cs=0;e.c_=Ua(e);d.f=e;d.iR=B(174);d.fR=null;a.e=d;f=new VZ;f.mV=CH(Q(Me,0));f.sB=CH(Q(Me,0));f.s0=CH(Q(Mz,0));f.om=CH(Q(P1,0));f.mi=CH(Q(GS,0));f.rj=CH(Q(Rn,0));a.el=f;a.r=ANd();e=new Ni;e.eE=Q(Jh,16);e.eF=0;e.dd=(-1);a.fs=e;a.gl=Q(EU,0);a.rO=100;a.eX=BX(1,0);a.eh=Hl();a.ee=Hl();a.bm=0;a.cG=0;a.g3=0;a.hI=1;a.jb=1;a.kD=
3;a.dR=ABK();a.eI=B(175);a.d4=0;a.bI=0;a.h8=null;a.hW=Cm();e=Iw();BG(e);f=new US;f.xV=e;a.gL=f;a.rc=new BZ;e=new UR;e.q2=a;a.tg=e;e=new UN;e.nq=a;a.tG=e;a.cg=b;a.Q=b.cV;a.ik=c;g=a.lp.data;b=new UM;b.tf=a;g[0]=b;b=new UP;b.rq=a;g[1]=b;b=new UO;b.nM=a;g[2]=b;b=new Vd;b.tC=a;g[3]=b;b=new Vc;b.qn=a;g[4]=b;AE8();a.hT=AWb===AWc?0:1;}
function Lz(a,b,c,d){CA(a.bd,b);CA(a.cz,c);RV(a,b,c,d);}
function Qy(a,b,c){a.nt=b;a.u$=c;}
function RV(a,b,c,d){var e;a.cH=B_(a.rO,d);a.cU=B_(1.0,d);a.ck=B_(10.0,d);if(!a.bI)CA(a.cg.dQ,a.bd);else Bg(a.cg.dQ,(b.b+c.b|0)-Lh(a)|0,b.a);Vs(a.dR,a.cg.dQ,Lh(a),c.a,d);b=a.cM;e=B_(2.0,d);b.dN.y.b=e;T2(a,a.iS,a.fX);VL(a);}
function AH$(a){a.kL=1;LB(a);}
function AGO(a){a.kL=0;}
function LB(a){So(a.cM,Jp(Ck(a)));}
function Lb(a,b){var c,d;a.er=b;c=a.cM;d=b.cu.s8;BI(c.dN.bT,d);c=a.eh;d=b.cu;Gc(c,d.lN,d.ls);c=a.ee;b=b.cu;Gc(c,b.lN,b.ls);}
function X9(a){K6(a,a.eJ.lP,a.fX+1|0);}
function WN(a){var b;b=a.fX;if(b<=7)return;K6(a,a.eJ.lP,b-1|0);}
function X$(a,b){K6(a,b,a.fX);}
function K6(a,b,c){if(a.cg.bM!==0.0){T2(a,b,c);F1(Ck(a));}a.fX=c;a.iS=b;}
function T2(a,b,c){var d,e,f,g,h,i;d=B_(c,a.cg.bM);e=a.eJ;f=e!==null?e.oF:0;if(!(d==f&&C6(b,a.iS))){NR(a.dR);g=a.gl.data;c=g.length;f=0;while(f<c){Qh(g[f]);f=f+1|0;}g=a.e.f.C.data;c=g.length;f=0;while(f<c){Ee(g[f]);f=f+1|0;}g=a.cx.data;c=Hg(0,0);e=a.Q;h=d;g[c]=GN(e,b,h,400,0);a.cx.data[Hg(0,1)]=GN(a.Q,b,h,400,2);a.cx.data[Hg(1,0)]=GN(a.Q,b,h,700,0);a.cx.data[Hg(1,1)]=GN(a.Q,b,h,700,2);e=a.cx.data[Hg(0,0)];a.eJ=e;c=E0(e);a.U=Dg(c*1.25);a.cM.dN.y.a=E0(a.eJ);a.lY=CG(a.lY,CK(a.Q,1024,a.U));f=a.U;i=SG(a.cM);e=new M;O(e);b
=G(G(e,B(176)),b);BA(b,32);T(G(T(G(T(G(T(b,d),B(177)),c),B(149)),f),B(178)),i);$rt_globals.console.info($rt_ustr(N(e)));if(AWd){c=K$(a.eJ,a.U);b=new M;O(b);T(G(b,B(179)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.gY=GW(Fs(a),a.x,a.Q.cB,a.cx);GO(a);VL(a);}}
function U8(a){return Ba(Cp(a.e.f)+5|0,a.U);}
function Iu(a){return Bb(U8(a)-a.cz.a|0,0);}
function Kg(a){return Bb(a.g3-Df(a)|0,0);}
function Df(a){var b;b=!a.bI?0:C1(a)+a.ck|0;return (a.cz.b-a.cH|0)-b|0;}
function Lh(a){return a.bI?a.cH:a.cH-a.ck|0;}
function DH(a){return a.cz.a;}
function KV(a,b){var c,d,e;c=a.e.f;d=c.fz;e=c.cs;d=d!=e&&b-c.pj>0.03125?1:0;if(d&&a.kF!=e){a.kF=e;SJ(a);}d=Hx((a.bm+a.vV|0)-a.vo|0,Iu(a));e=a.bm==d?0:1;if(e)E7(a,d);return !SY(a.cM,b)&&!e&&!a.rf?0:1;}
function E7(a,b){var c,d;c=Hx(b,Iu(a));if(c!=a.bm){a.bm=c;d=a.u$;if(d!==null)d.hM(c);}}
function Id(a,b){var c,d;c=Hx(b,Kg(a));if(c!=a.cG){a.cG=c;d=a.nt;if(d!==null)d.hM(c);}}
function L8(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=IB(a.cz.a,a.U)+7|0;c=a.gl;if(c.data.length<b)a.gl=AAo(b,c,a.tO,a.rS,a.e.f);CJ(a.Q,0);d=a.Q;e=a.bd;f=a.cz;Lt(d,e.b,e.a,f);g=(a.U-SG(a.cM)|0)/2|0;h=(a.gY-(P9(a.cM)/2|0)|0)-a.cG|0;i=!a.bI?a.cH:(a.cU+a.ck|0)+C1(a)|0;PH(a.cM,i+h|0,(g+Ba(a.w,a.U)|0)-a.bm|0);j=Cp(a.e.f);ZP(a);k=K0(a);l=U5(a);a.tO=k;a.rS=l;m=a.cg.dQ;Bg(m,Df(a),a.U);n=!a.bI?a.bd.b+a.cH|0:((a.bd.b+a.cU|0)+a.ck|0)+C1(a)|0;o=k;while(o<=l&&o<j){e=B2(a.e.f,o);p=Q5(a,o);ABD(p,e,a.lY,a.cx,
a.Q,a.U,Df(a),a.cG);q=p.bV;a.g3=Bb(a.g3,EZ(e)+(40.0*a.cg.bM|0)|0);r=Ba(a.U,o)-a.bm|0;i=a.bd.a+r|0;f=a.Q;s=a.rc;t=!a.hT?0.0:0.5;r=Df(a);u=a.U;v=a.cG;w=a.er;d=ACS(a.r,o);if(d!==null){if(d.a==(-1))d.a=q.R;d.b=GW(q,d.b,a.Q.cB,a.cx);d.a=GW(q,d.a,a.Q.cB,a.cx);}AAJ(p,i,n,f,s,m,t,r,u,v,w,d,a.h8,a.hW,a.w!=o?0:1);o=o+1|0;}o=k;while(o<=l&&o<j&&a.jb){d=Q5(a,o);r=Ba(a.U,o)-a.bm|0;u=ZT(a.r,o);e=a.er.cu;f=e.n5;v=a.w!=o?0:1;if(u)f=e.kB;else if(v)f=e.iO;AB$(d,a.Q,n,a.bd.a+r|0,a.U,m,a.cG,Df(a),f);if(v){a.eX.b=a.bI?a.ck+C1(a)
|0:a.ck-Cv(a.cg,3.0)|0;d=a.eX;d.a=a.U;x=a.bI?0:(a.cH-a.ck|0)+a.cU|0;e=a.Q;f=a.bd;By(e,f.b+x|0,f.a+r|0,d,a.er.cu.iO);}o=o+1|0;}if(a.kL&&h>=(( -P9(a.cM)|0)/2|0)){e=a.cM;d=a.cz;if(Zi(e.dN.P,0,0,d))U_(a.cM,a.Q,a.bd);}if(a.hI){y=Z(l+1|0,j);ABI(a,Ba(a.U,y)-a.bm|0);}AAS(a,k,l);ACk(a);AC3(a);Iy(a.Q);}
function AAS(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cz.a;e=Z(d,Ba(Cp(a.e.f),a.U)-a.bm|0);f=a.dR;g=a.bm;h=a.w;i=a.Q;j=a.er.p_;JX(f,i,b,d);XM(f,b);Qw(f,g,e,j,i);if(e<d){k=f.fM;By(i,k.b,k.a+e|0,BX(f.e5.b,d-e|0),j.g$);}if(b<=h&&h<=c){c=h/20|0;k=f.cw;k=Bp(k,c%k.i|0);l=f.fM;c=Ba(f.cw.i,f.ig);b=k.ew.a;d=((k.iP.a-(g%c|0)|0)+c|0)%c|0;if((d+b|0)>c)d= -(g%C8(k.b0)|0)|0;b=h%k.dH|0;e=k.et;d=d+Ba(b,e)|0;if(d<( -e|0))d=d+c|0;Bg(k.gc,k.ew.b,e);m=k.fE;b=h%k.dH|0;c=k.et;CE(m,0.0,Ba(b,c),k.ew.b,c);I0(k,i,d,l,j.op,j.uc);}}
function K0(a){return Z(a.bm/a.U|0,Cp(a.e.f)-1|0);}
function U5(a){return Z(((a.bm+DH(a)|0)-1|0)/a.U|0,Cp(a.e.f)-1|0);}
function VL(a){TI(a.dR,a.cx.data[0],a.U,a.Q);JX(a.dR,a.Q,K0(a),DH(a));}
function Q5(a,b){var c;c=a.gl.data;return c[b%c.length|0];}
function AEk(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dq(a.r))Db(a,a.eI);else{b=D2(a.r);c=Fx(a.r);d=c.L;e=b.L;f=(d-e|0)+1|0;g=BC(f);h=g.data;i=Q(Bv,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.eI;e=e+1|0;k=f;}l=ES(a.w,a.x);m=new UH;m.sQ=a;Pd(a,g,0,0,i,l,m);b.bb=b.bb+I(a.eI)|0;c.bb=c.bb+I(a.eI)|0;LU(a,a.x+I(a.eI)|0,0);DX(a);}return 1;}
function AB4(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dq(a.r)){b=B2(a.e.f,a.w);if(b.o.data.length>0){c=RQ(a,b);if(c===null)return 1;d=a.e.f;e=a.w;f=ES(e,a.x);d.cs=d.cs+1|0;g=d.fg;h=Q(GY,1);h.data[0]=AE_(e,0,1,c,f.bs,f.bE);B0(g,h);JF(d,e,0,1,c);FR(b,0,I(c));LU(a,a.x-I(c)|0,0);}}else{f=D2(a.r);c=Fx(a.r);i=c.L;j=f.L;i=(i-j|0)+1|0;k=BC(i);h=k.data;l=Q(Bv,i);m=l.data;e=a.x;n=a.w;o=0;while(j<=c.L){b=B2(a.e.f,j);if(b.o.data.length>0){b=RQ(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=L6(k,o);h=Dl(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.L)f.bb=Bb(0,f.bb-I(b)|0);if(j==c.L){c.bb=Bb(0,c.bb-I(b)|0);LU(a,a.x-I(b)|0,0);}i=i+1|0;}f=ES(n,e);b=new Xk;b.oL=a;Pd(a,p,0,1,h,f,b);}DX(a);return 1;}
function RQ(a,b){var c,d,e,f;c=Et(0,I(a.eI),Xf(b));if(!c)b=null;else{b=B(59);if(c<0){b=new BD;V(b);K(b);}if(c!=1){d=b.bX.data.length;if(d&&c){e=BL(Ba(d,c));d=0;f=0;while(f<c){PA(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=Mf(e);}else b=AUJ;}}return b;}
function Pd(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BC(i);k=AUe(i).data;Hq(j,c);c=0;l=k.length;if(c>l){f=new BD;V(f);K(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.f;o.cs=o.cs+1|0;p=Q(GY,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AE_(h[m],n[m],k[m],b[m],f.bs,f.bE);m=m+1|0;}B0(o.fg,p);c=0;while(c<i){b=e.data;JF(o,h[c],n[c],k[c],b[c]);g.lW(FX(h[c]),b[c]);c=c+1|0;}}
function ADD(a){var b,c,d,e,f,g,h,i;if(Dq(a.r))GD(a);Ee(B2(a.e.f,a.w));b=a.e.f;c=a.w;d=a.x;e=b.C;f=e.data;g=f[c];e=Dl(e,f.length+1|0);f=e.data;b.C=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DO(Q(B7,0));b.C.data[c+1|0]=g;}else if(d==g.R){f[c]=g;f[c+1|0]=DO(Q(B7,0));}else{f=(IF(g,d)).data;e=b.C.data;e[c]=f[0];e[c+1|0]=f[1];}Gs(b,c,d,0,B(180));DX(a);return CB(a,a.w+1|0,0,0);}
function ADh(a){if(Dq(a.r))GD(a);else O5(a.e.f,a.w,a.x);GO(a);DX(a);return 1;}
function Yw(a){var b,c,d;if(Dq(a.r)){GD(a);return 1;}b=a.x;if(!b&&!a.w)return 1;if(b){c=a.w;b=b-1|0;O5(a.e.f,c,b);}else{c=a.w-1|0;b=Fk(a.e.f,c);d=a.e.f;KX(d,c);Gs(d,c,Fk(d,c),1,B(180));}DX(a);return CB(a,c,b,0);}
function Db(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.d4)return 0;if(Dq(a.r))GD(a);c=LR(Ve(b,B(181),B(31)),B(180),(-1));d=c.data;b=a.e.f;e=a.w;f=a.x;X3(b,e,f,c);g=d.length;if(!g)h=AUJ;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BL(i+Ba(g-1|0,I(B(180)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(180))){m=l+1|0;c[l]=L(B(180),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Mf(k);}Gs(b,e,f,0,h);e=a.w;m=(e+g|0)-1|
0;CB(a,m,m!=e?I(d[g-1|0]):a.x+I(d[0])|0,0);E6(a);DX(a);return 1;}
function GD(a){var b,c,d;b=D2(a.r);c=a.e.f;d=a.r;Tx(c,d,V_(c,d));CB(a,b.L,b.bb,0);E6(a);DX(a);}
function E6(a){var b;b=a.r;b.c0=0;B4(b.bP,a.w,a.x);B4(a.r.bF,a.w,a.x);}
function C1(a){return a.eJ.lC|0;}
function ABI(a,b){var c,d,e;c=a.cz.a;if(b<c){d=a.cg.dQ;d.a=c-b|0;d.b=!a.bI?Df(a):Df(a)+a.cU|0;e=!a.bI?a.bd.b+a.cH|0:(a.bd.b+a.ck|0)+C1(a)|0;By(a.Q,e,a.bd.a+b|0,d,a.er.cu.gv);}}
function ACk(a){var b;b=a.bI?a.bd.b+C1(a)|0:a.bd.b+a.cz.b|0;Is(a.eh,a.bm,a.bd.a,DH(a),U8(a),b,C1(a));b=!a.bI?a.bd.b+a.cH|0:((a.bd.b+a.cU|0)+a.ck|0)+C1(a)|0;Mn(a.ee,a.cG,b,Df(a),a.g3,a.bd.a+DH(a)|0,C1(a));}
function AC3(a){var b,c;b=PF(a.eh);c=PF(a.ee);if(!(!b&&!c)){CJ(a.Q,1);if(b)FT(a.eh,a.Q);if(c)FT(a.ee,a.Q);if(b)Gb(a.eh,a.Q);if(c)Gb(a.ee,a.Q);}}
function ZP(a){var b,c,d,e;b=a.eX;c=a.cz;b.a=c.a;b.b=a.cU;d=!a.bI?a.cH-a.ck|0:(c.b-Lh(a)|0)-a.cU|0;b=a.Q;c=a.bd;By(b,c.b+d|0,c.a,a.eX,a.er.cu.uX);a.eX.b=!a.bI?a.ck-a.cU|0:a.ck+C1(a)|0;e=a.bI?0:(a.cH-a.ck|0)+a.cU|0;b=a.Q;c=a.bd;By(b,c.b+e|0,c.a,a.eX,a.er.cu.gv);}
function Hx(b,c){return Z(Bb(0,b),c);}
function HD(a,b){var c,d,e,f,g;b=b.data;$rt_globals.console.info("onFileParsed");a.hE=1;a.hD=1;c=D6(b[0]);d=FG(b[1]);e=(D6(b[2])).data[0];a.e.f=ABN(c,d);Wj(a,ADm(e));Go(Ck(a),AWe);F1(Ck(a));f=Kn(FC(),a.eL);g=new M;O(g);G(HR(G(g,B(182)),f),B(183));$rt_globals.console.info($rt_ustr(N(g)));g=a.kG;if(g!==null)g.l(a);}
function Wj(a,b){var c,d;c=Do(a.e);if(!C6(c,b)){d=new M;O(d);G(G(G(G(d,B(184)),c),B(185)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.iR=b;}}
function Ck(a){return a.cg.iA;}
function KC(a,b){var c,d,e,f,g,h;c=Ey(b);d=new M;O(d);G(G(d,B(186)),c);$rt_globals.console.info($rt_ustr(N(d)));Nq(Ck(a),Ey(b));CB(a,0,0,0);a.eL=FC();a.hE=0;a.hD=0;e=new Iv;f=Q(Bv,1);f.data[0]=B(31);AEd(e,f,AT5(B(31),B(31),Ey(b),null));a.e=e;CB(a,0,0,0);c=Ey(b);g=FY(c,46,I(c)-1|0);if(g!=(-1))c=Dk(c,g);h=!Bq(c,B(187))?5120:10240;c=new Rx;c.nF=a;c.nE=h;c.nD=b;d=b.e0;if(d!==null)JA(c,Jz(b,d.size));else{d=b.gx.getFile();e=new TA;e.l2=b;e.l3=c;b=new TD;b.ug=c;d.then(Bj(e,"f"),Bj(b,"f"));}}
function Hu(a,b,c,d,e){if(Hn(a,e))return 1;if(c&&d)return 1;if(c)E7(a,a.bm+((Ba(b,a.U)*12|0)/10|0)|0);else if(!d){IK(a,a.w+b|0,e);Tr(a);}return 1;}
function Ue(a,b,c,d){var e,f,g;if(Hn(a,d))return 1;e=Fs(a);if(!c)f=a.x+b|0;else if(b>=0)f=GP(e,a.x);else{f=a.x;if(!f)f=(-1);else{c=Io(e,f);if(c>0&&e.dn.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.dn.data[c-1|0];}}if(f>e.R){if((a.w+1|0)<Cp(a.e.f))CB(a,a.w+1|0,0,d);}else if(f>=0)Dr(a,f,d);else{b=a.w;if(b>0){g=(B2(a.e.f,b-1|0)).R;CB(a,a.w-1|0,g,d);}}Pr(a);return 1;}
function Hn(a,b){if(Dq(a.r)&&!b){E6(a);GO(a);return 1;}if(!(b&&Dq(a.r)))E6(a);return 0;}
function CB(a,b,c,d){a.x=c;return IK(a,b,d);}
function IK(a,b,c){a.w=Et(0,b,Cp(a.e.f)-1|0);return Dr(a,a.x,c);}
function Dr(a,b,c){a.x=Et(0,b,(Fs(a)).R);a.gY=a.cg.bM===0.0?0:GW(Fs(a),a.x,a.Q.cB,a.cx);LB(a);GO(a);if(c)a.r.c0=1;KD(a.r,a.w,a.x);a.r.c0=0;return 1;}
function LU(a,b,c){var d;d=RB(a.r);Dr(a,b,c);a.r=d;}
function GO(a){Tr(a);Pr(a);}
function Tr(a){var b,c,d,e,f;b=a.bm;c=b+DH(a)|0;d=a.w;e=a.U;d=Ba(d,e);f=d+e|0;if(d<(b+e|0))E7(a,d-e|0);else if(f>(c-e|0))E7(a,(f-DH(a)|0)+a.U|0);}
function Pr(a){var b,c,d,e,f;b=Dg(a.cg.bM*30.0);c=a.cG;d=c+Df(a)|0;e=a.gY;f=e+b|0;if(e<(c+b|0))Id(a,e-b|0);else if(f>(d-b|0))Id(a,(f-Df(a)|0)+b|0);}
function Tz(a,b,c){var d,e,f,g,h,i,j,k,l;Va(a);d=a.e.f;e=DN(d.d_,c);if(e!==null)a.h8=Kb(d,e);if(e!==null)c=e;a:{f=DN(d.ev,c);if(f!==null){c=BU(f);while(true){if(!B5(c))break a;g=BY(c);B0(a.hW,Kb(d,g));}}}h=b.bs;i=b.bE;b=a.el;c=Do(a.e);d=GV(a.e);j=(Co(b.om)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.tQ(c,d)){c=b.xi;break b;}l=l+1|0;}c=null;}if(c!==null){d=a.e;b=new MI;b.vE=a;b.vF=d;b.vH=h;b.vJ=i;c.r$(d,h,i,b,a.gL);}}
function Hv(a,b){var c;CB(a,b.bs,b.bE,0);c=GP(Fs(a),a.x);B4(a.r.bF,a.w,c);B4(a.r.bP,a.w,a.x);}
function ET(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.bd;e=c-d.b|0;f=Et(0,((b.a-d.a|0)+a.bm|0)/a.U|0,Cp(a.e.f)-1|0);g=!a.bI?a.cH:(a.cU+a.ck|0)+C1(a)|0;h=Bb(0,(e-g|0)+a.cG|0);b=B2(a.e.f,f);d=a.Q.cB;i=a.cx;if(!(b.eb!==null&&!b.fG))La(b,d,i);j=b.eb;e=b.o.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.R;else{c=T1(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.o.data.length)k=b.R;else{j=WQ(b,d,i,c);k=0;e=0;while(e<c){k=k+I(b.o.data[e].t)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(AWf){d=new M;O(d);T(G(T(G(T(G(d,B(188)),e),B(189)),h),B(190)),c);$rt_globals.console.info($rt_ustr(N(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return ES(f,k);}
function To(a,b){var c;c=b.bs;a.w=c;a.x=b.bE;a.gY=GW(B2(a.e.f,c),a.x,a.Q.cB,a.cx);LB(a);}
function Fs(a){return B2(a.e.f,a.w);}
function JD(a,b,c){var d,e;d=Dg((a.U*4|0)*c/150.0);e=Dg(b);if(d)E7(a,a.bm+d|0);if(e)Id(a,a.cG+e|0);return 1;}
function UZ(a,b,c){a.r.c0=0;return 1;}
function U7(a,b,c){var d,e,f;if(c)return null;d=Fe(a.eh,b.h,a.tg,1);if(d!==null)return d;d=Fe(a.ee,b.h,a.tG,0);if(d!==null)return d;IU(a);e=ET(a,b.h);f=HI(a.e.f,e.bs,e.bE);To(a,e);Tz(a,e,f);if(!b.bC){b=a.r;if(!b.c0)B4(b.bP,a.w,a.x);}b=a.r;b.c0=1;KD(b,a.w,a.x);b=new Tl;b.um=a;return b;}
function QF(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:if(b.cf){b=b.h;e=ET(a,b);f=HI(a.e.f,e.bs,e.bE);g=OB(a,f);h=KM(a.el,Do(a.e),GV(a.e));if(h!==null){f=a.e;c=e.bs;d=e.bE;e=new Sf;e.v5=a;e.v6=b;e.v4=g;h.r$(f,c,d,e,a.gL);}else{e=DN(a.e.f.d_,f);if(e!==null){Hv(a,e);c=1;}else{e=DN(a.e.f.ev,f);if(e!==null&&!Eb(e)){if(e.i!=1){Vi(a.ik,b,e,a,g);c=1;}else{Hv(a,Bp(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(ET(a,b.h)).bs;e=B2(a.e.f,c);c=GU(e,a.x);d=GP(e,a.x);b=UY(e,c);if((d-1|0)==e.R){B4(a.r.bP,a.w,Xf(e));B4(a.r.bF,
a.w,e.R);}else{if(b!==null){b=b.t;i=0;c:{while(true){j=b.bX.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.x;if(c==i){c=GU(e,c-1|0);d=GP(e,c);}else{if(d!=i){PY(a.r,a.w);break b;}c=GU(e,d+1|0);d=GP(e,c);}}}B4(a.r.bP,a.w,c);a.r.c0=1;CB(a,a.w,d,0);a.r.c0=0;IU(a);}}break a;case 3:break;default:break a;}PY(a.r,a.w);Xq(a.fs);IU(a);}}return 1;}
function Pi(a,b){var c,d,e,f,g,h,i,j,k;c=a.cg.cA;if(Fp(a.eh,b.h,c))return 1;if(Fp(a.ee,b.h,c))return 1;d=a.dR;if(F4(b.h,d.fM,d.e5)&&Hb(c)?1:0)return 1;e=b.h;f=!a.bI?a.bd.b+a.cH|0:((a.bd.b+a.ck|0)+a.cU|0)+C1(a)|0;a:{g=a.bd.a;h=Df(a);i=DH(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Hb(c);if(b.cf){e=ET(a,b.h);e.bE=GU(B2(a.e.f,e.bs),e.bE);b=a.e.f;if(!NI(b.d_,e)&&!NI(b.ev,e)?0:1)return DB(c,B(191));}return DB(c,B(174));}
function AM0(a,b){var c,d,e,f;c=b.cf;if(c&&b.bh==65){c=Cp(a.e.f)-1|0;d=Fk(a.e.f,c);B4(a.r.bP,0,0);B4(a.r.bF,Cp(a.e.f)-1|0,d);return 1;}if(c&&b.bh==80){J3(a);return 1;}if(!a.d4&&c&&b.bh==90){if(Dq(a.r))E6(a);b=a.e.f;b.cs=b.cs+1|0;e=b.fg;d=e.i;if(!d)e=null;else{f=(El(e,d-1|0)).data;e=Tn(b,f[0]);c=1;while(c<f.length){Tn(b,f[c]);c=c+1|0;}}if(e!==null){CB(a,e.b,e.a,0);DX(a);}return 1;}if(!c&&!b.cX){if(Bq(b.dE,B(192))){Db(a,B(193));Dr(a,a.x-1|0,0);c=1;}else if(Bq(b.dE,B(194))){Db(a,B(195));Dr(a,a.x-1|0,0);c=1;}else if
(Bq(b.dE,B(42))){Db(a,B(196));Dr(a,a.x-1|0,0);c=1;}else if(Bq(b.dE,B(197))){Db(a,B(198));Dr(a,a.x-1|0,0);c=1;}else if(Bq(b.dE,B(199))){Db(a,B(200));Dr(a,a.x-1|0,0);c=1;}else if(!Bq(b.dE,B(201)))c=0;else{Db(a,B(202));Dr(a,a.x-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cX&&!b.cf)){d=b.bh;if(d>=48&&d<=57){c=d-48|0;e=a.lp.data[c];if(e!==null)e.p();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bh){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c=1;}if(c)return 1;if
(AAT(a,b))return 1;if(a.d4)c=0;else c:{switch(b.bh){case 8:break;case 9:c=!b.bC?AEk(a):AB4(a);break c;case 13:c=ADD(a);break c;case 46:c=ADh(a);break c;default:c=0;break c;}c=Yw(a);}if(c)return 1;if(b.cf&&b.bh==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AJw(b.bh)&&b.bh!=27){if(!b.cf&&!b.cX&&!b.iC)return I(b.dE)>0&&Db(a,b.dE)?1:0;return 0;}return 0;}
function WO(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bq(B(152),Do(a.e))){b=Ck(a);c=new Tt;c.m9=a;d=Q(C,3);e=d.data;e[0]=EE(a.e.f);f=K0(a);g=U5(a);h=Bb(0,f-100|0);f=Z(Cp(a.e.f)-1|0,g+100|0);i=BC(3);j=i.data;j[0]=F7(a.e.f,h);k=a.e.f;l=0;f=Z(f+1|0,k.C.data.length);m=0;while(m<f){l=l+Fk(k,m)|0;if(m!=(k.C.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.f.c_;k=Cm();Wy(n,n.cR,k);i=BC(3*k.i|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bp(k,m);h=p+1|0;o[p]=q.bN;l=h+1|0;o[h]=q.bS;p=l+1|0;o[l]=q.fc;m=m+1|
0;}e[2]=i;CO(b,c,B(203),d);}}
function J3(a){var b,c,d,e;b=ABn(Do(a.e));if(b!==null){a.eL=FC();c=Ck(a);d=new Q3;d.sp=a;e=Q(C,1);e.data[0]=EE(a.e.f);CO(c,d,b,e);}}
function SJ(a){var b,c,d,e,f,g,h;b=a.e.f.c_;c=O7(b,b.cR);if(c===null)return;if(Bq(B(174),Do(a.e)))Pe(a.e.f);a:{d=E4([CX(c),C9(c),c.b4.fc]);e=EE(a.e.f);f=BC(1);g=Do(a.e);h=(-1);switch(Le(g)){case 3401:if(!Bq(g,B(204)))break a;h=3;break a;case 98723:if(!Bq(g,B(205)))break a;h=2;break a;case 3254818:if(!Bq(g,B(152)))break a;h=1;break a;case 3556653:if(!Bq(g,B(174)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Ck(a);c=new SR;c.uM=a;CO(b,c,B(206),H(C,[e,f,d]));}
function GA(a,b,c){var d,e,f,g,h,i;if(c&&a.d4)return 0;d=D2(a.r);e=d.L;if(Dq(a.r)){f=a.e.f;g=a.r;h=V_(f,g);if(c)Tx(f,g,h);if(c){CB(a,d.L,d.bb,0);E6(a);DX(a);}}else{h=Fb(EJ(a.e.f.C.data[e]),B(180));i=Z(Cp(a.e.f)-1|0,e);B4(a.r.bF,i,0);if(e>=(Cp(a.e.f)-1|0))B4(a.r.bF,i,Fk(a.e.f,i));else B4(a.r.bP,i+1|0,0);if(c)GD(a);else CB(a,e,0,0);}b.l(h);return 1;}
function AAT(a,b){var c,d,e,f;a:{switch(b.bh){case 33:c=b.cf?IK(a,IB(a.bm,a.U),b.bC):Hu(a,2-Wl(DH(a),a.U)|0,0,b.cX,b.bC);break a;case 34:c=!b.cf?Hu(a,Wl(DH(a),a.U)-2|0,0,b.cX,b.bC):IK(a,((a.bm+DH(a)|0)/a.U|0)-1|0,b.bC);break a;case 35:if(!Hn(a,b.bC)&&!Dr(a,(Fs(a)).R,b.bC)){c=0;break a;}c=1;break a;case 36:if(!Hn(a,b.bC)&&!Dr(a,0,b.bC)){c=0;break a;}c=1;break a;case 37:c=b.cf;if(c&&b.cX){IU(a);d=a.fs;e=d.dd;if(e<=0)d=null;else{f=d.eE.data;c=e-1|0;d.dd=c;d=f[c];}if(d===null)c=1;else{CB(a,I1(d),LG(d),0);a.r=RB(d.lG);c
=1;}break a;}c=Ue(a,(-1),c,b.bC);break a;case 38:c=Hu(a,(-1),b.cf,b.cX,b.bC);break a;case 39:c=b.cf;if(c&&b.cX){d=a.fs;c=d.dd;if(c==(d.eF-1|0))d=null;else{f=d.eE.data;c=c+1|0;d.dd=c;d=f[c];}if(d===null)c=1;else{CB(a,I1(d),LG(d),0);a.r=RB(d.lG);c=1;}break a;}c=Ue(a,1,c,b.bC);break a;case 40:c=Hu(a,1,b.cf,b.cX,b.bC);break a;default:}c=0;}if(c&&b.bC)B4(a.r.bF,a.w,a.x);if(c)Tz(a,ES(a.w,a.x),HI(a.e.f,a.w,a.x));return c;}
function IU(a){var b,c,d,e,f,g,h;b=a.fs;c=b.dd;b=c<0?null:b.eE.data[c];if(b!==null&&a.w==I1(b)&&a.x==LG(b))return;d=a.fs;b=new Jh;c=a.w;e=a.x;f=a.r;b.kZ=ES(c,e);g=RB(f);b.lG=g;g.c0=0;e=d.dd;h=d.eF;if(e==(h-1|0))MP(d,b);else{c=e+1|0;while(c<h){Xq(d);c=c+1|0;}MP(d,b);}d.dd=d.dd+1|0;}
function DX(a){a.e.f.pj=Jp(Ck(a));}
function J7(a,b){var c,d,e,f,g,h,i;a.vB=null;Va(a);c=a.e;a.e=b;a.eL=FC();d=ABn(Do(a.e));if(d!==null){e=Ck(a);f=new Oz;f.rN=a;g=Q(C,1);g.data[0]=EE(a.e.f);CO(e,f,d,g);}g=(Co(a.el.mi)).data;h=g.length;i=0;while(i<h){g[i].lW(c,b);i=i+1|0;}}
function Va(a){a.h8=null;Hp(a.hW);}
function ABn(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(Le(b)){case 3401:if(!Bq(b,B(204)))break a;c=2;break a;case 98723:if(!Bq(b,B(205)))break a;c=1;break a;case 3254818:if(!Bq(b,B(152)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(207);break b;case 2:b=B(208);break b;default:b=null;break b;}b=B(209);}}return b;}
function OB(a,b){var c;c=Kb(a.e.f,b);if(c===null)return B(31);return c.t;}
function DF(a,b){return F4(b,a.bd,a.cz);}
function Ug(a,b){var c,d,e;a.uY=b;Br(Bu(),B(210));c=Bu();d=a.uY.data.length;e=new M;O(e);T(G(e,B(211)),d);Br(c,N(e));c=Bu();d=Cp(a.e.f);e=new M;O(e);T(G(e,B(212)),d);Br(c,N(e));}
var HJ=F(0);
function QU(){C.call(this);this.sE=null;}
function AJU(a,b){var c;c=a.sE;Wn(c,c.G,c.D);}
function QS(){C.call(this);this.ub=null;}
function ALY(a,b){var c;c=a.ub;Wn(c,c.D,c.G);}
function QT(){C.call(this);this.od=null;}
function AFG(a,b){Qk(a.od,b);}
function QQ(){C.call(this);this.rU=null;}
function AFg(a,b){Qk(a.rU,b);}
function QR(){C.call(this);this.mo=null;}
function ALC(a,b){return ABl(a.mo,b);}
function HE(){var a=this;C.call(a);a.jH=null;a.ot=null;a.l7=null;}
function AWg(a,b){var c=new HE();R$(c,a,b);return c;}
function AWh(a,b,c){var d=new HE();Vu(d,a,b,c);return d;}
function R$(a,b,c){Vu(a,b,null,c);}
function Vu(a,b,c,d){a.jH=b.bO;a.ot=c;a.l7=d;}
function AOT(a,b){var c,d;if(b.cf&&b.bh==79){c=a.ot;if(c!==null&&b.bC)V7(a.jH,c);else LM(a.jH,a.l7);d=1;}else d=0;return d;}
function QO(){C.call(this);this.p1=null;}
function ANt(a,b){var c;c=a.p1;c=DW(c.s,c.G)?c.G:!DW(c.s,c.D)?null:c.D;if(c!==null)KC(c,b);}
function QP(){C.call(this);this.td=null;}
function AKt(a,b){b=b;return ACs(a.td,b);}
var AB7=F();
var Zc=F(0);
function ZN(b,c,d){return Hz(b,c,d,255,new BZ);}
function Hz(b,c,d,e,f){CE(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function W0(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bl=g+i;e.bz=h+i;e.bi=j+i;return e;}
function Ju(b,c,d,e,f){f=W0(b,c,d,f);f.bA=e;return f;}
function GB(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function X6(){var a=this;C.call(a);a.cV=null;a.iA=null;a.cA=null;a.b7=null;a.bM=0.0;a.d6=null;a.dT=null;a.dQ=null;a.nR=null;a.x9=null;a.x8=null;}
function KI(a){var b;b=a.d6;if(b!==null)b.sn();}
function JO(a){var b;b=a.d6;if(b!==null)b.u2();}
function WY(a,b){var c;c=a.iA.dC!==(D8()).activeElement?0:1;if(c)JO(a);a.d6=b;if(c)KI(a);}
function FO(a,b){JO(a);a.d6=b;KI(a);}
function DW(a,b){return b!==a.d6?0:1;}
function IH(a){return a.cV.cB;}
function GL(a,b){return Hh(a.cV,b.im,B_(b.hF,a.bM));}
function Cv(a,b){return B_(b,a.bM);}
var Sj=F();
function ART(a,b){var c,d,e;c=b.cf;d=c&&!b.bC&&!b.cX&&!b.iC?1:0;a:{if(d){d=b.bh;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bC&&!c&&!b.cX&&!b.iC?1:0;d=d&&b.bh==46?1:0;}b:{if(!d){e=b.bh;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.jF=1;}return 0;}
function Sk(){C.call(this);this.rW=null;}
function AE3(a,b){var c;c=a.rW.d6;return c!==null&&c.gM(b)?1:0;}
var En=F(0);
function ABe(){C.call(this);this.cO=null;}
function AEc(){var a=new ABe();ALb(a);return a;}
function ALb(a){a.cO=Cm();}
function IS(a,b){Ro(a.cO,0,b);}
function J5(a,b){V4(a.cO,b);}
function I5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cO.i-1|0;while(c>=0){d=Bp(a.cO,c);d.O.eS(b);e=d.S;f=d.ec.h0;if(!LJ(e)){if(!TX(e)&&!(!e.gz&&e.da!==null)){e.gz=0;QX(e);g=e.dV;h=(g.dt+g.eg+5.0)/10.0;i=Cv(e.gK,e.iL);g=b.cB;j=e.dV;k=e.gO;l=h*2.0;Cy(g,j);m=i+KH(g,k,l)|0;e.hu=m;m=Et(0,m,e.q.b);if(m){j=CK(b,m,e.q.a);Cy(j,e.dV);g=e.gO;l=i;h=l+h;k=e.dV;n=k.dt;Ch(j,g,h,l+n-(n+k.eg)/16.0);g=e.da;if(g===null){g=CU(b);e.da=g;}CM(g,j);FM(j);CE(e.lh,0.0,0.0,Ce(e.da),C8(e.da));}}g=f.qK;j=e.da;if(j===null)O$(e,b,0,e.q.b,
g);else{i=Ce(j);f=f.pQ;j=e.E;m=j.b;o=j.a;j=e.da;EG(b,m,o,j.fm,e.lh,j,f,g,0.0);m=e.q.b;if(i<m)O$(e,b,i,m-i|0,g);}}CJ(b,1);i=Cv(d.bp,2.0);m=LJ(d.S);f=d.bp;e=f.dQ;f=f.nR;p=m?0:d.S.q.a;g=d.O.q;Bg(f,g.b,g.a+p|0);ADk(b,f,!m?d.S.E:d.O.E,d.ec.h0.jT, -i|0,e);f=d.O;ACE(b,f.q,f.E,i,p,Q$(d.ec.iX,d.bp.bM),d.ec.iX.lT,e);c=c+(-1)|0;}}
function Zn(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cO;if(c>=d.i)break;a:{e=Bp(d,c);f=b.h;if(DG(e.S,f))g=DB(e.bp.cA,null);else{g=Cv(e.bp,7.0);h=Cv(e.bp,25.0);if(VI(e,f.b,g)){i=UV(e,f.b,h);if(Pk(e,f.a,g)){g=DB(e.bp.cA,JE(i,B(213)));break a;}if(P5(e,f.a,g)){g=DB(e.bp.cA,JE( -i|0,B(213)));break a;}}if(MQ(e,f.a,g)){h=RR(e,f.a,h);if(N7(e,f.b,g)){g=DB(e.bp.cA,JE(h,B(214)));break a;}if(TN(e,f.b,g)){g=DB(e.bp.cA,JE( -h|0,B(214)));break a;}}g=0;}}b:{c:{if(!g){if(!DG(e.O,b.h))break c;if(!e.O.bR(b)&&!DB(e.bp.cA,null))break c;}g
=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function ABd(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.cO;if(e>=f.i)break;a:{b:{g=Bp(f,e);if(!DG(g.S,b.h)){if(!DG(g.O,b.h))break b;if(!g.O.cp(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function Yj(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.cO;if(d>=e.i)return null;a:{f=Bp(e,d);if(!c){b:{e=b.h;if(!LJ(f.S)&&DG(f.S,e)){g=f.O.E;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.S.E;i=e.b-i|0;k=e.a-k|0;e=new Bk;g=new Qp;g.ow=f;g.oz=i;g.oA=k;g.oB=e;g.oC=h;g.ox=j;}else{h=Cv(f.bp,7.0);i=Cv(f.bp,25.0);if(VI(f,e.b,h)){j=UV(f,e.b,i);if(Pk(f,e.a,h)){g=H6(f,e,j,(-1));break b;}if(P5(f,e.a,h)){g=H6(f,e,j,1);break b;}}if(MQ(f,e.a,h)){i=RR(f,e.a,i);if(N7(f,e.b,h)){g=H6(f,e,(-1),i);break b;}if(TN(f,e.b,h)){g=
H6(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=DG(f.S,b.h)?AWi:f.O.b5(b,c);e=f.O;if(e===null)g=null;else if(g===null)g=!DG(e,b.h)?null:AWi;}if(g!==null)break;d=d+1|0;}return g;}
function AEb(a,b,c){var d,e,f,g;d=0;while(true){e=a.cO;if(d>=e.i)break;a:{b:{f=Bp(e,d);if(!DG(f.S,b.h)){if(!DG(f.O,b.h))break b;if(!f.O.cL(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function K8(a,b,c,d){var e,f;e=0;while(true){f=a.cO;if(e>=f.i)break;if((Bp(f,e)).O.cW(b,c,d))return 1;e=e+1|0;}return 0;}
function AQG(a,b,c){var d,e,f;d=0;while(true){e=a.cO;if(d>=e.i)break;f=Bp(e,d);e=f.O;e.iQ(e.E,e.q,c);e=f.S;if(e.gs!==null){e.dV=null;e.hu=0;e.gz=1;}JY(f);d=d+1|0;}}
function Oc(a,b){var c,d,e;c=0;d=0;while(true){e=a.cO;if(d>=e.i)break;Bp(e,d);c=0|c;d=d+1|0;}return c;}
function PO(a,b,c){var d;d=0;while(true){b=a.cO;if(d>=b.i)break;Bp(b,d);d=d+1|0;}}
function YN(){var a=this;C.call(a);a.cC=null;a.cc=null;a.i$=null;a.i1=null;a.g5=null;a.iv=null;}
function MN(a){var b=new YN();AGA(b,a);return b;}
function AGA(a,b){a.cc=Cm();a.iv=AWj;a.cC=b;W(b.dT,a);}
function H4(a,b,c){a.i$=c;a.g5=b;b=BU(a.cc);while(B5(b)){H7(BY(b),a.g5);}}
function F_(a,b,c,d){var e,f;e=a.cC;f=e.b7;if(Ba(f.b,f.a)&&e.bM!==0.0){if(a.i$!==null&&!DI(a)){a.iv=d;a.i1=GL(a.cC,a.i$);e=TE(a,b,c,null);b=new S4;b.s4=a;e.ja=b;FO(a.cC,a);return;}b=new BD;V(b);K(b);}c=new DY;Bl(c,B(215));K(c);}
function DK(a){var b;if(DI(a)){b=a.cC;if(b.d6===a)b.d6=null;Ts(a,null);a.iv.p();a.iv=AWj;}}
function PD(a,b,c,d,e){var f,g,h;f=Y8();SM(f);KO(f,c.dj());H7(f,a.g5);HZ(f,a.i1);GT(f,a.cC);if(d===null)g=b.b;else{g=b.b;g=a.cC.b7.b<((g+(D_(d)).b|0)+(D_(f)).b|0)?g-(D_(f)).b|0:(g+(D_(d)).b|0)-d.eK|0;}h=b.a;b=a.cC.b7;JU(f,Bb(0,Z(g,b.b-(D_(f)).b|0)),Bb(0,Z(h,b.a-(D_(f)).a|0)));b=new Nl;b.tT=a;b.tV=f;b.tU=e;f.ju=b;B0(a.cc,f);return f;}
function TE(a,b,c,d){return PD(a,b,c,d,null);}
function AGM(a,b,c){var d,e;a.i1=GL(a.cC,a.i$);d=BU(a.cc);while(B5(d)){e=BY(d);HZ(e,a.i1);GT(e,a.cC);}}
function Im(a){var b,c;if(Eb(a.cc))return;CJ(a.cC.cV,1);b=0;while(true){c=a.cc;if(b>=c.i)break;JB(Bp(c,b),a.cC);b=b+1|0;}}
function Kq(a,b){var c,d;c=0;d=a.cc.i-1|0;a:{while(d>=0){c=Ke(Bp(a.cc,d),b.h,a.cC.cA);if(c)break a;d=d+(-1)|0;}}return c;}
function Jk(a,b,c,d){var e,f;e=0;f=a.cc.i-1|0;a:{while(f>=0){e=J8(Bp(a.cc,f),b.h,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Jf(a,b,c){var d,e,f;d=null;e=a.cc.i-1|0;a:{while(e>=0){f=Bp(a.cc,e);d=b.h;c=Eq(f.cd,d);if(!c&&!LX(f.cd)){d=f.ja;if(d!==null)d.p();}d=!c?null:AWi;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function AFh(a,b){var c;if(!DI(a))return 0;a:{switch(b.bh){case 27:DK(a);c=1;break a;default:}c=0;}return c;}
function AEa(b,c){var d,e,f;d=b.dl;e=c.cQ;f=c.eK;b=new Bk;c=d.P;ZZ(b,(c.b-(e*3|0)|0)-f|0,(c.a-e|0)-f|0);return b;}
function Ts(a,b){var c,d;c=a.cc.i-1|0;a:{while(true){if(c<0)break a;d=Bp(a.cc,c);if(b===d)break;El(a.cc,c);Tw(d);c=c+(-1)|0;}}}
function DI(a){return a.cc.i<=0?0:1;}
function AA1(){var a=this;C.call(a);a.dN=null;a.kV=0.0;a.gI=0.0;a.gm=0;}
function AMI(){var a=new AA1();ARa(a);return a;}
function ARa(a){var b;b=SH(0,0,2,20);a.dN=b;a.kV=0.5;a.gI=0.0;Hz(187,187,187,255,b.bT);}
function SG(a){return a.dN.y.a;}
function P9(a){return a.dN.y.b;}
function SY(a,b){var c,d;a:{c=a.gm;if(b>a.gI)while(true){d=a.gI+a.kV;a.gI=d;a.gm=a.gm?0:1;if(b>d)continue;else break a;}}return a.gm==c?0:1;}
function PH(a,b,c){Bg(a.dN.P,b,c);}
function So(a,b){a.gI=b+a.kV*1.25;a.gm=1;}
function U_(a,b,c){if(a.gm)Ux(a.dN,b,c.b,c.a);}
function K2(){var a=this;C.call(a);a.lP=null;a.vC=null;a.vS=0.0;a.oF=0;a.vZ=0;a.ws=0;a.qH=0;a.xh=0;a.dt=0.0;a.eg=0.0;a.vP=0.0;a.lC=0.0;a.vW=0;a.mI=null;}
function E0(a){return Dg(a.dt+a.eg);}
function J1(a,b){return Dg((a.dt+a.eg)*b);}
function Iv(){var a=this;C.call(a);a.fR=null;a.f=null;a.iR=null;a.pS=null;}
function ASB(a,b){var c=new Iv();AEd(c,a,b);return c;}
function AWk(a,b,c){var d=new Iv();Qo(d,a,b,c);return d;}
function AEd(a,b,c){Qo(a,b,null,c);}
function Qo(a,b,c,d){var e,f,g,h,i,j,k;a.fR=d;a.iR=c;if(d===null)c=null;else{c=d.e8;c=c===null?null:!Ec(c,B(216))&&!Ec(c,B(217))&&!Ec(c,B(218))&&!Ec(c,B(219))&&!Ec(c,B(220))&&!Ec(c,B(221))?(Ec(c,B(187))?B(152):!Ec(c,B(222))?null:B(204)):B(205);}e=b.data;a.pS=c;c=new HK;f=e.length;if(!f)g=MO(B(31));else{g=Q(Cz,f);h=g.data;i=0;while(i<f){j=new Cz;k=Q(B7,1);k.data[0]=R0(e[i]);H8(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.d_=Gv();c.ev=Gv();c.fg=Cm();if(!b.length){c=new BD;V(c);K(c);}c.C=g;c.fz=0;c.cs=0;c.c_=Ua(c);a.f=c;}
function Do(a){var b;b=a.iR;if(b===null)b=a.pS;return b;}
function GV(a){var b;b=a.fR;return b===null?null:b.hC;}
function VZ(){var a=this;C.call(a);a.mV=null;a.sB=null;a.s0=null;a.om=null;a.mi=null;a.rj=null;}
function KM(a,b,c){return Xz(a,Co(a.mV),b,c);}
function VH(a,b,c){return Xz(a,Co(a.sB),b,c);}
function Xz(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.tQ(c,d))return g.wa;f=f+1|0;}return null;}
function Nk(a,b,c){var d,e,f,g;d=(Co(a.s0)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.tQ(b,c))return g.wi;f=f+1|0;}return null;}
function Yo(){var a=this;C.call(a);a.bP=null;a.bF=null;a.c0=0;}
function ANd(){var a=new Yo();AFv(a);return a;}
function RB(a){var b=new Yo();AEO(b,a);return b;}
function AFv(a){a.bP=new Gg;a.bF=new Gg;}
function AEO(a,b){var c;c=new Gg;a.bP=c;a.bF=new Gg;Xi(c,b.bP);Xi(a.bF,b.bF);a.c0=b.c0;}
function KD(a,b,c){B4(a.bF,b,c);if(!a.c0)B4(a.bP,b,c);}
function PY(a,b){B4(a.bP,b,0);B4(a.bF,b+1|0,0);}
function D2(a){if(XO(a.bP,a.bF)>0)return a.bF;return a.bP;}
function Fx(a){if(XO(a.bP,a.bF)<0)return a.bF;return a.bP;}
function ACS(a,b){var c,d,e,f;c=D2(a);d=Fx(a);e=c.L;if(e<=b){f=BE(b,d.L);if(f<=0)return BX(b<=e?c.bb:0,f>=0?d.bb:(-1));}return null;}
function Dq(a){var b,c;b=a.bP;c=a.bF;return (b===c?1:c!==null&&Cn(b)===Cn(c)?(b.L==c.L&&b.bb==c.bb?1:0):0)?0:1;}
function ZT(a,b){var c,d;if(!Dq(a))return 0;c=D2(a);d=Fx(a);return c.L<=b&&b<d.L?1:0;}
function Ni(){var a=this;C.call(a);a.eE=null;a.eF=0;a.dd=0;}
function MP(a,b){var c,d,e;c=a.eF;d=a.eE;if(c==d.data.length)a.eE=Dl(d,c+16|0);d=a.eE.data;e=a.eF;a.eF=e+1|0;d[e]=b;}
function Xq(a){var b,c,d;b=a.dd;c=a.eF-1|0;if(b==c)a.dd=b-1|0;d=a.eE.data;a.eF=c;d[c]=null;}
function EU(){var a=this;C.call(a);a.bU=0;a.bV=null;a.eo=null;a.dD=0;a.c8=0;}
var AWl=0;var AWm=0;var AWd=0;function ABD(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.bV;j=i===b&&!i.hQ?0:1;if(j){a.bV=b;La(b,e.cB,d);}i=a.bV;k=i===null?0:EZ(i)<g?IB(EZ(a.bV),1024):IB(g,1024)+1|0;l=k<=a.dD?0:1;if(l)a.dD=k;if(!(!j&&!l)){if(AWl){m=b.fk;$rt_globals.console.info("fMeasure"+m.data);AWl=0;}if(!AWd){i=c.bn;b="alphabetic";i.textBaseline=b;}else{b=c.bn;i="top";b.textBaseline=i;}a.c8=h/1024|0;while(true){i=a.eo;if(i.i>=a.dD)break;B0(i,CU(e));}k=0;while(k<a.dD){H3(a,c,f,d,a.c8+k|0);k=k+1|0;}a.bV.hQ=0;}if(!Eb(a.eo)
&&h<=EZ(a.bV)){k=h/1024|0;g=a.c8;if(k!=g){if(I3(k-g|0)>=a.dD){g=0;while(g<a.dD){H3(a,c,f,d,k+g|0);g=g+1|0;}a.c8=k;}else{while(true){h=a.c8;if(h>=k)break;H3(a,c,f,d,h+a.dD|0);a.c8=a.c8+1|0;}while(true){h=a.c8;if(h<=k)break;H3(a,c,f,d,h-1|0);a.c8=a.c8-1|0;}}}}}
function K$(b,c){return (c-E0(b)|0)/2|0;}
function Tq(b,c){return K$(b,c)+b.qH|0;}
function H3(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Eu(b);f=a.bV.fk;g=e*1024|0;h=OS(a,g);if(h>=a.bV.o.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bU;a:{while(true){l=a.bV;if(h>=l.o.data.length)break a;l=Np(l,h);m=!AWd?Tq(d.data[l.b9],c):K$(d.data[l.b9],c);n=d.data;o=f.data;Cy(b,n[l.b9]);Ch(b,l.t,k,m);k=o[h]-j+a.bU;if(k>1024.0)break;h=h+1|0;}}CM(Bp(a.eo,e%a.dD|0),b);}
function AAJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br;if(Eb(a.eo))return;if(!a.dD)return;if(j>EZ(a.bV))return;p=a.bV;q=p.eb;r=p.o;s=j/1024|0;t=OS(a,j);u= -a.bU|0;v=i;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=h)break;z=q.data;ba=Bp(a.eo,s%a.dD|0);bb=w[t];bc=z[t]+a.bU|0;bd=s*1024|0;be=(bc-bd|0)>1024?0:1;bf=s+1|0;bg=bf*1024|0;bh=Z(bg,bc)-j|0;if(be&&y)bh=bh+a.bU|0;if((u+bh|0)>h)bh=h-u|0;bi=l!==null?0:1;b:{if(!bi)
{bj=!y?a.bU:2*a.bU|0;bk=l.b;x=l.a;if(!(bk<x&&j<=x&&(j+bh|0)>(bk+bj|0)?0:1)){bj=0;break b;}}bj=1;}c:{if(!bi){bl=!y?a.bU:2*a.bU|0;if(j>=l.b&&(j+bh|0)<=(l.a+bl|0)?1:0){bm=1;break c;}}bm=0;}bn=null;if(o)bn=k.cu.iO;if(bb===m)bn=k.cu.pY;p=BU(n);d:{e:{while(B5(p)){f:{bo=BY(p);if(bo!==null){if(!bo.cD(bb))break f;else break e;}if(bb===null)break e;}}x=0;break d;}x=1;}if(x)bn=k.cu.n8;if(!bm&&!bj){l.a=Z(l.a,EZ(a.bV));bp=j>=l.b?bh:(Z(bc,bg)-l.b|0)-(!y?a.bU:0)|0;bl=(j+bh|0)<=(l.a+(!y?a.bU:2*a.bU|0)|0)?0:(Z(bc,bg)-l.a|0)
-(!y?a.bU:0)|0;bk=j-bd|0;bc=u+c|0;bq=bk;x=bh-bp|0;CE(e,bq,0.0,x,v);Bg(f,x,i);Hd(a,d,bc,b,f,e,bb,ba,g,k,0,bn);bd=bk+bh|0;CE(e,bd-bl|0,0.0,bl,v);Bg(f,bl,i);x=bc+bh|0;Hd(a,d,x-bl|0,b,f,e,bb,ba,g,k,0,bn);br=bd-bp|0;bk=bp-bl|0;CE(e,br,0.0,bk,v);Bg(f,bk,i);Hd(a,d,x-bp|0,b,f,e,bb,ba,g,k,1,bn);}else{CE(e,j-bd|0,0.0,bh,v);Bg(f,bh,i);Hd(a,d,u+c|0,b,f,e,bb,ba,g,k,bm,bn);}j=j+bh|0;u=u+bh|0;if(!be){t=t+(-1)|0;s=bf;}t=t+1|0;}}}
function Hd(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bA!==0.0&&f.bi!==0.0){m=j.uD.data[g.cP];if(k)n=j.cu.kB;else{g=m.m_;if(g===null)g=j.cu.gv;if(l===null)l=BG(g);n=l;}g=m.nd;if(AWm)i=0.0;EG(b,c,d,e,f,h,g,n,i);return;}return;}}
function OS(a,b){var c,d,e,f,g,h,i;c=a.bV;d=c.fk;e=0;f=c.o.data.length;g=b;b=BE(e,f);if(b>0){c=new BD;V(c);K(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BE(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function Qh(a){a.bV=null;J0(a.eo,new Qi);Hp(a.eo);}
function AB$(a,b,c,d,e,f,g,h,i){var j,k;j=EZ(a.bV);if(j)j=j+a.bU|0;if(!j)j=j-a.bU|0;k=Bb( -a.bU|0,j-g|0);if(k>=h)return;Bg(f,h-k|0,e);By(b,c+k|0,d,f,i);}
function AAo(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=Q(EU,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B2(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bV===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EU;f.bU=3;f.eo=Cm();f.c8=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)Qh(o);h=h+1|0;}return g;}
function ACZ(){AWd=0;}
function ABq(){var a=this;C.call(a);a.eV=null;a.cT=null;a.dU=null;a.ep=null;a.hB=null;a.hA=null;}
function Hl(){var a=new ABq();AH4(a);return a;}
function AH4(a){a.eV=new Bk;a.cT=new Bk;a.dU=new Bk;a.ep=new Bk;a.hB=new BZ;a.hA=new BZ;}
function PF(a){var b;b=a.cT;return !Ba(b.b,b.a)?0:1;}
function IO(a,b){return F4(b,a.dU,a.ep);}
function Fe(a,b,c,d){var e,f,g,h,i;e=IO(a,b);f=F4(b,a.eV,a.cT);if(!e&&!f)return null;if(!f){if(!d)c.l(Xv(a,b.b-a.dU.b|0));else c.l(Ot(a,b.a-a.dU.a|0));}g=!d?a.eV.b+(a.cT.b/2|0)|0:a.eV.a+(a.cT.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new NJ;b.s1=a;b.s3=c;b.s2=i;}else{b=new NH;b.pN=a;b.pM=c;b.pO=i;}return b;}
function Gc(a,b,c){if(b!==null&&c!==null){BI(a.hB,c);BI(a.hA,b);return;}}
function ADY(b,c){var d;d=new TY;d.qN=b;d.l9=c;return d;}
function Ot(a,b){var c,d,e;c=a.ep.a;d=a.cT.a;e=c-d|0;return ADY(Z(Bb(0,b-(d/2|0)|0),e),e);}
function Xv(a,b){var c,d,e;c=a.ep.b;d=a.cT.b;e=c-d|0;return ADY(Z(Bb(0,b-(d/2|0)|0),e),e);}
function Is(a,b,c,d,e,f,g){NO(a,b,c,d,e,f,g,1);}
function Mn(a,b,c,d,e,f,g){NO(a,b,c,d,e,f,g,0);}
function NO(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bg(a.ep,0,0);Bg(a.cT,0,0);}else{i=Z(g*3|0,d);j=Bb(PB(d,d,e),i);e=e-d|0;i=d-j|0;i=i?PB(b,i,e):0;if(!h){k=a.eV;k.b=i+c|0;k.a=f-g|0;l=a.cT;l.b=j;l.a=g;l=a.dU;l.b=c;l.a=k.a;k=a.ep;k.b=d;k.a=g;}else{k=a.eV;k.b=f-g|0;k.a=i+c|0;l=a.cT;l.b=g;l.a=j;l=a.dU;l.b=k.b;l.a=c;k=a.ep;k.b=g;k.a=d;}}}
function PS(a,b){FT(a,b);Gb(a,b);}
function FT(a,b){var c;c=a.dU;By(b,c.b,c.a,a.ep,a.hB);}
function Gb(a,b){var c,d;c=a.cT;c.b=c.b-2|0;c.a=c.a-2|0;d=a.eV;By(b,d.b+1|0,d.a+1|0,c,a.hA);b=a.cT;b.b=b.b+2|0;b.a=b.a+2|0;}
function Fp(a,b,c){return IO(a,b)&&Hb(c)?1:0;}
function ABr(){var a=this;C.call(a);a.w5=20;a.fM=null;a.e5=null;a.ih=null;a.ki=0;a.ig=0;a.iY=0.0;a.cw=null;a.w$=null;a.eA=null;a.fd=null;a.fq=0;}
function ABK(){var a=new ABr();AQC(a);return a;}
function AQC(a){var b;a.w5=20;a.fM=new Bk;a.e5=new Bk;a.cw=Cm();b=Q(BZ,1);b.data[0]=null;a.w$=b;}
function XM(a,b){var c,d,e,f,g;c=a.fq;if(b==c)return;d=a.cw.i;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Bb(0,(c-1|0)/20|0);f=Bb(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){Sz(a,b);a.fq=b;}else{if(a.fq>=b)while(true){if(g<f)break a;a.fq=S3(Bp(a.cw,g%d|0),a.eA,a.fd,a.fq,b,e,a.iY);g=g+(-1)|0;}while(f<=g){a.fq=S3(Bp(a.cw,f%d|0),a.eA,a.fd,a.fq,b,e,a.iY);f=f+1|0;}}}}
function Qw(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=BU(a.cw);while(B5(f)){g=BY(f);h=a.fM;i=Ba(a.cw.i,a.ig);j=g.ew.a;k=((g.iP.a-(b%i|0)|0)+i|0)%i|0;l=k+j|0;m=BE(l,c);if(m<=0){Bg(g.gc,Ce(g.b0),j);CE(g.fE,0.0,0.0,Ce(g.b0),j);I0(g,e,k,h,d.ia,d.g$);}else{if(m>0&&k<c){m=Bb(c-k|0,0);Bg(g.gc,Ce(g.b0),m);CE(g.fE,0.0,0.0,Ce(g.b0),m);I0(g,e,k,h,d.ia,d.g$);}if(l>i){m=Z(l%i|0,c);Bg(g.gc,Ce(g.b0),m);CE(g.fE,0.0,b%C8(g.b0)|0,Ce(g.b0),m);I0(g,e,0,h,d.ia,d.g$);}}}}
function JX(a,b,c,d){var e,f,g,h,i,j;e=a.cw.i;while(true){f=a.cw.i;g=Ba(f,a.ig);if(g>(d+a.ki|0))break;h=BX(0,g);i=new Na;g=a.e5.b;f=a.ki;j=a.ih;i.gc=new Bk;i.fE=new BZ;i.iP=h;i.dH=20;i.et=f;i.ew=BX(g,20*f|0);i.fH=Tq(j,f);if(i.b0===null)i.b0=CU(b);B0(a.cw,i);}if(f==e)return;Sz(a,c);}
function Sz(a,b){var c,d,e,f,g,h,i,j;c=a.cw;d=c.i;e=Ba((b/(d*20|0)|0)+1|0,d)*20|0;c=BU(c);while(B5(c)){f=BY(c);g=a.eA;h=a.iY;Eu(g);i=0;while(true){j=f.dH;if(i>=j)break;j=e-Ba(d,j)|0;if(j<b)j=e;e=j+1|0;F5(f,g,C5(e),Ba(f.et,i)+f.fH|0,h);i=i+1|0;}CM(f.b0,g);}}
function TI(a,b,c,d){var e;a.ih=b;a.ki=c;e=c*20|0;a.ig=e;b=CG(a.eA,CK(d,a.e5.b,e));a.eA=b;Cy(b,a.ih);R9(a.eA,2);b=CG(a.fd,CK(d,a.e5.b,c));a.fd=b;Cy(b,a.ih);R9(a.fd,2);}
function NR(a){J0(a.cw,new RC);Hp(a.cw);a.eA=CG(a.eA,null);a.fd=CG(a.fd,null);}
function Vs(a,b,c,d,e){CA(a.fM,b);Bg(a.e5,c,d);a.iY=e;}
var Wg=F(0);
var Ho=F(0);
var EN=F();
function Eb(a){return a.i?0:1;}
function HF(a,b){var c,d,e,f,g,h;c=b.data;d=a.i;e=c.length;if(e<d)b=UL(H9(Cn(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BU(a);while(B5(f)){g=b.data;h=e+1|0;g[e]=BY(f);e=h;}return b;}
var I$=F(0);
function F3(){EN.call(this);this.ct=0;}
function BU(a){var b;b=new Nr;b.gA=a;b.lO=a.ct;b.ii=a.ne();b.f1=(-1);return b;}
function Qa(a,b){var c,d;c=a.i;d=0;while(true){if(d>=c)return (-1);if(C6(b,Bp(a,d)))break;d=d+1|0;}return d;}
function AMc(a,b){var c,d;if(!ID(b,I$))return 0;c=b;if(a.i!=c.i)return 0;d=0;while(d<c.i){if(!C6(Bp(a,d),Bp(c,d)))return 0;d=d+1|0;}return 1;}
var Il=F(0);
function NN(){var a=this;F3.call(a);a.ci=null;a.i=0;}
function Cm(){var a=new NN();AII(a);return a;}
function AWn(a){var b=new NN();MG(b,a);return b;}
function AII(a){MG(a,10);}
function MG(a,b){a.ci=Q(C,b);}
function Ji(a,b){var c,d;c=a.ci.data.length;if(c<b){d=c>=1073741823?2147483647:Bb(b,Bb(c*2|0,5));a.ci=Dl(a.ci,d);}}
function Bp(a,b){I8(a,b);return a.ci.data[b];}
function AM7(a){return a.i;}
function B0(a,b){var c,d;Ji(a,a.i+1|0);c=a.ci.data;d=a.i;a.i=d+1|0;c[d]=b;a.ct=a.ct+1|0;return 1;}
function Ro(a,b,c){var d,e,f;O_(a,b);Ji(a,a.i+1|0);d=a.i;e=d;while(e>b){f=a.ci.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.ci.data[b]=c;a.i=d+1|0;a.ct=a.ct+1|0;}
function El(a,b){var c,d,e,f;I8(a,b);c=a.ci.data;d=c[b];e=a.i-1|0;a.i=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.ct=a.ct+1|0;return d;}
function V4(a,b){var c;c=Qa(a,b);if(c<0)return 0;El(a,c);return 1;}
function Hp(a){Zq(a.ci,0,a.i,null);a.i=0;a.ct=a.ct+1|0;}
function I8(a,b){var c;if(b>=0&&b<a.i)return;c=new Bx;V(c);K(c);}
function O_(a,b){var c;if(b>=0&&b<=a.i)return;c=new Bx;V(c);K(c);}
function J0(a,b){var c;c=0;while(c<a.i){b.l(a.ci.data[c]);c=c+1|0;}}
function N4(a,b){var c,d,e,f,g,h,i;c=a.ci;d=a.i;if(b===null)b=AUH;e=Q(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}Z_(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.ct=a.ct+1|0;}
function US(){C.call(this);this.xV=null;}
function BZ(){var a=this;C.call(a);a.bl=0.0;a.bz=0.0;a.bi=0.0;a.bA=0.0;}
function AQE(a){var b=new BZ();AME(b,a);return b;}
function CE(a,b,c,d,e){a.bl=b;a.bz=c;a.bi=d;a.bA=e;}
function AME(a,b){a.bl=b.bl;a.bz=b.bz;a.bi=b.bi;a.bA=b.bA;}
function BI(a,b){a.bl=b.bl;a.bz=b.bz;a.bi=b.bi;a.bA=b.bA;return a;}
function ARr(a,b){if(a===b)return 1;return b!==null&&Cn(a)===Cn(b)&&Ku(a,b)?1:0;}
function Ku(a,b){return b.bl===a.bl&&b.bz===a.bz&&b.bi===a.bi&&b.bA===a.bA?1:0;}
function UR(){C.call(this);this.q2=null;}
function AOS(a,b){var c;c=a.q2;E7(c,FJ(b,Iu(c)));}
function UN(){C.call(this);this.nq=null;}
function AMP(a,b){var c;c=a.nq;Id(c,FJ(b,Kg(c)));}
function UM(){C.call(this);this.tf=null;}
function AOP(a){var b,c;b=a.tf;c=b.hT?0:1;b.hT=c;b=new M;O(b);F2(G(b,B(223)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function UP(){C.call(this);this.rq=null;}
function AJS(a){var b,c;b=a.rq;c=b.hI?0:1;b.hI=c;b=new M;O(b);F2(G(b,B(224)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function UO(){C.call(this);this.nM=null;}
function AL9(a){var b,c;b=a.nM;c=b.jb^1;b.jb=c;b=new M;O(b);F2(G(b,B(225)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Vd(){C.call(this);this.tC=null;}
function AOf(a){var b,c,d,e,f;b=a.tC;c=(b.kD+3|0)%6|0;b.kD=c;d=b.gl.data;e=d.length;f=0;while(f<e){b=d[f];b.bU=c;b=b.bV;if(b!==null)b.hQ=1;f=f+1|0;}}
function Vc(){C.call(this);this.qn=null;}
function AJu(a){var b;b=a.qn;b.bI=b.bI?0:1;NR(b.dR);b.dR=ABK();RV(b,b.bd,b.cz,b.cg.bM);}
var Fr=F(Cj);
var AWb=null;var AWo=null;var AWc=null;var AWp=null;function AE8(){AE8=Bm(Fr);AMf();}
function ABT(a,b){var c=new Fr();ABG(c,a,b);return c;}
function ABG(a,b,c){AE8();C_(a,b,c);}
function AMf(){var b;AWb=ABT(B(226),0);AWo=ABT(B(227),1);b=ABT(B(228),2);AWc=b;AWp=H(Fr,[AWb,AWo,b]);}
function Kh(){C.call(this);this.w3=null;}
var AVy=null;var AWq=null;function AKd(){AKd=Bm(Kh);ARz();}
function AH1(a){var b=new Kh();Yk(b,a);return b;}
function Yk(a,b){AKd();a.w3=b;}
function ARz(){AVy=AH1(B(229));AWq=AH1(B(230));}
var UB=F(0);
function Hb(a){return DB(a,null);}
function UG(b){var c;c=new NK;c.np=b;return c;}
function Mw(){C.call(this);this.m$=null;}
function ALh(a){KI(a.m$);}
function Mx(){C.call(this);this.qq=null;}
function AJL(a){JO(a.qq);}
var XY=F(0);
var AWj=null;function ADi(){AWj=new NA;}
function Iz(){var a=this;C.call(a);a.P=null;a.y=null;a.bT=null;a.b2=null;}
function AK8(){var a=new Iz();Sa(a);return a;}
function SH(a,b,c,d){var e=new Iz();AHZ(e,a,b,c,d);return e;}
function Sa(a){a.P=new Bk;a.y=new Bk;a.bT=new BZ;a.b2=new BZ;}
function AHZ(a,b,c,d,e){a.P=new Bk;a.y=new Bk;a.bT=new BZ;a.b2=new BZ;PP(a,b,c,d,e);}
function PP(a,b,c,d,e){Bg(a.P,b,c);Bg(a.y,d,e);}
function S2(a){Bg(a.y,0,0);}
function LX(a){var b;b=a.y;return Ba(b.b,b.a)?0:1;}
function Eq(a,b){return F4(b,a.P,a.y);}
function Ux(a,b,c,d){var e;e=a.P;By(b,e.b+c|0,e.a+d|0,a.y,a.bT);}
function T9(a,b,c,d,e,f){var g,h,i,j;g=a.P;d=g.b+d|0;e=g.a+e|0;g=a.y;h=a.b2;i=a.bT;K5(b,b.hg);L_(b.hg,b.bD,d,e,g,b.dG);Un(b.hg,b.bD,c);g=b.hg;j=b.bD;Ic(j,g.uI,h);Ic(j,g.uG,i);c=g.pT;j.uniform2f(c,f,0.0);KT(b);}
function HK(){var a=this;C.call(a);a.C=null;a.c_=null;a.d_=null;a.ev=null;a.fg=null;a.cs=0;a.fz=0;a.pj=0.0;}
function Ua(a){var b,c,d,e,f,g,h,i;b=Tu(a);c=new IP;d=new NN;e=NY(0,b,0);f=new XJ;f.tc=e;MG(d,1);e=BU(f);g=0;while(true){h=d.ci.data;i=h.length;if(g>=i)break;h[g]=BY(e);g=g+1|0;}d.i=i;Uh(c,d);return c;}
function B2(a,b){return a.C.data[b];}
function Cp(a){return a.C.data.length;}
function Tu(a){return F7(a,Cp(a));}
function Fk(a,b){return a.C.data[b].R;}
function KX(a,b){var c,d,e,f,g,h,i;c=a.C.data;d=c[b];e=c[b+1|0];f=DO(LD(d.o,e.o));g=a.C;h=g.data.length;if(b<h&&b>=0){i=Q(Cz,h-1|0);c=i.data;Q7(g,b,i);c[b]=f;a.C=i;return;}d=new Bo;V(d);K(d);}
function O5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.C.data;if(!(c<d[b].R?0:1)){d=(B2(a,b)).o.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.t)){f=L(h.t,g);break a;}g=g-I(h.t)|0;f=f+1|0;}f=0;}EL();h=new Bv;d=BL(1);d.data[0]=f;Hj(h,d);Gs(a,b,c,1,h);h=a.C.data[b];i=h.o;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].t);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].t)==1)h.o=Q7(i,j,Q(B7,e-1|0));else{k=d[j];if(c<=0)l=DC(Dk(k.t,1),k.cP,k.b9);else if(c>=(I(k.t)-1|0)){l=new B7;m=k.t;Vm(l,B$(m,0,I(m)-
1|0),k.cP,k.b9);}else{i=BL(I(k.t)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.t,b);b=b+1|0;}b=n.length;while(c<b){m=k.t;e=c+1|0;n[c]=L(m,e);c=e;}l=DC(FS(i),k.cP,k.b9);}d[j]=l;}h.R=h.R-1|0;Ee(h);}else if(b!=(d.length-1|0))KX(a,b);}
function X3(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Xe(a.C.data[b],c,e[0]);return;}g=f-1|0;h=IF(a.C.data[b],c);d=a.C;i=Dl(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.o.data;m=l.length;c=!m?0:I(l[m-1|0].t);Jv(j,j.o.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fo(e[m]))j=DO(Q(B7,0));else{j=new Cz;l=Q(B7,1);l.data[0]=DC(e[m],0,0);H8(j,l);}d[b+m|0]=j;m=m+1|0;}Jv(h[1],0,0,e[g]);d[b+g|0]=h[1];a.C
=i;}
function V_(a,b){var c,d,e,f,g,h,i;c=D2(b);d=Fx(b);e=c.L;if(e==d.L)return B$(EJ(a.C.data[e]),c.bb,d.bb);f=new M;O(f);b=a.C.data[c.L];e=c.bb;BA(B1(f,Dk(EJ(b),e)),10);g=a.C;h=c.L+1|0;e=d.L;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;Yx(B1(f,EJ(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.C.data[d.L];i=d.bb;B1(f,B$(EJ(b),0,i));return N(f);}}b=new WJ;V(b);K(b);}
function Tx(a,b,c){var d;UQ(a,b);d=D2(b);Gs(a,d.L,d.bb,1,c);}
function UQ(a,b){var c,d,e,f,g,h,i;a:{c=D2(b);d=Fx(b);e=c.L;if(e==d.L)FR(a.C.data[e],c.bb,d.bb);else{b=a.C.data[e];FR(b,c.bb,b.R);FR(a.C.data[d.L],0,d.bb);e=c.L+1|0;f=d.L;g=a.C;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=Q(Cz,(h-f|0)+e|0);AAG(g,e,f,i);a.C=i;KX(a,c.L);break a;}b=new Bo;V(b);K(b);}b=new Bo;V(b);K(b);}}}
function HI(a,b,c){return ES(b,GU(B2(a,b),c));}
function Nu(a,b){var c,d,e;c=0;d=0;while(true){e=a.C.data.length;if(c>=e)break;if((d+(B2(a,c)).R|0)>=b)return BX(c,b-d|0);d=d+((B2(a,c)).R+1|0)|0;c=c+1|0;}return BX(e,0);}
function F7(a,b){var c,d,e;c=0;d=a.C.data.length;e=0;while(e<b){c=c+Fk(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Kb(a,b){return UY(B2(a,b.bs),b.bE);}
function EE(a){var b,c,d,e,f,g,h,i,j;b=BL(Tu(a));c=b.data;d=a.C.data.length;e=0;f=0;while(e<d){g=a.C.data[e].o.data;h=g.length;i=0;while(i<h){j=g[i].t;PA(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gs(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cs=a.cs+1|0;f=a.fg;g=Q(GY,1);h=new GY;h.eH=b;h.fe=c;i=LR(e,B(180),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BX(b,c+I(i[0])|0);break a;}k=BX((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=BX(b,c);}i=g.data;h.kE=k;h.jq=d;h.gR=e;i[0]=h;B0(f,g);JF(a,b,c,d,e);}
function JF(a,b,c,d,e){var f;f=F7(a,b)+c|0;if(!d)Pv(a.c_,f,I(e));else TZ(a.c_,f,I(e));}
function Tn(a,b){var c,d,e;c=LR(b.gR,B(180),(-1));if(b.jq){X3(a,b.eH,b.fe,c);Pv(a.c_,F7(a,b.eH)+b.fe|0,I(b.gR));}else{c=c.data;d=ANd();B4(d.bP,b.eH,b.fe);e=c.length;if(e==1)B4(d.bF,b.eH,b.fe+I(c[0])|0);else B4(d.bF,(b.eH+e|0)-1|0,I(c[e-1|0]));UQ(a,d);TZ(a.c_,F7(a,b.eH)+b.fe|0,I(b.gR));}return b.kE;}
function Pe(a){a.fz=a.cs;}
var EW=F();
function Me(){EW.call(this);this.wa=null;}
function Mz(){EW.call(this);this.wi=null;}
function P1(){EW.call(this);this.xi=null;}
var GS=F(0);
var Rn=F(0);
function Gg(){var a=this;C.call(a);a.L=0;a.bb=0;}
function B4(a,b,c){a.L=b;a.bb=c;}
function Xi(a,b){a.L=b.L;a.bb=b.bb;}
function XO(a,b){var c;c=BE(a.L,b.L);if(c)return c;return BE(a.bb,b.bb);}
function Jh(){var a=this;C.call(a);a.kZ=null;a.lG=null;}
function I1(a){return a.kZ.bs;}
function LG(a){return a.kZ.bE;}
var KF=F(F9);
var AU2=null;function AIo(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AEv(){var b;b=new KF;X8(b);AU2=b;}
var Wb=F(0);
function SS(){C.call(this);this.hb=null;}
function FG(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.hb));}
function D6(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.hb));}
function AHn(a){var b,c;b=a.hb.byteLength;c=new M;O(c);G(T(G(c,B(231)),b),B(232));return N(c);}
var UD=F(0);
function K1(){var a=this;C.call(a);a.gx=null;a.e0=null;a.lA=null;}
function AB3(a,b){var c=new K1();AJ$(c,a,b);return c;}
function ASb(a,b,c){var d=new K1();NT(d,a,b,c);return d;}
function Yv(b){var c,d,e,f,g,h,i,j,k;c=new K1;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=UL(E(V8),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=f[h];h=h+1|0;}}i=g.data;h=i.length;if(!h)j=Q(Bv,0);else{j=Q(Bv,h-1|0);g=j.data;h=0;k=g.length;while(h<k){g[h]=FA(i[h]);h=h+1|0;}}}else j=Q(Bv,0);NT(c,d,b,j);return c;}
function AJ$(a,b,c){NT(a,b,c,Q(Bv,0));}
function NT(a,b,c,d){a.gx=b;a.e0=c;a.lA=d;}
function Jz(a,b){var c,d,e;c=b|0;if(c===b)return c;d=Ey(a);e=new M;O(e);G(G(e,B(233)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function Ey(a){var b;b=a.gx;return FA(b!==null?b.name:a.e0.name);}
function AKB(a){var b,c,d,e,f;if(a.e0===null){b=a.lA;c=Ey(a);d=ZM(b);e=new M;O(e);G(G(G(e,d),B(234)),c);c=N(e);}else{b=a.lA;c=Ey(a);f=Jz(a,a.e0.size);d=ZM(b);e=new M;O(e);T(G(G(G(G(e,d),B(234)),c),B(235)),f);c=N(e);}return c;}
function NK(){C.call(this);this.np=null;}
function DB(a,b){Go(a.np,b);return 1;}
function ABb(){var a=this;EA.call(a);a.dr=0;a.b6=null;a.c4=0;a.u1=0.0;a.kr=0;}
function Gv(){var a=new ABb();AHU(a);return a;}
function AHU(a){var b;b=ADU(16);a.dr=0;a.b6=Q(H_,b);a.u1=0.75;UW(a);}
function ADU(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function UW(a){a.kr=a.b6.data.length*a.u1|0;}
function NI(a,b){return S5(a,b)===null?0:1;}
function DN(a,b){var c;c=S5(a,b);if(c===null)return null;return c.dx;}
function S5(a,b){var c,d;if(b===null)c=Sb(a);else{d=b.i9();c=PZ(a,b,d&(a.b6.data.length-1|0),d);}return c;}
function PZ(a,b,c,d){var e;e=a.b6.data[c];while(e!==null&&!(e.iM==d&&YV(b,e.du))){e=e.cN;}return e;}
function Sb(a){var b;b=a.b6.data[0];while(b!==null&&b.du!==null){b=b.cN;}return b;}
function K7(a,b,c){var d,e,f;if(b===null){d=Sb(a);if(d===null){a.c4=a.c4+1|0;d=UI(a,null,0,0);e=a.dr+1|0;a.dr=e;if(e>a.kr)U9(a);}}else{e=b.i9();f=e&(a.b6.data.length-1|0);d=PZ(a,b,f,e);if(d===null){a.c4=a.c4+1|0;d=UI(a,b,f,e);e=a.dr+1|0;a.dr=e;if(e>a.kr)U9(a);}}b=d.dx;d.dx=c;return b;}
function UI(a,b,c,d){var e,f,g;e=new H_;f=null;e.du=b;e.dx=f;e.iM=d;g=a.b6.data;e.cN=g[c];g[c]=e;return e;}
function U9(a){var b,c,d,e,f,g,h,i;b=a.b6.data.length;b=ADU(!b?1:b<<1);c=Q(H_,b);d=c.data;e=0;f=b-1|0;while(true){g=a.b6.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.iM&f;i=h.cN;h.cN=d[b];d[b]=h;h=i;}e=e+1|0;}a.b6=c;UW(a);}
function YV(b,c){return b!==c&&!b.cD(c)?0:1;}
function Cz(){var a=this;C.call(a);a.o=null;a.R=0;a.fk=null;a.eb=null;a.dn=null;a.gQ=null;a.fG=0;a.hQ=0;a.hq=0;}
var AWr=0;var AWs=0;var AWf=0;function DO(a){var b=new Cz();H8(b,a);return b;}
function H8(a,b){var c,d,e,f;c=b.data;a.o=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].t)|0;f=f+1|0;}a.R=d;Ee(a);}
function Np(a,b){return a.o.data[b];}
function GU(a,b){var c;c=Io(a,b);return c<=0?0:a.dn.data[c-1|0];}
function Io(a,b){var c,d,e,f;c=a.o.data.length;if(!c)return (-1);if(!(a.dn!==null&&!a.hq)){Wx(a);d=0;e=0;f=a.o.data.length;while(d<f){e=e+I(a.o.data[d].t)|0;a.dn.data[d]=e;d=d+1|0;}a.hq=0;}d=T1(a.dn,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function UY(a,b){var c;c=a.o.data;if(!c.length)return null;return c[Io(a,b)];}
function FR(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.R){a.o=Q(B7,0);Ee(a);a.R=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.o.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].t);i=I(a.o.data[f].t);j=BE(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.o.data[f];if(!b&&c==I(k.t)?1:0){g=a.o;a.o=Q7(g,e,Q(B7,g.data.length-1|0));a.R=a.R-d|0;Ee(a);return;}a.o.data[e]=DC(Fb(B$(k.t,0,b),Dk(k.t,c)),k.cP,k.b9);}else{g=a.o.data;l=g[e];m=g[f];if(b){if(b!=
I(l.t))a.o.data[e]=DC(B$(l.t,0,b),l.cP,l.b9);e=e+1|0;}if(c==I(m.t))f=f+1|0;else if(c)a.o.data[f]=DC(Dk(m.t,c),m.cP,m.b9);g=a.o;a.o=AAG(g,e,f,Q(B7,(g.data.length-f|0)+e|0));}a.R=a.R-d|0;Ee(a);}
function IF(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(Cz,[DO(Q(B7,0)),a]);if(b>=a.R)return H(Cz,[a,DO(Q(B7,0))]);c=a.o;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].t);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(Cz,[DO(KS(c,0,Q(B7,d))),DO(KS(c,d,Q(B7,f-d|0)))]);h=e[d];e=KS(c,0,Q(B7,d+1|0));i=e.data;j=KS(c,d,Q(B7,f-d|0));c=j.data;i[d]=DC(B$(h.t,0,b),h.cP,h.b9);c[0]=DC(Dk(h.t,b),h.cP,h.b9);return H(Cz,[DO(e),DO(j)]);}
function Xe(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.o.data;if(e>=f.length)break a;g=I(f[d].t);if(b<=g)break;b=b-g|0;d=e;}}Jv(a,d,b,c);}
function Jv(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.o;f=e.data;g=f.length;if(!g){h=Q(B7,1);h.data[0]=R0(d);a.o=h;}else if(!b&&!c){i=Q(B7,g+1|0);h=i.data;Eg(e,0,i,1,g);h[0]=R0(d);a.o=i;}else{j=f[b];if(c<=0)k=DC(Fb(d,j.t),j.cP,j.b9);else if(c>=I(j.t))k=DC(Fb(j.t,d),j.cP,j.b9);else{l=I(d);m=l+c|0;n=I(j.t)-c|0;h=BL(I(j.t)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.t,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.t,g+c|0);g=g+1|0;}k=DC(FS(h),j.cP,j.b9);}f[b]=k;}a.R=a.R+I(d)|0;Ee(a);}
function Xf(a){var b,c,d,e,f,g;b=0;c=a.o.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Md(f)){if(L(f.t,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function La(a,b,c){var d,e,f,g,h,i,j;d=a.o.data.length;e=a.fk;if(!(e!==null&&e.data.length>=d)){a.fk=AEN(d);a.eb=BC(d);a.fG=1;}Wx(a);if(!a.fG)AWs=AWs+1|0;else{f=0;g=0.0;AWr=AWr+1|0;h=0;while(h<d){i=c.data;j=a.o.data[h];f=f+I(j.t)|0;a.dn.data[h]=f;Cy(b,i[j.b9]);g=g+Eo(b,j.t);a.fk.data[h]=g;a.eb.data[h]=g+0.5|0;h=h+1|0;}a.R=f;a.fG=0;a.hq=0;}}
function Wx(a){var b;b=a.dn;if(!(b!==null&&b.data.length>=a.o.data.length)){a.dn=BC(a.o.data.length);a.hq=1;}}
function Ee(a){a.fG=1;a.hQ=1;a.hq=1;a.gQ=null;}
function WQ(a,b,c,d){var e,f,g,h,i,j,k;if(a.gQ===null)a.gQ=Q($rt_arraycls($rt_intcls()),a.o.data.length);e=a.gQ.data[d];if(e===null){e=c.data;f=a.o.data[d];Cy(b,e[f.b9]);f=f.t;e=BC(I(f)-1|0);c=Gp(f);g=!d?0.0:a.fk.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;Yb(f,c,0,k);h[i]=g+Eo(b,f)+0.5|0;i=k;}a.gQ.data[d]=e;}return e;}
function GW(a,b,c,d){var e,f,g,h,i;if(a.o.data.length&&b){if(!(!a.fG&&a.eb!==null))La(a,c,d);if(b>=a.R)return a.eb.data[a.o.data.length-1|0];e=0;f=0;a:{while(true){g=a.o.data;if(f>=g.length)break a;h=e+I(g[f].t)|0;i=BE(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eb.data[f];}return (WQ(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function EZ(a){var b,c,d;a:{b=a.o.data.length;if(b){c=a.eb.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GP(a,b){var c;if(b>=a.R)return b+1|0;c=Io(a,b);return a.dn.data[c];}
function EJ(a){var b,c,d,e;b=new M;FU(b,a.R);c=a.o.data;d=c.length;e=0;while(e<d){B1(b,c[e].t);e=e+1|0;}return N(b);}
function MO(b){var c,d,e,f;c=Q(Cz,1);d=c.data;e=new Cz;f=Q(B7,1);f.data[0]=R0(b);H8(e,f);d[0]=e;return c;}
function YC(){AWf=0;}
var NA=F();
function ARd(a){}
function B7(){var a=this;C.call(a);a.t=null;a.cP=0;a.b9=0;}
function R0(a){var b=new B7();AP2(b,a);return b;}
function DC(a,b,c){var d=new B7();Vm(d,a,b,c);return d;}
function AP2(a,b){Vm(a,b,0,0);}
function Vm(a,b,c,d){a.t=b;a.cP=c;a.b9=d;}
function Hg(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Md(a){return I(a.t);}
function IP(){var a=this;C.call(a);a.cR=null;a.d2=0;}
var AWt=null;var AWu=null;function ATu(a){var b=new IP();Uh(b,a);return b;}
function ASx(a,b){var c=new IP();X7(c,a,b);return c;}
function Vt(b,c){var d;d=BE(b.bN,c.bN);if(!d)d=BE(c.bS,b.bS);return d;}
function Uh(a,b){X7(a,null,b);}
function X7(a,b,c){var d,e;a.d2=0;if(Eb(c))return;N4(c,AWt);if(b!==null)a.cR=MB(b);c=BU(c);while(B5(c)){d=BY(c);e=a.cR;if(e!==null){Q_(a,e,MB(d));continue;}a.cR=MB(d);}}
function O7(a,b){var c;if(b.eW)return b;b=BU(b.bx);while(true){if(!B5(b))return null;c=O7(a,BY(b));if(c!==null)break;}return c;}
function Kx(a,b,c){var d,e,f;d=b.b4;if(d.bN==c.bN&&d.bS==c.bS?1:0){e=BU(b.bx);while(B5(e)){f=Kx(a,BY(e),c);if(f!==null)return f;}return b;}b=BU(b.bx);while(true){if(!B5(b))return null;d=BY(b);if(P6(d,c.bN,c.bS)){e=Kx(a,d,c);if(e!==null)break;}}return e;}
function Wy(a,b,c){B0(c,b.b4);b=BU(b.bx);while(B5(b)){Wy(a,BY(b),c);}}
function Pv(a,b,c){a.d2=0;Je(a,a.cR,b,c);}
function Je(a,b,c,d){var e;if(C9(b)<c)return;a:{if(CX(b)>c){Kv(b,d);FV(b,d);b=BU(b.bx);while(B5(b)){Je(a,BY(b),c,d);}}else{if(!Kd(b,c)){if(a.d2)break a;if(C9(b)!=c)break a;}FV(b,d);if(CX(b)==c&&a.d2)Kv(b,d);e=BU(b.bx);while(B5(e)){Je(a,BY(e),c,d);}if(!a.d2){b.eW=1;a.d2=1;}}}}
function TZ(a,b,c){a.d2=0;Mi(a,a.cR,b,c);}
function Mi(a,b,c,d){var e,f,g,h;if(C9(b)<c)return;e=CX(b);f=c+d|0;if(e>f){e= -d|0;Kv(b,e);FV(b,e);g=BU(b.bx);while(B5(g)){Mi(a,BY(g),c,d);}b.bx=NC(a,b.bx);}else{g=b.b4;if(c<=g.bN&&g.bS<=f?1:0){if(b!==a.cR){Jm(b,(-1));J_(b,(-1));}else{Jm(b,0);J_(b,0);}Hp(b.bx);}else{e=Kd(b,c);f=Kd(b,f);if(e&&f)FV(b, -d|0);else if(e)J_(b,c);else{if(!f)return;Jm(b,c);FV(b, -d|0);}h=BU(b.bx);while(B5(h)){Mi(a,BY(h),c,d);}b.bx=NC(a,b.bx);if(!a.d2){b.eW=1;a.d2=1;}}}}
function NC(a,b){var c,d,e,f,g,h;c=Cm();d=null;N4(b,AWu);b=BU(b);while(B5(b)){e=BY(b);if(CX(e)==C9(e))continue;if(!e.eW){if(d!==null){B0(c,d);d=null;}B0(c,e);}else if(d===null)d=e;else{f=Z(CX(d),CX(e));g=Bb(C9(d),C9(e));h=MB(NY(f,g,d.b4.fc));h.dI=e.dI;h.eW=1;d=h;}}if(d!==null)B0(c,d);return c;}
function Q_(a,b,c){var d,e;a:{if(OC(b,c)){d=BU(b.bx);while(true){if(!B5(d)){B0(b.bx,c);c.dI=b;break a;}e=BY(d);if(OC(e,c))break;}Q_(a,e,c);return;}}}
function Sc(a,b,c,d){var e,f,g,h,i,j;if((C9(c)-CX(c)|0)<43)e=B$(d,CX(c),C9(c));else{e=B$(d,CX(c),CX(c)+20|0);f=B$(d,C9(c)-20|0,C9(c));g=new M;O(g);G(G(G(g,e),B(153)),f);e=N(g);}e=Ve(e,B(180),B(236));f=Bu();g=Cx(c);h=new M;O(h);i=T(h,b);BA(i,32);g=G(i,g);BA(g,9);G(g,e);Br(f,N(h));c=BU(c.bx);j=b+1|0;while(B5(c)){Sc(a,j,BY(c),d);}}
function ACm(){AWt=new Xs;AWu=new Xu;}
function ADX(){var a=this;C.call(a);a.bN=0;a.bS=0;a.fc=0;}
function NY(a,b,c){var d=new ADX();AH0(d,a,b,c);return d;}
function AH0(a,b,c,d){a.bN=b;a.bS=c;a.fc=d;}
function APn(a,b){var c;if(a===b)return 1;if(b!==null&&Cn(a)===Cn(b)){c=b;return a.bN==c.bN&&a.bS==c.bS&&a.fc==c.fc?1:0;}return 0;}
function AGv(a,b){var c;b=b;c=BE(a.bN,b.bN);if(!c)c=BE(b.bS,a.bS);return c;}
var Xs=F();
function AJh(a,b,c){return Vt(b,c);}
var Xu=F();
function AKY(a,b,c){b=b;c=c;return Vt(b.b4,c.b4);}
var EX=F();
var AWv=null;var AWw=null;var AWx=null;var AWy=null;var AWz=null;var AWA=null;function ABR(){AWv=new VC;AWw=new VA;AWx=new VB;AWy=new Vy;AWz=new Vz;AWA=new X_;}
var G2=F(F3);
function ALS(a,b){var c;c=new Fh;V(c);K(c);}
function XJ(){G2.call(this);this.tc=null;}
function AIm(a){return 1;}
function AQ2(a,b){var c;if(!b)return a.tc;c=new Bx;V(c);K(c);}
function YA(){var a=this;C.call(a);a.b4=null;a.dI=null;a.bx=null;a.eW=0;}
function MB(a){var b=new YA();ANJ(b,a);return b;}
function ANJ(a,b){a.eW=0;a.b4=b;a.dI=null;a.bx=Cm();}
function CX(a){return a.b4.bN;}
function C9(a){return a.b4.bS;}
function Jm(a,b){a.b4.bN=b;}
function J_(a,b){a.b4.bS=b;}
function Kv(a,b){var c;c=a.b4;c.bN=c.bN+b|0;}
function FV(a,b){var c;c=a.b4;c.bS=c.bS+b|0;}
function Kd(a,b){return CX(a)<=b&&b<C9(a)?1:0;}
function P6(a,b,c){var d;d=a.b4;return d.bN<=b&&c<=d.bS?1:0;}
function OC(a,b){b=b.b4;return P6(a,b.bN,b.bS);}
function AJp(a){var b,c,d,e,f;b=a.b4;c=b.bN;d=b.bS;e=b.fc;b=new M;O(b);BA(b,40);BA(T(G(T(G(T(b,c),B(43)),d),B(43)),e),41);b=N(b);c=a.eW;f=new M;O(f);F2(G(G(f,b),B(43)),c);return N(f);}
var OM=F(0);
var Ga=F(EN);
var Ka=F(Ga);
var VC=F(Ka);
var Ln=F(EA);
var VA=F(Ln);
var VB=F(G2);
var FB=F(0);
var Vy=F();
var Pa=F(0);
var Vz=F();
var X_=F();
function Nr(){var a=this;C.call(a);a.ho=0;a.lO=0;a.ii=0;a.f1=0;a.gA=null;}
function B5(a){return a.ho>=a.ii?0:1;}
function BY(a){var b,c;O0(a);b=a.ho;a.f1=b;c=a.gA;a.ho=b+1|0;return c.ro(b);}
function QJ(a){var b,c,d;if(a.f1<0){b=new DY;V(b);K(b);}O0(a);a.gA.uh(a.f1);a.lO=a.gA.ct;c=a.f1;d=a.ho;if(c<d)a.ho=d-1|0;a.ii=a.ii-1|0;a.f1=(-1);}
function O0(a){var b;if(a.lO>=a.gA.ct)return;b=new IG;V(b);K(b);}
function KL(){var a=this;KP.call(a);a.oG=null;a.nm=null;}
function Y5(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.oG;e=0;f=0;g=a.nm;a:{while(true){if((e+32|0)>f&&DM(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Z(B6(b)+j|0,i.length);No(b,d,j,f-j|0);e=0;}if(!DM(c)){k=!DM(b)&&e>=f?AVp:AVo;break a;}i=g.data;j=Z(B6(c),i.length);l=new Ny;l.ml=b;l.pD=c;k=ABs(a,d,e,f,g,0,j,l);e=l.s_;j=l.ur;if(k===null){if(!DM(b)&&e>=f)k=AVp;else if(!DM(c)&&e>=f)k=AVo;}W3(c,g,0,j);if(k!==null)break;}}ED(b,b.V-(f-e|0)|0);return k;}
var Pc=F(KL);
function ABs(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(LE(h,2))break a;i=AVo;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!L1(l)){if((f+3|0)>g){j=j+(-1)|0;if(LE(h,3))break a;i=AVo;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CD(l)){i=DZ(1);break a;}if
(j>=d){if(DM(h.ml))break a;i=AVp;break a;}c=j+1|0;m=k[j];if(!C4(m)){j=c+(-2)|0;i=DZ(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(LE(h,4))break a;i=AVo;break a;}k=e.data;o=Es(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.s_=j;h.ur=f;return i;}
var Ip=F(D1);
var Xy=F();
function AG_(a,b){return b.text();}
function Xw(){var a=this;C.call(a);a.sJ=null;a.sK=null;}
function AE1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.sJ;d=a.sK;e=Q(Bv,8);f=BL(16);g=0;h=0;i=b.length;j=0;while(true){k=BE(j,i);if(k>0)break;k=k>=0?10:b.charCodeAt(j)&65535;if(k==10){l=Ht(f,0,g);m=h+1|0;e=AC1(l,e,h);g=0;}else{m=f.data.length;if(m==g)f=Nv(f,m*2|0);n=f.data;o=g+1|0;n[g]=k;m=h;g=o;}j=j+1|0;h=m;}c.l(ASB(ZG(e,h),AJg(d)));}
var Xx=F();
function AI$(a,b){ADT(b);}
function HQ(){var a=this;C.call(a);a.cu=null;a.T=null;a.uD=null;a.p_=null;a.pd=null;a.qf=null;a.sT=null;}
function AWB(a,b,c,d){var e=new HQ();JT(e,a,b,c,d);return e;}
function QK(){var b,c,d,e,f,g,h,i;b=new HQ;c=new IT;d=new G8;G7();JJ(d,AWC);Li(c,d,BF(AV9),BF(AWD),BF(AWE),BF(AV9),BF(AWF),BF(AWG),BF(AWH),BF(AWI),BF(AWJ),BF(AWK));ABP();e=(AWL.eG()).data;f=e.length;g=Q(IE,f);h=g.data;i=0;while(i<f){h[i]=e[i].k2;i=i+1|0;}JT(b,c,g,AAB(),FW());return b;}
function JT(a,b,c,d,e){var f;f=c.data;a.pd=EQ(B(140),16.0);a.qf=EQ(B(140),17.0);a.sT=EQ(B(139),15.0);a.cu=b;a.uD=c;a.p_=d;if(f.length>=15){a.T=e;return;}b=new BD;V(b);K(b);}
var He=F(0);
function Ky(){var a=this;C.call(a);a.du=null;a.dx=null;}
function AHs(a,b){var c,d;if(a===b)return 1;if(!ID(b,He))return 0;a:{b:{c:{d:{c=b;b=a.du;if(b!==null){if(!b.cD(c.du))break c;else break d;}if(c.du!==null)break c;}b=a.dx;if(b!==null){if(!b.cD(c.dx))break c;else break b;}if(c.dx===null)break b;}d=0;break a;}d=1;}return d;}
function H_(){var a=this;Ky.call(a);a.iM=0;a.cN=null;}
function Ks(){var a=this;CQ.call(a);a.cJ=null;a.fZ=null;}
function AT8(a){var b=new Ks();Yl(b,a);return b;}
function Yl(a,b){var c,d,e,f;Fg(a,b);c=ANq(a.s);a.fZ=c;d=ADH(a.s,c);a.cJ=d;WY(a.s,d);W(b.m.bt,a.fZ);W(b.m.df,a.fZ);W(b.m.bt,a.cJ);c=b.m.b3;d=new R3;d.oh=a;W(c,d);c=b.m.b3;d=new HE;e=a.cJ;BG(e);f=new R7;f.t_=e;R$(d,b,f);W(c,d);c=b.m.fn;d=a.cJ;BG(d);e=new R6;e.l6=d;W(c,e);c=b.m.fS;d=new R5;d.pi=a;W(c,d);c=b.m.df;d=new R4;d.u3=a;W(c,d);b=b.m.ej;c=new R8;c.mR=a;W(b,c);LC(a);}
function AG1(a,b){return KV(a.cJ,b);}
function AJV(a){E3(a);L8(a.cJ);Wh(a.fZ);}
function ANK(a){return L9(0);}
function AMi(a,b,c){GR(a,b,c);a.kK(b,c);}
function AAa(a,b,c){Lz(a.cJ,new Bk,b,c);}
function AFU(a,b){BG(b);Pz(a.fZ,b);Lb(a.cJ,b);}
function AD$(a,b){if(b.bh!=121)return 0;return 1;}
function Y_(a,b){var c,d,e;if(DW(a.s,a.cJ)){c=a.fZ;d=a.cJ;e=new SU;e.qs=a;Kw(c,b,d,a,d,e);}return 1;}
function YT(){var a=this;CC.call(a);a.lJ=null;a.kY=null;a.dc=null;a.gk=null;a.fa=null;a.g4=null;a.vh=null;a.gT=null;a.q3=null;a.lL=null;a.vy=null;a.wA=null;a.fT=null;a.jv=null;a.qd=0;}
function ASo(a){var b=new YT();ALl(b,a);return b;}
function ALl(a,b){var c,d,e,f,g,h,i;EP(a,b);c=(QK()).cu.gv;a.lJ=c;a.kY=AQE(c);a.dc=Fd(0,0,300,300);a.gk=SH(0,0,3,3);a.fa=Fd(0,0,300,300);a.g4=AMI();d=Q(Bv,4);e=d.data;e[0]=B(191);e[1]=B(174);e[2]=B(214);e[3]=B(213);a.vh=d;a.gT=Q(Iz,e.length);c=b.bk;f=b.m.bt;g=new TR;g.e$=a;W(f,g);f=b.m.b3;g=new RG;g.u5=a;W(f,g);f=b.m.l1;g=new RF;g.of=a;W(f,g);f=b.m.fn;g=new RI;g.w0=a;W(f,g);f=b.m.jg;g=new RH;g.vr=a;W(f,g);f=b.m.ej;g=new RE;g.ww=a;W(f,g);b=b.m.df;f=new RD;f.tb=a;W(b,f);h=CK(a.bj.bk,300,300);f=h.bn;b="white";f.fillStyle
=b;b=h.bn;f="white";b.strokeStyle=f;b=h.bn;f=10.0;b.lineWidth=f;h.bn.strokeRect(75.0,140.0,150.0,110.0);h.bn.fillRect(130.0,190.0,40.0,60.0);h.bn.beginPath();h.bn.moveTo(50.0,140.0);h.bn.lineTo(150.0,60.0);h.bn.lineTo(250.0,140.0);h.bn.closePath();h.bn.stroke();FZ(h,B(237),11.0);Ll(h,187,187,187);Pb(a,B(238),h);b=CU(a.bj.bk);CM(b,h);FM(h);a.q3=b;Gf(a.dc,b);GZ(a.dc);BI(a.dc.b2,a.lJ);BI(a.dc.bT,CL(204,120,50));b=CK(c,255,100);a.fT=b;FZ(b,B(140),11.0);b=Bu();i=$rt_str(a.fT.bn.font);g=new M;O(g);G(G(g,B(239)),i);Br(b,
N(g));Eo(a.fT,B(240));Ll(a.fT,169,183,198);Pb(a,B(240),a.fT);b=CU(c);a.lL=b;CM(b,a.fT);Gf(a.fa,a.lL);GZ(a.fa);F$(a.fa,C3(255));Hw(a.fa,a.lJ);a.vy=CU(c);BI(a.gk.b2,a.kY);}
function Pb(a,b,c){Ch(c,b,0.0,20.0);Ch(c,b,0.25,40.0);Ch(c,b,0.5,60.0);Ch(c,b,0.75,80.0);}
function WT(a,b){Ju(Fu(),0.5+Fu()*0.5,0.5+Fu()*0.5,1.0,b.bT);}
function AFa(a,b){var c;a.qd=a.qd+1|0;c=b/5.0;Ju(c-(c|0),1.0,1.0,1.0,a.gk.bT);return SY(a.g4,b);}
function AIf(a){var b,c,d,e,f,g;b=a.bj.bk;Gw(b,a.kY);c=a.gT.data;d=c.length;e=0;while(e<d){Ux(c[e],b,0,0);e=e+1|0;}DD(a.dc,b,a.q3,0,0,0.5);f=a.lL;d=0;while(d<7){g=a.fa;DD(g,b,f,Ba(d,10+((10*g.y.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.wA;if(g!==null)T9(a.gk,b,g,0,0,0.0);U_(a.g4,b,new Bk);NL(b,B(241));}
function AOK(a,b,c){var d,e,f,g,h,i,j,k,l;d=Bu();e=Cx(b);f=new M;O(f);G(G(f,B(242)),e);Br(d,N(f));g=Bu();d=new M;O(d);Fj(G(d,B(243)),c);Br(g,N(d));h=B_(30.0,c);i=B_(10.0,c);j=0;while(true){k=a.gT.data;if(j>=k.length)break;l=1+j|0;k[j]=SH(Ba(i,l)+Ba(h,j)|0,h,h,h);WT(a,a.gT.data[j]);j=l;}Bg(a.gk.P,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dc;g=d.P;h=b.b;d=d.y;Bg(g,(h-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.fa;d.P.a=b.a-d.y.a|0;}
function OQ(a,b){var c,d,e,f,g;c=Bu();d=!b.hh?B(244):B(245);e=b.dE;f=b.bh;g=b.rx;b=new M;O(b);F2(G(T(G(G(G(b,d),e),B(246)),f),B(247)),g);Br(c,N(b));return 0;}
function We(){var a=this;CQ.call(a);a.rd=null;a.dw=null;a.cI=null;a.d5=null;a.lc=null;}
function AQa(a,b,c){var d;d=GL(a.s,a.lc);HZ(a.dw,d);HZ(a.cI,d);GT(a.dw,a.s);GT(a.cI,a.s);}
function Nw(b){return IY(b,APD());}
function IY(b,c){var d;d=PJ();Kr(d,KK(b,Ir(c,25)),!b?null:IY(b-1|0,c));Kr(d,KK(b,Ir(c,20)),!b?null:IY(b-1|0,c));Kr(d,KK(b,Ir(c,15)),!b?null:IY(b-1|0,c));Kr(d,KK(b,Ir(c,10)),!b?null:IY(b-1|0,c));return Hm(d);}
function KK(b,c){var d;if(b){d=new M;O(d);G(G(T(d,b),B(36)),c);c=N(d);}return c;}
function Kr(b,c,d){var e,f;e=new Gt;f=Ju(Fu(),1.0,1.0,1.0,new BZ);XT();Hk(e,f,AWM,AWN);if(d!==null)GF(b,c,e,d);else{d=new Ul;d.te=c;D3(b,c,e,d);}}
function AHK(a,b,c){var d,e;GR(a,b,c);b=a.s.b7;d=D_(a.dw);e=D_(a.cI);JU(a.dw,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);JU(a.cI,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AIu(a){var b,c,d,e,f,g,h,i;E3(a);b=a.bj.bk;CJ(b,1);c=a.rd;d=a.s;e=d.b7;Bg(c.ly,e.b,B_(2.0,d.bM));Bg(c.jV,B_(2.0,d.bM),e.a);G7();f=AWJ;g=d.cV;h=e.a/2|0;i=c.ly;By(g,0,h-(i.a/2|0)|0,i,f);g=d.cV;h=e.b/2|0;c=c.jV;By(g,h-(c.b/2|0)|0,0,c,f);JB(a.dw,a.s);JB(a.cI,a.s);Im(a.d5);CJ(b,0);}
function AN6(a,b){var c,d,e;c=Kq(a.d5,b);d=Ke(a.dw,b.h,a.s.cA);e=Ke(a.cI,b.h,a.s.cA);return !c&&!d&&!e?0:1;}
function AIC(a,b,c){return Jf(a.d5,b,c);}
function AGk(a,b,c){return DI(a.d5);}
function ANn(a,b,c,d){var e,f,g;e=Jk(a.d5,b,c,d);f=J8(a.dw,b.h,c,d);g=J8(a.cI,b.h,c,d);return !e&&!f&&!g?0:1;}
function Xr(){var a=this;CQ.call(a);a.g7=null;a.ei=null;a.hU=null;a.kj=null;}
function AIF(a,b,c){if(b===0.0)XN(a);}
function ANH(a){var b;E3(a);b=a.bj.bk;I5(a.ei,b);Im(a.g7);}
function XN(a){var b,c,d,e,f,g,h;b=a.hU;if(b!==null){J5(a.ei,b);JR(b);}b=(QK()).T;c=ATX(a.s,new VW);d=EQ(B(139),14.0);e=ANs();f=0;while(f<300){g=C5(f);h=new Yg;h.r0=B(248);h.rZ=g;h.rY=B(249);M3(e,B(248),g,B(249),h);f=f+1|0;}V0(c,QN(e));XQ(c,b,d);g=ABH(a.s);h=Zu(c,a.s);Qu(h,b.lx,b.jZ);LI(g,h);g.ec=b;IC(g,B(250),a.kj,2.0);a.hU=g;IS(a.ei,g);Uz(a);}
function AGV(a,b,c){GR(a,b,c);PO(a.ei,b,c);Uz(a);}
function Uz(a){var b,c,d;b=a.s.b7;Fm(a.hU,BX((b.b*2|0)/10|0,(b.a*4|0)/10|0),BX((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.hU;b=Yi(c.O.q);d=new M;O(d);G(G(d,B(251)),b);IC(c,N(d),a.kj,2.0);}
function AOR(a,b){return Oc(a.ei,b);}
function Yc(){var a=this;CQ.call(a);a.hR=null;a.fx=null;a.e2=null;a.i_=null;a.os=null;a.h$=null;a.fI=null;a.ft=null;a.i5=0;a.fU=0;}
function WM(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.fx.i>0){d=Fu();e=a.fx;f=d*(e.i-1|0)|0;e=El(e,f);El(a.e2,f);f=a.fU;g=e.y;a.fU=f-Ba(g.b,g.a)|0;Ie(a.hR,e.c6);}c=c+1|0;}}
function Ko(a,b){var c,d,e,f,g,h,i,j;c=IH(a.s);Cy(c,a.i_);d=0;while(d<b){e=Ir(a.h$,1+(Fu()*19.0|0)|0);f=ALA();g=f.c6;h=a.hR;BG(c);i=new Rk;i.oK=c;BI(g,Hf(h,e,i));(W0(Fu(),1.0,1.0,f.b2)).bA=0.5;h=f.P;g=f.c6;Bg(h,g.bl|0,g.bz|0);h=f.y;g=f.c6;Bg(h,g.bi|0,g.bA|0);B0(a.e2,e);B0(a.fx,f);j=a.fU;h=f.y;a.fU=j+Ba(h.b,h.a)|0;d=d+1|0;}a.ft=L4(a.hR);}
function AOe(a){var b,c,d,e,f,g,h,i;E3(a);b=a.bj.bk;CJ(b,1);c=a.s.cV;if(a.e2.i){d=a.ft;d=CK(c,d.b,d.a);Cy(d,a.i_);e=a.i_.dt;By(c,0,0,a.ft,a.os);f=0;while(f<a.e2.i){g=Bp(a.fx,f);h=Bp(a.e2,f);g=g.c6;Ch(d,h,g.bl,g.bz+e);f=f+1|0;}g=a.fI;if(!(g!==null&&Ce(g)==a.ft.b&&C8(a.fI)==a.ft.a))a.fI=CG(a.fI,CU(c));CM(a.fI,d);FM(d);i=0;while(i<a.e2.i){d=Bp(a.fx,i);F$(d,C3(0));DD(d,c,a.fI,0,0,0.0);i=i+1|0;}}CJ(b,0);}
function AHl(a,b){var c,d;if(a.i5){c=a.ft;d=Z(Ba(c.b,c.a),2211840);if(a.fU/d<=0.7)Ko(a,Ig(a.h$,5));else WM(a,Ig(a.h$,5));}return a.i5;}
function O4(){var a=this;CC.call(a);a.d0=null;a.fO=null;a.gG=null;a.kx=null;a.dZ=0;a.rM=0;a.ui=null;a.lz=0;a.uz=0;a.sO=null;a.oj=null;}
function AFt(a){var b,c;b=a.dZ;c=new M;O(c);T(G(c,B(252)),b);$rt_globals.console.info($rt_ustr(N(c)));Gw(a.d0,a.ui);Is(a.gG,a.dZ,0,F8(a),5000,a.kx.b,20);CJ(a.d0,1);PS(a.gG,a.d0);CJ(a.d0,0);b=a.dZ;c=new M;O(c);T(G(c,B(252)),b);$rt_globals.console.info($rt_ustr(N(c)));XM(a.fO,a.dZ/a.lz|0);Qw(a.fO,a.dZ,F8(a),a.oj,a.d0);}
function APU(a,b,c){a.kx=b;Vs(a.fO,BX(0,0),50,F8(a),c);JX(a.fO,a.d0,0,F8(a));}
function PI(a){return 5000-F8(a)|0;}
function F8(a){return Z(a.rM,a.kx.a);}
function Dc(){var a=this;CC.call(a);a.ll=null;a.gr=null;a.vt=0.0;}
function AWO(a){var b=new Dc();Gi(b,a);return b;}
function Gi(a,b){EP(a,b);a.ll=ZN(0,0,64);a.gr=new Bk;Nq(b.bO,H2(Cn(a)));}
function Sd(a){Gw(a.bj.bk,a.ll);}
function SL(a,b,c){CA(a.gr,b);a.vt=c;}
var QW=F(Dc);
var AD4=F(Dc);
function ATK(a){var b=new AD4();AMY(b,a);return b;}
function AMY(a,b){var c,d,e,f,g,h;Gi(a,b);c=b.bO;d=new Rj;d.v2=a;e=Q(C,1);e.data[0]=B(253);CO(c,d,B(254),e);f=b.bO;g=new Ri;g.xP=a;h=Q(C,1);h.data[0]=AAV([1,2,3,4,5]);CO(f,g,B(255),h);f=b.bO;g=new Rh;g.oc=a;h=Q(C,1);h.data[0]=AS5([1,2,3,4,5]);CO(f,g,B(256),h);f=b.bO;g=new Rg;g.vL=a;h=Q(C,1);h.data[0]=E4([1,2,3,4,5]);CO(f,g,B(257),h);f=b.m.b3;d=new HE;g=new Re;g.wP=a;c=new Rd;c.p0=a;Vu(d,b,g,c);W(f,d);}
function UA(a,b){var c,d,e,f,g,h;c=b.data;d=Bu();e=Cx(c[0]);f=new M;O(f);G(G(f,B(258)),e);Br(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((RW(b,1)).hb));d=Bu();e=Cx(c[1]);if(b===null)f=B(29);else{f=new M;O(f);B1(f,B(42));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)B1(f,B(43));T(f,c[g]);g=g+1|0;}B1(f,B(44));f=N(f);}h=new M;O(h);G(G(G(G(h,B(259)),e),B(260)),f);Br(d,N(h));}
function WW(){var a=this;Dc.call(a);a.dK=null;a.eO=null;a.j9=null;a.po=null;a.lb=null;}
function AKT(a,b){b=b/5.0;Ju(b-(b|0),1.0,1.0,1.0,a.eO.bT);return 0;}
function AE5(a){Sd(a);DD(a.dK,a.bj.bk,a.po,0,0,0.5);T9(a.eO,a.bj.bk,a.j9,0,0,0.0);NL(a.bj.bk,B(241));}
function ANF(a,b,c){var d,e,f;SL(a,b,c);Bg(a.eO.P,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dK;e=d.P;f=b.b;d=d.y;Bg(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Sg(){var a=this;Dc.call(a);a.f_=null;a.rp=null;a.jJ=null;a.ib=null;a.hn=null;}
function ARk(a){var b,c,d,e,f,g;Sd(a);b=a.bj.bk;c=a.ib;Lt(b,c.b,c.a,a.hn);b=a.f_;c=a.rp;d=a.gr;e=a.bj.bk;f=0;while(true){g=0;while(true){DD(b,e,c,g,f,0.5);g=g+Ce(c)|0;if(g>=d.b)break;}f=f+C8(c)|0;if(f>=d.a)break;}Iy(a.bj.bk);}
function AGN(a,b,c){SL(a,b,c);Bg(a.hn,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function OG(){var a=this;CC.call(a);a.d9=null;a.jC=null;a.e9=null;a.b1=null;a.ey=0;a.hx=null;a.ez=0;a.wx=20;a.x7=11;a.we=220;a.iW=null;a.wV=5000;a.gt=0;a.fj=null;}
function ARn(a){var b,c,d,e,f,g,h;b=a.hx;c=a.ez;d=a.iW;Is(b,c,0,d.a,5000,d.b,20);CJ(a.d9,1);PS(a.hx,a.d9);if(a.b1===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Ch(a.jC,C5(e),0.0,c);}b=CU(a.d9);a.b1=b;CM(b,a.jC);}if(a.ez<=a.ey)while(true){f=a.ey;if(f<=a.ez)break;a.ey=f-20|0;b=a.e9;g=a.gt-1|0;a.gt=g;Ch(b,C5(g),0.0,20.0);HW(a.b1,a.e9,0,a.ey%220|0);Eu(a.e9);}else while(a.ey<(a.ez-20|0)){b=a.e9;g=a.gt+1|0;a.gt=g;Ch(b,C5((g+11|0)-1|0),0.0,20.0);HW(a.b1,a.e9,0,a.ey%220|0);Eu(a.e9);a.ey=a.ey+20|0;}b=Fd(0,0,Ce(a.b1),C8(a.b1));HB(b,
0,0,Ce(a.b1),C8(a.b1));F$(b,a.fj.data[0]);Hw(b,a.fj.data[1]);DD(b,a.d9,a.b1,400,0,1.0);g=a.ez%220|0;f=Z(C8(a.b1)-g|0,200);d=Fd(0,0,Ce(a.b1),f);HB(d,0,g,Ce(a.b1),f);F$(d,a.fj.data[0]);Hw(d,a.fj.data[1]);DD(d,a.d9,a.b1,0,0,1.0);h=Fd(0,f,Ce(a.b1),(C8(a.b1)-f|0)-20|0);HB(h,0,0,Ce(a.b1),(C8(a.b1)-f|0)-20|0);F$(h,a.fj.data[1]);Hw(h,a.fj.data[0]);DD(h,a.d9,a.b1,0,0,1.0);}
function AI1(a,b,c){CA(a.iW,b);}
function AHr(a,b){return 0;}
function RP(a){return 5000-a.iW.a|0;}
function It(){Dc.call(this);this.dy=0;}
function Ra(a){var b,c;b=a.bj.bO;c=new P8;c.mq=a;QM(b,c,Ry(a));}
function Mu(a){var b,c,d,e;b=a.dy+1|0;a.dy=b;c=H2(E(It));d=new M;O(d);G(G(T(G(d,B(261)),b),B(36)),c);e=N(d);c=a.bj.bO;d=new Ud;d.pF=e;Uq(c,e,d,Ry(a));}
function Ry(a){var b;b=new VO;b.oo=a;return b;}
function AOE(a,b,c,d){a:{switch(c){case 0:break;case 2:Mu(a);break a;default:break a;}Ra(a);}return 1;}
function P0(){var a=this;CC.call(a);a.m7=null;a.e3=null;a.ld=null;a.hS=null;}
function ARe(a){var b;b=a.bj.bk;Gw(b,a.m7);DD(a.e3,b,a.ld,0,0,0.5);}
function ALR(a,b,c){var d,e,f;d=a.e3;e=d.P;f=b.b;d=d.y;Bg(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Ww(){var a=this;CQ.call(a);a.gB=null;a.d1=null;a.i2=null;a.i3=null;a.sN=null;}
function AJ3(a,b,c){if(b===0.0)NE(a);}
function ARE(a){var b;E3(a);b=a.bj.bk;I5(a.d1,b);Im(a.gB);}
function NE(a){WK(a,a.i2);WK(a,a.i3);a.i2=MX(a,0.5,0,B(262));a.i3=MX(a,1.0,1,B(263));IS(a.d1,a.i2);IS(a.d1,a.i3);W7(a);}
function WK(a,b){if(b!==null){J5(a.d1,b);JR(b);}}
function MX(a,b,c,d){var e,f,g;e=ABH(a.s);f=new V3;g=new Pl;g.sR=a;g.sS=e;g.sP=d;TP(f);f.hK=new BZ;f.k1=new Bk;f.rX=g;f.pC=b;if(c)f=Zu(f,a.s);LI(e,f);e.ec=FW();return e;}
function ANY(a,b,c){GR(a,b,c);PO(a.d1,b,c);W7(a);}
function W7(a){var b;b=a.s.b7;Fm(a.i3,BX((b.b*2|0)/10|0,(b.a*2|0)/10|0),BX((b.b*7|0)/10|0,(b.a*7|0)/10|0));Fm(a.i2,BX(b.b/10|0,b.a/10|0),BX((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function AKP(a,b){return Oc(a.d1,b);}
var Rf=F(Ks);
function AJ8(a){return L9(1);}
function ALV(a,b,c){AAa(a,b,c);}
function IT(){var a=this;C.call(a);a.s8=null;a.gv=null;a.uX=null;a.xT=null;a.n5=null;a.kB=null;a.pY=null;a.n8=null;a.ls=null;a.lN=null;a.iO=null;}
function AWP(a,b,c,d,e,f,g,h,i,j,k){var l=new IT();Li(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Li(a,b,c,d,e,f,g,h,i,j,k,l){a.s8=b;a.gv=c;a.uX=d;a.xT=e;a.n5=f;a.kB=g;a.pY=h;a.n8=i;a.ls=j;a.lN=k;a.iO=l;}
var ACd=F(0);
function Zo(){var a=this;C.call(a);a.ia=null;a.g$=null;a.op=null;a.uc=null;}
function AAI(a,b,c,d){var e=new Zo();ANu(e,a,b,c,d);return e;}
function AAB(){return AAI(S(B(264)),S(B(265)),S(B(266)),S(B(267)));}
function ANu(a,b,c,d,e){a.ia=b;a.g$=c;a.op=d;a.uc=e;}
function H1(){var a=this;C.call(a);a.iX=null;a.h0=null;a.nb=null;a.pv=null;a.bg=null;a.lx=null;a.jZ=null;}
function AWQ(a,b,c,d,e,f,g){var h=new H1();KY(h,a,b,c,d,e,f,g);return h;}
function KY(a,b,c,d,e,f,g,h){a.nb=b;a.pv=c;a.h0=d;a.bg=e;a.iX=f;a.lx=g;a.jZ=h;}
function FW(){var b,c,d;b=new H1;c=new Hy;XT();d=AWR;JP(c,d,AWS,AWT,AWU,AWV,d);KY(b,c,ABy(),Zf(S(B(268)),S(B(111)),S(B(112))),ABy(),Zw(1,0.125),AWW,AWX);return b;}
function Mh(){var a=this;C.call(a);a.iJ=null;a.h9=null;}
function Mr(a,b){var c;c=a.h9;a.h9=b;return c;}
function Jo(){var a=this;Mh.call(a);a.bL=null;a.bY=null;a.fi=0;a.fr=0;}
function JH(a){var b;b=KQ(a);if(b==2){if(KQ(a.bY)<0)a.bY=M6(a.bY);return OD(a);}if(b!=(-2))return a;if(KQ(a.bL)>0)a.bL=OD(a.bL);return M6(a);}
function KQ(a){var b,c;b=a.bY;c=b===null?0:b.fi;b=a.bL;return c-(b===null?0:b.fi)|0;}
function M6(a){var b;b=a.bL;a.bL=b.bY;b.bY=a;Ei(a);Ei(b);return b;}
function OD(a){var b;b=a.bY;a.bY=b.bL;b.bL=a;Ei(a);Ei(b);return b;}
function Ei(a){var b,c,d;b=a.bY;c=b===null?0:b.fi;b=a.bL;d=b===null?0:b.fi;a.fi=Bb(c,d)+1|0;a.fr=1;b=a.bL;if(b!==null)a.fr=1+b.fr|0;b=a.bY;if(b!==null)a.fr=a.fr+b.fr|0;}
var ADL=F();
function AF_(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new OZ;c=c.buffer;d.fh=c;d.lU=new $rt_globals.Int8Array(c);d.jD=new $rt_globals.Uint16Array(c);d.sk=new $rt_globals.Int32Array(c);d.o3=new $rt_globals.Float32Array(c);d.pk=new $rt_globals.Float64Array(c);e=d.fh.byteLength;c=new M;O(c);T(G(c,B(269)),e);CF(N(c));e=b.callToCpp1();c=new M;O(c);T(G(c,B(270)),e);CF(N(c));f=b.callToCpp2();c=new M;O(c);Fj(G(c,B(271)),f);CF(N(c));c=MS(d,b.getC8String());g=new M;O(g);G(G(g,B(272)),c);CF(N(g));c
=M0(d,b.getC16String());g=new M;O(g);G(G(g,B(273)),c);CF(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.fh,h,8));c=ACu(i);g=new M;O(g);G(G(g,B(274)),c);CF(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.fh,h,8));c=AO0(j);g=new M;O(g);G(G(g,B(275)),c);CF(N(g));k=AAC(d,b.getCDoubleArray8(),8);l=ARG(k);c=new M;O(c);G(G(c,B(276)),l);CF(DS(c));l=ARt(b.getC8String(),B(277),d);c=LK();G(G(c,B(278)),l);CF(DS(c));l=ALI(b.getC16String(),B(279),
d);c=LK();G(G(c,B(280)),l);CF(DS(c));c=ANA(i,d,b.getCIntArray8(),E4([11,22,33,44,55,66,77,88]));g=LK();G(G(g,B(281)),c);CF(DS(g));c=APe(j,d,b.getCFloatArray8(),100,E4([111,222,333,444,555,666,777,888]));g=LK();G(G(g,B(282)),c);CF(DS(g));b=APv(k,d,b.getCDoubleArray8(),1000,E4([1111,2222,3333,4444,5555,6666,7777,8888]));c=LK();G(G(c,B(283)),b);CF(DS(c));}
function APe(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(284);h=0;i=e;a:{while(h<g){if(Dg(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.o3[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(285);}return B(286);}
function APv(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(284);h=0;i=e;a:{while(h<g){if(Hc(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.pk[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(285);}return B(286);}
function ANA(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(284);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.sk[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(285);}return B(286);}
function ARt(b,c,d){var e,f,g,h;e=MS(d,b);if(!Bq(c,e))return B(287);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.lU[h])return B(288);f=f+1|0;}return B(285);}
function ALI(b,c,d){var e,f,g,h;e=M0(d,b);if(!Bq(c,e))return B(287);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.jD[h>>>1|0]&65535))return B(288);f=f+1|0;}return B(285);}
function CF(b){OW(B(2),b);}
function AKC(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function R3(){C.call(this);this.oh=null;}
function AL5(a,b){return AD$(a.oh,b);}
function R7(){C.call(this);this.t_=null;}
function AQV(a,b){KC(a.t_,b);}
function R6(){C.call(this);this.l6=null;}
function AL6(a,b,c){return GA(a.l6,b,c);}
function R5(){C.call(this);this.pi=null;}
function AQF(a){var b,c;b=a.pi.cJ;BG(b);c=new Qv;c.m8=b;return c;}
function R4(){C.call(this);this.u3=null;}
function AP6(a,b,c,d){return JD(a.u3.cJ,c,d);}
function R8(){C.call(this);this.mR=null;}
function AJc(a,b){b=b;return Y_(a.mR,b);}
function ADd(){Iz.call(this);this.c6=null;}
function ALA(){var a=new ADd();AF6(a);return a;}
function Fd(a,b,c,d){var e=new ADd();ALz(e,a,b,c,d);return e;}
function AF6(a){Sa(a);a.c6=new BZ;}
function ALz(a,b,c,d,e){Sa(a);a.c6=new BZ;PP(a,b,c,d,e);}
function GZ(a){var b,c;b=a.y;c=a.c6;Bg(b,c.bi-c.bl|0,c.bA-c.bz|0);}
function Gf(a,b){HB(a,0,0,Ce(b),C8(b));}
function HB(a,b,c,d,e){CE(a.c6,b,c,d,e);}
function DD(a,b,c,d,e,f){var g;g=a.P;EG(b,g.b+d|0,g.a+e|0,a.y,a.c6,c,a.bT,a.b2,f);}
function F$(a,b){BI(a.bT,b);}
function Hw(a,b){BI(a.b2,b);}
function TR(){C.call(this);this.e$=null;}
function ANR(a,b){var c,d,e,f,g,h,i;c=a.e$;d=c.jv;if(d!==null){e=c.dc.P;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.jv=g;}d=b.h;f=d.b;c=c.gk;e=c.y;h=f-e.b|0;f=d.a-e.a|0;Bg(c.P,h,f);c=a.e$;d=c.bj.bO;b=b.h;f=0;a:{while(true){i=c.gT.data;if(f>=i.length)break;if(Eq(i[f],b)){b=c.vh.data[f];break a;}f=f+1|0;}b=null;}Go(d,b);return 1;}
function APl(a,b,c,d){if(!c&&d==2){b=a.e$;WT(b,b.dc);}return 1;}
function AIc(a,b,c){var d,e;d=Bu();e=new M;O(e);T(G(e,B(289)),c);Br(d,N(e));if(!c){d=b.h;b=a.e$;b.jv=!Eq(b.dc,d)?null:d;PH(a.e$.g4,d.b,d.a);b=a.e$;So(b.g4,Jp(b.bj.bO));}return AWi;}
function AHP(a,b,c){var d;b=Bu();d=new M;O(d);T(G(d,B(290)),c);Br(b,N(d));return 1;}
function RG(){C.call(this);this.u5=null;}
function ANL(a,b){return OQ(a.u5,b);}
function RF(){C.call(this);this.of=null;}
function AQh(a,b){return OQ(a.of,b);}
function RI(){C.call(this);this.w0=null;}
function AQN(a,b,c){var d,e;Br(Bu(),B(291));d=!c?B(292):B(28);e=new M;O(e);G(G(G(e,B(293)),d),B(294));Wk(b,N(e));return 1;}
function RH(){C.call(this);this.vr=null;}
function AQL(a){Br(Bu(),B(295));}
function RE(){C.call(this);this.ww=null;}
function AL_(a,b){Br(Bu(),B(296));return 1;}
function RD(){C.call(this);this.tb=null;}
function AJQ(a,b,c,d){var e,f,g;b=a.tb;e=( -d|0)/10|0;b=b.dc;f=b.y;f.b=f.b+e|0;f.a=f.a+e|0;b=b.P;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function G8(){var a=this;BZ.call(a);a.f7=0;a.f$=0;a.f8=0;a.f9=0;}
function C3(a){var b=new G8();ARi(b,a);return b;}
function CL(a,b,c){var d=new G8();AHH(d,a,b,c);return d;}
function S(a){var b=new G8();APh(b,a);return b;}
function Ft(a,b,c,d){var e=new G8();Qt(e,a,b,c,d);return e;}
function BF(a){var b=new G8();JJ(b,a);return b;}
function ARi(a,b){Qt(a,b,b,b,255);}
function AHH(a,b,c,d){Qt(a,b,c,d,255);}
function APh(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.f7=IV(L(b,1))*17|0;a.f$=IV(L(b,2))*17|0;a.f8=IV(L(b,3))*17|0;a.f9=255;}else{a.f7=Ls(L(b,1),L(b,2));a.f$=Ls(L(b,3),L(b,4));a.f8=Ls(L(b,5),L(b,6));a.f9=I(b)!=9?255:Ls(L(b,7),L(b,8));}Hz(a.f7,a.f$,a.f8,a.f9,a);return;}}
function Qt(a,b,c,d,e){a.f7=b;a.f$=c;a.f8=d;a.f9=e;Hz(b,c,d,e,a);}
function JJ(a,b){a.f7=b.f7;a.f$=b.f$;a.f8=b.f8;a.f9=b.f9;BI(a,b);}
function IV(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Ls(b,c){return (16*IV(b)|0)+IV(c)|0;}
function U3(){var a=this;C.call(a);a.ly=null;a.jV=null;}
function ZK(){var a=this;C.call(a);a.fb=null;a.cd=null;a.ef=null;a.ga=null;a.k8=null;a.ca=null;a.fA=null;a.cQ=0;a.eK=0;a.lo=0;a.gN=0;a.fC=0;a.ja=null;a.ju=null;a.sV=null;}
function Y8(){var a=new ZK();AQO(a);return a;}
function AQO(a){a.cd=AK8();a.ef=new Bk;a.ga=new Bk;a.ca=AWY;a.gN=(-1);}
function KO(a,b){TK(a);a.ca=b;}
function HZ(a,b){a.fb=b;TK(a);}
function H7(a,b){var c,d,e,f,g;a.k8=b.iX;c=b.bg.hp;BI(a.cd.bT,c);c=b.h0.jT;BI(a.cd.b2,c);d=0;while(true){e=a.ca.data;if(d>=e.length)break;c=e[d];f=b.bg;c.je=f;c=c.dl;g=f.k0;f=f.hp;BI(c.bT,g);BI(c.b2,f);d=d+1|0;}}
function Tw(a){a.fA=CG(a.fA,null);Bg(a.ef,0,0);a.ca=AWY;a.gN=(-1);S2(a.cd);}
function GT(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=IH(b);d=b.bM;BG(a.fb);Cy(c,a.fb);e=J1(a.fb,1.25);f=0;a.cQ=B_(2.0,d);a.eK=B_(3.0,d);a.lo=B_(12.0,d);g=0;h=a.ca.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=QL(c,l.j_);n=a.lo;n=(n+m|0)+n|0;f=Bb(f,n);b=l.dl;l=b.P;l.b=g;l.a=0;l=b.y;l.b=n;l.a=e;CE(b.c6,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.ef;b.b=g;b.a=e;b=a.cd.y;n=a.fC;if(!n){m=a.cQ;m=(g+m|0)+Ba(m,a.ca.data.length)|0;}else m=(f+(a.cQ*2|0)|0)+(a.eK*2|0)|0;b.b=m;if(!n)e=e+(a.cQ*2|0)|0;else{n=a.cQ;e=(Ba(e+n|0,a.ca.data.length)
+n|0)+(a.eK*2|0)|0;}b.a=e;}
function JU(a,b,c){var d,e,f,g,h,i,j;Bg(a.cd.P,b,c);d=a.cQ+a.eK|0;e=a.ca.data;f=e.length;g=0;h=d;while(g<f){i=e[g].dl;j=i.P;j.b=b+d|0;j.a=c+h|0;if(!a.fC){if(!i.y.b)AEj();d=d+(i.y.b+a.cQ|0)|0;}else{if(!i.y.a)AEj();h=h+(i.y.a+a.cQ|0)|0;}g=g+1|0;}}
function AEj(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function D_(a){var b,c;b=a.ef;if(b.b&&b.a)return a.cd.y;c=new Bo;Bl(c,B(297));K(c);}
function TK(a){Bg(a.ef,0,0);}
function JB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.cV;if(!a.ca.data.length)return;a:{if(a.fA!==null){d=a.ef;if(Ba(d.b,d.a))break a;}d=a.ef;if(!Ba(d.b,d.a))GT(a,b);d=a.ef;e=d.b;f=d.a;if(!Ba(e,f))return;d=CK(c,e,f);Cy(d,a.fb);g=J1(a.fb,0.125);h=a.fb;i=h.dt;j=g+i-(i+h.eg)/16.0;k=a.ca.data;f=k.length;l=0;while(l<f){h=k[l];Ch(d,h.j_,h.dl.c6.bl+a.lo,j);l=l+1|0;}h=CG(a.fA,CU(c));a.fA=h;CM(h,d);FM(d);}if(!LX(a.cd)){d=a.cd;ADk(c,d.y,d.P,d.b2,a.cQ,a.ga);d=a.cd;h=d.y;m=d.P;d=d.bT;e=a.cQ;n=a.ga;n.b=(h.b-e|0)-e|0;n.a=(h.a
-e|0)-e|0;By(c,m.b+e|0,m.a+e|0,n,d);if(a.fC){d=a.cd;ACE(c,d.y,d.P,0,0,Q$(a.k8,b.bM),a.k8.lT,a.ga);}}k=a.ca.data;l=k.length;o=0;while(o<l){DD(k[o].dl,c,a.fA,0,0,0.0);o=o+1|0;}b:{if(a.fC){k=a.ca.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].dl;m=a.ga;e=(a.cd.y.b-(a.cQ*2|0)|0)-(a.eK*2|0)|0;b=h.y;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.P;By(c,d.b+b.b|0,d.a,m,h.b2);}o=o+1|0;}}}}
function Ke(a,b,c){var d,e,f,g,h,i;d=Eq(a.cd,b);e=!d?(-1):U6(a,b);f=a.gN;if(f!=e){if(f>=0){g=a.ca.data[f];ND(g,0);if(a.sV!==null){f=a.gN;h=Bu();g=Cx(g);i=new M;O(i);G(G(T(G(i,B(298)),f),B(299)),g);Br(h,N(i));}}if(e>=0){h=a.ca.data[e];g=a.ju;if(g!==null)g.nr(b,e,h);ND(h,1);}a.gN=e;}return d&&Hb(c)?1:0;}
function J8(a,b,c,d){var e,f;e=U6(a,b);if(e>=0){f=a.ca.data[e];if(!Ms(f))f.l0.p();}return 1;}
function U6(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.ca.data;if(c>=d.length)return (-1);e=d[c].dl;if(Eq(e,b))return c;if(a.fC){f=e.P;g=f.b;e=e.y;h=e.b;g=g+h|0;i=f.a;f=a.ga;f.b=(a.cd.y.b-(a.cQ*2|0)|0)-h|0;f.a=e.a;if(Zi(b,g,i,f))break;}c=c+1|0;}return c;}
function SM(a){a.fC=1;}
function Tf(){C.call(this);this.tj=null;}
function AOd(a,b){var c;c=a.tj;if(b.bh==32)Tw(c.cI);return 0;}
function Ti(){C.call(this);this.rV=null;}
function AEQ(a,b){var c,d,e,f;b=b;c=a.rV;Br(Bu(),B(300));if(!DI(c.d5)){d=c.d5;b=b.h;e=Nw(4);f=new Vn;f.x$=c;F_(d,b,e,f);}return 1;}
function AD1(){var a=this;C.call(a);a.im=null;a.hF=0.0;}
function EQ(a,b){var c=new AD1();AEG(c,a,b);return c;}
function AEG(a,b,c){a.im=b;a.hF=c;}
function ARP(a,b){if(a===b)return 1;if(b!==null&&Cn(a)===Cn(b)){b=b;return a.hF===b.hF&&C6(a.im,b.im)?1:0;}return 0;}
var Th=F();
function AJy(a){Br(Bu(),B(301));}
var Te=F();
function APy(a){Br(Bu(),B(302));}
function C$(){var a=this;C.call(a);a.dl=null;a.l0=null;a.je=null;a.h1=null;a.jt=null;a.j_=null;}
function ABU(a,b,c){var d=new C$();KZ(d,a,b,c);return d;}
function ATL(a,b,c,d,e){var f=new C$();ABt(f,a,b,c,d,e);return f;}
function KZ(a,b,c,d){ABt(a,b,c,d,null,null);}
function ABt(a,b,c,d,e,f){var g;g=ALA();a.dl=g;a.j_=c;a.je=d;a.jt=f;a.l0=b;BI(g.bT,d.k0);BI(a.dl.b2,d.hp);a.h1=e;}
function Ms(a){return a.h1===null?0:1;}
function ND(a,b){BI(a.dl.b2,!b?a.je.hp:a.je.pl);}
function Ov(){C.call(this);this.vs=null;}
function AGL(a,b){return b.hh&&b.bh==32?1:0;}
function Ow(){C.call(this);this.p7=null;}
function APQ(a,b){var c,d,e,f,g,h;b=b;c=a.p7;if(!DI(c.g7)){d=c.g7;b=b.h;e=Q(C$,1);f=e.data;g=new C$;h=new Vo;h.o_=c;KZ(g,h,B(303),d.g5.bg);f[0]=g;F_(d,b,FQ(e),AWj);}return 1;}
var AB9=F();
function AAl(b){var c,d;c=CK(b,250,64);FZ(c,B(237),25.0);Ll(c,187,187,187);Ch(c,B(304),0.0,24.0);Ch(c,B(304),0.25,56.0);d=CU(b);CM(d,c);FM(c);return d;}
function Y7(b){var c;c=new V1;c.gw=b;return c;}
function Ox(){C.call(this);this.tz=null;}
function AMX(a,b,c,d){return K8(a.tz,b,c,d);}
function ADN(){var a=this;C.call(a);a.lk=0;a.lm=0;}
function APD(){var a=new ADN();AQq(a);return a;}
function AQq(a){var b,c;b=ADy(EC((ACz())));c=EC((ACz()))^(-559038737);a.lk=b;a.lm=c;c=0;while(c<19){RJ(a);c=c+1|0;}}
function RJ(a){var b,c;b=a.lk;c=a.lm;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.lk=c;a.lm=b;return b;}
function ADy(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function Ig(a,b){return 5.960464477539063E-8*(RJ(a)&16777215)*b|0;}
function T5(){C.call(this);this.mj=null;}
function AMB(a,b,c){var d;d=a.mj;if(b===0.0)Ko(d,100);}
function T6(){C.call(this);this.p2=null;}
function AEW(a,b){var c,d,e;c=a.p2;d=b.bh;if(d==32){c.i5=c.i5?0:1;e=1;}else if(d==13){Ko(c,1);e=1;}else if(d!=8)e=0;else{WM(c,1);e=1;}return e;}
var Nh=F(0);
function AEo(b,c){var d;d=new Vl;d.u6=b;d.u7=c;return d;}
function ADa(){var a=this;C.call(a);a.fB=null;a.fW=0;a.iw=0;a.fV=0;}
function ADZ(a){var b=new ADa();AIH(b,a);return b;}
function AIH(a,b){a.fB=Cm();a.fV=0;a.iw=2048;a.fW=b;}
function Hf(a,b,c){var d,e,f,g,h,i,j;d=c.qE(b);e=a.iw;if(d>e){c=new Bo;f=new M;O(f);BA(T(G(T(G(f,B(305)),d),B(306)),e),41);Bl(c,N(f));K(c);}if(!a.fW){b=new BD;Bl(b,B(307));K(b);}a:{b=new BZ;if(d){b:{c=a.fB;if(c.i>0){c=BU(c);g=d;while(true){if(!B5(c))break b;f=BY(c);if(f.bi>=g)break;}CE(b,f.bl,f.bz,g,a.fW);f.bl=f.bl+g;h=f.bi-g;f.bi=h;if(h===0.0)V4(a.fB,f);break a;}}g=a.fV;i=d;CE(b,0.0,g,i,a.fW);c=a.fB;f=new BZ;h=a.fV;g=a.iw-d|0;j=a.fW;f.bl=i;f.bz=h;f.bi=g;f.bA=j;B0(c,f);a.fV=a.fV+a.fW|0;}}return b;}
function Ie(a,b){var c,d,e,f,g,h,i;a:{c=AQE(b);b=a.fB;if(b.i>0){d=BU(b);while(true){if(!B5(d))break a;e=BY(d);if(e.bz===c.bz){f=e.bl;g=e.bi;h=f+g;i=c.bl;if(h===i){c.bl=f;c.bi=c.bi+g;QJ(d);}else{h=c.bi;if(i+h===f){c.bi=h+g;QJ(d);}}}}}}B0(a.fB,c);}
function L4(a){return BX(a.iw,a.fV);}
function Wv(){var a=this;C.call(a);a.qS=null;a.iz=null;}
function AGF(a,b,c){if(c)return AWi;return Fe(a.iz.gG,b.h,a.qS,1);}
function AN1(a,b,c){return 1;}
function AH8(a,b){var c;c=a.iz;return Fp(c.gG,b.h,c.sO);}
function SQ(){C.call(this);this.nC=null;}
function AHq(a,b,c,d){var e,f;b=a.nC;e=(I3(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.dZ=Z(Bb(0,b.dZ+Ba(e,f)|0),PI(b));return 1;}
function PX(){C.call(this);this.uk=null;}
function AOH(a,b){var c,d,e;c=a.uk;if(b.cf&&b.bh==79){if(!b.bC){b=c.bj.bO;d=new Si;d.uu=c;LM(b,d);}else{b=c.bj.bO;d=new Sh;d.wN=c;V7(b,d);}e=1;}else e=0;return e;}
function Rj(){C.call(this);this.v2=null;}
function AFo(a,b){var c,d,e,f;c=b.data;b=Bu();d=Cx(c[0]);e=new M;O(e);G(G(e,B(258)),d);Br(b,N(e));b=Bu();f=c[1];d=new M;O(d);G(G(d,B(308)),f);Br(b,N(d));}
function Ri(){C.call(this);this.xP=null;}
function ARs(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bu();e=Cx(c[0]);f=new M;O(f);G(G(f,B(258)),e);Br(d,N(f));g=FG(RW(b,1));b=Bu();d=Cx(c[1]);if(g===null)c=B(29);else{c=new M;O(c);B1(c,B(42));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)B1(c,B(43));BA(c,i[h]);h=h+1|0;}B1(c,B(44));c=N(c);}e=new M;O(e);G(G(G(G(e,B(309)),d),B(310)),c);Br(b,N(e));}
function Rh(){C.call(this);this.oc=null;}
function AHM(a,b){UA(a.oc,b);}
function Rg(){C.call(this);this.vL=null;}
function AMR(a,b){var c,d,e,f,g;c=b.data;d=Bu();e=Cx(c[0]);f=new M;O(f);G(G(f,B(258)),e);Br(d,N(f));g=D6(RW(b,1));b=Bu();d=Cx(c[1]);c=ACu(g);e=new M;O(e);G(G(G(G(e,B(311)),d),B(312)),c);Br(b,N(e));}
function Re(){C.call(this);this.wP=null;}
function ALZ(a,b){var c,d;c=Iw();b=Cx(b);d=new M;O(d);G(G(d,B(313)),b);Br(c,N(d));b=new Fh;V(b);K(b);}
function Rd(){C.call(this);this.p0=null;}
function ANZ(a,b){var c,d,e,f;c=a.p0;d=c.bj.bO;e=new N2;e.q8=c;f=Q(C,1);f.data[0]=b;CO(d,e,B(314),f);}
function TQ(){C.call(this);this.kP=null;}
function APS(a,b){var c,d,e,f,g,h;c=a.kP;d=c.lb;if(d!==null){e=c.dK.P;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.lb=g;}b=b.h;f=b.b;c=c.eO;d=c.y;f=f-d.b|0;h=b.a-d.a|0;Bg(c.P,f,h);return 1;}
function AL4(a,b,c){var d;if(!c){d=b.h;b=a.kP;if(!Eq(b.dK,d))d=null;b.lb=d;}return AWi;}
var CZ=F(0);
var AWC=null;var AV$=null;var AWD=null;var AV9=null;var AWF=null;var AWE=null;var AWH=null;var AWG=null;var AWJ=null;var AWI=null;var AWK=null;function G7(){G7=Bm(CZ);AI4();}
function AI4(){AWC=C3(187);AV$=S(B(315));AWD=C3(55);AV9=C3(43);AWF=CL(33,66,131);AWE=CL(60,63,65);AWH=S(B(316));AWG=S(B(317));AWJ=Ft(85,85,85,128);AWI=Ft(43,43,43,0);AWK=S(B(267));}
function Uf(){var a=this;C.call(a);a.pE=null;a.i6=null;}
function AM6(a,b,c){var d;if(!c){d=Fe(a.i6.hx,b.h,a.pE,1);if(d!==null)return d;}return AWi;}
function AGH(a,b,c){return 1;}
function AFA(a,b){var c;c=a.i6;return Fp(c.hx,b.h,UG(c.bj.bO));}
function NQ(){C.call(this);this.tD=null;}
function AFs(a,b,c,d){var e,f;b=a.tD;e=(I3(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.ez=Z(Bb(0,b.ez+Ba(e,f)|0),RP(b));return 1;}
function St(){C.call(this);this.ry=null;}
function APX(a,b){var c,d;a:{c=a.ry;switch(b.bh){case 67:Mu(c);d=1;break a;case 86:Ra(c);d=1;break a;default:}d=0;}return d;}
var Ss=F();
function AH9(a,b,c){return 0;}
function Sq(){C.call(this);this.pb=null;}
function APm(a,b,c){var d,e;d=a.pb;c=d.dy+1|0;d.dy=c;d=H2(E(It));e=new M;O(e);G(G(T(e,c),B(318)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));Wk(b,e);return 1;}
var Sp=F();
function ANm(a){return null;}
function Sr(){C.call(this);this.mY=null;}
function AGx(a){var b,c;b=a.mY;c=new PN;c.rG=b;return c;}
function RY(){C.call(this);this.xB=null;}
function AIe(a,b){return 0;}
function Ql(){C.call(this);this.xy=null;}
function AIO(a,b){return b.hh&&b.bh==32?1:0;}
function Qm(){C.call(this);this.p$=null;}
function AEX(a,b){var c,d,e,f,g,h;b=b;c=a.p$;if(!DI(c.gB)){d=c.gB;b=b.h;e=Q(C$,1);f=e.data;g=new C$;h=new Rq;h.mp=c;KZ(g,h,B(303),d.g5.bg);f[0]=g;F_(d,b,FQ(e),AWj);}return 1;}
function Qn(){C.call(this);this.rA=null;}
function AOl(a,b,c,d){return K8(a.rA,b,c,d);}
function AA3(){var a=this;C.call(a);a.hC=null;a.kM=null;a.e8=null;a.x6=null;}
function AJg(a){var b=new AA3();APW(b,a);return b;}
function AT5(a,b,c,d){var e=new AA3();ABw(e,a,b,c,d);return e;}
function APW(a,b){ABw(a,null,null,b,null);}
function ABw(a,b,c,d,e){a.hC=b;a.kM=c;a.e8=d;a.x6=e;}
function AQt(a,b){var c;if(a===b)return 1;if(b!==null&&Cn(a)===Cn(b)){c=b;return C6(a.hC,c.hC)&&C6(a.kM,c.kM)&&C6(a.e8,c.e8)?1:0;}return 0;}
var CW=F(0);
var AVz=null;var AWZ=null;var AVB=null;var AVA=null;var AVD=null;var AVC=null;var AVF=null;var AVE=null;var AVH=null;var AVG=null;var AVI=null;function AMH(){AMH=Bm(CW);ALL();}
function ALL(){AVz=C3(206);AWZ=S(B(319));AVB=S(B(320));AVA=S(B(107));AVD=S(B(321));AVC=S(B(322));AVF=S(B(323));AVE=S(B(324));AVH=Ft(107,106,107,128);AVG=Ft(30,31,34,0);AVI=S(B(109));}
function Ca(){Cj.call(this);this.kf=null;}
var AW0=null;var AW1=null;var AW2=null;var AW3=null;var AW4=null;var AW5=null;var AW6=null;var AW7=null;var AW8=null;var AW9=null;var AW$=null;var AW_=null;var AXa=null;var AXb=null;var AXc=null;var AVJ=null;function ABm(){ABm=Bm(Ca);AGi();}
function Dw(a,b,c){var d=new Ca();Xg(d,a,b,c);return d;}
function ASA(a,b,c,d){var e=new Ca();Qr(e,a,b,c,d);return e;}
function Xg(a,b,c,d){ABm();C_(a,b,c);a.kf=Ij(d,null);}
function Qr(a,b,c,d,e){ABm();C_(a,b,c);a.kf=Ij(d,e);}
function AGi(){var b,c;b=new Ca;AMH();Xg(b,B(325),0,AWZ);AW0=b;AW1=Dw(B(326),1,S(B(327)));AW2=Dw(B(328),2,S(B(329)));AW3=Dw(B(330),3,S(B(331)));AW4=Dw(B(332),4,AWZ);AW5=Dw(B(333),5,S(B(334)));AW6=Dw(B(335),6,S(B(336)));AW7=Dw(B(337),7,S(B(338)));AW8=Dw(B(339),8,S(B(340)));c=new Ca;G7();Qr(c,B(341),9,AV$,S(B(323)));AW9=c;AW$=ASA(B(342),10,AV$,S(B(110)));AW_=Dw(B(343),11,S(B(344)));AXa=Dw(B(345),12,S(B(346)));AXb=Dw(B(347),13,AWZ);b=Dw(B(348),14,S(B(349)));AXc=b;AVJ=H(Ca,[AW0,AW1,AW2,AW3,AW4,AW5,AW6,AW7,AW8,AW9,
AW$,AW_,AXa,AXb,b]);}
function IE(){var a=this;C.call(a);a.nd=null;a.m_=null;}
function Ij(a,b){var c=new IE();ALd(c,a,b);return c;}
function ALd(a,b,c){a.nd=b;a.m_=c;}
function Hy(){var a=this;C.call(a);a.vd=null;a.pa=null;a.ux=null;a.rw=null;a.pR=null;a.iT=null;}
function AXd(a,b,c,d,e,f){var g=new Hy();JP(g,a,b,c,d,e,f);return g;}
function JP(a,b,c,d,e,f,g){a.vd=b;a.pa=c;a.ux=d;a.rw=e;a.pR=f;a.iT=g;}
function ACO(){var a=this;C.call(a);a.jT=null;a.qK=null;a.pQ=null;}
function Zf(a,b,c){var d=new ACO();AN4(d,a,b,c);return d;}
function AN4(a,b,c,d){a.jT=b;a.qK=c;a.pQ=d;}
function Gt(){var a=this;C.call(a);a.k0=null;a.hp=null;a.pl=null;}
function AXe(a,b,c){var d=new Gt();Hk(d,a,b,c);return d;}
function Hk(a,b,c,d){a.k0=b;a.hp=c;a.pl=d;}
function ABy(){var b,c;b=new Gt;c=S(B(350));XT();Hk(b,c,AWM,AWN);return b;}
function AAy(){var b,c;b=new Gt;c=S(B(112));AJF();Hk(b,c,AXf,AXg);return b;}
function YZ(){var b,c;b=new Gt;ABE();c=AXh;AOo();Hk(b,c,AXi,AXj);return b;}
function AEu(){var a=this;C.call(a);a.lT=null;a.q4=0;}
function Zw(a,b){var c=new AEu();AQ_(c,a,b);return c;}
function AQ_(a,b,c){var d;d=new BZ;a.lT=d;a.q4=b;d.bA=c;}
function Q$(a,b){return B_(a.q4,b);}
var DR=F(0);
var AVN=null;var AVO=null;var AVK=null;var AVL=null;var AVM=null;var AXf=null;var AXg=null;var AVP=null;var AVQ=null;function AJF(){AJF=Bm(DR);AMS();}
function AMS(){AVN=S(B(322));AVO=S(B(351));AVK=S(B(112));AVL=S(B(336));AVM=S(B(319));AXf=S(B(322));AXg=S(B(352));AVP=S(B(353));AVQ=CL(43,45,48);}
var OE=F(0);
var OX=F();
function AIU(a,b,c){var d,e;d=b;e=c;b=new M;O(b);T(G(T(G(b,B(354)),d),B(355)),e);CF(N(b));return d+e|0;}
var OF=F(0);
var OV=F();
function AJ7(a,b,c){var d,e;d=b;e=c;b=new M;O(b);Fj(G(Fj(G(b,B(356)),d),B(355)),e);CF(N(b));return d+e;}
var ZC=F();
var YI=F(0);
function Jn(){var a=this;C.call(a);a.dX=null;a.eN=null;a.fm=null;}
var AVc=0;function ACo(a){var b;b=a.eN;if(b!==null){AVc=AVc-1|0;a.dX.dm.deleteTexture(b);a.eN=null;}}
function Ce(a){return a.fm.b;}
function C8(a){return a.fm.a;}
function TH(a,b,c,d){var e;e=a.fm;e.b=b;e.a=c;LS(a);a.dX.dm.texStorage2D(3553,1,d,b,c);e=a.dX.dm;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function LS(a){var b,c;b=a.dX.dm;c=a.eN;b.bindTexture(3553,c);}
function CM(a,b){M9(a,b.ln,b.ky,32856);PC(a,b,0,0);}
function M9(a,b,c,d){var e,f,g,h;a:{e=a.fm;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){LS(a);break a;}e=a.dX.dm;h=a.eN;e.deleteTexture(h);a.eN=a.dX.dm.createTexture();TH(a,b,c,d);break a;}}TH(a,b,c,d);}}
function HW(a,b,c,d){LS(a);PC(a,b,c,d);}
function PC(a,b,c,d){var e;e=a.dX.dm;b=b.jm;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function TL(){C.call(this);this.jS=null;}
var AWY=null;function PJ(){var a=new TL();AAR(a);return a;}
function AAR(a){a.jS=Cm();}
function D3(a,b,c,d){Po(a,ABU(d,b,c));}
function D4(b,c,d){return ABU(d,b,c);}
function GF(a,b,c,d){Jy(a,b,c,d,null);}
function Jy(a,b,c,d,e){Po(a,ATL(null,b,c,d,e));}
function Po(a,b){B0(a.jS,b);}
function Hm(a){return FQ(HF(a.jS,AWY));}
function Yz(){AWY=Q(C$,0);}
var DQ=F(0);
var AWU=null;var AWV=null;var AWR=null;var AWS=null;var AWT=null;var AWM=null;var AWN=null;var AWW=null;var AWX=null;function XT(){XT=Bm(DQ);APi();}
function APi(){AWU=S(B(357));AWV=S(B(358));AWR=S(B(350));AWS=S(B(359));AWT=S(B(315));AWM=S(B(357));AWN=S(B(358));AWW=Ft(118,121,122,128);AWX=CL(63,66,68);}
var Gk=F(0);
var W$=F();
function AOA(a,b,c,d){var e;b=Bu();d=Cx(d);e=new M;O(e);G(G(T(G(e,B(360)),c),B(299)),d);Br(b,N(e));}
var W_=F();
function V1(){C.call(this);this.gw=null;}
function AE2(a,b){return Kq(a.gw,b);}
function AOC(a,b,c,d){return Jk(a.gw,b,c,d);}
function AMF(a,b,c){return Jf(a.gw,b,c);}
function AKe(a,b,c){return DI(a.gw);}
function Ya(){C.call(this);this.ru=null;}
function AN2(a,b){var c;c=a.ru.iz;c.dZ=FJ(b,PI(c));}
var ABB=F();
function Pt(){C.call(this);this.mT=null;}
function AKm(a,b){var c;c=a.mT.i6;c.ez=FJ(b,RP(c));}
function Rs(){C.call(this);this.l_=null;}
function AE6(a,b){return DB(a.l_,null);}
var ZR=F();
function Ci(){Cj.call(this);this.k2=null;}
var AXk=null;var AXl=null;var AXm=null;var AXn=null;var AXo=null;var AXp=null;var AXq=null;var AXr=null;var AXs=null;var AXt=null;var AXu=null;var AXv=null;var AXw=null;var AXx=null;var AXy=null;var AWL=null;function ABP(){ABP=Bm(Ci);AQ6();}
function DJ(a,b,c){var d=new Ci();XR(d,a,b,c);return d;}
function AP7(a,b,c,d){var e=new Ci();ABv(e,a,b,c,d);return e;}
function XR(a,b,c,d){ABP();C_(a,b,c);a.k2=Ij(d,null);}
function ABv(a,b,c,d,e){ABP();C_(a,b,c);a.k2=Ij(d,e);}
function AQ6(){var b;b=new Ci;G7();XR(b,B(325),0,AV$);AXk=b;AXl=DJ(B(326),1,S(B(361)));AXm=DJ(B(328),2,S(B(362)));AXn=DJ(B(330),3,S(B(363)));AXo=DJ(B(332),4,S(B(361)));AXp=DJ(B(333),5,CL(188,63,60));AXq=DJ(B(335),6,S(B(364)));AXr=DJ(B(337),7,S(B(365)));AXs=DJ(B(339),8,S(B(366)));AXt=AP7(B(341),9,AV$,CL(52,65,52));AXu=AP7(B(342),10,S(B(367)),S(B(368)));AXv=DJ(B(343),11,S(B(369)));AXw=DJ(B(345),12,S(B(370)));AXx=DJ(B(347),13,AV$);b=DJ(B(348),14,S(B(349)));AXy=b;AWL=H(Ci,[AXk,AXl,AXm,AXn,AXo,AXp,AXq,AXr,AXs,AXt,
AXu,AXv,AXw,AXx,b]);}
var ADS=F();
function Ir(b,c){var d,e,f;if(c<=0)return B(31);d=BL(c);e=d.data;e[0]=ACI(Ig(b,52));f=1;while(f<c){e[f]=ACI(Ig(b,62));f=f+1|0;}return FS(d);}
function ACI(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AAz=F();
function AEh(){var a=this;C.call(a);a.Ed=null;a.BV=null;a.C2=0;a.CA=0;}
var ADE=F(0);
function ADm(b){var c;a:{switch(b){case 0:break;case 1:c=B(152);break a;case 2:c=B(205);break a;case 3:c=B(204);break a;default:c=null;break a;}c=B(174);}return c;}
var CR=F();
var AB1=F(CR);
var ACH=F(CR);
var ZH=F(CR);
var Z2=F(CR);
var ADb=F(CR);
function Ul(){C.call(this);this.te=null;}
function ALF(a){var b;b=a.te;Br(Bu(),b);}
var AAk=F();
function VX(){C.call(this);this.jd=null;}
function AO1(a,b){var c,d,e,f,g;c=a.jd;d=c.jJ;if(d!==null){e=b.h;f=e.b-d.b|0;g=e.a-d.a|0;e=c.ib;e.b=Et(0,e.b+f|0,c.gr.b-c.hn.b|0);c=a.jd;d=c.ib;d.a=Et(0,d.a+g|0,c.gr.a-c.hn.a|0);}a.jd.jJ=b.h;return 1;}
var AAv=F();
var IG=F(Bo);
function Oz(){C.call(this);this.rN=null;}
function AFT(a,b){HD(a.rN,b);}
function V6(){C.call(this);this.iD=null;}
function ARh(a){return a.iD;}
function AEn(){var a=this;C.call(a);a.bp=null;a.S=null;a.O=null;a.ec=null;}
function ABH(a){var b=new AEn();ARf(b,a);return b;}
function ARf(a,b){var c;a.O=ASk();a.bp=b;c=new Ty;Lp(c);c.lh=new BZ;c.gK=b;a.S=c;}
function IC(a,b,c,d){var e,f,g,h;e=a.S;f=C6(e.gs,c)?0:1;g=C6(e.gO,b)?0:1;h=d===e.iL?0:1;if(f){e.gs=c;e.dV=null;XL(e,0);}e.gz=!f&&!g&&!h?0:1;e.gO=b;e.iL=d;e.hu=0;JY(a);}
function JR(a){var b;b=a.S;b.da=CG(b.da,null);a.O=CG(a.O,null);}
function LI(a,b){var c,d,e;c=a.O;d=c.E;e=c.q;b=CG(c,b);a.O=b;b.iQ(d,e,a.bp.bM);}
function Fm(a,b,c){var d;d=a.O;d.iQ(b,c,d.dW);JY(a);}
function JY(a){var b,c,d,e;b=a.S;c=a.O.q.b;b.q.b=c;d=b.da;if(d!==null&&c!=Ce(d)&&!(c>=b.hu&&Ce(b.da)>=b.hu))b.gz=1;b=a.S;b.dW=a.bp.bM;if(TX(b))c=0;else{b=a.S;QX(b);e=Cv(b.gK,b.iL);XL(b,E0(b.dV)+(e*2|0)|0);c=b.q.a;}b=a.S.E;d=a.O.E;Bg(b,d.b,d.a-c|0);}
function JE(b,c){if(b<0)c=B(371);else if(b>0)c=B(372);return c;}
function N7(a,b,c){var d;d=a.S.E.b;return (d-c|0)<=b&&b<d?1:0;}
function TN(a,b,c){var d,e;d=a.S;e=d.E.b+d.q.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Pk(a,b,c){var d;d=a.S.E.a;return (d-c|0)<=b&&b<d?1:0;}
function P5(a,b,c){var d,e;d=a.O;e=d.E.a+d.q.a|0;return e<=b&&b<(e+c|0)?1:0;}
function MQ(a,b,c){var d,e,f;d=a.S.E.a-c|0;e=a.O;f=(e.E.a+e.q.a|0)+c|0;return d<=b&&b<f?1:0;}
function RR(a,b,c){var d,e;d=a.S.E.a+c|0;e=a.O;return ACL(b,d,(e.E.a+e.q.a|0)-c|0);}
function VI(a,b,c){var d,e,f;d=a.S;e=d.E.b;f=e-c|0;e=(e+d.q.b|0)+c|0;return f<=b&&b<e?1:0;}
function UV(a,b,c){var d,e;d=a.S;e=d.E.b;return ACL(b,e+c|0,(e+d.q.b|0)-c|0);}
function ACL(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BE(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function H6(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bk;f=new Bk;g=b.b;h=b.a;b=a.O;i=b.E;j=i.b;k=i.a;b=b.q;l=b.b;m=b.a;b=new XA;b.nW=a;b.nV=e;b.nT=f;b.nS=c;b.n0=g;b.nZ=j;b.nY=l;b.nX=d;b.n2=h;b.n1=k;b.r4=m;return b;}
var ABY=F(0);
var Lu=F(0);
function Rk(){C.call(this);this.oK=null;}
function AMj(a,b){return QL(a.oK,b);}
var Qi=F();
function AQw(a,b){ACo(b);}
var Zb=F();
function B_(b,c){return Dg(b*c);}
var Yn=F();
function ADk(b,c,d,e,f,g){g.b=c.b;g.a=f;By(b,d.b,d.a,g,e);By(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;By(b,d.b,d.a+f|0,g,e);By(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function ACE(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;By(b,j,k,i,h);By(b,j,k,i,h);By(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;By(b,l,j,i,h);By(b,l,j,i,h);By(b,l+g|0,j+g|0,i,h);}
function Na(){var a=this;C.call(a);a.b0=null;a.iP=null;a.ew=null;a.dH=0;a.et=0;a.gc=null;a.fE=null;a.fH=0;}
function S3(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dH;i=Ba(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bb(i,e))a:{while(true){if(d<=e){j=d;break a;}Eu(c);j=d+(-1)|0;b=C5(d);d=Ba(j,a.et)%a.ew.a|0;F5(a,c,b,a.fH,g);HW(a.b0,c,0,d);if(!(j%a.dH|0))break;d=j;}}else{Eu(b);k=a.dH-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;F5(a,b,C5(j),Ba(a.et,k)+a.fH|0,g);k=k+(-1)|0;j=h;}CM(a.b0,b);j=Bb(i,e);}return j;}k=a.dH;h=Ba(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Z(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Eu(c);b=C5((d+f|0)+1|0);j=d+
1|0;d=Ba(d,a.et)%a.ew.a|0;F5(a,c,b,a.fH,g);HW(a.b0,c,0,d);if(!(j%a.dH|0))break;d=j;}}else{Eu(b);d=0;while(d<a.dH){h=h+1|0;F5(a,b,C5((h>e?h-f|0:h)+f|0),Ba(a.et,d)+a.fH|0,g);d=d+1|0;}CM(a.b0,b);j=Z(i,e);}return j;}
function I0(a,b,c,d,e,f){EG(b,a.iP.b+d.b|0,c+d.a|0,a.gc,a.fE,a.b0,e,f,0.0);}
function F5(a,b,c,d,e){Ch(b,c,a.ew.b-20.0*e,d);}
function SR(){C.call(this);this.uM=null;}
function AHd(a,b){var c,d,e;c=a.uM;if(c.e.f.cs==c.kF){b=b.data;d=D6(b[0]);e=FG(b[1]);ABk(c.e.f,d,e);Pe(c.e.f);}}
var YF=F();
function F4(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function Zi(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function ADo(){var a=this;C.call(a);a.bs=0;a.bE=0;}
function ES(a,b){var c=new ADo();AK3(c,a,b);return c;}
function AK3(a,b,c){a.bs=b;a.bE=c;}
function AFb(a,b){var c;if(a===b)return 1;if(b!==null&&Cn(a)===Cn(b)){c=b;return a.bs==c.bs&&a.bE==c.bE?1:0;}return 0;}
function AOk(a){var b,c,d,e,f,g,h;b=Q(C,2).data;b[0]=FX(a.bs);b[1]=FX(a.bE);c=(-1515898884);d=0;while(d<b.length){e=b[d];if(e===null)f=0;else{g=e.fp;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;c=J$(h,4)^((h>>>7|0)|h<<25)^J$(c,13);d=d+1|0;}return c;}
function ANU(a,b){var c;b=b;c=BE(a.bs,b.bs);if(!c)c=BE(a.bE,b.bE);return c;}
function Tl(){C.call(this);this.um=null;}
function AHi(a,b){var c;c=a.um;To(c,ET(c,b.h));KD(c.r,c.w,c.x);GO(c);}
var Sn=F(0);
var AWi=null;function ACl(){AWi=new P_;}
var FK=F(Ip);
var W9=F(EF);
function P8(){C.call(this);this.mq=null;}
function ANi(a,b){var c,d;c=a.mq;d=c.dy+1|0;c.dy=d;c=new M;O(c);G(G(T(c,d),B(373)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Ud(){C.call(this);this.pF=null;}
function APN(a){var b,c;b=a.pF;c=new M;O(c);G(G(G(c,B(374)),b),B(375));$rt_globals.console.info($rt_ustr(N(c)));}
var L2=F(DU);
var AXz=0.0;var AXA=null;function ACn(){AXz=$rt_globals.NaN;AXA=E($rt_floatcls());}
var Fy=F();
var AUS=null;var AUU=null;var AUV=null;var AUT=null;var AUR=null;function AA9(){AUS=E4([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AUU=AGC([Bc(1),Bc(10),Bc(100),Bc(1000),Bc(10000),Bc(100000),Bc(1000000),Bc(10000000),Bc(100000000),Bc(1000000000),Cc(1410065408, 2),Cc(1215752192, 23),Cc(3567587328, 232),Cc(1316134912, 2328),Cc(276447232, 23283),Cc(2764472320, 232830),Cc(1874919424, 2328306),Cc(1569325056, 23283064),Cc(2808348672, 232830643)]);AUV=AGC([Bc(1),Bc(10),Bc(100),Bc(10000),Bc(100000000),
Cc(1874919424, 2328306)]);AUT=new Ub;AUR=new Vv;}
var J2=F();
var AXB=null;var AXC=null;function ABS(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.nj=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.kd=0;c.j0=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Fa(CV(Bc(e),Bc(8388608)),Em)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AB0(AXC,f);if(h<0)h=( -h|0)-2|0;i=AXC.data;j=9+(f-i[h]|0)|0;k=Bc(e);l=AXB.data;m=EC(D5(BQ(k,Bc(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=EC(D5(BQ(k,Bc(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<
( -g|0);o=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BE(q,r);e=e>0?Ba(m/q|0,q):e<0?Ba(m/r|0,r)+r|0:Ba((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.kd=e;c.j0=h-50|0;}
function AAf(){var b,c,d,e,f,g,h,i;AXB=BC(100);AXC=BC(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AXB.data;g=d+50|0;f[g]=$rt_udiv(e,20);AXC.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:EC(Cq(Bc(h),Gl(BQ(Bc(b&((1<<i)-1|0)),Bc(10)),i)));f=AXB.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AXC.data[i]=c;d=d+1|0;}}
function Vv(){var a=this;C.call(a);a.kd=0;a.j0=0;a.nj=0;}
function LV(){var a=this;C.call(a);a.v_=null;a.md=0.0;a.wu=0.0;a.eQ=null;a.gH=null;a.lq=null;a.e1=0;}
function ADF(a,b){var c;if(b!==null){a.gH=b;return a;}c=new BD;Bl(c,B(376));K(c);}
function AB6(a,b){var c;if(b!==null){a.lq=b;return a;}c=new BD;Bl(c,B(376));K(c);}
function PQ(a,b,c,d){var e,f,g,$$je;e=a.e1;if(!(e==2&&!d)&&e!=3){a.e1=d?2:1;while(true){try{f=ADI(a,b,c);}catch($$e){$$je=Ef($$e);if($$je instanceof Bo){g=$$je;K(AHt(g));}else{throw $$e;}}if(G3(f))return f;if(Ib(f)){if(d&&DM(b)){g=a.gH;G6();if(g===AVl)return DZ(B6(b));if(B6(c)<=I(a.eQ))return AVo;ED(b,b.V+B6(b)|0);if(a.gH===AVm)J4(c,a.eQ);}return f;}if(Qq(f)){g=a.gH;G6();if(g===AVl)return f;if(g===AVm){if(B6(c)<I(a.eQ))return AVo;J4(c,a.eQ);}ED(b,b.V+J9(f)|0);}else if(LT(f)){g=a.lq;G6();if(g===AVl)break;if(g
===AVm){if(B6(c)<I(a.eQ))return AVo;J4(c,a.eQ);}ED(b,b.V+J9(f)|0);}}return f;}b=new DY;V(b);K(b);}
function Zr(a,b){var c,d,e,f;c=a.e1;if(c&&c!=3){b=new DY;V(b);K(b);}if(!B6(b))return AD8(0);if(a.e1)a.e1=0;d=AD8(Bb(8,B6(b)*a.md|0));while(true){e=PQ(a,b,d,0);if(Ib(e))break;if(G3(e))d=SF(a,d);if(!KE(e))continue;Vr(e);}b=PQ(a,b,d,1);if(KE(b))Vr(b);while(true){f=a.e1;if(f!=3&&f!=2)break;a.e1=3;if(Ib(AVp)){d.dp=d.V;d.V=0;d.ha=(-1);return d;}d=SF(a,d);}b=new DY;V(b);K(b);}
function SF(a,b){var c,d,e;c=b.g1;d=Nv(c,Bb(8,c.data.length*2|0));e=ABg(d,0,d.data.length);ED(e,b.V);return e;}
var AAQ=F(CR);
function Qv(){C.call(this);this.m8=null;}
function AJm(a,b){Db(a.m8,b);}
function VO(){C.call(this);this.oo=null;}
function ARu(a,b){var c,d;c=a.oo;d=c.dy+1|0;c.dy=d;c=b.he;b=new M;O(b);G(G(T(b,d),B(377)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var P_=F();
function AMq(a,b){}
function EI(){var a=this;C.call(a);a.E=null;a.q=null;a.dW=0.0;}
function ASk(){var a=new EI();Lp(a);return a;}
function Lp(a){a.E=new Bk;a.q=new Bk;}
function AMV(a){}
function AQz(a){return BX(0,0);}
function PL(a,b,c,d){var e;if(!K4(a.E,b)){a.jY(b);CA(a.E,b);}if(!K4(a.q,c)){a.jO(c);CA(a.q,c);}e=a.dW;if(e!==d){a.dW=d;a.pm(e,d);}}
function DG(a,b){return F4(b,a.E,a.q);}
function Zs(a,b){var c,d,e,f;c=a.E;d=c.b;e=c.a;f=a.q;XT();By(b,d,e,f,AWM);}
function VP(a,b){var c;c=a.E;Lt(b,c.b,c.a,a.q);}
function APJ(a,b){return 0;}
function AIb(a,b){}
function APr(a,b){}
function ARB(a,b,c){}
function AP0(a,b,c,d){return 0;}
function APg(a,b,c){return null;}
function AQm(a,b,c){return 0;}
function AMe(a,b){return 0;}
function AH5(a,b,c,d){return 0;}
function Gz(){var a=this;EI.call(a);a.cE=null;a.bu=null;a.eZ=null;}
function AXD(){var a=new Gz();TP(a);return a;}
function TP(a){Lp(a);a.cE=new Bk;a.bu=new Bk;}
function AE0(a,b){a.eZ=b;}
function AD9(a){var b;b=a.bu;b.b=LP(a,b.b);b=a.bu;b.a=Ki(a,b.a);}
function U$(a,b){a.bu.b=LP(a,b);}
function Rb(a,b){a.bu.a=Ki(a,b);}
function ACc(a,b,c){a.bu.b=LP(a,b);a.bu.a=Ki(a,c);}
function Ki(a,b){return Bb(0,Z(b,a.cE.a-a.q.a|0));}
function LP(a,b){return Bb(0,Z(b,a.cE.b-a.q.b|0));}
function QV(){var a=this;Gz.call(a);a.cv=null;a.ds=null;a.fD=null;a.qh=null;a.dA=null;a.bZ=null;a.dO=null;a.e4=null;a.c9=0;a.eB=0;a.l$=null;a.dJ=0;a.dL=0;a.fP=0;a.eY=0;a.fo=0;a.cy=0;a.dP=null;a.ix=null;a.nk=null;a.gu=null;}
function ATX(a,b){var c=new QV();AAn(c,a,b);return c;}
function AAn(a,b,c){TP(a);a.ds=AK8();a.fD=new Bk;a.bZ=AXE;a.dO=Q(HX,0);a.dJ=0;a.dL=0;a.fP=0;a.eY=0;a.fo=0;a.dP=ADZ(0);a.gu=Gv();a.cv=b;a.ix=c;a.l$=c;Tg(a);}
function Tg(a){a.c9=B_(2.0,a.cv.bM);}
function Wm(a){return a.bZ.data.length?0:1;}
function V0(a,b){OH(a);a.bZ=b;}
function OH(a){Bg(a.fD,0,0);}
function XQ(a,b,c){a.nk=b;a.qh=c;a.dA=null;a.dP=null;a.eB=0;OH(a);}
function ARR(a){var b,c;a.e4=CG(a.e4,null);Bg(a.fD,0,0);b=a.gu;if(b.dr>0){b.dr=0;c=b.b6;Zq(c,0,c.data.length,null);b.c4=b.c4+1|0;}a.dP=null;a.bZ=AXE;a.dO=null;a.dJ=0;a.dL=0;a.fP=0;S2(a.ds);a.ix=null;}
function AHc(a,b,c){Tp(a);Tg(a);a.dA=null;a.dP=null;a.eB=0;}
function AJ0(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=IH(a.cv);if(Wm(a))return;Lm(a);Cy(c,a.dA);d=D7(a);e=AEo(c,a.eB);f=Z(IB(a.q.a,d),a.bZ.data.length)+30|0;g=a.nk.nb;h=a.dO.data;i=h.length;if(i<f){a:{j=a.eY;k=a.fo;l=a.bZ;m=a.dP;n=a.gu;o=Q(HX,f);if(i>0){p=o.data;while(j<=k){q=l.data[j];r=j%p.length|0;s=j%i|0;t=h[s];if(t!==null&&t.gh!==q){Vg(m,t,n);p[r]=Lv(q,m,e,n);h[s]=null;}else if(t!==null&&p[r]===null){p[r]=t;h[s]=null;}else p[r]=Lv(q,m,e,n);j=j+1|0;}}else if(f>0){p
=o.data;while(true){if(j>k)break a;p[j%p.length|0]=Lv(l.data[j],m,e,n);j=j+1|0;}}}j=0;while(j<i){q=h[j];if(q!==null){Vg(m,q,n);h[j]=null;}j=j+1|0;}a.dO=o;CA(a.fD,L4(a.dP));TJ(a,a.cv.cV);}a.eY=Z((a.bu.a+a.c9|0)/(D7(a)+a.c9|0)|0,a.bZ.data.length-1|0);a.fo=Z((((a.bu.a+a.ds.y.a|0)-1|0)+a.c9|0)/(D7(a)+a.c9|0)|0,a.bZ.data.length-1|0);if(!a.dO.data.length)return;Yy(a,e);VP(a,b);t=g.rw;m=a.E;By(b,m.b,m.a,a.q,t);m=a.ds.P;u=m.b;v=m.a;w=Cv(a.cv,2.0);m=a.cv.dQ;x=a.eY;j=u+w|0;while(x<=a.fo){n=M$(a,x);k=Ba(x,D7(a));i=x+1
|0;y=k+Ba(i,a.c9)|0;k=j+a.dJ|0;r=k+a.dL|0;z=a.cy!=x?0:1;ba=!z?t:g.pR;q=!z?g.vd:g.iT;bb=!z?g.pa:g.iT;bc=!z?g.ux:g.iT;bd=(v+y|0)-a.bu.a|0;EG(b,j,bd,n.gE,n.rh,a.e4,q,ba,0.0);EG(b,k,bd,n.g8,n.hP,a.e4,bb,ba,0.0);EG(b,r,bd,n.hc,n.ip,a.e4,bc,ba,0.0);k=n.gE.b;s=j+k|0;Bg(m,Bb(0,a.dJ-k|0),n.gE.a);By(b,s,bd,m,ba);k=j+a.dJ|0;s=n.g8.b;be=k+s|0;Bg(m,Bb(0,a.dL-s|0),n.g8.a);By(b,be,bd,m,ba);k=n.hc.b;bf=r+k|0;Bg(m,Bb(0,(((a.ds.y.b-k|0)-a.dL|0)-a.dJ|0)-w|0),n.hc.a);By(b,bf,bd,m,ba);bg=(u+a.q.b|0)-w|0;Bg(m,w,D7(a)+a.c9|0);By(b,
bg,bd,m,t);x=i;}Iy(b);}
function Yy(a,b){var c,d,e,f,g,h;c=0;d=a.eY;while(d<=a.fo){e=M$(a,d);if(!(e!==null&&e.gh===a.bZ.data[d])){f=a.dO.data;g=a.bZ;e=a.dP;h=a.gu;c=d%f.length|0;if(f[c]!==null)Vg(e,f[c],h);f[c]=Lv(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){CA(a.fD,L4(a.dP));TJ(a,a.cv.cV);}}
function TJ(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fD;c=CK(b,c.b+150|0,c.a);Cy(c,a.dA);d=a.dA;e=d.dt;f=e-(e+d.eg)/16.0;g=a.dO.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gh.ic;k=d.hP;Ch(c,j,k.bl+a.eB,f+k.bz);j=d.gh.is;d=d.ip;Ch(c,j,d.bl+a.eB,f+d.bz);}i=i+1|0;}a:{d=a.gu;if(d.dr>0){h=d.c4;i=0;b:while(true){g=d.b6.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.du;l=j.dx;k=k;l=l.h4;Ch(c,k,l.bl+a.eB,f+l.bz);j=j.cN;if(h!=d.c4)break b;}i=i+1|0;}b=new IG;V(b);K(b);}}b=CG(a.e4,CU(b));a.e4=b;CM(b,c);FM(c);}
function M$(a,b){var c;c=a.dO.data;return c[b%c.length|0];}
function AK_(a,b){CA(a.ds.y,b);}
function AHN(a,b){CA(a.ds.P,b);}
function ZJ(a){var b,c;Lm(a);b=D7(a);c=a.bZ.data.length;b=Ba(b,c)+Ba(a.c9,c+1|0)|0;Bg(a.cE,a.q.b,b);}
function Tp(a){var b,c,d,e,f,g,h,i,j;b=IH(a.cv);if(Wm(a))return;Lm(a);Cy(b,a.dA);c=AEo(b,a.eB);d=a.bZ.data;e=d.length;f=0;while(f<e){g=d[f];h=JN(c,g.gp);i=JN(c,g.ic);j=JN(c,g.is);a.dJ=Bb(a.dJ,h);a.dL=Bb(a.dL,i);a.fP=Bb(a.fP,j);f=f+1|0;}}
function AQJ(a,b){var c;c=NM(a,b.h);if(c>=0)a.cy=c;return Eq(a.ds,a.E)&&Hb(a.cv.cA)?1:0;}
function AFi(a,b,c){if(!Eq(a.ds,b.h)&&!LX(a.ds)){b=a.l$;if(b!==null)b.p();}return null;}
function AFx(a,b,c,d){var e;if(d==1){e=NM(a,b.h);if(e>=0)Nx(a,a.bZ.data[e]);}return 1;}
function Nx(a,b){a.ix.p();b.mc.p();}
function NM(a,b){var c,d,e;if(!a.dO.data.length)return (-1);c=D7(a);d=(b.a-a.E.a|0)+a.bu.a|0;e=a.c9;e=(d+e|0)/(c+e|0)|0;if(e<a.bZ.data.length)return e;return (-1);}
function D7(a){return E0(a.dA);}
function Lm(a){var b;if(a.dA===null){b=GL(a.cv,a.qh);a.dA=b;a.dP=ADZ(E0(b));a.eB=Dg(a.dA.lC);}}
function AKH(a,b){var c,d,e;a:{switch(b.bh){case 13:Nx(a,a.bZ.data[a.cy]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cy=a.eY;b=a.eZ;c=a.bu;HS(b,c.b,c.a-(a.q.a/2|0)|0);return 0;case 34:a.cy=a.fo;b=a.eZ;c=a.bu;HS(b,c.b,c.a+(a.q.a/2|0)|0);return 0;case 35:case 39:a.cy=a.bZ.data.length-1|0;break a;case 36:case 37:a.cy=0;break a;case 38:d=a.cy;e=a.bZ.data.length;a.cy=((d+e
|0)-1|0)%e|0;break a;case 40:a.cy=(a.cy+1|0)%a.bZ.data.length|0;break a;default:break a;}a.ix.p();return 0;}e=a.cy;if(e<=a.eY)HS(a.eZ,a.bu.b,Ba(e,D7(a))+Ba(a.cy,a.c9)|0);else if(e>=a.fo)HS(a.eZ,a.bu.b,(Ba(e+1|0,D7(a))+Ba(a.cy+2|0,a.c9)|0)-a.q.a|0);return 0;}
var VW=F();
function ARC(a){}
function AAt(){var a=this;EI.call(a);a.k7=null;a.rm=null;a.tN=null;a.bv=null;a.c1=null;a.c3=null;a.sg=0.0;a.ma=null;a.mx=null;}
function Zu(a,b){var c=new AAt();AQv(c,a,b);return c;}
function AQv(a,b,c){var d;c=c.cA;Lp(a);d=new Vw;d.rg=a;a.rm=d;d=new Vx;d.nJ=a;a.tN=d;a.sg=10.0;a.bv=b;a.k7=c;b.eZ=a;}
function AFB(a){var b;b=a.bv;b.eZ=null;a.bv=CG(b,null);}
function Qu(a,b,c){var d;a.ma=b;a.mx=c;d=a.c1;if(d!==null)Gc(d,b,c);d=a.c3;if(d!==null)Gc(d,b,c);}
function AHj(a,b,c,d){PL(a,b,c,d);PL(a.bv,b,c,d);if(d!==0.0){a.bv.uy();AD9(a.bv);if(P2(a))HY(a);else a.c3=null;if(XD(a))H$(a);else a.c1=null;}}
function HS(a,b,c){ACc(a.bv,b,c);if(P2(a))HY(a);if(XD(a))H$(a);}
function XD(a){var b;b=a.q.a;return b>0&&a.bv.cE.a>b?1:0;}
function P2(a){var b;b=a.q.b;return b>0&&a.bv.cE.b>b?1:0;}
function HY(a){var b,c,d,e,f,g;b=a.c3;if(b===null)b=Hl();a.c3=b;Uc(a,b);c=a.c3;b=a.bv;d=b.bu.b;e=a.E;f=e.b;g=a.q;Mn(c,d,f,g.b,b.cE.b,e.a+g.a|0,JC(a));}
function H$(a){var b,c,d,e,f,g;b=a.c1;if(b===null)b=Hl();a.c1=b;Uc(a,b);c=a.c1;b=a.bv;d=b.bu.a;e=a.E;f=e.a;g=a.q;Is(c,d,f,g.a,b.cE.a,e.b+g.b|0,JC(a));}
function JC(a){return B_(a.sg,a.dW);}
function Uc(a,b){var c,d;c=a.ma;d=a.mx;if(!(c!==null&&d!==null?(Ku(b.hB,c)&&Ku(b.hA,d)?1:0):0))Gc(b,c,d);}
function AOY(a,b){var c;a.bv.eS(b);if(!(a.c1===null&&a.c3===null)){CJ(b,1);c=a.c1;if(c!==null)FT(c,b);c=a.c3;if(c!==null)FT(c,b);c=a.c1;if(c!==null)Gb(c,b);c=a.c3;if(c!==null)Gb(c,b);CJ(b,0);}}
function MU(a,b){var c,d;a:{b:{c=a.c1;if(!(c!==null&&IO(c,b))){c=a.c3;if(c===null)break b;if(!IO(c,b))break b;}d=1;break a;}d=0;}return d;}
function AJv(a,b,c,d){return !MU(a,b.h)&&!a.bv.cp(b,c,d)?0:1;}
function AP3(a,b,c){var d,e;d=a.c1;if(d!==null){e=Fe(d,b.h,a.rm,1);if(e!==null)return e;}d=a.c3;if(d!==null){e=Fe(d,b.h,a.tN,0);if(e!==null)return e;}return a.bv.b5(b,c);}
function AI5(a,b,c){return MU(a,b.h)?1:0;}
function AKo(a,b){var c,d,e;c=a.c1;d=c!==null&&Fp(c,b.h,a.k7)?1:0;c=a.c3;e=c!==null&&Fp(c,b.h,a.k7)?1:0;return !d&&!e&&!a.bv.bR(b)?0:1;}
function AO_(a,b,c,d){var e,f;if(!DG(a,b.h))return 0;e=B_(d*0.25,a.dW);f=B_(c*0.25,a.dW);if(b.bC){f=f+e|0;e=0;}if(a.c1!==null&&e){b=a.bv;Rb(b,b.bu.a+e|0);H$(a);}if(a.c3!==null&&f){b=a.bv;U$(b,b.bu.b+f|0);HY(a);}return 1;}
function AMA(a){var b,c;b=JC(a);c=a.bv.iN();c.b=Bb(c.b,b);c.a=Bb(c.a,b);return c;}
function V3(){var a=this;Gz.call(a);a.hK=null;a.k1=null;a.rX=null;a.pC=0.0;}
function ANj(a){var b,c;b=a.cE;c=a.q;Bg(b,c.b*3|0,c.a*5|0);}
function ALc(a){var b;b=B_(20.0,a.dW);return BX(b,b);}
function AJ2(a,b){var c,d,e,f;c=a.rX;d=c.sR;e=c.sS;c=c.sP;b=Cx(b);f=new M;O(f);G(G(G(f,c),B(36)),b);IC(e,N(f),d.sN,3.0);}
function AHG(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;Zs(a,b);VP(a,b);c=B_(30.0,a.dW);d=a.bu;e=d.b;f=Ba(e/c|0,c);g=d.a;h=Ba(g/c|0,c);d=a.q;i=Ba(((e+d.b|0)-1|0)/c|0,c);e=Ba(((g+d.a|0)-1|0)/c|0,c);d=a.k1;d.a=c;d.b=c;a.hK.bA=1.0;while(h<=e){g=a.E.a-a.bu.a|0;j=f;while(j<=i){k=a.E.b-a.bu.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=ADy(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;W0(n,0.75,a.pC,a.hK);By(b,k+j|0,g+h|0,a.k1,a.hK);j=j+c|0;}h=h+c|0;}Iy(b);}
function AKF(a,b){}
function Pl(){var a=this;C.call(a);a.sR=null;a.sS=null;a.sP=null;}
function Vo(){C.call(this);this.o_=null;}
function ANE(a){XN(a.o_);}
function Rq(){C.call(this);this.mp=null;}
function AJK(a){NE(a.mp);}
function XG(){C.call(this);this.kX=null;}
var AXE=null;function ANs(){var a=new XG();ZY(a);return a;}
function ZY(a){a.kX=Cm();}
function M3(a,b,c,d,e){var f;f=new Jq;f.mc=e;f.ic=c;f.is=d;f.gp=b;B0(a.kX,f);}
function QN(a){return HF(a.kX,AXE);}
function VJ(b){var c,d;if(b===null)b=B(31);else{c=b.e8;if(c===null)b=B(31);else{d=Px(c,B(378),I(c));b=d==(-1)?b.e8:Dk(b.e8,d+1|0);}}return b;}
function AAw(){AXE=Q(Jq,0);}
function HX(){var a=this;C.call(a);a.rh=null;a.hP=null;a.ip=null;a.gE=null;a.g8=null;a.hc=null;a.gh=null;}
function Lv(b,c,d,e){var f,g,h;f=new HX;f.gE=new Bk;f.g8=new Bk;f.hc=new Bk;f.gh=b;g=DN(e,b.gp);if(g!==null)g.gS=g.gS+1|0;else{g=new N5;h=Hf(c,b.gp,d);g.gS=1;g.h4=h;K7(e,b.gp,g);}e=g.h4;f.rh=e;Bg(f.gE,e.bi|0,e.bA|0);e=Hf(c,b.ic,d);f.hP=e;Bg(f.g8,e.bi|0,e.bA|0);b=Hf(c,b.is,d);f.ip=b;Bg(f.hc,b.bi|0,b.bA|0);return f;}
function Vg(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gh.gp;f=DN(d,e);g=f.gS-1|0;f.gS=g;if(!g){a:{h=0;i=null;if(e===null){j=d.b6.data[0];while(j!==null){if(j.du===null)break a;k=j.cN;i=j;j=k;}}else{l=e.i9();m=d.b6.data;h=l&(m.length-1|0);j=m[h];while(j!==null&&!(j.iM==l&&YV(e,j.du))){k=j.cN;i=j;j=k;}}}if(j===null)j=null;else{if(i!==null)i.cN=j.cN;else d.b6.data[h]=j.cN;d.c4=d.c4+1|0;d.dr=d.dr-1|0;}Ie(b,f.h4);}Ie(b,c.hP);Ie(b,c.ip);}
function Ty(){var a=this;EI.call(a);a.gK=null;a.gO=null;a.gs=null;a.dV=null;a.iL=0.0;a.gz=0;a.hu=0;a.da=null;a.lh=null;}
function LJ(a){var b;b=a.q;return b.b&&b.a?0:1;}
function TX(a){var b,c;a:{if(a.gs!==null){b=a.gO;if(b!==null&&!Fo(b)){c=0;break a;}}c=1;}return c;}
function XL(a,b){a.q.a=b;}
function O$(a,b,c,d,e){var f,g;f=a.gK.dQ;Bg(f,d,a.q.a);g=a.E;By(b,g.b+c|0,g.a,f,e);}
function QX(a){if(a.dV===null)a.dV=GL(a.gK,a.gs);}
function Ub(){var a=this;C.call(a);a.kQ=Em;a.jI=0;a.mU=0;}
function Yg(){var a=this;C.call(a);a.r0=null;a.rZ=null;a.rY=null;}
function AHT(a){var b,c,d,e,f;b=a.r0;c=a.rZ;d=a.rY;e=Bu();f=new M;O(f);b=G(f,b);BA(b,9);b=G(b,c);BA(b,9);G(b,d);Br(e,N(f));}
function Vw(){C.call(this);this.rg=null;}
function AQx(a,b){var c,d;c=a.rg;d=FJ(b,c.bv.cE.a-c.q.a|0);Rb(c.bv,d);H$(c);}
function Vx(){C.call(this);this.nJ=null;}
function AFJ(a,b){var c,d;c=a.nJ;d=FJ(b,c.bv.cE.b-c.q.b|0);U$(c.bv,d);HY(c);}
function Jq(){var a=this;C.call(a);a.mc=null;a.ic=null;a.is=null;a.gp=null;}
var DY=F(Bo);
var ACh=F(EF);
function AHt(a){var b=new ACh();ALT(b,a);return b;}
function ALT(a,b){a.iZ=1;a.jj=1;a.kA=b;}
function SW(){C.call(this);this.tX=null;}
function AIL(a,b){Db(a.tX,b);}
function SX(){C.call(this);this.qB=null;}
function ARA(a,b){Db(a.qB,b);}
function Sf(){var a=this;C.call(a);a.v5=null;a.v6=null;a.v4=null;}
function NJ(){var a=this;C.call(a);a.s1=null;a.s3=null;a.s2=0;}
function AFr(a,b){var c,d,e;c=a.s1;d=a.s3;e=a.s2;d.l(Xv(c,(b.h.b+e|0)-c.dU.b|0));}
function NH(){var a=this;C.call(a);a.pN=null;a.pM=null;a.pO=0;}
function AHu(a,b){var c,d,e;c=a.pN;d=a.pM;e=a.pO;d.l(Ot(c,(b.h.a+e|0)-c.dU.a|0));}
function Km(){var a=this;LV.call(a);a.ns=null;a.r2=null;}
function ADI(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.ns;e=0;f=0;g=a.r2;a:{b:{while(true){if((e+32|0)>f&&DM(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B6(b)+k|0;h=j.length;f=Z(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new Bx;c=new M;O(c);T(G(T(G(c,B(379)),l),B(94)),h);Bl(b,N(c));K(b);}if(B6(b)<m){b=new LL;V(b);K(b);}if(m<0){b=new Bx;c=new M;O(c);G(T(G(c,B(95)),m),B(96));Bl(b,N(c));K(b);}n=b.V;h=n+b.ks|0;e=0;while(e<m){o=k+1|0;i=b.k$.data;l=h+1|0;j[k]=i[h];e=e+
1|0;k=o;h=l;}b.V=n+m|0;e=0;}if(!DM(c)){p=!DM(b)&&e>=f?AVp:AVo;break a;}i=g.data;n=B6(c);o=i.length;n=Z(n,o);q=new Vb;q.qU=b;q.s7=c;p=ADV(a,d,e,f,g,0,n,q);e=q.uC;if(p===null&&0==q.jK)p=AVp;k=q.jK;h=0;if(c.lV){b=new IZ;V(b);K(b);}if(B6(c)<k)break;if(h>o){b=new Bx;c=new M;O(c);BA(T(G(T(G(c,B(97)),h),B(91)),o),41);Bl(b,N(c));K(b);}l=h+k|0;if(l>o){b=new Bx;c=new M;O(c);T(G(T(G(c,B(99)),l),B(94)),o);Bl(b,N(c));K(b);}if(k<0){b=new Bx;c=new M;O(c);G(T(G(c,B(95)),k),B(96));Bl(b,N(c));K(b);}o=c.V;m=0;while(m<k){l=o+1
|0;n=h+1|0;Sm(c,o,i[h]);m=m+1|0;o=l;h=n;}c.V=c.V+k|0;if(p!==null)break a;}b=new HT;V(b);K(b);}b=new Bx;c=new M;O(c);BA(T(G(T(G(c,B(97)),k),B(91)),h),41);Bl(b,N(c));K(b);}ED(b,b.V-(f-e|0)|0);return p;}
var TC=F(Km);
function ADV(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Kp(h,2))break a;i=AVp;break a;}c=k+1|0;n=j[k];if(!FD(a,n)){c=c+(-2)|0;i=DZ(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Kp(h,3))break a;i=AVp;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!FD(a,n))break b;if(!FD(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(L1(p)){c=k+(-3)|0;i=DZ(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=DZ(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Kp(h,4))break a;i=AVp;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B6(h.s7)<2?0:1)break a;i=AVo;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!FD(a,n))break c;if(!FD(a,o))break c;if(!FD(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=H5(r);m=c+1|0;j[c]=II(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=DZ(1);break a;}c=k+(-3)|0;i
=DZ(1);}h.uC=c;h.jK=f;return i;}
function FD(a,b){return (b&192)!=128?0:1;}
function PN(){C.call(this);this.rG=null;}
function AGy(a,b){var c,d;c=a.rG;d=c.dy+1|0;c.dy=d;c=new M;O(c);G(G(T(c,d),B(380)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function T$(){C.call(this);this.oJ=null;}
function AEV(a){return a.oJ.fL();}
function T_(){C.call(this);this.uB=null;}
function AON(a){return a.uB.fL();}
function SU(){C.call(this);this.qs=null;}
function APk(a){return a.qs.fL();}
function Vn(){C.call(this);this.x$=null;}
function AMD(a){Br(Bu(),B(381));}
function Qx(){C.call(this);this.mL=null;}
function AEJ(a,b){a.mL.l(FA(b));}
function UJ(){C.call(this);this.r5=null;}
function AQ5(a,b){a.r5.p();}
function MI(){var a=this;C.call(a);a.vE=null;a.vF=null;a.vH=0;a.vJ=0;}
var AA6=F();
var ZD=F();
function Si(){C.call(this);this.uu=null;}
function AFI(a,b){var c,d,e,f;c=a.uu;d=Cx(b);e=new M;O(e);G(G(e,B(382)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new SE;d.wn=c;d.o1=b;e=new SD;e.vj=c;f=new UE;f.wd=e;e=new VS;e.nl=d;c=b.e0;if(c!==null)c.arrayBuffer().then(Bj(e,"f"),Bj(f,"f"));else{b=b.gx.getFile();c=new VV;c.sX=e;c.sY=f;b.then(Bj(c,"f"),Bj(f,"f"));}}
function Sh(){C.call(this);this.wN=null;}
function AGp(a,b){var c;b=Cx(b);c=new M;O(c);G(G(c,B(383)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var RC=F();
function AI2(a,b){b=b;b.b0=CG(b.b0,null);}
function S4(){C.call(this);this.s4=null;}
function AJM(a){DK(a.s4);}
var JW=F(DU);
var AXF=0.0;var AXG=null;function Zy(){AXF=$rt_globals.NaN;AXG=E($rt_doublecls());}
var Lq=F();
var AXH=null;var AXI=null;function AA5(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.mU=Fa(CV(d,Cc(0, 2147483648)),Em)?0:1;e=CV(d,Cc(4294967295, 1048575));f=EC(Gl(d,52))&2047;if(Fa(e,Em)&&!f){c.kQ=Em;c.jI=0;return;}g=0;if(f)e=ASI(e,Cc(0, 1048576));else{e=Fn(e,1);while(Fa(CV(e,Cc(0, 1048576)),Em)){e=Fn(e,1);f=f+(-1)|0;g=g+1|0;}}h=AB0(AXI,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AXI.data[h]|0)|0;j=Rl(e,AXH.data[h],i);if(Z1(j,Cc(2808348672, 232830643))){h=h+1|0;i=12+(f-AXI.data[h]|0)|0;j=Rl(e,AXH.data[h],
i);}k=D5(AXH.data[h],(63-i|0)-g|0);l=Gl(Cq(k,Bc(1)),1);m=Gl(k,1);if(Fa(e,Cc(0, 1048576)))m=Gl(m,2);n=Bc(10);while(Pw(n,m)){n=BQ(n,Bc(10));}if(Z1(MM(j,n),Dp(m,Bc(2))))n=Dp(n,Bc(10));o=Bc(1);while(Pw(o,l)){o=BQ(o,Bc(10));}if(AHF(Kn(o,MM(j,o)),Dp(l,Bc(2))))o=Dp(o,Bc(10));f=AS3(n,o);e=f>0?BQ(Dp(j,n),n):f<0?Cq(BQ(Dp(j,o),o),o):BQ(Dp(Cq(j,Dp(o,Bc(2))),o),o);if(Z1(e,Cc(2808348672, 232830643))){h=h+1|0;e=Dp(e,Bc(10));}else if(AHY(e,Cc(1569325056, 23283064))){h=h+(-1)|0;e=BQ(e,Bc(10));}c.kQ=e;c.jI=h-330|0;}
function Rl(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CV(b,Bc(65535));f=CV(D5(b,16),Bc(65535));g=CV(D5(b,32),Bc(65535));h=CV(D5(b,48),Bc(65535));i=CV(c,Bc(65535));j=CV(D5(c,16),Bc(65535));k=CV(D5(c,32),Bc(65535));l=CV(D5(c,48),Bc(65535));m=Cq(Cq(BQ(k,e),BQ(j,f)),BQ(i,g));n=Cq(Cq(Cq(BQ(l,e),BQ(k,f)),BQ(j,g)),BQ(i,h));o=Cq(Cq(Fn(BQ(l,h),32+d|0),Fn(Cq(BQ(l,g),BQ(k,h)),16+d|0)),Fn(Cq(Cq(BQ(l,f),BQ(k,g)),BQ(j,h)),d));return Cq(d>16?Cq(o,Fn(n,d-16|0)):Cq(o,D5(n,16-d|0)),D5(m,32-d|0));}
function AAH(){var b,c,d,e,f,g,h,i,j,k;AXH=ATU(660);AXI=BC(660);b=Cc(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AXH.data;g=d+330|0;f[g]=FE(e,Bc(80));AXI.data[g]=c;e=FE(e,Bc(10));h=Nj(e,Bc(10));while(Pw(e,b)&&Fa(CV(e,Cc(0, 2147483648)),Em)){e=Fn(e,1);c=c+1|0;h=Fn(h,1);}e=Cq(e,Dp(h,Bc(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AHF(e,Cc(3435973836, 214748364))){e=Gl(e,1);j=j+1|0;d=d+(-1)|0;}k=BQ(e,Bc(10));b=j<=0?k:Cq(k,Gl(BQ(CV(b,Bc((1<<j)-1|0)),Bc(10)),j));f=AXH.data;g=(330-i|0)-1|0;f[g]=FE(b,
Bc(80));AXI.data[g]=d;i=i+1|0;}}
function MJ(){C.call(this);this.sf=null;}
function ARW(a,b){var c,d;c=a.sf;d=new Bo;Bl(d,$rt_str(b.message));c.l(d);}
function TY(){var a=this;C.call(a);a.qN=0;a.l9=0;}
function FJ(a,b){return PB(a.qN,b,a.l9);}
function Nl(){var a=this;C.call(a);a.tT=null;a.tV=null;a.tU=null;}
function AQM(a,b,c,d){var e,f;b=a.tT;e=a.tV;f=a.tU;Ts(b,e);if(f!==null)d.l0.p();if(Ms(d)){if(d.jt===null)TE(b,AEa(d,e),d.h1,e);else PD(b,AEa(d,e),d.h1,e,d.jt);}}
var R2=F(DU);
var AXJ=null;function FE(b,c){return Long_udiv(b, c);}
function Nj(b,c){return Long_urem(b, c);}
function K_(b,c){return Long_ucompare(b, c);}
function AAF(){AXJ=E($rt_longcls());}
var Fh=F(Bo);
function Ny(){var a=this;C.call(a);a.ml=null;a.pD=null;a.s_=0;a.ur=0;}
function LE(a,b){return B6(a.pD)<b?0:1;}
var ADq=F();
function UC(b,c,d,e){var f,g;f=b.next();g=new Xm;g.mA=b;g.mz=c;g.mD=d;g.mB=e;f.then(Bj(g,"f"),Bj(d,"f"));}
function YX(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ADW(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(D8()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Xh;f.qi=b;f.qj=d;d.addEventListener("change",Bj(f,"handleEvent"));d.click();}
function Y6(b,c){var d;if(c.isFile?1:0)b.l(Yv(c.file()));else{c=c.createReader();d=new W8;d.to=b;c.readEntries(Bj(d,"f"));}}
function SV(){var a=this;C.call(a);a.bH=null;a.n9=null;a.hH=null;a.it=null;a.W=null;}
function IA(a){return a.bH.cg.iA;}
function N3(a){var b;b=new O2;b.pA=a;return b;}
function AEt(a){var b,c,d,e,f,g;b=Q(C$,4);c=b.data;d=a.W.ba.T.bg;e=a.bH;BG(e);f=new VQ;f.sM=e;c[0]=D4(B(384),d,f);e=a.W.ba.T.bg;f=a.bH;BG(f);g=new VU;g.ni=f;c[1]=D4(B(385),e,g);e=a.W.ba.T.bg;f=a.bH;BG(f);g=new VT;g.rE=f;c[2]=D4(B(386),e,g);e=a.W.ba.T.bg;f=a.bH;BG(f);g=new VR;g.ve=f;c[3]=D4(B(387),e,g);return FQ(b);}
function I_(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DK(a.W.b8);d=a.bH.e;e=Do(d);f=GV(d);g=a.bH.el;if(c===null)h=null;else{ASs();switch(AXK.data[c.cY]){case 1:h=KM(g,e,f);break a;case 2:h=VH(g,e,f);break a;default:}b=new Ep;V(b);K(b);}}c=a.bH;e=ET(c,b);f=HI(c.e.f,e.bs,e.bE);g=OB(c,f);if(h!==null){f=c.e;i=e.bs;j=e.bE;e=new Py;e.xF=c;e.xG=b;e.xH=g;h.r$(f,i,j,e,c.gL);}else{e=DN(c.e.f.d_,f);if(e!==null)Hv(c,e);else{e=DN(c.e.f.ev,f);if(e!==null&&!Eb(e))Vi(c.ik,b,e,c,g);else{g=c.ik;DK(g.b8);h=g.b8;k=Q(C$,1);l=k.data;d=new C$;BG(h);f
=new VK;f.nG=h;KZ(d,f,B(388),g.ba.T.pv);l[0]=d;F_(h,b,FQ(k),Nn(g,c));}}}}
var Zg=F(0);
function AJw(b){return 112<=b&&b<=123?1:0;}
var Xo=F();
function AO4(a,b){YX(b);}
function Xn(){var a=this;C.call(a);a.pI=null;a.pH=null;}
function AHA(a,b){var c,d,e,f,g,h,i;c=a.pI;d=a.pH;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new PM;i.nB=c;i.nA=g;h.then(Bj(i,"f"),Bj(d,"f"));e=e+1|0;}}
var WS=F();
function AI9(a,b){YX(b);}
function WR(){var a=this;C.call(a);a.oR=null;a.oS=null;}
function AJ6(a,b){var c,d,e,f,g;c=a.oR;d=a.oS;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=Q(Bv,1);g.data[0]=FA(b.name);UC(f,c,d,g);}
var YH=F();
function ABN(b,c){return ACG(null,b,c,0);}
function ACG(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=ADw(c);g=BP(f);h=BP(f);i=BP(f);j=Q(Cz,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<Cp(b)){l=BP(f);c[k]=B2(b,k);l=4*l|0;f.eM=f.eM+l|0;}else c[k]=DO(ABA(f,d,0));k=k+1|0;}m=YY(f,h);n=new HK;n.d_=Gv();n.ev=Gv();n.fg=Cm();if(!c.length){b=new BD;V(b);K(b);}n.C=j;n.fz=0;n.cs=0;n.c_=ATu(m);b=n.d_;e=0;while(e<i){K7(b,ES(BP(f),BP(f)),ES(BP(f),BP(f)));e=e+1|0;}b=n.d_;m=n.ev;o=new UF;SA(o,b);while(Jd(o)){Um(o);p=o.gU;q=p.du;p=p.dx;b=Cm();if(DN(m,p)===null)K7(m,p,b);B0(DN(m,
p),q);}if(m.j8===null){b=new O1;b.uJ=m;m.j8=b;}b=m.j8;q=new Q0;SA(q,b.uJ);while(Jd(q)){Um(q);b=q.gU.dx;m=AUH;c=Q(C,b.i);d=c.data;HF(b,c);Z_(c,m);e=0;g=d.length;while(e<g){m=d[e];I8(b,e);b.ci.data[e]=m;e=e+1|0;}}P$(f);return n;}
function ABk(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=ADw(c);g=BP(f);h=BP(f);i=BP(f);j=BP(f);k=Nu(b,g);l=Nu(b,h);m=(IF(B2(b,k.b),k.a)).data[0].o;e=(IF(B2(b,l.b),l.a)).data[1].o;n=0;o=i-1|0;while(n<i){p=ABA(f,d,g);if(!n)p=LD(m,p);if(n==o)p=LD(p,e);q=k.b+n|0;r=DO(p);b.C.data[q]=r;n=n+1|0;}r=YY(f,j);P$(f);if(!Eb(r)){s=NY(g,h,(-1));b=b.c_;f=ASx(s,r);r=Kx(b,b.cR,s);if(r!==null){f=f.cR.bx;if(r===b.cR)b.cR=Bp(f,0);else if(r.dI!==null){b=new NW;b.r1=r;J0(f,b);q=Qa(r.dI.bx,
r);El(r.dI.bx,q);b=r.dI.bx;O_(b,q);if(!Eb(f)){Ji(b,b.i+f.i|0);j=f.i;g=b.i;h=g-1|0;while(h>=q){c=b.ci.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.i=g+j|0;f=BU(f);g=0;while(g<j){c=b.ci.data;h=q+1|0;c[q]=BY(f);g=g+1|0;q=h;}b.ct=b.ct+1|0;}}}}}
function ABA(b,c,d){var e,f,g,h,i,j,k,l;e=BP(b);f=Q(B7,e);g=f.data;h=0;while(h<e){i=BP(b);j=BP(b);k=BP(b);l=BP(b);g[h]=DC(Ht(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function YY(b,c){var d,e;d=Cm();e=0;while(e<c){B0(d,NY(BP(b),BP(b),BP(b)));e=e+1|0;}return d;}
var WZ=F(0);
var AWe=null;function YU(){AWe=null;}
function Xh(){var a=this;C.call(a);a.qi=null;a.qj=null;}
function AIZ(a,b){var c,d,e,f,g,h;b=a.qi;c=a.qj;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new ME;h.mu=b;h.mt=g;$rt_globals.setTimeout(Bj(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Yv(d.item(f));g=new Mo;g.rJ=b;g.rK=c;$rt_globals.setTimeout(Bj(g,"onTimer"),0);f=f+1|0;}}
function AAe(){var a=this;C.call(a);a.hY=null;a.jR=null;}
function ADM(){var a=this;C.call(a);a.x3=0;a.xO=0;a.si=0;a.kw=0;}
function Uu(){var a=this;C.call(a);a.m2=null;a.m1=null;}
function AJG(a){var b,c,d,e,f,g;b=a.m2;c=a.m1;if(C6(c.hY,b.e.fR)){c=c.jR;CB(b,c.kw,c.si,0);B4(b.r.bP,c.kw,c.si);B4(b.r.bF,c.xO,c.x3);}else{d=(Co(b.el.rj)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Ck(b);b=new Tv;b.tF=g;b.tE=c;BG(b);c=new PE;c.vc=b;$rt_globals.setTimeout(Bj(c,"onTimer"),0);}}}
function Uw(){var a=this;C.call(a);a.vg=null;a.vb=null;}
function AOw(a){Hv(a.vg,a.vb);}
function ACr(){var a=this;C.call(a);a.h_=null;a.eM=0;}
function ADw(a){var b=new ACr();AEP(b,a);return b;}
function AEP(a,b){a.h_=b;a.eM=0;}
function BP(a){var b,c;b=a.h_.data;c=a.eM;a.eM=c+1|0;return b[c];}
function P$(a){var b,c,d,e;if(a.eM!=a.h_.data.length){b=Iw();c=a.h_.data.length;d=a.eM;e=new M;O(e);G(T(G(T(G(e,B(389)),c),B(390)),d),B(391));Br(b,N(e));}}
var IZ=F(Fh);
var HT=F(Bo);
var LL=F(Bo);
function AAE(){C.call(this);this.Bc=null;}
function Sl(){var a=this;C.call(a);a.tq=null;a.tu=null;}
function AQ$(a){var b,c;b=a.tq;c=a.tu;FO(b.dY,c);}
function Q3(){C.call(this);this.sp=null;}
function AKr(a,b){HD(a.sp,b);}
function Sv(){var a=this;C.call(a);a.ol=null;a.ok=null;}
function AFQ(a){var b,c;b=a.ol;c=a.ok;FO(b.dY,c);T8(b);}
var Yp=F();
function RW(b,c){return b.data[c];}
function GY(){var a=this;C.call(a);a.eH=0;a.fe=0;a.kE=null;a.jq=0;a.gR=null;}
function AE_(a,b,c,d,e,f){var g=new GY();AKk(g,a,b,c,d,e,f);return g;}
function AKk(a,b,c,d,e,f,g){a.eH=b;a.fe=c;a.kE=BX(f,g);a.jq=d;a.gR=e;}
function ACB(){Ga.call(this);this.Cw=null;}
function O1(){EN.call(this);this.uJ=null;}
var WJ=F(Bx);
var Qg=F(0);
var Ns=F(0);
var LO=F();
function AAj(){var a=this;LO.call(a);a.Ey=null;a.GB=0;a.E9=0;a.CL=0;}
function Rw(){var a=this;C.call(a);a.nI=null;a.nH=null;}
function AGr(a){var b,c;b=a.nI;c=a.nH;UX();I_(b,c,AXL);}
function Rv(){var a=this;C.call(a);a.oU=null;a.oW=null;}
function AER(a){var b,c;b=a.oU;c=a.oW;UX();I_(b,c,AXM);}
function Ru(){var a=this;C.call(a);a.uZ=null;a.u0=null;}
function AK6(a){I_(a.uZ,a.u0,null);}
function Rt(){var a=this;C.call(a);a.m0=null;a.m3=null;}
function APL(a){var b,c,d,e,f,g,h;b=a.m0;c=a.m3;d=Do(b.bH.e);e=GV(b.bH.e);d=Nk(b.bH.el,d,e);DK(b.W.b8);b=b.bH;e=ET(b,c);if(d!==null){f=b.e;g=e.bs;h=e.bE;e=new Qd;e.wT=b;e.wS=c;d.Hz(f,g,h,1,e,b.gL);}}
function Pn(){C.call(this);this.p3=null;}
function AO7(a){var b;b=a.p3;DK(b.W.b8);GA(b.bH,N3(b),0);}
function Pp(){C.call(this);this.tt=null;}
function AJ_(a){var b;b=a.tt;DK(b.W.b8);GA(b.bH,N3(b),1);}
function Pq(){C.call(this);this.sr=null;}
function AGU(a){var b,c,d;b=a.sr;DK(b.W.b8);c=IA(b);b=b.bH;BG(b);d=new S0;d.su=b;QM(c,d,YS(B(392)));}
var Xp=F(0);
var AWa=null;function YD(){AWa=new Pj;}
function Wc(){C.call(this);this.sG=null;}
function AFN(a){var b,c,d;b=a.sG;DK(b.W.b8);c=IA(b);b=b.bH;BG(b);d=new Q9;d.qy=b;LM(c,d);}
function UH(){C.call(this);this.sQ=null;}
function AJR(a,b,c){var d,e;c=a.sQ;d=c.e.f;e=b.fp;b=c.eI;Xe(d.C.data[e],0,b);}
function Qp(){var a=this;C.call(a);a.ow=null;a.oz=0;a.oA=0;a.oB=null;a.oC=0;a.ox=0;}
function AJC(a,b){var c,d,e,f,g,h,i,j;c=a.ow;d=a.oz;e=a.oA;f=a.oB;g=a.oC;h=a.ox;i=Cv(c.bp,5.0);d=Z((c.bp.b7.b-d|0)-i|0,Bb((i-d|0)-c.S.q.b|0,b.h.b));j=Z((c.bp.b7.a-e|0)-i|0,Bb((i-e|0)-c.S.q.a|0,b.h.a));Bg(f,d+g|0,j+h|0);Fm(c,f,c.O.q);}
function XA(){var a=this;C.call(a);a.nW=null;a.nV=null;a.nT=null;a.nS=0;a.n0=0;a.nZ=0;a.nY=0;a.nX=0;a.n2=0;a.n1=0;a.r4=0;}
function AK5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.nW;d=a.nV;e=a.nT;f=a.nS;g=a.n0;h=a.nZ;i=a.nY;j=a.nX;k=a.n2;l=a.n1;m=a.r4;n=Cv(c.bp,5.0);o=c.O.iN();CA(d,c.O.q);CA(e,c.O.E);switch(f){case -1:f=Z(h+(b.h.b-g|0)|0,c.bp.b7.b-n|0);g=o.b;h=h+i|0;f=Bb(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Bb((i+b.h.b|0)-g|0,Bb(o.b,n-c.S.E.b|0));}b:{switch(j){case -1:f=Bb(n,Z(l+(b.h.a-k|0)|0,(c.bp.b7.a+c.S.q.a|0)-n|0));g=o.a;h=l+m|0;f=Bb(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Bb((m+b.h.a|0)-k|0,o.a);}Fm(c,e,d);}
function Vl(){var a=this;C.call(a);a.u6=null;a.u7=0.0;}
function JN(a,b){return KH(a.u6,b,a.u7*2.0+0.875);}
function SO(){C.call(this);this.nN=null;}
function AKG(a){AD3(a.nN);}
function SP(){C.call(this);this.ri=null;}
function ALW(a){LC(a.ri);}
function SN(){C.call(this);this.u8=null;}
function ANg(a){ADv(a.u8);}
function N9(){C.call(this);this.rI=null;}
function AJA(a){a.rI.uo();}
function N8(){C.call(this);this.qv=null;}
function APV(a){a.qv.uQ();}
function Vf(){C.call(this);this.q6=null;}
function AHp(a){var b,c,d,e,f,g,h,i;b=a.q6;c=(b.n9.dj()).data;d=Q(C$,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new Yh;i.pz=b;i.py=h;e[f]=ABU(i,h,b.W.ba.T.bg);f=f+1|0;}return d;}
function VQ(){C.call(this);this.sM=null;}
function ANP(a){var b,c,d,e,f;b=a.sM.e.f;c=b.cs;d=new M;O(d);T(G(d,B(393)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.fz;d=new M;O(d);T(G(d,B(394)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.c_;e=FS(EE(b));Sc(d,0,d.cR,e);b=Bu();f=b.j1;f.data[0]=10;NU(b,f,0,1);}
function VU(){C.call(this);this.ni=null;}
function AKO(a){SJ(a.ni);}
function VT(){C.call(this);this.rE=null;}
function AFF(a){WO(a.rE);}
function VR(){C.call(this);this.ve=null;}
function AHx(a){J3(a.ve);}
function Xk(){C.call(this);this.oL=null;}
function AGW(a,b,c){FR(B2(a.oL.e.f,b.fp),0,I(c));}
function PM(){var a=this;C.call(a);a.nB=null;a.nA=null;}
function AHO(a,b){a.nB.l(AB3(a.nA,b));}
var IR=F(0);
function ME(){var a=this;C.call(a);a.mu=null;a.mt=null;}
function AKa(a){Y6(a.mu,a.mt);}
function Mo(){var a=this;C.call(a);a.rJ=null;a.rK=null;}
function AEC(a){a.rJ.l(a.rK);}
var Pj=F();
function Xm(){var a=this;C.call(a);a.mA=null;a.mz=null;a.mD=null;a.mB=null;}
function AJr(a,b){var c,d,e,f,g,h,i;c=a.mA;d=a.mz;e=a.mD;f=a.mB;if(!(b.done?1:0)){UC(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Uj;c.oT=d;c.oV=g;c.oX=f;b.then(Bj(c,"f"),Bj(e,"f"));}else{h=f.data;c=g.values();b=FA(g.name);i=h.length;f=Dl(f,i+1|0);f.data[i]=b;UC(c,d,e,f);}}}
function GQ(){var a=this;C.call(a);a.h7=0;a.rP=0;a.hl=null;a.gU=null;a.o8=null;a.iU=null;}
function AXN(a){var b=new GQ();SA(b,a);return b;}
function SA(a,b){a.iU=b;a.rP=b.c4;a.hl=null;}
function Jd(a){var b,c;if(a.hl!==null)return 1;while(true){b=a.h7;c=a.iU.b6.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.h7=b+1|0;}return 0;}
function ZV(a){var b;if(a.rP==a.iU.c4)return;b=new IG;V(b);K(b);}
function Um(a){var b,c,d,e;ZV(a);if(!Jd(a)){b=new X5;V(b);K(b);}b=a.hl;if(b!==null){c=a.gU;if(c!==null)a.o8=c;a.gU=b;a.hl=b.cN;}else{d=a.iU.b6.data;e=a.h7;a.h7=e+1|0;b=d[e];a.gU=b;a.hl=b.cN;a.o8=null;}}
var UF=F(GQ);
var Q0=F(GQ);
function QY(){var a=this;C.call(a);a.g=null;a.dh=0;a.jP=null;a.mZ=0;a.f5=0;a.ex=0;a.br=0;a.kO=null;}
function JQ(a){return a.g.bJ;}
function XP(a,b,c,d){var e,f,g,h,i,j;e=Cm();f=a.dh;g=0;if(c!=f)a.dh=c;a:{switch(b){case -1073741784:h=new RL;c=a.br+1|0;a.br=c;Fl(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Pu;c=a.br+1|0;a.br=c;Fl(h,c);break a;case -33554392:h=new ST;c=a.br+1|0;a.br=c;Fl(h,c);break a;default:c=a.f5+1|0;a.f5=c;if(d!==null)h=ATD(c);else{h=new Fv;Fl(h,0);g=1;}c=a.f5;if(c<=(-1))break a;if(c>=10)break a;a.jP.data[c]=h;break a;}h=new XK;Fl(h,(-1));}while(true){if(EY(a.g)&&a.g.j==(-536870788))
{d=AQg(B9(a,2),B9(a,64));while(!Dj(a.g)&&EY(a.g)){i=a.g;j=i.j;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cu(d,Bf(i));i=a.g;if(i.bf!=(-536870788))continue;Bf(i);}i=KJ(a,d);i.M(h);}else if(a.g.bf==(-536870788)){i=GH(h);Bf(a.g);}else{i=OT(a,h);d=a.g;if(d.bf==(-536870788))Bf(d);}if(i!==null)B0(e,i);if(Dj(a.g))break;if(a.g.bf==(-536870871))break;}if(a.g.kb==(-536870788))B0(e,GH(h));if(a.dh!=f&&!g){a.dh=f;d=a.g;d.fN=f;d.j=d.bf;d.eq=d.eD;j=d.c7;d.u=j+1|0;d.gW=j;E1(d);}switch(b){case -1073741784:break;case -536870872:d
=new MC;Fw(d,e,h);return d;case -268435416:d=new Wd;Fw(d,e,h);return d;case -134217688:d=new Q1;Fw(d,e,h);return d;case -67108824:d=new TF;Fw(d,e,h);return d;case -33554392:d=new DP;Fw(d,e,h);return d;default:switch(e.i){case 0:break;case 1:return ATp(Bp(e,0),h);default:return AS2(e,h);}return GH(h);}d=new IX;Fw(d,e,h);return d;}
function AC0(a){var b,c,d,e,f,g,h;b=BC(4);c=(-1);d=(-1);if(!Dj(a.g)&&EY(a.g)){e=b.data;c=Bf(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BL(3);b=e.data;b[0]=c&65535;f=a.g;g=f.bf;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bf(f);f=a.g;g=f.bf;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bf(f);return APZ(e,3);}return APZ(e,2);}if(!B9(a,2))return ZU(b[0]);if(B9(a,64))return AN7(b[0]);return AGD(b[0]);}e=b.data;c=1;while(c<4&&!Dj(a.g)&&EY(a.g)){h=c+1|0;e[c]=Bf(a.g);c=h;}if(c==1){h=e[0];if(!(AXO.xs(h)==AXP?0:1))return XH(a,e[0]);}if
(!B9(a,2))return AUd(b,c);if(B9(a,64)){f=new Xl;NP(f,b,c);return f;}f=new TS;NP(f,b,c);return f;}
function OT(a,b){var c,d,e,f,g,h,i;if(EY(a.g)&&!JG(a.g)&&Kf(a.g.j)){if(B9(a,128)){c=AC0(a);if(!Dj(a.g)){d=a.g;e=d.bf;if(!(e==(-536870871)&&!(b instanceof Fv))&&e!=(-536870788)&&!EY(d))c=L3(a,b,c);}}else if(!NZ(a.g)&&!Vj(a.g)){f=new N0;O(f);while(!Dj(a.g)&&EY(a.g)&&!NZ(a.g)&&!Vj(a.g)){if(!(!JG(a.g)&&!a.g.j)&&!(!JG(a.g)&&Kf(a.g.j))){g=a.g.j;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bf(a.g);if(!LW(e))BA(f,e&65535);else Ii(f,Gm(e));}if(!B9(a,2)){c=new Rz;Dy(c);c.co
=N(f);e=f.N;c.bG=e;c.j6=AMr(e);c.kR=AMr(c.bG);h=0;while(h<(c.bG-1|0)){Q6(c.j6,L(c.co,h),(c.bG-h|0)-1|0);Q6(c.kR,L(c.co,(c.bG-h|0)-1|0),(c.bG-h|0)-1|0);h=h+1|0;}}else if(B9(a,64))c=AUb(f);else{c=new M_;Dy(c);c.gX=N(f);c.bG=f.N;}}else c=L3(a,b,Xj(a,b));}else{d=a.g;if(d.bf!=(-536870871))c=L3(a,b,Xj(a,b));else{if(b instanceof Fv)K(B8(B(31),d.bJ,NX(d)));c=GH(b);}}a:{if(!Dj(a.g)){e=a.g.bf;if(!(e==(-536870871)&&!(b instanceof Fv))&&e!=(-536870788)){f=OT(a,b);if(c instanceof C2&&!(c instanceof E2)&&!(c instanceof CP)
&&!(c instanceof Ex)){i=c;if(!f.bQ(i.I)){c=new Wt;ER(c,i.I,i.d,i.hi);c.I.M(c);}}if((f.hm()&65535)!=43)c.M(f);else c.M(f.I);break a;}}if(c===null)return null;c.M(b);}if((c.hm()&65535)!=43)return c;return c.I;}
function L3(a,b,c){var d,e,f,g,h;d=a.g;e=d.bf;if(c!==null&&!(c instanceof BV)){switch(e){case -2147483606:Bf(d);d=new Ye;Dd(d,c,b,e);Ma();c.M(AXQ);return d;case -2147483605:Bf(d);d=new Pm;Dd(d,c,b,(-2147483606));Ma();c.M(AXQ);return d;case -2147483585:Bf(d);d=new O3;Dd(d,c,b,(-536870849));Ma();c.M(AXQ);return d;case -2147483525:f=new M5;d=E$(d);g=a.ex+1|0;a.ex=g;I7(f,d,c,b,(-536870849),g);Ma();c.M(AXQ);return f;case -1073741782:case -1073741781:Bf(d);d=new Rp;Dd(d,c,b,e);c.M(d);return d;case -1073741761:Bf(d);d
=new Qb;Dd(d,c,b,(-536870849));c.M(b);return d;case -1073741701:h=new U0;d=E$(d);e=a.ex+1|0;a.ex=e;I7(h,d,c,b,(-536870849),e);c.M(h);return h;case -536870870:case -536870869:Bf(d);if(c.hm()!=(-2147483602)){d=new CP;Dd(d,c,b,e);}else if(B9(a,32)){d=new Rr;Dd(d,c,b,e);}else{d=new N$;f=O6(a.dh);Dd(d,c,b,e);d.ka=f;}c.M(d);return d;case -536870849:Bf(d);d=new FN;Dd(d,c,b,(-536870849));c.M(b);return d;case -536870789:h=new E_;d=E$(d);e=a.ex+1|0;a.ex=e;I7(h,d,c,b,(-536870849),e);c.M(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bf(d);d=new Yf;ER(d,f,b,e);f.d=d;return d;case -2147483585:Bf(d);c=new Wo;ER(c,f,b,(-2147483585));return c;case -2147483525:c=new OR;R_(c,E$(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bf(d);d=new P7;ER(d,f,b,e);f.d=d;return d;case -1073741761:Bf(d);c=new T7;ER(c,f,b,(-1073741761));return c;case -1073741701:c=new Q2;R_(c,E$(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bf(d);d=ATw(f,b,e);f.d=d;return d;case -536870849:Bf(d);c
=new Ex;ER(c,f,b,(-536870849));return c;case -536870789:return ASF(E$(d),f,b,(-536870789));default:}return c;}
function Xj(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fv;while(true){a:{e=a.g;f=e.bf;if((f&(-2147418113))==(-2147483608)){Bf(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dh=g;else{if(f!=(-1073741784))g=a.dh;c=XP(a,f,g,b);e=a.g;if(e.bf!=(-536870871))K(B8(B(31),e.bJ,e.c7));Bf(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bf(e);c
=APK(0);break a;case -2147483577:Bf(e);c=new N6;BM(c);break a;case -2147483558:Bf(e);c=new W6;h=a.br+1|0;a.br=h;ADn(c,h);break a;case -2147483550:Bf(e);c=APK(1);break a;case -2147483526:Bf(e);c=new WP;BM(c);break a;case -536870876:Bf(e);a.br=a.br+1|0;if(B9(a,8)){if(B9(a,1)){c=AST(a.br);break a;}c=ASa(a.br);break a;}if(B9(a,1)){c=AS8(a.br);break a;}c=ATH(a.br);break a;case -536870866:Bf(e);if(B9(a,32)){c=AT0();break a;}c=ATC(O6(a.dh));break a;case -536870821:Bf(e);i=0;c=a.g;if(c.bf==(-536870818)){i=1;Bf(c);}c
=KJ(a,F0(a,i));c.M(b);e=a.g;if(e.bf!=(-536870819))K(B8(B(31),e.bJ,e.c7));OA(e,1);Bf(a.g);break a;case -536870818:Bf(e);a.br=a.br+1|0;if(!B9(a,8)){c=new Kl;BM(c);break a;}c=new Nf;e=O6(a.dh);BM(c);c.qG=e;break a;case 0:j=e.eD;if(j!==null)c=KJ(a,j);else{if(Dj(e)){c=GH(b);break a;}c=ZU(f&65535);}Bf(a.g);break a;default:break b;}Bf(e);c=new Kl;BM(c);break a;}h=(f&2147483647)-48|0;if(a.f5<h)K(B8(B(31),Fi(e),NX(a.g)));Bf(e);a.br=a.br+1|0;c=!B9(a,2)?ASh(h,a.br):B9(a,64)?ASU(h,a.br):AT$(h,a.br);a.jP.data[h].jN=1;a.mZ
=1;break a;}if(f>=0&&!GJ(e)){c=XH(a,f);Bf(a.g);}else if(f==(-536870788))c=GH(b);else{if(f!=(-536870871)){b=new IL;c=!GJ(a.g)?W5(f&65535):a.g.eD.cr();e=a.g;Jg(b,c,e.bJ,e.c7);K(b);}if(d){b=new IL;e=a.g;Jg(b,B(31),e.bJ,e.c7);K(b);}c=GH(b);}}}if(f!=(-16777176))break;}return c;}
function F0(a,b){var c,d,e,f,g,h,i,j,$$je;c=AQg(B9(a,2),B9(a,64));Er(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Dj(a.g))break a;h=a.g;b=h.bf;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cu(c,d);d=Bf(a.g);h=a.g;if(h.bf!=(-536870874)){d=38;break d;}if(h.j==(-536870821)){Bf(h);e=1;d=(-1);break d;}Bf(h);if(g){c=F0(a,0);break d;}if(a.g.bf==(-536870819))break d;WV(c,F0(a,0));break d;case -536870867:if(!g){b=h.j;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bf(h);h=a.g;i=h.bf;if(GJ(h))break c;if
(i<0){j=a.g.j;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Kf(i))break e;i=i&65535;break e;}catch($$e){$$je=Ef($$e);if($$je instanceof D1){break b;}else{throw $$e;}}}try{BS(c,d,i);}catch($$e){$$je=Ef($$e);if($$je instanceof D1){break b;}else{throw $$e;}}Bf(a.g);d=(-1);break d;}}if(d>=0)Cu(c,d);d=45;Bf(a.g);break d;case -536870821:if(d>=0){Cu(c,d);d=(-1);}Bf(a.g);j=0;h=a.g;if(h.bf==(-536870818)){Bf(h);j=1;}if(!e)Ys(c,F0(a,j));else WV(c,F0(a,j));e=0;Bf(a.g);break d;case -536870819:if(d>=0)Cu(c,
d);d=93;Bf(a.g);break d;case -536870818:if(d>=0)Cu(c,d);d=94;Bf(a.g);break d;case 0:if(d>=0)Cu(c,d);h=a.g.eD;if(h===null)d=0;else{AEm(c,h);d=(-1);}Bf(a.g);break d;default:}if(d>=0)Cu(c,d);d=Bf(a.g);}g=0;}K(B8(B(31),JQ(a),a.g.c7));}K(B8(B(31),JQ(a),a.g.c7));}if(!f){if(d>=0)Cu(c,d);return c;}K(B8(B(31),JQ(a),a.g.c7-1|0));}
function XH(a,b){var c,d,e;c=LW(b);if(B9(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AGD(b&65535);}if(B9(a,64)&&b>128){if(c){d=new Mt;Dy(d);d.bG=2;d.p8=Gx(Gu(b));return d;}if(OJ(b))return AMy(b&65535);if(!Sx(b))return AN7(b&65535);return AJX(b&65535);}}if(!c){if(OJ(b))return AMy(b&65535);if(!Sx(b))return ZU(b&65535);return AJX(b&65535);}d=new DT;Dy(d);d.bG=2;d.fv=b;e=(Gm(b)).data;d.ji=e[0];d.hZ=e[1];return d;}
function KJ(a,b){var c,d,e;if(!ABJ(b)){if(!b.K){if(b.gF())return AJk(b);return APM(b);}if(!b.gF())return AKE(b);c=new I9;Up(c,b);return c;}c=YW(b);d=new MK;BM(d);d.oN=c;d.vp=c.be;if(!b.K){if(b.gF())return ACp(AJk(Hr(b)),d);return ACp(APM(Hr(b)),d);}if(!b.gF())return ACp(AKE(Hr(b)),d);c=new P3;e=new I9;Up(e,Hr(b));AD5(c,e,d);return c;}
function Hs(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B9(a,b){return (a.dh&b)!=b?0:1;}
function NW(){C.call(this);this.r1=null;}
function ARO(a,b){b.dI=a.r1.dI;}
var Gn=F(Cj);
var AXM=null;var AXL=null;var AXR=null;function UX(){UX=Bm(Gn);AHS();}
function AKh(a,b){var c=new Gn();ZO(c,a,b);return c;}
function ZO(a,b,c){UX();C_(a,b,c);}
function AHS(){var b;AXM=AKh(B(395),0);b=AKh(B(396),1);AXL=b;AXR=H(Gn,[AXM,b]);}
function S0(){C.call(this);this.su=null;}
function AKR(a,b){Db(a.su,b);}
function Bz(){var a=this;C.call(a);a.d=null;a.ce=0;a.n6=null;a.hi=0;}
var AUL=0;function BM(a){var b,c;b=new Ff;c=AUL;AUL=c+1|0;JV(b,c);a.n6=LZ(b);}
function KG(a,b){var c,d;c=new Ff;d=AUL;AUL=d+1|0;JV(c,d);a.n6=LZ(c);a.d=b;}
function HA(a,b,c,d){var e;e=d.v;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function HO(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AG7(a,b){a.hi=b;}
function AGh(a){return a.hi;}
function APc(a){return a.d;}
function AP8(a,b){a.d=b;}
function AP5(a,b){return 1;}
function AQY(a){return null;}
function I4(a){var b;a.ce=1;b=a.d;if(b!==null){if(!b.ce){b=b.e_();if(b!==null){a.d.ce=1;a.d=b;}a.d.d8();}else if(b instanceof Gq&&b.ea.jN)a.d=b.d;}}
function AEe(){AUL=1;}
var Uy=F();
var AXK=null;function ASs(){ASs=Bm(Uy);AFX();}
function AFX(){var b,c;UX();b=BC((AXR.eG()).data.length);c=b.data;AXK=b;c[AXM.cY]=1;c[AXL.cY]=2;}
function O2(){C.call(this);this.pA=null;}
function AHf(a,b){Uq(IA(a.pA),b,AWj,YS(B(397)));}
function V2(){C.call(this);this.tM=null;}
function AIW(a,b){var c,d;c=a.tM;d=b.he;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function Yh(){var a=this;C.call(a);a.pz=null;a.py=null;}
function AG2(a){var b,c;b=a.pz;c=a.py;b.hH.sy(c);}
function CN(){var a=this;Bz.call(a);a.jN=0;a.dq=0;}
var AXQ=null;function Ma(){Ma=Bm(CN);AIj();}
function ATD(a){var b=new CN();Fl(b,a);return b;}
function Fl(a,b){Ma();BM(a);a.dq=b;}
function AFM(a,b,c,d){var e,f;e=Iq(d,a.dq);Jx(d,a.dq,b);f=a.d.c(b,c,d);if(f<0)Jx(d,a.dq,e);return f;}
function ALH(a){return a.dq;}
function AF7(a,b){return 0;}
function AIj(){var b;b=new N1;BM(b);AXQ=b;}
function GE(){var a=this;C.call(a);a.bc=null;a.fN=0;a.eu=0;a.tB=0;a.kb=0;a.bf=0;a.j=0;a.rb=0;a.eD=null;a.eq=null;a.u=0;a.ht=0;a.c7=0;a.gW=0;a.bJ=null;}
var AXS=null;var AXO=null;var AXP=0;function OA(a,b){if(b>0&&b<3)a.eu=b;if(b==1){a.j=a.bf;a.eq=a.eD;a.u=a.gW;a.gW=a.c7;E1(a);}}
function GJ(a){return a.eD===null?0:1;}
function JG(a){return a.eq===null?0:1;}
function Bf(a){E1(a);return a.kb;}
function E$(a){var b;b=a.eD;E1(a);return b;}
function E1(a){var b,c,d,e,f,g,h,$$je;a.kb=a.bf;a.bf=a.j;a.eD=a.eq;a.c7=a.gW;a.gW=a.u;while(true){b=0;c=a.u>=a.bc.data.length?0:Lw(a);a.j=c;a.eq=null;if(a.eu==4){if(c!=92)return;c=a.u;d=a.bc.data;c=c>=d.length?0:d[BT(a)];a.j=c;switch(c){case 69:break;default:a.j=92;a.u=a.ht;return;}a.eu=a.tB;a.j=a.u>(a.bc.data.length-2|0)?0:Lw(a);}a:{c=a.j;if(c!=92){e=a.eu;if(e==1)switch(c){case 36:a.j=(-536870876);break a;case 40:if(a.bc.data[a.u]!=63){a.j=(-2147483608);break a;}BT(a);c=a.bc.data[a.u];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.j=(-134217688);BT(a);break b;default:K(B8(B(31),Fi(a),a.u));}a.j=(-67108824);BT(a);}else{switch(c){case 33:break;case 60:BT(a);c=a.bc.data[a.u];e=1;break b;case 61:a.j=(-536870872);BT(a);break b;case 62:a.j=(-33554392);BT(a);break b;default:f=AEf(a);a.j=f;if(f<256){a.fN=f;f=f<<16;a.j=f;a.j=(-1073741784)|f;break b;}f=f&255;a.j=f;a.fN=f;f=f<<16;a.j=f;a.j=(-16777176)|f;break b;}a.j=(-268435416);BT(a);}}if(!e)break;}break a;case 41:a.j=(-536870871);break a;case 42:case 43:case 63:e
=a.u;d=a.bc.data;switch(e>=d.length?42:d[e]){case 43:a.j=c|(-2147483648);BT(a);break a;case 63:a.j=c|(-1073741824);BT(a);break a;default:}a.j=c|(-536870912);break a;case 46:a.j=(-536870866);break a;case 91:a.j=(-536870821);OA(a,2);break a;case 93:if(e!=2)break a;a.j=(-536870819);break a;case 94:a.j=(-536870818);break a;case 123:a.eq=ADJ(a,c);break a;case 124:a.j=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.j=(-536870874);break a;case 45:a.j=(-536870867);break a;case 91:a.j=(-536870821);break a;case 93:a.j
=(-536870819);break a;case 94:a.j=(-536870818);break a;default:}}else{c=a.u>=(a.bc.data.length-2|0)?(-1):Lw(a);c:{a.j=c;switch(c){case -1:K(B8(B(31),Fi(a),a.u));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.j
=ACa(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eu!=1)break a;a.j=(-2147483648)|c;break a;case 65:a.j=(-2147483583);break a;case 66:a.j=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:K(B8(B(31),Fi(a),a.u));case 68:case 83:case 87:case 100:case 115:case 119:a.eq=R1(Ht(a.bc,
a.ht,1),0);a.j=0;break a;case 71:a.j=(-2147483577);break a;case 80:case 112:break c;case 81:a.tB=a.eu;a.eu=4;b=1;break a;case 90:a.j=(-2147483558);break a;case 97:a.j=7;break a;case 98:a.j=(-2147483550);break a;case 99:c=a.u;d=a.bc.data;if(c>=(d.length-2|0))K(B8(B(31),Fi(a),a.u));a.j=d[BT(a)]&31;break a;case 101:a.j=27;break a;case 102:a.j=12;break a;case 110:a.j=10;break a;case 114:a.j=13;break a;case 116:a.j=9;break a;case 117:a.j=Ps(a,4);break a;case 120:a.j=Ps(a,2);break a;case 122:a.j=(-2147483526);break a;default:}break a;}g
=ABW(a);h=0;if(a.j==80)h=1;try{a.eq=R1(g,h);}catch($$e){$$je=Ef($$e);if($$je instanceof Ja){K(B8(B(31),Fi(a),a.u));}else{throw $$e;}}a.j=0;}}if(b)continue;else break;}}
function ABW(a){var b,c,d,e,f,g;b=new M;FU(b,10);c=a.u;d=a.bc;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Ht(d,BT(a),1);f=new M;O(f);G(G(f,B(398)),b);return N(f);}BT(a);c=0;a:{while(true){g=a.u;d=a.bc.data;if(g>=(d.length-2|0))break;c=d[BT(a)];if(c==125)break a;BA(b,c);}}if(c!=125)K(B8(B(31),a.bJ,a.u));}if(!b.N)K(B8(B(31),a.bJ,a.u));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(398)),f);return N(b);}b:{c:{if(I(f)>3){if(Kz(f,B(398)))break c;if(Kz(f,B(399)))break c;}break b;}f=Dk(f,2);}return f;}
function ADJ(a,b){var c,d,e,f,g,$$je;c=new M;FU(c,4);d=(-1);e=2147483647;a:{while(true){f=a.u;g=a.bc.data;if(f>=g.length)break a;b=g[BT(a)];if(b==125)break a;if(b==44&&d<0)try{d=Jt(DS(c),10);ADP(c,0,Y9(c));continue;}catch($$e){$$je=Ef($$e);if($$je instanceof De){break;}else{throw $$e;}}BA(c,b&65535);}K(B8(B(31),a.bJ,a.u));}if(b!=125)K(B8(B(31),a.bJ,a.u));if(c.N>0)b:{try{e=Jt(DS(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Ef($$e);if($$je instanceof De){}else{throw $$e;}}K(B8(B(31),a.bJ,a.u));}else if
(d<0)K(B8(B(31),a.bJ,a.u));if((d|e|(e-d|0))<0)K(B8(B(31),a.bJ,a.u));b=a.u;g=a.bc.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.j=(-2147483525);BT(a);break c;case 63:a.j=(-1073741701);BT(a);break c;default:}a.j=(-536870789);}c=new MV;c.es=d;c.en=e;return c;}
function Fi(a){return a.bJ;}
function Dj(a){return !a.bf&&!a.j&&a.u==a.rb&&!GJ(a)?1:0;}
function Kf(b){return b<0?0:1;}
function EY(a){return !Dj(a)&&!GJ(a)&&Kf(a.bf)?1:0;}
function NZ(a){var b;b=a.bf;return b<=56319&&b>=55296?1:0;}
function Vj(a){var b;b=a.bf;return b<=57343&&b>=56320?1:0;}
function Sx(b){return b<=56319&&b>=55296?1:0;}
function OJ(b){return b<=57343&&b>=56320?1:0;}
function Ps(a,b){var c,d,e,f,$$je;c=new M;FU(c,b);d=a.bc.data.length-2|0;e=0;while(true){f=BE(e,b);if(f>=0)break;if(a.u>=d)break;BA(c,a.bc.data[BT(a)]);e=e+1|0;}if(!f)a:{try{b=Jt(DS(c),16);}catch($$e){$$je=Ef($$e);if($$je instanceof De){break a;}else{throw $$e;}}return b;}K(B8(B(31),a.bJ,a.u));}
function ACa(a){var b,c,d,e,f,g;b=3;c=1;d=a.bc.data;e=d.length-2|0;f=UT(d[a.u],8);switch(f){case -1:break;default:if(f>3)b=2;BT(a);a:{while(true){if(c>=b)break a;g=a.u;if(g>=e)break a;g=UT(a.bc.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BT(a);c=c+1|0;}}return f;}K(B8(B(31),a.bJ,a.u));}
function AEf(a){var b,c,d,e;b=1;c=a.fN;a:while(true){d=a.u;e=a.bc.data;if(d>=e.length)K(B8(B(31),a.bJ,d));b:{c:{switch(e[d]){case 41:BT(a);return c|256;case 45:if(!b)K(B8(B(31),a.bJ,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BT(a);}BT(a);return c;}
function BT(a){var b,c,d,e,f;b=a.u;a.ht=b;if(!(a.fN&4))a.u=b+1|0;else{c=a.bc.data.length-2|0;a.u=b+1|0;a:while(true){d=a.u;if(d<c&&QZ(a.bc.data[d])){a.u=a.u+1|0;continue;}d=a.u;if(d>=c)break;e=a.bc.data;if(e[d]!=35)break;a.u=d+1|0;while(true){f=a.u;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.u=f+1|0;}}}return a.ht;}
function ADA(b){return AXS.Ck(b);}
function Lw(a){var b,c,d,e;b=a.bc.data[BT(a)];if(CD(b)){c=a.ht+1|0;d=a.bc.data;if(c<d.length){e=d[c];if(C4(e)){BT(a);return Es(b,e);}}}return b;}
function NX(a){return a.c7;}
function IL(){var a=this;BD.call(a);a.w_=null;a.wK=null;a.pU=0;}
function B8(a,b,c){var d=new IL();Jg(d,a,b,c);return d;}
function Jg(a,b,c,d){V(a);a.pU=(-1);a.w_=b;a.wK=c;a.pU=d;}
function W8(){C.call(this);this.to=null;}
function ANv(a,b){var c,d;c=a.to;d=0;while(d<b.length){Y6(c,b[d]);d=d+1|0;}}
var ABQ=F(0);
function Uj(){var a=this;C.call(a);a.oT=null;a.oV=null;a.oX=null;}
function AM9(a,b){a.oT.l(ASb(a.oV,b,a.oX));}
var RL=F(CN);
function AFk(a,b,c,d){var e;e=a.dq;BH(d,e,b-Dm(d,e)|0);return a.d.c(b,c,d);}
function AOG(a,b){return 0;}
var XK=F(CN);
function AG5(a,b,c,d){return b;}
var Pu=F(CN);
function AGe(a,b,c,d){if(Dm(d,a.dq)!=b)b=(-1);return b;}
function ST(){CN.call(this);this.mN=0;}
function AFp(a,b,c,d){var e;e=a.dq;BH(d,e,b-Dm(d,e)|0);a.mN=b;return b;}
function ANh(a,b){return 0;}
var Fv=F(CN);
function AQn(a,b,c,d){if(d.i8!=1&&b!=d.v)return (-1);d.iu=1;Jx(d,0,b);return b;}
function BV(){Bz.call(this);this.bG=0;}
function Dy(a){BM(a);a.bG=1;}
function ARo(a,b,c,d){var e;if((b+a.bW()|0)>d.v){d.de=1;return (-1);}e=a.bq(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function APA(a){return a.bG;}
function AKi(a,b){return 1;}
var ADl=F(BV);
function GH(a){var b=new ADl();ALQ(b,a);return b;}
function ALQ(a,b){KG(a,b);a.bG=1;a.hi=1;a.bG=0;}
function AO6(a,b,c){return 0;}
function AIq(a,b,c,d){var e,f,g;e=d.v;f=d.cF;while(true){g=BE(b,e);if(g>0)return (-1);if(g<0&&C4(L(c,b))&&b>f&&CD(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AGT(a,b,c,d,e){var f,g;f=e.v;g=e.cF;while(true){if(c<b)return (-1);if(c<f&&C4(L(d,c))&&c>g&&CD(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AFn(a,b){return 0;}
function BR(){var a=this;Bz.call(a);a.by=null;a.ea=null;a.X=0;}
function AS2(a,b){var c=new BR();Fw(c,a,b);return c;}
function Fw(a,b,c){BM(a);a.by=b;a.ea=c;a.X=c.dq;}
function AI6(a,b,c,d){var e,f,g,h;if(a.by===null)return (-1);e=Fz(d,a.X);Dx(d,a.X,b);f=a.by.i;g=0;while(true){if(g>=f){Dx(d,a.X,e);return (-1);}h=(Bp(a.by,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ANa(a,b){a.ea.d=b;}
function AK7(a,b){var c;a:{c=a.by;if(c!==null){c=BU(c);while(true){if(!B5(c))break a;if(!(BY(c)).bQ(b))continue;else return 1;}}}return 0;}
function ANT(a,b){return Iq(b,a.X)>=0&&Fz(b,a.X)==Iq(b,a.X)?0:1;}
function AGQ(a){var b,c,d,e;a.ce=1;b=a.ea;if(b!==null&&!b.ce)I4(b);a:{b=a.by;if(b!==null){c=b.i;d=0;while(true){if(d>=c)break a;b=Bp(a.by,d);e=b.e_();if(e===null)e=b;else{b.ce=1;El(a.by,d);Ro(a.by,d,e);}if(!e.ce)e.d8();d=d+1|0;}}}if(a.d!==null)I4(a);}
var IX=F(BR);
function AMU(a,b,c,d){var e,f,g,h;e=Dm(d,a.X);BH(d,a.X,b);f=a.by.i;g=0;while(true){if(g>=f){BH(d,a.X,e);return (-1);}h=(Bp(a.by,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AOh(a,b){return !Dm(b,a.X)?0:1;}
var DP=F(IX);
function AHy(a,b,c,d){var e,f,g;e=Dm(d,a.X);BH(d,a.X,b);f=a.by.i;g=0;while(g<f){if((Bp(a.by,g)).c(b,c,d)>=0)return a.d.c(a.ea.mN,c,d);g=g+1|0;}BH(d,a.X,e);return (-1);}
function AN0(a,b){a.d=b;}
var MC=F(DP);
function AM4(a,b,c,d){var e,f;e=a.by.i;f=0;while(f<e){if((Bp(a.by,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AQb(a,b){return 0;}
var Wd=F(DP);
function AF2(a,b,c,d){var e,f;e=a.by.i;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bp(a.by,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function APF(a,b){return 0;}
var Q1=F(DP);
function AGK(a,b,c,d){var e,f,g,h;e=a.by.i;f=d.iB?0:d.cF;a:{g=a.d.c(b,c,d);if(g>=0){BH(d,a.X,b);h=0;while(true){if(h>=e)break a;if((Bp(a.by,h)).cm(f,b,c,d)>=0){BH(d,a.X,(-1));return g;}h=h+1|0;}}}return (-1);}
function ARS(a,b){return 0;}
var TF=F(DP);
function AES(a,b,c,d){var e,f;e=a.by.i;BH(d,a.X,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bp(a.by,f)).cm(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AOv(a,b){return 0;}
function Gq(){BR.call(this);this.cS=null;}
function ATp(a,b){var c=new Gq();ZF(c,a,b);return c;}
function ZF(a,b,c){BM(a);a.cS=b;a.ea=c;a.X=c.dq;}
function AFd(a,b,c,d){var e,f;e=Fz(d,a.X);Dx(d,a.X,b);f=a.cS.c(b,c,d);if(f>=0)return f;Dx(d,a.X,e);return (-1);}
function ALq(a,b,c,d){var e;e=a.cS.ch(b,c,d);if(e>=0)Dx(d,a.X,e);return e;}
function AOM(a,b,c,d,e){var f;f=a.cS.cm(b,c,d,e);if(f>=0)Dx(e,a.X,f);return f;}
function AK2(a,b){return a.cS.bQ(b);}
function ANe(a){var b;b=new MZ;ZF(b,a.cS,a.ea);a.d=b;return b;}
function AQ1(a){var b;a.ce=1;b=a.ea;if(b!==null&&!b.ce)I4(b);b=a.cS;if(b!==null&&!b.ce){b=b.e_();if(b!==null){a.cS.ce=1;a.cS=b;}a.cS.d8();}}
var GG=F();
function U(){var a=this;GG.call(a);a.be=0;a.cb=0;a.J=null;a.jc=null;a.jG=null;a.K=0;}
var AXT=null;function Ou(){Ou=Bm(U);AHh();}
function Bn(a){var b;Ou();b=new W4;b.z=BC(64);a.J=b;}
function AF4(a){return null;}
function AFz(a){return a.J;}
function ABJ(a){var b,c,d,e,f;if(!a.cb)b=G$(a.J,0)>=2048?0:1;else{a:{c=a.J;b=0;d=c.bo;if(b<d){e=c.z.data;f=(e[0]^(-1))>>>0|0;if(f)b=Ih(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Ih(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AJj(a){return a.K;}
function APu(a){return a;}
function YW(a){var b,c;if(a.jG===null){b=a.eC();c=new Wr;c.xz=a;c.nf=b;Bn(c);a.jG=c;Er(c,a.cb);}return a.jG;}
function Hr(a){var b,c;if(a.jc===null){b=a.eC();c=new Wp;c.xc=a;c.s5=b;c.tP=a;Bn(c);a.jc=c;Er(c,a.be);a.jc.K=a.K;}return a.jc;}
function AQX(a){return 0;}
function Er(a,b){var c;c=a.be;if(c^b){a.be=c?0:1;a.cb=a.cb?0:1;}if(!a.K)a.K=1;return a;}
function AIs(a){return a.be;}
function Kc(b,c){Ou();return b.k(c);}
function If(b,c){var d,e;Ou();if(b.db()!==null&&c.db()!==null){b=b.db();c=c.db();d=Z(b.z.data.length,c.z.data.length);e=0;a:{while(e<d){if(b.z.data[e]&c.z.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function R1(b,c){var d,e,f;Ou();d=0;while(true){AOt();e=AXU.data;if(d>=e.length){f=new Ja;Bl(f,B(31));f.xX=B(31);f.xC=b;K(f);}e=e[d].data;if(Bq(b,e[0]))break;d=d+1|0;}return ACR(e[1],c);}
function AHh(){var b;b=new G0;AOt();AXT=b;}
function Zv(){var a=this;U.call(a);a.kU=0;a.mM=0;a.f6=0;a.kv=0;a.dF=0;a.e6=0;a.F=null;a.bw=null;}
function Dn(){var a=new Zv();ARy(a);return a;}
function AQg(a,b){var c=new Zv();AG6(c,a,b);return c;}
function ARy(a){Bn(a);a.F=ARU();}
function AG6(a,b,c){Bn(a);a.F=ARU();a.kU=b;a.mM=c;}
function Cu(a,b){a:{if(a.kU){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dF){Mj(a.F,Hs(b&65535));break a;}Lr(a.F,Hs(b&65535));break a;}if(a.mM&&b>128){a.f6=1;b=Gx(Gu(b));}}}if(!(!Sx(b)&&!OJ(b))){if(a.kv)Mj(a.J,b-55296|0);else Lr(a.J,b-55296|0);}if(a.dF)Mj(a.F,b);else Lr(a.F,b);if(!a.K&&LW(b))a.K=1;return a;}
function AEm(a,b){var c,d,e;if(!a.K&&b.K)a.K=1;if(a.kv){if(!b.cb)FP(a.J,b.eC());else Da(a.J,b.eC());}else if(!b.cb)FI(a.J,b.eC());else{Fq(a.J,b.eC());Da(a.J,b.eC());a.cb=a.cb?0:1;a.kv=1;}if(!a.e6&&b.db()!==null){if(a.dF){if(!b.be)FP(a.F,b.db());else Da(a.F,b.db());}else if(!b.be)FI(a.F,b.db());else{Fq(a.F,b.db());Da(a.F,b.db());a.be=a.be?0:1;a.dF=1;}}else{c=a.be;d=a.bw;if(d!==null){if(!c){e=new On;e.vO=a;e.uj=c;e.tx=d;e.tm=b;Bn(e);a.bw=e;}else{e=new Oo;e.x5=a;e.qx=c;e.qc=d;e.pq=b;Bn(e);a.bw=e;}}else{if(c&&!a.dF
&&L0(a.F)){d=new Ok;d.wJ=a;d.ql=b;Bn(d);a.bw=d;}else if(!c){d=new Oi;d.ke=a;d.js=c;d.nU=b;Bn(d);a.bw=d;}else{d=new Oj;d.k6=a;d.jz=c;d.tr=b;Bn(d);a.bw=d;}a.e6=1;}}return a;}
function BS(a,b,c){var d,e,f,g,h;if(b>c){d=new BD;V(d);K(d);}a:{b:{if(!a.kU){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cu(a,b);b=b+1|0;}}if(!a.dF)HV(a.F,b,c+1|0);else{d=a.F;c=c+1|0;if(b>c){d=new Bx;V(d);K(d);}e=d.bo;if(b<e){f=Z(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.z.data;h[g]=h[g]&(Ia(d,b)|HG(d,f));}else{h=d.z.data;h[g]=h[g]&Ia(d,b);e=g+1|0;while(e<c){d.z.data[e]=0;e=e+1|0;}if(f&31){h=d.z.data;h[c]=h[c]&HG(d,f);}}G4(d);}}}}return a;}
function Ys(a,b){var c,d,e;if(!a.K&&b.K)a.K=1;if(b.f6)a.f6=1;c=a.cb;if(!(c^b.cb)){if(!c)FI(a.J,b.J);else Da(a.J,b.J);}else if(c)FP(a.J,b.J);else{Fq(a.J,b.J);Da(a.J,b.J);a.cb=1;}if(!a.e6&&CT(b)!==null){c=a.be;if(!(c^b.be)){if(!c)FI(a.F,CT(b));else Da(a.F,CT(b));}else if(c)FP(a.F,CT(b));else{Fq(a.F,CT(b));Da(a.F,CT(b));a.be=1;}}else{c=a.be;d=a.bw;if(d!==null){if(!c){e=new Od;e.vu=a;e.sx=c;e.tp=d;e.t2=b;Bn(e);a.bw=e;}else{e=new OY;e.vY=a;e.tZ=c;e.mr=d;e.mP=b;Bn(e);a.bw=e;}}else{if(!a.dF&&L0(a.F)){if(!c){d=new Ol;d.x_
=a;d.o5=b;Bn(d);a.bw=d;}else{d=new Om;d.v3=a;d.tL=b;Bn(d);a.bw=d;}}else if(!c){d=new Op;d.sA=a;d.qP=b;d.qg=c;Bn(d);a.bw=d;}else{d=new Oq;d.re=a;d.rB=b;d.rR=c;Bn(d);a.bw=d;}a.e6=1;}}}
function WV(a,b){var c,d,e;if(!a.K&&b.K)a.K=1;if(b.f6)a.f6=1;c=a.cb;if(!(c^b.cb)){if(!c)Da(a.J,b.J);else FI(a.J,b.J);}else if(!c)FP(a.J,b.J);else{Fq(a.J,b.J);Da(a.J,b.J);a.cb=0;}if(!a.e6&&CT(b)!==null){c=a.be;if(!(c^b.be)){if(!c)Da(a.F,CT(b));else FI(a.F,CT(b));}else if(!c)FP(a.F,CT(b));else{Fq(a.F,CT(b));Da(a.F,CT(b));a.be=0;}}else{c=a.be;d=a.bw;if(d!==null){if(!c){e=new Of;e.vN=a;e.sF=c;e.nc=d;e.qt=b;Bn(e);a.bw=e;}else{e=new Og;e.v$=a;e.r7=c;e.mg=d;e.sw=b;Bn(e);a.bw=e;}}else{if(!a.dF&&L0(a.F)){if(!c){d=new Oa;d.v7
=a;d.oD=b;Bn(d);a.bw=d;}else{d=new Ob;d.x1=a;d.oI=b;Bn(d);a.bw=d;}}else if(!c){d=new Oh;d.u_=a;d.uf=b;d.rt=c;Bn(d);a.bw=d;}else{d=new N_;d.rr=a;d.sa=b;d.qz=c;Bn(d);a.bw=d;}a.e6=1;}}}
function CY(a,b){var c;c=a.bw;if(c!==null)return a.be^c.k(b);return a.be^Dv(a.F,b);}
function CT(a){if(!a.e6)return a.F;return null;}
function AIi(a){return a.J;}
function APT(a){var b,c;if(a.bw!==null)return a;b=CT(a);c=new Oe;c.vq=a;c.h2=b;Bn(c);return Er(c,a.be);}
function AMg(a){var b,c,d;b=new M;O(b);c=G$(a.F,0);while(c>=0){Ii(b,Gm(c));BA(b,124);c=G$(a.F,c+1|0);}d=b.N;if(d>0)Wf(b,d-1|0);return N(b);}
function AIv(a){return a.f6;}
function Ja(){var a=this;Bo.call(a);a.xX=null;a.xC=null;}
function D0(){Bz.call(this);this.I=null;}
function Dd(a,b,c,d){KG(a,c);a.I=b;a.hi=d;}
function ARx(a){return a.I;}
function AOQ(a,b){return !a.I.bQ(b)&&!a.d.bQ(b)?0:1;}
function AQi(a,b){return 1;}
function ALO(a){var b;a.ce=1;b=a.d;if(b!==null&&!b.ce){b=b.e_();if(b!==null){a.d.ce=1;a.d=b;}a.d.d8();}b=a.I;if(b!==null){if(!b.ce){b=b.e_();if(b!==null){a.I.ce=1;a.I=b;}a.I.d8();}else if(b instanceof Gq&&b.ea.jN)a.I=b.d;}}
function C2(){D0.call(this);this.Z=null;}
function ATw(a,b,c){var d=new C2();ER(d,a,b,c);return d;}
function ER(a,b,c,d){Dd(a,b,c,d);a.Z=b;}
function AEU(a,b,c,d){var e,f;e=0;a:{while((b+a.Z.bW()|0)<=d.v){f=a.Z.bq(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.Z.bW()|0;e=e+(-1)|0;}return f;}
function E2(){C2.call(this);this.i7=null;}
function ASF(a,b,c,d){var e=new E2();R_(e,a,b,c,d);return e;}
function R_(a,b,c,d,e){ER(a,c,d,e);a.i7=b;}
function AFP(a,b,c,d){var e,f,g,h,i;e=a.i7;f=e.es;g=e.en;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.Z.bW()|0)>d.v)break a;i=a.Z.bq(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.Z.bW()|0;h=h+(-1)|0;}return i;}if((b+a.Z.bW()|0)>d.v){d.de=1;return (-1);}i=a.Z.bq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CP=F(D0);
function AFc(a,b,c,d){var e;if(!a.I.H(d))return a.d.c(b,c,d);e=a.I.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var Ex=F(C2);
function ALw(a,b,c,d){var e;e=a.I.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function ARV(a,b){a.d=b;a.I.M(b);}
var Wt=F(C2);
function ARg(a,b,c,d){while((b+a.Z.bW()|0)<=d.v&&a.Z.bq(b,c)>0){b=b+a.Z.bW()|0;}return a.d.c(b,c,d);}
function AMd(a,b,c,d){var e,f,g;e=a.d.ch(b,c,d);if(e<0)return (-1);f=e-a.Z.bW()|0;while(f>=b&&a.Z.bq(f,c)>0){g=f-a.Z.bW()|0;e=f;f=g;}return e;}
function X(){var a=this;C.call(a);a.le=null;a.kc=null;}
function ACR(a,b){if(!b&&a.le===null)a.le=a.B();else if(b&&a.kc===null)a.kc=Er(a.B(),1);if(b)return a.kc;return a.le;}
var De=F(BD);
function MV(){var a=this;GG.call(a);a.es=0;a.en=0;}
function AMn(a){var b,c,d,e,f;b=a.es;c=a.en;d=c==2147483647?B(31):LZ(ADz(c));e=new M;O(e);BA(e,123);f=T(e,b);BA(f,44);BA(G(f,d),125);return N(e);}
var N1=F(Bz);
function AKK(a,b,c,d){return b;}
function AM_(a,b){return 0;}
function W4(){var a=this;C.call(a);a.z=null;a.bo=0;}
function ARU(){var a=new W4();AGu(a);return a;}
function AGu(a){a.z=BC(0);}
function Lr(a,b){var c,d;c=b/32|0;if(b>=a.bo){In(a,c+1|0);a.bo=b+1|0;}d=a.z.data;d[c]=d[c]|1<<(b%32|0);}
function HV(a,b,c){var d,e,f,g,h;d=BE(b,c);if(d>0){e=new Bx;V(e);K(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bo){In(a,f+1|0);a.bo=c;}if(d==f){g=a.z.data;g[d]=g[d]|HG(a,b)&Ia(a,c);}else{g=a.z.data;g[d]=g[d]|HG(a,b);h=d+1|0;while(h<f){a.z.data[h]=(-1);h=h+1|0;}if(c&31){g=a.z.data;g[f]=g[f]|Ia(a,c);}}}
function HG(a,b){return (-1)<<(b%32|0);}
function Ia(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Mj(a,b){var c,d;c=b/32|0;d=a.z.data;if(c<d.length){d[c]=d[c]&J$((-2),b%32|0);if(b==(a.bo-1|0))G4(a);}}
function Dv(a,b){var c,d;c=b/32|0;d=a.z.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function G$(a,b){var c,d,e,f;c=a.bo;if(b>=c)return (-1);d=b/32|0;e=a.z.data;f=e[d]>>>(b%32|0)|0;if(f)return Ih(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Ih(e[f])|0;f=f+1|0;}return (-1);}
function In(a,b){var c;c=a.z.data.length;if(c>=b)return;c=Bb((b*3|0)/2|0,(c*2|0)+1|0);a.z=L6(a.z,c);}
function G4(a){var b,c,d;b=(a.bo+31|0)/32|0;a.bo=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=NB(a.z.data[c]);if(d<32)break;c=c+(-1)|0;a.bo=a.bo-32|0;}a.bo=a.bo-d|0;}}
function Da(a,b){var c,d,e,f;c=Z(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]&b.z.data[d];d=d+1|0;}while(true){f=a.z.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bo=Z(a.bo,b.bo);G4(a);}
function FP(a,b){var c,d,e;c=Z(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]&(b.z.data[d]^(-1));d=d+1|0;}G4(a);}
function FI(a,b){var c,d,e;c=Bb(a.bo,b.bo);a.bo=c;In(a,(c+31|0)/32|0);c=Z(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]|b.z.data[d];d=d+1|0;}}
function Fq(a,b){var c,d,e;c=Bb(a.bo,b.bo);a.bo=c;In(a,(c+31|0)/32|0);c=Z(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]^b.z.data[d];d=d+1|0;}G4(a);}
function L0(a){return a.bo?0:1;}
function MK(){var a=this;BR.call(a);a.oN=null;a.vp=0;}
function P3(){var a=this;BR.call(a);a.lD=null;a.k9=null;}
function ACp(a,b){var c=new P3();AD5(c,a,b);return c;}
function AD5(a,b,c){BM(a);a.lD=b;a.k9=c;}
function AFK(a,b,c,d){var e,f,g,h,i;e=a.lD.c(b,c,d);if(e<0)a:{f=a.k9;g=d.cF;e=d.v;h=b+1|0;e=BE(h,e);if(e>0){d.de=1;e=(-1);}else{i=L(c,b);if(!f.oN.k(i))e=(-1);else{if(CD(i)){if(e<0&&C4(L(c,h))){e=(-1);break a;}}else if(C4(i)&&b>g&&CD(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AMQ(a,b){a.d=b;a.k9.d=b;a.lD.M(b);}
function AGj(a,b){return 1;}
function AF3(a,b){return 1;}
function Dz(){var a=this;BR.call(a);a.dz=null;a.wC=0;}
function AKE(a){var b=new Dz();Up(b,a);return b;}
function Up(a,b){BM(a);a.dz=b.iK();a.wC=b.be;}
function AH_(a,b,c,d){var e,f,g,h;e=d.v;if(b<e){f=b+1|0;g=L(c,b);if(a.k(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(Hi(g,f)&&a.k(Es(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AIJ(a,b){return a.dz.k(b);}
function AFE(a,b){if(b instanceof DT)return Kc(a.dz,b.fv);if(b instanceof Ej)return Kc(a.dz,b.c$);if(b instanceof Dz)return If(a.dz,b.dz);if(!(b instanceof Ed))return 1;return If(a.dz,b.eP);}
function AKy(a){return a.dz;}
function APo(a,b){a.d=b;}
function AIn(a,b){return 1;}
var I9=F(Dz);
function AKj(a,b){return a.dz.k(Gx(Gu(b)));}
function Zl(){var a=this;BV.call(a);a.pL=null;a.wp=0;}
function AJk(a){var b=new Zl();AMs(b,a);return b;}
function AMs(a,b){Dy(a);a.pL=b.iK();a.wp=b.be;}
function AKL(a,b,c){return !a.pL.k(EV(Ew(L(c,b))))?(-1):1;}
function Ed(){var a=this;BV.call(a);a.eP=null;a.wX=0;}
function APM(a){var b=new Ed();ANC(b,a);return b;}
function ANC(a,b){Dy(a);a.eP=b.iK();a.wX=b.be;}
function Ml(a,b,c){return !a.eP.k(L(c,b))?(-1):1;}
function ANc(a,b){if(b instanceof Ej)return Kc(a.eP,b.c$);if(b instanceof Ed)return If(a.eP,b.eP);if(!(b instanceof Dz)){if(!(b instanceof DT))return 1;return 0;}return If(a.eP,b.dz);}
function Oy(){var a=this;BR.call(a);a.gq=null;a.lr=null;a.i4=0;}
function APZ(a,b){var c=new Oy();AFf(c,a,b);return c;}
function AFf(a,b,c){BM(a);a.gq=b;a.i4=c;}
function ALv(a,b){a.d=b;}
function Qc(a){if(a.lr===null)a.lr=FS(a.gq);return a.lr;}
function AEI(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.v;f=BC(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?E4([k,l]):E4([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.i4;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gq.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.i4==3){k=f[0];m=a.gq.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.i4==2){b=f[0];m=a.gq.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AGa(a,b){return b instanceof Oy&&!Bq(Qc(b),Qc(a))?0:1;}
function APY(a,b){return 1;}
function Ej(){BV.call(this);this.c$=0;}
function ZU(a){var b=new Ej();ANG(b,a);return b;}
function ANG(a,b){Dy(a);a.c$=b;}
function AKu(a){return 1;}
function AJf(a,b,c){return a.c$!=L(c,b)?(-1):1;}
function AH6(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return HA(a,b,c,d);e=d.v;while(true){if(b>=e)return (-1);f=GC(c,a.c$,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AKA(a,b,c,d,e){var f;if(!(d instanceof Bv))return HO(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FY(d,a.c$,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function APP(a,b){if(b instanceof Ej)return b.c$!=a.c$?0:1;if(!(b instanceof Ed)){if(b instanceof Dz)return b.k(a.c$);if(!(b instanceof DT))return 1;return 0;}return Ml(b,0,W5(a.c$))<=0?0:1;}
function ADR(){BV.call(this);this.mb=0;}
function AN7(a){var b=new ADR();AMa(b,a);return b;}
function AMa(a,b){Dy(a);a.mb=EV(Ew(b));}
function AED(a,b,c){return a.mb!=EV(Ew(L(c,b)))?(-1):1;}
function Yu(){var a=this;BV.call(a);a.t6=0;a.m6=0;}
function AGD(a){var b=new Yu();AOq(b,a);return b;}
function AOq(a,b){Dy(a);a.t6=b;a.m6=Hs(b);}
function AE7(a,b,c){return a.t6!=L(c,b)&&a.m6!=L(c,b)?(-1):1;}
function Fc(){var a=this;BR.call(a);a.g_=0;a.j4=null;a.jw=null;a.jr=0;}
function AUd(a,b){var c=new Fc();NP(c,a,b);return c;}
function NP(a,b,c){BM(a);a.g_=1;a.jw=b;a.jr=c;}
function AQ0(a,b){a.d=b;}
function AMT(a,b,c,d){var e,f,g,h,i,j,k,l;e=BC(4);f=d.v;if(b>=f)return (-1);g=Kt(a,b,c,f);h=b+a.g_|0;i=ADA(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Eg(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Kt(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(ADA(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.g_|0;if(h>=f){b=k;break a;}g=Kt(a,h,c,f);b=k;}}}if(b!=a.jr)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.jw.data[g])break;g=g+1|0;}return (-1);}
function WU(a){var b,c;if(a.j4===null){b=new M;O(b);c=0;while(c<a.jr){Ii(b,Gm(a.jw.data[c]));c=c+1|0;}a.j4=N(b);}return a.j4;}
function Kt(a,b,c,d){var e,f,g;a.g_=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(Hi(e,f)){g=BL(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CD(g[0])&&C4(g[1])?Es(g[0],g[1]):g[0];a.g_=2;}}return e;}
function AKM(a,b){return b instanceof Fc&&!Bq(WU(b),WU(a))?0:1;}
function AN3(a,b){return 1;}
var Xl=F(Fc);
var TS=F(Fc);
var Ye=F(CP);
function AG$(a,b,c,d){var e;while(true){e=a.I.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var Pm=F(CP);
function AL3(a,b,c,d){var e;e=a.I.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.I.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FN=F(CP);
function APj(a,b,c,d){var e;if(!a.I.H(d))return a.d.c(b,c,d);e=a.I.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AQs(a,b){a.d=b;a.I.M(b);}
var O3=F(FN);
function AKx(a,b,c,d){var e;e=a.I.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AMo(a,b){a.d=b;}
function E_(){var a=this;CP.call(a);a.fJ=null;a.dg=0;}
function AXV(a,b,c,d,e){var f=new E_();I7(f,a,b,c,d,e);return f;}
function I7(a,b,c,d,e,f){Dd(a,c,d,e);a.fJ=b;a.dg=f;}
function ARL(a,b,c,d){var e,f;e=MR(d,a.dg);if(!a.I.H(d))return a.d.c(b,c,d);if(e>=a.fJ.en)return a.d.c(b,c,d);f=a.dg;e=e+1|0;Ea(d,f,e);f=a.I.c(b,c,d);if(f>=0){Ea(d,a.dg,0);return f;}f=a.dg;e=e+(-1)|0;Ea(d,f,e);if(e>=a.fJ.es)return a.d.c(b,c,d);Ea(d,a.dg,0);return (-1);}
var M5=F(E_);
function AJO(a,b,c,d){var e,f,g;e=0;f=a.fJ.en;a:{while(true){g=a.I.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fJ.es)return (-1);return a.d.c(b,c,d);}
var Rp=F(CP);
function AQ7(a,b,c,d){var e;if(!a.I.H(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.I.c(b,c,d);}
var Qb=F(FN);
function AGl(a,b,c,d){var e;if(!a.I.H(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.I.c(b,c,d);return e;}
var U0=F(E_);
function AFu(a,b,c,d){var e,f,g;e=MR(d,a.dg);if(!a.I.H(d))return a.d.c(b,c,d);f=a.fJ;if(e>=f.en){Ea(d,a.dg,0);return a.d.c(b,c,d);}if(e<f.es){Ea(d,a.dg,e+1|0);g=a.I.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){Ea(d,a.dg,0);return g;}Ea(d,a.dg,e+1|0);g=a.I.c(b,c,d);}return g;}
var Rr=F(D0);
function ARv(a,b,c,d){var e;e=d.v;if(e>b)return a.d.cm(b,e,c,d);return a.d.c(b,c,d);}
function APw(a,b,c,d){var e;e=d.v;if(a.d.cm(b,e,c,d)>=0)return b;return (-1);}
function N$(){D0.call(this);this.ka=null;}
function ANf(a,b,c,d){var e,f;e=d.v;f=U2(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cm(b,e,c,d);return a.d.c(b,c,d);}
function AEM(a,b,c,d){var e,f,g,h;e=d.v;f=a.d.ch(b,c,d);if(f<0)return (-1);g=U2(a,f,e,c);if(g>=0)e=g;g=Bb(f,a.d.cm(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.ka.hd(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function U2(a,b,c,d){while(true){if(b>=c)return (-1);if(a.ka.hd(L(d,b)))break;b=b+1|0;}return b;}
var EK=F();
var AXW=null;var AXX=null;function O6(b){var c;if(!(b&1)){c=AXX;if(c!==null)return c;c=new Vq;AXX=c;return c;}c=AXW;if(c!==null)return c;c=new Vp;AXW=c;return c;}
var Yf=F(C2);
function AFw(a,b,c,d){var e;a:{while(true){if((b+a.Z.bW()|0)>d.v)break a;e=a.Z.bq(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Wo=F(Ex);
function AL1(a,b,c,d){var e;if((b+a.Z.bW()|0)<=d.v){e=a.Z.bq(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var OR=F(E2);
function AOU(a,b,c,d){var e,f,g,h,i;e=a.i7;f=e.es;g=e.en;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.Z.bW()|0)>d.v)break a;i=a.Z.bq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.Z.bW()|0)>d.v){d.de=1;return (-1);}i=a.Z.bq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var P7=F(C2);
function AM8(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.Z.bW()|0)<=d.v){e=a.Z.bq(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var T7=F(Ex);
function AFD(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.I.c(b,c,d);}
var Q2=F(E2);
function AO$(a,b,c,d){var e,f,g,h,i,j;e=a.i7;f=e.es;g=e.en;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.Z.bW()|0)<=d.v){i=a.Z.bq(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.Z.bW()|0)>d.v){d.de=1;return (-1);}j=a.Z.bq(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Kl=F(Bz);
function AK4(a,b,c,d){if(b&&!(d.e7&&b==d.cF))return (-1);return a.d.c(b,c,d);}
function AJ5(a,b){return 0;}
function Z4(){Bz.call(this);this.ty=0;}
function APK(a){var b=new Z4();AKp(b,a);return b;}
function AKp(a,b){BM(a);a.ty=b;}
function AF1(a,b,c,d){var e,f,g;e=b<d.v?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.iB?0:d.cF;return (e!=32&&!Qf(a,e,b,g,c)?0:1)^(f!=32&&!Qf(a,f,b-1|0,g,c)?0:1)^a.ty?(-1):a.d.c(b,c,d);}
function AF$(a,b){return 0;}
function Qf(a,b,c,d,e){var f;if(!Jr(b)&&b!=95){a:{if(Ct(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(Jr(f))return 0;if(Ct(f)!=6)return 1;}}return 1;}return 0;}
var N6=F(Bz);
function AKn(a,b,c,d){if(b!=d.hj)return (-1);return a.d.c(b,c,d);}
function ARF(a,b){return 0;}
function W6(){Bz.call(this);this.fQ=0;}
function ATH(a){var b=new W6();ADn(b,a);return b;}
function ADn(a,b){BM(a);a.fQ=b;}
function ANN(a,b,c,d){var e,f,g;e=!d.e7?I(c):d.v;if(b>=e){BH(d,a.fQ,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BH(d,a.fQ,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BH(d,a.fQ,0);return a.d.c(b,c,d);}
function AGZ(a,b){var c;c=!Dm(b,a.fQ)?0:1;BH(b,a.fQ,(-1));return c;}
var WP=F(Bz);
function AMM(a,b,c,d){if(b<(d.iB?I(c):d.v))return (-1);d.de=1;d.xm=1;return a.d.c(b,c,d);}
function AEA(a,b){return 0;}
function Nf(){Bz.call(this);this.qG=null;}
function AGP(a,b,c,d){a:{if(b!=d.v){if(!b)break a;if(d.e7&&b==d.cF)break a;if(a.qG.r9(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AIY(a,b){return 0;}
var ADG=F(BR);
function AT0(){var a=new ADG();AMz(a);return a;}
function AMz(a){BM(a);}
function ARb(a,b,c,d){var e,f,g,h;e=d.v;f=b+1|0;if(f>e){d.de=1;return (-1);}g=L(c,b);if(CD(g)){h=b+2|0;if(h<=e&&Hi(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AGc(a,b){a.d=b;}
function AMt(a){return (-2147483602);}
function AGb(a,b){return 1;}
function Zt(){BR.call(this);this.kH=null;}
function ATC(a){var b=new Zt();AGX(b,a);return b;}
function AGX(a,b){BM(a);a.kH=b;}
function AMC(a,b,c,d){var e,f,g,h;e=d.v;f=b+1|0;if(f>e){d.de=1;return (-1);}g=L(c,b);if(CD(g)){b=b+2|0;if(b<=e){h=L(c,f);if(Hi(g,h))return a.kH.hd(Es(g,h))?(-1):a.d.c(b,c,d);}}return a.kH.hd(g)?(-1):a.d.c(f,c,d);}
function AOD(a,b){a.d=b;}
function AEx(a){return (-2147483602);}
function ARl(a,b){return 1;}
function ADx(){Bz.call(this);this.g0=0;}
function AS8(a){var b=new ADx();AIT(b,a);return b;}
function AIT(a,b){BM(a);a.g0=b;}
function AKQ(a,b,c,d){var e;e=!d.e7?I(c):d.v;if(b>=e){BH(d,a.g0,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BH(d,a.g0,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AIR(a,b){var c;c=!Dm(b,a.g0)?0:1;BH(b,a.g0,(-1));return c;}
function ABL(){Bz.call(this);this.g9=0;}
function AST(a){var b=new ABL();AJl(b,a);return b;}
function AJl(a,b){BM(a);a.g9=b;}
function AMK(a,b,c,d){if((!d.e7?I(c)-b|0:d.v-b|0)<=0){BH(d,a.g9,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BH(d,a.g9,1);return a.d.c(b+1|0,c,d);}
function AIG(a,b){var c;c=!Dm(b,a.g9)?0:1;BH(b,a.g9,(-1));return c;}
function Yr(){Bz.call(this);this.fl=0;}
function ASa(a){var b=new Yr();ARN(b,a);return b;}
function ARN(a,b){BM(a);a.fl=b;}
function AJT(a,b,c,d){var e,f,g;e=!d.e7?I(c)-b|0:d.v-b|0;if(!e){BH(d,a.fl,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BH(d,a.fl,0);return a.d.c(b,c,d);case 13:if(g!=10){BH(d,a.fl,0);return a.d.c(b,c,d);}BH(d,a.fl,0);return a.d.c(b,c,d);default:}return (-1);}
function AG4(a,b){var c;c=!Dm(b,a.fl)?0:1;BH(b,a.fl,(-1));return c;}
function G1(){var a=this;BR.call(a);a.mH=0;a.gn=0;}
function AT$(a,b){var c=new G1();OI(c,a,b);return c;}
function OI(a,b,c){BM(a);a.mH=b;a.gn=c;}
function AFy(a,b,c,d){var e,f,g,h;e=F6(a,d);if(e!==null&&(b+I(e)|0)<=d.v){f=0;while(true){if(f>=I(e)){BH(d,a.gn,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&Hs(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ANX(a,b){a.d=b;}
function F6(a,b){var c,d;c=a.mH;d=Fz(b,c);c=Iq(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.kJ)?B$(b.kJ,d,c):null;}
function AOi(a,b){var c;c=!Dm(b,a.gn)?0:1;BH(b,a.gn,(-1));return c;}
var ADC=F(G1);
function ASh(a,b){var c=new ADC();AQj(c,a,b);return c;}
function AQj(a,b,c){OI(a,b,c);}
function AG9(a,b,c,d){var e,f;e=F6(a,d);if(e!==null&&(b+I(e)|0)<=d.v){f=!Uo(c,e,b)?(-1):I(e);if(f<0)return (-1);BH(d,a.gn,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AP$(a,b,c,d){var e,f;e=F6(a,d);f=d.cF;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=Z3(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AFl(a,b,c,d,e){var f,g;f=F6(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Px(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ALU(a,b){return 1;}
var AAO=F(G1);
function ASU(a,b){var c=new AAO();AIQ(c,a,b);return c;}
function AIQ(a,b,c){OI(a,b,c);}
function ALk(a,b,c,d){var e,f;e=F6(a,d);if(e!==null&&(b+I(e)|0)<=d.v){f=0;while(true){if(f>=I(e)){BH(d,a.gn,I(e));return a.d.c(b+I(e)|0,c,d);}if(EV(Ew(L(e,f)))!=EV(Ew(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var N0=F(Ge);
function AIw(a,b,c,d,e){MW(a,b,c,d,e);return a;}
function AF5(a,b,c,d){Xa(a,b,c,d);return a;}
function AGt(a,b){Jw(a,b);}
function APz(a,b,c){Xt(a,b,c);return a;}
function Rz(){var a=this;BV.call(a);a.co=null;a.j6=null;a.kR=null;}
function AHv(a,b,c){return !Kj(a,c,b)?(-1):a.bG;}
function AFW(a,b,c,d){var e,f,g;e=d.v;while(true){if(b>e)return (-1);f=L(a.co,a.bG-1|0);a:{while(true){g=a.bG;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&Kj(a,c,b))break;b=b+SI(a.j6,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bG|0,c,d)>=0)break;b=b+1|0;}return b;}
function AIV(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.co,0);g=(I(d)-c|0)-a.bG|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&Kj(a,d,c))break;c=c-SI(a.kR,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bG|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AJs(a,b){var c;if(b instanceof Ej)return b.c$!=L(a.co,0)?0:1;if(b instanceof Ed)return Ml(b,0,B$(a.co,0,1))<=0?0:1;if(!(b instanceof Dz)){if(!(b instanceof DT))return 1;return I(a.co)>1&&b.fv==Es(L(a.co,0),L(a.co,1))?1:0;}a:{b:{b=b;if(!b.k(L(a.co,0))){if(I(a.co)<=1)break b;if(!b.k(Es(L(a.co,0),L(a.co,1))))break b;}c=1;break a;}c=0;}return c;}
function Kj(a,b,c){var d;d=0;while(d<a.bG){if(L(b,d+c|0)!=L(a.co,d))return 0;d=d+1|0;}return 1;}
function Yq(){BV.call(this);this.iF=null;}
function AUb(a){var b=new Yq();APR(b,a);return b;}
function APR(a,b){var c,d,e;Dy(a);c=new M;O(c);d=0;while(true){e=BE(d,b.N);if(e>=0){a.iF=N(c);a.bG=c.N;return;}if(d<0)break;if(e>=0)break;BA(c,EV(Ew(b.A.data[d])));d=d+1|0;}b=new Bx;V(b);K(b);}
function ALs(a,b,c){var d;d=0;while(true){if(d>=I(a.iF))return I(a.iF);if(L(a.iF,d)!=EV(Ew(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function M_(){BV.call(this);this.gX=null;}
function AOW(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.gX))return I(a.gX);e=L(a.gX,d);f=b+d|0;if(e!=L(c,f)&&Hs(L(a.gX,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var G0=F();
var AXY=null;var AXZ=null;var AXU=null;function AOt(){AOt=Bm(G0);AHR();}
function AHR(){AXY=ATR();AXZ=AS1();AXU=H($rt_arraycls(C),[H(C,[B(400),AT_()]),H(C,[B(401),AR9()]),H(C,[B(402),ATO()]),H(C,[B(403),ATV()]),H(C,[B(404),AXZ]),H(C,[B(405),AS_()]),H(C,[B(406),ASZ()]),H(C,[B(407),ASm()]),H(C,[B(408),ASg()]),H(C,[B(409),ASt()]),H(C,[B(410),ASH()]),H(C,[B(411),ASq()]),H(C,[B(412),ATv()]),H(C,[B(413),AR3()]),H(C,[B(414),ATS()]),H(C,[B(415),ASG()]),H(C,[B(416),AS9()]),H(C,[B(417),ASE()]),H(C,[B(418),AS$()]),H(C,[B(419),ASw()]),H(C,[B(420),ATZ()]),H(C,[B(421),ASz()]),H(C,[B(422),ATd()]),
H(C,[B(423),ATM()]),H(C,[B(424),ATI()]),H(C,[B(425),ATW()]),H(C,[B(426),ASv()]),H(C,[B(427),ATA()]),H(C,[B(428),AXY]),H(C,[B(429),ATi()]),H(C,[B(430),ASn()]),H(C,[B(431),AXY]),H(C,[B(432),AR0()]),H(C,[B(433),AXZ]),H(C,[B(434),ASO()]),H(C,[B(435),P(0,127)]),H(C,[B(436),P(128,255)]),H(C,[B(437),P(256,383)]),H(C,[B(438),P(384,591)]),H(C,[B(439),P(592,687)]),H(C,[B(440),P(688,767)]),H(C,[B(441),P(768,879)]),H(C,[B(442),P(880,1023)]),H(C,[B(443),P(1024,1279)]),H(C,[B(444),P(1280,1327)]),H(C,[B(445),P(1328,1423)]),
H(C,[B(446),P(1424,1535)]),H(C,[B(447),P(1536,1791)]),H(C,[B(448),P(1792,1871)]),H(C,[B(449),P(1872,1919)]),H(C,[B(450),P(1920,1983)]),H(C,[B(451),P(2304,2431)]),H(C,[B(452),P(2432,2559)]),H(C,[B(453),P(2560,2687)]),H(C,[B(454),P(2688,2815)]),H(C,[B(455),P(2816,2943)]),H(C,[B(456),P(2944,3071)]),H(C,[B(457),P(3072,3199)]),H(C,[B(458),P(3200,3327)]),H(C,[B(459),P(3328,3455)]),H(C,[B(460),P(3456,3583)]),H(C,[B(461),P(3584,3711)]),H(C,[B(462),P(3712,3839)]),H(C,[B(463),P(3840,4095)]),H(C,[B(464),P(4096,4255)]),
H(C,[B(465),P(4256,4351)]),H(C,[B(466),P(4352,4607)]),H(C,[B(467),P(4608,4991)]),H(C,[B(468),P(4992,5023)]),H(C,[B(469),P(5024,5119)]),H(C,[B(470),P(5120,5759)]),H(C,[B(471),P(5760,5791)]),H(C,[B(472),P(5792,5887)]),H(C,[B(473),P(5888,5919)]),H(C,[B(474),P(5920,5951)]),H(C,[B(475),P(5952,5983)]),H(C,[B(476),P(5984,6015)]),H(C,[B(477),P(6016,6143)]),H(C,[B(478),P(6144,6319)]),H(C,[B(479),P(6400,6479)]),H(C,[B(480),P(6480,6527)]),H(C,[B(481),P(6528,6623)]),H(C,[B(482),P(6624,6655)]),H(C,[B(483),P(6656,6687)]),
H(C,[B(484),P(7424,7551)]),H(C,[B(485),P(7552,7615)]),H(C,[B(486),P(7616,7679)]),H(C,[B(487),P(7680,7935)]),H(C,[B(488),P(7936,8191)]),H(C,[B(489),P(8192,8303)]),H(C,[B(490),P(8304,8351)]),H(C,[B(491),P(8352,8399)]),H(C,[B(492),P(8400,8447)]),H(C,[B(493),P(8448,8527)]),H(C,[B(494),P(8528,8591)]),H(C,[B(495),P(8592,8703)]),H(C,[B(496),P(8704,8959)]),H(C,[B(497),P(8960,9215)]),H(C,[B(498),P(9216,9279)]),H(C,[B(499),P(9280,9311)]),H(C,[B(500),P(9312,9471)]),H(C,[B(501),P(9472,9599)]),H(C,[B(502),P(9600,9631)]),
H(C,[B(503),P(9632,9727)]),H(C,[B(504),P(9728,9983)]),H(C,[B(505),P(9984,10175)]),H(C,[B(506),P(10176,10223)]),H(C,[B(507),P(10224,10239)]),H(C,[B(508),P(10240,10495)]),H(C,[B(509),P(10496,10623)]),H(C,[B(510),P(10624,10751)]),H(C,[B(511),P(10752,11007)]),H(C,[B(512),P(11008,11263)]),H(C,[B(513),P(11264,11359)]),H(C,[B(514),P(11392,11519)]),H(C,[B(515),P(11520,11567)]),H(C,[B(516),P(11568,11647)]),H(C,[B(517),P(11648,11743)]),H(C,[B(518),P(11776,11903)]),H(C,[B(519),P(11904,12031)]),H(C,[B(520),P(12032,12255)]),
H(C,[B(521),P(12272,12287)]),H(C,[B(522),P(12288,12351)]),H(C,[B(523),P(12352,12447)]),H(C,[B(524),P(12448,12543)]),H(C,[B(525),P(12544,12591)]),H(C,[B(526),P(12592,12687)]),H(C,[B(527),P(12688,12703)]),H(C,[B(528),P(12704,12735)]),H(C,[B(529),P(12736,12783)]),H(C,[B(530),P(12784,12799)]),H(C,[B(531),P(12800,13055)]),H(C,[B(532),P(13056,13311)]),H(C,[B(533),P(13312,19893)]),H(C,[B(534),P(19904,19967)]),H(C,[B(535),P(19968,40959)]),H(C,[B(536),P(40960,42127)]),H(C,[B(537),P(42128,42191)]),H(C,[B(538),P(42752,
42783)]),H(C,[B(539),P(43008,43055)]),H(C,[B(540),P(44032,55203)]),H(C,[B(541),P(55296,56191)]),H(C,[B(542),P(56192,56319)]),H(C,[B(543),P(56320,57343)]),H(C,[B(544),P(57344,63743)]),H(C,[B(545),P(63744,64255)]),H(C,[B(546),P(64256,64335)]),H(C,[B(547),P(64336,65023)]),H(C,[B(548),P(65024,65039)]),H(C,[B(549),P(65040,65055)]),H(C,[B(550),P(65056,65071)]),H(C,[B(551),P(65072,65103)]),H(C,[B(552),P(65104,65135)]),H(C,[B(553),P(65136,65279)]),H(C,[B(554),P(65280,65519)]),H(C,[B(555),P(0,1114111)]),H(C,[B(556),
ASr()]),H(C,[B(557),BK(0,1)]),H(C,[B(558),IM(62,1)]),H(C,[B(559),BK(1,1)]),H(C,[B(560),BK(2,1)]),H(C,[B(561),BK(3,0)]),H(C,[B(562),BK(4,0)]),H(C,[B(563),BK(5,1)]),H(C,[B(564),IM(448,1)]),H(C,[B(565),BK(6,1)]),H(C,[B(566),BK(7,0)]),H(C,[B(567),BK(8,1)]),H(C,[B(568),IM(3584,1)]),H(C,[B(569),BK(9,1)]),H(C,[B(570),BK(10,1)]),H(C,[B(571),BK(11,1)]),H(C,[B(572),IM(28672,0)]),H(C,[B(573),BK(12,0)]),H(C,[B(574),BK(13,0)]),H(C,[B(575),BK(14,0)]),H(C,[B(576),ASV(983040,1,1)]),H(C,[B(577),BK(15,0)]),H(C,[B(578),BK(16,
1)]),H(C,[B(579),BK(18,1)]),H(C,[B(580),AS7(19,0,1)]),H(C,[B(581),IM(1643118592,1)]),H(C,[B(582),BK(20,0)]),H(C,[B(583),BK(21,0)]),H(C,[B(584),BK(22,0)]),H(C,[B(585),BK(23,0)]),H(C,[B(586),BK(24,1)]),H(C,[B(587),IM(2113929216,1)]),H(C,[B(588),BK(25,1)]),H(C,[B(589),BK(26,0)]),H(C,[B(590),BK(27,0)]),H(C,[B(591),BK(28,1)]),H(C,[B(592),BK(29,0)]),H(C,[B(593),BK(30,0)])]);}
function Mt(){BV.call(this);this.p8=0;}
function AO3(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.p8!=Gx(Gu(Es(e,d)))?(-1):2;}
function KU(){BR.call(this);this.f3=0;}
function AMy(a){var b=new KU();AGo(b,a);return b;}
function AGo(a,b){BM(a);a.f3=b;}
function AM2(a,b){a.d=b;}
function AG0(a,b,c,d){var e,f;e=b+1|0;if(e>d.v){d.de=1;return (-1);}f=L(c,b);if(b>d.cF&&CD(L(c,b-1|0)))return (-1);if(a.f3!=f)return (-1);return a.d.c(e,c,d);}
function AJq(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return HA(a,b,c,d);e=d.cF;f=d.v;while(true){if(b>=f)return (-1);g=GC(c,a.f3,b);if(g<0)return (-1);if(g>e&&CD(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AHD(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HO(a,b,c,d,e);f=e.cF;a:{while(true){if(c<b)return (-1);g=FY(d,a.f3,c);if(g<0)break a;if(g<b)break a;if(g>f&&CD(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AFj(a,b){if(b instanceof Ej)return 0;if(b instanceof Ed)return 0;if(b instanceof Dz)return 0;if(b instanceof DT)return 0;if(b instanceof Lf)return 0;if(!(b instanceof KU))return 1;return b.f3!=a.f3?0:1;}
function APG(a,b){return 1;}
function Lf(){BR.call(this);this.fF=0;}
function AJX(a){var b=new Lf();AMG(b,a);return b;}
function AMG(a,b){BM(a);a.fF=b;}
function AGs(a,b){a.d=b;}
function AET(a,b,c,d){var e,f,g,h;e=d.v;f=b+1|0;g=BE(f,e);if(g>0){d.de=1;return (-1);}h=L(c,b);if(g<0&&C4(L(c,f)))return (-1);if(a.fF!=h)return (-1);return a.d.c(f,c,d);}
function ANo(a,b,c,d){var e,f;if(!(c instanceof Bv))return HA(a,b,c,d);e=d.v;while(true){if(b>=e)return (-1);f=GC(c,a.fF,b);if(f<0)return (-1);b=f+1|0;if(b<e&&C4(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function AOV(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HO(a,b,c,d,e);f=e.v;a:{while(true){if(c<b)return (-1);g=FY(d,a.fF,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&C4(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AHw(a,b){if(b instanceof Ej)return 0;if(b instanceof Ed)return 0;if(b instanceof Dz)return 0;if(b instanceof DT)return 0;if(b instanceof KU)return 0;if(!(b instanceof Lf))return 1;return b.fF!=a.fF?0:1;}
function ANz(a,b){return 1;}
function DT(){var a=this;BV.call(a);a.ji=0;a.hZ=0;a.fv=0;}
function AOj(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.ji==e&&a.hZ==d?2:(-1);}
function AMh(a,b,c,d){var e,f;if(!(c instanceof Bv))return HA(a,b,c,d);e=d.v;while(b<e){b=GC(c,a.ji,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.hZ==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AGq(a,b,c,d,e){var f;if(!(d instanceof Bv))return HO(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FY(d,a.hZ,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.ji==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AN8(a,b){if(b instanceof DT)return b.fv!=a.fv?0:1;if(b instanceof Dz)return b.k(a.fv);if(b instanceof Ej)return 0;if(!(b instanceof Ed))return 1;return 0;}
var Vp=F(EK);
function AGE(a,b){return b!=10?0:1;}
function AOc(a,b,c){return b!=10?0:1;}
var Vq=F(EK);
function APb(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AQU(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ACC(){var a=this;C.call(a);a.lX=null;a.jy=null;a.gD=0;a.uO=0;}
function AMr(a){var b=new ACC();AKl(b,a);return b;}
function AKl(a,b){var c,d;while(true){c=a.gD;if(b<c)break;a.gD=c<<1|1;}d=c<<1|1;a.gD=d;d=d+1|0;a.lX=BC(d);a.jy=BC(d);a.uO=b;}
function Q6(a,b,c){var d,e,f,g;d=0;e=a.gD;f=b&e;while(true){g=a.lX.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jy.data[f]=c;}
function SI(a,b){var c,d,e,f;c=a.gD;d=b&c;e=0;while(true){f=a.lX.data[d];if(!f)break;if(f==b)return a.jy.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.uO;}
var YJ=F();
var KR=F(X);
function ATR(){var a=new KR();AJP(a);return a;}
function AJP(a){}
function AAW(a){return Cu(BS(Dn(),9,13),32);}
var JS=F(X);
function AS1(){var a=new JS();APC(a);return a;}
function APC(a){}
function ABF(a){return BS(Dn(),48,57);}
var ACw=F(X);
function AT_(){var a=new ACw();AI7(a);return a;}
function AI7(a){}
function AOF(a){return BS(Dn(),97,122);}
var AC4=F(X);
function AR9(){var a=new AC4();AKs(a);return a;}
function AKs(a){}
function API(a){return BS(Dn(),65,90);}
var AC8=F(X);
function ATO(){var a=new AC8();AFY(a);return a;}
function AFY(a){}
function AIa(a){return BS(Dn(),0,127);}
var KN=F(X);
function ATV(){var a=new KN();AHa(a);return a;}
function AHa(a){}
function Zx(a){return BS(BS(Dn(),97,122),65,90);}
var Lo=F(KN);
function AS_(){var a=new Lo();AJ4(a);return a;}
function AJ4(a){}
function AAq(a){return BS(Zx(a),48,57);}
var AEl=F(X);
function ASZ(){var a=new AEl();AL7(a);return a;}
function AL7(a){}
function AJo(a){return BS(BS(BS(Dn(),33,64),91,96),123,126);}
var Mk=F(Lo);
function ASm(){var a=new Mk();ANS(a);return a;}
function ANS(a){}
function Ym(a){return BS(BS(BS(AAq(a),33,64),91,96),123,126);}
var AA$=F(Mk);
function ASg(){var a=new AA$();APt(a);return a;}
function APt(a){}
function ALP(a){return Cu(Ym(a),32);}
var ABx=F(X);
function ASt(){var a=new ABx();AOX(a);return a;}
function AOX(a){}
function AHo(a){return Cu(Cu(Dn(),32),9);}
var ZX=F(X);
function ASH(){var a=new ZX();AQI(a);return a;}
function AQI(a){}
function ALM(a){return Cu(BS(Dn(),0,31),127);}
var ZE=F(X);
function ASq(){var a=new ZE();AF9(a);return a;}
function AF9(a){}
function AQW(a){return BS(BS(BS(Dn(),48,57),97,102),65,70);}
var AC_=F(X);
function ATv(){var a=new AC_();AFO(a);return a;}
function AFO(a){}
function AMp(a){var b;b=new S1;b.wB=a;Bn(b);b.K=1;return b;}
var AEw=F(X);
function AR3(){var a=new AEw();AOa(a);return a;}
function AOa(a){}
function AEK(a){var b;b=new MH;b.wL=a;Bn(b);b.K=1;return b;}
var ACD=F(X);
function ATS(){var a=new ACD();AFZ(a);return a;}
function AFZ(a){}
function AJY(a){var b;b=new RU;b.wm=a;Bn(b);return b;}
var ACq=F(X);
function ASG(){var a=new ACq();ALN(a);return a;}
function ALN(a){}
function AOn(a){var b;b=new RT;b.v8=a;Bn(b);return b;}
var ADp=F(X);
function AS9(){var a=new ADp();AG8(a);return a;}
function AG8(a){}
function AHk(a){var b;b=new WX;b.xt=a;Bn(b);HV(b.J,0,2048);b.K=1;return b;}
var Y2=F(X);
function ASE(){var a=new Y2();AGz(a);return a;}
function AGz(a){}
function AHL(a){var b;b=new OL;b.wY=a;Bn(b);b.K=1;return b;}
var YG=F(X);
function AS$(){var a=new YG();ALp(a);return a;}
function ALp(a){}
function AQR(a){var b;b=new NV;b.xY=a;Bn(b);b.K=1;return b;}
var ACJ=F(X);
function ASw(){var a=new ACJ();AL8(a);return a;}
function AL8(a){}
function AEE(a){var b;b=new Qs;b.wD=a;Bn(b);return b;}
var ACV=F(X);
function ATZ(){var a=new ACV();AJD(a);return a;}
function AJD(a){}
function AKU(a){var b;b=new MA;b.vi=a;Bn(b);b.K=1;return b;}
var AAi=F(X);
function ASz(){var a=new AAi();AFm(a);return a;}
function AFm(a){}
function AHV(a){var b;b=new MF;b.w1=a;Bn(b);b.K=1;return b;}
var ABC=F(X);
function ATd(){var a=new ABC();AGI(a);return a;}
function AGI(a){}
function AI0(a){var b;b=new NF;b.xq=a;Bn(b);b.K=1;return b;}
var AD2=F(X);
function ATM(){var a=new AD2();AKZ(a);return a;}
function AKZ(a){}
function AKW(a){var b;b=new O9;b.xJ=a;Bn(b);b.K=1;return b;}
var ACU=F(X);
function ATI(){var a=new ACU();AMm(a);return a;}
function AMm(a){}
function AP1(a){var b;b=new Pg;b.wo=a;Bn(b);return b;}
var AAM=F(X);
function ATW(){var a=new AAM();AGB(a);return a;}
function AGB(a){}
function ANI(a){var b;b=new TO;b.w8=a;Bn(b);return b;}
var AAg=F(X);
function ASv(){var a=new AAg();AOp(a);return a;}
function AOp(a){}
function AMk(a){var b;b=new Sw;b.vm=a;Bn(b);b.K=1;return b;}
var AEr=F(X);
function ATA(){var a=new AEr();AJx(a);return a;}
function AJx(a){}
function AOz(a){var b;b=new MT;b.yb=a;Bn(b);b.K=1;return b;}
var Jj=F(X);
function ATi(){var a=new Jj();AH3(a);return a;}
function AH3(a){}
function ABz(a){return Cu(BS(BS(BS(Dn(),97,122),65,90),48,57),95);}
var ADr=F(Jj);
function ASn(){var a=new ADr();AJI(a);return a;}
function AJI(a){}
function AL$(a){var b;b=Er(ABz(a),1);b.K=1;return b;}
var ABc=F(KR);
function AR0(){var a=new ABc();AQu(a);return a;}
function AQu(a){}
function AFV(a){var b;b=Er(AAW(a),1);b.K=1;return b;}
var AAb=F(JS);
function ASO(){var a=new AAb();AKJ(a);return a;}
function AKJ(a){}
function AJb(a){var b;b=Er(ABF(a),1);b.K=1;return b;}
function ZL(){var a=this;X.call(a);a.pV=0;a.qA=0;}
function P(a,b){var c=new ZL();AQP(c,a,b);return c;}
function AQP(a,b,c){a.pV=b;a.qA=c;}
function AK$(a){return BS(Dn(),a.pV,a.qA);}
var Z7=F(X);
function ASr(){var a=new Z7();AQ3(a);return a;}
function AQ3(a){}
function AQD(a){return BS(BS(Dn(),65279,65279),65520,65533);}
function AA4(){var a=this;X.call(a);a.lv=0;a.jp=0;a.n7=0;}
function BK(a,b){var c=new AA4();AG3(c,a,b);return c;}
function AS7(a,b,c){var d=new AA4();AQQ(d,a,b,c);return d;}
function AG3(a,b,c){a.jp=c;a.lv=b;}
function AQQ(a,b,c,d){a.n7=d;a.jp=c;a.lv=b;}
function AIA(a){var b;b=AT6(a.lv);if(a.n7)HV(b.J,0,2048);b.K=a.jp;return b;}
function AA_(){var a=this;X.call(a);a.lu=0;a.jA=0;a.mO=0;}
function IM(a,b){var c=new AA_();AHW(c,a,b);return c;}
function ASV(a,b,c){var d=new AA_();AEH(d,a,b,c);return d;}
function AHW(a,b,c){a.jA=c;a.lu=b;}
function AEH(a,b,c,d){a.mO=d;a.jA=c;a.lu=b;}
function AEF(a){var b;b=new RN;ACb(b,a.lu);if(a.mO)HV(b.J,0,2048);b.K=a.jA;return b;}
var ZS=F();
var Zj=F();
function AAL(b){var c,d,e,f,g,h,i;c=AOJ(Gp(b));d=JI(c);e=BC(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+JI(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=M4(c);h=h+1|0;}return e;}
function KA(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Ng(){var a=this;C.call(a);a.oM=0;a.qW=0;a.oZ=null;}
function AIy(a,b,c){var d=new Ng();APs(d,a,b,c);return d;}
function APs(a,b,c,d){a.oM=b;a.qW=c;a.oZ=d;}
function ACP(){var a=this;C.call(a);a.nv=null;a.p5=0;}
function AOJ(a){var b=new ACP();AHz(b,a);return b;}
function AHz(a,b){a.nv=b;}
var AAK=F();
function JI(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.nv.data;f=b.p5;b.p5=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Ba(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function M4(b){var c,d;c=JI(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function Zp(){C.call(this);this.FC=null;}
function Tt(){C.call(this);this.m9=null;}
function ARH(a,b){var c,d,e,f;c=b.data;b=a.m9;d=D6(c[0]);e=FG(c[1]);ABk(b.e.f,d,e);Go(Ck(b),AWe);F1(Ck(b));f=Kn(FC(),b.eL);b=new M;O(b);G(HR(G(b,B(594)),f),B(183));$rt_globals.console.info($rt_ustr(N(b)));}
function Q9(){C.call(this);this.qy=null;}
function AIx(a,b){KC(a.qy,b);}
var YR=F();
function AD6(b){var c,d,e,f,g,h,i,j,k,l;c=new V5;c.kT=0;c.gJ=BC(16);c.eR=0;d=Cp(b);HN(c,d);e=0;f=0;while(f<d){g=B2(b,f);h=g.o.data.length;HN(c,h);i=0;while(i<h){j=Np(g,i);k=Md(j);HN(c,e);HN(c,k);e=e+Md(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}d=c.kT;if(d&&c.eR!=d){b=Iw();d=c.kT;e=c.eR;j=new M;O(j);G(T(G(T(G(j,B(389)),d),B(595)),e),B(596));Br(b,N(j));}l=c.gJ;d=l.data.length;e=c.eR;if(d!=e)l=L6(l,e);return l;}
function ACW(b){var c,d,e,f,g,h,i,j,k;c=BP(b);d=Q(H0,c);e=d.data;f=0;while(f<c){a:{g=BP(b);if(g!=(-1)){h=BP(b);i=BP(b);if(i==(-1)){j=new H0;j.oE=h;e[g]=j;}else{j=new H0;j.oE=h;j.q7=BC(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].q7.data[k]=BP(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function ML(){C.call(this);this.q9=null;}
function AFe(a,b){var c,d,e,f;c=b.data;b=a.q9;d=D6(c[0]);c=ADw(d);e=new QD;d=ACW(c);f=ACW(c);e.wG=d;e.qM=f;b.rL=e;Ug(b.G,d);Ug(b.D,b.rL.qM);}
function Py(){var a=this;C.call(a);a.xF=null;a.xG=null;a.xH=null;}
function Qd(){var a=this;C.call(a);a.wT=null;a.wS=null;}
function Wr(){var a=this;U.call(a);a.nf=null;a.xz=null;}
function AIh(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cb^Dv(a.nf,c):0;}
function Wp(){var a=this;U.call(a);a.s5=null;a.tP=null;a.xc=null;}
function AE$(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cb^Dv(a.s5,c):0;return a.tP.k(b)&&!d?1:0;}
function Oe(){var a=this;U.call(a);a.h2=null;a.vq=null;}
function AK0(a,b){return a.be^Dv(a.h2,b);}
function AI3(a){var b,c,d;b=new M;O(b);c=G$(a.h2,0);while(c>=0){Ii(b,Gm(c));BA(b,124);c=G$(a.h2,c+1|0);}d=b.N;if(d>0)Wf(b,d-1|0);return N(b);}
function Ok(){var a=this;U.call(a);a.ql=null;a.wJ=null;}
function AOm(a,b){return a.ql.k(b);}
function Oi(){var a=this;U.call(a);a.js=0;a.nU=null;a.ke=null;}
function AO2(a,b){return !(a.js^Dv(a.ke.F,b))&&!(a.js^a.ke.dF^a.nU.k(b))?0:1;}
function Oj(){var a=this;U.call(a);a.jz=0;a.tr=null;a.k6=null;}
function ALr(a,b){return !(a.jz^Dv(a.k6.F,b))&&!(a.jz^a.k6.dF^a.tr.k(b))?1:0;}
function On(){var a=this;U.call(a);a.uj=0;a.tx=null;a.tm=null;a.vO=null;}
function AHQ(a,b){return a.uj^(!a.tx.k(b)&&!a.tm.k(b)?0:1);}
function Oo(){var a=this;U.call(a);a.qx=0;a.qc=null;a.pq=null;a.x5=null;}
function AEy(a,b){return a.qx^(!a.qc.k(b)&&!a.pq.k(b)?0:1)?0:1;}
function Ol(){var a=this;U.call(a);a.o5=null;a.x_=null;}
function AI8(a,b){return CY(a.o5,b);}
function Om(){var a=this;U.call(a);a.tL=null;a.v3=null;}
function ALu(a,b){return CY(a.tL,b)?0:1;}
function Op(){var a=this;U.call(a);a.qP=null;a.qg=0;a.sA=null;}
function AQc(a,b){return !CY(a.qP,b)&&!(a.qg^Dv(a.sA.F,b))?0:1;}
function Oq(){var a=this;U.call(a);a.rB=null;a.rR=0;a.re=null;}
function AHe(a,b){return !CY(a.rB,b)&&!(a.rR^Dv(a.re.F,b))?1:0;}
function Od(){var a=this;U.call(a);a.sx=0;a.tp=null;a.t2=null;a.vu=null;}
function ARY(a,b){return !(a.sx^a.tp.k(b))&&!CY(a.t2,b)?0:1;}
function OY(){var a=this;U.call(a);a.tZ=0;a.mr=null;a.mP=null;a.vY=null;}
function AJa(a,b){return !(a.tZ^a.mr.k(b))&&!CY(a.mP,b)?1:0;}
function Oa(){var a=this;U.call(a);a.oD=null;a.v7=null;}
function AHb(a,b){return CY(a.oD,b);}
function Ob(){var a=this;U.call(a);a.oI=null;a.x1=null;}
function AIP(a,b){return CY(a.oI,b)?0:1;}
function Oh(){var a=this;U.call(a);a.uf=null;a.rt=0;a.u_=null;}
function AKq(a,b){return CY(a.uf,b)&&a.rt^Dv(a.u_.F,b)?1:0;}
function N_(){var a=this;U.call(a);a.sa=null;a.qz=0;a.rr=null;}
function APO(a,b){return CY(a.sa,b)&&a.qz^Dv(a.rr.F,b)?0:1;}
function Of(){var a=this;U.call(a);a.sF=0;a.nc=null;a.qt=null;a.vN=null;}
function AF8(a,b){return a.sF^a.nc.k(b)&&CY(a.qt,b)?1:0;}
function Og(){var a=this;U.call(a);a.r7=0;a.mg=null;a.sw=null;a.v$=null;}
function ANx(a,b){return a.r7^a.mg.k(b)&&CY(a.sw,b)?0:1;}
var LN=F(0);
function Su(){var a=this;C.call(a);a.vU=null;a.ts=null;a.ir=null;a.cq=null;a.h3=0;a.j$=0;}
function MD(a,b){var c,d,e;c=I(a.ir);if(b>=0&&b<=c){XI(a.cq,null,(-1),(-1));d=a.cq;d.i8=1;d.d3=b;c=d.hj;if(c<0)c=b;d.hj=c;b=a.ts.ch(b,a.ir,d);if(b==(-1))a.cq.de=1;if(b>=0){d=a.cq;if(d.iu){e=d.dB.data;if(e[0]==(-1)){c=d.d3;e[0]=c;e[1]=c;}d.hj=I2(d);return 1;}}a.cq.d3=(-1);return 0;}d=new Bx;Bl(d,C5(b));K(d);}
function AD0(a){return OP(a.cq,0);}
function AAc(a){return RZ(a.cq,0);}
function ADj(){var a=this;C.call(a);a.Bs=null;a.Bt=null;a.Br=0.0;}
function V5(){var a=this;C.call(a);a.gJ=null;a.kT=0;a.eR=0;}
function HN(a,b){var c,d;c=a.gJ;d=c.data.length;if(d==a.eR)a.gJ=L6(c,d*2|0);c=a.gJ.data;d=a.eR;a.eR=d+1|0;c[d]=b;}
var C0=F(0);
var AVR=null;var AXh=null;var AVT=null;var AVS=null;var AVV=null;var AVU=null;var AVX=null;var AVW=null;var AVZ=null;var AVY=null;var AV0=null;function ABE(){ABE=Bm(C0);ALm();}
function ALm(){AVR=C3(0);AXh=CL(0,0,0);AVT=S(B(597));AVS=CL(255,255,255);AVV=CL(166,214,255);AVU=S(B(598));AVX=S(B(599));AVW=S(B(600));AVZ=Ft(205,205,205,153);AVY=Ft(255,255,255,0);AV0=S(B(116));}
function Cg(){Cj.call(this);this.kS=null;}
var AX0=null;var AX1=null;var AX2=null;var AX3=null;var AX4=null;var AX5=null;var AX6=null;var AX7=null;var AX8=null;var AX9=null;var AX$=null;var AX_=null;var AYa=null;var AYb=null;var AYc=null;var AV1=null;function Z5(){Z5=Bm(Cg);AIE();}
function DA(a,b,c){var d=new Cg();Ws(d,a,b,c);return d;}
function AJN(a,b,c,d){var e=new Cg();ACe(e,a,b,c,d);return e;}
function Ws(a,b,c,d){Z5();C_(a,b,c);a.kS=Ij(d,null);}
function ACe(a,b,c,d,e){Z5();C_(a,b,c);a.kS=Ij(d,e);}
function AIE(){var b;b=new Cg;ABE();Ws(b,B(325),0,AXh);AX0=b;AX1=DA(B(326),1,CL(0,49,191));AX2=DA(B(328),2,S(B(601)));AX3=DA(B(330),3,S(B(602)));AX4=DA(B(332),4,AXh);AX5=DA(B(333),5,S(B(603)));AX6=DA(B(335),6,S(B(369)));AX7=DA(B(337),7,S(B(604)));AX8=DA(B(339),8,S(B(605)));AX9=AJN(B(341),9,AXh,CL(237,235,252));AX$=AJN(B(342),10,S(B(367)),S(B(606)));AX_=DA(B(343),11,S(B(369)));AYa=DA(B(345),12,S(B(370)));AYb=DA(B(347),13,S(B(607)));b=DA(B(348),14,S(B(349)));AYc=b;AV1=H(Cg,[AX0,AX1,AX2,AX3,AX4,AX5,AX6,AX7,AX8,
AX9,AX$,AX_,AYa,AYb,b]);}
var Du=F(0);
var AV5=null;var AV6=null;var AV2=null;var AV3=null;var AV4=null;var AXi=null;var AXj=null;var AV7=null;var AV8=null;function AOo(){AOo=Bm(Du);AIX();}
function AIX(){AV5=S(B(114));AV6=S(B(608));AV2=S(B(609));AV3=S(B(610));AV4=S(B(611));AXi=S(B(114));AXj=S(B(608));AV7=Ft(205,205,205,153);AV8=CL(247,248,250);}
function N5(){var a=this;C.call(a);a.h4=null;a.gS=0;}
function N2(){C.call(this);this.q8=null;}
function AOy(a,b){UA(a.q8,b);}
var MZ=F(Gq);
function AID(a,b,c,d){var e,f,g;e=0;f=d.v;a:{while(true){if(b>f){b=e;break a;}g=Fz(d,a.X);Dx(d,a.X,b);e=a.cS.c(b,c,d);if(e>=0)break;Dx(d,a.X,g);b=b+1|0;}}return b;}
function ARJ(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fz(e,a.X);Dx(e,a.X,c);f=a.cS.c(c,d,e);if(f>=0)break;Dx(e,a.X,g);c=c+(-1)|0;}}return c;}
function AGY(a){return null;}
var PW=F(Bo);
var Xc=F(Bo);
function Vk(){FK.call(this);this.xU=0;}
function PK(){FK.call(this);this.xN=0;}
var X5=F(Bo);
function Vb(){var a=this;C.call(a);a.qU=null;a.s7=null;a.uC=0;a.jK=0;}
function Kp(a,b){return B6(a.qU)<b?0:1;}
function Tv(){var a=this;C.call(a);a.tF=null;a.tE=null;}
function SE(){var a=this;C.call(a);a.wn=null;a.o1=null;}
function SD(){C.call(this);this.vj=null;}
var ACF=F(0);
function L9(b){return !b?H(Bv,[B(139),B(140),B(612)]):H(Bv,[B(139),B(140),B(612),B(41)]);}
var Z9=F();
function Rx(){var a=this;C.call(a);a.nF=null;a.nE=0;a.nD=null;}
function JA(a,b){var c,d,e,f,g,h,i,j,k;c=a.nF;d=a.nE;e=a.nD;if(b<=d){f=Ck(c);g=new XU;g.mK=c;h=Q(C,1);h.data[0]=e;CO(f,g,B(613),h);}else{i=Ck(c);g=new XV;g.tR=c;j=Q(C,2);k=j.data;k[0]=e;h=BC(1);h.data[0]=250;k[1]=h;CO(i,g,B(614),j);f=Ck(c);g=new XW;g.sm=c;h=Q(C,1);h.data[0]=e;CO(f,g,B(615),h);}}
function Vh(){var a=this;C.call(a);a.dB=null;a.jf=null;a.kC=null;a.kJ=null;a.n3=0;a.iu=0;a.cF=0;a.v=0;a.d3=0;a.iB=0;a.e7=0;a.de=0;a.xm=0;a.hj=0;a.i8=0;}
function BH(a,b,c){a.jf.data[b]=c;}
function Dm(a,b){return a.jf.data[b];}
function I2(a){return RZ(a,0);}
function RZ(a,b){RM(a,b);return a.dB.data[(b*2|0)+1|0];}
function Dx(a,b,c){a.dB.data[b*2|0]=c;}
function Jx(a,b,c){a.dB.data[(b*2|0)+1|0]=c;}
function Fz(a,b){return a.dB.data[b*2|0];}
function Iq(a,b){return a.dB.data[(b*2|0)+1|0];}
function ACx(a){return OP(a,0);}
function OP(a,b){RM(a,b);return a.dB.data[b*2|0];}
function MR(a,b){return a.kC.data[b];}
function Ea(a,b,c){a.kC.data[b]=c;}
function RM(a,b){var c;if(!a.iu){c=new DY;V(c);K(c);}if(b>=0&&b<a.n3)return;c=new Bx;Bl(c,C5(b));K(c);}
function XI(a,b,c,d){a.iu=0;a.i8=2;Hq(a.dB,(-1));Hq(a.jf,(-1));if(b!==null)a.kJ=b;if(c>=0){a.cF=c;a.v=d;}a.d3=a.cF;}
function AAu(a){return a.i8;}
function YB(a){return a.iB;}
function VK(){C.call(this);this.nG=null;}
function AQo(a){DK(a.nG);}
function QD(){var a=this;C.call(a);a.wG=null;a.qM=null;}
function H0(){var a=this;C.call(a);a.oE=0;a.q7=null;}
function S1(){U.call(this);this.wB=null;}
function AQl(a,b){return Ct(b)!=2?0:1;}
function MH(){U.call(this);this.wL=null;}
function AFR(a,b){return Ct(b)!=1?0:1;}
function RU(){U.call(this);this.wm=null;}
function AFC(a,b){return QZ(b);}
function RT(){U.call(this);this.v8=null;}
function AIz(a,b){return 0;}
function WX(){U.call(this);this.xt=null;}
function AKb(a,b){return !Ct(b)?0:1;}
function OL(){U.call(this);this.wY=null;}
function AQp(a,b){return Ct(b)!=9?0:1;}
function NV(){U.call(this);this.xY=null;}
function AMW(a,b){return Gh(b);}
function Qs(){U.call(this);this.wD=null;}
function AOs(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function MA(){U.call(this);this.vi=null;}
function ARj(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gh(b);}return b;}
function MF(){U.call(this);this.w1=null;}
function AHB(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gh(b);}return b;}
function NF(){U.call(this);this.xq=null;}
function AQB(a,b){a:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function O9(){U.call(this);this.xJ=null;}
function ALJ(a,b){return Jr(b);}
function Pg(){U.call(this);this.wo=null;}
function ANV(a,b){return Ph(b);}
function TO(){U.call(this);this.w8=null;}
function AQd(a,b){return Ct(b)!=3?0:1;}
function Sw(){U.call(this);this.vm=null;}
function AQ4(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Gh(b);}return b;}
function MT(){U.call(this);this.yb=null;}
function AHm(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Gh(b);}return b;}
function L5(){U.call(this);this.kW=0;}
function AT6(a){var b=new L5();ACb(b,a);return b;}
function ACb(a,b){Bn(a);a.kW=b;}
function AMZ(a,b){return a.be^(a.kW!=Ct(b&65535)?0:1);}
var RN=F(L5);
function APp(a,b){return a.be^(!(a.kW>>Ct(b&65535)&1)?0:1);}
function PE(){C.call(this);this.vc=null;}
function ALf(a){var b,c;b=a.vc;c=b.tF;b=b.tE;c.FH(b.hY,b.jR,null);}
function VS(){C.call(this);this.nl=null;}
function ANM(a,b){var c,d,e,f;c=a.nl;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.o1;c=Bu();b=Cx(b);e=new M;O(e);G(G(e,B(616)),b);Br(c,N(e));b=Bu();f=d.length;c=new M;O(c);T(G(c,B(617)),f);Br(b,N(c));}
function VV(){var a=this;C.call(a);a.sX=null;a.sY=null;}
function AMu(a,b){var c,d;c=a.sX;d=a.sY;b.arrayBuffer().then(Bj(c,"f"),Bj(d,"f"));}
function TA(){var a=this;C.call(a);a.l2=null;a.l3=null;}
function AJi(a,b){var c;c=a.l2;JA(a.l3,Jz(c,b.size));}
function TD(){C.call(this);this.ug=null;}
function AE4(a,b){var c;c=a.ug;Br(Iw(),$rt_str(b.message));JA(c,0);}
function UE(){C.call(this);this.wd=null;}
function ALa(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function XV(){C.call(this);this.tR=null;}
function APE(a,b){var c,d;c=a.tR;if(!c.hE){b=b.data;c.e.f=ABN(D6(b[0]),FG(b[1]));c.hD=1;d=Kn(FC(),c.eL);b=new M;O(b);G(HR(G(b,B(618)),d),B(183));$rt_globals.console.info($rt_ustr(N(b)));}}
function XW(){C.call(this);this.sm=null;}
function AL2(a,b){var c,d,e,f,g,h;c=b.data;d=a.sm;e=(D6(c[2])).data[0];if(e!=1)HD(d,b);else{d.hE=1;f=D6(c[0]);g=FG(c[1]);b=d.e;b.f=ACG(b.f,f,g,d.hD);Wj(d,ADm(e));Go(Ck(d),AWe);F1(Ck(d));h=Kn(FC(),d.eL);b=new M;O(b);G(HR(G(b,B(619)),h),B(183));$rt_globals.console.info($rt_ustr(N(b)));WO(d);J3(d);}}
function XU(){C.call(this);this.mK=null;}
function ARZ(a,b){HD(a.mK,b);}
var Y$=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["cD",AUr(ALE),"cr",AUq(AGn)],RA,0,C,[],0,3,0,0,0,M2,0,C,[],3,3,0,0,0,Mv,0,C,[],3,3,0,0,0,Wu,0,C,[M2,Mv],0,3,0,0,0,ZB,0,C,[],4,0,0,0,0,Zk,0,C,[],4,3,0,0,0,Di,0,C,[],3,3,0,0,0,CI,0,C,[],3,3,0,0,0,IQ,0,C,[],3,3,0,0,0,Bv,"String",1,C,[Di,CI,IQ],0,3,0,EL,["cr",AUq(AGm),"cD",AUr(Bq),"i9",AUq(Le),"jn",AUr(AIB)],Gr,0,C,[],0,3,0,0,0,EF,0,Gr,[],0,3,0,0,0,Ha,0,EF,[],0,3,0,0,0,AAN,0,Ha,[],0,3,0,0,0,DU,0,C,[Di],1,3,0,0,0,Ff,0,DU,[CI],0,3,0,0,["jn",AUr(AKS)],Ge,0,C,[Di,IQ],0,0,0,0,["hs",AUr(Jw),
"cr",AUq(N)],HU,0,C,[],3,3,0,0,0,M,0,Ge,[HU],0,3,0,0,["k_",AUu(AKN),"kl",AUt(AHJ),"cr",AUq(DS),"hs",AUr(AKV),"lI",AUs(ALn)],Ep,0,Ha,[],0,3,0,0,0,ACf,0,Ep,[],0,3,0,0,0,AAA,0,Ep,[],0,3,0,0,0,D1,0,Gr,[],0,3,0,0,0,Bo,0,D1,[],0,3,0,0,0,TM,0,C,[],3,3,0,0,0,Ds,0,C,[],3,3,0,0,0,OK,0,C,[],3,0,0,0,0,Ix,0,C,[TM,Ds,OK],1,3,0,0,["dS",AUq(FM)],Rm,0,Ix,[],0,3,0,0,0,YM,0,C,[],0,3,0,0,0,ADt,0,C,[],4,3,0,0,0,Y,0,C,[],3,3,0,0,0,TU,0,C,[Y],0,3,0,0,0,BB,0,C,[],3,3,0,0,0,ABo,0,C,[BB],1,3,0,0,0,YQ,0,C,[],3,3,0,0,0,AC7,0,C,[],3,3,
0,0,0,AC2,0,C,[],3,3,0,0,0,LH,0,C,[],0,3,0,0,0,Zz,0,C,[BB],1,3,0,0,0,BN,0,C,[BB],3,3,0,0,0,TV,0,C,[BN],0,3,0,0,["Y",AUr(AEz)],TT,0,C,[BN],0,3,0,0,["Y",AUr(AQe)],ACY,0,C,[],4,3,0,0,0,AAd,0,C,[],0,3,0,0,0,AEs,0,C,[],4,3,0,0,0,M8,0,C,[BN],0,3,0,0,["Y",AUr(AMJ)],V8,0,C,[BB],1,3,0,0,0,Y4,0,C,[],0,3,0,0,0]);
$rt_metadata([Lk,0,C,[],4,3,0,0,0,JK,0,C,[BB],3,3,0,0,0,AAs,0,C,[JK],1,3,0,0,["GT",AUr(ARp),"Gb",AUq(AGG)],AA0,0,C,[BB],1,3,0,0,0,FL,0,C,[],3,3,0,0,0,SZ,0,C,[FL],0,3,0,0,0,C7,0,C,[CI],0,3,0,0,0,Mp,0,C,[BB],3,3,0,0,0,SB,0,C,[Mp],3,3,0,0,0,Eh,0,C,[BB],3,3,0,0,0,ADs,0,C,[SB,Eh],3,3,0,0,0,Gy,0,Bo,[],0,3,0,0,0,NG,0,C,[BN],0,3,0,0,["Y",AUr(ANO)],ABX,0,C,[],4,3,0,0,0,AAX,0,C,[],4,3,0,0,0,Bx,0,Bo,[],0,3,0,0,0,IJ,0,Bo,[],0,3,0,0,0,O8,0,C,[Eh],3,3,0,0,0,Rc,0,C,[Eh],3,3,0,0,0,Q4,0,C,[Eh],3,3,0,0,0,TG,0,C,[Eh],3,3,0,0,
0,Xb,0,C,[Eh],3,3,0,0,0,UU,0,C,[Eh,O8,Rc,Q4,TG,Xb],3,3,0,0,0,Os,0,C,[],3,3,0,0,0,YP,0,C,[BB,UU,Os,JK],1,3,0,0,["EM",AUs(ALi),"GY",AUs(ALG),"yx",AUr(AFH),"Dl",AUt(AMO),"Bo",AUr(AQy),"By",AUq(AGJ),"zT",AUt(AEY)],BD,0,Bo,[],0,3,0,0,0,Yd,0,Bo,[],0,3,0,0,0,G9,0,Bx,[],0,3,0,0,0,Z0,0,C,[],0,3,0,0,0,Or,0,C,[],3,3,0,0,0,SK,0,C,[Or],0,3,0,0,0,Cb,0,C,[],3,3,0,0,0,RO,0,C,[Cb],0,3,0,0,0,Bh,0,C,[],3,3,0,0,0,ABi,0,C,[Bh],0,3,0,0,0,AAU,0,C,[BB],1,3,0,0,0,Q8,0,C,[BB],3,3,0,0,0,VM,0,C,[Q8],0,3,0,0,["Dn",AUr(AJW)],VF,0,C,[Bh],
0,3,0,0,0,PV,0,C,[BB],3,3,0,0,0,VG,0,C,[PV],0,3,0,0,["uv",AUs(AH2)],ADB,0,C,[BB],1,3,0,0,0,Cl,0,C,[BB],3,3,0,0,0,VD,0,C,[Cl],0,3,0,0,["b_",AUr(ANW)],KW,0,C,[],3,3,0,0,0,EA,0,C,[KW],1,3,0,0,0,Ek,0,C,[],3,3,0,0,0,XE,0,C,[KW],3,3,0,0,0,M1,0,C,[XE],3,3,0,0,0,OU,0,EA,[Ek,Di,M1],0,3,0,0,0]);
$rt_metadata([VE,0,C,[BN],0,3,0,0,["Y",AUr(AO9)],Pf,0,C,[],0,3,0,0,0,Lc,0,C,[],1,3,0,0,0,AC6,0,Lc,[],0,3,0,0,0,CC,0,C,[Ds],1,3,0,0,["cK",AUr(AQ8)],I6,0,C,[FL],0,3,0,0,["lS",AUs(Js)],Z6,0,C,[],0,3,0,0,0,Wz,0,C,[Cl],0,3,0,0,["b_",AUr(ANl)],WA,0,C,[Cl],0,3,0,0,["b_",AUr(ANB)],WB,0,C,[Cl],0,3,0,0,["b_",AUr(ALX)],WC,0,C,[Cl],0,3,0,0,["b_",AUr(ALj)],WD,0,C,[Cl],0,3,0,0,["b_",AUr(ALK)],WE,0,C,[Cl],0,3,0,0,["b_",AUr(AN$)],WF,0,C,[Cl],0,3,0,0,["b_",AUr(AJz)],WG,0,C,[Cl],0,3,0,0,["b_",AUr(ARw)],WH,0,C,[Cl],0,3,0,0,["b_",
AUr(AIK)],WI,0,C,[Cl],0,3,0,0,["b_",AUr(APf)],XZ,0,C,[Cl],0,3,0,0,["b_",AUr(AQ9)],X0,0,C,[Cl],0,3,0,0,["b_",AUr(ALy)],X1,0,C,[Cl],0,3,0,0,["b_",AUr(AL0)],X2,0,C,[Cl],0,3,0,0,["b_",AUr(ANQ)],Ui,0,C,[],3,3,0,0,0,Uv,0,C,[Ui],0,3,0,0,0,Ut,0,C,[Cl],0,3,0,0,["b_",AUr(AKD)],Mq,0,C,[],0,3,0,0,0,ADO,0,C,[],0,3,0,0,0,IN,0,C,[],3,3,0,0,0,Cs,0,C,[IN],3,3,0,0,0,Cw,0,C,[],3,3,0,0,["bR",AUr(AKI),"b5",AUs(AQf),"cL",AUs(AFq),"cp",AUt(AN9)],DE,0,C,[],3,3,0,0,0,Ev,0,C,[IN],3,3,0,0,0,EH,0,C,[],3,3,0,0,0,EM,0,C,[],3,3,0,0,0,E8,
0,C,[EM],3,3,0,0,0,P4,0,C,[Ds],0,3,0,0,0,Bk,0,C,[],0,3,0,0,["cr",AUq(Yi)],WL,0,C,[],0,3,0,0,0,AC5,0,C,[],0,3,0,0,0,Zh,0,C,[],3,3,0,0,0,PU,0,C,[],0,3,0,0,0,Lx,0,C,[],0,3,0,0,0,D9,0,Lx,[],0,3,0,0,0,Wi,0,D9,[],0,3,0,0,0,Ez,0,D9,[],0,3,0,0,0,QH,0,D9,[],0,3,0,0,0,ACK,0,Ez,[],0,3,0,0,0,ACj,0,Ez,[],0,3,0,0,0,ZA,0,Ez,[],0,3,0,0,0,RX,0,C,[BB],3,3,0,0,0,AEq,0,C,[RX],3,3,0,0,0]);
$rt_metadata([PR,0,C,[Ds],0,3,0,0,0,PT,0,C,[],0,3,0,0,0,Cj,0,C,[CI,Di],1,3,0,0,0,GI,0,Cj,[],12,3,0,Zd,0,L$,0,C,[],3,3,0,0,0,Tm,0,C,[L$],3,3,0,0,0,UK,0,C,[],3,3,0,0,0,Gj,0,C,[Tm,UK],1,3,0,0,0,Jl,0,Gj,[],0,3,0,0,0,AAx,0,Jl,[],0,3,0,0,0,F9,0,Gj,[],1,3,0,0,0,Lj,0,F9,[],0,3,0,0,["jQ",AUt(AKv)],DV,0,Cj,[],12,3,0,AQr,0,Jc,0,C,[CI],1,3,0,0,0,Mc,0,Jc,[],0,3,0,AAm,0,Kk,0,C,[],32,0,0,YO,0,OZ,0,C,[],0,3,0,0,0,GM,0,Cj,[],12,0,0,ABM,0,Gd,0,Cj,[],12,0,0,ABO,0,VN,0,D1,[],0,3,0,0,0,ACX,0,BD,[],0,3,0,0,0,Mb,0,C,[BB],3,3,0,0,
0,XB,0,C,[Mb],0,3,0,0,["Y",AUr(AOL)],XC,0,C,[Mb],0,3,0,0,["Y",AUr(AGf)],GX,0,C,[],1,3,0,0,0,Se,0,C,[],3,3,0,0,0,K3,0,GX,[CI,HU,IQ,Se],1,3,0,0,0,JM,0,GX,[CI],1,3,0,0,0,HC,0,C,[],0,3,0,G6,0,M7,0,CC,[],0,3,0,0,["bK",AUq(ALt),"cj",AUs(AJZ)],CQ,0,CC,[],1,3,0,0,["cj",AUs(GR)],Qe,0,C,[],3,3,0,0,0,Ly,0,C,[Qe],3,3,0,0,0,K9,0,C,[],3,3,0,0,0,L7,0,CQ,[Cw,Ly,K9,DE,EH,E8],0,3,0,0,["gi",AUs(AJJ),"cK",AUr(AIk),"bK",AUq(AQk),"fL",AUq(AO8),"uo",AUq(AJn),"uQ",AUq(AOx),"sy",AUr(APd),"cj",AUs(AN_),"hX",AUr(AGd),"bR",AUr(ALB),"cp",
AUt(ALx),"b5",AUs(AFL),"cL",AUs(AIM),"cW",AUt(ANy),"dj",AUq(ALe)],VY,0,L7,[],0,3,0,0,["fL",AUq(AHC)],AD_,0,C,[],0,3,0,0,0,ABf,0,C,[BB],1,3,0,0,0,JZ,0,K3,[],1,0,0,0,0,AAZ,0,JZ,[],0,0,0,0,0,KP,0,C,[],1,3,0,0,0,LF,0,C,[],0,3,0,0,0,Y1,0,C,[],0,3,0,0,0,Ik,0,C,[BB],3,3,0,0,0,Ne,0,C,[Ik],0,3,0,0,["Y",AUr(AIt)],Nd,0,C,[Ik],0,3,0,0,["Y",AUr(AMN)],Nc,0,C,[BN],0,3,0,0,["Y",AUr(ANw)],Nb,0,C,[BN],0,3,0,0,["Y",AUr(AGR)],XS,0,C,[Y],0,3,0,0,["l",AUr(AMv)],XX,0,C,[Y],0,3,0,0,["l",AUr(AM$)]]);
$rt_metadata([Td,0,C,[Cb],0,3,0,0,["b$",AUr(AM5)],Tc,0,C,[Cb],0,3,0,0,["b$",AUr(AFS)],Tb,0,C,[Cb],0,3,0,0,["b$",AUr(AJE)],Ta,0,C,[Cb],0,3,0,0,["b$",AUr(AJB)],S_,0,C,[Cb],0,3,0,0,["b$",AUr(AKf)],S$,0,C,[Cb],0,3,0,0,["b$",AUr(AF0)],S9,0,C,[Cb],0,3,0,0,["b$",AUr(AHE)],S8,0,C,[Cb],0,3,0,0,["b$",AUr(ANk)],S7,0,C,[Cb],0,3,0,0,["b$",AUr(AQS)],S6,0,C,[Cb],0,3,0,0,["b$",AUr(ARK)],QG,0,C,[Cb],0,3,0,0,["b$",AUr(AK9)],QC,0,C,[Cb],0,3,0,0,["b$",AUr(AEL)],QE,0,C,[Cb],0,3,0,0,["b$",AUr(AIp)],QA,0,C,[Cb],0,3,0,0,["b$",AUr(ALo)],QB,
0,C,[Cb],0,3,0,0,["b$",AUr(AO5)],Qz,0,C,[Cb],0,3,0,0,["b$",AUr(AEB)],G5,0,C,[],0,3,0,0,0,ON,0,G5,[],0,3,0,0,0,ADc,0,C,[],0,3,0,0,0,Mm,0,G5,[],0,3,0,0,0,Uk,0,C,[BB],3,3,0,0,0,Nz,0,C,[Uk],0,3,0,0,["Hr",AUr(AK1)],U4,0,C,[Y],0,3,0,0,["l",AUr(Wk)],W2,0,JM,[],0,0,0,0,0,ACA,0,C,[Cw,DE],0,0,0,0,["bR",AUr(AOg),"cp",AUt(ARQ),"b5",AUs(AGg),"cL",AUs(AML),"cW",AUt(ALg)],HM,0,C,[],3,3,0,0,["u2",AUq(AHg),"sn",AUq(ARX)],AAD,0,C,[HM,Cw,K9],0,3,0,0,["sn",AUq(AH$),"u2",AUq(AGO),"uo",AUq(X9),"uQ",AUq(WN),"sy",AUr(X$),"cL",AUs(UZ),
"b5",AUs(U7),"cp",AUt(QF),"bR",AUr(Pi),"gM",AUr(AM0)],HJ,0,C,[],3,3,0,0,0,QU,0,C,[HJ],0,3,0,0,["hM",AUr(AJU)],QS,0,C,[HJ],0,3,0,0,["hM",AUr(ALY)],QT,0,C,[Y],0,3,0,0,["l",AUr(AFG)],QQ,0,C,[Y],0,3,0,0,["l",AUr(AFg)],QR,0,C,[Cs],0,3,0,0,["bB",AUr(ALC)],HE,0,C,[Cs],0,3,0,0,["bB",AUr(AOT)],QO,0,C,[Y],0,3,0,0,["l",AUr(ANt)],QP,0,C,[Ev],0,3,0,0,["bB",AUr(AKt)],AB7,0,C,[BB],1,3,0,0,0,Zc,0,C,[],3,3,0,0,0,X6,0,C,[],0,3,0,0,0,Sj,0,C,[Cs],0,3,0,0,["bB",AUr(ART)],Sk,0,C,[Cs],0,3,0,0,["bB",AUr(AE3)],En,0,C,[],3,3,0,0,0,ABe,
0,C,[Cw,En],0,3,0,0,["bR",AUr(Zn),"cp",AUt(ABd),"b5",AUs(Yj),"cL",AUs(AEb),"gj",AUs(AQG)],YN,0,C,[En,HM],0,3,0,0,["u2",AUq(AHg),"sn",AUq(ARX),"gj",AUs(AGM),"gM",AUr(AFh)],AA1,0,C,[],0,3,0,0,0,K2,0,C,[],0,3,0,0,0,Iv,0,C,[],0,3,0,0,0,VZ,0,C,[],0,3,0,0,0,Yo,0,C,[],0,3,0,0,0,Ni,0,C,[],0,3,0,0,0]);
$rt_metadata([EU,0,C,[Ds],0,0,0,0,0,ABq,0,C,[],0,3,0,0,0,ABr,0,C,[Ds],0,3,0,0,0,Wg,0,C,[],3,3,0,0,0,Ho,0,C,[Wg],3,3,0,0,0,EN,0,C,[Ho],1,3,0,0,0,I$,0,C,[Ho],3,3,0,0,0,F3,0,EN,[I$],1,3,0,0,["cD",AUr(AMc)],Il,0,C,[],3,3,0,0,0,NN,0,F3,[Ek,Di,Il],0,3,0,0,["ro",AUr(Bp),"ne",AUq(AM7),"uh",AUr(El)],US,0,C,[Y],0,3,0,0,0,BZ,0,C,[],0,3,0,0,["cD",AUr(ARr)],UR,0,C,[Y],0,3,0,0,["l",AUr(AOS)],UN,0,C,[Y],0,3,0,0,["l",AUr(AMP)],UM,0,C,[Bh],0,3,0,0,["p",AUq(AOP)],UP,0,C,[Bh],0,3,0,0,["p",AUq(AJS)],UO,0,C,[Bh],0,3,0,0,["p",AUq(AL9)],Vd,
0,C,[Bh],0,3,0,0,["p",AUq(AOf)],Vc,0,C,[Bh],0,3,0,0,["p",AUq(AJu)],Fr,0,Cj,[],12,3,0,AE8,0,Kh,0,C,[],4,3,0,AKd,0,UB,0,C,[],3,3,0,0,0,Mw,0,C,[Bh],0,3,0,0,["p",AUq(ALh)],Mx,0,C,[Bh],0,3,0,0,["p",AUq(AJL)],XY,0,C,[],3,3,0,0,0,Iz,0,C,[],0,3,0,0,0,HK,0,C,[],0,3,0,0,0,EW,0,C,[],0,3,0,0,0,Me,0,EW,[],0,3,0,0,0,Mz,0,EW,[],0,3,0,0,0,P1,0,EW,[],0,3,0,0,0,GS,0,C,[],3,3,0,0,0,Rn,0,C,[],3,3,0,0,0,Gg,0,C,[CI],0,3,0,0,0,Jh,0,C,[],0,3,0,0,0,KF,0,F9,[],0,3,0,0,["jQ",AUt(AIo)],Wb,0,C,[],3,3,0,0,0,SS,0,C,[Wb],0,3,0,0,["cr",AUq(AHn)],UD,
0,C,[],3,3,0,0,0,K1,"JsFileHandle",5,C,[UD],0,3,0,0,["cr",AUq(AKB)],NK,0,C,[UB],0,3,0,0,0,ABb,0,EA,[Ek,Di],0,3,0,0,0,Cz,0,C,[],0,3,0,0,0,NA,0,C,[Bh],0,3,0,0,["p",AUq(ARd)],B7,0,C,[],0,3,0,0,0,IP,0,C,[],0,3,0,0,0,ADX,0,C,[CI],0,3,0,0,["cD",AUr(APn),"jn",AUr(AGv)],Xs,0,C,[FL],0,3,0,0,["lS",AUs(AJh)],Xu,0,C,[FL],0,3,0,0,["lS",AUs(AKY)],EX,0,C,[],0,3,0,0,0]);
$rt_metadata([G2,0,F3,[Il],1,0,0,0,["uh",AUr(ALS)],XJ,0,G2,[Il],0,0,0,0,["ne",AUq(AIm),"ro",AUr(AQ2)],YA,0,C,[],0,3,0,0,["cr",AUq(AJp)],OM,0,C,[Ho],3,3,0,0,0,Ga,0,EN,[OM],1,3,0,0,0,Ka,0,Ga,[],1,0,0,0,0,VC,0,Ka,[],0,0,0,0,0,Ln,0,EA,[],1,0,0,0,0,VA,0,Ln,[],0,0,0,0,0,VB,0,G2,[],0,0,0,0,0,FB,0,C,[],3,3,0,0,0,Vy,0,C,[FB],0,0,0,0,0,Pa,0,C,[FB],3,3,0,0,0,Vz,0,C,[Pa],0,0,0,0,0,X_,0,C,[FL],0,3,0,0,0,Nr,0,C,[FB],0,0,0,0,0,KL,0,KP,[],1,3,0,0,0,Pc,0,KL,[],0,3,0,0,0,Ip,0,D1,[],0,3,0,0,0,Xy,0,C,[Ik],0,3,0,0,["Y",AUr(AG_)],Xw,
0,C,[BN],0,3,0,0,["Y",AUr(AE1)],Xx,0,C,[BN],0,3,0,0,["Y",AUr(AI$)],HQ,0,C,[],0,3,0,0,0,He,0,C,[],3,3,0,0,0,Ky,0,C,[He,Ek],0,0,0,0,["cD",AUr(AHs)],H_,0,Ky,[],0,0,0,0,0,Ks,0,CQ,[Ly],0,3,0,0,["cK",AUr(AG1),"bK",AUq(AJV),"fL",AUq(ANK),"cj",AUs(AMi),"kK",AUs(AAa),"hX",AUr(AFU)],YT,0,CC,[],0,3,0,0,["cK",AUr(AFa),"bK",AUq(AIf),"cj",AUs(AOK)],We,0,CQ,[Cw,En],0,3,0,0,["gj",AUs(AQa),"cj",AUs(AHK),"bK",AUq(AIu),"bR",AUr(AN6),"b5",AUs(AIC),"cL",AUs(AGk),"cp",AUt(ANn)],Xr,0,CQ,[En],0,3,0,0,["gj",AUs(AIF),"bK",AUq(ANH),"cj",
AUs(AGV),"cK",AUr(AOR)],Yc,0,CQ,[Cw],0,3,0,0,["bR",AUr(AKI),"b5",AUs(AQf),"cL",AUs(AFq),"cp",AUt(AN9),"bK",AUq(AOe),"cK",AUr(AHl)],O4,0,CC,[],0,3,0,0,["bK",AUq(AFt),"cj",AUs(APU)],Dc,0,CC,[],0,3,0,0,["bK",AUq(Sd),"cj",AUs(SL)],QW,"SelectFileTest",6,Dc,[],0,3,0,0,0,AD4,"WorkerTest",7,Dc,[],0,3,0,0,0,WW,"RenderTexture",6,Dc,[],0,3,0,0,["cK",AUr(AKT),"bK",AUq(AE5),"cj",AUs(ANF)],Sg,"ScissorDemo",6,Dc,[],0,3,0,0,["bK",AUq(ARk),"cj",AUs(AGN)],OG,0,CC,[],0,3,0,0,["bK",AUq(ARn),"cj",AUs(AI1),"cK",AUr(AHr)],It,"ClipboardTest",
6,Dc,[Cw],0,3,0,0,["bR",AUr(AKI),"b5",AUs(AQf),"cL",AUs(AFq),"cp",AUt(AOE)],P0,0,CC,[],0,3,0,0,["bK",AUq(ARe),"cj",AUs(ALR)],Ww,0,CQ,[En],0,3,0,0,["gj",AUs(AJ3),"bK",AUq(ARE),"cj",AUs(ANY),"cK",AUr(AKP)],Rf,0,Ks,[],0,3,0,0,["fL",AUq(AJ8),"kK",AUs(ALV)],IT,0,C,[],0,3,0,0,0,ACd,0,C,[],3,3,0,0,0,Zo,0,C,[],0,3,0,0,0,H1,0,C,[],0,3,0,0,0,Mh,0,C,[He,Di],0,3,0,0,0,Jo,0,Mh,[],0,0,0,0,0,ADL,0,C,[],0,3,0,0,0,R3,0,C,[Cs],0,3,0,0,["bB",AUr(AL5)]]);
$rt_metadata([R7,0,C,[Y],0,3,0,0,["l",AUr(AQV)],R6,0,C,[EH],0,3,0,0,["gi",AUs(AL6)],R5,0,C,[E8],0,3,0,0,["dj",AUq(AQF)],R4,0,C,[DE],0,3,0,0,["cW",AUt(AP6)],R8,0,C,[Ev],0,3,0,0,["bB",AUr(AJc)],ADd,0,Iz,[],0,3,0,0,0,TR,0,C,[Cw],0,0,0,0,["bR",AUr(ANR),"cp",AUt(APl),"b5",AUs(AIc),"cL",AUs(AHP)],RG,0,C,[Cs],0,3,0,0,["bB",AUr(ANL)],RF,0,C,[Cs],0,3,0,0,["bB",AUr(AQh)],RI,0,C,[EH],0,3,0,0,["gi",AUs(AQN)],RH,0,C,[Bh],0,3,0,0,["p",AUq(AQL)],RE,0,C,[Ev],0,3,0,0,["bB",AUr(AL_)],RD,0,C,[DE],0,3,0,0,["cW",AUt(AJQ)],G8,0,
BZ,[],0,3,0,0,0,U3,0,C,[],0,3,0,0,0,ZK,0,C,[],0,3,0,0,0,Tf,0,C,[Cs],0,3,0,0,["bB",AUr(AOd)],Ti,0,C,[Ev],0,3,0,0,["bB",AUr(AEQ)],AD1,0,C,[],0,3,0,0,["cD",AUr(ARP)],Th,0,C,[Bh],0,3,0,0,["p",AUq(AJy)],Te,0,C,[Bh],0,3,0,0,["p",AUq(APy)],C$,0,C,[],0,3,0,0,0,Ov,0,C,[Cs],0,3,0,0,["bB",AUr(AGL)],Ow,0,C,[Ev],0,3,0,0,["bB",AUr(APQ)],AB9,0,C,[],0,3,0,0,0,Ox,0,C,[DE],0,3,0,0,["cW",AUt(AMX)],ADN,0,C,[],0,3,0,0,0,T5,0,C,[En],0,3,0,0,["gj",AUs(AMB)],T6,0,C,[Cs],0,3,0,0,["bB",AUr(AEW)],Nh,0,C,[],3,3,0,0,0,ADa,0,C,[Nh],0,3,
0,0,0,Wv,0,C,[Cw],0,0,0,0,["cp",AUt(AN9),"b5",AUs(AGF),"cL",AUs(AN1),"bR",AUr(AH8)],SQ,0,C,[DE],0,3,0,0,["cW",AUt(AHq)],PX,0,C,[Cs],0,3,0,0,["bB",AUr(AOH)],Rj,0,C,[Y],0,3,0,0,["l",AUr(AFo)],Ri,0,C,[Y],0,3,0,0,["l",AUr(ARs)],Rh,0,C,[Y],0,3,0,0,["l",AUr(AHM)],Rg,0,C,[Y],0,3,0,0,["l",AUr(AMR)],Re,0,C,[Y],0,3,0,0,["l",AUr(ALZ)],Rd,0,C,[Y],0,3,0,0,["l",AUr(ANZ)],TQ,0,C,[Cw],0,0,0,0,["cL",AUs(AFq),"cp",AUt(AN9),"bR",AUr(APS),"b5",AUs(AL4)],CZ,0,C,[],3,3,0,G7,0,Uf,0,C,[Cw],0,0,0,0,["cp",AUt(AN9),"b5",AUs(AM6),"cL",
AUs(AGH),"bR",AUr(AFA)],NQ,0,C,[DE],0,3,0,0,["cW",AUt(AFs)],St,0,C,[Cs],0,3,0,0,["bB",AUr(APX)],Ss,0,C,[EH],0,3,0,0,["gi",AUs(AH9)],Sq,0,C,[EH],0,3,0,0,["gi",AUs(APm)],Sp,0,C,[E8],0,3,0,0,["dj",AUq(ANm)],Sr,0,C,[E8],0,3,0,0,["dj",AUq(AGx)],RY,0,C,[Cs],0,3,0,0,["bB",AUr(AIe)]]);
$rt_metadata([Ql,0,C,[Cs],0,3,0,0,["bB",AUr(AIO)],Qm,0,C,[Ev],0,3,0,0,["bB",AUr(AEX)],Qn,0,C,[DE],0,3,0,0,["cW",AUt(AOl)],AA3,0,C,[],0,3,0,0,["cD",AUr(AQt)],CW,0,C,[],3,3,0,AMH,0,Ca,0,Cj,[],12,3,0,ABm,0,IE,0,C,[],0,3,0,0,0,Hy,0,C,[],0,3,0,0,0,ACO,0,C,[],0,3,0,0,0,Gt,0,C,[],4,3,0,0,0,AEu,0,C,[],0,3,0,0,0,DR,0,C,[],3,3,0,AJF,0,OE,0,C,[BB],3,3,0,0,0,OX,0,C,[OE],0,3,0,0,["uv",AUs(AIU)],OF,0,C,[BB],3,3,0,0,0,OV,0,C,[OF],0,3,0,0,["uv",AUs(AJ7)],ZC,0,C,[],0,3,0,0,0,YI,0,C,[BB],3,3,0,0,0,Jn,0,C,[Ds],0,3,0,0,["dS",AUq(ACo)],TL,
0,C,[],0,3,0,0,0,DQ,0,C,[],3,3,0,XT,0,Gk,0,C,[],3,3,0,0,0,W$,0,C,[Gk],0,3,0,0,["nr",AUt(AOA)],W_,0,C,[Gk],0,3,0,0,0,V1,0,C,[Cw],0,0,0,0,["bR",AUr(AE2),"cp",AUt(AOC),"b5",AUs(AMF),"cL",AUs(AKe)],Ya,0,C,[Y],0,3,0,0,["l",AUr(AN2)],ABB,0,C,[],0,3,0,0,0,Pt,0,C,[Y],0,3,0,0,["l",AUr(AKm)],Rs,0,C,[Cw],0,0,0,0,["b5",AUs(AQf),"cL",AUs(AFq),"cp",AUt(AN9),"bR",AUr(AE6)],ZR,0,C,[],0,3,0,0,0,Ci,0,Cj,[],12,3,0,ABP,0,ADS,0,C,[],0,3,0,0,0,AAz,0,C,[BB],4,3,0,0,0,AEh,0,C,[],0,3,0,0,0,ADE,0,C,[],3,3,0,0,0,CR,0,C,[BB],1,3,0,0,0,AB1,
0,CR,[],1,3,0,0,0,ACH,0,CR,[],1,3,0,0,0,ZH,0,CR,[],1,3,0,0,0,Z2,0,CR,[],1,3,0,0,0,ADb,0,CR,[],1,3,0,0,0,Ul,0,C,[Bh],0,3,0,0,["p",AUq(ALF)],AAk,0,C,[],4,3,0,0,0,VX,0,C,[Cw],0,0,0,0,["b5",AUs(AQf),"cL",AUs(AFq),"cp",AUt(AN9),"bR",AUr(AO1)],AAv,0,C,[BB],1,3,0,0,0,IG,0,Bo,[],0,3,0,0,0,Oz,0,C,[Y],0,3,0,0,["l",AUr(AFT)],V6,0,C,[EM],0,3,0,0,["dj",AUq(ARh)],AEn,0,C,[],0,3,0,0,0,ABY,0,C,[],3,3,0,0,0]);
$rt_metadata([Lu,0,C,[],3,3,0,0,0,Rk,0,C,[Lu],0,3,0,0,["qE",AUr(AMj)],Qi,0,C,[Y],0,3,0,0,["l",AUr(AQw)],Zb,0,C,[],0,3,0,0,0,Yn,0,C,[],0,3,0,0,0,Na,0,C,[Ds],0,3,0,0,0,SR,0,C,[Y],0,3,0,0,["l",AUr(AHd)],YF,0,C,[],0,3,0,0,0,ADo,0,C,[CI],0,3,0,0,["cD",AUr(AFb),"i9",AUq(AOk),"jn",AUr(ANU)],Tl,0,C,[Y],0,3,0,0,["l",AUr(AHi)],Sn,0,C,[],3,3,0,0,0,FK,0,Ip,[],0,3,0,0,0,W9,0,EF,[],0,3,0,0,0,P8,0,C,[Y],0,3,0,0,["l",AUr(ANi)],Ud,0,C,[Bh],0,3,0,0,["p",AUq(APN)],L2,0,DU,[CI],0,3,0,0,0,Fy,0,C,[],0,0,0,0,0,J2,0,C,[],4,3,0,0,0,Vv,
0,C,[],0,3,0,0,0,LV,0,C,[],1,3,0,0,0,AAQ,0,CR,[],1,3,0,0,0,Qv,0,C,[Y],0,3,0,0,["l",AUr(AJm)],VO,0,C,[Y],0,3,0,0,["l",AUr(ARu)],P_,0,C,[Y],0,3,0,0,["l",AUr(AMq)],EI,0,C,[Ds],0,3,0,0,["dS",AUq(AMV),"iN",AUq(AQz),"iQ",AUt(PL),"eS",AUr(Zs),"jY",AUr(AIb),"jO",AUr(APr),"pm",AUs(ARB),"cp",AUt(AP0),"b5",AUs(APg),"cL",AUs(AQm),"bR",AUr(AMe),"cW",AUt(AH5)],Gz,0,EI,[],0,3,0,0,0,QV,0,Gz,[HM],0,3,0,0,["u2",AUq(AHg),"sn",AUq(ARX),"dS",AUq(ARR),"pm",AUs(AHc),"eS",AUr(AJ0),"jO",AUr(AK_),"jY",AUr(AHN),"uy",AUq(ZJ),"bR",AUr(AQJ),
"b5",AUs(AFi),"cp",AUt(AFx),"gM",AUr(AKH)],VW,0,C,[Bh],0,3,0,0,["p",AUq(ARC)],AAt,0,EI,[],0,3,0,0,["dS",AUq(AFB),"iQ",AUt(AHj),"eS",AUr(AOY),"cp",AUt(AJv),"b5",AUs(AP3),"cL",AUs(AI5),"bR",AUr(AKo),"cW",AUt(AO_),"iN",AUq(AMA)],V3,0,Gz,[],0,3,0,0,["uy",AUq(ANj),"iN",AUq(ALc),"jO",AUr(AJ2),"eS",AUr(AHG),"jY",AUr(AKF)],Pl,0,C,[Y],0,3,0,0,0,Vo,0,C,[Bh],0,3,0,0,["p",AUq(ANE)],Rq,0,C,[Bh],0,3,0,0,["p",AUq(AJK)],XG,0,C,[],0,3,0,0,0,HX,0,C,[],0,3,0,0,0,Ty,0,EI,[],0,3,0,0,0,Ub,0,C,[],0,3,0,0,0,Yg,0,C,[Bh],0,3,0,0,["p",
AUq(AHT)],Vw,0,C,[Y],0,3,0,0,["l",AUr(AQx)],Vx,0,C,[Y],0,3,0,0,["l",AUr(AFJ)],Jq,0,C,[],0,3,0,0,0,DY,0,Bo,[],0,3,0,0,0,ACh,0,EF,[],0,3,0,0,0,SW,0,C,[Y],0,3,0,0,["l",AUr(AIL)],SX,0,C,[Y],0,3,0,0,["l",AUr(ARA)],Sf,0,C,[Y],0,3,0,0,0,NJ,0,C,[Y],0,3,0,0,["l",AUr(AFr)],NH,0,C,[Y],0,3,0,0,["l",AUr(AHu)],Km,0,LV,[],1,3,0,0,0,TC,0,Km,[],0,3,0,0,0]);
$rt_metadata([PN,0,C,[Y],0,3,0,0,["l",AUr(AGy)],T$,0,C,[EM],0,3,0,0,["dj",AUq(AEV)],T_,0,C,[EM],0,3,0,0,["dj",AUq(AON)],SU,0,C,[EM],0,3,0,0,["dj",AUq(APk)],Vn,0,C,[Bh],0,3,0,0,["p",AUq(AMD)],Qx,0,C,[BN],0,3,0,0,["Y",AUr(AEJ)],UJ,0,C,[BN],0,3,0,0,["Y",AUr(AQ5)],MI,0,C,[Y],0,3,0,0,0,AA6,0,C,[Cb],0,3,0,0,0,ZD,0,C,[Cb],0,3,0,0,0,Si,0,C,[Y],0,3,0,0,["l",AUr(AFI)],Sh,0,C,[Y],0,3,0,0,["l",AUr(AGp)],RC,0,C,[Y],0,3,0,0,["l",AUr(AI2)],S4,0,C,[Bh],0,3,0,0,["p",AUq(AJM)],JW,0,DU,[CI],0,3,0,0,0,Lq,0,C,[],4,3,0,0,0,MJ,0,
C,[BN],0,3,0,0,["Y",AUr(ARW)],TY,0,C,[],0,3,0,0,0,Nl,0,C,[Gk],0,3,0,0,["nr",AUt(AQM)],R2,0,DU,[CI],0,3,0,0,0,Fh,0,Bo,[],0,3,0,0,0,Ny,0,C,[],0,3,0,0,0,ADq,0,C,[],0,3,0,0,0,SV,0,C,[],0,0,0,0,0,Zg,0,C,[],3,3,0,0,0,Xo,0,C,[BN],0,3,0,0,["Y",AUr(AO4)],Xn,0,C,[BN],0,3,0,0,["Y",AUr(AHA)],WS,0,C,[BN],0,3,0,0,["Y",AUr(AI9)],WR,0,C,[BN],0,3,0,0,["Y",AUr(AJ6)],YH,0,C,[],1,3,0,0,0,WZ,0,C,[],3,3,0,0,0,Xh,0,C,[Cl],0,3,0,0,["b_",AUr(AIZ)],AAe,0,C,[],0,3,0,0,0,ADM,0,C,[],0,3,0,0,0,Uu,0,C,[Bh],0,3,0,0,["p",AUq(AJG)],Uw,0,C,[Bh],
0,3,0,0,["p",AUq(AOw)],ACr,0,C,[],0,3,0,0,0,IZ,0,Fh,[],0,3,0,0,0,HT,0,Bo,[],0,3,0,0,0,LL,0,Bo,[],0,3,0,0,0,AAE,0,C,[Y],0,3,0,0,0,Sl,0,C,[Bh],0,3,0,0,["p",AUq(AQ$)],Q3,0,C,[Y],0,3,0,0,["l",AUr(AKr)],Sv,0,C,[Bh],0,3,0,0,["p",AUq(AFQ)],Yp,0,C,[],0,3,0,0,0,GY,0,C,[],0,3,0,0,0,ACB,0,Ga,[],0,0,0,0,0,O1,0,EN,[],0,0,0,0,0,WJ,0,Bx,[],0,3,0,0,0,Qg,0,C,[L$],3,3,0,0,0]);
$rt_metadata([Ns,0,C,[Qg],3,3,0,0,0,LO,0,C,[Ns],1,3,0,0,0,AAj,0,LO,[],0,3,0,0,0,Rw,0,C,[Bh],0,3,0,0,["p",AUq(AGr)],Rv,0,C,[Bh],0,3,0,0,["p",AUq(AER)],Ru,0,C,[Bh],0,3,0,0,["p",AUq(AK6)],Rt,0,C,[Bh],0,3,0,0,["p",AUq(APL)],Pn,0,C,[Bh],0,3,0,0,["p",AUq(AO7)],Pp,0,C,[Bh],0,3,0,0,["p",AUq(AJ_)],Pq,0,C,[Bh],0,3,0,0,["p",AUq(AGU)],Xp,0,C,[],3,3,0,0,0,Wc,0,C,[Bh],0,3,0,0,["p",AUq(AFN)],UH,0,C,[GS],0,3,0,0,["lW",AUs(AJR)],Qp,0,C,[Y],0,3,0,0,["l",AUr(AJC)],XA,0,C,[Y],0,3,0,0,["l",AUr(AK5)],Vl,0,C,[Lu],0,3,0,0,["qE",AUr(JN)],SO,
0,C,[Bh],0,3,0,0,["p",AUq(AKG)],SP,0,C,[Bh],0,3,0,0,["p",AUq(ALW)],SN,0,C,[Bh],0,3,0,0,["p",AUq(ANg)],N9,0,C,[Bh],0,3,0,0,["p",AUq(AJA)],N8,0,C,[Bh],0,3,0,0,["p",AUq(APV)],Vf,0,C,[EM],0,3,0,0,["dj",AUq(AHp)],VQ,0,C,[Bh],0,3,0,0,["p",AUq(ANP)],VU,0,C,[Bh],0,3,0,0,["p",AUq(AKO)],VT,0,C,[Bh],0,3,0,0,["p",AUq(AFF)],VR,0,C,[Bh],0,3,0,0,["p",AUq(AHx)],Xk,0,C,[GS],0,3,0,0,["lW",AUs(AGW)],PM,0,C,[BN],0,3,0,0,["Y",AUr(AHO)],IR,0,C,[BB],3,3,0,0,0,ME,0,C,[IR],0,3,0,0,["qD",AUq(AKa)],Mo,0,C,[IR],0,3,0,0,["qD",AUq(AEC)],Pj,
0,C,[Gk],0,3,0,0,0,Xm,0,C,[BN],0,3,0,0,["Y",AUr(AJr)],GQ,0,C,[],0,0,0,0,0,UF,0,GQ,[FB],0,0,0,0,0,Q0,0,GQ,[FB],0,0,0,0,0,QY,0,C,[Di],4,3,0,0,0,NW,0,C,[Y],0,3,0,0,["l",AUr(ARO)],Gn,0,Cj,[],12,0,0,UX,0,S0,0,C,[Y],0,3,0,0,["l",AUr(AKR)],Bz,0,C,[],1,0,0,0,["ch",AUt(HA),"cm",AUu(HO),"hm",AUq(AGh),"M",AUr(AP8),"bQ",AUr(AP5),"e_",AUq(AQY),"d8",AUq(I4)],Uy,0,C,[],32,0,0,ASs,0,O2,0,C,[Y],0,3,0,0,["l",AUr(AHf)],V2,0,C,[Y],0,3,0,0,["l",AUr(AIW)],Yh,0,C,[Bh],0,3,0,0,["p",AUq(AG2)],CN,0,Bz,[],0,0,0,Ma,["c",AUt(AFM),"H",AUr(AF7)],GE,
0,C,[],0,0,0,0,0,IL,0,BD,[],0,3,0,0,0,W8,0,C,[BN],0,3,0,0,["Y",AUr(ANv)],ABQ,0,C,[BB],3,3,0,0,0]);
$rt_metadata([Uj,0,C,[BN],0,3,0,0,["Y",AUr(AM9)],RL,0,CN,[],0,0,0,0,["c",AUt(AFk),"H",AUr(AOG)],XK,0,CN,[],0,0,0,0,["c",AUt(AG5)],Pu,0,CN,[],0,0,0,0,["c",AUt(AGe)],ST,0,CN,[],0,0,0,0,["c",AUt(AFp),"H",AUr(ANh)],Fv,0,CN,[],0,0,0,0,["c",AUt(AQn)],BV,0,Bz,[],1,0,0,0,["c",AUt(ARo),"bW",AUq(APA),"H",AUr(AKi)],ADl,0,BV,[],0,0,0,0,["bq",AUs(AO6),"ch",AUt(AIq),"cm",AUu(AGT),"H",AUr(AFn)],BR,0,Bz,[],0,0,0,0,["c",AUt(AI6),"M",AUr(ANa),"bQ",AUr(AK7),"H",AUr(ANT),"d8",AUq(AGQ)],IX,0,BR,[],0,0,0,0,["c",AUt(AMU),"H",AUr(AOh)],DP,
0,IX,[],0,0,0,0,["c",AUt(AHy),"M",AUr(AN0)],MC,0,DP,[],0,0,0,0,["c",AUt(AM4),"H",AUr(AQb)],Wd,0,DP,[],0,0,0,0,["c",AUt(AF2),"H",AUr(APF)],Q1,0,DP,[],0,0,0,0,["c",AUt(AGK),"H",AUr(ARS)],TF,0,DP,[],0,0,0,0,["c",AUt(AES),"H",AUr(AOv)],Gq,0,BR,[],0,0,0,0,["c",AUt(AFd),"ch",AUt(ALq),"cm",AUu(AOM),"bQ",AUr(AK2),"e_",AUq(ANe),"d8",AUq(AQ1)],GG,0,C,[],1,0,0,0,0,U,0,GG,[],1,0,0,Ou,["db",AUq(AF4),"eC",AUq(AFz),"iK",AUq(APu),"gF",AUq(AQX)],Zv,0,U,[],0,0,0,0,["k",AUr(CY),"db",AUq(CT),"eC",AUq(AIi),"iK",AUq(APT),"cr",AUq(AMg),
"gF",AUq(AIv)],Ja,0,Bo,[],0,3,0,0,0,D0,0,Bz,[],1,0,0,0,["bQ",AUr(AOQ),"H",AUr(AQi),"d8",AUq(ALO)],C2,0,D0,[],0,0,0,0,["c",AUt(AEU)],E2,0,C2,[],0,0,0,0,["c",AUt(AFP)],CP,0,D0,[],0,0,0,0,["c",AUt(AFc)],Ex,0,C2,[],0,0,0,0,["c",AUt(ALw),"M",AUr(ARV)],Wt,0,C2,[],0,0,0,0,["c",AUt(ARg),"ch",AUt(AMd)],X,0,C,[],1,0,0,0,0,De,0,BD,[],0,3,0,0,0,MV,0,GG,[Ek],0,0,0,0,["cr",AUq(AMn)],N1,0,Bz,[],0,0,0,0,["c",AUt(AKK),"H",AUr(AM_)],W4,0,C,[Ek,Di],0,3,0,0,0,MK,0,BR,[],0,0,0,0,0,P3,0,BR,[],0,0,0,0,["c",AUt(AFK),"M",AUr(AMQ),"H",
AUr(AGj),"bQ",AUr(AF3)],Dz,0,BR,[],0,0,0,0,["c",AUt(AH_),"k",AUr(AIJ),"bQ",AUr(AFE),"M",AUr(APo),"H",AUr(AIn)],I9,0,Dz,[],0,0,0,0,["k",AUr(AKj)],Zl,0,BV,[],0,0,0,0,["bq",AUs(AKL)],Ed,0,BV,[],0,0,0,0,["bq",AUs(Ml),"bQ",AUr(ANc)],Oy,0,BR,[],0,0,0,0,["M",AUr(ALv),"c",AUt(AEI),"bQ",AUr(AGa),"H",AUr(APY)],Ej,0,BV,[],0,0,0,0,["bW",AUq(AKu),"bq",AUs(AJf),"ch",AUt(AH6),"cm",AUu(AKA),"bQ",AUr(APP)],ADR,0,BV,[],0,0,0,0,["bq",AUs(AED)],Yu,0,BV,[],0,0,0,0,["bq",AUs(AE7)],Fc,0,BR,[],0,0,0,0,["M",AUr(AQ0),"c",AUt(AMT),"bQ",
AUr(AKM),"H",AUr(AN3)],Xl,0,Fc,[],0,0,0,0,0,TS,0,Fc,[],0,0,0,0,0,Ye,0,CP,[],0,0,0,0,["c",AUt(AG$)],Pm,0,CP,[],0,0,0,0,["c",AUt(AL3)],FN,0,CP,[],0,0,0,0,["c",AUt(APj),"M",AUr(AQs)],O3,0,FN,[],0,0,0,0,["c",AUt(AKx),"M",AUr(AMo)],E_,0,CP,[],0,0,0,0,["c",AUt(ARL)],M5,0,E_,[],0,0,0,0,["c",AUt(AJO)]]);
$rt_metadata([Rp,0,CP,[],0,0,0,0,["c",AUt(AQ7)],Qb,0,FN,[],0,0,0,0,["c",AUt(AGl)],U0,0,E_,[],0,0,0,0,["c",AUt(AFu)],Rr,0,D0,[],0,0,0,0,["c",AUt(ARv),"ch",AUt(APw)],N$,0,D0,[],0,0,0,0,["c",AUt(ANf),"ch",AUt(AEM)],EK,0,C,[],1,0,0,0,0,Yf,0,C2,[],0,0,0,0,["c",AUt(AFw)],Wo,0,Ex,[],0,0,0,0,["c",AUt(AL1)],OR,0,E2,[],0,0,0,0,["c",AUt(AOU)],P7,0,C2,[],0,0,0,0,["c",AUt(AM8)],T7,0,Ex,[],0,0,0,0,["c",AUt(AFD)],Q2,0,E2,[],0,0,0,0,["c",AUt(AO$)],Kl,0,Bz,[],4,0,0,0,["c",AUt(AK4),"H",AUr(AJ5)],Z4,0,Bz,[],0,0,0,0,["c",AUt(AF1),
"H",AUr(AF$)],N6,0,Bz,[],0,0,0,0,["c",AUt(AKn),"H",AUr(ARF)],W6,0,Bz,[],4,0,0,0,["c",AUt(ANN),"H",AUr(AGZ)],WP,0,Bz,[],0,0,0,0,["c",AUt(AMM),"H",AUr(AEA)],Nf,0,Bz,[],0,0,0,0,["c",AUt(AGP),"H",AUr(AIY)],ADG,0,BR,[],0,0,0,0,["c",AUt(ARb),"M",AUr(AGc),"hm",AUq(AMt),"H",AUr(AGb)],Zt,0,BR,[],4,0,0,0,["c",AUt(AMC),"M",AUr(AOD),"hm",AUq(AEx),"H",AUr(ARl)],ADx,0,Bz,[],4,0,0,0,["c",AUt(AKQ),"H",AUr(AIR)],ABL,0,Bz,[],0,0,0,0,["c",AUt(AMK),"H",AUr(AIG)],Yr,0,Bz,[],0,0,0,0,["c",AUt(AJT),"H",AUr(AG4)],G1,0,BR,[],0,0,0,0,
["c",AUt(AFy),"M",AUr(ANX),"H",AUr(AOi)],ADC,0,G1,[],0,0,0,0,["c",AUt(AG9),"ch",AUt(AP$),"cm",AUu(AFl),"bQ",AUr(ALU)],AAO,0,G1,[],0,0,0,0,["c",AUt(ALk)],N0,0,Ge,[HU],0,3,0,0,["k_",AUu(AIw),"kl",AUt(AF5),"hs",AUr(AGt),"lI",AUs(APz)],Rz,0,BV,[],0,0,0,0,["bq",AUs(AHv),"ch",AUt(AFW),"cm",AUu(AIV),"bQ",AUr(AJs)],Yq,0,BV,[],0,0,0,0,["bq",AUs(ALs)],M_,0,BV,[],0,0,0,0,["bq",AUs(AOW)],G0,0,C,[],4,0,0,AOt,0,Mt,0,BV,[],0,0,0,0,["bq",AUs(AO3)],KU,0,BR,[],0,0,0,0,["M",AUr(AM2),"c",AUt(AG0),"ch",AUt(AJq),"cm",AUu(AHD),"bQ",
AUr(AFj),"H",AUr(APG)],Lf,0,BR,[],0,0,0,0,["M",AUr(AGs),"c",AUt(AET),"ch",AUt(ANo),"cm",AUu(AOV),"bQ",AUr(AHw),"H",AUr(ANz)],DT,0,BV,[],0,0,0,0,["bq",AUs(AOj),"ch",AUt(AMh),"cm",AUu(AGq),"bQ",AUr(AN8)],Vp,0,EK,[],0,0,0,0,["hd",AUr(AGE),"r9",AUs(AOc)],Vq,0,EK,[],0,0,0,0,["hd",AUr(APb),"r9",AUs(AQU)],ACC,0,C,[],0,0,0,0,0,YJ,0,C,[],0,0,0,0,0,KR,0,X,[],0,0,0,0,["B",AUq(AAW)],JS,0,X,[],0,0,0,0,["B",AUq(ABF)],ACw,0,X,[],0,0,0,0,["B",AUq(AOF)],AC4,0,X,[],0,0,0,0,["B",AUq(API)],AC8,0,X,[],0,0,0,0,["B",AUq(AIa)],KN,
0,X,[],0,0,0,0,["B",AUq(Zx)],Lo,0,KN,[],0,0,0,0,["B",AUq(AAq)],AEl,0,X,[],0,0,0,0,["B",AUq(AJo)],Mk,0,Lo,[],0,0,0,0,["B",AUq(Ym)],AA$,0,Mk,[],0,0,0,0,["B",AUq(ALP)],ABx,0,X,[],0,0,0,0,["B",AUq(AHo)]]);
$rt_metadata([ZX,0,X,[],0,0,0,0,["B",AUq(ALM)],ZE,0,X,[],0,0,0,0,["B",AUq(AQW)],AC_,0,X,[],0,0,0,0,["B",AUq(AMp)],AEw,0,X,[],0,0,0,0,["B",AUq(AEK)],ACD,0,X,[],0,0,0,0,["B",AUq(AJY)],ACq,0,X,[],0,0,0,0,["B",AUq(AOn)],ADp,0,X,[],0,0,0,0,["B",AUq(AHk)],Y2,0,X,[],0,0,0,0,["B",AUq(AHL)],YG,0,X,[],0,0,0,0,["B",AUq(AQR)],ACJ,0,X,[],0,0,0,0,["B",AUq(AEE)],ACV,0,X,[],0,0,0,0,["B",AUq(AKU)],AAi,0,X,[],0,0,0,0,["B",AUq(AHV)],ABC,0,X,[],0,0,0,0,["B",AUq(AI0)],AD2,0,X,[],0,0,0,0,["B",AUq(AKW)],ACU,0,X,[],0,0,0,0,["B",AUq(AP1)],AAM,
0,X,[],0,0,0,0,["B",AUq(ANI)],AAg,0,X,[],0,0,0,0,["B",AUq(AMk)],AEr,0,X,[],0,0,0,0,["B",AUq(AOz)],Jj,0,X,[],0,0,0,0,["B",AUq(ABz)],ADr,0,Jj,[],0,0,0,0,["B",AUq(AL$)],ABc,0,KR,[],0,0,0,0,["B",AUq(AFV)],AAb,0,JS,[],0,0,0,0,["B",AUq(AJb)],ZL,0,X,[],0,0,0,0,["B",AUq(AK$)],Z7,0,X,[],0,0,0,0,["B",AUq(AQD)],AA4,0,X,[],0,0,0,0,["B",AUq(AIA)],AA_,0,X,[],0,0,0,0,["B",AUq(AEF)],ZS,0,C,[],4,0,0,0,0,Zj,0,C,[],4,3,0,0,0,Ng,0,C,[],0,3,0,0,0,ACP,0,C,[],0,3,0,0,0,AAK,0,C,[],4,3,0,0,0,Zp,0,C,[IN],0,3,0,0,0,Tt,0,C,[Y],0,3,0,0,
["l",AUr(ARH)],Q9,0,C,[Y],0,3,0,0,["l",AUr(AIx)],YR,0,C,[],0,3,0,0,0,ML,0,C,[Y],0,3,0,0,["l",AUr(AFe)],Py,0,C,[Y],0,3,0,0,0,Qd,0,C,[Y],0,3,0,0,0,Wr,0,U,[],0,0,0,0,["k",AUr(AIh)],Wp,0,U,[],0,0,0,0,["k",AUr(AE$)],Oe,0,U,[],0,0,0,0,["k",AUr(AK0),"cr",AUq(AI3)],Ok,0,U,[],0,0,0,0,["k",AUr(AOm)],Oi,0,U,[],0,0,0,0,["k",AUr(AO2)],Oj,0,U,[],0,0,0,0,["k",AUr(ALr)],On,0,U,[],0,0,0,0,["k",AUr(AHQ)],Oo,0,U,[],0,0,0,0,["k",AUr(AEy)],Ol,0,U,[],0,0,0,0,["k",AUr(AI8)],Om,0,U,[],0,0,0,0,["k",AUr(ALu)],Op,0,U,[],0,0,0,0,["k",
AUr(AQc)],Oq,0,U,[],0,0,0,0,["k",AUr(AHe)]]);
$rt_metadata([Od,0,U,[],0,0,0,0,["k",AUr(ARY)],OY,0,U,[],0,0,0,0,["k",AUr(AJa)],Oa,0,U,[],0,0,0,0,["k",AUr(AHb)],Ob,0,U,[],0,0,0,0,["k",AUr(AIP)],Oh,0,U,[],0,0,0,0,["k",AUr(AKq)],N_,0,U,[],0,0,0,0,["k",AUr(APO)],Of,0,U,[],0,0,0,0,["k",AUr(AF8)],Og,0,U,[],0,0,0,0,["k",AUr(ANx)],LN,0,C,[],3,3,0,0,0,Su,0,C,[LN],4,3,0,0,0,ADj,0,C,[GS],0,3,0,0,0,V5,0,C,[],0,3,0,0,0,C0,0,C,[],3,3,0,ABE,0,Cg,0,Cj,[],12,3,0,Z5,0,Du,0,C,[],3,3,0,AOo,0,N5,0,C,[],0,3,0,0,0,N2,0,C,[Y],0,3,0,0,["l",AUr(AOy)],MZ,0,Gq,[],0,0,0,0,["ch",AUt(AID),
"cm",AUu(ARJ),"e_",AUq(AGY)],PW,0,Bo,[],0,3,0,0,0,Xc,0,Bo,[],0,3,0,0,0,Vk,0,FK,[],0,3,0,0,0,PK,0,FK,[],0,3,0,0,0,X5,0,Bo,[],0,3,0,0,0,Vb,0,C,[],0,3,0,0,0,Tv,0,C,[Bh],0,3,0,0,0,SE,0,C,[Y],0,3,0,0,0,SD,0,C,[Y],0,3,0,0,0,ACF,0,C,[],3,3,0,0,0,Z9,0,C,[],0,3,0,0,0,Rx,0,C,[HJ],0,3,0,0,0,Vh,0,C,[LN],0,0,0,0,0,VK,0,C,[Bh],0,3,0,0,["p",AUq(AQo)],QD,0,C,[],0,3,0,0,0,H0,0,C,[],0,3,0,0,0,S1,0,U,[],0,0,0,0,["k",AUr(AQl)],MH,0,U,[],0,0,0,0,["k",AUr(AFR)],RU,0,U,[],0,0,0,0,["k",AUr(AFC)],RT,0,U,[],0,0,0,0,["k",AUr(AIz)],WX,
0,U,[],0,0,0,0,["k",AUr(AKb)],OL,0,U,[],0,0,0,0,["k",AUr(AQp)],NV,0,U,[],0,0,0,0,["k",AUr(AMW)],Qs,0,U,[],0,0,0,0,["k",AUr(AOs)],MA,0,U,[],0,0,0,0,["k",AUr(ARj)],MF,0,U,[],0,0,0,0,["k",AUr(AHB)],NF,0,U,[],0,0,0,0,["k",AUr(AQB)],O9,0,U,[],0,0,0,0,["k",AUr(ALJ)],Pg,0,U,[],0,0,0,0,["k",AUr(ANV)],TO,0,U,[],0,0,0,0,["k",AUr(AQd)],Sw,0,U,[],0,0,0,0,["k",AUr(AQ4)],MT,0,U,[],0,0,0,0,["k",AUr(AHm)]]);
$rt_metadata([L5,0,U,[],0,0,0,0,["k",AUr(AMZ)],RN,0,L5,[],0,0,0,0,["k",AUr(APp)],PE,0,C,[IR],0,3,0,0,["qD",AUq(ALf)],VS,0,C,[BN],0,3,0,0,["Y",AUr(ANM)],VV,0,C,[BN],0,3,0,0,["Y",AUr(AMu)],TA,0,C,[BN],0,3,0,0,["Y",AUr(AJi)],TD,0,C,[BN],0,3,0,0,["Y",AUr(AE4)],UE,0,C,[BN],0,3,0,0,["Y",AUr(ALa)],XV,0,C,[Y],0,3,0,0,["l",AUr(APE)],XW,0,C,[Y],0,3,0,0,["l",AUr(AL2)],XU,0,C,[Y],0,3,0,0,["l",AUr(ARZ)],Y$,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.Le=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","[",", ","]","Either src or dest is null","Illegal argument javaObject instanceof ","#wasm","#diffDemo","ClassL.java","ClassR.java","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ",
"#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = vTex;\n  gl_Position = pos;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = uTexTransform.xy + vTex * uTexTransform.zw;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ",
"Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","sendToDiff","DiffUtils.findDiffs","selectScene ","CodiconDemo","DemoEdit0","RenderTexture","ScissorDemo","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","WindowDemo","Diff","many","test","FindUsagesDemo","DemoScene1","ClipboardTest",
"RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","Consolas","Segoe UI","#e3c8ab","#39322b","unsupported","supported","ReadClipboardText is ","","","w = ",", lineHeight = ","example.java","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
+"(int field) {\n    return field + this.field;\n  }\n\n  public interface A {\n    int sumField(int field);\n\n    default void foo() {\n      sumField(10);\n    }\n  }\n}\n","java","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","parser >","open ...","Development >","text","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ",
"\n","\r","Full file parsed in ","ms","change model language: from = "," to = ","opening file ",".java","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing","CppParser.parse","JavaScriptParser.parseBytes","JavaParser.parse","EditorComponent::setDiffModel","  diffModel.length = ","  model.document.length() = ","ns-resize","ew-resize","trying to display with unknown screen size and dpr",".cpp",
".cc",".cxx",".hpp",".c",".h",".js","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","\\n","Courier New","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","main.java","private static void foo (...);","FindUsagesView1",
"Window 1: ","scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","#606366","#2B2B2B","#A4A3A3","#323232","#616161","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ",
"float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","toolbar size is unknown","onLeave item ",", item ","onContextMenu","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","  methodWithStringResult = ",
"  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile","#A9B7C6","#344134","#40332B"," on Copy","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#BBBBBB","#2E436E","#2E426D","#4D4E51",
"jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#3C3F41","#4B6EAF","#787878","onEnter item ","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","nwse-resize","nesw-resize"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","/","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","Int","Iter","VP","Rep","No definition or usages","Expected "," ints to read, but ",
" read","readClipboardText error: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart",
"Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics",
"Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics",
"BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo",
"HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks",
"CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Viewport parsed in "," ints to write, but "," written","#EBECF0","#F8F9FB","#edebfc","#FCE8F4","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808",
"Verdana","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AGn(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Cq=Long_add;var Kn=Long_sub;var BQ=Long_mul;var Dp=Long_div;var MM=Long_rem;var ASI=Long_or;var CV=Long_and;var AYd=Long_xor;var Fn=Long_shl;var Gl=Long_shr;var D5=Long_shru;var AS3=Long_compare;var Fa=Long_eq;var AYe=Long_ne;var AHY=Long_lt;var Pw=Long_le;var AHF=Long_gt;var Z1=Long_ge;var AYf=Long_not;var ATc=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(ATg);
main.javaException=$rt_javaException;
(function(){var c;c=TV.prototype;c.f=c.Y;c=TT.prototype;c.f=c.Y;c=M8.prototype;c.f=c.Y;c=AAs.prototype;c.getLength=c.Gb;c.get=c.GT;c=NG.prototype;c.f=c.Y;c=YP.prototype;c.dispatchEvent=c.Bo;c.addEventListener=c.EM;c.removeEventListener=c.GY;c.getLength=c.By;c.get=c.yx;c.addEventListener=c.zT;c.removeEventListener=c.Dl;c=VM.prototype;c.onAnimationFrame=c.Dn;c=VG.prototype;c.f=c.uv;c=VD.prototype;c.handleEvent=c.b_;c=VE.prototype;c.f=c.Y;c=Wz.prototype;c.handleEvent=c.b_;c=WA.prototype;c.handleEvent=c.b_;c=WB.prototype;c.handleEvent
=c.b_;c=WC.prototype;c.handleEvent=c.b_;c=WD.prototype;c.handleEvent=c.b_;c=WE.prototype;c.handleEvent=c.b_;c=WF.prototype;c.handleEvent=c.b_;c=WG.prototype;c.handleEvent=c.b_;c=WH.prototype;c.handleEvent=c.b_;c=WI.prototype;c.handleEvent=c.b_;c=XZ.prototype;c.handleEvent=c.b_;c=X0.prototype;c.handleEvent=c.b_;c=X1.prototype;c.handleEvent=c.b_;c=X2.prototype;c.handleEvent=c.b_;c=Ut.prototype;c.handleEvent=c.b_;c=XB.prototype;c.f=c.Y;c=XC.prototype;c.f=c.Y;c=Ne.prototype;c.f=c.Y;c=Nd.prototype;c.f=c.Y;c=Nc.prototype;c.f
=c.Y;c=Nb.prototype;c.f=c.Y;c=Nz.prototype;c.accept=c.Hr;c=Xy.prototype;c.f=c.Y;c=Xw.prototype;c.f=c.Y;c=Xx.prototype;c.f=c.Y;c=OX.prototype;c.f=c.uv;c=OV.prototype;c.f=c.uv;c=Qx.prototype;c.f=c.Y;c=UJ.prototype;c.f=c.Y;c=MJ.prototype;c.f=c.Y;c=Xo.prototype;c.f=c.Y;c=Xn.prototype;c.f=c.Y;c=WS.prototype;c.f=c.Y;c=WR.prototype;c.f=c.Y;c=Xh.prototype;c.handleEvent=c.b_;c=PM.prototype;c.f=c.Y;c=ME.prototype;c.onTimer=c.qD;c=Mo.prototype;c.onTimer=c.qD;c=Xm.prototype;c.f=c.Y;c=W8.prototype;c.f=c.Y;c=Uj.prototype;c.f
=c.Y;c=PE.prototype;c.onTimer=c.qD;c=VS.prototype;c.f=c.Y;c=VV.prototype;c.f=c.Y;c=TA.prototype;c.f=c.Y;c=TD.prototype;c.f=c.Y;c=UE.prototype;c.f=c.Y;})();
})(this);
