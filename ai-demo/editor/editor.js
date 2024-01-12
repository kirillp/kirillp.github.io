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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.gu=f;}
function $rt_cls(cls){return ABx(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return G3(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b$.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AN1(t);}
function $rt_throwableCause(t){return AN6(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ATM());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ATN(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ATO());}
function $rt_throwCCE(){}
var A=Object.create(null);
var L=$rt_throw;var BA=$rt_compare;var ATP=$rt_nullCheck;var E=$rt_cls;var P=$rt_createArray;var H$=$rt_isInstance;var ATQ=$rt_nativeThread;var ATR=$rt_suspending;var ATS=$rt_resuming;var ATT=$rt_invalidPointer;var C=$rt_s;var Bm=$rt_eraseClinit;var T=$rt_imul;var E5=$rt_wrapException;var ATU=$rt_checkBounds;var ATV=$rt_checkUpperBound;var ATW=$rt_checkLowerBound;var ATX=$rt_wrapFunction0;var ATY=$rt_wrapFunction1;var ATZ=$rt_wrapFunction2;var AT0=$rt_wrapFunction3;var AT1=$rt_wrapFunction4;var F=$rt_classWithoutFields;var G
=$rt_createArrayFromData;var ASl=$rt_createCharArrayFromData;var AT2=$rt_createByteArrayFromData;var AT3=$rt_createShortArrayFromData;var FK=$rt_createIntArrayFromData;var AT4=$rt_createBooleanArrayFromData;var AT5=$rt_createFloatArrayFromData;var AT6=$rt_createDoubleArrayFromData;var AF5=$rt_createLongArrayFromData;var ATK=$rt_createBooleanArray;var DX=$rt_createByteArray;var AT7=$rt_createShortArray;var B0=$rt_createCharArray;var Bx=$rt_createIntArray;var AT8=$rt_createLongArray;var AEf=$rt_createFloatArray;var AT9
=$rt_createDoubleArray;var BA=$rt_compare;var AT$=$rt_castToClass;var AT_=$rt_castToInterface;var AUa=Long_toNumber;var BL=Long_fromInt;var AUb=Long_fromNumber;var Dn=Long_create;var ACr=Long_ZERO;var AUc=Long_hi;var ZH=Long_lo;
function B(){this.$id$=0;}
function Bz(a){return ABx(a.constructor);}
function AKY(a,b){return a!==b?0:1;}
function AFT(a){var b,c,d,e,f,g,h,i,j;b=Iz(a);if(!b)c=C(0);else{d=(((32-NB(b)|0)+4|0)-1|0)/4|0;e=B0(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=GV((b>>>g|0)&15,16);g=g-4|0;h=i;}c=G3(e);}j=new R;U(j);K(K(j,C(1)),c);return S(j);}
function Iz(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AKg(a){var b,c,d;if(!H$(a,DP)&&a.constructor.$meta.item===null){b=new U9;X(b);L(b);}b=AEn(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var AAp=F(0);
function ASb(b){ACF();Yl();AAa();ADh();AAX();AB6();ADV();AA8();ZL();ACI();Yd();AC6();Yh();ACa();ABY();ABQ();AAG();ZR();AAc();ABf();ABO();YI();ADF();$rt_globals.editorFactory=Bn(new T7,"create");$rt_globals.modelFactory=Bn(new T6,"create");$rt_globals.diffFactory=Bn(new TM,"create");}
var MZ=F(0);
var Mp=F(0);
function VS(){var a=this;B.call(a);a.km=null;a.fJ=null;}
function ABx(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new VS;c.fJ=b;d=c;b.classObject=d;}return c;}
function Hs(a){return a.fJ.$meta.primitive?1:0;}
function HN(a){return ABx(a.fJ.$meta.item);}
var Zk=F();
function Bn(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Cv(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Y1=F();
function AEn(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ABC(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ABC(d[e],c))return 1;e=e+1|0;}return 0;}
function F8(){var a=this;B.call(a);a.lT=null;a.rb=null;a.lM=0;a.mC=0;}
function AUd(){var a=new F8();X(a);return a;}
function AUe(a){var b=new F8();Bp(b,a);return b;}
function X(a){a.lM=1;a.mC=1;}
function Bp(a,b){a.lM=1;a.mC=1;a.lT=b;}
function AHJ(a){return a;}
function AN1(a){return a.lT;}
function AN6(a){var b;b=a.rb;if(b===a)b=null;return b;}
var DO=F(F8);
function AUf(){var a=new DO();AB1(a);return a;}
function AUg(a){var b=new DO();X3(b,a);return b;}
function AB1(a){X(a);}
function X3(a,b){Bp(a,b);}
var Bt=F(DO);
function ATN(a){var b=new Bt();AP0(b,a);return b;}
function AP0(a,b){Bp(a,b);}
var AAK=F(Bt);
var Cy=F(0);
var Cr=F(0);
var Ij=F(0);
function Bv(){var a=this;B.call(a);a.b$=null;a.hM=0;}
var AUh=null;var AUi=null;var AUj=null;function F9(){F9=Bm(Bv);APA();}
function AIE(){var a=new Bv();X_(a);return a;}
function G3(a){var b=new Bv();IM(b,a);return b;}
function DA(a,b,c){var d=new Bv();Ma(d,a,b,c);return d;}
function X_(a){F9();a.b$=AUh;}
function IM(a,b){F9();Ma(a,b,0,b.data.length);}
function Ma(a,b,c,d){var e;F9();e=B0(d);a.b$=e;Da(b,c,e,0,d);}
function L3(b){var c;F9();c=AIE();c.b$=b;return c;}
function I(a,b){var c,d;if(b>=0){c=a.b$.data;if(b<c.length)return c[b];}d=new GR;X(d);L(d);}
function H(a){return a.b$.data.length;}
function Eu(a){return a.b$.data.length?0:1;}
function PV(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=H(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Da(a.b$,b,d,e,c);return;}}g=new BV;X(g);L(g);}
function TP(a,b,c){var d,e,f;if((c+H(b)|0)>H(a))return 0;d=0;while(d<H(b)){e=I(b,d);f=c+1|0;if(e!=I(a,c))return 0;d=d+1|0;c=f;}return 1;}
function J1(a,b){if(a===b)return 1;return TP(a,b,0);}
function DH(a,b){var c,d,e,f;if(a===b)return 1;if(H(b)>H(a))return 0;c=0;d=H(a)-H(b)|0;while(d<H(a)){e=I(a,d);f=c+1|0;if(e!=I(b,c))return 0;d=d+1|0;c=f;}return 1;}
function HU(a,b,c){var d,e,f,g,h;d=Z(0,c);if(b<65536){e=b&65535;while(true){f=a.b$.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Kd(b);h=Lw(b);while(true){f=a.b$.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function G9(a,b,c){var d,e,f,g,h;d=Ba(c,H(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b$.data[d]==e)break;d=d+(-1)|0;}return d;}f=Kd(b);g=Lw(b);while(true){if(d<1)return (-1);h=a.b$.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function PG(a,b,c){var d,e,f;d=Z(0,c);e=H(a)-H(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=H(b))break a;if(I(a,d+f|0)!=I(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AMo(a,b){return PG(a,b,0);}
function PS(a,b,c){var d,e;d=Ba(c,H(a)-H(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=H(b))break a;if(I(a,d+e|0)!=I(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AAl(a,b){return PS(a,b,H(a));}
function B9(a,b,c){var d,e;d=BA(b,c);if(d>0){e=new BV;X(e);L(e);}if(!d){F9();return AUi;}if(!b&&c==H(a))return a;return DA(a.b$,b,c-b|0);}
function D3(a,b){return B9(a,b,H(a));}
function P4(a,b,c){return B9(a,b,c);}
function Hn(a,b){var c,d,e,f,g,h;if(Eu(b))return a;if(Eu(a))return b;c=B0(H(a)+H(b)|0);d=c.data;e=0;f=0;while(f<H(a)){g=e+1|0;d[e]=I(a,f);f=f+1|0;e=g;}g=0;while(g<H(b)){h=e+1|0;d[e]=I(b,g);g=g+1|0;e=h;}return L3(c);}
function UG(a,b,c){var d,e,f,g;d=new R;U(d);e=H(a)-H(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=H(b)){K(d,c);f=f+(H(b)-1|0)|0;break a;}if(I(a,f+g|0)!=I(b,g))break;g=g+1|0;}BX(d,I(a,f));}f=f+1|0;}K(d,D3(a,f));return S(d);}
function RQ(a){var b,c;b=0;c=H(a)-1|0;a:{while(b<=c){if(I(a,b)>32)break a;b=b+1|0;}}while(b<=c&&I(a,c)<=32){c=c+(-1)|0;}return B9(a,b,c+1|0);}
function AFR(a){return a;}
function E4(a){var b,c,d,e,f;b=a.b$.data;c=B0(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function D8(b){var c;F9();c=new R;U(c);return S(Bl(c,b));}
function BE(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(H(c)!=H(a))return 0;d=0;while(d<H(c)){if(I(a,d)!=I(c,d))return 0;d=d+1|0;}return 1;}
function Gj(a){var b,c,d,e;a:{if(!a.hM){b=a.b$.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hM=(31*a.hM|0)+e|0;d=d+1|0;}}}return a.hM;}
function LH(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Ge;Bp(b,C(2));L(b);}AUk=1;d=new Q7;d.j$=P(CC,10);d.f$=(-1);d.eA=(-1);d.bm=(-1);e=new Gk;e.ew=1;e.by=b;e.X=B0(H(b)+2|0);Da(E4(b),0,e.X,0,H(b));f=e.X.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.r$=g;e.fO=0;EO(e);EO(e);d.g=e;d.dr=0;d.ld=Xg(d,(-1),0,null);if(!C2(d.g)){b=new Ie;h=d.g;IS(b,C(3),h.by,h.c1);L(b);}if(d.n4)d.ld.ec();b=BB();h=new SA;h.iq=(-1);h.kw=(-1);h.w1=d;h.uL=d.ld;h.iJ=a;h.iq=0;g=H(a);h.kw=g;e=new UL;i=h.iq;j=d.f$;k=d.eA+1|0;l=d.bm+1|0;e.hr
=(-1);m=j+1|0;e.pd=m;e.dB=Bx(m*2|0);f=Bx(l);e.jo=f;G_(f,(-1));if(k>0)e.k5=Bx(k);G_(e.dB,(-1));W6(e,a,i,g);h.cl=e;e.e8=1;n=0;m=0;if(!H(a)){f=P(Bv,1);f.data[0]=C(3);}else{while(true){l=H(h.iJ);if(!Yp(h))l=h.kw;e=h.cl;if(e.d9>=0&&Z5(e)==1){e=h.cl;e.d9=Ix(e);if(Ix(h.cl)==AB5(h.cl)){e=h.cl;e.d9=e.d9+1|0;}g=h.cl.d9;g=g<=l&&Mx(h,g)?1:0;}else g=Mx(h,h.iq);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Bw(b,P4(a,m,ADv(h)));m=ZO(h);n=g;}a:{Bw(b,P4(a,m,H(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(H(Bs(b,g)))break a;Fl(b,
g);}}if(g<0)g=0;f=Ho(b,P(Bv,g));}return f;}
function AHV(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Ba(H(a),H(b));e=0;while(true){if(e>=d){c=H(a)-H(b)|0;break a;}c=I(a,e)-I(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function APA(){AUh=B0(0);AUi=AIE();AUj=new SU;}
var F3=F(F8);
var GX=F(F3);
var AAk=F(GX);
var Ep=F();
function FS(){Ep.call(this);this.bg=0;}
var AUl=null;var AUm=null;function APe(a){var b=new FS();ZA(b,a);return b;}
function ZA(a,b){a.bg=b;}
function KU(b){return (Nk(ATx(20),b,10)).cP();}
function I6(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new C0;Bp(b,C(4));L(b);}d=H(b);if(0==d){b=new C0;Bp(b,C(5));L(b);}if(c>=2&&c<=36){a:{e=0;switch(I(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new C0;X(b);L(b);}b:{c:{while(f<d){h=f+1|0;i=OX(I(b,f));if(i<0){j=new C0;k=B9(b,0,d);b=new R;U(b);K(K(b,C(6)),k);Bp(j,S(b));L(j);}if(i>=c){j=new C0;l=B9(b,0,d);b=new R;U(b);K(K(Bl(K(b,C(7)),c),C(8)),l);Bp(j,S(b));L(j);}g=T(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new C0;k=B9(b,0,d);b=new R;U(b);K(K(b,C(9)),k);Bp(j,S(b));L(j);}b=new C0;j=new R;U(j);Bl(K(j,C(10)),c);Bp(b,S(j));L(b);}
function Ct(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AUm===null){AUm=P(FS,256);c=0;while(true){d=AUm.data;if(c>=d.length)break a;d[c]=APe(c-128|0);c=c+1|0;}}}return AUm.data[b+128|0];}return APe(b);}
function AQG(a,b){if(a===b)return 1;return b instanceof FS&&b.bg==a.bg?1:0;}
function NB(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function HW(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AJ$(a,b){b=b;return BA(a.bg,b.bg);}
function ACF(){AUl=E($rt_intcls());}
function FW(){var a=this;B.call(a);a.M=null;a.H=0;}
function AUn(){var a=new FW();U(a);return a;}
function ATx(a){var b=new FW();FD(b,a);return b;}
function U(a){FD(a,16);}
function FD(a,b){a.M=B0(b);}
function Nk(a,b,c){return AAy(a,a.H,b,c);}
function AAy(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cu(a,b,b+1|0);else{Cu(a,b,b+2|0);f=a.M.data;g=b+1|0;f[b]=45;b=g;}a.M.data[b]=GV(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=T(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cu(a,b,b+i|0);if(e)e=b;else{f=a.M.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.M.data;b=e+1|0;f[e]=GV($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ABq(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BA(c,0.0);if(!d){if(1.0/c===Infinity){Cu(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cu(a,b,b+4|0);e=a.M.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cu(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cu(a,b,b+8|0);d=b;}else{Cu(a,b,b+9|0);e=a.M.data;d=b+1|0;e[b]=45;}e=a.M.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AUo;ABg(c,f);d=f.kD;g=f.kg;h=f.oh;i=1;j=1;if(h)j=2;k=9;l=AOZ(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Z(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cu(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.M.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.M.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.M.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.M.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AOZ(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function BX(a,b){return a.md(a.H,b);}
function WW(a,b,c){Cu(a,b,b+1|0);a.M.data[b]=c;return a;}
function I_(a,b){var c,d;c=a.M.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.M=I1(a.M,d);}
function S(a){return DA(a.M,0,a.H);}
function WF(a,b,c,d){return a.lI(a.H,b,c,d);}
function MT(a,b,c,d,e){var f,g,h,i;Cu(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.M.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function HY(a,b){return a.kJ(b,0,b.data.length);}
function Cu(a,b,c){var d,e,f,g;d=a.H;e=d-b|0;a.hE((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.M.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.H=a.H+(c-b|0)|0;}
var Hx=F(0);
var R=F(FW);
function K(a,b){var c;c=a.H;if(b===null)b=C(11);L7(a,c,b);return a;}
function CX(a,b){L7(a,a.H,b);return a;}
function Bl(a,b){Nk(a,b,10);return a;}
function FX(a,b){var c,d,e,f,g,h,i,j;c=a.H;d=1;if(ARZ(b,ACr)){d=0;b=ASM(b);}a:{if(HT(b,BL(10))<0){if(d)Cu(a,c,c+1|0);else{Cu(a,c,c+2|0);e=a.M.data;f=c+1|0;e[c]=45;c=f;}a.M.data[c]=GV(ZH(b),10);}else{g=1;h=BL(1);i=Lq(BL(-1),BL(10));b:{while(true){j=ALC(h,BL(10));if(HT(j,b)>0){j=h;break b;}g=g+1|0;if(HT(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cu(a,c,c+g|0);if(d)f=c;else{e=a.M.data;f=c+1|0;e[c]=45;}while(true){if(AG8(j,ACr))break a;e=a.M.data;c=f+1|0;e[f]=GV(ZH((Lq(b,j))),10);b=Yo(b,j);j=Lq(j,BL(10));f=c;}}}return a;}
function X4(a,b){BX(a,b);return a;}
function G$(a,b){L7(a,a.H,!b?C(12):C(13));return a;}
function ADj(a,b,c){var d,e,f,g,h,i;d=BA(b,c);if(d<=0){e=a.H;if(b<=e){if(d){f=e-c|0;a.H=e-(c-b|0)|0;g=0;while(g<f){h=a.M.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new GR;X(i);L(i);}
function VD(a,b){var c,d,e,f;if(b>=0){c=a.H;if(b<c){c=c-1|0;a.H=c;while(b<c){d=a.M.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new GR;X(f);L(f);}
function AJ6(a,b,c,d,e){MT(a,b,c,d,e);return a;}
function AG1(a,b,c,d){WF(a,b,c,d);return a;}
function YJ(a){return a.H;}
function Jg(a){return S(a);}
function AKd(a,b){I_(a,b);}
function AKI(a,b,c){WW(a,b,c);return a;}
function L7(a,b,c){var d,e,f;if(b>=0&&b<=a.H){a:{if(c===null)c=C(11);else if(Eu(c))break a;I_(a,a.H+H(c)|0);d=a.H-1|0;while(d>=b){a.M.data[d+H(c)|0]=a.M.data[d];d=d+(-1)|0;}a.H=a.H+H(c)|0;d=0;while(d<H(c)){e=a.M.data;f=b+1|0;e[b]=I(c,d);d=d+1|0;b=f;}}return a;}c=new GR;X(c);L(c);}
var Fo=F(GX);
var ABI=F(Fo);
function AUp(a){var b=new ABI();AF1(b,a);return b;}
function AF1(a,b){Bp(a,b);}
var Z$=F(Fo);
function AUq(a){var b=new Z$();AGd(b,a);return b;}
function AGd(a,b){Bp(a,b);}
var Bo=F(0);
function JH(b){return b;}
var RE=F(0);
var T7=F();
function AIi(a,b){var c;if(!Yk())b=$rt_globals.Promise.reject(new $rt_globals.Error("This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled"));else{c=new Uc;c.ob=b;b=new $rt_globals.Promise(Bn(c,"f"));}return b;}
var ABh=F();
var OD=F(0);
var T6=F();
function AKU(a,b,c,d){var e,f,g;e=new EU;f=ACJ(b,10);b=GP(c,null);g=AGs(f,b,ABH(d));e.ds=g;g.lg=e;e.k1=c;e.kb=d;return e;}
var AAC=F();
var SW=F(0);
var TM=F();
function AJ7(a,b){var c;if(!Yk())b=$rt_globals.Promise.reject(new $rt_globals.Error("This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled"));else{c=new Xy;c.nk=b;b=new $rt_globals.Promise(Bn(c,"f"));}return b;}
var ZB=F();
var KS=F();
var AUr=null;var AUs=null;function EW(){if(AUr===null)AUr=ALx(AUt,0);return AUr;}
function Ec(){if(AUs===null)AUs=ALx(AUu,0);return AUs;}
function ASE(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KZ(b)&&(e+f|0)<=KZ(d)){a:{b:{if(b!==d){g=HN(Bz(b));h=HN(Bz(d));if(g!==null&&h!==null){if(g===h)break b;if(!Hs(g)&&!Hs(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fJ;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ABC(n.constructor,o)?1:0)){J3(b,c,d,e,j);b=new Id;X(b);L(b);}j=j+1|0;k=m;}J3(b,c,d,e,f);return;}if(!Hs(g))break a;if(Hs(h))break b;else break a;}b=new Id;X(b);L(b);}}J3(b,c,
d,e,f);return;}b=new Id;X(b);L(b);}b=new BV;X(b);L(b);}d=new Ge;Bp(d,C(14));L(d);}
function Da(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KZ(b)&&(e+f|0)<=KZ(d)){J3(b,c,d,e,f);return;}b=new BV;X(b);L(b);}
function J3(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Eb(){return Long_fromNumber(new Date().getTime());}
var ACt=F();
var GQ=F(0);
var SU=F();
var BV=F(Bt);
var ABn=F();
function KZ(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AUv());}return b.data.length;}
function AB4(b,c){if(b===null){b=new Ge;X(b);L(b);}if(b===E($rt_voidcls())){b=new BF;X(b);L(b);}if(c>=0)return AP$(b.fJ,c);b=new XM;X(b);L(b);}
function AP$(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Ge=F(Bt);
var Id=F(Bt);
function CS(){B.call(this);this.kf=0;}
var AUw=null;var AUx=null;var AUy=null;var AUz=null;var AUA=null;var AUB=null;var AUC=null;var AUD=null;var AUE=null;var AUF=null;function AQO(a){var b=new CS();Z0(b,a);return b;}
function Z0(a,b){a.kf=b;}
function Wt(b){var c,d;c=new Bv;d=B0(1);d.data[0]=b;IM(c,d);return c;}
function LM(b){return b>=65536&&b<=1114111?1:0;}
function Cs(b){return (b&64512)!=55296?0:1;}
function CO(b){return (b&64512)!=56320?0:1;}
function WI(b){return !Cs(b)&&!CO(b)?0:1;}
function G6(b,c){return Cs(b)&&CO(c)?1:0;}
function Eg(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Kd(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Lw(b){return (56320|b&1023)&65535;}
function EH(b){return Gd(b)&65535;}
function Gd(b){if(AUz===null){if(AUC===null)AUC=ABX();AUz=AAf((AUC.value!==null?$rt_str(AUC.value):null));}return SG(AUz,b);}
function Ej(b){return F_(b)&65535;}
function F_(b){if(AUy===null){if(AUD===null)AUD=ACG();AUy=AAf((AUD.value!==null?$rt_str(AUD.value):null));}return SG(AUy,b);}
function SG(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BA(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function Ue(b,c){if(c>=2&&c<=36){b=OX(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function OX(b){var c,d,e,f,g,h,i,j,k,l;if(AUx===null){if(AUE===null)AUE=AAn();c=(AUE.value!==null?$rt_str(AUE.value):null);d=AN7(E4(c));e=Ji(d);f=Bx(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+M0(d)|0;j=j+M0(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AUx=f;}g=AUx.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BA(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function GV(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function F5(b){var c;if(b<65536){c=B0(1);c.data[0]=b&65535;return c;}return ASl([Kd(b),Lw(b)]);}
function Ch(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&WI(b&65535))return 19;if(AUA===null){if(AUF===null)AUF=ADN();d=(AUF.value!==null?$rt_str(AUF.value):null);e=P(Ne,16384);f=e.data;g=DX(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<H(d)){m=J2(I(d,l));if(m==64){l=l+1|0;m=J2(I(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|T(c,J2(I(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=J2(I(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AHR(k,k+i|0,LG(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AHR(k,k+i|0,LG(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AUA=C3(e,j);}e=AUA.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.rY)o=p+1|0;else{c=d.pV;if(b>=c)return d.qa.data[b-c|0];c=p-1|0;}}return 0;}
function I3(b){a:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function F0(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ch(b)!=16?0:1;}
function Pu(b){switch(Ch(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Q9(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Pu(b);}return 1;}
function Yl(){AUw=E($rt_charcls());AUB=P(CS,128);}
function ABX(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ACG(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AAn(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ADN(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var GR=F(BV);
var H6=F(0);
function FP(b){var c;BM(b);c=new U_;c.mL=b;return c;}
var Rn=F(0);
function Po(){var a=this;B.call(a);a.g7=null;a.bA=null;}
function Nu(a){return a.g7.d$;}
function QE(a,b){var c,d;a:{c=Nu(a);b=Ce(b);d=(-1);switch(Gj(b)){case 3075958:if(!BE(b,C(15)))break a;d=2;break a;case 102970646:if(!BE(b,C(16)))break a;d=0;break a;case 1441429116:if(!BE(b,C(17)))break a;d=1;break a;default:}}b:{switch(d){case 0:break;case 1:LX(c);break b;case 2:FU(c);break b;default:c=new R;U(c);K(K(c,C(18)),b);$rt_globals.console.info($rt_ustr(S(c)));break b;}J5(c);}}
function V3(b,c,d){var e,f,g,h,i,j,k;if(!((b?1:0)?1:0))$rt_globals.console.info("provider result is undefined");else if(!($rt_globals.Array.isArray(b)?1:0))Lj(d,C(19));else{e=P(Jk,b.length);f=e.data;g=0;h=f.length;while(g<h){i=b[g];j=new Jk;k=ABH(i.uri);j.f1=new L$;j.hd=k;XV(i.range,j.f1);f[g]=j;g=g+1|0;}c.j(e);}}
function P5(a,b){var c,d,e,f;c=a.bA;b=b-1|0;if(b>0){d=b-1|0;e=c.A;d=T(d,e);f=c.W;if(d<f)DS(c,T(b-2|0,e));else if((d-f|0)>=Cz(c))DS(c,b>Cb(c.c.f)?FN(c):T(b+1|0,c.A)-Cz(c)|0);}}
function Uo(a,b){a.bA.dx=YL(b);}
function ABj(){$rt_globals.console.info("FATAL: WebGL is not enabled in the browser");}
function AOr(a,b){var c,d;c=a.bA.cv.l2;d=new Pi;d.uV=a;d.uW=b;return FP(Fg(c,d));}
function ANk(a,b,c){var d,e;d=new Kw;e=Jm(b);b=new MR;b.uC=c;KF(d,e);d.rk=b;return FP(Fg(a.bA.cv.jT,d));}
function APN(a,b){var c,d,e;c=ACJ(b,10);b=a.bA;d=new LU;e=b.c.bT;WZ(d,c,null,e);Gl(b,d);}
function AG_(a,b){var c,d;c=a.bA;d=b.column-1|0;Cl(c,b.lineNumber-1|0,d,0);}
function AND(a){UH(a.g7);}
function AIt(a,b){P5(a,b);}
function AIp(a){return M4(Dg(a.bA.c.f));}
function AJG(a){var b;b=a.bA.c;return HE(b.r,b.o);}
function AG9(a,b){QE(a,b);}
function AMR(a,b,c){var d,e;d=new FV;e=Jm(b);b=new OF;b.rH=c;Xp(d,e,b);return FP(Fg(a.bA.cv.mz,d));}
function APo(a,b,c){var d,e;d=new JC;e=Jm(b);b=new WL;b.oS=c;KF(d,e);d.vf=b;return FP(Fg(a.bA.cv.mg,d));}
function AQp(a){return E8(a.bA.c);}
function AFf(a,b){var c;c=a.bA;b=Ce(b);return $rt_ustr(B_(c.c.jI,b));}
function AHE(a,b){var c;c=b;b=a.bA;c=c-1|0;if(c>0)DS(b,T(b.A,(c-(Cz(b)/(b.A*2|0)|0)|0)-1|0));}
function AKB(a){var b,c,d,e,f,g,h,i;b=a.g7;c=b.kY;if(c){$rt_globals.cancelAnimationFrame(c);b.kY=0;}d=$rt_globals.window;e=b.jV;d.removeEventListener("resize",Bn(e,"handleEvent"));b.l_.disconnect();f=b.e7;e=f.it;if(e!==null){e.hQ=KX(e,e.hQ);e.ju=KX(e,e.ju);e.jl=KX(e,e.jl);e.mm=0;e.ly=0;f.it=null;}Is(f.c0);f=b.hg;if(f!==null){e=f.le;if(e!==null){g=e.py.data;c=g.length;h=0;while(h<c){e=g[h];d=e.os;i=e.ou;e=e.ot;d.removeEventListener($rt_ustr(i),Bn(e,"handleEvent"));h=h+1|0;}f.le=null;}b.hg=null;}b=b.jk;c=0;while
(c<b.gm.length){b.gm[c].terminate();e=b.gm;f=null;c;e[c]=f;c=c+1|0;}}
function AGz(a,b){var c;b=Cv(b,"f");c=new ME;c.sc=b;return FP(Fg(a.bA.cv.l6,c));}
function ANe(a,b){Dx(a.bA,Ce(b),a.bA.dS);}
function AIg(a,b){var c;c=b;b=a.bA;Dx(b,b.fk,c);}
function APk(a,b){var c;if(b instanceof EU){Gl(a.bA,b.ds);return;}c=new BF;Bp(c,C(20));L(c);}
function AQA(a,b,c){var d,e,f,g;b=Ce(b);if(c===null)d=null;else{d=P(Bv,c.length);e=d.data;f=0;g=e.length;while(f<g){e[f]=Ce(c[f]);f=f+1|0;}}c=new Sk;c.rE=a;c.rF=b;c.rG=d;return new $rt_globals.Promise(Bn(c,"f"));}
function AMk(a,b,c){var d,e;d=new FV;e=Jm(b);b=new V8;b.t_=c;Xp(d,e,b);return FP(Fg(a.bA.cv.kB,d));}
function AGL(a,b){P5(a,b.lineNumber);}
function AQc(a,b){Uo(a,b);}
var Qp=F(0);
function EU(){var a=this;B.call(a);a.ds=null;a.kb=null;a.k1=null;}
function E8(b){var c;c=b.lg;if(c!==null)return c;c=new EU;c.ds=b;b.lg=c;c.kb=null;c.k1=null;return c;}
function AQ3(a){var b;b=a.kb;if(b===null)b=J_(a.ds.bT);return b;}
function AJ0(a){var b;b=a.ds.f;FJ(b.f6);DJ(b.cX);DJ(b.cM);b.iN=0;b.b1=0;b.cK=Xx(b);}
function ALE(a){var b;b=a.k1;if(b===null)b=$rt_ustr(a.ds.i8);return b;}
function AQQ(a,b){var c;c=b;return AED(Pk(a.ds.f,c));}
function AMd(a){return M4(Dg(a.ds.f));}
function AEF(a,b){var c,d,e,f,g,h;c=a.ds.f;d=b.lineNumber-1|0;e=b.column-1|0;f=0;g=0;a:{while(g<d){h=c.x.data;f=f+h[g].z|0;g=g+1|0;if(g>=h.length)break a;f=f+1|0;}}return f+e|0;}
var Sm=F(0);
function VC(){var a=this;B.call(a);a.dj=null;a.p_=null;}
function PE(a,b){var c,d;a:{c=Ce(b);d=(-1);switch(Gj(c)){case 3075958:if(!BE(c,C(15)))break a;d=2;break a;case 102970646:if(!BE(c,C(16)))break a;d=0;break a;case 1441429116:if(!BE(c,C(17)))break a;d=1;break a;default:}}b:{switch(d){case 0:break;case 1:LX(a.dj);break b;case 2:FU(a.dj);break b;default:$rt_globals.console.info("unknown theme: "+b);break b;}J5(a.dj);}}
function P7(a,b){var c,d;c=a.dj;d=YL(b);c.w.dx=d;c.v.dx=d;}
function APX(a){return E8(a.dj.v.c);}
function AMx(a){UH(a.p_);}
function ALp(a,b){var c;if(!(b instanceof EU)){c=new BF;Bp(c,C(20));L(c);}c=a.dj;b=b.ds;Gl(c.v,b);}
function AGJ(a,b){var c,d;c=a.dj;b=Ce(b);d=c.w;Dx(d,b,d.dS);c=c.v;Dx(c,b,c.dS);}
function AHK(a,b){PE(a,b);}
function AOM(a,b){var c,d;c=b;b=a.dj;d=b.w;Dx(d,d.fk,c);b=b.v;Dx(b,b.fk,c);}
function ALn(a,b){var c;if(!(b instanceof EU)){c=new BF;Bp(c,C(20));L(c);}c=a.dj;b=b.ds;Gl(c.w,b);}
function AIC(a){return E8(a.dj.w.c);}
function AHq(a,b){P7(a,b);}
var Ti=F(0);
var CV=F(0);
function AQh(b){var c;c=new Qo;c.py=b;return c;}
function C5(b,c){if(b!==null)b.eX();return c;}
var OS=F(0);
function H8(){var a=this;B.call(a);a.j4=0;a.lR=0;a.k0=0;}
var AUG=0;function Is(a){AUG=AUG-1|0;}
function Kc(a,b,c){return GE(a,b)+c|0;}
function Rv(){var a=this;H8.call(a);a.hJ=null;a.dh=null;a.m5=null;}
function Fw(a){var b,c,d;b=a.dh;c=a.lR;d=a.k0;b.clearRect(0.0,0.0,c,d);}
function R4(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.dh;d="center";c.textAlign=d;break a;case 2:c=a.dh;d="right";c.textAlign=d;break a;default:break a;}d=a.dh;c="left";d.textAlign=c;}}
function CM(a,b){M2(a,b.nC);}
function M2(a,b){var c;if(a.m5!==b){c=a.dh;a.m5=b;c.font=b;}}
function Ev(a,b,c,d){var e,f,g;e=a.dh;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function GE(a,b){var c;c=$rt_ustr(b);return a.dh.measureText(c).width;}
function Yk(){var b;b=(Yy()).getContext("2d").measureText("");return ("fontBoundingBoxAscent" in b?1:0)&&("fontBoundingBoxDescent" in b?1:0)?1:0;}
function AFs(){return {alpha:false};}
var AAw=F();
var Ht=F(0);
function Uc(){B.call(this);this.ob=null;}
function AH9(a,b,c){var d,e;b=Cv(b,"f");c=Cv(c,"f");d=a.ob;e=new Ps;e.oe=b;e.of=d;Za(e,c,ABG(d),X9(d));}
var ABo=F(0);
function ACJ(b,c){var d,e,f,g,h,i,j,k,l,m;d=P(Bv,8);e=B0(16);f=0;g=0;h=b.length;i=0;while(true){j=BA(i,h);if(j>0)break;k=j>=0?c:b.charCodeAt(i)&65535;if(k==c){l=DA(e,0,f);k=g+1|0;d=UX(l,d,g);f=0;}else{j=e.data.length;if(j==f)e=I1(e,j*2|0);m=e.data;j=f+1|0;m[f]=k;k=g;f=j;}i=i+1|0;g=k;}return O_(d,g);}
var ZQ=F();
function Yy(){return (Ff()).createElement("canvas");}
function GP(b,c){if((b?1:0)?1:0)c=Ce(b);return c;}
function AMq(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
function LU(){var a=this;B.call(a);a.bT=null;a.f=null;a.lg=null;a.i8=null;a.o0=null;a.gf=null;a.ik=null;a.dn=null;a.qw=null;a.o=0;a.r=0;a.gU=0;a.ho=null;a.fZ=null;a.jI=null;a.kX=null;a.ed=0;a.gh=0;a.gy=0;a.hy=ACr;a.tw=ACr;a.uP=ACr;a.mX=0;a.xk=0;a.c8=0;a.hV=0.0;}
function AGs(a,b,c){var d=new LU();WZ(d,a,b,c);return d;}
function WZ(a,b,c,d){var e,f,g,h,i;e=b.data;a.o0=AFm();f=new TS;f.eu=P(Kr,16);f.ep=0;f.db=(-1);a.gf=f;a.ho=null;a.fZ=BB();a.jI=Kf();a.kX=BB();a.ed=1;a.gh=1;a.gy=1;a.c8=0;a.hV=0.0;a.bT=d;a.i8=c;c=new Rt;g=e.length;b=P(CQ,Z(1,g));if(!g)b.data[0]=YV(C(3));h=b.data;i=0;while(i<g){h[i]=YV(e[i]);i=i+1|0;}d=new Pl;f=new Ko;PJ(f);d.eb=f;c.dY=d;c.cX=Kf();c.cM=Kf();c.f6=BB();if(h.length){c.x=b;c.cK=Xx(c);a.f=c;return;}c=new BF;X(c);L(c);}
function DU(a){var b;b=a.i8;if(b===null){b=a.bT;if(b===null)b=C(21);else{b=b.eK;b=b===null?C(21):!DH(b,C(22))&&!DH(b,C(23))&&!DH(b,C(24))&&!DH(b,C(25))&&!DH(b,C(26))&&!DH(b,C(27))?(DH(b,C(28))?C(29):DH(b,C(30))?C(31):!DH(b,C(32))?C(21):C(33)):C(34);}}return b;}
function FM(a){var b;b=a.bT;return b===null?null:b.gY;}
function GS(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.gh=3;a.gy=3;a.ed=3;c=CF(b[0]);d=Eh(b[1]);if((CF(b[2])).data[0]==4){e=G3(Eh(b[3]));Ed(a.jI,C(35),e);K8(a.f,c,d);}else if(b.length<5)K8(a.f,c,d);else{f=CF(b[3]);g=f.data;h=Eh(b[4]);NW(a.f,c,d,f,h,0);Ud(a,Ir(f,g.length),LF(h));}e=DQ(a.bT);i=JT(Eb(),a.hy);j=new R;U(j);K(FX(K(K(j,e),C(36)),i),C(37));$rt_globals.console.info($rt_ustr(S(j)));e=a.ik;if(e!==null)UW(e);}
function Kv(a){var b;Sy(a,Dp(a.o,a.r),GA(a.f,a.o,a.r));if(!(a.ho!==null&&!DG(a.fZ))){b=a.r;if(b>0)Sy(a,Dp(a.o,b-1|0),GA(a.f,a.o,a.r-1|0));}}
function Sy(a,b,c){var d,e,f,g,h,i,j,k,l;L4(a);d=B_(a.f.cX,c);if(d!==null)c=d;a:{e=B_(a.f.cM,c);if(e!==null){a.ho=Lf(a.f,c);c=BO(e);while(true){if(!BP(c))break a;f=BS(c);Bw(a.fZ,Lf(a.f,f));}}}c=a.ik;if(c!==null){g=b.V;h=b.bd;b=c.cv;f=DU(c.c);e=FM(c.c);i=(Cf(b.mg)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(Jy(b,f,e)){b=b.vf;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.c;e=new Sq;e.th=c;e.tf=f;e.tj=g;e.ti=h;c=c.hK;b=b.oS;f=E8(f);d=HE(h,g);l=JF();b=b.provideDocumentHighlights(f,d,l);f=new SY;f.sh=e;f.sg=c;LV(b,
f,c);}}}
function L4(a){a.ho=null;FJ(a.fZ);}
function Ud(a,b,c){var d,e,f,g,h;if(a.dn!==null){a.uP=Eb();d=a.f.b1;e=a.dn;f=new PB;f.mO=a;g=P(B,3);h=g.data;h[0]=b;h[1]=c;b=Bx(1);b.data[0]=d;h[2]=b;D9(e,f,C(38),g);}}
function P2(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.ik=b;a.dn=c;if(c!==null&&a.ed==1){a.hy=Eb();b=DU(a);d=BK(b,C(29));e=BK(b,C(33));f=Dg(a.f);g=f.data.length;h=!d?5120:10240;i=X8(b);if(e){c=a.dn;j=new MP;j.tW=a;k=P(B,2);l=k.data;l[0]=f;f=Bx(1);f.data[0]=i;l[1]=f;Lx(c,j,0,C(39),k);a.ed=2;}else if(g<=h)J0(a,f,i);else if(!d){Wu(a,LF(f),i);J0(a,f,i);}else{Wu(a,LF(f),i);k=LF(f);c=a.dn;j=new SK;j.s5=a;l=P(B,2);m=l.data;m[0]=k;k=Bx(1);k.data[0]=i;m[1]=k;D9(c,j,C(40),l);a.gh=2;J0(a,f,i);}}}
function Wu(a,b,c){var d,e;d=a.dn;e=new OJ;e.o3=a;D9(d,e,C(41),G(B,[b,FK([c,250])]));a.gy=2;}
function J0(a,b,c){var d,e,f,g;d=a.dn;e=new Wg;e.uz=a;f=P(B,2);g=f.data;g[0]=b;b=Bx(1);b.data[0]=c;g[1]=b;D9(d,e,C(39),f);a.ed=2;}
function In(a){var b,c,d,e,f,g;b=DQ(a.bT);c=new R;U(c);K(K(c,b),C(42));$rt_globals.console.info($rt_ustr(S(c)));b=DU(a);if(b===null)d=null;else{a:{e=(-1);switch(Gj(b)){case -1655966961:if(!BE(b,C(33)))break a;e=3;break a;case 3401:if(!BE(b,C(31)))break a;e=2;break a;case 98723:if(!BE(b,C(34)))break a;e=1;break a;case 3254818:if(!BE(b,C(29)))break a;e=0;break a;case 3556653:if(!BE(b,C(21)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(43);break b;case 2:d=C(44);break b;case 3:d=C(45);break b;case 4:d
=C(46);break b;default:d=null;break b;}d=C(47);}}if(d===null)UW(a.ik);else{a.hy=Eb();if(!BE(d,C(45))){b=a.dn;f=new RZ;f.tF=a;g=P(B,1);g.data[0]=Dg(a.f);D9(b,f,d,g);}else{b=a.dn;f=new R0;f.qd=a;g=P(B,1);g.data[0]=Dg(a.f);Lx(b,f,0,d,g);}}}
function ACi(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=DQ(a.bT);c=new R;U(c);K(K(c,b),C(48));$rt_globals.console.info($rt_ustr(S(c)));b=DU(a);if(b!==null&&!BE(C(21),b)){if(BE(C(33),b)){In(a);G8(a.f);}else{c=a.f.cK;d=Pv(c,c.cU);if(d===null){LE(a);G8(a.f);return;}e=FK([CT(d),CR(d),d.bJ.eE]);f=Dg(a.f);g=Bx(1);g.data[0]=X8(b);c=a.f.dY;if(c.ft===null){h=Bx(0);i=B0(0);}else{j=AQY(AGn(d.cf,c.eb),d);Nm(j);h=j.jW;i=j.kc;}k=a.f.b1;d=a.dn;c=new UV;c.pJ=a;l=P(B,6);m=l.data;m[0]=f;m[1]=g;m[2]=e;e=Bx(1);e.data[0]=k;m[3]=e;m[4]=h;m[5]
=i;D9(d,c,C(49),l);}}else G8(a.f);}
function LE(a){var b;b=AQY(a.f.dY,null);Nm(b);Ud(a,b.jW,b.kc);}
var Yj=F();
function J_(b){var c,d,e;if(b===null)return null;c=b.uJ;if(c!==null)return c;c=b.gY;d=b.ie;e=b.eK;b=b;return APC($rt_ustr(c),$rt_ustr(d),$rt_ustr(e),b);}
function ABH(b){var c;if(!((b?1:0)?1:0))return null;c=b.javaPeer;if(c instanceof Le)return c;return ARU(GP(b.scheme,null),GP(b.authority,null),GP(b.path,null),b);}
function APC(b,c,d,e){return {scheme:b,authority:c,path:d,javaPeer:e};}
function Xy(){B.call(this);this.nk=null;}
function AH2(a,b,c){var d,e;b=Cv(b,"f");c=Cv(c,"f");d=a.nk;e=new QM;e.u6=b;e.u7=d;Za(e,c,ABG(d),X9(d));}
var ADU=F();
var ACv=F(0);
function Vd(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C3(b,f+g|0);Da(c,0,d,f,g);return d;}
function Ks(b,c,d){Da(b,c,d,0,d.data.length);return d;}
function Rj(b,c,d){var e;if(c>0)Da(b,0,d,0,c);e=d.data.length;if(c<e)Da(b,c+1|0,d,c,e-c|0);return d;}
function AAd(b,c,d,e){var f;if(c>0)Da(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Da(b,d,e,c,f-d|0);}return e;}
function GW(b){var c;c=new Vn;c.rU=b;return c;}
function O_(b,c){if(b.data.length!=c)b=C3(b,c);return b;}
function UX(b,c,d){var e;e=c.data.length;if(e==d)c=C3(c,e*2|0);c.data[d]=b;return c;}
function Ux(b,c,d){var e;e=c.data.length;if(e==d)c=LG(c,e*2|0);c.data[d]=b;return c;}
function LF(b){return I1(b,b.data.length);}
var YB=F();
function I1(b,c){var d,e,f,g;b=b.data;d=B0(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function LG(b,c){var d,e,f,g;b=b.data;d=DX(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Ir(b,c){var d,e,f,g;b=b.data;d=Bx(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C3(b,c){var d,e,f,g;d=b.data;e=AB4(HN(Bz(b)),c);f=Ba(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Zq(b){var c,d,e;if(b===null)return C(11);c=new R;U(c);CX(c,C(50));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)CX(c,C(51));K(c,e[d]);d=d+1|0;}CX(c,C(52));return S(c);}
function G_(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BF;X(f);L(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Y5(b,c,d,e){var f,g;if(c>d){e=new BF;X(e);L(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ZM(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AUH;e=P(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Ba(j,h+f|0);l=h+(2*f|0)|0;m=Ba(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.vG(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ABr(b,c){return Tw(b,0,b.data.length,c);}
function Tw(b,c,d,e){var f,g,h,i,j;f=BA(c,d);if(f>0){g=new BF;X(g);L(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var ACM=F();
function Ce(b){return $rt_str(b);}
function Le(){var a=this;B.call(a);a.gY=null;a.ie=null;a.eK=null;a.uJ=null;}
function ARU(a,b,c,d){var e=new Le();Yf(e,a,b,c,d);return e;}
function Yf(a,b,c,d,e){a.gY=b;a.ie=c;a.eK=d;a.uJ=e;}
function DQ(a){var b,c;b=a.eK;if(b===null)return C(3);c=AAl(b,C(53));return c==(-1)?a.eK:D3(a.eK,c+1|0);}
function AGu(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return BK(a.gY,c.gY)&&BK(a.ie,c.ie)&&BK(a.eK,c.eK)?1:0;}return 0;}
function AC2(){var a=this;B.call(a);a.bB=null;a.bt=null;a.c2=0;}
function AFm(){var a=new AC2();AQN(a);return a;}
function AGy(a){var b=new AC2();ALO(b,a);return b;}
function AQN(a){a.bB=new GD;a.bt=new GD;}
function ALO(a,b){a.bB=new GD;a.bt=new GD;HA(a,b);}
function HA(a,b){T4(a.bB,b.bB);T4(a.bt,b.bt);a.c2=b.c2;}
function KY(a,b,c){B1(a.bt,b,c);if(!a.c2)B1(a.bB,b,c);}
function PC(a,b){B1(a.bB,b,0);B1(a.bt,b+1|0,0);}
function Dy(a){if(Rz(a.bB,a.bt)>0)return a.bt;return a.bB;}
function Fb(a){if(Rz(a.bB,a.bt)<0)return a.bt;return a.bB;}
function ABz(a,b){var c,d,e,f;c=Dy(a);d=Fb(a);e=c.K;if(e<=b){f=BA(b,d.K);if(f<=0)return Cg(b<=e?c.U:0,f>=0?d.U:(-1));}return null;}
function C4(a){var b,c;b=a.bB;c=a.bt;return (b===c?1:c!==null&&Bz(b)===Bz(c)?(b.K==c.K&&b.U==c.U?1:0):0)?0:1;}
function ACD(a,b){var c,d;if(!C4(a))return 0;c=Dy(a);d=Fb(a);return c.K<=b&&b<d.K?1:0;}
function TS(){var a=this;B.call(a);a.eu=null;a.ep=0;a.db=0;}
function Vb(a,b){var c,d,e;c=a.ep;d=a.eu;if(c==d.data.length)a.eu=C3(d,c+16|0);d=a.eu.data;e=a.ep;a.ep=e+1|0;d[e]=b;}
function RB(a){var b,c,d;b=a.db;c=a.ep-1|0;if(b==c)a.db=b-1|0;d=a.eu.data;a.ep=c;d[c]=null;}
var VE=F(0);
function AD0(a,b){var c;c=a.bX();while(c.ce()){b.j(c.bP());}}
var FH=F(0);
function UB(a){var b,c;b=new Si;c=new Qc;c.pT=a;b.tT=c;return b;}
function AJP(a,b){var c,d;c=a.bX();d=0;while(c.ce()){if(b.co(c.bP())){c.kW();d=1;}}return d;}
var EA=F();
function DG(a){return a.cA()?0:1;}
function Ho(a,b){var c,d,e,f,g,h;c=b.data;d=a.k;e=c.length;if(e<d)b=AB4(HN(Bz(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BO(a);while(BP(f)){g=b.data;h=e+1|0;g[e]=BS(f);e=h;}return b;}
function AOl(a,b){var c;c=a.bX();while(c.ce()){if(BK(c.bP(),b)){c.kW();return 1;}}return 0;}
function Gm(a,b){var c,d;c=0;d=b.bX();while(d.ce()){if(!a.sv(d.bP()))continue;c=1;}return c;}
var J8=F(0);
var II=F(0);
function El(){EA.call(this);this.bN=0;}
function ANF(a,b){a.mA(a.cA(),b);return 1;}
function BO(a){var b;b=new Nq;b.gI=a;b.mj=a.bN;b.iE=a.cA();b.f2=(-1);return b;}
function AMJ(a,b,c){var d,e;if(b>=0&&b<=a.cA()){if(c.dQ())return 0;d=c.bX();while(d.ce()){e=b+1|0;a.mA(b,d.bP());b=e;}return 1;}c=new BF;X(c);L(c);}
function APf(a,b,c){c=new D1;X(c);L(c);}
function JL(a,b){var c,d;c=a.cA();d=0;while(true){if(d>=c)return (-1);if(BK(b,a.lv(d)))break;d=d+1|0;}return d;}
function ALz(a,b){var c,d;if(!H$(b,II))return 0;c=b;if(a.k!=c.k)return 0;d=0;while(d<c.k){if(!BK(Bs(a,d),Bs(c,d)))return 0;d=d+1|0;}return 1;}
var DP=F(0);
var KR=F(0);
function YF(){var a=this;El.call(a);a.ck=null;a.k=0;}
function BB(){var a=new YF();AH4(a);return a;}
function AH4(a){a.ck=P(B,10);}
function IT(a,b){var c,d;c=a.ck.data.length;if(c<b){d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.ck=C3(a.ck,d);}}
function Bs(a,b){IG(a,b);return a.ck.data[b];}
function AMt(a){return a.k;}
function Bw(a,b){var c,d;IT(a,a.k+1|0);c=a.ck.data;d=a.k;a.k=d+1|0;c[d]=b;a.bN=a.bN+1|0;return 1;}
function Rw(a,b,c){var d,e,f;Ph(a,b);IT(a,a.k+1|0);d=a.k;e=d;while(e>b){f=a.ck.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.ck.data[b]=c;a.k=d+1|0;a.bN=a.bN+1|0;}
function Fl(a,b){var c,d,e,f;IG(a,b);c=a.ck.data;d=c[b];e=a.k-1|0;a.k=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.bN=a.bN+1|0;return d;}
function Vm(a,b){var c;c=JL(a,b);if(c<0)return 0;Fl(a,c);return 1;}
function FJ(a){Y5(a.ck,0,a.k,null);a.k=0;a.bN=a.bN+1|0;}
function Y6(a,b,c){var d,e,f,g,h,i;Ph(a,b);if(c.dQ())return 0;IT(a,a.k+c.cA()|0);d=c.cA();e=a.k;f=e-1|0;while(f>=b){g=a.ck.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.k=e+d|0;h=c.bX();i=0;while(i<d){g=a.ck.data;e=b+1|0;g[b]=h.bP();i=i+1|0;b=e;}a.bN=a.bN+1|0;return 1;}
function IG(a,b){var c;if(b>=0&&b<a.k)return;c=new BV;X(c);L(c);}
function Ph(a,b){var c;if(b>=0&&b<=a.k)return;c=new BV;X(c);L(c);}
function DY(a,b){var c;c=0;while(c<a.k){b.j(a.ck.data[c]);c=c+1|0;}}
var Ku=F(0);
function DB(){var a=this;B.call(a);a.ki=null;a.kt=null;}
function JZ(){var a=this;DB.call(a);a.cz=0;a.bW=null;a.cx=0;a.wj=0.0;a.kR=0;}
function Kf(){var a=new JZ();PJ(a);return a;}
function AIA(a,b){return P(Gf,b);}
function PJ(a){var b;b=ADn(16);a.cz=0;a.bW=P(Gf,b);a.wj=0.75;Uh(a);}
function ADn(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function DJ(a){var b;if(a.cz>0){a.cz=0;b=a.bW;Y5(b,0,b.data.length,null);a.cx=a.cx+1|0;}}
function Uh(a){a.kR=a.bW.data.length*a.wj|0;}
function I7(a,b){return S0(a,b)===null?0:1;}
function UC(a){var b;b=new Ui;b.rp=a;return b;}
function B_(a,b){var c;c=S0(a,b);if(c===null)return null;return c.cE;}
function S0(a,b){var c,d;if(b===null)c=R$(a);else{d=b.lX();c=Ql(a,b,d&(a.bW.data.length-1|0),d);}return c;}
function Ql(a,b,c,d){var e;e=a.bW.data[c];while(e!==null&&!(e.iY==d&&Yt(b,e.cn))){e=e.cu;}return e;}
function R$(a){var b;b=a.bW.data[0];while(b!==null&&b.cn!==null){b=b.cu;}return b;}
function Jq(a){var b;if(a.ki===null){b=new O8;b.gJ=a;a.ki=b;}return a.ki;}
function Ed(a,b,c){var d,e,f,g;if(b===null){d=R$(a);if(d===null){a.cx=a.cx+1|0;d=T8(a,null,0,0);e=a.cz+1|0;a.cz=e;if(e>a.kR)Up(a);}}else{e=b.lX();f=e&(a.bW.data.length-1|0);d=Ql(a,b,f,e);if(d===null){a.cx=a.cx+1|0;d=T8(a,b,f,e);e=a.cz+1|0;a.cz=e;if(e>a.kR)Up(a);}}g=d.cE;d.cE=c;return g;}
function T8(a,b,c,d){var e,f;e=new Gf;Xu(e,b,null);e.iY=d;f=a.bW.data;e.cu=f[c];f[c]=e;return e;}
function Z8(a,b){var c,d,e,f,g,h,i,j;c=ADn(!b?1:b<<1);d=P(Gf,c);e=d.data;f=0;b=c-1|0;while(true){g=a.bW.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.iY&b;j=h.cu;h.cu=e[i];e[i]=h;h=j;}f=f+1|0;}a.bW=d;Uh(a);}
function Up(a){Z8(a,a.bW.data.length);}
function Yt(b,c){return b!==c&&!b.bu(c)?0:1;}
function Rt(){var a=this;B.call(a);a.x=null;a.cK=null;a.dY=null;a.cX=null;a.cM=null;a.f6=null;a.g2=null;a.b1=0;a.iN=0;a.sQ=0.0;}
function Xx(a){var b;b=UO(a);return ACp(APU(Jd(0,b,0),null,null));}
function BG(a,b){return a.x.data[b];}
function Cb(a){return a.x.data.length;}
function UO(a){return EB(a,Cb(a));}
function Fn(a,b){return a.x.data[b].z;}
function ACO(a,b,c){var d,e,f,g,h;d=a.x;e=d.data;f=e[b];d=C3(d,e.length+1|0);e=d.data;a.x=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Dq(P(B$,0));a.x.data[b+1|0]=f;}else if(c==f.z){e[b]=f;e[b+1|0]=Dq(P(B$,0));}else{e=(Hw(f,c)).data;d=a.x.data;d[b]=e[0];d[b+1|0]=e[1];}Fa(a,b,c,0,C(54));}
function KG(a,b){var c,d,e,f,g,h,i;c=a.x.data;d=c[b];e=c[b+1|0];f=Dq(Vd(d.l,e.l));g=a.x;h=g.data.length;if(b<h&&b>=0){i=P(CQ,h-1|0);c=i.data;Rj(g,b,i);c[b]=f;a.x=i;return;}d=new Bt;X(d);L(d);}
function MH(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.x.data;if(!(c<d[b].z?0:1)){d=(BG(a,b)).l.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<H(h.q)){f=I(h.q,g);break a;}g=g-H(h.q)|0;f=f+1|0;}f=0;}F9();h=new Bv;d=B0(1);d.data[0]=f;IM(h,d);Fa(a,b,c,1,h);h=a.x.data[b];i=h.l;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=H(d[j].q);if(c<b)break;c=c-b|0;j=j+1|0;}}if(H(d[j].q)==1)h.l=Rj(i,j,P(B$,e-1|0));else{k=d[j];if(c<=0)l=Dz(D3(k.q,1),k.bY,k.bH);else if(c>=(H(k.q)-1|0)){l=new B$;m=k.q;Tp(l,B9(m,0,H(m)-
1|0),k.bY,k.bH);}else{i=B0(H(k.q)-1|0);n=i.data;b=0;while(b<c){n[b]=I(k.q,b);b=b+1|0;}b=n.length;while(c<b){m=k.q;e=c+1|0;n[c]=I(m,e);c=e;}l=Dz(G3(i),k.bY,k.bH);}d[j]=l;}h.z=h.z-1|0;D_(h);}else if(b!=(d.length-1|0)){Fa(a,b,c,1,C(54));KG(a,b);}}
function XE(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Sb(a.x.data[b],c,e[0]);return;}g=f-1|0;d=(Hw(a.x.data[b],c)).data;h=d[0];i=d[1];d=a.x;j=C3(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.l.data;f=l.length;c=!f?0:H(l[f-1|0].q);Mc(h,h.l.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Eu(e[m])?YV(e[m]):Dq(P(B$,0));d[b+m|0]=k;m=m+1|0;}Mc(i,0,0,e[g]);d[b+g|0]=i;a.x=j;}
function VA(a,b){var c,d,e,f,g,h,i;c=Dy(b);d=Fb(b);e=c.K;if(e==d.K)return B9(EJ(a.x.data[e]),c.U,d.U);f=new R;U(f);b=a.x.data[c.K];e=c.U;BX(CX(f,D3(EJ(b),e)),10);g=a.x.data;e=c.K+1|0;h=d.K;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;X4(CX(f,EJ(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.x.data[d.K];h=d.U;CX(f,B9(EJ(b),0,h));return S(f);}b=new V2;X(b);L(b);}
function MU(a,b,c){var d;VU(a,b);d=Dy(b);Fa(a,d.K,d.U,1,c);}
function VU(a,b){var c,d,e,f,g,h,i;a:{c=Dy(b);d=Fb(b);e=c.K;if(e==d.K)FY(a.x.data[e],c.U,d.U);else{b=a.x.data[e];FY(b,c.U,b.z);FY(a.x.data[d.K],0,d.U);e=c.K+1|0;f=d.K;g=a.x;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=P(CQ,(h-f|0)+e|0);AAd(g,e,f,i);a.x=i;KG(a,c.K);break a;}b=new Bt;X(b);L(b);}b=new Bt;X(b);L(b);}}}
function GA(a,b,c){return Dp(b,FB(BG(a,b),c));}
function Wo(a,b){var c,d,e;c=0;d=0;while(true){e=a.x.data.length;if(c>=e)break;if((d+(BG(a,c)).z|0)>=b)return Cg(c,b-d|0);d=d+((BG(a,c)).z+1|0)|0;c=c+1|0;}return Cg(e,0);}
function EB(a,b){var c,d,e;c=0;d=a.x.data.length;e=0;while(e<b){c=c+Fn(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Lf(a,b){return Ly(BG(a,b.V),b.bd);}
function Dg(a){var b,c,d,e,f,g,h,i,j;b=B0(UO(a));c=b.data;d=a.x.data.length;e=0;f=0;while(e<d){g=a.x.data[e].l.data;h=g.length;i=0;while(i<h){j=g[i].q;PV(j,0,H(j),b,f);f=f+H(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Fa(a,b,c,d,e){var f,g,h,i,j,k;a:{a.b1=a.b1+1|0;f=a.f6;g=P(Gr,1);h=new Gr;h.dJ=b;h.dV=c;i=LH(e,C(54),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=Cg(b,c+H(i[0])|0);break a;}k=Cg((b+j|0)-1|0,H(i[j-1|0]));break a;}}k=Cg(b,c);}i=g.data;h.k4=k;h.ma=d;h.fq=e;i[0]=h;Bw(f,g);JE(a,b,c,d,e);}
function JE(a,b,c,d,e){var f;f=EB(a,b)+c|0;if(!d){Os(a.cK,f,H(e));Ua(a.dY,f,H(e));}else{V5(a.cK,f,H(e));Nh(a.dY,f,H(e));}}
function M$(a,b){var c,d,e;c=LH(b.fq,C(54),(-1));if(b.ma){XE(a,b.dJ,b.dV,c);Os(a.cK,EB(a,b.dJ)+b.dV|0,H(b.fq));Ua(a.dY,EB(a,b.dJ)+b.dV|0,H(b.fq));}else{c=c.data;d=AFm();B1(d.bB,b.dJ,b.dV);e=c.length;if(e==1)B1(d.bt,b.dJ,b.dV+H(c[0])|0);else B1(d.bt,(b.dJ+e|0)-1|0,H(c[e-1|0]));VU(a,d);V5(a.cK,EB(a,b.dJ)+b.dV|0,H(b.fq));Nh(a.dY,EB(a,b.dJ)+b.dV|0,H(b.fq));}return b.k4;}
function TB(a){return a.iN==a.b1?0:1;}
function G8(a){a.iN=a.b1;}
function Pk(a,b){var c,d,e,f,g;c=0;d=0;while(true){e=a.x.data;f=e.length;if(d>=f)break;g=e[d].z;if(b<=(c+g|0))return Dp(d,b-c|0);c=c+(g+1|0)|0;d=d+1|0;}return Dp(f,0);}
function Pp(a){var b,c,d;a.g2=Bx(a.x.data.length+1|0);b=0;while(b<a.x.data.length){c=a.g2.data;d=b+1|0;c[d]=(c[b]+(BG(a,b)).z|0)+1|0;b=d;}}
function Xe(a,b){var c,d,e;c=a.g2;if(c===null)return Pk(a,b);d=ABr(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;e=Dp(d,b-(d<0?0:a.g2.data[d])|0);if(e.bd>=(BG(a,e.V)).z){e.V=e.V+1|0;e.bd=0;}return e;}
var Mj=F(0);
var SF=F(0);
var D6=F(0);
var Yq=F();
function Ff(){return $rt_globals.window.document;}
function ALN(a){return a.EV();}
function AOQ(a,b){return a.HE($rt_str(b));}
function AOy(a,b){a.C$($rt_str(b));}
function AGA(a,b){return a.BQ($rt_str(b));}
function AEl(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AGV(a){return a.HI();}
function AOJ(a,b,c){return a.F6($rt_str(b),$rt_str(c));}
function AJN(a,b,c,d){a.xx($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function AFh(a){return a.DT();}
function AMS(a){return !!a.Ig();}
function APz(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function ALh(a){return a.DE();}
function AJi(a,b){a.FU($rt_str(b));}
function ALP(a){return !!a.CM();}
function ARb(a){return a.HS();}
function AKw(a){return $rt_ustr(a.ze());}
function AE8(a,b){return a.D_(b?1:0);}
function AQH(a){return a.If();}
function AJf(a,b,c){return a.IR($rt_str(b),$rt_str(c));}
function AK$(a,b,c){return a.CJ(b,c?1:0);}
function AQb(a,b,c){return !!a.G_($rt_str(b),$rt_str(c));}
function AEp(a){return a.FH();}
function AIZ(a){return $rt_ustr(a.JC());}
function AG6(a,b){return !!a.xS(b);}
function AH$(a,b){return a.Kx($rt_str(b));}
function AJw(a,b,c){return a.ES($rt_str(b),$rt_str(c));}
function AKC(a){return a.Af();}
function AFj(a,b){return a.HP($rt_str(b));}
function AH8(a){return $rt_ustr(a.zw());}
function ANl(a){a.CD();}
function AD8(a,b){return a.IW($rt_str(b));}
function APp(a,b){return a.Dm($rt_str(b));}
function AFJ(a,b){return a.CC($rt_str(b));}
function APr(a){return $rt_ustr(a.Ay());}
function AFU(a,b,c){return a.E0(b,c);}
function AM9(a,b){return a.zd(b);}
function ANV(a){return a.GN();}
function AMi(a,b,c){a.xe($rt_str(b),Cv(c,"handleEvent"));}
function ALY(a,b,c){return a.Az(b,c);}
function APi(a){return !!a.G7();}
function AQM(a,b){return a.EL($rt_str(b));}
function AL1(a,b,c,d){a.wL($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function AGX(a){return a.GS();}
function AGb(a,b,c){return a.D9($rt_str(b),$rt_str(c));}
function AER(a){return $rt_ustr(a.AZ());}
function AQC(a){return a.z0();}
function AMh(a){return a.Al();}
function AEO(a){return a.Ha();}
function AMj(a,b,c){a.xP($rt_str(b),Cv(c,"handleEvent"));}
function AGM(a,b){return a.Jm(b);}
function AIs(a,b){a.zB($rt_str(b));}
function AN3(a){return $rt_ustr(a.zl());}
var AAv=F();
function Ys(b){return Math.log(b);}
function ADT(b,c){return AK1(b,c);}
function AK1(b,c){return Math.pow(b,c);}
function Ba(b,c){if(b<c)c=b;return c;}
function Z(b,c){if(b>c)c=b;return c;}
function AQe(b,c){return Math.max(b,c);}
function GD(){var a=this;B.call(a);a.K=0;a.U=0;}
function B1(a,b,c){a.K=b;a.U=c;}
function T4(a,b){a.K=b.K;a.U=b.U;}
function Rz(a,b){var c;c=BA(a.K,b.K);if(c)return c;return BA(a.U,b.U);}
function Kr(){var a=this;B.call(a);a.la=null;a.jO=null;}
function Lm(a){return a.la.V;}
function Jc(a){return a.la.bd;}
function CQ(){var a=this;B.call(a);a.l=null;a.z=0;a.fm=null;a.ef=null;a.dd=null;a.gE=null;a.fB=0;a.gG=0;a.g6=0;}
var AUI=0;var AUJ=0;var AUK=0;function YV(a){var b=new CQ();ABT(b,a);return b;}
function Dq(a){var b=new CQ();QN(b,a);return b;}
function ABT(a,b){var c;c=P(B$,1);c.data[0]=ZF(b);QN(a,c);}
function QN(a,b){var c,d,e,f;c=b.data;a.l=b;d=0;e=c.length;f=0;while(f<e){d=d+H(c[f].q)|0;f=f+1|0;}a.z=d;D_(a);}
function G5(a){return a.l.data.length;}
function KB(a,b){return a.l.data[b];}
function FB(a,b){return RD(a,GO(a,b));}
function RD(a,b){return b<=0?0:a.dd.data[b-1|0];}
function GO(a,b){var c,d,e,f;c=a.l.data.length;if(!c)return (-1);if(!(a.dd!==null&&!a.g6)){Wp(a);d=0;e=0;f=a.l.data.length;while(d<f){e=e+H(a.l.data[d].q)|0;a.dd.data[d]=e;d=d+1|0;}a.g6=0;}d=Tw(a.dd,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Ly(a,b){var c;c=a.l.data;if(!c.length)return null;return c[GO(a,b)];}
function FY(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.z){a.l=P(B$,0);D_(a);a.z=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.l.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=H(g[e].q);i=H(a.l.data[f].q);j=BA(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.l.data[f];if(!b&&c==H(k.q)?1:0){g=a.l;a.l=Rj(g,e,P(B$,g.data.length-1|0));a.z=a.z-d|0;D_(a);return;}a.l.data[e]=Dz(Hn(B9(k.q,0,b),D3(k.q,c)),k.bY,k.bH);}else{g=a.l.data;l=g[e];m=g[f];if(b){if(b!=
H(l.q))a.l.data[e]=Dz(B9(l.q,0,b),l.bY,l.bH);e=e+1|0;}if(c==H(m.q))f=f+1|0;else if(c)a.l.data[f]=Dz(D3(m.q,c),m.bY,m.bH);g=a.l;a.l=AAd(g,e,f,P(B$,(g.data.length-f|0)+e|0));}a.z=a.z-d|0;D_(a);}
function Hw(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return G(CQ,[Dq(P(B$,0)),a]);if(b>=a.z)return G(CQ,[a,Dq(P(B$,0))]);c=a.l;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=H(e[d].q);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return G(CQ,[Dq(Ks(c,0,P(B$,d))),Dq(Ks(c,d,P(B$,f-d|0)))]);h=e[d];e=Ks(c,0,P(B$,d+1|0));i=e.data;j=Ks(c,d,P(B$,f-d|0));c=j.data;i[d]=Dz(B9(h.q,0,b),h.bY,h.bH);c[0]=Dz(D3(h.q,b),h.bY,h.bH);return G(CQ,[Dq(e),Dq(j)]);}
function Sb(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.l.data;if(e>=f.length)break a;g=H(f[d].q);if(b<=g)break;b=b-g|0;d=e;}}Mc(a,d,b,c);}
function Mc(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Eu(d))return;e=a.l;f=e.data;g=f.length;if(!g){h=P(B$,1);h.data[0]=ZF(d);a.l=h;}else if(!b&&!c){h=P(B$,g+1|0);f=h.data;Da(e,0,h,1,g);f[0]=ZF(d);a.l=h;}else{i=f[b];if(c<=0)j=Dz(Hn(d,i.q),i.bY,i.bH);else if(c>=H(i.q))j=Dz(Hn(i.q,d),i.bY,i.bH);else{k=H(d);l=k+c|0;m=H(i.q)-c|0;e=B0(H(i.q)+k|0);h=e.data;n=0;while(n<c){h[n]=I(i.q,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=I(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=I(i.q,g+c|0);g=g+1|0;}j=Dz(G3(e),i.bY,i.bH);}f[b]=j;}a.z=a.z+
H(d)|0;D_(a);}
function Nl(a){var b,c,d,e,f,g;b=0;c=a.l.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Lu(f)){if(I(f.q,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function JY(a,b,c){var d,e,f,g,h,i,j;d=a.l.data.length;e=a.fm;if(!(e!==null&&e.data.length>=d)){a.fm=AEf(d);a.ef=Bx(d);a.fB=1;}Wp(a);if(!a.fB)AUJ=AUJ+1|0;else{f=0;g=0.0;AUI=AUI+1|0;h=0;while(h<d){i=c.data;j=a.l.data[h];f=f+H(j.q)|0;a.dd.data[h]=f;CM(b,i[IO(j)]);g=g+GE(b,j.q);a.fm.data[h]=g;a.ef.data[h]=g+0.5|0;h=h+1|0;}a.z=f;a.fB=0;a.g6=0;}}
function Wp(a){var b;b=a.dd;if(!(b!==null&&b.data.length>=a.l.data.length)){a.dd=Bx(a.l.data.length);a.g6=1;}}
function D_(a){a.fB=1;a.gG=1;a.g6=1;a.gE=null;}
function R3(a,b,c,d){var e,f,g,h,i,j,k;if(a.gE===null)a.gE=P($rt_arraycls($rt_intcls()),a.l.data.length);e=a.gE.data[d];if(e===null){e=c.data;f=a.l.data[d];CM(b,e[IO(f)]);f=f.q;e=Bx(H(f)-1|0);c=E4(f);g=!d?0.0:a.fm.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;Ma(f,c,0,k);h[i]=g+GE(b,f)+0.5|0;i=k;}a.gE.data[d]=e;}return e;}
function F4(a,b,c,d){var e,f,g,h,i;if(a.l.data.length&&b){if(!(!a.fB&&a.ef!==null))JY(a,c,d);if(b>=a.z)return a.ef.data[a.l.data.length-1|0];e=0;f=0;a:{while(true){g=a.l.data;if(f>=g.length)break a;h=e+H(g[f].q)|0;i=BA(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.ef.data[f];}return (R3(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function EC(a){var b,c,d;a:{b=a.l.data.length;if(b){c=a.ef.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Gn(a,b){var c;if(b>=a.z)return b+1|0;c=GO(a,b);return a.dd.data[c];}
function EJ(a){var b,c,d,e;b=new R;FD(b,a.z);c=a.l.data;d=c.length;e=0;while(e<d){CX(b,c[e].q);e=e+1|0;}return S(b);}
function AAa(){AUK=0;}
var Pe=F(0);
var Rr=F(0);
var Rc=F(0);
var Tf=F(0);
var WH=F(0);
var Ug=F(0);
var Zg=F();
function AMn(a,b,c){a.xP($rt_str(b),Cv(c,"handleEvent"));}
function AJ9(a,b,c){a.xe($rt_str(b),Cv(c,"handleEvent"));}
function AI1(a,b,c,d){a.wL($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function AFp(a,b){return !!a.xS(b);}
function AHb(a,b,c,d){a.xx($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function Pl(){var a=this;B.call(a);a.ft=null;a.eb=null;}
function AGn(a,b){var c=new Pl();AIf(c,a,b);return c;}
function AIf(a,b,c){a.ft=b;a.eb=c;}
function Ua(a,b,c){var d;d=a.ft;if(d===null)return;QH(a,d,b,c);}
function Nh(a,b,c){var d;d=a.ft;if(d===null)return;TF(a,d,b,c);}
function QH(a,b,c,d){var e,f,g,h;e=b.dR.bX();while(e.ce()){Xl(a,e.bP(),c,d);}e=b.ei.bX();while(e.ce()){f=e.bP();g=new Tk;g.q3=a;DV(a,g,f,c,d);}h=b.fU.bX();while(h.ce()){e=h.bP();Xl(a,e.ij,c,d);f=new Tl;f.nq=a;DV(a,f,e.jc,c,d);}b=b.cg.bX();while(b.ce()){QH(a,b.bP(),c,d);}}
function Xl(a,b,c,d){I9(a,b.dT,c,d);}
function DV(a,b,c,d,e){var f,g;a:{if(c instanceof FT){f=c.gk;g=new XB;g.oo=a;g.om=b;g.ol=d;g.on=e;DY(f,g);}else{if(!(c instanceof Ib)){if(!(c instanceof Iv))break a;f=c;DV(a,b,f.hp,d,e);DV(a,b,f.gA,d,e);return;}g=c.gx;f=new XC;f.wh=a;f.wg=b;f.wf=d;f.we=e;DY(g,f);}}if(c!==null){c=c.eJ;if(c!==null)b.iS(c,Ct(d),Ct(e));}}
function I9(a,b,c,d){var e;e=b.c7;if(e>=c)b.c7=e+d|0;}
function TF(a,b,c,d){var e,f,g,h;e=b.dR.bX();while(e.ce()){HP(a,(e.bP()).dT,c,d);}e=b.ei.bX();while(e.ce()){f=e.bP();g=new Sf;g.un=a;DV(a,g,f,c,d);}h=b.fU.bX();while(h.ce()){e=h.bP();HP(a,e.ij.dT,c,d);f=new Sg;f.tv=a;DV(a,f,e.jc,c,d);}b.dR.lw(new Se);b.ei.lw(new Sd);b=b.cg.bX();while(b.ce()){TF(a,b.bP(),c,d);}}
function HP(a,b,c,d){var e;e=b.c7;if(e>=c)b.c7=e-d|0;}
var BF=F(Bt);
var XM=F(Bt);
function B$(){var a=this;B.call(a);a.q=null;a.bY=0;a.bH=0;}
function ZF(a){var b=new B$();AHn(b,a);return b;}
function Dz(a,b,c){var d=new B$();Tp(d,a,b,c);return d;}
function AHn(a,b){Tp(a,b,0,0);}
function Tp(a,b,c,d){a.q=b;a.bY=c;a.bH=d;}
function IO(a){return a.bH&3;}
function G1(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Lu(a){return H(a.q);}
var Ko=F(JZ);
function RC(){var a=this;B.call(a);a.cU=null;a.d8=0;}
var AUL=null;function ACp(a){var b=new RC();AC5(b,a);return b;}
function AC5(a,b){a.d8=0;a.cU=b;}
function Pv(a,b){var c;if(b.d4)return b;b=BO(b.bb);while(true){if(!BP(b))return null;c=Pv(a,BS(b));if(c!==null)break;}return c;}
function NC(a,b,c){var d,e,f,g;d=J7(a,a.cU,b);if(d===null)return;b=c.cf;e=b===null?AUM:b.cg;f=c.bb;c=a.cU;if(d===c){if(c.cf===null)c.cf=b;b=new R9;b.qX=a;DY(f,b);b=new R7;b.uk=a;e.en(b);b=a.cU;b.bb=f;b.cf.cg=e;b.d4=0;return;}if(!DG(f)){c=d.gi;if(c!==null){b=new Oh;b.ow=c;DY(f,b);g=JL(c.bb,d);if(g==(-1))Gm(c.bb,f);else{Fl(c.bb,g);Y6(c.bb,g,f);}}}b=d.cf;if(b!==null){b=b.f4;c=new Sl;c.qI=b;e.en(c);g=JL(b.cg,d.cf);if(g==(-1))Gm(b.cg,e);else{b.cg.mn(g);b.cg.tm(g,e);}}}
function J7(a,b,c){var d,e,f,g;d=b.bJ;if(d.bI==c.bI&&d.bL==c.bL?1:0){d=BO(b.bb);while(BP(d)){e=J7(a,BS(d),c);if(e!==null)return e;}return b;}b=BO(b.bb);while(true){if(!BP(b))return null;d=BS(b);f=c.bI;g=c.bL;e=d.bJ;if(e.bI<=f&&g<=e.bL?1:0){e=J7(a,d,c);if(e!==null)break;}}return e;}
function Th(a,b,c){Bw(c,b.bJ);b=BO(b.bb);while(BP(b)){Th(a,BS(b),c);}}
function Os(a,b,c){a.d8=0;J6(a,a.cU,b,c);}
function J6(a,b,c,d){var e;if(CR(b)<c)return;a:{if(CT(b)>c){K7(b,d);GZ(b,d);b=BO(b.bb);while(BP(b)){J6(a,BS(b),c,d);}}else{if(!IQ(b,c)){if(a.d8)break a;if(CR(b)!=c)break a;}GZ(b,d);if(CT(b)==c&&a.d8)K7(b,d);e=BO(b.bb);while(BP(e)){J6(a,BS(e),c,d);}if(!a.d8){b.d4=1;a.d8=1;}}}}
function V5(a,b,c){a.d8=0;IW(a,a.cU,b,c);}
function IW(a,b,c,d){var e,f,g,h,i,j;if(CR(b)<c)return;e=CT(b);f=c+d|0;if(e>f){e= -d|0;K7(b,e);GZ(b,e);g=BO(b.bb);while(BP(g)){IW(a,BS(g),c,d);}b.bb=MQ(a,b.bb);}else{h=b.bJ;if(c<=h.bI&&h.bL<=f?1:0){if(b===a.cU){Ll(b,0);IU(b,0);h=b.cf;if(h!==null)h.cg.hY();}else{Ll(b,(-1));IU(b,(-1));h=b.cf;if(h!==null){W0(h);b.cf=null;}}FJ(b.bb);}else{e=IQ(b,c);f=IQ(b,f);if(e&&f)GZ(b, -d|0);else if(e)IU(b,c);else{if(!f)return;Ll(b,c);GZ(b, -d|0);}h=BO(b.bb);while(BP(h)){IW(a,BS(h),c,d);}h=UB(b.bb);g=OP(0);i=new RK;j=new UN;j.y0
=i;j.i1=g;while(Uf(h,j)){}if(!j.i1.ms&&!a.d8)b.d4=1;else a.d8=1;b.bb=MQ(a,b.bb);}}}
function MQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BB();d=null;e=AUL;f=b.ck;g=b.k;if(e===null)e=AUH;h=P(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}ZM(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.bN=b.bN+1|0;b=BO(b);while(BP(b)){m=BS(b);if(CT(m)==CR(m))continue;if(!m.d4){if(d!==null){Bw(c,d);d=null;}Bw(c,m);}else if(d===null)d=m;else{n=APU(Jd(Ba(CT(d),CT(m)),Z(CR(d),CR(m)),d.bJ.eE),d.gi,d.cf);n.d4=1;d=m.cf;if(d===null)d=n;else{W0(d);d=n;}}}if(d!==null)Bw(c,d);return c;}
function Wh(a,b,c,d){var e,f,g,h,i,j,k,l;if((CR(c)-CT(c)|0)<43)e=B9(d,CT(c),CR(c));else{e=B9(d,CT(c),CT(c)+20|0);f=B9(d,CR(c)-20|0,CR(c));g=new R;U(g);K(K(K(g,e),C(55)),f);e=S(g);}e=UG(e,C(54),C(56));f=EW();g=c.bJ;h=g.bI;i=g.bL;j=g.eE;k=new R;U(k);BX(k,40);BX(Bl(K(Bl(K(Bl(k,h),C(51)),i),C(51)),j),41);k=S(k);h=c.d4;g=new R;U(g);G$(K(K(g,k),C(51)),h);l=S(g);g=new R;U(g);k=Bl(g,b);BX(k,32);k=K(k,l);BX(k,9);K(k,e);Co(f,S(g));c=BO(c.bb);h=b+1|0;while(BP(c)){Wh(a,h,BS(c),d);}}
function ADh(){AUL=new VI;}
function ADs(){var a=this;B.call(a);a.bI=0;a.bL=0;a.eE=0;}
function Jd(a,b,c){var d=new ADs();AHh(d,a,b,c);return d;}
function AHh(a,b,c,d){a.bI=b;a.bL=c;a.eE=d;}
function AOG(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return a.bI==c.bI&&a.bL==c.bL&&a.eE==c.eE?1:0;}return 0;}
function AF0(a,b){var c;b=b;c=BA(a.bI,b.bI);if(!c)c=BA(b.bL,a.bL);return c;}
var VI=F();
function AKD(a,b,c){var d;b=b;c=c;b=b.bJ;c=c.bJ;d=BA(b.bI,c.bI);if(!d)d=BA(c.bL,b.bL);return d;}
function QS(){var a=this;B.call(a);a.bJ=null;a.gi=null;a.bb=null;a.cf=null;a.d4=0;}
function APU(a,b,c){var d=new QS();ACo(d,a,b,c);return d;}
function ACo(a,b,c,d){a.d4=0;a.bJ=b;a.gi=c;a.bb=BB();a.cf=d;}
function ADx(b){return Q6(b,null);}
function Q6(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=V(b);e=V(b);f=V(b);g=V(b);h=V(b);i=Jd(d,e,f);j=new QS;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}ACo(j,i,null,l);m=0;while(m<g){l=Q6(b,c);l.gi=j;Bw(j.bb,l);m=m+1|0;}return j;}
function Yx(b,c,d){var e,f,g,h,i;a:{e=b.bJ;f=b.bb;g=e.bI;h=e.bL;i=e.eE;Bi(c,g);Ga(c,h,i);Bi(c,f.k);if(d!==null){e=b.cf;if(e!==null&&Vv(d,e)){g=(LK(d,b.cf)).bg;break a;}}g=(-1);}Bi(c,g);b=BO(f);while(BP(b)){Yx(BS(b),c,d);}}
function CT(a){return a.bJ.bI;}
function CR(a){return a.bJ.bL;}
function Ll(a,b){a.bJ.bI=b;}
function IU(a,b){a.bJ.bL=b;}
function K7(a,b){var c;c=a.bJ;c.bI=c.bI+b|0;}
function GZ(a,b){var c;c=a.bJ;c.bL=c.bL+b|0;}
function IQ(a,b){return CT(a)<=b&&b<CR(a)?1:0;}
function AFO(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return BK(a.bJ,c.bJ)&&BK(a.bb,c.bb)?1:0;}return 0;}
var G2=F(0);
function F6(){var a=this;B.call(a);a.cn=null;a.cE=null;}
function AUN(a,b){var c=new F6();Xu(c,a,b);return c;}
function Xu(a,b,c){a.cn=b;a.cE=c;}
function AGI(a,b){var c,d;if(a===b)return 1;if(!H$(b,G2))return 0;a:{b:{c:{d:{c=b;b=a.cn;if(b!==null){if(!b.bu(c.cn))break c;else break d;}if(c.cn!==null)break c;}b=a.cE;if(b!==null){if(!b.bu(c.cE))break c;else break b;}if(c.cE===null)break b;}d=0;break a;}d=1;}return d;}
function Gf(){var a=this;F6.call(a);a.iY=0;a.cu=null;}
function WM(){var a=this;B.call(a);a.kB=null;a.mz=null;a.jT=null;a.mg=null;a.l6=null;a.l2=null;}
function LN(a,b,c){return Q1(a,Cf(a.kB),b,c);}
function QB(a,b,c){return Q1(a,Cf(a.mz),b,c);}
function Q1(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(Jy(g,c,d))return g.rL;f=f+1|0;}return null;}
function TL(a,b,c){var d,e,f,g;d=(Cf(a.jT)).data;e=d.length;f=0;while(f<e){g=d[f];if(Jy(g,b,c))return g.rk;f=f+1|0;}return null;}
var Km=F(0);
function Pi(){var a=this;B.call(a);a.uV=null;a.uW=null;}
function EN(){B.call(this);this.ps=null;}
function AUO(a){var b=new EN();KF(b,a);return b;}
function KF(a,b){a.ps=b;}
function Jy(a,b,c){var d,e,f,g;d=a.ps.data;e=d.length;f=0;while(f<e){g=d[f];if(ABB(b,g.rv)&&ABB(c,g.qy)?1:0)return 1;f=f+1|0;}return 0;}
function Kw(){EN.call(this);this.rk=null;}
var ACT=F();
function Jm(b){var c,d,e,f;if(!($rt_globals.Array.isArray(b)?1:0)){c=P(Hu,1);c.data[0]=Z1(b);return c;}d=b.length;c=P(Hu,d);e=c.data;f=0;while(f<d){e[f]=Z1(b[f]);f=f+1|0;}return c;}
function Z1(b){var c,d,e;c=typeof b==='string'?1:0;d=c?Ce(b):GP(b.language,null);e=c?null:GP(b.scheme,null);b=new Hu;b.rv=d;b.qy=e;return b;}
var AAr=F();
function M4(b){var c,d;AS8();c=AUP;d=b.data;return c.decode(d);}
var AAU=F();
function AED(b){var c,d;c=b.bd+1|0;d=b.V+1|0;return Y4(c,d);}
function HE(b,c){var d;d=b+1|0;b=c+1|0;return Y4(d,b);}
function Y4(b,c){return {column:b,lineNumber:c};}
function FV(){EN.call(this);this.rL=null;}
function AUQ(a,b){var c=new FV();Xp(c,a,b);return c;}
function Xp(a,b,c){KF(a,b);a.rL=c;}
function JC(){EN.call(this);this.vf=null;}
function Sk(){var a=this;B.call(a);a.rE=null;a.rF=null;a.rG=null;}
function AOX(a,b,c){var d,e,f;b=Cv(b,"f");Cv(c,"f");c=a.rE;d=a.rF;e=a.rG;f=new XL;f.sS=b;Lx(c.g7,f,0,d,e);}
var ZZ=F();
function YL(b){return b?1:0;}
var Hd=F(0);
function AL5(a){}
function AHZ(a){}
var ET=F(0);
var Jx=F(0);
var P8=F(0);
function ZX(){var a=this;B.call(a);a.Q=null;a.ci=null;a.bM=null;a.O=null;a.eD=null;a.wd=0;a.mv=null;a.cG=null;a.lx=0;a.dS=0;a.fk=null;a.hb=null;a.b4=null;a.A=0;a.c=null;a.cv=null;a.cB=null;a.hL=null;a.fo=null;a.uB=0;a.sf=0;a.cy=0;a.b3=0;a.ca=0;a.eP=null;a.eL=null;a.eM=null;a.gZ=0;a.jP=0;a.h0=0;a.yO=0;a.wT=0;a.jt=0;a.iU=0;a.lP=0;a.dG=0;a.cH=null;a.eC=null;a.dx=0;a.bx=0;a.jL=null;a.hK=null;a.rq=null;a.to=null;a.ks=null;a.W=0;a.fy=null;a.qu=0;a.oT=null;a.um=null;}
function Z_(a,b){var c=new ZX();ANy(c,a,b);return c;}
function ANy(a,b,c){var d,e,f,g,h;a.Q=new Bj;a.ci=new Bj;a.wd=0;a.mv=P(Bk,10);d=new PF;e=new WV;e.ct=new Bj;e.bo=new Bj;e.dc=new B5;e.gz=new B5;VT(e,0,0,2,20);d.d_=e;d.ka=0.5;d.g3=0.0;Js(187,187,187,255,e.dc);a.cG=d;a.dS=16;a.fk=C(57);a.b4=P(Kz,4);a.c=AGs(P(Bv,0),null,null);e=new WM;e.kB=Cx(P(FV,0));e.mz=Cx(P(FV,0));e.jT=Cx(P(Kw,0));e.mg=Cx(P(JC,0));e.l6=Cx(P(Fm,0));e.l2=Cx(P(Km,0));a.cv=e;a.fo=P(EY,0);a.eP=Cg(1,0);a.eL=UY();a.eM=UY();a.gZ=0;a.h0=1;a.jt=1;a.iU=1;a.lP=1;a.dG=3;a.cH=AP7();a.eC=C(58);a.dx=0;a.bx
=0;e=Ec();BM(e);f=new NM;f.tg=e;a.hK=f;a.W=0;e=new NL;e.mV=a;a.oT=e;e=new NK;e.ro=a;a.um=e;a.bM=b;a.O=b.dl;a.eD=c;c=new UE;g=a.b4;c.jp=new B5;c.gn=new Bj;c.kp=new Bj;e=new B5;c.hq=e;c.kr=g;Tb(e);a.fy=c;g=a.mv.data;e=new NJ;e.uM=a;g[0]=e;e=new NQ;e.oJ=a;g[1]=e;e=new NP;e.sD=a;g[2]=e;e=new NO;e.wl=a;g[3]=e;e=new NN;e.oj=a;g[4]=e;e=new NI;e.rS=a;g[5]=e;e=new NH;e.vh=a;g[6]=e;AEr();h=AUR===AUS?0:1;a.jP=h;c.lS=!h?0.0:0.5;c.mq=b.cF;}
function IJ(a,b,c,d){var e,f,g,h,i;e=a.fy;Tb(e.hq);f=e.hq;g=d>=0.5?d:0.25;h=g>=4.0?0.5:ADT(f.b0,ADT(g,AUT));Cc(f,f.bp/g,f.bG*g,AQe(f.bc*g,1.25),h);f=e.hq;h=f.bG;e.sF=h-(h|0)>=0.25?0.0:0.5;i=h+f.bc+1.5|0;e.vN=i;Bg(e.kp,0,i*2|0);Cw(a.Q,b);Cw(a.ci,c);SP(a,b,c,d);}
function VV(a,b,c){a.rq=b;a.to=c;}
function SP(a,b,c,d){var e,f,g,h;a.cy=Cp(80.0,d);a.b3=Cp(1.0,d);a.ca=Cp(10.0,d);if(!a.bx)Cw(a.bM.dp,a.Q);else Bg(a.bM.dp,(b.a+c.a|0)-IC(a)|0,b.b);b=a.cH;e=a.bM.dp;f=IC(a);g=c.b;h=d;Cw(b.e_,e);Bg(b.eB,f,g);b.ix=h;b=a.cG;f=Cp(2.0,d);b.d_.bo.a=f;QZ(a,a.fk,a.dS);K3(a);}
function AHN(a){a.lx=1;KW(a);}
function AEV(a){a.lx=0;}
function KW(a){var b;b=a.cG;b.g3=Nv(Fs(a))+b.ka*1.25;b.fT=1;}
function JA(a,b){var c,d;a.cB=b;c=a.cG;d=b.bE.v_;Ei(c.d_.dc,d);c=a.eL;d=b.bE;Gy(c,d.kV,d.k6);c=a.eM;b=b.bE;Gy(c,b.kV,b.k6);}
function Nt(a){Dx(a,a.hb.mk,a.dS+1|0);}
function Xr(a){var b;b=a.dS;if(b<=7)return;Dx(a,a.hb.mk,b-1|0);}
function Qu(a){a.hL=C5(a.hL,E_(a.O,1024,a.A,a.bM.cF));}
function Oa(a,b){Dx(a,b,a.dS);}
function Dx(a,b,c){if(a.bM.b2!==0.0){QZ(a,b,c);I$(Fs(a));}a.dS=c;a.fk=b;}
function J9(a,b){var c,d,e,f;c=a.fy;b=a.bM.cF;c.mq=b;if(a.hL.j4!=b)Qu(a);d=a.fo.data;b=d.length;e=0;while(e<b){f=d[e].bD;if(f!==null)f.gG=1;e=e+1|0;}Jo(a.cH);K3(a);}
function QZ(a,b,c){var d,e,f,g,h,i,j;d=Cp(c,a.bM.b2);e=a.hb;f=e!==null?e.pL:0;if(!(d==f&&BK(b,a.fk))){Jo(a.cH);g=a.fo.data;c=g.length;f=0;while(f<c){W8(g[f]);f=f+1|0;}g=a.c.f.x.data;c=g.length;f=0;while(f<c){D_(g[f]);f=f+1|0;}g=a.b4.data;h=G1(0,0);e=a.O;i=d;g[h]=Gw(e,b,i,300,0);a.b4.data[G1(0,1)]=Gw(a.O,b,i,300,2);a.b4.data[G1(1,0)]=Gw(a.O,b,i,600,0);a.b4.data[G1(1,1)]=Gw(a.O,b,i,600,2);e=a.b4.data[G1(0,0)];a.hb=e;c=Fy(e);f=DE(c*1.25);a.A=f;e=a.fy;e.ww=f;g=a.b4.data;j=g[0];e.vA= -( -((f+j.ej+j.dU)/2.0)|0)|0;a.cG.d_.bo.b
=Fy(g[0]);Qu(a);f=a.A;h=Wv(a.cG);e=new R;U(e);b=K(K(e,C(59)),b);BX(b,32);Bl(K(Bl(K(Bl(K(Bl(b,d),C(60)),c),C(61)),f),C(62)),h);$rt_globals.console.info($rt_ustr(S(e)));if(AUU){c=Kg(a.b4.data[0],a.A);b=new R;U(b);Bl(K(b,C(63)),c);$rt_globals.console.info($rt_ustr(S(b)));}a.c.gU=F4(E9(a),a.c.r,a.O.c0,a.b4);GC(a);K3(a);}}
function Mg(a){return T(Cb(a.c.f)+5|0,a.A);}
function FN(a){return Z(Mg(a)-a.ci.b|0,0);}
function S9(a){return Z(a.gZ-Db(a)|0,0);}
function Db(a){var b;b=!a.bx?0:CP(a)+a.ca|0;return Z(1,(a.ci.a-a.cy|0)-b|0);}
function IC(a){return a.bx?a.cy:a.cy-a.ca|0;}
function Cz(a){return a.ci.b;}
function KD(a,b){var c,d,e,f,g;c=a.c.f;if(TB(c)&&b-c.sQ>0.03125?1:0){d=a.qu;e=a.c.f.b1;if(d!=e){a.qu=e;Rq(a);}}SZ(a);d=KP((a.W+a.yO|0)-a.wT|0,FN(a));e=a.W==d?0:1;if(e)DS(a,d);a:{c=a.cG;f=c.fT;if(b>c.g3)while(true){g=c.g3+c.ka;c.g3=g;c.fT=c.fT?0:1;if(b>g)continue;else break a;}}d=c.fT==f?0:1;return !d&&!e&&!a.wd?0:1;}
function DS(a,b){var c,d;c=KP(b,FN(a));if(c!=a.W){a.W=c;a.c.hV=c/a.A;d=a.to;if(d!==null)d.j5(c);}}
function Ic(a,b){var c,d;c=KP(b,S9(a));d=a.c;if(c!=d.c8){d.c8=c;d=a.rq;if(d!==null)d.j5(c);}}
function Iw(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=H9(a.ci.b,a.A)+7|0;c=a.fo;if(c.data.length<b)a.fo=Zj(b,c,a.fy,a.uB,a.sf,a.c.f);Dh(a.O,0);RF(a.O,a.Q,a.ci);d=(a.A-Wv(a.cG)|0)/2|0;e=(a.c.gU-(S3(a.cG)/2|0)|0)-a.c.c8|0;f=!a.bx?a.cy:(a.b3+a.ca|0)+CP(a)|0;g=a.cG;b=f+e|0;d=(d+T(a.c.o,a.A)|0)-a.W|0;Bg(g.d_.ct,b,d);h=Cb(a.c.f);i=Fk(a);j=Gu(a);a.uB=i;a.sf=j;k=!a.bx?a.Q.a+a.cy|0:((a.Q.a+a.b3|0)+a.ca|0)+CP(a)|0;l=i;while(l<=j&&l<h){m=BG(a.c.f,l);g=U$(a,l);XS(g,m,a.hL,a.O,a.A,Db(a),a.c.c8);n=g.bD;a.gZ=Z(a.gZ,
EC(m)+(40.0*a.bM.b2|0)|0);o=T(a.A,l)-a.W|0;p=CE(a)===null?null:(CE(a)).data[l];d=a.Q.b+o|0;m=a.O;f=Db(a);q=a.A;o=a.c.c8;r=a.cB;s=ABz(Be(a),l);if(s!==null){if(s.b==(-1))s.b=n.z;s.a=F4(n,s.a,a.O.c0,a.b4);s.b=F4(n,s.b,a.O.c0,a.b4);}t=a.c;Y8(g,d,k,m,f,q,o,r,s,t.ho,t.fZ,t.o!=l?0:1,CE(a)===null?0:1,p);l=l+1|0;}r=a.bM.dp;l=i;while(l<=j&&l<h&&a.jt){g=U$(a,l);o=T(a.A,l)-a.W|0;u=ACD(Be(a),l);t=a.cB.bE.qR;v=a.c.o==l&&CE(a)===null?1:0;if(u)t=a.cB.bE.mo;else if(CE(a)!==null&&l<(CE(a)).data.length&&(CE(a)).data[l]!==null)
{t=a.cB;t=HX(t.dw,t,(CE(a)).data[l].fK);}else if(v)t=a.cB.bE.ib;Ze(g,a.O,k,a.Q.b+o|0,a.A,r,a.c.c8,Db(a),t);l=l+1|0;}if(a.h0){q=Ba(j+1|0,h);AAV(a,T(a.A,q)-a.W|0);}ABZ(a);AA7(a,i,j);if(a.iU)ADA(a,i,j,h);if(a.lx&&e>=(( -S3(a.cG)|0)/2|0)){g=a.cG;t=a.ci;if(YX(g.d_.ct,0,0,t))ACe(a.cG,a.O,a.Q);}ABv(a);AAE(a);Lh(a.O);}
function ADA(a,b,c,d){var e,f,g,h,i,j;while(b<=c&&b<d){e=CE(a)!==null&&b<(CE(a)).data.length?(CE(a)).data[b]:null;if(e!==null){f=a.cB;f=HX(f.dw,f,e.fK);}else f=CE(a)!==null?a.cB.bE.fc:a.cB.bE.ib;if(!(a.c.o!=b&&e===null)){a.eP.a=!a.bx?(a.ca-a.b3|0)-a.dG|0:((a.ca+CP(a)|0)+a.b3|0)-a.dG|0;g=a.eP;h=a.A;g.b=h;i=a.bx?0:(a.cy-a.ca|0)+a.b3|0;h=T(h,b)-a.W|0;e=a.O;j=a.Q;BC(e,j.a+i|0,j.b+h|0,g,f);}b=b+1|0;}}
function AA7(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;d=a.ci.b;e=Ba(d,T(Cb(a.c.f),a.A)-a.W|0);f=a.cH;g=a.W;h=CE(a)!==null?(-1):a.c.o;i=a.O;j=a.cB;RF(i,f.e_,f.eB);S1(f,i,b,d);k=f.ff;if(b!=k){l=f.cp.k;m=l*20|0;if(k<b){k=k/20|0;n=b/20|0;}else{n=Z(0,(k-1|0)/20|0);k=Z(0,(b-1|0)/20|0);}a:{if((n-k|0)>=l){Ru(f,b);f.ff=b;}else{if(f.ff>=b)while(true){if(n<k)break a;f.ff=Np(Bs(f.cp,n%l|0),f.el,f.fi,f.ff,b,m,f.ix);n=n+(-1)|0;}while(k<=n){f.ff=Np(Bs(f.cp,k%l|0),f.el,f.fi,f.ff,b,m,f.ix);k=k+1|0;}}}}o
=BO(f.cp);while(BP(o)){p=BS(o);q=f.e_;k=T(f.cp.k,f.i0);r=f.jN;s=p.ez.b;n=((p.hD.b-(g%k|0)|0)+k|0)%k|0;t=j.gF;l=g+n|0;u=p.J;m=l/u|0;v=n+s|0;l=BA(v,e);if(l<=0){k=s/u|0;u=0;v=0;w=0;while(v<k){l=m+v|0;if(LC(p,r,w,l,j,t)){s=T((v-u|0)+1|0,p.J);Bg(p.c4,Ci(p.ba),s);Cc(p.dM,0.0,T(u,p.J),Ci(p.ba),s);l=w;}else{x=Fx(j,r,w,t);Er(p,i,n+T(u,p.J)|0,q,t.eS,x);Bg(p.c4,Ci(p.ba),p.J);Cc(p.dM,0.0,T(v,p.J),Ci(p.ba),p.J);u=v;}v=v+1|0;w=l;}x=Fx(j,r,w,t);Er(p,i,n+T(u,p.J)|0,q,t.eS,x);}else{if(l>0&&n<e){l=Z(e-n|0,0);w=p.J;u=l/w|0;if
(l%w|0)u=u+1|0;y=0;z=0;ba=0;while(z<u){w=m+z|0;if(LC(p,r,ba,w,j,t)){l=T((z-y|0)+1|0,p.J);Bg(p.c4,Ci(p.ba),l);Cc(p.dM,0.0,T(y,p.J),Ci(p.ba),l);w=ba;}else{x=Fx(j,r,ba,t);Er(p,i,n+T(y,p.J)|0,q,t.eS,x);Bg(p.c4,Ci(p.ba),p.J);Cc(p.dM,0.0,T(z,p.J),Ci(p.ba),p.J);y=z;}z=z+1|0;ba=w;}x=Fx(j,r,ba,t);Er(p,i,n+T(y,p.J)|0,q,t.eS,x);}if(v>k)AAT(p,q,e,g,k,j,r,i,s,n,t);}}x=j.gF;if(e<d){bb=f.e_;BC(i,bb.a,bb.b+e|0,Cg(f.eB.a,d-e|0),x.gw);}if(b<=h&&h<=c)AB9(f,g,h,j.gF,i);Lh(i);}
function Fk(a){return Ba(a.W/a.A|0,Cb(a.c.f)-1|0);}
function Gu(a){return Ba(((a.W+Cz(a)|0)-1|0)/a.A|0,Cb(a.c.f)-1|0);}
function K3(a){var b,c,d,e,f,g,h;b=a.cH;c=a.b4.data[0];d=a.A;e=a.bM.cF;f=a.O;b.il=c;b.l5=d;g=d*20|0;b.i0=g;h=C5(b.el,E_(f,b.eB.a,g,e));b.el=h;CM(h,b.il);R4(b.el,2);c=C5(b.fi,E_(f,b.eB.a,d,e));b.fi=c;CM(c,b.il);R4(b.fi,2);S1(a.cH,a.O,Fk(a),Cz(a));}
function U$(a,b){var c;c=a.fo.data;return c[b%c.length|0];}
function VR(a,b){var c,d,e,f;c=Fv(0,H(a.eC),Nl(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BF;X(b);L(b);}if(c!=1){d=b.b$.data.length;if(d&&c){e=B0(T(d,c));d=0;f=0;while(f<c){PV(b,0,H(b),e,d);d=d+H(b)|0;f=f+1|0;}b=L3(e);}else b=AUi;}}return b;}
function Og(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=Bx(i);k=ATK(i).data;G_(j,c);c=0;l=k.length;if(c>l){f=new BF;X(f);L(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.c.f;o.b1=o.b1+1|0;p=P(Gr,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AO$(h[m],n[m],k[m],b[m],f.V,f.bd);m=m+1|0;}Bw(o.f6,p);c=0;while(c<i){b=e.data;JE(o,h[c],n[c],k[c],b[c]);g.v5(Ct(h[c]),b[c]);c=c+1|0;}}
function ADG(a){var b;if(C4(Be(a)))F1(a);else{b=a.c;MH(b.f,b.o,b.r);}GC(a);DR(a);return 1;}
function C8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.dx)return 0;if(C4(Be(a)))F1(a);c=LH(UG(b,C(65),C(3)),C(54),(-1));d=c.data;b=a.c;e=b.f;f=b.o;g=b.r;XE(e,f,g,c);h=d.length;if(!h)b=AUi;else{i=0;j=0;while(j<h){i=i+H(d[j])|0;j=j+1|0;}k=B0(i+T(h-1|0,H(C(54)))|0);c=k.data;l=0;b=d[0];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<H(C(54))){m=l+1|0;c[l]=I(C(54),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=n+1|0;}b=L3(k);}Fa(e,f,g,0,b);b=a.c;f=b.o;m=(f+h|
0)-1|0;Cl(a,m,m!=f?H(d[h-1|0]):b.r+H(d[0])|0,0);Fh(a);DR(a);return 1;}
function F1(a){var b,c,d;b=Dy(Be(a));c=a.c.f;d=Be(a);MU(c,d,VA(c,d));Cl(a,b.K,b.U,0);Fh(a);DR(a);}
function Fh(a){var b,c;(Be(a)).c2=0;b=(Be(a)).bB;c=a.c;B1(b,c.o,c.r);b=(Be(a)).bt;c=a.c;B1(b,c.o,c.r);}
function CP(a){return a.hb.l8|0;}
function AAV(a,b){var c,d;c=a.ci.b;if(b<c){d=a.bM.dp;d.b=c-b|0;d.a=!a.bx?Db(a)+a.dG|0:Db(a)+a.b3|0;c=!a.bx?(a.Q.a+a.cy|0)-a.dG|0:(((a.Q.a+a.ca|0)+CP(a)|0)+a.b3|0)-a.dG|0;BC(a.O,c,a.Q.b+b|0,d,a.cB.bE.fc);}}
function ABv(a){var b;b=a.bx?a.Q.a+CP(a)|0:a.Q.a+a.ci.a|0;WX(a.eL,a.W,a.Q.b,Cz(a),Mg(a),b,CP(a));b=!a.bx?a.Q.a+a.cy|0:((a.Q.a+a.b3|0)+a.ca|0)+CP(a)|0;QG(a.eM,a.c.c8,b,Db(a),a.gZ,a.Q.b+Cz(a)|0,CP(a));}
function AAE(a){var b,c;b=Q3(a.eL);c=Q3(a.eM);if(!(!b&&!c)){Dh(a.O,1);if(b)HD(a.eL,a.O);if(c)HD(a.eM,a.O);if(b)HM(a.eL,a.O);if(c)HM(a.eM,a.O);}}
function ABZ(a){var b,c,d,e;b=a.eP;c=a.ci;b.b=c.b;b.a=a.b3;d=!a.bx?a.cy-a.ca|0:(c.a-IC(a)|0)-a.b3|0;b=a.O;c=a.Q;BC(b,c.a+d|0,c.b,a.eP,a.cB.bE.tz);a.eP.a=!a.bx?(a.ca-a.b3|0)-a.dG|0:((a.ca+CP(a)|0)+a.b3|0)-a.dG|0;e=a.bx?0:(a.cy-a.ca|0)+a.b3|0;b=a.O;c=a.Q;BC(b,c.a+e|0,c.b,a.eP,a.cB.bE.fc);}
function KP(b,c){return Ba(Z(0,b),c);}
function Fs(a){return a.bM.gO;}
function IB(a,b){var c,d,e,f;c=ER(b);d=new R;U(d);K(K(d,C(66)),c);$rt_globals.console.info($rt_ustr(S(d)));Fs(a);c=ER(b);d=Ff();c=$rt_ustr(c);d.title=c;Cl(a,0,0,0);c=new PZ;c.t5=a;c.t4=b;d=Ec();BM(d);e=new PY;e.n1=d;f=new T3;f.pS=e;d=new WA;d.n2=c;c=b.fQ;if(c!==null)c.text().then(Bn(d,"f"),Bn(f,"f"));else{b=b.hU.getFile();c=new WB;c.pA=d;c.pB=f;b.then(Bn(c,"f"),Bn(f,"f"));}}
function Hl(a,b,c,d,e){if(Hv(a,e))return 1;if(c&&d)return 1;if(c)DS(a,a.W+((T(b,a.A)*12|0)/10|0)|0);else if(!d){G4(a,a.c.o+b|0,e);TH(a);}return 1;}
function RV(a,b,c,d){var e,f,g;if(Hv(a,d))return 1;e=E9(a);if(!c)f=a.c.r+b|0;else if(b>=0)f=Gn(e,a.c.r);else{b=a.c.r;if(!b)f=(-1);else{c=GO(e,b);if(c>0&&e.dd.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.dd.data[c-1|0];}}if(f>e.z){e=a.c;if((e.o+1|0)<Cb(e.f))Cl(a,a.c.o+1|0,0,d);}else if(f>=0)CY(a,f,d);else{e=a.c;b=e.o;if(b>0){g=(BG(e.f,b-1|0)).z;Cl(a,a.c.o-1|0,g,d);}}Vl(a);return 1;}
function Hv(a,b){if(C4(Be(a))&&!b){Fh(a);GC(a);return 1;}if(!(b&&C4(Be(a))))Fh(a);return 0;}
function Cl(a,b,c,d){a.c.r=c;return G4(a,b,d);}
function G4(a,b,c){var d;d=a.c;d.o=Fv(0,b,Cb(d.f)-1|0);return CY(a,a.c.r,c);}
function CY(a,b,c){var d,e;a.c.r=Fv(0,b,(E9(a)).z);a.c.gU=a.bM.b2===0.0?0:F4(E9(a),a.c.r,a.O.c0,a.b4);KW(a);GC(a);if(c)(Be(a)).c2=1;d=Be(a);e=a.c;KY(d,e.o,e.r);(Be(a)).c2=0;return 1;}
function L6(a,b){var c;c=AGy(Be(a));CY(a,b,0);HA(Be(a),c);}
function GC(a){TH(a);Vl(a);}
function TH(a){var b,c,d,e,f;b=a.W;c=b+Cz(a)|0;d=a.c.o;e=a.A;d=T(d,e);f=d+e|0;if(d<(b+e|0))DS(a,d-e|0);else if(f>(c-e|0))DS(a,(f-Cz(a)|0)+a.A|0);}
function Vl(a){var b,c,d,e,f;b=DE(a.bM.b2*30.0);c=a.c.c8;d=c+Db(a)|0;e=a.c.gU;f=e+b|0;if(e<(c+b|0))Ic(a,e-b|0);else if(f>(d-b|0))Ic(a,(f-Db(a)|0)+b|0);}
function ADB(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;L4(a.c);b=a.jL;c=a.c;d=c.f;c=c.fZ;e=Cb(d);f=b.pc.data;g=f.length;h=0;while(h<g){i=f[h];b=i.gX;j=b.e5;k=b.ji;l=j;while(true){m=BA(l,k);if(m>0)break;if(l>=e)break;a:{b=BG(d,l);if(b.l.data.length){n=l>j?0:Z(i.gX.fF,0);o=m<0?b.z:Ba(i.gX.iz,b.z);while(true){if(n>=o)break a;p=GO(b,n);q=RD(b,p);r=p>=b.l.data.length?b.z:b.dd.data[p];s=KB(b,p);if(q==n&&r<=o)Bw(c,s);else{s=Ec();t=new R;U(t);u=Bl(K(t,C(67)),l);BX(u,58);K(Bl(u,n),C(68));Co(s,S(t));}n=r;}}}l=l+
1|0;}h=h+1|0;}}
function HJ(a,b){var c,d;Cl(a,b.V,b.bd,0);c=Gn(E9(a),a.c.r);B1((Be(a)).bt,a.c.o,c);b=(Be(a)).bB;d=a.c;B1(b,d.o,d.r);}
function D2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.Q;e=c-d.a|0;f=Fv(0,((b.b-d.b|0)+a.W|0)/a.A|0,Cb(a.c.f)-1|0);g=!a.bx?a.cy:(a.b3+a.ca|0)+CP(a)|0;h=Z(0,(e-g|0)+a.c.c8|0);b=BG(a.c.f,f);d=a.O.c0;i=a.b4;if(!(b.ef!==null&&!b.fB))JY(b,d,i);j=b.ef;e=b.l.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.z;else{c=Tw(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.l.data.length)k=b.z;else{j=R3(b,d,i,c);k=0;e=0;while(e<c){k=k+H(b.l.data[e].q)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(AUK){b=new R;U(b);Bl(K(Bl(K(Bl(K(b,C(69)),e),C(70)),h),C(71)),m);$rt_globals.console.info($rt_ustr(S(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return Dp(f,k);}
function W_(a,b){var c,d;c=a.c;d=b.V;c.o=d;c.r=b.bd;c.gU=F4(BG(c.f,d),a.c.r,a.O.c0,a.b4);KW(a);}
function VM(a,b,c,d){var e;a:{e=c.data;switch(e.length){case 0:break;case 1:R6(a,e[0]);break a;default:Rg(a.eD,b,c,a,d);break a;}Kb(a.eD,b,a);}}
function R6(a,b){var c,d,e,f,g;if(BK(b.hd,a.c.bT)){b=b.f1;Cl(a,b.e5,b.fF,0);B1((Be(a)).bB,b.e5,b.fF);B1((Be(a)).bt,b.ji,b.iz);}else{c=(Cf(a.cv.l2)).data;d=c.length;e=0;a:{while(true){if(e>=d){f=null;break a;}f=c[e];if(f!==null)break;e=e+1|0;}}if(f!==null){Fs(a);g=new Nd;g.sx=f;g.sw=b;BM(g);b=new Rs;b.uq=g;$rt_globals.setTimeout(Bn(b,"onTimer"),0);}}}
function E9(a){var b;b=a.c;return BG(b.f,b.o);}
function Jj(a,b,c){var d,e;d=DE((a.A*4|0)*c/150.0);e=DE(b);if(d)DS(a,a.W+d|0);if(e)Ic(a,a.c.c8+e|0);return 1;}
function S8(a,b,c){(Be(a)).c2=0;return 1;}
function MA(a,b,c){var d;if(c)return null;d=HQ(a.eL,b.n,a.oT,1);if(d!==null)return d;d=HQ(a.eM,b.n,a.um,0);if(d!==null)return d;Ig(a);W_(a,D2(a,b.n));Kv(a.c);if(!b.bz&&!(Be(a)).c2){b=(Be(a)).bB;d=a.c;B1(b,d.o,d.r);}(Be(a)).c2=1;b=Be(a);d=a.c;KY(b,d.o,d.r);b=new Xf;b.qt=a;return b;}
function MK(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cm){b=b.n;e=D2(a,b);f=GA(a.c.f,e.V,e.bd);g=Kx(a,f);h=LN(a.cv,DU(a.c),FM(a.c));if(h!==null){i=a.c;c=e.V;d=e.bd;e=new Tx;e.oQ=a;e.oR=b;e.oP=g;h.lp(i,c,d,e,a.hK);}else{e=B_(a.c.f.cX,f);if(e!==null){HJ(a,e);c=1;}else{e=B_(a.c.f.cM,f);if(e!==null&&!DG(e)){if(e.k!=1){Q0(a.eD,b,e,a,g);c=1;}else{HJ(a,Bs(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(D2(a,b.n)).V;g=BG(a.c.f,c);c=FB(g,a.c.r);d=Gn(g,a.c.r);b=Ly(g,c);if((d-1|0)==g.z){B1((Be(a)).bB,a.c.o,
Nl(g));B1((Be(a)).bt,a.c.o,g.z);}else{if(b!==null){b=b.q;j=0;c:{while(true){k=b.b$.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.c.r;if(c==j){c=FB(g,c-1|0);d=Gn(g,c);}else{if(d!=j){PC(Be(a),a.c.o);break b;}c=FB(g,d+1|0);d=Gn(g,c);}}}B1((Be(a)).bB,a.c.o,c);(Be(a)).c2=1;Cl(a,a.c.o,d,0);(Be(a)).c2=0;Ig(a);}}break a;case 3:break;default:break a;}PC(Be(a),a.c.o);RB(a.c.gf);Ig(a);}}return 1;}
function NT(a,b){var c,d,e,f,g,h,i,j,k;c=a.bM.di;if(H5(a.eL,b.n,c))return 1;if(H5(a.eM,b.n,c))return 1;d=a.cH;if(EV(b.n,d.e_,d.eB)&&Fz(c)?1:0)return 1;e=b.n;f=!a.bx?a.Q.a+a.cy|0:((a.Q.a+a.ca|0)+a.b3|0)+CP(a)|0;a:{g=a.Q.b;h=Db(a);i=Cz(a);j=e.a;if(f<=j&&j<(f+h|0)){k=e.b;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Fz(c);if(b.cm){e=D2(a,b.n);e.bd=FB(BG(a.c.f,e.V),e.bd);b=a.c.f;if(!I7(b.cX,e)&&!I7(b.cM,e)?0:1)return DD(c,C(72));}return DD(c,C(21));}
function AQk(a,b){var c,d,e,f,g;c=b.cm;if(c&&b.bO==65){c=Cb(a.c.f)-1|0;d=Fn(a.c.f,c);B1((Be(a)).bB,0,0);B1((Be(a)).bt,Cb(a.c.f)-1|0,d);return 1;}if(c&&b.bO==80){In(a.c);return 1;}if(!a.dx&&c&&b.bO==90){if(C4(Be(a)))Fh(a);b=a.c.f;b.b1=b.b1+1|0;e=b.f6;d=e.k;if(!d)e=null;else{f=(Fl(e,d-1|0)).data;e=M$(b,f[0]);c=1;while(c<f.length){M$(b,f[c]);c=c+1|0;}}if(e!==null){Cl(a,e.a,e.b,0);DR(a);}return 1;}if(!c&&!b.cR){if(BE(b.d5,C(73))){C8(a,C(74));CY(a,a.c.r-1|0,0);c=1;}else if(BE(b.d5,C(75))){C8(a,C(76));CY(a,a.c.r-
1|0,0);c=1;}else if(BE(b.d5,C(50))){C8(a,C(77));CY(a,a.c.r-1|0,0);c=1;}else if(BE(b.d5,C(78))){C8(a,C(79));CY(a,a.c.r-1|0,0);c=1;}else if(BE(b.d5,C(80))){C8(a,C(81));CY(a,a.c.r-1|0,0);c=1;}else if(!BE(b.d5,C(82)))c=0;else{C8(a,C(83));CY(a,a.c.r-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cR&&!b.cm)){d=b.bO;if(d>=48&&d<=57){c=d-48|0;e=a.mv.data[c];if(e!==null)e.s();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bO){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c
=1;}if(c)return 1;if(AAA(a,b))return 1;if(ABp(a,b))return 1;c=b.cm;if(c&&b.bO==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bO;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.cR&&!b.iR)return H(b.d5)>0&&C8(a,b.d5)?1:0;return 0;}return 0;}
function SZ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.c;c=Fk(a);d=Gu(a);if(b.ed!=3&&b.gh==3){e=UB(b.kX);f=new R2;f.t9=c;f.t$=d;g=new Qt;g.qg=f;while(!g.j9&&Uf(e,g)){}if(!g.j9&&BE(C(29),DU(b))){c=Z(0,c-100|0);d=Ba(Cb(b.f)-1|0,d+100|0);Bw(b.kX,Cg(c,d));h=Bx(3);i=h.data;i[0]=EB(b.f,c);e=b.f;j=0;d=Ba(d+1|0,e.x.data.length);k=0;while(k<d){j=j+Fn(e,k)|0;if(k!=(e.x.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.tw=Eb();e=b.dn;l=new Q$;l.sE=b;i=P(B,3);m=i.data;m[0]=Dg(b.f);m[1]=h;b=b.f.cK;g=BB();Th(b,b.cU,g);h=
Bx(3*g.k|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bs(g,o);d=k+1|0;n[k]=b.bI;q=d+1|0;n[d]=b.bL;k=q+1|0;n[q]=b.eE;o=o+1|0;}m[2]=h;D9(e,l,C(84),i);}}}
function W9(a){In(a.c);}
function Rq(a){ACi(a.c);}
function Gx(a,b,c){var d,e,f,g,h,i;if(c&&a.dx)return 0;d=Dy(Be(a));e=d.K;if(C4(Be(a))){f=a.c.f;g=Be(a);h=VA(f,g);if(c)MU(f,g,h);if(c){Cl(a,d.K,d.U,0);Fh(a);DR(a);}}else{h=Hn(EJ(a.c.f.x.data[e]),C(54));i=Ba(Cb(a.c.f)-1|0,e);B1((Be(a)).bt,i,0);if(e>=(Cb(a.c.f)-1|0))B1((Be(a)).bt,i,Fn(a.c.f,i));else B1((Be(a)).bB,i+1|0,0);if(c)F1(a);else Cl(a,e,0,0);}b.j(h);return 1;}
function ABp(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.dx)return 0;a:{switch(b.bO){case 8:if(C4(Be(a))){F1(a);c=1;}else{b=a.c;d=b.r;if(!d&&!b.o)c=1;else{if(d){e=b.o;c=d-1|0;MH(b.f,e,c);}else{e=b.o-1|0;c=Fn(b.f,e);b=a.c.f;KG(b,e);Fa(b,e,Fn(b,e),1,C(54));}DR(a);c=Cl(a,e,c,0);}}break a;case 9:if(!b.bz){if(!C4(Be(a)))C8(a,a.eC);else{f=Dy(Be(a));g=Fb(Be(a));c=g.K;d=f.K;e=(c-d|0)+1|0;h=Bx(e);i=h.data;j=P(Bv,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.eC;d=d+1|0;e=l;}b=new Lo;m=a.c;Sc(b,m.o,m.r);m=new ST;m.oB
=a;Og(a,h,0,0,j,b,m);f.U=f.U+H(a.eC)|0;g.U=g.U+H(a.eC)|0;L6(a,a.c.r+H(a.eC)|0);DR(a);}c=1;}else b:{if(!C4(Be(a))){b=a.c;f=BG(b.f,b.o);if(f.l.data.length>0){g=VR(a,f);if(g===null){c=1;break b;}m=a.c;n=m.f;e=m.o;b=Dp(e,m.r);n.b1=n.b1+1|0;o=n.f6;h=P(Gr,1);h.data[0]=AO$(e,0,1,g,b.V,b.bd);Bw(o,h);JE(n,e,0,1,g);FY(f,0,H(g));L6(a,a.c.r-H(g)|0);}}else{b=Dy(Be(a));f=Fb(Be(a));c=f.K;p=b.K;c=(c-p|0)+1|0;h=Bx(c);k=h.data;j=P(Bv,c);q=j.data;g=a.c;e=g.r;l=g.o;c=0;while(p<=f.K){g=BG(a.c.f,p);if(g.l.data.length>0){g=VR(a,g);if
(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=Ir(h,c);j=C3(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.K)b.U=Z(0,b.U-H(g)|0);if(p==f.K){f.U=Z(0,f.U-H(g)|0);L6(a,a.c.r-H(g)|0);}d=d+1|0;}b=Dp(l,e);f=new UA;f.qJ=a;Og(a,h,0,1,j,b,f);}DR(a);c=1;}break a;case 13:if(C4(Be(a)))F1(a);b=a.c;D_(BG(b.f,b.o));b=a.c;ACO(b.f,b.o,b.r);DR(a);c=Cl(a,a.c.o+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ADG(a);}return c;}
function AAA(a,b){var c,d,e,f;a:{switch(b.bO){case 33:c=b.cm?G4(a,H9(a.W,a.A),b.bz):Hl(a,2-VH(Cz(a),a.A)|0,0,b.cR,b.bz);break a;case 34:c=!b.cm?Hl(a,VH(Cz(a),a.A)-2|0,0,b.cR,b.bz):G4(a,((a.W+Cz(a)|0)/a.A|0)-1|0,b.bz);break a;case 35:if(!Hv(a,b.bz)&&!CY(a,(E9(a)).z,b.bz)){c=0;break a;}c=1;break a;case 36:if(!Hv(a,b.bz)&&!CY(a,0,b.bz)){c=0;break a;}c=1;break a;case 37:c=b.cm;if(c&&b.cR){Ig(a);d=a.c.gf;e=d.db;if(e<=0)d=null;else{f=d.eu.data;c=e-1|0;d.db=c;d=f[c];}if(d===null)c=1;else{Cl(a,Lm(d),Jc(d),0);HA(Be(a),
d.jO);c=1;}break a;}c=RV(a,(-1),c,b.bz);break a;case 38:c=Hl(a,(-1),b.cm,b.cR,b.bz);break a;case 39:c=b.cm;if(c&&b.cR){d=a.c.gf;e=d.db;if(e==(d.ep-1|0))d=null;else{f=d.eu.data;c=e+1|0;d.db=c;d=f[c];}if(d===null)c=1;else{Cl(a,Lm(d),Jc(d),0);HA(Be(a),d.jO);c=1;}break a;}c=RV(a,1,c,b.bz);break a;case 40:c=Hl(a,1,b.cm,b.cR,b.bz);break a;default:}c=0;}if(c&&b.bz){b=(Be(a)).bt;d=a.c;B1(b,d.o,d.r);}if(c)Kv(a.c);return c;}
function Ig(a){var b,c,d,e,f,g,h;b=a.c;c=b.gf;d=c.db;c=d<0?null:c.eu.data[d];if(c!==null&&b.o==Lm(c)&&a.c.r==Jc(c))return;c=a.c;e=c.gf;b=new Kr;d=c.o;f=c.r;c=Be(a);b.la=Dp(d,f);g=AGy(c);b.jO=g;g.c2=0;f=e.db;h=e.ep;if(f==(h-1|0))Vb(e,b);else{d=f+1|0;while(d<h){RB(e);d=d+1|0;}Vb(e,b);}e.db=e.db+1|0;}
function DR(a){a.c.f.sQ=Nv(Fs(a));}
function Gl(a,b){var c,d,e,f,g,h;a.jL=null;K1(a.cH,null);L4(a.c);c=a.c;a.c=b;P2(c,null,null);P2(b,a,Fs(a));d=(Cf(a.cv.l6)).data;e=d.length;f=0;while(f<e){g=d[f].sc;h=AMG(J_(c.bT),J_(b.bT));g.f(h);f=f+1|0;}a.W=G0(b.hV*a.A);}
function Kx(a,b){var c;c=Lf(a.c.f,b);if(c===null)return C(3);return c.q;}
function Do(a,b){return EV(b,a.Q,a.ci);}
function Jl(a,b){var c,d,e,f,g;a.c.qw=b;if(b===null){Co(EW(),C(85));K1(a.cH,null);}else{b=b.data;c=DX(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.fK<<24>>24;e=e+1|0;}K1(a.cH,c);}}
function R8(a,b){a.c.mX=b;}
function CE(a){return a.c.qw;}
function Be(a){return a.c.o0;}
function UW(a){var b;b=a.ks;if(b!==null)b.j(a);}
var ACx=F();
function ADi(){var a=this;B.call(a);a.fW=null;a.g8=null;a.e3=0;}
function Cx(a){var b=new ADi();AIU(b,a);return b;}
function AIU(a,b){a.fW=b;}
function BZ(a,b){var c,d,e;c=a.e3;d=a.fW;if(c==d.data.length)a.fW=C3(d,c+4|0);d=a.fW.data;e=a.e3;a.e3=e+1|0;d[e]=b;a.g8=null;}
function Fg(a,b){var c;BZ(a,b);c=new UP;c.sy=a;c.sz=b;return c;}
function Cf(a){var b;b=a.g8;if(!(b!==null&&b.data.length==a.e3))a.g8=C3(a.fW,a.e3);return a.g8;}
var ACW=F();
function BK(b,c){if(b===c)return 1;return b!==null?b.bu(c):c!==null?0:1;}
function BM(b){if(b!==null)return b;b=new Ge;Bp(b,C(3));L(b);}
function U_(){B.call(this);this.mL=null;}
function AJv(a){var b,c,d,e,f,g;b=a.mL;c=b.sy;b=b.sz;d=0;while(true){e=c.fW.data;f=e.length;if(d>=f)break;if(e[d]===b){while(true){g=d+1|0;if(g>=f)break;e[d]=e[g];d=g;}e[d]=null;c.e3=c.e3-1|0;c.g8=null;}d=d+1|0;}}
var Vf=F(0);
var AAL=F();
function AII(a,b){return a.Bs(b);}
function AKV(a){return a.G9();}
function Hu(){var a=this;B.call(a);a.rv=null;a.qy=null;}
function ABB(b,c){return c!==null&&b!==null&&!BE(c,b)?0:1;}
var SO=F(0);
function MR(){B.call(this);this.uC=null;}
var QC=F(0);
var OG=F(0);
function AA9(){var a=this;B.call(a);a.sn=null;a.mB=null;a.nl=null;a.dC=null;a.l_=null;a.jV=null;a.hg=null;a.e7=null;a.iu=0;a.kY=0;a.rT=null;a.d$=null;a.jk=null;}
function AOz(a,b,c,d){var e=new AA9();AE5(e,a,b,c,d);return e;}
function AE5(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new U8;f.pG=a;a.sn=f;f=new U6;f.v2=a;a.mB=f;g=new U7;g.se=a;a.l_=new $rt_globals.ResizeObserver(Bn(g,"f"));f=new U5;f.o1=a;a.jV=f;a.iu=1;h=new Sn;h.jG=new T$;f=new O2;f.yn=null;f.jv=AUH;h.qh=f;BM(f);g=new St;g.sG=f;h.vT=g;h.gm=e;i=e.length;j=0;while(j<i){f=e[j];k=new Su;k.ru=h;k.rt=j;g=Bn(k,"f");f.onmessage=g;f=e[j];g=AAF();f.postMessage(g);j=j+1|0;}h.gV=0;h.kS=Bx(i);h.kq=Bx(i);a.jk=h;a.nl=(Ff()).getElementById($rt_ustr(d));e=Yy();d=0;e.tabIndex=d;g=e.style;g.setProperty("width",
"100%");g.setProperty("height","100%");g.setProperty("outline","none");a.dC=e;a.nl.appendChild(e);d=a.dC;f=AMq(!!0,!!0,!!1,!!1);d=d.getContext("webgl2",f);if(d===null)c.s();else{c=new Pq;e=a.dC;g=a.mB;c.dz=null;c.g4=e;c.b_=ASY(g);g=$rt_globals.window;l=P(CV,14);m=l.data;f=new VY;f.nY=c;m[0]=CG(c,e,C(86),f);k=new VZ;k.s0=c;m[1]=CG(c,e,C(87),k);k=new V0;k.pt=c;m[2]=CG(c,e,C(88),k);k=new V1;k.vZ=c;m[3]=CG(c,e,C(89),k);m[4]=CG(c,e,C(90),ASL(c));m[5]=CG(c,e,C(91),ATh(c));m[6]=CG(c,e,C(92),ARH(c));m[7]=CG(c,e,C(93),
ARM(c));m[8]=CG(c,e,C(94),ATp(c));m[9]=CG(c,e,C(95),ASB(c));m[10]=CG(c,e,C(96),ARt(c));m[11]=ABL(c,g,C(97),AR9(c),1);m[12]=CG(c,g,C(98),ATy(c));m[13]=CG(c,g,C(99),ASp(c));c.le=AQh(l);Z2(c,e);a.hg=c;a.e7=ASg(d,a.mB);AOt(a.l_,a.dC);e=$rt_globals.window;d=a.jV;e.addEventListener("resize",Bn(d,"handleEvent"));a.d$=b.mF(ZT(a));S6(a);}}
function UH(a){a.dC.focus();}
function ZT(a){var b,c,d;b=new Mk;c=a.e7;d=a.hg.b_;b.jK=c;b.bj=d;b.i3=a;return b;}
function S6(a){a.kY=$rt_globals.requestAnimationFrame(Bn(a.sn,"onAnimationFrame"));}
function I$(a){a.iu=1;}
function S4(a,b,c){var d,e;a.hg.dz=Cg(b,c);d=a.dC;e=b;d.width=e;d=a.dC;e=c;d.height=e;d=a.e7;Bg(d.cW,b,c);e=d.T;d=d.cW;b=d.a;c=d.b;e.viewport(0,0,b,c);a.d$.iZ(a.e7.cW,J4(a));a.d$.e9();}
function Nv(a){return $rt_globals.performance.now()/1000.0;}
function J4(a){return $rt_globals.window.devicePixelRatio;}
function VP(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADq(b,0);else{c=new WU;d=$rt_globals.window.showOpenFilePicker();e=new WT;e.qG=b;e.qF=c;d.then(Bn(e,"f"),Bn(c,"f"));}}
function D9(a,b,c,d){var e,f,g,h;e=a.jk;f=e.gV;if(f>0){g=e.kS.data;f=f-1|0;e.gV=f;KT(e,b,c,d,g[f]);}else{h=e.jG;e=new Wb;e.ts=b;e.uh=c;e.s3=d;b=new TN;b.oA=e;c=h.jF;b.t3=c;if(c===null)h.kI=b;else c.s6=b;h.jF=b;h.bN=h.bN+1|0;h.hT=h.hT+1|0;}}
function Lx(a,b,c,d,e){var f,g;f=a.jk;if(c>=f.gm.length)c=0;g=f.kq.data;g[c]=g[c]+1|0;KT(f,b,d,e,c);}
function ADQ(b){var c;c=new WG;c.oc=b;return c;}
var Xc=F(0);
var AUP=null;function AS8(){AS8=Bm(Xc);AM$();}
function AM$(){AUP=new $rt_globals.TextDecoder("utf-16");}
function Lp(){B.call(this);this.kK=null;}
function FZ(){var a=this;Lp.call(a);a.nX=null;a.bh=null;}
function Vr(a,b){var c,d,e;a.kK=b;a.nX=Js(0,0,64,255,new B5);c=new TZ;c.cJ=new Bj;c.kk=Cx(P(Ih,0));c.dp=new Bj;c.uA=new Bj;c.wu=new B5;c.wv=new B5;d=b.jK;c.dl=d;e=b.i3;c.gO=e;c.cF=d.lt;d=new RI;d.uY=e;c.di=d;d=b.bj.kd;e=new Qa;e.r4=c;BZ(d,e);d=b.bj.mt;e=new P$;e.vU=c;BZ(d,e);a.bh=c;BZ(b.bj.er,new RY);b=b.bj.er;c=a.bh;BM(c);d=new RX;d.oD=c;BZ(b,d);}
function TE(a){var b,c,d,e,f,g,h;b=a.kK.jK;c=a.nX;d=b.T;e=c.bp;f=c.bG;g=c.bc;h=c.b0;d.clearColor(e,f,g,h);b.T.clear(16384);}
function SH(a,b,c){var d,e,f,g;a:{d=a.bh;Cw(d.cJ,b);if(d.b2!==c){d.b2=c;e=(Cf(d.kk)).data;f=e.length;g=0;while(true){if(g>=f)break a;b=e[g];b.ja=Im(b.cI,b.iO);d=BO(b.cd);while(BP(d)){PX(BS(d),b.ja,b.cI);}g=g+1|0;}}}}
var OE=F(0);
var Jv=F(0);
function LX(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HL;c=new H7;d=new Ii;ACS();Jn(d,AUV);L2(c,d,BH(AUW),BH(AUX),BH(AUY),BH(AUW),BH(AUZ),BH(AU0),BH(AU1),BH(AU2),BH(AU3),BH(AU4));ZG();e=(AU5.gu()).data;f=e.length;g=P(Iq,f);h=g.data;i=0;while(i<f){h[i]=e[i].lV;i=i+1|0;}j=ABP(O(C(100)),O(C(101)),O(C(102)),O(C(103)));k=new HO;l=new HZ;ALm();m=AU6;L8(l,m,AU7,AU8,AU9,AU$,m);K6(k,l,ADk(),ADt(O(C(104)),O(C(105)),O(C(106))),ADk(),XT(1,0.125),AU_,AVa);Iy(b,c,g,j,k,X$(O(C(107)),O(C(108)),O(C(109)),O(C(110))));a.iB(b);}
function FU(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HL;c=new H7;d=new Ii;AHL();Jn(d,AVb);L2(c,d,BH(AVc),BH(AVd),BH(AVe),BH(AVc),BH(AVf),BH(AVg),BH(AVh),BH(AVi),BH(AVj),BH(AVk));UF();e=(AVl.gu()).data;f=e.length;g=P(Iq,f);h=g.data;i=0;while(i<f){h[i]=e[i].hS;i=i+1|0;}j=ABP(O(C(111)),O(C(112)),O(C(113)),O(C(114)));k=new HO;l=new HZ;AEB();m=AVm;L8(l,m,AVn,AVo,AVp,AVq,m);K6(k,l,ACN(),ADt(O(C(115)),O(C(105)),O(C(106))),ACN(),XT(1,0.17499999701976776),AVr,AVs);Iy(b,c,g,j,k,X$(O(C(107)),O(C(108)),O(C(109)),O(C(116))));a.iB(b);}
function J5(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HL;c=new H7;d=new Ii;ACA();Jn(d,AVt);L2(c,d,BH(AVu),BH(AVv),BH(AVw),BH(AVu),BH(AVx),BH(AVy),BH(AVz),BH(AVA),BH(AVB),BH(AVC));ABK();e=(AVD.gu()).data;f=e.length;g=P(Iq,f);h=g.data;i=0;while(i<f){h[i]=e[i].k3;i=i+1|0;}j=ABP(O(C(117)),O(C(118)),O(C(119)),O(C(120)));k=new HO;l=new HZ;AEP();m=AVE;L8(l,m,AVF,AVG,AVH,AVI,m);K6(k,l,ADe(),ADt(O(C(121)),O(C(122)),HG(0)),ADe(),XT(1,0.07500000298023224),AVJ,AVK);Iy(b,c,g,j,k,X$(O(C(123)),O(C(124)),O(C(125)),O(C(126))));a.iB(b);}
var K$=F(0);
function Ms(){var a=this;FZ.call(a);a.cr=null;a.fb=null;}
function AI9(a,b){if(Wi(a.bh,b)){Rp(a.fb);J9(a.cr,b);}}
function AOY(a,b){return KD(a.cr,b);}
function AIJ(a){TE(a);Iw(a.cr);Xt(a.fb);}
function AD9(a,b,c){SH(a,b,c);IJ(a.cr,new Bj,b,c);}
function AHc(a,b){BM(b);ML(a.fb,b);JA(a.cr,b);}
var Kk=F(0);
function OF(){B.call(this);this.rH=null;}
function AM6(a,b,c,d,e,f){var g,h,i,j;g=a.rH;h=E8(b);i=HE(d,c);j=JF();g=g.provideDeclaration(h,i,j);b=new Mn;b.ue=e;b.ud=f;LV(g,b,f);}
var W4=F(0);
function WL(){B.call(this);this.oS=null;}
var Fm=F(0);
function ME(){B.call(this);this.sc=null;}
function V8(){B.call(this);this.t_=null;}
function AGQ(a,b,c,d,e,f){var g,h,i,j;g=a.t_;h=E8(b);i=HE(d,c);j=JF();g=g.provideDefinition(h,i,j);b=new QP;b.sU=e;b.sT=f;LV(g,b,f);}
function Lo(){var a=this;B.call(a);a.V=0;a.bd=0;}
function Dp(a,b){var c=new Lo();Sc(c,a,b);return c;}
function Sc(a,b,c){a.V=b;a.bd=c;}
function AEx(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return a.V==c.V&&a.bd==c.bd?1:0;}return 0;}
function ANJ(a){var b,c,d,e;b=P(B,2).data;b[0]=Ct(a.V);b[1]=Ct(a.bd);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bg)|0;d=d+1|0;}return c;}
function ANf(a,b){var c;b=b;c=BA(a.V,b.V);if(!c)c=BA(a.bd,b.bd);return c;}
var Gb=F(0);
var HF=F(0);
var Ez=F(0);
var Hc=F(0);
function Ob(){var a=this;FZ.call(a);a.w=null;a.v=null;a.dF=null;a.gR=0;a.fu=null;a.ir=null;a.vW=null;}
function XH(a,b){var c,d,e,f,g;if(a.w===b)a.gR=a.gR|1;if(a.v===b)a.gR=a.gR|2;if((a.gR&3)==3){Co(EW(),C(127));b=a.w.c;c=a.v.c;d=Dg(b.f);e=Dg(c.f);f=Y7(b.f);g=Y7(c.f);b=a.kK.i3;c=new P1;c.rc=a;D9(b,c,C(128),G(B,[d,f,e,g]));}}
function AP_(a,b,c){if(DI(a.bh,a.w))return Gx(a.w,b,c);if(!DI(a.bh,a.v))return 0;return Gx(a.v,b,c);}
function Xo(a,b){var c;c=new S2;c.ql=b;return c;}
function Ve(a,b,c){var d,e,f,g,h,i,j;d=a.fu;if(d!==null&&d.fD!==null){e=b!==a.w?0:1;f=Fk(b);g=(Gu(b)+f|0)/2|0;h=g-f|0;d=a.fu;d=d.fD.data[FI(d,g,e)];i=g-(!e?d.hv:d.hw)|0;j=b.W-T(f,b.A)|0;e=KP(T(((!e?d.hw:d.hv)+i|0)-h|0,c.A)+j|0,FN(c));c.W=e;c.c.hV=e/c.A;return;}}
function ANK(a,b){var c,d;c=KD(a.w,b);d=KD(a.v,b);return !c&&!d?0:1;}
function AK0(a){TE(a);Iw(a.w);Iw(a.v);ADE(a.ir,a.fu,a.bh,a.w,a.v,a.vW,a.dF.fI);Xt(a.dF);}
function Rd(a){return ADC(0);}
function AOk(a){Nt(a.w);Nt(a.v);}
function AKR(a){Xr(a.w);Xr(a.v);}
function APm(a,b){Oa(a.w,b);Oa(a.v,b);}
function AGC(a,b){if(Wi(a.bh,b)){Rp(a.dF);J9(a.w,b);J9(a.v,b);}}
function AKh(a,b,c){var d,e,f,g,h,i;SH(a,b,c);d=new Bj;e=Cp(20.0,c);f=new Bj;g=b.a/2|0;h=e/2|0;Zx(f,g-h|0,b.b);IJ(a.w,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;IJ(a.v,d,f,c);Bg(a.ir.cZ,f.a,d.b);Bg(a.ir.eo,d.a-f.a|0,f.b);}
function AEQ(a,b){BM(b);ML(a.dF,b);JA(a.w,b);JA(a.v,b);}
function AMO(a,b){var c,d;c=Do(a.w,b.n)&&NT(a.w,b)?1:0;d=Do(a.v,b.n)&&NT(a.v,b)?1:0;return !c&&!d?0:1;}
function AJb(a,b,c,d){var e,f;e=Do(a.w,b.n)&&MK(a.w,b,c,d)?1:0;f=Do(a.v,b.n)&&MK(a.v,b,c,d)?1:0;return !e&&!f?0:1;}
function ALd(a,b,c){var d,e,f,g,h,i,j,k;d=Do(a.w,b.n);e=Do(a.v,b.n);f=a.bh;g=f.d2;h=g!==null?0:1;i=a.w;j=g!==i?0:1;k=g!==a.v?0:1;if(d&&!(!h&&!k))Fq(f,i);if(e&&!(!h&&!j))Fq(a.bh,a.v);if(d){i=MA(a.w,b,c);if(i!==null)return i;}return !e?null:MA(a.v,b,c);}
function ANC(a,b,c){var d,e,f,g;d=Do(a.w,b.n);e=Do(a.v,b.n);f=d&&S8(a.w,b,c)?1:0;g=e&&S8(a.v,b,c)?1:0;return !f&&!g?0:1;}
function AM5(a,b,c,d){var e,f,g,h;e=Do(a.w,b.n);f=Do(a.v,b.n);g=e&&Jj(a.w,c,d)?1:0;h=f&&Jj(a.v,c,d)?1:0;return !g&&!h?0:1;}
function AJ5(a){return DI(a.bh,a.w)?Xo(a,a.w):!DI(a.bh,a.v)?null:Xo(a,a.v);}
var ZP=F();
var Zf=F();
var BY=F(0);
function Ps(){var a=this;B.call(a);a.oe=null;a.of=null;}
function AKy(a,b){var c,d,e;c=a.oe;d=a.of;e=new Po;e.g7=AOz(new XO,new XP,Ce(d.containerId),b);e.bA=(Nu(e)).cr;if(ABJ(d))QE(e,d.theme);if(Zt(d))Uo(e,d.readonly);c.f(e);}
var ACd=F(0);
function ABJ(b){return "theme" in b?1:0;}
function Zt(b){return "readonly" in b?1:0;}
function ABG(b){return !("workerUrl" in b?1:0)?"worker.js":b.workerUrl;}
function X9(b){return !("numThreads" in b?1:0)?2:b.numThreads|0;}
var AAS=F();
function Za(b,c,d,e){var f,g,h,i,j;f=new $rt_globals.Array();g=0;while(g<e){h=new $rt_globals.Worker(d);i=new NG;i.pY=h;i.pZ=f;i.p0=e;i.p1=b;i.pU=c;j=Bn(i,"f");h.onmessage=j;g=g+1|0;}}
function QM(){var a=this;B.call(a);a.u6=null;a.u7=null;}
function AHO(a,b){var c,d,e,f;c=a.u6;d=a.u7;e=new VC;f=AOz(new UJ,new UK,Ce(d.containerId),b);e.p_=f;e.dj=f.d$;if(ABJ(d))PE(e,d.theme);if(Zt(d))P7(e,d.readonly);c.f(e);}
function NG(){var a=this;B.call(a);a.pY=null;a.pZ=null;a.p0=0;a.p1=null;a.pU=null;}
function AM8(a,b){var c,d,e,f,g;c=a.pY;d=a.pZ;e=a.p0;f=a.p1;g=a.pU;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var Y=F(0);
function XL(){B.call(this);this.sS=null;}
function AIX(a,b){var c,d,e,f,g;c=b.data;b=a.sS;d=c.length;e=P(Bv,d).data;f=0;while(f<d){e[f]=c[f].cP();f=f+1|0;}d=e.length;g=new $rt_globals.Array(d);f=0;while(f<d){c=$rt_ustr(e[f]);f;g[f]=c;f=f+1|0;}b.f(g);}
var ZC=F();
function AAF(){return "ping";}
function ADI(b){return b===AAF()?1:0;}
var D4=F(0);
var XO=F();
function AJH(a,b){var c,d,e,f,g;c=new Ms;Vr(c,b);d=AOx(c.bh);c.fb=d;e=Z_(c.bh,d);c.cr=e;NR(c.bh,e);BZ(b.bj.d1,c.fb);BZ(b.bj.f7,c.fb);BZ(b.bj.d1,c.cr);d=b.bj.er;e=new Pz;e.w9=c;BZ(d,e);d=b.bj.er;e=new JW;f=c.cr;BM(f);g=new Px;g.vn=f;MS(e,b,g);BZ(d,e);d=b.bj.jm;e=c.cr;BM(e);f=new Py;f.pf=e;BZ(d,f);d=b.bj.iG;e=new NU;e.qc=c;BZ(d,e);d=b.bj.f7;e=new NV;e.v9=c;BZ(d,e);b=b.bj.iw;d=new NS;d.nF=c;BZ(b,d);FU(c);return c;}
var Bk=F(0);
var XP=F();
function AIv(a){ABj();}
var UJ=F();
function ANt(a,b){var c,d,e,f;c=new Ob;Vr(c,b);d=new P_;d.cZ=new Bj;d.eo=new Bj;d.h9=new Bj;d.h$=new Bj;d.h6=new Bj;d.h7=new Bj;c.ir=d;c.vW=AA1();d=AOx(c.bh);c.dF=d;c.w=Z_(c.bh,d);c.v=Z_(c.bh,c.dF);d=c.w;d.bx=1;e=new Uu;e.ve=c;f=new Uv;f.q8=c;VV(d,e,e);VV(c.v,f,f);d=c.w;e=new Uw;e.nB=c;d.ks=e;e=c.v;f=new Uq;f.uj=c;e.ks=f;R8(d,0);R8(c.v,0);NR(c.bh,c.w);BZ(b.bj.d1,c.dF);BZ(b.bj.f7,c.dF);BZ(b.bj.f7,c);BZ(b.bj.d1,c);d=b.bj.er;e=new Ur;e.xv=c;BZ(d,e);d=b.bj.er;e=new JW;f=new Us;f.m8=c;MS(e,b,f);BZ(d,e);BZ(b.bj.jm,
c);BZ(b.bj.iG,c);b=b.bj.iw;d=new Ut;d.sP=c;BZ(b,d);FU(c);return c;}
var UK=F();
function AQ4(a){ABj();}
var Rk=F(0);
function U8(){B.call(this);this.pG=null;}
function AJe(a,b){var c,d;c=b;b=a.pG;if(!(!b.d$.lJ(c/1000.0)&&!b.iu)){d=b.e7.cW;if(T(d.a,d.b)){b.iu=0;b.d$.e9();}}S6(b);}
function U6(){B.call(this);this.v2=null;}
function C1(a){I$(a.v2);}
var Qi=F(0);
function U7(){B.call(this);this.se=null;}
function AHj(a,b,c){var d,e,f,g;c=a.se;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dC){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=J4(c);S4(c,G0(f.width*g),G0(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];S4(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AC1=F();
function AOt(b,c){ANz(b,c,AEs());}
function AEs(){return {box:'device-pixel-content-box'};}
function ANz(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cd=F(0);
function U5(){B.call(this);this.o1=null;}
function ANi(a,b){b=a.o1;b.d$.iZ(b.e7.cW,J4(b));b.d$.e9();}
function Sn(){var a=this;B.call(a);a.jG=null;a.gm=null;a.qh=null;a.kS=null;a.kq=null;a.nQ=0;a.gV=0;a.vT=null;}
function KT(a,b,c,d,e){var f,g,h,i,j,k;d=d.data;f=a.nQ+1|0;a.nQ=f;g=a.qh;h=Ct(f);g.hH=LO(g,g.hH,h);h=Ul(g,h);Ml(h,b);Ml(h,b);g.jA=g.jA+1|0;b=a.gm[e];i=d.length;g=new $rt_globals.Array(i+2|0);h=f;0;g[0]=h;c=$rt_ustr(c);1;g[1]=c;h=new $rt_globals.Array();j=0;while(j<i){c=d[j];if(c instanceof Bv)k=$rt_ustr(c);else if(H$(c,$rt_arraycls($rt_bytecls())))k=c.data.buffer;else if(H$(c,$rt_arraycls($rt_charcls())))k=c.data.buffer;else if(H$(c,$rt_arraycls($rt_intcls())))k=c.data.buffer;else{if(!(c instanceof Ky)){b=new BF;c
=Bz(c);if(c.km===null)c.km=$rt_str(c.fJ.$meta.name);h=c.km;c=new R;U(c);K(K(c,C(129)),h);Bp(b,S(c));L(b);}c=c;k=c.hU;if(k===null)k=c.fQ;}f=j+2|0;f;g[f]=k;if(k instanceof $rt_globals.ArrayBuffer?1:0)h.push(k);j=j+1|0;}b.postMessage(g,h);}
var LJ=F(El);
var Mq=F(0);
var W7=F(0);
function T$(){var a=this;LJ.call(a);a.kI=null;a.jF=null;a.hT=0;}
var W3=F(0);
var MY=F(0);
function O2(){var a=this;DB.call(a);a.hH=null;a.jv=null;a.yn=null;a.jA=0;}
function ADf(a,b){var c;c=Ul(a,b);if(c===null)return null;a.hH=JD(a,a.hH,b);a.jA=a.jA+1|0;return c.iy;}
function Ul(a,b){var c,d;c=a.hH;while(true){if(c===null)return null;d=I5(a.jv,b,c.iW);if(!d)break;c=d>=0?c.bU:c.bC;}return c;}
function LO(a,b,c){var d,e;if(b===null){b=new IZ;d=null;b.iW=c;b.iy=d;b.fh=1;b.fs=1;return b;}e=I5(a.jv,c,b.iW);if(!e)return b;if(e>=0)b.bU=LO(a,b.bU,c);else b.bC=LO(a,b.bC,c);D7(b);return Jh(b);}
function JD(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=I5(a.jv,c,b.iW);if(d<0)b.bC=JD(a,b.bC,c);else if(d>0)b.bU=JD(a,b.bU,c);else{e=b.bU;if(e===null)return b.bC;f=b.bC;g=P(IZ,e.fh).data;h=0;while(true){b=e.bC;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bU;while(h>0){h=h+(-1)|0;j=g[h];j.bC=b;D7(j);b=Jh(j);}e.bU=b;e.bC=f;D7(e);b=e;}D7(b);return Jh(b);}
function St(){B.call(this);this.sG=null;}
function Su(){var a=this;B.call(a);a.ru=null;a.rt=0;}
function AEo(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.ru;d=a.rt;ADI(b.data);e=c.kq.data;f=e[d];if(f>0)e[d]=f-1|0;else{g=c.jG;h=g.kI;if(h===null)i=null;else{i=h.s6;g.kI=i;if(i!==null)i.t3=null;else g.jF=null;g.hT=g.hT-1|0;g.bN=g.bN+1|0;i=h.oA;}if(i!==null)KT(c,i.ts,i.uh,i.s3,d);else{e=c.kS.data;j=c.gV;c.gV=j+1|0;e[j]=d;}}c=c.vT;b=b.data;if(!ADI(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BF;X(b);L(b);}if(b.length<1){b=new BF;AB1(b);L(b);}g=Ct(b[0]);h=ADf(c.sG,g);e=P(B,b.length-1|0);k=e.data;f=0;j=k.length;while
(f<j){l=f+1|0;g=b[l];k[f]=(typeof g==='string'?1:0)?Ce(JH(g)):(g instanceof $rt_globals.ArrayBuffer?1:0)?AR8(JH(g)):(g instanceof $rt_globals.File?1:0)?ABt(null,JH(g)):!(g instanceof $rt_globals.FileSystemFileHandle?1:0)?null:ABt(JH(g),null);f=l;}h.j(e);}}
function Pq(){var a=this;B.call(a);a.b_=null;a.g4=null;a.le=null;a.dz=null;}
function MV(){return (Ff()).activeElement;}
function CG(a,b,c,d){b.addEventListener($rt_ustr(c),Bn(d,"handleEvent"));return Wj(a,b,c,d);}
function ABL(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bn(d,"handleEvent"),!!e);return Wj(a,b,c,d);}
function Wj(a,b,c,d){var e;e=new Qf;e.os=b;e.ou=c;e.ot=d;return e;}
function Tt(a,b){var c;c=new Un;c.vY=b;return c;}
function Eo(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.g4.getBoundingClientRect();e=Cg(G0((b.clientX-d.left)*c),G0((b.clientY-d.top)*c));f=new Bj;g=a.dz;f.a=g.a;f.b=g.b;d=new Mh;TT(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.n=e;d.wA=f;return d;}
function Xw(a,b,c){var d,e,f,g;d=new OW;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;TT(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j2=0;d.d5=e;d.bO=f;d.tS=c;d.xN=g;return d;}
function Dr(a,b){b.stopPropagation();b.preventDefault();}
function Z2(a,b){var c;c=new W1;c.qm=b;b.onpointerdown=Bn(c,"f");c=new W2;c.o7=b;b.onpointerup=Bn(c,"f");}
function KI(){var a=this;B.call(a);a.rQ=null;a.c0=null;a.T=null;a.lt=0;a.t1=null;a.xd=0;a.x7=0;a.jC=null;a.yA=null;a.yk=null;a.ya=null;a.e$=null;a.fv=null;a.yb=null;a.gC=null;a.hB=null;a.ys=null;a.it=null;a.cW=null;a.vH=null;a.lD=0;a.jX=0;a.me=0;a.lZ=0;a.id=0;a.mb=null;}
function ABD(a,b,c,d){var e,f,g,h,i,j;a.cW=new Bj;a.lD=0;a.mb=new V4;a.rQ=c;a.lt=d;e=$rt_str(b.getParameter(7938));f=new R;U(f);K(K(f,C(130)),e);$rt_globals.console.info($rt_ustr(S(f)));a.T=b;a.c0=No(c,4,4,1);g=AEf(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=B0(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;c=new Qg;Ha();f=AVL;c.dN=b;c.gl=f;c.ly=h.length/f.kG|0;c.mm=j.length;f
=b.createBuffer();c.hQ=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);c.ju=null;f=b.createBuffer();c.jl=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}f=null;b.bindBuffer(34962,f);f=null;b.bindBuffer(34963,f);a.it=c;a.x7=J1(e,C(131));c=new Qh;c.dP=b;a.t1=c;d=b.getParameter(3379);a.xd=d;c=new R;U(c);Bl(K(c,C(132)),d);$rt_globals.console.info($rt_ustr(S(c)));g=P(CI,9);i=g.data;c=new VF;GB(c,b,C(133),C(134),AVL);e=c.bs;c.u2=b.getUniformLocation(e,"uColor");a.jC=c;i[0]=
c;c=ARE(b);a.yA=c;i[1]=c;c=ASO(b);a.yk=c;i[2]=c;c=ATa(b);a.ya=c;i[3]=c;c=ASh(b);a.e$=c;i[4]=c;c=ATs(b);a.fv=c;i[5]=c;c=ATj(b);a.yb=c;i[6]=c;c=AS6(b);a.gC=c;i[7]=c;c=AS7(b);a.hB=c;i[8]=c;a.ys=g;ADp(b,C(135));}
function E_(a,b,c,d){return No(a.rQ,b,c,d);}
function Dh(a,b){var c;if(b==a.jX)return b;if(!b)a.T.disable(3042);else{a.T.enable(3042);a.T.blendFuncSeparate(770,771,1,1);}c=a.jX;a.jX=b;return c;}
function RF(a,b,c){Uy(a,b.a,b.b,c);}
function Uy(a,b,c,d){var e,f;e=d.a;f=d.b;a.lZ=1;a.id=1;d=a.mb;d.r1=b;d.r3=c;d.r0=e;d.rZ=f;TU(a);}
function Lh(a){a.lZ=0;a.id=0;TU(a);}
function TU(a){var b,c,d,e,f,g;b=a.me;c=a.lZ;if(b!=c){a.me=c;if(!c)a.T.disable(3089);else a.T.enable(3089);}if(a.me&&a.id){a.id=0;d=a.T;e=a.mb;b=e.r1;c=a.cW.b-e.r3|0;f=e.rZ;c=c-f|0;g=e.r0;d.scissor(b,c,g,f);}}
function Gc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.it;c=a.lD;d=b.gl.tc;e=b.dN;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dN;h=b.hQ;e.bindBuffer(34962,h);i=b.gl.mH.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dN;m=k.ha;n=k.e1;o=b.gl.kG*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.e1|0;j=j+1|0;}a:{e=b.ju;if(e!==null){c=0;b.dN.bindBuffer(34962,e);i=b.gl.rP.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dN;j=e.ha;p=e.e1;m=e.pQ;n=b.gl.qe;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.e1|0;g=g+1|0;}}}q=b.jl;if(q===null){c=b.ly;if(c>0)b.dN.drawArrays(4,0,c);}else{b.dN.bindBuffer(34963,q);k=b.dN;g=b.mm;k.drawElements(4,g,5123,0);}a.lD=d;}
function BC(a,b,c,d,e){Gg(a,a.jC);GU(a.jC,a.T,b,c,d,a.cW);d=a.jC;Gh(a.T,d.u2,e);Gc(a);}
function Et(a,b,c,d,e,f,g,h,i){Gg(a,a.e$);GU(a.e$,a.T,b,c,d,a.cW);TO(a.e$,a.T,f);MF(a.e$,a.T,f,e);S_(a.e$,a.T,g,h);d=a.e$;e=a.T;d=d.pz;e.uniform2f(d,i,0.0);Gc(a);}
function Ew(a,b,c,d,e,f,g,h){Gg(a,a.fv);GU(a.fv,a.T,b,c,d,a.cW);TO(a.fv,a.T,f);MF(a.fv,a.T,f,e);S_(a.fv,a.T,g,h);Gc(a);}
function GY(a){var b,c;b=new IY;c=a.t1;b.eI=new Bj;b.es=c;b.eR=c.dP.createTexture();AVM=AVM+1|0;return b;}
function Gg(a,b){var c,d;if(b!==a.vH){c=a.T;d=b.bs;c.useProgram(d);a.vH=b;}}
function ACy(){var a=this;KI.call(a);a.xK=null;a.yl=null;}
function ASg(a,b){var c=new ACy();AJx(c,a,b);return c;}
function AJx(a,b,c){ABD(a,b,new TW,1);a.yl=new TV;a.xK=c;}
function Gw(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;a:{f=a.c0;switch(e){case 1:break;case 2:g='italic ';break a;default:g='';break a;}g='oblique ';}h=g+d+' '+c+'px '+$rt_ustr(b);M2(f,h);g=f.dh.measureText("W");i=g.fontBoundingBoxAscent;j=g.fontBoundingBoxDescent;k=g.width;l=GE(f,C(64));m=GE(f,C(136));g=new Kz;h=h;g.mk=b;g.wZ=c;n=c|0;if(n!==c){b=new R;U(b);f=K(b,C(137));ABq(f,f.H,c);$rt_globals.console.info($rt_ustr(S(b)));}g.pL=n;g.w6=d;g.xs=e;g.ej=i;g.dU=j;g.wX=l;g.l8=k;g.nC=h;g.rJ=DE(i);g.yd=DE(g.dU);d=m*32.0|
0;n=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;b:{g.w3=d;switch(e){case 1:break;case 2:b=C(138);break b;default:b=C(139);break b;}b=C(140);}g.wQ=b;return g;}
function ZI(){var a=this;B.call(a);a.er=null;a.wi=null;a.d1=null;a.f7=null;a.iw=null;a.jm=null;a.iG=null;a.mt=null;a.kd=null;a.cV=null;a.hl=null;a.oY=0;}
function ASY(a){var b=new ZI();AMN(b,a);return b;}
function AMN(a,b){a.er=Cx(P(D$,0));a.wi=Cx(P(D$,0));a.d1=Cx(P(ET,0));a.f7=Cx(P(Gb,0));a.iw=Cx(P(Iu,0));a.jm=Cx(P(HF,0));a.iG=Cx(P(Hc,0));a.mt=Cx(P(Bk,0));a.kd=Cx(P(Bk,0));a.cV=b;}
function TA(a,b){var c,d,e,f;C1(a.cV);c=(Cf(!b.tS?a.wi:a.er)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].co(b);if(f)break;if(b.j2)break;e=e+1|0;}return f;}
function QY(a,b,c){var d,e,f;C1(a.cV);d=(Cf(a.jm)).data;e=d.length;f=0;while(f<e){if(d[f].ml(b,c))return 1;f=f+1|0;}return 0;}
function VY(){B.call(this);this.nY=null;}
function AML(a,b){var c;c=a.nY;if(TA(c.b_,Xw(c,b,1)))Dr(c,b);}
function VZ(){B.call(this);this.s0=null;}
function AMY(a,b){var c;c=a.s0;if(TA(c.b_,Xw(c,b,0)))Dr(c,b);}
function V0(){B.call(this);this.pt=null;}
function ALe(a,b){var c,d,e,f,g,h,i;c=a.pt;if(c.dz!==null){a:{b:{d=Eo(c,b);e=c.b_;C1(e.cV);f=e.hl;if(f!==null)f.j(d);else{g=(Cf(e.d1)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].gg(d))break a;i=i+1|0;}}}}Dr(c,b);}}
function V1(){B.call(this);this.vZ=null;}
function AKE(a,b){var c,d,e,f,g,h;c=a.vZ;b.button;if(c.dz!==null)a:{d=Eo(c,b);c=c.b_;e=b.button;C1(c.cV);if(c.hl===null){f=(Cf(c.d1)).data;g=f.length;h=0;while(h<g){b=f[h].f3(d,e);if(b!==null){c.hl=b;c.oY=e;break a;}h=h+1|0;}}}}
function AC7(){B.call(this);this.r9=null;}
function ASL(a){var b=new AC7();AOs(b,a);return b;}
function AOs(a,b){a.r9=b;}
function AK3(a,b){var c,d,e,f,g,h,i;c=a.r9;b.button;if(c.dz!==null){d=Eo(c,b);e=c.b_;f=b.button;C1(e.cV);if(f==e.oY&&e.hl!==null)e.hl=null;g=(Cf(e.d1)).data;h=g.length;i=0;a:{while(i<h){if(g[i].ge(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Dr(c,b);}}
function AC8(){B.call(this);this.ov=null;}
function ATh(a){var b=new AC8();AL3(b,a);return b;}
function AL3(a,b){a.ov=b;}
function ANv(a,b){var c,d,e,f,g,h,i,j,k;c=a.ov;if(c.dz!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.b_;f=Eo(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;C1(e.cV);i=(Cf(e.f7)).data;j=i.length;k=0;b:{while(k<j){if(i[k].f8(f,d,h))break b;k=k+1|0;}}Dr(c,b);}}
function AC9(){B.call(this);this.wb=null;}
function ARH(a){var b=new AC9();ANZ(b,a);return b;}
function ANZ(a,b){a.wb=b;}
function AI0(a,b){var c,d,e,f,g,h,i,j;c=a.wb;if(c.dz!==null){d=Eo(c,b);e=c.b_;f=b.button;g=b.detail;C1(e.cV);h=(Cf(e.d1)).data;i=h.length;j=0;a:{while(j<i){if(h[j].fM(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Dr(c,b);}}
function AC$(){B.call(this);this.si=null;}
function ARM(a){var b=new AC$();APO(b,a);return b;}
function APO(a,b){a.si=b;}
function AQ7(a,b){var c,d,e,f,g,h,i;c=a.si;if(c.dz!==null){d=Eo(c,b);e=c.b_;C1(e.cV);f=(Cf(e.iw)).data;g=f.length;h=0;a:{while(h<g){if(f[h].co(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Dr(c,b);}}
function AC_(){B.call(this);this.oL=null;}
function ATp(a){var b=new AC_();AJU(b,a);return b;}
function AJU(a,b){a.oL=b;}
function AH7(a,b){var c,d,e;b=a.oL.b_;c=(Cf(b.kd)).data;d=c.length;e=0;while(e<d){c[e].s();e=e+1|0;}C1(b.cV);}
function ADa(){B.call(this);this.u$=null;}
function ASB(a){var b=new ADa();APE(b,a);return b;}
function APE(a,b){a.u$=b;}
function AOB(a,b){var c,d,e;b=a.u$.b_;c=(Cf(b.mt)).data;d=c.length;e=0;while(e<d){c[e].s();e=e+1|0;}C1(b.cV);}
function ADJ(){B.call(this);this.uy=null;}
function ARt(a){var b=new ADJ();AFe(b,a);return b;}
function AFe(a,b){a.uy=b;}
function AQE(a,b){var c;c=a.uy;if(c.dz!==null)Eo(c,b);}
function ADK(){B.call(this);this.tk=null;}
function AR9(a){var b=new ADK();ARk(b,a);return b;}
function ARk(a,b){a.tk=b;}
function AKT(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.tk;if(MV()===c.g4){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cf(c.b_.iG)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].ee();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.b_.cV;m=new Nz;m.vo=k;m.vp=l;g.getAsString(Bn(m,"accept"));Dr(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new R;U(l);K(K(K(K(l,C(141)),k),C(142)),g);$rt_globals.console.info($rt_ustr(S(l)));}e=e
+1|0;}}}
function ADL(){B.call(this);this.m2=null;}
function ATy(a){var b=new ADL();AL4(b,a);return b;}
function AL4(a,b){a.m2=b;}
function ALj(a,b){var c;c=a.m2;if(MV()===c.g4&&QY(c.b_,Tt(c,b),0))Dr(c,b);}
function ADM(){B.call(this);this.vy=null;}
function ASp(a){var b=new ADM();ANu(b,a);return b;}
function ANu(a,b){a.vy=b;}
function AM_(a,b){var c;c=a.vy;if(MV()===c.g4&&QY(c.b_,Tt(c,b),1))Dr(c,b);}
var TI=F(0);
var TW=F();
function No(a,b,c,d){var e,f,g,h;e=new Rv;e.j4=d;AUG=AUG+1|0;e.lR=b;e.k0=c;f=(Ff()).createElement("canvas");e.hJ=f;g=b;f.width=g;f=e.hJ;g=c;f.height=g;if(!d)g=e.hJ.getContext("2d");else{f=e.hJ;h=AFs();g=f.getContext("2d",h);}e.dh=g;f="#FFFFFF";g.fillStyle=f;return e;}
var TV=F();
function AJV(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Mk(){var a=this;B.call(a);a.jK=null;a.bj=null;a.i3=null;}
var IE=F();
var AUH=null;function I5(a,b,c){return b.jB(c);}
function AAX(){AUH=new IE;}
var DT=F(0);
var D$=F(0);
var Iu=F(0);
function Qo(){B.call(this);this.py=null;}
function Bj(){var a=this;B.call(a);a.a=0;a.b=0;}
function Cg(a,b){var c=new Bj();Zx(c,a,b);return c;}
function Zx(a,b,c){a.a=b;a.b=c;}
function Cw(a,b){a.a=b.a;a.b=b.b;}
function Bg(a,b,c){a.a=b;a.b=c;}
function AJI(a,b){var c;a:{b:{if(a!==b){if(Bz(b)!==Bz(a))break b;if(!HS(a,b))break b;}c=1;break a;}c=0;}return c;}
function HS(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function V4(){var a=this;B.call(a);a.r1=0;a.r3=0;a.r0=0;a.rZ=0;}
var YW=F(0);
function Qh(){B.call(this);this.dP=null;}
function La(){var a=this;B.call(a);a.bs=null;a.yf=null;}
function ABs(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(143):C(144);g=$rt_str(b.getShaderInfoLog(e));h=new R;U(h);K(K(h,f),g);g=S(h);b.deleteShader(e);Co(EW(),g);Co(Ec(),C(145));Co(Ec(),d);Co(Ec(),C(145));b=new Bt;Bp(b,g);L(b);}
function CI(){var a=this;La.call(a);a.oK=null;a.qq=null;a.lL=null;}
function AVN(a,b,c,d){var e=new CI();GB(e,a,b,c,d);return e;}
function GB(a,b,c,d,e){var f,g,h,i,j,k;a.yf=e;f=ABs(b,35633,c);d=ABs(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bs=g;h=e.sN.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bs;k=c.ha;c=c.qB;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bs;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ADp(b,C(146));a.lL=new Bj;c=a.bs;a.oK=b.getUniformLocation(c,"uResolution");c=a.bs;a.qq=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bt;c=new R;U(c);K(K(c,C(147)),d);Bp(b,S(c));L(b);}
function ZK(a,b,c){var d,e,f;if(!HS(a.lL,c)){Cw(a.lL,c);d=a.oK;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function GU(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.qq;b.uniform4f(e,i,l,h,j);ZK(a,b,f);}
function VF(){CI.call(this);this.u2=null;}
function En(){CI.call(this);this.r6=null;}
function ARE(a){var b=new En();AJZ(b,a);return b;}
function AVO(a,b){var c=new En();KO(c,a,b);return c;}
function AVP(a,b,c){var d=new En();TC(d,a,b,c);return d;}
function AJZ(a,b){KO(a,b,C(148));}
function KO(a,b,c){TC(a,b,C(133),c);}
function TC(a,b,c,d){Ha();GB(a,b,c,d,AVL);c=a.bs;a.r6=b.getUniformLocation(c,"sDiffuse");}
function TO(a,b,c){var d;d=a.r6;b.uniform1i(d,0);b.activeTexture(33984);c=c.eR;b.bindTexture(3553,c);}
var AAh=F(CI);
function ASO(a){var b=new AAh();AP8(b,a);return b;}
function AP8(a,b){Ha();GB(a,b,C(133),C(149),AVL);}
function AAD(){En.call(this);this.wG=null;}
function ATa(a){var b=new AAD();AMK(b,a);return b;}
function AMK(a,b){var c;KO(a,b,C(150));c=a.bs;a.wG=b.getUniformLocation(c,"uContrast");}
function FE(){var a=this;En.call(a);a.pE=null;a.qN=null;a.sp=null;}
function AVQ(a,b,c){var d=new FE();Xd(d,a,b,c);return d;}
function Xd(a,b,c,d){TC(a,b,c,d);c=a.bs;a.pE=b.getUniformLocation(c,"uTexTransform");c=a.bs;a.qN=b.getUniformLocation(c,"uColor");c=a.bs;a.sp=b.getUniformLocation(c,"uBgColor");}
function S_(a,b,c,d){Gh(b,a.qN,c);Gh(b,a.sp,d);}
function MF(a,b,c,d){var e,f,g,h,i,j;c=c.eI;e=c.a;f=c.b;g=d.bp;h=e;g=g/h;i=d.bG;j=f;i=i/j;h=d.bc/h;j=d.b0/j;c=a.pE;b.uniform4f(c,g,i,h,j);}
function ABN(){FE.call(this);this.pz=null;}
function ASh(a){var b=new ABN();ANp(b,a);return b;}
function ANp(a,b){var c;Xd(a,b,C(151),C(152));c=a.bs;a.pz=b.getUniformLocation(c,"uContrast");}
var ADy=F(FE);
function ATs(a){var b=new ADy();AHu(b,a);return b;}
function AHu(a,b){Xd(a,b,C(151),C(153));}
function Zi(){var a=this;En.call(a);a.yU=null;a.yT=null;a.xu=null;}
function ATj(a){var b=new Zi();AHw(b,a);return b;}
function AHw(a,b){var c,d;KO(a,b,C(154));c=a.bs;a.yU=b.getUniformLocation(c,"uColorB");d=a.bs;a.yT=b.getUniformLocation(d,"uColorF");d=a.bs;a.xu=b.getUniformLocation(d,"uContrast");}
function ABM(){var a=this;CI.call(a);a.or=null;a.mK=null;a.mJ=null;}
function AS6(a){var b=new ABM();AHy(b,a);return b;}
function AHy(a,b){var c;Ha();GB(a,b,C(133),C(155),AVL);c=a.bs;a.or=b.getUniformLocation(c,"uColor");c=a.bs;a.mK=b.getUniformLocation(c,"uPoints1");c=a.bs;a.mJ=b.getUniformLocation(c,"uPoints2");}
function YS(){var a=this;CI.call(a);a.nr=null;a.ss=null;a.pI=null;}
function AS7(a){var b=new YS();AFL(b,a);return b;}
function AFL(a,b){var c;Ha();GB(a,b,C(133),C(156),AVL);c=a.bs;a.nr=b.getUniformLocation(c,"uColor");c=a.bs;a.ss=b.getUniformLocation(c,"uBaseline");c=a.bs;a.pI=b.getUniformLocation(c,"uScaleHExp");}
function AB2(a,b,c,d,e){var f;f=a.ss;b.uniform2f(f,c,d);Gh(b,a.pI,e);}
var RT=F(0);
var ADR=F(0);
function Gh(b,c,d){var e,f,g,h;e=d.bp;f=d.bG;g=d.bc;h=d.b0;b.uniform4f(c,e,f,g,h);}
function ADp(b,c){var d,e;d=b.getError();if(d){b=EW();e=new R;U(e);Bl(K(e,c),d);Co(b,S(e));}}
function Qf(){var a=this;B.call(a);a.os=null;a.ou=null;a.ot=null;}
function Qg(){var a=this;B.call(a);a.dN=null;a.gl=null;a.hQ=null;a.ju=null;a.jl=null;a.ly=0;a.mm=0;}
function KX(a,b){if(b!==null)a.dN.deleteBuffer(b);return null;}
function Cj(){var a=this;B.call(a);a.wO=null;a.gj=0;}
function C9(a,b,c){a.wO=b;a.gj=c;}
function Gq(){var a=this;Cj.call(a);a.sN=null;a.mH=null;a.rP=null;a.kG=0;a.qe=0;a.tc=0;}
var AVL=null;var AVR=null;function Ha(){Ha=Bm(Gq);AJp();}
function AJp(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Gq;c=P(DK,2);d=c.data;APV();d[0]=AVS;d[1]=AVT;Ha();C9(b,C(157),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.l4.gj){case 0:f=f+l.e1|0;h=h+1|0;break a;case 1:e=e+l.e1|0;g=g+1|0;break a;default:}}i=i|1<<l.ha;k=k+1|0;}b.sN=c;b.kG=e;b.qe=f;b.tc=i;c=P(DK,g);m=c.data;b.mH=c;c=P(DK,h);n=c.data;b.rP=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.l4.gj){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}AVL
=b;c=P(Gq,1);c.data[0]=b;AVR=c;}
var LW=F(0);
var S$=F(0);
var T_=F(0);
var F2=F();
function IX(){F2.call(this);this.ws=null;}
function Z7(){var a=this;IX.call(a);a.x3=0;a.kT=0;a.iF=null;a.kh=null;a.tO=null;}
function ALx(a,b){var c=new Z7();APD(c,a,b);return c;}
function APD(a,b,c){a.ws=b;b=new R;U(b);a.iF=b;a.kh=B0(32);a.x3=c;AHX();a.tO=AVU;}
function Td(a,b,c,d){var e,$$je;e=a.ws;if(e===null)a.kT=1;if(!(a.kT?0:1))return;a:{try{e.j_(b,c,d);break a;}catch($$e){$$je=E5($$e);if($$je instanceof TR){}else{throw $$e;}}a.kT=1;}}
function N4(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$$je;e=b.data;d=d-c|0;f=new Re;g=e.length;d=c+d|0;Vt(f,g);f.cs=c;f.eh=d;f.uN=0;f.yW=0;f.rw=b;e=DX(Z(16,Ba(g,1024)));d=e.data.length;h=new Wm;i=0+d|0;Vt(h,d);AJu();h.xC=AVV;h.qQ=0;h.sV=e;h.cs=0;h.eh=i;h.xE=0;h.nj=0;j=a.tO;k=new Pm;b=DX(1);l=b.data;l[0]=63;APZ();m=AVW;k.lQ=m;k.k2=m;c=l.length;if(c&&c>=k.mI){k.wK=j;k.qz=b.gu();k.xX=2.0;k.mI=4.0;k.pP=B0(512);k.op=DX(512);j=AVX;if(j===null){m=new BF;Bp(m,C(158));L(m);}k.lQ=j;k.k2=j;while(k.iC!=3){k.iC=2;a:{while(true)
{try{j=YC(k,f,h);}catch($$e){$$je=E5($$e);if($$je instanceof Bt){j=$$je;m=new Tu;m.lM=1;m.mC=1;m.rb=j;L(m);}else{throw $$e;}}if(j.hx?0:1){c=EI(f);if(c<=0)break a;j=KN(c);}else if(LB(j))break;m=!Wk(j)?k.lQ:k.k2;b:{if(m!==AVX){if(m===AVY)break b;else break a;}c=EI(h);b=k.qz;d=b.data.length;if(c<d){j=AVZ;break a;}Wn(h,b,0,d);}n=f.cs;c=j.hx!=2?0:1;if(!(!c&&!Wk(j)?0:1)){j=new D1;X(j);L(j);}Sv(f,n+j.ox|0);}}n=LB(j);Td(a,e,0,h.cs);N2(h);if(!n){while(true){d=k.iC;if(d!=2&&d!=4){j=new Dm;X(j);L(j);}j=AV0;if(j===j)k.iC
=3;n=LB(j);Td(a,e,0,h.cs);N2(h);if(!n)break;}return;}}j=new Dm;X(j);L(j);}m=new BF;X3(m,C(159));L(m);}
function Co(a,b){var c,d,e,f,g,h,i,j;BX(CX(a.iF,b),10);b=a.iF;c=b.H;d=a.kh;if(c>d.data.length)d=B0(c);e=0;f=0;if(e>c){b=new BV;Bp(b,C(160));L(b);}while(e<c){g=d.data;h=f+1|0;i=b.M.data;j=e+1|0;g[f]=i[e];f=h;e=j;}N4(a,d,0,c);a.iF.H=0;}
function FR(){F2.call(this);this.xM=null;}
function XD(a){a.xM=DX(1);}
var KQ=F(FR);
var AUt=null;function AJL(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AB6(){var b;b=new KQ;XD(b);AUt=b;}
function DK(){var a=this;Cj.call(a);a.qB=null;a.l4=null;a.e1=0;a.pQ=0;a.ha=0;}
var AVS=null;var AVT=null;var AV1=null;function APV(){APV=Bm(DK);AIF();}
function ASx(a,b,c,d,e,f,g){var h=new DK();Vw(h,a,b,c,d,e,f,g);return h;}
function Vw(a,b,c,d,e,f,g,h){APV();C9(a,b,c);a.qB=d;a.l4=e;a.e1=f;a.pQ=g;a.ha=h;}
function AIF(){var b;b=new DK;ALa();Vw(b,C(161),0,C(162),AV2,2,0,0);AVS=b;b=ASx(C(163),1,C(164),AV2,2,0,1);AVT=b;AV1=G(DK,[AVS,b]);}
function IN(){var a=this;B.call(a);a.wz=null;a.xg=null;}
function ACk(b){var c,d;if(Eu(b))L(Z4(b));if(!ACm(I(b,0)))L(Z4(b));c=1;while(c<H(b)){a:{d=I(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ACm(d))break a;else L(Z4(b));}}c=c+1|0;}}
function ACm(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var L1=F(IN);
var AVU=null;function AHX(){AHX=Bm(L1);AHv();}
function AHv(){var b,c,d,e,f;b=new L1;AHX();c=P(Bv,0);d=c.data;ACk(C(165));e=d.length;f=0;while(f<e){ACk(d[f]);f=f+1|0;}b.wz=C(165);b.xg=c.gu();AVU=b;}
var Gv=F(Cj);
var AV3=null;var AV2=null;var AV4=null;function ALa(){ALa=Bm(Gv);AG0();}
function AHp(a,b){var c=new Gv();ACB(c,a,b);return c;}
function ACB(a,b,c){ALa();C9(a,b,c);}
function AG0(){var b;AV3=AHp(C(166),0);b=AHp(C(167),1);AV2=b;AV4=G(Gv,[AV3,b]);}
var J$=F(FR);
var AUu=null;function AHF(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function ADV(){var b;b=new J$;XD(b);AUu=b;}
function ACs(){BF.call(this);this.wN=null;}
function Z4(a){var b=new ACs();AO7(b,a);return b;}
function AO7(a,b){X(a);a.wN=b;}
var U9=F(DO);
var LZ=F(0);
function W1(){B.call(this);this.qm=null;}
function AN8(a,b){a.qm.setPointerCapture(b.pointerId);}
function W2(){B.call(this);this.o7=null;}
function AFK(a,b){a.o7.releasePointerCapture(b.pointerId);}
function P_(){var a=this;B.call(a);a.cZ=null;a.eo=null;a.h9=null;a.h$=null;a.h6=null;a.h7=null;}
function ADE(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;h=c.dl;i=a.cZ;BC(h,i.a,i.b,a.eo,g.bE.fc);if(b!==null&&b.fD!==null){j=Cm(c,2.0);k=FI(b,Fk(d),1);l=FI(b,Gu(d),1);m=FI(b,Fk(e),0);n=FI(b,Gu(e),0);o=Ba(k,m);p=Z(l,n);k=BA(o,p);if(k<=0)Dh(h,1);while(o<=p){q=b.fD.data[o];if(q.j8){r=d.A;s=T(r,q.hw)-d.W|0;t=s+T(q.mi,r)|0;l=e.A;u=T(l,q.hv)-e.W|0;v=u+T(q.mh,l)|0;Bg(a.h9,a.cZ.a,s);Bg(a.h6,a.cZ.a,t);Bg(a.h$,a.cZ.a+a.eo.a|0,u);Bg(a.h7,a.cZ.a+a.eo.a|0,v);r=Z(Ba(s,u),a.cZ.b);w=Ba(Z(t,
v),a.cZ.b+a.eo.b|0);VT(f,a.cZ.a,r,a.eo.a,w-r|0);Ei(f.gz,g.gF.gw);Ei(f.dc,HX(g.dw,g,q.j8));if(s==t){x=c.dp;Bg(x,a.cZ.a-d.Q.a|0,j);if(u>=s){i=a.h6;Bg(i,i.a,i.b+j|0);r=s;}else{r=s-j|0;i=a.h9;Bg(i,i.a,i.b-j|0);}BC(h,d.Q.a,r,x,f.dc);}if(u==v){x=c.dp;Bg(x,e.ci.a,j);if(s>=u){i=a.h7;Bg(i,i.a,i.b+j|0);}else{u=u-j|0;i=a.h$;Bg(i,i.a,i.b-j|0);}BC(h,a.cZ.a+a.eo.a|0,u,x,f.dc);}i=f.ct;r=i.a;w=i.b;y=f.bo;z=a.h9;ba=a.h$;bb=a.h6;bc=a.h7;bd=f.dc;Gg(h,h.gC);GU(h.gC,h.T,r,w,y,h.cW);i=h.gC;x=h.T;q=i.mK;be=z.a;bf=z.b;bg=ba.a;bh=ba.b;x.uniform4f(q,
be,bf,bg,bh);i=i.mJ;be=bb.a;bf=bb.b;bg=bc.a;bh=bc.b;x.uniform4f(i,be,bf,bg,bh);i=h.gC;Gh(h.T,i.or,bd);Gc(h);}o=o+1|0;}if(k<=0)Dh(h,0);return;}}
function WV(){var a=this;B.call(a);a.ct=null;a.bo=null;a.dc=null;a.gz=null;}
function AA1(){var a=new WV();ANr(a);return a;}
function ANr(a){a.ct=new Bj;a.bo=new Bj;a.dc=new B5;a.gz=new B5;}
function VT(a,b,c,d,e){Bg(a.ct,b,c);Bg(a.bo,d,e);}
function Tc(a){Bg(a.bo,0,0);}
function JM(a){var b;b=a.bo;return T(b.a,b.b)?0:1;}
function HC(a,b){return EV(b,a.ct,a.bo);}
function AAB(){var a=this;B.call(a);a.ea=null;a.dL=null;a.c3=null;a.bS=null;a.fI=null;}
function AOx(a){var b=new AAB();AM2(b,a);return b;}
function AM2(a,b){var c;c=new WE;c.df=BB();a.dL=c;a.ea=b;c=new Vq;c.cd=BB();c.jr=AV5;c.cI=b;BZ(b.kk,c);a.bS=c;}
function ML(a,b){var c,d;a.fI=b;c=a.c3;if(c!==null)c.fV=b.fG;c=a.bS;d=b.fG;c.iO=b.u_;c.l0=d;b=BO(c.cd);while(BP(b)){QA(BS(b),c.l0);}}
function Rp(a){var b,c,d;b=BO(a.bS.cd);while(BP(b)){Lg(BS(b));}b=a.dL;c=0;while(true){d=b.df;if(c>=d.k)break;(Bs(d,c)).N.gQ=1;c=c+1|0;}}
function Xt(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.dL;c=a.ea.dl;d=b.df.k-1|0;while(d>=0){e=Bs(b.df,d);e.P.ku(c);f=e.N;g=e.fV.hO;if(!JX(f)){if(!VQ(f)&&!(!f.gQ&&f.cS!==null)){f.gQ=0;UQ(f);h=f.eF;i=(h.ej+h.dU+5.0)/10.0;j=Cm(f.e4,f.i_);h=c.c0;k=f.eF;l=f.gK;m=i*2.0;CM(h,k);n=j+Kc(h,l,m)|0;f.h8=n;n=Fv(0,n,f.p.a);if(n){h=E_(c,n,f.p.b,f.e4.cF);CM(h,f.eF);k=f.gK;m=j;i=m+i;l=f.eF;o=l.ej;Ev(h,k,i,m+o-(o+l.dU)/16.0);k=f.cS;if(k===null){k=GY(c);f.cS=k;}Ey(k,h);Is(h);Cc(f.hZ,0.0,0.0,Ci(f.cS),K9(f.cS));}}h=g.su;k=f.cS;if
(k===null)Pw(f,c,0,f.p.a,h);else{j=Ci(k);k=g.u1;if(f.e4.cF){g=f.G;n=g.a;p=g.b;g=f.cS;Ew(c,n,p,g.eI,f.hZ,g,k,h);}else{g=f.G;n=g.a;p=g.b;g=f.cS;Et(c,n,p,g.eI,f.hZ,g,k,h,0.0);}n=f.p.a;if(j<n)Pw(f,c,j,n-j|0,h);}}Dh(c,1);n=Cm(e.bn,2.0);q=JX(e.N);h=e.bn;f=h.dp;h=h.uA;p=q?0:e.N.p.b;k=e.P.p;Bg(h,k.a,k.b+p|0);Zy(c,h,!q?e.N.G:e.P.G,e.fV.hO.k9, -n|0,f);h=e.P;ABy(c,h.p,h.G,n,p,O5(e.fV.iD,e.bn.b2),e.fV.iD.lY,f);d=d+(-1)|0;}b=a.bS;if(!DG(b.cd)){Dh(b.cI.dl,1);j=0;while(true){c=b.cd;if(j>=c.k)break;ADc(Bs(c,j),b.cI);j=j+1|
0;}}}
function AMU(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.dL;d=0;a:{while(true){e=c.df;if(d>=e.k)break;b:{f=Bs(e,d);e=b.n;if(Dk(f.N,e))g=DD(f.bn.di,null);else{h=Cm(f.bn,7.0);i=Cm(f.bn,25.0);if(N8(f,e.a,h)){g=ND(f,e.a,i);if(Pa(f,e.b,h)){g=DD(f.bn.di,Ln(g,C(168)));break b;}if(Nw(f,e.b,h)){g=DD(f.bn.di,Ln( -g|0,C(168)));break b;}}if(VX(f,e.b,h)){g=Wq(f,e.b,i);if(Xv(f,e.a,h)){g=DD(f.bn.di,Ln(g,C(169)));break b;}if(MM(f,e.a,h)){g=DD(f.bn.di,Ln( -g|0,C(169)));break b;}}g=0;}}c:{d:{if(!g){if(!Dk(f.P,b.n))break d;if(!f.P.gg(b)
&&!DD(f.bn.di,null))break d;}g=1;break c;}g=0;}if(g){g=1;break a;}d=d+1|0;}g=0;}e:{if(!g){c=a.bS;g=0;j=c.cd.k-1|0;f:{while(j>=0){e=Bs(c.cd,j);k=b.n;f=c.cI.di;g=HC(e.b8,k);d=!g?(-1):Nx(e,k);h=e.im;if(h!=d){if(h>=0){l=e.ch.data[h];l.gD=0;m=e.wy;if(m!==null)m.zj(k,h,l);}if(d>=0){k=e.ch.data[d];l=e.pC;if(l!==null){m=l.pm;n=l.pn;l=l.po;To(m,n);if(l!==null)k.ke.s();if(Uz(k)){if(k.ln===null)Of(m,AAb(k,n),k.iH,n);else Wl(m,AAb(k,n),k.iH,n,k.ln);}}k.gD=1;}e.im=d;}g=g&&Fz(f)?1:0;if(g)break f;j=j+(-1)|0;}}if(!g){g=0;break e;}}g
=1;}return g;}
function AP5(a,b,c,d){var e,f,g,h,i;e=a.dL;f=0;a:{while(true){g=e.df;if(f>=g.k)break;b:{c:{h=Bs(g,f);if(!Dk(h.N,b.n)){if(!Dk(h.P,b.n))break c;if(!h.P.fM(b,c,d))break c;}i=1;break b;}i=0;}if(i){c=1;break a;}f=f+1|0;}c=0;}d:{if(!c){g=a.bS.cd;d=g.k-1|0;i=1;if(d<0)i=0;else{g=Bs(g,d);c=Nx(g,b.n);if(c>=0){b=g.ch.data[c];if(!Uz(b))b.ke.s();}}if(!i){c=0;break d;}}c=1;}return c;}
function ANW(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.bS;e=null;f=d.cd.k-1|0;a:{while(f>=0){e=Bs(d.cd,f);g=b.n;h=HC(e.b8,g);if(!h&&!JM(e.b8)){e=e.uf;if(e!==null)Du(e.sW);}e=!h?null:AV6;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;e=a.dL;h=0;b:{while(true){g=e.df;if(h>=g.k){g=null;break b;}c:{i=Bs(g,h);if(!c){d:{g=b.n;if(!JX(i.N)&&Dk(i.N,g)){d=i.P.G;j=d.a;k=g.a;l=j-k|0;j=d.b;f=g.b;j=j-f|0;g=i.N.G;m=g.a-k|0;f=g.b-f|0;d=new Bj;g=new NF;g.nM=i;g.nN=m;g.nO=f;g.nP=d;g.nI=l;g.nK=j;}else{j=Cm(i.bn,7.0);f=Cm(i.bn,
25.0);if(N8(i,g.a,j)){m=ND(i,g.a,f);if(Pa(i,g.b,j)){g=H2(i,g,m,(-1));break d;}if(Nw(i,g.b,j)){g=H2(i,g,m,1);break d;}}if(VX(i,g.b,j)){f=Wq(i,g.b,f);if(Xv(i,g.a,j)){g=H2(i,g,(-1),f);break d;}if(MM(i,g.a,j)){g=H2(i,g,1,f);break d;}}g=null;}}if(g!==null)break c;}g=Dk(i.N,b.n)?AV6:i.P.f3(b,c);i=i.P;if(i===null)g=null;else if(g===null)g=!Dk(i,b.n)?null:AV6;}if(g!==null)break;h=h+1|0;}}return g;}
function AKo(a,b,c){var d,e,f,g,h;d=a.dL;e=0;a:{while(true){f=d.df;if(e>=f.k)break;b:{c:{g=Bs(f,e);if(!Dk(g.N,b.n)){if(!Dk(g.P,b.n))break c;if(!g.P.ge(b,c))break c;}h=1;break b;}h=0;}if(h){c=1;break a;}e=e+1|0;}c=0;}return !c&&!FF(a.bS)?0:1;}
function Q0(a,b,c,d,e){Qj(a,b,d,WJ(c,null,d),e);}
function Rg(a,b,c,d,e){Qj(a,b,d,WJ(null,c,d),e);}
function Qj(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(a.c3!==null)S5(a);f=new Qq;g=a.ea;h=new Qd;h.mY=a;h.mZ=c;Lc(f);f.cO=new Bj;f.bF=new Bj;f.dy=AA1();f.gs=new Bj;f.bV=AV7;f.dW=P(H1,0);f.du=0;f.d7=0;f.fA=0;f.e0=0;f.eO=0;f.dX=AFc(0);f.g1=Kf();f.bZ=g;f.io=h;f.v4=h;O7(f);Tv(f);f.bV=d;c=a.fI;g=c.fG;c=c.vP;f.qV=g;f.uc=c;f.dO=null;f.dX=null;f.ex=0;Tv(f);h=new Uj;i=a.ea;h.P=ARp();h.bn=i;c=new Va;Lc(c);c.hZ=new B5;c.e4=i;h.N=c;a.c3=h;i=new PK;c=a.ea.di;Lc(i);g=new Od;g.qT=i;i.o$=g;g=new Oc;g.r5=i;i.t0=g;i.u0=10.0;i.bq=f;i.mx
=c;f.gt=i;c=a.fI.fG;g=c.pk;h=c.n6;i.vM=g;i.vI=h;c=i.cQ;if(c!==null)Gy(c,g,h);c=i.cY;if(c!==null)Gy(c,g,h);j=a.c3;c=j.P;g=c.G;h=c.p;c=C5(c,i);j.P=c;c.lE(g,h,j.bn.b2);g=a.c3;h=new R;U(h);K(K(h,C(170)),e);i=S(h);c=a.fI.ux;e=g.N;k=BK(e.h2,c)?0:1;l=BK(e.gK,i)?0:1;m=4.0===e.i_?0:1;if(k){e.h2=c;e.eF=null;Pc(e,0);}e.gQ=!k&&!l&&!m?0:1;e.gK=i;e.i_=4.0;e.h8=0;Nj(g);c=a.c3;c.fV=a.fI.fG;Rw(a.dL.df,0,c);c=a.c3;k=(c.N.p.b+Cm(c.bn,2.0)|0)+Cm(a.ea,2.0)|0;l=(f.du+f.d7|0)+f.fA|0;m=Cm(f.bZ,5.0);h=Cg(Fv(m,b.a,f.bZ.cJ.a-l|0),Fv(k,
b.b,f.bZ.cJ.b-f.cO.b|0));Pr(f);O$(f);k=(f.du+f.d7|0)+f.fA|0;b=f.bZ;l=(b.cJ.a-h.a|0)-Cm(b,5.0)|0;b=f.bZ;m=(b.cJ.b-h.b|0)-Cm(b,5.0)|0;g=Cg(Ba(k,l),Ba(f.cO.b,m));KE(a.c3,h,g);Fq(a.ea,f);}
function S5(a){var b,c;b=a.dL;c=a.c3;Vm(b.df,c);b=a.c3;c=b.N;c.cS=C5(c.cS,null);b.P=C5(b.P,null);a.c3=null;}
function Kb(a,b,c){var d,e,f,g,h;Du(a.bS);d=a.bS;e=P(DM,1);f=e.data;g=new DM;BM(d);h=new Mv;h.wo=d;X5(g,h,C(171));f[0]=g;P6(d,b,GW(e),QI(a,c));}
function QI(a,b){var c;c=new Qk;c.nt=a;c.nu=b;return c;}
function I4(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;if(!FF(a.bS)){h=a.bS;i=b.n;b=new S7;b.eQ=a;b.bf=c;b.oC=g;b.hN=e;b.mw=f;b.jz=d;j=Ta();e=b.bf.c;d=DU(e);e=FM(e);f=b.bf.cv;if(QB(f,d,e)!==null){k=new RO;k.nx=b;k.ny=i;DF(j,C(172),k);}if(LN(f,d,e)!==null){k=new RP;k.q0=b;k.q1=i;DF(j,C(173),k);}if(TL(f,d,e)!==null){e=new RN;e.m6=b;e.m7=i;DF(j,C(174),e);}e=new RM;e.uR=b;e.uQ=i;DF(j,C(175),e);F$(b);if(Lb()){if(!b.bf.dx){e=new QW;e.vj=b;DF(j,C(176),e);}e=new QX;e.pw=b;DF(j,C(177),e);if(!b.bf.dx){F$(b);if(Lb()&&("readText" in $rt_globals.navigator.clipboard
?1:0)?1:0){e=new QV;e.sL=b;DF(j,C(178),e);}}}e=Ta();l=P(Bv,4).data;l[0]=C(21);l[1]=C(29);l[2]=C(34);l[3]=C(33);m=l.length;n=0;while(n<m){f=l[n];g=new OY;g.nv=b;g.nw=f;DF(e,f,g);n=n+1|0;}Fj(j,C(179),HK(e));d=Ta();l=P(DM,3);o=l.data;g=b.jz;BM(g);p=new Na;p.o9=g;o[0]=CB(C(180),p);g=b.jz;BM(g);p=new Nb;p.qb=g;o[1]=CB(C(181),p);g=b.jz;BM(g);p=new M_;p.v7=g;o[2]=CB(C(182),p);KH(d,C(183),GW(l),AV8);l=P(DM,2);o=l.data;g=b.hN;BM(g);p=new V$;p.qP=g;o[0]=CB(C(184),p);g=b.hN;BM(g);p=new V9;p.uo=g;o[1]=CB(C(185),p);Fj(d,
C(186),GW(l));g=new Ri;g.tp=b;KH(d,C(187),g,AV8);if(b.bf.bM.dl.lt){l=P(DM,2);o=l.data;g=new Sr;g.oH=b;o[0]=CB(C(188),g);f=new Ss;f.pX=b;o[1]=CB(C(189),f);Fj(d,C(190),GW(l));}Fj(j,C(191),HK(d));d=Ta();Fj(d,C(192),AAi(b));f=new PU;f.v$=b;DF(d,C(193),f);Fj(j,C(194),HK(d));P6(h,i,HK(j),QI(a,c));}}
function AOe(a,b,c,d){var e,f,g,h;e=a.dL;f=0;a:{while(true){g=e.df;if(f>=g.k)break;if((Bs(g,f)).P.f8(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function Zh(b){var c;c=new Xb;c.mT=b;return c;}
var JB=F(0);
function Uu(){B.call(this);this.ve=null;}
function AJ_(a,b){var c;c=a.ve;Ve(c,c.w,c.v);}
function Uv(){B.call(this);this.q8=null;}
function AE9(a,b){var c;c=a.q8;Ve(c,c.v,c.w);}
function Uw(){B.call(this);this.nB=null;}
function AKn(a,b){XH(a.nB,b);}
function Uq(){B.call(this);this.uj=null;}
function ALf(a,b){XH(a.uj,b);}
function Ur(){B.call(this);this.xv=null;}
function APM(a,b){return b.bO!=121?0:1;}
function JW(){var a=this;B.call(a);a.nU=null;a.qp=null;a.pF=null;}
function AV9(a,b){var c=new JW();MS(c,a,b);return c;}
function MS(a,b,c){var d;d=null;a.nU=b.i3;a.qp=d;a.pF=c;}
function AH3(a,b){var c,d,e,f;if(b.cm&&b.bO==79){c=a.qp;if(c!==null&&b.bz){if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADq(c,1);else{d=new Wa;b=$rt_globals.window.showDirectoryPicker();e=new V_;e.p3=c;e.p4=d;b.then(Bn(e,"f"),Bn(d,"f"));}}else VP(a.nU,a.pF);f=1;}else f=0;return f;}
function Us(){B.call(this);this.m8=null;}
function AOC(a,b){var c,d;c=a.m8;d=DI(c.bh,c.w)?c.w:!DI(c.bh,c.v)?null:c.v;if(d!==null){IB(d,b);c.fu=null;}}
function Ut(){B.call(this);this.sP=null;}
function AGW(a,b){var c,d,e,f;b=b;c=a.sP;if(DI(c.bh,c.w)){d=c.dF;e=c.w;f=new M8;f.r7=c;I4(d,b,e,c,c,c,f);}if(DI(c.bh,c.v)){d=c.dF;e=c.v;f=new M5;f.qZ=c;I4(d,b,e,c,c,c,f);}return 1;}
function GG(){var a=this;B.call(a);a.vC=0;a.cs=0;a.eh=0;a.i2=0;}
function Vt(a,b){a.i2=(-1);a.vC=b;a.eh=b;}
function EI(a){return a.eh-a.cs|0;}
function Fp(a){return a.cs>=a.eh?0:1;}
var Sh=F(0);
var KC=F(GG);
function Sv(a,b){var c,d,e;if(b>=0&&b<=a.eh){a.cs=b;if(b<a.i2)a.i2=0;return a;}c=new BF;d=a.eh;e=new R;U(e);BX(Bl(K(Bl(K(e,C(195)),b),C(196)),d),93);Bp(c,S(e));L(c);}
function Jp(){var a=this;GG.call(a);a.qQ=0;a.sV=null;a.xC=null;}
function Wn(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.nj){e=new Xn;X(e);L(e);}if(EI(a)<d){e=new QT;X(e);L(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BV;j=new R;U(j);Bl(K(Bl(K(j,C(197)),h),C(198)),g);Bp(i,S(j));L(i);}if(d<0){e=new BV;i=new R;U(i);K(Bl(K(i,C(199)),d),C(200));Bp(e,S(i));L(e);}h=a.cs;k=h+a.qQ|0;l=0;while(l<d){b=a.sV.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.cs=h+d|0;return a;}}b=b.data;e=new BV;d=b.length;i=new R;U(i);BX(Bl(K(Bl(K(i,C(201)),c),C(196)),d),41);Bp(e,
S(i));L(e);}
function N2(a){a.cs=0;a.eh=a.vC;a.i2=(-1);return a;}
function Hj(){B.call(this);this.yx=null;}
var AVY=null;var AVX=null;var AVW=null;function APZ(){APZ=Bm(Hj);AKW();}
function ADl(a){var b=new Hj();ACh(b,a);return b;}
function ACh(a,b){APZ();a.yx=b;}
function AKW(){AVY=ADl(C(202));AVX=ADl(C(203));AVW=ADl(C(204));}
function Pz(){B.call(this);this.w9=null;}
function AFB(a,b){return b.bO!=121?0:1;}
function Px(){B.call(this);this.vn=null;}
function AIb(a,b){IB(a.vn,b);}
function Py(){B.call(this);this.pf=null;}
function APa(a,b,c){return Gx(a.pf,b,c);}
function NU(){B.call(this);this.qc=null;}
function AM0(a){var b,c;b=a.qc.cr;BM(b);c=new N0;c.n3=b;return c;}
function NV(){B.call(this);this.v9=null;}
function AJT(a,b,c,d){return Jj(a.v9.cr,c,d);}
function NS(){B.call(this);this.nF=null;}
function AKF(a,b){var c,d,e,f;b=b;c=a.nF;if(DI(c.bh,c.cr)){d=c.fb;e=c.cr;f=new SI;f.xZ=c;I4(d,b,e,c,e,c,f);}return 1;}
var AAN=F();
var YP=F(0);
function Js(b,c,d,e,f){Cc(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function TZ(){var a=this;B.call(a);a.dl=null;a.gO=null;a.di=null;a.cJ=null;a.b2=0.0;a.cF=0;a.d2=null;a.kk=null;a.dp=null;a.uA=null;a.wu=null;a.wv=null;}
function I8(a){var b;b=a.d2;if(b!==null)b.tt();}
function Jz(a){var b;b=a.d2;if(b!==null)b.wk();}
function NR(a,b){var c;c=a.gO.dC!==(Ff()).activeElement?0:1;if(c)Jz(a);a.d2=b;if(c)I8(a);}
function Fq(a,b){Jz(a);a.d2=b;I8(a);}
function DI(a,b){return b!==a.d2?0:1;}
function LP(a){return a.dl.c0;}
function Im(a,b){return Gw(a.dl,b.jq,Cp(b.hP,a.b2),400,0);}
function Cm(a,b){return Cp(b,a.b2);}
function Wi(a,b){if(a.cF==b)return 0;a.cF=b;I$(a.gO);return 1;}
var RY=F();
function AIG(a,b){var c,d,e;c=b.cm;d=c&&!b.bz&&!b.cR&&!b.iR?1:0;a:{if(d){d=b.bO;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bz&&!c&&!b.cR&&!b.iR?1:0;d=d&&b.bO==46?1:0;}b:{if(!d){e=b.bO;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.j2=1;}return 0;}
function RX(){B.call(this);this.oD=null;}
function AF_(a,b){var c;c=a.oD.d2;return c!==null&&c.kn(b)?1:0;}
function B5(){var a=this;B.call(a);a.bp=0.0;a.bG=0.0;a.bc=0.0;a.b0=0.0;}
function Cc(a,b,c,d,e){a.bp=b;a.bG=c;a.bc=d;a.b0=e;}
function Ei(a,b){a.bp=b.bp;a.bG=b.bG;a.bc=b.bc;a.b0=b.b0;return a;}
function AQ2(a,b){if(a===b)return 1;return b!==null&&Bz(a)===Bz(b)&&JV(a,b)?1:0;}
function JV(a,b){return b.bp===a.bp&&b.bG===a.bG&&b.bc===a.bc&&b.b0===a.b0?1:0;}
var Ih=F(0);
function WE(){B.call(this);this.df=null;}
function Vq(){var a=this;B.call(a);a.cI=null;a.cd=null;a.iO=null;a.ja=null;a.l0=null;a.jr=null;}
function P6(a,b,c,d){var e,f;e=a.cI;f=e.cJ;if(T(f.a,f.b)&&e.b2!==0.0){if(a.iO!==null&&!FF(a)){a.jr=d;a.ja=Im(a.cI,a.iO);e=Of(a,b,c,null);b=new Vj;b.sW=a;e.uf=b;Fq(a.cI,a);return;}b=new BF;X(b);L(b);}c=new Dm;Bp(c,C(205));L(c);}
function Du(a){var b;if(FF(a)){b=a.cI;if(b.d2===a)b.d2=null;To(a,null);a.jr.s();a.jr=AV5;}}
function Wl(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new SS;f.b8=AA1();f.fp=new Bj;f.f5=new Bj;f.ch=AV$;f.im=(-1);f.iV=1;f.fY=1;c=c.ee();Lg(f);f.ch=c;QA(f,a.l0);PX(f,a.ja,a.cI);if(d===null)g=b.a;else{g=b.a;g=a.cI.cJ.a<((g+(ES(d)).a|0)+(ES(f)).a|0)?g-(ES(f)).a|0:(g+(ES(d)).a|0)-d.eZ|0;}h=b.b;b=a.cI.cJ;i=Z(0,Ba(g,b.a-(ES(f)).a|0));g=Z(0,Ba(h,b.b-(ES(f)).b|0));Bg(f.b8.ct,i,g);j=f.cD+f.eZ|0;k=f.ch.data;h=k.length;l=0;m=j;while(l<h){c=k[l];b=c.dZ;b.a=i+j|0;b.b=g+m|0;if(!f.fY){if(!c.dk.a)Yn();j=j+(c.dk.a+f.cD|0)|0;}else{if
(!c.dk.b)Yn();m=m+(c.dk.b+f.cD|0)|0;}l=l+1|0;}b=new WK;b.pm=a;b.pn=f;b.po=e;f.pC=b;Bw(a.cd,f);return f;}
function Of(a,b,c,d){return Wl(a,b,c,d,null);}
function AKK(a,b){var c;if(!FF(a))return 0;a:{switch(b.bO){case 27:Du(a);c=1;break a;default:}c=0;}return c;}
function AAb(b,c){var d,e,f;d=b.dZ;e=c.cD;f=c.eZ;return Cg((d.a-(e*3|0)|0)-f|0,(d.b-e|0)-f|0);}
function To(a,b){var c,d;c=a.cd.k-1|0;a:{while(true){if(c<0)break a;d=Bs(a.cd,c);if(b===d)break;Fl(a.cd,c);d.e2=C5(d.e2,null);Bg(d.fp,0,0);d.ch=AV$;d.im=(-1);Tc(d.b8);c=c+(-1)|0;}}}
function FF(a){return a.cd.k<=0?0:1;}
function PF(){var a=this;B.call(a);a.d_=null;a.ka=0.0;a.g3=0.0;a.fT=0;}
function Wv(a){return a.d_.bo.b;}
function S3(a){return a.d_.bo.a;}
function ACe(a,b,c){var d,e,f;if(a.fT){d=a.d_;e=c.a;f=c.b;c=d.ct;BC(b,c.a+e|0,c.b+f|0,d.bo,d.dc);}}
function Kz(){var a=this;B.call(a);a.mk=null;a.wQ=null;a.wZ=0.0;a.pL=0;a.w6=0;a.xs=0;a.rJ=0;a.yd=0;a.ej=0.0;a.dU=0.0;a.wX=0.0;a.l8=0.0;a.w3=0;a.nC=null;}
function Fy(a){return DE(a.ej+a.dU);}
function PQ(a,b){return DE((a.ej+a.dU)*b);}
function EY(){var a=this;B.call(a);a.bR=0;a.c$=null;a.ey=null;a.bD=null;a.dD=0;a.da=0;}
var AV_=0;var AUU=0;function XS(a,b,c,d,e,f,g){var h,i,j,k,l;h=a.bD;i=h===b&&!h.gG?0:1;if(i){a.bD=b;JY(b,d.c0,a.c$.kr);}h=a.bD;j=h===null?0:EC(h)<f?H9(EC(a.bD),1024):H9(f,1024)+1|0;k=j<=a.dD?0:1;if(k)a.dD=j;if(!(!i&&!k)){if(AV_){l=b.fm;$rt_globals.console.info("fMeasure"+l.data);AV_=0;}if(!AUU){h=c.dh;b="alphabetic";h.textBaseline=b;}else{b=c.dh;h="top";b.textBaseline=h;}a.da=g/1024|0;while(true){b=a.ey;if(b.k>=a.dD)break;Bw(b,GY(d));}f=0;while(f<a.dD){Ia(a,c,e,a.da+f|0);f=f+1|0;}a.bD.gG=0;}if(!DG(a.ey)&&g<=
EC(a.bD)){j=g/1024|0;f=a.da;if(j!=f){f=j-f|0;if(f<0)f= -f|0;if(f>=a.dD){f=0;while(f<a.dD){Ia(a,c,e,j+f|0);f=f+1|0;}a.da=j;}else{while(true){g=a.da;if(g>=j)break;Ia(a,c,e,g+a.dD|0);a.da=a.da+1|0;}while(true){g=a.da;if(g<=j)break;Ia(a,c,e,g-1|0);a.da=a.da-1|0;}}}}}
function Kg(b,c){return (c-Fy(b)|0)/2|0;}
function MN(b,c){return Kg(b,c)+b.rJ|0;}
function Ia(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;Fw(b);e=a.bD.fm;f=d*1024|0;g=O4(a,f);if(g>=a.bD.l.data.length)return;h=!g?0.0:e.data[g-1|0];i=f;j=h-i+a.bR;k=a.c$.kr;a:{while(true){l=a.bD;if(g>=l.l.data.length)break a;m=k.data;n=KB(l,g);l=m[IO(n)];o=!AUU?MN(l,c):Kg(l,c);m=e.data;CM(b,l);Ev(b,n.q,j,o);j=m[g]-i+a.bR;if(j>1024.0)break;g=g+1|0;}}Ey(Bs(a.ey,d%a.dD|0),b);}
function Y8(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq;if(DG(a.ey))return;if(!a.dD)return;if(g>EC(a.bD))return;o=a.bD;p=o.ef;q=o.l;r=g/1024|0;s=O4(a,g);t= -a.bR|0;u=f;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=e)break;y=p.data;o=Bs(a.ey,r%a.dD|0);z=v[s];ba=y[s]+a.bR|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=Ba(be,ba)-g|0;if(bc&&x)bf=bf+a.bR|0;if((t+bf|0)>e)bf=e-t|0;bg=i!==null?0:1;b:{if(!bg){bh
=!x?a.bR:2*a.bR|0;bi=i.a;w=i.b;if(!(bi<w&&g<=w&&(g+bf|0)>(bi+bh|0)?0:1)){bj=0;break b;}}bj=1;}c:{if(!bg){bk=!x?a.bR:2*a.bR|0;if(g>=i.a&&(g+bf|0)<=(i.b+bk|0)?1:0){bl=1;break c;}}bl=0;}bm=null;if(l&&!m)bm=h.bE.ib;if(z===j)bm=h.bE.oV;bn=BO(k);d:{while(BP(bn)){if(BK(BS(bn),z)){bi=1;break d;}}bi=0;}if(bi)bm=h.bE.wc;if(n!==null){v=n.lk;if(v===null)bh=0;else{v=v.data;bh=s>=v.length?0:v[s];}bm=XK(h.dw,h,bh,n.fK);}if(!bl&&!bj){i.b=Ba(i.b,EC(a.bD));AA5(a,d,t+c|0,b,f,h,o,z,bf,g>=i.a?bf:(Ba(ba,be)-i.a|0)-(!x?a.bR:0)|0,
(g+bf|0)<=(i.b+(!x?a.bR:2*a.bR|0)|0)?0:(Ba(ba,be)-i.b|0)-(!x?a.bR:0)|0,g-bb|0,bm);}else{Cc(a.c$.jp,g-bb|0,0.0,bf,u);Bg(a.c$.gn,bf,f);Hg(a,d,t+c|0,b,z,o,h,bm,bl);}if((z.bH&12)>0){bi=t+c|0;Dh(d,1);o=a.c$;bo=o.kp;bo.a=bf;w=b+o.vA|0;bk=w-o.vN|0;bp=o.sF;bq=w+bp;bm=o.hq;UF();bn=AWa.hS.ic;Gg(d,d.hB);GU(d.hB,d.T,bi,bk,bo,d.cW);AB2(d.hB,d.T,bp,bq,bm);o=d.hB;Gh(d.T,o.nr,bn);Gc(d);Dh(d,0);}g=g+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function AA5(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s;n=a.c$.jp;o=l;p=i-j|0;q=p;r=e;Cc(n,o,0.0,q,r);Bg(a.c$.gn,p,e);Hg(a,b,c,d,h,g,f,m,0);l=l+i|0;Cc(n,l-k|0,0.0,k,r);Bg(a.c$.gn,k,e);c=c+i|0;Hg(a,b,c-k|0,d,h,g,f,m,0);s=l-j|0;i=j-k|0;Cc(n,s,0.0,i,r);Bg(a.c$.gn,i,e);Hg(a,b,c-j|0,d,h,g,f,m,1);}
function Hg(a,b,c,d,e,f,g,h,i){var j,k,l,m,n;j=a.c$;k=j.gn;if(k.a&&k.b){l=j.jp;if(l.b0!==0.0&&l.bc!==0.0){m=g.s_.data[e.bY];if(i)n=g.bE.mo;else{n=m.oI;if(n===null)n=g.bE.fc;if(h!==null)n=h;}if(j.mq)Ew(b,c,d,k,l,f,m.ic,n);else Et(b,c,d,k,l,f,m.ic,n,j.lS);return;}return;}}
function O4(a,b){var c,d,e,f,g,h,i;c=a.bD;d=c.fm;e=0;f=c.l.data.length;g=b;b=BA(e,f);if(b>0){c=new BF;X(c);L(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BA(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function W8(a){a.bD=null;DY(a.ey,new Tr);FJ(a.ey);}
function Ze(a,b,c,d,e,f,g,h,i){var j,k;j=EC(a.bD);if(j)j=j+a.bR|0;if(!j)j=j-a.bR|0;k=Z( -a.bR|0,j-g|0);if(k>=h)return;Bg(f,h-k|0,e);BC(b,c+k|0,d,f,i);}
function Zj(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a:{h=c.data;i=P(EY,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=BG(g,e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.bD===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}c=i.data;e=0;f=c.length;while(e<f){if(c[e]===null){if(j>=k)p=null;else{b=j+1|0;p=h[j];j=b;}while(j<k&&p===null){b=j+1|0;p=h[j];j=b;}if(p!==null){c[e]=p;h[j-1|0]=null;}else{o=new EY;o.bR=3;o.ey=BB();o.da=0;o.c$=d;c[e]=o;}}e=e+1|0;}while(j<k){p=h[j];if(p!==null)W8(p);j=j+1|0;}return i;}
function AA8(){AUU=0;}
function ADu(){var a=this;B.call(a);a.eV=null;a.cN=null;a.d0=null;a.em=null;a.hW=null;a.hX=null;}
function UY(){var a=new ADu();AJt(a);return a;}
function AJt(a){a.eV=new Bj;a.cN=new Bj;a.d0=new Bj;a.em=new Bj;a.hW=new B5;a.hX=new B5;}
function Q3(a){var b;b=a.cN;return !T(b.a,b.b)?0:1;}
function Hq(a,b){return EV(b,a.d0,a.em);}
function HQ(a,b,c,d){var e,f,g,h,i;e=Hq(a,b);f=EV(b,a.eV,a.cN);if(!e&&!f)return null;if(!f){if(!d)c.j(VW(a,b.a-a.d0.a|0));else c.j(PA(a,b.b-a.d0.b|0));}g=!d?a.eV.a+(a.cN.a/2|0)|0:a.eV.b+(a.cN.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new Sa;b.vw=a;b.vx=c;b.vv=i;}else{b=new R_;b.pj=a;b.ph=c;b.pi=i;}return b;}
function Gy(a,b,c){if(b!==null&&c!==null){Ei(a.hW,c);Ei(a.hX,b);return;}}
function ZV(b,c){var d;d=new TX;d.rM=b;d.wn=c;return d;}
function PA(a,b){var c,d,e;c=a.em.b;d=a.cN.b;e=c-d|0;return ZV(Ba(Z(0,b-(d/2|0)|0),e),e);}
function VW(a,b){var c,d,e;c=a.em.a;d=a.cN.a;e=c-d|0;return ZV(Ba(Z(0,b-(d/2|0)|0),e),e);}
function WX(a,b,c,d,e,f,g){Wc(a,b,c,d,e,f,g,1);}
function QG(a,b,c,d,e,f,g){Wc(a,b,c,d,e,f,g,0);}
function Wc(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bg(a.em,0,0);Bg(a.cN,0,0);}else{i=Ba(g*3|0,d);j=Z(PW(d,d,e),i);e=e-d|0;i=d-j|0;i=i?PW(b,i,e):0;if(!h){k=a.eV;k.a=i+c|0;k.b=f-g|0;l=a.cN;l.a=j;l.b=g;l=a.d0;l.a=c;l.b=k.b;k=a.em;k.a=d;k.b=g;}else{k=a.eV;k.a=f-g|0;k.b=i+c|0;l=a.cN;l.a=g;l.b=j;l=a.d0;l.a=k.a;l.b=c;k=a.em;k.a=g;k.b=d;}}}
function HD(a,b){var c;c=a.d0;BC(b,c.a,c.b,a.em,a.hW);}
function HM(a,b){var c,d;c=a.cN;c.a=c.a-2|0;c.b=c.b-2|0;d=a.eV;BC(b,d.a+1|0,d.b+1|0,c,a.hX);b=a.cN;b.a=b.a+2|0;b.b=b.b+2|0;}
function H5(a,b,c){return Hq(a,b)&&Fz(c)?1:0;}
function ZD(){var a=this;B.call(a);a.xO=20;a.e_=null;a.eB=null;a.ix=0.0;a.il=null;a.l5=0;a.i0=0;a.cp=null;a.jN=null;a.el=null;a.fi=null;a.ff=0;}
function AP7(){var a=new ZD();AQq(a);return a;}
function AQq(a){a.xO=20;a.e_=new Bj;a.eB=new Bj;a.cp=BB();a.jN=DX(0);}
function K1(a,b){if(b===null)b=DX(0);a.jN=b;}
function AB9(a,b,c,d,e){var f,g,h,i,j,k;f=c/20|0;g=a.cp;h=Bs(g,f%g.k|0);i=a.e_;j=T(a.cp.k,a.i0);f=h.ez.b;k=((h.hD.b-(b%j|0)|0)+j|0)%j|0;if((k+f|0)>j)k= -(b%K9(h.ba)|0)|0;b=c%h.dE|0;f=h.J;k=k+T(b,f)|0;if(k<( -f|0))k=k+j|0;Bg(h.c4,h.ez.a,f);g=h.dM;b=c%h.dE|0;c=h.J;Cc(g,0.0,T(b,c),h.ez.a,c);Er(h,e,k,i,d.oW,d.m1);}
function S1(a,b,c,d){var e,f,g,h,i,j;e=a.cp.k;while(true){f=a.cp.k;g=T(f,a.i0);if(g>(d+a.l5|0))break;h=Cg(0,g);i=new PI;g=a.eB.a;f=a.l5;j=a.il;i.c4=new Bj;i.dM=new B5;i.hD=h;i.dE=20;i.J=f;i.ez=Cg(g,20*f|0);i.go=MN(j,f);if(i.ba===null)i.ba=GY(b);Bw(a.cp,i);}if(f==e)return;Ru(a,c);}
function Ru(a,b){var c,d,e,f,g,h,i,j,k;c=a.cp;d=c.k;e=T((b/(d*20|0)|0)+1|0,d)*20|0;c=BO(c);while(BP(c)){f=BS(c);g=a.el;h=a.ix;Fw(g);i=0;while(true){j=f.dE;if(i>=j)break;k=e-T(d,j)|0;if(k<b)k=e;e=k+1|0;FQ(f,g,D8(e),T(f.J,i)+f.go|0,h);i=i+1|0;}Ey(f.ba,g);f.nh=g.j4;}}
function Jo(a){DY(a.cp,new Mr);FJ(a.cp);a.el=C5(a.el,null);a.fi=C5(a.fi,null);}
function NM(){B.call(this);this.tg=null;}
function Lj(a,b){Co(a.tg,b);}
function NL(){B.call(this);this.mV=null;}
function AFl(a,b){var c;c=a.mV;DS(c,Hf(b,FN(c)));}
function NK(){B.call(this);this.ro=null;}
function AEv(a,b){var c;c=a.ro;Ic(c,Hf(b,S9(c)));}
function UE(){var a=this;B.call(a);a.jp=null;a.gn=null;a.kp=null;a.hq=null;a.kr=null;a.lS=0.0;a.sF=0.0;a.ww=0;a.vA=0;a.vN=0;a.mq=0;}
function NJ(){B.call(this);this.uM=null;}
function AEu(a){var b,c;b=a.uM;c=b.jP?0:1;b.jP=c;b.fy.lS=!c?0.0:0.5;b=new R;U(b);G$(K(b,C(206)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NQ(){B.call(this);this.oJ=null;}
function AH1(a){var b,c;b=a.oJ;c=b.h0?0:1;b.h0=c;b=new R;U(b);G$(K(b,C(207)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NP(){B.call(this);this.sD=null;}
function ARl(a){var b,c;b=a.sD;c=b.jt^1;b.jt=c;b=new R;U(b);G$(K(b,C(208)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NO(){B.call(this);this.wl=null;}
function AKz(a){var b,c,d,e,f;b=a.wl;c=(b.dG+3|0)%6|0;b.dG=c;d=b.fo.data;e=d.length;f=0;while(f<e){b=d[f];b.bR=c;b=b.bD;if(b!==null)b.gG=1;f=f+1|0;}}
function NN(){B.call(this);this.oj=null;}
function AMV(a){var b;b=a.oj;b.bx=b.bx?0:1;Jo(b.cH);b.cH=AP7();SP(b,b.Q,b.ci,b.bM.b2);}
function NI(){B.call(this);this.rS=null;}
function AQJ(a){var b;b=a.rS;b.iU=b.iU?0:1;}
function NH(){B.call(this);this.vh=null;}
function AEj(a){var b;b=a.vh;b.lP=b.lP?0:1;}
var E7=F(Cj);
var AUR=null;var AWb=null;var AUS=null;var AWc=null;function AEr(){AEr=Bm(E7);ALD();}
function ABk(a,b){var c=new E7();AA6(c,a,b);return c;}
function AA6(a,b,c){AEr();C9(a,b,c);}
function ALD(){var b;AUR=ABk(C(209),0);AWb=ABk(C(210),1);b=ABk(C(211),2);AUS=b;AWc=G(E7,[AUR,AWb,b]);}
var Jw=F(KC);
function Re(){var a=this;Jw.call(a);a.yW=0;a.uN=0;a.rw=null;}
function Kl(){var a=this;B.call(a);a.wK=null;a.qz=null;a.xX=0.0;a.mI=0.0;a.lQ=null;a.k2=null;a.iC=0;}
function Lk(){var a=this;B.call(a);a.hx=0;a.ox=0;}
var AV0=null;var AVZ=null;function YM(a,b){var c=new Lk();Zo(c,a,b);return c;}
function Zo(a,b,c){a.hx=b;a.ox=c;}
function LB(a){return a.hx!=1?0:1;}
function Wk(a){return a.hx!=3?0:1;}
function KN(b){return YM(2,b);}
function ZL(){AV0=YM(0,0);AVZ=YM(1,0);}
function Wb(){var a=this;B.call(a);a.ts=null;a.uh=null;a.s3=null;}
function GM(){var a=this;B.call(a);a.bz=0;a.cm=0;a.cR=0;a.iR=0;}
function AWd(a,b,c,d){var e=new GM();TT(e,a,b,c,d);return e;}
function TT(a,b,c,d,e){a.bz=d;a.cm=b;a.cR=c;a.iR=e;}
function OW(){var a=this;GM.call(a);a.d5=null;a.bO=0;a.tS=0;a.xN=0;a.j2=0;}
var ACE=F();
function VH(b,c){return (b+(c/2|0)|0)/c|0;}
function PW(b,c,d){if(b<(2147483647/c|0))return VH(T(b,c),d);return 0.5+c*b/d|0;}
function H9(b,c){return ((b+c|0)-1|0)/c|0;}
function G0(b){return b+0.5|0;}
function DE(b){return b+0.5|0;}
function Fv(b,c,d){return Z(b,Ba(c,d));}
function Zc(b,c){return Ys(b)/Ys(c);}
function Mh(){var a=this;GM.call(a);a.n=null;a.wA=null;}
var TK=F(0);
function Nz(){var a=this;B.call(a);a.vo=null;a.vp=null;}
function AKk(a,b){var c,d;c=a.vo;d=a.vp;$rt_globals.console.info("paste plain string "+b);c.j(Ce(b));C1(d);}
function Un(){B.call(this);this.vY=null;}
function AO3(a,b){a.vY.clipboardData.setData("text/plain",$rt_ustr(b));}
var Me=F(0);
function Fz(a){return DD(a,null);}
function Qa(){B.call(this);this.r4=null;}
function AIY(a){I8(a.r4);}
function P$(){B.call(this);this.vU=null;}
function AEd(a){Jz(a.vU);}
var Xs=F(0);
var AV5=null;function ACI(){AV5=new NA;}
var PR=F(0);
var AUT=0.0;function Tb(b){Cc(b,1.0471975803375244,0.75,1.25,0.375);}
function Yd(){AUT=Zc(Zc(0.5,0.375),4.0);}
function Wm(){var a=this;Jp.call(a);a.xE=0;a.nj=0;}
function RI(){B.call(this);this.uY=null;}
function DD(a,b){var c,d,e;c=a.uY;d=c.rT;e=c.dC;if(BK(b,d))b=d;else{e=e.style;if(b!==null&&H(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}c.rT=b;return 1;}
var ABw=F();
var NA=F();
function AQK(a){}
function JQ(){B.call(this);this.x0=null;}
var AVV=null;var AWe=null;function AJu(){AJu=Bm(JQ);AQ_();}
function AHi(a){var b=new JQ();XU(b,a);return b;}
function XU(a,b){AJu();a.x0=b;}
function AQ_(){AVV=AHi(C(212));AWe=AHi(C(213));}
var Vy=F(0);
function AA_(){B.call(this);this.i4=null;}
function AR8(a){var b=new AA_();ALR(b,a);return b;}
function ALR(a,b){a.i4=b;}
function Eh(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.i4));}
function CF(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.i4));}
function AGG(a){var b,c;b=a.i4.byteLength;c=new R;U(c);K(Bl(K(c,C(214)),b),C(215));return S(c);}
var T2=F(0);
function Ky(){var a=this;B.call(a);a.hU=null;a.fQ=null;a.l7=null;}
function ABt(a,b){var c=new Ky();AJq(c,a,b);return c;}
function ARF(a,b,c){var d=new Ky();N3(d,a,b,c);return d;}
function X2(b){var c,d,e,f,g,h,i;c=new Ky;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=P(Bv,0);else{f=P(Bv,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=Ce(e[h]);h=h+1|0;}}}else f=P(Bv,0);N3(c,d,b,f);return c;}
function AJq(a,b,c){N3(a,b,c,P(Bv,0));}
function N3(a,b,c,d){a.hU=b;a.fQ=c;a.l7=d;}
function ER(a){var b;b=a.hU;return Ce(b!==null?b.name:a.fQ.name);}
function AJS(a){var b,c,d,e,f,g;if(a.fQ===null){b=a.l7;c=ER(a);d=Zq(b);e=new R;U(e);K(K(K(e,d),C(216)),c);c=S(e);}else{b=a.l7;c=ER(a);f=a.fQ.size;g=f|0;if(g!==f){d=ER(a);e=new R;U(e);K(K(e,C(217)),d);$rt_globals.console.info($rt_ustr(S(e))+f);g=0;}d=Zq(b);e=new R;U(e);Bl(K(K(K(K(e,d),C(216)),c),C(218)),g);c=S(e);}return c;}
function HL(){var a=this;B.call(a);a.bE=null;a.fG=null;a.s_=null;a.gF=null;a.dw=null;a.ux=null;a.u_=null;a.vP=null;}
function AWf(a,b,c,d,e){var f=new HL();Iy(f,a,b,c,d,e);return f;}
function Iy(a,b,c,d,e,f){var g;g=c.data;a.ux=AAg(C(219),16.0);a.u_=AAg(C(219),17.0);a.vP=AAg(C(57),15.0);a.bE=b;a.s_=c;a.gF=d;if(g.length>=15){a.fG=e;a.dw=f;return;}b=new BF;X(b);L(b);}
function UP(){var a=this;B.call(a);a.sy=null;a.sz=null;}
function Kh(){var a=this;Kl.call(a);a.pP=null;a.op=null;}
function YC(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.pP;e=0;f=0;g=a.op;a:{b:{while(true){if((e+32|0)>f&&Fp(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=EI(b)+j|0;h=i.length;f=Ba(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new BV;b=new R;U(b);Bl(K(Bl(K(b,C(220)),k),C(198)),h);Bp(l,S(b));L(l);}if(EI(b)<e)break;if(e<0){b=new BV;c=new R;U(c);K(Bl(K(c,C(199)),e),C(200));Bp(b,S(c));L(b);}h=b.cs;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.rw.data[n+b.uN|0];m=m+1|0;j=o;n=k;}b.cs
=h+e|0;e=0;}if(!Fp(c)){l=!Fp(b)&&e>=f?AV0:AVZ;break a;}i=g.data;k=Ba(EI(c),i.length);p=new Ny;p.m3=b;p.qD=c;l=AAW(a,d,e,f,g,0,k,p);e=p.uu;j=p.vS;if(l===null){if(!Fp(b)&&e>=f)l=AV0;else if(!Fp(c)&&e>=f)l=AVZ;}Wn(c,g,0,j);if(l!==null)break a;}b=new VK;X(b);L(b);}p=new BV;l=new R;U(l);BX(Bl(K(Bl(K(l,C(201)),j),C(196)),h),41);Bp(p,S(l));L(p);}Sv(b,b.cs-(f-e|0)|0);return l;}
var Pm=F(Kh);
function AAW(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Li(h,2))break a;i=AVZ;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!WI(l)){if((f+3|0)>g){j=j+(-1)|0;if(Li(h,3))break a;i=AVZ;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Cs(l)){i=KN(1);break a;}if
(j>=d){if(Fp(h.m3))break a;i=AV0;break a;}c=j+1|0;m=k[j];if(!CO(m)){j=c+(-2)|0;i=KN(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Li(h,4))break a;i=AVZ;break a;}k=e.data;o=Eg(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.uu=j;h.vS=f;return i;}
var TR=F(DO);
function H7(){var a=this;B.call(a);a.v_=null;a.fc=null;a.tz=null;a.xT=null;a.qR=null;a.mo=null;a.oV=null;a.wc=null;a.k6=null;a.kV=null;a.ib=null;}
function AWg(a,b,c,d,e,f,g,h,i,j,k){var l=new H7();L2(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function L2(a,b,c,d,e,f,g,h,i,j,k,l){a.v_=b;a.fc=c;a.tz=d;a.xT=e;a.qR=f;a.mo=g;a.oV=h;a.wc=i;a.k6=j;a.kV=k;a.ib=l;}
var YO=F(0);
function X6(){var a=this;B.call(a);a.eS=null;a.gw=null;a.oW=null;a.m1=null;}
function ABP(a,b,c,d){var e=new X6();AQP(e,a,b,c,d);return e;}
function AQP(a,b,c,d,e){a.eS=b;a.gw=c;a.oW=d;a.m1=e;}
var ABa=F(0);
function ADk(){var b,c;b=new Il;c=O(C(221));ALm();JK(b,c,AWh,AWi);return b;}
function ACN(){var b,c;b=new Il;c=O(C(106));AEB();JK(b,c,AWj,AWk);return b;}
function ADe(){var b,c;b=new Il;ACA();c=AWl;AEP();JK(b,c,AWm,AWn);return b;}
function ADD(){var a=this;B.call(a);a.rK=null;a.mG=null;a.t2=null;a.ni=null;}
function X$(a,b,c,d){var e=new ADD();AE_(e,a,b,c,d);return e;}
function AE_(a,b,c,d,e){a.rK=b;a.mG=c;a.t2=d;a.ni=e;}
function XK(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dw.mG;break a;case 3:if(c!=3){b=b.dw.ni;break a;}b=b.dw.t2;break a;default:b=b.bE.fc;break a;}b=b.dw.rK;}return b;}
function HX(a,b,c){return XK(a,b,0,c);}
function L9(){var a=this;B.call(a);a.iW=null;a.iy=null;}
function Ml(a,b){var c;c=a.iy;a.iy=b;return c;}
function IZ(){var a=this;L9.call(a);a.bC=null;a.bU=null;a.fh=0;a.fs=0;}
function Jh(a){var b;b=Kn(a);if(b==2){if(Kn(a.bU)<0)a.bU=M3(a.bU);return ON(a);}if(b!=(-2))return a;if(Kn(a.bC)>0)a.bC=ON(a.bC);return M3(a);}
function Kn(a){var b,c;b=a.bU;c=b===null?0:b.fh;b=a.bC;return c-(b===null?0:b.fh)|0;}
function M3(a){var b;b=a.bC;a.bC=b.bU;b.bU=a;D7(a);D7(b);return b;}
function ON(a){var b;b=a.bU;a.bU=b.bC;b.bC=a;D7(a);D7(b);return b;}
function D7(a){var b,c,d;b=a.bU;c=b===null?0:b.fh;b=a.bC;d=b===null?0:b.fh;a.fh=Z(c,d)+1|0;a.fs=1;b=a.bC;if(b!==null)a.fs=1+b.fs|0;b=a.bU;if(b!==null)a.fs=a.fs+b.fs|0;}
function Ii(){var a=this;B5.call(a);a.ga=0;a.gd=0;a.gb=0;a.gc=0;}
function HG(a){var b=new Ii();AQU(b,a);return b;}
function D5(a,b,c){var d=new Ii();AGZ(d,a,b,c);return d;}
function O(a){var b=new Ii();AOD(b,a);return b;}
function E$(a,b,c,d){var e=new Ii();QR(e,a,b,c,d);return e;}
function BH(a){var b=new Ii();Jn(b,a);return b;}
function AQU(a,b){QR(a,b,b,b,255);}
function AGZ(a,b,c,d){QR(a,b,c,d,255);}
function AOD(a,b){if(!(H(b)!=4&&H(b)!=7&&H(b)!=9)&&I(b,0)==35){if(H(b)==4){a.ga=Io(I(b,1))*17|0;a.gd=Io(I(b,2))*17|0;a.gb=Io(I(b,3))*17|0;a.gc=255;}else{a.ga=K5(I(b,1),I(b,2));a.gd=K5(I(b,3),I(b,4));a.gb=K5(I(b,5),I(b,6));a.gc=H(b)!=9?255:K5(I(b,7),I(b,8));}Js(a.ga,a.gd,a.gb,a.gc,a);return;}}
function QR(a,b,c,d,e){a.ga=b;a.gd=c;a.gb=d;a.gc=e;Js(b,c,d,e,a);}
function Jn(a,b){a.ga=b.ga;a.gd=b.gd;a.gb=b.gb;a.gc=b.gc;Ei(a,b);}
function Io(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function K5(b,c){return (16*Io(b)|0)+Io(c)|0;}
var CJ=F(0);
var AVt=null;var AWl=null;var AVv=null;var AVu=null;var AVx=null;var AVw=null;var AVz=null;var AVy=null;var AVB=null;var AVA=null;var AVC=null;function ACA(){ACA=Bm(CJ);AQl();}
function AQl(){AVt=HG(0);AWl=D5(8,8,8);AVv=O(C(222));AVu=D5(255,255,255);AVx=O(C(223));AVw=O(C(224));AVz=O(C(225));AVy=O(C(226));AVB=E$(205,205,205,153);AVA=E$(255,255,255,0);AVC=O(C(120));}
function Ca(){Cj.call(this);this.k3=null;}
var AWo=null;var AWp=null;var AWq=null;var AWr=null;var AWs=null;var AWt=null;var AWu=null;var AWv=null;var AWw=null;var AWx=null;var AWy=null;var AWz=null;var AWA=null;var AWB=null;var AWC=null;var AVD=null;function ABK(){ABK=Bm(Ca);AQL();}
function Df(a,b,c){var d=new Ca();Q5(d,a,b,c);return d;}
function AQB(a,b,c,d){var e=new Ca();YU(e,a,b,c,d);return e;}
function Q5(a,b,c,d){ABK();C9(a,b,c);a.k3=Hz(d,null);}
function YU(a,b,c,d,e){ABK();C9(a,b,c);a.k3=Hz(d,e);}
function AQL(){var b;b=new Ca;ACA();Q5(b,C(227),0,AWl);AWo=b;AWp=Df(C(228),1,O(C(229)));AWq=Df(C(230),2,O(C(231)));AWr=Df(C(232),3,O(C(233)));AWs=Df(C(234),4,AWl);AWt=Df(C(235),5,O(C(236)));AWu=Df(C(237),6,O(C(238)));AWv=Df(C(239),7,O(C(240)));AWw=Df(C(241),8,O(C(242)));AWx=AQB(C(243),9,AWl,D5(237,235,252));AWy=AQB(C(244),10,O(C(245)),O(C(246)));AWz=Df(C(247),11,O(C(238)));AWA=Df(C(248),12,O(C(249)));AWB=Df(C(250),13,O(C(251)));b=Df(C(252),14,O(C(253)));AWC=b;AVD=G(Ca,[AWo,AWp,AWq,AWr,AWs,AWt,AWu,AWv,AWw,AWx,
AWy,AWz,AWA,AWB,b]);}
function Iq(){var a=this;B.call(a);a.ic=null;a.oI=null;}
function Hz(a,b){var c=new Iq();ALt(c,a,b);return c;}
function ALt(a,b,c){a.ic=b;a.oI=c;}
function HO(){var a=this;B.call(a);a.iD=null;a.hO=null;a.vL=null;a.yI=null;a.kv=null;a.pk=null;a.n6=null;}
function AWD(a,b,c,d,e,f,g){var h=new HO();K6(h,a,b,c,d,e,f,g);return h;}
function K6(a,b,c,d,e,f,g,h){a.vL=b;a.yI=c;a.hO=d;a.kv=e;a.iD=f;a.pk=g;a.n6=h;}
function AA2(){var a=this;B.call(a);a.lY=null;a.rg=0;}
function XT(a,b){var c=new AA2();AOA(c,a,b);return c;}
function AOA(a,b,c){var d;d=new B5;a.lY=d;a.rg=b;d.b0=c;}
function O5(a,b){return Cp(a.rg,b);}
var De=F(0);
var AVH=null;var AVI=null;var AVE=null;var AVF=null;var AVG=null;var AWm=null;var AWn=null;var AVJ=null;var AVK=null;function AEP(){AEP=Bm(De);AG2();}
function AG2(){AVH=O(C(118));AVI=O(C(254));AVE=O(C(255));AVF=O(C(256));AVG=O(C(257));AWm=O(C(118));AWn=O(C(254));AVJ=E$(205,205,205,153);AVK=D5(247,248,250);}
function Zz(){var a=this;B.call(a);a.jq=null;a.hP=0.0;}
function AAg(a,b){var c=new Zz();AMH(c,a,b);return c;}
function AMH(a,b,c){a.jq=b;a.hP=c;}
function AOp(a,b){if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){b=b;return a.hP===b.hP&&BK(a.jq,b.jq)?1:0;}return 0;}
var CK=F(0);
var AUV=null;var AWE=null;var AUX=null;var AUW=null;var AUZ=null;var AUY=null;var AU1=null;var AU0=null;var AU3=null;var AU2=null;var AU4=null;function ACS(){ACS=Bm(CK);AQ8();}
function AQ8(){AUV=HG(187);AWE=O(C(258));AUX=HG(55);AUW=HG(43);AUZ=D5(33,66,131);AUY=D5(60,63,65);AU1=O(C(259));AU0=O(C(260));AU3=E$(85,85,85,128);AU2=E$(43,43,43,0);AU4=O(C(103));}
function B8(){Cj.call(this);this.lV=null;}
var AWF=null;var AWG=null;var AWH=null;var AWI=null;var AWJ=null;var AWK=null;var AWL=null;var AWM=null;var AWN=null;var AWO=null;var AWP=null;var AWQ=null;var AWR=null;var AWS=null;var AWT=null;var AU5=null;function ZG(){ZG=Bm(B8);AJy();}
function Dv(a,b,c){var d=new B8();Tn(d,a,b,c);return d;}
function AOE(a,b,c,d){var e=new B8();ACZ(e,a,b,c,d);return e;}
function Tn(a,b,c,d){ZG();C9(a,b,c);a.lV=Hz(d,null);}
function ACZ(a,b,c,d,e){ZG();C9(a,b,c);a.lV=Hz(d,e);}
function AJy(){var b;b=new B8;ACS();Tn(b,C(227),0,AWE);AWF=b;AWG=Dv(C(228),1,O(C(261)));AWH=Dv(C(230),2,O(C(262)));AWI=Dv(C(232),3,O(C(263)));AWJ=Dv(C(234),4,O(C(261)));AWK=Dv(C(235),5,D5(188,63,60));AWL=Dv(C(237),6,O(C(264)));AWM=Dv(C(239),7,O(C(265)));AWN=Dv(C(241),8,O(C(266)));AWO=AOE(C(243),9,AWE,D5(52,65,52));AWP=AOE(C(244),10,O(C(245)),O(C(267)));AWQ=Dv(C(247),11,O(C(238)));AWR=Dv(C(248),12,O(C(249)));AWS=Dv(C(250),13,AWE);b=Dv(C(252),14,O(C(253)));AWT=b;AU5=G(B8,[AWF,AWG,AWH,AWI,AWJ,AWK,AWL,AWM,AWN,AWO,
AWP,AWQ,AWR,AWS,b]);}
var Ds=F(0);
var AU9=null;var AU$=null;var AU6=null;var AU7=null;var AU8=null;var AWh=null;var AWi=null;var AU_=null;var AVa=null;function ALm(){ALm=Bm(Ds);AMl();}
function AMl(){AU9=O(C(268));AU$=O(C(269));AU6=O(C(221));AU7=O(C(270));AU8=O(C(258));AWh=O(C(268));AWi=O(C(269));AU_=E$(118,121,122,128);AVa=D5(63,66,68);}
var CU=F(0);
var AVb=null;var AWU=null;var AVd=null;var AVc=null;var AVf=null;var AVe=null;var AVh=null;var AVg=null;var AVj=null;var AVi=null;var AVk=null;function AHL(){AHL=Bm(CU);AO1();}
function AO1(){AVb=HG(206);AWU=O(C(271));AVd=O(C(272));AVc=O(C(112));AVf=O(C(273));AVe=O(C(274));AVh=O(C(275));AVg=O(C(276));AVj=E$(107,106,107,128);AVi=E$(30,31,34,0);AVk=O(C(114));}
function B7(){Cj.call(this);this.hS=null;}
var AWV=null;var AWW=null;var AWX=null;var AWY=null;var AWZ=null;var AWa=null;var AW0=null;var AW1=null;var AW2=null;var AW3=null;var AW4=null;var AW5=null;var AW6=null;var AW7=null;var AW8=null;var AVl=null;function UF(){UF=Bm(B7);AKu();}
function Dw(a,b,c){var d=new B7();RL(d,a,b,c);return d;}
function ASc(a,b,c,d){var e=new B7();Ww(e,a,b,c,d);return e;}
function RL(a,b,c,d){UF();C9(a,b,c);a.hS=Hz(d,null);}
function Ww(a,b,c,d,e){UF();C9(a,b,c);a.hS=Hz(d,e);}
function AKu(){var b,c;b=new B7;AHL();RL(b,C(227),0,AWU);AWV=b;AWW=Dw(C(228),1,O(C(277)));AWX=Dw(C(230),2,O(C(278)));AWY=Dw(C(232),3,O(C(279)));AWZ=Dw(C(234),4,AWU);AWa=Dw(C(235),5,O(C(280)));AW0=Dw(C(237),6,O(C(281)));AW1=Dw(C(239),7,O(C(282)));AW2=Dw(C(241),8,O(C(283)));c=new B7;ACS();Ww(c,C(243),9,AWE,O(C(275)));AW3=c;AW4=ASc(C(244),10,AWE,O(C(115)));AW5=Dw(C(247),11,O(C(284)));AW6=Dw(C(248),12,O(C(285)));AW7=Dw(C(250),13,AWU);b=Dw(C(252),14,O(C(253)));AW8=b;AVl=G(B7,[AWV,AWW,AWX,AWY,AWZ,AWa,AW0,AW1,AW2,
AW3,AW4,AW5,AW6,AW7,b]);}
var Dl=F(0);
var AVp=null;var AVq=null;var AVm=null;var AVn=null;var AVo=null;var AWj=null;var AWk=null;var AVr=null;var AVs=null;function AEB(){AEB=Bm(Dl);AMQ();}
function AMQ(){AVp=O(C(274));AVq=O(C(286));AVm=O(C(106));AVn=O(C(281));AVo=O(C(271));AWj=O(C(274));AWk=O(C(287));AVr=O(C(288));AVs=D5(43,45,48);}
function HZ(){var a=this;B.call(a);a.sX=null;a.nZ=null;a.pb=null;a.tV=null;a.qH=null;a.h5=null;}
function AW9(a,b,c,d,e,f){var g=new HZ();L8(g,a,b,c,d,e,f);return g;}
function L8(a,b,c,d,e,f,g){a.sX=b;a.nZ=c;a.pb=d;a.tV=e;a.qH=f;a.h5=g;}
function Il(){var a=this;B.call(a);a.kj=null;a.lG=null;a.tP=null;}
function AW$(a,b,c){var d=new Il();JK(d,a,b,c);return d;}
function JK(a,b,c,d){a.kj=b;a.lG=c;a.tP=d;}
function LD(a,b){return !b?a.lG:a.tP;}
function YZ(){var a=this;B.call(a);a.k9=null;a.su=null;a.u1=null;}
function ADt(a,b,c){var d=new YZ();APS(d,a,b,c);return d;}
function APS(a,b,c,d){a.k9=b;a.su=c;a.u1=d;}
function HH(){var a=this;B.call(a);a.fK=0;a.lk=null;}
function UU(){var a=this;B.call(a);a.yF=null;a.vc=null;a.fD=null;}
function FI(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.fD.data;f=e.length-1|0;g=f;while(true){if(d>g)return Ba(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.hv:i.hw;k=!c?i.mh:i.mi;if(j<=k&&k<(j+k|0))return h;j=BA(j,b);if(j<0)d=h+1|0;else{if(j<=0)break;g=h-1|0;}}return h;}
function Lr(){var a=this;B.call(a);a.hw=0;a.mi=0;a.hv=0;a.mh=0;a.j8=0;}
var YN=F();
function Cp(b,c){return DE(b*c);}
var ZY=F();
function TN(){var a=this;B.call(a);a.oA=null;a.s6=null;a.t3=null;}
var Tr=F();
function AHa(a,b){ABR(b);}
function IY(){var a=this;B.call(a);a.es=null;a.eR=null;a.eI=null;}
var AVM=0;function ABR(a){var b;b=a.eR;if(b!==null){AVM=AVM-1|0;a.es.dP.deleteTexture(b);a.eR=null;}}
function Ci(a){return a.eI.a;}
function K9(a){return a.eI.b;}
function Tg(a,b,c,d){var e;e=a.eI;e.a=b;e.b=c;LI(a);a.es.dP.texStorage2D(3553,1,d,b,c);e=a.es.dP;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function LI(a){var b,c;b=a.es.dP;c=a.eR;b.bindTexture(3553,c);}
function Ey(a,b){var c,d,e,f,g,h;a:{c=b.lR;d=b.k0;e=a.eI;f=e.a;if(f){g=e.b;if(g){if(f==c&&g==d?1:0){LI(a);break a;}e=a.es.dP;h=a.eR;e.deleteTexture(h);a.eR=a.es.dP.createTexture();Tg(a,c,d,32856);break a;}}Tg(a,c,d,32856);}P0(a,b,0,0);}
function Q4(a,b,c,d){LI(a);P0(a,b,c,d);}
function P0(a,b,c,d){var e;e=a.es.dP;b=b.hJ;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Ya=F();
function EV(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function YX(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function Uj(){var a=this;B.call(a);a.bn=null;a.N=null;a.P=null;a.fV=null;}
function KE(a,b,c){var d;d=a.P;d.lE(b,c,d.eW);Nj(a);}
function Nj(a){var b,c,d,e;b=a.N;c=a.P.p.a;b.p.a=c;d=b.cS;if(d!==null&&c!=Ci(d)&&!(c>=b.h8&&Ci(b.cS)>=b.h8))b.gQ=1;b=a.N;b.eW=a.bn.b2;if(VQ(b))c=0;else{b=a.N;UQ(b);e=Cm(b.e4,b.i_);Pc(b,Fy(b.eF)+(e*2|0)|0);c=b.p.b;}b=a.N.G;d=a.P.G;Bg(b,d.a,d.b-c|0);}
function Ln(b,c){if(b<0)c=C(289);else if(b>0)c=C(290);return c;}
function Xv(a,b,c){var d;d=a.N.G.a;return (d-c|0)<=b&&b<d?1:0;}
function MM(a,b,c){var d,e;d=a.N;e=d.G.a+d.p.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Pa(a,b,c){var d;d=a.N.G.b;return (d-c|0)<=b&&b<d?1:0;}
function Nw(a,b,c){var d,e;d=a.P;e=d.G.b+d.p.b|0;return e<=b&&b<(e+c|0)?1:0;}
function VX(a,b,c){var d,e,f;d=a.N.G.b-c|0;e=a.P;f=(e.G.b+e.p.b|0)+c|0;return d<=b&&b<f?1:0;}
function Wq(a,b,c){var d,e;d=a.N.G.b+c|0;e=a.P;return AAs(b,d,(e.G.b+e.p.b|0)-c|0);}
function N8(a,b,c){var d,e,f;d=a.N;e=d.G.a;f=e-c|0;e=(e+d.p.a|0)+c|0;return f<=b&&b<e?1:0;}
function ND(a,b,c){var d,e;d=a.N;e=d.G.a;return AAs(b,e+c|0,(e+d.p.a|0)-c|0);}
function AAs(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BA(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function H2(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bj;f=new Bj;g=b.a;h=b.b;b=a.P;i=b.G;j=i.a;k=i.b;b=b.p;l=b.a;m=b.b;b=new Vs;b.tL=a;b.tN=e;b.tM=f;b.tH=c;b.tG=g;b.tK=j;b.tI=l;b.tY=d;b.tX=h;b.tZ=k;b.us=m;return b;}
function SS(){var a=this;B.call(a);a.eU=null;a.b8=null;a.fp=null;a.f5=null;a.lU=null;a.ch=null;a.e2=null;a.cD=0;a.eZ=0;a.mf=0;a.im=0;a.iV=0;a.fY=0;a.uf=null;a.pC=null;a.wy=null;a.i5=null;}
function PX(a,b,c){a.eU=b;Vx(a,c);Lg(a);}
function QA(a,b){var c;a.lU=b.iD;c=b.kv.lG;Ei(a.b8.dc,c);c=b.hO.k9;Ei(a.b8.gz,c);a.i5=b.kv;}
function Vx(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=LP(b);d=b.b2;BM(a.eU);CM(c,a.eU);e=PQ(a.eU,1.25);f=0;a.cD=Cp(2.0,d);a.eZ=Cp(3.0,d);a.mf=Cp(12.0,d);g=0;h=a.ch.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Kc(c,l.lh,0.875);n=a.mf;o=(n+m|0)+n|0;f=Z(f,o);b=l.dZ;b.a=g;b.b=0;b=l.dk;b.a=o;b.b=e;Cc(l.gS,g,0.0,o,k);g=g+o|0;j=j+1|0;}b=a.fp;b.a=g;b.b=e;b=a.b8.bo;o=a.fY;if(!o){m=a.cD;m=(g+m|0)+T(m,a.ch.data.length)|0;}else m=(f+(a.cD*2|0)|0)+(a.eZ*2|0)|0;b.a=m;if(!o)e=e+(a.cD*2|0)|0;else{o=a.cD;e=(T(e+o|0,a.ch.data.length)
+o|0)+(a.eZ*2|0)|0;}b.b=e;}
function Yn(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function ES(a){var b,c;b=a.fp;if(b.a&&b.b)return a.b8.bo;c=new Bt;Bp(c,C(291));L(c);}
function Lg(a){a.iV=1;}
function ADc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.dl;if(!a.ch.data.length)return;if(a.e2===null)a.e2=GY(c);a:{if(!a.iV){d=a.fp;if(T(d.a,d.b))break a;}d=a.fp;if(!T(d.a,d.b))Vx(a,b);d=a.fp;e=d.a;f=d.b;if(!T(e,f))return;d=E_(c,e,f,b.cF);CM(d,a.eU);g=PQ(a.eU,0.125);h=a.eU;i=h.ej;g=g+i-(i+h.dU)/16.0;j=a.ch.data;e=j.length;f=0;while(f<e){h=j[f];Ev(d,h.lh,h.gS.bp+a.mf,g);f=f+1|0;}Ey(a.e2,d);a.iV=0;Is(d);}if(!JM(a.b8)){d=a.b8;Zy(c,d.bo,d.ct,d.gz,a.cD,a.f5);d=a.b8;h=d.bo;k=d.ct;d=d.dc;e=a.cD;l=a.f5;l.a=(h.a-e|0)
-e|0;l.b=(h.b-e|0)-e|0;BC(c,k.a+e|0,k.b+e|0,l,d);if(a.fY){d=a.b8;ABy(c,d.bo,d.ct,0,0,O5(a.lU,b.b2),a.lU.lY,a.f5);}}j=a.ch.data;m=j.length;n=0;while(n<m){d=j[n];if(b.cF){h=d.dZ;e=h.a;f=h.b;h=d.dk;k=d.gS;l=a.e2;o=a.i5;Ew(c,e,f,h,k,l,o.kj,LD(o,d.gD));}else{h=d.dZ;e=h.a;f=h.b;h=d.dk;k=d.gS;l=a.e2;o=a.i5;Et(c,e,f,h,k,l,o.kj,LD(o,d.gD),0.0);}n=n+1|0;}b:{if(a.fY){j=a.ch.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.f5;e=(a.b8.bo.a-(a.cD*2|0)|0)-(a.eZ*2|0)|0;h=d.dk;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.dZ;BC(c,
k.a+h.a|0,k.b,b,LD(a.i5,d.gD));}p=p+1|0;}}}}
function Nx(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.ch.data;if(c>=d.length)return (-1);e=d[c];if(EV(b,e.dZ,e.dk))return c;if(a.fY){f=e.dZ;g=f.a;e=e.dk;h=e.a;g=g+h|0;i=f.b;f=a.f5;f.a=(a.b8.bo.a-(a.cD*2|0)|0)-h|0;f.b=e.b;if(YX(b,g,i,f))break;}c=c+1|0;}return c;}
function Xf(){B.call(this);this.qt=null;}
function AFg(a,b){var c,d;c=a.qt;W_(c,D2(c,b.n));b=Be(c);d=c.c;KY(b,d.o,d.r);GC(c);}
var Mr=F();
function AOL(a,b){b=b;b.ba=C5(b.ba,null);}
function PI(){var a=this;B.call(a);a.ba=null;a.hD=null;a.ez=null;a.dE=0;a.J=0;a.c4=null;a.dM=null;a.go=0;a.nh=0;}
function Np(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dE;i=T(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Z(i,e))a:{while(true){if(d<=e){j=d;break a;}Fw(c);j=d+(-1)|0;b=D8(d);d=T(j,a.J)%a.ez.b|0;FQ(a,c,b,a.go,g);Q4(a.ba,c,0,d);if(!(j%a.dE|0))break;d=j;}}else{Fw(b);k=a.dE-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;FQ(a,b,D8(j),T(a.J,k)+a.go|0,g);k=k+(-1)|0;j=h;}Ey(a.ba,b);j=Z(i,e);}return j;}k=a.dE;h=T(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Ba(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Fw(c);b=D8((d+f|0)+1|0);j=d+1|0;d=T(d,
a.J)%a.ez.b|0;FQ(a,c,b,a.go,g);Q4(a.ba,c,0,d);if(!(j%a.dE|0))break;d=j;}}else{Fw(b);d=0;while(d<a.dE){h=h+1|0;FQ(a,b,D8((h>e?h-f|0:h)+f|0),T(a.J,d)+a.go|0,g);d=d+1|0;}Ey(a.ba,b);j=Ba(i,e);}return j;}
function AAT(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q;l=d/a.J|0;c=Ba((j+i|0)%e|0,c);Bg(a.c4,Ci(a.ba),a.J);e=d%K9(a.ba)|0;i=a.J;m=e/i|0;n=m+(c/i|0)|0;if(c%i|0)n=n+1|0;i=m;e=m;o=l;while(i<n){if(LC(a,g,o,l+(i-m|0)|0,f,k)){p=T((i-e|0)+1|0,a.J);Bg(a.c4,Ci(a.ba),p);Cc(a.dM,0.0,T(e,a.J),Ci(a.ba),p);}else{q=Fx(f,g,o,k);c=e-m|0;e=a.J;Er(a,h,T(c,e)-(d%e|0)|0,b,k.eS,q);o=(l+i|0)-m|0;Bg(a.c4,Ci(a.ba),a.J);Cc(a.dM,0.0,T(i,a.J),Ci(a.ba),a.J);e=i;}i=i+1|0;}q=Fx(f,g,o,k);c=e-m|0;e=a.J;Er(a,h,T(c,e)-(d%e|0)|0,b,k.eS,q);}
function LC(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Fx(e,b,c,f)!==f.gw?0:1;}
function Fx(b,c,d,e){c=c.data;return d<c.length&&c[d]?HX(b.dw,b,c[d]):e.gw;}
function Er(a,b,c,d,e,f){if(a.nh)Ew(b,a.hD.a+d.a|0,c+d.b|0,a.c4,a.dM,a.ba,e,f);else Et(b,a.hD.a+d.a|0,c+d.b|0,a.c4,a.dM,a.ba,e,f,0.0);}
function FQ(a,b,c,d,e){Ev(b,c,a.ez.a-20.0*e,d);}
var Z9=F();
function N0(){B.call(this);this.n3=null;}
function AFx(a,b){C8(a.n3,b);}
var Dm=F(Bt);
var Tu=F(F3);
var Y3=F(0);
function X8(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(Gj(b)){case -1655966961:if(!BE(b,C(33)))break a;c=4;break a;case 3401:if(!BE(b,C(31)))break a;c=3;break a;case 98723:if(!BE(b,C(34)))break a;c=2;break a;case 3254818:if(!BE(b,C(29)))break a;c=1;break a;case 3556653:if(!BE(b,C(21)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;default:d=Ec();e=new R;U(e);K(K(e,C(292)),b);Co(d,S(e));c=0;break b;}c=0;}return c;}
function MP(){B.call(this);this.tW=null;}
function AM1(a,b){GS(a.tW,b);}
function Q$(){B.call(this);this.sE=null;}
function AI6(a,b){var c,d,e,f;c=a.sE;if(c.ed!=3){b=b.data;d=CF(b[0]);e=Eh(b[1]);Mt(c.f,d,e,null,null);b=DQ(c.bT);f=JT(Eb(),c.tw);c=new R;U(c);K(FX(K(K(c,b),C(293)),f),C(37));$rt_globals.console.info($rt_ustr(S(c)));}}
function ADr(){var a=this;B.call(a);a.jW=null;a.kc=null;a.d3=null;a.j1=null;a.bk=null;a.li=null;a.lq=null;a.eN=null;a.fl=null;a.hc=null;}
function AQY(a,b){var c=new ADr();AK4(c,a,b);return c;}
function AK4(a,b,c){var d,e,f;a.d3=b;a.j1=c;a.bk=AFM();b=new R;U(b);a.hc=b;a.eN=Kf();b=new SM;d=ACX(16);b.fe=0;b.dt=P(Hk,d);b.pa=0.75;Vg(b);a.fl=b;b=new Vk;c=a.bk;e=a.hc;f=a.eN;b.cT=c;b.jH=e;b.qY=f;a.li=b;b=new Vc;b.cw=c;b.kQ=e;b.pN=f;a.lq=b;}
function Nm(a){var b,c,d,e,f,g,h;a:{b=Jq(a.d3.eb);c=b.gJ;if(c.cz>0){d=c.cx;e=0;b:while(true){f=b.gJ.bW.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cn;if(I7(a.eN,g))B_(a.eN,g);else{h=a.eN;Ed(h,g,Ct(h.cz));}c=c.cu;if(d!=b.gJ.cx)break b;}e=e+1|0;}b=new GF;X(b);L(b);}}b=a.d3.ft;if(b!==null)Rh(a,b);Bi(a.bk,a.d3.eb.cz);b=So(Jq(a.d3.eb));while(EP(b)){c=OU(b);Ga(a.bk,a.hc.H,H(c));CX(a.hc,c);}b=So(Jq(a.d3.eb));while(EP(b)){c=OU(b);c=B_(a.d3.eb,c);Bi(a.bk,c.k);c=BO(c);while(BP(c)){g=BS(c);g=B_(a.eN,g);Bi(a.bk,
g.bg);}}if(a.d3.ft===null)Bi(a.bk,(-1));else{Bi(a.bk,a.fl.fe);Sz(a,a.d3.ft);}if(a.j1===null)Bi(a.bk,(-1));else{Bi(a.bk,1);Yx(a.j1,a.bk,a.fl);}a.jW=P3(a.bk);a.kc=E4(S(a.hc));}
function Rh(a,b){var c,d,e,f,g,h;if(Vv(a.fl,b))LK(a.fl,b);else{c=a.fl;d=Ct(c.fe);if(b===null){e=Qn(c);if(e===null){c.jf=c.jf+1|0;e=Vz(c,null,0,0);f=c.fe+1|0;c.fe=f;if(f>c.ll)Ni(c);}}else{g=Iz(b);h=g&(c.dt.data.length-1|0);e=Nn(c,b,h,g);if(e===null){c.jf=c.jf+1|0;e=Vz(c,b,h,g);f=c.fe+1|0;c.fe=f;if(f>c.ll)Ni(c);}}e.cE=d;}b=b.cg;if(b===null)return;c=new Xq;c.pO=a;b.en(c);}
function Sz(a,b){var c,d,e,f;c=(LK(a.fl,b)).bg;Bi(a.bk,c);if(b instanceof Kj)Bi(a.bk,(-1));else if(!(b instanceof JP))Bi(a.bk,0);else Bi(a.bk,1);d=a.li;Bi(d.cT,b.dR.cA());e=b.dR;f=new Md;f.vQ=d;e.en(f);d=a.lq;Bi(d.cw,b.ei.cA());e=b.ei;f=new UI;f.tB=d;e.en(f);d=b.ig;Bi(a.bk,d.cA());e=new VG;e.uv=a;d.en(e);d=b.fU;Bi(a.bk,d.cA());d=d.bX();while(d.ce()){e=d.bP();M9(a.li,e.ij);Gz(a.lq,e.jc);Bi(a.bk,e.pl);}d=b.tx;if(d===null)Bi(a.bk,(-1));else Bi(a.bk,(B_(a.eN,d)).bg);b=b.cg;Bi(a.bk,b.cA());d=new OO;d.m4=a;b.en(d);}
function UV(){B.call(this);this.pJ=null;}
function AO4(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.pJ;d=DQ(b.bT);e=new R;U(e);K(K(e,d),C(294));$rt_globals.console.info($rt_ustr(S(e)));f=CF(c[0]);g=Eh(c[1]);h=(CF(c[2])).data[0];if(b.f.b1==h){i=null;j=null;if(c.length>=5){i=CF(c[3]);j=Eh(c[4]);}Mt(b.f,f,g,i,j);DJ(b.f.cM);DJ(b.f.cX);Pp(b.f);G8(b.f);LE(b);}}
function Tx(){var a=this;B.call(a);a.oQ=null;a.oR=null;a.oP=null;}
function AHW(a,b){VM(a.oQ,a.oR,b,a.oP);}
function Sa(){var a=this;B.call(a);a.vw=null;a.vx=null;a.vv=0;}
function AHm(a,b){var c,d,e;c=a.vw;d=a.vx;e=a.vv;d.j(VW(c,(b.n.a+e|0)-c.d0.a|0));}
function R_(){var a=this;B.call(a);a.pj=null;a.ph=null;a.pi=0;}
function AP2(a,b){var c,d,e;c=a.pj;d=a.ph;e=a.pi;d.j(PA(c,(b.n.b+e|0)-c.d0.b|0));}
var EE=F(0);
function Nq(){var a=this;B.call(a);a.hz=0;a.mj=0;a.iE=0;a.f2=0;a.gI=null;}
function BP(a){return a.hz>=a.iE?0:1;}
function BS(a){var b,c;O6(a);b=a.hz;a.f2=b;c=a.gI;a.hz=b+1|0;return c.lv(b);}
function Q2(a){var b,c,d;if(a.f2<0){b=new Dm;X(b);L(b);}O6(a);a.gI.mn(a.f2);a.mj=a.gI.bN;c=a.f2;d=a.hz;if(c<d)a.hz=d-1|0;a.iE=a.iE-1|0;a.f2=(-1);}
function O6(a){var b;if(a.mj>=a.gI.bN)return;b=new GF;X(b);L(b);}
function M8(){B.call(this);this.r7=null;}
function AKa(a){return Rd(a.r7);}
function M5(){B.call(this);this.qZ=null;}
function AO5(a){return Rd(a.qZ);}
function SI(){B.call(this);this.xZ=null;}
function AME(a){return ADC(0);}
var ACL=F();
var ACb=F();
function Wg(){B.call(this);this.uz=null;}
function AEm(a,b){GS(a.uz,b);}
function OJ(){B.call(this);this.o3=null;}
function APv(a,b){var c,d,e,f;c=a.o3;if(c.gh!=3&&c.ed!=3){b=b.data;c.gy=3;d=CF(b[0]);e=Eh(b[1]);K8(c.f,d,e);b=DQ(c.bT);f=JT(Eb(),c.hy);c=new R;U(c);K(FX(K(K(c,b),C(295)),f),C(37));$rt_globals.console.info($rt_ustr(S(c)));}}
function SK(){B.call(this);this.s5=null;}
function AQW(a,b){var c,d,e,f,g,h;c=a.s5;if(c.ed!=3){d=b.data;c.gh=3;if((CF(d[2])).data[0]!=1)GS(c,b);else{e=CF(d[0]);f=Eh(d[1]);g=c.gy!=3?0:1;QJ(c.f,e,f,g);b=DQ(c.bT);h=JT(Eb(),c.hy);c=new R;U(c);K(FX(K(K(c,b),C(296)),h),C(37));$rt_globals.console.info($rt_ustr(S(c)));}}}
function R2(){var a=this;B.call(a);a.t9=0;a.t$=0;}
function ACK(){var a=this;B.call(a);a.gT=null;a.lm=0;a.eY=0;}
function AFM(){var a=new ACK();AQX(a);return a;}
function AQX(a){a.lm=0;a.gT=Bx(16);a.eY=0;}
function Ga(a,b,c){Bi(a,b);Bi(a,c);}
function Bi(a,b){var c,d;c=a.gT;d=c.data.length;if(d==a.eY)a.gT=Ir(c,d*2|0);c=a.gT.data;d=a.eY;a.eY=d+1|0;c[d]=b;}
function P3(a){var b,c,d,e,f;b=a.lm;if(b&&a.eY!=b){c=Ec();b=a.lm;d=a.eY;e=new R;U(e);K(Bl(K(Bl(K(e,C(297)),b),C(298)),d),C(299));Co(c,S(e));}f=a.gT;b=f.data.length;d=a.eY;if(b!=d)f=Ir(f,d);return f;}
function SM(){var a=this;DB.call(a);a.fe=0;a.dt=null;a.jf=0;a.pa=0.0;a.ll=0;}
function ACX(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Vg(a){a.ll=a.dt.data.length*a.pa|0;}
function Vv(a,b){return Xa(a,b)===null?0:1;}
function LK(a,b){var c;c=Xa(a,b);if(c===null)return null;return c.cE;}
function Xa(a,b){var c,d;if(b===null)c=Qn(a);else{d=Iz(b);c=Nn(a,b,d&(a.dt.data.length-1|0),d);}return c;}
function Nn(a,b,c,d){var e;e=a.dt.data[c];while(e!==null&&!(e.lj==d&&(b!==e.cn?0:1))){e=e.gN;}return e;}
function Qn(a){var b;b=a.dt.data[0];while(b!==null&&b.cn!==null){b=b.gN;}return b;}
function Vz(a,b,c,d){var e,f;e=new Hk;Xu(e,b,null);e.lj=d;f=a.dt.data;e.gN=f[c];f[c]=e;return e;}
function Ni(a){var b,c,d,e,f,g,h,i;b=a.dt.data.length;b=ACX(!b?1:b<<1);c=P(Hk,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dt.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.lj&f;i=h.gN;h.gN=d[b];d[b]=h;h=i;}e=e+1|0;}a.dt=c;Vg(a);}
function Vk(){var a=this;B.call(a);a.cT=null;a.jH=null;a.qY=null;}
function M9(a,b){var c;if(!(b instanceof LL)){Bi(a.cT,3);Wr(a,b);Bi(a.cT,b.g0);}else{c=b;Bi(a.cT,5);Wr(a,c);Bi(a.cT,c.g0);Bi(a.cT,c.mS);b=c.js;Bi(a.cT,b.k);c=new MX;c.n_=a;DY(b,c);}}
function Wr(a,b){var c;c=b.dT.g$;Ga(a.cT,a.jH.H,H(c));Bi(a.cT,b.dT.c7);Mm(a,b.jh);CX(a.jH,c);}
function Mm(a,b){if(b===null)Bi(a.cT,(-1));else Bi(a.cT,(B_(a.qY,b)).bg);}
function Vc(){var a=this;B.call(a);a.cw=null;a.kQ=null;a.pN=null;}
function Gz(a,b){var c,d,e;if(b instanceof FT){c=b;Bi(a.cw,9);PP(a,c.gk);}else if(b instanceof Ib){d=b;Bi(a.cw,3);Qr(a,d);Bi(a.cw,d.ng);PP(a,d.gx);}else if(b instanceof Iv){e=b;Bi(a.cw,4);Gz(a,e.hp);Gz(a,e.gA);}else if(b===null)Bi(a.cw,(-1));else{Bi(a.cw,5);Qr(a,b);Bi(a.cw,b.sA);}}
function Qr(a,b){var c;c=b.eJ.g$;Ga(a.cw,a.kQ.H,H(c));Bi(a.cw,b.eJ.c7);b=b.fd;if(b===null)Bi(a.cw,(-1));else Bi(a.cw,(B_(a.pN,b)).bg);CX(a.kQ,c);}
function PP(a,b){var c;Bi(a.cw,b.k);c=new XA;c.og=a;DY(b,c);}
function S2(){B.call(this);this.ql=null;}
function AOv(a,b){var c;c=a.ql;C8(c,b);Jl(c,null);W9(c);}
var ABu=F();
function AMG(b,c){return {oldModelUrl:b,newModelUrl:c};}
function TX(){var a=this;B.call(a);a.rM=0;a.wn=0;}
function Hf(a,b){return PW(a.rM,b,a.wn);}
var D1=F(Bt);
function Ny(){var a=this;B.call(a);a.m3=null;a.qD=null;a.uu=0;a.vS=0;}
function Li(a,b){return EI(a.qD)<b?0:1;}
function RZ(){B.call(this);this.tF=null;}
function AJY(a,b){GS(a.tF,b);}
function R0(){B.call(this);this.qd=null;}
function ALH(a,b){GS(a.qd,b);}
var ACU=F();
function T0(b,c,d,e){var f,g;f=b.next();g=new WS;g.nn=b;g.nm=c;g.np=d;g.no=e;f.then(Bn(g,"f"),Bn(d,"f"));}
function Yv(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ADq(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Ff()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new WP;f.rh=b;f.ri=d;d.addEventListener("change",Bn(f,"handleEvent"));d.click();}
function YE(b,c){var d;if(c.isFile?1:0)b.j(X2(c.file()));else{c=c.createReader();d=new Wz;d.uF=b;c.readEntries(Bn(d,"f"));}}
function S7(){var a=this;B.call(a);a.bf=null;a.oC=null;a.hN=null;a.mw=null;a.jz=null;a.eQ=null;}
function F$(a){return a.bf.bM.gO;}
function XF(a){var b;b=new SL;b.vz=a;return b;}
function AAi(a){var b,c,d,e,f;b=P(DM,5);c=b.data;d=a.bf;BM(d);e=new Xm;e.sC=d;c[0]=CB(C(300),e);e=a.bf;BM(e);f=new Xh;f.ok=e;c[1]=CB(C(301),f);d=a.bf;BM(d);e=new Xi;e.pu=d;c[2]=CB(C(302),e);d=a.bf;BM(d);e=new Xj;e.vt=d;c[3]=CB(C(303),e);d=a.bf;BM(d);e=new Xk;e.m9=d;c[4]=CB(C(304),e);return GW(b);}
function I0(a,b,c){var d,e,f,g,h,i,j;a:{Du(a.eQ.bS);d=a.bf.c;e=DU(d);f=FM(d);g=a.bf.cv;if(c===null)h=null;else{ASX();switch(AW_.data[c.gj]){case 1:h=LN(g,e,f);break a;case 2:h=QB(g,e,f);break a;default:}b=new Fo;X(b);L(b);}}c=a.bf;f=D2(c,b);e=GA(c.c.f,f.V,f.bd);g=Kx(c,e);if(h!==null){e=c.c;i=f.V;j=f.bd;f=new Sp;f.ne=c;f.nd=b;f.nf=g;h.lp(e,i,j,f,c.hK);}else{f=B_(c.c.f.cX,e);if(f!==null)HJ(c,f);else{f=B_(c.c.f.cM,e);if(f!==null&&!DG(f))Q0(c.eD,b,f,c,g);else Kb(c.eD,b,c);}}}
var YT=F(0);
var QF=F(0);
var Nr=F(0);
var GH=F();
function Si(){GH.call(this);this.tT=null;}
function Uf(a,b){var c,d,e;c=0;while(true){d=a.tT;if(d.h_===null)d.h_=BO(d.pT);if(!BP(d.h_))e=0;else{c=b.co(BS(d.h_));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Qv=F(0);
function Tz(){B.call(this);this.IP=null;}
var AV7=null;function SN(b){return b===null?C(3):DQ(b);}
function WJ(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=d.c;f=BB();g=c!==null?c.data.length:b.k;h=0;while(h<g){if(c===null){i=(Bs(b,h)).V;j=RQ(EJ(BG(e.f,i)));k=SN(e.bT);}else{l=c.data;i=l[h].f1.e5;j=!BK(e.bT,l[h].hd)?C(3):RQ(EJ(BG(e.f,i)));k=SN(l[h].hd);}if(H(j)>153){m=B9(j,0,150);j=new R;U(j);K(K(j,m),C(55));j=S(j);}if(H(k)>153){k=B9(k,0,150);m=new R;U(m);K(K(m,k),C(55));k=S(m);}n=D8(i+1|0);if(c!==null){l=c.data;o=null;p=l[h];}else{p=null;o=Bs(b,h);}if(c!==null){m=new WC;m.qr=d;m.qs=p;}else{m=new WD;m.vs=d;m.vr=o;}o
=new JO;o.sB=m;o.iA=n;o.iL=j;o.fL=k;Bw(f,o);h=h+1|0;}return Ho(f,AV7);}
function AC6(){AV7=P(JO,0);}
function Sq(){var a=this;B.call(a);a.th=null;a.tf=null;a.tj=0;a.ti=0;}
function Hk(){var a=this;F6.call(a);a.lj=0;a.gN=null;}
var GF=F(Bt);
var WU=F();
function AOj(a,b){Yv(b);}
function WT(){var a=this;B.call(a);a.qG=null;a.qF=null;}
function AGS(a,b){var c,d,e,f,g,h,i;c=a.qG;d=a.qF;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new P9;i.oO=c;i.oN=g;h.then(Bn(i,"f"),Bn(d,"f"));e=e+1|0;}}
var Wa=F();
function AIz(a,b){Yv(b);}
function V_(){var a=this;B.call(a);a.p3=null;a.p4=null;}
function AJn(a,b){var c,d,e,f,g;c=a.p3;d=a.p4;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=P(Bv,1);g.data[0]=Ce(b.name);T0(f,c,d,g);}
function Ym(){B.call(this);this.Eg=null;}
function WP(){var a=this;B.call(a);a.rh=null;a.ri=null;}
function AIl(a,b){var c,d,e,f,g,h;b=a.rh;c=a.ri;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new My;h.nb=b;h.na=g;$rt_globals.setTimeout(Bn(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=X2(d.item(f));g=new Mi;g.sH=b;g.sI=c;$rt_globals.setTimeout(Bn(g,"onTimer"),0);f=f+1|0;}}
function JO(){var a=this;B.call(a);a.sB=null;a.iA=null;a.iL=null;a.fL=null;}
function Jk(){var a=this;B.call(a);a.hd=null;a.f1=null;}
function L$(){var a=this;B.call(a);a.iz=0;a.ji=0;a.fF=0;a.e5=0;}
function WC(){var a=this;B.call(a);a.qr=null;a.qs=null;}
function AE0(a){R6(a.qr,a.qs);}
function WD(){var a=this;B.call(a);a.vs=null;a.vr=null;}
function AI3(a){HJ(a.vs,a.vr);}
function E2(){var a=this;B.call(a);a.f4=null;a.cg=null;a.ei=null;a.dR=null;a.fU=null;a.ig=null;a.tx=null;}
function ARw(a){var b=new E2();ABc(b,a);return b;}
function ABc(a,b){a.f4=b;a.cg=BB();a.ei=BB();a.dR=BB();a.ig=BB();a.fU=BB();}
function W0(a){var b;b=a.f4;if(b!==null)b.cg.nS(a);}
function Xq(){B.call(this);this.pO=null;}
function AIq(a,b){b=b;Rh(a.pO,b);}
var Kj=F(E2);
var JP=F(E2);
function VG(){B.call(this);this.uv=null;}
function AE6(a,b){var c;b=b;c=a.uv;Bi(c.bk,(B_(c.eN,b)).bg);}
function PL(){var a=this;B.call(a);a.ij=null;a.jc=null;a.pl=0;}
function OO(){B.call(this);this.m4=null;}
function ALg(a,b){b=b;Sz(a.m4,b);}
function Qt(){var a=this;B.call(a);a.j9=0;a.qg=null;}
function ARm(a,b){var c,d,e;c=a.qg;b=b;d=c.t9;e=c.t$;d=b.a<=d&&e<=b.b?1:0;a.j9=d;return d?0:1;}
var Xn=F(D1);
var QT=F(Bt);
var VK=F(Bt);
function PB(){B.call(this);this.mO=null;}
function ANb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.mO;d=CF(c[0]);e=(CF(c[1])).data[0];if(!TB(b.f)){c=b.f;if(c.b1==e){e=b.mX;f=Ls(d);DJ(c.cX);DJ(c.cM);Pp(c);while(f.ek>=f.gW.data.length?0:1){if(V(f)==(-1))continue;g=Xe(c,V(f));h=Ly(BG(c,g.V),g.bd);if(V(f)==(-1)){if(!e)continue;h.bY=0;h.bH=h.bH|4;continue;}i=Xe(c,V(f));j=V(f);k=V(f);Ed(c.cX,g,i);l=c.cM;m=BB();if(B_(l,i)===null)Ed(l,i,m);Bw(B_(c.cM,i),g);h.bY=j;h.bH=k;}Kv(b);if(b.xk){n=JT(Eb(),b.uP);if(ARX(n,BL(100))){c=EW();b=DQ(b.bT);f=new R;U(f);K(FX(K(K(f,
b),C(305)),n),C(37));Co(c,S(f));}}}}}
function Yr(){B.call(this);this.JV=null;}
function V7(){B.call(this);this.mp=null;}
var AV$=null;function Ta(){var a=new V7();Y9(a);return a;}
function Y9(a){a.mp=BB();}
function DF(a,b,c){OL(a,CB(b,c));}
function CB(b,c){return AE3(c,b);}
function Fj(a,b,c){KH(a,b,c,null);}
function KH(a,b,c,d){OL(a,ASC(null,b,c,d));}
function OL(a,b){Bw(a.mp,b);}
function HK(a){return GW(Ho(a.mp,AV$));}
function Yh(){AV$=P(DM,0);}
function Qk(){var a=this;B.call(a);a.nt=null;a.nu=null;}
function ARo(a){var b,c;b=a.nt;c=a.nu;Fq(b.ea,c);}
function Vj(){B.call(this);this.sW=null;}
function Qc(){var a=this;B.call(a);a.pT=null;a.h_=null;}
function EG(){var a=this;B.call(a);a.G=null;a.p=null;a.eW=0.0;}
function ARp(){var a=new EG();Lc(a);return a;}
function Lc(a){a.G=new Bj;a.p=new Bj;}
function ANM(a){}
function ABA(a){return Cg(0,0);}
function Rl(a,b,c,d){var e;if(!HS(a.G,b)){a.o8(b);Cw(a.G,b);}if(!HS(a.p,c)){a.oM(c);Cw(a.p,c);}e=a.eW;if(e!==d){a.eW=d;a.qv(e,d);}}
function Dk(a,b){return EV(b,a.G,a.p);}
function APQ(a,b){var c,d,e,f;c=a.G;d=c.a;e=c.b;f=a.p;ASo();BC(b,d,e,f,AXa);}
function AKJ(a,b){}
function AQm(a,b){}
function ANU(a,b,c){}
function AQy(a){}
function AI8(a,b,c,d){return 0;}
function AFS(a,b,c){return null;}
function ALy(a,b,c){return 0;}
function AP4(a,b){return 0;}
function ANI(a,b,c,d){return 0;}
function IL(){var a=this;EG.call(a);a.cO=null;a.bF=null;a.gt=null;}
function UR(a,b){a.bF.a=IR(a,b);}
function XJ(a,b){a.bF.b=Lt(a,b);}
function Lt(a,b){return Z(0,Ba(b,a.cO.b-a.p.b|0));}
function IR(a,b){return Z(0,Ba(b,a.cO.a-a.p.a|0));}
function Qq(){var a=this;IL.call(a);a.bZ=null;a.dy=null;a.gs=null;a.uc=null;a.dO=null;a.bV=null;a.dW=null;a.dg=null;a.c6=0;a.ex=0;a.v4=null;a.du=0;a.d7=0;a.fA=0;a.e0=0;a.eO=0;a.cq=0;a.dX=null;a.io=null;a.qV=null;a.g1=null;}
function O7(a){a.c6=Cp(2.0,a.bZ.b2);}
function WN(a){return a.bV.data.length?0:1;}
function Tv(a){Bg(a.gs,0,0);}
function AP3(a){a.dg=C5(a.dg,null);Bg(a.gs,0,0);DJ(a.g1);a.dX=null;a.bV=AV7;a.dW=null;a.du=0;a.d7=0;a.fA=0;Tc(a.dy);a.io=null;}
function AG5(a,b,c){Pr(a);O7(a);a.dO=null;a.dX=null;a.ex=0;}
function Yb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;c=LP(a.bZ);if(WN(a))return;Jr(a);CM(c,a.dO);d=DL(a);e=X7(c,a.ex);f=Ba(H9(a.p.b,d),a.bV.data.length)+30|0;g=a.qV.vL;h=a.dW;if(h.data.length<f){a.dW=ALF(f,h,a.e0,a.eO,a.bV,a.dX,e,a.g1);Cw(a.gs,M6(a.dX));PM(a,a.bZ.dl);}a.e0=Ba((a.bF.b+a.c6|0)/(DL(a)+a.c6|0)|0,a.bV.data.length-1|0);a.eO=Ba((((a.bF.b+a.dy.bo.b|0)-1|0)+a.c6|0)/(DL(a)+a.c6|0)|0,a.bV.data.length-1|0);if(!a.dW.data.length)return;i=0;j=a.e0;while(j<=a.eO){k=OM(a,j);if
(!(k!==null&&k.fw===a.bV.data[j])){l=a.dW.data;h=a.bV;k=a.dX;m=a.g1;i=j%l.length|0;if(l[i]!==null)Vi(k,l[i],m);l[i]=IP(h.data[j],k,e,m);i=1;}j=j+1|0;}if(i){Cw(a.gs,M6(a.dX));PM(a,a.bZ.dl);}k=a.G;Uy(b,k.a,k.b,a.p);n=g.tV;k=a.G;BC(b,k.a,k.b,a.p,n);k=a.dy.ct;o=k.a;p=k.b;q=Cm(a.bZ,2.0);k=a.bZ.dp;r=a.e0;j=o+q|0;while(r<=a.eO){m=OM(a,r);s=T(r,DL(a));i=r+1|0;t=s+T(i,a.c6)|0;s=j+a.du|0;u=s+a.d7|0;v=a.cq!=r?0:1;w=!v?n:g.qH;x=!v?g.sX:g.h5;y=!v?g.nZ:g.h5;z=!v?g.pb:g.h5;ba=(p+t|0)-a.bF.b|0;if(a.bZ.cF){Ew(b,j,ba,m.fN,m.lb,
a.dg,x,w);Ew(b,s,ba,m.gp,m.gH,a.dg,y,w);Ew(b,u,ba,m.fP,m.hj,a.dg,z,w);}else{Et(b,j,ba,m.fN,m.lb,a.dg,x,w,0.0);Et(b,s,ba,m.gp,m.gH,a.dg,y,w,0.0);Et(b,u,ba,m.fP,m.hj,a.dg,z,w,0.0);}s=m.fN.a;bb=j+s|0;Bg(k,Z(0,a.du-s|0),m.fN.b);BC(b,bb,ba,k,w);s=j+a.du|0;bb=m.gp.a;bc=s+bb|0;Bg(k,Z(0,a.d7-bb|0),m.gp.b);BC(b,bc,ba,k,w);s=m.fP.a;bd=u+s|0;Bg(k,Z(0,(((a.dy.bo.a-s|0)-a.d7|0)-a.du|0)-q|0),m.fP.b);BC(b,bd,ba,k,w);be=(o+a.p.a|0)-q|0;Bg(k,q,DL(a)+a.c6|0);BC(b,be,ba,k,n);r=i;}Lh(b);}
function PM(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.gs;c=E_(b,c.a+150|0,c.b,a.bZ.cF);CM(c,a.dO);d=a.dO;e=d.ej;f=e-(e+d.dU)/16.0;g=a.dW.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.fw.iA;k=d.gH;Ev(c,j,k.bp+a.ex,f+k.bG);j=d.fw.iL;d=d.hj;Ev(c,j,d.bp+a.ex,f+d.bG);}i=i+1|0;}a:{d=a.g1;if(d.cz>0){h=d.cx;i=0;b:while(true){g=d.bW.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cn;l=j.cE;k=k;l=l.jg;Ev(c,k,l.bp+a.ex,f+l.bG);j=j.cu;if(h!=d.cx)break b;}i=i+1|0;}b=new GF;X(b);L(b);}}if(a.dg===null)a.dg=GY(b);Ey(a.dg,
c);Is(c);}
function OM(a,b){var c;c=a.dW.data;return c[b%c.length|0];}
function ANa(a,b){Cw(a.dy.bo,b);}
function AOO(a,b){Cw(a.dy.ct,b);}
function O$(a){var b,c;Jr(a);b=DL(a);c=a.bV.data.length;b=T(b,c)+T(a.c6,c+1|0)|0;Bg(a.cO,a.p.a,b);}
function Pr(a){var b,c,d,e,f,g,h,i,j;b=LP(a.bZ);if(WN(a))return;Jr(a);CM(b,a.dO);c=X7(b,a.ex);d=a.bV.data;e=d.length;f=0;while(f<e){g=d[f];h=HB(c,g.fL);i=HB(c,g.iA);j=HB(c,g.iL);a.du=Z(a.du,h);a.d7=Z(a.d7,i);a.fA=Z(a.fA,j);f=f+1|0;}}
function Vh(a,b){I2(a.io);b.sB.s();}
function Sj(a,b){var c,d,e;if(!a.dW.data.length)return (-1);c=DL(a);d=(b.b-a.G.b|0)+a.bF.b|0;e=a.c6;e=(d+e|0)/(c+e|0)|0;if(e<a.bV.data.length)return e;return (-1);}
function DL(a){return Fy(a.dO);}
function Jr(a){var b;if(a.dO===null){b=Im(a.bZ,a.uc);a.dO=b;a.dX=AFc(Fy(b));a.ex=DE(a.dO.l8);}}
function AO9(a,b){var c,d,e;a:{switch(b.bO){case 13:Vh(a,a.bV.data[a.cq]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cq=a.e0;b=a.gt;c=a.bF;Ip(b,c.a,c.b-(a.p.b/2|0)|0);return 0;case 34:a.cq=a.eO;b=a.gt;c=a.bF;Ip(b,c.a,c.b+(a.p.b/2|0)|0);return 0;case 35:case 39:a.cq=a.bV.data.length-1|0;break a;case 36:case 37:a.cq=0;break a;case 38:d=a.cq;e=a.bV.data.length;a.cq=((d+e
|0)-1|0)%e|0;break a;case 40:a.cq=(a.cq+1|0)%a.bV.data.length|0;break a;default:break a;}I2(a.io);return 0;}e=a.cq;if(e<=a.e0)Ip(a.gt,a.bF.a,T(e,DL(a))+T(a.cq,a.c6)|0);else if(e>=a.eO)Ip(a.gt,a.bF.a,(T(e+1|0,DL(a))+T(a.cq+2|0,a.c6)|0)-a.p.b|0);return 0;}
function Qd(){var a=this;B.call(a);a.mY=null;a.mZ=null;}
function I2(a){var b,c;b=a.mY;c=a.mZ;Fq(b.ea,c);S5(b);}
function PK(){var a=this;EG.call(a);a.mx=null;a.o$=null;a.t0=null;a.bq=null;a.cQ=null;a.cY=null;a.u0=0.0;a.vM=null;a.vI=null;}
function AOK(a){var b;b=a.bq;b.gt=null;a.bq=C5(b,null);}
function AIy(a,b,c,d){Rl(a,b,c,d);Rl(a.bq,b,c,d);if(d!==0.0){O$(a.bq);b=a.bq;c=b.bF;c.a=IR(b,c.a);c=b.bF;c.b=Lt(b,c.b);if(Vu(a))H4(a);else a.cY=null;if(Oi(a))G7(a);else a.cQ=null;}}
function Ip(a,b,c){var d;d=a.bq;d.bF.a=IR(d,b);d.bF.b=Lt(d,c);if(Vu(a))H4(a);if(Oi(a))G7(a);}
function Oi(a){var b;b=a.p.b;return b>0&&a.bq.cO.b>b?1:0;}
function Vu(a){var b;b=a.p.a;return b>0&&a.bq.cO.a>b?1:0;}
function H4(a){var b,c,d,e,f,g;b=a.cY;if(b===null)b=UY();a.cY=b;QO(a,b);c=a.cY;b=a.bq;d=b.bF.a;e=a.G;f=e.a;g=a.p;QG(c,d,f,g.a,b.cO.a,e.b+g.b|0,LR(a));}
function G7(a){var b,c,d,e,f,g;b=a.cQ;if(b===null)b=UY();a.cQ=b;QO(a,b);c=a.cQ;b=a.bq;d=b.bF.b;e=a.G;f=e.b;g=a.p;WX(c,d,f,g.b,b.cO.b,e.a+g.a|0,LR(a));}
function LR(a){return Cp(a.u0,a.eW);}
function QO(a,b){var c,d;c=a.vM;d=a.vI;if(!(c!==null&&d!==null?(JV(b.hW,c)&&JV(b.hX,d)?1:0):0))Gy(b,c,d);}
function AN0(a,b){var c;Yb(a.bq,b);if(!(a.cQ===null&&a.cY===null)){Dh(b,1);c=a.cQ;if(c!==null)HD(c,b);c=a.cY;if(c!==null)HD(c,b);c=a.cQ;if(c!==null)HM(c,b);c=a.cY;if(c!==null)HM(c,b);Dh(b,0);}}
function TY(a,b){var c,d;a:{b:{c=a.cQ;if(!(c!==null&&Hq(c,b))){c=a.cY;if(c===null)break b;if(!Hq(c,b))break b;}d=1;break a;}d=0;}return d;}
function APj(a,b,c,d){var e;if(!TY(a,b.n)){e=a.bq;if(d==1){c=Sj(e,b.n);if(c>=0)Vh(e,e.bV.data[c]);}}return 1;}
function AON(a,b,c){var d;d=a.cQ;if(d!==null){d=HQ(d,b.n,a.o$,1);if(d!==null)return d;}d=a.cY;if(d!==null){d=HQ(d,b.n,a.t0,0);if(d!==null)return d;}d=a.bq;if(!HC(d.dy,b.n)&&!JM(d.dy)){b=d.v4;if(b!==null)I2(b);}return null;}
function ALZ(a,b,c){return TY(a,b.n)?1:0;}
function ALG(a,b){var c,d,e;c=a.cQ;d=c!==null&&H5(c,b.n,a.mx)?1:0;c=a.cY;e=c!==null&&H5(c,b.n,a.mx)?1:0;a:{if(!d&&!e){c=a.bq;d=Sj(c,b.n);if(d>=0)c.cq=d;if(!(HC(c.dy,c.G)&&Fz(c.bZ.di)?1:0)){d=0;break a;}}d=1;}return d;}
function AHH(a,b,c,d){var e,f;if(!Dk(a,b.n))return 0;e=Cp(d*0.25,a.eW);f=Cp(c*0.25,a.eW);if(b.bz){f=f+e|0;e=0;}if(a.cQ!==null&&e){b=a.bq;XJ(b,b.bF.b+e|0);G7(a);}if(a.cY!==null&&f){b=a.bq;UR(b,b.bF.a+f|0);H4(a);}return 1;}
function AQF(a){var b,c;b=LR(a);c=ABA(a.bq);c.a=Z(c.a,b);c.b=Z(c.b,b);return c;}
var Pn=F();
var AXb=null;function K8(b,c,d){QJ(b,c,d,0);}
function QJ(b,c,d,e){NW(b,c,d,null,null,e);}
function NW(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;h=Ls(c);i=V(h);j=V(h);k=V(h);l=Cb(b);m=Bx(i+1|0);n=!g?P(CQ,i):O_(b.x,i);c=m.data;b.x=n;o=0;while(o<i){if(g&&o<l){p=4*V(h)|0;h.ek=h.ek+p|0;c[o+1|0]=(c[o]+(BG(b,o)).z|0)+1|0;}else{b.x.data[o]=Dq(Qe(h,d,0));c[o+1|0]=(c[o]+(BG(b,o)).z|0)+1|0;}o=o+1|0;}if(j)b.cK=ACp(ADx(h));b.g2=m;DJ(b.cX);DJ(b.cM);q=b.cX;g=0;while(g<k){Ed(q,Dp(V(h),V(h)),Dp(V(h),V(h)));g=g+1|0;}r=b.cX;s=b.cM;r=N1(UC(r));while(EP(r)){t=WY(r);q=t.cn;t=t.cE;BM(AXb);u=B_(s,t);if(u===null){u
=BB();Ed(s,t,u);}Bw(u,q);}if(s.kt===null){r=new O9;r.v1=s;s.kt=r;}r=s.kt;q=new Q_;Kp(q,r.v1);while(EP(q)){KV(q);r=q.fS.cE;t=AUH;c=P(B,r.k);d=c.data;Ho(r,c);ZM(c,t);g=0;v=d.length;while(g<v){t=d[g];IG(r,g);r.ck.data[g]=t;g=g+1|0;}}Qw(h);if(e!==null&&f!==null){r=ALq(e,f);N9(r);b.dY=AGn(r.kU,r.hn);b.cK=ACp(r.lA);}}
function Mt(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Ls(c);i=V(h);j=V(h);k=V(h)!=1?0:1;l=V(h);m=V(h);n=Wo(b,i);o=Wo(b,j);p=(Hw(BG(b,n.a),n.b)).data[0].l;g=(Hw(BG(b,o.a),o.b)).data[1].l;q=0;r=l-1|0;while(q<l){s=Qe(h,d,i);if(!q)s=Vd(p,s);if(q==r)s=Vd(s,g);t=n.a+q|0;u=Dq(s);c=b.x.data;v=c[t];c[t]=u;if(!k&&G5(v)==G5(u)){w=0;while(w<G5(v)){x=v.l.data[w];o=u.l.data[w];t=x.bY;if(t!=5&&t&&!o.bY){o.bY=t;o.bH=x.bH;}w=w+1|0;}}q=q+1|0;}if(k){if(m){x=ADx(h);v=Jd(i,j,
(-1));NC(b.cK,v,x);}else if(e!==null&&f!==null){u=ALq(e,f);N9(u);v=Jd(i,j,(-1));NC(b.cK,v,u.lA);b.dY.eb=u.hn;}}Qw(h);}
function Qe(b,c,d){var e,f,g,h,i,j,k,l;e=V(b);f=P(B$,e);g=f.data;h=0;while(h<e){i=V(b);j=V(b);k=V(b);l=V(b);g[h]=Dz(DA(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function ACa(){AXb=new Wy;}
function Gr(){var a=this;B.call(a);a.dJ=0;a.dV=0;a.k4=null;a.ma=0;a.fq=null;}
function AO$(a,b,c,d,e,f){var g=new Gr();AKt(g,a,b,c,d,e,f);return g;}
function AKt(a,b,c,d,e,f,g){a.dJ=b;a.dV=c;a.k4=Cg(f,g);a.ma=d;a.fq=e;}
var OV=F(0);
var Eq=F(EA);
function O8(){Eq.call(this);this.gJ=null;}
function So(a){var b;b=new SQ;Kp(b,a.gJ);return b;}
function Md(){B.call(this);this.vQ=null;}
function AHA(a,b){b=b;M9(a.vQ,b);}
function UI(){B.call(this);this.tB=null;}
function AKA(a,b){b=b;Gz(a.tB,b);}
function ID(){var a=this;B.call(a);a.dT=null;a.jh=null;a.g0=0;}
function AS2(a,b,c){var d=new ID();AB8(d,a,b,c);return d;}
function AB8(a,b,c,d){a.dT=b;a.jh=c;a.g0=d;}
function ABl(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return BK(a.dT,c.dT)&&BK(a.jh,c.jh)&&BK(Ct(a.g0),Ct(c.g0))?1:0;}return 0;}
function LL(){var a=this;ID.call(a);a.js=null;a.mS=0;}
function AFC(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){if(!ABl(a,b))return 0;c=b;return BK(a.js,c.js);}return 0;}
function Em(){var a=this;B.call(a);a.eJ=null;a.fd=null;a.sA=0;}
function ARS(a,b,c){var d=new Em();KK(d,a,b,c);return d;}
function KK(a,b,c,d){a.eJ=b;a.fd=c;a.sA=d;}
function YG(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return BK(a.eJ,c.eJ)&&BK(a.fd,c.fd)?1:0;}return 0;}
function FT(){Em.call(this);this.gk=null;}
function Ib(){var a=this;Em.call(a);a.gx=null;a.ng=0;}
function AP9(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){if(!YG(a,b))return 0;c=b;return BK(a.gx,c.gx);}return 0;}
function Iv(){var a=this;Em.call(a);a.hp=null;a.gA=null;}
function AEN(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return BK(a.hp,c.hp)&&BK(a.gA,c.gA)?1:0;}return 0;}
var YR=F();
function JF(){return {isCancellationRequested:false};}
function QP(){var a=this;B.call(a);a.sU=null;a.sT=null;}
function AHt(a,b){V3(b,a.sU,a.sT);}
var ABd=F();
function LV(b,c,d){var e;if(!("then" in b?1:0))c.f(b);else{e=new SX;e.wa=d;b.then(Bn(c,"f"),Bn(e,"f"));}}
function Mn(){var a=this;B.call(a);a.ue=null;a.ud=null;}
function AOo(a,b){V3(b,a.ue,a.ud);}
function ZW(){var a=this;GH.call(a);a.GM=null;a.I_=0;a.Ho=0;a.ED=0;}
function RO(){var a=this;B.call(a);a.nx=null;a.ny=null;}
function AJd(a){var b,c;b=a.nx;c=a.ny;SE();I0(b,c,AXc);}
function RP(){var a=this;B.call(a);a.q0=null;a.q1=null;}
function AGc(a){var b,c;b=a.q0;c=a.q1;SE();I0(b,c,AXd);}
function RM(){var a=this;B.call(a);a.uR=null;a.uQ=null;}
function AE1(a){I0(a.uR,a.uQ,null);}
function RN(){var a=this;B.call(a);a.m6=null;a.m7=null;}
function AI$(a){var b,c,d,e,f,g,h,i,j;b=a.m6;c=a.m7;d=DU(b.bf.c);e=FM(b.bf.c);d=TL(b.bf.cv,d,e);Du(b.eQ.bS);b=b.bf;e=D2(b,c);if(d!==null){f=b.c;g=e.V;h=e.bd;e=new Ty;e.rs=b;e.rr=c;b=b.hK;c=d.uC;d=E8(f);f=HE(h,g);i=AKm(!!1);j=JF();c=c.provideReferences(d,f,i,j);d=new PN;d.qj=e;d.qi=b;LV(c,d,b);}}
function QX(){B.call(this);this.pw=null;}
function ANB(a){var b;b=a.pw;Du(b.eQ.bS);Gx(b.bf,XF(b),0);}
function QW(){B.call(this);this.vj=null;}
function AL$(a){var b;b=a.vj;Du(b.eQ.bS);Gx(b.bf,XF(b),1);}
function QV(){B.call(this);this.sL=null;}
function ARc(a){var b,c,d,e;b=a.sL;Du(b.eQ.bS);F$(b);b=b.bf;BM(b);c=new XI;c.p5=b;b=Zh(C(306));if(!Lb()){c=new Bt;Bp(c,C(307));LA(b,c);}else{d=$rt_globals.navigator.clipboard.readText();e=new QU;e.nG=c;b=ADQ(b);d.then(Bn(e,"f"),Bn(b,"f"));}}
function OY(){var a=this;B.call(a);a.nv=null;a.nw=null;}
function AL6(a){var b,c;b=a.nv;c=a.nw;b=b.bf.c;b.i8=c;In(b);}
var Qb=F(0);
var AV8=null;function ABY(){AV8=new T1;}
function PU(){B.call(this);this.v$=null;}
function AF2(a){var b,c,d;b=a.v$;Du(b.eQ.bS);c=F$(b);b=b.bf;BM(b);d=new Ro;d.s4=b;VP(c,d);}
function H1(){var a=this;B.call(a);a.lb=null;a.gH=null;a.hj=null;a.fN=null;a.gp=null;a.fP=null;a.fw=null;}
function ALF(b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r;a:{j=c.data;k=P(H1,b);l=j.length;if(l<=0){if(b<=0)break a;m=k.data;while(true){if(d>e)break a;m[d%m.length|0]=IP(f.data[d],g,h,i);d=d+1|0;}}m=k.data;while(d<=e){n=f.data[d];o=d%m.length|0;p=d%l|0;q=j[p];if(q!==null&&q.fw!==n){Vi(g,q,i);m[o]=IP(n,g,h,i);j[p]=null;}else if(q!==null&&m[o]===null){m[o]=q;j[p]=null;}else m[o]=IP(n,g,h,i);d=d+1|0;}}d=0;while(d<l){r=j[d];if(r!==null){Vi(g,r,i);j[d]=null;}d=d+1|0;}return k;}
function IP(b,c,d,e){var f,g,h;f=new H1;f.fN=new Bj;f.gp=new Bj;f.fP=new Bj;f.fw=b;g=B_(e,b.fL);if(g!==null)g.hi=g.hi+1|0;else{g=new Vo;h=L0(c,b.fL,d);g.hi=1;g.jg=h;Ed(e,b.fL,g);}e=g.jg;f.lb=e;Bg(f.fN,e.bc|0,e.b0|0);e=L0(c,b.iA,d);f.gH=e;Bg(f.gp,e.bc|0,e.b0|0);b=L0(c,b.iL,d);f.hj=b;Bg(f.fP,b.bc|0,b.b0|0);return f;}
function Vi(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.fw.fL;f=B_(d,e);g=f.hi-1|0;f.hi=g;if(!g){a:{h=0;i=null;if(e===null){j=d.bW.data[0];while(j!==null){if(j.cn===null)break a;e=j.cu;i=j;j=e;}}else{k=Gj(e);l=d.bW.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.iY==k&&Yt(e,j.cn))){m=j.cu;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cu=j.cu;else d.bW.data[h]=j.cu;d.cx=d.cx+1|0;d.cz=d.cz-1|0;}KA(b,f.jg);}KA(b,c.gH);KA(b,c.hj);}
var Rm=F(0);
function X7(b,c){var d;d=new Vp;d.o6=b;d.o5=c;return d;}
function Yg(){var a=this;B.call(a);a.fz=null;a.gr=0;a.iP=0;a.fX=0;}
function AFc(a){var b=new Yg();AHI(b,a);return b;}
function AHI(a,b){a.fz=BB();a.fX=0;a.iP=2048;a.gr=b;}
function L0(a,b,c){var d,e,f,g,h,i,j;d=HB(c,b);e=a.iP;if(d>e){c=new Bt;f=new R;U(f);BX(Bl(K(Bl(K(f,C(308)),d),C(309)),e),41);Bp(c,S(f));L(c);}if(!a.gr){b=new BF;Bp(b,C(310));L(b);}a:{b=new B5;if(d){b:{c=a.fz;if(c.k>0){c=BO(c);g=d;while(true){if(!BP(c))break b;f=BS(c);if(f.bc>=g)break;}Cc(b,f.bp,f.bG,g,a.gr);f.bp=f.bp+g;h=f.bc-g;f.bc=h;if(h===0.0)Vm(a.fz,f);break a;}}g=a.fX;i=d;Cc(b,0.0,g,i,a.gr);c=a.fz;f=new B5;h=a.fX;g=a.iP-d|0;j=a.gr;f.bp=i;f.bG=h;f.bc=g;f.b0=j;Bw(c,f);a.fX=a.fX+a.gr|0;}}return b;}
function KA(a,b){var c,d,e,f,g,h,i;a:{c=new B5;c.bp=b.bp;c.bG=b.bG;c.bc=b.bc;c.b0=b.b0;b=a.fz;if(b.k>0){d=BO(b);while(true){if(!BP(d))break a;e=BS(d);if(e.bG===c.bG){f=e.bp;g=e.bc;h=f+g;i=c.bp;if(h===i){c.bp=f;c.bc=c.bc+g;Q2(d);}else{h=c.bc;if(i+h===f){c.bc=h+g;Q2(d);}}}}}}Bw(a.fz,c);}
function M6(a){return Cg(a.iP,a.fX);}
function Va(){var a=this;EG.call(a);a.e4=null;a.gK=null;a.h2=null;a.eF=null;a.i_=0.0;a.gQ=0;a.h8=0;a.cS=null;a.hZ=null;}
function JX(a){var b;b=a.p;return b.a&&b.b?0:1;}
function VQ(a){var b,c;a:{if(a.h2!==null){b=a.gK;if(b!==null&&!Eu(b)){c=0;break a;}}c=1;}return c;}
function Pc(a,b){a.p.b=b;}
function Pw(a,b,c,d,e){var f,g;f=a.e4.dp;Bg(f,d,a.p.b);g=a.G;BC(b,g.a+c|0,g.b,f,e);}
function UQ(a){if(a.eF===null)a.eF=Im(a.e4,a.h2);}
var WO=F(Ep);
var AXe=null;function ABQ(){AXe=E($rt_floatcls());}
var Fe=F();
var AXf=null;var AXg=null;var AXh=null;var AXi=null;var AUo=null;function AAG(){AXf=FK([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AXg=AF5([BL(1),BL(10),BL(100),BL(1000),BL(10000),BL(100000),BL(1000000),BL(10000000),BL(100000000),BL(1000000000),Dn(1410065408, 2),Dn(1215752192, 23),Dn(3567587328, 232),Dn(1316134912, 2328),Dn(276447232, 23283),Dn(2764472320, 232830),Dn(1874919424, 2328306),Dn(1569325056, 23283064),Dn(2808348672, 232830643)]);AXh=AF5([BL(1),BL(10),BL(100),BL(10000),BL(100000000),
Dn(1874919424, 2328306)]);AXi=new TG;AUo=new UZ;}
var Hm=F();
var AXj=0;var AXk=null;var AXl=null;function ABg(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.oh=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.kD=0;c.kg=0;return;}if(f)d=e|8388608;else{d=e<<1;while(AG8(XR(BL(d),BL(8388608)),ACr)){d=d<<1;f=f+(-1)|0;}}g=ABr(AXl,f);if(g<0)g= -g|0;h=AXl.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Hh(d,AXk.data[e],i);if(j<AXj){while($rt_ucmp(j,AXj)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=AXl.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Hh(d,
AXk.data[e],i);}e=d<<1;d=e+1|0;h=AXk.data;f=g+1|0;k=h[f];l=i-1|0;m=Hh(d,k,l);n=Hh(e-1|0,AXk.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?T($rt_udiv(j,o),o):q<0?T($rt_udiv(j,k),k)+k|0:T($rt_udiv((j+(k/2|0)|0),k),k);if(HT(BL(d),BL(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.kD=d;c.kg=g-50|0;}
function Hh(b,c,d){return ZH(ATm(ALC(XR(BL(b),Dn(4294967295, 0)),XR(BL(c),Dn(4294967295, 0))),32-d|0));}
function ZR(){AXj=$rt_udiv((-1),10);AXk=FK([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);AXl=FK([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function UZ(){var a=this;B.call(a);a.kD=0;a.kg=0;a.oh=0;}
function ABV(){var a=this;B.call(a);a.gW=null;a.ek=0;}
function Ls(a){var b=new ABV();AEg(b,a);return b;}
function AEg(a,b){a.gW=b;a.ek=0;}
function V(a){var b,c;b=a.gW.data;c=a.ek;a.ek=c+1|0;return b[c];}
function Qw(a){var b,c,d,e;if(a.ek!=a.gW.data.length){b=Ec();c=a.gW.data.length;d=a.ek;e=new R;U(e);K(Bl(K(Bl(K(e,C(297)),c),C(311)),d),C(312));Co(b,S(e));}}
function ST(){B.call(this);this.oB=null;}
function APn(a,b,c){var d,e;c=a.oB;d=c.c.f;e=b.bg;b=c.eC;Sb(d.x.data[e],0,b);}
var V2=F(BV);
function DM(){var a=this;B.call(a);a.ke=null;a.gS=null;a.dZ=null;a.dk=null;a.iH=null;a.ln=null;a.gD=0;a.lh=null;}
function AE3(a,b){var c=new DM();X5(c,a,b);return c;}
function ASC(a,b,c,d){var e=new DM();AAt(e,a,b,c,d);return e;}
function X5(a,b,c){AAt(a,b,c,null,null);}
function AAt(a,b,c,d,e){a.gS=new B5;a.dZ=new Bj;a.dk=new Bj;a.lh=c;a.ln=e;a.ke=b;a.iH=d;}
function Uz(a){return a.iH===null?0:1;}
function Na(){B.call(this);this.o9=null;}
function AJK(a){LX(a.o9);}
function Nb(){B.call(this);this.qb=null;}
function APu(a){FU(a.qb);}
function M_(){B.call(this);this.v7=null;}
function ADZ(a){J5(a.v7);}
function V$(){B.call(this);this.qP=null;}
function AKH(a){a.qP.vK();}
function V9(){B.call(this);this.uo=null;}
function ANY(a){a.uo.v8();}
function Ri(){B.call(this);this.tp=null;}
function AKe(a){var b,c,d,e,f,g,h,i;b=a.tp;c=(b.oC.ee()).data;d=P(DM,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new Ts;i.mP=b;i.mQ=h;e[f]=AE3(i,h);f=f+1|0;}return d;}
function Sr(){B.call(this);this.oH=null;}
function AJl(a){a.oH.mw.ia(0);}
function Ss(){B.call(this);this.pX=null;}
function AO_(a){a.pX.mw.ia(1);}
function Xm(){B.call(this);this.sC=null;}
function AEc(a){var b,c,d,e,f;b=a.sC.c.f;c=b.b1;d=new R;U(d);Bl(K(d,C(313)),c);$rt_globals.console.info($rt_ustr(S(d)));c=b.iN;d=new R;U(d);Bl(K(d,C(314)),c);$rt_globals.console.info($rt_ustr(S(d)));d=b.cK;e=G3(Dg(b));Wh(d,0,d.cU,e);b=EW();f=b.kh;f.data[0]=10;N4(b,f,0,1);}
function Xh(){B.call(this);this.ok=null;}
function AJo(a){Rq(a.ok);}
function Xi(){B.call(this);this.pu=null;}
function AQw(a){SZ(a.pu);}
function Xj(){B.call(this);this.vt=null;}
function AKX(a){LE(a.vt.c);}
function Xk(){B.call(this);this.m9=null;}
function AIL(a){W9(a.m9);}
var KL=F(0);
function WK(){var a=this;B.call(a);a.pm=null;a.pn=null;a.po=null;}
function Od(){B.call(this);this.qT=null;}
function AEL(a,b){var c,d;c=a.qT;d=Hf(b,c.bq.cO.b-c.p.b|0);XJ(c.bq,d);G7(c);}
function Oc(){B.call(this);this.r5=null;}
function AE7(a,b){var c,d;c=a.r5;d=Hf(b,c.bq.cO.a-c.p.a|0);UR(c.bq,d);H4(c);}
var R1=F(Ep);
var AXm=null;function Lq(b,c){return Long_udiv(b, c);}
function Yo(b,c){return Long_urem(b, c);}
function HT(b,c){return Long_ucompare(b, c);}
function AAc(){AXm=E($rt_longcls());}
var Wy=F();
var EK=F();
var AXn=null;var AXo=null;var AUM=null;var AXp=null;var AXq=null;var AXr=null;function ABf(){AXn=new U4;AXo=new U2;AUM=new U3;AXp=new U0;AXq=new U1;AXr=new XG;}
function YA(){var a=this;B.call(a);a.kU=null;a.lA=null;a.hn=null;a.cc=null;a.j0=null;a.kE=null;a.gB=null;a.lz=null;a.lr=null;}
function ALq(a,b){var c=new YA();APK(c,a,b);return c;}
function APK(a,b,c){a.cc=Ls(b);a.j0=c;}
function N9(a){var b,c,d,e,f,g,h,i;b=V(a.cc);c=new Ko;PJ(c);a.hn=c;a.gB=BB();d=0;while(d<b){e=V(a.cc);f=V(a.cc);g=DA(a.j0,e,f);Ed(a.hn,g,BB());Bw(a.gB,g);d=d+1|0;}c=N1(UC(a.hn));while(EP(c)){Gm((WY(c)).cE,Nf(a));}d=V(a.cc);if(d==(-1))a.kU=null;else{a.kE=P(E2,d);c=new MC;h=a.cc;i=a.j0;g=a.gB;c.c5=h;c.rB=i;c.qO=g;a.lz=c;c=new Q8;c.dH=h;c.uw=i;c.uZ=g;a.lr=c;a.kU=QL(a,null);}if(V(a.cc)!=(-1))a.lA=Q6(a.cc,a.kE);}
function QL(a,b){var c,d,e,f,g,h,i,j,k;c=V(a.cc);d=V(a.cc);e=a.lz;f=V(e.c5);g=BB();h=0;while(h<f){Bw(g,MG(e));h=h+1|0;}a:{switch(d){case -1:i=new Kj;i.f4=b;b=AUM;i.cg=b;i.ei=b;i.dR=b;i.ig=b;i.fU=b;break a;case 0:i=ARw(b);break a;case 1:i=new JP;ABc(i,b);Gm(i.dR,g);break a;default:}b=new Dm;i=new R;U(i);Bl(K(i,C(315)),d);Bp(b,S(i));L(b);}i.dR=g;b=a.lr;d=V(b.dH);e=BB();j=0;while(j<d){Bw(e,FC(b));j=j+1|0;}i.ei=e;i.ig=Nf(a);d=V(a.cc);b=BB();j=0;while(j<d){e=MG(a.lz);g=FC(a.lr);f=V(a.cc);k=new PL;k.ij=e;k.jc=g;k.pl
=f;Bw(b,k);j=j+1|0;}i.fU=b;j=V(a.cc);i.tx=j==(-1)?null:Bs(a.gB,j);d=V(a.cc);b=BB();j=0;while(j<d){Bw(b,QL(a,i));j=j+1|0;}i.cg=b;a.kE.data[c]=i;return i;}
function Nf(a){var b,c,d,e;b=V(a.cc);c=BB();d=0;while(d<b){e=V(a.cc);Bw(c,Bs(a.gB,e));d=d+1|0;}return c;}
function UA(){B.call(this);this.qJ=null;}
function AQ1(a,b,c){FY(BG(a.qJ.c.f,b.bg),0,H(c));}
function P9(){var a=this;B.call(a);a.oO=null;a.oN=null;}
function AG4(a,b){a.oO.j(ABt(a.oN,b));}
function ADo(){var a=this;B.call(a);a.g$=null;a.c7=0;}
function AIn(a,b){var c=new ADo();AD7(c,a,b);return c;}
function AD7(a,b,c){a.g$=b;a.c7=c;}
function AL_(a,b){var c;if(a===b)return 1;if(b!==null&&Bz(a)===Bz(b)){c=b;return a.c7==c.c7&&BK(a.g$,c.g$)?1:0;}return 0;}
function MX(){B.call(this);this.n_=null;}
function AKx(a,b){b=b;Mm(a.n_,b);}
function XA(){B.call(this);this.og=null;}
function ARi(a,b){b=b;Gz(a.og,b);}
var Ik=F(0);
function My(){var a=this;B.call(a);a.nb=null;a.na=null;}
function AJr(a){YE(a.nb,a.na);}
function Mi(){var a=this;B.call(a);a.sH=null;a.sI=null;}
function AD2(a){a.sH.j(a.sI);}
function SX(){B.call(this);this.wa=null;}
function AI7(a,b){Lj(a.wa,$rt_str(b.message));}
function Vn(){B.call(this);this.rU=null;}
function AQS(a){return a.rU;}
var T1=F();
var TG=F();
function WS(){var a=this;B.call(a);a.nn=null;a.nm=null;a.np=null;a.no=null;}
function AIR(a,b){var c,d,e,f,g,h,i;c=a.nn;d=a.nm;e=a.np;f=a.no;if(!(b.done?1:0)){T0(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new TJ;c.p7=d;c.p8=g;c.p9=f;b.then(Bn(c,"f"),Bn(e,"f"));}else{h=f.data;c=g.values();b=Ce(g.name);i=h.length;f=C3(f,i+1|0);f.data[i]=b;T0(c,d,e,f);}}}
var JI=F(Eq);
var U4=F(JI);
var K0=F(DB);
var U2=F(K0);
var Lz=F(El);
function AGK(a){var b;b=new D1;X(b);L(b);}
function ALb(a,b){var c;c=new D1;X(c);L(c);}
function AJW(a,b){b=new D1;X(b);L(b);}
var U3=F(Lz);
function ALi(a,b){var c;c=new BV;X(c);L(c);}
function AKq(a){return 0;}
function AHg(a){return AXp;}
function AEU(a){return 1;}
var U0=F();
function AEC(a){return 0;}
function AMD(a){var b;b=new L5;X(b);L(b);}
function AOc(a){var b;b=new Dm;X(b);L(b);}
var Pj=F(0);
var U1=F();
var XG=F();
function EF(){var a=this;B.call(a);a.iv=0;a.sK=0;a.hs=null;a.fS=null;a.qk=null;a.i7=null;}
function AXs(a){var b=new EF();Kp(b,a);return b;}
function Kp(a,b){a.i7=b;a.sK=b.cx;a.hs=null;}
function EP(a){var b,c;if(a.hs!==null)return 1;while(true){b=a.iv;c=a.i7.bW.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.iv=b+1|0;}return 0;}
function Zv(a){var b;if(a.sK==a.i7.cx)return;b=new GF;X(b);L(b);}
function KV(a){var b,c,d,e;Zv(a);if(!EP(a)){b=new L5;X(b);L(b);}b=a.hs;if(b!==null){c=a.fS;if(c!==null)a.qk=c;a.fS=b;a.hs=b.cu;}else{d=a.i7.bW.data;e=a.iv;a.iv=e+1|0;b=d[e];a.fS=b;a.hs=b.cu;a.qk=null;}}
var SQ=F(EF);
function OU(a){KV(a);return a.fS.cn;}
var Z6=F();
function Lb(){return "clipboard" in $rt_globals.navigator?1:0;}
function YQ(){var a=this;B.call(a);a.Ez=null;a.J1=0;}
function Q7(){var a=this;B.call(a);a.g=null;a.dr=0;a.j$=null;a.n4=0;a.f$=0;a.eA=0;a.bm=0;a.ld=null;}
function Jt(a){return a.g.by;}
function Xg(a,b,c,d){var e,f,g,h,i,j;e=BB();f=a.dr;g=0;if(c!=f)a.dr=c;a:{switch(b){case -1073741784:h=new RG;c=a.bm+1|0;a.bm=c;E3(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PO;c=a.bm+1|0;a.bm=c;E3(h,c);break a;case -33554392:h=new SR;c=a.bm+1|0;a.bm=c;E3(h,c);break a;default:c=a.f$+1|0;a.f$=c;if(d!==null)h=AS9(c);else{h=new Fc;E3(h,0);g=1;}c=a.f$;if(c<=(-1))break a;if(c>=10)break a;a.j$.data[c]=h;break a;}h=new W$;E3(h,(-1));}while(true){if(EL(a.g)&&a.g.h==(-536870788))
{d=API(B6(a,2),B6(a,64));while(!C2(a.g)&&EL(a.g)){i=a.g;j=i.h;if(j&&j!=(-536870788)&&j!=(-536870871))break;Ck(d,Bf(i));i=a.g;if(i.Z!=(-536870788))continue;Bf(i);}i=Ke(a,d);i.L(h);}else if(a.g.Z==(-536870788)){i=Gp(h);Bf(a.g);}else{i=O1(a,h);d=a.g;if(d.Z==(-536870788))Bf(d);}if(i!==null)Bw(e,i);if(C2(a.g))break;if(a.g.Z==(-536870871))break;}if(a.g.ky==(-536870788))Bw(e,Gp(h));if(a.dr!=f&&!g){a.dr=f;d=a.g;d.fO=f;d.h=d.Z;d.et=d.eH;j=d.c1;d.t=j+1|0;d.g5=j;EO(d);}switch(b){case -1073741784:break;case -536870872:d
=new Mw;Fd(d,e,h);return d;case -268435416:d=new VB;Fd(d,e,h);return d;case -134217688:d=new Ra;Fd(d,e,h);return d;case -67108824:d=new Te;Fd(d,e,h);return d;case -33554392:d=new Dt;Fd(d,e,h);return d;default:switch(e.k){case 0:break;case 1:return ASW(Bs(e,0),h);default:return ASw(e,h);}return Gp(h);}d=new It;Fd(d,e,h);return d;}
function ACu(a){var b,c,d,e,f,g,h;b=Bx(4);c=(-1);d=(-1);if(!C2(a.g)&&EL(a.g)){e=b.data;c=Bf(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B0(3);b=e.data;b[0]=c&65535;f=a.g;g=f.Z;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bf(f);f=a.g;g=f.Z;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bf(f);return APs(e,3);}return APs(e,2);}if(!B6(a,2))return Zu(b[0]);if(B6(a,64))return ANq(b[0]);return AF6(b[0]);}e=b.data;c=1;while(c<4&&!C2(a.g)&&EL(a.g)){h=c+1|0;e[c]=Bf(a.g);c=h;}if(c==1){h=e[0];if(!(AXt.yo(h)==AXu?0:1))return W5(a,e[0]);}if
(!B6(a,2))return ATJ(b,c);if(B6(a,64)){f=new WR;NY(f,b,c);return f;}f=new Tq;NY(f,b,c);return f;}
function O1(a,b){var c,d,e,f,g,h,i;if(EL(a.g)&&!Jf(a.g)&&JN(a.g.h)){if(B6(a,128)){c=ACu(a);if(!C2(a.g)){d=a.g;e=d.Z;if(!(e==(-536870871)&&!(b instanceof Fc))&&e!=(-536870788)&&!EL(d))c=LS(a,b,c);}}else if(!N7(a.g)&&!UM(a.g)){f=new N$;U(f);while(!C2(a.g)&&EL(a.g)&&!N7(a.g)&&!UM(a.g)){if(!(!Jf(a.g)&&!a.g.h)&&!(!Jf(a.g)&&JN(a.g.h))){g=a.g.h;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bf(a.g);if(!LM(e))BX(f,e&65535);else HY(f,F5(e));}if(!B6(a,2)){c=new RA;Dd(c);c.cj
=S(f);e=f.H;c.bw=e;c.ko=ALU(e);c.lf=ALU(c.bw);h=0;while(h<(c.bw-1|0)){Rf(c.ko,I(c.cj,h),(c.bw-h|0)-1|0);Rf(c.lf,I(c.cj,(c.bw-h|0)-1|0),(c.bw-h|0)-1|0);h=h+1|0;}}else if(B6(a,64))c=ATI(f);else{c=new M7;Dd(c);c.g9=S(f);c.bw=f.H;}}else c=LS(a,b,WQ(a,b));}else{d=a.g;if(d.Z!=(-536870871))c=LS(a,b,WQ(a,b));else{if(b instanceof Fc)L(B4(C(3),d.by,N6(d)));c=Gp(b);}}a:{if(!C2(a.g)){e=a.g.Z;if(!(e==(-536870871)&&!(b instanceof Fc))&&e!=(-536870788)){f=O1(a,b);if(c instanceof CN&&!(c instanceof EQ)&&!(c instanceof CD)&&
!(c instanceof Ek)){i=c;if(!f.bK(i.E)){c=new VO;ED(c,i.E,i.e,i.hm);c.E.L(c);}}if((f.ht()&65535)!=43)c.L(f);else c.L(f.E);break a;}}if(c===null)return null;c.L(b);}if((c.ht()&65535)!=43)return c;return c.E;}
function LS(a,b,c){var d,e,f,g,h;d=a.g;e=d.Z;if(c!==null&&!(c instanceof BW)){switch(e){case -2147483606:Bf(d);d=new XN;CZ(d,c,b,e);LY();c.L(AXv);return d;case -2147483605:Bf(d);d=new PD;CZ(d,c,b,(-2147483606));LY();c.L(AXv);return d;case -2147483585:Bf(d);d=new Pb;CZ(d,c,b,(-536870849));LY();c.L(AXv);return d;case -2147483525:f=new M1;d=EX(d);g=a.eA+1|0;a.eA=g;IF(f,d,c,b,(-536870849),g);LY();c.L(AXv);return f;case -1073741782:case -1073741781:Bf(d);d=new Rx;CZ(d,c,b,e);c.L(d);return d;case -1073741761:Bf(d);d
=new Qy;CZ(d,c,b,(-536870849));c.L(b);return d;case -1073741701:h=new Uk;d=EX(d);e=a.eA+1|0;a.eA=e;IF(h,d,c,b,(-536870849),e);c.L(h);return h;case -536870870:case -536870869:Bf(d);if(c.ht()!=(-2147483602)){d=new CD;CZ(d,c,b,e);}else if(B6(a,32)){d=new Ry;CZ(d,c,b,e);}else{d=new Oj;f=Pd(a.dr);CZ(d,c,b,e);d.kx=f;}c.L(d);return d;case -536870849:Bf(d);d=new Ft;CZ(d,c,b,(-536870849));c.L(b);return d;case -536870789:h=new EZ;d=EX(d);e=a.eA+1|0;a.eA=e;IF(h,d,c,b,(-536870849),e);c.L(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bf(d);d=new XQ;ED(d,f,b,e);f.e=d;return d;case -2147483585:Bf(d);c=new VJ;ED(c,f,b,(-2147483585));return c;case -2147483525:c=new O0;R5(c,EX(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bf(d);d=new Qs;ED(d,f,b,e);f.e=d;return d;case -1073741761:Bf(d);c=new TD;ED(c,f,b,(-1073741761));return c;case -1073741701:c=new Rb;R5(c,EX(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bf(d);d=AS1(f,b,e);f.e=d;return d;case -536870849:Bf(d);c
=new Ek;ED(c,f,b,(-536870849));return c;case -536870789:return AR1(EX(d),f,b,(-536870789));default:}return c;}
function WQ(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fc;while(true){a:{e=a.g;f=e.Z;if((f&(-2147418113))==(-2147483608)){Bf(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dr=g;else{if(f!=(-1073741784))g=a.dr;c=Xg(a,f,g,b);e=a.g;if(e.Z!=(-536870871))L(B4(C(3),e.by,e.c1));Bf(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bf(e);c
=APb(0);break a;case -2147483577:Bf(e);c=new Oe;BN(c);break a;case -2147483558:Bf(e);c=new Wx;h=a.bm+1|0;a.bm=h;ACQ(c,h);break a;case -2147483550:Bf(e);c=APb(1);break a;case -2147483526:Bf(e);c=new V6;BN(c);break a;case -536870876:Bf(e);a.bm=a.bm+1|0;if(B6(a,8)){if(B6(a,1)){c=ASi(a.bm);break a;}c=ARD(a.bm);break a;}if(B6(a,1)){c=ASD(a.bm);break a;}c=ATc(a.bm);break a;case -536870866:Bf(e);if(B6(a,32)){c=ATv();break a;}c=AS5(Pd(a.dr));break a;case -536870821:Bf(e);i=0;c=a.g;if(c.Z==(-536870818)){i=1;Bf(c);}c
=Ke(a,FG(a,i));c.L(b);e=a.g;if(e.Z!=(-536870819))L(B4(C(3),e.by,e.c1));OK(e,1);Bf(a.g);break a;case -536870818:Bf(e);a.bm=a.bm+1|0;if(!B6(a,8)){c=new JS;BN(c);break a;}c=new Nc;e=Pd(a.dr);BN(c);c.rI=e;break a;case 0:j=e.eH;if(j!==null)c=Ke(a,j);else{if(C2(e)){c=Gp(b);break a;}c=Zu(f&65535);}Bf(a.g);break a;default:break b;}Bf(e);c=new JS;BN(c);break a;}h=(f&2147483647)-48|0;if(a.f$<h)L(B4(C(3),E1(e),N6(a.g)));Bf(e);a.bm=a.bm+1|0;c=!B6(a,2)?ARJ(h,a.bm):B6(a,64)?ASj(h,a.bm):ATE(h,a.bm);a.j$.data[h].j7=1;a.n4=
1;break a;}if(f>=0&&!Gs(e)){c=W5(a,f);Bf(a.g);}else if(f==(-536870788))c=Gp(b);else{if(f!=(-536870871)){b=new Ie;c=!Gs(a.g)?Wt(f&65535):a.g.eH.cP();e=a.g;IS(b,c,e.by,e.c1);L(b);}if(d){b=new Ie;e=a.g;IS(b,C(3),e.by,e.c1);L(b);}c=Gp(b);}}}if(f!=(-16777176))break;}return c;}
function FG(a,b){var c,d,e,f,g,h,i,j,$$je;c=API(B6(a,2),B6(a,64));Ee(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(C2(a.g))break a;h=a.g;b=h.Z;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Ck(c,d);d=Bf(a.g);h=a.g;if(h.Z!=(-536870874)){d=38;break d;}if(h.h==(-536870821)){Bf(h);e=1;d=(-1);break d;}Bf(h);if(g){c=FG(a,0);break d;}if(a.g.Z==(-536870819))break d;We(c,FG(a,0));break d;case -536870867:if(!g){b=h.h;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bf(h);h=a.g;i=h.Z;if(Gs(h))break c;if
(i<0){j=a.g.h;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(JN(i))break e;i=i&65535;break e;}catch($$e){$$je=E5($$e);if($$je instanceof DO){break b;}else{throw $$e;}}}try{BT(c,d,i);}catch($$e){$$je=E5($$e);if($$je instanceof DO){break b;}else{throw $$e;}}Bf(a.g);d=(-1);break d;}}if(d>=0)Ck(c,d);d=45;Bf(a.g);break d;case -536870821:if(d>=0){Ck(c,d);d=(-1);}Bf(a.g);j=0;h=a.g;if(h.Z==(-536870818)){Bf(h);j=1;}if(!e)XZ(c,FG(a,j));else We(c,FG(a,j));e=0;Bf(a.g);break d;case -536870819:if(d>=0)Ck(c,
d);d=93;Bf(a.g);break d;case -536870818:if(d>=0)Ck(c,d);d=94;Bf(a.g);break d;case 0:if(d>=0)Ck(c,d);h=a.g.eH;if(h===null)d=0;else{ADP(c,h);d=(-1);}Bf(a.g);break d;default:}if(d>=0)Ck(c,d);d=Bf(a.g);}g=0;}L(B4(C(3),Jt(a),a.g.c1));}L(B4(C(3),Jt(a),a.g.c1));}if(!f){if(d>=0)Ck(c,d);return c;}L(B4(C(3),Jt(a),a.g.c1-1|0));}
function W5(a,b){var c,d,e;c=LM(b);if(B6(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AF6(b&65535);}if(B6(a,64)&&b>128){if(c){d=new Mo;Dd(d);d.bw=2;d.q6=Gd(F_(b));return d;}if(OR(b))return AL0(b&65535);if(!SC(b))return ANq(b&65535);return AJg(b&65535);}}if(!c){if(OR(b))return AL0(b&65535);if(!SC(b))return Zu(b&65535);return AJg(b&65535);}d=new DC;Dd(d);d.bw=2;d.fx=b;e=(F5(b)).data;d.jx=e[0];d.ii=e[1];return d;}
function Ke(a,b){var c,d,e;if(!AA$(b)){if(!b.I){if(b.gP())return AIM(b);return APc(b);}if(!b.gP())return AJX(b);c=new IH;TQ(c,b);return c;}c=Yu(b);d=new MD;BN(d);d.pW=c;d.wD=c.Y;if(!b.I){if(b.gP())return ABS(AIM(Hb(b)),d);return ABS(APc(Hb(b)),d);}if(!b.gP())return ABS(AJX(Hb(b)),d);c=new Qm;e=new IH;TQ(e,Hb(b));ADz(c,e,d);return c;}
function He(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B6(a,b){return (a.dr&b)!=b?0:1;}
var GK=F();
var Zn=F(GK);
var ACf=F(GK);
function Ui(){Eq.call(this);this.rp=null;}
function N1(a){var b;b=new T5;Kp(b,a.rp);return b;}
function O9(){EA.call(this);this.v1=null;}
var AB0=F();
function Zy(b,c,d,e,f,g){g.a=c.a;g.b=f;BC(b,d.a,d.b,g,e);BC(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;BC(b,d.a,d.b+f|0,g,e);BC(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function ABy(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;BC(b,j,k,i,h);BC(b,j,k,i,h);BC(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;BC(b,l,j,i,h);BC(b,l,j,i,h);BC(b,l+g|0,j+g|0,i,h);}
var Sw=F(0);
var AV6=null;function ABO(){AV6=new Qx;}
function SY(){var a=this;B.call(a);a.sh=null;a.sg=null;}
function AHl(a,b){var c,d,e,f,g,h,i,j,k;c=a.sh;d=a.sg;if(!((b?1:0)?1:0))$rt_globals.console.info("provider result is undefined");else if(!($rt_globals.Array.isArray(b)?1:0))Lj(d,C(19));else{e=P(Je,b.length);f=e.data;g=0;h=f.length;while(g<h){i=b[g];j=new Je;j.gX=new L$;if("kind" in i?1:0)j.yH=Ct(i.kind);XV(i.range,j.gX);f[g]=j;g=g+1|0;}b=c.th;d=c.tf;k=c.tj;g=c.ti;c=b.c;if(c===d&&c.o==k&&c.r==g){b.jL=AS_(k,g,e);ADB(b);}}}
var Gi=F(0);
function Tk(){B.call(this);this.q3=null;}
function ALl(a,b,c,d){I9(a.q3,b,c.bg,d.bg);}
function Tl(){B.call(this);this.nq=null;}
function AIS(a,b,c,d){I9(a.nq,b,c.bg,d.bg);}
function HI(){B.call(this);this.ms=0;}
var AXw=null;var AXx=null;var AXy=null;function AMP(a){var b=new HI();ABW(b,a);return b;}
function ABW(a,b){a.ms=b;}
function OP(b){return !b?AXx:AXw;}
function YI(){AXw=AMP(1);AXx=AMP(0);AXy=E($rt_booleancls());}
var Jb=F(0);
var RK=F();
var OC=F(0);
var AAP=F();
function Sf(){B.call(this);this.un=null;}
function AL7(a,b,c,d){HP(a.un,b,c.bg,d.bg);}
var Se=F();
function AQi(a,b){return b.dT.c7>=0?0:1;}
var Sd=F();
function ANo(a,b){var c;a:{b:{b=b;if(b!==null){b=b.eJ;if(b===null)break b;if(b.c7>=0)break b;}c=1;break a;}c=0;}return c;}
function Sg(){B.call(this);this.tv=null;}
function ALA(a,b,c,d){HP(a.tv,b,c.bg,d.bg);}
function MC(){var a=this;B.call(a);a.c5=null;a.rB=null;a.qO=null;}
function MG(a){var b,c,d,e,f,g,h,i;a:{b=V(a.c5);switch(b){case 3:break;case 5:c=NZ(a);d=Ld(a);b=V(a.c5);e=V(a.c5);f=V(a.c5);g=BB();h=0;while(h<f){Bw(g,Ld(a));h=h+1|0;}i=new LL;AB8(i,c,d,b);i.js=g;i.mS=e;break a;default:c=new Dm;d=new R;U(d);Bl(K(d,C(316)),b);Bp(c,S(d));L(c);}i=AS2(NZ(a),Ld(a),V(a.c5));}return i;}
function NZ(a){var b,c;b=V(a.c5);c=V(a.c5);return AIn(DA(a.rB,b,c),V(a.c5));}
function Ld(a){var b;b=V(a.c5);if(b==(-1))return null;return Bs(a.qO,b);}
function Q8(){var a=this;B.call(a);a.dH=null;a.uw=null;a.uZ=null;}
function FC(a){var b,c,d,e,f;a:{b:{b=V(a.dH);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Ng(a);d=PT(a);b=V(a.dH);e=Sx(a);f=new Ib;KK(f,c,d,2);f.ng=b;f.gx=e;break a;case 4:c=FC(a);d=FC(a);f=new Iv;KK(f,c.eJ,c.fd,9);f.hp=c;f.gA=d;break a;case 5:f=ARS(Ng(a),PT(a),V(a.dH));break a;case 9:c=Sx(a);f=new FT;d=!DG(c)&&Bs(c,0)!==null?(Bs(c,0)).fd:null;KK(f,null,null,7);f.gk=BB();c=BO(c);while(BP(c)){e=BS(c);if(!(e instanceof FT))Bw(f.gk,e);else{e=e;Gm(f.gk,e.gk);}}f.fd=d;break a;default:break b;}f
=null;break a;}c=new Dm;d=new R;U(d);Bl(K(d,C(317)),b);Bp(c,S(d));L(c);}return f;}
function Ng(a){var b,c;b=V(a.dH);c=V(a.dH);return AIn(DA(a.uw,b,c),V(a.dH));}
function PT(a){var b;b=V(a.dH);if(b==(-1))return null;return Bs(a.uZ,b);}
function Sx(a){var b,c,d;b=V(a.dH);c=BB();d=0;while(d<b){Bw(c,FC(a));d=d+1|0;}return c;}
function BD(){var a=this;B.call(a);a.e=null;a.b7=0;a.pp=null;a.hm=0;}
var AUk=0;function BN(a){var b;b=AUk;AUk=b+1|0;a.pp=KU(b);}
function Ka(a,b){var c;c=AUk;AUk=c+1|0;a.pp=KU(c);a.e=b;}
function Hi(a,b,c,d){var e;e=d.u;while(true){if(b>e)return (-1);if(a.d(b,c,d)>=0)break;b=b+1|0;}return b;}
function Hr(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.d(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AGp(a,b){a.hm=b;}
function AFN(a){return a.hm;}
function AOw(a){return a.e;}
function APy(a,b){a.e=b;}
function APx(a,b){return 1;}
function AQr(a){return null;}
function IA(a){var b;a.b7=1;b=a.e;if(b!==null){if(!b.b7){b=b.fa();if(b!==null){a.e.b7=1;a.e=b;}a.e.ec();}else if(b instanceof F7&&b.eg.j7)a.e=b.e;}}
function ADF(){AUk=1;}
var UD=F(0);
function Vp(){var a=this;B.call(a);a.o6=null;a.o5=0.0;}
function HB(a,b){return Kc(a.o6,b,a.o5*2.0+0.875);}
function XB(){var a=this;B.call(a);a.oo=null;a.om=null;a.ol=0;a.on=0;}
function AMa(a,b){b=b;DV(a.oo,a.om,b,a.ol,a.on);}
function XC(){var a=this;B.call(a);a.wh=null;a.wg=null;a.wf=0;a.we=0;}
function AHU(a,b){b=b;DV(a.wh,a.wg,b,a.wf,a.we);}
var Qx=F();
function ALT(a,b){}
function CC(){var a=this;BD.call(a);a.j7=0;a.dv=0;}
var AXv=null;function LY(){LY=Bm(CC);AHC();}
function AS9(a){var b=new CC();E3(b,a);return b;}
function E3(a,b){LY();BN(a);a.dv=b;}
function AFa(a,b,c,d){var e,f;e=H3(d,a.dv);Ja(d,a.dv,b);f=a.e.d(b,c,d);if(f<0)Ja(d,a.dv,e);return f;}
function AKZ(a){return a.dv;}
function AFy(a,b){return 0;}
function AHC(){var b;b=new N_;BN(b);AXv=b;}
function Gk(){var a=this;B.call(a);a.X=null;a.fO=0;a.ew=0;a.uX=0;a.ky=0;a.Z=0;a.h=0;a.r$=0;a.eH=null;a.et=null;a.t=0;a.hF=0;a.c1=0;a.g5=0;a.by=null;}
var AXz=null;var AXt=null;var AXu=0;function OK(a,b){if(b>0&&b<3)a.ew=b;if(b==1){a.h=a.Z;a.et=a.eH;a.t=a.g5;a.g5=a.c1;EO(a);}}
function Gs(a){return a.eH===null?0:1;}
function Jf(a){return a.et===null?0:1;}
function Bf(a){EO(a);return a.ky;}
function EX(a){var b;b=a.eH;EO(a);return b;}
function EO(a){var b,c,d,e,f,g,h,$$je;a.ky=a.Z;a.Z=a.h;a.eH=a.et;a.c1=a.g5;a.g5=a.t;while(true){b=0;c=a.t>=a.X.data.length?0:K_(a);a.h=c;a.et=null;if(a.ew==4){if(c!=92)return;c=a.t;d=a.X.data;c=c>=d.length?0:d[BU(a)];a.h=c;switch(c){case 69:break;default:a.h=92;a.t=a.hF;return;}a.ew=a.uX;a.h=a.t>(a.X.data.length-2|0)?0:K_(a);}a:{c=a.h;if(c!=92){e=a.ew;if(e==1)switch(c){case 36:a.h=(-536870876);break a;case 40:if(a.X.data[a.t]!=63){a.h=(-2147483608);break a;}BU(a);c=a.X.data[a.t];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.h=(-134217688);BU(a);break b;default:L(B4(C(3),E1(a),a.t));}a.h=(-67108824);BU(a);}else{switch(c){case 33:break;case 60:BU(a);c=a.X.data[a.t];e=1;break b;case 61:a.h=(-536870872);BU(a);break b;case 62:a.h=(-33554392);BU(a);break b;default:f=ADH(a);a.h=f;if(f<256){a.fO=f;f=f<<16;a.h=f;a.h=(-1073741784)|f;break b;}f=f&255;a.h=f;a.fO=f;f=f<<16;a.h=f;a.h=(-16777176)|f;break b;}a.h=(-268435416);BU(a);}}if(!e)break;}break a;case 41:a.h=(-536870871);break a;case 42:case 43:case 63:e=a.t;d
=a.X.data;switch(e>=d.length?42:d[e]){case 43:a.h=c|(-2147483648);BU(a);break a;case 63:a.h=c|(-1073741824);BU(a);break a;default:}a.h=c|(-536870912);break a;case 46:a.h=(-536870866);break a;case 91:a.h=(-536870821);OK(a,2);break a;case 93:if(e!=2)break a;a.h=(-536870819);break a;case 94:a.h=(-536870818);break a;case 123:a.et=ADg(a,c);break a;case 124:a.h=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.h=(-536870874);break a;case 45:a.h=(-536870867);break a;case 91:a.h=(-536870821);break a;case 93:a.h
=(-536870819);break a;case 94:a.h=(-536870818);break a;default:}}else{c=a.t>=(a.X.data.length-2|0)?(-1):K_(a);c:{a.h=c;switch(c){case -1:L(B4(C(3),E1(a),a.t));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.h
=ABE(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.ew!=1)break a;a.h=(-2147483648)|c;break a;case 65:a.h=(-2147483583);break a;case 66:a.h=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:L(B4(C(3),E1(a),a.t));case 68:case 83:case 87:case 100:case 115:case 119:a.et=RW(DA(a.X,
a.hF,1),0);a.h=0;break a;case 71:a.h=(-2147483577);break a;case 80:case 112:break c;case 81:a.uX=a.ew;a.ew=4;b=1;break a;case 90:a.h=(-2147483558);break a;case 97:a.h=7;break a;case 98:a.h=(-2147483550);break a;case 99:c=a.t;d=a.X.data;if(c>=(d.length-2|0))L(B4(C(3),E1(a),a.t));a.h=d[BU(a)]&31;break a;case 101:a.h=27;break a;case 102:a.h=12;break a;case 110:a.h=10;break a;case 114:a.h=13;break a;case 116:a.h=9;break a;case 117:a.h=PH(a,4);break a;case 120:a.h=PH(a,2);break a;case 122:a.h=(-2147483526);break a;default:}break a;}g
=ABm(a);h=0;if(a.h==80)h=1;try{a.et=RW(g,h);}catch($$e){$$je=E5($$e);if($$je instanceof IK){L(B4(C(3),E1(a),a.t));}else{throw $$e;}}a.h=0;}}if(b)continue;else break;}}
function ABm(a){var b,c,d,e,f,g;b=new R;FD(b,10);c=a.t;d=a.X;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=DA(d,BU(a),1);f=new R;U(f);K(K(f,C(318)),b);return S(f);}BU(a);c=0;a:{while(true){g=a.t;d=a.X.data;if(g>=(d.length-2|0))break;c=d[BU(a)];if(c==125)break a;BX(b,c);}}if(c!=125)L(B4(C(3),a.by,a.t));}if(!b.H)L(B4(C(3),a.by,a.t));f=S(b);if(H(f)==1){b=new R;U(b);K(K(b,C(318)),f);return S(b);}b:{c:{if(H(f)>3){if(J1(f,C(318)))break c;if(J1(f,C(319)))break c;}break b;}f=D3(f,2);}return f;}
function ADg(a,b){var c,d,e,f,g,$$je;c=new R;FD(c,4);d=(-1);e=2147483647;a:{while(true){f=a.t;g=a.X.data;if(f>=g.length)break a;b=g[BU(a)];if(b==125)break a;if(b==44&&d<0)try{d=I6(Jg(c),10);ADj(c,0,YJ(c));continue;}catch($$e){$$je=E5($$e);if($$je instanceof C0){break;}else{throw $$e;}}BX(c,b&65535);}L(B4(C(3),a.by,a.t));}if(b!=125)L(B4(C(3),a.by,a.t));if(c.H>0)b:{try{e=I6(Jg(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=E5($$e);if($$je instanceof C0){}else{throw $$e;}}L(B4(C(3),a.by,a.t));}else if(d<0)L(B4(C(3),
a.by,a.t));if((d|e|(e-d|0))<0)L(B4(C(3),a.by,a.t));b=a.t;g=a.X.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.h=(-2147483525);BU(a);break c;case 63:a.h=(-1073741701);BU(a);break c;default:}a.h=(-536870789);}c=new MO;c.ev=d;c.eq=e;return c;}
function E1(a){return a.by;}
function C2(a){return !a.Z&&!a.h&&a.t==a.r$&&!Gs(a)?1:0;}
function JN(b){return b<0?0:1;}
function EL(a){return !C2(a)&&!Gs(a)&&JN(a.Z)?1:0;}
function N7(a){var b;b=a.Z;return b<=56319&&b>=55296?1:0;}
function UM(a){var b;b=a.Z;return b<=57343&&b>=56320?1:0;}
function SC(b){return b<=56319&&b>=55296?1:0;}
function OR(b){return b<=57343&&b>=56320?1:0;}
function PH(a,b){var c,d,e,f,$$je;c=new R;FD(c,b);d=a.X.data.length-2|0;e=0;while(true){f=BA(e,b);if(f>=0)break;if(a.t>=d)break;BX(c,a.X.data[BU(a)]);e=e+1|0;}if(!f)a:{try{b=I6(Jg(c),16);}catch($$e){$$je=E5($$e);if($$je instanceof C0){break a;}else{throw $$e;}}return b;}L(B4(C(3),a.by,a.t));}
function ABE(a){var b,c,d,e,f,g;b=3;c=1;d=a.X.data;e=d.length-2|0;f=Ue(d[a.t],8);switch(f){case -1:break;default:if(f>3)b=2;BU(a);a:{while(true){if(c>=b)break a;g=a.t;if(g>=e)break a;g=Ue(a.X.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BU(a);c=c+1|0;}}return f;}L(B4(C(3),a.by,a.t));}
function ADH(a){var b,c,d,e;b=1;c=a.fO;a:while(true){d=a.t;e=a.X.data;if(d>=e.length)L(B4(C(3),a.by,d));b:{c:{switch(e[d]){case 41:BU(a);return c|256;case 45:if(!b)L(B4(C(3),a.by,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BU(a);}BU(a);return c;}
function BU(a){var b,c,d,e,f;b=a.t;a.hF=b;if(!(a.fO&4))a.t=b+1|0;else{c=a.X.data.length-2|0;a.t=b+1|0;a:while(true){d=a.t;if(d<c&&Q9(a.X.data[d])){a.t=a.t+1|0;continue;}d=a.t;if(d>=c)break;e=a.X.data;if(e[d]!=35)break;a.t=d+1|0;while(true){f=a.t;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.t=f+1|0;}}}return a.hF;}
function AC0(b){return AXz.Ed(b);}
function K_(a){var b,c,d,e;b=a.X.data[BU(a)];if(Cs(b)){c=a.hF+1|0;d=a.X.data;if(c<d.length){e=d[c];if(CO(e)){BU(a);return Eg(b,e);}}}return b;}
function N6(a){return a.c1;}
function Ie(){var a=this;BF.call(a);a.x8=null;a.xG=null;a.qS=0;}
function B4(a,b,c){var d=new Ie();IS(d,a,b,c);return d;}
function IS(a,b,c,d){X(a);a.qS=(-1);a.x8=b;a.xG=c;a.qS=d;}
var ADb=F();
function Wz(){B.call(this);this.uF=null;}
function AMT(a,b){var c,d;c=a.uF;d=0;while(d<b.length){YE(c,b[d]);d=d+1|0;}}
var ABe=F(0);
function TJ(){var a=this;B.call(a);a.p7=null;a.p8=null;a.p9=null;}
function AMv(a,b){a.p7.j(ARF(a.p8,b,a.p9));}
var RG=F(CC);
function AEG(a,b,c,d){var e;e=a.dv;BI(d,e,b-C6(d,e)|0);return a.e.d(b,c,d);}
function AN5(a,b){return 0;}
var W$=F(CC);
function AGm(a,b,c,d){return b;}
var PO=F(CC);
function AFI(a,b,c,d){if(C6(d,a.dv)!=b)b=(-1);return b;}
function SR(){CC.call(this);this.nJ=0;}
function AEM(a,b,c,d){var e;e=a.dv;BI(d,e,b-C6(d,e)|0);a.nJ=b;return b;}
function AMF(a,b){return 0;}
var Fc=F(CC);
function APR(a,b,c,d){if(d.je!=1&&b!=d.u)return (-1);d.iK=1;Ja(d,0,b);return b;}
function BW(){BD.call(this);this.bw=0;}
function Dd(a){BN(a);a.bw=1;}
function AQ0(a,b,c,d){var e;if((b+a.bQ()|0)>d.u){d.de=1;return (-1);}e=a.bl(b,c);if(e<0)return (-1);return a.e.d(b+e|0,c,d);}
function AOW(a){return a.bw;}
function AJz(a,b){return 1;}
var ACP=F(BW);
function Gp(a){var b=new ACP();AK_(b,a);return b;}
function AK_(a,b){Ka(a,b);a.bw=1;a.hm=1;a.bw=0;}
function AOn(a,b,c){return 0;}
function AHG(a,b,c,d){var e,f,g;e=d.u;f=d.cC;while(true){g=BA(b,e);if(g>0)return (-1);if(g<0&&CO(I(c,b))&&b>f&&Cs(I(c,b-1|0))){b=b+1|0;continue;}if(a.e.d(b,c,d)>=0)break;b=b+1|0;}return b;}
function AGf(a,b,c,d,e){var f,g;f=e.u;g=e.cC;while(true){if(c<b)return (-1);if(c<f&&CO(I(d,c))&&c>g&&Cs(I(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.d(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AEJ(a,b){return 0;}
function BR(){var a=this;BD.call(a);a.bv=null;a.eg=null;a.R=0;}
function ASw(a,b){var c=new BR();Fd(c,a,b);return c;}
function Fd(a,b,c){BN(a);a.bv=b;a.eg=c;a.R=c.dv;}
function AIu(a,b,c,d){var e,f,g,h;if(a.bv===null)return (-1);e=Fi(d,a.R);Dc(d,a.R,b);f=a.bv.k;g=0;while(true){if(g>=f){Dc(d,a.R,e);return (-1);}h=(Bs(a.bv,g)).d(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AMy(a,b){a.eg.e=b;}
function AKr(a,b){var c;a:{c=a.bv;if(c!==null){c=BO(c);while(true){if(!BP(c))break a;if(!(BS(c)).bK(b))continue;else return 1;}}}return 0;}
function ANd(a,b){return H3(b,a.R)>=0&&Fi(b,a.R)==H3(b,a.R)?0:1;}
function AGa(a){var b,c,d,e;a.b7=1;b=a.eg;if(b!==null&&!b.b7)IA(b);a:{b=a.bv;if(b!==null){c=b.k;d=0;while(true){if(d>=c)break a;b=Bs(a.bv,d);e=b.fa();if(e===null)e=b;else{b.b7=1;Fl(a.bv,d);Rw(a.bv,d,e);}if(!e.b7)e.ec();d=d+1|0;}}}if(a.e!==null)IA(a);}
var It=F(BR);
function AMg(a,b,c,d){var e,f,g,h;e=C6(d,a.R);BI(d,a.R,b);f=a.bv.k;g=0;while(true){if(g>=f){BI(d,a.R,e);return (-1);}h=(Bs(a.bv,g)).d(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ANE(a,b){return !C6(b,a.R)?0:1;}
var Dt=F(It);
function AGP(a,b,c,d){var e,f,g;e=C6(d,a.R);BI(d,a.R,b);f=a.bv.k;g=0;while(g<f){if((Bs(a.bv,g)).d(b,c,d)>=0)return a.e.d(a.eg.nJ,c,d);g=g+1|0;}BI(d,a.R,e);return (-1);}
function ANm(a,b){a.e=b;}
var Mw=F(Dt);
function AMs(a,b,c,d){var e,f;e=a.bv.k;f=0;while(f<e){if((Bs(a.bv,f)).d(b,c,d)>=0)return a.e.d(b,c,d);f=f+1|0;}return (-1);}
function APF(a,b){return 0;}
var VB=F(Dt);
function AFt(a,b,c,d){var e,f;e=a.bv.k;f=0;while(true){if(f>=e)return a.e.d(b,c,d);if((Bs(a.bv,f)).d(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AO2(a,b){return 0;}
var Ra=F(Dt);
function AF9(a,b,c,d){var e,f,g,h;e=a.bv.k;f=d.iQ?0:d.cC;a:{g=a.e.d(b,c,d);if(g>=0){BI(d,a.R,b);h=0;while(true){if(h>=e)break a;if((Bs(a.bv,h)).cb(f,b,c,d)>=0){BI(d,a.R,(-1));return g;}h=h+1|0;}}}return (-1);}
function ARg(a,b){return 0;}
var Te=F(Dt);
function AEh(a,b,c,d){var e,f;e=a.bv.k;BI(d,a.R,b);f=0;while(true){if(f>=e)return a.e.d(b,c,d);if((Bs(a.bv,f)).cb(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ANT(a,b){return 0;}
function F7(){BR.call(this);this.cL=null;}
function ASW(a,b){var c=new F7();Zm(c,a,b);return c;}
function Zm(a,b,c){BN(a);a.cL=b;a.eg=c;a.R=c.dv;}
function AEz(a,b,c,d){var e,f;e=Fi(d,a.R);Dc(d,a.R,b);f=a.cL.d(b,c,d);if(f>=0)return f;Dc(d,a.R,e);return (-1);}
function AKM(a,b,c,d){var e;e=a.cL.b9(b,c,d);if(e>=0)Dc(d,a.R,e);return e;}
function AN9(a,b,c,d,e){var f;f=a.cL.cb(b,c,d,e);if(f>=0)Dc(e,a.R,f);return f;}
function AKl(a,b){return a.cL.bK(b);}
function AMB(a){var b;b=new MW;Zm(b,a.cL,a.eg);a.e=b;return b;}
function AQt(a){var b;a.b7=1;b=a.eg;if(b!==null&&!b.b7)IA(b);b=a.cL;if(b!==null&&!b.b7){b=b.fa();if(b!==null){a.cL.b7=1;a.cL=b;}a.cL.ec();}}
var AC3=F();
function XV(b,c){c.fF=b.startColumn-1|0;c.e5=b.startLineNumber-1|0;c.iz=b.endColumn-1|0;c.ji=b.endLineNumber-1|0;}
function AEa(b,c,d,e){return {endColumn:b,endLineNumber:c,startColumn:d,startLineNumber:e};}
var Go=F();
function Q(){var a=this;Go.call(a);a.Y=0;a.b6=0;a.F=null;a.jj=null;a.j3=null;a.I=0;}
var AXA=null;function OH(){OH=Bm(Q);AGB();}
function Bq(a){var b;OH();b=new Ws;b.y=Bx(64);a.F=b;}
function AFv(a){return null;}
function AEY(a){return a.F;}
function AA$(a){var b,c,d,e,f;if(!a.b6)b=GT(a.F,0)>=2048?0:1;else{a:{c=a.F;b=0;d=c.bi;if(b<d){e=c.y.data;f=(e[0]^(-1))>>>0|0;if(f)b=HW(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+HW(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AIK(a){return a.I;}
function AOS(a){return a;}
function Yu(a){var b,c;if(a.j3===null){b=a.eG();c=new VN;c.yu=a;c.oa=b;Bq(c);a.j3=c;Ee(c,a.b6);}return a.j3;}
function Hb(a){var b,c;if(a.jj===null){b=a.eG();c=new VL;c.x$=a;c.ul=b;c.u8=a;Bq(c);a.jj=c;Ee(c,a.Y);a.jj.I=a.I;}return a.jj;}
function AQo(a){return 0;}
function Ee(a,b){var c;c=a.Y;if(c^b){a.Y=c?0:1;a.b6=a.b6?0:1;}if(!a.I)a.I=1;return a;}
function AHM(a){return a.Y;}
function JJ(b,c){OH();return b.i(c);}
function HV(b,c){var d,e;OH();if(b.c_()!==null&&c.c_()!==null){b=b.c_();c=c.c_();d=Ba(b.y.data.length,c.y.data.length);e=0;a:{while(e<d){if(b.y.data[e]&c.y.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function RW(b,c){var d,e,f;OH();d=0;while(true){ANR();e=AXB.data;if(d>=e.length){f=new IK;Bp(f,C(3));f.yM=C(3);f.yy=b;L(f);}e=e[d].data;if(BE(b,e[0]))break;d=d+1|0;}return ACl(e[1],c);}
function AGB(){var b;b=new GI;ANR();AXA=b;}
function Zb(){var a=this;Q.call(a);a.lo=0;a.nH=0;a.f_=0;a.kZ=0;a.dI=0;a.e6=0;a.C=null;a.br=null;}
function C7(){var a=new Zb();AQ$(a);return a;}
function API(a,b){var c=new Zb();AGo(c,a,b);return c;}
function AQ$(a){Bq(a);a.C=ARh();}
function AGo(a,b,c){Bq(a);a.C=ARh();a.lo=b;a.nH=c;}
function Ck(a,b){a:{if(a.lo){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dI){L_(a.C,He(b&65535));break a;}K4(a.C,He(b&65535));break a;}if(a.nH&&b>128){a.f_=1;b=Gd(F_(b));}}}if(!(!SC(b)&&!OR(b))){if(a.kZ)L_(a.F,b-55296|0);else K4(a.F,b-55296|0);}if(a.dI)L_(a.C,b);else K4(a.C,b);if(!a.I&&LM(b))a.I=1;return a;}
function ADP(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(a.kZ){if(!b.b6)Fu(a.F,b.eG());else CW(a.F,b.eG());}else if(!b.b6)Fr(a.F,b.eG());else{E6(a.F,b.eG());CW(a.F,b.eG());a.b6=a.b6?0:1;a.kZ=1;}if(!a.e6&&b.c_()!==null){if(a.dI){if(!b.Y)Fu(a.C,b.c_());else CW(a.C,b.c_());}else if(!b.Y)Fr(a.C,b.c_());else{E6(a.C,b.c_());CW(a.C,b.c_());a.Y=a.Y?0:1;a.dI=1;}}else{c=a.Y;d=a.br;if(d!==null){if(!c){e=new Oy;e.wW=a;e.vF=c;e.uS=d;e.uD=b;Bq(e);a.br=e;}else{e=new Oz;e.yV=a;e.rz=c;e.q_=d;e.qx=b;Bq(e);a.br=e;}}else{if(c&&!a.dI&&
LQ(a.C)){d=new Ov;d.xF=a;d.rm=b;Bq(d);a.br=d;}else if(!c){d=new Ot;d.kF=a;d.jJ=c;d.o_=b;Bq(d);a.br=d;}else{d=new Ou;d.lF=a;d.jS=c;d.uI=b;Bq(d);a.br=d;}a.e6=1;}}return a;}
function BT(a,b,c){var d,e,f,g,h;if(b>c){d=new BF;X(d);L(d);}a:{b:{if(!a.lo){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Ck(a,b);b=b+1|0;}}if(!a.dI)Hy(a.C,b,c+1|0);else{d=a.C;c=c+1|0;if(b>c){d=new BV;X(d);L(d);}e=d.bi;if(b<e){f=Ba(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.y.data;h[g]=h[g]&(HR(d,b)|Hp(d,f));}else{h=d.y.data;h[g]=h[g]&HR(d,b);e=g+1|0;while(e<c){d.y.data[e]=0;e=e+1|0;}if(f&31){h=d.y.data;h[c]=h[c]&Hp(d,f);}}GL(d);}}}}return a;}
function XZ(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.f_)a.f_=1;c=a.b6;if(!(c^b.b6)){if(!c)Fr(a.F,b.F);else CW(a.F,b.F);}else if(c)Fu(a.F,b.F);else{E6(a.F,b.F);CW(a.F,b.F);a.b6=1;}if(!a.e6&&CH(b)!==null){c=a.Y;if(!(c^b.Y)){if(!c)Fr(a.C,CH(b));else CW(a.C,CH(b));}else if(c)Fu(a.C,CH(b));else{E6(a.C,CH(b));CW(a.C,CH(b));a.Y=1;}}else{c=a.Y;d=a.br;if(d!==null){if(!c){e=new On;e.wJ=a;e.tE=c;e.uH=d;e.vk=b;Bq(e);a.br=e;}else{e=new O3;e.w5=a;e.vg=c;e.m_=d;e.nR=b;Bq(e);a.br=e;}}else{if(!a.dI&&LQ(a.C)){if(!c){d=new Ow;d.yX
=a;d.qf=b;Bq(d);a.br=d;}else{d=new Ox;d.w8=a;d.u4=b;Bq(d);a.br=d;}}else if(!c){d=new OA;d.tQ=a;d.rR=b;d.rd=c;Bq(d);a.br=d;}else{d=new OB;d.sa=a;d.st=b;d.sO=c;Bq(d);a.br=d;}a.e6=1;}}}
function We(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.f_)a.f_=1;c=a.b6;if(!(c^b.b6)){if(!c)CW(a.F,b.F);else Fr(a.F,b.F);}else if(!c)Fu(a.F,b.F);else{E6(a.F,b.F);CW(a.F,b.F);a.b6=0;}if(!a.e6&&CH(b)!==null){c=a.Y;if(!(c^b.Y)){if(!c)CW(a.C,CH(b));else Fr(a.C,CH(b));}else if(!c)Fu(a.C,CH(b));else{E6(a.C,CH(b));CW(a.C,CH(b));a.Y=0;}}else{c=a.Y;d=a.br;if(d!==null){if(!c){e=new Op;e.wV=a;e.tU=c;e.n$=d;e.rx=b;Bq(e);a.br=e;}else{e=new Oq;e.xb=a;e.s7=c;e.m0=d;e.tC=b;Bq(e);a.br=e;}}else{if(!a.dI&&LQ(a.C)){if(!c){d=new Ol;d.w$
=a;d.pK=b;Bq(d);a.br=d;}else{d=new Om;d.yR=a;d.pR=b;Bq(d);a.br=d;}}else if(!c){d=new Or;d.wr=a;d.vB=b;d.sl=c;Bq(d);a.br=d;}else{d=new Ok;d.sj=a;d.td=b;d.rA=c;Bq(d);a.br=d;}a.e6=1;}}}
function CL(a,b){var c;c=a.br;if(c!==null)return a.Y^c.i(b);return a.Y^C_(a.C,b);}
function CH(a){if(!a.e6)return a.C;return null;}
function AHB(a){return a.F;}
function APl(a){var b,c;if(a.br!==null)return a;b=CH(a);c=new Oo;c.wE=a;c.ip=b;Bq(c);return Ee(c,a.Y);}
function ALI(a){var b,c,d;b=new R;U(b);c=GT(a.C,0);while(c>=0){HY(b,F5(c));BX(b,124);c=GT(a.C,c+1|0);}d=b.H;if(d>0)VD(b,d-1|0);return S(b);}
function AHP(a){return a.f_;}
function IK(){var a=this;Bt.call(a);a.yM=null;a.yy=null;}
function DN(){BD.call(this);this.E=null;}
function CZ(a,b,c,d){Ka(a,c);a.E=b;a.hm=d;}
function AQ9(a){return a.E;}
function AN$(a,b){return !a.E.bK(b)&&!a.e.bK(b)?0:1;}
function APJ(a,b){return 1;}
function AK7(a){var b;a.b7=1;b=a.e;if(b!==null&&!b.b7){b=b.fa();if(b!==null){a.e.b7=1;a.e=b;}a.e.ec();}b=a.E;if(b!==null){if(!b.b7){b=b.fa();if(b!==null){a.E.b7=1;a.E=b;}a.E.ec();}else if(b instanceof F7&&b.eg.j7)a.E=b.e;}}
function CN(){DN.call(this);this.S=null;}
function AS1(a,b,c){var d=new CN();ED(d,a,b,c);return d;}
function ED(a,b,c,d){CZ(a,b,c,d);a.S=b;}
function AEk(a,b,c,d){var e,f;e=0;a:{while((b+a.S.bQ()|0)<=d.u){f=a.S.bl(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.d(b,c,d);if(f>=0)break;b=b-a.S.bQ()|0;e=e+(-1)|0;}return f;}
function EQ(){CN.call(this);this.jd=null;}
function AR1(a,b,c,d){var e=new EQ();R5(e,a,b,c,d);return e;}
function R5(a,b,c,d,e){ED(a,c,d,e);a.jd=b;}
function AFd(a,b,c,d){var e,f,g,h,i;e=a.jd;f=e.ev;g=e.eq;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.S.bQ()|0)>d.u)break a;i=a.S.bl(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.d(b,c,d);if(i>=0)break;b=b-a.S.bQ()|0;h=h+(-1)|0;}return i;}if((b+a.S.bQ()|0)>d.u){d.de=1;return (-1);}i=a.S.bl(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CD=F(DN);
function AEy(a,b,c,d){var e;if(!a.E.D(d))return a.e.d(b,c,d);e=a.E.d(b,c,d);if(e>=0)return e;return a.e.d(b,c,d);}
var Ek=F(CN);
function AKS(a,b,c,d){var e;e=a.E.d(b,c,d);if(e<0)e=a.e.d(b,c,d);return e;}
function ARj(a,b){a.e=b;a.E.L(b);}
var VO=F(CN);
function AQR(a,b,c,d){while((b+a.S.bQ()|0)<=d.u&&a.S.bl(b,c)>0){b=b+a.S.bQ()|0;}return a.e.d(b,c,d);}
function ALB(a,b,c,d){var e,f,g;e=a.e.b9(b,c,d);if(e<0)return (-1);f=e-a.S.bQ()|0;while(f>=b&&a.S.bl(f,c)>0){g=f-a.S.bQ()|0;e=f;f=g;}return e;}
function W(){var a=this;B.call(a);a.lK=null;a.kA=null;}
function ACl(a,b){if(!b&&a.lK===null)a.lK=a.B();else if(b&&a.kA===null)a.kA=Ee(a.B(),1);if(b)return a.kA;return a.lK;}
var C0=F(BF);
function MO(){var a=this;Go.call(a);a.ev=0;a.eq=0;}
function ALM(a){var b,c,d,e,f;b=a.ev;c=a.eq;d=c!=2147483647?KU(c):C(3);e=new R;U(e);BX(e,123);f=Bl(e,b);BX(f,44);BX(K(f,d),125);return S(e);}
var N_=F(BD);
function AJ2(a,b,c,d){return b;}
function AMw(a,b){return 0;}
function Ws(){var a=this;B.call(a);a.y=null;a.bi=0;}
function ARh(){var a=new Ws();AFZ(a);return a;}
function AFZ(a){a.y=Bx(0);}
function K4(a,b){var c,d;c=b/32|0;if(b>=a.bi){H0(a,c+1|0);a.bi=b+1|0;}d=a.y.data;d[c]=d[c]|1<<(b%32|0);}
function Hy(a,b,c){var d,e,f,g,h;d=BA(b,c);if(d>0){e=new BV;X(e);L(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bi){H0(a,f+1|0);a.bi=c;}if(d==f){g=a.y.data;g[d]=g[d]|Hp(a,b)&HR(a,c);}else{g=a.y.data;g[d]=g[d]|Hp(a,b);h=d+1|0;while(h<f){a.y.data[h]=(-1);h=h+1|0;}if(c&31){g=a.y.data;g[f]=g[f]|HR(a,c);}}}
function Hp(a,b){return (-1)<<(b%32|0);}
function HR(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function L_(a,b){var c,d,e,f;c=b/32|0;d=a.y.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bi-1|0))GL(a);}}
function C_(a,b){var c,d;c=b/32|0;d=a.y.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function GT(a,b){var c,d,e,f;c=a.bi;if(b>=c)return (-1);d=b/32|0;e=a.y.data;f=e[d]>>>(b%32|0)|0;if(f)return HW(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+HW(e[f])|0;f=f+1|0;}return (-1);}
function H0(a,b){var c;c=a.y.data.length;if(c>=b)return;c=Z((b*3|0)/2|0,(c*2|0)+1|0);a.y=Ir(a.y,c);}
function GL(a){var b,c,d;b=(a.bi+31|0)/32|0;a.bi=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=NB(a.y.data[c]);if(d<32)break;c=c+(-1)|0;a.bi=a.bi-32|0;}a.bi=a.bi-d|0;}}
function CW(a,b){var c,d,e,f;c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&b.y.data[d];d=d+1|0;}while(true){f=a.y.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bi=Ba(a.bi,b.bi);GL(a);}
function Fu(a,b){var c,d,e;c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&(b.y.data[d]^(-1));d=d+1|0;}GL(a);}
function Fr(a,b){var c,d,e;c=Z(a.bi,b.bi);a.bi=c;H0(a,(c+31|0)/32|0);c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]|b.y.data[d];d=d+1|0;}}
function E6(a,b){var c,d,e;c=Z(a.bi,b.bi);a.bi=c;H0(a,(c+31|0)/32|0);c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]^b.y.data[d];d=d+1|0;}GL(a);}
function LQ(a){return a.bi?0:1;}
function MD(){var a=this;BR.call(a);a.pW=null;a.wD=0;}
function Qm(){var a=this;BR.call(a);a.l9=null;a.lH=null;}
function ABS(a,b){var c=new Qm();ADz(c,a,b);return c;}
function ADz(a,b,c){BN(a);a.l9=b;a.lH=c;}
function AE$(a,b,c,d){var e,f,g,h,i;e=a.l9.d(b,c,d);if(e<0)a:{f=a.lH;g=d.cC;e=d.u;h=b+1|0;e=BA(h,e);if(e>0){d.de=1;e=(-1);}else{i=I(c,b);if(!f.pW.i(i))e=(-1);else{if(Cs(i)){if(e<0&&CO(I(c,h))){e=(-1);break a;}}else if(CO(i)&&b>g&&Cs(I(c,b-1|0))){e=(-1);break a;}e=f.e.d(h,c,d);}}}if(e>=0)return e;return (-1);}
function AMe(a,b){a.e=b;a.lH.e=b;a.l9.L(b);}
function AFP(a,b){return 1;}
function AFu(a,b){return 1;}
function Dj(){var a=this;BR.call(a);a.dA=null;a.xA=0;}
function AJX(a){var b=new Dj();TQ(b,a);return b;}
function TQ(a,b){BN(a);a.dA=b.iX();a.xA=b.Y;}
function AHr(a,b,c,d){var e,f,g,h;e=d.u;if(b<e){f=b+1|0;g=I(c,b);if(a.i(g)){h=a.e.d(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=I(c,f);if(G6(g,f)&&a.i(Eg(g,f)))return a.e.d(b,c,d);}}return (-1);}
function AH5(a,b){return a.dA.i(b);}
function AE4(a,b){if(b instanceof DC)return JJ(a.dA,b.fx);if(b instanceof Ea)return JJ(a.dA,b.c9);if(b instanceof Dj)return HV(a.dA,b.dA);if(!(b instanceof DZ))return 1;return HV(a.dA,b.eT);}
function AJO(a){return a.dA;}
function AOH(a,b){a.e=b;}
function AHD(a,b){return 1;}
var IH=F(Dj);
function AJA(a,b){return a.dA.i(Gd(F_(b)));}
function Y2(){var a=this;BW.call(a);a.qL=null;a.xm=0;}
function AIM(a){var b=new Y2();ALV(b,a);return b;}
function ALV(a,b){Dd(a);a.qL=b.iX();a.xm=b.Y;}
function AJ3(a,b,c){return !a.qL.i(EH(Ej(I(c,b))))?(-1):1;}
function DZ(){var a=this;BW.call(a);a.eT=null;a.xR=0;}
function APc(a){var b=new DZ();AMZ(b,a);return b;}
function AMZ(a,b){Dd(a);a.eT=b.iX();a.xR=b.Y;}
function Mf(a,b,c){return !a.eT.i(I(c,b))?(-1):1;}
function AMA(a,b){if(b instanceof Ea)return JJ(a.eT,b.c9);if(b instanceof DZ)return HV(a.eT,b.eT);if(!(b instanceof Dj)){if(!(b instanceof DC))return 1;return 0;}return HV(a.eT,b.dA);}
function OI(){var a=this;BR.call(a);a.gv=null;a.lW=null;a.jb=0;}
function APs(a,b){var c=new OI();AEA(c,a,b);return c;}
function AEA(a,b,c){BN(a);a.gv=b;a.jb=c;}
function AKQ(a,b){a.e=b;}
function Qz(a){if(a.lW===null)a.lW=G3(a.gv);return a.lW;}
function AD$(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.u;f=Bx(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=I(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?FK([k,l]):FK([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.jb;if(b!=n)return (-1);while(true){if(l>=n)return a.e.d(i,c,d);if(m[l]!=a.gv.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=I(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=I(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.jb==3){k=f[0];m=a.gv.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.d(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.jb==2){b=f[0];m=a.gv.data;if(b==m[0]&&f[1]==m[1]){b=a.e.d(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AFF(a,b){return b instanceof OI&&!BE(Qz(b),Qz(a))?0:1;}
function APq(a,b){return 1;}
function Ea(){BW.call(this);this.c9=0;}
function Zu(a){var b=new Ea();AM3(b,a);return b;}
function AM3(a,b){Dd(a);a.c9=b;}
function AJJ(a){return 1;}
function AIH(a,b,c){return a.c9!=I(c,b)?(-1):1;}
function AHo(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return Hi(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=HU(c,a.c9,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.d(b,c,d)>=0)break;}return f;}
function AJR(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hr(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=G9(d,a.c9,c);if(f<0)break a;if(f<b)break a;if(a.e.d(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function APg(a,b){if(b instanceof Ea)return b.c9!=a.c9?0:1;if(!(b instanceof DZ)){if(b instanceof Dj)return b.i(a.c9);if(!(b instanceof DC))return 1;return 0;}return Mf(b,0,Wt(a.c9))<=0?0:1;}
function ADm(){BW.call(this);this.mN=0;}
function ANq(a){var b=new ADm();ALw(b,a);return b;}
function ALw(a,b){Dd(a);a.mN=EH(Ej(b));}
function AD3(a,b,c){return a.mN!=EH(Ej(I(c,b)))?(-1):1;}
function X1(){var a=this;BW.call(a);a.vq=0;a.n7=0;}
function AF6(a){var b=new X1();ANP(b,a);return b;}
function ANP(a,b){Dd(a);a.vq=b;a.n7=He(b);}
function AEq(a,b,c){return a.vq!=I(c,b)&&a.n7!=I(c,b)?(-1):1;}
function E0(){var a=this;BR.call(a);a.hf=0;a.kl=null;a.jM=null;a.jE=0;}
function ATJ(a,b){var c=new E0();NY(c,a,b);return c;}
function NY(a,b,c){BN(a);a.hf=1;a.jM=b;a.jE=c;}
function AQs(a,b){a.e=b;}
function AMf(a,b,c,d){var e,f,g,h,i,j,k,l;e=Bx(4);f=d.u;if(b>=f)return (-1);g=JU(a,b,c,f);h=b+a.hf|0;i=AC0(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Da(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=JU(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AC0(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.hf|0;if(h>=f){b=k;break a;}g=JU(a,h,c,f);b=k;}}}if(b!=a.jE)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.d(h,c,d);if(i[g]!=a.jM.data[g])break;g=g+1|0;}return (-1);}
function Wd(a){var b,c;if(a.kl===null){b=new R;U(b);c=0;while(c<a.jE){HY(b,F5(a.jM.data[c]));c=c+1|0;}a.kl=S(b);}return a.kl;}
function JU(a,b,c,d){var e,f,g;a.hf=1;if(b>=(d-1|0))e=I(c,b);else{d=b+1|0;e=I(c,b);f=I(c,d);if(G6(e,f)){g=B0(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Cs(g[0])&&CO(g[1])?Eg(g[0],g[1]):g[0];a.hf=2;}}return e;}
function AJ4(a,b){return b instanceof E0&&!BE(Wd(b),Wd(a))?0:1;}
function ANn(a,b){return 1;}
var WR=F(E0);
var Tq=F(E0);
var XN=F(CD);
function AGt(a,b,c,d){var e;while(true){e=a.E.d(b,c,d);if(e<=0)break;b=e;}return a.e.d(b,c,d);}
var PD=F(CD);
function ALo(a,b,c,d){var e;e=a.E.d(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.E.d(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.d(b,c,d);}
var Ft=F(CD);
function AOF(a,b,c,d){var e;if(!a.E.D(d))return a.e.d(b,c,d);e=a.E.d(b,c,d);if(e>=0)return e;return a.e.d(b,c,d);}
function APW(a,b){a.e=b;a.E.L(b);}
var Pb=F(Ft);
function AJM(a,b,c,d){var e;e=a.E.d(b,c,d);if(e<=0)e=b;return a.e.d(e,c,d);}
function ALQ(a,b){a.e=b;}
function EZ(){var a=this;CD.call(a);a.fH=null;a.dm=0;}
function AXC(a,b,c,d,e){var f=new EZ();IF(f,a,b,c,d,e);return f;}
function IF(a,b,c,d,e,f){CZ(a,c,d,e);a.fH=b;a.dm=f;}
function ARe(a,b,c,d){var e,f;e=MI(d,a.dm);if(!a.E.D(d))return a.e.d(b,c,d);if(e>=a.fH.eq)return a.e.d(b,c,d);f=a.dm;e=e+1|0;DW(d,f,e);f=a.E.d(b,c,d);if(f>=0){DW(d,a.dm,0);return f;}f=a.dm;e=e+(-1)|0;DW(d,f,e);if(e>=a.fH.ev)return a.e.d(b,c,d);DW(d,a.dm,0);return (-1);}
var M1=F(EZ);
function AI_(a,b,c,d){var e,f,g;e=0;f=a.fH.eq;a:{while(true){g=a.E.d(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fH.ev)return (-1);return a.e.d(b,c,d);}
var Rx=F(CD);
function AQD(a,b,c,d){var e;if(!a.E.D(d))return a.e.d(b,c,d);e=a.e.d(b,c,d);if(e>=0)return e;return a.E.d(b,c,d);}
var Qy=F(Ft);
function AFQ(a,b,c,d){var e;if(!a.E.D(d))return a.e.d(b,c,d);e=a.e.d(b,c,d);if(e<0)e=a.E.d(b,c,d);return e;}
var Uk=F(EZ);
function AES(a,b,c,d){var e,f,g;e=MI(d,a.dm);if(!a.E.D(d))return a.e.d(b,c,d);f=a.fH;if(e>=f.eq){DW(d,a.dm,0);return a.e.d(b,c,d);}if(e<f.ev){DW(d,a.dm,e+1|0);g=a.E.d(b,c,d);}else{g=a.e.d(b,c,d);if(g>=0){DW(d,a.dm,0);return g;}DW(d,a.dm,e+1|0);g=a.E.d(b,c,d);}return g;}
var Ry=F(DN);
function AQ5(a,b,c,d){var e;e=d.u;if(e>b)return a.e.cb(b,e,c,d);return a.e.d(b,c,d);}
function AOT(a,b,c,d){var e;e=d.u;if(a.e.cb(b,e,c,d)>=0)return b;return (-1);}
function Oj(){DN.call(this);this.kx=null;}
function AMC(a,b,c,d){var e,f;e=d.u;f=Um(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cb(b,e,c,d);return a.e.d(b,c,d);}
function AEe(a,b,c,d){var e,f,g,h;e=d.u;f=a.e.b9(b,c,d);if(f<0)return (-1);g=Um(a,f,e,c);if(g>=0)e=g;g=Z(f,a.e.cb(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.kx.hk(I(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Um(a,b,c,d){while(true){if(b>=c)return (-1);if(a.kx.hk(I(d,b)))break;b=b+1|0;}return b;}
var Ex=F();
var AXD=null;var AXE=null;function Pd(b){var c;if(!(b&1)){c=AXE;if(c!==null)return c;c=new UT;AXE=c;return c;}c=AXD;if(c!==null)return c;c=new US;AXD=c;return c;}
var XQ=F(CN);
function AET(a,b,c,d){var e;a:{while(true){if((b+a.S.bQ()|0)>d.u)break a;e=a.S.bl(b,c);if(e<1)break;b=b+e|0;}}return a.e.d(b,c,d);}
var VJ=F(Ek);
function ALk(a,b,c,d){var e;if((b+a.S.bQ()|0)<=d.u){e=a.S.bl(b,c);if(e>=1)b=b+e|0;}return a.e.d(b,c,d);}
var O0=F(EQ);
function AN_(a,b,c,d){var e,f,g,h,i;e=a.jd;f=e.ev;g=e.eq;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.S.bQ()|0)>d.u)break a;i=a.S.bl(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.d(b,c,d);}if((b+a.S.bQ()|0)>d.u){d.de=1;return (-1);}i=a.S.bl(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Qs=F(CN);
function AMu(a,b,c,d){var e;while(true){e=a.e.d(b,c,d);if(e>=0)break;if((b+a.S.bQ()|0)<=d.u){e=a.S.bl(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var TD=F(Ek);
function AE2(a,b,c,d){var e;e=a.e.d(b,c,d);if(e>=0)return e;return a.E.d(b,c,d);}
var Rb=F(EQ);
function AOq(a,b,c,d){var e,f,g,h,i,j;e=a.jd;f=e.ev;g=e.eq;h=0;while(true){if(h>=f){a:{while(true){i=a.e.d(b,c,d);if(i>=0)break;if((b+a.S.bQ()|0)<=d.u){i=a.S.bl(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.S.bQ()|0)>d.u){d.de=1;return (-1);}j=a.S.bl(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var JS=F(BD);
function AKp(a,b,c,d){if(b&&!(d.e8&&b==d.cC))return (-1);return a.e.d(b,c,d);}
function AJm(a,b){return 0;}
function ZE(){BD.call(this);this.uU=0;}
function APb(a){var b=new ZE();AJD(b,a);return b;}
function AJD(a,b){BN(a);a.uU=b;}
function AFr(a,b,c,d){var e,f,g;e=b<d.u?I(c,b):32;f=!b?32:I(c,b-1|0);g=d.iQ?0:d.cC;return (e!=32&&!QD(a,e,b,g,c)?0:1)^(f!=32&&!QD(a,f,b-1|0,g,c)?0:1)^a.uU?(-1):a.e.d(b,c,d);}
function AFE(a,b){return 0;}
function QD(a,b,c,d,e){var f;if(!I3(b)&&b!=95){a:{if(Ch(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=I(e,c);if(I3(f))return 0;if(Ch(f)!=6)return 1;}}return 1;}return 0;}
var Oe=F(BD);
function AJC(a,b,c,d){if(b!=d.hr)return (-1);return a.e.d(b,c,d);}
function ARa(a,b){return 0;}
function Wx(){BD.call(this);this.fR=0;}
function ATc(a){var b=new Wx();ACQ(b,a);return b;}
function ACQ(a,b){BN(a);a.fR=b;}
function AM7(a,b,c,d){var e,f,g;e=!d.e8?H(c):d.u;if(b>=e){BI(d,a.fR,0);return a.e.d(b,c,d);}f=e-b|0;if(f==2&&I(c,b)==13&&I(c,b+1|0)==10){BI(d,a.fR,0);return a.e.d(b,c,d);}a:{if(f==1){g=I(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BI(d,a.fR,0);return a.e.d(b,c,d);}
function AGi(a,b){var c;c=!C6(b,a.fR)?0:1;BI(b,a.fR,(-1));return c;}
var V6=F(BD);
function AMc(a,b,c,d){if(b<(d.iQ?H(c):d.u))return (-1);d.de=1;d.yi=1;return a.e.d(b,c,d);}
function AD1(a,b){return 0;}
function Nc(){BD.call(this);this.rI=null;}
function AF$(a,b,c,d){a:{if(b!=d.u){if(!b)break a;if(d.e8&&b==d.cC)break a;if(a.rI.s$(I(c,b-1|0),I(c,b)))break a;}return (-1);}return a.e.d(b,c,d);}
function AIj(a,b){return 0;}
var ADd=F(BR);
function ATv(){var a=new ADd();AL2(a);return a;}
function AL2(a){BN(a);}
function AQI(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.de=1;return (-1);}g=I(c,b);if(Cs(g)){h=b+2|0;if(h<=e&&G6(g,I(c,f)))return a.e.d(h,c,d);}return a.e.d(f,c,d);}
function AFH(a,b){a.e=b;}
function ALW(a){return (-2147483602);}
function AFG(a,b){return 1;}
function Y$(){BR.call(this);this.k7=null;}
function AS5(a){var b=new Y$();AGg(b,a);return b;}
function AGg(a,b){BN(a);a.k7=b;}
function AL8(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.de=1;return (-1);}g=I(c,b);if(Cs(g)){b=b+2|0;if(b<=e){h=I(c,f);if(G6(g,h))return a.k7.hk(Eg(g,h))?(-1):a.e.d(b,c,d);}}return a.k7.hk(g)?(-1):a.e.d(f,c,d);}
function AN2(a,b){a.e=b;}
function ADX(a){return (-2147483602);}
function AQZ(a,b){return 1;}
function ACY(){BD.call(this);this.g_=0;}
function ASD(a){var b=new ACY();AIe(b,a);return b;}
function AIe(a,b){BN(a);a.g_=b;}
function AJ8(a,b,c,d){var e;e=!d.e8?H(c):d.u;if(b>=e){BI(d,a.g_,0);return a.e.d(b,c,d);}if((e-b|0)==1&&I(c,b)==10){BI(d,a.g_,1);return a.e.d(b+1|0,c,d);}return (-1);}
function AId(a,b){var c;c=!C6(b,a.g_)?0:1;BI(b,a.g_,(-1));return c;}
function ABb(){BD.call(this);this.he=0;}
function ASi(a){var b=new ABb();AIN(b,a);return b;}
function AIN(a,b){BN(a);a.he=b;}
function AMb(a,b,c,d){if((!d.e8?H(c)-b|0:d.u-b|0)<=0){BI(d,a.he,0);return a.e.d(b,c,d);}if(I(c,b)!=10)return (-1);BI(d,a.he,1);return a.e.d(b+1|0,c,d);}
function AH0(a,b){var c;c=!C6(b,a.he)?0:1;BI(b,a.he,(-1));return c;}
function XY(){BD.call(this);this.fj=0;}
function ARD(a){var b=new XY();ARf(b,a);return b;}
function ARf(a,b){BN(a);a.fj=b;}
function AJc(a,b,c,d){var e,f,g;e=!d.e8?H(c)-b|0:d.u-b|0;if(!e){BI(d,a.fj,0);return a.e.d(b,c,d);}if(e<2){f=I(c,b);g=97;}else{f=I(c,b);g=I(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BI(d,a.fj,0);return a.e.d(b,c,d);case 13:if(g!=10){BI(d,a.fj,0);return a.e.d(b,c,d);}BI(d,a.fj,0);return a.e.d(b,c,d);default:}return (-1);}
function AGl(a,b){var c;c=!C6(b,a.fj)?0:1;BI(b,a.fj,(-1));return c;}
function GJ(){var a=this;BR.call(a);a.nz=0;a.gq=0;}
function ATE(a,b){var c=new GJ();OQ(c,a,b);return c;}
function OQ(a,b,c){BN(a);a.nz=b;a.gq=c;}
function AEX(a,b,c,d){var e,f,g,h;e=FO(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=0;while(true){if(f>=H(e)){BI(d,a.gq,H(e));return a.e.d(b+H(e)|0,c,d);}g=I(e,f);h=b+f|0;if(g!=I(c,h)&&He(I(e,f))!=I(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ANj(a,b){a.e=b;}
function FO(a,b){var c,d;c=a.nz;d=Fi(b,c);c=H3(b,c);return (c|d|(c-d|0))>=0&&c<=H(b.k$)?B9(b.k$,d,c):null;}
function ANG(a,b){var c;c=!C6(b,a.gq)?0:1;BI(b,a.gq,(-1));return c;}
var AC4=F(GJ);
function ARJ(a,b){var c=new AC4();APL(c,a,b);return c;}
function APL(a,b,c){OQ(a,b,c);}
function AGr(a,b,c,d){var e,f;e=FO(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=!TP(c,e,b)?(-1):H(e);if(f<0)return (-1);BI(d,a.gq,f);return a.e.d(b+f|0,c,d);}return (-1);}
function APB(a,b,c,d){var e,f;e=FO(a,d);f=d.cC;if(e!==null&&(b+H(e)|0)<=f){while(true){if(b>f)return (-1);b=PG(c,e,b);if(b<0)return (-1);if(a.e.d(b+H(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AEH(a,b,c,d,e){var f,g;f=FO(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=PS(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.d(g+H(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ALc(a,b){return 1;}
var AAm=F(GJ);
function ASj(a,b){var c=new AAm();AIa(c,a,b);return c;}
function AIa(a,b,c){OQ(a,b,c);}
function AKG(a,b,c,d){var e,f;e=FO(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=0;while(true){if(f>=H(e)){BI(d,a.gq,H(e));return a.e.d(b+H(e)|0,c,d);}if(EH(Ej(I(e,f)))!=EH(Ej(I(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var N$=F(FW);
function AHQ(a,b,c,d,e){MT(a,b,c,d,e);return a;}
function AFw(a,b,c,d){WF(a,b,c,d);return a;}
function AFY(a,b){I_(a,b);}
function AOV(a,b,c){WW(a,b,c);return a;}
function RA(){var a=this;BW.call(a);a.cj=null;a.ko=null;a.lf=null;}
function AGN(a,b,c){return !JR(a,c,b)?(-1):a.bw;}
function AFn(a,b,c,d){var e,f,g;e=d.u;while(true){if(b>e)return (-1);f=I(a.cj,a.bw-1|0);a:{while(true){g=a.bw;if(b>(e-g|0)){b=(-1);break a;}g=I(c,(b+g|0)-1|0);if(g==f&&JR(a,c,b))break;b=b+SJ(a.ko,g)|0;}}if(b<0)return (-1);if(a.e.d(b+a.bw|0,c,d)>=0)break;b=b+1|0;}return b;}
function AIh(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=I(a.cj,0);g=(H(d)-c|0)-a.bw|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=I(d,c);if(g==f&&JR(a,d,c))break;c=c-SJ(a.lf,g)|0;}}if(c<0)return (-1);if(a.e.d(c+a.bw|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AIT(a,b){var c;if(b instanceof Ea)return b.c9!=I(a.cj,0)?0:1;if(b instanceof DZ)return Mf(b,0,B9(a.cj,0,1))<=0?0:1;if(!(b instanceof Dj)){if(!(b instanceof DC))return 1;return H(a.cj)>1&&b.fx==Eg(I(a.cj,0),I(a.cj,1))?1:0;}a:{b:{b=b;if(!b.i(I(a.cj,0))){if(H(a.cj)<=1)break b;if(!b.i(Eg(I(a.cj,0),I(a.cj,1))))break b;}c=1;break a;}c=0;}return c;}
function JR(a,b,c){var d;d=0;while(d<a.bw){if(I(b,d+c|0)!=I(a.cj,d))return 0;d=d+1|0;}return 1;}
function XX(){BW.call(this);this.iT=null;}
function ATI(a){var b=new XX();APh(b,a);return b;}
function APh(a,b){var c,d,e;Dd(a);c=new R;U(c);d=0;while(true){e=BA(d,b.H);if(e>=0){a.iT=S(c);a.bw=c.H;return;}if(d<0)break;if(e>=0)break;BX(c,EH(Ej(b.M.data[d])));d=d+1|0;}b=new BV;X(b);L(b);}
function AKO(a,b,c){var d;d=0;while(true){if(d>=H(a.iT))return H(a.iT);if(I(a.iT,d)!=EH(Ej(I(c,b+d|0))))break;d=d+1|0;}return (-1);}
function M7(){BW.call(this);this.g9=null;}
function AOd(a,b,c){var d,e,f;d=0;while(true){if(d>=H(a.g9))return H(a.g9);e=I(a.g9,d);f=b+d|0;if(e!=I(c,f)&&He(I(a.g9,d))!=I(c,f))break;d=d+1|0;}return (-1);}
var GI=F();
var AXF=null;var AXG=null;var AXB=null;function ANR(){ANR=Bm(GI);AG$();}
function AG$(){AXF=ATk();AXG=ASv();AXB=G($rt_arraycls(B),[G(B,[C(320),ATF()]),G(B,[C(321),ARA()]),G(B,[C(322),ATg()]),G(B,[C(323),ATq()]),G(B,[C(324),AXG]),G(B,[C(325),ASI()]),G(B,[C(326),ASs()]),G(B,[C(327),ARK()]),G(B,[C(328),ARI()]),G(B,[C(329),ARP()]),G(B,[C(330),AR3()]),G(B,[C(331),ARN()]),G(B,[C(332),AS0()]),G(B,[C(333),ARv()]),G(B,[C(334),ATl()]),G(B,[C(335),AR2()]),G(B,[C(336),ASG()]),G(B,[C(337),AR0()]),G(B,[C(338),ASH()]),G(B,[C(339),ARR()]),G(B,[C(340),ATu()]),G(B,[C(341),ARV()]),G(B,[C(342),ASN()]),
G(B,[C(343),ATf()]),G(B,[C(344),ATd()]),G(B,[C(345),ATr()]),G(B,[C(346),ARQ()]),G(B,[C(347),AS4()]),G(B,[C(348),AXF]),G(B,[C(349),ASS()]),G(B,[C(350),ARL()]),G(B,[C(351),AXF]),G(B,[C(352),ARq()]),G(B,[C(353),AXG]),G(B,[C(354),AR_()]),G(B,[C(355),N(0,127)]),G(B,[C(356),N(128,255)]),G(B,[C(357),N(256,383)]),G(B,[C(358),N(384,591)]),G(B,[C(359),N(592,687)]),G(B,[C(360),N(688,767)]),G(B,[C(361),N(768,879)]),G(B,[C(362),N(880,1023)]),G(B,[C(363),N(1024,1279)]),G(B,[C(364),N(1280,1327)]),G(B,[C(365),N(1328,1423)]),
G(B,[C(366),N(1424,1535)]),G(B,[C(367),N(1536,1791)]),G(B,[C(368),N(1792,1871)]),G(B,[C(369),N(1872,1919)]),G(B,[C(370),N(1920,1983)]),G(B,[C(371),N(2304,2431)]),G(B,[C(372),N(2432,2559)]),G(B,[C(373),N(2560,2687)]),G(B,[C(374),N(2688,2815)]),G(B,[C(375),N(2816,2943)]),G(B,[C(376),N(2944,3071)]),G(B,[C(377),N(3072,3199)]),G(B,[C(378),N(3200,3327)]),G(B,[C(379),N(3328,3455)]),G(B,[C(380),N(3456,3583)]),G(B,[C(381),N(3584,3711)]),G(B,[C(382),N(3712,3839)]),G(B,[C(383),N(3840,4095)]),G(B,[C(384),N(4096,4255)]),
G(B,[C(385),N(4256,4351)]),G(B,[C(386),N(4352,4607)]),G(B,[C(387),N(4608,4991)]),G(B,[C(388),N(4992,5023)]),G(B,[C(389),N(5024,5119)]),G(B,[C(390),N(5120,5759)]),G(B,[C(391),N(5760,5791)]),G(B,[C(392),N(5792,5887)]),G(B,[C(393),N(5888,5919)]),G(B,[C(394),N(5920,5951)]),G(B,[C(395),N(5952,5983)]),G(B,[C(396),N(5984,6015)]),G(B,[C(397),N(6016,6143)]),G(B,[C(398),N(6144,6319)]),G(B,[C(399),N(6400,6479)]),G(B,[C(400),N(6480,6527)]),G(B,[C(401),N(6528,6623)]),G(B,[C(402),N(6624,6655)]),G(B,[C(403),N(6656,6687)]),
G(B,[C(404),N(7424,7551)]),G(B,[C(405),N(7552,7615)]),G(B,[C(406),N(7616,7679)]),G(B,[C(407),N(7680,7935)]),G(B,[C(408),N(7936,8191)]),G(B,[C(409),N(8192,8303)]),G(B,[C(410),N(8304,8351)]),G(B,[C(411),N(8352,8399)]),G(B,[C(412),N(8400,8447)]),G(B,[C(413),N(8448,8527)]),G(B,[C(414),N(8528,8591)]),G(B,[C(415),N(8592,8703)]),G(B,[C(416),N(8704,8959)]),G(B,[C(417),N(8960,9215)]),G(B,[C(418),N(9216,9279)]),G(B,[C(419),N(9280,9311)]),G(B,[C(420),N(9312,9471)]),G(B,[C(421),N(9472,9599)]),G(B,[C(422),N(9600,9631)]),
G(B,[C(423),N(9632,9727)]),G(B,[C(424),N(9728,9983)]),G(B,[C(425),N(9984,10175)]),G(B,[C(426),N(10176,10223)]),G(B,[C(427),N(10224,10239)]),G(B,[C(428),N(10240,10495)]),G(B,[C(429),N(10496,10623)]),G(B,[C(430),N(10624,10751)]),G(B,[C(431),N(10752,11007)]),G(B,[C(432),N(11008,11263)]),G(B,[C(433),N(11264,11359)]),G(B,[C(434),N(11392,11519)]),G(B,[C(435),N(11520,11567)]),G(B,[C(436),N(11568,11647)]),G(B,[C(437),N(11648,11743)]),G(B,[C(438),N(11776,11903)]),G(B,[C(439),N(11904,12031)]),G(B,[C(440),N(12032,12255)]),
G(B,[C(441),N(12272,12287)]),G(B,[C(442),N(12288,12351)]),G(B,[C(443),N(12352,12447)]),G(B,[C(444),N(12448,12543)]),G(B,[C(445),N(12544,12591)]),G(B,[C(446),N(12592,12687)]),G(B,[C(447),N(12688,12703)]),G(B,[C(448),N(12704,12735)]),G(B,[C(449),N(12736,12783)]),G(B,[C(450),N(12784,12799)]),G(B,[C(451),N(12800,13055)]),G(B,[C(452),N(13056,13311)]),G(B,[C(453),N(13312,19893)]),G(B,[C(454),N(19904,19967)]),G(B,[C(455),N(19968,40959)]),G(B,[C(456),N(40960,42127)]),G(B,[C(457),N(42128,42191)]),G(B,[C(458),N(42752,
42783)]),G(B,[C(459),N(43008,43055)]),G(B,[C(460),N(44032,55203)]),G(B,[C(461),N(55296,56191)]),G(B,[C(462),N(56192,56319)]),G(B,[C(463),N(56320,57343)]),G(B,[C(464),N(57344,63743)]),G(B,[C(465),N(63744,64255)]),G(B,[C(466),N(64256,64335)]),G(B,[C(467),N(64336,65023)]),G(B,[C(468),N(65024,65039)]),G(B,[C(469),N(65040,65055)]),G(B,[C(470),N(65056,65071)]),G(B,[C(471),N(65072,65103)]),G(B,[C(472),N(65104,65135)]),G(B,[C(473),N(65136,65279)]),G(B,[C(474),N(65280,65519)]),G(B,[C(475),N(0,1114111)]),G(B,[C(476),
ARO()]),G(B,[C(477),BJ(0,1)]),G(B,[C(478),If(62,1)]),G(B,[C(479),BJ(1,1)]),G(B,[C(480),BJ(2,1)]),G(B,[C(481),BJ(3,0)]),G(B,[C(482),BJ(4,0)]),G(B,[C(483),BJ(5,1)]),G(B,[C(484),If(448,1)]),G(B,[C(485),BJ(6,1)]),G(B,[C(486),BJ(7,0)]),G(B,[C(487),BJ(8,1)]),G(B,[C(488),If(3584,1)]),G(B,[C(489),BJ(9,1)]),G(B,[C(490),BJ(10,1)]),G(B,[C(491),BJ(11,1)]),G(B,[C(492),If(28672,0)]),G(B,[C(493),BJ(12,0)]),G(B,[C(494),BJ(13,0)]),G(B,[C(495),BJ(14,0)]),G(B,[C(496),ASn(983040,1,1)]),G(B,[C(497),BJ(15,0)]),G(B,[C(498),BJ(16,
1)]),G(B,[C(499),BJ(18,1)]),G(B,[C(500),ASz(19,0,1)]),G(B,[C(501),If(1643118592,1)]),G(B,[C(502),BJ(20,0)]),G(B,[C(503),BJ(21,0)]),G(B,[C(504),BJ(22,0)]),G(B,[C(505),BJ(23,0)]),G(B,[C(506),BJ(24,1)]),G(B,[C(507),If(2113929216,1)]),G(B,[C(508),BJ(25,1)]),G(B,[C(509),BJ(26,0)]),G(B,[C(510),BJ(27,0)]),G(B,[C(511),BJ(28,1)]),G(B,[C(512),BJ(29,0)]),G(B,[C(513),BJ(30,0)])]);}
function Mo(){BW.call(this);this.q6=0;}
function AOi(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.q6!=Gd(F_(Eg(e,d)))?(-1):2;}
function Kt(){BR.call(this);this.f9=0;}
function AL0(a){var b=new Kt();AFV(b,a);return b;}
function AFV(a,b){BN(a);a.f9=b;}
function AMr(a,b){a.e=b;}
function AGj(a,b,c,d){var e,f;e=b+1|0;if(e>d.u){d.de=1;return (-1);}f=I(c,b);if(b>d.cC&&Cs(I(c,b-1|0)))return (-1);if(a.f9!=f)return (-1);return a.e.d(e,c,d);}
function AIQ(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return Hi(a,b,c,d);e=d.cC;f=d.u;while(true){if(b>=f)return (-1);g=HU(c,a.f9,b);if(g<0)return (-1);if(g>e&&Cs(I(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.d(b,c,d)>=0)break;}return g;}
function AGU(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hr(a,b,c,d,e);f=e.cC;a:{while(true){if(c<b)return (-1);g=G9(d,a.f9,c);if(g<0)break a;if(g<b)break a;if(g>f&&Cs(I(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.d(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AEE(a,b){if(b instanceof Ea)return 0;if(b instanceof DZ)return 0;if(b instanceof Dj)return 0;if(b instanceof DC)return 0;if(b instanceof KM)return 0;if(!(b instanceof Kt))return 1;return b.f9!=a.f9?0:1;}
function AO6(a,b){return 1;}
function KM(){BR.call(this);this.fE=0;}
function AJg(a){var b=new KM();AL9(b,a);return b;}
function AL9(a,b){BN(a);a.fE=b;}
function AFX(a,b){a.e=b;}
function AEi(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;g=BA(f,e);if(g>0){d.de=1;return (-1);}h=I(c,b);if(g<0&&CO(I(c,f)))return (-1);if(a.fE!=h)return (-1);return a.e.d(f,c,d);}
function AMM(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hi(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=HU(c,a.fE,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CO(I(c,b))){b=f+2|0;continue;}if(a.e.d(b,c,d)>=0)break;}return f;}
function AOb(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hr(a,b,c,d,e);f=e.u;a:{while(true){if(c<b)return (-1);g=G9(d,a.fE,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CO(I(d,c))){c=g+(-1)|0;continue;}if(a.e.d(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AGO(a,b){if(b instanceof Ea)return 0;if(b instanceof DZ)return 0;if(b instanceof Dj)return 0;if(b instanceof DC)return 0;if(b instanceof Kt)return 0;if(!(b instanceof KM))return 1;return b.fE!=a.fE?0:1;}
function AMX(a,b){return 1;}
function DC(){var a=this;BW.call(a);a.jx=0;a.ii=0;a.fx=0;}
function ANH(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.jx==e&&a.ii==d?2:(-1);}
function ALJ(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hi(a,b,c,d);e=d.u;while(b<e){b=HU(c,a.jx,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=I(c,b);if(a.ii==f&&a.e.d(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AFW(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hr(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=G9(d,a.ii,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.jx==I(d,f)&&a.e.d(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ANs(a,b){if(b instanceof DC)return b.fx!=a.fx?0:1;if(b instanceof Dj)return b.i(a.fx);if(b instanceof Ea)return 0;if(!(b instanceof DZ))return 1;return 0;}
var US=F(Ex);
function AF7(a,b){return b!=10?0:1;}
function ANA(a,b,c){return b!=10?0:1;}
var UT=F(Ex);
function AOu(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AQj(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AB$(){var a=this;B.call(a);a.my=null;a.jR=null;a.gM=0;a.v6=0;}
function ALU(a){var b=new AB$();AJB(b,a);return b;}
function AJB(a,b){var c,d;while(true){c=a.gM;if(b<c)break;a.gM=c<<1|1;}d=c<<1|1;a.gM=d;d=d+1|0;a.my=Bx(d);a.jR=Bx(d);a.v6=b;}
function Rf(a,b,c){var d,e,f,g;d=0;e=a.gM;f=b&e;while(true){g=a.my.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jR.data[f]=c;}
function SJ(a,b){var c,d,e,f;c=a.gM;d=b&c;e=0;while(true){f=a.my.data[d];if(!f)break;if(f==b)return a.jR.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.v6;}
var Yi=F();
var Kq=F(W);
function ATk(){var a=new Kq();AJa(a);return a;}
function AJa(a){}
function AAu(a){return Ck(BT(C7(),9,13),32);}
var Ju=F(W);
function ASv(){var a=new Ju();AO0(a);return a;}
function AO0(a){}
function AA4(a){return BT(C7(),48,57);}
var AB3=F(W);
function ATF(){var a=new AB3();AIw(a);return a;}
function AIw(a){}
function AN4(a){return BT(C7(),97,122);}
var ACw=F(W);
function ARA(){var a=new ACw();AJF(a);return a;}
function AJF(a){}
function AO8(a){return BT(C7(),65,90);}
var ACz=F(W);
function ATg(){var a=new ACz();AFo(a);return a;}
function AFo(a){}
function AHs(a){return BT(C7(),0,127);}
var Ki=F(W);
function ATq(){var a=new Ki();AGv(a);return a;}
function AGv(a){}
function Zd(a){return BT(BT(C7(),97,122),65,90);}
var K2=F(Ki);
function ASI(){var a=new K2();AJk(a);return a;}
function AJk(a){}
function Z3(a){return BT(Zd(a),48,57);}
var ADO=F(W);
function ASs(){var a=new ADO();ALr(a);return a;}
function ALr(a){}
function AIP(a){return BT(BT(BT(C7(),33,64),91,96),123,126);}
var Mb=F(K2);
function ARK(){var a=new Mb();ANc(a);return a;}
function ANc(a){}
function XW(a){return BT(BT(BT(Z3(a),33,64),91,96),123,126);}
var AAI=F(Mb);
function ARI(){var a=new AAI();AOR(a);return a;}
function AOR(a){}
function AK8(a){return Ck(XW(a),32);}
var AAY=F(W);
function ARP(){var a=new AAY();AOf(a);return a;}
function AOf(a){}
function AGH(a){return Ck(Ck(C7(),32),9);}
var Zw=F(W);
function AR3(){var a=new Zw();AQa(a);return a;}
function AQa(a){}
function AK5(a){return Ck(BT(C7(),0,31),127);}
var Zl=F(W);
function ARN(){var a=new Zl();AFD(a);return a;}
function AFD(a){}
function AQn(a){return BT(BT(BT(C7(),48,57),97,102),65,70);}
var ACC=F(W);
function AS0(){var a=new ACC();AFb(a);return a;}
function AFb(a){}
function ALS(a){var b;b=new SV;b.xz=a;Bq(b);b.I=1;return b;}
var ADW=F(W);
function ARv(){var a=new ADW();ANx(a);return a;}
function ANx(a){}
function AEb(a){var b;b=new MB;b.xH=a;Bq(b);b.I=1;return b;}
var AB_=F(W);
function ATl(){var a=new AB_();AFq(a);return a;}
function AFq(a){}
function AJh(a){var b;b=new RS;b.xi=a;Bq(b);return b;}
var ABU=F(W);
function AR2(){var a=new ABU();AK6(a);return a;}
function AK6(a){}
function ANN(a){var b;b=new RR;b.xa=a;Bq(b);return b;}
var ACR=F(W);
function ASG(){var a=new ACR();AGq(a);return a;}
function AGq(a){}
function AGE(a){var b;b=new Wf;b.yp=a;Bq(b);Hy(b.F,0,2048);b.I=1;return b;}
var Yz=F(W);
function AR0(){var a=new Yz();AF3(a);return a;}
function AF3(a){}
function AG3(a){var b;b=new OT;b.xV=a;Bq(b);b.I=1;return b;}
var Yc=F(W);
function ASH(){var a=new Yc();AKL(a);return a;}
function AKL(a){}
function AQg(a){var b;b=new N5;b.yP=a;Bq(b);b.I=1;return b;}
var ACg=F(W);
function ARR(){var a=new ACg();ALs(a);return a;}
function ALs(a){}
function AD4(a){var b;b=new QQ;b.xB=a;Bq(b);return b;}
var ACq=F(W);
function ATu(){var a=new ACq();AI2(a);return a;}
function AI2(a){}
function AKb(a){var b;b=new Mu;b.wx=a;Bq(b);b.I=1;return b;}
var ZU=F(W);
function ARV(){var a=new ZU();AEI(a);return a;}
function AEI(a){}
function AHd(a){var b;b=new Mz;b.xY=a;Bq(b);b.I=1;return b;}
var AA3=F(W);
function ASN(){var a=new AA3();AF8(a);return a;}
function AF8(a){}
function AIm(a){var b;b=new NE;b.ym=a;Bq(b);b.I=1;return b;}
var ADw=F(W);
function ATf(){var a=new ADw();AKi(a);return a;}
function AKi(a){}
function AKf(a){var b;b=new Pf;b.yB=a;Bq(b);b.I=1;return b;}
var ACn=F(W);
function ATd(){var a=new ACn();ALL(a);return a;}
function ALL(a){}
function APt(a){var b;b=new Pt;b.xl=a;Bq(b);return b;}
var AAj=F(W);
function ATr(){var a=new AAj();AF4(a);return a;}
function AF4(a){}
function AM4(a){var b;b=new Tm;b.x6=a;Bq(b);return b;}
var ZS=F(W);
function ARQ(){var a=new ZS();ANO(a);return a;}
function ANO(a){}
function ALK(a){var b;b=new SB;b.wB=a;Bq(b);b.I=1;return b;}
var ADS=F(W);
function AS4(){var a=new ADS();AIW(a);return a;}
function AIW(a){}
function ANX(a){var b;b=new MJ;b.yY=a;Bq(b);b.I=1;return b;}
var IV=F(W);
function ASS(){var a=new IV();AHk(a);return a;}
function AHk(a){}
function AA0(a){return Ck(BT(BT(BT(C7(),97,122),65,90),48,57),95);}
var ACV=F(IV);
function ARL(){var a=new ACV();AI5(a);return a;}
function AI5(a){}
function ALv(a){var b;b=Ee(AA0(a),1);b.I=1;return b;}
var AAM=F(Kq);
function ARq(){var a=new AAM();APY(a);return a;}
function APY(a){}
function AFk(a){var b;b=Ee(AAu(a),1);b.I=1;return b;}
var ZN=F(Ju);
function AR_(){var a=new ZN();AJ1(a);return a;}
function AJ1(a){}
function AID(a){var b;b=Ee(AA4(a),1);b.I=1;return b;}
function Zp(){var a=this;W.call(a);a.qU=0;a.rC=0;}
function N(a,b){var c=new Zp();AQd(c,a,b);return c;}
function AQd(a,b,c){a.qU=b;a.rC=c;}
function AKs(a){return BT(C7(),a.qU,a.rC);}
var ZJ=F(W);
function ARO(){var a=new ZJ();AQv(a);return a;}
function AQv(a){}
function AP6(a){return BT(BT(C7(),65279,65279),65520,65533);}
function AAz(){var a=this;W.call(a);a.l3=0;a.jD=0;a.pq=0;}
function BJ(a,b){var c=new AAz();AGk(c,a,b);return c;}
function ASz(a,b,c){var d=new AAz();AQf(d,a,b,c);return d;}
function AGk(a,b,c){a.jD=c;a.l3=b;}
function AQf(a,b,c,d){a.pq=d;a.jD=c;a.l3=b;}
function AHT(a){var b;b=ATB(a.l3);if(a.pq)Hy(b.F,0,2048);b.I=a.jD;return b;}
function AAJ(){var a=this;W.call(a);a.l1=0;a.jU=0;a.nL=0;}
function If(a,b){var c=new AAJ();AHe(c,a,b);return c;}
function ASn(a,b,c){var d=new AAJ();AD6(d,a,b,c);return d;}
function AHe(a,b,c){a.jU=c;a.l1=b;}
function AD6(a,b,c,d){a.nL=d;a.jU=c;a.l1=b;}
function AD5(a){var b;b=new RJ;ABF(b,a.l1);if(a.nL)Hy(b.F,0,2048);b.I=a.jU;return b;}
var Zs=F();
var Y0=F();
function AAf(b){var c,d,e,f,g,h,i;c=AN7(E4(b));d=Ji(c);e=Bx(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+Ji(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=M0(c);h=h+1|0;}return e;}
function J2(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Ne(){var a=this;B.call(a);a.pV=0;a.rY=0;a.qa=null;}
function AHR(a,b,c){var d=new Ne();AOP(d,a,b,c);return d;}
function AOP(a,b,c,d){a.pV=b;a.rY=c;a.qa=d;}
function ACj(){var a=this;B.call(a);a.oG=null;a.q2=0;}
function AN7(a){var b=new ACj();AGR(b,a);return b;}
function AGR(a,b){a.oG=b;}
var AAe=F();
function Ji(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.oG.data;f=b.q2;b.q2=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+T(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function M0(b){var c,d;c=Ji(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var T5=F(EF);
function WY(a){KV(a);return a.fS;}
var Q_=F(EF);
function Y_(){B.call(this);this.Kk=null;}
function UN(){var a=this;B.call(a);a.y0=null;a.i1=null;}
function AHx(a,b){var c;c=a.i1;b=b;a.i1=OP(!c.ms&&!b.d4?0:1);return 1;}
function VN(){var a=this;Q.call(a);a.oa=null;a.yu=null;}
function AHz(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b6^C_(a.oa,c):0;}
function VL(){var a=this;Q.call(a);a.ul=null;a.u8=null;a.x$=null;}
function AEw(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b6^C_(a.ul,c):0;return a.u8.i(b)&&!d?1:0;}
function Oo(){var a=this;Q.call(a);a.ip=null;a.wE=null;}
function AKj(a,b){return a.Y^C_(a.ip,b);}
function AIr(a){var b,c,d;b=new R;U(b);c=GT(a.ip,0);while(c>=0){HY(b,F5(c));BX(b,124);c=GT(a.ip,c+1|0);}d=b.H;if(d>0)VD(b,d-1|0);return S(b);}
function Ov(){var a=this;Q.call(a);a.rm=null;a.xF=null;}
function ANL(a,b){return a.rm.i(b);}
function Ot(){var a=this;Q.call(a);a.jJ=0;a.o_=null;a.kF=null;}
function AOh(a,b){return !(a.jJ^C_(a.kF.C,b))&&!(a.jJ^a.kF.dI^a.o_.i(b))?0:1;}
function Ou(){var a=this;Q.call(a);a.jS=0;a.uI=null;a.lF=null;}
function AKN(a,b){return !(a.jS^C_(a.lF.C,b))&&!(a.jS^a.lF.dI^a.uI.i(b))?1:0;}
function Oy(){var a=this;Q.call(a);a.vF=0;a.uS=null;a.uD=null;a.wW=null;}
function AG7(a,b){return a.vF^(!a.uS.i(b)&&!a.uD.i(b)?0:1);}
function Oz(){var a=this;Q.call(a);a.rz=0;a.q_=null;a.qx=null;a.yV=null;}
function ADY(a,b){return a.rz^(!a.q_.i(b)&&!a.qx.i(b)?0:1)?0:1;}
function Ow(){var a=this;Q.call(a);a.qf=null;a.yX=null;}
function AIx(a,b){return CL(a.qf,b);}
function Ox(){var a=this;Q.call(a);a.u4=null;a.w8=null;}
function AKP(a,b){return CL(a.u4,b)?0:1;}
function OA(){var a=this;Q.call(a);a.rR=null;a.rd=0;a.tQ=null;}
function APG(a,b){return !CL(a.rR,b)&&!(a.rd^C_(a.tQ.C,b))?0:1;}
function OB(){var a=this;Q.call(a);a.st=null;a.sO=0;a.sa=null;}
function AGx(a,b){return !CL(a.st,b)&&!(a.sO^C_(a.sa.C,b))?1:0;}
function On(){var a=this;Q.call(a);a.tE=0;a.uH=null;a.vk=null;a.wJ=null;}
function ARn(a,b){return !(a.tE^a.uH.i(b))&&!CL(a.vk,b)?0:1;}
function O3(){var a=this;Q.call(a);a.vg=0;a.m_=null;a.nR=null;a.w5=null;}
function AIB(a,b){return !(a.vg^a.m_.i(b))&&!CL(a.nR,b)?1:0;}
function Ol(){var a=this;Q.call(a);a.pK=null;a.w$=null;}
function AGw(a,b){return CL(a.pK,b);}
function Om(){var a=this;Q.call(a);a.pR=null;a.yR=null;}
function AH_(a,b){return CL(a.pR,b)?0:1;}
function Or(){var a=this;Q.call(a);a.vB=null;a.sl=0;a.wr=null;}
function AJE(a,b){return CL(a.vB,b)&&a.sl^C_(a.wr.C,b)?1:0;}
function Ok(){var a=this;Q.call(a);a.td=null;a.rA=0;a.sj=null;}
function APd(a,b){return CL(a.td,b)&&a.rA^C_(a.sj.C,b)?0:1;}
function Op(){var a=this;Q.call(a);a.tU=0;a.n$=null;a.rx=null;a.wV=null;}
function AFA(a,b){return a.tU^a.n$.i(b)&&CL(a.rx,b)?1:0;}
function Oq(){var a=this;Q.call(a);a.s7=0;a.m0=null;a.tC=null;a.xb=null;}
function AMW(a,b){return a.s7^a.m0.i(b)&&CL(a.tC,b)?0:1;}
var FA=F(Cj);
var AXd=null;var AXc=null;var AXH=null;function SE(){SE=Bm(FA);AQ6();}
function AOg(a,b){var c=new FA();AAo(c,a,b);return c;}
function AAo(a,b,c){SE();C9(a,b,c);}
function AQ6(){var b;AXd=AOg(C(514),0);b=AOg(C(515),1);AXc=b;AXH=G(FA,[AXd,b]);}
function XI(){B.call(this);this.p5=null;}
var Lv=F(0);
function SA(){var a=this;B.call(a);a.w1=null;a.uL=null;a.iJ=null;a.cl=null;a.iq=0;a.kw=0;}
function Mx(a,b){var c,d,e;c=H(a.iJ);if(b>=0&&b<=c){W6(a.cl,null,(-1),(-1));d=a.cl;d.je=1;d.d9=b;c=d.hr;if(c<0)c=b;d.hr=c;b=a.uL.b9(b,a.iJ,d);if(b==(-1))a.cl.de=1;if(b>=0){d=a.cl;if(d.iK){e=d.dB.data;if(e[0]==(-1)){c=d.d9;e[0]=c;e[1]=c;}d.hr=Ix(d);return 1;}}a.cl.d9=(-1);return 0;}d=new BV;Bp(d,D8(b));L(d);}
function ADv(a){return OZ(a.cl,0);}
function ZO(a){return RU(a.cl,0);}
function Yp(a){return a.cl.iQ;}
var Tj=F();
var AW_=null;function ASX(){ASX=Bm(Tj);AEW();}
function AEW(){var b,c;SE();b=Bx((AXH.gu()).data.length);c=b.data;AW_=b;c[AXd.gj]=1;c[AXc.gj]=2;}
function Xb(){B.call(this);this.mT=null;}
function LA(a,b){var c,d;c=a.mT;d=b.lT;b=new R;U(b);K(K(b,c),d);$rt_globals.console.info($rt_ustr(S(b)));}
function SL(){B.call(this);this.vz=null;}
function ANw(a,b){var c,d,e;F$(a.vz);c=AV5;d=Zh(C(516));if(!Lb()){b=new Bt;Bp(b,C(307));LA(d,b);}else{e=$rt_globals.navigator.clipboard;b=M4(E4(b));b=e.writeText(b);e=new T9;e.x2=c;c=ADQ(d);b.then(Bn(e,"f"),Bn(c,"f"));}}
function Je(){var a=this;B.call(a);a.gX=null;a.yH=null;}
var AAH=F();
var MW=F(F7);
function AHY(a,b,c,d){var e,f,g;e=0;f=d.u;a:{while(true){if(b>f){b=e;break a;}g=Fi(d,a.R);Dc(d,a.R,b);e=a.cL.d(b,c,d);if(e>=0)break;Dc(d,a.R,g);b=b+1|0;}}return b;}
function ARd(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fi(e,a.R);Dc(e,a.R,c);f=a.cL.d(c,d,e);if(f>=0)break;Dc(e,a.R,g);c=c+(-1)|0;}}return c;}
function AGh(a){return null;}
var L5=F(Bt);
function PZ(){var a=this;B.call(a);a.t5=null;a.t4=null;}
function PY(){B.call(this);this.n1=null;}
function Ro(){B.call(this);this.s4=null;}
function AGe(a,b){IB(a.s4,b);}
var Yw=F();
function Y7(b){var c,d,e,f,g,h,i,j;c=AFM();d=Cb(b);Bi(c,d);e=0;f=0;while(f<d){g=BG(b,f);h=G5(g);Bi(c,h);i=0;while(i<h){j=KB(g,i);Ga(c,e,Lu(j));e=e+Lu(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return P3(c);}
function YD(b){var c,d,e,f,g,h,i,j,k;c=V(b);d=P(HH,c);e=d.data;f=0;while(f<c){a:{g=V(b);if(g!=(-1)){h=V(b);i=V(b);if(i==(-1)){j=new HH;j.fK=h;e[g]=j;}else{j=new HH;j.fK=h;j.lk=Bx(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].lk.data[k]=V(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function P1(){B.call(this);this.rc=null;}
function AQT(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.rc;d=CF(c[0]);c=Ls(d);e=new UU;d=YD(c);f=YD(c);g=V(c);h=P(Lr,g);i=h.data;j=0;while(j<g){k=V(c);l=V(c);m=V(c);n=V(c);o=V(c);p=new Lr;p.hw=k;p.mi=l;p.hv=m;p.mh=n;p.j8=o;i[j]=p;j=j+1|0;}e.yF=d;e.vc=f;e.fD=h;b.fu=e;Jl(b.w,d);Jl(b.v,b.fu.vc);}
var YY=F(0);
function QU(){B.call(this);this.nG=null;}
function AD_(a,b){var c;c=a.nG;b=Ce(b);C8(c.p5,b);}
function R9(){B.call(this);this.qX=null;}
function AK9(a,b){b.gi=a.qX.cU;}
function R7(){B.call(this);this.uk=null;}
function ANg(a,b){b.f4=a.uk.cU.cf;}
function Nd(){var a=this;B.call(a);a.sx=null;a.sw=null;}
function Sp(){var a=this;B.call(a);a.ne=null;a.nd=null;a.nf=null;}
function AEt(a,b){VM(a.ne,a.nd,b,a.nf);}
function Ty(){var a=this;B.call(a);a.rs=null;a.rr=null;}
function AMI(a,b){var c,d,e,f,g,h,i,j,k;c=b.data;d=a.rs;e=a.rr;f=BB();g=c.length;h=0;while(h<g){i=c[h];j=new Lo;k=i.f1;Sc(j,k.e5,k.fF);Bw(f,j);h=h+1|0;}if(DG(f))Kb(d.eD,e,d);else{c=D2(d,e);c=GA(d.c.f,c.V,c.bd);Rg(d.eD,e,b,d,Kx(d,c));}}
function UL(){var a=this;B.call(a);a.dB=null;a.jo=null;a.k5=null;a.k$=null;a.pd=0;a.iK=0;a.cC=0;a.u=0;a.d9=0;a.iQ=0;a.e8=0;a.de=0;a.yi=0;a.hr=0;a.je=0;}
function BI(a,b,c){a.jo.data[b]=c;}
function C6(a,b){return a.jo.data[b];}
function Ix(a){return RU(a,0);}
function RU(a,b){RH(a,b);return a.dB.data[(b*2|0)+1|0];}
function Dc(a,b,c){a.dB.data[b*2|0]=c;}
function Ja(a,b,c){a.dB.data[(b*2|0)+1|0]=c;}
function Fi(a,b){return a.dB.data[b*2|0];}
function H3(a,b){return a.dB.data[(b*2|0)+1|0];}
function AB5(a){return OZ(a,0);}
function OZ(a,b){RH(a,b);return a.dB.data[b*2|0];}
function MI(a,b){return a.k5.data[b];}
function DW(a,b,c){a.k5.data[b]=c;}
function RH(a,b){var c;if(!a.iK){c=new Dm;X(c);L(c);}if(b>=0&&b<a.pd)return;c=new BV;Bp(c,D8(b));L(c);}
function W6(a,b,c,d){a.iK=0;a.je=2;G_(a.dB,(-1));G_(a.jo,(-1));if(b!==null)a.k$=b;if(c>=0){a.cC=c;a.u=d;}a.d9=a.cC;}
function Z5(a){return a.je;}
function WG(){B.call(this);this.oc=null;}
function AGY(a,b){var c,d;c=a.oc;d=new Bt;Bp(d,$rt_str(b.message));LA(c,d);}
function Oh(){B.call(this);this.ow=null;}
function AGD(a,b){b.gi=a.ow;}
function Mv(){B.call(this);this.wo=null;}
function AIO(a){Du(a.wo);}
function Ts(){var a=this;B.call(a);a.mP=null;a.mQ=null;}
function AOU(a){var b,c;b=a.mP;c=a.mQ;b.hN.tJ(c);}
function NF(){var a=this;B.call(a);a.nM=null;a.nN=0;a.nO=0;a.nP=null;a.nI=0;a.nK=0;}
function ALu(a,b){var c,d,e,f,g,h,i,j;c=a.nM;d=a.nN;e=a.nO;f=a.nP;g=a.nI;h=a.nK;i=Cm(c.bn,5.0);d=Ba((c.bn.cJ.a-d|0)-i|0,Z((i-d|0)-c.N.p.a|0,b.n.a));j=Ba((c.bn.cJ.b-e|0)-i|0,Z((i-e|0)-c.N.p.b|0,b.n.b));Bg(f,d+g|0,j+h|0);KE(c,f,c.P.p);}
function Vs(){var a=this;B.call(a);a.tL=null;a.tN=null;a.tM=null;a.tH=0;a.tG=0;a.tK=0;a.tI=0;a.tY=0;a.tX=0;a.tZ=0;a.us=0;}
function AIo(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.tL;d=a.tN;e=a.tM;f=a.tH;g=a.tG;h=a.tK;i=a.tI;j=a.tY;k=a.tX;l=a.tZ;m=a.us;n=Cm(c.bn,5.0);o=c.P.sm();Cw(d,c.P.p);Cw(e,c.P.G);switch(f){case -1:f=Ba(h+(b.n.a-g|0)|0,c.bn.cJ.a-n|0);g=o.a;h=h+i|0;f=Z(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Z((i+b.n.a|0)-g|0,Z(o.a,n-c.N.G.a|0));}b:{switch(j){case -1:f=Z(n,Ba(l+(b.n.b-k|0)|0,(c.bn.cJ.b+c.N.p.b|0)-n|0));g=o.b;h=l+m|0;f=Z(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Z((m+b.n.b|0)-k|0,o.b);}KE(c,e,d);}
function SV(){Q.call(this);this.xz=null;}
function APP(a,b){return Ch(b)!=2?0:1;}
function MB(){Q.call(this);this.xH=null;}
function AFi(a,b){return Ch(b)!=1?0:1;}
function RS(){Q.call(this);this.xi=null;}
function AEZ(a,b){return Q9(b);}
function RR(){Q.call(this);this.xa=null;}
function AHS(a,b){return 0;}
function Wf(){Q.call(this);this.yp=null;}
function AJs(a,b){return !Ch(b)?0:1;}
function OT(){Q.call(this);this.xV=null;}
function APT(a,b){return Ch(b)!=9?0:1;}
function N5(){Q.call(this);this.yP=null;}
function AMm(a,b){return F0(b);}
function QQ(){Q.call(this);this.xB=null;}
function ANQ(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Mu(){Q.call(this);this.wx=null;}
function AQV(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F0(b);}return b;}
function Mz(){Q.call(this);this.xY=null;}
function AGT(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F0(b);}return b;}
function NE(){Q.call(this);this.ym=null;}
function AP1(a,b){a:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Pf(){Q.call(this);this.yB=null;}
function AK2(a,b){return I3(b);}
function Pt(){Q.call(this);this.xl=null;}
function ANh(a,b){return Pu(b);}
function Tm(){Q.call(this);this.x6=null;}
function APH(a,b){return Ch(b)!=3?0:1;}
function SB(){Q.call(this);this.wB=null;}
function AQx(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=F0(b);}return b;}
function MJ(){Q.call(this);this.yY=null;}
function AGF(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=F0(b);}return b;}
function LT(){Q.call(this);this.lu=0;}
function ATB(a){var b=new LT();ABF(b,a);return b;}
function ABF(a,b){Bq(a);a.lu=b;}
function AMp(a,b){return a.Y^(a.lu!=Ch(b&65535)?0:1);}
var RJ=F(LT);
function AOI(a,b){return a.Y^(!(a.lu>>Ch(b&65535)&1)?0:1);}
function WA(){B.call(this);this.n2=null;}
function AIk(a,b){var c,d,e,f;c=a.n2;b=Ce(b);d=c.t5;c=c.t4;e=new LU;f=new Le;c=ER(c);Yf(f,null,null,c,null);c=null;WZ(e,AKc(b),c,f);Gl(d,e);}
function WB(){var a=this;B.call(a);a.pA=null;a.pB=null;}
function AFz(a,b){var c,d;c=a.pA;d=a.pB;b.text().then(Bn(c,"f"),Bn(d,"f"));}
var Ub=F(0);
var AXa=null;function ASo(){ASo=Bm(Ub);AQu();}
function AQu(){AXa=O(C(268));}
function Sl(){B.call(this);this.qI=null;}
function AIc(a,b){b.f4=a.qI;}
function Rs(){B.call(this);this.uq=null;}
function AOm(a){var b,c,d,e,f,g,h,i;b=a.uq;c=b.sx;b=b.sw;d=b.hd;b=b.f1;e=c.uV;c=c.uW;d=J_(d);if(b===null)b=void 0;else{f=b.iz+1|0;g=b.ji+1|0;h=b.fF+1|0;i=b.e5+1|0;b=AEa(f,g,h,i);}c.openCodeEditor(e,d,b);}
function T9(){B.call(this);this.x2=null;}
function AQz(a,b){}
function ACH(){var a=this;B.call(a);a.yz=0;a.xL=0;a.pc=null;}
function AS_(a,b,c){var d=new ACH();AH6(d,a,b,c);return d;}
function AH6(a,b,c,d){a.yz=b;a.xL=c;a.pc=d;}
function T3(){B.call(this);this.pS=null;}
function AKv(a,b){var c;c=a.pS;b=$rt_str(b.message);Co(c.n1,b);}
var Ye=F();
function AKm(b){return {includeDeclaration:b};}
function PN(){var a=this;B.call(a);a.qj=null;a.qi=null;}
function AOa(a,b){V3(b,a.qj,a.qi);}
var ACc=F(0);
function ADC(b){return !b?G(Bv,[C(57),C(219),C(517)]):G(Bv,[C(57),C(219),C(517),C(518)]);}
function AAO(){var a=this;B.call(a);a.DJ=null;a.DH=null;a.DM=0.0;}
function Vo(){var a=this;B.call(a);a.jg=null;a.hi=0;}
var AAx=F(0);
function AKc(b){var c,d,e,f,g,h,i,j,k,l,m,n;c=H(b);BM(b);d=new NX;d.nW=b;e=P(Bv,8);f=DX(8);g=B0(16);h=0;i=0;j=0;while(true){k=BA(j,c);if(k>0)break;l=k>=0?10:(Xz(d,Ct(j))).kf;if(l==10){e=UX(DA(g,0,h),e,i);f=Ux(0,f,i);i=i+1|0;h=0;}else if(l!=13){m=g.data.length;if(m==h)g=I1(g,m*2|0);n=g.data;k=h+1|0;n[h]=l;h=k;}else{e=UX(DA(g,0,h),e,i);k=j+1|0;if(k<c&&(Xz(d,Ct(k))).kf==10){f=Ux(1,f,i);j=k;}else f=Ux(2,f,i);i=i+1|0;h=0;}j=j+1|0;}n=f.data;e=O_(e,i);if(n.length!=i)LG(f,i);return e;}
function NX(){B.call(this);this.nW=null;}
function Xz(a,b){var c,d;c=I(a.nW,b.bg);d=AUB.data;if(c>=d.length)b=AQO(c);else{b=d[c];if(b===null){b=AQO(c);AUB.data[c]=b;}}return b;}
function AAq(){var a=this;B.call(a);a.Bj=null;a.BN=null;}
var YK=F();
$rt_packages([-1,"java",0,"lang"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bu",ATY(AKY),"cP",ATX(AFT)],AAp,0,B,[],3,3,0,0,0,MZ,0,B,[],3,3,0,0,0,Mp,0,B,[],3,3,0,0,0,VS,0,B,[MZ,Mp],0,3,0,0,0,Zk,0,B,[],4,0,0,0,0,Y1,0,B,[],4,3,0,0,0,F8,0,B,[],0,3,0,0,0,DO,0,F8,[],0,3,0,0,0,Bt,0,DO,[],0,3,0,0,0,AAK,0,Bt,[],0,3,0,0,0,Cy,0,B,[],3,3,0,0,0,Cr,0,B,[],3,3,0,0,0,Ij,0,B,[],3,3,0,0,0,Bv,"String",1,B,[Cy,Cr,Ij],0,3,0,F9,["cP",ATX(AFR),"bu",ATY(BE),"lX",ATX(Gj),"jB",ATY(AHV)],F3,0,F8,[],0,3,0,0,0,GX,0,F3,[],0,3,0,0,0,AAk,0,GX,[],0,3,0,0,0,Ep,0,B,[Cy],1,3,0,0,0,FS,
0,Ep,[Cr],0,3,0,0,["bu",ATY(AQG),"jB",ATY(AJ$)],FW,0,B,[Cy,Ij],0,0,0,0,["hE",ATY(I_),"cP",ATX(S)],Hx,0,B,[],3,3,0,0,0,R,0,FW,[Hx],0,3,0,0,["lI",AT1(AJ6),"kJ",AT0(AG1),"cP",ATX(Jg),"hE",ATY(AKd),"md",ATZ(AKI)],Fo,0,GX,[],0,3,0,0,0,ABI,0,Fo,[],0,3,0,0,0,Z$,0,Fo,[],0,3,0,0,0,Bo,0,B,[],3,3,0,0,0,RE,0,B,[Bo],3,3,0,0,0,T7,0,B,[RE],0,3,0,0,["x_",ATY(AIi)],ABh,0,B,[],0,3,0,0,0,OD,0,B,[Bo],3,3,0,0,0,T6,0,B,[OD],0,3,0,0,["AX",AT0(AKU)],AAC,0,B,[],0,3,0,0,0,SW,0,B,[Bo],3,3,0,0,0,TM,0,B,[SW],0,3,0,0,["x_",ATY(AJ7)],ZB,
0,B,[],0,3,0,0,0,KS,0,B,[],4,3,0,0,0,ACt,0,B,[],4,3,0,0,0,GQ,0,B,[],3,3,0,0,0,SU,0,B,[GQ],0,3,0,0,0,BV,0,Bt,[],0,3,0,0,0,ABn,0,B,[],4,3,0,0,0,Ge,0,Bt,[],0,3,0,0,0,Id,0,Bt,[],0,3,0,0,0,CS,0,B,[Cr],0,3,0,0,0,GR,0,BV,[],0,3,0,0,0,H6,0,B,[Bo],3,3,0,0,0,Rn,0,B,[H6],3,3,0,0,0,Po,0,B,[Rn],0,3,0,0,["Hc",ATY(AOr),"Hy",ATZ(ANk),"D6",ATY(APN),"FA",ATY(AG_),"De",ATX(AND),"Kr",ATY(AIt),"zc",ATX(AIp),"Ir",ATX(AJG),"KN",ATY(AG9),"Jv",ATZ(AMR),"y7",ATZ(APo),"E6",ATX(AQp),"CK",ATY(AFf),"B4",ATY(AHE),"EF",ATX(AKB),"HA",ATY(AGz),
"Ap",ATY(ANe),"Dx",ATY(AIg),"zC",ATY(APk),"Bv",ATZ(AQA),"GJ",ATZ(AMk),"EP",ATY(AGL),"Ar",ATY(AQc)],Qp,0,B,[H6],3,3,0,0,0]);
$rt_metadata([EU,0,B,[Qp],0,3,0,0,["Du",ATX(AQ3),"A3",ATX(AJ0),"Iw",ATX(ALE),"A5",ATY(AQQ),"E9",ATX(AMd),"D2",ATY(AEF)],Sm,0,B,[Bo],3,3,0,0,0,VC,0,B,[Sm],0,3,0,0,["KO",ATX(APX),"Fc",ATX(AMx),"BG",ATY(ALp),"Ji",ATY(AGJ),"zX",ATY(AHK),"Fe",ATY(AOM),"GA",ATY(ALn),"GH",ATX(AIC),"zS",ATY(AHq)],Ti,0,B,[],3,3,0,0,0,CV,0,B,[],3,3,0,0,0,OS,0,B,[],3,0,0,0,0,H8,0,B,[Ti,CV,OS],1,3,0,0,["eX",ATX(Is)],Rv,0,H8,[],0,3,0,0,0,AAw,0,B,[Bo],1,3,0,0,0,Ht,0,B,[Bo],3,3,0,0,0,Uc,0,B,[Ht],0,3,0,0,["mu",ATZ(AH9)],ABo,0,B,[],3,3,0,0,
0,ZQ,0,B,[],0,3,0,0,0,LU,0,B,[],0,3,0,0,0,Yj,0,B,[Bo],1,3,0,0,0,Xy,0,B,[Ht],0,3,0,0,["mu",ATZ(AH2)],ADU,0,B,[],4,3,0,0,0,ACv,0,B,[],3,3,0,0,0,YB,0,B,[],0,3,0,0,0,ACM,0,B,[Bo],1,3,0,0,0,Le,0,B,[],0,3,0,0,["bu",ATY(AGu)],AC2,0,B,[],0,3,0,0,0,TS,0,B,[],0,3,0,0,0,VE,0,B,[],3,3,0,0,["en",ATY(AD0)],FH,0,B,[VE],3,3,0,0,["en",ATY(AD0),"lw",ATY(AJP)],EA,0,B,[FH],1,3,0,0,["en",ATY(AD0),"lw",ATY(AJP),"dQ",ATX(DG),"nS",ATY(AOl)],J8,0,B,[FH],3,3,0,0,["en",ATY(AD0),"lw",ATY(AJP)],II,0,B,[J8],3,3,0,0,["en",ATY(AD0),"lw",ATY(AJP)],El,
0,EA,[II],1,3,0,0,["en",ATY(AD0),"lw",ATY(AJP),"sv",ATY(ANF),"bX",ATX(BO),"tm",ATZ(AMJ),"mA",ATZ(APf),"bu",ATY(ALz)],DP,0,B,[],3,3,0,0,0,KR,0,B,[],3,3,0,0,0,YF,0,El,[DP,Cy,KR],0,3,0,0,["lw",ATY(AJP),"lv",ATY(Bs),"cA",ATX(AMt),"sv",ATY(Bw),"mA",ATZ(Rw),"mn",ATY(Fl),"nS",ATY(Vm),"hY",ATX(FJ),"tm",ATZ(Y6),"en",ATY(DY)],Ku,0,B,[],3,3,0,0,0,DB,0,B,[Ku],1,3,0,0,0,JZ,0,DB,[DP,Cy],0,3,0,0,0,Rt,0,B,[],0,3,0,0,0,Mj,0,B,[Bo],3,3,0,0,0,SF,0,B,[Mj],3,3,0,0,0,D6,0,B,[Bo],3,3,0,0,0,Yq,0,B,[Bo,SF,D6],1,3,0,0,["Hx",ATX(ALN),
"In",ATY(AOQ),"J5",ATY(AOy),"Cf",ATY(AGA),"Hq",ATY(AEl),"z1",ATX(AGV),"IE",ATZ(AOJ),"IL",AT0(AJN),"JB",ATX(AFh),"Kd",ATX(AMS),"Gk",ATY(APz),"Dt",ATX(ALh),"KH",ATY(AJi),"Fr",ATX(ALP),"Eq",ATX(ARb),"Kq",ATX(AKw),"zU",ATY(AE8),"IT",ATX(AQH),"GP",ATZ(AJf),"C_",ATZ(AK$),"Ip",ATZ(AQb),"HN",ATX(AEp),"Jl",ATX(AIZ),"JR",ATY(AG6),"FY",ATY(AH$),"B$",ATZ(AJw),"EQ",ATX(AKC),"Jq",ATY(AFj),"Am",ATX(AH8),"Ku",ATX(ANl),"BT",ATY(AD8),"Fp",ATY(APp),"Kg",ATY(AFJ),"D7",ATX(APr),"CO",ATZ(AFU),"Ic",ATY(AM9),"EA",ATX(ANV),"AQ",ATZ(AMi),
"AV",ATZ(ALY),"D4",ATX(APi),"JU",ATY(AQM),"C1",AT0(AL1),"BM",ATX(AGX),"Dc",ATZ(AGb),"Dk",ATX(AER),"H0",ATX(AQC),"Gh",ATX(AMh),"y5",ATX(AEO),"Hn",ATZ(AMj),"An",ATY(AGM),"FW",ATY(AIs),"BA",ATX(AN3)],AAv,0,B,[],4,3,0,0,0,GD,0,B,[Cr],0,3,0,0,0,Kr,0,B,[],0,3,0,0,0,CQ,0,B,[],0,3,0,0,0,Pe,0,B,[D6],3,3,0,0,0,Rr,0,B,[D6],3,3,0,0,0,Rc,0,B,[D6],3,3,0,0,0,Tf,0,B,[D6],3,3,0,0,0,WH,0,B,[D6],3,3,0,0,0,Ug,0,B,[D6,Pe,Rr,Rc,Tf,WH],3,3,0,0,0]);
$rt_metadata([Zg,0,B,[Bo,Ug],1,3,0,0,["G2",ATZ(AMn),"Jz",ATZ(AJ9),"BV",AT0(AI1),"CX",ATY(AFp),"GI",AT0(AHb)],Pl,0,B,[],0,3,0,0,0,BF,0,Bt,[],0,3,0,0,0,XM,0,Bt,[],0,3,0,0,0,B$,0,B,[],0,3,0,0,0,Ko,0,JZ,[],0,3,0,0,0,RC,0,B,[],0,3,0,0,0,ADs,0,B,[Cr],0,3,0,0,["bu",ATY(AOG),"jB",ATY(AF0)],VI,0,B,[GQ],0,3,0,0,["vG",ATZ(AKD)],QS,0,B,[],0,3,0,0,["bu",ATY(AFO)],G2,0,B,[],3,3,0,0,0,F6,0,B,[G2,DP],0,0,0,0,["bu",ATY(AGI)],Gf,0,F6,[],0,0,0,0,0,WM,0,B,[],0,3,0,0,0,Km,0,B,[],3,3,0,0,0,Pi,0,B,[Km],0,3,0,0,0,EN,0,B,[],0,3,0,0,
0,Kw,0,EN,[],0,3,0,0,0,ACT,0,B,[],1,3,0,0,0,AAr,0,B,[Bo],1,3,0,0,0,AAU,0,B,[Bo],1,3,0,0,0,FV,0,EN,[],0,3,0,0,0,JC,0,EN,[],0,3,0,0,0,Sk,0,B,[Ht],0,3,0,0,["mu",ATZ(AOX)],ZZ,0,B,[Bo],1,3,0,0,0,Hd,0,B,[],3,3,0,0,["wk",ATX(AL5),"tt",ATX(AHZ)],ET,0,B,[],3,3,0,0,0,Jx,0,B,[],3,3,0,0,0,P8,0,B,[],3,0,0,0,0,ZX,0,B,[Hd,ET,Jx,P8],0,3,0,0,["tt",ATX(AHN),"wk",ATX(AEV),"vK",ATX(Nt),"v8",ATX(Xr),"tJ",ATY(Oa),"ge",ATZ(S8),"f3",ATZ(MA),"fM",AT0(MK),"gg",ATY(NT),"kn",ATY(AQk)],ACx,0,B,[],0,3,0,0,0,ADi,0,B,[],0,3,0,0,0,ACW,0,B,
[],4,3,0,0,0,U_,0,B,[H6],0,3,0,0,["C4",ATX(AJv)],Vf,0,B,[Bo],3,3,0,0,0,AAL,0,B,[Vf],1,3,0,0,["Jr",ATY(AII),"IK",ATX(AKV)],Hu,0,B,[],0,3,0,0,0,SO,0,B,[],3,3,0,0,0,MR,0,B,[SO],0,3,0,0,0,QC,0,B,[],3,3,0,0,0,OG,0,B,[QC],3,3,0,0,0,AA9,0,B,[OG],0,3,0,0,0,Xc,0,B,[],3,3,0,AS8,0,Lp,0,B,[CV],1,3,0,0,0,FZ,0,Lp,[],1,3,0,0,0,OE,0,B,[],3,3,0,0,0,Jv,0,B,[OE],3,3,0,0,0,K$,0,B,[],3,3,0,0,0,Ms,0,FZ,[Jv,K$],0,3,0,0,["ia",ATY(AI9),"lJ",ATY(AOY),"e9",ATX(AIJ),"iZ",ATZ(AD9),"iB",ATY(AHc)],Kk,0,B,[],3,3,0,0,0]);
$rt_metadata([OF,0,B,[Kk],0,3,0,0,["lp",function(b,c,d,e,f){AM6(this,b,c,d,e,f);}],W4,0,B,[],3,3,0,0,0,WL,0,B,[W4],0,3,0,0,0,Fm,0,B,[],3,3,0,0,0,ME,0,B,[Fm],0,3,0,0,0,V8,0,B,[Kk],0,3,0,0,["lp",function(b,c,d,e,f){AGQ(this,b,c,d,e,f);}],Lo,0,B,[Cr],0,3,0,0,["bu",ATY(AEx),"lX",ATX(ANJ),"jB",ATY(ANf)],Gb,0,B,[],3,3,0,0,0,HF,0,B,[],3,3,0,0,0,Ez,0,B,[],3,3,0,0,0,Hc,0,B,[Ez],3,3,0,0,0,Ob,0,FZ,[ET,Jv,Jx,K$,Gb,HF,Hc],0,3,0,0,["ml",ATZ(AP_),"lJ",ATY(ANK),"e9",ATX(AK0),"vK",ATX(AOk),"v8",ATX(AKR),"tJ",ATY(APm),"ia",ATY(AGC),
"iZ",ATZ(AKh),"iB",ATY(AEQ),"gg",ATY(AMO),"fM",AT0(AJb),"f3",ATZ(ALd),"ge",ATZ(ANC),"f8",AT0(AM5),"ee",ATX(AJ5)],ZP,0,B,[Bo],1,3,0,0,0,Zf,0,B,[],0,3,0,0,0,BY,0,B,[Bo],3,3,0,0,0,Ps,0,B,[BY],0,3,0,0,["be",ATY(AKy)],ACd,0,B,[Bo],3,3,0,0,0,AAS,0,B,[Bo],1,3,0,0,0,QM,0,B,[BY],0,3,0,0,["be",ATY(AHO)],NG,0,B,[BY],0,3,0,0,["be",ATY(AM8)],Y,0,B,[],3,3,0,0,0,XL,0,B,[Y],0,3,0,0,["j",ATY(AIX)],ZC,0,B,[],0,3,0,0,0,D4,0,B,[],3,3,0,0,0,XO,0,B,[D4],0,3,0,0,["mF",ATY(AJH)],Bk,0,B,[],3,3,0,0,0,XP,0,B,[Bk],0,3,0,0,["s",ATX(AIv)],UJ,
0,B,[D4],0,3,0,0,["mF",ATY(ANt)],UK,0,B,[Bk],0,3,0,0,["s",ATX(AQ4)],Rk,0,B,[Bo],3,3,0,0,0,U8,0,B,[Rk],0,3,0,0,["Fv",ATY(AJe)],U6,0,B,[Bk],0,3,0,0,0,Qi,0,B,[Bo],3,3,0,0,0,U7,0,B,[Qi],0,3,0,0,["mu",ATZ(AHj)],AC1,0,B,[Bo],1,3,0,0,0,Cd,0,B,[Bo],3,3,0,0,0,U5,0,B,[Cd],0,3,0,0,["b5",ATY(ANi)],Sn,0,B,[],0,3,0,0,0,LJ,0,El,[],1,3,0,0,["en",ATY(AD0),"lw",ATY(AJP)],Mq,0,B,[FH],3,3,0,0,["en",ATY(AD0),"lw",ATY(AJP)],W7,0,B,[Mq,J8],3,3,0,0,["en",ATY(AD0),"lw",ATY(AJP)],T$,0,LJ,[W7],0,3,0,0,["en",ATY(AD0),"lw",ATY(AJP)],W3,
0,B,[Ku],3,3,0,0,0,MY,0,B,[W3],3,3,0,0,0,O2,0,DB,[DP,Cy,MY],0,3,0,0,0,St,0,B,[D4],0,3,0,0,0,Su,0,B,[BY],0,3,0,0,["be",ATY(AEo)],Pq,0,B,[],0,3,0,0,0,KI,0,B,[],1,3,0,0,0,ACy,0,KI,[],0,3,0,0,0]);
$rt_metadata([ZI,0,B,[],0,3,0,0,0,VY,0,B,[Cd],0,3,0,0,["b5",ATY(AML)],VZ,0,B,[Cd],0,3,0,0,["b5",ATY(AMY)],V0,0,B,[Cd],0,3,0,0,["b5",ATY(ALe)],V1,0,B,[Cd],0,3,0,0,["b5",ATY(AKE)],AC7,0,B,[Cd],0,3,0,0,["b5",ATY(AK3)],AC8,0,B,[Cd],0,3,0,0,["b5",ATY(ANv)],AC9,0,B,[Cd],0,3,0,0,["b5",ATY(AI0)],AC$,0,B,[Cd],0,3,0,0,["b5",ATY(AQ7)],AC_,0,B,[Cd],0,3,0,0,["b5",ATY(AH7)],ADa,0,B,[Cd],0,3,0,0,["b5",ATY(AOB)],ADJ,0,B,[Cd],0,3,0,0,["b5",ATY(AQE)],ADK,0,B,[Cd],0,3,0,0,["b5",ATY(AKT)],ADL,0,B,[Cd],0,3,0,0,["b5",ATY(ALj)],ADM,
0,B,[Cd],0,3,0,0,["b5",ATY(AM_)],TI,0,B,[],3,3,0,0,0,TW,0,B,[TI],0,3,0,0,0,TV,0,B,[Cd],0,3,0,0,["b5",ATY(AJV)],Mk,0,B,[],0,3,0,0,0,IE,0,B,[GQ],0,3,0,0,["vG",ATZ(I5)],DT,0,B,[],3,3,0,0,0,D$,0,B,[DT],3,3,0,0,0,Iu,0,B,[DT],3,3,0,0,0,Qo,0,B,[CV],0,3,0,0,0,Bj,0,B,[],0,3,0,0,["bu",ATY(AJI)],V4,0,B,[],0,3,0,0,0,YW,0,B,[],3,3,0,0,0,Qh,0,B,[],0,3,0,0,0,La,0,B,[],0,3,0,0,0,CI,0,La,[],0,3,0,0,0,VF,0,CI,[],0,3,0,0,0,En,0,CI,[],0,3,0,0,0,AAh,0,CI,[],0,3,0,0,0,AAD,0,En,[],0,3,0,0,0,FE,0,En,[],0,3,0,0,0,ABN,0,FE,[],0,3,0,
0,0,ADy,0,FE,[],0,3,0,0,0,Zi,0,En,[],0,3,0,0,0,ABM,0,CI,[],0,3,0,0,0,YS,0,CI,[],0,3,0,0,0,RT,0,B,[Bo],3,3,0,0,0,ADR,0,B,[RT],3,3,0,0,0,Qf,0,B,[CV],0,3,0,0,0,Qg,0,B,[],0,3,0,0,0,Cj,0,B,[Cr,Cy],1,3,0,0,0,Gq,0,Cj,[],12,3,0,Ha,0,LW,0,B,[],3,3,0,0,0,S$,0,B,[LW],3,3,0,0,0,T_,0,B,[],3,3,0,0,0,F2,0,B,[S$,T_],1,3,0,0,0]);
$rt_metadata([IX,0,F2,[],0,3,0,0,0,Z7,0,IX,[],0,3,0,0,0,FR,0,F2,[],1,3,0,0,0,KQ,0,FR,[],0,3,0,0,["j_",AT0(AJL)],DK,0,Cj,[],12,3,0,APV,0,IN,0,B,[Cr],1,3,0,0,0,L1,0,IN,[],0,3,0,AHX,0,Gv,0,Cj,[],12,0,0,ALa,0,J$,0,FR,[],0,3,0,0,["j_",AT0(AHF)],ACs,0,BF,[],0,3,0,0,0,U9,0,DO,[],0,3,0,0,0,LZ,0,B,[Bo],3,3,0,0,0,W1,0,B,[LZ],0,3,0,0,["be",ATY(AN8)],W2,0,B,[LZ],0,3,0,0,["be",ATY(AFK)],P_,0,B,[],0,3,0,0,0,WV,0,B,[],0,3,0,0,0,AAB,0,B,[ET,Gb],0,0,0,0,["gg",ATY(AMU),"fM",AT0(AP5),"f3",ATZ(ANW),"ge",ATZ(AKo),"f8",AT0(AOe)],JB,
0,B,[],3,3,0,0,0,Uu,0,B,[JB],0,3,0,0,["j5",ATY(AJ_)],Uv,0,B,[JB],0,3,0,0,["j5",ATY(AE9)],Uw,0,B,[Y],0,3,0,0,["j",ATY(AKn)],Uq,0,B,[Y],0,3,0,0,["j",ATY(ALf)],Ur,0,B,[D$],0,3,0,0,["co",ATY(APM)],JW,0,B,[D$],0,3,0,0,["co",ATY(AH3)],Us,0,B,[Y],0,3,0,0,["j",ATY(AOC)],Ut,0,B,[Iu],0,3,0,0,["co",ATY(AGW)],GG,0,B,[],1,3,0,0,0,Sh,0,B,[],3,3,0,0,0,KC,0,GG,[Cr,Hx,Ij,Sh],1,3,0,0,0,Jp,0,GG,[Cr],1,3,0,0,0,Hj,0,B,[],0,3,0,APZ,0,Pz,0,B,[D$],0,3,0,0,["co",ATY(AFB)],Px,0,B,[Y],0,3,0,0,["j",ATY(AIb)],Py,0,B,[HF],0,3,0,0,["ml",
ATZ(APa)],NU,0,B,[Hc],0,3,0,0,["ee",ATX(AM0)],NV,0,B,[Gb],0,3,0,0,["f8",AT0(AJT)],NS,0,B,[Iu],0,3,0,0,["co",ATY(AKF)],AAN,0,B,[Bo],1,3,0,0,0,YP,0,B,[],3,3,0,0,0,TZ,0,B,[],0,3,0,0,0,RY,0,B,[D$],0,3,0,0,["co",ATY(AIG)],RX,0,B,[D$],0,3,0,0,["co",ATY(AF_)],B5,0,B,[],0,3,0,0,["bu",ATY(AQ2)],Ih,0,B,[],3,3,0,0,0,WE,0,B,[ET,Ih],0,3,0,0,0,Vq,0,B,[Ih,Hd],0,3,0,0,["wk",ATX(AL5),"tt",ATX(AHZ),"kn",ATY(AKK)],PF,0,B,[],0,3,0,0,0,Kz,0,B,[],0,3,0,0,0,EY,0,B,[CV],0,0,0,0,0,ADu,0,B,[],0,3,0,0,0]);
$rt_metadata([ZD,0,B,[CV],0,3,0,0,0,NM,0,B,[Y],0,3,0,0,0,NL,0,B,[Y],0,3,0,0,["j",ATY(AFl)],NK,0,B,[Y],0,3,0,0,["j",ATY(AEv)],UE,0,B,[],0,0,0,0,0,NJ,0,B,[Bk],0,3,0,0,["s",ATX(AEu)],NQ,0,B,[Bk],0,3,0,0,["s",ATX(AH1)],NP,0,B,[Bk],0,3,0,0,["s",ATX(ARl)],NO,0,B,[Bk],0,3,0,0,["s",ATX(AKz)],NN,0,B,[Bk],0,3,0,0,["s",ATX(AMV)],NI,0,B,[Bk],0,3,0,0,["s",ATX(AQJ)],NH,0,B,[Bk],0,3,0,0,["s",ATX(AEj)],E7,0,Cj,[],12,3,0,AEr,0,Jw,0,KC,[],1,0,0,0,0,Re,0,Jw,[],0,0,0,0,0,Kl,0,B,[],1,3,0,0,0,Lk,0,B,[],0,3,0,0,0,Wb,0,B,[],0,0,0,
0,0,GM,0,B,[],0,3,0,0,0,OW,0,GM,[],0,3,0,0,0,ACE,0,B,[],0,3,0,0,0,Mh,0,GM,[],0,3,0,0,0,TK,0,B,[Bo],3,3,0,0,0,Nz,0,B,[TK],0,3,0,0,["J6",ATY(AKk)],Un,0,B,[Y],0,3,0,0,["j",ATY(AO3)],Me,0,B,[],3,3,0,0,0,Qa,0,B,[Bk],0,3,0,0,["s",ATX(AIY)],P$,0,B,[Bk],0,3,0,0,["s",ATX(AEd)],Xs,0,B,[],3,3,0,0,0,PR,0,B,[],3,0,0,0,0,Wm,0,Jp,[],0,0,0,0,0,RI,0,B,[Me],0,3,0,0,0,ABw,0,B,[Bo],1,3,0,0,0,NA,0,B,[Bk],0,3,0,0,["s",ATX(AQK)],JQ,0,B,[],4,3,0,AJu,0,Vy,0,B,[],3,3,0,0,0,AA_,0,B,[Vy],0,3,0,0,["cP",ATX(AGG)],T2,0,B,[],3,3,0,0,0,Ky,
0,B,[T2],0,3,0,0,["cP",ATX(AJS)],HL,0,B,[],0,3,0,0,0,UP,0,B,[CV],0,3,0,0,0,Kh,0,Kl,[],1,3,0,0,0,Pm,0,Kh,[],0,3,0,0,0,TR,0,DO,[],0,3,0,0,0,H7,0,B,[],0,3,0,0,0,YO,0,B,[],3,3,0,0,0,X6,0,B,[],0,3,0,0,0,ABa,0,B,[],3,3,0,0,0,ADD,0,B,[],0,3,0,0,0,L9,0,B,[G2,Cy],0,3,0,0,0]);
$rt_metadata([IZ,0,L9,[],0,0,0,0,0,Ii,0,B5,[],0,3,0,0,0,CJ,0,B,[],3,3,0,ACA,0,Ca,0,Cj,[],12,3,0,ABK,0,Iq,0,B,[],0,3,0,0,0,HO,0,B,[],0,3,0,0,0,AA2,0,B,[],0,3,0,0,0,De,0,B,[],3,3,0,AEP,0,Zz,0,B,[],0,3,0,0,["bu",ATY(AOp)],CK,0,B,[],3,3,0,ACS,0,B8,0,Cj,[],12,3,0,ZG,0,Ds,0,B,[],3,3,0,ALm,0,CU,0,B,[],3,3,0,AHL,0,B7,0,Cj,[],12,3,0,UF,0,Dl,0,B,[],3,3,0,AEB,0,HZ,0,B,[],0,3,0,0,0,Il,0,B,[],4,3,0,0,0,YZ,0,B,[],0,3,0,0,0,HH,0,B,[],0,3,0,0,0,UU,0,B,[],0,3,0,0,0,Lr,0,B,[],0,3,0,0,0,YN,0,B,[],0,3,0,0,0,ZY,0,B,[],4,3,0,0,0,TN,
0,B,[],0,0,0,0,0,Tr,0,B,[Y],0,3,0,0,["j",ATY(AHa)],IY,0,B,[CV],0,3,0,0,["eX",ATX(ABR)],Ya,0,B,[],0,3,0,0,0,Uj,0,B,[],0,3,0,0,0,SS,0,B,[],0,3,0,0,0,Xf,0,B,[Y],0,3,0,0,["j",ATY(AFg)],Mr,0,B,[Y],0,3,0,0,["j",ATY(AOL)],PI,0,B,[CV],0,3,0,0,0,Z9,0,B,[Bo],4,3,0,0,0,N0,0,B,[Y],0,3,0,0,["j",ATY(AFx)],Dm,0,Bt,[],0,3,0,0,0,Tu,0,F3,[],0,3,0,0,0,Y3,0,B,[],3,3,0,0,0,MP,0,B,[Y],0,3,0,0,["j",ATY(AM1)],Q$,0,B,[Y],0,3,0,0,["j",ATY(AI6)],ADr,0,B,[],0,3,0,0,0,UV,0,B,[Y],0,3,0,0,["j",ATY(AO4)],Tx,0,B,[Y],0,3,0,0,["j",ATY(AHW)],Sa,
0,B,[Y],0,3,0,0,["j",ATY(AHm)],R_,0,B,[Y],0,3,0,0,["j",ATY(AP2)],EE,0,B,[],3,3,0,0,0,Nq,0,B,[EE],0,0,0,0,["ce",ATX(BP),"bP",ATX(BS),"kW",ATX(Q2)],M8,0,B,[Ez],0,3,0,0,["ee",ATX(AKa)],M5,0,B,[Ez],0,3,0,0,["ee",ATX(AO5)],SI,0,B,[Ez],0,3,0,0,["ee",ATX(AME)],ACL,0,B,[D4],0,3,0,0,0]);
$rt_metadata([ACb,0,B,[D4],0,3,0,0,0,Wg,0,B,[Y],0,3,0,0,["j",ATY(AEm)],OJ,0,B,[Y],0,3,0,0,["j",ATY(APv)],SK,0,B,[Y],0,3,0,0,["j",ATY(AQW)],R2,0,B,[DT],0,3,0,0,0,ACK,0,B,[],0,3,0,0,0,SM,0,DB,[DP,Cy],0,3,0,0,0,Vk,0,B,[],0,3,0,0,0,Vc,0,B,[],0,3,0,0,0,S2,0,B,[Y],0,3,0,0,["j",ATY(AOv)],ABu,0,B,[Bo],1,3,0,0,0,TX,0,B,[],0,3,0,0,0,D1,0,Bt,[],0,3,0,0,0,Ny,0,B,[],0,3,0,0,0,RZ,0,B,[Y],0,3,0,0,["j",ATY(AJY)],R0,0,B,[Y],0,3,0,0,["j",ATY(ALH)],ACU,0,B,[],0,3,0,0,0,S7,0,B,[],0,0,0,0,0,YT,0,B,[],3,3,0,0,0,QF,0,B,[LW],3,3,0,
0,0,Nr,0,B,[QF],3,3,0,0,0,GH,0,B,[Nr],1,3,0,0,0,Si,0,GH,[],0,3,0,0,0,Qv,0,B,[],3,3,0,0,0,Tz,0,B,[],0,3,0,0,0,Sq,0,B,[Y],0,3,0,0,0,Hk,0,F6,[],0,0,0,0,0,GF,0,Bt,[],0,3,0,0,0,WU,0,B,[BY],0,3,0,0,["be",ATY(AOj)],WT,0,B,[BY],0,3,0,0,["be",ATY(AGS)],Wa,0,B,[BY],0,3,0,0,["be",ATY(AIz)],V_,0,B,[BY],0,3,0,0,["be",ATY(AJn)],Ym,0,B,[Y],0,3,0,0,0,WP,0,B,[Cd],0,3,0,0,["b5",ATY(AIl)],JO,0,B,[],0,3,0,0,0,Jk,0,B,[],0,3,0,0,0,L$,0,B,[],0,3,0,0,0,WC,0,B,[Bk],0,3,0,0,["s",ATX(AE0)],WD,0,B,[Bk],0,3,0,0,["s",ATX(AI3)],E2,0,B,[],
0,3,0,0,0,Xq,0,B,[Y],0,3,0,0,["j",ATY(AIq)],Kj,0,E2,[],0,3,0,0,0,JP,0,E2,[],0,3,0,0,0,VG,0,B,[Y],0,3,0,0,["j",ATY(AE6)],PL,0,B,[],0,3,0,0,0,OO,0,B,[Y],0,3,0,0,["j",ATY(ALg)],Qt,0,B,[DT],0,3,0,0,["co",ATY(ARm)],Xn,0,D1,[],0,3,0,0,0,QT,0,Bt,[],0,3,0,0,0,VK,0,Bt,[],0,3,0,0,0]);
$rt_metadata([PB,0,B,[Y],0,3,0,0,["j",ATY(ANb)],Yr,0,B,[Y],0,3,0,0,0,V7,0,B,[],0,3,0,0,0,Qk,0,B,[Bk],0,3,0,0,["s",ATX(ARo)],Vj,0,B,[Bk],0,3,0,0,0,Qc,0,B,[Qv],0,3,0,0,0,EG,0,B,[CV],0,3,0,0,["eX",ATX(ANM),"sm",ATX(ABA),"lE",AT0(Rl),"ku",ATY(APQ),"o8",ATY(AKJ),"oM",ATY(AQm),"qv",ATZ(ANU),"fM",AT0(AI8),"f3",ATZ(AFS),"ge",ATZ(ALy),"gg",ATY(AP4),"f8",AT0(ANI)],IL,0,EG,[],0,3,0,0,0,Qq,0,IL,[Hd],0,3,0,0,["wk",ATX(AL5),"tt",ATX(AHZ),"eX",ATX(AP3),"qv",ATZ(AG5),"oM",ATY(ANa),"o8",ATY(AOO),"kn",ATY(AO9)],Qd,0,B,[Bk],0,
3,0,0,0,PK,0,EG,[],0,3,0,0,["eX",ATX(AOK),"lE",AT0(AIy),"ku",ATY(AN0),"fM",AT0(APj),"f3",ATZ(AON),"ge",ATZ(ALZ),"gg",ATY(ALG),"f8",AT0(AHH),"sm",ATX(AQF)],Pn,0,B,[],1,3,0,0,0,Gr,0,B,[],0,3,0,0,0,OV,0,B,[FH],3,3,0,0,["en",ATY(AD0),"lw",ATY(AJP)],Eq,0,EA,[OV],1,3,0,0,["en",ATY(AD0),"lw",ATY(AJP)],O8,0,Eq,[],0,0,0,0,["lw",ATY(AJP)],Md,0,B,[Y],0,3,0,0,["j",ATY(AHA)],UI,0,B,[Y],0,3,0,0,["j",ATY(AKA)],ID,0,B,[],0,3,0,0,["bu",ATY(ABl)],LL,0,ID,[],0,3,0,0,["bu",ATY(AFC)],Em,0,B,[],0,3,0,0,["bu",ATY(YG)],FT,0,Em,[],
0,3,0,0,0,Ib,0,Em,[],0,3,0,0,["bu",ATY(AP9)],Iv,0,Em,[],0,3,0,0,["bu",ATY(AEN)],YR,0,B,[Bo],1,3,0,0,0,QP,0,B,[BY],0,3,0,0,["be",ATY(AHt)],ABd,0,B,[],1,3,0,0,0,Mn,0,B,[BY],0,3,0,0,["be",ATY(AOo)],ZW,0,GH,[],0,3,0,0,0,RO,0,B,[Bk],0,3,0,0,["s",ATX(AJd)],RP,0,B,[Bk],0,3,0,0,["s",ATX(AGc)],RM,0,B,[Bk],0,3,0,0,["s",ATX(AE1)],RN,0,B,[Bk],0,3,0,0,["s",ATX(AI$)],QX,0,B,[Bk],0,3,0,0,["s",ATX(ANB)],QW,0,B,[Bk],0,3,0,0,["s",ATX(AL$)],QV,0,B,[Bk],0,3,0,0,["s",ATX(ARc)],OY,0,B,[Bk],0,3,0,0,["s",ATX(AL6)],Qb,0,B,[],3,3,0,
0,0,PU,0,B,[Bk],0,3,0,0,["s",ATX(AF2)],H1,0,B,[],0,3,0,0,0,Rm,0,B,[],3,3,0,0,0,Yg,0,B,[Rm],0,3,0,0,0,Va,0,EG,[],0,3,0,0,0,WO,0,Ep,[Cr],0,3,0,0,0,Fe,0,B,[],0,0,0,0,0,Hm,0,B,[],4,3,0,0,0,UZ,0,B,[],0,3,0,0,0,ABV,0,B,[],0,3,0,0,0,ST,0,B,[Fm],0,3,0,0,["v5",ATZ(APn)],V2,0,BV,[],0,3,0,0,0]);
$rt_metadata([DM,0,B,[],0,3,0,0,0,Na,0,B,[Bk],0,3,0,0,["s",ATX(AJK)],Nb,0,B,[Bk],0,3,0,0,["s",ATX(APu)],M_,0,B,[Bk],0,3,0,0,["s",ATX(ADZ)],V$,0,B,[Bk],0,3,0,0,["s",ATX(AKH)],V9,0,B,[Bk],0,3,0,0,["s",ATX(ANY)],Ri,0,B,[Ez],0,3,0,0,["ee",ATX(AKe)],Sr,0,B,[Bk],0,3,0,0,["s",ATX(AJl)],Ss,0,B,[Bk],0,3,0,0,["s",ATX(AO_)],Xm,0,B,[Bk],0,3,0,0,["s",ATX(AEc)],Xh,0,B,[Bk],0,3,0,0,["s",ATX(AJo)],Xi,0,B,[Bk],0,3,0,0,["s",ATX(AQw)],Xj,0,B,[Bk],0,3,0,0,["s",ATX(AKX)],Xk,0,B,[Bk],0,3,0,0,["s",ATX(AIL)],KL,0,B,[],3,3,0,0,0,WK,
0,B,[KL],0,3,0,0,0,Od,0,B,[Y],0,3,0,0,["j",ATY(AEL)],Oc,0,B,[Y],0,3,0,0,["j",ATY(AE7)],R1,0,Ep,[Cr],0,3,0,0,0,Wy,0,B,[D4],0,3,0,0,0,EK,0,B,[],0,3,0,0,0,YA,0,B,[],0,3,0,0,0,UA,0,B,[Fm],0,3,0,0,["v5",ATZ(AQ1)],P9,0,B,[BY],0,3,0,0,["be",ATY(AG4)],ADo,0,B,[Cr],0,3,0,0,["bu",ATY(AL_)],MX,0,B,[Y],0,3,0,0,["j",ATY(AKx)],XA,0,B,[Y],0,3,0,0,["j",ATY(ARi)],Ik,0,B,[Bo],3,3,0,0,0,My,0,B,[Ik],0,3,0,0,["rD",ATX(AJr)],Mi,0,B,[Ik],0,3,0,0,["rD",ATX(AD2)],SX,0,B,[BY],0,3,0,0,["be",ATY(AI7)],Vn,0,B,[Ez],0,3,0,0,["ee",ATX(AQS)],T1,
0,B,[KL],0,3,0,0,0,TG,0,B,[],0,3,0,0,0,WS,0,B,[BY],0,3,0,0,["be",ATY(AIR)],JI,0,Eq,[],1,0,0,0,["en",ATY(AD0),"lw",ATY(AJP)],U4,0,JI,[],0,0,0,0,["en",ATY(AD0),"lw",ATY(AJP)],K0,0,DB,[],1,0,0,0,0,U2,0,K0,[],0,0,0,0,0,Lz,0,El,[KR],1,0,0,0,["en",ATY(AD0),"hY",ATX(AGK),"mn",ATY(ALb),"lw",ATY(AJW)],U3,0,Lz,[],0,0,0,0,["en",ATY(AD0),"lv",ATY(ALi),"cA",ATX(AKq),"bX",ATX(AHg),"dQ",ATX(AEU)],U0,0,B,[EE],0,0,0,0,["ce",ATX(AEC),"bP",ATX(AMD),"kW",ATX(AOc)],Pj,0,B,[EE],3,3,0,0,0,U1,0,B,[Pj],0,0,0,0,0,XG,0,B,[GQ],0,3,0,0,
0,EF,0,B,[],0,0,0,0,0,SQ,0,EF,[EE],0,0,0,0,0,Z6,0,B,[Bo],1,3,0,0,0,YQ,0,B,[Y],0,0,0,0,0,Q7,0,B,[Cy],4,3,0,0,0]);
$rt_metadata([GK,0,B,[Bo],1,3,0,0,0,Zn,0,GK,[],1,3,0,0,0,ACf,0,GK,[],1,3,0,0,0,Ui,0,Eq,[],0,0,0,0,["en",ATY(AD0),"lw",ATY(AJP)],O9,0,EA,[],0,0,0,0,["en",ATY(AD0),"lw",ATY(AJP)],AB0,0,B,[],0,3,0,0,0,Sw,0,B,[],3,3,0,0,0,SY,0,B,[BY],0,3,0,0,["be",ATY(AHl)],Gi,0,B,[],3,3,0,0,0,Tk,0,B,[Gi],0,3,0,0,["iS",AT0(ALl)],Tl,0,B,[Gi],0,3,0,0,["iS",AT0(AIS)],HI,0,B,[Cy,Cr],0,3,0,0,0,Jb,0,B,[],3,3,0,0,0,RK,0,B,[Jb],0,3,0,0,0,OC,0,B,[Jb],3,3,0,0,0,AAP,0,B,[OC],0,3,0,0,0,Sf,0,B,[Gi],0,3,0,0,["iS",AT0(AL7)],Se,0,B,[DT],0,3,0,
0,["co",ATY(AQi)],Sd,0,B,[DT],0,3,0,0,["co",ATY(ANo)],Sg,0,B,[Gi],0,3,0,0,["iS",AT0(ALA)],MC,0,B,[],0,3,0,0,0,Q8,0,B,[],0,3,0,0,0,BD,0,B,[],1,0,0,0,["b9",AT0(Hi),"cb",AT1(Hr),"ht",ATX(AFN),"L",ATY(APy),"bK",ATY(APx),"fa",ATX(AQr),"ec",ATX(IA)],UD,0,B,[],3,3,0,0,0,Vp,0,B,[UD],0,3,0,0,0,XB,0,B,[Y],0,3,0,0,["j",ATY(AMa)],XC,0,B,[Y],0,3,0,0,["j",ATY(AHU)],Qx,0,B,[Y],0,3,0,0,["j",ATY(ALT)],CC,0,BD,[],0,0,0,LY,["d",AT0(AFa),"D",ATY(AFy)],Gk,0,B,[],0,0,0,0,0,Ie,0,BF,[],0,3,0,0,0,ADb,0,B,[],1,3,0,0,0,Wz,0,B,[BY],0,
3,0,0,["be",ATY(AMT)],ABe,0,B,[Bo],3,3,0,0,0,TJ,0,B,[BY],0,3,0,0,["be",ATY(AMv)],RG,0,CC,[],0,0,0,0,["d",AT0(AEG),"D",ATY(AN5)],W$,0,CC,[],0,0,0,0,["d",AT0(AGm)],PO,0,CC,[],0,0,0,0,["d",AT0(AFI)],SR,0,CC,[],0,0,0,0,["d",AT0(AEM),"D",ATY(AMF)],Fc,0,CC,[],0,0,0,0,["d",AT0(APR)],BW,0,BD,[],1,0,0,0,["d",AT0(AQ0),"bQ",ATX(AOW),"D",ATY(AJz)],ACP,0,BW,[],0,0,0,0,["bl",ATZ(AOn),"b9",AT0(AHG),"cb",AT1(AGf),"D",ATY(AEJ)],BR,0,BD,[],0,0,0,0,["d",AT0(AIu),"L",ATY(AMy),"bK",ATY(AKr),"D",ATY(ANd),"ec",ATX(AGa)],It,0,BR,[],
0,0,0,0,["d",AT0(AMg),"D",ATY(ANE)],Dt,0,It,[],0,0,0,0,["d",AT0(AGP),"L",ATY(ANm)],Mw,0,Dt,[],0,0,0,0,["d",AT0(AMs),"D",ATY(APF)],VB,0,Dt,[],0,0,0,0,["d",AT0(AFt),"D",ATY(AO2)],Ra,0,Dt,[],0,0,0,0,["d",AT0(AF9),"D",ATY(ARg)],Te,0,Dt,[],0,0,0,0,["d",AT0(AEh),"D",ATY(ANT)],F7,0,BR,[],0,0,0,0,["d",AT0(AEz),"b9",AT0(AKM),"cb",AT1(AN9),"bK",ATY(AKl),"fa",ATX(AMB),"ec",ATX(AQt)]]);
$rt_metadata([AC3,0,B,[Bo],1,3,0,0,0,Go,0,B,[],1,0,0,0,0,Q,0,Go,[],1,0,0,OH,["c_",ATX(AFv),"eG",ATX(AEY),"iX",ATX(AOS),"gP",ATX(AQo)],Zb,0,Q,[],0,0,0,0,["i",ATY(CL),"c_",ATX(CH),"eG",ATX(AHB),"iX",ATX(APl),"cP",ATX(ALI),"gP",ATX(AHP)],IK,0,Bt,[],0,3,0,0,0,DN,0,BD,[],1,0,0,0,["bK",ATY(AN$),"D",ATY(APJ),"ec",ATX(AK7)],CN,0,DN,[],0,0,0,0,["d",AT0(AEk)],EQ,0,CN,[],0,0,0,0,["d",AT0(AFd)],CD,0,DN,[],0,0,0,0,["d",AT0(AEy)],Ek,0,CN,[],0,0,0,0,["d",AT0(AKS),"L",ATY(ARj)],VO,0,CN,[],0,0,0,0,["d",AT0(AQR),"b9",AT0(ALB)],W,
0,B,[],1,0,0,0,0,C0,0,BF,[],0,3,0,0,0,MO,0,Go,[DP],0,0,0,0,["cP",ATX(ALM)],N_,0,BD,[],0,0,0,0,["d",AT0(AJ2),"D",ATY(AMw)],Ws,0,B,[DP,Cy],0,3,0,0,0,MD,0,BR,[],0,0,0,0,0,Qm,0,BR,[],0,0,0,0,["d",AT0(AE$),"L",ATY(AMe),"D",ATY(AFP),"bK",ATY(AFu)],Dj,0,BR,[],0,0,0,0,["d",AT0(AHr),"i",ATY(AH5),"bK",ATY(AE4),"L",ATY(AOH),"D",ATY(AHD)],IH,0,Dj,[],0,0,0,0,["i",ATY(AJA)],Y2,0,BW,[],0,0,0,0,["bl",ATZ(AJ3)],DZ,0,BW,[],0,0,0,0,["bl",ATZ(Mf),"bK",ATY(AMA)],OI,0,BR,[],0,0,0,0,["L",ATY(AKQ),"d",AT0(AD$),"bK",ATY(AFF),"D",ATY(APq)],Ea,
0,BW,[],0,0,0,0,["bQ",ATX(AJJ),"bl",ATZ(AIH),"b9",AT0(AHo),"cb",AT1(AJR),"bK",ATY(APg)],ADm,0,BW,[],0,0,0,0,["bl",ATZ(AD3)],X1,0,BW,[],0,0,0,0,["bl",ATZ(AEq)],E0,0,BR,[],0,0,0,0,["L",ATY(AQs),"d",AT0(AMf),"bK",ATY(AJ4),"D",ATY(ANn)],WR,0,E0,[],0,0,0,0,0,Tq,0,E0,[],0,0,0,0,0,XN,0,CD,[],0,0,0,0,["d",AT0(AGt)],PD,0,CD,[],0,0,0,0,["d",AT0(ALo)],Ft,0,CD,[],0,0,0,0,["d",AT0(AOF),"L",ATY(APW)],Pb,0,Ft,[],0,0,0,0,["d",AT0(AJM),"L",ATY(ALQ)],EZ,0,CD,[],0,0,0,0,["d",AT0(ARe)],M1,0,EZ,[],0,0,0,0,["d",AT0(AI_)],Rx,0,CD,
[],0,0,0,0,["d",AT0(AQD)],Qy,0,Ft,[],0,0,0,0,["d",AT0(AFQ)],Uk,0,EZ,[],0,0,0,0,["d",AT0(AES)],Ry,0,DN,[],0,0,0,0,["d",AT0(AQ5),"b9",AT0(AOT)],Oj,0,DN,[],0,0,0,0,["d",AT0(AMC),"b9",AT0(AEe)],Ex,0,B,[],1,0,0,0,0,XQ,0,CN,[],0,0,0,0,["d",AT0(AET)],VJ,0,Ek,[],0,0,0,0,["d",AT0(ALk)],O0,0,EQ,[],0,0,0,0,["d",AT0(AN_)],Qs,0,CN,[],0,0,0,0,["d",AT0(AMu)],TD,0,Ek,[],0,0,0,0,["d",AT0(AE2)],Rb,0,EQ,[],0,0,0,0,["d",AT0(AOq)],JS,0,BD,[],4,0,0,0,["d",AT0(AKp),"D",ATY(AJm)],ZE,0,BD,[],0,0,0,0,["d",AT0(AFr),"D",ATY(AFE)],Oe,0,
BD,[],0,0,0,0,["d",AT0(AJC),"D",ATY(ARa)]]);
$rt_metadata([Wx,0,BD,[],4,0,0,0,["d",AT0(AM7),"D",ATY(AGi)],V6,0,BD,[],0,0,0,0,["d",AT0(AMc),"D",ATY(AD1)],Nc,0,BD,[],0,0,0,0,["d",AT0(AF$),"D",ATY(AIj)],ADd,0,BR,[],0,0,0,0,["d",AT0(AQI),"L",ATY(AFH),"ht",ATX(ALW),"D",ATY(AFG)],Y$,0,BR,[],4,0,0,0,["d",AT0(AL8),"L",ATY(AN2),"ht",ATX(ADX),"D",ATY(AQZ)],ACY,0,BD,[],4,0,0,0,["d",AT0(AJ8),"D",ATY(AId)],ABb,0,BD,[],0,0,0,0,["d",AT0(AMb),"D",ATY(AH0)],XY,0,BD,[],0,0,0,0,["d",AT0(AJc),"D",ATY(AGl)],GJ,0,BR,[],0,0,0,0,["d",AT0(AEX),"L",ATY(ANj),"D",ATY(ANG)],AC4,0,
GJ,[],0,0,0,0,["d",AT0(AGr),"b9",AT0(APB),"cb",AT1(AEH),"bK",ATY(ALc)],AAm,0,GJ,[],0,0,0,0,["d",AT0(AKG)],N$,0,FW,[Hx],0,3,0,0,["lI",AT1(AHQ),"kJ",AT0(AFw),"hE",ATY(AFY),"md",ATZ(AOV)],RA,0,BW,[],0,0,0,0,["bl",ATZ(AGN),"b9",AT0(AFn),"cb",AT1(AIh),"bK",ATY(AIT)],XX,0,BW,[],0,0,0,0,["bl",ATZ(AKO)],M7,0,BW,[],0,0,0,0,["bl",ATZ(AOd)],GI,0,B,[],4,0,0,ANR,0,Mo,0,BW,[],0,0,0,0,["bl",ATZ(AOi)],Kt,0,BR,[],0,0,0,0,["L",ATY(AMr),"d",AT0(AGj),"b9",AT0(AIQ),"cb",AT1(AGU),"bK",ATY(AEE),"D",ATY(AO6)],KM,0,BR,[],0,0,0,0,["L",
ATY(AFX),"d",AT0(AEi),"b9",AT0(AMM),"cb",AT1(AOb),"bK",ATY(AGO),"D",ATY(AMX)],DC,0,BW,[],0,0,0,0,["bl",ATZ(ANH),"b9",AT0(ALJ),"cb",AT1(AFW),"bK",ATY(ANs)],US,0,Ex,[],0,0,0,0,["hk",ATY(AF7),"s$",ATZ(ANA)],UT,0,Ex,[],0,0,0,0,["hk",ATY(AOu),"s$",ATZ(AQj)],AB$,0,B,[],0,0,0,0,0,Yi,0,B,[],0,0,0,0,0,Kq,0,W,[],0,0,0,0,["B",ATX(AAu)],Ju,0,W,[],0,0,0,0,["B",ATX(AA4)],AB3,0,W,[],0,0,0,0,["B",ATX(AN4)],ACw,0,W,[],0,0,0,0,["B",ATX(AO8)],ACz,0,W,[],0,0,0,0,["B",ATX(AHs)],Ki,0,W,[],0,0,0,0,["B",ATX(Zd)],K2,0,Ki,[],0,0,0,0,
["B",ATX(Z3)],ADO,0,W,[],0,0,0,0,["B",ATX(AIP)],Mb,0,K2,[],0,0,0,0,["B",ATX(XW)],AAI,0,Mb,[],0,0,0,0,["B",ATX(AK8)],AAY,0,W,[],0,0,0,0,["B",ATX(AGH)],Zw,0,W,[],0,0,0,0,["B",ATX(AK5)],Zl,0,W,[],0,0,0,0,["B",ATX(AQn)],ACC,0,W,[],0,0,0,0,["B",ATX(ALS)],ADW,0,W,[],0,0,0,0,["B",ATX(AEb)],AB_,0,W,[],0,0,0,0,["B",ATX(AJh)],ABU,0,W,[],0,0,0,0,["B",ATX(ANN)],ACR,0,W,[],0,0,0,0,["B",ATX(AGE)],Yz,0,W,[],0,0,0,0,["B",ATX(AG3)],Yc,0,W,[],0,0,0,0,["B",ATX(AQg)],ACg,0,W,[],0,0,0,0,["B",ATX(AD4)],ACq,0,W,[],0,0,0,0,["B",ATX(AKb)],ZU,
0,W,[],0,0,0,0,["B",ATX(AHd)],AA3,0,W,[],0,0,0,0,["B",ATX(AIm)],ADw,0,W,[],0,0,0,0,["B",ATX(AKf)],ACn,0,W,[],0,0,0,0,["B",ATX(APt)]]);
$rt_metadata([AAj,0,W,[],0,0,0,0,["B",ATX(AM4)],ZS,0,W,[],0,0,0,0,["B",ATX(ALK)],ADS,0,W,[],0,0,0,0,["B",ATX(ANX)],IV,0,W,[],0,0,0,0,["B",ATX(AA0)],ACV,0,IV,[],0,0,0,0,["B",ATX(ALv)],AAM,0,Kq,[],0,0,0,0,["B",ATX(AFk)],ZN,0,Ju,[],0,0,0,0,["B",ATX(AID)],Zp,0,W,[],0,0,0,0,["B",ATX(AKs)],ZJ,0,W,[],0,0,0,0,["B",ATX(AP6)],AAz,0,W,[],0,0,0,0,["B",ATX(AHT)],AAJ,0,W,[],0,0,0,0,["B",ATX(AD5)],Zs,0,B,[],4,0,0,0,0,Y0,0,B,[],4,3,0,0,0,Ne,0,B,[],0,3,0,0,0,ACj,0,B,[],0,3,0,0,0,AAe,0,B,[],4,3,0,0,0,T5,0,EF,[EE],0,0,0,0,0,Q_,
0,EF,[EE],0,0,0,0,0,Y_,0,B,[DT],0,3,0,0,0,UN,0,B,[DT],0,0,0,0,["co",ATY(AHx)],VN,0,Q,[],0,0,0,0,["i",ATY(AHz)],VL,0,Q,[],0,0,0,0,["i",ATY(AEw)],Oo,0,Q,[],0,0,0,0,["i",ATY(AKj),"cP",ATX(AIr)],Ov,0,Q,[],0,0,0,0,["i",ATY(ANL)],Ot,0,Q,[],0,0,0,0,["i",ATY(AOh)],Ou,0,Q,[],0,0,0,0,["i",ATY(AKN)],Oy,0,Q,[],0,0,0,0,["i",ATY(AG7)],Oz,0,Q,[],0,0,0,0,["i",ATY(ADY)],Ow,0,Q,[],0,0,0,0,["i",ATY(AIx)],Ox,0,Q,[],0,0,0,0,["i",ATY(AKP)],OA,0,Q,[],0,0,0,0,["i",ATY(APG)],OB,0,Q,[],0,0,0,0,["i",ATY(AGx)],On,0,Q,[],0,0,0,0,["i",ATY(ARn)],O3,
0,Q,[],0,0,0,0,["i",ATY(AIB)],Ol,0,Q,[],0,0,0,0,["i",ATY(AGw)],Om,0,Q,[],0,0,0,0,["i",ATY(AH_)],Or,0,Q,[],0,0,0,0,["i",ATY(AJE)],Ok,0,Q,[],0,0,0,0,["i",ATY(APd)],Op,0,Q,[],0,0,0,0,["i",ATY(AFA)],Oq,0,Q,[],0,0,0,0,["i",ATY(AMW)],FA,0,Cj,[],12,0,0,SE,0,XI,0,B,[Y],0,3,0,0,0,Lv,0,B,[],3,3,0,0,0,SA,0,B,[Lv],4,3,0,0,0,Tj,0,B,[],32,0,0,ASX,0,Xb,0,B,[Y],0,3,0,0,0,SL,0,B,[Y],0,3,0,0,["j",ATY(ANw)],Je,0,B,[],0,3,0,0,0,AAH,0,B,[Bo],1,3,0,0,0,MW,0,F7,[],0,0,0,0,["b9",AT0(AHY),"cb",AT1(ARd),"fa",ATX(AGh)]]);
$rt_metadata([L5,0,Bt,[],0,3,0,0,0,PZ,0,B,[Y],0,3,0,0,0,PY,0,B,[Y],0,3,0,0,0,Ro,0,B,[Y],0,3,0,0,["j",ATY(AGe)],Yw,0,B,[],0,3,0,0,0,P1,0,B,[Y],0,3,0,0,["j",ATY(AQT)],YY,0,B,[],3,3,0,0,0,QU,0,B,[BY],0,3,0,0,["be",ATY(AD_)],R9,0,B,[Y],0,3,0,0,["j",ATY(AK9)],R7,0,B,[Y],0,3,0,0,["j",ATY(ANg)],Nd,0,B,[Bk],0,3,0,0,0,Sp,0,B,[Y],0,3,0,0,["j",ATY(AEt)],Ty,0,B,[Y],0,3,0,0,["j",ATY(AMI)],UL,0,B,[Lv],0,0,0,0,0,WG,0,B,[BY],0,3,0,0,["be",ATY(AGY)],Oh,0,B,[Y],0,3,0,0,["j",ATY(AGD)],Mv,0,B,[Bk],0,3,0,0,["s",ATX(AIO)],Ts,0,B,
[Bk],0,3,0,0,["s",ATX(AOU)],NF,0,B,[Y],0,3,0,0,["j",ATY(ALu)],Vs,0,B,[Y],0,3,0,0,["j",ATY(AIo)],SV,0,Q,[],0,0,0,0,["i",ATY(APP)],MB,0,Q,[],0,0,0,0,["i",ATY(AFi)],RS,0,Q,[],0,0,0,0,["i",ATY(AEZ)],RR,0,Q,[],0,0,0,0,["i",ATY(AHS)],Wf,0,Q,[],0,0,0,0,["i",ATY(AJs)],OT,0,Q,[],0,0,0,0,["i",ATY(APT)],N5,0,Q,[],0,0,0,0,["i",ATY(AMm)],QQ,0,Q,[],0,0,0,0,["i",ATY(ANQ)],Mu,0,Q,[],0,0,0,0,["i",ATY(AQV)],Mz,0,Q,[],0,0,0,0,["i",ATY(AGT)],NE,0,Q,[],0,0,0,0,["i",ATY(AP1)],Pf,0,Q,[],0,0,0,0,["i",ATY(AK2)],Pt,0,Q,[],0,0,0,0,["i",
ATY(ANh)],Tm,0,Q,[],0,0,0,0,["i",ATY(APH)],SB,0,Q,[],0,0,0,0,["i",ATY(AQx)],MJ,0,Q,[],0,0,0,0,["i",ATY(AGF)],LT,0,Q,[],0,0,0,0,["i",ATY(AMp)],RJ,0,LT,[],0,0,0,0,["i",ATY(AOI)],WA,0,B,[BY],0,3,0,0,["be",ATY(AIk)],WB,0,B,[BY],0,3,0,0,["be",ATY(AFz)],Ub,0,B,[],3,3,0,ASo,0,Sl,0,B,[Y],0,3,0,0,["j",ATY(AIc)],Rs,0,B,[Ik],0,3,0,0,["rD",ATX(AOm)],T9,0,B,[BY],0,3,0,0,["be",ATY(AQz)],ACH,0,B,[],0,0,0,0,0,T3,0,B,[BY],0,3,0,0,["be",ATY(AKv)],Ye,0,B,[Bo],1,3,0,0,0,PN,0,B,[BY],0,3,0,0,["be",ATY(AOa)],ACc,0,B,[],3,3,0,0,0,AAO,
0,B,[Fm],0,3,0,0,0]);
$rt_metadata([Vo,0,B,[],0,3,0,0,0,AAx,0,B,[],3,3,0,0,0,NX,0,B,[D4],0,3,0,0,0,AAq,0,B,[],0,3,0,0,0,YK,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.N0=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","null","false","true","Either src or dest is null","dark","light","darcula","unknown theme: ","provided result is not an array","bad model","text",".cpp",".cc",".cxx",".hpp",".c",".h",
".java","java",".js","js",".activity","activity","cpp","mermaid","/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncFullParseFile","asyncParseFile","asyncParseFirstLines","/Model::parseFullFile","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","/Model::iterativeParsing","asyncIterativeParsing","[",", ","]","/","\n","...","\\n","Consolas","  ","Set editor font to: ",", ascent+descent = ",", lineHeight = ",
", caretHeight = ","topBase(font, lineHeight) = "," ","\r","opening file ","highlight at (",") does not match code model","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaProxy.parseViewport","deleteDiffModel","keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","#606366","#2B2B2B","#A4A3A3","#323232","#616161","#393B40","#DFE1E5","#484A4A","#294436","#385570","#303C47","#4B5059",
"#1E1F22","#A1A3AB","#26282E","#43454A","#283541","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","Illegal argument javaObject instanceof ","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","WebGraphics::ctor finish",".","FontDesk::FontDesk iSize != size: ","italic","normal","oblique","onPaste: item.type = ",", item.kind = ","pixel shader error: ","vertex shader error: ","----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  outColor = texture(sDiffuse, textureUV);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            // D2D and JsCanvas(alpha=true) comparison:\n            //    - rgb is different\n            //    - alpha is identical\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBgColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 textRGB = texture(sDiffuse, textureUV).rgb;\n  vec3 mixColor = mix(uBgColor.rgb, uColor.rgb, textRGB);\n  // if (dot(textRGB, textRGB) == 0.0) outColor = uBgColor; else\n  outColor = vec4(textRGB * 0.0 + mixColor * 1.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uBaseline;\nuniform vec4 uScaleHExp;\nin vec2 outScreenPos;\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  float sX = uScaleHExp.x, sY = uScaleHExp.y;\n  float H = uSc"
+"aleHExp.z;\n  float E = uScaleHExp.w;\n  float arg = (pt.x - uBaseline.x) * sX;\n  float sinA = sin(arg);\n  float vDist = abs(sinA * sY - uBaseline.y + pt.y);\n  float k = sqrt(1. + (1. - sinA * sinA) * sX * sX * sY * sY * 0.5);\n  float v = vDist / (H * k);\n  float alpha = pow(1. - clamp(v + .5, 0.0, 1.0), E);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","UTF-8","BYTE","FLOAT","ns-resize",
"ew-resize","Usages of ","No definition or usages","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","parser >","open ...","Development >","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","trying to display with unknown screen size and dpr",
"applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }"," name: ","File is too large: ",", size = ","Segoe UI","The last char in dst ","#BBBBBB","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","defaultText","keyword","#0033b3","field","#871094","string","#3C7C16","comma","error","#F93900","unused","#808080","number","#164FF1","method","#396179","showUsage","braceMatch","#FFEF28","#93D9D9","comment","annotation",
"#BBB529","type","#287BDE","operator","#5F8C8A","#D4E2FF","#000000","#818594","#080808","#A9B7C6","#344134","#40332B","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#3B514D","#3C3F41","#4B6EAF","#787878","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","#CF8E6D","#C77DBB","#6AAB73","#F75464","#6F737A","#2AACB8","#56A8F5","#7A7E85","#B3AE60","#2E436E","#2E426D","#4D4E51","nwse-resize","nesw-resize","toolbar size is unknown","Illegal language: ","/Viewport parsed in ","/Model::onFileIterativeParsed",
"/First lines parsed in ","/File structure parsed in ","Expected "," ints to write, but "," written","Int","Iter","VP","Resolve","Rep","/Resolved in ","readClipboardText error: ","navigator.clipboard is undefined","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero."," ints to read, but "," read","Current Version: ","Last Parsed Version: ","Unknown scope type: ","Unexpected type: ","Unexpected ref node type: ","Is","In","Lower","Upper",
"ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters",
"CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions",
"PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns",
"SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA",
"YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn",
"Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","DEF","DECL","writeClipboardText error: ","Verdana","JetBrains Mono"]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AFT(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var AXI=Long_add;var JT=Long_sub;var ALC=Long_mul;var AXJ=Long_div;var AXK=Long_rem;var AXL=Long_or;var XR=Long_and;var AXM=Long_xor;var AXN=Long_shl;var AXO=Long_shr;var ATm=Long_shru;var AXP=Long_compare;var AG8=Long_eq;var AXQ=Long_ne;var ARZ=Long_lt;var AXR=Long_le;var AXS=Long_gt;var ARX=Long_ge;var AXT=Long_not;var ASM=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(ASb);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=T7.prototype;c.create=c.x_;c=T6.prototype;c.create=c.AX;c=TM.prototype;c.create=c.x_;c=Po.prototype;c.registerDocumentHighlightProvider=c.y7;c.getModel=c.E6;c.getProperty=c.CK;c.getText=c.zc;c.onDidChangeModel=c.HA;c.revealPosition=c.EP;c.focus=c.De;c.setReadonly=c.Ar;c.setPosition=c.FA;c.setFontSize=c.Dx;c.setFontFamily=c.Ap;c.revealLine=c.Kr;c.getPosition=c.Ir;c.revealLineInCenter=c.B4;c.setTheme=c.KN;c.setModel=c.zC;c.executeOnWorker=c.Bv;c.registerDefinitionProvider=c.GJ;c.registerEditorOpener
=c.Hc;c.registerReferenceProvider=c.Hy;c.dispose=c.EF;c.registerDeclarationProvider=c.Jv;c.setText=c.D6;c=EU.prototype;c.getPositionAt=c.A5;c.getText=c.E9;c.getOffsetAt=c.D2;c.dispose=c.A3;Object.defineProperty(c,"language",{get:c.Iw});Object.defineProperty(c,"uri",{get:c.Du});c=VC.prototype;c.setRightModel=c.BG;c.setFontFamily=c.Ji;c.setLeftModel=c.GA;c.setTheme=c.zX;c.getRightModel=c.KO;c.focus=c.Fc;c.getLeftModel=c.GH;c.setReadonly=c.zS;c.setFontSize=c.Fe;c=Uc.prototype;c.f=c.mu;c=Xy.prototype;c.f=c.mu;c
=Yq.prototype;c.createEntityReference=c.Cf;c.getElementById=c.Gk;c.createTextNode=c.FY;c.hasChildNodes=c.D4;c.querySelectorAll=c.BT;c.removeChild=c.Ic;c.cloneNode=c.zU;c.createComment=c.Kg;c.insertBefore=c.CO;c.getElementsByTagNameNS=c.IE;c.hasAttributes=c.Fr;c.normalize=c.Ku;c.hasChildNodesJS=c.Kd;c.getElementsByTagName=c.Jq;c.appendChild=c.An;c.createAttributeNS=c.GP;c.dispatchEvent=c.JR;c.replaceChild=c.AV;c.createElementNS=c.Dc;c.createCDATASection=c.In;c.querySelector=c.Fp;c.createElement=c.Hq;c.isSupported
=c.Ip;c.importNode=c.C_;c.removeEventListener=c.C1;c.createAttribute=c.JU;c.createDocumentFragment=c.y5;c.createProcessingInstruction=c.B$;c.addEventListener=c.Hn;Object.defineProperty(c,"nodeName",{get:c.Am});Object.defineProperty(c,"documentElement",{get:c.EQ});Object.defineProperty(c,"childNodes",{get:c.H0});Object.defineProperty(c,"prefix",{get:c.Dk,set:c.KH});Object.defineProperty(c,"implementation",{get:c.IT});Object.defineProperty(c,"textContent",{get:c.Kq,set:c.FW});Object.defineProperty(c,"parentNode",
{get:c.Gh});Object.defineProperty(c,"nextSibling",{get:c.EA});Object.defineProperty(c,"nodeType",{get:c.HN});Object.defineProperty(c,"doctype",{get:c.Eq});Object.defineProperty(c,"localName",{get:c.Jl});Object.defineProperty(c,"nodeValue",{get:c.D7,set:c.J5});Object.defineProperty(c,"firstChild",{get:c.JB});Object.defineProperty(c,"lastChild",{get:c.Hx});Object.defineProperty(c,"previousSibling",{get:c.z1});Object.defineProperty(c,"namespaceURI",{get:c.BA});Object.defineProperty(c,"attributes",{get:c.Dt});Object.defineProperty(c,
"ownerDocument",{get:c.BM});c=Zg.prototype;c.removeEventListener=c.BV;c.dispatchEvent=c.CX;c.addEventListener=c.GI;c=Sk.prototype;c.f=c.mu;c=U_.prototype;c.dispose=c.C4;c=AAL.prototype;c.get=c.Jr;Object.defineProperty(c,"length",{get:c.IK});c=Ps.prototype;c.f=c.be;c=QM.prototype;c.f=c.be;c=NG.prototype;c.f=c.be;c=U8.prototype;c.onAnimationFrame=c.Fv;c=U7.prototype;c.f=c.mu;c=U5.prototype;c.handleEvent=c.b5;c=Su.prototype;c.f=c.be;c=VY.prototype;c.handleEvent=c.b5;c=VZ.prototype;c.handleEvent=c.b5;c=V0.prototype;c.handleEvent
=c.b5;c=V1.prototype;c.handleEvent=c.b5;c=AC7.prototype;c.handleEvent=c.b5;c=AC8.prototype;c.handleEvent=c.b5;c=AC9.prototype;c.handleEvent=c.b5;c=AC$.prototype;c.handleEvent=c.b5;c=AC_.prototype;c.handleEvent=c.b5;c=ADa.prototype;c.handleEvent=c.b5;c=ADJ.prototype;c.handleEvent=c.b5;c=ADK.prototype;c.handleEvent=c.b5;c=ADL.prototype;c.handleEvent=c.b5;c=ADM.prototype;c.handleEvent=c.b5;c=TV.prototype;c.handleEvent=c.b5;c=W1.prototype;c.f=c.be;c=W2.prototype;c.f=c.be;c=Nz.prototype;c.accept=c.J6;c=WU.prototype;c.f
=c.be;c=WT.prototype;c.f=c.be;c=Wa.prototype;c.f=c.be;c=V_.prototype;c.f=c.be;c=WP.prototype;c.handleEvent=c.b5;c=QP.prototype;c.f=c.be;c=Mn.prototype;c.f=c.be;c=P9.prototype;c.f=c.be;c=My.prototype;c.onTimer=c.rD;c=Mi.prototype;c.onTimer=c.rD;c=SX.prototype;c.f=c.be;c=WS.prototype;c.f=c.be;c=SY.prototype;c.f=c.be;c=Wz.prototype;c.f=c.be;c=TJ.prototype;c.f=c.be;c=QU.prototype;c.f=c.be;c=WG.prototype;c.f=c.be;c=WA.prototype;c.f=c.be;c=WB.prototype;c.f=c.be;c=Rs.prototype;c.onTimer=c.rD;c=T9.prototype;c.f=c.be;c
=T3.prototype;c.f=c.be;c=PN.prototype;c.f=c.be;})();
$rt_exports.main();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);
export const newEditor = self.editorFactory;
export const newTextModel = self.modelFactory;
export const newCodeDiff = self.diffFactory;
