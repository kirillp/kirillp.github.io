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
function $rt_cls(cls){return ABu(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return GZ(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b9.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AN4(t);}
function $rt_throwableCause(t){return AN_(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ATR());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ATS(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ATT());}
function $rt_throwCCE(){}
var A=Object.create(null);
var K=$rt_throw;var BE=$rt_compare;var ATU=$rt_nullCheck;var E=$rt_cls;var O=$rt_createArray;var H_=$rt_isInstance;var ATV=$rt_nativeThread;var ATW=$rt_suspending;var ATX=$rt_resuming;var ATY=$rt_invalidPointer;var C=$rt_s;var Bm=$rt_eraseClinit;var T=$rt_imul;var E6=$rt_wrapException;var ATZ=$rt_checkBounds;var AT0=$rt_checkUpperBound;var AT1=$rt_checkLowerBound;var AT2=$rt_wrapFunction0;var AT3=$rt_wrapFunction1;var AT4=$rt_wrapFunction2;var AT5=$rt_wrapFunction3;var AT6=$rt_wrapFunction4;var F=$rt_classWithoutFields;var G
=$rt_createArrayFromData;var ASq=$rt_createCharArrayFromData;var AT7=$rt_createByteArrayFromData;var AT8=$rt_createShortArrayFromData;var G$=$rt_createIntArrayFromData;var AT9=$rt_createBooleanArrayFromData;var AT$=$rt_createFloatArrayFromData;var AT_=$rt_createDoubleArrayFromData;var AF7=$rt_createLongArrayFromData;var ATP=$rt_createBooleanArray;var Eo=$rt_createByteArray;var AUa=$rt_createShortArray;var B1=$rt_createCharArray;var Bz=$rt_createIntArray;var AUb=$rt_createLongArray;var AEh=$rt_createFloatArray;var AUc
=$rt_createDoubleArray;var BE=$rt_compare;var AUd=$rt_castToClass;var AUe=$rt_castToInterface;var AUf=Long_toNumber;var BM=Long_fromInt;var AUg=Long_fromNumber;var Dp=Long_create;var ACp=Long_ZERO;var AUh=Long_hi;var ZG=Long_lo;
function B(){this.$id$=0;}
function By(a){return ABu(a.constructor);}
function AK0(a,b){return a!==b?0:1;}
function AFV(a){var b,c,d,e,f,g,h,i,j;b=IB(a);if(!b)c=C(0);else{d=(((32-Nz(b)|0)+4|0)-1|0)/4|0;e=B1(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=GS((b>>>g|0)&15,16);g=g-4|0;h=i;}c=GZ(e);}j=new R;V(j);L(L(j,C(1)),c);return S(j);}
function IB(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AKi(a){var b,c,d;if(!H_(a,DR)&&a.constructor.$meta.item===null){b=new U8;X(b);K(b);}b=AEo(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var AAo=F(0);
function ASg(b){ACD();Yh();Z$();ADg();AAU();AB5();ADW();AA5();ZK();ACG();Ya();AC4();Yd();AB_();ABX();ABO();AAD();ZQ();AAa();ABc();ABM();YF();ADF();$rt_globals.editorFactory=Bp(new T7,"create");$rt_globals.modelFactory=Bp(new T6,"create");$rt_globals.diffFactory=Bp(new TO,"create");}
var MX=F(0);
var Mo=F(0);
function VS(){var a=this;B.call(a);a.kl=null;a.fJ=null;}
function ABu(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new VS;c.fJ=b;d=c;b.classObject=d;}return c;}
function Hq(a){return a.fJ.$meta.primitive?1:0;}
function HM(a){return ABu(a.fJ.$meta.item);}
var Zh=F();
function Bp(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Cv(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var YY=F();
function AEo(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ABz(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ABz(d[e],c))return 1;e=e+1|0;}return 0;}
function F7(){var a=this;B.call(a);a.lR=null;a.rc=null;a.lK=0;a.mA=0;}
function AUi(){var a=new F7();X(a);return a;}
function AUj(a){var b=new F7();Bn(b,a);return b;}
function X(a){a.lK=1;a.mA=1;}
function Bn(a,b){a.lK=1;a.mA=1;a.lR=b;}
function AHK(a){return a;}
function AN4(a){return a.lR;}
function AN_(a){var b;b=a.rc;if(b===a)b=null;return b;}
var DQ=F(F7);
function AUk(){var a=new DQ();AB0(a);return a;}
function AUl(a){var b=new DQ();X1(b,a);return b;}
function AB0(a){X(a);}
function X1(a,b){Bn(a,b);}
var Bt=F(DQ);
function ATS(a){var b=new Bt();AP4(b,a);return b;}
function AP4(a,b){Bn(a,b);}
var AAH=F(Bt);
var Cy=F(0);
var Cr=F(0);
var Ik=F(0);
function Bv(){var a=this;B.call(a);a.b9=null;a.hK=0;}
var AUm=null;var AUn=null;var AUo=null;function F8(){F8=Bm(Bv);APE();}
function AIE(){var a=new Bv();X8(a);return a;}
function GZ(a){var b=new Bv();IO(b,a);return b;}
function El(a,b,c){var d=new Bv();L$(d,a,b,c);return d;}
function X8(a){F8();a.b9=AUm;}
function IO(a,b){F8();L$(a,b,0,b.data.length);}
function L$(a,b,c,d){var e;F8();e=B1(d);a.b9=e;Dc(b,c,e,0,d);}
function L1(b){var c;F8();c=AIE();c.b9=b;return c;}
function I(a,b){var c,d;if(b>=0){c=a.b9.data;if(b<c.length)return c[b];}d=new GO;X(d);K(d);}
function H(a){return a.b9.data.length;}
function Eu(a){return a.b9.data.length?0:1;}
function PS(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=H(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Dc(a.b9,b,d,e,c);return;}}g=new BV;X(g);K(g);}
function TR(a,b,c){var d,e,f;if((c+H(b)|0)>H(a))return 0;d=0;while(d<H(b)){e=I(b,d);f=c+1|0;if(e!=I(a,c))return 0;d=d+1|0;c=f;}return 1;}
function J4(a,b){if(a===b)return 1;return TR(a,b,0);}
function DJ(a,b){var c,d,e,f;if(a===b)return 1;if(H(b)>H(a))return 0;c=0;d=H(a)-H(b)|0;while(d<H(a)){e=I(a,d);f=c+1|0;if(e!=I(b,c))return 0;d=d+1|0;c=f;}return 1;}
function HU(a,b,c){var d,e,f,g,h;d=Z(0,c);if(b<65536){e=b&65535;while(true){f=a.b9.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Kg(b);h=Lx(b);while(true){f=a.b9.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function G5(a,b,c){var d,e,f,g,h;d=Ba(c,H(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b9.data[d]==e)break;d=d+(-1)|0;}return d;}f=Kg(b);g=Lx(b);while(true){if(d<1)return (-1);h=a.b9.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function PD(a,b,c){var d,e,f;d=Z(0,c);e=H(a)-H(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=H(b))break a;if(I(a,d+f|0)!=I(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AMr(a,b){return PD(a,b,0);}
function PP(a,b,c){var d,e;d=Ba(c,H(a)-H(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=H(b))break a;if(I(a,d+e|0)!=I(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AAk(a,b){return PP(a,b,H(a));}
function B9(a,b,c){var d,e;d=BE(b,c);if(d>0){e=new BV;X(e);K(e);}if(!d){F8();return AUn;}if(!b&&c==H(a))return a;return El(a.b9,b,c-b|0);}
function D3(a,b){return B9(a,b,H(a));}
function PZ(a,b,c){return B9(a,b,c);}
function Hk(a,b){var c,d,e,f,g,h;if(Eu(b))return a;if(Eu(a))return b;c=B1(H(a)+H(b)|0);d=c.data;e=0;f=0;while(f<H(a)){g=e+1|0;d[e]=I(a,f);f=f+1|0;e=g;}g=0;while(g<H(b)){h=e+1|0;d[e]=I(b,g);g=g+1|0;e=h;}return L1(c);}
function UF(a,b,c){var d,e,f,g;d=new R;V(d);e=H(a)-H(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=H(b)){L(d,c);f=f+(H(b)-1|0)|0;break a;}if(I(a,f+g|0)!=I(b,g))break;g=g+1|0;}BX(d,I(a,f));}f=f+1|0;}L(d,D3(a,f));return S(d);}
function RS(a){var b,c;b=0;c=H(a)-1|0;a:{while(b<=c){if(I(a,b)>32)break a;b=b+1|0;}}while(b<=c&&I(a,c)<=32){c=c+(-1)|0;}return B9(a,b,c+1|0);}
function AFT(a){return a;}
function E5(a){var b,c,d,e,f;b=a.b9.data;c=B1(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function D7(b){var c;F8();c=new R;V(c);return S(Bl(c,b));}
function BF(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(H(c)!=H(a))return 0;d=0;while(d<H(c)){if(I(a,d)!=I(c,d))return 0;d=d+1|0;}return 1;}
function Gi(a){var b,c,d,e;a:{if(!a.hK){b=a.b9.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hK=(31*a.hK|0)+e|0;d=d+1|0;}}}return a.hK;}
function LF(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gd;Bn(b,C(2));K(b);}AUp=1;d=new Q$;d.j9=O(CC,10);d.f9=(-1);d.ey=(-1);d.bl=(-1);e=new Gj;e.eu=1;e.by=b;e.W=B1(H(b)+2|0);Dc(E5(b),0,e.W,0,H(b));f=e.W.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.r$=g;e.fO=0;EQ(e);EQ(e);d.g=e;d.dp=0;d.lb=Xc(d,(-1),0,null);if(!C4(d.g)){b=new If;h=d.g;IU(b,C(3),h.by,h.c0);K(b);}if(d.n1)d.lb.eb();b=BA();h=new Sz;h.ip=(-1);h.kv=(-1);h.w2=d;h.uF=d.lb;h.iI=a;h.ip=0;g=H(a);h.kv=g;e=new UK;i=h.ip;j=d.f9;k=d.ey+1|0;l=d.bl+1|0;e.hp
=(-1);m=j+1|0;e.pd=m;e.dA=Bz(m*2|0);f=Bz(l);e.jo=f;G7(f,(-1));if(k>0)e.k3=Bz(k);G7(e.dA,(-1));W3(e,a,i,g);h.cj=e;e.e7=1;n=0;m=0;if(!H(a)){f=O(Bv,1);f.data[0]=C(3);}else{while(true){l=H(h.iI);if(!Yl(h))l=h.kv;e=h.cj;if(e.d8>=0&&Z3(e)==1){e=h.cj;e.d8=Iz(e);if(Iz(h.cj)==AB4(h.cj)){e=h.cj;e.d8=e.d8+1|0;}g=h.cj.d8;g=g<=l&&Mw(h,g)?1:0;}else g=Mw(h,h.ip);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Bw(b,PZ(a,m,ADu(h)));m=ZN(h);n=g;}a:{Bw(b,PZ(a,m,H(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(H(Bs(b,g)))break a;Fm(b,
g);}}if(g<0)g=0;f=Hl(b,O(Bv,g));}return f;}
function AHX(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Ba(H(a),H(b));e=0;while(true){if(e>=d){c=H(a)-H(b)|0;break a;}c=I(a,e)-I(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function APE(){AUm=B1(0);AUn=AIE();AUo=new SS;}
var F2=F(F7);
var GU=F(F2);
var AAj=F(GU);
var En=F();
function FR(){En.call(this);this.bn=0;}
var AUq=null;var AUr=null;function APj(a){var b=new FR();Zz(b,a);return b;}
function Zz(a,b){a.bn=b;}
function KW(b){return (Nh(ATC(20),b,10)).cO();}
function I7(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new C2;Bn(b,C(4));K(b);}d=H(b);if(0==d){b=new C2;Bn(b,C(5));K(b);}if(c>=2&&c<=36){a:{e=0;switch(I(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new C2;X(b);K(b);}b:{c:{while(f<d){h=f+1|0;i=OV(I(b,f));if(i<0){j=new C2;k=B9(b,0,d);b=new R;V(b);L(L(b,C(6)),k);Bn(j,S(b));K(j);}if(i>=c){j=new C2;l=B9(b,0,d);b=new R;V(b);L(L(Bl(L(b,C(7)),c),C(8)),l);Bn(j,S(b));K(j);}g=T(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new C2;k=B9(b,0,d);b=new R;V(b);L(L(b,C(9)),k);Bn(j,S(b));K(j);}b=new C2;j=new R;V(j);Bl(L(j,C(10)),c);Bn(b,S(j));K(b);}
function CK(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AUr===null){AUr=O(FR,256);c=0;while(true){d=AUr.data;if(c>=d.length)break a;d[c]=APj(c-128|0);c=c+1|0;}}}return AUr.data[b+128|0];}return APj(b);}
function AQM(a,b){if(a===b)return 1;return b instanceof FR&&b.bn==a.bn?1:0;}
function Nz(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function HW(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AKb(a,b){b=b;return BE(a.bn,b.bn);}
function ACD(){AUq=E($rt_intcls());}
function FV(){var a=this;B.call(a);a.M=null;a.H=0;}
function AUs(){var a=new FV();V(a);return a;}
function ATC(a){var b=new FV();FD(b,a);return b;}
function V(a){FD(a,16);}
function FD(a,b){a.M=B1(b);}
function Nh(a,b,c){return AAv(a,a.H,b,c);}
function AAv(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cu(a,b,b+1|0);else{Cu(a,b,b+2|0);f=a.M.data;g=b+1|0;f[b]=45;b=g;}a.M.data[b]=GS(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=T(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cu(a,b,b+i|0);if(e)e=b;else{f=a.M.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.M.data;b=e+1|0;f[e]=GS($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ABn(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BE(c,0.0);if(!d){if(1.0/c===Infinity){Cu(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cu(a,b,b+4|0);e=a.M.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cu(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cu(a,b,b+8|0);d=b;}else{Cu(a,b,b+9|0);e=a.M.data;d=b+1|0;e[b]=45;}e=a.M.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AUt;ABd(c,f);d=f.kC;g=f.kf;h=f.oj;i=1;j=1;if(h)j=2;k=9;l=AO5(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Z(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cu(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.M.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.M.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.M.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.M.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AO5(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function BX(a,b){return a.mb(a.H,b);}
function WU(a,b,c){Cu(a,b,b+1|0);a.M.data[b]=c;return a;}
function Ja(a,b){var c,d;c=a.M.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.M=Nt(a.M,d);}
function S(a){return El(a.M,0,a.H);}
function WD(a,b,c,d){return a.lG(a.H,b,c,d);}
function MR(a,b,c,d,e){var f,g,h,i;Cu(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.M.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function HZ(a,b){return a.kI(b,0,b.data.length);}
function Cu(a,b,c){var d,e,f,g;d=a.H;e=d-b|0;a.hC((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.M.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.H=a.H+(c-b|0)|0;}
var Hv=F(0);
var R=F(FV);
function L(a,b){var c;c=a.H;if(b===null)b=C(11);L5(a,c,b);return a;}
function CZ(a,b){L5(a,a.H,b);return a;}
function Bl(a,b){Nh(a,b,10);return a;}
function FW(a,b){var c,d,e,f,g,h,i,j;c=a.H;d=1;if(AR3(b,ACp)){d=0;b=ASR(b);}a:{if(HT(b,BM(10))<0){if(d)Cu(a,c,c+1|0);else{Cu(a,c,c+2|0);e=a.M.data;f=c+1|0;e[c]=45;c=f;}a.M.data[c]=GS(ZG(b),10);}else{g=1;h=BM(1);i=Lr(BM(-1),BM(10));b:{while(true){j=ALF(h,BM(10));if(HT(j,b)>0){j=h;break b;}g=g+1|0;if(HT(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cu(a,c,c+g|0);if(d)f=c;else{e=a.M.data;f=c+1|0;e[c]=45;}while(true){if(AG9(j,ACp))break a;e=a.M.data;c=f+1|0;e[f]=GS(ZG((Lr(b,j))),10);b=Yk(b,j);j=Lr(j,BM(10));f=c;}}}return a;}
function X2(a,b){BX(a,b);return a;}
function G6(a,b){L5(a,a.H,!b?C(12):C(13));return a;}
function ADi(a,b,c){var d,e,f,g,h,i;d=BE(b,c);if(d<=0){e=a.H;if(b<=e){if(d){f=e-c|0;a.H=e-(c-b|0)|0;g=0;while(g<f){h=a.M.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new GO;X(i);K(i);}
function VD(a,b){var c,d,e,f;if(b>=0){c=a.H;if(b<c){c=c-1|0;a.H=c;while(b<c){d=a.M.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new GO;X(f);K(f);}
function AJ8(a,b,c,d,e){MR(a,b,c,d,e);return a;}
function AG2(a,b,c,d){WD(a,b,c,d);return a;}
function YG(a){return a.H;}
function Jj(a){return S(a);}
function AKf(a,b){Ja(a,b);}
function AKJ(a,b,c){WU(a,b,c);return a;}
function L5(a,b,c){var d,e,f;if(b>=0&&b<=a.H){a:{if(c===null)c=C(11);else if(Eu(c))break a;Ja(a,a.H+H(c)|0);d=a.H-1|0;while(d>=b){a.M.data[d+H(c)|0]=a.M.data[d];d=d+(-1)|0;}a.H=a.H+H(c)|0;d=0;while(d<H(c)){e=a.M.data;f=b+1|0;e[b]=I(c,d);d=d+1|0;b=f;}}return a;}c=new GO;X(c);K(c);}
var Fp=F(GU);
var ABG=F(Fp);
function AUu(a){var b=new ABG();AF3(b,a);return b;}
function AF3(a,b){Bn(a,b);}
var Z8=F(Fp);
function AUv(a){var b=new Z8();AGf(b,a);return b;}
function AGf(a,b){Bn(a,b);}
var Bo=F(0);
function JJ(b){return b;}
var RG=F(0);
var T7=F();
function AIj(a,b){var c;if(!Yg())b=$rt_globals.Promise.reject(new $rt_globals.Error("This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled"));else{c=new Uc;c.od=b;b=new $rt_globals.Promise(Bp(c,"f"));}return b;}
var ABe=F();
var OB=F(0);
var T6=F();
function AKV(a,b,c,d){var e,f,g;e=new EV;f=ACH(b,10);b=GM(c,null);g=ARZ(f,b,ABE(d));e.dq=g;g.le=e;e.kZ=c;e.ka=d;return e;}
var AAz=F();
var SU=F(0);
var TO=F();
function AJ9(a,b){var c;if(!Yg())b=$rt_globals.Promise.reject(new $rt_globals.Error("This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled"));else{c=new Xu;c.ni=b;b=new $rt_globals.Promise(Bp(c,"f"));}return b;}
var ZA=F();
var KU=F();
var AUw=null;var AUx=null;function EX(){if(AUw===null)AUw=ALA(AUy,0);return AUw;}
function EH(){if(AUx===null)AUx=ALA(AUz,0);return AUx;}
function ASJ(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=K1(b)&&(e+f|0)<=K1(d)){a:{b:{if(b!==d){g=HM(By(b));h=HM(By(d));if(g!==null&&h!==null){if(g===h)break b;if(!Hq(g)&&!Hq(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fJ;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ABz(n.constructor,o)?1:0)){J6(b,c,d,e,j);b=new Ie;X(b);K(b);}j=j+1|0;k=m;}J6(b,c,d,e,f);return;}if(!Hq(g))break a;if(Hq(h))break b;else break a;}b=new Ie;X(b);K(b);}}J6(b,c,
d,e,f);return;}b=new Ie;X(b);K(b);}b=new BV;X(b);K(b);}d=new Gd;Bn(d,C(14));K(d);}
function Dc(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=K1(b)&&(e+f|0)<=K1(d)){J6(b,c,d,e,f);return;}b=new BV;X(b);K(b);}
function J6(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function DS(){return Long_fromNumber(new Date().getTime());}
var ACr=F();
var GN=F(0);
var SS=F();
var BV=F(Bt);
var ABk=F();
function K1(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AUA());}return b.data.length;}
function AB3(b,c){if(b===null){b=new Gd;X(b);K(b);}if(b===E($rt_voidcls())){b=new BD;X(b);K(b);}if(c>=0)return AQd(b.fJ,c);b=new XJ;X(b);K(b);}
function AQd(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Gd=F(Bt);
var Ie=F(Bt);
var CU=F();
var AUB=null;var AUC=null;var AUD=null;var AUE=null;var AUF=null;var AUG=null;var AUH=null;var AUI=null;var AUJ=null;var AUK=null;function Wt(b){var c,d;c=new Bv;d=B1(1);d.data[0]=b;IO(c,d);return c;}
function LK(b){return b>=65536&&b<=1114111?1:0;}
function Cs(b){return (b&64512)!=55296?0:1;}
function CQ(b){return (b&64512)!=56320?0:1;}
function WG(b){return !Cs(b)&&!CQ(b)?0:1;}
function G2(b,c){return Cs(b)&&CQ(c)?1:0;}
function Ec(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Kg(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Lx(b){return (56320|b&1023)&65535;}
function EJ(b){return Gc(b)&65535;}
function Gc(b){if(AUE===null){if(AUH===null)AUH=ABW();AUE=AAd((AUH.value!==null?$rt_str(AUH.value):null));}return SF(AUE,b);}
function Ef(b){return F$(b)&65535;}
function F$(b){if(AUD===null){if(AUI===null)AUI=ACE();AUD=AAd((AUI.value!==null?$rt_str(AUI.value):null));}return SF(AUD,b);}
function SF(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BE(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function Ue(b,c){if(c>=2&&c<=36){b=OV(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function OV(b){var c,d,e,f,g,h,i,j,k,l;if(AUC===null){if(AUJ===null)AUJ=AAm();c=(AUJ.value!==null?$rt_str(AUJ.value):null);d=AOa(E5(c));e=Jl(d);f=Bz(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+MY(d)|0;j=j+MY(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AUC=f;}g=AUC.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BE(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function GS(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function F4(b){var c;if(b<65536){c=B1(1);c.data[0]=b&65535;return c;}return ASq([Kg(b),Lx(b)]);}
function Ch(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&WG(b&65535))return 19;if(AUF===null){if(AUK===null)AUK=ADO();d=(AUK.value!==null?$rt_str(AUK.value):null);e=O(Nb,16384);f=e.data;g=Eo(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<H(d)){m=J5(I(d,l));if(m==64){l=l+1|0;m=J5(I(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|T(c,J5(I(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=J5(I(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AHT(k,k+i|0,ADf(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AHT(k,k+i|0,ADf(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AUF=C5(e,j);}e=AUF.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.rY)o=p+1|0;else{c=d.pV;if(b>=c)return d.qa.data[b-c|0];c=p-1|0;}}return 0;}
function I4(b){a:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function FZ(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ch(b)!=16?0:1;}
function Ps(b){switch(Ch(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Ra(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Ps(b);}return 1;}
function Yh(){AUB=E($rt_charcls());AUG=O(CU,128);}
function ABW(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ACE(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AAm(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ADO(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var GO=F(BV);
var H7=F(0);
function FO(b){var c;BK(b);c=new U$;c.mK=b;return c;}
var Rp=F(0);
function Pm(){var a=this;B.call(a);a.g7=null;a.bA=null;}
function Nr(a){return a.g7.d9;}
function QG(a,b){var c,d;a:{c=Nr(a);b=Cj(b);d=(-1);switch(Gi(b)){case 3075958:if(!BF(b,C(15)))break a;d=2;break a;case 102970646:if(!BF(b,C(16)))break a;d=0;break a;case 1441429116:if(!BF(b,C(17)))break a;d=1;break a;default:}}b:{switch(d){case 0:break;case 1:LV(c);break b;case 2:FT(c);break b;default:c=new R;V(c);L(L(c,C(18)),b);$rt_globals.console.info($rt_ustr(S(c)));break b;}J8(c);}}
function V3(b,c,d){var e,f,g,h,i,j,k;if(!((b?1:0)?1:0))$rt_globals.console.info("provider result is undefined");else if(!($rt_globals.Array.isArray(b)?1:0))Lk(d,C(19));else{e=O(Jn,b.length);f=e.data;g=0;h=f.length;while(g<h){i=b[g];j=new Jn;k=ABE(i.uri);j.f0=new L8;j.hd=k;XT(i.range,j.f0);f[g]=j;g=g+1|0;}c.i(e);}}
function P0(a,b){var c,d,e,f;c=a.bA;b=b-1|0;if(b>0){d=b-1|0;e=c.C;d=T(d,e);f=c.Z;if(d<f)DU(c,T(b-2|0,e));else if((d-f|0)>=Cz(c))DU(c,b>Cb(c.c.f)?FM(c):T(b+1|0,c.C)-Cz(c)|0);}}
function Uo(a,b){a.bA.dv=YI(b);}
function ABg(){$rt_globals.console.info("FATAL: WebGL is not enabled in the browser");}
function AOx(a,b){var c,d;c=a.bA.ct.l0;d=new Pg;d.uP=a;d.uQ=b;return FO(Fh(c,d));}
function ANm(a,b,c){var d,e;d=new Ky;e=Jp(b);b=new MP;b.uw=c;KH(d,e);d.rl=b;return FO(Fh(a.bA.ct.jT,d));}
function APR(a,b){var c;c=ACH(b,10);b=a.bA;HY(b,AR9(c,b.c.dz));}
function AHa(a,b){var c,d;c=a.bA;d=b.column-1|0;Ck(c,b.lineNumber-1|0,d,0);}
function ANG(a){UG(a.g7);}
function AIt(a,b){P0(a,b);}
function AIp(a){return M2(Di(a.bA.c.f));}
function AJJ(a){var b;b=a.bA.c;return HC(b.r,b.o);}
function AG$(a,b){QG(a,b);}
function AMU(a,b,c){var d,e;d=new FU;e=Jp(b);b=new OE;b.rG=c;Xl(d,e,b);return FO(Fh(a.bA.ct.mx,d));}
function APt(a,b,c){var d,e;d=new JE;e=Jp(b);b=new WJ;b.oT=c;KH(d,e);d.va=b;return FO(Fh(a.bA.ct.me,d));}
function AQu(a){return E9(a.bA.c);}
function AFj(a,b){var c;c=a.bA;b=Cj(b);return $rt_ustr(B_(c.c.hL,b));}
function AHF(a,b){var c;c=b;b=a.bA;c=c-1|0;if(c>0)DU(b,T(b.C,(c-(Cz(b)/(b.C*2|0)|0)|0)-1|0));}
function AKC(a){var b,c,d,e,f,g,h,i;b=a.g7;c=b.kW;if(c){$rt_globals.cancelAnimationFrame(c);b.kW=0;}d=$rt_globals.window;e=b.jV;d.removeEventListener("resize",Bp(e,"handleEvent"));b.l9.disconnect();f=b.e5;e=f.is;if(e!==null){e.hP=KZ(e,e.hP);e.ju=KZ(e,e.ju);e.jl=KZ(e,e.jl);e.mk=0;e.lw=0;f.is=null;}It(f.cZ);f=b.hg;if(f!==null){e=f.lc;if(e!==null){g=e.pz.data;c=g.length;h=0;while(h<c){e=g[h];d=e.ow;i=e.oy;e=e.ox;d.removeEventListener($rt_ustr(i),Bp(e,"handleEvent"));h=h+1|0;}f.lc=null;}b.hg=null;}b=b.jk;c=0;while
(c<b.gm.length){b.gm[c].terminate();e=b.gm;f=null;c;e[c]=f;c=c+1|0;}}
function AGA(a,b){var c;b=Cv(b,"f");c=new MD;c.sc=b;return FO(Fh(a.bA.ct.l4,c));}
function ANg(a,b){DA(a.bA,Cj(b),a.bA.dR);}
function AIh(a,b){var c;c=b;b=a.bA;DA(b,b.fk,c);}
function APp(a,b){var c;if(b instanceof EV){HY(a.bA,b.dq);return;}c=new BD;Bn(c,C(20));K(c);}
function AQG(a,b,c){var d,e,f,g;b=Cj(b);if(c===null)d=null;else{d=O(Bv,c.length);e=d.data;f=0;g=e.length;while(f<g){e[f]=Cj(c[f]);f=f+1|0;}}c=new Sj;c.rD=a;c.rE=b;c.rF=d;return new $rt_globals.Promise(Bp(c,"f"));}
function AMn(a,b,c){var d,e;d=new FU;e=Jp(b);b=new V8;b.t6=c;Xl(d,e,b);return FO(Fh(a.bA.ct.kA,d));}
function AGM(a,b){P0(a,b.lineNumber);}
function AQh(a,b){Uo(a,b);}
var Qr=F(0);
function EV(){var a=this;B.call(a);a.dq=null;a.ka=null;a.kZ=null;}
function E9(b){var c;c=b.le;if(c!==null)return c;c=new EV;c.dq=b;b.le=c;c.ka=null;c.kZ=null;return c;}
function AQ7(a){var b;b=a.ka;if(b===null)b=Kc(a.dq.dz);return b;}
function AJ2(a){var b;b=a.dq.f;FJ(b.f5);DL(b.cW);DL(b.cL);b.iM=0;b.b0=0;b.cJ=Xt(b);}
function ALH(a){var b;b=a.kZ;if(b===null)b=$rt_ustr(a.dq.f_);return b;}
function AQV(a,b){var c;c=b;return AEF(Pi(a.dq.f,c));}
function AMg(a){return M2(Di(a.dq.f));}
function AEH(a,b){var c,d,e,f,g,h;c=a.dq.f;d=b.lineNumber-1|0;e=b.column-1|0;f=0;g=0;a:{while(g<d){h=c.x.data;f=f+h[g].z|0;g=g+1|0;if(g>=h.length)break a;f=f+1|0;}}return f+e|0;}
var Sm=F(0);
function VC(){var a=this;B.call(a);a.di=null;a.p_=null;}
function PB(a,b){var c,d;a:{c=Cj(b);d=(-1);switch(Gi(c)){case 3075958:if(!BF(c,C(15)))break a;d=2;break a;case 102970646:if(!BF(c,C(16)))break a;d=0;break a;case 1441429116:if(!BF(c,C(17)))break a;d=1;break a;default:}}b:{switch(d){case 0:break;case 1:LV(a.di);break b;case 2:FT(a.di);break b;default:$rt_globals.console.info("unknown theme: "+b);break b;}J8(a.di);}}
function P2(a,b){var c,d;c=a.di;d=YI(b);c.w.dv=d;c.v.dv=d;}
function AP1(a){return E9(a.di.v.c);}
function AMA(a){UG(a.p_);}
function ALs(a,b){var c;if(!(b instanceof EV)){c=new BD;Bn(c,C(20));K(c);}c=a.di;b=b.dq;HY(c.v,b);}
function AGK(a,b){var c,d;c=a.di;b=Cj(b);d=c.w;DA(d,b,d.dR);c=c.v;DA(c,b,c.dR);}
function AHL(a,b){PB(a,b);}
function AOS(a,b){var c,d;c=b;b=a.di;d=b.w;DA(d,d.fk,c);b=b.v;DA(b,b.fk,c);}
function ALq(a,b){var c;if(!(b instanceof EV)){c=new BD;Bn(c,C(20));K(c);}c=a.di;b=b.dq;HY(c.w,b);}
function AIC(a){return E9(a.di.w.c);}
function AHr(a,b){P2(a,b);}
var Tk=F(0);
var CX=F(0);
function AQm(b){var c;c=new Qq;c.pz=b;return c;}
function C7(b,c){if(b!==null)b.eV();return c;}
var OQ=F(0);
function H9(){var a=this;B.call(a);a.j4=0;a.lP=0;a.kY=0;}
var AUL=0;function It(a){AUL=AUL-1|0;}
function Kf(a,b,c){return GB(a,b)+c|0;}
function Rx(){var a=this;H9.call(a);a.hH=null;a.dg=null;a.m4=null;}
function Fw(a){var b,c,d;b=a.dg;c=a.lP;d=a.kY;b.clearRect(0.0,0.0,c,d);}
function R3(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.dg;d="center";c.textAlign=d;break a;case 2:c=a.dg;d="right";c.textAlign=d;break a;default:break a;}d=a.dg;c="left";d.textAlign=c;}}
function CO(a,b){M0(a,b.nA);}
function M0(a,b){var c;if(a.m4!==b){c=a.dg;a.m4=b;c.font=b;}}
function Ev(a,b,c,d){var e,f,g;e=a.dg;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function GB(a,b){var c;c=$rt_ustr(b);return a.dg.measureText(c).width;}
function Yg(){var b;b=(Yu()).getContext("2d").measureText("");return ("fontBoundingBoxAscent" in b?1:0)&&("fontBoundingBoxDescent" in b?1:0)?1:0;}
function AFu(){return {alpha:false};}
var AAu=F();
var Hr=F(0);
function Uc(){B.call(this);this.od=null;}
function AH$(a,b,c){var d,e;b=Cv(b,"f");c=Cv(c,"f");d=a.od;e=new Pq;e.og=b;e.oh=d;Y9(e,c,ABD(d),X6(d));}
var ABl=F(0);
function ACH(b,c){var d,e,f,g,h,i,j,k,l,m,n;d=O(Bv,8);e=B1(16);f=0;g=0;h=b.length;i=0;while(true){j=BE(i,h);if(j>0)break;k=j>=0?c:b.charCodeAt(i)&65535;if(k!=c){j=e.data.length;if(j==f)e=Nt(e,j*2|0);l=e.data;j=f+1|0;l[f]=k;f=j;}else{l=d.data;m=El(e,0,f);j=g+1|0;n=l.length;if(n==g)d=C5(d,n*2|0);d.data[g]=m;d=d;f=0;g=j;}i=i+1|0;}return Zk(d,g);}
var ZP=F();
function Yu(){return (Fg()).createElement("canvas");}
function GM(b,c){if((b?1:0)?1:0)c=Cj(b);return c;}
function AMt(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
function LS(){var a=this;B.call(a);a.dz=null;a.f=null;a.le=null;a.f_=null;a.t5=null;a.kb=null;a.e_=null;a.ij=null;a.gk=null;a.qv=null;a.o=0;a.r=0;a.gU=0;a.gg=null;a.e6=null;a.hL=null;a.hx=0;a.i_=0;a.jF=0;a.go=ACp;a.tt=ACp;a.uJ=ACp;a.mW=0;a.xn=0;}
function AR9(a,b){var c=new LS();ABF(c,a,b);return c;}
function ARZ(a,b,c){var d=new LS();ADy(d,a,b,c);return d;}
function ABF(a,b,c){ADy(a,b,null,c);}
function ADy(a,b,c,d){var e,f,g,h;a.kb=YD();a.e_=AD5();a.gg=null;a.e6=BA();a.hL=HL();a.dz=d;a.f_=c;c=d===null?null:ADI(d.eI);e=b.data;a.t5=c;c=new J0;f=e.length;g=O(CE,Z(1,f));if(!f)g.data[0]=O5();b=g.data;h=0;while(h<f){b[h]=YS(e[h]);h=h+1|0;}N3(c,g);a.f=c;}
function Dw(a){var b;b=a.f_;if(b===null)b=a.t5;return b;}
function FL(a){var b;b=a.dz;return b===null?null:b.gY;}
function GP(a,b){var c,d,e,f,g,h,i,j;b=b.data;$rt_globals.console.info("onFileParsed");a.i_=1;a.jF=1;a.hx=1;c=CG(b[0]);d=Ed(b[1]);e=(CG(b[2])).data[0];if(e==4){f=GZ(Ed(b[3]));D_(a.hL,C(21),f);K$(a.f,c,d);}else if(b.length<5)K$(a.f,c,d);else{g=CG(b[3]);h=g.data;i=Ed(b[4]);b=i.data;NU(a.f,c,d,g,i,0);Ud(a,Is(g,h.length),Nt(i,b.length));}Tx(a,AAi(e));j=JW(DS(),a.go);f=new R;V(f);L(FW(L(f,C(22)),j),C(23));$rt_globals.console.info($rt_ustr(S(f)));UU(a.ij);}
function U5(a,b){var c,d,e,f;if(!a.i_&&!a.hx){b=b.data;c=CG(b[0]);d=Ed(b[1]);K$(a.f,c,d);a.jF=1;e=JW(DS(),a.go);f=new R;V(f);L(FW(L(f,C(24)),e),C(23));$rt_globals.console.info($rt_ustr(S(f)));return;}}
function Tx(a,b){var c,d;c=Dw(a);if(!BI(c,b)){d=new R;V(d);L(L(L(L(d,C(25)),c),C(26)),b);$rt_globals.console.info($rt_ustr(S(d)));a.f_=b;}}
function Kx(a){var b;Sx(a,Dr(a.o,a.r),Gx(a.f,a.o,a.r));if(!(a.gg!==null&&!DI(a.e6))){b=a.r;if(b>0)Sx(a,Dr(a.o,b-1|0),Gx(a.f,a.o,a.r-1|0));}}
function Sx(a,b,c){var d,e,f,g,h,i,j,k,l;L2(a);d=B_(a.f.cW,c);if(d!==null)c=d;a:{e=B_(a.f.cL,c);if(e!==null){a.gg=Lg(a.f,c);c=BP(e);while(true){if(!BQ(c))break a;f=BS(c);Bw(a.e6,Lg(a.f,f));}}}c=a.ij;if(c!==null){g=b.V;h=b.bd;b=c.ct;f=Dw(c.c);e=FL(c.c);i=(Cf(b.me)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(JB(b,f,e)){b=b.va;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.c;e=new TA;e.wu=c;e.ws=f;e.wt=g;e.wr=h;c=c.hI;b=b.oT;f=E9(f);d=HC(h,g);l=JH();b=b.provideDocumentHighlights(f,d,l);f=new SW;f.sh=e;f.sg=c;LT(b,
f,c);}}}
function L2(a){a.gg=null;FJ(a.e6);}
function Ud(a,b,c){var d,e,f,g,h;if(a.gk!==null){a.uJ=DS();d=a.f.b0;e=a.gk;f=new Ml;f.t3=a;g=O(B,3);h=g.data;h[0]=b;h[1]=c;b=Bz(1);b.data[0]=d;h[2]=b;CR(e,f,C(27),g);}}
function PX(a,b,c){var d,e;a.ij=b;a.gk=c;if(c!==null&&!a.hx){a.go=DS();b=Zq(Dw(a));if(b!==null){c=a.gk;d=new U_;d.ot=a;e=O(B,1);e.data[0]=Di(a.f);CR(c,d,b,e);}}}
function Io(a){var b,c,d,e,f;$rt_globals.console.info("Model::parseFullFile");b=Zq(Dw(a));if(b===null)UU(a.ij);else{a.go=DS();if(!BF(b,C(28))){c=a.gk;d=new SX;d.mM=a;e=O(B,1);e.data[0]=Di(a.f);CR(c,d,b,e);}else{c=a.gk;d=new SY;d.t1=a;f=O(B,1);f.data[0]=Di(a.f);Ly(c,d,0,b,f);}}}
function Zq(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(Gi(b)){case -1655966961:if(!BF(b,C(29)))break a;c=3;break a;case 3401:if(!BF(b,C(30)))break a;c=2;break a;case 98723:if(!BF(b,C(31)))break a;c=1;break a;case 3254818:if(!BF(b,C(32)))break a;c=0;break a;case 3556653:if(!BF(b,C(33)))break a;c=4;break a;default:}}b:{switch(c){case 0:break;case 1:b=C(34);break b;case 2:b=C(35);break b;case 3:b=C(28);break b;case 4:b=C(36);break b;default:b=null;break b;}b=C(37);}}return b;}
var Yf=F();
function Kc(b){var c,d,e;if(b===null)return null;c=b.uD;if(c!==null)return c;c=b.gY;d=b.id;e=b.eI;b=b;return APG($rt_ustr(c),$rt_ustr(d),$rt_ustr(e),b);}
function ABE(b){var c;if(!((b?1:0)?1:0))return null;c=b.javaPeer;if(c instanceof U6)return c;return AFS(GM(b.scheme,null),GM(b.authority,null),GM(b.path,null),b);}
function APG(b,c,d,e){return {scheme:b,authority:c,path:d,javaPeer:e};}
function Xu(){B.call(this);this.ni=null;}
function AH3(a,b,c){var d,e;b=Cv(b,"f");c=Cv(c,"f");d=a.ni;e=new QO;e.u1=b;e.u2=d;Y9(e,c,ABD(d),X6(d));}
var ADV=F();
var ACt=F(0);
function Vd(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C5(b,f+g|0);Dc(c,0,d,f,g);return d;}
function Ku(b,c,d){Dc(b,c,d,0,d.data.length);return d;}
function Rl(b,c,d){var e;if(c>0)Dc(b,0,d,0,c);e=d.data.length;if(c<e)Dc(b,c+1|0,d,c,e-c|0);return d;}
function AAb(b,c,d,e){var f;if(c>0)Dc(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Dc(b,d,e,c,f-d|0);}return e;}
function GT(b){var c;c=new Vn;c.rU=b;return c;}
function Zk(b,c){if(b.data.length!=c)b=C5(b,c);return b;}
var Yx=F();
function Nt(b,c){var d,e,f,g;b=b.data;d=B1(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ADf(b,c){var d,e,f,g;b=b.data;d=Eo(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Is(b,c){var d,e,f,g;b=b.data;d=Bz(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C5(b,c){var d,e,f,g;d=b.data;e=AB3(HM(By(b)),c);f=Ba(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Zo(b){var c,d,e;if(b===null)return C(11);c=new R;V(c);CZ(c,C(38));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)CZ(c,C(39));L(c,e[d]);d=d+1|0;}CZ(c,C(40));return S(c);}
function G7(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BD;X(f);K(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Y2(b,c,d,e){var f,g;if(c>d){e=new BD;X(e);K(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ZL(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AUM;e=O(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Ba(j,h+f|0);l=h+(2*f|0)|0;m=Ba(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.vC(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ABo(b,c){return Tz(b,0,b.data.length,c);}
function Tz(b,c,d,e){var f,g,h,i,j;f=BE(c,d);if(f>0){g=new BD;X(g);K(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var ACK=F();
function Cj(b){return $rt_str(b);}
function U6(){var a=this;B.call(a);a.gY=null;a.id=null;a.eI=null;a.uD=null;}
function AFS(a,b,c,d){var e=new U6();AEJ(e,a,b,c,d);return e;}
function AEJ(a,b,c,d,e){a.gY=b;a.id=c;a.eI=d;a.uD=e;}
function AGv(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return BI(a.gY,c.gY)&&BI(a.id,c.id)&&BI(a.eI,c.eI)?1:0;}return 0;}
function AC0(){var a=this;B.call(a);a.bB=null;a.bt=null;a.c1=0;}
function YD(){var a=new AC0();AQT(a);return a;}
function AGz(a){var b=new AC0();ALQ(b,a);return b;}
function AQT(a){a.bB=new GA;a.bt=new GA;}
function ALQ(a,b){a.bB=new GA;a.bt=new GA;Hy(a,b);}
function Hy(a,b){T4(a.bB,b.bB);T4(a.bt,b.bt);a.c1=b.c1;}
function K0(a,b,c){BZ(a.bt,b,c);if(!a.c1)BZ(a.bB,b,c);}
function Pz(a,b){BZ(a.bB,b,0);BZ(a.bt,b+1|0,0);}
function DB(a){if(RB(a.bB,a.bt)>0)return a.bt;return a.bB;}
function Fc(a){if(RB(a.bB,a.bt)<0)return a.bt;return a.bB;}
function ABw(a,b){var c,d,e,f;c=DB(a);d=Fc(a);e=c.K;if(e<=b){f=BE(b,d.K);if(f<=0)return Cg(b<=e?c.U:0,f>=0?d.U:(-1));}return null;}
function C6(a){var b,c;b=a.bB;c=a.bt;return (b===c?1:c!==null&&By(b)===By(c)?(b.K==c.K&&b.U==c.U?1:0):0)?0:1;}
function ACB(a,b){var c,d;if(!C6(a))return 0;c=DB(a);d=Fc(a);return c.K<=b&&b<d.K?1:0;}
function ABU(){var a=this;B.call(a);a.es=null;a.en=0;a.da=0;}
function AD5(){var a=new ABU();AME(a);return a;}
function AME(a){a.es=O(Kt,16);a.en=0;a.da=(-1);}
function Vb(a,b){var c,d,e;c=a.en;d=a.es;if(c==d.data.length)a.es=C5(d,c+16|0);d=a.es.data;e=a.en;a.en=e+1|0;d[e]=b;}
function RD(a){var b,c,d;b=a.da;c=a.en-1|0;if(b==c)a.da=b-1|0;d=a.es.data;a.en=c;d[c]=null;}
var VE=F(0);
function AD1(a,b){var c;c=a.bW();while(c.cd()){b.i(c.bP());}}
var FH=F(0);
function UA(a){var b,c;b=new Sh;c=new Qe;c.pT=a;b.tP=c;return b;}
function AJS(a,b){var c,d;c=a.bW();d=0;while(c.cd()){if(b.cm(c.bP())){c.kV();d=1;}}return d;}
var EA=F();
function DI(a){return a.cz()?0:1;}
function Hl(a,b){var c,d,e,f,g,h;c=b.data;d=a.k;e=c.length;if(e<d)b=AB3(HM(By(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BP(a);while(BQ(f)){g=b.data;h=e+1|0;g[e]=BS(f);e=h;}return b;}
function AOq(a,b){var c;c=a.bW();while(c.cd()){if(BI(c.bP(),b)){c.kV();return 1;}}return 0;}
function Gk(a,b){var c,d;c=0;d=b.bW();while(d.cd()){if(!a.sy(d.bP()))continue;c=1;}return c;}
var J_=F(0);
var IK=F(0);
function Ei(){EA.call(this);this.bN=0;}
function ANI(a,b){a.my(a.cz(),b);return 1;}
function BP(a){var b;b=new Nn;b.gI=a;b.mh=a.bN;b.iD=a.cz();b.f1=(-1);return b;}
function AMM(a,b,c){var d,e;if(b>=0&&b<=a.cz()){if(c.dP())return 0;d=c.bW();while(d.cd()){e=b+1|0;a.my(b,d.bP());b=e;}return 1;}c=new BD;X(c);K(c);}
function APk(a,b,c){c=new D1;X(c);K(c);}
function JO(a,b){var c,d;c=a.cz();d=0;while(true){if(d>=c)return (-1);if(BI(b,a.lt(d)))break;d=d+1|0;}return d;}
function ALC(a,b){var c,d;if(!H_(b,IK))return 0;c=b;if(a.k!=c.k)return 0;d=0;while(d<c.k){if(!BI(Bs(a,d),Bs(c,d)))return 0;d=d+1|0;}return 1;}
var DR=F(0);
var KT=F(0);
function YB(){var a=this;Ei.call(a);a.ci=null;a.k=0;}
function BA(){var a=new YB();AH5(a);return a;}
function AH5(a){a.ci=O(B,10);}
function IV(a,b){var c,d;c=a.ci.data.length;if(c<b){d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.ci=C5(a.ci,d);}}
function Bs(a,b){II(a,b);return a.ci.data[b];}
function AMw(a){return a.k;}
function Bw(a,b){var c,d;IV(a,a.k+1|0);c=a.ci.data;d=a.k;a.k=d+1|0;c[d]=b;a.bN=a.bN+1|0;return 1;}
function Ry(a,b,c){var d,e,f;Pf(a,b);IV(a,a.k+1|0);d=a.k;e=d;while(e>b){f=a.ci.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.ci.data[b]=c;a.k=d+1|0;a.bN=a.bN+1|0;}
function Fm(a,b){var c,d,e,f;II(a,b);c=a.ci.data;d=c[b];e=a.k-1|0;a.k=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.bN=a.bN+1|0;return d;}
function Vm(a,b){var c;c=JO(a,b);if(c<0)return 0;Fm(a,c);return 1;}
function FJ(a){Y2(a.ci,0,a.k,null);a.k=0;a.bN=a.bN+1|0;}
function Y3(a,b,c){var d,e,f,g,h,i;Pf(a,b);if(c.dP())return 0;IV(a,a.k+c.cz()|0);d=c.cz();e=a.k;f=e-1|0;while(f>=b){g=a.ci.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.k=e+d|0;h=c.bW();i=0;while(i<d){g=a.ci.data;e=b+1|0;g[b]=h.bP();i=i+1|0;b=e;}a.bN=a.bN+1|0;return 1;}
function II(a,b){var c;if(b>=0&&b<a.k)return;c=new BV;X(c);K(c);}
function Pf(a,b){var c;if(b>=0&&b<=a.k)return;c=new BV;X(c);K(c);}
function DY(a,b){var c;c=0;while(c<a.k){b.i(a.ci.data[c]);c=c+1|0;}}
var Kw=F(0);
function DD(){var a=this;B.call(a);a.kh=null;a.ks=null;}
function J3(){var a=this;DD.call(a);a.cy=0;a.bV=null;a.cv=0;a.wf=0.0;a.kQ=0;}
function HL(){var a=new J3();PG(a);return a;}
function AIA(a,b){return O(Ge,b);}
function PG(a){var b;b=ADm(16);a.cy=0;a.bV=O(Ge,b);a.wf=0.75;Uh(a);}
function ADm(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function DL(a){var b;if(a.cy>0){a.cy=0;b=a.bV;Y2(b,0,b.data.length,null);a.cv=a.cv+1|0;}}
function Uh(a){a.kQ=a.bV.data.length*a.wf|0;}
function I8(a,b){return S0(a,b)===null?0:1;}
function UB(a){var b;b=new Ui;b.rq=a;return b;}
function B_(a,b){var c;c=S0(a,b);if(c===null)return null;return c.cD;}
function S0(a,b){var c,d;if(b===null)c=R9(a);else{d=b.lV();c=Qn(a,b,d&(a.bV.data.length-1|0),d);}return c;}
function Qn(a,b,c,d){var e;e=a.bV.data[c];while(e!==null&&!(e.iX==d&&Yp(b,e.cl))){e=e.cs;}return e;}
function R9(a){var b;b=a.bV.data[0];while(b!==null&&b.cl!==null){b=b.cs;}return b;}
function Jt(a){var b;if(a.kh===null){b=new O7;b.gJ=a;a.kh=b;}return a.kh;}
function D_(a,b,c){var d,e,f,g;if(b===null){d=R9(a);if(d===null){a.cv=a.cv+1|0;d=T8(a,null,0,0);e=a.cy+1|0;a.cy=e;if(e>a.kQ)Up(a);}}else{e=b.lV();f=e&(a.bV.data.length-1|0);d=Qn(a,b,f,e);if(d===null){a.cv=a.cv+1|0;d=T8(a,b,f,e);e=a.cy+1|0;a.cy=e;if(e>a.kQ)Up(a);}}g=d.cD;d.cD=c;return g;}
function T8(a,b,c,d){var e,f;e=new Ge;Xq(e,b,null);e.iX=d;f=a.bV.data;e.cs=f[c];f[c]=e;return e;}
function Z6(a,b){var c,d,e,f,g,h,i,j;c=ADm(!b?1:b<<1);d=O(Ge,c);e=d.data;f=0;b=c-1|0;while(true){g=a.bV.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.iX&b;j=h.cs;h.cs=e[i];e[i]=h;h=j;}f=f+1|0;}a.bV=d;Uh(a);}
function Up(a){Z6(a,a.bV.data.length);}
function Yp(b,c){return b!==c&&!b.bu(c)?0:1;}
var Y0=F(0);
function ADI(b){if(b===null)return null;if(!DJ(b,C(41))&&!DJ(b,C(42))&&!DJ(b,C(43))&&!DJ(b,C(44))&&!DJ(b,C(45))&&!DJ(b,C(46))){if(DJ(b,C(47)))return C(32);if(DJ(b,C(48)))return C(30);if(!DJ(b,C(49)))return C(33);return C(29);}return C(31);}
function AAi(b){var c;a:{switch(b){case 0:break;case 1:c=C(32);break a;case 2:c=C(31);break a;case 3:c=C(30);break a;case 4:c=C(29);break a;default:c=null;break a;}c=C(33);}return c;}
function J0(){var a=this;B.call(a);a.x=null;a.cJ=null;a.dX=null;a.cW=null;a.cL=null;a.f5=null;a.g2=null;a.b0=0;a.iM=0;a.sR=0.0;}
function AUN(a){var b=new J0();N3(b,a);return b;}
function N3(a,b){var c,d,e;c=b.data;d=new Pj;e=new Kq;PG(e);d.ea=e;a.dX=d;a.cW=HL();a.cL=HL();a.f5=BA();if(c.length){a.x=b;a.cJ=Xt(a);return;}d=new BD;X(d);K(d);}
function Xt(a){var b;b=UN(a);return ACn(APY(Jg(0,b,0),null,null));}
function BG(a,b){return a.x.data[b];}
function Cb(a){return a.x.data.length;}
function UN(a){return EB(a,Cb(a));}
function Fo(a,b){return a.x.data[b].z;}
function ACM(a,b,c){var d,e,f,g,h;d=a.x;e=d.data;f=e[b];d=C5(d,e.length+1|0);e=d.data;a.x=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Ds(O(B$,0));a.x.data[b+1|0]=f;}else if(c==f.z){e[b]=f;e[b+1|0]=Ds(O(B$,0));}else{e=(Hu(f,c)).data;d=a.x.data;d[b]=e[0];d[b+1|0]=e[1];}Fb(a,b,c,0,C(50));}
function KI(a,b){var c,d,e,f,g,h,i;c=a.x.data;d=c[b];e=c[b+1|0];f=Ds(Vd(d.l,e.l));g=a.x;h=g.data.length;if(b<h&&b>=0){i=O(CE,h-1|0);c=i.data;Rl(g,b,i);c[b]=f;a.x=i;return;}d=new Bt;X(d);K(d);}
function MG(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.x.data;if(!(c<d[b].z?0:1)){d=(BG(a,b)).l.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<H(h.q)){f=I(h.q,g);break a;}g=g-H(h.q)|0;f=f+1|0;}f=0;}F8();h=new Bv;d=B1(1);d.data[0]=f;IO(h,d);Fb(a,b,c,1,h);h=a.x.data[b];i=h.l;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=H(d[j].q);if(c<b)break;c=c-b|0;j=j+1|0;}}if(H(d[j].q)==1)h.l=Rl(i,j,O(B$,e-1|0));else{k=d[j];if(c<=0)l=DC(D3(k.q,1),k.bX,k.bH);else if(c>=(H(k.q)-1|0)){l=new B$;m=k.q;Tr(l,B9(m,0,H(m)-
1|0),k.bX,k.bH);}else{i=B1(H(k.q)-1|0);n=i.data;b=0;while(b<c){n[b]=I(k.q,b);b=b+1|0;}b=n.length;while(c<b){m=k.q;e=c+1|0;n[c]=I(m,e);c=e;}l=DC(GZ(i),k.bX,k.bH);}d[j]=l;}h.z=h.z-1|0;D9(h);}else if(b!=(d.length-1|0)){Fb(a,b,c,1,C(50));KI(a,b);}}
function Xz(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Sa(a.x.data[b],c,e[0]);return;}g=f-1|0;d=(Hu(a.x.data[b],c)).data;h=d[0];i=d[1];d=a.x;j=C5(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.l.data;f=l.length;c=!f?0:H(l[f-1|0].q);Ma(h,h.l.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Eu(e[m])?YS(e[m]):Ds(O(B$,0));d[b+m|0]=k;m=m+1|0;}Ma(i,0,0,e[g]);d[b+g|0]=i;a.x=j;}
function VA(a,b){var c,d,e,f,g,h,i;c=DB(b);d=Fc(b);e=c.K;if(e==d.K)return B9(EL(a.x.data[e]),c.U,d.U);f=new R;V(f);b=a.x.data[c.K];e=c.U;BX(CZ(f,D3(EL(b),e)),10);g=a.x.data;e=c.K+1|0;h=d.K;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;X2(CZ(f,EL(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.x.data[d.K];h=d.U;CZ(f,B9(EL(b),0,h));return S(f);}b=new V2;X(b);K(b);}
function MS(a,b,c){var d;VU(a,b);d=DB(b);Fb(a,d.K,d.U,1,c);}
function VU(a,b){var c,d,e,f,g,h,i;a:{c=DB(b);d=Fc(b);e=c.K;if(e==d.K)FX(a.x.data[e],c.U,d.U);else{b=a.x.data[e];FX(b,c.U,b.z);FX(a.x.data[d.K],0,d.U);e=c.K+1|0;f=d.K;g=a.x;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=O(CE,(h-f|0)+e|0);AAb(g,e,f,i);a.x=i;KI(a,c.K);break a;}b=new Bt;X(b);K(b);}b=new Bt;X(b);K(b);}}}
function Gx(a,b,c){return Dr(b,FB(BG(a,b),c));}
function Wo(a,b){var c,d,e;c=0;d=0;while(true){e=a.x.data.length;if(c>=e)break;if((d+(BG(a,c)).z|0)>=b)return Cg(c,b-d|0);d=d+((BG(a,c)).z+1|0)|0;c=c+1|0;}return Cg(e,0);}
function EB(a,b){var c,d,e;c=0;d=a.x.data.length;e=0;while(e<b){c=c+Fo(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Lg(a,b){return Lz(BG(a,b.V),b.bd);}
function Di(a){var b,c,d,e,f,g,h,i,j;b=B1(UN(a));c=b.data;d=a.x.data.length;e=0;f=0;while(e<d){g=a.x.data[e].l.data;h=g.length;i=0;while(i<h){j=g[i].q;PS(j,0,H(j),b,f);f=f+H(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Fb(a,b,c,d,e){var f,g,h,i,j,k;a:{a.b0=a.b0+1|0;f=a.f5;g=O(Gp,1);h=new Gp;h.dI=b;h.dU=c;i=LF(e,C(50),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=Cg(b,c+H(i[0])|0);break a;}k=Cg((b+j|0)-1|0,H(i[j-1|0]));break a;}}k=Cg(b,c);}i=g.data;h.k2=k;h.l$=d;h.fq=e;i[0]=h;Bw(f,g);JG(a,b,c,d,e);}
function JG(a,b,c,d,e){var f;f=EB(a,b)+c|0;if(!d){Oq(a.cJ,f,H(e));Ua(a.dX,f,H(e));}else{V5(a.cJ,f,H(e));Ne(a.dX,f,H(e));}}
function M8(a,b){var c,d,e;c=LF(b.fq,C(50),(-1));if(b.l$){Xz(a,b.dI,b.dU,c);Oq(a.cJ,EB(a,b.dI)+b.dU|0,H(b.fq));Ua(a.dX,EB(a,b.dI)+b.dU|0,H(b.fq));}else{c=c.data;d=YD();BZ(d.bB,b.dI,b.dU);e=c.length;if(e==1)BZ(d.bt,b.dI,b.dU+H(c[0])|0);else BZ(d.bt,(b.dI+e|0)-1|0,H(c[e-1|0]));VU(a,d);V5(a.cJ,EB(a,b.dI)+b.dU|0,H(b.fq));Ne(a.dX,EB(a,b.dI)+b.dU|0,H(b.fq));}return b.k2;}
function TD(a){return a.iM==a.b0?0:1;}
function G4(a){a.iM=a.b0;}
function Pi(a,b){var c,d,e,f,g;c=0;d=0;while(true){e=a.x.data;f=e.length;if(d>=f)break;g=e[d].z;if(b<=(c+g|0))return Dr(d,b-c|0);c=c+(g+1|0)|0;d=d+1|0;}return Dr(f,0);}
function Pn(a){var b,c,d;a.g2=Bz(a.x.data.length+1|0);b=0;while(b<a.x.data.length){c=a.g2.data;d=b+1|0;c[d]=(c[b]+(BG(a,b)).z|0)+1|0;b=d;}}
function Xb(a,b){var c,d,e;c=a.g2;if(c===null)return Pi(a,b);d=ABo(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;e=Dr(d,b-(d<0?0:a.g2.data[d])|0);if(e.bd>=(BG(a,e.V)).z){e.V=e.V+1|0;e.bd=0;}return e;}
var Mh=F(0);
var SE=F(0);
var D5=F(0);
var Ym=F();
function Fg(){return $rt_globals.window.document;}
function ALP(a){return a.EW();}
function AOW(a,b){return a.HH($rt_str(b));}
function AOE(a,b){a.Da($rt_str(b));}
function AGB(a,b){return a.BR($rt_str(b));}
function AEn(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AGW(a){return a.HL();}
function AOP(a,b,c){return a.F7($rt_str(b),$rt_str(c));}
function AJQ(a,b,c,d){a.xA($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function AFk(a){return a.DV();}
function AMV(a){return !!a.Ii();}
function APD(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function ALk(a){return a.DG();}
function AJj(a,b){a.FV($rt_str(b));}
function ALR(a){return !!a.CN();}
function ARf(a){return a.HV();}
function AKx(a){return $rt_ustr(a.zg());}
function AFa(a,b){return a.Eb(b?1:0);}
function AQN(a){return a.Ih();}
function AJg(a,b,c){return a.IU($rt_str(b),$rt_str(c));}
function ALa(a,b,c){return a.CK(b,c?1:0);}
function AQg(a,b,c){return !!a.Hb($rt_str(b),$rt_str(c));}
function AEq(a){return a.FI();}
function AI0(a){return $rt_ustr(a.JF());}
function AG7(a,b){return !!a.xV(b);}
function AH_(a,b){return a.KA($rt_str(b));}
function AJz(a,b,c){return a.ET($rt_str(b),$rt_str(c));}
function AKD(a){return a.Ah();}
function AFm(a,b){return a.HS($rt_str(b));}
function AH9(a){return $rt_ustr(a.zy());}
function ANn(a){a.CE();}
function AD$(a,b){return a.IZ($rt_str(b));}
function APu(a,b){return a.Do($rt_str(b));}
function AFK(a,b){return a.CD($rt_str(b));}
function APw(a){return $rt_ustr(a.AA());}
function AFW(a,b,c){return a.E1(b,c);}
function ANa(a,b){return a.zf(b);}
function ANY(a){return a.GP();}
function AMl(a,b,c){a.xg($rt_str(b),Cv(c,"handleEvent"));}
function AL0(a,b,c){return a.AB(b,c);}
function APn(a){return !!a.G9();}
function AQS(a,b){return a.EM($rt_str(b));}
function AL3(a,b,c,d){a.wM($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function AGY(a){return a.GU();}
function AGd(a,b,c){return a.D_($rt_str(b),$rt_str(c));}
function AEV(a){return $rt_ustr(a.A2());}
function AQI(a){return a.z2();}
function AMk(a){return a.An();}
function AES(a){return a.Hc();}
function AMm(a,b,c){a.xS($rt_str(b),Cv(c,"handleEvent"));}
function AGN(a,b){return a.Jp(b);}
function AIs(a,b){a.zD($rt_str(b));}
function AN8(a){return $rt_ustr(a.zn());}
var AAt=F();
function Yo(b){return Math.log(b);}
function ADU(b,c){return AK3(b,c);}
function AK3(b,c){return Math.pow(b,c);}
function Ba(b,c){if(b<c)c=b;return c;}
function Z(b,c){if(b>c)c=b;return c;}
function AQj(b,c){return Math.max(b,c);}
function GA(){var a=this;B.call(a);a.K=0;a.U=0;}
function BZ(a,b,c){a.K=b;a.U=c;}
function T4(a,b){a.K=b.K;a.U=b.U;}
function RB(a,b){var c;c=BE(a.K,b.K);if(c)return c;return BE(a.U,b.U);}
function Kt(){var a=this;B.call(a);a.k$=null;a.jO=null;}
function Ln(a){return a.k$.V;}
function Je(a){return a.k$.bd;}
function CE(){var a=this;B.call(a);a.l=null;a.z=0;a.fm=null;a.ed=null;a.dc=null;a.gE=null;a.fB=0;a.gG=0;a.g6=0;}
var AUO=0;var AUP=0;var AUQ=0;function YS(a){var b=new CE();ABR(b,a);return b;}
function Ds(a){var b=new CE();QP(b,a);return b;}
function ABR(a,b){var c;c=O(B$,1);c.data[0]=ZE(b);QP(a,c);}
function QP(a,b){var c,d,e,f;c=b.data;a.l=b;d=0;e=c.length;f=0;while(f<e){d=d+H(c[f].q)|0;f=f+1|0;}a.z=d;D9(a);}
function G1(a){return a.l.data.length;}
function KD(a,b){return a.l.data[b];}
function FB(a,b){return RF(a,GL(a,b));}
function RF(a,b){return b<=0?0:a.dc.data[b-1|0];}
function GL(a,b){var c,d,e,f;c=a.l.data.length;if(!c)return (-1);if(!(a.dc!==null&&!a.g6)){Wp(a);d=0;e=0;f=a.l.data.length;while(d<f){e=e+H(a.l.data[d].q)|0;a.dc.data[d]=e;d=d+1|0;}a.g6=0;}d=Tz(a.dc,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Lz(a,b){var c;c=a.l.data;if(!c.length)return null;return c[GL(a,b)];}
function FX(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.z){a.l=O(B$,0);D9(a);a.z=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.l.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=H(g[e].q);i=H(a.l.data[f].q);j=BE(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.l.data[f];if(!b&&c==H(k.q)?1:0){g=a.l;a.l=Rl(g,e,O(B$,g.data.length-1|0));a.z=a.z-d|0;D9(a);return;}a.l.data[e]=DC(Hk(B9(k.q,0,b),D3(k.q,c)),k.bX,k.bH);}else{g=a.l.data;l=g[e];m=g[f];if(b){if(b!=
H(l.q))a.l.data[e]=DC(B9(l.q,0,b),l.bX,l.bH);e=e+1|0;}if(c==H(m.q))f=f+1|0;else if(c)a.l.data[f]=DC(D3(m.q,c),m.bX,m.bH);g=a.l;a.l=AAb(g,e,f,O(B$,(g.data.length-f|0)+e|0));}a.z=a.z-d|0;D9(a);}
function Hu(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return G(CE,[Ds(O(B$,0)),a]);if(b>=a.z)return G(CE,[a,Ds(O(B$,0))]);c=a.l;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=H(e[d].q);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return G(CE,[Ds(Ku(c,0,O(B$,d))),Ds(Ku(c,d,O(B$,f-d|0)))]);h=e[d];e=Ku(c,0,O(B$,d+1|0));i=e.data;j=Ku(c,d,O(B$,f-d|0));c=j.data;i[d]=DC(B9(h.q,0,b),h.bX,h.bH);c[0]=DC(D3(h.q,b),h.bX,h.bH);return G(CE,[Ds(e),Ds(j)]);}
function Sa(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.l.data;if(e>=f.length)break a;g=H(f[d].q);if(b<=g)break;b=b-g|0;d=e;}}Ma(a,d,b,c);}
function Ma(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Eu(d))return;e=a.l;f=e.data;g=f.length;if(!g){h=O(B$,1);h.data[0]=ZE(d);a.l=h;}else if(!b&&!c){h=O(B$,g+1|0);f=h.data;Dc(e,0,h,1,g);f[0]=ZE(d);a.l=h;}else{i=f[b];if(c<=0)j=DC(Hk(d,i.q),i.bX,i.bH);else if(c>=H(i.q))j=DC(Hk(i.q,d),i.bX,i.bH);else{k=H(d);l=k+c|0;m=H(i.q)-c|0;e=B1(H(i.q)+k|0);h=e.data;n=0;while(n<c){h[n]=I(i.q,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=I(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=I(i.q,g+c|0);g=g+1|0;}j=DC(GZ(e),i.bX,i.bH);}f[b]=j;}a.z=a.z+
H(d)|0;D9(a);}
function Ni(a){var b,c,d,e,f,g;b=0;c=a.l.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Lv(f)){if(I(f.q,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function J2(a,b,c){var d,e,f,g,h,i,j;d=a.l.data.length;e=a.fm;if(!(e!==null&&e.data.length>=d)){a.fm=AEh(d);a.ed=Bz(d);a.fB=1;}Wp(a);if(!a.fB)AUP=AUP+1|0;else{f=0;g=0.0;AUO=AUO+1|0;h=0;while(h<d){i=c.data;j=a.l.data[h];f=f+H(j.q)|0;a.dc.data[h]=f;CO(b,i[IQ(j)]);g=g+GB(b,j.q);a.fm.data[h]=g;a.ed.data[h]=g+0.5|0;h=h+1|0;}a.z=f;a.fB=0;a.g6=0;}}
function Wp(a){var b;b=a.dc;if(!(b!==null&&b.data.length>=a.l.data.length)){a.dc=Bz(a.l.data.length);a.g6=1;}}
function D9(a){a.fB=1;a.gG=1;a.g6=1;a.gE=null;}
function R2(a,b,c,d){var e,f,g,h,i,j,k;if(a.gE===null)a.gE=O($rt_arraycls($rt_intcls()),a.l.data.length);e=a.gE.data[d];if(e===null){e=c.data;f=a.l.data[d];CO(b,e[IQ(f)]);f=f.q;e=Bz(H(f)-1|0);c=E5(f);g=!d?0.0:a.fm.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;L$(f,c,0,k);h[i]=g+GB(b,f)+0.5|0;i=k;}a.gE.data[d]=e;}return e;}
function F3(a,b,c,d){var e,f,g,h,i;if(a.l.data.length&&b){if(!(!a.fB&&a.ed!==null))J2(a,c,d);if(b>=a.z)return a.ed.data[a.l.data.length-1|0];e=0;f=0;a:{while(true){g=a.l.data;if(f>=g.length)break a;h=e+H(g[f].q)|0;i=BE(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.ed.data[f];}return (R2(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function EC(a){var b,c,d;a:{b=a.l.data.length;if(b){c=a.ed.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Gl(a,b){var c;if(b>=a.z)return b+1|0;c=GL(a,b);return a.dc.data[c];}
function EL(a){var b,c,d,e;b=new R;FD(b,a.z);c=a.l.data;d=c.length;e=0;while(e<d){CZ(b,c[e].q);e=e+1|0;}return S(b);}
function O5(){return YS(C(3));}
function Z$(){AUQ=0;}
var Pc=F(0);
var Rt=F(0);
var Re=F(0);
var Th=F(0);
var WF=F(0);
var Ug=F(0);
var Zd=F();
function AMq(a,b,c){a.xS($rt_str(b),Cv(c,"handleEvent"));}
function AJ_(a,b,c){a.xg($rt_str(b),Cv(c,"handleEvent"));}
function AI2(a,b,c,d){a.wM($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function AFr(a,b){return !!a.xV(b);}
function AHc(a,b,c,d){a.xA($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function Pj(){var a=this;B.call(a);a.ft=null;a.ea=null;}
function AGp(a,b){var c=new Pj();AIg(c,a,b);return c;}
function AIg(a,b,c){a.ft=b;a.ea=c;}
function Ua(a,b,c){var d;d=a.ft;if(d===null)return;QJ(a,d,b,c);}
function Ne(a,b,c){var d;d=a.ft;if(d===null)return;TH(a,d,b,c);}
function QJ(a,b,c,d){var e,f,g,h;e=b.dQ.bW();while(e.cd()){Xh(a,e.bP(),c,d);}e=b.eg.bW();while(e.cd()){f=e.bP();g=new Tm;g.q4=a;DW(a,g,f,c,d);}h=b.fU.bW();while(h.cd()){e=h.bP();Xh(a,e.ii,c,d);f=new Tn;f.no=a;DW(a,f,e.jc,c,d);}b=b.ce.bW();while(b.cd()){QJ(a,b.bP(),c,d);}}
function Xh(a,b,c,d){I$(a,b.dS,c,d);}
function DW(a,b,c,d,e){var f,g;a:{if(c instanceof FS){f=c.gj;g=new Xw;g.or=a;g.oo=b;g.on=d;g.oq=e;DY(f,g);}else{if(!(c instanceof Ic)){if(!(c instanceof Iw))break a;f=c;DW(a,b,f.hn,d,e);DW(a,b,f.gA,d,e);return;}g=c.gy;f=new Xx;f.wd=a;f.wc=b;f.wb=d;f.wa=e;DY(g,f);}}if(c!==null){c=c.eH;if(c!==null)b.iR(c,CK(d),CK(e));}}
function I$(a,b,c,d){var e;e=b.c6;if(e>=c)b.c6=e+d|0;}
function TH(a,b,c,d){var e,f,g,h;e=b.dQ.bW();while(e.cd()){HP(a,(e.bP()).dS,c,d);}e=b.eg.bW();while(e.cd()){f=e.bP();g=new Se;g.ui=a;DW(a,g,f,c,d);}h=b.fU.bW();while(h.cd()){e=h.bP();HP(a,e.ii.dS,c,d);f=new Sf;f.ts=a;DW(a,f,e.jc,c,d);}b.dQ.lu(new Sd);b.eg.lu(new Sc);b=b.ce.bW();while(b.cd()){TH(a,b.bP(),c,d);}}
function HP(a,b,c,d){var e;e=b.c6;if(e>=c)b.c6=e-d|0;}
var BD=F(Bt);
var XJ=F(Bt);
function B$(){var a=this;B.call(a);a.q=null;a.bX=0;a.bH=0;}
function ZE(a){var b=new B$();AHo(b,a);return b;}
function DC(a,b,c){var d=new B$();Tr(d,a,b,c);return d;}
function AHo(a,b){Tr(a,b,0,0);}
function Tr(a,b,c,d){a.q=b;a.bX=c;a.bH=d;}
function IQ(a){return a.bH&3;}
function GX(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Lv(a){return H(a.q);}
var Kq=F(J3);
function RE(){var a=this;B.call(a);a.cT=null;a.d7=0;}
var AUR=null;function ACn(a){var b=new RE();AC3(b,a);return b;}
function AC3(a,b){a.d7=0;a.cT=b;}
function Pt(a,b){var c;if(b.d3)return b;b=BP(b.bb);while(true){if(!BQ(b))return null;c=Pt(a,BS(b));if(c!==null)break;}return c;}
function NA(a,b,c){var d,e,f,g;d=J$(a,a.cT,b);if(d===null)return;b=c.cw;e=b===null?AUS:b.ce;f=c.bb;if(d===a.cT){b=new R8;b.qY=a;DY(f,b);b=new R6;b.uf=a;e.el(b);b=a.cT;b.bb=f;b.cw.ce=e;b.d3=0;return;}if(!DI(f)){b=d.gh;if(b!==null){c=new Of;c.oA=b;DY(f,c);g=JO(b.bb,d);if(g==(-1))Gk(b.bb,f);else{Fm(b.bb,g);Y3(b.bb,g,f);}}}b=d.cw;if(b!==null){b=b.f3;c=new Sk;c.qI=b;e.el(c);g=JO(b.ce,d.cw);if(g==(-1))Gk(b.ce,e);else{b.ce.ml(g);b.ce.tj(g,e);}}}
function J$(a,b,c){var d,e,f,g;d=b.bJ;if(d.bI==c.bI&&d.bL==c.bL?1:0){d=BP(b.bb);while(BQ(d)){e=J$(a,BS(d),c);if(e!==null)return e;}return b;}b=BP(b.bb);while(true){if(!BQ(b))return null;d=BS(b);f=c.bI;g=c.bL;e=d.bJ;if(e.bI<=f&&g<=e.bL?1:0){e=J$(a,d,c);if(e!==null)break;}}return e;}
function Tj(a,b,c){Bw(c,b.bJ);b=BP(b.bb);while(BQ(b)){Tj(a,BS(b),c);}}
function Oq(a,b,c){a.d7=0;J9(a,a.cT,b,c);}
function J9(a,b,c,d){var e;if(CT(b)<c)return;a:{if(CV(b)>c){K9(b,d);GW(b,d);b=BP(b.bb);while(BQ(b)){J9(a,BS(b),c,d);}}else{if(!IS(b,c)){if(a.d7)break a;if(CT(b)!=c)break a;}GW(b,d);if(CV(b)==c&&a.d7)K9(b,d);e=BP(b.bb);while(BQ(e)){J9(a,BS(e),c,d);}if(!a.d7){b.d3=1;a.d7=1;}}}}
function V5(a,b,c){a.d7=0;IY(a,a.cT,b,c);}
function IY(a,b,c,d){var e,f,g,h,i,j;if(CT(b)<c)return;e=CV(b);f=c+d|0;if(e>f){e= -d|0;K9(b,e);GW(b,e);g=BP(b.bb);while(BQ(g)){IY(a,BS(g),c,d);}b.bb=MO(a,b.bb);}else{h=b.bJ;if(c<=h.bI&&h.bL<=f?1:0){if(b===a.cT){Lm(b,0);IW(b,0);h=b.cw;if(h!==null)h.ce.hW();}else{Lm(b,(-1));IW(b,(-1));h=b.cw;if(h!==null){WX(h);b.cw=null;}}FJ(b.bb);}else{e=IS(b,c);f=IS(b,f);if(e&&f)GW(b, -d|0);else if(e)IW(b,c);else{if(!f)return;Lm(b,c);GW(b, -d|0);}h=BP(b.bb);while(BQ(h)){IY(a,BS(h),c,d);}h=UA(b.bb);g=ON(0);i=new RM;j=new UM;j.y2
=i;j.i0=g;while(Uf(h,j)){}if(!j.i0.mq&&!a.d7)b.d3=1;else a.d7=1;b.bb=MO(a,b.bb);}}}
function MO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BA();d=null;e=AUR;f=b.ci;g=b.k;if(e===null)e=AUM;h=O(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}ZL(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.bN=b.bN+1|0;b=BP(b);while(BQ(b)){m=BS(b);if(CV(m)==CT(m))continue;if(!m.d3){if(d!==null){Bw(c,d);d=null;}Bw(c,m);}else if(d===null)d=m;else{n=APY(Jg(Ba(CV(d),CV(m)),Z(CT(d),CT(m)),d.bJ.eC),d.gh,d.cw);n.d3=1;d=m.cw;if(d===null)d=n;else{WX(d);d=n;}}}if(d!==null)Bw(c,d);return c;}
function Wh(a,b,c,d){var e,f,g,h,i,j,k,l;if((CT(c)-CV(c)|0)<43)e=B9(d,CV(c),CT(c));else{e=B9(d,CV(c),CV(c)+20|0);f=B9(d,CT(c)-20|0,CT(c));g=new R;V(g);L(L(L(g,e),C(51)),f);e=S(g);}e=UF(e,C(50),C(52));f=EX();g=c.bJ;h=g.bI;i=g.bL;j=g.eC;k=new R;V(k);BX(k,40);BX(Bl(L(Bl(L(Bl(k,h),C(39)),i),C(39)),j),41);k=S(k);h=c.d3;g=new R;V(g);G6(L(L(g,k),C(39)),h);l=S(g);g=new R;V(g);k=Bl(g,b);BX(k,32);k=L(k,l);BX(k,9);L(k,e);Ct(f,S(g));c=BP(c.bb);h=b+1|0;while(BQ(c)){Wh(a,h,BS(c),d);}}
function ADg(){AUR=new VI;}
function ADr(){var a=this;B.call(a);a.bI=0;a.bL=0;a.eC=0;}
function Jg(a,b,c){var d=new ADr();AHi(d,a,b,c);return d;}
function AHi(a,b,c,d){a.bI=b;a.bL=c;a.eC=d;}
function AOM(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return a.bI==c.bI&&a.bL==c.bL&&a.eC==c.eC?1:0;}return 0;}
function AF2(a,b){var c;b=b;c=BE(a.bI,b.bI);if(!c)c=BE(b.bL,a.bL);return c;}
var VI=F();
function AKE(a,b,c){var d;b=b;c=c;b=b.bJ;c=c.bJ;d=BE(b.bI,c.bI);if(!d)d=BE(c.bL,b.bL);return d;}
function QU(){var a=this;B.call(a);a.bJ=null;a.gh=null;a.bb=null;a.cw=null;a.d3=0;}
function APY(a,b,c){var d=new QU();ACm(d,a,b,c);return d;}
function ACm(a,b,c,d){a.d3=0;a.bJ=b;a.gh=c;a.bb=BA();a.cw=d;}
function ADw(b){return Q9(b,null);}
function Q9(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=U(b);e=U(b);f=U(b);g=U(b);h=U(b);i=Jg(d,e,f);j=new QU;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}ACm(j,i,null,l);m=0;while(m<g){l=Q9(b,c);l.gh=j;Bw(j.bb,l);m=m+1|0;}return j;}
function Yt(b,c,d){var e,f,g,h,i;a:{e=b.bJ;f=b.bb;g=e.bI;h=e.bL;i=e.eC;Bi(c,g);F_(c,h,i);Bi(c,f.k);if(d!==null){e=b.cw;if(e!==null&&Vv(d,e)){g=(LI(d,b.cw)).bn;break a;}}g=(-1);}Bi(c,g);b=BP(f);while(BQ(b)){Yt(BS(b),c,d);}}
function CV(a){return a.bJ.bI;}
function CT(a){return a.bJ.bL;}
function Lm(a,b){a.bJ.bI=b;}
function IW(a,b){a.bJ.bL=b;}
function K9(a,b){var c;c=a.bJ;c.bI=c.bI+b|0;}
function GW(a,b){var c;c=a.bJ;c.bL=c.bL+b|0;}
function IS(a,b){return CV(a)<=b&&b<CT(a)?1:0;}
function AFP(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return BI(a.bJ,c.bJ)&&BI(a.bb,c.bb)?1:0;}return 0;}
var GY=F(0);
function F5(){var a=this;B.call(a);a.cl=null;a.cD=null;}
function AUT(a,b){var c=new F5();Xq(c,a,b);return c;}
function Xq(a,b,c){a.cl=b;a.cD=c;}
function AGJ(a,b){var c,d;if(a===b)return 1;if(!H_(b,GY))return 0;a:{b:{c:{d:{c=b;b=a.cl;if(b!==null){if(!b.bu(c.cl))break c;else break d;}if(c.cl!==null)break c;}b=a.cD;if(b!==null){if(!b.bu(c.cD))break c;else break b;}if(c.cD===null)break b;}d=0;break a;}d=1;}return d;}
function Ge(){var a=this;F5.call(a);a.iX=0;a.cs=null;}
function WK(){var a=this;B.call(a);a.kA=null;a.mx=null;a.jT=null;a.me=null;a.l4=null;a.l0=null;}
function LL(a,b,c){return Q3(a,Cf(a.kA),b,c);}
function QD(a,b,c){return Q3(a,Cf(a.mx),b,c);}
function Q3(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(JB(g,c,d))return g.rK;f=f+1|0;}return null;}
function TN(a,b,c){var d,e,f,g;d=(Cf(a.jT)).data;e=d.length;f=0;while(f<e){g=d[f];if(JB(g,b,c))return g.rl;f=f+1|0;}return null;}
var Ko=F(0);
function Pg(){var a=this;B.call(a);a.uP=null;a.uQ=null;}
function EP(){B.call(this);this.ps=null;}
function AUU(a){var b=new EP();KH(b,a);return b;}
function KH(a,b){a.ps=b;}
function JB(a,b,c){var d,e,f,g;d=a.ps.data;e=d.length;f=0;while(f<e){g=d[f];if(ABy(b,g.ru)&&ABy(c,g.qx)?1:0)return 1;f=f+1|0;}return 0;}
function Ky(){EP.call(this);this.rl=null;}
var ACR=F();
function Jp(b){var c,d,e,f;if(!($rt_globals.Array.isArray(b)?1:0)){c=O(Hs,1);c.data[0]=ZZ(b);return c;}d=b.length;c=O(Hs,d);e=c.data;f=0;while(f<d){e[f]=ZZ(b[f]);f=f+1|0;}return c;}
function ZZ(b){var c,d,e;c=typeof b==='string'?1:0;d=c?Cj(b):GM(b.language,null);e=c?null:GM(b.scheme,null);b=new Hs;b.ru=d;b.qx=e;return b;}
var AAp=F();
function M2(b){var c,d;ATb();c=AUV;d=b.data;return c.decode(d);}
var AAR=F();
function AEF(b){var c,d;c=b.bd+1|0;d=b.V+1|0;return Y1(c,d);}
function HC(b,c){var d;d=b+1|0;b=c+1|0;return Y1(d,b);}
function Y1(b,c){return {column:b,lineNumber:c};}
function FU(){EP.call(this);this.rK=null;}
function AUW(a,b){var c=new FU();Xl(c,a,b);return c;}
function Xl(a,b,c){KH(a,b);a.rK=c;}
function JE(){EP.call(this);this.va=null;}
function Sj(){var a=this;B.call(a);a.rD=null;a.rE=null;a.rF=null;}
function AO3(a,b,c){var d,e,f;b=Cv(b,"f");Cv(c,"f");c=a.rD;d=a.rE;e=a.rF;f=new XI;f.sT=b;Ly(c.g7,f,0,d,e);}
var ZY=F();
function YI(b){return b?1:0;}
var Ha=F(0);
function AL7(a){}
function AH0(a){}
var EU=F(0);
var JA=F(0);
var P9=F(0);
function ZW(){var a=this;B.call(a);a.Q=null;a.cg=null;a.bM=null;a.O=null;a.eB=null;a.v_=0;a.mt=null;a.cF=null;a.lv=0;a.dR=0;a.fk=null;a.hb=null;a.b3=null;a.C=0;a.c=null;a.ct=null;a.cA=null;a.hJ=null;a.fo=null;a.uv=0;a.sf=0;a.cx=0;a.b2=0;a.b_=0;a.eN=null;a.eJ=null;a.eK=null;a.Z=0;a.c$=0;a.gZ=0;a.jP=0;a.hY=0;a.yQ=0;a.wU=0;a.jt=0;a.iT=0;a.lN=0;a.dF=0;a.cG=null;a.eA=null;a.dv=0;a.bx=0;a.jL=null;a.hI=null;a.rr=null;a.tl=null;a.kr=null;a.ky=null;a.fy=null;a.qt=0;a.oU=null;a.uh=null;}
function Z9(a,b){var c=new ZW();ANB(c,a,b);return c;}
function ANB(a,b,c){var d,e,f,g,h;a.Q=new Bj;a.cg=new Bj;a.v_=0;a.mt=O(Bk,10);d=new PC;e=new WT;e.cr=new Bj;e.bo=new Bj;e.db=new B4;e.gz=new B4;VT(e,0,0,2,20);d.d$=e;d.j_=0.5;d.g3=0.0;Jv(187,187,187,255,e.db);a.cF=d;a.dR=16;a.fk=C(53);a.b3=O(KB,4);e=new LS;e.kb=YD();e.e_=AD5();e.gg=null;e.e6=BA();e.hL=HL();f=new J0;g=O(CE,1);g.data[0]=O5();N3(f,g);e.f=f;e.f_=C(33);e.dz=null;a.c=e;e=new WK;e.kA=Cx(O(FU,0));e.mx=Cx(O(FU,0));e.jT=Cx(O(Ky,0));e.me=Cx(O(JE,0));e.l4=Cx(O(Fn,0));e.l0=Cx(O(Ko,0));a.ct=e;a.fo=O(EZ,0);a.eN
=Cg(1,0);a.eJ=UV();a.eK=UV();a.Z=0;a.c$=0;a.gZ=0;a.hY=1;a.jt=1;a.iT=1;a.lN=1;a.dF=3;a.cG=AP_();a.eA=C(54);a.dv=0;a.bx=0;e=EH();BK(e);f=new NK;f.tg=e;a.hI=f;a.ky=BA();e=new NJ;e.mU=a;a.oU=e;e=new NI;e.rp=a;a.uh=e;a.bM=b;a.O=b.dk;a.eB=c;c=new UD;g=a.b3;c.jp=new B4;c.gn=new Bj;c.ko=new Bj;e=new B4;c.ho=e;c.kq=g;Tb(e);a.fy=c;g=a.mt.data;e=new NH;e.uG=a;g[0]=e;e=new NO;e.oN=a;g[1]=e;e=new NN;e.sE=a;g[2]=e;e=new NM;e.wi=a;g[3]=e;e=new NL;e.ol=a;g[4]=e;e=new NG;e.rR=a;g[5]=e;e=new NF;e.vc=a;g[6]=e;AEt();h=AUX===AUY
?0:1;a.jP=h;c.lQ=!h?0.0:0.5;c.mo=b.cE;}
function IL(a,b,c,d){var e,f,g,h,i;e=a.fy;Tb(e.ho);f=e.ho;g=d>=0.5?d:0.25;h=g>=4.0?0.5:ADU(f.bZ,ADU(g,AUZ));Cc(f,f.bp/g,f.bG*g,AQj(f.bc*g,1.25),h);f=e.ho;h=f.bG;e.sG=h-(h|0)>=0.25?0.0:0.5;i=h+f.bc+1.5|0;e.vJ=i;Bg(e.ko,0,i*2|0);Cw(a.Q,b);Cw(a.cg,c);SN(a,b,c,d);}
function VV(a,b,c){a.rr=b;a.tl=c;}
function SN(a,b,c,d){var e,f,g,h;a.cx=Co(80.0,d);a.b2=Co(1.0,d);a.b_=Co(10.0,d);if(!a.bx)Cw(a.bM.dm,a.Q);else Bg(a.bM.dm,(b.a+c.a|0)-IE(a)|0,b.b);b=a.cG;e=a.bM.dm;f=IE(a);g=c.b;h=d;Cw(b.e$,e);Bg(b.ez,f,g);b.iw=h;b=a.cF;f=Co(2.0,d);b.d$.bo.a=f;Q1(a,a.fk,a.dR);K5(a);}
function AHO(a){a.lv=1;KY(a);}
function AEZ(a){a.lv=0;}
function KY(a){var b;b=a.cF;b.g3=Ns(Cp(a))+b.j_*1.25;b.fT=1;}
function JD(a,b){var c,d;a.cA=b;c=a.cF;d=b.bE.v7;Ee(c.d$.db,d);c=a.eJ;d=b.bE;Gv(c,d.kU,d.k4);c=a.eK;b=b.bE;Gv(c,b.kU,b.k4);}
function Nq(a){DA(a,a.hb.mi,a.dR+1|0);}
function Xn(a){var b;b=a.dR;if(b<=7)return;DA(a,a.hb.mi,b-1|0);}
function Qw(a){a.hJ=C7(a.hJ,Fa(a.O,1024,a.C,a.bM.cE));}
function N$(a,b){DA(a,b,a.dR);}
function DA(a,b,c){if(a.bM.b1!==0.0){Q1(a,b,c);I_(Cp(a));}a.dR=c;a.fk=b;}
function Ka(a,b){var c,d,e,f;c=a.fy;b=a.bM.cE;c.mo=b;if(a.hJ.j4!=b)Qw(a);d=a.fo.data;b=d.length;e=0;while(e<b){f=d[e].bD;if(f!==null)f.gG=1;e=e+1|0;}Jr(a.cG);K5(a);}
function Q1(a,b,c){var d,e,f,g,h,i,j;d=Co(c,a.bM.b1);e=a.hb;f=e!==null?e.pJ:0;if(!(d==f&&BI(b,a.fk))){Jr(a.cG);g=a.fo.data;c=g.length;f=0;while(f<c){W5(g[f]);f=f+1|0;}g=a.c.f.x.data;c=g.length;f=0;while(f<c){D9(g[f]);f=f+1|0;}g=a.b3.data;h=GX(0,0);e=a.O;i=d;g[h]=Gt(e,b,i,300,0);a.b3.data[GX(0,1)]=Gt(a.O,b,i,300,2);a.b3.data[GX(1,0)]=Gt(a.O,b,i,600,0);a.b3.data[GX(1,1)]=Gt(a.O,b,i,600,2);e=a.b3.data[GX(0,0)];a.hb=e;c=Fy(e);f=DG(c*1.25);a.C=f;e=a.fy;e.wx=f;g=a.b3.data;j=g[0];e.vv= -( -((f+j.eh+j.dT)/2.0)|0)|0;a.cF.d$.bo.b
=Fy(g[0]);Qw(a);f=a.C;h=Wu(a.cF);e=new R;V(e);b=L(L(e,C(55)),b);BX(b,32);Bl(L(Bl(L(Bl(L(Bl(b,d),C(56)),c),C(57)),f),C(58)),h);$rt_globals.console.info($rt_ustr(S(e)));if(AU0){c=Ki(a.b3.data[0],a.C);b=new R;V(b);Bl(L(b,C(59)),c);$rt_globals.console.info($rt_ustr(S(b)));}a.c.gU=F3(E$(a),a.c.r,a.O.cZ,a.b3);Gz(a);K5(a);}}
function Me(a){return T(Cb(a.c.f)+5|0,a.C);}
function FM(a){return Z(Me(a)-a.cg.b|0,0);}
function S9(a){return Z(a.gZ-Dd(a)|0,0);}
function Dd(a){var b;b=!a.bx?0:CS(a)+a.b_|0;return Z(1,(a.cg.a-a.cx|0)-b|0);}
function IE(a){return a.bx?a.cx:a.cx-a.b_|0;}
function Cz(a){return a.cg.b;}
function KF(a,b){var c,d,e,f,g,h,i;c=a.c.f;if(TD(c)&&b-c.sR>0.03125?1:0){d=a.qt;e=a.c.f.b0;if(d!=e){a.qt=e;Rs(a);}}c=a.c;if(!c.hx&&c.i_){c=UA(a.ky);f=new Rv;f.qC=a;g=new Qv;g.qg=f;while(!g.j8&&Uf(c,g)){}if(!g.j8)SZ(a);}d=KR((a.Z+a.yQ|0)-a.wU|0,FM(a));e=a.Z==d?0:1;if(e)DU(a,d);a:{c=a.cF;h=c.fT;if(b>c.g3)while(true){i=c.g3+c.j_;c.g3=i;c.fT=c.fT?0:1;if(b>i)continue;else break a;}}d=c.fT==h?0:1;return !d&&!e&&!a.v_?0:1;}
function DU(a,b){var c,d;c=KR(b,FM(a));if(c!=a.Z){a.Z=c;d=a.tl;if(d!==null)d.h3(c);}}
function Id(a,b){var c,d;c=KR(b,S9(a));if(c!=a.c$){a.c$=c;d=a.rr;if(d!==null)d.h3(c);}}
function Iy(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;b=H$(a.cg.b,a.C)+7|0;c=a.fo;if(c.data.length<b)a.fo=Zg(b,c,a.fy,a.uv,a.sf,a.c.f);Dj(a.O,0);RH(a.O,a.Q,a.cg);d=(a.C-Wu(a.cF)|0)/2|0;e=(a.c.gU-(S3(a.cF)/2|0)|0)-a.c$|0;f=!a.bx?a.cx:(a.b2+a.b_|0)+CS(a)|0;g=a.cF;b=f+e|0;d=(d+T(a.c.o,a.C)|0)-a.Z|0;Bg(g.d$.cr,b,d);h=Cb(a.c.f);i=EE(a);j=Fl(a);a.uv=i;a.sf=j;k=!a.bx?a.Q.a+a.cx|0:((a.Q.a+a.b2|0)+a.b_|0)+CS(a)|0;l=i;while(l<=j&&l<h){m=BG(a.c.f,l);g=U9(a,l);XQ(g,m,a.hJ,a.O,a.C,Dd(a),a.c$);n=g.bD;a.gZ=Z(a.gZ,
EC(m)+(40.0*a.bM.b1|0)|0);o=T(a.C,l)-a.Z|0;p=CF(a)===null?null:(CF(a)).data[l];b=a.Q.b+o|0;q=a.O;o=Dd(a);r=a.C;d=a.c$;s=a.cA;t=ABw(Bd(a),l);if(t!==null){if(t.b==(-1))t.b=n.z;t.a=F3(n,t.a,a.O.cZ,a.b3);t.b=F3(n,t.b,a.O.cZ,a.b3);}m=a.c;Y5(g,b,k,q,o,r,d,s,t,m.gg,m.e6,m.o!=l?0:1,CF(a)===null?0:1,p);l=l+1|0;}u=a.bM.dm;l=i;while(l<=j&&l<h&&a.jt){g=U9(a,l);o=T(a.C,l)-a.Z|0;r=ACB(Bd(a),l);s=a.cA.bE.qS;v=a.c.o==l&&CF(a)===null?1:0;if(r)s=a.cA.bE.mm;else if(CF(a)!==null&&l<(CF(a)).data.length&&(CF(a)).data[l]!==null){s
=a.cA;s=HX(s.du,s,(CF(a)).data[l].fK);}else if(v)s=a.cA.bE.ia;Zb(g,a.O,k,a.Q.b+o|0,a.C,u,a.c$,Dd(a),s);l=l+1|0;}if(a.hY){w=Ba(j+1|0,h);AAS(a,T(a.C,w)-a.Z|0);}ABY(a);AA4(a,i,j);if(a.iT)ADA(a,i,j,h);if(a.lv&&e>=(( -S3(a.cF)|0)/2|0)){g=a.cF;s=a.cg;if(YU(g.d$.cr,0,0,s))ACd(a.cF,a.O,a.Q);}ABs(a);AAB(a);Li(a.O);}
function ADA(a,b,c,d){var e,f,g,h,i,j;while(b<=c&&b<d){e=CF(a)!==null&&b<(CF(a)).data.length?(CF(a)).data[b]:null;if(e!==null){f=a.cA;f=HX(f.du,f,e.fK);}else f=CF(a)!==null?a.cA.bE.fc:a.cA.bE.ia;if(!(a.c.o!=b&&e===null)){a.eN.a=!a.bx?(a.b_-a.b2|0)-a.dF|0:((a.b_+CS(a)|0)+a.b2|0)-a.dF|0;g=a.eN;h=a.C;g.b=h;i=a.bx?0:(a.cx-a.b_|0)+a.b2|0;h=T(h,b)-a.Z|0;e=a.O;j=a.Q;BB(e,j.a+i|0,j.b+h|0,g,f);}b=b+1|0;}}
function AA4(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;d=a.cg.b;e=Ba(d,T(Cb(a.c.f),a.C)-a.Z|0);f=a.cG;g=a.Z;h=CF(a)!==null?(-1):a.c.o;i=a.O;j=a.cA;RH(i,f.e$,f.ez);S1(f,i,b,d);k=f.ff;if(b!=k){l=f.cn.k;m=l*20|0;if(k<b){k=k/20|0;n=b/20|0;}else{n=Z(0,(k-1|0)/20|0);k=Z(0,(b-1|0)/20|0);}a:{if((n-k|0)>=l){Rw(f,b);f.ff=b;}else{if(f.ff>=b)while(true){if(n<k)break a;f.ff=Nm(Bs(f.cn,n%l|0),f.ej,f.fi,f.ff,b,m,f.iw);n=n+(-1)|0;}while(k<=n){f.ff=Nm(Bs(f.cn,k%l|0),f.ej,f.fi,f.ff,b,m,f.iw);k=k+1|0;}}}}o
=BP(f.cn);while(BQ(o)){p=BS(o);q=f.e$;k=T(f.cn.k,f.iZ);r=f.jN;s=p.ex.b;n=((p.hB.b-(g%k|0)|0)+k|0)%k|0;t=j.gF;l=g+n|0;u=p.J;m=l/u|0;v=n+s|0;l=BE(v,e);if(l<=0){k=s/u|0;u=0;v=0;w=0;while(v<k){l=m+v|0;if(LD(p,r,w,l,j,t)){s=T((v-u|0)+1|0,p.J);Bg(p.c3,Ci(p.ba),s);Cc(p.dL,0.0,T(u,p.J),Ci(p.ba),s);l=w;}else{x=Fx(j,r,w,t);Eq(p,i,n+T(u,p.J)|0,q,t.eQ,x);Bg(p.c3,Ci(p.ba),p.J);Cc(p.dL,0.0,T(v,p.J),Ci(p.ba),p.J);u=v;}v=v+1|0;w=l;}x=Fx(j,r,w,t);Eq(p,i,n+T(u,p.J)|0,q,t.eQ,x);}else{if(l>0&&n<e){l=Z(e-n|0,0);w=p.J;u=l/w|0;if
(l%w|0)u=u+1|0;y=0;z=0;ba=0;while(z<u){w=m+z|0;if(LD(p,r,ba,w,j,t)){l=T((z-y|0)+1|0,p.J);Bg(p.c3,Ci(p.ba),l);Cc(p.dL,0.0,T(y,p.J),Ci(p.ba),l);w=ba;}else{x=Fx(j,r,ba,t);Eq(p,i,n+T(y,p.J)|0,q,t.eQ,x);Bg(p.c3,Ci(p.ba),p.J);Cc(p.dL,0.0,T(z,p.J),Ci(p.ba),p.J);y=z;}z=z+1|0;ba=w;}x=Fx(j,r,ba,t);Eq(p,i,n+T(y,p.J)|0,q,t.eQ,x);}if(v>k)AAQ(p,q,e,g,k,j,r,i,s,n,t);}}x=j.gF;if(e<d){bb=f.e$;BB(i,bb.a,bb.b+e|0,Cg(f.ez.a,d-e|0),x.gx);}if(b<=h&&h<=c)AB8(f,g,h,j.gF,i);Li(i);}
function EE(a){return Ba(a.Z/a.C|0,Cb(a.c.f)-1|0);}
function Fl(a){return Ba(((a.Z+Cz(a)|0)-1|0)/a.C|0,Cb(a.c.f)-1|0);}
function K5(a){var b,c,d,e,f,g,h;b=a.cG;c=a.b3.data[0];d=a.C;e=a.bM.cE;f=a.O;b.ik=c;b.l3=d;g=d*20|0;b.iZ=g;h=C7(b.ej,Fa(f,b.ez.a,g,e));b.ej=h;CO(h,b.ik);R3(b.ej,2);c=C7(b.fi,Fa(f,b.ez.a,d,e));b.fi=c;CO(c,b.ik);R3(b.fi,2);S1(a.cG,a.O,EE(a),Cz(a));}
function U9(a,b){var c;c=a.fo.data;return c[b%c.length|0];}
function VR(a,b){var c,d,e,f;c=Fv(0,H(a.eA),Ni(b));if(!c)b=null;else{b=C(60);if(c<0){b=new BD;X(b);K(b);}if(c!=1){d=b.b9.data.length;if(d&&c){e=B1(T(d,c));d=0;f=0;while(f<c){PS(b,0,H(b),e,d);d=d+H(b)|0;f=f+1|0;}b=L1(e);}else b=AUn;}}return b;}
function Oe(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=Bz(i);k=ATP(i).data;G7(j,c);c=0;l=k.length;if(c>l){f=new BD;X(f);K(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.c.f;o.b0=o.b0+1|0;p=O(Gp,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=APd(h[m],n[m],k[m],b[m],f.V,f.bd);m=m+1|0;}Bw(o.f5,p);c=0;while(c<i){b=e.data;JG(o,h[c],n[c],k[c],b[c]);g.v1(CK(h[c]),b[c]);c=c+1|0;}}
function ADG(a){var b;if(C6(Bd(a)))F0(a);else{b=a.c;MG(b.f,b.o,b.r);}Gz(a);DT(a);return 1;}
function C$(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.dv)return 0;if(C6(Bd(a)))F0(a);c=LF(UF(b,C(61),C(3)),C(50),(-1));d=c.data;b=a.c;e=b.f;f=b.o;g=b.r;Xz(e,f,g,c);h=d.length;if(!h)b=AUn;else{i=0;j=0;while(j<h){i=i+H(d[j])|0;j=j+1|0;}k=B1(i+T(h-1|0,H(C(50)))|0);c=k.data;l=0;b=d[0];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<H(C(50))){m=l+1|0;c[l]=I(C(50),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=n+1|0;}b=L1(k);}Fb(e,f,g,0,b);b=a.c;f=b.o;m=(f+h|
0)-1|0;Ck(a,m,m!=f?H(d[h-1|0]):b.r+H(d[0])|0,0);Fi(a);DT(a);return 1;}
function F0(a){var b,c,d;b=DB(Bd(a));c=a.c.f;d=Bd(a);MS(c,d,VA(c,d));Ck(a,b.K,b.U,0);Fi(a);DT(a);}
function Fi(a){var b,c;(Bd(a)).c1=0;b=(Bd(a)).bB;c=a.c;BZ(b,c.o,c.r);b=(Bd(a)).bt;c=a.c;BZ(b,c.o,c.r);}
function CS(a){return a.hb.l6|0;}
function AAS(a,b){var c,d;c=a.cg.b;if(b<c){d=a.bM.dm;d.b=c-b|0;d.a=!a.bx?Dd(a)+a.dF|0:Dd(a)+a.b2|0;c=!a.bx?(a.Q.a+a.cx|0)-a.dF|0:(((a.Q.a+a.b_|0)+CS(a)|0)+a.b2|0)-a.dF|0;BB(a.O,c,a.Q.b+b|0,d,a.cA.bE.fc);}}
function ABs(a){var b;b=a.bx?a.Q.a+CS(a)|0:a.Q.a+a.cg.a|0;WV(a.eJ,a.Z,a.Q.b,Cz(a),Me(a),b,CS(a));b=!a.bx?a.Q.a+a.cx|0:((a.Q.a+a.b2|0)+a.b_|0)+CS(a)|0;QI(a.eK,a.c$,b,Dd(a),a.gZ,a.Q.b+Cz(a)|0,CS(a));}
function AAB(a){var b,c;b=Q5(a.eJ);c=Q5(a.eK);if(!(!b&&!c)){Dj(a.O,1);if(b)HB(a.eJ,a.O);if(c)HB(a.eK,a.O);if(b)HK(a.eJ,a.O);if(c)HK(a.eK,a.O);}}
function ABY(a){var b,c,d,e;b=a.eN;c=a.cg;b.b=c.b;b.a=a.b2;d=!a.bx?a.cx-a.b_|0:(c.a-IE(a)|0)-a.b2|0;b=a.O;c=a.Q;BB(b,c.a+d|0,c.b,a.eN,a.cA.bE.tw);a.eN.a=!a.bx?(a.b_-a.b2|0)-a.dF|0:((a.b_+CS(a)|0)+a.b2|0)-a.dF|0;e=a.bx?0:(a.cx-a.b_|0)+a.b2|0;b=a.O;c=a.Q;BB(b,c.a+e|0,c.b,a.eN,a.cA.bE.fc);}
function KR(b,c){return Ba(Z(0,b),c);}
function JM(a){var b;b=AQ2(a.c.f.dX,null);Nj(b);Ud(a.c,b.jW,b.kc);}
function Cp(a){return a.bM.gO;}
function ID(a,b){var c,d,e,f,g,h,i;c=Eh(b);d=new R;V(d);L(L(d,C(62)),c);$rt_globals.console.info($rt_ustr(S(d)));Cp(a);c=Eh(b);d=Fg();c=$rt_ustr(c);d.title=c;Ck(a,0,0,0);OC(a);e=new LS;f=O(Bv,1);f.data[0]=C(3);ABF(e,f,AFS(C(3),C(3),Eh(b),null));a.c=e;e.go=DS();Ck(a,0,0,0);d=ADI(Eh(b));g=BI(d,C(32));h=!g?5120:10240;c=new Q6;c.n7=a;c.n6=d;c.n5=b;c.n4=h;c.n3=g;d=b.fQ;if(d!==null)Jc(c,Jf(b,d.size));else{d=b.hT.getFile();e=new Td;e.mE=b;e.mF=c;i=new Te;i.vx=c;d.then(Bp(e,"f"),Bp(i,"f"));}}
function OC(a){a.jL=null;K3(a.cG,null);L2(a.c);}
function Hi(a,b,c,d,e){if(Ht(a,e))return 1;if(c&&d)return 1;if(c)DU(a,a.Z+((T(b,a.C)*12|0)/10|0)|0);else if(!d){G0(a,a.c.o+b|0,e);TJ(a);}return 1;}
function RX(a,b,c,d){var e,f,g;if(Ht(a,d))return 1;e=E$(a);if(!c)f=a.c.r+b|0;else if(b>=0)f=Gl(e,a.c.r);else{b=a.c.r;if(!b)f=(-1);else{c=GL(e,b);if(c>0&&e.dc.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.dc.data[c-1|0];}}if(f>e.z){e=a.c;if((e.o+1|0)<Cb(e.f))Ck(a,a.c.o+1|0,0,d);}else if(f>=0)C0(a,f,d);else{e=a.c;b=e.o;if(b>0){g=(BG(e.f,b-1|0)).z;Ck(a,a.c.o-1|0,g,d);}}Vl(a);return 1;}
function Ht(a,b){if(C6(Bd(a))&&!b){Fi(a);Gz(a);return 1;}if(!(b&&C6(Bd(a))))Fi(a);return 0;}
function Ck(a,b,c,d){a.c.r=c;return G0(a,b,d);}
function G0(a,b,c){var d;d=a.c;d.o=Fv(0,b,Cb(d.f)-1|0);return C0(a,a.c.r,c);}
function C0(a,b,c){var d,e;a.c.r=Fv(0,b,(E$(a)).z);a.c.gU=a.bM.b1===0.0?0:F3(E$(a),a.c.r,a.O.cZ,a.b3);KY(a);Gz(a);if(c)(Bd(a)).c1=1;d=Bd(a);e=a.c;K0(d,e.o,e.r);(Bd(a)).c1=0;return 1;}
function L4(a,b){var c;c=AGz(Bd(a));C0(a,b,0);Hy(Bd(a),c);}
function Gz(a){TJ(a);Vl(a);}
function TJ(a){var b,c,d,e,f;b=a.Z;c=b+Cz(a)|0;d=a.c.o;e=a.C;d=T(d,e);f=d+e|0;if(d<(b+e|0))DU(a,d-e|0);else if(f>(c-e|0))DU(a,(f-Cz(a)|0)+a.C|0);}
function Vl(a){var b,c,d,e,f;b=DG(a.bM.b1*30.0);c=a.c$;d=c+Dd(a)|0;e=a.c.gU;f=e+b|0;if(e<(c+b|0))Id(a,e-b|0);else if(f>(d-b|0))Id(a,(f-Dd(a)|0)+b|0);}
function ADB(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;L2(a.c);b=a.jL;c=a.c;d=c.f;c=c.e6;e=Cb(d);f=b.pc.data;g=f.length;h=0;while(h<g){i=f[h];b=i.gX;j=b.e3;k=b.ji;l=j;while(true){m=BE(l,k);if(m>0)break;if(l>=e)break;a:{b=BG(d,l);if(b.l.data.length){n=l>j?0:Z(i.gX.fF,0);o=m<0?b.z:Ba(i.gX.iy,b.z);while(true){if(n>=o)break a;p=GL(b,n);q=RF(b,p);r=p>=b.l.data.length?b.z:b.dc.data[p];s=KD(b,p);if(q==n&&r<=o)Bw(c,s);else{s=EH();t=new R;V(t);u=Bl(L(t,C(63)),l);BX(u,58);L(Bl(u,n),C(64));Ct(s,S(t));}n=r;}}}l=l+
1|0;}h=h+1|0;}}
function HH(a,b){var c,d;Ck(a,b.V,b.bd,0);c=Gl(E$(a),a.c.r);BZ((Bd(a)).bt,a.c.o,c);b=(Bd(a)).bB;d=a.c;BZ(b,d.o,d.r);}
function D2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.Q;e=c-d.a|0;f=Fv(0,((b.b-d.b|0)+a.Z|0)/a.C|0,Cb(a.c.f)-1|0);g=!a.bx?a.cx:(a.b2+a.b_|0)+CS(a)|0;h=Z(0,(e-g|0)+a.c$|0);b=BG(a.c.f,f);d=a.O.cZ;i=a.b3;if(!(b.ed!==null&&!b.fB))J2(b,d,i);j=b.ed;e=b.l.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.z;else{c=Tz(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.l.data.length)k=b.z;else{j=R2(b,d,i,c);k=0;e=0;while(e<c){k=k+H(b.l.data[e].q)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(AUQ){d=new R;V(d);Bl(L(Bl(L(Bl(L(d,C(65)),e),C(66)),h),C(67)),c);$rt_globals.console.info($rt_ustr(S(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return Dr(f,k);}
function W8(a,b){var c,d;c=a.c;d=b.V;c.o=d;c.r=b.bd;c.gU=F3(BG(c.f,d),a.c.r,a.O.cZ,a.b3);KY(a);}
function VM(a,b,c,d){var e;a:{e=c.data;switch(e.length){case 0:break;case 1:R5(a,e[0]);break a;default:Ri(a.eB,b,c,a,d);break a;}Ke(a.eB,b,a);}}
function R5(a,b){var c,d,e,f,g;if(BI(b.hd,a.c.dz)){b=b.f0;Ck(a,b.e3,b.fF,0);BZ((Bd(a)).bB,b.e3,b.fF);BZ((Bd(a)).bt,b.ji,b.iy);}else{c=(Cf(a.ct.l0)).data;d=c.length;e=0;a:{while(true){if(e>=d){f=null;break a;}f=c[e];if(f!==null)break;e=e+1|0;}}if(f!==null){Cp(a);g=new XO;g.nC=f;g.nB=b;BK(g);b=new Ru;b.ul=g;$rt_globals.setTimeout(Bp(b,"onTimer"),0);}}}
function E$(a){var b;b=a.c;return BG(b.f,b.o);}
function Jm(a,b,c){var d,e;d=DG((a.C*4|0)*c/150.0);e=DG(b);if(d)DU(a,a.Z+d|0);if(e)Id(a,a.c$+e|0);return 1;}
function S8(a,b,c){(Bd(a)).c1=0;return 1;}
function Mz(a,b,c){var d;if(c)return null;d=HQ(a.eJ,b.n,a.oU,1);if(d!==null)return d;d=HQ(a.eK,b.n,a.uh,0);if(d!==null)return d;Ih(a);W8(a,D2(a,b.n));Kx(a.c);if(!b.bz&&!(Bd(a)).c1){b=(Bd(a)).bB;d=a.c;BZ(b,d.o,d.r);}(Bd(a)).c1=1;b=Bd(a);d=a.c;K0(b,d.o,d.r);b=new V9;b.s8=a;return b;}
function MJ(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.ck){b=b.n;e=D2(a,b);f=Gx(a.c.f,e.V,e.bd);g=Kz(a,f);h=LL(a.ct,Dw(a.c),FL(a.c));if(h!==null){i=a.c;c=e.V;d=e.bd;e=new Sl;e.sx=a;e.sw=b;e.sv=g;h.ln(i,c,d,e,a.hI);}else{e=B_(a.c.f.cW,f);if(e!==null){HH(a,e);c=1;}else{e=B_(a.c.f.cL,f);if(e!==null&&!DI(e)){if(e.k!=1){Q2(a.eB,b,e,a,g);c=1;}else{HH(a,Bs(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(D2(a,b.n)).V;g=BG(a.c.f,c);c=FB(g,a.c.r);d=Gl(g,a.c.r);b=Lz(g,c);if((d-1|0)==g.z){BZ((Bd(a)).bB,a.c.o,
Ni(g));BZ((Bd(a)).bt,a.c.o,g.z);}else{if(b!==null){b=b.q;j=0;c:{while(true){k=b.b9.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.c.r;if(c==j){c=FB(g,c-1|0);d=Gl(g,c);}else{if(d!=j){Pz(Bd(a),a.c.o);break b;}c=FB(g,d+1|0);d=Gl(g,c);}}}BZ((Bd(a)).bB,a.c.o,c);(Bd(a)).c1=1;Ck(a,a.c.o,d,0);(Bd(a)).c1=0;Ih(a);}}break a;case 3:break;default:break a;}Pz(Bd(a),a.c.o);RD(a.c.e_);Ih(a);}}return 1;}
function NR(a,b){var c,d,e,f,g,h,i,j,k;c=a.bM.dh;if(H6(a.eJ,b.n,c))return 1;if(H6(a.eK,b.n,c))return 1;d=a.cG;if(EW(b.n,d.e$,d.ez)&&Fz(c)?1:0)return 1;e=b.n;f=!a.bx?a.Q.a+a.cx|0:((a.Q.a+a.b_|0)+a.b2|0)+CS(a)|0;a:{g=a.Q.b;h=Dd(a);i=Cz(a);j=e.a;if(f<=j&&j<(f+h|0)){k=e.b;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Fz(c);if(b.ck){e=D2(a,b.n);e.bd=FB(BG(a.c.f,e.V),e.bd);b=a.c.f;if(!I8(b.cW,e)&&!I8(b.cL,e)?0:1)return DF(c,C(68));}return DF(c,C(33));}
function AQp(a,b){var c,d,e,f,g;c=b.ck;if(c&&b.bO==65){c=Cb(a.c.f)-1|0;d=Fo(a.c.f,c);BZ((Bd(a)).bB,0,0);BZ((Bd(a)).bt,Cb(a.c.f)-1|0,d);return 1;}if(c&&b.bO==80){Io(a.c);return 1;}if(!a.dv&&c&&b.bO==90){if(C6(Bd(a)))Fi(a);b=a.c.f;b.b0=b.b0+1|0;e=b.f5;d=e.k;if(!d)e=null;else{f=(Fm(e,d-1|0)).data;e=M8(b,f[0]);c=1;while(c<f.length){M8(b,f[c]);c=c+1|0;}}if(e!==null){Ck(a,e.a,e.b,0);DT(a);}return 1;}if(!c&&!b.cQ){if(BF(b.d4,C(69))){C$(a,C(70));C0(a,a.c.r-1|0,0);c=1;}else if(BF(b.d4,C(71))){C$(a,C(72));C0(a,a.c.r-
1|0,0);c=1;}else if(BF(b.d4,C(38))){C$(a,C(73));C0(a,a.c.r-1|0,0);c=1;}else if(BF(b.d4,C(74))){C$(a,C(75));C0(a,a.c.r-1|0,0);c=1;}else if(BF(b.d4,C(76))){C$(a,C(77));C0(a,a.c.r-1|0,0);c=1;}else if(!BF(b.d4,C(78)))c=0;else{C$(a,C(79));C0(a,a.c.r-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cQ&&!b.ck)){d=b.bO;if(d>=48&&d<=57){c=d-48|0;e=a.mt.data[c];if(e!==null)e.s();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bO){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c
=1;}if(c)return 1;if(AAx(a,b))return 1;if(ABm(a,b))return 1;c=b.ck;if(c&&b.bO==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bO;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.cQ&&!b.iQ)return H(b.d4)>0&&C$(a,b.d4)?1:0;return 0;}return 0;}
function SZ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(BF(C(32),Dw(a.c))){b=Z(0,EE(a)-100|0);c=Ba(Cb(a.c.f)-1|0,Fl(a)+100|0);Bw(a.ky,Cg(b,c));d=Bz(3);e=d.data;e[0]=EB(a.c.f,b);f=a.c.f;g=0;c=Ba(c+1|0,f.x.data.length);h=0;while(h<c){g=g+Fo(f,h)|0;if(h!=(f.x.data.length-1|0))g=g+1|0;h=h+1|0;}e[1]=g;e[2]=b;a.c.tt=DS();f=Cp(a);i=a.c;BK(i);j=new XC;j.tW=i;e=O(B,3);k=e.data;k[0]=Di(a.c.f);k[1]=d;l=a.c.f.cJ;m=BA();Tj(l,l.cT,m);d=Bz(3*m.k|0);n=d.data;g=0;h=0;o=n.length;while(g<o){l=Bs(m,h);c=g+1|0;n[g]=l.bI;p=c+1|0;n[c]
=l.bL;g=p+1|0;n[p]=l.eC;h=h+1|0;}k[2]=d;CR(f,j,C(80),e);}}
function W6(a){Io(a.c);}
function Rs(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;$rt_globals.console.info("EditorComponent::iterativeParsing");b=Dw(a.c);if(b!==null&&!BF(C(33),b)){if(BF(C(29),b)){Io(a.c);G4(a.c.f);}else{c=a.c.f.cJ;d=Pt(c,c.cT);if(d===null){JM(a);G4(a.c.f);return;}a:{e=G$([CV(d),CT(d),d.bJ.eC]);f=Di(a.c.f);g=Bz(1);h=(-1);switch(Gi(b)){case -1655966961:if(!BF(b,C(29)))break a;h=4;break a;case 3401:if(!BF(b,C(30)))break a;h=3;break a;case 98723:if(!BF(b,C(31)))break a;h=2;break a;case 3254818:if(!BF(b,C(32)))break a;h=1;break a;case 3556653:if
(!BF(b,C(33)))break a;h=0;break a;default:}}b:{switch(h){case 0:h=0;break b;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;case 4:h=4;break b;default:}c=new BD;d=new R;V(d);L(L(d,C(81)),b);Bn(c,S(d));K(c);}g.data[0]=h;i=a.c.f.dX;if(i.ft===null){j=Bz(0);k=B1(0);}else{l=AQ2(AGp(d.cw,i.ea),d);Nj(l);j=l.jW;k=l.kc;}h=a.c.f.b0;b=Cp(a);d=new Wz;d.uX=a;m=O(B,6);n=m.data;n[0]=f;n[1]=g;n[2]=e;e=Bz(1);e.data[0]=h;n[3]=e;n[4]=j;n[5]=k;CR(b,d,C(82),m);}}else G4(a.c.f);}
function Gu(a,b,c){var d,e,f,g,h,i;if(c&&a.dv)return 0;d=DB(Bd(a));e=d.K;if(C6(Bd(a))){f=a.c.f;g=Bd(a);h=VA(f,g);if(c)MS(f,g,h);if(c){Ck(a,d.K,d.U,0);Fi(a);DT(a);}}else{h=Hk(EL(a.c.f.x.data[e]),C(50));i=Ba(Cb(a.c.f)-1|0,e);BZ((Bd(a)).bt,i,0);if(e>=(Cb(a.c.f)-1|0))BZ((Bd(a)).bt,i,Fo(a.c.f,i));else BZ((Bd(a)).bB,i+1|0,0);if(c)F0(a);else Ck(a,e,0,0);}b.i(h);return 1;}
function ABm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.dv)return 0;a:{switch(b.bO){case 8:if(C6(Bd(a))){F0(a);c=1;}else{b=a.c;d=b.r;if(!d&&!b.o)c=1;else{if(d){e=b.o;c=d-1|0;MG(b.f,e,c);}else{e=b.o-1|0;c=Fo(b.f,e);b=a.c.f;KI(b,e);Fb(b,e,Fo(b,e),1,C(50));}DT(a);c=Ck(a,e,c,0);}}break a;case 9:if(!b.bz){if(!C6(Bd(a)))C$(a,a.eA);else{f=DB(Bd(a));g=Fc(Bd(a));c=g.K;d=f.K;e=(c-d|0)+1|0;h=Bz(e);i=h.data;j=O(Bv,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.eA;d=d+1|0;e=l;}b=new Lp;m=a.c;Sb(b,m.o,m.r);m=new SR;m.oF
=a;Oe(a,h,0,0,j,b,m);f.U=f.U+H(a.eA)|0;g.U=g.U+H(a.eA)|0;L4(a,a.c.r+H(a.eA)|0);DT(a);}c=1;}else b:{if(!C6(Bd(a))){b=a.c;f=BG(b.f,b.o);if(f.l.data.length>0){g=VR(a,f);if(g===null){c=1;break b;}m=a.c;n=m.f;e=m.o;b=Dr(e,m.r);n.b0=n.b0+1|0;o=n.f5;h=O(Gp,1);h.data[0]=APd(e,0,1,g,b.V,b.bd);Bw(o,h);JG(n,e,0,1,g);FX(f,0,H(g));L4(a,a.c.r-H(g)|0);}}else{b=DB(Bd(a));f=Fc(Bd(a));c=f.K;p=b.K;c=(c-p|0)+1|0;h=Bz(c);k=h.data;j=O(Bv,c);q=j.data;g=a.c;e=g.r;l=g.o;c=0;while(p<=f.K){g=BG(a.c.f,p);if(g.l.data.length>0){g=VR(a,g);if
(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=Is(h,c);j=C5(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.K)b.U=Z(0,b.U-H(g)|0);if(p==f.K){f.U=Z(0,f.U-H(g)|0);L4(a,a.c.r-H(g)|0);}d=d+1|0;}b=Dr(l,e);f=new Uz;f.qJ=a;Oe(a,h,0,1,j,b,f);}DT(a);c=1;}break a;case 13:if(C6(Bd(a)))F0(a);b=a.c;D9(BG(b.f,b.o));b=a.c;ACM(b.f,b.o,b.r);DT(a);c=Ck(a,a.c.o+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ADG(a);}return c;}
function AAx(a,b){var c,d,e,f;a:{switch(b.bO){case 33:c=b.ck?G0(a,H$(a.Z,a.C),b.bz):Hi(a,2-VH(Cz(a),a.C)|0,0,b.cQ,b.bz);break a;case 34:c=!b.ck?Hi(a,VH(Cz(a),a.C)-2|0,0,b.cQ,b.bz):G0(a,((a.Z+Cz(a)|0)/a.C|0)-1|0,b.bz);break a;case 35:if(!Ht(a,b.bz)&&!C0(a,(E$(a)).z,b.bz)){c=0;break a;}c=1;break a;case 36:if(!Ht(a,b.bz)&&!C0(a,0,b.bz)){c=0;break a;}c=1;break a;case 37:c=b.ck;if(c&&b.cQ){Ih(a);d=a.c.e_;e=d.da;if(e<=0)d=null;else{f=d.es.data;c=e-1|0;d.da=c;d=f[c];}if(d===null)c=1;else{Ck(a,Ln(d),Je(d),0);Hy(Bd(a),
d.jO);c=1;}break a;}c=RX(a,(-1),c,b.bz);break a;case 38:c=Hi(a,(-1),b.ck,b.cQ,b.bz);break a;case 39:c=b.ck;if(c&&b.cQ){d=a.c.e_;e=d.da;if(e==(d.en-1|0))d=null;else{f=d.es.data;c=e+1|0;d.da=c;d=f[c];}if(d===null)c=1;else{Ck(a,Ln(d),Je(d),0);Hy(Bd(a),d.jO);c=1;}break a;}c=RX(a,1,c,b.bz);break a;case 40:c=Hi(a,1,b.ck,b.cQ,b.bz);break a;default:}c=0;}if(c&&b.bz){b=(Bd(a)).bt;d=a.c;BZ(b,d.o,d.r);}if(c)Kx(a.c);return c;}
function Ih(a){var b,c,d,e,f,g,h;b=a.c;c=b.e_;d=c.da;c=d<0?null:c.es.data[d];if(c!==null&&b.o==Ln(c)&&a.c.r==Je(c))return;c=a.c;e=c.e_;b=new Kt;d=c.o;f=c.r;c=Bd(a);b.k$=Dr(d,f);g=AGz(c);b.jO=g;g.c1=0;f=e.da;h=e.en;if(f==(h-1|0))Vb(e,b);else{d=f+1|0;while(d<h){RD(e);d=d+1|0;}Vb(e,b);}e.da=e.da+1|0;}
function DT(a){a.c.f.sR=Ns(Cp(a));}
function HY(a,b){var c,d,e,f,g,h;OC(a);c=a.c;a.c=b;PX(c,null,null);PX(b,a,Cp(a));d=(Cf(a.ct.l4)).data;e=d.length;f=0;while(f<e){g=d[f].sc;h=AMK(Kc(c.dz),Kc(b.dz));g.f(h);f=f+1|0;}}
function Kz(a,b){var c;c=Lg(a.c.f,b);if(c===null)return C(3);return c.q;}
function Dq(a,b){return EW(b,a.Q,a.cg);}
function Jo(a,b){var c,d,e,f,g;a.c.qv=b;if(b===null){Ct(EX(),C(83));K3(a.cG,null);}else{b=b.data;c=Eo(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.fK<<24>>24;e=e+1|0;}K3(a.cG,c);}}
function R7(a,b){a.c.mW=b;}
function CF(a){return a.c.qv;}
function Bd(a){return a.c.kb;}
function HN(a,b){GP(a.c,b);}
function UU(a){var b;b=a.kr;if(b!==null)b.i(a);}
var ACv=F();
function ADh(){var a=this;B.call(a);a.fW=null;a.g8=null;a.e1=0;}
function Cx(a){var b=new ADh();AIV(b,a);return b;}
function AIV(a,b){a.fW=b;}
function BY(a,b){var c,d,e;c=a.e1;d=a.fW;if(c==d.data.length)a.fW=C5(d,c+4|0);d=a.fW.data;e=a.e1;a.e1=e+1|0;d[e]=b;a.g8=null;}
function Fh(a,b){var c;BY(a,b);c=new UO;c.sz=a;c.sA=b;return c;}
function Cf(a){var b;b=a.g8;if(!(b!==null&&b.data.length==a.e1))a.g8=C5(a.fW,a.e1);return a.g8;}
var ACU=F();
function BI(b,c){if(b===c)return 1;return b!==null?b.bu(c):c!==null?0:1;}
function BK(b){if(b!==null)return b;b=new Gd;Bn(b,C(3));K(b);}
function U$(){B.call(this);this.mK=null;}
function AJy(a){var b,c,d,e,f,g;b=a.mK;c=b.sz;b=b.sA;d=0;while(true){e=c.fW.data;f=e.length;if(d>=f)break;if(e[d]===b){while(true){g=d+1|0;if(g>=f)break;e[d]=e[g];d=g;}e[d]=null;c.e1=c.e1-1|0;c.g8=null;}d=d+1|0;}}
var Vf=F(0);
var AAI=F();
function AII(a,b){return a.Bu(b);}
function AKW(a){return a.G_();}
function Hs(){var a=this;B.call(a);a.ru=null;a.qx=null;}
function ABy(b,c){return c!==null&&b!==null&&!BF(c,b)?0:1;}
var SM=F(0);
function MP(){B.call(this);this.uw=null;}
var QE=F(0);
var OF=F(0);
function AA6(){var a=this;B.call(a);a.sn=null;a.mz=null;a.nj=null;a.dB=null;a.l9=null;a.jV=null;a.hg=null;a.e5=null;a.it=0;a.kW=0;a.rT=null;a.d9=null;a.jk=null;}
function AOF(a,b,c,d){var e=new AA6();AE9(e,a,b,c,d);return e;}
function AE9(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new U7;f.pF=a;a.sn=f;f=new U3;f.vY=a;a.mz=f;g=new U4;g.se=a;a.l9=new $rt_globals.ResizeObserver(Bp(g,"f"));f=new U2;f.o1=a;a.jV=f;a.it=1;h=new Sn;h.jH=new T$;f=new O0;f.yp=null;f.jv=AUM;h.qh=f;BK(f);g=new Ss;g.sH=f;h.vP=g;h.gm=e;i=e.length;j=0;while(j<i){f=e[j];k=new St;k.rt=h;k.rs=j;g=Bp(k,"f");f.onmessage=g;f=e[j];g=AAC();f.postMessage(g);j=j+1|0;}h.gV=0;h.kR=Bz(i);h.kp=Bz(i);a.jk=h;a.nj=(Fg()).getElementById($rt_ustr(d));e=Yu();d=0;e.tabIndex=d;g=e.style;g.setProperty("width",
"100%");g.setProperty("height","100%");g.setProperty("outline","none");a.dB=e;a.nj.appendChild(e);d=a.dB;f=AMt(!!0,!!0,!!1,!!1);d=d.getContext("webgl2",f);if(d===null)c.s();else{c=new Po;e=a.dB;g=a.mz;c.dx=null;c.g4=e;c.b$=AS3(g);g=$rt_globals.window;l=O(CX,14);m=l.data;f=new VY;f.nX=c;m[0]=CH(c,e,C(84),f);k=new VZ;k.s1=c;m[1]=CH(c,e,C(85),k);k=new V0;k.pt=c;m[2]=CH(c,e,C(86),k);k=new V1;k.vV=c;m[3]=CH(c,e,C(87),k);m[4]=CH(c,e,C(88),ASQ(c));m[5]=CH(c,e,C(89),ATm(c));m[6]=CH(c,e,C(90),ARL(c));m[7]=CH(c,e,C(91),
ARQ(c));m[8]=CH(c,e,C(92),ATu(c));m[9]=CH(c,e,C(93),ASG(c));m[10]=CH(c,e,C(94),ARx(c));m[11]=ABJ(c,g,C(95),ASc(c),1);m[12]=CH(c,g,C(96),ATD(c));m[13]=CH(c,g,C(97),ASu(c));c.lc=AQm(l);Z0(c,e);a.hg=c;a.e5=ASl(d,a.mz);AOz(a.l9,a.dB);e=$rt_globals.window;d=a.jV;e.addEventListener("resize",Bp(d,"handleEvent"));a.d9=b.wg(ZS(a));S6(a);}}
function UG(a){a.dB.focus();}
function ZS(a){var b,c,d;b=new Mi;c=a.e5;d=a.hg.b$;b.jK=c;b.bh=d;b.i2=a;return b;}
function S6(a){a.kW=$rt_globals.requestAnimationFrame(Bp(a.sn,"onAnimationFrame"));}
function I_(a){a.it=1;}
function S4(a,b,c){var d,e;a.hg.dx=Cg(b,c);d=a.dB;e=b;d.width=e;d=a.dB;e=c;d.height=e;d=a.e5;Bg(d.cV,b,c);e=d.T;d=d.cV;b=d.a;c=d.b;e.viewport(0,0,b,c);a.d9.iY(a.e5.cV,J7(a));a.d9.e8();}
function Ns(a){return $rt_globals.performance.now()/1000.0;}
function J7(a){return $rt_globals.window.devicePixelRatio;}
function VP(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADp(b,0);else{c=new WS;d=$rt_globals.window.showOpenFilePicker();e=new WR;e.qG=b;e.qF=c;d.then(Bp(e,"f"),Bp(c,"f"));}}
function CR(a,b,c,d){var e,f,g,h;e=a.jk;f=e.gV;if(f>0){g=e.kR.data;f=f-1|0;e.gV=f;KV(e,b,c,d,g[f]);}else{h=e.jH;e=new Wc;e.tp=b;e.uc=c;e.s4=d;b=new TP;b.oE=e;c=h.jG;b.tZ=c;if(c===null)h.kH=b;else c.s6=b;h.jG=b;h.bN=h.bN+1|0;h.hS=h.hS+1|0;}}
function Ly(a,b,c,d,e){var f,g;f=a.jk;if(c>=f.gm.length)c=0;g=f.kp.data;g[c]=g[c]+1|0;KV(f,b,d,e,c);}
function ADR(b){var c;c=new WE;c.oe=b;return c;}
var W_=F(0);
var AUV=null;function ATb(){ATb=Bm(W_);ANb();}
function ANb(){AUV=new $rt_globals.TextDecoder("utf-16");}
function Lq(){B.call(this);this.kJ=null;}
function FY(){var a=this;Lq.call(a);a.nW=null;a.bf=null;}
function Vr(a,b){var c,d,e;a.kJ=b;a.nW=Jv(0,0,64,255,new B4);c=new T0;c.cI=new Bj;c.kj=Cx(O(Ii,0));c.dm=new Bj;c.uu=new Bj;c.wv=new B4;c.ww=new B4;d=b.jK;c.dk=d;e=b.i2;c.gO=e;c.cE=d.lr;d=new RK;d.uS=e;c.dh=d;d=b.bh.kd;e=new Qc;e.r4=c;BY(d,e);d=b.bh.mr;e=new Qa;e.vQ=c;BY(d,e);a.bf=c;BY(b.bh.ep,new R0);b=b.bh.ep;c=a.bf;BK(c);d=new RZ;d.oH=c;BY(b,d);}
function TG(a){var b,c,d,e,f,g,h;b=a.kJ.jK;c=a.nW;d=b.T;e=c.bp;f=c.bG;g=c.bc;h=c.bZ;d.clearColor(e,f,g,h);b.T.clear(16384);}
function SG(a,b,c){var d,e,f,g;a:{d=a.bf;Cw(d.cI,b);if(d.b1!==c){d.b1=c;e=(Cf(d.kj)).data;f=e.length;g=0;while(true){if(g>=f)break a;b=e[g];b.ja=In(b.cH,b.iN);d=BP(b.cc);while(BQ(d)){PU(BS(d),b.ja,b.cH);}g=g+1|0;}}}}
var OD=F(0);
var Jy=F(0);
function LV(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HJ;c=new H8;d=new Ij;ACQ();Jq(d,AU1);L0(c,d,BH(AU2),BH(AU3),BH(AU4),BH(AU2),BH(AU5),BH(AU6),BH(AU7),BH(AU8),BH(AU9),BH(AU$));ZF();e=(AU_.gv()).data;f=e.length;g=O(Ir,f);h=g.data;i=0;while(i<f){h[i]=e[i].lT;i=i+1|0;}j=ABN(P(C(98)),P(C(99)),P(C(100)),P(C(101)));k=new HO;l=new H0;ALp();m=AVa;L6(l,m,AVb,AVc,AVd,AVe,m);K8(k,l,ADj(),ADs(P(C(102)),P(C(103)),P(C(104))),ADj(),XR(1,0.125),AVf,AVg);IA(b,c,g,j,k,X7(P(C(105)),P(C(106)),P(C(107)),P(C(108))));a.iA(b);}
function FT(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HJ;c=new H8;d=new Ij;AHM();Jq(d,AVh);L0(c,d,BH(AVi),BH(AVj),BH(AVk),BH(AVi),BH(AVl),BH(AVm),BH(AVn),BH(AVo),BH(AVp),BH(AVq));UE();e=(AVr.gv()).data;f=e.length;g=O(Ir,f);h=g.data;i=0;while(i<f){h[i]=e[i].hR;i=i+1|0;}j=ABN(P(C(109)),P(C(110)),P(C(111)),P(C(112)));k=new HO;l=new H0;AED();m=AVs;L6(l,m,AVt,AVu,AVv,AVw,m);K8(k,l,ACL(),ADs(P(C(113)),P(C(103)),P(C(104))),ACL(),XR(1,0.17499999701976776),AVx,AVy);IA(b,c,g,j,k,X7(P(C(105)),P(C(106)),P(C(107)),P(C(114))));a.iA(b);}
function J8(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HJ;c=new H8;d=new Ij;ACy();Jq(d,AVz);L0(c,d,BH(AVA),BH(AVB),BH(AVC),BH(AVA),BH(AVD),BH(AVE),BH(AVF),BH(AVG),BH(AVH),BH(AVI));ABI();e=(AVJ.gv()).data;f=e.length;g=O(Ir,f);h=g.data;i=0;while(i<f){h[i]=e[i].k1;i=i+1|0;}j=ABN(P(C(115)),P(C(116)),P(C(117)),P(C(118)));k=new HO;l=new H0;AET();m=AVK;L6(l,m,AVL,AVM,AVN,AVO,m);K8(k,l,ADc(),ADs(P(C(119)),P(C(120)),HE(0)),ADc(),XR(1,0.07500000298023224),AVP,AVQ);IA(b,c,g,j,k,X7(P(C(121)),P(C(122)),P(C(123)),P(C(124))));a.iA(b);}
var La=F(0);
function Mr(){var a=this;FY.call(a);a.cp=null;a.fb=null;}
function AI9(a,b){if(Wi(a.bf,b)){Rr(a.fb);Ka(a.cp,b);}}
function AO4(a,b){return KF(a.cp,b);}
function AIJ(a){TG(a);Iy(a.cp);Xp(a.fb);}
function AD_(a,b,c){SG(a,b,c);IL(a.cp,new Bj,b,c);}
function AHd(a,b){BK(b);MK(a.fb,b);JD(a.cp,b);}
var Km=F(0);
function OE(){B.call(this);this.rG=null;}
function AM9(a,b,c,d,e,f){var g,h,i,j;g=a.rG;h=E9(b);i=HC(d,c);j=JH();g=g.provideDeclaration(h,i,j);b=new Mm;b.t_=e;b.t$=f;LT(g,b,f);}
var W1=F(0);
function WJ(){B.call(this);this.oT=null;}
var Fn=F(0);
function MD(){B.call(this);this.sc=null;}
function V8(){B.call(this);this.t6=null;}
function AGR(a,b,c,d,e,f){var g,h,i,j;g=a.t6;h=E9(b);i=HC(d,c);j=JH();g=g.provideDefinition(h,i,j);b=new QR;b.sV=e;b.sU=f;LT(g,b,f);}
function Lp(){var a=this;B.call(a);a.V=0;a.bd=0;}
function Dr(a,b){var c=new Lp();Sb(c,a,b);return c;}
function Sb(a,b,c){a.V=b;a.bd=c;}
function AEz(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return a.V==c.V&&a.bd==c.bd?1:0;}return 0;}
function ANM(a){var b,c,d,e;b=O(B,2).data;b[0]=CK(a.V);b[1]=CK(a.bd);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bn)|0;d=d+1|0;}return c;}
function ANh(a,b){var c;b=b;c=BE(a.V,b.V);if(!c)c=BE(a.bd,b.bd);return c;}
var Ga=F(0);
var HD=F(0);
var Ez=F(0);
var G_=F(0);
function N_(){var a=this;FY.call(a);a.w=null;a.v=null;a.dE=null;a.gR=0;a.fu=null;a.iq=null;a.vS=null;}
function XE(a,b){var c,d,e,f,g;if(a.w===b)a.gR=a.gR|1;if(a.v===b)a.gR=a.gR|2;if((a.gR&3)==3){Ct(EX(),C(125));b=a.w.c;c=a.v.c;d=Di(b.f);e=Di(c.f);f=Y4(b.f);g=Y4(c.f);b=a.kJ.i2;c=new PW;c.rd=a;CR(b,c,C(126),G(B,[d,f,e,g]));}}
function AQe(a,b,c){if(DK(a.bf,a.w))return Gu(a.w,b,c);if(!DK(a.bf,a.v))return 0;return Gu(a.v,b,c);}
function Xk(a,b){var c;c=new S2;c.ql=b;return c;}
function Ve(a,b,c){var d,e,f,g,h,i,j;d=a.fu;if(d!==null&&d.fD!==null){e=b!==a.w?0:1;f=EE(b);g=(Fl(b)+f|0)/2|0;h=g-f|0;d=a.fu;d=d.fD.data[FI(d,g,e)];i=g-(!e?d.ht:d.hu)|0;j=b.Z-T(f,b.C)|0;c.Z=KR(T(((!e?d.hu:d.ht)+i|0)-h|0,c.C)+j|0,FM(c));return;}}
function ANN(a,b){var c,d;c=KF(a.w,b);d=KF(a.v,b);return !c&&!d?0:1;}
function AK2(a){TG(a);Iy(a.w);Iy(a.v);ADE(a.iq,a.fu,a.bf,a.w,a.v,a.vS,a.dE.fI);Xp(a.dE);}
function Rf(a){return ADC(0);}
function AOp(a){Nq(a.w);Nq(a.v);}
function AKS(a){Xn(a.w);Xn(a.v);}
function APr(a,b){N$(a.w,b);N$(a.v,b);}
function AGD(a,b){if(Wi(a.bf,b)){Rr(a.dE);Ka(a.w,b);Ka(a.v,b);}}
function AKj(a,b,c){var d,e,f,g,h,i;SG(a,b,c);d=new Bj;e=Co(20.0,c);f=new Bj;g=b.a/2|0;h=e/2|0;Zw(f,g-h|0,b.b);IL(a.w,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;IL(a.v,d,f,c);Bg(a.iq.cY,f.a,d.b);Bg(a.iq.em,d.a-f.a|0,f.b);}
function AEU(a,b){BK(b);MK(a.dE,b);JD(a.w,b);JD(a.v,b);}
function AMR(a,b){var c,d;c=Dq(a.w,b.n)&&NR(a.w,b)?1:0;d=Dq(a.v,b.n)&&NR(a.v,b)?1:0;return !c&&!d?0:1;}
function AJc(a,b,c,d){var e,f;e=Dq(a.w,b.n)&&MJ(a.w,b,c,d)?1:0;f=Dq(a.v,b.n)&&MJ(a.v,b,c,d)?1:0;return !e&&!f?0:1;}
function ALf(a,b,c){var d,e,f,g,h,i,j,k;d=Dq(a.w,b.n);e=Dq(a.v,b.n);f=a.bf;g=f.d1;h=g!==null?0:1;i=a.w;j=g!==i?0:1;k=g!==a.v?0:1;if(d&&!(!h&&!k))Fr(f,i);if(e&&!(!h&&!j))Fr(a.bf,a.v);if(d){i=Mz(a.w,b,c);if(i!==null)return i;}return !e?null:Mz(a.v,b,c);}
function ANF(a,b,c){var d,e,f,g;d=Dq(a.w,b.n);e=Dq(a.v,b.n);f=d&&S8(a.w,b,c)?1:0;g=e&&S8(a.v,b,c)?1:0;return !f&&!g?0:1;}
function AM8(a,b,c,d){var e,f,g,h;e=Dq(a.w,b.n);f=Dq(a.v,b.n);g=e&&Jm(a.w,c,d)?1:0;h=f&&Jm(a.v,c,d)?1:0;return !g&&!h?0:1;}
function AJ7(a){return DK(a.bf,a.w)?Xk(a,a.w):!DK(a.bf,a.v)?null:Xk(a,a.v);}
var ZO=F();
var Zc=F();
var B0=F(0);
function Pq(){var a=this;B.call(a);a.og=null;a.oh=null;}
function AKz(a,b){var c,d,e;c=a.og;d=a.oh;e=new Pm;e.g7=AOF(new XL,new XM,Cj(d.containerId),b);e.bA=(Nr(e)).cp;if(ABH(d))QG(e,d.theme);if(Zs(d))Uo(e,d.readonly);c.f(e);}
var ACc=F(0);
function ABH(b){return "theme" in b?1:0;}
function Zs(b){return "readonly" in b?1:0;}
function ABD(b){return !("workerUrl" in b?1:0)?"worker.js":b.workerUrl;}
function X6(b){return !("numThreads" in b?1:0)?2:b.numThreads|0;}
var AAP=F();
function Y9(b,c,d,e){var f,g,h,i,j;f=new $rt_globals.Array();g=0;while(g<e){h=new $rt_globals.Worker(d);i=new NE;i.pY=h;i.pZ=f;i.p0=e;i.p1=b;i.pU=c;j=Bp(i,"f");h.onmessage=j;g=g+1|0;}}
function QO(){var a=this;B.call(a);a.u1=null;a.u2=null;}
function AHP(a,b){var c,d,e,f;c=a.u1;d=a.u2;e=new VC;f=AOF(new UI,new UJ,Cj(d.containerId),b);e.p_=f;e.di=f.d9;if(ABH(d))PB(e,d.theme);if(Zs(d))P2(e,d.readonly);c.f(e);}
function NE(){var a=this;B.call(a);a.pY=null;a.pZ=null;a.p0=0;a.p1=null;a.pU=null;}
function AM_(a,b){var c,d,e,f,g;c=a.pY;d=a.pZ;e=a.p0;f=a.p1;g=a.pU;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var Y=F(0);
function XI(){B.call(this);this.sT=null;}
function AIY(a,b){var c,d,e,f,g;c=b.data;b=a.sT;d=c.length;e=O(Bv,d).data;f=0;while(f<d){e[f]=c[f].cO();f=f+1|0;}d=e.length;g=new $rt_globals.Array(d);f=0;while(f<d){c=$rt_ustr(e[f]);f;g[f]=c;f=f+1|0;}b.f(g);}
var ZB=F();
function AAC(){return "ping";}
function ADJ(b){return b===AAC()?1:0;}
var Et=F(0);
var XL=F();
function AJK(a,b){var c,d,e,f,g;c=new Mr;Vr(c,b);d=AOD(c.bf);c.fb=d;e=Z9(c.bf,d);c.cp=e;NP(c.bf,e);BY(b.bh.d0,c.fb);BY(b.bh.f6,c.fb);BY(b.bh.d0,c.cp);d=b.bh.ep;e=new Px;e.w$=c;BY(d,e);d=b.bh.ep;e=new JZ;f=c.cp;BK(f);g=new Pv;g.vi=f;MQ(e,b,g);BY(d,e);d=b.bh.jm;e=c.cp;BK(e);f=new Pw;f.pf=e;BY(d,f);d=b.bh.iF;e=new NS;e.qc=c;BY(d,e);d=b.bh.f6;e=new NT;e.v5=c;BY(d,e);b=b.bh.iv;d=new NQ;d.nF=c;BY(b,d);FT(c);return c;}
var Bk=F(0);
var XM=F();
function AIv(a){ABg();}
var UI=F();
function ANw(a,b){var c,d,e,f;c=new N_;Vr(c,b);d=new Qb;d.cY=new Bj;d.em=new Bj;d.h8=new Bj;d.h9=new Bj;d.h5=new Bj;d.h6=new Bj;c.iq=d;c.vS=AAY();d=AOD(c.bf);c.dE=d;c.w=Z9(c.bf,d);c.v=Z9(c.bf,c.dE);d=c.w;d.bx=1;e=new Uu;e.u_=c;f=new Uv;f.q9=c;VV(d,e,e);VV(c.v,f,f);d=c.w;e=new Uw;e.nz=c;d.kr=e;e=c.v;f=new Uq;f.ue=c;e.kr=f;R7(d,0);R7(c.v,0);NP(c.bf,c.w);BY(b.bh.d0,c.dE);BY(b.bh.f6,c.dE);BY(b.bh.f6,c);BY(b.bh.d0,c);d=b.bh.ep;e=new Ur;e.xy=c;BY(d,e);d=b.bh.ep;e=new JZ;f=new Us;f.m7=c;MQ(e,b,f);BY(d,e);BY(b.bh.jm,
c);BY(b.bh.iF,c);b=b.bh.iv;d=new Ut;d.sQ=c;BY(b,d);FT(c);return c;}
var UJ=F();
function AQ8(a){ABg();}
var Rm=F(0);
function U7(){B.call(this);this.pF=null;}
function AJf(a,b){var c,d;c=b;b=a.pF;if(!(!b.d9.lH(c/1000.0)&&!b.it)){d=b.e5.cV;if(T(d.a,d.b)){b.it=0;b.d9.e8();}}S6(b);}
function U3(){B.call(this);this.vY=null;}
function C3(a){I_(a.vY);}
var Qk=F(0);
function U4(){B.call(this);this.se=null;}
function AHk(a,b,c){var d,e,f,g;c=a.se;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dB){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=J7(c);S4(c,Ix(f.width*g),Ix(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];S4(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var ACZ=F();
function AOz(b,c){ANC(b,c,AEu());}
function AEu(){return {box:'device-pixel-content-box'};}
function ANC(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cd=F(0);
function U2(){B.call(this);this.o1=null;}
function ANk(a,b){b=a.o1;b.d9.iY(b.e5.cV,J7(b));b.d9.e8();}
function Sn(){var a=this;B.call(a);a.jH=null;a.gm=null;a.qh=null;a.kR=null;a.kp=null;a.nQ=0;a.gV=0;a.vP=null;}
function KV(a,b,c,d,e){var f,g,h,i,j,k;d=d.data;f=a.nQ+1|0;a.nQ=f;g=a.qh;h=CK(f);g.hF=LM(g,g.hF,h);h=Ul(g,h);Mj(h,b);Mj(h,b);g.jA=g.jA+1|0;b=a.gm[e];i=d.length;g=new $rt_globals.Array(i+2|0);h=f;0;g[0]=h;c=$rt_ustr(c);1;g[1]=c;h=new $rt_globals.Array();j=0;while(j<i){c=d[j];if(c instanceof Bv)k=$rt_ustr(c);else if(H_(c,$rt_arraycls($rt_bytecls())))k=c.data.buffer;else if(H_(c,$rt_arraycls($rt_charcls())))k=c.data.buffer;else if(H_(c,$rt_arraycls($rt_intcls())))k=c.data.buffer;else{if(!(c instanceof KA)){b=new BD;c
=By(c);if(c.kl===null)c.kl=$rt_str(c.fJ.$meta.name);h=c.kl;c=new R;V(c);L(L(c,C(127)),h);Bn(b,S(c));K(b);}c=c;k=c.hT;if(k===null)k=c.fQ;}f=j+2|0;f;g[f]=k;if(k instanceof $rt_globals.ArrayBuffer?1:0)h.push(k);j=j+1|0;}b.postMessage(g,h);}
var LH=F(Ei);
var Mp=F(0);
var W4=F(0);
function T$(){var a=this;LH.call(a);a.kH=null;a.jG=null;a.hS=0;}
var W0=F(0);
var MW=F(0);
function O0(){var a=this;DD.call(a);a.hF=null;a.jv=null;a.yp=null;a.jA=0;}
function ADd(a,b){var c;c=Ul(a,b);if(c===null)return null;a.hF=JF(a,a.hF,b);a.jA=a.jA+1|0;return c.ix;}
function Ul(a,b){var c,d;c=a.hF;while(true){if(c===null)return null;d=I6(a.jv,b,c.iV);if(!d)break;c=d>=0?c.bT:c.bC;}return c;}
function LM(a,b,c){var d,e;if(b===null){b=new I1;d=null;b.iV=c;b.ix=d;b.fh=1;b.fs=1;return b;}e=I6(a.jv,c,b.iV);if(!e)return b;if(e>=0)b.bT=LM(a,b.bT,c);else b.bC=LM(a,b.bC,c);D6(b);return Jk(b);}
function JF(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=I6(a.jv,c,b.iV);if(d<0)b.bC=JF(a,b.bC,c);else if(d>0)b.bT=JF(a,b.bT,c);else{e=b.bT;if(e===null)return b.bC;f=b.bC;g=O(I1,e.fh).data;h=0;while(true){b=e.bC;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bT;while(h>0){h=h+(-1)|0;j=g[h];j.bC=b;D6(j);b=Jk(j);}e.bT=b;e.bC=f;D6(e);b=e;}D6(b);return Jk(b);}
function Ss(){B.call(this);this.sH=null;}
function St(){var a=this;B.call(a);a.rt=null;a.rs=0;}
function AEp(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.rt;d=a.rs;ADJ(b.data);e=c.kp.data;f=e[d];if(f>0)e[d]=f-1|0;else{g=c.jH;h=g.kH;if(h===null)i=null;else{i=h.s6;g.kH=i;if(i!==null)i.tZ=null;else g.jG=null;g.hS=g.hS-1|0;g.bN=g.bN+1|0;i=h.oE;}if(i!==null)KV(c,i.tp,i.uc,i.s4,d);else{e=c.kR.data;j=c.gV;c.gV=j+1|0;e[j]=d;}}c=c.vP;b=b.data;if(!ADJ(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BD;X(b);K(b);}if(b.length<1){b=new BD;AB0(b);K(b);}g=CK(b[0]);h=ADd(c.sH,g);e=O(B,b.length-1|0);k=e.data;f=0;j=k.length;while
(f<j){l=f+1|0;g=b[l];k[f]=(typeof g==='string'?1:0)?Cj(JJ(g)):(g instanceof $rt_globals.ArrayBuffer?1:0)?ASb(JJ(g)):(g instanceof $rt_globals.File?1:0)?ABq(null,JJ(g)):!(g instanceof $rt_globals.FileSystemFileHandle?1:0)?null:ABq(JJ(g),null);f=l;}h.i(e);}}
function Po(){var a=this;B.call(a);a.b$=null;a.g4=null;a.lc=null;a.dx=null;}
function MT(){return (Fg()).activeElement;}
function CH(a,b,c,d){b.addEventListener($rt_ustr(c),Bp(d,"handleEvent"));return Wj(a,b,c,d);}
function ABJ(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bp(d,"handleEvent"),!!e);return Wj(a,b,c,d);}
function Wj(a,b,c,d){var e;e=new Qh;e.ow=b;e.oy=c;e.ox=d;return e;}
function Tv(a,b){var c;c=new Un;c.vU=b;return c;}
function Em(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.g4.getBoundingClientRect();e=Cg(Ix((b.clientX-d.left)*c),Ix((b.clientY-d.top)*c));f=new Bj;g=a.dx;f.a=g.a;f.b=g.b;d=new Mf;TU(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.n=e;d.wB=f;return d;}
function Xs(a,b,c){var d,e,f,g;d=new OU;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;TU(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j2=0;d.d4=e;d.bO=f;d.tO=c;d.xQ=g;return d;}
function Dt(a,b){b.stopPropagation();b.preventDefault();}
function Z0(a,b){var c;c=new WY;c.qm=b;b.onpointerdown=Bp(c,"f");c=new WZ;c.o6=b;b.onpointerup=Bp(c,"f");}
function KK(){var a=this;B.call(a);a.rP=null;a.cZ=null;a.T=null;a.lr=0;a.tX=null;a.xf=0;a.x9=0;a.jC=null;a.yC=null;a.ym=null;a.yc=null;a.e9=null;a.fv=null;a.yd=null;a.gC=null;a.hz=null;a.yu=null;a.is=null;a.cV=null;a.vD=null;a.lB=0;a.jX=0;a.mc=0;a.lX=0;a.ic=0;a.l_=null;}
function ABA(a,b,c,d){var e,f,g,h,i,j;a.cV=new Bj;a.lB=0;a.l_=new V4;a.rP=c;a.lr=d;e=$rt_str(b.getParameter(7938));f=new R;V(f);L(L(f,C(128)),e);$rt_globals.console.info($rt_ustr(S(f)));a.T=b;a.cZ=Nl(c,4,4,1);g=AEh(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=B1(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;c=new Qi;G8();f=AVR;c.dM=b;c.gl=f;c.lw=h.length/f.kF|0;c.mk=j.length;f
=b.createBuffer();c.hP=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);c.ju=null;f=b.createBuffer();c.jl=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}f=null;b.bindBuffer(34962,f);f=null;b.bindBuffer(34963,f);a.is=c;a.x9=J4(e,C(129));c=new Qj;c.dO=b;a.tX=c;d=b.getParameter(3379);a.xf=d;c=new R;V(c);Bl(L(c,C(130)),d);$rt_globals.console.info($rt_ustr(S(c)));g=O(CJ,9);i=g.data;c=new VF;Gy(c,b,C(131),C(132),AVR);e=c.bs;c.uW=b.getUniformLocation(e,"uColor");a.jC=c;i[0]=
c;c=ARI(b);a.yC=c;i[1]=c;c=AST(b);a.ym=c;i[2]=c;c=ATf(b);a.yc=c;i[3]=c;c=ASm(b);a.e9=c;i[4]=c;c=ATx(b);a.fv=c;i[5]=c;c=ATo(b);a.yd=c;i[6]=c;c=AS_(b);a.gC=c;i[7]=c;c=ATa(b);a.hz=c;i[8]=c;a.yu=g;ADo(b,C(133));}
function Fa(a,b,c,d){return Nl(a.rP,b,c,d);}
function Dj(a,b){var c;if(b==a.jX)return b;if(!b)a.T.disable(3042);else{a.T.enable(3042);a.T.blendFuncSeparate(770,771,1,1);}c=a.jX;a.jX=b;return c;}
function RH(a,b,c){Ux(a,b.a,b.b,c);}
function Ux(a,b,c,d){var e,f;e=d.a;f=d.b;a.lX=1;a.ic=1;d=a.l_;d.r1=b;d.r3=c;d.r0=e;d.rZ=f;TV(a);}
function Li(a){a.lX=0;a.ic=0;TV(a);}
function TV(a){var b,c,d,e,f,g;b=a.mc;c=a.lX;if(b!=c){a.mc=c;if(!c)a.T.disable(3089);else a.T.enable(3089);}if(a.mc&&a.ic){a.ic=0;d=a.T;e=a.l_;b=e.r1;c=a.cV.b-e.r3|0;f=e.rZ;c=c-f|0;g=e.r0;d.scissor(b,c,g,f);}}
function Gb(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.is;c=a.lB;d=b.gl.td;e=b.dM;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dM;h=b.hP;e.bindBuffer(34962,h);i=b.gl.mG.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dM;m=k.ha;n=k.eZ;o=b.gl.kF*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.eZ|0;j=j+1|0;}a:{e=b.ju;if(e!==null){c=0;b.dM.bindBuffer(34962,e);i=b.gl.rO.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dM;j=e.ha;p=e.eZ;m=e.pR;n=b.gl.qd;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.eZ|0;g=g+1|0;}}}q=b.jl;if(q===null){c=b.lw;if(c>0)b.dM.drawArrays(4,0,c);}else{b.dM.bindBuffer(34963,q);k=b.dM;g=b.mk;k.drawElements(4,g,5123,0);}a.lB=d;}
function BB(a,b,c,d,e){Gf(a,a.jC);GR(a.jC,a.T,b,c,d,a.cV);d=a.jC;Gg(a.T,d.uW,e);Gb(a);}
function Es(a,b,c,d,e,f,g,h,i){Gf(a,a.e9);GR(a.e9,a.T,b,c,d,a.cV);TQ(a.e9,a.T,f);ME(a.e9,a.T,f,e);S_(a.e9,a.T,g,h);d=a.e9;e=a.T;d=d.pA;e.uniform2f(d,i,0.0);Gb(a);}
function Ew(a,b,c,d,e,f,g,h){Gf(a,a.fv);GR(a.fv,a.T,b,c,d,a.cV);TQ(a.fv,a.T,f);ME(a.fv,a.T,f,e);S_(a.fv,a.T,g,h);Gb(a);}
function GV(a){var b,c;b=new I0;c=a.tX;b.eG=new Bj;b.eq=c;b.eP=c.dO.createTexture();AVS=AVS+1|0;return b;}
function Gf(a,b){var c,d;if(b!==a.vD){c=a.T;d=b.bs;c.useProgram(d);a.vD=b;}}
function ACw(){var a=this;KK.call(a);a.xN=null;a.yn=null;}
function ASl(a,b){var c=new ACw();AJA(c,a,b);return c;}
function AJA(a,b,c){ABA(a,b,new TX,1);a.yn=new TW;a.xN=c;}
function Gt(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;a:{f=a.cZ;switch(e){case 1:break;case 2:g='italic ';break a;default:g='';break a;}g='oblique ';}h=g+d+' '+c+'px '+$rt_ustr(b);M0(f,h);g=f.dg.measureText("W");i=g.fontBoundingBoxAscent;j=g.fontBoundingBoxDescent;k=g.width;l=GB(f,C(60));m=GB(f,C(134));g=new KB;h=h;g.mi=b;g.w0=c;n=c|0;if(n!==c){b=new R;V(b);f=L(b,C(135));ABn(f,f.H,c);$rt_globals.console.info($rt_ustr(S(b)));}g.pJ=n;g.w7=d;g.xv=e;g.eh=i;g.dT=j;g.wY=l;g.l6=k;g.nA=h;g.rI=DG(i);g.yf=DG(g.dT);d=m*32.0|
0;n=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;b:{g.w4=d;switch(e){case 1:break;case 2:b=C(136);break b;default:b=C(137);break b;}b=C(138);}g.wR=b;return g;}
function ZH(){var a=this;B.call(a);a.ep=null;a.we=null;a.d0=null;a.f6=null;a.iv=null;a.jm=null;a.iF=null;a.mr=null;a.kd=null;a.cU=null;a.hk=null;a.oZ=0;}
function AS3(a){var b=new ZH();AMQ(b,a);return b;}
function AMQ(a,b){a.ep=Cx(O(D8,0));a.we=Cx(O(D8,0));a.d0=Cx(O(EU,0));a.f6=Cx(O(Ga,0));a.iv=Cx(O(Iv,0));a.jm=Cx(O(HD,0));a.iF=Cx(O(G_,0));a.mr=Cx(O(Bk,0));a.kd=Cx(O(Bk,0));a.cU=b;}
function TC(a,b){var c,d,e,f;C3(a.cU);c=(Cf(!b.tO?a.we:a.ep)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].cm(b);if(f)break;if(b.j2)break;e=e+1|0;}return f;}
function Q0(a,b,c){var d,e,f;C3(a.cU);d=(Cf(a.jm)).data;e=d.length;f=0;while(f<e){if(d[f].mj(b,c))return 1;f=f+1|0;}return 0;}
function VY(){B.call(this);this.nX=null;}
function AMO(a,b){var c;c=a.nX;if(TC(c.b$,Xs(c,b,1)))Dt(c,b);}
function VZ(){B.call(this);this.s1=null;}
function AM2(a,b){var c;c=a.s1;if(TC(c.b$,Xs(c,b,0)))Dt(c,b);}
function V0(){B.call(this);this.pt=null;}
function ALg(a,b){var c,d,e,f,g,h,i;c=a.pt;if(c.dx!==null){a:{b:{d=Em(c,b);e=c.b$;C3(e.cU);f=e.hk;if(f!==null)f.i(d);else{g=(Cf(e.d0)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].gf(d))break a;i=i+1|0;}}}}Dt(c,b);}}
function V1(){B.call(this);this.vV=null;}
function AKF(a,b){var c,d,e,f,g,h;c=a.vV;b.button;if(c.dx!==null)a:{d=Em(c,b);c=c.b$;e=b.button;C3(c.cU);if(c.hk===null){f=(Cf(c.d0)).data;g=f.length;h=0;while(h<g){b=f[h].f2(d,e);if(b!==null){c.hk=b;c.oZ=e;break a;}h=h+1|0;}}}}
function AC5(){B.call(this);this.r9=null;}
function ASQ(a){var b=new AC5();AOy(b,a);return b;}
function AOy(a,b){a.r9=b;}
function AK5(a,b){var c,d,e,f,g,h,i;c=a.r9;b.button;if(c.dx!==null){d=Em(c,b);e=c.b$;f=b.button;C3(e.cU);if(f==e.oZ&&e.hk!==null)e.hk=null;g=(Cf(e.d0)).data;h=g.length;i=0;a:{while(i<h){if(g[i].ge(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Dt(c,b);}}
function AC6(){B.call(this);this.oz=null;}
function ATm(a){var b=new AC6();AL5(b,a);return b;}
function AL5(a,b){a.oz=b;}
function ANy(a,b){var c,d,e,f,g,h,i,j,k;c=a.oz;if(c.dx!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.b$;f=Em(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;C3(e.cU);i=(Cf(e.f6)).data;j=i.length;k=0;b:{while(k<j){if(i[k].f7(f,d,h))break b;k=k+1|0;}}Dt(c,b);}}
function AC7(){B.call(this);this.v9=null;}
function ARL(a){var b=new AC7();AN2(b,a);return b;}
function AN2(a,b){a.v9=b;}
function AI1(a,b){var c,d,e,f,g,h,i,j;c=a.v9;if(c.dx!==null){d=Em(c,b);e=c.b$;f=b.button;g=b.detail;C3(e.cU);h=(Cf(e.d0)).data;i=h.length;j=0;a:{while(j<i){if(h[j].fM(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Dt(c,b);}}
function AC8(){B.call(this);this.si=null;}
function ARQ(a){var b=new AC8();APS(b,a);return b;}
function APS(a,b){a.si=b;}
function AQ_(a,b){var c,d,e,f,g,h,i;c=a.si;if(c.dx!==null){d=Em(c,b);e=c.b$;C3(e.cU);f=(Cf(e.iv)).data;g=f.length;h=0;a:{while(h<g){if(f[h].cm(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Dt(c,b);}}
function AC9(){B.call(this);this.oP=null;}
function ATu(a){var b=new AC9();AJX(b,a);return b;}
function AJX(a,b){a.oP=b;}
function AH8(a,b){var c,d,e;b=a.oP.b$;c=(Cf(b.kd)).data;d=c.length;e=0;while(e<d){c[e].s();e=e+1|0;}C3(b.cU);}
function AC$(){B.call(this);this.u5=null;}
function ASG(a){var b=new AC$();API(b,a);return b;}
function API(a,b){a.u5=b;}
function AOH(a,b){var c,d,e;b=a.u5.b$;c=(Cf(b.mr)).data;d=c.length;e=0;while(e<d){c[e].s();e=e+1|0;}C3(b.cU);}
function ADK(){B.call(this);this.ut=null;}
function ARx(a){var b=new ADK();AFi(b,a);return b;}
function AFi(a,b){a.ut=b;}
function AQK(a,b){var c;c=a.ut;if(c.dx!==null)Em(c,b);}
function ADL(){B.call(this);this.th=null;}
function ASc(a){var b=new ADL();ARo(b,a);return b;}
function ARo(a,b){a.th=b;}
function AKU(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.th;if(MT()===c.g4){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cf(c.b$.iF)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].ec();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.b$.cU;m=new Nx;m.vj=k;m.vk=l;g.getAsString(Bp(m,"accept"));Dt(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new R;V(l);L(L(L(L(l,C(139)),k),C(140)),g);$rt_globals.console.info($rt_ustr(S(l)));}e=e
+1|0;}}}
function ADM(){B.call(this);this.m1=null;}
function ATD(a){var b=new ADM();AL6(b,a);return b;}
function AL6(a,b){a.m1=b;}
function ALm(a,b){var c;c=a.m1;if(MT()===c.g4&&Q0(c.b$,Tv(c,b),0))Dt(c,b);}
function ADN(){B.call(this);this.vt=null;}
function ASu(a){var b=new ADN();ANx(b,a);return b;}
function ANx(a,b){a.vt=b;}
function ANc(a,b){var c;c=a.vt;if(MT()===c.g4&&Q0(c.b$,Tv(c,b),1))Dt(c,b);}
var TK=F(0);
var TX=F();
function Nl(a,b,c,d){var e,f,g,h;e=new Rx;e.j4=d;AUL=AUL+1|0;e.lP=b;e.kY=c;f=(Fg()).createElement("canvas");e.hH=f;g=b;f.width=g;f=e.hH;g=c;f.height=g;if(!d)g=e.hH.getContext("2d");else{f=e.hH;h=AFu();g=f.getContext("2d",h);}e.dg=g;f="#FFFFFF";g.fillStyle=f;return e;}
var TW=F();
function AJY(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Mi(){var a=this;B.call(a);a.jK=null;a.bh=null;a.i2=null;}
var IG=F();
var AUM=null;function I6(a,b,c){return b.jB(c);}
function AAU(){AUM=new IG;}
var DV=F(0);
var D8=F(0);
var Iv=F(0);
function Qq(){B.call(this);this.pz=null;}
function Bj(){var a=this;B.call(a);a.a=0;a.b=0;}
function Cg(a,b){var c=new Bj();Zw(c,a,b);return c;}
function Zw(a,b,c){a.a=b;a.b=c;}
function Cw(a,b){a.a=b.a;a.b=b.b;}
function Bg(a,b,c){a.a=b;a.b=c;}
function AJL(a,b){var c;a:{b:{if(a!==b){if(By(b)!==By(a))break b;if(!HS(a,b))break b;}c=1;break a;}c=0;}return c;}
function HS(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function V4(){var a=this;B.call(a);a.r1=0;a.r3=0;a.r0=0;a.rZ=0;}
var YT=F(0);
function Qj(){B.call(this);this.dO=null;}
function Lc(){var a=this;B.call(a);a.bs=null;a.yh=null;}
function ABp(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(141):C(142);g=$rt_str(b.getShaderInfoLog(e));h=new R;V(h);L(L(h,f),g);g=S(h);b.deleteShader(e);Ct(EX(),g);Ct(EH(),C(143));Ct(EH(),d);Ct(EH(),C(143));b=new Bt;Bn(b,g);K(b);}
function CJ(){var a=this;Lc.call(a);a.oO=null;a.qq=null;a.lJ=null;}
function AVT(a,b,c,d){var e=new CJ();Gy(e,a,b,c,d);return e;}
function Gy(a,b,c,d,e){var f,g,h,i,j,k;a.yh=e;f=ABp(b,35633,c);d=ABp(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bs=g;h=e.sO.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bs;k=c.ha;c=c.qA;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bs;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ADo(b,C(144));a.lJ=new Bj;c=a.bs;a.oO=b.getUniformLocation(c,"uResolution");c=a.bs;a.qq=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bt;c=new R;V(c);L(L(c,C(145)),d);Bn(b,S(c));K(b);}
function ZJ(a,b,c){var d,e,f;if(!HS(a.lJ,c)){Cw(a.lJ,c);d=a.oO;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function GR(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.qq;b.uniform4f(e,i,l,h,j);ZJ(a,b,f);}
function VF(){CJ.call(this);this.uW=null;}
function Ek(){CJ.call(this);this.r6=null;}
function ARI(a){var b=new Ek();AJ1(b,a);return b;}
function AVU(a,b){var c=new Ek();KQ(c,a,b);return c;}
function AVV(a,b,c){var d=new Ek();TE(d,a,b,c);return d;}
function AJ1(a,b){KQ(a,b,C(146));}
function KQ(a,b,c){TE(a,b,C(131),c);}
function TE(a,b,c,d){G8();Gy(a,b,c,d,AVR);c=a.bs;a.r6=b.getUniformLocation(c,"sDiffuse");}
function TQ(a,b,c){var d;d=a.r6;b.uniform1i(d,0);b.activeTexture(33984);c=c.eP;b.bindTexture(3553,c);}
var AAf=F(CJ);
function AST(a){var b=new AAf();AQa(b,a);return b;}
function AQa(a,b){G8();Gy(a,b,C(131),C(147),AVR);}
function AAA(){Ek.call(this);this.wH=null;}
function ATf(a){var b=new AAA();AMN(b,a);return b;}
function AMN(a,b){var c;KQ(a,b,C(148));c=a.bs;a.wH=b.getUniformLocation(c,"uContrast");}
function FE(){var a=this;Ek.call(a);a.pD=null;a.qO=null;a.sp=null;}
function AVW(a,b,c){var d=new FE();Xa(d,a,b,c);return d;}
function Xa(a,b,c,d){TE(a,b,c,d);c=a.bs;a.pD=b.getUniformLocation(c,"uTexTransform");c=a.bs;a.qO=b.getUniformLocation(c,"uColor");c=a.bs;a.sp=b.getUniformLocation(c,"uBgColor");}
function S_(a,b,c,d){Gg(b,a.qO,c);Gg(b,a.sp,d);}
function ME(a,b,c,d){var e,f,g,h,i,j;c=c.eG;e=c.a;f=c.b;g=d.bp;h=e;g=g/h;i=d.bG;j=f;i=i/j;h=d.bc/h;j=d.bZ/j;c=a.pD;b.uniform4f(c,g,i,h,j);}
function ABL(){FE.call(this);this.pA=null;}
function ASm(a){var b=new ABL();ANs(b,a);return b;}
function ANs(a,b){var c;Xa(a,b,C(149),C(150));c=a.bs;a.pA=b.getUniformLocation(c,"uContrast");}
var ADx=F(FE);
function ATx(a){var b=new ADx();AHv(b,a);return b;}
function AHv(a,b){Xa(a,b,C(149),C(151));}
function Zf(){var a=this;Ek.call(a);a.yW=null;a.yV=null;a.xx=null;}
function ATo(a){var b=new Zf();AHx(b,a);return b;}
function AHx(a,b){var c,d;KQ(a,b,C(152));c=a.bs;a.yW=b.getUniformLocation(c,"uColorB");d=a.bs;a.yV=b.getUniformLocation(d,"uColorF");d=a.bs;a.xx=b.getUniformLocation(d,"uContrast");}
function ABK(){var a=this;CJ.call(a);a.ov=null;a.mJ=null;a.mI=null;}
function AS_(a){var b=new ABK();AHz(b,a);return b;}
function AHz(a,b){var c;G8();Gy(a,b,C(131),C(153),AVR);c=a.bs;a.ov=b.getUniformLocation(c,"uColor");c=a.bs;a.mJ=b.getUniformLocation(c,"uPoints1");c=a.bs;a.mI=b.getUniformLocation(c,"uPoints2");}
function YP(){var a=this;CJ.call(a);a.np=null;a.ss=null;a.pH=null;}
function ATa(a){var b=new YP();AFM(b,a);return b;}
function AFM(a,b){var c;G8();Gy(a,b,C(131),C(154),AVR);c=a.bs;a.np=b.getUniformLocation(c,"uColor");c=a.bs;a.ss=b.getUniformLocation(c,"uBaseline");c=a.bs;a.pH=b.getUniformLocation(c,"uScaleHExp");}
function AB1(a,b,c,d,e){var f;f=a.ss;b.uniform2f(f,c,d);Gg(b,a.pH,e);}
var RV=F(0);
var ADS=F(0);
function Gg(b,c,d){var e,f,g,h;e=d.bp;f=d.bG;g=d.bc;h=d.bZ;b.uniform4f(c,e,f,g,h);}
function ADo(b,c){var d,e;d=b.getError();if(d){b=EX();e=new R;V(e);Bl(L(e,c),d);Ct(b,S(e));}}
function Qh(){var a=this;B.call(a);a.ow=null;a.oy=null;a.ox=null;}
function Qi(){var a=this;B.call(a);a.dM=null;a.gl=null;a.hP=null;a.ju=null;a.jl=null;a.lw=0;a.mk=0;}
function KZ(a,b){if(b!==null)a.dM.deleteBuffer(b);return null;}
function Cl(){var a=this;B.call(a);a.wP=null;a.gi=0;}
function C_(a,b,c){a.wP=b;a.gi=c;}
function Go(){var a=this;Cl.call(a);a.sO=null;a.mG=null;a.rO=null;a.kF=0;a.qd=0;a.td=0;}
var AVR=null;var AVX=null;function G8(){G8=Bm(Go);AJr();}
function AJr(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Go;c=O(DM,2);d=c.data;APZ();d[0]=AVY;d[1]=AVZ;G8();C_(b,C(155),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.l2.gi){case 0:f=f+l.eZ|0;h=h+1|0;break a;case 1:e=e+l.eZ|0;g=g+1|0;break a;default:}}i=i|1<<l.ha;k=k+1|0;}b.sO=c;b.kF=e;b.qd=f;b.td=i;c=O(DM,g);m=c.data;b.mG=c;c=O(DM,h);n=c.data;b.rO=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.l2.gi){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}AVR
=b;c=O(Go,1);c.data[0]=b;AVX=c;}
var LU=F(0);
var S$=F(0);
var T_=F(0);
var F1=F();
function IZ(){F1.call(this);this.wp=null;}
function Z5(){var a=this;IZ.call(a);a.x5=0;a.kS=0;a.iE=null;a.kg=null;a.tK=null;}
function ALA(a,b){var c=new Z5();APH(c,a,b);return c;}
function APH(a,b,c){a.wp=b;b=new R;V(b);a.iE=b;a.kg=B1(32);a.x5=c;AHY();a.tK=AV0;}
function Tf(a,b,c,d){var e,$$je;e=a.wp;if(e===null)a.kS=1;if(!(a.kS?0:1))return;a:{try{e.j$(b,c,d);break a;}catch($$e){$$je=E6($$e);if($$je instanceof TT){}else{throw $$e;}}a.kS=1;}}
function N1(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$$je;e=b.data;d=d-c|0;f=new Rg;g=e.length;d=c+d|0;Vt(f,g);f.cq=c;f.ef=d;f.uH=0;f.yY=0;f.rv=b;e=Eo(Z(16,Ba(g,1024)));d=e.data.length;h=new Wm;i=0+d|0;Vt(h,d);AJx();h.xF=AV1;h.qR=0;h.sW=e;h.cq=0;h.ef=i;h.xH=0;h.nh=0;j=a.tK;k=new Pk;b=Eo(1);l=b.data;l[0]=63;AP3();m=AV2;k.lO=m;k.k0=m;c=l.length;if(c&&c>=k.mH){k.wL=j;k.qy=b.gv();k.xZ=2.0;k.mH=4.0;k.pQ=B1(512);k.os=Eo(512);j=AV3;if(j===null){m=new BD;Bn(m,C(156));K(m);}k.lO=j;k.k0=j;while(k.iB!=3){k.iB=2;a:{while(true)
{try{j=Yy(k,f,h);}catch($$e){$$je=E6($$e);if($$je instanceof Bt){j=$$je;m=new Tw;m.lK=1;m.mA=1;m.rc=j;K(m);}else{throw $$e;}}if(j.hv?0:1){c=EK(f);if(c<=0)break a;j=KP(c);}else if(LC(j))break;m=!Wk(j)?k.lO:k.k0;b:{if(m!==AV3){if(m===AV4)break b;else break a;}c=EK(h);b=k.qy;d=b.data.length;if(c<d){j=AV5;break a;}Wn(h,b,0,d);}n=f.cq;c=j.hv!=2?0:1;if(!(!c&&!Wk(j)?0:1)){j=new D1;X(j);K(j);}Su(f,n+j.oB|0);}}n=LC(j);Tf(a,e,0,h.cq);NZ(h);if(!n){while(true){d=k.iB;if(d!=2&&d!=4){j=new Do;X(j);K(j);}j=AV6;if(j===j)k.iB
=3;n=LC(j);Tf(a,e,0,h.cq);NZ(h);if(!n)break;}return;}}j=new Do;X(j);K(j);}m=new BD;X1(m,C(157));K(m);}
function Ct(a,b){var c,d,e,f,g,h,i,j;BX(CZ(a.iE,b),10);b=a.iE;c=b.H;d=a.kg;if(c>d.data.length)d=B1(c);e=0;f=0;if(e>c){b=new BV;Bn(b,C(158));K(b);}while(e<c){g=d.data;h=f+1|0;i=b.M.data;j=e+1|0;g[f]=i[e];f=h;e=j;}N1(a,d,0,c);a.iE.H=0;}
function FQ(){F1.call(this);this.xP=null;}
function Xy(a){a.xP=Eo(1);}
var KS=F(FQ);
var AUy=null;function AJO(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AB5(){var b;b=new KS;Xy(b);AUy=b;}
function DM(){var a=this;Cl.call(a);a.qA=null;a.l2=null;a.eZ=0;a.pR=0;a.ha=0;}
var AVY=null;var AVZ=null;var AV7=null;function APZ(){APZ=Bm(DM);AIF();}
function ASC(a,b,c,d,e,f,g){var h=new DM();Vw(h,a,b,c,d,e,f,g);return h;}
function Vw(a,b,c,d,e,f,g,h){APZ();C_(a,b,c);a.qA=d;a.l2=e;a.eZ=f;a.pR=g;a.ha=h;}
function AIF(){var b;b=new DM;ALc();Vw(b,C(159),0,C(160),AV8,2,0,0);AVY=b;b=ASC(C(161),1,C(162),AV8,2,0,1);AVZ=b;AV7=G(DM,[AVY,b]);}
function IP(){var a=this;B.call(a);a.wA=null;a.xj=null;}
function ACi(b){var c,d;if(Eu(b))K(Z2(b));if(!ACk(I(b,0)))K(Z2(b));c=1;while(c<H(b)){a:{d=I(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ACk(d))break a;else K(Z2(b));}}c=c+1|0;}}
function ACk(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var LZ=F(IP);
var AV0=null;function AHY(){AHY=Bm(LZ);AHw();}
function AHw(){var b,c,d,e,f;b=new LZ;AHY();c=O(Bv,0);d=c.data;ACi(C(163));e=d.length;f=0;while(f<e){ACi(d[f]);f=f+1|0;}b.wA=C(163);b.xj=c.gv();AV0=b;}
var Gs=F(Cl);
var AV9=null;var AV8=null;var AV$=null;function ALc(){ALc=Bm(Gs);AG1();}
function AHq(a,b){var c=new Gs();ACz(c,a,b);return c;}
function ACz(a,b,c){ALc();C_(a,b,c);}
function AG1(){var b;AV9=AHq(C(164),0);b=AHq(C(165),1);AV8=b;AV$=G(Gs,[AV9,b]);}
var Kb=F(FQ);
var AUz=null;function AHG(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function ADW(){var b;b=new Kb;Xy(b);AUz=b;}
function ACq(){BD.call(this);this.wO=null;}
function Z2(a){var b=new ACq();APa(b,a);return b;}
function APa(a,b){X(a);a.wO=b;}
var U8=F(DQ);
var LX=F(0);
function WY(){B.call(this);this.qm=null;}
function AOb(a,b){a.qm.setPointerCapture(b.pointerId);}
function WZ(){B.call(this);this.o6=null;}
function AFL(a,b){a.o6.releasePointerCapture(b.pointerId);}
function Qb(){var a=this;B.call(a);a.cY=null;a.em=null;a.h8=null;a.h9=null;a.h5=null;a.h6=null;}
function ADE(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;h=c.dk;i=a.cY;BB(h,i.a,i.b,a.em,g.bE.fc);if(b!==null&&b.fD!==null){j=Cn(c,2.0);k=FI(b,EE(d),1);l=FI(b,Fl(d),1);m=FI(b,EE(e),0);n=FI(b,Fl(e),0);o=Ba(k,m);p=Z(l,n);k=BE(o,p);if(k<=0)Dj(h,1);while(o<=p){q=b.fD.data[o];if(q.j7){r=d.C;s=T(r,q.hu)-d.Z|0;t=s+T(q.mg,r)|0;l=e.C;u=T(l,q.ht)-e.Z|0;v=u+T(q.mf,l)|0;Bg(a.h8,a.cY.a,s);Bg(a.h5,a.cY.a,t);Bg(a.h9,a.cY.a+a.em.a|0,u);Bg(a.h6,a.cY.a+a.em.a|0,v);r=Z(Ba(s,u),a.cY.b);w=Ba(Z(t,
v),a.cY.b+a.em.b|0);VT(f,a.cY.a,r,a.em.a,w-r|0);Ee(f.gz,g.gF.gx);Ee(f.db,HX(g.du,g,q.j7));if(s==t){x=c.dm;Bg(x,a.cY.a-d.Q.a|0,j);if(u>=s){i=a.h5;Bg(i,i.a,i.b+j|0);r=s;}else{r=s-j|0;i=a.h8;Bg(i,i.a,i.b-j|0);}BB(h,d.Q.a,r,x,f.db);}if(u==v){x=c.dm;Bg(x,e.cg.a,j);if(s>=u){i=a.h6;Bg(i,i.a,i.b+j|0);}else{u=u-j|0;i=a.h9;Bg(i,i.a,i.b-j|0);}BB(h,a.cY.a+a.em.a|0,u,x,f.db);}i=f.cr;r=i.a;w=i.b;y=f.bo;z=a.h8;ba=a.h9;bb=a.h5;bc=a.h6;bd=f.db;Gf(h,h.gC);GR(h.gC,h.T,r,w,y,h.cV);i=h.gC;x=h.T;q=i.mJ;be=z.a;bf=z.b;bg=ba.a;bh=ba.b;x.uniform4f(q,
be,bf,bg,bh);i=i.mI;be=bb.a;bf=bb.b;bg=bc.a;bh=bc.b;x.uniform4f(i,be,bf,bg,bh);i=h.gC;Gg(h.T,i.ov,bd);Gb(h);}o=o+1|0;}if(k<=0)Dj(h,0);return;}}
function WT(){var a=this;B.call(a);a.cr=null;a.bo=null;a.db=null;a.gz=null;}
function AAY(){var a=new WT();ANu(a);return a;}
function ANu(a){a.cr=new Bj;a.bo=new Bj;a.db=new B4;a.gz=new B4;}
function VT(a,b,c,d,e){Bg(a.cr,b,c);Bg(a.bo,d,e);}
function Tc(a){Bg(a.bo,0,0);}
function JP(a){var b;b=a.bo;return T(b.a,b.b)?0:1;}
function HA(a,b){return EW(b,a.cr,a.bo);}
function AAy(){var a=this;B.call(a);a.d_=null;a.dK=null;a.c2=null;a.bS=null;a.fI=null;}
function AOD(a){var b=new AAy();AM5(b,a);return b;}
function AM5(a,b){var c;c=new WC;c.de=BA();a.dK=c;a.d_=b;c=new Vq;c.cc=BA();c.jr=AV_;c.cH=b;BY(b.kj,c);a.bS=c;}
function MK(a,b){var c,d;a.fI=b;c=a.c2;if(c!==null)c.fV=b.fG;c=a.bS;d=b.fG;c.iN=b.u6;c.lY=d;b=BP(c.cc);while(BQ(b)){QC(BS(b),c.lY);}}
function Rr(a){var b,c,d;b=BP(a.bS.cc);while(BQ(b)){Lh(BS(b));}b=a.dK;c=0;while(true){d=b.de;if(c>=d.k)break;(Bs(d,c)).N.gQ=1;c=c+1|0;}}
function Xp(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.dK;c=a.d_.dk;d=b.de.k-1|0;while(d>=0){e=Bs(b.de,d);e.P.kt(c);f=e.N;g=e.fV.hN;if(!J1(f)){if(!VQ(f)&&!(!f.gQ&&f.cR!==null)){f.gQ=0;UP(f);h=f.eD;i=(h.eh+h.dT+5.0)/10.0;j=Cn(f.e2,f.i9);h=c.cZ;k=f.eD;l=f.gK;m=i*2.0;CO(h,k);n=j+Kf(h,l,m)|0;f.h7=n;n=Fv(0,n,f.p.a);if(n){h=Fa(c,n,f.p.b,f.e2.cE);CO(h,f.eD);k=f.gK;m=j;i=m+i;l=f.eD;o=l.eh;Ev(h,k,i,m+o-(o+l.dT)/16.0);k=f.cR;if(k===null){k=GV(c);f.cR=k;}Ey(k,h);It(h);Cc(f.hX,0.0,0.0,Ci(f.cR),K_(f.cR));}}h=g.su;k=f.cR;if
(k===null)Pu(f,c,0,f.p.a,h);else{j=Ci(k);k=g.uV;if(f.e2.cE){g=f.G;n=g.a;p=g.b;g=f.cR;Ew(c,n,p,g.eG,f.hX,g,k,h);}else{g=f.G;n=g.a;p=g.b;g=f.cR;Es(c,n,p,g.eG,f.hX,g,k,h,0.0);}n=f.p.a;if(j<n)Pu(f,c,j,n-j|0,h);}}Dj(c,1);n=Cn(e.bm,2.0);q=J1(e.N);h=e.bm;f=h.dm;h=h.uu;p=q?0:e.N.p.b;k=e.P.p;Bg(h,k.a,k.b+p|0);Zx(c,h,!q?e.N.G:e.P.G,e.fV.hN.k7, -n|0,f);h=e.P;ABv(c,h.p,h.G,n,p,O3(e.fV.iC,e.bm.b1),e.fV.iC.lW,f);d=d+(-1)|0;}b=a.bS;if(!DI(b.cc)){Dj(b.cH.dk,1);j=0;while(true){c=b.cc;if(j>=c.k)break;ADa(Bs(c,j),b.cH);j=j+1|
0;}}}
function AMX(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.dK;d=0;a:{while(true){e=c.de;if(d>=e.k)break;b:{f=Bs(e,d);e=b.n;if(Dm(f.N,e))g=DF(f.bm.dh,null);else{h=Cn(f.bm,7.0);i=Cn(f.bm,25.0);if(N6(f,e.a,h)){g=NB(f,e.a,i);if(O$(f,e.b,h)){g=DF(f.bm.dh,Lo(g,C(166)));break b;}if(Nu(f,e.b,h)){g=DF(f.bm.dh,Lo( -g|0,C(166)));break b;}}if(VX(f,e.b,h)){g=Wq(f,e.b,i);if(Xr(f,e.a,h)){g=DF(f.bm.dh,Lo(g,C(167)));break b;}if(ML(f,e.a,h)){g=DF(f.bm.dh,Lo( -g|0,C(167)));break b;}}g=0;}}c:{d:{if(!g){if(!Dm(f.P,b.n))break d;if(!f.P.gf(b)
&&!DF(f.bm.dh,null))break d;}g=1;break c;}g=0;}if(g){g=1;break a;}d=d+1|0;}g=0;}e:{if(!g){c=a.bS;g=0;j=c.cc.k-1|0;f:{while(j>=0){e=Bs(c.cc,j);k=b.n;f=c.cH.dh;g=HA(e.b7,k);d=!g?(-1):Nv(e,k);h=e.il;if(h!=d){if(h>=0){l=e.cf.data[h];l.gD=0;m=e.wz;if(m!==null)m.zl(k,h,l);}if(d>=0){k=e.cf.data[d];l=e.pB;if(l!==null){m=l.pm;n=l.pn;l=l.po;Tq(m,n);if(l!==null)k.ke.s();if(Uy(k)){if(k.ll===null)Od(m,Z_(k,n),k.iG,n);else Wl(m,Z_(k,n),k.iG,n,k.ll);}}k.gD=1;}e.il=d;}g=g&&Fz(f)?1:0;if(g)break f;j=j+(-1)|0;}}if(!g){g=0;break e;}}g
=1;}return g;}
function AP9(a,b,c,d){var e,f,g,h,i;e=a.dK;f=0;a:{while(true){g=e.de;if(f>=g.k)break;b:{c:{h=Bs(g,f);if(!Dm(h.N,b.n)){if(!Dm(h.P,b.n))break c;if(!h.P.fM(b,c,d))break c;}i=1;break b;}i=0;}if(i){c=1;break a;}f=f+1|0;}c=0;}d:{if(!c){g=a.bS.cc;d=g.k-1|0;i=1;if(d<0)i=0;else{g=Bs(g,d);c=Nv(g,b.n);if(c>=0){b=g.cf.data[c];if(!Uy(b))b.ke.s();}}if(!i){c=0;break d;}}c=1;}return c;}
function ANZ(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.bS;e=null;f=d.cc.k-1|0;a:{while(f>=0){e=Bs(d.cc,f);g=b.n;h=HA(e.b7,g);if(!h&&!JP(e.b7)){e=e.ua;if(e!==null)Dx(e.sX);}e=!h?null:AWa;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;e=a.dK;h=0;b:{while(true){g=e.de;if(h>=g.k){g=null;break b;}c:{i=Bs(g,h);if(!c){d:{g=b.n;if(!J1(i.N)&&Dm(i.N,g)){d=i.P.G;j=d.a;k=g.a;l=j-k|0;j=d.b;f=g.b;j=j-f|0;g=i.N.G;m=g.a-k|0;f=g.b-f|0;d=new Bj;g=new ND;g.nM=i;g.nN=m;g.nO=f;g.nP=d;g.nI=l;g.nK=j;}else{j=Cn(i.bm,7.0);f=Cn(i.bm,
25.0);if(N6(i,g.a,j)){m=NB(i,g.a,f);if(O$(i,g.b,j)){g=H3(i,g,m,(-1));break d;}if(Nu(i,g.b,j)){g=H3(i,g,m,1);break d;}}if(VX(i,g.b,j)){f=Wq(i,g.b,f);if(Xr(i,g.a,j)){g=H3(i,g,(-1),f);break d;}if(ML(i,g.a,j)){g=H3(i,g,1,f);break d;}}g=null;}}if(g!==null)break c;}g=Dm(i.N,b.n)?AWa:i.P.f2(b,c);i=i.P;if(i===null)g=null;else if(g===null)g=!Dm(i,b.n)?null:AWa;}if(g!==null)break;h=h+1|0;}}return g;}
function AKq(a,b,c){var d,e,f,g,h;d=a.dK;e=0;a:{while(true){f=d.de;if(e>=f.k)break;b:{c:{g=Bs(f,e);if(!Dm(g.N,b.n)){if(!Dm(g.P,b.n))break c;if(!g.P.ge(b,c))break c;}h=1;break b;}h=0;}if(h){c=1;break a;}e=e+1|0;}c=0;}return !c&&!FF(a.bS)?0:1;}
function Q2(a,b,c,d,e){Ql(a,b,d,WH(c,null,d),e);}
function Ri(a,b,c,d,e){Ql(a,b,d,WH(null,c,d),e);}
function Ql(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(a.c2!==null)S5(a);f=new Qs;g=a.d_;h=new Qf;h.mX=a;h.mY=c;Le(f);f.cN=new Bj;f.bF=new Bj;f.dw=AAY();f.gt=new Bj;f.bU=AWb;f.dV=O(H2,0);f.ds=0;f.d6=0;f.fA=0;f.eY=0;f.eM=0;f.dW=AFg(0);f.g1=HL();f.bY=g;f.im=h;f.v0=h;O6(f);Ty(f);f.bU=d;c=a.fI;g=c.fG;c=c.vL;f.qW=g;f.t9=c;f.dN=null;f.dW=null;f.ev=0;Ty(f);h=new Uj;i=a.d_;h.P=ARt();h.bm=i;c=new Va;Le(c);c.hX=new B4;c.e2=i;h.N=c;a.c2=h;i=new PH;c=a.d_.dh;Le(i);g=new Ob;g.qU=i;i.o$=g;g=new Oa;g.r5=i;i.tV=g;i.uU=10.0;i.bq=f;i.mv
=c;f.gu=i;c=a.fI.fG;g=c.pk;h=c.n8;i.vI=g;i.vE=h;c=i.cP;if(c!==null)Gv(c,g,h);c=i.cX;if(c!==null)Gv(c,g,h);j=a.c2;c=j.P;g=c.G;h=c.p;c=C7(c,i);j.P=c;c.lC(g,h,j.bm.b1);g=a.c2;h=new R;V(h);L(L(h,C(168)),e);i=S(h);c=a.fI.us;e=g.N;k=BI(e.h0,c)?0:1;l=BI(e.gK,i)?0:1;m=4.0===e.i9?0:1;if(k){e.h0=c;e.eD=null;Pa(e,0);}e.gQ=!k&&!l&&!m?0:1;e.gK=i;e.i9=4.0;e.h7=0;Ng(g);c=a.c2;c.fV=a.fI.fG;Ry(a.dK.de,0,c);c=a.c2;k=(c.N.p.b+Cn(c.bm,2.0)|0)+Cn(a.d_,2.0)|0;l=(f.ds+f.d6|0)+f.fA|0;m=Cn(f.bY,5.0);h=Cg(Fv(m,b.a,f.bY.cI.a-l|0),Fv(k,
b.b,f.bY.cI.b-f.cN.b|0));Pp(f);O9(f);k=(f.ds+f.d6|0)+f.fA|0;b=f.bY;l=(b.cI.a-h.a|0)-Cn(b,5.0)|0;b=f.bY;m=(b.cI.b-h.b|0)-Cn(b,5.0)|0;g=Cg(Ba(k,l),Ba(f.cN.b,m));KG(a.c2,h,g);Fr(a.d_,f);}
function S5(a){var b,c;b=a.dK;c=a.c2;Vm(b.de,c);b=a.c2;c=b.N;c.cR=C7(c.cR,null);b.P=C7(b.P,null);a.c2=null;}
function Ke(a,b,c){var d,e,f,g,h;Dx(a.bS);d=a.bS;e=O(DO,1);f=e.data;g=new DO;BK(d);h=new Mu;h.wl=d;X3(g,h,C(169));f[0]=g;P1(d,b,GT(e),QK(a,c));}
function QK(a,b){var c;c=new Qm;c.nr=a;c.ns=b;return c;}
function I5(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;if(!FF(a.bS)){h=a.bS;i=b.n;b=new S7;b.eO=a;b.be=c;b.oG=g;b.hM=e;b.mu=f;b.jz=d;j=Ta();e=b.be.c;d=Dw(e);e=FL(e);f=b.be.ct;if(QD(f,d,e)!==null){k=new RQ;k.nv=b;k.nw=i;DH(j,C(170),k);}if(LL(f,d,e)!==null){k=new RR;k.q1=b;k.q2=i;DH(j,C(171),k);}if(TN(f,d,e)!==null){e=new RP;e.m5=b;e.m6=i;DH(j,C(172),e);}e=new RO;e.uL=b;e.uK=i;DH(j,C(173),e);F9(b);if(Ld()){if(!b.be.dv){e=new QY;e.ve=b;DH(j,C(174),e);}e=new QZ;e.px=b;DH(j,C(175),e);if(!b.be.dv){F9(b);if(Ld()&&("readText" in $rt_globals.navigator.clipboard
?1:0)?1:0){e=new QX;e.sM=b;DH(j,C(176),e);}}}e=Ta();l=O(Bv,4).data;l[0]=C(33);l[1]=C(32);l[2]=C(31);l[3]=C(29);m=l.length;n=0;while(n<m){f=l[n];g=new OW;g.nt=b;g.nu=f;DH(e,f,g);n=n+1|0;}Fk(j,C(177),HI(e));d=Ta();l=O(DO,3);o=l.data;g=b.jz;BK(g);p=new M$;p.o9=g;o[0]=CB(C(178),p);g=b.jz;BK(g);p=new M_;p.qb=g;o[1]=CB(C(179),p);g=b.jz;BK(g);p=new M9;p.v3=g;o[2]=CB(C(180),p);KJ(d,C(181),GT(l),AWc);l=O(DO,2);o=l.data;g=b.hM;BK(g);p=new V_;p.qQ=g;o[0]=CB(C(182),p);g=b.hM;BK(g);p=new V$;p.uj=g;o[1]=CB(C(183),p);Fk(d,
C(184),GT(l));g=new Rk;g.tm=b;KJ(d,C(185),g,AWc);if(b.be.bM.dk.lr){l=O(DO,2);o=l.data;g=new Sq;g.oL=b;o[0]=CB(C(186),g);f=new Sr;f.pX=b;o[1]=CB(C(187),f);Fk(d,C(188),GT(l));}Fk(j,C(189),HI(d));d=Ta();Fk(d,C(190),AAg(b));f=new PR;f.v6=b;DH(d,C(191),f);Fk(j,C(192),HI(d));P1(h,i,HI(j),QK(a,c));}}
function AOj(a,b,c,d){var e,f,g,h;e=a.dK;f=0;a:{while(true){g=e.de;if(f>=g.k)break;if((Bs(g,f)).P.f7(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function Ze(b){var c;c=new W$;c.mS=b;return c;}
var Ho=F(0);
function Uu(){B.call(this);this.u_=null;}
function AKc(a,b){var c;c=a.u_;Ve(c,c.w,c.v);}
function Uv(){B.call(this);this.q9=null;}
function AFb(a,b){var c;c=a.q9;Ve(c,c.v,c.w);}
function Uw(){B.call(this);this.nz=null;}
function AKp(a,b){XE(a.nz,b);}
function Uq(){B.call(this);this.ue=null;}
function ALi(a,b){XE(a.ue,b);}
function Ur(){B.call(this);this.xy=null;}
function APQ(a,b){return b.bO!=121?0:1;}
function JZ(){var a=this;B.call(a);a.nU=null;a.qp=null;a.pE=null;}
function AWd(a,b){var c=new JZ();MQ(c,a,b);return c;}
function MQ(a,b,c){var d;d=null;a.nU=b.i2;a.qp=d;a.pE=c;}
function AH4(a,b){var c,d,e,f;if(b.ck&&b.bO==79){c=a.qp;if(c!==null&&b.bz){if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADp(c,1);else{d=new Wb;b=$rt_globals.window.showDirectoryPicker();e=new Wa;e.p3=c;e.p4=d;b.then(Bp(e,"f"),Bp(d,"f"));}}else VP(a.nU,a.pE);f=1;}else f=0;return f;}
function Us(){B.call(this);this.m7=null;}
function AOI(a,b){var c,d;c=a.m7;d=DK(c.bf,c.w)?c.w:!DK(c.bf,c.v)?null:c.v;if(d!==null){ID(d,b);c.fu=null;}}
function Ut(){B.call(this);this.sQ=null;}
function AGX(a,b){var c,d,e,f;b=b;c=a.sQ;if(DK(c.bf,c.w)){d=c.dE;e=c.w;f=new M6;f.r7=c;I5(d,b,e,c,c,c,f);}if(DK(c.bf,c.v)){d=c.dE;e=c.v;f=new M3;f.q0=c;I5(d,b,e,c,c,c,f);}return 1;}
function GD(){var a=this;B.call(a);a.vy=0;a.cq=0;a.ef=0;a.i1=0;}
function Vt(a,b){a.i1=(-1);a.vy=b;a.ef=b;}
function EK(a){return a.ef-a.cq|0;}
function Fq(a){return a.cq>=a.ef?0:1;}
var Sg=F(0);
var KE=F(GD);
function Su(a,b){var c,d,e;if(b>=0&&b<=a.ef){a.cq=b;if(b<a.i1)a.i1=0;return a;}c=new BD;d=a.ef;e=new R;V(e);BX(Bl(L(Bl(L(e,C(193)),b),C(194)),d),93);Bn(c,S(e));K(c);}
function Js(){var a=this;GD.call(a);a.qR=0;a.sW=null;a.xF=null;}
function Wn(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.nh){e=new Xj;X(e);K(e);}if(EK(a)<d){e=new QV;X(e);K(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BV;j=new R;V(j);Bl(L(Bl(L(j,C(195)),h),C(196)),g);Bn(i,S(j));K(i);}if(d<0){e=new BV;i=new R;V(i);L(Bl(L(i,C(197)),d),C(198));Bn(e,S(i));K(e);}h=a.cq;k=h+a.qR|0;l=0;while(l<d){b=a.sW.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.cq=h+d|0;return a;}}b=b.data;e=new BV;d=b.length;i=new R;V(i);BX(Bl(L(Bl(L(i,C(199)),c),C(194)),d),41);Bn(e,
S(i));K(e);}
function NZ(a){a.cq=0;a.ef=a.vy;a.i1=(-1);return a;}
function Hg(){B.call(this);this.yz=null;}
var AV4=null;var AV3=null;var AV2=null;function AP3(){AP3=Bm(Hg);AKX();}
function ADk(a){var b=new Hg();ACg(b,a);return b;}
function ACg(a,b){AP3();a.yz=b;}
function AKX(){AV4=ADk(C(200));AV3=ADk(C(201));AV2=ADk(C(202));}
function Px(){B.call(this);this.w$=null;}
function AFC(a,b){return b.bO!=121?0:1;}
function Pv(){B.call(this);this.vi=null;}
function AIc(a,b){ID(a.vi,b);}
function Pw(){B.call(this);this.pf=null;}
function APf(a,b,c){return Gu(a.pf,b,c);}
function NS(){B.call(this);this.qc=null;}
function AM4(a){var b,c;b=a.qc.cp;BK(b);c=new NX;c.n0=b;return c;}
function NT(){B.call(this);this.v5=null;}
function AJW(a,b,c,d){return Jm(a.v5.cp,c,d);}
function NQ(){B.call(this);this.nF=null;}
function AKG(a,b){var c,d,e,f;b=b;c=a.nF;if(DK(c.bf,c.cp)){d=c.fb;e=c.cp;f=new SH;f.x1=c;I5(d,b,e,c,e,c,f);}return 1;}
var AAK=F();
var YM=F(0);
function Jv(b,c,d,e,f){Cc(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function T0(){var a=this;B.call(a);a.dk=null;a.gO=null;a.dh=null;a.cI=null;a.b1=0.0;a.cE=0;a.d1=null;a.kj=null;a.dm=null;a.uu=null;a.wv=null;a.ww=null;}
function I9(a){var b;b=a.d1;if(b!==null)b.tq();}
function JC(a){var b;b=a.d1;if(b!==null)b.wh();}
function NP(a,b){var c;c=a.gO.dB!==(Fg()).activeElement?0:1;if(c)JC(a);a.d1=b;if(c)I9(a);}
function Fr(a,b){JC(a);a.d1=b;I9(a);}
function DK(a,b){return b!==a.d1?0:1;}
function LN(a){return a.dk.cZ;}
function In(a,b){return Gt(a.dk,b.jq,Co(b.hO,a.b1),400,0);}
function Cn(a,b){return Co(b,a.b1);}
function Wi(a,b){if(a.cE==b)return 0;a.cE=b;I_(a.gO);return 1;}
var R0=F();
function AIG(a,b){var c,d,e;c=b.ck;d=c&&!b.bz&&!b.cQ&&!b.iQ?1:0;a:{if(d){d=b.bO;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bz&&!c&&!b.cQ&&!b.iQ?1:0;d=d&&b.bO==46?1:0;}b:{if(!d){e=b.bO;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.j2=1;}return 0;}
function RZ(){B.call(this);this.oH=null;}
function AGb(a,b){var c;c=a.oH.d1;return c!==null&&c.km(b)?1:0;}
function B4(){var a=this;B.call(a);a.bp=0.0;a.bG=0.0;a.bc=0.0;a.bZ=0.0;}
function Cc(a,b,c,d,e){a.bp=b;a.bG=c;a.bc=d;a.bZ=e;}
function Ee(a,b){a.bp=b.bp;a.bG=b.bG;a.bc=b.bc;a.bZ=b.bZ;return a;}
function AQ6(a,b){if(a===b)return 1;return b!==null&&By(a)===By(b)&&JY(a,b)?1:0;}
function JY(a,b){return b.bp===a.bp&&b.bG===a.bG&&b.bc===a.bc&&b.bZ===a.bZ?1:0;}
var Ii=F(0);
function WC(){B.call(this);this.de=null;}
function Vq(){var a=this;B.call(a);a.cH=null;a.cc=null;a.iN=null;a.ja=null;a.lY=null;a.jr=null;}
function P1(a,b,c,d){var e,f;e=a.cH;f=e.cI;if(T(f.a,f.b)&&e.b1!==0.0){if(a.iN!==null&&!FF(a)){a.jr=d;a.ja=In(a.cH,a.iN);e=Od(a,b,c,null);b=new Vj;b.sX=a;e.ua=b;Fr(a.cH,a);return;}b=new BD;X(b);K(b);}c=new Do;Bn(c,C(203));K(c);}
function Dx(a){var b;if(FF(a)){b=a.cH;if(b.d1===a)b.d1=null;Tq(a,null);a.jr.s();a.jr=AV_;}}
function Wl(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new SQ;f.b7=AAY();f.fp=new Bj;f.f4=new Bj;f.cf=AWe;f.il=(-1);f.iU=1;f.fY=1;c=c.ec();Lh(f);f.cf=c;QC(f,a.lY);PU(f,a.ja,a.cH);if(d===null)g=b.a;else{g=b.a;g=a.cH.cI.a<((g+(ET(d)).a|0)+(ET(f)).a|0)?g-(ET(f)).a|0:(g+(ET(d)).a|0)-d.eX|0;}h=b.b;b=a.cH.cI;i=Z(0,Ba(g,b.a-(ET(f)).a|0));g=Z(0,Ba(h,b.b-(ET(f)).b|0));Bg(f.b7.cr,i,g);j=f.cC+f.eX|0;k=f.cf.data;h=k.length;l=0;m=j;while(l<h){c=k[l];b=c.dY;b.a=i+j|0;b.b=g+m|0;if(!f.fY){if(!c.dj.a)Yj();j=j+(c.dj.a+f.cC|0)|0;}else{if
(!c.dj.b)Yj();m=m+(c.dj.b+f.cC|0)|0;}l=l+1|0;}b=new WI;b.pm=a;b.pn=f;b.po=e;f.pB=b;Bw(a.cc,f);return f;}
function Od(a,b,c,d){return Wl(a,b,c,d,null);}
function AKL(a,b){var c;if(!FF(a))return 0;a:{switch(b.bO){case 27:Dx(a);c=1;break a;default:}c=0;}return c;}
function Z_(b,c){var d,e,f;d=b.dY;e=c.cC;f=c.eX;return Cg((d.a-(e*3|0)|0)-f|0,(d.b-e|0)-f|0);}
function Tq(a,b){var c,d;c=a.cc.k-1|0;a:{while(true){if(c<0)break a;d=Bs(a.cc,c);if(b===d)break;Fm(a.cc,c);d.e0=C7(d.e0,null);Bg(d.fp,0,0);d.cf=AWe;d.il=(-1);Tc(d.b7);c=c+(-1)|0;}}}
function FF(a){return a.cc.k<=0?0:1;}
function PC(){var a=this;B.call(a);a.d$=null;a.j_=0.0;a.g3=0.0;a.fT=0;}
function Wu(a){return a.d$.bo.b;}
function S3(a){return a.d$.bo.a;}
function ACd(a,b,c){var d,e,f;if(a.fT){d=a.d$;e=c.a;f=c.b;c=d.cr;BB(b,c.a+e|0,c.b+f|0,d.bo,d.db);}}
function KB(){var a=this;B.call(a);a.mi=null;a.wR=null;a.w0=0.0;a.pJ=0;a.w7=0;a.xv=0;a.rI=0;a.yf=0;a.eh=0.0;a.dT=0.0;a.wY=0.0;a.l6=0.0;a.w4=0;a.nA=null;}
function Fy(a){return DG(a.eh+a.dT);}
function PN(a,b){return DG((a.eh+a.dT)*b);}
function EZ(){var a=this;B.call(a);a.bR=0;a.c8=null;a.ew=null;a.bD=null;a.dC=0;a.c_=0;}
var AWf=0;var AU0=0;function XQ(a,b,c,d,e,f,g){var h,i,j,k,l;h=a.bD;i=h===b&&!h.gG?0:1;if(i){a.bD=b;J2(b,d.cZ,a.c8.kq);}h=a.bD;j=h===null?0:EC(h)<f?H$(EC(a.bD),1024):H$(f,1024)+1|0;k=j<=a.dC?0:1;if(k)a.dC=j;if(!(!i&&!k)){if(AWf){l=b.fm;$rt_globals.console.info("fMeasure"+l.data);AWf=0;}if(!AU0){h=c.dg;b="alphabetic";h.textBaseline=b;}else{b=c.dg;h="top";b.textBaseline=h;}a.c_=g/1024|0;while(true){b=a.ew;if(b.k>=a.dC)break;Bw(b,GV(d));}f=0;while(f<a.dC){Ib(a,c,e,a.c_+f|0);f=f+1|0;}a.bD.gG=0;}if(!DI(a.ew)&&g<=
EC(a.bD)){j=g/1024|0;f=a.c_;if(j!=f){f=j-f|0;if(f<0)f= -f|0;if(f>=a.dC){f=0;while(f<a.dC){Ib(a,c,e,j+f|0);f=f+1|0;}a.c_=j;}else{while(true){g=a.c_;if(g>=j)break;Ib(a,c,e,g+a.dC|0);a.c_=a.c_+1|0;}while(true){g=a.c_;if(g<=j)break;Ib(a,c,e,g-1|0);a.c_=a.c_-1|0;}}}}}
function Ki(b,c){return (c-Fy(b)|0)/2|0;}
function MM(b,c){return Ki(b,c)+b.rI|0;}
function Ib(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;Fw(b);e=a.bD.fm;f=d*1024|0;g=O2(a,f);if(g>=a.bD.l.data.length)return;h=!g?0.0:e.data[g-1|0];i=f;j=h-i+a.bR;k=a.c8.kq;a:{while(true){l=a.bD;if(g>=l.l.data.length)break a;m=k.data;n=KD(l,g);l=m[IQ(n)];o=!AU0?MM(l,c):Ki(l,c);m=e.data;CO(b,l);Ev(b,n.q,j,o);j=m[g]-i+a.bR;if(j>1024.0)break;g=g+1|0;}}Ey(Bs(a.ew,d%a.dC|0),b);}
function Y5(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq;if(DI(a.ew))return;if(!a.dC)return;if(g>EC(a.bD))return;o=a.bD;p=o.ed;q=o.l;r=g/1024|0;s=O2(a,g);t= -a.bR|0;u=f;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=e)break;y=p.data;o=Bs(a.ew,r%a.dC|0);z=v[s];ba=y[s]+a.bR|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=Ba(be,ba)-g|0;if(bc&&x)bf=bf+a.bR|0;if((t+bf|0)>e)bf=e-t|0;bg=i!==null?0:1;b:{if(!bg){bh
=!x?a.bR:2*a.bR|0;bi=i.a;w=i.b;if(!(bi<w&&g<=w&&(g+bf|0)>(bi+bh|0)?0:1)){bj=0;break b;}}bj=1;}c:{if(!bg){bk=!x?a.bR:2*a.bR|0;if(g>=i.a&&(g+bf|0)<=(i.b+bk|0)?1:0){bl=1;break c;}}bl=0;}bm=null;if(l&&!m)bm=h.bE.ia;if(z===j)bm=h.bE.oW;bn=BP(k);d:{while(BQ(bn)){if(BI(BS(bn),z)){bi=1;break d;}}bi=0;}if(bi)bm=h.bE.v$;if(n!==null){v=n.li;if(v===null)bh=0;else{v=v.data;bh=s>=v.length?0:v[s];}bm=XH(h.du,h,bh,n.fK);}if(!bl&&!bj){i.b=Ba(i.b,EC(a.bD));AA2(a,d,t+c|0,b,f,h,o,z,bf,g>=i.a?bf:(Ba(ba,be)-i.a|0)-(!x?a.bR:0)|0,
(g+bf|0)<=(i.b+(!x?a.bR:2*a.bR|0)|0)?0:(Ba(ba,be)-i.b|0)-(!x?a.bR:0)|0,g-bb|0,bm);}else{Cc(a.c8.jp,g-bb|0,0.0,bf,u);Bg(a.c8.gn,bf,f);Hd(a,d,t+c|0,b,z,o,h,bm,bl);}if((z.bH&12)>0){bi=t+c|0;Dj(d,1);o=a.c8;bo=o.ko;bo.a=bf;w=b+o.vv|0;bk=w-o.vJ|0;bp=o.sG;bq=w+bp;bm=o.ho;UE();bn=AWg.hR.ib;Gf(d,d.hz);GR(d.hz,d.T,bi,bk,bo,d.cV);AB1(d.hz,d.T,bp,bq,bm);o=d.hz;Gg(d.T,o.np,bn);Gb(d);Dj(d,0);}g=g+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function AA2(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s;n=a.c8.jp;o=l;p=i-j|0;q=p;r=e;Cc(n,o,0.0,q,r);Bg(a.c8.gn,p,e);Hd(a,b,c,d,h,g,f,m,0);l=l+i|0;Cc(n,l-k|0,0.0,k,r);Bg(a.c8.gn,k,e);c=c+i|0;Hd(a,b,c-k|0,d,h,g,f,m,0);s=l-j|0;i=j-k|0;Cc(n,s,0.0,i,r);Bg(a.c8.gn,i,e);Hd(a,b,c-j|0,d,h,g,f,m,1);}
function Hd(a,b,c,d,e,f,g,h,i){var j,k,l,m,n;j=a.c8;k=j.gn;if(k.a&&k.b){l=j.jp;if(l.bZ!==0.0&&l.bc!==0.0){m=g.ta.data[e.bX];if(i)n=g.bE.mm;else{n=m.oM;if(n===null)n=g.bE.fc;if(h!==null)n=h;}if(j.mo)Ew(b,c,d,k,l,f,m.ib,n);else Es(b,c,d,k,l,f,m.ib,n,j.lQ);return;}return;}}
function O2(a,b){var c,d,e,f,g,h,i;c=a.bD;d=c.fm;e=0;f=c.l.data.length;g=b;b=BE(e,f);if(b>0){c=new BD;X(c);K(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BE(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function W5(a){a.bD=null;DY(a.ew,new Tt);FJ(a.ew);}
function Zb(a,b,c,d,e,f,g,h,i){var j,k;j=EC(a.bD);if(j)j=j+a.bR|0;if(!j)j=j-a.bR|0;k=Z( -a.bR|0,j-g|0);if(k>=h)return;Bg(f,h-k|0,e);BB(b,c+k|0,d,f,i);}
function Zg(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a:{h=c.data;i=O(EZ,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=BG(g,e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.bD===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}c=i.data;e=0;f=c.length;while(e<f){if(c[e]===null){if(j>=k)p=null;else{b=j+1|0;p=h[j];j=b;}while(j<k&&p===null){b=j+1|0;p=h[j];j=b;}if(p!==null){c[e]=p;h[j-1|0]=null;}else{o=new EZ;o.bR=3;o.ew=BA();o.c_=0;o.c8=d;c[e]=o;}}e=e+1|0;}while(j<k){p=h[j];if(p!==null)W5(p);j=j+1|0;}return i;}
function AA5(){AU0=0;}
function ADt(){var a=this;B.call(a);a.eT=null;a.cM=null;a.dZ=null;a.ek=null;a.hU=null;a.hV=null;}
function UV(){var a=new ADt();AJw(a);return a;}
function AJw(a){a.eT=new Bj;a.cM=new Bj;a.dZ=new Bj;a.ek=new Bj;a.hU=new B4;a.hV=new B4;}
function Q5(a){var b;b=a.cM;return !T(b.a,b.b)?0:1;}
function Hn(a,b){return EW(b,a.dZ,a.ek);}
function HQ(a,b,c,d){var e,f,g,h,i;e=Hn(a,b);f=EW(b,a.eT,a.cM);if(!e&&!f)return null;if(!f){if(!d)c.i(VW(a,b.a-a.dZ.a|0));else c.i(Py(a,b.b-a.dZ.b|0));}g=!d?a.eT.a+(a.cM.a/2|0)|0:a.eT.b+(a.cM.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new R_;b.vr=a;b.vs=c;b.vq=i;}else{b=new R$;b.pj=a;b.ph=c;b.pi=i;}return b;}
function Gv(a,b,c){if(b!==null&&c!==null){Ee(a.hU,c);Ee(a.hV,b);return;}}
function ZU(b,c){var d;d=new TY;d.rL=b;d.wk=c;return d;}
function Py(a,b){var c,d,e;c=a.ek.b;d=a.cM.b;e=c-d|0;return ZU(Ba(Z(0,b-(d/2|0)|0),e),e);}
function VW(a,b){var c,d,e;c=a.ek.a;d=a.cM.a;e=c-d|0;return ZU(Ba(Z(0,b-(d/2|0)|0),e),e);}
function WV(a,b,c,d,e,f,g){Wd(a,b,c,d,e,f,g,1);}
function QI(a,b,c,d,e,f,g){Wd(a,b,c,d,e,f,g,0);}
function Wd(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bg(a.ek,0,0);Bg(a.cM,0,0);}else{i=Ba(g*3|0,d);j=Z(PT(d,d,e),i);e=e-d|0;i=d-j|0;i=i?PT(b,i,e):0;if(!h){k=a.eT;k.a=i+c|0;k.b=f-g|0;l=a.cM;l.a=j;l.b=g;l=a.dZ;l.a=c;l.b=k.b;k=a.ek;k.a=d;k.b=g;}else{k=a.eT;k.a=f-g|0;k.b=i+c|0;l=a.cM;l.a=g;l.b=j;l=a.dZ;l.a=k.a;l.b=c;k=a.ek;k.a=g;k.b=d;}}}
function HB(a,b){var c;c=a.dZ;BB(b,c.a,c.b,a.ek,a.hU);}
function HK(a,b){var c,d;c=a.cM;c.a=c.a-2|0;c.b=c.b-2|0;d=a.eT;BB(b,d.a+1|0,d.b+1|0,c,a.hV);b=a.cM;b.a=b.a+2|0;b.b=b.b+2|0;}
function H6(a,b,c){return Hn(a,b)&&Fz(c)?1:0;}
function ZC(){var a=this;B.call(a);a.xR=20;a.e$=null;a.ez=null;a.iw=0.0;a.ik=null;a.l3=0;a.iZ=0;a.cn=null;a.jN=null;a.ej=null;a.fi=null;a.ff=0;}
function AP_(){var a=new ZC();AQv(a);return a;}
function AQv(a){a.xR=20;a.e$=new Bj;a.ez=new Bj;a.cn=BA();a.jN=Eo(0);}
function K3(a,b){if(b===null)b=Eo(0);a.jN=b;}
function AB8(a,b,c,d,e){var f,g,h,i,j,k;f=c/20|0;g=a.cn;h=Bs(g,f%g.k|0);i=a.e$;j=T(a.cn.k,a.iZ);f=h.ex.b;k=((h.hB.b-(b%j|0)|0)+j|0)%j|0;if((k+f|0)>j)k= -(b%K_(h.ba)|0)|0;b=c%h.dD|0;f=h.J;k=k+T(b,f)|0;if(k<( -f|0))k=k+j|0;Bg(h.c3,h.ex.a,f);g=h.dL;b=c%h.dD|0;c=h.J;Cc(g,0.0,T(b,c),h.ex.a,c);Eq(h,e,k,i,d.oX,d.m0);}
function S1(a,b,c,d){var e,f,g,h,i,j;e=a.cn.k;while(true){f=a.cn.k;g=T(f,a.iZ);if(g>(d+a.l3|0))break;h=Cg(0,g);i=new PF;g=a.ez.a;f=a.l3;j=a.ik;i.c3=new Bj;i.dL=new B4;i.hB=h;i.dD=20;i.J=f;i.ex=Cg(g,20*f|0);i.gp=MM(j,f);if(i.ba===null)i.ba=GV(b);Bw(a.cn,i);}if(f==e)return;Rw(a,c);}
function Rw(a,b){var c,d,e,f,g,h,i,j,k;c=a.cn;d=c.k;e=T((b/(d*20|0)|0)+1|0,d)*20|0;c=BP(c);while(BQ(c)){f=BS(c);g=a.ej;h=a.iw;Fw(g);i=0;while(true){j=f.dD;if(i>=j)break;k=e-T(d,j)|0;if(k<b)k=e;e=k+1|0;FP(f,g,D7(e),T(f.J,i)+f.gp|0,h);i=i+1|0;}Ey(f.ba,g);f.nf=g.j4;}}
function Jr(a){DY(a.cn,new Mq);FJ(a.cn);a.ej=C7(a.ej,null);a.fi=C7(a.fi,null);}
function NK(){B.call(this);this.tg=null;}
function Lk(a,b){Ct(a.tg,b);}
function NJ(){B.call(this);this.mU=null;}
function AFo(a,b){var c;c=a.mU;DU(c,Hc(b,FM(c)));}
function NI(){B.call(this);this.rp=null;}
function AEx(a,b){var c;c=a.rp;Id(c,Hc(b,S9(c)));}
function UD(){var a=this;B.call(a);a.jp=null;a.gn=null;a.ko=null;a.ho=null;a.kq=null;a.lQ=0.0;a.sG=0.0;a.wx=0;a.vv=0;a.vJ=0;a.mo=0;}
function NH(){B.call(this);this.uG=null;}
function AEw(a){var b,c;b=a.uG;c=b.jP?0:1;b.jP=c;b.fy.lQ=!c?0.0:0.5;b=new R;V(b);G6(L(b,C(204)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NO(){B.call(this);this.oN=null;}
function AH2(a){var b,c;b=a.oN;c=b.hY?0:1;b.hY=c;b=new R;V(b);G6(L(b,C(205)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NN(){B.call(this);this.sE=null;}
function ARp(a){var b,c;b=a.sE;c=b.jt^1;b.jt=c;b=new R;V(b);G6(L(b,C(206)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NM(){B.call(this);this.wi=null;}
function AKA(a){var b,c,d,e,f;b=a.wi;c=(b.dF+3|0)%6|0;b.dF=c;d=b.fo.data;e=d.length;f=0;while(f<e){b=d[f];b.bR=c;b=b.bD;if(b!==null)b.gG=1;f=f+1|0;}}
function NL(){B.call(this);this.ol=null;}
function AMZ(a){var b;b=a.ol;b.bx=b.bx?0:1;Jr(b.cG);b.cG=AP_();SN(b,b.Q,b.cg,b.bM.b1);}
function NG(){B.call(this);this.rR=null;}
function AQP(a){var b;b=a.rR;b.iT=b.iT?0:1;}
function NF(){B.call(this);this.vc=null;}
function AEl(a){var b;b=a.vc;b.lN=b.lN?0:1;}
var E8=F(Cl);
var AUX=null;var AWh=null;var AUY=null;var AWi=null;function AEt(){AEt=Bm(E8);ALG();}
function ABh(a,b){var c=new E8();AA3(c,a,b);return c;}
function AA3(a,b,c){AEt();C_(a,b,c);}
function ALG(){var b;AUX=ABh(C(207),0);AWh=ABh(C(208),1);b=ABh(C(209),2);AUY=b;AWi=G(E8,[AUX,AWh,b]);}
var Jz=F(KE);
function Rg(){var a=this;Jz.call(a);a.yY=0;a.uH=0;a.rv=null;}
function Kn(){var a=this;B.call(a);a.wL=null;a.qy=null;a.xZ=0.0;a.mH=0.0;a.lO=null;a.k0=null;a.iB=0;}
function Ll(){var a=this;B.call(a);a.hv=0;a.oB=0;}
var AV6=null;var AV5=null;function YJ(a,b){var c=new Ll();Zm(c,a,b);return c;}
function Zm(a,b,c){a.hv=b;a.oB=c;}
function LC(a){return a.hv!=1?0:1;}
function Wk(a){return a.hv!=3?0:1;}
function KP(b){return YJ(2,b);}
function ZK(){AV6=YJ(0,0);AV5=YJ(1,0);}
function Wc(){var a=this;B.call(a);a.tp=null;a.uc=null;a.s4=null;}
function GJ(){var a=this;B.call(a);a.bz=0;a.ck=0;a.cQ=0;a.iQ=0;}
function AWj(a,b,c,d){var e=new GJ();TU(e,a,b,c,d);return e;}
function TU(a,b,c,d,e){a.bz=d;a.ck=b;a.cQ=c;a.iQ=e;}
function OU(){var a=this;GJ.call(a);a.d4=null;a.bO=0;a.tO=0;a.xQ=0;a.j2=0;}
var ACC=F();
function VH(b,c){return (b+(c/2|0)|0)/c|0;}
function PT(b,c,d){if(b<(2147483647/c|0))return VH(T(b,c),d);return 0.5+c*b/d|0;}
function H$(b,c){return ((b+c|0)-1|0)/c|0;}
function Ix(b){return b+0.5|0;}
function DG(b){return b+0.5|0;}
function Fv(b,c,d){return Z(b,Ba(c,d));}
function Y_(b,c){return Yo(b)/Yo(c);}
function Mf(){var a=this;GJ.call(a);a.n=null;a.wB=null;}
var TM=F(0);
function Nx(){var a=this;B.call(a);a.vj=null;a.vk=null;}
function AKm(a,b){var c,d;c=a.vj;d=a.vk;$rt_globals.console.info("paste plain string "+b);c.i(Cj(b));C3(d);}
function Un(){B.call(this);this.vU=null;}
function AO9(a,b){a.vU.clipboardData.setData("text/plain",$rt_ustr(b));}
var Mc=F(0);
function Fz(a){return DF(a,null);}
function Qc(){B.call(this);this.r4=null;}
function AIZ(a){I9(a.r4);}
function Qa(){B.call(this);this.vQ=null;}
function AEf(a){JC(a.vQ);}
var Xo=F(0);
var AV_=null;function ACG(){AV_=new Ny;}
var PO=F(0);
var AUZ=0.0;function Tb(b){Cc(b,1.0471975803375244,0.75,1.25,0.375);}
function Ya(){AUZ=Y_(Y_(0.5,0.375),4.0);}
function Wm(){var a=this;Js.call(a);a.xH=0;a.nh=0;}
function RK(){B.call(this);this.uS=null;}
function DF(a,b){var c,d,e;c=a.uS;d=c.rT;e=c.dB;if(BI(b,d))b=d;else{e=e.style;if(b!==null&&H(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}c.rT=b;return 1;}
var ABt=F();
var Ny=F();
function AQQ(a){}
function JT(){B.call(this);this.x2=null;}
var AV1=null;var AWk=null;function AJx(){AJx=Bm(JT);ARd();}
function AHj(a){var b=new JT();XS(b,a);return b;}
function XS(a,b){AJx();a.x2=b;}
function ARd(){AV1=AHj(C(210));AWk=AHj(C(211));}
var Vy=F(0);
function AA8(){B.call(this);this.i3=null;}
function ASb(a){var b=new AA8();ALT(b,a);return b;}
function ALT(a,b){a.i3=b;}
function Ed(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.i3));}
function CG(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.i3));}
function AGH(a){var b,c;b=a.i3.byteLength;c=new R;V(c);L(Bl(L(c,C(212)),b),C(213));return S(c);}
var T3=F(0);
function KA(){var a=this;B.call(a);a.hT=null;a.fQ=null;a.l5=null;}
function ABq(a,b){var c=new KA();AJs(c,a,b);return c;}
function ARJ(a,b,c){var d=new KA();N0(d,a,b,c);return d;}
function X0(b){var c,d,e,f,g,h,i;c=new KA;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=O(Bv,0);else{f=O(Bv,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=Cj(e[h]);h=h+1|0;}}}else f=O(Bv,0);N0(c,d,b,f);return c;}
function AJs(a,b,c){N0(a,b,c,O(Bv,0));}
function N0(a,b,c,d){a.hT=b;a.fQ=c;a.l5=d;}
function Jf(a,b){var c,d,e;c=b|0;if(c===b)return c;d=Eh(a);e=new R;V(e);L(L(e,C(214)),d);$rt_globals.console.info($rt_ustr(S(e))+b);return 0;}
function Eh(a){var b;b=a.hT;return Cj(b!==null?b.name:a.fQ.name);}
function AJV(a){var b,c,d,e,f;if(a.fQ===null){b=a.l5;c=Eh(a);d=Zo(b);e=new R;V(e);L(L(L(e,d),C(215)),c);c=S(e);}else{b=a.l5;c=Eh(a);f=Jf(a,a.fQ.size);d=Zo(b);e=new R;V(e);Bl(L(L(L(L(e,d),C(215)),c),C(216)),f);c=S(e);}return c;}
function HJ(){var a=this;B.call(a);a.bE=null;a.fG=null;a.ta=null;a.gF=null;a.du=null;a.us=null;a.u6=null;a.vL=null;}
function AWl(a,b,c,d,e){var f=new HJ();IA(f,a,b,c,d,e);return f;}
function IA(a,b,c,d,e,f){var g;g=c.data;a.us=AAe(C(217),16.0);a.u6=AAe(C(217),17.0);a.vL=AAe(C(53),15.0);a.bE=b;a.ta=c;a.gF=d;if(g.length>=15){a.fG=e;a.du=f;return;}b=new BD;X(b);K(b);}
function UO(){var a=this;B.call(a);a.sz=null;a.sA=null;}
function Kj(){var a=this;Kn.call(a);a.pQ=null;a.os=null;}
function Yy(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.pQ;e=0;f=0;g=a.os;a:{b:{while(true){if((e+32|0)>f&&Fq(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=EK(b)+j|0;h=i.length;f=Ba(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new BV;b=new R;V(b);Bl(L(Bl(L(b,C(218)),k),C(196)),h);Bn(l,S(b));K(l);}if(EK(b)<e)break;if(e<0){b=new BV;c=new R;V(c);L(Bl(L(c,C(197)),e),C(198));Bn(b,S(c));K(b);}h=b.cq;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.rv.data[n+b.uH|0];m=m+1|0;j=o;n=k;}b.cq
=h+e|0;e=0;}if(!Fq(c)){l=!Fq(b)&&e>=f?AV6:AV5;break a;}i=g.data;k=Ba(EK(c),i.length);p=new Nw;p.m2=b;p.qD=c;l=AAT(a,d,e,f,g,0,k,p);e=p.up;j=p.vO;if(l===null){if(!Fq(b)&&e>=f)l=AV6;else if(!Fq(c)&&e>=f)l=AV5;}Wn(c,g,0,j);if(l!==null)break a;}b=new VK;X(b);K(b);}p=new BV;l=new R;V(l);BX(Bl(L(Bl(L(l,C(199)),j),C(194)),h),41);Bn(p,S(l));K(p);}Su(b,b.cq-(f-e|0)|0);return l;}
var Pk=F(Kj);
function AAT(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Lj(h,2))break a;i=AV5;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!WG(l)){if((f+3|0)>g){j=j+(-1)|0;if(Lj(h,3))break a;i=AV5;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Cs(l)){i=KP(1);break a;}if
(j>=d){if(Fq(h.m2))break a;i=AV6;break a;}c=j+1|0;m=k[j];if(!CQ(m)){j=c+(-2)|0;i=KP(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Lj(h,4))break a;i=AV5;break a;}k=e.data;o=Ec(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.up=j;h.vO=f;return i;}
var TT=F(DQ);
function H8(){var a=this;B.call(a);a.v7=null;a.fc=null;a.tw=null;a.xW=null;a.qS=null;a.mm=null;a.oW=null;a.v$=null;a.k4=null;a.kU=null;a.ia=null;}
function AWm(a,b,c,d,e,f,g,h,i,j,k){var l=new H8();L0(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function L0(a,b,c,d,e,f,g,h,i,j,k,l){a.v7=b;a.fc=c;a.tw=d;a.xW=e;a.qS=f;a.mm=g;a.oW=h;a.v$=i;a.k4=j;a.kU=k;a.ia=l;}
var YL=F(0);
function X4(){var a=this;B.call(a);a.eQ=null;a.gx=null;a.oX=null;a.m0=null;}
function ABN(a,b,c,d){var e=new X4();AQU(e,a,b,c,d);return e;}
function AQU(a,b,c,d,e){a.eQ=b;a.gx=c;a.oX=d;a.m0=e;}
var AA9=F(0);
function ADj(){var b,c;b=new Im;c=P(C(219));ALp();JN(b,c,AWn,AWo);return b;}
function ACL(){var b,c;b=new Im;c=P(C(104));AED();JN(b,c,AWp,AWq);return b;}
function ADc(){var b,c;b=new Im;ACy();c=AWr;AET();JN(b,c,AWs,AWt);return b;}
function ADD(){var a=this;B.call(a);a.rJ=null;a.mD=null;a.tY=null;a.ng=null;}
function X7(a,b,c,d){var e=new ADD();AFd(e,a,b,c,d);return e;}
function AFd(a,b,c,d,e){a.rJ=b;a.mD=c;a.tY=d;a.ng=e;}
function XH(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.du.mD;break a;case 3:if(c!=3){b=b.du.ng;break a;}b=b.du.tY;break a;default:b=b.bE.fc;break a;}b=b.du.rJ;}return b;}
function HX(a,b,c){return XH(a,b,0,c);}
function L7(){var a=this;B.call(a);a.iV=null;a.ix=null;}
function Mj(a,b){var c;c=a.ix;a.ix=b;return c;}
function I1(){var a=this;L7.call(a);a.bC=null;a.bT=null;a.fh=0;a.fs=0;}
function Jk(a){var b;b=Kp(a);if(b==2){if(Kp(a.bT)<0)a.bT=M1(a.bT);return OL(a);}if(b!=(-2))return a;if(Kp(a.bC)>0)a.bC=OL(a.bC);return M1(a);}
function Kp(a){var b,c;b=a.bT;c=b===null?0:b.fh;b=a.bC;return c-(b===null?0:b.fh)|0;}
function M1(a){var b;b=a.bC;a.bC=b.bT;b.bT=a;D6(a);D6(b);return b;}
function OL(a){var b;b=a.bT;a.bT=b.bC;b.bC=a;D6(a);D6(b);return b;}
function D6(a){var b,c,d;b=a.bT;c=b===null?0:b.fh;b=a.bC;d=b===null?0:b.fh;a.fh=Z(c,d)+1|0;a.fs=1;b=a.bC;if(b!==null)a.fs=1+b.fs|0;b=a.bT;if(b!==null)a.fs=a.fs+b.fs|0;}
function Ij(){var a=this;B4.call(a);a.ga=0;a.gd=0;a.gb=0;a.gc=0;}
function HE(a){var b=new Ij();AQZ(b,a);return b;}
function D4(a,b,c){var d=new Ij();AG0(d,a,b,c);return d;}
function P(a){var b=new Ij();AOJ(b,a);return b;}
function E_(a,b,c,d){var e=new Ij();QT(e,a,b,c,d);return e;}
function BH(a){var b=new Ij();Jq(b,a);return b;}
function AQZ(a,b){QT(a,b,b,b,255);}
function AG0(a,b,c,d){QT(a,b,c,d,255);}
function AOJ(a,b){if(!(H(b)!=4&&H(b)!=7&&H(b)!=9)&&I(b,0)==35){if(H(b)==4){a.ga=Ip(I(b,1))*17|0;a.gd=Ip(I(b,2))*17|0;a.gb=Ip(I(b,3))*17|0;a.gc=255;}else{a.ga=K7(I(b,1),I(b,2));a.gd=K7(I(b,3),I(b,4));a.gb=K7(I(b,5),I(b,6));a.gc=H(b)!=9?255:K7(I(b,7),I(b,8));}Jv(a.ga,a.gd,a.gb,a.gc,a);return;}}
function QT(a,b,c,d,e){a.ga=b;a.gd=c;a.gb=d;a.gc=e;Jv(b,c,d,e,a);}
function Jq(a,b){a.ga=b.ga;a.gd=b.gd;a.gb=b.gb;a.gc=b.gc;Ee(a,b);}
function Ip(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function K7(b,c){return (16*Ip(b)|0)+Ip(c)|0;}
var CL=F(0);
var AVz=null;var AWr=null;var AVB=null;var AVA=null;var AVD=null;var AVC=null;var AVF=null;var AVE=null;var AVH=null;var AVG=null;var AVI=null;function ACy(){ACy=Bm(CL);AQq();}
function AQq(){AVz=HE(0);AWr=D4(8,8,8);AVB=P(C(220));AVA=D4(255,255,255);AVD=P(C(221));AVC=P(C(222));AVF=P(C(223));AVE=P(C(224));AVH=E_(205,205,205,153);AVG=E_(255,255,255,0);AVI=P(C(118));}
function Ca(){Cl.call(this);this.k1=null;}
var AWu=null;var AWv=null;var AWw=null;var AWx=null;var AWy=null;var AWz=null;var AWA=null;var AWB=null;var AWC=null;var AWD=null;var AWE=null;var AWF=null;var AWG=null;var AWH=null;var AWI=null;var AVJ=null;function ABI(){ABI=Bm(Ca);AQR();}
function Dh(a,b,c){var d=new Ca();Q8(d,a,b,c);return d;}
function AQH(a,b,c,d){var e=new Ca();YR(e,a,b,c,d);return e;}
function Q8(a,b,c,d){ABI();C_(a,b,c);a.k1=Hx(d,null);}
function YR(a,b,c,d,e){ABI();C_(a,b,c);a.k1=Hx(d,e);}
function AQR(){var b;b=new Ca;ACy();Q8(b,C(225),0,AWr);AWu=b;AWv=Dh(C(226),1,P(C(227)));AWw=Dh(C(228),2,P(C(229)));AWx=Dh(C(230),3,P(C(231)));AWy=Dh(C(232),4,AWr);AWz=Dh(C(233),5,P(C(234)));AWA=Dh(C(235),6,P(C(236)));AWB=Dh(C(237),7,P(C(238)));AWC=Dh(C(239),8,P(C(240)));AWD=AQH(C(241),9,AWr,D4(237,235,252));AWE=AQH(C(242),10,P(C(243)),P(C(244)));AWF=Dh(C(245),11,P(C(236)));AWG=Dh(C(246),12,P(C(247)));AWH=Dh(C(248),13,P(C(249)));b=Dh(C(250),14,P(C(251)));AWI=b;AVJ=G(Ca,[AWu,AWv,AWw,AWx,AWy,AWz,AWA,AWB,AWC,AWD,
AWE,AWF,AWG,AWH,b]);}
function Ir(){var a=this;B.call(a);a.ib=null;a.oM=null;}
function Hx(a,b){var c=new Ir();ALw(c,a,b);return c;}
function ALw(a,b,c){a.ib=b;a.oM=c;}
function HO(){var a=this;B.call(a);a.iC=null;a.hN=null;a.vH=null;a.yK=null;a.ku=null;a.pk=null;a.n8=null;}
function AWJ(a,b,c,d,e,f,g){var h=new HO();K8(h,a,b,c,d,e,f,g);return h;}
function K8(a,b,c,d,e,f,g,h){a.vH=b;a.yK=c;a.hN=d;a.ku=e;a.iC=f;a.pk=g;a.n8=h;}
function AAZ(){var a=this;B.call(a);a.lW=null;a.rh=0;}
function XR(a,b){var c=new AAZ();AOG(c,a,b);return c;}
function AOG(a,b,c){var d;d=new B4;a.lW=d;a.rh=b;d.bZ=c;}
function O3(a,b){return Co(a.rh,b);}
var Dg=F(0);
var AVN=null;var AVO=null;var AVK=null;var AVL=null;var AVM=null;var AWs=null;var AWt=null;var AVP=null;var AVQ=null;function AET(){AET=Bm(Dg);AG3();}
function AG3(){AVN=P(C(116));AVO=P(C(252));AVK=P(C(253));AVL=P(C(254));AVM=P(C(255));AWs=P(C(116));AWt=P(C(252));AVP=E_(205,205,205,153);AVQ=D4(247,248,250);}
function Zy(){var a=this;B.call(a);a.jq=null;a.hO=0.0;}
function AAe(a,b){var c=new Zy();AML(c,a,b);return c;}
function AML(a,b,c){a.jq=b;a.hO=c;}
function AOv(a,b){if(a===b)return 1;if(b!==null&&By(a)===By(b)){b=b;return a.hO===b.hO&&BI(a.jq,b.jq)?1:0;}return 0;}
var CM=F(0);
var AU1=null;var AWK=null;var AU3=null;var AU2=null;var AU5=null;var AU4=null;var AU7=null;var AU6=null;var AU9=null;var AU8=null;var AU$=null;function ACQ(){ACQ=Bm(CM);ARa();}
function ARa(){AU1=HE(187);AWK=P(C(256));AU3=HE(55);AU2=HE(43);AU5=D4(33,66,131);AU4=D4(60,63,65);AU7=P(C(257));AU6=P(C(258));AU9=E_(85,85,85,128);AU8=E_(43,43,43,0);AU$=P(C(101));}
function B8(){Cl.call(this);this.lT=null;}
var AWL=null;var AWM=null;var AWN=null;var AWO=null;var AWP=null;var AWQ=null;var AWR=null;var AWS=null;var AWT=null;var AWU=null;var AWV=null;var AWW=null;var AWX=null;var AWY=null;var AWZ=null;var AU_=null;function ZF(){ZF=Bm(B8);AJB();}
function Dy(a,b,c){var d=new B8();Tp(d,a,b,c);return d;}
function AOK(a,b,c,d){var e=new B8();ACX(e,a,b,c,d);return e;}
function Tp(a,b,c,d){ZF();C_(a,b,c);a.lT=Hx(d,null);}
function ACX(a,b,c,d,e){ZF();C_(a,b,c);a.lT=Hx(d,e);}
function AJB(){var b;b=new B8;ACQ();Tp(b,C(225),0,AWK);AWL=b;AWM=Dy(C(226),1,P(C(259)));AWN=Dy(C(228),2,P(C(260)));AWO=Dy(C(230),3,P(C(261)));AWP=Dy(C(232),4,P(C(259)));AWQ=Dy(C(233),5,D4(188,63,60));AWR=Dy(C(235),6,P(C(262)));AWS=Dy(C(237),7,P(C(263)));AWT=Dy(C(239),8,P(C(264)));AWU=AOK(C(241),9,AWK,D4(52,65,52));AWV=AOK(C(242),10,P(C(243)),P(C(265)));AWW=Dy(C(245),11,P(C(236)));AWX=Dy(C(246),12,P(C(247)));AWY=Dy(C(248),13,AWK);b=Dy(C(250),14,P(C(251)));AWZ=b;AU_=G(B8,[AWL,AWM,AWN,AWO,AWP,AWQ,AWR,AWS,AWT,AWU,
AWV,AWW,AWX,AWY,b]);}
var Du=F(0);
var AVd=null;var AVe=null;var AVa=null;var AVb=null;var AVc=null;var AWn=null;var AWo=null;var AVf=null;var AVg=null;function ALp(){ALp=Bm(Du);AMo();}
function AMo(){AVd=P(C(266));AVe=P(C(267));AVa=P(C(219));AVb=P(C(268));AVc=P(C(256));AWn=P(C(266));AWo=P(C(267));AVf=E_(118,121,122,128);AVg=D4(63,66,68);}
var CW=F(0);
var AVh=null;var AW0=null;var AVj=null;var AVi=null;var AVl=null;var AVk=null;var AVn=null;var AVm=null;var AVp=null;var AVo=null;var AVq=null;function AHM(){AHM=Bm(CW);AO7();}
function AO7(){AVh=HE(206);AW0=P(C(269));AVj=P(C(270));AVi=P(C(110));AVl=P(C(271));AVk=P(C(272));AVn=P(C(273));AVm=P(C(274));AVp=E_(107,106,107,128);AVo=E_(30,31,34,0);AVq=P(C(112));}
function B7(){Cl.call(this);this.hR=null;}
var AW1=null;var AW2=null;var AW3=null;var AW4=null;var AW5=null;var AWg=null;var AW6=null;var AW7=null;var AW8=null;var AW9=null;var AW$=null;var AW_=null;var AXa=null;var AXb=null;var AXc=null;var AVr=null;function UE(){UE=Bm(B7);AKw();}
function Dz(a,b,c){var d=new B7();RN(d,a,b,c);return d;}
function ASh(a,b,c,d){var e=new B7();Wv(e,a,b,c,d);return e;}
function RN(a,b,c,d){UE();C_(a,b,c);a.hR=Hx(d,null);}
function Wv(a,b,c,d,e){UE();C_(a,b,c);a.hR=Hx(d,e);}
function AKw(){var b,c;b=new B7;AHM();RN(b,C(225),0,AW0);AW1=b;AW2=Dz(C(226),1,P(C(275)));AW3=Dz(C(228),2,P(C(276)));AW4=Dz(C(230),3,P(C(277)));AW5=Dz(C(232),4,AW0);AWg=Dz(C(233),5,P(C(278)));AW6=Dz(C(235),6,P(C(279)));AW7=Dz(C(237),7,P(C(280)));AW8=Dz(C(239),8,P(C(281)));c=new B7;ACQ();Wv(c,C(241),9,AWK,P(C(273)));AW9=c;AW$=ASh(C(242),10,AWK,P(C(113)));AW_=Dz(C(245),11,P(C(282)));AXa=Dz(C(246),12,P(C(283)));AXb=Dz(C(248),13,AW0);b=Dz(C(250),14,P(C(251)));AXc=b;AVr=G(B7,[AW1,AW2,AW3,AW4,AW5,AWg,AW6,AW7,AW8,
AW9,AW$,AW_,AXa,AXb,b]);}
var Dn=F(0);
var AVv=null;var AVw=null;var AVs=null;var AVt=null;var AVu=null;var AWp=null;var AWq=null;var AVx=null;var AVy=null;function AED(){AED=Bm(Dn);AMT();}
function AMT(){AVv=P(C(272));AVw=P(C(284));AVs=P(C(104));AVt=P(C(279));AVu=P(C(269));AWp=P(C(272));AWq=P(C(285));AVx=P(C(286));AVy=D4(43,45,48);}
function H0(){var a=this;B.call(a);a.sY=null;a.nY=null;a.pb=null;a.tR=null;a.qH=null;a.h4=null;}
function AXd(a,b,c,d,e,f){var g=new H0();L6(g,a,b,c,d,e,f);return g;}
function L6(a,b,c,d,e,f,g){a.sY=b;a.nY=c;a.pb=d;a.tR=e;a.qH=f;a.h4=g;}
function Im(){var a=this;B.call(a);a.ki=null;a.lE=null;a.tL=null;}
function AXe(a,b,c){var d=new Im();JN(d,a,b,c);return d;}
function JN(a,b,c,d){a.ki=b;a.lE=c;a.tL=d;}
function LE(a,b){return !b?a.lE:a.tL;}
function YW(){var a=this;B.call(a);a.k7=null;a.su=null;a.uV=null;}
function ADs(a,b,c){var d=new YW();APW(d,a,b,c);return d;}
function APW(a,b,c,d){a.k7=b;a.su=c;a.uV=d;}
function Rv(){B.call(this);this.qC=null;}
function HF(){var a=this;B.call(a);a.fK=0;a.li=null;}
function UT(){var a=this;B.call(a);a.yH=null;a.u9=null;a.fD=null;}
function FI(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.fD.data;f=e.length-1|0;g=f;while(true){if(d>g)return Ba(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.ht:i.hu;k=!c?i.mf:i.mg;if(j<=k&&k<(j+k|0))return h;j=BE(j,b);if(j<0)d=h+1|0;else{if(j<=0)break;g=h-1|0;}}return h;}
function Ls(){var a=this;B.call(a);a.hu=0;a.mg=0;a.ht=0;a.mf=0;a.j7=0;}
var YK=F();
function Co(b,c){return DG(b*c);}
var ZX=F();
function TP(){var a=this;B.call(a);a.oE=null;a.s6=null;a.tZ=null;}
var Tt=F();
function AHb(a,b){ABP(b);}
function I0(){var a=this;B.call(a);a.eq=null;a.eP=null;a.eG=null;}
var AVS=0;function ABP(a){var b;b=a.eP;if(b!==null){AVS=AVS-1|0;a.eq.dO.deleteTexture(b);a.eP=null;}}
function Ci(a){return a.eG.a;}
function K_(a){return a.eG.b;}
function Ti(a,b,c,d){var e;e=a.eG;e.a=b;e.b=c;LG(a);a.eq.dO.texStorage2D(3553,1,d,b,c);e=a.eq.dO;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function LG(a){var b,c;b=a.eq.dO;c=a.eP;b.bindTexture(3553,c);}
function Ey(a,b){var c,d,e,f,g,h;a:{c=b.lP;d=b.kY;e=a.eG;f=e.a;if(f){g=e.b;if(g){if(f==c&&g==d?1:0){LG(a);break a;}e=a.eq.dO;h=a.eP;e.deleteTexture(h);a.eP=a.eq.dO.createTexture();Ti(a,c,d,32856);break a;}}Ti(a,c,d,32856);}PV(a,b,0,0);}
function Q7(a,b,c,d){LG(a);PV(a,b,c,d);}
function PV(a,b,c,d){var e;e=a.eq.dO;b=b.hH;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function ADq(){var a=this;B.call(a);a.jW=null;a.kc=null;a.d2=null;a.j1=null;a.bj=null;a.lg=null;a.lo=null;a.eL=null;a.fl=null;a.hc=null;}
function AQ2(a,b){var c=new ADq();AK6(c,a,b);return c;}
function AK6(a,b,c){var d,e,f;a.d2=b;a.j1=c;a.bj=AFN();b=new R;V(b);a.hc=b;a.eL=HL();b=new SK;d=ACV(16);b.fe=0;b.dr=O(Hh,d);b.pa=0.75;Vg(b);a.fl=b;b=new Vk;c=a.bj;e=a.hc;f=a.eL;b.cS=c;b.jI=e;b.qZ=f;a.lg=b;b=new Vc;b.cu=c;b.kP=e;b.pL=f;a.lo=b;}
function Nj(a){var b,c,d,e,f,g,h;a:{b=Jt(a.d2.ea);c=b.gJ;if(c.cy>0){d=c.cv;e=0;b:while(true){f=b.gJ.bV.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cl;if(I8(a.eL,g))B_(a.eL,g);else{h=a.eL;D_(h,g,CK(h.cy));}c=c.cs;if(d!=b.gJ.cv)break b;}e=e+1|0;}b=new GC;X(b);K(b);}}b=a.d2.ft;if(b!==null)Rj(a,b);Bi(a.bj,a.d2.ea.cy);b=So(Jt(a.d2.ea));while(ER(b)){c=OS(b);F_(a.bj,a.hc.H,H(c));CZ(a.hc,c);}b=So(Jt(a.d2.ea));while(ER(b)){c=OS(b);c=B_(a.d2.ea,c);Bi(a.bj,c.k);c=BP(c);while(BQ(c)){g=BS(c);g=B_(a.eL,g);Bi(a.bj,
g.bn);}}if(a.d2.ft===null)Bi(a.bj,(-1));else{Bi(a.bj,a.fl.fe);Sy(a,a.d2.ft);}if(a.j1===null)Bi(a.bj,(-1));else{Bi(a.bj,1);Yt(a.j1,a.bj,a.fl);}a.jW=PY(a.bj);a.kc=E5(S(a.hc));}
function Rj(a,b){var c,d,e,f,g,h;if(Vv(a.fl,b))LI(a.fl,b);else{c=a.fl;d=CK(c.fe);if(b===null){e=Qp(c);if(e===null){c.jf=c.jf+1|0;e=Vz(c,null,0,0);f=c.fe+1|0;c.fe=f;if(f>c.lj)Nf(c);}}else{g=IB(b);h=g&(c.dr.data.length-1|0);e=Nk(c,b,h,g);if(e===null){c.jf=c.jf+1|0;e=Vz(c,b,h,g);f=c.fe+1|0;c.fe=f;if(f>c.lj)Nf(c);}}e.cD=d;}b=b.ce;if(b===null)return;c=new Xm;c.pP=a;b.el(c);}
function Sy(a,b){var c,d,e,f;c=(LI(a.fl,b)).bn;Bi(a.bj,c);if(b instanceof Kl)Bi(a.bj,(-1));else if(!(b instanceof JS))Bi(a.bj,0);else Bi(a.bj,1);d=a.lg;Bi(d.cS,b.dQ.cz());e=b.dQ;f=new Mb;f.vM=d;e.el(f);d=a.lo;Bi(d.cu,b.eg.cz());e=b.eg;f=new UH;f.ty=d;e.el(f);d=b.ie;Bi(a.bj,d.cz());e=new VG;e.uq=a;d.el(e);d=b.fU;Bi(a.bj,d.cz());d=d.bW();while(d.cd()){e=d.bP();M7(a.lg,e.ii);Gw(a.lo,e.jc);Bi(a.bj,e.pl);}d=b.tu;if(d===null)Bi(a.bj,(-1));else Bi(a.bj,(B_(a.eL,d)).bn);b=b.ce;Bi(a.bj,b.cz());d=new OM;d.m3=a;b.el(d);}
function Wz(){B.call(this);this.uX=null;}
function AKa(a,b){var c,d,e,f,g,h;c=b.data;b=a.uX;d=CG(c[0]);e=Ed(c[1]);f=(CG(c[2])).data[0];if(b.c.f.b0==f){g=null;h=null;if(c.length>=5){g=CG(c[3]);h=Ed(c[4]);}Ms(b.c.f,d,e,g,h);DL(b.c.f.cL);DL(b.c.f.cW);Pn(b.c.f);G4(b.c.f);JM(b);}}
var QH=F(0);
var No=F(0);
var GE=F();
function Sh(){GE.call(this);this.tP=null;}
function Uf(a,b){var c,d,e;c=0;while(true){d=a.tP;if(d.h$===null)d.h$=BP(d.pT);if(!BQ(d.h$))e=0;else{c=b.cm(BS(d.h$));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Qx=F(0);
function XC(){B.call(this);this.tW=null;}
function AMY(a,b){var c,d,e,f;c=b.data;b=a.tW;d=CG(c[0]);e=Ed(c[1]);Ms(b.f,d,e,null,null);f=JW(DS(),b.tt);b=new R;V(b);L(FW(L(b,C(287)),f),C(23));$rt_globals.console.info($rt_ustr(S(b)));}
var X9=F();
function EW(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function YU(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function Uj(){var a=this;B.call(a);a.bm=null;a.N=null;a.P=null;a.fV=null;}
function KG(a,b,c){var d;d=a.P;d.lC(b,c,d.eU);Ng(a);}
function Ng(a){var b,c,d,e;b=a.N;c=a.P.p.a;b.p.a=c;d=b.cR;if(d!==null&&c!=Ci(d)&&!(c>=b.h7&&Ci(b.cR)>=b.h7))b.gQ=1;b=a.N;b.eU=a.bm.b1;if(VQ(b))c=0;else{b=a.N;UP(b);e=Cn(b.e2,b.i9);Pa(b,Fy(b.eD)+(e*2|0)|0);c=b.p.b;}b=a.N.G;d=a.P.G;Bg(b,d.a,d.b-c|0);}
function Lo(b,c){if(b<0)c=C(288);else if(b>0)c=C(289);return c;}
function Xr(a,b,c){var d;d=a.N.G.a;return (d-c|0)<=b&&b<d?1:0;}
function ML(a,b,c){var d,e;d=a.N;e=d.G.a+d.p.a|0;return e<=b&&b<(e+c|0)?1:0;}
function O$(a,b,c){var d;d=a.N.G.b;return (d-c|0)<=b&&b<d?1:0;}
function Nu(a,b,c){var d,e;d=a.P;e=d.G.b+d.p.b|0;return e<=b&&b<(e+c|0)?1:0;}
function VX(a,b,c){var d,e,f;d=a.N.G.b-c|0;e=a.P;f=(e.G.b+e.p.b|0)+c|0;return d<=b&&b<f?1:0;}
function Wq(a,b,c){var d,e;d=a.N.G.b+c|0;e=a.P;return AAq(b,d,(e.G.b+e.p.b|0)-c|0);}
function N6(a,b,c){var d,e,f;d=a.N;e=d.G.a;f=e-c|0;e=(e+d.p.a|0)+c|0;return f<=b&&b<e?1:0;}
function NB(a,b,c){var d,e;d=a.N;e=d.G.a;return AAq(b,e+c|0,(e+d.p.a|0)-c|0);}
function AAq(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BE(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function H3(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bj;f=new Bj;g=b.a;h=b.b;b=a.P;i=b.G;j=i.a;k=i.b;b=b.p;l=b.a;m=b.b;b=new Vs;b.tH=a;b.tJ=e;b.tI=f;b.tD=c;b.tC=g;b.tG=j;b.tE=l;b.tT=d;b.tS=h;b.tU=k;b.un=m;return b;}
function SQ(){var a=this;B.call(a);a.eS=null;a.b7=null;a.fp=null;a.f4=null;a.lS=null;a.cf=null;a.e0=null;a.cC=0;a.eX=0;a.md=0;a.il=0;a.iU=0;a.fY=0;a.ua=null;a.pB=null;a.wz=null;a.i4=null;}
function PU(a,b,c){a.eS=b;Vx(a,c);Lh(a);}
function QC(a,b){var c;a.lS=b.iC;c=b.ku.lE;Ee(a.b7.db,c);c=b.hN.k7;Ee(a.b7.gz,c);a.i4=b.ku;}
function Vx(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=LN(b);d=b.b1;BK(a.eS);CO(c,a.eS);e=PN(a.eS,1.25);f=0;a.cC=Co(2.0,d);a.eX=Co(3.0,d);a.md=Co(12.0,d);g=0;h=a.cf.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Kf(c,l.lf,0.875);n=a.md;o=(n+m|0)+n|0;f=Z(f,o);b=l.dY;b.a=g;b.b=0;b=l.dj;b.a=o;b.b=e;Cc(l.gS,g,0.0,o,k);g=g+o|0;j=j+1|0;}b=a.fp;b.a=g;b.b=e;b=a.b7.bo;o=a.fY;if(!o){m=a.cC;m=(g+m|0)+T(m,a.cf.data.length)|0;}else m=(f+(a.cC*2|0)|0)+(a.eX*2|0)|0;b.a=m;if(!o)e=e+(a.cC*2|0)|0;else{o=a.cC;e=(T(e+o|0,a.cf.data.length)
+o|0)+(a.eX*2|0)|0;}b.b=e;}
function Yj(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function ET(a){var b,c;b=a.fp;if(b.a&&b.b)return a.b7.bo;c=new Bt;Bn(c,C(290));K(c);}
function Lh(a){a.iU=1;}
function ADa(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.dk;if(!a.cf.data.length)return;if(a.e0===null)a.e0=GV(c);a:{if(!a.iU){d=a.fp;if(T(d.a,d.b))break a;}d=a.fp;if(!T(d.a,d.b))Vx(a,b);d=a.fp;e=d.a;f=d.b;if(!T(e,f))return;d=Fa(c,e,f,b.cE);CO(d,a.eS);g=PN(a.eS,0.125);h=a.eS;i=h.eh;g=g+i-(i+h.dT)/16.0;j=a.cf.data;e=j.length;f=0;while(f<e){h=j[f];Ev(d,h.lf,h.gS.bp+a.md,g);f=f+1|0;}Ey(a.e0,d);a.iU=0;It(d);}if(!JP(a.b7)){d=a.b7;Zx(c,d.bo,d.cr,d.gz,a.cC,a.f4);d=a.b7;h=d.bo;k=d.cr;d=d.db;e=a.cC;l=a.f4;l.a=(h.a-e|0)
-e|0;l.b=(h.b-e|0)-e|0;BB(c,k.a+e|0,k.b+e|0,l,d);if(a.fY){d=a.b7;ABv(c,d.bo,d.cr,0,0,O3(a.lS,b.b1),a.lS.lW,a.f4);}}j=a.cf.data;m=j.length;n=0;while(n<m){d=j[n];if(b.cE){h=d.dY;e=h.a;f=h.b;h=d.dj;k=d.gS;l=a.e0;o=a.i4;Ew(c,e,f,h,k,l,o.ki,LE(o,d.gD));}else{h=d.dY;e=h.a;f=h.b;h=d.dj;k=d.gS;l=a.e0;o=a.i4;Es(c,e,f,h,k,l,o.ki,LE(o,d.gD),0.0);}n=n+1|0;}b:{if(a.fY){j=a.cf.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.f4;e=(a.b7.bo.a-(a.cC*2|0)|0)-(a.eX*2|0)|0;h=d.dj;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.dY;BB(c,
k.a+h.a|0,k.b,b,LE(a.i4,d.gD));}p=p+1|0;}}}}
function Nv(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cf.data;if(c>=d.length)return (-1);e=d[c];if(EW(b,e.dY,e.dj))return c;if(a.fY){f=e.dY;g=f.a;e=e.dj;h=e.a;g=g+h|0;i=f.b;f=a.f4;f.a=(a.b7.bo.a-(a.cC*2|0)|0)-h|0;f.b=e.b;if(YU(b,g,i,f))break;}c=c+1|0;}return c;}
function V9(){B.call(this);this.s8=null;}
function AKY(a,b){var c,d;c=a.s8;W8(c,D2(c,b.n));b=Bd(c);d=c.c;K0(b,d.o,d.r);Gz(c);}
var Mq=F();
function AOR(a,b){b=b;b.ba=C7(b.ba,null);}
function PF(){var a=this;B.call(a);a.ba=null;a.hB=null;a.ex=null;a.dD=0;a.J=0;a.c3=null;a.dL=null;a.gp=0;a.nf=0;}
function Nm(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dD;i=T(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Z(i,e))a:{while(true){if(d<=e){j=d;break a;}Fw(c);j=d+(-1)|0;b=D7(d);d=T(j,a.J)%a.ex.b|0;FP(a,c,b,a.gp,g);Q7(a.ba,c,0,d);if(!(j%a.dD|0))break;d=j;}}else{Fw(b);k=a.dD-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;FP(a,b,D7(j),T(a.J,k)+a.gp|0,g);k=k+(-1)|0;j=h;}Ey(a.ba,b);j=Z(i,e);}return j;}k=a.dD;h=T(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Ba(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Fw(c);b=D7((d+f|0)+1|0);j=d+1|0;d=T(d,
a.J)%a.ex.b|0;FP(a,c,b,a.gp,g);Q7(a.ba,c,0,d);if(!(j%a.dD|0))break;d=j;}}else{Fw(b);d=0;while(d<a.dD){h=h+1|0;FP(a,b,D7((h>e?h-f|0:h)+f|0),T(a.J,d)+a.gp|0,g);d=d+1|0;}Ey(a.ba,b);j=Ba(i,e);}return j;}
function AAQ(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q;l=d/a.J|0;c=Ba((j+i|0)%e|0,c);Bg(a.c3,Ci(a.ba),a.J);e=d%K_(a.ba)|0;i=a.J;m=e/i|0;n=m+(c/i|0)|0;if(c%i|0)n=n+1|0;i=m;e=m;o=l;while(i<n){if(LD(a,g,o,l+(i-m|0)|0,f,k)){p=T((i-e|0)+1|0,a.J);Bg(a.c3,Ci(a.ba),p);Cc(a.dL,0.0,T(e,a.J),Ci(a.ba),p);}else{q=Fx(f,g,o,k);c=e-m|0;e=a.J;Eq(a,h,T(c,e)-(d%e|0)|0,b,k.eQ,q);o=(l+i|0)-m|0;Bg(a.c3,Ci(a.ba),a.J);Cc(a.dL,0.0,T(i,a.J),Ci(a.ba),a.J);e=i;}i=i+1|0;}q=Fx(f,g,o,k);c=e-m|0;e=a.J;Eq(a,h,T(c,e)-(d%e|0)|0,b,k.eQ,q);}
function LD(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Fx(e,b,c,f)!==f.gx?0:1;}
function Fx(b,c,d,e){c=c.data;return d<c.length&&c[d]?HX(b.du,b,c[d]):e.gx;}
function Eq(a,b,c,d,e,f){if(a.nf)Ew(b,a.hB.a+d.a|0,c+d.b|0,a.c3,a.dL,a.ba,e,f);else Es(b,a.hB.a+d.a|0,c+d.b|0,a.c3,a.dL,a.ba,e,f,0.0);}
function FP(a,b,c,d,e){Ev(b,c,a.ex.a-20.0*e,d);}
var Z7=F();
function ACI(){var a=this;B.call(a);a.gT=null;a.lk=0;a.eW=0;}
function AFN(){var a=new ACI();AQ1(a);return a;}
function AQ1(a){a.lk=0;a.gT=Bz(16);a.eW=0;}
function F_(a,b,c){Bi(a,b);Bi(a,c);}
function Bi(a,b){var c,d;c=a.gT;d=c.data.length;if(d==a.eW)a.gT=Is(c,d*2|0);c=a.gT.data;d=a.eW;a.eW=d+1|0;c[d]=b;}
function PY(a){var b,c,d,e,f;b=a.lk;if(b&&a.eW!=b){c=EH();b=a.lk;d=a.eW;e=new R;V(e);L(Bl(L(Bl(L(e,C(291)),b),C(292)),d),C(293));Ct(c,S(e));}f=a.gT;b=f.data.length;d=a.eW;if(b!=d)f=Is(f,d);return f;}
function SK(){var a=this;DD.call(a);a.fe=0;a.dr=null;a.jf=0;a.pa=0.0;a.lj=0;}
function ACV(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Vg(a){a.lj=a.dr.data.length*a.pa|0;}
function Vv(a,b){return W9(a,b)===null?0:1;}
function LI(a,b){var c;c=W9(a,b);if(c===null)return null;return c.cD;}
function W9(a,b){var c,d;if(b===null)c=Qp(a);else{d=IB(b);c=Nk(a,b,d&(a.dr.data.length-1|0),d);}return c;}
function Nk(a,b,c,d){var e;e=a.dr.data[c];while(e!==null&&!(e.lh==d&&(b!==e.cl?0:1))){e=e.gN;}return e;}
function Qp(a){var b;b=a.dr.data[0];while(b!==null&&b.cl!==null){b=b.gN;}return b;}
function Vz(a,b,c,d){var e,f;e=new Hh;Xq(e,b,null);e.lh=d;f=a.dr.data;e.gN=f[c];f[c]=e;return e;}
function Nf(a){var b,c,d,e,f,g,h,i;b=a.dr.data.length;b=ACV(!b?1:b<<1);c=O(Hh,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dr.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.lh&f;i=h.gN;h.gN=d[b];d[b]=h;h=i;}e=e+1|0;}a.dr=c;Vg(a);}
function Vk(){var a=this;B.call(a);a.cS=null;a.jI=null;a.qZ=null;}
function M7(a,b){var c;if(!(b instanceof LJ)){Bi(a.cS,3);Wr(a,b);Bi(a.cS,b.g0);}else{c=b;Bi(a.cS,5);Wr(a,c);Bi(a.cS,c.g0);Bi(a.cS,c.mR);b=c.js;Bi(a.cS,b.k);c=new MV;c.ob=a;DY(b,c);}}
function Wr(a,b){var c;c=b.dS.g$;F_(a.cS,a.jI.H,H(c));Bi(a.cS,b.dS.c6);Mk(a,b.jh);CZ(a.jI,c);}
function Mk(a,b){if(b===null)Bi(a.cS,(-1));else Bi(a.cS,(B_(a.qZ,b)).bn);}
function Vc(){var a=this;B.call(a);a.cu=null;a.kP=null;a.pL=null;}
function Gw(a,b){var c,d,e;if(b instanceof FS){c=b;Bi(a.cu,9);PM(a,c.gj);}else if(b instanceof Ic){d=b;Bi(a.cu,3);Qt(a,d);Bi(a.cu,d.ne);PM(a,d.gy);}else if(b instanceof Iw){e=b;Bi(a.cu,4);Gw(a,e.hn);Gw(a,e.gA);}else if(b===null)Bi(a.cu,(-1));else{Bi(a.cu,5);Qt(a,b);Bi(a.cu,b.sB);}}
function Qt(a,b){var c;c=b.eH.g$;F_(a.cu,a.kP.H,H(c));Bi(a.cu,b.eH.c6);b=b.fd;if(b===null)Bi(a.cu,(-1));else Bi(a.cu,(B_(a.pL,b)).bn);CZ(a.kP,c);}
function PM(a,b){var c;Bi(a.cu,b.k);c=new Xv;c.oi=a;DY(b,c);}
function NX(){B.call(this);this.n0=null;}
function AFz(a,b){C$(a.n0,b);}
var Do=F(Bt);
var Tw=F(F2);
function Qv(){var a=this;B.call(a);a.j8=0;a.qg=null;}
function ARq(a,b){var c,d;c=a.qg;b=b;c=c.qC;d=b.a<=EE(c)&&Fl(c)<=b.b?1:0;a.j8=d;return d?0:1;}
function U_(){B.call(this);this.ot=null;}
function ANp(a,b){GP(a.ot,b);}
function SX(){B.call(this);this.mM=null;}
function AQy(a,b){GP(a.mM,b);}
function SY(){B.call(this);this.t1=null;}
function AL8(a,b){GP(a.t1,b);}
function Qe(){var a=this;B.call(a);a.pT=null;a.h$=null;}
function Sl(){var a=this;B.call(a);a.sx=null;a.sw=null;a.sv=null;}
function AJv(a,b){VM(a.sx,a.sw,b,a.sv);}
function R_(){var a=this;B.call(a);a.vr=null;a.vs=null;a.vq=0;}
function AHn(a,b){var c,d,e;c=a.vr;d=a.vs;e=a.vq;d.i(VW(c,(b.n.a+e|0)-c.dZ.a|0));}
function R$(){var a=this;B.call(a);a.pj=null;a.ph=null;a.pi=0;}
function AP6(a,b){var c,d,e;c=a.pj;d=a.ph;e=a.pi;d.i(Py(c,(b.n.b+e|0)-c.dZ.b|0));}
var EF=F(0);
function Nn(){var a=this;B.call(a);a.hw=0;a.mh=0;a.iD=0;a.f1=0;a.gI=null;}
function BQ(a){return a.hw>=a.iD?0:1;}
function BS(a){var b,c;O4(a);b=a.hw;a.f1=b;c=a.gI;a.hw=b+1|0;return c.lt(b);}
function Q4(a){var b,c,d;if(a.f1<0){b=new Do;X(b);K(b);}O4(a);a.gI.ml(a.f1);a.mh=a.gI.bN;c=a.f1;d=a.hw;if(c<d)a.hw=d-1|0;a.iD=a.iD-1|0;a.f1=(-1);}
function O4(a){var b;if(a.mh>=a.gI.bN)return;b=new GC;X(b);K(b);}
function M6(){B.call(this);this.r7=null;}
function AKd(a){return Rf(a.r7);}
function M3(){B.call(this);this.q0=null;}
function AO$(a){return Rf(a.q0);}
function SH(){B.call(this);this.x1=null;}
function AMI(a){return ADC(0);}
var ACJ=F();
var ACa=F();
function Hh(){var a=this;F5.call(a);a.lh=0;a.gN=null;}
function S2(){B.call(this);this.ql=null;}
function AOB(a,b){var c;c=a.ql;C$(c,b);Jo(c,null);W6(c);}
var ABr=F();
function AMK(b,c){return {oldModelUrl:b,newModelUrl:c};}
function Yi(){B.call(this);this.Ei=null;}
function TY(){var a=this;B.call(a);a.rL=0;a.wk=0;}
function Hc(a,b){return PT(a.rL,b,a.wk);}
function E3(){var a=this;B.call(a);a.f3=null;a.ce=null;a.eg=null;a.dQ=null;a.fU=null;a.ie=null;a.tu=null;}
function ARA(a){var b=new E3();AA_(b,a);return b;}
function AA_(a,b){a.f3=b;a.ce=BA();a.eg=BA();a.dQ=BA();a.ie=BA();a.fU=BA();}
function WX(a){var b;b=a.f3;if(b!==null)b.ce.nS(a);}
function Xm(){B.call(this);this.pP=null;}
function AIq(a,b){b=b;Rj(a.pP,b);}
var Kl=F(E3);
var JS=F(E3);
function VG(){B.call(this);this.uq=null;}
function AE$(a,b){var c;b=b;c=a.uq;Bi(c.bj,(B_(c.eL,b)).bn);}
function PI(){var a=this;B.call(a);a.ii=null;a.jc=null;a.pl=0;}
function OM(){B.call(this);this.m3=null;}
function ALj(a,b){b=b;Sy(a.m3,b);}
var D1=F(Bt);
function Nw(){var a=this;B.call(a);a.m2=null;a.qD=null;a.up=0;a.vO=0;}
function Lj(a,b){return EK(a.qD)<b?0:1;}
function YN(){var a=this;B.call(a);a.EA=null;a.J4=0;}
function Ml(){B.call(this);this.t3=null;}
function AQb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.t3;d=CG(c[0]);e=(CG(c[1])).data[0];if(!TD(b.f)){c=b.f;if(c.b0==e){e=b.mW;f=Lt(d);DL(c.cW);DL(c.cL);Pn(c);while(f.ei>=f.gW.data.length?0:1){if(U(f)==(-1))continue;g=Xb(c,U(f));h=Lz(BG(c,g.V),g.bd);if(U(f)==(-1)){if(!e)continue;h.bX=0;h.bH=h.bH|4;continue;}i=Xb(c,U(f));j=U(f);k=U(f);D_(c.cW,g,i);l=c.cL;m=BA();if(B_(l,i)===null)D_(l,i,m);Bw(B_(c.cL,i),g);h.bX=j;h.bH=k;}Kx(b);if(b.xn){n=JW(DS(),b.uJ);if(AR1(n,BM(100))){b=EX();c=new R;V(c);L(FW(L(c,C(294)),
n),C(23));Ct(b,S(c));}}}}}
var ACS=F();
function T1(b,c,d,e){var f,g;f=b.next();g=new WQ;g.nl=b;g.nk=c;g.nn=d;g.nm=e;f.then(Bp(g,"f"),Bp(d,"f"));}
function Yr(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ADp(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Fg()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new WN;f.ri=b;f.rj=d;d.addEventListener("change",Bp(f,"handleEvent"));d.click();}
function YA(b,c){var d;if(c.isFile?1:0)b.i(X0(c.file()));else{c=c.createReader();d=new Wy;d.uz=b;c.readEntries(Bp(d,"f"));}}
function S7(){var a=this;B.call(a);a.be=null;a.oG=null;a.hM=null;a.mu=null;a.jz=null;a.eO=null;}
function F9(a){return a.be.bM.gO;}
function XA(a){var b;b=new SJ;b.vu=a;return b;}
function AAg(a){var b,c,d,e,f;b=O(DO,5);c=b.data;d=a.be;BK(d);e=new Xi;e.sD=d;c[0]=CB(C(295),e);e=a.be;BK(e);f=new Xd;f.om=e;c[1]=CB(C(296),f);d=a.be;BK(d);e=new Xe;e.pv=d;c[2]=CB(C(297),e);d=a.be;BK(d);e=new Xf;e.vo=d;c[3]=CB(C(298),e);d=a.be;BK(d);e=new Xg;e.m8=d;c[4]=CB(C(299),e);return GT(b);}
function I2(a,b,c){var d,e,f,g,h,i,j;a:{Dx(a.eO.bS);d=a.be.c;e=Dw(d);f=FL(d);g=a.be.ct;if(c===null)h=null;else{AS2();switch(AXf.data[c.gi]){case 1:h=LL(g,e,f);break a;case 2:h=QD(g,e,f);break a;default:}b=new Fp;X(b);K(b);}}c=a.be;f=D2(c,b);e=Gx(c.c.f,f.V,f.bd);g=Kz(c,e);if(h!==null){e=c.c;i=f.V;j=f.bd;f=new XB;f.pM=c;f.pN=b;f.pO=g;h.ln(e,i,j,f,c.hI);}else{f=B_(c.c.f.cW,e);if(f!==null)HH(c,f);else{f=B_(c.c.f.cL,e);if(f!==null&&!DI(f))Q2(c.eB,b,f,c,g);else Ke(c.eB,b,c);}}}
var YQ=F(0);
function TB(){B.call(this);this.IS=null;}
var AWb=null;function SL(b){var c,d;if(b===null)b=C(3);else{c=b.eI;if(c===null)b=C(3);else{d=AAk(c,C(300));b=d==(-1)?b.eI:D3(b.eI,d+1|0);}}return b;}
function WH(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=d.c;f=BA();g=c!==null?c.data.length:b.k;h=0;while(h<g){if(c===null){i=(Bs(b,h)).V;j=RS(EL(BG(e.f,i)));k=SL(e.dz);}else{l=c.data;i=l[h].f0.e3;j=!BI(e.dz,l[h].hd)?C(3):RS(EL(BG(e.f,i)));k=SL(l[h].hd);}if(H(j)>153){m=B9(j,0,150);j=new R;V(j);L(L(j,m),C(51));j=S(j);}if(H(k)>153){k=B9(k,0,150);m=new R;V(m);L(L(m,k),C(51));k=S(m);}n=D7(i+1|0);if(c!==null){l=c.data;o=null;p=l[h];}else{p=null;o=Bs(b,h);}if(c!==null){m=new WA;m.qr=d;m.qs=p;}else{m=new WB;m.vn=d;m.vm=o;}o
=new JR;o.sC=m;o.iz=n;o.iK=j;o.fL=k;Bw(f,o);h=h+1|0;}return Hl(f,AWb);}
function AC4(){AWb=O(JR,0);}
function TA(){var a=this;B.call(a);a.wu=null;a.ws=null;a.wt=0;a.wr=0;}
var OT=F(0);
var Ep=F(EA);
function O7(){Ep.call(this);this.gJ=null;}
function So(a){var b;b=new SO;Kr(b,a.gJ);return b;}
function Mb(){B.call(this);this.vM=null;}
function AHB(a,b){b=b;M7(a.vM,b);}
function UH(){B.call(this);this.ty=null;}
function AKB(a,b){b=b;Gw(a.ty,b);}
function IF(){var a=this;B.call(a);a.dS=null;a.jh=null;a.g0=0;}
function AS7(a,b,c){var d=new IF();AB7(d,a,b,c);return d;}
function AB7(a,b,c,d){a.dS=b;a.jh=c;a.g0=d;}
function ABi(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return BI(a.dS,c.dS)&&BI(a.jh,c.jh)&&BI(CK(a.g0),CK(c.g0))?1:0;}return 0;}
function LJ(){var a=this;IF.call(a);a.js=null;a.mR=0;}
function AFD(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){if(!ABi(a,b))return 0;c=b;return BI(a.js,c.js);}return 0;}
function Ej(){var a=this;B.call(a);a.eH=null;a.fd=null;a.sB=0;}
function ARW(a,b,c){var d=new Ej();KM(d,a,b,c);return d;}
function KM(a,b,c,d){a.eH=b;a.fd=c;a.sB=d;}
function YC(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return BI(a.eH,c.eH)&&BI(a.fd,c.fd)?1:0;}return 0;}
function FS(){Ej.call(this);this.gj=null;}
function Ic(){var a=this;Ej.call(a);a.gy=null;a.ne=0;}
function AQc(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){if(!YC(a,b))return 0;c=b;return BI(a.gy,c.gy);}return 0;}
function Iw(){var a=this;Ej.call(a);a.hn=null;a.gA=null;}
function AER(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return BI(a.hn,c.hn)&&BI(a.gA,c.gA)?1:0;}return 0;}
var GC=F(Bt);
var WS=F();
function AOo(a,b){Yr(b);}
function WR(){var a=this;B.call(a);a.qG=null;a.qF=null;}
function AGT(a,b){var c,d,e,f,g,h,i;c=a.qG;d=a.qF;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new P_;i.oS=c;i.oR=g;h.then(Bp(i,"f"),Bp(d,"f"));e=e+1|0;}}
var Wb=F();
function AIz(a,b){Yr(b);}
function Wa(){var a=this;B.call(a);a.p3=null;a.p4=null;}
function AJp(a,b){var c,d,e,f,g;c=a.p3;d=a.p4;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=O(Bv,1);g.data[0]=Cj(b.name);T1(f,c,d,g);}
function WN(){var a=this;B.call(a);a.ri=null;a.rj=null;}
function AIl(a,b){var c,d,e,f,g,h;b=a.ri;c=a.rj;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new Mx;h.na=b;h.m_=g;$rt_globals.setTimeout(Bp(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=X0(d.item(f));g=new Mg;g.sI=b;g.sJ=c;$rt_globals.setTimeout(Bp(g,"onTimer"),0);f=f+1|0;}}
function JR(){var a=this;B.call(a);a.sC=null;a.iz=null;a.iK=null;a.fL=null;}
function Jn(){var a=this;B.call(a);a.hd=null;a.f0=null;}
function L8(){var a=this;B.call(a);a.iy=0;a.ji=0;a.fF=0;a.e3=0;}
function WA(){var a=this;B.call(a);a.qr=null;a.qs=null;}
function AE4(a){R5(a.qr,a.qs);}
function WB(){var a=this;B.call(a);a.vn=null;a.vm=null;}
function AI4(a){HH(a.vn,a.vm);}
function ADn(){var a=this;B.call(a);a.g$=null;a.c6=0;}
function AIn(a,b){var c=new ADn();AD9(c,a,b);return c;}
function AD9(a,b,c){a.g$=b;a.c6=c;}
function AMc(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return a.c6==c.c6&&BI(a.g$,c.g$)?1:0;}return 0;}
function MV(){B.call(this);this.ob=null;}
function AKy(a,b){b=b;Mk(a.ob,b);}
function Xv(){B.call(this);this.oi=null;}
function ARm(a,b){b=b;Gw(a.oi,b);}
function EG(){var a=this;B.call(a);a.iu=0;a.sL=0;a.hq=null;a.fS=null;a.qk=null;a.i6=null;}
function AXg(a){var b=new EG();Kr(b,a);return b;}
function Kr(a,b){a.i6=b;a.sL=b.cv;a.hq=null;}
function ER(a){var b,c;if(a.hq!==null)return 1;while(true){b=a.iu;c=a.i6.bV.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.iu=b+1|0;}return 0;}
function Zu(a){var b;if(a.sL==a.i6.cv)return;b=new GC;X(b);K(b);}
function KX(a){var b,c,d,e;Zu(a);if(!ER(a)){b=new L3;X(b);K(b);}b=a.hq;if(b!==null){c=a.fS;if(c!==null)a.qk=c;a.fS=b;a.hq=b.cs;}else{d=a.i6.bV.data;e=a.iu;a.iu=e+1|0;b=d[e];a.fS=b;a.hq=b.cs;a.qk=null;}}
var SO=F(EG);
function OS(a){KX(a);return a.fS.cl;}
var Xj=F(D1);
var QV=F(Bt);
var VK=F(Bt);
function Yn(){B.call(this);this.JY=null;}
function V7(){B.call(this);this.mn=null;}
var AWe=null;function Ta(){var a=new V7();Y6(a);return a;}
function Y6(a){a.mn=BA();}
function DH(a,b,c){OJ(a,CB(b,c));}
function CB(b,c){return AE7(c,b);}
function Fk(a,b,c){KJ(a,b,c,null);}
function KJ(a,b,c,d){OJ(a,ASH(null,b,c,d));}
function OJ(a,b){Bw(a.mn,b);}
function HI(a){return GT(Hl(a.mn,AWe));}
function Yd(){AWe=O(DO,0);}
function Qm(){var a=this;B.call(a);a.nr=null;a.ns=null;}
function ARs(a){var b,c;b=a.nr;c=a.ns;Fr(b.d_,c);}
function Vj(){B.call(this);this.sX=null;}
function EI(){var a=this;B.call(a);a.G=null;a.p=null;a.eU=0.0;}
function ARt(){var a=new EI();Le(a);return a;}
function Le(a){a.G=new Bj;a.p=new Bj;}
function ANP(a){}
function ABx(a){return Cg(0,0);}
function Rn(a,b,c,d){var e;if(!HS(a.G,b)){a.o8(b);Cw(a.G,b);}if(!HS(a.p,c)){a.oQ(c);Cw(a.p,c);}e=a.eU;if(e!==d){a.eU=d;a.qu(e,d);}}
function Dm(a,b){return EW(b,a.G,a.p);}
function APU(a,b){var c,d,e,f;c=a.G;d=c.a;e=c.b;f=a.p;ASt();BB(b,d,e,f,AXh);}
function AKK(a,b){}
function AQr(a,b){}
function ANX(a,b,c){}
function AQE(a){}
function AI8(a,b,c,d){return 0;}
function AFU(a,b,c){return null;}
function ALB(a,b,c){return 0;}
function AP8(a,b){return 0;}
function ANL(a,b,c,d){return 0;}
function IN(){var a=this;EI.call(a);a.cN=null;a.bF=null;a.gu=null;}
function UQ(a,b){a.bF.a=IT(a,b);}
function XG(a,b){a.bF.b=Lu(a,b);}
function Lu(a,b){return Z(0,Ba(b,a.cN.b-a.p.b|0));}
function IT(a,b){return Z(0,Ba(b,a.cN.a-a.p.a|0));}
function Qs(){var a=this;IN.call(a);a.bY=null;a.dw=null;a.gt=null;a.t9=null;a.dN=null;a.bU=null;a.dV=null;a.df=null;a.c5=0;a.ev=0;a.v0=null;a.ds=0;a.d6=0;a.fA=0;a.eY=0;a.eM=0;a.co=0;a.dW=null;a.im=null;a.qW=null;a.g1=null;}
function O6(a){a.c5=Co(2.0,a.bY.b1);}
function WL(a){return a.bU.data.length?0:1;}
function Ty(a){Bg(a.gt,0,0);}
function AP7(a){a.df=C7(a.df,null);Bg(a.gt,0,0);DL(a.g1);a.dW=null;a.bU=AWb;a.dV=null;a.ds=0;a.d6=0;a.fA=0;Tc(a.dw);a.im=null;}
function AG6(a,b,c){Pp(a);O6(a);a.dN=null;a.dW=null;a.ev=0;}
function X$(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;c=LN(a.bY);if(WL(a))return;Ju(a);CO(c,a.dN);d=DN(a);e=X5(c,a.ev);f=Ba(H$(a.p.b,d),a.bU.data.length)+30|0;g=a.qW.vH;h=a.dV;if(h.data.length<f){a.dV=ALI(f,h,a.eY,a.eM,a.bU,a.dW,e,a.g1);Cw(a.gt,M4(a.dW));PJ(a,a.bY.dk);}a.eY=Ba((a.bF.b+a.c5|0)/(DN(a)+a.c5|0)|0,a.bU.data.length-1|0);a.eM=Ba((((a.bF.b+a.dw.bo.b|0)-1|0)+a.c5|0)/(DN(a)+a.c5|0)|0,a.bU.data.length-1|0);if(!a.dV.data.length)return;i=0;j=a.eY;while(j<=a.eM){k=OK(a,j);if
(!(k!==null&&k.fw===a.bU.data[j])){l=a.dV.data;h=a.bU;k=a.dW;m=a.g1;i=j%l.length|0;if(l[i]!==null)Vi(k,l[i],m);l[i]=IR(h.data[j],k,e,m);i=1;}j=j+1|0;}if(i){Cw(a.gt,M4(a.dW));PJ(a,a.bY.dk);}k=a.G;Ux(b,k.a,k.b,a.p);n=g.tR;k=a.G;BB(b,k.a,k.b,a.p,n);k=a.dw.cr;o=k.a;p=k.b;q=Cn(a.bY,2.0);k=a.bY.dm;r=a.eY;j=o+q|0;while(r<=a.eM){m=OK(a,r);s=T(r,DN(a));i=r+1|0;t=s+T(i,a.c5)|0;s=j+a.ds|0;u=s+a.d6|0;v=a.co!=r?0:1;w=!v?n:g.qH;x=!v?g.sY:g.h4;y=!v?g.nY:g.h4;z=!v?g.pb:g.h4;ba=(p+t|0)-a.bF.b|0;if(a.bY.cE){Ew(b,j,ba,m.fN,m.k_,
a.df,x,w);Ew(b,s,ba,m.gq,m.gH,a.df,y,w);Ew(b,u,ba,m.fP,m.hi,a.df,z,w);}else{Es(b,j,ba,m.fN,m.k_,a.df,x,w,0.0);Es(b,s,ba,m.gq,m.gH,a.df,y,w,0.0);Es(b,u,ba,m.fP,m.hi,a.df,z,w,0.0);}s=m.fN.a;bb=j+s|0;Bg(k,Z(0,a.ds-s|0),m.fN.b);BB(b,bb,ba,k,w);s=j+a.ds|0;bb=m.gq.a;bc=s+bb|0;Bg(k,Z(0,a.d6-bb|0),m.gq.b);BB(b,bc,ba,k,w);s=m.fP.a;bd=u+s|0;Bg(k,Z(0,(((a.dw.bo.a-s|0)-a.d6|0)-a.ds|0)-q|0),m.fP.b);BB(b,bd,ba,k,w);be=(o+a.p.a|0)-q|0;Bg(k,q,DN(a)+a.c5|0);BB(b,be,ba,k,n);r=i;}Li(b);}
function PJ(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.gt;c=Fa(b,c.a+150|0,c.b,a.bY.cE);CO(c,a.dN);d=a.dN;e=d.eh;f=e-(e+d.dT)/16.0;g=a.dV.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.fw.iz;k=d.gH;Ev(c,j,k.bp+a.ev,f+k.bG);j=d.fw.iK;d=d.hi;Ev(c,j,d.bp+a.ev,f+d.bG);}i=i+1|0;}a:{d=a.g1;if(d.cy>0){h=d.cv;i=0;b:while(true){g=d.bV.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cl;l=j.cD;k=k;l=l.jg;Ev(c,k,l.bp+a.ev,f+l.bG);j=j.cs;if(h!=d.cv)break b;}i=i+1|0;}b=new GC;X(b);K(b);}}if(a.df===null)a.df=GV(b);Ey(a.df,
c);It(c);}
function OK(a,b){var c;c=a.dV.data;return c[b%c.length|0];}
function ANd(a,b){Cw(a.dw.bo,b);}
function AOU(a,b){Cw(a.dw.cr,b);}
function O9(a){var b,c;Ju(a);b=DN(a);c=a.bU.data.length;b=T(b,c)+T(a.c5,c+1|0)|0;Bg(a.cN,a.p.a,b);}
function Pp(a){var b,c,d,e,f,g,h,i,j;b=LN(a.bY);if(WL(a))return;Ju(a);CO(b,a.dN);c=X5(b,a.ev);d=a.bU.data;e=d.length;f=0;while(f<e){g=d[f];h=Hz(c,g.fL);i=Hz(c,g.iz);j=Hz(c,g.iK);a.ds=Z(a.ds,h);a.d6=Z(a.d6,i);a.fA=Z(a.fA,j);f=f+1|0;}}
function Vh(a,b){I3(a.im);b.sC.s();}
function Si(a,b){var c,d,e;if(!a.dV.data.length)return (-1);c=DN(a);d=(b.b-a.G.b|0)+a.bF.b|0;e=a.c5;e=(d+e|0)/(c+e|0)|0;if(e<a.bU.data.length)return e;return (-1);}
function DN(a){return Fy(a.dN);}
function Ju(a){var b;if(a.dN===null){b=In(a.bY,a.t9);a.dN=b;a.dW=AFg(Fy(b));a.ev=DG(a.dN.l6);}}
function APc(a,b){var c,d,e;a:{switch(b.bO){case 13:Vh(a,a.bU.data[a.co]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.co=a.eY;b=a.gu;c=a.bF;Iq(b,c.a,c.b-(a.p.b/2|0)|0);return 0;case 34:a.co=a.eM;b=a.gu;c=a.bF;Iq(b,c.a,c.b+(a.p.b/2|0)|0);return 0;case 35:case 39:a.co=a.bU.data.length-1|0;break a;case 36:case 37:a.co=0;break a;case 38:d=a.co;e=a.bU.data.length;a.co=((d+e
|0)-1|0)%e|0;break a;case 40:a.co=(a.co+1|0)%a.bU.data.length|0;break a;default:break a;}I3(a.im);return 0;}e=a.co;if(e<=a.eY)Iq(a.gu,a.bF.a,T(e,DN(a))+T(a.co,a.c5)|0);else if(e>=a.eM)Iq(a.gu,a.bF.a,(T(e+1|0,DN(a))+T(a.co+2|0,a.c5)|0)-a.p.b|0);return 0;}
function Qf(){var a=this;B.call(a);a.mX=null;a.mY=null;}
function I3(a){var b,c;b=a.mX;c=a.mY;Fr(b.d_,c);S5(b);}
function PH(){var a=this;EI.call(a);a.mv=null;a.o$=null;a.tV=null;a.bq=null;a.cP=null;a.cX=null;a.uU=0.0;a.vI=null;a.vE=null;}
function AOQ(a){var b;b=a.bq;b.gu=null;a.bq=C7(b,null);}
function AIy(a,b,c,d){Rn(a,b,c,d);Rn(a.bq,b,c,d);if(d!==0.0){O9(a.bq);b=a.bq;c=b.bF;c.a=IT(b,c.a);c=b.bF;c.b=Lu(b,c.b);if(Vu(a))H5(a);else a.cX=null;if(Og(a))G3(a);else a.cP=null;}}
function Iq(a,b,c){var d;d=a.bq;d.bF.a=IT(d,b);d.bF.b=Lu(d,c);if(Vu(a))H5(a);if(Og(a))G3(a);}
function Og(a){var b;b=a.p.b;return b>0&&a.bq.cN.b>b?1:0;}
function Vu(a){var b;b=a.p.a;return b>0&&a.bq.cN.a>b?1:0;}
function H5(a){var b,c,d,e,f,g;b=a.cX;if(b===null)b=UV();a.cX=b;QQ(a,b);c=a.cX;b=a.bq;d=b.bF.a;e=a.G;f=e.a;g=a.p;QI(c,d,f,g.a,b.cN.a,e.b+g.b|0,LP(a));}
function G3(a){var b,c,d,e,f,g;b=a.cP;if(b===null)b=UV();a.cP=b;QQ(a,b);c=a.cP;b=a.bq;d=b.bF.b;e=a.G;f=e.b;g=a.p;WV(c,d,f,g.b,b.cN.b,e.a+g.a|0,LP(a));}
function LP(a){return Co(a.uU,a.eU);}
function QQ(a,b){var c,d;c=a.vI;d=a.vE;if(!(c!==null&&d!==null?(JY(b.hU,c)&&JY(b.hV,d)?1:0):0))Gv(b,c,d);}
function AN3(a,b){var c;X$(a.bq,b);if(!(a.cP===null&&a.cX===null)){Dj(b,1);c=a.cP;if(c!==null)HB(c,b);c=a.cX;if(c!==null)HB(c,b);c=a.cP;if(c!==null)HK(c,b);c=a.cX;if(c!==null)HK(c,b);Dj(b,0);}}
function TZ(a,b){var c,d;a:{b:{c=a.cP;if(!(c!==null&&Hn(c,b))){c=a.cX;if(c===null)break b;if(!Hn(c,b))break b;}d=1;break a;}d=0;}return d;}
function APo(a,b,c,d){var e;if(!TZ(a,b.n)){e=a.bq;if(d==1){c=Si(e,b.n);if(c>=0)Vh(e,e.bU.data[c]);}}return 1;}
function AOT(a,b,c){var d;d=a.cP;if(d!==null){d=HQ(d,b.n,a.o$,1);if(d!==null)return d;}d=a.cX;if(d!==null){d=HQ(d,b.n,a.tV,0);if(d!==null)return d;}d=a.bq;if(!HA(d.dw,b.n)&&!JP(d.dw)){b=d.v0;if(b!==null)I3(b);}return null;}
function AL1(a,b,c){return TZ(a,b.n)?1:0;}
function ALJ(a,b){var c,d,e;c=a.cP;d=c!==null&&H6(c,b.n,a.mv)?1:0;c=a.cX;e=c!==null&&H6(c,b.n,a.mv)?1:0;a:{if(!d&&!e){c=a.bq;d=Si(c,b.n);if(d>=0)c.co=d;if(!(HA(c.dw,c.G)&&Fz(c.bY.dh)?1:0)){d=0;break a;}}d=1;}return d;}
function AHI(a,b,c,d){var e,f;if(!Dm(a,b.n))return 0;e=Co(d*0.25,a.eU);f=Co(c*0.25,a.eU);if(b.bz){f=f+e|0;e=0;}if(a.cP!==null&&e){b=a.bq;XG(b,b.bF.b+e|0);G3(a);}if(a.cX!==null&&f){b=a.bq;UQ(b,b.bF.a+f|0);H5(a);}return 1;}
function AQL(a){var b,c;b=LP(a);c=ABx(a.bq);c.a=Z(c.a,b);c.b=Z(c.b,b);return c;}
var Pl=F();
var AXi=null;function K$(b,c,d){QL(b,c,d,0);}
function QL(b,c,d,e){NU(b,c,d,null,null,e);}
function NU(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;h=Lt(c);i=U(h);j=U(h);k=U(h);l=Cb(b);m=Bz(i+1|0);n=!g?O(CE,i):Zk(b.x,i);c=m.data;b.x=n;o=0;while(o<i){if(g&&o<l){p=4*U(h)|0;h.ei=h.ei+p|0;c[o+1|0]=(c[o]+(BG(b,o)).z|0)+1|0;}else{b.x.data[o]=Ds(Qg(h,d,0));c[o+1|0]=(c[o]+(BG(b,o)).z|0)+1|0;}o=o+1|0;}if(j)b.cJ=ACn(ADw(h));b.g2=m;DL(b.cW);DL(b.cL);q=b.cW;g=0;while(g<k){D_(q,Dr(U(h),U(h)),Dr(U(h),U(h)));g=g+1|0;}r=b.cW;s=b.cL;r=NY(UB(r));while(ER(r)){t=WW(r);q=t.cl;t=t.cD;BK(AXi);u=B_(s,t);if(u===null){u
=BA();D_(s,t,u);}Bw(u,q);}if(s.ks===null){r=new O8;r.vX=s;s.ks=r;}r=s.ks;q=new Rb;Kr(q,r.vX);while(ER(q)){KX(q);r=q.fS.cD;t=AUM;c=O(B,r.k);d=c.data;Hl(r,c);ZL(c,t);g=0;v=d.length;while(g<v){t=d[g];II(r,g);r.ci.data[g]=t;g=g+1|0;}}Qy(h);if(e!==null&&f!==null){r=ALt(e,f);N7(r);b.dX=AGp(r.kT,r.hm);b.cJ=ACn(r.ly);}}
function Ms(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Lt(c);i=U(h);j=U(h);k=U(h)!=1?0:1;l=U(h);m=U(h);n=Wo(b,i);o=Wo(b,j);p=(Hu(BG(b,n.a),n.b)).data[0].l;g=(Hu(BG(b,o.a),o.b)).data[1].l;q=0;r=l-1|0;while(q<l){s=Qg(h,d,i);if(!q)s=Vd(p,s);if(q==r)s=Vd(s,g);t=n.a+q|0;u=Ds(s);c=b.x.data;v=c[t];c[t]=u;if(!k&&G1(v)==G1(u)){w=0;while(w<G1(v)){x=v.l.data[w];o=u.l.data[w];t=x.bX;if(t!=5&&t&&!o.bX){o.bX=t;o.bH=x.bH;}w=w+1|0;}}q=q+1|0;}if(k){if(m){x=ADw(h);v=Jg(i,j,
(-1));NA(b.cJ,v,x);}else if(e!==null&&f!==null){u=ALt(e,f);N7(u);v=Jg(i,j,(-1));NA(b.cJ,v,u.ly);b.dX.ea=u.hm;}}Qy(h);}
function Qg(b,c,d){var e,f,g,h,i,j,k,l;e=U(b);f=O(B$,e);g=f.data;h=0;while(h<e){i=U(b);j=U(b);k=U(b);l=U(b);g[h]=DC(El(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AB_(){AXi=new Wx;}
function Gp(){var a=this;B.call(a);a.dI=0;a.dU=0;a.k2=null;a.l$=0;a.fq=null;}
function APd(a,b,c,d,e,f){var g=new Gp();AKv(g,a,b,c,d,e,f);return g;}
function AKv(a,b,c,d,e,f,g){a.dI=b;a.dU=c;a.k2=Cg(f,g);a.l$=d;a.fq=e;}
var YO=F();
function JH(){return {isCancellationRequested:false};}
function Mm(){var a=this;B.call(a);a.t_=null;a.t$=null;}
function AOu(a,b){V3(b,a.t_,a.t$);}
var ABa=F();
function LT(b,c,d){var e;if(!("then" in b?1:0))c.f(b);else{e=new SV;e.v8=d;b.then(Bp(c,"f"),Bp(e,"f"));}}
function QR(){var a=this;B.call(a);a.sV=null;a.sU=null;}
function AHu(a,b){V3(b,a.sV,a.sU);}
function ZV(){var a=this;GE.call(a);a.GO=null;a.Jc=0;a.Hr=0;a.EE=0;}
function RQ(){var a=this;B.call(a);a.nv=null;a.nw=null;}
function AJe(a){var b,c;b=a.nv;c=a.nw;SD();I2(b,c,AXj);}
function RR(){var a=this;B.call(a);a.q1=null;a.q2=null;}
function AGe(a){var b,c;b=a.q1;c=a.q2;SD();I2(b,c,AXk);}
function RO(){var a=this;B.call(a);a.uL=null;a.uK=null;}
function AE5(a){I2(a.uL,a.uK,null);}
function RP(){var a=this;B.call(a);a.m5=null;a.m6=null;}
function AI_(a){var b,c,d,e,f,g,h,i,j;b=a.m5;c=a.m6;d=Dw(b.be.c);e=FL(b.be.c);d=TN(b.be.ct,d,e);Dx(b.eO.bS);b=b.be;e=D2(b,c);if(d!==null){f=b.c;g=e.V;h=e.bd;e=new Sp;e.nd=b;e.nc=c;b=b.hI;c=d.uw;d=E9(f);f=HC(h,g);i=AKo(!!1);j=JH();c=c.provideReferences(d,f,i,j);d=new PK;d.qj=e;d.qi=b;LT(c,d,b);}}
function QZ(){B.call(this);this.px=null;}
function ANE(a){var b;b=a.px;Dx(b.eO.bS);Gu(b.be,XA(b),0);}
function QY(){B.call(this);this.ve=null;}
function AMb(a){var b;b=a.ve;Dx(b.eO.bS);Gu(b.be,XA(b),1);}
function QX(){B.call(this);this.sM=null;}
function ARg(a){var b,c,d,e;b=a.sM;Dx(b.eO.bS);F9(b);b=b.be;BK(b);c=new XF;c.p5=b;b=Ze(C(301));if(!Ld()){c=new Bt;Bn(c,C(302));LB(b,c);}else{d=$rt_globals.navigator.clipboard.readText();e=new QW;e.nG=c;b=ADR(b);d.then(Bp(e,"f"),Bp(b,"f"));}}
function OW(){var a=this;B.call(a);a.nt=null;a.nu=null;}
function AL9(a){var b,c;b=a.nt;c=a.nu;b=b.be.c;b.f_=c;Io(b);}
var Qd=F(0);
var AWc=null;function ABX(){AWc=new T2;}
function PR(){B.call(this);this.v6=null;}
function AF4(a){var b,c,d;b=a.v6;Dx(b.eO.bS);c=F9(b);b=b.be;BK(b);d=new Rq;d.s5=b;VP(c,d);}
function H2(){var a=this;B.call(a);a.k_=null;a.gH=null;a.hi=null;a.fN=null;a.gq=null;a.fP=null;a.fw=null;}
function ALI(b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r;a:{j=c.data;k=O(H2,b);l=j.length;if(l<=0){if(b<=0)break a;m=k.data;while(true){if(d>e)break a;m[d%m.length|0]=IR(f.data[d],g,h,i);d=d+1|0;}}m=k.data;while(d<=e){n=f.data[d];o=d%m.length|0;p=d%l|0;q=j[p];if(q!==null&&q.fw!==n){Vi(g,q,i);m[o]=IR(n,g,h,i);j[p]=null;}else if(q!==null&&m[o]===null){m[o]=q;j[p]=null;}else m[o]=IR(n,g,h,i);d=d+1|0;}}d=0;while(d<l){r=j[d];if(r!==null){Vi(g,r,i);j[d]=null;}d=d+1|0;}return k;}
function IR(b,c,d,e){var f,g,h;f=new H2;f.fN=new Bj;f.gq=new Bj;f.fP=new Bj;f.fw=b;g=B_(e,b.fL);if(g!==null)g.hh=g.hh+1|0;else{g=new Vo;h=LY(c,b.fL,d);g.hh=1;g.jg=h;D_(e,b.fL,g);}e=g.jg;f.k_=e;Bg(f.fN,e.bc|0,e.bZ|0);e=LY(c,b.iz,d);f.gH=e;Bg(f.gq,e.bc|0,e.bZ|0);b=LY(c,b.iK,d);f.hi=b;Bg(f.fP,b.bc|0,b.bZ|0);return f;}
function Vi(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.fw.fL;f=B_(d,e);g=f.hh-1|0;f.hh=g;if(!g){a:{h=0;i=null;if(e===null){j=d.bV.data[0];while(j!==null){if(j.cl===null)break a;e=j.cs;i=j;j=e;}}else{k=Gi(e);l=d.bV.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.iX==k&&Yp(e,j.cl))){m=j.cs;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cs=j.cs;else d.bV.data[h]=j.cs;d.cv=d.cv+1|0;d.cy=d.cy-1|0;}KC(b,f.jg);}KC(b,c.gH);KC(b,c.hi);}
var Ro=F(0);
function X5(b,c){var d;d=new Vp;d.o5=b;d.o4=c;return d;}
function Yc(){var a=this;B.call(a);a.fz=null;a.gs=0;a.iO=0;a.fX=0;}
function AFg(a){var b=new Yc();AHJ(b,a);return b;}
function AHJ(a,b){a.fz=BA();a.fX=0;a.iO=2048;a.gs=b;}
function LY(a,b,c){var d,e,f,g,h,i,j;d=Hz(c,b);e=a.iO;if(d>e){c=new Bt;f=new R;V(f);BX(Bl(L(Bl(L(f,C(303)),d),C(304)),e),41);Bn(c,S(f));K(c);}if(!a.gs){b=new BD;Bn(b,C(305));K(b);}a:{b=new B4;if(d){b:{c=a.fz;if(c.k>0){c=BP(c);g=d;while(true){if(!BQ(c))break b;f=BS(c);if(f.bc>=g)break;}Cc(b,f.bp,f.bG,g,a.gs);f.bp=f.bp+g;h=f.bc-g;f.bc=h;if(h===0.0)Vm(a.fz,f);break a;}}g=a.fX;i=d;Cc(b,0.0,g,i,a.gs);c=a.fz;f=new B4;h=a.fX;g=a.iO-d|0;j=a.gs;f.bp=i;f.bG=h;f.bc=g;f.bZ=j;Bw(c,f);a.fX=a.fX+a.gs|0;}}return b;}
function KC(a,b){var c,d,e,f,g,h,i;a:{c=new B4;c.bp=b.bp;c.bG=b.bG;c.bc=b.bc;c.bZ=b.bZ;b=a.fz;if(b.k>0){d=BP(b);while(true){if(!BQ(d))break a;e=BS(d);if(e.bG===c.bG){f=e.bp;g=e.bc;h=f+g;i=c.bp;if(h===i){c.bp=f;c.bc=c.bc+g;Q4(d);}else{h=c.bc;if(i+h===f){c.bc=h+g;Q4(d);}}}}}}Bw(a.fz,c);}
function M4(a){return Cg(a.iO,a.fX);}
function Va(){var a=this;EI.call(a);a.e2=null;a.gK=null;a.h0=null;a.eD=null;a.i9=0.0;a.gQ=0;a.h7=0;a.cR=null;a.hX=null;}
function J1(a){var b;b=a.p;return b.a&&b.b?0:1;}
function VQ(a){var b,c;a:{if(a.h0!==null){b=a.gK;if(b!==null&&!Eu(b)){c=0;break a;}}c=1;}return c;}
function Pa(a,b){a.p.b=b;}
function Pu(a,b,c,d,e){var f,g;f=a.e2.dm;Bg(f,d,a.p.b);g=a.G;BB(b,g.a+c|0,g.b,f,e);}
function UP(a){if(a.eD===null)a.eD=In(a.e2,a.h0);}
var WM=F(En);
var AXl=null;function ABO(){AXl=E($rt_floatcls());}
var Ff=F();
var AXm=null;var AXn=null;var AXo=null;var AXp=null;var AUt=null;function AAD(){AXm=G$([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AXn=AF7([BM(1),BM(10),BM(100),BM(1000),BM(10000),BM(100000),BM(1000000),BM(10000000),BM(100000000),BM(1000000000),Dp(1410065408, 2),Dp(1215752192, 23),Dp(3567587328, 232),Dp(1316134912, 2328),Dp(276447232, 23283),Dp(2764472320, 232830),Dp(1874919424, 2328306),Dp(1569325056, 23283064),Dp(2808348672, 232830643)]);AXo=AF7([BM(1),BM(10),BM(100),BM(10000),BM(100000000),
Dp(1874919424, 2328306)]);AXp=new TI;AUt=new UW;}
var Hj=F();
var AXq=0;var AXr=null;var AXs=null;function ABd(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.oj=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.kC=0;c.kf=0;return;}if(f)d=e|8388608;else{d=e<<1;while(AG9(XP(BM(d),BM(8388608)),ACp)){d=d<<1;f=f+(-1)|0;}}g=ABo(AXs,f);if(g<0)g= -g|0;h=AXs.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=He(d,AXr.data[e],i);if(j<AXq){while($rt_ucmp(j,AXq)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=AXs.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=He(d,
AXr.data[e],i);}e=d<<1;d=e+1|0;h=AXr.data;f=g+1|0;k=h[f];l=i-1|0;m=He(d,k,l);n=He(e-1|0,AXr.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?T($rt_udiv(j,o),o):q<0?T($rt_udiv(j,k),k)+k|0:T($rt_udiv((j+(k/2|0)|0),k),k);if(HT(BM(d),BM(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.kC=d;c.kf=g-50|0;}
function He(b,c,d){return ZG(ATr(ALF(XP(BM(b),Dp(4294967295, 0)),XP(BM(c),Dp(4294967295, 0))),32-d|0));}
function ZQ(){AXq=$rt_udiv((-1),10);AXr=G$([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);AXs=G$([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function UW(){var a=this;B.call(a);a.kC=0;a.kf=0;a.oj=0;}
function ABT(){var a=this;B.call(a);a.gW=null;a.ei=0;}
function Lt(a){var b=new ABT();AEi(b,a);return b;}
function AEi(a,b){a.gW=b;a.ei=0;}
function U(a){var b,c;b=a.gW.data;c=a.ei;a.ei=c+1|0;return b[c];}
function Qy(a){var b,c,d,e;if(a.ei!=a.gW.data.length){b=EH();c=a.gW.data.length;d=a.ei;e=new R;V(e);L(Bl(L(Bl(L(e,C(291)),c),C(306)),d),C(307));Ct(b,S(e));}}
function SR(){B.call(this);this.oF=null;}
function APs(a,b,c){var d,e;c=a.oF;d=c.c.f;e=b.bn;b=c.eA;Sa(d.x.data[e],0,b);}
var V2=F(BV);
function DO(){var a=this;B.call(a);a.ke=null;a.gS=null;a.dY=null;a.dj=null;a.iG=null;a.ll=null;a.gD=0;a.lf=null;}
function AE7(a,b){var c=new DO();X3(c,a,b);return c;}
function ASH(a,b,c,d){var e=new DO();AAr(e,a,b,c,d);return e;}
function X3(a,b,c){AAr(a,b,c,null,null);}
function AAr(a,b,c,d,e){a.gS=new B4;a.dY=new Bj;a.dj=new Bj;a.lf=c;a.ll=e;a.ke=b;a.iG=d;}
function Uy(a){return a.iG===null?0:1;}
function M$(){B.call(this);this.o9=null;}
function AJN(a){LV(a.o9);}
function M_(){B.call(this);this.qb=null;}
function APz(a){FT(a.qb);}
function M9(){B.call(this);this.v3=null;}
function AD0(a){J8(a.v3);}
function V_(){B.call(this);this.qQ=null;}
function AKI(a){a.qQ.vG();}
function V$(){B.call(this);this.uj=null;}
function AN1(a){a.uj.v4();}
function Rk(){B.call(this);this.tm=null;}
function AKg(a){var b,c,d,e,f,g,h,i;b=a.tm;c=(b.oG.ec()).data;d=O(DO,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new Tu;i.mO=b;i.mP=h;e[f]=AE7(i,h);f=f+1|0;}return d;}
function Sq(){B.call(this);this.oL=null;}
function AJn(a){a.oL.mu.h_(0);}
function Sr(){B.call(this);this.pX=null;}
function APe(a){a.pX.mu.h_(1);}
function Xi(){B.call(this);this.sD=null;}
function AEe(a){var b,c,d,e,f;b=a.sD.c.f;c=b.b0;d=new R;V(d);Bl(L(d,C(308)),c);$rt_globals.console.info($rt_ustr(S(d)));c=b.iM;d=new R;V(d);Bl(L(d,C(309)),c);$rt_globals.console.info($rt_ustr(S(d)));d=b.cJ;e=GZ(Di(b));Wh(d,0,d.cT,e);b=EX();f=b.kg;f.data[0]=10;N1(b,f,0,1);}
function Xd(){B.call(this);this.om=null;}
function AJq(a){Rs(a.om);}
function Xe(){B.call(this);this.pv=null;}
function AQC(a){SZ(a.pv);}
function Xf(){B.call(this);this.vo=null;}
function AKZ(a){JM(a.vo);}
function Xg(){B.call(this);this.m8=null;}
function AIM(a){W6(a.m8);}
var KN=F(0);
function WI(){var a=this;B.call(a);a.pm=null;a.pn=null;a.po=null;}
function Ob(){B.call(this);this.qU=null;}
function AEP(a,b){var c,d;c=a.qU;d=Hc(b,c.bq.cN.b-c.p.b|0);XG(c.bq,d);G3(c);}
function Oa(){B.call(this);this.r5=null;}
function AE_(a,b){var c,d;c=a.r5;d=Hc(b,c.bq.cN.a-c.p.a|0);UQ(c.bq,d);H5(c);}
var R1=F(En);
var AXt=null;function Lr(b,c){return Long_udiv(b, c);}
function Yk(b,c){return Long_urem(b, c);}
function HT(b,c){return Long_ucompare(b, c);}
function AAa(){AXt=E($rt_longcls());}
var Wx=F();
var EM=F();
var AXu=null;var AXv=null;var AUS=null;var AXw=null;var AXx=null;var AXy=null;function ABc(){AXu=new U1;AXv=new UZ;AUS=new U0;AXw=new UX;AXx=new UY;AXy=new XD;}
function Yw(){var a=this;B.call(a);a.kT=null;a.ly=null;a.hm=null;a.cb=null;a.j0=null;a.kD=null;a.gB=null;a.lx=null;a.lp=null;}
function ALt(a,b){var c=new Yw();APO(c,a,b);return c;}
function APO(a,b,c){a.cb=Lt(b);a.j0=c;}
function N7(a){var b,c,d,e,f,g,h,i;b=U(a.cb);c=new Kq;PG(c);a.hm=c;a.gB=BA();d=0;while(d<b){e=U(a.cb);f=U(a.cb);g=El(a.j0,e,f);D_(a.hm,g,BA());Bw(a.gB,g);d=d+1|0;}c=NY(UB(a.hm));while(ER(c)){Gk((WW(c)).cD,Nc(a));}d=U(a.cb);if(d==(-1))a.kT=null;else{a.kD=O(E3,d);c=new MB;h=a.cb;i=a.j0;g=a.gB;c.c4=h;c.rA=i;c.qP=g;a.lx=c;c=new Q_;c.dG=h;c.ur=i;c.uT=g;a.lp=c;a.kT=QN(a,null);}if(U(a.cb)!=(-1))a.ly=Q9(a.cb,a.kD);}
function QN(a,b){var c,d,e,f,g,h,i,j,k;c=U(a.cb);d=U(a.cb);e=a.lx;f=U(e.c4);g=BA();h=0;while(h<f){Bw(g,MF(e));h=h+1|0;}a:{switch(d){case -1:i=new Kl;i.f3=b;b=AUS;i.ce=b;i.eg=b;i.dQ=b;i.ie=b;i.fU=b;break a;case 0:i=ARA(b);break a;case 1:i=new JS;AA_(i,b);Gk(i.dQ,g);break a;default:}b=new Do;i=new R;V(i);Bl(L(i,C(310)),d);Bn(b,S(i));K(b);}i.dQ=g;b=a.lp;d=U(b.dG);e=BA();j=0;while(j<d){Bw(e,FC(b));j=j+1|0;}i.eg=e;i.ie=Nc(a);d=U(a.cb);b=BA();j=0;while(j<d){e=MF(a.lx);g=FC(a.lp);f=U(a.cb);k=new PI;k.ii=e;k.jc=g;k.pl
=f;Bw(b,k);j=j+1|0;}i.fU=b;j=U(a.cb);i.tu=j==(-1)?null:Bs(a.gB,j);d=U(a.cb);b=BA();j=0;while(j<d){Bw(b,QN(a,i));j=j+1|0;}i.ce=b;a.kD.data[c]=i;return i;}
function Nc(a){var b,c,d,e;b=U(a.cb);c=BA();d=0;while(d<b){e=U(a.cb);Bw(c,Bs(a.gB,e));d=d+1|0;}return c;}
function Uz(){B.call(this);this.qJ=null;}
function AQ5(a,b,c){FX(BG(a.qJ.c.f,b.bn),0,H(c));}
function P_(){var a=this;B.call(a);a.oS=null;a.oR=null;}
function AG5(a,b){a.oS.i(ABq(a.oR,b));}
var Il=F(0);
function Mx(){var a=this;B.call(a);a.na=null;a.m_=null;}
function AJt(a){YA(a.na,a.m_);}
function Mg(){var a=this;B.call(a);a.sI=null;a.sJ=null;}
function AD3(a){a.sI.i(a.sJ);}
function SV(){B.call(this);this.v8=null;}
function AI7(a,b){Lk(a.v8,$rt_str(b.message));}
function Vn(){B.call(this);this.rU=null;}
function AQX(a){return a.rU;}
var T2=F();
var TI=F();
function WQ(){var a=this;B.call(a);a.nl=null;a.nk=null;a.nn=null;a.nm=null;}
function AIS(a,b){var c,d,e,f,g,h,i;c=a.nl;d=a.nk;e=a.nn;f=a.nm;if(!(b.done?1:0)){T1(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new TL;c.p7=d;c.p8=g;c.p9=f;b.then(Bp(c,"f"),Bp(e,"f"));}else{h=f.data;c=g.values();b=Cj(g.name);i=h.length;f=C5(f,i+1|0);f.data[i]=b;T1(c,d,e,f);}}}
var JK=F(Ep);
var U1=F(JK);
var K2=F(DD);
var UZ=F(K2);
var LA=F(Ei);
function AGL(a){var b;b=new D1;X(b);K(b);}
function ALd(a,b){var c;c=new D1;X(c);K(c);}
function AJZ(a,b){b=new D1;X(b);K(b);}
var U0=F(LA);
function ALl(a,b){var c;c=new BV;X(c);K(c);}
function AKs(a){return 0;}
function AHh(a){return AXw;}
function AEY(a){return 1;}
var UX=F();
function AEE(a){return 0;}
function AMH(a){var b;b=new L3;X(b);K(b);}
function AOh(a){var b;b=new Do;X(b);K(b);}
var Ph=F(0);
var UY=F();
var XD=F();
var Z4=F();
function Ld(){return "clipboard" in $rt_globals.navigator?1:0;}
function Q$(){var a=this;B.call(a);a.g=null;a.dp=0;a.j9=null;a.n1=0;a.f9=0;a.ey=0;a.bl=0;a.lb=null;}
function Jw(a){return a.g.by;}
function Xc(a,b,c,d){var e,f,g,h,i,j;e=BA();f=a.dp;g=0;if(c!=f)a.dp=c;a:{switch(b){case -1073741784:h=new RI;c=a.bl+1|0;a.bl=c;E4(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PL;c=a.bl+1|0;a.bl=c;E4(h,c);break a;case -33554392:h=new SP;c=a.bl+1|0;a.bl=c;E4(h,c);break a;default:c=a.f9+1|0;a.f9=c;if(d!==null)h=ATc(c);else{h=new Fd;E4(h,0);g=1;}c=a.f9;if(c<=(-1))break a;if(c>=10)break a;a.j9.data[c]=h;break a;}h=new W7;E4(h,(-1));}while(true){if(EN(a.g)&&a.g.h==(-536870788))
{d=APM(B5(a,2),B5(a,64));while(!C4(a.g)&&EN(a.g)){i=a.g;j=i.h;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cm(d,Bf(i));i=a.g;if(i.Y!=(-536870788))continue;Bf(i);}i=Kh(a,d);i.L(h);}else if(a.g.Y==(-536870788)){i=Gn(h);Bf(a.g);}else{i=OZ(a,h);d=a.g;if(d.Y==(-536870788))Bf(d);}if(i!==null)Bw(e,i);if(C4(a.g))break;if(a.g.Y==(-536870871))break;}if(a.g.kx==(-536870788))Bw(e,Gn(h));if(a.dp!=f&&!g){a.dp=f;d=a.g;d.fO=f;d.h=d.Y;d.er=d.eF;j=d.c0;d.t=j+1|0;d.g5=j;EQ(d);}switch(b){case -1073741784:break;case -536870872:d
=new Mv;Fe(d,e,h);return d;case -268435416:d=new VB;Fe(d,e,h);return d;case -134217688:d=new Rc;Fe(d,e,h);return d;case -67108824:d=new Tg;Fe(d,e,h);return d;case -33554392:d=new Dv;Fe(d,e,h);return d;default:switch(e.k){case 0:break;case 1:return AS1(Bs(e,0),h);default:return ASB(e,h);}return Gn(h);}d=new Iu;Fe(d,e,h);return d;}
function ACs(a){var b,c,d,e,f,g,h;b=Bz(4);c=(-1);d=(-1);if(!C4(a.g)&&EN(a.g)){e=b.data;c=Bf(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B1(3);b=e.data;b[0]=c&65535;f=a.g;g=f.Y;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bf(f);f=a.g;g=f.Y;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bf(f);return APx(e,3);}return APx(e,2);}if(!B5(a,2))return Zt(b[0]);if(B5(a,64))return ANt(b[0]);return AF8(b[0]);}e=b.data;c=1;while(c<4&&!C4(a.g)&&EN(a.g)){h=c+1|0;e[c]=Bf(a.g);c=h;}if(c==1){h=e[0];if(!(AXz.yq(h)==AXA?0:1))return W2(a,e[0]);}if
(!B5(a,2))return ATO(b,c);if(B5(a,64)){f=new WP;NV(f,b,c);return f;}f=new Ts;NV(f,b,c);return f;}
function OZ(a,b){var c,d,e,f,g,h,i;if(EN(a.g)&&!Ji(a.g)&&JQ(a.g.h)){if(B5(a,128)){c=ACs(a);if(!C4(a.g)){d=a.g;e=d.Y;if(!(e==(-536870871)&&!(b instanceof Fd))&&e!=(-536870788)&&!EN(d))c=LQ(a,b,c);}}else if(!N5(a.g)&&!UL(a.g)){f=new N8;V(f);while(!C4(a.g)&&EN(a.g)&&!N5(a.g)&&!UL(a.g)){if(!(!Ji(a.g)&&!a.g.h)&&!(!Ji(a.g)&&JQ(a.g.h))){g=a.g.h;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bf(a.g);if(!LK(e))BX(f,e&65535);else HZ(f,F4(e));}if(!B5(a,2)){c=new RC;Df(c);c.ch
=S(f);e=f.H;c.bw=e;c.kn=ALW(e);c.ld=ALW(c.bw);h=0;while(h<(c.bw-1|0)){Rh(c.kn,I(c.ch,h),(c.bw-h|0)-1|0);Rh(c.ld,I(c.ch,(c.bw-h|0)-1|0),(c.bw-h|0)-1|0);h=h+1|0;}}else if(B5(a,64))c=ATN(f);else{c=new M5;Df(c);c.g9=S(f);c.bw=f.H;}}else c=LQ(a,b,WO(a,b));}else{d=a.g;if(d.Y!=(-536870871))c=LQ(a,b,WO(a,b));else{if(b instanceof Fd)K(B3(C(3),d.by,N4(d)));c=Gn(b);}}a:{if(!C4(a.g)){e=a.g.Y;if(!(e==(-536870871)&&!(b instanceof Fd))&&e!=(-536870788)){f=OZ(a,b);if(c instanceof CP&&!(c instanceof ES)&&!(c instanceof CD)&&
!(c instanceof Eg)){i=c;if(!f.bK(i.E)){c=new VO;ED(c,i.E,i.e,i.hl);c.E.L(c);}}if((f.hr()&65535)!=43)c.L(f);else c.L(f.E);break a;}}if(c===null)return null;c.L(b);}if((c.hr()&65535)!=43)return c;return c.E;}
function LQ(a,b,c){var d,e,f,g,h;d=a.g;e=d.Y;if(c!==null&&!(c instanceof BW)){switch(e){case -2147483606:Bf(d);d=new XK;C1(d,c,b,e);LW();c.L(AXB);return d;case -2147483605:Bf(d);d=new PA;C1(d,c,b,(-2147483606));LW();c.L(AXB);return d;case -2147483585:Bf(d);d=new O_;C1(d,c,b,(-536870849));LW();c.L(AXB);return d;case -2147483525:f=new MZ;d=EY(d);g=a.ey+1|0;a.ey=g;IH(f,d,c,b,(-536870849),g);LW();c.L(AXB);return f;case -1073741782:case -1073741781:Bf(d);d=new Rz;C1(d,c,b,e);c.L(d);return d;case -1073741761:Bf(d);d
=new QA;C1(d,c,b,(-536870849));c.L(b);return d;case -1073741701:h=new Uk;d=EY(d);e=a.ey+1|0;a.ey=e;IH(h,d,c,b,(-536870849),e);c.L(h);return h;case -536870870:case -536870869:Bf(d);if(c.hr()!=(-2147483602)){d=new CD;C1(d,c,b,e);}else if(B5(a,32)){d=new RA;C1(d,c,b,e);}else{d=new Oh;f=Pb(a.dp);C1(d,c,b,e);d.kw=f;}c.L(d);return d;case -536870849:Bf(d);d=new Ft;C1(d,c,b,(-536870849));c.L(b);return d;case -536870789:h=new E0;d=EY(d);e=a.ey+1|0;a.ey=e;IH(h,d,c,b,(-536870849),e);c.L(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bf(d);d=new XN;ED(d,f,b,e);f.e=d;return d;case -2147483585:Bf(d);c=new VJ;ED(c,f,b,(-2147483585));return c;case -2147483525:c=new OY;R4(c,EY(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bf(d);d=new Qu;ED(d,f,b,e);f.e=d;return d;case -1073741761:Bf(d);c=new TF;ED(c,f,b,(-1073741761));return c;case -1073741701:c=new Rd;R4(c,EY(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bf(d);d=AS6(f,b,e);f.e=d;return d;case -536870849:Bf(d);c
=new Eg;ED(c,f,b,(-536870849));return c;case -536870789:return AR5(EY(d),f,b,(-536870789));default:}return c;}
function WO(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fd;while(true){a:{e=a.g;f=e.Y;if((f&(-2147418113))==(-2147483608)){Bf(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dp=g;else{if(f!=(-1073741784))g=a.dp;c=Xc(a,f,g,b);e=a.g;if(e.Y!=(-536870871))K(B3(C(3),e.by,e.c0));Bf(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bf(e);c
=APg(0);break a;case -2147483577:Bf(e);c=new Oc;BO(c);break a;case -2147483558:Bf(e);c=new Ww;h=a.bl+1|0;a.bl=h;ACO(c,h);break a;case -2147483550:Bf(e);c=APg(1);break a;case -2147483526:Bf(e);c=new V6;BO(c);break a;case -536870876:Bf(e);a.bl=a.bl+1|0;if(B5(a,8)){if(B5(a,1)){c=ASn(a.bl);break a;}c=ARH(a.bl);break a;}if(B5(a,1)){c=ASI(a.bl);break a;}c=ATh(a.bl);break a;case -536870866:Bf(e);if(B5(a,32)){c=ATA();break a;}c=AS$(Pb(a.dp));break a;case -536870821:Bf(e);i=0;c=a.g;if(c.Y==(-536870818)){i=1;Bf(c);}c
=Kh(a,FG(a,i));c.L(b);e=a.g;if(e.Y!=(-536870819))K(B3(C(3),e.by,e.c0));OI(e,1);Bf(a.g);break a;case -536870818:Bf(e);a.bl=a.bl+1|0;if(!B5(a,8)){c=new JV;BO(c);break a;}c=new Na;e=Pb(a.dp);BO(c);c.rH=e;break a;case 0:j=e.eF;if(j!==null)c=Kh(a,j);else{if(C4(e)){c=Gn(b);break a;}c=Zt(f&65535);}Bf(a.g);break a;default:break b;}Bf(e);c=new JV;BO(c);break a;}h=(f&2147483647)-48|0;if(a.f9<h)K(B3(C(3),E2(e),N4(a.g)));Bf(e);a.bl=a.bl+1|0;c=!B5(a,2)?ARN(h,a.bl):B5(a,64)?ASo(h,a.bl):ATJ(h,a.bl);a.j9.data[h].j6=1;a.n1=
1;break a;}if(f>=0&&!Gq(e)){c=W2(a,f);Bf(a.g);}else if(f==(-536870788))c=Gn(b);else{if(f!=(-536870871)){b=new If;c=!Gq(a.g)?Wt(f&65535):a.g.eF.cO();e=a.g;IU(b,c,e.by,e.c0);K(b);}if(d){b=new If;e=a.g;IU(b,C(3),e.by,e.c0);K(b);}c=Gn(b);}}}if(f!=(-16777176))break;}return c;}
function FG(a,b){var c,d,e,f,g,h,i,j,$$je;c=APM(B5(a,2),B5(a,64));Ea(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(C4(a.g))break a;h=a.g;b=h.Y;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cm(c,d);d=Bf(a.g);h=a.g;if(h.Y!=(-536870874)){d=38;break d;}if(h.h==(-536870821)){Bf(h);e=1;d=(-1);break d;}Bf(h);if(g){c=FG(a,0);break d;}if(a.g.Y==(-536870819))break d;Wf(c,FG(a,0));break d;case -536870867:if(!g){b=h.h;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bf(h);h=a.g;i=h.Y;if(Gq(h))break c;if
(i<0){j=a.g.h;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(JQ(i))break e;i=i&65535;break e;}catch($$e){$$je=E6($$e);if($$je instanceof DQ){break b;}else{throw $$e;}}}try{BT(c,d,i);}catch($$e){$$je=E6($$e);if($$je instanceof DQ){break b;}else{throw $$e;}}Bf(a.g);d=(-1);break d;}}if(d>=0)Cm(c,d);d=45;Bf(a.g);break d;case -536870821:if(d>=0){Cm(c,d);d=(-1);}Bf(a.g);j=0;h=a.g;if(h.Y==(-536870818)){Bf(h);j=1;}if(!e)XX(c,FG(a,j));else Wf(c,FG(a,j));e=0;Bf(a.g);break d;case -536870819:if(d>=0)Cm(c,
d);d=93;Bf(a.g);break d;case -536870818:if(d>=0)Cm(c,d);d=94;Bf(a.g);break d;case 0:if(d>=0)Cm(c,d);h=a.g.eF;if(h===null)d=0;else{ADQ(c,h);d=(-1);}Bf(a.g);break d;default:}if(d>=0)Cm(c,d);d=Bf(a.g);}g=0;}K(B3(C(3),Jw(a),a.g.c0));}K(B3(C(3),Jw(a),a.g.c0));}if(!f){if(d>=0)Cm(c,d);return c;}K(B3(C(3),Jw(a),a.g.c0-1|0));}
function W2(a,b){var c,d,e;c=LK(b);if(B5(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AF8(b&65535);}if(B5(a,64)&&b>128){if(c){d=new Mn;Df(d);d.bw=2;d.q7=Gc(F$(b));return d;}if(OP(b))return AL2(b&65535);if(!SB(b))return ANt(b&65535);return AJh(b&65535);}}if(!c){if(OP(b))return AL2(b&65535);if(!SB(b))return Zt(b&65535);return AJh(b&65535);}d=new DE;Df(d);d.bw=2;d.fx=b;e=(F4(b)).data;d.jx=e[0];d.ih=e[1];return d;}
function Kh(a,b){var c,d,e;if(!AA7(b)){if(!b.I){if(b.gP())return AIN(b);return APh(b);}if(!b.gP())return AJ0(b);c=new IJ;TS(c,b);return c;}c=Yq(b);d=new MC;BO(d);d.pW=c;d.wE=c.X;if(!b.I){if(b.gP())return ABQ(AIN(G9(b)),d);return ABQ(APh(G9(b)),d);}if(!b.gP())return ABQ(AJ0(G9(b)),d);c=new Qo;e=new IJ;TS(e,G9(b));ADz(c,e,d);return c;}
function Hb(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B5(a,b){return (a.dp&b)!=b?0:1;}
var GH=F();
var Zl=F(GH);
var ACe=F(GH);
function Ui(){Ep.call(this);this.rq=null;}
function NY(a){var b;b=new T5;Kr(b,a.rq);return b;}
function O8(){EA.call(this);this.vX=null;}
var ABZ=F();
function Zx(b,c,d,e,f,g){g.a=c.a;g.b=f;BB(b,d.a,d.b,g,e);BB(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;BB(b,d.a,d.b+f|0,g,e);BB(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function ABv(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;BB(b,j,k,i,h);BB(b,j,k,i,h);BB(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;BB(b,l,j,i,h);BB(b,l,j,i,h);BB(b,l+g|0,j+g|0,i,h);}
var Sv=F(0);
var AWa=null;function ABM(){AWa=new Qz;}
function SW(){var a=this;B.call(a);a.sh=null;a.sg=null;}
function AHm(a,b){var c,d,e,f,g,h,i,j,k;c=a.sh;d=a.sg;if(!((b?1:0)?1:0))$rt_globals.console.info("provider result is undefined");else if(!($rt_globals.Array.isArray(b)?1:0))Lk(d,C(19));else{e=O(Jh,b.length);f=e.data;g=0;h=f.length;while(g<h){i=b[g];j=new Jh;j.gX=new L8;if("kind" in i?1:0)j.yJ=CK(i.kind);XT(i.range,j.gX);f[g]=j;g=g+1|0;}b=c.wu;d=c.ws;k=c.wt;g=c.wr;c=b.c;if(c===d&&c.o==k&&c.r==g){b.jL=ATe(k,g,e);ADB(b);}}}
var Gh=F(0);
function Tm(){B.call(this);this.q4=null;}
function ALo(a,b,c,d){I$(a.q4,b,c.bn,d.bn);}
function Tn(){B.call(this);this.no=null;}
function AIT(a,b,c,d){I$(a.no,b,c.bn,d.bn);}
function HG(){B.call(this);this.mq=0;}
var AXC=null;var AXD=null;var AXE=null;function AMS(a){var b=new HG();ABV(b,a);return b;}
function ABV(a,b){a.mq=b;}
function ON(b){return !b?AXD:AXC;}
function YF(){AXC=AMS(1);AXD=AMS(0);AXE=E($rt_booleancls());}
var Jd=F(0);
var RM=F();
var OA=F(0);
var AAM=F();
function Se(){B.call(this);this.ui=null;}
function AL$(a,b,c,d){HP(a.ui,b,c.bn,d.bn);}
var Sd=F();
function AQn(a,b){return b.dS.c6>=0?0:1;}
var Sc=F();
function ANr(a,b){var c;a:{b:{b=b;if(b!==null){b=b.eH;if(b===null)break b;if(b.c6>=0)break b;}c=1;break a;}c=0;}return c;}
function Sf(){B.call(this);this.ts=null;}
function ALD(a,b,c,d){HP(a.ts,b,c.bn,d.bn);}
function MB(){var a=this;B.call(a);a.c4=null;a.rA=null;a.qP=null;}
function MF(a){var b,c,d,e,f,g,h,i;a:{b=U(a.c4);switch(b){case 3:break;case 5:c=NW(a);d=Lf(a);b=U(a.c4);e=U(a.c4);f=U(a.c4);g=BA();h=0;while(h<f){Bw(g,Lf(a));h=h+1|0;}i=new LJ;AB7(i,c,d,b);i.js=g;i.mR=e;break a;default:c=new Do;d=new R;V(d);Bl(L(d,C(311)),b);Bn(c,S(d));K(c);}i=AS7(NW(a),Lf(a),U(a.c4));}return i;}
function NW(a){var b,c;b=U(a.c4);c=U(a.c4);return AIn(El(a.rA,b,c),U(a.c4));}
function Lf(a){var b;b=U(a.c4);if(b==(-1))return null;return Bs(a.qP,b);}
function Q_(){var a=this;B.call(a);a.dG=null;a.ur=null;a.uT=null;}
function FC(a){var b,c,d,e,f;a:{b:{b=U(a.dG);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Nd(a);d=PQ(a);b=U(a.dG);e=Sw(a);f=new Ic;KM(f,c,d,2);f.ne=b;f.gy=e;break a;case 4:c=FC(a);d=FC(a);f=new Iw;KM(f,c.eH,c.fd,9);f.hn=c;f.gA=d;break a;case 5:f=ARW(Nd(a),PQ(a),U(a.dG));break a;case 9:c=Sw(a);f=new FS;d=!DI(c)&&Bs(c,0)!==null?(Bs(c,0)).fd:null;KM(f,null,null,7);f.gj=BA();c=BP(c);while(BQ(c)){e=BS(c);if(!(e instanceof FS))Bw(f.gj,e);else{e=e;Gk(f.gj,e.gj);}}f.fd=d;break a;default:break b;}f
=null;break a;}c=new Do;d=new R;V(d);Bl(L(d,C(312)),b);Bn(c,S(d));K(c);}return f;}
function Nd(a){var b,c;b=U(a.dG);c=U(a.dG);return AIn(El(a.ur,b,c),U(a.dG));}
function PQ(a){var b;b=U(a.dG);if(b==(-1))return null;return Bs(a.uT,b);}
function Sw(a){var b,c,d;b=U(a.dG);c=BA();d=0;while(d<b){Bw(c,FC(a));d=d+1|0;}return c;}
function BC(){var a=this;B.call(a);a.e=null;a.b6=0;a.pp=null;a.hl=0;}
var AUp=0;function BO(a){var b;b=AUp;AUp=b+1|0;a.pp=KW(b);}
function Kd(a,b){var c;c=AUp;AUp=c+1|0;a.pp=KW(c);a.e=b;}
function Hf(a,b,c,d){var e;e=d.u;while(true){if(b>e)return (-1);if(a.d(b,c,d)>=0)break;b=b+1|0;}return b;}
function Hp(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.d(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AGr(a,b){a.hl=b;}
function AFO(a){return a.hl;}
function AOC(a){return a.e;}
function APC(a,b){a.e=b;}
function APB(a,b){return 1;}
function AQw(a){return null;}
function IC(a){var b;a.b6=1;b=a.e;if(b!==null){if(!b.b6){b=b.fa();if(b!==null){a.e.b6=1;a.e=b;}a.e.eb();}else if(b instanceof F6&&b.ee.j6)a.e=b.e;}}
function ADF(){AUp=1;}
var UC=F(0);
function Vp(){var a=this;B.call(a);a.o5=null;a.o4=0.0;}
function Hz(a,b){return Kf(a.o5,b,a.o4*2.0+0.875);}
function Xw(){var a=this;B.call(a);a.or=null;a.oo=null;a.on=0;a.oq=0;}
function AMd(a,b){b=b;DW(a.or,a.oo,b,a.on,a.oq);}
function Xx(){var a=this;B.call(a);a.wd=null;a.wc=null;a.wb=0;a.wa=0;}
function AHW(a,b){b=b;DW(a.wd,a.wc,b,a.wb,a.wa);}
var Qz=F();
function ALV(a,b){}
function CC(){var a=this;BC.call(a);a.j6=0;a.dt=0;}
var AXB=null;function LW(){LW=Bm(CC);AHD();}
function ATc(a){var b=new CC();E4(b,a);return b;}
function E4(a,b){LW();BO(a);a.dt=b;}
function AFe(a,b,c,d){var e,f;e=H4(d,a.dt);Jb(d,a.dt,b);f=a.e.d(b,c,d);if(f<0)Jb(d,a.dt,e);return f;}
function AK1(a){return a.dt;}
function AFA(a,b){return 0;}
function AHD(){var b;b=new N9;BO(b);AXB=b;}
function Gj(){var a=this;B.call(a);a.W=null;a.fO=0;a.eu=0;a.uR=0;a.kx=0;a.Y=0;a.h=0;a.r$=0;a.eF=null;a.er=null;a.t=0;a.hD=0;a.c0=0;a.g5=0;a.by=null;}
var AXF=null;var AXz=null;var AXA=0;function OI(a,b){if(b>0&&b<3)a.eu=b;if(b==1){a.h=a.Y;a.er=a.eF;a.t=a.g5;a.g5=a.c0;EQ(a);}}
function Gq(a){return a.eF===null?0:1;}
function Ji(a){return a.er===null?0:1;}
function Bf(a){EQ(a);return a.kx;}
function EY(a){var b;b=a.eF;EQ(a);return b;}
function EQ(a){var b,c,d,e,f,g,h,$$je;a.kx=a.Y;a.Y=a.h;a.eF=a.er;a.c0=a.g5;a.g5=a.t;while(true){b=0;c=a.t>=a.W.data.length?0:Lb(a);a.h=c;a.er=null;if(a.eu==4){if(c!=92)return;c=a.t;d=a.W.data;c=c>=d.length?0:d[BU(a)];a.h=c;switch(c){case 69:break;default:a.h=92;a.t=a.hD;return;}a.eu=a.uR;a.h=a.t>(a.W.data.length-2|0)?0:Lb(a);}a:{c=a.h;if(c!=92){e=a.eu;if(e==1)switch(c){case 36:a.h=(-536870876);break a;case 40:if(a.W.data[a.t]!=63){a.h=(-2147483608);break a;}BU(a);c=a.W.data[a.t];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.h=(-134217688);BU(a);break b;default:K(B3(C(3),E2(a),a.t));}a.h=(-67108824);BU(a);}else{switch(c){case 33:break;case 60:BU(a);c=a.W.data[a.t];e=1;break b;case 61:a.h=(-536870872);BU(a);break b;case 62:a.h=(-33554392);BU(a);break b;default:f=ADH(a);a.h=f;if(f<256){a.fO=f;f=f<<16;a.h=f;a.h=(-1073741784)|f;break b;}f=f&255;a.h=f;a.fO=f;f=f<<16;a.h=f;a.h=(-16777176)|f;break b;}a.h=(-268435416);BU(a);}}if(!e)break;}break a;case 41:a.h=(-536870871);break a;case 42:case 43:case 63:e=a.t;d
=a.W.data;switch(e>=d.length?42:d[e]){case 43:a.h=c|(-2147483648);BU(a);break a;case 63:a.h=c|(-1073741824);BU(a);break a;default:}a.h=c|(-536870912);break a;case 46:a.h=(-536870866);break a;case 91:a.h=(-536870821);OI(a,2);break a;case 93:if(e!=2)break a;a.h=(-536870819);break a;case 94:a.h=(-536870818);break a;case 123:a.er=ADe(a,c);break a;case 124:a.h=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.h=(-536870874);break a;case 45:a.h=(-536870867);break a;case 91:a.h=(-536870821);break a;case 93:a.h
=(-536870819);break a;case 94:a.h=(-536870818);break a;default:}}else{c=a.t>=(a.W.data.length-2|0)?(-1):Lb(a);c:{a.h=c;switch(c){case -1:K(B3(C(3),E2(a),a.t));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.h
=ABB(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eu!=1)break a;a.h=(-2147483648)|c;break a;case 65:a.h=(-2147483583);break a;case 66:a.h=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:K(B3(C(3),E2(a),a.t));case 68:case 83:case 87:case 100:case 115:case 119:a.er=RY(El(a.W,
a.hD,1),0);a.h=0;break a;case 71:a.h=(-2147483577);break a;case 80:case 112:break c;case 81:a.uR=a.eu;a.eu=4;b=1;break a;case 90:a.h=(-2147483558);break a;case 97:a.h=7;break a;case 98:a.h=(-2147483550);break a;case 99:c=a.t;d=a.W.data;if(c>=(d.length-2|0))K(B3(C(3),E2(a),a.t));a.h=d[BU(a)]&31;break a;case 101:a.h=27;break a;case 102:a.h=12;break a;case 110:a.h=10;break a;case 114:a.h=13;break a;case 116:a.h=9;break a;case 117:a.h=PE(a,4);break a;case 120:a.h=PE(a,2);break a;case 122:a.h=(-2147483526);break a;default:}break a;}g
=ABj(a);h=0;if(a.h==80)h=1;try{a.er=RY(g,h);}catch($$e){$$je=E6($$e);if($$je instanceof IM){K(B3(C(3),E2(a),a.t));}else{throw $$e;}}a.h=0;}}if(b)continue;else break;}}
function ABj(a){var b,c,d,e,f,g;b=new R;FD(b,10);c=a.t;d=a.W;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=El(d,BU(a),1);f=new R;V(f);L(L(f,C(313)),b);return S(f);}BU(a);c=0;a:{while(true){g=a.t;d=a.W.data;if(g>=(d.length-2|0))break;c=d[BU(a)];if(c==125)break a;BX(b,c);}}if(c!=125)K(B3(C(3),a.by,a.t));}if(!b.H)K(B3(C(3),a.by,a.t));f=S(b);if(H(f)==1){b=new R;V(b);L(L(b,C(313)),f);return S(b);}b:{c:{if(H(f)>3){if(J4(f,C(313)))break c;if(J4(f,C(314)))break c;}break b;}f=D3(f,2);}return f;}
function ADe(a,b){var c,d,e,f,g,$$je;c=new R;FD(c,4);d=(-1);e=2147483647;a:{while(true){f=a.t;g=a.W.data;if(f>=g.length)break a;b=g[BU(a)];if(b==125)break a;if(b==44&&d<0)try{d=I7(Jj(c),10);ADi(c,0,YG(c));continue;}catch($$e){$$je=E6($$e);if($$je instanceof C2){break;}else{throw $$e;}}BX(c,b&65535);}K(B3(C(3),a.by,a.t));}if(b!=125)K(B3(C(3),a.by,a.t));if(c.H>0)b:{try{e=I7(Jj(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=E6($$e);if($$je instanceof C2){}else{throw $$e;}}K(B3(C(3),a.by,a.t));}else if(d<0)K(B3(C(3),
a.by,a.t));if((d|e|(e-d|0))<0)K(B3(C(3),a.by,a.t));b=a.t;g=a.W.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.h=(-2147483525);BU(a);break c;case 63:a.h=(-1073741701);BU(a);break c;default:}a.h=(-536870789);}c=new MN;c.et=d;c.eo=e;return c;}
function E2(a){return a.by;}
function C4(a){return !a.Y&&!a.h&&a.t==a.r$&&!Gq(a)?1:0;}
function JQ(b){return b<0?0:1;}
function EN(a){return !C4(a)&&!Gq(a)&&JQ(a.Y)?1:0;}
function N5(a){var b;b=a.Y;return b<=56319&&b>=55296?1:0;}
function UL(a){var b;b=a.Y;return b<=57343&&b>=56320?1:0;}
function SB(b){return b<=56319&&b>=55296?1:0;}
function OP(b){return b<=57343&&b>=56320?1:0;}
function PE(a,b){var c,d,e,f,$$je;c=new R;FD(c,b);d=a.W.data.length-2|0;e=0;while(true){f=BE(e,b);if(f>=0)break;if(a.t>=d)break;BX(c,a.W.data[BU(a)]);e=e+1|0;}if(!f)a:{try{b=I7(Jj(c),16);}catch($$e){$$je=E6($$e);if($$je instanceof C2){break a;}else{throw $$e;}}return b;}K(B3(C(3),a.by,a.t));}
function ABB(a){var b,c,d,e,f,g;b=3;c=1;d=a.W.data;e=d.length-2|0;f=Ue(d[a.t],8);switch(f){case -1:break;default:if(f>3)b=2;BU(a);a:{while(true){if(c>=b)break a;g=a.t;if(g>=e)break a;g=Ue(a.W.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BU(a);c=c+1|0;}}return f;}K(B3(C(3),a.by,a.t));}
function ADH(a){var b,c,d,e;b=1;c=a.fO;a:while(true){d=a.t;e=a.W.data;if(d>=e.length)K(B3(C(3),a.by,d));b:{c:{switch(e[d]){case 41:BU(a);return c|256;case 45:if(!b)K(B3(C(3),a.by,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BU(a);}BU(a);return c;}
function BU(a){var b,c,d,e,f;b=a.t;a.hD=b;if(!(a.fO&4))a.t=b+1|0;else{c=a.W.data.length-2|0;a.t=b+1|0;a:while(true){d=a.t;if(d<c&&Ra(a.W.data[d])){a.t=a.t+1|0;continue;}d=a.t;if(d>=c)break;e=a.W.data;if(e[d]!=35)break;a.t=d+1|0;while(true){f=a.t;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.t=f+1|0;}}}return a.hD;}
function ACY(b){return AXF.Ef(b);}
function Lb(a){var b,c,d,e;b=a.W.data[BU(a)];if(Cs(b)){c=a.hD+1|0;d=a.W.data;if(c<d.length){e=d[c];if(CQ(e)){BU(a);return Ec(b,e);}}}return b;}
function N4(a){return a.c0;}
function If(){var a=this;BD.call(a);a.x$=null;a.xJ=null;a.qT=0;}
function B3(a,b,c){var d=new If();IU(d,a,b,c);return d;}
function IU(a,b,c,d){X(a);a.qT=(-1);a.x$=b;a.xJ=c;a.qT=d;}
var AC_=F();
function Wy(){B.call(this);this.uz=null;}
function AMW(a,b){var c,d;c=a.uz;d=0;while(d<b.length){YA(c,b[d]);d=d+1|0;}}
var ABb=F(0);
function TL(){var a=this;B.call(a);a.p7=null;a.p8=null;a.p9=null;}
function AMy(a,b){a.p7.i(ARJ(a.p8,b,a.p9));}
var RI=F(CC);
function AEI(a,b,c,d){var e;e=a.dt;BJ(d,e,b-C8(d,e)|0);return a.e.d(b,c,d);}
function AN$(a,b){return 0;}
var W7=F(CC);
function AGo(a,b,c,d){return b;}
var PL=F(CC);
function AFJ(a,b,c,d){if(C8(d,a.dt)!=b)b=(-1);return b;}
function SP(){CC.call(this);this.nJ=0;}
function AEQ(a,b,c,d){var e;e=a.dt;BJ(d,e,b-C8(d,e)|0);a.nJ=b;return b;}
function AMJ(a,b){return 0;}
var Fd=F(CC);
function APV(a,b,c,d){if(d.je!=1&&b!=d.u)return (-1);d.iJ=1;Jb(d,0,b);return b;}
function BW(){BC.call(this);this.bw=0;}
function Df(a){BO(a);a.bw=1;}
function AQ4(a,b,c,d){var e;if((b+a.bQ()|0)>d.u){d.dd=1;return (-1);}e=a.bk(b,c);if(e<0)return (-1);return a.e.d(b+e|0,c,d);}
function AO2(a){return a.bw;}
function AJC(a,b){return 1;}
var ACN=F(BW);
function Gn(a){var b=new ACN();ALb(b,a);return b;}
function ALb(a,b){Kd(a,b);a.bw=1;a.hl=1;a.bw=0;}
function AOs(a,b,c){return 0;}
function AHH(a,b,c,d){var e,f,g;e=d.u;f=d.cB;while(true){g=BE(b,e);if(g>0)return (-1);if(g<0&&CQ(I(c,b))&&b>f&&Cs(I(c,b-1|0))){b=b+1|0;continue;}if(a.e.d(b,c,d)>=0)break;b=b+1|0;}return b;}
function AGh(a,b,c,d,e){var f,g;f=e.u;g=e.cB;while(true){if(c<b)return (-1);if(c<f&&CQ(I(d,c))&&c>g&&Cs(I(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.d(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AEN(a,b){return 0;}
function BR(){var a=this;BC.call(a);a.bv=null;a.ee=null;a.R=0;}
function ASB(a,b){var c=new BR();Fe(c,a,b);return c;}
function Fe(a,b,c){BO(a);a.bv=b;a.ee=c;a.R=c.dt;}
function AIu(a,b,c,d){var e,f,g,h;if(a.bv===null)return (-1);e=Fj(d,a.R);De(d,a.R,b);f=a.bv.k;g=0;while(true){if(g>=f){De(d,a.R,e);return (-1);}h=(Bs(a.bv,g)).d(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AMB(a,b){a.ee.e=b;}
function AKt(a,b){var c;a:{c=a.bv;if(c!==null){c=BP(c);while(true){if(!BQ(c))break a;if(!(BS(c)).bK(b))continue;else return 1;}}}return 0;}
function ANf(a,b){return H4(b,a.R)>=0&&Fj(b,a.R)==H4(b,a.R)?0:1;}
function AGc(a){var b,c,d,e;a.b6=1;b=a.ee;if(b!==null&&!b.b6)IC(b);a:{b=a.bv;if(b!==null){c=b.k;d=0;while(true){if(d>=c)break a;b=Bs(a.bv,d);e=b.fa();if(e===null)e=b;else{b.b6=1;Fm(a.bv,d);Ry(a.bv,d,e);}if(!e.b6)e.eb();d=d+1|0;}}}if(a.e!==null)IC(a);}
var Iu=F(BR);
function AMj(a,b,c,d){var e,f,g,h;e=C8(d,a.R);BJ(d,a.R,b);f=a.bv.k;g=0;while(true){if(g>=f){BJ(d,a.R,e);return (-1);}h=(Bs(a.bv,g)).d(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ANH(a,b){return !C8(b,a.R)?0:1;}
var Dv=F(Iu);
function AGQ(a,b,c,d){var e,f,g;e=C8(d,a.R);BJ(d,a.R,b);f=a.bv.k;g=0;while(g<f){if((Bs(a.bv,g)).d(b,c,d)>=0)return a.e.d(a.ee.nJ,c,d);g=g+1|0;}BJ(d,a.R,e);return (-1);}
function ANo(a,b){a.e=b;}
var Mv=F(Dv);
function AMv(a,b,c,d){var e,f;e=a.bv.k;f=0;while(f<e){if((Bs(a.bv,f)).d(b,c,d)>=0)return a.e.d(b,c,d);f=f+1|0;}return (-1);}
function APJ(a,b){return 0;}
var VB=F(Dv);
function AFv(a,b,c,d){var e,f;e=a.bv.k;f=0;while(true){if(f>=e)return a.e.d(b,c,d);if((Bs(a.bv,f)).d(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AO8(a,b){return 0;}
var Rc=F(Dv);
function AF_(a,b,c,d){var e,f,g,h;e=a.bv.k;f=d.iP?0:d.cB;a:{g=a.e.d(b,c,d);if(g>=0){BJ(d,a.R,b);h=0;while(true){if(h>=e)break a;if((Bs(a.bv,h)).ca(f,b,c,d)>=0){BJ(d,a.R,(-1));return g;}h=h+1|0;}}}return (-1);}
function ARk(a,b){return 0;}
var Tg=F(Dv);
function AEj(a,b,c,d){var e,f;e=a.bv.k;BJ(d,a.R,b);f=0;while(true){if(f>=e)return a.e.d(b,c,d);if((Bs(a.bv,f)).ca(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ANW(a,b){return 0;}
function F6(){BR.call(this);this.cK=null;}
function AS1(a,b){var c=new F6();Zj(c,a,b);return c;}
function Zj(a,b,c){BO(a);a.cK=b;a.ee=c;a.R=c.dt;}
function AEB(a,b,c,d){var e,f;e=Fj(d,a.R);De(d,a.R,b);f=a.cK.d(b,c,d);if(f>=0)return f;De(d,a.R,e);return (-1);}
function AKN(a,b,c,d){var e;e=a.cK.b8(b,c,d);if(e>=0)De(d,a.R,e);return e;}
function AOc(a,b,c,d,e){var f;f=a.cK.ca(b,c,d,e);if(f>=0)De(e,a.R,f);return f;}
function AKn(a,b){return a.cK.bK(b);}
function AMF(a){var b;b=new MU;Zj(b,a.cK,a.ee);a.e=b;return b;}
function AQz(a){var b;a.b6=1;b=a.ee;if(b!==null&&!b.b6)IC(b);b=a.cK;if(b!==null&&!b.b6){b=b.fa();if(b!==null){a.cK.b6=1;a.cK=b;}a.cK.eb();}}
var AC1=F();
function XT(b,c){c.fF=b.startColumn-1|0;c.e3=b.startLineNumber-1|0;c.iy=b.endColumn-1|0;c.ji=b.endLineNumber-1|0;}
function AEc(b,c,d,e){return {endColumn:b,endLineNumber:c,startColumn:d,startLineNumber:e};}
var Gm=F();
function Q(){var a=this;Gm.call(a);a.X=0;a.b5=0;a.F=null;a.jj=null;a.j3=null;a.I=0;}
var AXG=null;function OG(){OG=Bm(Q);AGC();}
function Bq(a){var b;OG();b=new Ws;b.y=Bz(64);a.F=b;}
function AFx(a){return null;}
function AE2(a){return a.F;}
function AA7(a){var b,c,d,e,f;if(!a.b5)b=GQ(a.F,0)>=2048?0:1;else{a:{c=a.F;b=0;d=c.bg;if(b<d){e=c.y.data;f=(e[0]^(-1))>>>0|0;if(f)b=HW(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+HW(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AIL(a){return a.I;}
function AOY(a){return a;}
function Yq(a){var b,c;if(a.j3===null){b=a.eE();c=new VN;c.yw=a;c.oc=b;Bq(c);a.j3=c;Ea(c,a.b5);}return a.j3;}
function G9(a){var b,c;if(a.jj===null){b=a.eE();c=new VL;c.ya=a;c.ug=b;c.u3=a;Bq(c);a.jj=c;Ea(c,a.X);a.jj.I=a.I;}return a.jj;}
function AQt(a){return 0;}
function Ea(a,b){var c;c=a.X;if(c^b){a.X=c?0:1;a.b5=a.b5?0:1;}if(!a.I)a.I=1;return a;}
function AHN(a){return a.X;}
function JL(b,c){OG();return b.j(c);}
function HV(b,c){var d,e;OG();if(b.c9()!==null&&c.c9()!==null){b=b.c9();c=c.c9();d=Ba(b.y.data.length,c.y.data.length);e=0;a:{while(e<d){if(b.y.data[e]&c.y.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function RY(b,c){var d,e,f;OG();d=0;while(true){ANU();e=AXH.data;if(d>=e.length){f=new IM;Bn(f,C(3));f.yO=C(3);f.yA=b;K(f);}e=e[d].data;if(BF(b,e[0]))break;d=d+1|0;}return ACj(e[1],c);}
function AGC(){var b;b=new GF;ANU();AXG=b;}
function Y$(){var a=this;Q.call(a);a.lm=0;a.nH=0;a.f$=0;a.kX=0;a.dH=0;a.e4=0;a.B=null;a.br=null;}
function C9(){var a=new Y$();ARc(a);return a;}
function APM(a,b){var c=new Y$();AGq(c,a,b);return c;}
function ARc(a){Bq(a);a.B=ARl();}
function AGq(a,b,c){Bq(a);a.B=ARl();a.lm=b;a.nH=c;}
function Cm(a,b){a:{if(a.lm){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dH){L9(a.B,Hb(b&65535));break a;}K6(a.B,Hb(b&65535));break a;}if(a.nH&&b>128){a.f$=1;b=Gc(F$(b));}}}if(!(!SB(b)&&!OP(b))){if(a.kX)L9(a.F,b-55296|0);else K6(a.F,b-55296|0);}if(a.dH)L9(a.B,b);else K6(a.B,b);if(!a.I&&LK(b))a.I=1;return a;}
function ADQ(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(a.kX){if(!b.b5)Fu(a.F,b.eE());else CY(a.F,b.eE());}else if(!b.b5)Fs(a.F,b.eE());else{E7(a.F,b.eE());CY(a.F,b.eE());a.b5=a.b5?0:1;a.kX=1;}if(!a.e4&&b.c9()!==null){if(a.dH){if(!b.X)Fu(a.B,b.c9());else CY(a.B,b.c9());}else if(!b.X)Fs(a.B,b.c9());else{E7(a.B,b.c9());CY(a.B,b.c9());a.X=a.X?0:1;a.dH=1;}}else{c=a.X;d=a.br;if(d!==null){if(!c){e=new Ow;e.wX=a;e.vB=c;e.uM=d;e.ux=b;Bq(e);a.br=e;}else{e=new Ox;e.yX=a;e.ry=c;e.ra=d;e.qw=b;Bq(e);a.br=e;}}else{if(c&&!a.dH&&
LO(a.B)){d=new Ot;d.xI=a;d.rn=b;Bq(d);a.br=d;}else if(!c){d=new Or;d.kE=a;d.jJ=c;d.o_=b;Bq(d);a.br=d;}else{d=new Os;d.lD=a;d.jS=c;d.uC=b;Bq(d);a.br=d;}a.e4=1;}}return a;}
function BT(a,b,c){var d,e,f,g,h;if(b>c){d=new BD;X(d);K(d);}a:{b:{if(!a.lm){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cm(a,b);b=b+1|0;}}if(!a.dH)Hw(a.B,b,c+1|0);else{d=a.B;c=c+1|0;if(b>c){d=new BV;X(d);K(d);}e=d.bg;if(b<e){f=Ba(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.y.data;h[g]=h[g]&(HR(d,b)|Hm(d,f));}else{h=d.y.data;h[g]=h[g]&HR(d,b);e=g+1|0;while(e<c){d.y.data[e]=0;e=e+1|0;}if(f&31){h=d.y.data;h[c]=h[c]&Hm(d,f);}}GI(d);}}}}return a;}
function XX(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.f$)a.f$=1;c=a.b5;if(!(c^b.b5)){if(!c)Fs(a.F,b.F);else CY(a.F,b.F);}else if(c)Fu(a.F,b.F);else{E7(a.F,b.F);CY(a.F,b.F);a.b5=1;}if(!a.e4&&CI(b)!==null){c=a.X;if(!(c^b.X)){if(!c)Fs(a.B,CI(b));else CY(a.B,CI(b));}else if(c)Fu(a.B,CI(b));else{E7(a.B,CI(b));CY(a.B,CI(b));a.X=1;}}else{c=a.X;d=a.br;if(d!==null){if(!c){e=new Ol;e.wK=a;e.tB=c;e.uB=d;e.vf=b;Bq(e);a.br=e;}else{e=new O1;e.w6=a;e.vb=c;e.m$=d;e.nR=b;Bq(e);a.br=e;}}else{if(!a.dH&&LO(a.B)){if(!c){d=new Ou;d.yZ
=a;d.qe=b;Bq(d);a.br=d;}else{d=new Ov;d.w9=a;d.uZ=b;Bq(d);a.br=d;}}else if(!c){d=new Oy;d.tM=a;d.rQ=b;d.re=c;Bq(d);a.br=d;}else{d=new Oz;d.sa=a;d.st=b;d.sP=c;Bq(d);a.br=d;}a.e4=1;}}}
function Wf(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.f$)a.f$=1;c=a.b5;if(!(c^b.b5)){if(!c)CY(a.F,b.F);else Fs(a.F,b.F);}else if(!c)Fu(a.F,b.F);else{E7(a.F,b.F);CY(a.F,b.F);a.b5=0;}if(!a.e4&&CI(b)!==null){c=a.X;if(!(c^b.X)){if(!c)CY(a.B,CI(b));else Fs(a.B,CI(b));}else if(!c)Fu(a.B,CI(b));else{E7(a.B,CI(b));CY(a.B,CI(b));a.X=0;}}else{c=a.X;d=a.br;if(d!==null){if(!c){e=new On;e.wW=a;e.tQ=c;e.oa=d;e.rw=b;Bq(e);a.br=e;}else{e=new Oo;e.xd=a;e.s7=c;e.mZ=d;e.tz=b;Bq(e);a.br=e;}}else{if(!a.dH&&LO(a.B)){if(!c){d=new Oj;d.xa
=a;d.pI=b;Bq(d);a.br=d;}else{d=new Ok;d.yT=a;d.pS=b;Bq(d);a.br=d;}}else if(!c){d=new Op;d.wo=a;d.vw=b;d.sl=c;Bq(d);a.br=d;}else{d=new Oi;d.sj=a;d.te=b;d.rz=c;Bq(d);a.br=d;}a.e4=1;}}}
function CN(a,b){var c;c=a.br;if(c!==null)return a.X^c.j(b);return a.X^Db(a.B,b);}
function CI(a){if(!a.e4)return a.B;return null;}
function AHC(a){return a.F;}
function APq(a){var b,c;if(a.br!==null)return a;b=CI(a);c=new Om;c.wF=a;c.io=b;Bq(c);return Ea(c,a.X);}
function ALK(a){var b,c,d;b=new R;V(b);c=GQ(a.B,0);while(c>=0){HZ(b,F4(c));BX(b,124);c=GQ(a.B,c+1|0);}d=b.H;if(d>0)VD(b,d-1|0);return S(b);}
function AHQ(a){return a.f$;}
function IM(){var a=this;Bt.call(a);a.yO=null;a.yA=null;}
function DP(){BC.call(this);this.E=null;}
function C1(a,b,c,d){Kd(a,c);a.E=b;a.hl=d;}
function ARb(a){return a.E;}
function AOd(a,b){return !a.E.bK(b)&&!a.e.bK(b)?0:1;}
function APN(a,b){return 1;}
function AK9(a){var b;a.b6=1;b=a.e;if(b!==null&&!b.b6){b=b.fa();if(b!==null){a.e.b6=1;a.e=b;}a.e.eb();}b=a.E;if(b!==null){if(!b.b6){b=b.fa();if(b!==null){a.E.b6=1;a.E=b;}a.E.eb();}else if(b instanceof F6&&b.ee.j6)a.E=b.e;}}
function CP(){DP.call(this);this.S=null;}
function AS6(a,b,c){var d=new CP();ED(d,a,b,c);return d;}
function ED(a,b,c,d){C1(a,b,c,d);a.S=b;}
function AEm(a,b,c,d){var e,f;e=0;a:{while((b+a.S.bQ()|0)<=d.u){f=a.S.bk(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.d(b,c,d);if(f>=0)break;b=b-a.S.bQ()|0;e=e+(-1)|0;}return f;}
function ES(){CP.call(this);this.jd=null;}
function AR5(a,b,c,d){var e=new ES();R4(e,a,b,c,d);return e;}
function R4(a,b,c,d,e){ED(a,c,d,e);a.jd=b;}
function AFh(a,b,c,d){var e,f,g,h,i;e=a.jd;f=e.et;g=e.eo;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.S.bQ()|0)>d.u)break a;i=a.S.bk(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.d(b,c,d);if(i>=0)break;b=b-a.S.bQ()|0;h=h+(-1)|0;}return i;}if((b+a.S.bQ()|0)>d.u){d.dd=1;return (-1);}i=a.S.bk(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CD=F(DP);
function AEA(a,b,c,d){var e;if(!a.E.D(d))return a.e.d(b,c,d);e=a.E.d(b,c,d);if(e>=0)return e;return a.e.d(b,c,d);}
var Eg=F(CP);
function AKT(a,b,c,d){var e;e=a.E.d(b,c,d);if(e<0)e=a.e.d(b,c,d);return e;}
function ARn(a,b){a.e=b;a.E.L(b);}
var VO=F(CP);
function AQW(a,b,c,d){while((b+a.S.bQ()|0)<=d.u&&a.S.bk(b,c)>0){b=b+a.S.bQ()|0;}return a.e.d(b,c,d);}
function ALE(a,b,c,d){var e,f,g;e=a.e.b8(b,c,d);if(e<0)return (-1);f=e-a.S.bQ()|0;while(f>=b&&a.S.bk(f,c)>0){g=f-a.S.bQ()|0;e=f;f=g;}return e;}
function W(){var a=this;B.call(a);a.lI=null;a.kz=null;}
function ACj(a,b){if(!b&&a.lI===null)a.lI=a.A();else if(b&&a.kz===null)a.kz=Ea(a.A(),1);if(b)return a.kz;return a.lI;}
var C2=F(BD);
function MN(){var a=this;Gm.call(a);a.et=0;a.eo=0;}
function ALO(a){var b,c,d,e,f;b=a.et;c=a.eo;d=c!=2147483647?KW(c):C(3);e=new R;V(e);BX(e,123);f=Bl(e,b);BX(f,44);BX(L(f,d),125);return S(e);}
var N9=F(BC);
function AJ4(a,b,c,d){return b;}
function AMz(a,b){return 0;}
function Ws(){var a=this;B.call(a);a.y=null;a.bg=0;}
function ARl(){var a=new Ws();AF1(a);return a;}
function AF1(a){a.y=Bz(0);}
function K6(a,b){var c,d;c=b/32|0;if(b>=a.bg){H1(a,c+1|0);a.bg=b+1|0;}d=a.y.data;d[c]=d[c]|1<<(b%32|0);}
function Hw(a,b,c){var d,e,f,g,h;d=BE(b,c);if(d>0){e=new BV;X(e);K(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bg){H1(a,f+1|0);a.bg=c;}if(d==f){g=a.y.data;g[d]=g[d]|Hm(a,b)&HR(a,c);}else{g=a.y.data;g[d]=g[d]|Hm(a,b);h=d+1|0;while(h<f){a.y.data[h]=(-1);h=h+1|0;}if(c&31){g=a.y.data;g[f]=g[f]|HR(a,c);}}}
function Hm(a,b){return (-1)<<(b%32|0);}
function HR(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function L9(a,b){var c,d,e,f;c=b/32|0;d=a.y.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bg-1|0))GI(a);}}
function Db(a,b){var c,d;c=b/32|0;d=a.y.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function GQ(a,b){var c,d,e,f;c=a.bg;if(b>=c)return (-1);d=b/32|0;e=a.y.data;f=e[d]>>>(b%32|0)|0;if(f)return HW(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+HW(e[f])|0;f=f+1|0;}return (-1);}
function H1(a,b){var c;c=a.y.data.length;if(c>=b)return;c=Z((b*3|0)/2|0,(c*2|0)+1|0);a.y=Is(a.y,c);}
function GI(a){var b,c,d;b=(a.bg+31|0)/32|0;a.bg=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Nz(a.y.data[c]);if(d<32)break;c=c+(-1)|0;a.bg=a.bg-32|0;}a.bg=a.bg-d|0;}}
function CY(a,b){var c,d,e,f;c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&b.y.data[d];d=d+1|0;}while(true){f=a.y.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bg=Ba(a.bg,b.bg);GI(a);}
function Fu(a,b){var c,d,e;c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&(b.y.data[d]^(-1));d=d+1|0;}GI(a);}
function Fs(a,b){var c,d,e;c=Z(a.bg,b.bg);a.bg=c;H1(a,(c+31|0)/32|0);c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]|b.y.data[d];d=d+1|0;}}
function E7(a,b){var c,d,e;c=Z(a.bg,b.bg);a.bg=c;H1(a,(c+31|0)/32|0);c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]^b.y.data[d];d=d+1|0;}GI(a);}
function LO(a){return a.bg?0:1;}
function MC(){var a=this;BR.call(a);a.pW=null;a.wE=0;}
function Qo(){var a=this;BR.call(a);a.l7=null;a.lF=null;}
function ABQ(a,b){var c=new Qo();ADz(c,a,b);return c;}
function ADz(a,b,c){BO(a);a.l7=b;a.lF=c;}
function AFc(a,b,c,d){var e,f,g,h,i;e=a.l7.d(b,c,d);if(e<0)a:{f=a.lF;g=d.cB;e=d.u;h=b+1|0;e=BE(h,e);if(e>0){d.dd=1;e=(-1);}else{i=I(c,b);if(!f.pW.j(i))e=(-1);else{if(Cs(i)){if(e<0&&CQ(I(c,h))){e=(-1);break a;}}else if(CQ(i)&&b>g&&Cs(I(c,b-1|0))){e=(-1);break a;}e=f.e.d(h,c,d);}}}if(e>=0)return e;return (-1);}
function AMh(a,b){a.e=b;a.lF.e=b;a.l7.L(b);}
function AFQ(a,b){return 1;}
function AFw(a,b){return 1;}
function Dl(){var a=this;BR.call(a);a.dy=null;a.xD=0;}
function AJ0(a){var b=new Dl();TS(b,a);return b;}
function TS(a,b){BO(a);a.dy=b.iW();a.xD=b.X;}
function AHs(a,b,c,d){var e,f,g,h;e=d.u;if(b<e){f=b+1|0;g=I(c,b);if(a.j(g)){h=a.e.d(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=I(c,f);if(G2(g,f)&&a.j(Ec(g,f)))return a.e.d(b,c,d);}}return (-1);}
function AH6(a,b){return a.dy.j(b);}
function AE8(a,b){if(b instanceof DE)return JL(a.dy,b.fx);if(b instanceof D$)return JL(a.dy,b.c7);if(b instanceof Dl)return HV(a.dy,b.dy);if(!(b instanceof DZ))return 1;return HV(a.dy,b.eR);}
function AJR(a){return a.dy;}
function AON(a,b){a.e=b;}
function AHE(a,b){return 1;}
var IJ=F(Dl);
function AJD(a,b){return a.dy.j(Gc(F$(b)));}
function YZ(){var a=this;BW.call(a);a.qL=null;a.xp=0;}
function AIN(a){var b=new YZ();ALX(b,a);return b;}
function ALX(a,b){Df(a);a.qL=b.iW();a.xp=b.X;}
function AJ5(a,b,c){return !a.qL.j(EJ(Ef(I(c,b))))?(-1):1;}
function DZ(){var a=this;BW.call(a);a.eR=null;a.xU=0;}
function APh(a){var b=new DZ();AM3(b,a);return b;}
function AM3(a,b){Df(a);a.eR=b.iW();a.xU=b.X;}
function Md(a,b,c){return !a.eR.j(I(c,b))?(-1):1;}
function AMD(a,b){if(b instanceof D$)return JL(a.eR,b.c7);if(b instanceof DZ)return HV(a.eR,b.eR);if(!(b instanceof Dl)){if(!(b instanceof DE))return 1;return 0;}return HV(a.eR,b.dy);}
function OH(){var a=this;BR.call(a);a.gw=null;a.lU=null;a.jb=0;}
function APx(a,b){var c=new OH();AEC(c,a,b);return c;}
function AEC(a,b,c){BO(a);a.gw=b;a.jb=c;}
function AKR(a,b){a.e=b;}
function QB(a){if(a.lU===null)a.lU=GZ(a.gw);return a.lU;}
function AEa(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.u;f=Bz(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=I(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?G$([k,l]):G$([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.jb;if(b!=n)return (-1);while(true){if(l>=n)return a.e.d(i,c,d);if(m[l]!=a.gw.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=I(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=I(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.jb==3){k=f[0];m=a.gw.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.d(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.jb==2){b=f[0];m=a.gw.data;if(b==m[0]&&f[1]==m[1]){b=a.e.d(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AFG(a,b){return b instanceof OH&&!BF(QB(b),QB(a))?0:1;}
function APv(a,b){return 1;}
function D$(){BW.call(this);this.c7=0;}
function Zt(a){var b=new D$();AM6(b,a);return b;}
function AM6(a,b){Df(a);a.c7=b;}
function AJM(a){return 1;}
function AIH(a,b,c){return a.c7!=I(c,b)?(-1):1;}
function AHp(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return Hf(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=HU(c,a.c7,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.d(b,c,d)>=0)break;}return f;}
function AJU(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hp(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=G5(d,a.c7,c);if(f<0)break a;if(f<b)break a;if(a.e.d(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function APl(a,b){if(b instanceof D$)return b.c7!=a.c7?0:1;if(!(b instanceof DZ)){if(b instanceof Dl)return b.j(a.c7);if(!(b instanceof DE))return 1;return 0;}return Md(b,0,Wt(a.c7))<=0?0:1;}
function ADl(){BW.call(this);this.mN=0;}
function ANt(a){var b=new ADl();ALz(b,a);return b;}
function ALz(a,b){Df(a);a.mN=EJ(Ef(b));}
function AD4(a,b,c){return a.mN!=EJ(Ef(I(c,b)))?(-1):1;}
function XZ(){var a=this;BW.call(a);a.vl=0;a.n9=0;}
function AF8(a){var b=new XZ();ANS(b,a);return b;}
function ANS(a,b){Df(a);a.vl=b;a.n9=Hb(b);}
function AEs(a,b,c){return a.vl!=I(c,b)&&a.n9!=I(c,b)?(-1):1;}
function E1(){var a=this;BR.call(a);a.hf=0;a.kk=null;a.jM=null;a.jE=0;}
function ATO(a,b){var c=new E1();NV(c,a,b);return c;}
function NV(a,b,c){BO(a);a.hf=1;a.jM=b;a.jE=c;}
function AQx(a,b){a.e=b;}
function AMi(a,b,c,d){var e,f,g,h,i,j,k,l;e=Bz(4);f=d.u;if(b>=f)return (-1);g=JX(a,b,c,f);h=b+a.hf|0;i=ACY(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dc(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=JX(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(ACY(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.hf|0;if(h>=f){b=k;break a;}g=JX(a,h,c,f);b=k;}}}if(b!=a.jE)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.d(h,c,d);if(i[g]!=a.jM.data[g])break;g=g+1|0;}return (-1);}
function We(a){var b,c;if(a.kk===null){b=new R;V(b);c=0;while(c<a.jE){HZ(b,F4(a.jM.data[c]));c=c+1|0;}a.kk=S(b);}return a.kk;}
function JX(a,b,c,d){var e,f,g;a.hf=1;if(b>=(d-1|0))e=I(c,b);else{d=b+1|0;e=I(c,b);f=I(c,d);if(G2(e,f)){g=B1(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Cs(g[0])&&CQ(g[1])?Ec(g[0],g[1]):g[0];a.hf=2;}}return e;}
function AJ6(a,b){return b instanceof E1&&!BF(We(b),We(a))?0:1;}
function ANq(a,b){return 1;}
var WP=F(E1);
var Ts=F(E1);
var XK=F(CD);
function AGu(a,b,c,d){var e;while(true){e=a.E.d(b,c,d);if(e<=0)break;b=e;}return a.e.d(b,c,d);}
var PA=F(CD);
function ALr(a,b,c,d){var e;e=a.E.d(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.E.d(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.d(b,c,d);}
var Ft=F(CD);
function AOL(a,b,c,d){var e;if(!a.E.D(d))return a.e.d(b,c,d);e=a.E.d(b,c,d);if(e>=0)return e;return a.e.d(b,c,d);}
function AP0(a,b){a.e=b;a.E.L(b);}
var O_=F(Ft);
function AJP(a,b,c,d){var e;e=a.E.d(b,c,d);if(e<=0)e=b;return a.e.d(e,c,d);}
function ALS(a,b){a.e=b;}
function E0(){var a=this;CD.call(a);a.fH=null;a.dl=0;}
function AXI(a,b,c,d,e){var f=new E0();IH(f,a,b,c,d,e);return f;}
function IH(a,b,c,d,e,f){C1(a,c,d,e);a.fH=b;a.dl=f;}
function ARi(a,b,c,d){var e,f;e=MH(d,a.dl);if(!a.E.D(d))return a.e.d(b,c,d);if(e>=a.fH.eo)return a.e.d(b,c,d);f=a.dl;e=e+1|0;DX(d,f,e);f=a.E.d(b,c,d);if(f>=0){DX(d,a.dl,0);return f;}f=a.dl;e=e+(-1)|0;DX(d,f,e);if(e>=a.fH.et)return a.e.d(b,c,d);DX(d,a.dl,0);return (-1);}
var MZ=F(E0);
function AJa(a,b,c,d){var e,f,g;e=0;f=a.fH.eo;a:{while(true){g=a.E.d(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fH.et)return (-1);return a.e.d(b,c,d);}
var Rz=F(CD);
function AQJ(a,b,c,d){var e;if(!a.E.D(d))return a.e.d(b,c,d);e=a.e.d(b,c,d);if(e>=0)return e;return a.E.d(b,c,d);}
var QA=F(Ft);
function AFR(a,b,c,d){var e;if(!a.E.D(d))return a.e.d(b,c,d);e=a.e.d(b,c,d);if(e<0)e=a.E.d(b,c,d);return e;}
var Uk=F(E0);
function AEW(a,b,c,d){var e,f,g;e=MH(d,a.dl);if(!a.E.D(d))return a.e.d(b,c,d);f=a.fH;if(e>=f.eo){DX(d,a.dl,0);return a.e.d(b,c,d);}if(e<f.et){DX(d,a.dl,e+1|0);g=a.E.d(b,c,d);}else{g=a.e.d(b,c,d);if(g>=0){DX(d,a.dl,0);return g;}DX(d,a.dl,e+1|0);g=a.E.d(b,c,d);}return g;}
var RA=F(DP);
function AQ9(a,b,c,d){var e;e=d.u;if(e>b)return a.e.ca(b,e,c,d);return a.e.d(b,c,d);}
function AOZ(a,b,c,d){var e;e=d.u;if(a.e.ca(b,e,c,d)>=0)return b;return (-1);}
function Oh(){DP.call(this);this.kw=null;}
function AMG(a,b,c,d){var e,f;e=d.u;f=Um(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.ca(b,e,c,d);return a.e.d(b,c,d);}
function AEg(a,b,c,d){var e,f,g,h;e=d.u;f=a.e.b8(b,c,d);if(f<0)return (-1);g=Um(a,f,e,c);if(g>=0)e=g;g=Z(f,a.e.ca(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.kw.hj(I(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Um(a,b,c,d){while(true){if(b>=c)return (-1);if(a.kw.hj(I(d,b)))break;b=b+1|0;}return b;}
var Ex=F();
var AXJ=null;var AXK=null;function Pb(b){var c;if(!(b&1)){c=AXK;if(c!==null)return c;c=new US;AXK=c;return c;}c=AXJ;if(c!==null)return c;c=new UR;AXJ=c;return c;}
var XN=F(CP);
function AEX(a,b,c,d){var e;a:{while(true){if((b+a.S.bQ()|0)>d.u)break a;e=a.S.bk(b,c);if(e<1)break;b=b+e|0;}}return a.e.d(b,c,d);}
var VJ=F(Eg);
function ALn(a,b,c,d){var e;if((b+a.S.bQ()|0)<=d.u){e=a.S.bk(b,c);if(e>=1)b=b+e|0;}return a.e.d(b,c,d);}
var OY=F(ES);
function AOe(a,b,c,d){var e,f,g,h,i;e=a.jd;f=e.et;g=e.eo;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.S.bQ()|0)>d.u)break a;i=a.S.bk(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.d(b,c,d);}if((b+a.S.bQ()|0)>d.u){d.dd=1;return (-1);}i=a.S.bk(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Qu=F(CP);
function AMx(a,b,c,d){var e;while(true){e=a.e.d(b,c,d);if(e>=0)break;if((b+a.S.bQ()|0)<=d.u){e=a.S.bk(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var TF=F(Eg);
function AE6(a,b,c,d){var e;e=a.e.d(b,c,d);if(e>=0)return e;return a.E.d(b,c,d);}
var Rd=F(ES);
function AOw(a,b,c,d){var e,f,g,h,i,j;e=a.jd;f=e.et;g=e.eo;h=0;while(true){if(h>=f){a:{while(true){i=a.e.d(b,c,d);if(i>=0)break;if((b+a.S.bQ()|0)<=d.u){i=a.S.bk(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.S.bQ()|0)>d.u){d.dd=1;return (-1);}j=a.S.bk(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var JV=F(BC);
function AKr(a,b,c,d){if(b&&!(d.e7&&b==d.cB))return (-1);return a.e.d(b,c,d);}
function AJo(a,b){return 0;}
function ZD(){BC.call(this);this.uO=0;}
function APg(a){var b=new ZD();AJG(b,a);return b;}
function AJG(a,b){BO(a);a.uO=b;}
function AFt(a,b,c,d){var e,f,g;e=b<d.u?I(c,b):32;f=!b?32:I(c,b-1|0);g=d.iP?0:d.cB;return (e!=32&&!QF(a,e,b,g,c)?0:1)^(f!=32&&!QF(a,f,b-1|0,g,c)?0:1)^a.uO?(-1):a.e.d(b,c,d);}
function AFF(a,b){return 0;}
function QF(a,b,c,d,e){var f;if(!I4(b)&&b!=95){a:{if(Ch(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=I(e,c);if(I4(f))return 0;if(Ch(f)!=6)return 1;}}return 1;}return 0;}
var Oc=F(BC);
function AJF(a,b,c,d){if(b!=d.hp)return (-1);return a.e.d(b,c,d);}
function ARe(a,b){return 0;}
function Ww(){BC.call(this);this.fR=0;}
function ATh(a){var b=new Ww();ACO(b,a);return b;}
function ACO(a,b){BO(a);a.fR=b;}
function AM$(a,b,c,d){var e,f,g;e=!d.e7?H(c):d.u;if(b>=e){BJ(d,a.fR,0);return a.e.d(b,c,d);}f=e-b|0;if(f==2&&I(c,b)==13&&I(c,b+1|0)==10){BJ(d,a.fR,0);return a.e.d(b,c,d);}a:{if(f==1){g=I(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BJ(d,a.fR,0);return a.e.d(b,c,d);}
function AGk(a,b){var c;c=!C8(b,a.fR)?0:1;BJ(b,a.fR,(-1));return c;}
var V6=F(BC);
function AMf(a,b,c,d){if(b<(d.iP?H(c):d.u))return (-1);d.dd=1;d.yk=1;return a.e.d(b,c,d);}
function AD2(a,b){return 0;}
function Na(){BC.call(this);this.rH=null;}
function AGa(a,b,c,d){a:{if(b!=d.u){if(!b)break a;if(d.e7&&b==d.cB)break a;if(a.rH.s_(I(c,b-1|0),I(c,b)))break a;}return (-1);}return a.e.d(b,c,d);}
function AIk(a,b){return 0;}
var ADb=F(BR);
function ATA(){var a=new ADb();AL4(a);return a;}
function AL4(a){BO(a);}
function AQO(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.dd=1;return (-1);}g=I(c,b);if(Cs(g)){h=b+2|0;if(h<=e&&G2(g,I(c,f)))return a.e.d(h,c,d);}return a.e.d(f,c,d);}
function AFI(a,b){a.e=b;}
function ALY(a){return (-2147483602);}
function AFH(a,b){return 1;}
function Y7(){BR.call(this);this.k5=null;}
function AS$(a){var b=new Y7();AGi(b,a);return b;}
function AGi(a,b){BO(a);a.k5=b;}
function AL_(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.dd=1;return (-1);}g=I(c,b);if(Cs(g)){b=b+2|0;if(b<=e){h=I(c,f);if(G2(g,h))return a.k5.hj(Ec(g,h))?(-1):a.e.d(b,c,d);}}return a.k5.hj(g)?(-1):a.e.d(f,c,d);}
function AN6(a,b){a.e=b;}
function ADY(a){return (-2147483602);}
function AQ3(a,b){return 1;}
function ACW(){BC.call(this);this.g_=0;}
function ASI(a){var b=new ACW();AIf(b,a);return b;}
function AIf(a,b){BO(a);a.g_=b;}
function AJ$(a,b,c,d){var e;e=!d.e7?H(c):d.u;if(b>=e){BJ(d,a.g_,0);return a.e.d(b,c,d);}if((e-b|0)==1&&I(c,b)==10){BJ(d,a.g_,1);return a.e.d(b+1|0,c,d);}return (-1);}
function AIe(a,b){var c;c=!C8(b,a.g_)?0:1;BJ(b,a.g_,(-1));return c;}
function AA$(){BC.call(this);this.he=0;}
function ASn(a){var b=new AA$();AIO(b,a);return b;}
function AIO(a,b){BO(a);a.he=b;}
function AMe(a,b,c,d){if((!d.e7?H(c)-b|0:d.u-b|0)<=0){BJ(d,a.he,0);return a.e.d(b,c,d);}if(I(c,b)!=10)return (-1);BJ(d,a.he,1);return a.e.d(b+1|0,c,d);}
function AH1(a,b){var c;c=!C8(b,a.he)?0:1;BJ(b,a.he,(-1));return c;}
function XW(){BC.call(this);this.fj=0;}
function ARH(a){var b=new XW();ARj(b,a);return b;}
function ARj(a,b){BO(a);a.fj=b;}
function AJd(a,b,c,d){var e,f,g;e=!d.e7?H(c)-b|0:d.u-b|0;if(!e){BJ(d,a.fj,0);return a.e.d(b,c,d);}if(e<2){f=I(c,b);g=97;}else{f=I(c,b);g=I(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BJ(d,a.fj,0);return a.e.d(b,c,d);case 13:if(g!=10){BJ(d,a.fj,0);return a.e.d(b,c,d);}BJ(d,a.fj,0);return a.e.d(b,c,d);default:}return (-1);}
function AGn(a,b){var c;c=!C8(b,a.fj)?0:1;BJ(b,a.fj,(-1));return c;}
function GG(){var a=this;BR.call(a);a.nx=0;a.gr=0;}
function ATJ(a,b){var c=new GG();OO(c,a,b);return c;}
function OO(a,b,c){BO(a);a.nx=b;a.gr=c;}
function AE1(a,b,c,d){var e,f,g,h;e=FN(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=0;while(true){if(f>=H(e)){BJ(d,a.gr,H(e));return a.e.d(b+H(e)|0,c,d);}g=I(e,f);h=b+f|0;if(g!=I(c,h)&&Hb(I(e,f))!=I(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ANl(a,b){a.e=b;}
function FN(a,b){var c,d;c=a.nx;d=Fj(b,c);c=H4(b,c);return (c|d|(c-d|0))>=0&&c<=H(b.k8)?B9(b.k8,d,c):null;}
function ANJ(a,b){var c;c=!C8(b,a.gr)?0:1;BJ(b,a.gr,(-1));return c;}
var AC2=F(GG);
function ARN(a,b){var c=new AC2();APP(c,a,b);return c;}
function APP(a,b,c){OO(a,b,c);}
function AGt(a,b,c,d){var e,f;e=FN(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=!TR(c,e,b)?(-1):H(e);if(f<0)return (-1);BJ(d,a.gr,f);return a.e.d(b+f|0,c,d);}return (-1);}
function APF(a,b,c,d){var e,f;e=FN(a,d);f=d.cB;if(e!==null&&(b+H(e)|0)<=f){while(true){if(b>f)return (-1);b=PD(c,e,b);if(b<0)return (-1);if(a.e.d(b+H(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AEL(a,b,c,d,e){var f,g;f=FN(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=PP(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.d(g+H(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ALe(a,b){return 1;}
var AAl=F(GG);
function ASo(a,b){var c=new AAl();AIb(c,a,b);return c;}
function AIb(a,b,c){OO(a,b,c);}
function AKH(a,b,c,d){var e,f;e=FN(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=0;while(true){if(f>=H(e)){BJ(d,a.gr,H(e));return a.e.d(b+H(e)|0,c,d);}if(EJ(Ef(I(e,f)))!=EJ(Ef(I(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var N8=F(FV);
function AHR(a,b,c,d,e){MR(a,b,c,d,e);return a;}
function AFy(a,b,c,d){WD(a,b,c,d);return a;}
function AF0(a,b){Ja(a,b);}
function AO1(a,b,c){WU(a,b,c);return a;}
function RC(){var a=this;BW.call(a);a.ch=null;a.kn=null;a.ld=null;}
function AGO(a,b,c){return !JU(a,c,b)?(-1):a.bw;}
function AFp(a,b,c,d){var e,f,g;e=d.u;while(true){if(b>e)return (-1);f=I(a.ch,a.bw-1|0);a:{while(true){g=a.bw;if(b>(e-g|0)){b=(-1);break a;}g=I(c,(b+g|0)-1|0);if(g==f&&JU(a,c,b))break;b=b+SI(a.kn,g)|0;}}if(b<0)return (-1);if(a.e.d(b+a.bw|0,c,d)>=0)break;b=b+1|0;}return b;}
function AIi(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=I(a.ch,0);g=(H(d)-c|0)-a.bw|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=I(d,c);if(g==f&&JU(a,d,c))break;c=c-SI(a.ld,g)|0;}}if(c<0)return (-1);if(a.e.d(c+a.bw|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AIU(a,b){var c;if(b instanceof D$)return b.c7!=I(a.ch,0)?0:1;if(b instanceof DZ)return Md(b,0,B9(a.ch,0,1))<=0?0:1;if(!(b instanceof Dl)){if(!(b instanceof DE))return 1;return H(a.ch)>1&&b.fx==Ec(I(a.ch,0),I(a.ch,1))?1:0;}a:{b:{b=b;if(!b.j(I(a.ch,0))){if(H(a.ch)<=1)break b;if(!b.j(Ec(I(a.ch,0),I(a.ch,1))))break b;}c=1;break a;}c=0;}return c;}
function JU(a,b,c){var d;d=0;while(d<a.bw){if(I(b,d+c|0)!=I(a.ch,d))return 0;d=d+1|0;}return 1;}
function XV(){BW.call(this);this.iS=null;}
function ATN(a){var b=new XV();APm(b,a);return b;}
function APm(a,b){var c,d,e;Df(a);c=new R;V(c);d=0;while(true){e=BE(d,b.H);if(e>=0){a.iS=S(c);a.bw=c.H;return;}if(d<0)break;if(e>=0)break;BX(c,EJ(Ef(b.M.data[d])));d=d+1|0;}b=new BV;X(b);K(b);}
function AKP(a,b,c){var d;d=0;while(true){if(d>=H(a.iS))return H(a.iS);if(I(a.iS,d)!=EJ(Ef(I(c,b+d|0))))break;d=d+1|0;}return (-1);}
function M5(){BW.call(this);this.g9=null;}
function AOi(a,b,c){var d,e,f;d=0;while(true){if(d>=H(a.g9))return H(a.g9);e=I(a.g9,d);f=b+d|0;if(e!=I(c,f)&&Hb(I(a.g9,d))!=I(c,f))break;d=d+1|0;}return (-1);}
var GF=F();
var AXL=null;var AXM=null;var AXH=null;function ANU(){ANU=Bm(GF);AG_();}
function AG_(){AXL=ATp();AXM=ASA();AXH=G($rt_arraycls(B),[G(B,[C(315),ATK()]),G(B,[C(316),ARE()]),G(B,[C(317),ATl()]),G(B,[C(318),ATv()]),G(B,[C(319),AXM]),G(B,[C(320),ASN()]),G(B,[C(321),ASx()]),G(B,[C(322),ARO()]),G(B,[C(323),ARM()]),G(B,[C(324),ART()]),G(B,[C(325),AR7()]),G(B,[C(326),ARR()]),G(B,[C(327),AS5()]),G(B,[C(328),ARz()]),G(B,[C(329),ATq()]),G(B,[C(330),AR6()]),G(B,[C(331),ASL()]),G(B,[C(332),AR4()]),G(B,[C(333),ASM()]),G(B,[C(334),ARV()]),G(B,[C(335),ATz()]),G(B,[C(336),ARY()]),G(B,[C(337),ASS()]),
G(B,[C(338),ATk()]),G(B,[C(339),ATi()]),G(B,[C(340),ATw()]),G(B,[C(341),ARU()]),G(B,[C(342),AS9()]),G(B,[C(343),AXL]),G(B,[C(344),ASX()]),G(B,[C(345),ARP()]),G(B,[C(346),AXL]),G(B,[C(347),ARu()]),G(B,[C(348),AXM]),G(B,[C(349),ASe()]),G(B,[C(350),N(0,127)]),G(B,[C(351),N(128,255)]),G(B,[C(352),N(256,383)]),G(B,[C(353),N(384,591)]),G(B,[C(354),N(592,687)]),G(B,[C(355),N(688,767)]),G(B,[C(356),N(768,879)]),G(B,[C(357),N(880,1023)]),G(B,[C(358),N(1024,1279)]),G(B,[C(359),N(1280,1327)]),G(B,[C(360),N(1328,1423)]),
G(B,[C(361),N(1424,1535)]),G(B,[C(362),N(1536,1791)]),G(B,[C(363),N(1792,1871)]),G(B,[C(364),N(1872,1919)]),G(B,[C(365),N(1920,1983)]),G(B,[C(366),N(2304,2431)]),G(B,[C(367),N(2432,2559)]),G(B,[C(368),N(2560,2687)]),G(B,[C(369),N(2688,2815)]),G(B,[C(370),N(2816,2943)]),G(B,[C(371),N(2944,3071)]),G(B,[C(372),N(3072,3199)]),G(B,[C(373),N(3200,3327)]),G(B,[C(374),N(3328,3455)]),G(B,[C(375),N(3456,3583)]),G(B,[C(376),N(3584,3711)]),G(B,[C(377),N(3712,3839)]),G(B,[C(378),N(3840,4095)]),G(B,[C(379),N(4096,4255)]),
G(B,[C(380),N(4256,4351)]),G(B,[C(381),N(4352,4607)]),G(B,[C(382),N(4608,4991)]),G(B,[C(383),N(4992,5023)]),G(B,[C(384),N(5024,5119)]),G(B,[C(385),N(5120,5759)]),G(B,[C(386),N(5760,5791)]),G(B,[C(387),N(5792,5887)]),G(B,[C(388),N(5888,5919)]),G(B,[C(389),N(5920,5951)]),G(B,[C(390),N(5952,5983)]),G(B,[C(391),N(5984,6015)]),G(B,[C(392),N(6016,6143)]),G(B,[C(393),N(6144,6319)]),G(B,[C(394),N(6400,6479)]),G(B,[C(395),N(6480,6527)]),G(B,[C(396),N(6528,6623)]),G(B,[C(397),N(6624,6655)]),G(B,[C(398),N(6656,6687)]),
G(B,[C(399),N(7424,7551)]),G(B,[C(400),N(7552,7615)]),G(B,[C(401),N(7616,7679)]),G(B,[C(402),N(7680,7935)]),G(B,[C(403),N(7936,8191)]),G(B,[C(404),N(8192,8303)]),G(B,[C(405),N(8304,8351)]),G(B,[C(406),N(8352,8399)]),G(B,[C(407),N(8400,8447)]),G(B,[C(408),N(8448,8527)]),G(B,[C(409),N(8528,8591)]),G(B,[C(410),N(8592,8703)]),G(B,[C(411),N(8704,8959)]),G(B,[C(412),N(8960,9215)]),G(B,[C(413),N(9216,9279)]),G(B,[C(414),N(9280,9311)]),G(B,[C(415),N(9312,9471)]),G(B,[C(416),N(9472,9599)]),G(B,[C(417),N(9600,9631)]),
G(B,[C(418),N(9632,9727)]),G(B,[C(419),N(9728,9983)]),G(B,[C(420),N(9984,10175)]),G(B,[C(421),N(10176,10223)]),G(B,[C(422),N(10224,10239)]),G(B,[C(423),N(10240,10495)]),G(B,[C(424),N(10496,10623)]),G(B,[C(425),N(10624,10751)]),G(B,[C(426),N(10752,11007)]),G(B,[C(427),N(11008,11263)]),G(B,[C(428),N(11264,11359)]),G(B,[C(429),N(11392,11519)]),G(B,[C(430),N(11520,11567)]),G(B,[C(431),N(11568,11647)]),G(B,[C(432),N(11648,11743)]),G(B,[C(433),N(11776,11903)]),G(B,[C(434),N(11904,12031)]),G(B,[C(435),N(12032,12255)]),
G(B,[C(436),N(12272,12287)]),G(B,[C(437),N(12288,12351)]),G(B,[C(438),N(12352,12447)]),G(B,[C(439),N(12448,12543)]),G(B,[C(440),N(12544,12591)]),G(B,[C(441),N(12592,12687)]),G(B,[C(442),N(12688,12703)]),G(B,[C(443),N(12704,12735)]),G(B,[C(444),N(12736,12783)]),G(B,[C(445),N(12784,12799)]),G(B,[C(446),N(12800,13055)]),G(B,[C(447),N(13056,13311)]),G(B,[C(448),N(13312,19893)]),G(B,[C(449),N(19904,19967)]),G(B,[C(450),N(19968,40959)]),G(B,[C(451),N(40960,42127)]),G(B,[C(452),N(42128,42191)]),G(B,[C(453),N(42752,
42783)]),G(B,[C(454),N(43008,43055)]),G(B,[C(455),N(44032,55203)]),G(B,[C(456),N(55296,56191)]),G(B,[C(457),N(56192,56319)]),G(B,[C(458),N(56320,57343)]),G(B,[C(459),N(57344,63743)]),G(B,[C(460),N(63744,64255)]),G(B,[C(461),N(64256,64335)]),G(B,[C(462),N(64336,65023)]),G(B,[C(463),N(65024,65039)]),G(B,[C(464),N(65040,65055)]),G(B,[C(465),N(65056,65071)]),G(B,[C(466),N(65072,65103)]),G(B,[C(467),N(65104,65135)]),G(B,[C(468),N(65136,65279)]),G(B,[C(469),N(65280,65519)]),G(B,[C(470),N(0,1114111)]),G(B,[C(471),
ARS()]),G(B,[C(472),BL(0,1)]),G(B,[C(473),Ig(62,1)]),G(B,[C(474),BL(1,1)]),G(B,[C(475),BL(2,1)]),G(B,[C(476),BL(3,0)]),G(B,[C(477),BL(4,0)]),G(B,[C(478),BL(5,1)]),G(B,[C(479),Ig(448,1)]),G(B,[C(480),BL(6,1)]),G(B,[C(481),BL(7,0)]),G(B,[C(482),BL(8,1)]),G(B,[C(483),Ig(3584,1)]),G(B,[C(484),BL(9,1)]),G(B,[C(485),BL(10,1)]),G(B,[C(486),BL(11,1)]),G(B,[C(487),Ig(28672,0)]),G(B,[C(488),BL(12,0)]),G(B,[C(489),BL(13,0)]),G(B,[C(490),BL(14,0)]),G(B,[C(491),ASs(983040,1,1)]),G(B,[C(492),BL(15,0)]),G(B,[C(493),BL(16,
1)]),G(B,[C(494),BL(18,1)]),G(B,[C(495),ASE(19,0,1)]),G(B,[C(496),Ig(1643118592,1)]),G(B,[C(497),BL(20,0)]),G(B,[C(498),BL(21,0)]),G(B,[C(499),BL(22,0)]),G(B,[C(500),BL(23,0)]),G(B,[C(501),BL(24,1)]),G(B,[C(502),Ig(2113929216,1)]),G(B,[C(503),BL(25,1)]),G(B,[C(504),BL(26,0)]),G(B,[C(505),BL(27,0)]),G(B,[C(506),BL(28,1)]),G(B,[C(507),BL(29,0)]),G(B,[C(508),BL(30,0)])]);}
function Mn(){BW.call(this);this.q7=0;}
function AOn(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.q7!=Gc(F$(Ec(e,d)))?(-1):2;}
function Kv(){BR.call(this);this.f8=0;}
function AL2(a){var b=new Kv();AFX(b,a);return b;}
function AFX(a,b){BO(a);a.f8=b;}
function AMu(a,b){a.e=b;}
function AGl(a,b,c,d){var e,f;e=b+1|0;if(e>d.u){d.dd=1;return (-1);}f=I(c,b);if(b>d.cB&&Cs(I(c,b-1|0)))return (-1);if(a.f8!=f)return (-1);return a.e.d(e,c,d);}
function AIR(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return Hf(a,b,c,d);e=d.cB;f=d.u;while(true){if(b>=f)return (-1);g=HU(c,a.f8,b);if(g<0)return (-1);if(g>e&&Cs(I(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.d(b,c,d)>=0)break;}return g;}
function AGV(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hp(a,b,c,d,e);f=e.cB;a:{while(true){if(c<b)return (-1);g=G5(d,a.f8,c);if(g<0)break a;if(g<b)break a;if(g>f&&Cs(I(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.d(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AEG(a,b){if(b instanceof D$)return 0;if(b instanceof DZ)return 0;if(b instanceof Dl)return 0;if(b instanceof DE)return 0;if(b instanceof KO)return 0;if(!(b instanceof Kv))return 1;return b.f8!=a.f8?0:1;}
function AO_(a,b){return 1;}
function KO(){BR.call(this);this.fE=0;}
function AJh(a){var b=new KO();AMa(b,a);return b;}
function AMa(a,b){BO(a);a.fE=b;}
function AFZ(a,b){a.e=b;}
function AEk(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;g=BE(f,e);if(g>0){d.dd=1;return (-1);}h=I(c,b);if(g<0&&CQ(I(c,f)))return (-1);if(a.fE!=h)return (-1);return a.e.d(f,c,d);}
function AMP(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hf(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=HU(c,a.fE,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CQ(I(c,b))){b=f+2|0;continue;}if(a.e.d(b,c,d)>=0)break;}return f;}
function AOg(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hp(a,b,c,d,e);f=e.u;a:{while(true){if(c<b)return (-1);g=G5(d,a.fE,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CQ(I(d,c))){c=g+(-1)|0;continue;}if(a.e.d(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AGP(a,b){if(b instanceof D$)return 0;if(b instanceof DZ)return 0;if(b instanceof Dl)return 0;if(b instanceof DE)return 0;if(b instanceof Kv)return 0;if(!(b instanceof KO))return 1;return b.fE!=a.fE?0:1;}
function AM1(a,b){return 1;}
function DE(){var a=this;BW.call(a);a.jx=0;a.ih=0;a.fx=0;}
function ANK(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.jx==e&&a.ih==d?2:(-1);}
function ALL(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hf(a,b,c,d);e=d.u;while(b<e){b=HU(c,a.jx,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=I(c,b);if(a.ih==f&&a.e.d(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AFY(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hp(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=G5(d,a.ih,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.jx==I(d,f)&&a.e.d(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ANv(a,b){if(b instanceof DE)return b.fx!=a.fx?0:1;if(b instanceof Dl)return b.j(a.fx);if(b instanceof D$)return 0;if(!(b instanceof DZ))return 1;return 0;}
var UR=F(Ex);
function AF9(a,b){return b!=10?0:1;}
function AND(a,b,c){return b!=10?0:1;}
var US=F(Ex);
function AOA(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AQo(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AB9(){var a=this;B.call(a);a.mw=null;a.jR=null;a.gM=0;a.v2=0;}
function ALW(a){var b=new AB9();AJE(b,a);return b;}
function AJE(a,b){var c,d;while(true){c=a.gM;if(b<c)break;a.gM=c<<1|1;}d=c<<1|1;a.gM=d;d=d+1|0;a.mw=Bz(d);a.jR=Bz(d);a.v2=b;}
function Rh(a,b,c){var d,e,f,g;d=0;e=a.gM;f=b&e;while(true){g=a.mw.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jR.data[f]=c;}
function SI(a,b){var c,d,e,f;c=a.gM;d=b&c;e=0;while(true){f=a.mw.data[d];if(!f)break;if(f==b)return a.jR.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.v2;}
var Ye=F();
var Ks=F(W);
function ATp(){var a=new Ks();AJb(a);return a;}
function AJb(a){}
function AAs(a){return Cm(BT(C9(),9,13),32);}
var Jx=F(W);
function ASA(){var a=new Jx();AO6(a);return a;}
function AO6(a){}
function AA1(a){return BT(C9(),48,57);}
var AB2=F(W);
function ATK(){var a=new AB2();AIw(a);return a;}
function AIw(a){}
function AN9(a){return BT(C9(),97,122);}
var ACu=F(W);
function ARE(){var a=new ACu();AJI(a);return a;}
function AJI(a){}
function APb(a){return BT(C9(),65,90);}
var ACx=F(W);
function ATl(){var a=new ACx();AFq(a);return a;}
function AFq(a){}
function AHt(a){return BT(C9(),0,127);}
var Kk=F(W);
function ATv(){var a=new Kk();AGw(a);return a;}
function AGw(a){}
function Za(a){return BT(BT(C9(),97,122),65,90);}
var K4=F(Kk);
function ASN(){var a=new K4();AJl(a);return a;}
function AJl(a){}
function Z1(a){return BT(Za(a),48,57);}
var ADP=F(W);
function ASx(){var a=new ADP();ALu(a);return a;}
function ALu(a){}
function AIQ(a){return BT(BT(BT(C9(),33,64),91,96),123,126);}
var L_=F(K4);
function ARO(){var a=new L_();ANe(a);return a;}
function ANe(a){}
function XU(a){return BT(BT(BT(Z1(a),33,64),91,96),123,126);}
var AAF=F(L_);
function ARM(){var a=new AAF();AOX(a);return a;}
function AOX(a){}
function AK$(a){return Cm(XU(a),32);}
var AAV=F(W);
function ART(){var a=new AAV();AOk(a);return a;}
function AOk(a){}
function AGI(a){return Cm(Cm(C9(),32),9);}
var Zv=F(W);
function AR7(){var a=new Zv();AQf(a);return a;}
function AQf(a){}
function AK7(a){return Cm(BT(C9(),0,31),127);}
var Zi=F(W);
function ARR(){var a=new Zi();AFE(a);return a;}
function AFE(a){}
function AQs(a){return BT(BT(BT(C9(),48,57),97,102),65,70);}
var ACA=F(W);
function AS5(){var a=new ACA();AFf(a);return a;}
function AFf(a){}
function ALU(a){var b;b=new ST;b.xC=a;Bq(b);b.I=1;return b;}
var ADX=F(W);
function ARz(){var a=new ADX();ANA(a);return a;}
function ANA(a){}
function AEd(a){var b;b=new MA;b.xK=a;Bq(b);b.I=1;return b;}
var AB$=F(W);
function ATq(){var a=new AB$();AFs(a);return a;}
function AFs(a){}
function AJi(a){var b;b=new RU;b.xl=a;Bq(b);return b;}
var ABS=F(W);
function AR6(){var a=new ABS();AK8(a);return a;}
function AK8(a){}
function ANQ(a){var b;b=new RT;b.xc=a;Bq(b);return b;}
var ACP=F(W);
function ASL(){var a=new ACP();AGs(a);return a;}
function AGs(a){}
function AGF(a){var b;b=new Wg;b.yr=a;Bq(b);Hw(b.F,0,2048);b.I=1;return b;}
var Yv=F(W);
function AR4(){var a=new Yv();AF5(a);return a;}
function AF5(a){}
function AG4(a){var b;b=new OR;b.xX=a;Bq(b);b.I=1;return b;}
var X_=F(W);
function ASM(){var a=new X_();AKM(a);return a;}
function AKM(a){}
function AQl(a){var b;b=new N2;b.yR=a;Bq(b);b.I=1;return b;}
var ACf=F(W);
function ARV(){var a=new ACf();ALv(a);return a;}
function ALv(a){}
function AD6(a){var b;b=new QS;b.xE=a;Bq(b);return b;}
var ACo=F(W);
function ATz(){var a=new ACo();AI3(a);return a;}
function AI3(a){}
function AKe(a){var b;b=new Mt;b.wy=a;Bq(b);b.I=1;return b;}
var ZT=F(W);
function ARY(){var a=new ZT();AEM(a);return a;}
function AEM(a){}
function AHe(a){var b;b=new My;b.x0=a;Bq(b);b.I=1;return b;}
var AA0=F(W);
function ASS(){var a=new AA0();AF$(a);return a;}
function AF$(a){}
function AIm(a){var b;b=new NC;b.yo=a;Bq(b);b.I=1;return b;}
var ADv=F(W);
function ATk(){var a=new ADv();AKk(a);return a;}
function AKk(a){}
function AKh(a){var b;b=new Pd;b.yD=a;Bq(b);b.I=1;return b;}
var ACl=F(W);
function ATi(){var a=new ACl();ALN(a);return a;}
function ALN(a){}
function APy(a){var b;b=new Pr;b.xo=a;Bq(b);return b;}
var AAh=F(W);
function ATw(){var a=new AAh();AF6(a);return a;}
function AF6(a){}
function AM7(a){var b;b=new To;b.x8=a;Bq(b);return b;}
var ZR=F(W);
function ARU(){var a=new ZR();ANR(a);return a;}
function ANR(a){}
function ALM(a){var b;b=new SA;b.wC=a;Bq(b);b.I=1;return b;}
var ADT=F(W);
function AS9(){var a=new ADT();AIX(a);return a;}
function AIX(a){}
function AN0(a){var b;b=new MI;b.y0=a;Bq(b);b.I=1;return b;}
var IX=F(W);
function ASX(){var a=new IX();AHl(a);return a;}
function AHl(a){}
function AAX(a){return Cm(BT(BT(BT(C9(),97,122),65,90),48,57),95);}
var ACT=F(IX);
function ARP(){var a=new ACT();AI6(a);return a;}
function AI6(a){}
function ALy(a){var b;b=Ea(AAX(a),1);b.I=1;return b;}
var AAJ=F(Ks);
function ARu(){var a=new AAJ();AP2(a);return a;}
function AP2(a){}
function AFn(a){var b;b=Ea(AAs(a),1);b.I=1;return b;}
var ZM=F(Jx);
function ASe(){var a=new ZM();AJ3(a);return a;}
function AJ3(a){}
function AID(a){var b;b=Ea(AA1(a),1);b.I=1;return b;}
function Zn(){var a=this;W.call(a);a.qV=0;a.rB=0;}
function N(a,b){var c=new Zn();AQi(c,a,b);return c;}
function AQi(a,b,c){a.qV=b;a.rB=c;}
function AKu(a){return BT(C9(),a.qV,a.rB);}
var ZI=F(W);
function ARS(){var a=new ZI();AQB(a);return a;}
function AQB(a){}
function AP$(a){return BT(BT(C9(),65279,65279),65520,65533);}
function AAw(){var a=this;W.call(a);a.l1=0;a.jD=0;a.pq=0;}
function BL(a,b){var c=new AAw();AGm(c,a,b);return c;}
function ASE(a,b,c){var d=new AAw();AQk(d,a,b,c);return d;}
function AGm(a,b,c){a.jD=c;a.l1=b;}
function AQk(a,b,c,d){a.pq=d;a.jD=c;a.l1=b;}
function AHV(a){var b;b=ATG(a.l1);if(a.pq)Hw(b.F,0,2048);b.I=a.jD;return b;}
function AAG(){var a=this;W.call(a);a.lZ=0;a.jU=0;a.nL=0;}
function Ig(a,b){var c=new AAG();AHf(c,a,b);return c;}
function ASs(a,b,c){var d=new AAG();AD8(d,a,b,c);return d;}
function AHf(a,b,c){a.jU=c;a.lZ=b;}
function AD8(a,b,c,d){a.nL=d;a.jU=c;a.lZ=b;}
function AD7(a){var b;b=new RL;ABC(b,a.lZ);if(a.nL)Hw(b.F,0,2048);b.I=a.jU;return b;}
var Zr=F();
var YX=F();
function AAd(b){var c,d,e,f,g,h,i;c=AOa(E5(b));d=Jl(c);e=Bz(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+Jl(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=MY(c);h=h+1|0;}return e;}
function J5(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Nb(){var a=this;B.call(a);a.pV=0;a.rY=0;a.qa=null;}
function AHT(a,b,c){var d=new Nb();AOV(d,a,b,c);return d;}
function AOV(a,b,c,d){a.pV=b;a.rY=c;a.qa=d;}
function ACh(){var a=this;B.call(a);a.oK=null;a.q3=0;}
function AOa(a){var b=new ACh();AGS(b,a);return b;}
function AGS(a,b){a.oK=b;}
var AAc=F();
function Jl(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.oK.data;f=b.q3;b.q3=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+T(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function MY(b){var c,d;c=Jl(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var T5=F(EG);
function WW(a){KX(a);return a.fS;}
var Rb=F(EG);
var L3=F(Bt);
function Y8(){B.call(this);this.Kn=null;}
var Ys=F();
function Y4(b){var c,d,e,f,g,h,i,j;c=AFN();d=Cb(b);Bi(c,d);e=0;f=0;while(f<d){g=BG(b,f);h=G1(g);Bi(c,h);i=0;while(i<h){j=KD(g,i);F_(c,e,Lv(j));e=e+Lv(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return PY(c);}
function Yz(b){var c,d,e,f,g,h,i,j,k;c=U(b);d=O(HF,c);e=d.data;f=0;while(f<c){a:{g=U(b);if(g!=(-1)){h=U(b);i=U(b);if(i==(-1)){j=new HF;j.fK=h;e[g]=j;}else{j=new HF;j.fK=h;j.li=Bz(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].li.data[k]=U(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function PW(){B.call(this);this.rd=null;}
function AQY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.rd;d=CG(c[0]);c=Lt(d);e=new UT;d=Yz(c);f=Yz(c);g=U(c);h=O(Ls,g);i=h.data;j=0;while(j<g){k=U(c);l=U(c);m=U(c);n=U(c);o=U(c);p=new Ls;p.hu=k;p.mg=l;p.ht=m;p.mf=n;p.j7=o;i[j]=p;j=j+1|0;}e.yH=d;e.u9=f;e.fD=h;b.fu=e;Jo(b.w,d);Jo(b.v,b.fu.u9);}
var YV=F(0);
function R8(){B.call(this);this.qY=null;}
function AK_(a,b){b.gh=a.qY.cT;}
function R6(){B.call(this);this.uf=null;}
function ANi(a,b){b.f3=a.uf.cT.cw;}
function UM(){var a=this;B.call(a);a.y2=null;a.i0=null;}
function AHy(a,b){var c;c=a.i0;b=b;a.i0=ON(!c.mq&&!b.d3?0:1);return 1;}
function VN(){var a=this;Q.call(a);a.oc=null;a.yw=null;}
function AHA(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b5^Db(a.oc,c):0;}
function VL(){var a=this;Q.call(a);a.ug=null;a.u3=null;a.ya=null;}
function AEy(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b5^Db(a.ug,c):0;return a.u3.j(b)&&!d?1:0;}
function Om(){var a=this;Q.call(a);a.io=null;a.wF=null;}
function AKl(a,b){return a.X^Db(a.io,b);}
function AIr(a){var b,c,d;b=new R;V(b);c=GQ(a.io,0);while(c>=0){HZ(b,F4(c));BX(b,124);c=GQ(a.io,c+1|0);}d=b.H;if(d>0)VD(b,d-1|0);return S(b);}
function Ot(){var a=this;Q.call(a);a.rn=null;a.xI=null;}
function ANO(a,b){return a.rn.j(b);}
function Or(){var a=this;Q.call(a);a.jJ=0;a.o_=null;a.kE=null;}
function AOm(a,b){return !(a.jJ^Db(a.kE.B,b))&&!(a.jJ^a.kE.dH^a.o_.j(b))?0:1;}
function Os(){var a=this;Q.call(a);a.jS=0;a.uC=null;a.lD=null;}
function AKO(a,b){return !(a.jS^Db(a.lD.B,b))&&!(a.jS^a.lD.dH^a.uC.j(b))?1:0;}
function Ow(){var a=this;Q.call(a);a.vB=0;a.uM=null;a.ux=null;a.wX=null;}
function AG8(a,b){return a.vB^(!a.uM.j(b)&&!a.ux.j(b)?0:1);}
function Ox(){var a=this;Q.call(a);a.ry=0;a.ra=null;a.qw=null;a.yX=null;}
function ADZ(a,b){return a.ry^(!a.ra.j(b)&&!a.qw.j(b)?0:1)?0:1;}
function Ou(){var a=this;Q.call(a);a.qe=null;a.yZ=null;}
function AIx(a,b){return CN(a.qe,b);}
function Ov(){var a=this;Q.call(a);a.uZ=null;a.w9=null;}
function AKQ(a,b){return CN(a.uZ,b)?0:1;}
function Oy(){var a=this;Q.call(a);a.rQ=null;a.re=0;a.tM=null;}
function APK(a,b){return !CN(a.rQ,b)&&!(a.re^Db(a.tM.B,b))?0:1;}
function Oz(){var a=this;Q.call(a);a.st=null;a.sP=0;a.sa=null;}
function AGy(a,b){return !CN(a.st,b)&&!(a.sP^Db(a.sa.B,b))?1:0;}
function Ol(){var a=this;Q.call(a);a.tB=0;a.uB=null;a.vf=null;a.wK=null;}
function ARr(a,b){return !(a.tB^a.uB.j(b))&&!CN(a.vf,b)?0:1;}
function O1(){var a=this;Q.call(a);a.vb=0;a.m$=null;a.nR=null;a.w6=null;}
function AIB(a,b){return !(a.vb^a.m$.j(b))&&!CN(a.nR,b)?1:0;}
function Oj(){var a=this;Q.call(a);a.pI=null;a.xa=null;}
function AGx(a,b){return CN(a.pI,b);}
function Ok(){var a=this;Q.call(a);a.pS=null;a.yT=null;}
function AIa(a,b){return CN(a.pS,b)?0:1;}
function Op(){var a=this;Q.call(a);a.vw=null;a.sl=0;a.wo=null;}
function AJH(a,b){return CN(a.vw,b)&&a.sl^Db(a.wo.B,b)?1:0;}
function Oi(){var a=this;Q.call(a);a.te=null;a.rz=0;a.sj=null;}
function APi(a,b){return CN(a.te,b)&&a.rz^Db(a.sj.B,b)?0:1;}
function On(){var a=this;Q.call(a);a.tQ=0;a.oa=null;a.rw=null;a.wW=null;}
function AFB(a,b){return a.tQ^a.oa.j(b)&&CN(a.rw,b)?1:0;}
function Oo(){var a=this;Q.call(a);a.s7=0;a.mZ=null;a.tz=null;a.xd=null;}
function AM0(a,b){return a.s7^a.mZ.j(b)&&CN(a.tz,b)?0:1;}
function XF(){B.call(this);this.p5=null;}
var FA=F(Cl);
var AXk=null;var AXj=null;var AXN=null;function SD(){SD=Bm(FA);AQ$();}
function AOl(a,b){var c=new FA();AAn(c,a,b);return c;}
function AAn(a,b,c){SD();C_(a,b,c);}
function AQ$(){var b;AXk=AOl(C(509),0);b=AOl(C(510),1);AXj=b;AXN=G(FA,[AXk,b]);}
var Lw=F(0);
function Sz(){var a=this;B.call(a);a.w2=null;a.uF=null;a.iI=null;a.cj=null;a.ip=0;a.kv=0;}
function Mw(a,b){var c,d,e;c=H(a.iI);if(b>=0&&b<=c){W3(a.cj,null,(-1),(-1));d=a.cj;d.je=1;d.d8=b;c=d.hp;if(c<0)c=b;d.hp=c;b=a.uF.b8(b,a.iI,d);if(b==(-1))a.cj.dd=1;if(b>=0){d=a.cj;if(d.iJ){e=d.dA.data;if(e[0]==(-1)){c=d.d8;e[0]=c;e[1]=c;}d.hp=Iz(d);return 1;}}a.cj.d8=(-1);return 0;}d=new BV;Bn(d,D7(b));K(d);}
function ADu(a){return OX(a.cj,0);}
function ZN(a){return RW(a.cj,0);}
function Yl(a){return a.cj.iP;}
function Of(){B.call(this);this.oA=null;}
function AGE(a,b){b.gh=a.oA;}
function W$(){B.call(this);this.mS=null;}
function LB(a,b){var c,d;c=a.mS;d=b.lR;b=new R;V(b);L(L(b,c),d);$rt_globals.console.info($rt_ustr(S(b)));}
var Tl=F();
var AXf=null;function AS2(){AS2=Bm(Tl);AE0();}
function AE0(){var b,c;SD();b=Bz((AXN.gv()).data.length);c=b.data;AXf=b;c[AXk.gi]=1;c[AXj.gi]=2;}
function SJ(){B.call(this);this.vu=null;}
function ANz(a,b){var c,d,e;F9(a.vu);c=AV_;d=Ze(C(511));if(!Ld()){b=new Bt;Bn(b,C(302));LB(d,b);}else{e=$rt_globals.navigator.clipboard;b=M2(E5(b));b=e.writeText(b);e=new T9;e.x4=c;c=ADR(d);b.then(Bp(e,"f"),Bp(c,"f"));}}
function Jh(){var a=this;B.call(a);a.gX=null;a.yJ=null;}
var AAE=F();
var MU=F(F6);
function AHZ(a,b,c,d){var e,f,g;e=0;f=d.u;a:{while(true){if(b>f){b=e;break a;}g=Fj(d,a.R);De(d,a.R,b);e=a.cK.d(b,c,d);if(e>=0)break;De(d,a.R,g);b=b+1|0;}}return b;}
function ARh(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fj(e,a.R);De(e,a.R,c);f=a.cK.d(c,d,e);if(f>=0)break;De(e,a.R,g);c=c+(-1)|0;}}return c;}
function AGj(a){return null;}
function Rq(){B.call(this);this.s5=null;}
function AGg(a,b){ID(a.s5,b);}
function Sk(){B.call(this);this.qI=null;}
function AId(a,b){b.f3=a.qI;}
function QW(){B.call(this);this.nG=null;}
function AEb(a,b){var c;c=a.nG;b=Cj(b);C$(c.p5,b);}
function XO(){var a=this;B.call(a);a.nC=null;a.nB=null;}
function Sp(){var a=this;B.call(a);a.nd=null;a.nc=null;}
function AEv(a,b){var c,d,e,f,g,h,i,j,k;c=b.data;d=a.nd;e=a.nc;f=BA();g=c.length;h=0;while(h<g){i=c[h];j=new Lp;k=i.f0;Sb(j,k.e3,k.fF);Bw(f,j);h=h+1|0;}if(DI(f))Ke(d.eB,e,d);else{c=D2(d,e);c=Gx(d.c.f,c.V,c.bd);Ri(d.eB,e,b,d,Kz(d,c));}}
function XB(){var a=this;B.call(a);a.pM=null;a.pN=null;a.pO=null;}
function AN7(a,b){VM(a.pM,a.pN,b,a.pO);}
function Q6(){var a=this;B.call(a);a.n7=null;a.n6=null;a.n5=null;a.n4=0;a.n3=0;}
function Jc(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.n7;d=a.n6;e=a.n5;f=a.n4;g=a.n3;if(BI(d,C(29))){d=Cp(c);h=new P$;h.qf=c;i=O(B,1);i.data[0]=e;Ly(d,h,0,C(512),i);}else if(b<=f){d=Cp(c);h=new P4;h.o7=c;i=O(B,1);i.data[0]=e;CR(d,h,C(512),i);}else if(!g){d=Cp(c);j=c.c;BK(j);h=new P3;h.sF=j;k=O(B,2);l=k.data;l[0]=e;i=Bz(1);i.data[0]=250;l[1]=i;CR(d,h,C(513),k);d=Cp(c);h=new P6;h.pu=c;i=O(B,1);i.data[0]=e;CR(d,h,C(512),i);}else{d=Cp(c);h=c.c;BK(h);j=new P5;j.op=h;i=O(B,2);m=i.data;m[0]=e;k=Bz(1);k.data[0]=250;m[1]=k;CR(d,
j,C(513),i);d=Cp(c);j=new P8;j.rS=c;i=O(B,1);i.data[0]=e;CR(d,j,C(514),i);d=Cp(c);h=new P7;h.qM=c;i=O(B,1);i.data[0]=e;CR(d,h,C(512),i);}}
function UK(){var a=this;B.call(a);a.dA=null;a.jo=null;a.k3=null;a.k8=null;a.pd=0;a.iJ=0;a.cB=0;a.u=0;a.d8=0;a.iP=0;a.e7=0;a.dd=0;a.yk=0;a.hp=0;a.je=0;}
function BJ(a,b,c){a.jo.data[b]=c;}
function C8(a,b){return a.jo.data[b];}
function Iz(a){return RW(a,0);}
function RW(a,b){RJ(a,b);return a.dA.data[(b*2|0)+1|0];}
function De(a,b,c){a.dA.data[b*2|0]=c;}
function Jb(a,b,c){a.dA.data[(b*2|0)+1|0]=c;}
function Fj(a,b){return a.dA.data[b*2|0];}
function H4(a,b){return a.dA.data[(b*2|0)+1|0];}
function AB4(a){return OX(a,0);}
function OX(a,b){RJ(a,b);return a.dA.data[b*2|0];}
function MH(a,b){return a.k3.data[b];}
function DX(a,b,c){a.k3.data[b]=c;}
function RJ(a,b){var c;if(!a.iJ){c=new Do;X(c);K(c);}if(b>=0&&b<a.pd)return;c=new BV;Bn(c,D7(b));K(c);}
function W3(a,b,c,d){a.iJ=0;a.je=2;G7(a.dA,(-1));G7(a.jo,(-1));if(b!==null)a.k8=b;if(c>=0){a.cB=c;a.u=d;}a.d8=a.cB;}
function Z3(a){return a.je;}
function WE(){B.call(this);this.oe=null;}
function AGZ(a,b){var c,d;c=a.oe;d=new Bt;Bn(d,$rt_str(b.message));LB(c,d);}
function Mu(){B.call(this);this.wl=null;}
function AIP(a){Dx(a.wl);}
function Tu(){var a=this;B.call(a);a.mO=null;a.mP=null;}
function AO0(a){var b,c;b=a.mO;c=a.mP;b.hM.tF(c);}
function ND(){var a=this;B.call(a);a.nM=null;a.nN=0;a.nO=0;a.nP=null;a.nI=0;a.nK=0;}
function ALx(a,b){var c,d,e,f,g,h,i,j;c=a.nM;d=a.nN;e=a.nO;f=a.nP;g=a.nI;h=a.nK;i=Cn(c.bm,5.0);d=Ba((c.bm.cI.a-d|0)-i|0,Z((i-d|0)-c.N.p.a|0,b.n.a));j=Ba((c.bm.cI.b-e|0)-i|0,Z((i-e|0)-c.N.p.b|0,b.n.b));Bg(f,d+g|0,j+h|0);KG(c,f,c.P.p);}
function Vs(){var a=this;B.call(a);a.tH=null;a.tJ=null;a.tI=null;a.tD=0;a.tC=0;a.tG=0;a.tE=0;a.tT=0;a.tS=0;a.tU=0;a.un=0;}
function AIo(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.tH;d=a.tJ;e=a.tI;f=a.tD;g=a.tC;h=a.tG;i=a.tE;j=a.tT;k=a.tS;l=a.tU;m=a.un;n=Cn(c.bm,5.0);o=c.P.sm();Cw(d,c.P.p);Cw(e,c.P.G);switch(f){case -1:f=Ba(h+(b.n.a-g|0)|0,c.bm.cI.a-n|0);g=o.a;h=h+i|0;f=Z(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Z((i+b.n.a|0)-g|0,Z(o.a,n-c.N.G.a|0));}b:{switch(j){case -1:f=Z(n,Ba(l+(b.n.b-k|0)|0,(c.bm.cI.b+c.N.p.b|0)-n|0));g=o.b;h=l+m|0;f=Z(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Z((m+b.n.b|0)-k|0,o.b);}KG(c,e,d);}
function ST(){Q.call(this);this.xC=null;}
function APT(a,b){return Ch(b)!=2?0:1;}
function MA(){Q.call(this);this.xK=null;}
function AFl(a,b){return Ch(b)!=1?0:1;}
function RU(){Q.call(this);this.xl=null;}
function AE3(a,b){return Ra(b);}
function RT(){Q.call(this);this.xc=null;}
function AHU(a,b){return 0;}
function Wg(){Q.call(this);this.yr=null;}
function AJu(a,b){return !Ch(b)?0:1;}
function OR(){Q.call(this);this.xX=null;}
function APX(a,b){return Ch(b)!=9?0:1;}
function N2(){Q.call(this);this.yR=null;}
function AMp(a,b){return FZ(b);}
function QS(){Q.call(this);this.xE=null;}
function ANT(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Mt(){Q.call(this);this.wy=null;}
function AQ0(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FZ(b);}return b;}
function My(){Q.call(this);this.x0=null;}
function AGU(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FZ(b);}return b;}
function NC(){Q.call(this);this.yo=null;}
function AP5(a,b){a:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Pd(){Q.call(this);this.yD=null;}
function AK4(a,b){return I4(b);}
function Pr(){Q.call(this);this.xo=null;}
function ANj(a,b){return Ps(b);}
function To(){Q.call(this);this.x8=null;}
function APL(a,b){return Ch(b)!=3?0:1;}
function SA(){Q.call(this);this.wC=null;}
function AQD(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=FZ(b);}return b;}
function MI(){Q.call(this);this.y0=null;}
function AGG(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=FZ(b);}return b;}
function LR(){Q.call(this);this.ls=0;}
function ATG(a){var b=new LR();ABC(b,a);return b;}
function ABC(a,b){Bq(a);a.ls=b;}
function AMs(a,b){return a.X^(a.ls!=Ch(b&65535)?0:1);}
var RL=F(LR);
function AOO(a,b){return a.X^(!(a.ls>>Ch(b&65535)&1)?0:1);}
var Ub=F(0);
var AXh=null;function ASt(){ASt=Bm(Ub);AQA();}
function AQA(){AXh=P(C(266));}
function Ru(){B.call(this);this.ul=null;}
function AOr(a){var b,c,d,e,f,g,h,i;b=a.ul;c=b.nC;b=b.nB;d=b.hd;b=b.f0;e=c.uP;c=c.uQ;d=Kc(d);if(b===null)b=void 0;else{f=b.iy+1|0;g=b.ji+1|0;h=b.fF+1|0;i=b.e3+1|0;b=AEc(f,g,h,i);}c.openCodeEditor(e,d,b);}
function Td(){var a=this;B.call(a);a.mE=null;a.mF=null;}
function AIK(a,b){var c;c=a.mE;Jc(a.mF,Jf(c,b.size));}
function Te(){B.call(this);this.vx=null;}
function AEr(a,b){var c;c=a.vx;Ct(EH(),$rt_str(b.message));Jc(c,0);}
function T9(){B.call(this);this.x4=null;}
function AQF(a,b){}
function ACF(){var a=this;B.call(a);a.yB=0;a.xO=0;a.pc=null;}
function ATe(a,b,c){var d=new ACF();AH7(d,a,b,c);return d;}
function AH7(a,b,c,d){a.yB=b;a.xO=c;a.pc=d;}
var Yb=F();
function AKo(b){return {includeDeclaration:b};}
function PK(){var a=this;B.call(a);a.qj=null;a.qi=null;}
function AOf(a,b){V3(b,a.qj,a.qi);}
var ACb=F(0);
function ADC(b){return !b?G(Bv,[C(53),C(217),C(515)]):G(Bv,[C(53),C(217),C(515),C(516)]);}
function AAL(){var a=this;B.call(a);a.DL=null;a.DJ=null;a.DO=0.0;}
function P$(){B.call(this);this.qf=null;}
function ALh(a,b){HN(a.qf,b);}
function P4(){B.call(this);this.o7=null;}
function AN5(a,b){HN(a.o7,b);}
function P3(){B.call(this);this.sF=null;}
function AHS(a,b){U5(a.sF,b);}
function P6(){B.call(this);this.pu=null;}
function AEK(a,b){HN(a.pu,b);}
function P5(){B.call(this);this.op=null;}
function AJm(a,b){U5(a.op,b);}
function P8(){B.call(this);this.rS=null;}
function AOt(a,b){var c,d,e,f,g,h;c=a.rS.c;if(!c.hx){d=b.data;c.i_=1;e=(CG(d[2])).data[0];if(e!=1)GP(c,b);else{f=CG(d[0]);g=Ed(d[1]);QL(c.f,f,g,c.jF);Tx(c,AAi(e));h=JW(DS(),c.go);b=new R;V(b);L(FW(L(b,C(517)),h),C(23));$rt_globals.console.info($rt_ustr(S(b)));}}}
function P7(){B.call(this);this.qM=null;}
function AI$(a,b){HN(a.qM,b);}
function Vo(){var a=this;B.call(a);a.jg=null;a.hh=0;}
var YH=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bu",AT3(AK0),"cO",AT2(AFV)],AAo,0,B,[],3,3,0,0,0,MX,0,B,[],3,3,0,0,0,Mo,0,B,[],3,3,0,0,0,VS,0,B,[MX,Mo],0,3,0,0,0,Zh,0,B,[],4,0,0,0,0,YY,0,B,[],4,3,0,0,0,F7,0,B,[],0,3,0,0,0,DQ,0,F7,[],0,3,0,0,0,Bt,0,DQ,[],0,3,0,0,0,AAH,0,Bt,[],0,3,0,0,0,Cy,0,B,[],3,3,0,0,0,Cr,0,B,[],3,3,0,0,0,Ik,0,B,[],3,3,0,0,0,Bv,"String",1,B,[Cy,Cr,Ik],0,3,0,F8,["cO",AT2(AFT),"bu",AT3(BF),"lV",AT2(Gi),"jB",AT3(AHX)],F2,0,F7,[],0,3,0,0,0,GU,0,F2,[],0,3,0,0,0,AAj,0,GU,[],0,3,0,0,0,En,0,B,[Cy],1,3,0,0,0,FR,
0,En,[Cr],0,3,0,0,["bu",AT3(AQM),"jB",AT3(AKb)],FV,0,B,[Cy,Ik],0,0,0,0,["hC",AT3(Ja),"cO",AT2(S)],Hv,0,B,[],3,3,0,0,0,R,0,FV,[Hv],0,3,0,0,["lG",AT6(AJ8),"kI",AT5(AG2),"cO",AT2(Jj),"hC",AT3(AKf),"mb",AT4(AKJ)],Fp,0,GU,[],0,3,0,0,0,ABG,0,Fp,[],0,3,0,0,0,Z8,0,Fp,[],0,3,0,0,0,Bo,0,B,[],3,3,0,0,0,RG,0,B,[Bo],3,3,0,0,0,T7,0,B,[RG],0,3,0,0,["yb",AT3(AIj)],ABe,0,B,[],0,3,0,0,0,OB,0,B,[Bo],3,3,0,0,0,T6,0,B,[OB],0,3,0,0,["A0",AT5(AKV)],AAz,0,B,[],0,3,0,0,0,SU,0,B,[Bo],3,3,0,0,0,TO,0,B,[SU],0,3,0,0,["yb",AT3(AJ9)],ZA,
0,B,[],0,3,0,0,0,KU,0,B,[],4,3,0,0,0,ACr,0,B,[],4,3,0,0,0,GN,0,B,[],3,3,0,0,0,SS,0,B,[GN],0,3,0,0,0,BV,0,Bt,[],0,3,0,0,0,ABk,0,B,[],4,3,0,0,0,Gd,0,Bt,[],0,3,0,0,0,Ie,0,Bt,[],0,3,0,0,0,CU,0,B,[Cr],0,3,0,0,0,GO,0,BV,[],0,3,0,0,0,H7,0,B,[Bo],3,3,0,0,0,Rp,0,B,[H7],3,3,0,0,0,Pm,0,B,[Rp],0,3,0,0,["He",AT3(AOx),"HB",AT4(ANm),"D8",AT3(APR),"FB",AT3(AHa),"Dg",AT2(ANG),"Ku",AT3(AIt),"ze",AT2(AIp),"It",AT2(AJJ),"KQ",AT3(AG$),"Jy",AT4(AMU),"y9",AT4(APt),"E7",AT2(AQu),"CL",AT3(AFj),"B5",AT3(AHF),"EG",AT2(AKC),"HD",AT3(AGA),
"Ar",AT3(ANg),"Dz",AT3(AIh),"zE",AT3(APp),"Bx",AT4(AQG),"GL",AT4(AMn),"EQ",AT3(AGM),"At",AT3(AQh)],Qr,0,B,[H7],3,3,0,0,0]);
$rt_metadata([EV,0,B,[Qr],0,3,0,0,["Dw",AT2(AQ7),"A6",AT2(AJ2),"Iy",AT2(ALH),"A8",AT3(AQV),"E$",AT2(AMg),"D4",AT3(AEH)],Sm,0,B,[Bo],3,3,0,0,0,VC,0,B,[Sm],0,3,0,0,["KR",AT2(AP1),"Fd",AT2(AMA),"BI",AT3(ALs),"Jl",AT3(AGK),"zZ",AT3(AHL),"Ff",AT3(AOS),"GC",AT3(ALq),"GJ",AT2(AIC),"zU",AT3(AHr)],Tk,0,B,[],3,3,0,0,0,CX,0,B,[],3,3,0,0,0,OQ,0,B,[],3,0,0,0,0,H9,0,B,[Tk,CX,OQ],1,3,0,0,["eV",AT2(It)],Rx,0,H9,[],0,3,0,0,0,AAu,0,B,[Bo],1,3,0,0,0,Hr,0,B,[Bo],3,3,0,0,0,Uc,0,B,[Hr],0,3,0,0,["ms",AT4(AH$)],ABl,0,B,[],3,3,0,0,
0,ZP,0,B,[],0,3,0,0,0,LS,0,B,[],0,3,0,0,0,Yf,0,B,[Bo],1,3,0,0,0,Xu,0,B,[Hr],0,3,0,0,["ms",AT4(AH3)],ADV,0,B,[],4,3,0,0,0,ACt,0,B,[],3,3,0,0,0,Yx,0,B,[],0,3,0,0,0,ACK,0,B,[Bo],1,3,0,0,0,U6,0,B,[],0,3,0,0,["bu",AT3(AGv)],AC0,0,B,[],0,3,0,0,0,ABU,0,B,[],0,3,0,0,0,VE,0,B,[],3,3,0,0,["el",AT3(AD1)],FH,0,B,[VE],3,3,0,0,["el",AT3(AD1),"lu",AT3(AJS)],EA,0,B,[FH],1,3,0,0,["el",AT3(AD1),"lu",AT3(AJS),"dP",AT2(DI),"nS",AT3(AOq)],J_,0,B,[FH],3,3,0,0,["el",AT3(AD1),"lu",AT3(AJS)],IK,0,B,[J_],3,3,0,0,["el",AT3(AD1),"lu",
AT3(AJS)],Ei,0,EA,[IK],1,3,0,0,["el",AT3(AD1),"lu",AT3(AJS),"sy",AT3(ANI),"bW",AT2(BP),"tj",AT4(AMM),"my",AT4(APk),"bu",AT3(ALC)],DR,0,B,[],3,3,0,0,0,KT,0,B,[],3,3,0,0,0,YB,0,Ei,[DR,Cy,KT],0,3,0,0,["lu",AT3(AJS),"lt",AT3(Bs),"cz",AT2(AMw),"sy",AT3(Bw),"my",AT4(Ry),"ml",AT3(Fm),"nS",AT3(Vm),"hW",AT2(FJ),"tj",AT4(Y3),"el",AT3(DY)],Kw,0,B,[],3,3,0,0,0,DD,0,B,[Kw],1,3,0,0,0,J3,0,DD,[DR,Cy],0,3,0,0,0,Y0,0,B,[],3,3,0,0,0,J0,0,B,[],0,3,0,0,0,Mh,0,B,[Bo],3,3,0,0,0,SE,0,B,[Mh],3,3,0,0,0,D5,0,B,[Bo],3,3,0,0,0,Ym,0,B,
[Bo,SE,D5],1,3,0,0,["HA",AT2(ALP),"Ip",AT3(AOW),"J8",AT3(AOE),"Cf",AT3(AGB),"Ht",AT3(AEn),"z3",AT2(AGW),"IH",AT4(AOP),"IO",AT5(AJQ),"JE",AT2(AFk),"Kg",AT2(AMV),"Gm",AT3(APD),"Dv",AT2(ALk),"KK",AT3(AJj),"Fs",AT2(ALR),"Es",AT2(ARf),"Kt",AT2(AKx),"zW",AT3(AFa),"IW",AT2(AQN),"GR",AT4(AJg),"Db",AT4(ALa),"Ir",AT4(AQg),"HQ",AT2(AEq),"Jo",AT2(AI0),"JU",AT3(AG7),"FZ",AT3(AH_),"B$",AT4(AJz),"ER",AT2(AKD),"Jt",AT3(AFm),"Ao",AT2(AH9),"Kx",AT2(ANn),"BV",AT3(AD$),"Fq",AT3(APu),"Kj",AT3(AFK),"D9",AT2(APw),"CP",AT4(AFW),"Ie",
AT3(ANa),"EB",AT2(ANY),"AT",AT4(AMl),"AY",AT4(AL0),"D6",AT2(APn),"JX",AT3(AQS),"C2",AT5(AL3),"BO",AT2(AGY),"De",AT4(AGd),"Dm",AT2(AEV),"H3",AT2(AQI),"Gj",AT2(AMk),"y7",AT2(AES),"Hq",AT4(AMm),"Ap",AT3(AGN),"FX",AT3(AIs),"BC",AT2(AN8)],AAt,0,B,[],4,3,0,0,0,GA,0,B,[Cr],0,3,0,0,0,Kt,0,B,[],0,3,0,0,0,CE,0,B,[],0,3,0,0,0,Pc,0,B,[D5],3,3,0,0,0,Rt,0,B,[D5],3,3,0,0,0,Re,0,B,[D5],3,3,0,0,0,Th,0,B,[D5],3,3,0,0,0,WF,0,B,[D5],3,3,0,0,0]);
$rt_metadata([Ug,0,B,[D5,Pc,Rt,Re,Th,WF],3,3,0,0,0,Zd,0,B,[Bo,Ug],1,3,0,0,["G4",AT4(AMq),"JC",AT4(AJ_),"BX",AT5(AI2),"CY",AT3(AFr),"GK",AT5(AHc)],Pj,0,B,[],0,3,0,0,0,BD,0,Bt,[],0,3,0,0,0,XJ,0,Bt,[],0,3,0,0,0,B$,0,B,[],0,3,0,0,0,Kq,0,J3,[],0,3,0,0,0,RE,0,B,[],0,3,0,0,0,ADr,0,B,[Cr],0,3,0,0,["bu",AT3(AOM),"jB",AT3(AF2)],VI,0,B,[GN],0,3,0,0,["vC",AT4(AKE)],QU,0,B,[],0,3,0,0,["bu",AT3(AFP)],GY,0,B,[],3,3,0,0,0,F5,0,B,[GY,DR],0,0,0,0,["bu",AT3(AGJ)],Ge,0,F5,[],0,0,0,0,0,WK,0,B,[],0,3,0,0,0,Ko,0,B,[],3,3,0,0,0,Pg,
0,B,[Ko],0,3,0,0,0,EP,0,B,[],0,3,0,0,0,Ky,0,EP,[],0,3,0,0,0,ACR,0,B,[],1,3,0,0,0,AAp,0,B,[Bo],1,3,0,0,0,AAR,0,B,[Bo],1,3,0,0,0,FU,0,EP,[],0,3,0,0,0,JE,0,EP,[],0,3,0,0,0,Sj,0,B,[Hr],0,3,0,0,["ms",AT4(AO3)],ZY,0,B,[Bo],1,3,0,0,0,Ha,0,B,[],3,3,0,0,["wh",AT2(AL7),"tq",AT2(AH0)],EU,0,B,[],3,3,0,0,0,JA,0,B,[],3,3,0,0,0,P9,0,B,[],3,0,0,0,0,ZW,0,B,[Ha,EU,JA,P9],0,3,0,0,["tq",AT2(AHO),"wh",AT2(AEZ),"vG",AT2(Nq),"v4",AT2(Xn),"tF",AT3(N$),"ge",AT4(S8),"f2",AT4(Mz),"fM",AT5(MJ),"gf",AT3(NR),"km",AT3(AQp)],ACv,0,B,[],0,
3,0,0,0,ADh,0,B,[],0,3,0,0,0,ACU,0,B,[],4,3,0,0,0,U$,0,B,[H7],0,3,0,0,["C5",AT2(AJy)],Vf,0,B,[Bo],3,3,0,0,0,AAI,0,B,[Vf],1,3,0,0,["Ju",AT3(AII),"IN",AT2(AKW)],Hs,0,B,[],0,3,0,0,0,SM,0,B,[],3,3,0,0,0,MP,0,B,[SM],0,3,0,0,0,QE,0,B,[],3,3,0,0,0,OF,0,B,[QE],3,3,0,0,0,AA6,0,B,[OF],0,3,0,0,0,W_,0,B,[],3,3,0,ATb,0,Lq,0,B,[CX],1,3,0,0,0,FY,0,Lq,[],1,3,0,0,0,OD,0,B,[],3,3,0,0,0,Jy,0,B,[OD],3,3,0,0,0,La,0,B,[],3,3,0,0,0,Mr,0,FY,[Jy,La],0,3,0,0,["h_",AT3(AI9),"lH",AT3(AO4),"e8",AT2(AIJ),"iY",AT4(AD_),"iA",AT3(AHd)]]);
$rt_metadata([Km,0,B,[],3,3,0,0,0,OE,0,B,[Km],0,3,0,0,["ln",function(b,c,d,e,f){AM9(this,b,c,d,e,f);}],W1,0,B,[],3,3,0,0,0,WJ,0,B,[W1],0,3,0,0,0,Fn,0,B,[],3,3,0,0,0,MD,0,B,[Fn],0,3,0,0,0,V8,0,B,[Km],0,3,0,0,["ln",function(b,c,d,e,f){AGR(this,b,c,d,e,f);}],Lp,0,B,[Cr],0,3,0,0,["bu",AT3(AEz),"lV",AT2(ANM),"jB",AT3(ANh)],Ga,0,B,[],3,3,0,0,0,HD,0,B,[],3,3,0,0,0,Ez,0,B,[],3,3,0,0,0,G_,0,B,[Ez],3,3,0,0,0,N_,0,FY,[EU,Jy,JA,La,Ga,HD,G_],0,3,0,0,["mj",AT4(AQe),"lH",AT3(ANN),"e8",AT2(AK2),"vG",AT2(AOp),"v4",AT2(AKS),
"tF",AT3(APr),"h_",AT3(AGD),"iY",AT4(AKj),"iA",AT3(AEU),"gf",AT3(AMR),"fM",AT5(AJc),"f2",AT4(ALf),"ge",AT4(ANF),"f7",AT5(AM8),"ec",AT2(AJ7)],ZO,0,B,[Bo],1,3,0,0,0,Zc,0,B,[],0,3,0,0,0,B0,0,B,[Bo],3,3,0,0,0,Pq,0,B,[B0],0,3,0,0,["bi",AT3(AKz)],ACc,0,B,[Bo],3,3,0,0,0,AAP,0,B,[Bo],1,3,0,0,0,QO,0,B,[B0],0,3,0,0,["bi",AT3(AHP)],NE,0,B,[B0],0,3,0,0,["bi",AT3(AM_)],Y,0,B,[],3,3,0,0,0,XI,0,B,[Y],0,3,0,0,["i",AT3(AIY)],ZB,0,B,[],0,3,0,0,0,Et,0,B,[],3,3,0,0,0,XL,0,B,[Et],0,3,0,0,["wg",AT3(AJK)],Bk,0,B,[],3,3,0,0,0,XM,0,
B,[Bk],0,3,0,0,["s",AT2(AIv)],UI,0,B,[Et],0,3,0,0,["wg",AT3(ANw)],UJ,0,B,[Bk],0,3,0,0,["s",AT2(AQ8)],Rm,0,B,[Bo],3,3,0,0,0,U7,0,B,[Rm],0,3,0,0,["Fw",AT3(AJf)],U3,0,B,[Bk],0,3,0,0,0,Qk,0,B,[Bo],3,3,0,0,0,U4,0,B,[Qk],0,3,0,0,["ms",AT4(AHk)],ACZ,0,B,[Bo],1,3,0,0,0,Cd,0,B,[Bo],3,3,0,0,0,U2,0,B,[Cd],0,3,0,0,["b4",AT3(ANk)],Sn,0,B,[],0,3,0,0,0,LH,0,Ei,[],1,3,0,0,["el",AT3(AD1),"lu",AT3(AJS)],Mp,0,B,[FH],3,3,0,0,["el",AT3(AD1),"lu",AT3(AJS)],W4,0,B,[Mp,J_],3,3,0,0,["el",AT3(AD1),"lu",AT3(AJS)],T$,0,LH,[W4],0,3,0,0,
["el",AT3(AD1),"lu",AT3(AJS)],W0,0,B,[Kw],3,3,0,0,0,MW,0,B,[W0],3,3,0,0,0,O0,0,DD,[DR,Cy,MW],0,3,0,0,0,Ss,0,B,[Et],0,3,0,0,0,St,0,B,[B0],0,3,0,0,["bi",AT3(AEp)],Po,0,B,[],0,3,0,0,0,KK,0,B,[],1,3,0,0,0]);
$rt_metadata([ACw,0,KK,[],0,3,0,0,0,ZH,0,B,[],0,3,0,0,0,VY,0,B,[Cd],0,3,0,0,["b4",AT3(AMO)],VZ,0,B,[Cd],0,3,0,0,["b4",AT3(AM2)],V0,0,B,[Cd],0,3,0,0,["b4",AT3(ALg)],V1,0,B,[Cd],0,3,0,0,["b4",AT3(AKF)],AC5,0,B,[Cd],0,3,0,0,["b4",AT3(AK5)],AC6,0,B,[Cd],0,3,0,0,["b4",AT3(ANy)],AC7,0,B,[Cd],0,3,0,0,["b4",AT3(AI1)],AC8,0,B,[Cd],0,3,0,0,["b4",AT3(AQ_)],AC9,0,B,[Cd],0,3,0,0,["b4",AT3(AH8)],AC$,0,B,[Cd],0,3,0,0,["b4",AT3(AOH)],ADK,0,B,[Cd],0,3,0,0,["b4",AT3(AQK)],ADL,0,B,[Cd],0,3,0,0,["b4",AT3(AKU)],ADM,0,B,[Cd],0,3,
0,0,["b4",AT3(ALm)],ADN,0,B,[Cd],0,3,0,0,["b4",AT3(ANc)],TK,0,B,[],3,3,0,0,0,TX,0,B,[TK],0,3,0,0,0,TW,0,B,[Cd],0,3,0,0,["b4",AT3(AJY)],Mi,0,B,[],0,3,0,0,0,IG,0,B,[GN],0,3,0,0,["vC",AT4(I6)],DV,0,B,[],3,3,0,0,0,D8,0,B,[DV],3,3,0,0,0,Iv,0,B,[DV],3,3,0,0,0,Qq,0,B,[CX],0,3,0,0,0,Bj,0,B,[],0,3,0,0,["bu",AT3(AJL)],V4,0,B,[],0,3,0,0,0,YT,0,B,[],3,3,0,0,0,Qj,0,B,[],0,3,0,0,0,Lc,0,B,[],0,3,0,0,0,CJ,0,Lc,[],0,3,0,0,0,VF,0,CJ,[],0,3,0,0,0,Ek,0,CJ,[],0,3,0,0,0,AAf,0,CJ,[],0,3,0,0,0,AAA,0,Ek,[],0,3,0,0,0,FE,0,Ek,[],0,3,
0,0,0,ABL,0,FE,[],0,3,0,0,0,ADx,0,FE,[],0,3,0,0,0,Zf,0,Ek,[],0,3,0,0,0,ABK,0,CJ,[],0,3,0,0,0,YP,0,CJ,[],0,3,0,0,0,RV,0,B,[Bo],3,3,0,0,0,ADS,0,B,[RV],3,3,0,0,0,Qh,0,B,[CX],0,3,0,0,0,Qi,0,B,[],0,3,0,0,0,Cl,0,B,[Cr,Cy],1,3,0,0,0,Go,0,Cl,[],12,3,0,G8,0,LU,0,B,[],3,3,0,0,0,S$,0,B,[LU],3,3,0,0,0,T_,0,B,[],3,3,0,0,0]);
$rt_metadata([F1,0,B,[S$,T_],1,3,0,0,0,IZ,0,F1,[],0,3,0,0,0,Z5,0,IZ,[],0,3,0,0,0,FQ,0,F1,[],1,3,0,0,0,KS,0,FQ,[],0,3,0,0,["j$",AT5(AJO)],DM,0,Cl,[],12,3,0,APZ,0,IP,0,B,[Cr],1,3,0,0,0,LZ,0,IP,[],0,3,0,AHY,0,Gs,0,Cl,[],12,0,0,ALc,0,Kb,0,FQ,[],0,3,0,0,["j$",AT5(AHG)],ACq,0,BD,[],0,3,0,0,0,U8,0,DQ,[],0,3,0,0,0,LX,0,B,[Bo],3,3,0,0,0,WY,0,B,[LX],0,3,0,0,["bi",AT3(AOb)],WZ,0,B,[LX],0,3,0,0,["bi",AT3(AFL)],Qb,0,B,[],0,3,0,0,0,WT,0,B,[],0,3,0,0,0,AAy,0,B,[EU,Ga],0,0,0,0,["gf",AT3(AMX),"fM",AT5(AP9),"f2",AT4(ANZ),"ge",
AT4(AKq),"f7",AT5(AOj)],Ho,0,B,[],3,3,0,0,0,Uu,0,B,[Ho],0,3,0,0,["h3",AT3(AKc)],Uv,0,B,[Ho],0,3,0,0,["h3",AT3(AFb)],Uw,0,B,[Y],0,3,0,0,["i",AT3(AKp)],Uq,0,B,[Y],0,3,0,0,["i",AT3(ALi)],Ur,0,B,[D8],0,3,0,0,["cm",AT3(APQ)],JZ,0,B,[D8],0,3,0,0,["cm",AT3(AH4)],Us,0,B,[Y],0,3,0,0,["i",AT3(AOI)],Ut,0,B,[Iv],0,3,0,0,["cm",AT3(AGX)],GD,0,B,[],1,3,0,0,0,Sg,0,B,[],3,3,0,0,0,KE,0,GD,[Cr,Hv,Ik,Sg],1,3,0,0,0,Js,0,GD,[Cr],1,3,0,0,0,Hg,0,B,[],0,3,0,AP3,0,Px,0,B,[D8],0,3,0,0,["cm",AT3(AFC)],Pv,0,B,[Y],0,3,0,0,["i",AT3(AIc)],Pw,
0,B,[HD],0,3,0,0,["mj",AT4(APf)],NS,0,B,[G_],0,3,0,0,["ec",AT2(AM4)],NT,0,B,[Ga],0,3,0,0,["f7",AT5(AJW)],NQ,0,B,[Iv],0,3,0,0,["cm",AT3(AKG)],AAK,0,B,[Bo],1,3,0,0,0,YM,0,B,[],3,3,0,0,0,T0,0,B,[],0,3,0,0,0,R0,0,B,[D8],0,3,0,0,["cm",AT3(AIG)],RZ,0,B,[D8],0,3,0,0,["cm",AT3(AGb)],B4,0,B,[],0,3,0,0,["bu",AT3(AQ6)],Ii,0,B,[],3,3,0,0,0,WC,0,B,[EU,Ii],0,3,0,0,0,Vq,0,B,[Ii,Ha],0,3,0,0,["wh",AT2(AL7),"tq",AT2(AH0),"km",AT3(AKL)],PC,0,B,[],0,3,0,0,0,KB,0,B,[],0,3,0,0,0,EZ,0,B,[CX],0,0,0,0,0]);
$rt_metadata([ADt,0,B,[],0,3,0,0,0,ZC,0,B,[CX],0,3,0,0,0,NK,0,B,[Y],0,3,0,0,0,NJ,0,B,[Y],0,3,0,0,["i",AT3(AFo)],NI,0,B,[Y],0,3,0,0,["i",AT3(AEx)],UD,0,B,[],0,0,0,0,0,NH,0,B,[Bk],0,3,0,0,["s",AT2(AEw)],NO,0,B,[Bk],0,3,0,0,["s",AT2(AH2)],NN,0,B,[Bk],0,3,0,0,["s",AT2(ARp)],NM,0,B,[Bk],0,3,0,0,["s",AT2(AKA)],NL,0,B,[Bk],0,3,0,0,["s",AT2(AMZ)],NG,0,B,[Bk],0,3,0,0,["s",AT2(AQP)],NF,0,B,[Bk],0,3,0,0,["s",AT2(AEl)],E8,0,Cl,[],12,3,0,AEt,0,Jz,0,KE,[],1,0,0,0,0,Rg,0,Jz,[],0,0,0,0,0,Kn,0,B,[],1,3,0,0,0,Ll,0,B,[],0,3,0,
0,0,Wc,0,B,[],0,0,0,0,0,GJ,0,B,[],0,3,0,0,0,OU,0,GJ,[],0,3,0,0,0,ACC,0,B,[],0,3,0,0,0,Mf,0,GJ,[],0,3,0,0,0,TM,0,B,[Bo],3,3,0,0,0,Nx,0,B,[TM],0,3,0,0,["J9",AT3(AKm)],Un,0,B,[Y],0,3,0,0,["i",AT3(AO9)],Mc,0,B,[],3,3,0,0,0,Qc,0,B,[Bk],0,3,0,0,["s",AT2(AIZ)],Qa,0,B,[Bk],0,3,0,0,["s",AT2(AEf)],Xo,0,B,[],3,3,0,0,0,PO,0,B,[],3,0,0,0,0,Wm,0,Js,[],0,0,0,0,0,RK,0,B,[Mc],0,3,0,0,0,ABt,0,B,[Bo],1,3,0,0,0,Ny,0,B,[Bk],0,3,0,0,["s",AT2(AQQ)],JT,0,B,[],4,3,0,AJx,0,Vy,0,B,[],3,3,0,0,0,AA8,0,B,[Vy],0,3,0,0,["cO",AT2(AGH)],T3,
0,B,[],3,3,0,0,0,KA,"JsFileHandle",5,B,[T3],0,3,0,0,["cO",AT2(AJV)],HJ,0,B,[],0,3,0,0,0,UO,0,B,[CX],0,3,0,0,0,Kj,0,Kn,[],1,3,0,0,0,Pk,0,Kj,[],0,3,0,0,0,TT,0,DQ,[],0,3,0,0,0,H8,0,B,[],0,3,0,0,0,YL,0,B,[],3,3,0,0,0,X4,0,B,[],0,3,0,0,0,AA9,0,B,[],3,3,0,0,0,ADD,0,B,[],0,3,0,0,0]);
$rt_metadata([L7,0,B,[GY,Cy],0,3,0,0,0,I1,0,L7,[],0,0,0,0,0,Ij,0,B4,[],0,3,0,0,0,CL,0,B,[],3,3,0,ACy,0,Ca,0,Cl,[],12,3,0,ABI,0,Ir,0,B,[],0,3,0,0,0,HO,0,B,[],0,3,0,0,0,AAZ,0,B,[],0,3,0,0,0,Dg,0,B,[],3,3,0,AET,0,Zy,0,B,[],0,3,0,0,["bu",AT3(AOv)],CM,0,B,[],3,3,0,ACQ,0,B8,0,Cl,[],12,3,0,ZF,0,Du,0,B,[],3,3,0,ALp,0,CW,0,B,[],3,3,0,AHM,0,B7,0,Cl,[],12,3,0,UE,0,Dn,0,B,[],3,3,0,AED,0,H0,0,B,[],0,3,0,0,0,Im,0,B,[],4,3,0,0,0,YW,0,B,[],0,3,0,0,0,Rv,0,B,[DV],0,3,0,0,0,HF,0,B,[],0,3,0,0,0,UT,0,B,[],0,3,0,0,0,Ls,0,B,[],0,
3,0,0,0,YK,0,B,[],0,3,0,0,0,ZX,0,B,[],4,3,0,0,0,TP,0,B,[],0,0,0,0,0,Tt,0,B,[Y],0,3,0,0,["i",AT3(AHb)],I0,0,B,[CX],0,3,0,0,["eV",AT2(ABP)],ADq,0,B,[],0,3,0,0,0,Wz,0,B,[Y],0,3,0,0,["i",AT3(AKa)],QH,0,B,[LU],3,3,0,0,0,No,0,B,[QH],3,3,0,0,0,GE,0,B,[No],1,3,0,0,0,Sh,0,GE,[],0,3,0,0,0,Qx,0,B,[],3,3,0,0,0,XC,0,B,[Y],0,3,0,0,["i",AT3(AMY)],X9,0,B,[],0,3,0,0,0,Uj,0,B,[],0,3,0,0,0,SQ,0,B,[],0,3,0,0,0,V9,0,B,[Y],0,3,0,0,["i",AT3(AKY)],Mq,0,B,[Y],0,3,0,0,["i",AT3(AOR)],PF,0,B,[CX],0,3,0,0,0,Z7,0,B,[Bo],4,3,0,0,0,ACI,0,
B,[],0,3,0,0,0,SK,0,DD,[DR,Cy],0,3,0,0,0,Vk,0,B,[],0,3,0,0,0,Vc,0,B,[],0,3,0,0,0,NX,0,B,[Y],0,3,0,0,["i",AT3(AFz)],Do,0,Bt,[],0,3,0,0,0,Tw,0,F2,[],0,3,0,0,0]);
$rt_metadata([Qv,0,B,[DV],0,3,0,0,["cm",AT3(ARq)],U_,0,B,[Y],0,3,0,0,["i",AT3(ANp)],SX,0,B,[Y],0,3,0,0,["i",AT3(AQy)],SY,0,B,[Y],0,3,0,0,["i",AT3(AL8)],Qe,0,B,[Qx],0,3,0,0,0,Sl,0,B,[Y],0,3,0,0,["i",AT3(AJv)],R_,0,B,[Y],0,3,0,0,["i",AT3(AHn)],R$,0,B,[Y],0,3,0,0,["i",AT3(AP6)],EF,0,B,[],3,3,0,0,0,Nn,0,B,[EF],0,0,0,0,["cd",AT2(BQ),"bP",AT2(BS),"kV",AT2(Q4)],M6,0,B,[Ez],0,3,0,0,["ec",AT2(AKd)],M3,0,B,[Ez],0,3,0,0,["ec",AT2(AO$)],SH,0,B,[Ez],0,3,0,0,["ec",AT2(AMI)],ACJ,0,B,[Et],0,3,0,0,0,ACa,0,B,[Et],0,3,0,0,0,Hh,
0,F5,[],0,0,0,0,0,S2,0,B,[Y],0,3,0,0,["i",AT3(AOB)],ABr,0,B,[Bo],1,3,0,0,0,Yi,0,B,[Y],0,3,0,0,0,TY,0,B,[],0,3,0,0,0,E3,0,B,[],0,3,0,0,0,Xm,0,B,[Y],0,3,0,0,["i",AT3(AIq)],Kl,0,E3,[],0,3,0,0,0,JS,0,E3,[],0,3,0,0,0,VG,0,B,[Y],0,3,0,0,["i",AT3(AE$)],PI,0,B,[],0,3,0,0,0,OM,0,B,[Y],0,3,0,0,["i",AT3(ALj)],D1,0,Bt,[],0,3,0,0,0,Nw,0,B,[],0,3,0,0,0,YN,0,B,[Y],0,0,0,0,0,Ml,0,B,[Y],0,3,0,0,["i",AT3(AQb)],ACS,0,B,[],0,3,0,0,0,S7,0,B,[],0,0,0,0,0,YQ,0,B,[],3,3,0,0,0,TB,0,B,[],0,3,0,0,0,TA,0,B,[Y],0,3,0,0,0,OT,0,B,[FH],3,
3,0,0,["el",AT3(AD1),"lu",AT3(AJS)],Ep,0,EA,[OT],1,3,0,0,["el",AT3(AD1),"lu",AT3(AJS)],O7,0,Ep,[],0,0,0,0,["lu",AT3(AJS)],Mb,0,B,[Y],0,3,0,0,["i",AT3(AHB)],UH,0,B,[Y],0,3,0,0,["i",AT3(AKB)],IF,0,B,[],0,3,0,0,["bu",AT3(ABi)],LJ,0,IF,[],0,3,0,0,["bu",AT3(AFD)],Ej,0,B,[],0,3,0,0,["bu",AT3(YC)],FS,0,Ej,[],0,3,0,0,0,Ic,0,Ej,[],0,3,0,0,["bu",AT3(AQc)],Iw,0,Ej,[],0,3,0,0,["bu",AT3(AER)],GC,0,Bt,[],0,3,0,0,0,WS,0,B,[B0],0,3,0,0,["bi",AT3(AOo)],WR,0,B,[B0],0,3,0,0,["bi",AT3(AGT)]]);
$rt_metadata([Wb,0,B,[B0],0,3,0,0,["bi",AT3(AIz)],Wa,0,B,[B0],0,3,0,0,["bi",AT3(AJp)],WN,0,B,[Cd],0,3,0,0,["b4",AT3(AIl)],JR,0,B,[],0,3,0,0,0,Jn,0,B,[],0,3,0,0,0,L8,0,B,[],0,3,0,0,0,WA,0,B,[Bk],0,3,0,0,["s",AT2(AE4)],WB,0,B,[Bk],0,3,0,0,["s",AT2(AI4)],ADn,0,B,[Cr],0,3,0,0,["bu",AT3(AMc)],MV,0,B,[Y],0,3,0,0,["i",AT3(AKy)],Xv,0,B,[Y],0,3,0,0,["i",AT3(ARm)],EG,0,B,[],0,0,0,0,0,SO,0,EG,[EF],0,0,0,0,0,Xj,0,D1,[],0,3,0,0,0,QV,0,Bt,[],0,3,0,0,0,VK,0,Bt,[],0,3,0,0,0,Yn,0,B,[Y],0,3,0,0,0,V7,0,B,[],0,3,0,0,0,Qm,0,B,[Bk],
0,3,0,0,["s",AT2(ARs)],Vj,0,B,[Bk],0,3,0,0,0,EI,0,B,[CX],0,3,0,0,["eV",AT2(ANP),"sm",AT2(ABx),"lC",AT5(Rn),"kt",AT3(APU),"o8",AT3(AKK),"oQ",AT3(AQr),"qu",AT4(ANX),"fM",AT5(AI8),"f2",AT4(AFU),"ge",AT4(ALB),"gf",AT3(AP8),"f7",AT5(ANL)],IN,0,EI,[],0,3,0,0,0,Qs,0,IN,[Ha],0,3,0,0,["wh",AT2(AL7),"tq",AT2(AH0),"eV",AT2(AP7),"qu",AT4(AG6),"oQ",AT3(ANd),"o8",AT3(AOU),"km",AT3(APc)],Qf,0,B,[Bk],0,3,0,0,0,PH,0,EI,[],0,3,0,0,["eV",AT2(AOQ),"lC",AT5(AIy),"kt",AT3(AN3),"fM",AT5(APo),"f2",AT4(AOT),"ge",AT4(AL1),"gf",AT3(ALJ),
"f7",AT5(AHI),"sm",AT2(AQL)],Pl,0,B,[],1,3,0,0,0,Gp,0,B,[],0,3,0,0,0,YO,0,B,[Bo],1,3,0,0,0,Mm,0,B,[B0],0,3,0,0,["bi",AT3(AOu)],ABa,0,B,[],1,3,0,0,0,QR,0,B,[B0],0,3,0,0,["bi",AT3(AHu)],ZV,0,GE,[],0,3,0,0,0,RQ,0,B,[Bk],0,3,0,0,["s",AT2(AJe)],RR,0,B,[Bk],0,3,0,0,["s",AT2(AGe)],RO,0,B,[Bk],0,3,0,0,["s",AT2(AE5)],RP,0,B,[Bk],0,3,0,0,["s",AT2(AI_)],QZ,0,B,[Bk],0,3,0,0,["s",AT2(ANE)],QY,0,B,[Bk],0,3,0,0,["s",AT2(AMb)],QX,0,B,[Bk],0,3,0,0,["s",AT2(ARg)],OW,0,B,[Bk],0,3,0,0,["s",AT2(AL9)],Qd,0,B,[],3,3,0,0,0,PR,0,B,
[Bk],0,3,0,0,["s",AT2(AF4)],H2,0,B,[],0,3,0,0,0,Ro,0,B,[],3,3,0,0,0,Yc,0,B,[Ro],0,3,0,0,0,Va,0,EI,[],0,3,0,0,0,WM,0,En,[Cr],0,3,0,0,0,Ff,0,B,[],0,0,0,0,0,Hj,0,B,[],4,3,0,0,0,UW,0,B,[],0,3,0,0,0]);
$rt_metadata([ABT,0,B,[],0,3,0,0,0,SR,0,B,[Fn],0,3,0,0,["v1",AT4(APs)],V2,0,BV,[],0,3,0,0,0,DO,0,B,[],0,3,0,0,0,M$,0,B,[Bk],0,3,0,0,["s",AT2(AJN)],M_,0,B,[Bk],0,3,0,0,["s",AT2(APz)],M9,0,B,[Bk],0,3,0,0,["s",AT2(AD0)],V_,0,B,[Bk],0,3,0,0,["s",AT2(AKI)],V$,0,B,[Bk],0,3,0,0,["s",AT2(AN1)],Rk,0,B,[Ez],0,3,0,0,["ec",AT2(AKg)],Sq,0,B,[Bk],0,3,0,0,["s",AT2(AJn)],Sr,0,B,[Bk],0,3,0,0,["s",AT2(APe)],Xi,0,B,[Bk],0,3,0,0,["s",AT2(AEe)],Xd,0,B,[Bk],0,3,0,0,["s",AT2(AJq)],Xe,0,B,[Bk],0,3,0,0,["s",AT2(AQC)],Xf,0,B,[Bk],0,
3,0,0,["s",AT2(AKZ)],Xg,0,B,[Bk],0,3,0,0,["s",AT2(AIM)],KN,0,B,[],3,3,0,0,0,WI,0,B,[KN],0,3,0,0,0,Ob,0,B,[Y],0,3,0,0,["i",AT3(AEP)],Oa,0,B,[Y],0,3,0,0,["i",AT3(AE_)],R1,0,En,[Cr],0,3,0,0,0,Wx,0,B,[Et],0,3,0,0,0,EM,0,B,[],0,3,0,0,0,Yw,0,B,[],0,3,0,0,0,Uz,0,B,[Fn],0,3,0,0,["v1",AT4(AQ5)],P_,0,B,[B0],0,3,0,0,["bi",AT3(AG5)],Il,0,B,[Bo],3,3,0,0,0,Mx,0,B,[Il],0,3,0,0,["rC",AT2(AJt)],Mg,0,B,[Il],0,3,0,0,["rC",AT2(AD3)],SV,0,B,[B0],0,3,0,0,["bi",AT3(AI7)],Vn,0,B,[Ez],0,3,0,0,["ec",AT2(AQX)],T2,0,B,[KN],0,3,0,0,0,TI,
0,B,[],0,3,0,0,0,WQ,0,B,[B0],0,3,0,0,["bi",AT3(AIS)],JK,0,Ep,[],1,0,0,0,["el",AT3(AD1),"lu",AT3(AJS)],U1,0,JK,[],0,0,0,0,["el",AT3(AD1),"lu",AT3(AJS)],K2,0,DD,[],1,0,0,0,0,UZ,0,K2,[],0,0,0,0,0,LA,0,Ei,[KT],1,0,0,0,["el",AT3(AD1),"hW",AT2(AGL),"ml",AT3(ALd),"lu",AT3(AJZ)],U0,0,LA,[],0,0,0,0,["el",AT3(AD1),"lt",AT3(ALl),"cz",AT2(AKs),"bW",AT2(AHh),"dP",AT2(AEY)],UX,0,B,[EF],0,0,0,0,["cd",AT2(AEE),"bP",AT2(AMH),"kV",AT2(AOh)],Ph,0,B,[EF],3,3,0,0,0,UY,0,B,[Ph],0,0,0,0,0,XD,0,B,[GN],0,3,0,0,0,Z4,0,B,[Bo],1,3,0,0,
0,Q$,0,B,[Cy],4,3,0,0,0,GH,0,B,[Bo],1,3,0,0,0,Zl,0,GH,[],1,3,0,0,0,ACe,0,GH,[],1,3,0,0,0]);
$rt_metadata([Ui,0,Ep,[],0,0,0,0,["el",AT3(AD1),"lu",AT3(AJS)],O8,0,EA,[],0,0,0,0,["el",AT3(AD1),"lu",AT3(AJS)],ABZ,0,B,[],0,3,0,0,0,Sv,0,B,[],3,3,0,0,0,SW,0,B,[B0],0,3,0,0,["bi",AT3(AHm)],Gh,0,B,[],3,3,0,0,0,Tm,0,B,[Gh],0,3,0,0,["iR",AT5(ALo)],Tn,0,B,[Gh],0,3,0,0,["iR",AT5(AIT)],HG,0,B,[Cy,Cr],0,3,0,0,0,Jd,0,B,[],3,3,0,0,0,RM,0,B,[Jd],0,3,0,0,0,OA,0,B,[Jd],3,3,0,0,0,AAM,0,B,[OA],0,3,0,0,0,Se,0,B,[Gh],0,3,0,0,["iR",AT5(AL$)],Sd,0,B,[DV],0,3,0,0,["cm",AT3(AQn)],Sc,0,B,[DV],0,3,0,0,["cm",AT3(ANr)],Sf,0,B,[Gh],
0,3,0,0,["iR",AT5(ALD)],MB,0,B,[],0,3,0,0,0,Q_,0,B,[],0,3,0,0,0,BC,0,B,[],1,0,0,0,["b8",AT5(Hf),"ca",AT6(Hp),"hr",AT2(AFO),"L",AT3(APC),"bK",AT3(APB),"fa",AT2(AQw),"eb",AT2(IC)],UC,0,B,[],3,3,0,0,0,Vp,0,B,[UC],0,3,0,0,0,Xw,0,B,[Y],0,3,0,0,["i",AT3(AMd)],Xx,0,B,[Y],0,3,0,0,["i",AT3(AHW)],Qz,0,B,[Y],0,3,0,0,["i",AT3(ALV)],CC,0,BC,[],0,0,0,LW,["d",AT5(AFe),"D",AT3(AFA)],Gj,0,B,[],0,0,0,0,0,If,0,BD,[],0,3,0,0,0,AC_,0,B,[],1,3,0,0,0,Wy,0,B,[B0],0,3,0,0,["bi",AT3(AMW)],ABb,0,B,[Bo],3,3,0,0,0,TL,0,B,[B0],0,3,0,0,["bi",
AT3(AMy)],RI,0,CC,[],0,0,0,0,["d",AT5(AEI),"D",AT3(AN$)],W7,0,CC,[],0,0,0,0,["d",AT5(AGo)],PL,0,CC,[],0,0,0,0,["d",AT5(AFJ)],SP,0,CC,[],0,0,0,0,["d",AT5(AEQ),"D",AT3(AMJ)],Fd,0,CC,[],0,0,0,0,["d",AT5(APV)],BW,0,BC,[],1,0,0,0,["d",AT5(AQ4),"bQ",AT2(AO2),"D",AT3(AJC)],ACN,0,BW,[],0,0,0,0,["bk",AT4(AOs),"b8",AT5(AHH),"ca",AT6(AGh),"D",AT3(AEN)],BR,0,BC,[],0,0,0,0,["d",AT5(AIu),"L",AT3(AMB),"bK",AT3(AKt),"D",AT3(ANf),"eb",AT2(AGc)],Iu,0,BR,[],0,0,0,0,["d",AT5(AMj),"D",AT3(ANH)],Dv,0,Iu,[],0,0,0,0,["d",AT5(AGQ),
"L",AT3(ANo)],Mv,0,Dv,[],0,0,0,0,["d",AT5(AMv),"D",AT3(APJ)],VB,0,Dv,[],0,0,0,0,["d",AT5(AFv),"D",AT3(AO8)],Rc,0,Dv,[],0,0,0,0,["d",AT5(AF_),"D",AT3(ARk)],Tg,0,Dv,[],0,0,0,0,["d",AT5(AEj),"D",AT3(ANW)],F6,0,BR,[],0,0,0,0,["d",AT5(AEB),"b8",AT5(AKN),"ca",AT6(AOc),"bK",AT3(AKn),"fa",AT2(AMF),"eb",AT2(AQz)],AC1,0,B,[Bo],1,3,0,0,0,Gm,0,B,[],1,0,0,0,0,Q,0,Gm,[],1,0,0,OG,["c9",AT2(AFx),"eE",AT2(AE2),"iW",AT2(AOY),"gP",AT2(AQt)]]);
$rt_metadata([Y$,0,Q,[],0,0,0,0,["j",AT3(CN),"c9",AT2(CI),"eE",AT2(AHC),"iW",AT2(APq),"cO",AT2(ALK),"gP",AT2(AHQ)],IM,0,Bt,[],0,3,0,0,0,DP,0,BC,[],1,0,0,0,["bK",AT3(AOd),"D",AT3(APN),"eb",AT2(AK9)],CP,0,DP,[],0,0,0,0,["d",AT5(AEm)],ES,0,CP,[],0,0,0,0,["d",AT5(AFh)],CD,0,DP,[],0,0,0,0,["d",AT5(AEA)],Eg,0,CP,[],0,0,0,0,["d",AT5(AKT),"L",AT3(ARn)],VO,0,CP,[],0,0,0,0,["d",AT5(AQW),"b8",AT5(ALE)],W,0,B,[],1,0,0,0,0,C2,0,BD,[],0,3,0,0,0,MN,0,Gm,[DR],0,0,0,0,["cO",AT2(ALO)],N9,0,BC,[],0,0,0,0,["d",AT5(AJ4),"D",AT3(AMz)],Ws,
0,B,[DR,Cy],0,3,0,0,0,MC,0,BR,[],0,0,0,0,0,Qo,0,BR,[],0,0,0,0,["d",AT5(AFc),"L",AT3(AMh),"D",AT3(AFQ),"bK",AT3(AFw)],Dl,0,BR,[],0,0,0,0,["d",AT5(AHs),"j",AT3(AH6),"bK",AT3(AE8),"L",AT3(AON),"D",AT3(AHE)],IJ,0,Dl,[],0,0,0,0,["j",AT3(AJD)],YZ,0,BW,[],0,0,0,0,["bk",AT4(AJ5)],DZ,0,BW,[],0,0,0,0,["bk",AT4(Md),"bK",AT3(AMD)],OH,0,BR,[],0,0,0,0,["L",AT3(AKR),"d",AT5(AEa),"bK",AT3(AFG),"D",AT3(APv)],D$,0,BW,[],0,0,0,0,["bQ",AT2(AJM),"bk",AT4(AIH),"b8",AT5(AHp),"ca",AT6(AJU),"bK",AT3(APl)],ADl,0,BW,[],0,0,0,0,["bk",
AT4(AD4)],XZ,0,BW,[],0,0,0,0,["bk",AT4(AEs)],E1,0,BR,[],0,0,0,0,["L",AT3(AQx),"d",AT5(AMi),"bK",AT3(AJ6),"D",AT3(ANq)],WP,0,E1,[],0,0,0,0,0,Ts,0,E1,[],0,0,0,0,0,XK,0,CD,[],0,0,0,0,["d",AT5(AGu)],PA,0,CD,[],0,0,0,0,["d",AT5(ALr)],Ft,0,CD,[],0,0,0,0,["d",AT5(AOL),"L",AT3(AP0)],O_,0,Ft,[],0,0,0,0,["d",AT5(AJP),"L",AT3(ALS)],E0,0,CD,[],0,0,0,0,["d",AT5(ARi)],MZ,0,E0,[],0,0,0,0,["d",AT5(AJa)],Rz,0,CD,[],0,0,0,0,["d",AT5(AQJ)],QA,0,Ft,[],0,0,0,0,["d",AT5(AFR)],Uk,0,E0,[],0,0,0,0,["d",AT5(AEW)],RA,0,DP,[],0,0,0,0,
["d",AT5(AQ9),"b8",AT5(AOZ)],Oh,0,DP,[],0,0,0,0,["d",AT5(AMG),"b8",AT5(AEg)],Ex,0,B,[],1,0,0,0,0,XN,0,CP,[],0,0,0,0,["d",AT5(AEX)],VJ,0,Eg,[],0,0,0,0,["d",AT5(ALn)],OY,0,ES,[],0,0,0,0,["d",AT5(AOe)],Qu,0,CP,[],0,0,0,0,["d",AT5(AMx)],TF,0,Eg,[],0,0,0,0,["d",AT5(AE6)],Rd,0,ES,[],0,0,0,0,["d",AT5(AOw)],JV,0,BC,[],4,0,0,0,["d",AT5(AKr),"D",AT3(AJo)],ZD,0,BC,[],0,0,0,0,["d",AT5(AFt),"D",AT3(AFF)],Oc,0,BC,[],0,0,0,0,["d",AT5(AJF),"D",AT3(ARe)],Ww,0,BC,[],4,0,0,0,["d",AT5(AM$),"D",AT3(AGk)],V6,0,BC,[],0,0,0,0,["d",
AT5(AMf),"D",AT3(AD2)],Na,0,BC,[],0,0,0,0,["d",AT5(AGa),"D",AT3(AIk)]]);
$rt_metadata([ADb,0,BR,[],0,0,0,0,["d",AT5(AQO),"L",AT3(AFI),"hr",AT2(ALY),"D",AT3(AFH)],Y7,0,BR,[],4,0,0,0,["d",AT5(AL_),"L",AT3(AN6),"hr",AT2(ADY),"D",AT3(AQ3)],ACW,0,BC,[],4,0,0,0,["d",AT5(AJ$),"D",AT3(AIe)],AA$,0,BC,[],0,0,0,0,["d",AT5(AMe),"D",AT3(AH1)],XW,0,BC,[],0,0,0,0,["d",AT5(AJd),"D",AT3(AGn)],GG,0,BR,[],0,0,0,0,["d",AT5(AE1),"L",AT3(ANl),"D",AT3(ANJ)],AC2,0,GG,[],0,0,0,0,["d",AT5(AGt),"b8",AT5(APF),"ca",AT6(AEL),"bK",AT3(ALe)],AAl,0,GG,[],0,0,0,0,["d",AT5(AKH)],N8,0,FV,[Hv],0,3,0,0,["lG",AT6(AHR),
"kI",AT5(AFy),"hC",AT3(AF0),"mb",AT4(AO1)],RC,0,BW,[],0,0,0,0,["bk",AT4(AGO),"b8",AT5(AFp),"ca",AT6(AIi),"bK",AT3(AIU)],XV,0,BW,[],0,0,0,0,["bk",AT4(AKP)],M5,0,BW,[],0,0,0,0,["bk",AT4(AOi)],GF,0,B,[],4,0,0,ANU,0,Mn,0,BW,[],0,0,0,0,["bk",AT4(AOn)],Kv,0,BR,[],0,0,0,0,["L",AT3(AMu),"d",AT5(AGl),"b8",AT5(AIR),"ca",AT6(AGV),"bK",AT3(AEG),"D",AT3(AO_)],KO,0,BR,[],0,0,0,0,["L",AT3(AFZ),"d",AT5(AEk),"b8",AT5(AMP),"ca",AT6(AOg),"bK",AT3(AGP),"D",AT3(AM1)],DE,0,BW,[],0,0,0,0,["bk",AT4(ANK),"b8",AT5(ALL),"ca",AT6(AFY),
"bK",AT3(ANv)],UR,0,Ex,[],0,0,0,0,["hj",AT3(AF9),"s_",AT4(AND)],US,0,Ex,[],0,0,0,0,["hj",AT3(AOA),"s_",AT4(AQo)],AB9,0,B,[],0,0,0,0,0,Ye,0,B,[],0,0,0,0,0,Ks,0,W,[],0,0,0,0,["A",AT2(AAs)],Jx,0,W,[],0,0,0,0,["A",AT2(AA1)],AB2,0,W,[],0,0,0,0,["A",AT2(AN9)],ACu,0,W,[],0,0,0,0,["A",AT2(APb)],ACx,0,W,[],0,0,0,0,["A",AT2(AHt)],Kk,0,W,[],0,0,0,0,["A",AT2(Za)],K4,0,Kk,[],0,0,0,0,["A",AT2(Z1)],ADP,0,W,[],0,0,0,0,["A",AT2(AIQ)],L_,0,K4,[],0,0,0,0,["A",AT2(XU)],AAF,0,L_,[],0,0,0,0,["A",AT2(AK$)],AAV,0,W,[],0,0,0,0,["A",
AT2(AGI)],Zv,0,W,[],0,0,0,0,["A",AT2(AK7)],Zi,0,W,[],0,0,0,0,["A",AT2(AQs)],ACA,0,W,[],0,0,0,0,["A",AT2(ALU)],ADX,0,W,[],0,0,0,0,["A",AT2(AEd)],AB$,0,W,[],0,0,0,0,["A",AT2(AJi)],ABS,0,W,[],0,0,0,0,["A",AT2(ANQ)],ACP,0,W,[],0,0,0,0,["A",AT2(AGF)],Yv,0,W,[],0,0,0,0,["A",AT2(AG4)],X_,0,W,[],0,0,0,0,["A",AT2(AQl)],ACf,0,W,[],0,0,0,0,["A",AT2(AD6)],ACo,0,W,[],0,0,0,0,["A",AT2(AKe)],ZT,0,W,[],0,0,0,0,["A",AT2(AHe)],AA0,0,W,[],0,0,0,0,["A",AT2(AIm)],ADv,0,W,[],0,0,0,0,["A",AT2(AKh)],ACl,0,W,[],0,0,0,0,["A",AT2(APy)],AAh,
0,W,[],0,0,0,0,["A",AT2(AM7)],ZR,0,W,[],0,0,0,0,["A",AT2(ALM)],ADT,0,W,[],0,0,0,0,["A",AT2(AN0)]]);
$rt_metadata([IX,0,W,[],0,0,0,0,["A",AT2(AAX)],ACT,0,IX,[],0,0,0,0,["A",AT2(ALy)],AAJ,0,Ks,[],0,0,0,0,["A",AT2(AFn)],ZM,0,Jx,[],0,0,0,0,["A",AT2(AID)],Zn,0,W,[],0,0,0,0,["A",AT2(AKu)],ZI,0,W,[],0,0,0,0,["A",AT2(AP$)],AAw,0,W,[],0,0,0,0,["A",AT2(AHV)],AAG,0,W,[],0,0,0,0,["A",AT2(AD7)],Zr,0,B,[],4,0,0,0,0,YX,0,B,[],4,3,0,0,0,Nb,0,B,[],0,3,0,0,0,ACh,0,B,[],0,3,0,0,0,AAc,0,B,[],4,3,0,0,0,T5,0,EG,[EF],0,0,0,0,0,Rb,0,EG,[EF],0,0,0,0,0,L3,0,Bt,[],0,3,0,0,0,Y8,0,B,[DV],0,3,0,0,0,Ys,0,B,[],0,3,0,0,0,PW,0,B,[Y],0,3,0,
0,["i",AT3(AQY)],YV,0,B,[],3,3,0,0,0,R8,0,B,[Y],0,3,0,0,["i",AT3(AK_)],R6,0,B,[Y],0,3,0,0,["i",AT3(ANi)],UM,0,B,[DV],0,0,0,0,["cm",AT3(AHy)],VN,0,Q,[],0,0,0,0,["j",AT3(AHA)],VL,0,Q,[],0,0,0,0,["j",AT3(AEy)],Om,0,Q,[],0,0,0,0,["j",AT3(AKl),"cO",AT2(AIr)],Ot,0,Q,[],0,0,0,0,["j",AT3(ANO)],Or,0,Q,[],0,0,0,0,["j",AT3(AOm)],Os,0,Q,[],0,0,0,0,["j",AT3(AKO)],Ow,0,Q,[],0,0,0,0,["j",AT3(AG8)],Ox,0,Q,[],0,0,0,0,["j",AT3(ADZ)],Ou,0,Q,[],0,0,0,0,["j",AT3(AIx)],Ov,0,Q,[],0,0,0,0,["j",AT3(AKQ)],Oy,0,Q,[],0,0,0,0,["j",AT3(APK)],Oz,
0,Q,[],0,0,0,0,["j",AT3(AGy)],Ol,0,Q,[],0,0,0,0,["j",AT3(ARr)],O1,0,Q,[],0,0,0,0,["j",AT3(AIB)],Oj,0,Q,[],0,0,0,0,["j",AT3(AGx)],Ok,0,Q,[],0,0,0,0,["j",AT3(AIa)],Op,0,Q,[],0,0,0,0,["j",AT3(AJH)],Oi,0,Q,[],0,0,0,0,["j",AT3(APi)],On,0,Q,[],0,0,0,0,["j",AT3(AFB)],Oo,0,Q,[],0,0,0,0,["j",AT3(AM0)],XF,0,B,[Y],0,3,0,0,0,FA,0,Cl,[],12,0,0,SD,0,Lw,0,B,[],3,3,0,0,0,Sz,0,B,[Lw],4,3,0,0,0,Of,0,B,[Y],0,3,0,0,["i",AT3(AGE)],W$,0,B,[Y],0,3,0,0,0,Tl,0,B,[],32,0,0,AS2,0]);
$rt_metadata([SJ,0,B,[Y],0,3,0,0,["i",AT3(ANz)],Jh,0,B,[],0,3,0,0,0,AAE,0,B,[Bo],1,3,0,0,0,MU,0,F6,[],0,0,0,0,["b8",AT5(AHZ),"ca",AT6(ARh),"fa",AT2(AGj)],Rq,0,B,[Y],0,3,0,0,["i",AT3(AGg)],Sk,0,B,[Y],0,3,0,0,["i",AT3(AId)],QW,0,B,[B0],0,3,0,0,["bi",AT3(AEb)],XO,0,B,[Bk],0,3,0,0,0,Sp,0,B,[Y],0,3,0,0,["i",AT3(AEv)],XB,0,B,[Y],0,3,0,0,["i",AT3(AN7)],Q6,0,B,[Ho],0,3,0,0,0,UK,0,B,[Lw],0,0,0,0,0,WE,0,B,[B0],0,3,0,0,["bi",AT3(AGZ)],Mu,0,B,[Bk],0,3,0,0,["s",AT2(AIP)],Tu,0,B,[Bk],0,3,0,0,["s",AT2(AO0)],ND,0,B,[Y],0,3,
0,0,["i",AT3(ALx)],Vs,0,B,[Y],0,3,0,0,["i",AT3(AIo)],ST,0,Q,[],0,0,0,0,["j",AT3(APT)],MA,0,Q,[],0,0,0,0,["j",AT3(AFl)],RU,0,Q,[],0,0,0,0,["j",AT3(AE3)],RT,0,Q,[],0,0,0,0,["j",AT3(AHU)],Wg,0,Q,[],0,0,0,0,["j",AT3(AJu)],OR,0,Q,[],0,0,0,0,["j",AT3(APX)],N2,0,Q,[],0,0,0,0,["j",AT3(AMp)],QS,0,Q,[],0,0,0,0,["j",AT3(ANT)],Mt,0,Q,[],0,0,0,0,["j",AT3(AQ0)],My,0,Q,[],0,0,0,0,["j",AT3(AGU)],NC,0,Q,[],0,0,0,0,["j",AT3(AP5)],Pd,0,Q,[],0,0,0,0,["j",AT3(AK4)],Pr,0,Q,[],0,0,0,0,["j",AT3(ANj)],To,0,Q,[],0,0,0,0,["j",AT3(APL)],SA,
0,Q,[],0,0,0,0,["j",AT3(AQD)],MI,0,Q,[],0,0,0,0,["j",AT3(AGG)],LR,0,Q,[],0,0,0,0,["j",AT3(AMs)],RL,0,LR,[],0,0,0,0,["j",AT3(AOO)],Ub,0,B,[],3,3,0,ASt,0,Ru,0,B,[Il],0,3,0,0,["rC",AT2(AOr)],Td,0,B,[B0],0,3,0,0,["bi",AT3(AIK)],Te,0,B,[B0],0,3,0,0,["bi",AT3(AEr)],T9,0,B,[B0],0,3,0,0,["bi",AT3(AQF)],ACF,0,B,[],0,0,0,0,0,Yb,0,B,[Bo],1,3,0,0,0,PK,0,B,[B0],0,3,0,0,["bi",AT3(AOf)],ACb,0,B,[],3,3,0,0,0,AAL,0,B,[Fn],0,3,0,0,0,P$,0,B,[Y],0,3,0,0,["i",AT3(ALh)],P4,0,B,[Y],0,3,0,0,["i",AT3(AN5)],P3,0,B,[Y],0,3,0,0,["i",AT3(AHS)],P6,
0,B,[Y],0,3,0,0,["i",AT3(AEK)],P5,0,B,[Y],0,3,0,0,["i",AT3(AJm)]]);
$rt_metadata([P8,0,B,[Y],0,3,0,0,["i",AT3(AOt)],P7,0,B,[Y],0,3,0,0,["i",AT3(AI$)],Vo,0,B,[],0,3,0,0,0,YH,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.N2=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","null","false","true","Either src or dest is null","dark","light","darcula","unknown theme: ","provided result is not an array","bad model","mermaid","Full file parsed in ","ms","First lines parsed in ",
"change model language: from = "," to = ","ScopeUtils.resolveAll","ActivityParser.parseFullFile","activity","js","cpp","java","text","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","[",", ","]",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js",".activity","\n","...","\\n","Consolas","  ","Set editor font to: ",", ascent+descent = ",", lineHeight = ",", caretHeight = ","topBase(font, lineHeight) = "," ","\r","opening file ","highlight at (",") does not match code model",
"prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaProxy.parseViewport","Illegal language: ","asyncIterativeParsing","deleteDiffModel","keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","#606366","#2B2B2B","#A4A3A3","#323232","#616161","#393B40","#DFE1E5","#484A4A","#294436","#385570","#303C47","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#283541","#AEB3C2","#FFFFFF",
"#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","Illegal argument javaObject instanceof ","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
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
"applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","Segoe UI","The last char in dst ","#BBBBBB","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","defaultText","keyword","#0033b3","field","#871094","string","#3C7C16","comma","error","#F93900","unused","#808080","number","#164FF1","method","#396179","showUsage","braceMatch","#FFEF28","#93D9D9","comment","annotation",
"#BBB529","type","#287BDE","operator","#5F8C8A","#D4E2FF","#000000","#818594","#080808","#A9B7C6","#344134","#40332B","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#3B514D","#3C3F41","#4B6EAF","#787878","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","#CF8E6D","#C77DBB","#6AAB73","#F75464","#6F737A","#2AACB8","#56A8F5","#7A7E85","#B3AE60","#2E436E","#2E426D","#4D4E51","Viewport parsed in ","nwse-resize","nesw-resize","toolbar size is unknown","Expected "," ints to write, but "," written",
"Resolved in ","Int","Iter","VP","Resolve","Rep","/","readClipboardText error: ","navigator.clipboard is undefined","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero."," ints to read, but "," read","Current Version: ","Last Parsed Version: ","Unknown scope type: ","Unexpected type: ","Unexpected ref node type: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase",
"javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew",
"Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional",
"GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators",
"MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals",
"ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co",
"Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","DEF","DECL","writeClipboardText error: ","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","Verdana","JetBrains Mono","File structure parsed in "]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AFV(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var AXO=Long_add;var JW=Long_sub;var ALF=Long_mul;var AXP=Long_div;var AXQ=Long_rem;var AXR=Long_or;var XP=Long_and;var AXS=Long_xor;var AXT=Long_shl;var AXU=Long_shr;var ATr=Long_shru;var AXV=Long_compare;var AG9=Long_eq;var AXW=Long_ne;var AR3=Long_lt;var AXX=Long_le;var AXY=Long_gt;var AR1=Long_ge;var AXZ=Long_not;var ASR=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(ASg);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=T7.prototype;c.create=c.yb;c=T6.prototype;c.create=c.A0;c=TO.prototype;c.create=c.yb;c=Pm.prototype;c.registerDocumentHighlightProvider=c.y9;c.getModel=c.E7;c.getProperty=c.CL;c.getText=c.ze;c.onDidChangeModel=c.HD;c.revealPosition=c.EQ;c.focus=c.Dg;c.setReadonly=c.At;c.setPosition=c.FB;c.setFontSize=c.Dz;c.setFontFamily=c.Ar;c.revealLine=c.Ku;c.getPosition=c.It;c.revealLineInCenter=c.B5;c.setTheme=c.KQ;c.setModel=c.zE;c.executeOnWorker=c.Bx;c.registerDefinitionProvider=c.GL;c.registerEditorOpener
=c.He;c.registerReferenceProvider=c.HB;c.dispose=c.EG;c.registerDeclarationProvider=c.Jy;c.setText=c.D8;c=EV.prototype;c.getPositionAt=c.A8;c.getText=c.E$;c.getOffsetAt=c.D4;c.dispose=c.A6;Object.defineProperty(c,"language",{get:c.Iy});Object.defineProperty(c,"uri",{get:c.Dw});c=VC.prototype;c.setRightModel=c.BI;c.setFontFamily=c.Jl;c.setLeftModel=c.GC;c.setTheme=c.zZ;c.getRightModel=c.KR;c.focus=c.Fd;c.getLeftModel=c.GJ;c.setReadonly=c.zU;c.setFontSize=c.Ff;c=Uc.prototype;c.f=c.ms;c=Xu.prototype;c.f=c.ms;c
=Ym.prototype;c.createEntityReference=c.Cf;c.getElementById=c.Gm;c.createTextNode=c.FZ;c.hasChildNodes=c.D6;c.querySelectorAll=c.BV;c.removeChild=c.Ie;c.cloneNode=c.zW;c.createComment=c.Kj;c.insertBefore=c.CP;c.getElementsByTagNameNS=c.IH;c.hasAttributes=c.Fs;c.normalize=c.Kx;c.hasChildNodesJS=c.Kg;c.getElementsByTagName=c.Jt;c.appendChild=c.Ap;c.createAttributeNS=c.GR;c.dispatchEvent=c.JU;c.replaceChild=c.AY;c.createElementNS=c.De;c.createCDATASection=c.Ip;c.querySelector=c.Fq;c.createElement=c.Ht;c.isSupported
=c.Ir;c.importNode=c.Db;c.removeEventListener=c.C2;c.createAttribute=c.JX;c.createDocumentFragment=c.y7;c.createProcessingInstruction=c.B$;c.addEventListener=c.Hq;Object.defineProperty(c,"nodeName",{get:c.Ao});Object.defineProperty(c,"documentElement",{get:c.ER});Object.defineProperty(c,"childNodes",{get:c.H3});Object.defineProperty(c,"prefix",{get:c.Dm,set:c.KK});Object.defineProperty(c,"implementation",{get:c.IW});Object.defineProperty(c,"textContent",{get:c.Kt,set:c.FX});Object.defineProperty(c,"parentNode",
{get:c.Gj});Object.defineProperty(c,"nextSibling",{get:c.EB});Object.defineProperty(c,"nodeType",{get:c.HQ});Object.defineProperty(c,"doctype",{get:c.Es});Object.defineProperty(c,"localName",{get:c.Jo});Object.defineProperty(c,"nodeValue",{get:c.D9,set:c.J8});Object.defineProperty(c,"firstChild",{get:c.JE});Object.defineProperty(c,"lastChild",{get:c.HA});Object.defineProperty(c,"previousSibling",{get:c.z3});Object.defineProperty(c,"namespaceURI",{get:c.BC});Object.defineProperty(c,"attributes",{get:c.Dv});Object.defineProperty(c,
"ownerDocument",{get:c.BO});c=Zd.prototype;c.removeEventListener=c.BX;c.dispatchEvent=c.CY;c.addEventListener=c.GK;c=Sj.prototype;c.f=c.ms;c=U$.prototype;c.dispose=c.C5;c=AAI.prototype;c.get=c.Ju;Object.defineProperty(c,"length",{get:c.IN});c=Pq.prototype;c.f=c.bi;c=QO.prototype;c.f=c.bi;c=NE.prototype;c.f=c.bi;c=U7.prototype;c.onAnimationFrame=c.Fw;c=U4.prototype;c.f=c.ms;c=U2.prototype;c.handleEvent=c.b4;c=St.prototype;c.f=c.bi;c=VY.prototype;c.handleEvent=c.b4;c=VZ.prototype;c.handleEvent=c.b4;c=V0.prototype;c.handleEvent
=c.b4;c=V1.prototype;c.handleEvent=c.b4;c=AC5.prototype;c.handleEvent=c.b4;c=AC6.prototype;c.handleEvent=c.b4;c=AC7.prototype;c.handleEvent=c.b4;c=AC8.prototype;c.handleEvent=c.b4;c=AC9.prototype;c.handleEvent=c.b4;c=AC$.prototype;c.handleEvent=c.b4;c=ADK.prototype;c.handleEvent=c.b4;c=ADL.prototype;c.handleEvent=c.b4;c=ADM.prototype;c.handleEvent=c.b4;c=ADN.prototype;c.handleEvent=c.b4;c=TW.prototype;c.handleEvent=c.b4;c=WY.prototype;c.f=c.bi;c=WZ.prototype;c.f=c.bi;c=Nx.prototype;c.accept=c.J9;c=WS.prototype;c.f
=c.bi;c=WR.prototype;c.f=c.bi;c=Wb.prototype;c.f=c.bi;c=Wa.prototype;c.f=c.bi;c=WN.prototype;c.handleEvent=c.b4;c=Mm.prototype;c.f=c.bi;c=QR.prototype;c.f=c.bi;c=P_.prototype;c.f=c.bi;c=Mx.prototype;c.onTimer=c.rC;c=Mg.prototype;c.onTimer=c.rC;c=SV.prototype;c.f=c.bi;c=WQ.prototype;c.f=c.bi;c=SW.prototype;c.f=c.bi;c=Wy.prototype;c.f=c.bi;c=TL.prototype;c.f=c.bi;c=QW.prototype;c.f=c.bi;c=WE.prototype;c.f=c.bi;c=Ru.prototype;c.onTimer=c.rC;c=Td.prototype;c.f=c.bi;c=Te.prototype;c.f=c.bi;c=T9.prototype;c.f=c.bi;c
=PK.prototype;c.f=c.bi;})();
$rt_exports.main();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);
export const newEditor = self.editorFactory;
export const newTextModel = self.modelFactory;
export const newCodeDiff = self.diffFactory;
