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
JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage.toString();}}return this[defaultMessage];}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e)
{return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item)
{++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName
+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if
(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val, -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val
|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};Long_fromInt=function(val){return $rt_globals.BigInt(val);};Long_fromNumber=function(val)
{return $rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv
=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function()
{superclass.call(this);};}function $rt_setCloneMethod(target, f){target.eV=f;}
function $rt_cls(cls){return PD(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Eo(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bW.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AGm(t);}
function $rt_throwableCause(t){return AGq(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ALe());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ALf(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ALg());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BB=$rt_compare;var ALh=$rt_nullCheck;var E=$rt_cls;var T=$rt_createArray;var Rk=$rt_isInstance;var ALi=$rt_nativeThread;var ALj=$rt_suspending;var ALk=$rt_resuming;var ALl=$rt_invalidPointer;var B=$rt_s;var Bl=$rt_eraseClinit;var Bd=$rt_imul;var DH=$rt_wrapException;var ALm=$rt_checkBounds;var ALn=$rt_checkUpperBound;var ALo=$rt_checkLowerBound;var ALp=$rt_wrapFunction0;var ALq=$rt_wrapFunction1;var ALr=$rt_wrapFunction2;var ALs=$rt_wrapFunction3;var ALt=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var Vr=$rt_createCharArrayFromData;var AJ8=$rt_createByteArrayFromData;var ALu=$rt_createShortArrayFromData;var Et=$rt_createIntArrayFromData;var ALv=$rt_createBooleanArrayFromData;var ALw=$rt_createFloatArrayFromData;var ALx=$rt_createDoubleArrayFromData;var AAb=$rt_createLongArrayFromData;var ALy=$rt_createBooleanArray;var Ev=$rt_createByteArray;var ALz=$rt_createShortArray;var BP=$rt_createCharArray;var BQ=$rt_createIntArray;var AKX=$rt_createLongArray;var YI=$rt_createFloatArray;var ALA
=$rt_createDoubleArray;var BB=$rt_compare;var ALB=$rt_castToClass;var ALC=$rt_castToInterface;var ALD=Long_toNumber;var W=Long_fromInt;var ALE=Long_fromNumber;var BZ=Long_create;var DQ=Long_ZERO;var ALF=Long_hi;var D4=Long_lo;
function C(){this.$id$=0;}
function ALG(){var a=new C();Xs(a);return a;}
function Xs(a){}
function CW(a){return PD(a.constructor);}
function OL(a,b){return a!==b?0:1;}
function Z1(a){var b,c,d,e,f,g,h,i,j;b=Km(a);if(!b)c=B(0);else{d=(((32-K8(b)|0)+4|0)-1|0)/4|0;e=BP(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=F2(b>>>g&15,16);g=g-4|0;h=i;}c=Eo(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function Km(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ADw(a){var b,c,d;if(!Rk(a,DO)&&a.constructor.$meta.item===null){b=new Q5;V(b);J(b);}b=YO(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function NY(){var a=this;C.call(a);a.o3=0;a.ms=null;}
function AKk(b){var c,d,e,f,g,h,i,j,k;XO();Xp();Tz();WR();UP();V1();UO();Ye();Wx();Vu();Tn();Xv();Tq();WC();W_();V9();WE();VF();UW();Ud();Ve();Vg();TI();Yn();Ya();UJ();Up();X7();c=(TL()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Mc(B(2),B(3));else{d=new NY;Ct(d);e=new PO;e.nG=d;f=new Lc;c=new $rt_globals.Worker("teavm/worker.js");g=new SX;g.jA=c;g.jz=e;g.jy=f;e=Bc(g,"f");c.onmessage=e;b=T(Jt,4).data;b[0]=HT(B(4),B(5),400);b[1]=HT(B(6),
B(7),400);b[2]=HT(B(8),B(5),700);b[3]=HT(B(9),B(7),700);g=new $rt_globals.Array();h=b.length;i=0;while(i<h){c=b[i];e=c.nl;f=c.mp;j=new M;O(j);Bv(G(G(j,B(10)),f),41);j=N(j);f=c.mk;k=c.lb;c=ABV($rt_ustr(f),k);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(j),c)).load();g.push(c);i=i+1|0;}e=$rt_globals.Promise.all(g);Ct(d);c=new PP;c.od=d;g=new PN;e.then(Bc(c,"f"),Bc(g,"f"));}}
function VJ(b){var c,d,e,f,g,h,i,j,k,l,m;c=new OH;d=new M8;e=new Q4;e.k7=c;c.m3=e;f=new Q1;f.pc=c;c.pm=f;g=new MG;g.f7=AGz();h=T(Cs,0);g.oq=h;g.dX=h;g.h9=1;g.gJ=0;g.cL=f;c.iO=g;g=new Q2;g.mT=c;c.ok=new $rt_globals.ResizeObserver(Bc(g,"f"));e=new QZ;e.kK=c;c.j2=e;c.f$=1;c.i8=AGz();c.l$=b;g=new Q0;g.os=c;e=Bc(g,"f");b.onmessage=e;e=VE();b.postMessage(e);c.jW=(DV()).getElementById("canvasDiv");b=TL();i=0;b.tabIndex=i;g=b.style;g.setProperty("width","100%");g.setProperty("height","100%");g.setProperty("outline",
"none");c.cE=b;c.jW.appendChild(b);e=c.cE;g=AE4(!!0,!!0,!!1,!!1);b=e.getContext("webgl2",g);if(b===null)Mc(B(2),B(11));else{c.nn=AKW(c.cE,c.iO);i=new QT;e=c.pm;g=new Qc;i.c6=new Br;i.d0=0;i.mw=g;f=$rt_str(b.getParameter(7938));j=new M;O(j);G(G(j,B(12)),f);$rt_globals.console.info($rt_ustr(N(j)));i.bt=b;i.bM=Kj(g,4,4);i.f9=AFa(b);i.rd=Iy(f,B(13));g=new MY;g.db=b;i.nS=g;h=T(Dw,6);k=h.data;g=new Rm;Lu();Jo(g,b,B(14),B(15),ALH);f=g.bL;g.or=b.getUniformLocation(f,"uColor");i.g1=g;k[0]=g;f=AJo(b,B(16));i.rF=f;k[1]
=f;l=new Np;Jo(l,b,B(14),B(17),ALH);i.rp=l;k[2]=l;j=new QB;PS(j,b,B(18));l=j.bL;j.qn=b.getUniformLocation(l,"uContrast");i.qy=j;k[3]=j;g=AJT(b);i.eB=g;k[4]=g;g=AKR(b);i.fw=g;k[5]=g;i.rx=h;So(b,B(19));i.rq=new Qb;i.qZ=e;c.ez=i;AF2(c.ok,c.cE,YV());e=$rt_globals.window;i=c.j2;e.addEventListener("resize",Bc(i,"handleEvent"));c.d8=U2(d,AKe(c.ez,c.iO,c));m=F$(c);$rt_globals.console.info("time start: "+m);Pb(c);}W2(c);}
var KL=F(0);
var Ki=F(0);
function RB(){var a=this;C.call(a);a.hC=null;a.dK=null;}
function PD(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new RB;c.dK=b;d=c;b.classObject=d;}return c;}
function ADJ(a){var b,c;b=Km(a);c=new M;O(c);S(G(c,B(20)),b);return N(c);}
function GB(a){if(a.hC===null)a.hC=$rt_str(a.dK.$meta.name);return a.hC;}
function Gq(a){return a.dK.$meta.primitive?1:0;}
function GE(a){return PD(a.dK.$meta.item);}
function QD(a){return PD(a.dK.$meta.superclass);}
var Ui=F();
function Bc(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function I5(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var T5=F();
function YO(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Wp(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Wp(d[e],c))return 1;e=e+1|0;}return 0;}
var CQ=F(0);
var Cq=F(0);
var G8=F(0);
function BA(){var a=this;C.call(a);a.bW=null;a.fO=0;}
var ALI=null;function Eo(a){var b=new BA();F9(b,a);return b;}
function HR(a,b,c){var d=new BA();S3(d,a,b,c);return d;}
function F9(a,b){var c,d,e,f;b=b.data;c=b.length;d=BP(c);e=d.data;a.bW=d;f=0;while(f<c){e[f]=b[f];f=f+1|0;}}
function S3(a,b,c,d){var e,f,g;e=BP(d);f=e.data;a.bW=e;g=0;while(g<d){f[g]=b.data[g+c|0];g=g+1|0;}}
function L(a,b){var c,d;if(b>=0){c=a.bW.data;if(b<c.length)return c[b];}d=new F0;V(d);J(d);}
function I(a){return a.bW.data.length;}
function Fx(a){return a.bW.data.length?0:1;}
function P9(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Iy(a,b){if(a===b)return 1;return P9(a,b,0);}
function GL(a,b,c){var d,e,f,g,h;d=Bi(0,c);if(b<65536){e=b&65535;while(true){f=a.bW.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=GD(b);h=G2(b);while(true){f=a.bW.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function E6(a,b,c){var d,e,f,g,h;d=Ba(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bW.data[d]==e)break;d=d+(-1)|0;}return d;}f=GD(b);g=G2(b);while(true){if(d<1)return (-1);h=a.bW.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function UH(a,b,c){var d,e,f;d=Bi(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function Ci(a,b,c){var d;if(b<=c)return HR(a.bW,b,c-b|0);d=new Bp;V(d);J(d);}
function Dj(a,b){return Ci(a,b,I(a));}
function MN(a,b,c){return Ci(a,b,c);}
function Fk(a,b){var c,d,e,f,g,h;if(Fx(b))return a;c=BP(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Eo(c);}
function QC(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}Bv(d,L(a,f));}f=f+1|0;}G(d,Dj(a,f));return N(d);}
function Z0(a){return a;}
function DG(a){var b,c,d,e,f;b=a.bW.data;c=BP(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Ce(b){return b===null?B(21):b.bz();}
function C8(b){var c;c=new M;O(c);return N(S(c,b));}
function BM(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BA))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function Wq(a){var b,c,d,e;a:{if(!a.fO){b=a.bW.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.fO=(31*a.fO|0)+e|0;d=d+1|0;}}}return a.fO;}
function R5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new FD;Bb(b,B(22));J(b);}ALJ=1;d=new Nu;d.hs=T(Cu,10);d.eD=(-1);d.dq=(-1);d.ba=(-1);e=new FI;e.dn=1;e.bh=b;e.O=BP(I(b)+2|0);DJ(DG(b),0,e.O,0,I(b));f=e.O.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.mN=g;e.ev=0;Ep(e);Ep(e);d.e=e;d.cu=0;d.ip=SJ(d,(-1),0,null);if(!CR(d.e)){b=new G6;h=d.e;Hv(b,B(23),h.bh,h.cg);J(b);}if(d.kf)d.ip.c8();b=CV();h=new Op;h.f8=(-1);h.hJ=(-1);h.p3=d;h.oi=d.ip;h.gi=a;h.f8=0;g=I(a);h.hJ=g;e=new QE;i=h.f8;j=d.eD;k=d.dq+1|0;l=d.ba+1|0;e.fB
=(-1);m=j+1|0;e.kP=m;e.cD=BQ(m*2|0);f=BQ(l);e.gT=f;HK(f,(-1));if(k>0)e.ib=BQ(k);HK(e.cD,(-1));SC(e,a,i,g);h.bQ=e;e.dW=1;n=0;m=0;if(!I(a)){f=T(BA,1);f.data[0]=B(23);}else{while(true){l=I(h.gi);if(!Tp(h.bQ))l=h.hJ;e=h.bQ;if(e.c4>=0&&U8(e)==1){e=h.bQ;e.c4=Hh(e);if(Hh(h.bQ)==WQ(h.bQ)){e=h.bQ;e.c4=e.c4+1|0;}g=h.bQ.c4;g=g<=l&&Kp(h,g)?1:0;}else g=Kp(h,h.f8);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Cg(b,MN(a,m,X1(h)));m=UR(h);n=g;}a:{Cg(b,MN(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(BS(b,g)))break a;FR(b,
g);}}if(g<0)g=0;f=H7(b,T(BA,g));}return f;}
function ABN(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Ba(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function XO(){ALI=new Lj;}
function Fz(){var a=this;C.call(a);a.fv=null;a.ia=null;a.gA=0;a.gX=0;}
function ALK(){var a=new Fz();V(a);return a;}
function ALL(a){var b=new Fz();Bb(b,a);return b;}
function V(a){a.gA=1;a.gX=1;}
function Bb(a,b){a.gA=1;a.gX=1;a.fv=b;}
function ABD(a){return a;}
function AGm(a){return a.fv;}
function AGq(a){var b;b=a.ia;if(b===a)b=null;return b;}
var D9=F(Fz);
var F3=F(D9);
var Vk=F(F3);
var Df=F();
function Ez(){Df.call(this);this.fH=0;}
var ALM=null;var ALN=null;function XG(a){var b=new Ez();HY(b,a);return b;}
function HY(a,b){a.fH=b;}
function HE(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!Fx(b)){a:{d=0;e=0;switch(L(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==I(b)){b=new C2;V(b);J(b);}while(e<I(b)){g=e+1|0;h=L7(L(b,e));if(h<0){i=new C2;j=new M;O(j);G(G(j,B(24)),b);Bb(i,N(j));J(i);}if(h>=c){i=new C2;j=new M;O(j);G(G(S(G(j,B(25)),c),B(26)),b);Bb(i,N(j));J(i);}f=Bd(c,f)+h|0;if(f<0){if(g==I(b)&&f==(-2147483648)&&d)return (-2147483648);i=new C2;j=new M;O(j);G(G(j,B(27)),b);Bb(i,N(j));J(i);}e=g;}if(d)f= -f|0;return f;}b
=new C2;Bb(b,B(28));J(b);}b=new C2;i=new M;O(i);S(G(i,B(29)),c);Bb(b,N(i));J(b);}
function E5(b){var c,d;if(b>=(-128)&&b<=127){a:{if(ALN===null){ALN=T(Ez,256);c=0;while(true){d=ALN.data;if(c>=d.length)break a;d[c]=XG(c-128|0);c=c+1|0;}}}return ALN.data[b+128|0];}return XG(b);}
function JI(a){var b;b=a.fH;return (K0(AK3(20),b,10)).bz();}
function K8(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function GO(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Ia(b,c){var d;d=c&31;return b<<d|b>>>(32-d|0);}
function N6(a,b){return BB(a.fH,b.fH);}
function Xp(){ALM=E($rt_intcls());}
function Fo(){var a=this;C.call(a);a.s=null;a.F=0;}
function ALO(){var a=new Fo();O(a);return a;}
function AK3(a){var b=new Fo();Eq(b,a);return b;}
function O(a){Eq(a,16);}
function Eq(a,b){a.s=BP(b);}
function K0(a,b,c){return Vy(a,a.F,b,c);}
function Vy(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)B0(a,b,b+1|0);else{B0(a,b,b+2|0);f=a.s.data;g=b+1|0;f[b]=45;b=g;}a.s.data[b]=F2(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Bd(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;B0(a,b,b+i|0);if(e)e=b;else{f=a.s.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.s.data;b=e+1|0;f[e]=F2(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function Wf(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BB(c,0.0);if(!d){B0(a,b,b+3|0);e=a.s.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){B0(a,b,b+4|0);e=a.s.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){B0(a,b,b+3|0);e=a.s.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B0(a,b,b+8|0);d=b;}else{B0(a,b,b+9|0);e=a.s.data;d=b+1|0;e[b]=45;}e=a.s.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=ALP;V$(c,f);d=f.hP;g=f.hx;h=f.kp;i=1;j=1;if(h)j=2;k=9;l=AG5(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bi(k,i+1|0);g=0;}else{d=d/ALQ.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;B0(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.s.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.s.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.s.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function UA(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BB(c,0.0);if(!d){B0(a,b,b+3|0);e=a.s.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){B0(a,b,b+4|0);e=a.s.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){B0(a,b,b+3|0);e=a.s.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B0(a,b,b+8|0);d=b;}else{B0(a,b,b+9|0);e=a.s.data;d=b+1|0;e[b]=45;}e=a.s.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=ALR;VC(c,f);g=f.ir;h=f.hk;i=f.ka;j=1;k=1;if(i)k=2;l=18;m=AFn(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bi(l,j+1|0);h=0;}else{g=Cw(g,ALS.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;B0(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.s.data;k=b+1|0;e[b]=45;}n=BZ(1569325056, 23283064);o=0;while(o<l){if(Gl(n,DQ))d=0;else{d=D4(Cw(g,n));g=
Hp(g,n);}e=a.s.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Cw(n,W(10));o=o+1|0;}if(h){e=a.s.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function AG5(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AFn(b){var c,d,e,f,g;c=W(1);d=0;e=16;f=ALT.data;g=f.length-1|0;while(g>=0){if(Fi(Hp(b,BG(c,f[g])),DQ)){d=d|e;c=BG(c,f[g]);}e=e>>>1;g=g+(-1)|0;}return d;}
function Bv(a,b){return a.jc(a.F,b);}
function Sx(a,b,c){B0(a,b,b+1|0);a.s.data[b]=c;return a;}
function HH(a,b){var c,d;c=a.s.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bi(b,Bi(c*2|0,5));a.s=TH(a.s,d);}
function N(a){return HR(a.s,0,a.F);}
function Sk(a,b,c,d){return a.iK(a.F,b,c,d);}
function KG(a,b,c,d,e){var f,g,h,i;B0(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.s.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function GQ(a,b){return a.hX(b,0,b.data.length);}
function B0(a,b,c){var d,e,f,g;d=a.F;e=d-b|0;a.fI((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.s.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.F=a.F+(c-b|0)|0;}
var Gt=F(0);
var M=F(Fo);
function Jw(){var a=new M();AIj(a);return a;}
function AIj(a){O(a);}
function G(a,b){JZ(a,a.F,b===null?B(21):b.bz());return a;}
function BN(a,b){JZ(a,a.F,b);return a;}
function S(a,b){K0(a,b,10);return a;}
function Gr(a,b){var c,d,e,f,g,h,i;c=a.F;d=1;if(UK(b,DQ)){d=0;b=AKg(b);}a:{if(UK(b,W(10))){if(d)B0(a,c,c+1|0);else{B0(a,c,c+2|0);e=a.s.data;f=c+1|0;e[c]=45;c=f;}a.s.data[c]=F2(D4(b),10);}else{g=1;h=W(1);while(true){i=BG(h,W(10));if(Gl(i,h))break;if(UD(i,b))break;g=g+1|0;h=i;}if(!d)g=g+1|0;B0(a,c,c+g|0);if(d)f=c;else{e=a.s.data;f=c+1|0;e[c]=45;}while(true){if(Gl(h,DQ))break a;e=a.s.data;c=f+1|0;e[f]=F2(D4(Cw(b,h)),10);b=Hp(b,h);h=Cw(h,W(10));f=c;}}}return a;}
function Fp(a,b){Wf(a,a.F,b);return a;}
function Mp(a,b){UA(a,a.F,b);return a;}
function Tl(a,b){Bv(a,b);return a;}
function E$(a,b){JZ(a,a.F,!b?B(30):B(31));return a;}
function XT(a,b,c){var d,e,f,g,h,i;d=BB(b,c);if(d<=0){e=a.F;if(b<=e){if(d){f=e-c|0;a.F=e-(c-b|0)|0;g=0;while(g<f){h=a.s.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new F0;V(i);J(i);}
function Rj(a,b){var c,d,e,f;if(b>=0){c=a.F;if(b<c){c=c-1|0;a.F=c;while(b<c){d=a.s.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new F0;V(f);J(f);}
function ADo(a,b,c,d,e){KG(a,b,c,d,e);return a;}
function AA5(a,b,c,d){Sk(a,b,c,d);return a;}
function TV(a){return a.F;}
function Dd(a){return N(a);}
function ADt(a,b){HH(a,b);}
function ADQ(a,b,c){Sx(a,b,c);return a;}
function JZ(a,b,c){var d,e,f;if(b>=0&&b<=a.F){a:{if(c===null)c=B(21);else if(Fx(c))break a;HH(a,a.F+I(c)|0);d=a.F-1|0;while(d>=b){a.s.data[d+I(c)|0]=a.s.data[d];d=d+(-1)|0;}a.F=a.F+I(c)|0;d=0;while(d<I(c)){e=a.s.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new F0;V(c);J(c);}
var Ej=F(F3);
var Wt=F(Ej);
function ALU(a){var b=new Wt();Z8(b,a);return b;}
function Z8(a,b){Bb(a,b);}
var Vb=F(Ej);
function ALV(a){var b=new Vb();AAp(b,a);return b;}
function AAp(a,b){Bb(a,b);}
var Dr=F(Fz);
var Bg=F(Dr);
function ALf(a){var b=new Bg();AHT(b,a);return b;}
function AHT(a,b){Bb(a,b);}
var PG=F(0);
var CL=F(0);
function D$(b,c){if(b!==null)b.f3();return c;}
var L2=F(0);
function GX(){var a=this;C.call(a);a.iU=0;a.h$=0;}
var ALW=0;function JR(a){ALW=ALW-1|0;}
function E7(a,b,c){Hs(a,Uu(b,c,400,0));}
function NR(){var a=this;GX.call(a);a.g0=null;a.X=null;a.jP=null;}
function DX(a){var b,c,d;b=a.X;c=a.iU;d=a.h$;b.clearRect(0.0,0.0,c,d);}
function Od(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.X;d="center";c.textAlign=d;break a;case 2:c=a.X;d="right";c.textAlign=d;break a;default:break a;}d=a.X;c="left";d.textAlign=c;}}
function D7(a,b){Hs(a,b.j5);}
function Hs(a,b){var c;if(!(a.jP==b?1:0)){c=a.X;a.jP=b;c.font=b;}}
function Uu(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function CF(a,b,c,d){var e,f,g;e=a.X;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function ET(a,b){var c;c=$rt_ustr(b);return a.X.measureText(c).width;}
function Ja(a,b,c,d){var e,f;e=a.X;f=$rt_ustr(Eo(Vr([35,FF(b/16|0),FF(b%16|0),FF(c/16|0),FF(c%16|0),FF(d/16|0),FF(d%16|0)])));e.fillStyle=f;}
var TA=F();
var XE=F();
function Wu(b,c){if(b===c)return 1;return b!==null?BM(b,c):c!==null?0:1;}
function Ct(b){if(b!==null)return b;b=new FD;Bb(b,B(23));J(b);}
var Be=F(0);
function PO(){C.call(this);this.nG=null;}
var Bu=F(0);
var VR=F();
var TF=F(0);
function HT(b,c,d){var e;e=new Jt;b=Fk(B(32),b);e.nl=B(33);e.mp=b;e.mk=c;e.lb=d;return e;}
var Ue=F();
function ABV(b,c){return {style:b,weight:c};}
var BL=F(0);
function PP(){C.call(this);this.od=null;}
function Ys(a,b){var c,d,e;c=a.od;d=0;while(d<b.length){e=b[d];(DV()).fonts.add(e);d=d+1|0;}c.o3=1;b=c.ms;if(b!==null)VJ(b);}
var PN=F();
function AHz(a,b){$rt_globals.console.info("font load error"+b);}
var W$=F();
var UT=F();
function Mc(b,c){var d,e,f;d=(DV()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(DV()).getElementById($rt_ustr(b)).appendChild(d);}
function TL(){return (DV()).createElement("canvas");}
function AE4(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var Ym=F();
var Lc=F();
function AFG(a,b){var c;c=new Bg;Bb(c,$rt_str(b.message));J(c);}
var Rb=F();
function EM(b){return $rt_str(b);}
function Jt(){var a=this;C.call(a);a.nl=null;a.mp=null;a.mk=null;a.lb=0;}
var HS=F(0);
var U6=F();
function AIJ(a,b){return a.p0(b);}
function AAg(a){return a.rg();}
var Vw=F();
var El=F(0);
var Lj=F();
var CJ=F();
var ALX=null;var ALY=null;var ALZ=null;var AL0=null;var AL1=null;var AL2=null;var AL3=null;var AL4=null;var AL5=null;var AL6=null;function Sc(b){var c,d;c=new BA;d=BP(1);d.data[0]=b;F9(c,d);return c;}
function JG(b){return b>=65536&&b<=1114111?1:0;}
function Cn(b){return (b&64512)!=55296?0:1;}
function CG(b){return (b&64512)!=56320?0:1;}
function JL(b){return !Cn(b)&&!CG(b)?0:1;}
function F8(b,c){return Cn(b)&&CG(c)?1:0;}
function DS(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function GD(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function G2(b){return (56320|b&1023)&65535;}
function Ei(b){return FC(b)&65535;}
function FC(b){if(AL0===null){if(AL3===null)AL3=WJ();AL0=Vi((AL3.value!==null?$rt_str(AL3.value):null));}return Ox(AL0,b);}
function DY(b){return FB(b)&65535;}
function FB(b){if(ALZ===null){if(AL4===null)AL4=Xq();ALZ=Vi((AL4.value!==null?$rt_str(AL4.value):null));}return Ox(ALZ,b);}
function Ox(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BB(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function Qq(b,c){if(c>=2&&c<=36){b=L7(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function L7(b){var c,d,e,f,g,h,i,j,k,l;if(ALY===null){if(AL5===null)AL5=Vm();c=(AL5.value!==null?$rt_str(AL5.value):null);d=AGs(DG(c));e=HP(d);f=BQ(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+KM(d)|0;j=j+KM(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}ALY=f;}g=ALY.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BB(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function F2(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Fv(b){var c;if(b<65536){c=BP(1);c.data[0]=b&65535;return c;}return Vr([GD(b),G2(b)]);}
function Ca(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&JL(b&65535))return 19;if(AL1===null){if(AL6===null)AL6=Yf();d=(AL6.value!==null?$rt_str(AL6.value):null);e=T(KZ,16384);f=e.data;g=Ev(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=Iz(L(d,l));if(m==64){l=l+1|0;m=Iz(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bd(c,Iz(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Iz(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=ABK(k,k+i|0,XQ(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=ABK(k,k+i|0,XQ(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AL1=Dk(e,j);}e=AL1.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.mF)o=p+1|0;else{c=d.ll;if(b>=c)return d.lv.data[b-c|0];c=p-1|0;}}return 0;}
function HC(b){a:{switch(Ca(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Fr(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ca(b)!=16?0:1;}
function My(b){switch(Ca(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Nv(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return My(b);}return 1;}
function Tz(){ALX=E($rt_charcls());AL2=T(CJ,128);}
function WJ(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function Xq(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function Vm(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function Yf(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Kb=F(0);
var Ow=F(0);
var DK=F(0);
var XD=F(0);
function DV(){return $rt_globals.window.document;}
var FD=F(Bg);
function SX(){var a=this;C.call(a);a.jA=null;a.jz=null;a.jy=null;}
function AF5(a,b){var c,d,e;c=a.jA;d=a.jz;e=a.jy;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=d.nG;b.ms=c;if(b.o3)VJ(c);}}
var Mn=F(0);
var NI=F(0);
var Nz=F(0);
var PB=F(0);
var Sm=F(0);
var Qr=F(0);
var LQ=F(0);
var TE=F();
function ADK(a,b,c){a.wv($rt_str(b),I5(c,"handleEvent"));}
function AD1(a,b,c){a.up($rt_str(b),I5(c,"handleEvent"));}
function Zm(a,b){return a.p0(b);}
function AEV(a,b,c,d){a.s0($rt_str(b),I5(c,"handleEvent"),d?1:0);}
function AHR(a,b){return !!a.wz(b);}
function AAk(a){return a.rg();}
function YN(a,b,c,d){a.vt($rt_str(b),I5(c,"handleEvent"),d?1:0);}
var Bp=F(Bg);
var F0=F(Bp);
var UE=F();
function VE(){return "ping";}
var LP=F(0);
function OH(){var a=this;C.call(a);a.m3=null;a.pm=null;a.iO=null;a.jW=null;a.cE=null;a.ok=null;a.j2=null;a.nn=null;a.ez=null;a.f$=0;a.qE=0;a.my=null;a.d8=null;a.l$=null;a.i8=null;a.nI=0;}
function W2(a){a.cE.focus();}
function Pb(a){a.qE=$rt_globals.requestAnimationFrame(Bc(a.m3,"onAnimationFrame"));}
function E9(a){a.f$=1;}
function Pa(a,b,c){var d,e;a.nn.cz=Cf(b,c);d=a.cE;e=b;d.width=e;d=a.cE;e=c;d.height=e;d=a.ez;Bo(d.c6,b,c);e=d.bt;d=d.c6;b=d.a;c=d.b;e.viewport(0,0,b,c);a.d8.cM(a.ez.c6,IA(a));a.d8.cb();}
function Fw(a,b){var c,d,e;c=a.my;d=a.cE;if(Wu(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.my=b;}
function F$(a){return $rt_globals.performance.now()/1000.0;}
function IA(a){return $rt_globals.window.devicePixelRatio;}
function Js(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))XZ(b,1);else{c=new RY;d=$rt_globals.window.showDirectoryPicker();e=new RX;e.lo=b;e.lp=c;d.then(Bc(e,"f"),Bc(c,"f"));}}
function Jy(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))XZ(b,0);else{c=new Sv;d=$rt_globals.window.showOpenFilePicker();e=new Su;e.lU=b;e.lT=c;d.then(Bc(e,"f"),Bc(c,"f"));}}
function CH(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.nI+1|0;a.nI=e;SY(a.i8,E5(e),b);b=a.l$;f=d.length;g=new $rt_globals.Array(f+2|0);h=e;g[0]=h;c=$rt_ustr(c);g[1]=c;h=new $rt_globals.Array();e=0;while(e<f){c=d[e];if(c instanceof BA)c=$rt_ustr(c);else if(Rk(c,$rt_arraycls($rt_bytecls())))c=c.data.buffer;else if(Rk(c,$rt_arraycls($rt_charcls())))c=c.data.buffer;else if(Rk(c,$rt_arraycls($rt_intcls())))c=c.data.buffer;else{if(!(c instanceof IU)){b=new BE;c=GB(CW(c));h=new M;O(h);G(G(h,B(34)),c);Bb(b,N(h));J(b);}i=c;c
=i.e3;if(c===null)c=i.dO;}g[e+2|0]=c;if(c instanceof $rt_globals.ArrayBuffer?1:0)h.push(c);e=e+1|0;}b.postMessage(g,h);}
function Ns(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new No;e.j6=b;b=Yj(c);d.then(Bc(e,"f"),Bc(b,"f"));}
function P_(a,b,c,d){var e,f,g;e=$rt_globals.navigator.clipboard;f=DG(b);b=new $rt_globals.TextDecoder("utf-16");g=f.data;g=b.decode(g);b=e.writeText(g);e=new Ql;e.nr=c;c=Yj(d);b.then(Bc(e,"f"),Bc(c,"f"));}
function SA(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function Yj(b){var c;c=new Kv;c.nB=b;return c;}
var CE=F(0);
var M8=F();
function U2(a,b){var c,d,e,f,g;c=$rt_str($rt_globals.window.location.hash);if(BM(B(35),c)){d=new KP;FG(d,b);b=$rt_globals.fetch("test.wasm");e=new KX;b=b.then(Bc(e,"f"));e=new KW;b=b.then(Bc(e,"f"));e=new KV;f=new KU;b.then(Bc(e,"f"),Bc(f,"f"));}else{d=I(c)<=0?B(23):Dj(c,1);if(I(d)>0){c=new M;O(c);G(G(c,B(36)),d);$rt_globals.console.info($rt_ustr(N(c)));}a:{g=(-1);switch(Wq(d)){case -1509980539:if(!BM(d,B(37)))break a;g=8;break a;case -811765794:if(!BM(d,B(38)))break a;g=3;break a;case -785237654:if(!BM(d,B(39)))break a;g
=6;break a;case -631889171:if(!BM(d,B(40)))break a;g=4;break a;case 3343967:if(!BM(d,B(41)))break a;g=5;break a;case 3556498:if(!BM(d,B(42)))break a;g=2;break a;case 544901384:if(!BM(d,B(43)))break a;g=1;break a;case 1030621992:if(!BM(d,B(44)))break a;g=10;break a;case 1554501643:if(!BM(d,B(45)))break a;g=9;break a;case 1609169232:if(!BM(d,B(46)))break a;g=7;break a;default:}}b:{switch(g){case 1:case 2:break;case 3:d=new O6;break b;case 4:case 5:d=new O5;break b;case 6:d=new O4;break b;case 7:d=new O3;break b;case 8:d
=new O2;break b;case 9:d=new O1;break b;case 10:d=new O0;break b;default:d=new OZ;break b;}d=new O8;}d=d.cQ(b);}return d;}
var Bm=F(0);
var U$=F();
var NE=F(0);
function Q4(){C.call(this);this.k7=null;}
function ACL(a,b){var c,d;c=b;b=a.k7;if(!(!b.d8.c0(c/1000.0)&&!b.f$)){d=b.ez.c6;if(Bd(d.a,d.b)){b.f$=0;b.d8.cb();}}Pb(b);}
function Q1(){C.call(this);this.pc=null;}
function Dh(a){E9(a.pc);}
var Hk=F();
function Dg(a,b){var c,d,e;a.h9=0;a.dX=a.oq;a.gJ=a.gJ+1|0;c=E5(0);d=Jj(a.f7,c);e=d===null?null:d.et;d=a.f7;if(e!==null)e=WO(e,b);else{e=T(Cs,1);e.data[0]=b;}SY(d,c,e);c=new R8;c.qA=a;c.qB=0;c.qz=b;return c;}
function MG(){var a=this;Hk.call(a);a.cL=null;a.f7=null;a.oq=null;a.dX=null;a.h9=0;a.gJ=0;}
function Dc(a){var b,c,d,e,f,g,h,i;if(a.h9)return a.dX;b=a.dX.data.length;c=a.gJ;if(b!=c)a.dX=T(Cs,c);b=0;d=a.f7;if(d.er===null){e=new Rc;e.oA=d;d.er=e;}d=d.er.gG();while(d.gZ()){f=d.fX();g=f.data;h=a.dX;i=g.length;DJ(f,0,h,b,i);b=b+i|0;}return a.dX;}
function PU(a,b){var c,d,e;Dh(a.cL);c=(Dc(a)).data;d=c.length;e=0;a:{while(true){if(e>=d)break a;if(c[e].dw(b))break;if(b.ki)break a;e=e+1|0;}return 1;}return 0;}
function Jg(a,b,c,d,e){var f,g,h;Dh(a.cL);f=(Dc(a)).data;g=f.length;h=0;while(h<g){if(f[h].dC(b,c,d,e))return 1;h=h+1|0;}return 0;}
function Nq(a,b,c){var d,e,f;Dh(a.cL);d=(Dc(a)).data;e=d.length;f=0;while(f<e){if(d[f].fF(b,c))return 1;f=f+1|0;}return 0;}
var MZ=F(0);
function Q2(){C.call(this);this.mT=null;}
function ABg(a,b,c){var d,e,f,g;c=a.mT;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.cE){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=IA(c);Pa(c,Cd(f.width*g),Cd(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Pa(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var XJ=F();
function YV(){return {box:'device-pixel-content-box'};}
function AF2(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var BX=F(0);
function QZ(){C.call(this);this.kK=null;}
function AFP(a,b){b=a.kK;b.d8.cM(b.ez.c6,IA(b));b.d8.cb();}
var IR=F(0);
function D1(){C.call(this);this.er=null;}
var DO=F(0);
var Sz=F(0);
var KK=F(0);
function Uf(){var a=this;D1.call(a);a.cP=null;a.ec=null;a.rs=null;a.eW=0;a.hm=null;}
function AGz(){var a=new Uf();ZD(a);return a;}
function ZD(a){var b;a.rs=null;b=new Oi;b.ri=a;a.ec=b;}
function SY(a,b,c){var d,e;a.cP=JH(a,a.cP,b);d=Jj(a,b);e=Kd(d,c);Kd(d,c);a.eW=a.eW+1|0;return e;}
function Jj(a,b){var c,d;c=a.cP;while(true){if(c===null)return null;d=EZ(a.ec,b,c.dY);if(!d)break;c=d>=0?c.bj:c.bd;}return c;}
function SU(a,b,c){var d,e,f,g,h;d=T(Es,J5(a));e=d.data;f=0;g=a.cP;a:{while(g!==null){h=EZ(a.ec,b,g.dY);if(c)h= -h|0;if(!h){c=f+1|0;e[f]=g;break a;}if(h>=0)g=Ho(g,c);else{h=f+1|0;e[f]=g;g=GJ(g,c);f=h;}}c=f;}return Dk(d,c);}
function Lw(a,b,c){var d,e,f,g,h;d=T(Es,J5(a));e=d.data;f=0;g=a.cP;while(g!==null){h=EZ(a.ec,b,g.dY);if(c)h= -h|0;if(h>=0)g=Ho(g,c);else{h=f+1|0;e[f]=g;g=GJ(g,c);f=h;}}return Dk(d,f);}
function Rn(a,b){var c,d,e,f,g;c=T(Es,J5(a));d=c.data;e=0;f=a.cP;while(f!==null){g=e+1|0;d[e]=f;f=GJ(f,b);e=g;}return Dk(c,e);}
function JH(a,b,c){var d,e;if(b===null){b=new Es;d=null;b.dY=c;b.et=d;b.c7=1;b.eg=1;return b;}e=EZ(a.ec,c,b.dY);if(!e)return b;if(e>=0)b.bj=JH(a,b.bj,c);else b.bd=JH(a,b.bd,c);DL(b);return HO(b);}
function H9(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=EZ(a.ec,c,b.dY);if(d<0)b.bd=H9(a,b.bd,c);else if(d>0)b.bj=H9(a,b.bj,c);else{e=b.bj;if(e===null)return b.bd;f=b.bd;g=T(Es,e.c7).data;h=0;while(true){b=e.bd;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bj;while(h>0){h=h+(-1)|0;j=g[h];j.bd=b;DL(j);b=HO(j);}e.bj=b;e.bd=f;DL(e);b=e;}DL(b);return HO(b);}
function J5(a){var b;b=a.cP;return b===null?0:b.c7;}
function Q0(){C.call(this);this.os=null;}
function AGK(a,b){var c,d,e,f,g,h,i,j;c=a.os.i8;b=b.data;if(b===VE()?1:0)$rt_globals.console.info("App: hello from worker");else{if(!(b instanceof $rt_globals.Array?1:0)){b=new BE;V(b);J(b);}if(b.length<1){b=new BE;V(b);J(b);}d=E5(b[0]);e=Jj(c,d);if(e===null)c=null;else{c.cP=H9(c,c.cP,d);c.eW=c.eW+1|0;c=e.et;}c=c;f=T(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;e=b[j];if(typeof e==='string'?1:0)d=EM(e);else if(e instanceof $rt_globals.ArrayBuffer?1:0){d=new OM;Xs(d);d.ft=e;}else d=(e instanceof $rt_globals.File
?1:0)?Wk(null,e):!(e instanceof $rt_globals.FileSystemFileHandle?1:0)?null:Wk(e,null);g[h]=d;h=j;}c.j(f);}}
var Cs=F(0);
function AHA(a,b){return 0;}
function AB5(a,b){return 0;}
function ABY(a,b,c,d,e){return 0;}
function Yq(a,b,c,d){return 0;}
function ADG(a,b){return 0;}
function AI5(a,b,c){return 0;}
function ABd(a){return null;}
function AAO(a){}
function AEN(a){}
function Uy(){var a=this;C.call(a);a.l4=null;a.bR=null;a.qV=null;a.cz=null;}
function AKW(a,b){var c=new Uy();ABt(c,a,b);return c;}
function ABt(a,b,c){var d,e,f,g,h;a.cz=null;a.l4=b;a.bR=c;d=$rt_globals.window;e=T(CL,16);f=e.data;g=new RG;g.ke=a;f[0]=Cm(a,b,B(47),g);g=new RH;g.nq=a;f[1]=Cm(a,b,B(48),g);g=new RI;g.kV=a;f[2]=Cm(a,b,B(49),g);g=new RJ;g.o7=a;f[3]=Cm(a,b,B(50),g);g=new RK;g.mM=a;f[4]=Cm(a,b,B(51),g);g=new RL;g.ku=a;f[5]=Cm(a,b,B(52),g);g=new RM;g.pl=a;f[6]=Cm(a,b,B(53),g);g=new RN;g.mX=a;f[7]=Cm(a,b,B(54),g);g=new RO;g.kD=a;f[8]=Cm(a,b,B(55),g);g=new RP;g.oz=a;f[9]=Cm(a,b,B(56),g);g=new SO;g.oa=a;f[10]=Cm(a,b,B(57),g);h=new SP;h.nC
=a;d.addEventListener("paste",Bc(h,"handleEvent"),!!1);f[11]=R7(a,d,B(58),h);g=new SQ;g.jK=a;f[12]=Cm(a,d,B(59),g);g=new SR;g.oP=a;f[13]=Cm(a,d,B(60),g);f[14]=Cm(a,d,B(56),new SM);f[15]=Cm(a,d,B(55),new SN);c=new M6;c.qd=e;a.qV=c;g=new ON;g.nJ=b;b.onpointerdown=Bc(g,"f");g=new OO;g.le=b;b.onpointerup=Bc(g,"f");}
function Cm(a,b,c,d){b.addEventListener($rt_ustr(c),Bc(d,"handleEvent"));return R7(a,b,c,d);}
function R7(a,b,c,d){var e;e=new NF;e.rV=b;e.rW=c;e.rX=d;return e;}
function PQ(a,b){var c;c=new O7;c.kQ=b;return c;}
function D2(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.l4.getBoundingClientRect();e=Cf(Cd((b.clientX-d.left)*c),Cd((b.clientY-d.top)*c));f=new Br;g=a.cz;f.a=g.a;f.b=g.b;d=new J_;Qa(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.Q=e;d.pE=f;return d;}
function ST(a,b,c){var d,e,f,g;d=new L6;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Qa(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.ki=0;d.cH=e;d.bo=f;d.c2=c;d.iA=g;return d;}
function C9(a,b){b.stopPropagation();b.preventDefault();}
function I2(){var a=this;C.call(a);a.mw=null;a.bM=null;a.bt=null;a.nS=null;a.rd=0;a.g1=null;a.rF=null;a.rp=null;a.qy=null;a.eB=null;a.fw=null;a.rx=null;a.f9=null;a.c6=null;a.oW=null;a.d0=0;a.hd=0;}
function Hq(a,b,c){return FP(a,b,c,400,0);}
function Di(a,b,c){return Kj(a.mw,b,c);}
function IM(a,b){var c,d,e,f,g;c=a.bt;d=b.cj;e=b.cy;f=b.ci;g=b.b_;c.clearColor(d,e,f,g);a.bt.clear(16384);}
function CC(a,b){var c;if(b==a.hd)return b;if(!b)a.bt.disable(3042);else{a.bt.enable(3042);a.bt.blendFuncSeparate(770,771,1,1);}c=a.hd;a.hd=b;return c;}
function BR(a,b,c,d,e){IY(a,a.g1);JT(a.g1,a.bt,b,c,d,a.c6);d=a.g1;GK(a.bt,d.or,e);a.d0=H6(a.f9,a.d0);}
function Iq(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;IY(a,a.eB);JT(a.eB,a.bt,b,c,d,a.c6);P8(a.eB,a.bt,f);d=a.eB;j=a.bt;k=e.cj;l=f.bB;k=k/l;m=e.cy;n=f.b9;m=m/n;l=e.ci/l;n=e.b_/n;o=d.ob;j.uniform4f(o,k,m,l,n);d=a.eB;e=a.bt;GK(e,d.lF,g);GK(e,d.kj,h);d=d.k1;e.uniform2f(d,i,0.0);a.d0=H6(a.f9,a.d0);}
function Dv(a){var b,c;b=new HB;c=a.nS;b.dU=c;b.e8=c.db.createTexture();AL7=AL7+1|0;return b;}
function Lg(a,b){So(a.bt,b);}
function IY(a,b){var c,d;if(b!==a.oW){c=a.bt;d=b.bL;c.useProgram(d);a.oW=b;}}
function QT(){var a=this;I2.call(a);a.qZ=null;a.rq=null;}
function FP(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=a.bM;g=Uu(b,c,d,e);Hs(f,g);h=f.X.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=ET(f,B(61));m=ET(f,B(62));h=new IV;h.jg=b;h.p1=c;n=c|0;if(n!==c){b=new M;O(b);Fp(G(b,B(63)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.hI=n;h.p8=d;h.qx=e;h.hl=i;h.fZ=j;h.pZ=l;h.i9=k;h.j5=g;h.ii=Fj(i);h.nP=Fj(h.fZ);d=m*32.0|0;n=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;a:{h.p5=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(64);}h.pS=b;return h;}
function CX(){C.call(this);this.U=null;}
function FG(a,b){a.U=b;}
function Oi(){C.call(this);this.ri=null;}
function EZ(a,b,c){return b===null?N6(c,b):N6(b,c);}
function RG(){C.call(this);this.ke=null;}
function AFl(a,b){var c;c=a.ke;if(PU(c.bR,ST(c,b,1)))C9(c,b);}
function RH(){C.call(this);this.nq=null;}
function AFw(a,b){var c;c=a.nq;if(PU(c.bR,ST(c,b,0)))C9(c,b);}
function RI(){C.call(this);this.kV=null;}
function AEe(a,b){var c,d,e,f,g,h;c=a.kV;if(c.cz!==null){d=D2(c,b);e=c.bR;Dh(e.cL);f=(Dc(e)).data;g=f.length;h=0;a:{while(h<g){if(f[h].d4(d))break a;h=h+1|0;}}C9(c,b);}}
function RJ(){C.call(this);this.o7=null;}
function ADL(a,b){var c,d;c=a.o7;b.button;if(c.cz!==null){d=D2(c,b);Jg(c.bR,d,b.button,1,1);}}
function RK(){C.call(this);this.mM=null;}
function AD5(a,b){var c,d;c=a.mM;b.button;if(c.cz!==null){d=D2(c,b);if(Jg(c.bR,d,b.button,0,1))C9(c,b);}}
function RL(){C.call(this);this.ku=null;}
function AF0(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.ku;if(c.cz!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.bR;f=D2(c,b);g=d;h=g*b.deltaX;i=g*b.deltaY;Dh(e.cL);j=(Dc(e)).data;k=j.length;l=0;b:{while(l<k){if(j[l].fn(f,h,i))break b;l=l+1|0;}}C9(c,b);}}
function RM(){C.call(this);this.pl=null;}
function ACx(a,b){var c,d;c=a.pl;if(c.cz!==null){d=D2(c,b);if(Jg(c.bR,d,b.button,1,2))C9(c,b);}}
function RN(){C.call(this);this.mX=null;}
function AIP(a,b){var c,d,e,f,g,h,i;c=a.mX;if(c.cz!==null){d=D2(c,b);e=c.bR;Dh(e.cL);f=(Dc(e)).data;g=f.length;h=0;a:{while(h<g){if(f[h].fG(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)C9(c,b);}}
function RO(){C.call(this);this.kD=null;}
function ABU(a,b){var c,d,e;b=a.kD.bR;c=(Dc(b)).data;d=c.length;e=0;while(e<d){c[e].mj();e=e+1|0;}Dh(b.cL);}
function RP(){C.call(this);this.oz=null;}
function AGQ(a,b){var c,d,e;b=a.oz.bR;c=(Dc(b)).data;d=c.length;e=0;while(e<d){c[e].hZ();e=e+1|0;}Dh(b.cL);}
function SO(){C.call(this);this.oa=null;}
function AIs(a,b){var c;c=a.oa;if(c.cz!==null)D2(c,b);}
function SP(){C.call(this);this.nC=null;}
function ADZ(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.nC;d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Dc(c.bR)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].iB();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.bR.cL;m=new Mv;m.o0=k;m.o1=l;g.getAsString(Bc(m,"accept"));C9(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(65)),k),B(66)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1|0;}}
function SQ(){C.call(this);this.jK=null;}
function AEh(a,b){var c;c=a.jK;if(Nq(c.bR,PQ(c,b),0))C9(c,b);}
function SR(){C.call(this);this.oP=null;}
function AFI(a,b){var c;c=a.oP;if(Nq(c.bR,PQ(c,b),1))C9(c,b);}
var SM=F();
function ACR(a,b){}
var SN=F();
function AH2(a,b){}
var P3=F(0);
var Qc=F();
function Kj(a,b,c){var d,e,f;d=new NR;ALW=ALW+1|0;d.iU=b;d.h$=c;e=(DV()).createElement("canvas");d.g0=e;f=b;e.width=f;e=d.g0;f=c;e.height=f;d.X=d.g0.getContext("2d");return d;}
var Qb=F();
function ADh(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function S_(){var a=this;C.call(a);a.bl=null;a.cA=null;a.r=null;}
function AKe(a,b,c){var d=new S_();ABH(d,a,b,c);return d;}
function ABH(a,b,c,d){a.bl=b;a.cA=c;a.r=d;}
function M6(){C.call(this);this.qd=null;}
function Br(){var a=this;C.call(a);a.a=0;a.b=0;}
function Cf(a,b){var c=new Br();UC(c,a,b);return c;}
function UC(a,b,c){a.a=b;a.b=c;}
function Dp(a,b){a.a=b.a;a.b=b.b;}
function Bo(a,b,c){a.a=b;a.b=c;}
function Yu(a){var b,c,d;b=a.a;c=a.b;d=new M;O(d);S(G(S(G(d,B(67)),b),B(68)),c);return N(d);}
var Xf=F();
var T2=F(0);
function AFa(b){var c,d,e,f,g,h,i;c=YI(16);d=c.data;d[0]=1.0;d[1]=(-1.0);d[2]=1.0;d[3]=1.0;d[4]=1.0;d[5]=1.0;d[6]=1.0;d[7]=0.0;d[8]=(-1.0);d[9]=(-1.0);d[10]=0.0;d[11]=1.0;d[12]=(-1.0);d[13]=1.0;d[14]=0.0;d[15]=0.0;e=BP(6);f=e.data;f[0]=0;f[1]=1;f[2]=2;f[3]=1;f[4]=2;f[5]=3;g=new MX;Lu();h=ALH;g.c$=b;g.eM=h;g.m6=d.length/h.hT|0;g.oQ=f.length;i=b.createBuffer();g.j0=i;b.bindBuffer(34962,i);h=c.data;b.bufferData(34962,h,35044);g.o9=null;h=b.createBuffer();g.oJ=h;if(h!==null){b.bindBuffer(34963,h);h=e.data;b.bufferData(34963,
h,35044);}h=null;b.bindBuffer(34962,h);h=null;b.bindBuffer(34963,h);return g;}
function MY(){C.call(this);this.db=null;}
function Jn(){var a=this;C.call(a);a.bL=null;a.rm=null;}
function Wj(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(69):B(70);d=$rt_str(b.getShaderInfoLog(e));g=new M;O(g);G(G(g,f),d);f=N(g);b.deleteShader(e);Bq(Bw(),f);b=new Bg;Bb(b,f);J(b);}
function Dw(){var a=this;Jn.call(a);a.kC=null;a.lE=null;a.nt=null;}
function AL8(a,b,c,d){var e=new Dw();Jo(e,a,b,c,d);return e;}
function Jo(a,b,c,d,e){var f,g,h,i,j,k;a.rm=e;f=Wj(b,35633,c);d=Wj(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bL=g;h=e.nh.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bL;k=c.fk;c=c.lP;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bL;b.linkProgram(c);if(b.getProgramParameter(c,35714)){So(b,B(71));a.nt=new Br;c=a.bL;a.kC=b.getUniformLocation(c,"uResolution");c=a.bL;a.lE=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bg;c=new M;O(c);G(G(c,B(72)),d);Bb(b,N(c));J(b);}
function UM(a,b,c){var d,e,f;d=a.nt;if(!(d.a==c.a&&d.b==c.b?1:0)){Dp(d,c);d=a.kC;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function JT(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.lE;b.uniform4f(e,i,l,h,j);UM(a,b,f);}
function Rm(){Dw.call(this);this.or=null;}
function D0(){Dw.call(this);this.mH=null;}
function AJo(a,b){var c=new D0();PS(c,a,b);return c;}
function AL9(a,b,c){var d=new D0();PV(d,a,b,c);return d;}
function PS(a,b,c){PV(a,b,B(14),c);}
function PV(a,b,c,d){Lu();Jo(a,b,c,d,ALH);c=a.bL;a.mH=b.getUniformLocation(c,"sDiffuse");}
function P8(a,b,c){var d;d=a.mH;b.uniform1i(d,0);b.activeTexture(33984);c=c.e8;b.bindTexture(3553,c);}
var Np=F(Dw);
function QB(){D0.call(this);this.qn=null;}
function WA(){var a=this;D0.call(a);a.ob=null;a.lF=null;a.kj=null;a.k1=null;}
function AJT(a){var b=new WA();AFW(b,a);return b;}
function AFW(a,b){var c;PV(a,b,B(73),B(74));c=a.bL;a.ob=b.getUniformLocation(c,"uTexTransform");c=a.bL;a.lF=b.getUniformLocation(c,"uColor");c=a.bL;a.kj=b.getUniformLocation(c,"uBgColor");c=a.bL;a.k1=b.getUniformLocation(c,"uContrast");}
function Ug(){var a=this;D0.call(a);a.o$=null;a.o8=null;a.lZ=null;}
function AKR(a){var b=new Ug();ABr(b,a);return b;}
function ABr(a,b){var c,d;PS(a,b,B(75));c=a.bL;a.o$=b.getUniformLocation(c,"uColorB");d=a.bL;a.o8=b.getUniformLocation(d,"uColorF");d=a.bL;a.lZ=b.getUniformLocation(d,"uContrast");}
var N_=F(0);
var Yk=F(0);
function GK(b,c,d){var e,f,g,h;e=d.cj;f=d.cy;g=d.ci;h=d.b_;b.uniform4f(c,e,f,g,h);}
function So(b,c){var d,e;d=b.getError();if(d){b=Bw();e=new M;O(e);S(G(e,c),d);Bq(b,N(e));}}
function NF(){var a=this;C.call(a);a.rV=null;a.rW=null;a.rX=null;}
function MX(){var a=this;C.call(a);a.c$=null;a.eM=null;a.j0=null;a.o9=null;a.oJ=null;a.m6=0;a.oQ=0;}
function H6(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.eM.ny;d=a.c$;b=b^c;e=0;while(b){f=1<<e;if(b&f){if(!(c&f))d.disableVertexAttribArray(e);else d.enableVertexAttribArray(e);b=b^f;}e=e+1|0;}b=0;d=a.c$;g=a.j0;d.bindBuffer(34962,g);h=a.eM.js.data;f=h.length;i=0;while(i<f){d=h[i];g=a.c$;j=d.fk;k=d.dL;l=a.eM.hT*4|0;e=b*4|0;g.vertexAttribPointer(j,k,5126,!!0,l,e);b=b+d.dL|0;i=i+1|0;}a:{d=a.o9;if(d!==null){b=0;a.c$.bindBuffer(34962,d);h=a.eM.mu.data;e=h.length;f=0;while(true){if(f>=e)break a;d=h[f];g=a.c$;i=d.fk;j=d.dL;m
=d.li;n=a.eM.lB;g.vertexAttribPointer(i,j,5121,!!m,n,b);b=b+d.dL|0;f=f+1|0;}}}d=a.oJ;if(d===null){b=a.m6;if(b>0)a.c$.drawArrays(4,0,b);}else{a.c$.bindBuffer(34963,d);d=a.c$;f=a.oQ;d.drawElements(4,f,5123,0);}return c;}
function Ch(){var a=this;C.call(a);a.pQ=null;a.ce=0;}
function Du(a,b,c){a.pQ=b;a.ce=c;}
function AGY(a){return a.ce;}
function G4(a){var b;b=CW(a);if(!OL(QD(b),E(Ch)))b=QD(b);return b;}
function Te(a,b){var c,d,e;if(G4(b)===G4(a))return BB(a.ce,b.ce);c=new BE;d=G4(a);b=G4(b);e=new M;O(e);G(G(G(G(e,B(76)),d),B(77)),b);Bb(c,N(e));J(c);}
function ADn(a,b){return Te(a,b);}
function FL(){var a=this;Ch.call(a);a.nh=null;a.js=null;a.mu=null;a.hT=0;a.lB=0;a.ny=0;}
var ALH=null;var AL$=null;function Lu(){Lu=Bl(FL);ACV();}
function ACV(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new FL;c=T(Dl,2);d=c.data;AHL();d[0]=AL_;d[1]=AMa;Lu();Du(b,B(78),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];TD();switch(AMb.data[l.i4.ce]){case 1:f=f+l.dL|0;h=h+1|0;break a;case 2:e=e+l.dL|0;g=g+1|0;break a;default:}}i=i|1<<l.fk;k=k+1|0;}b.nh=c;b.hT=e;b.lB=f;b.ny=i;c=T(Dl,g);m=c.data;b.js=c;c=T(Dl,h);n=c.data;b.mu=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];TD();switch(AMb.data[l.i4.ce]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}ALH=b;c=T(FL,1);c.data[0]=b;AL$=c;}
var I9=F();
var AMc=null;var AMd=null;function Bw(){if(AMc===null)AMc=AEo(AMe,0);return AMc;}
function Q6(){if(AMd===null)AMd=AEo(AMf,0);return AMd;}
function DJ(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=WL(b)&&(e+f|0)<=WL(d)){a:{b:{if(b!==d){g=GE(CW(b));h=GE(CW(d));if(g!==null&&h!==null){if(g===h)break b;if(!Gq(g)&&!Gq(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.dK;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&Wp(n.constructor,o)?1:0)){N1(b,c,d,e,j);b=new G3;V(b);J(b);}j=j+1|0;k=m;}N1(b,c,d,e,f);return;}if(!Gq(g))break a;if(Gq(h))break b;else break a;}b=new G3;V(b);J(b);}}N1(b,c,d,
e,f);return;}b=new G3;V(b);J(b);}b=new Bp;V(b);J(b);}d=new FD;Bb(d,B(79));J(d);}
function N1(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EQ(){return Long_fromNumber(new Date().getTime());}
function WS(){return ALE($rt_globals.performance.now()*1000000.0);}
var JS=F(0);
var Pc=F(0);
var Qm=F(0);
var Ft=F();
function Hz(){Ft.call(this);this.pw=null;}
function U_(){var a=this;Hz.call(a);a.rb=0;a.h6=0;a.gg=null;a.hz=null;a.nN=null;}
function AEo(a,b){var c=new U_();AHv(c,a,b);return c;}
function AHv(a,b,c){a.pw=b;b=new M;O(b);a.gg=b;a.hz=BP(32);a.rb=c;a.nN=AMg;}
function Pt(a,b,c,d){var e,$$je;e=a.pw;if(e===null)a.h6=1;if(!(a.h6?0:1))return;a:{try{e.ht(b,c,d);break a;}catch($$e){$$je=DH($$e);if($$je instanceof GT){}else{throw $$e;}}a.h6=1;}}
function Ln(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=VN(b,c,d-c|0);e=Ev(Bi(16,Ba(e.length,1024)));g=VD(e,0,e.data.length);h=a.nN;i=new Mu;b=Ev(1);j=b.data;j[0]=63;k=AMh;i.iQ=k;i.h_=k;c=j.length;if(c&&c>=i.ju){i.pK=h;i.lN=b.eV();i.q8=2.0;i.ju=4.0;i.lg=BP(512);i.ks=Ev(512);k=AMi;if(k===null){i=new BE;Bb(i,B(80));J(i);}i.iQ=k;i.h_=k;a:while(true){if(i.gd==3){f=new DM;V(f);J(f);}i.gd=2;b:{while(true){try{k=TR(i,f,g);}catch($$e){$$je=DH($$e);if($$je instanceof Bg){f=$$je;break a;}else{throw $$e;}}if(GI(k)){d
=BT(f);if(d<=0)break b;k=Do(d);}else if(FX(k))break;h=!JE(k)?i.iQ:i.h_;c:{if(h!==AMi){if(h===AMj)break c;else break b;}d=BT(g);b=i.lN;l=b.data.length;if(d<l){k=AMk;break b;}R$(g,b,0,l);}D8(f,f.J+H$(k)|0);}}l=FX(k);Pt(a,e,0,g.J);Ll(g);if(!l){while(true){d=i.gd;if(d!=2&&d!=4){f=new DM;V(f);J(f);}f=AMl;if(f===f)i.gd=3;l=FX(f);Pt(a,e,0,g.J);Ll(g);if(!l)break;}return;}}J(AAP(f));}i=new BE;Bb(i,B(81));J(i);}
function Bq(a,b){var c,d,e,f,g,h,i,j;Bv(BN(a.gg,b),10);b=a.gg;c=b.F;d=a.hz;if(c>d.data.length)d=BP(c);e=0;f=0;if(e>c){b=new Bp;Bb(b,B(82));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.s.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Ln(a,d,0,c);a.gg.F=0;}
function Fh(){Ft.call(this);this.q0=null;}
function SW(a){a.q0=Ev(1);}
var I8=F(Fh);
var AMe=null;function ADa(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function WR(){var b;b=new I8;SW(b);AMe=b;}
function Dl(){var a=this;Ch.call(a);a.lP=null;a.i4=null;a.dL=0;a.li=0;a.fk=0;}
var AL_=null;var AMa=null;var AMm=null;function AHL(){AHL=Bl(Dl);ACk();}
function AJ6(a,b,c,d,e,f,g){var h=new Dl();Rf(h,a,b,c,d,e,f,g);return h;}
function Rf(a,b,c,d,e,f,g,h){AHL();Du(a,b,c);a.lP=d;a.i4=e;a.dL=f;a.li=g;a.fk=h;}
function ACk(){var b;b=new Dl;V5();Rf(b,B(83),0,B(84),AMn,2,0,0);AL_=b;b=AJ6(B(85),1,B(86),AMn,2,0,1);AMa=b;AMm=H(Dl,[AL_,b]);}
function Ht(){var a=this;C.call(a);a.pC=null;a.qo=null;}
function W4(b){var c,d;if(Fx(b))J(U5(b));if(!W6(L(b,0)))J(U5(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(W6(d))break a;else J(U5(b));}}c=c+1|0;}}
function W6(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var JX=F(Ht);
var AMg=null;function Xh(a){var b,c;b=new Pu;b.dI=B(87);c=AMh;b.e_=c;b.iZ=c;b.qf=a;b.jC=0.3333333432674408;b.qC=0.5;b.kz=Ev(512);b.np=BP(512);return b;}
function UP(){var b,c,d,e,f;b=new JX;c=T(BA,0);d=c.data;W4(B(88));e=d.length;f=0;while(f<e){W4(d[f]);f=f+1|0;}b.pC=B(88);b.qo=c.eV();AMg=b;}
var Il=F();
var AMo=null;var AMb=null;function TD(){TD=Bl(Il);AFd();}
function AFd(){var b,c;V5();b=BQ((AMp.eV()).data.length);c=b.data;AMb=b;c[AMq.ce]=1;c[AMn.ce]=2;V7();c=BQ((AMr.eV()).data.length);b=c.data;AMo=c;b[AMs.ce]=1;b[AMt.ce]=2;}
function Mf(){var a=this;C.call(a);a.d9=null;a.jm=null;a.hf=null;a.nF=null;a.lA=null;a.lI=null;}
function Vc(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.d9,b,c));}
function KB(a,b){var c,d,e,f,g,h,$$je;c=new BA;d=b;while(a.jm[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.d9,b,d));d=e.data.length;f=AMg;g=VD(e,0,d);a:{try{f=T$(Wm(XL(Xh(f),AMi),AMi),g);break a;}catch($$e){$$je=DH($$e);if($$je instanceof E0){f=$$je;}else{throw $$e;}}g=new Sf;g.gA=1;g.gX=1;g.fv=B(89);g.ia=f;J(g);}if(!f.J&&f.cw==f.jl)c.bW=f.fj;else{h=BP(BT(f));e=h.data;c.bW=h;K1(f,h,0,e.length);}return c;}
function KJ(a,b){var c,d,e;c=new BA;d=b>>>1;e=d;while(a.hf[e]){e=e+1|0;}d=e-d|0;F9(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.d9,b,d)));return c;}
var FO=F(Ch);
var AMq=null;var AMn=null;var AMp=null;function V5(){V5=Bl(FO);AA4();}
function ABl(a,b){var c=new FO();Xj(c,a,b);return c;}
function Xj(a,b,c){V5();Du(a,b,c);}
function AA4(){var b;AMq=ABl(B(90),0);b=ABl(B(91),1);AMn=b;AMp=H(FO,[AMq,b]);}
var Fn=F(Ch);
var AMs=null;var AMt=null;var AMr=null;function V7(){V7=Bl(Fn);ABx();}
function AIS(a,b){var c=new Fn();T7(c,a,b);return c;}
function T7(a,b,c){V7();Du(a,b,c);}
function ABx(){var b;AMs=AIS(B(92),0);b=AIS(B(93),1);AMt=b;AMr=H(Fn,[AMs,b]);}
var Q5=F(Dr);
var BE=F(Bg);
function W9(){BE.call(this);this.pP=null;}
function U5(a){var b=new W9();AG_(b,a);return b;}
function AG_(a,b){V(a);a.pP=b;}
var Va=F();
var JW=F(0);
function ON(){C.call(this);this.nJ=null;}
function AHc(a,b){a.nJ.setPointerCapture(b.pointerId);}
function OO(){C.call(this);this.le=null;}
function AAW(a,b){a.le.releasePointerCapture(b.pointerId);}
var Vt=F();
function IZ(){return AIK();}
function AIK(){return Math.random();}
function Ba(b,c){if(b<c)c=b;return c;}
function Bi(b,c){if(b>c)c=b;return c;}
function Kk(b){if(b<=0)b= -b|0;return b;}
var TP=F();
function TH(b,c){var d,e,f,g;b=b.data;d=BP(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function XQ(b,c){var d,e,f,g;b=b.data;d=Ev(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function X8(b,c){var d,e,f,g;b=b.data;d=BQ(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dk(b,c){var d,e,f,g;d=b.data;e=Qn(GE(CW(b)),c);f=Ba(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Ut(b){var c,d,e;if(b===null)return B(21);c=new M;O(c);BN(c,B(94));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BN(c,B(95));G(c,e[d]);d=d+1|0;}BN(c,B(96));return N(c);}
function WK(b){var c,d,e;if(b===null)return B(21);c=new M;O(c);BN(c,B(94));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BN(c,B(95));S(c,e[d]);d=d+1|0;}BN(c,B(96));return N(c);}
function AGD(b){var c,d,e;if(b===null)return B(21);c=new M;O(c);BN(c,B(94));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BN(c,B(95));Fp(c,e[d]);d=d+1|0;}BN(c,B(96));return N(c);}
function AIU(b){var c,d,e;if(b===null)return B(21);c=new M;O(c);BN(c,B(94));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BN(c,B(95));Mp(c,e[d]);d=d+1|0;}BN(c,B(96));return N(c);}
function HK(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BE;V(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Wg(b,c){return Wz(b,0,b.data.length,c);}
function Wz(b,c,d,e){var f,g,h,i,j;f=BB(c,d);if(f>0){g=new BE;V(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function FS(){var a=this;C.call(a);a.jl=0;a.J=0;a.cw=0;a.fr=0;}
function Rd(a,b){a.fr=(-1);a.jl=b;a.cw=b;}
function D8(a,b){var c,d,e;if(b>=0&&b<=a.cw){a.J=b;if(b<a.fr)a.fr=0;return a;}c=new BE;d=a.cw;e=new M;O(e);Bv(S(G(S(G(e,B(97)),b),B(98)),d),93);Bb(c,N(e));J(c);}
function BT(a){return a.cw-a.J|0;}
function C$(a){return a.J>=a.cw?0:1;}
var Ok=F(0);
var IW=F(FS);
function X6(b){var c,d;if(b>=0)return AFy(0,b,BP(b),0,b,0);c=new BE;d=new M;O(d);S(G(d,B(99)),b);Bb(c,N(d));J(c);}
function VN(b,c,d){return AFy(0,b.data.length,b,c,c+d|0,0);}
function K1(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new Bp;i=new M;O(i);S(G(S(G(i,B(100)),g),B(101)),f);Bb(h,N(i));J(h);}if(BT(a)<d){j=new Jx;V(j);J(j);}if(d<0){j=new Bp;k=new M;O(k);G(S(G(k,B(102)),d),B(103));Bb(j,N(k));J(j);}g=a.J;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.fj.data[m+a.ja|0];l=l+1|0;c=n;m=o;}a.J=g+d|0;return a;}}b=b.data;j=new Bp;d=b.length;k=new M;O(k);Bv(S(G(S(G(k,B(104)),c),B(98)),d),41);Bb(j,N(k));J(j);}
function H8(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.jn){b=new Ha;V(b);J(b);}e=d-c|0;if(BT(a)<e){b=new Gs;V(b);J(b);}if(c>=I(b)){f=new Bp;d=I(b);b=new M;O(b);Bv(S(G(S(G(b,B(105)),c),B(98)),d),41);Bb(f,N(b));J(f);}if(d>I(b)){f=new Bp;c=I(b);b=new M;O(b);S(G(S(G(b,B(106)),d),B(107)),c);Bb(f,N(b));J(f);}if(c>d){b=new Bp;f=new M;O(f);S(G(S(G(f,B(105)),c),B(108)),d);Bb(b,N(f));J(b);}g=a.J;while(c<d){h=g+1|0;i=c+1|0;Ol(a,g,L(b,c));g=h;c=i;}a.J=a.J+e|0;return a;}
function HU(){var a=this;FS.call(a);a.h5=0;a.iI=null;a.qN=null;}
function VD(b,c,d){var e,f,g;e=b.data;f=new R9;g=e.length;d=c+d|0;Rd(f,g);f.qN=AMu;f.h5=0;f.iI=b;f.J=c;f.cw=d;f.qR=0;f.jV=0;return f;}
function R$(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.jV){e=new Ha;V(e);J(e);}if(BT(a)<d){e=new Gs;V(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){i=new Bp;j=new M;O(j);S(G(S(G(j,B(109)),h),B(101)),g);Bb(i,N(j));J(i);}if(d<0){e=new Bp;i=new M;O(i);G(S(G(i,B(102)),d),B(103));Bb(e,N(i));J(e);}h=a.J;k=h+a.h5|0;l=0;while(l<d){b=a.iI.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.J=h+d|0;return a;}}b=b.data;e=new Bp;d=b.length;i=new M;O(i);Bv(S(G(S(G(i,B(104)),c),B(98)),d),41);Bb(e,N(i));J(e);}
function Ll(a){a.J=0;a.cw=a.jl;a.fr=(-1);return a;}
function Gi(){C.call(this);this.rA=null;}
var AMj=null;var AMi=null;var AMh=null;function XU(a){var b=new Gi();W1(b,a);return b;}
function W1(a,b){a.rA=b;}
function V1(){AMj=XU(B(110));AMi=XU(B(111));AMh=XU(B(112));}
var KP=F(CX);
function AHS(a,b){return 0;}
function ADV(a){}
function AFB(a,b,c){}
var X9=F();
var VM=F();
var H1=F(IW);
function Vv(){var a=this;H1.call(a);a.jn=0;a.ja=0;a.fj=null;}
function AFy(a,b,c,d,e,f){var g=new Vv();AIZ(g,a,b,c,d,e,f);return g;}
function AIZ(a,b,c,d,e,f,g){Rd(a,c);a.J=e;a.cw=f;a.ja=b;a.jn=g;a.fj=d;}
function Ol(a,b,c){a.fj.data[b+a.ja|0]=c;}
function IK(){var a=this;C.call(a);a.pK=null;a.lN=null;a.q8=0.0;a.ju=0.0;a.iQ=null;a.h_=null;a.gd=0;}
function Jq(){var a=this;C.call(a);a.eN=0;a.fY=0;}
var AMl=null;var AMk=null;function TY(a,b){var c=new Jq();Uq(c,a,b);return c;}
function Uq(a,b,c){a.eN=b;a.fY=c;}
function GI(a){return a.eN?0:1;}
function FX(a){return a.eN!=1?0:1;}
function IB(a){return !Nj(a)&&!JE(a)?0:1;}
function Nj(a){return a.eN!=2?0:1;}
function JE(a){return a.eN!=3?0:1;}
function H$(a){var b;if(IB(a))return a.fY;b=new Fm;V(b);J(b);}
function Do(b){return TY(2,b);}
function QM(a){var b,c;switch(a.eN){case 0:b=new M0;V(b);J(b);case 1:b=new Sn;V(b);J(b);case 2:b=new QH;c=a.fY;V(b);b.rM=c;J(b);case 3:b=new MS;c=a.fY;V(b);b.rK=c;J(b);default:}}
function UO(){AMl=TY(0,0);AMk=TY(1,0);}
var TM=F();
var I7=F(0);
var KX=F();
function ABF(a,b){return b.arrayBuffer();}
var KW=F();
function AEU(a,b){var c,d;c=new Md;d=new Mb;return $rt_globals.WebAssembly.instantiate(b,ADg(Bc(c,"f"),Bc(d,"f")));}
var KV=F();
function AFr(a,b){ZQ(b);}
var KU=F();
function AAo(a,b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
var O8=F();
function AE8(a,b){return AJr(b);}
var O6=F();
function Zu(a,b){var c,d;c=new Ri;Fs(c,b);c.cW=TU();c.ca=TU();c.iF=new Br;c.i5=new Br;c.fP=Jd(b.r);c.dA=TQ(b.bl);Dg(b.cA,c);OK(c.ca);b=Hq(b.bl,B(113),25);c.jt=b;Jv(c.dA,b,AMv);B9(c.gD,DF(43));K$(c,c.cW);K$(c,c.ca);b=c.cW;b.gP=new O9;d=c.ca;d.gP=new O_;d.g7=new Si;d.n0=new Sj;IJ(b,JU(K6(0)));IJ(c.ca,JU(K6(0)));return c;}
var O5=F();
function ACD(a,b){var c,d,e,f;c=new Mj;FG(c,b);c.ew=AD_();c.cZ=0;c.nb=500;c.oU=S6(0,0,0,255);c.i6=20;c.o5=20;c.k3=Xt();d=b.cA;e=new RC;e.fl=c;f=new SZ;f.m2=e;e.mC=f;Dg(d,e);b=b.bl;c.dp=b;PC(c.ew,Hq(b,B(113),c.o5),c.i6,c.dp);c.e$=K_();return c;}
var O4=F();
function ACz(a,b){var c;c=new Nt;Fs(c,b);Dg(b.cA,c);return c;}
var O3=F();
function AC0(a,b){return AKM(b);}
var O2=F();
function ZF(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new R2;Fs(c,b);c.cT=MI(0,0,300,300);c.dG=OD(0,0,3,3);d=b.bl;b=b.cA;e=new PK;e.iq=c;e.oC=new Br;Dg(b,e);b=Di(d,200,50);E7(b,B(114),11.0);Ja(b,187,187,187);CF(b,B(115),0.0,20.0);CF(b,B(115),0.25,40.0);e=Dv(d);Dm(e,b);JR(b);c.lK=e;Ig(c.cT,e);JB(c.cT);B9(c.cT.bC,AMw);B9(c.cT.bE,Ck(204,120,50));V7();b=AMt;f=Ev((b===b?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+
1|0;}h=h+1|0;}a:{d=Dv(d);TD();switch(AMo.data[b.ce]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Ej;V(b);J(b);}b:{KR(d,5,5,h);e=d.dU.db;switch(AMo.data[b.ce]){case 1:i=6403;break b;case 2:i=6408;break b;default:}b=new Ej;V(b);J(b);}b=f.data;m=b.buffer;n=b.byteOffset;o=b.byteLength;p=new $rt_globals.Uint8Array(m,n,o);e.texSubImage2D(3553,0,0,0,5,5,i,5121,p);c.la=d;Bo(c.dG.p,d.bB,d.b9);B9(c.dG.bC,c.gD);return c;}
var O1=F();
function AA1(a,b){var c,d,e;c=new LY;FG(c,b);c.qF=20;c.rY=11;c.qk=220;c.gy=new Br;c.q2=5000;c.eZ=1;c.d$=H(Sl,[DF(0),DF(255)]);c.c9=b.bl;b=b.cA;d=new Nr;d.fy=c;e=new Rv;e.pf=d;d.k4=e;Dg(b,d);b=Di(c.c9,200,220);c.he=b;E7(b,B(113),20.0);b=Di(c.c9,200,20);c.d2=b;E7(b,B(113),20.0);c.fL=K_();return c;}
var O0=F();
function AFk(a,b){var c,d;c=new GV;Fs(c,b);Dg(b.cA,c);b=!SA(b.r)?B(116):B(117);d=new M;O(d);G(G(d,B(118)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var OZ=F();
function AIa(a,b){var c,d,e,f,g;c=new NL;Qt(c,b,0);c.me=new Br;c.ij=b.bl;c.hq=Jd(b.r);c.bY=TQ(c.ij);c.H=AKH(b,AFL());b=b.cA;d=new Q_;d.bk=c;Dg(b,d);b=c.H;e=DG(B(119));b.dF=EQ();d=b.by.r;f=new Lh;f.m9=b;g=T(C,1);g.data[0]=e;CH(d,f,B(120),g);return c;}
function FZ(){var a=this;C.call(a);a.bi=0;a.bT=0;a.cI=0;a.gm=0;}
function AMx(a,b,c,d){var e=new FZ();Qa(e,a,b,c,d);return e;}
function Qa(a,b,c,d,e){a.bi=d;a.bT=b;a.cI=c;a.gm=e;}
function L6(){var a=this;FZ.call(a);a.cH=null;a.bo=0;a.c2=0;a.iA=0;a.ki=0;}
function Uh(b){var c,d;c=b.bT;if(c&&!b.bi&&!b.cI&&!b.gm?1:0){d=b.bo;if(!(d!=67&&d!=88&&d!=45))return 1;}d=b.bi&&!c&&!b.cI&&!b.gm?1:0;return d&&b.bo==46?1:0;}
function VA(b){var c;c=b.bo;return c!=122&&c!=123&&c!=116?0:1;}
var Xo=F();
function Ro(b,c){return (b+(c/2|0)|0)/c|0;}
function MJ(b,c,d){if(b<(2147483647/c|0))return Ro(Bd(b,c),d);return c*b/d|0;}
function Jr(b,c){return ((b+c|0)-1|0)/c|0;}
function Cd(b){return b+0.5|0;}
function Fj(b){return b+0.5|0;}
function F4(b,c,d){return Bi(b,Ba(c,d));}
function J_(){var a=this;FZ.call(a);a.Q=null;a.pE=null;}
var P5=F(0);
function Mv(){var a=this;C.call(a);a.o0=null;a.o1=null;}
function AGJ(a,b){var c,d;c=a.o0;d=a.o1;$rt_globals.console.info("paste plain string "+b);c.j(EM(b));Dh(d);}
function O7(){C.call(this);this.kQ=null;}
function QL(a,b){a.kQ.clipboardData.setData("text/plain",$rt_ustr(b));}
function R9(){var a=this;HU.call(a);a.qR=0;a.jV=0;}
var Wn=F();
function Ii(){C.call(this);this.q$=null;}
var AMu=null;var AMy=null;function ABf(a){var b=new Ii();S$(b,a);return b;}
function S$(a,b){a.q$=b;}
function Ye(){AMu=ABf(B(121));AMy=ABf(B(122));}
var Rg=F(0);
function OM(){C.call(this);this.ft=null;}
function EW(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.ft));}
function DU(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.ft));}
function AAL(a){var b,c;b=a.ft.byteLength;c=new M;O(c);G(S(G(c,B(123)),b),B(124));return N(c);}
var Qh=F(0);
function IU(){var a=this;C.call(a);a.e3=null;a.dO=null;a.i7=null;}
function Wk(a,b){var c=new IU();ACW(c,a,b);return c;}
function AJg(a,b,c){var d=new IU();Lm(d,a,b,c);return d;}
function Ti(b){var c,d,e,f,g,h,i,j,k;c=new IU;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=Qn(E(Rb),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=f[h];h=h+1|0;}}i=g.data;h=i.length;if(!h)j=T(BA,0);else{j=T(BA,h-1|0);g=j.data;h=0;k=g.length;while(h<k){g[h]=EM(i[h]);h=h+1|0;}}}else j=T(BA,0);Lm(c,d,b,j);return c;}
function ACW(a,b,c){Lm(a,b,c,T(BA,0));}
function Lm(a,b,c,d){a.e3=b;a.dO=c;a.i7=d;}
function HL(a,b){var c,d,e;c=b|0;if(c===b)return c;d=E3(a);e=new M;O(e);G(G(e,B(125)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function E3(a){var b;b=a.e3;return EM(b!==null?b.name:a.dO.name);}
function ADf(a){var b,c,d,e,f;if(a.dO===null){b=a.i7;c=E3(a);d=Ut(b);e=new M;O(e);G(G(G(e,d),B(126)),c);c=N(e);}else{b=a.i7;c=E3(a);f=HL(a,a.dO.size);d=Ut(b);e=new M;O(e);S(G(G(G(G(e,d),B(126)),c),B(127)),f);c=N(e);}return c;}
function IH(){var a=this;IK.call(a);a.lg=null;a.ks=null;}
function TR(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.lg;e=0;f=0;g=a.ks;a:{while(true){if((e+32|0)>f&&C$(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Ba(BT(b)+j|0,i.length);K1(b,d,j,f-j|0);e=0;}if(!C$(c)){k=!C$(b)&&e>=f?AMl:AMk;break a;}i=g.data;j=Ba(BT(c),i.length);l=new K7;l.jN=b;l.lR=c;k=VU(a,d,e,f,g,0,j,l);e=l.n7;j=l.o2;if(k===null){if(!C$(b)&&e>=f)k=AMl;else if(!C$(c)&&e>=f)k=AMk;}R$(c,g,0,j);if(k!==null)break;}}D8(b,b.J-(f-e|0)|0);return k;}
var Mu=F(IH);
function VU(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Jp(h,2))break a;i=AMk;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!JL(l)){if((f+3|0)>g){j=j+(-1)|0;if(Jp(h,3))break a;i=AMk;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Cn(l)){i=Do(1);break a;}if
(j>=d){if(C$(h.jN))break a;i=AMl;break a;}c=j+1|0;m=k[j];if(!CG(m)){j=c+(-2)|0;i=Do(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Jp(h,4))break a;i=AMk;break a;}k=e.data;o=DS(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.n7=j;h.o2=f;return i;}
var GT=F(Dr);
function TG(){var a=this;CX.call(a);a.iz=null;a.cp=null;a.eP=null;a.d5=null;a.fo=null;a.pz=null;a.fe=null;a.mG=null;a.jd=null;a.pO=null;a.qI=null;a.ey=null;a.g8=null;a.mb=0;}
function AJr(a){var b=new TG();ADN(b,a);return b;}
function ADN(a,b){var c,d,e,f,g,h,i;FG(a,b);c=new B8;d=AMw;c.cj=d.cj;c.cy=d.cy;c.ci=d.ci;c.b_=d.b_;a.iz=c;a.cp=MI(0,0,300,300);a.eP=OD(0,0,3,3);a.d5=MI(0,0,300,300);a.fo=AEQ();e=T(BA,4);f=e.data;f[0]=B(128);f[1]=B(129);f[2]=B(130);f[3]=B(131);a.pz=e;a.fe=T(GY,f.length);d=b.bl;c=b.cA;g=new PL;g.ds=a;g.pg=new Br;Dg(c,g);h=Di(a.U.bl,300,300);c=h.X;b="white";c.fillStyle=b;b=h.X;c="white";b.strokeStyle=c;b=h.X;c=10.0;b.lineWidth=c;h.X.strokeRect(75.0,140.0,150.0,110.0);h.X.fillRect(130.0,190.0,40.0,60.0);h.X.beginPath();h.X.moveTo(50.0,
140.0);h.X.lineTo(150.0,60.0);h.X.lineTo(250.0,140.0);h.X.closePath();h.X.stroke();E7(h,B(114),11.0);Ja(h,187,187,187);Mt(a,B(132),h);b=Dv(a.U.bl);Dm(b,h);JR(h);a.mG=b;Ig(a.cp,b);JB(a.cp);B9(a.cp.bC,AMw);B9(a.cp.bE,Ck(204,120,50));b=Di(d,255,100);a.ey=b;E7(b,B(133),11.0);b=Bw();i=$rt_str(a.ey.X.font);g=new M;O(g);G(G(g,B(134)),i);Bq(b,N(g));ET(a.ey,B(135));Ja(a.ey,169,183,198);Mt(a,B(135),a.ey);b=Dv(d);a.jd=b;Dm(b,a.ey);Ig(a.d5,a.jd);JB(a.d5);Gk(a.d5,DF(255));Gf(a.d5,AMw);a.pO=Dv(d);B9(a.eP.bC,a.iz);}
function Mt(a,b,c){CF(c,b,0.0,20.0);CF(c,b,0.25,40.0);CF(c,b,0.5,60.0);CF(c,b,0.75,80.0);}
function RZ(a,b){HF(IZ(),0.5+IZ()*0.5,0.5+IZ()*0.5,1.0,b.bE);}
function YX(a,b){var c;a.mb=a.mb+1|0;c=b/5.0;HF(c-(c|0),1.0,1.0,1.0,a.eP.bE);return OS(a.fo,b);}
function ABp(a){var b,c,d,e,f,g;b=a.U.bl;IM(b,a.iz);c=a.fe.data;d=c.length;e=0;while(e<d){Jb(c[e],b,0,0);e=e+1|0;}Ea(a.cp,b,a.mG,0,0,0.5);f=a.jd;d=0;while(d<7){g=a.d5;Ea(g,b,f,Bd(d,10+((10*g.p.a|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.qI;if(g!==null)PX(a.eP,b,g,0,0,0.0);Qz(a.fo,b,new Br);Lg(b,B(136));}
function AIY(a,b,c){var d,e,f,g,h,i,j,k,l;d=Bw();e=Ce(b);f=new M;O(f);G(G(f,B(137)),e);Bq(d,N(f));f=Bw();g=new M;O(g);Mp(G(g,B(138)),c);Bq(f,N(g));h=Cd(c*30.0);i=Cd(c*10.0);j=0;while(true){k=a.fe.data;if(j>=k.length)break;l=1+j|0;k[j]=OD(Bd(i,l)+Bd(h,j)|0,h,h,h);RZ(a,a.fe.data[j]);j=l;}Bo(a.eP.v,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.cp;f=d.v;h=b.a;d=d.p;Bo(f,(h-d.a|0)/2|0,(b.b-d.b|0)/2|0);d=a.d5;d.v.b=b.b-d.p.b|0;}
function Cr(){var a=this;CX.call(a);a.gD=null;a.dD=null;a.dE=0.0;}
function AMz(a){var b=new Cr();Fs(b,a);return b;}
function AMA(a,b){var c=new Cr();Qt(c,a,b);return c;}
function Fs(a,b){Qt(a,b,1);}
function Qt(a,b,c){var d;FG(a,b);a.gD=Ff(0,0,64,255,new B8);a.dD=new Br;if(c){b=GB(CW(a));d=DV();b=$rt_ustr(b);d.title=b;}}
function AIq(a,b){return 0;}
function IG(a){IM(a.U.bl,a.gD);}
function Xi(a,b,c){Dp(a.dD,b);a.dE=c;}
function Ri(){var a=this;Cr.call(a);a.fP=null;a.jt=null;a.cW=null;a.ca=null;a.iF=null;a.i5=null;a.dA=null;}
function K$(a,b){NX(b,a.jt);KH(b,AMv);RR(b,AMB);}
function K6(b){var c,d,e;c=new Sa;d=D4((WS()));d=d^d<<7;d=d^d>>>1;e=d^d<<9;d=D4((WS()))^(-559038737);c.iS=e;c.iT=d;d=0;while(d<19){N0(c);d=d+1|0;}return G_(b,c);}
function G_(b,c){var d;d=UV();Ir(d,IF(b,Ji(c,25)),!b?null:G_(b-1|0,c));Ir(d,IF(b,Ji(c,20)),!b?null:G_(b-1|0,c));Ir(d,IF(b,Ji(c,15)),!b?null:G_(b-1|0,c));Ir(d,IF(b,Ji(c,10)),!b?null:G_(b-1|0,c));return HD(d);}
function IF(b,c){var d;if(b){d=new M;O(d);G(G(S(d,b),B(26)),c);c=N(d);}return c;}
function Ir(b,c,d){var e;e=FE();if(d!==null)Fb(b,c,e,d);else{d=new OR;d.jD=c;En(b,c,e,d);}}
function YG(a,b,c){var d,e;Dp(a.dD,b);Bo(a.iF,b.a,Cd(c)*2|0);Bo(a.i5,Cd(c)*2|0,b.b);JQ(a.dA,b,c);if(a.dE!==c){Fl(a.cW,a.U.bl.bM,c);Fl(a.ca,a.U.bl.bM,c);}a.dE=c;d=Dz(a.cW);e=Dz(a.ca);HX(a.cW,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);HX(a.ca,(b.a-e.a|0)/2|0,((b.b+(3*d.b|0)|0)/2|0)+5|0);}
function ABG(a){var b,c,d,e,f;IG(a);b=a.U.bl;CC(b,1);c=AMC;d=a.dD.b/2|0;e=a.iF;BR(b,0,d-(e.b/2|0)|0,e,c);f=a.dD.a/2|0;e=a.i5;BR(b,f-(e.a/2|0)|0,0,e,c);CC(b,1);Hj(a.cW,b,a.dE);Hj(a.ca,b,a.dE);I$(a.dA);CC(b,0);}
function AFX(a,b){var c,d,e;c=Jl(a.dA,b.Q,a.fP);d=Ie(a.cW,b.Q,a.fP);e=Ie(a.ca,b.Q,a.fP);return !c&&!d&&!e?0:1;}
function AHG(a,b,c,d,e){var f,g,h;f=HQ(a.dA,b.Q,c,d,e);g=Ih(a.cW,b.Q,c,d,e);h=Ih(a.ca,b.Q,c,d,e);return !f&&!g&&!h?0:1;}
function ZX(a,b){var c,d,e;Bq(Bw(),B(139));if(!EN(a.dA)){c=a.dA;b=b.Q;d=K6(4);e=new Kc;e.ql=a;H2(c,b,d,e);}return 1;}
function ACn(a,b){if(b.c2&&b.bo==32){Pp(a.ca);return 1;}return 0;}
function Z9(a,b){return 0;}
function Mj(){var a=this;CX.call(a);a.dp=null;a.ew=null;a.e$=null;a.h8=null;a.cZ=0;a.nb=0;a.oU=null;a.i6=0;a.o5=0;a.k3=null;}
function AFH(a,b){return 0;}
function Za(a){var b,c;b=a.cZ;c=new M;O(c);S(G(c,B(140)),b);$rt_globals.console.info($rt_ustr(N(c)));IM(a.dp,a.oU);Ix(a.e$,a.cZ,a.h8.a,Fg(a),5000,20);CC(a.dp,1);GF(a.e$,a.dp,Cf(0,0));CC(a.dp,0);b=a.cZ;c=new M;O(c);S(G(c,B(140)),b);$rt_globals.console.info($rt_ustr(N(c)));SH(a.ew,a.cZ/a.i6|0);P0(a.ew,a.cZ,Fg(a),a.k3,a.dp);}
function Y9(a,b,c){a.h8=b;QN(a.ew,Cf(0,0),50,Fg(a),c);H0(a.ew,a.dp,0,Fg(a));}
function MR(a){return 5000-Fg(a)|0;}
function Fg(a){return Ba(a.nb,a.h8.b);}
var Nt=F(Cr);
function AFF(a,b){var c;if(b.c2&&b.bT&&b.bo==79){if(!b.bi){b=a.U.r;c=new St;c.om=a;Jy(b,c);}else{b=a.U.r;c=new Sw;c.qW=a;Js(b,c);}return 1;}return 0;}
var X3=F(Cr);
function AKM(a){var b=new X3();AE1(b,a);return b;}
function AE1(a,b){var c,d,e,f,g;Fs(a,b);c=b.r;d=new NP;d.p_=a;e=T(C,1);e.data[0]=B(141);CH(c,d,B(142),e);f=b.r;c=new NO;c.rL=a;e=T(C,1);e.data[0]=Vr([1,2,3,4,5]);CH(f,c,B(143),e);f=b.r;c=new NN;c.k0=a;e=T(C,1);e.data[0]=AJ8([1,2,3,4,5]);CH(f,c,B(144),e);f=b.r;c=new NM;c.pU=a;e=T(C,1);e.data[0]=Et([1,2,3,4,5]);CH(f,c,B(145),e);f=b.cA;g=new MH;c=new NK;c.qY=a;d=new NJ;d.l6=a;g.hj=b.r;g.k$=c;g.jw=d;Dg(f,g);}
function Qe(a,b){var c,d,e,f,g,h;c=b.data;d=Bw();e=Ce(c[0]);f=new M;O(f);G(G(f,B(146)),e);Bq(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((N$(b,1)).ft));d=Bw();e=Ce(c[1]);if(b===null)f=B(21);else{f=new M;O(f);BN(f,B(94));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BN(f,B(95));S(f,c[g]);g=g+1|0;}BN(f,B(96));f=N(f);}h=new M;O(h);G(G(G(G(h,B(147)),e),B(148)),f);Bq(d,N(h));}
function R2(){var a=this;Cr.call(a);a.cT=null;a.dG=null;a.la=null;a.lK=null;a.iL=null;}
function ADq(a,b){b=b/5.0;HF(b-(b|0),1.0,1.0,1.0,a.dG.bE);return 0;}
function YR(a){IG(a);Ea(a.cT,a.U.bl,a.lK,0,0,0.5);PX(a.dG,a.U.bl,a.la,0,0,0.0);Lg(a.U.bl,B(136));}
function AH$(a,b,c){var d,e,f;Xi(a,b,c);Bo(a.dG.v,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.cT;e=d.v;f=b.a;d=d.p;Bo(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function LY(){var a=this;CX.call(a);a.c9=null;a.he=null;a.d2=null;a.bX=null;a.dt=0;a.fL=null;a.du=0;a.qF=20;a.rY=11;a.qk=220;a.gy=null;a.q2=5000;a.eZ=0;a.d$=null;}
function AIH(a){var b,c,d,e,f,g,h;b=a.fL;c=a.du;d=a.gy;Ix(b,c,d.a,d.b,5000,20);CC(a.c9,1);GF(a.fL,a.c9,Cf(0,0));if(a.bX===null){c=0;while(c<11){c=c+1|0;e=20*c|0;CF(a.he,C8(c),0.0,e);}b=Dv(a.c9);a.bX=b;Dm(b,a.he);}if(a.du<=a.dt)while(true){f=a.dt;if(f<=a.du)break;a.dt=f-20|0;b=a.d2;g=a.eZ-1|0;a.eZ=g;CF(b,C8(g),0.0,20.0);Gw(a.bX,a.d2,0,a.dt%220|0);DX(a.d2);}else while(a.dt<(a.du-20|0)){b=a.d2;g=a.eZ+1|0;a.eZ=g;CF(b,C8((g+11|0)-1|0),0.0,20.0);Gw(a.bX,a.d2,0,a.dt%220|0);DX(a.d2);a.dt=a.dt+20|0;}b=new GZ;d=a.bX;OB(b,
0,0,d.bB,d.b9);d=a.bX;Gh(b,0,0,d.bB,d.b9);Gk(b,a.d$.data[0]);Gf(b,a.d$.data[1]);Ea(b,a.c9,a.bX,400,0,1.0);g=a.du%220|0;f=Ba(a.bX.b9-g|0,200);d=MI(0,0,a.bX.bB,f);Gh(d,0,g,a.bX.bB,f);Gk(d,a.d$.data[0]);Gf(d,a.d$.data[1]);Ea(d,a.c9,a.bX,0,0,1.0);h=new GZ;b=a.bX;OB(h,0,f,b.bB,(b.b9-f|0)-20|0);b=a.bX;Gh(h,0,0,b.bB,(b.b9-f|0)-20|0);Gk(h,a.d$.data[1]);Gf(h,a.d$.data[0]);Ea(h,a.c9,a.bX,0,0,1.0);}
function YT(a,b,c){Dp(a.gy,b);}
function AAN(a,b){return 0;}
function N5(a){return 5000-a.gy.b|0;}
function GV(){Cr.call(this);this.cB=0;}
function ADB(a,b){a:{if(b.c2){switch(b.bo){case 67:break;case 86:NH(a);break a;default:break a;}Kg(a);}}return 1;}
function NH(a){var b,c;b=a.U.r;c=new M$;c.jQ=a;Ns(b,c,NV(a));}
function Kg(a){var b,c,d,e;b=a.cB+1|0;a.cB=b;c=GB(E(GV));d=new M;O(d);G(G(S(G(d,B(149)),b),B(26)),c);e=N(d);c=a.U.r;d=new PZ;d.lS=e;P_(c,e,d,NV(a));}
function NV(a){var b;b=new Q7;b.k5=a;return b;}
function ACG(a,b,c,d,e){a:{if(d){switch(c){case 0:break;case 2:Kg(a);break a;default:break a;}NH(a);}}return 1;}
function AA0(a,b,c){var d,e;c=a.cB+1|0;a.cB=c;d=GB(E(GV));e=new M;O(e);G(G(S(e,c),B(150)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));QL(b,e);return 1;}
function AC7(a){var b;b=new MU;b.m$=a;return b;}
function YJ(a,b){return 1;}
function Is(){var a=this;Cr.call(a);a.ij=null;a.hq=null;a.bY=null;a.pD=null;a.H=null;a.me=null;}
function AAv(a,b){var c,d,e,f;c=a.H;d=c.h;e=d.e7;f=d.cG;e=e!=f&&b-d.lG>0.03125?1:0;if(e&&c.id!=f){c.id=f;OF(c);}e=c.R;f=DB(c,(e+c.p4|0)-c.pG|0,Eg(c));c.R=f;e=e==f?0:1;return !OS(c.cd,b)&&!e&&!c.mR?0:1;}
function ACK(a){IG(a);X_(a.H);I$(a.bY);}
function Pe(a){var b;b=new M3;b.ov=a;return b;}
function Xn(b){var c;c=new Mz;c.kv=b;return c;}
function Sh(a){var b,c,d;b=a.U.r;c=a.H;Ct(c);d=new Py;d.kH=c;Jy(b,d);}
function AB_(a,b,c){var d,e,f,g,h;Dp(a.dD,b);d=a.H;e=a.me;f=a.dD;Dp(d.bZ,e);Dp(d.dQ,f);d.dd=c;d.bU=Cd(d.nc*c);g=Cd(10.0*d.dd);d.iE=g;g=d.bU-g|0;QN(d.dJ,d.bZ,g,Cl(d),d.dd);d.cd.de.p.a=Cd(2.0*d.dd);PT(d,d.gu,d.cY);Q3(d);Kh(d);JQ(d.c5,f,c);if(a.dE!==c){a.dE=c;g=Cd(20.0*c);h=Hq(a.ij,B(133),g);a.pD=h;Jv(a.bY,h,AMv);}JQ(a.bY,b,c);}
var NL=F(Is);
var Hf=F(0);
function J0(){var a=this;C.call(a);a.dY=null;a.et=null;}
function Kd(a,b){var c;c=a.et;a.et=b;return c;}
function Es(){var a=this;J0.call(a);a.bd=null;a.bj=null;a.c7=0;a.eg=0;}
function HO(a){var b;b=IL(a);if(b==2){if(IL(a.bj)<0)a.bj=KO(a.bj);return LU(a);}if(b!=(-2))return a;if(IL(a.bd)>0)a.bd=LU(a.bd);return KO(a);}
function IL(a){var b,c;b=a.bj;c=b===null?0:b.c7;b=a.bd;return c-(b===null?0:b.c7)|0;}
function KO(a){var b;b=a.bd;a.bd=b.bj;b.bj=a;DL(a);DL(b);return b;}
function LU(a){var b;b=a.bj;a.bj=b.bd;b.bd=a;DL(a);DL(b);return b;}
function DL(a){var b,c,d;b=a.bj;c=b===null?0:b.c7;b=a.bd;d=b===null?0:b.c7;a.c7=Bi(c,d)+1|0;a.eg=1;b=a.bd;if(b!==null)a.eg=1+b.eg|0;b=a.bj;if(b!==null)a.eg=a.eg+b.eg|0;}
function GJ(a,b){return b?a.bj:a.bd;}
function Ho(a,b){return b?a.bd:a.bj;}
var XR=F();
function ZQ(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Mf;c=c.buffer;d.d9=c;d.jm=new $rt_globals.Int8Array(c);d.hf=new $rt_globals.Uint16Array(c);d.nF=new $rt_globals.Int32Array(c);d.lA=new $rt_globals.Float32Array(c);d.lI=new $rt_globals.Float64Array(c);e=d.d9.byteLength;c=new M;O(c);S(G(c,B(151)),e);Co(N(c));e=b.callToCpp1();c=new M;O(c);S(G(c,B(152)),e);Co(N(c));f=b.callToCpp2();c=new M;O(c);Fp(G(c,B(153)),f);Co(N(c));c=KB(d,b.getC8String());g=new M;O(g);G(G(g,B(154)),c);Co(N(g));c=
KJ(d,b.getC16String());g=new M;O(g);G(G(g,B(155)),c);Co(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.d9,h,8));c=WK(i);g=new M;O(g);G(G(g,B(156)),c);Co(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.d9,h,8));c=AGD(j);g=new M;O(g);G(G(g,B(157)),c);Co(N(g));k=Vc(d,b.getCDoubleArray8(),8);l=AIU(k);c=new M;O(c);G(G(c,B(158)),l);Co(Dd(c));l=AIM(b.getC8String(),B(159),d);c=Jw();G(G(c,B(160)),l);Co(Dd(c));l=AD3(b.getC16String(),B(161),
d);c=Jw();G(G(c,B(162)),l);Co(Dd(c));c=AFv(i,d,b.getCIntArray8(),Et([11,22,33,44,55,66,77,88]));g=Jw();G(G(g,B(163)),c);Co(Dd(g));c=AGP(j,d,b.getCFloatArray8(),100,Et([111,222,333,444,555,666,777,888]));g=Jw();G(G(g,B(164)),c);Co(Dd(g));b=AG1(k,d,b.getCDoubleArray8(),1000,Et([1111,2222,3333,4444,5555,6666,7777,8888]));c=Jw();G(G(c,B(165)),b);Co(Dd(c));}
function AGP(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(166);h=0;i=e;a:{while(h<g){if(Fj(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.lA[e>>>2]!==b[h])break a;h=h+1|0;}return B(167);}return B(168);}
function AG1(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(166);h=0;i=e;a:{while(h<g){if(Cd(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.lI[e>>>3]!==b[h])break a;h=h+1|0;}return B(167);}return B(168);}
function AFv(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(166);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.nF[h>>>2]!=b[g])break a;g=g+1|0;}return B(167);}return B(168);}
function AIM(b,c,d){var e,f,g,h;e=KB(d,b);if(!BM(c,e))return B(169);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.jm[h])return B(170);f=f+1|0;}return B(167);}
function AD3(b,c,d){var e,f,g,h;e=KJ(d,b);if(!BM(c,e))return B(169);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.hf[h>>>1]&65535))return B(170);f=f+1|0;}return B(167);}
function Co(b){Mc(B(2),b);}
function ADg(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function B8(){var a=this;C.call(a);a.cj=0.0;a.cy=0.0;a.ci=0.0;a.b_=0.0;}
function CP(a,b,c,d,e){a.cj=b;a.cy=c;a.ci=d;a.b_=e;}
function B9(a,b){a.cj=b.cj;a.cy=b.cy;a.ci=b.ci;a.b_=b.b_;return a;}
var C7=F(0);
var AMw=null;var AMD=null;var AME=null;var AMF=null;var AMG=null;var AMH=null;var AMI=null;var AMJ=null;var AMK=null;function Wx(){AMw=DF(43);AMD=Bx(B(171));AME=DF(85);AMF=Ck(60,63,65);AMG=Ck(33,66,131);AMH=Ck(255,255,255);AMI=Ck(0,0,0);AMJ=Ck(212,212,212);AMK=Ck(166,214,255);}
function GY(){var a=this;C.call(a);a.v=null;a.p=null;a.bE=null;a.bC=null;}
function ADF(){var a=new GY();Of(a);return a;}
function OD(a,b,c,d){var e=new GY();ABc(e,a,b,c,d);return e;}
function Of(a){a.v=new Br;a.p=new Br;a.bE=new B8;a.bC=new B8;}
function ABc(a,b,c,d,e){a.v=new Br;a.p=new Br;a.bE=new B8;a.bC=new B8;H_(a,b,c,d,e);}
function H_(a,b,c,d,e){Bo(a.v,b,c);Bo(a.p,d,e);}
function Sb(a){var b;b=a.p;return Bd(b.a,b.b)?0:1;}
function Ek(a,b){return Gb(b,a.v,a.p);}
function Jb(a,b,c,d){var e;e=a.v;BR(b,e.a+c|0,e.b+d|0,a.p,a.bE);}
function PX(a,b,c,d,e,f){var g,h,i;g=a.v;d=g.a+d|0;e=g.b+e|0;g=a.p;h=a.bC;i=a.bE;IY(b,b.fw);JT(b.fw,b.bt,d,e,g,b.c6);P8(b.fw,b.bt,c);c=b.fw;g=b.bt;GK(g,c.o$,h);GK(g,c.o8,i);c=c.lZ;g.uniform2f(c,f,0.0);b.d0=H6(b.f9,b.d0);}
function GZ(){GY.call(this);this.ef=null;}
function MI(a,b,c,d){var e=new GZ();OB(e,a,b,c,d);return e;}
function OB(a,b,c,d,e){Of(a);a.ef=new B8;H_(a,b,c,d,e);}
function JB(a){var b,c;b=a.p;c=a.ef;Bo(b,c.ci-c.cj|0,c.b_-c.cy|0);}
function Ig(a,b){Gh(a,0,0,b.bB,b.b9);}
function Gh(a,b,c,d,e){CP(a.ef,b,c,d,e);}
function Ea(a,b,c,d,e,f){var g;g=a.v;Iq(b,g.a+d|0,g.b+e|0,a.p,a.ef,c,a.bE,a.bC,f);}
function Gk(a,b){B9(a.bE,b);}
function Gf(a,b){B9(a.bC,b);}
function Vx(){var a=this;C.call(a);a.de=null;a.iw=0.0;a.fa=0.0;a.eR=0;}
function AEQ(){var a=new Vx();AIt(a);return a;}
function AIt(a){var b;b=OD(0,0,2,20);a.de=b;a.iw=0.5;a.fa=0.0;Ff(187,187,187,255,b.bE);}
function OC(a){return a.de.p.b;}
function M_(a){return a.de.p.a;}
function OS(a,b){var c,d;a:{c=a.eR;if(b>a.fa)while(true){d=a.fa+a.iw;a.fa=d;a.eR=a.eR?0:1;if(b>d)continue;else break a;}}return a.eR==c?0:1;}
function MO(a,b,c){Bo(a.de.v,b,c);}
function Om(a,b){a.fa=b+a.iw*1.25;a.eR=1;}
function VB(a,b){return T3(a.de.v,0,0,b);}
function Qz(a,b,c){if(a.eR)Jb(a.de,b,c.a,c.b);}
function PL(){var a=this;C.call(a);a.pg=null;a.ds=null;}
function AFJ(a,b){var c,d,e,f,g,h,i;c=a.ds;d=c.g8;if(d!==null){e=c.cp.v;f=e.a;g=b.Q;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.g8=g;}d=b.Q;f=d.a;c=c.eP;e=c.p;f=f-e.a|0;h=d.b-e.b|0;Bo(c.v,f,h);b=b.Q;a.pg=b;c=a.ds;d=c.U.r;f=0;a:{while(true){i=c.fe.data;if(f>=i.length)break;if(Ek(i[f],b)){b=c.pz.data[f];break a;}f=f+1|0;}b=null;}Fw(d,b);return 1;}
function ACQ(a,b,c,d){var e,f,g;e=( -d|0)/10|0;b=a.ds.cp;f=b.p;f.a=f.a+e|0;f.b=f.b+e|0;b=b.v;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function AH4(a,b,c,d,e){var f,g,h;f=!d?B(172):B(173);g=Bw();h=new M;O(h);S(G(S(G(h,f),c),B(174)),e);Bq(g,N(h));if(!c&&e==1){g=b.Q;b=a.ds;b.g8=d&&Ek(b.cp,g)?g:null;if(d){MO(a.ds.fo,g.a,g.b);b=a.ds;Om(b.fo,F$(b.U.r));}}if(!c&&e==2){b=a.ds;RZ(b,b.cp);}return 1;}
function AES(a,b){var c,d,e,f,g,h;c=Bw();d=!b.c2?B(175):B(176);e=b.cH;f=b.bo;g=b.iA;h=new M;O(h);E$(G(S(G(G(G(h,d),e),B(177)),f),B(178)),g);Bq(c,N(h));return !Uh(b)&&!VA(b)?1:0;}
function AIf(a,b){Bq(Bw(),B(179));return 1;}
function Zx(a,b,c){var d,e;Bq(Bw(),B(180));d=!c?B(181):B(60);e=new M;O(e);G(G(G(e,B(182)),d),B(183));QL(b,N(e));return 1;}
function AGE(a){Bq(Bw(),B(184));}
function Sl(){var a=this;B8.call(a);a.eF=0;a.eI=0;a.eG=0;a.eH=0;}
function DF(a){var b=new Sl();AIC(b,a);return b;}
function Ck(a,b,c){var d=new Sl();AA2(d,a,b,c);return d;}
function Bx(a){var b=new Sl();AGR(b,a);return b;}
function AML(a,b,c,d){var e=new Sl();Nm(e,a,b,c,d);return e;}
function Dx(a){var b=new Sl();AAi(b,a);return b;}
function AIC(a,b){Nm(a,b,b,b,255);}
function AA2(a,b,c,d){Nm(a,b,c,d,255);}
function AGR(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.eF=G9(L(b,1))*17|0;a.eI=G9(L(b,2))*17|0;a.eG=G9(L(b,3))*17|0;a.eH=255;}else{a.eF=Jk(L(b,1),L(b,2));a.eI=Jk(L(b,3),L(b,4));a.eG=Jk(L(b,5),L(b,6));a.eH=I(b)!=9?255:Jk(L(b,7),L(b,8));}Ff(a.eF,a.eI,a.eG,a.eH,a);return;}}
function Nm(a,b,c,d,e){a.eF=b;a.eI=c;a.eG=d;a.eH=e;Ff(b,c,d,e,a);}
function AAi(a,b){a.eF=b.eF;a.eI=b.eI;a.eG=b.eG;a.eH=b.eH;B9(a,b);}
function G9(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Jk(b,c){return (16*G9(b)|0)+G9(c)|0;}
function Ur(){var a=this;C.call(a);a.eJ=null;a.W=null;a.df=null;a.b1=null;a.eb=null;a.bN=null;a.el=null;a.bc=0;a.iV=0;a.fM=0;a.em=0;a.gP=null;a.g7=null;a.n0=null;}
function TU(){var a=new Ur();AH5(a);return a;}
function AH5(a){var b;a.W=ADF();a.df=new Br;a.b1=new Br;b=new B8;b.b_=0.125;a.eb=b;a.bN=AMM;a.fM=(-1);}
function IJ(a,b){PE(a);a.bN=b;}
function KH(a,b){B9(a.W.bE,b);}
function RR(a,b){B9(a.W.bC,b);}
function NX(a,b){a.eJ=b;PE(a);}
function Pp(a){a.el=D$(a.el,null);Bo(a.df,0,0);a.bN=AMM;a.fM=(-1);Bo(a.W.p,0,0);}
function Fl(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.eJ;if(d===null){b=new Bg;Bb(b,B(185));J(b);}D7(b,d);e=J3(a.eJ);f=0;a.bc=Cd(2.0*c);a.iV=Fj(a.eJ.i9);g=0;h=a.bN.data;i=h.length;j=0;k=e;while(j<i){d=h[j];l=ET(b,d.hK)+0.875|0;m=a.iV;m=(m+l|0)+m|0;f=Bi(f,m);d=d.cS;n=d.v;n.a=g;n.b=0;n=d.p;n.a=m;n.b=e;CP(d.ef,g,0.0,m,k);g=g+m|0;j=j+1|0;}b=a.df;b.a=g;b.b=e;b=a.W.p;l=a.em;if(l)m=f+(a.bc*2|0)|0;else{m=a.bc;m=(g+m|0)+Bd(m,a.bN.data.length)|0;}b.a=m;if(!l)e=e+(a.bc*2|0)|0;else{m=a.bc;e=Bd(e+m|0,a.bN.data.length)+m|0;}b.b
=e;}
function HX(a,b,c){var d,e,f,g,h,i,j;Bo(a.W.v,b,c);d=a.bc;e=a.bN.data;f=e.length;g=0;h=d;while(g<f){i=e[g].cS;j=i.v;j.a=b+d|0;j.b=c+h|0;if(!a.em){if(!i.p.a)Yg();d=d+(i.p.a+a.bc|0)|0;}else{if(!i.p.b)Yg();h=h+(i.p.b+a.bc|0)|0;}g=g+1|0;}}
function Yg(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Dz(a){var b,c;b=a.df;if(b.a==9&&!b.b){c=new Bg;Bb(c,B(186));J(c);}return a.W.p;}
function PE(a){Bo(a.df,0,0);}
function Hj(a,b,c){var d,e,f,g,h,i,j,k,l;if(!a.bN.data.length)return;a:{if(a.el!==null){d=a.df;if(Bd(d.a,d.b))break a;}d=a.df;if(!Bd(d.a,d.b))Fl(a,b.bM,c);d=a.df;e=d.a;f=d.b;if(!Bd(e,f))return;d=Di(b,e,f);D7(d,a.eJ);g=a.eJ;h=g.hl;h=h-(h+g.fZ)/16.0;i=a.bN.data;e=i.length;f=0;while(f<e){g=i[f];CF(d,g.hK,g.cS.ef.cj+a.iV,h);f=f+1|0;}g=D$(a.el,Dv(b));a.el=g;Dm(g,d);JR(d);}if(!Sb(a.W))Uo(a,b);i=a.bN.data;e=i.length;f=0;while(f<e){Ea(i[f].cS,b,a.el,0,0,0.0);f=f+1|0;}b:{if(a.em){i=a.bN.data;f=i.length;j=0;while(true)
{if(j>=f)break b;d=i[j].cS;g=a.b1;e=a.W.p.a-(a.bc*2|0)|0;k=d.p;e=e-k.a|0;g.a=e;g.b=k.b;if(e>0){l=d.v;BR(b,l.a+k.a|0,l.b,g,d.bC);}j=j+1|0;}}}}
function Uo(a,b){var c,d,e,f,g;c=a.b1;d=a.W;c.a=d.p.a;c.b=a.bc;e=d.v;BR(b,e.a,e.b,c,d.bC);c=a.W;d=c.v;BR(b,d.a,(d.b+c.p.b|0)-a.bc|0,a.b1,c.bC);c=a.b1;f=a.bc;c.a=f;d=a.W;c.b=(d.p.b-f|0)-f|0;e=d.v;BR(b,e.a,e.b+f|0,c,d.bC);c=a.W;d=c.v;f=d.a+c.p.a|0;g=a.bc;BR(b,f-g|0,d.b+g|0,a.b1,c.bC);c=a.b1;d=a.W;e=d.p;f=e.a;g=a.bc;c.a=(f-g|0)-g|0;c.b=(e.b-g|0)-g|0;e=d.v;BR(b,e.a+g|0,e.b+g|0,c,d.bE);if(a.em){c=a.b1;d=a.W;e=d.p;c.a=e.a;f=a.bc;c.b=f;d=d.v;BR(b,d.a+f|0,d.b+e.b|0,c,a.eb);c=a.W;d=c.v;BR(b,d.a+a.bc|0,d.b+c.p.b|0,a.b1,
a.eb);c=a.W;d=c.v;f=d.a;g=a.bc;BR(b,f+(g*2|0)|0,(d.b+c.p.b|0)+g|0,a.b1,a.eb);c=a.b1;f=a.bc;c.a=f;d=a.W;e=d.p;c.b=e.b-f|0;d=d.v;BR(b,d.a+e.a|0,d.b+f|0,c,a.eb);c=a.W;d=c.v;BR(b,d.a+c.p.a|0,d.b+a.bc|0,a.b1,a.eb);c=a.W;d=c.v;f=d.a+c.p.a|0;g=a.bc;BR(b,f+g|0,d.b+(g*2|0)|0,a.b1,a.eb);}}
function Ie(a,b,c){var d,e,f,g,h,i;d=Ek(a.W,b);e=!d?(-1):Qx(a,b);f=a.fM;if(f!=e){if(f>=0){g=a.bN.data[f];La(g,0);if(a.n0!==null){f=a.fM;h=Bw();g=Ce(g);i=new M;O(i);G(G(S(G(i,B(187)),f),B(188)),g);Bq(h,N(i));}}if(e>=0){h=a.bN.data[e];La(h,1);g=a.g7;if(g!==null)g.ky(b,e,h);}a.fM=e;}return d&&Hd(c)?1:0;}
function Ih(a,b,c,d,e){var f,g;if(!Ek(a.W,b)){if(d&&!Sb(a.W)){b=a.gP;if(b!==null)b.y();}return 0;}if(e==1&&d){f=Qx(a,b);if(f>=0){g=a.bN.data[f];if(!Ke(g))g.pn.y();}}return 1;}
function Qx(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.bN.data;if(c>=d.length)return (-1);e=d[c].cS;if(Ek(e,b))return c;if(a.em){f=e.v;g=f.a;e=e.p;h=e.a;g=g+h|0;i=f.b;f=a.b1;f.a=(a.W.p.a-(a.bc*2|0)|0)-h|0;f.b=e.b;if(T3(b,g,i,f))break;}c=c+1|0;}return c;}
function OK(a){a.em=1;}
var Qf=F(0);
function Hd(a){return Gz(a,null);}
function Jd(b){var c;c=new Lf;c.kw=b;return c;}
function TB(){var a=this;C.call(a);a.fs=null;a.b3=null;a.e1=null;a.fN=0.0;a.iP=null;a.hw=null;a.oZ=null;a.gk=null;}
function TQ(a){var b=new TB();ACy(b,a);return b;}
function ACy(a,b){a.fs=new Br;a.b3=CV();a.hw=AMv;a.oZ=AMB;a.gk=AMN;a.e1=b;}
function Jv(a,b,c){a.iP=b;a.hw=c;}
function H2(a,b,c,d){var e;if(a.iP!==null&&!EN(a)){a.gk=d;e=Pz(a,b,c,null);b=new Sy;b.m4=a;e.gP=b;return;}b=new BE;V(b);J(b);}
function Eh(a){if(EN(a)){Po(a,null);a.gk.y();a.gk=AMN;}}
function Pz(a,b,c,d){var e,f,g;e=a.fs;if(Bd(e.a,e.b)&&a.fN!==0.0){e=TU();OK(e);IJ(e,JU(c));NX(e,a.iP);KH(e,a.hw);RR(e,a.oZ);Fl(e,a.e1.bM,a.fN);if(d===null)f=b.a;else{g=b.a;f=a.fs.a<((g+(Dz(d)).a|0)+(Dz(e)).a|0)?g-(Dz(e)).a|0:g+(Dz(d)).a|0;}g=b.b;b=a.fs;HX(e,Bi(0,Ba(f,b.a-(Dz(e)).a|0)),Bi(0,Ba(g,b.b-(Dz(e)).b|0)));b=new SF;b.mK=a;b.mJ=e;e.g7=b;Cg(a.b3,e);return e;}c=new DM;Bb(c,B(189));J(c);}
function JQ(a,b,c){Dp(a.fs,b);if(a.fN!==c){b=BW(a.b3);while(B7(b)){Fl(B1(b),a.e1.bM,c);}a.fN=c;}}
function I$(a){var b,c;if(!D5(a.b3))CC(a.e1,1);b=0;while(true){c=a.b3;if(b>=c.l)break;Hj(BS(c,b),a.e1,a.fN);b=b+1|0;}}
function Jl(a,b,c){var d,e;d=0;e=a.b3.l-1|0;a:{while(e>=0){d=Ie(BS(a.b3,e),b,c);if(d)break a;e=e+(-1)|0;}}return d;}
function HQ(a,b,c,d,e){var f,g;f=0;g=a.b3.l-1|0;a:{while(g>=0){f=Ih(BS(a.b3,g),b,c,d,e);if(f)break a;g=g+(-1)|0;}}return f;}
function Po(a,b){var c,d;c=a.b3.l-1|0;a:{while(true){if(c<0)break a;d=BS(a.b3,c);if(b===d)break;FR(a.b3,c);Pp(d);c=c+(-1)|0;}}}
function EN(a){return a.b3.l<=0?0:1;}
var DE=F(0);
var AMC=null;var AMO=null;var AMv=null;var AMB=null;var AMP=null;var AMQ=null;var AMR=null;function FE(){return U1(HF(IZ(),1.0,1.0,1.0,new B8),AMv,AMP);}
function Vu(){AMC=S6(50,50,50,100);AMO=S6(80,80,80,200);AMv=Bx(B(190));AMB=Bx(B(191));AMP=Bx(B(192));AMQ=U1(Bx(B(193)),AMv,AMP);AMR=U1(Bx(B(194)),AMv,AMP);}
var O9=F();
function AHK(a){Bq(Bw(),B(195));}
var O_=F();
function AF_(a){Bq(Bw(),B(196));}
function ER(){var a=this;C.call(a);a.cS=null;a.pn=null;a.jh=null;a.hE=null;a.hK=null;}
function AHl(a,b,c){var d=new ER();AC3(d,a,b,c);return d;}
function AKy(a,b,c,d){var e=new ER();VH(e,a,b,c,d);return e;}
function AC3(a,b,c,d){VH(a,b,c,d,null);}
function VH(a,b,c,d,e){var f;f=new GZ;Of(f);f.ef=new B8;a.cS=f;a.hK=c;a.jh=d;a.pn=b;B9(f.bE,d.pb);B9(a.cS.bC,d.hv);a.hE=e;}
function Ke(a){return a.hE===null?0:1;}
function La(a,b){B9(a.cS.bC,!b?a.jh.hv:a.jh.ox);}
function VT(){var a=this;C.call(a);a.ra=20;a.fd=null;a.dT=null;a.gf=null;a.hU=0;a.ge=0;a.gz=0.0;a.bV=null;a.dv=null;a.d7=null;a.ed=0;}
function AD_(){var a=new VT();AHX(a);return a;}
function AHX(a){a.ra=20;a.fd=new Br;a.dT=new Br;a.bV=CV();}
function SH(a,b){var c,d,e,f,g;c=a.ed;if(b==c)return;d=a.bV.l;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Bi(0,(c-1|0)/20|0);f=Bi(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){Ot(a,b);a.ed=b;}else{if(a.ed>=b)while(true){if(g<f)break a;a.ed=OW(BS(a.bV,g%d|0),a.dv,a.d7,a.ed,b,e,a.gz);g=g+(-1)|0;}while(f<=g){a.ed=OW(BS(a.bV,f%d|0),a.dv,a.d7,a.ed,b,e,a.gz);f=f+1|0;}}}}
function P0(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=BW(a.bV);while(B7(f)){g=B1(f);h=a.fd;i=Bd(a.bV.l,a.ge);j=g.dZ.b;k=((g.gt.b-(b%i|0)|0)+i|0)%i|0;l=k+j|0;m=BB(l,c);if(m<=0){Bo(g.eK,g.bx.bB,j);CP(g.en,0.0,0.0,g.bx.bB,j);He(g,e,k,h,d.gB,d.fz);}else{if(m>0&&k<c){m=Bi(c-k|0,0);Bo(g.eK,g.bx.bB,m);CP(g.en,0.0,0.0,g.bx.bB,m);He(g,e,k,h,d.gB,d.fz);}if(l>i){m=Ba(l%i|0,c);Bo(g.eK,g.bx.bB,m);n=g.en;o=g.bx;CP(n,0.0,b%o.b9|0,o.bB,m);He(g,e,0,h,d.gB,d.fz);}}}}
function H0(a,b,c,d){var e,f,g,h,i,j;e=a.bV.l;while(true){f=a.bV.l;g=Bd(f,a.ge);if(g>(d+a.hU|0))break;h=Cf(0,g);i=new KT;g=a.dT.a;f=a.hU;j=a.gf;i.eK=new Br;i.en=new B8;i.gt=h;i.cN=20;i.dm=f;i.dZ=Cf(g,20*f|0);i.eq=Pi(j,f);if(i.bx===null)i.bx=Dv(b);Cg(a.bV,i);}if(f==e)return;Ot(a,c);}
function Ot(a,b){var c,d,e,f,g,h,i,j;c=a.bV;d=c.l;e=Bd((b/(d*20|0)|0)+1|0,d)*20|0;c=BW(c);while(B7(c)){f=B1(c);g=a.dv;h=a.gz;DX(g);i=0;while(true){j=f.cN;if(i>=j)break;j=e-Bd(d,j)|0;if(j<b)j=e;e=j+1|0;Fc(f,g,C8(e),Bd(f.dm,i)+f.eq|0,h);i=i+1|0;}Dm(f.bx,g);}}
function PC(a,b,c,d){var e;a.gf=b;a.hU=c;e=c*20|0;a.ge=e;b=D$(a.dv,Di(d,a.dT.a,e));a.dv=b;D7(b,a.gf);Od(a.dv,2);b=D$(a.d7,Di(d,a.dT.a,c));a.d7=b;D7(b,a.gf);Od(a.d7,2);}
function QN(a,b,c,d,e){Dp(a.fd,b);Bo(a.dT,c,d);a.gz=e;}
var TZ=F(0);
function S6(b,c,d,e){return Ff(b,c,d,e,new B8);}
function Ff(b,c,d,e,f){CP(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function HF(b,c,d,e,f){var g,h,i,j;g=b*6.0;c=d*c;h=g%2.0-1.0;if(h<=0.0)h= -h;i=c*(1.0-h);d=d-c;j=0.0;if(g>=1.0){if(g<2.0){b=c;c=i;i=b;}else if(g<3.0){b=c;j=i;c=0.0;i=b;}else if(g<4.0){j=c;c=0.0;}else if(g>=5.0){j=i;i=0.0;}else{j=c;c=i;i=0.0;}}f.cj=c+d;f.cy=i+d;f.ci=j+d;f.b_=e;return f;}
function FF(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var Xb=F(0);
function Xt(){return AD8(Ck(96,99,102),Ck(49,51,53),Ck(164,163,163),DF(50));}
function RC(){var a=this;C.call(a);a.gE=null;a.mC=null;a.fl=null;}
function AAI(a,b,c,d){var e,f;e=(Kk(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b=a.fl;b.cZ=Ba(Bi(0,b.cZ+Bd(e,f)|0),MR(b));return 1;}
function ABq(a,b,c,d,e){if(!d&&a.gE!==null){a.gE=null;return 1;}if(!c&&e==1&&d){b=F6(a.fl.e$,b.Q,a.mC,1);a.gE=b;if(b!==null)return 1;}return 1;}
function ABm(a,b){var c;c=a.gE;if(c!==null){c.j(b.Q);return 1;}c=a.fl;return GA(c.e$,b.Q,Jd(c.U.r));}
function VS(){var a=this;C.call(a);a.dM=null;a.b$=null;a.cX=null;a.dj=null;a.jE=null;a.g5=null;}
function K_(){var a=new VS();ABj(a);return a;}
function ABj(a){var b;a.dM=new Br;a.b$=new Br;a.cX=new Br;a.dj=new Br;b=new B8;a.jE=b;a.g5=new B8;B9(b,AMC);B9(a.g5,AMO);}
function MM(a){var b;b=a.b$;return !Bd(b.a,b.b)?0:1;}
function Sg(a,b){return Gb(b,a.cX,a.dj);}
function F6(a,b,c,d){var e,f,g,h;e=Sg(a,b);f=Gb(b,a.dM,a.b$);if(!e&&!f)return null;if(!f){if(!d)c.j(OY(a,b.a-a.cX.a|0));else c.j(OX(a,b.b-a.cX.b|0));}g=!d?a.dM.a+(a.b$.a/2|0)|0:a.dM.b+(a.b$.b/2|0)|0;h=!d?b.a:b.b;g=!f?0:g-h|0;if(!d){b=new SK;b.kd=a;b.kc=c;b.kb=g;}else{b=new SL;b.pr=a;b.pq=c;b.pp=g;}return b;}
function TX(b,c){var d;d=new Kr;d.nZ=b;d.nY=c;return d;}
function OX(a,b){var c,d,e;c=a.dj.b;d=a.b$.b;e=c-d|0;return TX(Ba(Bi(0,b-(d/2|0)|0),e),e);}
function OY(a,b){var c,d,e;c=a.dj.a;d=a.b$.a;e=c-d|0;return TX(Ba(Bi(0,b-(d/2|0)|0),e),e);}
function Ix(a,b,c,d,e,f){Li(a,b,c,d,e,0,f,1);}
function S9(a,b,c,d,e,f,g){Li(a,b,c,d,e,f,g,0);}
function Li(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bo(a.dj,0,0);Bo(a.b$,0,0);}else{i=g*3|0;i=Bi(MJ(d,d,e),i);j=MJ(b,d-i|0,e-d|0);if(!h){k=a.dM;k.a=j+f|0;k.b=c-g|0;l=a.b$;l.a=i;l.b=g;l=a.cX;l.a=f;l.b=k.b;k=a.dj;k.a=d;k.b=g;}else{l=a.dM;l.a=c-g|0;l.b=j+f|0;k=a.b$;k.a=g;k.b=i;k=a.cX;k.a=l.a;k.b=f;k=a.dj;k.a=g;k.b=d;}}}
function GF(a,b,c){var d,e,f;d=c.a;e=a.cX;BR(b,d+e.a|0,c.b+e.b|0,a.dj,a.jE);e=a.b$;e.a=e.a-2|0;e.b=e.b-2|0;d=c.a;f=a.dM;BR(b,(d+f.a|0)+1|0,(c.b+f.b|0)+1|0,e,a.g5);b=a.b$;b.a=b.a+2|0;b.b=b.b+2|0;}
function GA(a,b,c){return Sg(a,b)&&Hd(c)?1:0;}
function NP(){C.call(this);this.p_=null;}
function Y8(a,b){var c,d,e,f;c=b.data;b=Bw();d=Ce(c[0]);e=new M;O(e);G(G(e,B(146)),d);Bq(b,N(e));b=Bw();f=c[1];d=new M;O(d);G(G(d,B(197)),f);Bq(b,N(d));}
function NO(){C.call(this);this.rL=null;}
function AIL(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bw();e=Ce(c[0]);f=new M;O(f);G(G(f,B(146)),e);Bq(d,N(f));g=EW(N$(b,1));b=Bw();d=Ce(c[1]);if(g===null)c=B(21);else{c=new M;O(c);BN(c,B(94));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BN(c,B(95));Bv(c,i[h]);h=h+1|0;}BN(c,B(96));c=N(c);}e=new M;O(e);G(G(G(G(e,B(198)),d),B(199)),c);Bq(b,N(e));}
function NN(){C.call(this);this.k0=null;}
function AA7(a,b){Qe(a.k0,b);}
function NM(){C.call(this);this.pU=null;}
function AEX(a,b){var c,d,e,f,g;c=b.data;d=Bw();e=Ce(c[0]);f=new M;O(f);G(G(f,B(146)),e);Bq(d,N(f));g=DU(N$(b,1));b=Bw();d=Ce(c[1]);c=WK(g);e=new M;O(e);G(G(G(G(e,B(200)),d),B(201)),c);Bq(b,N(e));}
function MH(){var a=this;C.call(a);a.hj=null;a.k$=null;a.jw=null;}
function YF(a,b){var c;c=b.c2&&!b.iA?1:0;if(c&&b.bT&&b.bo==79){if(!b.bi)Jy(a.hj,a.jw);else Js(a.hj,a.k$);return 1;}return 0;}
function NK(){C.call(this);this.qY=null;}
function AEg(a,b){var c,d;c=Q6();b=Ce(b);d=new M;O(d);G(G(d,B(202)),b);Bq(c,N(d));b=new Fm;V(b);J(b);}
function NJ(){C.call(this);this.l6=null;}
function AFR(a,b){var c,d,e,f;c=a.l6;d=c.U.r;e=new Lt;e.mL=c;f=T(C,1);f.data[0]=b;CH(d,e,B(203),f);}
function PK(){var a=this;C.call(a);a.oC=null;a.iq=null;}
function AHj(a,b){var c,d,e,f,g,h;c=a.iq;d=c.iL;if(d!==null){e=c.cT.v;f=e.a;g=b.Q;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.iL=g;}d=b.Q;h=d.a;c=c.dG;e=c.p;h=h-e.a|0;f=d.b-e.b|0;Bo(c.v,h,f);a.oC=b.Q;return 1;}
function AFq(a,b,c,d,e){var f;if(!c&&e==1){f=b.Q;b=a.iq;if(!(d&&Ek(b.cT,f)))f=null;b.iL=f;}return 1;}
function Nr(){var a=this;C.call(a);a.gp=null;a.k4=null;a.fy=null;}
function Y1(a,b,c,d){var e,f;e=(Kk(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b=a.fy;b.du=Ba(Bi(0,b.du+Bd(e,f)|0),N5(b));return 1;}
function AGN(a,b,c,d,e){if(!d&&a.gp!==null){a.gp=null;return 1;}if(!c&&e==1&&d){b=F6(a.fy.fL,b.Q,a.k4,1);a.gp=b;if(b!==null)return 1;}return 1;}
function ZH(a,b){var c;c=a.gp;if(c!==null){c.j(b.Q);return 1;}c=a.fy;return GA(c.fL,b.Q,Jd(c.U.r));}
var Wy=F(0);
var Wd=F();
function WL(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AMS());}return b.data.length;}
function Qn(b,c){if(b===null){b=new FD;V(b);J(b);}if(b===E($rt_voidcls())){b=new BE;V(b);J(b);}if(c>=0)return AHZ(b.dK,c);b=new S4;V(b);J(b);}
function AHZ(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var G3=F(Bg);
var LV=F(0);
var Md=F();
function AB3(a,b,c){var d,e;d=b;e=c;b=new M;O(b);S(G(S(G(b,B(204)),d),B(205)),e);Co(N(b));return d+e|0;}
var LW=F(0);
var Mb=F();
function ACU(a,b,c){var d,e;d=b;e=c;b=new M;O(b);Fp(G(Fp(G(b,B(206)),d),B(205)),e);Co(N(b));return d+e;}
var Uj=F();
var Tu=F(0);
function HB(){var a=this;C.call(a);a.dU=null;a.e8=null;a.bB=0;a.b9=0;}
var AL7=0;function WG(a){var b;b=a.e8;if(b!==null){AL7=AL7-1|0;a.dU.db.deleteTexture(b);a.e8=null;}}
function JD(a){var b,c;b=a.dU.db;c=a.e8;b.bindTexture(3553,c);}
function Dm(a,b){KR(a,b.iU,b.h$,32856);MK(a,b,0,0);}
function KR(a,b,c,d){var e,f,g;a:{e=a.bB;if(e){f=a.b9;if(f){if(e==b&&f==c){JD(a);break a;}g=new Bg;Bb(g,B(207));J(g);}}a.bB=b;a.b9=c;JD(a);a.dU.db.texStorage2D(3553,1,d,b,c);g=a.dU.db;g.texParameteri(3553,10242,33071);g.texParameteri(3553,10243,33071);g.texParameteri(3553,10241,9729);g.texParameteri(3553,10240,9729);}}
function Gw(a,b,c,d){JD(a);MK(a,b,c,d);}
function MK(a,b,c,d){var e;e=a.dU.db;b=b.g0;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function PF(){C.call(this);this.hu=null;}
var AMM=null;function UV(){var a=new PF();Vo(a);return a;}
function Vo(a){a.hu=CV();}
function En(a,b,c,d){MB(a,AHl(d,b,c));}
function CI(b,c,d){return AHl(d,b,c);}
function Fb(a,b,c,d){MB(a,AKy(null,b,c,d));}
function MB(a,b){Cg(a.hu,b);}
function HD(a){return Hb(H7(a.hu,AMM));}
function Tn(){AMM=T(ER,0);}
function Lf(){C.call(this);this.kw=null;}
function Gz(a,b){Fw(a.kw,b);return 1;}
var Rl=F(0);
var Ga=F(0);
var Dn=F();
function D5(a){return a.l?0:1;}
function H7(a,b){var c,d,e,f,g,h;c=b.data;d=a.l;e=c.length;if(e<d)b=Qn(GE(CW(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BW(a);while(B7(f)){g=b.data;h=e+1|0;g[e]=B1(f);e=h;}return b;}
var Kz=F(0);
function Tv(b){var c;c=new SD;c.n$=b;return c;}
function E_(){Dn.call(this);this.cK=0;}
function BW(a){var b;b=new K2;b.kt=a;b.oG=a.cK;b.lL=a.kn();b.mO=(-1);return b;}
var GR=F(0);
function TT(){var a=this;E_.call(a);a.bP=null;a.l=0;}
function CV(){var a=new TT();ABS(a);return a;}
function AMT(a){var b=new TT();Kt(b,a);return b;}
function AHV(a){var b=new TT();AAD(b,a);return b;}
function ABS(a){Kt(a,10);}
function Kt(a,b){a.bP=T(C,b);}
function AAD(a,b){var c,d,e,f;Kt(a,1);c=BW(b);d=0;while(true){e=a.bP.data;f=e.length;if(d>=f)break;e[d]=B1(c);d=d+1|0;}a.l=f;}
function Hw(a,b){var c,d;c=a.bP.data.length;if(c<b){d=c>=1073741823?2147483647:Bi(b,Bi(c*2|0,5));a.bP=Dk(a.bP,d);}}
function BS(a,b){Hm(a,b);return a.bP.data[b];}
function AE9(a){return a.l;}
function Cg(a,b){var c,d;Hw(a,a.l+1|0);c=a.bP.data;d=a.l;a.l=d+1|0;c[d]=b;a.cK=a.cK+1|0;return 1;}
function FR(a,b){var c,d,e,f;Hm(a,b);c=a.bP.data;d=c[b];e=a.l-1|0;a.l=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cK=a.cK+1|0;return d;}
function HJ(a){var b,c,d,e,f,g;b=a.bP;c=0;d=a.l;e=null;if(c>d){e=new BE;V(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.l=0;}
function Hm(a,b){var c;if(b>=0&&b<a.l)return;c=new Bp;V(c);J(c);}
function Mq(a,b){var c;if(b>=0&&b<=a.l)return;c=new Bp;V(c);J(c);}
function H3(a,b){var c;c=0;while(c<a.l){b.j(a.bP.data[c]);c=c+1|0;}}
var Hc=F(0);
var AMN=null;var AMU=null;var AMV=null;function Xv(){AMN=new QR;AMU=new QS;AMV=new QQ;}
var Gy=F(0);
var Si=F();
function AGk(a,b,c,d){var e;b=Bw();d=Ce(d);e=new M;O(e);G(G(S(G(e,B(208)),c),B(188)),d);Bq(b,N(e));}
var Sj=F();
function Sa(){var a=this;C.call(a);a.iS=0;a.iT=0;}
function N0(a){var b,c;b=a.iS;c=a.iT;b=b^b<<2;b=b^b>>>7;b=c^c>>>3^b;a.iS=c;a.iT=b;return b;}
function PJ(a,b){return 5.960464477539063E-8*(N0(a)&16777215)*b|0;}
function Xl(){var a=this;C.call(a);a.gB=null;a.fz=null;a.lQ=null;a.lW=null;}
function AD8(a,b,c,d){var e=new Xl();AIA(e,a,b,c,d);return e;}
function AIA(a,b,c,d,e){a.gB=b;a.fz=c;a.lQ=d;a.lW=e;}
function SZ(){C.call(this);this.m2=null;}
function AFT(a,b){var c;c=a.m2.fl;c.cZ=GP(b,MR(c));}
var VX=F();
function Rv(){C.call(this);this.pf=null;}
function Zz(a,b){var c;c=a.pf.fy;c.du=GP(b,N5(c));}
var J7=F(0);
function Vd(){var a=this;C.call(a);a.mR=0;a.iY=0;a.iW=null;a.by=null;a.D=null;a.cd=null;a.G=0;a.M=0;a.cn=0;a.il=0;a.cY=0;a.gu=null;a.dc=null;a.bI=null;a.N=0;a.h=null;a.w=null;a.co=null;a.jp=null;a.eQ=null;a.ow=0;a.nk=0;a.nc=0;a.bU=0;a.hy=0;a.iE=0;a.gc=null;a.eh=null;a.ep=null;a.ej=null;a.R=0;a.bu=0;a.fm=0;a.dd=0.0;a.f1=0;a.fU=0;a.p4=0;a.pG=0;a.gQ=0;a.ic=0;a.dJ=null;a.bZ=null;a.dQ=null;a.fR=0;a.fQ=0;a.eO=0;a.px=null;a.e0=0;a.c5=null;a.id=0;a.mP=null;a.gv=null;a.dF=DQ;a.bA=null;a.d1=null;a.n_=null;a.op=null;}
function AKH(a,b){var c=new Vd();YB(c,a,b);return c;}
function YB(a,b,c){var d,e;a.mR=0;a.iW=T(Bm,10);a.cd=AEQ();a.cY=16;a.gu=B(113);a.bI=T(IV,4);a.w=AFf();a.co=UU();a.eQ=T(Ef,0);a.nc=100;a.hy=1;a.gc=Cf(1,0);a.eh=ADF();a.ep=K_();a.ej=K_();a.R=0;a.bu=0;a.fm=0;a.fU=1;a.gQ=1;a.ic=3;a.dJ=AD_();a.bZ=new Br;a.dQ=new Br;a.eO=1;a.px=B(209);a.e0=0;a.mP=new B8;a.gv=new Br;a.bA=new Br;d=new Ru;d.m8=a;a.n_=d;d=new Rr;d.mm=a;a.op=d;a.by=b;a.h=c;a.D=b.bl;if(b.r.cE!==(DV()).activeElement?0:1)Gm(a);e=a.iW.data;b=new Rq;b.kl=a;e[0]=b;b=new Rt;b.mv=a;e[1]=b;b=new Rs;b.lV=a;e[2]
=b;b=new Rp;b.n4=a;e[3]=b;YU();a.f1=AMW===AMX?0:1;a.c5=TQ(a.D);}
function Gm(a){a.il=1;GW(a);}
function LX(a){a.il=0;}
function GW(a){Om(a.cd,F$(a.by.r));}
function EH(a,b,c){if(a.dd!==0.0)PT(a,b,c);a.cY=c;a.gu=b;E9(a.by.r);}
function PT(a,b,c){var d,e,f,g,h,i,j,k,l;d=Cd(c*a.dd);e=a.dc;f=e!==null?e.hI:0;if(!(d==f&&Wu(b,a.gu))){g=a.dJ;H3(g.bV,new NZ);HJ(g.bV);g.dv=D$(g.dv,null);g.d7=D$(g.d7,null);$rt_globals.console.info("invalidateFont");h=a.eQ.data;c=h.length;f=0;while(f<c){Ne(h[f]);f=f+1|0;}h=a.h.C.data;c=h.length;f=0;while(f<c){DD(h[f]);f=f+1|0;}h=a.bI.data;i=F7(0,0);e=a.D;j=d;h[i]=FP(e,b,j,400,0);a.bI.data[F7(0,1)]=FP(a.D,b,j,400,2);a.bI.data[F7(1,0)]=FP(a.D,b,j,700,0);a.bI.data[F7(1,1)]=FP(a.D,b,j,700,2);e=a.bI.data[F7(0,0)];a.dc
=e;i=J3(e);k=Fj(i*1.375);a.N=k;a.iY=k*0|0;e=a.cd;l=a.dc;e.de.p.b=k-(((k/2|0)-((((l.ii+l.nP|0)+l.hI|0)/2|0)/2|0)|0)*2|0)|0;a.jp=D$(a.jp,Di(a.D,512,k));Jv(a.c5,a.dc,AMv);c=a.N;f=OC(a.cd);e=new M;O(e);b=G(G(e,B(210)),b);Bv(b,32);S(G(S(G(S(G(S(b,d),B(211)),i),B(212)),c),B(213)),f);$rt_globals.console.info($rt_ustr(N(e)));if(AMY){c=I0(a.dc,a.N);b=new M;O(b);S(G(b,B(214)),c);$rt_globals.console.info($rt_ustr(N(b)));}Kh(a);a.cn=EU(DI(a),a.M,a.D.bM,a.bI);EO(a);Q3(a);}}
function OU(a){return Bd(B4(a.h)+5|0,a.N);}
function Eg(a){return Bi(OU(a)-Cl(a)|0,0);}
function Fq(a){return Bi(a.fm-D3(a)|0,0);}
function D3(a){return a.dQ.a-a.bU|0;}
function Cl(a){return a.dQ.b-a.iY|0;}
function Kh(a){H_(a.eh,0,Cl(a),a.dQ.a,a.iY);B9(a.eh.bE,a.co.jG);a.gc.b=Cl(a);}
function X_(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=Cl(a);c=a.dQ.a;d=Jr(Cl(a),a.N)+7|0;e=a.eQ;if(e.data.length<d)a.eQ=U3(d,e,a.ow,a.nk,a.h);CC(a.D,0);f=a.gc;f.a=a.hy;g=a.D;h=a.bZ;BR(g,(h.a+a.bU|0)-a.iE|0,h.b,f,a.co.nT);f=a.gc;i=a.iE;j=a.hy;f.a=i-j|0;g=a.D;h=a.bZ;BR(g,((h.a+a.bU|0)-i|0)+j|0,h.b,f,a.co.gN);a.R=Ba(a.R,Eg(a));a.bu=Ba(a.bu,Fq(a));i=(a.N-OC(a.cd)|0)/2|0;j=(a.cn-(M_(a.cd)/2|0)|0)-a.bu|0;MO(a.cd,a.bU+j|0,(i+Bd(a.G,a.N)|0)-a.R|0);k=B4(a.h);l=IT(a);m=Qw(a);a.ow=l;a.nk=m;n=l;while(n<=m&&n<k)
{o=Cj(a.h,n);p=NB(a,n);q=a.jp;r=a.bI;s=a.D;d=a.N;i=D3(a);t=a.bu;f=p.bp;u=f===o&&!f.f0?0:1;if(u){p.bp=o;I1(o,s.bM,r);}i=U7(p,i);v=i<=p.cF?0:1;if(v)p.cF=i;if(!(!u&&!v)){if(AMZ){e=o.d_;$rt_globals.console.info("fMeasure"+e.data);AMZ=0;}if(!AMY){g=q.X;f="alphabetic";g.textBaseline=f;}else{f=q.X;g="top";f.textBaseline=g;}WU(p,q,s,r,d,t);p.bp.f0=0;}WB(p,q,r,d,t);f=p.bp;a.fm=Bi(a.fm,DW(o)+(40.0*a.dd|0)|0);v=Bd(a.N,n)-a.R|0;g=a.bZ;WP(p,g.b+v|0,g.a+a.bU|0,a.D,a.mP,a.gv,!a.f1?0.0:0.5,D3(a),a.N,a.bu,a.co,Xz(a,n,f));n=
n+1|0;}n=l;while(n<=m&&n<k&&a.gQ){g=NB(a,n);v=Bd(a.N,n)-a.R|0;h=!Uw(a.w,n)?a.co.jI:a.co.iJ;f=a.D;o=a.bZ;Wo(g,f,o.a+a.bU|0,o.b+v|0,a.N,a.gv,a.bu,D3(a),h);n=n+1|0;}if(a.il&&j>=(( -M_(a.cd)|0)/2|0)&&VB(a.cd,a.dQ))Qz(a.cd,a.D,a.bZ);if(a.fU){u=Ba(m+1|0,k);Tm(a,b,c,Bd(a.N,u)-a.R|0);}V3(a,b,l,m);We(a);CC(a.D,1);Ix(a.ep,a.R,c,Cl(a),OU(a),NU(a));f=a.ej;i=a.bu;j=a.bU;S9(f,i,b,c-j|0,a.fm,j,NU(a));Xc(a);I$(a.c5);}
function Xz(a,b,c){var d,e,f,g;a:{d=a.w;e=Ee(d);d=GN(d);f=e.V;if(f<=b){g=BB(b,d.V);if(g<=0){d=Cf(b<=f?e.br:0,g>=0?d.br:(-1));break a;}}d=null;}if(d!==null){if(d.b==(-1))d.b=c.I;d.a=EU(c,d.a,a.D.bM,a.bI);d.b=EU(c,d.b,a.D.bM,a.bI);}return d;}
function V3(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=Ba(b,Bd(B4(a.h),a.N)-a.R|0);f=a.dJ;g=a.R;h=a.G;i=a.D;j=a.co.pi;H0(f,i,c,b);SH(f,c);P0(f,g,e,j,i);if(e<b){k=f.fd;BR(i,k.a,k.b+e|0,Cf(f.dT.a,b-e|0),j.fz);}if(c<=h&&h<=d){c=h/20|0;k=f.bV;l=BS(k,c%k.l|0);m=f.fd;e=Bd(f.bV.l,f.ge);k=l.dZ;b=k.b;c=((l.gt.b-(g%e|0)|0)+e|0)%e|0;if((c+b|0)>e)c= -(g%l.bx.b9|0)|0;b=h%l.cN|0;d=l.dm;b=c+Bd(b,d)|0;if(b<( -d|0))b=b+e|0;Bo(l.eK,k.a,d);f=l.en;c=h%l.cN|0;d=l.dm;CP(f,0.0,Bd(c,d),l.dZ.a,d);He(l,i,b,m,j.lQ,j.lW);}}
function IT(a){return Ba(a.R/a.N|0,B4(a.h)-1|0);}
function Qw(a){return Ba(((a.R+Cl(a)|0)-1|0)/a.N|0,B4(a.h)-1|0);}
function Q3(a){PC(a.dJ,a.bI.data[0],a.N,a.D);H0(a.dJ,a.D,IT(a),Cl(a));}
function NB(a,b){var c;c=a.eQ.data;return c[b%c.length|0];}
function Xu(a){if(Ds(a.w))FH(a);else Mk(a.h,a.G,a.M);EO(a);Eb(a);return 1;}
function Tk(a){var b,c,d;if(Ds(a.w)){FH(a);return 1;}b=a.M;if(!b&&!a.G)return 1;if(b){c=a.G;b=b-1|0;Mk(a.h,c,b);}else{c=a.G-1|0;b=EB(a.h,c);d=a.h;IS(d,c);FA(d,c,EB(d,c),1,B(215));}Eb(a);return C0(a,c,b,0);}
function Db(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(Ds(a.w))FH(a);c=R5(QC(b,B(216),B(23)),B(215),(-1));d=c.data;b=a.h;e=a.G;f=a.M;SS(b,e,f,c);g=d.length;if(!g)h=B(23);else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}c=BP(i+Bd(g-1|0,I(B(215)))|0);k=c.data;l=0;h=d[0];i=0;while(i<I(h)){m=l+1|0;k[l]=L(h,i);i=i+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(215))){m=l+1|0;k[l]=L(B(215),j);j=j+1|0;l=m;}h=d[n];m=0;while(m<I(h)){i=l+1|0;k[l]=L(h,m);m=m+1|0;l=i;}n=n+1|0;}h=Eo(c);}FA(b,e,f,0,h);e=a.G;m=(e+g|0)-1|0;C0(a,m,m!=e?I(d[g
-1|0]):a.M+I(d[0])|0,0);Eu(a);Eb(a);return 1;}
function FH(a){var b,c,d;b=Ee(a.w);c=a.h;d=a.w;Pq(c,d,Re(c,d));C0(a,b.V,b.br,0);Eu(a);Eb(a);}
function Eu(a){var b;b=a.w;b.cs=0;Cb(b.b0,a.G,a.M);Cb(a.w.bS,a.G,a.M);}
function NU(a){return a.dc.i9|0;}
function Tm(a,b,c,d){var e,f,g;if(d<b){e=a.gv;e.b=b-d|0;b=a.bU;e.a=c-b|0;f=a.D;g=a.bZ;BR(f,g.a+b|0,g.b+d|0,e,a.co.gN);}}
function Xc(a){if(MM(a.ep)){CC(a.D,1);GF(a.ep,a.D,a.bZ);}if(MM(a.ej)){CC(a.D,1);GF(a.ej,a.D,a.bZ);}}
function We(a){var b,c,d;CC(a.D,0);Ff(0,0,0,128,a.eh.bE);b=a.eh;c=a.D;d=a.bZ;Jb(b,c,d.a,d.b);}
function DB(a,b,c){return Ba(Bi(0,b),c);}
function Gj(a,b){var c,d,e,f,g;b=b.data;$rt_globals.console.info("onFileParsed");a.fR=1;a.fQ=1;c=DU(b[0]);d=EW(b[1]);e=(DU(b[2])).data[0];a.h=V6(c,d);a.eO=e;Fw(a.by.r,AM0);E9(a.by.r);f=Io(EQ(),a.dF);g=new M;O(g);G(Gr(G(g,B(217)),f),B(218));$rt_globals.console.info($rt_ustr(N(g)));$rt_globals.console.info("\n");}
function Ge(a,b,c,d,e){if(F_(a,e))return 1;if(c&&d)return 1;if(c)a.R=DB(a,a.R+((Bd(b,a.N)*12|0)/10|0)|0,Eg(a));else if(!d){FV(a,a.G+b|0,e);Pl(a);}return 1;}
function P1(a,b,c,d){var e,f,g;if(F_(a,d))return 1;e=DI(a);if(!c)f=a.M+b|0;else if(b>=0)f=QG(e,a.cn);else{b=a.cn;g=EP(e,b);if(!g&&!b)f=(-1);else{f=0;b=0;while(b<g){f=f+I(e.k.data[b].n)|0;b=b+1|0;}}}if(f>e.I){if((a.G+1|0)<B4(a.h)){a.M=0;FV(a,a.G+1|0,d);}}else if(f>=0)CY(a,f,d);else{c=a.G;if(c>0){a.M=(Cj(a.h,c-1|0)).I;FV(a,a.G-1|0,d);}}MC(a);return 1;}
function F_(a,b){if(Ds(a.w)&&!b){Eu(a);EO(a);return 1;}if(!(b&&Ds(a.w)))Eu(a);return 0;}
function C0(a,b,c,d){a.G=F4(0,b,B4(a.h)-1|0);return CY(a,c,d);}
function FV(a,b,c){a.G=F4(0,b,B4(a.h)-1|0);return CY(a,a.M,c);}
function CY(a,b,c){a.M=F4(0,b,(DI(a)).I);a.cn=EU(DI(a),a.M,a.D.bM,a.bI);GW(a);EO(a);if(c)a.w.cs=1;N7(a.w,a.G,a.M);a.w.cs=0;return 1;}
function EO(a){Pl(a);MC(a);}
function Pl(a){var b,c,d,e,f;b=a.R;c=b+Cl(a)|0;d=a.G;e=a.N;d=Bd(d,e);f=d+e|0;if(d<(b+e|0))a.R=DB(a,d-e|0,Eg(a));else if(f>(c-e|0))a.R=DB(a,(f-Cl(a)|0)+a.N|0,Eg(a));}
function MC(a){var b,c,d,e,f;b=(a.dd|0)*30|0;c=a.bu;d=c+D3(a)|0;e=a.cn;f=e+b|0;if(e<(c+b|0))a.bu=DB(a,e-b|0,Fq(a));else if(f>(d-b|0))a.bu=DB(a,(f-D3(a)|0)+b|0,Fq(a));}
function Qd(a,b){var c;C0(a,b.cU,b.dr,0);c=QG(DI(a),a.cn);Cb(a.w.b0,a.G,c);Cb(a.w.bS,a.G,a.M);Eh(a.c5);}
function DI(a){return Cj(a.h,a.G);}
function T1(a,b){var c,d,e,f;if(!b.c2)a.e0=0;if(!Uh(b)&&!VA(b)){c=b.bT;if(c&&b.bo==65){d=B4(a.h)-1|0;c=EB(a.h,d);Cb(a.w.b0,0,0);Cb(a.w.bS,B4(a.h)-1|0,c);return 1;}if(!b.c2)return 0;e=b.bo;if(c&&e==80){H5(a);return 1;}if(c&&e==90){if(Ds(a.w))Eu(a);b=X$(a.h);if(b!==null){C0(a,b.a,b.b,0);Eb(a);}return 1;}if(!c&&!b.cI){if(BM(b.cH,B(219))){Db(a,B(220));CY(a,a.M-1|0,0);d=1;}else if(BM(b.cH,B(221))){Db(a,B(222));CY(a,a.M-1|0,0);d=1;}else if(BM(b.cH,B(94))){Db(a,B(223));CY(a,a.M-1|0,0);d=1;}else if(BM(b.cH,B(224)))
{Db(a,B(225));CY(a,a.M-1|0,0);d=1;}else if(BM(b.cH,B(226))){Db(a,B(227));CY(a,a.M-1|0,0);d=1;}else if(!BM(b.cH,B(228)))d=0;else{Db(a,B(229));CY(a,a.M-1|0,0);d=1;}}else d=0;if(d)return 1;a:{if(!(!b.cI&&!b.bT)){c=b.bo;if(c>=48&&c<=57){d=c-48|0;f=a.iW.data[d];if(f!==null)f.y();d=1;break a;}}d=0;}if(d)return 1;if(Vp(a,b))return 1;b:{switch(b.bo){case 8:break;case 9:Db(a,a.px);d=1;break b;case 13:if(Ds(a.w))FH(a);DD(Cj(a.h,a.G));Ww(a.h,a.G,a.M);Eb(a);d=C0(a,a.G+1|0,0,0);break b;case 16:case 18:case 20:case 45:d=
1;break b;case 46:d=Xu(a);break b;default:d=0;break b;}d=Tk(a);}if(d)return 1;d=b.bT;if(d&&b.bo==87){$rt_globals.console.info("Ctrl-W pressed ;)");return 1;}if(!d&&!b.cI&&!b.gm){if(b.bo==27)return 0;return I(b.cH)>0&&Db(a,b.cH)?1:0;}a.e0=d;return 0;}return 0;}
function Ms(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(b==1){c=a.by.r;d=new J$;d.lx=a;e=T(C,3);f=e.data;f[0]=Nn(a.h);g=IT(a);h=Qw(a);b=Bi(0,g-100|0);g=Ba(B4(a.h)-1|0,h+100|0);i=BQ(3);j=i.data;j[0]=Fe(a.h,b);k=a.h;h=0;l=0;g=g+1|0;while(l<Ba(g,k.C.data.length)){h=h+EB(k,l)|0;if(l!=(k.C.data.length-1|0))h=h+1|0;l=l+1|0;}j[1]=h;j[2]=b;f[1]=i;m=a.h.cl;n=CV();RE(m,m.b7,n);i=BQ(3*n.l|0);o=i.data;h=0;p=0;q=o.length;while(h<q){k=BS(n,p);g=h+1|0;o[h]=k.bv;l=g+1|0;o[g]=k.bD;h=l+1|0;o[l]=k.fA;p=p+1|0;}f[2]=i;CH(c,d,B(230),
e);}}
function H5(a){var b,c,d;a.dF=EQ();b=a.by.r;c=new OQ;c.kA=a;d=T(C,1);d.data[0]=Nn(a.h);CH(b,c,B(120),d);}
function OF(a){var b,c,d,e,f,g;b=a.h.cl;b=Mm(b,b.b7);if(b===null)return;if(!a.eO)Mw(a.h);c=Et([CA(b),CK(b),b.bw.fA]);d=DG(F5(a.h));b=a.by.r;e=new Nk;e.mI=a;f=T(C,3);g=f.data;g[0]=d;d=BQ(1);d.data[0]=a.eO;g[1]=d;g[2]=c;CH(b,e,B(231),f);}
function IX(a,b,c){var d,e,f,g,h,i;d=Ee(a.w);e=d.V;if(Ds(a.w)){f=a.h;g=a.w;h=Re(f,g);if(c)Pq(f,g,h);if(c){C0(a,d.V,d.br,0);Eu(a);Eb(a);}}else{h=Fk(EE(a.h.C.data[e]),B(215));i=Ba(B4(a.h)-1|0,e);Cb(a.w.bS,i,0);if(e>=(B4(a.h)-1|0))Cb(a.w.bS,i,EB(a.h,i));else Cb(a.w.b0,i+1|0,0);if(c)FH(a);else C0(a,e,0,0);}b.j(h);return 1;}
function Vp(a,b){var c;a:{switch(b.bo){case 33:c=b.bT?FV(a,Jr(a.R,a.N),b.bi):Ge(a,2-Ro(Cl(a),a.N)|0,0,b.cI,b.bi);break a;case 34:c=!b.bT?Ge(a,Ro(Cl(a),a.N)-2|0,0,b.cI,b.bi):FV(a,((a.R+Cl(a)|0)/a.N|0)-1|0,b.bi);break a;case 35:if(!F_(a,b.bi)&&!CY(a,(DI(a)).I,b.bi)){c=0;break a;}c=1;break a;case 36:if(!F_(a,b.bi)&&!CY(a,0,b.bi)){c=0;break a;}c=1;break a;case 37:c=P1(a,(-1),b.bT,b.bi);break a;case 38:c=Ge(a,(-1),b.bT,b.cI,b.bi);break a;case 39:c=P1(a,1,b.bT,b.bi);break a;case 40:c=Ge(a,1,b.bT,b.cI,b.bi);break a;default:}c
=0;}if(c&&b.bi)Cb(a.w.bS,a.G,a.M);return c;}
function Eb(a){a.h.lG=F$(a.by.r);}
function Q_(){C.call(this);this.bk=null;}
function AGj(a){Gm(a.bk.H);}
function AEy(a){Eh(a.bk.bY);LX(a.bk.H);}
function ABQ(a,b,c,d){var e,f;b=a.bk.H;e=Cd((b.N*4|0)*d/150.0);f=Cd(c);b.R=DB(b,b.R+e|0,Eg(b));b.bu=DB(b,b.bu+f|0,Fq(b));return 1;}
function ABA(a,b,c,d,e){var f,g,h,i,j,k;a:{if(!HQ(a.bk.bY,b.Q,c,d,e)){f=a.bk.H;g=f.bA;h=b.Q;i=h.a;j=f.bZ;Bo(g,i-j.a|0,h.b-j.b|0);if(!d)f.w.cs=0;b:{if(!d&&f.d1!==null){f.d1=null;c=1;}else if(HQ(f.c5,f.bA,c,d,e))c=1;else if(!c&&e==2&&d){b=f.bA;f.G=F4(0,(b.b+f.R|0)/f.N|0,B4(f.h)-1|0);g=DI(f);c=KD(g,Bi(0,(b.a-f.bU|0)+f.bu|0),f.D.bM,f.bI);f.M=c;f.cn=EU(g,c,f.D.bM,f.bI);GW(f);EO(f);b=DI(f);c=EP(b,f.cn);if(!c)c=0;else{d=c+(-1)|0;c=0;e=0;while(e<=d){c=c+I(b.k.data[e].n)|0;e=e+1|0;}}e=EP(b,f.cn);d=b.k.data.length;if
(e>=d)e=d-1|0;i=0;k=0;while(k<(e+1|0)){i=i+I(b.k.data[k].n)|0;k=k+1|0;}Cb(f.w.b0,f.G,c);f.w.cs=1;C0(f,f.G,i,0);f.w.cs=0;c=1;}else{if(!c&&e==1&&d){g=F6(f.ep,f.bA,f.n_,1);f.d1=g;if(g!==null){c=1;break b;}g=F6(f.ej,f.bA,f.op,0);f.d1=g;if(g!==null){c=1;break b;}if(Ek(f.eh,f.bA)){f.d1=AMU;c=1;break b;}g=new Qo;g.oE=f;g.oD=b;f.d1=g;g.j(f.bA);}c=1;}}if(!c){c=0;break a;}}c=1;}return c;}
function AIx(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(!EN(a.bk.bY)){c=a.bk;d=c.bY;e=b.Q;f=UV();g=AMQ;h=new RT;h.pd=c;En(f,B(60),g,h);g=AMQ;h=new RS;h.k8=c;En(f,B(59),g,h);if(SA(c.U.r)){g=AMQ;h=new RU;h.kx=c;En(f,B(58),g,h);}b=AMQ;h=new P2;h.jU=c;En(f,B(232),b,h);g=AMR;i=T(ER,4);j=i.data;k=AMQ;l=c.H;Ct(l);m=new Pg;m.n8=l;j[0]=CI(B(233),k,m);k=AMQ;l=c.H;Ct(l);m=new Ph;m.no=l;j[1]=CI(B(234),k,m);k=AMQ;l=c.H;Ct(l);m=new Pd;m.jv=l;j[2]=CI(B(235),k,m);k=AMQ;l=c.H;Ct(l);m=new Pf;m.oM=l;j[3]=CI(B(236),k,m);Fb(f,B(237),g,Hb(i));g
=AMR;j=T(ER,2);i=j.data;l=AMQ;m=c.H;Ct(m);h=new MP;h.nj=m;i[0]=CI(B(238),l,h);k=AMQ;l=c.H;Ct(l);m=new MQ;m.nW=l;i[1]=CI(B(239),k,m);Fb(f,B(240),g,Hb(j));k=AMR;i=T(ER,2);j=i.data;g=AMQ;l=c.H;Ct(l);m=new OJ;m.lf=l;j[0]=CI(B(241),g,m);g=AMQ;l=c.H;Ct(l);m=new OI;m.kG=l;j[1]=CI(B(242),g,m);Fb(f,B(243),k,Hb(i));l=AMR;i=T(ER,4);j=i.data;b=FE();g=new Pj;g.n6=c;j[0]=CI(B(133),b,g);g=FE();h=new Pm;h.nD=c;j[1]=CI(B(244),g,h);g=FE();h=new Pk;h.jL=c;j[2]=CI(B(33),g,h);g=FE();h=new Pn;h.pe=c;j[3]=CI(B(113),g,h);Fb(f,B(245),
l,Hb(i));g=HD(f);b=a.bk.H;Ct(b);c=new P6;c.kR=b;H2(d,e,g,c);LX(a.bk.H);}return 1;}
function AGr(a,b){var c,d,e,f,g,h,i;a:{c=a.bk;if(!Jl(c.bY,b.Q,c.hq)){c=a.bk;d=c.H;c=c.hq;e=d.bA;b=b.Q;f=b.a;g=d.bZ;Bo(e,f-g.a|0,b.b-g.b|0);if(Jl(d.c5,d.bA,c))f=1;else{b=d.d1;if(b!==null){b.j(d.bA);f=1;}else if(GA(d.ep,d.bA,c))f=1;else if(GA(d.ej,d.bA,c))f=1;else{b=d.dJ;if(Gb(d.bA,Cf(0,0),b.dT)&&Hd(c)?1:0)f=1;else if(!Gb(d.bA,Cf(d.bU,0),Cf(D3(d),Cl(d))))f=Hd(c);else if(!d.e0)f=Gz(c,B(129));else{f=F4(0,(d.bA.b+d.R|0)/d.N|0,B4(d.h)-1|0);h=Bi(0,(d.bA.a-d.bU|0)+d.bu|0);b=d.h;i=Ng(b,f,h)===null?0:1;f=!(!i&&!(Oo(b,
f,h)===null?0:1)?0:1)?Gz(c,B(129)):Gz(c,B(128));}}}if(!f){f=0;break a;}}f=1;}return f;}
function AAQ(a,b){var c;if(!b.c2)c=0;else if(b.bo==27&&EN(a.bk.bY)){Eh(a.bk.bY);c=1;}else if(b.bT&&b.bo==79){if(!b.bi)Sh(a.bk);else Js(a.bk.U.r,new KF);c=1;}else c=0;return !c&&!T1(a.bk.H,b)?0:1;}
function AEd(a,b,c){return IX(a.bk.H,b,c);}
function Y_(a){var b,c;b=a.bk.H;Ct(b);c=new PH;c.kM=b;return c;}
function Tj(){var a=this;C.call(a);a.pb=null;a.hv=null;a.ox=null;}
function U1(a,b,c){var d=new Tj();AHJ(d,a,b,c);return d;}
function AHJ(a,b,c,d){a.pb=b;a.hv=c;a.ox=d;}
var XW=F();
function Ji(b,c){var d,e,f;if(c<=0)return B(23);d=BP(c);e=d.data;e[0]=WZ(PJ(b,52));f=1;while(f<c){e[f]=WZ(PJ(b,62));f=f+1|0;}return Eo(d);}
function WZ(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
function Yd(){var a=this;C.call(a);a.wF=null;a.u0=null;a.vM=0;a.vs=0;}
function MV(){var a=this;C.call(a);a.C=null;a.cl=null;a.jj=null;a.ik=null;a.gO=null;a.cG=0;a.e7=0;a.lG=0.0;}
function AFL(){var a=new MV();AGU(a);return a;}
function AGU(a){var b,c,d,e;a.gO=CV();b=T(Cp,1);c=b.data;d=new Cp;e=T(B3,1);e.data[0]=ADs(B(23));IP(d,e);c[0]=d;a.C=b;a.e7=0;a.cG=0;a.jj=Oj();a.ik=Oj();a.cl=WF(AHV(Tv(HM(0,I(F5(a)),0))));}
function Cj(a,b){return a.C.data[b];}
function B4(a){return a.C.data.length;}
function EB(a,b){return a.C.data[b].I;}
function Ww(a,b,c){var d,e,f,g,h;d=a.C;e=d.data;f=e[b];d=Dk(d,e.length+1|0);e=d.data;a.C=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=C_(T(B3,0));a.C.data[b+1|0]=f;}else if(c==f.I){e[b]=f;e[b+1|0]=C_(T(B3,0));}else{e=(G0(f,c)).data;d=a.C.data;d[b]=e[0];d[b+1|0]=e[1];}FA(a,b,c,0,B(215));}
function IS(a,b){var c,d,e,f,g,h,i;c=a.C.data;d=c[b];e=c[b+1|0];f=C_(Q$(d.k,e.k));g=a.C;h=g.data.length;if(b<h&&b>=0){i=T(Cp,h-1|0);c=i.data;ND(g,b,i);c[b]=f;a.C=i;return;}d=new Bg;V(d);J(d);}
function Mk(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.C.data;if(!(c<d[b].I?0:1)){d=(Cj(a,b)).k.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.n)){f=L(h.n,g);break a;}g=g-I(h.n)|0;f=f+1|0;}f=0;}h=new BA;d=BP(1);d.data[0]=f;F9(h,d);FA(a,b,c,1,h);h=a.C.data[b];i=h.k;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].n);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].n)==1)h.k=ND(i,j,T(B3,e-1|0));else{k=d[j];if(c<=0)l=C6(Dj(k.n,1),k.b5,k.bF);else if(c>=(I(k.n)-1|0)){l=new B3;m=k.n;QI(l,Ci(m,0,I(m)-1|0),
k.b5,k.bF);}else{i=BP(I(k.n)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.n,b);b=b+1|0;}b=n.length;while(c<b){m=k.n;e=c+1|0;n[c]=L(m,e);c=e;}l=C6(Eo(i),k.b5,k.bF);}d[j]=l;}h.I=h.I-1|0;DD(h);}else if(b!=(d.length-1|0))IS(a,b);}
function SS(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){g=a.C.data[b];h=e[0];b=0;a:{while(true){i=b+1|0;d=g.k.data;if(i>=d.length)break a;f=I(d[b].n);if(c<=f)break;c=c-f|0;b=i;}}HG(g,b,c,h);g.I=g.I+I(h)|0;DD(g);return;}f=f-1|0;j=G0(a.C.data[b],c);d=a.C;k=Dk(d,d.data.length+f|0);d=k.data;l=d.length-1|0;while(true){c=l-f|0;if(c<=b)break;d[l]=d[c];l=l+(-1)|0;}j=j.data;g=j[0];h=e[0];m=g.k.data;i=m.length;c=!i?0:I(m[i-1|0].n);HG(g,g.k.data.length-1|0,c,h);d[b]=j[0];i=1;while(i<f){if(Fx(e[i]))h
=C_(T(B3,0));else{h=new Cp;m=T(B3,1);m.data[0]=C6(e[i],0,0);IP(h,m);}d[b+i|0]=h;i=i+1|0;}HG(j[1],0,0,e[f]);d[b+f|0]=j[1];a.C=k;}
function Re(a,b){var c,d,e,f,g,h,i;c=Ee(b);d=GN(b);e=c.V;if(e==d.V)return Ci(EE(a.C.data[e]),c.br,d.br);f=new M;O(f);b=a.C.data[c.V];e=c.br;Bv(BN(f,Dj(EE(b),e)),10);g=a.C;h=c.V+1|0;e=d.V;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;Tl(BN(f,EE(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.C.data[d.V];i=d.br;BN(f,Ci(EE(b),0,i));return N(f);}}b=new RQ;V(b);J(b);}
function Pq(a,b,c){var d;Qp(a,b);d=Ee(b);FA(a,d.V,d.br,1,c);}
function Qp(a,b){var c,d,e,f,g,h,i;a:{c=Ee(b);d=GN(b);e=c.V;if(e==d.V)Hg(a.C.data[e],c.br,d.br);else{b=a.C.data[e];Hg(b,c.br,b.I);Hg(a.C.data[d.V],0,d.br);e=c.V+1|0;f=d.V;g=a.C;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=T(Cp,(h-f|0)+e|0);Vf(g,e,f,i);a.C=i;IS(a,c.V);break a;}b=new Bg;V(b);J(b);}b=new Bg;V(b);J(b);}}}
function Ng(a,b,c){return G5(a.jj,LZ(a,b,c));}
function Oo(a,b,c){return G5(a.ik,LZ(a,b,c));}
function LZ(a,b,c){var d,e,f;d=Cj(a,b);c=EP(d,c);e=0;f=0;while(f<c){e=e+I(d.k.data[f].n)|0;f=f+1|0;}return WM(b,e);}
function K5(a,b){var c,d,e;c=0;d=0;while(true){e=a.C.data.length;if(c>=e)break;if((d+(Cj(a,c)).I|0)>=b)return Cf(c,b-d|0);d=d+((Cj(a,c)).I+1|0)|0;c=c+1|0;}return Cf(e,0);}
function Fe(a,b){var c,d;c=0;d=0;while(d<b){c=(c+EB(a,d)|0)+1|0;d=d+1|0;}return c;}
function F5(a){var b,c,d,e;b=new M;Eq(b,Fe(a,B4(a)));c=a.C.data;d=c.length;e=0;while(e<d){Bv(Ni(c[e],b),10);e=e+1|0;}return N(b);}
function Nn(a){return DG(F5(a));}
function FA(a,b,c,d,e){var f,g,h;a.cG=a.cG+1|0;f=a.gO;g=new RF;g.cR=b;g.dx=c;g.jx=d;g.ga=e;Cg(f,g);h=Fe(a,b)+c|0;if(!d)MF(a.cl,h,I(e));else PR(a.cl,h,I(e));}
function X$(a){var b,c,d,e,f;a.cG=a.cG+1|0;b=a.gO;c=b.l;if(!c)return null;b=FR(b,c-1|0);d=R5(b.ga,B(215),(-1));if(b.jx){e=d.data;SS(a,b.cR,b.dx,d);MF(a.cl,Fe(a,b.cR)+b.dx|0,I(b.ga));c=e.length;if(c==1)return Cf(b.cR,b.dx+I(e[0])|0);return Cf((b.cR+c|0)-1|0,I(e[c-1|0]));}d=d.data;f=AFf();Cb(f.b0,b.cR,b.dx);c=d.length;if(c==1)Cb(f.bS,b.cR,b.dx+I(d[0])|0);else Cb(f.bS,(b.cR+c|0)-1|0,I(d[c-1|0]));Qp(a,f);PR(a.cl,Fe(a,b.cR)+b.dx|0,I(b.ga));return Cf(b.cR,b.dx);}
function Mw(a){a.e7=a.cG;}
var Cx=F();
var Wi=F(Cx);
var WY=F(Cx);
var Un=F(Cx);
var UG=F(Cx);
var Xm=F(Cx);
var QR=F();
function Zv(a){}
var QS=F();
function AH6(a,b){}
var Mi=F(0);
var QQ=F();
function OR(){C.call(this);this.jD=null;}
function AHP(a){var b;b=a.jD;Bq(Bw(),b);}
function Cp(){var a=this;C.call(a);a.k=null;a.I=0;a.d_=null;a.b6=null;a.fc=null;a.fb=0;a.f0=0;}
var AM1=0;var AM2=0;var AM3=0;function C_(a){var b=new Cp();IP(b,a);return b;}
function IP(a,b){var c,d,e,f;c=b.data;a.k=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].n)|0;f=f+1|0;}a.I=d;}
function Hg(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.I){a.k=T(B3,0);DD(a);a.I=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.k.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].n);i=I(a.k.data[f].n);j=BB(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.k.data[f];if(!b&&c==I(k.n)?1:0){g=a.k;a.k=ND(g,e,T(B3,g.data.length-1|0));a.I=a.I-d|0;DD(a);return;}a.k.data[e]=C6(Fk(Ci(k.n,0,b),Dj(k.n,c)),k.b5,k.bF);}else{g=a.k.data;l=g[e];m=g[f];if(b){if(b!=
I(l.n))a.k.data[e]=C6(Ci(l.n,0,b),l.b5,l.bF);e=e+1|0;}if(c==I(m.n))f=f+1|0;else if(c)a.k.data[f]=C6(Dj(m.n,c),m.b5,m.bF);g=a.k;a.k=Vf(g,e,f,T(B3,(g.data.length-f|0)+e|0));}a.I=a.I-d|0;DD(a);}
function G0(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(Cp,[C_(T(B3,0)),a]);if(b>=a.I)return H(Cp,[a,C_(T(B3,0))]);c=a.k;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].n);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(Cp,[C_(IO(c,0,T(B3,d))),C_(IO(c,d,T(B3,f-d|0)))]);h=e[d];e=IO(c,0,T(B3,d+1|0));i=e.data;j=IO(c,d,T(B3,f-d|0));c=j.data;i[d]=C6(Ci(h.n,0,b),h.b5,h.bF);c[0]=C6(Dj(h.n,b),h.b5,h.bF);return H(Cp,[C_(e),C_(j)]);}
function HG(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=a.k.data;if(!e.length){f=T(B3,1);f.data[0]=ADs(d);a.k=f;}else{g=e[b];if(c<=0)h=C6(Fk(d,g.n),g.b5,g.bF);else if(c>=I(g.n))h=C6(Fk(g.n,d),g.b5,g.bF);else{i=I(d);j=i+c|0;k=I(g.n)-c|0;f=BP(I(g.n)+i|0);l=f.data;m=0;while(m<c){l[m]=L(g.n,m);m=m+1|0;}m=0;while(m<i){l[m+c|0]=L(d,m);m=m+1|0;}m=0;while(m<k){l[m+j|0]=L(g.n,m+c|0);m=m+1|0;}h=C6(Eo(f),g.b5,g.bF);}e[b]=h;}a.I=a.I+I(d)|0;DD(a);}
function I1(a,b,c){var d,e,f,g,h,i,j;d=a.k.data.length;e=a.d_;if(!(e!==null&&e.data.length>=d)){a.d_=YI(d);a.b6=BQ(d);a.fb=1;}if(!a.fb)AM2=AM2+1|0;else{f=0;g=0.0;AM1=AM1+1|0;h=0;while(h<d){i=c.data;j=a.k.data[h];f=f+I(j.n)|0;D7(b,i[j.bF]);g=g+ET(b,j.n);a.d_.data[h]=g;a.b6.data[h]=g+0.5|0;h=h+1|0;}a.I=f;a.fb=0;}}
function DD(a){a.fb=1;a.f0=1;a.fc=null;}
function KD(a,b,c,d){var e,f,g,h,i,j,k;if(a.b6===null)I1(a,c,d);e=a.k.data.length;if(!e)return 0;if(b<=0)return 0;if(b>=a.b6.data[e-1|0])return a.I;f=EP(a,b);if(f==a.k.data.length)return a.I;g=RW(a,c,d,f);h=0;i=0;while(i<f){h=h+I(a.k.data[i].n)|0;i=i+1|0;}e=!f?0:a.b6.data[f-1|0];j=a.b6.data[f];i=0;a:{while(true){d=g.data;if(i>=d.length){f=j;break a;}f=d[i];if(b<f)break;h=h+1|0;i=i+1|0;j=f;e=f;}}if(AM3){c=new M;O(c);S(G(S(G(S(G(c,B(246)),e),B(247)),b),B(248)),f);$rt_globals.console.info($rt_ustr(N(c)));k=h;$rt_globals.console.info(" pos = "
+k);}if((b-e|0)>(f-b|0))h=h+1|0;return h;}
function RW(a,b,c,d){var e,f,g,h,i,j,k;if(a.fc===null)a.fc=T($rt_arraycls($rt_intcls()),a.k.data.length);e=a.fc.data[d];if(e===null){e=c.data;f=a.k.data[d];D7(b,e[f.bF]);f=f.n;e=BQ(I(f)-1|0);c=DG(f);g=!d?0.0:a.d_.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BA;k=i+1|0;S3(f,c,0,k);h[i]=g+ET(b,f)+0.5|0;i=k;}a.fc.data[d]=e;}return e;}
function EP(a,b){var c;c=Wz(a.b6,0,a.k.data.length,b);if(c<0)c=( -c|0)-1|0;return c;}
function EU(a,b,c,d){var e,f,g,h,i;if(!a.k.data.length)return 0;if(!b)return 0;if(!(!a.fb&&a.b6!==null))I1(a,c,d);if(b>=a.I)return a.b6.data[a.k.data.length-1|0];e=0;f=0;a:{while(true){g=a.k.data;if(f>=g.length)break a;h=e+I(g[f].n)|0;i=BB(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.b6.data[f];}return (RW(a,c,d,f)).data[(b-e|0)-1|0];}
function DW(a){var b,c,d;a:{b=a.k.data.length;if(b){c=a.b6.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function QG(a,b){var c,d,e;c=EP(a,b);if(a.b6.data[c]==b)c=c+1|0;c=c+1|0;if(c>=a.k.data.length&&b==DW(a))return 2147483647;d=0;e=0;while(e<c){d=d+I(a.k.data[e].n)|0;e=e+1|0;}return d;}
function EE(a){var b;b=new M;Eq(b,a.I);return N(Ni(a,b));}
function Ni(a,b){var c,d,e;c=a.k.data;d=c.length;e=0;while(e<d){BN(b,c[e].n);e=e+1|0;}return b;}
function Tq(){AM3=0;}
function B3(){var a=this;C.call(a);a.n=null;a.b5=0;a.bF=0;}
function ADs(a){var b=new B3();AHp(b,a);return b;}
function C6(a,b,c){var d=new B3();QI(d,a,b,c);return d;}
function AHp(a,b){QI(a,b,0,0);}
function QI(a,b,c,d){a.n=b;a.b5=c;a.bF=d;}
function F7(b,c){return (!b?0:2)+(!c?0:1)|0;}
function VK(){var a=this;D1.call(a);a.e2=0;a.cc=null;a.eU=0;a.po=0.0;a.h4=0;}
function Oj(){var a=new VK();AA$(a);return a;}
function AA$(a){var b;b=XX(16);a.e2=0;a.cc=T(GG,b);a.po=0.75;Qs(a);}
function XX(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Qs(a){a.h4=a.cc.data.length*a.po|0;}
function G5(a,b){var c,d;if(b===null)c=Og(a);else{d=T8(b);c=M2(a,b,d&(a.cc.data.length-1|0),d);}if(c===null)return null;return c.eu;}
function M2(a,b,c,d){var e,f;e=a.cc.data[c];while(e!==null){if(e.ix==d){f=e.f2;if(b!==f&&!(b===f?1:f!==null&&CW(b)===CW(f)?(b.cU==f.cU&&b.dr==f.dr?1:0):0)?0:1)break;}e=e.d6;}return e;}
function Og(a){var b;b=a.cc.data[0];while(b!==null&&b.f2!==null){b=b.d6;}return b;}
function O$(a,b,c){var d,e,f;if(b===null){d=Og(a);if(d===null){a.eU=a.eU+1|0;d=Qk(a,null,0,0);e=a.e2+1|0;a.e2=e;if(e>a.h4)Qy(a);}}else{e=T8(b);f=e&(a.cc.data.length-1|0);d=M2(a,b,f,e);if(d===null){a.eU=a.eU+1|0;d=Qk(a,b,f,e);e=a.e2+1|0;a.e2=e;if(e>a.h4)Qy(a);}}b=d.eu;d.eu=c;return b;}
function Qk(a,b,c,d){var e,f,g;e=new GG;f=null;e.f2=b;e.eu=f;e.ix=d;g=a.cc.data;e.d6=g[c];g[c]=e;return e;}
function Qy(a){var b,c,d,e,f,g,h,i;b=a.cc.data.length;b=XX(!b?1:b<<1);c=T(GG,b);d=c.data;e=0;f=b-1|0;while(true){g=a.cc.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.ix&f;i=h.d6;h.d6=d[b];d[b]=h;h=i;}e=e+1|0;}a.cc=c;Qs(a);}
function T8(b){var c,d,e,f,g,h;c=T(C,2).data;c[0]=E5(b.cU);c[1]=E5(b.dr);d=(-1515898884);e=0;while(e<c.length){b=c[e];if(b===null)f=0;else{g=b.fH;f=g>>>4^g<<28^g<<8^g>>>24;}h=f^528111840;d=Ia(h,4)^(h>>>7|h<<25)^Ia(d,13);e=e+1|0;}return d;}
function JJ(){var a=this;C.call(a);a.b7=null;a.c3=0;}
var AM4=null;var AM5=null;function WF(a){var b=new JJ();WD(b,a);return b;}
function AJA(a,b){var c=new JJ();SV(c,a,b);return c;}
function QO(b,c){var d;d=BB(b.bv,c.bv);if(!d)d=BB(c.bD,b.bD);return d;}
function WD(a,b){SV(a,null,b);}
function SV(a,b,c){var d,e;a.c3=0;if(D5(c))return;I6(c,AM4);if(b!==null)a.b7=Kn(b);c=BW(c);while(B7(c)){d=B1(c);e=a.b7;if(e!==null){NG(a,e,Kn(d));continue;}a.b7=Kn(d);}}
function Mm(a,b){var c;if(b.dN)return b;b=BW(b.be);while(true){if(!B7(b))return null;c=Mm(a,B1(b));if(c!==null)break;}return c;}
function Iv(a,b,c){var d,e,f;d=b.bw;if(d.bv==c.bv&&d.bD==c.bD?1:0){e=BW(b.be);while(B7(e)){f=Iv(a,B1(e),c);if(f!==null)return f;}return b;}b=BW(b.be);while(true){if(!B7(b))return null;d=B1(b);if(M7(d,c.bv,c.bD)){e=Iv(a,d,c);if(e!==null)break;}}return e;}
function RE(a,b,c){Cg(c,b.bw);b=BW(b.be);while(B7(b)){RE(a,B1(b),c);}}
function MF(a,b,c){a.c3=0;Hu(a,a.b7,b,c);}
function Hu(a,b,c,d){var e;if(CK(b)<c)return;a:{if(CA(b)>c){Iu(b,d);E4(b,d);b=BW(b.be);while(B7(b)){Hu(a,B1(b),c,d);}}else{if(!Id(b,c)){if(a.c3)break a;if(CK(b)!=c)break a;}E4(b,d);if(CA(b)==c&&a.c3)Iu(b,d);e=BW(b.be);while(B7(e)){Hu(a,B1(e),c,d);}if(!a.c3){b.dN=1;a.c3=1;}}}}
function PR(a,b,c){a.c3=0;J1(a,a.b7,b,c);}
function J1(a,b,c,d){var e,f,g,h;if(CK(b)<c)return;e=CA(b);f=c+d|0;if(e>f){e= -d|0;Iu(b,e);E4(b,e);g=BW(b.be);while(B7(g)){J1(a,B1(g),c,d);}b.be=K9(a,b.be);}else{g=b.bw;if(c<=g.bv&&g.bD<=f?1:0){if(b!==a.b7){HA(b,(-1));Ib(b,(-1));}else{HA(b,0);Ib(b,0);}HJ(b.be);}else{e=Id(b,c);f=Id(b,f);if(e&&f)E4(b, -d|0);else if(e)Ib(b,c);else{if(!f)return;HA(b,c);E4(b, -d|0);}h=BW(b.be);while(B7(h)){J1(a,B1(h),c,d);}b.be=K9(a,b.be);if(!a.c3){b.dN=1;a.c3=1;}}}}
function K9(a,b){var c,d,e,f,g,h;c=CV();d=null;I6(b,AM5);b=BW(b);while(B7(b)){e=B1(b);if(CA(e)==CK(e))continue;if(!e.dN){if(d!==null){Cg(c,d);d=null;}Cg(c,e);}else if(d===null)d=e;else{f=Ba(CA(d),CA(e));g=Bi(CK(d),CK(e));h=Kn(HM(f,g,d.bw.fA));h.cO=e.cO;h.dN=1;d=h;}}if(d!==null)Cg(c,d);return c;}
function NG(a,b,c){var d,e;a:{if(LT(b,c)){d=BW(b.be);while(true){if(!B7(d)){Cg(b.be,c);c.cO=b;break a;}e=B1(d);if(LT(e,c))break;}NG(a,e,c);return;}}}
function Oh(a,b,c,d){var e,f,g,h,i,j;if((CK(c)-CA(c)|0)<43)e=Ci(d,CA(c),CK(c));else{e=Ci(d,CA(c),CA(c)+20|0);f=Ci(d,CK(c)-20|0,CK(c));g=new M;O(g);G(G(G(g,e),B(249)),f);e=N(g);}e=QC(e,B(215),B(250));f=Bw();g=Ce(c);h=new M;O(h);i=S(h,b);Bv(i,32);g=G(i,g);Bv(g,9);G(g,e);Bq(f,N(h));c=BW(c.be);j=b+1|0;while(B7(c)){Oh(a,j,B1(c),d);}}
function WC(){AM4=new Ky;AM5=new Kx;}
function X0(){var a=this;C.call(a);a.bv=0;a.bD=0;a.fA=0;}
function HM(a,b,c){var d=new X0();ABe(d,a,b,c);return d;}
function ABe(a,b,c,d){a.bv=b;a.bD=c;a.fA=d;}
function Z7(a,b){var c;b=b;c=BB(a.bv,b.bv);if(!c)c=BB(b.bD,a.bD);return c;}
function IV(){var a=this;C.call(a);a.jg=null;a.pS=null;a.p1=0.0;a.hI=0;a.p8=0;a.qx=0;a.ii=0;a.nP=0;a.hl=0.0;a.fZ=0.0;a.pZ=0.0;a.i9=0.0;a.p5=0;a.j5=null;}
function J3(a){return Fj(a.hl+a.fZ);}
function Tb(){var a=this;C.call(a);a.b0=null;a.bS=null;a.cs=0;}
function AFf(){var a=new Tb();Zc(a);return a;}
function Zc(a){a.b0=new Ij;a.bS=new Ij;a.cs=0;}
function N7(a,b,c){Cb(a.bS,b,c);if(!a.cs)Cb(a.b0,b,c);}
function Ee(a){if(SI(a.b0,a.bS)>0)return a.bS;return a.b0;}
function GN(a){if(SI(a.b0,a.bS)<0)return a.bS;return a.b0;}
function Ds(a){var b,c;b=a.b0;c=a.bS;return (b===c?1:c!==null&&CW(b)===CW(c)?(b.V==c.V&&b.br==c.br?1:0):0)?0:1;}
function Uw(a,b){var c,d;if(!Ds(a))return 0;c=Ee(a);d=GN(a);return c.V<=b&&b<d.V?1:0;}
function I_(){var a=this;C.call(a);a.gN=null;a.nT=null;a.jG=null;a.jI=null;a.iJ=null;a.kT=null;a.pi=null;}
function AM6(a,b,c,d,e,f,g){var h=new I_();SG(h,a,b,c,d,e,f,g);return h;}
function UU(){var b,c,d,e,f,g,h,i,j,k,l;b=new I_;c=Dx(AMw);d=Dx(AME);e=Dx(AMF);f=Dx(AMw);g=Dx(AMG);Uk();h=(AM7.eV()).data;i=h.length;j=T(Hy,i);k=j.data;l=0;while(l<i){k[l]=h[l].iu;l=l+1|0;}SG(b,c,d,e,f,g,j,Xt());return b;}
function SG(a,b,c,d,e,f,g,h){var i;i=g.data;a.gN=b;a.nT=c;a.jG=d;a.jI=e;a.iJ=f;a.kT=g;a.pi=h;if(i.length>=15)return;b=new BE;V(b);J(b);}
function Ef(){var a=this;C.call(a);a.bn=0;a.bp=null;a.di=null;a.cF=0;a.ch=0;}
var AMZ=0;var AM8=0;var AMY=0;function I0(b,c){return (c-J3(b)|0)/2|0;}
function Pi(b,c){return I0(b,c)+b.ii|0;}
function WB(a,b,c,d,e){var f,g;if(D5(a.di))return;if(e>DW(a.bp))return;f=e/512|0;e=a.ch;if(f==e)return;if(Kk(f-e|0)>=a.cF){g=0;while(g<a.cF){GC(a,b,d,c,f+g|0);g=g+1|0;}a.ch=f;return;}while(true){e=a.ch;if(e>=f)break;GC(a,b,d,c,e+a.cF|0);a.ch=a.ch+1|0;}while(true){e=a.ch;if(e<=f)break;GC(a,b,d,c,e-1|0);a.ch=a.ch-1|0;}}
function GC(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;DX(b);f=a.bp.d_;g=e*512|0;h=L_(a,g);if(h>=a.bp.k.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bn;a:{while(true){l=a.bp.k.data;if(h>=l.length)break a;m=l[h];n=!AMY?Pi(d.data[m.bF],c):I0(d.data[m.bF],c);o=f.data;D7(b,d.data[m.bF]);CF(b,m.n,k,n);k=o[h]-j+a.bn;if(k>512.0)break;h=h+1|0;}}Dm(BS(a.di,e%a.cF|0),b);}
function WP(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj;if(D5(a.di))return;if(!a.cF)return;if(j>DW(a.bp))return;m=a.bp;n=m.b6.data;o=m.k;p=j/512|0;q=L_(a,j);if(q>n.length)return;r= -a.bn|0;s=i;a:{while(true){t=o.data;u=t.length;if(q>=u)break a;u=q!=(u-1|0)?0:1;if(r>=h)break;v=BS(a.di,p%a.cF|0);w=t[q];x=n[q]+a.bn|0;y=p*512|0;z=(x-y|0)>512?0:1;ba=p+1|0;bb=ba*512|0;bc=Ba(bb,x)-j|0;if(z&&u)bc=bc+a.bn|0;if((r+bc|0)>h)bc=h-r|0;bd=l!==null?0:1;b:{if(!bd){be=!u?a.bn:2*a.bn
|0;bf=l.a;bg=l.b;if(!(bf<bg&&j<=bg&&(j+bc|0)>(bf+be|0)?0:1)){be=0;break b;}}be=1;}c:{if(!bd){bd=!u?a.bn:2*a.bn|0;if(j>=l.a&&(j+bc|0)<=(l.b+bd|0)?1:0){bf=1;break c;}}bf=0;}if(!bf&&!be){l.b=Ba(l.b,DW(a.bp));bg=j>=l.a?bc:(Ba(x,bb)-l.a|0)-(!u?a.bn:0)|0;bh=(j+bc|0)<=(l.b+(!u?a.bn:2*a.bn|0)|0)?0:(Ba(x,bb)-l.b|0)-(!u?a.bn:0)|0;y=j-y|0;u=r+c|0;bi=y;bd=bc-bg|0;CP(e,bi,0.0,bd,s);Bo(f,bd,i);Gx(a,d,u,b,f,e,w,v,g,k,0);bd=y+bc|0;CP(e,bd-bh|0,0.0,bh,s);Bo(f,bh,i);u=u+bc|0;Gx(a,d,u-bh|0,b,f,e,w,v,g,k,0);bj=bd-bg|0;bd=bg-bh
|0;CP(e,bj,0.0,bd,s);Bo(f,bd,i);Gx(a,d,u-bg|0,b,f,e,w,v,g,k,1);}else{CP(e,j-y|0,0.0,bc,s);Bo(f,bc,i);Gx(a,d,r+c|0,b,f,e,w,v,g,k,bf);}j=j+bc|0;r=r+bc|0;if(!z){q=q+(-1)|0;p=ba;}q=q+1|0;}}}
function Gx(a,b,c,d,e,f,g,h,i,j,k){var l,m;if(e.a&&e.b){if(f.b_!==0.0&&f.ci!==0.0){l=j.kT.data[g.b5];if(k)m=j.iJ;else{m=l.ne;if(m===null)m=j.gN;}g=l.nd;if(AM8)i=0.0;Iq(b,c,d,e,f,h,g,m,i);return;}return;}}
function L_(a,b){var c,d,e,f,g,h,i;c=a.bp;d=c.d_;e=0;f=c.k.data.length;g=b;b=BB(e,f);if(b>0){c=new BE;V(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BB(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function U7(a,b){var c;c=a.bp;if(c===null)return 0;if(DW(c)<b)return Jr(DW(a.bp),512);return Jr(b,512)+1|0;}
function WU(a,b,c,d,e,f){var g,h;a.ch=f/512|0;while(true){g=a.di;if(g.l>=a.cF)break;Cg(g,Dv(c));}h=0;while(h<a.cF){GC(a,b,e,d,a.ch+h|0);h=h+1|0;}}
function Ne(a){a.bp=null;H3(a.di,new Nf);HJ(a.di);}
function Wo(a,b,c,d,e,f,g,h,i){var j,k;j=DW(a.bp);if(j)j=j+a.bn|0;if(!j)j=j-a.bn|0;k=Bi( -a.bn|0,j-g|0);if(k>=h)return;Bo(f,h-k|0,e);BR(b,c+k|0,d,f,i);}
function U3(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=T(Ef,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=Cj(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bp===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new Ef;f.bn=3;f.di=CV();f.ch=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)Ne(o);h=h+1|0;}return g;}
function W_(){AMY=0;}
function Ru(){C.call(this);this.m8=null;}
function ADO(a,b){var c;c=a.m8;c.R=GP(b,Eg(c));}
function Rr(){C.call(this);this.mm=null;}
function AHu(a,b){var c;c=a.mm;c.bu=GP(b,Fq(c));}
function Rq(){C.call(this);this.kl=null;}
function Yt(a){var b,c;b=a.kl;c=b.f1?0:1;b.f1=c;b=new M;O(b);E$(G(b,B(251)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Rt(){C.call(this);this.mv=null;}
function AIV(a){var b,c;b=a.mv;c=b.fU?0:1;b.fU=c;b=new M;O(b);E$(G(b,B(252)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Rs(){C.call(this);this.lV=null;}
function ABR(a){var b,c;b=a.lV;c=b.gQ^1;b.gQ=c;b=new M;O(b);E$(G(b,B(253)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Rp(){C.call(this);this.n4=null;}
function AF4(a){var b,c,d,e,f;b=a.n4;c=(b.ic+3|0)%6|0;b.ic=c;d=b.eQ.data;e=d.length;f=0;while(f<e){b=d[f];b.bn=c;b=b.bp;if(b!==null)b.f0=1;f=f+1|0;}}
var EG=F(Ch);
var AMW=null;var AM9=null;var AMX=null;var AM$=null;function YU(){YU=Bl(EG);AEq();}
function V_(a,b){var c=new EG();V0(c,a,b);return c;}
function V0(a,b,c){YU();Du(a,b,c);}
function AEq(){var b;AMW=V_(B(254),0);AM9=V_(B(255),1);b=V_(B(256),2);AMX=b;AM$=H(EG,[AMW,AM9,b]);}
var DT=F();
var AM_=null;var ANa=null;var ANb=null;var ANc=null;var ANd=null;var ANe=null;var ANf=null;function I6(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;if(c===null)c=ANe;d=T(C,b.l);e=d.data;H7(b,d);f=e.length;if(f){g=T(C,f);h=1;i=d;while(h<f){j=0;while(true){k=i.data;l=k.length;if(j>=l)break;m=Ba(l,j+h|0);n=j+(2*h|0)|0;o=Ba(l,n);l=j;p=m;a:{b:{while(j!=m){if(p==o)break b;q=k[j];r=k[p];if(c.gU(q,r)>0){s=g.data;t=l+1|0;s[l]=r;p=p+1|0;}else{s=g.data;t=l+1|0;s[l]=q;j=j+1|0;}l=t;}while(true){if(p>=o)break a;s=g.data;j=
l+1|0;t=p+1|0;s[l]=k[p];l=j;p=t;}}while(true){if(j>=m)break a;s=g.data;o=l+1|0;t=j+1|0;s[l]=k[j];l=o;j=t;}}j=n;}h=h*2|0;s=i;i=g;g=s;}c:{if(i!==d){t=0;while(true){d=i.data;if(t>=d.length)break c;g.data[t]=d[t];t=t+1|0;}}}}t=0;while(t<f){c=e[t];Hm(b,t);b.bP.data[t]=c;t=t+1|0;}}
function V9(){AM_=new QY;ANa=new QW;ANb=new QX;ANc=new QU;ANd=new QV;ANe=new Px;ANf=new Pw;}
function Ij(){var a=this;C.call(a);a.V=0;a.br=0;}
function Cb(a,b,c){a.V=b;a.br=c;}
function SI(a,b){var c;c=BB(a.V,b.V);if(c)return c;return BB(a.br,b.br);}
var FW=F(E_);
function SD(){FW.call(this);this.n$=null;}
function ABy(a){return 1;}
function AIm(a,b){var c;if(!b)return a.n$;c=new Bp;V(c);J(c);}
function To(){var a=this;C.call(a);a.bw=null;a.cO=null;a.be=null;a.dN=0;}
function Kn(a){var b=new To();AFC(b,a);return b;}
function AFC(a,b){a.dN=0;a.bw=b;a.cO=null;a.be=CV();}
function CA(a){return a.bw.bv;}
function CK(a){return a.bw.bD;}
function HA(a,b){a.bw.bv=b;}
function Ib(a,b){a.bw.bD=b;}
function Iu(a,b){var c;c=a.bw;c.bv=c.bv+b|0;}
function E4(a,b){var c;c=a.bw;c.bD=c.bD+b|0;}
function Id(a,b){return CA(a)<=b&&b<CK(a)?1:0;}
function M7(a,b,c){var d;d=a.bw;return d.bv<=b&&c<=d.bD?1:0;}
function LT(a,b){b=b.bw;return M7(a,b.bv,b.bD);}
function ACs(a){var b,c,d,e,f;b=a.bw;c=b.bv;d=b.bD;e=b.fA;b=new M;O(b);Bv(b,40);Bv(S(G(S(G(S(b,c),B(95)),d),B(95)),e),41);b=N(b);c=a.dN;f=new M;O(f);E$(G(G(f,b),B(95)),c);return N(f);}
var Ky=F();
function AHI(a,b,c){return QO(b,c);}
var Kx=F();
function AAR(a,b,c){b=b;c=c;return QO(b.bw,c.bw);}
function B6(){Ch.call(this);this.iu=null;}
var ANg=null;var ANh=null;var ANi=null;var ANj=null;var ANk=null;var ANl=null;var ANm=null;var ANn=null;var ANo=null;var ANp=null;var ANq=null;var ANr=null;var ANs=null;var ANt=null;var ANu=null;var AM7=null;function Uk(){Uk=Bl(B6);AIb();}
function CN(a,b,c){var d=new B6();Wc(d,a,b,c);return d;}
function AId(a,b,c,d){var e=new B6();Wh(e,a,b,c,d);return e;}
function Wc(a,b,c,d){Uk();Du(a,b,c);a.iu=Pr(d,null);}
function Wh(a,b,c,d,e){Uk();Du(a,b,c);a.iu=Pr(d,e);}
function AIb(){var b;ANg=CN(B(257),0,AMD);ANh=CN(B(258),1,Ck(204,120,50));ANi=CN(B(259),2,Bx(B(260)));ANj=CN(B(261),3,Bx(B(262)));ANk=CN(B(263),4,Bx(B(264)));ANl=CN(B(265),5,Ck(188,63,60));ANm=CN(B(266),6,Bx(B(267)));ANn=CN(B(268),7,Bx(B(269)));ANo=CN(B(270),8,Bx(B(271)));ANp=AId(B(272),9,AMD,Ck(52,65,52));ANq=AId(B(273),10,Bx(B(274)),Bx(B(275)));ANr=CN(B(276),11,Bx(B(277)));ANs=CN(B(278),12,Bx(B(279)));ANt=CN(B(280),13,Bx(B(281)));b=CN(B(282),14,Bx(B(283)));ANu=b;AM7=H(B6,[ANg,ANh,ANi,ANj,ANk,ANl,ANm,ANn,ANo,
ANp,ANq,ANr,ANs,ANt,b]);}
function Hy(){var a=this;C.call(a);a.nd=null;a.ne=null;}
function Pr(a,b){var c=new Hy();ZR(c,a,b);return c;}
function ZR(a,b,c){a.nd=b;a.ne=c;}
var L5=F(0);
var D6=F(Dn);
var Ic=F(D6);
var QY=F(Ic);
var Jc=F(D1);
var QW=F(Jc);
var QX=F(FW);
var DP=F(0);
var QU=F();
var Mr=F(0);
var QV=F();
var Px=F();
function AEf(a,b,c){return b!==null?b.eX(c): -c.eX(b)|0;}
var Pw=F();
function Lh(){C.call(this);this.m9=null;}
function AHW(a,b){Gj(a.m9,b);}
function K2(){var a=this;C.call(a);a.je=0;a.oG=0;a.lL=0;a.mO=0;a.kt=null;}
function B7(a){return a.je>=a.lL?0:1;}
function B1(a){var b,c,d;b=a.oG;c=a.kt;if(b<c.cK){c=new G1;V(c);J(c);}d=a.je;a.mO=d;a.je=d+1|0;return c.mY(d);}
var U0=F();
function Rc(){Dn.call(this);this.oA=null;}
function AGw(a){var b,c,d,e,f;b=a.oA;if(b.hm===null){c=new M1;d=null;e=null;c.q7=(-1);c.cV=b;c.gS=d;c.jk=1;c.i1=0;c.gM=e;c.g9=1;c.is=0;c.mU=0;b.hm=c;}e=b.hm;if(e.mU){f=!e.is?Rn(e.cV,1):!e.g9?Lw(e.cV,e.gM,1):SU(e.cV,e.gM,1);c=ACj(e.cV,f,e.gS,e.jk,e.i1,1);}else{f=!e.i1?Rn(e.cV,0):!e.jk?Lw(e.cV,e.gS,0):SU(e.cV,e.gS,0);c=ACj(e.cV,f,e.gM,e.is,e.g9,0);}b=new L$;b.qh=a;b.hM=c;return b;}
var U9=F();
var Xd=F(0);
function Q$(b,c){var d,e,f,g;d=c.data;e=b.data.length;f=d.length;g=Dk(b,e+f|0);DJ(c,0,g,e,f);return g;}
function IO(b,c,d){DJ(b,c,d,0,d.data.length);return d;}
function ND(b,c,d){var e;if(c>0)DJ(b,0,d,0,c);e=d.data.length;if(c<e)DJ(b,c+1|0,d,c,e-c|0);return d;}
function Vf(b,c,d,e){var f;if(c>0)DJ(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)DJ(b,d,e,c,f-d|0);}return e;}
function WO(b,c){var d,e;d=b.data.length;e=Dk(b,d+1|0);e.data[d]=c;return e;}
function Hb(b){var c;c=new Ra;c.mz=b;return c;}
function Iw(){var a=this;C.call(a);a.f2=null;a.eu=null;}
function GG(){var a=this;Iw.call(a);a.ix=0;a.d6=null;}
var On=F(0);
function Ra(){C.call(this);this.mz=null;}
function JU(a){return a.mz;}
function L$(){var a=this;C.call(a);a.hM=null;a.qh=null;}
function AAf(a){return a.hM.c1<=0?0:1;}
function AEL(a){var b,c,d,e,f;b=a.hM;if(b.ln!=b.ji.eW){b=new G1;V(b);J(b);}c=b.c1;if(!c){b=new JY;V(b);J(b);}a:{d=b.gV.data;e=c-1|0;b.c1=e;f=d[e];b.kW=f;f=Ho(f,b.gH);if(f!==null)while(true){if(f===null)break a;d=b.gV.data;c=b.c1;b.c1=c+1|0;d[c]=f;f=GJ(f,b.gH);}}NA(b);return b.kW.et;}
function KT(){var a=this;C.call(a);a.bx=null;a.gt=null;a.dZ=null;a.cN=0;a.dm=0;a.eK=null;a.en=null;a.eq=0;}
function OW(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.cN;i=Bd(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bi(i,e))a:{while(true){if(d<=e){j=d;break a;}DX(c);j=d+(-1)|0;b=C8(d);d=Bd(j,a.dm)%a.dZ.b|0;Fc(a,c,b,a.eq,g);Gw(a.bx,c,0,d);if(!(j%a.cN|0))break;d=j;}}else{DX(b);k=a.cN-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Fc(a,b,C8(j),Bd(a.dm,k)+a.eq|0,g);k=k+(-1)|0;j=h;}Dm(a.bx,b);j=Bi(i,e);}return j;}k=a.cN;h=Bd(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Ba(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}DX(c);b=C8((d+f|0)+1|0);j=d
+1|0;d=Bd(d,a.dm)%a.dZ.b|0;Fc(a,c,b,a.eq,g);Gw(a.bx,c,0,d);if(!(j%a.cN|0))break;d=j;}}else{DX(b);d=0;while(d<a.cN){h=h+1|0;Fc(a,b,C8((h>e?h-f|0:h)+f|0),Bd(a.dm,d)+a.eq|0,g);d=d+1|0;}Dm(a.bx,b);j=Ba(i,e);}return j;}
function He(a,b,c,d,e,f){Iq(b,a.gt.a+d.a|0,c+d.b|0,a.eK,a.en,a.bx,e,f,0.0);}
function Fc(a,b,c,d,e){CF(b,c,a.dZ.a-20.0*e,d);}
function R8(){var a=this;C.call(a);a.qA=null;a.qB=0;a.qz=null;}
var E0=F(GT);
var Sf=F(D9);
var G1=F(Bg);
var JN=F(Df);
var ANv=0.0;var ANw=null;function WE(){ANv=$rt_globals.NaN;ANw=E($rt_floatcls());}
var EK=F();
var ALQ=null;var ALS=null;var ALT=null;var ALR=null;var ALP=null;function VF(){ALQ=Et([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);ALS=AAb([W(1),W(10),W(100),W(1000),W(10000),W(100000),W(1000000),W(10000000),W(100000000),W(1000000000),BZ(1410065408, 2),BZ(1215752192, 23),BZ(3567587328, 232),BZ(1316134912, 2328),BZ(276447232, 23283),BZ(2764472320, 232830),BZ(1874919424, 2328306),BZ(1569325056, 23283064),BZ(2808348672, 232830643)]);ALT=AAb([W(1),W(10),W(100),W(10000),W(100000000),BZ(1874919424, 2328306)]);ALR
=new PY;ALP=new QP;}
var H4=F();
var ANx=null;var ANy=null;function V$(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.kp=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.hP=0;c.hx=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Fi(Cz(W(e),W(8388608)),DQ)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=Wg(ANy,f);if(h<0)h=( -h|0)-2|0;i=ANy.data;j=9+(f-i[h]|0)|0;k=W(e);l=ANx.data;m=D4(Dt(BG(k,W(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=D4(Dt(BG(k,W(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g:l[h]<<( -g|0);o
=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BB(q,r);e=e>0?Bd(m/q|0,q):e<0?Bd(m/r|0,r)+r|0:Bd((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.hP=e;c.hx=h-50|0;}
function UW(){var b,c,d,e,f,g,h,i;ANx=BQ(100);ANy=BQ(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=ANx.data;g=d+50|0;f[g]=$rt_udiv(e,20);ANy.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:D4(B$(W(h),Fu(BG(W(b&((1<<i)-1|0)),W(10)),i)));f=ANx.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);ANy.data[i]=c;d=d+1|0;}}
function QP(){var a=this;C.call(a);a.hP=0;a.hx=0;a.kp=0;}
var S4=F(Bg);
function JF(){var a=this;C.call(a);a.qf=null;a.jC=0.0;a.qC=0.0;a.dI=null;a.e_=null;a.iZ=null;a.dR=0;}
function XL(a,b){var c;if(b!==null){a.e_=b;return a;}c=new BE;Bb(c,B(284));J(c);}
function Wm(a,b){var c;if(b!==null){a.iZ=b;return a;}c=new BE;Bb(c,B(284));J(c);}
function MW(a,b,c,d){var e,f,g,$$je;e=a.dR;if(!(e==2&&!d)&&e!=3){a.dR=d?2:1;while(true){try{f=XN(a,b,c);}catch($$e){$$je=DH($$e);if($$je instanceof Bg){g=$$je;J(AAP(g));}else{throw $$e;}}if(FX(f))return f;if(GI(f)){if(d&&C$(b)){if(a.e_===AMh)return Do(BT(b));if(BT(c)<=I(a.dI))return AMk;D8(b,b.J+BT(b)|0);if(a.e_===AMi)H8(c,a.dI);}return f;}if(Nj(f)){g=a.e_;if(g===AMh)return f;if(g===AMi){if(BT(c)<I(a.dI))return AMk;H8(c,a.dI);}D8(b,b.J+H$(f)|0);}else if(JE(f)){g=a.iZ;if(g===AMh)break;if(g===AMi){if(BT(c)<I(a.dI))return AMk;H8(c,
a.dI);}D8(b,b.J+H$(f)|0);}}return f;}b=new DM;V(b);J(b);}
function T$(a,b){var c,d,e,f;c=a.dR;if(c&&c!=3){b=new DM;V(b);J(b);}if(!BT(b))return X6(0);if(a.dR)a.dR=0;d=X6(Bi(8,BT(b)*a.jC|0));while(true){e=MW(a,b,d,0);if(GI(e))break;if(FX(e))d=OA(a,d);if(!IB(e))continue;QM(e);}b=MW(a,b,d,1);if(IB(b))QM(b);while(true){f=a.dR;if(f!=3&&f!=2)break;a.dR=3;if(GI(AMl)){d.cw=d.J;d.J=0;d.fr=(-1);return d;}d=OA(a,d);}b=new DM;V(b);J(b);}
function OA(a,b){var c,d,e;c=b.fj;d=TH(c,Bi(8,c.data.length*2|0));e=VN(d,0,d.data.length);D8(e,b.J);return e;}
var Vn=F(Cx);
function PY(){var a=this;C.call(a);a.ir=DQ;a.hk=0;a.ka=0;}
var DM=F(Bg);
var Wv=F(D9);
function AAP(a){var b=new Wv();AEb(b,a);return b;}
function AEb(a,b){a.gA=1;a.gX=1;a.ia=b;}
var Nf=F();
function AHQ(a,b){WG(b);}
function M1(){var a=this;D6.call(a);a.q7=0;a.cV=null;a.gS=null;a.jk=0;a.i1=0;a.gM=null;a.g9=0;a.is=0;a.mU=0;}
function Nk(){C.call(this);this.mI=null;}
function Zd(a,b){var c,d,e;c=a.mI;if(c.h.cG==c.id){b=b.data;d=DU(b[0]);e=EW(b[1]);VQ(c.h,d,e);Mw(c.h);}}
var Tr=F();
function Gb(b,c,d){var e,f;a:{e=b.a;f=c.a;if(e>=f&&e<(f+d.a|0)){e=b.b;f=c.b;if(e>=f&&e<(f+d.b|0)){e=1;break a;}}e=0;}return e;}
function T3(b,c,d,e){var f;a:{f=b.a;if(f>=c&&f<(c+e.a|0)){c=b.b;if(c>=d&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function In(){var a=this;JF.call(a);a.kz=null;a.np=null;}
function XN(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.kz;e=0;f=0;g=a.np;a:{b:{while(true){if((e+32|0)>f&&C$(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=BT(b)+k|0;h=j.length;f=Ba(l,h);m=f-k|0;if(k<0)break b;if(k>=h)break b;l=k+m|0;if(l>h){b=new Bp;c=new M;O(c);S(G(S(G(c,B(285)),l),B(101)),h);Bb(b,N(c));J(b);}if(BT(b)<m){b=new Jx;V(b);J(b);}if(m<0){b=new Bp;c=new M;O(c);G(S(G(c,B(102)),m),B(103));Bb(b,N(c));J(b);}n=b.J;h=n+b.h5|0;e=0;while(e<m){o=k+1|0;i=b.iI.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.J=n+m|0;e=0;}if(!C$(c)){p=!C$(b)&&e>=f?AMl:AMk;break a;}i=g.data;n=BT(c);o=i.length;n=Ba(n,o);q=new QA;q.mD=b;q.n5=c;p=XY(a,d,e,f,g,0,n,q);e=q.o6;if(p===null&&0==q.hn)p=AMl;k=q.hn;h=0;if(c.jn){b=new Ha;V(b);J(b);}if(BT(c)<k)break;if(h>=o){b=new Bp;c=new M;O(c);Bv(S(G(S(G(c,B(104)),h),B(98)),o),41);Bb(b,N(c));J(b);}l=h+k|0;if(l>o){b=new Bp;c=new M;O(c);S(G(S(G(c,B(106)),l),B(101)),o);Bb(b,N(c));J(b);}if(k<0){b=new Bp;c=new M;O(c);G(S(G(c,B(102)),k),B(103));Bb(b,N(c));J(b);}o=c.J;m=0;while(m
<k){l=o+1|0;n=h+1|0;Ol(c,o,i[h]);m=m+1|0;o=l;h=n;}c.J=c.J+k|0;if(p!==null)break a;}b=new Gs;V(b);J(b);}b=new Bp;c=new M;O(c);Bv(S(G(S(G(c,B(104)),k),B(98)),h),41);Bb(b,N(c));J(b);}D8(b,b.J-(f-e|0)|0);return p;}
var Pu=F(In);
function XY(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Ip(h,2))break a;i=AMl;break a;}c=k+1|0;n=j[k];if(!ES(a,n)){c=c+(-2)|0;i=Do(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Ip(h,3))break a;i=AMl;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!ES(a,n))break b;if(!ES(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(JL(p)){c=k+(-3)|0;i=Do(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Do(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Ip(h,4))break a;i=AMl;break a;}if((f+2|0)>g){c=k+(-1)|0;if(BT(h.n5)<2?0:1)break a;i=AMk;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!ES(a,n))break c;if(!ES(a,o))break c;if(!ES(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=GD(r);m=c+1|0;j[c]=G2(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Do(1);break a;}c=k+(-3)|0;i
=Do(1);}h.o6=c;h.hn=f;return i;}
function ES(a,b){return (b&192)!=128?0:1;}
var NZ=F();
function AB9(a,b){b=b;b.bx=D$(b.bx,null);}
var HZ=F(Df);
var ANz=0.0;var ANA=null;function Ud(){ANz=$rt_globals.NaN;ANA=E($rt_doublecls());}
var Jf=F();
var ANB=null;var ANC=null;function VC(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.ka=Fi(Cz(d,BZ(0, 2147483648)),DQ)?0:1;e=Cz(d,BZ(4294967295, 1048575));f=D4(Fu(d,52))&2047;if(Fi(e,DQ)&&!f){c.ir=DQ;c.hk=0;return;}g=0;if(f)e=AJK(e,BZ(0, 1048576));else{e=ED(e,1);while(Fi(Cz(e,BZ(0, 1048576)),DQ)){e=ED(e,1);f=f+(-1)|0;g=g+1|0;}}h=Wg(ANC,f);if(h<0)h=( -h|0)-2|0;i=12+(f-ANC.data[h]|0)|0;j=NQ(e,ANB.data[h],i);if(UF(j,BZ(2808348672, 232830643))){h=h+1|0;i=12+(f-ANC.data[h]|0)|0;j=NQ(e,ANB.data[h],i);}k
=Dt(ANB.data[h],(63-i|0)-g|0);l=Fu(B$(k,W(1)),1);m=Fu(k,1);if(Fi(e,BZ(0, 1048576)))m=Fu(m,2);n=W(10);while(Gl(n,m)){n=BG(n,W(10));}if(UF(Hp(j,n),Cw(m,W(2))))n=Cw(n,W(10));o=W(1);while(Gl(o,l)){o=BG(o,W(10));}if(UD(Io(o,Hp(j,o)),Cw(l,W(2))))o=Cw(o,W(10));f=AJ5(n,o);e=f>0?BG(Cw(j,n),n):f<0?B$(BG(Cw(j,o),o),o):BG(Cw(B$(j,Cw(o,W(2))),o),o);if(UF(e,BZ(2808348672, 232830643))){h=h+1|0;e=Cw(e,W(10));}else if(UK(e,BZ(1569325056, 23283064))){h=h+(-1)|0;e=BG(e,W(10));}c.ir=e;c.hk=h-330|0;}
function NQ(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Cz(b,W(65535));f=Cz(Dt(b,16),W(65535));g=Cz(Dt(b,32),W(65535));h=Cz(Dt(b,48),W(65535));i=Cz(c,W(65535));j=Cz(Dt(c,16),W(65535));k=Cz(Dt(c,32),W(65535));l=Cz(Dt(c,48),W(65535));m=B$(B$(BG(k,e),BG(j,f)),BG(i,g));n=B$(B$(B$(BG(l,e),BG(k,f)),BG(j,g)),BG(i,h));o=B$(B$(ED(BG(l,h),32+d|0),ED(B$(BG(l,g),BG(k,h)),16+d|0)),ED(B$(B$(BG(l,f),BG(k,g)),BG(j,h)),d));return B$(d>16?B$(o,ED(n,d-16|0)):B$(o,Dt(n,16-d|0)),Dt(m,32-d|0));}
function Vg(){var b,c,d,e,f,g,h,i,j,k;ANB=AKX(660);ANC=BQ(660);b=BZ(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=ANB.data;g=d+330|0;f[g]=Ju(e,W(80));ANC.data[g]=c;e=Ju(e,W(10));h=TC(e,W(10));while(Gl(e,b)&&Fi(Cz(e,BZ(0, 2147483648)),DQ)){e=ED(e,1);c=c+1|0;h=ED(h,1);}e=B$(e,Cw(h,W(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(UD(e,BZ(3435973836, 214748364))){e=Fu(e,1);j=j+1|0;d=d+(-1)|0;}k=BG(e,W(10));b=j<=0?k:B$(k,Fu(BG(Cz(b,W((1<<j)-1|0)),W(10)),j));f=ANB.data;g=(330-i|0)-1|0;f[g]=Ju(b,W(80));ANC.data[g]
=d;i=i+1|0;}}
var Oc=F(Df);
var AND=null;function Ju(b,c){return Long_udiv(b, c);}
function TC(b,c){return Long_urem(b, c);}
function Ve(){AND=E($rt_longcls());}
var Fm=F(Bg);
function K7(){var a=this;C.call(a);a.jN=null;a.lR=null;a.n7=0;a.o2=0;}
function Jp(a,b){return BT(a.lR)<b?0:1;}
function S8(){var a=this;C.call(a);a.ln=0;a.ji=null;a.gV=null;a.kW=null;a.nX=null;a.n9=0;a.nR=0;a.c1=0;a.gH=0;}
function ACj(a,b,c,d,e,f){var g=new S8();Y4(g,a,b,c,d,e,f);return g;}
function Y4(a,b,c,d,e,f,g){var h,i;a.ji=b;a.ln=b.eW;b=b.cP;h=b!==null?b.c7:0;i=c.data;a.gV=Dk(c,h);a.c1=i.length;a.nX=d;a.n9=e;a.nR=f;a.gH=g;NA(a);}
function NA(a){var b,c;if(a.n9){b=a.c1;if(b){c=EZ(a.ji.ec,a.gV.data[b-1|0].dY,a.nX);if(a.gH)c= -c|0;if(!a.nR){if(c>=0)a.c1=0;}else if(c>0)a.c1=0;return;}}}
var Tt=F();
function V6(b,c){return WX(null,b,c,0);}
function WX(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=ACA(c);g=BY(f);h=BY(f);i=BY(f);j=T(Cp,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<B4(b)){l=BY(f);c[k]=Cj(b,k);l=4*l|0;f.ee=f.ee+l|0;}else c[k]=C_(Ty(f,d,0));k=k+1|0;}m=X4(f,h);n=Oj();e=0;while(e<i){O$(n,WM(BY(f),BY(f)),WM(BY(f),BY(f)));e=e+1|0;}L3(f);o=new MV;o.gO=CV();o.C=j;o.e7=0;o.cG=0;o.cl=WF(AHV(Tv(HM(0,I(F5(o)),0))));o.cl=WF(m);o.jj=n;b=Oj();f=new Qj;Ov(f,n);while(KQ(f)){P7(f);n=f.ff;m=n.f2;p=n.eu;q=CV();if(G5(b,p)===null)O$(b,p,q);Cg(G5(b,p),m);}if(b.er
===null){f=new Mg;f.o_=b;b.er=f;}f=b.er.gG();while(f.gZ()){I6(f.fX(),ANe);}o.ik=b;return o;}
function VQ(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=ACA(c);g=BY(f);h=BY(f);i=BY(f);j=BY(f);k=K5(b,g);l=K5(b,h);m=(G0(Cj(b,k.a),k.b)).data[0].k;e=(G0(Cj(b,l.a),l.b)).data[1].k;n=0;o=i-1|0;while(n<i){p=Ty(f,d,g);if(!n)p=Q$(m,p);if(n==o)p=Q$(p,e);q=k.a+n|0;r=C_(p);b.C.data[q]=r;n=n+1|0;}r=X4(f,j);L3(f);if(!D5(r)){s=HM(g,h,(-1));b=b.cl;f=AJA(s,r);r=Iv(b,b.b7,s);if(r!==null){f=f.b7.be;if(r===b.b7)b.b7=BS(f,0);else if(r.cO!==null){b=new J8;b.pk=r;H3(f,b);b=r.cO.be;h=b.l;q
=0;a:{b:{while(q<h){c:{k=BS(b,q);if(r!==null){if(!OL(r,k))break c;else break b;}if(k===null)break b;}q=q+1|0;}q=(-1);break a;}}FR(r.cO.be,q);b=r.cO.be;Mq(b,q);if(!D5(f)){Hw(b,b.l+f.l|0);j=f.l;g=b.l;h=g-1|0;while(h>=q){c=b.bP.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.l=g+j|0;f=BW(f);g=0;while(g<j){c=b.bP.data;h=q+1|0;c[q]=B1(f);g=g+1|0;q=h;}b.cK=b.cK+1|0;}}}}}
function Ty(b,c,d){var e,f,g,h,i,j,k,l;e=BY(b);f=T(B3,e);g=f.data;h=0;while(h<e){i=BY(b);j=BY(b);k=BY(b);l=BY(b);g[h]=C6(HR(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function X4(b,c){var d,e;d=CV();e=0;while(e<c){Cg(d,HM(BY(b),BY(b),BY(b)));e=e+1|0;}return d;}
var R4=F(0);
var AM0=null;function TI(){AM0=null;}
function TO(){var a=this;C.call(a);a.gF=null;a.ee=0;}
function ACA(a){var b=new TO();AHa(b,a);return b;}
function AHa(a,b){a.gF=b;a.ee=0;}
function BY(a){var b,c;b=a.gF.data;c=a.ee;a.ee=c+1|0;return b[c];}
function L3(a){var b,c,d,e;if(a.ee!=a.gF.data.length){b=Q6();c=a.gF.data.length;d=a.ee;e=new M;O(e);G(S(G(S(G(e,B(286)),c),B(287)),d),B(288));Bq(b,N(e));}}
function Xy(){var a=this;C.call(a);a.cU=0;a.dr=0;}
function WM(a,b){var c=new Xy();ADC(c,a,b);return c;}
function ADC(a,b,c){a.cU=b;a.dr=c;}
function AFN(a,b){var c;b=b;c=BB(a.cU,b.cU);if(!c)c=BB(a.dr,b.dr);return c;}
function WT(){D6.call(this);this.vq=null;}
var Ha=F(Fm);
var Gs=F(Bg);
var Jx=F(Bg);
var Tc=F();
function N$(b,c){return b.data[c];}
function Mg(){Dn.call(this);this.o_=null;}
function ABh(a){var b;b=new Nw;Ov(b,a.o_);return b;}
var IC=F(Fh);
var AMf=null;function ABB(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function Yn(){var b;b=new IC;SW(b);AMf=b;}
function FQ(){var a=this;C.call(a);a.f_=0;a.nf=0;a.fD=null;a.ff=null;a.lD=null;a.gw=null;}
function ANE(a){var b=new FQ();Ov(b,a);return b;}
function Ov(a,b){a.gw=b;a.nf=b.eU;a.fD=null;}
function KQ(a){var b,c;if(a.fD!==null)return 1;while(true){b=a.f_;c=a.gw.cc.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.f_=b+1|0;}return 0;}
function Uz(a){var b;if(a.nf==a.gw.eU)return;b=new G1;V(b);J(b);}
function P7(a){var b,c,d,e;Uz(a);if(!KQ(a)){b=new JY;V(b);J(b);}b=a.fD;if(b!==null){c=a.ff;if(c!==null)a.lD=c;a.ff=b;a.fD=b.d6;}else{d=a.gw.cc.data;e=a.f_;a.f_=e+1|0;b=d[e];a.ff=b;a.fD=b.d6;a.lD=null;}}
var Qj=F(FQ);
var Nw=F(FQ);
function AGg(a){P7(a);return a.ff.eu;}
function St(){C.call(this);this.om=null;}
function ACP(a,b){var c,d,e,f;c=a.om;d=Ce(b);e=new M;O(e);G(G(e,B(289)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new Oz;d.qs=c;d.ly=b;e=new Oy;e.pB=c;f=new Qi;f.qj=e;e=new Q8;e.kq=d;c=b.dO;if(c!==null)c.arrayBuffer().then(Bc(e,"f"),Bc(f,"f"));else{b=b.e3.getFile();c=new Q9;c.n1=e;c.n2=f;b.then(Bc(c,"f"),Bc(f,"f"));}}
function Sw(){C.call(this);this.qW=null;}
function AIy(a,b){var c;b=Ce(b);c=new M;O(c);G(G(c,B(290)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Kc(){C.call(this);this.ql=null;}
function AG6(a){Bq(Bw(),B(291));}
function P6(){C.call(this);this.kR=null;}
function Zs(a){Gm(a.kR);}
function PH(){C.call(this);this.kM=null;}
function AB2(a,b){Db(a.kM,b);}
function MU(){C.call(this);this.m$=null;}
function Z$(a,b){var c,d;c=a.m$;d=c.cB+1|0;c.cB=d;c=new M;O(c);G(G(S(c,d),B(292)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var JY=F(Bg);
function J8(){C.call(this);this.pk=null;}
function AIe(a,b){b.cO=a.pk.cO;}
var KF=F();
function ACe(a,b){var c;b=Ce(b);c=new M;O(c);G(G(c,B(290)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function PZ(){C.call(this);this.lS=null;}
function AHf(a){var b,c;b=a.lS;c=new M;O(c);G(G(G(c,B(293)),b),B(294));$rt_globals.console.info($rt_ustr(N(c)));}
function M$(){C.call(this);this.jQ=null;}
function AFj(a,b){var c,d;c=a.jQ;d=c.cB+1|0;c.cB=d;c=new M;O(c);G(G(S(c,d),B(295)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Q7(){C.call(this);this.k5=null;}
function AIN(a,b){var c,d;c=a.k5;d=c.cB+1|0;c.cB=d;c=b.fv;b=new M;O(b);G(G(S(b,d),B(296)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var XS=F();
var XB=F();
function Qg(b,c,d,e){var f,g;f=b.next();g=new Ss;g.jY=b;g.jX=c;g.j1=d;g.jZ=e;f.then(Bc(g,"f"),Bc(d,"f"));}
function TK(b){$rt_globals.console.info("JsFileDialog: "+b);}
function XZ(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(DV()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Sp;f.mf=b;f.mg=d;d.addEventListener("change",Bc(f,"handleEvent"));d.click();}
function TS(b,c){var d;if(c.isFile?1:0)b.j(Ti(c.file()));else{c=c.createReader();d=new Se;d.of=b;c.readEntries(Bc(d,"f"));}}
function Qo(){var a=this;C.call(a);a.oE=null;a.oD=null;}
function ZA(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;a:{c=a.oE;d=a.oD.bi;e=F4(0,(b.b+c.R|0)/c.N|0,B4(c.h)-1|0);f=Bi(0,(b.a-c.bU|0)+c.bu|0);g=KD(Cj(c.h,e),f,c.D.bM,c.bI);if(c.e0){h=Ng(c.h,e,f);if(h!==null){Qd(c,h);break a;}h=Oo(c.h,e,f);if(h!==null&&!D5(h)&&!EN(c.c5)){i=c.c5;j=UV();k=0;l=BW(h);b:{while(true){if(!B7(l))break b;m=B1(l);n=EE(Cj(c.h,m.cU));f=0;o=I(n)-1|0;c:{while(f<=o){if(L(n,f)>32)break c;f=f+1|0;}}while(f<=o&&L(n,o)<=32){o=o+(-1)|0;}n=Ci(n,f,o+1|0);if(I(n)>43){n=Ci(n,0,40);p=new M;O(p);G(G(p,n),
B(249));n=N(p);}f=m.cU+1|0;q=m.dr;p=new M;O(p);r=S(p,f);Bv(r,58);G(G(S(r,q),B(209)),n);n=N(p);p=AMR;r=new Ld;r.kZ=c;r.kY=m;En(j,n,p,r);k=k+1|0;if(k>20)break;}f=h.l-k|0;h=new M;O(h);G(S(G(h,B(297)),f),B(298));En(j,N(h),AMR,new Le);}j=HD(j);h=new RD;h.nm=c;H2(i,b,j,h);}}c.G=e;c.M=g;c.cn=EU(Cj(c.h,e),c.M,c.D.bM,c.bI);GW(c);EO(c);if(d)c.w.cs=1;b=c.w;if(!b.cs){Cb(b.b0,c.G,c.M);c.w.cs=1;}N7(c.w,c.G,c.M);}}
function Sy(){C.call(this);this.m4=null;}
function AFU(a){Eh(a.m4);}
function P2(){C.call(this);this.jU=null;}
function AAd(a){Sh(a.jU);}
function Py(){C.call(this);this.kH=null;}
function AB0(a,b){var c,d,e,f,g;c=a.kH;d=E3(b);e=new M;O(e);G(G(e,B(299)),d);$rt_globals.console.info($rt_ustr(N(e)));C0(c,0,0,0);c.dF=EQ();c.fR=0;c.fQ=0;c.h=AFL();C0(c,0,0,0);d=E3(b);f=E6(d,46,I(d)-1|0);if(f!=(-1))d=Dj(d,f);g=!BM(d,B(300))?5120:10240;d=new OV;d.mW=c;d.mV=g;d.mS=b;c=b.dO;if(c!==null)J6(d,HL(b,c.size));else{c=b.e3.getFile();e=new Ps;e.jq=b;e.jr=d;b=new Pv;b.oS=d;c.then(Bc(e,"f"),Bc(b,"f"));}}
var Vq=F();
function Ql(){C.call(this);this.nr=null;}
function AIp(a,b){a.nr.y();}
function No(){C.call(this);this.j6=null;}
function YD(a,b){a.j6.j(EM(b));}
var Sv=F();
function AGH(a,b){TK(b);}
function Su(){var a=this;C.call(a);a.lU=null;a.lT=null;}
function AAX(a,b){var c,d,e,f,g,h,i;c=a.lU;d=a.lT;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new MT;i.kF=c;i.kE=g;h.then(Bc(i,"f"),Bc(d,"f"));e=e+1|0;}}
var RY=F();
function ACf(a,b){TK(b);}
function RX(){var a=this;C.call(a);a.lo=null;a.lp=null;}
function ACT(a,b){var c,d,e,f,g;c=a.lo;d=a.lp;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=T(BA,1);g.data[0]=EM(b.name);Qg(f,c,d,g);}
function SF(){var a=this;C.call(a);a.mK=null;a.mJ=null;}
function AA3(a,b,c,d){var e,f,g,h;b=a.mK;e=a.mJ;Po(b,e);if(Ke(d)){f=d.cS;g=e.bc;h=new Br;f=f.v;UC(h,f.a-(g*3|0)|0,f.b-g|0);Pz(b,h,d.hE,e);}}
function RT(){C.call(this);this.pd=null;}
function Zp(a){var b;b=a.pd;Eh(b.bY);IX(b.H,Pe(b),1);}
function RS(){C.call(this);this.k8=null;}
function AIE(a){var b;b=a.k8;Eh(b.bY);IX(b.H,Pe(b),0);}
function RU(){C.call(this);this.kx=null;}
function ABu(a){var b,c,d;b=a.kx;Eh(b.bY);c=b.U.r;b=b.H;Ct(b);d=new M5;d.kr=b;Ns(c,d,Xn(B(301)));}
function Pg(){C.call(this);this.n8=null;}
function Zh(a){var b,c,d,e;b=a.n8.h;c=b.cG;d=new M;O(d);S(G(d,B(302)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.e7;d=new M;O(d);S(G(d,B(303)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.cl;b=F5(b);Oh(d,0,d.b7,b);b=Bw();e=b.hz;e.data[0]=10;Ln(b,e,0,1);}
function Ph(){C.call(this);this.no=null;}
function ADb(a){OF(a.no);}
function Pd(){C.call(this);this.jv=null;}
function AGS(a){var b;b=a.jv;Ms(b,b.eO);}
function Pf(){C.call(this);this.oM=null;}
function AE2(a){H5(a.oM);}
function MP(){C.call(this);this.nj=null;}
function AGl(a){a.nj.co=UU();}
function MQ(){C.call(this);this.nW=null;}
function AEA(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.nW;c=new I_;d=Dx(AMH);e=Dx(AMJ);f=Dx(AMF);g=Dx(AMH);h=Dx(AMK);Xr();i=(ANF.eV()).data;j=i.length;k=T(Hy,j);l=k.data;m=0;while(m<j){l[m]=i[m].iX;m=m+1|0;}SG(c,d,e,f,g,h,k,AD8(DF(173),DF(242),DF(173),Ck(252,250,237)));b.co=c;}
function OJ(){C.call(this);this.lf=null;}
function ACa(a){var b;b=a.lf;EH(b,b.dc.jg,b.cY+1|0);}
function OI(){C.call(this);this.kG=null;}
function AIz(a){var b,c;b=a.kG;c=b.cY;if(c>7)EH(b,b.dc.jg,c-1|0);}
function Pj(){C.call(this);this.n6=null;}
function YP(a){var b;b=a.n6.H;EH(b,B(133),b.cY);}
function Pm(){C.call(this);this.nD=null;}
function AC9(a){var b;b=a.nD.H;EH(b,B(244),b.cY);}
function Pk(){C.call(this);this.jL=null;}
function AFo(a){var b;b=a.jL.H;EH(b,B(33),b.cY);}
function Pn(){C.call(this);this.pe=null;}
function ADP(a){var b;b=a.pe.H;EH(b,B(113),b.cY);}
function Kv(){C.call(this);this.nB=null;}
function AI4(a,b){var c,d;c=a.nB;d=new Bg;Bb(d,$rt_str(b.message));c.j(d);}
function Sp(){var a=this;C.call(a);a.mf=null;a.mg=null;}
function AB7(a,b){var c,d,e,f,g,h;b=a.mf;c=a.mg;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new Kq;h.jT=b;h.jS=g;$rt_globals.setTimeout(Bc(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Ti(d.item(f));g=new Ka;g.m_=b;g.na=c;$rt_globals.setTimeout(Bc(g,"onTimer"),0);f=f+1|0;}}
var OG=F(0);
function Kr(){var a=this;C.call(a);a.nZ=0;a.nY=0;}
function GP(a,b){return MJ(a.nZ,b,a.nY);}
var M0=F(Bg);
var Sn=F(Bg);
function QH(){E0.call(this);this.rM=0;}
function MS(){E0.call(this);this.rK=0;}
function QA(){var a=this;C.call(a);a.mD=null;a.n5=null;a.o6=0;a.hn=0;}
function Ip(a,b){return BT(a.mD)<b?0:1;}
function OQ(){C.call(this);this.kA=null;}
function ADu(a,b){Gj(a.kA,b);}
function SK(){var a=this;C.call(a);a.kd=null;a.kc=null;a.kb=0;}
function AD0(a,b){var c,d,e;c=a.kd;d=a.kc;e=a.kb;d.j(OY(c,(b.a+e|0)-c.cX.a|0));}
function SL(){var a=this;C.call(a);a.pr=null;a.pq=null;a.pp=0;}
function AHN(a,b){var c,d,e;c=a.pr;d=a.pq;e=a.pp;d.j(OX(c,(b.b+e|0)-c.cX.b|0));}
function RF(){var a=this;C.call(a);a.cR=0;a.dx=0;a.jx=0;a.ga=null;}
function M5(){C.call(this);this.kr=null;}
function Zw(a,b){Db(a.kr,b);}
function M3(){C.call(this);this.ov=null;}
function Zl(a,b){P_(a.ov.U.r,b,AMN,Xn(B(304)));}
function Mz(){C.call(this);this.kv=null;}
function AIw(a,b){var c,d;c=a.kv;d=b.fv;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function MT(){var a=this;C.call(a);a.kF=null;a.kE=null;}
function AA8(a,b){a.kF.j(Wk(a.kE,b));}
var JM=F(0);
function Kq(){var a=this;C.call(a);a.jT=null;a.jS=null;}
function ACX(a){TS(a.jT,a.jS);}
function Ka(){var a=this;C.call(a);a.m_=null;a.na=null;}
function Yw(a){a.m_.j(a.na);}
function Ss(){var a=this;C.call(a);a.jY=null;a.jX=null;a.j1=null;a.jZ=null;}
function ACu(a,b){var c,d,e,f,g;c=a.jY;d=a.jX;e=a.j1;f=a.jZ;if(!(b.done?1:0)){Qg(c,d,e,f);g=b.value;if(!(g.kind==='file'?1:0))Qg(g.values(),d,e,WO(f,EM(g.name)));else{b=g.getFile();c=new P4;c.lq=d;c.lr=g;c.ls=f;b.then(Bc(c,"f"),Bc(e,"f"));}}}
function XI(){C.call(this);this.zd=null;}
function RD(){C.call(this);this.nm=null;}
function AH_(a){Gm(a.nm);}
function J$(){C.call(this);this.lx=null;}
function AH0(a,b){var c,d,e,f,g;c=b.data;b=a.lx;$rt_globals.console.info("onVpParsed");d=DU(c[0]);e=EW(c[1]);VQ(b.h,d,e);Fw(b.by.r,AM0);E9(b.by.r);f=Io(EQ(),b.dF);g=new M;O(g);G(Gr(G(g,B(305)),f),B(218));$rt_globals.console.info($rt_ustr(N(g)));H5(b);}
var RQ=F(Bp);
var Nd=F(0);
var K3=F(0);
var JA=F();
function UZ(){var a=this;JA.call(a);a.wT=null;a.yw=0;a.xq=0;a.vA=0;}
function Ld(){var a=this;C.call(a);a.kZ=null;a.kY=null;}
function ADz(a){Qd(a.kZ,a.kY);}
var Le=F();
function AEt(a){}
function B5(){Ch.call(this);this.iX=null;}
var ANG=null;var ANH=null;var ANI=null;var ANJ=null;var ANK=null;var ANL=null;var ANM=null;var ANN=null;var ANO=null;var ANP=null;var ANQ=null;var ANR=null;var ANS=null;var ANT=null;var ANU=null;var ANF=null;function Xr(){Xr=Bl(B5);AF7();}
function CU(a,b,c){var d=new B5();Ub(d,a,b,c);return d;}
function ACB(a,b,c,d){var e=new B5();T0(e,a,b,c,d);return e;}
function Ub(a,b,c,d){Xr();Du(a,b,c);a.iX=Pr(d,null);}
function T0(a,b,c,d,e){Xr();Du(a,b,c);a.iX=Pr(d,e);}
function AF7(){var b;ANG=CU(B(257),0,AMI);ANH=CU(B(258),1,Ck(0,49,191));ANI=CU(B(259),2,Bx(B(306)));ANJ=CU(B(261),3,Bx(B(307)));ANK=CU(B(263),4,AMI);ANL=CU(B(265),5,Bx(B(308)));ANM=CU(B(266),6,Bx(B(277)));ANN=CU(B(268),7,Bx(B(309)));ANO=CU(B(270),8,Bx(B(310)));ANP=ACB(B(272),9,AMD,Ck(237,235,252));ANQ=ACB(B(273),10,Bx(B(274)),Bx(B(311)));ANR=CU(B(276),11,Bx(B(277)));ANS=CU(B(278),12,Bx(B(279)));ANT=CU(B(280),13,Bx(B(281)));b=CU(B(282),14,Bx(B(283)));ANU=b;ANF=H(B5,[ANG,ANH,ANI,ANJ,ANK,ANL,ANM,ANN,ANO,ANP,ANQ,
ANR,ANS,ANT,b]);}
function Se(){C.call(this);this.of=null;}
function AFp(a,b){var c,d;c=a.of;d=0;while(d<b.length){TS(c,b[d]);d=d+1|0;}}
var V8=F(0);
function P4(){var a=this;C.call(a);a.lq=null;a.lr=null;a.ls=null;}
function AE_(a,b){a.lq.j(AJg(a.lr,b,a.ls));}
function Nu(){var a=this;C.call(a);a.e=null;a.cu=0;a.hs=null;a.kf=0;a.eD=0;a.dq=0;a.ba=0;a.ip=null;}
function HV(a){return a.e.bh;}
function SJ(a,b,c,d){var e,f,g,h,i,j;e=CV();f=a.cu;g=0;if(c!=f)a.cu=c;a:{switch(b){case -1073741784:h=new N2;c=a.ba+1|0;a.ba=c;EC(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new ME;c=a.ba+1|0;a.ba=c;EC(h,c);break a;case -33554392:h=new OP;c=a.ba+1|0;a.ba=c;EC(h,c);break a;default:c=a.eD+1|0;a.eD=c;if(d!==null)h=AKE(c);else{h=new EI;EC(h,0);g=1;}c=a.eD;if(c<=(-1))break a;if(c>=10)break a;a.hs.data[c]=h;break a;}h=new SE;EC(h,(-1));}while(true){if(Em(a.e)&&a.e.f==(-536870788))
{d=AHB(BV(a,2),BV(a,64));while(!CR(a.e)&&Em(a.e)){i=a.e;j=i.f;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cc(d,Y(i));i=a.e;if(i.S!=(-536870788))continue;Y(i);}i=IE(a,d);i.E(h);}else if(a.e.S==(-536870788)){i=FK(h);Y(a.e);}else{i=Ma(a,h);d=a.e;if(d.S==(-536870788))Y(d);}if(i!==null)Cg(e,i);if(CR(a.e))break;if(a.e.S==(-536870871))break;}if(a.e.hN==(-536870788))Cg(e,FK(h));if(a.cu!=f&&!g){a.cu=f;d=a.e;d.ev=f;d.f=d.S;d.dk=d.dz;j=d.cg;d.m=j+1|0;d.fg=j;Ep(d);}switch(b){case -1073741784:break;case -536870872:d=new Ko;EJ(d,
e,h);return d;case -268435416:d=new Rh;EJ(d,e,h);return d;case -134217688:d=new Nx;EJ(d,e,h);return d;case -67108824:d=new PA;EJ(d,e,h);return d;case -33554392:d=new Da;EJ(d,e,h);return d;default:switch(e.l){case 0:break;case 1:return AKs(BS(e,0),h);default:return AJ4(e,h);}return FK(h);}d=new G$;EJ(d,e,h);return d;}
function Xa(a){var b,c,d,e,f,g,h;b=BQ(4);c=(-1);d=(-1);if(!CR(a.e)&&Em(a.e)){e=b.data;c=Y(a.e);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BP(3);b=e.data;b[0]=c&65535;f=a.e;g=f.S;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Y(f);f=a.e;g=f.S;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Y(f);return AHn(e,3);}return AHn(e,2);}if(!BV(a,2))return Ux(b[0]);if(BV(a,64))return AFY(b[0]);return AAc(b[0]);}e=b.data;c=1;while(c<4&&!CR(a.e)&&Em(a.e)){h=c+1|0;e[c]=Y(a.e);c=h;}if(c==1){h=e[0];if(!(ANV.rt(h)==ANW?0:1))return SB(a,e[0]);}if(!BV(a,
2))return ALd(b,c);if(BV(a,64)){f=new Sr;Lk(f,b,c);return f;}f=new PM;Lk(f,b,c);return f;}
function Ma(a,b){var c,d,e,f,g,h,i;if(Em(a.e)&&!HN(a.e)&&If(a.e.f)){if(BV(a,128)){c=Xa(a);if(!CR(a.e)){d=a.e;e=d.S;if(!(e==(-536870871)&&!(b instanceof EI))&&e!=(-536870788)&&!Em(d))c=JO(a,b,c);}}else if(!Lq(a.e)&&!QF(a.e)){f=new Lr;O(f);while(!CR(a.e)&&Em(a.e)&&!Lq(a.e)&&!QF(a.e)){if(!(!HN(a.e)&&!a.e.f)&&!(!HN(a.e)&&If(a.e.f))){g=a.e.f;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Y(a.e);if(!JG(e))Bv(f,e&65535);else GQ(f,Fv(e));}if(!BV(a,2)){c=new NW;C4(c);c.bO
=N(f);e=f.F;c.bg=e;c.hD=AED(e);c.it=AED(c.bg);h=0;while(h<(c.bg-1|0)){NC(c.hD,L(c.bO,h),(c.bg-h|0)-1|0);NC(c.it,L(c.bO,(c.bg-h|0)-1|0),(c.bg-h|0)-1|0);h=h+1|0;}}else if(BV(a,64))c=ALa(f);else{c=new KS;C4(c);c.fh=N(f);c.bg=f.F;}}else c=JO(a,b,Sq(a,b));}else{d=a.e;if(d.S!=(-536870871))c=JO(a,b,Sq(a,b));else{if(b instanceof EI)J(BU(B(23),d.bh,Lp(d)));c=FK(b);}}a:{if(!CR(a.e)){e=a.e.S;if(!(e==(-536870871)&&!(b instanceof EI))&&e!=(-536870788)){f=Ma(a,b);if(c instanceof CD&&!(c instanceof Er)&&!(c instanceof Cv)
&&!(c instanceof DZ)){i=c;if(!f.bm(i.z)){c=new RA;Ed(c,i.z,i.d,i.fx);c.z.E(c);}}if((f.fE()&65535)!=43)c.E(f);else c.E(f.z);break a;}}if(c===null)return null;c.E(b);}if((c.fE()&65535)!=43)return c;return c.z;}
function JO(a,b,c){var d,e,f,g,h;d=a.e;e=d.S;if(c!==null&&!(c instanceof BK)){switch(e){case -2147483606:Y(d);d=new S5;CO(d,c,b,e);JV();c.E(ANX);return d;case -2147483605:Y(d);d=new MA;CO(d,c,b,(-2147483606));JV();c.E(ANX);return d;case -2147483585:Y(d);d=new Mh;CO(d,c,b,(-536870849));JV();c.E(ANX);return d;case -2147483525:f=new KN;d=Ew(d);g=a.dq+1|0;a.dq=g;Hl(f,d,c,b,(-536870849),g);JV();c.E(ANX);return f;case -1073741782:case -1073741781:Y(d);d=new NS;CO(d,c,b,e);c.E(d);return d;case -1073741761:Y(d);d=new Na;CO(d,
c,b,(-536870849));c.E(b);return d;case -1073741701:h=new Qu;d=Ew(d);e=a.dq+1|0;a.dq=e;Hl(h,d,c,b,(-536870849),e);c.E(h);return h;case -536870870:case -536870869:Y(d);if(c.fE()!=(-2147483602)){d=new Cv;CO(d,c,b,e);}else if(BV(a,32)){d=new NT;CO(d,c,b,e);}else{d=new Lx;f=Ml(a.cu);CO(d,c,b,e);d.hL=f;}c.E(d);return d;case -536870849:Y(d);d=new E1;CO(d,c,b,(-536870849));c.E(b);return d;case -536870789:h=new Ex;d=Ew(d);e=a.dq+1|0;a.dq=e;Hl(h,d,c,b,(-536870849),e);c.E(h);return h;default:}return c;}f=null;if(c!==null)f
=c;switch(e){case -2147483606:case -2147483605:Y(d);d=new S7;Ed(d,f,b,e);f.d=d;return d;case -2147483585:Y(d);c=new Rw;Ed(c,f,b,(-2147483585));return c;case -2147483525:c=new L9;Oe(c,Ew(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Y(d);d=new M9;Ed(d,f,b,e);f.d=d;return d;case -1073741761:Y(d);c=new PW;Ed(c,f,b,(-1073741761));return c;case -1073741701:c=new Ny;Oe(c,Ew(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Y(d);d=AKx(f,b,e);f.d=d;return d;case -536870849:Y(d);c=new DZ;Ed(c,
f,b,(-536870849));return c;case -536870789:return AJH(Ew(d),f,b,(-536870789));default:}return c;}
function Sq(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof EI;while(true){a:{e=a.e;f=e.S;if((f&(-2147418113))==(-2147483608)){Y(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.cu=g;else{if(f!=(-1073741784))g=a.cu;c=SJ(a,f,g,b);e=a.e;if(e.S!=(-536870871))J(BU(B(23),e.bh,e.cg));Y(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Y(e);c
=AHd(0);break a;case -2147483577:Y(e);c=new Lv;BC(c);break a;case -2147483558:Y(e);c=new Sd;h=a.ba+1|0;a.ba=h;Xx(c,h);break a;case -2147483550:Y(e);c=AHd(1);break a;case -2147483526:Y(e);c=new RV;BC(c);break a;case -536870876:Y(e);a.ba=a.ba+1|0;if(BV(a,8)){if(BV(a,1)){c=AJU(a.ba);break a;}c=AJf(a.ba);break a;}if(BV(a,1)){c=AJ_(a.ba);break a;}c=AKI(a.ba);break a;case -536870866:Y(e);if(BV(a,32)){c=AK2();break a;}c=AKD(Ml(a.cu));break a;case -536870821:Y(e);i=0;c=a.e;if(c.S==(-536870818)){i=1;Y(c);}c=IE(a,E8(a,
i));c.E(b);e=a.e;if(e.S!=(-536870819))J(BU(B(23),e.bh,e.cg));LS(e,1);Y(a.e);break a;case -536870818:Y(e);a.ba=a.ba+1|0;if(!BV(a,8)){c=new Im;BC(c);break a;}c=new KY;e=Ml(a.cu);BC(c);c.mq=e;break a;case 0:j=e.dz;if(j!==null)c=IE(a,j);else{if(CR(e)){c=FK(b);break a;}c=Ux(f&65535);}Y(a.e);break a;default:break b;}Y(e);c=new Im;BC(c);break a;}h=(f&2147483647)-48|0;if(a.eD<h)J(BU(B(23),EA(e),Lp(a.e)));Y(e);a.ba=a.ba+1|0;c=!BV(a,2)?AJm(h,a.ba):BV(a,64)?AJV(h,a.ba):AK9(h,a.ba);a.hs.data[h].hr=1;a.kf=1;break a;}if(f
>=0&&!FM(e)){c=SB(a,f);Y(a.e);}else if(f==(-536870788))c=FK(b);else{if(f!=(-536870871)){b=new G6;c=!FM(a.e)?Sc(f&65535):a.e.dz.bz();e=a.e;Hv(b,c,e.bh,e.cg);J(b);}if(d){b=new G6;e=a.e;Hv(b,B(23),e.bh,e.cg);J(b);}c=FK(b);}}}if(f!=(-16777176))break;}return c;}
function E8(a,b){var c,d,e,f,g,h,i,j,$$je;c=AHB(BV(a,2),BV(a,64));DR(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(CR(a.e))break a;h=a.e;b=h.S;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cc(c,d);d=Y(a.e);h=a.e;if(h.S!=(-536870874)){d=38;break d;}if(h.f==(-536870821)){Y(h);e=1;d=(-1);break d;}Y(h);if(g){c=E8(a,0);break d;}if(a.e.S==(-536870819))break d;R1(c,E8(a,0));break d;case -536870867:if(!g){b=h.f;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Y(h);h=a.e;i=h.S;if(FM(h))break c;if
(i<0){j=a.e.f;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(If(i))break e;i=i&65535;break e;}catch($$e){$$je=DH($$e);if($$je instanceof Dr){break b;}else{throw $$e;}}}try{BI(c,d,i);}catch($$e){$$je=DH($$e);if($$je instanceof Dr){break b;}else{throw $$e;}}Y(a.e);d=(-1);break d;}}if(d>=0)Cc(c,d);d=45;Y(a.e);break d;case -536870821:if(d>=0){Cc(c,d);d=(-1);}Y(a.e);j=0;h=a.e;if(h.S==(-536870818)){Y(h);j=1;}if(!e)Tg(c,E8(a,j));else R1(c,E8(a,j));e=0;Y(a.e);break d;case -536870819:if(d>=0)Cc(c,d);d=
93;Y(a.e);break d;case -536870818:if(d>=0)Cc(c,d);d=94;Y(a.e);break d;case 0:if(d>=0)Cc(c,d);h=a.e.dz;if(h===null)d=0;else{Yi(c,h);d=(-1);}Y(a.e);break d;default:}if(d>=0)Cc(c,d);d=Y(a.e);}g=0;}J(BU(B(23),HV(a),a.e.cg));}J(BU(B(23),HV(a),a.e.cg));}if(!f){if(d>=0)Cc(c,d);return c;}J(BU(B(23),HV(a),a.e.cg-1|0));}
function SB(a,b){var c,d,e;c=JG(b);if(BV(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AAc(b&65535);}if(BV(a,64)&&b>128){if(c){d=new Kf;C4(d);d.bg=2;d.l8=FC(FB(b));return d;}if(L1(b))return AEJ(b&65535);if(!Or(b))return AFY(b&65535);return ACM(b&65535);}}if(!c){if(L1(b))return AEJ(b&65535);if(!Or(b))return Ux(b&65535);return ACM(b&65535);}d=new De;C4(d);d.bg=2;d.ei=b;e=(Fv(b)).data;d.gW=e[0];d.f4=e[1];return d;}
function IE(a,b){var c,d,e;if(!V2(b)){if(!b.B){if(b.e9())return ACp(b);return AHe(b);}if(!b.e9())return ADi(b);c=new Hn;P$(c,b);return c;}c=TJ(b);d=new Kw;BC(d);d.lm=c;d.pH=c.P;if(!b.B){if(b.e9())return WH(ACp(Gc(b)),d);return WH(AHe(Gc(b)),d);}if(!b.e9())return WH(ADi(Gc(b)),d);c=new M4;e=new Hn;P$(e,Gc(b));X5(c,e,d);return c;}
function Gd(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function BV(a,b){return (a.cu&b)!=b?0:1;}
function Bs(){var a=this;C.call(a);a.d=null;a.bH=0;a.kS=null;a.fx=0;}
var ALJ=0;function BC(a){var b,c;b=new Ez;c=ALJ;ALJ=c+1|0;HY(b,c);a.kS=JI(b);}
function ID(a,b){var c,d;c=new Ez;d=ALJ;ALJ=d+1|0;HY(c,d);a.kS=JI(c);a.d=b;}
function Gg(a,b,c,d){var e;e=d.o;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Gp(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AAA(a,b){a.fx=b;}
function ZW(a){return a.fx;}
function AGO(a){return a.d;}
function AHs(a,b){a.d=b;}
function AHr(a,b){return 1;}
function AIi(a){return null;}
function Hi(a){var b;a.bH=1;b=a.d;if(b!==null){if(!b.bH){b=b.d3();if(b!==null){a.d.bH=1;a.d=b;}a.d.c8();}else if(b instanceof Fy&&b.c_.hr)a.d=b.d;}}
function Ya(){ALJ=1;}
function Lt(){C.call(this);this.mL=null;}
function AGh(a,b){Qe(a.mL,b);}
function Cu(){var a=this;Bs.call(a);a.hr=0;a.cx=0;}
var ANX=null;function JV(){JV=Bl(Cu);ABw();}
function AKE(a){var b=new Cu();EC(b,a);return b;}
function EC(a,b){JV();BC(a);a.cx=b;}
function Zo(a,b,c,d){var e,f;e=GU(d,a.cx);HI(d,a.cx,b);f=a.d.c(b,c,d);if(f<0)HI(d,a.cx,e);return f;}
function AD2(a){return a.cx;}
function ZM(a,b){return 0;}
function ABw(){var b;b=new Ls;BC(b);ANX=b;}
function FI(){var a=this;C.call(a);a.O=null;a.ev=0;a.dn=0;a.oo=0;a.hN=0;a.S=0;a.f=0;a.mN=0;a.dz=null;a.dk=null;a.m=0;a.fJ=0;a.cg=0;a.fg=0;a.bh=null;}
var ANY=null;var ANV=null;var ANW=0;function LS(a,b){if(b>0&&b<3)a.dn=b;if(b==1){a.f=a.S;a.dk=a.dz;a.m=a.fg;a.fg=a.cg;Ep(a);}}
function FM(a){return a.dz===null?0:1;}
function HN(a){return a.dk===null?0:1;}
function Y(a){Ep(a);return a.hN;}
function Ew(a){var b;b=a.dz;Ep(a);return b;}
function Ep(a){var b,c,d,e,f,g,h,$$je;a.hN=a.S;a.S=a.f;a.dz=a.dk;a.cg=a.fg;a.fg=a.m;while(true){b=0;c=a.m>=a.O.data.length?0:Jm(a);a.f=c;a.dk=null;if(a.dn==4){if(c!=92)return;c=a.m;d=a.O.data;c=c>=d.length?0:d[BJ(a)];a.f=c;switch(c){case 69:break;default:a.f=92;a.m=a.fJ;return;}a.dn=a.oo;a.f=a.m>(a.O.data.length-2|0)?0:Jm(a);}a:{c=a.f;if(c!=92){e=a.dn;if(e==1)switch(c){case 36:a.f=(-536870876);break a;case 40:if(a.O.data[a.m]!=63){a.f=(-2147483608);break a;}BJ(a);c=a.O.data[a.m];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.f=(-134217688);BJ(a);break b;default:J(BU(B(23),EA(a),a.m));}a.f=(-67108824);BJ(a);}else{switch(c){case 33:break;case 60:BJ(a);c=a.O.data[a.m];e=1;break b;case 61:a.f=(-536870872);BJ(a);break b;case 62:a.f=(-33554392);BJ(a);break b;default:f=Yb(a);a.f=f;if(f<256){a.ev=f;f=f<<16;a.f=f;a.f=(-1073741784)|f;break b;}f=f&255;a.f=f;a.ev=f;f=f<<16;a.f=f;a.f=(-16777176)|f;break b;}a.f=(-268435416);BJ(a);}}if(!e)break;}break a;case 41:a.f=(-536870871);break a;case 42:case 43:case 63:e=a.m;d
=a.O.data;switch(e>=d.length?42:d[e]){case 43:a.f=c|(-2147483648);BJ(a);break a;case 63:a.f=c|(-1073741824);BJ(a);break a;default:}a.f=c|(-536870912);break a;case 46:a.f=(-536870866);break a;case 91:a.f=(-536870821);LS(a,2);break a;case 93:if(e!=2)break a;a.f=(-536870819);break a;case 94:a.f=(-536870818);break a;case 123:a.dk=XP(a,c);break a;case 124:a.f=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.f=(-536870874);break a;case 45:a.f=(-536870867);break a;case 91:a.f=(-536870821);break a;case 93:a.f
=(-536870819);break a;case 94:a.f=(-536870818);break a;default:}}else{c=a.m>=(a.O.data.length-2|0)?(-1):Jm(a);c:{a.f=c;switch(c){case -1:J(BU(B(23),EA(a),a.m));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.f
=Wr(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.dn!=1)break a;a.f=(-2147483648)|c;break a;case 65:a.f=(-2147483583);break a;case 66:a.f=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(BU(B(23),EA(a),a.m));case 68:case 83:case 87:case 100:case 115:case 119:a.dk=Ob(HR(a.O,
a.fJ,1),0);a.f=0;break a;case 71:a.f=(-2147483577);break a;case 80:case 112:break c;case 81:a.oo=a.dn;a.dn=4;b=1;break a;case 90:a.f=(-2147483558);break a;case 97:a.f=7;break a;case 98:a.f=(-2147483550);break a;case 99:c=a.m;d=a.O.data;if(c>=(d.length-2|0))J(BU(B(23),EA(a),a.m));a.f=d[BJ(a)]&31;break a;case 101:a.f=27;break a;case 102:a.f=12;break a;case 110:a.f=10;break a;case 114:a.f=13;break a;case 116:a.f=9;break a;case 117:a.f=MD(a,4);break a;case 120:a.f=MD(a,2);break a;case 122:a.f=(-2147483526);break a;default:}break a;}g
=Wb(a);h=0;if(a.f==80)h=1;try{a.dk=Ob(g,h);}catch($$e){$$je=DH($$e);if($$je instanceof Hr){J(BU(B(23),EA(a),a.m));}else{throw $$e;}}a.f=0;}}if(b)continue;else break;}}
function Wb(a){var b,c,d,e,f,g;b=new M;Eq(b,10);c=a.m;d=a.O;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=HR(d,BJ(a),1);f=new M;O(f);G(G(f,B(312)),b);return N(f);}BJ(a);c=0;a:{while(true){g=a.m;d=a.O.data;if(g>=(d.length-2|0))break;c=d[BJ(a)];if(c==125)break a;Bv(b,c);}}if(c!=125)J(BU(B(23),a.bh,a.m));}if(!b.F)J(BU(B(23),a.bh,a.m));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(312)),f);return N(b);}b:{c:{if(I(f)>3){if(Iy(f,B(312)))break c;if(Iy(f,B(313)))break c;}break b;}f=Dj(f,2);}return f;}
function XP(a,b){var c,d,e,f,g,$$je;c=new M;Eq(c,4);d=(-1);e=2147483647;a:{while(true){f=a.m;g=a.O.data;if(f>=g.length)break a;b=g[BJ(a)];if(b==125)break a;if(b==44&&d<0)try{d=HE(Dd(c),10);XT(c,0,TV(c));continue;}catch($$e){$$je=DH($$e);if($$je instanceof C2){break;}else{throw $$e;}}Bv(c,b&65535);}J(BU(B(23),a.bh,a.m));}if(b!=125)J(BU(B(23),a.bh,a.m));if(c.F>0)b:{try{e=HE(Dd(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=DH($$e);if($$je instanceof C2){}else{throw $$e;}}J(BU(B(23),a.bh,a.m));}else if(d<
0)J(BU(B(23),a.bh,a.m));if((d|e|(e-d|0))<0)J(BU(B(23),a.bh,a.m));b=a.m;g=a.O.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.f=(-2147483525);BJ(a);break c;case 63:a.f=(-1073741701);BJ(a);break c;default:}a.f=(-536870789);}c=new KE;c.dl=d;c.dh=e;return c;}
function EA(a){return a.bh;}
function CR(a){return !a.S&&!a.f&&a.m==a.mN&&!FM(a)?1:0;}
function If(b){return b<0?0:1;}
function Em(a){return !CR(a)&&!FM(a)&&If(a.S)?1:0;}
function Lq(a){var b;b=a.S;return b<=56319&&b>=55296?1:0;}
function QF(a){var b;b=a.S;return b<=57343&&b>=56320?1:0;}
function Or(b){return b<=56319&&b>=55296?1:0;}
function L1(b){return b<=57343&&b>=56320?1:0;}
function MD(a,b){var c,d,e,f,$$je;c=new M;Eq(c,b);d=a.O.data.length-2|0;e=0;while(true){f=BB(e,b);if(f>=0)break;if(a.m>=d)break;Bv(c,a.O.data[BJ(a)]);e=e+1|0;}if(!f)a:{try{b=HE(Dd(c),16);}catch($$e){$$je=DH($$e);if($$je instanceof C2){break a;}else{throw $$e;}}return b;}J(BU(B(23),a.bh,a.m));}
function Wr(a){var b,c,d,e,f,g;b=3;c=1;d=a.O.data;e=d.length-2|0;f=Qq(d[a.m],8);switch(f){case -1:break;default:if(f>3)b=2;BJ(a);a:{while(true){if(c>=b)break a;g=a.m;if(g>=e)break a;g=Qq(a.O.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BJ(a);c=c+1|0;}}return f;}J(BU(B(23),a.bh,a.m));}
function Yb(a){var b,c,d,e;b=1;c=a.ev;a:while(true){d=a.m;e=a.O.data;if(d>=e.length)J(BU(B(23),a.bh,d));b:{c:{switch(e[d]){case 41:BJ(a);return c|256;case 45:if(!b)J(BU(B(23),a.bh,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BJ(a);}BJ(a);return c;}
function BJ(a){var b,c,d,e,f;b=a.m;a.fJ=b;if(!(a.ev&4))a.m=b+1|0;else{c=a.O.data.length-2|0;a.m=b+1|0;a:while(true){d=a.m;if(d<c&&Nv(a.O.data[d])){a.m=a.m+1|0;continue;}d=a.m;if(d>=c)break;e=a.O.data;if(e[d]!=35)break;a.m=d+1|0;while(true){f=a.m;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.m=f+1|0;}}}return a.fJ;}
function XH(b){return ANY.vg(b);}
function Jm(a){var b,c,d,e;b=a.O.data[BJ(a)];if(Cn(b)){c=a.fJ+1|0;d=a.O.data;if(c<d.length){e=d[c];if(CG(e)){BJ(a);return DS(b,e);}}}return b;}
function Lp(a){return a.cg;}
function G6(){var a=this;BE.call(a);a.re=null;a.qT=null;a.l1=0;}
function BU(a,b,c){var d=new G6();Hv(d,a,b,c);return d;}
function Hv(a,b,c,d){V(a);a.l1=(-1);a.re=b;a.qT=c;a.l1=d;}
var N2=F(Cu);
function Y3(a,b,c,d){var e;e=a.cx;By(d,e,b-CS(d,e)|0);return a.d.c(b,c,d);}
function AGp(a,b){return 0;}
var SE=F(Cu);
function AAy(a,b,c,d){return b;}
var ME=F(Cu);
function ZV(a,b,c,d){if(CS(d,a.cx)!=b)b=(-1);return b;}
function OP(){Cu.call(this);this.j8=0;}
function Y$(a,b,c,d){var e;e=a.cx;By(d,e,b-CS(d,e)|0);a.j8=b;return b;}
function AFi(a,b){return 0;}
var EI=F(Cu);
function AHF(a,b,c,d){if(d.gL!=1&&b!=d.o)return (-1);d.gj=1;HI(d,0,b);return b;}
function BK(){Bs.call(this);this.bg=0;}
function C4(a){BC(a);a.bg=1;}
function AII(a,b,c,d){var e;if((b+a.bs()|0)>d.o){d.cq=1;return (-1);}e=a.Z(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function AG4(a){return a.bg;}
function AC1(a,b){return 1;}
var Xw=F(BK);
function FK(a){var b=new Xw();AEa(b,a);return b;}
function AEa(a,b){ID(a,b);a.bg=1;a.fx=1;a.bg=0;}
function AGI(a,b,c){return 0;}
function ABC(a,b,c,d){var e,f,g;e=d.o;f=d.b4;while(true){g=BB(b,e);if(g>0)return (-1);if(g<0&&CG(L(c,b))&&b>f&&Cn(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AAq(a,b,c,d,e){var f,g;f=e.o;g=e.b4;while(true){if(c<b)return (-1);if(c<f&&CG(L(d,c))&&c>g&&Cn(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function Y7(a,b){return 0;}
function BH(){var a=this;Bs.call(a);a.bf=null;a.c_=null;a.K=0;}
function AJ4(a,b){var c=new BH();EJ(c,a,b);return c;}
function EJ(a,b,c){BC(a);a.bf=b;a.c_=c;a.K=c.cx;}
function ACb(a,b,c,d){var e,f,g,h;if(a.bf===null)return (-1);e=EL(d,a.K);C3(d,a.K,b);f=a.bf.l;g=0;while(true){if(g>=f){C3(d,a.K,e);return (-1);}h=(BS(a.bf,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AFc(a,b){a.c_.d=b;}
function ADE(a,b){var c;a:{c=a.bf;if(c!==null){c=BW(c);while(true){if(!B7(c))break a;if(!(B1(c)).bm(b))continue;else return 1;}}}return 0;}
function AFM(a,b){return GU(b,a.K)>=0&&EL(b,a.K)==GU(b,a.K)?0:1;}
function AAn(a){var b,c,d,e,f,g,h,i;a.bH=1;b=a.c_;if(b!==null&&!b.bH)Hi(b);a:{b=a.bf;if(b!==null){c=b.l;d=0;while(true){if(d>=c)break a;b=BS(a.bf,d);e=b.d3();if(e===null)e=b;else{b.bH=1;FR(a.bf,d);f=a.bf;Mq(f,d);Hw(f,f.l+1|0);g=f.l;h=g;while(h>d){i=f.bP.data;i[h]=i[h-1|0];h=h+(-1)|0;}f.bP.data[d]=e;f.l=g+1|0;f.cK=f.cK+1|0;}if(!e.bH)e.c8();d=d+1|0;}}}if(a.d!==null)Hi(a);}
var G$=F(BH);
function AEZ(a,b,c,d){var e,f,g,h;e=CS(d,a.K);By(d,a.K,b);f=a.bf.l;g=0;while(true){if(g>=f){By(d,a.K,e);return (-1);}h=(BS(a.bf,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AF6(a,b){return !CS(b,a.K)?0:1;}
var Da=F(G$);
function AAU(a,b,c,d){var e,f,g;e=CS(d,a.K);By(d,a.K,b);f=a.bf.l;g=0;while(g<f){if((BS(a.bf,g)).c(b,c,d)>=0)return a.d.c(a.c_.j8,c,d);g=g+1|0;}By(d,a.K,e);return (-1);}
function AFS(a,b){a.d=b;}
var Ko=F(Da);
function AE7(a,b,c,d){var e,f;e=a.bf.l;f=0;while(f<e){if((BS(a.bf,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AHw(a,b){return 0;}
var Rh=F(Da);
function ZI(a,b,c,d){var e,f;e=a.bf.l;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((BS(a.bf,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AG8(a,b){return 0;}
var Nx=F(Da);
function AAl(a,b,c,d){var e,f,g,h;e=a.bf.l;f=d.gl?0:d.b4;a:{g=a.d.c(b,c,d);if(g>=0){By(d,a.K,b);h=0;while(true){if(h>=e)break a;if((BS(a.bf,h)).bK(f,b,c,d)>=0){By(d,a.K,(-1));return g;}h=h+1|0;}}}return (-1);}
function AI1(a,b){return 0;}
var PA=F(Da);
function YK(a,b,c,d){var e,f;e=a.bf.l;By(d,a.K,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((BS(a.bf,f)).bK(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AGf(a,b){return 0;}
function Fy(){BH.call(this);this.b8=null;}
function AKs(a,b){var c=new Fy();Um(c,a,b);return c;}
function Um(a,b,c){BC(a);a.b8=b;a.c_=c;a.K=c.cx;}
function YZ(a,b,c,d){var e,f;e=EL(d,a.K);C3(d,a.K,b);f=a.b8.c(b,c,d);if(f>=0)return f;C3(d,a.K,e);return (-1);}
function ADS(a,b,c,d){var e;e=a.b8.bJ(b,c,d);if(e>=0)C3(d,a.K,e);return e;}
function AGt(a,b,c,d,e){var f;f=a.b8.bK(b,c,d,e);if(f>=0)C3(e,a.K,f);return f;}
function ADA(a,b){return a.b8.bm(b);}
function AFg(a){var b;b=new KI;Um(b,a.b8,a.c_);a.d=b;return b;}
function AIl(a){var b;a.bH=1;b=a.c_;if(b!==null&&!b.bH)Hi(b);b=a.b8;if(b!==null&&!b.bH){b=b.d3();if(b!==null){a.b8.bH=1;a.b8=b;}a.b8.c8();}}
var FJ=F();
function R(){var a=this;FJ.call(a);a.P=0;a.bG=0;a.A=null;a.gR=null;a.hh=null;a.B=0;}
var ANZ=null;function Bh(a){var b;b=new R_;b.q=BQ(64);a.A=b;}
function ZK(a){return null;}
function Zg(a){return a.A;}
function V2(a){var b,c,d,e,f;if(!a.bG)b=F1(a.A,0)>=2048?0:1;else{a:{c=a.A;b=0;d=c.Y;if(b<d){e=c.q.data;f=(e[0]^(-1))>>>0;if(f)b=GO(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+GO(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function ACo(a){return a.B;}
function AG0(a){return a;}
function TJ(a){var b,c;if(a.hh===null){b=a.dy();c=new Rz;c.rz=a;c.ko=b;Bh(c);a.hh=c;DR(c,a.bG);}return a.hh;}
function Gc(a){var b,c;if(a.gR===null){b=a.dy();c=new Rx;c.rh=a;c.n3=b;c.oy=a;Bh(c);a.gR=c;DR(c,a.P);a.gR.B=a.B;}return a.gR;}
function AIh(a){return 0;}
function DR(a,b){var c;c=a.P;if(c^b){a.P=c?0:1;a.bG=a.bG?0:1;}if(!a.B)a.B=1;return a;}
function ABE(a){return a.P;}
function GM(b,c){var d,e;if(b.cm()!==null&&c.cm()!==null){b=b.cm();c=c.cm();d=Ba(b.q.data.length,c.q.data.length);e=0;a:{while(e<d){if(b.q.data[e]&c.q.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Ob(b,c){var d,e,f;d=0;while(true){e=AN0.data;if(d>=e.length){f=new Hr;Bb(f,B(23));f.rO=B(23);f.rB=b;J(f);}e=e[d].data;if(BM(b,e[0]))break;d=d+1|0;}return W5(e[1],c);}
function Up(){ANZ=new FT;}
function Ua(){var a=this;R.call(a);a.iv=0;a.j7=0;a.eE=0;a.h7=0;a.cJ=0;a.dV=0;a.u=null;a.bb=null;}
function CT(){var a=new Ua();AIR(a);return a;}
function AHB(a,b){var c=new Ua();AAz(c,a,b);return c;}
function AIR(a){Bh(a);a.u=AI2();}
function AAz(a,b,c){Bh(a);a.u=AI2();a.iv=b;a.j7=c;}
function Cc(a,b){a:{if(a.iv){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.cJ){J2(a.u,Gd(b&65535));break a;}Jh(a.u,Gd(b&65535));break a;}if(a.j7&&b>128){a.eE=1;b=FC(FB(b));}}}if(!(!Or(b)&&!L1(b))){if(a.h7)J2(a.A,b-55296|0);else Jh(a.A,b-55296|0);}if(a.cJ)J2(a.u,b);else Jh(a.u,b);if(!a.B&&JG(b))a.B=1;return a;}
function Yi(a,b){var c,d,e;if(!a.B&&b.B)a.B=1;if(a.h7){if(!b.bG)E2(a.A,b.dy());else CM(a.A,b.dy());}else if(!b.bG)EY(a.A,b.dy());else{EF(a.A,b.dy());CM(a.A,b.dy());a.bG=a.bG?0:1;a.h7=1;}if(!a.dV&&b.cm()!==null){if(a.cJ){if(!b.P)E2(a.u,b.cm());else CM(a.u,b.cm());}else if(!b.P)EY(a.u,b.cm());else{EF(a.u,b.cm());CM(a.u,b.cm());a.P=a.P?0:1;a.cJ=1;}}else{c=a.P;d=a.bb;if(d!==null){if(!c){e=new LL;e.pY=a;e.oV=c;e.ol=d;e.oc=b;Bh(e);a.bb=e;}else{e=new LM;e.rU=a;e.ml=c;e.ma=d;e.lM=b;Bh(e);a.bb=e;}}else{if(c&&!a.cJ&&
JK(a.u)){d=new LI;d.qS=a;d.mh=b;Bh(d);a.bb=d;}else if(!c){d=new LG;d.hR=a;d.g6=c;d.kN=b;Bh(d);a.bb=d;}else{d=new LH;d.iG=a;d.hb=c;d.oh=b;Bh(d);a.bb=d;}a.dV=1;}}return a;}
function BI(a,b,c){var d,e,f,g;if(b>c){d=new BE;V(d);J(d);}a:{b:{if(!a.iv){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cc(a,b);b=b+1|0;}}if(!a.cJ)Gu(a.u,b,c+1|0);else{d=a.u;c=c+1|0;if(b>c){d=new Bp;V(d);J(d);}e=d.Y;if(b<e){e=Ba(e,c);f=b/32|0;c=e/32|0;if(f==c){g=d.q.data;g[f]=g[f]&(GH(d,b)|Gn(d,e));}else{g=d.q.data;g[f]=g[f]&GH(d,b);f=f+1|0;while(f<c){d.q.data[f]=0;f=f+1|0;}if(e&31){g=d.q.data;g[c]=g[c]&Gn(d,e);}}FY(d);}}}return a;}
function Tg(a,b){var c,d,e;if(!a.B&&b.B)a.B=1;if(b.eE)a.eE=1;c=a.bG;if(!(c^b.bG)){if(!c)EY(a.A,b.A);else CM(a.A,b.A);}else if(c)E2(a.A,b.A);else{EF(a.A,b.A);CM(a.A,b.A);a.bG=1;}if(!a.dV&&Cy(b)!==null){c=a.P;if(!(c^b.P)){if(!c)EY(a.u,Cy(b));else CM(a.u,Cy(b));}else if(c)E2(a.u,Cy(b));else{EF(a.u,Cy(b));CM(a.u,Cy(b));a.P=1;}}else{c=a.P;d=a.bb;if(d!==null){if(!c){e=new LB;e.pJ=a;e.nM=c;e.og=d;e.oL=b;Bh(e);a.bb=e;}else{e=new Me;e.p7=a;e.oI=c;e.jR=d;e.j$=b;Bh(e);a.bb=e;}}else{if(!a.cJ&&JK(a.u)){if(!c){d=new LJ;d.rZ
=a;d.lC=b;Bh(d);a.bb=d;}else{d=new LK;d.qa=a;d.ot=b;Bh(d);a.bb=d;}}else if(!c){d=new LN;d.nO=a;d.mx=b;d.md=c;Bh(d);a.bb=d;}else{d=new LO;d.mQ=a;d.m5=b;d.ni=c;Bh(d);a.bb=d;}a.dV=1;}}}
function R1(a,b){var c,d,e;if(!a.B&&b.B)a.B=1;if(b.eE)a.eE=1;c=a.bG;if(!(c^b.bG)){if(!c)CM(a.A,b.A);else EY(a.A,b.A);}else if(!c)E2(a.A,b.A);else{EF(a.A,b.A);CM(a.A,b.A);a.bG=0;}if(!a.dV&&Cy(b)!==null){c=a.P;if(!(c^b.P)){if(!c)CM(a.u,Cy(b));else EY(a.u,Cy(b));}else if(!c)E2(a.u,Cy(b));else{EF(a.u,Cy(b));CM(a.u,Cy(b));a.P=0;}}else{c=a.P;d=a.bb;if(d!==null){if(!c){e=new LD;e.pX=a;e.nQ=c;e.km=d;e.mi=b;Bh(e);a.bb=e;}else{e=new LE;e.qe=a;e.ns=c;e.jJ=d;e.nL=b;Bh(e);a.bb=e;}}else{if(!a.cJ&&JK(a.u)){if(!c){d=new Lz;d.qb
=a;d.ld=b;Bh(d);a.bb=d;}else{d=new LA;d.rT=a;d.lj=b;Bh(d);a.bb=d;}}else if(!c){d=new LF;d.pv=a;d.oR=b;d.m0=c;Bh(d);a.bb=d;}else{d=new Ly;d.mZ=a;d.nz=b;d.mn=c;Bh(d);a.bb=d;}a.dV=1;}}}
function CB(a,b){var c;c=a.bb;if(c!==null)return a.P^c.g(b);return a.P^C1(a.u,b);}
function Cy(a){if(!a.dV)return a.u;return null;}
function ABv(a){return a.A;}
function AHk(a){var b,c;if(a.bb!==null)return a;b=Cy(a);c=new LC;c.pI=a;c.f6=b;Bh(c);return DR(c,a.P);}
function AEr(a){var b,c,d;b=new M;O(b);c=F1(a.u,0);while(c>=0){GQ(b,Fv(c));Bv(b,124);c=F1(a.u,c+1|0);}d=b.F;if(d>0)Rj(b,d-1|0);return N(b);}
function ABI(a){return a.eE;}
function Hr(){var a=this;Bg.call(a);a.rO=null;a.rB=null;}
function Dq(){Bs.call(this);this.z=null;}
function CO(a,b,c,d){ID(a,c);a.z=b;a.fx=d;}
function AIQ(a){return a.z;}
function AGv(a,b){return !a.z.bm(b)&&!a.d.bm(b)?0:1;}
function AHC(a,b){return 1;}
function AD9(a){var b;a.bH=1;b=a.d;if(b!==null&&!b.bH){b=b.d3();if(b!==null){a.d.bH=1;a.d=b;}a.d.c8();}b=a.z;if(b!==null){if(!b.bH){b=b.d3();if(b!==null){a.z.bH=1;a.z=b;}a.z.c8();}else if(b instanceof Fy&&b.c_.hr)a.z=b.d;}}
function CD(){Dq.call(this);this.L=null;}
function AKx(a,b,c){var d=new CD();Ed(d,a,b,c);return d;}
function Ed(a,b,c,d){CO(a,b,c,d);a.L=b;}
function YM(a,b,c,d){var e,f;e=0;a:{while((b+a.L.bs()|0)<=d.o){f=a.L.Z(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.L.bs()|0;e=e+(-1)|0;}return f;}
function Er(){CD.call(this);this.gK=null;}
function AJH(a,b,c,d){var e=new Er();Oe(e,a,b,c,d);return e;}
function Oe(a,b,c,d,e){Ed(a,c,d,e);a.gK=b;}
function Zr(a,b,c,d){var e,f,g,h,i;e=a.gK;f=e.dl;g=e.dh;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.L.bs()|0)>d.o)break a;i=a.L.Z(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.L.bs()|0;h=h+(-1)|0;}return i;}if((b+a.L.bs()|0)>d.o){d.cq=1;return (-1);}i=a.L.Z(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Cv=F(Dq);
function YY(a,b,c,d){var e;if(!a.z.x(d))return a.d.c(b,c,d);e=a.z.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var DZ=F(CD);
function ADY(a,b,c,d){var e;e=a.z.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function AI3(a,b){a.d=b;a.z.E(b);}
var RA=F(CD);
function AIB(a,b,c,d){while((b+a.L.bs()|0)<=d.o&&a.L.Z(b,c)>0){b=b+a.L.bs()|0;}return a.d.c(b,c,d);}
function AEp(a,b,c,d){var e,f,g;e=a.d.bJ(b,c,d);if(e<0)return (-1);f=e-a.L.bs()|0;while(f>=b&&a.L.Z(f,c)>0){g=f-a.L.bs()|0;e=f;f=g;}return e;}
function U(){var a=this;C.call(a);a.iM=null;a.hO=null;}
function W5(a,b){if(!b&&a.iM===null)a.iM=a.t();else if(b&&a.hO===null)a.hO=DR(a.t(),1);if(b)return a.hO;return a.iM;}
var C2=F(BE);
function KE(){var a=this;FJ.call(a);a.dl=0;a.dh=0;}
function AEx(a){var b,c,d,e,f;b=a.dl;c=a.dh;d=c==2147483647?B(23):JI(XG(c));e=new M;O(e);Bv(e,123);f=S(e,b);Bv(f,44);Bv(G(f,d),125);return N(e);}
var Ls=F(Bs);
function ADk(a,b,c,d){return b;}
function AFb(a,b){return 0;}
function R_(){var a=this;C.call(a);a.q=null;a.Y=0;}
function AI2(){var a=new R_();Z6(a);return a;}
function Z6(a){a.q=BQ(0);}
function Jh(a,b){var c,d;c=b/32|0;if(b>=a.Y){GS(a,c+1|0);a.Y=b+1|0;}d=a.q.data;d[c]=d[c]|1<<(b%32|0);}
function Gu(a,b,c){var d,e,f,g,h;if(b>c){d=new Bp;V(d);J(d);}e=b/32|0;f=c/32|0;if(c>a.Y){GS(a,f+1|0);a.Y=c;}if(e==f){g=a.q.data;g[e]=g[e]|Gn(a,b)&GH(a,c);}else{g=a.q.data;g[e]=g[e]|Gn(a,b);h=e+1|0;while(h<f){a.q.data[h]=(-1);h=h+1|0;}if(c&31){g=a.q.data;g[f]=g[f]|GH(a,c);}}}
function Gn(a,b){return (-1)<<(b%32|0);}
function GH(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function J2(a,b){var c,d;c=b/32|0;d=a.q.data;if(c<d.length){d[c]=d[c]&Ia((-2),b%32|0);if(b==(a.Y-1|0))FY(a);}}
function C1(a,b){var c,d;c=b/32|0;d=a.q.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function F1(a,b){var c,d,e,f;c=a.Y;if(b>=c)return (-1);d=b/32|0;e=a.q.data;f=e[d]>>>(b%32|0);if(f)return GO(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+GO(e[f])|0;f=f+1|0;}return (-1);}
function GS(a,b){var c;c=a.q.data.length;if(c>=b)return;c=Bi((b*3|0)/2|0,(c*2|0)+1|0);a.q=X8(a.q,c);}
function FY(a){var b,c,d;b=(a.Y+31|0)/32|0;a.Y=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=K8(a.q.data[c]);if(d<32)break;c=c+(-1)|0;a.Y=a.Y-32|0;}a.Y=a.Y-d|0;}}
function CM(a,b){var c,d,e,f;c=Ba(a.q.data.length,b.q.data.length);d=0;while(d<c){e=a.q.data;e[d]=e[d]&b.q.data[d];d=d+1|0;}while(true){f=a.q.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.Y=Ba(a.Y,b.Y);FY(a);}
function E2(a,b){var c,d,e;c=Ba(a.q.data.length,b.q.data.length);d=0;while(d<c){e=a.q.data;e[d]=e[d]&(b.q.data[d]^(-1));d=d+1|0;}FY(a);}
function EY(a,b){var c,d,e;c=Bi(a.Y,b.Y);a.Y=c;GS(a,(c+31|0)/32|0);c=Ba(a.q.data.length,b.q.data.length);d=0;while(d<c){e=a.q.data;e[d]=e[d]|b.q.data[d];d=d+1|0;}}
function EF(a,b){var c,d,e;c=Bi(a.Y,b.Y);a.Y=c;GS(a,(c+31|0)/32|0);c=Ba(a.q.data.length,b.q.data.length);d=0;while(d<c){e=a.q.data;e[d]=e[d]^b.q.data[d];d=d+1|0;}FY(a);}
function JK(a){return a.Y?0:1;}
function Kw(){var a=this;BH.call(a);a.lm=null;a.pH=0;}
function M4(){var a=this;BH.call(a);a.i$=null;a.iH=null;}
function WH(a,b){var c=new M4();X5(c,a,b);return c;}
function X5(a,b,c){BC(a);a.i$=b;a.iH=c;}
function Zn(a,b,c,d){var e,f,g,h,i;e=a.i$.c(b,c,d);if(e<0)a:{f=a.iH;g=d.b4;e=d.o;h=b+1|0;e=BB(h,e);if(e>0){d.cq=1;e=(-1);}else{i=L(c,b);if(!f.lm.g(i))e=(-1);else{if(Cn(i)){if(e<0&&CG(L(c,h))){e=(-1);break a;}}else if(CG(i)&&b>g&&Cn(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AEW(a,b){a.d=b;a.iH.d=b;a.i$.E(b);}
function ZY(a,b){return 1;}
function ZJ(a,b){return 1;}
function C5(){var a=this;BH.call(a);a.cC=null;a.qL=0;}
function ADi(a){var b=new C5();P$(b,a);return b;}
function P$(a,b){BC(a);a.cC=b.gr();a.qL=b.P;}
function ABn(a,b,c,d){var e,f,g,h;e=d.o;if(b<e){f=b+1|0;g=L(c,b);if(a.g(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(F8(g,f)&&a.g(DS(g,f)))return a.d.c(b,c,d);}}return (-1);}
function ABT(a,b){return a.cC.g(b);}
function Zk(a,b){if(b instanceof De)return a.cC.g(b.ei);if(b instanceof DN)return a.cC.g(b.ck);if(b instanceof C5)return GM(a.cC,b.cC);if(!(b instanceof DC))return 1;return GM(a.cC,b.dH);}
function ADd(a){return a.cC;}
function AGV(a,b){a.d=b;}
function ABz(a,b){return 1;}
var Hn=F(C5);
function AC2(a,b){return a.cC.g(FC(FB(b)));}
function T6(){var a=this;BK.call(a);a.lX=null;a.qu=0;}
function ACp(a){var b=new T6();AEE(b,a);return b;}
function AEE(a,b){C4(a);a.lX=b.gr();a.qu=b.P;}
function ADl(a,b,c){return !a.lX.g(Ei(DY(L(c,b))))?(-1):1;}
function DC(){var a=this;BK.call(a);a.dH=null;a.q4=0;}
function AHe(a){var b=new DC();AFx(b,a);return b;}
function AFx(a,b){C4(a);a.dH=b.gr();a.q4=b.P;}
function J9(a,b,c){return !a.dH.g(L(c,b))?(-1):1;}
function AFe(a,b){if(b instanceof DN)return a.dH.g(b.ck);if(b instanceof DC)return GM(a.dH,b.dH);if(!(b instanceof C5)){if(!(b instanceof De))return 1;return 0;}return GM(a.dH,b.cC);}
function LR(){var a=this;BH.call(a);a.eY=null;a.i0=null;a.gI=0;}
function AHn(a,b){var c=new LR();Y0(c,a,b);return c;}
function Y0(a,b,c){BC(a);a.eY=b;a.gI=c;}
function ADX(a,b){a.d=b;}
function Nb(a){if(a.i0===null)a.i0=Eo(a.eY);return a.i0;}
function YC(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.o;f=BQ(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?Et([k,l]):Et([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.gI;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.eY.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.gI==3){k=f[0];m=a.eY.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.gI==2){b=f[0];m=a.eY.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function ZS(a,b){return b instanceof LR&&!BM(Nb(b),Nb(a))?0:1;}
function AHm(a,b){return 1;}
function DN(){BK.call(this);this.ck=0;}
function Ux(a){var b=new DN();AFz(b,a);return b;}
function AFz(a,b){C4(a);a.ck=b;}
function AC_(a){return 1;}
function ACl(a,b,c){return a.ck!=L(c,b)?(-1):1;}
function ABk(a,b,c,d){var e,f,g;if(!(c instanceof BA))return Gg(a,b,c,d);e=d.o;while(true){if(b>=e)return (-1);f=GL(c,a.ck,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function ADe(a,b,c,d,e){var f;if(!(d instanceof BA))return Gp(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=E6(d,a.ck,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AHh(a,b){if(b instanceof DN)return b.ck!=a.ck?0:1;if(!(b instanceof DC)){if(b instanceof C5)return b.g(a.ck);if(!(b instanceof De))return 1;return 0;}return J9(b,0,Sc(a.ck))<=0?0:1;}
function XV(){BK.call(this);this.jB=0;}
function AFY(a){var b=new XV();AEn(b,a);return b;}
function AEn(a,b){C4(a);a.jB=Ei(DY(b));}
function Yx(a,b,c){return a.jB!=Ei(DY(L(c,b)))?(-1):1;}
function Th(){var a=this;BK.call(a);a.oN=0;a.kk=0;}
function AAc(a){var b=new Th();AGc(b,a);return b;}
function AGc(a,b){C4(a);a.oN=b;a.kk=Gd(b);}
function YS(a,b,c){return a.oN!=L(c,b)&&a.kk!=L(c,b)?(-1):1;}
function Ey(){var a=this;BH.call(a);a.fq=0;a.hB=null;a.g$=null;a.g4=0;}
function ALd(a,b){var c=new Ey();Lk(c,a,b);return c;}
function Lk(a,b,c){BC(a);a.fq=1;a.g$=b;a.g4=c;}
function AIk(a,b){a.d=b;}
function AEY(a,b,c,d){var e,f,g,h,i,j,k,l;e=BQ(4);f=d.o;if(b>=f)return (-1);g=It(a,b,c,f);h=b+a.fq|0;i=XH(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;DJ(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=It(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(XH(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.fq|0;if(h>=f){b=k;break a;}g=It(a,h,c,f);b=k;}}}if(b!=a.g4)return (-1);i=e.data;g=0;while(true){if(g>=
b)return a.d.c(h,c,d);if(i[g]!=a.g$.data[g])break;g=g+1|0;}return (-1);}
function R0(a){var b,c;if(a.hB===null){b=new M;O(b);c=0;while(c<a.g4){GQ(b,Fv(a.g$.data[c]));c=c+1|0;}a.hB=N(b);}return a.hB;}
function It(a,b,c,d){var e,f,g;a.fq=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(F8(e,f)){g=BP(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Cn(g[0])&&CG(g[1])?DS(g[0],g[1]):g[0];a.fq=2;}}return e;}
function ADm(a,b){return b instanceof Ey&&!BM(R0(b),R0(a))?0:1;}
function AFV(a,b){return 1;}
var Sr=F(Ey);
var PM=F(Ey);
var S5=F(Cv);
function AAE(a,b,c,d){var e;while(true){e=a.z.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var MA=F(Cv);
function AEj(a,b,c,d){var e;e=a.z.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.z.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var E1=F(Cv);
function AGT(a,b,c,d){var e;if(!a.z.x(d))return a.d.c(b,c,d);e=a.z.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AHM(a,b){a.d=b;a.z.E(b);}
var Mh=F(E1);
function ADc(a,b,c,d){var e;e=a.z.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AEz(a,b){a.d=b;}
function Ex(){var a=this;Cv.call(a);a.es=null;a.cr=0;}
function AN1(a,b,c,d,e){var f=new Ex();Hl(f,a,b,c,d,e);return f;}
function Hl(a,b,c,d,e,f){CO(a,c,d,e);a.es=b;a.cr=f;}
function AIX(a,b,c,d){var e,f;e=KA(d,a.cr);if(!a.z.x(d))return a.d.c(b,c,d);if(e>=a.es.dh)return a.d.c(b,c,d);f=a.cr;e=e+1|0;DA(d,f,e);f=a.z.c(b,c,d);if(f>=0){DA(d,a.cr,0);return f;}f=a.cr;e=e+(-1)|0;DA(d,f,e);if(e>=a.es.dl)return a.d.c(b,c,d);DA(d,a.cr,0);return (-1);}
var KN=F(Ex);
function ACH(a,b,c,d){var e,f,g;e=0;f=a.es.dh;a:{while(true){g=a.z.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.es.dl)return (-1);return a.d.c(b,c,d);}
var NS=F(Cv);
function AIr(a,b,c,d){var e;if(!a.z.x(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.z.c(b,c,d);}
var Na=F(E1);
function ZZ(a,b,c,d){var e;if(!a.z.x(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.z.c(b,c,d);return e;}
var Qu=F(Ex);
function Zb(a,b,c,d){var e,f,g;e=KA(d,a.cr);if(!a.z.x(d))return a.d.c(b,c,d);f=a.es;if(e>=f.dh){DA(d,a.cr,0);return a.d.c(b,c,d);}if(e<f.dl){DA(d,a.cr,e+1|0);g=a.z.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){DA(d,a.cr,0);return g;}DA(d,a.cr,e+1|0);g=a.z.c(b,c,d);}return g;}
var NT=F(Dq);
function AIO(a,b,c,d){var e;e=d.o;if(e>b)return a.d.bK(b,e,c,d);return a.d.c(b,c,d);}
function AG2(a,b,c,d){var e;e=d.o;if(a.d.bK(b,e,c,d)>=0)return b;return (-1);}
function Lx(){Dq.call(this);this.hL=null;}
function AFh(a,b,c,d){var e,f;e=d.o;f=Qv(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.bK(b,e,c,d);return a.d.c(b,c,d);}
function YH(a,b,c,d){var e,f,g,h;e=d.o;f=a.d.bJ(b,c,d);if(f<0)return (-1);g=Qv(a,f,e,c);if(g>=0)e=g;g=Bi(f,a.d.bK(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.hL.fu(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Qv(a,b,c,d){while(true){if(b>=c)return (-1);if(a.hL.fu(L(d,b)))break;b=b+1|0;}return b;}
var D_=F();
var AN2=null;var AN3=null;function Ml(b){var c;if(!(b&1)){c=AN3;if(c!==null)return c;c=new QK;AN3=c;return c;}c=AN2;if(c!==null)return c;c=new QJ;AN2=c;return c;}
var S7=F(CD);
function Ze(a,b,c,d){var e;a:{while(true){if((b+a.L.bs()|0)>d.o)break a;e=a.L.Z(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Rw=F(DZ);
function AEi(a,b,c,d){var e;if((b+a.L.bs()|0)<=d.o){e=a.L.Z(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var L9=F(Er);
function AGx(a,b,c,d){var e,f,g,h,i;e=a.gK;f=e.dl;g=e.dh;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.L.bs()|0)>d.o)break a;i=a.L.Z(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.L.bs()|0)>d.o){d.cq=1;return (-1);}i=a.L.Z(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var M9=F(CD);
function AE$(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.L.bs()|0)<=d.o){e=a.L.Z(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var PW=F(DZ);
function Zj(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.z.c(b,c,d);}
var Ny=F(Er);
function AGL(a,b,c,d){var e,f,g,h,i,j;e=a.gK;f=e.dl;g=e.dh;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.L.bs()|0)<=d.o){i=a.L.Z(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.L.bs()|0)>d.o){d.cq=1;return (-1);}j=a.L.Z(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Im=F(Bs);
function ADD(a,b,c,d){if(b&&!(d.dW&&b==d.b4))return (-1);return a.d.c(b,c,d);}
function ACS(a,b){return 0;}
function UI(){Bs.call(this);this.on=0;}
function AHd(a){var b=new UI();AC6(b,a);return b;}
function AC6(a,b){BC(a);a.on=b;}
function ZG(a,b,c,d){var e,f,g;e=b<d.o?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.gl?0:d.b4;return (e!=32&&!Nc(a,e,b,g,c)?0:1)^(f!=32&&!Nc(a,f,b-1|0,g,c)?0:1)^a.on?(-1):a.d.c(b,c,d);}
function ZP(a,b){return 0;}
function Nc(a,b,c,d,e){var f;if(!HC(b)&&b!=95){a:{if(Ca(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(HC(f))return 0;if(Ca(f)!=6)return 1;}}return 1;}return 0;}
var Lv=F(Bs);
function AC5(a,b,c,d){if(b!=d.fB)return (-1);return a.d.c(b,c,d);}
function AIT(a,b){return 0;}
function Sd(){Bs.call(this);this.ex=0;}
function AKI(a){var b=new Sd();Xx(b,a);return b;}
function Xx(a,b){BC(a);a.ex=b;}
function AFE(a,b,c,d){var e,f,g;e=!d.dW?I(c):d.o;if(b>=e){By(d,a.ex,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){By(d,a.ex,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}By(d,a.ex,0);return a.d.c(b,c,d);}
function AAt(a,b){var c;c=!CS(b,a.ex)?0:1;By(b,a.ex,(-1));return c;}
var RV=F(Bs);
function AET(a,b,c,d){if(b<(d.gl?I(c):d.o))return (-1);d.cq=1;d.ro=1;return a.d.c(b,c,d);}
function Yv(a,b){return 0;}
function KY(){Bs.call(this);this.mq=null;}
function AAm(a,b,c,d){a:{if(b!=d.o){if(!b)break a;if(d.dW&&b==d.b4)break a;if(a.mq.nv(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AB6(a,b){return 0;}
var XM=F(BH);
function AK2(){var a=new XM();AEK(a);return a;}
function AEK(a){BC(a);}
function AIu(a,b,c,d){var e,f,g,h;e=d.o;f=b+1|0;if(f>e){d.cq=1;return (-1);}g=L(c,b);if(Cn(g)){h=b+2|0;if(h<=e&&F8(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function ZU(a,b){a.d=b;}
function AEF(a){return (-2147483602);}
function ZT(a,b){return 1;}
function T_(){BH.call(this);this.ie=null;}
function AKD(a){var b=new T_();AAr(b,a);return b;}
function AAr(a,b){BC(a);a.ie=b;}
function AEM(a,b,c,d){var e,f,g,h;e=d.o;f=b+1|0;if(f>e){d.cq=1;return (-1);}g=L(c,b);if(Cn(g)){b=b+2|0;if(b<=e){h=L(c,f);if(F8(g,h))return a.ie.fu(DS(g,h))?(-1):a.d.c(b,c,d);}}return a.ie.fu(g)?(-1):a.d.c(f,c,d);}
function AGn(a,b){a.d=b;}
function Yp(a){return (-2147483602);}
function AIF(a,b){return 1;}
function XF(){Bs.call(this);this.fi=0;}
function AJ_(a){var b=new XF();AB1(b,a);return b;}
function AB1(a,b){BC(a);a.fi=b;}
function ADp(a,b,c,d){var e;e=!d.dW?I(c):d.o;if(b>=e){By(d,a.fi,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){By(d,a.fi,1);return a.d.c(b+1|0,c,d);}return (-1);}
function ABZ(a,b){var c;c=!CS(b,a.fi)?0:1;By(b,a.fi,(-1));return c;}
function V4(){Bs.call(this);this.fp=0;}
function AJU(a){var b=new V4();ACq(b,a);return b;}
function ACq(a,b){BC(a);a.fp=b;}
function AER(a,b,c,d){if((!d.dW?I(c)-b|0:d.o-b|0)<=0){By(d,a.fp,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);By(d,a.fp,1);return a.d.c(b+1|0,c,d);}
function ABP(a,b){var c;c=!CS(b,a.fp)?0:1;By(b,a.fp,(-1));return c;}
function Tf(){Bs.call(this);this.ea=0;}
function AJf(a){var b=new Tf();AI0(b,a);return b;}
function AI0(a,b){BC(a);a.ea=b;}
function ACJ(a,b,c,d){var e,f,g;e=!d.dW?I(c)-b|0:d.o-b|0;if(!e){By(d,a.ea,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:By(d,a.ea,0);return a.d.c(b,c,d);case 13:if(g!=10){By(d,a.ea,0);return a.d.c(b,c,d);}By(d,a.ea,0);return a.d.c(b,c,d);default:}return (-1);}
function AAx(a,b){var c;c=!CS(b,a.ea)?0:1;By(b,a.ea,(-1));return c;}
function FU(){var a=this;BH.call(a);a.j4=0;a.eS=0;}
function AK9(a,b){var c=new FU();L0(c,a,b);return c;}
function L0(a,b,c){BC(a);a.j4=b;a.eS=c;}
function Zf(a,b,c,d){var e,f,g,h;e=Fd(a,d);if(e!==null&&(b+I(e)|0)<=d.o){f=0;while(true){if(f>=I(e)){By(d,a.eS,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&Gd(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AFQ(a,b){a.d=b;}
function Fd(a,b){var c,d;c=a.j4;d=EL(b,c);c=GU(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.ih)?Ci(b.ih,d,c):null;}
function AF8(a,b){var c;c=!CS(b,a.eS)?0:1;By(b,a.eS,(-1));return c;}
var XK=F(FU);
function AJm(a,b){var c=new XK();AHD(c,a,b);return c;}
function AHD(a,b,c){L0(a,b,c);}
function AAC(a,b,c,d){var e,f;e=Fd(a,d);if(e!==null&&(b+I(e)|0)<=d.o){f=!P9(c,e,b)?(-1):I(e);if(f<0)return (-1);By(d,a.eS,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AHt(a,b,c,d){var e,f;e=Fd(a,d);f=d.b4;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=UH(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function Y5(a,b,c,d,e){var f,g;f=Fd(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Ba(c,I(d)-I(f)|0);b:{c:while(true){if(g<0){g=(-1);break b;}c=0;while(true){if(c>=I(f))break c;if(L(d,g+c|0)!=L(f,c))break;c=c+1|0;}g=g+(-1)|0;}}if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AEc(a,b){return 1;}
var Vl=F(FU);
function AJV(a,b){var c=new Vl();ABX(c,a,b);return c;}
function ABX(a,b,c){L0(a,b,c);}
function ADM(a,b,c,d){var e,f;e=Fd(a,d);if(e!==null&&(b+I(e)|0)<=d.o){f=0;while(true){if(f>=I(e)){By(d,a.eS,I(e));return a.d.c(b+I(e)|0,c,d);}if(Ei(DY(L(e,f)))!=Ei(DY(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Lr=F(Fo);
function ABJ(a,b,c,d,e){KG(a,b,c,d,e);return a;}
function ZL(a,b,c,d){Sk(a,b,c,d);return a;}
function Z5(a,b){HH(a,b);}
function AG3(a,b,c){Sx(a,b,c);return a;}
function NW(){var a=this;BK.call(a);a.bO=null;a.hD=null;a.it=null;}
function AAS(a,b,c){return !Ik(a,c,b)?(-1):a.bg;}
function ZB(a,b,c,d){var e,f,g;e=d.o;while(true){if(b>e)return (-1);f=L(a.bO,a.bg-1|0);a:{while(true){g=a.bg;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&Ik(a,c,b))break;b=b+OE(a.hD,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bg|0,c,d)>=0)break;b=b+1|0;}return b;}
function AB4(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.bO,0);g=(I(d)-c|0)-a.bg|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&Ik(a,d,c))break;c=c-OE(a.it,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bg|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ACv(a,b){var c;if(b instanceof DN)return b.ck!=L(a.bO,0)?0:1;if(b instanceof DC)return J9(b,0,Ci(a.bO,0,1))<=0?0:1;if(!(b instanceof C5)){if(!(b instanceof De))return 1;return I(a.bO)>1&&b.ei==DS(L(a.bO,0),L(a.bO,1))?1:0;}a:{b:{b=b;if(!b.g(L(a.bO,0))){if(I(a.bO)<=1)break b;if(!b.g(DS(L(a.bO,0),L(a.bO,1))))break b;}c=1;break a;}c=0;}return c;}
function Ik(a,b,c){var d;d=0;while(d<a.bg){if(L(b,d+c|0)!=L(a.bO,d))return 0;d=d+1|0;}return 1;}
function Td(){BK.call(this);this.gn=null;}
function ALa(a){var b=new Td();AHi(b,a);return b;}
function AHi(a,b){var c,d,e;C4(a);c=new M;O(c);d=0;while(true){e=BB(d,b.F);if(e>=0){a.gn=N(c);a.bg=c.F;return;}if(d<0)break;if(e>=0)break;Bv(c,Ei(DY(b.s.data[d])));d=d+1|0;}b=new Bp;V(b);J(b);}
function ADU(a,b,c){var d;d=0;while(true){if(d>=I(a.gn))return I(a.gn);if(L(a.gn,d)!=Ei(DY(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function KS(){BK.call(this);this.fh=null;}
function AGA(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.fh))return I(a.fh);e=L(a.fh,d);f=b+d|0;if(e!=L(c,f)&&Gd(L(a.fh,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var FT=F();
var AN4=null;var AN5=null;var AN0=null;function UJ(){AN4=AKS();AN5=AJ3();AN0=H($rt_arraycls(C),[H(C,[B(314),AK$()]),H(C,[B(315),AJc()]),H(C,[B(316),AKP()]),H(C,[B(317),AKY()]),H(C,[B(318),AN5]),H(C,[B(319),AKc()]),H(C,[B(320),AJZ()]),H(C,[B(321),AJp()]),H(C,[B(322),AJl()]),H(C,[B(323),AJw()]),H(C,[B(324),AJJ()]),H(C,[B(325),AJu()]),H(C,[B(326),AKw()]),H(C,[B(327),AI8()]),H(C,[B(328),AKU()]),H(C,[B(329),AJI()]),H(C,[B(330),AKa()]),H(C,[B(331),AJG()]),H(C,[B(332),AKb()]),H(C,[B(333),AJz()]),H(C,[B(334),AK1()]),
H(C,[B(335),AJC()]),H(C,[B(336),AKh()]),H(C,[B(337),AKN()]),H(C,[B(338),AKJ()]),H(C,[B(339),AKZ()]),H(C,[B(340),AJy()]),H(C,[B(341),AKB()]),H(C,[B(342),AN4]),H(C,[B(343),AKl()]),H(C,[B(344),AJq()]),H(C,[B(345),AN4]),H(C,[B(346),AI7()]),H(C,[B(347),AN5]),H(C,[B(348),AJQ()]),H(C,[B(349),P(0,127)]),H(C,[B(350),P(128,255)]),H(C,[B(351),P(256,383)]),H(C,[B(352),P(384,591)]),H(C,[B(353),P(592,687)]),H(C,[B(354),P(688,767)]),H(C,[B(355),P(768,879)]),H(C,[B(356),P(880,1023)]),H(C,[B(357),P(1024,1279)]),H(C,[B(358),
P(1280,1327)]),H(C,[B(359),P(1328,1423)]),H(C,[B(360),P(1424,1535)]),H(C,[B(361),P(1536,1791)]),H(C,[B(362),P(1792,1871)]),H(C,[B(363),P(1872,1919)]),H(C,[B(364),P(1920,1983)]),H(C,[B(365),P(2304,2431)]),H(C,[B(366),P(2432,2559)]),H(C,[B(367),P(2560,2687)]),H(C,[B(368),P(2688,2815)]),H(C,[B(369),P(2816,2943)]),H(C,[B(370),P(2944,3071)]),H(C,[B(371),P(3072,3199)]),H(C,[B(372),P(3200,3327)]),H(C,[B(373),P(3328,3455)]),H(C,[B(374),P(3456,3583)]),H(C,[B(375),P(3584,3711)]),H(C,[B(376),P(3712,3839)]),H(C,[B(377),
P(3840,4095)]),H(C,[B(378),P(4096,4255)]),H(C,[B(379),P(4256,4351)]),H(C,[B(380),P(4352,4607)]),H(C,[B(381),P(4608,4991)]),H(C,[B(382),P(4992,5023)]),H(C,[B(383),P(5024,5119)]),H(C,[B(384),P(5120,5759)]),H(C,[B(385),P(5760,5791)]),H(C,[B(386),P(5792,5887)]),H(C,[B(387),P(5888,5919)]),H(C,[B(388),P(5920,5951)]),H(C,[B(389),P(5952,5983)]),H(C,[B(390),P(5984,6015)]),H(C,[B(391),P(6016,6143)]),H(C,[B(392),P(6144,6319)]),H(C,[B(393),P(6400,6479)]),H(C,[B(394),P(6480,6527)]),H(C,[B(395),P(6528,6623)]),H(C,[B(396),
P(6624,6655)]),H(C,[B(397),P(6656,6687)]),H(C,[B(398),P(7424,7551)]),H(C,[B(399),P(7552,7615)]),H(C,[B(400),P(7616,7679)]),H(C,[B(401),P(7680,7935)]),H(C,[B(402),P(7936,8191)]),H(C,[B(403),P(8192,8303)]),H(C,[B(404),P(8304,8351)]),H(C,[B(405),P(8352,8399)]),H(C,[B(406),P(8400,8447)]),H(C,[B(407),P(8448,8527)]),H(C,[B(408),P(8528,8591)]),H(C,[B(409),P(8592,8703)]),H(C,[B(410),P(8704,8959)]),H(C,[B(411),P(8960,9215)]),H(C,[B(412),P(9216,9279)]),H(C,[B(413),P(9280,9311)]),H(C,[B(414),P(9312,9471)]),H(C,[B(415),
P(9472,9599)]),H(C,[B(416),P(9600,9631)]),H(C,[B(417),P(9632,9727)]),H(C,[B(418),P(9728,9983)]),H(C,[B(419),P(9984,10175)]),H(C,[B(420),P(10176,10223)]),H(C,[B(421),P(10224,10239)]),H(C,[B(422),P(10240,10495)]),H(C,[B(423),P(10496,10623)]),H(C,[B(424),P(10624,10751)]),H(C,[B(425),P(10752,11007)]),H(C,[B(426),P(11008,11263)]),H(C,[B(427),P(11264,11359)]),H(C,[B(428),P(11392,11519)]),H(C,[B(429),P(11520,11567)]),H(C,[B(430),P(11568,11647)]),H(C,[B(431),P(11648,11743)]),H(C,[B(432),P(11776,11903)]),H(C,[B(433),
P(11904,12031)]),H(C,[B(434),P(12032,12255)]),H(C,[B(435),P(12272,12287)]),H(C,[B(436),P(12288,12351)]),H(C,[B(437),P(12352,12447)]),H(C,[B(438),P(12448,12543)]),H(C,[B(439),P(12544,12591)]),H(C,[B(440),P(12592,12687)]),H(C,[B(441),P(12688,12703)]),H(C,[B(442),P(12704,12735)]),H(C,[B(443),P(12736,12783)]),H(C,[B(444),P(12784,12799)]),H(C,[B(445),P(12800,13055)]),H(C,[B(446),P(13056,13311)]),H(C,[B(447),P(13312,19893)]),H(C,[B(448),P(19904,19967)]),H(C,[B(449),P(19968,40959)]),H(C,[B(450),P(40960,42127)]),H(C,
[B(451),P(42128,42191)]),H(C,[B(452),P(42752,42783)]),H(C,[B(453),P(43008,43055)]),H(C,[B(454),P(44032,55203)]),H(C,[B(455),P(55296,56191)]),H(C,[B(456),P(56192,56319)]),H(C,[B(457),P(56320,57343)]),H(C,[B(458),P(57344,63743)]),H(C,[B(459),P(63744,64255)]),H(C,[B(460),P(64256,64335)]),H(C,[B(461),P(64336,65023)]),H(C,[B(462),P(65024,65039)]),H(C,[B(463),P(65040,65055)]),H(C,[B(464),P(65056,65071)]),H(C,[B(465),P(65072,65103)]),H(C,[B(466),P(65104,65135)]),H(C,[B(467),P(65136,65279)]),H(C,[B(468),P(65280,65519)]),
H(C,[B(469),P(0,1114111)]),H(C,[B(470),AJv()]),H(C,[B(471),Bz(0,1)]),H(C,[B(472),G7(62,1)]),H(C,[B(473),Bz(1,1)]),H(C,[B(474),Bz(2,1)]),H(C,[B(475),Bz(3,0)]),H(C,[B(476),Bz(4,0)]),H(C,[B(477),Bz(5,1)]),H(C,[B(478),G7(448,1)]),H(C,[B(479),Bz(6,1)]),H(C,[B(480),Bz(7,0)]),H(C,[B(481),Bz(8,1)]),H(C,[B(482),G7(3584,1)]),H(C,[B(483),Bz(9,1)]),H(C,[B(484),Bz(10,1)]),H(C,[B(485),Bz(11,1)]),H(C,[B(486),G7(28672,0)]),H(C,[B(487),Bz(12,0)]),H(C,[B(488),Bz(13,0)]),H(C,[B(489),Bz(14,0)]),H(C,[B(490),AJW(983040,1,1)]),H(C,
[B(491),Bz(15,0)]),H(C,[B(492),Bz(16,1)]),H(C,[B(493),Bz(18,1)]),H(C,[B(494),AJ$(19,0,1)]),H(C,[B(495),G7(1643118592,1)]),H(C,[B(496),Bz(20,0)]),H(C,[B(497),Bz(21,0)]),H(C,[B(498),Bz(22,0)]),H(C,[B(499),Bz(23,0)]),H(C,[B(500),Bz(24,1)]),H(C,[B(501),G7(2113929216,1)]),H(C,[B(502),Bz(25,1)]),H(C,[B(503),Bz(26,0)]),H(C,[B(504),Bz(27,0)]),H(C,[B(505),Bz(28,1)]),H(C,[B(506),Bz(29,0)]),H(C,[B(507),Bz(30,0)])]);}
function Kf(){BK.call(this);this.l8=0;}
function AGG(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.l8!=FC(FB(DS(e,d)))?(-1):2;}
function IQ(){BH.call(this);this.eC=0;}
function AEJ(a){var b=new IQ();Z2(b,a);return b;}
function Z2(a,b){BC(a);a.eC=b;}
function AE5(a,b){a.d=b;}
function AAu(a,b,c,d){var e,f;e=b+1|0;if(e>d.o){d.cq=1;return (-1);}f=L(c,b);if(b>d.b4&&Cn(L(c,b-1|0)))return (-1);if(a.eC!=f)return (-1);return a.d.c(e,c,d);}
function ACt(a,b,c,d){var e,f,g,h;if(!(c instanceof BA))return Gg(a,b,c,d);e=d.b4;f=d.o;while(true){if(b>=f)return (-1);g=GL(c,a.eC,b);if(g<0)return (-1);if(g>e&&Cn(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AAZ(a,b,c,d,e){var f,g;if(!(d instanceof BA))return Gp(a,b,c,d,e);f=e.b4;a:{while(true){if(c<b)return (-1);g=E6(d,a.eC,c);if(g<0)break a;if(g<b)break a;if(g>f&&Cn(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function Y2(a,b){if(b instanceof DN)return 0;if(b instanceof DC)return 0;if(b instanceof C5)return 0;if(b instanceof De)return 0;if(b instanceof I4)return 0;if(!(b instanceof IQ))return 1;return b.eC!=a.eC?0:1;}
function AG$(a,b){return 1;}
function I4(){BH.call(this);this.eo=0;}
function ACM(a){var b=new I4();AEO(b,a);return b;}
function AEO(a,b){BC(a);a.eo=b;}
function Z4(a,b){a.d=b;}
function YL(a,b,c,d){var e,f,g,h;e=d.o;f=b+1|0;g=BB(f,e);if(g>0){d.cq=1;return (-1);}h=L(c,b);if(g<0&&CG(L(c,f)))return (-1);if(a.eo!=h)return (-1);return a.d.c(f,c,d);}
function AFm(a,b,c,d){var e,f;if(!(c instanceof BA))return Gg(a,b,c,d);e=d.o;while(true){if(b>=e)return (-1);f=GL(c,a.eo,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CG(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function AGy(a,b,c,d,e){var f,g;if(!(d instanceof BA))return Gp(a,b,c,d,e);f=e.o;a:{while(true){if(c<b)return (-1);g=E6(d,a.eo,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CG(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AAT(a,b){if(b instanceof DN)return 0;if(b instanceof DC)return 0;if(b instanceof C5)return 0;if(b instanceof De)return 0;if(b instanceof IQ)return 0;if(!(b instanceof I4))return 1;return b.eo!=a.eo?0:1;}
function AFu(a,b){return 1;}
function De(){var a=this;BK.call(a);a.gW=0;a.f4=0;a.ei=0;}
function AF9(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.gW==e&&a.f4==d?2:(-1);}
function AEs(a,b,c,d){var e,f;if(!(c instanceof BA))return Gg(a,b,c,d);e=d.o;while(b<e){b=GL(c,a.gW,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.f4==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function Z3(a,b,c,d,e){var f;if(!(d instanceof BA))return Gp(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=E6(d,a.f4,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.gW==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AFZ(a,b){if(b instanceof De)return b.ei!=a.ei?0:1;if(b instanceof C5)return b.g(a.ei);if(b instanceof DN)return 0;if(!(b instanceof DC))return 1;return 0;}
var QJ=F(D_);
function AAe(a,b){return b!=10?0:1;}
function AF3(a,b,c){return b!=10?0:1;}
var QK=F(D_);
function AGM(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AIc(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function WV(){var a=this;C.call(a);a.jo=null;a.ha=null;a.e6=0;a.ph=0;}
function AED(a){var b=new WV();AC4(b,a);return b;}
function AC4(a,b){var c,d;while(true){c=a.e6;if(b<c)break;a.e6=c<<1|1;}d=c<<1|1;a.e6=d;d=d+1|0;a.jo=BQ(d);a.ha=BQ(d);a.ph=b;}
function NC(a,b,c){var d,e,f,g;d=0;e=a.e6;f=b&e;while(true){g=a.jo.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.ha.data[f]=c;}
function OE(a,b){var c,d,e,f;c=a.e6;d=b&c;e=0;while(true){f=a.jo.data[d];if(!f)break;if(f==b)return a.ha.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.ph;}
var Tw=F();
var IN=F(U);
function AKS(){var a=new IN();ACI(a);return a;}
function ACI(a){}
function Vs(a){return Cc(BI(CT(),9,13),32);}
var HW=F(U);
function AJ3(){var a=new HW();AG7(a);return a;}
function AG7(a){}
function VZ(a){return BI(CT(),48,57);}
var WN=F(U);
function AK$(){var a=new WN();ACc(a);return a;}
function ACc(a){}
function AGo(a){return BI(CT(),97,122);}
var Xe=F(U);
function AJc(){var a=new Xe();AC$(a);return a;}
function AC$(a){}
function AHb(a){return BI(CT(),65,90);}
var Xg=F(U);
function AKP(){var a=new Xg();ZC(a);return a;}
function ZC(a){}
function ABo(a){return BI(CT(),0,127);}
var II=F(U);
function AKY(){var a=new II();AAF(a);return a;}
function AAF(a){}
function Uc(a){return BI(BI(CT(),97,122),65,90);}
var Je=F(II);
function AKc(){var a=new Je();ACO(a);return a;}
function ACO(a){}
function U4(a){return BI(Uc(a),48,57);}
var Yh=F(U);
function AJZ(){var a=new Yh();AEk(a);return a;}
function AEk(a){}
function ACr(a){return BI(BI(BI(CT(),33,64),91,96),123,126);}
var J4=F(Je);
function AJp(){var a=new J4();AFK(a);return a;}
function AFK(a){}
function Ta(a){return BI(BI(BI(U4(a),33,64),91,96),123,126);}
var VG=F(J4);
function AJl(){var a=new VG();AGZ(a);return a;}
function AGZ(a){}
function AD$(a){return Cc(Ta(a),32);}
var VV=F(U);
function AJw(){var a=new VV();AGB(a);return a;}
function AGB(a){}
function AAM(a){return Cc(Cc(CT(),32),9);}
var UB=F(U);
function AJJ(){var a=new UB();AH1(a);return a;}
function AH1(a){}
function AD6(a){return Cc(BI(CT(),0,31),127);}
var Ul=F(U);
function AJu(){var a=new Ul();ZO(a);return a;}
function ZO(a){}
function AIg(a){return BI(BI(BI(CT(),48,57),97,102),65,70);}
var Xk=F(U);
function AKw(){var a=new Xk();Zq(a);return a;}
function Zq(a){}
function AEC(a){var b;b=new OT;b.qK=a;Bh(b);b.B=1;return b;}
var Yo=F(U);
function AI8(){var a=new Yo();AF1(a);return a;}
function AF1(a){}
function YE(a){var b;b=new Ku;b.qU=a;Bh(b);b.B=1;return b;}
var WW=F(U);
function AKU(){var a=new WW();ZE(a);return a;}
function ZE(a){}
function ACN(a){var b;b=new N9;b.qr=a;Bh(b);return b;}
var WI=F(U);
function AJI(){var a=new WI();AD7(a);return a;}
function AD7(a){}
function AGa(a){var b;b=new N8;b.qc=a;Bh(b);return b;}
var XA=F(U);
function AKa(){var a=new XA();AAB(a);return a;}
function AAB(a){}
function AAJ(a){var b;b=new R3;b.ru=a;Bh(b);Gu(b.A,0,2048);b.B=1;return b;}
var TN=F(U);
function AJG(){var a=new TN();Z_(a);return a;}
function Z_(a){}
function AA6(a){var b;b=new L4;b.q6=a;Bh(b);b.B=1;return b;}
var Ts=F(U);
function AKb(){var a=new Ts();ADR(a);return a;}
function ADR(a){}
function AH9(a){var b;b=new Lo;b.rP=a;Bh(b);b.B=1;return b;}
var W0=F(U);
function AJz(){var a=new W0();AEl(a);return a;}
function AEl(a){}
function Yy(a){var b;b=new Nl;b.qM=a;Bh(b);return b;}
var W8=F(U);
function AK1(){var a=new W8();ACC(a);return a;}
function ACC(a){}
function ADr(a){var b;b=new Kl;b.pA=a;Bh(b);b.B=1;return b;}
var UY=F(U);
function AJC(){var a=new UY();Y6(a);return a;}
function Y6(a){}
function AA_(a){var b;b=new Ks;b.q9=a;Bh(b);b.B=1;return b;}
var VY=F(U);
function AKh(){var a=new VY();AAj(a);return a;}
function AAj(a){}
function AB8(a){var b;b=new Lb;b.rr=a;Bh(b);b.B=1;return b;}
var X2=F(U);
function AKN(){var a=new X2();ADx(a);return a;}
function ADx(a){}
function ADv(a){var b;b=new Mo;b.rG=a;Bh(b);b.B=1;return b;}
var W7=F(U);
function AKJ(){var a=new W7();AEw(a);return a;}
function AEw(a){}
function AHo(a){var b;b=new Mx;b.qt=a;Bh(b);return b;}
var Vj=F(U);
function AKZ(){var a=new Vj();AAa(a);return a;}
function AAa(a){}
function AFA(a){var b;b=new PI;b.rc=a;Bh(b);return b;}
var UX=F(U);
function AJy(){var a=new UX();AGb(a);return a;}
function AGb(a){}
function AEu(a){var b;b=new Oq;b.pF=a;Bh(b);b.B=1;return b;}
var Yl=F(U);
function AKB(){var a=new Yl();ACw(a);return a;}
function ACw(a){}
function AGi(a){var b;b=new KC;b.r0=a;Bh(b);b.B=1;return b;}
var Hx=F(U);
function AKl(){var a=new Hx();ABi(a);return a;}
function ABi(a){}
function VW(a){return Cc(BI(BI(BI(CT(),97,122),65,90),48,57),95);}
var XC=F(Hx);
function AJq(){var a=new XC();ACF(a);return a;}
function ACF(a){}
function AEm(a){var b;b=DR(VW(a),1);b.B=1;return b;}
var VL=F(IN);
function AI7(){var a=new VL();AHO(a);return a;}
function AHO(a){}
function Zy(a){var b;b=DR(Vs(a),1);b.B=1;return b;}
var UQ=F(HW);
function AJQ(){var a=new UQ();ADj(a);return a;}
function ADj(a){}
function ACi(a){var b;b=DR(VZ(a),1);b.B=1;return b;}
function Us(){var a=this;U.call(a);a.l2=0;a.mo=0;}
function P(a,b){var c=new Us();AH7(c,a,b);return c;}
function AH7(a,b,c){a.l2=b;a.mo=c;}
function ADH(a){return BI(CT(),a.l2,a.mo);}
var UL=F(U);
function AJv(){var a=new UL();AIn(a);return a;}
function AIn(a){}
function AHY(a){return BI(BI(CT(),65279,65279),65520,65533);}
function Vz(){var a=this;U.call(a);a.i3=0;a.g3=0;a.kU=0;}
function Bz(a,b){var c=new Vz();AAw(c,a,b);return c;}
function AJ$(a,b,c){var d=new Vz();AH8(d,a,b,c);return d;}
function AAw(a,b,c){a.g3=c;a.i3=b;}
function AH8(a,b,c,d){a.kU=d;a.g3=c;a.i3=b;}
function ABM(a){var b;b=AK6(a.i3);if(a.kU)Gu(b.A,0,2048);b.B=a.g3;return b;}
function VI(){var a=this;U.call(a);a.i2=0;a.hc=0;a.j9=0;}
function G7(a,b){var c=new VI();ABa(c,a,b);return c;}
function AJW(a,b,c){var d=new VI();YA(d,a,b,c);return d;}
function ABa(a,b,c){a.hc=c;a.i2=b;}
function YA(a,b,c,d){a.j9=d;a.hc=c;a.i2=b;}
function Yz(a){var b;b=new N4;Ws(b,a.i2);if(a.j9)Gu(b.A,0,2048);b.B=a.hc;return b;}
var Uv=F();
var T4=F();
function Vi(b){var c,d,e,f,g,h,i;c=AGs(DG(b));d=HP(c);e=BQ(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+HP(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=KM(c);h=h+1|0;}return e;}
function Iz(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function KZ(){var a=this;C.call(a);a.ll=0;a.mF=0;a.lv=null;}
function ABK(a,b,c){var d=new KZ();AGX(d,a,b,c);return d;}
function AGX(a,b,c,d){a.ll=b;a.mF=c;a.lv=d;}
function W3(){var a=this;C.call(a);a.kB=null;a.l7=0;}
function AGs(a){var b=new W3();AAV(b,a);return b;}
function AAV(a,b){a.kB=b;}
var Vh=F();
function HP(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.kB.data;f=b.l7;b.l7=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bd(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function KM(b){var c,d;c=HP(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var R6=F(0);
function T9(){C.call(this);this.xM=null;}
function Oz(){var a=this;C.call(a);a.qs=null;a.ly=null;}
function Oy(){C.call(this);this.pB=null;}
function Rz(){var a=this;R.call(a);a.ko=null;a.rz=null;}
function ABs(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.bG^C1(a.ko,c):0;}
function Rx(){var a=this;R.call(a);a.n3=null;a.oy=null;a.rh=null;}
function YW(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.bG^C1(a.n3,c):0;return a.oy.g(b)&&!d?1:0;}
function LC(){var a=this;R.call(a);a.f6=null;a.pI=null;}
function ADy(a,b){return a.P^C1(a.f6,b);}
function AB$(a){var b,c,d;b=new M;O(b);c=F1(a.f6,0);while(c>=0){GQ(b,Fv(c));Bv(b,124);c=F1(a.f6,c+1|0);}d=b.F;if(d>0)Rj(b,d-1|0);return N(b);}
function LI(){var a=this;R.call(a);a.mh=null;a.qS=null;}
function AF$(a,b){return a.mh.g(b);}
function LG(){var a=this;R.call(a);a.g6=0;a.kN=null;a.hR=null;}
function AGF(a,b){return !(a.g6^C1(a.hR.u,b))&&!(a.g6^a.hR.cJ^a.kN.g(b))?0:1;}
function LH(){var a=this;R.call(a);a.hb=0;a.oh=null;a.iG=null;}
function ADT(a,b){return !(a.hb^C1(a.iG.u,b))&&!(a.hb^a.iG.cJ^a.oh.g(b))?1:0;}
function LL(){var a=this;R.call(a);a.oV=0;a.ol=null;a.oc=null;a.pY=null;}
function AA9(a,b){return a.oV^(!a.ol.g(b)&&!a.oc.g(b)?0:1);}
function LM(){var a=this;R.call(a);a.ml=0;a.ma=null;a.lM=null;a.rU=null;}
function Yr(a,b){return a.ml^(!a.ma.g(b)&&!a.lM.g(b)?0:1)?0:1;}
function LJ(){var a=this;R.call(a);a.lC=null;a.rZ=null;}
function ACd(a,b){return CB(a.lC,b);}
function LK(){var a=this;R.call(a);a.ot=null;a.qa=null;}
function ADW(a,b){return CB(a.ot,b)?0:1;}
function LN(){var a=this;R.call(a);a.mx=null;a.md=0;a.nO=null;}
function AHx(a,b){return !CB(a.mx,b)&&!(a.md^C1(a.nO.u,b))?0:1;}
function LO(){var a=this;R.call(a);a.m5=null;a.ni=0;a.mQ=null;}
function AAH(a,b){return !CB(a.m5,b)&&!(a.ni^C1(a.mQ.u,b))?1:0;}
function LB(){var a=this;R.call(a);a.nM=0;a.og=null;a.oL=null;a.pJ=null;}
function AI6(a,b){return !(a.nM^a.og.g(b))&&!CB(a.oL,b)?0:1;}
function Me(){var a=this;R.call(a);a.oI=0;a.jR=null;a.j$=null;a.p7=null;}
function ACh(a,b){return !(a.oI^a.jR.g(b))&&!CB(a.j$,b)?1:0;}
function Lz(){var a=this;R.call(a);a.ld=null;a.qb=null;}
function AAG(a,b){return CB(a.ld,b);}
function LA(){var a=this;R.call(a);a.lj=null;a.rT=null;}
function ABW(a,b){return CB(a.lj,b)?0:1;}
function LF(){var a=this;R.call(a);a.oR=null;a.m0=0;a.pv=null;}
function AC8(a,b){return CB(a.oR,b)&&a.m0^C1(a.pv.u,b)?1:0;}
function Ly(){var a=this;R.call(a);a.nz=null;a.mn=0;a.mZ=null;}
function AHg(a,b){return CB(a.nz,b)&&a.mn^C1(a.mZ.u,b)?0:1;}
function LD(){var a=this;R.call(a);a.nQ=0;a.km=null;a.mi=null;a.pX=null;}
function ZN(a,b){return a.nQ^a.km.g(b)&&CB(a.mi,b)?1:0;}
function LE(){var a=this;R.call(a);a.ns=0;a.jJ=null;a.nL=null;a.qe=null;}
function AFs(a,b){return a.ns^a.jJ.g(b)&&CB(a.nL,b)?0:1;}
var Jz=F(0);
function Op(){var a=this;C.call(a);a.p3=null;a.oi=null;a.gi=null;a.bQ=null;a.f8=0;a.hJ=0;}
function Kp(a,b){var c,d,e;c=I(a.gi);if(b>=0&&b<=c){SC(a.bQ,null,(-1),(-1));d=a.bQ;d.gL=1;d.c4=b;c=d.fB;if(c<0)c=b;d.fB=c;b=a.oi.bJ(b,a.gi,d);if(b==(-1))a.bQ.cq=1;if(b>=0){d=a.bQ;if(d.gj){e=d.cD.data;if(e[0]==(-1)){c=d.c4;e[0]=c;e[1]=c;}d.fB=Hh(d);return 1;}}a.bQ.c4=(-1);return 0;}d=new Bp;Bb(d,C8(b));J(d);}
function X1(a){return L8(a.bQ,0);}
function UR(a){return Oa(a.bQ,0);}
var UN=F();
var ML=F(0);
function OV(){var a=this;C.call(a);a.mW=null;a.mV=0;a.mS=null;}
function J6(a,b){var c,d,e,f,g,h,i;c=a.mW;d=a.mV;e=a.mS;if(b<=d){f=c.by.r;g=new S1;g.kL=c;h=T(C,1);h.data[0]=e;CH(f,g,B(508),h);}else{g=c.by.r;i=new S0;i.l9=c;CH(g,i,B(509),H(C,[e,X8(AN6,1)]));f=c.by.r;g=new S2;g.ng=c;h=T(C,1);h.data[0]=e;CH(f,g,B(510),h);}}
var KI=F(Fy);
function ABO(a,b,c,d){var e,f,g;e=0;f=d.o;a:{while(true){if(b>f){b=e;break a;}g=EL(d,a.K);C3(d,a.K,b);e=a.b8.c(b,c,d);if(e>=0)break;C3(d,a.K,g);b=b+1|0;}}return b;}
function AIW(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=EL(e,a.K);C3(e,a.K,c);f=a.b8.c(c,d,e);if(f>=0)break;C3(e,a.K,g);c=c+(-1)|0;}}return c;}
function AAs(a){return null;}
function Q8(){C.call(this);this.kq=null;}
function AFD(a,b){var c,d,e,f;c=a.kq;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.ly;c=Bw();b=Ce(b);e=new M;O(e);G(G(e,B(511)),b);Bq(c,N(e));b=Bw();f=d.length;c=new M;O(c);S(G(c,B(512)),f);Bq(b,N(c));}
function Q9(){var a=this;C.call(a);a.n1=null;a.n2=null;}
function AEG(a,b){var c,d;c=a.n1;d=a.n2;b.arrayBuffer().then(Bc(c,"f"),Bc(d,"f"));}
function Ps(){var a=this;C.call(a);a.jq=null;a.jr=null;}
function ACm(a,b){var c;c=a.jq;J6(a.jr,HL(c,b.size));}
function Pv(){C.call(this);this.oS=null;}
function YQ(a,b){var c;c=a.oS;Bq(Q6(),$rt_str(b.message));J6(c,0);}
function QE(){var a=this;C.call(a);a.cD=null;a.gT=null;a.ib=null;a.ih=null;a.kP=0;a.gj=0;a.b4=0;a.o=0;a.c4=0;a.gl=0;a.dW=0;a.cq=0;a.ro=0;a.fB=0;a.gL=0;}
function By(a,b,c){a.gT.data[b]=c;}
function CS(a,b){return a.gT.data[b];}
function Hh(a){return Oa(a,0);}
function Oa(a,b){N3(a,b);return a.cD.data[(b*2|0)+1|0];}
function C3(a,b,c){a.cD.data[b*2|0]=c;}
function HI(a,b,c){a.cD.data[(b*2|0)+1|0]=c;}
function EL(a,b){return a.cD.data[b*2|0];}
function GU(a,b){return a.cD.data[(b*2|0)+1|0];}
function WQ(a){return L8(a,0);}
function L8(a,b){N3(a,b);return a.cD.data[b*2|0];}
function KA(a,b){return a.ib.data[b];}
function DA(a,b,c){a.ib.data[b]=c;}
function N3(a,b){var c;if(!a.gj){c=new DM;V(c);J(c);}if(b>=0&&b<a.kP)return;c=new Bp;Bb(c,C8(b));J(c);}
function SC(a,b,c,d){a.gj=0;a.gL=2;HK(a.cD,(-1));HK(a.gT,(-1));if(b!==null)a.ih=b;if(c>=0){a.b4=c;a.o=d;}a.c4=a.b4;}
function U8(a){return a.gL;}
function Tp(a){return a.gl;}
function Qi(){C.call(this);this.qj=null;}
function ADI(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function OT(){R.call(this);this.qK=null;}
function AHE(a,b){return Ca(b)!=2?0:1;}
function Ku(){R.call(this);this.qU=null;}
function Zt(a,b){return Ca(b)!=1?0:1;}
function N9(){R.call(this);this.qr=null;}
function Zi(a,b){return Nv(b);}
function N8(){R.call(this);this.qc=null;}
function ABL(a,b){return 0;}
function R3(){R.call(this);this.ru=null;}
function ACY(a,b){return !Ca(b)?0:1;}
function L4(){R.call(this);this.q6=null;}
function AHH(a,b){return Ca(b)!=9?0:1;}
function Lo(){R.call(this);this.rP=null;}
function AE0(a,b){return Fr(b);}
function Nl(){R.call(this);this.qM=null;}
function AGd(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Kl(){R.call(this);this.pA=null;}
function AID(a,b){a:{b:{switch(Ca(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Fr(b);}return b;}
function Ks(){R.call(this);this.q9=null;}
function AAY(a,b){a:{b:{switch(Ca(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Fr(b);}return b;}
function Lb(){R.call(this);this.rr=null;}
function AHU(a,b){a:{switch(Ca(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Mo(){R.call(this);this.rG=null;}
function AD4(a,b){return HC(b);}
function Mx(){R.call(this);this.qt=null;}
function AFO(a,b){return My(b);}
function PI(){R.call(this);this.rc=null;}
function AHy(a,b){return Ca(b)!=3?0:1;}
function Oq(){R.call(this);this.pF=null;}
function AIo(a,b){a:{b:{switch(Ca(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Fr(b);}return b;}
function KC(){R.call(this);this.r0=null;}
function AAK(a,b){a:{b:{switch(Ca(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Fr(b);}return b;}
function JP(){R.call(this);this.iy=0;}
function AK6(a){var b=new JP();Ws(b,a);return b;}
function Ws(a,b){Bh(a);a.iy=b;}
function AE3(a,b){return a.P^(a.iy!=Ca(b&65535)?0:1);}
var N4=F(JP);
function AGW(a,b){return a.P^(!(a.iy>>Ca(b&65535)&1)?0:1);}
function S0(){C.call(this);this.l9=null;}
function AAh(a,b){var c,d;c=a.l9;if(!c.fR){b=b.data;c.h=V6(DU(b[0]),EW(b[1]));c.fQ=1;d=Io(EQ(),c.dF);b=new M;O(b);G(Gr(G(b,B(513)),d),B(218));$rt_globals.console.info($rt_ustr(N(b)));}}
var Ou=F(0);
var AN6=null;function X7(){var b;b=BQ(1);b.data[0]=250;AN6=b;}
function S2(){C.call(this);this.ng=null;}
function AFt(a,b){var c,d,e,f,g,h,i;c=b.data;d=a.ng;e=(DU(c[2])).data[0];if(e!=1)Gj(d,b);else{d.fR=1;f=DU(c[0]);g=EW(c[1]);d.eO=e;d.h=WX(d.h,f,g,d.fQ);Fw(d.by.r,AM0);E9(d.by.r);h=Io(EQ(),d.dF);i=new M;O(i);G(Gr(G(i,B(514)),h),B(218));$rt_globals.console.info($rt_ustr(N(i)));Ms(d,e);}}
function S1(){C.call(this);this.kL=null;}
function AEP(a,b){Gj(a.kL,b);}
var TW=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker",6,"menu"]);
$rt_metadata([C,0,0,[],0,3,0,0,["bz",ALp(Z1)],NY,0,C,[],0,3,0,0,0,KL,0,C,[],3,3,0,0,0,Ki,0,C,[],3,3,0,0,0,RB,0,C,[KL,Ki],0,3,0,0,["bz",ALp(ADJ)],Ui,0,C,[],4,0,0,0,0,T5,0,C,[],4,3,0,0,0,CQ,0,C,[],3,3,0,0,0,Cq,0,C,[],3,3,0,0,0,G8,0,C,[],3,3,0,0,0,BA,"String",1,C,[CQ,Cq,G8],0,3,0,0,["bz",ALp(Z0),"eX",ALq(ABN)],Fz,0,C,[],0,3,0,0,0,D9,0,Fz,[],0,3,0,0,0,F3,0,D9,[],0,3,0,0,0,Vk,0,F3,[],0,3,0,0,0,Df,0,C,[CQ],1,3,0,0,0,Ez,0,Df,[Cq],0,3,0,0,0,Fo,0,C,[CQ,G8],0,0,0,0,["fI",ALq(HH),"bz",ALp(N)],Gt,0,C,[],3,3,0,0,0,M,0,Fo,
[Gt],0,3,0,0,["iK",ALt(ADo),"hX",ALs(AA5),"bz",ALp(Dd),"fI",ALq(ADt),"jc",ALr(ADQ)],Ej,0,F3,[],0,3,0,0,0,Wt,0,Ej,[],0,3,0,0,0,Vb,0,Ej,[],0,3,0,0,0,Dr,0,Fz,[],0,3,0,0,0,Bg,0,Dr,[],0,3,0,0,0,PG,0,C,[],3,3,0,0,0,CL,0,C,[],3,3,0,0,0,L2,0,C,[],3,0,0,0,0,GX,0,C,[PG,CL,L2],1,3,0,0,["f3",ALp(JR)],NR,0,GX,[],0,3,0,0,0,TA,0,C,[],0,3,0,0,0,XE,0,C,[],4,3,0,0,0,Be,0,C,[],3,3,0,0,0,PO,0,C,[Be],0,3,0,0,0,Bu,0,C,[],3,3,0,0,0,VR,0,C,[Bu],1,3,0,0,0,TF,0,C,[],3,3,0,0,0,Ue,0,C,[Bu],1,3,0,0,0,BL,0,C,[Bu],3,3,0,0,0,PP,0,C,[BL],0,
3,0,0,["T",ALq(Ys)],PN,0,C,[BL],0,3,0,0,["T",ALq(AHz)],W$,0,C,[],4,3,0,0,0,UT,0,C,[],0,3,0,0,0,Ym,0,C,[],4,3,0,0,0,Lc,0,C,[BL],0,3,0,0,["T",ALq(AFG)],Rb,0,C,[Bu],1,3,0,0,0,Jt,0,C,[],0,3,0,0,0,HS,0,C,[Bu],3,3,0,0,0,U6,0,C,[HS],1,3,0,0,["yI",ALq(AIJ),"yc",ALp(AAg)],Vw,0,C,[Bu],1,3,0,0,0]);
$rt_metadata([El,0,C,[],3,3,0,0,0,Lj,0,C,[El],0,3,0,0,0,CJ,0,C,[Cq],0,3,0,0,0,Kb,0,C,[Bu],3,3,0,0,0,Ow,0,C,[Kb],3,3,0,0,0,DK,0,C,[Bu],3,3,0,0,0,XD,0,C,[Ow,DK],3,3,0,0,0,FD,0,Bg,[],0,3,0,0,0,SX,0,C,[BL],0,3,0,0,["T",ALq(AF5)],Mn,0,C,[DK],3,3,0,0,0,NI,0,C,[DK],3,3,0,0,0,Nz,0,C,[DK],3,3,0,0,0,PB,0,C,[DK],3,3,0,0,0,Sm,0,C,[DK],3,3,0,0,0,Qr,0,C,[DK,Mn,NI,Nz,PB,Sm],3,3,0,0,0,LQ,0,C,[],3,3,0,0,0,TE,0,C,[Bu,Qr,LQ,HS],1,3,0,0,["w8",ALr(ADK),"yN",ALr(AD1),"sd",ALq(Zm),"v3",ALs(AEV),"uF",ALq(AHR),"uL",ALp(AAk),"tp",ALs(YN)],Bp,
0,Bg,[],0,3,0,0,0,F0,0,Bp,[],0,3,0,0,0,UE,0,C,[],0,3,0,0,0,LP,0,C,[],3,3,0,0,0,OH,0,C,[LP],0,3,0,0,0,CE,0,C,[],3,3,0,0,0,M8,0,C,[CE],0,3,0,0,0,Bm,0,C,[],3,3,0,0,0,U$,0,C,[Bm],0,3,0,0,0,NE,0,C,[Bu],3,3,0,0,0,Q4,0,C,[NE],0,3,0,0,["v5",ALq(ACL)],Q1,0,C,[Bm],0,3,0,0,0,Hk,0,C,[],1,3,0,0,0,MG,0,Hk,[],0,3,0,0,0,MZ,0,C,[Bu],3,3,0,0,0,Q2,0,C,[MZ],0,3,0,0,["o4",ALr(ABg)],XJ,0,C,[Bu],1,3,0,0,0,BX,0,C,[Bu],3,3,0,0,0,QZ,0,C,[BX],0,3,0,0,["bq",ALq(AFP)],IR,0,C,[],3,3,0,0,0,D1,0,C,[IR],1,3,0,0,0,DO,0,C,[],3,3,0,0,0,Sz,0,C,
[IR],3,3,0,0,0,KK,0,C,[Sz],3,3,0,0,0,Uf,0,D1,[DO,CQ,KK],0,3,0,0,0,Q0,0,C,[BL],0,3,0,0,["T",ALq(AGK)],Cs,0,C,[],3,3,0,0,["dw",ALq(AHA),"d4",ALq(AB5),"dC",ALt(ABY),"fn",ALs(Yq),"fG",ALq(ADG),"fF",ALr(AI5),"iB",ALp(ABd),"mj",ALp(AAO),"hZ",ALp(AEN)],Uy,0,C,[],0,3,0,0,0,I2,0,C,[],1,3,0,0,0,QT,0,I2,[],0,3,0,0,0,CX,0,C,[CL],1,3,0,0,0,Oi,0,C,[El],0,0,0,0,0,RG,0,C,[BX],0,3,0,0,["bq",ALq(AFl)]]);
$rt_metadata([RH,0,C,[BX],0,3,0,0,["bq",ALq(AFw)],RI,0,C,[BX],0,3,0,0,["bq",ALq(AEe)],RJ,0,C,[BX],0,3,0,0,["bq",ALq(ADL)],RK,0,C,[BX],0,3,0,0,["bq",ALq(AD5)],RL,0,C,[BX],0,3,0,0,["bq",ALq(AF0)],RM,0,C,[BX],0,3,0,0,["bq",ALq(ACx)],RN,0,C,[BX],0,3,0,0,["bq",ALq(AIP)],RO,0,C,[BX],0,3,0,0,["bq",ALq(ABU)],RP,0,C,[BX],0,3,0,0,["bq",ALq(AGQ)],SO,0,C,[BX],0,3,0,0,["bq",ALq(AIs)],SP,0,C,[BX],0,3,0,0,["bq",ALq(ADZ)],SQ,0,C,[BX],0,3,0,0,["bq",ALq(AEh)],SR,0,C,[BX],0,3,0,0,["bq",ALq(AFI)],SM,0,C,[BX],0,3,0,0,["bq",ALq(ACR)],SN,
0,C,[BX],0,3,0,0,["bq",ALq(AH2)],P3,0,C,[],3,3,0,0,0,Qc,0,C,[P3],0,3,0,0,0,Qb,0,C,[BX],0,3,0,0,["bq",ALq(ADh)],S_,0,C,[],0,3,0,0,0,M6,0,C,[CL],0,3,0,0,0,Br,0,C,[],0,3,0,0,["bz",ALp(Yu)],Xf,0,C,[],0,3,0,0,0,T2,0,C,[],3,3,0,0,0,MY,0,C,[],0,3,0,0,0,Jn,0,C,[],0,3,0,0,0,Dw,0,Jn,[],0,3,0,0,0,Rm,0,Dw,[],0,3,0,0,0,D0,0,Dw,[],0,3,0,0,0,Np,0,Dw,[],0,3,0,0,0,QB,0,D0,[],0,3,0,0,0,WA,0,D0,[],0,3,0,0,0,Ug,0,D0,[],0,3,0,0,0,N_,0,C,[Bu],3,3,0,0,0,Yk,0,C,[N_],3,3,0,0,0,NF,0,C,[CL],0,3,0,0,0,MX,0,C,[],0,3,0,0,0,Ch,0,C,[Cq,CQ],
1,3,0,0,["eX",ALq(ADn)],FL,0,Ch,[],12,3,0,Lu,0,I9,0,C,[],4,3,0,0,0,JS,0,C,[],3,3,0,0,0,Pc,0,C,[JS],3,3,0,0,0,Qm,0,C,[],3,3,0,0,0,Ft,0,C,[Pc,Qm],1,3,0,0,0,Hz,0,Ft,[],0,3,0,0,0,U_,0,Hz,[],0,3,0,0,0,Fh,0,Ft,[],1,3,0,0,0,I8,0,Fh,[],0,3,0,0,["ht",ALs(ADa)],Dl,0,Ch,[],12,3,0,AHL,0,Ht,0,C,[Cq],1,3,0,0,0,JX,0,Ht,[],0,3,0,0,0]);
$rt_metadata([Il,0,C,[],32,0,0,TD,0,Mf,0,C,[],0,3,0,0,0,FO,0,Ch,[],12,0,0,V5,0,Fn,0,Ch,[],12,0,0,V7,0,Q5,0,Dr,[],0,3,0,0,0,BE,0,Bg,[],0,3,0,0,0,W9,0,BE,[],0,3,0,0,0,Va,0,C,[Bu],4,3,0,0,0,JW,0,C,[Bu],3,3,0,0,0,ON,0,C,[JW],0,3,0,0,["T",ALq(AHc)],OO,0,C,[JW],0,3,0,0,["T",ALq(AAW)],Vt,0,C,[],4,3,0,0,0,TP,0,C,[],0,3,0,0,0,FS,0,C,[],1,3,0,0,0,Ok,0,C,[],3,3,0,0,0,IW,0,FS,[Cq,Gt,G8,Ok],1,3,0,0,0,HU,0,FS,[Cq],1,3,0,0,0,Gi,0,C,[],0,3,0,0,0,KP,0,CX,[],0,3,0,0,["c0",ALq(AHS),"cb",ALp(ADV),"cM",ALr(AFB)],X9,0,C,[],0,3,0,
0,0,VM,0,C,[Bu],1,3,0,0,0,H1,0,IW,[],1,0,0,0,0,Vv,0,H1,[],0,0,0,0,0,IK,0,C,[],1,3,0,0,0,Jq,0,C,[],0,3,0,0,0,TM,0,C,[],0,3,0,0,0,I7,0,C,[Bu],3,3,0,0,0,KX,0,C,[I7],0,3,0,0,["T",ALq(ABF)],KW,0,C,[I7],0,3,0,0,["T",ALq(AEU)],KV,0,C,[BL],0,3,0,0,["T",ALq(AFr)],KU,0,C,[BL],0,3,0,0,["T",ALq(AAo)],O8,0,C,[CE],0,3,0,0,["cQ",ALq(AE8)],O6,0,C,[CE],0,3,0,0,["cQ",ALq(Zu)],O5,0,C,[CE],0,3,0,0,["cQ",ALq(ACD)],O4,0,C,[CE],0,3,0,0,["cQ",ALq(ACz)],O3,0,C,[CE],0,3,0,0,["cQ",ALq(AC0)],O2,0,C,[CE],0,3,0,0,["cQ",ALq(ZF)],O1,0,C,[CE],
0,3,0,0,["cQ",ALq(AA1)],O0,0,C,[CE],0,3,0,0,["cQ",ALq(AFk)],OZ,0,C,[CE],0,3,0,0,["cQ",ALq(AIa)],FZ,0,C,[],0,3,0,0,0,L6,0,FZ,[],0,3,0,0,0,Xo,0,C,[],0,3,0,0,0,J_,0,FZ,[],0,3,0,0,0,P5,0,C,[Bu],3,3,0,0,0,Mv,0,C,[P5],0,3,0,0,["y_",ALq(AGJ)],O7,0,C,[Be],0,3,0,0,["j",ALq(QL)],R9,0,HU,[],0,0,0,0,0,Wn,0,C,[Bu],1,3,0,0,0,Ii,0,C,[],4,3,0,0,0]);
$rt_metadata([Rg,0,C,[],3,3,0,0,0,OM,0,C,[Rg],0,3,0,0,["bz",ALp(AAL)],Qh,0,C,[],3,3,0,0,0,IU,"JsFileHandle",5,C,[Qh],0,3,0,0,["bz",ALp(ADf)],IH,0,IK,[],1,3,0,0,0,Mu,0,IH,[],0,3,0,0,0,GT,0,Dr,[],0,3,0,0,0,TG,0,CX,[],0,3,0,0,["c0",ALq(YX),"cb",ALp(ABp),"cM",ALr(AIY)],Cr,0,CX,[],0,3,0,0,["c0",ALq(AIq),"cb",ALp(IG),"cM",ALr(Xi)],Ri,"ToolbarDemo",8,Cr,[Cs],0,3,0,0,["fn",ALs(Yq),"fF",ALr(AI5),"iB",ALp(ABd),"mj",ALp(AAO),"hZ",ALp(AEN),"cM",ALr(YG),"cb",ALp(ABG),"d4",ALq(AFX),"dC",ALt(AHG),"fG",ALq(ZX),"dw",ALq(ACn),
"c0",ALq(Z9)],Mj,0,CX,[],0,3,0,0,["c0",ALq(AFH),"cb",ALp(Za),"cM",ALr(Y9)],Nt,"SelectFileTest",6,Cr,[Cs],0,3,0,0,["d4",ALq(AB5),"dC",ALt(ABY),"fn",ALs(Yq),"fG",ALq(ADG),"fF",ALr(AI5),"iB",ALp(ABd),"mj",ALp(AAO),"hZ",ALp(AEN),"dw",ALq(AFF)],X3,"WorkerTest",7,Cr,[],0,3,0,0,0,R2,"RenderTexture",6,Cr,[],0,3,0,0,["c0",ALq(ADq),"cb",ALp(YR),"cM",ALr(AH$)],LY,0,CX,[],0,3,0,0,["cb",ALp(AIH),"cM",ALr(YT),"c0",ALq(AAN)],GV,"ClipboardTest",6,Cr,[Cs],0,3,0,0,["d4",ALq(AB5),"fn",ALs(Yq),"mj",ALp(AAO),"hZ",ALp(AEN),"dw",
ALq(ADB),"dC",ALt(ACG),"fF",ALr(AA0),"iB",ALp(AC7),"fG",ALq(YJ)],Is,0,Cr,[],0,3,0,0,["c0",ALq(AAv),"cb",ALp(ACK),"cM",ALr(AB_)],NL,"DemoEdit1",6,Is,[],0,3,0,0,0,Hf,0,C,[],3,3,0,0,0,J0,0,C,[Hf,CQ],0,3,0,0,0,Es,0,J0,[],0,0,0,0,0,XR,0,C,[],0,3,0,0,0,B8,0,C,[],0,3,0,0,0,C7,0,C,[],3,3,0,0,0,GY,0,C,[],0,3,0,0,0,GZ,0,GY,[],0,3,0,0,0,Vx,0,C,[],0,3,0,0,0,PL,0,C,[Cs],0,0,0,0,["iB",ALp(ABd),"mj",ALp(AAO),"d4",ALq(AFJ),"fn",ALs(ACQ),"dC",ALt(AH4),"dw",ALq(AES),"fG",ALq(AIf),"fF",ALr(Zx),"hZ",ALp(AGE)],Sl,0,B8,[],0,3,0,
0,0,Ur,0,C,[],0,3,0,0,0,Qf,0,C,[],3,3,0,0,0,TB,0,C,[],0,3,0,0,0,DE,0,C,[],3,3,0,0,0,O9,0,C,[Bm],0,3,0,0,["y",ALp(AHK)],O_,0,C,[Bm],0,3,0,0,["y",ALp(AF_)],ER,0,C,[],0,3,0,0,0,VT,0,C,[CL],0,3,0,0,0,TZ,0,C,[],3,3,0,0,0,Xb,0,C,[],3,3,0,0,0,RC,0,C,[Cs],0,0,0,0,["dw",ALq(AHA),"fG",ALq(ADG),"fF",ALr(AI5),"iB",ALp(ABd),"mj",ALp(AAO),"hZ",ALp(AEN),"fn",ALs(AAI),"dC",ALt(ABq),"d4",ALq(ABm)],VS,0,C,[],0,3,0,0,0,NP,0,C,[Be],0,3,0,0,["j",ALq(Y8)],NO,0,C,[Be],0,3,0,0,["j",ALq(AIL)],NN,0,C,[Be],0,3,0,0,["j",ALq(AA7)],NM,0,
C,[Be],0,3,0,0,["j",ALq(AEX)],MH,0,C,[Cs],0,3,0,0,["d4",ALq(AB5),"dC",ALt(ABY),"fn",ALs(Yq),"fG",ALq(ADG),"fF",ALr(AI5),"iB",ALp(ABd),"mj",ALp(AAO),"hZ",ALp(AEN),"dw",ALq(YF)],NK,0,C,[Be],0,3,0,0,["j",ALq(AEg)],NJ,0,C,[Be],0,3,0,0,["j",ALq(AFR)],PK,0,C,[Cs],0,0,0,0,["dw",ALq(AHA),"fn",ALs(Yq),"fG",ALq(ADG),"fF",ALr(AI5),"iB",ALp(ABd),"mj",ALp(AAO),"hZ",ALp(AEN),"d4",ALq(AHj),"dC",ALt(AFq)],Nr,0,C,[Cs],0,0,0,0,["dw",ALq(AHA),"fG",ALq(ADG),"fF",ALr(AI5),"iB",ALp(ABd),"mj",ALp(AAO),"hZ",ALp(AEN),"fn",ALs(Y1),"dC",
ALt(AGN),"d4",ALq(ZH)]]);
$rt_metadata([Wy,0,C,[],3,3,0,0,0,Wd,0,C,[],4,3,0,0,0,G3,0,Bg,[],0,3,0,0,0,LV,0,C,[Bu],3,3,0,0,0,Md,0,C,[LV],0,3,0,0,["o4",ALr(AB3)],LW,0,C,[Bu],3,3,0,0,0,Mb,0,C,[LW],0,3,0,0,["o4",ALr(ACU)],Uj,0,C,[],0,3,0,0,0,Tu,0,C,[Bu],3,3,0,0,0,HB,0,C,[CL],0,3,0,0,["f3",ALp(WG)],PF,0,C,[],0,3,0,0,0,Lf,0,C,[Qf],0,3,0,0,0,Rl,0,C,[],3,3,0,0,0,Ga,0,C,[Rl],3,3,0,0,0,Dn,0,C,[Ga],1,3,0,0,0,Kz,0,C,[Ga],3,3,0,0,0,E_,0,Dn,[Kz],1,3,0,0,0,GR,0,C,[],3,3,0,0,0,TT,0,E_,[DO,CQ,GR],0,3,0,0,["mY",ALq(BS),"kn",ALp(AE9)],Hc,0,C,[],3,3,0,0,
0,Gy,0,C,[],3,3,0,0,0,Si,0,C,[Gy],0,3,0,0,["ky",ALs(AGk)],Sj,0,C,[Gy],0,3,0,0,0,Sa,0,C,[],0,3,0,0,0,Xl,0,C,[],0,0,0,0,0,SZ,0,C,[Be],0,3,0,0,["j",ALq(AFT)],VX,0,C,[],0,3,0,0,0,Rv,0,C,[Be],0,3,0,0,["j",ALq(Zz)],J7,0,C,[],3,0,0,0,0,Vd,0,C,[J7,CL],0,3,0,0,0,Q_,0,C,[Cs],0,0,0,0,["mj",ALp(AGj),"hZ",ALp(AEy),"fn",ALs(ABQ),"dC",ALt(ABA),"fG",ALq(AIx),"d4",ALq(AGr),"dw",ALq(AAQ),"fF",ALr(AEd),"iB",ALp(Y_)],Tj,0,C,[],4,3,0,0,0,XW,0,C,[],0,3,0,0,0,Yd,0,C,[],0,3,0,0,0,MV,0,C,[],0,3,0,0,0,Cx,0,C,[Bu],1,3,0,0,0,Wi,0,Cx,[],
1,3,0,0,0,WY,0,Cx,[],1,3,0,0,0,Un,0,Cx,[],1,3,0,0,0,UG,0,Cx,[],1,3,0,0,0,Xm,0,Cx,[],1,3,0,0,0,QR,0,C,[Bm],0,3,0,0,["y",ALp(Zv)],QS,0,C,[Be],0,3,0,0,["j",ALq(AH6)],Mi,0,C,[],3,3,0,0,0,QQ,0,C,[Mi],0,3,0,0,0,OR,0,C,[Bm],0,3,0,0,["y",ALp(AHP)],Cp,0,C,[],0,3,0,0,0,B3,0,C,[],0,3,0,0,0,VK,0,D1,[DO,CQ],0,3,0,0,0,JJ,0,C,[],0,3,0,0,0]);
$rt_metadata([X0,0,C,[Cq],0,3,0,0,["eX",ALq(Z7)],IV,0,C,[],0,3,0,0,0,Tb,0,C,[],0,0,0,0,0,I_,0,C,[],0,3,0,0,0,Ef,0,C,[CL],0,0,0,0,0,Ru,0,C,[Be],0,3,0,0,["j",ALq(ADO)],Rr,0,C,[Be],0,3,0,0,["j",ALq(AHu)],Rq,0,C,[Bm],0,3,0,0,["y",ALp(Yt)],Rt,0,C,[Bm],0,3,0,0,["y",ALp(AIV)],Rs,0,C,[Bm],0,3,0,0,["y",ALp(ABR)],Rp,0,C,[Bm],0,3,0,0,["y",ALp(AF4)],EG,0,Ch,[],12,3,0,YU,0,DT,0,C,[],0,3,0,0,0,Ij,0,C,[Cq],0,0,0,0,0,FW,0,E_,[GR],1,0,0,0,0,SD,0,FW,[GR],0,0,0,0,["kn",ALp(ABy),"mY",ALq(AIm)],To,0,C,[],0,3,0,0,["bz",ALp(ACs)],Ky,
0,C,[El],0,3,0,0,["gU",ALr(AHI)],Kx,0,C,[El],0,3,0,0,["gU",ALr(AAR)],B6,0,Ch,[],12,3,0,Uk,0,Hy,0,C,[],0,3,0,0,0,L5,0,C,[Ga],3,3,0,0,0,D6,0,Dn,[L5],1,3,0,0,0,Ic,0,D6,[],1,0,0,0,0,QY,0,Ic,[],0,0,0,0,0,Jc,0,D1,[],1,0,0,0,0,QW,0,Jc,[],0,0,0,0,0,QX,0,FW,[],0,0,0,0,0,DP,0,C,[],3,3,0,0,0,QU,0,C,[DP],0,0,0,0,0,Mr,0,C,[DP],3,3,0,0,0,QV,0,C,[Mr],0,0,0,0,0,Px,0,C,[El],0,3,0,0,["gU",ALr(AEf)],Pw,0,C,[El],0,3,0,0,0,Lh,0,C,[Be],0,3,0,0,["j",ALq(AHW)],K2,0,C,[DP],0,0,0,0,0,U0,0,C,[],4,3,0,0,0,Rc,0,Dn,[],0,0,0,0,["gG",ALp(AGw)],U9,
0,C,[Bu],1,3,0,0,0,Xd,0,C,[],3,3,0,0,0,Iw,0,C,[Hf,DO],0,0,0,0,0,GG,0,Iw,[],0,0,0,0,0,On,0,C,[],3,3,0,0,0,Ra,0,C,[On],0,3,0,0,0,L$,0,C,[DP],0,0,0,0,["gZ",ALp(AAf),"fX",ALp(AEL)],KT,0,C,[CL],0,3,0,0,0,R8,0,C,[CL],0,3,0,0,0,E0,0,GT,[],0,3,0,0,0,Sf,0,D9,[],0,3,0,0,0,G1,0,Bg,[],0,3,0,0,0]);
$rt_metadata([JN,0,Df,[Cq],0,3,0,0,0,EK,0,C,[],0,0,0,0,0,H4,0,C,[],4,3,0,0,0,QP,0,C,[],0,3,0,0,0,S4,0,Bg,[],0,3,0,0,0,JF,0,C,[],1,3,0,0,0,Vn,0,Cx,[],1,3,0,0,0,PY,0,C,[],0,3,0,0,0,DM,0,Bg,[],0,3,0,0,0,Wv,0,D9,[],0,3,0,0,0,Nf,0,C,[Be],0,3,0,0,["j",ALq(AHQ)],M1,0,D6,[],0,0,0,0,0,Nk,0,C,[Be],0,3,0,0,["j",ALq(Zd)],Tr,0,C,[],0,3,0,0,0,In,0,JF,[],1,3,0,0,0,Pu,0,In,[],0,3,0,0,0,NZ,0,C,[Be],0,3,0,0,["j",ALq(AB9)],HZ,0,Df,[Cq],0,3,0,0,0,Jf,0,C,[],4,3,0,0,0,Oc,0,Df,[Cq],0,3,0,0,0,Fm,0,Bg,[],0,3,0,0,0,K7,0,C,[],0,3,0,0,
0,S8,0,C,[DP],0,0,0,0,0,Tt,0,C,[],1,3,0,0,0,R4,0,C,[],3,3,0,0,0,TO,0,C,[],0,3,0,0,0,Xy,0,C,[Cq],0,3,0,0,["eX",ALq(AFN)],WT,0,D6,[],0,0,0,0,0,Ha,0,Fm,[],0,3,0,0,0,Gs,0,Bg,[],0,3,0,0,0,Jx,0,Bg,[],0,3,0,0,0,Tc,0,C,[],0,3,0,0,0,Mg,0,Dn,[],0,0,0,0,["gG",ALp(ABh)],IC,0,Fh,[],0,3,0,0,["ht",ALs(ABB)],FQ,0,C,[],0,0,0,0,["gZ",ALp(KQ)],Qj,0,FQ,[DP],0,0,0,0,0,Nw,0,FQ,[DP],0,0,0,0,["fX",ALp(AGg)],St,0,C,[Be],0,3,0,0,["j",ALq(ACP)],Sw,0,C,[Be],0,3,0,0,["j",ALq(AIy)],Kc,0,C,[Bm],0,3,0,0,["y",ALp(AG6)],P6,0,C,[Bm],0,3,0,0,
["y",ALp(Zs)],PH,0,C,[Be],0,3,0,0,["j",ALq(AB2)],MU,0,C,[Be],0,3,0,0,["j",ALq(Z$)],JY,0,Bg,[],0,3,0,0,0,J8,0,C,[Be],0,3,0,0,["j",ALq(AIe)],KF,0,C,[Be],0,3,0,0,["j",ALq(ACe)],PZ,0,C,[Bm],0,3,0,0,["y",ALp(AHf)],M$,0,C,[Be],0,3,0,0,["j",ALq(AFj)],Q7,0,C,[Be],0,3,0,0,["j",ALq(AIN)],XS,0,C,[CE],0,3,0,0,0]);
$rt_metadata([XB,0,C,[],0,3,0,0,0,Qo,0,C,[Be],0,3,0,0,["j",ALq(ZA)],Sy,0,C,[Bm],0,3,0,0,["y",ALp(AFU)],P2,0,C,[Bm],0,3,0,0,["y",ALp(AAd)],Py,0,C,[Be],0,3,0,0,["j",ALq(AB0)],Vq,0,C,[Bu],1,3,0,0,0,Ql,0,C,[BL],0,3,0,0,["T",ALq(AIp)],No,0,C,[BL],0,3,0,0,["T",ALq(YD)],Sv,0,C,[BL],0,3,0,0,["T",ALq(AGH)],Su,0,C,[BL],0,3,0,0,["T",ALq(AAX)],RY,0,C,[BL],0,3,0,0,["T",ALq(ACf)],RX,0,C,[BL],0,3,0,0,["T",ALq(ACT)],SF,0,C,[Gy],0,3,0,0,["ky",ALs(AA3)],RT,0,C,[Bm],0,3,0,0,["y",ALp(Zp)],RS,0,C,[Bm],0,3,0,0,["y",ALp(AIE)],RU,
0,C,[Bm],0,3,0,0,["y",ALp(ABu)],Pg,0,C,[Bm],0,3,0,0,["y",ALp(Zh)],Ph,0,C,[Bm],0,3,0,0,["y",ALp(ADb)],Pd,0,C,[Bm],0,3,0,0,["y",ALp(AGS)],Pf,0,C,[Bm],0,3,0,0,["y",ALp(AE2)],MP,0,C,[Bm],0,3,0,0,["y",ALp(AGl)],MQ,0,C,[Bm],0,3,0,0,["y",ALp(AEA)],OJ,0,C,[Bm],0,3,0,0,["y",ALp(ACa)],OI,0,C,[Bm],0,3,0,0,["y",ALp(AIz)],Pj,0,C,[Bm],0,3,0,0,["y",ALp(YP)],Pm,0,C,[Bm],0,3,0,0,["y",ALp(AC9)],Pk,0,C,[Bm],0,3,0,0,["y",ALp(AFo)],Pn,0,C,[Bm],0,3,0,0,["y",ALp(ADP)],Kv,0,C,[BL],0,3,0,0,["T",ALq(AI4)],Sp,0,C,[BX],0,3,0,0,["bq",ALq(AB7)],OG,
0,C,[],3,3,0,0,0,Kr,0,C,[OG],0,3,0,0,0,M0,0,Bg,[],0,3,0,0,0,Sn,0,Bg,[],0,3,0,0,0,QH,0,E0,[],0,3,0,0,0,MS,0,E0,[],0,3,0,0,0,QA,0,C,[],0,3,0,0,0,OQ,0,C,[Be],0,3,0,0,["j",ALq(ADu)],SK,0,C,[Be],0,3,0,0,["j",ALq(AD0)],SL,0,C,[Be],0,3,0,0,["j",ALq(AHN)],RF,0,C,[],0,3,0,0,0,M5,0,C,[Be],0,3,0,0,["j",ALq(Zw)],M3,0,C,[Be],0,3,0,0,["j",ALq(Zl)],Mz,0,C,[Be],0,3,0,0,["j",ALq(AIw)],MT,0,C,[BL],0,3,0,0,["T",ALq(AA8)],JM,0,C,[Bu],3,3,0,0,0,Kq,0,C,[JM],0,3,0,0,["qO",ALp(ACX)],Ka,0,C,[JM],0,3,0,0,["qO",ALp(Yw)],Ss,0,C,[BL],0,
3,0,0,["T",ALq(ACu)],XI,0,C,[Be],0,3,0,0,0]);
$rt_metadata([RD,0,C,[Bm],0,3,0,0,["y",ALp(AH_)],J$,0,C,[Be],0,3,0,0,["j",ALq(AH0)],RQ,0,Bp,[],0,3,0,0,0,Nd,0,C,[JS],3,3,0,0,0,K3,0,C,[Nd],3,3,0,0,0,JA,0,C,[K3],1,3,0,0,0,UZ,0,JA,[],0,3,0,0,0,Ld,0,C,[Bm],0,3,0,0,["y",ALp(ADz)],Le,0,C,[Bm],0,3,0,0,["y",ALp(AEt)],B5,0,Ch,[],12,3,0,Xr,0,Se,0,C,[BL],0,3,0,0,["T",ALq(AFp)],V8,0,C,[Bu],3,3,0,0,0,P4,0,C,[BL],0,3,0,0,["T",ALq(AE_)],Nu,0,C,[CQ],4,3,0,0,0,Bs,0,C,[],1,0,0,0,["bJ",ALs(Gg),"bK",ALt(Gp),"fE",ALp(ZW),"E",ALq(AHs),"bm",ALq(AHr),"d3",ALp(AIi),"c8",ALp(Hi)],Lt,
0,C,[Be],0,3,0,0,["j",ALq(AGh)],Cu,0,Bs,[],0,0,0,JV,["c",ALs(Zo),"x",ALq(ZM)],FI,0,C,[],0,0,0,0,0,G6,0,BE,[],0,3,0,0,0,N2,0,Cu,[],0,0,0,0,["c",ALs(Y3),"x",ALq(AGp)],SE,0,Cu,[],0,0,0,0,["c",ALs(AAy)],ME,0,Cu,[],0,0,0,0,["c",ALs(ZV)],OP,0,Cu,[],0,0,0,0,["c",ALs(Y$),"x",ALq(AFi)],EI,0,Cu,[],0,0,0,0,["c",ALs(AHF)],BK,0,Bs,[],1,0,0,0,["c",ALs(AII),"bs",ALp(AG4),"x",ALq(AC1)],Xw,0,BK,[],0,0,0,0,["Z",ALr(AGI),"bJ",ALs(ABC),"bK",ALt(AAq),"x",ALq(Y7)],BH,0,Bs,[],0,0,0,0,["c",ALs(ACb),"E",ALq(AFc),"bm",ALq(ADE),"x",ALq(AFM),
"c8",ALp(AAn)],G$,0,BH,[],0,0,0,0,["c",ALs(AEZ),"x",ALq(AF6)],Da,0,G$,[],0,0,0,0,["c",ALs(AAU),"E",ALq(AFS)],Ko,0,Da,[],0,0,0,0,["c",ALs(AE7),"x",ALq(AHw)],Rh,0,Da,[],0,0,0,0,["c",ALs(ZI),"x",ALq(AG8)],Nx,0,Da,[],0,0,0,0,["c",ALs(AAl),"x",ALq(AI1)],PA,0,Da,[],0,0,0,0,["c",ALs(YK),"x",ALq(AGf)],Fy,0,BH,[],0,0,0,0,["c",ALs(YZ),"bJ",ALs(ADS),"bK",ALt(AGt),"bm",ALq(ADA),"d3",ALp(AFg),"c8",ALp(AIl)],FJ,0,C,[],1,0,0,0,0,R,0,FJ,[],1,0,0,0,["cm",ALp(ZK),"dy",ALp(Zg),"gr",ALp(AG0),"e9",ALp(AIh)],Ua,0,R,[],0,0,0,0,["g",
ALq(CB),"cm",ALp(Cy),"dy",ALp(ABv),"gr",ALp(AHk),"bz",ALp(AEr),"e9",ALp(ABI)],Hr,0,Bg,[],0,3,0,0,0,Dq,0,Bs,[],1,0,0,0,["bm",ALq(AGv),"x",ALq(AHC),"c8",ALp(AD9)],CD,0,Dq,[],0,0,0,0,["c",ALs(YM)],Er,0,CD,[],0,0,0,0,["c",ALs(Zr)],Cv,0,Dq,[],0,0,0,0,["c",ALs(YY)],DZ,0,CD,[],0,0,0,0,["c",ALs(ADY),"E",ALq(AI3)],RA,0,CD,[],0,0,0,0,["c",ALs(AIB),"bJ",ALs(AEp)],U,0,C,[],1,0,0,0,0,C2,0,BE,[],0,3,0,0,0,KE,0,FJ,[DO],0,0,0,0,["bz",ALp(AEx)],Ls,0,Bs,[],0,0,0,0,["c",ALs(ADk),"x",ALq(AFb)],R_,0,C,[DO,CQ],0,3,0,0,0,Kw,0,BH,
[],0,0,0,0,0]);
$rt_metadata([M4,0,BH,[],0,0,0,0,["c",ALs(Zn),"E",ALq(AEW),"x",ALq(ZY),"bm",ALq(ZJ)],C5,0,BH,[],0,0,0,0,["c",ALs(ABn),"g",ALq(ABT),"bm",ALq(Zk),"E",ALq(AGV),"x",ALq(ABz)],Hn,0,C5,[],0,0,0,0,["g",ALq(AC2)],T6,0,BK,[],0,0,0,0,["Z",ALr(ADl)],DC,0,BK,[],0,0,0,0,["Z",ALr(J9),"bm",ALq(AFe)],LR,0,BH,[],0,0,0,0,["E",ALq(ADX),"c",ALs(YC),"bm",ALq(ZS),"x",ALq(AHm)],DN,0,BK,[],0,0,0,0,["bs",ALp(AC_),"Z",ALr(ACl),"bJ",ALs(ABk),"bK",ALt(ADe),"bm",ALq(AHh)],XV,0,BK,[],0,0,0,0,["Z",ALr(Yx)],Th,0,BK,[],0,0,0,0,["Z",ALr(YS)],Ey,
0,BH,[],0,0,0,0,["E",ALq(AIk),"c",ALs(AEY),"bm",ALq(ADm),"x",ALq(AFV)],Sr,0,Ey,[],0,0,0,0,0,PM,0,Ey,[],0,0,0,0,0,S5,0,Cv,[],0,0,0,0,["c",ALs(AAE)],MA,0,Cv,[],0,0,0,0,["c",ALs(AEj)],E1,0,Cv,[],0,0,0,0,["c",ALs(AGT),"E",ALq(AHM)],Mh,0,E1,[],0,0,0,0,["c",ALs(ADc),"E",ALq(AEz)],Ex,0,Cv,[],0,0,0,0,["c",ALs(AIX)],KN,0,Ex,[],0,0,0,0,["c",ALs(ACH)],NS,0,Cv,[],0,0,0,0,["c",ALs(AIr)],Na,0,E1,[],0,0,0,0,["c",ALs(ZZ)],Qu,0,Ex,[],0,0,0,0,["c",ALs(Zb)],NT,0,Dq,[],0,0,0,0,["c",ALs(AIO),"bJ",ALs(AG2)],Lx,0,Dq,[],0,0,0,0,["c",
ALs(AFh),"bJ",ALs(YH)],D_,0,C,[],1,0,0,0,0,S7,0,CD,[],0,0,0,0,["c",ALs(Ze)],Rw,0,DZ,[],0,0,0,0,["c",ALs(AEi)],L9,0,Er,[],0,0,0,0,["c",ALs(AGx)],M9,0,CD,[],0,0,0,0,["c",ALs(AE$)],PW,0,DZ,[],0,0,0,0,["c",ALs(Zj)],Ny,0,Er,[],0,0,0,0,["c",ALs(AGL)],Im,0,Bs,[],4,0,0,0,["c",ALs(ADD),"x",ALq(ACS)],UI,0,Bs,[],0,0,0,0,["c",ALs(ZG),"x",ALq(ZP)],Lv,0,Bs,[],0,0,0,0,["c",ALs(AC5),"x",ALq(AIT)],Sd,0,Bs,[],4,0,0,0,["c",ALs(AFE),"x",ALq(AAt)],RV,0,Bs,[],0,0,0,0,["c",ALs(AET),"x",ALq(Yv)],KY,0,Bs,[],0,0,0,0,["c",ALs(AAm),"x",
ALq(AB6)],XM,0,BH,[],0,0,0,0,["c",ALs(AIu),"E",ALq(ZU),"fE",ALp(AEF),"x",ALq(ZT)],T_,0,BH,[],4,0,0,0,["c",ALs(AEM),"E",ALq(AGn),"fE",ALp(Yp),"x",ALq(AIF)],XF,0,Bs,[],4,0,0,0,["c",ALs(ADp),"x",ALq(ABZ)],V4,0,Bs,[],0,0,0,0,["c",ALs(AER),"x",ALq(ABP)],Tf,0,Bs,[],0,0,0,0,["c",ALs(ACJ),"x",ALq(AAx)],FU,0,BH,[],0,0,0,0,["c",ALs(Zf),"E",ALq(AFQ),"x",ALq(AF8)],XK,0,FU,[],0,0,0,0,["c",ALs(AAC),"bJ",ALs(AHt),"bK",ALt(Y5),"bm",ALq(AEc)],Vl,0,FU,[],0,0,0,0,["c",ALs(ADM)],Lr,0,Fo,[Gt],0,3,0,0,["iK",ALt(ABJ),"hX",ALs(ZL),
"fI",ALq(Z5),"jc",ALr(AG3)],NW,0,BK,[],0,0,0,0,["Z",ALr(AAS),"bJ",ALs(ZB),"bK",ALt(AB4),"bm",ALq(ACv)],Td,0,BK,[],0,0,0,0,["Z",ALr(ADU)],KS,0,BK,[],0,0,0,0,["Z",ALr(AGA)],FT,0,C,[],4,0,0,0,0,Kf,0,BK,[],0,0,0,0,["Z",ALr(AGG)]]);
$rt_metadata([IQ,0,BH,[],0,0,0,0,["E",ALq(AE5),"c",ALs(AAu),"bJ",ALs(ACt),"bK",ALt(AAZ),"bm",ALq(Y2),"x",ALq(AG$)],I4,0,BH,[],0,0,0,0,["E",ALq(Z4),"c",ALs(YL),"bJ",ALs(AFm),"bK",ALt(AGy),"bm",ALq(AAT),"x",ALq(AFu)],De,0,BK,[],0,0,0,0,["Z",ALr(AF9),"bJ",ALs(AEs),"bK",ALt(Z3),"bm",ALq(AFZ)],QJ,0,D_,[],0,0,0,0,["fu",ALq(AAe),"nv",ALr(AF3)],QK,0,D_,[],0,0,0,0,["fu",ALq(AGM),"nv",ALr(AIc)],WV,0,C,[],0,0,0,0,0,Tw,0,C,[],0,0,0,0,0,IN,0,U,[],0,0,0,0,["t",ALp(Vs)],HW,0,U,[],0,0,0,0,["t",ALp(VZ)],WN,0,U,[],0,0,0,0,["t",
ALp(AGo)],Xe,0,U,[],0,0,0,0,["t",ALp(AHb)],Xg,0,U,[],0,0,0,0,["t",ALp(ABo)],II,0,U,[],0,0,0,0,["t",ALp(Uc)],Je,0,II,[],0,0,0,0,["t",ALp(U4)],Yh,0,U,[],0,0,0,0,["t",ALp(ACr)],J4,0,Je,[],0,0,0,0,["t",ALp(Ta)],VG,0,J4,[],0,0,0,0,["t",ALp(AD$)],VV,0,U,[],0,0,0,0,["t",ALp(AAM)],UB,0,U,[],0,0,0,0,["t",ALp(AD6)],Ul,0,U,[],0,0,0,0,["t",ALp(AIg)],Xk,0,U,[],0,0,0,0,["t",ALp(AEC)],Yo,0,U,[],0,0,0,0,["t",ALp(YE)],WW,0,U,[],0,0,0,0,["t",ALp(ACN)],WI,0,U,[],0,0,0,0,["t",ALp(AGa)],XA,0,U,[],0,0,0,0,["t",ALp(AAJ)],TN,0,U,[],
0,0,0,0,["t",ALp(AA6)],Ts,0,U,[],0,0,0,0,["t",ALp(AH9)],W0,0,U,[],0,0,0,0,["t",ALp(Yy)],W8,0,U,[],0,0,0,0,["t",ALp(ADr)],UY,0,U,[],0,0,0,0,["t",ALp(AA_)],VY,0,U,[],0,0,0,0,["t",ALp(AB8)],X2,0,U,[],0,0,0,0,["t",ALp(ADv)],W7,0,U,[],0,0,0,0,["t",ALp(AHo)],Vj,0,U,[],0,0,0,0,["t",ALp(AFA)],UX,0,U,[],0,0,0,0,["t",ALp(AEu)],Yl,0,U,[],0,0,0,0,["t",ALp(AGi)],Hx,0,U,[],0,0,0,0,["t",ALp(VW)],XC,0,Hx,[],0,0,0,0,["t",ALp(AEm)],VL,0,IN,[],0,0,0,0,["t",ALp(Zy)],UQ,0,HW,[],0,0,0,0,["t",ALp(ACi)],Us,0,U,[],0,0,0,0,["t",ALp(ADH)],UL,
0,U,[],0,0,0,0,["t",ALp(AHY)],Vz,0,U,[],0,0,0,0,["t",ALp(ABM)],VI,0,U,[],0,0,0,0,["t",ALp(Yz)],Uv,0,C,[],4,0,0,0,0,T4,0,C,[],4,3,0,0,0,KZ,0,C,[],0,3,0,0,0,W3,0,C,[],0,3,0,0,0,Vh,0,C,[],4,3,0,0,0,R6,0,C,[],3,3,0,0,0]);
$rt_metadata([T9,0,C,[R6],0,3,0,0,0,Oz,0,C,[Be],0,3,0,0,0,Oy,0,C,[Be],0,3,0,0,0,Rz,0,R,[],0,0,0,0,["g",ALq(ABs)],Rx,0,R,[],0,0,0,0,["g",ALq(YW)],LC,0,R,[],0,0,0,0,["g",ALq(ADy),"bz",ALp(AB$)],LI,0,R,[],0,0,0,0,["g",ALq(AF$)],LG,0,R,[],0,0,0,0,["g",ALq(AGF)],LH,0,R,[],0,0,0,0,["g",ALq(ADT)],LL,0,R,[],0,0,0,0,["g",ALq(AA9)],LM,0,R,[],0,0,0,0,["g",ALq(Yr)],LJ,0,R,[],0,0,0,0,["g",ALq(ACd)],LK,0,R,[],0,0,0,0,["g",ALq(ADW)],LN,0,R,[],0,0,0,0,["g",ALq(AHx)],LO,0,R,[],0,0,0,0,["g",ALq(AAH)],LB,0,R,[],0,0,0,0,["g",ALq(AI6)],Me,
0,R,[],0,0,0,0,["g",ALq(ACh)],Lz,0,R,[],0,0,0,0,["g",ALq(AAG)],LA,0,R,[],0,0,0,0,["g",ALq(ABW)],LF,0,R,[],0,0,0,0,["g",ALq(AC8)],Ly,0,R,[],0,0,0,0,["g",ALq(AHg)],LD,0,R,[],0,0,0,0,["g",ALq(ZN)],LE,0,R,[],0,0,0,0,["g",ALq(AFs)],Jz,0,C,[],3,3,0,0,0,Op,0,C,[Jz],4,3,0,0,0,UN,0,C,[],0,3,0,0,0,ML,0,C,[],3,3,0,0,0,OV,0,C,[ML],0,3,0,0,0,KI,0,Fy,[],0,0,0,0,["bJ",ALs(ABO),"bK",ALt(AIW),"d3",ALp(AAs)],Q8,0,C,[BL],0,3,0,0,["T",ALq(AFD)],Q9,0,C,[BL],0,3,0,0,["T",ALq(AEG)],Ps,0,C,[BL],0,3,0,0,["T",ALq(ACm)],Pv,0,C,[BL],0,
3,0,0,["T",ALq(YQ)],QE,0,C,[Jz],0,0,0,0,0,Qi,0,C,[BL],0,3,0,0,["T",ALq(ADI)],OT,0,R,[],0,0,0,0,["g",ALq(AHE)],Ku,0,R,[],0,0,0,0,["g",ALq(Zt)],N9,0,R,[],0,0,0,0,["g",ALq(Zi)],N8,0,R,[],0,0,0,0,["g",ALq(ABL)],R3,0,R,[],0,0,0,0,["g",ALq(ACY)],L4,0,R,[],0,0,0,0,["g",ALq(AHH)],Lo,0,R,[],0,0,0,0,["g",ALq(AE0)],Nl,0,R,[],0,0,0,0,["g",ALq(AGd)],Kl,0,R,[],0,0,0,0,["g",ALq(AID)],Ks,0,R,[],0,0,0,0,["g",ALq(AAY)],Lb,0,R,[],0,0,0,0,["g",ALq(AHU)],Mo,0,R,[],0,0,0,0,["g",ALq(AD4)],Mx,0,R,[],0,0,0,0,["g",ALq(AFO)],PI,0,R,[],
0,0,0,0,["g",ALq(AHy)],Oq,0,R,[],0,0,0,0,["g",ALq(AIo)]]);
$rt_metadata([KC,0,R,[],0,0,0,0,["g",ALq(AAK)],JP,0,R,[],0,0,0,0,["g",ALq(AE3)],N4,0,JP,[],0,0,0,0,["g",ALq(AGW)],S0,0,C,[Be],0,3,0,0,["j",ALq(AAh)],Ou,0,C,[],3,0,0,0,0,S2,0,C,[Be],0,3,0,0,["j",ALq(AFt)],S1,0,C,[Be],0,3,0,0,["j",ALq(AEP)],TW,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.Co=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","url(","FATAL: WebGL is not enabled in the browser","[Graphics] GL version: ",
"WebGL 2","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = vTex;\n  gl_Position = pos;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","WebGraphics::ctor finish","javaClass@","null","Patter is null","","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","String is null or empty","Illegal radix: ","false","true","fonts/","JetBrains Mono","Illegal argument javaObject instanceof ","#wasm","selectScene ","RenderTexture",
"ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","many","test","DemoScene1","ClipboardTest","TextureRegionTestScene","WorkerTest","keydown","keyup","mousemove","mousedown","mouseup","wheel","dblclick","contextmenu","focus","blur","drop","paste","copy","cut"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = uTexTransform.xy + vTex * uTexTransform.zw;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","Can\'t compare "," to ","POS2_UV2","Either src or dest is null","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","[",", ","]","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ",
"Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","Consolas","Courier New","|The sample text","unsupported","supported","ReadClipboardText is ","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
+"(int field) {\n    return field + this.field;\n  }\n\n  public interface A {\n    int sumField(int field);\n\n    default void foo() {\n      sumField(10);\n    }\n  }\n}\n","JavaParser.parseBytes","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","pointer","text","ew-resize","ns-resize","jsCanvas.setFont(11, CourierNew);","Segoe UI","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","onContextMenu",
"scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText "," on Copy","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ",
"ok","fail: not equal to expected","fail: not expected","fail","#A9B7C6","unClick b=","click b=",", count=","key up = ","key down = ",", keyCode = ",", isRepeated = ","menu","onCopy","copied","This is a "," text sample","focus lost","Toolbar font has not been set","toolbar size is unknown","onLeave item ",", item ","trying to display popup with unknown screen size and dpr","#3C3F41","#616161","#4B6EAF","#BBBBBB","#CCCCCC","tbH onClickOutside","tbV onClickOutside","  methodWithStringResult = ","  methodWithCharsResult: ",
", chars = ","methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","trying to redefine texture size in setContent","onEnter item ","  ","Set editor font to: ",", ascent+descent = ",", lineHeight = ",", caretHeight = ","topBase(font, lineHeight) = ","\n","\r","Full file parsed in ","ms","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","asyncIterativeParsing","open ...","Int","Iter","VP","Rep","parser >",
"Dark","Light","theme >","↑ increase","↓ decrease","font size >","Verdana","fonts >","prev = "," pixelLocation = ",", next = ","...","\\n","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","defaultText","keyword","field","#9876AA","string","#6A8759","comma","#CC7832","error","unused","#72737A","number","#6897BB","method","#FFC66D","showUsage","braceMatch","#FFEF28","#3B514D","comment","#808080","annotation","#BBB529","type","#287BDE","operator","#5F8C8A","newAction must be non-null",
"The last byte in dst ","Expected "," ints to read, but "," read","showOpenFilePicker -> ","showDirectoryPicker -> ","onPopupClosed"," onPastePlainText: "," writeClipboardText \'","\' ok"," readClipboardText: "," error: ","... and "," more usages","opening file ",".java","readClipboardText error: ","Current Version: ","Last Parsed Version: ","writeClipboardText error: ","Viewport parsed in ","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum",
"Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks",
"Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement",
"CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B",
"MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA",
"YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn",
"Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
BA.prototype.toString=function(){return $rt_ustr(this);};
BA.prototype.valueOf=BA.prototype.toString;C.prototype.toString=function(){return $rt_ustr(Z1(this));};
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
a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var B$=Long_add;var Io=Long_sub;var BG=Long_mul;var Cw=Long_div;var Hp=Long_rem;var AJK
=Long_or;var Cz=Long_and;var AN7=Long_xor;var ED=Long_shl;var Fu=Long_shr;var Dt=Long_shru;var AJ5=Long_compare;var Fi=Long_eq;var AN8=Long_ne;var UK=Long_lt;var Gl=Long_le;var UD=Long_gt;var UF=Long_ge;var AN9=Long_not;var AKg=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(AKk);
main.javaException=$rt_javaException;
(function(){var c;c=PP.prototype;c.f=c.T;c=PN.prototype;c.f=c.T;c=Lc.prototype;c.f=c.T;c=U6.prototype;c.getLength=c.yc;c.get=c.yI;c=SX.prototype;c.f=c.T;c=TE.prototype;c.dispatchEvent=c.uF;c.addEventListener=c.w8;c.removeEventListener=c.yN;c.getLength=c.uL;c.get=c.sd;c.addEventListener=c.tp;c.removeEventListener=c.v3;c=Q4.prototype;c.onAnimationFrame=c.v5;c=Q2.prototype;c.f=c.o4;c=QZ.prototype;c.handleEvent=c.bq;c=Q0.prototype;c.f=c.T;c=RG.prototype;c.handleEvent=c.bq;c=RH.prototype;c.handleEvent=c.bq;c=RI.prototype;c.handleEvent
=c.bq;c=RJ.prototype;c.handleEvent=c.bq;c=RK.prototype;c.handleEvent=c.bq;c=RL.prototype;c.handleEvent=c.bq;c=RM.prototype;c.handleEvent=c.bq;c=RN.prototype;c.handleEvent=c.bq;c=RO.prototype;c.handleEvent=c.bq;c=RP.prototype;c.handleEvent=c.bq;c=SO.prototype;c.handleEvent=c.bq;c=SP.prototype;c.handleEvent=c.bq;c=SQ.prototype;c.handleEvent=c.bq;c=SR.prototype;c.handleEvent=c.bq;c=SM.prototype;c.handleEvent=c.bq;c=SN.prototype;c.handleEvent=c.bq;c=Qb.prototype;c.handleEvent=c.bq;c=ON.prototype;c.f=c.T;c=OO.prototype;c.f
=c.T;c=KX.prototype;c.f=c.T;c=KW.prototype;c.f=c.T;c=KV.prototype;c.f=c.T;c=KU.prototype;c.f=c.T;c=Mv.prototype;c.accept=c.y_;c=Md.prototype;c.f=c.o4;c=Mb.prototype;c.f=c.o4;c=Ql.prototype;c.f=c.T;c=No.prototype;c.f=c.T;c=Sv.prototype;c.f=c.T;c=Su.prototype;c.f=c.T;c=RY.prototype;c.f=c.T;c=RX.prototype;c.f=c.T;c=Kv.prototype;c.f=c.T;c=Sp.prototype;c.handleEvent=c.bq;c=MT.prototype;c.f=c.T;c=Kq.prototype;c.onTimer=c.qO;c=Ka.prototype;c.onTimer=c.qO;c=Ss.prototype;c.f=c.T;c=Se.prototype;c.f=c.T;c=P4.prototype;c.f
=c.T;c=Q8.prototype;c.f=c.T;c=Q9.prototype;c.f=c.T;c=Ps.prototype;c.f=c.T;c=Pv.prototype;c.f=c.T;c=Qi.prototype;c.f=c.T;})();
})(this);
