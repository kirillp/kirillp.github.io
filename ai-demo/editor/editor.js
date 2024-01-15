"use strict";
(function($rt_globals,$rt_exports){var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj instanceof $rt_objcls()&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes
=from.$meta.supertypes;for(var i=0;i<supertypes.length;i=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len
+start,0):$rt_globals.Math.min(start,len);end=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,
new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),
new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data){var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz)
{return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data){var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz)
{return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data){var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),
buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data){var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data){var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),
buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,
binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache
=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache
=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double","D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if
($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace
==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if
(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i
=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),
dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),
arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length
===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),
arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i
=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value)
{if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)
===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr
=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i
=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum
=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName
:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f){return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,
p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i)
{javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new $rt_globals.DataView(new $rt_globals.ArrayBuffer(8));var $rt_doubleToRawLongBits;var $rt_longBitsToDouble;if
(typeof $rt_globals.BigInt!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else {$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,
true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){var hi=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n>>$rt_globals.BigInt(32)));var lo=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n&$rt_globals.BigInt(0xFFFFFFFF)));$rt_numberConversionView.setInt32(0,lo,true);$rt_numberConversionView.setInt32(4,hi,true);return $rt_numberConversionView.getFloat64(0,
true);};}function $rt_floatToRawIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,
JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){try {var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[defaultMessage];}catch(e){return "Exception occurred trying to extract Java exception message: "
+e;}}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj)
{var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta
?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val, -(val<0)|0);};Long_fromNumber=function(val){if
(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(lo))|$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(hi)
<<$rt_globals.BigInt(32)));};Long_fromInt=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val|0));};Long_fromNumber=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val)));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(32,
val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};var $rt_ucmp=function(a,b){a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length)
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.go=f;}
function $rt_cls(cls){return ABD(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return GY(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b$.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AOb(t);}
function $rt_throwableCause(t){return AOg(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ATX());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ATY(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ATZ());}
function $rt_throwCCE(){}
var A=Object.create(null);
var L=$rt_throw;var BD=$rt_compare;var AT0=$rt_nullCheck;var E=$rt_cls;var P=$rt_createArray;var H7=$rt_isInstance;var AT1=$rt_nativeThread;var AT2=$rt_suspending;var AT3=$rt_resuming;var AT4=$rt_invalidPointer;var C=$rt_s;var Bn=$rt_eraseClinit;var U=$rt_imul;var E5=$rt_wrapException;var AT5=$rt_checkBounds;var AT6=$rt_checkUpperBound;var AT7=$rt_checkLowerBound;var AT8=$rt_wrapFunction0;var AT9=$rt_wrapFunction1;var AT$=$rt_wrapFunction2;var AT_=$rt_wrapFunction3;var AUa=$rt_wrapFunction4;var F=$rt_classWithoutFields;var G
=$rt_createArrayFromData;var ASx=$rt_createCharArrayFromData;var AUb=$rt_createByteArrayFromData;var AUc=$rt_createShortArrayFromData;var FI=$rt_createIntArrayFromData;var AUd=$rt_createBooleanArrayFromData;var AUe=$rt_createFloatArrayFromData;var AUf=$rt_createDoubleArrayFromData;var AGh=$rt_createLongArrayFromData;var ATW=$rt_createBooleanArray;var DX=$rt_createByteArray;var AUg=$rt_createShortArray;var B1=$rt_createCharArray;var By=$rt_createIntArray;var AUh=$rt_createLongArray;var AEs=$rt_createFloatArray;var AUi
=$rt_createDoubleArray;var BD=$rt_compare;var AUj=$rt_castToClass;var AUk=$rt_castToInterface;var AUl=Long_toNumber;var BL=Long_fromInt;var AUm=Long_fromNumber;var Dm=Long_create;var ACx=Long_ZERO;var AUn=Long_hi;var ZR=Long_lo;
function B(){this.$id$=0;}
function Bz(a){return ABD(a.constructor);}
function AK9(a,b){return a!==b?0:1;}
function AF7(a){var b,c,d,e,f,g,h,i,j;b=Ix(a);if(!b)c=C(0);else{d=(((32-NE(b)|0)+4|0)-1|0)/4|0;e=B1(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=GQ((b>>>g|0)&15,16);g=g-4|0;h=i;}c=GY(e);}j=new R;T(j);J(J(j,C(1)),c);return S(j);}
function Ix(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AKq(a){var b,c,d;if(!H7(a,DP)&&a.constructor.$meta.item===null){b=new Vb;X(b);L(b);}b=AEy(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var AAy=F(0);
function ASn(b){ACO();Yv();AAk();ADq();AA4();ACa();AD7();ABc();ZV();ACR();Ym();ADd();Yq();ACg();AB4();ABV();AAN();Z1();AAm();ABl();ABT();YR();ADQ();$rt_globals.editorFactory=Bm(new Ua,"create");$rt_globals.modelFactory=Bm(new T_,"create");$rt_globals.diffFactory=Bm(new TS,"create");}
var MW=F(0);
var Mm=F(0);
function VY(){var a=this;B.call(a);a.km=null;a.fG=null;}
function ABD(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new VY;c.fG=b;d=c;b.classObject=d;}return c;}
function R0(a){if(a.km===null)a.km=$rt_str(a.fG.$meta.name);return a.km;}
function Hn(a){return a.fG.$meta.primitive?1:0;}
function HI(a){return ABD(a.fG.$meta.item);}
var Zt=F();
function Bm(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Cv(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Y$=F();
function AEy(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ABI(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ABI(d[e],c))return 1;e=e+1|0;}return 0;}
function F6(){var a=this;B.call(a);a.lU=null;a.rg=null;a.lN=0;a.mD=0;}
function AUo(){var a=new F6();X(a);return a;}
function AUp(a){var b=new F6();Bp(b,a);return b;}
function X(a){a.lN=1;a.mD=1;}
function Bp(a,b){a.lN=1;a.mD=1;a.lU=b;}
function AHY(a){return a;}
function AOb(a){return a.lU;}
function AOg(a){var b;b=a.rg;if(b===a)b=null;return b;}
var DO=F(F6);
function AUq(){var a=new DO();AB8(a);return a;}
function AUr(a){var b=new DO();X$(b,a);return b;}
function AB8(a){X(a);}
function X$(a,b){Bp(a,b);}
var Bt=F(DO);
function ATY(a){var b=new Bt();AP_(b,a);return b;}
function AP_(a,b){Bp(a,b);}
var AAR=F(Bt);
var Cy=F(0);
var Cq=F(0);
var Ig=F(0);
function Bv(){var a=this;B.call(a);a.b$=null;a.hH=0;}
var AUs=null;var AUt=null;var AUu=null;function F7(){F7=Bn(Bv);APJ();}
function AIS(){var a=new Bv();Yi(a);return a;}
function GY(a){var b=new Bv();IK(b,a);return b;}
function DV(a,b,c){var d=new Bv();L8(d,a,b,c);return d;}
function Yi(a){F7();a.b$=AUs;}
function IK(a,b){F7();L8(a,b,0,b.data.length);}
function L8(a,b,c,d){var e;F7();e=B1(d);a.b$=e;C_(b,c,e,0,d);}
function LZ(b){var c;F7();c=AIS();c.b$=b;return c;}
function I(a,b){var c,d;if(b>=0){c=a.b$.data;if(b<c.length)return c[b];}d=new GN;X(d);L(d);}
function H(a){return a.b$.data.length;}
function Eu(a){return a.b$.data.length?0:1;}
function P3(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=H(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){C_(a.b$,b,d,e,c);return;}}g=new BV;X(g);L(g);}
function TU(a,b,c){var d,e,f;if((c+H(b)|0)>H(a))return 0;d=0;while(d<H(b)){e=I(b,d);f=c+1|0;if(e!=I(a,c))return 0;d=d+1|0;c=f;}return 1;}
function J0(a,b){if(a===b)return 1;return TU(a,b,0);}
function DH(a,b){var c,d,e,f;if(a===b)return 1;if(H(b)>H(a))return 0;c=0;d=H(a)-H(b)|0;while(d<H(a)){e=I(a,d);f=c+1|0;if(e!=I(b,c))return 0;d=d+1|0;c=f;}return 1;}
function HR(a,b,c){var d,e,f,g,h;d=Z(0,c);if(b<65536){e=b&65535;while(true){f=a.b$.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Kc(b);h=Lu(b);while(true){f=a.b$.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function G4(a,b,c){var d,e,f,g,h;d=Ba(c,H(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b$.data[d]==e)break;d=d+(-1)|0;}return d;}f=Kc(b);g=Lu(b);while(true){if(d<1)return (-1);h=a.b$.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function PN(a,b,c){var d,e,f;d=Z(0,c);e=H(a)-H(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=H(b))break a;if(I(a,d+f|0)!=I(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AMA(a,b){return PN(a,b,0);}
function P0(a,b,c){var d,e;d=Ba(c,H(a)-H(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=H(b))break a;if(I(a,d+e|0)!=I(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AAu(a,b){return P0(a,b,H(a));}
function B9(a,b,c){var d,e;d=BD(b,c);if(d>0){e=new BV;X(e);L(e);}if(!d){F7();return AUt;}if(!b&&c==H(a))return a;return DV(a.b$,b,c-b|0);}
function D3(a,b){return B9(a,b,H(a));}
function P$(a,b,c){return B9(a,b,c);}
function Hi(a,b){var c,d,e,f,g,h;if(Eu(b))return a;if(Eu(a))return b;c=B1(H(a)+H(b)|0);d=c.data;e=0;f=0;while(f<H(a)){g=e+1|0;d[e]=I(a,f);f=f+1|0;e=g;}g=0;while(g<H(b)){h=e+1|0;d[e]=I(b,g);g=g+1|0;e=h;}return LZ(c);}
function UL(a,b,c){var d,e,f,g;d=new R;T(d);e=H(a)-H(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=H(b)){J(d,c);f=f+(H(b)-1|0)|0;break a;}if(I(a,f+g|0)!=I(b,g))break;g=g+1|0;}BX(d,I(a,f));}f=f+1|0;}J(d,D3(a,f));return S(d);}
function RZ(a){var b,c;b=0;c=H(a)-1|0;a:{while(b<=c){if(I(a,b)>32)break a;b=b+1|0;}}while(b<=c&&I(a,c)<=32){c=c+(-1)|0;}return B9(a,b,c+1|0);}
function AF5(a){return a;}
function E4(a){var b,c,d,e,f;b=a.b$.data;c=B1(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function D8(b){var c;F7();c=new R;T(c);return S(Bl(c,b));}
function BE(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(H(c)!=H(a))return 0;d=0;while(d<H(c)){if(I(a,d)!=I(c,d))return 0;d=d+1|0;}return 1;}
function Gf(a){var b,c,d,e;a:{if(!a.hH){b=a.b$.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hH=(31*a.hH|0)+e|0;d=d+1|0;}}}return a.hH;}
function LE(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gb;Bp(b,C(2));L(b);}AUv=1;d=new Rd;d.j_=P(CC,10);d.f6=(-1);d.ez=(-1);d.bm=(-1);e=new Gg;e.ev=1;e.bB=b;e.W=B1(H(b)+2|0);C_(E4(b),0,e.W,0,H(b));f=e.W.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.sh=g;e.fL=0;EO(e);EO(e);d.g=e;d.dn=0;d.lc=Xn(d,(-1),0,null);if(!C1(d.g)){b=new Ib;h=d.g;IQ(b,C(3),h.bB,h.cZ);L(b);}if(d.nX)d.lc.ea();b=BA();h=new SF;h.ik=(-1);h.kw=(-1);h.w5=d;h.uO=d.lc;h.iF=a;h.ik=0;g=H(a);h.kw=g;e=new UQ;i=h.ik;j=d.f6;k=d.ez+1|0;l=d.bm+1|0;e.hl
=(-1);m=j+1|0;e.pa=m;e.dz=By(m*2|0);f=By(l);e.jk=f;G6(f,(-1));if(k>0)e.k5=By(k);G6(e.dz,(-1));Xa(e,a,i,g);h.cl=e;e.e8=1;n=0;m=0;if(!H(a)){f=P(Bv,1);f.data[0]=C(3);}else{while(true){l=H(h.iF);if(!Yz(h))l=h.kw;e=h.cl;if(e.d7>=0&&AAd(e)==1){e=h.cl;e.d7=Iv(e);if(Iv(h.cl)==AB_(h.cl)){e=h.cl;e.d7=e.d7+1|0;}g=h.cl.d7;g=g<=l&&Mw(h,g)?1:0;}else g=Mw(h,h.ik);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Bw(b,P$(a,m,ADF(h)));m=ZY(h);n=g;}a:{Bw(b,P$(a,m,H(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(H(Bs(b,g)))break a;Fj(b,
g);}}if(g<0)g=0;f=Hj(b,P(Bv,g));}return f;}
function AH$(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Ba(H(a),H(b));e=0;while(true){if(e>=d){c=H(a)-H(b)|0;break a;}c=I(a,e)-I(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function APJ(){AUs=B1(0);AUt=AIS();AUu=new SX;}
var F1=F(F6);
var GS=F(F1);
var AAt=F(GS);
var Eq=F();
function FQ(){Eq.call(this);this.bd=0;}
var AUw=null;var AUx=null;function APo(a){var b=new FQ();ZK(b,a);return b;}
function ZK(a,b){a.bd=b;}
function KS(b){return (Ni(ATI(20),b,10)).cP();}
function I3(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new CZ;Bp(b,C(4));L(b);}d=H(b);if(0==d){b=new CZ;Bp(b,C(5));L(b);}if(c>=2&&c<=36){a:{e=0;switch(I(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new CZ;X(b);L(b);}b:{c:{while(f<d){h=f+1|0;i=O4(I(b,f));if(i<0){j=new CZ;k=B9(b,0,d);b=new R;T(b);J(J(b,C(6)),k);Bp(j,S(b));L(j);}if(i>=c){j=new CZ;l=B9(b,0,d);b=new R;T(b);J(J(Bl(J(b,C(7)),c),C(8)),l);Bp(j,S(b));L(j);}g=U(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new CZ;k=B9(b,0,d);b=new R;T(b);J(J(b,C(9)),k);Bp(j,S(b));L(j);}b=new CZ;j=new R;T(j);Bl(J(j,C(10)),c);Bp(b,S(j));L(b);}
function Ct(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AUx===null){AUx=P(FQ,256);c=0;while(true){d=AUx.data;if(c>=d.length)break a;d[c]=APo(c-128|0);c=c+1|0;}}}return AUx.data[b+128|0];}return APo(b);}
function AQT(a,b){if(a===b)return 1;return b instanceof FQ&&b.bd==a.bd?1:0;}
function NE(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function HT(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AKl(a,b){b=b;return BD(a.bd,b.bd);}
function ACO(){AUw=E($rt_intcls());}
function FU(){var a=this;B.call(a);a.M=null;a.H=0;}
function AUy(){var a=new FU();T(a);return a;}
function ATI(a){var b=new FU();FB(b,a);return b;}
function T(a){FB(a,16);}
function FB(a,b){a.M=B1(b);}
function Ni(a,b,c){return AAF(a,a.H,b,c);}
function AAF(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cu(a,b,b+1|0);else{Cu(a,b,b+2|0);f=a.M.data;g=b+1|0;f[b]=45;b=g;}a.M.data[b]=GQ(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=U(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cu(a,b,b+i|0);if(e)e=b;else{f=a.M.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.M.data;b=e+1|0;f[e]=GQ($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ABw(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BD(c,0.0);if(!d){if(1.0/c===Infinity){Cu(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cu(a,b,b+4|0);e=a.M.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cu(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cu(a,b,b+8|0);d=b;}else{Cu(a,b,b+9|0);e=a.M.data;d=b+1|0;e[b]=45;}e=a.M.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AUz;ABm(c,f);d=f.kD;g=f.kh;h=f.of;i=1;j=1;if(h)j=2;k=9;l=AO_(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Z(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cu(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.M.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.M.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.M.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.M.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AO_(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function BX(a,b){return a.me(a.H,b);}
function W2(a,b,c){Cu(a,b,b+1|0);a.M.data[b]=c;return a;}
function I8(a,b){var c,d;c=a.M.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.M=Nx(a.M,d);}
function S(a){return DV(a.M,0,a.H);}
function WL(a,b,c,d){return a.lI(a.H,b,c,d);}
function MQ(a,b,c,d,e){var f,g,h,i;Cu(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.M.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function HV(a,b){return a.kJ(b,0,b.data.length);}
function Cu(a,b,c){var d,e,f,g;d=a.H;e=d-b|0;a.hz((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.M.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.H=a.H+(c-b|0)|0;}
var Hs=F(0);
var R=F(FU);
function J(a,b){var c;c=a.H;if(b===null)b=C(11);L3(a,c,b);return a;}
function CW(a,b){L3(a,a.H,b);return a;}
function Bl(a,b){Ni(a,b,10);return a;}
function FV(a,b){var c,d,e,f,g,h,i,j;c=a.H;d=1;if(AR_(b,ACx)){d=0;b=ASY(b);}a:{if(HQ(b,BL(10))<0){if(d)Cu(a,c,c+1|0);else{Cu(a,c,c+2|0);e=a.M.data;f=c+1|0;e[c]=45;c=f;}a.M.data[c]=GQ(ZR(b),10);}else{g=1;h=BL(1);i=Lo(BL(-1),BL(10));b:{while(true){j=ALO(h,BL(10));if(HQ(j,b)>0){j=h;break b;}g=g+1|0;if(HQ(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cu(a,c,c+g|0);if(d)f=c;else{e=a.M.data;f=c+1|0;e[c]=45;}while(true){if(AHl(j,ACx))break a;e=a.M.data;c=f+1|0;e[f]=GQ(ZR((Lo(b,j))),10);b=Yy(b,j);j=Lo(j,BL(10));f=c;}}}return a;}
function JK(a,b){ABw(a,a.H,b);return a;}
function X_(a,b){BX(a,b);return a;}
function I7(a,b){L3(a,a.H,!b?C(12):C(13));return a;}
function ADt(a,b,c){var d,e,f,g,h,i;d=BD(b,c);if(d<=0){e=a.H;if(b<=e){if(d){f=e-c|0;a.H=e-(c-b|0)|0;g=0;while(g<f){h=a.M.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new GN;X(i);L(i);}
function VJ(a,b){var c,d,e,f;if(b>=0){c=a.H;if(b<c){c=c-1|0;a.H=c;while(b<c){d=a.M.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new GN;X(f);L(f);}
function AKh(a,b,c,d,e){MQ(a,b,c,d,e);return a;}
function AHe(a,b,c,d){WL(a,b,c,d);return a;}
function YS(a){return a.H;}
function Jd(a){return S(a);}
function AKo(a,b){I8(a,b);}
function AKT(a,b,c){W2(a,b,c);return a;}
function L3(a,b,c){var d,e,f;if(b>=0&&b<=a.H){a:{if(c===null)c=C(11);else if(Eu(c))break a;I8(a,a.H+H(c)|0);d=a.H-1|0;while(d>=b){a.M.data[d+H(c)|0]=a.M.data[d];d=d+(-1)|0;}a.H=a.H+H(c)|0;d=0;while(d<H(c)){e=a.M.data;f=b+1|0;e[b]=I(c,d);d=d+1|0;b=f;}}return a;}c=new GN;X(c);L(c);}
var Fm=F(GS);
var ABN=F(Fm);
function AUA(a){var b=new ABN();AGd(b,a);return b;}
function AGd(a,b){Bp(a,b);}
var AAi=F(Fm);
function AUB(a){var b=new AAi();AGr(b,a);return b;}
function AGr(a,b){Bp(a,b);}
var Bo=F(0);
function JF(b){return b;}
var RN=F(0);
var Ua=F();
function AIw(a,b){var c;if(!Yu())b=$rt_globals.Promise.reject(new $rt_globals.Error("This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled"));else{c=new Uh;c.n$=b;b=new $rt_globals.Promise(Bm(c,"f"));}return b;}
var ABn=F();
var OK=F(0);
var T_=F();
function AK5(a,b,c,d){var e,f,g;e=new EU;f=ABS(b);b=GL(c,null);g=AQR(f,b,ABM(d));e.dp=g;g.lf=e;e.k1=c;e.kc=d;return e;}
var AAJ=F();
var SZ=F(0);
var TS=F();
function AKi(a,b){var c;if(!Yu())b=$rt_globals.Promise.reject(new $rt_globals.Error("This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled"));else{c=new XF;c.nf=b;b=new $rt_globals.Promise(Bm(c,"f"));}return b;}
var ZL=F();
var KQ=F();
var AUC=null;var AUD=null;function EW(){if(AUC===null)AUC=ALJ(AUE,0);return AUC;}
function Ed(){if(AUD===null)AUD=ALJ(AUF,0);return AUD;}
function ASQ(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KX(b)&&(e+f|0)<=KX(d)){a:{b:{if(b!==d){g=HI(Bz(b));h=HI(Bz(d));if(g!==null&&h!==null){if(g===h)break b;if(!Hn(g)&&!Hn(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fG;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ABI(n.constructor,o)?1:0)){J2(b,c,d,e,j);b=new Ia;X(b);L(b);}j=j+1|0;k=m;}J2(b,c,d,e,f);return;}if(!Hn(g))break a;if(Hn(h))break b;else break a;}b=new Ia;X(b);L(b);}}J2(b,c,
d,e,f);return;}b=new Ia;X(b);L(b);}b=new BV;X(b);L(b);}d=new Gb;Bp(d,C(14));L(d);}
function C_(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KX(b)&&(e+f|0)<=KX(d)){J2(b,c,d,e,f);return;}b=new BV;X(b);L(b);}
function J2(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Ec(){return Long_fromNumber(new Date().getTime());}
var ACz=F();
var GM=F(0);
var SX=F();
var BV=F(Bt);
var ABs=F();
function KX(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AUG());}return b.data.length;}
function AB$(b,c){if(b===null){b=new Gb;X(b);L(b);}if(b===E($rt_voidcls())){b=new BF;X(b);L(b);}if(c>=0)return AQi(b.fG,c);b=new XS;X(b);L(b);}
function AQi(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Gb=F(Bt);
var Ia=F(Bt);
function CR(){B.call(this);this.kg=0;}
var AUH=null;var AUI=null;var AUJ=null;var AUK=null;var AUL=null;var AUM=null;var AUN=null;var AUO=null;var AUP=null;var AUQ=null;function AQ1(a){var b=new CR();Z$(b,a);return b;}
function Z$(a,b){a.kg=b;}
function NJ(b){var c,d;c=AUM.data;if(b>=c.length)return AQ1(b);d=c[b];if(d===null){d=AQ1(b);AUM.data[b]=d;}return d;}
function Wz(b){var c,d;c=new Bv;d=B1(1);d.data[0]=b;IK(c,d);return c;}
function LJ(b){return b>=65536&&b<=1114111?1:0;}
function Cs(b){return (b&64512)!=55296?0:1;}
function CO(b){return (b&64512)!=56320?0:1;}
function WO(b){return !Cs(b)&&!CO(b)?0:1;}
function G1(b,c){return Cs(b)&&CO(c)?1:0;}
function Eh(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Kc(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Lu(b){return (56320|b&1023)&65535;}
function EH(b){return Ga(b)&65535;}
function Ga(b){if(AUK===null){if(AUN===null)AUN=AB3();AUK=AAp((AUN.value!==null?$rt_str(AUN.value):null));}return SL(AUK,b);}
function Ek(b){return F9(b)&65535;}
function F9(b){if(AUJ===null){if(AUO===null)AUO=ACP();AUJ=AAp((AUO.value!==null?$rt_str(AUO.value):null));}return SL(AUJ,b);}
function SL(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BD(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function Uj(b,c){if(c>=2&&c<=36){b=O4(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function O4(b){var c,d,e,f,g,h,i,j,k,l;if(AUI===null){if(AUP===null)AUP=AAw();c=(AUP.value!==null?$rt_str(AUP.value):null);d=AOh(E4(c));e=Jf(d);f=By(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+MX(d)|0;j=j+MX(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AUI=f;}g=AUI.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BD(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function GQ(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function F3(b){var c;if(b<65536){c=B1(1);c.data[0]=b&65535;return c;}return ASx([Kc(b),Lu(b)]);}
function Ch(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&WO(b&65535))return 19;if(AUL===null){if(AUQ===null)AUQ=ADZ();d=(AUQ.value!==null?$rt_str(AUQ.value):null);e=P(Nb,16384);f=e.data;g=DX(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<H(d)){m=J1(I(d,l));if(m==64){l=l+1|0;m=J1(I(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|U(c,J1(I(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=J1(I(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AH6(k,k+i|0,LD(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AH6(k,k+i|0,LD(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AUL=C2(e,j);}e=AUL.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.r8)o=p+1|0;else{c=d.pV;if(b>=c)return d.qb.data[b-c|0];c=p-1|0;}}return 0;}
function I0(b){a:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function FY(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ch(b)!=16?0:1;}
function PC(b){switch(Ch(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Rg(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return PC(b);}return 1;}
function Yv(){AUH=E($rt_charcls());AUM=P(CR,128);}
function AB3(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ACP(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AAw(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
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
var GN=F(BV);
var H3=F(0);
function FN(b){var c;BM(b);c=new Vd;c.mL=b;return c;}
var Rw=F(0);
function Px(){var a=this;B.call(a);a.g1=null;a.bw=null;}
function Nv(a){return a.g1.d8;}
function QL(a,b){var c,d;a:{c=Nv(a);b=Ce(b);d=(-1);switch(Gf(b)){case 3075958:if(!BE(b,C(15)))break a;d=2;break a;case 102970646:if(!BE(b,C(16)))break a;d=0;break a;case 1441429116:if(!BE(b,C(17)))break a;d=1;break a;default:}}b:{switch(d){case 0:break;case 1:LT(c);break b;case 2:FS(c);break b;default:c=new R;T(c);J(J(c,C(18)),b);$rt_globals.console.info($rt_ustr(S(c)));break b;}J4(c);}}
function V9(b,c,d){var e,f,g,h,i,j,k;if(!((b?1:0)?1:0))$rt_globals.console.info("provider result is undefined");else if(!($rt_globals.Array.isArray(b)?1:0))Lh(d,C(19));else{e=P(Jh,b.length);f=e.data;g=0;h=f.length;while(g<h){i=b[g];j=new Jh;k=ABM(i.uri);j.fX=new L6;j.g9=k;X1(i.range,j.fX);f[g]=j;g=g+1|0;}c.j(e);}}
function P_(a,b){var c,d,e,f;c=a.bw;b=b-1|0;if(b>0){d=b-1|0;e=c.z;d=U(d,e);f=c.V;if(d<f)DR(c,U(b-2|0,e));else if((d-f|0)>=Cz(c))DR(c,b>Cb(c.c.f)?FL(c):U(b+1|0,c.z)-Cz(c)|0);}}
function Uu(a,b){a.bw.dv=YU(b);}
function ABp(){$rt_globals.console.info("FATAL: WebGL is not enabled in the browser");}
function AOE(a,b){var c,d;c=a.bw.cv.l3;d=new Pr;d.uY=a;d.uZ=b;return FN(Ff(c,d));}
function ANw(a,b,c){var d,e;d=new Kv;e=Jj(b);b=new MO;b.uE=c;KE(d,e);d.rp=b;return FN(Ff(a.bw.cv.jR,d));}
function APY(a,b){var c,d;c=a.bw.c;d=AQR(ABS(b),c.hb,c.c9);Gh(a.bw,d);}
function AHo(a,b){var c,d;c=a.bw;d=b.column-1|0;Ck(c,b.lineNumber-1|0,d,0);}
function ANP(a){UM(a.g1);}
function AIH(a,b){P_(a,b);}
function AID(a){return M1(Df(a.bw.c.f));}
function AJV(a){var b;b=a.bw.c;return Hz(b.r,b.o);}
function AHm(a,b){QL(a,b);}
function AM5(a,b,c){var d,e;d=new FT;e=Jj(b);b=new OM;b.rP=c;Xw(d,e,b);return FN(Ff(a.bw.cv.mA,d));}
function APx(a,b,c){var d,e;d=new JA;e=Jj(b);b=new WR;b.oM=c;KE(d,e);d.vi=b;return FN(Ff(a.bw.cv.mh,d));}
function AQA(a){return E7(a.bw.c);}
function AFp(a,b){var c;c=a.bw;b=Ce(b);return $rt_ustr(B_(c.c.jG,b));}
function AHT(a,b){var c;c=b;b=a.bw;c=c-1|0;if(c>0)DR(b,U(b.z,(c-(Cz(b)/(b.z*2|0)|0)|0)-1|0));}
function AKM(a){var b,c,d,e,f,g,h,i;b=a.g1;c=b.kY;if(c){$rt_globals.cancelAnimationFrame(c);b.kY=0;}d=$rt_globals.window;e=b.jT;d.removeEventListener("resize",Bm(e,"handleEvent"));b.ma.disconnect();f=b.e7;e=f.io;if(e!==null){e.hL=KV(e,e.hL);e.js=KV(e,e.js);e.jh=KV(e,e.jh);e.mo=0;e.ly=0;f.io=null;}Ip(f.cY);f=b.ha;if(f!==null){e=f.ld;if(e!==null){g=e.px.data;c=g.length;h=0;while(h<c){e=g[h];d=e.oq;i=e.os;e=e.or;d.removeEventListener($rt_ustr(i),Bm(e,"handleEvent"));h=h+1|0;}f.ld=null;}b.ha=null;}b=b.jg;c=0;while
(c<b.gi.length){b.gi[c].terminate();e=b.gi;f=null;c;e[c]=f;c=c+1|0;}}
function AGM(a,b){var c;b=Cv(b,"f");c=new MD;c.sn=b;return FN(Ff(a.bw.cv.l7,c));}
function ANq(a,b){Dy(a.bw,Ce(b),a.bw.dR);}
function AIu(a,b){var c;c=b;b=a.bw;Dy(b,b.fk,c);}
function APu(a,b){var c;if(b instanceof EU){Gh(a.bw,b.dp);return;}c=new BF;Bp(c,C(20));L(c);}
function AQM(a,b,c){var d,e,f,g;b=Ce(b);if(c===null)d=null;else{d=P(Bv,c.length);e=d.data;f=0;g=e.length;while(f<g){e[f]=Ce(c[f]);f=f+1|0;}}c=new Sr;c.rM=a;c.rN=b;c.rO=d;return new $rt_globals.Promise(Bm(c,"f"));}
function AMw(a,b,c){var d,e;d=new FT;e=Jj(b);b=new Wc;b.uc=c;Xw(d,e,b);return FN(Ff(a.bw.cv.kB,d));}
function AGY(a,b){P_(a,b.lineNumber);}
function AQm(a,b){Uu(a,b);}
var Qw=F(0);
function EU(){var a=this;B.call(a);a.dp=null;a.kc=null;a.k1=null;}
function E7(b){var c;c=b.lf;if(c!==null)return c;c=new EU;c.dp=b;b.lf=c;c.kc=null;c.k1=null;return c;}
function ARc(a){var b;b=a.kc;if(b===null)b=J$(a.dp.c9);return b;}
function AKb(a){var b;b=a.dp.f;FH(b.f2);DJ(b.cV);DJ(b.cM);b.iJ=0;b.b0=0;b.cx=XE(b);}
function ALP(a){var b;b=a.k1;if(b===null)b=$rt_ustr(a.dp.hb);return b;}
function AQ3(a,b){var c;c=b;return AEN(Pt(a.dp.f,c));}
function AMp(a){return M1(Df(a.dp.f));}
function AEP(a,b){var c,d,e,f,g,h;c=a.dp.f;d=b.lineNumber-1|0;e=b.column-1|0;f=0;g=0;a:{while(g<d){h=c.v.data;f=f+h[g].B|0;g=g+1|0;if(g>=h.length)break a;f=f+1|0;}}return f+e|0;}
var St=F(0);
function VI(){var a=this;B.call(a);a.dg=null;a.qa=null;}
function PL(a,b){var c,d;a:{c=Ce(b);d=(-1);switch(Gf(c)){case 3075958:if(!BE(c,C(15)))break a;d=2;break a;case 102970646:if(!BE(c,C(16)))break a;d=0;break a;case 1441429116:if(!BE(c,C(17)))break a;d=1;break a;default:}}b:{switch(d){case 0:break;case 1:LT(a.dg);break b;case 2:FS(a.dg);break b;default:$rt_globals.console.info("unknown theme: "+b);break b;}J4(a.dg);}}
function Qb(a,b){var c,d;c=a.dg;d=YU(b);c.x.dv=d;c.w.dv=d;}
function AP8(a){return E7(a.dg.w.c);}
function AMJ(a){UM(a.qa);}
function ALB(a,b){var c;if(!(b instanceof EU)){c=new BF;Bp(c,C(20));L(c);}c=a.dg;b=b.dp;Gh(c.w,b);}
function AGW(a,b){var c,d;c=a.dg;b=Ce(b);d=c.x;Dy(d,b,d.dR);c=c.w;Dy(c,b,c.dR);}
function AHZ(a,b){PL(a,b);}
function AOZ(a,b){var c,d;c=b;b=a.dg;d=b.x;Dy(d,d.fk,c);b=b.w;Dy(b,b.fk,c);}
function ALz(a,b){var c;if(!(b instanceof EU)){c=new BF;Bp(c,C(20));L(c);}c=a.dg;b=b.dp;Gh(c.x,b);}
function AIQ(a){return E7(a.dg.x.c);}
function AHF(a,b){Qb(a,b);}
var Tm=F(0);
var CU=F(0);
function AQr(b){var c;c=new Qv;c.px=b;return c;}
function C4(b,c){if(b!==null)b.eY();return c;}
var OY=F(0);
function H5(){var a=this;B.call(a);a.j4=0;a.lT=0;a.k0=0;}
var AUR=0;function Ip(a){AUR=AUR-1|0;}
function Kb(a,b,c){return GA(a,b)+c|0;}
function RE(){var a=this;H5.call(a);a.hE=null;a.de=null;a.m2=null;}
function Fu(a){var b,c,d;b=a.de;c=a.lT;d=a.k0;b.clearRect(0.0,0.0,c,d);}
function R_(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.de;d="center";c.textAlign=d;break a;case 2:c=a.de;d="right";c.textAlign=d;break a;default:break a;}d=a.de;c="left";d.textAlign=c;}}
function CM(a,b){MZ(a,b.nw);}
function MZ(a,b){var c;if(a.m2!==b){c=a.de;a.m2=b;c.font=b;}}
function Ev(a,b,c,d){var e,f,g;e=a.de;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function GA(a,b){var c;c=$rt_ustr(b);return a.de.measureText(c).width;}
function Yu(){var b;b=(YH()).getContext("2d").measureText("");return ("fontBoundingBoxAscent" in b?1:0)&&("fontBoundingBoxDescent" in b?1:0)?1:0;}
function AFC(){return {alpha:false};}
var AAE=F();
var Ho=F(0);
function Uh(){B.call(this);this.n$=null;}
function AIl(a,b,c){var d,e;b=Cv(b,"f");c=Cv(c,"f");d=a.n$;e=new PA;e.oc=b;e.od=d;Zj(e,c,ABL(d),Yg(d));}
var ABt=F(0);
function ABS(b){var c,d;c=b.length;d=new Nu;d.ua=b;return ACA(c,d);}
var Z0=F();
function YH(){return (Fe()).createElement("canvas");}
function GL(b,c){if((b?1:0)?1:0)c=Ce(b);return c;}
function AMC(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
function W5(){var a=this;B.call(a);a.c9=null;a.f=null;a.lf=null;a.hb=null;a.oW=null;a.gb=null;a.ie=null;a.dj=null;a.qv=null;a.o=0;a.r=0;a.gN=0;a.hi=null;a.fV=null;a.jG=null;a.kX=null;a.eb=0;a.gd=0;a.gt=0;a.hs=ACx;a.tA=ACx;a.uS=ACx;a.mU=0;a.xq=0;a.c5=0;a.hQ=0.0;a.eD=0;}
function AQR(a,b,c){var d=new W5();Yr(d,a,b,c);return d;}
function AR7(a,b,c){var d=new W5();ADJ(d,a,b,c);return d;}
function Yr(a,b,c,d){ADJ(a,b.oJ,c,d);}
function ADJ(a,b,c,d){var e,f,g,h,i;b=b.data;a.oW=AFv();e=new TX;e.et=P(Kq,16);e.eo=0;e.c_=(-1);a.gb=e;a.hi=null;a.fV=BA();a.jG=Ke();a.kX=BA();a.eb=1;a.gd=1;a.gt=1;a.c5=0;a.hQ=0.0;a.eD=0;a.c9=d;a.hb=c;c=new RC;f=b.length;g=P(C7,Z(1,f));if(!f)g.data[0]=Y4(C(3));h=g.data;i=0;while(i<f){h[i]=Y4(b[i]);i=i+1|0;}d=new Pu;e=new Kn;PQ(e);d.d_=e;c.dX=d;c.cV=Ke();c.cM=Ke();c.f2=BA();if(h.length){c.v=g;c.cx=XE(c);a.f=c;return;}c=new BF;X(c);L(c);}
function DT(a){var b;b=a.hb;if(b===null){b=a.c9;if(b===null)b=C(21);else{b=b.eK;b=b===null?C(21):!DH(b,C(22))&&!DH(b,C(23))&&!DH(b,C(24))&&!DH(b,C(25))&&!DH(b,C(26))&&!DH(b,C(27))?(DH(b,C(28))?C(29):DH(b,C(30))?C(31):!DH(b,C(32))?C(21):C(33)):C(34);}}return b;}
function FK(a){var b;b=a.c9;return b===null?null:b.gR;}
function GO(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.gd=3;a.gt=3;a.eb=3;c=CF(b[0]);d=Ei(b[1]);if((CF(b[2])).data[0]==4){e=GY(Ei(b[3]));Ee(a.jG,C(35),e);K6(a.f,c,d);}else if(b.length<5)K6(a.f,c,d);else{f=CF(b[3]);g=f.data;h=Ei(b[4]);N0(a.f,c,d,f,h,0);Ui(a,Io(f,g.length),LC(h));}if(a.eD){e=Ea(a);i=JS(Ec(),a.hs);j=new R;T(j);J(FV(J(J(j,e),C(36)),i),C(37));$rt_globals.console.info($rt_ustr(S(j)));}e=a.ie;if(e!==null)U1(e);}
function Ku(a){var b;SD(a,Dp(a.o,a.r),Gw(a.f,a.o,a.r));if(!(a.hi!==null&&!DG(a.fV))){b=a.r;if(b>0)SD(a,Dp(a.o,b-1|0),Gw(a.f,a.o,a.r-1|0));}}
function SD(a,b,c){var d,e,f,g,h,i,j,k,l;L0(a);d=B_(a.f.cV,c);if(d!==null)c=d;a:{e=B_(a.f.cM,c);if(e!==null){a.hi=Ld(a.f,c);c=BO(e);while(true){if(!BP(c))break a;f=BS(c);Bw(a.fV,Ld(a.f,f));}}}c=a.ie;if(c!==null){g=b.U;h=b.bb;b=c.cv;f=DT(c.c);e=FK(c.c);i=(Cf(b.mh)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(Jw(b,f,e)){b=b.vi;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.c;e=new Rn;e.n8=c;e.n4=f;e.n5=g;e.n6=h;c=c.hF;b=b.oM;f=E7(f);d=Hz(h,g);l=JD();b=b.provideDocumentHighlights(f,d,l);f=new S1;f.ss=e;f.sr=c;LR(b,
f,c);}}}
function L0(a){a.hi=null;FH(a.fV);}
function Ui(a,b,c){var d,e,f,g,h;if(a.dj!==null){a.uS=Ec();d=a.f.b0;e=a.dj;f=new Pi;f.rF=a;g=P(B,3);h=g.data;h[0]=b;h[1]=c;b=By(1);b.data[0]=d;h[2]=b;D9(e,f,C(38),g);}}
function P8(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.ie=b;a.dj=c;if(c===null){d=a.f.v.data;e=d.length;f=0;while(f<e){Tq(d[f]);f=f+1|0;}}else if(a.eb==1){a.hs=Ec();b=DT(a);e=BJ(b,C(29));f=BJ(b,C(33));d=Df(a.f);g=d.data.length;h=!e?5120:10240;i=Yf(b);if(f){j=a.dj;b=new Rv;b.na=a;k=P(B,2);l=k.data;l[0]=d;d=By(1);d.data[0]=i;l[1]=d;Lv(j,b,0,C(39),k);a.eb=2;}else if(g<=h)JZ(a,d,i);else if(!e){WA(a,LC(d),i);JZ(a,d,i);}else{WA(a,LC(d),i);m=LC(d);c=a.dj;j=new Qd;j.rH=a;k=P(B,2);l=k.data;l[0]=m;m=By(1);m.data[0]=i;l[1]=m;D9(c,
j,C(40),k);a.gd=2;JZ(a,d,i);}}}
function WA(a,b,c){var d,e;d=a.dj;e=new VP;e.r6=a;D9(d,e,C(41),G(B,[b,FI([c,250])]));a.gt=2;}
function JZ(a,b,c){var d,e,f,g;d=a.dj;e=new Nl;e.pn=a;f=P(B,2);g=f.data;g[0]=b;b=By(1);b.data[0]=c;g[1]=b;D9(d,e,C(39),f);a.eb=2;}
function Ea(a){var b;b=a.c9;return b===null?C(3):UZ(b);}
function Ik(a){var b,c,d,e,f,g;if(a.eD){b=Ea(a);c=new R;T(c);J(J(c,b),C(42));$rt_globals.console.info($rt_ustr(S(c)));}b=DT(a);if(b===null)d=null;else{a:{e=(-1);switch(Gf(b)){case -1655966961:if(!BE(b,C(33)))break a;e=3;break a;case 3401:if(!BE(b,C(31)))break a;e=2;break a;case 98723:if(!BE(b,C(34)))break a;e=1;break a;case 3254818:if(!BE(b,C(29)))break a;e=0;break a;case 3556653:if(!BE(b,C(21)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(43);break b;case 2:d=C(44);break b;case 3:d=C(45);break b;case 4:d
=C(46);break b;default:d=null;break b;}d=C(47);}}if(d===null)U1(a.ie);else{a.hs=Ec();if(!BE(d,C(45))){b=a.dj;f=new Tv;f.uF=a;g=P(B,1);g.data[0]=Df(a.f);D9(b,f,d,g);}else{b=a.dj;c=new Tw;c.tl=a;g=P(B,1);g.data[0]=Df(a.f);Lv(b,c,0,d,g);}}}
function ACo(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(a.eD){b=Ea(a);c=new R;T(c);J(J(c,b),C(48));$rt_globals.console.info($rt_ustr(S(c)));}b=DT(a);if(b!==null&&!BE(C(21),b)){if(BE(C(33),b)){Ik(a);G3(a.f);}else{c=a.f.cx;d=PD(c,c.cJ);if(d===null){LB(a);G3(a.f);return;}e=FI([CS(d),CQ(d),d.bL.eF]);f=Df(a.f);g=By(1);g.data[0]=Yf(b);c=a.f.dX;if(c.eO===null){h=By(0);i=B1(0);}else{j=AQ$(AGB(d.b2,c.d_),d);Nk(j);h=j.jU;i=j.kd;}k=a.f.b0;d=a.dj;c=new Mr;c.tU=a;l=P(B,6);m=l.data;m[0]=f;m[1]=g;m[2]=e;e=By(1);e.data[0]=k;m[3]=e;m[4]
=h;m[5]=i;D9(d,c,C(49),l);}}else G3(a.f);}
function LB(a){var b;b=AQ$(a.f.dX,null);Nk(b);Ui(a,b.jU,b.kd);}
var Yt=F();
function J$(b){var c,d,e;if(b===null)return null;c=b.uM;if(c!==null)return c;c=b.gR;d=b.h$;e=b.eK;b=b;return APL($rt_ustr(c),$rt_ustr(d),$rt_ustr(e),b);}
function ABM(b){var c;if(!((b?1:0)?1:0))return null;c=b.javaPeer;if(c instanceof Lc)return c;return AR5(GL(b.scheme,null),GL(b.authority,null),GL(b.path,null),b);}
function APL(b,c,d,e){return {scheme:b,authority:c,path:d,javaPeer:e};}
function XF(){B.call(this);this.nf=null;}
function AIe(a,b,c){var d,e;b=Cv(b,"f");c=Cv(c,"f");d=a.nf;e=new QT;e.u9=b;e.u$=d;Zj(e,c,ABL(d),Yg(d));}
var AD6=F();
var DK=F(0);
function Nu(){B.call(this);this.ua=null;}
function APS(a,b){var c,d;c=a.ua;d=b.bd;return NJ(c.charCodeAt(d)&65535);}
var Yd=F(0);
function ACA(b,c){var d,e,f,g,h,i,j,k,l,m;d=P(Bv,8);e=DX(8);f=B1(16);g=0;h=0;i=0;while(true){j=BD(i,b);if(j>0)break;k=j>=0?10:(c.gp(Ct(i))).kg;if(k==10){d=ACC(DV(f,0,g),d,h);e=UD(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Nx(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=ACC(DV(f,0,g),d,h);j=i+1|0;if(j<b&&(c.gp(Ct(j))).kg==10){e=UD(1,e,h);i=j;}else e=UD(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new Re;d=Zw(d,h);if(m.length!=h)e=LD(e,h);c.oJ=d;c.w$=e;return c;}
function AF3(b){var c,d;c=H(b);BM(b);d=new NL;d.sV=b;return ACA(c,d);}
var ACT=F();
function Ce(b){return $rt_str(b);}
function Lc(){var a=this;B.call(a);a.gR=null;a.h$=null;a.eK=null;a.uM=null;}
function AR5(a,b,c,d){var e=new Lc();Yo(e,a,b,c,d);return e;}
function Yo(a,b,c,d,e){a.gR=b;a.h$=c;a.eK=d;a.uM=e;}
function UZ(a){var b,c;b=a.eK;if(b===null)return C(3);c=AAu(b,C(50));return c==(-1)?a.eK:D3(a.eK,c+1|0);}
function AGH(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return BJ(a.gR,c.gR)&&BJ(a.h$,c.h$)&&BJ(a.eK,c.eK)?1:0;}return 0;}
function Re(){var a=this;B.call(a);a.oJ=null;a.w$=null;}
var Mf=F(0);
var SK=F(0);
var D6=F(0);
var YA=F();
function Fe(){return $rt_globals.window.document;}
function ALX(a){return a.E2();}
function AO3(a,b){return a.HO($rt_str(b));}
function AOL(a,b){a.Dd($rt_str(b));}
function AGN(a,b){return a.BW($rt_str(b));}
function AEx(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AG8(a){return a.HS();}
function AOW(a,b,c){return a.Gc($rt_str(b),$rt_str(c));}
function AJ2(a,b,c,d){a.xC($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function AFq(a){return a.DZ();}
function AM6(a){return !!a.Ip();}
function API(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function ALt(a){return a.DK();}
function AJw(a,b){a.F2($rt_str(b));}
function ALZ(a){return !!a.CS();}
function ARm(a){return a.H3();}
function AKH(a){return $rt_ustr(a.zl());}
function AFg(a,b){return a.Ef(b?1:0);}
function AQU(a){return a.Io();}
function AJt(a,b,c){return a.I0($rt_str(b),$rt_str(c));}
function ALk(a,b,c){return a.CP(b,c?1:0);}
function AQl(a,b,c){return !!a.Hi($rt_str(b),$rt_str(c));}
function AEA(a){return a.FP();}
function AJc(a){return $rt_ustr(a.JK());}
function AHj(a,b){return !!a.xX(b);}
function AIm(a,b){return a.KE($rt_str(b));}
function AJL(a,b,c){return a.EZ($rt_str(b),$rt_str(c));}
function AKN(a){return a.Ak();}
function AFs(a,b){return a.HZ($rt_str(b));}
function AIk(a){return $rt_ustr(a.zD());}
function ANx(a){a.CJ();}
function AEj(a,b){return a.I5($rt_str(b));}
function APy(a,b){return a.Ds($rt_str(b));}
function AFW(a,b){return a.CI($rt_str(b));}
function APB(a){return $rt_ustr(a.AD());}
function AF8(a,b,c){return a.E7(b,c);}
function ANk(a,b){return a.zk(b);}
function AN7(a){return a.GW();}
function AMu(a,b,c){a.xj($rt_str(b),Cv(c,"handleEvent"));}
function AL8(a,b,c){return a.AE(b,c);}
function APs(a){return !!a.He();}
function AQZ(a,b){return a.ES($rt_str(b));}
function AL_(a,b,c,d){a.wP($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function AHa(a){return a.G1();}
function AGp(a,b,c){return a.Ed($rt_str(b),$rt_str(c));}
function AE1(a){return $rt_ustr(a.A5());}
function AQO(a){return a.z6();}
function AMt(a){return a.Aq();}
function AEY(a){return a.Hj();}
function AMv(a,b,c){a.xU($rt_str(b),Cv(c,"handleEvent"));}
function AGZ(a,b){return a.Ju(b);}
function AIG(a,b){a.zI($rt_str(b));}
function AOd(a){return $rt_ustr(a.zs());}
var ACD=F(0);
function Vh(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C2(b,f+g|0);C_(c,0,d,f,g);return d;}
function Kr(b,c,d){C_(b,c,d,0,d.data.length);return d;}
function Rr(b,c,d){var e;if(c>0)C_(b,0,d,0,c);e=d.data.length;if(c<e)C_(b,c+1|0,d,c,e-c|0);return d;}
function AAn(b,c,d,e){var f;if(c>0)C_(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)C_(b,d,e,c,f-d|0);}return e;}
function GR(b){var c;c=new Vs;c.r3=b;return c;}
function Zw(b,c){if(b.data.length!=c)b=C2(b,c);return b;}
function ACC(b,c,d){var e;e=c.data.length;if(e==d)c=C2(c,e*2|0);c.data[d]=b;return c;}
function UD(b,c,d){var e;e=c.data.length;if(e==d)c=LD(c,e*2|0);c.data[d]=b;return c;}
function LC(b){return Nx(b,b.data.length);}
var YK=F();
function Nx(b,c){var d,e,f,g;b=b.data;d=B1(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function LD(b,c){var d,e,f,g;b=b.data;d=DX(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Io(b,c){var d,e,f,g;b=b.data;d=By(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C2(b,c){var d,e,f,g;d=b.data;e=AB$(HI(Bz(b)),c);f=Ba(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ZA(b){var c,d,e;if(b===null)return C(11);c=new R;T(c);CW(c,C(51));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)CW(c,C(52));J(c,e[d]);d=d+1|0;}CW(c,C(53));return S(c);}
function G6(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BF;X(f);L(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Zc(b,c,d,e){var f,g;if(c>d){e=new BF;X(e);L(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ZW(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AUS;e=P(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Ba(j,h+f|0);l=h+(2*f|0)|0;m=Ba(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.vI(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ABx(b,c){return TC(b,0,b.data.length,c);}
function TC(b,c,d,e){var f,g,h,i,j;f=BD(c,d);if(f>0){g=new BF;X(g);L(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function AC$(){var a=this;B.call(a);a.bx=null;a.bo=null;a.c0=0;}
function AFv(){var a=new AC$();AQ0(a);return a;}
function AGL(a){var b=new AC$();ALY(b,a);return b;}
function AQ0(a){a.bx=new Gz;a.bo=new Gz;}
function ALY(a,b){a.bx=new Gz;a.bo=new Gz;Hv(a,b);}
function Hv(a,b){T9(a.bx,b.bx);T9(a.bo,b.bo);a.c0=b.c0;}
function KW(a,b,c){B0(a.bo,b,c);if(!a.c0)B0(a.bx,b,c);}
function PJ(a,b){B0(a.bx,b,0);B0(a.bo,b+1|0,0);}
function Dz(a){if(RI(a.bx,a.bo)>0)return a.bo;return a.bx;}
function Fa(a){if(RI(a.bx,a.bo)<0)return a.bo;return a.bx;}
function ABF(a,b){var c,d,e,f;c=a.bx;d=c.D;e=a.bo;if(d==e.D&&c.Q==e.Q?1:0)return null;c=Dz(a);e=Fa(a);d=c.D;if(d<=b){f=BD(b,e.D);if(f<=0)return Cg(b<=d?c.Q:0,f>=0?e.Q:(-1));}return null;}
function C3(a){var b,c;b=a.bx;c=a.bo;return (b.D==c.D&&b.Q==c.Q?1:0)?0:1;}
function ACL(a,b){var c,d;if(!C3(a))return 0;c=Dz(a);d=Fa(a);return c.D<=b&&b<d.D?1:0;}
function TX(){var a=this;B.call(a);a.et=null;a.eo=0;a.c_=0;}
function Vf(a,b){var c,d,e;c=a.eo;d=a.et;if(c==d.data.length)a.et=C2(d,c+16|0);d=a.et.data;e=a.eo;a.eo=e+1|0;d[e]=b;}
function RK(a){var b,c,d;b=a.c_;c=a.eo-1|0;if(b==c)a.c_=b-1|0;d=a.et.data;a.eo=c;d[c]=null;}
var VK=F(0);
function AEb(a,b){var c;c=a.bY();while(c.cf()){b.j(c.bR());}}
var FF=F(0);
function UG(a){var b,c;b=new Sp;c=new Qj;c.pT=a;b.tY=c;return b;}
function AJ4(a,b){var c,d;c=a.bY();d=0;while(c.cf()){if(b.co(c.bR())){c.kW();d=1;}}return d;}
var Ey=F();
function DG(a){return a.cB()?0:1;}
function Hj(a,b){var c,d,e,f,g,h;c=b.data;d=a.k;e=c.length;if(e<d)b=AB$(HI(Bz(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BO(a);while(BP(f)){g=b.data;h=e+1|0;g[e]=BS(f);e=h;}return b;}
function AOy(a,b){var c;c=a.bY();while(c.cf()){if(BJ(c.bR(),b)){c.kW();return 1;}}return 0;}
function Gi(a,b){var c,d;c=0;d=b.bY();while(d.cf()){if(!a.sH(d.bR()))continue;c=1;}return c;}
var J7=F(0);
var IG=F(0);
function Em(){Ey.call(this);this.bO=0;}
function ANR(a,b){a.mB(a.cB(),b);return 1;}
function BO(a){var b;b=new Np;b.gD=a;b.mk=a.bO;b.iz=a.cB();b.fY=(-1);return b;}
function AMX(a,b,c){var d,e;if(b>=0&&b<=a.cB()){if(c.dP())return 0;d=c.bY();while(d.cf()){e=b+1|0;a.mB(b,d.bR());b=e;}return 1;}c=new BF;X(c);L(c);}
function APp(a,b,c){c=new D1;X(c);L(c);}
function JJ(a,b){var c,d;c=a.cB();d=0;while(true){if(d>=c)return (-1);if(BJ(b,a.lv(d)))break;d=d+1|0;}return d;}
function ALL(a,b){var c,d;if(!H7(b,IG))return 0;c=b;if(a.k!=c.k)return 0;d=0;while(d<c.k){if(!BJ(Bs(a,d),Bs(c,d)))return 0;d=d+1|0;}return 1;}
var DP=F(0);
var KP=F(0);
function YO(){var a=this;Em.call(a);a.ck=null;a.k=0;}
function BA(){var a=new YO();AIg(a);return a;}
function AIg(a){a.ck=P(B,10);}
function IR(a,b){var c,d;c=a.ck.data.length;if(c<b){d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.ck=C2(a.ck,d);}}
function Bs(a,b){IE(a,b);return a.ck.data[b];}
function AMF(a){return a.k;}
function Bw(a,b){var c,d;IR(a,a.k+1|0);c=a.ck.data;d=a.k;a.k=d+1|0;c[d]=b;a.bO=a.bO+1|0;return 1;}
function RF(a,b,c){var d,e,f;Pq(a,b);IR(a,a.k+1|0);d=a.k;e=d;while(e>b){f=a.ck.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.ck.data[b]=c;a.k=d+1|0;a.bO=a.bO+1|0;}
function Fj(a,b){var c,d,e,f;IE(a,b);c=a.ck.data;d=c[b];e=a.k-1|0;a.k=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.bO=a.bO+1|0;return d;}
function Vq(a,b){var c;c=JJ(a,b);if(c<0)return 0;Fj(a,c);return 1;}
function FH(a){Zc(a.ck,0,a.k,null);a.k=0;a.bO=a.bO+1|0;}
function Zd(a,b,c){var d,e,f,g,h,i;Pq(a,b);if(c.dP())return 0;IR(a,a.k+c.cB()|0);d=c.cB();e=a.k;f=e-1|0;while(f>=b){g=a.ck.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.k=e+d|0;h=c.bY();i=0;while(i<d){g=a.ck.data;e=b+1|0;g[b]=h.bR();i=i+1|0;b=e;}a.bO=a.bO+1|0;return 1;}
function IE(a,b){var c;if(b>=0&&b<a.k)return;c=new BV;X(c);L(c);}
function Pq(a,b){var c;if(b>=0&&b<=a.k)return;c=new BV;X(c);L(c);}
function DY(a,b){var c;c=0;while(c<a.k){b.j(a.ck.data[c]);c=c+1|0;}}
var Kt=F(0);
function DB(){var a=this;B.call(a);a.kj=null;a.kt=null;}
function JY(){var a=this;DB.call(a);a.cA=0;a.bX=null;a.cy=0;a.wn=0.0;a.kR=0;}
function Ke(){var a=new JY();PQ(a);return a;}
function AIO(a,b){return P(Gc,b);}
function PQ(a){var b;b=ADx(16);a.cA=0;a.bX=P(Gc,b);a.wn=0.75;Um(a);}
function ADx(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function DJ(a){var b;if(a.cA>0){a.cA=0;b=a.bX;Zc(b,0,b.data.length,null);a.cy=a.cy+1|0;}}
function Um(a){a.kR=a.bX.data.length*a.wn|0;}
function I4(a,b){return S3(a,b)===null?0:1;}
function UH(a){var b;b=new Un;b.ru=a;return b;}
function B_(a,b){var c;c=S3(a,b);if(c===null)return null;return c.cF;}
function S3(a,b){var c,d;if(b===null)c=Sf(a);else{d=b.lY();c=Qs(a,b,d&(a.bX.data.length-1|0),d);}return c;}
function Qs(a,b,c,d){var e;e=a.bX.data[c];while(e!==null&&!(e.iU==d&&YC(b,e.cn))){e=e.cu;}return e;}
function Sf(a){var b;b=a.bX.data[0];while(b!==null&&b.cn!==null){b=b.cu;}return b;}
function Jn(a){var b;if(a.kj===null){b=new Pf;b.gE=a;a.kj=b;}return a.kj;}
function Ee(a,b,c){var d,e,f,g;if(b===null){d=Sf(a);if(d===null){a.cy=a.cy+1|0;d=Ub(a,null,0,0);e=a.cA+1|0;a.cA=e;if(e>a.kR)Uv(a);}}else{e=b.lY();f=e&(a.bX.data.length-1|0);d=Qs(a,b,f,e);if(d===null){a.cy=a.cy+1|0;d=Ub(a,b,f,e);e=a.cA+1|0;a.cA=e;if(e>a.kR)Uv(a);}}g=d.cF;d.cF=c;return g;}
function Ub(a,b,c,d){var e,f;e=new Gc;XB(e,b,null);e.iU=d;f=a.bX.data;e.cu=f[c];f[c]=e;return e;}
function AAg(a,b){var c,d,e,f,g,h,i,j;c=ADx(!b?1:b<<1);d=P(Gc,c);e=d.data;f=0;b=c-1|0;while(true){g=a.bX.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.iU&b;j=h.cu;h.cu=e[i];e[i]=h;h=j;}f=f+1|0;}a.bX=d;Um(a);}
function Uv(a){AAg(a,a.bX.data.length);}
function YC(b,c){return b!==c&&!b.bu(c)?0:1;}
function RC(){var a=this;B.call(a);a.v=null;a.cx=null;a.dX=null;a.cV=null;a.cM=null;a.f2=null;a.iA=null;a.b0=0;a.iJ=0;a.s0=0.0;}
function XE(a){var b;b=UT(a);return ACv(AP5(Ja(0,b,0),null,null));}
function BK(a,b){return a.v.data[b];}
function Cb(a){return a.v.data.length;}
function UT(a){return Ez(a,Cb(a));}
function Fl(a,b){return a.v.data[b].B;}
function ACV(a,b,c){var d,e,f,g,h;d=a.v;e=d.data;f=e[b];d=C2(d,e.length+1|0);e=d.data;a.v=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Dq(P(B$,0));a.v.data[b+1|0]=f;}else if(c==f.B){e[b]=f;e[b+1|0]=Dq(P(B$,0));}else{e=(Hr(f,c)).data;d=a.v.data;d[b]=e[0];d[b+1|0]=e[1];}E_(a,b,c,0,C(54));}
function KF(a,b){var c,d,e,f,g,h,i;c=a.v.data;d=c[b];e=c[b+1|0];f=Dq(Vh(d.l,e.l));g=a.v;h=g.data.length;if(b<h&&b>=0){i=P(C7,h-1|0);c=i.data;Rr(g,b,i);c[b]=f;a.v=i;return;}d=new Bt;X(d);L(d);}
function MF(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.v.data;if(!(c<d[b].B?0:1)){d=(BK(a,b)).l.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<H(h.q)){f=I(h.q,g);break a;}g=g-H(h.q)|0;f=f+1|0;}f=0;}F7();h=new Bv;d=B1(1);d.data[0]=f;IK(h,d);E_(a,b,c,1,h);h=a.v.data[b];i=h.l;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=H(d[j].q);if(c<b)break;c=c-b|0;j=j+1|0;}}if(H(d[j].q)==1)h.l=Rr(i,j,P(B$,e-1|0));else{k=d[j];if(c<=0)l=DA(D3(k.q,1),k.bP,k.bJ);else if(c>=(H(k.q)-1|0)){l=new B$;m=k.q;Tu(l,B9(m,0,H(m)-
1|0),k.bP,k.bJ);}else{i=B1(H(k.q)-1|0);n=i.data;b=0;while(b<c){n[b]=I(k.q,b);b=b+1|0;}b=n.length;while(c<b){m=k.q;e=c+1|0;n[c]=I(m,e);c=e;}l=DA(GY(i),k.bP,k.bJ);}d[j]=l;}h.B=h.B-1|0;D_(h);}else if(b!=(d.length-1|0)){E_(a,b,c,1,C(54));KF(a,b);}}
function XK(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Si(a.v.data[b],c,e[0]);return;}g=f-1|0;d=(Hr(a.v.data[b],c)).data;h=d[0];i=d[1];d=a.v;j=C2(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.l.data;f=l.length;c=!f?0:H(l[f-1|0].q);L$(h,h.l.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Eu(e[m])?Y4(e[m]):Dq(P(B$,0));d[b+m|0]=k;m=m+1|0;}L$(i,0,0,e[g]);d[b+g|0]=i;a.v=j;}
function VG(a,b){var c,d,e,f,g,h,i;c=Dz(b);d=Fa(b);e=c.D;if(e==d.D)return B9(EJ(a.v.data[e]),c.Q,d.Q);f=new R;T(f);b=a.v.data[c.D];e=c.Q;BX(CW(f,D3(EJ(b),e)),10);g=a.v.data;e=c.D+1|0;h=d.D;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;X_(CW(f,EJ(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.v.data[d.D];h=d.Q;CW(f,B9(EJ(b),0,h));return S(f);}b=new V8;X(b);L(b);}
function MR(a,b,c){var d;V0(a,b);d=Dz(b);E_(a,d.D,d.Q,1,c);}
function V0(a,b){var c,d,e,f,g,h,i;a:{c=Dz(b);d=Fa(b);e=c.D;if(e==d.D)FW(a.v.data[e],c.Q,d.Q);else{b=a.v.data[e];FW(b,c.Q,b.B);FW(a.v.data[d.D],0,d.Q);e=c.D+1|0;f=d.D;g=a.v;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=P(C7,(h-f|0)+e|0);AAn(g,e,f,i);a.v=i;KF(a,c.D);break a;}b=new Bt;X(b);L(b);}b=new Bt;X(b);L(b);}}}
function Gw(a,b,c){return Dp(b,Fz(BK(a,b),c));}
function Wu(a,b){var c,d,e;c=0;d=0;while(true){e=a.v.data.length;if(c>=e)break;if((d+(BK(a,c)).B|0)>=b)return Cg(c,b-d|0);d=d+((BK(a,c)).B+1|0)|0;c=c+1|0;}return Cg(e,0);}
function Ez(a,b){var c,d,e;c=0;d=a.v.data.length;e=0;while(e<b){c=c+Fl(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Ld(a,b){return Lw(BK(a,b.U),b.bb);}
function Df(a){var b,c,d,e,f,g,h,i,j;b=B1(UT(a));c=b.data;d=a.v.data.length;e=0;f=0;while(e<d){g=a.v.data[e].l.data;h=g.length;i=0;while(i<h){j=g[i].q;P3(j,0,H(j),b,f);f=f+H(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function E_(a,b,c,d,e){var f,g,h,i,j,k;a:{a.b0=a.b0+1|0;f=a.f2;g=P(Gn,1);h=new Gn;h.dI=b;h.dU=c;i=LE(e,C(54),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=Cg(b,c+H(i[0])|0);break a;}k=Cg((b+j|0)-1|0,H(i[j-1|0]));break a;}}k=Cg(b,c);}i=g.data;h.k4=k;h.mb=d;h.fp=e;i[0]=h;Bw(f,g);JC(a,b,c,d,e);}
function JC(a,b,c,d,e){var f;f=Ez(a,b)+c|0;if(!d){Oz(a.cx,f,H(e));Uf(a.dX,f,H(e));}else{V_(a.cx,f,H(e));Ne(a.dX,f,H(e));}}
function M7(a,b){var c,d,e;c=LE(b.fp,C(54),(-1));if(b.mb){XK(a,b.dI,b.dU,c);Oz(a.cx,Ez(a,b.dI)+b.dU|0,H(b.fp));Uf(a.dX,Ez(a,b.dI)+b.dU|0,H(b.fp));}else{c=c.data;d=AFv();B0(d.bx,b.dI,b.dU);e=c.length;if(e==1)B0(d.bo,b.dI,b.dU+H(c[0])|0);else B0(d.bo,(b.dI+e|0)-1|0,H(c[e-1|0]));V0(a,d);V_(a.cx,Ez(a,b.dI)+b.dU|0,H(b.fp));Ne(a.dX,Ez(a,b.dI)+b.dU|0,H(b.fp));}return b.k4;}
function TG(a){return a.iJ==a.b0?0:1;}
function G3(a){a.iJ=a.b0;}
function Pt(a,b){var c,d,e,f,g;c=0;d=0;while(true){e=a.v.data;f=e.length;if(d>=f)break;g=e[d].B;if(b<=(c+g|0))return Dp(d,b-c|0);c=c+(g+1|0)|0;d=d+1|0;}return Dp(f,0);}
function Js(a){var b,c,d;a.iA=By(a.v.data.length+1|0);b=0;while(b<a.v.data.length){c=a.iA.data;d=b+1|0;c[d]=(c[b]+(BK(a,b)).B|0)+1|0;b=d;}}
function Xm(a,b){var c,d,e;c=a.iA;if(c===null)return Pt(a,b);d=ABx(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;e=Dp(d,b-(d<0?0:a.iA.data[d])|0);if(e.bb>=(BK(a,e.U)).B){e.U=e.U+1|0;e.bb=0;}return e;}
var Pn=F(0);
var RA=F(0);
var Rk=F(0);
var Tj=F(0);
var WN=F(0);
var Ul=F(0);
var Zp=F();
function AMz(a,b,c){a.xU($rt_str(b),Cv(c,"handleEvent"));}
function AKk(a,b,c){a.xj($rt_str(b),Cv(c,"handleEvent"));}
function AJe(a,b,c,d){a.wP($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function AFy(a,b){return !!a.xX(b);}
function AHp(a,b,c,d){a.xC($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
var AAD=F();
function YB(b){return Math.log(b);}
function AD5(b,c){return ALb(b,c);}
function ALb(b,c){return Math.pow(b,c);}
function Ba(b,c){if(b<c)c=b;return c;}
function Z(b,c){if(b>c)c=b;return c;}
function AQo(b,c){return Math.max(b,c);}
function Gz(){var a=this;B.call(a);a.D=0;a.Q=0;}
function B0(a,b,c){a.D=b;a.Q=c;}
function T9(a,b){a.D=b.D;a.Q=b.Q;}
function RI(a,b){var c;c=BD(a.D,b.D);if(c)return c;return BD(a.Q,b.Q);}
function Kq(){var a=this;B.call(a);a.la=null;a.jM=null;}
function Lk(a){return a.la.U;}
function I_(a){return a.la.bb;}
function C7(){var a=this;B.call(a);a.l=null;a.B=0;a.fm=null;a.ed=null;a.db=null;a.gz=null;a.fx=0;a.gB=0;a.g0=0;}
var AUT=0;var AUU=0;var AUV=0;function Y4(a){var b=new C7();ABY(b,a);return b;}
function Dq(a){var b=new C7();QU(b,a);return b;}
function ABY(a,b){var c;c=P(B$,1);c.data[0]=ZP(b);QU(a,c);}
function QU(a,b){var c,d,e,f;c=b.data;a.l=b;d=0;e=c.length;f=0;while(f<e){d=d+H(c[f].q)|0;f=f+1|0;}a.B=d;D_(a);}
function G0(a){return a.l.data.length;}
function KA(a,b){return a.l.data[b];}
function Fz(a,b){return RM(a,GK(a,b));}
function RM(a,b){return b<=0?0:a.db.data[b-1|0];}
function GK(a,b){var c,d,e,f;c=a.l.data.length;if(!c)return (-1);if(!(a.db!==null&&!a.g0)){Wv(a);d=0;e=0;f=a.l.data.length;while(d<f){e=e+H(a.l.data[d].q)|0;a.db.data[d]=e;d=d+1|0;}a.g0=0;}d=TC(a.db,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Lw(a,b){var c;c=a.l.data;if(!c.length)return null;return c[GK(a,b)];}
function FW(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.B){a.l=P(B$,0);D_(a);a.B=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.l.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=H(g[e].q);i=H(a.l.data[f].q);j=BD(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.l.data[f];if(!b&&c==H(k.q)?1:0){g=a.l;a.l=Rr(g,e,P(B$,g.data.length-1|0));a.B=a.B-d|0;D_(a);return;}a.l.data[e]=DA(Hi(B9(k.q,0,b),D3(k.q,c)),k.bP,k.bJ);}else{g=a.l.data;l=g[e];m=g[f];if(b){if(b!=
H(l.q))a.l.data[e]=DA(B9(l.q,0,b),l.bP,l.bJ);e=e+1|0;}if(c==H(m.q))f=f+1|0;else if(c)a.l.data[f]=DA(D3(m.q,c),m.bP,m.bJ);g=a.l;a.l=AAn(g,e,f,P(B$,(g.data.length-f|0)+e|0));}a.B=a.B-d|0;D_(a);}
function Hr(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return G(C7,[Dq(P(B$,0)),a]);if(b>=a.B)return G(C7,[a,Dq(P(B$,0))]);c=a.l;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=H(e[d].q);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return G(C7,[Dq(Kr(c,0,P(B$,d))),Dq(Kr(c,d,P(B$,f-d|0)))]);h=e[d];e=Kr(c,0,P(B$,d+1|0));i=e.data;j=Kr(c,d,P(B$,f-d|0));c=j.data;i[d]=DA(B9(h.q,0,b),h.bP,h.bJ);c[0]=DA(D3(h.q,b),h.bP,h.bJ);return G(C7,[Dq(e),Dq(j)]);}
function Si(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.l.data;if(e>=f.length)break a;g=H(f[d].q);if(b<=g)break;b=b-g|0;d=e;}}L$(a,d,b,c);}
function L$(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Eu(d))return;e=a.l;f=e.data;g=f.length;if(!g){h=P(B$,1);h.data[0]=ZP(d);a.l=h;}else if(!b&&!c){h=P(B$,g+1|0);f=h.data;C_(e,0,h,1,g);f[0]=ZP(d);a.l=h;}else{i=f[b];if(c<=0)j=DA(Hi(d,i.q),i.bP,i.bJ);else if(c>=H(i.q))j=DA(Hi(i.q,d),i.bP,i.bJ);else{k=H(d);l=k+c|0;m=H(i.q)-c|0;e=B1(H(i.q)+k|0);h=e.data;n=0;while(n<c){h[n]=I(i.q,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=I(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=I(i.q,g+c|0);g=g+1|0;}j=DA(GY(e),i.bP,i.bJ);}f[b]=j;}a.B=a.B+
H(d)|0;D_(a);}
function Nj(a){var b,c,d,e,f,g;b=0;c=a.l.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Ls(f)){if(I(f.q,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function JX(a,b,c){var d,e,f,g,h,i,j;d=a.l.data.length;e=a.fm;if(!(e!==null&&e.data.length>=d)){a.fm=AEs(d);a.ed=By(d);a.fx=1;}Wv(a);if(!a.fx)AUU=AUU+1|0;else{f=0;g=0.0;AUT=AUT+1|0;h=0;while(h<d){i=c.data;j=a.l.data[h];f=f+H(j.q)|0;a.db.data[h]=f;CM(b,i[IM(j)]);g=g+GA(b,j.q);a.fm.data[h]=g;a.ed.data[h]=g+0.5|0;h=h+1|0;}a.B=f;a.fx=0;a.g0=0;}}
function Wv(a){var b;b=a.db;if(!(b!==null&&b.data.length>=a.l.data.length)){a.db=By(a.l.data.length);a.g0=1;}}
function Tq(a){a.fx=1;a.gz=null;}
function D_(a){Tq(a);a.gB=1;a.g0=1;}
function R$(a,b,c,d){var e,f,g,h,i,j,k;if(a.gz===null)a.gz=P($rt_arraycls($rt_intcls()),a.l.data.length);e=a.gz.data[d];if(e===null){e=c.data;f=a.l.data[d];CM(b,e[IM(f)]);f=f.q;e=By(H(f)-1|0);c=E4(f);g=!d?0.0:a.fm.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;L8(f,c,0,k);h[i]=g+GA(b,f)+0.5|0;i=k;}a.gz.data[d]=e;}return e;}
function F2(a,b,c,d){var e,f,g,h,i;if(a.l.data.length&&b){if(!(!a.fx&&a.ed!==null))JX(a,c,d);if(b>=a.B)return a.ed.data[a.l.data.length-1|0];e=0;f=0;a:{while(true){g=a.l.data;if(f>=g.length)break a;h=e+H(g[f].q)|0;i=BD(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.ed.data[f];}return (R$(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function EA(a){var b,c,d;a:{b=a.l.data.length;if(b){c=a.ed.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Gj(a,b){var c;if(b>=a.B)return b+1|0;c=GK(a,b);return a.db.data[c];}
function EJ(a){var b,c,d,e;b=new R;FB(b,a.B);c=a.l.data;d=c.length;e=0;while(e<d){CW(b,c[e].q);e=e+1|0;}return S(b);}
function AAk(){AUV=0;}
function Pu(){var a=this;B.call(a);a.eO=null;a.d_=null;}
function AGB(a,b){var c=new Pu();AIt(c,a,b);return c;}
function AIt(a,b,c){a.eO=b;a.d_=c;}
function Uf(a,b,c){var d;d=a.eO;if(d===null)return;QO(a,d,b,c);}
function Ne(a,b,c){var d;d=a.eO;if(d===null)return;TL(a,d,b,c);}
function QO(a,b,c,d){var e,f,g,h;e=b.dQ.bY();while(e.cf()){Xs(a,e.bR(),c,d);}e=b.eg.bY();while(e.cf()){f=e.bR();g=new To;g.q9=a;DU(a,g,f,c,d);}h=b.fQ.bY();while(h.cf()){e=h.bR();Xs(a,e.id,c,d);f=new Tp;f.nl=a;DU(a,f,e.i9,c,d);}b=b.cg.bY();while(b.cf()){QO(a,b.bR(),c,d);}}
function Xs(a,b,c,d){I6(a,b.dS,c,d);}
function DU(a,b,c,d,e){var f,g;a:{if(c instanceof FR){f=c.gg;g=new XH;g.om=a;g.ok=b;g.oj=d;g.ol=e;DY(f,g);}else{if(!(c instanceof H$)){if(!(c instanceof It))break a;f=c;DU(a,b,f.hj,d,e);DU(a,b,f.gv,d,e);return;}g=c.gs;f=new XI;f.wl=a;f.wk=b;f.wj=d;f.wi=e;DY(g,f);}}if(c!==null){c=c.eJ;if(c!==null)b.iO(c,Ct(d),Ct(e));}}
function I6(a,b,c,d){var e;e=b.c4;if(e>=c)b.c4=e+d|0;}
function TL(a,b,c,d){var e,f,g,h;e=b.dQ.bY();while(e.cf()){HL(a,(e.bR()).dS,c,d);}e=b.eg.bY();while(e.cf()){f=e.bR();g=new Sm;g.uq=a;DU(a,g,f,c,d);}h=b.fQ.bY();while(h.cf()){e=h.bR();HL(a,e.id.dS,c,d);f=new Sn;f.tz=a;DU(a,f,e.i9,c,d);}b.dQ.lw(new Sl);b.eg.lw(new Sk);b=b.cg.bY();while(b.cf()){TL(a,b.bR(),c,d);}}
function HL(a,b,c,d){var e;e=b.c4;if(e>=c)b.c4=e-d|0;}
var BF=F(Bt);
var XS=F(Bt);
function B$(){var a=this;B.call(a);a.q=null;a.bP=0;a.bJ=0;}
function ZP(a){var b=new B$();AHC(b,a);return b;}
function DA(a,b,c){var d=new B$();Tu(d,a,b,c);return d;}
function AHC(a,b){Tu(a,b,0,0);}
function Tu(a,b,c,d){a.q=b;a.bP=c;a.bJ=d;}
function IM(a){return a.bJ&3;}
function GW(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Ls(a){return H(a.q);}
var Kn=F(JY);
function RL(){var a=this;B.call(a);a.cJ=null;a.d6=0;}
var AUW=null;function ACv(a){var b=new RL();ADc(b,a);return b;}
function ADc(a,b){a.d6=0;a.cJ=b;}
function PD(a,b){var c;if(b.d2)return b;b=BO(b.Z);while(true){if(!BP(b))return null;c=PD(a,BS(b));if(c!==null)break;}return c;}
function NF(a,b,c){var d,e,f,g;d=J6(a,a.cJ,b);if(d===null)return;b=c.b2;e=b===null?AUX:b.cg;f=c.Z;c=a.cJ;if(d===c){if(c.b2===null)c.b2=b;b=new Se;b.q2=a;DY(f,b);b=new Sc;b.un=a;e.el(b);b=a.cJ;b.Z=f;b.b2.cg=e;b.d2=0;return;}if(!DG(f)){c=d.ge;if(c!==null){b=new Oo;b.ou=c;DY(f,b);g=JJ(c.Z,d);if(g==(-1))Gi(c.Z,f);else{Fj(c.Z,g);Zd(c.Z,g,f);}}}b=d.b2;if(b!==null){b=b.f0;c=new Ss;c.qJ=b;e.el(c);g=JJ(b.cg,d.b2);if(g==(-1))Gi(b.cg,e);else{b.cg.mp(g);b.cg.tr(g,e);}}}
function J6(a,b,c){var d,e,f,g;d=b.bL;if(d.bK==c.bK&&d.bN==c.bN?1:0){d=BO(b.Z);while(BP(d)){e=J6(a,BS(d),c);if(e!==null)return e;}return b;}b=BO(b.Z);while(true){if(!BP(b))return null;d=BS(b);f=c.bK;g=c.bN;e=d.bL;if(e.bK<=f&&g<=e.bN?1:0){e=J6(a,d,c);if(e!==null)break;}}return e;}
function Tl(a,b,c){Bw(c,b.bL);b=BO(b.Z);while(BP(b)){Tl(a,BS(b),c);}}
function Oz(a,b,c){a.d6=0;J5(a,a.cJ,b,c);}
function J5(a,b,c,d){var e;if(CQ(b)<c)return;a:{if(CS(b)>c){K5(b,d);GU(b,d);b=BO(b.Z);while(BP(b)){J5(a,BS(b),c,d);}}else{if(!IO(b,c)){if(a.d6)break a;if(CQ(b)!=c)break a;}GU(b,d);if(CS(b)==c&&a.d6)K5(b,d);e=BO(b.Z);while(BP(e)){J5(a,BS(e),c,d);}if(!a.d6){b.d2=1;a.d6=1;}}}}
function V_(a,b,c){a.d6=0;IU(a,a.cJ,b,c);}
function IU(a,b,c,d){var e,f,g,h,i,j;if(CQ(b)<c)return;e=CS(b);f=c+d|0;if(e>f){e= -d|0;K5(b,e);GU(b,e);g=BO(b.Z);while(BP(g)){IU(a,BS(g),c,d);}b.Z=MN(a,b.Z);}else{h=b.bL;if(c<=h.bK&&h.bN<=f?1:0){if(b===a.cJ){Lj(b,0);IS(b,0);h=b.b2;if(h!==null)h.cg.hT();}else{Lj(b,(-1));IS(b,(-1));h=b.b2;if(h!==null){W6(h);b.b2=null;}}FH(b.Z);}else{e=IO(b,c);f=IO(b,f);if(e&&f)GU(b, -d|0);else if(e)IS(b,c);else{if(!f)return;Lj(b,c);GU(b, -d|0);}h=BO(b.Z);while(BP(h)){IU(a,BS(h),c,d);}h=UG(b.Z);g=OV(0);i=new RT;j=new US;j.y6=i;j.iX
=g;while(Uk(h,j)){}if(!j.iX.mt&&!a.d6)b.d2=1;else a.d6=1;b.Z=MN(a,b.Z);}}}
function MN(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BA();d=null;e=AUW;f=b.ck;g=b.k;if(e===null)e=AUS;h=P(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}ZW(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.bO=b.bO+1|0;b=BO(b);while(BP(b)){m=BS(b);if(CS(m)==CQ(m))continue;if(!m.d2){if(d!==null){Bw(c,d);d=null;}Bw(c,m);}else if(d===null)d=m;else{n=AP5(Ja(Ba(CS(d),CS(m)),Z(CQ(d),CQ(m)),d.bL.eF),d.ge,d.b2);n.d2=1;d=m.b2;if(d===null)d=n;else{W6(d);d=n;}}}if(d!==null)Bw(c,d);return c;}
function Wn(a,b,c,d){var e,f,g,h,i,j,k,l;if((CQ(c)-CS(c)|0)<43)e=B9(d,CS(c),CQ(c));else{e=B9(d,CS(c),CS(c)+20|0);f=B9(d,CQ(c)-20|0,CQ(c));g=new R;T(g);J(J(J(g,e),C(55)),f);e=S(g);}e=UL(e,C(54),C(56));f=EW();g=c.bL;h=g.bK;i=g.bN;j=g.eF;k=new R;T(k);BX(k,40);BX(Bl(J(Bl(J(Bl(k,h),C(52)),i),C(52)),j),41);k=S(k);h=c.d2;g=new R;T(g);I7(J(J(g,k),C(52)),h);l=S(g);g=new R;T(g);k=Bl(g,b);BX(k,32);k=J(k,l);BX(k,9);J(k,e);Cn(f,S(g));c=BO(c.Z);h=b+1|0;while(BP(c)){Wn(a,h,BS(c),d);}}
function ADq(){AUW=new VN;}
function ADC(){var a=this;B.call(a);a.bK=0;a.bN=0;a.eF=0;}
function Ja(a,b,c){var d=new ADC();AHv(d,a,b,c);return d;}
function AHv(a,b,c,d){a.bK=b;a.bN=c;a.eF=d;}
function AOT(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return a.bK==c.bK&&a.bN==c.bN&&a.eF==c.eF?1:0;}return 0;}
function AGc(a,b){var c;b=b;c=BD(a.bK,b.bK);if(!c)c=BD(b.bN,a.bN);return c;}
var VN=F();
function AKO(a,b,c){var d;b=b;c=c;b=b.bL;c=c.bL;d=BD(b.bK,c.bK);if(!d)d=BD(c.bN,b.bN);return d;}
function QZ(){var a=this;B.call(a);a.bL=null;a.ge=null;a.Z=null;a.b2=null;a.d2=0;}
function AP5(a,b,c){var d=new QZ();ACu(d,a,b,c);return d;}
function ACu(a,b,c,d){a.d2=0;a.bL=b;a.ge=c;a.Z=BA();a.b2=d;}
function ADH(b){return Rc(b,null);}
function Rc(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=V(b);e=V(b);f=V(b);g=V(b);h=V(b);i=Ja(d,e,f);j=new QZ;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}ACu(j,i,null,l);m=0;while(m<g){l=Rc(b,c);l.ge=j;Bw(j.Z,l);m=m+1|0;}return j;}
function YG(b,c,d){var e,f,g,h,i;a:{e=b.bL;f=b.Z;g=e.bK;h=e.bN;i=e.eF;Bi(c,g);F$(c,h,i);Bi(c,f.k);if(d!==null){e=b.b2;if(e!==null&&VB(d,e)){g=(LH(d,b.b2)).bd;break a;}}g=(-1);}Bi(c,g);b=BO(f);while(BP(b)){YG(BS(b),c,d);}}
function CS(a){return a.bL.bK;}
function CQ(a){return a.bL.bN;}
function Lj(a,b){a.bL.bK=b;}
function IS(a,b){a.bL.bN=b;}
function K5(a,b){var c;c=a.bL;c.bK=c.bK+b|0;}
function GU(a,b){var c;c=a.bL;c.bN=c.bN+b|0;}
function IO(a,b){return CS(a)<=b&&b<CQ(a)?1:0;}
function AF1(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return BJ(a.bL,c.bL)&&BJ(a.Z,c.Z)?1:0;}return 0;}
var GX=F(0);
function F4(){var a=this;B.call(a);a.cn=null;a.cF=null;}
function AUY(a,b){var c=new F4();XB(c,a,b);return c;}
function XB(a,b,c){a.cn=b;a.cF=c;}
function AGV(a,b){var c,d;if(a===b)return 1;if(!H7(b,GX))return 0;a:{b:{c:{d:{c=b;b=a.cn;if(b!==null){if(!b.bu(c.cn))break c;else break d;}if(c.cn!==null)break c;}b=a.cF;if(b!==null){if(!b.bu(c.cF))break c;else break b;}if(c.cF===null)break b;}d=0;break a;}d=1;}return d;}
function Gc(){var a=this;F4.call(a);a.iU=0;a.cu=null;}
function WS(){var a=this;B.call(a);a.kB=null;a.mA=null;a.jR=null;a.mh=null;a.l7=null;a.l3=null;}
function LK(a,b,c){return Q9(a,Cf(a.kB),b,c);}
function QI(a,b,c){return Q9(a,Cf(a.mA),b,c);}
function Q9(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(Jw(g,c,d))return g.rT;f=f+1|0;}return null;}
function TR(a,b,c){var d,e,f,g;d=(Cf(a.jR)).data;e=d.length;f=0;while(f<e){g=d[f];if(Jw(g,b,c))return g.rp;f=f+1|0;}return null;}
var Kl=F(0);
function Pr(){var a=this;B.call(a);a.uY=null;a.uZ=null;}
function EN(){B.call(this);this.pq=null;}
function AUZ(a){var b=new EN();KE(b,a);return b;}
function KE(a,b){a.pq=b;}
function Jw(a,b,c){var d,e,f,g;d=a.pq.data;e=d.length;f=0;while(f<e){g=d[f];if(ABH(b,g.rB)&&ABH(c,g.qx)?1:0)return 1;f=f+1|0;}return 0;}
function Kv(){EN.call(this);this.rp=null;}
var AC0=F();
function Jj(b){var c,d,e,f;if(!($rt_globals.Array.isArray(b)?1:0)){c=P(Hp,1);c.data[0]=Z_(b);return c;}d=b.length;c=P(Hp,d);e=c.data;f=0;while(f<d){e[f]=Z_(b[f]);f=f+1|0;}return c;}
function Z_(b){var c,d,e;c=typeof b==='string'?1:0;d=c?Ce(b):GL(b.language,null);e=c?null:GL(b.scheme,null);b=new Hp;b.rB=d;b.qx=e;return b;}
var AAz=F();
function M1(b){var c,d;ATi();c=AU0;d=b.data;return c.decode(d);}
var AA1=F();
function AEN(b){var c,d;c=b.bb+1|0;d=b.U+1|0;return Zb(c,d);}
function Hz(b,c){var d;d=b+1|0;b=c+1|0;return Zb(d,b);}
function Zb(b,c){return {column:b,lineNumber:c};}
function FT(){EN.call(this);this.rT=null;}
function AU1(a,b){var c=new FT();Xw(c,a,b);return c;}
function Xw(a,b,c){KE(a,b);a.rT=c;}
function JA(){EN.call(this);this.vi=null;}
function Sr(){var a=this;B.call(a);a.rM=null;a.rN=null;a.rO=null;}
function AO9(a,b,c){var d,e,f;b=Cv(b,"f");Cv(c,"f");c=a.rM;d=a.rN;e=a.rO;f=new XR;f.s2=b;Lv(c.g1,f,0,d,e);}
var Z9=F();
function YU(b){return b?1:0;}
var G$=F(0);
function AMd(a){}
function AIb(a){}
var ET=F(0);
var Jv=F(0);
var Qc=F(0);
function Z7(){var a=this;B.call(a);a.R=null;a.ci=null;a.bD=null;a.O=null;a.eE=null;a.wh=0;a.mw=null;a.cG=null;a.lx=0;a.dR=0;a.fk=null;a.g7=null;a.b4=null;a.z=0;a.c=null;a.cv=null;a.cC=null;a.hG=null;a.fn=null;a.uD=0;a.sq=0;a.cz=0;a.b3=0;a.cb=0;a.eQ=null;a.eL=null;a.eM=null;a.gS=0;a.hU=0;a.yU=0;a.wX=0;a.jr=0;a.iQ=0;a.lR=0;a.dE=0;a.cH=null;a.eC=null;a.dv=0;a.bz=0;a.jJ=null;a.hF=null;a.rv=null;a.tt=null;a.ks=null;a.V=0;a.gC=null;a.qt=0;a.oO=null;a.up=null;}
function AAj(a,b){var c=new Z7();ANK(c,a,b);return c;}
function ANK(a,b,c){var d,e,f,g,h;a.R=new Bj;a.ci=new Bj;a.wh=0;a.mw=P(Bk,10);d=new PM;e=new W1;e.ct=new Bj;e.bp=new Bj;e.da=new B5;e.gu=new B5;VZ(e,0,0,2,20);d.d9=e;d.kb=0.5;d.gX=0.0;Jp(187,187,187,255,e.da);a.cG=d;a.dR=16;a.fk=C(57);a.b4=P(Ky,4);a.c=AR7(P(Bv,0),null,null);f=new WS;f.kB=Cx(P(FT,0));f.mA=Cx(P(FT,0));f.jR=Cx(P(Kv,0));f.mh=Cx(P(JA,0));f.l7=Cx(P(Fk,0));f.l3=Cx(P(Kl,0));a.cv=f;a.fn=P(EY,0);a.eQ=Cg(1,0);a.eL=U2();a.eM=U2();a.gS=0;a.hU=1;a.jr=1;a.iQ=1;a.lR=1;a.dE=3;a.cH=AQg();a.eC=C(58);a.dv=0;a.bz
=0;e=Ed();BM(e);f=new NQ;f.to=e;a.hF=f;a.V=0;e=new NP;e.mS=a;a.oO=e;e=new NO;e.rt=a;a.up=e;a.bD=b;a.O=b.cS;a.eE=c;c=new UJ;g=a.b4;h=b.ca;c.jl=new B5;c.je=new Bj;c.kp=new Bj;b=new B5;c.hk=b;c.kr=g;c.mr=h;Tf(b);a.gC=c;g=a.mw.data;b=new NN;b.uP=a;g[1]=b;b=new NU;b.oF=a;g[2]=b;b=new NT;b.sN=a;g[3]=b;b=new NS;b.wp=a;g[4]=b;b=new NR;b.oh=a;g[5]=b;b=new NM;b.r1=a;g[6]=b;}
function IH(a,b,c,d){var e,f,g,h,i;e=a.gC;Tf(e.hk);f=e.hk;g=d>=0.5?d:0.25;h=g>=4.0?0.5:AD5(f.bZ,AD5(g,AU2));Cc(f,f.bq/g,f.bI*g,AQo(f.ba*g,1.25),h);f=e.hk;h=f.bI;e.sO=h-(h|0)>=0.25?0.0:0.5;i=h+f.ba+1.5|0;e.vP=i;Bg(e.kp,0,i*2|0);Cw(a.R,b);Cw(a.ci,c);ST(a,b,c,d);}
function V1(a,b,c){a.rv=b;a.tt=c;}
function ST(a,b,c,d){var e,f,g,h;a.cz=Co(80.0,d);a.b3=Co(1.0,d);a.cb=Co(10.0,d);if(!a.bz)Cw(a.bD.dk,a.R);else Bg(a.bD.dk,(b.a+c.a|0)-IA(a)|0,b.b);b=a.cH;e=a.bD.dk;f=IA(a);g=c.b;h=d;Cw(b.e$,e);Bg(b.eA,f,g);b.is=h;b=a.cG;f=Co(2.0,d);b.d9.bp.a=f;Q7(a,a.fk,a.dR);K1(a);}
function AH2(a){a.lx=1;KU(a);}
function AE5(a){a.lx=0;}
function KU(a){var b;b=a.cG;b.gX=Nw(Fq(a))+b.kb*1.25;b.fP=1;}
function Jy(a,b){var c,d;a.cC=b;c=a.cG;d=b.bA.wd;Ej(c.d9.da,d);c=a.eL;d=b.bA;Gu(c,d.kV,d.k6);c=a.eM;b=b.bA;Gu(c,b.kV,b.k6);}
function Nt(a){Dy(a,a.g7.ml,a.dR+1|0);}
function Xy(a){var b;b=a.dR;if(b<=7)return;Dy(a,a.g7.ml,b-1|0);}
function QB(a){a.hG=C4(a.hG,E$(a.O,1024,a.z,a.bD.ca));}
function Oh(a,b){Dy(a,b,a.dR);}
function ANJ(a,b){Mi(a.bD,b);}
function Dy(a,b,c){if(a.bD.b1!==0.0){Q7(a,b,c);G5(Fq(a));}a.dR=c;a.fk=b;}
function J8(a,b){var c,d,e,f;c=a.gC;b=a.bD.ca;c.mr=b;if(a.hG.j4!=b)QB(a);d=a.fn.data;b=d.length;e=0;while(e<b){f=d[e].bF;if(f!==null)f.gB=1;e=e+1|0;}Jl(a.cH);K1(a);}
function Q7(a,b,c){var d,e,f,g,h,i,j;d=Co(c,a.bD.b1);e=a.g7;f=e!==null?e.pI:0;if(!(d==f&&BJ(b,a.fk))){Jl(a.cH);g=a.fn.data;c=g.length;f=0;while(f<c){Xc(g[f]);f=f+1|0;}g=a.c.f.v.data;c=g.length;f=0;while(f<c){D_(g[f]);f=f+1|0;}g=a.b4.data;h=GW(0,0);e=a.O;i=d;g[h]=Gs(e,b,i,300,0);a.b4.data[GW(0,1)]=Gs(a.O,b,i,300,2);a.b4.data[GW(1,0)]=Gs(a.O,b,i,600,0);a.b4.data[GW(1,1)]=Gs(a.O,b,i,600,2);e=a.b4.data[GW(0,0)];a.g7=e;c=Fw(e);f=DE(c*1.25);a.z=f;e=a.gC;e.wA=f;g=a.b4.data;j=g[0];e.vC= -( -((f+j.eh+j.dT)/2.0)|0)|0;a.cG.d9.bp.b
=Fw(g[0]);QB(a);f=a.z;h=WB(a.cG);e=new R;T(e);b=J(J(e,C(59)),b);BX(b,32);Bl(J(Bl(J(Bl(J(Bl(b,d),C(60)),c),C(61)),f),C(62)),h);$rt_globals.console.info($rt_ustr(S(e)));if(AU3){c=Kf(a.b4.data[0],a.z);b=new R;T(b);Bl(J(b,C(63)),c);$rt_globals.console.info($rt_ustr(S(b)));}a.c.gN=F2(E8(a),a.c.r,a.O.cY,a.b4);Gy(a);K1(a);}}
function Mc(a){return U(Cb(a.c.f)+5|0,a.z);}
function FL(a){return Z(Mc(a)-a.ci.b|0,0);}
function Ta(a){return Z(a.gS-Da(a)|0,0);}
function Da(a){var b;b=!a.bz?0:CP(a)+a.cb|0;return Z(1,(a.ci.a-a.cz|0)-b|0);}
function IA(a){return a.bz?a.cz:a.cz-a.cb|0;}
function Cz(a){return a.ci.b;}
function KC(a,b){var c,d,e,f,g;c=a.c.f;if(TG(c)&&b-c.s0>0.03125?1:0){d=a.qt;e=a.c.f.b0;if(d!=e){a.qt=e;Rz(a);}}S2(a);d=KN((a.V+a.yU|0)-a.wX|0,FL(a));e=a.V==d?0:1;if(e)DR(a,d);a:{c=a.cG;f=c.fP;if(b>c.gX)while(true){g=c.gX+c.kb;c.gX=g;c.fP=c.fP?0:1;if(b>g)continue;else break a;}}d=c.fP==f?0:1;return !d&&!e&&!a.wh?0:1;}
function DR(a,b){var c,d;c=KN(b,FL(a));if(c!=a.V){a.V=c;a.c.hQ=c/a.z;d=a.tt;if(d!==null)d.j5(c);}}
function H_(a,b){var c,d;c=KN(b,Ta(a));d=a.c;if(c!=d.c5){d.c5=c;d=a.rv;if(d!==null)d.j5(c);}}
function Iu(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=H6(a.ci.b,a.z)+7|0;c=a.fn;if(c.data.length<b)a.fn=Zs(b,c,a.gC,a.uD,a.sq,a.c.f);Dg(a.O,0);RO(a.O,a.R,a.ci);d=(a.z-WB(a.cG)|0)/2|0;e=(a.c.gN-(S6(a.cG)/2|0)|0)-a.c.c5|0;f=!a.bz?a.cz:(a.b3+a.cb|0)+CP(a)|0;g=a.cG;b=f+e|0;d=(d+U(a.c.o,a.z)|0)-a.V|0;Bg(g.d9.ct,b,d);h=Cb(a.c.f);i=Fi(a);j=Gq(a);a.uD=i;a.sq=j;k=!a.bz?a.R.a+a.cz|0:((a.R.a+a.b3|0)+a.cb|0)+CP(a)|0;l=i;while(l<=j&&l<h){m=BK(a.c.f,l);g=Vc(a,l);XY(g,m,a.hG,a.O,a.z,Da(a),a.c.c5);n=g.bF;a.gS=Z(a.gS,
EA(m)+(40.0*a.bD.b1|0)|0);o=U(a.z,l)-a.V|0;p=CE(a)===null?null:(CE(a)).data[l];d=a.R.b+o|0;m=a.O;f=Da(a);q=a.z;o=a.c.c5;r=a.cC;s=ABF(Be(a),l);if(s!==null){if(s.b==(-1))s.b=n.B;s.a=F2(n,s.a,a.O.cY,a.b4);s.b=F2(n,s.b,a.O.cY,a.b4);}t=a.c;Zf(g,d,k,m,f,q,o,r,s,t.hi,t.fV,t.o!=l?0:1,CE(a)===null?0:1,p);l=l+1|0;}r=a.bD.dk;l=i;while(l<=j&&l<h&&a.jr){g=Vc(a,l);o=U(a.z,l)-a.V|0;u=ACL(Be(a),l);t=a.cC.bA.qW;v=a.c.o==l&&CE(a)===null?1:0;if(u)t=a.cC.bA.jm;else if(CE(a)!==null&&l<(CE(a)).data.length&&(CE(a)).data[l]!==null)
{t=a.cC;t=HU(t.du,t,(CE(a)).data[l].fH);}else if(v)t=a.cC.bA.h7;Zn(g,a.O,k,a.R.b+o|0,a.z,r,a.c.c5,Da(a),t);l=l+1|0;}if(a.hU){q=Ba(j+1|0,h);AA2(a,U(a.z,q)-a.V|0);}AB5(a);ABb(a,i,j);if(a.iQ)ADL(a,i,j,h);if(a.lx&&e>=(( -S6(a.cG)|0)/2|0)){g=a.cG;t=a.ci;if(Y6(g.d9.ct,0,0,t))ACk(a.cG,a.O,a.R);}ABB(a);AAL(a);Lf(a.O);}
function ADL(a,b,c,d){var e,f,g,h,i,j;while(b<=c&&b<d){e=CE(a)!==null&&b<(CE(a)).data.length?(CE(a)).data[b]:null;if(e!==null){f=a.cC;f=HU(f.du,f,e.fH);}else f=CE(a)!==null?a.cC.bA.fb:a.cC.bA.h7;if(!(a.c.o!=b&&e===null)){a.eQ.a=!a.bz?(a.cb-a.b3|0)-a.dE|0:((a.cb+CP(a)|0)+a.b3|0)-a.dE|0;g=a.eQ;h=a.z;g.b=h;i=a.bz?0:(a.cz-a.cb|0)+a.b3|0;h=U(h,b)-a.V|0;e=a.O;j=a.R;BB(e,j.a+i|0,j.b+h|0,g,f);}b=b+1|0;}}
function ABb(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;d=a.ci.b;e=Ba(d,U(Cb(a.c.f),a.z)-a.V|0);f=a.cH;g=a.V;h=CE(a)!==null?(-1):a.c.o;i=a.O;j=a.cC;RO(i,f.e$,f.eA);S4(f,i,b,d);k=f.fe;if(b!=k){l=f.cp.k;m=l*20|0;if(k<b){k=k/20|0;n=b/20|0;}else{n=Z(0,(k-1|0)/20|0);k=Z(0,(b-1|0)/20|0);}a:{if((n-k|0)>=l){RD(f,b);f.fe=b;}else{if(f.fe>=b)while(true){if(n<k)break a;f.fe=No(Bs(f.cp,n%l|0),f.ej,f.fh,f.fe,b,m,f.is);n=n+(-1)|0;}while(k<=n){f.fe=No(Bs(f.cp,k%l|0),f.ej,f.fh,f.fe,b,m,f.is);k=k+1|0;}}}}o
=BO(f.cp);while(BP(o)){p=BS(o);q=f.e$;k=U(f.cp.k,f.iW);r=f.jL;s=p.ey.b;n=((p.jo.b-(g%k|0)|0)+k|0)%k|0;t=j.gA;l=g+n|0;u=p.J;m=l/u|0;v=n+s|0;l=BD(v,e);if(l<=0){k=s/u|0;u=0;v=0;w=0;while(v<k){l=m+v|0;if(LA(p,r,w,l,j,t)){s=U((v-u|0)+1|0,p.J);Bg(p.dt,Ci(p.bc),s);Cc(p.ec,0.0,U(u,p.J),Ci(p.bc),s);l=w;}else{x=Fv(j,r,w,t);Es(p,i,n+U(u,p.J)|0,q,t.eT,x);Bg(p.dt,Ci(p.bc),p.J);Cc(p.ec,0.0,U(v,p.J),Ci(p.bc),p.J);u=v;}v=v+1|0;w=l;}x=Fv(j,r,w,t);Es(p,i,n+U(u,p.J)|0,q,t.eT,x);}else{if(l>0&&n<e){l=Z(e-n|0,0);w=p.J;u=l/w|0;if
(l%w|0)u=u+1|0;y=0;z=0;ba=0;while(z<u){w=m+z|0;if(LA(p,r,ba,w,j,t)){l=U((z-y|0)+1|0,p.J);Bg(p.dt,Ci(p.bc),l);Cc(p.ec,0.0,U(y,p.J),Ci(p.bc),l);w=ba;}else{x=Fv(j,r,ba,t);Es(p,i,n+U(y,p.J)|0,q,t.eT,x);Bg(p.dt,Ci(p.bc),p.J);Cc(p.ec,0.0,U(z,p.J),Ci(p.bc),p.J);y=z;}z=z+1|0;ba=w;}x=Fv(j,r,ba,t);Es(p,i,n+U(y,p.J)|0,q,t.eT,x);}if(v>k)AA0(p,q,e,g,k,j,r,i,s,n,t);}}x=j.gA;if(e<d){bb=f.e$;BB(i,bb.a,bb.b+e|0,Cg(f.eA.a,d-e|0),x.gr);}if(b<=h&&h<=c)ACd(f,g,h,j.gA,i);Lf(i);}
function Fi(a){return Ba(a.V/a.z|0,Cb(a.c.f)-1|0);}
function Gq(a){return Ba(((a.V+Cz(a)|0)-1|0)/a.z|0,Cb(a.c.f)-1|0);}
function K1(a){var b,c,d,e,f,g,h;b=a.cH;c=a.b4.data[0];d=a.z;e=a.bD.ca;f=a.O;b.ig=c;b.l6=d;g=d*20|0;b.iW=g;h=C4(b.ej,E$(f,b.eA.a,g,e));b.ej=h;CM(h,b.ig);R_(b.ej,2);c=C4(b.fh,E$(f,b.eA.a,d,e));b.fh=c;CM(c,b.ig);R_(b.fh,2);S4(a.cH,a.O,Fi(a),Cz(a));}
function Vc(a,b){var c;c=a.fn.data;return c[b%c.length|0];}
function VX(a,b){var c,d,e,f;c=Ft(0,H(a.eC),Nj(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BF;X(b);L(b);}if(c!=1){d=b.b$.data.length;if(d&&c){e=B1(U(d,c));d=0;f=0;while(f<c){P3(b,0,H(b),e,d);d=d+H(b)|0;f=f+1|0;}b=LZ(e);}else b=AUt;}}return b;}
function On(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=By(i);k=ATW(i).data;G6(j,c);c=0;l=k.length;if(c>l){f=new BF;X(f);L(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.c.f;o.b0=o.b0+1|0;p=P(Gn,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=APi(h[m],n[m],k[m],b[m],f.U,f.bb);m=m+1|0;}Bw(o.f2,p);c=0;while(c<i){b=e.data;JC(o,h[c],n[c],k[c],b[c]);g.v9(Ct(h[c]),b[c]);c=c+1|0;}}
function ADR(a){var b;if(C3(Be(a)))FZ(a);else{b=a.c;MF(b.f,b.o,b.r);}Gy(a);DQ(a);return 1;}
function C8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.dv)return 0;if(C3(Be(a)))FZ(a);c=LE(UL(b,C(65),C(3)),C(54),(-1));d=c.data;b=a.c;e=b.f;f=b.o;g=b.r;XK(e,f,g,c);h=d.length;if(!h)b=AUt;else{i=0;j=0;while(j<h){i=i+H(d[j])|0;j=j+1|0;}k=B1(i+U(h-1|0,H(C(54)))|0);c=k.data;l=0;b=d[0];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<H(C(54))){m=l+1|0;c[l]=I(C(54),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=n+1|0;}b=LZ(k);}E_(e,f,g,0,b);b=a.c;f=b.o;m=(f+h|
0)-1|0;Ck(a,m,m!=f?H(d[h-1|0]):b.r+H(d[0])|0,0);Fg(a);DQ(a);return 1;}
function FZ(a){var b,c,d;b=Dz(Be(a));c=a.c.f;d=Be(a);MR(c,d,VG(c,d));Ck(a,b.D,b.Q,0);Fg(a);DQ(a);}
function Fg(a){var b,c;(Be(a)).c0=0;b=(Be(a)).bx;c=a.c;B0(b,c.o,c.r);b=(Be(a)).bo;c=a.c;B0(b,c.o,c.r);}
function CP(a){return a.g7.l9|0;}
function AA2(a,b){var c,d;c=a.ci.b;if(b<c){d=a.bD.dk;d.b=c-b|0;d.a=!a.bz?Da(a)+a.dE|0:Da(a)+a.b3|0;c=!a.bz?(a.R.a+a.cz|0)-a.dE|0:(((a.R.a+a.cb|0)+CP(a)|0)+a.b3|0)-a.dE|0;BB(a.O,c,a.R.b+b|0,d,a.cC.bA.fb);}}
function ABB(a){var b;b=a.bz?a.R.a+CP(a)|0:a.R.a+a.ci.a|0;W3(a.eL,a.V,a.R.b,Cz(a),Mc(a),b,CP(a));b=!a.bz?a.R.a+a.cz|0:((a.R.a+a.b3|0)+a.cb|0)+CP(a)|0;QN(a.eM,a.c.c5,b,Da(a),a.gS,a.R.b+Cz(a)|0,CP(a));}
function AAL(a){var b,c;b=Q_(a.eL);c=Q_(a.eM);if(!(!b&&!c)){Dg(a.O,1);if(b)Hy(a.eL,a.O);if(c)Hy(a.eM,a.O);if(b)HH(a.eL,a.O);if(c)HH(a.eM,a.O);}}
function AB5(a){var b,c,d,e;b=a.eQ;c=a.ci;b.b=c.b;b.a=a.b3;d=!a.bz?a.cz-a.cb|0:(c.a-IA(a)|0)-a.b3|0;b=a.O;c=a.R;BB(b,c.a+d|0,c.b,a.eQ,a.cC.bA.tE);a.eQ.a=!a.bz?(a.cb-a.b3|0)-a.dE|0:((a.cb+CP(a)|0)+a.b3|0)-a.dE|0;e=a.bz?0:(a.cz-a.cb|0)+a.b3|0;b=a.O;c=a.R;BB(b,c.a+e|0,c.b,a.eQ,a.cC.bA.fb);}
function KN(b,c){return Ba(Z(0,b),c);}
function Fq(a){return a.bD.fz;}
function Iz(a,b){var c,d,e,f;c=ER(b);d=new R;T(d);J(J(d,C(66)),c);$rt_globals.console.info($rt_ustr(S(d)));Fq(a);c=ER(b);d=Fe();c=$rt_ustr(c);d.title=c;Ck(a,0,0,0);c=new N1;c.q5=a;c.q4=b;d=Ed();BM(d);e=new N2;e.ub=d;f=new T8;f.pS=e;d=new WG;d.nV=c;c=b.fM;if(c!==null)c.text().then(Bm(d,"f"),Bm(f,"f"));else{b=b.hP.getFile();c=new WH;c.py=d;c.pz=f;b.then(Bm(c,"f"),Bm(f,"f"));}}
function Hg(a,b,c,d,e){if(Hq(a,e))return 1;if(c&&d)return 1;if(c)DR(a,a.V+((U(b,a.z)*12|0)/10|0)|0);else if(!d){GZ(a,a.c.o+b|0,e);TN(a);}return 1;}
function R5(a,b,c,d){var e,f,g;if(Hq(a,d))return 1;e=E8(a);if(!c)f=a.c.r+b|0;else if(b>=0)f=Gj(e,a.c.r);else{b=a.c.r;if(!b)f=(-1);else{c=GK(e,b);if(c>0&&e.db.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.db.data[c-1|0];}}if(f>e.B){e=a.c;if((e.o+1|0)<Cb(e.f))Ck(a,a.c.o+1|0,0,d);}else if(f>=0)CX(a,f,d);else{e=a.c;b=e.o;if(b>0){g=(BK(e.f,b-1|0)).B;Ck(a,a.c.o-1|0,g,d);}}Vp(a);return 1;}
function Hq(a,b){if(C3(Be(a))&&!b){Fg(a);Gy(a);return 1;}if(!(b&&C3(Be(a))))Fg(a);return 0;}
function Ck(a,b,c,d){a.c.r=c;return GZ(a,b,d);}
function GZ(a,b,c){var d;d=a.c;d.o=Ft(0,b,Cb(d.f)-1|0);return CX(a,a.c.r,c);}
function CX(a,b,c){var d,e;a.c.r=Ft(0,b,(E8(a)).B);a.c.gN=a.bD.b1===0.0?0:F2(E8(a),a.c.r,a.O.cY,a.b4);KU(a);Gy(a);if(c)(Be(a)).c0=1;d=Be(a);e=a.c;KW(d,e.o,e.r);(Be(a)).c0=0;return 1;}
function L2(a,b){var c;c=AGL(Be(a));CX(a,b,0);Hv(Be(a),c);}
function Gy(a){TN(a);Vp(a);}
function TN(a){var b,c,d,e,f;b=a.V;c=b+Cz(a)|0;d=a.c.o;e=a.z;d=U(d,e);f=d+e|0;if(d<(b+e|0))DR(a,d-e|0);else if(f>(c-e|0))DR(a,(f-Cz(a)|0)+a.z|0);}
function Vp(a){var b,c,d,e,f;b=DE(a.bD.b1*30.0);c=a.c.c5;d=c+Da(a)|0;e=a.c.gN;f=e+b|0;if(e<(c+b|0))H_(a,e-b|0);else if(f>(d-b|0))H_(a,(f-Da(a)|0)+b|0);}
function ADM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;L0(a.c);b=a.jJ;c=a.c;d=c.f;c=c.fV;e=Cb(d);f=b.o_.data;g=f.length;h=0;while(h<g){i=f[h];b=i.gQ;j=b.e5;k=b.jd;l=j;while(true){m=BD(l,k);if(m>0)break;if(l>=e)break;a:{b=BK(d,l);if(b.l.data.length){n=l>j?0:Z(i.gQ.fC,0);o=m<0?b.B:Ba(i.gQ.iu,b.B);while(true){if(n>=o)break a;p=GK(b,n);q=RM(b,p);r=p>=b.l.data.length?b.B:b.db.data[p];s=KA(b,p);if(q==n&&r<=o)Bw(c,s);else{s=Ed();t=new R;T(t);u=Bl(J(t,C(67)),l);BX(u,58);J(Bl(u,n),C(68));Cn(s,S(t));}n=r;}}}l=l+
1|0;}h=h+1|0;}}
function HE(a,b){var c,d;Ck(a,b.U,b.bb,0);c=Gj(E8(a),a.c.r);B0((Be(a)).bo,a.c.o,c);b=(Be(a)).bx;d=a.c;B0(b,d.o,d.r);}
function D2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.R;e=c-d.a|0;f=Ft(0,((b.b-d.b|0)+a.V|0)/a.z|0,Cb(a.c.f)-1|0);g=!a.bz?a.cz:(a.b3+a.cb|0)+CP(a)|0;h=Z(0,(e-g|0)+a.c.c5|0);b=BK(a.c.f,f);d=a.O.cY;i=a.b4;if(!(b.ed!==null&&!b.fx))JX(b,d,i);j=b.ed;e=b.l.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.B;else{c=TC(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.l.data.length)k=b.B;else{j=R$(b,d,i,c);k=0;e=0;while(e<c){k=k+H(b.l.data[e].q)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(AUV){b=new R;T(b);Bl(J(Bl(J(Bl(J(b,C(69)),e),C(70)),h),C(71)),m);$rt_globals.console.info($rt_ustr(S(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return Dp(f,k);}
function Xh(a,b){var c,d;c=a.c;d=b.U;c.o=d;c.r=b.bb;c.gN=F2(BK(c.f,d),a.c.r,a.O.cY,a.b4);KU(a);}
function VS(a,b,c,d){var e;a:{e=c.data;switch(e.length){case 0:break;case 1:Sb(a,e[0]);break a;default:Rp(a.eE,b,c,a,d);break a;}Ka(a.eE,b,a);}}
function Sb(a,b){var c,d,e,f,g;if(BJ(b.g9,a.c.c9)){b=b.fX;Ck(a,b.e5,b.fC,0);B0((Be(a)).bx,b.e5,b.fC);B0((Be(a)).bo,b.jd,b.iu);}else{c=(Cf(a.cv.l3)).data;d=c.length;e=0;a:{while(true){if(e>=d){f=null;break a;}f=c[e];if(f!==null)break;e=e+1|0;}}if(f!==null){Fq(a);g=new Pd;g.oP=f;g.oN=b;BM(g);b=new RB;b.ut=g;$rt_globals.setTimeout(Bm(b,"onTimer"),0);}}}
function E8(a){var b;b=a.c;return BK(b.f,b.o);}
function Jg(a,b,c){var d,e;d=DE((a.z*4|0)*c/150.0);e=DE(b);if(d)DR(a,a.V+d|0);if(e)H_(a,a.c.c5+e|0);return 1;}
function S_(a,b,c){(Be(a)).c0=0;return 1;}
function Mz(a,b,c){var d;if(c)return null;d=HM(a.eL,b.n,a.oO,1);if(d!==null)return d;d=HM(a.eM,b.n,a.up,0);if(d!==null)return d;Id(a);Xh(a,D2(a,b.n));Ku(a.c);if(!b.bC&&!(Be(a)).c0){b=(Be(a)).bx;d=a.c;B0(b,d.o,d.r);}(Be(a)).c0=1;b=Be(a);d=a.c;KW(b,d.o,d.r);b=new Ng;b.qK=a;return b;}
function MI(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cm){b=b.n;e=D2(a,b);f=Gw(a.c.f,e.U,e.bb);g=Kw(a,f);h=LK(a.cv,DT(a.c),FK(a.c));if(h!==null){i=a.c;c=e.U;d=e.bb;e=new PY;e.qS=a;e.qU=b;e.qT=g;h.lp(i,c,d,e,a.hF);}else{e=B_(a.c.f.cV,f);if(e!==null){HE(a,e);c=1;}else{e=B_(a.c.f.cM,f);if(e!==null&&!DG(e)){if(e.k!=1){Q8(a.eE,b,e,a,g);c=1;}else{HE(a,Bs(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(D2(a,b.n)).U;g=BK(a.c.f,c);c=Fz(g,a.c.r);d=Gj(g,a.c.r);b=Lw(g,c);if((d-1|0)==g.B){B0((Be(a)).bx,a.c.o,
Nj(g));B0((Be(a)).bo,a.c.o,g.B);}else{if(b!==null){b=b.q;j=0;c:{while(true){k=b.b$.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.c.r;if(c==j){c=Fz(g,c-1|0);d=Gj(g,c);}else{if(d!=j){PJ(Be(a),a.c.o);break b;}c=Fz(g,d+1|0);d=Gj(g,c);}}}B0((Be(a)).bx,a.c.o,c);(Be(a)).c0=1;Ck(a,a.c.o,d,0);(Be(a)).c0=0;Id(a);}}break a;case 3:break;default:break a;}PJ(Be(a),a.c.o);RK(a.c.gb);Id(a);}}return 1;}
function NX(a,b){var c,d,e,f,g,h,i,j,k;c=a.bD.df;if(H2(a.eL,b.n,c))return 1;if(H2(a.eM,b.n,c))return 1;d=a.cH;if(EV(b.n,d.e$,d.eA)&&Fx(c)?1:0)return 1;e=b.n;f=!a.bz?a.R.a+a.cz|0:((a.R.a+a.cb|0)+a.b3|0)+CP(a)|0;a:{g=a.R.b;h=Da(a);i=Cz(a);j=e.a;if(f<=j&&j<(f+h|0)){k=e.b;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Fx(c);if(b.cm){e=D2(a,b.n);e.bb=Fz(BK(a.c.f,e.U),e.bb);b=a.c.f;if(!I4(b.cV,e)&&!I4(b.cM,e)?0:1)return DD(c,C(72));}return DD(c,C(21));}
function AQv(a,b){var c,d,e,f,g;c=b.cm;if(c&&b.bQ==65){c=Cb(a.c.f)-1|0;d=Fl(a.c.f,c);B0((Be(a)).bx,0,0);B0((Be(a)).bo,Cb(a.c.f)-1|0,d);return 1;}if(c&&b.bQ==80){Ik(a.c);return 1;}if(!a.dv&&c&&b.bQ==90){if(C3(Be(a)))Fg(a);b=a.c.f;b.b0=b.b0+1|0;e=b.f2;d=e.k;if(!d)e=null;else{f=(Fj(e,d-1|0)).data;e=M7(b,f[0]);c=1;while(c<f.length){M7(b,f[c]);c=c+1|0;}}if(e!==null){Ck(a,e.a,e.b,0);DQ(a);}return 1;}if(!c&&!b.cR){if(BE(b.d3,C(73))){C8(a,C(74));CX(a,a.c.r-1|0,0);c=1;}else if(BE(b.d3,C(75))){C8(a,C(76));CX(a,a.c.r-
1|0,0);c=1;}else if(BE(b.d3,C(51))){C8(a,C(77));CX(a,a.c.r-1|0,0);c=1;}else if(BE(b.d3,C(78))){C8(a,C(79));CX(a,a.c.r-1|0,0);c=1;}else if(BE(b.d3,C(80))){C8(a,C(81));CX(a,a.c.r-1|0,0);c=1;}else if(!BE(b.d3,C(82)))c=0;else{C8(a,C(83));CX(a,a.c.r-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cR&&!b.cm)){d=b.bQ;if(d>=48&&d<=57){c=d-48|0;e=a.mw.data[c];if(e!==null)e.s();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bQ){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c
=1;}if(c)return 1;if(AAH(a,b))return 1;if(ABv(a,b))return 1;c=b.cm;if(c&&b.bQ==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bQ;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.cR&&!b.iN)return H(b.d3)>0&&C8(a,b.d3)?1:0;return 0;}return 0;}
function S2(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.c;c=Fi(a);d=Gq(a);if(b.eb!=3&&b.gd==3){e=UG(b.kX);f=new M2;f.qH=c;f.qG=d;g=new QA;g.qg=f;while(!g.j$&&Uk(e,g)){}if(!g.j$&&BE(C(29),DT(b))){c=Z(0,c-100|0);d=Ba(Cb(b.f)-1|0,d+100|0);Bw(b.kX,Cg(c,d));h=By(3);i=h.data;i[0]=Ez(b.f,c);e=b.f;j=0;d=Ba(d+1|0,e.v.data.length);k=0;while(k<d){j=j+Fl(e,k)|0;if(k!=(e.v.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.tA=Ec();e=b.dj;l=new Vr;l.p3=b;i=P(B,3);m=i.data;m[0]=Df(b.f);m[1]=h;b=b.f.cx;g=BA();Tl(b,b.cJ,g);h=
By(3*g.k|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bs(g,o);d=k+1|0;n[k]=b.bK;q=d+1|0;n[d]=b.bN;k=q+1|0;n[q]=b.eF;o=o+1|0;}m[2]=h;D9(e,l,C(84),i);}}}
function Xf(a){Ik(a.c);}
function Rz(a){ACo(a.c);}
function Gt(a,b,c){var d,e,f,g,h,i;if(c&&a.dv)return 0;d=Dz(Be(a));e=d.D;if(C3(Be(a))){f=a.c.f;g=Be(a);h=VG(f,g);if(c)MR(f,g,h);if(c){Ck(a,d.D,d.Q,0);Fg(a);DQ(a);}}else{h=Hi(EJ(a.c.f.v.data[e]),C(54));i=Ba(Cb(a.c.f)-1|0,e);B0((Be(a)).bo,i,0);if(e>=(Cb(a.c.f)-1|0))B0((Be(a)).bo,i,Fl(a.c.f,i));else B0((Be(a)).bx,i+1|0,0);if(c)FZ(a);else Ck(a,e,0,0);}b.j(h);return 1;}
function ABv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.dv)return 0;a:{switch(b.bQ){case 8:if(C3(Be(a))){FZ(a);c=1;}else{b=a.c;d=b.r;if(!d&&!b.o)c=1;else{if(d){e=b.o;c=d-1|0;MF(b.f,e,c);}else{e=b.o-1|0;c=Fl(b.f,e);b=a.c.f;KF(b,e);E_(b,e,Fl(b,e),1,C(54));}DQ(a);c=Ck(a,e,c,0);}}break a;case 9:if(!b.bC){if(!C3(Be(a)))C8(a,a.eC);else{f=Dz(Be(a));g=Fa(Be(a));c=g.D;d=f.D;e=(c-d|0)+1|0;h=By(e);i=h.data;j=P(Bv,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.eC;d=d+1|0;e=l;}b=new Lm;m=a.c;Sj(b,m.o,m.r);m=new TK;m.sD
=a;On(a,h,0,0,j,b,m);f.Q=f.Q+H(a.eC)|0;g.Q=g.Q+H(a.eC)|0;L2(a,a.c.r+H(a.eC)|0);DQ(a);}c=1;}else b:{if(!C3(Be(a))){b=a.c;f=BK(b.f,b.o);if(f.l.data.length>0){g=VX(a,f);if(g===null){c=1;break b;}m=a.c;n=m.f;e=m.o;b=Dp(e,m.r);n.b0=n.b0+1|0;o=n.f2;h=P(Gn,1);h.data[0]=APi(e,0,1,g,b.U,b.bb);Bw(o,h);JC(n,e,0,1,g);FW(f,0,H(g));L2(a,a.c.r-H(g)|0);}}else{b=Dz(Be(a));f=Fa(Be(a));c=f.D;p=b.D;c=(c-p|0)+1|0;h=By(c);k=h.data;j=P(Bv,c);q=j.data;g=a.c;e=g.r;l=g.o;c=0;while(p<=f.D){g=BK(a.c.f,p);if(g.l.data.length>0){g=VX(a,g);if
(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=Io(h,c);j=C2(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.D)b.Q=Z(0,b.Q-H(g)|0);if(p==f.D){f.Q=Z(0,f.Q-H(g)|0);L2(a,a.c.r-H(g)|0);}d=d+1|0;}b=Dp(l,e);f=new Te;f.qR=a;On(a,h,0,1,j,b,f);}DQ(a);c=1;}break a;case 13:if(C3(Be(a)))FZ(a);b=a.c;D_(BK(b.f,b.o));b=a.c;ACV(b.f,b.o,b.r);DQ(a);c=Ck(a,a.c.o+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ADR(a);}return c;}
function AAH(a,b){var c,d,e,f;a:{switch(b.bQ){case 33:c=b.cm?GZ(a,H6(a.V,a.z),b.bC):Hg(a,2-VM(Cz(a),a.z)|0,0,b.cR,b.bC);break a;case 34:c=!b.cm?Hg(a,VM(Cz(a),a.z)-2|0,0,b.cR,b.bC):GZ(a,((a.V+Cz(a)|0)/a.z|0)-1|0,b.bC);break a;case 35:if(!Hq(a,b.bC)&&!CX(a,(E8(a)).B,b.bC)){c=0;break a;}c=1;break a;case 36:if(!Hq(a,b.bC)&&!CX(a,0,b.bC)){c=0;break a;}c=1;break a;case 37:c=b.cm;if(c&&b.cR){Id(a);d=a.c.gb;e=d.c_;if(e<=0)d=null;else{f=d.et.data;c=e-1|0;d.c_=c;d=f[c];}if(d===null)c=1;else{Ck(a,Lk(d),I_(d),0);Hv(Be(a),
d.jM);c=1;}break a;}c=R5(a,(-1),c,b.bC);break a;case 38:c=Hg(a,(-1),b.cm,b.cR,b.bC);break a;case 39:c=b.cm;if(c&&b.cR){d=a.c.gb;e=d.c_;if(e==(d.eo-1|0))d=null;else{f=d.et.data;c=e+1|0;d.c_=c;d=f[c];}if(d===null)c=1;else{Ck(a,Lk(d),I_(d),0);Hv(Be(a),d.jM);c=1;}break a;}c=R5(a,1,c,b.bC);break a;case 40:c=Hg(a,1,b.cm,b.cR,b.bC);break a;default:}c=0;}if(c&&b.bC){b=(Be(a)).bo;d=a.c;B0(b,d.o,d.r);}if(c)Ku(a.c);return c;}
function Id(a){var b,c,d,e,f,g,h;b=a.c;c=b.gb;d=c.c_;c=d<0?null:c.et.data[d];if(c!==null&&b.o==Lk(c)&&a.c.r==I_(c))return;c=a.c;e=c.gb;b=new Kq;d=c.o;f=c.r;c=Be(a);b.la=Dp(d,f);g=AGL(c);b.jM=g;g.c0=0;f=e.c_;h=e.eo;if(f==(h-1|0))Vf(e,b);else{d=f+1|0;while(d<h){RK(e);d=d+1|0;}Vf(e,b);}e.c_=e.c_+1|0;}
function DQ(a){a.c.f.s0=Nw(Fq(a));}
function Gh(a,b){var c,d,e,f,g,h;a.jJ=null;KZ(a.cH,null);L0(a.c);c=a.c;a.c=b;P8(c,null,null);P8(b,a,Fq(a));d=(Cf(a.cv.l7)).data;e=d.length;f=0;while(f<e){g=d[f].sn;h=AMT(J$(c.c9),J$(b.c9));g.f(h);f=f+1|0;}a.V=GV(b.hQ*a.z);}
function Kw(a,b){var c;c=Ld(a.c.f,b);if(c===null)return C(3);return c.q;}
function Do(a,b){return EV(b,a.R,a.ci);}
function Ji(a,b){var c,d,e,f,g;a.c.qv=b;if(b===null){Cn(EW(),C(85));KZ(a.cH,null);}else{b=b.data;c=DX(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.fH<<24>>24;e=e+1|0;}KZ(a.cH,c);}}
function Sd(a,b){a.c.mU=b;}
function CE(a){return a.c.qv;}
function Be(a){return a.c.oW;}
function U1(a){var b;b=a.ks;if(b!==null)b.j(a);}
var ACF=F();
function ADs(){var a=this;B.call(a);a.fS=null;a.g2=null;a.e3=0;}
function Cx(a){var b=new ADs();AI9(b,a);return b;}
function AI9(a,b){a.fS=b;}
function BZ(a,b){var c,d,e;c=a.e3;d=a.fS;if(c==d.data.length)a.fS=C2(d,c+4|0);d=a.fS.data;e=a.e3;a.e3=e+1|0;d[e]=b;a.g2=null;}
function Ff(a,b){var c;BZ(a,b);c=new UU;c.sI=a;c.sJ=b;return c;}
function Cf(a){var b;b=a.g2;if(!(b!==null&&b.data.length==a.e3))a.g2=C2(a.fS,a.e3);return a.g2;}
var AC4=F();
function BJ(b,c){if(b===c)return 1;return b!==null?b.bu(c):c!==null?0:1;}
function BM(b){if(b!==null)return b;b=new Gb;Bp(b,C(3));L(b);}
function Vd(){B.call(this);this.mL=null;}
function AJK(a){var b,c,d,e,f,g;b=a.mL;c=b.sI;b=b.sJ;d=0;while(true){e=c.fS.data;f=e.length;if(d>=f)break;if(e[d]===b){while(true){g=d+1|0;if(g>=f)break;e[d]=e[g];d=g;}e[d]=null;c.e3=c.e3-1|0;c.g2=null;}d=d+1|0;}}
var Vj=F(0);
var AAS=F();
function AIW(a,b){return a.By(b);}
function AK6(a){return a.Hg();}
function Hp(){var a=this;B.call(a);a.rB=null;a.qx=null;}
function ABH(b,c){return c!==null&&b!==null&&!BE(c,b)?0:1;}
var SS=F(0);
function MO(){B.call(this);this.uE=null;}
var QJ=F(0);
var ON=F(0);
function ABd(){var a=this;B.call(a);a.sy=null;a.mC=null;a.ng=null;a.dA=null;a.ma=null;a.jT=null;a.ha=null;a.e7=null;a.ip=0;a.kY=0;a.r2=null;a.d8=null;a.jg=null;}
function AOM(a,b,c,d){var e=new ABd();AFd(e,a,b,c,d);return e;}
function AFd(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new Va;f.pE=a;a.sy=f;f=new U$;f.v4=a;a.mC=f;g=new U_;g.sp=a;a.ma=new $rt_globals.ResizeObserver(Bm(g,"f"));f=new U9;f.oX=a;a.jT=f;a.ip=1;h=new Su;h.jE=new Ud;f=new O9;f.yt=null;f.jt=AUS;h.qh=f;BM(f);g=new Sy;g.sP=f;h.vV=g;h.gi=e;i=e.length;j=0;while(j<i){f=e[j];k=new Sz;k.rA=h;k.rz=j;g=Bm(k,"f");f.onmessage=g;f=e[j];g=AAM();f.postMessage(g);j=j+1|0;}h.gO=0;h.kS=By(i);h.kq=By(i);a.jg=h;a.ng=(Fe()).getElementById($rt_ustr(d));e=YH();d=0;e.tabIndex=d;g=e.style;g.setProperty("width",
"100%");g.setProperty("height","100%");g.setProperty("outline","none");a.dA=e;a.ng.appendChild(e);d=a.dA;f=AMC(!!0,!!0,!!1,!!1);d=d.getContext("webgl2",f);if(d===null)c.s();else{c=new Py;e=a.dA;g=a.mC;c.dx=null;c.gY=e;c.b_=AS9(g);g=$rt_globals.window;l=P(CU,14);m=l.data;f=new V4;f.nR=c;m[0]=CG(c,e,C(86),f);k=new V5;k.s$=c;m[1]=CG(c,e,C(87),k);k=new V6;k.pr=c;m[2]=CG(c,e,C(88),k);k=new V7;k.v1=c;m[3]=CG(c,e,C(89),k);m[4]=CG(c,e,C(90),ASX(c));m[5]=CG(c,e,C(91),ATt(c));m[6]=CG(c,e,C(92),ARR(c));m[7]=CG(c,e,C(93),
ARX(c));m[8]=CG(c,e,C(94),ATA(c));m[9]=CG(c,e,C(95),ASN(c));m[10]=CG(c,e,C(96),ARD(c));m[11]=ABQ(c,g,C(97),ASj(c),1);m[12]=CG(c,g,C(98),ATK(c));m[13]=CG(c,g,C(99),ASB(c));c.ld=AQr(l);AAa(c,e);a.ha=c;a.e7=ASs(d,a.mC);AOG(a.ma,a.dA);e=$rt_globals.window;d=a.jT;e.addEventListener("resize",Bm(d,"handleEvent"));a.d8=b.gp(Z3(a));S9(a);}}
function UM(a){a.dA.focus();}
function Z3(a){var b,c,d;b=new Mg;c=a.e7;d=a.ha.b_;b.jI=c;b.bj=d;b.iZ=a;return b;}
function S9(a){a.kY=$rt_globals.requestAnimationFrame(Bm(a.sy,"onAnimationFrame"));}
function G5(a){a.ip=1;}
function S7(a,b,c){var d,e;a.ha.dx=Cg(b,c);d=a.dA;e=b;d.width=e;d=a.dA;e=c;d.height=e;d=a.e7;Bg(d.dl,b,c);e=d.bf;d=d.dl;b=d.a;c=d.b;e.viewport(0,0,b,c);a.d8.iV(a.e7.dl,J3(a));a.d8.e9();}
function Nw(a){return $rt_globals.performance.now()/1000.0;}
function J3(a){return $rt_globals.window.devicePixelRatio;}
function VV(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADA(b,0);else{c=new W0;d=$rt_globals.window.showOpenFilePicker();e=new WZ;e.qF=b;e.qE=c;d.then(Bm(e,"f"),Bm(c,"f"));}}
function D9(a,b,c,d){var e,f,g,h;e=a.jg;f=e.gO;if(f>0){g=e.kS.data;f=f-1|0;e.gO=f;KR(e,b,c,d,g[f]);}else{h=e.jE;e=new Wh;e.tw=b;e.uk=c;e.tb=d;b=new TT;b.oy=e;c=h.jD;b.t8=c;if(c===null)h.kI=b;else c.td=b;h.jD=b;h.bO=h.bO+1|0;h.hO=h.hO+1|0;}}
function Lv(a,b,c,d,e){var f,g;f=a.jg;if(c>=f.gi.length)c=0;g=f.kq.data;g[c]=g[c]+1|0;KR(f,b,d,e,c);}
function AD2(b){var c;c=new WM;c.n_=b;return c;}
var Xk=F(0);
var AU0=null;function ATi(){ATi=Bn(Xk);ANl();}
function ANl(){AU0=new $rt_globals.TextDecoder("utf-16");}
function Ln(){B.call(this);this.kK=null;}
function FX(){var a=this;Ln.call(a);a.nQ=null;a.be=null;}
function Vw(a,b){var c,d,e;a.kK=b;a.nQ=Jp(0,0,64,255,new B5);c=new T4;c.cK=new Bj;c.kk=Cx(P(Ie,0));c.dk=new Bj;c.uC=new Bj;c.wy=new B5;c.wz=new B5;d=b.jI;c.cS=d;e=b.iZ;c.fz=e;c.ca=d.lt;d=new RR;d.u1=e;c.df=d;d=b.bj.ke;e=new Qh;e.sc=c;BZ(d,e);d=b.bj.mu;e=new Qf;e.vW=c;BZ(d,e);a.be=c;BZ(b.bj.eq,new R8);b=b.bj.eq;c=a.be;BM(c);d=new R7;d.oA=c;BZ(b,d);}
function TJ(a){var b,c,d,e,f,g,h;b=a.kK.jI;c=a.nQ;d=b.bf;e=c.bq;f=c.bI;g=c.ba;h=c.bZ;d.clearColor(e,f,g,h);b.bf.clear(16384);}
function SM(a,b,c){var d,e,f,g;a:{d=a.be;Cw(d.cK,b);if(d.b1!==c){d.b1=c;e=(Cf(d.kk)).data;f=e.length;g=0;while(true){if(g>=f)break a;b=e[g];b.i7=Ij(b.cI,b.iK);d=BO(b.ce);while(BP(d)){P5(BS(d),b.i7,b.cI);}g=g+1|0;}}}}
var OL=F(0);
var Jt=F(0);
function LT(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HG;c=new H4;d=new If;ACZ();Jk(d,AU4);LY(c,d,BG(AU5),BG(AU6),BG(AU7),BG(AU5),BG(AU8),BG(AU9),BG(AU$),BG(AU_),BG(AVa),BG(AVb));ZQ();e=(AVc.go()).data;f=e.length;g=P(In,f);h=g.data;i=0;while(i<f){h[i]=e[i].lW;i=i+1|0;}j=ABU(O(C(100)),O(C(101)),O(C(102)),O(C(103)));k=new HK;l=new HW;ALy();m=AVd;L4(l,m,AVe,AVf,AVg,AVh,m);K4(k,l,ADu(),ADD(O(C(104)),O(C(105)),O(C(106))),ADu(),XZ(1,0.125),AVi,AVj);Iw(b,c,g,j,k,Yh(O(C(107)),O(C(108)),O(C(109)),O(C(110))));a.iw(b);}
function FS(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HG;c=new H4;d=new If;AH0();Jk(d,AVk);LY(c,d,BG(AVl),BG(AVm),BG(AVn),BG(AVl),BG(AVo),BG(AVp),BG(AVq),BG(AVr),BG(AVs),BG(AVt));UK();e=(AVu.go()).data;f=e.length;g=P(In,f);h=g.data;i=0;while(i<f){h[i]=e[i].hN;i=i+1|0;}j=ABU(O(C(111)),O(C(112)),O(C(113)),O(C(114)));k=new HK;l=new HW;AEK();m=AVv;L4(l,m,AVw,AVx,AVy,AVz,m);K4(k,l,ACU(),ADD(O(C(115)),O(C(105)),O(C(106))),ACU(),XZ(1,0.17499999701976776),AVA,AVB);Iw(b,c,g,j,k,Yh(O(C(107)),O(C(108)),O(C(109)),O(C(116))));a.iw(b);}
function J4(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HG;c=new H4;d=new If;ACI();Jk(d,AVC);LY(c,d,BG(AVD),BG(AVE),BG(AVF),BG(AVD),BG(AVG),BG(AVH),BG(AVI),BG(AVJ),BG(AVK),BG(AVL));ABP();e=(AVM.go()).data;f=e.length;g=P(In,f);h=g.data;i=0;while(i<f){h[i]=e[i].k3;i=i+1|0;}j=ABU(O(C(117)),O(C(118)),O(C(119)),O(C(120)));k=new HK;l=new HW;AEZ();m=AVN;L4(l,m,AVO,AVP,AVQ,AVR,m);K4(k,l,ADn(),ADD(O(C(121)),O(C(122)),HB(0)),ADn(),XZ(1,0.07500000298023224),AVS,AVT);Iw(b,c,g,j,k,Yh(O(C(123)),O(C(124)),O(C(125)),O(C(126))));a.iw(b);}
var K8=F(0);
function Mq(){var a=this;FX.call(a);a.cr=null;a.fa=null;}
function AJl(a,b){if(Wo(a.be,b)){Ry(a.fa);J8(a.cr,b);}}
function AO$(a,b){return KC(a.cr,b);}
function AIX(a){TJ(a);Iu(a.cr);XA(a.fa);}
function AEk(a,b,c){SM(a,b,c);IH(a.cr,new Bj,b,c);}
function AHq(a,b){BM(b);MJ(a.fa,b);Jy(a.cr,b);}
var Kj=F(0);
function OM(){B.call(this);this.rP=null;}
function ANh(a,b,c,d,e,f){var g,h,i,j;g=a.rP;h=E7(b);i=Hz(d,c);j=JD();g=g.provideDeclaration(h,i,j);b=new Mk;b.uh=e;b.ug=f;LR(g,b,f);}
var W$=F(0);
function WR(){B.call(this);this.oM=null;}
var Fk=F(0);
function MD(){B.call(this);this.sn=null;}
function Wc(){B.call(this);this.uc=null;}
function AG3(a,b,c,d,e,f){var g,h,i,j;g=a.uc;h=E7(b);i=Hz(d,c);j=JD();g=g.provideDefinition(h,i,j);b=new QW;b.s4=e;b.s3=f;LR(g,b,f);}
function Lm(){var a=this;B.call(a);a.U=0;a.bb=0;}
function Dp(a,b){var c=new Lm();Sj(c,a,b);return c;}
function Sj(a,b,c){a.U=b;a.bb=c;}
function AEG(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return a.U==c.U&&a.bb==c.bb?1:0;}return 0;}
function ANV(a){var b,c,d,e;b=P(B,2).data;b[0]=Ct(a.U);b[1]=Ct(a.bb);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bd)|0;d=d+1|0;}return c;}
function ANr(a,b){var c;b=b;c=BD(a.U,b.U);if(!c)c=BD(a.bb,b.bb);return c;}
var F_=F(0);
var HA=F(0);
var D5=F(0);
var G9=F(0);
function Oi(){var a=this;FX.call(a);a.x=null;a.w=null;a.dD=null;a.gL=0;a.fs=null;a.il=null;a.vY=null;}
function XN(a,b){var c,d,e,f,g;if(a.x===b)a.gL=a.gL|1;if(a.w===b)a.gL=a.gL|2;if((a.gL&3)==3){Cn(EW(),C(127));b=a.x.c;c=a.w.c;d=Df(b.f);e=Df(c.f);f=Ze(b.f);g=Ze(c.f);b=a.kK.iZ;c=new P7;c.rh=a;D9(b,c,C(128),G(B,[d,f,e,g]));}}
function AQj(a,b,c){if(DI(a.be,a.x))return Gt(a.x,b,c);if(!DI(a.be,a.w))return 0;return Gt(a.w,b,c);}
function Xv(a,b){var c;c=new S5;c.ql=b;return c;}
function Vi(a,b,c){var d,e,f,g,h,i,j;d=a.fs;if(d!==null&&d.fA!==null){e=b!==a.x?0:1;f=Fi(b);g=(Gq(b)+f|0)/2|0;h=g-f|0;d=a.fs;d=d.fA.data[FG(d,g,e)];i=g-(!e?d.hp:d.hq)|0;j=b.V-U(f,b.z)|0;e=KN(U(((!e?d.hq:d.hp)+i|0)-h|0,c.z)+j|0,FL(c));c.V=e;c.c.hQ=e/c.z;return;}}
function ANW(a,b){var c,d;c=KC(a.x,b);d=KC(a.w,b);return !c&&!d?0:1;}
function ALa(a){TJ(a);Iu(a.x);Iu(a.w);ADP(a.il,a.fs,a.be,a.x,a.w,a.vY,a.dD.fF);XA(a.dD);}
function Rl(a){return ADN(0);}
function AOx(a){Nt(a.x);Nt(a.w);}
function AK2(a){Xy(a.x);Xy(a.w);}
function APw(a,b){Oh(a.x,b);Oh(a.w,b);}
function AMo(a,b){Mi(a.be,b);}
function AGP(a,b){if(Wo(a.be,b)){Ry(a.dD);J8(a.x,b);J8(a.w,b);}}
function AKr(a,b,c){var d,e,f,g,h,i;SM(a,b,c);d=new Bj;e=Co(20.0,c);f=new Bj;g=b.a/2|0;h=e/2|0;ZH(f,g-h|0,b.b);IH(a.x,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;IH(a.w,d,f,c);Bg(a.il.cX,f.a,d.b);Bg(a.il.en,d.a-f.a|0,f.b);}
function AE0(a,b){BM(b);MJ(a.dD,b);Jy(a.x,b);Jy(a.w,b);}
function AM2(a,b){var c,d;c=Do(a.x,b.n)&&NX(a.x,b)?1:0;d=Do(a.w,b.n)&&NX(a.w,b)?1:0;return !c&&!d?0:1;}
function AJp(a,b,c,d){var e,f;e=Do(a.x,b.n)&&MI(a.x,b,c,d)?1:0;f=Do(a.w,b.n)&&MI(a.w,b,c,d)?1:0;return !e&&!f?0:1;}
function ALp(a,b,c){var d,e,f,g,h,i,j,k;d=Do(a.x,b.n);e=Do(a.w,b.n);f=a.be;g=f.d0;h=g!==null?0:1;i=a.x;j=g!==i?0:1;k=g!==a.w?0:1;if(d&&!(!h&&!k))Fo(f,i);if(e&&!(!h&&!j))Fo(a.be,a.w);if(d){i=Mz(a.x,b,c);if(i!==null)return i;}return !e?null:Mz(a.w,b,c);}
function ANO(a,b,c){var d,e,f,g;d=Do(a.x,b.n);e=Do(a.w,b.n);f=d&&S_(a.x,b,c)?1:0;g=e&&S_(a.w,b,c)?1:0;return !f&&!g?0:1;}
function ANg(a,b,c,d){var e,f,g,h;e=Do(a.x,b.n);f=Do(a.w,b.n);g=e&&Jg(a.x,c,d)?1:0;h=f&&Jg(a.w,c,d)?1:0;return !g&&!h?0:1;}
function AKg(a){return DI(a.be,a.x)?Xv(a,a.x):!DI(a.be,a.w)?null:Xv(a,a.w);}
var ZZ=F();
var Zo=F();
var BY=F(0);
function PA(){var a=this;B.call(a);a.oc=null;a.od=null;}
function AKJ(a,b){var c,d,e;c=a.oc;d=a.od;e=new Px;e.g1=AOM(new XU,new XV,Ce(d.containerId),b);e.bw=(Nv(e)).cr;if(ABO(d))QL(e,d.theme);if(ZD(d))Uu(e,d.readonly);c.f(e);}
var ACj=F(0);
function ABO(b){return "theme" in b?1:0;}
function ZD(b){return "readonly" in b?1:0;}
function ABL(b){return !("workerUrl" in b?1:0)?"worker.js":b.workerUrl;}
function Yg(b){return !("numThreads" in b?1:0)?2:b.numThreads|0;}
var AAZ=F();
function Zj(b,c,d,e){var f,g,h,i,j;f=new $rt_globals.Array();g=0;while(g<e){h=new $rt_globals.Worker(d);i=new NK;i.pY=h;i.pZ=f;i.p0=e;i.p1=b;i.pU=c;j=Bm(i,"f");h.onmessage=j;g=g+1|0;}}
function QT(){var a=this;B.call(a);a.u9=null;a.u$=null;}
function AH3(a,b){var c,d,e,f;c=a.u9;d=a.u$;e=new VI;f=AOM(new UO,new UP,Ce(d.containerId),b);e.qa=f;e.dg=f.d8;if(ABO(d))PL(e,d.theme);if(ZD(d))Qb(e,d.readonly);c.f(e);}
function NK(){var a=this;B.call(a);a.pY=null;a.pZ=null;a.p0=0;a.p1=null;a.pU=null;}
function ANj(a,b){var c,d,e,f,g;c=a.pY;d=a.pZ;e=a.p0;f=a.p1;g=a.pU;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var Y=F(0);
function XR(){B.call(this);this.s2=null;}
function AJa(a,b){var c,d,e,f,g;c=b.data;b=a.s2;d=c.length;e=P(Bv,d).data;f=0;while(f<d){e[f]=c[f].cP();f=f+1|0;}d=e.length;g=new $rt_globals.Array(d);f=0;while(f<d){c=$rt_ustr(e[f]);f;g[f]=c;f=f+1|0;}b.f(g);}
var ZM=F();
function AAM(){return "ping";}
function ADT(b){return b===AAM()?1:0;}
var XU=F();
function AJW(a,b){var c,d,e,f,g;c=new Mq;Vw(c,b);d=AOK(c.be);c.fa=d;e=AAj(c.be,d);c.cr=e;NV(c.be,e);BZ(b.bj.dZ,c.fa);BZ(b.bj.f3,c.fa);BZ(b.bj.dZ,c.cr);d=b.bj.eq;e=new PH;e.xc=c;BZ(d,e);d=b.bj.eq;e=new JV;f=c.cr;BM(f);g=new PF;g.vp=f;MP(e,b,g);BZ(d,e);d=b.bj.ji;e=c.cr;BM(e);f=new PG;f.pc=e;BZ(d,f);d=b.bj.iC;e=new NY;e.qd=c;BZ(d,e);d=b.bj.f3;e=new NZ;e.wb=c;BZ(d,e);b=b.bj.ir;d=new NW;d.nz=c;BZ(b,d);FS(c);return c;}
var Bk=F(0);
var XV=F();
function AIJ(a){ABp();}
var UO=F();
function ANE(a,b){var c,d,e,f;c=new Oi;Vw(c,b);d=new Qg;d.cX=new Bj;d.en=new Bj;d.h3=new Bj;d.h4=new Bj;d.h0=new Bj;d.h1=new Bj;c.il=d;c.vY=AA8();d=AOK(c.be);c.dD=d;c.x=AAj(c.be,d);c.w=AAj(c.be,c.dD);d=c.x;d.bz=1;e=new UA;e.vh=c;f=new UB;f.rc=c;V1(d,e,e);V1(c.w,f,f);d=c.x;e=new UC;e.nv=c;d.ks=e;e=c.w;f=new Uw;f.um=c;e.ks=f;Sd(d,0);Sd(c.w,0);NV(c.be,c.x);BZ(b.bj.dZ,c.dD);BZ(b.bj.f3,c.dD);BZ(b.bj.f3,c);BZ(b.bj.dZ,c);d=b.bj.eq;e=new Ux;e.xA=c;BZ(d,e);d=b.bj.eq;e=new JV;f=new Uy;f.m5=c;MP(e,b,f);BZ(d,e);BZ(b.bj.ji,
c);BZ(b.bj.iC,c);b=b.bj.ir;d=new Uz;d.sZ=c;BZ(b,d);FS(c);return c;}
var UP=F();
function ARd(a){ABp();}
var Rs=F(0);
function Va(){B.call(this);this.pE=null;}
function AJs(a,b){var c,d;c=b;b=a.pE;if(!(!b.d8.lJ(c/1000.0)&&!b.ip)){d=b.e7.dl;if(U(d.a,d.b)){b.ip=0;b.d8.e9();}}S9(b);}
function U$(){B.call(this);this.v4=null;}
function C0(a){G5(a.v4);}
var Qp=F(0);
function U_(){B.call(this);this.sp=null;}
function AHx(a,b,c){var d,e,f,g;c=a.sp;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dA){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=J3(c);S7(c,GV(f.width*g),GV(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];S7(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AC9=F();
function AOG(b,c){ANL(b,c,AEC());}
function AEC(){return {box:'device-pixel-content-box'};}
function ANL(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cd=F(0);
function U9(){B.call(this);this.oX=null;}
function ANu(a,b){b=a.oX;b.d8.iV(b.e7.dl,J3(b));b.d8.e9();}
function Su(){var a=this;B.call(a);a.jE=null;a.gi=null;a.qh=null;a.kS=null;a.kq=null;a.nK=0;a.gO=0;a.vV=null;}
function KR(a,b,c,d,e){var f,g,h,i,j;d=d.data;f=a.nK+1|0;a.nK=f;g=a.qh;h=Ct(f);g.hC=LL(g,g.hC,h);h=Ur(g,h);Mh(h,b);Mh(h,b);g.jy=g.jy+1|0;b=a.gi[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=new $rt_globals.Array();f=0;while(f<i){c=d[f];if(c instanceof Bv)g=$rt_ustr(c);else if(H7(c,$rt_arraycls($rt_bytecls())))g=c.data.buffer;else if(H7(c,$rt_arraycls($rt_charcls())))g=c.data.buffer;else if(H7(c,$rt_arraycls($rt_intcls())))g=c.data.buffer;else{if(!(c instanceof Kx)){b=new BF;c
=R0(Bz(c));g=new R;T(g);J(J(g,C(129)),c);Bp(b,S(g));L(b);}c=c;g=c.hP;if(g===null)g=c.fM;}e=f+2|0;e;h[e]=g;if(g instanceof $rt_globals.ArrayBuffer?1:0)j.push(g);f=f+1|0;}b.postMessage(h,j);}
var LG=F(Em);
var Mn=F(0);
var Xb=F(0);
function Ud(){var a=this;LG.call(a);a.kI=null;a.jD=null;a.hO=0;}
var W9=F(0);
var MV=F(0);
function O9(){var a=this;DB.call(a);a.hC=null;a.jt=null;a.yt=null;a.jy=0;}
function ADo(a,b){var c;c=Ur(a,b);if(c===null)return null;a.hC=JB(a,a.hC,b);a.jy=a.jy+1|0;return c.it;}
function Ur(a,b){var c,d;c=a.hC;while(true){if(c===null)return null;d=I2(a.jt,b,c.iS);if(!d)break;c=d>=0?c.bV:c.bE;}return c;}
function LL(a,b,c){var d,e;if(b===null){b=new IX;d=null;b.iS=c;b.it=d;b.fg=1;b.fr=1;return b;}e=I2(a.jt,c,b.iS);if(!e)return b;if(e>=0)b.bV=LL(a,b.bV,c);else b.bE=LL(a,b.bE,c);D7(b);return Je(b);}
function JB(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=I2(a.jt,c,b.iS);if(d<0)b.bE=JB(a,b.bE,c);else if(d>0)b.bV=JB(a,b.bV,c);else{e=b.bV;if(e===null)return b.bE;f=b.bE;g=P(IX,e.fg).data;h=0;while(true){b=e.bE;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bV;while(h>0){h=h+(-1)|0;j=g[h];j.bE=b;D7(j);b=Je(j);}e.bV=b;e.bE=f;D7(e);b=e;}D7(b);return Je(b);}
function Sy(){B.call(this);this.sP=null;}
function Sz(){var a=this;B.call(a);a.rA=null;a.rz=0;}
function AEz(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.rA;d=a.rz;ADT(b.data);e=c.kq.data;f=e[d];if(f>0)e[d]=f-1|0;else{g=c.jE;h=g.kI;if(h===null)i=null;else{i=h.td;g.kI=i;if(i!==null)i.t8=null;else g.jD=null;g.hO=g.hO-1|0;g.bO=g.bO+1|0;i=h.oy;}if(i!==null)KR(c,i.tw,i.uk,i.tb,d);else{e=c.kS.data;j=c.gO;c.gO=j+1|0;e[j]=d;}}c=c.vV;b=b.data;if(!ADT(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BF;X(b);L(b);}if(b.length<1){b=new BF;AB8(b);L(b);}g=Ct(b[0]);h=ADo(c.sP,g);e=P(B,b.length-1|0);k=e.data;f=0;j=k.length;while
(f<j){l=f+1|0;g=b[l];k[f]=(typeof g==='string'?1:0)?Ce(JF(g)):(g instanceof $rt_globals.ArrayBuffer?1:0)?ASi(JF(g)):(g instanceof $rt_globals.File?1:0)?ABz(null,JF(g)):!(g instanceof $rt_globals.FileSystemFileHandle?1:0)?null:ABz(JF(g),null);f=l;}h.j(e);}}
function Py(){var a=this;B.call(a);a.b_=null;a.gY=null;a.ld=null;a.dx=null;}
function MS(){return (Fe()).activeElement;}
function CG(a,b,c,d){b.addEventListener($rt_ustr(c),Bm(d,"handleEvent"));return Wp(a,b,c,d);}
function ABQ(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bm(d,"handleEvent"),!!e);return Wp(a,b,c,d);}
function Wp(a,b,c,d){var e;e=new Qm;e.oq=b;e.os=c;e.or=d;return e;}
function Ty(a,b){var c;c=new Ut;c.v0=b;return c;}
function Ep(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gY.getBoundingClientRect();e=Cg(GV((b.clientX-d.left)*c),GV((b.clientY-d.top)*c));f=new Bj;g=a.dx;f.a=g.a;f.b=g.b;d=new Md;TY(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.n=e;d.wE=f;return d;}
function XD(a,b,c){var d,e,f,g;d=new O3;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;TY(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j1=0;d.d3=e;d.bQ=f;d.tX=c;d.xS=g;return d;}
function Dr(a,b){b.stopPropagation();b.preventDefault();}
function AAa(a,b){var c;c=new W7;c.qm=b;b.onpointerdown=Bm(c,"f");c=new W8;c.o3=b;b.onpointerup=Bm(c,"f");}
function KH(){var a=this;B.call(a);a.rZ=null;a.cY=null;a.bf=null;a.lt=0;a.t6=null;a.xi=0;a.ya=0;a.jA=null;a.yG=null;a.yq=null;a.yf=null;a.t1=null;a.nT=null;a.yg=null;a.gx=null;a.hv=null;a.yy=null;a.io=null;a.dl=null;a.vJ=null;a.lC=0;a.jV=0;a.mf=0;a.l0=0;a.h9=0;a.mc=null;a.mn=0.0;a.lK=0.0;}
function ACN(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.dl=new Bj;a.lC=0;a.mc=new V$;a.rZ=c;a.lt=d;g=$rt_str(b.getParameter(7938));h=new R;T(h);J(J(h,C(130)),g);$rt_globals.console.info($rt_ustr(S(h)));a.bf=b;a.cY=Nn(c,4,4,1);i=AEs(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B1(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Qn;G7();c=AVU;m.dL=b;m.gh=c;m.ly=j.length/c.kG|0;m.mo
=l.length;n=b.createBuffer();m.hL=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.js=null;n=b.createBuffer();m.jh=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.io=m;a.ya=J0(g,C(131));c=new Qo;c.dO=b;a.t6=c;a.mn=e;a.lK=f;d=b.getParameter(3379);a.xi=d;c=new R;T(c);Bl(J(c,C(132)),d);$rt_globals.console.info($rt_ustr(S(c)));k=P(CI,9);i=k.data;c=ASt(b);a.jA=c;i[0]=c;c=ARU(b,C(133));a.yG=c;i[1]=c;c=new Q5;Gx(c,
b,C(134),C(135),AVU);a.yq=c;i[2]=c;c=ATm(b);a.yf=c;i[3]=c;c=new N3;Xl(c,b,C(136),C(137));a.t1=c;i[4]=c;c=ATD(b);a.nT=c;i[5]=c;c=ATv(b);a.yg=c;i[6]=c;c=ATg(b);a.gx=c;i[7]=c;c=ATh(b);a.hv=c;i[8]=c;a.yy=k;ADz(b,C(138));}
function E$(a,b,c,d){return Nn(a.rZ,b,c,d);}
function Dg(a,b){var c;if(b==a.jV)return b;if(!b)a.bf.disable(3042);else{a.bf.enable(3042);a.bf.blendFuncSeparate(770,771,1,1);}c=a.jV;a.jV=b;return c;}
function RO(a,b,c){UE(a,b.a,b.b,c);}
function UE(a,b,c,d){var e,f;e=d.a;f=d.b;a.l0=1;a.h9=1;d=a.mc;d.r_=b;d.sb=c;d.r$=e;d.r9=f;TZ(a);}
function Lf(a){a.l0=0;a.h9=0;TZ(a);}
function TZ(a){var b,c,d,e,f,g;b=a.mf;c=a.l0;if(b!=c){a.mf=c;if(!c)a.bf.disable(3089);else a.bf.enable(3089);}if(a.mf&&a.h9){a.h9=0;d=a.bf;e=a.mc;b=e.r_;c=a.dl.b-e.sb|0;f=e.r9;c=c-f|0;g=e.r$;d.scissor(b,c,g,f);}}
function HJ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.io;c=a.lC;d=b.gh.tk;e=b.dL;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dL;h=b.hL;e.bindBuffer(34962,h);i=b.gh.mH.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dL;m=k.g6;n=k.e2;o=b.gh.kG*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.e2|0;j=j+1|0;}a:{e=b.js;if(e!==null){c=0;b.dL.bindBuffer(34962,e);i=b.gh.rX.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dL;j=e.g6;p=e.e2;m=e.pQ;n=b.gh.qe;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.e2|0;g=g+1|0;}}}q=b.jh;if(q===null){c=b.ly;if(c>0)b.dL.drawArrays(4,0,c);}else{b.dL.bindBuffer(34963,q);k=b.dL;g=b.mo;k.drawElements(4,g,5123,0);}a.lC=d;}
function BB(a,b,c,d,e){HP(a,a.jA);Ir(a.jA,a.bf,b,c,d,a.dl);d=a.jA;Gd(a.bf,d.u5,e);HJ(a);}
function AC_(a,b,c,d,e,f,g,h){var i,j;HP(a,a.hv);Ir(a.hv,a.bf,b,c,d,a.dl);d=a.hv;i=a.bf;j=d.sE;i.uniform2f(j,e,f);Gd(i,d.pG,g);d=a.hv;Gd(a.bf,d.nm,h);HJ(a);}
function EF(a,b,c,d,e,f,g,h,i){var j;j=!i?a.t1:a.nT;HP(a,j);ADr(j,a.bf,!i?a.lK:a.mn);Ir(j,a.bf,b,c,d,a.dl);ABZ(j,a.bf,f);Yc(j,a.bf,f,e);ABu(j,a.bf,g,h);HJ(a);}
function GT(a){var b,c;b=new IW;c=a.t6;b.fj=new Bj;b.er=c;b.eS=c.dO.createTexture();AVV=AVV+1|0;return b;}
function HP(a,b){var c,d;if(b!==a.vJ){c=a.bf;d=b.bt;c.useProgram(d);a.vJ=b;}}
function ACG(){var a=this;KH.call(a);a.xP=null;a.yr=null;}
function ASs(a,b){var c=new ACG();AJM(c,a,b);return c;}
function AJM(a,b,c){ACN(a,b,new T1,1,3.0,1.0);a.yr=new T0;a.xP=c;}
function Gs(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;a:{f=a.cY;switch(e){case 1:break;case 2:g='italic ';break a;default:g='';break a;}g='oblique ';}h=g+d+' '+c+'px '+$rt_ustr(b);MZ(f,h);g=f.de.measureText("W");i=g.fontBoundingBoxAscent;j=g.fontBoundingBoxDescent;k=g.width;l=GA(f,C(64));m=GA(f,C(139));g=new Ky;f=h;g.ml=b;g.w3=c;n=c|0;if(n!==c){b=new R;T(b);JK(J(b,C(140)),c);$rt_globals.console.info($rt_ustr(S(b)));}g.pI=n;g.w_=d;g.xx=e;g.eh=i;g.dT=j;g.w1=l;g.l9=k;g.nw=f;g.rR=DE(i);g.yi=DE(g.dT);d=m*32.0|0;n=l*32.0
|0;o=k*32.0|0;d=n==d&&n==o?1:0;b:{g.w7=d;switch(e){case 1:break;case 2:b=C(141);break b;default:b=C(142);break b;}b=C(143);}g.wU=b;return g;}
function ZS(){var a=this;B.call(a);a.eq=null;a.wm=null;a.dZ=null;a.f3=null;a.ir=null;a.ji=null;a.iC=null;a.mu=null;a.ke=null;a.cU=null;a.hf=null;a.oU=0;}
function AS9(a){var b=new ZS();AM1(b,a);return b;}
function AM1(a,b){a.eq=Cx(P(D$,0));a.wm=Cx(P(D$,0));a.dZ=Cx(P(ET,0));a.f3=Cx(P(F_,0));a.ir=Cx(P(Is,0));a.ji=Cx(P(HA,0));a.iC=Cx(P(G9,0));a.mu=Cx(P(Bk,0));a.ke=Cx(P(Bk,0));a.cU=b;}
function TF(a,b){var c,d,e,f;C0(a.cU);c=(Cf(!b.tX?a.wm:a.eq)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].co(b);if(f)break;if(b.j1)break;e=e+1|0;}return f;}
function Q6(a,b,c){var d,e,f;C0(a.cU);d=(Cf(a.ji)).data;e=d.length;f=0;while(f<e){if(d[f].mm(b,c))return 1;f=f+1|0;}return 0;}
function V4(){B.call(this);this.nR=null;}
function AMZ(a,b){var c;c=a.nR;if(TF(c.b_,XD(c,b,1)))Dr(c,b);}
function V5(){B.call(this);this.s$=null;}
function ANa(a,b){var c;c=a.s$;if(TF(c.b_,XD(c,b,0)))Dr(c,b);}
function V6(){B.call(this);this.pr=null;}
function ALq(a,b){var c,d,e,f,g,h,i;c=a.pr;if(c.dx!==null){a:{b:{d=Ep(c,b);e=c.b_;C0(e.cU);f=e.hf;if(f!==null)f.j(d);else{g=(Cf(e.dZ)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].gc(d))break a;i=i+1|0;}}}}Dr(c,b);}}
function V7(){B.call(this);this.v1=null;}
function AKP(a,b){var c,d,e,f,g,h;c=a.v1;b.button;if(c.dx!==null)a:{d=Ep(c,b);c=c.b_;e=b.button;C0(c.cU);if(c.hf===null){f=(Cf(c.dZ)).data;g=f.length;h=0;while(h<g){b=f[h].fZ(d,e);if(b!==null){c.hf=b;c.oU=e;break a;}h=h+1|0;}}}}
function ADe(){B.call(this);this.sg=null;}
function ASX(a){var b=new ADe();AOF(b,a);return b;}
function AOF(a,b){a.sg=b;}
function ALd(a,b){var c,d,e,f,g,h,i;c=a.sg;b.button;if(c.dx!==null){d=Ep(c,b);e=c.b_;f=b.button;C0(e.cU);if(f==e.oU&&e.hf!==null)e.hf=null;g=(Cf(e.dZ)).data;h=g.length;i=0;a:{while(i<h){if(g[i].ga(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Dr(c,b);}}
function ADf(){B.call(this);this.ot=null;}
function ATt(a){var b=new ADf();AMb(b,a);return b;}
function AMb(a,b){a.ot=b;}
function ANG(a,b){var c,d,e,f,g,h,i,j,k;c=a.ot;if(c.dx!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.b_;f=Ep(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;C0(e.cU);i=(Cf(e.f3)).data;j=i.length;k=0;b:{while(k<j){if(i[k].f4(f,d,h))break b;k=k+1|0;}}Dr(c,b);}}
function ADg(){B.call(this);this.wf=null;}
function ARR(a){var b=new ADg();AN_(b,a);return b;}
function AN_(a,b){a.wf=b;}
function AJd(a,b){var c,d,e,f,g,h,i,j;c=a.wf;if(c.dx!==null){d=Ep(c,b);e=c.b_;f=b.button;g=b.detail;C0(e.cU);h=(Cf(e.dZ)).data;i=h.length;j=0;a:{while(j<i){if(h[j].fK(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Dr(c,b);}}
function ADh(){B.call(this);this.st=null;}
function ARX(a){var b=new ADh();APZ(b,a);return b;}
function APZ(a,b){a.st=b;}
function ARg(a,b){var c,d,e,f,g,h,i;c=a.st;if(c.dx!==null){d=Ep(c,b);e=c.b_;C0(e.cU);f=(Cf(e.ir)).data;g=f.length;h=0;a:{while(h<g){if(f[h].co(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Dr(c,b);}}
function ADi(){B.call(this);this.oH=null;}
function ATA(a){var b=new ADi();AJ9(b,a);return b;}
function AJ9(a,b){a.oH=b;}
function AIj(a,b){var c,d,e;b=a.oH.b_;c=(Cf(b.ke)).data;d=c.length;e=0;while(e<d){c[e].s();e=e+1|0;}C0(b.cU);}
function ADj(){B.call(this);this.vb=null;}
function ASN(a){var b=new ADj();APN(b,a);return b;}
function APN(a,b){a.vb=b;}
function AOO(a,b){var c,d,e;b=a.vb.b_;c=(Cf(b.mu)).data;d=c.length;e=0;while(e<d){c[e].s();e=e+1|0;}C0(b.cU);}
function ADU(){B.call(this);this.uB=null;}
function ARD(a){var b=new ADU();AFo(b,a);return b;}
function AFo(a,b){a.uB=b;}
function AQQ(a,b){var c;c=a.uB;if(c.dx!==null)Ep(c,b);}
function ADV(){B.call(this);this.tp=null;}
function ASj(a){var b=new ADV();ARv(b,a);return b;}
function ARv(a,b){a.tp=b;}
function AK4(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.tp;if(MS()===c.gY){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cf(c.b_.iC)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dM();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.b_.cU;m=new NB;m.vq=k;m.vr=l;g.getAsString(Bm(m,"accept"));Dr(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new R;T(l);J(J(J(J(l,C(144)),k),C(145)),g);$rt_globals.console.info($rt_ustr(S(l)));}e=e
+1|0;}}}
function ADW(){B.call(this);this.mZ=null;}
function ATK(a){var b=new ADW();AMc(b,a);return b;}
function AMc(a,b){a.mZ=b;}
function ALv(a,b){var c;c=a.mZ;if(MS()===c.gY&&Q6(c.b_,Ty(c,b),0))Dr(c,b);}
function ADX(){B.call(this);this.vA=null;}
function ASB(a){var b=new ADX();ANF(b,a);return b;}
function ANF(a,b){a.vA=b;}
function ANm(a,b){var c;c=a.vA;if(MS()===c.gY&&Q6(c.b_,Ty(c,b),1))Dr(c,b);}
var TO=F(0);
var T1=F();
function Nn(a,b,c,d){var e,f,g,h,i;e=new RE;e.j4=d;AUR=AUR+1|0;e.lT=b;e.k0=c;f=(Fe()).createElement("canvas");e.hE=f;g=b;f.width=g;h=e.hE;f=c;h.height=f;if(!d)g=e.hE.getContext("2d");else{i=e.hE;h=AFC();g=i.getContext("2d",h);}e.de=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var T0=F();
function AJ$(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Mg(){var a=this;B.call(a);a.jI=null;a.bj=null;a.iZ=null;}
var IC=F();
var AUS=null;function I2(a,b,c){return b.jz(c);}
function AA4(){AUS=new IC;}
var DS=F(0);
var D$=F(0);
var Is=F(0);
function Qv(){B.call(this);this.px=null;}
function Bj(){var a=this;B.call(a);a.a=0;a.b=0;}
function Cg(a,b){var c=new Bj();ZH(c,a,b);return c;}
function ZH(a,b,c){a.a=b;a.b=c;}
function Cw(a,b){a.a=b.a;a.b=b.b;}
function Bg(a,b,c){a.a=b;a.b=c;}
function AJX(a,b){var c;a:{b:{if(a!==b){if(Bz(b)!==Bz(a))break b;if(!HO(a,b))break b;}c=1;break a;}c=0;}return c;}
function HO(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function V$(){var a=this;B.call(a);a.r_=0;a.sb=0;a.r$=0;a.r9=0;}
var Y5=F(0);
function Qo(){B.call(this);this.dO=null;}
function K$(){var a=this;B.call(a);a.bt=null;a.yk=null;}
function ABy(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(146):C(147);g=$rt_str(b.getShaderInfoLog(e));h=new R;T(h);J(J(h,f),g);g=S(h);b.deleteShader(e);Cn(EW(),g);Cn(Ed(),C(148));Cn(Ed(),d);Cn(Ed(),C(148));b=new Bt;Bp(b,g);L(b);}
function CI(){var a=this;K$.call(a);a.oG=null;a.qq=null;a.lM=null;}
function AVW(a,b,c,d){var e=new CI();Gx(e,a,b,c,d);return e;}
function Gx(a,b,c,d,e){var f,g,h,i,j,k;a.yk=e;f=ABy(b,35633,c);d=ABy(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bt=g;h=e.sX.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bt;k=c.g6;c=c.qA;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bt;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ADz(b,C(149));a.lM=new Bj;c=a.bt;a.oG=b.getUniformLocation(c,"uResolution");c=a.bt;a.qq=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bt;c=new R;T(c);J(J(c,C(150)),d);Bp(b,S(c));L(b);}
function ZU(a,b,c){var d,e,f;if(!HO(a.lM,c)){Cw(a.lM,c);d=a.oG;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function Ir(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.qq;b.uniform4f(e,i,l,h,j);ZU(a,b,f);}
function AC1(){CI.call(this);this.u5=null;}
function ASt(a){var b=new AC1();AJG(b,a);return b;}
function AJG(a,b){var c;G7();Gx(a,b,C(134),C(151),AVU);c=a.bt;a.u5=b.getUniformLocation(c,"uColor");}
function Eo(){CI.call(this);this.se=null;}
function ARU(a,b){var c=new Eo();TA(c,a,b);return c;}
function AVX(a,b,c){var d=new Eo();TH(d,a,b,c);return d;}
function TA(a,b,c){TH(a,b,C(134),c);}
function TH(a,b,c,d){G7();Gx(a,b,c,d,AVU);c=a.bt;a.se=b.getUniformLocation(c,"sDiffuse");}
function ABZ(a,b,c){var d;d=a.se;b.uniform1i(d,0);b.activeTexture(33984);c=c.eS;b.bindTexture(3553,c);}
var Q5=F(CI);
function AAK(){Eo.call(this);this.wK=null;}
function ATm(a){var b=new AAK();AMY(b,a);return b;}
function AMY(a,b){var c;TA(a,b,C(152));c=a.bt;a.wK=b.getUniformLocation(c,"uContrast");}
function FC(){var a=this;Eo.call(a);a.pC=null;a.qO=null;a.sA=null;a.tB=null;a.jN=0.0;}
function AVY(a,b,c){var d=new FC();Xl(d,a,b,c);return d;}
function Xl(a,b,c,d){TH(a,b,c,d);c=a.bt;a.pC=b.getUniformLocation(c,"uTexTransform");c=a.bt;a.qO=b.getUniformLocation(c,"uColor");c=a.bt;a.sA=b.getUniformLocation(c,"uBgColor");c=a.bt;a.tB=b.getUniformLocation(c,"uTextPow");}
function ADr(a,b,c){var d,e,f,g,h;if(a.jN!==c){a.jN=c;d=EW();e=R0(Bz(a));f=a.jN;g=new R;T(g);JK(J(J(g,e),C(153)),f);Cn(d,S(g));h=a.tB;b.uniform2f(h,c,0.0);}}
function ABu(a,b,c,d){Gd(b,a.qO,c);Gd(b,a.sA,d);}
function Yc(a,b,c,d){var e,f,g,h,i,j;c=c.fj;e=c.a;f=c.b;g=d.bq;h=e;g=g/h;i=d.bI;j=f;i=i/j;h=d.ba/h;j=d.bZ/j;c=a.pC;b.uniform4f(c,g,i,h,j);}
var N3=F(FC);
var ADI=F(FC);
function ATD(a){var b=new ADI();AHJ(b,a);return b;}
function AHJ(a,b){Xl(a,b,C(136),C(154));}
function Zr(){var a=this;Eo.call(a);a.y0=null;a.yZ=null;a.xz=null;}
function ATv(a){var b=new Zr();AHL(b,a);return b;}
function AHL(a,b){var c,d;TA(a,b,C(155));c=a.bt;a.y0=b.getUniformLocation(c,"uColorB");d=a.bt;a.yZ=b.getUniformLocation(d,"uColorF");d=a.bt;a.xz=b.getUniformLocation(d,"uContrast");}
function ABR(){var a=this;CI.call(a);a.op=null;a.mK=null;a.mJ=null;}
function ATg(a){var b=new ABR();AHN(b,a);return b;}
function AHN(a,b){var c;G7();Gx(a,b,C(134),C(156),AVU);c=a.bt;a.op=b.getUniformLocation(c,"uColor");c=a.bt;a.mK=b.getUniformLocation(c,"uPoints1");c=a.bt;a.mJ=b.getUniformLocation(c,"uPoints2");}
function Y1(){var a=this;CI.call(a);a.nm=null;a.sE=null;a.pG=null;}
function ATh(a){var b=new Y1();AFY(b,a);return b;}
function AFY(a,b){var c;G7();Gx(a,b,C(134),C(157),AVU);c=a.bt;a.nm=b.getUniformLocation(c,"uColor");c=a.bt;a.sE=b.getUniformLocation(c,"uBaseline");c=a.bt;a.pG=b.getUniformLocation(c,"uScaleHExp");}
var R3=F(0);
var AD3=F(0);
function Gd(b,c,d){var e,f,g,h;e=d.bq;f=d.bI;g=d.ba;h=d.bZ;b.uniform4f(c,e,f,g,h);}
function ADz(b,c){var d,e;d=b.getError();if(d){b=EW();e=new R;T(e);Bl(J(e,c),d);Cn(b,S(e));}}
function Qm(){var a=this;B.call(a);a.oq=null;a.os=null;a.or=null;}
function Qn(){var a=this;B.call(a);a.dL=null;a.gh=null;a.hL=null;a.js=null;a.jh=null;a.ly=0;a.mo=0;}
function KV(a,b){if(b!==null)a.dL.deleteBuffer(b);return null;}
function Cr(){var a=this;B.call(a);a.wS=null;a.gf=0;}
function Dt(a,b,c){a.wS=b;a.gf=c;}
function Gm(){var a=this;Cr.call(a);a.sX=null;a.mH=null;a.rX=null;a.kG=0;a.qe=0;a.tk=0;}
var AVU=null;var AVZ=null;function G7(){G7=Bn(Gm);AJD();}
function AJD(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Gm;c=P(DL,2);d=c.data;AP6();d[0]=AV0;d[1]=AV1;G7();Dt(b,C(158),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.l5.gf){case 0:f=f+l.e2|0;h=h+1|0;break a;case 1:e=e+l.e2|0;g=g+1|0;break a;default:}}i=i|1<<l.g6;k=k+1|0;}b.sX=c;b.kG=e;b.qe=f;b.tk=i;c=P(DL,g);m=c.data;b.mH=c;c=P(DL,h);n=c.data;b.rX=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.l5.gf){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}AVU
=b;c=P(Gm,1);c.data[0]=b;AVZ=c;}
var LS=F(0);
var Tb=F(0);
var Ue=F(0);
var F0=F();
function IV(){F0.call(this);this.ww=null;}
function AAf(){var a=this;IV.call(a);a.x8=0;a.kT=0;a.iB=null;a.ki=null;a.tS=null;}
function ALJ(a,b){var c=new AAf();APM(c,a,b);return c;}
function APM(a,b,c){a.ww=b;b=new R;T(b);a.iB=b;a.ki=B1(32);a.x8=c;AH_();a.tS=AV2;}
function Th(a,b,c,d){var e,$$je;e=a.ww;if(e===null)a.kT=1;if(!(a.kT?0:1))return;a:{try{e.ka(b,c,d);break a;}catch($$e){$$je=E5($$e);if($$je instanceof TW){}else{throw $$e;}}a.kT=1;}}
function N_(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$$je;e=b.data;d=d-c|0;f=new Rm;g=e.length;d=c+d|0;Vz(f,g);f.cs=c;f.ef=d;f.uQ=0;f.y2=0;f.rC=b;e=DX(Z(16,Ba(g,1024)));d=e.data.length;h=new Ws;i=0+d|0;Vz(h,d);AJJ();h.xH=AV3;h.qV=0;h.s5=e;h.cs=0;h.ef=i;h.xJ=0;h.ne=0;j=a.tS;k=new Pv;b=DX(1);l=b.data;l[0]=63;AP$();m=AV4;k.lS=m;k.k2=m;c=l.length;if(c&&c>=k.mI){k.wO=j;k.qy=b.go();k.x2=2.0;k.mI=4.0;k.pP=B1(512);k.on=DX(512);j=AV5;if(j===null){m=new BF;Bp(m,C(159));L(m);}k.lS=j;k.k2=j;while(k.ix!=3){k.ix=2;a:{while(true)
{try{j=YL(k,f,h);}catch($$e){$$je=E5($$e);if($$je instanceof Bt){j=$$je;m=new Tz;m.lN=1;m.mD=1;m.rg=j;L(m);}else{throw $$e;}}if(j.hr?0:1){c=EI(f);if(c<=0)break a;j=KM(c);}else if(Lz(j))break;m=!Wq(j)?k.lS:k.k2;b:{if(m!==AV5){if(m===AV6)break b;else break a;}c=EI(h);b=k.qy;d=b.data.length;if(c<d){j=AV7;break a;}Wt(h,b,0,d);}n=f.cs;c=j.hr!=2?0:1;if(!(!c&&!Wq(j)?0:1)){j=new D1;X(j);L(j);}SA(f,n+j.ov|0);}}n=Lz(j);Th(a,e,0,h.cs);N9(h);if(!n){while(true){d=k.ix;if(d!=2&&d!=4){j=new Dl;X(j);L(j);}j=AV8;if(j===j)k.ix
=3;n=Lz(j);Th(a,e,0,h.cs);N9(h);if(!n)break;}return;}}j=new Dl;X(j);L(j);}m=new BF;X$(m,C(160));L(m);}
function Cn(a,b){var c,d,e,f,g,h,i,j;BX(CW(a.iB,b),10);b=a.iB;c=b.H;d=a.ki;if(c>d.data.length)d=B1(c);e=0;f=0;if(e>c){b=new BV;Bp(b,C(161));L(b);}while(e<c){g=d.data;h=f+1|0;i=b.M.data;j=e+1|0;g[f]=i[e];f=h;e=j;}N_(a,d,0,c);a.iB.H=0;}
function FP(){F0.call(this);this.xR=null;}
function XJ(a){a.xR=DX(1);}
var KO=F(FP);
var AUE=null;function AJ0(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function ACa(){var b;b=new KO;XJ(b);AUE=b;}
function DL(){var a=this;Cr.call(a);a.qA=null;a.l5=null;a.e2=0;a.pQ=0;a.g6=0;}
var AV0=null;var AV1=null;var AV9=null;function AP6(){AP6=Bn(DL);AIT();}
function ASK(a,b,c,d,e,f,g){var h=new DL();VC(h,a,b,c,d,e,f,g);return h;}
function VC(a,b,c,d,e,f,g,h){AP6();Dt(a,b,c);a.qA=d;a.l5=e;a.e2=f;a.pQ=g;a.g6=h;}
function AIT(){var b;b=new DL;ALm();VC(b,C(162),0,C(163),AV$,2,0,0);AV0=b;b=ASK(C(164),1,C(165),AV$,2,0,1);AV1=b;AV9=G(DL,[AV0,b]);}
function IL(){var a=this;B.call(a);a.wD=null;a.xl=null;}
function ACq(b){var c,d;if(Eu(b))L(AAc(b));if(!ACs(I(b,0)))L(AAc(b));c=1;while(c<H(b)){a:{d=I(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ACs(d))break a;else L(AAc(b));}}c=c+1|0;}}
function ACs(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var LX=F(IL);
var AV2=null;function AH_(){AH_=Bn(LX);AHK();}
function AHK(){var b,c,d,e,f;b=new LX;AH_();c=P(Bv,0);d=c.data;ACq(C(166));e=d.length;f=0;while(f<e){ACq(d[f]);f=f+1|0;}b.wD=C(166);b.xl=c.go();AV2=b;}
var Gr=F(Cr);
var AV_=null;var AV$=null;var AWa=null;function ALm(){ALm=Bn(Gr);AHd();}
function AHE(a,b){var c=new Gr();ACJ(c,a,b);return c;}
function ACJ(a,b,c){ALm();Dt(a,b,c);}
function AHd(){var b;AV_=AHE(C(167),0);b=AHE(C(168),1);AV$=b;AWa=G(Gr,[AV_,b]);}
var J9=F(FP);
var AUF=null;function AHU(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AD7(){var b;b=new J9;XJ(b);AUF=b;}
function ACy(){BF.call(this);this.wR=null;}
function AAc(a){var b=new ACy();APf(b,a);return b;}
function APf(a,b){X(a);a.wR=b;}
var Vb=F(DO);
var LV=F(0);
function W7(){B.call(this);this.qm=null;}
function AOj(a,b){a.qm.setPointerCapture(b.pointerId);}
function W8(){B.call(this);this.o3=null;}
function AFX(a,b){a.o3.releasePointerCapture(b.pointerId);}
function Qg(){var a=this;B.call(a);a.cX=null;a.en=null;a.h3=null;a.h4=null;a.h0=null;a.h1=null;}
function ADP(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;h=c.cS;i=a.cX;BB(h,i.a,i.b,a.en,g.bA.fb);if(b!==null&&b.fA!==null){j=Cl(c,2.0);k=FG(b,Fi(d),1);l=FG(b,Gq(d),1);m=FG(b,Fi(e),0);n=FG(b,Gq(e),0);o=Ba(k,m);p=Z(l,n);k=BD(o,p);if(k<=0)Dg(h,1);while(o<=p){q=b.fA.data[o];if(q.j8){r=d.z;s=U(r,q.hq)-d.V|0;t=s+U(q.mj,r)|0;l=e.z;u=U(l,q.hp)-e.V|0;v=u+U(q.mi,l)|0;Bg(a.h3,a.cX.a,s);Bg(a.h0,a.cX.a,t);Bg(a.h4,a.cX.a+a.en.a|0,u);Bg(a.h1,a.cX.a+a.en.a|0,v);r=Z(Ba(s,u),a.cX.b);w=Ba(Z(t,
v),a.cX.b+a.en.b|0);VZ(f,a.cX.a,r,a.en.a,w-r|0);Ej(f.gu,g.gA.gr);Ej(f.da,HU(g.du,g,q.j8));if(s==t){x=c.dk;Bg(x,a.cX.a-d.R.a|0,j);if(u>=s){i=a.h0;Bg(i,i.a,i.b+j|0);r=s;}else{r=s-j|0;i=a.h3;Bg(i,i.a,i.b-j|0);}BB(h,d.R.a,r,x,f.da);}if(u==v){x=c.dk;Bg(x,e.ci.a,j);if(s>=u){i=a.h1;Bg(i,i.a,i.b+j|0);}else{u=u-j|0;i=a.h4;Bg(i,i.a,i.b-j|0);}BB(h,a.cX.a+a.en.a|0,u,x,f.da);}i=f.ct;r=i.a;w=i.b;y=f.bp;z=a.h3;ba=a.h4;bb=a.h0;bc=a.h1;bd=f.da;HP(h,h.gx);Ir(h.gx,h.bf,r,w,y,h.dl);i=h.gx;x=h.bf;q=i.mK;be=z.a;bf=z.b;bg=ba.a;bh
=ba.b;x.uniform4f(q,be,bf,bg,bh);i=i.mJ;be=bb.a;bf=bb.b;bg=bc.a;bh=bc.b;x.uniform4f(i,be,bf,bg,bh);i=h.gx;Gd(h.bf,i.op,bd);HJ(h);}o=o+1|0;}if(k<=0)Dg(h,0);return;}}
function W1(){var a=this;B.call(a);a.ct=null;a.bp=null;a.da=null;a.gu=null;}
function AA8(){var a=new W1();ANC(a);return a;}
function ANC(a){a.ct=new Bj;a.bp=new Bj;a.da=new B5;a.gu=new B5;}
function VZ(a,b,c,d,e){Bg(a.ct,b,c);Bg(a.bp,d,e);}
function Tg(a){Bg(a.bp,0,0);}
function JL(a){var b;b=a.bp;return U(b.a,b.b)?0:1;}
function Hx(a,b){return EV(b,a.ct,a.bp);}
function AAI(){var a=this;B.call(a);a.d$=null;a.dK=null;a.c1=null;a.bU=null;a.fF=null;}
function AOK(a){var b=new AAI();ANd(b,a);return b;}
function ANd(a,b){var c;c=new WK;c.dd=BA();a.dK=c;a.d$=b;c=new Vv;c.ce=BA();c.jp=AWb;c.cI=b;BZ(b.kk,c);a.bU=c;}
function MJ(a,b){var c,d;a.fF=b;c=a.c1;if(c!==null)c.fR=b.fD;c=a.bU;d=b.fD;c.iK=b.vc;c.l1=d;b=BO(c.ce);while(BP(b)){QH(BS(b),c.l1);}}
function Ry(a){var b,c,d;b=BO(a.bU.ce);while(BP(b)){Le(BS(b));}b=a.dK;c=0;while(true){d=b.dd;if(c>=d.k)break;(Bs(d,c)).N.gK=1;c=c+1|0;}}
function XA(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=a.dK;c=a.d$.cS;d=b.dd.k-1|0;while(d>=0){e=Bs(b.dd,d);e.P.ku(c);f=e.N;g=e.fR.hJ;if(!JW(f)){if(!VW(f)&&!(!f.gK&&f.dh!==null)){f.gK=0;UV(f);h=f.eG;i=(h.eh+h.dT+5.0)/10.0;j=Cl(f.e4,f.i5);h=c.cY;k=f.eG;l=f.gF;m=i*2.0;CM(h,k);n=j+Kb(h,l,m)|0;f.h2=n;n=Ft(0,n,f.p.a);if(n){h=E$(c,n,f.p.b,f.e4.ca);CM(h,f.eG);k=f.gF;o=j;p=o+i;l=f.eG;m=l.eh;Ev(h,k,p,o+m-(m+l.dT)/16.0);k=f.dh;if(k===null){k=GT(c);f.dh=k;}Ex(k,h);Ip(h);Cc(f.j0,0.0,0.0,Ci(f.dh),K7(f.dh));}}h=g.sG;k=f.dh;if
(k===null)PE(f,c,0,f.p.a,h);else{j=Ci(k);k=g.u4;g=f.K;n=g.a;q=g.b;g=f.dh;EF(c,n,q,g.fj,f.j0,g,k,h,f.e4.ca);n=f.p.a;if(j<n)PE(f,c,j,n-j|0,h);}}Dg(c,1);n=Cl(e.bn,2.0);j=JW(e.N);h=e.bn;r=h.dk;h=h.uC;q=j?0:e.N.p.b;k=e.P.p;Bg(h,k.a,k.b+q|0);ZI(c,h,!j?e.N.K:e.P.K,e.fR.hJ.k9, -n|0,r);h=e.P;ABE(c,h.p,h.K,n,q,Pb(e.fR.iy,e.bn.b1),e.fR.iy.lZ,r);d=d+(-1)|0;}b=a.bU;if(!DG(b.ce)){Dg(b.cI.cS,1);j=0;while(true){c=b.ce;if(j>=c.k)break;ADl(Bs(c,j),b.cI);j=j+1|0;}}}
function AM8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.dK;d=0;a:{while(true){e=c.dd;if(d>=e.k)break;b:{f=Bs(e,d);e=b.n;if(Dj(f.N,e))g=DD(f.bn.df,null);else{h=Cl(f.bn,7.0);i=Cl(f.bn,25.0);if(Od(f,e.a,h)){g=NG(f,e.a,i);if(Pj(f,e.b,h)){g=DD(f.bn.df,Ll(g,C(169)));break b;}if(Ny(f,e.b,h)){g=DD(f.bn.df,Ll( -g|0,C(169)));break b;}}if(V3(f,e.b,h)){g=Ww(f,e.b,i);if(XC(f,e.a,h)){g=DD(f.bn.df,Ll(g,C(170)));break b;}if(MK(f,e.a,h)){g=DD(f.bn.df,Ll( -g|0,C(170)));break b;}}g=0;}}c:{d:{if(!g){if(!Dj(f.P,b.n))break d;if(!f.P.gc(b)
&&!DD(f.bn.df,null))break d;}g=1;break c;}g=0;}if(g){g=1;break a;}d=d+1|0;}g=0;}e:{if(!g){c=a.bU;g=0;j=c.ce.k-1|0;f:{while(j>=0){e=Bs(c.ce,j);k=b.n;f=c.cI.df;g=Hx(e.b8,k);d=!g?(-1):Nz(e,k);h=e.ih;if(h!=d){if(h>=0){l=e.ch.data[h];l.hI=0;m=e.wC;if(m!==null)m.zq(k,h,l);}if(d>=0){k=e.ch.data[d];l=e.pA;if(l!==null){m=l.pj;n=l.pk;l=l.pl;Tt(m,n);if(l!==null)k.kf.s();if(UF(k)){if(k.ln===null)Om(m,AAl(k,n),k.iD,n);else Wr(m,AAl(k,n),k.iD,n,k.ln);}}k.hI=1;}e.ih=d;}g=g&&Fx(f)?1:0;if(g)break f;j=j+(-1)|0;}}if(!g){g=0;break e;}}g
=1;}return g;}
function AQe(a,b,c,d){var e,f,g,h,i;e=a.dK;f=0;a:{while(true){g=e.dd;if(f>=g.k)break;b:{c:{h=Bs(g,f);if(!Dj(h.N,b.n)){if(!Dj(h.P,b.n))break c;if(!h.P.fK(b,c,d))break c;}i=1;break b;}i=0;}if(i){c=1;break a;}f=f+1|0;}c=0;}d:{if(!c){g=a.bU.ce;d=g.k-1|0;i=1;if(d<0)i=0;else{g=Bs(g,d);c=Nz(g,b.n);if(c>=0){b=g.ch.data[c];if(!UF(b))b.kf.s();}}if(!i){c=0;break d;}}c=1;}return c;}
function AN8(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.bU;e=null;f=d.ce.k-1|0;a:{while(f>=0){e=Bs(d.ce,f);g=b.n;h=Hx(e.b8,g);if(!h&&!JL(e.b8)){e=e.ui;if(e!==null)Dv(e.s6);}e=!h?null:AWc;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;e=a.dK;h=0;b:{while(true){g=e.dd;if(h>=g.k){g=null;break b;}c:{i=Bs(g,h);if(!c){d:{g=b.n;if(!JW(i.N)&&Dj(i.N,g)){d=i.P.K;j=d.a;k=g.a;l=j-k|0;j=d.b;f=g.b;j=j-f|0;g=i.N.K;m=g.a-k|0;f=g.b-f|0;d=new Bj;g=new NI;g.nG=i;g.nH=m;g.nI=f;g.nJ=d;g.nC=l;g.nE=j;}else{j=Cl(i.bn,7.0);f=Cl(i.bn,
25.0);if(Od(i,g.a,j)){m=NG(i,g.a,f);if(Pj(i,g.b,j)){g=HZ(i,g,m,(-1));break d;}if(Ny(i,g.b,j)){g=HZ(i,g,m,1);break d;}}if(V3(i,g.b,j)){f=Ww(i,g.b,f);if(XC(i,g.a,j)){g=HZ(i,g,(-1),f);break d;}if(MK(i,g.a,j)){g=HZ(i,g,1,f);break d;}}g=null;}}if(g!==null)break c;}g=Dj(i.N,b.n)?AWc:i.P.fZ(b,c);i=i.P;if(i===null)g=null;else if(g===null)g=!Dj(i,b.n)?null:AWc;}if(g!==null)break;h=h+1|0;}}return g;}
function AKy(a,b,c){var d,e,f,g,h;d=a.dK;e=0;a:{while(true){f=d.dd;if(e>=f.k)break;b:{c:{g=Bs(f,e);if(!Dj(g.N,b.n)){if(!Dj(g.P,b.n))break c;if(!g.P.ga(b,c))break c;}h=1;break b;}h=0;}if(h){c=1;break a;}e=e+1|0;}c=0;}return !c&&!FD(a.bU)?0:1;}
function Q8(a,b,c,d,e){Qq(a,b,d,WP(c,null,d),e);}
function Rp(a,b,c,d,e){Qq(a,b,d,WP(null,c,d),e);}
function Qq(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(a.c1!==null)S8(a);f=new Qx;g=a.d$;h=new Qk;h.mV=a;h.mW=c;La(f);f.cO=new Bj;f.bH=new Bj;f.dw=AA8();f.gm=new Bj;f.bW=AWd;f.dV=P(HY,0);f.dr=0;f.d5=0;f.fw=0;f.e1=0;f.eP=0;f.dW=AFm(0);f.gV=Ke();f.bG=g;f.ii=h;f.v8=h;Pe(f);TB(f);f.bW=d;c=a.fF;g=c.fD;c=c.vR;f.q0=g;f.uf=c;f.dN=null;f.dW=null;f.ew=0;TB(f);h=new Uo;i=a.d$;h.P=ARA();h.bn=i;c=new Ve;La(c);c.j0=new B5;c.e4=i;h.N=c;a.c1=h;i=new PR;c=a.d$.df;La(i);g=new Ok;g.qY=i;i.o6=g;g=new Oj;g.sd=i;i.t5=g;i.u3=10.0;i.br=f;i.my
=c;f.gn=i;c=a.fF.fD;g=c.ph;h=c.nZ;i.vO=g;i.vK=h;c=i.cQ;if(c!==null)Gu(c,g,h);c=i.cW;if(c!==null)Gu(c,g,h);j=a.c1;c=j.P;g=c.K;h=c.p;c=C4(c,i);j.P=c;c.lE(g,h,j.bn.b1);g=a.c1;h=new R;T(h);J(J(h,C(171)),e);i=S(h);c=a.fF.uA;e=g.N;k=BJ(e.hW,c)?0:1;l=BJ(e.gF,i)?0:1;m=4.0===e.i5?0:1;if(k){e.hW=c;e.eG=null;Pl(e,0);}e.gK=!k&&!l&&!m?0:1;e.gF=i;e.i5=4.0;e.h2=0;Nh(g);c=a.c1;c.fR=a.fF.fD;RF(a.dK.dd,0,c);c=a.c1;k=(c.N.p.b+Cl(c.bn,2.0)|0)+Cl(a.d$,2.0)|0;l=(f.dr+f.d5|0)+f.fw|0;m=Cl(f.bG,5.0);h=Cg(Ft(m,b.a,f.bG.cK.a-l|0),Ft(k,
b.b,f.bG.cK.b-f.cO.b|0));Pz(f);Ph(f);k=(f.dr+f.d5|0)+f.fw|0;b=f.bG;l=(b.cK.a-h.a|0)-Cl(b,5.0)|0;b=f.bG;m=(b.cK.b-h.b|0)-Cl(b,5.0)|0;g=Cg(Ba(k,l),Ba(f.cO.b,m));KD(a.c1,h,g);Fo(a.d$,f);}
function S8(a){var b,c;b=a.dK;c=a.c1;Vq(b.dd,c);b=a.c1;c=b.N;c.dh=C4(c.dh,null);b.P=C4(b.P,null);a.c1=null;}
function Ka(a,b,c){var d,e,f,g,h;Dv(a.bU);d=a.bU;e=P(Dn,1);f=e.data;g=new Dn;BM(d);h=new Mu;h.ws=d;Ya(g,h,C(172));f[0]=g;Qa(d,b,GR(e),QP(a,c));}
function QP(a,b){var c;c=new Qr;c.nn=a;c.no=b;return c;}
function I1(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;if(!FD(a.bU)){h=a.bU;i=b.n;b=new S$;b.eR=a;b.bh=c;b.oz=g;b.gy=e;b.mx=f;b.jx=d;j=Td();e=b.bh.c;d=DT(e);e=FK(e);f=b.bh.cv;if(QI(f,d,e)!==null){k=new RX;k.nr=b;k.ns=i;DF(j,C(173),k);}if(LK(f,d,e)!==null){k=new RY;k.q6=b;k.q7=i;DF(j,C(174),k);}if(TR(f,d,e)!==null){e=new RW;e.m3=b;e.m4=i;DF(j,C(175),e);}e=new RV;e.uU=b;e.uT=i;DF(j,C(176),e);F8(b);if(K_()){if(!b.bh.dv){e=new Q3;e.vl=b;DF(j,C(177),e);}e=new Q4;e.pv=b;DF(j,C(178),e);if(!b.bh.dv){F8(b);if(K_()&&("readText" in $rt_globals.navigator.clipboard
?1:0)?1:0){e=new Q2;e.sU=b;DF(j,C(179),e);}}}e=Td();l=P(Bv,4).data;l[0]=C(21);l[1]=C(29);l[2]=C(34);l[3]=C(33);m=l.length;n=0;while(n<m){f=l[n];g=new O5;g.np=b;g.nq=f;DF(e,f,g);n=n+1|0;}EC(j,C(180),HF(e));d=Td();l=P(Dn,3);o=l.data;k=b.jx;BM(k);p=new M9;p.o5=k;o[0]=CB(C(181),p);k=b.jx;BM(k);p=new M$;p.qc=k;o[1]=CB(C(182),p);k=b.jx;BM(k);p=new M8;p.v_=k;o[2]=CB(C(183),p);KG(d,C(184),GR(l),AWe);l=P(Dn,2);o=l.data;k=b.gy;BM(k);p=new We;p.qQ=k;o[0]=CB(C(185),p);k=b.gy;BM(k);p=new Wd;p.ur=k;o[1]=CB(C(186),p);EC(d,
C(187),GR(l));k=new O0;k.oa=b;KG(d,C(188),k,AWe);if(b.bh.bD.cS.lt){l=P(Dn,2);o=l.data;k=new Sw;k.oE=b;o[0]=CB(C(189),k);k=new Sx;k.pX=b;o[1]=CB(C(190),k);EC(d,C(191),GR(l));}EC(j,C(192),HF(d));d=Td();EC(d,C(193),AAr(b));f=new P2;f.wc=b;DF(d,C(194),f);f=new Mo;f.oY=b;EC(d,C(195),f);EC(j,C(196),HF(d));Qa(h,i,HF(j),QP(a,c));}}
function AOr(a,b,c,d){var e,f,g,h;e=a.dK;f=0;a:{while(true){g=e.dd;if(f>=g.k)break;if((Bs(g,f)).P.f4(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function Zq(b){var c;c=new Xj;c.mQ=b;return c;}
var Jz=F(0);
function UA(){B.call(this);this.vh=null;}
function AKm(a,b){var c;c=a.vh;Vi(c,c.x,c.w);}
function UB(){B.call(this);this.rc=null;}
function AFh(a,b){var c;c=a.rc;Vi(c,c.w,c.x);}
function UC(){B.call(this);this.nv=null;}
function AKx(a,b){XN(a.nv,b);}
function Uw(){B.call(this);this.um=null;}
function ALr(a,b){XN(a.um,b);}
function Ux(){B.call(this);this.xA=null;}
function APX(a,b){return b.bQ!=121?0:1;}
function JV(){var a=this;B.call(a);a.nO=null;a.qp=null;a.pD=null;}
function AWf(a,b){var c=new JV();MP(c,a,b);return c;}
function MP(a,b,c){var d;d=null;a.nO=b.iZ;a.qp=d;a.pD=c;}
function AIf(a,b){var c,d,e,f;if(b.cm&&b.bQ==79){c=a.qp;if(c!==null&&b.bC){if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADA(c,1);else{d=new Wg;b=$rt_globals.window.showDirectoryPicker();e=new Wf;e.p4=c;e.p5=d;b.then(Bm(e,"f"),Bm(d,"f"));}}else VV(a.nO,a.pD);f=1;}else f=0;return f;}
function Uy(){B.call(this);this.m5=null;}
function AOP(a,b){var c,d;c=a.m5;d=DI(c.be,c.x)?c.x:!DI(c.be,c.w)?null:c.w;if(d!==null){Iz(d,b);c.fs=null;}}
function Uz(){B.call(this);this.sZ=null;}
function AG9(a,b){var c,d,e,f;b=b;c=a.sZ;if(DI(c.be,c.x)){d=c.dD;e=c.x;f=new Xe;f.o9=c;I1(d,b,e,c,c,c,f);}if(DI(c.be,c.w)){d=c.dD;e=c.w;f=new Xd;f.pN=c;I1(d,b,e,c,c,c,f);}return 1;}
function GC(){var a=this;B.call(a);a.vE=0;a.cs=0;a.ef=0;a.iY=0;}
function Vz(a,b){a.iY=(-1);a.vE=b;a.ef=b;}
function EI(a){return a.ef-a.cs|0;}
function Fn(a){return a.cs>=a.ef?0:1;}
var So=F(0);
var KB=F(GC);
function SA(a,b){var c,d,e;if(b>=0&&b<=a.ef){a.cs=b;if(b<a.iY)a.iY=0;return a;}c=new BF;d=a.ef;e=new R;T(e);BX(Bl(J(Bl(J(e,C(197)),b),C(198)),d),93);Bp(c,S(e));L(c);}
function Jm(){var a=this;GC.call(a);a.qV=0;a.s5=null;a.xH=null;}
function Wt(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.ne){e=new Xu;X(e);L(e);}if(EI(a)<d){e=new Q0;X(e);L(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BV;j=new R;T(j);Bl(J(Bl(J(j,C(199)),h),C(200)),g);Bp(i,S(j));L(i);}if(d<0){e=new BV;i=new R;T(i);J(Bl(J(i,C(201)),d),C(202));Bp(e,S(i));L(e);}h=a.cs;k=h+a.qV|0;l=0;while(l<d){b=a.s5.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.cs=h+d|0;return a;}}b=b.data;e=new BV;d=b.length;i=new R;T(i);BX(Bl(J(Bl(J(i,C(203)),c),C(198)),d),41);Bp(e,
S(i));L(e);}
function N9(a){a.cs=0;a.ef=a.vE;a.iY=(-1);return a;}
function Hd(){B.call(this);this.yD=null;}
var AV6=null;var AV5=null;var AV4=null;function AP$(){AP$=Bn(Hd);AK7();}
function ADv(a){var b=new Hd();ACn(b,a);return b;}
function ACn(a,b){AP$();a.yD=b;}
function AK7(){AV6=ADv(C(204));AV5=ADv(C(205));AV4=ADv(C(206));}
function PH(){B.call(this);this.xc=null;}
function AFM(a,b){return b.bQ!=121?0:1;}
function PF(){B.call(this);this.vp=null;}
function AIp(a,b){Iz(a.vp,b);}
function PG(){B.call(this);this.pc=null;}
function APk(a,b,c){return Gt(a.pc,b,c);}
function NY(){B.call(this);this.qd=null;}
function ANc(a){var b,c;b=a.qd.cr;BM(b);c=new N7;c.nW=b;return c;}
function NZ(){B.call(this);this.wb=null;}
function AJ8(a,b,c,d){return Jg(a.wb.cr,c,d);}
function NW(){B.call(this);this.nz=null;}
function AKQ(a,b){var c,d,e,f;b=b;c=a.nz;if(DI(c.be,c.cr)){d=c.fa;e=c.cr;f=new SN;f.x4=c;I1(d,b,e,c,e,c,f);}return 1;}
var AAU=F();
var YY=F(0);
function Jp(b,c,d,e,f){Cc(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function T4(){var a=this;B.call(a);a.cS=null;a.fz=null;a.df=null;a.cK=null;a.b1=0.0;a.ca=0;a.d0=null;a.kk=null;a.dk=null;a.uC=null;a.wy=null;a.wz=null;}
function I5(a){var b;b=a.d0;if(b!==null)b.tx();}
function Jx(a){var b;b=a.d0;if(b!==null)b.wo();}
function NV(a,b){var c;c=a.fz.dA!==(Fe()).activeElement?0:1;if(c)Jx(a);a.d0=b;if(c)I5(a);}
function Fo(a,b){Jx(a);a.d0=b;I5(a);}
function DI(a,b){return b!==a.d0?0:1;}
function LM(a){return a.cS.cY;}
function Ij(a,b){return Gs(a.cS,b.jn,Co(b.hK,a.b1),400,0);}
function Cl(a,b){return Co(b,a.b1);}
function Wo(a,b){if(a.ca==b)return 0;a.ca=b;G5(a.fz);return 1;}
function Mi(a,b){var c;c=a.cS;if(!a.ca)c.lK=b;else c.mn=b;G5(a.fz);}
var R8=F();
function AIU(a,b){var c,d,e;c=b.cm;d=c&&!b.bC&&!b.cR&&!b.iN?1:0;a:{if(d){d=b.bQ;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bC&&!c&&!b.cR&&!b.iN?1:0;d=d&&b.bQ==46?1:0;}b:{if(!d){e=b.bQ;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.j1=1;}return 0;}
function R7(){B.call(this);this.oA=null;}
function AGn(a,b){var c;c=a.oA.d0;return c!==null&&c.kn(b)?1:0;}
function B5(){var a=this;B.call(a);a.bq=0.0;a.bI=0.0;a.ba=0.0;a.bZ=0.0;}
function Cc(a,b,c,d,e){a.bq=b;a.bI=c;a.ba=d;a.bZ=e;}
function Ej(a,b){a.bq=b.bq;a.bI=b.bI;a.ba=b.ba;a.bZ=b.bZ;return a;}
function ARb(a,b){if(a===b)return 1;return b!==null&&Bz(a)===Bz(b)&&JU(a,b)?1:0;}
function JU(a,b){return b.bq===a.bq&&b.bI===a.bI&&b.ba===a.ba&&b.bZ===a.bZ?1:0;}
var Ie=F(0);
function WK(){B.call(this);this.dd=null;}
function Vv(){var a=this;B.call(a);a.cI=null;a.ce=null;a.iK=null;a.i7=null;a.l1=null;a.jp=null;}
function Qa(a,b,c,d){var e,f;e=a.cI;f=e.cK;if(U(f.a,f.b)&&e.b1!==0.0){if(a.iK!==null&&!FD(a)){a.jp=d;a.i7=Ij(a.cI,a.iK);e=Om(a,b,c,null);b=new Vn;b.s6=a;e.ui=b;Fo(a.cI,a);return;}b=new BF;X(b);L(b);}c=new Dl;Bp(c,C(207));L(c);}
function Dv(a){var b;if(FD(a)){b=a.cI;if(b.d0===a)b.d0=null;Tt(a,null);a.jp.s();a.jp=AWb;}}
function Wr(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new SW;f.b8=AA8();f.fo=new Bj;f.f1=new Bj;f.ch=AWg;f.ih=(-1);f.iR=1;f.fU=1;c=c.dM();Le(f);f.ch=c;QH(f,a.l1);P5(f,a.i7,a.cI);if(d===null)g=b.a;else{g=b.a;g=a.cI.cK.a<((g+(ES(d)).a|0)+(ES(f)).a|0)?g-(ES(f)).a|0:(g+(ES(d)).a|0)-d.e0|0;}h=b.b;b=a.cI.cK;i=Z(0,Ba(g,b.a-(ES(f)).a|0));g=Z(0,Ba(h,b.b-(ES(f)).b|0));Bg(f.b8.ct,i,g);j=f.cE+f.e0|0;k=f.ch.data;h=k.length;l=0;m=j;while(l<h){c=k[l];b=c.em;b.a=i+j|0;b.b=g+m|0;if(!f.fU){if(!c.dG.a)Yx();j=j+(c.dG.a+f.cE|0)|0;}else{if
(!c.dG.b)Yx();m=m+(c.dG.b+f.cE|0)|0;}l=l+1|0;}b=new WQ;b.pj=a;b.pk=f;b.pl=e;f.pA=b;Bw(a.ce,f);return f;}
function Om(a,b,c,d){return Wr(a,b,c,d,null);}
function AKV(a,b){var c;if(!FD(a))return 0;a:{switch(b.bQ){case 27:Dv(a);c=1;break a;default:}c=0;}return c;}
function AAl(b,c){var d,e,f;d=b.em;e=c.cE;f=c.e0;return Cg((d.a-(e*3|0)|0)-f|0,(d.b-e|0)-f|0);}
function Tt(a,b){var c,d;c=a.ce.k-1|0;a:{while(true){if(c<0)break a;d=Bs(a.ce,c);if(b===d)break;Fj(a.ce,c);d.fI=C4(d.fI,null);Bg(d.fo,0,0);d.ch=AWg;d.ih=(-1);Tg(d.b8);c=c+(-1)|0;}}}
function FD(a){return a.ce.k<=0?0:1;}
function PM(){var a=this;B.call(a);a.d9=null;a.kb=0.0;a.gX=0.0;a.fP=0;}
function WB(a){return a.d9.bp.b;}
function S6(a){return a.d9.bp.a;}
function ACk(a,b,c){var d,e,f;if(a.fP){d=a.d9;e=c.a;f=c.b;c=d.ct;BB(b,c.a+e|0,c.b+f|0,d.bp,d.da);}}
function Ky(){var a=this;B.call(a);a.ml=null;a.wU=null;a.w3=0.0;a.pI=0;a.w_=0;a.xx=0;a.rR=0;a.yi=0;a.eh=0.0;a.dT=0.0;a.w1=0.0;a.l9=0.0;a.w7=0;a.nw=null;}
function Fw(a){return DE(a.eh+a.dT);}
function PX(a,b){return DE((a.eh+a.dT)*b);}
function EY(){var a=this;B.call(a);a.bT=0;a.c7=null;a.ex=null;a.bF=null;a.dB=0;a.c$=0;}
var AWh=0;var AU3=0;function XY(a,b,c,d,e,f,g){var h,i,j,k,l;h=a.bF;i=h===b&&!h.gB?0:1;if(i){a.bF=b;JX(b,d.cY,a.c7.kr);}h=a.bF;j=h===null?0:EA(h)<f?H6(EA(a.bF),1024):H6(f,1024)+1|0;k=j<=a.dB?0:1;if(k)a.dB=j;if(!(!i&&!k)){if(AWh){l=b.fm;$rt_globals.console.info("fMeasure"+l.data);AWh=0;}if(!AU3){h=c.de;b="alphabetic";h.textBaseline=b;}else{b=c.de;h="top";b.textBaseline=h;}a.c$=g/1024|0;while(true){b=a.ex;if(b.k>=a.dB)break;Bw(b,GT(d));}f=0;while(f<a.dB){H9(a,c,e,a.c$+f|0);f=f+1|0;}a.bF.gB=0;}if(!DG(a.ex)&&g<=
EA(a.bF)){j=g/1024|0;f=a.c$;if(j!=f){f=j-f|0;if(f<0)f= -f|0;if(f>=a.dB){f=0;while(f<a.dB){H9(a,c,e,j+f|0);f=f+1|0;}a.c$=j;}else{while(true){g=a.c$;if(g>=j)break;H9(a,c,e,g+a.dB|0);a.c$=a.c$+1|0;}while(true){g=a.c$;if(g<=j)break;H9(a,c,e,g-1|0);a.c$=a.c$-1|0;}}}}}
function Kf(b,c){return (c-Fw(b)|0)/2|0;}
function ML(b,c){return Kf(b,c)+b.rR|0;}
function H9(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;Fu(b);e=a.bF.fm;f=d*1024|0;g=O_(a,f);if(g>=a.bF.l.data.length)return;h=!g?0.0:e.data[g-1|0];i=f;j=h-i+a.bT;k=a.c7.kr;a:{while(true){l=a.bF;if(g>=l.l.data.length)break a;m=k.data;n=KA(l,g);l=m[IM(n)];o=!AU3?ML(l,c):Kf(l,c);m=e.data;CM(b,l);Ev(b,n.q,j,o);j=m[g]-i+a.bT;if(j>1024.0)break;g=g+1|0;}}Ex(Bs(a.ex,d%a.dB|0),b);}
function Zf(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br;if(DG(a.ex))return;if(!a.dB)return;if(g>EA(a.bF))return;o=a.bF;p=o.ed;q=o.l;r=g/1024|0;s=O_(a,g);t= -a.bT|0;u=f;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=e)break;y=p.data;o=Bs(a.ex,r%a.dB|0);z=v[s];ba=y[s]+a.bT|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=Ba(be,ba)-g|0;if(bc&&x)bf=bf+a.bT|0;if((t+bf|0)>e)bf=e-t|0;bg=i!==null?0:1;b:{if(!bg)
{bh=!x?a.bT:2*a.bT|0;bi=i.a;w=i.b;if(!(bi<w&&g<=w&&(g+bf|0)>(bi+bh|0)?0:1)){bj=0;break b;}}bj=1;}c:{if(!bg){bk=!x?a.bT:2*a.bT|0;if(g>=i.a&&(g+bf|0)<=(i.b+bk|0)?1:0){bl=1;break c;}}bl=0;}bm=null;if(l&&!m)bm=h.bA.h7;if(z===j)bm=h.bA.oR;bn=BO(k);d:{while(BP(bn)){if(BJ(BS(bn),z)){bi=1;break d;}}bi=0;}if(bi)bm=h.bA.wg;if(n!==null){v=n.lk;if(v===null)bk=0;else{v=v.data;bk=s>=v.length?0:v[s];}bm=XQ(h.du,h,bk,n.fH);}if(!bl&&!bj){i.b=Ba(i.b,EA(a.bF));ABa(a,d,t+c|0,b,f,h,o,z,bf,g>=i.a?bf:(Ba(ba,be)-i.a|0)-(!x?a.bT:0)
|0,(g+bf|0)<=(i.b+(!x?a.bT:2*a.bT|0)|0)?0:(Ba(ba,be)-i.b|0)-(!x?a.bT:0)|0,g-bb|0,bm);}else{bo=h.lO.data[z.bP];bp=bl?h.bA.jm:Tc(bm,Na(h,bo.j9));Cc(a.c7.jl,g-bb|0,0.0,bf,u);Bg(a.c7.je,bf,f);He(a.c7,d,o,t+c|0,b,bo.h8,bp);}if((z.bJ&12)>0){bi=t+c|0;Dg(d,1);o=a.c7;z=o.kp;z.a=bf;bk=b+o.vC|0;w=bk-o.vP|0;bq=o.sO;br=bk+bq;bn=o.hk;UK();AC_(d,bi,w,z,bq,br,bn,AWi.hN.h8);Dg(d,0);}g=g+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function ABa(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.lO.data[h.bP];o=n.h8;p=Tc(m,Na(f,n.j9));q=f.bA.jm;f=a.c7;r=f.jl;s=f.je;t=l;u=i-j|0;v=u;w=e;Cc(r,t,0.0,v,w);Bg(s,u,e);He(a.c7,b,g,c,d,o,p);l=l+i|0;Cc(r,l-k|0,0.0,k,w);Bg(s,k,e);f=a.c7;c=c+i|0;He(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cc(r,t,0.0,i,w);Bg(s,i,e);He(a.c7,b,g,c-j|0,d,o,q);}
function Tc(b,c){if(b!==null)c=b;return c;}
function O_(a,b){var c,d,e,f,g,h,i;c=a.bF;d=c.fm;e=0;f=c.l.data.length;g=b;b=BD(e,f);if(b>0){c=new BF;X(c);L(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BD(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function Xc(a){a.bF=null;DY(a.ex,new Up);FH(a.ex);}
function Zn(a,b,c,d,e,f,g,h,i){var j,k;j=EA(a.bF);if(j)j=j+a.bT|0;if(!j)j=j-a.bT|0;k=Z( -a.bT|0,j-g|0);if(k>=h)return;Bg(f,h-k|0,e);BB(b,c+k|0,d,f,i);}
function Zs(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a:{h=c.data;i=P(EY,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=BK(g,e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.bF===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}c=i.data;e=0;f=c.length;while(e<f){if(c[e]===null){if(j>=k)p=null;else{b=j+1|0;p=h[j];j=b;}while(j<k&&p===null){b=j+1|0;p=h[j];j=b;}if(p!==null){c[e]=p;h[j-1|0]=null;}else{o=new EY;o.bT=3;o.ex=BA();o.c$=0;o.c7=d;c[e]=o;}}e=e+1|0;}while(j<k){p=h[j];if(p!==null)Xc(p);j=j+1|0;}return i;}
function ABc(){AU3=0;}
function ADE(){var a=this;B.call(a);a.eW=null;a.cN=null;a.dY=null;a.ek=null;a.hR=null;a.hS=null;}
function U2(){var a=new ADE();AJI(a);return a;}
function AJI(a){a.eW=new Bj;a.cN=new Bj;a.dY=new Bj;a.ek=new Bj;a.hR=new B5;a.hS=new B5;}
function Q_(a){var b;b=a.cN;return !U(b.a,b.b)?0:1;}
function Hl(a,b){return EV(b,a.dY,a.ek);}
function HM(a,b,c,d){var e,f,g,h,i;e=Hl(a,b);f=EV(b,a.eW,a.cN);if(!e&&!f)return null;if(!f){if(!d)c.j(V2(a,b.a-a.dY.a|0));else c.j(PI(a,b.b-a.dY.b|0));}g=!d?a.eW.a+(a.cN.a/2|0)|0:a.eW.b+(a.cN.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new Sh;b.vy=a;b.vz=c;b.vx=i;}else{b=new Sg;b.pg=a;b.pe=c;b.pf=i;}return b;}
function Gu(a,b,c){if(b!==null&&c!==null){Ej(a.hR,c);Ej(a.hS,b);return;}}
function Z5(b,c){var d;d=new T2;d.rU=b;d.wr=c;return d;}
function PI(a,b){var c,d,e;c=a.ek.b;d=a.cN.b;e=c-d|0;return Z5(Ba(Z(0,b-(d/2|0)|0),e),e);}
function V2(a,b){var c,d,e;c=a.ek.a;d=a.cN.a;e=c-d|0;return Z5(Ba(Z(0,b-(d/2|0)|0),e),e);}
function W3(a,b,c,d,e,f,g){Wi(a,b,c,d,e,f,g,1);}
function QN(a,b,c,d,e,f,g){Wi(a,b,c,d,e,f,g,0);}
function Wi(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bg(a.ek,0,0);Bg(a.cN,0,0);}else{i=Ba(g*3|0,d);j=Z(P4(d,d,e),i);e=e-d|0;i=d-j|0;i=i?P4(b,i,e):0;if(!h){k=a.eW;k.a=i+c|0;k.b=f-g|0;l=a.cN;l.a=j;l.b=g;l=a.dY;l.a=c;l.b=k.b;k=a.ek;k.a=d;k.b=g;}else{k=a.eW;k.a=f-g|0;k.b=i+c|0;l=a.cN;l.a=g;l.b=j;l=a.dY;l.a=k.a;l.b=c;k=a.ek;k.a=g;k.b=d;}}}
function Hy(a,b){var c;c=a.dY;BB(b,c.a,c.b,a.ek,a.hR);}
function HH(a,b){var c,d;c=a.cN;c.a=c.a-2|0;c.b=c.b-2|0;d=a.eW;BB(b,d.a+1|0,d.b+1|0,c,a.hS);b=a.cN;b.a=b.a+2|0;b.b=b.b+2|0;}
function H2(a,b,c){return Hl(a,b)&&Fx(c)?1:0;}
function ZN(){var a=this;B.call(a);a.xT=20;a.e$=null;a.eA=null;a.is=0.0;a.ig=null;a.l6=0;a.iW=0;a.cp=null;a.jL=null;a.ej=null;a.fh=null;a.fe=0;}
function AQg(){var a=new ZN();AQB(a);return a;}
function AQB(a){a.xT=20;a.e$=new Bj;a.eA=new Bj;a.cp=BA();a.jL=DX(0);}
function KZ(a,b){if(b===null)b=DX(0);a.jL=b;}
function ACd(a,b,c,d,e){var f,g,h,i,j,k;f=c/20|0;g=a.cp;h=Bs(g,f%g.k|0);i=a.e$;j=U(a.cp.k,a.iW);f=h.ey.b;k=((h.jo.b-(b%j|0)|0)+j|0)%j|0;if((k+f|0)>j)k= -(b%K7(h.bc)|0)|0;b=c%h.dC|0;f=h.J;k=k+U(b,f)|0;if(k<( -f|0))k=k+j|0;Bg(h.dt,h.ey.a,f);g=h.ec;b=c%h.dC|0;c=h.J;Cc(g,0.0,U(b,c),h.ey.a,c);Es(h,e,k,i,d.oS,d.mY);}
function S4(a,b,c,d){var e,f,g,h,i,j;e=a.cp.k;while(true){f=a.cp.k;g=U(f,a.iW);if(g>(d+a.l6|0))break;h=Cg(0,g);i=new PP;g=a.eA.a;f=a.l6;j=a.ig;i.dt=new Bj;i.ec=new B5;i.jo=h;i.dC=20;i.J=f;i.ey=Cg(g,20*f|0);i.gj=ML(j,f);if(i.bc===null)i.bc=GT(b);Bw(a.cp,i);}if(f==e)return;RD(a,c);}
function RD(a,b){var c,d,e,f,g,h,i,j,k;c=a.cp;d=c.k;e=U((b/(d*20|0)|0)+1|0,d)*20|0;c=BO(c);while(BP(c)){f=BS(c);g=a.ej;h=a.is;Fu(g);i=0;while(true){j=f.dC;if(i>=j)break;k=e-U(d,j)|0;if(k<b)k=e;e=k+1|0;FO(f,g,D8(e),U(f.J,i)+f.gj|0,h);i=i+1|0;}Ex(f.bc,g);f.nc=g.j4;}}
function Jl(a){DY(a.cp,new Mp);FH(a.cp);a.ej=C4(a.ej,null);a.fh=C4(a.fh,null);}
function NQ(){B.call(this);this.to=null;}
function Lh(a,b){Cn(a.to,b);}
function NP(){B.call(this);this.mS=null;}
function AFu(a,b){var c;c=a.mS;DR(c,Ha(b,FL(c)));}
function NO(){B.call(this);this.rt=null;}
function AEE(a,b){var c;c=a.rt;H_(c,Ha(b,Ta(c)));}
function UJ(){var a=this;B.call(a);a.jl=null;a.je=null;a.kp=null;a.hk=null;a.kr=null;a.sO=0.0;a.wA=0;a.vC=0;a.vP=0;a.mr=0;}
function He(a,b,c,d,e,f,g){var h,i;h=a.je;if(h.a&&h.b){i=a.jl;if(i.bZ!==0.0&&i.ba!==0.0){EF(b,d,e,h,i,c,f,g,a.mr);return;}}}
function NN(){B.call(this);this.uP=null;}
function AED(a){var b,c;b=a.uP;c=b.hU?0:1;b.hU=c;b=new R;T(b);I7(J(b,C(208)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NU(){B.call(this);this.oF=null;}
function AId(a){var b,c;b=a.oF;c=b.jr^1;b.jr=c;b=new R;T(b);I7(J(b,C(209)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NT(){B.call(this);this.sN=null;}
function ARw(a){var b,c,d,e,f;b=a.sN;c=(b.dE+3|0)%6|0;b.dE=c;d=b.fn.data;e=d.length;f=0;while(f<e){b=d[f];b.bT=c;b=b.bF;if(b!==null)b.gB=1;f=f+1|0;}}
function NS(){B.call(this);this.wp=null;}
function AKK(a){var b;b=a.wp;b.bz=b.bz?0:1;Jl(b.cH);b.cH=AQg();ST(b,b.R,b.ci,b.bD.b1);}
function NR(){B.call(this);this.oh=null;}
function AM9(a){var b;b=a.oh;b.iQ=b.iQ?0:1;}
function NM(){B.call(this);this.r1=null;}
function AQW(a){var b;b=a.r1;b.lR=b.lR?0:1;}
var Ju=F(KB);
function Rm(){var a=this;Ju.call(a);a.y2=0;a.uQ=0;a.rC=null;}
function Kk(){var a=this;B.call(a);a.wO=null;a.qy=null;a.x2=0.0;a.mI=0.0;a.lS=null;a.k2=null;a.ix=0;}
function Li(){var a=this;B.call(a);a.hr=0;a.ov=0;}
var AV8=null;var AV7=null;function YV(a,b){var c=new Li();Zy(c,a,b);return c;}
function Zy(a,b,c){a.hr=b;a.ov=c;}
function Lz(a){return a.hr!=1?0:1;}
function Wq(a){return a.hr!=3?0:1;}
function KM(b){return YV(2,b);}
function ZV(){AV8=YV(0,0);AV7=YV(1,0);}
function Wh(){var a=this;B.call(a);a.tw=null;a.uk=null;a.tb=null;}
function GI(){var a=this;B.call(a);a.bC=0;a.cm=0;a.cR=0;a.iN=0;}
function AWj(a,b,c,d){var e=new GI();TY(e,a,b,c,d);return e;}
function TY(a,b,c,d,e){a.bC=d;a.cm=b;a.cR=c;a.iN=e;}
function O3(){var a=this;GI.call(a);a.d3=null;a.bQ=0;a.tX=0;a.xS=0;a.j1=0;}
var ACM=F();
function VM(b,c){return (b+(c/2|0)|0)/c|0;}
function P4(b,c,d){if(b<(2147483647/c|0))return VM(U(b,c),d);return 0.5+c*b/d|0;}
function H6(b,c){return ((b+c|0)-1|0)/c|0;}
function GV(b){return b+0.5|0;}
function DE(b){return b+0.5|0;}
function Ft(b,c,d){return Z(b,Ba(c,d));}
function Zl(b,c){return YB(b)/YB(c);}
function Md(){var a=this;GI.call(a);a.n=null;a.wE=null;}
var TQ=F(0);
function NB(){var a=this;B.call(a);a.vq=null;a.vr=null;}
function AKu(a,b){var c,d;c=a.vq;d=a.vr;$rt_globals.console.info("paste plain string "+b);c.j(Ce(b));C0(d);}
function Ut(){B.call(this);this.v0=null;}
function APd(a,b){a.v0.clipboardData.setData("text/plain",$rt_ustr(b));}
var Ma=F(0);
function Fx(a){return DD(a,null);}
function Qh(){B.call(this);this.sc=null;}
function AJb(a){I5(a.sc);}
function Qf(){B.call(this);this.vW=null;}
function AEq(a){Jx(a.vW);}
var Xz=F(0);
var AWb=null;function ACR(){AWb=new NC;}
var PZ=F(0);
var AU2=0.0;function Tf(b){Cc(b,1.0471975803375244,0.75,1.25,0.375);}
function Ym(){AU2=Zl(Zl(0.5,0.375),4.0);}
function Ws(){var a=this;Jm.call(a);a.xJ=0;a.ne=0;}
function RR(){B.call(this);this.u1=null;}
function DD(a,b){var c,d,e;c=a.u1;d=c.r2;e=c.dA;if(BJ(b,d))b=d;else{e=e.style;if(b!==null&&H(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}c.r2=b;return 1;}
var ABC=F();
var NC=F();
function AQX(a){}
function JP(){B.call(this);this.x5=null;}
var AV3=null;var AWk=null;function AJJ(){AJJ=Bn(JP);ARk();}
function AHw(a){var b=new JP();X0(b,a);return b;}
function X0(a,b){AJJ();a.x5=b;}
function ARk(){AV3=AHw(C(210));AWk=AHw(C(211));}
var VE=F(0);
function ABf(){B.call(this);this.i0=null;}
function ASi(a){var b=new ABf();AL1(b,a);return b;}
function AL1(a,b){a.i0=b;}
function Ei(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.i0));}
function CF(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.i0));}
function AGT(a){var b,c;b=a.i0.byteLength;c=new R;T(c);J(Bl(J(c,C(212)),b),C(213));return S(c);}
var T7=F(0);
function Kx(){var a=this;B.call(a);a.hP=null;a.fM=null;a.l8=null;}
function ABz(a,b){var c=new Kx();AJE(c,a,b);return c;}
function ARP(a,b,c){var d=new Kx();N$(d,a,b,c);return d;}
function X9(b){var c,d,e,f,g,h,i;c=new Kx;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=P(Bv,0);else{f=P(Bv,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=Ce(e[h]);h=h+1|0;}}}else f=P(Bv,0);N$(c,d,b,f);return c;}
function AJE(a,b,c){N$(a,b,c,P(Bv,0));}
function N$(a,b,c,d){a.hP=b;a.fM=c;a.l8=d;}
function ER(a){var b;b=a.hP;return Ce(b!==null?b.name:a.fM.name);}
function AJ7(a){var b,c,d,e,f,g;if(a.fM===null){b=a.l8;c=ER(a);d=ZA(b);e=new R;T(e);J(J(J(e,d),C(214)),c);c=S(e);}else{b=a.l8;c=ER(a);f=a.fM.size;g=f|0;if(g!==f){d=ER(a);e=new R;T(e);J(J(e,C(215)),d);$rt_globals.console.info($rt_ustr(S(e))+f);g=0;}d=ZA(b);e=new R;T(e);Bl(J(J(J(J(e,d),C(214)),c),C(216)),g);c=S(e);}return c;}
function HG(){var a=this;B.call(a);a.bA=null;a.fD=null;a.lO=null;a.gA=null;a.du=null;a.uA=null;a.vc=null;a.vR=null;}
function AWl(a,b,c,d,e){var f=new HG();Iw(f,a,b,c,d,e);return f;}
function Iw(a,b,c,d,e,f){var g;g=c.data;a.uA=AAq(C(217),16.0);a.vc=AAq(C(217),17.0);a.vR=AAq(C(57),15.0);a.bA=b;a.lO=c;a.gA=d;if(g.length>=15){a.fD=e;a.du=f;return;}b=new BF;X(b);L(b);}
function Na(a,b){if(b===null)b=a.bA.fb;return b;}
function UU(){var a=this;B.call(a);a.sI=null;a.sJ=null;}
function Kg(){var a=this;Kk.call(a);a.pP=null;a.on=null;}
function YL(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.pP;e=0;f=0;g=a.on;a:{b:{while(true){if((e+32|0)>f&&Fn(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=EI(b)+j|0;h=i.length;f=Ba(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new BV;b=new R;T(b);Bl(J(Bl(J(b,C(218)),k),C(200)),h);Bp(l,S(b));L(l);}if(EI(b)<e)break;if(e<0){b=new BV;c=new R;T(c);J(Bl(J(c,C(201)),e),C(202));Bp(b,S(c));L(b);}h=b.cs;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.rC.data[n+b.uQ|0];m=m+1|0;j=o;n=k;}b.cs
=h+e|0;e=0;}if(!Fn(c)){l=!Fn(b)&&e>=f?AV8:AV7;break a;}i=g.data;k=Ba(EI(c),i.length);p=new NA;p.m0=b;p.qC=c;l=AA3(a,d,e,f,g,0,k,p);e=p.ux;j=p.vU;if(l===null){if(!Fn(b)&&e>=f)l=AV8;else if(!Fn(c)&&e>=f)l=AV7;}Wt(c,g,0,j);if(l!==null)break a;}b=new VQ;X(b);L(b);}p=new BV;l=new R;T(l);BX(Bl(J(Bl(J(l,C(203)),j),C(198)),h),41);Bp(p,S(l));L(p);}SA(b,b.cs-(f-e|0)|0);return l;}
var Pv=F(Kg);
function AA3(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Lg(h,2))break a;i=AV7;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!WO(l)){if((f+3|0)>g){j=j+(-1)|0;if(Lg(h,3))break a;i=AV7;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Cs(l)){i=KM(1);break a;}if
(j>=d){if(Fn(h.m0))break a;i=AV8;break a;}c=j+1|0;m=k[j];if(!CO(m)){j=c+(-2)|0;i=KM(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Lg(h,4))break a;i=AV7;break a;}k=e.data;o=Eh(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.ux=j;h.vU=f;return i;}
var TW=F(DO);
function H4(){var a=this;B.call(a);a.wd=null;a.fb=null;a.tE=null;a.xY=null;a.qW=null;a.jm=null;a.oR=null;a.wg=null;a.k6=null;a.kV=null;a.h7=null;}
function AWm(a,b,c,d,e,f,g,h,i,j,k){var l=new H4();LY(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function LY(a,b,c,d,e,f,g,h,i,j,k,l){a.wd=b;a.fb=c;a.tE=d;a.xY=e;a.qW=f;a.jm=g;a.oR=h;a.wg=i;a.k6=j;a.kV=k;a.h7=l;}
var YX=F(0);
function Yb(){var a=this;B.call(a);a.eT=null;a.gr=null;a.oS=null;a.mY=null;}
function ABU(a,b,c,d){var e=new Yb();AQ2(e,a,b,c,d);return e;}
function AQ2(a,b,c,d,e){a.eT=b;a.gr=c;a.oS=d;a.mY=e;}
var ABg=F(0);
function ADu(){var b,c;b=new Ii;c=O(C(219));ALy();JI(b,c,AWn,AWo);return b;}
function ACU(){var b,c;b=new Ii;c=O(C(106));AEK();JI(b,c,AWp,AWq);return b;}
function ADn(){var b,c;b=new Ii;ACI();c=AWr;AEZ();JI(b,c,AWs,AWt);return b;}
function ADO(){var a=this;B.call(a);a.rS=null;a.mG=null;a.t7=null;a.nd=null;}
function Yh(a,b,c,d){var e=new ADO();AFj(e,a,b,c,d);return e;}
function AFj(a,b,c,d,e){a.rS=b;a.mG=c;a.t7=d;a.nd=e;}
function XQ(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.du.mG;break a;case 3:if(c!=3){b=b.du.nd;break a;}b=b.du.t7;break a;default:b=b.bA.fb;break a;}b=b.du.rS;}return b;}
function HU(a,b,c){return XQ(a,b,0,c);}
function L5(){var a=this;B.call(a);a.iS=null;a.it=null;}
function Mh(a,b){var c;c=a.it;a.it=b;return c;}
function IX(){var a=this;L5.call(a);a.bE=null;a.bV=null;a.fg=0;a.fr=0;}
function Je(a){var b;b=Km(a);if(b==2){if(Km(a.bV)<0)a.bV=M0(a.bV);return OT(a);}if(b!=(-2))return a;if(Km(a.bE)>0)a.bE=OT(a.bE);return M0(a);}
function Km(a){var b,c;b=a.bV;c=b===null?0:b.fg;b=a.bE;return c-(b===null?0:b.fg)|0;}
function M0(a){var b;b=a.bE;a.bE=b.bV;b.bV=a;D7(a);D7(b);return b;}
function OT(a){var b;b=a.bV;a.bV=b.bE;b.bE=a;D7(a);D7(b);return b;}
function D7(a){var b,c,d;b=a.bV;c=b===null?0:b.fg;b=a.bE;d=b===null?0:b.fg;a.fg=Z(c,d)+1|0;a.fr=1;b=a.bE;if(b!==null)a.fr=1+b.fr|0;b=a.bV;if(b!==null)a.fr=a.fr+b.fr|0;}
function If(){var a=this;B5.call(a);a.f8=0;a.f_=0;a.f9=0;a.f$=0;}
function HB(a){var b=new If();AQ7(b,a);return b;}
function D4(a,b,c){var d=new If();AHc(d,a,b,c);return d;}
function O(a){var b=new If();AOQ(b,a);return b;}
function E9(a,b,c,d){var e=new If();QY(e,a,b,c,d);return e;}
function BG(a){var b=new If();Jk(b,a);return b;}
function AQ7(a,b){QY(a,b,b,b,255);}
function AHc(a,b,c,d){QY(a,b,c,d,255);}
function AOQ(a,b){if(!(H(b)!=4&&H(b)!=7&&H(b)!=9)&&I(b,0)==35){if(H(b)==4){a.f8=Il(I(b,1))*17|0;a.f_=Il(I(b,2))*17|0;a.f9=Il(I(b,3))*17|0;a.f$=255;}else{a.f8=K3(I(b,1),I(b,2));a.f_=K3(I(b,3),I(b,4));a.f9=K3(I(b,5),I(b,6));a.f$=H(b)!=9?255:K3(I(b,7),I(b,8));}Jp(a.f8,a.f_,a.f9,a.f$,a);return;}}
function QY(a,b,c,d,e){a.f8=b;a.f_=c;a.f9=d;a.f$=e;Jp(b,c,d,e,a);}
function Jk(a,b){a.f8=b.f8;a.f_=b.f_;a.f9=b.f9;a.f$=b.f$;Ej(a,b);}
function Il(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function K3(b,c){return (16*Il(b)|0)+Il(c)|0;}
var CJ=F(0);
var AVC=null;var AWr=null;var AVE=null;var AVD=null;var AVG=null;var AVF=null;var AVI=null;var AVH=null;var AVK=null;var AVJ=null;var AVL=null;function ACI(){ACI=Bn(CJ);AQw();}
function AQw(){AVC=HB(0);AWr=D4(8,8,8);AVE=O(C(220));AVD=D4(255,255,255);AVG=O(C(221));AVF=O(C(222));AVI=O(C(223));AVH=O(C(224));AVK=E9(205,205,205,153);AVJ=E9(255,255,255,0);AVL=O(C(120));}
function Ca(){Cr.call(this);this.k3=null;}
var AWu=null;var AWv=null;var AWw=null;var AWx=null;var AWy=null;var AWz=null;var AWA=null;var AWB=null;var AWC=null;var AWD=null;var AWE=null;var AWF=null;var AWG=null;var AWH=null;var AWI=null;var AVM=null;function ABP(){ABP=Bn(Ca);AQY();}
function De(a,b,c){var d=new Ca();Rb(d,a,b,c);return d;}
function AQN(a,b,c,d){var e=new Ca();Y3(e,a,b,c,d);return e;}
function Rb(a,b,c,d){ABP();Dt(a,b,c);a.k3=Hu(d,null);}
function Y3(a,b,c,d,e){ABP();Dt(a,b,c);a.k3=Hu(d,e);}
function AQY(){var b;b=new Ca;ACI();Rb(b,C(225),0,AWr);AWu=b;AWv=De(C(226),1,O(C(227)));AWw=De(C(228),2,O(C(229)));AWx=De(C(230),3,O(C(231)));AWy=De(C(232),4,AWr);AWz=De(C(233),5,O(C(234)));AWA=De(C(235),6,O(C(236)));AWB=De(C(237),7,O(C(238)));AWC=De(C(239),8,O(C(240)));AWD=AQN(C(241),9,AWr,D4(237,235,252));AWE=AQN(C(242),10,O(C(243)),O(C(244)));AWF=De(C(245),11,O(C(236)));AWG=De(C(246),12,O(C(247)));AWH=De(C(248),13,O(C(249)));b=De(C(250),14,O(C(251)));AWI=b;AVM=G(Ca,[AWu,AWv,AWw,AWx,AWy,AWz,AWA,AWB,AWC,AWD,
AWE,AWF,AWG,AWH,b]);}
function In(){var a=this;B.call(a);a.h8=null;a.j9=null;}
function Hu(a,b){var c=new In();ALF(c,a,b);return c;}
function ALF(a,b,c){a.h8=b;a.j9=c;}
function HK(){var a=this;B.call(a);a.iy=null;a.hJ=null;a.vN=null;a.yO=null;a.kv=null;a.ph=null;a.nZ=null;}
function AWJ(a,b,c,d,e,f,g){var h=new HK();K4(h,a,b,c,d,e,f,g);return h;}
function K4(a,b,c,d,e,f,g,h){a.vN=b;a.yO=c;a.hJ=d;a.kv=e;a.iy=f;a.ph=g;a.nZ=h;}
function AA9(){var a=this;B.call(a);a.lZ=null;a.rl=0;}
function XZ(a,b){var c=new AA9();AON(c,a,b);return c;}
function AON(a,b,c){var d;d=new B5;a.lZ=d;a.rl=b;d.bZ=c;}
function Pb(a,b){return Co(a.rl,b);}
var Dd=F(0);
var AVQ=null;var AVR=null;var AVN=null;var AVO=null;var AVP=null;var AWs=null;var AWt=null;var AVS=null;var AVT=null;function AEZ(){AEZ=Bn(Dd);AHf();}
function AHf(){AVQ=O(C(118));AVR=O(C(252));AVN=O(C(253));AVO=O(C(254));AVP=O(C(255));AWs=O(C(118));AWt=O(C(252));AVS=E9(205,205,205,153);AVT=D4(247,248,250);}
function ZJ(){var a=this;B.call(a);a.jn=null;a.hK=0.0;}
function AAq(a,b){var c=new ZJ();AMU(c,a,b);return c;}
function AMU(a,b,c){a.jn=b;a.hK=c;}
function AOC(a,b){if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){b=b;return a.hK===b.hK&&BJ(a.jn,b.jn)?1:0;}return 0;}
var CK=F(0);
var AU4=null;var AWK=null;var AU6=null;var AU5=null;var AU8=null;var AU7=null;var AU$=null;var AU9=null;var AVa=null;var AU_=null;var AVb=null;function ACZ(){ACZ=Bn(CK);ARh();}
function ARh(){AU4=HB(187);AWK=O(C(256));AU6=HB(55);AU5=HB(43);AU8=D4(33,66,131);AU7=D4(60,63,65);AU$=O(C(257));AU9=O(C(258));AVa=E9(85,85,85,128);AU_=E9(43,43,43,0);AVb=O(C(103));}
function B8(){Cr.call(this);this.lW=null;}
var AWL=null;var AWM=null;var AWN=null;var AWO=null;var AWP=null;var AWQ=null;var AWR=null;var AWS=null;var AWT=null;var AWU=null;var AWV=null;var AWW=null;var AWX=null;var AWY=null;var AWZ=null;var AVc=null;function ZQ(){ZQ=Bn(B8);AJN();}
function Dw(a,b,c){var d=new B8();Ts(d,a,b,c);return d;}
function AOR(a,b,c,d){var e=new B8();AC7(e,a,b,c,d);return e;}
function Ts(a,b,c,d){ZQ();Dt(a,b,c);a.lW=Hu(d,null);}
function AC7(a,b,c,d,e){ZQ();Dt(a,b,c);a.lW=Hu(d,e);}
function AJN(){var b;b=new B8;ACZ();Ts(b,C(225),0,AWK);AWL=b;AWM=Dw(C(226),1,O(C(259)));AWN=Dw(C(228),2,O(C(260)));AWO=Dw(C(230),3,O(C(261)));AWP=Dw(C(232),4,O(C(259)));AWQ=Dw(C(233),5,D4(188,63,60));AWR=Dw(C(235),6,O(C(262)));AWS=Dw(C(237),7,O(C(263)));AWT=Dw(C(239),8,O(C(264)));AWU=AOR(C(241),9,AWK,D4(52,65,52));AWV=AOR(C(242),10,O(C(243)),O(C(265)));AWW=Dw(C(245),11,O(C(236)));AWX=Dw(C(246),12,O(C(247)));AWY=Dw(C(248),13,AWK);b=Dw(C(250),14,O(C(251)));AWZ=b;AVc=G(B8,[AWL,AWM,AWN,AWO,AWP,AWQ,AWR,AWS,AWT,AWU,
AWV,AWW,AWX,AWY,b]);}
var Ds=F(0);
var AVg=null;var AVh=null;var AVd=null;var AVe=null;var AVf=null;var AWn=null;var AWo=null;var AVi=null;var AVj=null;function ALy(){ALy=Bn(Ds);AMx();}
function AMx(){AVg=O(C(266));AVh=O(C(267));AVd=O(C(219));AVe=O(C(268));AVf=O(C(256));AWn=O(C(266));AWo=O(C(267));AVi=E9(118,121,122,128);AVj=D4(63,66,68);}
var CT=F(0);
var AVk=null;var AW0=null;var AVm=null;var AVl=null;var AVo=null;var AVn=null;var AVq=null;var AVp=null;var AVs=null;var AVr=null;var AVt=null;function AH0(){AH0=Bn(CT);APb();}
function APb(){AVk=HB(206);AW0=O(C(269));AVm=O(C(270));AVl=O(C(112));AVo=O(C(271));AVn=O(C(272));AVq=O(C(273));AVp=O(C(274));AVs=E9(107,106,107,128);AVr=E9(30,31,34,0);AVt=O(C(114));}
function B7(){Cr.call(this);this.hN=null;}
var AW1=null;var AW2=null;var AW3=null;var AW4=null;var AW5=null;var AWi=null;var AW6=null;var AW7=null;var AW8=null;var AW9=null;var AW$=null;var AW_=null;var AXa=null;var AXb=null;var AXc=null;var AVu=null;function UK(){UK=Bn(B7);AKF();}
function Dx(a,b,c){var d=new B7();RU(d,a,b,c);return d;}
function ASo(a,b,c,d){var e=new B7();WC(e,a,b,c,d);return e;}
function RU(a,b,c,d){UK();Dt(a,b,c);a.hN=Hu(d,null);}
function WC(a,b,c,d,e){UK();Dt(a,b,c);a.hN=Hu(d,e);}
function AKF(){var b,c;b=new B7;AH0();RU(b,C(225),0,AW0);AW1=b;AW2=Dx(C(226),1,O(C(275)));AW3=Dx(C(228),2,O(C(276)));AW4=Dx(C(230),3,O(C(277)));AW5=Dx(C(232),4,AW0);AWi=Dx(C(233),5,O(C(278)));AW6=Dx(C(235),6,O(C(279)));AW7=Dx(C(237),7,O(C(280)));AW8=Dx(C(239),8,O(C(281)));c=new B7;ACZ();WC(c,C(241),9,AWK,O(C(273)));AW9=c;AW$=ASo(C(242),10,AWK,O(C(115)));AW_=Dx(C(245),11,O(C(282)));AXa=Dx(C(246),12,O(C(283)));AXb=Dx(C(248),13,AW0);b=Dx(C(250),14,O(C(251)));AXc=b;AVu=G(B7,[AW1,AW2,AW3,AW4,AW5,AWi,AW6,AW7,AW8,
AW9,AW$,AW_,AXa,AXb,b]);}
var Dk=F(0);
var AVy=null;var AVz=null;var AVv=null;var AVw=null;var AVx=null;var AWp=null;var AWq=null;var AVA=null;var AVB=null;function AEK(){AEK=Bn(Dk);AM4();}
function AM4(){AVy=O(C(272));AVz=O(C(284));AVv=O(C(106));AVw=O(C(279));AVx=O(C(269));AWp=O(C(272));AWq=O(C(285));AVA=O(C(286));AVB=D4(43,45,48);}
function HW(){var a=this;B.call(a);a.s7=null;a.nS=null;a.o$=null;a.t0=null;a.qI=null;a.hZ=null;}
function AXd(a,b,c,d,e,f){var g=new HW();L4(g,a,b,c,d,e,f);return g;}
function L4(a,b,c,d,e,f,g){a.s7=b;a.nS=c;a.o$=d;a.t0=e;a.qI=f;a.hZ=g;}
function Ii(){var a=this;B.call(a);a.ps=null;a.lG=null;a.tT=null;}
function AXe(a,b,c){var d=new Ii();JI(d,a,b,c);return d;}
function JI(a,b,c,d){a.ps=b;a.lG=c;a.tT=d;}
function Wl(a,b){return !b?a.lG:a.tT;}
function Y8(){var a=this;B.call(a);a.k9=null;a.sG=null;a.u4=null;}
function ADD(a,b,c){var d=new Y8();AP3(d,a,b,c);return d;}
function AP3(a,b,c,d){a.k9=b;a.sG=c;a.u4=d;}
function HC(){var a=this;B.call(a);a.fH=0;a.lk=null;}
function U0(){var a=this;B.call(a);a.yL=null;a.vf=null;a.fA=null;}
function FG(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.fA.data;f=e.length-1|0;g=f;while(true){if(d>g)return Ba(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.hp:i.hq;k=!c?i.mi:i.mj;if(j<=k&&k<(j+k|0))return h;j=BD(j,b);if(j<0)d=h+1|0;else{if(j<=0)break;g=h-1|0;}}return h;}
function Lp(){var a=this;B.call(a);a.hq=0;a.mj=0;a.hp=0;a.mi=0;a.j8=0;}
var YW=F();
function Co(b,c){return DE(b*c);}
var Z8=F();
function TT(){var a=this;B.call(a);a.oy=null;a.td=null;a.t8=null;}
var Up=F();
function AFz(a,b){ABW(b);}
function IW(){var a=this;B.call(a);a.er=null;a.eS=null;a.fj=null;}
var AVV=0;function ABW(a){var b;b=a.eS;if(b!==null){AVV=AVV-1|0;a.er.dO.deleteTexture(b);a.eS=null;}}
function Ci(a){return a.fj.a;}
function K7(a){return a.fj.b;}
function Tk(a,b,c,d){var e;e=a.fj;e.a=b;e.b=c;LF(a);a.er.dO.texStorage2D(3553,1,d,b,c);e=a.er.dO;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function LF(a){var b,c;b=a.er.dO;c=a.eS;b.bindTexture(3553,c);}
function Ex(a,b){var c,d,e,f,g,h;a:{c=b.lT;d=b.k0;e=a.fj;f=e.a;if(f){g=e.b;if(g){if(f==c&&g==d?1:0){LF(a);break a;}e=a.er.dO;h=a.eS;e.deleteTexture(h);a.eS=a.er.dO.createTexture();Tk(a,c,d,32856);break a;}}Tk(a,c,d,32856);}P6(a,b,0,0);}
function Ra(a,b,c,d){LF(a);P6(a,b,c,d);}
function P6(a,b,c,d){var e;e=a.er.dO;b=b.hE;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Yj=F();
function EV(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function Y6(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function Uo(){var a=this;B.call(a);a.bn=null;a.N=null;a.P=null;a.fR=null;}
function KD(a,b,c){var d;d=a.P;d.lE(b,c,d.eX);Nh(a);}
function Nh(a){var b,c,d,e;b=a.N;c=a.P.p.a;b.p.a=c;d=b.dh;if(d!==null&&c!=Ci(d)&&!(c>=b.h2&&Ci(b.dh)>=b.h2))b.gK=1;b=a.N;b.eX=a.bn.b1;if(VW(b))c=0;else{b=a.N;UV(b);e=Cl(b.e4,b.i5);Pl(b,Fw(b.eG)+(e*2|0)|0);c=b.p.b;}b=a.N.K;d=a.P.K;Bg(b,d.a,d.b-c|0);}
function Ll(b,c){if(b<0)c=C(287);else if(b>0)c=C(288);return c;}
function XC(a,b,c){var d;d=a.N.K.a;return (d-c|0)<=b&&b<d?1:0;}
function MK(a,b,c){var d,e;d=a.N;e=d.K.a+d.p.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Pj(a,b,c){var d;d=a.N.K.b;return (d-c|0)<=b&&b<d?1:0;}
function Ny(a,b,c){var d,e;d=a.P;e=d.K.b+d.p.b|0;return e<=b&&b<(e+c|0)?1:0;}
function V3(a,b,c){var d,e,f;d=a.N.K.b-c|0;e=a.P;f=(e.K.b+e.p.b|0)+c|0;return d<=b&&b<f?1:0;}
function Ww(a,b,c){var d,e;d=a.N.K.b+c|0;e=a.P;return AAA(b,d,(e.K.b+e.p.b|0)-c|0);}
function Od(a,b,c){var d,e,f;d=a.N;e=d.K.a;f=e-c|0;e=(e+d.p.a|0)+c|0;return f<=b&&b<e?1:0;}
function NG(a,b,c){var d,e;d=a.N;e=d.K.a;return AAA(b,e+c|0,(e+d.p.a|0)-c|0);}
function AAA(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BD(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function HZ(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bj;f=new Bj;g=b.a;h=b.b;b=a.P;i=b.K;j=i.a;k=i.b;b=b.p;l=b.a;m=b.b;b=new Vx;b.tP=a;b.tR=e;b.tQ=f;b.tL=c;b.tK=g;b.tO=j;b.tM=l;b.t3=d;b.t2=h;b.t4=k;b.uv=m;return b;}
function SW(){var a=this;B.call(a);a.eV=null;a.b8=null;a.fo=null;a.f1=null;a.lV=null;a.ch=null;a.fI=null;a.cE=0;a.e0=0;a.mg=0;a.ih=0;a.iR=0;a.fU=0;a.ui=null;a.pA=null;a.wC=null;a.lD=null;}
function P5(a,b,c){a.eV=b;VD(a,c);Le(a);}
function QH(a,b){var c;a.lV=b.iy;c=b.kv.lG;Ej(a.b8.da,c);c=b.hJ.k9;Ej(a.b8.gu,c);a.lD=b.kv;}
function VD(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=LM(b);d=b.b1;BM(a.eV);CM(c,a.eV);e=PX(a.eV,1.25);f=0;a.cE=Co(2.0,d);a.e0=Co(3.0,d);a.mg=Co(12.0,d);g=0;h=a.ch.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Kb(c,l.lg,0.875);n=a.mg;o=(n+m|0)+n|0;f=Z(f,o);b=l.em;b.a=g;b.b=0;b=l.dG;b.a=o;b.b=e;Cc(l.ia,g,0.0,o,k);g=g+o|0;j=j+1|0;}b=a.fo;b.a=g;b.b=e;b=a.b8.bp;o=a.fU;if(!o){m=a.cE;m=(g+m|0)+U(m,a.ch.data.length)|0;}else m=(f+(a.cE*2|0)|0)+(a.e0*2|0)|0;b.a=m;if(!o)e=e+(a.cE*2|0)|0;else{o=a.cE;e=(U(e+o|0,a.ch.data.length)
+o|0)+(a.e0*2|0)|0;}b.b=e;}
function Yx(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function ES(a){var b,c;b=a.fo;if(b.a&&b.b)return a.b8.bp;c=new Bt;Bp(c,C(289));L(c);}
function Le(a){a.iR=1;}
function ADl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.cS;if(!a.ch.data.length)return;if(a.fI===null)a.fI=GT(c);a:{if(!a.iR){d=a.fo;if(U(d.a,d.b))break a;}d=a.fo;if(!U(d.a,d.b))VD(a,b);d=a.fo;e=d.a;f=d.b;if(!U(e,f))return;d=E$(c,e,f,b.ca);CM(d,a.eV);g=PX(a.eV,0.125);h=a.eV;i=h.eh;g=g+i-(i+h.dT)/16.0;j=a.ch.data;e=j.length;f=0;while(f<e){h=j[f];Ev(d,h.lg,h.ia.bq+a.mg,g);f=f+1|0;}Ex(a.fI,d);a.iR=0;Ip(d);}if(!JL(a.b8)){d=a.b8;ZI(c,d.bp,d.ct,d.gu,a.cE,a.f1);d=a.b8;h=d.bp;k=d.ct;d=d.da;e=a.cE;l=a.f1;l.a=(h.a-e|0)
-e|0;l.b=(h.b-e|0)-e|0;BB(c,k.a+e|0,k.b+e|0,l,d);if(a.fU){d=a.b8;ABE(c,d.bp,d.ct,0,0,Pb(a.lV,b.b1),a.lV.lZ,a.f1);}}j=a.ch.data;m=j.length;n=0;while(n<m){d=j[n];h=d.em;e=h.a;f=h.b;h=d.dG;k=d.ia;l=a.fI;o=a.lD;EF(c,e,f,h,k,l,o.ps,Wl(o,d.hI),b.ca);n=n+1|0;}b:{if(a.fU){j=a.ch.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.f1;e=(a.b8.bp.a-(a.cE*2|0)|0)-(a.e0*2|0)|0;h=d.dG;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.em;BB(c,k.a+h.a|0,k.b,b,Wl(a.lD,d.hI));}p=p+1|0;}}}}
function Nz(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.ch.data;if(c>=d.length)return (-1);e=d[c];if(EV(b,e.em,e.dG))return c;if(a.fU){f=e.em;g=f.a;e=e.dG;h=e.a;g=g+h|0;i=f.b;f=a.f1;f.a=(a.b8.bp.a-(a.cE*2|0)|0)-h|0;f.b=e.b;if(Y6(b,g,i,f))break;}c=c+1|0;}return c;}
function Ng(){B.call(this);this.qK=null;}
function AHB(a,b){var c,d;c=a.qK;Xh(c,D2(c,b.n));b=Be(c);d=c.c;KW(b,d.o,d.r);Gy(c);}
var Mp=F();
function AOY(a,b){b=b;b.bc=C4(b.bc,null);}
function PP(){var a=this;B.call(a);a.bc=null;a.jo=null;a.ey=null;a.dC=0;a.J=0;a.dt=null;a.ec=null;a.gj=0;a.nc=0;}
function No(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dC;i=U(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Z(i,e))a:{while(true){if(d<=e){j=d;break a;}Fu(c);j=d+(-1)|0;b=D8(d);d=U(j,a.J)%a.ey.b|0;FO(a,c,b,a.gj,g);Ra(a.bc,c,0,d);if(!(j%a.dC|0))break;d=j;}}else{Fu(b);k=a.dC-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;FO(a,b,D8(j),U(a.J,k)+a.gj|0,g);k=k+(-1)|0;j=h;}Ex(a.bc,b);j=Z(i,e);}return j;}k=a.dC;h=U(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Ba(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Fu(c);b=D8((d+f|0)+1|0);j=d+1|0;d=U(d,
a.J)%a.ey.b|0;FO(a,c,b,a.gj,g);Ra(a.bc,c,0,d);if(!(j%a.dC|0))break;d=j;}}else{Fu(b);d=0;while(d<a.dC){h=h+1|0;FO(a,b,D8((h>e?h-f|0:h)+f|0),U(a.J,d)+a.gj|0,g);d=d+1|0;}Ex(a.bc,b);j=Ba(i,e);}return j;}
function AA0(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q;l=d/a.J|0;c=Ba((j+i|0)%e|0,c);Bg(a.dt,Ci(a.bc),a.J);e=d%K7(a.bc)|0;i=a.J;m=e/i|0;n=m+(c/i|0)|0;if(c%i|0)n=n+1|0;i=m;e=m;o=l;while(i<n){if(LA(a,g,o,l+(i-m|0)|0,f,k)){p=U((i-e|0)+1|0,a.J);Bg(a.dt,Ci(a.bc),p);Cc(a.ec,0.0,U(e,a.J),Ci(a.bc),p);}else{q=Fv(f,g,o,k);c=e-m|0;e=a.J;Es(a,h,U(c,e)-(d%e|0)|0,b,k.eT,q);o=(l+i|0)-m|0;Bg(a.dt,Ci(a.bc),a.J);Cc(a.ec,0.0,U(i,a.J),Ci(a.bc),a.J);e=i;}i=i+1|0;}q=Fv(f,g,o,k);c=e-m|0;e=a.J;Es(a,h,U(c,e)-(d%e|0)|0,b,k.eT,q);}
function LA(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Fv(e,b,c,f)!==f.gr?0:1;}
function Fv(b,c,d,e){c=c.data;return d<c.length&&c[d]?HU(b.du,b,c[d]):e.gr;}
function Es(a,b,c,d,e,f){EF(b,a.jo.a+d.a|0,c+d.b|0,a.dt,a.ec,a.bc,e,f,a.nc);}
function FO(a,b,c,d,e){Ev(b,c,a.ey.a-20.0*e,d);}
var AAh=F();
function N7(){B.call(this);this.nW=null;}
function AFI(a,b){C8(a.nW,b);}
var Dl=F(Bt);
var Tz=F(F1);
var Za=F(0);
function Yf(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(Gf(b)){case -1655966961:if(!BE(b,C(33)))break a;c=4;break a;case 3401:if(!BE(b,C(31)))break a;c=3;break a;case 98723:if(!BE(b,C(34)))break a;c=2;break a;case 3254818:if(!BE(b,C(29)))break a;c=1;break a;case 3556653:if(!BE(b,C(21)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;default:d=Ed();e=new R;T(e);J(J(e,C(290)),b);Cn(d,S(e));c=0;break b;}c=0;}return c;}
function Vr(){B.call(this);this.p3=null;}
function ALQ(a,b){var c,d,e,f;c=a.p3;if(c.eb!=3){b=b.data;d=CF(b[0]);e=Ei(b[1]);Ms(c.f,d,e,null,null);if(c.eD){b=Ea(c);f=JS(Ec(),c.tA);c=new R;T(c);J(FV(J(J(c,b),C(291)),f),C(37));$rt_globals.console.info($rt_ustr(S(c)));}}}
function ADB(){var a=this;B.call(a);a.jU=null;a.kd=null;a.d1=null;a.jZ=null;a.bk=null;a.lh=null;a.lq=null;a.eN=null;a.fl=null;a.g8=null;}
function AQ$(a,b){var c=new ADB();ALe(c,a,b);return c;}
function ALe(a,b,c){var d,e,f;a.d1=b;a.jZ=c;a.bk=AFZ();b=new R;T(b);a.g8=b;a.eN=Ke();b=new SQ;d=AC5(16);b.fd=0;b.dq=P(Hf,d);b.o8=0.75;Vk(b);a.fl=b;b=new Vo;c=a.bk;e=a.g8;f=a.eN;b.cT=c;b.jF=e;b.q3=f;a.lh=b;b=new Vg;b.cw=c;b.kQ=e;b.pK=f;a.lq=b;}
function Nk(a){var b,c,d,e,f,g,h;a:{b=Jn(a.d1.d_);c=b.gE;if(c.cA>0){d=c.cy;e=0;b:while(true){f=b.gE.bX.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cn;if(I4(a.eN,g))B_(a.eN,g);else{h=a.eN;Ee(h,g,Ct(h.cA));}c=c.cu;if(d!=b.gE.cy)break b;}e=e+1|0;}b=new GB;X(b);L(b);}}b=a.d1.eO;if(b!==null)Rq(a,b);Bi(a.bk,a.d1.d_.cA);b=Sv(Jn(a.d1.d_));while(EP(b)){c=O1(b);F$(a.bk,a.g8.H,H(c));CW(a.g8,c);}b=Sv(Jn(a.d1.d_));while(EP(b)){c=O1(b);c=B_(a.d1.d_,c);Bi(a.bk,c.k);c=BO(c);while(BP(c)){g=BS(c);g=B_(a.eN,g);Bi(a.bk,
g.bd);}}if(a.d1.eO===null)Bi(a.bk,(-1));else{Bi(a.bk,a.fl.fd);SE(a,a.d1.eO);}if(a.jZ===null)Bi(a.bk,(-1));else{Bi(a.bk,1);YG(a.jZ,a.bk,a.fl);}a.jU=P9(a.bk);a.kd=E4(S(a.g8));}
function Rq(a,b){var c,d,e,f,g,h;if(VB(a.fl,b))LH(a.fl,b);else{c=a.fl;d=Ct(c.fd);if(b===null){e=Qu(c);if(e===null){c.ja=c.ja+1|0;e=VF(c,null,0,0);f=c.fd+1|0;c.fd=f;if(f>c.ll)Nf(c);}}else{g=Ix(b);h=g&(c.dq.data.length-1|0);e=Nm(c,b,h,g);if(e===null){c.ja=c.ja+1|0;e=VF(c,b,h,g);f=c.fd+1|0;c.fd=f;if(f>c.ll)Nf(c);}}e.cF=d;}b=b.cg;if(b===null)return;c=new Xx;c.pO=a;b.el(c);}
function SE(a,b){var c,d,e,f;c=(LH(a.fl,b)).bd;Bi(a.bk,c);if(b instanceof Ki)Bi(a.bk,(-1));else if(!(b instanceof JO))Bi(a.bk,0);else Bi(a.bk,1);d=a.lh;Bi(d.cT,b.dQ.cB());e=b.dQ;f=new L_;f.vS=d;e.el(f);d=a.lq;Bi(d.cw,b.eg.cB());e=b.eg;f=new UN;f.tG=d;e.el(f);d=b.h_;Bi(a.bk,d.cB());e=new VL;e.uy=a;d.el(e);d=b.fQ;Bi(a.bk,d.cB());d=d.bY();while(d.cf()){e=d.bR();M6(a.lh,e.id);Gv(a.lq,e.i9);Bi(a.bk,e.pi);}d=b.tC;if(d===null)Bi(a.bk,(-1));else Bi(a.bk,(B_(a.eN,d)).bd);b=b.cg;Bi(a.bk,b.cB());d=new OU;d.m1=a;b.el(d);}
function Mr(){B.call(this);this.tU=null;}
function AEa(a,b){var c,d,e,f,g,h,i,j;c=a.tU;if(c.eD){d=Ea(c);e=new R;T(e);J(J(e,d),C(292));$rt_globals.console.info($rt_ustr(S(e)));}b=b.data;f=CF(b[0]);g=Ei(b[1]);h=(CF(b[2])).data[0];if(c.f.b0==h){i=null;j=null;if(b.length>=5){i=CF(b[3]);j=Ei(b[4]);}Ms(c.f,f,g,i,j);DJ(c.f.cM);DJ(c.f.cV);Js(c.f);G3(c.f);LB(c);}}
function PY(){var a=this;B.call(a);a.qS=null;a.qU=null;a.qT=null;}
function AOi(a,b){VS(a.qS,a.qU,b,a.qT);}
function Sh(){var a=this;B.call(a);a.vy=null;a.vz=null;a.vx=0;}
function AHA(a,b){var c,d,e;c=a.vy;d=a.vz;e=a.vx;d.j(V2(c,(b.n.a+e|0)-c.dY.a|0));}
function Sg(){var a=this;B.call(a);a.pg=null;a.pe=null;a.pf=0;}
function AQb(a,b){var c,d,e;c=a.pg;d=a.pe;e=a.pf;d.j(PI(c,(b.n.b+e|0)-c.dY.b|0));}
var ED=F(0);
function Np(){var a=this;B.call(a);a.ht=0;a.mk=0;a.iz=0;a.fY=0;a.gD=null;}
function BP(a){return a.ht>=a.iz?0:1;}
function BS(a){var b,c;Pc(a);b=a.ht;a.fY=b;c=a.gD;a.ht=b+1|0;return c.lv(b);}
function Q$(a){var b,c,d;if(a.fY<0){b=new Dl;X(b);L(b);}Pc(a);a.gD.mp(a.fY);a.mk=a.gD.bO;c=a.fY;d=a.ht;if(c<d)a.ht=d-1|0;a.iz=a.iz-1|0;a.fY=(-1);}
function Pc(a){var b;if(a.mk>=a.gD.bO)return;b=new GB;X(b);L(b);}
function Xe(){B.call(this);this.o9=null;}
function AFF(a){return Rl(a.o9);}
function Xd(){B.call(this);this.pN=null;}
function AMm(a){return Rl(a.pN);}
function SN(){B.call(this);this.x4=null;}
function AMR(a){return ADN(0);}
var AB7=F();
var ACh=F();
function Rv(){B.call(this);this.na=null;}
function APP(a,b){GO(a.na,b);}
function Nl(){B.call(this);this.pn=null;}
function AKC(a,b){GO(a.pn,b);}
function VP(){B.call(this);this.r6=null;}
function AQE(a,b){var c,d,e,f;c=a.r6;if(c.gd!=3&&c.eb!=3){b=b.data;c.gt=3;d=CF(b[0]);e=Ei(b[1]);K6(c.f,d,e);if(c.eD){b=Ea(c);f=JS(Ec(),c.hs);c=new R;T(c);J(FV(J(J(c,b),C(293)),f),C(37));$rt_globals.console.info($rt_ustr(S(c)));}}}
function Qd(){B.call(this);this.rH=null;}
function AFO(a,b){var c,d,e,f,g,h;c=a.rH;if(c.eb!=3){d=b.data;c.gd=3;if((CF(d[2])).data[0]!=1)GO(c,b);else{e=CF(d[0]);f=Ei(d[1]);g=c.gt!=3?0:1;QQ(c.f,e,f,g);if(c.eD){b=Ea(c);h=JS(Ec(),c.hs);c=new R;T(c);J(FV(J(J(c,b),C(294)),h),C(37));$rt_globals.console.info($rt_ustr(S(c)));}}}}
function M2(){var a=this;B.call(a);a.qH=0;a.qG=0;}
function ACS(){var a=this;B.call(a);a.gM=null;a.lm=0;a.eZ=0;}
function AFZ(){var a=new ACS();AQ9(a);return a;}
function AQ9(a){a.lm=0;a.gM=By(16);a.eZ=0;}
function F$(a,b,c){Bi(a,b);Bi(a,c);}
function Bi(a,b){var c,d;c=a.gM;d=c.data.length;if(d==a.eZ)a.gM=Io(c,d*2|0);c=a.gM.data;d=a.eZ;a.eZ=d+1|0;c[d]=b;}
function P9(a){var b,c,d,e,f;b=a.lm;if(b&&a.eZ!=b){c=Ed();b=a.lm;d=a.eZ;e=new R;T(e);J(Bl(J(Bl(J(e,C(295)),b),C(296)),d),C(297));Cn(c,S(e));}f=a.gM;b=f.data.length;d=a.eZ;if(b!=d)f=Io(f,d);return f;}
function SQ(){var a=this;DB.call(a);a.fd=0;a.dq=null;a.ja=0;a.o8=0.0;a.ll=0;}
function AC5(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Vk(a){a.ll=a.dq.data.length*a.o8|0;}
function VB(a,b){return Xi(a,b)===null?0:1;}
function LH(a,b){var c;c=Xi(a,b);if(c===null)return null;return c.cF;}
function Xi(a,b){var c,d;if(b===null)c=Qu(a);else{d=Ix(b);c=Nm(a,b,d&(a.dq.data.length-1|0),d);}return c;}
function Nm(a,b,c,d){var e;e=a.dq.data[c];while(e!==null&&!(e.li==d&&(b!==e.cn?0:1))){e=e.gI;}return e;}
function Qu(a){var b;b=a.dq.data[0];while(b!==null&&b.cn!==null){b=b.gI;}return b;}
function VF(a,b,c,d){var e,f;e=new Hf;XB(e,b,null);e.li=d;f=a.dq.data;e.gI=f[c];f[c]=e;return e;}
function Nf(a){var b,c,d,e,f,g,h,i;b=a.dq.data.length;b=AC5(!b?1:b<<1);c=P(Hf,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dq.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.li&f;i=h.gI;h.gI=d[b];d[b]=h;h=i;}e=e+1|0;}a.dq=c;Vk(a);}
function Vo(){var a=this;B.call(a);a.cT=null;a.jF=null;a.q3=null;}
function M6(a,b){var c;if(!(b instanceof LI)){Bi(a.cT,3);Wx(a,b);Bi(a.cT,b.gT);}else{c=b;Bi(a.cT,5);Wx(a,c);Bi(a.cT,c.gT);Bi(a.cT,c.mP);b=c.jq;Bi(a.cT,b.k);c=new MU;c.n7=a;DY(b,c);}}
function Wx(a,b){var c;c=b.dS.g4;F$(a.cT,a.jF.H,H(c));Bi(a.cT,b.dS.c4);Mj(a,b.jc);CW(a.jF,c);}
function Mj(a,b){if(b===null)Bi(a.cT,(-1));else Bi(a.cT,(B_(a.q3,b)).bd);}
function Vg(){var a=this;B.call(a);a.cw=null;a.kQ=null;a.pK=null;}
function Gv(a,b){var c,d,e;if(b instanceof FR){c=b;Bi(a.cw,9);PW(a,c.gg);}else if(b instanceof H$){d=b;Bi(a.cw,3);Qy(a,d);Bi(a.cw,d.nb);PW(a,d.gs);}else if(b instanceof It){e=b;Bi(a.cw,4);Gv(a,e.hj);Gv(a,e.gv);}else if(b===null)Bi(a.cw,(-1));else{Bi(a.cw,5);Qy(a,b);Bi(a.cw,b.sK);}}
function Qy(a,b){var c;c=b.eJ.g4;F$(a.cw,a.kQ.H,H(c));Bi(a.cw,b.eJ.c4);b=b.fc;if(b===null)Bi(a.cw,(-1));else Bi(a.cw,(B_(a.pK,b)).bd);CW(a.kQ,c);}
function PW(a,b){var c;Bi(a.cw,b.k);c=new XG;c.oe=a;DY(b,c);}
function S5(){B.call(this);this.ql=null;}
function AOI(a,b){var c;c=a.ql;C8(c,b);Ji(c,null);Xf(c);}
var ABA=F();
function AMT(b,c){return {oldModelUrl:b,newModelUrl:c};}
function T2(){var a=this;B.call(a);a.rU=0;a.wr=0;}
function Ha(a,b){return P4(a.rU,b,a.wr);}
var D1=F(Bt);
function NA(){var a=this;B.call(a);a.m0=null;a.qC=null;a.ux=0;a.vU=0;}
function Lg(a,b){return EI(a.qC)<b?0:1;}
function Tv(){B.call(this);this.uF=null;}
function AK$(a,b){GO(a.uF,b);}
function Tw(){B.call(this);this.tl=null;}
function AMV(a,b){GO(a.tl,b);}
var AC2=F();
function T5(b,c,d,e){var f,g;f=b.next();g=new WY;g.ni=b;g.nh=c;g.nk=d;g.nj=e;f.then(Bm(g,"f"),Bm(d,"f"));}
function YE(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ADA(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Fe()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new WV;f.rm=b;f.rn=d;d.addEventListener("change",Bm(f,"handleEvent"));d.click();}
function YN(b,c){var d;if(c.isFile?1:0)b.j(X9(c.file()));else{c=c.createReader();d=new WF;d.uI=b;c.readEntries(Bm(d,"f"));}}
function S$(){var a=this;B.call(a);a.bh=null;a.oz=null;a.gy=null;a.mx=null;a.jx=null;a.eR=null;}
function F8(a){return a.bh.bD.fz;}
function XL(a){var b;b=new SP;b.vB=a;return b;}
function AAr(a){var b,c,d,e,f;b=P(Dn,5);c=b.data;d=a.bh;BM(d);e=new Xt;e.sM=d;c[0]=CB(C(298),e);e=a.bh;BM(e);f=new Xo;f.oi=e;c[1]=CB(C(299),f);d=a.bh;BM(d);e=new Xp;e.pt=d;c[2]=CB(C(300),e);d=a.bh;BM(d);e=new Xq;e.vv=d;c[3]=CB(C(301),e);d=a.bh;BM(d);e=new Xr;e.m6=d;c[4]=CB(C(302),e);return GR(b);}
function Pa(a,b){var c;c=new N4;c.v6=a;c.v7=b;return c;}
function IY(a,b,c){var d,e,f,g,h,i,j;a:{Dv(a.eR.bU);d=a.bh.c;e=DT(d);f=FK(d);g=a.bh.cv;if(c===null)h=null;else{AS8();switch(AXf.data[c.gf]){case 1:h=LK(g,e,f);break a;case 2:h=QI(g,e,f);break a;default:}b=new Fm;X(b);L(b);}}c=a.bh;f=D2(c,b);e=Gw(c.c.f,f.U,f.bb);g=Kw(c,e);if(h!==null){e=c.c;i=f.U;j=f.bb;f=new TD;f.ry=c;f.rx=b;f.rw=g;h.lp(e,i,j,f,c.hF);}else{f=B_(c.c.f.cV,e);if(f!==null)HE(c,f);else{f=B_(c.c.f.cM,e);if(f!==null&&!DG(f))Q8(c.eE,b,f,c,g);else Ka(c.eE,b,c);}}}
var Y2=F(0);
var QM=F(0);
var Nq=F(0);
var GD=F();
function Sp(){GD.call(this);this.tY=null;}
function Uk(a,b){var c,d,e;c=0;while(true){d=a.tY;if(d.h5===null)d.h5=BO(d.pT);if(!BP(d.h5))e=0;else{c=b.co(BS(d.h5));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var QC=F(0);
function TE(){B.call(this);this.IY=null;}
var AWd=null;function SR(b){return b===null?C(3):UZ(b);}
function WP(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=d.c;f=BA();g=c!==null?c.data.length:b.k;h=0;while(h<g){if(c===null){i=(Bs(b,h)).U;j=RZ(EJ(BK(e.f,i)));k=SR(e.c9);}else{l=c.data;i=l[h].fX.e5;j=!BJ(e.c9,l[h].g9)?C(3):RZ(EJ(BK(e.f,i)));k=SR(l[h].g9);}if(H(j)>153){m=B9(j,0,150);j=new R;T(j);J(J(j,m),C(55));j=S(j);}if(H(k)>153){k=B9(k,0,150);m=new R;T(m);J(J(m,k),C(55));k=S(m);}n=D8(i+1|0);if(c!==null){l=c.data;o=null;p=l[h];}else{p=null;o=Bs(b,h);}if(c!==null){m=new WI;m.qr=d;m.qs=p;}else{m=new WJ;m.vu=d;m.vt=o;}o
=new JN;o.sL=m;o.iv=n;o.iH=j;o.fJ=k;Bw(f,o);h=h+1|0;}return Hj(f,AWd);}
function ADd(){AWd=P(JN,0);}
function Rn(){var a=this;B.call(a);a.n8=null;a.n4=null;a.n5=0;a.n6=0;}
function Hf(){var a=this;F4.call(a);a.li=0;a.gI=null;}
var GB=F(Bt);
var W0=F();
function AOw(a,b){YE(b);}
function WZ(){var a=this;B.call(a);a.qF=null;a.qE=null;}
function AG5(a,b){var c,d,e,f,g,h,i;c=a.qF;d=a.qE;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new Qe;i.oL=c;i.oK=g;h.then(Bm(i,"f"),Bm(d,"f"));e=e+1|0;}}
var Wg=F();
function AIN(a,b){YE(b);}
function Wf(){var a=this;B.call(a);a.p4=null;a.p5=null;}
function AJB(a,b){var c,d,e,f,g;c=a.p4;d=a.p5;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=P(Bv,1);g.data[0]=Ce(b.name);T5(f,c,d,g);}
function Yw(){B.call(this);this.Em=null;}
function WV(){var a=this;B.call(a);a.rm=null;a.rn=null;}
function AIz(a,b){var c,d,e,f,g,h;b=a.rm;c=a.rn;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new Mx;h.m$=b;h.m9=g;$rt_globals.setTimeout(Bm(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=X9(d.item(f));g=new Me;g.sQ=b;g.sR=c;$rt_globals.setTimeout(Bm(g,"onTimer"),0);f=f+1|0;}}
function JN(){var a=this;B.call(a);a.sL=null;a.iv=null;a.iH=null;a.fJ=null;}
function Jh(){var a=this;B.call(a);a.g9=null;a.fX=null;}
function L6(){var a=this;B.call(a);a.iu=0;a.jd=0;a.fC=0;a.e5=0;}
function WI(){var a=this;B.call(a);a.qr=null;a.qs=null;}
function AE_(a){Sb(a.qr,a.qs);}
function WJ(){var a=this;B.call(a);a.vu=null;a.vt=null;}
function AJg(a){HE(a.vu,a.vt);}
function E2(){var a=this;B.call(a);a.f0=null;a.cg=null;a.eg=null;a.dQ=null;a.fQ=null;a.h_=null;a.tC=null;}
function ARG(a){var b=new E2();ABi(b,a);return b;}
function ABi(a,b){a.f0=b;a.cg=BA();a.eg=BA();a.dQ=BA();a.h_=BA();a.fQ=BA();}
function W6(a){var b;b=a.f0;if(b!==null)b.cg.nM(a);}
function Xx(){B.call(this);this.pO=null;}
function AIE(a,b){b=b;Rq(a.pO,b);}
var Ki=F(E2);
var JO=F(E2);
function VL(){B.call(this);this.uy=null;}
function AFe(a,b){var c;b=b;c=a.uy;Bi(c.bk,(B_(c.eN,b)).bd);}
function PS(){var a=this;B.call(a);a.id=null;a.i9=null;a.pi=0;}
function OU(){B.call(this);this.m1=null;}
function ALs(a,b){b=b;SE(a.m1,b);}
function QA(){var a=this;B.call(a);a.j$=0;a.qg=null;}
function ARx(a,b){var c,d,e;c=a.qg;b=b;d=c.qH;e=c.qG;d=b.a<=d&&e<=b.b?1:0;a.j$=d;return d?0:1;}
var Xu=F(D1);
var Q0=F(Bt);
var VQ=F(Bt);
function Pi(){B.call(this);this.rF=null;}
function AMQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.rF;d=CF(c[0]);e=(CF(c[1])).data[0];if(!TG(b.f)){c=b.f;if(c.b0==e){e=b.mU;f=Lq(d);DJ(c.cV);DJ(c.cM);Js(c);while(f.ei>=f.gP.data.length?0:1){if(V(f)==(-1))continue;g=Xm(c,V(f));h=Lw(BK(c,g.U),g.bb);if(V(f)==(-1)){if(!e)continue;h.bP=0;h.bJ=h.bJ|4;continue;}i=Xm(c,V(f));j=V(f);k=V(f);Ee(c.cV,g,i);l=c.cM;m=BA();if(B_(l,i)===null)Ee(l,i,m);Bw(B_(c.cM,i),g);h.bP=j;h.bJ=k;}Ku(b);if(b.xq){n=JS(Ec(),b.uS);if(AR9(n,BL(100))){b=Ea(b);c=new R;T(c);J(FV(J(J(c,b),
C(303)),n),C(37));$rt_globals.console.info($rt_ustr(S(c)));}}}}}
function ADY(){B.call(this);this.H0=null;}
function Wb(){B.call(this);this.mq=null;}
var AWg=null;function Td(){var a=new Wb();Zg(a);return a;}
function Zg(a){a.mq=BA();}
function DF(a,b,c){OR(a,CB(b,c));}
function CB(b,c){return Nr(c,b);}
function EC(a,b,c){KG(a,b,c,null);}
function KG(a,b,c,d){OR(a,ASO(null,b,c,d));}
function OR(a,b){Bw(a.mq,b);}
function HF(a){return GR(Hj(a.mq,AWg));}
function Yq(){AWg=P(Dn,0);}
function Qr(){var a=this;B.call(a);a.nn=null;a.no=null;}
function ARz(a){var b,c;b=a.nn;c=a.no;Fo(b.d$,c);}
function Vn(){B.call(this);this.s6=null;}
function Qj(){var a=this;B.call(a);a.pT=null;a.h5=null;}
function EG(){var a=this;B.call(a);a.K=null;a.p=null;a.eX=0.0;}
function ARA(){var a=new EG();La(a);return a;}
function La(a){a.K=new Bj;a.p=new Bj;}
function ANY(a){}
function ABG(a){return Cg(0,0);}
function Rt(a,b,c,d){var e;if(!HO(a.K,b)){a.o4(b);Cw(a.K,b);}if(!HO(a.p,c)){a.oI(c);Cw(a.p,c);}e=a.eX;if(e!==d){a.eX=d;a.qu(e,d);}}
function Dj(a,b){return EV(b,a.K,a.p);}
function AP1(a,b){var c,d,e,f;c=a.K;d=c.a;e=c.b;f=a.p;ASA();BB(b,d,e,f,AXg);}
function AKU(a,b){}
function AQx(a,b){}
function AN6(a,b,c){}
function AQK(a){}
function AJk(a,b,c,d){return 0;}
function AF6(a,b,c){return null;}
function ALK(a,b,c){return 0;}
function AQd(a,b){return 0;}
function ANU(a,b,c,d){return 0;}
function IJ(){var a=this;EG.call(a);a.cO=null;a.bH=null;a.gn=null;}
function UW(a,b){a.bH.a=IP(a,b);}
function XP(a,b){a.bH.b=Lr(a,b);}
function Lr(a,b){return Z(0,Ba(b,a.cO.b-a.p.b|0));}
function IP(a,b){return Z(0,Ba(b,a.cO.a-a.p.a|0));}
function Qx(){var a=this;IJ.call(a);a.bG=null;a.dw=null;a.gm=null;a.uf=null;a.dN=null;a.bW=null;a.dV=null;a.eB=null;a.c3=0;a.ew=0;a.v8=null;a.dr=0;a.d5=0;a.fw=0;a.e1=0;a.eP=0;a.cq=0;a.dW=null;a.ii=null;a.q0=null;a.gV=null;}
function Pe(a){a.c3=Co(2.0,a.bG.b1);}
function WT(a){return a.bW.data.length?0:1;}
function TB(a){Bg(a.gm,0,0);}
function AQc(a){a.eB=C4(a.eB,null);Bg(a.gm,0,0);DJ(a.gV);a.dW=null;a.bW=AWd;a.dV=null;a.dr=0;a.d5=0;a.fw=0;Tg(a.dw);a.ii=null;}
function AHi(a,b,c){Pz(a);Pe(a);a.dN=null;a.dW=null;a.ew=0;}
function Yk(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=LM(a.bG);if(WT(a))return;Jo(a);CM(c,a.dN);d=DM(a);e=Ye(c,a.ew);f=Ba(H6(a.p.b,d),a.bW.data.length)+30|0;g=a.q0.vN;h=a.dV.data;d=h.length;if(d<f){a:{i=a.e1;j=a.eP;k=a.bW;l=a.dW;m=a.gV;n=P(HY,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.ft!==c){Vm(l,q,m);o[f]=IN(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=IN(c,l,e,m);i=i+1|0;}}else if(f>0)
{r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=IN(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){Vm(l,c,m);h[f]=null;}f=f+1|0;}a.dV=n;Cw(a.gm,M3(a.dW));PT(a,a.bG.cS);}a.e1=Ba((a.bH.b+a.c3|0)/(DM(a)+a.c3|0)|0,a.bW.data.length-1|0);a.eP=Ba((((a.bH.b+a.dw.bp.b|0)-1|0)+a.c3|0)/(DM(a)+a.c3|0)|0,a.bW.data.length-1|0);if(!a.dV.data.length)return;X3(a,e);c=a.K;UE(b,c.a,c.b,a.p);q=g.t0;c=a.K;BB(b,c.a,c.b,a.p,q);c=a.dw.ct;i=c.a;j=c.b;p=Cl(a.bG,2.0);s=a.bG.dk;t=a.e1;u=i+p|0;while(t<=a.eP){l=OS(a,
t);d=U(t,DM(a));v=t+1|0;w=d+U(v,a.c3)|0;x=u+a.dr|0;y=x+a.d5|0;z=a.cq!=t?0:1;m=!z?q:g.qI;ba=!z?g.s7:g.hZ;bb=!z?g.nS:g.hZ;bc=!z?g.o$:g.hZ;bd=(j+w|0)-a.bH.b|0;EF(b,u,bd,l.gU,l.rY,a.eB,ba,m,a.bG.ca);EF(b,x,bd,l.hx,l.hX,a.eB,bb,m,a.bG.ca);EF(b,y,bd,l.gW,l.i6,a.eB,bc,m,a.bG.ca);d=l.gU.a;be=u+d|0;Bg(s,Z(0,a.dr-d|0),l.gU.b);BB(b,be,bd,s,m);d=u+a.dr|0;f=l.hx.a;bf=d+f|0;Bg(s,Z(0,a.d5-f|0),l.hx.b);BB(b,bf,bd,s,m);d=l.gW.a;bg=y+d|0;Bg(s,Z(0,(((a.dw.bp.a-d|0)-a.d5|0)-a.dr|0)-p|0),l.gW.b);BB(b,bg,bd,s,m);bh=(i+a.p.a|0)-p
|0;Bg(s,p,DM(a)+a.c3|0);BB(b,bh,bd,s,q);t=v;}Lf(b);}
function X3(a,b){var c,d,e,f,g,h;c=0;d=a.e1;while(d<=a.eP){e=OS(a,d);if(!(e!==null&&e.ft===a.bW.data[d])){f=a.dV.data;g=a.bW;e=a.dW;h=a.gV;c=d%f.length|0;if(f[c]!==null)Vm(e,f[c],h);f[c]=IN(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cw(a.gm,M3(a.dW));PT(a,a.bG.cS);}}
function PT(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.gm;c=E$(b,c.a+150|0,c.b,a.bG.ca);CM(c,a.dN);d=a.dN;e=d.eh;f=e-(e+d.dT)/16.0;g=a.dV.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.ft.iv;k=d.hX;Ev(c,j,k.bq+a.ew,f+k.bI);j=d.ft.iH;d=d.i6;Ev(c,j,d.bq+a.ew,f+d.bI);}i=i+1|0;}a:{d=a.gV;if(d.cA>0){h=d.cy;i=0;b:while(true){g=d.bX.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cn;l=j.cF;k=k;l=l.jb;Ev(c,k,l.bq+a.ew,f+l.bI);j=j.cu;if(h!=d.cy)break b;}i=i+1|0;}b=new GB;X(b);L(b);}}if(a.eB===null)a.eB=GT(b);Ex(a.eB,
c);Ip(c);}
function OS(a,b){var c;c=a.dV.data;return c[b%c.length|0];}
function ANn(a,b){Cw(a.dw.bp,b);}
function AO1(a,b){Cw(a.dw.ct,b);}
function Ph(a){var b,c;Jo(a);b=DM(a);c=a.bW.data.length;b=U(b,c)+U(a.c3,c+1|0)|0;Bg(a.cO,a.p.a,b);}
function Pz(a){var b,c,d,e,f,g,h,i,j;b=LM(a.bG);if(WT(a))return;Jo(a);CM(b,a.dN);c=Ye(b,a.ew);d=a.bW.data;e=d.length;f=0;while(f<e){g=d[f];h=Hw(c,g.fJ);i=Hw(c,g.iv);j=Hw(c,g.iH);a.dr=Z(a.dr,h);a.d5=Z(a.d5,i);a.fw=Z(a.fw,j);f=f+1|0;}}
function Vl(a,b){IZ(a.ii);b.sL.s();}
function Sq(a,b){var c,d,e;if(!a.dV.data.length)return (-1);c=DM(a);d=(b.b-a.K.b|0)+a.bH.b|0;e=a.c3;e=(d+e|0)/(c+e|0)|0;if(e<a.bW.data.length)return e;return (-1);}
function DM(a){return Fw(a.dN);}
function Jo(a){var b;if(a.dN===null){b=Ij(a.bG,a.uf);a.dN=b;a.dW=AFm(Fw(b));a.ew=DE(a.dN.l9);}}
function APh(a,b){var c,d,e;a:{switch(b.bQ){case 13:Vl(a,a.bW.data[a.cq]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cq=a.e1;b=a.gn;c=a.bH;Im(b,c.a,c.b-(a.p.b/2|0)|0);return 0;case 34:a.cq=a.eP;b=a.gn;c=a.bH;Im(b,c.a,c.b+(a.p.b/2|0)|0);return 0;case 35:case 39:a.cq=a.bW.data.length-1|0;break a;case 36:case 37:a.cq=0;break a;case 38:d=a.cq;e=a.bW.data.length;a.cq=((d+e
|0)-1|0)%e|0;break a;case 40:a.cq=(a.cq+1|0)%a.bW.data.length|0;break a;default:break a;}IZ(a.ii);return 0;}e=a.cq;if(e<=a.e1)Im(a.gn,a.bH.a,U(e,DM(a))+U(a.cq,a.c3)|0);else if(e>=a.eP)Im(a.gn,a.bH.a,(U(e+1|0,DM(a))+U(a.cq+2|0,a.c3)|0)-a.p.b|0);return 0;}
function Qk(){var a=this;B.call(a);a.mV=null;a.mW=null;}
function IZ(a){var b,c;b=a.mV;c=a.mW;Fo(b.d$,c);S8(b);}
function PR(){var a=this;EG.call(a);a.my=null;a.o6=null;a.t5=null;a.br=null;a.cQ=null;a.cW=null;a.u3=0.0;a.vO=null;a.vK=null;}
function AOX(a){var b;b=a.br;b.gn=null;a.br=C4(b,null);}
function AIM(a,b,c,d){Rt(a,b,c,d);Rt(a.br,b,c,d);if(d!==0.0){Ph(a.br);b=a.br;c=b.bH;c.a=IP(b,c.a);c=b.bH;c.b=Lr(b,c.b);if(VA(a))H1(a);else a.cW=null;if(Op(a))G2(a);else a.cQ=null;}}
function Im(a,b,c){var d;d=a.br;d.bH.a=IP(d,b);d.bH.b=Lr(d,c);if(VA(a))H1(a);if(Op(a))G2(a);}
function Op(a){var b;b=a.p.b;return b>0&&a.br.cO.b>b?1:0;}
function VA(a){var b;b=a.p.a;return b>0&&a.br.cO.a>b?1:0;}
function H1(a){var b,c,d,e,f,g;b=a.cW;if(b===null)b=U2();a.cW=b;QV(a,b);c=a.cW;b=a.br;d=b.bH.a;e=a.K;f=e.a;g=a.p;QN(c,d,f,g.a,b.cO.a,e.b+g.b|0,LO(a));}
function G2(a){var b,c,d,e,f,g;b=a.cQ;if(b===null)b=U2();a.cQ=b;QV(a,b);c=a.cQ;b=a.br;d=b.bH.b;e=a.K;f=e.b;g=a.p;W3(c,d,f,g.b,b.cO.b,e.a+g.a|0,LO(a));}
function LO(a){return Co(a.u3,a.eX);}
function QV(a,b){var c,d;c=a.vO;d=a.vK;if(!(c!==null&&d!==null?(JU(b.hR,c)&&JU(b.hS,d)?1:0):0))Gu(b,c,d);}
function AOa(a,b){var c;Yk(a.br,b);if(!(a.cQ===null&&a.cW===null)){Dg(b,1);c=a.cQ;if(c!==null)Hy(c,b);c=a.cW;if(c!==null)Hy(c,b);c=a.cQ;if(c!==null)HH(c,b);c=a.cW;if(c!==null)HH(c,b);Dg(b,0);}}
function T3(a,b){var c,d;a:{b:{c=a.cQ;if(!(c!==null&&Hl(c,b))){c=a.cW;if(c===null)break b;if(!Hl(c,b))break b;}d=1;break a;}d=0;}return d;}
function APt(a,b,c,d){var e;if(!T3(a,b.n)){e=a.br;if(d==1){c=Sq(e,b.n);if(c>=0)Vl(e,e.bW.data[c]);}}return 1;}
function AO0(a,b,c){var d;d=a.cQ;if(d!==null){d=HM(d,b.n,a.o6,1);if(d!==null)return d;}d=a.cW;if(d!==null){d=HM(d,b.n,a.t5,0);if(d!==null)return d;}d=a.br;if(!Hx(d.dw,b.n)&&!JL(d.dw)){b=d.v8;if(b!==null)IZ(b);}return null;}
function AL9(a,b,c){return T3(a,b.n)?1:0;}
function ALR(a,b){var c,d,e;c=a.cQ;d=c!==null&&H2(c,b.n,a.my)?1:0;c=a.cW;e=c!==null&&H2(c,b.n,a.my)?1:0;a:{if(!d&&!e){c=a.br;d=Sq(c,b.n);if(d>=0)c.cq=d;if(!(Hx(c.dw,c.K)&&Fx(c.bG.df)?1:0)){d=0;break a;}}d=1;}return d;}
function AHW(a,b,c,d){var e,f;if(!Dj(a,b.n))return 0;e=Co(d*0.25,a.eX);f=Co(c*0.25,a.eX);if(b.bC){f=f+e|0;e=0;}if(a.cQ!==null&&e){b=a.br;XP(b,b.bH.b+e|0);G2(a);}if(a.cW!==null&&f){b=a.br;UW(b,b.bH.a+f|0);H1(a);}return 1;}
function AQS(a){var b,c;b=LO(a);c=ABG(a.br);c.a=Z(c.a,b);c.b=Z(c.b,b);return c;}
function Gn(){var a=this;B.call(a);a.dI=0;a.dU=0;a.k4=null;a.mb=0;a.fp=null;}
function APi(a,b,c,d,e,f){var g=new Gn();AKE(g,a,b,c,d,e,f);return g;}
function AKE(a,b,c,d,e,f,g){a.dI=b;a.dU=c;a.k4=Cg(f,g);a.mb=d;a.fp=e;}
var Pw=F();
var AXh=null;function K6(b,c,d){QQ(b,c,d,0);}
function QQ(b,c,d,e){N0(b,c,d,null,null,e);}
function N0(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=Lq(c);i=V(h);j=V(h);k=V(h);l=Cb(b);c=b.v;if(c.data.length<i)b.v=Zw(c,i);m=0;while(m<i){if(g&&m<l){n=4*V(h)|0;h.ei=h.ei+n|0;}else b.v.data[m]=Dq(Ql(h,d,0));m=m+1|0;}Js(b);if(j)b.cx=ACv(ADH(h));DJ(b.cV);DJ(b.cM);o=b.cV;g=0;while(g<k){Ee(o,Dp(V(h),V(h)),Dp(V(h),V(h)));g=g+1|0;}p=b.cV;o=b.cM;q=N8(UH(p));while(EP(q)){r=W4(q);s=r.cn;p=r.cF;BM(AXh);r=B_(o,p);if(r===null){r=BA();Ee(o,p,r);}Bw(r,s);}if(o.kt===null){p=new Pg;p.v3=o;o.kt=p;}p=o.kt;r=new Rh;Ko(r,
p.v3);while(EP(r)){KT(r);o=r.fO.cF;p=AUS;c=P(B,o.k);d=c.data;Hj(o,c);ZW(c,p);g=0;t=d.length;while(g<t){p=d[g];IE(o,g);o.ck.data[g]=p;g=g+1|0;}}QD(h);if(e!==null&&f!==null){p=ALC(e,f);Oe(p);b.dX=AGB(p.kU,p.hh);b.cx=ACv(p.lA);}}
function Ms(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Lq(c);i=V(h);j=V(h);k=V(h)!=1?0:1;l=V(h);m=V(h);n=Wu(b,i);o=Wu(b,j);p=(Hr(BK(b,n.a),n.b)).data[0].l;q=(Hr(BK(b,o.a),o.b)).data[1].l;r=0;s=l-1|0;while(r<l){g=Ql(h,d,i);if(!r)g=Vh(p,g);if(r==s)g=Vh(g,q);t=n.a+r|0;u=Dq(g);c=b.v.data;v=c[t];c[t]=u;if(!k&&G0(v)==G0(u)){t=0;while(t<G0(v)){w=v.l.data[t];o=u.l.data[t];x=w.bP;if(x!=5&&x&&!o.bP){o.bP=x;o.bJ=w.bJ;}t=t+1|0;}}r=r+1|0;}if(k){if(m){w=ADH(h);v=Ja(i,j,
(-1));NF(b.cx,v,w);}else if(e!==null&&f!==null){u=ALC(e,f);Oe(u);v=Ja(i,j,(-1));NF(b.cx,v,u.lA);n=b.dX;n.eO=b.cx.cJ.b2;n.d_=u.hh;}}QD(h);}
function Ql(b,c,d){var e,f,g,h,i,j,k,l;e=V(b);f=P(B$,e);g=f.data;h=0;while(h<e){i=V(b);j=V(b);k=V(b);l=V(b);g[h]=DA(DV(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function ACg(){AXh=new WE;}
var O2=F(0);
var Er=F(Ey);
function Pf(){Er.call(this);this.gE=null;}
function Sv(a){var b;b=new SU;Ko(b,a.gE);return b;}
function L_(){B.call(this);this.vS=null;}
function AHP(a,b){b=b;M6(a.vS,b);}
function UN(){B.call(this);this.tG=null;}
function AKL(a,b){b=b;Gv(a.tG,b);}
function IB(){var a=this;B.call(a);a.dS=null;a.jc=null;a.gT=0;}
function ATc(a,b,c){var d=new IB();ACc(d,a,b,c);return d;}
function ACc(a,b,c,d){a.dS=b;a.jc=c;a.gT=d;}
function ABq(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return BJ(a.dS,c.dS)&&BJ(a.jc,c.jc)&&BJ(Ct(a.gT),Ct(c.gT))?1:0;}return 0;}
function LI(){var a=this;IB.call(a);a.jq=null;a.mP=0;}
function AFN(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){if(!ABq(a,b))return 0;c=b;return BJ(a.jq,c.jq);}return 0;}
function En(){var a=this;B.call(a);a.eJ=null;a.fc=null;a.sK=0;}
function AR3(a,b,c){var d=new En();KJ(d,a,b,c);return d;}
function KJ(a,b,c,d){a.eJ=b;a.fc=c;a.sK=d;}
function YP(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return BJ(a.eJ,c.eJ)&&BJ(a.fc,c.fc)?1:0;}return 0;}
function FR(){En.call(this);this.gg=null;}
function H$(){var a=this;En.call(a);a.gs=null;a.nb=0;}
function AQh(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){if(!YP(a,b))return 0;c=b;return BJ(a.gs,c.gs);}return 0;}
function It(){var a=this;En.call(a);a.hj=null;a.gv=null;}
function AEX(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return BJ(a.hj,c.hj)&&BJ(a.gv,c.gv)?1:0;}return 0;}
var Y0=F();
function JD(){return {isCancellationRequested:false};}
function Mk(){var a=this;B.call(a);a.uh=null;a.ug=null;}
function AOB(a,b){V9(b,a.uh,a.ug);}
var ABj=F();
function LR(b,c,d){var e;if(!("then" in b?1:0))c.f(b);else{e=new S0;e.we=d;b.then(Bm(c,"f"),Bm(e,"f"));}}
function QW(){var a=this;B.call(a);a.s4=null;a.s3=null;}
function AHI(a,b){V9(b,a.s4,a.s3);}
function Z6(){var a=this;GD.call(a);a.GV=null;a.Jh=0;a.Hx=0;a.EK=0;}
function RX(){var a=this;B.call(a);a.nr=null;a.ns=null;}
function AJr(a){var b,c;b=a.nr;c=a.ns;SJ();IY(b,c,AXi);}
function RY(){var a=this;B.call(a);a.q6=null;a.q7=null;}
function AGq(a){var b,c;b=a.q6;c=a.q7;SJ();IY(b,c,AXj);}
function RV(){var a=this;B.call(a);a.uU=null;a.uT=null;}
function AFa(a){IY(a.uU,a.uT,null);}
function RW(){var a=this;B.call(a);a.m3=null;a.m4=null;}
function AJm(a){var b,c,d,e,f,g,h,i,j;b=a.m3;c=a.m4;d=DT(b.bh.c);e=FK(b.bh.c);d=TR(b.bh.cv,d,e);Dv(b.eR.bU);b=b.bh;e=D2(b,c);if(d!==null){f=b.c;g=e.U;h=e.bb;e=new Vy;e.si=b;e.sj=c;b=b.hF;c=d.uE;d=E7(f);f=Hz(h,g);i=AKw(!!1);j=JD();c=c.provideReferences(d,f,i,j);d=new PU;d.qj=e;d.qi=b;LR(c,d,b);}}
function Q4(){B.call(this);this.pv=null;}
function ANN(a){var b;b=a.pv;Dv(b.eR.bU);Gt(b.bh,XL(b),0);}
function Q3(){B.call(this);this.vl=null;}
function AMi(a){var b;b=a.vl;Dv(b.eR.bU);Gt(b.bh,XL(b),1);}
function Q2(){B.call(this);this.sU=null;}
function ARn(a){var b,c,d,e;b=a.sU;Dv(b.eR.bU);F8(b);b=b.bh;BM(b);c=new XO;c.p6=b;b=Zq(C(304));if(!K_()){c=new Bt;Bp(c,C(305));Ly(b,c);}else{d=$rt_globals.navigator.clipboard.readText();e=new Q1;e.nA=c;b=AD2(b);d.then(Bm(e,"f"),Bm(b,"f"));}}
function O5(){var a=this;B.call(a);a.np=null;a.nq=null;}
function AMe(a){var b,c;b=a.np;c=a.nq;b=b.bh.c;b.hb=c;Ik(b);}
var Qi=F(0);
var AWe=null;function AB4(){AWe=new T6;}
function P2(){B.call(this);this.wc=null;}
function AGe(a){var b,c,d;b=a.wc;Dv(b.eR.bU);c=F8(b);b=b.bh;BM(b);d=new Rx;d.tc=b;VV(c,d);}
function HY(){var a=this;B.call(a);a.rY=null;a.hX=null;a.i6=null;a.gU=null;a.hx=null;a.gW=null;a.ft=null;}
function IN(b,c,d,e){var f,g,h;f=new HY;f.gU=new Bj;f.hx=new Bj;f.gW=new Bj;f.ft=b;g=B_(e,b.fJ);if(g!==null)g.hd=g.hd+1|0;else{g=new Vt;h=LW(c,b.fJ,d);g.hd=1;g.jb=h;Ee(e,b.fJ,g);}e=g.jb;f.rY=e;Bg(f.gU,e.ba|0,e.bZ|0);e=LW(c,b.iv,d);f.hX=e;Bg(f.hx,e.ba|0,e.bZ|0);b=LW(c,b.iH,d);f.i6=b;Bg(f.gW,b.ba|0,b.bZ|0);return f;}
function Vm(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.ft.fJ;f=B_(d,e);g=f.hd-1|0;f.hd=g;if(!g){a:{h=0;i=null;if(e===null){j=d.bX.data[0];while(j!==null){if(j.cn===null)break a;e=j.cu;i=j;j=e;}}else{k=Gf(e);l=d.bX.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.iU==k&&YC(e,j.cn))){m=j.cu;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cu=j.cu;else d.bX.data[h]=j.cu;d.cy=d.cy+1|0;d.cA=d.cA-1|0;}Kz(b,f.jb);}Kz(b,c.hX);Kz(b,c.i6);}
var Ru=F(0);
function Ye(b,c){var d;d=new Vu;d.o2=b;d.o1=c;return d;}
function Yp(){var a=this;B.call(a);a.fv=null;a.gl=0;a.iL=0;a.fT=0;}
function AFm(a){var b=new Yp();AHX(b,a);return b;}
function AHX(a,b){a.fv=BA();a.fT=0;a.iL=2048;a.gl=b;}
function LW(a,b,c){var d,e,f,g,h,i,j;d=Hw(c,b);e=a.iL;if(d>e){c=new Bt;f=new R;T(f);BX(Bl(J(Bl(J(f,C(306)),d),C(307)),e),41);Bp(c,S(f));L(c);}if(!a.gl){b=new BF;Bp(b,C(308));L(b);}a:{b=new B5;if(d){b:{c=a.fv;if(c.k>0){c=BO(c);g=d;while(true){if(!BP(c))break b;f=BS(c);if(f.ba>=g)break;}Cc(b,f.bq,f.bI,g,a.gl);f.bq=f.bq+g;h=f.ba-g;f.ba=h;if(h===0.0)Vq(a.fv,f);break a;}}g=a.fT;i=d;Cc(b,0.0,g,i,a.gl);c=a.fv;f=new B5;h=a.fT;g=a.iL-d|0;j=a.gl;f.bq=i;f.bI=h;f.ba=g;f.bZ=j;Bw(c,f);a.fT=a.fT+a.gl|0;}}return b;}
function Kz(a,b){var c,d,e,f,g,h,i;a:{c=new B5;c.bq=b.bq;c.bI=b.bI;c.ba=b.ba;c.bZ=b.bZ;b=a.fv;if(b.k>0){d=BO(b);while(true){if(!BP(d))break a;e=BS(d);if(e.bI===c.bI){f=e.bq;g=e.ba;h=f+g;i=c.bq;if(h===i){c.bq=f;c.ba=c.ba+g;Q$(d);}else{h=c.ba;if(i+h===f){c.ba=h+g;Q$(d);}}}}}}Bw(a.fv,c);}
function M3(a){return Cg(a.iL,a.fT);}
function Ve(){var a=this;EG.call(a);a.e4=null;a.gF=null;a.hW=null;a.eG=null;a.i5=0.0;a.gK=0;a.h2=0;a.dh=null;a.j0=null;}
function JW(a){var b;b=a.p;return b.a&&b.b?0:1;}
function VW(a){var b,c;a:{if(a.hW!==null){b=a.gF;if(b!==null&&!Eu(b)){c=0;break a;}}c=1;}return c;}
function Pl(a,b){a.p.b=b;}
function PE(a,b,c,d,e){var f,g;f=a.e4.dk;Bg(f,d,a.p.b);g=a.K;BB(b,g.a+c|0,g.b,f,e);}
function UV(a){if(a.eG===null)a.eG=Ij(a.e4,a.hW);}
var WU=F(Eq);
var AXk=null;function ND(b){var c;c=new R;T(c);return S(JK(c,b));}
function ABV(){AXk=E($rt_floatcls());}
var Fd=F();
var AXl=null;var AXm=null;var AXn=null;var AXo=null;var AUz=null;function AAN(){AXl=FI([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AXm=AGh([BL(1),BL(10),BL(100),BL(1000),BL(10000),BL(100000),BL(1000000),BL(10000000),BL(100000000),BL(1000000000),Dm(1410065408, 2),Dm(1215752192, 23),Dm(3567587328, 232),Dm(1316134912, 2328),Dm(276447232, 23283),Dm(2764472320, 232830),Dm(1874919424, 2328306),Dm(1569325056, 23283064),Dm(2808348672, 232830643)]);AXn=AGh([BL(1),BL(10),BL(100),BL(10000),BL(100000000),
Dm(1874919424, 2328306)]);AXo=new TM;AUz=new U3;}
var Hh=F();
var AXp=0;var AXq=null;var AXr=null;function ABm(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.of=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.kD=0;c.kh=0;return;}if(f)d=e|8388608;else{d=e<<1;while(AHl(XX(BL(d),BL(8388608)),ACx)){d=d<<1;f=f+(-1)|0;}}g=ABx(AXr,f);if(g<0)g= -g|0;h=AXr.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Hb(d,AXq.data[e],i);if(j<AXp){while($rt_ucmp(j,AXp)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=AXr.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Hb(d,
AXq.data[e],i);}e=d<<1;d=e+1|0;h=AXq.data;f=g+1|0;k=h[f];l=i-1|0;m=Hb(d,k,l);n=Hb(e-1|0,AXq.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?U($rt_udiv(j,o),o):q<0?U($rt_udiv(j,k),k)+k|0:U($rt_udiv((j+(k/2|0)|0),k),k);if(HQ(BL(d),BL(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.kD=d;c.kh=g-50|0;}
function Hb(b,c,d){return ZR(ATy(ALO(XX(BL(b),Dm(4294967295, 0)),XX(BL(c),Dm(4294967295, 0))),32-d|0));}
function Z1(){AXp=$rt_udiv((-1),10);AXq=FI([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);AXr=FI([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function U3(){var a=this;B.call(a);a.kD=0;a.kh=0;a.of=0;}
function TK(){B.call(this);this.sD=null;}
function AQu(a,b,c){var d,e;c=a.sD;d=c.c.f;e=b.bd;b=c.eC;Si(d.v.data[e],0,b);}
function AB1(){var a=this;B.call(a);a.gP=null;a.ei=0;}
function Lq(a){var b=new AB1();AEt(b,a);return b;}
function AEt(a,b){a.gP=b;a.ei=0;}
function V(a){var b,c;b=a.gP.data;c=a.ei;a.ei=c+1|0;return b[c];}
function QD(a){var b,c,d,e;if(a.ei!=a.gP.data.length){b=Ed();c=a.gP.data.length;d=a.ei;e=new R;T(e);J(Bl(J(Bl(J(e,C(295)),c),C(309)),d),C(310));Cn(b,S(e));}}
var V8=F(BV);
function Dn(){var a=this;B.call(a);a.kf=null;a.ia=null;a.em=null;a.dG=null;a.iD=null;a.ln=null;a.hI=0;a.lg=null;}
function Nr(a,b){var c=new Dn();Ya(c,a,b);return c;}
function ASO(a,b,c,d){var e=new Dn();AAB(e,a,b,c,d);return e;}
function Ya(a,b,c){AAB(a,b,c,null,null);}
function AAB(a,b,c,d,e){a.ia=new B5;a.em=new Bj;a.dG=new Bj;a.lg=c;a.ln=e;a.kf=b;a.iD=d;}
function UF(a){return a.iD===null?0:1;}
function M9(){B.call(this);this.o5=null;}
function AJZ(a){LT(a.o5);}
function M$(){B.call(this);this.qc=null;}
function APE(a){FS(a.qc);}
function M8(){B.call(this);this.v_=null;}
function AD_(a){J4(a.v_);}
function We(){B.call(this);this.qQ=null;}
function AKS(a){a.qQ.vM();}
function Wd(){B.call(this);this.ur=null;}
function AN$(a){a.ur.wa();}
function O0(){B.call(this);this.oa=null;}
function AG$(a){var b,c,d,e,f,g,h,i;b=a.oa;c=(b.oz.dM()).data;d=P(Dn,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new M5;i.pM=b;i.pL=h;e[f]=Nr(i,h);f=f+1|0;}return d;}
function Sw(){B.call(this);this.oE=null;}
function AJz(a){a.oE.mx.h6(0);}
function Sx(){B.call(this);this.pX=null;}
function APj(a){a.pX.mx.h6(1);}
function Xt(){B.call(this);this.sM=null;}
function AEp(a){var b,c,d,e,f;b=a.sM.c.f;c=b.b0;d=new R;T(d);Bl(J(d,C(311)),c);$rt_globals.console.info($rt_ustr(S(d)));c=b.iJ;d=new R;T(d);Bl(J(d,C(312)),c);$rt_globals.console.info($rt_ustr(S(d)));d=b.cx;e=GY(Df(b));Wn(d,0,d.cJ,e);b=EW();f=b.ki;f.data[0]=10;N_(b,f,0,1);}
function Xo(){B.call(this);this.oi=null;}
function AJC(a){Rz(a.oi);}
function Xp(){B.call(this);this.pt=null;}
function AQI(a){S2(a.pt);}
function Xq(){B.call(this);this.vv=null;}
function AK8(a){LB(a.vv.c);}
function Xr(){B.call(this);this.m6=null;}
function AI0(a){Xf(a.m6);}
function Mo(){B.call(this);this.oY=null;}
function APz(a){var b,c,d,e,f,g;b=a.oY;c=P(Dn,16);d=c.data;e=0;while(e<4){f=(5+e|0)/8.0;d[e]=Nr(Pa(b,f),ND(f));e=e+1|0;}g=0;while(g<12){e=1+g|0;f=1.0+e/4.0;d[4+g|0]=Nr(Pa(b,f),ND(f));g=e;}return c;}
var KK=F(0);
function WQ(){var a=this;B.call(a);a.pj=null;a.pk=null;a.pl=null;}
function Ok(){B.call(this);this.qY=null;}
function AEV(a,b){var c,d;c=a.qY;d=Ha(b,c.br.cO.b-c.p.b|0);XP(c.br,d);G2(c);}
function Oj(){B.call(this);this.sd=null;}
function AFf(a,b){var c,d;c=a.sd;d=Ha(b,c.br.cO.a-c.p.a|0);UW(c.br,d);H1(c);}
var R9=F(Eq);
var AXs=null;function Lo(b,c){return Long_udiv(b, c);}
function Yy(b,c){return Long_urem(b, c);}
function HQ(b,c){return Long_ucompare(b, c);}
function AAm(){AXs=E($rt_longcls());}
function Te(){B.call(this);this.qR=null;}
function AFR(a,b,c){FW(BK(a.qR.c.f,b.bd),0,H(c));}
var WE=F();
var EK=F();
var AXt=null;var AXu=null;var AUX=null;var AXv=null;var AXw=null;var AXx=null;function ABl(){AXt=new U8;AXu=new U6;AUX=new U7;AXv=new U4;AXw=new U5;AXx=new XM;}
function YJ(){var a=this;B.call(a);a.kU=null;a.lA=null;a.hh=null;a.cd=null;a.jY=null;a.kE=null;a.gw=null;a.lz=null;a.lr=null;}
function ALC(a,b){var c=new YJ();APV(c,a,b);return c;}
function APV(a,b,c){a.cd=Lq(b);a.jY=c;}
function Oe(a){var b,c,d,e,f,g,h,i;b=V(a.cd);c=new Kn;PQ(c);a.hh=c;a.gw=BA();d=0;while(d<b){e=V(a.cd);f=V(a.cd);g=DV(a.jY,e,f);Ee(a.hh,g,BA());Bw(a.gw,g);d=d+1|0;}c=N8(UH(a.hh));while(EP(c)){Gi((W4(c)).cF,Nc(a));}d=V(a.cd);if(d==(-1))a.kU=null;else{a.kE=P(E2,d);c=new MB;h=a.cd;i=a.jY;g=a.gw;c.c2=h;c.rJ=i;c.qP=g;a.lz=c;c=new Rf;c.dF=h;c.uz=i;c.u2=g;a.lr=c;a.kU=QS(a,null);}if(V(a.cd)!=(-1))a.lA=Rc(a.cd,a.kE);}
function QS(a,b){var c,d,e,f,g,h,i,j,k;c=V(a.cd);d=V(a.cd);e=a.lz;f=V(e.c2);g=BA();h=0;while(h<f){Bw(g,ME(e));h=h+1|0;}a:{switch(d){case -1:i=new Ki;i.f0=b;b=AUX;i.cg=b;i.eg=b;i.dQ=b;i.h_=b;i.fQ=b;break a;case 0:i=ARG(b);break a;case 1:i=new JO;ABi(i,b);Gi(i.dQ,g);break a;default:}b=new Dl;i=new R;T(i);Bl(J(i,C(313)),d);Bp(b,S(i));L(b);}i.dQ=g;b=a.lr;d=V(b.dF);e=BA();j=0;while(j<d){Bw(e,FA(b));j=j+1|0;}i.eg=e;i.h_=Nc(a);d=V(a.cd);b=BA();j=0;while(j<d){e=ME(a.lz);g=FA(a.lr);f=V(a.cd);k=new PS;k.id=e;k.i9=g;k.pi
=f;Bw(b,k);j=j+1|0;}i.fQ=b;j=V(a.cd);i.tC=j==(-1)?null:Bs(a.gw,j);d=V(a.cd);b=BA();j=0;while(j<d){Bw(b,QS(a,i));j=j+1|0;}i.cg=b;a.kE.data[c]=i;return i;}
function Nc(a){var b,c,d,e;b=V(a.cd);c=BA();d=0;while(d<b){e=V(a.cd);Bw(c,Bs(a.gw,e));d=d+1|0;}return c;}
function Qe(){var a=this;B.call(a);a.oL=null;a.oK=null;}
function AHh(a,b){a.oL.j(ABz(a.oK,b));}
function ADy(){var a=this;B.call(a);a.g4=null;a.c4=0;}
function AIB(a,b){var c=new ADy();AEi(c,a,b);return c;}
function AEi(a,b,c){a.g4=b;a.c4=c;}
function AMj(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return a.c4==c.c4&&BJ(a.g4,c.g4)?1:0;}return 0;}
function MU(){B.call(this);this.n7=null;}
function AKI(a,b){b=b;Mj(a.n7,b);}
function XG(){B.call(this);this.oe=null;}
function ARt(a,b){b=b;Gv(a.oe,b);}
var Ih=F(0);
function Mx(){var a=this;B.call(a);a.m$=null;a.m9=null;}
function AJF(a){YN(a.m$,a.m9);}
function Me(){var a=this;B.call(a);a.sQ=null;a.sR=null;}
function AEd(a){a.sQ.j(a.sR);}
function S0(){B.call(this);this.we=null;}
function AJj(a,b){Lh(a.we,$rt_str(b.message));}
function Vs(){B.call(this);this.r3=null;}
function AQ5(a){return a.r3;}
var T6=F();
var TM=F();
function WY(){var a=this;B.call(a);a.ni=null;a.nh=null;a.nk=null;a.nj=null;}
function AI6(a,b){var c,d,e,f,g,h,i;c=a.ni;d=a.nh;e=a.nk;f=a.nj;if(!(b.done?1:0)){T5(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new TP;c.p8=d;c.p9=g;c.p$=f;b.then(Bm(c,"f"),Bm(e,"f"));}else{h=f.data;c=g.values();b=Ce(g.name);i=h.length;f=C2(f,i+1|0);f.data[i]=b;T5(c,d,e,f);}}}
var JG=F(Er);
var U8=F(JG);
var KY=F(DB);
var U6=F(KY);
var Lx=F(Em);
function AGX(a){var b;b=new D1;X(b);L(b);}
function ALn(a,b){var c;c=new D1;X(c);L(c);}
function AJ_(a,b){b=new D1;X(b);L(b);}
var U7=F(Lx);
function ALu(a,b){var c;c=new BV;X(c);L(c);}
function AKA(a){return 0;}
function AHu(a){return AXv;}
function AE4(a){return 1;}
var U4=F();
function AEM(a){return 0;}
function AMP(a){var b;b=new L1;X(b);L(b);}
function AOp(a){var b;b=new Dl;X(b);L(b);}
var Ps=F(0);
var U5=F();
var XM=F();
function EE(){var a=this;B.call(a);a.iq=0;a.sT=0;a.hm=null;a.fO=null;a.qk=null;a.i2=null;}
function AXy(a){var b=new EE();Ko(b,a);return b;}
function Ko(a,b){a.i2=b;a.sT=b.cy;a.hm=null;}
function EP(a){var b,c;if(a.hm!==null)return 1;while(true){b=a.iq;c=a.i2.bX.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.iq=b+1|0;}return 0;}
function ZF(a){var b;if(a.sT==a.i2.cy)return;b=new GB;X(b);L(b);}
function KT(a){var b,c,d,e;ZF(a);if(!EP(a)){b=new L1;X(b);L(b);}b=a.hm;if(b!==null){c=a.fO;if(c!==null)a.qk=c;a.fO=b;a.hm=b.cu;}else{d=a.i2.bX.data;e=a.iq;a.iq=e+1|0;b=d[e];a.fO=b;a.hm=b.cu;a.qk=null;}}
var SU=F(EE);
function O1(a){KT(a);return a.fO.cn;}
var AAe=F();
function K_(){return "clipboard" in $rt_globals.navigator?1:0;}
function YZ(){var a=this;B.call(a);a.EG=null;a.J8=0;}
function Rd(){var a=this;B.call(a);a.g=null;a.dn=0;a.j_=null;a.nX=0;a.f6=0;a.ez=0;a.bm=0;a.lc=null;}
function Jq(a){return a.g.bB;}
function Xn(a,b,c,d){var e,f,g,h,i,j;e=BA();f=a.dn;g=0;if(c!=f)a.dn=c;a:{switch(b){case -1073741784:h=new RP;c=a.bm+1|0;a.bm=c;E3(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PV;c=a.bm+1|0;a.bm=c;E3(h,c);break a;case -33554392:h=new SV;c=a.bm+1|0;a.bm=c;E3(h,c);break a;default:c=a.f6+1|0;a.f6=c;if(d!==null)h=ATj(c);else{h=new Fb;E3(h,0);g=1;}c=a.f6;if(c<=(-1))break a;if(c>=10)break a;a.j_.data[c]=h;break a;}h=new Xg;E3(h,(-1));}while(true){if(EL(a.g)&&a.g.h==(-536870788))
{d=APT(B6(a,2),B6(a,64));while(!C1(a.g)&&EL(a.g)){i=a.g;j=i.h;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cj(d,Bf(i));i=a.g;if(i.Y!=(-536870788))continue;Bf(i);}i=Kd(a,d);i.L(h);}else if(a.g.Y==(-536870788)){i=Gl(h);Bf(a.g);}else{i=O8(a,h);d=a.g;if(d.Y==(-536870788))Bf(d);}if(i!==null)Bw(e,i);if(C1(a.g))break;if(a.g.Y==(-536870871))break;}if(a.g.ky==(-536870788))Bw(e,Gl(h));if(a.dn!=f&&!g){a.dn=f;d=a.g;d.fL=f;d.h=d.Y;d.es=d.eI;j=d.cZ;d.t=j+1|0;d.gZ=j;EO(d);}switch(b){case -1073741784:break;case -536870872:d
=new Mv;Fc(d,e,h);return d;case -268435416:d=new VH;Fc(d,e,h);return d;case -134217688:d=new Ri;Fc(d,e,h);return d;case -67108824:d=new Ti;Fc(d,e,h);return d;case -33554392:d=new Du;Fc(d,e,h);return d;default:switch(e.k){case 0:break;case 1:return AS7(Bs(e,0),h);default:return ASJ(e,h);}return Gl(h);}d=new Iq;Fc(d,e,h);return d;}
function ACB(a){var b,c,d,e,f,g,h;b=By(4);c=(-1);d=(-1);if(!C1(a.g)&&EL(a.g)){e=b.data;c=Bf(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B1(3);b=e.data;b[0]=c&65535;f=a.g;g=f.Y;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bf(f);f=a.g;g=f.Y;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bf(f);return APC(e,3);}return APC(e,2);}if(!B6(a,2))return ZE(b[0]);if(B6(a,64))return ANB(b[0]);return AGi(b[0]);}e=b.data;c=1;while(c<4&&!C1(a.g)&&EL(a.g)){h=c+1|0;e[c]=Bf(a.g);c=h;}if(c==1){h=e[0];if(!(AXz.yu(h)==AXA?0:1))return W_(a,e[0]);}if
(!B6(a,2))return ATV(b,c);if(B6(a,64)){f=new WX;N5(f,b,c);return f;}f=new Tx;N5(f,b,c);return f;}
function O8(a,b){var c,d,e,f,g,h,i;if(EL(a.g)&&!Jc(a.g)&&JM(a.g.h)){if(B6(a,128)){c=ACB(a);if(!C1(a.g)){d=a.g;e=d.Y;if(!(e==(-536870871)&&!(b instanceof Fb))&&e!=(-536870788)&&!EL(d))c=LP(a,b,c);}}else if(!Oc(a.g)&&!UR(a.g)){f=new Of;T(f);while(!C1(a.g)&&EL(a.g)&&!Oc(a.g)&&!UR(a.g)){if(!(!Jc(a.g)&&!a.g.h)&&!(!Jc(a.g)&&JM(a.g.h))){g=a.g.h;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bf(a.g);if(!LJ(e))BX(f,e&65535);else HV(f,F3(e));}if(!B6(a,2)){c=new RJ;Dc(c);c.cj
=S(f);e=f.H;c.by=e;c.ko=AL4(e);c.le=AL4(c.by);h=0;while(h<(c.by-1|0)){Ro(c.ko,I(c.cj,h),(c.by-h|0)-1|0);Ro(c.le,I(c.cj,(c.by-h|0)-1|0),(c.by-h|0)-1|0);h=h+1|0;}}else if(B6(a,64))c=ATU(f);else{c=new M4;Dc(c);c.g3=S(f);c.by=f.H;}}else c=LP(a,b,WW(a,b));}else{d=a.g;if(d.Y!=(-536870871))c=LP(a,b,WW(a,b));else{if(b instanceof Fb)L(B4(C(3),d.bB,Ob(d)));c=Gl(b);}}a:{if(!C1(a.g)){e=a.g.Y;if(!(e==(-536870871)&&!(b instanceof Fb))&&e!=(-536870788)){f=O8(a,b);if(c instanceof CN&&!(c instanceof EQ)&&!(c instanceof CD)&&
!(c instanceof El)){i=c;if(!f.bM(i.F)){c=new VU;EB(c,i.F,i.e,i.hg);c.F.L(c);}}if((f.hn()&65535)!=43)c.L(f);else c.L(f.F);break a;}}if(c===null)return null;c.L(b);}if((c.hn()&65535)!=43)return c;return c.F;}
function LP(a,b,c){var d,e,f,g,h;d=a.g;e=d.Y;if(c!==null&&!(c instanceof BW)){switch(e){case -2147483606:Bf(d);d=new XT;CY(d,c,b,e);LU();c.L(AXB);return d;case -2147483605:Bf(d);d=new PK;CY(d,c,b,(-2147483606));LU();c.L(AXB);return d;case -2147483585:Bf(d);d=new Pk;CY(d,c,b,(-536870849));LU();c.L(AXB);return d;case -2147483525:f=new MY;d=EX(d);g=a.ez+1|0;a.ez=g;ID(f,d,c,b,(-536870849),g);LU();c.L(AXB);return f;case -1073741782:case -1073741781:Bf(d);d=new RG;CY(d,c,b,e);c.L(d);return d;case -1073741761:Bf(d);d
=new QF;CY(d,c,b,(-536870849));c.L(b);return d;case -1073741701:h=new Uq;d=EX(d);e=a.ez+1|0;a.ez=e;ID(h,d,c,b,(-536870849),e);c.L(h);return h;case -536870870:case -536870869:Bf(d);if(c.hn()!=(-2147483602)){d=new CD;CY(d,c,b,e);}else if(B6(a,32)){d=new RH;CY(d,c,b,e);}else{d=new Oq;f=Pm(a.dn);CY(d,c,b,e);d.kx=f;}c.L(d);return d;case -536870849:Bf(d);d=new Fr;CY(d,c,b,(-536870849));c.L(b);return d;case -536870789:h=new EZ;d=EX(d);e=a.ez+1|0;a.ez=e;ID(h,d,c,b,(-536870849),e);c.L(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bf(d);d=new XW;EB(d,f,b,e);f.e=d;return d;case -2147483585:Bf(d);c=new VO;EB(c,f,b,(-2147483585));return c;case -2147483525:c=new O7;Sa(c,EX(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bf(d);d=new Qz;EB(d,f,b,e);f.e=d;return d;case -1073741761:Bf(d);c=new TI;EB(c,f,b,(-1073741761));return c;case -1073741701:c=new Rj;Sa(c,EX(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bf(d);d=ATa(f,b,e);f.e=d;return d;case -536870849:Bf(d);c
=new El;EB(c,f,b,(-536870849));return c;case -536870789:return ASb(EX(d),f,b,(-536870789));default:}return c;}
function WW(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fb;while(true){a:{e=a.g;f=e.Y;if((f&(-2147418113))==(-2147483608)){Bf(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dn=g;else{if(f!=(-1073741784))g=a.dn;c=Xn(a,f,g,b);e=a.g;if(e.Y!=(-536870871))L(B4(C(3),e.bB,e.cZ));Bf(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bf(e);c
=APl(0);break a;case -2147483577:Bf(e);c=new Ol;BN(c);break a;case -2147483558:Bf(e);c=new WD;h=a.bm+1|0;a.bm=h;ACX(c,h);break a;case -2147483550:Bf(e);c=APl(1);break a;case -2147483526:Bf(e);c=new Wa;BN(c);break a;case -536870876:Bf(e);a.bm=a.bm+1|0;if(B6(a,8)){if(B6(a,1)){c=ASu(a.bm);break a;}c=ARO(a.bm);break a;}if(B6(a,1)){c=ASP(a.bm);break a;}c=ATo(a.bm);break a;case -536870866:Bf(e);if(B6(a,32)){c=ATG();break a;}c=ATf(Pm(a.dn));break a;case -536870821:Bf(e);i=0;c=a.g;if(c.Y==(-536870818)){i=1;Bf(c);}c
=Kd(a,FE(a,i));c.L(b);e=a.g;if(e.Y!=(-536870819))L(B4(C(3),e.bB,e.cZ));OQ(e,1);Bf(a.g);break a;case -536870818:Bf(e);a.bm=a.bm+1|0;if(!B6(a,8)){c=new JR;BN(c);break a;}c=new M_;e=Pm(a.dn);BN(c);c.rQ=e;break a;case 0:j=e.eI;if(j!==null)c=Kd(a,j);else{if(C1(e)){c=Gl(b);break a;}c=ZE(f&65535);}Bf(a.g);break a;default:break b;}Bf(e);c=new JR;BN(c);break a;}h=(f&2147483647)-48|0;if(a.f6<h)L(B4(C(3),E1(e),Ob(a.g)));Bf(e);a.bm=a.bm+1|0;c=!B6(a,2)?ART(h,a.bm):B6(a,64)?ASv(h,a.bm):ATQ(h,a.bm);a.j_.data[h].j7=1;a.nX=
1;break a;}if(f>=0&&!Go(e)){c=W_(a,f);Bf(a.g);}else if(f==(-536870788))c=Gl(b);else{if(f!=(-536870871)){b=new Ib;c=!Go(a.g)?Wz(f&65535):a.g.eI.cP();e=a.g;IQ(b,c,e.bB,e.cZ);L(b);}if(d){b=new Ib;e=a.g;IQ(b,C(3),e.bB,e.cZ);L(b);}c=Gl(b);}}}if(f!=(-16777176))break;}return c;}
function FE(a,b){var c,d,e,f,g,h,i,j,$$je;c=APT(B6(a,2),B6(a,64));Ef(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(C1(a.g))break a;h=a.g;b=h.Y;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cj(c,d);d=Bf(a.g);h=a.g;if(h.Y!=(-536870874)){d=38;break d;}if(h.h==(-536870821)){Bf(h);e=1;d=(-1);break d;}Bf(h);if(g){c=FE(a,0);break d;}if(a.g.Y==(-536870819))break d;Wk(c,FE(a,0));break d;case -536870867:if(!g){b=h.h;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bf(h);h=a.g;i=h.Y;if(Go(h))break c;if
(i<0){j=a.g.h;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(JM(i))break e;i=i&65535;break e;}catch($$e){$$je=E5($$e);if($$je instanceof DO){break b;}else{throw $$e;}}}try{BT(c,d,i);}catch($$e){$$je=E5($$e);if($$je instanceof DO){break b;}else{throw $$e;}}Bf(a.g);d=(-1);break d;}}if(d>=0)Cj(c,d);d=45;Bf(a.g);break d;case -536870821:if(d>=0){Cj(c,d);d=(-1);}Bf(a.g);j=0;h=a.g;if(h.Y==(-536870818)){Bf(h);j=1;}if(!e)X6(c,FE(a,j));else Wk(c,FE(a,j));e=0;Bf(a.g);break d;case -536870819:if(d>=0)Cj(c,
d);d=93;Bf(a.g);break d;case -536870818:if(d>=0)Cj(c,d);d=94;Bf(a.g);break d;case 0:if(d>=0)Cj(c,d);h=a.g.eI;if(h===null)d=0;else{AD1(c,h);d=(-1);}Bf(a.g);break d;default:}if(d>=0)Cj(c,d);d=Bf(a.g);}g=0;}L(B4(C(3),Jq(a),a.g.cZ));}L(B4(C(3),Jq(a),a.g.cZ));}if(!f){if(d>=0)Cj(c,d);return c;}L(B4(C(3),Jq(a),a.g.cZ-1|0));}
function W_(a,b){var c,d,e;c=LJ(b);if(B6(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AGi(b&65535);}if(B6(a,64)&&b>128){if(c){d=new Ml;Dc(d);d.by=2;d.ra=Ga(F9(b));return d;}if(OX(b))return AL$(b&65535);if(!SH(b))return ANB(b&65535);return AJu(b&65535);}}if(!c){if(OX(b))return AL$(b&65535);if(!SH(b))return ZE(b&65535);return AJu(b&65535);}d=new DC;Dc(d);d.by=2;d.fu=b;e=(F3(b)).data;d.jv=e[0];d.ic=e[1];return d;}
function Kd(a,b){var c,d,e;if(!ABe(b)){if(!b.I){if(b.gJ())return AI1(b);return APm(b);}if(!b.gJ())return AKa(b);c=new IF;TV(c,b);return c;}c=YD(b);d=new MC;BN(d);d.pW=c;d.wH=c.X;if(!b.I){if(b.gJ())return ABX(AI1(G8(b)),d);return ABX(APm(G8(b)),d);}if(!b.gJ())return ABX(AKa(G8(b)),d);c=new Qt;e=new IF;TV(e,G8(b));ADK(c,e,d);return c;}
function G_(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B6(a,b){return (a.dn&b)!=b?0:1;}
var GG=F();
var Zx=F(GG);
var ACl=F(GG);
function Un(){Er.call(this);this.ru=null;}
function N8(a){var b;b=new T$;Ko(b,a.ru);return b;}
function Pg(){Ey.call(this);this.v3=null;}
var AB6=F();
function ZI(b,c,d,e,f,g){g.a=c.a;g.b=f;BB(b,d.a,d.b,g,e);BB(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;BB(b,d.a,d.b+f|0,g,e);BB(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function ABE(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;BB(b,j,k,i,h);BB(b,j,k,i,h);BB(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;BB(b,l,j,i,h);BB(b,l,j,i,h);BB(b,l+g|0,j+g|0,i,h);}
var SB=F(0);
var AWc=null;function ABT(){AWc=new QE;}
function S1(){var a=this;B.call(a);a.ss=null;a.sr=null;}
function AHz(a,b){var c,d,e,f,g,h,i,j,k;c=a.ss;d=a.sr;if(!((b?1:0)?1:0))$rt_globals.console.info("provider result is undefined");else if(!($rt_globals.Array.isArray(b)?1:0))Lh(d,C(19));else{e=P(Jb,b.length);f=e.data;g=0;h=f.length;while(g<h){i=b[g];j=new Jb;j.gQ=new L6;if("kind" in i?1:0)j.yN=Ct(i.kind);X1(i.range,j.gQ);f[g]=j;g=g+1|0;}b=c.n8;d=c.n4;k=c.n5;g=c.n6;c=b.c;if(c===d&&c.o==k&&c.r==g){b.jJ=ATl(k,g,e);ADM(b);}}}
var Ge=F(0);
function To(){B.call(this);this.q9=null;}
function ALx(a,b,c,d){I6(a.q9,b,c.bd,d.bd);}
function Tp(){B.call(this);this.nl=null;}
function AI7(a,b,c,d){I6(a.nl,b,c.bd,d.bd);}
function HD(){B.call(this);this.mt=0;}
var AXC=null;var AXD=null;var AXE=null;function AM3(a){var b=new HD();AB2(b,a);return b;}
function AB2(a,b){a.mt=b;}
function OV(b){return !b?AXD:AXC;}
function YR(){AXC=AM3(1);AXD=AM3(0);AXE=E($rt_booleancls());}
var I$=F(0);
var RT=F();
var OJ=F(0);
var AAW=F();
function Sm(){B.call(this);this.uq=null;}
function AMf(a,b,c,d){HL(a.uq,b,c.bd,d.bd);}
var Sl=F();
function AQs(a,b){return b.dS.c4>=0?0:1;}
var Sk=F();
function ANA(a,b){var c;a:{b:{b=b;if(b!==null){b=b.eJ;if(b===null)break b;if(b.c4>=0)break b;}c=1;break a;}c=0;}return c;}
function Sn(){B.call(this);this.tz=null;}
function ALM(a,b,c,d){HL(a.tz,b,c.bd,d.bd);}
function MB(){var a=this;B.call(a);a.c2=null;a.rJ=null;a.qP=null;}
function ME(a){var b,c,d,e,f,g,h,i;a:{b=V(a.c2);switch(b){case 3:break;case 5:c=N6(a);d=Lb(a);b=V(a.c2);e=V(a.c2);f=V(a.c2);g=BA();h=0;while(h<f){Bw(g,Lb(a));h=h+1|0;}i=new LI;ACc(i,c,d,b);i.jq=g;i.mP=e;break a;default:c=new Dl;d=new R;T(d);Bl(J(d,C(314)),b);Bp(c,S(d));L(c);}i=ATc(N6(a),Lb(a),V(a.c2));}return i;}
function N6(a){var b,c;b=V(a.c2);c=V(a.c2);return AIB(DV(a.rJ,b,c),V(a.c2));}
function Lb(a){var b;b=V(a.c2);if(b==(-1))return null;return Bs(a.qP,b);}
function Rf(){var a=this;B.call(a);a.dF=null;a.uz=null;a.u2=null;}
function FA(a){var b,c,d,e,f;a:{b:{b=V(a.dF);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Nd(a);d=P1(a);b=V(a.dF);e=SC(a);f=new H$;KJ(f,c,d,2);f.nb=b;f.gs=e;break a;case 4:c=FA(a);d=FA(a);f=new It;KJ(f,c.eJ,c.fc,9);f.hj=c;f.gv=d;break a;case 5:f=AR3(Nd(a),P1(a),V(a.dF));break a;case 9:c=SC(a);f=new FR;d=!DG(c)&&Bs(c,0)!==null?(Bs(c,0)).fc:null;KJ(f,null,null,7);f.gg=BA();c=BO(c);while(BP(c)){e=BS(c);if(!(e instanceof FR))Bw(f.gg,e);else{e=e;Gi(f.gg,e.gg);}}f.fc=d;break a;default:break b;}f
=null;break a;}c=new Dl;d=new R;T(d);Bl(J(d,C(315)),b);Bp(c,S(d));L(c);}return f;}
function Nd(a){var b,c;b=V(a.dF);c=V(a.dF);return AIB(DV(a.uz,b,c),V(a.dF));}
function P1(a){var b;b=V(a.dF);if(b==(-1))return null;return Bs(a.u2,b);}
function SC(a){var b,c,d;b=V(a.dF);c=BA();d=0;while(d<b){Bw(c,FA(a));d=d+1|0;}return c;}
function BC(){var a=this;B.call(a);a.e=null;a.b7=0;a.pm=null;a.hg=0;}
var AUv=0;function BN(a){var b;b=AUv;AUv=b+1|0;a.pm=KS(b);}
function J_(a,b){var c;c=AUv;AUv=c+1|0;a.pm=KS(c);a.e=b;}
function Hc(a,b,c,d){var e;e=d.u;while(true){if(b>e)return (-1);if(a.d(b,c,d)>=0)break;b=b+1|0;}return b;}
function Hm(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.d(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AGD(a,b){a.hg=b;}
function AF0(a){return a.hg;}
function AOJ(a){return a.e;}
function APH(a,b){a.e=b;}
function APG(a,b){return 1;}
function AQC(a){return null;}
function Iy(a){var b;a.b7=1;b=a.e;if(b!==null){if(!b.b7){b=b.e_();if(b!==null){a.e.b7=1;a.e=b;}a.e.ea();}else if(b instanceof F5&&b.ee.j7)a.e=b.e;}}
function ADQ(){AUv=1;}
var UI=F(0);
function Vu(){var a=this;B.call(a);a.o2=null;a.o1=0.0;}
function Hw(a,b){return Kb(a.o2,b,a.o1*2.0+0.875);}
function XH(){var a=this;B.call(a);a.om=null;a.ok=null;a.oj=0;a.ol=0;}
function AMk(a,b){b=b;DU(a.om,a.ok,b,a.oj,a.ol);}
function XI(){var a=this;B.call(a);a.wl=null;a.wk=null;a.wj=0;a.wi=0;}
function AH9(a,b){b=b;DU(a.wl,a.wk,b,a.wj,a.wi);}
var QE=F();
function AL3(a,b){}
function CC(){var a=this;BC.call(a);a.j7=0;a.ds=0;}
var AXB=null;function LU(){LU=Bn(CC);AHR();}
function ATj(a){var b=new CC();E3(b,a);return b;}
function E3(a,b){LU();BN(a);a.ds=b;}
function AFk(a,b,c,d){var e,f;e=H0(d,a.ds);I9(d,a.ds,b);f=a.e.d(b,c,d);if(f<0)I9(d,a.ds,e);return f;}
function AK_(a){return a.ds;}
function AFJ(a,b){return 0;}
function AHR(){var b;b=new Og;BN(b);AXB=b;}
function Gg(){var a=this;B.call(a);a.W=null;a.fL=0;a.ev=0;a.u0=0;a.ky=0;a.Y=0;a.h=0;a.sh=0;a.eI=null;a.es=null;a.t=0;a.hA=0;a.cZ=0;a.gZ=0;a.bB=null;}
var AXF=null;var AXz=null;var AXA=0;function OQ(a,b){if(b>0&&b<3)a.ev=b;if(b==1){a.h=a.Y;a.es=a.eI;a.t=a.gZ;a.gZ=a.cZ;EO(a);}}
function Go(a){return a.eI===null?0:1;}
function Jc(a){return a.es===null?0:1;}
function Bf(a){EO(a);return a.ky;}
function EX(a){var b;b=a.eI;EO(a);return b;}
function EO(a){var b,c,d,e,f,g,h,$$je;a.ky=a.Y;a.Y=a.h;a.eI=a.es;a.cZ=a.gZ;a.gZ=a.t;while(true){b=0;c=a.t>=a.W.data.length?0:K9(a);a.h=c;a.es=null;if(a.ev==4){if(c!=92)return;c=a.t;d=a.W.data;c=c>=d.length?0:d[BU(a)];a.h=c;switch(c){case 69:break;default:a.h=92;a.t=a.hA;return;}a.ev=a.u0;a.h=a.t>(a.W.data.length-2|0)?0:K9(a);}a:{c=a.h;if(c!=92){e=a.ev;if(e==1)switch(c){case 36:a.h=(-536870876);break a;case 40:if(a.W.data[a.t]!=63){a.h=(-2147483608);break a;}BU(a);c=a.W.data[a.t];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.h=(-134217688);BU(a);break b;default:L(B4(C(3),E1(a),a.t));}a.h=(-67108824);BU(a);}else{switch(c){case 33:break;case 60:BU(a);c=a.W.data[a.t];e=1;break b;case 61:a.h=(-536870872);BU(a);break b;case 62:a.h=(-33554392);BU(a);break b;default:f=ADS(a);a.h=f;if(f<256){a.fL=f;f=f<<16;a.h=f;a.h=(-1073741784)|f;break b;}f=f&255;a.h=f;a.fL=f;f=f<<16;a.h=f;a.h=(-16777176)|f;break b;}a.h=(-268435416);BU(a);}}if(!e)break;}break a;case 41:a.h=(-536870871);break a;case 42:case 43:case 63:e=a.t;d
=a.W.data;switch(e>=d.length?42:d[e]){case 43:a.h=c|(-2147483648);BU(a);break a;case 63:a.h=c|(-1073741824);BU(a);break a;default:}a.h=c|(-536870912);break a;case 46:a.h=(-536870866);break a;case 91:a.h=(-536870821);OQ(a,2);break a;case 93:if(e!=2)break a;a.h=(-536870819);break a;case 94:a.h=(-536870818);break a;case 123:a.es=ADp(a,c);break a;case 124:a.h=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.h=(-536870874);break a;case 45:a.h=(-536870867);break a;case 91:a.h=(-536870821);break a;case 93:a.h
=(-536870819);break a;case 94:a.h=(-536870818);break a;default:}}else{c=a.t>=(a.W.data.length-2|0)?(-1):K9(a);c:{a.h=c;switch(c){case -1:L(B4(C(3),E1(a),a.t));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.h
=ABJ(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.ev!=1)break a;a.h=(-2147483648)|c;break a;case 65:a.h=(-2147483583);break a;case 66:a.h=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:L(B4(C(3),E1(a),a.t));case 68:case 83:case 87:case 100:case 115:case 119:a.es=R6(DV(a.W,
a.hA,1),0);a.h=0;break a;case 71:a.h=(-2147483577);break a;case 80:case 112:break c;case 81:a.u0=a.ev;a.ev=4;b=1;break a;case 90:a.h=(-2147483558);break a;case 97:a.h=7;break a;case 98:a.h=(-2147483550);break a;case 99:c=a.t;d=a.W.data;if(c>=(d.length-2|0))L(B4(C(3),E1(a),a.t));a.h=d[BU(a)]&31;break a;case 101:a.h=27;break a;case 102:a.h=12;break a;case 110:a.h=10;break a;case 114:a.h=13;break a;case 116:a.h=9;break a;case 117:a.h=PO(a,4);break a;case 120:a.h=PO(a,2);break a;case 122:a.h=(-2147483526);break a;default:}break a;}g
=ABr(a);h=0;if(a.h==80)h=1;try{a.es=R6(g,h);}catch($$e){$$je=E5($$e);if($$je instanceof II){L(B4(C(3),E1(a),a.t));}else{throw $$e;}}a.h=0;}}if(b)continue;else break;}}
function ABr(a){var b,c,d,e,f,g;b=new R;FB(b,10);c=a.t;d=a.W;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=DV(d,BU(a),1);f=new R;T(f);J(J(f,C(316)),b);return S(f);}BU(a);c=0;a:{while(true){g=a.t;d=a.W.data;if(g>=(d.length-2|0))break;c=d[BU(a)];if(c==125)break a;BX(b,c);}}if(c!=125)L(B4(C(3),a.bB,a.t));}if(!b.H)L(B4(C(3),a.bB,a.t));f=S(b);if(H(f)==1){b=new R;T(b);J(J(b,C(316)),f);return S(b);}b:{c:{if(H(f)>3){if(J0(f,C(316)))break c;if(J0(f,C(317)))break c;}break b;}f=D3(f,2);}return f;}
function ADp(a,b){var c,d,e,f,g,$$je;c=new R;FB(c,4);d=(-1);e=2147483647;a:{while(true){f=a.t;g=a.W.data;if(f>=g.length)break a;b=g[BU(a)];if(b==125)break a;if(b==44&&d<0)try{d=I3(Jd(c),10);ADt(c,0,YS(c));continue;}catch($$e){$$je=E5($$e);if($$je instanceof CZ){break;}else{throw $$e;}}BX(c,b&65535);}L(B4(C(3),a.bB,a.t));}if(b!=125)L(B4(C(3),a.bB,a.t));if(c.H>0)b:{try{e=I3(Jd(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=E5($$e);if($$je instanceof CZ){}else{throw $$e;}}L(B4(C(3),a.bB,a.t));}else if(d<0)L(B4(C(3),
a.bB,a.t));if((d|e|(e-d|0))<0)L(B4(C(3),a.bB,a.t));b=a.t;g=a.W.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.h=(-2147483525);BU(a);break c;case 63:a.h=(-1073741701);BU(a);break c;default:}a.h=(-536870789);}c=new MM;c.eu=d;c.ep=e;return c;}
function E1(a){return a.bB;}
function C1(a){return !a.Y&&!a.h&&a.t==a.sh&&!Go(a)?1:0;}
function JM(b){return b<0?0:1;}
function EL(a){return !C1(a)&&!Go(a)&&JM(a.Y)?1:0;}
function Oc(a){var b;b=a.Y;return b<=56319&&b>=55296?1:0;}
function UR(a){var b;b=a.Y;return b<=57343&&b>=56320?1:0;}
function SH(b){return b<=56319&&b>=55296?1:0;}
function OX(b){return b<=57343&&b>=56320?1:0;}
function PO(a,b){var c,d,e,f,$$je;c=new R;FB(c,b);d=a.W.data.length-2|0;e=0;while(true){f=BD(e,b);if(f>=0)break;if(a.t>=d)break;BX(c,a.W.data[BU(a)]);e=e+1|0;}if(!f)a:{try{b=I3(Jd(c),16);}catch($$e){$$je=E5($$e);if($$je instanceof CZ){break a;}else{throw $$e;}}return b;}L(B4(C(3),a.bB,a.t));}
function ABJ(a){var b,c,d,e,f,g;b=3;c=1;d=a.W.data;e=d.length-2|0;f=Uj(d[a.t],8);switch(f){case -1:break;default:if(f>3)b=2;BU(a);a:{while(true){if(c>=b)break a;g=a.t;if(g>=e)break a;g=Uj(a.W.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BU(a);c=c+1|0;}}return f;}L(B4(C(3),a.bB,a.t));}
function ADS(a){var b,c,d,e;b=1;c=a.fL;a:while(true){d=a.t;e=a.W.data;if(d>=e.length)L(B4(C(3),a.bB,d));b:{c:{switch(e[d]){case 41:BU(a);return c|256;case 45:if(!b)L(B4(C(3),a.bB,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BU(a);}BU(a);return c;}
function BU(a){var b,c,d,e,f;b=a.t;a.hA=b;if(!(a.fL&4))a.t=b+1|0;else{c=a.W.data.length-2|0;a.t=b+1|0;a:while(true){d=a.t;if(d<c&&Rg(a.W.data[d])){a.t=a.t+1|0;continue;}d=a.t;if(d>=c)break;e=a.W.data;if(e[d]!=35)break;a.t=d+1|0;while(true){f=a.t;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.t=f+1|0;}}}return a.hA;}
function AC8(b){return AXF.Ej(b);}
function K9(a){var b,c,d,e;b=a.W.data[BU(a)];if(Cs(b)){c=a.hA+1|0;d=a.W.data;if(c<d.length){e=d[c];if(CO(e)){BU(a);return Eh(b,e);}}}return b;}
function Ob(a){return a.cZ;}
function Ib(){var a=this;BF.call(a);a.yb=null;a.xL=null;a.qX=0;}
function B4(a,b,c){var d=new Ib();IQ(d,a,b,c);return d;}
function IQ(a,b,c,d){X(a);a.qX=(-1);a.yb=b;a.xL=c;a.qX=d;}
var ADk=F();
function WF(){B.call(this);this.uI=null;}
function AM7(a,b){var c,d;c=a.uI;d=0;while(d<b.length){YN(c,b[d]);d=d+1|0;}}
var ABk=F(0);
function TP(){var a=this;B.call(a);a.p8=null;a.p9=null;a.p$=null;}
function AMH(a,b){a.p8.j(ARP(a.p9,b,a.p$));}
var RP=F(CC);
function AEQ(a,b,c,d){var e;e=a.ds;BH(d,e,b-C5(d,e)|0);return a.e.d(b,c,d);}
function AOf(a,b){return 0;}
var Xg=F(CC);
function AGA(a,b,c,d){return b;}
var PV=F(CC);
function AFV(a,b,c,d){if(C5(d,a.ds)!=b)b=(-1);return b;}
function SV(){CC.call(this);this.nD=0;}
function AEW(a,b,c,d){var e;e=a.ds;BH(d,e,b-C5(d,e)|0);a.nD=b;return b;}
function AMS(a,b){return 0;}
var Fb=F(CC);
function AP2(a,b,c,d){if(d.i_!=1&&b!=d.u)return (-1);d.iG=1;I9(d,0,b);return b;}
function BW(){BC.call(this);this.by=0;}
function Dc(a){BN(a);a.by=1;}
function ARa(a,b,c,d){var e;if((b+a.bS()|0)>d.u){d.dc=1;return (-1);}e=a.bl(b,c);if(e<0)return (-1);return a.e.d(b+e|0,c,d);}
function AO8(a){return a.by;}
function AJO(a,b){return 1;}
var ACW=F(BW);
function Gl(a){var b=new ACW();ALl(b,a);return b;}
function ALl(a,b){J_(a,b);a.by=1;a.hg=1;a.by=0;}
function AOA(a,b,c){return 0;}
function AHV(a,b,c,d){var e,f,g;e=d.u;f=d.cD;while(true){g=BD(b,e);if(g>0)return (-1);if(g<0&&CO(I(c,b))&&b>f&&Cs(I(c,b-1|0))){b=b+1|0;continue;}if(a.e.d(b,c,d)>=0)break;b=b+1|0;}return b;}
function AGt(a,b,c,d,e){var f,g;f=e.u;g=e.cD;while(true){if(c<b)return (-1);if(c<f&&CO(I(d,c))&&c>g&&Cs(I(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.d(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AET(a,b){return 0;}
function BR(){var a=this;BC.call(a);a.bv=null;a.ee=null;a.S=0;}
function ASJ(a,b){var c=new BR();Fc(c,a,b);return c;}
function Fc(a,b,c){BN(a);a.bv=b;a.ee=c;a.S=c.ds;}
function AII(a,b,c,d){var e,f,g,h;if(a.bv===null)return (-1);e=Fh(d,a.S);Db(d,a.S,b);f=a.bv.k;g=0;while(true){if(g>=f){Db(d,a.S,e);return (-1);}h=(Bs(a.bv,g)).d(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AMK(a,b){a.ee.e=b;}
function AKB(a,b){var c;a:{c=a.bv;if(c!==null){c=BO(c);while(true){if(!BP(c))break a;if(!(BS(c)).bM(b))continue;else return 1;}}}return 0;}
function ANp(a,b){return H0(b,a.S)>=0&&Fh(b,a.S)==H0(b,a.S)?0:1;}
function AGo(a){var b,c,d,e;a.b7=1;b=a.ee;if(b!==null&&!b.b7)Iy(b);a:{b=a.bv;if(b!==null){c=b.k;d=0;while(true){if(d>=c)break a;b=Bs(a.bv,d);e=b.e_();if(e===null)e=b;else{b.b7=1;Fj(a.bv,d);RF(a.bv,d,e);}if(!e.b7)e.ea();d=d+1|0;}}}if(a.e!==null)Iy(a);}
var Iq=F(BR);
function AMs(a,b,c,d){var e,f,g,h;e=C5(d,a.S);BH(d,a.S,b);f=a.bv.k;g=0;while(true){if(g>=f){BH(d,a.S,e);return (-1);}h=(Bs(a.bv,g)).d(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ANQ(a,b){return !C5(b,a.S)?0:1;}
var Du=F(Iq);
function AG2(a,b,c,d){var e,f,g;e=C5(d,a.S);BH(d,a.S,b);f=a.bv.k;g=0;while(g<f){if((Bs(a.bv,g)).d(b,c,d)>=0)return a.e.d(a.ee.nD,c,d);g=g+1|0;}BH(d,a.S,e);return (-1);}
function ANy(a,b){a.e=b;}
var Mv=F(Du);
function AME(a,b,c,d){var e,f;e=a.bv.k;f=0;while(f<e){if((Bs(a.bv,f)).d(b,c,d)>=0)return a.e.d(b,c,d);f=f+1|0;}return (-1);}
function APO(a,b){return 0;}
var VH=F(Du);
function AFD(a,b,c,d){var e,f;e=a.bv.k;f=0;while(true){if(f>=e)return a.e.d(b,c,d);if((Bs(a.bv,f)).d(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function APc(a,b){return 0;}
var Ri=F(Du);
function AGl(a,b,c,d){var e,f,g,h;e=a.bv.k;f=d.iM?0:d.cD;a:{g=a.e.d(b,c,d);if(g>=0){BH(d,a.S,b);h=0;while(true){if(h>=e)break a;if((Bs(a.bv,h)).cc(f,b,c,d)>=0){BH(d,a.S,(-1));return g;}h=h+1|0;}}}return (-1);}
function ARr(a,b){return 0;}
var Ti=F(Du);
function AEu(a,b,c,d){var e,f;e=a.bv.k;BH(d,a.S,b);f=0;while(true){if(f>=e)return a.e.d(b,c,d);if((Bs(a.bv,f)).cc(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AN5(a,b){return 0;}
function F5(){BR.call(this);this.cL=null;}
function AS7(a,b){var c=new F5();Zv(c,a,b);return c;}
function Zv(a,b,c){BN(a);a.cL=b;a.ee=c;a.S=c.ds;}
function AEI(a,b,c,d){var e,f;e=Fh(d,a.S);Db(d,a.S,b);f=a.cL.d(b,c,d);if(f>=0)return f;Db(d,a.S,e);return (-1);}
function AKX(a,b,c,d){var e;e=a.cL.b9(b,c,d);if(e>=0)Db(d,a.S,e);return e;}
function AOk(a,b,c,d,e){var f;f=a.cL.cc(b,c,d,e);if(f>=0)Db(e,a.S,f);return f;}
function AKv(a,b){return a.cL.bM(b);}
function AMN(a){var b;b=new MT;Zv(b,a.cL,a.ee);a.e=b;return b;}
function AQF(a){var b;a.b7=1;b=a.ee;if(b!==null&&!b.b7)Iy(b);b=a.cL;if(b!==null&&!b.b7){b=b.e_();if(b!==null){a.cL.b7=1;a.cL=b;}a.cL.ea();}}
var ADa=F();
function X1(b,c){c.fC=b.startColumn-1|0;c.e5=b.startLineNumber-1|0;c.iu=b.endColumn-1|0;c.jd=b.endLineNumber-1|0;}
function AEn(b,c,d,e){return {endColumn:b,endLineNumber:c,startColumn:d,startLineNumber:e};}
var Gk=F();
function Q(){var a=this;Gk.call(a);a.X=0;a.b6=0;a.G=null;a.jf=null;a.j2=null;a.I=0;}
var AXG=null;function OO(){OO=Bn(Q);AGO();}
function Bq(a){var b;OO();b=new Wy;b.y=By(64);a.G=b;}
function AFG(a){return null;}
function AE9(a){return a.G;}
function ABe(a){var b,c,d,e,f;if(!a.b6)b=GP(a.G,0)>=2048?0:1;else{a:{c=a.G;b=0;d=c.bi;if(b<d){e=c.y.data;f=(e[0]^(-1))>>>0|0;if(f)b=HT(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+HT(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AIZ(a){return a.I;}
function AO5(a){return a;}
function YD(a){var b,c;if(a.j2===null){b=a.eH();c=new VT;c.yA=a;c.n9=b;Bq(c);a.j2=c;Ef(c,a.b6);}return a.j2;}
function G8(a){var b,c;if(a.jf===null){b=a.eH();c=new VR;c.yd=a;c.uo=b;c.u_=a;Bq(c);a.jf=c;Ef(c,a.X);a.jf.I=a.I;}return a.jf;}
function AQz(a){return 0;}
function Ef(a,b){var c;c=a.X;if(c^b){a.X=c?0:1;a.b6=a.b6?0:1;}if(!a.I)a.I=1;return a;}
function AH1(a){return a.X;}
function JH(b,c){OO();return b.i(c);}
function HS(b,c){var d,e;OO();if(b.c8()!==null&&c.c8()!==null){b=b.c8();c=c.c8();d=Ba(b.y.data.length,c.y.data.length);e=0;a:{while(e<d){if(b.y.data[e]&c.y.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function R6(b,c){var d,e,f;OO();d=0;while(true){AN3();e=AXH.data;if(d>=e.length){f=new II;Bp(f,C(3));f.yS=C(3);f.yE=b;L(f);}e=e[d].data;if(BE(b,e[0]))break;d=d+1|0;}return ACr(e[1],c);}
function AGO(){var b;b=new GE;AN3();AXG=b;}
function Zk(){var a=this;Q.call(a);a.lo=0;a.nB=0;a.f7=0;a.kZ=0;a.dH=0;a.e6=0;a.C=null;a.bs=null;}
function C6(){var a=new Zk();ARj(a);return a;}
function APT(a,b){var c=new Zk();AGC(c,a,b);return c;}
function ARj(a){Bq(a);a.C=ARs();}
function AGC(a,b,c){Bq(a);a.C=ARs();a.lo=b;a.nB=c;}
function Cj(a,b){a:{if(a.lo){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dH){L7(a.C,G_(b&65535));break a;}K2(a.C,G_(b&65535));break a;}if(a.nB&&b>128){a.f7=1;b=Ga(F9(b));}}}if(!(!SH(b)&&!OX(b))){if(a.kZ)L7(a.G,b-55296|0);else K2(a.G,b-55296|0);}if(a.dH)L7(a.C,b);else K2(a.C,b);if(!a.I&&LJ(b))a.I=1;return a;}
function AD1(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(a.kZ){if(!b.b6)Fs(a.G,b.eH());else CV(a.G,b.eH());}else if(!b.b6)Fp(a.G,b.eH());else{E6(a.G,b.eH());CV(a.G,b.eH());a.b6=a.b6?0:1;a.kZ=1;}if(!a.e6&&b.c8()!==null){if(a.dH){if(!b.X)Fs(a.C,b.c8());else CV(a.C,b.c8());}else if(!b.X)Fp(a.C,b.c8());else{E6(a.C,b.c8());CV(a.C,b.c8());a.X=a.X?0:1;a.dH=1;}}else{c=a.X;d=a.bs;if(d!==null){if(!c){e=new OF;e.w0=a;e.vH=c;e.uV=d;e.uG=b;Bq(e);a.bs=e;}else{e=new OG;e.y1=a;e.rG=c;e.re=d;e.qw=b;Bq(e);a.bs=e;}}else{if(c&&!a.dH&&
LN(a.C)){d=new OC;d.xK=a;d.rr=b;Bq(d);a.bs=d;}else if(!c){d=new OA;d.kF=a;d.jH=c;d.o7=b;Bq(d);a.bs=d;}else{d=new OB;d.lF=a;d.jQ=c;d.uL=b;Bq(d);a.bs=d;}a.e6=1;}}return a;}
function BT(a,b,c){var d,e,f,g,h;if(b>c){d=new BF;X(d);L(d);}a:{b:{if(!a.lo){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cj(a,b);b=b+1|0;}}if(!a.dH)Ht(a.C,b,c+1|0);else{d=a.C;c=c+1|0;if(b>c){d=new BV;X(d);L(d);}e=d.bi;if(b<e){f=Ba(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.y.data;h[g]=h[g]&(HN(d,b)|Hk(d,f));}else{h=d.y.data;h[g]=h[g]&HN(d,b);e=g+1|0;while(e<c){d.y.data[e]=0;e=e+1|0;}if(f&31){h=d.y.data;h[c]=h[c]&Hk(d,f);}}GH(d);}}}}return a;}
function X6(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.f7)a.f7=1;c=a.b6;if(!(c^b.b6)){if(!c)Fp(a.G,b.G);else CV(a.G,b.G);}else if(c)Fs(a.G,b.G);else{E6(a.G,b.G);CV(a.G,b.G);a.b6=1;}if(!a.e6&&CH(b)!==null){c=a.X;if(!(c^b.X)){if(!c)Fp(a.C,CH(b));else CV(a.C,CH(b));}else if(c)Fs(a.C,CH(b));else{E6(a.C,CH(b));CV(a.C,CH(b));a.X=1;}}else{c=a.X;d=a.bs;if(d!==null){if(!c){e=new Ou;e.wN=a;e.tJ=c;e.uK=d;e.vm=b;Bq(e);a.bs=e;}else{e=new O$;e.w9=a;e.vj=c;e.m8=d;e.nL=b;Bq(e);a.bs=e;}}else{if(!a.dH&&LN(a.C)){if(!c){d=new OD;d.y3
=a;d.qf=b;Bq(d);a.bs=d;}else{d=new OE;d.xb=a;d.u7=b;Bq(d);a.bs=d;}}else if(!c){d=new OH;d.tV=a;d.r0=b;d.ri=c;Bq(d);a.bs=d;}else{d=new OI;d.sl=a;d.sF=b;d.sY=c;Bq(d);a.bs=d;}a.e6=1;}}}
function Wk(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.f7)a.f7=1;c=a.b6;if(!(c^b.b6)){if(!c)CV(a.G,b.G);else Fp(a.G,b.G);}else if(!c)Fs(a.G,b.G);else{E6(a.G,b.G);CV(a.G,b.G);a.b6=0;}if(!a.e6&&CH(b)!==null){c=a.X;if(!(c^b.X)){if(!c)CV(a.C,CH(b));else Fp(a.C,CH(b));}else if(!c)Fs(a.C,CH(b));else{E6(a.C,CH(b));CV(a.C,CH(b));a.X=0;}}else{c=a.X;d=a.bs;if(d!==null){if(!c){e=new Ow;e.wZ=a;e.tZ=c;e.n3=d;e.rD=b;Bq(e);a.bs=e;}else{e=new Ox;e.xg=a;e.te=c;e.mX=d;e.tH=b;Bq(e);a.bs=e;}}else{if(!a.dH&&LN(a.C)){if(!c){d=new Os;d.xd
=a;d.pH=b;Bq(d);a.bs=d;}else{d=new Ot;d.yX=a;d.pR=b;Bq(d);a.bs=d;}}else if(!c){d=new Oy;d.wv=a;d.vD=b;d.sw=c;Bq(d);a.bs=d;}else{d=new Or;d.su=a;d.tm=b;d.rI=c;Bq(d);a.bs=d;}a.e6=1;}}}
function CL(a,b){var c;c=a.bs;if(c!==null)return a.X^c.i(b);return a.X^C$(a.C,b);}
function CH(a){if(!a.e6)return a.C;return null;}
function AHQ(a){return a.G;}
function APv(a){var b,c;if(a.bs!==null)return a;b=CH(a);c=new Ov;c.wI=a;c.ij=b;Bq(c);return Ef(c,a.X);}
function ALS(a){var b,c,d;b=new R;T(b);c=GP(a.C,0);while(c>=0){HV(b,F3(c));BX(b,124);c=GP(a.C,c+1|0);}d=b.H;if(d>0)VJ(b,d-1|0);return S(b);}
function AH4(a){return a.f7;}
function II(){var a=this;Bt.call(a);a.yS=null;a.yE=null;}
function DN(){BC.call(this);this.F=null;}
function CY(a,b,c,d){J_(a,c);a.F=b;a.hg=d;}
function ARi(a){return a.F;}
function AOl(a,b){return !a.F.bM(b)&&!a.e.bM(b)?0:1;}
function APU(a,b){return 1;}
function ALh(a){var b;a.b7=1;b=a.e;if(b!==null&&!b.b7){b=b.e_();if(b!==null){a.e.b7=1;a.e=b;}a.e.ea();}b=a.F;if(b!==null){if(!b.b7){b=b.e_();if(b!==null){a.F.b7=1;a.F=b;}a.F.ea();}else if(b instanceof F5&&b.ee.j7)a.F=b.e;}}
function CN(){DN.call(this);this.T=null;}
function ATa(a,b,c){var d=new CN();EB(d,a,b,c);return d;}
function EB(a,b,c,d){CY(a,b,c,d);a.T=b;}
function AEw(a,b,c,d){var e,f;e=0;a:{while((b+a.T.bS()|0)<=d.u){f=a.T.bl(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.d(b,c,d);if(f>=0)break;b=b-a.T.bS()|0;e=e+(-1)|0;}return f;}
function EQ(){CN.call(this);this.i$=null;}
function ASb(a,b,c,d){var e=new EQ();Sa(e,a,b,c,d);return e;}
function Sa(a,b,c,d,e){EB(a,c,d,e);a.i$=b;}
function AFn(a,b,c,d){var e,f,g,h,i;e=a.i$;f=e.eu;g=e.ep;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.T.bS()|0)>d.u)break a;i=a.T.bl(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.d(b,c,d);if(i>=0)break;b=b-a.T.bS()|0;h=h+(-1)|0;}return i;}if((b+a.T.bS()|0)>d.u){d.dc=1;return (-1);}i=a.T.bl(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CD=F(DN);
function AEH(a,b,c,d){var e;if(!a.F.E(d))return a.e.d(b,c,d);e=a.F.d(b,c,d);if(e>=0)return e;return a.e.d(b,c,d);}
var El=F(CN);
function AK3(a,b,c,d){var e;e=a.F.d(b,c,d);if(e<0)e=a.e.d(b,c,d);return e;}
function ARu(a,b){a.e=b;a.F.L(b);}
var VU=F(CN);
function AQ4(a,b,c,d){while((b+a.T.bS()|0)<=d.u&&a.T.bl(b,c)>0){b=b+a.T.bS()|0;}return a.e.d(b,c,d);}
function ALN(a,b,c,d){var e,f,g;e=a.e.b9(b,c,d);if(e<0)return (-1);f=e-a.T.bS()|0;while(f>=b&&a.T.bl(f,c)>0){g=f-a.T.bS()|0;e=f;f=g;}return e;}
function W(){var a=this;B.call(a);a.lL=null;a.kA=null;}
function ACr(a,b){if(!b&&a.lL===null)a.lL=a.A();else if(b&&a.kA===null)a.kA=Ef(a.A(),1);if(b)return a.kA;return a.lL;}
var CZ=F(BF);
function MM(){var a=this;Gk.call(a);a.eu=0;a.ep=0;}
function ALW(a){var b,c,d,e,f;b=a.eu;c=a.ep;d=c!=2147483647?KS(c):C(3);e=new R;T(e);BX(e,123);f=Bl(e,b);BX(f,44);BX(J(f,d),125);return S(e);}
var Og=F(BC);
function AKd(a,b,c,d){return b;}
function AMI(a,b){return 0;}
function Wy(){var a=this;B.call(a);a.y=null;a.bi=0;}
function ARs(){var a=new Wy();AGb(a);return a;}
function AGb(a){a.y=By(0);}
function K2(a,b){var c,d;c=b/32|0;if(b>=a.bi){HX(a,c+1|0);a.bi=b+1|0;}d=a.y.data;d[c]=d[c]|1<<(b%32|0);}
function Ht(a,b,c){var d,e,f,g,h;d=BD(b,c);if(d>0){e=new BV;X(e);L(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bi){HX(a,f+1|0);a.bi=c;}if(d==f){g=a.y.data;g[d]=g[d]|Hk(a,b)&HN(a,c);}else{g=a.y.data;g[d]=g[d]|Hk(a,b);h=d+1|0;while(h<f){a.y.data[h]=(-1);h=h+1|0;}if(c&31){g=a.y.data;g[f]=g[f]|HN(a,c);}}}
function Hk(a,b){return (-1)<<(b%32|0);}
function HN(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function L7(a,b){var c,d,e,f;c=b/32|0;d=a.y.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bi-1|0))GH(a);}}
function C$(a,b){var c,d;c=b/32|0;d=a.y.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function GP(a,b){var c,d,e,f;c=a.bi;if(b>=c)return (-1);d=b/32|0;e=a.y.data;f=e[d]>>>(b%32|0)|0;if(f)return HT(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+HT(e[f])|0;f=f+1|0;}return (-1);}
function HX(a,b){var c;c=a.y.data.length;if(c>=b)return;c=Z((b*3|0)/2|0,(c*2|0)+1|0);a.y=Io(a.y,c);}
function GH(a){var b,c,d;b=(a.bi+31|0)/32|0;a.bi=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=NE(a.y.data[c]);if(d<32)break;c=c+(-1)|0;a.bi=a.bi-32|0;}a.bi=a.bi-d|0;}}
function CV(a,b){var c,d,e,f;c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&b.y.data[d];d=d+1|0;}while(true){f=a.y.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bi=Ba(a.bi,b.bi);GH(a);}
function Fs(a,b){var c,d,e;c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&(b.y.data[d]^(-1));d=d+1|0;}GH(a);}
function Fp(a,b){var c,d,e;c=Z(a.bi,b.bi);a.bi=c;HX(a,(c+31|0)/32|0);c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]|b.y.data[d];d=d+1|0;}}
function E6(a,b){var c,d,e;c=Z(a.bi,b.bi);a.bi=c;HX(a,(c+31|0)/32|0);c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]^b.y.data[d];d=d+1|0;}GH(a);}
function LN(a){return a.bi?0:1;}
function MC(){var a=this;BR.call(a);a.pW=null;a.wH=0;}
function Qt(){var a=this;BR.call(a);a.l$=null;a.lH=null;}
function ABX(a,b){var c=new Qt();ADK(c,a,b);return c;}
function ADK(a,b,c){BN(a);a.l$=b;a.lH=c;}
function AFi(a,b,c,d){var e,f,g,h,i;e=a.l$.d(b,c,d);if(e<0)a:{f=a.lH;g=d.cD;e=d.u;h=b+1|0;e=BD(h,e);if(e>0){d.dc=1;e=(-1);}else{i=I(c,b);if(!f.pW.i(i))e=(-1);else{if(Cs(i)){if(e<0&&CO(I(c,h))){e=(-1);break a;}}else if(CO(i)&&b>g&&Cs(I(c,b-1|0))){e=(-1);break a;}e=f.e.d(h,c,d);}}}if(e>=0)return e;return (-1);}
function AMq(a,b){a.e=b;a.lH.e=b;a.l$.L(b);}
function AF2(a,b){return 1;}
function AFE(a,b){return 1;}
function Di(){var a=this;BR.call(a);a.dy=null;a.xF=0;}
function AKa(a){var b=new Di();TV(b,a);return b;}
function TV(a,b){BN(a);a.dy=b.iT();a.xF=b.X;}
function AHG(a,b,c,d){var e,f,g,h;e=d.u;if(b<e){f=b+1|0;g=I(c,b);if(a.i(g)){h=a.e.d(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=I(c,f);if(G1(g,f)&&a.i(Eh(g,f)))return a.e.d(b,c,d);}}return (-1);}
function AIh(a,b){return a.dy.i(b);}
function AFc(a,b){if(b instanceof DC)return JH(a.dy,b.fu);if(b instanceof Eb)return JH(a.dy,b.c6);if(b instanceof Di)return HS(a.dy,b.dy);if(!(b instanceof DZ))return 1;return HS(a.dy,b.eU);}
function AJ3(a){return a.dy;}
function AOU(a,b){a.e=b;}
function AHS(a,b){return 1;}
var IF=F(Di);
function AJP(a,b){return a.dy.i(Ga(F9(b)));}
function Y_(){var a=this;BW.call(a);a.qM=null;a.xs=0;}
function AI1(a){var b=new Y_();AL5(b,a);return b;}
function AL5(a,b){Dc(a);a.qM=b.iT();a.xs=b.X;}
function AKe(a,b,c){return !a.qM.i(EH(Ek(I(c,b))))?(-1):1;}
function DZ(){var a=this;BW.call(a);a.eU=null;a.xW=0;}
function APm(a){var b=new DZ();ANb(b,a);return b;}
function ANb(a,b){Dc(a);a.eU=b.iT();a.xW=b.X;}
function Mb(a,b,c){return !a.eU.i(I(c,b))?(-1):1;}
function AMM(a,b){if(b instanceof Eb)return JH(a.eU,b.c6);if(b instanceof DZ)return HS(a.eU,b.eU);if(!(b instanceof Di)){if(!(b instanceof DC))return 1;return 0;}return HS(a.eU,b.dy);}
function OP(){var a=this;BR.call(a);a.gq=null;a.lX=null;a.i8=0;}
function APC(a,b){var c=new OP();AEJ(c,a,b);return c;}
function AEJ(a,b,c){BN(a);a.gq=b;a.i8=c;}
function AK1(a,b){a.e=b;}
function QG(a){if(a.lX===null)a.lX=GY(a.gq);return a.lX;}
function AEl(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.u;f=By(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=I(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?FI([k,l]):FI([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.i8;if(b!=n)return (-1);while(true){if(l>=n)return a.e.d(i,c,d);if(m[l]!=a.gq.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=I(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=I(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.i8==3){k=f[0];m=a.gq.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.d(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.i8==2){b=f[0];m=a.gq.data;if(b==m[0]&&f[1]==m[1]){b=a.e.d(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AFS(a,b){return b instanceof OP&&!BE(QG(b),QG(a))?0:1;}
function APA(a,b){return 1;}
function Eb(){BW.call(this);this.c6=0;}
function ZE(a){var b=new Eb();ANe(b,a);return b;}
function ANe(a,b){Dc(a);a.c6=b;}
function AJY(a){return 1;}
function AIV(a,b,c){return a.c6!=I(c,b)?(-1):1;}
function AHD(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return Hc(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=HR(c,a.c6,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.d(b,c,d)>=0)break;}return f;}
function AJ6(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hm(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=G4(d,a.c6,c);if(f<0)break a;if(f<b)break a;if(a.e.d(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function APq(a,b){if(b instanceof Eb)return b.c6!=a.c6?0:1;if(!(b instanceof DZ)){if(b instanceof Di)return b.i(a.c6);if(!(b instanceof DC))return 1;return 0;}return Mb(b,0,Wz(a.c6))<=0?0:1;}
function ADw(){BW.call(this);this.mN=0;}
function ANB(a){var b=new ADw();ALI(b,a);return b;}
function ALI(a,b){Dc(a);a.mN=EH(Ek(b));}
function AEe(a,b,c){return a.mN!=EH(Ek(I(c,b)))?(-1):1;}
function X8(){var a=this;BW.call(a);a.vs=0;a.n0=0;}
function AGi(a){var b=new X8();AN1(b,a);return b;}
function AN1(a,b){Dc(a);a.vs=b;a.n0=G_(b);}
function AEB(a,b,c){return a.vs!=I(c,b)&&a.n0!=I(c,b)?(-1):1;}
function E0(){var a=this;BR.call(a);a.g_=0;a.kl=null;a.jK=null;a.jC=0;}
function ATV(a,b){var c=new E0();N5(c,a,b);return c;}
function N5(a,b,c){BN(a);a.g_=1;a.jK=b;a.jC=c;}
function AQD(a,b){a.e=b;}
function AMr(a,b,c,d){var e,f,g,h,i,j,k,l;e=By(4);f=d.u;if(b>=f)return (-1);g=JT(a,b,c,f);h=b+a.g_|0;i=AC8(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;C_(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=JT(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AC8(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.g_|0;if(h>=f){b=k;break a;}g=JT(a,h,c,f);b=k;}}}if(b!=a.jC)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.d(h,c,d);if(i[g]!=a.jK.data[g])break;g=g+1|0;}return (-1);}
function Wj(a){var b,c;if(a.kl===null){b=new R;T(b);c=0;while(c<a.jC){HV(b,F3(a.jK.data[c]));c=c+1|0;}a.kl=S(b);}return a.kl;}
function JT(a,b,c,d){var e,f,g;a.g_=1;if(b>=(d-1|0))e=I(c,b);else{d=b+1|0;e=I(c,b);f=I(c,d);if(G1(e,f)){g=B1(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Cs(g[0])&&CO(g[1])?Eh(g[0],g[1]):g[0];a.g_=2;}}return e;}
function AKf(a,b){return b instanceof E0&&!BE(Wj(b),Wj(a))?0:1;}
function ANz(a,b){return 1;}
var WX=F(E0);
var Tx=F(E0);
var XT=F(CD);
function AGG(a,b,c,d){var e;while(true){e=a.F.d(b,c,d);if(e<=0)break;b=e;}return a.e.d(b,c,d);}
var PK=F(CD);
function ALA(a,b,c,d){var e;e=a.F.d(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.F.d(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.d(b,c,d);}
var Fr=F(CD);
function AOS(a,b,c,d){var e;if(!a.F.E(d))return a.e.d(b,c,d);e=a.F.d(b,c,d);if(e>=0)return e;return a.e.d(b,c,d);}
function AP7(a,b){a.e=b;a.F.L(b);}
var Pk=F(Fr);
function AJ1(a,b,c,d){var e;e=a.F.d(b,c,d);if(e<=0)e=b;return a.e.d(e,c,d);}
function AL0(a,b){a.e=b;}
function EZ(){var a=this;CD.call(a);a.fE=null;a.di=0;}
function AXI(a,b,c,d,e){var f=new EZ();ID(f,a,b,c,d,e);return f;}
function ID(a,b,c,d,e,f){CY(a,c,d,e);a.fE=b;a.di=f;}
function ARp(a,b,c,d){var e,f;e=MG(d,a.di);if(!a.F.E(d))return a.e.d(b,c,d);if(e>=a.fE.ep)return a.e.d(b,c,d);f=a.di;e=e+1|0;DW(d,f,e);f=a.F.d(b,c,d);if(f>=0){DW(d,a.di,0);return f;}f=a.di;e=e+(-1)|0;DW(d,f,e);if(e>=a.fE.eu)return a.e.d(b,c,d);DW(d,a.di,0);return (-1);}
var MY=F(EZ);
function AJn(a,b,c,d){var e,f,g;e=0;f=a.fE.ep;a:{while(true){g=a.F.d(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fE.eu)return (-1);return a.e.d(b,c,d);}
var RG=F(CD);
function AQP(a,b,c,d){var e;if(!a.F.E(d))return a.e.d(b,c,d);e=a.e.d(b,c,d);if(e>=0)return e;return a.F.d(b,c,d);}
var QF=F(Fr);
function AF4(a,b,c,d){var e;if(!a.F.E(d))return a.e.d(b,c,d);e=a.e.d(b,c,d);if(e<0)e=a.F.d(b,c,d);return e;}
var Uq=F(EZ);
function AE2(a,b,c,d){var e,f,g;e=MG(d,a.di);if(!a.F.E(d))return a.e.d(b,c,d);f=a.fE;if(e>=f.ep){DW(d,a.di,0);return a.e.d(b,c,d);}if(e<f.eu){DW(d,a.di,e+1|0);g=a.F.d(b,c,d);}else{g=a.e.d(b,c,d);if(g>=0){DW(d,a.di,0);return g;}DW(d,a.di,e+1|0);g=a.F.d(b,c,d);}return g;}
var RH=F(DN);
function ARe(a,b,c,d){var e;e=d.u;if(e>b)return a.e.cc(b,e,c,d);return a.e.d(b,c,d);}
function AO6(a,b,c,d){var e;e=d.u;if(a.e.cc(b,e,c,d)>=0)return b;return (-1);}
function Oq(){DN.call(this);this.kx=null;}
function AMO(a,b,c,d){var e,f;e=d.u;f=Us(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cc(b,e,c,d);return a.e.d(b,c,d);}
function AEr(a,b,c,d){var e,f,g,h;e=d.u;f=a.e.b9(b,c,d);if(f<0)return (-1);g=Us(a,f,e,c);if(g>=0)e=g;g=Z(f,a.e.cc(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.kx.he(I(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Us(a,b,c,d){while(true){if(b>=c)return (-1);if(a.kx.he(I(d,b)))break;b=b+1|0;}return b;}
var Ew=F();
var AXJ=null;var AXK=null;function Pm(b){var c;if(!(b&1)){c=AXK;if(c!==null)return c;c=new UY;AXK=c;return c;}c=AXJ;if(c!==null)return c;c=new UX;AXJ=c;return c;}
var XW=F(CN);
function AE3(a,b,c,d){var e;a:{while(true){if((b+a.T.bS()|0)>d.u)break a;e=a.T.bl(b,c);if(e<1)break;b=b+e|0;}}return a.e.d(b,c,d);}
var VO=F(El);
function ALw(a,b,c,d){var e;if((b+a.T.bS()|0)<=d.u){e=a.T.bl(b,c);if(e>=1)b=b+e|0;}return a.e.d(b,c,d);}
var O7=F(EQ);
function AOm(a,b,c,d){var e,f,g,h,i;e=a.i$;f=e.eu;g=e.ep;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.T.bS()|0)>d.u)break a;i=a.T.bl(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.d(b,c,d);}if((b+a.T.bS()|0)>d.u){d.dc=1;return (-1);}i=a.T.bl(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Qz=F(CN);
function AMG(a,b,c,d){var e;while(true){e=a.e.d(b,c,d);if(e>=0)break;if((b+a.T.bS()|0)<=d.u){e=a.T.bl(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var TI=F(El);
function AFb(a,b,c,d){var e;e=a.e.d(b,c,d);if(e>=0)return e;return a.F.d(b,c,d);}
var Rj=F(EQ);
function AOD(a,b,c,d){var e,f,g,h,i,j;e=a.i$;f=e.eu;g=e.ep;h=0;while(true){if(h>=f){a:{while(true){i=a.e.d(b,c,d);if(i>=0)break;if((b+a.T.bS()|0)<=d.u){i=a.T.bl(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.T.bS()|0)>d.u){d.dc=1;return (-1);}j=a.T.bl(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var JR=F(BC);
function AKz(a,b,c,d){if(b&&!(d.e8&&b==d.cD))return (-1);return a.e.d(b,c,d);}
function AJA(a,b){return 0;}
function ZO(){BC.call(this);this.uX=0;}
function APl(a){var b=new ZO();AJS(b,a);return b;}
function AJS(a,b){BN(a);a.uX=b;}
function AFB(a,b,c,d){var e,f,g;e=b<d.u?I(c,b):32;f=!b?32:I(c,b-1|0);g=d.iM?0:d.cD;return (e!=32&&!QK(a,e,b,g,c)?0:1)^(f!=32&&!QK(a,f,b-1|0,g,c)?0:1)^a.uX?(-1):a.e.d(b,c,d);}
function AFQ(a,b){return 0;}
function QK(a,b,c,d,e){var f;if(!I0(b)&&b!=95){a:{if(Ch(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=I(e,c);if(I0(f))return 0;if(Ch(f)!=6)return 1;}}return 1;}return 0;}
var Ol=F(BC);
function AJR(a,b,c,d){if(b!=d.hl)return (-1);return a.e.d(b,c,d);}
function ARl(a,b){return 0;}
function WD(){BC.call(this);this.fN=0;}
function ATo(a){var b=new WD();ACX(b,a);return b;}
function ACX(a,b){BN(a);a.fN=b;}
function ANi(a,b,c,d){var e,f,g;e=!d.e8?H(c):d.u;if(b>=e){BH(d,a.fN,0);return a.e.d(b,c,d);}f=e-b|0;if(f==2&&I(c,b)==13&&I(c,b+1|0)==10){BH(d,a.fN,0);return a.e.d(b,c,d);}a:{if(f==1){g=I(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BH(d,a.fN,0);return a.e.d(b,c,d);}
function AGw(a,b){var c;c=!C5(b,a.fN)?0:1;BH(b,a.fN,(-1));return c;}
var Wa=F(BC);
function AMn(a,b,c,d){if(b<(d.iM?H(c):d.u))return (-1);d.dc=1;d.yn=1;return a.e.d(b,c,d);}
function AEc(a,b){return 0;}
function M_(){BC.call(this);this.rQ=null;}
function AGm(a,b,c,d){a:{if(b!=d.u){if(!b)break a;if(d.e8&&b==d.cD)break a;if(a.rQ.th(I(c,b-1|0),I(c,b)))break a;}return (-1);}return a.e.d(b,c,d);}
function AIx(a,b){return 0;}
var ADm=F(BR);
function ATG(){var a=new ADm();AMa(a);return a;}
function AMa(a){BN(a);}
function AQV(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.dc=1;return (-1);}g=I(c,b);if(Cs(g)){h=b+2|0;if(h<=e&&G1(g,I(c,f)))return a.e.d(h,c,d);}return a.e.d(f,c,d);}
function AFU(a,b){a.e=b;}
function AL6(a){return (-2147483602);}
function AFT(a,b){return 1;}
function Zh(){BR.call(this);this.k7=null;}
function ATf(a){var b=new Zh();AGu(b,a);return b;}
function AGu(a,b){BN(a);a.k7=b;}
function AMg(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.dc=1;return (-1);}g=I(c,b);if(Cs(g)){b=b+2|0;if(b<=e){h=I(c,f);if(G1(g,h))return a.k7.he(Eh(g,h))?(-1):a.e.d(b,c,d);}}return a.k7.he(g)?(-1):a.e.d(f,c,d);}
function AOc(a,b){a.e=b;}
function AD9(a){return (-2147483602);}
function AQ_(a,b){return 1;}
function AC6(){BC.call(this);this.g5=0;}
function ASP(a){var b=new AC6();AIs(b,a);return b;}
function AIs(a,b){BN(a);a.g5=b;}
function AKj(a,b,c,d){var e;e=!d.e8?H(c):d.u;if(b>=e){BH(d,a.g5,0);return a.e.d(b,c,d);}if((e-b|0)==1&&I(c,b)==10){BH(d,a.g5,1);return a.e.d(b+1|0,c,d);}return (-1);}
function AIr(a,b){var c;c=!C5(b,a.g5)?0:1;BH(b,a.g5,(-1));return c;}
function ABh(){BC.call(this);this.g$=0;}
function ASu(a){var b=new ABh();AI2(b,a);return b;}
function AI2(a,b){BN(a);a.g$=b;}
function AMl(a,b,c,d){if((!d.e8?H(c)-b|0:d.u-b|0)<=0){BH(d,a.g$,0);return a.e.d(b,c,d);}if(I(c,b)!=10)return (-1);BH(d,a.g$,1);return a.e.d(b+1|0,c,d);}
function AIc(a,b){var c;c=!C5(b,a.g$)?0:1;BH(b,a.g$,(-1));return c;}
function X5(){BC.call(this);this.fi=0;}
function ARO(a){var b=new X5();ARq(b,a);return b;}
function ARq(a,b){BN(a);a.fi=b;}
function AJq(a,b,c,d){var e,f,g;e=!d.e8?H(c)-b|0:d.u-b|0;if(!e){BH(d,a.fi,0);return a.e.d(b,c,d);}if(e<2){f=I(c,b);g=97;}else{f=I(c,b);g=I(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BH(d,a.fi,0);return a.e.d(b,c,d);case 13:if(g!=10){BH(d,a.fi,0);return a.e.d(b,c,d);}BH(d,a.fi,0);return a.e.d(b,c,d);default:}return (-1);}
function AGz(a,b){var c;c=!C5(b,a.fi)?0:1;BH(b,a.fi,(-1));return c;}
function GF(){var a=this;BR.call(a);a.nt=0;a.gk=0;}
function ATQ(a,b){var c=new GF();OW(c,a,b);return c;}
function OW(a,b,c){BN(a);a.nt=b;a.gk=c;}
function AE8(a,b,c,d){var e,f,g,h;e=FM(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=0;while(true){if(f>=H(e)){BH(d,a.gk,H(e));return a.e.d(b+H(e)|0,c,d);}g=I(e,f);h=b+f|0;if(g!=I(c,h)&&G_(I(e,f))!=I(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ANv(a,b){a.e=b;}
function FM(a,b){var c,d;c=a.nt;d=Fh(b,c);c=H0(b,c);return (c|d|(c-d|0))>=0&&c<=H(b.k$)?B9(b.k$,d,c):null;}
function ANS(a,b){var c;c=!C5(b,a.gk)?0:1;BH(b,a.gk,(-1));return c;}
var ADb=F(GF);
function ART(a,b){var c=new ADb();APW(c,a,b);return c;}
function APW(a,b,c){OW(a,b,c);}
function AGF(a,b,c,d){var e,f;e=FM(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=!TU(c,e,b)?(-1):H(e);if(f<0)return (-1);BH(d,a.gk,f);return a.e.d(b+f|0,c,d);}return (-1);}
function APK(a,b,c,d){var e,f;e=FM(a,d);f=d.cD;if(e!==null&&(b+H(e)|0)<=f){while(true){if(b>f)return (-1);b=PN(c,e,b);if(b<0)return (-1);if(a.e.d(b+H(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AER(a,b,c,d,e){var f,g;f=FM(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=P0(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.d(g+H(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ALo(a,b){return 1;}
var AAv=F(GF);
function ASv(a,b){var c=new AAv();AIo(c,a,b);return c;}
function AIo(a,b,c){OW(a,b,c);}
function AKR(a,b,c,d){var e,f;e=FM(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=0;while(true){if(f>=H(e)){BH(d,a.gk,H(e));return a.e.d(b+H(e)|0,c,d);}if(EH(Ek(I(e,f)))!=EH(Ek(I(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Of=F(FU);
function AH5(a,b,c,d,e){MQ(a,b,c,d,e);return a;}
function AFH(a,b,c,d){WL(a,b,c,d);return a;}
function AGa(a,b){I8(a,b);}
function AO7(a,b,c){W2(a,b,c);return a;}
function RJ(){var a=this;BW.call(a);a.cj=null;a.ko=null;a.le=null;}
function AG0(a,b,c){return !JQ(a,c,b)?(-1):a.by;}
function AFw(a,b,c,d){var e,f,g;e=d.u;while(true){if(b>e)return (-1);f=I(a.cj,a.by-1|0);a:{while(true){g=a.by;if(b>(e-g|0)){b=(-1);break a;}g=I(c,(b+g|0)-1|0);if(g==f&&JQ(a,c,b))break;b=b+SO(a.ko,g)|0;}}if(b<0)return (-1);if(a.e.d(b+a.by|0,c,d)>=0)break;b=b+1|0;}return b;}
function AIv(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=I(a.cj,0);g=(H(d)-c|0)-a.by|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=I(d,c);if(g==f&&JQ(a,d,c))break;c=c-SO(a.le,g)|0;}}if(c<0)return (-1);if(a.e.d(c+a.by|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AI8(a,b){var c;if(b instanceof Eb)return b.c6!=I(a.cj,0)?0:1;if(b instanceof DZ)return Mb(b,0,B9(a.cj,0,1))<=0?0:1;if(!(b instanceof Di)){if(!(b instanceof DC))return 1;return H(a.cj)>1&&b.fu==Eh(I(a.cj,0),I(a.cj,1))?1:0;}a:{b:{b=b;if(!b.i(I(a.cj,0))){if(H(a.cj)<=1)break b;if(!b.i(Eh(I(a.cj,0),I(a.cj,1))))break b;}c=1;break a;}c=0;}return c;}
function JQ(a,b,c){var d;d=0;while(d<a.by){if(I(b,d+c|0)!=I(a.cj,d))return 0;d=d+1|0;}return 1;}
function X4(){BW.call(this);this.iP=null;}
function ATU(a){var b=new X4();APr(b,a);return b;}
function APr(a,b){var c,d,e;Dc(a);c=new R;T(c);d=0;while(true){e=BD(d,b.H);if(e>=0){a.iP=S(c);a.by=c.H;return;}if(d<0)break;if(e>=0)break;BX(c,EH(Ek(b.M.data[d])));d=d+1|0;}b=new BV;X(b);L(b);}
function AKZ(a,b,c){var d;d=0;while(true){if(d>=H(a.iP))return H(a.iP);if(I(a.iP,d)!=EH(Ek(I(c,b+d|0))))break;d=d+1|0;}return (-1);}
function M4(){BW.call(this);this.g3=null;}
function AOq(a,b,c){var d,e,f;d=0;while(true){if(d>=H(a.g3))return H(a.g3);e=I(a.g3,d);f=b+d|0;if(e!=I(c,f)&&G_(I(a.g3,d))!=I(c,f))break;d=d+1|0;}return (-1);}
var GE=F();
var AXL=null;var AXM=null;var AXH=null;function AN3(){AN3=Bn(GE);AHn();}
function AHn(){AXL=ATw();AXM=ASI();AXH=G($rt_arraycls(B),[G(B,[C(318),ATR()]),G(B,[C(319),ARL()]),G(B,[C(320),ATs()]),G(B,[C(321),ATB()]),G(B,[C(322),AXM]),G(B,[C(323),ASU()]),G(B,[C(324),ASF()]),G(B,[C(325),ARV()]),G(B,[C(326),ARS()]),G(B,[C(327),AR0()]),G(B,[C(328),ASd()]),G(B,[C(329),ARY()]),G(B,[C(330),AS_()]),G(B,[C(331),ARF()]),G(B,[C(332),ATx()]),G(B,[C(333),ASc()]),G(B,[C(334),ASS()]),G(B,[C(335),ASa()]),G(B,[C(336),AST()]),G(B,[C(337),AR2()]),G(B,[C(338),ATF()]),G(B,[C(339),AR6()]),G(B,[C(340),ASZ()]),
G(B,[C(341),ATr()]),G(B,[C(342),ATp()]),G(B,[C(343),ATC()]),G(B,[C(344),AR1()]),G(B,[C(345),ATe()]),G(B,[C(346),AXL]),G(B,[C(347),AS3()]),G(B,[C(348),ARW()]),G(B,[C(349),AXL]),G(B,[C(350),ARB()]),G(B,[C(351),AXM]),G(B,[C(352),ASl()]),G(B,[C(353),N(0,127)]),G(B,[C(354),N(128,255)]),G(B,[C(355),N(256,383)]),G(B,[C(356),N(384,591)]),G(B,[C(357),N(592,687)]),G(B,[C(358),N(688,767)]),G(B,[C(359),N(768,879)]),G(B,[C(360),N(880,1023)]),G(B,[C(361),N(1024,1279)]),G(B,[C(362),N(1280,1327)]),G(B,[C(363),N(1328,1423)]),
G(B,[C(364),N(1424,1535)]),G(B,[C(365),N(1536,1791)]),G(B,[C(366),N(1792,1871)]),G(B,[C(367),N(1872,1919)]),G(B,[C(368),N(1920,1983)]),G(B,[C(369),N(2304,2431)]),G(B,[C(370),N(2432,2559)]),G(B,[C(371),N(2560,2687)]),G(B,[C(372),N(2688,2815)]),G(B,[C(373),N(2816,2943)]),G(B,[C(374),N(2944,3071)]),G(B,[C(375),N(3072,3199)]),G(B,[C(376),N(3200,3327)]),G(B,[C(377),N(3328,3455)]),G(B,[C(378),N(3456,3583)]),G(B,[C(379),N(3584,3711)]),G(B,[C(380),N(3712,3839)]),G(B,[C(381),N(3840,4095)]),G(B,[C(382),N(4096,4255)]),
G(B,[C(383),N(4256,4351)]),G(B,[C(384),N(4352,4607)]),G(B,[C(385),N(4608,4991)]),G(B,[C(386),N(4992,5023)]),G(B,[C(387),N(5024,5119)]),G(B,[C(388),N(5120,5759)]),G(B,[C(389),N(5760,5791)]),G(B,[C(390),N(5792,5887)]),G(B,[C(391),N(5888,5919)]),G(B,[C(392),N(5920,5951)]),G(B,[C(393),N(5952,5983)]),G(B,[C(394),N(5984,6015)]),G(B,[C(395),N(6016,6143)]),G(B,[C(396),N(6144,6319)]),G(B,[C(397),N(6400,6479)]),G(B,[C(398),N(6480,6527)]),G(B,[C(399),N(6528,6623)]),G(B,[C(400),N(6624,6655)]),G(B,[C(401),N(6656,6687)]),
G(B,[C(402),N(7424,7551)]),G(B,[C(403),N(7552,7615)]),G(B,[C(404),N(7616,7679)]),G(B,[C(405),N(7680,7935)]),G(B,[C(406),N(7936,8191)]),G(B,[C(407),N(8192,8303)]),G(B,[C(408),N(8304,8351)]),G(B,[C(409),N(8352,8399)]),G(B,[C(410),N(8400,8447)]),G(B,[C(411),N(8448,8527)]),G(B,[C(412),N(8528,8591)]),G(B,[C(413),N(8592,8703)]),G(B,[C(414),N(8704,8959)]),G(B,[C(415),N(8960,9215)]),G(B,[C(416),N(9216,9279)]),G(B,[C(417),N(9280,9311)]),G(B,[C(418),N(9312,9471)]),G(B,[C(419),N(9472,9599)]),G(B,[C(420),N(9600,9631)]),
G(B,[C(421),N(9632,9727)]),G(B,[C(422),N(9728,9983)]),G(B,[C(423),N(9984,10175)]),G(B,[C(424),N(10176,10223)]),G(B,[C(425),N(10224,10239)]),G(B,[C(426),N(10240,10495)]),G(B,[C(427),N(10496,10623)]),G(B,[C(428),N(10624,10751)]),G(B,[C(429),N(10752,11007)]),G(B,[C(430),N(11008,11263)]),G(B,[C(431),N(11264,11359)]),G(B,[C(432),N(11392,11519)]),G(B,[C(433),N(11520,11567)]),G(B,[C(434),N(11568,11647)]),G(B,[C(435),N(11648,11743)]),G(B,[C(436),N(11776,11903)]),G(B,[C(437),N(11904,12031)]),G(B,[C(438),N(12032,12255)]),
G(B,[C(439),N(12272,12287)]),G(B,[C(440),N(12288,12351)]),G(B,[C(441),N(12352,12447)]),G(B,[C(442),N(12448,12543)]),G(B,[C(443),N(12544,12591)]),G(B,[C(444),N(12592,12687)]),G(B,[C(445),N(12688,12703)]),G(B,[C(446),N(12704,12735)]),G(B,[C(447),N(12736,12783)]),G(B,[C(448),N(12784,12799)]),G(B,[C(449),N(12800,13055)]),G(B,[C(450),N(13056,13311)]),G(B,[C(451),N(13312,19893)]),G(B,[C(452),N(19904,19967)]),G(B,[C(453),N(19968,40959)]),G(B,[C(454),N(40960,42127)]),G(B,[C(455),N(42128,42191)]),G(B,[C(456),N(42752,
42783)]),G(B,[C(457),N(43008,43055)]),G(B,[C(458),N(44032,55203)]),G(B,[C(459),N(55296,56191)]),G(B,[C(460),N(56192,56319)]),G(B,[C(461),N(56320,57343)]),G(B,[C(462),N(57344,63743)]),G(B,[C(463),N(63744,64255)]),G(B,[C(464),N(64256,64335)]),G(B,[C(465),N(64336,65023)]),G(B,[C(466),N(65024,65039)]),G(B,[C(467),N(65040,65055)]),G(B,[C(468),N(65056,65071)]),G(B,[C(469),N(65072,65103)]),G(B,[C(470),N(65104,65135)]),G(B,[C(471),N(65136,65279)]),G(B,[C(472),N(65280,65519)]),G(B,[C(473),N(0,1114111)]),G(B,[C(474),
ARZ()]),G(B,[C(475),BI(0,1)]),G(B,[C(476),Ic(62,1)]),G(B,[C(477),BI(1,1)]),G(B,[C(478),BI(2,1)]),G(B,[C(479),BI(3,0)]),G(B,[C(480),BI(4,0)]),G(B,[C(481),BI(5,1)]),G(B,[C(482),Ic(448,1)]),G(B,[C(483),BI(6,1)]),G(B,[C(484),BI(7,0)]),G(B,[C(485),BI(8,1)]),G(B,[C(486),Ic(3584,1)]),G(B,[C(487),BI(9,1)]),G(B,[C(488),BI(10,1)]),G(B,[C(489),BI(11,1)]),G(B,[C(490),Ic(28672,0)]),G(B,[C(491),BI(12,0)]),G(B,[C(492),BI(13,0)]),G(B,[C(493),BI(14,0)]),G(B,[C(494),ASz(983040,1,1)]),G(B,[C(495),BI(15,0)]),G(B,[C(496),BI(16,
1)]),G(B,[C(497),BI(18,1)]),G(B,[C(498),ASM(19,0,1)]),G(B,[C(499),Ic(1643118592,1)]),G(B,[C(500),BI(20,0)]),G(B,[C(501),BI(21,0)]),G(B,[C(502),BI(22,0)]),G(B,[C(503),BI(23,0)]),G(B,[C(504),BI(24,1)]),G(B,[C(505),Ic(2113929216,1)]),G(B,[C(506),BI(25,1)]),G(B,[C(507),BI(26,0)]),G(B,[C(508),BI(27,0)]),G(B,[C(509),BI(28,1)]),G(B,[C(510),BI(29,0)]),G(B,[C(511),BI(30,0)])]);}
function Ml(){BW.call(this);this.ra=0;}
function AOv(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.ra!=Ga(F9(Eh(e,d)))?(-1):2;}
function Ks(){BR.call(this);this.f5=0;}
function AL$(a){var b=new Ks();AF9(b,a);return b;}
function AF9(a,b){BN(a);a.f5=b;}
function AMD(a,b){a.e=b;}
function AGx(a,b,c,d){var e,f;e=b+1|0;if(e>d.u){d.dc=1;return (-1);}f=I(c,b);if(b>d.cD&&Cs(I(c,b-1|0)))return (-1);if(a.f5!=f)return (-1);return a.e.d(e,c,d);}
function AI5(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return Hc(a,b,c,d);e=d.cD;f=d.u;while(true){if(b>=f)return (-1);g=HR(c,a.f5,b);if(g<0)return (-1);if(g>e&&Cs(I(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.d(b,c,d)>=0)break;}return g;}
function AG7(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hm(a,b,c,d,e);f=e.cD;a:{while(true){if(c<b)return (-1);g=G4(d,a.f5,c);if(g<0)break a;if(g<b)break a;if(g>f&&Cs(I(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.d(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AEO(a,b){if(b instanceof Eb)return 0;if(b instanceof DZ)return 0;if(b instanceof Di)return 0;if(b instanceof DC)return 0;if(b instanceof KL)return 0;if(!(b instanceof Ks))return 1;return b.f5!=a.f5?0:1;}
function APe(a,b){return 1;}
function KL(){BR.call(this);this.fB=0;}
function AJu(a){var b=new KL();AMh(b,a);return b;}
function AMh(a,b){BN(a);a.fB=b;}
function AF_(a,b){a.e=b;}
function AEv(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;g=BD(f,e);if(g>0){d.dc=1;return (-1);}h=I(c,b);if(g<0&&CO(I(c,f)))return (-1);if(a.fB!=h)return (-1);return a.e.d(f,c,d);}
function AM0(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hc(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=HR(c,a.fB,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CO(I(c,b))){b=f+2|0;continue;}if(a.e.d(b,c,d)>=0)break;}return f;}
function AOo(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hm(a,b,c,d,e);f=e.u;a:{while(true){if(c<b)return (-1);g=G4(d,a.fB,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CO(I(d,c))){c=g+(-1)|0;continue;}if(a.e.d(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AG1(a,b){if(b instanceof Eb)return 0;if(b instanceof DZ)return 0;if(b instanceof Di)return 0;if(b instanceof DC)return 0;if(b instanceof Ks)return 0;if(!(b instanceof KL))return 1;return b.fB!=a.fB?0:1;}
function AM_(a,b){return 1;}
function DC(){var a=this;BW.call(a);a.jv=0;a.ic=0;a.fu=0;}
function ANT(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.jv==e&&a.ic==d?2:(-1);}
function ALT(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hc(a,b,c,d);e=d.u;while(b<e){b=HR(c,a.jv,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=I(c,b);if(a.ic==f&&a.e.d(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AF$(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hm(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=G4(d,a.ic,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.jv==I(d,f)&&a.e.d(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AND(a,b){if(b instanceof DC)return b.fu!=a.fu?0:1;if(b instanceof Di)return b.i(a.fu);if(b instanceof Eb)return 0;if(!(b instanceof DZ))return 1;return 0;}
var UX=F(Ew);
function AGj(a,b){return b!=10?0:1;}
function ANM(a,b,c){return b!=10?0:1;}
var UY=F(Ew);
function AOH(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AQt(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ACe(){var a=this;B.call(a);a.mz=null;a.jP=null;a.gH=0;a.v$=0;}
function AL4(a){var b=new ACe();AJQ(b,a);return b;}
function AJQ(a,b){var c,d;while(true){c=a.gH;if(b<c)break;a.gH=c<<1|1;}d=c<<1|1;a.gH=d;d=d+1|0;a.mz=By(d);a.jP=By(d);a.v$=b;}
function Ro(a,b,c){var d,e,f,g;d=0;e=a.gH;f=b&e;while(true){g=a.mz.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jP.data[f]=c;}
function SO(a,b){var c,d,e,f;c=a.gH;d=b&c;e=0;while(true){f=a.mz.data[d];if(!f)break;if(f==b)return a.jP.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.v$;}
var Ys=F();
var Kp=F(W);
function ATw(){var a=new Kp();AJo(a);return a;}
function AJo(a){}
function AAC(a){return Cj(BT(C6(),9,13),32);}
var Jr=F(W);
function ASI(){var a=new Jr();APa(a);return a;}
function APa(a){}
function AA_(a){return BT(C6(),48,57);}
var AB9=F(W);
function ATR(){var a=new AB9();AIK(a);return a;}
function AIK(a){}
function AOe(a){return BT(C6(),97,122);}
var ACE=F(W);
function ARL(){var a=new ACE();AJU(a);return a;}
function AJU(a){}
function APg(a){return BT(C6(),65,90);}
var ACH=F(W);
function ATs(){var a=new ACH();AFx(a);return a;}
function AFx(a){}
function AHH(a){return BT(C6(),0,127);}
var Kh=F(W);
function ATB(){var a=new Kh();AGI(a);return a;}
function AGI(a){}
function Zm(a){return BT(BT(C6(),97,122),65,90);}
var K0=F(Kh);
function ASU(){var a=new K0();AJy(a);return a;}
function AJy(a){}
function AAb(a){return BT(Zm(a),48,57);}
var AD0=F(W);
function ASF(){var a=new AD0();ALD(a);return a;}
function ALD(a){}
function AI4(a){return BT(BT(BT(C6(),33,64),91,96),123,126);}
var L9=F(K0);
function ARV(){var a=new L9();ANo(a);return a;}
function ANo(a){}
function X2(a){return BT(BT(BT(AAb(a),33,64),91,96),123,126);}
var AAP=F(L9);
function ARS(){var a=new AAP();AO4(a);return a;}
function AO4(a){}
function ALi(a){return Cj(X2(a),32);}
var AA5=F(W);
function AR0(){var a=new AA5();AOs(a);return a;}
function AOs(a){}
function AGU(a){return Cj(Cj(C6(),32),9);}
var ZG=F(W);
function ASd(){var a=new ZG();AQk(a);return a;}
function AQk(a){}
function ALf(a){return Cj(BT(C6(),0,31),127);}
var Zu=F(W);
function ARY(){var a=new Zu();AFP(a);return a;}
function AFP(a){}
function AQy(a){return BT(BT(BT(C6(),48,57),97,102),65,70);}
var ACK=F(W);
function AS_(){var a=new ACK();AFl(a);return a;}
function AFl(a){}
function AL2(a){var b;b=new SY;b.xE=a;Bq(b);b.I=1;return b;}
var AD8=F(W);
function ARF(){var a=new AD8();ANI(a);return a;}
function ANI(a){}
function AEo(a){var b;b=new MA;b.xM=a;Bq(b);b.I=1;return b;}
var ACf=F(W);
function ATx(){var a=new ACf();AFA(a);return a;}
function AFA(a){}
function AJv(a){var b;b=new R2;b.xo=a;Bq(b);return b;}
var AB0=F(W);
function ASc(){var a=new AB0();ALg(a);return a;}
function ALg(a){}
function ANZ(a){var b;b=new R1;b.xf=a;Bq(b);return b;}
var ACY=F(W);
function ASS(){var a=new ACY();AGE(a);return a;}
function AGE(a){}
function AGR(a){var b;b=new Wm;b.yv=a;Bq(b);Ht(b.G,0,2048);b.I=1;return b;}
var YI=F(W);
function ASa(){var a=new YI();AGf(a);return a;}
function AGf(a){}
function AHg(a){var b;b=new OZ;b.x0=a;Bq(b);b.I=1;return b;}
var Yl=F(W);
function AST(){var a=new Yl();AKW(a);return a;}
function AKW(a){}
function AQq(a){var b;b=new Oa;b.yV=a;Bq(b);b.I=1;return b;}
var ACm=F(W);
function AR2(){var a=new ACm();ALE(a);return a;}
function ALE(a){}
function AEf(a){var b;b=new QX;b.xG=a;Bq(b);return b;}
var ACw=F(W);
function ATF(){var a=new ACw();AJf(a);return a;}
function AJf(a){}
function AKn(a){var b;b=new Mt;b.wB=a;Bq(b);b.I=1;return b;}
var Z4=F(W);
function AR6(){var a=new Z4();AES(a);return a;}
function AES(a){}
function AHr(a){var b;b=new My;b.x3=a;Bq(b);b.I=1;return b;}
var AA$=F(W);
function ASZ(){var a=new AA$();AGk(a);return a;}
function AGk(a){}
function AIA(a){var b;b=new NH;b.ys=a;Bq(b);b.I=1;return b;}
var ADG=F(W);
function ATr(){var a=new ADG();AKs(a);return a;}
function AKs(a){}
function AKp(a){var b;b=new Po;b.yH=a;Bq(b);b.I=1;return b;}
var ACt=F(W);
function ATp(){var a=new ACt();ALV(a);return a;}
function ALV(a){}
function APD(a){var b;b=new PB;b.xr=a;Bq(b);return b;}
var AAs=F(W);
function ATC(){var a=new AAs();AGg(a);return a;}
function AGg(a){}
function ANf(a){var b;b=new Tr;b.x_=a;Bq(b);return b;}
var Z2=F(W);
function AR1(){var a=new Z2();AN0(a);return a;}
function AN0(a){}
function ALU(a){var b;b=new SG;b.wF=a;Bq(b);b.I=1;return b;}
var AD4=F(W);
function ATe(){var a=new AD4();AI_(a);return a;}
function AI_(a){}
function AN9(a){var b;b=new MH;b.y4=a;Bq(b);b.I=1;return b;}
var IT=F(W);
function AS3(){var a=new IT();AHy(a);return a;}
function AHy(a){}
function AA7(a){return Cj(BT(BT(BT(C6(),97,122),65,90),48,57),95);}
var AC3=F(IT);
function ARW(){var a=new AC3();AJi(a);return a;}
function AJi(a){}
function ALH(a){var b;b=Ef(AA7(a),1);b.I=1;return b;}
var AAT=F(Kp);
function ARB(){var a=new AAT();AP9(a);return a;}
function AP9(a){}
function AFt(a){var b;b=Ef(AAC(a),1);b.I=1;return b;}
var ZX=F(Jr);
function ASl(){var a=new ZX();AKc(a);return a;}
function AKc(a){}
function AIR(a){var b;b=Ef(AA_(a),1);b.I=1;return b;}
function Zz(){var a=this;W.call(a);a.qZ=0;a.rK=0;}
function N(a,b){var c=new Zz();AQn(c,a,b);return c;}
function AQn(a,b,c){a.qZ=b;a.rK=c;}
function AKD(a){return BT(C6(),a.qZ,a.rK);}
var ZT=F(W);
function ARZ(){var a=new ZT();AQH(a);return a;}
function AQH(a){}
function AQf(a){return BT(BT(C6(),65279,65279),65520,65533);}
function AAG(){var a=this;W.call(a);a.l4=0;a.jB=0;a.po=0;}
function BI(a,b){var c=new AAG();AGy(c,a,b);return c;}
function ASM(a,b,c){var d=new AAG();AQp(d,a,b,c);return d;}
function AGy(a,b,c){a.jB=c;a.l4=b;}
function AQp(a,b,c,d){a.po=d;a.jB=c;a.l4=b;}
function AH8(a){var b;b=ATN(a.l4);if(a.po)Ht(b.G,0,2048);b.I=a.jB;return b;}
function AAQ(){var a=this;W.call(a);a.l2=0;a.jS=0;a.nF=0;}
function Ic(a,b){var c=new AAQ();AHs(c,a,b);return c;}
function ASz(a,b,c){var d=new AAQ();AEh(d,a,b,c);return d;}
function AHs(a,b,c){a.jS=c;a.l2=b;}
function AEh(a,b,c,d){a.nF=d;a.jS=c;a.l2=b;}
function AEg(a){var b;b=new RS;ABK(b,a.l2);if(a.nF)Ht(b.G,0,2048);b.I=a.jS;return b;}
var ZC=F();
var Y9=F();
function AAp(b){var c,d,e,f,g,h,i;c=AOh(E4(b));d=Jf(c);e=By(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+Jf(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=MX(c);h=h+1|0;}return e;}
function J1(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Nb(){var a=this;B.call(a);a.pV=0;a.r8=0;a.qb=null;}
function AH6(a,b,c){var d=new Nb();AO2(d,a,b,c);return d;}
function AO2(a,b,c,d){a.pV=b;a.r8=c;a.qb=d;}
function ACp(){var a=this;B.call(a);a.oD=null;a.q8=0;}
function AOh(a){var b=new ACp();AG4(b,a);return b;}
function AG4(a,b){a.oD=b;}
var AAo=F();
function Jf(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.oD.data;f=b.q8;b.q8=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+U(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function MX(b){var c,d;c=Jf(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var T$=F(EE);
function W4(a){KT(a);return a.fO;}
var Rh=F(EE);
function Zi(){B.call(this);this.Kr=null;}
function US(){var a=this;B.call(a);a.y6=null;a.iX=null;}
function AHM(a,b){var c;c=a.iX;b=b;a.iX=OV(!c.mt&&!b.d2?0:1);return 1;}
function VT(){var a=this;Q.call(a);a.n9=null;a.yA=null;}
function AHO(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b6^C$(a.n9,c):0;}
function VR(){var a=this;Q.call(a);a.uo=null;a.u_=null;a.yd=null;}
function AEF(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b6^C$(a.uo,c):0;return a.u_.i(b)&&!d?1:0;}
function Ov(){var a=this;Q.call(a);a.ij=null;a.wI=null;}
function AKt(a,b){return a.X^C$(a.ij,b);}
function AIF(a){var b,c,d;b=new R;T(b);c=GP(a.ij,0);while(c>=0){HV(b,F3(c));BX(b,124);c=GP(a.ij,c+1|0);}d=b.H;if(d>0)VJ(b,d-1|0);return S(b);}
function OC(){var a=this;Q.call(a);a.rr=null;a.xK=null;}
function ANX(a,b){return a.rr.i(b);}
function OA(){var a=this;Q.call(a);a.jH=0;a.o7=null;a.kF=null;}
function AOu(a,b){return !(a.jH^C$(a.kF.C,b))&&!(a.jH^a.kF.dH^a.o7.i(b))?0:1;}
function OB(){var a=this;Q.call(a);a.jQ=0;a.uL=null;a.lF=null;}
function AKY(a,b){return !(a.jQ^C$(a.lF.C,b))&&!(a.jQ^a.lF.dH^a.uL.i(b))?1:0;}
function OF(){var a=this;Q.call(a);a.vH=0;a.uV=null;a.uG=null;a.w0=null;}
function AHk(a,b){return a.vH^(!a.uV.i(b)&&!a.uG.i(b)?0:1);}
function OG(){var a=this;Q.call(a);a.rG=0;a.re=null;a.qw=null;a.y1=null;}
function AD$(a,b){return a.rG^(!a.re.i(b)&&!a.qw.i(b)?0:1)?0:1;}
function OD(){var a=this;Q.call(a);a.qf=null;a.y3=null;}
function AIL(a,b){return CL(a.qf,b);}
function OE(){var a=this;Q.call(a);a.u7=null;a.xb=null;}
function AK0(a,b){return CL(a.u7,b)?0:1;}
function OH(){var a=this;Q.call(a);a.r0=null;a.ri=0;a.tV=null;}
function APQ(a,b){return !CL(a.r0,b)&&!(a.ri^C$(a.tV.C,b))?0:1;}
function OI(){var a=this;Q.call(a);a.sF=null;a.sY=0;a.sl=null;}
function AGK(a,b){return !CL(a.sF,b)&&!(a.sY^C$(a.sl.C,b))?1:0;}
function Ou(){var a=this;Q.call(a);a.tJ=0;a.uK=null;a.vm=null;a.wN=null;}
function ARy(a,b){return !(a.tJ^a.uK.i(b))&&!CL(a.vm,b)?0:1;}
function O$(){var a=this;Q.call(a);a.vj=0;a.m8=null;a.nL=null;a.w9=null;}
function AIP(a,b){return !(a.vj^a.m8.i(b))&&!CL(a.nL,b)?1:0;}
function Os(){var a=this;Q.call(a);a.pH=null;a.xd=null;}
function AGJ(a,b){return CL(a.pH,b);}
function Ot(){var a=this;Q.call(a);a.pR=null;a.yX=null;}
function AIn(a,b){return CL(a.pR,b)?0:1;}
function Oy(){var a=this;Q.call(a);a.vD=null;a.sw=0;a.wv=null;}
function AJT(a,b){return CL(a.vD,b)&&a.sw^C$(a.wv.C,b)?1:0;}
function Or(){var a=this;Q.call(a);a.tm=null;a.rI=0;a.su=null;}
function APn(a,b){return CL(a.tm,b)&&a.rI^C$(a.su.C,b)?0:1;}
function Ow(){var a=this;Q.call(a);a.tZ=0;a.n3=null;a.rD=null;a.wZ=null;}
function AFL(a,b){return a.tZ^a.n3.i(b)&&CL(a.rD,b)?1:0;}
function Ox(){var a=this;Q.call(a);a.te=0;a.mX=null;a.tH=null;a.xg=null;}
function AM$(a,b){return a.te^a.mX.i(b)&&CL(a.tH,b)?0:1;}
var Fy=F(Cr);
var AXj=null;var AXi=null;var AXN=null;function SJ(){SJ=Bn(Fy);ARf();}
function AOt(a,b){var c=new Fy();AAx(c,a,b);return c;}
function AAx(a,b,c){SJ();Dt(a,b,c);}
function ARf(){var b;AXj=AOt(C(512),0);b=AOt(C(513),1);AXi=b;AXN=G(Fy,[AXj,b]);}
function XO(){B.call(this);this.p6=null;}
var Lt=F(0);
function SF(){var a=this;B.call(a);a.w5=null;a.uO=null;a.iF=null;a.cl=null;a.ik=0;a.kw=0;}
function Mw(a,b){var c,d,e;c=H(a.iF);if(b>=0&&b<=c){Xa(a.cl,null,(-1),(-1));d=a.cl;d.i_=1;d.d7=b;c=d.hl;if(c<0)c=b;d.hl=c;b=a.uO.b9(b,a.iF,d);if(b==(-1))a.cl.dc=1;if(b>=0){d=a.cl;if(d.iG){e=d.dz.data;if(e[0]==(-1)){c=d.d7;e[0]=c;e[1]=c;}d.hl=Iv(d);return 1;}}a.cl.d7=(-1);return 0;}d=new BV;Bp(d,D8(b));L(d);}
function ADF(a){return O6(a.cl,0);}
function ZY(a){return R4(a.cl,0);}
function Yz(a){return a.cl.iM;}
var Tn=F();
var AXf=null;function AS8(){AS8=Bn(Tn);AE7();}
function AE7(){var b,c;SJ();b=By((AXN.go()).data.length);c=b.data;AXf=b;c[AXj.gf]=1;c[AXi.gf]=2;}
function SP(){B.call(this);this.vB=null;}
function ANH(a,b){var c,d,e;F8(a.vB);c=AWb;d=Zq(C(514));if(!K_()){b=new Bt;Bp(b,C(305));Ly(d,b);}else{e=$rt_globals.navigator.clipboard;b=M1(E4(b));b=e.writeText(b);e=new Uc;e.x7=c;c=AD2(d);b.then(Bm(e,"f"),Bm(c,"f"));}}
function Xj(){B.call(this);this.mQ=null;}
function Ly(a,b){var c,d;c=a.mQ;d=b.lU;b=new R;T(b);J(J(b,c),d);$rt_globals.console.info($rt_ustr(S(b)));}
function Jb(){var a=this;B.call(a);a.gQ=null;a.yN=null;}
var AAO=F();
var MT=F(F5);
function AIa(a,b,c,d){var e,f,g;e=0;f=d.u;a:{while(true){if(b>f){b=e;break a;}g=Fh(d,a.S);Db(d,a.S,b);e=a.cL.d(b,c,d);if(e>=0)break;Db(d,a.S,g);b=b+1|0;}}return b;}
function ARo(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fh(e,a.S);Db(e,a.S,c);f=a.cL.d(c,d,e);if(f>=0)break;Db(e,a.S,g);c=c+(-1)|0;}}return c;}
function AGv(a){return null;}
var L1=F(Bt);
function N1(){var a=this;B.call(a);a.q5=null;a.q4=null;}
function N2(){B.call(this);this.ub=null;}
function Rx(){B.call(this);this.tc=null;}
function AGs(a,b){Iz(a.tc,b);}
var YF=F();
function Ze(b){var c,d,e,f,g,h,i,j;c=AFZ();d=Cb(b);Bi(c,d);e=0;f=0;while(f<d){g=BK(b,f);h=G0(g);Bi(c,h);i=0;while(i<h){j=KA(g,i);F$(c,e,Ls(j));e=e+Ls(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return P9(c);}
function YM(b){var c,d,e,f,g,h,i,j,k;c=V(b);d=P(HC,c);e=d.data;f=0;while(f<c){a:{g=V(b);if(g!=(-1)){h=V(b);i=V(b);if(i==(-1)){j=new HC;j.fH=h;e[g]=j;}else{j=new HC;j.fH=h;j.lk=By(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].lk.data[k]=V(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function P7(){B.call(this);this.rh=null;}
function AQ6(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.rh;d=CF(c[0]);c=Lq(d);e=new U0;d=YM(c);f=YM(c);g=V(c);h=P(Lp,g);i=h.data;j=0;while(j<g){k=V(c);l=V(c);m=V(c);n=V(c);o=V(c);p=new Lp;p.hq=k;p.mj=l;p.hp=m;p.mi=n;p.j8=o;i[j]=p;j=j+1|0;}e.yL=d;e.vf=f;e.fA=h;b.fs=e;Ji(b.x,d);Ji(b.w,b.fs.vf);}
var Y7=F(0);
function Q1(){B.call(this);this.nA=null;}
function AEm(a,b){var c;c=a.nA;b=Ce(b);C8(c.p6,b);}
function Se(){B.call(this);this.q2=null;}
function ALj(a,b){b.ge=a.q2.cJ;}
function Sc(){B.call(this);this.un=null;}
function ANs(a,b){b.f0=a.un.cJ.b2;}
function Pd(){var a=this;B.call(a);a.oP=null;a.oN=null;}
function TD(){var a=this;B.call(a);a.ry=null;a.rx=null;a.rw=null;}
function AMW(a,b){VS(a.ry,a.rx,b,a.rw);}
function Vy(){var a=this;B.call(a);a.si=null;a.sj=null;}
function AG_(a,b){var c,d,e,f,g,h,i,j,k;c=b.data;d=a.si;e=a.sj;f=BA();g=c.length;h=0;while(h<g){i=c[h];j=new Lm;k=i.fX;Sj(j,k.e5,k.fC);Bw(f,j);h=h+1|0;}if(DG(f))Ka(d.eE,e,d);else{c=D2(d,e);c=Gw(d.c.f,c.U,c.bb);Rp(d.eE,e,b,d,Kw(d,c));}}
function UQ(){var a=this;B.call(a);a.dz=null;a.jk=null;a.k5=null;a.k$=null;a.pa=0;a.iG=0;a.cD=0;a.u=0;a.d7=0;a.iM=0;a.e8=0;a.dc=0;a.yn=0;a.hl=0;a.i_=0;}
function BH(a,b,c){a.jk.data[b]=c;}
function C5(a,b){return a.jk.data[b];}
function Iv(a){return R4(a,0);}
function R4(a,b){RQ(a,b);return a.dz.data[(b*2|0)+1|0];}
function Db(a,b,c){a.dz.data[b*2|0]=c;}
function I9(a,b,c){a.dz.data[(b*2|0)+1|0]=c;}
function Fh(a,b){return a.dz.data[b*2|0];}
function H0(a,b){return a.dz.data[(b*2|0)+1|0];}
function AB_(a){return O6(a,0);}
function O6(a,b){RQ(a,b);return a.dz.data[b*2|0];}
function MG(a,b){return a.k5.data[b];}
function DW(a,b,c){a.k5.data[b]=c;}
function RQ(a,b){var c;if(!a.iG){c=new Dl;X(c);L(c);}if(b>=0&&b<a.pa)return;c=new BV;Bp(c,D8(b));L(c);}
function Xa(a,b,c,d){a.iG=0;a.i_=2;G6(a.dz,(-1));G6(a.jk,(-1));if(b!==null)a.k$=b;if(c>=0){a.cD=c;a.u=d;}a.d7=a.cD;}
function AAd(a){return a.i_;}
function WM(){B.call(this);this.n_=null;}
function AHb(a,b){var c,d;c=a.n_;d=new Bt;Bp(d,$rt_str(b.message));Ly(c,d);}
function Oo(){B.call(this);this.ou=null;}
function AGQ(a,b){b.ge=a.ou;}
function Mu(){B.call(this);this.ws=null;}
function AI3(a){Dv(a.ws);}
function M5(){var a=this;B.call(a);a.pM=null;a.pL=null;}
function AIY(a){var b,c;b=a.pM;c=a.pL;b.gy.tN(c);}
function NI(){var a=this;B.call(a);a.nG=null;a.nH=0;a.nI=0;a.nJ=null;a.nC=0;a.nE=0;}
function ALG(a,b){var c,d,e,f,g,h,i,j;c=a.nG;d=a.nH;e=a.nI;f=a.nJ;g=a.nC;h=a.nE;i=Cl(c.bn,5.0);d=Ba((c.bn.cK.a-d|0)-i|0,Z((i-d|0)-c.N.p.a|0,b.n.a));j=Ba((c.bn.cK.b-e|0)-i|0,Z((i-e|0)-c.N.p.b|0,b.n.b));Bg(f,d+g|0,j+h|0);KD(c,f,c.P.p);}
function Vx(){var a=this;B.call(a);a.tP=null;a.tR=null;a.tQ=null;a.tL=0;a.tK=0;a.tO=0;a.tM=0;a.t3=0;a.t2=0;a.t4=0;a.uv=0;}
function AIC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.tP;d=a.tR;e=a.tQ;f=a.tL;g=a.tK;h=a.tO;i=a.tM;j=a.t3;k=a.t2;l=a.t4;m=a.uv;n=Cl(c.bn,5.0);o=c.P.sx();Cw(d,c.P.p);Cw(e,c.P.K);switch(f){case -1:f=Ba(h+(b.n.a-g|0)|0,c.bn.cK.a-n|0);g=o.a;h=h+i|0;f=Z(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Z((i+b.n.a|0)-g|0,Z(o.a,n-c.N.K.a|0));}b:{switch(j){case -1:f=Z(n,Ba(l+(b.n.b-k|0)|0,(c.bn.cK.b+c.N.p.b|0)-n|0));g=o.b;h=l+m|0;f=Z(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Z((m+b.n.b|0)-k|0,o.b);}KD(c,e,d);}
function N4(){var a=this;B.call(a);a.v6=null;a.v7=0.0;}
function AEL(a){var b,c;b=a.v6;c=a.v7;b.gy.lj(c);}
function SY(){Q.call(this);this.xE=null;}
function AP0(a,b){return Ch(b)!=2?0:1;}
function MA(){Q.call(this);this.xM=null;}
function AFr(a,b){return Ch(b)!=1?0:1;}
function R2(){Q.call(this);this.xo=null;}
function AE$(a,b){return Rg(b);}
function R1(){Q.call(this);this.xf=null;}
function AH7(a,b){return 0;}
function Wm(){Q.call(this);this.yv=null;}
function AJH(a,b){return !Ch(b)?0:1;}
function OZ(){Q.call(this);this.x0=null;}
function AP4(a,b){return Ch(b)!=9?0:1;}
function Oa(){Q.call(this);this.yV=null;}
function AMy(a,b){return FY(b);}
function QX(){Q.call(this);this.xG=null;}
function AN2(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Mt(){Q.call(this);this.wB=null;}
function AQ8(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FY(b);}return b;}
function My(){Q.call(this);this.x3=null;}
function AG6(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FY(b);}return b;}
function NH(){Q.call(this);this.ys=null;}
function AQa(a,b){a:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Po(){Q.call(this);this.yH=null;}
function ALc(a,b){return I0(b);}
function PB(){Q.call(this);this.xr=null;}
function ANt(a,b){return PC(b);}
function Tr(){Q.call(this);this.x_=null;}
function APR(a,b){return Ch(b)!=3?0:1;}
function SG(){Q.call(this);this.wF=null;}
function AQJ(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=FY(b);}return b;}
function MH(){Q.call(this);this.y4=null;}
function AGS(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=FY(b);}return b;}
function LQ(){Q.call(this);this.lu=0;}
function ATN(a){var b=new LQ();ABK(b,a);return b;}
function ABK(a,b){Bq(a);a.lu=b;}
function AMB(a,b){return a.X^(a.lu!=Ch(b&65535)?0:1);}
var RS=F(LQ);
function AOV(a,b){return a.X^(!(a.lu>>Ch(b&65535)&1)?0:1);}
function WG(){B.call(this);this.nV=null;}
function AIy(a,b){var c,d,e,f;c=a.nV;b=Ce(b);d=c.q5;c=c.q4;e=new W5;f=new Lc;c=ER(c);Yo(f,null,null,c,null);c=null;Yr(e,AF3(b),c,f);Gh(d,e);}
function WH(){var a=this;B.call(a);a.py=null;a.pz=null;}
function AFK(a,b){var c,d;c=a.py;d=a.pz;b.text().then(Bm(c,"f"),Bm(d,"f"));}
var Ug=F(0);
var AXg=null;function ASA(){ASA=Bn(Ug);AQG();}
function AQG(){AXg=O(C(266));}
function Ss(){B.call(this);this.qJ=null;}
function AIq(a,b){b.f0=a.qJ;}
function RB(){B.call(this);this.ut=null;}
function AOz(a){var b,c,d,e,f,g,h,i;b=a.ut;c=b.oP;b=b.oN;d=b.g9;b=b.fX;e=c.uY;c=c.uZ;d=J$(d);if(b===null)b=void 0;else{f=b.iu+1|0;g=b.jd+1|0;h=b.fC+1|0;i=b.e5+1|0;b=AEn(f,g,h,i);}c.openCodeEditor(e,d,b);}
function Uc(){B.call(this);this.x7=null;}
function AQL(a,b){}
function ACQ(){var a=this;B.call(a);a.yF=0;a.xQ=0;a.o_=null;}
function ATl(a,b,c){var d=new ACQ();AIi(d,a,b,c);return d;}
function AIi(a,b,c,d){a.yF=b;a.xQ=c;a.o_=d;}
function T8(){B.call(this);this.pS=null;}
function AKG(a,b){var c;c=a.pS;b=$rt_str(b.message);Cn(c.ub,b);}
var Yn=F();
function AKw(b){return {includeDeclaration:b};}
function PU(){var a=this;B.call(a);a.qj=null;a.qi=null;}
function AOn(a,b){V9(b,a.qj,a.qi);}
var ACi=F(0);
function ADN(b){return !b?G(Bv,[C(57),C(217),C(515)]):G(Bv,[C(57),C(217),C(515),C(516)]);}
function AAV(){var a=this;B.call(a);a.DP=null;a.DN=null;a.DS=0.0;}
function Vt(){var a=this;B.call(a);a.jb=null;a.hd=0;}
function NL(){B.call(this);this.sV=null;}
function AE6(a,b){return NJ(I(a.sV,b.bd));}
var YT=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bu",AT9(AK9),"cP",AT8(AF7)],AAy,0,B,[],3,3,0,0,0,MW,0,B,[],3,3,0,0,0,Mm,0,B,[],3,3,0,0,0,VY,0,B,[MW,Mm],0,3,0,0,0,Zt,0,B,[],4,0,0,0,0,Y$,0,B,[],4,3,0,0,0,F6,0,B,[],0,3,0,0,0,DO,0,F6,[],0,3,0,0,0,Bt,0,DO,[],0,3,0,0,0,AAR,0,Bt,[],0,3,0,0,0,Cy,0,B,[],3,3,0,0,0,Cq,0,B,[],3,3,0,0,0,Ig,0,B,[],3,3,0,0,0,Bv,"String",1,B,[Cy,Cq,Ig],0,3,0,F7,["cP",AT8(AF5),"bu",AT9(BE),"lY",AT8(Gf),"jz",AT9(AH$)],F1,0,F6,[],0,3,0,0,0,GS,0,F1,[],0,3,0,0,0,AAt,0,GS,[],0,3,0,0,0,Eq,0,B,[Cy],1,3,0,0,0,FQ,
0,Eq,[Cq],0,3,0,0,["bu",AT9(AQT),"jz",AT9(AKl)],FU,0,B,[Cy,Ig],0,0,0,0,["hz",AT9(I8),"cP",AT8(S)],Hs,0,B,[],3,3,0,0,0,R,0,FU,[Hs],0,3,0,0,["lI",AUa(AKh),"kJ",AT_(AHe),"cP",AT8(Jd),"hz",AT9(AKo),"me",AT$(AKT)],Fm,0,GS,[],0,3,0,0,0,ABN,0,Fm,[],0,3,0,0,0,AAi,0,Fm,[],0,3,0,0,0,Bo,0,B,[],3,3,0,0,0,RN,0,B,[Bo],3,3,0,0,0,Ua,0,B,[RN],0,3,0,0,["ye",AT9(AIw)],ABn,0,B,[],0,3,0,0,0,OK,0,B,[Bo],3,3,0,0,0,T_,0,B,[OK],0,3,0,0,["A3",AT_(AK5)],AAJ,0,B,[],0,3,0,0,0,SZ,0,B,[Bo],3,3,0,0,0,TS,0,B,[SZ],0,3,0,0,["ye",AT9(AKi)],ZL,
0,B,[],0,3,0,0,0,KQ,0,B,[],4,3,0,0,0,ACz,0,B,[],4,3,0,0,0,GM,0,B,[],3,3,0,0,0,SX,0,B,[GM],0,3,0,0,0,BV,0,Bt,[],0,3,0,0,0,ABs,0,B,[],4,3,0,0,0,Gb,0,Bt,[],0,3,0,0,0,Ia,0,Bt,[],0,3,0,0,0,CR,0,B,[Cq],0,3,0,0,0,GN,0,BV,[],0,3,0,0,0,H3,0,B,[Bo],3,3,0,0,0,Rw,0,B,[H3],3,3,0,0,0,Px,0,B,[Rw],0,3,0,0,["Hl",AT9(AOE),"HI",AT$(ANw),"Ea",AT9(APY),"FH",AT9(AHo),"Dk",AT8(ANP),"Ky",AT9(AIH),"zj",AT8(AID),"IA",AT8(AJV),"KV",AT9(AHm),"JD",AT$(AM5),"zb",AT$(APx),"Fb",AT8(AQA),"CQ",AT9(AFp),"B$",AT9(AHT),"EM",AT8(AKM),"HK",AT9(AGM),
"Au",AT9(ANq),"DD",AT9(AIu),"zJ",AT9(APu),"BB",AT$(AQM),"GS",AT$(AMw),"EW",AT9(AGY),"Aw",AT9(AQm)],Qw,0,B,[H3],3,3,0,0,0]);
$rt_metadata([EU,0,B,[Qw],0,3,0,0,["DA",AT8(ARc),"A9",AT8(AKb),"IF",AT8(ALP),"A_",AT9(AQ3),"Fe",AT8(AMp),"D7",AT9(AEP)],St,0,B,[Bo],3,3,0,0,0,VI,0,B,[St],0,3,0,0,["KW",AT8(AP8),"Fj",AT8(AMJ),"BN",AT9(ALB),"Jq",AT9(AGW),"z3",AT9(AHZ),"Fl",AT9(AOZ),"GI",AT9(ALz),"GQ",AT8(AIQ),"zY",AT9(AHF)],Tm,0,B,[],3,3,0,0,0,CU,0,B,[],3,3,0,0,0,OY,0,B,[],3,0,0,0,0,H5,0,B,[Tm,CU,OY],1,3,0,0,["eY",AT8(Ip)],RE,0,H5,[],0,3,0,0,0,AAE,0,B,[Bo],1,3,0,0,0,Ho,0,B,[Bo],3,3,0,0,0,Uh,0,B,[Ho],0,3,0,0,["mv",AT$(AIl)],ABt,0,B,[],3,3,0,0,
0,Z0,0,B,[],0,3,0,0,0,W5,0,B,[],0,3,0,0,0,Yt,0,B,[Bo],1,3,0,0,0,XF,0,B,[Ho],0,3,0,0,["mv",AT$(AIe)],AD6,0,B,[],4,3,0,0,0,DK,0,B,[],3,3,0,0,0,Nu,0,B,[DK],0,3,0,0,["gp",AT9(APS)],Yd,0,B,[],3,3,0,0,0,ACT,0,B,[Bo],1,3,0,0,0,Lc,0,B,[],0,3,0,0,["bu",AT9(AGH)],Re,0,B,[],0,3,0,0,0,Mf,0,B,[Bo],3,3,0,0,0,SK,0,B,[Mf],3,3,0,0,0,D6,0,B,[Bo],3,3,0,0,0,YA,0,B,[Bo,SK,D6],1,3,0,0,["HH",AT8(ALX),"Iw",AT9(AO3),"Ka",AT9(AOL),"Cl",AT9(AGN),"Hz",AT9(AEx),"z7",AT8(AG8),"IN",AT$(AOW),"IU",AT_(AJ2),"JJ",AT8(AFq),"Kk",AT8(AM6),"Gs",
AT9(API),"Dz",AT8(ALt),"KO",AT9(AJw),"Fy",AT8(ALZ),"Ew",AT8(ARm),"Kx",AT8(AKH),"z0",AT9(AFg),"I2",AT8(AQU),"GY",AT$(AJt),"De",AT$(ALk),"Iy",AT$(AQl),"HX",AT8(AEA),"Jt",AT8(AJc),"JZ",AT9(AHj),"F6",AT9(AIm),"Ce",AT$(AJL),"EX",AT8(AKN),"Jy",AT9(AFs),"Ar",AT8(AIk),"KB",AT8(ANx),"BZ",AT9(AEj),"Fw",AT9(APy),"Kn",AT9(AFW),"Eb",AT8(APB),"CU",AT$(AF8),"Il",AT9(ANk),"EH",AT8(AN7),"AW",AT$(AMu),"A1",AT$(AL8),"D9",AT8(APs),"J2",AT9(AQZ),"C6",AT_(AL_),"BT",AT8(AHa),"Di",AT$(AGp),"Dq",AT8(AE1),"H_",AT8(AQO),"Gp",AT8(AMt),
"y_",AT8(AEY),"Hw",AT$(AMv),"As",AT9(AGZ),"F4",AT9(AIG),"BG",AT8(AOd)],ACD,0,B,[],3,3,0,0,0,YK,0,B,[],0,3,0,0,0,AC$,0,B,[],0,3,0,0,0,TX,0,B,[],0,3,0,0,0,VK,0,B,[],3,3,0,0,["el",AT9(AEb)],FF,0,B,[VK],3,3,0,0,["el",AT9(AEb),"lw",AT9(AJ4)],Ey,0,B,[FF],1,3,0,0,["el",AT9(AEb),"lw",AT9(AJ4),"dP",AT8(DG),"nM",AT9(AOy)],J7,0,B,[FF],3,3,0,0,["el",AT9(AEb),"lw",AT9(AJ4)],IG,0,B,[J7],3,3,0,0,["el",AT9(AEb),"lw",AT9(AJ4)],Em,0,Ey,[IG],1,3,0,0,["el",AT9(AEb),"lw",AT9(AJ4),"sH",AT9(ANR),"bY",AT8(BO),"tr",AT$(AMX),"mB",AT$(APp),
"bu",AT9(ALL)],DP,0,B,[],3,3,0,0,0,KP,0,B,[],3,3,0,0,0,YO,0,Em,[DP,Cy,KP],0,3,0,0,["lw",AT9(AJ4),"lv",AT9(Bs),"cB",AT8(AMF),"sH",AT9(Bw),"mB",AT$(RF),"mp",AT9(Fj),"nM",AT9(Vq),"hT",AT8(FH),"tr",AT$(Zd),"el",AT9(DY)],Kt,0,B,[],3,3,0,0,0,DB,0,B,[Kt],1,3,0,0,0,JY,0,DB,[DP,Cy],0,3,0,0,0,RC,0,B,[],0,3,0,0,0,Pn,0,B,[D6],3,3,0,0,0,RA,0,B,[D6],3,3,0,0,0,Rk,0,B,[D6],3,3,0,0,0,Tj,0,B,[D6],3,3,0,0,0,WN,0,B,[D6],3,3,0,0,0,Ul,0,B,[D6,Pn,RA,Rk,Tj,WN],3,3,0,0,0]);
$rt_metadata([Zp,0,B,[Bo,Ul],1,3,0,0,["G_",AT$(AMz),"JH",AT$(AKk),"B1",AT_(AJe),"C2",AT9(AFy),"GR",AT_(AHp)],AAD,0,B,[],4,3,0,0,0,Gz,0,B,[Cq],0,3,0,0,0,Kq,0,B,[],0,3,0,0,0,C7,0,B,[],0,3,0,0,0,Pu,0,B,[],0,3,0,0,0,BF,0,Bt,[],0,3,0,0,0,XS,0,Bt,[],0,3,0,0,0,B$,0,B,[],0,3,0,0,0,Kn,0,JY,[],0,3,0,0,0,RL,0,B,[],0,3,0,0,0,ADC,0,B,[Cq],0,3,0,0,["bu",AT9(AOT),"jz",AT9(AGc)],VN,0,B,[GM],0,3,0,0,["vI",AT$(AKO)],QZ,0,B,[],0,3,0,0,["bu",AT9(AF1)],GX,0,B,[],3,3,0,0,0,F4,0,B,[GX,DP],0,0,0,0,["bu",AT9(AGV)],Gc,0,F4,[],0,0,0,
0,0,WS,0,B,[],0,3,0,0,0,Kl,0,B,[],3,3,0,0,0,Pr,0,B,[Kl],0,3,0,0,0,EN,0,B,[],0,3,0,0,0,Kv,0,EN,[],0,3,0,0,0,AC0,0,B,[],1,3,0,0,0,AAz,0,B,[Bo],1,3,0,0,0,AA1,0,B,[Bo],1,3,0,0,0,FT,0,EN,[],0,3,0,0,0,JA,0,EN,[],0,3,0,0,0,Sr,0,B,[Ho],0,3,0,0,["mv",AT$(AO9)],Z9,0,B,[Bo],1,3,0,0,0,G$,0,B,[],3,3,0,0,["wo",AT8(AMd),"tx",AT8(AIb)],ET,0,B,[],3,3,0,0,0,Jv,0,B,[],3,3,0,0,0,Qc,0,B,[],3,0,0,0,0,Z7,0,B,[G$,ET,Jv,Qc],0,3,0,0,["tx",AT8(AH2),"wo",AT8(AE5),"vM",AT8(Nt),"wa",AT8(Xy),"tN",AT9(Oh),"lj",AT9(ANJ),"ga",AT$(S_),"fZ",AT$(Mz),
"fK",AT_(MI),"gc",AT9(NX),"kn",AT9(AQv)],ACF,0,B,[],0,3,0,0,0,ADs,0,B,[],0,3,0,0,0,AC4,0,B,[],4,3,0,0,0,Vd,0,B,[H3],0,3,0,0,["C9",AT8(AJK)],Vj,0,B,[Bo],3,3,0,0,0,AAS,0,B,[Vj],1,3,0,0,["Jz",AT9(AIW),"IT",AT8(AK6)],Hp,0,B,[],0,3,0,0,0,SS,0,B,[],3,3,0,0,0,MO,0,B,[SS],0,3,0,0,0,QJ,0,B,[],3,3,0,0,0,ON,0,B,[QJ],3,3,0,0,0,ABd,0,B,[ON],0,3,0,0,0,Xk,0,B,[],3,3,0,ATi,0,Ln,0,B,[CU],1,3,0,0,0,FX,0,Ln,[],1,3,0,0,0,OL,0,B,[],3,3,0,0,0]);
$rt_metadata([Jt,0,B,[OL],3,3,0,0,0,K8,0,B,[],3,3,0,0,0,Mq,0,FX,[Jt,K8],0,3,0,0,["h6",AT9(AJl),"lJ",AT9(AO$),"e9",AT8(AIX),"iV",AT$(AEk),"iw",AT9(AHq)],Kj,0,B,[],3,3,0,0,0,OM,0,B,[Kj],0,3,0,0,["lp",function(b,c,d,e,f){ANh(this,b,c,d,e,f);}],W$,0,B,[],3,3,0,0,0,WR,0,B,[W$],0,3,0,0,0,Fk,0,B,[],3,3,0,0,0,MD,0,B,[Fk],0,3,0,0,0,Wc,0,B,[Kj],0,3,0,0,["lp",function(b,c,d,e,f){AG3(this,b,c,d,e,f);}],Lm,0,B,[Cq],0,3,0,0,["bu",AT9(AEG),"lY",AT8(ANV),"jz",AT9(ANr)],F_,0,B,[],3,3,0,0,0,HA,0,B,[],3,3,0,0,0,D5,0,B,[],3,3,
0,0,0,G9,0,B,[D5],3,3,0,0,0,Oi,0,FX,[ET,Jt,Jv,K8,F_,HA,G9],0,3,0,0,["mm",AT$(AQj),"lJ",AT9(ANW),"e9",AT8(ALa),"vM",AT8(AOx),"wa",AT8(AK2),"tN",AT9(APw),"lj",AT9(AMo),"h6",AT9(AGP),"iV",AT$(AKr),"iw",AT9(AE0),"gc",AT9(AM2),"fK",AT_(AJp),"fZ",AT$(ALp),"ga",AT$(ANO),"f4",AT_(ANg),"dM",AT8(AKg)],ZZ,0,B,[Bo],1,3,0,0,0,Zo,0,B,[],0,3,0,0,0,BY,0,B,[Bo],3,3,0,0,0,PA,0,B,[BY],0,3,0,0,["bg",AT9(AKJ)],ACj,0,B,[Bo],3,3,0,0,0,AAZ,0,B,[Bo],1,3,0,0,0,QT,0,B,[BY],0,3,0,0,["bg",AT9(AH3)],NK,0,B,[BY],0,3,0,0,["bg",AT9(ANj)],Y,
0,B,[],3,3,0,0,0,XR,0,B,[Y],0,3,0,0,["j",AT9(AJa)],ZM,0,B,[],0,3,0,0,0,XU,0,B,[DK],0,3,0,0,["gp",AT9(AJW)],Bk,0,B,[],3,3,0,0,0,XV,0,B,[Bk],0,3,0,0,["s",AT8(AIJ)],UO,0,B,[DK],0,3,0,0,["gp",AT9(ANE)],UP,0,B,[Bk],0,3,0,0,["s",AT8(ARd)],Rs,0,B,[Bo],3,3,0,0,0,Va,0,B,[Rs],0,3,0,0,["FC",AT9(AJs)],U$,0,B,[Bk],0,3,0,0,0,Qp,0,B,[Bo],3,3,0,0,0,U_,0,B,[Qp],0,3,0,0,["mv",AT$(AHx)],AC9,0,B,[Bo],1,3,0,0,0,Cd,0,B,[Bo],3,3,0,0,0,U9,0,B,[Cd],0,3,0,0,["b5",AT9(ANu)],Su,0,B,[],0,3,0,0,0,LG,0,Em,[],1,3,0,0,["el",AT9(AEb),"lw",AT9(AJ4)],Mn,
0,B,[FF],3,3,0,0,["el",AT9(AEb),"lw",AT9(AJ4)],Xb,0,B,[Mn,J7],3,3,0,0,["el",AT9(AEb),"lw",AT9(AJ4)],Ud,0,LG,[Xb],0,3,0,0,["el",AT9(AEb),"lw",AT9(AJ4)],W9,0,B,[Kt],3,3,0,0,0,MV,0,B,[W9],3,3,0,0,0,O9,0,DB,[DP,Cy,MV],0,3,0,0,0,Sy,0,B,[DK],0,3,0,0,0,Sz,0,B,[BY],0,3,0,0,["bg",AT9(AEz)]]);
$rt_metadata([Py,0,B,[],0,3,0,0,0,KH,0,B,[],1,3,0,0,0,ACG,0,KH,[],0,3,0,0,0,ZS,0,B,[],0,3,0,0,0,V4,0,B,[Cd],0,3,0,0,["b5",AT9(AMZ)],V5,0,B,[Cd],0,3,0,0,["b5",AT9(ANa)],V6,0,B,[Cd],0,3,0,0,["b5",AT9(ALq)],V7,0,B,[Cd],0,3,0,0,["b5",AT9(AKP)],ADe,0,B,[Cd],0,3,0,0,["b5",AT9(ALd)],ADf,0,B,[Cd],0,3,0,0,["b5",AT9(ANG)],ADg,0,B,[Cd],0,3,0,0,["b5",AT9(AJd)],ADh,0,B,[Cd],0,3,0,0,["b5",AT9(ARg)],ADi,0,B,[Cd],0,3,0,0,["b5",AT9(AIj)],ADj,0,B,[Cd],0,3,0,0,["b5",AT9(AOO)],ADU,0,B,[Cd],0,3,0,0,["b5",AT9(AQQ)],ADV,0,B,[Cd],
0,3,0,0,["b5",AT9(AK4)],ADW,0,B,[Cd],0,3,0,0,["b5",AT9(ALv)],ADX,0,B,[Cd],0,3,0,0,["b5",AT9(ANm)],TO,0,B,[],3,3,0,0,0,T1,0,B,[TO],0,3,0,0,0,T0,0,B,[Cd],0,3,0,0,["b5",AT9(AJ$)],Mg,0,B,[],0,3,0,0,0,IC,0,B,[GM],0,3,0,0,["vI",AT$(I2)],DS,0,B,[],3,3,0,0,0,D$,0,B,[DS],3,3,0,0,0,Is,0,B,[DS],3,3,0,0,0,Qv,0,B,[CU],0,3,0,0,0,Bj,0,B,[],0,3,0,0,["bu",AT9(AJX)],V$,0,B,[],0,3,0,0,0,Y5,0,B,[],3,3,0,0,0,Qo,0,B,[],0,3,0,0,0,K$,0,B,[],0,3,0,0,0,CI,0,K$,[],0,3,0,0,0,AC1,0,CI,[],0,3,0,0,0,Eo,0,CI,[],0,3,0,0,0,Q5,0,CI,[],0,3,0,
0,0,AAK,0,Eo,[],0,3,0,0,0,FC,0,Eo,[],0,3,0,0,0,N3,"Shaders$TextGray",4,FC,[],0,3,0,0,0,ADI,"Shaders$TextClearType",4,FC,[],0,3,0,0,0,Zr,0,Eo,[],0,3,0,0,0,ABR,0,CI,[],0,3,0,0,0,Y1,0,CI,[],0,3,0,0,0,R3,0,B,[Bo],3,3,0,0,0,AD3,0,B,[R3],3,3,0,0,0,Qm,0,B,[CU],0,3,0,0,0,Qn,0,B,[],0,3,0,0,0,Cr,0,B,[Cq,Cy],1,3,0,0,0,Gm,0,Cr,[],12,3,0,G7,0,LS,0,B,[],3,3,0,0,0]);
$rt_metadata([Tb,0,B,[LS],3,3,0,0,0,Ue,0,B,[],3,3,0,0,0,F0,0,B,[Tb,Ue],1,3,0,0,0,IV,0,F0,[],0,3,0,0,0,AAf,0,IV,[],0,3,0,0,0,FP,0,F0,[],1,3,0,0,0,KO,0,FP,[],0,3,0,0,["ka",AT_(AJ0)],DL,0,Cr,[],12,3,0,AP6,0,IL,0,B,[Cq],1,3,0,0,0,LX,0,IL,[],0,3,0,AH_,0,Gr,0,Cr,[],12,0,0,ALm,0,J9,0,FP,[],0,3,0,0,["ka",AT_(AHU)],ACy,0,BF,[],0,3,0,0,0,Vb,0,DO,[],0,3,0,0,0,LV,0,B,[Bo],3,3,0,0,0,W7,0,B,[LV],0,3,0,0,["bg",AT9(AOj)],W8,0,B,[LV],0,3,0,0,["bg",AT9(AFX)],Qg,0,B,[],0,3,0,0,0,W1,0,B,[],0,3,0,0,0,AAI,0,B,[ET,F_],0,0,0,0,["gc",
AT9(AM8),"fK",AT_(AQe),"fZ",AT$(AN8),"ga",AT$(AKy),"f4",AT_(AOr)],Jz,0,B,[],3,3,0,0,0,UA,0,B,[Jz],0,3,0,0,["j5",AT9(AKm)],UB,0,B,[Jz],0,3,0,0,["j5",AT9(AFh)],UC,0,B,[Y],0,3,0,0,["j",AT9(AKx)],Uw,0,B,[Y],0,3,0,0,["j",AT9(ALr)],Ux,0,B,[D$],0,3,0,0,["co",AT9(APX)],JV,0,B,[D$],0,3,0,0,["co",AT9(AIf)],Uy,0,B,[Y],0,3,0,0,["j",AT9(AOP)],Uz,0,B,[Is],0,3,0,0,["co",AT9(AG9)],GC,0,B,[],1,3,0,0,0,So,0,B,[],3,3,0,0,0,KB,0,GC,[Cq,Hs,Ig,So],1,3,0,0,0,Jm,0,GC,[Cq],1,3,0,0,0,Hd,0,B,[],0,3,0,AP$,0,PH,0,B,[D$],0,3,0,0,["co",AT9(AFM)],PF,
0,B,[Y],0,3,0,0,["j",AT9(AIp)],PG,0,B,[HA],0,3,0,0,["mm",AT$(APk)],NY,0,B,[G9],0,3,0,0,["dM",AT8(ANc)],NZ,0,B,[F_],0,3,0,0,["f4",AT_(AJ8)],NW,0,B,[Is],0,3,0,0,["co",AT9(AKQ)],AAU,0,B,[Bo],1,3,0,0,0,YY,0,B,[],3,3,0,0,0,T4,0,B,[],0,3,0,0,0,R8,0,B,[D$],0,3,0,0,["co",AT9(AIU)],R7,0,B,[D$],0,3,0,0,["co",AT9(AGn)],B5,0,B,[],0,3,0,0,["bu",AT9(ARb)],Ie,0,B,[],3,3,0,0,0,WK,0,B,[ET,Ie],0,3,0,0,0,Vv,0,B,[Ie,G$],0,3,0,0,["wo",AT8(AMd),"tx",AT8(AIb),"kn",AT9(AKV)],PM,0,B,[],0,3,0,0,0]);
$rt_metadata([Ky,0,B,[],0,3,0,0,0,EY,0,B,[CU],0,0,0,0,0,ADE,0,B,[],0,3,0,0,0,ZN,0,B,[CU],0,3,0,0,0,NQ,0,B,[Y],0,3,0,0,0,NP,0,B,[Y],0,3,0,0,["j",AT9(AFu)],NO,0,B,[Y],0,3,0,0,["j",AT9(AEE)],UJ,0,B,[],0,0,0,0,0,NN,0,B,[Bk],0,3,0,0,["s",AT8(AED)],NU,0,B,[Bk],0,3,0,0,["s",AT8(AId)],NT,0,B,[Bk],0,3,0,0,["s",AT8(ARw)],NS,0,B,[Bk],0,3,0,0,["s",AT8(AKK)],NR,0,B,[Bk],0,3,0,0,["s",AT8(AM9)],NM,0,B,[Bk],0,3,0,0,["s",AT8(AQW)],Ju,0,KB,[],1,0,0,0,0,Rm,0,Ju,[],0,0,0,0,0,Kk,0,B,[],1,3,0,0,0,Li,0,B,[],0,3,0,0,0,Wh,0,B,[],0,
0,0,0,0,GI,0,B,[],0,3,0,0,0,O3,0,GI,[],0,3,0,0,0,ACM,0,B,[],0,3,0,0,0,Md,0,GI,[],0,3,0,0,0,TQ,0,B,[Bo],3,3,0,0,0,NB,0,B,[TQ],0,3,0,0,["Kb",AT9(AKu)],Ut,0,B,[Y],0,3,0,0,["j",AT9(APd)],Ma,0,B,[],3,3,0,0,0,Qh,0,B,[Bk],0,3,0,0,["s",AT8(AJb)],Qf,0,B,[Bk],0,3,0,0,["s",AT8(AEq)],Xz,0,B,[],3,3,0,0,0,PZ,0,B,[],3,0,0,0,0,Ws,0,Jm,[],0,0,0,0,0,RR,0,B,[Ma],0,3,0,0,0,ABC,0,B,[Bo],1,3,0,0,0,NC,0,B,[Bk],0,3,0,0,["s",AT8(AQX)],JP,0,B,[],4,3,0,AJJ,0,VE,0,B,[],3,3,0,0,0,ABf,0,B,[VE],0,3,0,0,["cP",AT8(AGT)],T7,0,B,[],3,3,0,0,0,Kx,
0,B,[T7],0,3,0,0,["cP",AT8(AJ7)],HG,0,B,[],0,3,0,0,0,UU,0,B,[CU],0,3,0,0,0,Kg,0,Kk,[],1,3,0,0,0,Pv,0,Kg,[],0,3,0,0,0,TW,0,DO,[],0,3,0,0,0,H4,0,B,[],0,3,0,0,0,YX,0,B,[],3,3,0,0,0,Yb,0,B,[],0,3,0,0,0,ABg,0,B,[],3,3,0,0,0,ADO,0,B,[],0,3,0,0,0]);
$rt_metadata([L5,0,B,[GX,Cy],0,3,0,0,0,IX,0,L5,[],0,0,0,0,0,If,0,B5,[],0,3,0,0,0,CJ,0,B,[],3,3,0,ACI,0,Ca,0,Cr,[],12,3,0,ABP,0,In,0,B,[],0,3,0,0,0,HK,0,B,[],0,3,0,0,0,AA9,0,B,[],0,3,0,0,0,Dd,0,B,[],3,3,0,AEZ,0,ZJ,0,B,[],0,3,0,0,["bu",AT9(AOC)],CK,0,B,[],3,3,0,ACZ,0,B8,0,Cr,[],12,3,0,ZQ,0,Ds,0,B,[],3,3,0,ALy,0,CT,0,B,[],3,3,0,AH0,0,B7,0,Cr,[],12,3,0,UK,0,Dk,0,B,[],3,3,0,AEK,0,HW,0,B,[],0,3,0,0,0,Ii,0,B,[],4,3,0,0,0,Y8,0,B,[],0,3,0,0,0,HC,0,B,[],0,3,0,0,0,U0,0,B,[],0,3,0,0,0,Lp,0,B,[],0,3,0,0,0,YW,0,B,[],0,3,
0,0,0,Z8,0,B,[],4,3,0,0,0,TT,0,B,[],0,0,0,0,0,Up,0,B,[Y],0,3,0,0,["j",AT9(AFz)],IW,0,B,[CU],0,3,0,0,["eY",AT8(ABW)],Yj,0,B,[],0,3,0,0,0,Uo,0,B,[],0,3,0,0,0,SW,0,B,[],0,3,0,0,0,Ng,0,B,[Y],0,3,0,0,["j",AT9(AHB)],Mp,0,B,[Y],0,3,0,0,["j",AT9(AOY)],PP,0,B,[CU],0,3,0,0,0,AAh,0,B,[Bo],4,3,0,0,0,N7,0,B,[Y],0,3,0,0,["j",AT9(AFI)],Dl,0,Bt,[],0,3,0,0,0,Tz,0,F1,[],0,3,0,0,0,Za,0,B,[],3,3,0,0,0,Vr,0,B,[Y],0,3,0,0,["j",AT9(ALQ)],ADB,0,B,[],0,3,0,0,0,Mr,0,B,[Y],0,3,0,0,["j",AT9(AEa)],PY,0,B,[Y],0,3,0,0,["j",AT9(AOi)],Sh,0,
B,[Y],0,3,0,0,["j",AT9(AHA)],Sg,0,B,[Y],0,3,0,0,["j",AT9(AQb)],ED,0,B,[],3,3,0,0,0,Np,0,B,[ED],0,0,0,0,["cf",AT8(BP),"bR",AT8(BS),"kW",AT8(Q$)],Xe,0,B,[D5],0,3,0,0,["dM",AT8(AFF)],Xd,0,B,[D5],0,3,0,0,["dM",AT8(AMm)],SN,0,B,[D5],0,3,0,0,["dM",AT8(AMR)],AB7,0,B,[DK],0,3,0,0,0]);
$rt_metadata([ACh,0,B,[DK],0,3,0,0,0,Rv,0,B,[Y],0,3,0,0,["j",AT9(APP)],Nl,0,B,[Y],0,3,0,0,["j",AT9(AKC)],VP,0,B,[Y],0,3,0,0,["j",AT9(AQE)],Qd,0,B,[Y],0,3,0,0,["j",AT9(AFO)],M2,0,B,[DS],0,3,0,0,0,ACS,0,B,[],0,3,0,0,0,SQ,0,DB,[DP,Cy],0,3,0,0,0,Vo,0,B,[],0,3,0,0,0,Vg,0,B,[],0,3,0,0,0,S5,0,B,[Y],0,3,0,0,["j",AT9(AOI)],ABA,0,B,[Bo],1,3,0,0,0,T2,0,B,[],0,3,0,0,0,D1,0,Bt,[],0,3,0,0,0,NA,0,B,[],0,3,0,0,0,Tv,0,B,[Y],0,3,0,0,["j",AT9(AK$)],Tw,0,B,[Y],0,3,0,0,["j",AT9(AMV)],AC2,0,B,[],0,3,0,0,0,S$,0,B,[],0,0,0,0,0,Y2,
0,B,[],3,3,0,0,0,QM,0,B,[LS],3,3,0,0,0,Nq,0,B,[QM],3,3,0,0,0,GD,0,B,[Nq],1,3,0,0,0,Sp,0,GD,[],0,3,0,0,0,QC,0,B,[],3,3,0,0,0,TE,0,B,[],0,3,0,0,0,Rn,0,B,[Y],0,3,0,0,0,Hf,0,F4,[],0,0,0,0,0,GB,0,Bt,[],0,3,0,0,0,W0,0,B,[BY],0,3,0,0,["bg",AT9(AOw)],WZ,0,B,[BY],0,3,0,0,["bg",AT9(AG5)],Wg,0,B,[BY],0,3,0,0,["bg",AT9(AIN)],Wf,0,B,[BY],0,3,0,0,["bg",AT9(AJB)],Yw,0,B,[Y],0,3,0,0,0,WV,0,B,[Cd],0,3,0,0,["b5",AT9(AIz)],JN,0,B,[],0,3,0,0,0,Jh,0,B,[],0,3,0,0,0,L6,0,B,[],0,3,0,0,0,WI,0,B,[Bk],0,3,0,0,["s",AT8(AE_)],WJ,0,B,[Bk],
0,3,0,0,["s",AT8(AJg)],E2,0,B,[],0,3,0,0,0,Xx,0,B,[Y],0,3,0,0,["j",AT9(AIE)],Ki,0,E2,[],0,3,0,0,0,JO,0,E2,[],0,3,0,0,0,VL,0,B,[Y],0,3,0,0,["j",AT9(AFe)],PS,0,B,[],0,3,0,0,0,OU,0,B,[Y],0,3,0,0,["j",AT9(ALs)],QA,0,B,[DS],0,3,0,0,["co",AT9(ARx)],Xu,0,D1,[],0,3,0,0,0,Q0,0,Bt,[],0,3,0,0,0]);
$rt_metadata([VQ,0,Bt,[],0,3,0,0,0,Pi,0,B,[Y],0,3,0,0,["j",AT9(AMQ)],ADY,0,B,[Y],0,3,0,0,0,Wb,0,B,[],0,3,0,0,0,Qr,0,B,[Bk],0,3,0,0,["s",AT8(ARz)],Vn,0,B,[Bk],0,3,0,0,0,Qj,0,B,[QC],0,3,0,0,0,EG,0,B,[CU],0,3,0,0,["eY",AT8(ANY),"sx",AT8(ABG),"lE",AT_(Rt),"ku",AT9(AP1),"o4",AT9(AKU),"oI",AT9(AQx),"qu",AT$(AN6),"fK",AT_(AJk),"fZ",AT$(AF6),"ga",AT$(ALK),"gc",AT9(AQd),"f4",AT_(ANU)],IJ,0,EG,[],0,3,0,0,0,Qx,0,IJ,[G$],0,3,0,0,["wo",AT8(AMd),"tx",AT8(AIb),"eY",AT8(AQc),"qu",AT$(AHi),"oI",AT9(ANn),"o4",AT9(AO1),"kn",AT9(APh)],Qk,
0,B,[Bk],0,3,0,0,0,PR,0,EG,[],0,3,0,0,["eY",AT8(AOX),"lE",AT_(AIM),"ku",AT9(AOa),"fK",AT_(APt),"fZ",AT$(AO0),"ga",AT$(AL9),"gc",AT9(ALR),"f4",AT_(AHW),"sx",AT8(AQS)],Gn,0,B,[],0,3,0,0,0,Pw,0,B,[],1,3,0,0,0,O2,0,B,[FF],3,3,0,0,["el",AT9(AEb),"lw",AT9(AJ4)],Er,0,Ey,[O2],1,3,0,0,["el",AT9(AEb),"lw",AT9(AJ4)],Pf,0,Er,[],0,0,0,0,["lw",AT9(AJ4)],L_,0,B,[Y],0,3,0,0,["j",AT9(AHP)],UN,0,B,[Y],0,3,0,0,["j",AT9(AKL)],IB,0,B,[],0,3,0,0,["bu",AT9(ABq)],LI,0,IB,[],0,3,0,0,["bu",AT9(AFN)],En,0,B,[],0,3,0,0,["bu",AT9(YP)],FR,
0,En,[],0,3,0,0,0,H$,0,En,[],0,3,0,0,["bu",AT9(AQh)],It,0,En,[],0,3,0,0,["bu",AT9(AEX)],Y0,0,B,[Bo],1,3,0,0,0,Mk,0,B,[BY],0,3,0,0,["bg",AT9(AOB)],ABj,0,B,[],1,3,0,0,0,QW,0,B,[BY],0,3,0,0,["bg",AT9(AHI)],Z6,0,GD,[],0,3,0,0,0,RX,0,B,[Bk],0,3,0,0,["s",AT8(AJr)],RY,0,B,[Bk],0,3,0,0,["s",AT8(AGq)],RV,0,B,[Bk],0,3,0,0,["s",AT8(AFa)],RW,0,B,[Bk],0,3,0,0,["s",AT8(AJm)],Q4,0,B,[Bk],0,3,0,0,["s",AT8(ANN)],Q3,0,B,[Bk],0,3,0,0,["s",AT8(AMi)],Q2,0,B,[Bk],0,3,0,0,["s",AT8(ARn)],O5,0,B,[Bk],0,3,0,0,["s",AT8(AMe)],Qi,0,B,[],
3,3,0,0,0,P2,0,B,[Bk],0,3,0,0,["s",AT8(AGe)],HY,0,B,[],0,3,0,0,0,Ru,0,B,[],3,3,0,0,0,Yp,0,B,[Ru],0,3,0,0,0,Ve,0,EG,[],0,3,0,0,0,WU,0,Eq,[Cq],0,3,0,0,0,Fd,0,B,[],0,0,0,0,0,Hh,0,B,[],4,3,0,0,0,U3,0,B,[],0,3,0,0,0,TK,0,B,[Fk],0,3,0,0,["v9",AT$(AQu)],AB1,0,B,[],0,3,0,0,0]);
$rt_metadata([V8,0,BV,[],0,3,0,0,0,Dn,0,B,[],0,3,0,0,0,M9,0,B,[Bk],0,3,0,0,["s",AT8(AJZ)],M$,0,B,[Bk],0,3,0,0,["s",AT8(APE)],M8,0,B,[Bk],0,3,0,0,["s",AT8(AD_)],We,0,B,[Bk],0,3,0,0,["s",AT8(AKS)],Wd,0,B,[Bk],0,3,0,0,["s",AT8(AN$)],O0,0,B,[D5],0,3,0,0,["dM",AT8(AG$)],Sw,0,B,[Bk],0,3,0,0,["s",AT8(AJz)],Sx,0,B,[Bk],0,3,0,0,["s",AT8(APj)],Xt,0,B,[Bk],0,3,0,0,["s",AT8(AEp)],Xo,0,B,[Bk],0,3,0,0,["s",AT8(AJC)],Xp,0,B,[Bk],0,3,0,0,["s",AT8(AQI)],Xq,0,B,[Bk],0,3,0,0,["s",AT8(AK8)],Xr,0,B,[Bk],0,3,0,0,["s",AT8(AI0)],Mo,
0,B,[D5],0,3,0,0,["dM",AT8(APz)],KK,0,B,[],3,3,0,0,0,WQ,0,B,[KK],0,3,0,0,0,Ok,0,B,[Y],0,3,0,0,["j",AT9(AEV)],Oj,0,B,[Y],0,3,0,0,["j",AT9(AFf)],R9,0,Eq,[Cq],0,3,0,0,0,Te,0,B,[Fk],0,3,0,0,["v9",AT$(AFR)],WE,0,B,[DK],0,3,0,0,0,EK,0,B,[],0,3,0,0,0,YJ,0,B,[],0,3,0,0,0,Qe,0,B,[BY],0,3,0,0,["bg",AT9(AHh)],ADy,0,B,[Cq],0,3,0,0,["bu",AT9(AMj)],MU,0,B,[Y],0,3,0,0,["j",AT9(AKI)],XG,0,B,[Y],0,3,0,0,["j",AT9(ARt)],Ih,0,B,[Bo],3,3,0,0,0,Mx,0,B,[Ih],0,3,0,0,["rL",AT8(AJF)],Me,0,B,[Ih],0,3,0,0,["rL",AT8(AEd)],S0,0,B,[BY],0,
3,0,0,["bg",AT9(AJj)],Vs,0,B,[D5],0,3,0,0,["dM",AT8(AQ5)],T6,0,B,[KK],0,3,0,0,0,TM,0,B,[],0,3,0,0,0,WY,0,B,[BY],0,3,0,0,["bg",AT9(AI6)],JG,0,Er,[],1,0,0,0,["el",AT9(AEb),"lw",AT9(AJ4)],U8,0,JG,[],0,0,0,0,["el",AT9(AEb),"lw",AT9(AJ4)],KY,0,DB,[],1,0,0,0,0,U6,0,KY,[],0,0,0,0,0,Lx,0,Em,[KP],1,0,0,0,["el",AT9(AEb),"hT",AT8(AGX),"mp",AT9(ALn),"lw",AT9(AJ_)],U7,0,Lx,[],0,0,0,0,["el",AT9(AEb),"lv",AT9(ALu),"cB",AT8(AKA),"bY",AT8(AHu),"dP",AT8(AE4)],U4,0,B,[ED],0,0,0,0,["cf",AT8(AEM),"bR",AT8(AMP),"kW",AT8(AOp)],Ps,
0,B,[ED],3,3,0,0,0,U5,0,B,[Ps],0,0,0,0,0,XM,0,B,[GM],0,3,0,0,0,EE,0,B,[],0,0,0,0,0,SU,0,EE,[ED],0,0,0,0,0,AAe,0,B,[Bo],1,3,0,0,0]);
$rt_metadata([YZ,0,B,[Y],0,0,0,0,0,Rd,0,B,[Cy],4,3,0,0,0,GG,0,B,[Bo],1,3,0,0,0,Zx,0,GG,[],1,3,0,0,0,ACl,0,GG,[],1,3,0,0,0,Un,0,Er,[],0,0,0,0,["el",AT9(AEb),"lw",AT9(AJ4)],Pg,0,Ey,[],0,0,0,0,["el",AT9(AEb),"lw",AT9(AJ4)],AB6,0,B,[],0,3,0,0,0,SB,0,B,[],3,3,0,0,0,S1,0,B,[BY],0,3,0,0,["bg",AT9(AHz)],Ge,0,B,[],3,3,0,0,0,To,0,B,[Ge],0,3,0,0,["iO",AT_(ALx)],Tp,0,B,[Ge],0,3,0,0,["iO",AT_(AI7)],HD,0,B,[Cy,Cq],0,3,0,0,0,I$,0,B,[],3,3,0,0,0,RT,0,B,[I$],0,3,0,0,0,OJ,0,B,[I$],3,3,0,0,0,AAW,0,B,[OJ],0,3,0,0,0,Sm,0,B,[Ge],
0,3,0,0,["iO",AT_(AMf)],Sl,0,B,[DS],0,3,0,0,["co",AT9(AQs)],Sk,0,B,[DS],0,3,0,0,["co",AT9(ANA)],Sn,0,B,[Ge],0,3,0,0,["iO",AT_(ALM)],MB,0,B,[],0,3,0,0,0,Rf,0,B,[],0,3,0,0,0,BC,0,B,[],1,0,0,0,["b9",AT_(Hc),"cc",AUa(Hm),"hn",AT8(AF0),"L",AT9(APH),"bM",AT9(APG),"e_",AT8(AQC),"ea",AT8(Iy)],UI,0,B,[],3,3,0,0,0,Vu,0,B,[UI],0,3,0,0,0,XH,0,B,[Y],0,3,0,0,["j",AT9(AMk)],XI,0,B,[Y],0,3,0,0,["j",AT9(AH9)],QE,0,B,[Y],0,3,0,0,["j",AT9(AL3)],CC,0,BC,[],0,0,0,LU,["d",AT_(AFk),"E",AT9(AFJ)],Gg,0,B,[],0,0,0,0,0,Ib,0,BF,[],0,3,
0,0,0,ADk,0,B,[],1,3,0,0,0,WF,0,B,[BY],0,3,0,0,["bg",AT9(AM7)],ABk,0,B,[Bo],3,3,0,0,0,TP,0,B,[BY],0,3,0,0,["bg",AT9(AMH)],RP,0,CC,[],0,0,0,0,["d",AT_(AEQ),"E",AT9(AOf)],Xg,0,CC,[],0,0,0,0,["d",AT_(AGA)],PV,0,CC,[],0,0,0,0,["d",AT_(AFV)],SV,0,CC,[],0,0,0,0,["d",AT_(AEW),"E",AT9(AMS)],Fb,0,CC,[],0,0,0,0,["d",AT_(AP2)],BW,0,BC,[],1,0,0,0,["d",AT_(ARa),"bS",AT8(AO8),"E",AT9(AJO)],ACW,0,BW,[],0,0,0,0,["bl",AT$(AOA),"b9",AT_(AHV),"cc",AUa(AGt),"E",AT9(AET)],BR,0,BC,[],0,0,0,0,["d",AT_(AII),"L",AT9(AMK),"bM",AT9(AKB),
"E",AT9(ANp),"ea",AT8(AGo)],Iq,0,BR,[],0,0,0,0,["d",AT_(AMs),"E",AT9(ANQ)],Du,0,Iq,[],0,0,0,0,["d",AT_(AG2),"L",AT9(ANy)],Mv,0,Du,[],0,0,0,0,["d",AT_(AME),"E",AT9(APO)],VH,0,Du,[],0,0,0,0,["d",AT_(AFD),"E",AT9(APc)],Ri,0,Du,[],0,0,0,0,["d",AT_(AGl),"E",AT9(ARr)]]);
$rt_metadata([Ti,0,Du,[],0,0,0,0,["d",AT_(AEu),"E",AT9(AN5)],F5,0,BR,[],0,0,0,0,["d",AT_(AEI),"b9",AT_(AKX),"cc",AUa(AOk),"bM",AT9(AKv),"e_",AT8(AMN),"ea",AT8(AQF)],ADa,0,B,[Bo],1,3,0,0,0,Gk,0,B,[],1,0,0,0,0,Q,0,Gk,[],1,0,0,OO,["c8",AT8(AFG),"eH",AT8(AE9),"iT",AT8(AO5),"gJ",AT8(AQz)],Zk,0,Q,[],0,0,0,0,["i",AT9(CL),"c8",AT8(CH),"eH",AT8(AHQ),"iT",AT8(APv),"cP",AT8(ALS),"gJ",AT8(AH4)],II,0,Bt,[],0,3,0,0,0,DN,0,BC,[],1,0,0,0,["bM",AT9(AOl),"E",AT9(APU),"ea",AT8(ALh)],CN,0,DN,[],0,0,0,0,["d",AT_(AEw)],EQ,0,CN,[],
0,0,0,0,["d",AT_(AFn)],CD,0,DN,[],0,0,0,0,["d",AT_(AEH)],El,0,CN,[],0,0,0,0,["d",AT_(AK3),"L",AT9(ARu)],VU,0,CN,[],0,0,0,0,["d",AT_(AQ4),"b9",AT_(ALN)],W,0,B,[],1,0,0,0,0,CZ,0,BF,[],0,3,0,0,0,MM,0,Gk,[DP],0,0,0,0,["cP",AT8(ALW)],Og,0,BC,[],0,0,0,0,["d",AT_(AKd),"E",AT9(AMI)],Wy,0,B,[DP,Cy],0,3,0,0,0,MC,0,BR,[],0,0,0,0,0,Qt,0,BR,[],0,0,0,0,["d",AT_(AFi),"L",AT9(AMq),"E",AT9(AF2),"bM",AT9(AFE)],Di,0,BR,[],0,0,0,0,["d",AT_(AHG),"i",AT9(AIh),"bM",AT9(AFc),"L",AT9(AOU),"E",AT9(AHS)],IF,0,Di,[],0,0,0,0,["i",AT9(AJP)],Y_,
0,BW,[],0,0,0,0,["bl",AT$(AKe)],DZ,0,BW,[],0,0,0,0,["bl",AT$(Mb),"bM",AT9(AMM)],OP,0,BR,[],0,0,0,0,["L",AT9(AK1),"d",AT_(AEl),"bM",AT9(AFS),"E",AT9(APA)],Eb,0,BW,[],0,0,0,0,["bS",AT8(AJY),"bl",AT$(AIV),"b9",AT_(AHD),"cc",AUa(AJ6),"bM",AT9(APq)],ADw,0,BW,[],0,0,0,0,["bl",AT$(AEe)],X8,0,BW,[],0,0,0,0,["bl",AT$(AEB)],E0,0,BR,[],0,0,0,0,["L",AT9(AQD),"d",AT_(AMr),"bM",AT9(AKf),"E",AT9(ANz)],WX,0,E0,[],0,0,0,0,0,Tx,0,E0,[],0,0,0,0,0,XT,0,CD,[],0,0,0,0,["d",AT_(AGG)],PK,0,CD,[],0,0,0,0,["d",AT_(ALA)],Fr,0,CD,[],0,
0,0,0,["d",AT_(AOS),"L",AT9(AP7)],Pk,0,Fr,[],0,0,0,0,["d",AT_(AJ1),"L",AT9(AL0)],EZ,0,CD,[],0,0,0,0,["d",AT_(ARp)],MY,0,EZ,[],0,0,0,0,["d",AT_(AJn)],RG,0,CD,[],0,0,0,0,["d",AT_(AQP)],QF,0,Fr,[],0,0,0,0,["d",AT_(AF4)],Uq,0,EZ,[],0,0,0,0,["d",AT_(AE2)],RH,0,DN,[],0,0,0,0,["d",AT_(ARe),"b9",AT_(AO6)],Oq,0,DN,[],0,0,0,0,["d",AT_(AMO),"b9",AT_(AEr)],Ew,0,B,[],1,0,0,0,0,XW,0,CN,[],0,0,0,0,["d",AT_(AE3)],VO,0,El,[],0,0,0,0,["d",AT_(ALw)],O7,0,EQ,[],0,0,0,0,["d",AT_(AOm)],Qz,0,CN,[],0,0,0,0,["d",AT_(AMG)],TI,0,El,[],
0,0,0,0,["d",AT_(AFb)],Rj,0,EQ,[],0,0,0,0,["d",AT_(AOD)],JR,0,BC,[],4,0,0,0,["d",AT_(AKz),"E",AT9(AJA)]]);
$rt_metadata([ZO,0,BC,[],0,0,0,0,["d",AT_(AFB),"E",AT9(AFQ)],Ol,0,BC,[],0,0,0,0,["d",AT_(AJR),"E",AT9(ARl)],WD,0,BC,[],4,0,0,0,["d",AT_(ANi),"E",AT9(AGw)],Wa,0,BC,[],0,0,0,0,["d",AT_(AMn),"E",AT9(AEc)],M_,0,BC,[],0,0,0,0,["d",AT_(AGm),"E",AT9(AIx)],ADm,0,BR,[],0,0,0,0,["d",AT_(AQV),"L",AT9(AFU),"hn",AT8(AL6),"E",AT9(AFT)],Zh,0,BR,[],4,0,0,0,["d",AT_(AMg),"L",AT9(AOc),"hn",AT8(AD9),"E",AT9(AQ_)],AC6,0,BC,[],4,0,0,0,["d",AT_(AKj),"E",AT9(AIr)],ABh,0,BC,[],0,0,0,0,["d",AT_(AMl),"E",AT9(AIc)],X5,0,BC,[],0,0,0,0,
["d",AT_(AJq),"E",AT9(AGz)],GF,0,BR,[],0,0,0,0,["d",AT_(AE8),"L",AT9(ANv),"E",AT9(ANS)],ADb,0,GF,[],0,0,0,0,["d",AT_(AGF),"b9",AT_(APK),"cc",AUa(AER),"bM",AT9(ALo)],AAv,0,GF,[],0,0,0,0,["d",AT_(AKR)],Of,0,FU,[Hs],0,3,0,0,["lI",AUa(AH5),"kJ",AT_(AFH),"hz",AT9(AGa),"me",AT$(AO7)],RJ,0,BW,[],0,0,0,0,["bl",AT$(AG0),"b9",AT_(AFw),"cc",AUa(AIv),"bM",AT9(AI8)],X4,0,BW,[],0,0,0,0,["bl",AT$(AKZ)],M4,0,BW,[],0,0,0,0,["bl",AT$(AOq)],GE,0,B,[],4,0,0,AN3,0,Ml,0,BW,[],0,0,0,0,["bl",AT$(AOv)],Ks,0,BR,[],0,0,0,0,["L",AT9(AMD),
"d",AT_(AGx),"b9",AT_(AI5),"cc",AUa(AG7),"bM",AT9(AEO),"E",AT9(APe)],KL,0,BR,[],0,0,0,0,["L",AT9(AF_),"d",AT_(AEv),"b9",AT_(AM0),"cc",AUa(AOo),"bM",AT9(AG1),"E",AT9(AM_)],DC,0,BW,[],0,0,0,0,["bl",AT$(ANT),"b9",AT_(ALT),"cc",AUa(AF$),"bM",AT9(AND)],UX,0,Ew,[],0,0,0,0,["he",AT9(AGj),"th",AT$(ANM)],UY,0,Ew,[],0,0,0,0,["he",AT9(AOH),"th",AT$(AQt)],ACe,0,B,[],0,0,0,0,0,Ys,0,B,[],0,0,0,0,0,Kp,0,W,[],0,0,0,0,["A",AT8(AAC)],Jr,0,W,[],0,0,0,0,["A",AT8(AA_)],AB9,0,W,[],0,0,0,0,["A",AT8(AOe)],ACE,0,W,[],0,0,0,0,["A",AT8(APg)],ACH,
0,W,[],0,0,0,0,["A",AT8(AHH)],Kh,0,W,[],0,0,0,0,["A",AT8(Zm)],K0,0,Kh,[],0,0,0,0,["A",AT8(AAb)],AD0,0,W,[],0,0,0,0,["A",AT8(AI4)],L9,0,K0,[],0,0,0,0,["A",AT8(X2)],AAP,0,L9,[],0,0,0,0,["A",AT8(ALi)],AA5,0,W,[],0,0,0,0,["A",AT8(AGU)],ZG,0,W,[],0,0,0,0,["A",AT8(ALf)],Zu,0,W,[],0,0,0,0,["A",AT8(AQy)],ACK,0,W,[],0,0,0,0,["A",AT8(AL2)],AD8,0,W,[],0,0,0,0,["A",AT8(AEo)],ACf,0,W,[],0,0,0,0,["A",AT8(AJv)],AB0,0,W,[],0,0,0,0,["A",AT8(ANZ)],ACY,0,W,[],0,0,0,0,["A",AT8(AGR)],YI,0,W,[],0,0,0,0,["A",AT8(AHg)],Yl,0,W,[],0,
0,0,0,["A",AT8(AQq)],ACm,0,W,[],0,0,0,0,["A",AT8(AEf)],ACw,0,W,[],0,0,0,0,["A",AT8(AKn)],Z4,0,W,[],0,0,0,0,["A",AT8(AHr)],AA$,0,W,[],0,0,0,0,["A",AT8(AIA)]]);
$rt_metadata([ADG,0,W,[],0,0,0,0,["A",AT8(AKp)],ACt,0,W,[],0,0,0,0,["A",AT8(APD)],AAs,0,W,[],0,0,0,0,["A",AT8(ANf)],Z2,0,W,[],0,0,0,0,["A",AT8(ALU)],AD4,0,W,[],0,0,0,0,["A",AT8(AN9)],IT,0,W,[],0,0,0,0,["A",AT8(AA7)],AC3,0,IT,[],0,0,0,0,["A",AT8(ALH)],AAT,0,Kp,[],0,0,0,0,["A",AT8(AFt)],ZX,0,Jr,[],0,0,0,0,["A",AT8(AIR)],Zz,0,W,[],0,0,0,0,["A",AT8(AKD)],ZT,0,W,[],0,0,0,0,["A",AT8(AQf)],AAG,0,W,[],0,0,0,0,["A",AT8(AH8)],AAQ,0,W,[],0,0,0,0,["A",AT8(AEg)],ZC,0,B,[],4,0,0,0,0,Y9,0,B,[],4,3,0,0,0,Nb,0,B,[],0,3,0,0,
0,ACp,0,B,[],0,3,0,0,0,AAo,0,B,[],4,3,0,0,0,T$,0,EE,[ED],0,0,0,0,0,Rh,0,EE,[ED],0,0,0,0,0,Zi,0,B,[DS],0,3,0,0,0,US,0,B,[DS],0,0,0,0,["co",AT9(AHM)],VT,0,Q,[],0,0,0,0,["i",AT9(AHO)],VR,0,Q,[],0,0,0,0,["i",AT9(AEF)],Ov,0,Q,[],0,0,0,0,["i",AT9(AKt),"cP",AT8(AIF)],OC,0,Q,[],0,0,0,0,["i",AT9(ANX)],OA,0,Q,[],0,0,0,0,["i",AT9(AOu)],OB,0,Q,[],0,0,0,0,["i",AT9(AKY)],OF,0,Q,[],0,0,0,0,["i",AT9(AHk)],OG,0,Q,[],0,0,0,0,["i",AT9(AD$)],OD,0,Q,[],0,0,0,0,["i",AT9(AIL)],OE,0,Q,[],0,0,0,0,["i",AT9(AK0)],OH,0,Q,[],0,0,0,0,["i",
AT9(APQ)],OI,0,Q,[],0,0,0,0,["i",AT9(AGK)],Ou,0,Q,[],0,0,0,0,["i",AT9(ARy)],O$,0,Q,[],0,0,0,0,["i",AT9(AIP)],Os,0,Q,[],0,0,0,0,["i",AT9(AGJ)],Ot,0,Q,[],0,0,0,0,["i",AT9(AIn)],Oy,0,Q,[],0,0,0,0,["i",AT9(AJT)],Or,0,Q,[],0,0,0,0,["i",AT9(APn)],Ow,0,Q,[],0,0,0,0,["i",AT9(AFL)],Ox,0,Q,[],0,0,0,0,["i",AT9(AM$)],Fy,0,Cr,[],12,0,0,SJ,0,XO,0,B,[Y],0,3,0,0,0,Lt,0,B,[],3,3,0,0,0,SF,0,B,[Lt],4,3,0,0,0,Tn,0,B,[],32,0,0,AS8,0,SP,0,B,[Y],0,3,0,0,["j",AT9(ANH)],Xj,0,B,[Y],0,3,0,0,0,Jb,0,B,[],0,3,0,0,0]);
$rt_metadata([AAO,0,B,[Bo],1,3,0,0,0,MT,0,F5,[],0,0,0,0,["b9",AT_(AIa),"cc",AUa(ARo),"e_",AT8(AGv)],L1,0,Bt,[],0,3,0,0,0,N1,0,B,[Y],0,3,0,0,0,N2,0,B,[Y],0,3,0,0,0,Rx,0,B,[Y],0,3,0,0,["j",AT9(AGs)],YF,0,B,[],0,3,0,0,0,P7,0,B,[Y],0,3,0,0,["j",AT9(AQ6)],Y7,0,B,[],3,3,0,0,0,Q1,0,B,[BY],0,3,0,0,["bg",AT9(AEm)],Se,0,B,[Y],0,3,0,0,["j",AT9(ALj)],Sc,0,B,[Y],0,3,0,0,["j",AT9(ANs)],Pd,0,B,[Bk],0,3,0,0,0,TD,0,B,[Y],0,3,0,0,["j",AT9(AMW)],Vy,0,B,[Y],0,3,0,0,["j",AT9(AG_)],UQ,0,B,[Lt],0,0,0,0,0,WM,0,B,[BY],0,3,0,0,["bg",
AT9(AHb)],Oo,0,B,[Y],0,3,0,0,["j",AT9(AGQ)],Mu,0,B,[Bk],0,3,0,0,["s",AT8(AI3)],M5,0,B,[Bk],0,3,0,0,["s",AT8(AIY)],NI,0,B,[Y],0,3,0,0,["j",AT9(ALG)],Vx,0,B,[Y],0,3,0,0,["j",AT9(AIC)],N4,0,B,[Bk],0,3,0,0,["s",AT8(AEL)],SY,0,Q,[],0,0,0,0,["i",AT9(AP0)],MA,0,Q,[],0,0,0,0,["i",AT9(AFr)],R2,0,Q,[],0,0,0,0,["i",AT9(AE$)],R1,0,Q,[],0,0,0,0,["i",AT9(AH7)],Wm,0,Q,[],0,0,0,0,["i",AT9(AJH)],OZ,0,Q,[],0,0,0,0,["i",AT9(AP4)],Oa,0,Q,[],0,0,0,0,["i",AT9(AMy)],QX,0,Q,[],0,0,0,0,["i",AT9(AN2)],Mt,0,Q,[],0,0,0,0,["i",AT9(AQ8)],My,
0,Q,[],0,0,0,0,["i",AT9(AG6)],NH,0,Q,[],0,0,0,0,["i",AT9(AQa)],Po,0,Q,[],0,0,0,0,["i",AT9(ALc)],PB,0,Q,[],0,0,0,0,["i",AT9(ANt)],Tr,0,Q,[],0,0,0,0,["i",AT9(APR)],SG,0,Q,[],0,0,0,0,["i",AT9(AQJ)],MH,0,Q,[],0,0,0,0,["i",AT9(AGS)],LQ,0,Q,[],0,0,0,0,["i",AT9(AMB)],RS,0,LQ,[],0,0,0,0,["i",AT9(AOV)],WG,0,B,[BY],0,3,0,0,["bg",AT9(AIy)],WH,0,B,[BY],0,3,0,0,["bg",AT9(AFK)],Ug,0,B,[],3,3,0,ASA,0,Ss,0,B,[Y],0,3,0,0,["j",AT9(AIq)],RB,0,B,[Ih],0,3,0,0,["rL",AT8(AOz)],Uc,0,B,[BY],0,3,0,0,["bg",AT9(AQL)],ACQ,0,B,[],0,0,0,
0,0,T8,0,B,[BY],0,3,0,0,["bg",AT9(AKG)],Yn,0,B,[Bo],1,3,0,0,0]);
$rt_metadata([PU,0,B,[BY],0,3,0,0,["bg",AT9(AOn)],ACi,0,B,[],3,3,0,0,0,AAV,0,B,[Fk],0,3,0,0,0,Vt,0,B,[],0,3,0,0,0,NL,0,B,[DK],0,3,0,0,["gp",AT9(AE6)],YT,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.N_=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","null","false","true","Either src or dest is null","dark","light","darcula","unknown theme: ","provided result is not an array","bad model","text",".cpp",".cc",".cxx",".hpp",".c",".h",
".java","java",".js","js",".activity","activity","cpp","mermaid","/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncFullParseFile","asyncParseFile","asyncParseFirstLines","/Model::parseFullFile","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","/Model::iterativeParsing","asyncIterativeParsing","/","[",", ","]","\n","...","\\n","Consolas","  ","Set editor font to: ",", ascent+descent = ",", lineHeight = ",
", caretHeight = ","topBase(font, lineHeight) = "," ","\r","opening file ","highlight at (",") does not match code model","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaProxy.parseViewport","deleteDiffModel","keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","#606366","#2B2B2B","#A4A3A3","#323232","#616161","#393B40","#DFE1E5","#484A4A","#294436","#385570","#303C47","#4B5059",
"#1E1F22","#A1A3AB","#26282E","#43454A","#283541","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","Illegal argument javaObject instanceof ","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  outColor = texture(sDiffuse, textureUV);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uTextPow;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main("
+") {\n            // D2D and JsCanvas(alpha=true) comparison:\n            //    - rgb is different\n            //    - alpha is identical\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = pow(t, uTextPow.x);\n            outColor = mix(uBgColor, uColor, text);\n          }","WebGraphics::ctor finish",".","FontDesk::FontDesk iSize != size: ","italic","normal","oblique","onPaste: item.type = ",", item.kind = ","pixel shader error: ","vertex shader error: ",
"----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}",": set powCache = ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBgColor;\nuniform sampler2D sDiffuse;\nuniform vec2 uTextPow;\nin vec2 textureUV;\nvoid main() {\n  vec3 textRGB = texture(sDiffuse, textureUV).rgb;\n  vec3 textRGBp = vec3(\n    pow(textRGB.x, uTextPow.x),\n    pow(textRGB.y, uTextPow.x),\n    pow(textRGB.z, uTextPow.x));\n  vec3 mixColor = mix(uBgColor.rgb, uColor.rgb, textRGBp);\n  // if (dot(textRGB, textRGB) == 0.0) outColor = uBgColor; else\n  outColo"
+"r = vec4(textRGB * 0.0 + mixColor * 1.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uBaseline;\nuniform vec4 uScaleHExp;\nin vec2 outScreenPos;\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  float sX = uScaleHExp.x, sY = uScaleHExp.y;\n  float H = uSc"
+"aleHExp.z;\n  float E = uScaleHExp.w;\n  float arg = (pt.x - uBaseline.x) * sX;\n  float sinA = sin(arg);\n  float vDist = abs(sinA * sY - uBaseline.y + pt.y);\n  float k = sqrt(1. + (1. - sinA * sinA) * sX * sX * sY * sY * 0.5);\n  float v = vDist / (H * k);\n  float alpha = pow(1. - clamp(v + .5, 0.0, 1.0), E);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","UTF-8","BYTE","FLOAT","ns-resize",
"ew-resize","Usages of ","No definition or usages","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","parser >","open ...","font pow >","Development >","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE",
"REPORT","trying to display with unknown screen size and dpr","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }"," name: ","File is too large: ",", size = ","Segoe UI","The last char in dst ","#BBBBBB","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","defaultText","keyword","#0033b3","field","#871094","string","#3C7C16","comma","error","#F93900","unused","#808080","number","#164FF1","method","#396179","showUsage","braceMatch","#FFEF28","#93D9D9","comment",
"annotation","#BBB529","type","#287BDE","operator","#5F8C8A","#D4E2FF","#000000","#818594","#080808","#A9B7C6","#344134","#40332B","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#3B514D","#3C3F41","#4B6EAF","#787878","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","#CF8E6D","#C77DBB","#6AAB73","#F75464","#6F737A","#2AACB8","#56A8F5","#7A7E85","#B3AE60","#2E436E","#2E426D","#4D4E51","nwse-resize","nesw-resize","toolbar size is unknown","Illegal language: ","/Viewport parsed in ","/Model::onFileIterativeParsed",
"/First lines parsed in ","/File structure parsed in ","Expected "," ints to write, but "," written","Int","Iter","VP","Resolve","Rep","/Resolved in ","readClipboardText error: ","navigator.clipboard is undefined","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero."," ints to read, but "," read","Current Version: ","Last Parsed Version: ","Unknown scope type: ","Unexpected type: ","Unexpected ref node type: ","Is","In","Lower","Upper",
"ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters",
"CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions",
"PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns",
"SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA",
"YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn",
"Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","DEF","DECL","writeClipboardText error: ","Verdana","JetBrains Mono"]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AF7(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var AXO=Long_add;var JS=Long_sub;var ALO=Long_mul;var AXP=Long_div;var AXQ=Long_rem;var AXR=Long_or;var XX=Long_and;var AXS=Long_xor;var AXT=Long_shl;var AXU=Long_shr;var ATy=Long_shru;var AXV=Long_compare;var AHl=Long_eq;var AXW=Long_ne;var AR_=Long_lt;var AXX=Long_le;var AXY=Long_gt;var AR9=Long_ge;var AXZ=Long_not;var ASY=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(ASn);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=Ua.prototype;c.create=c.ye;c=T_.prototype;c.create=c.A3;c=TS.prototype;c.create=c.ye;c=Px.prototype;c.registerDocumentHighlightProvider=c.zb;c.getModel=c.Fb;c.getProperty=c.CQ;c.getText=c.zj;c.onDidChangeModel=c.HK;c.revealPosition=c.EW;c.focus=c.Dk;c.setReadonly=c.Aw;c.setPosition=c.FH;c.setFontSize=c.DD;c.setFontFamily=c.Au;c.revealLine=c.Ky;c.getPosition=c.IA;c.revealLineInCenter=c.B$;c.setTheme=c.KV;c.setModel=c.zJ;c.executeOnWorker=c.BB;c.registerDefinitionProvider=c.GS;c.registerEditorOpener
=c.Hl;c.registerReferenceProvider=c.HI;c.dispose=c.EM;c.registerDeclarationProvider=c.JD;c.setText=c.Ea;c=EU.prototype;c.getPositionAt=c.A_;c.getText=c.Fe;c.getOffsetAt=c.D7;c.dispose=c.A9;Object.defineProperty(c,"language",{get:c.IF});Object.defineProperty(c,"uri",{get:c.DA});c=VI.prototype;c.setRightModel=c.BN;c.setFontFamily=c.Jq;c.setLeftModel=c.GI;c.setTheme=c.z3;c.getRightModel=c.KW;c.focus=c.Fj;c.getLeftModel=c.GQ;c.setReadonly=c.zY;c.setFontSize=c.Fl;c=Uh.prototype;c.f=c.mv;c=XF.prototype;c.f=c.mv;c
=YA.prototype;c.createEntityReference=c.Cl;c.getElementById=c.Gs;c.createTextNode=c.F6;c.hasChildNodes=c.D9;c.querySelectorAll=c.BZ;c.removeChild=c.Il;c.cloneNode=c.z0;c.createComment=c.Kn;c.insertBefore=c.CU;c.getElementsByTagNameNS=c.IN;c.hasAttributes=c.Fy;c.normalize=c.KB;c.hasChildNodesJS=c.Kk;c.getElementsByTagName=c.Jy;c.appendChild=c.As;c.createAttributeNS=c.GY;c.dispatchEvent=c.JZ;c.replaceChild=c.A1;c.createElementNS=c.Di;c.createCDATASection=c.Iw;c.querySelector=c.Fw;c.createElement=c.Hz;c.isSupported
=c.Iy;c.importNode=c.De;c.removeEventListener=c.C6;c.createAttribute=c.J2;c.createDocumentFragment=c.y_;c.createProcessingInstruction=c.Ce;c.addEventListener=c.Hw;Object.defineProperty(c,"nodeName",{get:c.Ar});Object.defineProperty(c,"documentElement",{get:c.EX});Object.defineProperty(c,"childNodes",{get:c.H_});Object.defineProperty(c,"prefix",{get:c.Dq,set:c.KO});Object.defineProperty(c,"implementation",{get:c.I2});Object.defineProperty(c,"textContent",{get:c.Kx,set:c.F4});Object.defineProperty(c,"parentNode",
{get:c.Gp});Object.defineProperty(c,"nextSibling",{get:c.EH});Object.defineProperty(c,"nodeType",{get:c.HX});Object.defineProperty(c,"doctype",{get:c.Ew});Object.defineProperty(c,"localName",{get:c.Jt});Object.defineProperty(c,"nodeValue",{get:c.Eb,set:c.Ka});Object.defineProperty(c,"firstChild",{get:c.JJ});Object.defineProperty(c,"lastChild",{get:c.HH});Object.defineProperty(c,"previousSibling",{get:c.z7});Object.defineProperty(c,"namespaceURI",{get:c.BG});Object.defineProperty(c,"attributes",{get:c.Dz});Object.defineProperty(c,
"ownerDocument",{get:c.BT});c=Zp.prototype;c.removeEventListener=c.B1;c.dispatchEvent=c.C2;c.addEventListener=c.GR;c=Sr.prototype;c.f=c.mv;c=Vd.prototype;c.dispose=c.C9;c=AAS.prototype;c.get=c.Jz;Object.defineProperty(c,"length",{get:c.IT});c=PA.prototype;c.f=c.bg;c=QT.prototype;c.f=c.bg;c=NK.prototype;c.f=c.bg;c=Va.prototype;c.onAnimationFrame=c.FC;c=U_.prototype;c.f=c.mv;c=U9.prototype;c.handleEvent=c.b5;c=Sz.prototype;c.f=c.bg;c=V4.prototype;c.handleEvent=c.b5;c=V5.prototype;c.handleEvent=c.b5;c=V6.prototype;c.handleEvent
=c.b5;c=V7.prototype;c.handleEvent=c.b5;c=ADe.prototype;c.handleEvent=c.b5;c=ADf.prototype;c.handleEvent=c.b5;c=ADg.prototype;c.handleEvent=c.b5;c=ADh.prototype;c.handleEvent=c.b5;c=ADi.prototype;c.handleEvent=c.b5;c=ADj.prototype;c.handleEvent=c.b5;c=ADU.prototype;c.handleEvent=c.b5;c=ADV.prototype;c.handleEvent=c.b5;c=ADW.prototype;c.handleEvent=c.b5;c=ADX.prototype;c.handleEvent=c.b5;c=T0.prototype;c.handleEvent=c.b5;c=W7.prototype;c.f=c.bg;c=W8.prototype;c.f=c.bg;c=NB.prototype;c.accept=c.Kb;c=W0.prototype;c.f
=c.bg;c=WZ.prototype;c.f=c.bg;c=Wg.prototype;c.f=c.bg;c=Wf.prototype;c.f=c.bg;c=WV.prototype;c.handleEvent=c.b5;c=Mk.prototype;c.f=c.bg;c=QW.prototype;c.f=c.bg;c=Qe.prototype;c.f=c.bg;c=Mx.prototype;c.onTimer=c.rL;c=Me.prototype;c.onTimer=c.rL;c=S0.prototype;c.f=c.bg;c=WY.prototype;c.f=c.bg;c=S1.prototype;c.f=c.bg;c=WF.prototype;c.f=c.bg;c=TP.prototype;c.f=c.bg;c=Q1.prototype;c.f=c.bg;c=WM.prototype;c.f=c.bg;c=WG.prototype;c.f=c.bg;c=WH.prototype;c.f=c.bg;c=RB.prototype;c.onTimer=c.rL;c=Uc.prototype;c.f=c.bg;c
=T8.prototype;c.f=c.bg;c=PU.prototype;c.f=c.bg;})();
$rt_exports.main();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);
export const newEditor = self.editorFactory;
export const newTextModel = self.modelFactory;
export const newCodeDiff = self.diffFactory;
