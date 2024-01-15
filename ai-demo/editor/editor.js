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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.gv=f;}
function $rt_cls(cls){return ABy(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return G3(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b9.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AN7(t);}
function $rt_throwableCause(t){return AOa(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ATU());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ATV(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ATW());}
function $rt_throwCCE(){}
var A=Object.create(null);
var L=$rt_throw;var BD=$rt_compare;var ATX=$rt_nullCheck;var E=$rt_cls;var P=$rt_createArray;var H$=$rt_isInstance;var ATY=$rt_nativeThread;var ATZ=$rt_suspending;var AT0=$rt_resuming;var AT1=$rt_invalidPointer;var C=$rt_s;var Bm=$rt_eraseClinit;var T=$rt_imul;var E4=$rt_wrapException;var AT2=$rt_checkBounds;var AT3=$rt_checkUpperBound;var AT4=$rt_checkLowerBound;var AT5=$rt_wrapFunction0;var AT6=$rt_wrapFunction1;var AT7=$rt_wrapFunction2;var AT8=$rt_wrapFunction3;var AT9=$rt_wrapFunction4;var F=$rt_classWithoutFields;var G
=$rt_createArrayFromData;var ASt=$rt_createCharArrayFromData;var AT$=$rt_createByteArrayFromData;var AT_=$rt_createShortArrayFromData;var FJ=$rt_createIntArrayFromData;var AUa=$rt_createBooleanArrayFromData;var AUb=$rt_createFloatArrayFromData;var AUc=$rt_createDoubleArrayFromData;var AGb=$rt_createLongArrayFromData;var ATS=$rt_createBooleanArray;var DX=$rt_createByteArray;var AUd=$rt_createShortArray;var B1=$rt_createCharArray;var Bx=$rt_createIntArray;var AUe=$rt_createLongArray;var AEl=$rt_createFloatArray;var AUf
=$rt_createDoubleArray;var BD=$rt_compare;var AUg=$rt_castToClass;var AUh=$rt_castToInterface;var AUi=Long_toNumber;var BL=Long_fromInt;var AUj=Long_fromNumber;var Dn=Long_create;var ACt=Long_ZERO;var AUk=Long_hi;var ZK=Long_lo;
function B(){this.$id$=0;}
function BA(a){return ABy(a.constructor);}
function AK3(a,b){return a!==b?0:1;}
function AF1(a){var b,c,d,e,f,g,h,i,j;b=Iz(a);if(!b)c=C(0);else{d=(((32-ND(b)|0)+4|0)-1|0)/4|0;e=B1(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=GV((b>>>g|0)&15,16);g=g-4|0;h=i;}c=G3(e);}j=new R;U(j);K(K(j,C(1)),c);return S(j);}
function Iz(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AKk(a){var b,c,d;if(!H$(a,DP)&&a.constructor.$meta.item===null){b=new U$;X(b);L(b);}b=AEs(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var AAs=F(0);
function ASj(b){ACJ();Yo();AAd();ADk();AAY();AB8();AD0();AA9();ZO();ACM();Yf();AC9();Yj();ACc();AB0();ABS();AAH();ZU();AAf();ABg();ABQ();YK();ADJ();$rt_globals.editorFactory=Bn(new T9,"create");$rt_globals.modelFactory=Bn(new T8,"create");$rt_globals.diffFactory=Bn(new TO,"create");}
var MX=F(0);
var Mn=F(0);
function VV(){var a=this;B.call(a);a.ko=null;a.fK=null;}
function ABy(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new VV;c.fK=b;d=c;b.classObject=d;}return c;}
function Hs(a){return a.fK.$meta.primitive?1:0;}
function HN(a){return ABy(a.fK.$meta.item);}
var Zm=F();
function Bn(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Cv(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Y3=F();
function AEs(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ABD(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ABD(d[e],c))return 1;e=e+1|0;}return 0;}
function F8(){var a=this;B.call(a);a.lV=null;a.rd=null;a.lO=0;a.mE=0;}
function AUl(){var a=new F8();X(a);return a;}
function AUm(a){var b=new F8();Bp(b,a);return b;}
function X(a){a.lO=1;a.mE=1;}
function Bp(a,b){a.lO=1;a.mE=1;a.lV=b;}
function AHQ(a){return a;}
function AN7(a){return a.lV;}
function AOa(a){var b;b=a.rd;if(b===a)b=null;return b;}
var DO=F(F8);
function AUn(){var a=new DO();AB3(a);return a;}
function AUo(a){var b=new DO();X4(b,a);return b;}
function AB3(a){X(a);}
function X4(a,b){Bp(a,b);}
var Bt=F(DO);
function ATV(a){var b=new Bt();AP6(b,a);return b;}
function AP6(a,b){Bp(a,b);}
var AAL=F(Bt);
var Cy=F(0);
var Cq=F(0);
var Ij=F(0);
function Bv(){var a=this;B.call(a);a.b9=null;a.hP=0;}
var AUp=null;var AUq=null;var AUr=null;function F9(){F9=Bm(Bv);APE();}
function AIL(){var a=new Bv();Yb(a);return a;}
function G3(a){var b=new Bv();IM(b,a);return b;}
function DV(a,b,c){var d=new Bv();L$(d,a,b,c);return d;}
function Yb(a){F9();a.b9=AUp;}
function IM(a,b){F9();L$(a,b,0,b.data.length);}
function L$(a,b,c,d){var e;F9();e=B1(d);a.b9=e;Da(b,c,e,0,d);}
function L1(b){var c;F9();c=AIL();c.b9=b;return c;}
function I(a,b){var c,d;if(b>=0){c=a.b9.data;if(b<c.length)return c[b];}d=new GR;X(d);L(d);}
function H(a){return a.b9.data.length;}
function Eu(a){return a.b9.data.length?0:1;}
function PW(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=H(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Da(a.b9,b,d,e,c);return;}}g=new BV;X(g);L(g);}
function TR(a,b,c){var d,e,f;if((c+H(b)|0)>H(a))return 0;d=0;while(d<H(b)){e=I(b,d);f=c+1|0;if(e!=I(a,c))return 0;d=d+1|0;c=f;}return 1;}
function J0(a,b){if(a===b)return 1;return TR(a,b,0);}
function DG(a,b){var c,d,e,f;if(a===b)return 1;if(H(b)>H(a))return 0;c=0;d=H(a)-H(b)|0;while(d<H(a)){e=I(a,d);f=c+1|0;if(e!=I(b,c))return 0;d=d+1|0;c=f;}return 1;}
function HU(a,b,c){var d,e,f,g,h;d=Z(0,c);if(b<65536){e=b&65535;while(true){f=a.b9.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Kc(b);h=Lv(b);while(true){f=a.b9.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function G9(a,b,c){var d,e,f,g,h;d=Ba(c,H(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b9.data[d]==e)break;d=d+(-1)|0;}return d;}f=Kc(b);g=Lv(b);while(true){if(d<1)return (-1);h=a.b9.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function PH(a,b,c){var d,e,f;d=Z(0,c);e=H(a)-H(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=H(b))break a;if(I(a,d+f|0)!=I(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AMu(a,b){return PH(a,b,0);}
function PT(a,b,c){var d,e;d=Ba(c,H(a)-H(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=H(b))break a;if(I(a,d+e|0)!=I(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AAo(a,b){return PT(a,b,H(a));}
function B9(a,b,c){var d,e;d=BD(b,c);if(d>0){e=new BV;X(e);L(e);}if(!d){F9();return AUq;}if(!b&&c==H(a))return a;return DV(a.b9,b,c-b|0);}
function D3(a,b){return B9(a,b,H(a));}
function P5(a,b,c){return B9(a,b,c);}
function Hn(a,b){var c,d,e,f,g,h;if(Eu(b))return a;if(Eu(a))return b;c=B1(H(a)+H(b)|0);d=c.data;e=0;f=0;while(f<H(a)){g=e+1|0;d[e]=I(a,f);f=f+1|0;e=g;}g=0;while(g<H(b)){h=e+1|0;d[e]=I(b,g);g=g+1|0;e=h;}return L1(c);}
function UI(a,b,c){var d,e,f,g;d=new R;U(d);e=H(a)-H(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=H(b)){K(d,c);f=f+(H(b)-1|0)|0;break a;}if(I(a,f+g|0)!=I(b,g))break;g=g+1|0;}BX(d,I(a,f));}f=f+1|0;}K(d,D3(a,f));return S(d);}
function RT(a){var b,c;b=0;c=H(a)-1|0;a:{while(b<=c){if(I(a,b)>32)break a;b=b+1|0;}}while(b<=c&&I(a,c)<=32){c=c+(-1)|0;}return B9(a,b,c+1|0);}
function AFZ(a){return a;}
function E3(a){var b,c,d,e,f;b=a.b9.data;c=B1(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function D7(b){var c;F9();c=new R;U(c);return S(Bl(c,b));}
function BE(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(H(c)!=H(a))return 0;d=0;while(d<H(c)){if(I(a,d)!=I(c,d))return 0;d=d+1|0;}return 1;}
function Gj(a){var b,c,d,e;a:{if(!a.hP){b=a.b9.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hP=(31*a.hP|0)+e|0;d=d+1|0;}}}return a.hP;}
function LG(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Ge;Bp(b,C(2));L(b);}AUs=1;d=new Q9;d.ka=P(CC,10);d.f_=(-1);d.eA=(-1);d.bm=(-1);e=new Gk;e.ew=1;e.bA=b;e.X=B1(H(b)+2|0);Da(E3(b),0,e.X,0,H(b));f=e.X.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.sd=g;e.fP=0;EO(e);EO(e);d.g=e;d.dr=0;d.lf=Xi(d,(-1),0,null);if(!C2(d.g)){b=new Ie;h=d.g;IS(b,C(3),h.bA,h.c0);L(b);}if(d.n4)d.lf.ec();b=Bz();h=new SA;h.it=(-1);h.ky=(-1);h.w4=d;h.uO=d.lf;h.iM=a;h.it=0;g=H(a);h.ky=g;e=new UN;i=h.it;j=d.f_;k=d.eA+1|0;l=d.bm+1|0;e.hu
=(-1);m=j+1|0;e.pd=m;e.dB=Bx(m*2|0);f=Bx(l);e.jq=f;G_(f,(-1));if(k>0)e.k7=Bx(k);G_(e.dB,(-1));W8(e,a,i,g);h.ck=e;e.e9=1;n=0;m=0;if(!H(a)){f=P(Bv,1);f.data[0]=C(3);}else{while(true){l=H(h.iM);if(!Ys(h))l=h.ky;e=h.ck;if(e.d9>=0&&Z8(e)==1){e=h.ck;e.d9=Ix(e);if(Ix(h.ck)==AB7(h.ck)){e=h.ck;e.d9=e.d9+1|0;}g=h.ck.d9;g=g<=l&&Mw(h,g)?1:0;}else g=Mw(h,h.it);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Bw(b,P5(a,m,ADy(h)));m=ZR(h);n=g;}a:{Bw(b,P5(a,m,H(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(H(Bs(b,g)))break a;Fk(b,
g);}}if(g<0)g=0;f=Ho(b,P(Bv,g));}return f;}
function AH2(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Ba(H(a),H(b));e=0;while(true){if(e>=d){c=H(a)-H(b)|0;break a;}c=I(a,e)-I(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function APE(){AUp=B1(0);AUq=AIL();AUr=new ST;}
var F3=F(F8);
var GX=F(F3);
var AAn=F(GX);
var Ep=F();
function FS(){Ep.call(this);this.be=0;}
var AUt=null;var AUu=null;function APj(a){var b=new FS();ZD(b,a);return b;}
function ZD(a,b){a.be=b;}
function KT(b){return (Nj(ATF(20),b,10)).cO();}
function I5(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new C0;Bp(b,C(4));L(b);}d=H(b);if(0==d){b=new C0;Bp(b,C(5));L(b);}if(c>=2&&c<=36){a:{e=0;switch(I(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new C0;X(b);L(b);}b:{c:{while(f<d){h=f+1|0;i=OZ(I(b,f));if(i<0){j=new C0;k=B9(b,0,d);b=new R;U(b);K(K(b,C(6)),k);Bp(j,S(b));L(j);}if(i>=c){j=new C0;l=B9(b,0,d);b=new R;U(b);K(K(Bl(K(b,C(7)),c),C(8)),l);Bp(j,S(b));L(j);}g=T(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new C0;k=B9(b,0,d);b=new R;U(b);K(K(b,C(9)),k);Bp(j,S(b));L(j);}b=new C0;j=new R;U(j);Bl(K(j,C(10)),c);Bp(b,S(j));L(b);}
function Cs(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AUu===null){AUu=P(FS,256);c=0;while(true){d=AUu.data;if(c>=d.length)break a;d[c]=APj(c-128|0);c=c+1|0;}}}return AUu.data[b+128|0];}return APj(b);}
function AQO(a,b){if(a===b)return 1;return b instanceof FS&&b.be==a.be?1:0;}
function ND(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function HW(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AKd(a,b){b=b;return BD(a.be,b.be);}
function ACJ(){AUt=E($rt_intcls());}
function FW(){var a=this;B.call(a);a.M=null;a.I=0;}
function AUv(){var a=new FW();U(a);return a;}
function ATF(a){var b=new FW();FC(b,a);return b;}
function U(a){FC(a,16);}
function FC(a,b){a.M=B1(b);}
function Nj(a,b,c){return AAz(a,a.I,b,c);}
function AAz(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cu(a,b,b+1|0);else{Cu(a,b,b+2|0);f=a.M.data;g=b+1|0;f[b]=45;b=g;}a.M.data[b]=GV(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=T(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cu(a,b,b+i|0);if(e)e=b;else{f=a.M.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.M.data;b=e+1|0;f[e]=GV($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ABr(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BD(c,0.0);if(!d){if(1.0/c===Infinity){Cu(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cu(a,b,b+4|0);e=a.M.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cu(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cu(a,b,b+8|0);d=b;}else{Cu(a,b,b+9|0);e=a.M.data;d=b+1|0;e[b]=45;}e=a.M.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AUw;ABh(c,f);d=f.kF;g=f.ki;h=f.oh;i=1;j=1;if(h)j=2;k=9;l=AO5(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Z(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cu(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.M.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.M.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.M.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.M.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AO5(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function BX(a,b){return a.mf(a.I,b);}
function WY(a,b,c){Cu(a,b,b+1|0);a.M.data[b]=c;return a;}
function I$(a,b){var c,d;c=a.M.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.M=Nx(a.M,d);}
function S(a){return DV(a.M,0,a.I);}
function WH(a,b,c,d){return a.lK(a.I,b,c,d);}
function MR(a,b,c,d,e){var f,g,h,i;Cu(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.M.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function HY(a,b){return a.kL(b,0,b.data.length);}
function Cu(a,b,c){var d,e,f,g;d=a.I;e=d-b|0;a.hH((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.M.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.I=a.I+(c-b|0)|0;}
var Hx=F(0);
var R=F(FW);
function K(a,b){var c;c=a.I;if(b===null)b=C(11);L5(a,c,b);return a;}
function CX(a,b){L5(a,a.I,b);return a;}
function Bl(a,b){Nj(a,b,10);return a;}
function FX(a,b){var c,d,e,f,g,h,i,j;c=a.I;d=1;if(AR7(b,ACt)){d=0;b=ASU(b);}a:{if(HT(b,BL(10))<0){if(d)Cu(a,c,c+1|0);else{Cu(a,c,c+2|0);e=a.M.data;f=c+1|0;e[c]=45;c=f;}a.M.data[c]=GV(ZK(b),10);}else{g=1;h=BL(1);i=Lp(BL(-1),BL(10));b:{while(true){j=ALI(h,BL(10));if(HT(j,b)>0){j=h;break b;}g=g+1|0;if(HT(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cu(a,c,c+g|0);if(d)f=c;else{e=a.M.data;f=c+1|0;e[c]=45;}while(true){if(AHd(j,ACt))break a;e=a.M.data;c=f+1|0;e[f]=GV(ZK((Lp(b,j))),10);b=Yr(b,j);j=Lp(j,BL(10));f=c;}}}return a;}
function X5(a,b){BX(a,b);return a;}
function G$(a,b){L5(a,a.I,!b?C(12):C(13));return a;}
function ADm(a,b,c){var d,e,f,g,h,i;d=BD(b,c);if(d<=0){e=a.I;if(b<=e){if(d){f=e-c|0;a.I=e-(c-b|0)|0;g=0;while(g<f){h=a.M.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new GR;X(i);L(i);}
function VF(a,b){var c,d,e,f;if(b>=0){c=a.I;if(b<c){c=c-1|0;a.I=c;while(b<c){d=a.M.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new GR;X(f);L(f);}
function AJ_(a,b,c,d,e){MR(a,b,c,d,e);return a;}
function AG8(a,b,c,d){WH(a,b,c,d);return a;}
function YL(a){return a.I;}
function Jf(a){return S(a);}
function AKh(a,b){I$(a,b);}
function AKN(a,b,c){WY(a,b,c);return a;}
function L5(a,b,c){var d,e,f;if(b>=0&&b<=a.I){a:{if(c===null)c=C(11);else if(Eu(c))break a;I$(a,a.I+H(c)|0);d=a.I-1|0;while(d>=b){a.M.data[d+H(c)|0]=a.M.data[d];d=d+(-1)|0;}a.I=a.I+H(c)|0;d=0;while(d<H(c)){e=a.M.data;f=b+1|0;e[b]=I(c,d);d=d+1|0;b=f;}}return a;}c=new GR;X(c);L(c);}
var Fn=F(GX);
var ABJ=F(Fn);
function AUx(a){var b=new ABJ();AF9(b,a);return b;}
function AF9(a,b){Bp(a,b);}
var AAb=F(Fn);
function AUy(a){var b=new AAb();AGl(b,a);return b;}
function AGl(a,b){Bp(a,b);}
var Bo=F(0);
function JG(b){return b;}
var RH=F(0);
var T9=F();
function AIp(a,b){var c;if(!Yn())b=$rt_globals.Promise.reject(new $rt_globals.Error("This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled"));else{c=new Ue;c.ob=b;b=new $rt_globals.Promise(Bn(c,"f"));}return b;}
var ABi=F();
var OG=F(0);
var T8=F();
function AKZ(a,b,c,d){var e,f,g;e=new EU;f=ABP(b);b=GP(c,null);g=AQM(f,b,ABI(d));e.ds=g;g.li=e;e.k3=c;e.kd=d;return e;}
var AAD=F();
var SV=F(0);
var TO=F();
function AKa(a,b){var c;if(!Yn())b=$rt_globals.Promise.reject(new $rt_globals.Error("This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled"));else{c=new XA;c.nl=b;b=new $rt_globals.Promise(Bn(c,"f"));}return b;}
var ZE=F();
var KR=F();
var AUz=null;var AUA=null;function FL(){if(AUz===null)AUz=ALD(AUB,0);return AUz;}
function Ec(){if(AUA===null)AUA=ALD(AUC,0);return AUA;}
function ASM(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KY(b)&&(e+f|0)<=KY(d)){a:{b:{if(b!==d){g=HN(BA(b));h=HN(BA(d));if(g!==null&&h!==null){if(g===h)break b;if(!Hs(g)&&!Hs(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fK;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ABD(n.constructor,o)?1:0)){J2(b,c,d,e,j);b=new Id;X(b);L(b);}j=j+1|0;k=m;}J2(b,c,d,e,f);return;}if(!Hs(g))break a;if(Hs(h))break b;else break a;}b=new Id;X(b);L(b);}}J2(b,c,
d,e,f);return;}b=new Id;X(b);L(b);}b=new BV;X(b);L(b);}d=new Ge;Bp(d,C(14));L(d);}
function Da(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KY(b)&&(e+f|0)<=KY(d)){J2(b,c,d,e,f);return;}b=new BV;X(b);L(b);}
function J2(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Eb(){return Long_fromNumber(new Date().getTime());}
var ACv=F();
var GQ=F(0);
var ST=F();
var BV=F(Bt);
var ABo=F();
function KY(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AUD());}return b.data.length;}
function AB6(b,c){if(b===null){b=new Ge;X(b);L(b);}if(b===E($rt_voidcls())){b=new BF;X(b);L(b);}if(c>=0)return AQe(b.fK,c);b=new XN;X(b);L(b);}
function AQe(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Ge=F(Bt);
var Id=F(Bt);
function CS(){B.call(this);this.kh=0;}
var AUE=null;var AUF=null;var AUG=null;var AUH=null;var AUI=null;var AUJ=null;var AUK=null;var AUL=null;var AUM=null;var AUN=null;function AQW(a){var b=new CS();Z3(b,a);return b;}
function Z3(a,b){a.kh=b;}
function NI(b){var c,d;c=AUJ.data;if(b>=c.length)return AQW(b);d=c[b];if(d===null){d=AQW(b);AUJ.data[b]=d;}return d;}
function Wv(b){var c,d;c=new Bv;d=B1(1);d.data[0]=b;IM(c,d);return c;}
function LL(b){return b>=65536&&b<=1114111?1:0;}
function Cr(b){return (b&64512)!=55296?0:1;}
function CO(b){return (b&64512)!=56320?0:1;}
function WK(b){return !Cr(b)&&!CO(b)?0:1;}
function G6(b,c){return Cr(b)&&CO(c)?1:0;}
function Eg(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Kc(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Lv(b){return (56320|b&1023)&65535;}
function EH(b){return Gd(b)&65535;}
function Gd(b){if(AUH===null){if(AUK===null)AUK=ABZ();AUH=AAi((AUK.value!==null?$rt_str(AUK.value):null));}return SG(AUH,b);}
function Ej(b){return F_(b)&65535;}
function F_(b){if(AUG===null){if(AUL===null)AUL=ACK();AUG=AAi((AUL.value!==null?$rt_str(AUL.value):null));}return SG(AUG,b);}
function SG(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BD(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function Ug(b,c){if(c>=2&&c<=36){b=OZ(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function OZ(b){var c,d,e,f,g,h,i,j,k,l;if(AUF===null){if(AUM===null)AUM=AAq();c=(AUM.value!==null?$rt_str(AUM.value):null);d=AOb(E3(c));e=Jh(d);f=Bx(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+MY(d)|0;j=j+MY(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AUF=f;}g=AUF.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BD(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function GV(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function F5(b){var c;if(b<65536){c=B1(1);c.data[0]=b&65535;return c;}return ASt([Kc(b),Lv(b)]);}
function Ch(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&WK(b&65535))return 19;if(AUI===null){if(AUN===null)AUN=ADS();d=(AUN.value!==null?$rt_str(AUN.value):null);e=P(Nd,16384);f=e.data;g=DX(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<H(d)){m=J1(I(d,l));if(m==64){l=l+1|0;m=J1(I(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|T(c,J1(I(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=J1(I(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AHY(k,k+i|0,LF(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AHY(k,k+i|0,LF(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AUI=C3(e,j);}e=AUI.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.r3)o=p+1|0;else{c=d.pV;if(b>=c)return d.qb.data[b-c|0];c=p-1|0;}}return 0;}
function I2(b){a:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function F0(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ch(b)!=16?0:1;}
function Pw(b){switch(Ch(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Ra(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Pw(b);}return 1;}
function Yo(){AUE=E($rt_charcls());AUJ=P(CS,128);}
function ABZ(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ACK(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AAq(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ADS(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function FP(b){var c;BM(b);c=new Va;c.mM=b;return c;}
var Rq=F(0);
function Pq(){var a=this;B.call(a);a.g9=null;a.bw=null;}
function Nv(a){return a.g9.d$;}
function QG(a,b){var c,d;a:{c=Nv(a);b=Ce(b);d=(-1);switch(Gj(b)){case 3075958:if(!BE(b,C(15)))break a;d=2;break a;case 102970646:if(!BE(b,C(16)))break a;d=0;break a;case 1441429116:if(!BE(b,C(17)))break a;d=1;break a;default:}}b:{switch(d){case 0:break;case 1:LV(c);break b;case 2:FU(c);break b;default:c=new R;U(c);K(K(c,C(18)),b);$rt_globals.console.info($rt_ustr(S(c)));break b;}J4(c);}}
function V6(b,c,d){var e,f,g,h,i,j,k;if(!((b?1:0)?1:0))$rt_globals.console.info("provider result is undefined");else if(!($rt_globals.Array.isArray(b)?1:0))Li(d,C(19));else{e=P(Jj,b.length);f=e.data;g=0;h=f.length;while(g<h){i=b[g];j=new Jj;k=ABI(i.uri);j.f2=new L8;j.hf=k;XW(i.range,j.f2);f[g]=j;g=g+1|0;}c.j(e);}}
function P6(a,b){var c,d,e,f;c=a.bw;b=b-1|0;if(b>0){d=b-1|0;e=c.A;d=T(d,e);f=c.W;if(d<f)DR(c,T(b-2|0,e));else if((d-f|0)>=Cz(c))DR(c,b>Cb(c.c.f)?FN(c):T(b+1|0,c.A)-Cz(c)|0);}}
function Uq(a,b){a.bw.dx=YN(b);}
function ABk(){$rt_globals.console.info("FATAL: WebGL is not enabled in the browser");}
function AOx(a,b){var c,d;c=a.bw.cu.l4;d=new Pk;d.uY=a;d.uZ=b;return FP(Ff(c,d));}
function ANq(a,b,c){var d,e;d=new Kv;e=Jl(b);b=new MP;b.uE=c;KE(d,e);d.rm=b;return FP(Ff(a.bw.cu.jV,d));}
function APT(a,b){var c,d;c=a.bw.c;d=AQM(ABP(b),c.hj,c.c_);Gl(a.bw,d);}
function AHg(a,b){var c,d;c=a.bw;d=b.column-1|0;Cl(c,b.lineNumber-1|0,d,0);}
function ANJ(a){UJ(a.g9);}
function AIA(a,b){P6(a,b);}
function AIw(a){return M2(Dg(a.bw.c.f));}
function AJM(a){var b;b=a.bw.c;return HE(b.r,b.o);}
function AHe(a,b){QG(a,b);}
function AMZ(a,b,c){var d,e;d=new FV;e=Jl(b);b=new OI;b.rL=c;Xr(d,e,b);return FP(Ff(a.bw.cu.mB,d));}
function APt(a,b,c){var d,e;d=new JB;e=Jl(b);b=new WN;b.oT=c;KE(d,e);d.vi=b;return FP(Ff(a.bw.cu.mi,d));}
function AQv(a){return E7(a.bw.c);}
function AFl(a,b){var c;c=a.bw;b=Ce(b);return $rt_ustr(B_(c.c.jK,b));}
function AHL(a,b){var c;c=b;b=a.bw;c=c-1|0;if(c>0)DR(b,T(b.A,(c-(Cz(b)/(b.A*2|0)|0)|0)-1|0));}
function AKG(a){var b,c,d,e,f,g,h,i;b=a.g9;c=b.k0;if(c){$rt_globals.cancelAnimationFrame(c);b.k0=0;}d=$rt_globals.window;e=b.jX;d.removeEventListener("resize",Bn(e,"handleEvent"));b.mb.disconnect();f=b.e8;e=f.iw;if(e!==null){e.hT=KW(e,e.hT);e.jw=KW(e,e.jw);e.jn=KW(e,e.jn);e.mo=0;e.lA=0;f.iw=null;}Is(f.cZ);f=b.hi;if(f!==null){e=f.lg;if(e!==null){g=e.pz.data;c=g.length;h=0;while(h<c){e=g[h];d=e.os;i=e.ou;e=e.ot;d.removeEventListener($rt_ustr(i),Bn(e,"handleEvent"));h=h+1|0;}f.lg=null;}b.hi=null;}b=b.jm;c=0;while
(c<b.gn.length){b.gn[c].terminate();e=b.gn;f=null;c;e[c]=f;c=c+1|0;}}
function AGG(a,b){var c;b=Cv(b,"f");c=new MD;c.sh=b;return FP(Ff(a.bw.cu.l8,c));}
function ANk(a,b){Dx(a.bw,Ce(b),a.bw.dS);}
function AIn(a,b){var c;c=b;b=a.bw;Dx(b,b.fl,c);}
function APp(a,b){var c;if(b instanceof EU){Gl(a.bw,b.ds);return;}c=new BF;Bp(c,C(20));L(c);}
function AQH(a,b,c){var d,e,f,g;b=Ce(b);if(c===null)d=null;else{d=P(Bv,c.length);e=d.data;f=0;g=e.length;while(f<g){e[f]=Ce(c[f]);f=f+1|0;}}c=new Sk;c.rI=a;c.rJ=b;c.rK=d;return new $rt_globals.Promise(Bn(c,"f"));}
function AMq(a,b,c){var d,e;d=new FV;e=Jl(b);b=new V_;b.uc=c;Xr(d,e,b);return FP(Ff(a.bw.cu.kD,d));}
function AGS(a,b){P6(a,b.lineNumber);}
function AQi(a,b){Uq(a,b);}
var Qr=F(0);
function EU(){var a=this;B.call(a);a.ds=null;a.kd=null;a.k3=null;}
function E7(b){var c;c=b.li;if(c!==null)return c;c=new EU;c.ds=b;b.li=c;c.kd=null;c.k3=null;return c;}
function AQ$(a){var b;b=a.kd;if(b===null)b=J$(a.ds.c_);return b;}
function AJ5(a){var b;b=a.ds.f;FI(b.f7);DI(b.cW);DI(b.cL);b.iQ=0;b.b0=0;b.cJ=Xz(b);}
function ALK(a){var b;b=a.k3;if(b===null)b=$rt_ustr(a.ds.hj);return b;}
function AQY(a,b){var c;c=b;return AEI(Pm(a.ds.f,c));}
function AMj(a){return M2(Dg(a.ds.f));}
function AEK(a,b){var c,d,e,f,g,h;c=a.ds.f;d=b.lineNumber-1|0;e=b.column-1|0;f=0;g=0;a:{while(g<d){h=c.v.data;f=f+h[g].z|0;g=g+1|0;if(g>=h.length)break a;f=f+1|0;}}return f+e|0;}
var Sm=F(0);
function VE(){var a=this;B.call(a);a.dj=null;a.qa=null;}
function PF(a,b){var c,d;a:{c=Ce(b);d=(-1);switch(Gj(c)){case 3075958:if(!BE(c,C(15)))break a;d=2;break a;case 102970646:if(!BE(c,C(16)))break a;d=0;break a;case 1441429116:if(!BE(c,C(17)))break a;d=1;break a;default:}}b:{switch(d){case 0:break;case 1:LV(a.dj);break b;case 2:FU(a.dj);break b;default:$rt_globals.console.info("unknown theme: "+b);break b;}J4(a.dj);}}
function P8(a,b){var c,d;c=a.dj;d=YN(b);c.x.dx=d;c.w.dx=d;}
function AP3(a){return E7(a.dj.w.c);}
function AMD(a){UJ(a.qa);}
function ALv(a,b){var c;if(!(b instanceof EU)){c=new BF;Bp(c,C(20));L(c);}c=a.dj;b=b.ds;Gl(c.w,b);}
function AGQ(a,b){var c,d;c=a.dj;b=Ce(b);d=c.x;Dx(d,b,d.dS);c=c.w;Dx(c,b,c.dS);}
function AHR(a,b){PF(a,b);}
function AOS(a,b){var c,d;c=b;b=a.dj;d=b.x;Dx(d,d.fl,c);b=b.w;Dx(b,b.fl,c);}
function ALt(a,b){var c;if(!(b instanceof EU)){c=new BF;Bp(c,C(20));L(c);}c=a.dj;b=b.ds;Gl(c.x,b);}
function AIJ(a){return E7(a.dj.x.c);}
function AHx(a,b){P8(a,b);}
var Th=F(0);
var CV=F(0);
function AQn(b){var c;c=new Qq;c.pz=b;return c;}
function C5(b,c){if(b!==null)b.eY();return c;}
var OU=F(0);
function H8(){var a=this;B.call(a);a.j6=0;a.lT=0;a.k2=0;}
var AUO=0;function Is(a){AUO=AUO-1|0;}
function Kb(a,b,c){return GE(a,b)+c|0;}
function Ry(){var a=this;H8.call(a);a.hM=null;a.dh=null;a.m5=null;}
function Fv(a){var b,c,d;b=a.dh;c=a.lT;d=a.k2;b.clearRect(0.0,0.0,c,d);}
function R4(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.dh;d="center";c.textAlign=d;break a;case 2:c=a.dh;d="right";c.textAlign=d;break a;default:break a;}d=a.dh;c="left";d.textAlign=c;}}
function CM(a,b){M0(a,b.nD);}
function M0(a,b){var c;if(a.m5!==b){c=a.dh;a.m5=b;c.font=b;}}
function Ev(a,b,c,d){var e,f,g;e=a.dh;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function GE(a,b){var c;c=$rt_ustr(b);return a.dh.measureText(c).width;}
function Yn(){var b;b=(YA()).getContext("2d").measureText("");return ("fontBoundingBoxAscent" in b?1:0)&&("fontBoundingBoxDescent" in b?1:0)?1:0;}
function AFy(){return {alpha:false};}
var AAy=F();
var Ht=F(0);
function Ue(){B.call(this);this.ob=null;}
function AIe(a,b,c){var d,e;b=Cv(b,"f");c=Cv(c,"f");d=a.ob;e=new Pu;e.oe=b;e.of=d;Zc(e,c,ABH(d),X_(d));}
var ABp=F(0);
function ABP(b){var c,d;c=b.length;d=new Nu;d.ub=b;return ACw(c,d);}
var ZT=F();
function YA(){return (Fe()).createElement("canvas");}
function GP(b,c){if((b?1:0)?1:0)c=Ce(b);return c;}
function AMw(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
function W1(){var a=this;B.call(a);a.c_=null;a.f=null;a.li=null;a.hj=null;a.o1=null;a.gg=null;a.io=null;a.dn=null;a.qw=null;a.o=0;a.r=0;a.gW=0;a.hr=null;a.f0=null;a.jK=null;a.kZ=null;a.ed=0;a.gi=0;a.gA=0;a.hB=ACt;a.tB=ACt;a.uS=ACt;a.mX=0;a.xo=0;a.c7=0;a.hY=0.0;a.eD=0;}
function AQM(a,b,c){var d=new W1();Yk(d,a,b,c);return d;}
function AR3(a,b,c){var d=new W1();ADC(d,a,b,c);return d;}
function Yk(a,b,c,d){ADC(a,b.oN,c,d);}
function ADC(a,b,c,d){var e,f,g,h,i;b=b.data;a.o1=AFs();e=new TU;e.eu=P(Kq,16);e.ep=0;e.db=(-1);a.gg=e;a.hr=null;a.f0=Bz();a.jK=Ke();a.kZ=Bz();a.ed=1;a.gi=1;a.gA=1;a.c7=0;a.hY=0.0;a.eD=0;a.c_=d;a.hj=c;c=new Rw;f=b.length;g=P(CQ,Z(1,f));if(!f)g.data[0]=YX(C(3));h=g.data;i=0;while(i<f){h[i]=YX(b[i]);i=i+1|0;}d=new Pn;e=new Kn;PK(e);d.eb=e;c.dY=d;c.cW=Ke();c.cL=Ke();c.f7=Bz();if(h.length){c.v=g;c.cJ=Xz(c);a.f=c;return;}c=new BF;X(c);L(c);}
function DT(a){var b;b=a.hj;if(b===null){b=a.c_;if(b===null)b=C(21);else{b=b.eL;b=b===null?C(21):!DG(b,C(22))&&!DG(b,C(23))&&!DG(b,C(24))&&!DG(b,C(25))&&!DG(b,C(26))&&!DG(b,C(27))?(DG(b,C(28))?C(29):DG(b,C(30))?C(31):!DG(b,C(32))?C(21):C(33)):C(34);}}return b;}
function FM(a){var b;b=a.c_;return b===null?null:b.g0;}
function GS(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.gi=3;a.gA=3;a.ed=3;c=CF(b[0]);d=Eh(b[1]);if((CF(b[2])).data[0]==4){e=G3(Eh(b[3]));Ed(a.jK,C(35),e);K7(a.f,c,d);}else if(b.length<5)K7(a.f,c,d);else{f=CF(b[3]);g=f.data;h=Eh(b[4]);N0(a.f,c,d,f,h,0);Uf(a,Ir(f,g.length),LE(h));}if(a.eD){e=D_(a);i=JS(Eb(),a.hB);j=new R;U(j);K(FX(K(K(j,e),C(36)),i),C(37));$rt_globals.console.info($rt_ustr(S(j)));}e=a.io;if(e!==null)UY(e);}
function Ku(a){var b;Sy(a,Dp(a.o,a.r),GA(a.f,a.o,a.r));if(!(a.hr!==null&&!DF(a.f0))){b=a.r;if(b>0)Sy(a,Dp(a.o,b-1|0),GA(a.f,a.o,a.r-1|0));}}
function Sy(a,b,c){var d,e,f,g,h,i,j,k,l;L2(a);d=B_(a.f.cW,c);if(d!==null)c=d;a:{e=B_(a.f.cL,c);if(e!==null){a.hr=Le(a.f,c);c=BP(e);while(true){if(!BQ(c))break a;f=BS(c);Bw(a.f0,Le(a.f,f));}}}c=a.io;if(c!==null){g=b.V;h=b.bd;b=c.cu;f=DT(c.c);e=FM(c.c);i=(Cf(b.mi)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(Jx(b,f,e)){b=b.vi;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.c;e=new Sq;e.tm=c;e.tk=f;e.to=g;e.tn=h;c=c.hN;b=b.oT;f=E7(f);d=HE(h,g);l=JE();b=b.provideDocumentHighlights(f,d,l);f=new SX;f.sm=e;f.sl=c;LT(b,
f,c);}}}
function L2(a){a.hr=null;FI(a.f0);}
function Uf(a,b,c){var d,e,f,g,h;if(a.dn!==null){a.uS=Eb();d=a.f.b0;e=a.dn;f=new Pb;f.rB=a;g=P(B,3);h=g.data;h[0]=b;h[1]=c;b=Bx(1);b.data[0]=d;h[2]=b;D8(e,f,C(38),g);}}
function P3(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.io=b;a.dn=c;if(c===null){d=a.f.v.data;e=d.length;f=0;while(f<e){Tl(d[f]);f=f+1|0;}}else if(a.ed==1){a.hB=Eb();b=DT(a);e=BK(b,C(29));f=BK(b,C(33));d=Dg(a.f);g=d.data.length;h=!e?5120:10240;i=X$(b);if(f){j=a.dn;b=new Rp;b.ng=a;k=P(B,2);l=k.data;l[0]=d;d=Bx(1);d.data[0]=i;l[1]=d;Lw(j,b,0,C(39),k);a.ed=2;}else if(g<=h)JZ(a,d,i);else if(!e){Ww(a,LE(d),i);JZ(a,d,i);}else{Ww(a,LE(d),i);m=LE(d);c=a.dn;j=new P$;j.rD=a;k=P(B,2);l=k.data;l[0]=m;m=Bx(1);m.data[0]=i;l[1]=m;D8(c,
j,C(40),k);a.gi=2;JZ(a,d,i);}}}
function Ww(a,b,c){var d,e;d=a.dn;e=new VM;e.r1=a;D8(d,e,C(41),G(B,[b,FJ([c,250])]));a.gA=2;}
function JZ(a,b,c){var d,e,f,g;d=a.dn;e=new Nm;e.pq=a;f=P(B,2);g=f.data;g[0]=b;b=Bx(1);b.data[0]=c;g[1]=b;D8(d,e,C(39),f);a.ed=2;}
function D_(a){var b;b=a.c_;return b===null?C(3):UW(b);}
function In(a){var b,c,d,e,f,g;if(a.eD){b=D_(a);c=new R;U(c);K(K(c,b),C(42));$rt_globals.console.info($rt_ustr(S(c)));}b=DT(a);if(b===null)d=null;else{a:{e=(-1);switch(Gj(b)){case -1655966961:if(!BE(b,C(33)))break a;e=3;break a;case 3401:if(!BE(b,C(31)))break a;e=2;break a;case 98723:if(!BE(b,C(34)))break a;e=1;break a;case 3254818:if(!BE(b,C(29)))break a;e=0;break a;case 3556653:if(!BE(b,C(21)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(43);break b;case 2:d=C(44);break b;case 3:d=C(45);break b;case 4:d
=C(46);break b;default:d=null;break b;}d=C(47);}}if(d===null)UY(a.io);else{a.hB=Eb();if(!BE(d,C(45))){b=a.dn;f=new Tq;f.uF=a;g=P(B,1);g.data[0]=Dg(a.f);D8(b,f,d,g);}else{b=a.dn;c=new Tr;c.th=a;g=P(B,1);g.data[0]=Dg(a.f);Lw(b,c,0,d,g);}}}
function ACk(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(a.eD){b=D_(a);c=new R;U(c);K(K(c,b),C(48));$rt_globals.console.info($rt_ustr(S(c)));}b=DT(a);if(b!==null&&!BE(C(21),b)){if(BE(C(33),b)){In(a);G8(a.f);}else{c=a.f.cJ;d=Px(c,c.cT);if(d===null){LD(a);G8(a.f);return;}e=FJ([CT(d),CR(d),d.bJ.eF]);f=Dg(a.f);g=Bx(1);g.data[0]=X$(b);c=a.f.dY;if(c.fu===null){h=Bx(0);i=B1(0);}else{j=AQ5(AGv(d.ce,c.eb),d);Nl(j);h=j.jY;i=j.ke;}k=a.f.b0;d=a.dn;c=new Mr;c.tU=a;l=P(B,6);m=l.data;m[0]=f;m[1]=g;m[2]=e;e=Bx(1);e.data[0]=k;m[3]=e;m[4]
=h;m[5]=i;D8(d,c,C(49),l);}}else G8(a.f);}
function LD(a){var b;b=AQ5(a.f.dY,null);Nl(b);Uf(a,b.jY,b.ke);}
var Ym=F();
function J$(b){var c,d,e;if(b===null)return null;c=b.uM;if(c!==null)return c;c=b.g0;d=b.ii;e=b.eL;b=b;return APG($rt_ustr(c),$rt_ustr(d),$rt_ustr(e),b);}
function ABI(b){var c;if(!((b?1:0)?1:0))return null;c=b.javaPeer;if(c instanceof Ld)return c;return AR1(GP(b.scheme,null),GP(b.authority,null),GP(b.path,null),b);}
function APG(b,c,d,e){return {scheme:b,authority:c,path:d,javaPeer:e};}
function XA(){B.call(this);this.nl=null;}
function AH9(a,b,c){var d,e;b=Cv(b,"f");c=Cv(c,"f");d=a.nl;e=new QO;e.u9=b;e.u$=d;Zc(e,c,ABH(d),X_(d));}
var ADZ=F();
var DJ=F(0);
function Nu(){B.call(this);this.ub=null;}
function APN(a,b){var c,d;c=a.ub;d=b.be;return NI(c.charCodeAt(d)&65535);}
var X8=F(0);
function ACw(b,c){var d,e,f,g,h,i,j,k,l,m;d=P(Bv,8);e=DX(8);f=B1(16);g=0;h=0;i=0;while(true){j=BD(i,b);if(j>0)break;k=j>=0?10:(c.gw(Cs(i))).kh;if(k==10){d=ACy(DV(f,0,g),d,h);e=Uz(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Nx(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=ACy(DV(f,0,g),d,h);j=i+1|0;if(j<b&&(c.gw(Cs(j))).kh==10){e=Uz(1,e,h);i=j;}else e=Uz(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new Q$;d=Zp(d,h);if(m.length!=h)e=LF(e,h);c.oN=d;c.w9=e;return c;}
function AFX(b){var c,d;c=H(b);BM(b);d=new NK;d.sQ=b;return ACw(c,d);}
var ACP=F();
function Ce(b){return $rt_str(b);}
function Ld(){var a=this;B.call(a);a.g0=null;a.ii=null;a.eL=null;a.uM=null;}
function AR1(a,b,c,d){var e=new Ld();Yh(e,a,b,c,d);return e;}
function Yh(a,b,c,d,e){a.g0=b;a.ii=c;a.eL=d;a.uM=e;}
function UW(a){var b,c;b=a.eL;if(b===null)return C(3);c=AAo(b,C(50));return c==(-1)?a.eL:D3(a.eL,c+1|0);}
function AGB(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return BK(a.g0,c.g0)&&BK(a.ii,c.ii)&&BK(a.eL,c.eL)?1:0;}return 0;}
function Q$(){var a=this;B.call(a);a.oN=null;a.w9=null;}
var Mh=F(0);
var SF=F(0);
var D5=F(0);
var Yt=F();
function Fe(){return $rt_globals.window.document;}
function ALT(a){return a.E0();}
function AOW(a,b){return a.HJ($rt_str(b));}
function AOE(a,b){a.Dc($rt_str(b));}
function AGH(a,b){return a.BU($rt_str(b));}
function AEr(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AG2(a){return a.HN();}
function AOP(a,b,c){return a.F_($rt_str(b),$rt_str(c));}
function AJT(a,b,c,d){a.xB($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function AFn(a){return a.DX();}
function AM0(a){return !!a.Il();}
function APD(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function ALn(a){return a.DI();}
function AJo(a,b){a.FZ($rt_str(b));}
function ALV(a){return !!a.CQ();}
function ARi(a){return a.HY();}
function AKB(a){return $rt_ustr(a.zj());}
function AFc(a,b){return a.Ee(b?1:0);}
function AQP(a){return a.Ik();}
function AJl(a,b,c){return a.IW($rt_str(b),$rt_str(c));}
function ALe(a,b,c){return a.CN(b,c?1:0);}
function AQh(a,b,c){return !!a.He($rt_str(b),$rt_str(c));}
function AEu(a){return a.FM();}
function AI6(a){return $rt_ustr(a.JH());}
function AHb(a,b){return !!a.xW(b);}
function AIf(a,b){return a.KB($rt_str(b));}
function AJC(a,b,c){return a.EX($rt_str(b),$rt_str(c));}
function AKH(a){return a.Ak();}
function AFp(a,b){return a.HU($rt_str(b));}
function AId(a){return $rt_ustr(a.zB());}
function ANr(a){a.CH();}
function AEc(a,b){return a.I1($rt_str(b));}
function APu(a,b){return a.Dq($rt_str(b));}
function AFQ(a,b){return a.CG($rt_str(b));}
function APw(a){return $rt_ustr(a.AD());}
function AF2(a,b,c){return a.E5(b,c);}
function ANe(a,b){return a.zi(b);}
function AN1(a){return a.GS();}
function AMo(a,b,c){a.xi($rt_str(b),Cv(c,"handleEvent"));}
function AL4(a,b,c){return a.AE(b,c);}
function APn(a){return !!a.Ha();}
function AQU(a,b){return a.EQ($rt_str(b));}
function AL7(a,b,c,d){a.wO($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function AG4(a){return a.GX();}
function AGj(a,b,c){return a.Ec($rt_str(b),$rt_str(c));}
function AEW(a){return $rt_ustr(a.A5());}
function AQJ(a){return a.z5();}
function AMn(a){return a.Aq();}
function AET(a){return a.Hf();}
function AMp(a,b,c){a.xT($rt_str(b),Cv(c,"handleEvent"));}
function AGT(a,b){return a.Jr(b);}
function AIz(a,b){a.zG($rt_str(b));}
function AN9(a){return $rt_ustr(a.zq());}
var ACz=F(0);
function Ve(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C3(b,f+g|0);Da(c,0,d,f,g);return d;}
function Kr(b,c,d){Da(b,c,d,0,d.data.length);return d;}
function Rl(b,c,d){var e;if(c>0)Da(b,0,d,0,c);e=d.data.length;if(c<e)Da(b,c+1|0,d,c,e-c|0);return d;}
function AAg(b,c,d,e){var f;if(c>0)Da(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Da(b,d,e,c,f-d|0);}return e;}
function GW(b){var c;c=new Vp;c.rY=b;return c;}
function Zp(b,c){if(b.data.length!=c)b=C3(b,c);return b;}
function ACy(b,c,d){var e;e=c.data.length;if(e==d)c=C3(c,e*2|0);c.data[d]=b;return c;}
function Uz(b,c,d){var e;e=c.data.length;if(e==d)c=LF(c,e*2|0);c.data[d]=b;return c;}
function LE(b){return Nx(b,b.data.length);}
var YD=F();
function Nx(b,c){var d,e,f,g;b=b.data;d=B1(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function LF(b,c){var d,e,f,g;b=b.data;d=DX(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Ir(b,c){var d,e,f,g;b=b.data;d=Bx(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C3(b,c){var d,e,f,g;d=b.data;e=AB6(HN(BA(b)),c);f=Ba(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Zt(b){var c,d,e;if(b===null)return C(11);c=new R;U(c);CX(c,C(51));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)CX(c,C(52));K(c,e[d]);d=d+1|0;}CX(c,C(53));return S(c);}
function G_(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BF;X(f);L(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Y7(b,c,d,e){var f,g;if(c>d){e=new BF;X(e);L(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ZP(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AUP;e=P(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Ba(j,h+f|0);l=h+(2*f|0)|0;m=Ba(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.vJ(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ABs(b,c){return Ty(b,0,b.data.length,c);}
function Ty(b,c,d,e){var f,g,h,i,j;f=BD(c,d);if(f>0){g=new BF;X(g);L(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function AC5(){var a=this;B.call(a);a.bx=null;a.bo=null;a.c1=0;}
function AFs(){var a=new AC5();AQV(a);return a;}
function AGF(a){var b=new AC5();ALU(b,a);return b;}
function AQV(a){a.bx=new GD;a.bo=new GD;}
function ALU(a,b){a.bx=new GD;a.bo=new GD;HA(a,b);}
function HA(a,b){T6(a.bx,b.bx);T6(a.bo,b.bo);a.c1=b.c1;}
function KX(a,b,c){B0(a.bo,b,c);if(!a.c1)B0(a.bx,b,c);}
function PD(a,b){B0(a.bx,b,0);B0(a.bo,b+1|0,0);}
function Dy(a){if(RC(a.bx,a.bo)>0)return a.bo;return a.bx;}
function Fa(a){if(RC(a.bx,a.bo)<0)return a.bo;return a.bx;}
function ABA(a,b){var c,d,e,f;c=a.bx;d=c.D;e=a.bo;if(d==e.D&&c.Q==e.Q?1:0)return null;c=Dy(a);e=Fa(a);d=c.D;if(d<=b){f=BD(b,e.D);if(f<=0)return Cg(b<=d?c.Q:0,f>=0?e.Q:(-1));}return null;}
function C4(a){var b,c;b=a.bx;c=a.bo;return (b.D==c.D&&b.Q==c.Q?1:0)?0:1;}
function ACH(a,b){var c,d;if(!C4(a))return 0;c=Dy(a);d=Fa(a);return c.D<=b&&b<d.D?1:0;}
function TU(){var a=this;B.call(a);a.eu=null;a.ep=0;a.db=0;}
function Vc(a,b){var c,d,e;c=a.ep;d=a.eu;if(c==d.data.length)a.eu=C3(d,c+16|0);d=a.eu.data;e=a.ep;a.ep=e+1|0;d[e]=b;}
function RE(a){var b,c,d;b=a.db;c=a.ep-1|0;if(b==c)a.db=b-1|0;d=a.eu.data;a.ep=c;d[c]=null;}
var VG=F(0);
function AD6(a,b){var c;c=a.bW();while(c.cd()){b.j(c.bP());}}
var FG=F(0);
function UD(a){var b,c;b=new Si;c=new Qe;c.pT=a;b.tY=c;return b;}
function AJV(a,b){var c,d;c=a.bW();d=0;while(c.cd()){if(b.cn(c.bP())){c.kY();d=1;}}return d;}
var EA=F();
function DF(a){return a.cz()?0:1;}
function Ho(a,b){var c,d,e,f,g,h;c=b.data;d=a.k;e=c.length;if(e<d)b=AB6(HN(BA(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BP(a);while(BQ(f)){g=b.data;h=e+1|0;g[e]=BS(f);e=h;}return b;}
function AOr(a,b){var c;c=a.bW();while(c.cd()){if(BK(c.bP(),b)){c.kY();return 1;}}return 0;}
function Gm(a,b){var c,d;c=0;d=b.bW();while(d.cd()){if(!a.sA(d.bP()))continue;c=1;}return c;}
var J7=F(0);
var II=F(0);
function El(){EA.call(this);this.bN=0;}
function ANL(a,b){a.mC(a.cz(),b);return 1;}
function BP(a){var b;b=new Nq;b.gK=a;b.ml=a.bN;b.iH=a.cz();b.f3=(-1);return b;}
function AMR(a,b,c){var d,e;if(b>=0&&b<=a.cz()){if(c.dQ())return 0;d=c.bW();while(d.cd()){e=b+1|0;a.mC(b,d.bP());b=e;}return 1;}c=new BF;X(c);L(c);}
function APk(a,b,c){c=new D1;X(c);L(c);}
function JK(a,b){var c,d;c=a.cz();d=0;while(true){if(d>=c)return (-1);if(BK(b,a.lx(d)))break;d=d+1|0;}return d;}
function ALF(a,b){var c,d;if(!H$(b,II))return 0;c=b;if(a.k!=c.k)return 0;d=0;while(d<c.k){if(!BK(Bs(a,d),Bs(c,d)))return 0;d=d+1|0;}return 1;}
var DP=F(0);
var KQ=F(0);
function YH(){var a=this;El.call(a);a.cj=null;a.k=0;}
function Bz(){var a=new YH();AH_(a);return a;}
function AH_(a){a.cj=P(B,10);}
function IT(a,b){var c,d;c=a.cj.data.length;if(c<b){d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.cj=C3(a.cj,d);}}
function Bs(a,b){IG(a,b);return a.cj.data[b];}
function AMz(a){return a.k;}
function Bw(a,b){var c,d;IT(a,a.k+1|0);c=a.cj.data;d=a.k;a.k=d+1|0;c[d]=b;a.bN=a.bN+1|0;return 1;}
function Rz(a,b,c){var d,e,f;Pj(a,b);IT(a,a.k+1|0);d=a.k;e=d;while(e>b){f=a.cj.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cj.data[b]=c;a.k=d+1|0;a.bN=a.bN+1|0;}
function Fk(a,b){var c,d,e,f;IG(a,b);c=a.cj.data;d=c[b];e=a.k-1|0;a.k=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.bN=a.bN+1|0;return d;}
function Vn(a,b){var c;c=JK(a,b);if(c<0)return 0;Fk(a,c);return 1;}
function FI(a){Y7(a.cj,0,a.k,null);a.k=0;a.bN=a.bN+1|0;}
function Y8(a,b,c){var d,e,f,g,h,i;Pj(a,b);if(c.dQ())return 0;IT(a,a.k+c.cz()|0);d=c.cz();e=a.k;f=e-1|0;while(f>=b){g=a.cj.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.k=e+d|0;h=c.bW();i=0;while(i<d){g=a.cj.data;e=b+1|0;g[b]=h.bP();i=i+1|0;b=e;}a.bN=a.bN+1|0;return 1;}
function IG(a,b){var c;if(b>=0&&b<a.k)return;c=new BV;X(c);L(c);}
function Pj(a,b){var c;if(b>=0&&b<=a.k)return;c=new BV;X(c);L(c);}
function DY(a,b){var c;c=0;while(c<a.k){b.j(a.cj.data[c]);c=c+1|0;}}
var Kt=F(0);
function DA(){var a=this;B.call(a);a.kk=null;a.kv=null;}
function JY(){var a=this;DA.call(a);a.cy=0;a.bV=null;a.cw=0;a.wm=0.0;a.kT=0;}
function Ke(){var a=new JY();PK(a);return a;}
function AIH(a,b){return P(Gf,b);}
function PK(a){var b;b=ADq(16);a.cy=0;a.bV=P(Gf,b);a.wm=0.75;Uj(a);}
function ADq(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function DI(a){var b;if(a.cy>0){a.cy=0;b=a.bV;Y7(b,0,b.data.length,null);a.cw=a.cw+1|0;}}
function Uj(a){a.kT=a.bV.data.length*a.wm|0;}
function I6(a,b){return SZ(a,b)===null?0:1;}
function UE(a){var b;b=new Uk;b.rr=a;return b;}
function B_(a,b){var c;c=SZ(a,b);if(c===null)return null;return c.cD;}
function SZ(a,b){var c,d;if(b===null)c=R$(a);else{d=b.lZ();c=Qn(a,b,d&(a.bV.data.length-1|0),d);}return c;}
function Qn(a,b,c,d){var e;e=a.bV.data[c];while(e!==null&&!(e.i1==d&&Yv(b,e.cm))){e=e.ct;}return e;}
function R$(a){var b;b=a.bV.data[0];while(b!==null&&b.cm!==null){b=b.ct;}return b;}
function Jp(a){var b;if(a.kk===null){b=new O$;b.gL=a;a.kk=b;}return a.kk;}
function Ed(a,b,c){var d,e,f,g;if(b===null){d=R$(a);if(d===null){a.cw=a.cw+1|0;d=T$(a,null,0,0);e=a.cy+1|0;a.cy=e;if(e>a.kT)Ur(a);}}else{e=b.lZ();f=e&(a.bV.data.length-1|0);d=Qn(a,b,f,e);if(d===null){a.cw=a.cw+1|0;d=T$(a,b,f,e);e=a.cy+1|0;a.cy=e;if(e>a.kT)Ur(a);}}g=d.cD;d.cD=c;return g;}
function T$(a,b,c,d){var e,f;e=new Gf;Xw(e,b,null);e.i1=d;f=a.bV.data;e.ct=f[c];f[c]=e;return e;}
function Z_(a,b){var c,d,e,f,g,h,i,j;c=ADq(!b?1:b<<1);d=P(Gf,c);e=d.data;f=0;b=c-1|0;while(true){g=a.bV.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.i1&b;j=h.ct;h.ct=e[i];e[i]=h;h=j;}f=f+1|0;}a.bV=d;Uj(a);}
function Ur(a){Z_(a,a.bV.data.length);}
function Yv(b,c){return b!==c&&!b.bu(c)?0:1;}
function Rw(){var a=this;B.call(a);a.v=null;a.cJ=null;a.dY=null;a.cW=null;a.cL=null;a.f7=null;a.g4=null;a.b0=0;a.iQ=0;a.sV=0.0;}
function Xz(a){var b;b=UQ(a);return ACr(AP0(Jc(0,b,0),null,null));}
function BG(a,b){return a.v.data[b];}
function Cb(a){return a.v.data.length;}
function UQ(a){return EB(a,Cb(a));}
function Fm(a,b){return a.v.data[b].z;}
function ACR(a,b,c){var d,e,f,g,h;d=a.v;e=d.data;f=e[b];d=C3(d,e.length+1|0);e=d.data;a.v=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Dq(P(B$,0));a.v.data[b+1|0]=f;}else if(c==f.z){e[b]=f;e[b+1|0]=Dq(P(B$,0));}else{e=(Hw(f,c)).data;d=a.v.data;d[b]=e[0];d[b+1|0]=e[1];}E_(a,b,c,0,C(54));}
function KF(a,b){var c,d,e,f,g,h,i;c=a.v.data;d=c[b];e=c[b+1|0];f=Dq(Ve(d.l,e.l));g=a.v;h=g.data.length;if(b<h&&b>=0){i=P(CQ,h-1|0);c=i.data;Rl(g,b,i);c[b]=f;a.v=i;return;}d=new Bt;X(d);L(d);}
function MG(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.v.data;if(!(c<d[b].z?0:1)){d=(BG(a,b)).l.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<H(h.q)){f=I(h.q,g);break a;}g=g-H(h.q)|0;f=f+1|0;}f=0;}F9();h=new Bv;d=B1(1);d.data[0]=f;IM(h,d);E_(a,b,c,1,h);h=a.v.data[b];i=h.l;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=H(d[j].q);if(c<b)break;c=c-b|0;j=j+1|0;}}if(H(d[j].q)==1)h.l=Rl(i,j,P(B$,e-1|0));else{k=d[j];if(c<=0)l=Dz(D3(k.q,1),k.bX,k.bH);else if(c>=(H(k.q)-1|0)){l=new B$;m=k.q;Tp(l,B9(m,0,H(m)-
1|0),k.bX,k.bH);}else{i=B1(H(k.q)-1|0);n=i.data;b=0;while(b<c){n[b]=I(k.q,b);b=b+1|0;}b=n.length;while(c<b){m=k.q;e=c+1|0;n[c]=I(m,e);c=e;}l=Dz(G3(i),k.bX,k.bH);}d[j]=l;}h.z=h.z-1|0;D$(h);}else if(b!=(d.length-1|0)){E_(a,b,c,1,C(54));KF(a,b);}}
function XF(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Sb(a.v.data[b],c,e[0]);return;}g=f-1|0;d=(Hw(a.v.data[b],c)).data;h=d[0];i=d[1];d=a.v;j=C3(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.l.data;f=l.length;c=!f?0:H(l[f-1|0].q);Ma(h,h.l.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Eu(e[m])?YX(e[m]):Dq(P(B$,0));d[b+m|0]=k;m=m+1|0;}Ma(i,0,0,e[g]);d[b+g|0]=i;a.v=j;}
function VC(a,b){var c,d,e,f,g,h,i;c=Dy(b);d=Fa(b);e=c.D;if(e==d.D)return B9(EJ(a.v.data[e]),c.Q,d.Q);f=new R;U(f);b=a.v.data[c.D];e=c.Q;BX(CX(f,D3(EJ(b),e)),10);g=a.v.data;e=c.D+1|0;h=d.D;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;X5(CX(f,EJ(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.v.data[d.D];h=d.Q;CX(f,B9(EJ(b),0,h));return S(f);}b=new V5;X(b);L(b);}
function MS(a,b,c){var d;VX(a,b);d=Dy(b);E_(a,d.D,d.Q,1,c);}
function VX(a,b){var c,d,e,f,g,h,i;a:{c=Dy(b);d=Fa(b);e=c.D;if(e==d.D)FY(a.v.data[e],c.Q,d.Q);else{b=a.v.data[e];FY(b,c.Q,b.z);FY(a.v.data[d.D],0,d.Q);e=c.D+1|0;f=d.D;g=a.v;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=P(CQ,(h-f|0)+e|0);AAg(g,e,f,i);a.v=i;KF(a,c.D);break a;}b=new Bt;X(b);L(b);}b=new Bt;X(b);L(b);}}}
function GA(a,b,c){return Dp(b,FA(BG(a,b),c));}
function Wq(a,b){var c,d,e;c=0;d=0;while(true){e=a.v.data.length;if(c>=e)break;if((d+(BG(a,c)).z|0)>=b)return Cg(c,b-d|0);d=d+((BG(a,c)).z+1|0)|0;c=c+1|0;}return Cg(e,0);}
function EB(a,b){var c,d,e;c=0;d=a.v.data.length;e=0;while(e<b){c=c+Fm(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Le(a,b){return Lx(BG(a,b.V),b.bd);}
function Dg(a){var b,c,d,e,f,g,h,i,j;b=B1(UQ(a));c=b.data;d=a.v.data.length;e=0;f=0;while(e<d){g=a.v.data[e].l.data;h=g.length;i=0;while(i<h){j=g[i].q;PW(j,0,H(j),b,f);f=f+H(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function E_(a,b,c,d,e){var f,g,h,i,j,k;a:{a.b0=a.b0+1|0;f=a.f7;g=P(Gr,1);h=new Gr;h.dJ=b;h.dV=c;i=LG(e,C(54),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=Cg(b,c+H(i[0])|0);break a;}k=Cg((b+j|0)-1|0,H(i[j-1|0]));break a;}}k=Cg(b,c);}i=g.data;h.k6=k;h.mc=d;h.fr=e;i[0]=h;Bw(f,g);JD(a,b,c,d,e);}
function JD(a,b,c,d,e){var f;f=EB(a,b)+c|0;if(!d){Ov(a.cJ,f,H(e));Uc(a.dY,f,H(e));}else{V8(a.cJ,f,H(e));Ng(a.dY,f,H(e));}}
function M9(a,b){var c,d,e;c=LG(b.fr,C(54),(-1));if(b.mc){XF(a,b.dJ,b.dV,c);Ov(a.cJ,EB(a,b.dJ)+b.dV|0,H(b.fr));Uc(a.dY,EB(a,b.dJ)+b.dV|0,H(b.fr));}else{c=c.data;d=AFs();B0(d.bx,b.dJ,b.dV);e=c.length;if(e==1)B0(d.bo,b.dJ,b.dV+H(c[0])|0);else B0(d.bo,(b.dJ+e|0)-1|0,H(c[e-1|0]));VX(a,d);V8(a.cJ,EB(a,b.dJ)+b.dV|0,H(b.fr));Ng(a.dY,EB(a,b.dJ)+b.dV|0,H(b.fr));}return b.k6;}
function TD(a){return a.iQ==a.b0?0:1;}
function G8(a){a.iQ=a.b0;}
function Pm(a,b){var c,d,e,f,g;c=0;d=0;while(true){e=a.v.data;f=e.length;if(d>=f)break;g=e[d].z;if(b<=(c+g|0))return Dp(d,b-c|0);c=c+(g+1|0)|0;d=d+1|0;}return Dp(f,0);}
function Pr(a){var b,c,d;a.g4=Bx(a.v.data.length+1|0);b=0;while(b<a.v.data.length){c=a.g4.data;d=b+1|0;c[d]=(c[b]+(BG(a,b)).z|0)+1|0;b=d;}}
function Xg(a,b){var c,d,e;c=a.g4;if(c===null)return Pm(a,b);d=ABs(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;e=Dp(d,b-(d<0?0:a.g4.data[d])|0);if(e.bd>=(BG(a,e.V)).z){e.V=e.V+1|0;e.bd=0;}return e;}
var Pg=F(0);
var Ru=F(0);
var Re=F(0);
var Te=F(0);
var WJ=F(0);
var Ui=F(0);
var Zi=F();
function AMt(a,b,c){a.xT($rt_str(b),Cv(c,"handleEvent"));}
function AKc(a,b,c){a.xi($rt_str(b),Cv(c,"handleEvent"));}
function AI8(a,b,c,d){a.wO($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function AFv(a,b){return !!a.xW(b);}
function AHi(a,b,c,d){a.xB($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
var AAx=F();
function Yu(b){return Math.log(b);}
function ADY(b,c){return AK7(b,c);}
function AK7(b,c){return Math.pow(b,c);}
function Ba(b,c){if(b<c)c=b;return c;}
function Z(b,c){if(b>c)c=b;return c;}
function AQk(b,c){return Math.max(b,c);}
function GD(){var a=this;B.call(a);a.D=0;a.Q=0;}
function B0(a,b,c){a.D=b;a.Q=c;}
function T6(a,b){a.D=b.D;a.Q=b.Q;}
function RC(a,b){var c;c=BD(a.D,b.D);if(c)return c;return BD(a.Q,b.Q);}
function Kq(){var a=this;B.call(a);a.lc=null;a.jQ=null;}
function Ll(a){return a.lc.V;}
function Jb(a){return a.lc.bd;}
function CQ(){var a=this;B.call(a);a.l=null;a.z=0;a.fn=null;a.ef=null;a.dd=null;a.gG=null;a.fC=0;a.gI=0;a.g8=0;}
var AUQ=0;var AUR=0;var AUS=0;function YX(a){var b=new CQ();ABV(b,a);return b;}
function Dq(a){var b=new CQ();QP(b,a);return b;}
function ABV(a,b){var c;c=P(B$,1);c.data[0]=ZI(b);QP(a,c);}
function QP(a,b){var c,d,e,f;c=b.data;a.l=b;d=0;e=c.length;f=0;while(f<e){d=d+H(c[f].q)|0;f=f+1|0;}a.z=d;D$(a);}
function G5(a){return a.l.data.length;}
function KA(a,b){return a.l.data[b];}
function FA(a,b){return RG(a,GO(a,b));}
function RG(a,b){return b<=0?0:a.dd.data[b-1|0];}
function GO(a,b){var c,d,e,f;c=a.l.data.length;if(!c)return (-1);if(!(a.dd!==null&&!a.g8)){Wr(a);d=0;e=0;f=a.l.data.length;while(d<f){e=e+H(a.l.data[d].q)|0;a.dd.data[d]=e;d=d+1|0;}a.g8=0;}d=Ty(a.dd,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Lx(a,b){var c;c=a.l.data;if(!c.length)return null;return c[GO(a,b)];}
function FY(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.z){a.l=P(B$,0);D$(a);a.z=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.l.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=H(g[e].q);i=H(a.l.data[f].q);j=BD(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.l.data[f];if(!b&&c==H(k.q)?1:0){g=a.l;a.l=Rl(g,e,P(B$,g.data.length-1|0));a.z=a.z-d|0;D$(a);return;}a.l.data[e]=Dz(Hn(B9(k.q,0,b),D3(k.q,c)),k.bX,k.bH);}else{g=a.l.data;l=g[e];m=g[f];if(b){if(b!=
H(l.q))a.l.data[e]=Dz(B9(l.q,0,b),l.bX,l.bH);e=e+1|0;}if(c==H(m.q))f=f+1|0;else if(c)a.l.data[f]=Dz(D3(m.q,c),m.bX,m.bH);g=a.l;a.l=AAg(g,e,f,P(B$,(g.data.length-f|0)+e|0));}a.z=a.z-d|0;D$(a);}
function Hw(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return G(CQ,[Dq(P(B$,0)),a]);if(b>=a.z)return G(CQ,[a,Dq(P(B$,0))]);c=a.l;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=H(e[d].q);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return G(CQ,[Dq(Kr(c,0,P(B$,d))),Dq(Kr(c,d,P(B$,f-d|0)))]);h=e[d];e=Kr(c,0,P(B$,d+1|0));i=e.data;j=Kr(c,d,P(B$,f-d|0));c=j.data;i[d]=Dz(B9(h.q,0,b),h.bX,h.bH);c[0]=Dz(D3(h.q,b),h.bX,h.bH);return G(CQ,[Dq(e),Dq(j)]);}
function Sb(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.l.data;if(e>=f.length)break a;g=H(f[d].q);if(b<=g)break;b=b-g|0;d=e;}}Ma(a,d,b,c);}
function Ma(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Eu(d))return;e=a.l;f=e.data;g=f.length;if(!g){h=P(B$,1);h.data[0]=ZI(d);a.l=h;}else if(!b&&!c){h=P(B$,g+1|0);f=h.data;Da(e,0,h,1,g);f[0]=ZI(d);a.l=h;}else{i=f[b];if(c<=0)j=Dz(Hn(d,i.q),i.bX,i.bH);else if(c>=H(i.q))j=Dz(Hn(i.q,d),i.bX,i.bH);else{k=H(d);l=k+c|0;m=H(i.q)-c|0;e=B1(H(i.q)+k|0);h=e.data;n=0;while(n<c){h[n]=I(i.q,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=I(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=I(i.q,g+c|0);g=g+1|0;}j=Dz(G3(e),i.bX,i.bH);}f[b]=j;}a.z=a.z+
H(d)|0;D$(a);}
function Nk(a){var b,c,d,e,f,g;b=0;c=a.l.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Lt(f)){if(I(f.q,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function JX(a,b,c){var d,e,f,g,h,i,j;d=a.l.data.length;e=a.fn;if(!(e!==null&&e.data.length>=d)){a.fn=AEl(d);a.ef=Bx(d);a.fC=1;}Wr(a);if(!a.fC)AUR=AUR+1|0;else{f=0;g=0.0;AUQ=AUQ+1|0;h=0;while(h<d){i=c.data;j=a.l.data[h];f=f+H(j.q)|0;a.dd.data[h]=f;CM(b,i[IO(j)]);g=g+GE(b,j.q);a.fn.data[h]=g;a.ef.data[h]=g+0.5|0;h=h+1|0;}a.z=f;a.fC=0;a.g8=0;}}
function Wr(a){var b;b=a.dd;if(!(b!==null&&b.data.length>=a.l.data.length)){a.dd=Bx(a.l.data.length);a.g8=1;}}
function Tl(a){a.fC=1;a.gG=null;}
function D$(a){Tl(a);a.gI=1;a.g8=1;}
function R3(a,b,c,d){var e,f,g,h,i,j,k;if(a.gG===null)a.gG=P($rt_arraycls($rt_intcls()),a.l.data.length);e=a.gG.data[d];if(e===null){e=c.data;f=a.l.data[d];CM(b,e[IO(f)]);f=f.q;e=Bx(H(f)-1|0);c=E3(f);g=!d?0.0:a.fn.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;L$(f,c,0,k);h[i]=g+GE(b,f)+0.5|0;i=k;}a.gG.data[d]=e;}return e;}
function F4(a,b,c,d){var e,f,g,h,i;if(a.l.data.length&&b){if(!(!a.fC&&a.ef!==null))JX(a,c,d);if(b>=a.z)return a.ef.data[a.l.data.length-1|0];e=0;f=0;a:{while(true){g=a.l.data;if(f>=g.length)break a;h=e+H(g[f].q)|0;i=BD(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.ef.data[f];}return (R3(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function EC(a){var b,c,d;a:{b=a.l.data.length;if(b){c=a.ef.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Gn(a,b){var c;if(b>=a.z)return b+1|0;c=GO(a,b);return a.dd.data[c];}
function EJ(a){var b,c,d,e;b=new R;FC(b,a.z);c=a.l.data;d=c.length;e=0;while(e<d){CX(b,c[e].q);e=e+1|0;}return S(b);}
function AAd(){AUS=0;}
function Pn(){var a=this;B.call(a);a.fu=null;a.eb=null;}
function AGv(a,b){var c=new Pn();AIm(c,a,b);return c;}
function AIm(a,b,c){a.fu=b;a.eb=c;}
function Uc(a,b,c){var d;d=a.fu;if(d===null)return;QJ(a,d,b,c);}
function Ng(a,b,c){var d;d=a.fu;if(d===null)return;TH(a,d,b,c);}
function QJ(a,b,c,d){var e,f,g,h;e=b.dR.bW();while(e.cd()){Xn(a,e.bP(),c,d);}e=b.ei.bW();while(e.cd()){f=e.bP();g=new Tj;g.q5=a;DU(a,g,f,c,d);}h=b.fV.bW();while(h.cd()){e=h.bP();Xn(a,e.im,c,d);f=new Tk;f.nr=a;DU(a,f,e.je,c,d);}b=b.cf.bW();while(b.cd()){QJ(a,b.bP(),c,d);}}
function Xn(a,b,c,d){I8(a,b.dT,c,d);}
function DU(a,b,c,d,e){var f,g;a:{if(c instanceof FT){f=c.gl;g=new XC;g.oo=a;g.om=b;g.ol=d;g.on=e;DY(f,g);}else{if(!(c instanceof Ib)){if(!(c instanceof Iv))break a;f=c;DU(a,b,f.hs,d,e);DU(a,b,f.gC,d,e);return;}g=c.gz;f=new XD;f.wk=a;f.wj=b;f.wi=d;f.wh=e;DY(g,f);}}if(c!==null){c=c.eK;if(c!==null)b.iV(c,Cs(d),Cs(e));}}
function I8(a,b,c,d){var e;e=b.c6;if(e>=c)b.c6=e+d|0;}
function TH(a,b,c,d){var e,f,g,h;e=b.dR.bW();while(e.cd()){HP(a,(e.bP()).dT,c,d);}e=b.ei.bW();while(e.cd()){f=e.bP();g=new Sf;g.uq=a;DU(a,g,f,c,d);}h=b.fV.bW();while(h.cd()){e=h.bP();HP(a,e.im.dT,c,d);f=new Sg;f.tA=a;DU(a,f,e.je,c,d);}b.dR.ly(new Se);b.ei.ly(new Sd);b=b.cf.bW();while(b.cd()){TH(a,b.bP(),c,d);}}
function HP(a,b,c,d){var e;e=b.c6;if(e>=c)b.c6=e-d|0;}
var BF=F(Bt);
var XN=F(Bt);
function B$(){var a=this;B.call(a);a.q=null;a.bX=0;a.bH=0;}
function ZI(a){var b=new B$();AHu(b,a);return b;}
function Dz(a,b,c){var d=new B$();Tp(d,a,b,c);return d;}
function AHu(a,b){Tp(a,b,0,0);}
function Tp(a,b,c,d){a.q=b;a.bX=c;a.bH=d;}
function IO(a){return a.bH&3;}
function G1(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Lt(a){return H(a.q);}
var Kn=F(JY);
function RF(){var a=this;B.call(a);a.cT=null;a.d8=0;}
var AUT=null;function ACr(a){var b=new RF();AC8(b,a);return b;}
function AC8(a,b){a.d8=0;a.cT=b;}
function Px(a,b){var c;if(b.d4)return b;b=BP(b.bb);while(true){if(!BQ(b))return null;c=Px(a,BS(b));if(c!==null)break;}return c;}
function NE(a,b,c){var d,e,f,g;d=J6(a,a.cT,b);if(d===null)return;b=c.ce;e=b===null?AUU:b.cf;f=c.bb;c=a.cT;if(d===c){if(c.ce===null)c.ce=b;b=new R9;b.qZ=a;DY(f,b);b=new R7;b.un=a;e.en(b);b=a.cT;b.bb=f;b.ce.cf=e;b.d4=0;return;}if(!DF(f)){c=d.gj;if(c!==null){b=new Ok;b.ow=c;DY(f,b);g=JK(c.bb,d);if(g==(-1))Gm(c.bb,f);else{Fk(c.bb,g);Y8(c.bb,g,f);}}}b=d.ce;if(b!==null){b=b.f5;c=new Sl;c.qK=b;e.en(c);g=JK(b.cf,d.ce);if(g==(-1))Gm(b.cf,e);else{b.cf.mp(g);b.cf.tr(g,e);}}}
function J6(a,b,c){var d,e,f,g;d=b.bJ;if(d.bI==c.bI&&d.bL==c.bL?1:0){d=BP(b.bb);while(BQ(d)){e=J6(a,BS(d),c);if(e!==null)return e;}return b;}b=BP(b.bb);while(true){if(!BQ(b))return null;d=BS(b);f=c.bI;g=c.bL;e=d.bJ;if(e.bI<=f&&g<=e.bL?1:0){e=J6(a,d,c);if(e!==null)break;}}return e;}
function Tg(a,b,c){Bw(c,b.bJ);b=BP(b.bb);while(BQ(b)){Tg(a,BS(b),c);}}
function Ov(a,b,c){a.d8=0;J5(a,a.cT,b,c);}
function J5(a,b,c,d){var e;if(CR(b)<c)return;a:{if(CT(b)>c){K6(b,d);GZ(b,d);b=BP(b.bb);while(BQ(b)){J5(a,BS(b),c,d);}}else{if(!IQ(b,c)){if(a.d8)break a;if(CR(b)!=c)break a;}GZ(b,d);if(CT(b)==c&&a.d8)K6(b,d);e=BP(b.bb);while(BQ(e)){J5(a,BS(e),c,d);}if(!a.d8){b.d4=1;a.d8=1;}}}}
function V8(a,b,c){a.d8=0;IW(a,a.cT,b,c);}
function IW(a,b,c,d){var e,f,g,h,i,j;if(CR(b)<c)return;e=CT(b);f=c+d|0;if(e>f){e= -d|0;K6(b,e);GZ(b,e);g=BP(b.bb);while(BQ(g)){IW(a,BS(g),c,d);}b.bb=MO(a,b.bb);}else{h=b.bJ;if(c<=h.bI&&h.bL<=f?1:0){if(b===a.cT){Lk(b,0);IU(b,0);h=b.ce;if(h!==null)h.cf.h1();}else{Lk(b,(-1));IU(b,(-1));h=b.ce;if(h!==null){W2(h);b.ce=null;}}FI(b.bb);}else{e=IQ(b,c);f=IQ(b,f);if(e&&f)GZ(b, -d|0);else if(e)IU(b,c);else{if(!f)return;Lk(b,c);GZ(b, -d|0);}h=BP(b.bb);while(BQ(h)){IW(a,BS(h),c,d);}h=UD(b.bb);g=OR(0);i=new RN;j=new UP;j.y5
=i;j.i4=g;while(Uh(h,j)){}if(!j.i4.mu&&!a.d8)b.d4=1;else a.d8=1;b.bb=MO(a,b.bb);}}}
function MO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Bz();d=null;e=AUT;f=b.cj;g=b.k;if(e===null)e=AUP;h=P(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}ZP(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.bN=b.bN+1|0;b=BP(b);while(BQ(b)){m=BS(b);if(CT(m)==CR(m))continue;if(!m.d4){if(d!==null){Bw(c,d);d=null;}Bw(c,m);}else if(d===null)d=m;else{n=AP0(Jc(Ba(CT(d),CT(m)),Z(CR(d),CR(m)),d.bJ.eF),d.gj,d.ce);n.d4=1;d=m.ce;if(d===null)d=n;else{W2(d);d=n;}}}if(d!==null)Bw(c,d);return c;}
function Wj(a,b,c,d){var e,f,g,h,i,j,k,l;if((CR(c)-CT(c)|0)<43)e=B9(d,CT(c),CR(c));else{e=B9(d,CT(c),CT(c)+20|0);f=B9(d,CR(c)-20|0,CR(c));g=new R;U(g);K(K(K(g,e),C(55)),f);e=S(g);}e=UI(e,C(54),C(56));f=FL();g=c.bJ;h=g.bI;i=g.bL;j=g.eF;k=new R;U(k);BX(k,40);BX(Bl(K(Bl(K(Bl(k,h),C(52)),i),C(52)),j),41);k=S(k);h=c.d4;g=new R;U(g);G$(K(K(g,k),C(52)),h);l=S(g);g=new R;U(g);k=Bl(g,b);BX(k,32);k=K(k,l);BX(k,9);K(k,e);Ct(f,S(g));c=BP(c.bb);h=b+1|0;while(BQ(c)){Wj(a,h,BS(c),d);}}
function ADk(){AUT=new VK;}
function ADv(){var a=this;B.call(a);a.bI=0;a.bL=0;a.eF=0;}
function Jc(a,b,c){var d=new ADv();AHo(d,a,b,c);return d;}
function AHo(a,b,c,d){a.bI=b;a.bL=c;a.eF=d;}
function AOM(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return a.bI==c.bI&&a.bL==c.bL&&a.eF==c.eF?1:0;}return 0;}
function AF8(a,b){var c;b=b;c=BD(a.bI,b.bI);if(!c)c=BD(b.bL,a.bL);return c;}
var VK=F();
function AKI(a,b,c){var d;b=b;c=c;b=b.bJ;c=c.bJ;d=BD(b.bI,c.bI);if(!d)d=BD(c.bL,b.bL);return d;}
function QU(){var a=this;B.call(a);a.bJ=null;a.gj=null;a.bb=null;a.ce=null;a.d4=0;}
function AP0(a,b,c){var d=new QU();ACq(d,a,b,c);return d;}
function ACq(a,b,c,d){a.d4=0;a.bJ=b;a.gj=c;a.bb=Bz();a.ce=d;}
function ADA(b){return Q8(b,null);}
function Q8(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=V(b);e=V(b);f=V(b);g=V(b);h=V(b);i=Jc(d,e,f);j=new QU;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}ACq(j,i,null,l);m=0;while(m<g){l=Q8(b,c);l.gj=j;Bw(j.bb,l);m=m+1|0;}return j;}
function Yz(b,c,d){var e,f,g,h,i;a:{e=b.bJ;f=b.bb;g=e.bI;h=e.bL;i=e.eF;Bi(c,g);Ga(c,h,i);Bi(c,f.k);if(d!==null){e=b.ce;if(e!==null&&Vx(d,e)){g=(LJ(d,b.ce)).be;break a;}}g=(-1);}Bi(c,g);b=BP(f);while(BQ(b)){Yz(BS(b),c,d);}}
function CT(a){return a.bJ.bI;}
function CR(a){return a.bJ.bL;}
function Lk(a,b){a.bJ.bI=b;}
function IU(a,b){a.bJ.bL=b;}
function K6(a,b){var c;c=a.bJ;c.bI=c.bI+b|0;}
function GZ(a,b){var c;c=a.bJ;c.bL=c.bL+b|0;}
function IQ(a,b){return CT(a)<=b&&b<CR(a)?1:0;}
function AFV(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return BK(a.bJ,c.bJ)&&BK(a.bb,c.bb)?1:0;}return 0;}
var G2=F(0);
function F6(){var a=this;B.call(a);a.cm=null;a.cD=null;}
function AUV(a,b){var c=new F6();Xw(c,a,b);return c;}
function Xw(a,b,c){a.cm=b;a.cD=c;}
function AGP(a,b){var c,d;if(a===b)return 1;if(!H$(b,G2))return 0;a:{b:{c:{d:{c=b;b=a.cm;if(b!==null){if(!b.bu(c.cm))break c;else break d;}if(c.cm!==null)break c;}b=a.cD;if(b!==null){if(!b.bu(c.cD))break c;else break b;}if(c.cD===null)break b;}d=0;break a;}d=1;}return d;}
function Gf(){var a=this;F6.call(a);a.i1=0;a.ct=null;}
function WO(){var a=this;B.call(a);a.kD=null;a.mB=null;a.jV=null;a.mi=null;a.l8=null;a.l4=null;}
function LM(a,b,c){return Q3(a,Cf(a.kD),b,c);}
function QD(a,b,c){return Q3(a,Cf(a.mB),b,c);}
function Q3(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(Jx(g,c,d))return g.rP;f=f+1|0;}return null;}
function TN(a,b,c){var d,e,f,g;d=(Cf(a.jV)).data;e=d.length;f=0;while(f<e){g=d[f];if(Jx(g,b,c))return g.rm;f=f+1|0;}return null;}
var Kl=F(0);
function Pk(){var a=this;B.call(a);a.uY=null;a.uZ=null;}
function EN(){B.call(this);this.pt=null;}
function AUW(a){var b=new EN();KE(b,a);return b;}
function KE(a,b){a.pt=b;}
function Jx(a,b,c){var d,e,f,g;d=a.pt.data;e=d.length;f=0;while(f<e){g=d[f];if(ABC(b,g.rx)&&ABC(c,g.qy)?1:0)return 1;f=f+1|0;}return 0;}
function Kv(){EN.call(this);this.rm=null;}
var ACW=F();
function Jl(b){var c,d,e,f;if(!($rt_globals.Array.isArray(b)?1:0)){c=P(Hu,1);c.data[0]=Z4(b);return c;}d=b.length;c=P(Hu,d);e=c.data;f=0;while(f<d){e[f]=Z4(b[f]);f=f+1|0;}return c;}
function Z4(b){var c,d,e;c=typeof b==='string'?1:0;d=c?Ce(b):GP(b.language,null);e=c?null:GP(b.scheme,null);b=new Hu;b.rx=d;b.qy=e;return b;}
var AAt=F();
function M2(b){var c,d;ATe();c=AUX;d=b.data;return c.decode(d);}
var AAV=F();
function AEI(b){var c,d;c=b.bd+1|0;d=b.V+1|0;return Y6(c,d);}
function HE(b,c){var d;d=b+1|0;b=c+1|0;return Y6(d,b);}
function Y6(b,c){return {column:b,lineNumber:c};}
function FV(){EN.call(this);this.rP=null;}
function AUY(a,b){var c=new FV();Xr(c,a,b);return c;}
function Xr(a,b,c){KE(a,b);a.rP=c;}
function JB(){EN.call(this);this.vi=null;}
function Sk(){var a=this;B.call(a);a.rI=null;a.rJ=null;a.rK=null;}
function AO3(a,b,c){var d,e,f;b=Cv(b,"f");Cv(c,"f");c=a.rI;d=a.rJ;e=a.rK;f=new XM;f.sX=b;Lw(c.g9,f,0,d,e);}
var Z2=F();
function YN(b){return b?1:0;}
var Hd=F(0);
function AL_(a){}
function AH6(a){}
var ET=F(0);
var Jw=F(0);
var P9=F(0);
function Z0(){var a=this;B.call(a);a.R=null;a.ch=null;a.bM=null;a.O=null;a.eE=null;a.wg=0;a.mx=null;a.cF=null;a.lz=0;a.dS=0;a.fl=null;a.hd=null;a.b3=null;a.A=0;a.c=null;a.cu=null;a.cA=null;a.hO=null;a.fp=null;a.uD=0;a.sk=0;a.cx=0;a.b2=0;a.b_=0;a.eQ=null;a.eM=null;a.eN=null;a.g1=0;a.jR=0;a.h3=0;a.yT=0;a.wW=0;a.jv=0;a.iX=0;a.lR=0;a.dG=0;a.cG=null;a.eC=null;a.dx=0;a.bz=0;a.jN=null;a.hN=null;a.rs=null;a.tt=null;a.ku=null;a.W=0;a.fz=null;a.qu=0;a.oU=null;a.up=null;}
function AAc(a,b){var c=new Z0();ANE(c,a,b);return c;}
function ANE(a,b,c){var d,e,f,g,h;a.R=new Bj;a.ch=new Bj;a.wg=0;a.mx=P(Bk,10);d=new PG;e=new WX;e.cs=new Bj;e.bp=new Bj;e.dc=new B5;e.gB=new B5;VW(e,0,0,2,20);d.d_=e;d.kc=0.5;d.g5=0.0;Jr(187,187,187,255,e.dc);a.cF=d;a.dS=16;a.fl=C(57);a.b3=P(Ky,4);a.c=AR3(P(Bv,0),null,null);e=new WO;e.kD=Cx(P(FV,0));e.mB=Cx(P(FV,0));e.jV=Cx(P(Kv,0));e.mi=Cx(P(JB,0));e.l8=Cx(P(Fl,0));e.l4=Cx(P(Kl,0));a.cu=e;a.fp=P(EX,0);a.eQ=Cg(1,0);a.eM=UZ();a.eN=UZ();a.g1=0;a.h3=1;a.jv=1;a.iX=1;a.lR=1;a.dG=3;a.cG=AQb();a.eC=C(58);a.dx=0;a.bz
=0;e=Ec();BM(e);f=new NQ;f.tl=e;a.hN=f;a.W=0;e=new NP;e.mV=a;a.oU=e;e=new NO;e.rq=a;a.up=e;a.bM=b;a.O=b.dl;a.eE=c;c=new UG;g=a.b3;c.jr=new B5;c.go=new Bj;c.kr=new Bj;e=new B5;c.ht=e;c.kt=g;Ta(e);a.fz=c;g=a.mx.data;e=new NN;e.uP=a;g[0]=e;e=new NU;e.oJ=a;g[1]=e;e=new NT;e.sI=a;g[2]=e;e=new NS;e.wo=a;g[3]=e;e=new NR;e.oj=a;g[4]=e;e=new NM;e.rW=a;g[5]=e;e=new NL;e.vk=a;g[6]=e;AEw();h=AUZ===AU0?0:1;a.jR=h;c.lU=!h?0.0:0.5;c.ms=b.cE;}
function IJ(a,b,c,d){var e,f,g,h,i;e=a.fz;Ta(e.ht);f=e.ht;g=d>=0.5?d:0.25;h=g>=4.0?0.5:ADY(f.bZ,ADY(g,AU1));Cc(f,f.bq/g,f.bG*g,AQk(f.bc*g,1.25),h);f=e.ht;h=f.bG;e.sJ=h-(h|0)>=0.25?0.0:0.5;i=h+f.bc+1.5|0;e.vQ=i;Bg(e.kr,0,i*2|0);Cw(a.R,b);Cw(a.ch,c);SO(a,b,c,d);}
function VY(a,b,c){a.rs=b;a.tt=c;}
function SO(a,b,c,d){var e,f,g,h;a.cx=Co(80.0,d);a.b2=Co(1.0,d);a.b_=Co(10.0,d);if(!a.bz)Cw(a.bM.dp,a.R);else Bg(a.bM.dp,(b.a+c.a|0)-IC(a)|0,b.b);b=a.cG;e=a.bM.dp;f=IC(a);g=c.b;h=d;Cw(b.fa,e);Bg(b.eB,f,g);b.iA=h;b=a.cF;f=Co(2.0,d);b.d_.bp.a=f;Q1(a,a.fl,a.dS);K2(a);}
function AHU(a){a.lz=1;KV(a);}
function AE0(a){a.lz=0;}
function KV(a){var b;b=a.cF;b.g5=Nw(Fr(a))+b.kc*1.25;b.fU=1;}
function Jz(a,b){var c,d;a.cA=b;c=a.cF;d=b.bE.wc;Ei(c.d_.dc,d);c=a.eM;d=b.bE;Gy(c,d.kX,d.k8);c=a.eN;b=b.bE;Gy(c,b.kX,b.k8);}
function Nt(a){Dx(a,a.hd.mm,a.dS+1|0);}
function Xt(a){var b;b=a.dS;if(b<=7)return;Dx(a,a.hd.mm,b-1|0);}
function Qw(a){a.hO=C5(a.hO,E$(a.O,1024,a.A,a.bM.cE));}
function Od(a,b){Dx(a,b,a.dS);}
function Dx(a,b,c){if(a.bM.b1!==0.0){Q1(a,b,c);I9(Fr(a));}a.dS=c;a.fl=b;}
function J8(a,b){var c,d,e,f;c=a.fz;b=a.bM.cE;c.ms=b;if(a.hO.j6!=b)Qw(a);d=a.fp.data;b=d.length;e=0;while(e<b){f=d[e].bD;if(f!==null)f.gI=1;e=e+1|0;}Jn(a.cG);K2(a);}
function Q1(a,b,c){var d,e,f,g,h,i,j;d=Co(c,a.bM.b1);e=a.hd;f=e!==null?e.pL:0;if(!(d==f&&BK(b,a.fl))){Jn(a.cG);g=a.fp.data;c=g.length;f=0;while(f<c){W$(g[f]);f=f+1|0;}g=a.c.f.v.data;c=g.length;f=0;while(f<c){D$(g[f]);f=f+1|0;}g=a.b3.data;h=G1(0,0);e=a.O;i=d;g[h]=Gw(e,b,i,300,0);a.b3.data[G1(0,1)]=Gw(a.O,b,i,300,2);a.b3.data[G1(1,0)]=Gw(a.O,b,i,600,0);a.b3.data[G1(1,1)]=Gw(a.O,b,i,600,2);e=a.b3.data[G1(0,0)];a.hd=e;c=Fx(e);f=DD(c*1.25);a.A=f;e=a.fz;e.wz=f;g=a.b3.data;j=g[0];e.vD= -( -((f+j.ej+j.dU)/2.0)|0)|0;a.cF.d_.bp.b
=Fx(g[0]);Qw(a);f=a.A;h=Wx(a.cF);e=new R;U(e);b=K(K(e,C(59)),b);BX(b,32);Bl(K(Bl(K(Bl(K(Bl(b,d),C(60)),c),C(61)),f),C(62)),h);$rt_globals.console.info($rt_ustr(S(e)));if(AU2){c=Kf(a.b3.data[0],a.A);b=new R;U(b);Bl(K(b,C(63)),c);$rt_globals.console.info($rt_ustr(S(b)));}a.c.gW=F4(E8(a),a.c.r,a.O.cZ,a.b3);GC(a);K2(a);}}
function Me(a){return T(Cb(a.c.f)+5|0,a.A);}
function FN(a){return Z(Me(a)-a.ch.b|0,0);}
function S8(a){return Z(a.g1-Db(a)|0,0);}
function Db(a){var b;b=!a.bz?0:CP(a)+a.b_|0;return Z(1,(a.ch.a-a.cx|0)-b|0);}
function IC(a){return a.bz?a.cx:a.cx-a.b_|0;}
function Cz(a){return a.ch.b;}
function KC(a,b){var c,d,e,f,g;c=a.c.f;if(TD(c)&&b-c.sV>0.03125?1:0){d=a.qu;e=a.c.f.b0;if(d!=e){a.qu=e;Rt(a);}}SY(a);d=KO((a.W+a.yT|0)-a.wW|0,FN(a));e=a.W==d?0:1;if(e)DR(a,d);a:{c=a.cF;f=c.fU;if(b>c.g5)while(true){g=c.g5+c.kc;c.g5=g;c.fU=c.fU?0:1;if(b>g)continue;else break a;}}d=c.fU==f?0:1;return !d&&!e&&!a.wg?0:1;}
function DR(a,b){var c,d;c=KO(b,FN(a));if(c!=a.W){a.W=c;a.c.hY=c/a.A;d=a.tt;if(d!==null)d.j7(c);}}
function Ic(a,b){var c,d;c=KO(b,S8(a));d=a.c;if(c!=d.c7){d.c7=c;d=a.rs;if(d!==null)d.j7(c);}}
function Iw(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=H9(a.ch.b,a.A)+7|0;c=a.fp;if(c.data.length<b)a.fp=Zl(b,c,a.fz,a.uD,a.sk,a.c.f);Dh(a.O,0);RI(a.O,a.R,a.ch);d=(a.A-Wx(a.cF)|0)/2|0;e=(a.c.gW-(S2(a.cF)/2|0)|0)-a.c.c7|0;f=!a.bz?a.cx:(a.b2+a.b_|0)+CP(a)|0;g=a.cF;b=f+e|0;d=(d+T(a.c.o,a.A)|0)-a.W|0;Bg(g.d_.cs,b,d);h=Cb(a.c.f);i=Fj(a);j=Gu(a);a.uD=i;a.sk=j;k=!a.bz?a.R.a+a.cx|0:((a.R.a+a.b2|0)+a.b_|0)+CP(a)|0;l=i;while(l<=j&&l<h){m=BG(a.c.f,l);g=U_(a,l);XT(g,m,a.hO,a.O,a.A,Db(a),a.c.c7);n=g.bD;a.g1=Z(a.g1,
EC(m)+(40.0*a.bM.b1|0)|0);o=T(a.A,l)-a.W|0;p=CE(a)===null?null:(CE(a)).data[l];d=a.R.b+o|0;m=a.O;f=Db(a);q=a.A;o=a.c.c7;r=a.cA;s=ABA(Be(a),l);if(s!==null){if(s.b==(-1))s.b=n.z;s.a=F4(n,s.a,a.O.cZ,a.b3);s.b=F4(n,s.b,a.O.cZ,a.b3);}t=a.c;Y$(g,d,k,m,f,q,o,r,s,t.hr,t.f0,t.o!=l?0:1,CE(a)===null?0:1,p);l=l+1|0;}r=a.bM.dp;l=i;while(l<=j&&l<h&&a.jv){g=U_(a,l);o=T(a.A,l)-a.W|0;u=ACH(Be(a),l);t=a.cA.bE.qT;v=a.c.o==l&&CE(a)===null?1:0;if(u)t=a.cA.bE.mq;else if(CE(a)!==null&&l<(CE(a)).data.length&&(CE(a)).data[l]!==null)
{t=a.cA;t=HX(t.dw,t,(CE(a)).data[l].fL);}else if(v)t=a.cA.bE.ie;Zg(g,a.O,k,a.R.b+o|0,a.A,r,a.c.c7,Db(a),t);l=l+1|0;}if(a.h3){q=Ba(j+1|0,h);AAW(a,T(a.A,q)-a.W|0);}AB1(a);AA8(a,i,j);if(a.iX)ADE(a,i,j,h);if(a.lz&&e>=(( -S2(a.cF)|0)/2|0)){g=a.cF;t=a.ch;if(YZ(g.d_.cs,0,0,t))ACg(a.cF,a.O,a.R);}ABw(a);AAF(a);Lg(a.O);}
function ADE(a,b,c,d){var e,f,g,h,i,j;while(b<=c&&b<d){e=CE(a)!==null&&b<(CE(a)).data.length?(CE(a)).data[b]:null;if(e!==null){f=a.cA;f=HX(f.dw,f,e.fL);}else f=CE(a)!==null?a.cA.bE.fd:a.cA.bE.ie;if(!(a.c.o!=b&&e===null)){a.eQ.a=!a.bz?(a.b_-a.b2|0)-a.dG|0:((a.b_+CP(a)|0)+a.b2|0)-a.dG|0;g=a.eQ;h=a.A;g.b=h;i=a.bz?0:(a.cx-a.b_|0)+a.b2|0;h=T(h,b)-a.W|0;e=a.O;j=a.R;BB(e,j.a+i|0,j.b+h|0,g,f);}b=b+1|0;}}
function AA8(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;d=a.ch.b;e=Ba(d,T(Cb(a.c.f),a.A)-a.W|0);f=a.cG;g=a.W;h=CE(a)!==null?(-1):a.c.o;i=a.O;j=a.cA;RI(i,f.fa,f.eB);S0(f,i,b,d);k=f.fg;if(b!=k){l=f.co.k;m=l*20|0;if(k<b){k=k/20|0;n=b/20|0;}else{n=Z(0,(k-1|0)/20|0);k=Z(0,(b-1|0)/20|0);}a:{if((n-k|0)>=l){Rx(f,b);f.fg=b;}else{if(f.fg>=b)while(true){if(n<k)break a;f.fg=Np(Bs(f.co,n%l|0),f.el,f.fj,f.fg,b,m,f.iA);n=n+(-1)|0;}while(k<=n){f.fg=Np(Bs(f.co,k%l|0),f.el,f.fj,f.fg,b,m,f.iA);k=k+1|0;}}}}o
=BP(f.co);while(BQ(o)){p=BS(o);q=f.fa;k=T(f.co.k,f.i3);r=f.jP;s=p.ez.b;n=((p.hG.b-(g%k|0)|0)+k|0)%k|0;t=j.gH;l=g+n|0;u=p.K;m=l/u|0;v=n+s|0;l=BD(v,e);if(l<=0){k=s/u|0;u=0;v=0;w=0;while(v<k){l=m+v|0;if(LB(p,r,w,l,j,t)){s=T((v-u|0)+1|0,p.K);Bg(p.c3,Ci(p.ba),s);Cc(p.dM,0.0,T(u,p.K),Ci(p.ba),s);l=w;}else{x=Fw(j,r,w,t);Er(p,i,n+T(u,p.K)|0,q,t.eT,x);Bg(p.c3,Ci(p.ba),p.K);Cc(p.dM,0.0,T(v,p.K),Ci(p.ba),p.K);u=v;}v=v+1|0;w=l;}x=Fw(j,r,w,t);Er(p,i,n+T(u,p.K)|0,q,t.eT,x);}else{if(l>0&&n<e){l=Z(e-n|0,0);w=p.K;u=l/w|0;if
(l%w|0)u=u+1|0;y=0;z=0;ba=0;while(z<u){w=m+z|0;if(LB(p,r,ba,w,j,t)){l=T((z-y|0)+1|0,p.K);Bg(p.c3,Ci(p.ba),l);Cc(p.dM,0.0,T(y,p.K),Ci(p.ba),l);w=ba;}else{x=Fw(j,r,ba,t);Er(p,i,n+T(y,p.K)|0,q,t.eT,x);Bg(p.c3,Ci(p.ba),p.K);Cc(p.dM,0.0,T(z,p.K),Ci(p.ba),p.K);y=z;}z=z+1|0;ba=w;}x=Fw(j,r,ba,t);Er(p,i,n+T(y,p.K)|0,q,t.eT,x);}if(v>k)AAU(p,q,e,g,k,j,r,i,s,n,t);}}x=j.gH;if(e<d){bb=f.fa;BB(i,bb.a,bb.b+e|0,Cg(f.eB.a,d-e|0),x.gy);}if(b<=h&&h<=c)AB_(f,g,h,j.gH,i);Lg(i);}
function Fj(a){return Ba(a.W/a.A|0,Cb(a.c.f)-1|0);}
function Gu(a){return Ba(((a.W+Cz(a)|0)-1|0)/a.A|0,Cb(a.c.f)-1|0);}
function K2(a){var b,c,d,e,f,g,h;b=a.cG;c=a.b3.data[0];d=a.A;e=a.bM.cE;f=a.O;b.ip=c;b.l7=d;g=d*20|0;b.i3=g;h=C5(b.el,E$(f,b.eB.a,g,e));b.el=h;CM(h,b.ip);R4(b.el,2);c=C5(b.fj,E$(f,b.eB.a,d,e));b.fj=c;CM(c,b.ip);R4(b.fj,2);S0(a.cG,a.O,Fj(a),Cz(a));}
function U_(a,b){var c;c=a.fp.data;return c[b%c.length|0];}
function VU(a,b){var c,d,e,f;c=Fu(0,H(a.eC),Nk(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BF;X(b);L(b);}if(c!=1){d=b.b9.data.length;if(d&&c){e=B1(T(d,c));d=0;f=0;while(f<c){PW(b,0,H(b),e,d);d=d+H(b)|0;f=f+1|0;}b=L1(e);}else b=AUq;}}return b;}
function Oj(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=Bx(i);k=ATS(i).data;G_(j,c);c=0;l=k.length;if(c>l){f=new BF;X(f);L(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.c.f;o.b0=o.b0+1|0;p=P(Gr,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=APd(h[m],n[m],k[m],b[m],f.V,f.bd);m=m+1|0;}Bw(o.f7,p);c=0;while(c<i){b=e.data;JD(o,h[c],n[c],k[c],b[c]);g.v8(Cs(h[c]),b[c]);c=c+1|0;}}
function ADK(a){var b;if(C4(Be(a)))F1(a);else{b=a.c;MG(b.f,b.o,b.r);}GC(a);DQ(a);return 1;}
function C8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.dx)return 0;if(C4(Be(a)))F1(a);c=LG(UI(b,C(65),C(3)),C(54),(-1));d=c.data;b=a.c;e=b.f;f=b.o;g=b.r;XF(e,f,g,c);h=d.length;if(!h)b=AUq;else{i=0;j=0;while(j<h){i=i+H(d[j])|0;j=j+1|0;}k=B1(i+T(h-1|0,H(C(54)))|0);c=k.data;l=0;b=d[0];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<H(C(54))){m=l+1|0;c[l]=I(C(54),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=n+1|0;}b=L1(k);}E_(e,f,g,0,b);b=a.c;f=b.o;m=(f+h|
0)-1|0;Cl(a,m,m!=f?H(d[h-1|0]):b.r+H(d[0])|0,0);Fg(a);DQ(a);return 1;}
function F1(a){var b,c,d;b=Dy(Be(a));c=a.c.f;d=Be(a);MS(c,d,VC(c,d));Cl(a,b.D,b.Q,0);Fg(a);DQ(a);}
function Fg(a){var b,c;(Be(a)).c1=0;b=(Be(a)).bx;c=a.c;B0(b,c.o,c.r);b=(Be(a)).bo;c=a.c;B0(b,c.o,c.r);}
function CP(a){return a.hd.l$|0;}
function AAW(a,b){var c,d;c=a.ch.b;if(b<c){d=a.bM.dp;d.b=c-b|0;d.a=!a.bz?Db(a)+a.dG|0:Db(a)+a.b2|0;c=!a.bz?(a.R.a+a.cx|0)-a.dG|0:(((a.R.a+a.b_|0)+CP(a)|0)+a.b2|0)-a.dG|0;BB(a.O,c,a.R.b+b|0,d,a.cA.bE.fd);}}
function ABw(a){var b;b=a.bz?a.R.a+CP(a)|0:a.R.a+a.ch.a|0;WZ(a.eM,a.W,a.R.b,Cz(a),Me(a),b,CP(a));b=!a.bz?a.R.a+a.cx|0:((a.R.a+a.b2|0)+a.b_|0)+CP(a)|0;QI(a.eN,a.c.c7,b,Db(a),a.g1,a.R.b+Cz(a)|0,CP(a));}
function AAF(a){var b,c;b=Q5(a.eM);c=Q5(a.eN);if(!(!b&&!c)){Dh(a.O,1);if(b)HD(a.eM,a.O);if(c)HD(a.eN,a.O);if(b)HM(a.eM,a.O);if(c)HM(a.eN,a.O);}}
function AB1(a){var b,c,d,e;b=a.eQ;c=a.ch;b.b=c.b;b.a=a.b2;d=!a.bz?a.cx-a.b_|0:(c.a-IC(a)|0)-a.b2|0;b=a.O;c=a.R;BB(b,c.a+d|0,c.b,a.eQ,a.cA.bE.tE);a.eQ.a=!a.bz?(a.b_-a.b2|0)-a.dG|0:((a.b_+CP(a)|0)+a.b2|0)-a.dG|0;e=a.bz?0:(a.cx-a.b_|0)+a.b2|0;b=a.O;c=a.R;BB(b,c.a+e|0,c.b,a.eQ,a.cA.bE.fd);}
function KO(b,c){return Ba(Z(0,b),c);}
function Fr(a){return a.bM.gQ;}
function IB(a,b){var c,d,e,f;c=ER(b);d=new R;U(d);K(K(d,C(66)),c);$rt_globals.console.info($rt_ustr(S(d)));Fr(a);c=ER(b);d=Fe();c=$rt_ustr(c);d.title=c;Cl(a,0,0,0);c=new P0;c.t9=a;c.t8=b;d=Ec();BM(d);e=new PZ;e.n1=d;f=new T5;f.pS=e;d=new WC;d.n2=c;c=b.fR;if(c!==null)c.text().then(Bn(d,"f"),Bn(f,"f"));else{b=b.hX.getFile();c=new WD;c.pB=d;c.pC=f;b.then(Bn(c,"f"),Bn(f,"f"));}}
function Hl(a,b,c,d,e){if(Hv(a,e))return 1;if(c&&d)return 1;if(c)DR(a,a.W+((T(b,a.A)*12|0)/10|0)|0);else if(!d){G4(a,a.c.o+b|0,e);TJ(a);}return 1;}
function RY(a,b,c,d){var e,f,g;if(Hv(a,d))return 1;e=E8(a);if(!c)f=a.c.r+b|0;else if(b>=0)f=Gn(e,a.c.r);else{b=a.c.r;if(!b)f=(-1);else{c=GO(e,b);if(c>0&&e.dd.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.dd.data[c-1|0];}}if(f>e.z){e=a.c;if((e.o+1|0)<Cb(e.f))Cl(a,a.c.o+1|0,0,d);}else if(f>=0)CY(a,f,d);else{e=a.c;b=e.o;if(b>0){g=(BG(e.f,b-1|0)).z;Cl(a,a.c.o-1|0,g,d);}}Vm(a);return 1;}
function Hv(a,b){if(C4(Be(a))&&!b){Fg(a);GC(a);return 1;}if(!(b&&C4(Be(a))))Fg(a);return 0;}
function Cl(a,b,c,d){a.c.r=c;return G4(a,b,d);}
function G4(a,b,c){var d;d=a.c;d.o=Fu(0,b,Cb(d.f)-1|0);return CY(a,a.c.r,c);}
function CY(a,b,c){var d,e;a.c.r=Fu(0,b,(E8(a)).z);a.c.gW=a.bM.b1===0.0?0:F4(E8(a),a.c.r,a.O.cZ,a.b3);KV(a);GC(a);if(c)(Be(a)).c1=1;d=Be(a);e=a.c;KX(d,e.o,e.r);(Be(a)).c1=0;return 1;}
function L4(a,b){var c;c=AGF(Be(a));CY(a,b,0);HA(Be(a),c);}
function GC(a){TJ(a);Vm(a);}
function TJ(a){var b,c,d,e,f;b=a.W;c=b+Cz(a)|0;d=a.c.o;e=a.A;d=T(d,e);f=d+e|0;if(d<(b+e|0))DR(a,d-e|0);else if(f>(c-e|0))DR(a,(f-Cz(a)|0)+a.A|0);}
function Vm(a){var b,c,d,e,f;b=DD(a.bM.b1*30.0);c=a.c.c7;d=c+Db(a)|0;e=a.c.gW;f=e+b|0;if(e<(c+b|0))Ic(a,e-b|0);else if(f>(d-b|0))Ic(a,(f-Db(a)|0)+b|0);}
function ADF(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;L2(a.c);b=a.jN;c=a.c;d=c.f;c=c.f0;e=Cb(d);f=b.pc.data;g=f.length;h=0;while(h<g){i=f[h];b=i.gZ;j=b.e6;k=b.jk;l=j;while(true){m=BD(l,k);if(m>0)break;if(l>=e)break;a:{b=BG(d,l);if(b.l.data.length){n=l>j?0:Z(i.gZ.fG,0);o=m<0?b.z:Ba(i.gZ.iC,b.z);while(true){if(n>=o)break a;p=GO(b,n);q=RG(b,p);r=p>=b.l.data.length?b.z:b.dd.data[p];s=KA(b,p);if(q==n&&r<=o)Bw(c,s);else{s=Ec();t=new R;U(t);u=Bl(K(t,C(67)),l);BX(u,58);K(Bl(u,n),C(68));Ct(s,S(t));}n=r;}}}l=l+
1|0;}h=h+1|0;}}
function HJ(a,b){var c,d;Cl(a,b.V,b.bd,0);c=Gn(E8(a),a.c.r);B0((Be(a)).bo,a.c.o,c);b=(Be(a)).bx;d=a.c;B0(b,d.o,d.r);}
function D2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.R;e=c-d.a|0;f=Fu(0,((b.b-d.b|0)+a.W|0)/a.A|0,Cb(a.c.f)-1|0);g=!a.bz?a.cx:(a.b2+a.b_|0)+CP(a)|0;h=Z(0,(e-g|0)+a.c.c7|0);b=BG(a.c.f,f);d=a.O.cZ;i=a.b3;if(!(b.ef!==null&&!b.fC))JX(b,d,i);j=b.ef;e=b.l.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.z;else{c=Ty(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.l.data.length)k=b.z;else{j=R3(b,d,i,c);k=0;e=0;while(e<c){k=k+H(b.l.data[e].q)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(AUS){b=new R;U(b);Bl(K(Bl(K(Bl(K(b,C(69)),e),C(70)),h),C(71)),m);$rt_globals.console.info($rt_ustr(S(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return Dp(f,k);}
function Xb(a,b){var c,d;c=a.c;d=b.V;c.o=d;c.r=b.bd;c.gW=F4(BG(c.f,d),a.c.r,a.O.cZ,a.b3);KV(a);}
function VP(a,b,c,d){var e;a:{e=c.data;switch(e.length){case 0:break;case 1:R6(a,e[0]);break a;default:Ri(a.eE,b,c,a,d);break a;}Ka(a.eE,b,a);}}
function R6(a,b){var c,d,e,f,g;if(BK(b.hf,a.c.c_)){b=b.f2;Cl(a,b.e6,b.fG,0);B0((Be(a)).bx,b.e6,b.fG);B0((Be(a)).bo,b.jk,b.iC);}else{c=(Cf(a.cu.l4)).data;d=c.length;e=0;a:{while(true){if(e>=d){f=null;break a;}f=c[e];if(f!==null)break;e=e+1|0;}}if(f!==null){Fr(a);g=new Nc;g.sC=f;g.sB=b;BM(g);b=new Rv;b.ut=g;$rt_globals.setTimeout(Bn(b,"onTimer"),0);}}}
function E8(a){var b;b=a.c;return BG(b.f,b.o);}
function Ji(a,b,c){var d,e;d=DD((a.A*4|0)*c/150.0);e=DD(b);if(d)DR(a,a.W+d|0);if(e)Ic(a,a.c.c7+e|0);return 1;}
function S7(a,b,c){(Be(a)).c1=0;return 1;}
function Mz(a,b,c){var d;if(c)return null;d=HQ(a.eM,b.n,a.oU,1);if(d!==null)return d;d=HQ(a.eN,b.n,a.up,0);if(d!==null)return d;Ig(a);Xb(a,D2(a,b.n));Ku(a.c);if(!b.bB&&!(Be(a)).c1){b=(Be(a)).bx;d=a.c;B0(b,d.o,d.r);}(Be(a)).c1=1;b=Be(a);d=a.c;KX(b,d.o,d.r);b=new Xh;b.qt=a;return b;}
function MJ(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cl){b=b.n;e=D2(a,b);f=GA(a.c.f,e.V,e.bd);g=Kw(a,f);h=LM(a.cu,DT(a.c),FM(a.c));if(h!==null){i=a.c;c=e.V;d=e.bd;e=new Tz;e.oR=a;e.oS=b;e.oQ=g;h.lr(i,c,d,e,a.hN);}else{e=B_(a.c.f.cW,f);if(e!==null){HJ(a,e);c=1;}else{e=B_(a.c.f.cL,f);if(e!==null&&!DF(e)){if(e.k!=1){Q2(a.eE,b,e,a,g);c=1;}else{HJ(a,Bs(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(D2(a,b.n)).V;g=BG(a.c.f,c);c=FA(g,a.c.r);d=Gn(g,a.c.r);b=Lx(g,c);if((d-1|0)==g.z){B0((Be(a)).bx,a.c.o,
Nk(g));B0((Be(a)).bo,a.c.o,g.z);}else{if(b!==null){b=b.q;j=0;c:{while(true){k=b.b9.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.c.r;if(c==j){c=FA(g,c-1|0);d=Gn(g,c);}else{if(d!=j){PD(Be(a),a.c.o);break b;}c=FA(g,d+1|0);d=Gn(g,c);}}}B0((Be(a)).bx,a.c.o,c);(Be(a)).c1=1;Cl(a,a.c.o,d,0);(Be(a)).c1=0;Ig(a);}}break a;case 3:break;default:break a;}PD(Be(a),a.c.o);RE(a.c.gg);Ig(a);}}return 1;}
function NX(a,b){var c,d,e,f,g,h,i,j,k;c=a.bM.di;if(H5(a.eM,b.n,c))return 1;if(H5(a.eN,b.n,c))return 1;d=a.cG;if(EV(b.n,d.fa,d.eB)&&Fy(c)?1:0)return 1;e=b.n;f=!a.bz?a.R.a+a.cx|0:((a.R.a+a.b_|0)+a.b2|0)+CP(a)|0;a:{g=a.R.b;h=Db(a);i=Cz(a);j=e.a;if(f<=j&&j<(f+h|0)){k=e.b;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Fy(c);if(b.cl){e=D2(a,b.n);e.bd=FA(BG(a.c.f,e.V),e.bd);b=a.c.f;if(!I6(b.cW,e)&&!I6(b.cL,e)?0:1)return DC(c,C(72));}return DC(c,C(21));}
function AQq(a,b){var c,d,e,f,g;c=b.cl;if(c&&b.bO==65){c=Cb(a.c.f)-1|0;d=Fm(a.c.f,c);B0((Be(a)).bx,0,0);B0((Be(a)).bo,Cb(a.c.f)-1|0,d);return 1;}if(c&&b.bO==80){In(a.c);return 1;}if(!a.dx&&c&&b.bO==90){if(C4(Be(a)))Fg(a);b=a.c.f;b.b0=b.b0+1|0;e=b.f7;d=e.k;if(!d)e=null;else{f=(Fk(e,d-1|0)).data;e=M9(b,f[0]);c=1;while(c<f.length){M9(b,f[c]);c=c+1|0;}}if(e!==null){Cl(a,e.a,e.b,0);DQ(a);}return 1;}if(!c&&!b.cQ){if(BE(b.d5,C(73))){C8(a,C(74));CY(a,a.c.r-1|0,0);c=1;}else if(BE(b.d5,C(75))){C8(a,C(76));CY(a,a.c.r-
1|0,0);c=1;}else if(BE(b.d5,C(51))){C8(a,C(77));CY(a,a.c.r-1|0,0);c=1;}else if(BE(b.d5,C(78))){C8(a,C(79));CY(a,a.c.r-1|0,0);c=1;}else if(BE(b.d5,C(80))){C8(a,C(81));CY(a,a.c.r-1|0,0);c=1;}else if(!BE(b.d5,C(82)))c=0;else{C8(a,C(83));CY(a,a.c.r-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cQ&&!b.cl)){d=b.bO;if(d>=48&&d<=57){c=d-48|0;e=a.mx.data[c];if(e!==null)e.s();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bO){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c
=1;}if(c)return 1;if(AAB(a,b))return 1;if(ABq(a,b))return 1;c=b.cl;if(c&&b.bO==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bO;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.cQ&&!b.iU)return H(b.d5)>0&&C8(a,b.d5)?1:0;return 0;}return 0;}
function SY(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.c;c=Fj(a);d=Gu(a);if(b.ed!=3&&b.gi==3){e=UD(b.kZ);f=new M3;f.qI=c;f.qH=d;g=new Qv;g.qg=f;while(!g.j_&&Uh(e,g)){}if(!g.j_&&BE(C(29),DT(b))){c=Z(0,c-100|0);d=Ba(Cb(b.f)-1|0,d+100|0);Bw(b.kZ,Cg(c,d));h=Bx(3);i=h.data;i[0]=EB(b.f,c);e=b.f;j=0;d=Ba(d+1|0,e.v.data.length);k=0;while(k<d){j=j+Fm(e,k)|0;if(k!=(e.v.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.tB=Eb();e=b.dn;l=new Vo;l.p3=b;i=P(B,3);m=i.data;m[0]=Dg(b.f);m[1]=h;b=b.f.cJ;g=Bz();Tg(b,b.cT,g);h=
Bx(3*g.k|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bs(g,o);d=k+1|0;n[k]=b.bI;q=d+1|0;n[d]=b.bL;k=q+1|0;n[q]=b.eF;o=o+1|0;}m[2]=h;D8(e,l,C(84),i);}}}
function W_(a){In(a.c);}
function Rt(a){ACk(a.c);}
function Gx(a,b,c){var d,e,f,g,h,i;if(c&&a.dx)return 0;d=Dy(Be(a));e=d.D;if(C4(Be(a))){f=a.c.f;g=Be(a);h=VC(f,g);if(c)MS(f,g,h);if(c){Cl(a,d.D,d.Q,0);Fg(a);DQ(a);}}else{h=Hn(EJ(a.c.f.v.data[e]),C(54));i=Ba(Cb(a.c.f)-1|0,e);B0((Be(a)).bo,i,0);if(e>=(Cb(a.c.f)-1|0))B0((Be(a)).bo,i,Fm(a.c.f,i));else B0((Be(a)).bx,i+1|0,0);if(c)F1(a);else Cl(a,e,0,0);}b.j(h);return 1;}
function ABq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.dx)return 0;a:{switch(b.bO){case 8:if(C4(Be(a))){F1(a);c=1;}else{b=a.c;d=b.r;if(!d&&!b.o)c=1;else{if(d){e=b.o;c=d-1|0;MG(b.f,e,c);}else{e=b.o-1|0;c=Fm(b.f,e);b=a.c.f;KF(b,e);E_(b,e,Fm(b,e),1,C(54));}DQ(a);c=Cl(a,e,c,0);}}break a;case 9:if(!b.bB){if(!C4(Be(a)))C8(a,a.eC);else{f=Dy(Be(a));g=Fa(Be(a));c=g.D;d=f.D;e=(c-d|0)+1|0;h=Bx(e);i=h.data;j=P(Bv,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.eC;d=d+1|0;e=l;}b=new Ln;m=a.c;Sc(b,m.o,m.r);m=new SS;m.oB
=a;Oj(a,h,0,0,j,b,m);f.Q=f.Q+H(a.eC)|0;g.Q=g.Q+H(a.eC)|0;L4(a,a.c.r+H(a.eC)|0);DQ(a);}c=1;}else b:{if(!C4(Be(a))){b=a.c;f=BG(b.f,b.o);if(f.l.data.length>0){g=VU(a,f);if(g===null){c=1;break b;}m=a.c;n=m.f;e=m.o;b=Dp(e,m.r);n.b0=n.b0+1|0;o=n.f7;h=P(Gr,1);h.data[0]=APd(e,0,1,g,b.V,b.bd);Bw(o,h);JD(n,e,0,1,g);FY(f,0,H(g));L4(a,a.c.r-H(g)|0);}}else{b=Dy(Be(a));f=Fa(Be(a));c=f.D;p=b.D;c=(c-p|0)+1|0;h=Bx(c);k=h.data;j=P(Bv,c);q=j.data;g=a.c;e=g.r;l=g.o;c=0;while(p<=f.D){g=BG(a.c.f,p);if(g.l.data.length>0){g=VU(a,g);if
(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=Ir(h,c);j=C3(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.D)b.Q=Z(0,b.Q-H(g)|0);if(p==f.D){f.Q=Z(0,f.Q-H(g)|0);L4(a,a.c.r-H(g)|0);}d=d+1|0;}b=Dp(l,e);f=new UC;f.qL=a;Oj(a,h,0,1,j,b,f);}DQ(a);c=1;}break a;case 13:if(C4(Be(a)))F1(a);b=a.c;D$(BG(b.f,b.o));b=a.c;ACR(b.f,b.o,b.r);DQ(a);c=Cl(a,a.c.o+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ADK(a);}return c;}
function AAB(a,b){var c,d,e,f;a:{switch(b.bO){case 33:c=b.cl?G4(a,H9(a.W,a.A),b.bB):Hl(a,2-VJ(Cz(a),a.A)|0,0,b.cQ,b.bB);break a;case 34:c=!b.cl?Hl(a,VJ(Cz(a),a.A)-2|0,0,b.cQ,b.bB):G4(a,((a.W+Cz(a)|0)/a.A|0)-1|0,b.bB);break a;case 35:if(!Hv(a,b.bB)&&!CY(a,(E8(a)).z,b.bB)){c=0;break a;}c=1;break a;case 36:if(!Hv(a,b.bB)&&!CY(a,0,b.bB)){c=0;break a;}c=1;break a;case 37:c=b.cl;if(c&&b.cQ){Ig(a);d=a.c.gg;e=d.db;if(e<=0)d=null;else{f=d.eu.data;c=e-1|0;d.db=c;d=f[c];}if(d===null)c=1;else{Cl(a,Ll(d),Jb(d),0);HA(Be(a),
d.jQ);c=1;}break a;}c=RY(a,(-1),c,b.bB);break a;case 38:c=Hl(a,(-1),b.cl,b.cQ,b.bB);break a;case 39:c=b.cl;if(c&&b.cQ){d=a.c.gg;e=d.db;if(e==(d.ep-1|0))d=null;else{f=d.eu.data;c=e+1|0;d.db=c;d=f[c];}if(d===null)c=1;else{Cl(a,Ll(d),Jb(d),0);HA(Be(a),d.jQ);c=1;}break a;}c=RY(a,1,c,b.bB);break a;case 40:c=Hl(a,1,b.cl,b.cQ,b.bB);break a;default:}c=0;}if(c&&b.bB){b=(Be(a)).bo;d=a.c;B0(b,d.o,d.r);}if(c)Ku(a.c);return c;}
function Ig(a){var b,c,d,e,f,g,h;b=a.c;c=b.gg;d=c.db;c=d<0?null:c.eu.data[d];if(c!==null&&b.o==Ll(c)&&a.c.r==Jb(c))return;c=a.c;e=c.gg;b=new Kq;d=c.o;f=c.r;c=Be(a);b.lc=Dp(d,f);g=AGF(c);b.jQ=g;g.c1=0;f=e.db;h=e.ep;if(f==(h-1|0))Vc(e,b);else{d=f+1|0;while(d<h){RE(e);d=d+1|0;}Vc(e,b);}e.db=e.db+1|0;}
function DQ(a){a.c.f.sV=Nw(Fr(a));}
function Gl(a,b){var c,d,e,f,g,h;a.jN=null;K0(a.cG,null);L2(a.c);c=a.c;a.c=b;P3(c,null,null);P3(b,a,Fr(a));d=(Cf(a.cu.l8)).data;e=d.length;f=0;while(f<e){g=d[f].sh;h=AMN(J$(c.c_),J$(b.c_));g.f(h);f=f+1|0;}a.W=G0(b.hY*a.A);}
function Kw(a,b){var c;c=Le(a.c.f,b);if(c===null)return C(3);return c.q;}
function Do(a,b){return EV(b,a.R,a.ch);}
function Jk(a,b){var c,d,e,f,g;a.c.qw=b;if(b===null){Ct(FL(),C(85));K0(a.cG,null);}else{b=b.data;c=DX(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.fL<<24>>24;e=e+1|0;}K0(a.cG,c);}}
function R8(a,b){a.c.mX=b;}
function CE(a){return a.c.qw;}
function Be(a){return a.c.o1;}
function UY(a){var b;b=a.ku;if(b!==null)b.j(a);}
var ACB=F();
function ADl(){var a=this;B.call(a);a.fX=null;a.g$=null;a.e4=0;}
function Cx(a){var b=new ADl();AI1(b,a);return b;}
function AI1(a,b){a.fX=b;}
function BZ(a,b){var c,d,e;c=a.e4;d=a.fX;if(c==d.data.length)a.fX=C3(d,c+4|0);d=a.fX.data;e=a.e4;a.e4=e+1|0;d[e]=b;a.g$=null;}
function Ff(a,b){var c;BZ(a,b);c=new UR;c.sD=a;c.sE=b;return c;}
function Cf(a){var b;b=a.g$;if(!(b!==null&&b.data.length==a.e4))a.g$=C3(a.fX,a.e4);return a.g$;}
var ACZ=F();
function BK(b,c){if(b===c)return 1;return b!==null?b.bu(c):c!==null?0:1;}
function BM(b){if(b!==null)return b;b=new Ge;Bp(b,C(3));L(b);}
function Va(){B.call(this);this.mM=null;}
function AJB(a){var b,c,d,e,f,g;b=a.mM;c=b.sD;b=b.sE;d=0;while(true){e=c.fX.data;f=e.length;if(d>=f)break;if(e[d]===b){while(true){g=d+1|0;if(g>=f)break;e[d]=e[g];d=g;}e[d]=null;c.e4=c.e4-1|0;c.g$=null;}d=d+1|0;}}
var Vg=F(0);
var AAM=F();
function AIP(a,b){return a.Bx(b);}
function AK0(a){return a.Hc();}
function Hu(){var a=this;B.call(a);a.rx=null;a.qy=null;}
function ABC(b,c){return c!==null&&b!==null&&!BE(c,b)?0:1;}
var SN=F(0);
function MP(){B.call(this);this.uE=null;}
var QE=F(0);
var OJ=F(0);
function AA$(){var a=this;B.call(a);a.ss=null;a.mD=null;a.nm=null;a.dC=null;a.mb=null;a.jX=null;a.hi=null;a.e8=null;a.ix=0;a.k0=0;a.rX=null;a.d$=null;a.jm=null;}
function AOF(a,b,c,d){var e=new AA$();AE_(e,a,b,c,d);return e;}
function AE_(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new U9;f.pH=a;a.ss=f;f=new U7;f.v5=a;a.mD=f;g=new U8;g.sj=a;a.mb=new $rt_globals.ResizeObserver(Bn(g,"f"));f=new U6;f.o2=a;a.jX=f;a.ix=1;h=new Sn;h.jI=new Ua;f=new O4;f.ys=null;f.jx=AUP;h.qh=f;BM(f);g=new St;g.sK=f;h.vW=g;h.gn=e;i=e.length;j=0;while(j<i){f=e[j];k=new Su;k.rw=h;k.rv=j;g=Bn(k,"f");f.onmessage=g;f=e[j];g=AAG();f.postMessage(g);j=j+1|0;}h.gX=0;h.kU=Bx(i);h.ks=Bx(i);a.jm=h;a.nm=(Fe()).getElementById($rt_ustr(d));e=YA();d=0;e.tabIndex=d;g=e.style;g.setProperty("width",
"100%");g.setProperty("height","100%");g.setProperty("outline","none");a.dC=e;a.nm.appendChild(e);d=a.dC;f=AMw(!!0,!!0,!!1,!!1);d=d.getContext("webgl2",f);if(d===null)c.s();else{c=new Ps;e=a.dC;g=a.mD;c.dz=null;c.g6=e;c.b$=AS6(g);g=$rt_globals.window;l=P(CV,14);m=l.data;f=new V1;f.nY=c;m[0]=CG(c,e,C(86),f);k=new V2;k.s5=c;m[1]=CG(c,e,C(87),k);k=new V3;k.pu=c;m[2]=CG(c,e,C(88),k);k=new V4;k.v2=c;m[3]=CG(c,e,C(89),k);m[4]=CG(c,e,C(90),AST(c));m[5]=CG(c,e,C(91),ATp(c));m[6]=CG(c,e,C(92),ARO(c));m[7]=CG(c,e,C(93),
ART(c));m[8]=CG(c,e,C(94),ATx(c));m[9]=CG(c,e,C(95),ASJ(c));m[10]=CG(c,e,C(96),ARA(c));m[11]=ABM(c,g,C(97),ASf(c),1);m[12]=CG(c,g,C(98),ATG(c));m[13]=CG(c,g,C(99),ASx(c));c.lg=AQn(l);Z5(c,e);a.hi=c;a.e8=ASo(d,a.mD);AOz(a.mb,a.dC);e=$rt_globals.window;d=a.jX;e.addEventListener("resize",Bn(d,"handleEvent"));a.d$=b.gw(ZW(a));S5(a);}}
function UJ(a){a.dC.focus();}
function ZW(a){var b,c,d;b=new Mi;c=a.e8;d=a.hi.b$;b.jM=c;b.bj=d;b.i6=a;return b;}
function S5(a){a.k0=$rt_globals.requestAnimationFrame(Bn(a.ss,"onAnimationFrame"));}
function I9(a){a.ix=1;}
function S3(a,b,c){var d,e;a.hi.dz=Cg(b,c);d=a.dC;e=b;d.width=e;d=a.dC;e=c;d.height=e;d=a.e8;Bg(d.cV,b,c);e=d.U;d=d.cV;b=d.a;c=d.b;e.viewport(0,0,b,c);a.d$.i2(a.e8.cV,J3(a));a.d$.e$();}
function Nw(a){return $rt_globals.performance.now()/1000.0;}
function J3(a){return $rt_globals.window.devicePixelRatio;}
function VS(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADt(b,0);else{c=new WW;d=$rt_globals.window.showOpenFilePicker();e=new WV;e.qG=b;e.qF=c;d.then(Bn(e,"f"),Bn(c,"f"));}}
function D8(a,b,c,d){var e,f,g,h;e=a.jm;f=e.gX;if(f>0){g=e.kU.data;f=f-1|0;e.gX=f;KS(e,b,c,d,g[f]);}else{h=e.jI;e=new We;e.tx=b;e.uk=c;e.s8=d;b=new TP;b.oA=e;c=h.jH;b.t7=c;if(c===null)h.kK=b;else c.s$=b;h.jH=b;h.bN=h.bN+1|0;h.hW=h.hW+1|0;}}
function Lw(a,b,c,d,e){var f,g;f=a.jm;if(c>=f.gn.length)c=0;g=f.ks.data;g[c]=g[c]+1|0;KS(f,b,d,e,c);}
function ADV(b){var c;c=new WI;c.oc=b;return c;}
var Xe=F(0);
var AUX=null;function ATe(){ATe=Bm(Xe);ANf();}
function ANf(){AUX=new $rt_globals.TextDecoder("utf-16");}
function Lo(){B.call(this);this.kM=null;}
function FZ(){var a=this;Lo.call(a);a.nX=null;a.bh=null;}
function Vt(a,b){var c,d,e;a.kM=b;a.nX=Jr(0,0,64,255,new B5);c=new T1;c.cI=new Bj;c.km=Cx(P(Ih,0));c.dp=new Bj;c.uC=new Bj;c.wx=new B5;c.wy=new B5;d=b.jM;c.dl=d;e=b.i6;c.gQ=e;c.cE=d.lv;d=new RL;d.u1=e;c.di=d;d=b.bj.kf;e=new Qc;e.r9=c;BZ(d,e);d=b.bj.mv;e=new Qa;e.vX=c;BZ(d,e);a.bh=c;BZ(b.bj.er,new R1);b=b.bj.er;c=a.bh;BM(c);d=new R0;d.oD=c;BZ(b,d);}
function TG(a){var b,c,d,e,f,g,h;b=a.kM.jM;c=a.nX;d=b.U;e=c.bq;f=c.bG;g=c.bc;h=c.bZ;d.clearColor(e,f,g,h);b.U.clear(16384);}
function SH(a,b,c){var d,e,f,g;a:{d=a.bh;Cw(d.cI,b);if(d.b1!==c){d.b1=c;e=(Cf(d.km)).data;f=e.length;g=0;while(true){if(g>=f)break a;b=e[g];b.jc=Im(b.cH,b.iR);d=BP(b.cc);while(BQ(d)){PY(BS(d),b.jc,b.cH);}g=g+1|0;}}}}
var OH=F(0);
var Ju=F(0);
function LV(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HL;c=new H7;d=new Ii;ACV();Jm(d,AU3);L0(c,d,BH(AU4),BH(AU5),BH(AU6),BH(AU4),BH(AU7),BH(AU8),BH(AU9),BH(AU$),BH(AU_),BH(AVa));ZJ();e=(AVb.gv()).data;f=e.length;g=P(Iq,f);h=g.data;i=0;while(i<f){h[i]=e[i].lX;i=i+1|0;}j=ABR(O(C(100)),O(C(101)),O(C(102)),O(C(103)));k=new HO;l=new HZ;ALs();m=AVc;L6(l,m,AVd,AVe,AVf,AVg,m);K5(k,l,ADn(),ADw(O(C(104)),O(C(105)),O(C(106))),ADn(),XU(1,0.125),AVh,AVi);Iy(b,c,g,j,k,Ya(O(C(107)),O(C(108)),O(C(109)),O(C(110))));a.iE(b);}
function FU(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HL;c=new H7;d=new Ii;AHS();Jm(d,AVj);L0(c,d,BH(AVk),BH(AVl),BH(AVm),BH(AVk),BH(AVn),BH(AVo),BH(AVp),BH(AVq),BH(AVr),BH(AVs));UH();e=(AVt.gv()).data;f=e.length;g=P(Iq,f);h=g.data;i=0;while(i<f){h[i]=e[i].hV;i=i+1|0;}j=ABR(O(C(111)),O(C(112)),O(C(113)),O(C(114)));k=new HO;l=new HZ;AEG();m=AVu;L6(l,m,AVv,AVw,AVx,AVy,m);K5(k,l,ACQ(),ADw(O(C(115)),O(C(105)),O(C(106))),ACQ(),XU(1,0.17499999701976776),AVz,AVA);Iy(b,c,g,j,k,Ya(O(C(107)),O(C(108)),O(C(109)),O(C(116))));a.iE(b);}
function J4(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HL;c=new H7;d=new Ii;ACE();Jm(d,AVB);L0(c,d,BH(AVC),BH(AVD),BH(AVE),BH(AVC),BH(AVF),BH(AVG),BH(AVH),BH(AVI),BH(AVJ),BH(AVK));ABL();e=(AVL.gv()).data;f=e.length;g=P(Iq,f);h=g.data;i=0;while(i<f){h[i]=e[i].k5;i=i+1|0;}j=ABR(O(C(117)),O(C(118)),O(C(119)),O(C(120)));k=new HO;l=new HZ;AEU();m=AVM;L6(l,m,AVN,AVO,AVP,AVQ,m);K5(k,l,ADh(),ADw(O(C(121)),O(C(122)),HG(0)),ADh(),XU(1,0.07500000298023224),AVR,AVS);Iy(b,c,g,j,k,Ya(O(C(123)),O(C(124)),O(C(125)),O(C(126))));a.iE(b);}
var K9=F(0);
function Mq(){var a=this;FZ.call(a);a.cq=null;a.fc=null;}
function AJd(a,b){if(Wk(a.bh,b)){Rs(a.fc);J8(a.cq,b);}}
function AO4(a,b){return KC(a.cq,b);}
function AIQ(a){TG(a);Iw(a.cq);Xv(a.fc);}
function AEd(a,b,c){SH(a,b,c);IJ(a.cq,new Bj,b,c);}
function AHj(a,b){BM(b);MK(a.fc,b);Jz(a.cq,b);}
var Kj=F(0);
function OI(){B.call(this);this.rL=null;}
function ANb(a,b,c,d,e,f){var g,h,i,j;g=a.rL;h=E7(b);i=HE(d,c);j=JE();g=g.provideDeclaration(h,i,j);b=new Ml;b.uh=e;b.ug=f;LT(g,b,f);}
var W6=F(0);
function WN(){B.call(this);this.oT=null;}
var Fl=F(0);
function MD(){B.call(this);this.sh=null;}
function V_(){B.call(this);this.uc=null;}
function AGX(a,b,c,d,e,f){var g,h,i,j;g=a.uc;h=E7(b);i=HE(d,c);j=JE();g=g.provideDefinition(h,i,j);b=new QR;b.sZ=e;b.sY=f;LT(g,b,f);}
function Ln(){var a=this;B.call(a);a.V=0;a.bd=0;}
function Dp(a,b){var c=new Ln();Sc(c,a,b);return c;}
function Sc(a,b,c){a.V=b;a.bd=c;}
function AEC(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return a.V==c.V&&a.bd==c.bd?1:0;}return 0;}
function ANP(a){var b,c,d,e;b=P(B,2).data;b[0]=Cs(a.V);b[1]=Cs(a.bd);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.be)|0;d=d+1|0;}return c;}
function ANl(a,b){var c;b=b;c=BD(a.V,b.V);if(!c)c=BD(a.bd,b.bd);return c;}
var Gb=F(0);
var HF=F(0);
var Ez=F(0);
var Hc=F(0);
function Oe(){var a=this;FZ.call(a);a.x=null;a.w=null;a.dF=null;a.gT=0;a.fv=null;a.iu=null;a.vZ=null;}
function XI(a,b){var c,d,e,f,g;if(a.x===b)a.gT=a.gT|1;if(a.w===b)a.gT=a.gT|2;if((a.gT&3)==3){Ct(FL(),C(127));b=a.x.c;c=a.w.c;d=Dg(b.f);e=Dg(c.f);f=Y9(b.f);g=Y9(c.f);b=a.kM.i6;c=new P2;c.re=a;D8(b,c,C(128),G(B,[d,f,e,g]));}}
function AQf(a,b,c){if(DH(a.bh,a.x))return Gx(a.x,b,c);if(!DH(a.bh,a.w))return 0;return Gx(a.w,b,c);}
function Xq(a,b){var c;c=new S1;c.ql=b;return c;}
function Vf(a,b,c){var d,e,f,g,h,i,j;d=a.fv;if(d!==null&&d.fE!==null){e=b!==a.x?0:1;f=Fj(b);g=(Gu(b)+f|0)/2|0;h=g-f|0;d=a.fv;d=d.fE.data[FH(d,g,e)];i=g-(!e?d.hy:d.hz)|0;j=b.W-T(f,b.A)|0;e=KO(T(((!e?d.hz:d.hy)+i|0)-h|0,c.A)+j|0,FN(c));c.W=e;c.c.hY=e/c.A;return;}}
function ANQ(a,b){var c,d;c=KC(a.x,b);d=KC(a.w,b);return !c&&!d?0:1;}
function AK6(a){TG(a);Iw(a.x);Iw(a.w);ADI(a.iu,a.fv,a.bh,a.x,a.w,a.vZ,a.dF.fJ);Xv(a.dF);}
function Rf(a){return ADG(0);}
function AOq(a){Nt(a.x);Nt(a.w);}
function AKW(a){Xt(a.x);Xt(a.w);}
function APr(a,b){Od(a.x,b);Od(a.w,b);}
function AGJ(a,b){if(Wk(a.bh,b)){Rs(a.dF);J8(a.x,b);J8(a.w,b);}}
function AKl(a,b,c){var d,e,f,g,h,i;SH(a,b,c);d=new Bj;e=Co(20.0,c);f=new Bj;g=b.a/2|0;h=e/2|0;ZA(f,g-h|0,b.b);IJ(a.x,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;IJ(a.w,d,f,c);Bg(a.iu.cY,f.a,d.b);Bg(a.iu.eo,d.a-f.a|0,f.b);}
function AEV(a,b){BM(b);MK(a.dF,b);Jz(a.x,b);Jz(a.w,b);}
function AMW(a,b){var c,d;c=Do(a.x,b.n)&&NX(a.x,b)?1:0;d=Do(a.w,b.n)&&NX(a.w,b)?1:0;return !c&&!d?0:1;}
function AJh(a,b,c,d){var e,f;e=Do(a.x,b.n)&&MJ(a.x,b,c,d)?1:0;f=Do(a.w,b.n)&&MJ(a.w,b,c,d)?1:0;return !e&&!f?0:1;}
function ALj(a,b,c){var d,e,f,g,h,i,j,k;d=Do(a.x,b.n);e=Do(a.w,b.n);f=a.bh;g=f.d2;h=g!==null?0:1;i=a.x;j=g!==i?0:1;k=g!==a.w?0:1;if(d&&!(!h&&!k))Fp(f,i);if(e&&!(!h&&!j))Fp(a.bh,a.w);if(d){i=Mz(a.x,b,c);if(i!==null)return i;}return !e?null:Mz(a.w,b,c);}
function ANI(a,b,c){var d,e,f,g;d=Do(a.x,b.n);e=Do(a.w,b.n);f=d&&S7(a.x,b,c)?1:0;g=e&&S7(a.w,b,c)?1:0;return !f&&!g?0:1;}
function ANa(a,b,c,d){var e,f,g,h;e=Do(a.x,b.n);f=Do(a.w,b.n);g=e&&Ji(a.x,c,d)?1:0;h=f&&Ji(a.w,c,d)?1:0;return !g&&!h?0:1;}
function AJ$(a){return DH(a.bh,a.x)?Xq(a,a.x):!DH(a.bh,a.w)?null:Xq(a,a.w);}
var ZS=F();
var Zh=F();
var BY=F(0);
function Pu(){var a=this;B.call(a);a.oe=null;a.of=null;}
function AKD(a,b){var c,d,e;c=a.oe;d=a.of;e=new Pq;e.g9=AOF(new XP,new XQ,Ce(d.containerId),b);e.bw=(Nv(e)).cq;if(ABK(d))QG(e,d.theme);if(Zw(d))Uq(e,d.readonly);c.f(e);}
var ACf=F(0);
function ABK(b){return "theme" in b?1:0;}
function Zw(b){return "readonly" in b?1:0;}
function ABH(b){return !("workerUrl" in b?1:0)?"worker.js":b.workerUrl;}
function X_(b){return !("numThreads" in b?1:0)?2:b.numThreads|0;}
var AAT=F();
function Zc(b,c,d,e){var f,g,h,i,j;f=new $rt_globals.Array();g=0;while(g<e){h=new $rt_globals.Worker(d);i=new NJ;i.pY=h;i.pZ=f;i.p0=e;i.p1=b;i.pU=c;j=Bn(i,"f");h.onmessage=j;g=g+1|0;}}
function QO(){var a=this;B.call(a);a.u9=null;a.u$=null;}
function AHV(a,b){var c,d,e,f;c=a.u9;d=a.u$;e=new VE;f=AOF(new UL,new UM,Ce(d.containerId),b);e.qa=f;e.dj=f.d$;if(ABK(d))PF(e,d.theme);if(Zw(d))P8(e,d.readonly);c.f(e);}
function NJ(){var a=this;B.call(a);a.pY=null;a.pZ=null;a.p0=0;a.p1=null;a.pU=null;}
function ANd(a,b){var c,d,e,f,g;c=a.pY;d=a.pZ;e=a.p0;f=a.p1;g=a.pU;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var Y=F(0);
function XM(){B.call(this);this.sX=null;}
function AI4(a,b){var c,d,e,f,g;c=b.data;b=a.sX;d=c.length;e=P(Bv,d).data;f=0;while(f<d){e[f]=c[f].cO();f=f+1|0;}d=e.length;g=new $rt_globals.Array(d);f=0;while(f<d){c=$rt_ustr(e[f]);f;g[f]=c;f=f+1|0;}b.f(g);}
var ZF=F();
function AAG(){return "ping";}
function ADM(b){return b===AAG()?1:0;}
var XP=F();
function AJN(a,b){var c,d,e,f,g;c=new Mq;Vt(c,b);d=AOD(c.bh);c.fc=d;e=AAc(c.bh,d);c.cq=e;NV(c.bh,e);BZ(b.bj.d1,c.fc);BZ(b.bj.f8,c.fc);BZ(b.bj.d1,c.cq);d=b.bj.er;e=new PB;e.xb=c;BZ(d,e);d=b.bj.er;e=new JV;f=c.cq;BM(f);g=new Pz;g.vq=f;MQ(e,b,g);BZ(d,e);d=b.bj.jo;e=c.cq;BM(e);f=new PA;f.pf=e;BZ(d,f);d=b.bj.iJ;e=new NY;e.qd=c;BZ(d,e);d=b.bj.f8;e=new NZ;e.wa=c;BZ(d,e);b=b.bj.iz;d=new NW;d.nG=c;BZ(b,d);FU(c);return c;}
var Bk=F(0);
var XQ=F();
function AIC(a){ABk();}
var UL=F();
function ANz(a,b){var c,d,e,f;c=new Oe;Vt(c,b);d=new Qb;d.cY=new Bj;d.eo=new Bj;d.ia=new Bj;d.ib=new Bj;d.h9=new Bj;d.h$=new Bj;c.iu=d;c.vZ=AA2();d=AOD(c.bh);c.dF=d;c.x=AAc(c.bh,d);c.w=AAc(c.bh,c.dF);d=c.x;d.bz=1;e=new Uw;e.vh=c;f=new Ux;f.q$=c;VY(d,e,e);VY(c.w,f,f);d=c.x;e=new Uy;e.nC=c;d.ku=e;e=c.w;f=new Us;f.um=c;e.ku=f;R8(d,0);R8(c.w,0);NV(c.bh,c.x);BZ(b.bj.d1,c.dF);BZ(b.bj.f8,c.dF);BZ(b.bj.f8,c);BZ(b.bj.d1,c);d=b.bj.er;e=new Ut;e.xz=c;BZ(d,e);d=b.bj.er;e=new JV;f=new Uu;f.m8=c;MQ(e,b,f);BZ(d,e);BZ(b.bj.jo,
c);BZ(b.bj.iJ,c);b=b.bj.iz;d=new Uv;d.sU=c;BZ(b,d);FU(c);return c;}
var UM=F();
function AQ_(a){ABk();}
var Rm=F(0);
function U9(){B.call(this);this.pH=null;}
function AJk(a,b){var c,d;c=b;b=a.pH;if(!(!b.d$.lL(c/1000.0)&&!b.ix)){d=b.e8.cV;if(T(d.a,d.b)){b.ix=0;b.d$.e$();}}S5(b);}
function U7(){B.call(this);this.v5=null;}
function C1(a){I9(a.v5);}
var Qk=F(0);
function U8(){B.call(this);this.sj=null;}
function AHq(a,b,c){var d,e,f,g;c=a.sj;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dC){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=J3(c);S3(c,G0(f.width*g),G0(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];S3(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AC4=F();
function AOz(b,c){ANF(b,c,AEx());}
function AEx(){return {box:'device-pixel-content-box'};}
function ANF(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cd=F(0);
function U6(){B.call(this);this.o2=null;}
function ANo(a,b){b=a.o2;b.d$.i2(b.e8.cV,J3(b));b.d$.e$();}
function Sn(){var a=this;B.call(a);a.jI=null;a.gn=null;a.qh=null;a.kU=null;a.ks=null;a.nR=0;a.gX=0;a.vW=null;}
function KS(a,b,c,d,e){var f,g,h,i,j,k;d=d.data;f=a.nR+1|0;a.nR=f;g=a.qh;h=Cs(f);g.hK=LN(g,g.hK,h);h=Un(g,h);Mj(h,b);Mj(h,b);g.jC=g.jC+1|0;b=a.gn[e];i=d.length;g=new $rt_globals.Array(i+2|0);h=f;0;g[0]=h;c=$rt_ustr(c);1;g[1]=c;h=new $rt_globals.Array();j=0;while(j<i){c=d[j];if(c instanceof Bv)k=$rt_ustr(c);else if(H$(c,$rt_arraycls($rt_bytecls())))k=c.data.buffer;else if(H$(c,$rt_arraycls($rt_charcls())))k=c.data.buffer;else if(H$(c,$rt_arraycls($rt_intcls())))k=c.data.buffer;else{if(!(c instanceof Kx)){b=new BF;c
=BA(c);if(c.ko===null)c.ko=$rt_str(c.fK.$meta.name);h=c.ko;c=new R;U(c);K(K(c,C(129)),h);Bp(b,S(c));L(b);}c=c;k=c.hX;if(k===null)k=c.fR;}f=j+2|0;f;g[f]=k;if(k instanceof $rt_globals.ArrayBuffer?1:0)h.push(k);j=j+1|0;}b.postMessage(g,h);}
var LI=F(El);
var Mo=F(0);
var W9=F(0);
function Ua(){var a=this;LI.call(a);a.kK=null;a.jH=null;a.hW=0;}
var W5=F(0);
var MW=F(0);
function O4(){var a=this;DA.call(a);a.hK=null;a.jx=null;a.ys=null;a.jC=0;}
function ADi(a,b){var c;c=Un(a,b);if(c===null)return null;a.hK=JC(a,a.hK,b);a.jC=a.jC+1|0;return c.iB;}
function Un(a,b){var c,d;c=a.hK;while(true){if(c===null)return null;d=I4(a.jx,b,c.iZ);if(!d)break;c=d>=0?c.bT:c.bC;}return c;}
function LN(a,b,c){var d,e;if(b===null){b=new IZ;d=null;b.iZ=c;b.iB=d;b.fi=1;b.ft=1;return b;}e=I4(a.jx,c,b.iZ);if(!e)return b;if(e>=0)b.bT=LN(a,b.bT,c);else b.bC=LN(a,b.bC,c);D6(b);return Jg(b);}
function JC(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=I4(a.jx,c,b.iZ);if(d<0)b.bC=JC(a,b.bC,c);else if(d>0)b.bT=JC(a,b.bT,c);else{e=b.bT;if(e===null)return b.bC;f=b.bC;g=P(IZ,e.fi).data;h=0;while(true){b=e.bC;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bT;while(h>0){h=h+(-1)|0;j=g[h];j.bC=b;D6(j);b=Jg(j);}e.bT=b;e.bC=f;D6(e);b=e;}D6(b);return Jg(b);}
function St(){B.call(this);this.sK=null;}
function Su(){var a=this;B.call(a);a.rw=null;a.rv=0;}
function AEt(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.rw;d=a.rv;ADM(b.data);e=c.ks.data;f=e[d];if(f>0)e[d]=f-1|0;else{g=c.jI;h=g.kK;if(h===null)i=null;else{i=h.s$;g.kK=i;if(i!==null)i.t7=null;else g.jH=null;g.hW=g.hW-1|0;g.bN=g.bN+1|0;i=h.oA;}if(i!==null)KS(c,i.tx,i.uk,i.s8,d);else{e=c.kU.data;j=c.gX;c.gX=j+1|0;e[j]=d;}}c=c.vW;b=b.data;if(!ADM(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BF;X(b);L(b);}if(b.length<1){b=new BF;AB3(b);L(b);}g=Cs(b[0]);h=ADi(c.sK,g);e=P(B,b.length-1|0);k=e.data;f=0;j=k.length;while
(f<j){l=f+1|0;g=b[l];k[f]=(typeof g==='string'?1:0)?Ce(JG(g)):(g instanceof $rt_globals.ArrayBuffer?1:0)?ASe(JG(g)):(g instanceof $rt_globals.File?1:0)?ABu(null,JG(g)):!(g instanceof $rt_globals.FileSystemFileHandle?1:0)?null:ABu(JG(g),null);f=l;}h.j(e);}}
function Ps(){var a=this;B.call(a);a.b$=null;a.g6=null;a.lg=null;a.dz=null;}
function MT(){return (Fe()).activeElement;}
function CG(a,b,c,d){b.addEventListener($rt_ustr(c),Bn(d,"handleEvent"));return Wl(a,b,c,d);}
function ABM(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bn(d,"handleEvent"),!!e);return Wl(a,b,c,d);}
function Wl(a,b,c,d){var e;e=new Qh;e.os=b;e.ou=c;e.ot=d;return e;}
function Tv(a,b){var c;c=new Up;c.v1=b;return c;}
function Eo(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.g6.getBoundingClientRect();e=Cg(G0((b.clientX-d.left)*c),G0((b.clientY-d.top)*c));f=new Bj;g=a.dz;f.a=g.a;f.b=g.b;d=new Mf;TV(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.n=e;d.wD=f;return d;}
function Xy(a,b,c){var d,e,f,g;d=new OY;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;TV(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j4=0;d.d5=e;d.bO=f;d.tX=c;d.xR=g;return d;}
function Dr(a,b){b.stopPropagation();b.preventDefault();}
function Z5(a,b){var c;c=new W3;c.qm=b;b.onpointerdown=Bn(c,"f");c=new W4;c.o7=b;b.onpointerup=Bn(c,"f");}
function KH(){var a=this;B.call(a);a.rU=null;a.cZ=null;a.U=null;a.lv=0;a.t5=null;a.xh=0;a.x_=0;a.jE=null;a.yF=null;a.yp=null;a.ye=null;a.e_=null;a.fw=null;a.yf=null;a.gE=null;a.hE=null;a.yx=null;a.iw=null;a.cV=null;a.vK=null;a.lF=0;a.jZ=0;a.mg=0;a.l1=0;a.ih=0;a.md=null;}
function ABE(a,b,c,d){var e,f,g,h,i,j;a.cV=new Bj;a.lF=0;a.md=new V7;a.rU=c;a.lv=d;e=$rt_str(b.getParameter(7938));f=new R;U(f);K(K(f,C(130)),e);$rt_globals.console.info($rt_ustr(S(f)));a.U=b;a.cZ=No(c,4,4,1);g=AEl(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=B1(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;c=new Qi;Ha();f=AVT;c.dN=b;c.gm=f;c.lA=h.length/f.kI|0;c.mo=j.length;f
=b.createBuffer();c.hT=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);c.jw=null;f=b.createBuffer();c.jn=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}f=null;b.bindBuffer(34962,f);f=null;b.bindBuffer(34963,f);a.iw=c;a.x_=J0(e,C(131));c=new Qj;c.dP=b;a.t5=c;d=b.getParameter(3379);a.xh=d;c=new R;U(c);Bl(K(c,C(132)),d);$rt_globals.console.info($rt_ustr(S(c)));g=P(CI,9);i=g.data;c=new VH;GB(c,b,C(133),C(134),AVT);e=c.bt;c.u5=b.getUniformLocation(e,"uColor");a.jE=c;i[0]=
c;c=ARL(b);a.yF=c;i[1]=c;c=ASW(b);a.yp=c;i[2]=c;c=ATi(b);a.ye=c;i[3]=c;c=ASp(b);a.e_=c;i[4]=c;c=ATA(b);a.fw=c;i[5]=c;c=ATr(b);a.yf=c;i[6]=c;c=ATc(b);a.gE=c;i[7]=c;c=ATd(b);a.hE=c;i[8]=c;a.yx=g;ADs(b,C(135));}
function E$(a,b,c,d){return No(a.rU,b,c,d);}
function Dh(a,b){var c;if(b==a.jZ)return b;if(!b)a.U.disable(3042);else{a.U.enable(3042);a.U.blendFuncSeparate(770,771,1,1);}c=a.jZ;a.jZ=b;return c;}
function RI(a,b,c){UA(a,b.a,b.b,c);}
function UA(a,b,c,d){var e,f;e=d.a;f=d.b;a.l1=1;a.ih=1;d=a.md;d.r6=b;d.r8=c;d.r5=e;d.r4=f;TW(a);}
function Lg(a){a.l1=0;a.ih=0;TW(a);}
function TW(a){var b,c,d,e,f,g;b=a.mg;c=a.l1;if(b!=c){a.mg=c;if(!c)a.U.disable(3089);else a.U.enable(3089);}if(a.mg&&a.ih){a.ih=0;d=a.U;e=a.md;b=e.r6;c=a.cV.b-e.r8|0;f=e.r4;c=c-f|0;g=e.r5;d.scissor(b,c,g,f);}}
function Gc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.iw;c=a.lF;d=b.gm.tg;e=b.dN;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dN;h=b.hT;e.bindBuffer(34962,h);i=b.gm.mI.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dN;m=k.hc;n=k.e2;o=b.gm.kI*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.e2|0;j=j+1|0;}a:{e=b.jw;if(e!==null){c=0;b.dN.bindBuffer(34962,e);i=b.gm.rT.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dN;j=e.hc;p=e.e2;m=e.pQ;n=b.gm.qe;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.e2|0;g=g+1|0;}}}q=b.jn;if(q===null){c=b.lA;if(c>0)b.dN.drawArrays(4,0,c);}else{b.dN.bindBuffer(34963,q);k=b.dN;g=b.mo;k.drawElements(4,g,5123,0);}a.lF=d;}
function BB(a,b,c,d,e){Gg(a,a.jE);GU(a.jE,a.U,b,c,d,a.cV);d=a.jE;Gh(a.U,d.u5,e);Gc(a);}
function Et(a,b,c,d,e,f,g,h,i){Gg(a,a.e_);GU(a.e_,a.U,b,c,d,a.cV);TQ(a.e_,a.U,f);ME(a.e_,a.U,f,e);S$(a.e_,a.U,g,h);d=a.e_;e=a.U;d=d.pA;e.uniform2f(d,i,0.0);Gc(a);}
function Ew(a,b,c,d,e,f,g,h){Gg(a,a.fw);GU(a.fw,a.U,b,c,d,a.cV);TQ(a.fw,a.U,f);ME(a.fw,a.U,f,e);S$(a.fw,a.U,g,h);Gc(a);}
function GY(a){var b,c;b=new IY;c=a.t5;b.eJ=new Bj;b.es=c;b.eS=c.dP.createTexture();AVU=AVU+1|0;return b;}
function Gg(a,b){var c,d;if(b!==a.vK){c=a.U;d=b.bt;c.useProgram(d);a.vK=b;}}
function ACC(){var a=this;KH.call(a);a.xO=null;a.yq=null;}
function ASo(a,b){var c=new ACC();AJD(c,a,b);return c;}
function AJD(a,b,c){ABE(a,b,new TY,1);a.yq=new TX;a.xO=c;}
function Gw(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;a:{f=a.cZ;switch(e){case 1:break;case 2:g='italic ';break a;default:g='';break a;}g='oblique ';}h=g+d+' '+c+'px '+$rt_ustr(b);M0(f,h);g=f.dh.measureText("W");i=g.fontBoundingBoxAscent;j=g.fontBoundingBoxDescent;k=g.width;l=GE(f,C(64));m=GE(f,C(136));g=new Ky;h=h;g.mm=b;g.w2=c;n=c|0;if(n!==c){b=new R;U(b);f=K(b,C(137));ABr(f,f.I,c);$rt_globals.console.info($rt_ustr(S(b)));}g.pL=n;g.w$=d;g.xw=e;g.ej=i;g.dU=j;g.w0=l;g.l$=k;g.nD=h;g.rN=DD(i);g.yh=DD(g.dU);d=m*32.0|
0;n=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;b:{g.w6=d;switch(e){case 1:break;case 2:b=C(138);break b;default:b=C(139);break b;}b=C(140);}g.wT=b;return g;}
function ZL(){var a=this;B.call(a);a.er=null;a.wl=null;a.d1=null;a.f8=null;a.iz=null;a.jo=null;a.iJ=null;a.mv=null;a.kf=null;a.cU=null;a.ho=null;a.oZ=0;}
function AS6(a){var b=new ZL();AMV(b,a);return b;}
function AMV(a,b){a.er=Cx(P(D9,0));a.wl=Cx(P(D9,0));a.d1=Cx(P(ET,0));a.f8=Cx(P(Gb,0));a.iz=Cx(P(Iu,0));a.jo=Cx(P(HF,0));a.iJ=Cx(P(Hc,0));a.mv=Cx(P(Bk,0));a.kf=Cx(P(Bk,0));a.cU=b;}
function TC(a,b){var c,d,e,f;C1(a.cU);c=(Cf(!b.tX?a.wl:a.er)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].cn(b);if(f)break;if(b.j4)break;e=e+1|0;}return f;}
function Q0(a,b,c){var d,e,f;C1(a.cU);d=(Cf(a.jo)).data;e=d.length;f=0;while(f<e){if(d[f].mn(b,c))return 1;f=f+1|0;}return 0;}
function V1(){B.call(this);this.nY=null;}
function AMT(a,b){var c;c=a.nY;if(TC(c.b$,Xy(c,b,1)))Dr(c,b);}
function V2(){B.call(this);this.s5=null;}
function AM6(a,b){var c;c=a.s5;if(TC(c.b$,Xy(c,b,0)))Dr(c,b);}
function V3(){B.call(this);this.pu=null;}
function ALk(a,b){var c,d,e,f,g,h,i;c=a.pu;if(c.dz!==null){a:{b:{d=Eo(c,b);e=c.b$;C1(e.cU);f=e.ho;if(f!==null)f.j(d);else{g=(Cf(e.d1)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].gh(d))break a;i=i+1|0;}}}}Dr(c,b);}}
function V4(){B.call(this);this.v2=null;}
function AKJ(a,b){var c,d,e,f,g,h;c=a.v2;b.button;if(c.dz!==null)a:{d=Eo(c,b);c=c.b$;e=b.button;C1(c.cU);if(c.ho===null){f=(Cf(c.d1)).data;g=f.length;h=0;while(h<g){b=f[h].f4(d,e);if(b!==null){c.ho=b;c.oZ=e;break a;}h=h+1|0;}}}}
function AC$(){B.call(this);this.sc=null;}
function AST(a){var b=new AC$();AOy(b,a);return b;}
function AOy(a,b){a.sc=b;}
function AK9(a,b){var c,d,e,f,g,h,i;c=a.sc;b.button;if(c.dz!==null){d=Eo(c,b);e=c.b$;f=b.button;C1(e.cU);if(f==e.oZ&&e.ho!==null)e.ho=null;g=(Cf(e.d1)).data;h=g.length;i=0;a:{while(i<h){if(g[i].gf(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Dr(c,b);}}
function AC_(){B.call(this);this.ov=null;}
function ATp(a){var b=new AC_();AL9(b,a);return b;}
function AL9(a,b){a.ov=b;}
function ANB(a,b){var c,d,e,f,g,h,i,j,k;c=a.ov;if(c.dz!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.b$;f=Eo(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;C1(e.cU);i=(Cf(e.f8)).data;j=i.length;k=0;b:{while(k<j){if(i[k].f9(f,d,h))break b;k=k+1|0;}}Dr(c,b);}}
function ADa(){B.call(this);this.we=null;}
function ARO(a){var b=new ADa();AN5(b,a);return b;}
function AN5(a,b){a.we=b;}
function AI7(a,b){var c,d,e,f,g,h,i,j;c=a.we;if(c.dz!==null){d=Eo(c,b);e=c.b$;f=b.button;g=b.detail;C1(e.cU);h=(Cf(e.d1)).data;i=h.length;j=0;a:{while(j<i){if(h[j].fN(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Dr(c,b);}}
function ADb(){B.call(this);this.sn=null;}
function ART(a){var b=new ADb();APU(b,a);return b;}
function APU(a,b){a.sn=b;}
function ARc(a,b){var c,d,e,f,g,h,i;c=a.sn;if(c.dz!==null){d=Eo(c,b);e=c.b$;C1(e.cU);f=(Cf(e.iz)).data;g=f.length;h=0;a:{while(h<g){if(f[h].cn(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Dr(c,b);}}
function ADc(){B.call(this);this.oL=null;}
function ATx(a){var b=new ADc();AJ0(b,a);return b;}
function AJ0(a,b){a.oL=b;}
function AIc(a,b){var c,d,e;b=a.oL.b$;c=(Cf(b.kf)).data;d=c.length;e=0;while(e<d){c[e].s();e=e+1|0;}C1(b.cU);}
function ADd(){B.call(this);this.vb=null;}
function ASJ(a){var b=new ADd();API(b,a);return b;}
function API(a,b){a.vb=b;}
function AOH(a,b){var c,d,e;b=a.vb.b$;c=(Cf(b.mv)).data;d=c.length;e=0;while(e<d){c[e].s();e=e+1|0;}C1(b.cU);}
function ADN(){B.call(this);this.uB=null;}
function ARA(a){var b=new ADN();AFk(b,a);return b;}
function AFk(a,b){a.uB=b;}
function AQL(a,b){var c;c=a.uB;if(c.dz!==null)Eo(c,b);}
function ADO(){B.call(this);this.tp=null;}
function ASf(a){var b=new ADO();ARr(b,a);return b;}
function ARr(a,b){a.tp=b;}
function AKY(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.tp;if(MT()===c.g6){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cf(c.b$.iJ)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].ee();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.b$.cU;m=new NB;m.vr=k;m.vs=l;g.getAsString(Bn(m,"accept"));Dr(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new R;U(l);K(K(K(K(l,C(141)),k),C(142)),g);$rt_globals.console.info($rt_ustr(S(l)));}e=e
+1|0;}}}
function ADP(){B.call(this);this.m2=null;}
function ATG(a){var b=new ADP();AL$(b,a);return b;}
function AL$(a,b){a.m2=b;}
function ALp(a,b){var c;c=a.m2;if(MT()===c.g6&&Q0(c.b$,Tv(c,b),0))Dr(c,b);}
function ADQ(){B.call(this);this.vB=null;}
function ASx(a){var b=new ADQ();ANA(b,a);return b;}
function ANA(a,b){a.vB=b;}
function ANg(a,b){var c;c=a.vB;if(MT()===c.g6&&Q0(c.b$,Tv(c,b),1))Dr(c,b);}
var TK=F(0);
var TY=F();
function No(a,b,c,d){var e,f,g,h;e=new Ry;e.j6=d;AUO=AUO+1|0;e.lT=b;e.k2=c;f=(Fe()).createElement("canvas");e.hM=f;g=b;f.width=g;f=e.hM;g=c;f.height=g;if(!d)g=e.hM.getContext("2d");else{f=e.hM;h=AFy();g=f.getContext("2d",h);}e.dh=g;f="#FFFFFF";g.fillStyle=f;return e;}
var TX=F();
function AJ1(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Mi(){var a=this;B.call(a);a.jM=null;a.bj=null;a.i6=null;}
var IE=F();
var AUP=null;function I4(a,b,c){return b.jD(c);}
function AAY(){AUP=new IE;}
var DS=F(0);
var D9=F(0);
var Iu=F(0);
function Qq(){B.call(this);this.pz=null;}
function Bj(){var a=this;B.call(a);a.a=0;a.b=0;}
function Cg(a,b){var c=new Bj();ZA(c,a,b);return c;}
function ZA(a,b,c){a.a=b;a.b=c;}
function Cw(a,b){a.a=b.a;a.b=b.b;}
function Bg(a,b,c){a.a=b;a.b=c;}
function AJO(a,b){var c;a:{b:{if(a!==b){if(BA(b)!==BA(a))break b;if(!HS(a,b))break b;}c=1;break a;}c=0;}return c;}
function HS(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function V7(){var a=this;B.call(a);a.r6=0;a.r8=0;a.r5=0;a.r4=0;}
var YY=F(0);
function Qj(){B.call(this);this.dP=null;}
function K_(){var a=this;B.call(a);a.bt=null;a.yj=null;}
function ABt(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(143):C(144);g=$rt_str(b.getShaderInfoLog(e));h=new R;U(h);K(K(h,f),g);g=S(h);b.deleteShader(e);Ct(FL(),g);Ct(Ec(),C(145));Ct(Ec(),d);Ct(Ec(),C(145));b=new Bt;Bp(b,g);L(b);}
function CI(){var a=this;K_.call(a);a.oK=null;a.qq=null;a.lN=null;}
function AVV(a,b,c,d){var e=new CI();GB(e,a,b,c,d);return e;}
function GB(a,b,c,d,e){var f,g,h,i,j,k;a.yj=e;f=ABt(b,35633,c);d=ABt(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bt=g;h=e.sS.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bt;k=c.hc;c=c.qB;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bt;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ADs(b,C(146));a.lN=new Bj;c=a.bt;a.oK=b.getUniformLocation(c,"uResolution");c=a.bt;a.qq=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bt;c=new R;U(c);K(K(c,C(147)),d);Bp(b,S(c));L(b);}
function ZN(a,b,c){var d,e,f;if(!HS(a.lN,c)){Cw(a.lN,c);d=a.oK;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function GU(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.qq;b.uniform4f(e,i,l,h,j);ZN(a,b,f);}
function VH(){CI.call(this);this.u5=null;}
function En(){CI.call(this);this.r_=null;}
function ARL(a){var b=new En();AJ4(b,a);return b;}
function AVW(a,b){var c=new En();KN(c,a,b);return c;}
function AVX(a,b,c){var d=new En();TE(d,a,b,c);return d;}
function AJ4(a,b){KN(a,b,C(148));}
function KN(a,b,c){TE(a,b,C(133),c);}
function TE(a,b,c,d){Ha();GB(a,b,c,d,AVT);c=a.bt;a.r_=b.getUniformLocation(c,"sDiffuse");}
function TQ(a,b,c){var d;d=a.r_;b.uniform1i(d,0);b.activeTexture(33984);c=c.eS;b.bindTexture(3553,c);}
var AAk=F(CI);
function ASW(a){var b=new AAk();AQc(b,a);return b;}
function AQc(a,b){Ha();GB(a,b,C(133),C(149),AVT);}
function AAE(){En.call(this);this.wJ=null;}
function ATi(a){var b=new AAE();AMS(b,a);return b;}
function AMS(a,b){var c;KN(a,b,C(150));c=a.bt;a.wJ=b.getUniformLocation(c,"uContrast");}
function FD(){var a=this;En.call(a);a.pF=null;a.qP=null;a.su=null;}
function AVY(a,b,c){var d=new FD();Xf(d,a,b,c);return d;}
function Xf(a,b,c,d){TE(a,b,c,d);c=a.bt;a.pF=b.getUniformLocation(c,"uTexTransform");c=a.bt;a.qP=b.getUniformLocation(c,"uColor");c=a.bt;a.su=b.getUniformLocation(c,"uBgColor");}
function S$(a,b,c,d){Gh(b,a.qP,c);Gh(b,a.su,d);}
function ME(a,b,c,d){var e,f,g,h,i,j;c=c.eJ;e=c.a;f=c.b;g=d.bq;h=e;g=g/h;i=d.bG;j=f;i=i/j;h=d.bc/h;j=d.bZ/j;c=a.pF;b.uniform4f(c,g,i,h,j);}
function ABO(){FD.call(this);this.pA=null;}
function ASp(a){var b=new ABO();ANv(b,a);return b;}
function ANv(a,b){var c;Xf(a,b,C(151),C(152));c=a.bt;a.pA=b.getUniformLocation(c,"uContrast");}
var ADB=F(FD);
function ATA(a){var b=new ADB();AHB(b,a);return b;}
function AHB(a,b){Xf(a,b,C(151),C(153));}
function Zk(){var a=this;En.call(a);a.yZ=null;a.yY=null;a.xy=null;}
function ATr(a){var b=new Zk();AHD(b,a);return b;}
function AHD(a,b){var c,d;KN(a,b,C(154));c=a.bt;a.yZ=b.getUniformLocation(c,"uColorB");d=a.bt;a.yY=b.getUniformLocation(d,"uColorF");d=a.bt;a.xy=b.getUniformLocation(d,"uContrast");}
function ABN(){var a=this;CI.call(a);a.or=null;a.mL=null;a.mK=null;}
function ATc(a){var b=new ABN();AHF(b,a);return b;}
function AHF(a,b){var c;Ha();GB(a,b,C(133),C(155),AVT);c=a.bt;a.or=b.getUniformLocation(c,"uColor");c=a.bt;a.mL=b.getUniformLocation(c,"uPoints1");c=a.bt;a.mK=b.getUniformLocation(c,"uPoints2");}
function YU(){var a=this;CI.call(a);a.ns=null;a.sx=null;a.pJ=null;}
function ATd(a){var b=new YU();AFS(b,a);return b;}
function AFS(a,b){var c;Ha();GB(a,b,C(133),C(156),AVT);c=a.bt;a.ns=b.getUniformLocation(c,"uColor");c=a.bt;a.sx=b.getUniformLocation(c,"uBaseline");c=a.bt;a.pJ=b.getUniformLocation(c,"uScaleHExp");}
function AB4(a,b,c,d,e){var f;f=a.sx;b.uniform2f(f,c,d);Gh(b,a.pJ,e);}
var RW=F(0);
var ADW=F(0);
function Gh(b,c,d){var e,f,g,h;e=d.bq;f=d.bG;g=d.bc;h=d.bZ;b.uniform4f(c,e,f,g,h);}
function ADs(b,c){var d,e;d=b.getError();if(d){b=FL();e=new R;U(e);Bl(K(e,c),d);Ct(b,S(e));}}
function Qh(){var a=this;B.call(a);a.os=null;a.ou=null;a.ot=null;}
function Qi(){var a=this;B.call(a);a.dN=null;a.gm=null;a.hT=null;a.jw=null;a.jn=null;a.lA=0;a.mo=0;}
function KW(a,b){if(b!==null)a.dN.deleteBuffer(b);return null;}
function Cj(){var a=this;B.call(a);a.wR=null;a.gk=0;}
function C9(a,b,c){a.wR=b;a.gk=c;}
function Gq(){var a=this;Cj.call(a);a.sS=null;a.mI=null;a.rT=null;a.kI=0;a.qe=0;a.tg=0;}
var AVT=null;var AVZ=null;function Ha(){Ha=Bm(Gq);AJv();}
function AJv(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Gq;c=P(DK,2);d=c.data;AP1();d[0]=AV0;d[1]=AV1;Ha();C9(b,C(157),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.l6.gk){case 0:f=f+l.e2|0;h=h+1|0;break a;case 1:e=e+l.e2|0;g=g+1|0;break a;default:}}i=i|1<<l.hc;k=k+1|0;}b.sS=c;b.kI=e;b.qe=f;b.tg=i;c=P(DK,g);m=c.data;b.mI=c;c=P(DK,h);n=c.data;b.rT=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.l6.gk){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}AVT
=b;c=P(Gq,1);c.data[0]=b;AVZ=c;}
var LU=F(0);
var S9=F(0);
var Ub=F(0);
var F2=F();
function IX(){F2.call(this);this.wv=null;}
function Z$(){var a=this;IX.call(a);a.x7=0;a.kV=0;a.iI=null;a.kj=null;a.tS=null;}
function ALD(a,b){var c=new Z$();APH(c,a,b);return c;}
function APH(a,b,c){a.wv=b;b=new R;U(b);a.iI=b;a.kj=B1(32);a.x7=c;AH4();a.tS=AV2;}
function Tc(a,b,c,d){var e,$$je;e=a.wv;if(e===null)a.kV=1;if(!(a.kV?0:1))return;a:{try{e.kb(b,c,d);break a;}catch($$e){$$je=E4($$e);if($$je instanceof TT){}else{throw $$e;}}a.kV=1;}}
function N7(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$$je;e=b.data;d=d-c|0;f=new Rg;g=e.length;d=c+d|0;Vv(f,g);f.cr=c;f.eh=d;f.uQ=0;f.y1=0;f.ry=b;e=DX(Z(16,Ba(g,1024)));d=e.data.length;h=new Wo;i=0+d|0;Vv(h,d);AJA();h.xG=AV3;h.qS=0;h.s0=e;h.cr=0;h.eh=i;h.xI=0;h.nk=0;j=a.tS;k=new Po;b=DX(1);l=b.data;l[0]=63;AP5();m=AV4;k.lS=m;k.k4=m;c=l.length;if(c&&c>=k.mJ){k.wN=j;k.qz=b.gv();k.x1=2.0;k.mJ=4.0;k.pP=B1(512);k.op=DX(512);j=AV5;if(j===null){m=new BF;Bp(m,C(158));L(m);}k.lS=j;k.k4=j;while(k.iF!=3){k.iF=2;a:{while(true)
{try{j=YE(k,f,h);}catch($$e){$$je=E4($$e);if($$je instanceof Bt){j=$$je;m=new Tw;m.lO=1;m.mE=1;m.rd=j;L(m);}else{throw $$e;}}if(j.hA?0:1){c=EI(f);if(c<=0)break a;j=KM(c);}else if(LA(j))break;m=!Wm(j)?k.lS:k.k4;b:{if(m!==AV5){if(m===AV6)break b;else break a;}c=EI(h);b=k.qz;d=b.data.length;if(c<d){j=AV7;break a;}Wp(h,b,0,d);}n=f.cr;c=j.hA!=2?0:1;if(!(!c&&!Wm(j)?0:1)){j=new D1;X(j);L(j);}Sv(f,n+j.ox|0);}}n=LA(j);Tc(a,e,0,h.cr);N5(h);if(!n){while(true){d=k.iF;if(d!=2&&d!=4){j=new Dm;X(j);L(j);}j=AV8;if(j===j)k.iF
=3;n=LA(j);Tc(a,e,0,h.cr);N5(h);if(!n)break;}return;}}j=new Dm;X(j);L(j);}m=new BF;X4(m,C(159));L(m);}
function Ct(a,b){var c,d,e,f,g,h,i,j;BX(CX(a.iI,b),10);b=a.iI;c=b.I;d=a.kj;if(c>d.data.length)d=B1(c);e=0;f=0;if(e>c){b=new BV;Bp(b,C(160));L(b);}while(e<c){g=d.data;h=f+1|0;i=b.M.data;j=e+1|0;g[f]=i[e];f=h;e=j;}N7(a,d,0,c);a.iI.I=0;}
function FR(){F2.call(this);this.xQ=null;}
function XE(a){a.xQ=DX(1);}
var KP=F(FR);
var AUB=null;function AJR(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AB8(){var b;b=new KP;XE(b);AUB=b;}
function DK(){var a=this;Cj.call(a);a.qB=null;a.l6=null;a.e2=0;a.pQ=0;a.hc=0;}
var AV0=null;var AV1=null;var AV9=null;function AP1(){AP1=Bm(DK);AIM();}
function ASF(a,b,c,d,e,f,g){var h=new DK();Vy(h,a,b,c,d,e,f,g);return h;}
function Vy(a,b,c,d,e,f,g,h){AP1();C9(a,b,c);a.qB=d;a.l6=e;a.e2=f;a.pQ=g;a.hc=h;}
function AIM(){var b;b=new DK;ALg();Vy(b,C(161),0,C(162),AV$,2,0,0);AV0=b;b=ASF(C(163),1,C(164),AV$,2,0,1);AV1=b;AV9=G(DK,[AV0,b]);}
function IN(){var a=this;B.call(a);a.wC=null;a.xk=null;}
function ACm(b){var c,d;if(Eu(b))L(Z7(b));if(!ACo(I(b,0)))L(Z7(b));c=1;while(c<H(b)){a:{d=I(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ACo(d))break a;else L(Z7(b));}}c=c+1|0;}}
function ACo(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var LZ=F(IN);
var AV2=null;function AH4(){AH4=Bm(LZ);AHC();}
function AHC(){var b,c,d,e,f;b=new LZ;AH4();c=P(Bv,0);d=c.data;ACm(C(165));e=d.length;f=0;while(f<e){ACm(d[f]);f=f+1|0;}b.wC=C(165);b.xk=c.gv();AV2=b;}
var Gv=F(Cj);
var AV_=null;var AV$=null;var AWa=null;function ALg(){ALg=Bm(Gv);AG7();}
function AHw(a,b){var c=new Gv();ACF(c,a,b);return c;}
function ACF(a,b,c){ALg();C9(a,b,c);}
function AG7(){var b;AV_=AHw(C(166),0);b=AHw(C(167),1);AV$=b;AWa=G(Gv,[AV_,b]);}
var J9=F(FR);
var AUC=null;function AHM(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AD0(){var b;b=new J9;XE(b);AUC=b;}
function ACu(){BF.call(this);this.wQ=null;}
function Z7(a){var b=new ACu();APa(b,a);return b;}
function APa(a,b){X(a);a.wQ=b;}
var U$=F(DO);
var LX=F(0);
function W3(){B.call(this);this.qm=null;}
function AOc(a,b){a.qm.setPointerCapture(b.pointerId);}
function W4(){B.call(this);this.o7=null;}
function AFR(a,b){a.o7.releasePointerCapture(b.pointerId);}
function Qb(){var a=this;B.call(a);a.cY=null;a.eo=null;a.ia=null;a.ib=null;a.h9=null;a.h$=null;}
function ADI(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;h=c.dl;i=a.cY;BB(h,i.a,i.b,a.eo,g.bE.fd);if(b!==null&&b.fE!==null){j=Cm(c,2.0);k=FH(b,Fj(d),1);l=FH(b,Gu(d),1);m=FH(b,Fj(e),0);n=FH(b,Gu(e),0);o=Ba(k,m);p=Z(l,n);k=BD(o,p);if(k<=0)Dh(h,1);while(o<=p){q=b.fE.data[o];if(q.j$){r=d.A;s=T(r,q.hz)-d.W|0;t=s+T(q.mk,r)|0;l=e.A;u=T(l,q.hy)-e.W|0;v=u+T(q.mj,l)|0;Bg(a.ia,a.cY.a,s);Bg(a.h9,a.cY.a,t);Bg(a.ib,a.cY.a+a.eo.a|0,u);Bg(a.h$,a.cY.a+a.eo.a|0,v);r=Z(Ba(s,u),a.cY.b);w=Ba(Z(t,
v),a.cY.b+a.eo.b|0);VW(f,a.cY.a,r,a.eo.a,w-r|0);Ei(f.gB,g.gH.gy);Ei(f.dc,HX(g.dw,g,q.j$));if(s==t){x=c.dp;Bg(x,a.cY.a-d.R.a|0,j);if(u>=s){i=a.h9;Bg(i,i.a,i.b+j|0);r=s;}else{r=s-j|0;i=a.ia;Bg(i,i.a,i.b-j|0);}BB(h,d.R.a,r,x,f.dc);}if(u==v){x=c.dp;Bg(x,e.ch.a,j);if(s>=u){i=a.h$;Bg(i,i.a,i.b+j|0);}else{u=u-j|0;i=a.ib;Bg(i,i.a,i.b-j|0);}BB(h,a.cY.a+a.eo.a|0,u,x,f.dc);}i=f.cs;r=i.a;w=i.b;y=f.bp;z=a.ia;ba=a.ib;bb=a.h9;bc=a.h$;bd=f.dc;Gg(h,h.gE);GU(h.gE,h.U,r,w,y,h.cV);i=h.gE;x=h.U;q=i.mL;be=z.a;bf=z.b;bg=ba.a;bh=ba.b;x.uniform4f(q,
be,bf,bg,bh);i=i.mK;be=bb.a;bf=bb.b;bg=bc.a;bh=bc.b;x.uniform4f(i,be,bf,bg,bh);i=h.gE;Gh(h.U,i.or,bd);Gc(h);}o=o+1|0;}if(k<=0)Dh(h,0);return;}}
function WX(){var a=this;B.call(a);a.cs=null;a.bp=null;a.dc=null;a.gB=null;}
function AA2(){var a=new WX();ANx(a);return a;}
function ANx(a){a.cs=new Bj;a.bp=new Bj;a.dc=new B5;a.gB=new B5;}
function VW(a,b,c,d,e){Bg(a.cs,b,c);Bg(a.bp,d,e);}
function Tb(a){Bg(a.bp,0,0);}
function JL(a){var b;b=a.bp;return T(b.a,b.b)?0:1;}
function HC(a,b){return EV(b,a.cs,a.bp);}
function AAC(){var a=this;B.call(a);a.ea=null;a.dL=null;a.c2=null;a.bS=null;a.fJ=null;}
function AOD(a){var b=new AAC();AM9(b,a);return b;}
function AM9(a,b){var c;c=new WG;c.df=Bz();a.dL=c;a.ea=b;c=new Vs;c.cc=Bz();c.jt=AWb;c.cH=b;BZ(b.km,c);a.bS=c;}
function MK(a,b){var c,d;a.fJ=b;c=a.c2;if(c!==null)c.fW=b.fH;c=a.bS;d=b.fH;c.iR=b.vc;c.l2=d;b=BP(c.cc);while(BQ(b)){QC(BS(b),c.l2);}}
function Rs(a){var b,c,d;b=BP(a.bS.cc);while(BQ(b)){Lf(BS(b));}b=a.dL;c=0;while(true){d=b.df;if(c>=d.k)break;(Bs(d,c)).N.gS=1;c=c+1|0;}}
function Xv(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.dL;c=a.ea.dl;d=b.df.k-1|0;while(d>=0){e=Bs(b.df,d);e.P.kw(c);f=e.N;g=e.fW.hR;if(!JW(f)){if(!VT(f)&&!(!f.gS&&f.cR!==null)){f.gS=0;US(f);h=f.eG;i=(h.ej+h.dU+5.0)/10.0;j=Cm(f.e5,f.jb);h=c.cZ;k=f.eG;l=f.gM;m=i*2.0;CM(h,k);n=j+Kb(h,l,m)|0;f.h_=n;n=Fu(0,n,f.p.a);if(n){h=E$(c,n,f.p.b,f.e5.cE);CM(h,f.eG);k=f.gM;m=j;i=m+i;l=f.eG;o=l.ej;Ev(h,k,i,m+o-(o+l.dU)/16.0);k=f.cR;if(k===null){k=GY(c);f.cR=k;}Ey(k,h);Is(h);Cc(f.h2,0.0,0.0,Ci(f.cR),K8(f.cR));}}h=g.sz;k=f.cR;if
(k===null)Py(f,c,0,f.p.a,h);else{j=Ci(k);k=g.u4;if(f.e5.cE){g=f.H;n=g.a;p=g.b;g=f.cR;Ew(c,n,p,g.eJ,f.h2,g,k,h);}else{g=f.H;n=g.a;p=g.b;g=f.cR;Et(c,n,p,g.eJ,f.h2,g,k,h,0.0);}n=f.p.a;if(j<n)Py(f,c,j,n-j|0,h);}}Dh(c,1);n=Cm(e.bn,2.0);q=JW(e.N);h=e.bn;f=h.dp;h=h.uC;p=q?0:e.N.p.b;k=e.P.p;Bg(h,k.a,k.b+p|0);ZB(c,h,!q?e.N.H:e.P.H,e.fW.hR.k_, -n|0,f);h=e.P;ABz(c,h.p,h.H,n,p,O7(e.fW.iG,e.bn.b1),e.fW.iG.l0,f);d=d+(-1)|0;}b=a.bS;if(!DF(b.cc)){Dh(b.cH.dl,1);j=0;while(true){c=b.cc;if(j>=c.k)break;ADf(Bs(c,j),b.cH);j=j+1|
0;}}}
function AM2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.dL;d=0;a:{while(true){e=c.df;if(d>=e.k)break;b:{f=Bs(e,d);e=b.n;if(Dk(f.N,e))g=DC(f.bn.di,null);else{h=Cm(f.bn,7.0);i=Cm(f.bn,25.0);if(N_(f,e.a,h)){g=NF(f,e.a,i);if(Pc(f,e.b,h)){g=DC(f.bn.di,Lm(g,C(168)));break b;}if(Ny(f,e.b,h)){g=DC(f.bn.di,Lm( -g|0,C(168)));break b;}}if(V0(f,e.b,h)){g=Ws(f,e.b,i);if(Xx(f,e.a,h)){g=DC(f.bn.di,Lm(g,C(169)));break b;}if(ML(f,e.a,h)){g=DC(f.bn.di,Lm( -g|0,C(169)));break b;}}g=0;}}c:{d:{if(!g){if(!Dk(f.P,b.n))break d;if(!f.P.gh(b)
&&!DC(f.bn.di,null))break d;}g=1;break c;}g=0;}if(g){g=1;break a;}d=d+1|0;}g=0;}e:{if(!g){c=a.bS;g=0;j=c.cc.k-1|0;f:{while(j>=0){e=Bs(c.cc,j);k=b.n;f=c.cH.di;g=HC(e.b7,k);d=!g?(-1):Nz(e,k);h=e.iq;if(h!=d){if(h>=0){l=e.cg.data[h];l.gF=0;m=e.wB;if(m!==null)m.zo(k,h,l);}if(d>=0){k=e.cg.data[d];l=e.pD;if(l!==null){m=l.pm;n=l.pn;l=l.po;To(m,n);if(l!==null)k.kg.s();if(UB(k)){if(k.lp===null)Oi(m,AAe(k,n),k.iK,n);else Wn(m,AAe(k,n),k.iK,n,k.lp);}}k.gF=1;}e.iq=d;}g=g&&Fy(f)?1:0;if(g)break f;j=j+(-1)|0;}}if(!g){g=0;break e;}}g
=1;}return g;}
function AP_(a,b,c,d){var e,f,g,h,i;e=a.dL;f=0;a:{while(true){g=e.df;if(f>=g.k)break;b:{c:{h=Bs(g,f);if(!Dk(h.N,b.n)){if(!Dk(h.P,b.n))break c;if(!h.P.fN(b,c,d))break c;}i=1;break b;}i=0;}if(i){c=1;break a;}f=f+1|0;}c=0;}d:{if(!c){g=a.bS.cc;d=g.k-1|0;i=1;if(d<0)i=0;else{g=Bs(g,d);c=Nz(g,b.n);if(c>=0){b=g.cg.data[c];if(!UB(b))b.kg.s();}}if(!i){c=0;break d;}}c=1;}return c;}
function AN2(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.bS;e=null;f=d.cc.k-1|0;a:{while(f>=0){e=Bs(d.cc,f);g=b.n;h=HC(e.b7,g);if(!h&&!JL(e.b7)){e=e.ui;if(e!==null)Du(e.s1);}e=!h?null:AWc;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;e=a.dL;h=0;b:{while(true){g=e.df;if(h>=g.k){g=null;break b;}c:{i=Bs(g,h);if(!c){d:{g=b.n;if(!JW(i.N)&&Dk(i.N,g)){d=i.P.H;j=d.a;k=g.a;l=j-k|0;j=d.b;f=g.b;j=j-f|0;g=i.N.H;m=g.a-k|0;f=g.b-f|0;d=new Bj;g=new NH;g.nN=i;g.nO=m;g.nP=f;g.nQ=d;g.nJ=l;g.nL=j;}else{j=Cm(i.bn,7.0);f=Cm(i.bn,
25.0);if(N_(i,g.a,j)){m=NF(i,g.a,f);if(Pc(i,g.b,j)){g=H2(i,g,m,(-1));break d;}if(Ny(i,g.b,j)){g=H2(i,g,m,1);break d;}}if(V0(i,g.b,j)){f=Ws(i,g.b,f);if(Xx(i,g.a,j)){g=H2(i,g,(-1),f);break d;}if(ML(i,g.a,j)){g=H2(i,g,1,f);break d;}}g=null;}}if(g!==null)break c;}g=Dk(i.N,b.n)?AWc:i.P.f4(b,c);i=i.P;if(i===null)g=null;else if(g===null)g=!Dk(i,b.n)?null:AWc;}if(g!==null)break;h=h+1|0;}}return g;}
function AKs(a,b,c){var d,e,f,g,h;d=a.dL;e=0;a:{while(true){f=d.df;if(e>=f.k)break;b:{c:{g=Bs(f,e);if(!Dk(g.N,b.n)){if(!Dk(g.P,b.n))break c;if(!g.P.gf(b,c))break c;}h=1;break b;}h=0;}if(h){c=1;break a;}e=e+1|0;}c=0;}return !c&&!FE(a.bS)?0:1;}
function Q2(a,b,c,d,e){Ql(a,b,d,WL(c,null,d),e);}
function Ri(a,b,c,d,e){Ql(a,b,d,WL(null,c,d),e);}
function Ql(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(a.c2!==null)S4(a);f=new Qs;g=a.ea;h=new Qf;h.mY=a;h.mZ=c;Lb(f);f.cN=new Bj;f.bF=new Bj;f.dy=AA2();f.gt=new Bj;f.bU=AWd;f.dW=P(H1,0);f.du=0;f.d7=0;f.fB=0;f.e1=0;f.eP=0;f.dX=AFi(0);f.g3=Ke();f.bY=g;f.ir=h;f.v7=h;O9(f);Tx(f);f.bU=d;c=a.fJ;g=c.fH;c=c.vS;f.qX=g;f.uf=c;f.dO=null;f.dX=null;f.ex=0;Tx(f);h=new Ul;i=a.ea;h.P=ARw();h.bn=i;c=new Vb;Lb(c);c.h2=new B5;c.e5=i;h.N=c;a.c2=h;i=new PL;c=a.ea.di;Lb(i);g=new Og;g.qV=i;i.o$=g;g=new Of;g.r$=i;i.t4=g;i.u3=10.0;i.br=f;i.mz
=c;f.gu=i;c=a.fJ.fH;g=c.pk;h=c.n6;i.vP=g;i.vL=h;c=i.cP;if(c!==null)Gy(c,g,h);c=i.cX;if(c!==null)Gy(c,g,h);j=a.c2;c=j.P;g=c.H;h=c.p;c=C5(c,i);j.P=c;c.lG(g,h,j.bn.b1);g=a.c2;h=new R;U(h);K(K(h,C(170)),e);i=S(h);c=a.fJ.uA;e=g.N;k=BK(e.h5,c)?0:1;l=BK(e.gM,i)?0:1;m=4.0===e.jb?0:1;if(k){e.h5=c;e.eG=null;Pe(e,0);}e.gS=!k&&!l&&!m?0:1;e.gM=i;e.jb=4.0;e.h_=0;Ni(g);c=a.c2;c.fW=a.fJ.fH;Rz(a.dL.df,0,c);c=a.c2;k=(c.N.p.b+Cm(c.bn,2.0)|0)+Cm(a.ea,2.0)|0;l=(f.du+f.d7|0)+f.fB|0;m=Cm(f.bY,5.0);h=Cg(Fu(m,b.a,f.bY.cI.a-l|0),Fu(k,
b.b,f.bY.cI.b-f.cN.b|0));Pt(f);Pa(f);k=(f.du+f.d7|0)+f.fB|0;b=f.bY;l=(b.cI.a-h.a|0)-Cm(b,5.0)|0;b=f.bY;m=(b.cI.b-h.b|0)-Cm(b,5.0)|0;g=Cg(Ba(k,l),Ba(f.cN.b,m));KD(a.c2,h,g);Fp(a.ea,f);}
function S4(a){var b,c;b=a.dL;c=a.c2;Vn(b.df,c);b=a.c2;c=b.N;c.cR=C5(c.cR,null);b.P=C5(b.P,null);a.c2=null;}
function Ka(a,b,c){var d,e,f,g,h;Du(a.bS);d=a.bS;e=P(DM,1);f=e.data;g=new DM;BM(d);h=new Mu;h.wr=d;X6(g,h,C(171));f[0]=g;P7(d,b,GW(e),QK(a,c));}
function QK(a,b){var c;c=new Qm;c.nu=a;c.nv=b;return c;}
function I3(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;if(!FE(a.bS)){h=a.bS;i=b.n;b=new S6;b.eR=a;b.bg=c;b.oC=g;b.hQ=e;b.my=f;b.jB=d;j=S_();e=b.bg.c;d=DT(e);e=FM(e);f=b.bg.cu;if(QD(f,d,e)!==null){k=new RR;k.ny=b;k.nz=i;DE(j,C(172),k);}if(LM(f,d,e)!==null){k=new RS;k.q2=b;k.q3=i;DE(j,C(173),k);}if(TN(f,d,e)!==null){e=new RQ;e.m6=b;e.m7=i;DE(j,C(174),e);}e=new RP;e.uU=b;e.uT=i;DE(j,C(175),e);F$(b);if(La()){if(!b.bg.dx){e=new QY;e.vm=b;DE(j,C(176),e);}e=new QZ;e.px=b;DE(j,C(177),e);if(!b.bg.dx){F$(b);if(La()&&("readText" in $rt_globals.navigator.clipboard
?1:0)?1:0){e=new QX;e.sP=b;DE(j,C(178),e);}}}e=S_();l=P(Bv,4).data;l[0]=C(21);l[1]=C(29);l[2]=C(34);l[3]=C(33);m=l.length;n=0;while(n<m){f=l[n];g=new O0;g.nw=b;g.nx=f;DE(e,f,g);n=n+1|0;}Fi(j,C(179),HK(e));d=S_();l=P(DM,3);o=l.data;g=b.jB;BM(g);p=new M_;p.o9=g;o[0]=CB(C(180),p);g=b.jB;BM(g);p=new Na;p.qc=g;o[1]=CB(C(181),p);g=b.jB;BM(g);p=new M$;p.v$=g;o[2]=CB(C(182),p);KG(d,C(183),GW(l),AWe);l=P(DM,2);o=l.data;g=b.hQ;BM(g);p=new Wb;p.qR=g;o[0]=CB(C(184),p);g=b.hQ;BM(g);p=new Wa;p.ur=g;o[1]=CB(C(185),p);Fi(d,
C(186),GW(l));g=new Rk;g.tu=b;KG(d,C(187),g,AWe);if(b.bg.bM.dl.lv){l=P(DM,2);o=l.data;g=new Sr;g.oH=b;o[0]=CB(C(188),g);f=new Ss;f.pX=b;o[1]=CB(C(189),f);Fi(d,C(190),GW(l));}Fi(j,C(191),HK(d));d=S_();Fi(d,C(192),AAl(b));f=new PV;f.wb=b;DE(d,C(193),f);Fi(j,C(194),HK(d));P7(h,i,HK(j),QK(a,c));}}
function AOk(a,b,c,d){var e,f,g,h;e=a.dL;f=0;a:{while(true){g=e.df;if(f>=g.k)break;if((Bs(g,f)).P.f9(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function Zj(b){var c;c=new Xd;c.mT=b;return c;}
var JA=F(0);
function Uw(){B.call(this);this.vh=null;}
function AKe(a,b){var c;c=a.vh;Vf(c,c.x,c.w);}
function Ux(){B.call(this);this.q$=null;}
function AFd(a,b){var c;c=a.q$;Vf(c,c.w,c.x);}
function Uy(){B.call(this);this.nC=null;}
function AKr(a,b){XI(a.nC,b);}
function Us(){B.call(this);this.um=null;}
function ALl(a,b){XI(a.um,b);}
function Ut(){B.call(this);this.xz=null;}
function APS(a,b){return b.bO!=121?0:1;}
function JV(){var a=this;B.call(a);a.nV=null;a.qp=null;a.pG=null;}
function AWf(a,b){var c=new JV();MQ(c,a,b);return c;}
function MQ(a,b,c){var d;d=null;a.nV=b.i6;a.qp=d;a.pG=c;}
function AH$(a,b){var c,d,e,f;if(b.cl&&b.bO==79){c=a.qp;if(c!==null&&b.bB){if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADt(c,1);else{d=new Wd;b=$rt_globals.window.showDirectoryPicker();e=new Wc;e.p4=c;e.p5=d;b.then(Bn(e,"f"),Bn(d,"f"));}}else VS(a.nV,a.pG);f=1;}else f=0;return f;}
function Uu(){B.call(this);this.m8=null;}
function AOI(a,b){var c,d;c=a.m8;d=DH(c.bh,c.x)?c.x:!DH(c.bh,c.w)?null:c.w;if(d!==null){IB(d,b);c.fv=null;}}
function Uv(){B.call(this);this.sU=null;}
function AG3(a,b){var c,d,e,f;b=b;c=a.sU;if(DH(c.bh,c.x)){d=c.dF;e=c.x;f=new M7;f.sa=c;I3(d,b,e,c,c,c,f);}if(DH(c.bh,c.w)){d=c.dF;e=c.w;f=new M4;f.q1=c;I3(d,b,e,c,c,c,f);}return 1;}
function GG(){var a=this;B.call(a);a.vF=0;a.cr=0;a.eh=0;a.i5=0;}
function Vv(a,b){a.i5=(-1);a.vF=b;a.eh=b;}
function EI(a){return a.eh-a.cr|0;}
function Fo(a){return a.cr>=a.eh?0:1;}
var Sh=F(0);
var KB=F(GG);
function Sv(a,b){var c,d,e;if(b>=0&&b<=a.eh){a.cr=b;if(b<a.i5)a.i5=0;return a;}c=new BF;d=a.eh;e=new R;U(e);BX(Bl(K(Bl(K(e,C(195)),b),C(196)),d),93);Bp(c,S(e));L(c);}
function Jo(){var a=this;GG.call(a);a.qS=0;a.s0=null;a.xG=null;}
function Wp(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.nk){e=new Xp;X(e);L(e);}if(EI(a)<d){e=new QV;X(e);L(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BV;j=new R;U(j);Bl(K(Bl(K(j,C(197)),h),C(198)),g);Bp(i,S(j));L(i);}if(d<0){e=new BV;i=new R;U(i);K(Bl(K(i,C(199)),d),C(200));Bp(e,S(i));L(e);}h=a.cr;k=h+a.qS|0;l=0;while(l<d){b=a.s0.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.cr=h+d|0;return a;}}b=b.data;e=new BV;d=b.length;i=new R;U(i);BX(Bl(K(Bl(K(i,C(201)),c),C(196)),d),41);Bp(e,
S(i));L(e);}
function N5(a){a.cr=0;a.eh=a.vF;a.i5=(-1);return a;}
function Hj(){B.call(this);this.yC=null;}
var AV6=null;var AV5=null;var AV4=null;function AP5(){AP5=Bm(Hj);AK1();}
function ADo(a){var b=new Hj();ACj(b,a);return b;}
function ACj(a,b){AP5();a.yC=b;}
function AK1(){AV6=ADo(C(202));AV5=ADo(C(203));AV4=ADo(C(204));}
function PB(){B.call(this);this.xb=null;}
function AFH(a,b){return b.bO!=121?0:1;}
function Pz(){B.call(this);this.vq=null;}
function AIi(a,b){IB(a.vq,b);}
function PA(){B.call(this);this.pf=null;}
function APf(a,b,c){return Gx(a.pf,b,c);}
function NY(){B.call(this);this.qd=null;}
function AM8(a){var b,c;b=a.qd.cq;BM(b);c=new N3;c.n3=b;return c;}
function NZ(){B.call(this);this.wa=null;}
function AJZ(a,b,c,d){return Ji(a.wa.cq,c,d);}
function NW(){B.call(this);this.nG=null;}
function AKK(a,b){var c,d,e,f;b=b;c=a.nG;if(DH(c.bh,c.cq)){d=c.fc;e=c.cq;f=new SI;f.x3=c;I3(d,b,e,c,e,c,f);}return 1;}
var AAO=F();
var YR=F(0);
function Jr(b,c,d,e,f){Cc(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function T1(){var a=this;B.call(a);a.dl=null;a.gQ=null;a.di=null;a.cI=null;a.b1=0.0;a.cE=0;a.d2=null;a.km=null;a.dp=null;a.uC=null;a.wx=null;a.wy=null;}
function I7(a){var b;b=a.d2;if(b!==null)b.ty();}
function Jy(a){var b;b=a.d2;if(b!==null)b.wn();}
function NV(a,b){var c;c=a.gQ.dC!==(Fe()).activeElement?0:1;if(c)Jy(a);a.d2=b;if(c)I7(a);}
function Fp(a,b){Jy(a);a.d2=b;I7(a);}
function DH(a,b){return b!==a.d2?0:1;}
function LO(a){return a.dl.cZ;}
function Im(a,b){return Gw(a.dl,b.js,Co(b.hS,a.b1),400,0);}
function Cm(a,b){return Co(b,a.b1);}
function Wk(a,b){if(a.cE==b)return 0;a.cE=b;I9(a.gQ);return 1;}
var R1=F();
function AIN(a,b){var c,d,e;c=b.cl;d=c&&!b.bB&&!b.cQ&&!b.iU?1:0;a:{if(d){d=b.bO;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bB&&!c&&!b.cQ&&!b.iU?1:0;d=d&&b.bO==46?1:0;}b:{if(!d){e=b.bO;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.j4=1;}return 0;}
function R0(){B.call(this);this.oD=null;}
function AGh(a,b){var c;c=a.oD.d2;return c!==null&&c.kp(b)?1:0;}
function B5(){var a=this;B.call(a);a.bq=0.0;a.bG=0.0;a.bc=0.0;a.bZ=0.0;}
function Cc(a,b,c,d,e){a.bq=b;a.bG=c;a.bc=d;a.bZ=e;}
function Ei(a,b){a.bq=b.bq;a.bG=b.bG;a.bc=b.bc;a.bZ=b.bZ;return a;}
function AQ9(a,b){if(a===b)return 1;return b!==null&&BA(a)===BA(b)&&JU(a,b)?1:0;}
function JU(a,b){return b.bq===a.bq&&b.bG===a.bG&&b.bc===a.bc&&b.bZ===a.bZ?1:0;}
var Ih=F(0);
function WG(){B.call(this);this.df=null;}
function Vs(){var a=this;B.call(a);a.cH=null;a.cc=null;a.iR=null;a.jc=null;a.l2=null;a.jt=null;}
function P7(a,b,c,d){var e,f;e=a.cH;f=e.cI;if(T(f.a,f.b)&&e.b1!==0.0){if(a.iR!==null&&!FE(a)){a.jt=d;a.jc=Im(a.cH,a.iR);e=Oi(a,b,c,null);b=new Vk;b.s1=a;e.ui=b;Fp(a.cH,a);return;}b=new BF;X(b);L(b);}c=new Dm;Bp(c,C(205));L(c);}
function Du(a){var b;if(FE(a)){b=a.cH;if(b.d2===a)b.d2=null;To(a,null);a.jt.s();a.jt=AWb;}}
function Wn(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new SR;f.b7=AA2();f.fq=new Bj;f.f6=new Bj;f.cg=AWg;f.iq=(-1);f.iY=1;f.fZ=1;c=c.ee();Lf(f);f.cg=c;QC(f,a.l2);PY(f,a.jc,a.cH);if(d===null)g=b.a;else{g=b.a;g=a.cH.cI.a<((g+(ES(d)).a|0)+(ES(f)).a|0)?g-(ES(f)).a|0:(g+(ES(d)).a|0)-d.e0|0;}h=b.b;b=a.cH.cI;i=Z(0,Ba(g,b.a-(ES(f)).a|0));g=Z(0,Ba(h,b.b-(ES(f)).b|0));Bg(f.b7.cs,i,g);j=f.cC+f.e0|0;k=f.cg.data;h=k.length;l=0;m=j;while(l<h){c=k[l];b=c.dZ;b.a=i+j|0;b.b=g+m|0;if(!f.fZ){if(!c.dk.a)Yq();j=j+(c.dk.a+f.cC|0)|0;}else{if
(!c.dk.b)Yq();m=m+(c.dk.b+f.cC|0)|0;}l=l+1|0;}b=new WM;b.pm=a;b.pn=f;b.po=e;f.pD=b;Bw(a.cc,f);return f;}
function Oi(a,b,c,d){return Wn(a,b,c,d,null);}
function AKP(a,b){var c;if(!FE(a))return 0;a:{switch(b.bO){case 27:Du(a);c=1;break a;default:}c=0;}return c;}
function AAe(b,c){var d,e,f;d=b.dZ;e=c.cC;f=c.e0;return Cg((d.a-(e*3|0)|0)-f|0,(d.b-e|0)-f|0);}
function To(a,b){var c,d;c=a.cc.k-1|0;a:{while(true){if(c<0)break a;d=Bs(a.cc,c);if(b===d)break;Fk(a.cc,c);d.e3=C5(d.e3,null);Bg(d.fq,0,0);d.cg=AWg;d.iq=(-1);Tb(d.b7);c=c+(-1)|0;}}}
function FE(a){return a.cc.k<=0?0:1;}
function PG(){var a=this;B.call(a);a.d_=null;a.kc=0.0;a.g5=0.0;a.fU=0;}
function Wx(a){return a.d_.bp.b;}
function S2(a){return a.d_.bp.a;}
function ACg(a,b,c){var d,e,f;if(a.fU){d=a.d_;e=c.a;f=c.b;c=d.cs;BB(b,c.a+e|0,c.b+f|0,d.bp,d.dc);}}
function Ky(){var a=this;B.call(a);a.mm=null;a.wT=null;a.w2=0.0;a.pL=0;a.w$=0;a.xw=0;a.rN=0;a.yh=0;a.ej=0.0;a.dU=0.0;a.w0=0.0;a.l$=0.0;a.w6=0;a.nD=null;}
function Fx(a){return DD(a.ej+a.dU);}
function PR(a,b){return DD((a.ej+a.dU)*b);}
function EX(){var a=this;B.call(a);a.bR=0;a.c9=null;a.ey=null;a.bD=null;a.dD=0;a.da=0;}
var AWh=0;var AU2=0;function XT(a,b,c,d,e,f,g){var h,i,j,k,l;h=a.bD;i=h===b&&!h.gI?0:1;if(i){a.bD=b;JX(b,d.cZ,a.c9.kt);}h=a.bD;j=h===null?0:EC(h)<f?H9(EC(a.bD),1024):H9(f,1024)+1|0;k=j<=a.dD?0:1;if(k)a.dD=j;if(!(!i&&!k)){if(AWh){l=b.fn;$rt_globals.console.info("fMeasure"+l.data);AWh=0;}if(!AU2){h=c.dh;b="alphabetic";h.textBaseline=b;}else{b=c.dh;h="top";b.textBaseline=h;}a.da=g/1024|0;while(true){b=a.ey;if(b.k>=a.dD)break;Bw(b,GY(d));}f=0;while(f<a.dD){Ia(a,c,e,a.da+f|0);f=f+1|0;}a.bD.gI=0;}if(!DF(a.ey)&&g<=
EC(a.bD)){j=g/1024|0;f=a.da;if(j!=f){f=j-f|0;if(f<0)f= -f|0;if(f>=a.dD){f=0;while(f<a.dD){Ia(a,c,e,j+f|0);f=f+1|0;}a.da=j;}else{while(true){g=a.da;if(g>=j)break;Ia(a,c,e,g+a.dD|0);a.da=a.da+1|0;}while(true){g=a.da;if(g<=j)break;Ia(a,c,e,g-1|0);a.da=a.da-1|0;}}}}}
function Kf(b,c){return (c-Fx(b)|0)/2|0;}
function MM(b,c){return Kf(b,c)+b.rN|0;}
function Ia(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;Fv(b);e=a.bD.fn;f=d*1024|0;g=O6(a,f);if(g>=a.bD.l.data.length)return;h=!g?0.0:e.data[g-1|0];i=f;j=h-i+a.bR;k=a.c9.kt;a:{while(true){l=a.bD;if(g>=l.l.data.length)break a;m=k.data;n=KA(l,g);l=m[IO(n)];o=!AU2?MM(l,c):Kf(l,c);m=e.data;CM(b,l);Ev(b,n.q,j,o);j=m[g]-i+a.bR;if(j>1024.0)break;g=g+1|0;}}Ey(Bs(a.ey,d%a.dD|0),b);}
function Y$(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq;if(DF(a.ey))return;if(!a.dD)return;if(g>EC(a.bD))return;o=a.bD;p=o.ef;q=o.l;r=g/1024|0;s=O6(a,g);t= -a.bR|0;u=f;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=e)break;y=p.data;o=Bs(a.ey,r%a.dD|0);z=v[s];ba=y[s]+a.bR|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=Ba(be,ba)-g|0;if(bc&&x)bf=bf+a.bR|0;if((t+bf|0)>e)bf=e-t|0;bg=i!==null?0:1;b:{if(!bg){bh
=!x?a.bR:2*a.bR|0;bi=i.a;w=i.b;if(!(bi<w&&g<=w&&(g+bf|0)>(bi+bh|0)?0:1)){bj=0;break b;}}bj=1;}c:{if(!bg){bk=!x?a.bR:2*a.bR|0;if(g>=i.a&&(g+bf|0)<=(i.b+bk|0)?1:0){bl=1;break c;}}bl=0;}bm=null;if(l&&!m)bm=h.bE.ie;if(z===j)bm=h.bE.oW;bn=BP(k);d:{while(BQ(bn)){if(BK(BS(bn),z)){bi=1;break d;}}bi=0;}if(bi)bm=h.bE.wf;if(n!==null){v=n.lm;if(v===null)bh=0;else{v=v.data;bh=s>=v.length?0:v[s];}bm=XL(h.dw,h,bh,n.fL);}if(!bl&&!bj){i.b=Ba(i.b,EC(a.bD));AA6(a,d,t+c|0,b,f,h,o,z,bf,g>=i.a?bf:(Ba(ba,be)-i.a|0)-(!x?a.bR:0)|0,
(g+bf|0)<=(i.b+(!x?a.bR:2*a.bR|0)|0)?0:(Ba(ba,be)-i.b|0)-(!x?a.bR:0)|0,g-bb|0,bm);}else{Cc(a.c9.jr,g-bb|0,0.0,bf,u);Bg(a.c9.go,bf,f);Hg(a,d,t+c|0,b,z,o,h,bm,bl);}if((z.bH&12)>0){bi=t+c|0;Dh(d,1);o=a.c9;bo=o.kr;bo.a=bf;w=b+o.vD|0;bk=w-o.vQ|0;bp=o.sJ;bq=w+bp;bm=o.ht;UH();bn=AWi.hV.ig;Gg(d,d.hE);GU(d.hE,d.U,bi,bk,bo,d.cV);AB4(d.hE,d.U,bp,bq,bm);o=d.hE;Gh(d.U,o.ns,bn);Gc(d);Dh(d,0);}g=g+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function AA6(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s;n=a.c9.jr;o=l;p=i-j|0;q=p;r=e;Cc(n,o,0.0,q,r);Bg(a.c9.go,p,e);Hg(a,b,c,d,h,g,f,m,0);l=l+i|0;Cc(n,l-k|0,0.0,k,r);Bg(a.c9.go,k,e);c=c+i|0;Hg(a,b,c-k|0,d,h,g,f,m,0);s=l-j|0;i=j-k|0;Cc(n,s,0.0,i,r);Bg(a.c9.go,i,e);Hg(a,b,c-j|0,d,h,g,f,m,1);}
function Hg(a,b,c,d,e,f,g,h,i){var j,k,l,m,n;j=a.c9;k=j.go;if(k.a&&k.b){l=j.jr;if(l.bZ!==0.0&&l.bc!==0.0){m=g.td.data[e.bX];if(i)n=g.bE.mq;else{n=m.oI;if(n===null)n=g.bE.fd;if(h!==null)n=h;}if(j.ms)Ew(b,c,d,k,l,f,m.ig,n);else Et(b,c,d,k,l,f,m.ig,n,j.lU);return;}return;}}
function O6(a,b){var c,d,e,f,g,h,i;c=a.bD;d=c.fn;e=0;f=c.l.data.length;g=b;b=BD(e,f);if(b>0){c=new BF;X(c);L(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BD(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function W$(a){a.bD=null;DY(a.ey,new Tt);FI(a.ey);}
function Zg(a,b,c,d,e,f,g,h,i){var j,k;j=EC(a.bD);if(j)j=j+a.bR|0;if(!j)j=j-a.bR|0;k=Z( -a.bR|0,j-g|0);if(k>=h)return;Bg(f,h-k|0,e);BB(b,c+k|0,d,f,i);}
function Zl(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a:{h=c.data;i=P(EX,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=BG(g,e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.bD===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}c=i.data;e=0;f=c.length;while(e<f){if(c[e]===null){if(j>=k)p=null;else{b=j+1|0;p=h[j];j=b;}while(j<k&&p===null){b=j+1|0;p=h[j];j=b;}if(p!==null){c[e]=p;h[j-1|0]=null;}else{o=new EX;o.bR=3;o.ey=Bz();o.da=0;o.c9=d;c[e]=o;}}e=e+1|0;}while(j<k){p=h[j];if(p!==null)W$(p);j=j+1|0;}return i;}
function AA9(){AU2=0;}
function ADx(){var a=this;B.call(a);a.eW=null;a.cM=null;a.d0=null;a.em=null;a.hZ=null;a.h0=null;}
function UZ(){var a=new ADx();AJz(a);return a;}
function AJz(a){a.eW=new Bj;a.cM=new Bj;a.d0=new Bj;a.em=new Bj;a.hZ=new B5;a.h0=new B5;}
function Q5(a){var b;b=a.cM;return !T(b.a,b.b)?0:1;}
function Hq(a,b){return EV(b,a.d0,a.em);}
function HQ(a,b,c,d){var e,f,g,h,i;e=Hq(a,b);f=EV(b,a.eW,a.cM);if(!e&&!f)return null;if(!f){if(!d)c.j(VZ(a,b.a-a.d0.a|0));else c.j(PC(a,b.b-a.d0.b|0));}g=!d?a.eW.a+(a.cM.a/2|0)|0:a.eW.b+(a.cM.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new Sa;b.vz=a;b.vA=c;b.vy=i;}else{b=new R_;b.pj=a;b.ph=c;b.pi=i;}return b;}
function Gy(a,b,c){if(b!==null&&c!==null){Ei(a.hZ,c);Ei(a.h0,b);return;}}
function ZY(b,c){var d;d=new TZ;d.rQ=b;d.wq=c;return d;}
function PC(a,b){var c,d,e;c=a.em.b;d=a.cM.b;e=c-d|0;return ZY(Ba(Z(0,b-(d/2|0)|0),e),e);}
function VZ(a,b){var c,d,e;c=a.em.a;d=a.cM.a;e=c-d|0;return ZY(Ba(Z(0,b-(d/2|0)|0),e),e);}
function WZ(a,b,c,d,e,f,g){Wf(a,b,c,d,e,f,g,1);}
function QI(a,b,c,d,e,f,g){Wf(a,b,c,d,e,f,g,0);}
function Wf(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bg(a.em,0,0);Bg(a.cM,0,0);}else{i=Ba(g*3|0,d);j=Z(PX(d,d,e),i);e=e-d|0;i=d-j|0;i=i?PX(b,i,e):0;if(!h){k=a.eW;k.a=i+c|0;k.b=f-g|0;l=a.cM;l.a=j;l.b=g;l=a.d0;l.a=c;l.b=k.b;k=a.em;k.a=d;k.b=g;}else{k=a.eW;k.a=f-g|0;k.b=i+c|0;l=a.cM;l.a=g;l.b=j;l=a.d0;l.a=k.a;l.b=c;k=a.em;k.a=g;k.b=d;}}}
function HD(a,b){var c;c=a.d0;BB(b,c.a,c.b,a.em,a.hZ);}
function HM(a,b){var c,d;c=a.cM;c.a=c.a-2|0;c.b=c.b-2|0;d=a.eW;BB(b,d.a+1|0,d.b+1|0,c,a.h0);b=a.cM;b.a=b.a+2|0;b.b=b.b+2|0;}
function H5(a,b,c){return Hq(a,b)&&Fy(c)?1:0;}
function ZG(){var a=this;B.call(a);a.xS=20;a.fa=null;a.eB=null;a.iA=0.0;a.ip=null;a.l7=0;a.i3=0;a.co=null;a.jP=null;a.el=null;a.fj=null;a.fg=0;}
function AQb(){var a=new ZG();AQw(a);return a;}
function AQw(a){a.xS=20;a.fa=new Bj;a.eB=new Bj;a.co=Bz();a.jP=DX(0);}
function K0(a,b){if(b===null)b=DX(0);a.jP=b;}
function AB_(a,b,c,d,e){var f,g,h,i,j,k;f=c/20|0;g=a.co;h=Bs(g,f%g.k|0);i=a.fa;j=T(a.co.k,a.i3);f=h.ez.b;k=((h.hG.b-(b%j|0)|0)+j|0)%j|0;if((k+f|0)>j)k= -(b%K8(h.ba)|0)|0;b=c%h.dE|0;f=h.K;k=k+T(b,f)|0;if(k<( -f|0))k=k+j|0;Bg(h.c3,h.ez.a,f);g=h.dM;b=c%h.dE|0;c=h.K;Cc(g,0.0,T(b,c),h.ez.a,c);Er(h,e,k,i,d.oX,d.m1);}
function S0(a,b,c,d){var e,f,g,h,i,j;e=a.co.k;while(true){f=a.co.k;g=T(f,a.i3);if(g>(d+a.l7|0))break;h=Cg(0,g);i=new PJ;g=a.eB.a;f=a.l7;j=a.ip;i.c3=new Bj;i.dM=new B5;i.hG=h;i.dE=20;i.K=f;i.ez=Cg(g,20*f|0);i.gp=MM(j,f);if(i.ba===null)i.ba=GY(b);Bw(a.co,i);}if(f==e)return;Rx(a,c);}
function Rx(a,b){var c,d,e,f,g,h,i,j,k;c=a.co;d=c.k;e=T((b/(d*20|0)|0)+1|0,d)*20|0;c=BP(c);while(BQ(c)){f=BS(c);g=a.el;h=a.iA;Fv(g);i=0;while(true){j=f.dE;if(i>=j)break;k=e-T(d,j)|0;if(k<b)k=e;e=k+1|0;FQ(f,g,D7(e),T(f.K,i)+f.gp|0,h);i=i+1|0;}Ey(f.ba,g);f.ni=g.j6;}}
function Jn(a){DY(a.co,new Mp);FI(a.co);a.el=C5(a.el,null);a.fj=C5(a.fj,null);}
function NQ(){B.call(this);this.tl=null;}
function Li(a,b){Ct(a.tl,b);}
function NP(){B.call(this);this.mV=null;}
function AFr(a,b){var c;c=a.mV;DR(c,Hf(b,FN(c)));}
function NO(){B.call(this);this.rq=null;}
function AEA(a,b){var c;c=a.rq;Ic(c,Hf(b,S8(c)));}
function UG(){var a=this;B.call(a);a.jr=null;a.go=null;a.kr=null;a.ht=null;a.kt=null;a.lU=0.0;a.sJ=0.0;a.wz=0;a.vD=0;a.vQ=0;a.ms=0;}
function NN(){B.call(this);this.uP=null;}
function AEz(a){var b,c;b=a.uP;c=b.jR?0:1;b.jR=c;b.fz.lU=!c?0.0:0.5;b=new R;U(b);G$(K(b,C(206)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NU(){B.call(this);this.oJ=null;}
function AH8(a){var b,c;b=a.oJ;c=b.h3?0:1;b.h3=c;b=new R;U(b);G$(K(b,C(207)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NT(){B.call(this);this.sI=null;}
function ARs(a){var b,c;b=a.sI;c=b.jv^1;b.jv=c;b=new R;U(b);G$(K(b,C(208)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NS(){B.call(this);this.wo=null;}
function AKE(a){var b,c,d,e,f;b=a.wo;c=(b.dG+3|0)%6|0;b.dG=c;d=b.fp.data;e=d.length;f=0;while(f<e){b=d[f];b.bR=c;b=b.bD;if(b!==null)b.gI=1;f=f+1|0;}}
function NR(){B.call(this);this.oj=null;}
function AM3(a){var b;b=a.oj;b.bz=b.bz?0:1;Jn(b.cG);b.cG=AQb();SO(b,b.R,b.ch,b.bM.b1);}
function NM(){B.call(this);this.rW=null;}
function AQR(a){var b;b=a.rW;b.iX=b.iX?0:1;}
function NL(){B.call(this);this.vk=null;}
function AEp(a){var b;b=a.vk;b.lR=b.lR?0:1;}
var E6=F(Cj);
var AUZ=null;var AWj=null;var AU0=null;var AWk=null;function AEw(){AEw=Bm(E6);ALJ();}
function ABl(a,b){var c=new E6();AA7(c,a,b);return c;}
function AA7(a,b,c){AEw();C9(a,b,c);}
function ALJ(){var b;AUZ=ABl(C(209),0);AWj=ABl(C(210),1);b=ABl(C(211),2);AU0=b;AWk=G(E6,[AUZ,AWj,b]);}
var Jv=F(KB);
function Rg(){var a=this;Jv.call(a);a.y1=0;a.uQ=0;a.ry=null;}
function Kk(){var a=this;B.call(a);a.wN=null;a.qz=null;a.x1=0.0;a.mJ=0.0;a.lS=null;a.k4=null;a.iF=0;}
function Lj(){var a=this;B.call(a);a.hA=0;a.ox=0;}
var AV8=null;var AV7=null;function YO(a,b){var c=new Lj();Zr(c,a,b);return c;}
function Zr(a,b,c){a.hA=b;a.ox=c;}
function LA(a){return a.hA!=1?0:1;}
function Wm(a){return a.hA!=3?0:1;}
function KM(b){return YO(2,b);}
function ZO(){AV8=YO(0,0);AV7=YO(1,0);}
function We(){var a=this;B.call(a);a.tx=null;a.uk=null;a.s8=null;}
function GM(){var a=this;B.call(a);a.bB=0;a.cl=0;a.cQ=0;a.iU=0;}
function AWl(a,b,c,d){var e=new GM();TV(e,a,b,c,d);return e;}
function TV(a,b,c,d,e){a.bB=d;a.cl=b;a.cQ=c;a.iU=e;}
function OY(){var a=this;GM.call(a);a.d5=null;a.bO=0;a.tX=0;a.xR=0;a.j4=0;}
var ACI=F();
function VJ(b,c){return (b+(c/2|0)|0)/c|0;}
function PX(b,c,d){if(b<(2147483647/c|0))return VJ(T(b,c),d);return 0.5+c*b/d|0;}
function H9(b,c){return ((b+c|0)-1|0)/c|0;}
function G0(b){return b+0.5|0;}
function DD(b){return b+0.5|0;}
function Fu(b,c,d){return Z(b,Ba(c,d));}
function Ze(b,c){return Yu(b)/Yu(c);}
function Mf(){var a=this;GM.call(a);a.n=null;a.wD=null;}
var TM=F(0);
function NB(){var a=this;B.call(a);a.vr=null;a.vs=null;}
function AKo(a,b){var c,d;c=a.vr;d=a.vs;$rt_globals.console.info("paste plain string "+b);c.j(Ce(b));C1(d);}
function Up(){B.call(this);this.v1=null;}
function AO9(a,b){a.v1.clipboardData.setData("text/plain",$rt_ustr(b));}
var Mc=F(0);
function Fy(a){return DC(a,null);}
function Qc(){B.call(this);this.r9=null;}
function AI5(a){I7(a.r9);}
function Qa(){B.call(this);this.vX=null;}
function AEj(a){Jy(a.vX);}
var Xu=F(0);
var AWb=null;function ACM(){AWb=new NC;}
var PS=F(0);
var AU1=0.0;function Ta(b){Cc(b,1.0471975803375244,0.75,1.25,0.375);}
function Yf(){AU1=Ze(Ze(0.5,0.375),4.0);}
function Wo(){var a=this;Jo.call(a);a.xI=0;a.nk=0;}
function RL(){B.call(this);this.u1=null;}
function DC(a,b){var c,d,e;c=a.u1;d=c.rX;e=c.dC;if(BK(b,d))b=d;else{e=e.style;if(b!==null&&H(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}c.rX=b;return 1;}
var ABx=F();
var NC=F();
function AQS(a){}
function JP(){B.call(this);this.x4=null;}
var AV3=null;var AWm=null;function AJA(){AJA=Bm(JP);ARg();}
function AHp(a){var b=new JP();XV(b,a);return b;}
function XV(a,b){AJA();a.x4=b;}
function ARg(){AV3=AHp(C(212));AWm=AHp(C(213));}
var VA=F(0);
function ABa(){B.call(this);this.i7=null;}
function ASe(a){var b=new ABa();ALX(b,a);return b;}
function ALX(a,b){a.i7=b;}
function Eh(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.i7));}
function CF(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.i7));}
function AGN(a){var b,c;b=a.i7.byteLength;c=new R;U(c);K(Bl(K(c,C(214)),b),C(215));return S(c);}
var T4=F(0);
function Kx(){var a=this;B.call(a);a.hX=null;a.fR=null;a.l9=null;}
function ABu(a,b){var c=new Kx();AJw(c,a,b);return c;}
function ARM(a,b,c){var d=new Kx();N6(d,a,b,c);return d;}
function X3(b){var c,d,e,f,g,h,i;c=new Kx;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=P(Bv,0);else{f=P(Bv,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=Ce(e[h]);h=h+1|0;}}}else f=P(Bv,0);N6(c,d,b,f);return c;}
function AJw(a,b,c){N6(a,b,c,P(Bv,0));}
function N6(a,b,c,d){a.hX=b;a.fR=c;a.l9=d;}
function ER(a){var b;b=a.hX;return Ce(b!==null?b.name:a.fR.name);}
function AJY(a){var b,c,d,e,f,g;if(a.fR===null){b=a.l9;c=ER(a);d=Zt(b);e=new R;U(e);K(K(K(e,d),C(216)),c);c=S(e);}else{b=a.l9;c=ER(a);f=a.fR.size;g=f|0;if(g!==f){d=ER(a);e=new R;U(e);K(K(e,C(217)),d);$rt_globals.console.info($rt_ustr(S(e))+f);g=0;}d=Zt(b);e=new R;U(e);Bl(K(K(K(K(e,d),C(216)),c),C(218)),g);c=S(e);}return c;}
function HL(){var a=this;B.call(a);a.bE=null;a.fH=null;a.td=null;a.gH=null;a.dw=null;a.uA=null;a.vc=null;a.vS=null;}
function AWn(a,b,c,d,e){var f=new HL();Iy(f,a,b,c,d,e);return f;}
function Iy(a,b,c,d,e,f){var g;g=c.data;a.uA=AAj(C(219),16.0);a.vc=AAj(C(219),17.0);a.vS=AAj(C(57),15.0);a.bE=b;a.td=c;a.gH=d;if(g.length>=15){a.fH=e;a.dw=f;return;}b=new BF;X(b);L(b);}
function UR(){var a=this;B.call(a);a.sD=null;a.sE=null;}
function Kg(){var a=this;Kk.call(a);a.pP=null;a.op=null;}
function YE(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.pP;e=0;f=0;g=a.op;a:{b:{while(true){if((e+32|0)>f&&Fo(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=EI(b)+j|0;h=i.length;f=Ba(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new BV;b=new R;U(b);Bl(K(Bl(K(b,C(220)),k),C(198)),h);Bp(l,S(b));L(l);}if(EI(b)<e)break;if(e<0){b=new BV;c=new R;U(c);K(Bl(K(c,C(199)),e),C(200));Bp(b,S(c));L(b);}h=b.cr;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.ry.data[n+b.uQ|0];m=m+1|0;j=o;n=k;}b.cr
=h+e|0;e=0;}if(!Fo(c)){l=!Fo(b)&&e>=f?AV8:AV7;break a;}i=g.data;k=Ba(EI(c),i.length);p=new NA;p.m3=b;p.qD=c;l=AAX(a,d,e,f,g,0,k,p);e=p.ux;j=p.vV;if(l===null){if(!Fo(b)&&e>=f)l=AV8;else if(!Fo(c)&&e>=f)l=AV7;}Wp(c,g,0,j);if(l!==null)break a;}b=new VN;X(b);L(b);}p=new BV;l=new R;U(l);BX(Bl(K(Bl(K(l,C(201)),j),C(196)),h),41);Bp(p,S(l));L(p);}Sv(b,b.cr-(f-e|0)|0);return l;}
var Po=F(Kg);
function AAX(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Lh(h,2))break a;i=AV7;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!WK(l)){if((f+3|0)>g){j=j+(-1)|0;if(Lh(h,3))break a;i=AV7;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Cr(l)){i=KM(1);break a;}if
(j>=d){if(Fo(h.m3))break a;i=AV8;break a;}c=j+1|0;m=k[j];if(!CO(m)){j=c+(-2)|0;i=KM(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Lh(h,4))break a;i=AV7;break a;}k=e.data;o=Eg(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.ux=j;h.vV=f;return i;}
var TT=F(DO);
function H7(){var a=this;B.call(a);a.wc=null;a.fd=null;a.tE=null;a.xX=null;a.qT=null;a.mq=null;a.oW=null;a.wf=null;a.k8=null;a.kX=null;a.ie=null;}
function AWo(a,b,c,d,e,f,g,h,i,j,k){var l=new H7();L0(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function L0(a,b,c,d,e,f,g,h,i,j,k,l){a.wc=b;a.fd=c;a.tE=d;a.xX=e;a.qT=f;a.mq=g;a.oW=h;a.wf=i;a.k8=j;a.kX=k;a.ie=l;}
var YQ=F(0);
function X7(){var a=this;B.call(a);a.eT=null;a.gy=null;a.oX=null;a.m1=null;}
function ABR(a,b,c,d){var e=new X7();AQX(e,a,b,c,d);return e;}
function AQX(a,b,c,d,e){a.eT=b;a.gy=c;a.oX=d;a.m1=e;}
var ABb=F(0);
function ADn(){var b,c;b=new Il;c=O(C(221));ALs();JJ(b,c,AWp,AWq);return b;}
function ACQ(){var b,c;b=new Il;c=O(C(106));AEG();JJ(b,c,AWr,AWs);return b;}
function ADh(){var b,c;b=new Il;ACE();c=AWt;AEU();JJ(b,c,AWu,AWv);return b;}
function ADH(){var a=this;B.call(a);a.rO=null;a.mH=null;a.t6=null;a.nj=null;}
function Ya(a,b,c,d){var e=new ADH();AFf(e,a,b,c,d);return e;}
function AFf(a,b,c,d,e){a.rO=b;a.mH=c;a.t6=d;a.nj=e;}
function XL(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dw.mH;break a;case 3:if(c!=3){b=b.dw.nj;break a;}b=b.dw.t6;break a;default:b=b.bE.fd;break a;}b=b.dw.rO;}return b;}
function HX(a,b,c){return XL(a,b,0,c);}
function L7(){var a=this;B.call(a);a.iZ=null;a.iB=null;}
function Mj(a,b){var c;c=a.iB;a.iB=b;return c;}
function IZ(){var a=this;L7.call(a);a.bC=null;a.bT=null;a.fi=0;a.ft=0;}
function Jg(a){var b;b=Km(a);if(b==2){if(Km(a.bT)<0)a.bT=M1(a.bT);return OP(a);}if(b!=(-2))return a;if(Km(a.bC)>0)a.bC=OP(a.bC);return M1(a);}
function Km(a){var b,c;b=a.bT;c=b===null?0:b.fi;b=a.bC;return c-(b===null?0:b.fi)|0;}
function M1(a){var b;b=a.bC;a.bC=b.bT;b.bT=a;D6(a);D6(b);return b;}
function OP(a){var b;b=a.bT;a.bT=b.bC;b.bC=a;D6(a);D6(b);return b;}
function D6(a){var b,c,d;b=a.bT;c=b===null?0:b.fi;b=a.bC;d=b===null?0:b.fi;a.fi=Z(c,d)+1|0;a.ft=1;b=a.bC;if(b!==null)a.ft=1+b.ft|0;b=a.bT;if(b!==null)a.ft=a.ft+b.ft|0;}
function Ii(){var a=this;B5.call(a);a.gb=0;a.ge=0;a.gc=0;a.gd=0;}
function HG(a){var b=new Ii();AQ2(b,a);return b;}
function D4(a,b,c){var d=new Ii();AG6(d,a,b,c);return d;}
function O(a){var b=new Ii();AOJ(b,a);return b;}
function E9(a,b,c,d){var e=new Ii();QT(e,a,b,c,d);return e;}
function BH(a){var b=new Ii();Jm(b,a);return b;}
function AQ2(a,b){QT(a,b,b,b,255);}
function AG6(a,b,c,d){QT(a,b,c,d,255);}
function AOJ(a,b){if(!(H(b)!=4&&H(b)!=7&&H(b)!=9)&&I(b,0)==35){if(H(b)==4){a.gb=Io(I(b,1))*17|0;a.ge=Io(I(b,2))*17|0;a.gc=Io(I(b,3))*17|0;a.gd=255;}else{a.gb=K4(I(b,1),I(b,2));a.ge=K4(I(b,3),I(b,4));a.gc=K4(I(b,5),I(b,6));a.gd=H(b)!=9?255:K4(I(b,7),I(b,8));}Jr(a.gb,a.ge,a.gc,a.gd,a);return;}}
function QT(a,b,c,d,e){a.gb=b;a.ge=c;a.gc=d;a.gd=e;Jr(b,c,d,e,a);}
function Jm(a,b){a.gb=b.gb;a.ge=b.ge;a.gc=b.gc;a.gd=b.gd;Ei(a,b);}
function Io(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function K4(b,c){return (16*Io(b)|0)+Io(c)|0;}
var CJ=F(0);
var AVB=null;var AWt=null;var AVD=null;var AVC=null;var AVF=null;var AVE=null;var AVH=null;var AVG=null;var AVJ=null;var AVI=null;var AVK=null;function ACE(){ACE=Bm(CJ);AQr();}
function AQr(){AVB=HG(0);AWt=D4(8,8,8);AVD=O(C(222));AVC=D4(255,255,255);AVF=O(C(223));AVE=O(C(224));AVH=O(C(225));AVG=O(C(226));AVJ=E9(205,205,205,153);AVI=E9(255,255,255,0);AVK=O(C(120));}
function Ca(){Cj.call(this);this.k5=null;}
var AWw=null;var AWx=null;var AWy=null;var AWz=null;var AWA=null;var AWB=null;var AWC=null;var AWD=null;var AWE=null;var AWF=null;var AWG=null;var AWH=null;var AWI=null;var AWJ=null;var AWK=null;var AVL=null;function ABL(){ABL=Bm(Ca);AQT();}
function Df(a,b,c){var d=new Ca();Q7(d,a,b,c);return d;}
function AQI(a,b,c,d){var e=new Ca();YW(e,a,b,c,d);return e;}
function Q7(a,b,c,d){ABL();C9(a,b,c);a.k5=Hz(d,null);}
function YW(a,b,c,d,e){ABL();C9(a,b,c);a.k5=Hz(d,e);}
function AQT(){var b;b=new Ca;ACE();Q7(b,C(227),0,AWt);AWw=b;AWx=Df(C(228),1,O(C(229)));AWy=Df(C(230),2,O(C(231)));AWz=Df(C(232),3,O(C(233)));AWA=Df(C(234),4,AWt);AWB=Df(C(235),5,O(C(236)));AWC=Df(C(237),6,O(C(238)));AWD=Df(C(239),7,O(C(240)));AWE=Df(C(241),8,O(C(242)));AWF=AQI(C(243),9,AWt,D4(237,235,252));AWG=AQI(C(244),10,O(C(245)),O(C(246)));AWH=Df(C(247),11,O(C(238)));AWI=Df(C(248),12,O(C(249)));AWJ=Df(C(250),13,O(C(251)));b=Df(C(252),14,O(C(253)));AWK=b;AVL=G(Ca,[AWw,AWx,AWy,AWz,AWA,AWB,AWC,AWD,AWE,AWF,
AWG,AWH,AWI,AWJ,b]);}
function Iq(){var a=this;B.call(a);a.ig=null;a.oI=null;}
function Hz(a,b){var c=new Iq();ALz(c,a,b);return c;}
function ALz(a,b,c){a.ig=b;a.oI=c;}
function HO(){var a=this;B.call(a);a.iG=null;a.hR=null;a.vO=null;a.yN=null;a.kx=null;a.pk=null;a.n6=null;}
function AWL(a,b,c,d,e,f,g){var h=new HO();K5(h,a,b,c,d,e,f,g);return h;}
function K5(a,b,c,d,e,f,g,h){a.vO=b;a.yN=c;a.hR=d;a.kx=e;a.iG=f;a.pk=g;a.n6=h;}
function AA3(){var a=this;B.call(a);a.l0=null;a.ri=0;}
function XU(a,b){var c=new AA3();AOG(c,a,b);return c;}
function AOG(a,b,c){var d;d=new B5;a.l0=d;a.ri=b;d.bZ=c;}
function O7(a,b){return Co(a.ri,b);}
var De=F(0);
var AVP=null;var AVQ=null;var AVM=null;var AVN=null;var AVO=null;var AWu=null;var AWv=null;var AVR=null;var AVS=null;function AEU(){AEU=Bm(De);AG9();}
function AG9(){AVP=O(C(118));AVQ=O(C(254));AVM=O(C(255));AVN=O(C(256));AVO=O(C(257));AWu=O(C(118));AWv=O(C(254));AVR=E9(205,205,205,153);AVS=D4(247,248,250);}
function ZC(){var a=this;B.call(a);a.js=null;a.hS=0.0;}
function AAj(a,b){var c=new ZC();AMO(c,a,b);return c;}
function AMO(a,b,c){a.js=b;a.hS=c;}
function AOv(a,b){if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){b=b;return a.hS===b.hS&&BK(a.js,b.js)?1:0;}return 0;}
var CK=F(0);
var AU3=null;var AWM=null;var AU5=null;var AU4=null;var AU7=null;var AU6=null;var AU9=null;var AU8=null;var AU_=null;var AU$=null;var AVa=null;function ACV(){ACV=Bm(CK);ARd();}
function ARd(){AU3=HG(187);AWM=O(C(258));AU5=HG(55);AU4=HG(43);AU7=D4(33,66,131);AU6=D4(60,63,65);AU9=O(C(259));AU8=O(C(260));AU_=E9(85,85,85,128);AU$=E9(43,43,43,0);AVa=O(C(103));}
function B8(){Cj.call(this);this.lX=null;}
var AWN=null;var AWO=null;var AWP=null;var AWQ=null;var AWR=null;var AWS=null;var AWT=null;var AWU=null;var AWV=null;var AWW=null;var AWX=null;var AWY=null;var AWZ=null;var AW0=null;var AW1=null;var AVb=null;function ZJ(){ZJ=Bm(B8);AJE();}
function Dv(a,b,c){var d=new B8();Tn(d,a,b,c);return d;}
function AOK(a,b,c,d){var e=new B8();AC2(e,a,b,c,d);return e;}
function Tn(a,b,c,d){ZJ();C9(a,b,c);a.lX=Hz(d,null);}
function AC2(a,b,c,d,e){ZJ();C9(a,b,c);a.lX=Hz(d,e);}
function AJE(){var b;b=new B8;ACV();Tn(b,C(227),0,AWM);AWN=b;AWO=Dv(C(228),1,O(C(261)));AWP=Dv(C(230),2,O(C(262)));AWQ=Dv(C(232),3,O(C(263)));AWR=Dv(C(234),4,O(C(261)));AWS=Dv(C(235),5,D4(188,63,60));AWT=Dv(C(237),6,O(C(264)));AWU=Dv(C(239),7,O(C(265)));AWV=Dv(C(241),8,O(C(266)));AWW=AOK(C(243),9,AWM,D4(52,65,52));AWX=AOK(C(244),10,O(C(245)),O(C(267)));AWY=Dv(C(247),11,O(C(238)));AWZ=Dv(C(248),12,O(C(249)));AW0=Dv(C(250),13,AWM);b=Dv(C(252),14,O(C(253)));AW1=b;AVb=G(B8,[AWN,AWO,AWP,AWQ,AWR,AWS,AWT,AWU,AWV,AWW,
AWX,AWY,AWZ,AW0,b]);}
var Ds=F(0);
var AVf=null;var AVg=null;var AVc=null;var AVd=null;var AVe=null;var AWp=null;var AWq=null;var AVh=null;var AVi=null;function ALs(){ALs=Bm(Ds);AMr();}
function AMr(){AVf=O(C(268));AVg=O(C(269));AVc=O(C(221));AVd=O(C(270));AVe=O(C(258));AWp=O(C(268));AWq=O(C(269));AVh=E9(118,121,122,128);AVi=D4(63,66,68);}
var CU=F(0);
var AVj=null;var AW2=null;var AVl=null;var AVk=null;var AVn=null;var AVm=null;var AVp=null;var AVo=null;var AVr=null;var AVq=null;var AVs=null;function AHS(){AHS=Bm(CU);AO7();}
function AO7(){AVj=HG(206);AW2=O(C(271));AVl=O(C(272));AVk=O(C(112));AVn=O(C(273));AVm=O(C(274));AVp=O(C(275));AVo=O(C(276));AVr=E9(107,106,107,128);AVq=E9(30,31,34,0);AVs=O(C(114));}
function B7(){Cj.call(this);this.hV=null;}
var AW3=null;var AW4=null;var AW5=null;var AW6=null;var AW7=null;var AWi=null;var AW8=null;var AW9=null;var AW$=null;var AW_=null;var AXa=null;var AXb=null;var AXc=null;var AXd=null;var AXe=null;var AVt=null;function UH(){UH=Bm(B7);AKz();}
function Dw(a,b,c){var d=new B7();RO(d,a,b,c);return d;}
function ASk(a,b,c,d){var e=new B7();Wy(e,a,b,c,d);return e;}
function RO(a,b,c,d){UH();C9(a,b,c);a.hV=Hz(d,null);}
function Wy(a,b,c,d,e){UH();C9(a,b,c);a.hV=Hz(d,e);}
function AKz(){var b,c;b=new B7;AHS();RO(b,C(227),0,AW2);AW3=b;AW4=Dw(C(228),1,O(C(277)));AW5=Dw(C(230),2,O(C(278)));AW6=Dw(C(232),3,O(C(279)));AW7=Dw(C(234),4,AW2);AWi=Dw(C(235),5,O(C(280)));AW8=Dw(C(237),6,O(C(281)));AW9=Dw(C(239),7,O(C(282)));AW$=Dw(C(241),8,O(C(283)));c=new B7;ACV();Wy(c,C(243),9,AWM,O(C(275)));AW_=c;AXa=ASk(C(244),10,AWM,O(C(115)));AXb=Dw(C(247),11,O(C(284)));AXc=Dw(C(248),12,O(C(285)));AXd=Dw(C(250),13,AW2);b=Dw(C(252),14,O(C(253)));AXe=b;AVt=G(B7,[AW3,AW4,AW5,AW6,AW7,AWi,AW8,AW9,AW$,
AW_,AXa,AXb,AXc,AXd,b]);}
var Dl=F(0);
var AVx=null;var AVy=null;var AVu=null;var AVv=null;var AVw=null;var AWr=null;var AWs=null;var AVz=null;var AVA=null;function AEG(){AEG=Bm(Dl);AMY();}
function AMY(){AVx=O(C(274));AVy=O(C(286));AVu=O(C(106));AVv=O(C(281));AVw=O(C(271));AWr=O(C(274));AWs=O(C(287));AVz=O(C(288));AVA=D4(43,45,48);}
function HZ(){var a=this;B.call(a);a.s2=null;a.nZ=null;a.pb=null;a.t0=null;a.qJ=null;a.h8=null;}
function AXf(a,b,c,d,e,f){var g=new HZ();L6(g,a,b,c,d,e,f);return g;}
function L6(a,b,c,d,e,f,g){a.s2=b;a.nZ=c;a.pb=d;a.t0=e;a.qJ=f;a.h8=g;}
function Il(){var a=this;B.call(a);a.kl=null;a.lI=null;a.tT=null;}
function AXg(a,b,c){var d=new Il();JJ(d,a,b,c);return d;}
function JJ(a,b,c,d){a.kl=b;a.lI=c;a.tT=d;}
function LC(a,b){return !b?a.lI:a.tT;}
function Y1(){var a=this;B.call(a);a.k_=null;a.sz=null;a.u4=null;}
function ADw(a,b,c){var d=new Y1();APY(d,a,b,c);return d;}
function APY(a,b,c,d){a.k_=b;a.sz=c;a.u4=d;}
function HH(){var a=this;B.call(a);a.fL=0;a.lm=null;}
function UX(){var a=this;B.call(a);a.yK=null;a.vf=null;a.fE=null;}
function FH(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.fE.data;f=e.length-1|0;g=f;while(true){if(d>g)return Ba(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.hy:i.hz;k=!c?i.mj:i.mk;if(j<=k&&k<(j+k|0))return h;j=BD(j,b);if(j<0)d=h+1|0;else{if(j<=0)break;g=h-1|0;}}return h;}
function Lq(){var a=this;B.call(a);a.hz=0;a.mk=0;a.hy=0;a.mj=0;a.j$=0;}
var YP=F();
function Co(b,c){return DD(b*c);}
var Z1=F();
function TP(){var a=this;B.call(a);a.oA=null;a.s$=null;a.t7=null;}
var Tt=F();
function AHh(a,b){ABT(b);}
function IY(){var a=this;B.call(a);a.es=null;a.eS=null;a.eJ=null;}
var AVU=0;function ABT(a){var b;b=a.eS;if(b!==null){AVU=AVU-1|0;a.es.dP.deleteTexture(b);a.eS=null;}}
function Ci(a){return a.eJ.a;}
function K8(a){return a.eJ.b;}
function Tf(a,b,c,d){var e;e=a.eJ;e.a=b;e.b=c;LH(a);a.es.dP.texStorage2D(3553,1,d,b,c);e=a.es.dP;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function LH(a){var b,c;b=a.es.dP;c=a.eS;b.bindTexture(3553,c);}
function Ey(a,b){var c,d,e,f,g,h;a:{c=b.lT;d=b.k2;e=a.eJ;f=e.a;if(f){g=e.b;if(g){if(f==c&&g==d?1:0){LH(a);break a;}e=a.es.dP;h=a.eS;e.deleteTexture(h);a.eS=a.es.dP.createTexture();Tf(a,c,d,32856);break a;}}Tf(a,c,d,32856);}P1(a,b,0,0);}
function Q6(a,b,c,d){LH(a);P1(a,b,c,d);}
function P1(a,b,c,d){var e;e=a.es.dP;b=b.hM;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Yc=F();
function EV(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function YZ(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function Ul(){var a=this;B.call(a);a.bn=null;a.N=null;a.P=null;a.fW=null;}
function KD(a,b,c){var d;d=a.P;d.lG(b,c,d.eX);Ni(a);}
function Ni(a){var b,c,d,e;b=a.N;c=a.P.p.a;b.p.a=c;d=b.cR;if(d!==null&&c!=Ci(d)&&!(c>=b.h_&&Ci(b.cR)>=b.h_))b.gS=1;b=a.N;b.eX=a.bn.b1;if(VT(b))c=0;else{b=a.N;US(b);e=Cm(b.e5,b.jb);Pe(b,Fx(b.eG)+(e*2|0)|0);c=b.p.b;}b=a.N.H;d=a.P.H;Bg(b,d.a,d.b-c|0);}
function Lm(b,c){if(b<0)c=C(289);else if(b>0)c=C(290);return c;}
function Xx(a,b,c){var d;d=a.N.H.a;return (d-c|0)<=b&&b<d?1:0;}
function ML(a,b,c){var d,e;d=a.N;e=d.H.a+d.p.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Pc(a,b,c){var d;d=a.N.H.b;return (d-c|0)<=b&&b<d?1:0;}
function Ny(a,b,c){var d,e;d=a.P;e=d.H.b+d.p.b|0;return e<=b&&b<(e+c|0)?1:0;}
function V0(a,b,c){var d,e,f;d=a.N.H.b-c|0;e=a.P;f=(e.H.b+e.p.b|0)+c|0;return d<=b&&b<f?1:0;}
function Ws(a,b,c){var d,e;d=a.N.H.b+c|0;e=a.P;return AAu(b,d,(e.H.b+e.p.b|0)-c|0);}
function N_(a,b,c){var d,e,f;d=a.N;e=d.H.a;f=e-c|0;e=(e+d.p.a|0)+c|0;return f<=b&&b<e?1:0;}
function NF(a,b,c){var d,e;d=a.N;e=d.H.a;return AAu(b,e+c|0,(e+d.p.a|0)-c|0);}
function AAu(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BD(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function H2(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bj;f=new Bj;g=b.a;h=b.b;b=a.P;i=b.H;j=i.a;k=i.b;b=b.p;l=b.a;m=b.b;b=new Vu;b.tP=a;b.tR=e;b.tQ=f;b.tL=c;b.tK=g;b.tO=j;b.tM=l;b.t2=d;b.t1=h;b.t3=k;b.uv=m;return b;}
function SR(){var a=this;B.call(a);a.eV=null;a.b7=null;a.fq=null;a.f6=null;a.lW=null;a.cg=null;a.e3=null;a.cC=0;a.e0=0;a.mh=0;a.iq=0;a.iY=0;a.fZ=0;a.ui=null;a.pD=null;a.wB=null;a.i8=null;}
function PY(a,b,c){a.eV=b;Vz(a,c);Lf(a);}
function QC(a,b){var c;a.lW=b.iG;c=b.kx.lI;Ei(a.b7.dc,c);c=b.hR.k_;Ei(a.b7.gB,c);a.i8=b.kx;}
function Vz(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=LO(b);d=b.b1;BM(a.eV);CM(c,a.eV);e=PR(a.eV,1.25);f=0;a.cC=Co(2.0,d);a.e0=Co(3.0,d);a.mh=Co(12.0,d);g=0;h=a.cg.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Kb(c,l.lj,0.875);n=a.mh;o=(n+m|0)+n|0;f=Z(f,o);b=l.dZ;b.a=g;b.b=0;b=l.dk;b.a=o;b.b=e;Cc(l.gU,g,0.0,o,k);g=g+o|0;j=j+1|0;}b=a.fq;b.a=g;b.b=e;b=a.b7.bp;o=a.fZ;if(!o){m=a.cC;m=(g+m|0)+T(m,a.cg.data.length)|0;}else m=(f+(a.cC*2|0)|0)+(a.e0*2|0)|0;b.a=m;if(!o)e=e+(a.cC*2|0)|0;else{o=a.cC;e=(T(e+o|0,a.cg.data.length)
+o|0)+(a.e0*2|0)|0;}b.b=e;}
function Yq(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function ES(a){var b,c;b=a.fq;if(b.a&&b.b)return a.b7.bp;c=new Bt;Bp(c,C(291));L(c);}
function Lf(a){a.iY=1;}
function ADf(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.dl;if(!a.cg.data.length)return;if(a.e3===null)a.e3=GY(c);a:{if(!a.iY){d=a.fq;if(T(d.a,d.b))break a;}d=a.fq;if(!T(d.a,d.b))Vz(a,b);d=a.fq;e=d.a;f=d.b;if(!T(e,f))return;d=E$(c,e,f,b.cE);CM(d,a.eV);g=PR(a.eV,0.125);h=a.eV;i=h.ej;g=g+i-(i+h.dU)/16.0;j=a.cg.data;e=j.length;f=0;while(f<e){h=j[f];Ev(d,h.lj,h.gU.bq+a.mh,g);f=f+1|0;}Ey(a.e3,d);a.iY=0;Is(d);}if(!JL(a.b7)){d=a.b7;ZB(c,d.bp,d.cs,d.gB,a.cC,a.f6);d=a.b7;h=d.bp;k=d.cs;d=d.dc;e=a.cC;l=a.f6;l.a=(h.a-e|0)
-e|0;l.b=(h.b-e|0)-e|0;BB(c,k.a+e|0,k.b+e|0,l,d);if(a.fZ){d=a.b7;ABz(c,d.bp,d.cs,0,0,O7(a.lW,b.b1),a.lW.l0,a.f6);}}j=a.cg.data;m=j.length;n=0;while(n<m){d=j[n];if(b.cE){h=d.dZ;e=h.a;f=h.b;h=d.dk;k=d.gU;l=a.e3;o=a.i8;Ew(c,e,f,h,k,l,o.kl,LC(o,d.gF));}else{h=d.dZ;e=h.a;f=h.b;h=d.dk;k=d.gU;l=a.e3;o=a.i8;Et(c,e,f,h,k,l,o.kl,LC(o,d.gF),0.0);}n=n+1|0;}b:{if(a.fZ){j=a.cg.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.f6;e=(a.b7.bp.a-(a.cC*2|0)|0)-(a.e0*2|0)|0;h=d.dk;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.dZ;BB(c,
k.a+h.a|0,k.b,b,LC(a.i8,d.gF));}p=p+1|0;}}}}
function Nz(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cg.data;if(c>=d.length)return (-1);e=d[c];if(EV(b,e.dZ,e.dk))return c;if(a.fZ){f=e.dZ;g=f.a;e=e.dk;h=e.a;g=g+h|0;i=f.b;f=a.f6;f.a=(a.b7.bp.a-(a.cC*2|0)|0)-h|0;f.b=e.b;if(YZ(b,g,i,f))break;}c=c+1|0;}return c;}
function Xh(){B.call(this);this.qt=null;}
function AFm(a,b){var c,d;c=a.qt;Xb(c,D2(c,b.n));b=Be(c);d=c.c;KX(b,d.o,d.r);GC(c);}
var Mp=F();
function AOR(a,b){b=b;b.ba=C5(b.ba,null);}
function PJ(){var a=this;B.call(a);a.ba=null;a.hG=null;a.ez=null;a.dE=0;a.K=0;a.c3=null;a.dM=null;a.gp=0;a.ni=0;}
function Np(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dE;i=T(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Z(i,e))a:{while(true){if(d<=e){j=d;break a;}Fv(c);j=d+(-1)|0;b=D7(d);d=T(j,a.K)%a.ez.b|0;FQ(a,c,b,a.gp,g);Q6(a.ba,c,0,d);if(!(j%a.dE|0))break;d=j;}}else{Fv(b);k=a.dE-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;FQ(a,b,D7(j),T(a.K,k)+a.gp|0,g);k=k+(-1)|0;j=h;}Ey(a.ba,b);j=Z(i,e);}return j;}k=a.dE;h=T(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Ba(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Fv(c);b=D7((d+f|0)+1|0);j=d+1|0;d=T(d,
a.K)%a.ez.b|0;FQ(a,c,b,a.gp,g);Q6(a.ba,c,0,d);if(!(j%a.dE|0))break;d=j;}}else{Fv(b);d=0;while(d<a.dE){h=h+1|0;FQ(a,b,D7((h>e?h-f|0:h)+f|0),T(a.K,d)+a.gp|0,g);d=d+1|0;}Ey(a.ba,b);j=Ba(i,e);}return j;}
function AAU(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q;l=d/a.K|0;c=Ba((j+i|0)%e|0,c);Bg(a.c3,Ci(a.ba),a.K);e=d%K8(a.ba)|0;i=a.K;m=e/i|0;n=m+(c/i|0)|0;if(c%i|0)n=n+1|0;i=m;e=m;o=l;while(i<n){if(LB(a,g,o,l+(i-m|0)|0,f,k)){p=T((i-e|0)+1|0,a.K);Bg(a.c3,Ci(a.ba),p);Cc(a.dM,0.0,T(e,a.K),Ci(a.ba),p);}else{q=Fw(f,g,o,k);c=e-m|0;e=a.K;Er(a,h,T(c,e)-(d%e|0)|0,b,k.eT,q);o=(l+i|0)-m|0;Bg(a.c3,Ci(a.ba),a.K);Cc(a.dM,0.0,T(i,a.K),Ci(a.ba),a.K);e=i;}i=i+1|0;}q=Fw(f,g,o,k);c=e-m|0;e=a.K;Er(a,h,T(c,e)-(d%e|0)|0,b,k.eT,q);}
function LB(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Fw(e,b,c,f)!==f.gy?0:1;}
function Fw(b,c,d,e){c=c.data;return d<c.length&&c[d]?HX(b.dw,b,c[d]):e.gy;}
function Er(a,b,c,d,e,f){if(a.ni)Ew(b,a.hG.a+d.a|0,c+d.b|0,a.c3,a.dM,a.ba,e,f);else Et(b,a.hG.a+d.a|0,c+d.b|0,a.c3,a.dM,a.ba,e,f,0.0);}
function FQ(a,b,c,d,e){Ev(b,c,a.ez.a-20.0*e,d);}
var AAa=F();
function N3(){B.call(this);this.n3=null;}
function AFD(a,b){C8(a.n3,b);}
var Dm=F(Bt);
var Tw=F(F3);
var Y5=F(0);
function X$(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(Gj(b)){case -1655966961:if(!BE(b,C(33)))break a;c=4;break a;case 3401:if(!BE(b,C(31)))break a;c=3;break a;case 98723:if(!BE(b,C(34)))break a;c=2;break a;case 3254818:if(!BE(b,C(29)))break a;c=1;break a;case 3556653:if(!BE(b,C(21)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;default:d=Ec();e=new R;U(e);K(K(e,C(292)),b);Ct(d,S(e));c=0;break b;}c=0;}return c;}
function Vo(){B.call(this);this.p3=null;}
function ALL(a,b){var c,d,e,f;c=a.p3;if(c.ed!=3){b=b.data;d=CF(b[0]);e=Eh(b[1]);Ms(c.f,d,e,null,null);if(c.eD){b=D_(c);f=JS(Eb(),c.tB);c=new R;U(c);K(FX(K(K(c,b),C(293)),f),C(37));$rt_globals.console.info($rt_ustr(S(c)));}}}
function ADu(){var a=this;B.call(a);a.jY=null;a.ke=null;a.d3=null;a.j3=null;a.bk=null;a.lk=null;a.ls=null;a.eO=null;a.fm=null;a.he=null;}
function AQ5(a,b){var c=new ADu();AK$(c,a,b);return c;}
function AK$(a,b,c){var d,e,f;a.d3=b;a.j3=c;a.bk=AFT();b=new R;U(b);a.he=b;a.eO=Ke();b=new SL;d=AC0(16);b.ff=0;b.dt=P(Hk,d);b.pa=0.75;Vh(b);a.fm=b;b=new Vl;c=a.bk;e=a.he;f=a.eO;b.cS=c;b.jJ=e;b.q0=f;a.lk=b;b=new Vd;b.cv=c;b.kS=e;b.pN=f;a.ls=b;}
function Nl(a){var b,c,d,e,f,g,h;a:{b=Jp(a.d3.eb);c=b.gL;if(c.cy>0){d=c.cw;e=0;b:while(true){f=b.gL.bV.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cm;if(I6(a.eO,g))B_(a.eO,g);else{h=a.eO;Ed(h,g,Cs(h.cy));}c=c.ct;if(d!=b.gL.cw)break b;}e=e+1|0;}b=new GF;X(b);L(b);}}b=a.d3.fu;if(b!==null)Rj(a,b);Bi(a.bk,a.d3.eb.cy);b=So(Jp(a.d3.eb));while(EP(b)){c=OW(b);Ga(a.bk,a.he.I,H(c));CX(a.he,c);}b=So(Jp(a.d3.eb));while(EP(b)){c=OW(b);c=B_(a.d3.eb,c);Bi(a.bk,c.k);c=BP(c);while(BQ(c)){g=BS(c);g=B_(a.eO,g);Bi(a.bk,
g.be);}}if(a.d3.fu===null)Bi(a.bk,(-1));else{Bi(a.bk,a.fm.ff);Sz(a,a.d3.fu);}if(a.j3===null)Bi(a.bk,(-1));else{Bi(a.bk,1);Yz(a.j3,a.bk,a.fm);}a.jY=P4(a.bk);a.ke=E3(S(a.he));}
function Rj(a,b){var c,d,e,f,g,h;if(Vx(a.fm,b))LJ(a.fm,b);else{c=a.fm;d=Cs(c.ff);if(b===null){e=Qp(c);if(e===null){c.jh=c.jh+1|0;e=VB(c,null,0,0);f=c.ff+1|0;c.ff=f;if(f>c.ln)Nh(c);}}else{g=Iz(b);h=g&(c.dt.data.length-1|0);e=Nn(c,b,h,g);if(e===null){c.jh=c.jh+1|0;e=VB(c,b,h,g);f=c.ff+1|0;c.ff=f;if(f>c.ln)Nh(c);}}e.cD=d;}b=b.cf;if(b===null)return;c=new Xs;c.pO=a;b.en(c);}
function Sz(a,b){var c,d,e,f;c=(LJ(a.fm,b)).be;Bi(a.bk,c);if(b instanceof Ki)Bi(a.bk,(-1));else if(!(b instanceof JO))Bi(a.bk,0);else Bi(a.bk,1);d=a.lk;Bi(d.cS,b.dR.cz());e=b.dR;f=new Mb;f.vT=d;e.en(f);d=a.ls;Bi(d.cv,b.ei.cz());e=b.ei;f=new UK;f.tG=d;e.en(f);d=b.ij;Bi(a.bk,d.cz());e=new VI;e.uy=a;d.en(e);d=b.fV;Bi(a.bk,d.cz());d=d.bW();while(d.cd()){e=d.bP();M8(a.lk,e.im);Gz(a.ls,e.je);Bi(a.bk,e.pl);}d=b.tC;if(d===null)Bi(a.bk,(-1));else Bi(a.bk,(B_(a.eO,d)).be);b=b.cf;Bi(a.bk,b.cz());d=new OQ;d.m4=a;b.en(d);}
function Mr(){B.call(this);this.tU=null;}
function AD5(a,b){var c,d,e,f,g,h,i,j;c=a.tU;if(c.eD){d=D_(c);e=new R;U(e);K(K(e,d),C(294));$rt_globals.console.info($rt_ustr(S(e)));}b=b.data;f=CF(b[0]);g=Eh(b[1]);h=(CF(b[2])).data[0];if(c.f.b0==h){i=null;j=null;if(b.length>=5){i=CF(b[3]);j=Eh(b[4]);}Ms(c.f,f,g,i,j);DI(c.f.cL);DI(c.f.cW);Pr(c.f);G8(c.f);LD(c);}}
function Tz(){var a=this;B.call(a);a.oR=null;a.oS=null;a.oQ=null;}
function AH3(a,b){VP(a.oR,a.oS,b,a.oQ);}
function Sa(){var a=this;B.call(a);a.vz=null;a.vA=null;a.vy=0;}
function AHt(a,b){var c,d,e;c=a.vz;d=a.vA;e=a.vy;d.j(VZ(c,(b.n.a+e|0)-c.d0.a|0));}
function R_(){var a=this;B.call(a);a.pj=null;a.ph=null;a.pi=0;}
function AP8(a,b){var c,d,e;c=a.pj;d=a.ph;e=a.pi;d.j(PC(c,(b.n.b+e|0)-c.d0.b|0));}
var EE=F(0);
function Nq(){var a=this;B.call(a);a.hC=0;a.ml=0;a.iH=0;a.f3=0;a.gK=null;}
function BQ(a){return a.hC>=a.iH?0:1;}
function BS(a){var b,c;O8(a);b=a.hC;a.f3=b;c=a.gK;a.hC=b+1|0;return c.lx(b);}
function Q4(a){var b,c,d;if(a.f3<0){b=new Dm;X(b);L(b);}O8(a);a.gK.mp(a.f3);a.ml=a.gK.bN;c=a.f3;d=a.hC;if(c<d)a.hC=d-1|0;a.iH=a.iH-1|0;a.f3=(-1);}
function O8(a){var b;if(a.ml>=a.gK.bN)return;b=new GF;X(b);L(b);}
function M7(){B.call(this);this.sa=null;}
function AKf(a){return Rf(a.sa);}
function M4(){B.call(this);this.q1=null;}
function AO$(a){return Rf(a.q1);}
function SI(){B.call(this);this.x3=null;}
function AML(a){return ADG(0);}
var ACO=F();
var ACd=F();
function Rp(){B.call(this);this.ng=null;}
function APK(a,b){GS(a.ng,b);}
function Nm(){B.call(this);this.pq=null;}
function AKw(a,b){GS(a.pq,b);}
function VM(){B.call(this);this.r1=null;}
function AQz(a,b){var c,d,e,f;c=a.r1;if(c.gi!=3&&c.ed!=3){b=b.data;c.gA=3;d=CF(b[0]);e=Eh(b[1]);K7(c.f,d,e);if(c.eD){b=D_(c);f=JS(Eb(),c.hB);c=new R;U(c);K(FX(K(K(c,b),C(295)),f),C(37));$rt_globals.console.info($rt_ustr(S(c)));}}}
function P$(){B.call(this);this.rD=null;}
function AFJ(a,b){var c,d,e,f,g,h;c=a.rD;if(c.ed!=3){d=b.data;c.gi=3;if((CF(d[2])).data[0]!=1)GS(c,b);else{e=CF(d[0]);f=Eh(d[1]);g=c.gA!=3?0:1;QL(c.f,e,f,g);if(c.eD){b=D_(c);h=JS(Eb(),c.hB);c=new R;U(c);K(FX(K(K(c,b),C(296)),h),C(37));$rt_globals.console.info($rt_ustr(S(c)));}}}}
function M3(){var a=this;B.call(a);a.qI=0;a.qH=0;}
function ACN(){var a=this;B.call(a);a.gV=null;a.lo=0;a.eZ=0;}
function AFT(){var a=new ACN();AQ4(a);return a;}
function AQ4(a){a.lo=0;a.gV=Bx(16);a.eZ=0;}
function Ga(a,b,c){Bi(a,b);Bi(a,c);}
function Bi(a,b){var c,d;c=a.gV;d=c.data.length;if(d==a.eZ)a.gV=Ir(c,d*2|0);c=a.gV.data;d=a.eZ;a.eZ=d+1|0;c[d]=b;}
function P4(a){var b,c,d,e,f;b=a.lo;if(b&&a.eZ!=b){c=Ec();b=a.lo;d=a.eZ;e=new R;U(e);K(Bl(K(Bl(K(e,C(297)),b),C(298)),d),C(299));Ct(c,S(e));}f=a.gV;b=f.data.length;d=a.eZ;if(b!=d)f=Ir(f,d);return f;}
function SL(){var a=this;DA.call(a);a.ff=0;a.dt=null;a.jh=0;a.pa=0.0;a.ln=0;}
function AC0(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Vh(a){a.ln=a.dt.data.length*a.pa|0;}
function Vx(a,b){return Xc(a,b)===null?0:1;}
function LJ(a,b){var c;c=Xc(a,b);if(c===null)return null;return c.cD;}
function Xc(a,b){var c,d;if(b===null)c=Qp(a);else{d=Iz(b);c=Nn(a,b,d&(a.dt.data.length-1|0),d);}return c;}
function Nn(a,b,c,d){var e;e=a.dt.data[c];while(e!==null&&!(e.ll==d&&(b!==e.cm?0:1))){e=e.gP;}return e;}
function Qp(a){var b;b=a.dt.data[0];while(b!==null&&b.cm!==null){b=b.gP;}return b;}
function VB(a,b,c,d){var e,f;e=new Hk;Xw(e,b,null);e.ll=d;f=a.dt.data;e.gP=f[c];f[c]=e;return e;}
function Nh(a){var b,c,d,e,f,g,h,i;b=a.dt.data.length;b=AC0(!b?1:b<<1);c=P(Hk,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dt.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.ll&f;i=h.gP;h.gP=d[b];d[b]=h;h=i;}e=e+1|0;}a.dt=c;Vh(a);}
function Vl(){var a=this;B.call(a);a.cS=null;a.jJ=null;a.q0=null;}
function M8(a,b){var c;if(!(b instanceof LK)){Bi(a.cS,3);Wt(a,b);Bi(a.cS,b.g2);}else{c=b;Bi(a.cS,5);Wt(a,c);Bi(a.cS,c.g2);Bi(a.cS,c.mS);b=c.ju;Bi(a.cS,b.k);c=new MV;c.n_=a;DY(b,c);}}
function Wt(a,b){var c;c=b.dT.ha;Ga(a.cS,a.jJ.I,H(c));Bi(a.cS,b.dT.c6);Mk(a,b.jj);CX(a.jJ,c);}
function Mk(a,b){if(b===null)Bi(a.cS,(-1));else Bi(a.cS,(B_(a.q0,b)).be);}
function Vd(){var a=this;B.call(a);a.cv=null;a.kS=null;a.pN=null;}
function Gz(a,b){var c,d,e;if(b instanceof FT){c=b;Bi(a.cv,9);PQ(a,c.gl);}else if(b instanceof Ib){d=b;Bi(a.cv,3);Qt(a,d);Bi(a.cv,d.nh);PQ(a,d.gz);}else if(b instanceof Iv){e=b;Bi(a.cv,4);Gz(a,e.hs);Gz(a,e.gC);}else if(b===null)Bi(a.cv,(-1));else{Bi(a.cv,5);Qt(a,b);Bi(a.cv,b.sF);}}
function Qt(a,b){var c;c=b.eK.ha;Ga(a.cv,a.kS.I,H(c));Bi(a.cv,b.eK.c6);b=b.fe;if(b===null)Bi(a.cv,(-1));else Bi(a.cv,(B_(a.pN,b)).be);CX(a.kS,c);}
function PQ(a,b){var c;Bi(a.cv,b.k);c=new XB;c.og=a;DY(b,c);}
function S1(){B.call(this);this.ql=null;}
function AOB(a,b){var c;c=a.ql;C8(c,b);Jk(c,null);W_(c);}
var ABv=F();
function AMN(b,c){return {oldModelUrl:b,newModelUrl:c};}
function TZ(){var a=this;B.call(a);a.rQ=0;a.wq=0;}
function Hf(a,b){return PX(a.rQ,b,a.wq);}
var D1=F(Bt);
function NA(){var a=this;B.call(a);a.m3=null;a.qD=null;a.ux=0;a.vV=0;}
function Lh(a,b){return EI(a.qD)<b?0:1;}
function Tq(){B.call(this);this.uF=null;}
function AK4(a,b){GS(a.uF,b);}
function Tr(){B.call(this);this.th=null;}
function AMP(a,b){GS(a.th,b);}
var ACX=F();
function T2(b,c,d,e){var f,g;f=b.next();g=new WU;g.no=b;g.nn=c;g.nq=d;g.np=e;f.then(Bn(g,"f"),Bn(d,"f"));}
function Yx(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ADt(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Fe()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new WR;f.rj=b;f.rk=d;d.addEventListener("change",Bn(f,"handleEvent"));d.click();}
function YG(b,c){var d;if(c.isFile?1:0)b.j(X3(c.file()));else{c=c.createReader();d=new WB;d.uI=b;c.readEntries(Bn(d,"f"));}}
function S6(){var a=this;B.call(a);a.bg=null;a.oC=null;a.hQ=null;a.my=null;a.jB=null;a.eR=null;}
function F$(a){return a.bg.bM.gQ;}
function XG(a){var b;b=new SK;b.vC=a;return b;}
function AAl(a){var b,c,d,e,f;b=P(DM,5);c=b.data;d=a.bg;BM(d);e=new Xo;e.sH=d;c[0]=CB(C(300),e);e=a.bg;BM(e);f=new Xj;f.ok=e;c[1]=CB(C(301),f);d=a.bg;BM(d);e=new Xk;e.pv=d;c[2]=CB(C(302),e);d=a.bg;BM(d);e=new Xl;e.vw=d;c[3]=CB(C(303),e);d=a.bg;BM(d);e=new Xm;e.m9=d;c[4]=CB(C(304),e);return GW(b);}
function I0(a,b,c){var d,e,f,g,h,i,j;a:{Du(a.eR.bS);d=a.bg.c;e=DT(d);f=FM(d);g=a.bg.cu;if(c===null)h=null;else{AS5();switch(AXh.data[c.gk]){case 1:h=LM(g,e,f);break a;case 2:h=QD(g,e,f);break a;default:}b=new Fn;X(b);L(b);}}c=a.bg;f=D2(c,b);e=GA(c.c.f,f.V,f.bd);g=Kw(c,e);if(h!==null){e=c.c;i=f.V;j=f.bd;f=new Sp;f.ne=c;f.nd=b;f.nf=g;h.lr(e,i,j,f,c.hN);}else{f=B_(c.c.f.cW,e);if(f!==null)HJ(c,f);else{f=B_(c.c.f.cL,e);if(f!==null&&!DF(f))Q2(c.eE,b,f,c,g);else Ka(c.eE,b,c);}}}
var YV=F(0);
var QH=F(0);
var Nr=F(0);
var GH=F();
function Si(){GH.call(this);this.tY=null;}
function Uh(a,b){var c,d,e;c=0;while(true){d=a.tY;if(d.ic===null)d.ic=BP(d.pT);if(!BQ(d.ic))e=0;else{c=b.cn(BS(d.ic));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Qx=F(0);
function TB(){B.call(this);this.IU=null;}
var AWd=null;function SM(b){return b===null?C(3):UW(b);}
function WL(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=d.c;f=Bz();g=c!==null?c.data.length:b.k;h=0;while(h<g){if(c===null){i=(Bs(b,h)).V;j=RT(EJ(BG(e.f,i)));k=SM(e.c_);}else{l=c.data;i=l[h].f2.e6;j=!BK(e.c_,l[h].hf)?C(3):RT(EJ(BG(e.f,i)));k=SM(l[h].hf);}if(H(j)>153){m=B9(j,0,150);j=new R;U(j);K(K(j,m),C(55));j=S(j);}if(H(k)>153){k=B9(k,0,150);m=new R;U(m);K(K(m,k),C(55));k=S(m);}n=D7(i+1|0);if(c!==null){l=c.data;o=null;p=l[h];}else{p=null;o=Bs(b,h);}if(c!==null){m=new WE;m.qr=d;m.qs=p;}else{m=new WF;m.vv=d;m.vu=o;}o
=new JN;o.sG=m;o.iD=n;o.iO=j;o.fM=k;Bw(f,o);h=h+1|0;}return Ho(f,AWd);}
function AC9(){AWd=P(JN,0);}
function Sq(){var a=this;B.call(a);a.tm=null;a.tk=null;a.to=0;a.tn=0;}
function Hk(){var a=this;F6.call(a);a.ll=0;a.gP=null;}
var GF=F(Bt);
var WW=F();
function AOp(a,b){Yx(b);}
function WV(){var a=this;B.call(a);a.qG=null;a.qF=null;}
function AGZ(a,b){var c,d,e,f,g,h,i;c=a.qG;d=a.qF;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new P_;i.oP=c;i.oO=g;h.then(Bn(i,"f"),Bn(d,"f"));e=e+1|0;}}
var Wd=F();
function AIG(a,b){Yx(b);}
function Wc(){var a=this;B.call(a);a.p4=null;a.p5=null;}
function AJt(a,b){var c,d,e,f,g;c=a.p4;d=a.p5;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=P(Bv,1);g.data[0]=Ce(b.name);T2(f,c,d,g);}
function Yp(){B.call(this);this.El=null;}
function WR(){var a=this;B.call(a);a.rj=null;a.rk=null;}
function AIs(a,b){var c,d,e,f,g,h;b=a.rj;c=a.rk;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new Mx;h.nb=b;h.na=g;$rt_globals.setTimeout(Bn(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=X3(d.item(f));g=new Mg;g.sL=b;g.sM=c;$rt_globals.setTimeout(Bn(g,"onTimer"),0);f=f+1|0;}}
function JN(){var a=this;B.call(a);a.sG=null;a.iD=null;a.iO=null;a.fM=null;}
function Jj(){var a=this;B.call(a);a.hf=null;a.f2=null;}
function L8(){var a=this;B.call(a);a.iC=0;a.jk=0;a.fG=0;a.e6=0;}
function WE(){var a=this;B.call(a);a.qr=null;a.qs=null;}
function AE6(a){R6(a.qr,a.qs);}
function WF(){var a=this;B.call(a);a.vv=null;a.vu=null;}
function AI$(a){HJ(a.vv,a.vu);}
function E1(){var a=this;B.call(a);a.f5=null;a.cf=null;a.ei=null;a.dR=null;a.fV=null;a.ij=null;a.tC=null;}
function ARD(a){var b=new E1();ABd(b,a);return b;}
function ABd(a,b){a.f5=b;a.cf=Bz();a.ei=Bz();a.dR=Bz();a.ij=Bz();a.fV=Bz();}
function W2(a){var b;b=a.f5;if(b!==null)b.cf.nT(a);}
function Xs(){B.call(this);this.pO=null;}
function AIx(a,b){b=b;Rj(a.pO,b);}
var Ki=F(E1);
var JO=F(E1);
function VI(){B.call(this);this.uy=null;}
function AFa(a,b){var c;b=b;c=a.uy;Bi(c.bk,(B_(c.eO,b)).be);}
function PM(){var a=this;B.call(a);a.im=null;a.je=null;a.pl=0;}
function OQ(){B.call(this);this.m4=null;}
function ALm(a,b){b=b;Sz(a.m4,b);}
function Qv(){var a=this;B.call(a);a.j_=0;a.qg=null;}
function ARt(a,b){var c,d,e;c=a.qg;b=b;d=c.qI;e=c.qH;d=b.a<=d&&e<=b.b?1:0;a.j_=d;return d?0:1;}
var Xp=F(D1);
var QV=F(Bt);
var VN=F(Bt);
function Pb(){B.call(this);this.rB=null;}
function AMK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.rB;d=CF(c[0]);e=(CF(c[1])).data[0];if(!TD(b.f)){c=b.f;if(c.b0==e){e=b.mX;f=Lr(d);DI(c.cW);DI(c.cL);Pr(c);while(f.ek>=f.gY.data.length?0:1){if(V(f)==(-1))continue;g=Xg(c,V(f));h=Lx(BG(c,g.V),g.bd);if(V(f)==(-1)){if(!e)continue;h.bX=0;h.bH=h.bH|4;continue;}i=Xg(c,V(f));j=V(f);k=V(f);Ed(c.cW,g,i);l=c.cL;m=Bz();if(B_(l,i)===null)Ed(l,i,m);Bw(B_(c.cL,i),g);h.bX=j;h.bH=k;}Ku(b);if(b.xo){n=JS(Eb(),b.uS);if(AR5(n,BL(100))){b=D_(b);c=new R;U(c);K(FX(K(K(c,b),
C(305)),n),C(37));$rt_globals.console.info($rt_ustr(S(c)));}}}}}
function ADR(){B.call(this);this.HV=null;}
function V$(){B.call(this);this.mr=null;}
var AWg=null;function S_(){var a=new V$();Y_(a);return a;}
function Y_(a){a.mr=Bz();}
function DE(a,b,c){ON(a,CB(b,c));}
function CB(b,c){return AE9(c,b);}
function Fi(a,b,c){KG(a,b,c,null);}
function KG(a,b,c,d){ON(a,ASK(null,b,c,d));}
function ON(a,b){Bw(a.mr,b);}
function HK(a){return GW(Ho(a.mr,AWg));}
function Yj(){AWg=P(DM,0);}
function Qm(){var a=this;B.call(a);a.nu=null;a.nv=null;}
function ARv(a){var b,c;b=a.nu;c=a.nv;Fp(b.ea,c);}
function Vk(){B.call(this);this.s1=null;}
function Qe(){var a=this;B.call(a);a.pT=null;a.ic=null;}
function EG(){var a=this;B.call(a);a.H=null;a.p=null;a.eX=0.0;}
function ARw(){var a=new EG();Lb(a);return a;}
function Lb(a){a.H=new Bj;a.p=new Bj;}
function ANS(a){}
function ABB(a){return Cg(0,0);}
function Rn(a,b,c,d){var e;if(!HS(a.H,b)){a.o8(b);Cw(a.H,b);}if(!HS(a.p,c)){a.oM(c);Cw(a.p,c);}e=a.eX;if(e!==d){a.eX=d;a.qv(e,d);}}
function Dk(a,b){return EV(b,a.H,a.p);}
function APW(a,b){var c,d,e,f;c=a.H;d=c.a;e=c.b;f=a.p;ASw();BB(b,d,e,f,AXi);}
function AKO(a,b){}
function AQs(a,b){}
function AN0(a,b,c){}
function AQF(a){}
function AJc(a,b,c,d){return 0;}
function AF0(a,b,c){return null;}
function ALE(a,b,c){return 0;}
function AP$(a,b){return 0;}
function ANO(a,b,c,d){return 0;}
function IL(){var a=this;EG.call(a);a.cN=null;a.bF=null;a.gu=null;}
function UT(a,b){a.bF.a=IR(a,b);}
function XK(a,b){a.bF.b=Ls(a,b);}
function Ls(a,b){return Z(0,Ba(b,a.cN.b-a.p.b|0));}
function IR(a,b){return Z(0,Ba(b,a.cN.a-a.p.a|0));}
function Qs(){var a=this;IL.call(a);a.bY=null;a.dy=null;a.gt=null;a.uf=null;a.dO=null;a.bU=null;a.dW=null;a.dg=null;a.c5=0;a.ex=0;a.v7=null;a.du=0;a.d7=0;a.fB=0;a.e1=0;a.eP=0;a.cp=0;a.dX=null;a.ir=null;a.qX=null;a.g3=null;}
function O9(a){a.c5=Co(2.0,a.bY.b1);}
function WP(a){return a.bU.data.length?0:1;}
function Tx(a){Bg(a.gt,0,0);}
function AP9(a){a.dg=C5(a.dg,null);Bg(a.gt,0,0);DI(a.g3);a.dX=null;a.bU=AWd;a.dW=null;a.du=0;a.d7=0;a.fB=0;Tb(a.dy);a.ir=null;}
function AHa(a,b,c){Pt(a);O9(a);a.dO=null;a.dX=null;a.ex=0;}
function Yd(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;c=LO(a.bY);if(WP(a))return;Jq(a);CM(c,a.dO);d=DL(a);e=X9(c,a.ex);f=Ba(H9(a.p.b,d),a.bU.data.length)+30|0;g=a.qX.vO;h=a.dW;if(h.data.length<f){a.dW=ALM(f,h,a.e1,a.eP,a.bU,a.dX,e,a.g3);Cw(a.gt,M5(a.dX));PN(a,a.bY.dl);}a.e1=Ba((a.bF.b+a.c5|0)/(DL(a)+a.c5|0)|0,a.bU.data.length-1|0);a.eP=Ba((((a.bF.b+a.dy.bp.b|0)-1|0)+a.c5|0)/(DL(a)+a.c5|0)|0,a.bU.data.length-1|0);if(!a.dW.data.length)return;i=0;j=a.e1;while(j<=a.eP){k=OO(a,j);if
(!(k!==null&&k.fx===a.bU.data[j])){l=a.dW.data;h=a.bU;k=a.dX;m=a.g3;i=j%l.length|0;if(l[i]!==null)Vj(k,l[i],m);l[i]=IP(h.data[j],k,e,m);i=1;}j=j+1|0;}if(i){Cw(a.gt,M5(a.dX));PN(a,a.bY.dl);}k=a.H;UA(b,k.a,k.b,a.p);n=g.t0;k=a.H;BB(b,k.a,k.b,a.p,n);k=a.dy.cs;o=k.a;p=k.b;q=Cm(a.bY,2.0);k=a.bY.dp;r=a.e1;j=o+q|0;while(r<=a.eP){m=OO(a,r);s=T(r,DL(a));i=r+1|0;t=s+T(i,a.c5)|0;s=j+a.du|0;u=s+a.d7|0;v=a.cp!=r?0:1;w=!v?n:g.qJ;x=!v?g.s2:g.h8;y=!v?g.nZ:g.h8;z=!v?g.pb:g.h8;ba=(p+t|0)-a.bF.b|0;if(a.bY.cE){Ew(b,j,ba,m.fO,m.ld,
a.dg,x,w);Ew(b,s,ba,m.gq,m.gJ,a.dg,y,w);Ew(b,u,ba,m.fQ,m.hm,a.dg,z,w);}else{Et(b,j,ba,m.fO,m.ld,a.dg,x,w,0.0);Et(b,s,ba,m.gq,m.gJ,a.dg,y,w,0.0);Et(b,u,ba,m.fQ,m.hm,a.dg,z,w,0.0);}s=m.fO.a;bb=j+s|0;Bg(k,Z(0,a.du-s|0),m.fO.b);BB(b,bb,ba,k,w);s=j+a.du|0;bb=m.gq.a;bc=s+bb|0;Bg(k,Z(0,a.d7-bb|0),m.gq.b);BB(b,bc,ba,k,w);s=m.fQ.a;bd=u+s|0;Bg(k,Z(0,(((a.dy.bp.a-s|0)-a.d7|0)-a.du|0)-q|0),m.fQ.b);BB(b,bd,ba,k,w);be=(o+a.p.a|0)-q|0;Bg(k,q,DL(a)+a.c5|0);BB(b,be,ba,k,n);r=i;}Lg(b);}
function PN(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.gt;c=E$(b,c.a+150|0,c.b,a.bY.cE);CM(c,a.dO);d=a.dO;e=d.ej;f=e-(e+d.dU)/16.0;g=a.dW.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.fx.iD;k=d.gJ;Ev(c,j,k.bq+a.ex,f+k.bG);j=d.fx.iO;d=d.hm;Ev(c,j,d.bq+a.ex,f+d.bG);}i=i+1|0;}a:{d=a.g3;if(d.cy>0){h=d.cw;i=0;b:while(true){g=d.bV.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cm;l=j.cD;k=k;l=l.ji;Ev(c,k,l.bq+a.ex,f+l.bG);j=j.ct;if(h!=d.cw)break b;}i=i+1|0;}b=new GF;X(b);L(b);}}if(a.dg===null)a.dg=GY(b);Ey(a.dg,
c);Is(c);}
function OO(a,b){var c;c=a.dW.data;return c[b%c.length|0];}
function ANh(a,b){Cw(a.dy.bp,b);}
function AOU(a,b){Cw(a.dy.cs,b);}
function Pa(a){var b,c;Jq(a);b=DL(a);c=a.bU.data.length;b=T(b,c)+T(a.c5,c+1|0)|0;Bg(a.cN,a.p.a,b);}
function Pt(a){var b,c,d,e,f,g,h,i,j;b=LO(a.bY);if(WP(a))return;Jq(a);CM(b,a.dO);c=X9(b,a.ex);d=a.bU.data;e=d.length;f=0;while(f<e){g=d[f];h=HB(c,g.fM);i=HB(c,g.iD);j=HB(c,g.iO);a.du=Z(a.du,h);a.d7=Z(a.d7,i);a.fB=Z(a.fB,j);f=f+1|0;}}
function Vi(a,b){I1(a.ir);b.sG.s();}
function Sj(a,b){var c,d,e;if(!a.dW.data.length)return (-1);c=DL(a);d=(b.b-a.H.b|0)+a.bF.b|0;e=a.c5;e=(d+e|0)/(c+e|0)|0;if(e<a.bU.data.length)return e;return (-1);}
function DL(a){return Fx(a.dO);}
function Jq(a){var b;if(a.dO===null){b=Im(a.bY,a.uf);a.dO=b;a.dX=AFi(Fx(b));a.ex=DD(a.dO.l$);}}
function APc(a,b){var c,d,e;a:{switch(b.bO){case 13:Vi(a,a.bU.data[a.cp]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cp=a.e1;b=a.gu;c=a.bF;Ip(b,c.a,c.b-(a.p.b/2|0)|0);return 0;case 34:a.cp=a.eP;b=a.gu;c=a.bF;Ip(b,c.a,c.b+(a.p.b/2|0)|0);return 0;case 35:case 39:a.cp=a.bU.data.length-1|0;break a;case 36:case 37:a.cp=0;break a;case 38:d=a.cp;e=a.bU.data.length;a.cp=((d+e
|0)-1|0)%e|0;break a;case 40:a.cp=(a.cp+1|0)%a.bU.data.length|0;break a;default:break a;}I1(a.ir);return 0;}e=a.cp;if(e<=a.e1)Ip(a.gu,a.bF.a,T(e,DL(a))+T(a.cp,a.c5)|0);else if(e>=a.eP)Ip(a.gu,a.bF.a,(T(e+1|0,DL(a))+T(a.cp+2|0,a.c5)|0)-a.p.b|0);return 0;}
function Qf(){var a=this;B.call(a);a.mY=null;a.mZ=null;}
function I1(a){var b,c;b=a.mY;c=a.mZ;Fp(b.ea,c);S4(b);}
function PL(){var a=this;EG.call(a);a.mz=null;a.o$=null;a.t4=null;a.br=null;a.cP=null;a.cX=null;a.u3=0.0;a.vP=null;a.vL=null;}
function AOQ(a){var b;b=a.br;b.gu=null;a.br=C5(b,null);}
function AIF(a,b,c,d){Rn(a,b,c,d);Rn(a.br,b,c,d);if(d!==0.0){Pa(a.br);b=a.br;c=b.bF;c.a=IR(b,c.a);c=b.bF;c.b=Ls(b,c.b);if(Vw(a))H4(a);else a.cX=null;if(Ol(a))G7(a);else a.cP=null;}}
function Ip(a,b,c){var d;d=a.br;d.bF.a=IR(d,b);d.bF.b=Ls(d,c);if(Vw(a))H4(a);if(Ol(a))G7(a);}
function Ol(a){var b;b=a.p.b;return b>0&&a.br.cN.b>b?1:0;}
function Vw(a){var b;b=a.p.a;return b>0&&a.br.cN.a>b?1:0;}
function H4(a){var b,c,d,e,f,g;b=a.cX;if(b===null)b=UZ();a.cX=b;QQ(a,b);c=a.cX;b=a.br;d=b.bF.a;e=a.H;f=e.a;g=a.p;QI(c,d,f,g.a,b.cN.a,e.b+g.b|0,LQ(a));}
function G7(a){var b,c,d,e,f,g;b=a.cP;if(b===null)b=UZ();a.cP=b;QQ(a,b);c=a.cP;b=a.br;d=b.bF.b;e=a.H;f=e.b;g=a.p;WZ(c,d,f,g.b,b.cN.b,e.a+g.a|0,LQ(a));}
function LQ(a){return Co(a.u3,a.eX);}
function QQ(a,b){var c,d;c=a.vP;d=a.vL;if(!(c!==null&&d!==null?(JU(b.hZ,c)&&JU(b.h0,d)?1:0):0))Gy(b,c,d);}
function AN6(a,b){var c;Yd(a.br,b);if(!(a.cP===null&&a.cX===null)){Dh(b,1);c=a.cP;if(c!==null)HD(c,b);c=a.cX;if(c!==null)HD(c,b);c=a.cP;if(c!==null)HM(c,b);c=a.cX;if(c!==null)HM(c,b);Dh(b,0);}}
function T0(a,b){var c,d;a:{b:{c=a.cP;if(!(c!==null&&Hq(c,b))){c=a.cX;if(c===null)break b;if(!Hq(c,b))break b;}d=1;break a;}d=0;}return d;}
function APo(a,b,c,d){var e;if(!T0(a,b.n)){e=a.br;if(d==1){c=Sj(e,b.n);if(c>=0)Vi(e,e.bU.data[c]);}}return 1;}
function AOT(a,b,c){var d;d=a.cP;if(d!==null){d=HQ(d,b.n,a.o$,1);if(d!==null)return d;}d=a.cX;if(d!==null){d=HQ(d,b.n,a.t4,0);if(d!==null)return d;}d=a.br;if(!HC(d.dy,b.n)&&!JL(d.dy)){b=d.v7;if(b!==null)I1(b);}return null;}
function AL5(a,b,c){return T0(a,b.n)?1:0;}
function ALN(a,b){var c,d,e;c=a.cP;d=c!==null&&H5(c,b.n,a.mz)?1:0;c=a.cX;e=c!==null&&H5(c,b.n,a.mz)?1:0;a:{if(!d&&!e){c=a.br;d=Sj(c,b.n);if(d>=0)c.cp=d;if(!(HC(c.dy,c.H)&&Fy(c.bY.di)?1:0)){d=0;break a;}}d=1;}return d;}
function AHO(a,b,c,d){var e,f;if(!Dk(a,b.n))return 0;e=Co(d*0.25,a.eX);f=Co(c*0.25,a.eX);if(b.bB){f=f+e|0;e=0;}if(a.cP!==null&&e){b=a.br;XK(b,b.bF.b+e|0);G7(a);}if(a.cX!==null&&f){b=a.br;UT(b,b.bF.a+f|0);H4(a);}return 1;}
function AQN(a){var b,c;b=LQ(a);c=ABB(a.br);c.a=Z(c.a,b);c.b=Z(c.b,b);return c;}
function Gr(){var a=this;B.call(a);a.dJ=0;a.dV=0;a.k6=null;a.mc=0;a.fr=null;}
function APd(a,b,c,d,e,f){var g=new Gr();AKy(g,a,b,c,d,e,f);return g;}
function AKy(a,b,c,d,e,f,g){a.dJ=b;a.dV=c;a.k6=Cg(f,g);a.mc=d;a.fr=e;}
var Pp=F();
var AXj=null;function K7(b,c,d){QL(b,c,d,0);}
function QL(b,c,d,e){N0(b,c,d,null,null,e);}
function N0(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;h=Lr(c);i=V(h);j=V(h);k=V(h);l=Cb(b);m=Bx(i+1|0);n=!g?P(CQ,i):Zp(b.v,i);c=m.data;b.v=n;o=0;while(o<i){if(g&&o<l){p=4*V(h)|0;h.ek=h.ek+p|0;c[o+1|0]=(c[o]+(BG(b,o)).z|0)+1|0;}else{b.v.data[o]=Dq(Qg(h,d,0));c[o+1|0]=(c[o]+(BG(b,o)).z|0)+1|0;}o=o+1|0;}if(j)b.cJ=ACr(ADA(h));b.g4=m;DI(b.cW);DI(b.cL);q=b.cW;g=0;while(g<k){Ed(q,Dp(V(h),V(h)),Dp(V(h),V(h)));g=g+1|0;}r=b.cW;s=b.cL;r=N4(UE(r));while(EP(r)){t=W0(r);q=t.cm;t=t.cD;BM(AXj);u=B_(s,t);if(u===null){u
=Bz();Ed(s,t,u);}Bw(u,q);}if(s.kv===null){r=new O_;r.v4=s;s.kv=r;}r=s.kv;q=new Rb;Ko(q,r.v4);while(EP(q)){KU(q);r=q.fT.cD;t=AUP;c=P(B,r.k);d=c.data;Ho(r,c);ZP(c,t);g=0;v=d.length;while(g<v){t=d[g];IG(r,g);r.cj.data[g]=t;g=g+1|0;}}Qy(h);if(e!==null&&f!==null){r=ALw(e,f);Oa(r);b.dY=AGv(r.kW,r.hq);b.cJ=ACr(r.lC);}}
function Ms(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Lr(c);i=V(h);j=V(h);k=V(h)!=1?0:1;l=V(h);m=V(h);n=Wq(b,i);o=Wq(b,j);p=(Hw(BG(b,n.a),n.b)).data[0].l;g=(Hw(BG(b,o.a),o.b)).data[1].l;q=0;r=l-1|0;while(q<l){s=Qg(h,d,i);if(!q)s=Ve(p,s);if(q==r)s=Ve(s,g);t=n.a+q|0;u=Dq(s);c=b.v.data;v=c[t];c[t]=u;if(!k&&G5(v)==G5(u)){w=0;while(w<G5(v)){x=v.l.data[w];o=u.l.data[w];t=x.bX;if(t!=5&&t&&!o.bX){o.bX=t;o.bH=x.bH;}w=w+1|0;}}q=q+1|0;}if(k){if(m){x=ADA(h);v=Jc(i,j,
(-1));NE(b.cJ,v,x);}else if(e!==null&&f!==null){u=ALw(e,f);Oa(u);v=Jc(i,j,(-1));NE(b.cJ,v,u.lC);b.dY.eb=u.hq;}}Qy(h);}
function Qg(b,c,d){var e,f,g,h,i,j,k,l;e=V(b);f=P(B$,e);g=f.data;h=0;while(h<e){i=V(b);j=V(b);k=V(b);l=V(b);g[h]=Dz(DV(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function ACc(){AXj=new WA;}
var OX=F(0);
var Eq=F(EA);
function O$(){Eq.call(this);this.gL=null;}
function So(a){var b;b=new SP;Ko(b,a.gL);return b;}
function Mb(){B.call(this);this.vT=null;}
function AHH(a,b){b=b;M8(a.vT,b);}
function UK(){B.call(this);this.tG=null;}
function AKF(a,b){b=b;Gz(a.tG,b);}
function ID(){var a=this;B.call(a);a.dT=null;a.jj=null;a.g2=0;}
function AS$(a,b,c){var d=new ID();AB$(d,a,b,c);return d;}
function AB$(a,b,c,d){a.dT=b;a.jj=c;a.g2=d;}
function ABm(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return BK(a.dT,c.dT)&&BK(a.jj,c.jj)&&BK(Cs(a.g2),Cs(c.g2))?1:0;}return 0;}
function LK(){var a=this;ID.call(a);a.ju=null;a.mS=0;}
function AFI(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){if(!ABm(a,b))return 0;c=b;return BK(a.ju,c.ju);}return 0;}
function Em(){var a=this;B.call(a);a.eK=null;a.fe=null;a.sF=0;}
function ARZ(a,b,c){var d=new Em();KJ(d,a,b,c);return d;}
function KJ(a,b,c,d){a.eK=b;a.fe=c;a.sF=d;}
function YI(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return BK(a.eK,c.eK)&&BK(a.fe,c.fe)?1:0;}return 0;}
function FT(){Em.call(this);this.gl=null;}
function Ib(){var a=this;Em.call(a);a.gz=null;a.nh=0;}
function AQd(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){if(!YI(a,b))return 0;c=b;return BK(a.gz,c.gz);}return 0;}
function Iv(){var a=this;Em.call(a);a.hs=null;a.gC=null;}
function AES(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return BK(a.hs,c.hs)&&BK(a.gC,c.gC)?1:0;}return 0;}
var YT=F();
function JE(){return {isCancellationRequested:false};}
function Ml(){var a=this;B.call(a);a.uh=null;a.ug=null;}
function AOu(a,b){V6(b,a.uh,a.ug);}
var ABe=F();
function LT(b,c,d){var e;if(!("then" in b?1:0))c.f(b);else{e=new SW;e.wd=d;b.then(Bn(c,"f"),Bn(e,"f"));}}
function QR(){var a=this;B.call(a);a.sZ=null;a.sY=null;}
function AHA(a,b){V6(b,a.sZ,a.sY);}
function ZZ(){var a=this;GH.call(a);a.GR=null;a.Je=0;a.Ht=0;a.EI=0;}
function RR(){var a=this;B.call(a);a.ny=null;a.nz=null;}
function AJj(a){var b,c;b=a.ny;c=a.nz;SE();I0(b,c,AXk);}
function RS(){var a=this;B.call(a);a.q2=null;a.q3=null;}
function AGk(a){var b,c;b=a.q2;c=a.q3;SE();I0(b,c,AXl);}
function RP(){var a=this;B.call(a);a.uU=null;a.uT=null;}
function AE7(a){I0(a.uU,a.uT,null);}
function RQ(){var a=this;B.call(a);a.m6=null;a.m7=null;}
function AJe(a){var b,c,d,e,f,g,h,i,j;b=a.m6;c=a.m7;d=DT(b.bg.c);e=FM(b.bg.c);d=TN(b.bg.cu,d,e);Du(b.eR.bS);b=b.bg;e=D2(b,c);if(d!==null){f=b.c;g=e.V;h=e.bd;e=new TA;e.ru=b;e.rt=c;b=b.hN;c=d.uE;d=E7(f);f=HE(h,g);i=AKq(!!1);j=JE();c=c.provideReferences(d,f,i,j);d=new PO;d.qj=e;d.qi=b;LT(c,d,b);}}
function QZ(){B.call(this);this.px=null;}
function ANH(a){var b;b=a.px;Du(b.eR.bS);Gx(b.bg,XG(b),0);}
function QY(){B.call(this);this.vm=null;}
function AMe(a){var b;b=a.vm;Du(b.eR.bS);Gx(b.bg,XG(b),1);}
function QX(){B.call(this);this.sP=null;}
function ARj(a){var b,c,d,e;b=a.sP;Du(b.eR.bS);F$(b);b=b.bg;BM(b);c=new XJ;c.p6=b;b=Zj(C(306));if(!La()){c=new Bt;Bp(c,C(307));Lz(b,c);}else{d=$rt_globals.navigator.clipboard.readText();e=new QW;e.nH=c;b=ADV(b);d.then(Bn(e,"f"),Bn(b,"f"));}}
function O0(){var a=this;B.call(a);a.nw=null;a.nx=null;}
function AMa(a){var b,c;b=a.nw;c=a.nx;b=b.bg.c;b.hj=c;In(b);}
var Qd=F(0);
var AWe=null;function AB0(){AWe=new T3;}
function PV(){B.call(this);this.wb=null;}
function AF$(a){var b,c,d;b=a.wb;Du(b.eR.bS);c=F$(b);b=b.bg;BM(b);d=new Rr;d.s9=b;VS(c,d);}
function H1(){var a=this;B.call(a);a.ld=null;a.gJ=null;a.hm=null;a.fO=null;a.gq=null;a.fQ=null;a.fx=null;}
function ALM(b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r;a:{j=c.data;k=P(H1,b);l=j.length;if(l<=0){if(b<=0)break a;m=k.data;while(true){if(d>e)break a;m[d%m.length|0]=IP(f.data[d],g,h,i);d=d+1|0;}}m=k.data;while(d<=e){n=f.data[d];o=d%m.length|0;p=d%l|0;q=j[p];if(q!==null&&q.fx!==n){Vj(g,q,i);m[o]=IP(n,g,h,i);j[p]=null;}else if(q!==null&&m[o]===null){m[o]=q;j[p]=null;}else m[o]=IP(n,g,h,i);d=d+1|0;}}d=0;while(d<l){r=j[d];if(r!==null){Vj(g,r,i);j[d]=null;}d=d+1|0;}return k;}
function IP(b,c,d,e){var f,g,h;f=new H1;f.fO=new Bj;f.gq=new Bj;f.fQ=new Bj;f.fx=b;g=B_(e,b.fM);if(g!==null)g.hl=g.hl+1|0;else{g=new Vq;h=LY(c,b.fM,d);g.hl=1;g.ji=h;Ed(e,b.fM,g);}e=g.ji;f.ld=e;Bg(f.fO,e.bc|0,e.bZ|0);e=LY(c,b.iD,d);f.gJ=e;Bg(f.gq,e.bc|0,e.bZ|0);b=LY(c,b.iO,d);f.hm=b;Bg(f.fQ,b.bc|0,b.bZ|0);return f;}
function Vj(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.fx.fM;f=B_(d,e);g=f.hl-1|0;f.hl=g;if(!g){a:{h=0;i=null;if(e===null){j=d.bV.data[0];while(j!==null){if(j.cm===null)break a;e=j.ct;i=j;j=e;}}else{k=Gj(e);l=d.bV.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.i1==k&&Yv(e,j.cm))){m=j.ct;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.ct=j.ct;else d.bV.data[h]=j.ct;d.cw=d.cw+1|0;d.cy=d.cy-1|0;}Kz(b,f.ji);}Kz(b,c.gJ);Kz(b,c.hm);}
var Ro=F(0);
function X9(b,c){var d;d=new Vr;d.o6=b;d.o5=c;return d;}
function Yi(){var a=this;B.call(a);a.fA=null;a.gs=0;a.iS=0;a.fY=0;}
function AFi(a){var b=new Yi();AHP(b,a);return b;}
function AHP(a,b){a.fA=Bz();a.fY=0;a.iS=2048;a.gs=b;}
function LY(a,b,c){var d,e,f,g,h,i,j;d=HB(c,b);e=a.iS;if(d>e){c=new Bt;f=new R;U(f);BX(Bl(K(Bl(K(f,C(308)),d),C(309)),e),41);Bp(c,S(f));L(c);}if(!a.gs){b=new BF;Bp(b,C(310));L(b);}a:{b=new B5;if(d){b:{c=a.fA;if(c.k>0){c=BP(c);g=d;while(true){if(!BQ(c))break b;f=BS(c);if(f.bc>=g)break;}Cc(b,f.bq,f.bG,g,a.gs);f.bq=f.bq+g;h=f.bc-g;f.bc=h;if(h===0.0)Vn(a.fA,f);break a;}}g=a.fY;i=d;Cc(b,0.0,g,i,a.gs);c=a.fA;f=new B5;h=a.fY;g=a.iS-d|0;j=a.gs;f.bq=i;f.bG=h;f.bc=g;f.bZ=j;Bw(c,f);a.fY=a.fY+a.gs|0;}}return b;}
function Kz(a,b){var c,d,e,f,g,h,i;a:{c=new B5;c.bq=b.bq;c.bG=b.bG;c.bc=b.bc;c.bZ=b.bZ;b=a.fA;if(b.k>0){d=BP(b);while(true){if(!BQ(d))break a;e=BS(d);if(e.bG===c.bG){f=e.bq;g=e.bc;h=f+g;i=c.bq;if(h===i){c.bq=f;c.bc=c.bc+g;Q4(d);}else{h=c.bc;if(i+h===f){c.bc=h+g;Q4(d);}}}}}}Bw(a.fA,c);}
function M5(a){return Cg(a.iS,a.fY);}
function Vb(){var a=this;EG.call(a);a.e5=null;a.gM=null;a.h5=null;a.eG=null;a.jb=0.0;a.gS=0;a.h_=0;a.cR=null;a.h2=null;}
function JW(a){var b;b=a.p;return b.a&&b.b?0:1;}
function VT(a){var b,c;a:{if(a.h5!==null){b=a.gM;if(b!==null&&!Eu(b)){c=0;break a;}}c=1;}return c;}
function Pe(a,b){a.p.b=b;}
function Py(a,b,c,d,e){var f,g;f=a.e5.dp;Bg(f,d,a.p.b);g=a.H;BB(b,g.a+c|0,g.b,f,e);}
function US(a){if(a.eG===null)a.eG=Im(a.e5,a.h5);}
var WQ=F(Ep);
var AXm=null;function ABS(){AXm=E($rt_floatcls());}
var Fd=F();
var AXn=null;var AXo=null;var AXp=null;var AXq=null;var AUw=null;function AAH(){AXn=FJ([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AXo=AGb([BL(1),BL(10),BL(100),BL(1000),BL(10000),BL(100000),BL(1000000),BL(10000000),BL(100000000),BL(1000000000),Dn(1410065408, 2),Dn(1215752192, 23),Dn(3567587328, 232),Dn(1316134912, 2328),Dn(276447232, 23283),Dn(2764472320, 232830),Dn(1874919424, 2328306),Dn(1569325056, 23283064),Dn(2808348672, 232830643)]);AXp=AGb([BL(1),BL(10),BL(100),BL(10000),BL(100000000),
Dn(1874919424, 2328306)]);AXq=new TI;AUw=new U0;}
var Hm=F();
var AXr=0;var AXs=null;var AXt=null;function ABh(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.oh=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.kF=0;c.ki=0;return;}if(f)d=e|8388608;else{d=e<<1;while(AHd(XS(BL(d),BL(8388608)),ACt)){d=d<<1;f=f+(-1)|0;}}g=ABs(AXt,f);if(g<0)g= -g|0;h=AXt.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Hh(d,AXs.data[e],i);if(j<AXr){while($rt_ucmp(j,AXr)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=AXt.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Hh(d,
AXs.data[e],i);}e=d<<1;d=e+1|0;h=AXs.data;f=g+1|0;k=h[f];l=i-1|0;m=Hh(d,k,l);n=Hh(e-1|0,AXs.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?T($rt_udiv(j,o),o):q<0?T($rt_udiv(j,k),k)+k|0:T($rt_udiv((j+(k/2|0)|0),k),k);if(HT(BL(d),BL(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.kF=d;c.ki=g-50|0;}
function Hh(b,c,d){return ZK(ATu(ALI(XS(BL(b),Dn(4294967295, 0)),XS(BL(c),Dn(4294967295, 0))),32-d|0));}
function ZU(){AXr=$rt_udiv((-1),10);AXs=FJ([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);AXt=FJ([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function U0(){var a=this;B.call(a);a.kF=0;a.ki=0;a.oh=0;}
function SS(){B.call(this);this.oB=null;}
function APs(a,b,c){var d,e;c=a.oB;d=c.c.f;e=b.be;b=c.eC;Sb(d.v.data[e],0,b);}
function ABX(){var a=this;B.call(a);a.gY=null;a.ek=0;}
function Lr(a){var b=new ABX();AEm(b,a);return b;}
function AEm(a,b){a.gY=b;a.ek=0;}
function V(a){var b,c;b=a.gY.data;c=a.ek;a.ek=c+1|0;return b[c];}
function Qy(a){var b,c,d,e;if(a.ek!=a.gY.data.length){b=Ec();c=a.gY.data.length;d=a.ek;e=new R;U(e);K(Bl(K(Bl(K(e,C(297)),c),C(311)),d),C(312));Ct(b,S(e));}}
var V5=F(BV);
function DM(){var a=this;B.call(a);a.kg=null;a.gU=null;a.dZ=null;a.dk=null;a.iK=null;a.lp=null;a.gF=0;a.lj=null;}
function AE9(a,b){var c=new DM();X6(c,a,b);return c;}
function ASK(a,b,c,d){var e=new DM();AAv(e,a,b,c,d);return e;}
function X6(a,b,c){AAv(a,b,c,null,null);}
function AAv(a,b,c,d,e){a.gU=new B5;a.dZ=new Bj;a.dk=new Bj;a.lj=c;a.lp=e;a.kg=b;a.iK=d;}
function UB(a){return a.iK===null?0:1;}
function M_(){B.call(this);this.o9=null;}
function AJQ(a){LV(a.o9);}
function Na(){B.call(this);this.qc=null;}
function APz(a){FU(a.qc);}
function M$(){B.call(this);this.v$=null;}
function AD4(a){J4(a.v$);}
function Wb(){B.call(this);this.qR=null;}
function AKM(a){a.qR.vN();}
function Wa(){B.call(this);this.ur=null;}
function AN4(a){a.ur.v_();}
function Rk(){B.call(this);this.tu=null;}
function AKi(a){var b,c,d,e,f,g,h,i;b=a.tu;c=(b.oC.ee()).data;d=P(DM,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new Tu;i.mP=b;i.mQ=h;e[f]=AE9(i,h);f=f+1|0;}return d;}
function Sr(){B.call(this);this.oH=null;}
function AJr(a){a.oH.my.id(0);}
function Ss(){B.call(this);this.pX=null;}
function APe(a){a.pX.my.id(1);}
function Xo(){B.call(this);this.sH=null;}
function AEi(a){var b,c,d,e,f;b=a.sH.c.f;c=b.b0;d=new R;U(d);Bl(K(d,C(313)),c);$rt_globals.console.info($rt_ustr(S(d)));c=b.iQ;d=new R;U(d);Bl(K(d,C(314)),c);$rt_globals.console.info($rt_ustr(S(d)));d=b.cJ;e=G3(Dg(b));Wj(d,0,d.cT,e);b=FL();f=b.kj;f.data[0]=10;N7(b,f,0,1);}
function Xj(){B.call(this);this.ok=null;}
function AJu(a){Rt(a.ok);}
function Xk(){B.call(this);this.pv=null;}
function AQD(a){SY(a.pv);}
function Xl(){B.call(this);this.vw=null;}
function AK2(a){LD(a.vw.c);}
function Xm(){B.call(this);this.m9=null;}
function AIS(a){W_(a.m9);}
var KK=F(0);
function WM(){var a=this;B.call(a);a.pm=null;a.pn=null;a.po=null;}
function Og(){B.call(this);this.qV=null;}
function AEQ(a,b){var c,d;c=a.qV;d=Hf(b,c.br.cN.b-c.p.b|0);XK(c.br,d);G7(c);}
function Of(){B.call(this);this.r$=null;}
function AFb(a,b){var c,d;c=a.r$;d=Hf(b,c.br.cN.a-c.p.a|0);UT(c.br,d);H4(c);}
var R2=F(Ep);
var AXu=null;function Lp(b,c){return Long_udiv(b, c);}
function Yr(b,c){return Long_urem(b, c);}
function HT(b,c){return Long_ucompare(b, c);}
function AAf(){AXu=E($rt_longcls());}
function UC(){B.call(this);this.qL=null;}
function AQ8(a,b,c){FY(BG(a.qL.c.f,b.be),0,H(c));}
var WA=F();
var EK=F();
var AXv=null;var AXw=null;var AUU=null;var AXx=null;var AXy=null;var AXz=null;function ABg(){AXv=new U5;AXw=new U3;AUU=new U4;AXx=new U1;AXy=new U2;AXz=new XH;}
function YC(){var a=this;B.call(a);a.kW=null;a.lC=null;a.hq=null;a.cb=null;a.j2=null;a.kG=null;a.gD=null;a.lB=null;a.lt=null;}
function ALw(a,b){var c=new YC();APQ(c,a,b);return c;}
function APQ(a,b,c){a.cb=Lr(b);a.j2=c;}
function Oa(a){var b,c,d,e,f,g,h,i;b=V(a.cb);c=new Kn;PK(c);a.hq=c;a.gD=Bz();d=0;while(d<b){e=V(a.cb);f=V(a.cb);g=DV(a.j2,e,f);Ed(a.hq,g,Bz());Bw(a.gD,g);d=d+1|0;}c=N4(UE(a.hq));while(EP(c)){Gm((W0(c)).cD,Ne(a));}d=V(a.cb);if(d==(-1))a.kW=null;else{a.kG=P(E1,d);c=new MB;h=a.cb;i=a.j2;g=a.gD;c.c4=h;c.rF=i;c.qQ=g;a.lB=c;c=new Q_;c.dH=h;c.uz=i;c.u2=g;a.lt=c;a.kW=QN(a,null);}if(V(a.cb)!=(-1))a.lC=Q8(a.cb,a.kG);}
function QN(a,b){var c,d,e,f,g,h,i,j,k;c=V(a.cb);d=V(a.cb);e=a.lB;f=V(e.c4);g=Bz();h=0;while(h<f){Bw(g,MF(e));h=h+1|0;}a:{switch(d){case -1:i=new Ki;i.f5=b;b=AUU;i.cf=b;i.ei=b;i.dR=b;i.ij=b;i.fV=b;break a;case 0:i=ARD(b);break a;case 1:i=new JO;ABd(i,b);Gm(i.dR,g);break a;default:}b=new Dm;i=new R;U(i);Bl(K(i,C(315)),d);Bp(b,S(i));L(b);}i.dR=g;b=a.lt;d=V(b.dH);e=Bz();j=0;while(j<d){Bw(e,FB(b));j=j+1|0;}i.ei=e;i.ij=Ne(a);d=V(a.cb);b=Bz();j=0;while(j<d){e=MF(a.lB);g=FB(a.lt);f=V(a.cb);k=new PM;k.im=e;k.je=g;k.pl
=f;Bw(b,k);j=j+1|0;}i.fV=b;j=V(a.cb);i.tC=j==(-1)?null:Bs(a.gD,j);d=V(a.cb);b=Bz();j=0;while(j<d){Bw(b,QN(a,i));j=j+1|0;}i.cf=b;a.kG.data[c]=i;return i;}
function Ne(a){var b,c,d,e;b=V(a.cb);c=Bz();d=0;while(d<b){e=V(a.cb);Bw(c,Bs(a.gD,e));d=d+1|0;}return c;}
function P_(){var a=this;B.call(a);a.oP=null;a.oO=null;}
function AG_(a,b){a.oP.j(ABu(a.oO,b));}
function ADr(){var a=this;B.call(a);a.ha=null;a.c6=0;}
function AIu(a,b){var c=new ADr();AEb(c,a,b);return c;}
function AEb(a,b,c){a.ha=b;a.c6=c;}
function AMf(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return a.c6==c.c6&&BK(a.ha,c.ha)?1:0;}return 0;}
function MV(){B.call(this);this.n_=null;}
function AKC(a,b){b=b;Mk(a.n_,b);}
function XB(){B.call(this);this.og=null;}
function ARp(a,b){b=b;Gz(a.og,b);}
var Ik=F(0);
function Mx(){var a=this;B.call(a);a.nb=null;a.na=null;}
function AJx(a){YG(a.nb,a.na);}
function Mg(){var a=this;B.call(a);a.sL=null;a.sM=null;}
function AD8(a){a.sL.j(a.sM);}
function SW(){B.call(this);this.wd=null;}
function AJb(a,b){Li(a.wd,$rt_str(b.message));}
function Vp(){B.call(this);this.rY=null;}
function AQ0(a){return a.rY;}
var T3=F();
var TI=F();
function WU(){var a=this;B.call(a);a.no=null;a.nn=null;a.nq=null;a.np=null;}
function AIY(a,b){var c,d,e,f,g,h,i;c=a.no;d=a.nn;e=a.nq;f=a.np;if(!(b.done?1:0)){T2(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new TL;c.p8=d;c.p9=g;c.p$=f;b.then(Bn(c,"f"),Bn(e,"f"));}else{h=f.data;c=g.values();b=Ce(g.name);i=h.length;f=C3(f,i+1|0);f.data[i]=b;T2(c,d,e,f);}}}
var JH=F(Eq);
var U5=F(JH);
var KZ=F(DA);
var U3=F(KZ);
var Ly=F(El);
function AGR(a){var b;b=new D1;X(b);L(b);}
function ALh(a,b){var c;c=new D1;X(c);L(c);}
function AJ2(a,b){b=new D1;X(b);L(b);}
var U4=F(Ly);
function ALo(a,b){var c;c=new BV;X(c);L(c);}
function AKu(a){return 0;}
function AHn(a){return AXx;}
function AEZ(a){return 1;}
var U1=F();
function AEH(a){return 0;}
function AMJ(a){var b;b=new L3;X(b);L(b);}
function AOi(a){var b;b=new Dm;X(b);L(b);}
var Pl=F(0);
var U2=F();
var XH=F();
function EF(){var a=this;B.call(a);a.iy=0;a.sO=0;a.hv=null;a.fT=null;a.qk=null;a.i$=null;}
function AXA(a){var b=new EF();Ko(b,a);return b;}
function Ko(a,b){a.i$=b;a.sO=b.cw;a.hv=null;}
function EP(a){var b,c;if(a.hv!==null)return 1;while(true){b=a.iy;c=a.i$.bV.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.iy=b+1|0;}return 0;}
function Zy(a){var b;if(a.sO==a.i$.cw)return;b=new GF;X(b);L(b);}
function KU(a){var b,c,d,e;Zy(a);if(!EP(a)){b=new L3;X(b);L(b);}b=a.hv;if(b!==null){c=a.fT;if(c!==null)a.qk=c;a.fT=b;a.hv=b.ct;}else{d=a.i$.bV.data;e=a.iy;a.iy=e+1|0;b=d[e];a.fT=b;a.hv=b.ct;a.qk=null;}}
var SP=F(EF);
function OW(a){KU(a);return a.fT.cm;}
var Z9=F();
function La(){return "clipboard" in $rt_globals.navigator?1:0;}
function YS(){var a=this;B.call(a);a.EE=null;a.J5=0;}
function Q9(){var a=this;B.call(a);a.g=null;a.dr=0;a.ka=null;a.n4=0;a.f_=0;a.eA=0;a.bm=0;a.lf=null;}
function Js(a){return a.g.bA;}
function Xi(a,b,c,d){var e,f,g,h,i,j;e=Bz();f=a.dr;g=0;if(c!=f)a.dr=c;a:{switch(b){case -1073741784:h=new RJ;c=a.bm+1|0;a.bm=c;E2(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PP;c=a.bm+1|0;a.bm=c;E2(h,c);break a;case -33554392:h=new SQ;c=a.bm+1|0;a.bm=c;E2(h,c);break a;default:c=a.f_+1|0;a.f_=c;if(d!==null)h=ATf(c);else{h=new Fb;E2(h,0);g=1;}c=a.f_;if(c<=(-1))break a;if(c>=10)break a;a.ka.data[c]=h;break a;}h=new Xa;E2(h,(-1));}while(true){if(EL(a.g)&&a.g.h==(-536870788))
{d=APO(B6(a,2),B6(a,64));while(!C2(a.g)&&EL(a.g)){i=a.g;j=i.h;if(j&&j!=(-536870788)&&j!=(-536870871))break;Ck(d,Bf(i));i=a.g;if(i.Z!=(-536870788))continue;Bf(i);}i=Kd(a,d);i.L(h);}else if(a.g.Z==(-536870788)){i=Gp(h);Bf(a.g);}else{i=O3(a,h);d=a.g;if(d.Z==(-536870788))Bf(d);}if(i!==null)Bw(e,i);if(C2(a.g))break;if(a.g.Z==(-536870871))break;}if(a.g.kA==(-536870788))Bw(e,Gp(h));if(a.dr!=f&&!g){a.dr=f;d=a.g;d.fP=f;d.h=d.Z;d.et=d.eI;j=d.c0;d.t=j+1|0;d.g7=j;EO(d);}switch(b){case -1073741784:break;case -536870872:d
=new Mv;Fc(d,e,h);return d;case -268435416:d=new VD;Fc(d,e,h);return d;case -134217688:d=new Rc;Fc(d,e,h);return d;case -67108824:d=new Td;Fc(d,e,h);return d;case -33554392:d=new Dt;Fc(d,e,h);return d;default:switch(e.k){case 0:break;case 1:return AS4(Bs(e,0),h);default:return ASE(e,h);}return Gp(h);}d=new It;Fc(d,e,h);return d;}
function ACx(a){var b,c,d,e,f,g,h;b=Bx(4);c=(-1);d=(-1);if(!C2(a.g)&&EL(a.g)){e=b.data;c=Bf(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B1(3);b=e.data;b[0]=c&65535;f=a.g;g=f.Z;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bf(f);f=a.g;g=f.Z;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bf(f);return APx(e,3);}return APx(e,2);}if(!B6(a,2))return Zx(b[0]);if(B6(a,64))return ANw(b[0]);return AGc(b[0]);}e=b.data;c=1;while(c<4&&!C2(a.g)&&EL(a.g)){h=c+1|0;e[c]=Bf(a.g);c=h;}if(c==1){h=e[0];if(!(AXB.yt(h)==AXC?0:1))return W7(a,e[0]);}if
(!B6(a,2))return ATR(b,c);if(B6(a,64)){f=new WT;N1(f,b,c);return f;}f=new Ts;N1(f,b,c);return f;}
function O3(a,b){var c,d,e,f,g,h,i;if(EL(a.g)&&!Je(a.g)&&JM(a.g.h)){if(B6(a,128)){c=ACx(a);if(!C2(a.g)){d=a.g;e=d.Z;if(!(e==(-536870871)&&!(b instanceof Fb))&&e!=(-536870788)&&!EL(d))c=LR(a,b,c);}}else if(!N$(a.g)&&!UO(a.g)){f=new Ob;U(f);while(!C2(a.g)&&EL(a.g)&&!N$(a.g)&&!UO(a.g)){if(!(!Je(a.g)&&!a.g.h)&&!(!Je(a.g)&&JM(a.g.h))){g=a.g.h;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bf(a.g);if(!LL(e))BX(f,e&65535);else HY(f,F5(e));}if(!B6(a,2)){c=new RD;Dd(c);c.ci
=S(f);e=f.I;c.by=e;c.kq=AL0(e);c.lh=AL0(c.by);h=0;while(h<(c.by-1|0)){Rh(c.kq,I(c.ci,h),(c.by-h|0)-1|0);Rh(c.lh,I(c.ci,(c.by-h|0)-1|0),(c.by-h|0)-1|0);h=h+1|0;}}else if(B6(a,64))c=ATQ(f);else{c=new M6;Dd(c);c.g_=S(f);c.by=f.I;}}else c=LR(a,b,WS(a,b));}else{d=a.g;if(d.Z!=(-536870871))c=LR(a,b,WS(a,b));else{if(b instanceof Fb)L(B4(C(3),d.bA,N9(d)));c=Gp(b);}}a:{if(!C2(a.g)){e=a.g.Z;if(!(e==(-536870871)&&!(b instanceof Fb))&&e!=(-536870788)){f=O3(a,b);if(c instanceof CN&&!(c instanceof EQ)&&!(c instanceof CD)&&
!(c instanceof Ek)){i=c;if(!f.bK(i.F)){c=new VR;ED(c,i.F,i.e,i.hp);c.F.L(c);}}if((f.hw()&65535)!=43)c.L(f);else c.L(f.F);break a;}}if(c===null)return null;c.L(b);}if((c.hw()&65535)!=43)return c;return c.F;}
function LR(a,b,c){var d,e,f,g,h;d=a.g;e=d.Z;if(c!==null&&!(c instanceof BW)){switch(e){case -2147483606:Bf(d);d=new XO;CZ(d,c,b,e);LW();c.L(AXD);return d;case -2147483605:Bf(d);d=new PE;CZ(d,c,b,(-2147483606));LW();c.L(AXD);return d;case -2147483585:Bf(d);d=new Pd;CZ(d,c,b,(-536870849));LW();c.L(AXD);return d;case -2147483525:f=new MZ;d=EW(d);g=a.eA+1|0;a.eA=g;IF(f,d,c,b,(-536870849),g);LW();c.L(AXD);return f;case -1073741782:case -1073741781:Bf(d);d=new RA;CZ(d,c,b,e);c.L(d);return d;case -1073741761:Bf(d);d
=new QA;CZ(d,c,b,(-536870849));c.L(b);return d;case -1073741701:h=new Um;d=EW(d);e=a.eA+1|0;a.eA=e;IF(h,d,c,b,(-536870849),e);c.L(h);return h;case -536870870:case -536870869:Bf(d);if(c.hw()!=(-2147483602)){d=new CD;CZ(d,c,b,e);}else if(B6(a,32)){d=new RB;CZ(d,c,b,e);}else{d=new Om;f=Pf(a.dr);CZ(d,c,b,e);d.kz=f;}c.L(d);return d;case -536870849:Bf(d);d=new Fs;CZ(d,c,b,(-536870849));c.L(b);return d;case -536870789:h=new EY;d=EW(d);e=a.eA+1|0;a.eA=e;IF(h,d,c,b,(-536870849),e);c.L(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bf(d);d=new XR;ED(d,f,b,e);f.e=d;return d;case -2147483585:Bf(d);c=new VL;ED(c,f,b,(-2147483585));return c;case -2147483525:c=new O2;R5(c,EW(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bf(d);d=new Qu;ED(d,f,b,e);f.e=d;return d;case -1073741761:Bf(d);c=new TF;ED(c,f,b,(-1073741761));return c;case -1073741701:c=new Rd;R5(c,EW(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bf(d);d=AS9(f,b,e);f.e=d;return d;case -536870849:Bf(d);c
=new Ek;ED(c,f,b,(-536870849));return c;case -536870789:return AR9(EW(d),f,b,(-536870789));default:}return c;}
function WS(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fb;while(true){a:{e=a.g;f=e.Z;if((f&(-2147418113))==(-2147483608)){Bf(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dr=g;else{if(f!=(-1073741784))g=a.dr;c=Xi(a,f,g,b);e=a.g;if(e.Z!=(-536870871))L(B4(C(3),e.bA,e.c0));Bf(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bf(e);c
=APg(0);break a;case -2147483577:Bf(e);c=new Oh;BO(c);break a;case -2147483558:Bf(e);c=new Wz;h=a.bm+1|0;a.bm=h;ACT(c,h);break a;case -2147483550:Bf(e);c=APg(1);break a;case -2147483526:Bf(e);c=new V9;BO(c);break a;case -536870876:Bf(e);a.bm=a.bm+1|0;if(B6(a,8)){if(B6(a,1)){c=ASq(a.bm);break a;}c=ARK(a.bm);break a;}if(B6(a,1)){c=ASL(a.bm);break a;}c=ATk(a.bm);break a;case -536870866:Bf(e);if(B6(a,32)){c=ATD();break a;}c=ATb(Pf(a.dr));break a;case -536870821:Bf(e);i=0;c=a.g;if(c.Z==(-536870818)){i=1;Bf(c);}c
=Kd(a,FF(a,i));c.L(b);e=a.g;if(e.Z!=(-536870819))L(B4(C(3),e.bA,e.c0));OM(e,1);Bf(a.g);break a;case -536870818:Bf(e);a.bm=a.bm+1|0;if(!B6(a,8)){c=new JR;BO(c);break a;}c=new Nb;e=Pf(a.dr);BO(c);c.rM=e;break a;case 0:j=e.eI;if(j!==null)c=Kd(a,j);else{if(C2(e)){c=Gp(b);break a;}c=Zx(f&65535);}Bf(a.g);break a;default:break b;}Bf(e);c=new JR;BO(c);break a;}h=(f&2147483647)-48|0;if(a.f_<h)L(B4(C(3),E0(e),N9(a.g)));Bf(e);a.bm=a.bm+1|0;c=!B6(a,2)?ARQ(h,a.bm):B6(a,64)?ASr(h,a.bm):ATM(h,a.bm);a.ka.data[h].j9=1;a.n4=
1;break a;}if(f>=0&&!Gs(e)){c=W7(a,f);Bf(a.g);}else if(f==(-536870788))c=Gp(b);else{if(f!=(-536870871)){b=new Ie;c=!Gs(a.g)?Wv(f&65535):a.g.eI.cO();e=a.g;IS(b,c,e.bA,e.c0);L(b);}if(d){b=new Ie;e=a.g;IS(b,C(3),e.bA,e.c0);L(b);}c=Gp(b);}}}if(f!=(-16777176))break;}return c;}
function FF(a,b){var c,d,e,f,g,h,i,j,$$je;c=APO(B6(a,2),B6(a,64));Ee(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(C2(a.g))break a;h=a.g;b=h.Z;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Ck(c,d);d=Bf(a.g);h=a.g;if(h.Z!=(-536870874)){d=38;break d;}if(h.h==(-536870821)){Bf(h);e=1;d=(-1);break d;}Bf(h);if(g){c=FF(a,0);break d;}if(a.g.Z==(-536870819))break d;Wh(c,FF(a,0));break d;case -536870867:if(!g){b=h.h;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bf(h);h=a.g;i=h.Z;if(Gs(h))break c;if
(i<0){j=a.g.h;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(JM(i))break e;i=i&65535;break e;}catch($$e){$$je=E4($$e);if($$je instanceof DO){break b;}else{throw $$e;}}}try{BT(c,d,i);}catch($$e){$$je=E4($$e);if($$je instanceof DO){break b;}else{throw $$e;}}Bf(a.g);d=(-1);break d;}}if(d>=0)Ck(c,d);d=45;Bf(a.g);break d;case -536870821:if(d>=0){Ck(c,d);d=(-1);}Bf(a.g);j=0;h=a.g;if(h.Z==(-536870818)){Bf(h);j=1;}if(!e)X0(c,FF(a,j));else Wh(c,FF(a,j));e=0;Bf(a.g);break d;case -536870819:if(d>=0)Ck(c,
d);d=93;Bf(a.g);break d;case -536870818:if(d>=0)Ck(c,d);d=94;Bf(a.g);break d;case 0:if(d>=0)Ck(c,d);h=a.g.eI;if(h===null)d=0;else{ADU(c,h);d=(-1);}Bf(a.g);break d;default:}if(d>=0)Ck(c,d);d=Bf(a.g);}g=0;}L(B4(C(3),Js(a),a.g.c0));}L(B4(C(3),Js(a),a.g.c0));}if(!f){if(d>=0)Ck(c,d);return c;}L(B4(C(3),Js(a),a.g.c0-1|0));}
function W7(a,b){var c,d,e;c=LL(b);if(B6(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AGc(b&65535);}if(B6(a,64)&&b>128){if(c){d=new Mm;Dd(d);d.by=2;d.q8=Gd(F_(b));return d;}if(OT(b))return AL6(b&65535);if(!SC(b))return ANw(b&65535);return AJm(b&65535);}}if(!c){if(OT(b))return AL6(b&65535);if(!SC(b))return Zx(b&65535);return AJm(b&65535);}d=new DB;Dd(d);d.by=2;d.fy=b;e=(F5(b)).data;d.jz=e[0];d.il=e[1];return d;}
function Kd(a,b){var c,d,e;if(!AA_(b)){if(!b.J){if(b.gR())return AIT(b);return APh(b);}if(!b.gR())return AJ3(b);c=new IH;TS(c,b);return c;}c=Yw(b);d=new MC;BO(d);d.pW=c;d.wG=c.Y;if(!b.J){if(b.gR())return ABU(AIT(Hb(b)),d);return ABU(APh(Hb(b)),d);}if(!b.gR())return ABU(AJ3(Hb(b)),d);c=new Qo;e=new IH;TS(e,Hb(b));ADD(c,e,d);return c;}
function He(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B6(a,b){return (a.dr&b)!=b?0:1;}
var GK=F();
var Zq=F(GK);
var ACh=F(GK);
function Uk(){Eq.call(this);this.rr=null;}
function N4(a){var b;b=new T7;Ko(b,a.rr);return b;}
function O_(){EA.call(this);this.v4=null;}
var AB2=F();
function ZB(b,c,d,e,f,g){g.a=c.a;g.b=f;BB(b,d.a,d.b,g,e);BB(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;BB(b,d.a,d.b+f|0,g,e);BB(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function ABz(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;BB(b,j,k,i,h);BB(b,j,k,i,h);BB(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;BB(b,l,j,i,h);BB(b,l,j,i,h);BB(b,l+g|0,j+g|0,i,h);}
var Sw=F(0);
var AWc=null;function ABQ(){AWc=new Qz;}
function SX(){var a=this;B.call(a);a.sm=null;a.sl=null;}
function AHs(a,b){var c,d,e,f,g,h,i,j,k;c=a.sm;d=a.sl;if(!((b?1:0)?1:0))$rt_globals.console.info("provider result is undefined");else if(!($rt_globals.Array.isArray(b)?1:0))Li(d,C(19));else{e=P(Jd,b.length);f=e.data;g=0;h=f.length;while(g<h){i=b[g];j=new Jd;j.gZ=new L8;if("kind" in i?1:0)j.yM=Cs(i.kind);XW(i.range,j.gZ);f[g]=j;g=g+1|0;}b=c.tm;d=c.tk;k=c.to;g=c.tn;c=b.c;if(c===d&&c.o==k&&c.r==g){b.jN=ATh(k,g,e);ADF(b);}}}
var Gi=F(0);
function Tj(){B.call(this);this.q5=null;}
function ALr(a,b,c,d){I8(a.q5,b,c.be,d.be);}
function Tk(){B.call(this);this.nr=null;}
function AIZ(a,b,c,d){I8(a.nr,b,c.be,d.be);}
function HI(){B.call(this);this.mu=0;}
var AXE=null;var AXF=null;var AXG=null;function AMX(a){var b=new HI();ABY(b,a);return b;}
function ABY(a,b){a.mu=b;}
function OR(b){return !b?AXF:AXE;}
function YK(){AXE=AMX(1);AXF=AMX(0);AXG=E($rt_booleancls());}
var Ja=F(0);
var RN=F();
var OF=F(0);
var AAQ=F();
function Sf(){B.call(this);this.uq=null;}
function AMb(a,b,c,d){HP(a.uq,b,c.be,d.be);}
var Se=F();
function AQo(a,b){return b.dT.c6>=0?0:1;}
var Sd=F();
function ANu(a,b){var c;a:{b:{b=b;if(b!==null){b=b.eK;if(b===null)break b;if(b.c6>=0)break b;}c=1;break a;}c=0;}return c;}
function Sg(){B.call(this);this.tA=null;}
function ALG(a,b,c,d){HP(a.tA,b,c.be,d.be);}
function MB(){var a=this;B.call(a);a.c4=null;a.rF=null;a.qQ=null;}
function MF(a){var b,c,d,e,f,g,h,i;a:{b=V(a.c4);switch(b){case 3:break;case 5:c=N2(a);d=Lc(a);b=V(a.c4);e=V(a.c4);f=V(a.c4);g=Bz();h=0;while(h<f){Bw(g,Lc(a));h=h+1|0;}i=new LK;AB$(i,c,d,b);i.ju=g;i.mS=e;break a;default:c=new Dm;d=new R;U(d);Bl(K(d,C(316)),b);Bp(c,S(d));L(c);}i=AS$(N2(a),Lc(a),V(a.c4));}return i;}
function N2(a){var b,c;b=V(a.c4);c=V(a.c4);return AIu(DV(a.rF,b,c),V(a.c4));}
function Lc(a){var b;b=V(a.c4);if(b==(-1))return null;return Bs(a.qQ,b);}
function Q_(){var a=this;B.call(a);a.dH=null;a.uz=null;a.u2=null;}
function FB(a){var b,c,d,e,f;a:{b:{b=V(a.dH);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Nf(a);d=PU(a);b=V(a.dH);e=Sx(a);f=new Ib;KJ(f,c,d,2);f.nh=b;f.gz=e;break a;case 4:c=FB(a);d=FB(a);f=new Iv;KJ(f,c.eK,c.fe,9);f.hs=c;f.gC=d;break a;case 5:f=ARZ(Nf(a),PU(a),V(a.dH));break a;case 9:c=Sx(a);f=new FT;d=!DF(c)&&Bs(c,0)!==null?(Bs(c,0)).fe:null;KJ(f,null,null,7);f.gl=Bz();c=BP(c);while(BQ(c)){e=BS(c);if(!(e instanceof FT))Bw(f.gl,e);else{e=e;Gm(f.gl,e.gl);}}f.fe=d;break a;default:break b;}f
=null;break a;}c=new Dm;d=new R;U(d);Bl(K(d,C(317)),b);Bp(c,S(d));L(c);}return f;}
function Nf(a){var b,c;b=V(a.dH);c=V(a.dH);return AIu(DV(a.uz,b,c),V(a.dH));}
function PU(a){var b;b=V(a.dH);if(b==(-1))return null;return Bs(a.u2,b);}
function Sx(a){var b,c,d;b=V(a.dH);c=Bz();d=0;while(d<b){Bw(c,FB(a));d=d+1|0;}return c;}
function BC(){var a=this;B.call(a);a.e=null;a.b6=0;a.pp=null;a.hp=0;}
var AUs=0;function BO(a){var b;b=AUs;AUs=b+1|0;a.pp=KT(b);}
function J_(a,b){var c;c=AUs;AUs=c+1|0;a.pp=KT(c);a.e=b;}
function Hi(a,b,c,d){var e;e=d.u;while(true){if(b>e)return (-1);if(a.d(b,c,d)>=0)break;b=b+1|0;}return b;}
function Hr(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.d(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AGx(a,b){a.hp=b;}
function AFU(a){return a.hp;}
function AOC(a){return a.e;}
function APC(a,b){a.e=b;}
function APB(a,b){return 1;}
function AQx(a){return null;}
function IA(a){var b;a.b6=1;b=a.e;if(b!==null){if(!b.b6){b=b.fb();if(b!==null){a.e.b6=1;a.e=b;}a.e.ec();}else if(b instanceof F7&&b.eg.j9)a.e=b.e;}}
function ADJ(){AUs=1;}
var UF=F(0);
function Vr(){var a=this;B.call(a);a.o6=null;a.o5=0.0;}
function HB(a,b){return Kb(a.o6,b,a.o5*2.0+0.875);}
function XC(){var a=this;B.call(a);a.oo=null;a.om=null;a.ol=0;a.on=0;}
function AMg(a,b){b=b;DU(a.oo,a.om,b,a.ol,a.on);}
function XD(){var a=this;B.call(a);a.wk=null;a.wj=null;a.wi=0;a.wh=0;}
function AH1(a,b){b=b;DU(a.wk,a.wj,b,a.wi,a.wh);}
var Qz=F();
function ALZ(a,b){}
function CC(){var a=this;BC.call(a);a.j9=0;a.dv=0;}
var AXD=null;function LW(){LW=Bm(CC);AHJ();}
function ATf(a){var b=new CC();E2(b,a);return b;}
function E2(a,b){LW();BO(a);a.dv=b;}
function AFg(a,b,c,d){var e,f;e=H3(d,a.dv);I_(d,a.dv,b);f=a.e.d(b,c,d);if(f<0)I_(d,a.dv,e);return f;}
function AK5(a){return a.dv;}
function AFE(a,b){return 0;}
function AHJ(){var b;b=new Oc;BO(b);AXD=b;}
function Gk(){var a=this;B.call(a);a.X=null;a.fP=0;a.ew=0;a.u0=0;a.kA=0;a.Z=0;a.h=0;a.sd=0;a.eI=null;a.et=null;a.t=0;a.hI=0;a.c0=0;a.g7=0;a.bA=null;}
var AXH=null;var AXB=null;var AXC=0;function OM(a,b){if(b>0&&b<3)a.ew=b;if(b==1){a.h=a.Z;a.et=a.eI;a.t=a.g7;a.g7=a.c0;EO(a);}}
function Gs(a){return a.eI===null?0:1;}
function Je(a){return a.et===null?0:1;}
function Bf(a){EO(a);return a.kA;}
function EW(a){var b;b=a.eI;EO(a);return b;}
function EO(a){var b,c,d,e,f,g,h,$$je;a.kA=a.Z;a.Z=a.h;a.eI=a.et;a.c0=a.g7;a.g7=a.t;while(true){b=0;c=a.t>=a.X.data.length?0:K$(a);a.h=c;a.et=null;if(a.ew==4){if(c!=92)return;c=a.t;d=a.X.data;c=c>=d.length?0:d[BU(a)];a.h=c;switch(c){case 69:break;default:a.h=92;a.t=a.hI;return;}a.ew=a.u0;a.h=a.t>(a.X.data.length-2|0)?0:K$(a);}a:{c=a.h;if(c!=92){e=a.ew;if(e==1)switch(c){case 36:a.h=(-536870876);break a;case 40:if(a.X.data[a.t]!=63){a.h=(-2147483608);break a;}BU(a);c=a.X.data[a.t];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.h=(-134217688);BU(a);break b;default:L(B4(C(3),E0(a),a.t));}a.h=(-67108824);BU(a);}else{switch(c){case 33:break;case 60:BU(a);c=a.X.data[a.t];e=1;break b;case 61:a.h=(-536870872);BU(a);break b;case 62:a.h=(-33554392);BU(a);break b;default:f=ADL(a);a.h=f;if(f<256){a.fP=f;f=f<<16;a.h=f;a.h=(-1073741784)|f;break b;}f=f&255;a.h=f;a.fP=f;f=f<<16;a.h=f;a.h=(-16777176)|f;break b;}a.h=(-268435416);BU(a);}}if(!e)break;}break a;case 41:a.h=(-536870871);break a;case 42:case 43:case 63:e=a.t;d
=a.X.data;switch(e>=d.length?42:d[e]){case 43:a.h=c|(-2147483648);BU(a);break a;case 63:a.h=c|(-1073741824);BU(a);break a;default:}a.h=c|(-536870912);break a;case 46:a.h=(-536870866);break a;case 91:a.h=(-536870821);OM(a,2);break a;case 93:if(e!=2)break a;a.h=(-536870819);break a;case 94:a.h=(-536870818);break a;case 123:a.et=ADj(a,c);break a;case 124:a.h=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.h=(-536870874);break a;case 45:a.h=(-536870867);break a;case 91:a.h=(-536870821);break a;case 93:a.h
=(-536870819);break a;case 94:a.h=(-536870818);break a;default:}}else{c=a.t>=(a.X.data.length-2|0)?(-1):K$(a);c:{a.h=c;switch(c){case -1:L(B4(C(3),E0(a),a.t));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.h
=ABF(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.ew!=1)break a;a.h=(-2147483648)|c;break a;case 65:a.h=(-2147483583);break a;case 66:a.h=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:L(B4(C(3),E0(a),a.t));case 68:case 83:case 87:case 100:case 115:case 119:a.et=RZ(DV(a.X,
a.hI,1),0);a.h=0;break a;case 71:a.h=(-2147483577);break a;case 80:case 112:break c;case 81:a.u0=a.ew;a.ew=4;b=1;break a;case 90:a.h=(-2147483558);break a;case 97:a.h=7;break a;case 98:a.h=(-2147483550);break a;case 99:c=a.t;d=a.X.data;if(c>=(d.length-2|0))L(B4(C(3),E0(a),a.t));a.h=d[BU(a)]&31;break a;case 101:a.h=27;break a;case 102:a.h=12;break a;case 110:a.h=10;break a;case 114:a.h=13;break a;case 116:a.h=9;break a;case 117:a.h=PI(a,4);break a;case 120:a.h=PI(a,2);break a;case 122:a.h=(-2147483526);break a;default:}break a;}g
=ABn(a);h=0;if(a.h==80)h=1;try{a.et=RZ(g,h);}catch($$e){$$je=E4($$e);if($$je instanceof IK){L(B4(C(3),E0(a),a.t));}else{throw $$e;}}a.h=0;}}if(b)continue;else break;}}
function ABn(a){var b,c,d,e,f,g;b=new R;FC(b,10);c=a.t;d=a.X;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=DV(d,BU(a),1);f=new R;U(f);K(K(f,C(318)),b);return S(f);}BU(a);c=0;a:{while(true){g=a.t;d=a.X.data;if(g>=(d.length-2|0))break;c=d[BU(a)];if(c==125)break a;BX(b,c);}}if(c!=125)L(B4(C(3),a.bA,a.t));}if(!b.I)L(B4(C(3),a.bA,a.t));f=S(b);if(H(f)==1){b=new R;U(b);K(K(b,C(318)),f);return S(b);}b:{c:{if(H(f)>3){if(J0(f,C(318)))break c;if(J0(f,C(319)))break c;}break b;}f=D3(f,2);}return f;}
function ADj(a,b){var c,d,e,f,g,$$je;c=new R;FC(c,4);d=(-1);e=2147483647;a:{while(true){f=a.t;g=a.X.data;if(f>=g.length)break a;b=g[BU(a)];if(b==125)break a;if(b==44&&d<0)try{d=I5(Jf(c),10);ADm(c,0,YL(c));continue;}catch($$e){$$je=E4($$e);if($$je instanceof C0){break;}else{throw $$e;}}BX(c,b&65535);}L(B4(C(3),a.bA,a.t));}if(b!=125)L(B4(C(3),a.bA,a.t));if(c.I>0)b:{try{e=I5(Jf(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=E4($$e);if($$je instanceof C0){}else{throw $$e;}}L(B4(C(3),a.bA,a.t));}else if(d<0)L(B4(C(3),
a.bA,a.t));if((d|e|(e-d|0))<0)L(B4(C(3),a.bA,a.t));b=a.t;g=a.X.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.h=(-2147483525);BU(a);break c;case 63:a.h=(-1073741701);BU(a);break c;default:}a.h=(-536870789);}c=new MN;c.ev=d;c.eq=e;return c;}
function E0(a){return a.bA;}
function C2(a){return !a.Z&&!a.h&&a.t==a.sd&&!Gs(a)?1:0;}
function JM(b){return b<0?0:1;}
function EL(a){return !C2(a)&&!Gs(a)&&JM(a.Z)?1:0;}
function N$(a){var b;b=a.Z;return b<=56319&&b>=55296?1:0;}
function UO(a){var b;b=a.Z;return b<=57343&&b>=56320?1:0;}
function SC(b){return b<=56319&&b>=55296?1:0;}
function OT(b){return b<=57343&&b>=56320?1:0;}
function PI(a,b){var c,d,e,f,$$je;c=new R;FC(c,b);d=a.X.data.length-2|0;e=0;while(true){f=BD(e,b);if(f>=0)break;if(a.t>=d)break;BX(c,a.X.data[BU(a)]);e=e+1|0;}if(!f)a:{try{b=I5(Jf(c),16);}catch($$e){$$je=E4($$e);if($$je instanceof C0){break a;}else{throw $$e;}}return b;}L(B4(C(3),a.bA,a.t));}
function ABF(a){var b,c,d,e,f,g;b=3;c=1;d=a.X.data;e=d.length-2|0;f=Ug(d[a.t],8);switch(f){case -1:break;default:if(f>3)b=2;BU(a);a:{while(true){if(c>=b)break a;g=a.t;if(g>=e)break a;g=Ug(a.X.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BU(a);c=c+1|0;}}return f;}L(B4(C(3),a.bA,a.t));}
function ADL(a){var b,c,d,e;b=1;c=a.fP;a:while(true){d=a.t;e=a.X.data;if(d>=e.length)L(B4(C(3),a.bA,d));b:{c:{switch(e[d]){case 41:BU(a);return c|256;case 45:if(!b)L(B4(C(3),a.bA,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BU(a);}BU(a);return c;}
function BU(a){var b,c,d,e,f;b=a.t;a.hI=b;if(!(a.fP&4))a.t=b+1|0;else{c=a.X.data.length-2|0;a.t=b+1|0;a:while(true){d=a.t;if(d<c&&Ra(a.X.data[d])){a.t=a.t+1|0;continue;}d=a.t;if(d>=c)break;e=a.X.data;if(e[d]!=35)break;a.t=d+1|0;while(true){f=a.t;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.t=f+1|0;}}}return a.hI;}
function AC3(b){return AXH.Ei(b);}
function K$(a){var b,c,d,e;b=a.X.data[BU(a)];if(Cr(b)){c=a.hI+1|0;d=a.X.data;if(c<d.length){e=d[c];if(CO(e)){BU(a);return Eg(b,e);}}}return b;}
function N9(a){return a.c0;}
function Ie(){var a=this;BF.call(a);a.ya=null;a.xK=null;a.qU=0;}
function B4(a,b,c){var d=new Ie();IS(d,a,b,c);return d;}
function IS(a,b,c,d){X(a);a.qU=(-1);a.ya=b;a.xK=c;a.qU=d;}
var ADe=F();
function WB(){B.call(this);this.uI=null;}
function AM1(a,b){var c,d;c=a.uI;d=0;while(d<b.length){YG(c,b[d]);d=d+1|0;}}
var ABf=F(0);
function TL(){var a=this;B.call(a);a.p8=null;a.p9=null;a.p$=null;}
function AMB(a,b){a.p8.j(ARM(a.p9,b,a.p$));}
var RJ=F(CC);
function AEL(a,b,c,d){var e;e=a.dv;BI(d,e,b-C6(d,e)|0);return a.e.d(b,c,d);}
function AN_(a,b){return 0;}
var Xa=F(CC);
function AGu(a,b,c,d){return b;}
var PP=F(CC);
function AFP(a,b,c,d){if(C6(d,a.dv)!=b)b=(-1);return b;}
function SQ(){CC.call(this);this.nK=0;}
function AER(a,b,c,d){var e;e=a.dv;BI(d,e,b-C6(d,e)|0);a.nK=b;return b;}
function AMM(a,b){return 0;}
var Fb=F(CC);
function APX(a,b,c,d){if(d.jg!=1&&b!=d.u)return (-1);d.iN=1;I_(d,0,b);return b;}
function BW(){BC.call(this);this.by=0;}
function Dd(a){BO(a);a.by=1;}
function AQ7(a,b,c,d){var e;if((b+a.bQ()|0)>d.u){d.de=1;return (-1);}e=a.bl(b,c);if(e<0)return (-1);return a.e.d(b+e|0,c,d);}
function AO2(a){return a.by;}
function AJF(a,b){return 1;}
var ACS=F(BW);
function Gp(a){var b=new ACS();ALf(b,a);return b;}
function ALf(a,b){J_(a,b);a.by=1;a.hp=1;a.by=0;}
function AOt(a,b,c){return 0;}
function AHN(a,b,c,d){var e,f,g;e=d.u;f=d.cB;while(true){g=BD(b,e);if(g>0)return (-1);if(g<0&&CO(I(c,b))&&b>f&&Cr(I(c,b-1|0))){b=b+1|0;continue;}if(a.e.d(b,c,d)>=0)break;b=b+1|0;}return b;}
function AGn(a,b,c,d,e){var f,g;f=e.u;g=e.cB;while(true){if(c<b)return (-1);if(c<f&&CO(I(d,c))&&c>g&&Cr(I(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.d(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AEO(a,b){return 0;}
function BR(){var a=this;BC.call(a);a.bv=null;a.eg=null;a.S=0;}
function ASE(a,b){var c=new BR();Fc(c,a,b);return c;}
function Fc(a,b,c){BO(a);a.bv=b;a.eg=c;a.S=c.dv;}
function AIB(a,b,c,d){var e,f,g,h;if(a.bv===null)return (-1);e=Fh(d,a.S);Dc(d,a.S,b);f=a.bv.k;g=0;while(true){if(g>=f){Dc(d,a.S,e);return (-1);}h=(Bs(a.bv,g)).d(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AME(a,b){a.eg.e=b;}
function AKv(a,b){var c;a:{c=a.bv;if(c!==null){c=BP(c);while(true){if(!BQ(c))break a;if(!(BS(c)).bK(b))continue;else return 1;}}}return 0;}
function ANj(a,b){return H3(b,a.S)>=0&&Fh(b,a.S)==H3(b,a.S)?0:1;}
function AGi(a){var b,c,d,e;a.b6=1;b=a.eg;if(b!==null&&!b.b6)IA(b);a:{b=a.bv;if(b!==null){c=b.k;d=0;while(true){if(d>=c)break a;b=Bs(a.bv,d);e=b.fb();if(e===null)e=b;else{b.b6=1;Fk(a.bv,d);Rz(a.bv,d,e);}if(!e.b6)e.ec();d=d+1|0;}}}if(a.e!==null)IA(a);}
var It=F(BR);
function AMm(a,b,c,d){var e,f,g,h;e=C6(d,a.S);BI(d,a.S,b);f=a.bv.k;g=0;while(true){if(g>=f){BI(d,a.S,e);return (-1);}h=(Bs(a.bv,g)).d(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ANK(a,b){return !C6(b,a.S)?0:1;}
var Dt=F(It);
function AGW(a,b,c,d){var e,f,g;e=C6(d,a.S);BI(d,a.S,b);f=a.bv.k;g=0;while(g<f){if((Bs(a.bv,g)).d(b,c,d)>=0)return a.e.d(a.eg.nK,c,d);g=g+1|0;}BI(d,a.S,e);return (-1);}
function ANs(a,b){a.e=b;}
var Mv=F(Dt);
function AMy(a,b,c,d){var e,f;e=a.bv.k;f=0;while(f<e){if((Bs(a.bv,f)).d(b,c,d)>=0)return a.e.d(b,c,d);f=f+1|0;}return (-1);}
function APJ(a,b){return 0;}
var VD=F(Dt);
function AFz(a,b,c,d){var e,f;e=a.bv.k;f=0;while(true){if(f>=e)return a.e.d(b,c,d);if((Bs(a.bv,f)).d(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AO8(a,b){return 0;}
var Rc=F(Dt);
function AGf(a,b,c,d){var e,f,g,h;e=a.bv.k;f=d.iT?0:d.cB;a:{g=a.e.d(b,c,d);if(g>=0){BI(d,a.S,b);h=0;while(true){if(h>=e)break a;if((Bs(a.bv,h)).ca(f,b,c,d)>=0){BI(d,a.S,(-1));return g;}h=h+1|0;}}}return (-1);}
function ARn(a,b){return 0;}
var Td=F(Dt);
function AEn(a,b,c,d){var e,f;e=a.bv.k;BI(d,a.S,b);f=0;while(true){if(f>=e)return a.e.d(b,c,d);if((Bs(a.bv,f)).ca(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ANZ(a,b){return 0;}
function F7(){BR.call(this);this.cK=null;}
function AS4(a,b){var c=new F7();Zo(c,a,b);return c;}
function Zo(a,b,c){BO(a);a.cK=b;a.eg=c;a.S=c.dv;}
function AEE(a,b,c,d){var e,f;e=Fh(d,a.S);Dc(d,a.S,b);f=a.cK.d(b,c,d);if(f>=0)return f;Dc(d,a.S,e);return (-1);}
function AKR(a,b,c,d){var e;e=a.cK.b8(b,c,d);if(e>=0)Dc(d,a.S,e);return e;}
function AOd(a,b,c,d,e){var f;f=a.cK.ca(b,c,d,e);if(f>=0)Dc(e,a.S,f);return f;}
function AKp(a,b){return a.cK.bK(b);}
function AMH(a){var b;b=new MU;Zo(b,a.cK,a.eg);a.e=b;return b;}
function AQA(a){var b;a.b6=1;b=a.eg;if(b!==null&&!b.b6)IA(b);b=a.cK;if(b!==null&&!b.b6){b=b.fb();if(b!==null){a.cK.b6=1;a.cK=b;}a.cK.ec();}}
var AC6=F();
function XW(b,c){c.fG=b.startColumn-1|0;c.e6=b.startLineNumber-1|0;c.iC=b.endColumn-1|0;c.jk=b.endLineNumber-1|0;}
function AEg(b,c,d,e){return {endColumn:b,endLineNumber:c,startColumn:d,startLineNumber:e};}
var Go=F();
function Q(){var a=this;Go.call(a);a.Y=0;a.b5=0;a.G=null;a.jl=null;a.j5=null;a.J=0;}
var AXI=null;function OK(){OK=Bm(Q);AGI();}
function Bq(a){var b;OK();b=new Wu;b.y=Bx(64);a.G=b;}
function AFB(a){return null;}
function AE4(a){return a.G;}
function AA_(a){var b,c,d,e,f;if(!a.b5)b=GT(a.G,0)>=2048?0:1;else{a:{c=a.G;b=0;d=c.bi;if(b<d){e=c.y.data;f=(e[0]^(-1))>>>0|0;if(f)b=HW(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+HW(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AIR(a){return a.J;}
function AOY(a){return a;}
function Yw(a){var b,c;if(a.j5===null){b=a.eH();c=new VQ;c.yz=a;c.oa=b;Bq(c);a.j5=c;Ee(c,a.b5);}return a.j5;}
function Hb(a){var b,c;if(a.jl===null){b=a.eH();c=new VO;c.yc=a;c.uo=b;c.u_=a;Bq(c);a.jl=c;Ee(c,a.Y);a.jl.J=a.J;}return a.jl;}
function AQu(a){return 0;}
function Ee(a,b){var c;c=a.Y;if(c^b){a.Y=c?0:1;a.b5=a.b5?0:1;}if(!a.J)a.J=1;return a;}
function AHT(a){return a.Y;}
function JI(b,c){OK();return b.i(c);}
function HV(b,c){var d,e;OK();if(b.c$()!==null&&c.c$()!==null){b=b.c$();c=c.c$();d=Ba(b.y.data.length,c.y.data.length);e=0;a:{while(e<d){if(b.y.data[e]&c.y.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function RZ(b,c){var d,e,f;OK();d=0;while(true){ANX();e=AXJ.data;if(d>=e.length){f=new IK;Bp(f,C(3));f.yR=C(3);f.yD=b;L(f);}e=e[d].data;if(BE(b,e[0]))break;d=d+1|0;}return ACn(e[1],c);}
function AGI(){var b;b=new GI;ANX();AXI=b;}
function Zd(){var a=this;Q.call(a);a.lq=0;a.nI=0;a.ga=0;a.k1=0;a.dI=0;a.e7=0;a.C=null;a.bs=null;}
function C7(){var a=new Zd();ARf(a);return a;}
function APO(a,b){var c=new Zd();AGw(c,a,b);return c;}
function ARf(a){Bq(a);a.C=ARo();}
function AGw(a,b,c){Bq(a);a.C=ARo();a.lq=b;a.nI=c;}
function Ck(a,b){a:{if(a.lq){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dI){L9(a.C,He(b&65535));break a;}K3(a.C,He(b&65535));break a;}if(a.nI&&b>128){a.ga=1;b=Gd(F_(b));}}}if(!(!SC(b)&&!OT(b))){if(a.k1)L9(a.G,b-55296|0);else K3(a.G,b-55296|0);}if(a.dI)L9(a.C,b);else K3(a.C,b);if(!a.J&&LL(b))a.J=1;return a;}
function ADU(a,b){var c,d,e;if(!a.J&&b.J)a.J=1;if(a.k1){if(!b.b5)Ft(a.G,b.eH());else CW(a.G,b.eH());}else if(!b.b5)Fq(a.G,b.eH());else{E5(a.G,b.eH());CW(a.G,b.eH());a.b5=a.b5?0:1;a.k1=1;}if(!a.e7&&b.c$()!==null){if(a.dI){if(!b.Y)Ft(a.C,b.c$());else CW(a.C,b.c$());}else if(!b.Y)Fq(a.C,b.c$());else{E5(a.C,b.c$());CW(a.C,b.c$());a.Y=a.Y?0:1;a.dI=1;}}else{c=a.Y;d=a.bs;if(d!==null){if(!c){e=new OB;e.wZ=a;e.vI=c;e.uV=d;e.uG=b;Bq(e);a.bs=e;}else{e=new OC;e.y0=a;e.rC=c;e.rb=d;e.qx=b;Bq(e);a.bs=e;}}else{if(c&&!a.dI&&
LP(a.C)){d=new Oy;d.xJ=a;d.ro=b;Bq(d);a.bs=d;}else if(!c){d=new Ow;d.kH=a;d.jL=c;d.o_=b;Bq(d);a.bs=d;}else{d=new Ox;d.lH=a;d.jU=c;d.uL=b;Bq(d);a.bs=d;}a.e7=1;}}return a;}
function BT(a,b,c){var d,e,f,g,h;if(b>c){d=new BF;X(d);L(d);}a:{b:{if(!a.lq){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Ck(a,b);b=b+1|0;}}if(!a.dI)Hy(a.C,b,c+1|0);else{d=a.C;c=c+1|0;if(b>c){d=new BV;X(d);L(d);}e=d.bi;if(b<e){f=Ba(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.y.data;h[g]=h[g]&(HR(d,b)|Hp(d,f));}else{h=d.y.data;h[g]=h[g]&HR(d,b);e=g+1|0;while(e<c){d.y.data[e]=0;e=e+1|0;}if(f&31){h=d.y.data;h[c]=h[c]&Hp(d,f);}}GL(d);}}}}return a;}
function X0(a,b){var c,d,e;if(!a.J&&b.J)a.J=1;if(b.ga)a.ga=1;c=a.b5;if(!(c^b.b5)){if(!c)Fq(a.G,b.G);else CW(a.G,b.G);}else if(c)Ft(a.G,b.G);else{E5(a.G,b.G);CW(a.G,b.G);a.b5=1;}if(!a.e7&&CH(b)!==null){c=a.Y;if(!(c^b.Y)){if(!c)Fq(a.C,CH(b));else CW(a.C,CH(b));}else if(c)Ft(a.C,CH(b));else{E5(a.C,CH(b));CW(a.C,CH(b));a.Y=1;}}else{c=a.Y;d=a.bs;if(d!==null){if(!c){e=new Oq;e.wM=a;e.tJ=c;e.uK=d;e.vn=b;Bq(e);a.bs=e;}else{e=new O5;e.w8=a;e.vj=c;e.m_=d;e.nS=b;Bq(e);a.bs=e;}}else{if(!a.dI&&LP(a.C)){if(!c){d=new Oz;d.y2
=a;d.qf=b;Bq(d);a.bs=d;}else{d=new OA;d.xa=a;d.u7=b;Bq(d);a.bs=d;}}else if(!c){d=new OD;d.tV=a;d.rV=b;d.rf=c;Bq(d);a.bs=d;}else{d=new OE;d.sf=a;d.sy=b;d.sT=c;Bq(d);a.bs=d;}a.e7=1;}}}
function Wh(a,b){var c,d,e;if(!a.J&&b.J)a.J=1;if(b.ga)a.ga=1;c=a.b5;if(!(c^b.b5)){if(!c)CW(a.G,b.G);else Fq(a.G,b.G);}else if(!c)Ft(a.G,b.G);else{E5(a.G,b.G);CW(a.G,b.G);a.b5=0;}if(!a.e7&&CH(b)!==null){c=a.Y;if(!(c^b.Y)){if(!c)CW(a.C,CH(b));else Fq(a.C,CH(b));}else if(!c)Ft(a.C,CH(b));else{E5(a.C,CH(b));CW(a.C,CH(b));a.Y=0;}}else{c=a.Y;d=a.bs;if(d!==null){if(!c){e=new Os;e.wY=a;e.tZ=c;e.n$=d;e.rz=b;Bq(e);a.bs=e;}else{e=new Ot;e.xf=a;e.s_=c;e.m0=d;e.tH=b;Bq(e);a.bs=e;}}else{if(!a.dI&&LP(a.C)){if(!c){d=new Oo;d.xc
=a;d.pK=b;Bq(d);a.bs=d;}else{d=new Op;d.yW=a;d.pR=b;Bq(d);a.bs=d;}}else if(!c){d=new Ou;d.wu=a;d.vE=b;d.sq=c;Bq(d);a.bs=d;}else{d=new On;d.so=a;d.ti=b;d.rE=c;Bq(d);a.bs=d;}a.e7=1;}}}
function CL(a,b){var c;c=a.bs;if(c!==null)return a.Y^c.i(b);return a.Y^C_(a.C,b);}
function CH(a){if(!a.e7)return a.C;return null;}
function AHI(a){return a.G;}
function APq(a){var b,c;if(a.bs!==null)return a;b=CH(a);c=new Or;c.wH=a;c.is=b;Bq(c);return Ee(c,a.Y);}
function ALO(a){var b,c,d;b=new R;U(b);c=GT(a.C,0);while(c>=0){HY(b,F5(c));BX(b,124);c=GT(a.C,c+1|0);}d=b.I;if(d>0)VF(b,d-1|0);return S(b);}
function AHW(a){return a.ga;}
function IK(){var a=this;Bt.call(a);a.yR=null;a.yD=null;}
function DN(){BC.call(this);this.F=null;}
function CZ(a,b,c,d){J_(a,c);a.F=b;a.hp=d;}
function ARe(a){return a.F;}
function AOe(a,b){return !a.F.bK(b)&&!a.e.bK(b)?0:1;}
function APP(a,b){return 1;}
function ALb(a){var b;a.b6=1;b=a.e;if(b!==null&&!b.b6){b=b.fb();if(b!==null){a.e.b6=1;a.e=b;}a.e.ec();}b=a.F;if(b!==null){if(!b.b6){b=b.fb();if(b!==null){a.F.b6=1;a.F=b;}a.F.ec();}else if(b instanceof F7&&b.eg.j9)a.F=b.e;}}
function CN(){DN.call(this);this.T=null;}
function AS9(a,b,c){var d=new CN();ED(d,a,b,c);return d;}
function ED(a,b,c,d){CZ(a,b,c,d);a.T=b;}
function AEq(a,b,c,d){var e,f;e=0;a:{while((b+a.T.bQ()|0)<=d.u){f=a.T.bl(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.d(b,c,d);if(f>=0)break;b=b-a.T.bQ()|0;e=e+(-1)|0;}return f;}
function EQ(){CN.call(this);this.jf=null;}
function AR9(a,b,c,d){var e=new EQ();R5(e,a,b,c,d);return e;}
function R5(a,b,c,d,e){ED(a,c,d,e);a.jf=b;}
function AFj(a,b,c,d){var e,f,g,h,i;e=a.jf;f=e.ev;g=e.eq;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.T.bQ()|0)>d.u)break a;i=a.T.bl(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.d(b,c,d);if(i>=0)break;b=b-a.T.bQ()|0;h=h+(-1)|0;}return i;}if((b+a.T.bQ()|0)>d.u){d.de=1;return (-1);}i=a.T.bl(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CD=F(DN);
function AED(a,b,c,d){var e;if(!a.F.E(d))return a.e.d(b,c,d);e=a.F.d(b,c,d);if(e>=0)return e;return a.e.d(b,c,d);}
var Ek=F(CN);
function AKX(a,b,c,d){var e;e=a.F.d(b,c,d);if(e<0)e=a.e.d(b,c,d);return e;}
function ARq(a,b){a.e=b;a.F.L(b);}
var VR=F(CN);
function AQZ(a,b,c,d){while((b+a.T.bQ()|0)<=d.u&&a.T.bl(b,c)>0){b=b+a.T.bQ()|0;}return a.e.d(b,c,d);}
function ALH(a,b,c,d){var e,f,g;e=a.e.b8(b,c,d);if(e<0)return (-1);f=e-a.T.bQ()|0;while(f>=b&&a.T.bl(f,c)>0){g=f-a.T.bQ()|0;e=f;f=g;}return e;}
function W(){var a=this;B.call(a);a.lM=null;a.kC=null;}
function ACn(a,b){if(!b&&a.lM===null)a.lM=a.B();else if(b&&a.kC===null)a.kC=Ee(a.B(),1);if(b)return a.kC;return a.lM;}
var C0=F(BF);
function MN(){var a=this;Go.call(a);a.ev=0;a.eq=0;}
function ALS(a){var b,c,d,e,f;b=a.ev;c=a.eq;d=c!=2147483647?KT(c):C(3);e=new R;U(e);BX(e,123);f=Bl(e,b);BX(f,44);BX(K(f,d),125);return S(e);}
var Oc=F(BC);
function AJ7(a,b,c,d){return b;}
function AMC(a,b){return 0;}
function Wu(){var a=this;B.call(a);a.y=null;a.bi=0;}
function ARo(){var a=new Wu();AF7(a);return a;}
function AF7(a){a.y=Bx(0);}
function K3(a,b){var c,d;c=b/32|0;if(b>=a.bi){H0(a,c+1|0);a.bi=b+1|0;}d=a.y.data;d[c]=d[c]|1<<(b%32|0);}
function Hy(a,b,c){var d,e,f,g,h;d=BD(b,c);if(d>0){e=new BV;X(e);L(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bi){H0(a,f+1|0);a.bi=c;}if(d==f){g=a.y.data;g[d]=g[d]|Hp(a,b)&HR(a,c);}else{g=a.y.data;g[d]=g[d]|Hp(a,b);h=d+1|0;while(h<f){a.y.data[h]=(-1);h=h+1|0;}if(c&31){g=a.y.data;g[f]=g[f]|HR(a,c);}}}
function Hp(a,b){return (-1)<<(b%32|0);}
function HR(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function L9(a,b){var c,d,e,f;c=b/32|0;d=a.y.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bi-1|0))GL(a);}}
function C_(a,b){var c,d;c=b/32|0;d=a.y.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function GT(a,b){var c,d,e,f;c=a.bi;if(b>=c)return (-1);d=b/32|0;e=a.y.data;f=e[d]>>>(b%32|0)|0;if(f)return HW(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+HW(e[f])|0;f=f+1|0;}return (-1);}
function H0(a,b){var c;c=a.y.data.length;if(c>=b)return;c=Z((b*3|0)/2|0,(c*2|0)+1|0);a.y=Ir(a.y,c);}
function GL(a){var b,c,d;b=(a.bi+31|0)/32|0;a.bi=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=ND(a.y.data[c]);if(d<32)break;c=c+(-1)|0;a.bi=a.bi-32|0;}a.bi=a.bi-d|0;}}
function CW(a,b){var c,d,e,f;c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&b.y.data[d];d=d+1|0;}while(true){f=a.y.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bi=Ba(a.bi,b.bi);GL(a);}
function Ft(a,b){var c,d,e;c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&(b.y.data[d]^(-1));d=d+1|0;}GL(a);}
function Fq(a,b){var c,d,e;c=Z(a.bi,b.bi);a.bi=c;H0(a,(c+31|0)/32|0);c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]|b.y.data[d];d=d+1|0;}}
function E5(a,b){var c,d,e;c=Z(a.bi,b.bi);a.bi=c;H0(a,(c+31|0)/32|0);c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]^b.y.data[d];d=d+1|0;}GL(a);}
function LP(a){return a.bi?0:1;}
function MC(){var a=this;BR.call(a);a.pW=null;a.wG=0;}
function Qo(){var a=this;BR.call(a);a.l_=null;a.lJ=null;}
function ABU(a,b){var c=new Qo();ADD(c,a,b);return c;}
function ADD(a,b,c){BO(a);a.l_=b;a.lJ=c;}
function AFe(a,b,c,d){var e,f,g,h,i;e=a.l_.d(b,c,d);if(e<0)a:{f=a.lJ;g=d.cB;e=d.u;h=b+1|0;e=BD(h,e);if(e>0){d.de=1;e=(-1);}else{i=I(c,b);if(!f.pW.i(i))e=(-1);else{if(Cr(i)){if(e<0&&CO(I(c,h))){e=(-1);break a;}}else if(CO(i)&&b>g&&Cr(I(c,b-1|0))){e=(-1);break a;}e=f.e.d(h,c,d);}}}if(e>=0)return e;return (-1);}
function AMk(a,b){a.e=b;a.lJ.e=b;a.l_.L(b);}
function AFW(a,b){return 1;}
function AFA(a,b){return 1;}
function Dj(){var a=this;BR.call(a);a.dA=null;a.xE=0;}
function AJ3(a){var b=new Dj();TS(b,a);return b;}
function TS(a,b){BO(a);a.dA=b.i0();a.xE=b.Y;}
function AHy(a,b,c,d){var e,f,g,h;e=d.u;if(b<e){f=b+1|0;g=I(c,b);if(a.i(g)){h=a.e.d(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=I(c,f);if(G6(g,f)&&a.i(Eg(g,f)))return a.e.d(b,c,d);}}return (-1);}
function AIa(a,b){return a.dA.i(b);}
function AE$(a,b){if(b instanceof DB)return JI(a.dA,b.fy);if(b instanceof Ea)return JI(a.dA,b.c8);if(b instanceof Dj)return HV(a.dA,b.dA);if(!(b instanceof DZ))return 1;return HV(a.dA,b.eU);}
function AJU(a){return a.dA;}
function AON(a,b){a.e=b;}
function AHK(a,b){return 1;}
var IH=F(Dj);
function AJG(a,b){return a.dA.i(Gd(F_(b)));}
function Y4(){var a=this;BW.call(a);a.qN=null;a.xq=0;}
function AIT(a){var b=new Y4();AL1(b,a);return b;}
function AL1(a,b){Dd(a);a.qN=b.i0();a.xq=b.Y;}
function AJ8(a,b,c){return !a.qN.i(EH(Ej(I(c,b))))?(-1):1;}
function DZ(){var a=this;BW.call(a);a.eU=null;a.xV=0;}
function APh(a){var b=new DZ();AM7(b,a);return b;}
function AM7(a,b){Dd(a);a.eU=b.i0();a.xV=b.Y;}
function Md(a,b,c){return !a.eU.i(I(c,b))?(-1):1;}
function AMG(a,b){if(b instanceof Ea)return JI(a.eU,b.c8);if(b instanceof DZ)return HV(a.eU,b.eU);if(!(b instanceof Dj)){if(!(b instanceof DB))return 1;return 0;}return HV(a.eU,b.dA);}
function OL(){var a=this;BR.call(a);a.gx=null;a.lY=null;a.jd=0;}
function APx(a,b){var c=new OL();AEF(c,a,b);return c;}
function AEF(a,b,c){BO(a);a.gx=b;a.jd=c;}
function AKV(a,b){a.e=b;}
function QB(a){if(a.lY===null)a.lY=G3(a.gx);return a.lY;}
function AEe(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.u;f=Bx(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=I(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?FJ([k,l]):FJ([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.jd;if(b!=n)return (-1);while(true){if(l>=n)return a.e.d(i,c,d);if(m[l]!=a.gx.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=I(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=I(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.jd==3){k=f[0];m=a.gx.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.d(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.jd==2){b=f[0];m=a.gx.data;if(b==m[0]&&f[1]==m[1]){b=a.e.d(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AFM(a,b){return b instanceof OL&&!BE(QB(b),QB(a))?0:1;}
function APv(a,b){return 1;}
function Ea(){BW.call(this);this.c8=0;}
function Zx(a){var b=new Ea();AM$(b,a);return b;}
function AM$(a,b){Dd(a);a.c8=b;}
function AJP(a){return 1;}
function AIO(a,b,c){return a.c8!=I(c,b)?(-1):1;}
function AHv(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return Hi(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=HU(c,a.c8,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.d(b,c,d)>=0)break;}return f;}
function AJX(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hr(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=G9(d,a.c8,c);if(f<0)break a;if(f<b)break a;if(a.e.d(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function APl(a,b){if(b instanceof Ea)return b.c8!=a.c8?0:1;if(!(b instanceof DZ)){if(b instanceof Dj)return b.i(a.c8);if(!(b instanceof DB))return 1;return 0;}return Md(b,0,Wv(a.c8))<=0?0:1;}
function ADp(){BW.call(this);this.mO=0;}
function ANw(a){var b=new ADp();ALC(b,a);return b;}
function ALC(a,b){Dd(a);a.mO=EH(Ej(b));}
function AD9(a,b,c){return a.mO!=EH(Ej(I(c,b)))?(-1):1;}
function X2(){var a=this;BW.call(a);a.vt=0;a.n7=0;}
function AGc(a){var b=new X2();ANV(b,a);return b;}
function ANV(a,b){Dd(a);a.vt=b;a.n7=He(b);}
function AEv(a,b,c){return a.vt!=I(c,b)&&a.n7!=I(c,b)?(-1):1;}
function EZ(){var a=this;BR.call(a);a.hh=0;a.kn=null;a.jO=null;a.jG=0;}
function ATR(a,b){var c=new EZ();N1(c,a,b);return c;}
function N1(a,b,c){BO(a);a.hh=1;a.jO=b;a.jG=c;}
function AQy(a,b){a.e=b;}
function AMl(a,b,c,d){var e,f,g,h,i,j,k,l;e=Bx(4);f=d.u;if(b>=f)return (-1);g=JT(a,b,c,f);h=b+a.hh|0;i=AC3(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Da(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=JT(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AC3(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.hh|0;if(h>=f){b=k;break a;}g=JT(a,h,c,f);b=k;}}}if(b!=a.jG)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.d(h,c,d);if(i[g]!=a.jO.data[g])break;g=g+1|0;}return (-1);}
function Wg(a){var b,c;if(a.kn===null){b=new R;U(b);c=0;while(c<a.jG){HY(b,F5(a.jO.data[c]));c=c+1|0;}a.kn=S(b);}return a.kn;}
function JT(a,b,c,d){var e,f,g;a.hh=1;if(b>=(d-1|0))e=I(c,b);else{d=b+1|0;e=I(c,b);f=I(c,d);if(G6(e,f)){g=B1(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Cr(g[0])&&CO(g[1])?Eg(g[0],g[1]):g[0];a.hh=2;}}return e;}
function AJ9(a,b){return b instanceof EZ&&!BE(Wg(b),Wg(a))?0:1;}
function ANt(a,b){return 1;}
var WT=F(EZ);
var Ts=F(EZ);
var XO=F(CD);
function AGA(a,b,c,d){var e;while(true){e=a.F.d(b,c,d);if(e<=0)break;b=e;}return a.e.d(b,c,d);}
var PE=F(CD);
function ALu(a,b,c,d){var e;e=a.F.d(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.F.d(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.d(b,c,d);}
var Fs=F(CD);
function AOL(a,b,c,d){var e;if(!a.F.E(d))return a.e.d(b,c,d);e=a.F.d(b,c,d);if(e>=0)return e;return a.e.d(b,c,d);}
function AP2(a,b){a.e=b;a.F.L(b);}
var Pd=F(Fs);
function AJS(a,b,c,d){var e;e=a.F.d(b,c,d);if(e<=0)e=b;return a.e.d(e,c,d);}
function ALW(a,b){a.e=b;}
function EY(){var a=this;CD.call(a);a.fI=null;a.dm=0;}
function AXK(a,b,c,d,e){var f=new EY();IF(f,a,b,c,d,e);return f;}
function IF(a,b,c,d,e,f){CZ(a,c,d,e);a.fI=b;a.dm=f;}
function ARl(a,b,c,d){var e,f;e=MH(d,a.dm);if(!a.F.E(d))return a.e.d(b,c,d);if(e>=a.fI.eq)return a.e.d(b,c,d);f=a.dm;e=e+1|0;DW(d,f,e);f=a.F.d(b,c,d);if(f>=0){DW(d,a.dm,0);return f;}f=a.dm;e=e+(-1)|0;DW(d,f,e);if(e>=a.fI.ev)return a.e.d(b,c,d);DW(d,a.dm,0);return (-1);}
var MZ=F(EY);
function AJf(a,b,c,d){var e,f,g;e=0;f=a.fI.eq;a:{while(true){g=a.F.d(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fI.ev)return (-1);return a.e.d(b,c,d);}
var RA=F(CD);
function AQK(a,b,c,d){var e;if(!a.F.E(d))return a.e.d(b,c,d);e=a.e.d(b,c,d);if(e>=0)return e;return a.F.d(b,c,d);}
var QA=F(Fs);
function AFY(a,b,c,d){var e;if(!a.F.E(d))return a.e.d(b,c,d);e=a.e.d(b,c,d);if(e<0)e=a.F.d(b,c,d);return e;}
var Um=F(EY);
function AEX(a,b,c,d){var e,f,g;e=MH(d,a.dm);if(!a.F.E(d))return a.e.d(b,c,d);f=a.fI;if(e>=f.eq){DW(d,a.dm,0);return a.e.d(b,c,d);}if(e<f.ev){DW(d,a.dm,e+1|0);g=a.F.d(b,c,d);}else{g=a.e.d(b,c,d);if(g>=0){DW(d,a.dm,0);return g;}DW(d,a.dm,e+1|0);g=a.F.d(b,c,d);}return g;}
var RB=F(DN);
function ARa(a,b,c,d){var e;e=d.u;if(e>b)return a.e.ca(b,e,c,d);return a.e.d(b,c,d);}
function AOZ(a,b,c,d){var e;e=d.u;if(a.e.ca(b,e,c,d)>=0)return b;return (-1);}
function Om(){DN.call(this);this.kz=null;}
function AMI(a,b,c,d){var e,f;e=d.u;f=Uo(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.ca(b,e,c,d);return a.e.d(b,c,d);}
function AEk(a,b,c,d){var e,f,g,h;e=d.u;f=a.e.b8(b,c,d);if(f<0)return (-1);g=Uo(a,f,e,c);if(g>=0)e=g;g=Z(f,a.e.ca(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.kz.hn(I(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Uo(a,b,c,d){while(true){if(b>=c)return (-1);if(a.kz.hn(I(d,b)))break;b=b+1|0;}return b;}
var Ex=F();
var AXL=null;var AXM=null;function Pf(b){var c;if(!(b&1)){c=AXM;if(c!==null)return c;c=new UV;AXM=c;return c;}c=AXL;if(c!==null)return c;c=new UU;AXL=c;return c;}
var XR=F(CN);
function AEY(a,b,c,d){var e;a:{while(true){if((b+a.T.bQ()|0)>d.u)break a;e=a.T.bl(b,c);if(e<1)break;b=b+e|0;}}return a.e.d(b,c,d);}
var VL=F(Ek);
function ALq(a,b,c,d){var e;if((b+a.T.bQ()|0)<=d.u){e=a.T.bl(b,c);if(e>=1)b=b+e|0;}return a.e.d(b,c,d);}
var O2=F(EQ);
function AOf(a,b,c,d){var e,f,g,h,i;e=a.jf;f=e.ev;g=e.eq;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.T.bQ()|0)>d.u)break a;i=a.T.bl(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.d(b,c,d);}if((b+a.T.bQ()|0)>d.u){d.de=1;return (-1);}i=a.T.bl(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Qu=F(CN);
function AMA(a,b,c,d){var e;while(true){e=a.e.d(b,c,d);if(e>=0)break;if((b+a.T.bQ()|0)<=d.u){e=a.T.bl(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var TF=F(Ek);
function AE8(a,b,c,d){var e;e=a.e.d(b,c,d);if(e>=0)return e;return a.F.d(b,c,d);}
var Rd=F(EQ);
function AOw(a,b,c,d){var e,f,g,h,i,j;e=a.jf;f=e.ev;g=e.eq;h=0;while(true){if(h>=f){a:{while(true){i=a.e.d(b,c,d);if(i>=0)break;if((b+a.T.bQ()|0)<=d.u){i=a.T.bl(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.T.bQ()|0)>d.u){d.de=1;return (-1);}j=a.T.bl(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var JR=F(BC);
function AKt(a,b,c,d){if(b&&!(d.e9&&b==d.cB))return (-1);return a.e.d(b,c,d);}
function AJs(a,b){return 0;}
function ZH(){BC.call(this);this.uX=0;}
function APg(a){var b=new ZH();AJJ(b,a);return b;}
function AJJ(a,b){BO(a);a.uX=b;}
function AFx(a,b,c,d){var e,f,g;e=b<d.u?I(c,b):32;f=!b?32:I(c,b-1|0);g=d.iT?0:d.cB;return (e!=32&&!QF(a,e,b,g,c)?0:1)^(f!=32&&!QF(a,f,b-1|0,g,c)?0:1)^a.uX?(-1):a.e.d(b,c,d);}
function AFL(a,b){return 0;}
function QF(a,b,c,d,e){var f;if(!I2(b)&&b!=95){a:{if(Ch(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=I(e,c);if(I2(f))return 0;if(Ch(f)!=6)return 1;}}return 1;}return 0;}
var Oh=F(BC);
function AJI(a,b,c,d){if(b!=d.hu)return (-1);return a.e.d(b,c,d);}
function ARh(a,b){return 0;}
function Wz(){BC.call(this);this.fS=0;}
function ATk(a){var b=new Wz();ACT(b,a);return b;}
function ACT(a,b){BO(a);a.fS=b;}
function ANc(a,b,c,d){var e,f,g;e=!d.e9?H(c):d.u;if(b>=e){BI(d,a.fS,0);return a.e.d(b,c,d);}f=e-b|0;if(f==2&&I(c,b)==13&&I(c,b+1|0)==10){BI(d,a.fS,0);return a.e.d(b,c,d);}a:{if(f==1){g=I(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BI(d,a.fS,0);return a.e.d(b,c,d);}
function AGq(a,b){var c;c=!C6(b,a.fS)?0:1;BI(b,a.fS,(-1));return c;}
var V9=F(BC);
function AMi(a,b,c,d){if(b<(d.iT?H(c):d.u))return (-1);d.de=1;d.ym=1;return a.e.d(b,c,d);}
function AD7(a,b){return 0;}
function Nb(){BC.call(this);this.rM=null;}
function AGg(a,b,c,d){a:{if(b!=d.u){if(!b)break a;if(d.e9&&b==d.cB)break a;if(a.rM.tc(I(c,b-1|0),I(c,b)))break a;}return (-1);}return a.e.d(b,c,d);}
function AIq(a,b){return 0;}
var ADg=F(BR);
function ATD(){var a=new ADg();AL8(a);return a;}
function AL8(a){BO(a);}
function AQQ(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.de=1;return (-1);}g=I(c,b);if(Cr(g)){h=b+2|0;if(h<=e&&G6(g,I(c,f)))return a.e.d(h,c,d);}return a.e.d(f,c,d);}
function AFO(a,b){a.e=b;}
function AL2(a){return (-2147483602);}
function AFN(a,b){return 1;}
function Za(){BR.call(this);this.k9=null;}
function ATb(a){var b=new Za();AGo(b,a);return b;}
function AGo(a,b){BO(a);a.k9=b;}
function AMc(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.de=1;return (-1);}g=I(c,b);if(Cr(g)){b=b+2|0;if(b<=e){h=I(c,f);if(G6(g,h))return a.k9.hn(Eg(g,h))?(-1):a.e.d(b,c,d);}}return a.k9.hn(g)?(-1):a.e.d(f,c,d);}
function AN8(a,b){a.e=b;}
function AD2(a){return (-2147483602);}
function AQ6(a,b){return 1;}
function AC1(){BC.call(this);this.hb=0;}
function ASL(a){var b=new AC1();AIl(b,a);return b;}
function AIl(a,b){BO(a);a.hb=b;}
function AKb(a,b,c,d){var e;e=!d.e9?H(c):d.u;if(b>=e){BI(d,a.hb,0);return a.e.d(b,c,d);}if((e-b|0)==1&&I(c,b)==10){BI(d,a.hb,1);return a.e.d(b+1|0,c,d);}return (-1);}
function AIk(a,b){var c;c=!C6(b,a.hb)?0:1;BI(b,a.hb,(-1));return c;}
function ABc(){BC.call(this);this.hg=0;}
function ASq(a){var b=new ABc();AIU(b,a);return b;}
function AIU(a,b){BO(a);a.hg=b;}
function AMh(a,b,c,d){if((!d.e9?H(c)-b|0:d.u-b|0)<=0){BI(d,a.hg,0);return a.e.d(b,c,d);}if(I(c,b)!=10)return (-1);BI(d,a.hg,1);return a.e.d(b+1|0,c,d);}
function AH7(a,b){var c;c=!C6(b,a.hg)?0:1;BI(b,a.hg,(-1));return c;}
function XZ(){BC.call(this);this.fk=0;}
function ARK(a){var b=new XZ();ARm(b,a);return b;}
function ARm(a,b){BO(a);a.fk=b;}
function AJi(a,b,c,d){var e,f,g;e=!d.e9?H(c)-b|0:d.u-b|0;if(!e){BI(d,a.fk,0);return a.e.d(b,c,d);}if(e<2){f=I(c,b);g=97;}else{f=I(c,b);g=I(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BI(d,a.fk,0);return a.e.d(b,c,d);case 13:if(g!=10){BI(d,a.fk,0);return a.e.d(b,c,d);}BI(d,a.fk,0);return a.e.d(b,c,d);default:}return (-1);}
function AGt(a,b){var c;c=!C6(b,a.fk)?0:1;BI(b,a.fk,(-1));return c;}
function GJ(){var a=this;BR.call(a);a.nA=0;a.gr=0;}
function ATM(a,b){var c=new GJ();OS(c,a,b);return c;}
function OS(a,b,c){BO(a);a.nA=b;a.gr=c;}
function AE3(a,b,c,d){var e,f,g,h;e=FO(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=0;while(true){if(f>=H(e)){BI(d,a.gr,H(e));return a.e.d(b+H(e)|0,c,d);}g=I(e,f);h=b+f|0;if(g!=I(c,h)&&He(I(e,f))!=I(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ANp(a,b){a.e=b;}
function FO(a,b){var c,d;c=a.nA;d=Fh(b,c);c=H3(b,c);return (c|d|(c-d|0))>=0&&c<=H(b.la)?B9(b.la,d,c):null;}
function ANM(a,b){var c;c=!C6(b,a.gr)?0:1;BI(b,a.gr,(-1));return c;}
var AC7=F(GJ);
function ARQ(a,b){var c=new AC7();APR(c,a,b);return c;}
function APR(a,b,c){OS(a,b,c);}
function AGz(a,b,c,d){var e,f;e=FO(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=!TR(c,e,b)?(-1):H(e);if(f<0)return (-1);BI(d,a.gr,f);return a.e.d(b+f|0,c,d);}return (-1);}
function APF(a,b,c,d){var e,f;e=FO(a,d);f=d.cB;if(e!==null&&(b+H(e)|0)<=f){while(true){if(b>f)return (-1);b=PH(c,e,b);if(b<0)return (-1);if(a.e.d(b+H(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AEM(a,b,c,d,e){var f,g;f=FO(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=PT(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.d(g+H(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ALi(a,b){return 1;}
var AAp=F(GJ);
function ASr(a,b){var c=new AAp();AIh(c,a,b);return c;}
function AIh(a,b,c){OS(a,b,c);}
function AKL(a,b,c,d){var e,f;e=FO(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=0;while(true){if(f>=H(e)){BI(d,a.gr,H(e));return a.e.d(b+H(e)|0,c,d);}if(EH(Ej(I(e,f)))!=EH(Ej(I(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Ob=F(FW);
function AHX(a,b,c,d,e){MR(a,b,c,d,e);return a;}
function AFC(a,b,c,d){WH(a,b,c,d);return a;}
function AF6(a,b){I$(a,b);}
function AO1(a,b,c){WY(a,b,c);return a;}
function RD(){var a=this;BW.call(a);a.ci=null;a.kq=null;a.lh=null;}
function AGU(a,b,c){return !JQ(a,c,b)?(-1):a.by;}
function AFt(a,b,c,d){var e,f,g;e=d.u;while(true){if(b>e)return (-1);f=I(a.ci,a.by-1|0);a:{while(true){g=a.by;if(b>(e-g|0)){b=(-1);break a;}g=I(c,(b+g|0)-1|0);if(g==f&&JQ(a,c,b))break;b=b+SJ(a.kq,g)|0;}}if(b<0)return (-1);if(a.e.d(b+a.by|0,c,d)>=0)break;b=b+1|0;}return b;}
function AIo(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=I(a.ci,0);g=(H(d)-c|0)-a.by|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=I(d,c);if(g==f&&JQ(a,d,c))break;c=c-SJ(a.lh,g)|0;}}if(c<0)return (-1);if(a.e.d(c+a.by|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AI0(a,b){var c;if(b instanceof Ea)return b.c8!=I(a.ci,0)?0:1;if(b instanceof DZ)return Md(b,0,B9(a.ci,0,1))<=0?0:1;if(!(b instanceof Dj)){if(!(b instanceof DB))return 1;return H(a.ci)>1&&b.fy==Eg(I(a.ci,0),I(a.ci,1))?1:0;}a:{b:{b=b;if(!b.i(I(a.ci,0))){if(H(a.ci)<=1)break b;if(!b.i(Eg(I(a.ci,0),I(a.ci,1))))break b;}c=1;break a;}c=0;}return c;}
function JQ(a,b,c){var d;d=0;while(d<a.by){if(I(b,d+c|0)!=I(a.ci,d))return 0;d=d+1|0;}return 1;}
function XY(){BW.call(this);this.iW=null;}
function ATQ(a){var b=new XY();APm(b,a);return b;}
function APm(a,b){var c,d,e;Dd(a);c=new R;U(c);d=0;while(true){e=BD(d,b.I);if(e>=0){a.iW=S(c);a.by=c.I;return;}if(d<0)break;if(e>=0)break;BX(c,EH(Ej(b.M.data[d])));d=d+1|0;}b=new BV;X(b);L(b);}
function AKT(a,b,c){var d;d=0;while(true){if(d>=H(a.iW))return H(a.iW);if(I(a.iW,d)!=EH(Ej(I(c,b+d|0))))break;d=d+1|0;}return (-1);}
function M6(){BW.call(this);this.g_=null;}
function AOj(a,b,c){var d,e,f;d=0;while(true){if(d>=H(a.g_))return H(a.g_);e=I(a.g_,d);f=b+d|0;if(e!=I(c,f)&&He(I(a.g_,d))!=I(c,f))break;d=d+1|0;}return (-1);}
var GI=F();
var AXN=null;var AXO=null;var AXJ=null;function ANX(){ANX=Bm(GI);AHf();}
function AHf(){AXN=ATs();AXO=ASD();AXJ=G($rt_arraycls(B),[G(B,[C(320),ATN()]),G(B,[C(321),ARH()]),G(B,[C(322),ATo()]),G(B,[C(323),ATy()]),G(B,[C(324),AXO]),G(B,[C(325),ASQ()]),G(B,[C(326),ASA()]),G(B,[C(327),ARR()]),G(B,[C(328),ARP()]),G(B,[C(329),ARW()]),G(B,[C(330),AR_()]),G(B,[C(331),ARU()]),G(B,[C(332),AS8()]),G(B,[C(333),ARC()]),G(B,[C(334),ATt()]),G(B,[C(335),AR$()]),G(B,[C(336),ASO()]),G(B,[C(337),AR8()]),G(B,[C(338),ASP()]),G(B,[C(339),ARY()]),G(B,[C(340),ATC()]),G(B,[C(341),AR2()]),G(B,[C(342),ASV()]),
G(B,[C(343),ATn()]),G(B,[C(344),ATl()]),G(B,[C(345),ATz()]),G(B,[C(346),ARX()]),G(B,[C(347),ATa()]),G(B,[C(348),AXN]),G(B,[C(349),AS0()]),G(B,[C(350),ARS()]),G(B,[C(351),AXN]),G(B,[C(352),ARx()]),G(B,[C(353),AXO]),G(B,[C(354),ASh()]),G(B,[C(355),N(0,127)]),G(B,[C(356),N(128,255)]),G(B,[C(357),N(256,383)]),G(B,[C(358),N(384,591)]),G(B,[C(359),N(592,687)]),G(B,[C(360),N(688,767)]),G(B,[C(361),N(768,879)]),G(B,[C(362),N(880,1023)]),G(B,[C(363),N(1024,1279)]),G(B,[C(364),N(1280,1327)]),G(B,[C(365),N(1328,1423)]),
G(B,[C(366),N(1424,1535)]),G(B,[C(367),N(1536,1791)]),G(B,[C(368),N(1792,1871)]),G(B,[C(369),N(1872,1919)]),G(B,[C(370),N(1920,1983)]),G(B,[C(371),N(2304,2431)]),G(B,[C(372),N(2432,2559)]),G(B,[C(373),N(2560,2687)]),G(B,[C(374),N(2688,2815)]),G(B,[C(375),N(2816,2943)]),G(B,[C(376),N(2944,3071)]),G(B,[C(377),N(3072,3199)]),G(B,[C(378),N(3200,3327)]),G(B,[C(379),N(3328,3455)]),G(B,[C(380),N(3456,3583)]),G(B,[C(381),N(3584,3711)]),G(B,[C(382),N(3712,3839)]),G(B,[C(383),N(3840,4095)]),G(B,[C(384),N(4096,4255)]),
G(B,[C(385),N(4256,4351)]),G(B,[C(386),N(4352,4607)]),G(B,[C(387),N(4608,4991)]),G(B,[C(388),N(4992,5023)]),G(B,[C(389),N(5024,5119)]),G(B,[C(390),N(5120,5759)]),G(B,[C(391),N(5760,5791)]),G(B,[C(392),N(5792,5887)]),G(B,[C(393),N(5888,5919)]),G(B,[C(394),N(5920,5951)]),G(B,[C(395),N(5952,5983)]),G(B,[C(396),N(5984,6015)]),G(B,[C(397),N(6016,6143)]),G(B,[C(398),N(6144,6319)]),G(B,[C(399),N(6400,6479)]),G(B,[C(400),N(6480,6527)]),G(B,[C(401),N(6528,6623)]),G(B,[C(402),N(6624,6655)]),G(B,[C(403),N(6656,6687)]),
G(B,[C(404),N(7424,7551)]),G(B,[C(405),N(7552,7615)]),G(B,[C(406),N(7616,7679)]),G(B,[C(407),N(7680,7935)]),G(B,[C(408),N(7936,8191)]),G(B,[C(409),N(8192,8303)]),G(B,[C(410),N(8304,8351)]),G(B,[C(411),N(8352,8399)]),G(B,[C(412),N(8400,8447)]),G(B,[C(413),N(8448,8527)]),G(B,[C(414),N(8528,8591)]),G(B,[C(415),N(8592,8703)]),G(B,[C(416),N(8704,8959)]),G(B,[C(417),N(8960,9215)]),G(B,[C(418),N(9216,9279)]),G(B,[C(419),N(9280,9311)]),G(B,[C(420),N(9312,9471)]),G(B,[C(421),N(9472,9599)]),G(B,[C(422),N(9600,9631)]),
G(B,[C(423),N(9632,9727)]),G(B,[C(424),N(9728,9983)]),G(B,[C(425),N(9984,10175)]),G(B,[C(426),N(10176,10223)]),G(B,[C(427),N(10224,10239)]),G(B,[C(428),N(10240,10495)]),G(B,[C(429),N(10496,10623)]),G(B,[C(430),N(10624,10751)]),G(B,[C(431),N(10752,11007)]),G(B,[C(432),N(11008,11263)]),G(B,[C(433),N(11264,11359)]),G(B,[C(434),N(11392,11519)]),G(B,[C(435),N(11520,11567)]),G(B,[C(436),N(11568,11647)]),G(B,[C(437),N(11648,11743)]),G(B,[C(438),N(11776,11903)]),G(B,[C(439),N(11904,12031)]),G(B,[C(440),N(12032,12255)]),
G(B,[C(441),N(12272,12287)]),G(B,[C(442),N(12288,12351)]),G(B,[C(443),N(12352,12447)]),G(B,[C(444),N(12448,12543)]),G(B,[C(445),N(12544,12591)]),G(B,[C(446),N(12592,12687)]),G(B,[C(447),N(12688,12703)]),G(B,[C(448),N(12704,12735)]),G(B,[C(449),N(12736,12783)]),G(B,[C(450),N(12784,12799)]),G(B,[C(451),N(12800,13055)]),G(B,[C(452),N(13056,13311)]),G(B,[C(453),N(13312,19893)]),G(B,[C(454),N(19904,19967)]),G(B,[C(455),N(19968,40959)]),G(B,[C(456),N(40960,42127)]),G(B,[C(457),N(42128,42191)]),G(B,[C(458),N(42752,
42783)]),G(B,[C(459),N(43008,43055)]),G(B,[C(460),N(44032,55203)]),G(B,[C(461),N(55296,56191)]),G(B,[C(462),N(56192,56319)]),G(B,[C(463),N(56320,57343)]),G(B,[C(464),N(57344,63743)]),G(B,[C(465),N(63744,64255)]),G(B,[C(466),N(64256,64335)]),G(B,[C(467),N(64336,65023)]),G(B,[C(468),N(65024,65039)]),G(B,[C(469),N(65040,65055)]),G(B,[C(470),N(65056,65071)]),G(B,[C(471),N(65072,65103)]),G(B,[C(472),N(65104,65135)]),G(B,[C(473),N(65136,65279)]),G(B,[C(474),N(65280,65519)]),G(B,[C(475),N(0,1114111)]),G(B,[C(476),
ARV()]),G(B,[C(477),BJ(0,1)]),G(B,[C(478),If(62,1)]),G(B,[C(479),BJ(1,1)]),G(B,[C(480),BJ(2,1)]),G(B,[C(481),BJ(3,0)]),G(B,[C(482),BJ(4,0)]),G(B,[C(483),BJ(5,1)]),G(B,[C(484),If(448,1)]),G(B,[C(485),BJ(6,1)]),G(B,[C(486),BJ(7,0)]),G(B,[C(487),BJ(8,1)]),G(B,[C(488),If(3584,1)]),G(B,[C(489),BJ(9,1)]),G(B,[C(490),BJ(10,1)]),G(B,[C(491),BJ(11,1)]),G(B,[C(492),If(28672,0)]),G(B,[C(493),BJ(12,0)]),G(B,[C(494),BJ(13,0)]),G(B,[C(495),BJ(14,0)]),G(B,[C(496),ASv(983040,1,1)]),G(B,[C(497),BJ(15,0)]),G(B,[C(498),BJ(16,
1)]),G(B,[C(499),BJ(18,1)]),G(B,[C(500),ASH(19,0,1)]),G(B,[C(501),If(1643118592,1)]),G(B,[C(502),BJ(20,0)]),G(B,[C(503),BJ(21,0)]),G(B,[C(504),BJ(22,0)]),G(B,[C(505),BJ(23,0)]),G(B,[C(506),BJ(24,1)]),G(B,[C(507),If(2113929216,1)]),G(B,[C(508),BJ(25,1)]),G(B,[C(509),BJ(26,0)]),G(B,[C(510),BJ(27,0)]),G(B,[C(511),BJ(28,1)]),G(B,[C(512),BJ(29,0)]),G(B,[C(513),BJ(30,0)])]);}
function Mm(){BW.call(this);this.q8=0;}
function AOo(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.q8!=Gd(F_(Eg(e,d)))?(-1):2;}
function Ks(){BR.call(this);this.f$=0;}
function AL6(a){var b=new Ks();AF3(b,a);return b;}
function AF3(a,b){BO(a);a.f$=b;}
function AMx(a,b){a.e=b;}
function AGr(a,b,c,d){var e,f;e=b+1|0;if(e>d.u){d.de=1;return (-1);}f=I(c,b);if(b>d.cB&&Cr(I(c,b-1|0)))return (-1);if(a.f$!=f)return (-1);return a.e.d(e,c,d);}
function AIX(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return Hi(a,b,c,d);e=d.cB;f=d.u;while(true){if(b>=f)return (-1);g=HU(c,a.f$,b);if(g<0)return (-1);if(g>e&&Cr(I(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.d(b,c,d)>=0)break;}return g;}
function AG1(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hr(a,b,c,d,e);f=e.cB;a:{while(true){if(c<b)return (-1);g=G9(d,a.f$,c);if(g<0)break a;if(g<b)break a;if(g>f&&Cr(I(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.d(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AEJ(a,b){if(b instanceof Ea)return 0;if(b instanceof DZ)return 0;if(b instanceof Dj)return 0;if(b instanceof DB)return 0;if(b instanceof KL)return 0;if(!(b instanceof Ks))return 1;return b.f$!=a.f$?0:1;}
function AO_(a,b){return 1;}
function KL(){BR.call(this);this.fF=0;}
function AJm(a){var b=new KL();AMd(b,a);return b;}
function AMd(a,b){BO(a);a.fF=b;}
function AF5(a,b){a.e=b;}
function AEo(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;g=BD(f,e);if(g>0){d.de=1;return (-1);}h=I(c,b);if(g<0&&CO(I(c,f)))return (-1);if(a.fF!=h)return (-1);return a.e.d(f,c,d);}
function AMU(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hi(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=HU(c,a.fF,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CO(I(c,b))){b=f+2|0;continue;}if(a.e.d(b,c,d)>=0)break;}return f;}
function AOh(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hr(a,b,c,d,e);f=e.u;a:{while(true){if(c<b)return (-1);g=G9(d,a.fF,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CO(I(d,c))){c=g+(-1)|0;continue;}if(a.e.d(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AGV(a,b){if(b instanceof Ea)return 0;if(b instanceof DZ)return 0;if(b instanceof Dj)return 0;if(b instanceof DB)return 0;if(b instanceof Ks)return 0;if(!(b instanceof KL))return 1;return b.fF!=a.fF?0:1;}
function AM5(a,b){return 1;}
function DB(){var a=this;BW.call(a);a.jz=0;a.il=0;a.fy=0;}
function ANN(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.jz==e&&a.il==d?2:(-1);}
function ALP(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hi(a,b,c,d);e=d.u;while(b<e){b=HU(c,a.jz,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=I(c,b);if(a.il==f&&a.e.d(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AF4(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hr(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=G9(d,a.il,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.jz==I(d,f)&&a.e.d(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ANy(a,b){if(b instanceof DB)return b.fy!=a.fy?0:1;if(b instanceof Dj)return b.i(a.fy);if(b instanceof Ea)return 0;if(!(b instanceof DZ))return 1;return 0;}
var UU=F(Ex);
function AGd(a,b){return b!=10?0:1;}
function ANG(a,b,c){return b!=10?0:1;}
var UV=F(Ex);
function AOA(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AQp(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ACa(){var a=this;B.call(a);a.mA=null;a.jT=null;a.gO=0;a.v9=0;}
function AL0(a){var b=new ACa();AJH(b,a);return b;}
function AJH(a,b){var c,d;while(true){c=a.gO;if(b<c)break;a.gO=c<<1|1;}d=c<<1|1;a.gO=d;d=d+1|0;a.mA=Bx(d);a.jT=Bx(d);a.v9=b;}
function Rh(a,b,c){var d,e,f,g;d=0;e=a.gO;f=b&e;while(true){g=a.mA.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jT.data[f]=c;}
function SJ(a,b){var c,d,e,f;c=a.gO;d=b&c;e=0;while(true){f=a.mA.data[d];if(!f)break;if(f==b)return a.jT.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.v9;}
var Yl=F();
var Kp=F(W);
function ATs(){var a=new Kp();AJg(a);return a;}
function AJg(a){}
function AAw(a){return Ck(BT(C7(),9,13),32);}
var Jt=F(W);
function ASD(){var a=new Jt();AO6(a);return a;}
function AO6(a){}
function AA5(a){return BT(C7(),48,57);}
var AB5=F(W);
function ATN(){var a=new AB5();AID(a);return a;}
function AID(a){}
function AN$(a){return BT(C7(),97,122);}
var ACA=F(W);
function ARH(){var a=new ACA();AJL(a);return a;}
function AJL(a){}
function APb(a){return BT(C7(),65,90);}
var ACD=F(W);
function ATo(){var a=new ACD();AFu(a);return a;}
function AFu(a){}
function AHz(a){return BT(C7(),0,127);}
var Kh=F(W);
function ATy(){var a=new Kh();AGC(a);return a;}
function AGC(a){}
function Zf(a){return BT(BT(C7(),97,122),65,90);}
var K1=F(Kh);
function ASQ(){var a=new K1();AJq(a);return a;}
function AJq(a){}
function Z6(a){return BT(Zf(a),48,57);}
var ADT=F(W);
function ASA(){var a=new ADT();ALx(a);return a;}
function ALx(a){}
function AIW(a){return BT(BT(BT(C7(),33,64),91,96),123,126);}
var L_=F(K1);
function ARR(){var a=new L_();ANi(a);return a;}
function ANi(a){}
function XX(a){return BT(BT(BT(Z6(a),33,64),91,96),123,126);}
var AAJ=F(L_);
function ARP(){var a=new AAJ();AOX(a);return a;}
function AOX(a){}
function ALc(a){return Ck(XX(a),32);}
var AAZ=F(W);
function ARW(){var a=new AAZ();AOl(a);return a;}
function AOl(a){}
function AGO(a){return Ck(Ck(C7(),32),9);}
var Zz=F(W);
function AR_(){var a=new Zz();AQg(a);return a;}
function AQg(a){}
function AK_(a){return Ck(BT(C7(),0,31),127);}
var Zn=F(W);
function ARU(){var a=new Zn();AFK(a);return a;}
function AFK(a){}
function AQt(a){return BT(BT(BT(C7(),48,57),97,102),65,70);}
var ACG=F(W);
function AS8(){var a=new ACG();AFh(a);return a;}
function AFh(a){}
function ALY(a){var b;b=new SU;b.xD=a;Bq(b);b.J=1;return b;}
var AD1=F(W);
function ARC(){var a=new AD1();AND(a);return a;}
function AND(a){}
function AEh(a){var b;b=new MA;b.xL=a;Bq(b);b.J=1;return b;}
var ACb=F(W);
function ATt(){var a=new ACb();AFw(a);return a;}
function AFw(a){}
function AJn(a){var b;b=new RV;b.xm=a;Bq(b);return b;}
var ABW=F(W);
function AR$(){var a=new ABW();ALa(a);return a;}
function ALa(a){}
function ANT(a){var b;b=new RU;b.xe=a;Bq(b);return b;}
var ACU=F(W);
function ASO(){var a=new ACU();AGy(a);return a;}
function AGy(a){}
function AGL(a){var b;b=new Wi;b.yu=a;Bq(b);Hy(b.G,0,2048);b.J=1;return b;}
var YB=F(W);
function AR8(){var a=new YB();AF_(a);return a;}
function AF_(a){}
function AG$(a){var b;b=new OV;b.xZ=a;Bq(b);b.J=1;return b;}
var Ye=F(W);
function ASP(){var a=new Ye();AKQ(a);return a;}
function AKQ(a){}
function AQm(a){var b;b=new N8;b.yU=a;Bq(b);b.J=1;return b;}
var ACi=F(W);
function ARY(){var a=new ACi();ALy(a);return a;}
function ALy(a){}
function AD$(a){var b;b=new QS;b.xF=a;Bq(b);return b;}
var ACs=F(W);
function ATC(){var a=new ACs();AI9(a);return a;}
function AI9(a){}
function AKg(a){var b;b=new Mt;b.wA=a;Bq(b);b.J=1;return b;}
var ZX=F(W);
function AR2(){var a=new ZX();AEN(a);return a;}
function AEN(a){}
function AHk(a){var b;b=new My;b.x2=a;Bq(b);b.J=1;return b;}
var AA4=F(W);
function ASV(){var a=new AA4();AGe(a);return a;}
function AGe(a){}
function AIt(a){var b;b=new NG;b.yr=a;Bq(b);b.J=1;return b;}
var ADz=F(W);
function ATn(){var a=new ADz();AKm(a);return a;}
function AKm(a){}
function AKj(a){var b;b=new Ph;b.yG=a;Bq(b);b.J=1;return b;}
var ACp=F(W);
function ATl(){var a=new ACp();ALR(a);return a;}
function ALR(a){}
function APy(a){var b;b=new Pv;b.xp=a;Bq(b);return b;}
var AAm=F(W);
function ATz(){var a=new AAm();AGa(a);return a;}
function AGa(a){}
function AM_(a){var b;b=new Tm;b.x$=a;Bq(b);return b;}
var ZV=F(W);
function ARX(){var a=new ZV();ANU(a);return a;}
function ANU(a){}
function ALQ(a){var b;b=new SB;b.wE=a;Bq(b);b.J=1;return b;}
var ADX=F(W);
function ATa(){var a=new ADX();AI3(a);return a;}
function AI3(a){}
function AN3(a){var b;b=new MI;b.y3=a;Bq(b);b.J=1;return b;}
var IV=F(W);
function AS0(){var a=new IV();AHr(a);return a;}
function AHr(a){}
function AA1(a){return Ck(BT(BT(BT(C7(),97,122),65,90),48,57),95);}
var ACY=F(IV);
function ARS(){var a=new ACY();AJa(a);return a;}
function AJa(a){}
function ALB(a){var b;b=Ee(AA1(a),1);b.J=1;return b;}
var AAN=F(Kp);
function ARx(){var a=new AAN();AP4(a);return a;}
function AP4(a){}
function AFq(a){var b;b=Ee(AAw(a),1);b.J=1;return b;}
var ZQ=F(Jt);
function ASh(){var a=new ZQ();AJ6(a);return a;}
function AJ6(a){}
function AIK(a){var b;b=Ee(AA5(a),1);b.J=1;return b;}
function Zs(){var a=this;W.call(a);a.qW=0;a.rG=0;}
function N(a,b){var c=new Zs();AQj(c,a,b);return c;}
function AQj(a,b,c){a.qW=b;a.rG=c;}
function AKx(a){return BT(C7(),a.qW,a.rG);}
var ZM=F(W);
function ARV(){var a=new ZM();AQC(a);return a;}
function AQC(a){}
function AQa(a){return BT(BT(C7(),65279,65279),65520,65533);}
function AAA(){var a=this;W.call(a);a.l5=0;a.jF=0;a.pr=0;}
function BJ(a,b){var c=new AAA();AGs(c,a,b);return c;}
function ASH(a,b,c){var d=new AAA();AQl(d,a,b,c);return d;}
function AGs(a,b,c){a.jF=c;a.l5=b;}
function AQl(a,b,c,d){a.pr=d;a.jF=c;a.l5=b;}
function AH0(a){var b;b=ATJ(a.l5);if(a.pr)Hy(b.G,0,2048);b.J=a.jF;return b;}
function AAK(){var a=this;W.call(a);a.l3=0;a.jW=0;a.nM=0;}
function If(a,b){var c=new AAK();AHl(c,a,b);return c;}
function ASv(a,b,c){var d=new AAK();AEa(d,a,b,c);return d;}
function AHl(a,b,c){a.jW=c;a.l3=b;}
function AEa(a,b,c,d){a.nM=d;a.jW=c;a.l3=b;}
function AD_(a){var b;b=new RM;ABG(b,a.l3);if(a.nM)Hy(b.G,0,2048);b.J=a.jW;return b;}
var Zv=F();
var Y2=F();
function AAi(b){var c,d,e,f,g,h,i;c=AOb(E3(b));d=Jh(c);e=Bx(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+Jh(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=MY(c);h=h+1|0;}return e;}
function J1(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Nd(){var a=this;B.call(a);a.pV=0;a.r3=0;a.qb=null;}
function AHY(a,b,c){var d=new Nd();AOV(d,a,b,c);return d;}
function AOV(a,b,c,d){a.pV=b;a.r3=c;a.qb=d;}
function ACl(){var a=this;B.call(a);a.oG=null;a.q4=0;}
function AOb(a){var b=new ACl();AGY(b,a);return b;}
function AGY(a,b){a.oG=b;}
var AAh=F();
function Jh(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.oG.data;f=b.q4;b.q4=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+T(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function MY(b){var c,d;c=Jh(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var T7=F(EF);
function W0(a){KU(a);return a.fT;}
var Rb=F(EF);
function Zb(){B.call(this);this.Ko=null;}
function UP(){var a=this;B.call(a);a.y5=null;a.i4=null;}
function AHE(a,b){var c;c=a.i4;b=b;a.i4=OR(!c.mu&&!b.d4?0:1);return 1;}
function VQ(){var a=this;Q.call(a);a.oa=null;a.yz=null;}
function AHG(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b5^C_(a.oa,c):0;}
function VO(){var a=this;Q.call(a);a.uo=null;a.u_=null;a.yc=null;}
function AEB(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b5^C_(a.uo,c):0;return a.u_.i(b)&&!d?1:0;}
function Or(){var a=this;Q.call(a);a.is=null;a.wH=null;}
function AKn(a,b){return a.Y^C_(a.is,b);}
function AIy(a){var b,c,d;b=new R;U(b);c=GT(a.is,0);while(c>=0){HY(b,F5(c));BX(b,124);c=GT(a.is,c+1|0);}d=b.I;if(d>0)VF(b,d-1|0);return S(b);}
function Oy(){var a=this;Q.call(a);a.ro=null;a.xJ=null;}
function ANR(a,b){return a.ro.i(b);}
function Ow(){var a=this;Q.call(a);a.jL=0;a.o_=null;a.kH=null;}
function AOn(a,b){return !(a.jL^C_(a.kH.C,b))&&!(a.jL^a.kH.dI^a.o_.i(b))?0:1;}
function Ox(){var a=this;Q.call(a);a.jU=0;a.uL=null;a.lH=null;}
function AKS(a,b){return !(a.jU^C_(a.lH.C,b))&&!(a.jU^a.lH.dI^a.uL.i(b))?1:0;}
function OB(){var a=this;Q.call(a);a.vI=0;a.uV=null;a.uG=null;a.wZ=null;}
function AHc(a,b){return a.vI^(!a.uV.i(b)&&!a.uG.i(b)?0:1);}
function OC(){var a=this;Q.call(a);a.rC=0;a.rb=null;a.qx=null;a.y0=null;}
function AD3(a,b){return a.rC^(!a.rb.i(b)&&!a.qx.i(b)?0:1)?0:1;}
function Oz(){var a=this;Q.call(a);a.qf=null;a.y2=null;}
function AIE(a,b){return CL(a.qf,b);}
function OA(){var a=this;Q.call(a);a.u7=null;a.xa=null;}
function AKU(a,b){return CL(a.u7,b)?0:1;}
function OD(){var a=this;Q.call(a);a.rV=null;a.rf=0;a.tV=null;}
function APL(a,b){return !CL(a.rV,b)&&!(a.rf^C_(a.tV.C,b))?0:1;}
function OE(){var a=this;Q.call(a);a.sy=null;a.sT=0;a.sf=null;}
function AGE(a,b){return !CL(a.sy,b)&&!(a.sT^C_(a.sf.C,b))?1:0;}
function Oq(){var a=this;Q.call(a);a.tJ=0;a.uK=null;a.vn=null;a.wM=null;}
function ARu(a,b){return !(a.tJ^a.uK.i(b))&&!CL(a.vn,b)?0:1;}
function O5(){var a=this;Q.call(a);a.vj=0;a.m_=null;a.nS=null;a.w8=null;}
function AII(a,b){return !(a.vj^a.m_.i(b))&&!CL(a.nS,b)?1:0;}
function Oo(){var a=this;Q.call(a);a.pK=null;a.xc=null;}
function AGD(a,b){return CL(a.pK,b);}
function Op(){var a=this;Q.call(a);a.pR=null;a.yW=null;}
function AIg(a,b){return CL(a.pR,b)?0:1;}
function Ou(){var a=this;Q.call(a);a.vE=null;a.sq=0;a.wu=null;}
function AJK(a,b){return CL(a.vE,b)&&a.sq^C_(a.wu.C,b)?1:0;}
function On(){var a=this;Q.call(a);a.ti=null;a.rE=0;a.so=null;}
function APi(a,b){return CL(a.ti,b)&&a.rE^C_(a.so.C,b)?0:1;}
function Os(){var a=this;Q.call(a);a.tZ=0;a.n$=null;a.rz=null;a.wY=null;}
function AFG(a,b){return a.tZ^a.n$.i(b)&&CL(a.rz,b)?1:0;}
function Ot(){var a=this;Q.call(a);a.s_=0;a.m0=null;a.tH=null;a.xf=null;}
function AM4(a,b){return a.s_^a.m0.i(b)&&CL(a.tH,b)?0:1;}
var Fz=F(Cj);
var AXl=null;var AXk=null;var AXP=null;function SE(){SE=Bm(Fz);ARb();}
function AOm(a,b){var c=new Fz();AAr(c,a,b);return c;}
function AAr(a,b,c){SE();C9(a,b,c);}
function ARb(){var b;AXl=AOm(C(514),0);b=AOm(C(515),1);AXk=b;AXP=G(Fz,[AXl,b]);}
function XJ(){B.call(this);this.p6=null;}
var Lu=F(0);
function SA(){var a=this;B.call(a);a.w4=null;a.uO=null;a.iM=null;a.ck=null;a.it=0;a.ky=0;}
function Mw(a,b){var c,d,e;c=H(a.iM);if(b>=0&&b<=c){W8(a.ck,null,(-1),(-1));d=a.ck;d.jg=1;d.d9=b;c=d.hu;if(c<0)c=b;d.hu=c;b=a.uO.b8(b,a.iM,d);if(b==(-1))a.ck.de=1;if(b>=0){d=a.ck;if(d.iN){e=d.dB.data;if(e[0]==(-1)){c=d.d9;e[0]=c;e[1]=c;}d.hu=Ix(d);return 1;}}a.ck.d9=(-1);return 0;}d=new BV;Bp(d,D7(b));L(d);}
function ADy(a){return O1(a.ck,0);}
function ZR(a){return RX(a.ck,0);}
function Ys(a){return a.ck.iT;}
var Ti=F();
var AXh=null;function AS5(){AS5=Bm(Ti);AE2();}
function AE2(){var b,c;SE();b=Bx((AXP.gv()).data.length);c=b.data;AXh=b;c[AXl.gk]=1;c[AXk.gk]=2;}
function SK(){B.call(this);this.vC=null;}
function ANC(a,b){var c,d,e;F$(a.vC);c=AWb;d=Zj(C(516));if(!La()){b=new Bt;Bp(b,C(307));Lz(d,b);}else{e=$rt_globals.navigator.clipboard;b=M2(E3(b));b=e.writeText(b);e=new T_;e.x6=c;c=ADV(d);b.then(Bn(e,"f"),Bn(c,"f"));}}
function Xd(){B.call(this);this.mT=null;}
function Lz(a,b){var c,d;c=a.mT;d=b.lV;b=new R;U(b);K(K(b,c),d);$rt_globals.console.info($rt_ustr(S(b)));}
function Jd(){var a=this;B.call(a);a.gZ=null;a.yM=null;}
var AAI=F();
var MU=F(F7);
function AH5(a,b,c,d){var e,f,g;e=0;f=d.u;a:{while(true){if(b>f){b=e;break a;}g=Fh(d,a.S);Dc(d,a.S,b);e=a.cK.d(b,c,d);if(e>=0)break;Dc(d,a.S,g);b=b+1|0;}}return b;}
function ARk(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fh(e,a.S);Dc(e,a.S,c);f=a.cK.d(c,d,e);if(f>=0)break;Dc(e,a.S,g);c=c+(-1)|0;}}return c;}
function AGp(a){return null;}
var L3=F(Bt);
function P0(){var a=this;B.call(a);a.t9=null;a.t8=null;}
function PZ(){B.call(this);this.n1=null;}
function Rr(){B.call(this);this.s9=null;}
function AGm(a,b){IB(a.s9,b);}
var Yy=F();
function Y9(b){var c,d,e,f,g,h,i,j;c=AFT();d=Cb(b);Bi(c,d);e=0;f=0;while(f<d){g=BG(b,f);h=G5(g);Bi(c,h);i=0;while(i<h){j=KA(g,i);Ga(c,e,Lt(j));e=e+Lt(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return P4(c);}
function YF(b){var c,d,e,f,g,h,i,j,k;c=V(b);d=P(HH,c);e=d.data;f=0;while(f<c){a:{g=V(b);if(g!=(-1)){h=V(b);i=V(b);if(i==(-1)){j=new HH;j.fL=h;e[g]=j;}else{j=new HH;j.fL=h;j.lm=Bx(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].lm.data[k]=V(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function P2(){B.call(this);this.re=null;}
function AQ1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.re;d=CF(c[0]);c=Lr(d);e=new UX;d=YF(c);f=YF(c);g=V(c);h=P(Lq,g);i=h.data;j=0;while(j<g){k=V(c);l=V(c);m=V(c);n=V(c);o=V(c);p=new Lq;p.hz=k;p.mk=l;p.hy=m;p.mj=n;p.j$=o;i[j]=p;j=j+1|0;}e.yK=d;e.vf=f;e.fE=h;b.fv=e;Jk(b.x,d);Jk(b.w,b.fv.vf);}
var Y0=F(0);
function QW(){B.call(this);this.nH=null;}
function AEf(a,b){var c;c=a.nH;b=Ce(b);C8(c.p6,b);}
function R9(){B.call(this);this.qZ=null;}
function ALd(a,b){b.gj=a.qZ.cT;}
function R7(){B.call(this);this.un=null;}
function ANm(a,b){b.f5=a.un.cT.ce;}
function Nc(){var a=this;B.call(a);a.sC=null;a.sB=null;}
function Sp(){var a=this;B.call(a);a.ne=null;a.nd=null;a.nf=null;}
function AEy(a,b){VP(a.ne,a.nd,b,a.nf);}
function TA(){var a=this;B.call(a);a.ru=null;a.rt=null;}
function AMQ(a,b){var c,d,e,f,g,h,i,j,k;c=b.data;d=a.ru;e=a.rt;f=Bz();g=c.length;h=0;while(h<g){i=c[h];j=new Ln;k=i.f2;Sc(j,k.e6,k.fG);Bw(f,j);h=h+1|0;}if(DF(f))Ka(d.eE,e,d);else{c=D2(d,e);c=GA(d.c.f,c.V,c.bd);Ri(d.eE,e,b,d,Kw(d,c));}}
function UN(){var a=this;B.call(a);a.dB=null;a.jq=null;a.k7=null;a.la=null;a.pd=0;a.iN=0;a.cB=0;a.u=0;a.d9=0;a.iT=0;a.e9=0;a.de=0;a.ym=0;a.hu=0;a.jg=0;}
function BI(a,b,c){a.jq.data[b]=c;}
function C6(a,b){return a.jq.data[b];}
function Ix(a){return RX(a,0);}
function RX(a,b){RK(a,b);return a.dB.data[(b*2|0)+1|0];}
function Dc(a,b,c){a.dB.data[b*2|0]=c;}
function I_(a,b,c){a.dB.data[(b*2|0)+1|0]=c;}
function Fh(a,b){return a.dB.data[b*2|0];}
function H3(a,b){return a.dB.data[(b*2|0)+1|0];}
function AB7(a){return O1(a,0);}
function O1(a,b){RK(a,b);return a.dB.data[b*2|0];}
function MH(a,b){return a.k7.data[b];}
function DW(a,b,c){a.k7.data[b]=c;}
function RK(a,b){var c;if(!a.iN){c=new Dm;X(c);L(c);}if(b>=0&&b<a.pd)return;c=new BV;Bp(c,D7(b));L(c);}
function W8(a,b,c,d){a.iN=0;a.jg=2;G_(a.dB,(-1));G_(a.jq,(-1));if(b!==null)a.la=b;if(c>=0){a.cB=c;a.u=d;}a.d9=a.cB;}
function Z8(a){return a.jg;}
function WI(){B.call(this);this.oc=null;}
function AG5(a,b){var c,d;c=a.oc;d=new Bt;Bp(d,$rt_str(b.message));Lz(c,d);}
function Ok(){B.call(this);this.ow=null;}
function AGK(a,b){b.gj=a.ow;}
function Mu(){B.call(this);this.wr=null;}
function AIV(a){Du(a.wr);}
function Tu(){var a=this;B.call(a);a.mP=null;a.mQ=null;}
function AO0(a){var b,c;b=a.mP;c=a.mQ;b.hQ.tN(c);}
function NH(){var a=this;B.call(a);a.nN=null;a.nO=0;a.nP=0;a.nQ=null;a.nJ=0;a.nL=0;}
function ALA(a,b){var c,d,e,f,g,h,i,j;c=a.nN;d=a.nO;e=a.nP;f=a.nQ;g=a.nJ;h=a.nL;i=Cm(c.bn,5.0);d=Ba((c.bn.cI.a-d|0)-i|0,Z((i-d|0)-c.N.p.a|0,b.n.a));j=Ba((c.bn.cI.b-e|0)-i|0,Z((i-e|0)-c.N.p.b|0,b.n.b));Bg(f,d+g|0,j+h|0);KD(c,f,c.P.p);}
function Vu(){var a=this;B.call(a);a.tP=null;a.tR=null;a.tQ=null;a.tL=0;a.tK=0;a.tO=0;a.tM=0;a.t2=0;a.t1=0;a.t3=0;a.uv=0;}
function AIv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.tP;d=a.tR;e=a.tQ;f=a.tL;g=a.tK;h=a.tO;i=a.tM;j=a.t2;k=a.t1;l=a.t3;m=a.uv;n=Cm(c.bn,5.0);o=c.P.sr();Cw(d,c.P.p);Cw(e,c.P.H);switch(f){case -1:f=Ba(h+(b.n.a-g|0)|0,c.bn.cI.a-n|0);g=o.a;h=h+i|0;f=Z(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Z((i+b.n.a|0)-g|0,Z(o.a,n-c.N.H.a|0));}b:{switch(j){case -1:f=Z(n,Ba(l+(b.n.b-k|0)|0,(c.bn.cI.b+c.N.p.b|0)-n|0));g=o.b;h=l+m|0;f=Z(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Z((m+b.n.b|0)-k|0,o.b);}KD(c,e,d);}
function SU(){Q.call(this);this.xD=null;}
function APV(a,b){return Ch(b)!=2?0:1;}
function MA(){Q.call(this);this.xL=null;}
function AFo(a,b){return Ch(b)!=1?0:1;}
function RV(){Q.call(this);this.xm=null;}
function AE5(a,b){return Ra(b);}
function RU(){Q.call(this);this.xe=null;}
function AHZ(a,b){return 0;}
function Wi(){Q.call(this);this.yu=null;}
function AJy(a,b){return !Ch(b)?0:1;}
function OV(){Q.call(this);this.xZ=null;}
function APZ(a,b){return Ch(b)!=9?0:1;}
function N8(){Q.call(this);this.yU=null;}
function AMs(a,b){return F0(b);}
function QS(){Q.call(this);this.xF=null;}
function ANW(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Mt(){Q.call(this);this.wA=null;}
function AQ3(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F0(b);}return b;}
function My(){Q.call(this);this.x2=null;}
function AG0(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F0(b);}return b;}
function NG(){Q.call(this);this.yr=null;}
function AP7(a,b){a:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Ph(){Q.call(this);this.yG=null;}
function AK8(a,b){return I2(b);}
function Pv(){Q.call(this);this.xp=null;}
function ANn(a,b){return Pw(b);}
function Tm(){Q.call(this);this.x$=null;}
function APM(a,b){return Ch(b)!=3?0:1;}
function SB(){Q.call(this);this.wE=null;}
function AQE(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=F0(b);}return b;}
function MI(){Q.call(this);this.y3=null;}
function AGM(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=F0(b);}return b;}
function LS(){Q.call(this);this.lw=0;}
function ATJ(a){var b=new LS();ABG(b,a);return b;}
function ABG(a,b){Bq(a);a.lw=b;}
function AMv(a,b){return a.Y^(a.lw!=Ch(b&65535)?0:1);}
var RM=F(LS);
function AOO(a,b){return a.Y^(!(a.lw>>Ch(b&65535)&1)?0:1);}
function WC(){B.call(this);this.n2=null;}
function AIr(a,b){var c,d,e,f;c=a.n2;b=Ce(b);d=c.t9;c=c.t8;e=new W1;f=new Ld;c=ER(c);Yh(f,null,null,c,null);c=null;Yk(e,AFX(b),c,f);Gl(d,e);}
function WD(){var a=this;B.call(a);a.pB=null;a.pC=null;}
function AFF(a,b){var c,d;c=a.pB;d=a.pC;b.text().then(Bn(c,"f"),Bn(d,"f"));}
var Ud=F(0);
var AXi=null;function ASw(){ASw=Bm(Ud);AQB();}
function AQB(){AXi=O(C(268));}
function Sl(){B.call(this);this.qK=null;}
function AIj(a,b){b.f5=a.qK;}
function Rv(){B.call(this);this.ut=null;}
function AOs(a){var b,c,d,e,f,g,h,i;b=a.ut;c=b.sC;b=b.sB;d=b.hf;b=b.f2;e=c.uY;c=c.uZ;d=J$(d);if(b===null)b=void 0;else{f=b.iC+1|0;g=b.jk+1|0;h=b.fG+1|0;i=b.e6+1|0;b=AEg(f,g,h,i);}c.openCodeEditor(e,d,b);}
function T_(){B.call(this);this.x6=null;}
function AQG(a,b){}
function ACL(){var a=this;B.call(a);a.yE=0;a.xP=0;a.pc=null;}
function ATh(a,b,c){var d=new ACL();AIb(d,a,b,c);return d;}
function AIb(a,b,c,d){a.yE=b;a.xP=c;a.pc=d;}
function T5(){B.call(this);this.pS=null;}
function AKA(a,b){var c;c=a.pS;b=$rt_str(b.message);Ct(c.n1,b);}
var Yg=F();
function AKq(b){return {includeDeclaration:b};}
function PO(){var a=this;B.call(a);a.qj=null;a.qi=null;}
function AOg(a,b){V6(b,a.qj,a.qi);}
var ACe=F(0);
function ADG(b){return !b?G(Bv,[C(57),C(219),C(517)]):G(Bv,[C(57),C(219),C(517),C(518)]);}
function AAP(){var a=this;B.call(a);a.DN=null;a.DL=null;a.DQ=0.0;}
function Vq(){var a=this;B.call(a);a.ji=null;a.hl=0;}
function NK(){B.call(this);this.sQ=null;}
function AE1(a,b){return NI(I(a.sQ,b.be));}
var YM=F();
$rt_packages([-1,"java",0,"lang"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bu",AT6(AK3),"cO",AT5(AF1)],AAs,0,B,[],3,3,0,0,0,MX,0,B,[],3,3,0,0,0,Mn,0,B,[],3,3,0,0,0,VV,0,B,[MX,Mn],0,3,0,0,0,Zm,0,B,[],4,0,0,0,0,Y3,0,B,[],4,3,0,0,0,F8,0,B,[],0,3,0,0,0,DO,0,F8,[],0,3,0,0,0,Bt,0,DO,[],0,3,0,0,0,AAL,0,Bt,[],0,3,0,0,0,Cy,0,B,[],3,3,0,0,0,Cq,0,B,[],3,3,0,0,0,Ij,0,B,[],3,3,0,0,0,Bv,"String",1,B,[Cy,Cq,Ij],0,3,0,F9,["cO",AT5(AFZ),"bu",AT6(BE),"lZ",AT5(Gj),"jD",AT6(AH2)],F3,0,F8,[],0,3,0,0,0,GX,0,F3,[],0,3,0,0,0,AAn,0,GX,[],0,3,0,0,0,Ep,0,B,[Cy],1,3,0,0,0,FS,
0,Ep,[Cq],0,3,0,0,["bu",AT6(AQO),"jD",AT6(AKd)],FW,0,B,[Cy,Ij],0,0,0,0,["hH",AT6(I$),"cO",AT5(S)],Hx,0,B,[],3,3,0,0,0,R,0,FW,[Hx],0,3,0,0,["lK",AT9(AJ_),"kL",AT8(AG8),"cO",AT5(Jf),"hH",AT6(AKh),"mf",AT7(AKN)],Fn,0,GX,[],0,3,0,0,0,ABJ,0,Fn,[],0,3,0,0,0,AAb,0,Fn,[],0,3,0,0,0,Bo,0,B,[],3,3,0,0,0,RH,0,B,[Bo],3,3,0,0,0,T9,0,B,[RH],0,3,0,0,["yd",AT6(AIp)],ABi,0,B,[],0,3,0,0,0,OG,0,B,[Bo],3,3,0,0,0,T8,0,B,[OG],0,3,0,0,["A3",AT8(AKZ)],AAD,0,B,[],0,3,0,0,0,SV,0,B,[Bo],3,3,0,0,0,TO,0,B,[SV],0,3,0,0,["yd",AT6(AKa)],ZE,
0,B,[],0,3,0,0,0,KR,0,B,[],4,3,0,0,0,ACv,0,B,[],4,3,0,0,0,GQ,0,B,[],3,3,0,0,0,ST,0,B,[GQ],0,3,0,0,0,BV,0,Bt,[],0,3,0,0,0,ABo,0,B,[],4,3,0,0,0,Ge,0,Bt,[],0,3,0,0,0,Id,0,Bt,[],0,3,0,0,0,CS,0,B,[Cq],0,3,0,0,0,GR,0,BV,[],0,3,0,0,0,H6,0,B,[Bo],3,3,0,0,0,Rq,0,B,[H6],3,3,0,0,0,Pq,0,B,[Rq],0,3,0,0,["Hh",AT6(AOx),"HD",AT7(ANq),"D_",AT6(APT),"FF",AT6(AHg),"Di",AT5(ANJ),"Kv",AT6(AIA),"zh",AT5(AIw),"Iw",AT5(AJM),"KR",AT6(AHe),"JA",AT7(AMZ),"za",AT7(APt),"E_",AT5(AQv),"CO",AT6(AFl),"B8",AT6(AHL),"EK",AT5(AKG),"HF",AT6(AGG),
"Au",AT6(ANk),"DB",AT6(AIn),"zH",AT6(APp),"BA",AT7(AQH),"GO",AT7(AMq),"EU",AT6(AGS),"Aw",AT6(AQi)],Qr,0,B,[H6],3,3,0,0,0]);
$rt_metadata([EU,0,B,[Qr],0,3,0,0,["Dy",AT5(AQ$),"A9",AT5(AJ5),"IB",AT5(ALK),"A_",AT6(AQY),"Fc",AT5(AMj),"D6",AT6(AEK)],Sm,0,B,[Bo],3,3,0,0,0,VE,0,B,[Sm],0,3,0,0,["KS",AT5(AP3),"Fh",AT5(AMD),"BL",AT6(ALv),"Jn",AT6(AGQ),"z2",AT6(AHR),"Fj",AT6(AOS),"GF",AT6(ALt),"GM",AT5(AIJ),"zX",AT6(AHx)],Th,0,B,[],3,3,0,0,0,CV,0,B,[],3,3,0,0,0,OU,0,B,[],3,0,0,0,0,H8,0,B,[Th,CV,OU],1,3,0,0,["eY",AT5(Is)],Ry,0,H8,[],0,3,0,0,0,AAy,0,B,[Bo],1,3,0,0,0,Ht,0,B,[Bo],3,3,0,0,0,Ue,0,B,[Ht],0,3,0,0,["mw",AT7(AIe)],ABp,0,B,[],3,3,0,0,
0,ZT,0,B,[],0,3,0,0,0,W1,0,B,[],0,3,0,0,0,Ym,0,B,[Bo],1,3,0,0,0,XA,0,B,[Ht],0,3,0,0,["mw",AT7(AH9)],ADZ,0,B,[],4,3,0,0,0,DJ,0,B,[],3,3,0,0,0,Nu,0,B,[DJ],0,3,0,0,["gw",AT6(APN)],X8,0,B,[],3,3,0,0,0,ACP,0,B,[Bo],1,3,0,0,0,Ld,0,B,[],0,3,0,0,["bu",AT6(AGB)],Q$,0,B,[],0,3,0,0,0,Mh,0,B,[Bo],3,3,0,0,0,SF,0,B,[Mh],3,3,0,0,0,D5,0,B,[Bo],3,3,0,0,0,Yt,0,B,[Bo,SF,D5],1,3,0,0,["HC",AT5(ALT),"Is",AT6(AOW),"J9",AT6(AOE),"Cj",AT6(AGH),"Hv",AT6(AEr),"z6",AT5(AG2),"IJ",AT7(AOP),"IQ",AT8(AJT),"JG",AT5(AFn),"Kh",AT5(AM0),"Gp",
AT6(APD),"Dx",AT5(ALn),"KK",AT6(AJo),"Fw",AT5(ALV),"Ev",AT5(ARi),"Ku",AT5(AKB),"zZ",AT6(AFc),"IY",AT5(AQP),"GU",AT7(AJl),"Dd",AT7(ALe),"Iu",AT7(AQh),"HS",AT5(AEu),"Jq",AT5(AI6),"JW",AT6(AHb),"F3",AT6(AIf),"Cc",AT7(AJC),"EV",AT5(AKH),"Jv",AT6(AFp),"Ar",AT5(AId),"Ky",AT5(ANr),"BX",AT6(AEc),"Fu",AT6(APu),"Kk",AT6(AFQ),"Ea",AT5(APw),"CS",AT7(AF2),"Ih",AT6(ANe),"EF",AT5(AN1),"AW",AT7(AMo),"A1",AT7(AL4),"D8",AT5(APn),"JZ",AT6(AQU),"C5",AT8(AL7),"BR",AT5(AG4),"Dg",AT7(AGj),"Do",AT5(AEW),"H6",AT5(AQJ),"Gm",AT5(AMn),
"y$",AT5(AET),"Hs",AT7(AMp),"As",AT6(AGT),"F1",AT6(AIz),"BF",AT5(AN9)],ACz,0,B,[],3,3,0,0,0,YD,0,B,[],0,3,0,0,0,AC5,0,B,[],0,3,0,0,0,TU,0,B,[],0,3,0,0,0,VG,0,B,[],3,3,0,0,["en",AT6(AD6)],FG,0,B,[VG],3,3,0,0,["en",AT6(AD6),"ly",AT6(AJV)],EA,0,B,[FG],1,3,0,0,["en",AT6(AD6),"ly",AT6(AJV),"dQ",AT5(DF),"nT",AT6(AOr)],J7,0,B,[FG],3,3,0,0,["en",AT6(AD6),"ly",AT6(AJV)],II,0,B,[J7],3,3,0,0,["en",AT6(AD6),"ly",AT6(AJV)],El,0,EA,[II],1,3,0,0,["en",AT6(AD6),"ly",AT6(AJV),"sA",AT6(ANL),"bW",AT5(BP),"tr",AT7(AMR),"mC",AT7(APk),
"bu",AT6(ALF)],DP,0,B,[],3,3,0,0,0,KQ,0,B,[],3,3,0,0,0,YH,0,El,[DP,Cy,KQ],0,3,0,0,["ly",AT6(AJV),"lx",AT6(Bs),"cz",AT5(AMz),"sA",AT6(Bw),"mC",AT7(Rz),"mp",AT6(Fk),"nT",AT6(Vn),"h1",AT5(FI),"tr",AT7(Y8),"en",AT6(DY)],Kt,0,B,[],3,3,0,0,0,DA,0,B,[Kt],1,3,0,0,0,JY,0,DA,[DP,Cy],0,3,0,0,0,Rw,0,B,[],0,3,0,0,0,Pg,0,B,[D5],3,3,0,0,0,Ru,0,B,[D5],3,3,0,0,0,Re,0,B,[D5],3,3,0,0,0,Te,0,B,[D5],3,3,0,0,0,WJ,0,B,[D5],3,3,0,0,0,Ui,0,B,[D5,Pg,Ru,Re,Te,WJ],3,3,0,0,0]);
$rt_metadata([Zi,0,B,[Bo,Ui],1,3,0,0,["G7",AT7(AMt),"JE",AT7(AKc),"BZ",AT8(AI8),"C1",AT6(AFv),"GN",AT8(AHi)],AAx,0,B,[],4,3,0,0,0,GD,0,B,[Cq],0,3,0,0,0,Kq,0,B,[],0,3,0,0,0,CQ,0,B,[],0,3,0,0,0,Pn,0,B,[],0,3,0,0,0,BF,0,Bt,[],0,3,0,0,0,XN,0,Bt,[],0,3,0,0,0,B$,0,B,[],0,3,0,0,0,Kn,0,JY,[],0,3,0,0,0,RF,0,B,[],0,3,0,0,0,ADv,0,B,[Cq],0,3,0,0,["bu",AT6(AOM),"jD",AT6(AF8)],VK,0,B,[GQ],0,3,0,0,["vJ",AT7(AKI)],QU,0,B,[],0,3,0,0,["bu",AT6(AFV)],G2,0,B,[],3,3,0,0,0,F6,0,B,[G2,DP],0,0,0,0,["bu",AT6(AGP)],Gf,0,F6,[],0,0,0,
0,0,WO,0,B,[],0,3,0,0,0,Kl,0,B,[],3,3,0,0,0,Pk,0,B,[Kl],0,3,0,0,0,EN,0,B,[],0,3,0,0,0,Kv,0,EN,[],0,3,0,0,0,ACW,0,B,[],1,3,0,0,0,AAt,0,B,[Bo],1,3,0,0,0,AAV,0,B,[Bo],1,3,0,0,0,FV,0,EN,[],0,3,0,0,0,JB,0,EN,[],0,3,0,0,0,Sk,0,B,[Ht],0,3,0,0,["mw",AT7(AO3)],Z2,0,B,[Bo],1,3,0,0,0,Hd,0,B,[],3,3,0,0,["wn",AT5(AL_),"ty",AT5(AH6)],ET,0,B,[],3,3,0,0,0,Jw,0,B,[],3,3,0,0,0,P9,0,B,[],3,0,0,0,0,Z0,0,B,[Hd,ET,Jw,P9],0,3,0,0,["ty",AT5(AHU),"wn",AT5(AE0),"vN",AT5(Nt),"v_",AT5(Xt),"tN",AT6(Od),"gf",AT7(S7),"f4",AT7(Mz),"fN",AT8(MJ),
"gh",AT6(NX),"kp",AT6(AQq)],ACB,0,B,[],0,3,0,0,0,ADl,0,B,[],0,3,0,0,0,ACZ,0,B,[],4,3,0,0,0,Va,0,B,[H6],0,3,0,0,["C8",AT5(AJB)],Vg,0,B,[Bo],3,3,0,0,0,AAM,0,B,[Vg],1,3,0,0,["Jw",AT6(AIP),"IP",AT5(AK0)],Hu,0,B,[],0,3,0,0,0,SN,0,B,[],3,3,0,0,0,MP,0,B,[SN],0,3,0,0,0,QE,0,B,[],3,3,0,0,0,OJ,0,B,[QE],3,3,0,0,0,AA$,0,B,[OJ],0,3,0,0,0,Xe,0,B,[],3,3,0,ATe,0,Lo,0,B,[CV],1,3,0,0,0,FZ,0,Lo,[],1,3,0,0,0,OH,0,B,[],3,3,0,0,0]);
$rt_metadata([Ju,0,B,[OH],3,3,0,0,0,K9,0,B,[],3,3,0,0,0,Mq,0,FZ,[Ju,K9],0,3,0,0,["id",AT6(AJd),"lL",AT6(AO4),"e$",AT5(AIQ),"i2",AT7(AEd),"iE",AT6(AHj)],Kj,0,B,[],3,3,0,0,0,OI,0,B,[Kj],0,3,0,0,["lr",function(b,c,d,e,f){ANb(this,b,c,d,e,f);}],W6,0,B,[],3,3,0,0,0,WN,0,B,[W6],0,3,0,0,0,Fl,0,B,[],3,3,0,0,0,MD,0,B,[Fl],0,3,0,0,0,V_,0,B,[Kj],0,3,0,0,["lr",function(b,c,d,e,f){AGX(this,b,c,d,e,f);}],Ln,0,B,[Cq],0,3,0,0,["bu",AT6(AEC),"lZ",AT5(ANP),"jD",AT6(ANl)],Gb,0,B,[],3,3,0,0,0,HF,0,B,[],3,3,0,0,0,Ez,0,B,[],3,3,
0,0,0,Hc,0,B,[Ez],3,3,0,0,0,Oe,0,FZ,[ET,Ju,Jw,K9,Gb,HF,Hc],0,3,0,0,["mn",AT7(AQf),"lL",AT6(ANQ),"e$",AT5(AK6),"vN",AT5(AOq),"v_",AT5(AKW),"tN",AT6(APr),"id",AT6(AGJ),"i2",AT7(AKl),"iE",AT6(AEV),"gh",AT6(AMW),"fN",AT8(AJh),"f4",AT7(ALj),"gf",AT7(ANI),"f9",AT8(ANa),"ee",AT5(AJ$)],ZS,0,B,[Bo],1,3,0,0,0,Zh,0,B,[],0,3,0,0,0,BY,0,B,[Bo],3,3,0,0,0,Pu,0,B,[BY],0,3,0,0,["bf",AT6(AKD)],ACf,0,B,[Bo],3,3,0,0,0,AAT,0,B,[Bo],1,3,0,0,0,QO,0,B,[BY],0,3,0,0,["bf",AT6(AHV)],NJ,0,B,[BY],0,3,0,0,["bf",AT6(ANd)],Y,0,B,[],3,3,0,
0,0,XM,0,B,[Y],0,3,0,0,["j",AT6(AI4)],ZF,0,B,[],0,3,0,0,0,XP,0,B,[DJ],0,3,0,0,["gw",AT6(AJN)],Bk,0,B,[],3,3,0,0,0,XQ,0,B,[Bk],0,3,0,0,["s",AT5(AIC)],UL,0,B,[DJ],0,3,0,0,["gw",AT6(ANz)],UM,0,B,[Bk],0,3,0,0,["s",AT5(AQ_)],Rm,0,B,[Bo],3,3,0,0,0,U9,0,B,[Rm],0,3,0,0,["FA",AT6(AJk)],U7,0,B,[Bk],0,3,0,0,0,Qk,0,B,[Bo],3,3,0,0,0,U8,0,B,[Qk],0,3,0,0,["mw",AT7(AHq)],AC4,0,B,[Bo],1,3,0,0,0,Cd,0,B,[Bo],3,3,0,0,0,U6,0,B,[Cd],0,3,0,0,["b4",AT6(ANo)],Sn,0,B,[],0,3,0,0,0,LI,0,El,[],1,3,0,0,["en",AT6(AD6),"ly",AT6(AJV)],Mo,0,
B,[FG],3,3,0,0,["en",AT6(AD6),"ly",AT6(AJV)],W9,0,B,[Mo,J7],3,3,0,0,["en",AT6(AD6),"ly",AT6(AJV)],Ua,0,LI,[W9],0,3,0,0,["en",AT6(AD6),"ly",AT6(AJV)],W5,0,B,[Kt],3,3,0,0,0,MW,0,B,[W5],3,3,0,0,0,O4,0,DA,[DP,Cy,MW],0,3,0,0,0,St,0,B,[DJ],0,3,0,0,0,Su,0,B,[BY],0,3,0,0,["bf",AT6(AEt)]]);
$rt_metadata([Ps,0,B,[],0,3,0,0,0,KH,0,B,[],1,3,0,0,0,ACC,0,KH,[],0,3,0,0,0,ZL,0,B,[],0,3,0,0,0,V1,0,B,[Cd],0,3,0,0,["b4",AT6(AMT)],V2,0,B,[Cd],0,3,0,0,["b4",AT6(AM6)],V3,0,B,[Cd],0,3,0,0,["b4",AT6(ALk)],V4,0,B,[Cd],0,3,0,0,["b4",AT6(AKJ)],AC$,0,B,[Cd],0,3,0,0,["b4",AT6(AK9)],AC_,0,B,[Cd],0,3,0,0,["b4",AT6(ANB)],ADa,0,B,[Cd],0,3,0,0,["b4",AT6(AI7)],ADb,0,B,[Cd],0,3,0,0,["b4",AT6(ARc)],ADc,0,B,[Cd],0,3,0,0,["b4",AT6(AIc)],ADd,0,B,[Cd],0,3,0,0,["b4",AT6(AOH)],ADN,0,B,[Cd],0,3,0,0,["b4",AT6(AQL)],ADO,0,B,[Cd],
0,3,0,0,["b4",AT6(AKY)],ADP,0,B,[Cd],0,3,0,0,["b4",AT6(ALp)],ADQ,0,B,[Cd],0,3,0,0,["b4",AT6(ANg)],TK,0,B,[],3,3,0,0,0,TY,0,B,[TK],0,3,0,0,0,TX,0,B,[Cd],0,3,0,0,["b4",AT6(AJ1)],Mi,0,B,[],0,3,0,0,0,IE,0,B,[GQ],0,3,0,0,["vJ",AT7(I4)],DS,0,B,[],3,3,0,0,0,D9,0,B,[DS],3,3,0,0,0,Iu,0,B,[DS],3,3,0,0,0,Qq,0,B,[CV],0,3,0,0,0,Bj,0,B,[],0,3,0,0,["bu",AT6(AJO)],V7,0,B,[],0,3,0,0,0,YY,0,B,[],3,3,0,0,0,Qj,0,B,[],0,3,0,0,0,K_,0,B,[],0,3,0,0,0,CI,0,K_,[],0,3,0,0,0,VH,0,CI,[],0,3,0,0,0,En,0,CI,[],0,3,0,0,0,AAk,0,CI,[],0,3,0,
0,0,AAE,0,En,[],0,3,0,0,0,FD,0,En,[],0,3,0,0,0,ABO,0,FD,[],0,3,0,0,0,ADB,0,FD,[],0,3,0,0,0,Zk,0,En,[],0,3,0,0,0,ABN,0,CI,[],0,3,0,0,0,YU,0,CI,[],0,3,0,0,0,RW,0,B,[Bo],3,3,0,0,0,ADW,0,B,[RW],3,3,0,0,0,Qh,0,B,[CV],0,3,0,0,0,Qi,0,B,[],0,3,0,0,0,Cj,0,B,[Cq,Cy],1,3,0,0,0,Gq,0,Cj,[],12,3,0,Ha,0,LU,0,B,[],3,3,0,0,0]);
$rt_metadata([S9,0,B,[LU],3,3,0,0,0,Ub,0,B,[],3,3,0,0,0,F2,0,B,[S9,Ub],1,3,0,0,0,IX,0,F2,[],0,3,0,0,0,Z$,0,IX,[],0,3,0,0,0,FR,0,F2,[],1,3,0,0,0,KP,0,FR,[],0,3,0,0,["kb",AT8(AJR)],DK,0,Cj,[],12,3,0,AP1,0,IN,0,B,[Cq],1,3,0,0,0,LZ,0,IN,[],0,3,0,AH4,0,Gv,0,Cj,[],12,0,0,ALg,0,J9,0,FR,[],0,3,0,0,["kb",AT8(AHM)],ACu,0,BF,[],0,3,0,0,0,U$,0,DO,[],0,3,0,0,0,LX,0,B,[Bo],3,3,0,0,0,W3,0,B,[LX],0,3,0,0,["bf",AT6(AOc)],W4,0,B,[LX],0,3,0,0,["bf",AT6(AFR)],Qb,0,B,[],0,3,0,0,0,WX,0,B,[],0,3,0,0,0,AAC,0,B,[ET,Gb],0,0,0,0,["gh",
AT6(AM2),"fN",AT8(AP_),"f4",AT7(AN2),"gf",AT7(AKs),"f9",AT8(AOk)],JA,0,B,[],3,3,0,0,0,Uw,0,B,[JA],0,3,0,0,["j7",AT6(AKe)],Ux,0,B,[JA],0,3,0,0,["j7",AT6(AFd)],Uy,0,B,[Y],0,3,0,0,["j",AT6(AKr)],Us,0,B,[Y],0,3,0,0,["j",AT6(ALl)],Ut,0,B,[D9],0,3,0,0,["cn",AT6(APS)],JV,0,B,[D9],0,3,0,0,["cn",AT6(AH$)],Uu,0,B,[Y],0,3,0,0,["j",AT6(AOI)],Uv,0,B,[Iu],0,3,0,0,["cn",AT6(AG3)],GG,0,B,[],1,3,0,0,0,Sh,0,B,[],3,3,0,0,0,KB,0,GG,[Cq,Hx,Ij,Sh],1,3,0,0,0,Jo,0,GG,[Cq],1,3,0,0,0,Hj,0,B,[],0,3,0,AP5,0,PB,0,B,[D9],0,3,0,0,["cn",AT6(AFH)],Pz,
0,B,[Y],0,3,0,0,["j",AT6(AIi)],PA,0,B,[HF],0,3,0,0,["mn",AT7(APf)],NY,0,B,[Hc],0,3,0,0,["ee",AT5(AM8)],NZ,0,B,[Gb],0,3,0,0,["f9",AT8(AJZ)],NW,0,B,[Iu],0,3,0,0,["cn",AT6(AKK)],AAO,0,B,[Bo],1,3,0,0,0,YR,0,B,[],3,3,0,0,0,T1,0,B,[],0,3,0,0,0,R1,0,B,[D9],0,3,0,0,["cn",AT6(AIN)],R0,0,B,[D9],0,3,0,0,["cn",AT6(AGh)],B5,0,B,[],0,3,0,0,["bu",AT6(AQ9)],Ih,0,B,[],3,3,0,0,0,WG,0,B,[ET,Ih],0,3,0,0,0,Vs,0,B,[Ih,Hd],0,3,0,0,["wn",AT5(AL_),"ty",AT5(AH6),"kp",AT6(AKP)],PG,0,B,[],0,3,0,0,0]);
$rt_metadata([Ky,0,B,[],0,3,0,0,0,EX,0,B,[CV],0,0,0,0,0,ADx,0,B,[],0,3,0,0,0,ZG,0,B,[CV],0,3,0,0,0,NQ,0,B,[Y],0,3,0,0,0,NP,0,B,[Y],0,3,0,0,["j",AT6(AFr)],NO,0,B,[Y],0,3,0,0,["j",AT6(AEA)],UG,0,B,[],0,0,0,0,0,NN,0,B,[Bk],0,3,0,0,["s",AT5(AEz)],NU,0,B,[Bk],0,3,0,0,["s",AT5(AH8)],NT,0,B,[Bk],0,3,0,0,["s",AT5(ARs)],NS,0,B,[Bk],0,3,0,0,["s",AT5(AKE)],NR,0,B,[Bk],0,3,0,0,["s",AT5(AM3)],NM,0,B,[Bk],0,3,0,0,["s",AT5(AQR)],NL,0,B,[Bk],0,3,0,0,["s",AT5(AEp)],E6,0,Cj,[],12,3,0,AEw,0,Jv,0,KB,[],1,0,0,0,0,Rg,0,Jv,[],0,0,
0,0,0,Kk,0,B,[],1,3,0,0,0,Lj,0,B,[],0,3,0,0,0,We,0,B,[],0,0,0,0,0,GM,0,B,[],0,3,0,0,0,OY,0,GM,[],0,3,0,0,0,ACI,0,B,[],0,3,0,0,0,Mf,0,GM,[],0,3,0,0,0,TM,0,B,[Bo],3,3,0,0,0,NB,0,B,[TM],0,3,0,0,["J$",AT6(AKo)],Up,0,B,[Y],0,3,0,0,["j",AT6(AO9)],Mc,0,B,[],3,3,0,0,0,Qc,0,B,[Bk],0,3,0,0,["s",AT5(AI5)],Qa,0,B,[Bk],0,3,0,0,["s",AT5(AEj)],Xu,0,B,[],3,3,0,0,0,PS,0,B,[],3,0,0,0,0,Wo,0,Jo,[],0,0,0,0,0,RL,0,B,[Mc],0,3,0,0,0,ABx,0,B,[Bo],1,3,0,0,0,NC,0,B,[Bk],0,3,0,0,["s",AT5(AQS)],JP,0,B,[],4,3,0,AJA,0,VA,0,B,[],3,3,0,0,
0,ABa,0,B,[VA],0,3,0,0,["cO",AT5(AGN)],T4,0,B,[],3,3,0,0,0,Kx,0,B,[T4],0,3,0,0,["cO",AT5(AJY)],HL,0,B,[],0,3,0,0,0,UR,0,B,[CV],0,3,0,0,0,Kg,0,Kk,[],1,3,0,0,0,Po,0,Kg,[],0,3,0,0,0,TT,0,DO,[],0,3,0,0,0,H7,0,B,[],0,3,0,0,0,YQ,0,B,[],3,3,0,0,0,X7,0,B,[],0,3,0,0,0]);
$rt_metadata([ABb,0,B,[],3,3,0,0,0,ADH,0,B,[],0,3,0,0,0,L7,0,B,[G2,Cy],0,3,0,0,0,IZ,0,L7,[],0,0,0,0,0,Ii,0,B5,[],0,3,0,0,0,CJ,0,B,[],3,3,0,ACE,0,Ca,0,Cj,[],12,3,0,ABL,0,Iq,0,B,[],0,3,0,0,0,HO,0,B,[],0,3,0,0,0,AA3,0,B,[],0,3,0,0,0,De,0,B,[],3,3,0,AEU,0,ZC,0,B,[],0,3,0,0,["bu",AT6(AOv)],CK,0,B,[],3,3,0,ACV,0,B8,0,Cj,[],12,3,0,ZJ,0,Ds,0,B,[],3,3,0,ALs,0,CU,0,B,[],3,3,0,AHS,0,B7,0,Cj,[],12,3,0,UH,0,Dl,0,B,[],3,3,0,AEG,0,HZ,0,B,[],0,3,0,0,0,Il,0,B,[],4,3,0,0,0,Y1,0,B,[],0,3,0,0,0,HH,0,B,[],0,3,0,0,0,UX,0,B,[],0,
3,0,0,0,Lq,0,B,[],0,3,0,0,0,YP,0,B,[],0,3,0,0,0,Z1,0,B,[],4,3,0,0,0,TP,0,B,[],0,0,0,0,0,Tt,0,B,[Y],0,3,0,0,["j",AT6(AHh)],IY,0,B,[CV],0,3,0,0,["eY",AT5(ABT)],Yc,0,B,[],0,3,0,0,0,Ul,0,B,[],0,3,0,0,0,SR,0,B,[],0,3,0,0,0,Xh,0,B,[Y],0,3,0,0,["j",AT6(AFm)],Mp,0,B,[Y],0,3,0,0,["j",AT6(AOR)],PJ,0,B,[CV],0,3,0,0,0,AAa,0,B,[Bo],4,3,0,0,0,N3,0,B,[Y],0,3,0,0,["j",AT6(AFD)],Dm,0,Bt,[],0,3,0,0,0,Tw,0,F3,[],0,3,0,0,0,Y5,0,B,[],3,3,0,0,0,Vo,0,B,[Y],0,3,0,0,["j",AT6(ALL)],ADu,0,B,[],0,3,0,0,0,Mr,0,B,[Y],0,3,0,0,["j",AT6(AD5)],Tz,
0,B,[Y],0,3,0,0,["j",AT6(AH3)],Sa,0,B,[Y],0,3,0,0,["j",AT6(AHt)],R_,0,B,[Y],0,3,0,0,["j",AT6(AP8)],EE,0,B,[],3,3,0,0,0,Nq,0,B,[EE],0,0,0,0,["cd",AT5(BQ),"bP",AT5(BS),"kY",AT5(Q4)],M7,0,B,[Ez],0,3,0,0,["ee",AT5(AKf)],M4,0,B,[Ez],0,3,0,0,["ee",AT5(AO$)]]);
$rt_metadata([SI,0,B,[Ez],0,3,0,0,["ee",AT5(AML)],ACO,0,B,[DJ],0,3,0,0,0,ACd,0,B,[DJ],0,3,0,0,0,Rp,0,B,[Y],0,3,0,0,["j",AT6(APK)],Nm,0,B,[Y],0,3,0,0,["j",AT6(AKw)],VM,0,B,[Y],0,3,0,0,["j",AT6(AQz)],P$,0,B,[Y],0,3,0,0,["j",AT6(AFJ)],M3,0,B,[DS],0,3,0,0,0,ACN,0,B,[],0,3,0,0,0,SL,0,DA,[DP,Cy],0,3,0,0,0,Vl,0,B,[],0,3,0,0,0,Vd,0,B,[],0,3,0,0,0,S1,0,B,[Y],0,3,0,0,["j",AT6(AOB)],ABv,0,B,[Bo],1,3,0,0,0,TZ,0,B,[],0,3,0,0,0,D1,0,Bt,[],0,3,0,0,0,NA,0,B,[],0,3,0,0,0,Tq,0,B,[Y],0,3,0,0,["j",AT6(AK4)],Tr,0,B,[Y],0,3,0,0,
["j",AT6(AMP)],ACX,0,B,[],0,3,0,0,0,S6,0,B,[],0,0,0,0,0,YV,0,B,[],3,3,0,0,0,QH,0,B,[LU],3,3,0,0,0,Nr,0,B,[QH],3,3,0,0,0,GH,0,B,[Nr],1,3,0,0,0,Si,0,GH,[],0,3,0,0,0,Qx,0,B,[],3,3,0,0,0,TB,0,B,[],0,3,0,0,0,Sq,0,B,[Y],0,3,0,0,0,Hk,0,F6,[],0,0,0,0,0,GF,0,Bt,[],0,3,0,0,0,WW,0,B,[BY],0,3,0,0,["bf",AT6(AOp)],WV,0,B,[BY],0,3,0,0,["bf",AT6(AGZ)],Wd,0,B,[BY],0,3,0,0,["bf",AT6(AIG)],Wc,0,B,[BY],0,3,0,0,["bf",AT6(AJt)],Yp,0,B,[Y],0,3,0,0,0,WR,0,B,[Cd],0,3,0,0,["b4",AT6(AIs)],JN,0,B,[],0,3,0,0,0,Jj,0,B,[],0,3,0,0,0,L8,0,
B,[],0,3,0,0,0,WE,0,B,[Bk],0,3,0,0,["s",AT5(AE6)],WF,0,B,[Bk],0,3,0,0,["s",AT5(AI$)],E1,0,B,[],0,3,0,0,0,Xs,0,B,[Y],0,3,0,0,["j",AT6(AIx)],Ki,0,E1,[],0,3,0,0,0,JO,0,E1,[],0,3,0,0,0,VI,0,B,[Y],0,3,0,0,["j",AT6(AFa)],PM,0,B,[],0,3,0,0,0,OQ,0,B,[Y],0,3,0,0,["j",AT6(ALm)],Qv,0,B,[DS],0,3,0,0,["cn",AT6(ARt)]]);
$rt_metadata([Xp,0,D1,[],0,3,0,0,0,QV,0,Bt,[],0,3,0,0,0,VN,0,Bt,[],0,3,0,0,0,Pb,0,B,[Y],0,3,0,0,["j",AT6(AMK)],ADR,0,B,[Y],0,3,0,0,0,V$,0,B,[],0,3,0,0,0,Qm,0,B,[Bk],0,3,0,0,["s",AT5(ARv)],Vk,0,B,[Bk],0,3,0,0,0,Qe,0,B,[Qx],0,3,0,0,0,EG,0,B,[CV],0,3,0,0,["eY",AT5(ANS),"sr",AT5(ABB),"lG",AT8(Rn),"kw",AT6(APW),"o8",AT6(AKO),"oM",AT6(AQs),"qv",AT7(AN0),"fN",AT8(AJc),"f4",AT7(AF0),"gf",AT7(ALE),"gh",AT6(AP$),"f9",AT8(ANO)],IL,0,EG,[],0,3,0,0,0,Qs,0,IL,[Hd],0,3,0,0,["wn",AT5(AL_),"ty",AT5(AH6),"eY",AT5(AP9),"qv",AT7(AHa),
"oM",AT6(ANh),"o8",AT6(AOU),"kp",AT6(APc)],Qf,0,B,[Bk],0,3,0,0,0,PL,0,EG,[],0,3,0,0,["eY",AT5(AOQ),"lG",AT8(AIF),"kw",AT6(AN6),"fN",AT8(APo),"f4",AT7(AOT),"gf",AT7(AL5),"gh",AT6(ALN),"f9",AT8(AHO),"sr",AT5(AQN)],Gr,0,B,[],0,3,0,0,0,Pp,0,B,[],1,3,0,0,0,OX,0,B,[FG],3,3,0,0,["en",AT6(AD6),"ly",AT6(AJV)],Eq,0,EA,[OX],1,3,0,0,["en",AT6(AD6),"ly",AT6(AJV)],O$,0,Eq,[],0,0,0,0,["ly",AT6(AJV)],Mb,0,B,[Y],0,3,0,0,["j",AT6(AHH)],UK,0,B,[Y],0,3,0,0,["j",AT6(AKF)],ID,0,B,[],0,3,0,0,["bu",AT6(ABm)],LK,0,ID,[],0,3,0,0,["bu",
AT6(AFI)],Em,0,B,[],0,3,0,0,["bu",AT6(YI)],FT,0,Em,[],0,3,0,0,0,Ib,0,Em,[],0,3,0,0,["bu",AT6(AQd)],Iv,0,Em,[],0,3,0,0,["bu",AT6(AES)],YT,0,B,[Bo],1,3,0,0,0,Ml,0,B,[BY],0,3,0,0,["bf",AT6(AOu)],ABe,0,B,[],1,3,0,0,0,QR,0,B,[BY],0,3,0,0,["bf",AT6(AHA)],ZZ,0,GH,[],0,3,0,0,0,RR,0,B,[Bk],0,3,0,0,["s",AT5(AJj)],RS,0,B,[Bk],0,3,0,0,["s",AT5(AGk)],RP,0,B,[Bk],0,3,0,0,["s",AT5(AE7)],RQ,0,B,[Bk],0,3,0,0,["s",AT5(AJe)],QZ,0,B,[Bk],0,3,0,0,["s",AT5(ANH)],QY,0,B,[Bk],0,3,0,0,["s",AT5(AMe)],QX,0,B,[Bk],0,3,0,0,["s",AT5(ARj)],O0,
0,B,[Bk],0,3,0,0,["s",AT5(AMa)],Qd,0,B,[],3,3,0,0,0,PV,0,B,[Bk],0,3,0,0,["s",AT5(AF$)],H1,0,B,[],0,3,0,0,0,Ro,0,B,[],3,3,0,0,0,Yi,0,B,[Ro],0,3,0,0,0,Vb,0,EG,[],0,3,0,0,0,WQ,0,Ep,[Cq],0,3,0,0,0,Fd,0,B,[],0,0,0,0,0,Hm,0,B,[],4,3,0,0,0,U0,0,B,[],0,3,0,0,0]);
$rt_metadata([SS,0,B,[Fl],0,3,0,0,["v8",AT7(APs)],ABX,0,B,[],0,3,0,0,0,V5,0,BV,[],0,3,0,0,0,DM,0,B,[],0,3,0,0,0,M_,0,B,[Bk],0,3,0,0,["s",AT5(AJQ)],Na,0,B,[Bk],0,3,0,0,["s",AT5(APz)],M$,0,B,[Bk],0,3,0,0,["s",AT5(AD4)],Wb,0,B,[Bk],0,3,0,0,["s",AT5(AKM)],Wa,0,B,[Bk],0,3,0,0,["s",AT5(AN4)],Rk,0,B,[Ez],0,3,0,0,["ee",AT5(AKi)],Sr,0,B,[Bk],0,3,0,0,["s",AT5(AJr)],Ss,0,B,[Bk],0,3,0,0,["s",AT5(APe)],Xo,0,B,[Bk],0,3,0,0,["s",AT5(AEi)],Xj,0,B,[Bk],0,3,0,0,["s",AT5(AJu)],Xk,0,B,[Bk],0,3,0,0,["s",AT5(AQD)],Xl,0,B,[Bk],0,
3,0,0,["s",AT5(AK2)],Xm,0,B,[Bk],0,3,0,0,["s",AT5(AIS)],KK,0,B,[],3,3,0,0,0,WM,0,B,[KK],0,3,0,0,0,Og,0,B,[Y],0,3,0,0,["j",AT6(AEQ)],Of,0,B,[Y],0,3,0,0,["j",AT6(AFb)],R2,0,Ep,[Cq],0,3,0,0,0,UC,0,B,[Fl],0,3,0,0,["v8",AT7(AQ8)],WA,0,B,[DJ],0,3,0,0,0,EK,0,B,[],0,3,0,0,0,YC,0,B,[],0,3,0,0,0,P_,0,B,[BY],0,3,0,0,["bf",AT6(AG_)],ADr,0,B,[Cq],0,3,0,0,["bu",AT6(AMf)],MV,0,B,[Y],0,3,0,0,["j",AT6(AKC)],XB,0,B,[Y],0,3,0,0,["j",AT6(ARp)],Ik,0,B,[Bo],3,3,0,0,0,Mx,0,B,[Ik],0,3,0,0,["rH",AT5(AJx)],Mg,0,B,[Ik],0,3,0,0,["rH",
AT5(AD8)],SW,0,B,[BY],0,3,0,0,["bf",AT6(AJb)],Vp,0,B,[Ez],0,3,0,0,["ee",AT5(AQ0)],T3,0,B,[KK],0,3,0,0,0,TI,0,B,[],0,3,0,0,0,WU,0,B,[BY],0,3,0,0,["bf",AT6(AIY)],JH,0,Eq,[],1,0,0,0,["en",AT6(AD6),"ly",AT6(AJV)],U5,0,JH,[],0,0,0,0,["en",AT6(AD6),"ly",AT6(AJV)],KZ,0,DA,[],1,0,0,0,0,U3,0,KZ,[],0,0,0,0,0,Ly,0,El,[KQ],1,0,0,0,["en",AT6(AD6),"h1",AT5(AGR),"mp",AT6(ALh),"ly",AT6(AJ2)],U4,0,Ly,[],0,0,0,0,["en",AT6(AD6),"lx",AT6(ALo),"cz",AT5(AKu),"bW",AT5(AHn),"dQ",AT5(AEZ)],U1,0,B,[EE],0,0,0,0,["cd",AT5(AEH),"bP",AT5(AMJ),
"kY",AT5(AOi)],Pl,0,B,[EE],3,3,0,0,0,U2,0,B,[Pl],0,0,0,0,0,XH,0,B,[GQ],0,3,0,0,0,EF,0,B,[],0,0,0,0,0,SP,0,EF,[EE],0,0,0,0,0]);
$rt_metadata([Z9,0,B,[Bo],1,3,0,0,0,YS,0,B,[Y],0,0,0,0,0,Q9,0,B,[Cy],4,3,0,0,0,GK,0,B,[Bo],1,3,0,0,0,Zq,0,GK,[],1,3,0,0,0,ACh,0,GK,[],1,3,0,0,0,Uk,0,Eq,[],0,0,0,0,["en",AT6(AD6),"ly",AT6(AJV)],O_,0,EA,[],0,0,0,0,["en",AT6(AD6),"ly",AT6(AJV)],AB2,0,B,[],0,3,0,0,0,Sw,0,B,[],3,3,0,0,0,SX,0,B,[BY],0,3,0,0,["bf",AT6(AHs)],Gi,0,B,[],3,3,0,0,0,Tj,0,B,[Gi],0,3,0,0,["iV",AT8(ALr)],Tk,0,B,[Gi],0,3,0,0,["iV",AT8(AIZ)],HI,0,B,[Cy,Cq],0,3,0,0,0,Ja,0,B,[],3,3,0,0,0,RN,0,B,[Ja],0,3,0,0,0,OF,0,B,[Ja],3,3,0,0,0,AAQ,0,B,[OF],
0,3,0,0,0,Sf,0,B,[Gi],0,3,0,0,["iV",AT8(AMb)],Se,0,B,[DS],0,3,0,0,["cn",AT6(AQo)],Sd,0,B,[DS],0,3,0,0,["cn",AT6(ANu)],Sg,0,B,[Gi],0,3,0,0,["iV",AT8(ALG)],MB,0,B,[],0,3,0,0,0,Q_,0,B,[],0,3,0,0,0,BC,0,B,[],1,0,0,0,["b8",AT8(Hi),"ca",AT9(Hr),"hw",AT5(AFU),"L",AT6(APC),"bK",AT6(APB),"fb",AT5(AQx),"ec",AT5(IA)],UF,0,B,[],3,3,0,0,0,Vr,0,B,[UF],0,3,0,0,0,XC,0,B,[Y],0,3,0,0,["j",AT6(AMg)],XD,0,B,[Y],0,3,0,0,["j",AT6(AH1)],Qz,0,B,[Y],0,3,0,0,["j",AT6(ALZ)],CC,0,BC,[],0,0,0,LW,["d",AT8(AFg),"E",AT6(AFE)],Gk,0,B,[],0,
0,0,0,0,Ie,0,BF,[],0,3,0,0,0,ADe,0,B,[],1,3,0,0,0,WB,0,B,[BY],0,3,0,0,["bf",AT6(AM1)],ABf,0,B,[Bo],3,3,0,0,0,TL,0,B,[BY],0,3,0,0,["bf",AT6(AMB)],RJ,0,CC,[],0,0,0,0,["d",AT8(AEL),"E",AT6(AN_)],Xa,0,CC,[],0,0,0,0,["d",AT8(AGu)],PP,0,CC,[],0,0,0,0,["d",AT8(AFP)],SQ,0,CC,[],0,0,0,0,["d",AT8(AER),"E",AT6(AMM)],Fb,0,CC,[],0,0,0,0,["d",AT8(APX)],BW,0,BC,[],1,0,0,0,["d",AT8(AQ7),"bQ",AT5(AO2),"E",AT6(AJF)],ACS,0,BW,[],0,0,0,0,["bl",AT7(AOt),"b8",AT8(AHN),"ca",AT9(AGn),"E",AT6(AEO)],BR,0,BC,[],0,0,0,0,["d",AT8(AIB),
"L",AT6(AME),"bK",AT6(AKv),"E",AT6(ANj),"ec",AT5(AGi)],It,0,BR,[],0,0,0,0,["d",AT8(AMm),"E",AT6(ANK)],Dt,0,It,[],0,0,0,0,["d",AT8(AGW),"L",AT6(ANs)],Mv,0,Dt,[],0,0,0,0,["d",AT8(AMy),"E",AT6(APJ)],VD,0,Dt,[],0,0,0,0,["d",AT8(AFz),"E",AT6(AO8)]]);
$rt_metadata([Rc,0,Dt,[],0,0,0,0,["d",AT8(AGf),"E",AT6(ARn)],Td,0,Dt,[],0,0,0,0,["d",AT8(AEn),"E",AT6(ANZ)],F7,0,BR,[],0,0,0,0,["d",AT8(AEE),"b8",AT8(AKR),"ca",AT9(AOd),"bK",AT6(AKp),"fb",AT5(AMH),"ec",AT5(AQA)],AC6,0,B,[Bo],1,3,0,0,0,Go,0,B,[],1,0,0,0,0,Q,0,Go,[],1,0,0,OK,["c$",AT5(AFB),"eH",AT5(AE4),"i0",AT5(AOY),"gR",AT5(AQu)],Zd,0,Q,[],0,0,0,0,["i",AT6(CL),"c$",AT5(CH),"eH",AT5(AHI),"i0",AT5(APq),"cO",AT5(ALO),"gR",AT5(AHW)],IK,0,Bt,[],0,3,0,0,0,DN,0,BC,[],1,0,0,0,["bK",AT6(AOe),"E",AT6(APP),"ec",AT5(ALb)],CN,
0,DN,[],0,0,0,0,["d",AT8(AEq)],EQ,0,CN,[],0,0,0,0,["d",AT8(AFj)],CD,0,DN,[],0,0,0,0,["d",AT8(AED)],Ek,0,CN,[],0,0,0,0,["d",AT8(AKX),"L",AT6(ARq)],VR,0,CN,[],0,0,0,0,["d",AT8(AQZ),"b8",AT8(ALH)],W,0,B,[],1,0,0,0,0,C0,0,BF,[],0,3,0,0,0,MN,0,Go,[DP],0,0,0,0,["cO",AT5(ALS)],Oc,0,BC,[],0,0,0,0,["d",AT8(AJ7),"E",AT6(AMC)],Wu,0,B,[DP,Cy],0,3,0,0,0,MC,0,BR,[],0,0,0,0,0,Qo,0,BR,[],0,0,0,0,["d",AT8(AFe),"L",AT6(AMk),"E",AT6(AFW),"bK",AT6(AFA)],Dj,0,BR,[],0,0,0,0,["d",AT8(AHy),"i",AT6(AIa),"bK",AT6(AE$),"L",AT6(AON),"E",
AT6(AHK)],IH,0,Dj,[],0,0,0,0,["i",AT6(AJG)],Y4,0,BW,[],0,0,0,0,["bl",AT7(AJ8)],DZ,0,BW,[],0,0,0,0,["bl",AT7(Md),"bK",AT6(AMG)],OL,0,BR,[],0,0,0,0,["L",AT6(AKV),"d",AT8(AEe),"bK",AT6(AFM),"E",AT6(APv)],Ea,0,BW,[],0,0,0,0,["bQ",AT5(AJP),"bl",AT7(AIO),"b8",AT8(AHv),"ca",AT9(AJX),"bK",AT6(APl)],ADp,0,BW,[],0,0,0,0,["bl",AT7(AD9)],X2,0,BW,[],0,0,0,0,["bl",AT7(AEv)],EZ,0,BR,[],0,0,0,0,["L",AT6(AQy),"d",AT8(AMl),"bK",AT6(AJ9),"E",AT6(ANt)],WT,0,EZ,[],0,0,0,0,0,Ts,0,EZ,[],0,0,0,0,0,XO,0,CD,[],0,0,0,0,["d",AT8(AGA)],PE,
0,CD,[],0,0,0,0,["d",AT8(ALu)],Fs,0,CD,[],0,0,0,0,["d",AT8(AOL),"L",AT6(AP2)],Pd,0,Fs,[],0,0,0,0,["d",AT8(AJS),"L",AT6(ALW)],EY,0,CD,[],0,0,0,0,["d",AT8(ARl)],MZ,0,EY,[],0,0,0,0,["d",AT8(AJf)],RA,0,CD,[],0,0,0,0,["d",AT8(AQK)],QA,0,Fs,[],0,0,0,0,["d",AT8(AFY)],Um,0,EY,[],0,0,0,0,["d",AT8(AEX)],RB,0,DN,[],0,0,0,0,["d",AT8(ARa),"b8",AT8(AOZ)],Om,0,DN,[],0,0,0,0,["d",AT8(AMI),"b8",AT8(AEk)],Ex,0,B,[],1,0,0,0,0,XR,0,CN,[],0,0,0,0,["d",AT8(AEY)],VL,0,Ek,[],0,0,0,0,["d",AT8(ALq)],O2,0,EQ,[],0,0,0,0,["d",AT8(AOf)],Qu,
0,CN,[],0,0,0,0,["d",AT8(AMA)],TF,0,Ek,[],0,0,0,0,["d",AT8(AE8)],Rd,0,EQ,[],0,0,0,0,["d",AT8(AOw)]]);
$rt_metadata([JR,0,BC,[],4,0,0,0,["d",AT8(AKt),"E",AT6(AJs)],ZH,0,BC,[],0,0,0,0,["d",AT8(AFx),"E",AT6(AFL)],Oh,0,BC,[],0,0,0,0,["d",AT8(AJI),"E",AT6(ARh)],Wz,0,BC,[],4,0,0,0,["d",AT8(ANc),"E",AT6(AGq)],V9,0,BC,[],0,0,0,0,["d",AT8(AMi),"E",AT6(AD7)],Nb,0,BC,[],0,0,0,0,["d",AT8(AGg),"E",AT6(AIq)],ADg,0,BR,[],0,0,0,0,["d",AT8(AQQ),"L",AT6(AFO),"hw",AT5(AL2),"E",AT6(AFN)],Za,0,BR,[],4,0,0,0,["d",AT8(AMc),"L",AT6(AN8),"hw",AT5(AD2),"E",AT6(AQ6)],AC1,0,BC,[],4,0,0,0,["d",AT8(AKb),"E",AT6(AIk)],ABc,0,BC,[],0,0,0,0,
["d",AT8(AMh),"E",AT6(AH7)],XZ,0,BC,[],0,0,0,0,["d",AT8(AJi),"E",AT6(AGt)],GJ,0,BR,[],0,0,0,0,["d",AT8(AE3),"L",AT6(ANp),"E",AT6(ANM)],AC7,0,GJ,[],0,0,0,0,["d",AT8(AGz),"b8",AT8(APF),"ca",AT9(AEM),"bK",AT6(ALi)],AAp,0,GJ,[],0,0,0,0,["d",AT8(AKL)],Ob,0,FW,[Hx],0,3,0,0,["lK",AT9(AHX),"kL",AT8(AFC),"hH",AT6(AF6),"mf",AT7(AO1)],RD,0,BW,[],0,0,0,0,["bl",AT7(AGU),"b8",AT8(AFt),"ca",AT9(AIo),"bK",AT6(AI0)],XY,0,BW,[],0,0,0,0,["bl",AT7(AKT)],M6,0,BW,[],0,0,0,0,["bl",AT7(AOj)],GI,0,B,[],4,0,0,ANX,0,Mm,0,BW,[],0,0,0,
0,["bl",AT7(AOo)],Ks,0,BR,[],0,0,0,0,["L",AT6(AMx),"d",AT8(AGr),"b8",AT8(AIX),"ca",AT9(AG1),"bK",AT6(AEJ),"E",AT6(AO_)],KL,0,BR,[],0,0,0,0,["L",AT6(AF5),"d",AT8(AEo),"b8",AT8(AMU),"ca",AT9(AOh),"bK",AT6(AGV),"E",AT6(AM5)],DB,0,BW,[],0,0,0,0,["bl",AT7(ANN),"b8",AT8(ALP),"ca",AT9(AF4),"bK",AT6(ANy)],UU,0,Ex,[],0,0,0,0,["hn",AT6(AGd),"tc",AT7(ANG)],UV,0,Ex,[],0,0,0,0,["hn",AT6(AOA),"tc",AT7(AQp)],ACa,0,B,[],0,0,0,0,0,Yl,0,B,[],0,0,0,0,0,Kp,0,W,[],0,0,0,0,["B",AT5(AAw)],Jt,0,W,[],0,0,0,0,["B",AT5(AA5)],AB5,0,W,
[],0,0,0,0,["B",AT5(AN$)],ACA,0,W,[],0,0,0,0,["B",AT5(APb)],ACD,0,W,[],0,0,0,0,["B",AT5(AHz)],Kh,0,W,[],0,0,0,0,["B",AT5(Zf)],K1,0,Kh,[],0,0,0,0,["B",AT5(Z6)],ADT,0,W,[],0,0,0,0,["B",AT5(AIW)],L_,0,K1,[],0,0,0,0,["B",AT5(XX)],AAJ,0,L_,[],0,0,0,0,["B",AT5(ALc)],AAZ,0,W,[],0,0,0,0,["B",AT5(AGO)],Zz,0,W,[],0,0,0,0,["B",AT5(AK_)],Zn,0,W,[],0,0,0,0,["B",AT5(AQt)],ACG,0,W,[],0,0,0,0,["B",AT5(ALY)],AD1,0,W,[],0,0,0,0,["B",AT5(AEh)],ACb,0,W,[],0,0,0,0,["B",AT5(AJn)],ABW,0,W,[],0,0,0,0,["B",AT5(ANT)],ACU,0,W,[],0,0,
0,0,["B",AT5(AGL)],YB,0,W,[],0,0,0,0,["B",AT5(AG$)],Ye,0,W,[],0,0,0,0,["B",AT5(AQm)],ACi,0,W,[],0,0,0,0,["B",AT5(AD$)],ACs,0,W,[],0,0,0,0,["B",AT5(AKg)],ZX,0,W,[],0,0,0,0,["B",AT5(AHk)]]);
$rt_metadata([AA4,0,W,[],0,0,0,0,["B",AT5(AIt)],ADz,0,W,[],0,0,0,0,["B",AT5(AKj)],ACp,0,W,[],0,0,0,0,["B",AT5(APy)],AAm,0,W,[],0,0,0,0,["B",AT5(AM_)],ZV,0,W,[],0,0,0,0,["B",AT5(ALQ)],ADX,0,W,[],0,0,0,0,["B",AT5(AN3)],IV,0,W,[],0,0,0,0,["B",AT5(AA1)],ACY,0,IV,[],0,0,0,0,["B",AT5(ALB)],AAN,0,Kp,[],0,0,0,0,["B",AT5(AFq)],ZQ,0,Jt,[],0,0,0,0,["B",AT5(AIK)],Zs,0,W,[],0,0,0,0,["B",AT5(AKx)],ZM,0,W,[],0,0,0,0,["B",AT5(AQa)],AAA,0,W,[],0,0,0,0,["B",AT5(AH0)],AAK,0,W,[],0,0,0,0,["B",AT5(AD_)],Zv,0,B,[],4,0,0,0,0,Y2,0,
B,[],4,3,0,0,0,Nd,0,B,[],0,3,0,0,0,ACl,0,B,[],0,3,0,0,0,AAh,0,B,[],4,3,0,0,0,T7,0,EF,[EE],0,0,0,0,0,Rb,0,EF,[EE],0,0,0,0,0,Zb,0,B,[DS],0,3,0,0,0,UP,0,B,[DS],0,0,0,0,["cn",AT6(AHE)],VQ,0,Q,[],0,0,0,0,["i",AT6(AHG)],VO,0,Q,[],0,0,0,0,["i",AT6(AEB)],Or,0,Q,[],0,0,0,0,["i",AT6(AKn),"cO",AT5(AIy)],Oy,0,Q,[],0,0,0,0,["i",AT6(ANR)],Ow,0,Q,[],0,0,0,0,["i",AT6(AOn)],Ox,0,Q,[],0,0,0,0,["i",AT6(AKS)],OB,0,Q,[],0,0,0,0,["i",AT6(AHc)],OC,0,Q,[],0,0,0,0,["i",AT6(AD3)],Oz,0,Q,[],0,0,0,0,["i",AT6(AIE)],OA,0,Q,[],0,0,0,0,["i",
AT6(AKU)],OD,0,Q,[],0,0,0,0,["i",AT6(APL)],OE,0,Q,[],0,0,0,0,["i",AT6(AGE)],Oq,0,Q,[],0,0,0,0,["i",AT6(ARu)],O5,0,Q,[],0,0,0,0,["i",AT6(AII)],Oo,0,Q,[],0,0,0,0,["i",AT6(AGD)],Op,0,Q,[],0,0,0,0,["i",AT6(AIg)],Ou,0,Q,[],0,0,0,0,["i",AT6(AJK)],On,0,Q,[],0,0,0,0,["i",AT6(APi)],Os,0,Q,[],0,0,0,0,["i",AT6(AFG)],Ot,0,Q,[],0,0,0,0,["i",AT6(AM4)],Fz,0,Cj,[],12,0,0,SE,0,XJ,0,B,[Y],0,3,0,0,0,Lu,0,B,[],3,3,0,0,0,SA,0,B,[Lu],4,3,0,0,0,Ti,0,B,[],32,0,0,AS5,0,SK,0,B,[Y],0,3,0,0,["j",AT6(ANC)],Xd,0,B,[Y],0,3,0,0,0]);
$rt_metadata([Jd,0,B,[],0,3,0,0,0,AAI,0,B,[Bo],1,3,0,0,0,MU,0,F7,[],0,0,0,0,["b8",AT8(AH5),"ca",AT9(ARk),"fb",AT5(AGp)],L3,0,Bt,[],0,3,0,0,0,P0,0,B,[Y],0,3,0,0,0,PZ,0,B,[Y],0,3,0,0,0,Rr,0,B,[Y],0,3,0,0,["j",AT6(AGm)],Yy,0,B,[],0,3,0,0,0,P2,0,B,[Y],0,3,0,0,["j",AT6(AQ1)],Y0,0,B,[],3,3,0,0,0,QW,0,B,[BY],0,3,0,0,["bf",AT6(AEf)],R9,0,B,[Y],0,3,0,0,["j",AT6(ALd)],R7,0,B,[Y],0,3,0,0,["j",AT6(ANm)],Nc,0,B,[Bk],0,3,0,0,0,Sp,0,B,[Y],0,3,0,0,["j",AT6(AEy)],TA,0,B,[Y],0,3,0,0,["j",AT6(AMQ)],UN,0,B,[Lu],0,0,0,0,0,WI,0,
B,[BY],0,3,0,0,["bf",AT6(AG5)],Ok,0,B,[Y],0,3,0,0,["j",AT6(AGK)],Mu,0,B,[Bk],0,3,0,0,["s",AT5(AIV)],Tu,0,B,[Bk],0,3,0,0,["s",AT5(AO0)],NH,0,B,[Y],0,3,0,0,["j",AT6(ALA)],Vu,0,B,[Y],0,3,0,0,["j",AT6(AIv)],SU,0,Q,[],0,0,0,0,["i",AT6(APV)],MA,0,Q,[],0,0,0,0,["i",AT6(AFo)],RV,0,Q,[],0,0,0,0,["i",AT6(AE5)],RU,0,Q,[],0,0,0,0,["i",AT6(AHZ)],Wi,0,Q,[],0,0,0,0,["i",AT6(AJy)],OV,0,Q,[],0,0,0,0,["i",AT6(APZ)],N8,0,Q,[],0,0,0,0,["i",AT6(AMs)],QS,0,Q,[],0,0,0,0,["i",AT6(ANW)],Mt,0,Q,[],0,0,0,0,["i",AT6(AQ3)],My,0,Q,[],0,
0,0,0,["i",AT6(AG0)],NG,0,Q,[],0,0,0,0,["i",AT6(AP7)],Ph,0,Q,[],0,0,0,0,["i",AT6(AK8)],Pv,0,Q,[],0,0,0,0,["i",AT6(ANn)],Tm,0,Q,[],0,0,0,0,["i",AT6(APM)],SB,0,Q,[],0,0,0,0,["i",AT6(AQE)],MI,0,Q,[],0,0,0,0,["i",AT6(AGM)],LS,0,Q,[],0,0,0,0,["i",AT6(AMv)],RM,0,LS,[],0,0,0,0,["i",AT6(AOO)],WC,0,B,[BY],0,3,0,0,["bf",AT6(AIr)],WD,0,B,[BY],0,3,0,0,["bf",AT6(AFF)],Ud,0,B,[],3,3,0,ASw,0,Sl,0,B,[Y],0,3,0,0,["j",AT6(AIj)],Rv,0,B,[Ik],0,3,0,0,["rH",AT5(AOs)],T_,0,B,[BY],0,3,0,0,["bf",AT6(AQG)],ACL,0,B,[],0,0,0,0,0,T5,0,
B,[BY],0,3,0,0,["bf",AT6(AKA)],Yg,0,B,[Bo],1,3,0,0,0]);
$rt_metadata([PO,0,B,[BY],0,3,0,0,["bf",AT6(AOg)],ACe,0,B,[],3,3,0,0,0,AAP,0,B,[Fl],0,3,0,0,0,Vq,0,B,[],0,3,0,0,0,NK,0,B,[DJ],0,3,0,0,["gw",AT6(AE1)],YM,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.N6=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","null","false","true","Either src or dest is null","dark","light","darcula","unknown theme: ","provided result is not an array","bad model","text",".cpp",".cc",".cxx",".hpp",".c",".h",
".java","java",".js","js",".activity","activity","cpp","mermaid","/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncFullParseFile","asyncParseFile","asyncParseFirstLines","/Model::parseFullFile","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","/Model::iterativeParsing","asyncIterativeParsing","/","[",", ","]","\n","...","\\n","Consolas","  ","Set editor font to: ",", ascent+descent = ",", lineHeight = ",
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
Bv.prototype.valueOf=Bv.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AF1(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var AXQ=Long_add;var JS=Long_sub;var ALI=Long_mul;var AXR=Long_div;var AXS=Long_rem;var AXT=Long_or;var XS=Long_and;var AXU=Long_xor;var AXV=Long_shl;var AXW=Long_shr;var ATu=Long_shru;var AXX=Long_compare;var AHd=Long_eq;var AXY=Long_ne;var AR7=Long_lt;var AXZ=Long_le;var AX0=Long_gt;var AR5=Long_ge;var AX1=Long_not;var ASU=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(ASj);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=T9.prototype;c.create=c.yd;c=T8.prototype;c.create=c.A3;c=TO.prototype;c.create=c.yd;c=Pq.prototype;c.registerDocumentHighlightProvider=c.za;c.getModel=c.E_;c.getProperty=c.CO;c.getText=c.zh;c.onDidChangeModel=c.HF;c.revealPosition=c.EU;c.focus=c.Di;c.setReadonly=c.Aw;c.setPosition=c.FF;c.setFontSize=c.DB;c.setFontFamily=c.Au;c.revealLine=c.Kv;c.getPosition=c.Iw;c.revealLineInCenter=c.B8;c.setTheme=c.KR;c.setModel=c.zH;c.executeOnWorker=c.BA;c.registerDefinitionProvider=c.GO;c.registerEditorOpener
=c.Hh;c.registerReferenceProvider=c.HD;c.dispose=c.EK;c.registerDeclarationProvider=c.JA;c.setText=c.D_;c=EU.prototype;c.getPositionAt=c.A_;c.getText=c.Fc;c.getOffsetAt=c.D6;c.dispose=c.A9;Object.defineProperty(c,"language",{get:c.IB});Object.defineProperty(c,"uri",{get:c.Dy});c=VE.prototype;c.setRightModel=c.BL;c.setFontFamily=c.Jn;c.setLeftModel=c.GF;c.setTheme=c.z2;c.getRightModel=c.KS;c.focus=c.Fh;c.getLeftModel=c.GM;c.setReadonly=c.zX;c.setFontSize=c.Fj;c=Ue.prototype;c.f=c.mw;c=XA.prototype;c.f=c.mw;c
=Yt.prototype;c.createEntityReference=c.Cj;c.getElementById=c.Gp;c.createTextNode=c.F3;c.hasChildNodes=c.D8;c.querySelectorAll=c.BX;c.removeChild=c.Ih;c.cloneNode=c.zZ;c.createComment=c.Kk;c.insertBefore=c.CS;c.getElementsByTagNameNS=c.IJ;c.hasAttributes=c.Fw;c.normalize=c.Ky;c.hasChildNodesJS=c.Kh;c.getElementsByTagName=c.Jv;c.appendChild=c.As;c.createAttributeNS=c.GU;c.dispatchEvent=c.JW;c.replaceChild=c.A1;c.createElementNS=c.Dg;c.createCDATASection=c.Is;c.querySelector=c.Fu;c.createElement=c.Hv;c.isSupported
=c.Iu;c.importNode=c.Dd;c.removeEventListener=c.C5;c.createAttribute=c.JZ;c.createDocumentFragment=c.y$;c.createProcessingInstruction=c.Cc;c.addEventListener=c.Hs;Object.defineProperty(c,"nodeName",{get:c.Ar});Object.defineProperty(c,"documentElement",{get:c.EV});Object.defineProperty(c,"childNodes",{get:c.H6});Object.defineProperty(c,"prefix",{get:c.Do,set:c.KK});Object.defineProperty(c,"implementation",{get:c.IY});Object.defineProperty(c,"textContent",{get:c.Ku,set:c.F1});Object.defineProperty(c,"parentNode",
{get:c.Gm});Object.defineProperty(c,"nextSibling",{get:c.EF});Object.defineProperty(c,"nodeType",{get:c.HS});Object.defineProperty(c,"doctype",{get:c.Ev});Object.defineProperty(c,"localName",{get:c.Jq});Object.defineProperty(c,"nodeValue",{get:c.Ea,set:c.J9});Object.defineProperty(c,"firstChild",{get:c.JG});Object.defineProperty(c,"lastChild",{get:c.HC});Object.defineProperty(c,"previousSibling",{get:c.z6});Object.defineProperty(c,"namespaceURI",{get:c.BF});Object.defineProperty(c,"attributes",{get:c.Dx});Object.defineProperty(c,
"ownerDocument",{get:c.BR});c=Zi.prototype;c.removeEventListener=c.BZ;c.dispatchEvent=c.C1;c.addEventListener=c.GN;c=Sk.prototype;c.f=c.mw;c=Va.prototype;c.dispose=c.C8;c=AAM.prototype;c.get=c.Jw;Object.defineProperty(c,"length",{get:c.IP});c=Pu.prototype;c.f=c.bf;c=QO.prototype;c.f=c.bf;c=NJ.prototype;c.f=c.bf;c=U9.prototype;c.onAnimationFrame=c.FA;c=U8.prototype;c.f=c.mw;c=U6.prototype;c.handleEvent=c.b4;c=Su.prototype;c.f=c.bf;c=V1.prototype;c.handleEvent=c.b4;c=V2.prototype;c.handleEvent=c.b4;c=V3.prototype;c.handleEvent
=c.b4;c=V4.prototype;c.handleEvent=c.b4;c=AC$.prototype;c.handleEvent=c.b4;c=AC_.prototype;c.handleEvent=c.b4;c=ADa.prototype;c.handleEvent=c.b4;c=ADb.prototype;c.handleEvent=c.b4;c=ADc.prototype;c.handleEvent=c.b4;c=ADd.prototype;c.handleEvent=c.b4;c=ADN.prototype;c.handleEvent=c.b4;c=ADO.prototype;c.handleEvent=c.b4;c=ADP.prototype;c.handleEvent=c.b4;c=ADQ.prototype;c.handleEvent=c.b4;c=TX.prototype;c.handleEvent=c.b4;c=W3.prototype;c.f=c.bf;c=W4.prototype;c.f=c.bf;c=NB.prototype;c.accept=c.J$;c=WW.prototype;c.f
=c.bf;c=WV.prototype;c.f=c.bf;c=Wd.prototype;c.f=c.bf;c=Wc.prototype;c.f=c.bf;c=WR.prototype;c.handleEvent=c.b4;c=Ml.prototype;c.f=c.bf;c=QR.prototype;c.f=c.bf;c=P_.prototype;c.f=c.bf;c=Mx.prototype;c.onTimer=c.rH;c=Mg.prototype;c.onTimer=c.rH;c=SW.prototype;c.f=c.bf;c=WU.prototype;c.f=c.bf;c=SX.prototype;c.f=c.bf;c=WB.prototype;c.f=c.bf;c=TL.prototype;c.f=c.bf;c=QW.prototype;c.f=c.bf;c=WI.prototype;c.f=c.bf;c=WC.prototype;c.f=c.bf;c=WD.prototype;c.f=c.bf;c=Rv.prototype;c.onTimer=c.rH;c=T_.prototype;c.f=c.bf;c
=T5.prototype;c.f=c.bf;c=PO.prototype;c.f=c.bf;})();
$rt_exports.main();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);
export const newEditor = self.editorFactory;
export const newTextModel = self.modelFactory;
export const newCodeDiff = self.diffFactory;
