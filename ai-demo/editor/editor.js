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
function $rt_cls(cls){return ABC(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return GY(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b$.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AOa(t);}
function $rt_throwableCause(t){return AOf(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ATW());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ATX(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ATY());}
function $rt_throwCCE(){}
var A=Object.create(null);
var L=$rt_throw;var BD=$rt_compare;var ATZ=$rt_nullCheck;var E=$rt_cls;var P=$rt_createArray;var H8=$rt_isInstance;var AT0=$rt_nativeThread;var AT1=$rt_suspending;var AT2=$rt_resuming;var AT3=$rt_invalidPointer;var C=$rt_s;var Bn=$rt_eraseClinit;var T=$rt_imul;var E3=$rt_wrapException;var AT4=$rt_checkBounds;var AT5=$rt_checkUpperBound;var AT6=$rt_checkLowerBound;var AT7=$rt_wrapFunction0;var AT8=$rt_wrapFunction1;var AT9=$rt_wrapFunction2;var AT$=$rt_wrapFunction3;var AT_=$rt_wrapFunction4;var F=$rt_classWithoutFields;var G
=$rt_createArrayFromData;var ASw=$rt_createCharArrayFromData;var AUa=$rt_createByteArrayFromData;var AUb=$rt_createShortArrayFromData;var FH=$rt_createIntArrayFromData;var AUc=$rt_createBooleanArrayFromData;var AUd=$rt_createFloatArrayFromData;var AUe=$rt_createDoubleArrayFromData;var AGg=$rt_createLongArrayFromData;var ATV=$rt_createBooleanArray;var DX=$rt_createByteArray;var AUf=$rt_createShortArray;var B1=$rt_createCharArray;var By=$rt_createIntArray;var AUg=$rt_createLongArray;var AEr=$rt_createFloatArray;var AUh
=$rt_createDoubleArray;var BD=$rt_compare;var AUi=$rt_castToClass;var AUj=$rt_castToInterface;var AUk=Long_toNumber;var BL=Long_fromInt;var AUl=Long_fromNumber;var Dm=Long_create;var ACw=Long_ZERO;var AUm=Long_hi;var ZQ=Long_lo;
function B(){this.$id$=0;}
function BA(a){return ABC(a.constructor);}
function AK8(a,b){return a!==b?0:1;}
function AF6(a){var b,c,d,e,f,g,h,i,j;b=Iy(a);if(!b)c=C(0);else{d=(((32-ND(b)|0)+4|0)-1|0)/4|0;e=B1(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=GQ((b>>>g|0)&15,16);g=g-4|0;h=i;}c=GY(e);}j=new R;U(j);K(K(j,C(1)),c);return S(j);}
function Iy(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AKp(a){var b,c,d;if(!H8(a,DP)&&a.constructor.$meta.item===null){b=new Va;X(b);L(b);}b=AEx(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var AAx=F(0);
function ASm(b){ACN();Yu();AAj();ADp();AA3();AB_();AD6();ABb();ZU();ACQ();Yl();ADc();Yp();ACf();AB3();ABU();AAM();Z0();AAl();ABk();ABS();YQ();ADP();$rt_globals.editorFactory=Bm(new T_,"create");$rt_globals.modelFactory=Bm(new T$,"create");$rt_globals.diffFactory=Bm(new TR,"create");}
var MV=F(0);
var Ml=F(0);
function VX(){var a=this;B.call(a);a.kl=null;a.fG=null;}
function ABC(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new VX;c.fG=b;d=c;b.classObject=d;}return c;}
function Hn(a){return a.fG.$meta.primitive?1:0;}
function HI(a){return ABC(a.fG.$meta.item);}
var Zs=F();
function Bm(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Cv(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Y9=F();
function AEx(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ABH(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ABH(d[e],c))return 1;e=e+1|0;}return 0;}
function F6(){var a=this;B.call(a);a.lT=null;a.rg=null;a.lM=0;a.mC=0;}
function AUn(){var a=new F6();X(a);return a;}
function AUo(a){var b=new F6();Bp(b,a);return b;}
function X(a){a.lM=1;a.mC=1;}
function Bp(a,b){a.lM=1;a.mC=1;a.lT=b;}
function AHX(a){return a;}
function AOa(a){return a.lT;}
function AOf(a){var b;b=a.rg;if(b===a)b=null;return b;}
var DO=F(F6);
function AUp(){var a=new DO();AB7(a);return a;}
function AUq(a){var b=new DO();X9(b,a);return b;}
function AB7(a){X(a);}
function X9(a,b){Bp(a,b);}
var Bt=F(DO);
function ATX(a){var b=new Bt();AP$(b,a);return b;}
function AP$(a,b){Bp(a,b);}
var AAQ=F(Bt);
var Cy=F(0);
var Cp=F(0);
var Ih=F(0);
function Bv(){var a=this;B.call(a);a.b$=null;a.hH=0;}
var AUr=null;var AUs=null;var AUt=null;function F7(){F7=Bn(Bv);API();}
function AIR(){var a=new Bv();Yh(a);return a;}
function GY(a){var b=new Bv();IL(b,a);return b;}
function DV(a,b,c){var d=new Bv();L7(d,a,b,c);return d;}
function Yh(a){F7();a.b$=AUr;}
function IL(a,b){F7();L7(a,b,0,b.data.length);}
function L7(a,b,c,d){var e;F7();e=B1(d);a.b$=e;C_(b,c,e,0,d);}
function LY(b){var c;F7();c=AIR();c.b$=b;return c;}
function I(a,b){var c,d;if(b>=0){c=a.b$.data;if(b<c.length)return c[b];}d=new GN;X(d);L(d);}
function H(a){return a.b$.data.length;}
function Eu(a){return a.b$.data.length?0:1;}
function P2(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=H(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){C_(a.b$,b,d,e,c);return;}}g=new BV;X(g);L(g);}
function TT(a,b,c){var d,e,f;if((c+H(b)|0)>H(a))return 0;d=0;while(d<H(b)){e=I(b,d);f=c+1|0;if(e!=I(a,c))return 0;d=d+1|0;c=f;}return 1;}
function J0(a,b){if(a===b)return 1;return TT(a,b,0);}
function DH(a,b){var c,d,e,f;if(a===b)return 1;if(H(b)>H(a))return 0;c=0;d=H(a)-H(b)|0;while(d<H(a)){e=I(a,d);f=c+1|0;if(e!=I(b,c))return 0;d=d+1|0;c=f;}return 1;}
function HS(a,b,c){var d,e,f,g,h;d=Z(0,c);if(b<65536){e=b&65535;while(true){f=a.b$.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Kc(b);h=Lt(b);while(true){f=a.b$.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function G4(a,b,c){var d,e,f,g,h;d=Ba(c,H(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b$.data[d]==e)break;d=d+(-1)|0;}return d;}f=Kc(b);g=Lt(b);while(true){if(d<1)return (-1);h=a.b$.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function PM(a,b,c){var d,e,f;d=Z(0,c);e=H(a)-H(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=H(b))break a;if(I(a,d+f|0)!=I(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AMz(a,b){return PM(a,b,0);}
function PZ(a,b,c){var d,e;d=Ba(c,H(a)-H(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=H(b))break a;if(I(a,d+e|0)!=I(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AAt(a,b){return PZ(a,b,H(a));}
function B9(a,b,c){var d,e;d=BD(b,c);if(d>0){e=new BV;X(e);L(e);}if(!d){F7();return AUs;}if(!b&&c==H(a))return a;return DV(a.b$,b,c-b|0);}
function D3(a,b){return B9(a,b,H(a));}
function P9(a,b,c){return B9(a,b,c);}
function Hi(a,b){var c,d,e,f,g,h;if(Eu(b))return a;if(Eu(a))return b;c=B1(H(a)+H(b)|0);d=c.data;e=0;f=0;while(f<H(a)){g=e+1|0;d[e]=I(a,f);f=f+1|0;e=g;}g=0;while(g<H(b)){h=e+1|0;d[e]=I(b,g);g=g+1|0;e=h;}return LY(c);}
function UK(a,b,c){var d,e,f,g;d=new R;U(d);e=H(a)-H(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=H(b)){K(d,c);f=f+(H(b)-1|0)|0;break a;}if(I(a,f+g|0)!=I(b,g))break;g=g+1|0;}BX(d,I(a,f));}f=f+1|0;}K(d,D3(a,f));return S(d);}
function RZ(a){var b,c;b=0;c=H(a)-1|0;a:{while(b<=c){if(I(a,b)>32)break a;b=b+1|0;}}while(b<=c&&I(a,c)<=32){c=c+(-1)|0;}return B9(a,b,c+1|0);}
function AF4(a){return a;}
function E2(a){var b,c,d,e,f;b=a.b$.data;c=B1(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function D8(b){var c;F7();c=new R;U(c);return S(Bl(c,b));}
function BE(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(H(c)!=H(a))return 0;d=0;while(d<H(c)){if(I(a,d)!=I(c,d))return 0;d=d+1|0;}return 1;}
function Gf(a){var b,c,d,e;a:{if(!a.hH){b=a.b$.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hH=(31*a.hH|0)+e|0;d=d+1|0;}}}return a.hH;}
function LD(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gb;Bp(b,C(2));L(b);}AUu=1;d=new Rd;d.j$=P(CC,10);d.f6=(-1);d.ez=(-1);d.bm=(-1);e=new Gg;e.ev=1;e.bB=b;e.W=B1(H(b)+2|0);C_(E2(b),0,e.W,0,H(b));f=e.W.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.sh=g;e.fL=0;EN(e);EN(e);d.g=e;d.dn=0;d.lb=Xm(d,(-1),0,null);if(!C1(d.g)){b=new Ic;h=d.g;IR(b,C(3),h.bB,h.cZ);L(b);}if(d.nX)d.lb.ea();b=Bz();h=new SE;h.il=(-1);h.kv=(-1);h.w5=d;h.uO=d.lb;h.iG=a;h.il=0;g=H(a);h.kv=g;e=new UP;i=h.il;j=d.f6;k=d.ez+1|0;l=d.bm+1|0;e.hl
=(-1);m=j+1|0;e.pa=m;e.dz=By(m*2|0);f=By(l);e.jl=f;G6(f,(-1));if(k>0)e.k4=By(k);G6(e.dz,(-1));W_(e,a,i,g);h.cl=e;e.e8=1;n=0;m=0;if(!H(a)){f=P(Bv,1);f.data[0]=C(3);}else{while(true){l=H(h.iG);if(!Yy(h))l=h.kv;e=h.cl;if(e.d7>=0&&AAc(e)==1){e=h.cl;e.d7=Iw(e);if(Iw(h.cl)==AB$(h.cl)){e=h.cl;e.d7=e.d7+1|0;}g=h.cl.d7;g=g<=l&&Mv(h,g)?1:0;}else g=Mv(h,h.il);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Bw(b,P9(a,m,ADE(h)));m=ZX(h);n=g;}a:{Bw(b,P9(a,m,H(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(H(Bs(b,g)))break a;Fi(b,
g);}}if(g<0)g=0;f=Hj(b,P(Bv,g));}return f;}
function AH9(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Ba(H(a),H(b));e=0;while(true){if(e>=d){c=H(a)-H(b)|0;break a;}c=I(a,e)-I(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function API(){AUr=B1(0);AUs=AIR();AUt=new SW;}
var F1=F(F6);
var GS=F(F1);
var AAs=F(GS);
var Eq=F();
function FQ(){Eq.call(this);this.bd=0;}
var AUv=null;var AUw=null;function APn(a){var b=new FQ();ZJ(b,a);return b;}
function ZJ(a,b){a.bd=b;}
function KR(b){return (Nh(ATH(20),b,10)).cP();}
function I4(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new CZ;Bp(b,C(4));L(b);}d=H(b);if(0==d){b=new CZ;Bp(b,C(5));L(b);}if(c>=2&&c<=36){a:{e=0;switch(I(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new CZ;X(b);L(b);}b:{c:{while(f<d){h=f+1|0;i=O3(I(b,f));if(i<0){j=new CZ;k=B9(b,0,d);b=new R;U(b);K(K(b,C(6)),k);Bp(j,S(b));L(j);}if(i>=c){j=new CZ;l=B9(b,0,d);b=new R;U(b);K(K(Bl(K(b,C(7)),c),C(8)),l);Bp(j,S(b));L(j);}g=T(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new CZ;k=B9(b,0,d);b=new R;U(b);K(K(b,C(9)),k);Bp(j,S(b));L(j);}b=new CZ;j=new R;U(j);Bl(K(j,C(10)),c);Bp(b,S(j));L(b);}
function Cs(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AUw===null){AUw=P(FQ,256);c=0;while(true){d=AUw.data;if(c>=d.length)break a;d[c]=APn(c-128|0);c=c+1|0;}}}return AUw.data[b+128|0];}return APn(b);}
function AQS(a,b){if(a===b)return 1;return b instanceof FQ&&b.bd==a.bd?1:0;}
function ND(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function HU(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AKk(a,b){b=b;return BD(a.bd,b.bd);}
function ACN(){AUv=E($rt_intcls());}
function FU(){var a=this;B.call(a);a.M=null;a.H=0;}
function AUx(){var a=new FU();U(a);return a;}
function ATH(a){var b=new FU();FA(b,a);return b;}
function U(a){FA(a,16);}
function FA(a,b){a.M=B1(b);}
function Nh(a,b,c){return AAE(a,a.H,b,c);}
function AAE(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cu(a,b,b+1|0);else{Cu(a,b,b+2|0);f=a.M.data;g=b+1|0;f[b]=45;b=g;}a.M.data[b]=GQ(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=T(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cu(a,b,b+i|0);if(e)e=b;else{f=a.M.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.M.data;b=e+1|0;f[e]=GQ($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ABv(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BD(c,0.0);if(!d){if(1.0/c===Infinity){Cu(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cu(a,b,b+4|0);e=a.M.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cu(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cu(a,b,b+8|0);d=b;}else{Cu(a,b,b+9|0);e=a.M.data;d=b+1|0;e[b]=45;}e=a.M.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AUy;ABl(c,f);d=f.kC;g=f.kg;h=f.of;i=1;j=1;if(h)j=2;k=9;l=AO$(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Z(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cu(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.M.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.M.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.M.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.M.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AO$(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function BX(a,b){return a.md(a.H,b);}
function W1(a,b,c){Cu(a,b,b+1|0);a.M.data[b]=c;return a;}
function I9(a,b){var c,d;c=a.M.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.M=Nw(a.M,d);}
function S(a){return DV(a.M,0,a.H);}
function WK(a,b,c,d){return a.lH(a.H,b,c,d);}
function MP(a,b,c,d,e){var f,g,h,i;Cu(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.M.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function HW(a,b){return a.kI(b,0,b.data.length);}
function Cu(a,b,c){var d,e,f,g;d=a.H;e=d-b|0;a.hz((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.M.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.H=a.H+(c-b|0)|0;}
var Hs=F(0);
var R=F(FU);
function K(a,b){var c;c=a.H;if(b===null)b=C(11);L2(a,c,b);return a;}
function CW(a,b){L2(a,a.H,b);return a;}
function Bl(a,b){Nh(a,b,10);return a;}
function FV(a,b){var c,d,e,f,g,h,i,j;c=a.H;d=1;if(AR$(b,ACw)){d=0;b=ASX(b);}a:{if(HQ(b,BL(10))<0){if(d)Cu(a,c,c+1|0);else{Cu(a,c,c+2|0);e=a.M.data;f=c+1|0;e[c]=45;c=f;}a.M.data[c]=GQ(ZQ(b),10);}else{g=1;h=BL(1);i=Ln(BL(-1),BL(10));b:{while(true){j=ALN(h,BL(10));if(HQ(j,b)>0){j=h;break b;}g=g+1|0;if(HQ(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cu(a,c,c+g|0);if(d)f=c;else{e=a.M.data;f=c+1|0;e[c]=45;}while(true){if(AHk(j,ACw))break a;e=a.M.data;c=f+1|0;e[f]=GQ(ZQ((Ln(b,j))),10);b=Yx(b,j);j=Ln(j,BL(10));f=c;}}}return a;}
function QV(a,b){ABv(a,a.H,b);return a;}
function X$(a,b){BX(a,b);return a;}
function I8(a,b){L2(a,a.H,!b?C(12):C(13));return a;}
function ADs(a,b,c){var d,e,f,g,h,i;d=BD(b,c);if(d<=0){e=a.H;if(b<=e){if(d){f=e-c|0;a.H=e-(c-b|0)|0;g=0;while(g<f){h=a.M.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new GN;X(i);L(i);}
function VI(a,b){var c,d,e,f;if(b>=0){c=a.H;if(b<c){c=c-1|0;a.H=c;while(b<c){d=a.M.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new GN;X(f);L(f);}
function AKg(a,b,c,d,e){MP(a,b,c,d,e);return a;}
function AHd(a,b,c,d){WK(a,b,c,d);return a;}
function YR(a){return a.H;}
function Je(a){return S(a);}
function AKn(a,b){I9(a,b);}
function AKS(a,b,c){W1(a,b,c);return a;}
function L2(a,b,c){var d,e,f;if(b>=0&&b<=a.H){a:{if(c===null)c=C(11);else if(Eu(c))break a;I9(a,a.H+H(c)|0);d=a.H-1|0;while(d>=b){a.M.data[d+H(c)|0]=a.M.data[d];d=d+(-1)|0;}a.H=a.H+H(c)|0;d=0;while(d<H(c)){e=a.M.data;f=b+1|0;e[b]=I(c,d);d=d+1|0;b=f;}}return a;}c=new GN;X(c);L(c);}
var Fl=F(GS);
var ABM=F(Fl);
function AUz(a){var b=new ABM();AGc(b,a);return b;}
function AGc(a,b){Bp(a,b);}
var AAh=F(Fl);
function AUA(a){var b=new AAh();AGq(b,a);return b;}
function AGq(a,b){Bp(a,b);}
var Bo=F(0);
function JG(b){return b;}
var RN=F(0);
var T_=F();
function AIv(a,b){var c;if(!Yt())b=$rt_globals.Promise.reject(new $rt_globals.Error("This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled"));else{c=new Ug;c.n$=b;b=new $rt_globals.Promise(Bm(c,"f"));}return b;}
var ABm=F();
var OJ=F(0);
var T$=F();
function AK4(a,b,c,d){var e,f,g;e=new ET;f=ABR(b);b=GL(c,null);g=AQQ(f,b,ABL(d));e.dp=g;g.le=e;e.k0=c;e.kb=d;return e;}
var AAI=F();
var SY=F(0);
var TR=F();
function AKh(a,b){var c;if(!Yt())b=$rt_globals.Promise.reject(new $rt_globals.Error("This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled"));else{c=new XE;c.nf=b;b=new $rt_globals.Promise(Bm(c,"f"));}return b;}
var ZK=F();
var KP=F();
var AUB=null;var AUC=null;function FJ(){if(AUB===null)AUB=ALI(AUD,0);return AUB;}
function Ed(){if(AUC===null)AUC=ALI(AUE,0);return AUC;}
function ASP(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KW(b)&&(e+f|0)<=KW(d)){a:{b:{if(b!==d){g=HI(BA(b));h=HI(BA(d));if(g!==null&&h!==null){if(g===h)break b;if(!Hn(g)&&!Hn(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fG;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ABH(n.constructor,o)?1:0)){J2(b,c,d,e,j);b=new Ib;X(b);L(b);}j=j+1|0;k=m;}J2(b,c,d,e,f);return;}if(!Hn(g))break a;if(Hn(h))break b;else break a;}b=new Ib;X(b);L(b);}}J2(b,c,
d,e,f);return;}b=new Ib;X(b);L(b);}b=new BV;X(b);L(b);}d=new Gb;Bp(d,C(14));L(d);}
function C_(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KW(b)&&(e+f|0)<=KW(d)){J2(b,c,d,e,f);return;}b=new BV;X(b);L(b);}
function J2(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Ec(){return Long_fromNumber(new Date().getTime());}
var ACy=F();
var GM=F(0);
var SW=F();
var BV=F(Bt);
var ABr=F();
function KW(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AUF());}return b.data.length;}
function AB9(b,c){if(b===null){b=new Gb;X(b);L(b);}if(b===E($rt_voidcls())){b=new BF;X(b);L(b);}if(c>=0)return AQh(b.fG,c);b=new XR;X(b);L(b);}
function AQh(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Gb=F(Bt);
var Ib=F(Bt);
function CR(){B.call(this);this.kf=0;}
var AUG=null;var AUH=null;var AUI=null;var AUJ=null;var AUK=null;var AUL=null;var AUM=null;var AUN=null;var AUO=null;var AUP=null;function AQ0(a){var b=new CR();Z9(b,a);return b;}
function Z9(a,b){a.kf=b;}
function NI(b){var c,d;c=AUL.data;if(b>=c.length)return AQ0(b);d=c[b];if(d===null){d=AQ0(b);AUL.data[b]=d;}return d;}
function Wy(b){var c,d;c=new Bv;d=B1(1);d.data[0]=b;IL(c,d);return c;}
function LI(b){return b>=65536&&b<=1114111?1:0;}
function Cr(b){return (b&64512)!=55296?0:1;}
function CO(b){return (b&64512)!=56320?0:1;}
function WN(b){return !Cr(b)&&!CO(b)?0:1;}
function G1(b,c){return Cr(b)&&CO(c)?1:0;}
function Eh(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Kc(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Lt(b){return (56320|b&1023)&65535;}
function EG(b){return Ga(b)&65535;}
function Ga(b){if(AUJ===null){if(AUM===null)AUM=AB2();AUJ=AAo((AUM.value!==null?$rt_str(AUM.value):null));}return SK(AUJ,b);}
function Ek(b){return F9(b)&65535;}
function F9(b){if(AUI===null){if(AUN===null)AUN=ACO();AUI=AAo((AUN.value!==null?$rt_str(AUN.value):null));}return SK(AUI,b);}
function SK(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BD(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function Ui(b,c){if(c>=2&&c<=36){b=O3(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function O3(b){var c,d,e,f,g,h,i,j,k,l;if(AUH===null){if(AUO===null)AUO=AAv();c=(AUO.value!==null?$rt_str(AUO.value):null);d=AOg(E2(c));e=Jg(d);f=By(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+MW(d)|0;j=j+MW(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AUH=f;}g=AUH.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BD(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function GQ(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function F3(b){var c;if(b<65536){c=B1(1);c.data[0]=b&65535;return c;}return ASw([Kc(b),Lt(b)]);}
function Ch(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&WN(b&65535))return 19;if(AUK===null){if(AUP===null)AUP=ADY();d=(AUP.value!==null?$rt_str(AUP.value):null);e=P(Na,16384);f=e.data;g=DX(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<H(d)){m=J1(I(d,l));if(m==64){l=l+1|0;m=J1(I(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|T(c,J1(I(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=J1(I(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AH5(k,k+i|0,LC(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AH5(k,k+i|0,LC(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AUK=C2(e,j);}e=AUK.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.r8)o=p+1|0;else{c=d.pV;if(b>=c)return d.qb.data[b-c|0];c=p-1|0;}}return 0;}
function I1(b){a:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function FY(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ch(b)!=16?0:1;}
function PB(b){switch(Ch(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Rg(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return PB(b);}return 1;}
function Yu(){AUG=E($rt_charcls());AUL=P(CR,128);}
function AB2(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ACO(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AAv(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ADY(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var H4=F(0);
function FN(b){var c;BM(b);c=new Vc;c.mK=b;return c;}
var Rw=F(0);
function Pw(){var a=this;B.call(a);a.g1=null;a.bw=null;}
function Nu(a){return a.g1.d8;}
function QK(a,b){var c,d;a:{c=Nu(a);b=Ce(b);d=(-1);switch(Gf(b)){case 3075958:if(!BE(b,C(15)))break a;d=2;break a;case 102970646:if(!BE(b,C(16)))break a;d=0;break a;case 1441429116:if(!BE(b,C(17)))break a;d=1;break a;default:}}b:{switch(d){case 0:break;case 1:LS(c);break b;case 2:FS(c);break b;default:c=new R;U(c);K(K(c,C(18)),b);$rt_globals.console.info($rt_ustr(S(c)));break b;}J4(c);}}
function V8(b,c,d){var e,f,g,h,i,j,k;if(!((b?1:0)?1:0))$rt_globals.console.info("provider result is undefined");else if(!($rt_globals.Array.isArray(b)?1:0))Lg(d,C(19));else{e=P(Ji,b.length);f=e.data;g=0;h=f.length;while(g<h){i=b[g];j=new Ji;k=ABL(i.uri);j.fX=new L5;j.g9=k;X0(i.range,j.fX);f[g]=j;g=g+1|0;}c.j(e);}}
function P$(a,b){var c,d,e,f;c=a.bw;b=b-1|0;if(b>0){d=b-1|0;e=c.z;d=T(d,e);f=c.V;if(d<f)DR(c,T(b-2|0,e));else if((d-f|0)>=Cz(c))DR(c,b>Cb(c.c.f)?FL(c):T(b+1|0,c.z)-Cz(c)|0);}}
function Ut(a,b){a.bw.dv=YT(b);}
function ABo(){$rt_globals.console.info("FATAL: WebGL is not enabled in the browser");}
function AOD(a,b){var c,d;c=a.bw.cv.l2;d=new Pq;d.uY=a;d.uZ=b;return FN(Fd(c,d));}
function ANv(a,b,c){var d,e;d=new Kv;e=Jk(b);b=new MN;b.uE=c;KE(d,e);d.rp=b;return FN(Fd(a.bw.cv.jR,d));}
function APX(a,b){var c,d;c=a.bw.c;d=AQQ(ABR(b),c.hb,c.c9);Gh(a.bw,d);}
function AHn(a,b){var c,d;c=a.bw;d=b.column-1|0;Ck(c,b.lineNumber-1|0,d,0);}
function ANO(a){UL(a.g1);}
function AIG(a,b){P$(a,b);}
function AIC(a){return M0(Df(a.bw.c.f));}
function AJU(a){var b;b=a.bw.c;return Hz(b.r,b.o);}
function AHl(a,b){QK(a,b);}
function AM4(a,b,c){var d,e;d=new FT;e=Jk(b);b=new OL;b.rP=c;Xv(d,e,b);return FN(Fd(a.bw.cv.mz,d));}
function APw(a,b,c){var d,e;d=new JB;e=Jk(b);b=new WQ;b.oM=c;KE(d,e);d.vi=b;return FN(Fd(a.bw.cv.mg,d));}
function AQz(a){return E5(a.bw.c);}
function AFo(a,b){var c;c=a.bw;b=Ce(b);return $rt_ustr(B_(c.c.jH,b));}
function AHS(a,b){var c;c=b;b=a.bw;c=c-1|0;if(c>0)DR(b,T(b.z,(c-(Cz(b)/(b.z*2|0)|0)|0)-1|0));}
function AKL(a){var b,c,d,e,f,g,h,i;b=a.g1;c=b.kX;if(c){$rt_globals.cancelAnimationFrame(c);b.kX=0;}d=$rt_globals.window;e=b.jT;d.removeEventListener("resize",Bm(e,"handleEvent"));b.l_.disconnect();f=b.e7;e=f.ip;if(e!==null){e.hL=KU(e,e.hL);e.jt=KU(e,e.jt);e.ji=KU(e,e.ji);e.mn=0;e.lx=0;f.ip=null;}Iq(f.cY);f=b.ha;if(f!==null){e=f.lc;if(e!==null){g=e.px.data;c=g.length;h=0;while(h<c){e=g[h];d=e.oq;i=e.os;e=e.or;d.removeEventListener($rt_ustr(i),Bm(e,"handleEvent"));h=h+1|0;}f.lc=null;}b.ha=null;}b=b.jh;c=0;while
(c<b.gi.length){b.gi[c].terminate();e=b.gi;f=null;c;e[c]=f;c=c+1|0;}}
function AGL(a,b){var c;b=Cv(b,"f");c=new MC;c.sn=b;return FN(Fd(a.bw.cv.l6,c));}
function ANp(a,b){Dy(a.bw,Ce(b),a.bw.dR);}
function AIt(a,b){var c;c=b;b=a.bw;Dy(b,b.fk,c);}
function APt(a,b){var c;if(b instanceof ET){Gh(a.bw,b.dp);return;}c=new BF;Bp(c,C(20));L(c);}
function AQL(a,b,c){var d,e,f,g;b=Ce(b);if(c===null)d=null;else{d=P(Bv,c.length);e=d.data;f=0;g=e.length;while(f<g){e[f]=Ce(c[f]);f=f+1|0;}}c=new Sq;c.rM=a;c.rN=b;c.rO=d;return new $rt_globals.Promise(Bm(c,"f"));}
function AMv(a,b,c){var d,e;d=new FT;e=Jk(b);b=new Wb;b.uc=c;Xv(d,e,b);return FN(Fd(a.bw.cv.kA,d));}
function AGX(a,b){P$(a,b.lineNumber);}
function AQl(a,b){Ut(a,b);}
var Qv=F(0);
function ET(){var a=this;B.call(a);a.dp=null;a.kb=null;a.k0=null;}
function E5(b){var c;c=b.le;if(c!==null)return c;c=new ET;c.dp=b;b.le=c;c.kb=null;c.k0=null;return c;}
function ARb(a){var b;b=a.kb;if(b===null)b=J$(a.dp.c9);return b;}
function AKa(a){var b;b=a.dp.f;FG(b.f2);DJ(b.cV);DJ(b.cM);b.iK=0;b.b0=0;b.cx=XD(b);}
function ALO(a){var b;b=a.k0;if(b===null)b=$rt_ustr(a.dp.hb);return b;}
function AQ2(a,b){var c;c=b;return AEM(Ps(a.dp.f,c));}
function AMo(a){return M0(Df(a.dp.f));}
function AEO(a,b){var c,d,e,f,g,h;c=a.dp.f;d=b.lineNumber-1|0;e=b.column-1|0;f=0;g=0;a:{while(g<d){h=c.v.data;f=f+h[g].B|0;g=g+1|0;if(g>=h.length)break a;f=f+1|0;}}return f+e|0;}
var Ss=F(0);
function VH(){var a=this;B.call(a);a.dg=null;a.qa=null;}
function PK(a,b){var c,d;a:{c=Ce(b);d=(-1);switch(Gf(c)){case 3075958:if(!BE(c,C(15)))break a;d=2;break a;case 102970646:if(!BE(c,C(16)))break a;d=0;break a;case 1441429116:if(!BE(c,C(17)))break a;d=1;break a;default:}}b:{switch(d){case 0:break;case 1:LS(a.dg);break b;case 2:FS(a.dg);break b;default:$rt_globals.console.info("unknown theme: "+b);break b;}J4(a.dg);}}
function Qa(a,b){var c,d;c=a.dg;d=YT(b);c.x.dv=d;c.w.dv=d;}
function AP7(a){return E5(a.dg.w.c);}
function AMI(a){UL(a.qa);}
function ALA(a,b){var c;if(!(b instanceof ET)){c=new BF;Bp(c,C(20));L(c);}c=a.dg;b=b.dp;Gh(c.w,b);}
function AGV(a,b){var c,d;c=a.dg;b=Ce(b);d=c.x;Dy(d,b,d.dR);c=c.w;Dy(c,b,c.dR);}
function AHY(a,b){PK(a,b);}
function AOY(a,b){var c,d;c=b;b=a.dg;d=b.x;Dy(d,d.fk,c);b=b.w;Dy(b,b.fk,c);}
function ALy(a,b){var c;if(!(b instanceof ET)){c=new BF;Bp(c,C(20));L(c);}c=a.dg;b=b.dp;Gh(c.x,b);}
function AIP(a){return E5(a.dg.x.c);}
function AHE(a,b){Qa(a,b);}
var Tl=F(0);
var CU=F(0);
function AQq(b){var c;c=new Qu;c.px=b;return c;}
function C4(b,c){if(b!==null)b.eY();return c;}
var OX=F(0);
function H6(){var a=this;B.call(a);a.j4=0;a.lS=0;a.kZ=0;}
var AUQ=0;function Iq(a){AUQ=AUQ-1|0;}
function Kb(a,b,c){return GA(a,b)+c|0;}
function RE(){var a=this;H6.call(a);a.hE=null;a.de=null;a.m1=null;}
function Ft(a){var b,c,d;b=a.de;c=a.lS;d=a.kZ;b.clearRect(0.0,0.0,c,d);}
function R$(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.de;d="center";c.textAlign=d;break a;case 2:c=a.de;d="right";c.textAlign=d;break a;default:break a;}d=a.de;c="left";d.textAlign=c;}}
function CM(a,b){MY(a,b.nw);}
function MY(a,b){var c;if(a.m1!==b){c=a.de;a.m1=b;c.font=b;}}
function Ev(a,b,c,d){var e,f,g;e=a.de;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function GA(a,b){var c;c=$rt_ustr(b);return a.de.measureText(c).width;}
function Yt(){var b;b=(YG()).getContext("2d").measureText("");return ("fontBoundingBoxAscent" in b?1:0)&&("fontBoundingBoxDescent" in b?1:0)?1:0;}
function AFB(){return {alpha:false};}
var AAD=F();
var Ho=F(0);
function Ug(){B.call(this);this.n$=null;}
function AIk(a,b,c){var d,e;b=Cv(b,"f");c=Cv(c,"f");d=a.n$;e=new Pz;e.oc=b;e.od=d;Zi(e,c,ABK(d),Yf(d));}
var ABs=F(0);
function ABR(b){var c,d;c=b.length;d=new Nt;d.ua=b;return ACz(c,d);}
var ZZ=F();
function YG(){return (Fc()).createElement("canvas");}
function GL(b,c){if((b?1:0)?1:0)c=Ce(b);return c;}
function AMB(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
function W4(){var a=this;B.call(a);a.c9=null;a.f=null;a.le=null;a.hb=null;a.oW=null;a.gb=null;a.ig=null;a.dj=null;a.qv=null;a.o=0;a.r=0;a.gN=0;a.hi=null;a.fV=null;a.jH=null;a.kW=null;a.eb=0;a.gd=0;a.gt=0;a.hs=ACw;a.tA=ACw;a.uS=ACw;a.mT=0;a.xp=0;a.c5=0;a.hQ=0.0;a.eD=0;}
function AQQ(a,b,c){var d=new W4();Yq(d,a,b,c);return d;}
function AR6(a,b,c){var d=new W4();ADI(d,a,b,c);return d;}
function Yq(a,b,c,d){ADI(a,b.oJ,c,d);}
function ADI(a,b,c,d){var e,f,g,h,i;b=b.data;a.oW=AFu();e=new TW;e.et=P(Kq,16);e.eo=0;e.c_=(-1);a.gb=e;a.hi=null;a.fV=Bz();a.jH=Ke();a.kW=Bz();a.eb=1;a.gd=1;a.gt=1;a.c5=0;a.hQ=0.0;a.eD=0;a.c9=d;a.hb=c;c=new RC;f=b.length;g=P(C7,Z(1,f));if(!f)g.data[0]=Y3(C(3));h=g.data;i=0;while(i<f){h[i]=Y3(b[i]);i=i+1|0;}d=new Pt;e=new Kn;PP(e);d.d_=e;c.dX=d;c.cV=Ke();c.cM=Ke();c.f2=Bz();if(h.length){c.v=g;c.cx=XD(c);a.f=c;return;}c=new BF;X(c);L(c);}
function DT(a){var b;b=a.hb;if(b===null){b=a.c9;if(b===null)b=C(21);else{b=b.eK;b=b===null?C(21):!DH(b,C(22))&&!DH(b,C(23))&&!DH(b,C(24))&&!DH(b,C(25))&&!DH(b,C(26))&&!DH(b,C(27))?(DH(b,C(28))?C(29):DH(b,C(30))?C(31):!DH(b,C(32))?C(21):C(33)):C(34);}}return b;}
function FK(a){var b;b=a.c9;return b===null?null:b.gR;}
function GO(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.gd=3;a.gt=3;a.eb=3;c=CF(b[0]);d=Ei(b[1]);if((CF(b[2])).data[0]==4){e=GY(Ei(b[3]));Ee(a.jH,C(35),e);K5(a.f,c,d);}else if(b.length<5)K5(a.f,c,d);else{f=CF(b[3]);g=f.data;h=Ei(b[4]);NZ(a.f,c,d,f,h,0);Uh(a,Ip(f,g.length),LB(h));}if(a.eD){e=Ea(a);i=JS(Ec(),a.hs);j=new R;U(j);K(FV(K(K(j,e),C(36)),i),C(37));$rt_globals.console.info($rt_ustr(S(j)));}e=a.ig;if(e!==null)U0(e);}
function Ku(a){var b;SC(a,Dp(a.o,a.r),Gw(a.f,a.o,a.r));if(!(a.hi!==null&&!DG(a.fV))){b=a.r;if(b>0)SC(a,Dp(a.o,b-1|0),Gw(a.f,a.o,a.r-1|0));}}
function SC(a,b,c){var d,e,f,g,h,i,j,k,l;LZ(a);d=B_(a.f.cV,c);if(d!==null)c=d;a:{e=B_(a.f.cM,c);if(e!==null){a.hi=Lc(a.f,c);c=BO(e);while(true){if(!BP(c))break a;f=BS(c);Bw(a.fV,Lc(a.f,f));}}}c=a.ig;if(c!==null){g=b.U;h=b.bb;b=c.cv;f=DT(c.c);e=FK(c.c);i=(Cf(b.mg)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(Jx(b,f,e)){b=b.vi;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.c;e=new Rn;e.n8=c;e.n4=f;e.n5=g;e.n6=h;c=c.hF;b=b.oM;f=E5(f);d=Hz(h,g);l=JE();b=b.provideDocumentHighlights(f,d,l);f=new S0;f.ss=e;f.sr=c;LQ(b,
f,c);}}}
function LZ(a){a.hi=null;FG(a.fV);}
function Uh(a,b,c){var d,e,f,g,h;if(a.dj!==null){a.uS=Ec();d=a.f.b0;e=a.dj;f=new Ph;f.rF=a;g=P(B,3);h=g.data;h[0]=b;h[1]=c;b=By(1);b.data[0]=d;h[2]=b;D9(e,f,C(38),g);}}
function P7(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.ig=b;a.dj=c;if(c===null){d=a.f.v.data;e=d.length;f=0;while(f<e){Tp(d[f]);f=f+1|0;}}else if(a.eb==1){a.hs=Ec();b=DT(a);e=BJ(b,C(29));f=BJ(b,C(33));d=Df(a.f);g=d.data.length;h=!e?5120:10240;i=Ye(b);if(f){j=a.dj;b=new Rv;b.na=a;k=P(B,2);l=k.data;l[0]=d;d=By(1);d.data[0]=i;l[1]=d;Lu(j,b,0,C(39),k);a.eb=2;}else if(g<=h)JZ(a,d,i);else if(!e){Wz(a,LB(d),i);JZ(a,d,i);}else{Wz(a,LB(d),i);m=LB(d);c=a.dj;j=new Qc;j.rH=a;k=P(B,2);l=k.data;l[0]=m;m=By(1);m.data[0]=i;l[1]=m;D9(c,
j,C(40),k);a.gd=2;JZ(a,d,i);}}}
function Wz(a,b,c){var d,e;d=a.dj;e=new VO;e.r6=a;D9(d,e,C(41),G(B,[b,FH([c,250])]));a.gt=2;}
function JZ(a,b,c){var d,e,f,g;d=a.dj;e=new Nk;e.pn=a;f=P(B,2);g=f.data;g[0]=b;b=By(1);b.data[0]=c;g[1]=b;D9(d,e,C(39),f);a.eb=2;}
function Ea(a){var b;b=a.c9;return b===null?C(3):UY(b);}
function Il(a){var b,c,d,e,f,g;if(a.eD){b=Ea(a);c=new R;U(c);K(K(c,b),C(42));$rt_globals.console.info($rt_ustr(S(c)));}b=DT(a);if(b===null)d=null;else{a:{e=(-1);switch(Gf(b)){case -1655966961:if(!BE(b,C(33)))break a;e=3;break a;case 3401:if(!BE(b,C(31)))break a;e=2;break a;case 98723:if(!BE(b,C(34)))break a;e=1;break a;case 3254818:if(!BE(b,C(29)))break a;e=0;break a;case 3556653:if(!BE(b,C(21)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(43);break b;case 2:d=C(44);break b;case 3:d=C(45);break b;case 4:d
=C(46);break b;default:d=null;break b;}d=C(47);}}if(d===null)U0(a.ig);else{a.hs=Ec();if(!BE(d,C(45))){b=a.dj;f=new Tu;f.uF=a;g=P(B,1);g.data[0]=Df(a.f);D9(b,f,d,g);}else{b=a.dj;c=new Tv;c.tl=a;g=P(B,1);g.data[0]=Df(a.f);Lu(b,c,0,d,g);}}}
function ACn(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(a.eD){b=Ea(a);c=new R;U(c);K(K(c,b),C(48));$rt_globals.console.info($rt_ustr(S(c)));}b=DT(a);if(b!==null&&!BE(C(21),b)){if(BE(C(33),b)){Il(a);G3(a.f);}else{c=a.f.cx;d=PC(c,c.cJ);if(d===null){LA(a);G3(a.f);return;}e=FH([CS(d),CQ(d),d.bL.eF]);f=Df(a.f);g=By(1);g.data[0]=Ye(b);c=a.f.dX;if(c.eO===null){h=By(0);i=B1(0);}else{j=AQ9(AGA(d.b2,c.d_),d);Nj(j);h=j.jU;i=j.kc;}k=a.f.b0;d=a.dj;c=new Mq;c.tU=a;l=P(B,6);m=l.data;m[0]=f;m[1]=g;m[2]=e;e=By(1);e.data[0]=k;m[3]=e;m[4]
=h;m[5]=i;D9(d,c,C(49),l);}}else G3(a.f);}
function LA(a){var b;b=AQ9(a.f.dX,null);Nj(b);Uh(a,b.jU,b.kc);}
var Ys=F();
function J$(b){var c,d,e;if(b===null)return null;c=b.uM;if(c!==null)return c;c=b.gR;d=b.h_;e=b.eK;b=b;return APK($rt_ustr(c),$rt_ustr(d),$rt_ustr(e),b);}
function ABL(b){var c;if(!((b?1:0)?1:0))return null;c=b.javaPeer;if(c instanceof Lb)return c;return AR4(GL(b.scheme,null),GL(b.authority,null),GL(b.path,null),b);}
function APK(b,c,d,e){return {scheme:b,authority:c,path:d,javaPeer:e};}
function XE(){B.call(this);this.nf=null;}
function AId(a,b,c){var d,e;b=Cv(b,"f");c=Cv(c,"f");d=a.nf;e=new QS;e.u9=b;e.u$=d;Zi(e,c,ABK(d),Yf(d));}
var AD5=F();
var DK=F(0);
function Nt(){B.call(this);this.ua=null;}
function APR(a,b){var c,d;c=a.ua;d=b.bd;return NI(c.charCodeAt(d)&65535);}
var Yc=F(0);
function ACz(b,c){var d,e,f,g,h,i,j,k,l,m;d=P(Bv,8);e=DX(8);f=B1(16);g=0;h=0;i=0;while(true){j=BD(i,b);if(j>0)break;k=j>=0?10:(c.gp(Cs(i))).kf;if(k==10){d=ACB(DV(f,0,g),d,h);e=UC(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Nw(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=ACB(DV(f,0,g),d,h);j=i+1|0;if(j<b&&(c.gp(Cs(j))).kf==10){e=UC(1,e,h);i=j;}else e=UC(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new Re;d=Zv(d,h);if(m.length!=h)e=LC(e,h);c.oJ=d;c.w$=e;return c;}
function AF2(b){var c,d;c=H(b);BM(b);d=new NK;d.sV=b;return ACz(c,d);}
var ACS=F();
function Ce(b){return $rt_str(b);}
function Lb(){var a=this;B.call(a);a.gR=null;a.h_=null;a.eK=null;a.uM=null;}
function AR4(a,b,c,d){var e=new Lb();Yn(e,a,b,c,d);return e;}
function Yn(a,b,c,d,e){a.gR=b;a.h_=c;a.eK=d;a.uM=e;}
function UY(a){var b,c;b=a.eK;if(b===null)return C(3);c=AAt(b,C(50));return c==(-1)?a.eK:D3(a.eK,c+1|0);}
function AGG(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return BJ(a.gR,c.gR)&&BJ(a.h_,c.h_)&&BJ(a.eK,c.eK)?1:0;}return 0;}
function Re(){var a=this;B.call(a);a.oJ=null;a.w$=null;}
var Me=F(0);
var SJ=F(0);
var D6=F(0);
var Yz=F();
function Fc(){return $rt_globals.window.document;}
function ALW(a){return a.E2();}
function AO2(a,b){return a.HO($rt_str(b));}
function AOK(a,b){a.Dd($rt_str(b));}
function AGM(a,b){return a.BV($rt_str(b));}
function AEw(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AG7(a){return a.HS();}
function AOV(a,b,c){return a.Gc($rt_str(b),$rt_str(c));}
function AJ1(a,b,c,d){a.xB($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function AFp(a){return a.DZ();}
function AM5(a){return !!a.Ip();}
function APH(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function ALs(a){return a.DK();}
function AJv(a,b){a.F2($rt_str(b));}
function ALY(a){return !!a.CR();}
function ARl(a){return a.H3();}
function AKG(a){return $rt_ustr(a.zk());}
function AFf(a,b){return a.Ef(b?1:0);}
function AQT(a){return a.Io();}
function AJs(a,b,c){return a.I0($rt_str(b),$rt_str(c));}
function ALj(a,b,c){return a.CO(b,c?1:0);}
function AQk(a,b,c){return !!a.Hi($rt_str(b),$rt_str(c));}
function AEz(a){return a.FP();}
function AJb(a){return $rt_ustr(a.JK());}
function AHi(a,b){return !!a.xW(b);}
function AIl(a,b){return a.KE($rt_str(b));}
function AJK(a,b,c){return a.EZ($rt_str(b),$rt_str(c));}
function AKM(a){return a.Aj();}
function AFr(a,b){return a.HZ($rt_str(b));}
function AIj(a){return $rt_ustr(a.zC());}
function ANw(a){a.CI();}
function AEi(a,b){return a.I5($rt_str(b));}
function APx(a,b){return a.Ds($rt_str(b));}
function AFV(a,b){return a.CH($rt_str(b));}
function APA(a){return $rt_ustr(a.AC());}
function AF7(a,b,c){return a.E7(b,c);}
function ANj(a,b){return a.zj(b);}
function AN6(a){return a.GW();}
function AMt(a,b,c){a.xj($rt_str(b),Cv(c,"handleEvent"));}
function AL7(a,b,c){return a.AD(b,c);}
function APr(a){return !!a.He();}
function AQY(a,b){return a.ES($rt_str(b));}
function AL$(a,b,c,d){a.wP($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function AG_(a){return a.G1();}
function AGo(a,b,c){return a.Ed($rt_str(b),$rt_str(c));}
function AE0(a){return $rt_ustr(a.A4());}
function AQN(a){return a.z5();}
function AMs(a){return a.Ap();}
function AEX(a){return a.Hj();}
function AMu(a,b,c){a.xT($rt_str(b),Cv(c,"handleEvent"));}
function AGY(a,b){return a.Ju(b);}
function AIF(a,b){a.zH($rt_str(b));}
function AOc(a){return $rt_ustr(a.zr());}
var ACC=F(0);
function Vg(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C2(b,f+g|0);C_(c,0,d,f,g);return d;}
function Kr(b,c,d){C_(b,c,d,0,d.data.length);return d;}
function Rr(b,c,d){var e;if(c>0)C_(b,0,d,0,c);e=d.data.length;if(c<e)C_(b,c+1|0,d,c,e-c|0);return d;}
function AAm(b,c,d,e){var f;if(c>0)C_(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)C_(b,d,e,c,f-d|0);}return e;}
function GR(b){var c;c=new Vr;c.r3=b;return c;}
function Zv(b,c){if(b.data.length!=c)b=C2(b,c);return b;}
function ACB(b,c,d){var e;e=c.data.length;if(e==d)c=C2(c,e*2|0);c.data[d]=b;return c;}
function UC(b,c,d){var e;e=c.data.length;if(e==d)c=LC(c,e*2|0);c.data[d]=b;return c;}
function LB(b){return Nw(b,b.data.length);}
var YJ=F();
function Nw(b,c){var d,e,f,g;b=b.data;d=B1(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function LC(b,c){var d,e,f,g;b=b.data;d=DX(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Ip(b,c){var d,e,f,g;b=b.data;d=By(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C2(b,c){var d,e,f,g;d=b.data;e=AB9(HI(BA(b)),c);f=Ba(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Zz(b){var c,d,e;if(b===null)return C(11);c=new R;U(c);CW(c,C(51));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)CW(c,C(52));K(c,e[d]);d=d+1|0;}CW(c,C(53));return S(c);}
function G6(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BF;X(f);L(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Zb(b,c,d,e){var f,g;if(c>d){e=new BF;X(e);L(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ZV(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AUR;e=P(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Ba(j,h+f|0);l=h+(2*f|0)|0;m=Ba(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.vI(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ABw(b,c){return TB(b,0,b.data.length,c);}
function TB(b,c,d,e){var f,g,h,i,j;f=BD(c,d);if(f>0){g=new BF;X(g);L(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function AC9(){var a=this;B.call(a);a.bx=null;a.bo=null;a.c0=0;}
function AFu(){var a=new AC9();AQZ(a);return a;}
function AGK(a){var b=new AC9();ALX(b,a);return b;}
function AQZ(a){a.bx=new Gz;a.bo=new Gz;}
function ALX(a,b){a.bx=new Gz;a.bo=new Gz;Hv(a,b);}
function Hv(a,b){T8(a.bx,b.bx);T8(a.bo,b.bo);a.c0=b.c0;}
function KV(a,b,c){B0(a.bo,b,c);if(!a.c0)B0(a.bx,b,c);}
function PI(a,b){B0(a.bx,b,0);B0(a.bo,b+1|0,0);}
function Dz(a){if(RI(a.bx,a.bo)>0)return a.bo;return a.bx;}
function E$(a){if(RI(a.bx,a.bo)<0)return a.bo;return a.bx;}
function ABE(a,b){var c,d,e,f;c=a.bx;d=c.D;e=a.bo;if(d==e.D&&c.Q==e.Q?1:0)return null;c=Dz(a);e=E$(a);d=c.D;if(d<=b){f=BD(b,e.D);if(f<=0)return Cg(b<=d?c.Q:0,f>=0?e.Q:(-1));}return null;}
function C3(a){var b,c;b=a.bx;c=a.bo;return (b.D==c.D&&b.Q==c.Q?1:0)?0:1;}
function ACK(a,b){var c,d;if(!C3(a))return 0;c=Dz(a);d=E$(a);return c.D<=b&&b<d.D?1:0;}
function TW(){var a=this;B.call(a);a.et=null;a.eo=0;a.c_=0;}
function Ve(a,b){var c,d,e;c=a.eo;d=a.et;if(c==d.data.length)a.et=C2(d,c+16|0);d=a.et.data;e=a.eo;a.eo=e+1|0;d[e]=b;}
function RK(a){var b,c,d;b=a.c_;c=a.eo-1|0;if(b==c)a.c_=b-1|0;d=a.et.data;a.eo=c;d[c]=null;}
var VJ=F(0);
function AEa(a,b){var c;c=a.bY();while(c.cf()){b.j(c.bR());}}
var FE=F(0);
function UF(a){var b,c;b=new So;c=new Qi;c.pT=a;b.tY=c;return b;}
function AJ3(a,b){var c,d;c=a.bY();d=0;while(c.cf()){if(b.co(c.bR())){c.kV();d=1;}}return d;}
var Ey=F();
function DG(a){return a.cB()?0:1;}
function Hj(a,b){var c,d,e,f,g,h;c=b.data;d=a.k;e=c.length;if(e<d)b=AB9(HI(BA(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BO(a);while(BP(f)){g=b.data;h=e+1|0;g[e]=BS(f);e=h;}return b;}
function AOx(a,b){var c;c=a.bY();while(c.cf()){if(BJ(c.bR(),b)){c.kV();return 1;}}return 0;}
function Gi(a,b){var c,d;c=0;d=b.bY();while(d.cf()){if(!a.sH(d.bR()))continue;c=1;}return c;}
var J7=F(0);
var IH=F(0);
function Em(){Ey.call(this);this.bO=0;}
function ANQ(a,b){a.mA(a.cB(),b);return 1;}
function BO(a){var b;b=new No;b.gD=a;b.mj=a.bO;b.iA=a.cB();b.fY=(-1);return b;}
function AMW(a,b,c){var d,e;if(b>=0&&b<=a.cB()){if(c.dP())return 0;d=c.bY();while(d.cf()){e=b+1|0;a.mA(b,d.bR());b=e;}return 1;}c=new BF;X(c);L(c);}
function APo(a,b,c){c=new D1;X(c);L(c);}
function JK(a,b){var c,d;c=a.cB();d=0;while(true){if(d>=c)return (-1);if(BJ(b,a.lu(d)))break;d=d+1|0;}return d;}
function ALK(a,b){var c,d;if(!H8(b,IH))return 0;c=b;if(a.k!=c.k)return 0;d=0;while(d<c.k){if(!BJ(Bs(a,d),Bs(c,d)))return 0;d=d+1|0;}return 1;}
var DP=F(0);
var KO=F(0);
function YN(){var a=this;Em.call(a);a.ck=null;a.k=0;}
function Bz(){var a=new YN();AIf(a);return a;}
function AIf(a){a.ck=P(B,10);}
function IS(a,b){var c,d;c=a.ck.data.length;if(c<b){d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.ck=C2(a.ck,d);}}
function Bs(a,b){IF(a,b);return a.ck.data[b];}
function AME(a){return a.k;}
function Bw(a,b){var c,d;IS(a,a.k+1|0);c=a.ck.data;d=a.k;a.k=d+1|0;c[d]=b;a.bO=a.bO+1|0;return 1;}
function RF(a,b,c){var d,e,f;Pp(a,b);IS(a,a.k+1|0);d=a.k;e=d;while(e>b){f=a.ck.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.ck.data[b]=c;a.k=d+1|0;a.bO=a.bO+1|0;}
function Fi(a,b){var c,d,e,f;IF(a,b);c=a.ck.data;d=c[b];e=a.k-1|0;a.k=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.bO=a.bO+1|0;return d;}
function Vp(a,b){var c;c=JK(a,b);if(c<0)return 0;Fi(a,c);return 1;}
function FG(a){Zb(a.ck,0,a.k,null);a.k=0;a.bO=a.bO+1|0;}
function Zc(a,b,c){var d,e,f,g,h,i;Pp(a,b);if(c.dP())return 0;IS(a,a.k+c.cB()|0);d=c.cB();e=a.k;f=e-1|0;while(f>=b){g=a.ck.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.k=e+d|0;h=c.bY();i=0;while(i<d){g=a.ck.data;e=b+1|0;g[b]=h.bR();i=i+1|0;b=e;}a.bO=a.bO+1|0;return 1;}
function IF(a,b){var c;if(b>=0&&b<a.k)return;c=new BV;X(c);L(c);}
function Pp(a,b){var c;if(b>=0&&b<=a.k)return;c=new BV;X(c);L(c);}
function DY(a,b){var c;c=0;while(c<a.k){b.j(a.ck.data[c]);c=c+1|0;}}
var Kt=F(0);
function DB(){var a=this;B.call(a);a.ki=null;a.ks=null;}
function JY(){var a=this;DB.call(a);a.cA=0;a.bX=null;a.cy=0;a.wn=0.0;a.kQ=0;}
function Ke(){var a=new JY();PP(a);return a;}
function AIN(a,b){return P(Gc,b);}
function PP(a){var b;b=ADw(16);a.cA=0;a.bX=P(Gc,b);a.wn=0.75;Ul(a);}
function ADw(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function DJ(a){var b;if(a.cA>0){a.cA=0;b=a.bX;Zb(b,0,b.data.length,null);a.cy=a.cy+1|0;}}
function Ul(a){a.kQ=a.bX.data.length*a.wn|0;}
function I5(a,b){return S2(a,b)===null?0:1;}
function UG(a){var b;b=new Um;b.ru=a;return b;}
function B_(a,b){var c;c=S2(a,b);if(c===null)return null;return c.cF;}
function S2(a,b){var c,d;if(b===null)c=Se(a);else{d=b.lX();c=Qr(a,b,d&(a.bX.data.length-1|0),d);}return c;}
function Qr(a,b,c,d){var e;e=a.bX.data[c];while(e!==null&&!(e.iV==d&&YB(b,e.cn))){e=e.cu;}return e;}
function Se(a){var b;b=a.bX.data[0];while(b!==null&&b.cn!==null){b=b.cu;}return b;}
function Jo(a){var b;if(a.ki===null){b=new Pe;b.gE=a;a.ki=b;}return a.ki;}
function Ee(a,b,c){var d,e,f,g;if(b===null){d=Se(a);if(d===null){a.cy=a.cy+1|0;d=Ua(a,null,0,0);e=a.cA+1|0;a.cA=e;if(e>a.kQ)Uu(a);}}else{e=b.lX();f=e&(a.bX.data.length-1|0);d=Qr(a,b,f,e);if(d===null){a.cy=a.cy+1|0;d=Ua(a,b,f,e);e=a.cA+1|0;a.cA=e;if(e>a.kQ)Uu(a);}}g=d.cF;d.cF=c;return g;}
function Ua(a,b,c,d){var e,f;e=new Gc;XA(e,b,null);e.iV=d;f=a.bX.data;e.cu=f[c];f[c]=e;return e;}
function AAf(a,b){var c,d,e,f,g,h,i,j;c=ADw(!b?1:b<<1);d=P(Gc,c);e=d.data;f=0;b=c-1|0;while(true){g=a.bX.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.iV&b;j=h.cu;h.cu=e[i];e[i]=h;h=j;}f=f+1|0;}a.bX=d;Ul(a);}
function Uu(a){AAf(a,a.bX.data.length);}
function YB(b,c){return b!==c&&!b.bu(c)?0:1;}
function RC(){var a=this;B.call(a);a.v=null;a.cx=null;a.dX=null;a.cV=null;a.cM=null;a.f2=null;a.iB=null;a.b0=0;a.iK=0;a.s0=0.0;}
function XD(a){var b;b=US(a);return ACu(AP4(Jb(0,b,0),null,null));}
function BK(a,b){return a.v.data[b];}
function Cb(a){return a.v.data.length;}
function US(a){return Ez(a,Cb(a));}
function Fk(a,b){return a.v.data[b].B;}
function ACU(a,b,c){var d,e,f,g,h;d=a.v;e=d.data;f=e[b];d=C2(d,e.length+1|0);e=d.data;a.v=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Dq(P(B$,0));a.v.data[b+1|0]=f;}else if(c==f.B){e[b]=f;e[b+1|0]=Dq(P(B$,0));}else{e=(Hr(f,c)).data;d=a.v.data;d[b]=e[0];d[b+1|0]=e[1];}E9(a,b,c,0,C(54));}
function KF(a,b){var c,d,e,f,g,h,i;c=a.v.data;d=c[b];e=c[b+1|0];f=Dq(Vg(d.l,e.l));g=a.v;h=g.data.length;if(b<h&&b>=0){i=P(C7,h-1|0);c=i.data;Rr(g,b,i);c[b]=f;a.v=i;return;}d=new Bt;X(d);L(d);}
function ME(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.v.data;if(!(c<d[b].B?0:1)){d=(BK(a,b)).l.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<H(h.q)){f=I(h.q,g);break a;}g=g-H(h.q)|0;f=f+1|0;}f=0;}F7();h=new Bv;d=B1(1);d.data[0]=f;IL(h,d);E9(a,b,c,1,h);h=a.v.data[b];i=h.l;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=H(d[j].q);if(c<b)break;c=c-b|0;j=j+1|0;}}if(H(d[j].q)==1)h.l=Rr(i,j,P(B$,e-1|0));else{k=d[j];if(c<=0)l=DA(D3(k.q,1),k.bP,k.bJ);else if(c>=(H(k.q)-1|0)){l=new B$;m=k.q;Tt(l,B9(m,0,H(m)-
1|0),k.bP,k.bJ);}else{i=B1(H(k.q)-1|0);n=i.data;b=0;while(b<c){n[b]=I(k.q,b);b=b+1|0;}b=n.length;while(c<b){m=k.q;e=c+1|0;n[c]=I(m,e);c=e;}l=DA(GY(i),k.bP,k.bJ);}d[j]=l;}h.B=h.B-1|0;D_(h);}else if(b!=(d.length-1|0)){E9(a,b,c,1,C(54));KF(a,b);}}
function XJ(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Sh(a.v.data[b],c,e[0]);return;}g=f-1|0;d=(Hr(a.v.data[b],c)).data;h=d[0];i=d[1];d=a.v;j=C2(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.l.data;f=l.length;c=!f?0:H(l[f-1|0].q);L9(h,h.l.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Eu(e[m])?Y3(e[m]):Dq(P(B$,0));d[b+m|0]=k;m=m+1|0;}L9(i,0,0,e[g]);d[b+g|0]=i;a.v=j;}
function VF(a,b){var c,d,e,f,g,h,i;c=Dz(b);d=E$(b);e=c.D;if(e==d.D)return B9(EI(a.v.data[e]),c.Q,d.Q);f=new R;U(f);b=a.v.data[c.D];e=c.Q;BX(CW(f,D3(EI(b),e)),10);g=a.v.data;e=c.D+1|0;h=d.D;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;X$(CW(f,EI(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.v.data[d.D];h=d.Q;CW(f,B9(EI(b),0,h));return S(f);}b=new V7;X(b);L(b);}
function MQ(a,b,c){var d;VZ(a,b);d=Dz(b);E9(a,d.D,d.Q,1,c);}
function VZ(a,b){var c,d,e,f,g,h,i;a:{c=Dz(b);d=E$(b);e=c.D;if(e==d.D)FW(a.v.data[e],c.Q,d.Q);else{b=a.v.data[e];FW(b,c.Q,b.B);FW(a.v.data[d.D],0,d.Q);e=c.D+1|0;f=d.D;g=a.v;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=P(C7,(h-f|0)+e|0);AAm(g,e,f,i);a.v=i;KF(a,c.D);break a;}b=new Bt;X(b);L(b);}b=new Bt;X(b);L(b);}}}
function Gw(a,b,c){return Dp(b,Fy(BK(a,b),c));}
function Wt(a,b){var c,d,e;c=0;d=0;while(true){e=a.v.data.length;if(c>=e)break;if((d+(BK(a,c)).B|0)>=b)return Cg(c,b-d|0);d=d+((BK(a,c)).B+1|0)|0;c=c+1|0;}return Cg(e,0);}
function Ez(a,b){var c,d,e;c=0;d=a.v.data.length;e=0;while(e<b){c=c+Fk(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Lc(a,b){return Lv(BK(a,b.U),b.bb);}
function Df(a){var b,c,d,e,f,g,h,i,j;b=B1(US(a));c=b.data;d=a.v.data.length;e=0;f=0;while(e<d){g=a.v.data[e].l.data;h=g.length;i=0;while(i<h){j=g[i].q;P2(j,0,H(j),b,f);f=f+H(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function E9(a,b,c,d,e){var f,g,h,i,j,k;a:{a.b0=a.b0+1|0;f=a.f2;g=P(Gn,1);h=new Gn;h.dI=b;h.dU=c;i=LD(e,C(54),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=Cg(b,c+H(i[0])|0);break a;}k=Cg((b+j|0)-1|0,H(i[j-1|0]));break a;}}k=Cg(b,c);}i=g.data;h.k3=k;h.ma=d;h.fp=e;i[0]=h;Bw(f,g);JD(a,b,c,d,e);}
function JD(a,b,c,d,e){var f;f=Ez(a,b)+c|0;if(!d){Oy(a.cx,f,H(e));Ue(a.dX,f,H(e));}else{V$(a.cx,f,H(e));Nd(a.dX,f,H(e));}}
function M6(a,b){var c,d,e;c=LD(b.fp,C(54),(-1));if(b.ma){XJ(a,b.dI,b.dU,c);Oy(a.cx,Ez(a,b.dI)+b.dU|0,H(b.fp));Ue(a.dX,Ez(a,b.dI)+b.dU|0,H(b.fp));}else{c=c.data;d=AFu();B0(d.bx,b.dI,b.dU);e=c.length;if(e==1)B0(d.bo,b.dI,b.dU+H(c[0])|0);else B0(d.bo,(b.dI+e|0)-1|0,H(c[e-1|0]));VZ(a,d);V$(a.cx,Ez(a,b.dI)+b.dU|0,H(b.fp));Nd(a.dX,Ez(a,b.dI)+b.dU|0,H(b.fp));}return b.k3;}
function TF(a){return a.iK==a.b0?0:1;}
function G3(a){a.iK=a.b0;}
function Ps(a,b){var c,d,e,f,g;c=0;d=0;while(true){e=a.v.data;f=e.length;if(d>=f)break;g=e[d].B;if(b<=(c+g|0))return Dp(d,b-c|0);c=c+(g+1|0)|0;d=d+1|0;}return Dp(f,0);}
function Jt(a){var b,c,d;a.iB=By(a.v.data.length+1|0);b=0;while(b<a.v.data.length){c=a.iB.data;d=b+1|0;c[d]=(c[b]+(BK(a,b)).B|0)+1|0;b=d;}}
function Xl(a,b){var c,d,e;c=a.iB;if(c===null)return Ps(a,b);d=ABw(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;e=Dp(d,b-(d<0?0:a.iB.data[d])|0);if(e.bb>=(BK(a,e.U)).B){e.U=e.U+1|0;e.bb=0;}return e;}
var Pm=F(0);
var RA=F(0);
var Rk=F(0);
var Ti=F(0);
var WM=F(0);
var Uk=F(0);
var Zo=F();
function AMy(a,b,c){a.xT($rt_str(b),Cv(c,"handleEvent"));}
function AKj(a,b,c){a.xj($rt_str(b),Cv(c,"handleEvent"));}
function AJd(a,b,c,d){a.wP($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
function AFx(a,b){return !!a.xW(b);}
function AHo(a,b,c,d){a.xB($rt_str(b),Cv(c,"handleEvent"),d?1:0);}
var AAC=F();
function YA(b){return Math.log(b);}
function AD4(b,c){return ALa(b,c);}
function ALa(b,c){return Math.pow(b,c);}
function Ba(b,c){if(b<c)c=b;return c;}
function Z(b,c){if(b>c)c=b;return c;}
function AQn(b,c){return Math.max(b,c);}
function Gz(){var a=this;B.call(a);a.D=0;a.Q=0;}
function B0(a,b,c){a.D=b;a.Q=c;}
function T8(a,b){a.D=b.D;a.Q=b.Q;}
function RI(a,b){var c;c=BD(a.D,b.D);if(c)return c;return BD(a.Q,b.Q);}
function Kq(){var a=this;B.call(a);a.k_=null;a.jN=null;}
function Lj(a){return a.k_.U;}
function Ja(a){return a.k_.bb;}
function C7(){var a=this;B.call(a);a.l=null;a.B=0;a.fm=null;a.ed=null;a.db=null;a.gz=null;a.fx=0;a.gB=0;a.g0=0;}
var AUS=0;var AUT=0;var AUU=0;function Y3(a){var b=new C7();ABX(b,a);return b;}
function Dq(a){var b=new C7();QT(b,a);return b;}
function ABX(a,b){var c;c=P(B$,1);c.data[0]=ZO(b);QT(a,c);}
function QT(a,b){var c,d,e,f;c=b.data;a.l=b;d=0;e=c.length;f=0;while(f<e){d=d+H(c[f].q)|0;f=f+1|0;}a.B=d;D_(a);}
function G0(a){return a.l.data.length;}
function KA(a,b){return a.l.data[b];}
function Fy(a,b){return RM(a,GK(a,b));}
function RM(a,b){return b<=0?0:a.db.data[b-1|0];}
function GK(a,b){var c,d,e,f;c=a.l.data.length;if(!c)return (-1);if(!(a.db!==null&&!a.g0)){Wu(a);d=0;e=0;f=a.l.data.length;while(d<f){e=e+H(a.l.data[d].q)|0;a.db.data[d]=e;d=d+1|0;}a.g0=0;}d=TB(a.db,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Lv(a,b){var c;c=a.l.data;if(!c.length)return null;return c[GK(a,b)];}
function FW(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.B){a.l=P(B$,0);D_(a);a.B=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.l.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=H(g[e].q);i=H(a.l.data[f].q);j=BD(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.l.data[f];if(!b&&c==H(k.q)?1:0){g=a.l;a.l=Rr(g,e,P(B$,g.data.length-1|0));a.B=a.B-d|0;D_(a);return;}a.l.data[e]=DA(Hi(B9(k.q,0,b),D3(k.q,c)),k.bP,k.bJ);}else{g=a.l.data;l=g[e];m=g[f];if(b){if(b!=
H(l.q))a.l.data[e]=DA(B9(l.q,0,b),l.bP,l.bJ);e=e+1|0;}if(c==H(m.q))f=f+1|0;else if(c)a.l.data[f]=DA(D3(m.q,c),m.bP,m.bJ);g=a.l;a.l=AAm(g,e,f,P(B$,(g.data.length-f|0)+e|0));}a.B=a.B-d|0;D_(a);}
function Hr(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return G(C7,[Dq(P(B$,0)),a]);if(b>=a.B)return G(C7,[a,Dq(P(B$,0))]);c=a.l;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=H(e[d].q);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return G(C7,[Dq(Kr(c,0,P(B$,d))),Dq(Kr(c,d,P(B$,f-d|0)))]);h=e[d];e=Kr(c,0,P(B$,d+1|0));i=e.data;j=Kr(c,d,P(B$,f-d|0));c=j.data;i[d]=DA(B9(h.q,0,b),h.bP,h.bJ);c[0]=DA(D3(h.q,b),h.bP,h.bJ);return G(C7,[Dq(e),Dq(j)]);}
function Sh(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.l.data;if(e>=f.length)break a;g=H(f[d].q);if(b<=g)break;b=b-g|0;d=e;}}L9(a,d,b,c);}
function L9(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Eu(d))return;e=a.l;f=e.data;g=f.length;if(!g){h=P(B$,1);h.data[0]=ZO(d);a.l=h;}else if(!b&&!c){h=P(B$,g+1|0);f=h.data;C_(e,0,h,1,g);f[0]=ZO(d);a.l=h;}else{i=f[b];if(c<=0)j=DA(Hi(d,i.q),i.bP,i.bJ);else if(c>=H(i.q))j=DA(Hi(i.q,d),i.bP,i.bJ);else{k=H(d);l=k+c|0;m=H(i.q)-c|0;e=B1(H(i.q)+k|0);h=e.data;n=0;while(n<c){h[n]=I(i.q,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=I(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=I(i.q,g+c|0);g=g+1|0;}j=DA(GY(e),i.bP,i.bJ);}f[b]=j;}a.B=a.B+
H(d)|0;D_(a);}
function Ni(a){var b,c,d,e,f,g;b=0;c=a.l.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Lr(f)){if(I(f.q,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function JX(a,b,c){var d,e,f,g,h,i,j;d=a.l.data.length;e=a.fm;if(!(e!==null&&e.data.length>=d)){a.fm=AEr(d);a.ed=By(d);a.fx=1;}Wu(a);if(!a.fx)AUT=AUT+1|0;else{f=0;g=0.0;AUS=AUS+1|0;h=0;while(h<d){i=c.data;j=a.l.data[h];f=f+H(j.q)|0;a.db.data[h]=f;CM(b,i[IN(j)]);g=g+GA(b,j.q);a.fm.data[h]=g;a.ed.data[h]=g+0.5|0;h=h+1|0;}a.B=f;a.fx=0;a.g0=0;}}
function Wu(a){var b;b=a.db;if(!(b!==null&&b.data.length>=a.l.data.length)){a.db=By(a.l.data.length);a.g0=1;}}
function Tp(a){a.fx=1;a.gz=null;}
function D_(a){Tp(a);a.gB=1;a.g0=1;}
function R9(a,b,c,d){var e,f,g,h,i,j,k;if(a.gz===null)a.gz=P($rt_arraycls($rt_intcls()),a.l.data.length);e=a.gz.data[d];if(e===null){e=c.data;f=a.l.data[d];CM(b,e[IN(f)]);f=f.q;e=By(H(f)-1|0);c=E2(f);g=!d?0.0:a.fm.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;L7(f,c,0,k);h[i]=g+GA(b,f)+0.5|0;i=k;}a.gz.data[d]=e;}return e;}
function F2(a,b,c,d){var e,f,g,h,i;if(a.l.data.length&&b){if(!(!a.fx&&a.ed!==null))JX(a,c,d);if(b>=a.B)return a.ed.data[a.l.data.length-1|0];e=0;f=0;a:{while(true){g=a.l.data;if(f>=g.length)break a;h=e+H(g[f].q)|0;i=BD(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.ed.data[f];}return (R9(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function EA(a){var b,c,d;a:{b=a.l.data.length;if(b){c=a.ed.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Gj(a,b){var c;if(b>=a.B)return b+1|0;c=GK(a,b);return a.db.data[c];}
function EI(a){var b,c,d,e;b=new R;FA(b,a.B);c=a.l.data;d=c.length;e=0;while(e<d){CW(b,c[e].q);e=e+1|0;}return S(b);}
function AAj(){AUU=0;}
function Pt(){var a=this;B.call(a);a.eO=null;a.d_=null;}
function AGA(a,b){var c=new Pt();AIs(c,a,b);return c;}
function AIs(a,b,c){a.eO=b;a.d_=c;}
function Ue(a,b,c){var d;d=a.eO;if(d===null)return;QN(a,d,b,c);}
function Nd(a,b,c){var d;d=a.eO;if(d===null)return;TK(a,d,b,c);}
function QN(a,b,c,d){var e,f,g,h;e=b.dQ.bY();while(e.cf()){Xr(a,e.bR(),c,d);}e=b.eg.bY();while(e.cf()){f=e.bR();g=new Tn;g.q9=a;DU(a,g,f,c,d);}h=b.fQ.bY();while(h.cf()){e=h.bR();Xr(a,e.ie,c,d);f=new To;f.nl=a;DU(a,f,e.i$,c,d);}b=b.cg.bY();while(b.cf()){QN(a,b.bR(),c,d);}}
function Xr(a,b,c,d){I7(a,b.dS,c,d);}
function DU(a,b,c,d,e){var f,g;a:{if(c instanceof FR){f=c.gg;g=new XG;g.om=a;g.ok=b;g.oj=d;g.ol=e;DY(f,g);}else{if(!(c instanceof H_)){if(!(c instanceof Iu))break a;f=c;DU(a,b,f.hj,d,e);DU(a,b,f.gv,d,e);return;}g=c.gs;f=new XH;f.wl=a;f.wk=b;f.wj=d;f.wi=e;DY(g,f);}}if(c!==null){c=c.eJ;if(c!==null)b.iP(c,Cs(d),Cs(e));}}
function I7(a,b,c,d){var e;e=b.c4;if(e>=c)b.c4=e+d|0;}
function TK(a,b,c,d){var e,f,g,h;e=b.dQ.bY();while(e.cf()){HL(a,(e.bR()).dS,c,d);}e=b.eg.bY();while(e.cf()){f=e.bR();g=new Sl;g.uq=a;DU(a,g,f,c,d);}h=b.fQ.bY();while(h.cf()){e=h.bR();HL(a,e.ie.dS,c,d);f=new Sm;f.tz=a;DU(a,f,e.i$,c,d);}b.dQ.lv(new Sk);b.eg.lv(new Sj);b=b.cg.bY();while(b.cf()){TK(a,b.bR(),c,d);}}
function HL(a,b,c,d){var e;e=b.c4;if(e>=c)b.c4=e-d|0;}
var BF=F(Bt);
var XR=F(Bt);
function B$(){var a=this;B.call(a);a.q=null;a.bP=0;a.bJ=0;}
function ZO(a){var b=new B$();AHB(b,a);return b;}
function DA(a,b,c){var d=new B$();Tt(d,a,b,c);return d;}
function AHB(a,b){Tt(a,b,0,0);}
function Tt(a,b,c,d){a.q=b;a.bP=c;a.bJ=d;}
function IN(a){return a.bJ&3;}
function GW(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Lr(a){return H(a.q);}
var Kn=F(JY);
function RL(){var a=this;B.call(a);a.cJ=null;a.d6=0;}
var AUV=null;function ACu(a){var b=new RL();ADb(b,a);return b;}
function ADb(a,b){a.d6=0;a.cJ=b;}
function PC(a,b){var c;if(b.d2)return b;b=BO(b.Z);while(true){if(!BP(b))return null;c=PC(a,BS(b));if(c!==null)break;}return c;}
function NE(a,b,c){var d,e,f,g;d=J6(a,a.cJ,b);if(d===null)return;b=c.b2;e=b===null?AUW:b.cg;f=c.Z;c=a.cJ;if(d===c){if(c.b2===null)c.b2=b;b=new Sd;b.q2=a;DY(f,b);b=new Sb;b.un=a;e.el(b);b=a.cJ;b.Z=f;b.b2.cg=e;b.d2=0;return;}if(!DG(f)){c=d.ge;if(c!==null){b=new On;b.ou=c;DY(f,b);g=JK(c.Z,d);if(g==(-1))Gi(c.Z,f);else{Fi(c.Z,g);Zc(c.Z,g,f);}}}b=d.b2;if(b!==null){b=b.f0;c=new Sr;c.qJ=b;e.el(c);g=JK(b.cg,d.b2);if(g==(-1))Gi(b.cg,e);else{b.cg.mo(g);b.cg.tr(g,e);}}}
function J6(a,b,c){var d,e,f,g;d=b.bL;if(d.bK==c.bK&&d.bN==c.bN?1:0){d=BO(b.Z);while(BP(d)){e=J6(a,BS(d),c);if(e!==null)return e;}return b;}b=BO(b.Z);while(true){if(!BP(b))return null;d=BS(b);f=c.bK;g=c.bN;e=d.bL;if(e.bK<=f&&g<=e.bN?1:0){e=J6(a,d,c);if(e!==null)break;}}return e;}
function Tk(a,b,c){Bw(c,b.bL);b=BO(b.Z);while(BP(b)){Tk(a,BS(b),c);}}
function Oy(a,b,c){a.d6=0;J5(a,a.cJ,b,c);}
function J5(a,b,c,d){var e;if(CQ(b)<c)return;a:{if(CS(b)>c){K4(b,d);GU(b,d);b=BO(b.Z);while(BP(b)){J5(a,BS(b),c,d);}}else{if(!IP(b,c)){if(a.d6)break a;if(CQ(b)!=c)break a;}GU(b,d);if(CS(b)==c&&a.d6)K4(b,d);e=BO(b.Z);while(BP(e)){J5(a,BS(e),c,d);}if(!a.d6){b.d2=1;a.d6=1;}}}}
function V$(a,b,c){a.d6=0;IV(a,a.cJ,b,c);}
function IV(a,b,c,d){var e,f,g,h,i,j;if(CQ(b)<c)return;e=CS(b);f=c+d|0;if(e>f){e= -d|0;K4(b,e);GU(b,e);g=BO(b.Z);while(BP(g)){IV(a,BS(g),c,d);}b.Z=MM(a,b.Z);}else{h=b.bL;if(c<=h.bK&&h.bN<=f?1:0){if(b===a.cJ){Li(b,0);IT(b,0);h=b.b2;if(h!==null)h.cg.hT();}else{Li(b,(-1));IT(b,(-1));h=b.b2;if(h!==null){W5(h);b.b2=null;}}FG(b.Z);}else{e=IP(b,c);f=IP(b,f);if(e&&f)GU(b, -d|0);else if(e)IT(b,c);else{if(!f)return;Li(b,c);GU(b, -d|0);}h=BO(b.Z);while(BP(h)){IV(a,BS(h),c,d);}h=UF(b.Z);g=OU(0);i=new RT;j=new UR;j.y5=i;j.iY
=g;while(Uj(h,j)){}if(!j.iY.ms&&!a.d6)b.d2=1;else a.d6=1;b.Z=MM(a,b.Z);}}}
function MM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Bz();d=null;e=AUV;f=b.ck;g=b.k;if(e===null)e=AUR;h=P(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}ZV(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.bO=b.bO+1|0;b=BO(b);while(BP(b)){m=BS(b);if(CS(m)==CQ(m))continue;if(!m.d2){if(d!==null){Bw(c,d);d=null;}Bw(c,m);}else if(d===null)d=m;else{n=AP4(Jb(Ba(CS(d),CS(m)),Z(CQ(d),CQ(m)),d.bL.eF),d.ge,d.b2);n.d2=1;d=m.b2;if(d===null)d=n;else{W5(d);d=n;}}}if(d!==null)Bw(c,d);return c;}
function Wm(a,b,c,d){var e,f,g,h,i,j,k,l;if((CQ(c)-CS(c)|0)<43)e=B9(d,CS(c),CQ(c));else{e=B9(d,CS(c),CS(c)+20|0);f=B9(d,CQ(c)-20|0,CQ(c));g=new R;U(g);K(K(K(g,e),C(55)),f);e=S(g);}e=UK(e,C(54),C(56));f=FJ();g=c.bL;h=g.bK;i=g.bN;j=g.eF;k=new R;U(k);BX(k,40);BX(Bl(K(Bl(K(Bl(k,h),C(52)),i),C(52)),j),41);k=S(k);h=c.d2;g=new R;U(g);I8(K(K(g,k),C(52)),h);l=S(g);g=new R;U(g);k=Bl(g,b);BX(k,32);k=K(k,l);BX(k,9);K(k,e);Ct(f,S(g));c=BO(c.Z);h=b+1|0;while(BP(c)){Wm(a,h,BS(c),d);}}
function ADp(){AUV=new VM;}
function ADB(){var a=this;B.call(a);a.bK=0;a.bN=0;a.eF=0;}
function Jb(a,b,c){var d=new ADB();AHu(d,a,b,c);return d;}
function AHu(a,b,c,d){a.bK=b;a.bN=c;a.eF=d;}
function AOS(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return a.bK==c.bK&&a.bN==c.bN&&a.eF==c.eF?1:0;}return 0;}
function AGb(a,b){var c;b=b;c=BD(a.bK,b.bK);if(!c)c=BD(b.bN,a.bN);return c;}
var VM=F();
function AKN(a,b,c){var d;b=b;c=c;b=b.bL;c=c.bL;d=BD(b.bK,c.bK);if(!d)d=BD(c.bN,b.bN);return d;}
function QZ(){var a=this;B.call(a);a.bL=null;a.ge=null;a.Z=null;a.b2=null;a.d2=0;}
function AP4(a,b,c){var d=new QZ();ACt(d,a,b,c);return d;}
function ACt(a,b,c,d){a.d2=0;a.bL=b;a.ge=c;a.Z=Bz();a.b2=d;}
function ADG(b){return Rc(b,null);}
function Rc(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=V(b);e=V(b);f=V(b);g=V(b);h=V(b);i=Jb(d,e,f);j=new QZ;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}ACt(j,i,null,l);m=0;while(m<g){l=Rc(b,c);l.ge=j;Bw(j.Z,l);m=m+1|0;}return j;}
function YF(b,c,d){var e,f,g,h,i;a:{e=b.bL;f=b.Z;g=e.bK;h=e.bN;i=e.eF;Bi(c,g);F$(c,h,i);Bi(c,f.k);if(d!==null){e=b.b2;if(e!==null&&VA(d,e)){g=(LG(d,b.b2)).bd;break a;}}g=(-1);}Bi(c,g);b=BO(f);while(BP(b)){YF(BS(b),c,d);}}
function CS(a){return a.bL.bK;}
function CQ(a){return a.bL.bN;}
function Li(a,b){a.bL.bK=b;}
function IT(a,b){a.bL.bN=b;}
function K4(a,b){var c;c=a.bL;c.bK=c.bK+b|0;}
function GU(a,b){var c;c=a.bL;c.bN=c.bN+b|0;}
function IP(a,b){return CS(a)<=b&&b<CQ(a)?1:0;}
function AF0(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return BJ(a.bL,c.bL)&&BJ(a.Z,c.Z)?1:0;}return 0;}
var GX=F(0);
function F4(){var a=this;B.call(a);a.cn=null;a.cF=null;}
function AUX(a,b){var c=new F4();XA(c,a,b);return c;}
function XA(a,b,c){a.cn=b;a.cF=c;}
function AGU(a,b){var c,d;if(a===b)return 1;if(!H8(b,GX))return 0;a:{b:{c:{d:{c=b;b=a.cn;if(b!==null){if(!b.bu(c.cn))break c;else break d;}if(c.cn!==null)break c;}b=a.cF;if(b!==null){if(!b.bu(c.cF))break c;else break b;}if(c.cF===null)break b;}d=0;break a;}d=1;}return d;}
function Gc(){var a=this;F4.call(a);a.iV=0;a.cu=null;}
function WR(){var a=this;B.call(a);a.kA=null;a.mz=null;a.jR=null;a.mg=null;a.l6=null;a.l2=null;}
function LJ(a,b,c){return Q9(a,Cf(a.kA),b,c);}
function QH(a,b,c){return Q9(a,Cf(a.mz),b,c);}
function Q9(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(Jx(g,c,d))return g.rT;f=f+1|0;}return null;}
function TQ(a,b,c){var d,e,f,g;d=(Cf(a.jR)).data;e=d.length;f=0;while(f<e){g=d[f];if(Jx(g,b,c))return g.rp;f=f+1|0;}return null;}
var Kl=F(0);
function Pq(){var a=this;B.call(a);a.uY=null;a.uZ=null;}
function EM(){B.call(this);this.pq=null;}
function AUY(a){var b=new EM();KE(b,a);return b;}
function KE(a,b){a.pq=b;}
function Jx(a,b,c){var d,e,f,g;d=a.pq.data;e=d.length;f=0;while(f<e){g=d[f];if(ABG(b,g.rB)&&ABG(c,g.qx)?1:0)return 1;f=f+1|0;}return 0;}
function Kv(){EM.call(this);this.rp=null;}
var ACZ=F();
function Jk(b){var c,d,e,f;if(!($rt_globals.Array.isArray(b)?1:0)){c=P(Hp,1);c.data[0]=Z$(b);return c;}d=b.length;c=P(Hp,d);e=c.data;f=0;while(f<d){e[f]=Z$(b[f]);f=f+1|0;}return c;}
function Z$(b){var c,d,e;c=typeof b==='string'?1:0;d=c?Ce(b):GL(b.language,null);e=c?null:GL(b.scheme,null);b=new Hp;b.rB=d;b.qx=e;return b;}
var AAy=F();
function M0(b){var c,d;ATh();c=AUZ;d=b.data;return c.decode(d);}
var AA0=F();
function AEM(b){var c,d;c=b.bb+1|0;d=b.U+1|0;return Za(c,d);}
function Hz(b,c){var d;d=b+1|0;b=c+1|0;return Za(d,b);}
function Za(b,c){return {column:b,lineNumber:c};}
function FT(){EM.call(this);this.rT=null;}
function AU0(a,b){var c=new FT();Xv(c,a,b);return c;}
function Xv(a,b,c){KE(a,b);a.rT=c;}
function JB(){EM.call(this);this.vi=null;}
function Sq(){var a=this;B.call(a);a.rM=null;a.rN=null;a.rO=null;}
function AO8(a,b,c){var d,e,f;b=Cv(b,"f");Cv(c,"f");c=a.rM;d=a.rN;e=a.rO;f=new XQ;f.s2=b;Lu(c.g1,f,0,d,e);}
var Z8=F();
function YT(b){return b?1:0;}
var G$=F(0);
function AMc(a){}
function AIa(a){}
var ES=F(0);
var Jw=F(0);
var Qb=F(0);
function Z6(){var a=this;B.call(a);a.R=null;a.ci=null;a.bD=null;a.O=null;a.eE=null;a.wh=0;a.mv=null;a.cG=null;a.lw=0;a.dR=0;a.fk=null;a.g7=null;a.b4=null;a.z=0;a.c=null;a.cv=null;a.cC=null;a.hG=null;a.fn=null;a.uD=0;a.sq=0;a.cz=0;a.b3=0;a.cb=0;a.eQ=null;a.eL=null;a.eM=null;a.gS=0;a.hU=0;a.yT=0;a.wX=0;a.js=0;a.iR=0;a.lQ=0;a.dE=0;a.cH=null;a.eC=null;a.dv=0;a.bz=0;a.jK=null;a.hF=null;a.rv=null;a.tt=null;a.kr=null;a.V=0;a.gC=null;a.qt=0;a.oO=null;a.up=null;}
function AAi(a,b){var c=new Z6();ANJ(c,a,b);return c;}
function ANJ(a,b,c){var d,e,f,g,h;a.R=new Bj;a.ci=new Bj;a.wh=0;a.mv=P(Bk,10);d=new PL;e=new W0;e.ct=new Bj;e.bp=new Bj;e.da=new B5;e.gu=new B5;VY(e,0,0,2,20);d.d9=e;d.ka=0.5;d.gX=0.0;Jq(187,187,187,255,e.da);a.cG=d;a.dR=16;a.fk=C(57);a.b4=P(Ky,4);a.c=AR6(P(Bv,0),null,null);f=new WR;f.kA=Cx(P(FT,0));f.mz=Cx(P(FT,0));f.jR=Cx(P(Kv,0));f.mg=Cx(P(JB,0));f.l6=Cx(P(Fj,0));f.l2=Cx(P(Kl,0));a.cv=f;a.fn=P(EW,0);a.eQ=Cg(1,0);a.eL=U1();a.eM=U1();a.gS=0;a.hU=1;a.js=1;a.iR=1;a.lQ=1;a.dE=3;a.cH=AQf();a.eC=C(58);a.dv=0;a.bz
=0;e=Ed();BM(e);f=new NP;f.to=e;a.hF=f;a.V=0;e=new NO;e.mR=a;a.oO=e;e=new NN;e.rt=a;a.up=e;a.bD=b;a.O=b.cS;a.eE=c;c=new UI;g=a.b4;h=b.ca;c.jm=new B5;c.jf=new Bj;c.ko=new Bj;b=new B5;c.hk=b;c.kq=g;c.mq=h;Te(b);a.gC=c;g=a.mv.data;b=new NM;b.uP=a;g[1]=b;b=new NT;b.oF=a;g[2]=b;b=new NS;b.sN=a;g[3]=b;b=new NR;b.wp=a;g[4]=b;b=new NQ;b.oh=a;g[5]=b;b=new NL;b.r1=a;g[6]=b;}
function II(a,b,c,d){var e,f,g,h,i;e=a.gC;Te(e.hk);f=e.hk;g=d>=0.5?d:0.25;h=g>=4.0?0.5:AD4(f.bZ,AD4(g,AU1));Cc(f,f.bq/g,f.bI*g,AQn(f.ba*g,1.25),h);f=e.hk;h=f.bI;e.sO=h-(h|0)>=0.25?0.0:0.5;i=h+f.ba+1.5|0;e.vP=i;Bg(e.ko,0,i*2|0);Cw(a.R,b);Cw(a.ci,c);SS(a,b,c,d);}
function V0(a,b,c){a.rv=b;a.tt=c;}
function SS(a,b,c,d){var e,f,g,h;a.cz=Cn(80.0,d);a.b3=Cn(1.0,d);a.cb=Cn(10.0,d);if(!a.bz)Cw(a.bD.dk,a.R);else Bg(a.bD.dk,(b.a+c.a|0)-IB(a)|0,b.b);b=a.cH;e=a.bD.dk;f=IB(a);g=c.b;h=d;Cw(b.e$,e);Bg(b.eA,f,g);b.it=h;b=a.cG;f=Cn(2.0,d);b.d9.bp.a=f;Q7(a,a.fk,a.dR);K0(a);}
function AH1(a){a.lw=1;KT(a);}
function AE4(a){a.lw=0;}
function KT(a){var b;b=a.cG;b.gX=Nv(Fp(a))+b.ka*1.25;b.fP=1;}
function Jz(a,b){var c,d;a.cC=b;c=a.cG;d=b.bA.wd;Ej(c.d9.da,d);c=a.eL;d=b.bA;Gu(c,d.kU,d.k5);c=a.eM;b=b.bA;Gu(c,b.kU,b.k5);}
function Ns(a){Dy(a,a.g7.mk,a.dR+1|0);}
function Xx(a){var b;b=a.dR;if(b<=7)return;Dy(a,a.g7.mk,b-1|0);}
function QA(a){a.hG=C4(a.hG,E8(a.O,1024,a.z,a.bD.ca));}
function Og(a,b){Dy(a,b,a.dR);}
function ANI(a,b){Mh(a.bD,b);}
function Dy(a,b,c){if(a.bD.b1!==0.0){Q7(a,b,c);G5(Fp(a));}a.dR=c;a.fk=b;}
function J8(a,b){var c,d,e,f;c=a.gC;b=a.bD.ca;c.mq=b;if(a.hG.j4!=b)QA(a);d=a.fn.data;b=d.length;e=0;while(e<b){f=d[e].bF;if(f!==null)f.gB=1;e=e+1|0;}Jm(a.cH);K0(a);}
function Q7(a,b,c){var d,e,f,g,h,i,j;d=Cn(c,a.bD.b1);e=a.g7;f=e!==null?e.pI:0;if(!(d==f&&BJ(b,a.fk))){Jm(a.cH);g=a.fn.data;c=g.length;f=0;while(f<c){Xb(g[f]);f=f+1|0;}g=a.c.f.v.data;c=g.length;f=0;while(f<c){D_(g[f]);f=f+1|0;}g=a.b4.data;h=GW(0,0);e=a.O;i=d;g[h]=Gs(e,b,i,300,0);a.b4.data[GW(0,1)]=Gs(a.O,b,i,300,2);a.b4.data[GW(1,0)]=Gs(a.O,b,i,600,0);a.b4.data[GW(1,1)]=Gs(a.O,b,i,600,2);e=a.b4.data[GW(0,0)];a.g7=e;c=Fv(e);f=DE(c*1.25);a.z=f;e=a.gC;e.wA=f;g=a.b4.data;j=g[0];e.vC= -( -((f+j.eh+j.dT)/2.0)|0)|0;a.cG.d9.bp.b
=Fv(g[0]);QA(a);f=a.z;h=WA(a.cG);e=new R;U(e);b=K(K(e,C(59)),b);BX(b,32);Bl(K(Bl(K(Bl(K(Bl(b,d),C(60)),c),C(61)),f),C(62)),h);$rt_globals.console.info($rt_ustr(S(e)));if(AU2){c=Kf(a.b4.data[0],a.z);b=new R;U(b);Bl(K(b,C(63)),c);$rt_globals.console.info($rt_ustr(S(b)));}a.c.gN=F2(E6(a),a.c.r,a.O.cY,a.b4);Gy(a);K0(a);}}
function Mb(a){return T(Cb(a.c.f)+5|0,a.z);}
function FL(a){return Z(Mb(a)-a.ci.b|0,0);}
function S_(a){return Z(a.gS-Da(a)|0,0);}
function Da(a){var b;b=!a.bz?0:CP(a)+a.cb|0;return Z(1,(a.ci.a-a.cz|0)-b|0);}
function IB(a){return a.bz?a.cz:a.cz-a.cb|0;}
function Cz(a){return a.ci.b;}
function KC(a,b){var c,d,e,f,g;c=a.c.f;if(TF(c)&&b-c.s0>0.03125?1:0){d=a.qt;e=a.c.f.b0;if(d!=e){a.qt=e;Rz(a);}}S1(a);d=KM((a.V+a.yT|0)-a.wX|0,FL(a));e=a.V==d?0:1;if(e)DR(a,d);a:{c=a.cG;f=c.fP;if(b>c.gX)while(true){g=c.gX+c.ka;c.gX=g;c.fP=c.fP?0:1;if(b>g)continue;else break a;}}d=c.fP==f?0:1;return !d&&!e&&!a.wh?0:1;}
function DR(a,b){var c,d;c=KM(b,FL(a));if(c!=a.V){a.V=c;a.c.hQ=c/a.z;d=a.tt;if(d!==null)d.j5(c);}}
function Ia(a,b){var c,d;c=KM(b,S_(a));d=a.c;if(c!=d.c5){d.c5=c;d=a.rv;if(d!==null)d.j5(c);}}
function Iv(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=H7(a.ci.b,a.z)+7|0;c=a.fn;if(c.data.length<b)a.fn=Zr(b,c,a.gC,a.uD,a.sq,a.c.f);Dg(a.O,0);RO(a.O,a.R,a.ci);d=(a.z-WA(a.cG)|0)/2|0;e=(a.c.gN-(S5(a.cG)/2|0)|0)-a.c.c5|0;f=!a.bz?a.cz:(a.b3+a.cb|0)+CP(a)|0;g=a.cG;b=f+e|0;d=(d+T(a.c.o,a.z)|0)-a.V|0;Bg(g.d9.ct,b,d);h=Cb(a.c.f);i=Fh(a);j=Gq(a);a.uD=i;a.sq=j;k=!a.bz?a.R.a+a.cz|0:((a.R.a+a.b3|0)+a.cb|0)+CP(a)|0;l=i;while(l<=j&&l<h){m=BK(a.c.f,l);g=Vb(a,l);XX(g,m,a.hG,a.O,a.z,Da(a),a.c.c5);n=g.bF;a.gS=Z(a.gS,
EA(m)+(40.0*a.bD.b1|0)|0);o=T(a.z,l)-a.V|0;p=CE(a)===null?null:(CE(a)).data[l];d=a.R.b+o|0;m=a.O;f=Da(a);q=a.z;o=a.c.c5;r=a.cC;s=ABE(Be(a),l);if(s!==null){if(s.b==(-1))s.b=n.B;s.a=F2(n,s.a,a.O.cY,a.b4);s.b=F2(n,s.b,a.O.cY,a.b4);}t=a.c;Ze(g,d,k,m,f,q,o,r,s,t.hi,t.fV,t.o!=l?0:1,CE(a)===null?0:1,p);l=l+1|0;}r=a.bD.dk;l=i;while(l<=j&&l<h&&a.js){g=Vb(a,l);o=T(a.z,l)-a.V|0;u=ACK(Be(a),l);t=a.cC.bA.qW;v=a.c.o==l&&CE(a)===null?1:0;if(u)t=a.cC.bA.jn;else if(CE(a)!==null&&l<(CE(a)).data.length&&(CE(a)).data[l]!==null)
{t=a.cC;t=HV(t.du,t,(CE(a)).data[l].fH);}else if(v)t=a.cC.bA.h8;Zm(g,a.O,k,a.R.b+o|0,a.z,r,a.c.c5,Da(a),t);l=l+1|0;}if(a.hU){q=Ba(j+1|0,h);AA1(a,T(a.z,q)-a.V|0);}AB4(a);ABa(a,i,j);if(a.iR)ADK(a,i,j,h);if(a.lw&&e>=(( -S5(a.cG)|0)/2|0)){g=a.cG;t=a.ci;if(Y5(g.d9.ct,0,0,t))ACj(a.cG,a.O,a.R);}ABA(a);AAK(a);Le(a.O);}
function ADK(a,b,c,d){var e,f,g,h,i,j;while(b<=c&&b<d){e=CE(a)!==null&&b<(CE(a)).data.length?(CE(a)).data[b]:null;if(e!==null){f=a.cC;f=HV(f.du,f,e.fH);}else f=CE(a)!==null?a.cC.bA.fb:a.cC.bA.h8;if(!(a.c.o!=b&&e===null)){a.eQ.a=!a.bz?(a.cb-a.b3|0)-a.dE|0:((a.cb+CP(a)|0)+a.b3|0)-a.dE|0;g=a.eQ;h=a.z;g.b=h;i=a.bz?0:(a.cz-a.cb|0)+a.b3|0;h=T(h,b)-a.V|0;e=a.O;j=a.R;BB(e,j.a+i|0,j.b+h|0,g,f);}b=b+1|0;}}
function ABa(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;d=a.ci.b;e=Ba(d,T(Cb(a.c.f),a.z)-a.V|0);f=a.cH;g=a.V;h=CE(a)!==null?(-1):a.c.o;i=a.O;j=a.cC;RO(i,f.e$,f.eA);S3(f,i,b,d);k=f.fe;if(b!=k){l=f.cp.k;m=l*20|0;if(k<b){k=k/20|0;n=b/20|0;}else{n=Z(0,(k-1|0)/20|0);k=Z(0,(b-1|0)/20|0);}a:{if((n-k|0)>=l){RD(f,b);f.fe=b;}else{if(f.fe>=b)while(true){if(n<k)break a;f.fe=Nn(Bs(f.cp,n%l|0),f.ej,f.fh,f.fe,b,m,f.it);n=n+(-1)|0;}while(k<=n){f.fe=Nn(Bs(f.cp,k%l|0),f.ej,f.fh,f.fe,b,m,f.it);k=k+1|0;}}}}o
=BO(f.cp);while(BP(o)){p=BS(o);q=f.e$;k=T(f.cp.k,f.iX);r=f.jM;s=p.ey.b;n=((p.jp.b-(g%k|0)|0)+k|0)%k|0;t=j.gA;l=g+n|0;u=p.J;m=l/u|0;v=n+s|0;l=BD(v,e);if(l<=0){k=s/u|0;u=0;v=0;w=0;while(v<k){l=m+v|0;if(Lz(p,r,w,l,j,t)){s=T((v-u|0)+1|0,p.J);Bg(p.dt,Ci(p.bc),s);Cc(p.ec,0.0,T(u,p.J),Ci(p.bc),s);l=w;}else{x=Fu(j,r,w,t);Es(p,i,n+T(u,p.J)|0,q,t.eT,x);Bg(p.dt,Ci(p.bc),p.J);Cc(p.ec,0.0,T(v,p.J),Ci(p.bc),p.J);u=v;}v=v+1|0;w=l;}x=Fu(j,r,w,t);Es(p,i,n+T(u,p.J)|0,q,t.eT,x);}else{if(l>0&&n<e){l=Z(e-n|0,0);w=p.J;u=l/w|0;if
(l%w|0)u=u+1|0;y=0;z=0;ba=0;while(z<u){w=m+z|0;if(Lz(p,r,ba,w,j,t)){l=T((z-y|0)+1|0,p.J);Bg(p.dt,Ci(p.bc),l);Cc(p.ec,0.0,T(y,p.J),Ci(p.bc),l);w=ba;}else{x=Fu(j,r,ba,t);Es(p,i,n+T(y,p.J)|0,q,t.eT,x);Bg(p.dt,Ci(p.bc),p.J);Cc(p.ec,0.0,T(z,p.J),Ci(p.bc),p.J);y=z;}z=z+1|0;ba=w;}x=Fu(j,r,ba,t);Es(p,i,n+T(y,p.J)|0,q,t.eT,x);}if(v>k)AAZ(p,q,e,g,k,j,r,i,s,n,t);}}x=j.gA;if(e<d){bb=f.e$;BB(i,bb.a,bb.b+e|0,Cg(f.eA.a,d-e|0),x.gr);}if(b<=h&&h<=c)ACc(f,g,h,j.gA,i);Le(i);}
function Fh(a){return Ba(a.V/a.z|0,Cb(a.c.f)-1|0);}
function Gq(a){return Ba(((a.V+Cz(a)|0)-1|0)/a.z|0,Cb(a.c.f)-1|0);}
function K0(a){var b,c,d,e,f,g,h;b=a.cH;c=a.b4.data[0];d=a.z;e=a.bD.ca;f=a.O;b.ih=c;b.l5=d;g=d*20|0;b.iX=g;h=C4(b.ej,E8(f,b.eA.a,g,e));b.ej=h;CM(h,b.ih);R$(b.ej,2);c=C4(b.fh,E8(f,b.eA.a,d,e));b.fh=c;CM(c,b.ih);R$(b.fh,2);S3(a.cH,a.O,Fh(a),Cz(a));}
function Vb(a,b){var c;c=a.fn.data;return c[b%c.length|0];}
function VW(a,b){var c,d,e,f;c=Fs(0,H(a.eC),Ni(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BF;X(b);L(b);}if(c!=1){d=b.b$.data.length;if(d&&c){e=B1(T(d,c));d=0;f=0;while(f<c){P2(b,0,H(b),e,d);d=d+H(b)|0;f=f+1|0;}b=LY(e);}else b=AUs;}}return b;}
function Om(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=By(i);k=ATV(i).data;G6(j,c);c=0;l=k.length;if(c>l){f=new BF;X(f);L(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.c.f;o.b0=o.b0+1|0;p=P(Gn,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=APh(h[m],n[m],k[m],b[m],f.U,f.bb);m=m+1|0;}Bw(o.f2,p);c=0;while(c<i){b=e.data;JD(o,h[c],n[c],k[c],b[c]);g.v9(Cs(h[c]),b[c]);c=c+1|0;}}
function ADQ(a){var b;if(C3(Be(a)))FZ(a);else{b=a.c;ME(b.f,b.o,b.r);}Gy(a);DQ(a);return 1;}
function C8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.dv)return 0;if(C3(Be(a)))FZ(a);c=LD(UK(b,C(65),C(3)),C(54),(-1));d=c.data;b=a.c;e=b.f;f=b.o;g=b.r;XJ(e,f,g,c);h=d.length;if(!h)b=AUs;else{i=0;j=0;while(j<h){i=i+H(d[j])|0;j=j+1|0;}k=B1(i+T(h-1|0,H(C(54)))|0);c=k.data;l=0;b=d[0];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<H(C(54))){m=l+1|0;c[l]=I(C(54),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=n+1|0;}b=LY(k);}E9(e,f,g,0,b);b=a.c;f=b.o;m=(f+h|
0)-1|0;Ck(a,m,m!=f?H(d[h-1|0]):b.r+H(d[0])|0,0);Fe(a);DQ(a);return 1;}
function FZ(a){var b,c,d;b=Dz(Be(a));c=a.c.f;d=Be(a);MQ(c,d,VF(c,d));Ck(a,b.D,b.Q,0);Fe(a);DQ(a);}
function Fe(a){var b,c;(Be(a)).c0=0;b=(Be(a)).bx;c=a.c;B0(b,c.o,c.r);b=(Be(a)).bo;c=a.c;B0(b,c.o,c.r);}
function CP(a){return a.g7.l8|0;}
function AA1(a,b){var c,d;c=a.ci.b;if(b<c){d=a.bD.dk;d.b=c-b|0;d.a=!a.bz?Da(a)+a.dE|0:Da(a)+a.b3|0;c=!a.bz?(a.R.a+a.cz|0)-a.dE|0:(((a.R.a+a.cb|0)+CP(a)|0)+a.b3|0)-a.dE|0;BB(a.O,c,a.R.b+b|0,d,a.cC.bA.fb);}}
function ABA(a){var b;b=a.bz?a.R.a+CP(a)|0:a.R.a+a.ci.a|0;W2(a.eL,a.V,a.R.b,Cz(a),Mb(a),b,CP(a));b=!a.bz?a.R.a+a.cz|0:((a.R.a+a.b3|0)+a.cb|0)+CP(a)|0;QM(a.eM,a.c.c5,b,Da(a),a.gS,a.R.b+Cz(a)|0,CP(a));}
function AAK(a){var b,c;b=Q_(a.eL);c=Q_(a.eM);if(!(!b&&!c)){Dg(a.O,1);if(b)Hy(a.eL,a.O);if(c)Hy(a.eM,a.O);if(b)HH(a.eL,a.O);if(c)HH(a.eM,a.O);}}
function AB4(a){var b,c,d,e;b=a.eQ;c=a.ci;b.b=c.b;b.a=a.b3;d=!a.bz?a.cz-a.cb|0:(c.a-IB(a)|0)-a.b3|0;b=a.O;c=a.R;BB(b,c.a+d|0,c.b,a.eQ,a.cC.bA.tE);a.eQ.a=!a.bz?(a.cb-a.b3|0)-a.dE|0:((a.cb+CP(a)|0)+a.b3|0)-a.dE|0;e=a.bz?0:(a.cz-a.cb|0)+a.b3|0;b=a.O;c=a.R;BB(b,c.a+e|0,c.b,a.eQ,a.cC.bA.fb);}
function KM(b,c){return Ba(Z(0,b),c);}
function Fp(a){return a.bD.fz;}
function IA(a,b){var c,d,e,f;c=EQ(b);d=new R;U(d);K(K(d,C(66)),c);$rt_globals.console.info($rt_ustr(S(d)));Fp(a);c=EQ(b);d=Fc();c=$rt_ustr(c);d.title=c;Ck(a,0,0,0);c=new N0;c.q5=a;c.q4=b;d=Ed();BM(d);e=new N1;e.ub=d;f=new T7;f.pS=e;d=new WF;d.nV=c;c=b.fM;if(c!==null)c.text().then(Bm(d,"f"),Bm(f,"f"));else{b=b.hP.getFile();c=new WG;c.py=d;c.pz=f;b.then(Bm(c,"f"),Bm(f,"f"));}}
function Hg(a,b,c,d,e){if(Hq(a,e))return 1;if(c&&d)return 1;if(c)DR(a,a.V+((T(b,a.z)*12|0)/10|0)|0);else if(!d){GZ(a,a.c.o+b|0,e);TM(a);}return 1;}
function R4(a,b,c,d){var e,f,g;if(Hq(a,d))return 1;e=E6(a);if(!c)f=a.c.r+b|0;else if(b>=0)f=Gj(e,a.c.r);else{b=a.c.r;if(!b)f=(-1);else{c=GK(e,b);if(c>0&&e.db.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.db.data[c-1|0];}}if(f>e.B){e=a.c;if((e.o+1|0)<Cb(e.f))Ck(a,a.c.o+1|0,0,d);}else if(f>=0)CX(a,f,d);else{e=a.c;b=e.o;if(b>0){g=(BK(e.f,b-1|0)).B;Ck(a,a.c.o-1|0,g,d);}}Vo(a);return 1;}
function Hq(a,b){if(C3(Be(a))&&!b){Fe(a);Gy(a);return 1;}if(!(b&&C3(Be(a))))Fe(a);return 0;}
function Ck(a,b,c,d){a.c.r=c;return GZ(a,b,d);}
function GZ(a,b,c){var d;d=a.c;d.o=Fs(0,b,Cb(d.f)-1|0);return CX(a,a.c.r,c);}
function CX(a,b,c){var d,e;a.c.r=Fs(0,b,(E6(a)).B);a.c.gN=a.bD.b1===0.0?0:F2(E6(a),a.c.r,a.O.cY,a.b4);KT(a);Gy(a);if(c)(Be(a)).c0=1;d=Be(a);e=a.c;KV(d,e.o,e.r);(Be(a)).c0=0;return 1;}
function L1(a,b){var c;c=AGK(Be(a));CX(a,b,0);Hv(Be(a),c);}
function Gy(a){TM(a);Vo(a);}
function TM(a){var b,c,d,e,f;b=a.V;c=b+Cz(a)|0;d=a.c.o;e=a.z;d=T(d,e);f=d+e|0;if(d<(b+e|0))DR(a,d-e|0);else if(f>(c-e|0))DR(a,(f-Cz(a)|0)+a.z|0);}
function Vo(a){var b,c,d,e,f;b=DE(a.bD.b1*30.0);c=a.c.c5;d=c+Da(a)|0;e=a.c.gN;f=e+b|0;if(e<(c+b|0))Ia(a,e-b|0);else if(f>(d-b|0))Ia(a,(f-Da(a)|0)+b|0);}
function ADL(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;LZ(a.c);b=a.jK;c=a.c;d=c.f;c=c.fV;e=Cb(d);f=b.o_.data;g=f.length;h=0;while(h<g){i=f[h];b=i.gQ;j=b.e5;k=b.je;l=j;while(true){m=BD(l,k);if(m>0)break;if(l>=e)break;a:{b=BK(d,l);if(b.l.data.length){n=l>j?0:Z(i.gQ.fC,0);o=m<0?b.B:Ba(i.gQ.iv,b.B);while(true){if(n>=o)break a;p=GK(b,n);q=RM(b,p);r=p>=b.l.data.length?b.B:b.db.data[p];s=KA(b,p);if(q==n&&r<=o)Bw(c,s);else{s=Ed();t=new R;U(t);u=Bl(K(t,C(67)),l);BX(u,58);K(Bl(u,n),C(68));Ct(s,S(t));}n=r;}}}l=l+
1|0;}h=h+1|0;}}
function HE(a,b){var c,d;Ck(a,b.U,b.bb,0);c=Gj(E6(a),a.c.r);B0((Be(a)).bo,a.c.o,c);b=(Be(a)).bx;d=a.c;B0(b,d.o,d.r);}
function D2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.R;e=c-d.a|0;f=Fs(0,((b.b-d.b|0)+a.V|0)/a.z|0,Cb(a.c.f)-1|0);g=!a.bz?a.cz:(a.b3+a.cb|0)+CP(a)|0;h=Z(0,(e-g|0)+a.c.c5|0);b=BK(a.c.f,f);d=a.O.cY;i=a.b4;if(!(b.ed!==null&&!b.fx))JX(b,d,i);j=b.ed;e=b.l.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.B;else{c=TB(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.l.data.length)k=b.B;else{j=R9(b,d,i,c);k=0;e=0;while(e<c){k=k+H(b.l.data[e].q)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(AUU){b=new R;U(b);Bl(K(Bl(K(Bl(K(b,C(69)),e),C(70)),h),C(71)),m);$rt_globals.console.info($rt_ustr(S(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return Dp(f,k);}
function Xg(a,b){var c,d;c=a.c;d=b.U;c.o=d;c.r=b.bb;c.gN=F2(BK(c.f,d),a.c.r,a.O.cY,a.b4);KT(a);}
function VR(a,b,c,d){var e;a:{e=c.data;switch(e.length){case 0:break;case 1:Sa(a,e[0]);break a;default:Rp(a.eE,b,c,a,d);break a;}Ka(a.eE,b,a);}}
function Sa(a,b){var c,d,e,f,g;if(BJ(b.g9,a.c.c9)){b=b.fX;Ck(a,b.e5,b.fC,0);B0((Be(a)).bx,b.e5,b.fC);B0((Be(a)).bo,b.je,b.iv);}else{c=(Cf(a.cv.l2)).data;d=c.length;e=0;a:{while(true){if(e>=d){f=null;break a;}f=c[e];if(f!==null)break;e=e+1|0;}}if(f!==null){Fp(a);g=new Pc;g.oP=f;g.oN=b;BM(g);b=new RB;b.ut=g;$rt_globals.setTimeout(Bm(b,"onTimer"),0);}}}
function E6(a){var b;b=a.c;return BK(b.f,b.o);}
function Jh(a,b,c){var d,e;d=DE((a.z*4|0)*c/150.0);e=DE(b);if(d)DR(a,a.V+d|0);if(e)Ia(a,a.c.c5+e|0);return 1;}
function S$(a,b,c){(Be(a)).c0=0;return 1;}
function My(a,b,c){var d;if(c)return null;d=HM(a.eL,b.n,a.oO,1);if(d!==null)return d;d=HM(a.eM,b.n,a.up,0);if(d!==null)return d;Ie(a);Xg(a,D2(a,b.n));Ku(a.c);if(!b.bC&&!(Be(a)).c0){b=(Be(a)).bx;d=a.c;B0(b,d.o,d.r);}(Be(a)).c0=1;b=Be(a);d=a.c;KV(b,d.o,d.r);b=new Nf;b.qK=a;return b;}
function MH(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cm){b=b.n;e=D2(a,b);f=Gw(a.c.f,e.U,e.bb);g=Kw(a,f);h=LJ(a.cv,DT(a.c),FK(a.c));if(h!==null){i=a.c;c=e.U;d=e.bb;e=new PX;e.qS=a;e.qU=b;e.qT=g;h.lo(i,c,d,e,a.hF);}else{e=B_(a.c.f.cV,f);if(e!==null){HE(a,e);c=1;}else{e=B_(a.c.f.cM,f);if(e!==null&&!DG(e)){if(e.k!=1){Q8(a.eE,b,e,a,g);c=1;}else{HE(a,Bs(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(D2(a,b.n)).U;g=BK(a.c.f,c);c=Fy(g,a.c.r);d=Gj(g,a.c.r);b=Lv(g,c);if((d-1|0)==g.B){B0((Be(a)).bx,a.c.o,
Ni(g));B0((Be(a)).bo,a.c.o,g.B);}else{if(b!==null){b=b.q;j=0;c:{while(true){k=b.b$.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.c.r;if(c==j){c=Fy(g,c-1|0);d=Gj(g,c);}else{if(d!=j){PI(Be(a),a.c.o);break b;}c=Fy(g,d+1|0);d=Gj(g,c);}}}B0((Be(a)).bx,a.c.o,c);(Be(a)).c0=1;Ck(a,a.c.o,d,0);(Be(a)).c0=0;Ie(a);}}break a;case 3:break;default:break a;}PI(Be(a),a.c.o);RK(a.c.gb);Ie(a);}}return 1;}
function NW(a,b){var c,d,e,f,g,h,i,j,k;c=a.bD.df;if(H3(a.eL,b.n,c))return 1;if(H3(a.eM,b.n,c))return 1;d=a.cH;if(EU(b.n,d.e$,d.eA)&&Fw(c)?1:0)return 1;e=b.n;f=!a.bz?a.R.a+a.cz|0:((a.R.a+a.cb|0)+a.b3|0)+CP(a)|0;a:{g=a.R.b;h=Da(a);i=Cz(a);j=e.a;if(f<=j&&j<(f+h|0)){k=e.b;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Fw(c);if(b.cm){e=D2(a,b.n);e.bb=Fy(BK(a.c.f,e.U),e.bb);b=a.c.f;if(!I5(b.cV,e)&&!I5(b.cM,e)?0:1)return DD(c,C(72));}return DD(c,C(21));}
function AQu(a,b){var c,d,e,f,g;c=b.cm;if(c&&b.bQ==65){c=Cb(a.c.f)-1|0;d=Fk(a.c.f,c);B0((Be(a)).bx,0,0);B0((Be(a)).bo,Cb(a.c.f)-1|0,d);return 1;}if(c&&b.bQ==80){Il(a.c);return 1;}if(!a.dv&&c&&b.bQ==90){if(C3(Be(a)))Fe(a);b=a.c.f;b.b0=b.b0+1|0;e=b.f2;d=e.k;if(!d)e=null;else{f=(Fi(e,d-1|0)).data;e=M6(b,f[0]);c=1;while(c<f.length){M6(b,f[c]);c=c+1|0;}}if(e!==null){Ck(a,e.a,e.b,0);DQ(a);}return 1;}if(!c&&!b.cR){if(BE(b.d3,C(73))){C8(a,C(74));CX(a,a.c.r-1|0,0);c=1;}else if(BE(b.d3,C(75))){C8(a,C(76));CX(a,a.c.r-
1|0,0);c=1;}else if(BE(b.d3,C(51))){C8(a,C(77));CX(a,a.c.r-1|0,0);c=1;}else if(BE(b.d3,C(78))){C8(a,C(79));CX(a,a.c.r-1|0,0);c=1;}else if(BE(b.d3,C(80))){C8(a,C(81));CX(a,a.c.r-1|0,0);c=1;}else if(!BE(b.d3,C(82)))c=0;else{C8(a,C(83));CX(a,a.c.r-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cR&&!b.cm)){d=b.bQ;if(d>=48&&d<=57){c=d-48|0;e=a.mv.data[c];if(e!==null)e.s();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bQ){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c
=1;}if(c)return 1;if(AAG(a,b))return 1;if(ABu(a,b))return 1;c=b.cm;if(c&&b.bQ==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bQ;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.cR&&!b.iO)return H(b.d3)>0&&C8(a,b.d3)?1:0;return 0;}return 0;}
function S1(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.c;c=Fh(a);d=Gq(a);if(b.eb!=3&&b.gd==3){e=UF(b.kW);f=new M1;f.qH=c;f.qG=d;g=new Qz;g.qg=f;while(!g.j9&&Uj(e,g)){}if(!g.j9&&BE(C(29),DT(b))){c=Z(0,c-100|0);d=Ba(Cb(b.f)-1|0,d+100|0);Bw(b.kW,Cg(c,d));h=By(3);i=h.data;i[0]=Ez(b.f,c);e=b.f;j=0;d=Ba(d+1|0,e.v.data.length);k=0;while(k<d){j=j+Fk(e,k)|0;if(k!=(e.v.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.tA=Ec();e=b.dj;l=new Vq;l.p3=b;i=P(B,3);m=i.data;m[0]=Df(b.f);m[1]=h;b=b.f.cx;g=Bz();Tk(b,b.cJ,g);h=
By(3*g.k|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bs(g,o);d=k+1|0;n[k]=b.bK;q=d+1|0;n[d]=b.bN;k=q+1|0;n[q]=b.eF;o=o+1|0;}m[2]=h;D9(e,l,C(84),i);}}}
function Xe(a){Il(a.c);}
function Rz(a){ACn(a.c);}
function Gt(a,b,c){var d,e,f,g,h,i;if(c&&a.dv)return 0;d=Dz(Be(a));e=d.D;if(C3(Be(a))){f=a.c.f;g=Be(a);h=VF(f,g);if(c)MQ(f,g,h);if(c){Ck(a,d.D,d.Q,0);Fe(a);DQ(a);}}else{h=Hi(EI(a.c.f.v.data[e]),C(54));i=Ba(Cb(a.c.f)-1|0,e);B0((Be(a)).bo,i,0);if(e>=(Cb(a.c.f)-1|0))B0((Be(a)).bo,i,Fk(a.c.f,i));else B0((Be(a)).bx,i+1|0,0);if(c)FZ(a);else Ck(a,e,0,0);}b.j(h);return 1;}
function ABu(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.dv)return 0;a:{switch(b.bQ){case 8:if(C3(Be(a))){FZ(a);c=1;}else{b=a.c;d=b.r;if(!d&&!b.o)c=1;else{if(d){e=b.o;c=d-1|0;ME(b.f,e,c);}else{e=b.o-1|0;c=Fk(b.f,e);b=a.c.f;KF(b,e);E9(b,e,Fk(b,e),1,C(54));}DQ(a);c=Ck(a,e,c,0);}}break a;case 9:if(!b.bC){if(!C3(Be(a)))C8(a,a.eC);else{f=Dz(Be(a));g=E$(Be(a));c=g.D;d=f.D;e=(c-d|0)+1|0;h=By(e);i=h.data;j=P(Bv,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.eC;d=d+1|0;e=l;}b=new Ll;m=a.c;Si(b,m.o,m.r);m=new TJ;m.sD
=a;Om(a,h,0,0,j,b,m);f.Q=f.Q+H(a.eC)|0;g.Q=g.Q+H(a.eC)|0;L1(a,a.c.r+H(a.eC)|0);DQ(a);}c=1;}else b:{if(!C3(Be(a))){b=a.c;f=BK(b.f,b.o);if(f.l.data.length>0){g=VW(a,f);if(g===null){c=1;break b;}m=a.c;n=m.f;e=m.o;b=Dp(e,m.r);n.b0=n.b0+1|0;o=n.f2;h=P(Gn,1);h.data[0]=APh(e,0,1,g,b.U,b.bb);Bw(o,h);JD(n,e,0,1,g);FW(f,0,H(g));L1(a,a.c.r-H(g)|0);}}else{b=Dz(Be(a));f=E$(Be(a));c=f.D;p=b.D;c=(c-p|0)+1|0;h=By(c);k=h.data;j=P(Bv,c);q=j.data;g=a.c;e=g.r;l=g.o;c=0;while(p<=f.D){g=BK(a.c.f,p);if(g.l.data.length>0){g=VW(a,g);if
(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=Ip(h,c);j=C2(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.D)b.Q=Z(0,b.Q-H(g)|0);if(p==f.D){f.Q=Z(0,f.Q-H(g)|0);L1(a,a.c.r-H(g)|0);}d=d+1|0;}b=Dp(l,e);f=new Td;f.qR=a;Om(a,h,0,1,j,b,f);}DQ(a);c=1;}break a;case 13:if(C3(Be(a)))FZ(a);b=a.c;D_(BK(b.f,b.o));b=a.c;ACU(b.f,b.o,b.r);DQ(a);c=Ck(a,a.c.o+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ADQ(a);}return c;}
function AAG(a,b){var c,d,e,f;a:{switch(b.bQ){case 33:c=b.cm?GZ(a,H7(a.V,a.z),b.bC):Hg(a,2-VL(Cz(a),a.z)|0,0,b.cR,b.bC);break a;case 34:c=!b.cm?Hg(a,VL(Cz(a),a.z)-2|0,0,b.cR,b.bC):GZ(a,((a.V+Cz(a)|0)/a.z|0)-1|0,b.bC);break a;case 35:if(!Hq(a,b.bC)&&!CX(a,(E6(a)).B,b.bC)){c=0;break a;}c=1;break a;case 36:if(!Hq(a,b.bC)&&!CX(a,0,b.bC)){c=0;break a;}c=1;break a;case 37:c=b.cm;if(c&&b.cR){Ie(a);d=a.c.gb;e=d.c_;if(e<=0)d=null;else{f=d.et.data;c=e-1|0;d.c_=c;d=f[c];}if(d===null)c=1;else{Ck(a,Lj(d),Ja(d),0);Hv(Be(a),
d.jN);c=1;}break a;}c=R4(a,(-1),c,b.bC);break a;case 38:c=Hg(a,(-1),b.cm,b.cR,b.bC);break a;case 39:c=b.cm;if(c&&b.cR){d=a.c.gb;e=d.c_;if(e==(d.eo-1|0))d=null;else{f=d.et.data;c=e+1|0;d.c_=c;d=f[c];}if(d===null)c=1;else{Ck(a,Lj(d),Ja(d),0);Hv(Be(a),d.jN);c=1;}break a;}c=R4(a,1,c,b.bC);break a;case 40:c=Hg(a,1,b.cm,b.cR,b.bC);break a;default:}c=0;}if(c&&b.bC){b=(Be(a)).bo;d=a.c;B0(b,d.o,d.r);}if(c)Ku(a.c);return c;}
function Ie(a){var b,c,d,e,f,g,h;b=a.c;c=b.gb;d=c.c_;c=d<0?null:c.et.data[d];if(c!==null&&b.o==Lj(c)&&a.c.r==Ja(c))return;c=a.c;e=c.gb;b=new Kq;d=c.o;f=c.r;c=Be(a);b.k_=Dp(d,f);g=AGK(c);b.jN=g;g.c0=0;f=e.c_;h=e.eo;if(f==(h-1|0))Ve(e,b);else{d=f+1|0;while(d<h){RK(e);d=d+1|0;}Ve(e,b);}e.c_=e.c_+1|0;}
function DQ(a){a.c.f.s0=Nv(Fp(a));}
function Gh(a,b){var c,d,e,f,g,h;a.jK=null;KY(a.cH,null);LZ(a.c);c=a.c;a.c=b;P7(c,null,null);P7(b,a,Fp(a));d=(Cf(a.cv.l6)).data;e=d.length;f=0;while(f<e){g=d[f].sn;h=AMS(J$(c.c9),J$(b.c9));g.f(h);f=f+1|0;}a.V=GV(b.hQ*a.z);}
function Kw(a,b){var c;c=Lc(a.c.f,b);if(c===null)return C(3);return c.q;}
function Do(a,b){return EU(b,a.R,a.ci);}
function Jj(a,b){var c,d,e,f,g;a.c.qv=b;if(b===null){Ct(FJ(),C(85));KY(a.cH,null);}else{b=b.data;c=DX(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.fH<<24>>24;e=e+1|0;}KY(a.cH,c);}}
function Sc(a,b){a.c.mT=b;}
function CE(a){return a.c.qv;}
function Be(a){return a.c.oW;}
function U0(a){var b;b=a.kr;if(b!==null)b.j(a);}
var ACE=F();
function ADr(){var a=this;B.call(a);a.fS=null;a.g2=null;a.e3=0;}
function Cx(a){var b=new ADr();AI8(b,a);return b;}
function AI8(a,b){a.fS=b;}
function BZ(a,b){var c,d,e;c=a.e3;d=a.fS;if(c==d.data.length)a.fS=C2(d,c+4|0);d=a.fS.data;e=a.e3;a.e3=e+1|0;d[e]=b;a.g2=null;}
function Fd(a,b){var c;BZ(a,b);c=new UT;c.sI=a;c.sJ=b;return c;}
function Cf(a){var b;b=a.g2;if(!(b!==null&&b.data.length==a.e3))a.g2=C2(a.fS,a.e3);return a.g2;}
var AC3=F();
function BJ(b,c){if(b===c)return 1;return b!==null?b.bu(c):c!==null?0:1;}
function BM(b){if(b!==null)return b;b=new Gb;Bp(b,C(3));L(b);}
function Vc(){B.call(this);this.mK=null;}
function AJJ(a){var b,c,d,e,f,g;b=a.mK;c=b.sI;b=b.sJ;d=0;while(true){e=c.fS.data;f=e.length;if(d>=f)break;if(e[d]===b){while(true){g=d+1|0;if(g>=f)break;e[d]=e[g];d=g;}e[d]=null;c.e3=c.e3-1|0;c.g2=null;}d=d+1|0;}}
var Vi=F(0);
var AAR=F();
function AIV(a,b){return a.Bx(b);}
function AK5(a){return a.Hg();}
function Hp(){var a=this;B.call(a);a.rB=null;a.qx=null;}
function ABG(b,c){return c!==null&&b!==null&&!BE(c,b)?0:1;}
var SR=F(0);
function MN(){B.call(this);this.uE=null;}
var QI=F(0);
var OM=F(0);
function ABc(){var a=this;B.call(a);a.sy=null;a.mB=null;a.ng=null;a.dA=null;a.l_=null;a.jT=null;a.ha=null;a.e7=null;a.iq=0;a.kX=0;a.r2=null;a.d8=null;a.jh=null;}
function AOL(a,b,c,d){var e=new ABc();AFc(e,a,b,c,d);return e;}
function AFc(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new U_;f.pE=a;a.sy=f;f=new U9;f.v4=a;a.mB=f;g=new U$;g.sp=a;a.l_=new $rt_globals.ResizeObserver(Bm(g,"f"));f=new U8;f.oX=a;a.jT=f;a.iq=1;h=new St;h.jF=new Uc;f=new O8;f.ys=null;f.ju=AUR;h.qh=f;BM(f);g=new Sx;g.sP=f;h.vV=g;h.gi=e;i=e.length;j=0;while(j<i){f=e[j];k=new Sy;k.rA=h;k.rz=j;g=Bm(k,"f");f.onmessage=g;f=e[j];g=AAL();f.postMessage(g);j=j+1|0;}h.gO=0;h.kR=By(i);h.kp=By(i);a.jh=h;a.ng=(Fc()).getElementById($rt_ustr(d));e=YG();d=0;e.tabIndex=d;g=e.style;g.setProperty("width",
"100%");g.setProperty("height","100%");g.setProperty("outline","none");a.dA=e;a.ng.appendChild(e);d=a.dA;f=AMB(!!0,!!0,!!1,!!1);d=d.getContext("webgl2",f);if(d===null)c.s();else{c=new Px;e=a.dA;g=a.mB;c.dx=null;c.gY=e;c.b_=AS8(g);g=$rt_globals.window;l=P(CU,14);m=l.data;f=new V3;f.nR=c;m[0]=CG(c,e,C(86),f);k=new V4;k.s$=c;m[1]=CG(c,e,C(87),k);k=new V5;k.pr=c;m[2]=CG(c,e,C(88),k);k=new V6;k.v1=c;m[3]=CG(c,e,C(89),k);m[4]=CG(c,e,C(90),ASW(c));m[5]=CG(c,e,C(91),ATs(c));m[6]=CG(c,e,C(92),ARQ(c));m[7]=CG(c,e,C(93),
ARW(c));m[8]=CG(c,e,C(94),ATz(c));m[9]=CG(c,e,C(95),ASM(c));m[10]=CG(c,e,C(96),ARC(c));m[11]=ABP(c,g,C(97),ASi(c),1);m[12]=CG(c,g,C(98),ATJ(c));m[13]=CG(c,g,C(99),ASA(c));c.lc=AQq(l);Z_(c,e);a.ha=c;a.e7=ASr(d,a.mB);AOF(a.l_,a.dA);e=$rt_globals.window;d=a.jT;e.addEventListener("resize",Bm(d,"handleEvent"));a.d8=b.gp(Z2(a));S8(a);}}
function UL(a){a.dA.focus();}
function Z2(a){var b,c,d;b=new Mf;c=a.e7;d=a.ha.b_;b.jJ=c;b.bj=d;b.i0=a;return b;}
function S8(a){a.kX=$rt_globals.requestAnimationFrame(Bm(a.sy,"onAnimationFrame"));}
function G5(a){a.iq=1;}
function S6(a,b,c){var d,e;a.ha.dx=Cg(b,c);d=a.dA;e=b;d.width=e;d=a.dA;e=c;d.height=e;d=a.e7;Bg(d.dl,b,c);e=d.bf;d=d.dl;b=d.a;c=d.b;e.viewport(0,0,b,c);a.d8.iW(a.e7.dl,J3(a));a.d8.e9();}
function Nv(a){return $rt_globals.performance.now()/1000.0;}
function J3(a){return $rt_globals.window.devicePixelRatio;}
function VU(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADz(b,0);else{c=new WZ;d=$rt_globals.window.showOpenFilePicker();e=new WY;e.qF=b;e.qE=c;d.then(Bm(e,"f"),Bm(c,"f"));}}
function D9(a,b,c,d){var e,f,g,h;e=a.jh;f=e.gO;if(f>0){g=e.kR.data;f=f-1|0;e.gO=f;KQ(e,b,c,d,g[f]);}else{h=e.jF;e=new Wg;e.tw=b;e.uk=c;e.tb=d;b=new TS;b.oy=e;c=h.jE;b.t8=c;if(c===null)h.kH=b;else c.td=b;h.jE=b;h.bO=h.bO+1|0;h.hO=h.hO+1|0;}}
function Lu(a,b,c,d,e){var f,g;f=a.jh;if(c>=f.gi.length)c=0;g=f.kp.data;g[c]=g[c]+1|0;KQ(f,b,d,e,c);}
function AD1(b){var c;c=new WL;c.n_=b;return c;}
var Xj=F(0);
var AUZ=null;function ATh(){ATh=Bn(Xj);ANk();}
function ANk(){AUZ=new $rt_globals.TextDecoder("utf-16");}
function Lm(){B.call(this);this.kJ=null;}
function FX(){var a=this;Lm.call(a);a.nQ=null;a.be=null;}
function Vv(a,b){var c,d,e;a.kJ=b;a.nQ=Jq(0,0,64,255,new B5);c=new T3;c.cK=new Bj;c.kj=Cx(P(If,0));c.dk=new Bj;c.uC=new Bj;c.wy=new B5;c.wz=new B5;d=b.jJ;c.cS=d;e=b.i0;c.fz=e;c.ca=d.ls;d=new RR;d.u1=e;c.df=d;d=b.bj.kd;e=new Qg;e.sc=c;BZ(d,e);d=b.bj.mt;e=new Qe;e.vW=c;BZ(d,e);a.be=c;BZ(b.bj.eq,new R7);b=b.bj.eq;c=a.be;BM(c);d=new R6;d.oA=c;BZ(b,d);}
function TI(a){var b,c,d,e,f,g,h;b=a.kJ.jJ;c=a.nQ;d=b.bf;e=c.bq;f=c.bI;g=c.ba;h=c.bZ;d.clearColor(e,f,g,h);b.bf.clear(16384);}
function SL(a,b,c){var d,e,f,g;a:{d=a.be;Cw(d.cK,b);if(d.b1!==c){d.b1=c;e=(Cf(d.kj)).data;f=e.length;g=0;while(true){if(g>=f)break a;b=e[g];b.i8=Ik(b.cI,b.iL);d=BO(b.ce);while(BP(d)){P4(BS(d),b.i8,b.cI);}g=g+1|0;}}}}
var OK=F(0);
var Ju=F(0);
function LS(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HG;c=new H5;d=new Ig;ACY();Jl(d,AU3);LX(c,d,BG(AU4),BG(AU5),BG(AU6),BG(AU4),BG(AU7),BG(AU8),BG(AU9),BG(AU$),BG(AU_),BG(AVa));ZP();e=(AVb.go()).data;f=e.length;g=P(Io,f);h=g.data;i=0;while(i<f){h[i]=e[i].lV;i=i+1|0;}j=ABT(O(C(100)),O(C(101)),O(C(102)),O(C(103)));k=new HK;l=new HX;ALx();m=AVc;L3(l,m,AVd,AVe,AVf,AVg,m);K3(k,l,ADt(),ADC(O(C(104)),O(C(105)),O(C(106))),ADt(),XY(1,0.125),AVh,AVi);Ix(b,c,g,j,k,Yg(O(C(107)),O(C(108)),O(C(109)),O(C(110))));a.ix(b);}
function FS(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HG;c=new H5;d=new Ig;AHZ();Jl(d,AVj);LX(c,d,BG(AVk),BG(AVl),BG(AVm),BG(AVk),BG(AVn),BG(AVo),BG(AVp),BG(AVq),BG(AVr),BG(AVs));UJ();e=(AVt.go()).data;f=e.length;g=P(Io,f);h=g.data;i=0;while(i<f){h[i]=e[i].hN;i=i+1|0;}j=ABT(O(C(111)),O(C(112)),O(C(113)),O(C(114)));k=new HK;l=new HX;AEJ();m=AVu;L3(l,m,AVv,AVw,AVx,AVy,m);K3(k,l,ACT(),ADC(O(C(115)),O(C(105)),O(C(106))),ACT(),XY(1,0.17499999701976776),AVz,AVA);Ix(b,c,g,j,k,Yg(O(C(107)),O(C(108)),O(C(109)),O(C(116))));a.ix(b);}
function J4(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HG;c=new H5;d=new Ig;ACH();Jl(d,AVB);LX(c,d,BG(AVC),BG(AVD),BG(AVE),BG(AVC),BG(AVF),BG(AVG),BG(AVH),BG(AVI),BG(AVJ),BG(AVK));ABO();e=(AVL.go()).data;f=e.length;g=P(Io,f);h=g.data;i=0;while(i<f){h[i]=e[i].k2;i=i+1|0;}j=ABT(O(C(117)),O(C(118)),O(C(119)),O(C(120)));k=new HK;l=new HX;AEY();m=AVM;L3(l,m,AVN,AVO,AVP,AVQ,m);K3(k,l,ADm(),ADC(O(C(121)),O(C(122)),HB(0)),ADm(),XY(1,0.07500000298023224),AVR,AVS);Ix(b,c,g,j,k,Yg(O(C(123)),O(C(124)),O(C(125)),O(C(126))));a.ix(b);}
var K7=F(0);
function Mp(){var a=this;FX.call(a);a.cr=null;a.fa=null;}
function AJk(a,b){if(Wn(a.be,b)){Ry(a.fa);J8(a.cr,b);}}
function AO9(a,b){return KC(a.cr,b);}
function AIW(a){TI(a);Iv(a.cr);Xz(a.fa);}
function AEj(a,b,c){SL(a,b,c);II(a.cr,new Bj,b,c);}
function AHp(a,b){BM(b);MI(a.fa,b);Jz(a.cr,b);}
var Kj=F(0);
function OL(){B.call(this);this.rP=null;}
function ANg(a,b,c,d,e,f){var g,h,i,j;g=a.rP;h=E5(b);i=Hz(d,c);j=JE();g=g.provideDeclaration(h,i,j);b=new Mj;b.uh=e;b.ug=f;LQ(g,b,f);}
var W9=F(0);
function WQ(){B.call(this);this.oM=null;}
var Fj=F(0);
function MC(){B.call(this);this.sn=null;}
function Wb(){B.call(this);this.uc=null;}
function AG2(a,b,c,d,e,f){var g,h,i,j;g=a.uc;h=E5(b);i=Hz(d,c);j=JE();g=g.provideDefinition(h,i,j);b=new QW;b.s4=e;b.s3=f;LQ(g,b,f);}
function Ll(){var a=this;B.call(a);a.U=0;a.bb=0;}
function Dp(a,b){var c=new Ll();Si(c,a,b);return c;}
function Si(a,b,c){a.U=b;a.bb=c;}
function AEF(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return a.U==c.U&&a.bb==c.bb?1:0;}return 0;}
function ANU(a){var b,c,d,e;b=P(B,2).data;b[0]=Cs(a.U);b[1]=Cs(a.bb);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bd)|0;d=d+1|0;}return c;}
function ANq(a,b){var c;b=b;c=BD(a.U,b.U);if(!c)c=BD(a.bb,b.bb);return c;}
var F_=F(0);
var HA=F(0);
var D5=F(0);
var G9=F(0);
function Oh(){var a=this;FX.call(a);a.x=null;a.w=null;a.dD=null;a.gL=0;a.fs=null;a.im=null;a.vY=null;}
function XM(a,b){var c,d,e,f,g;if(a.x===b)a.gL=a.gL|1;if(a.w===b)a.gL=a.gL|2;if((a.gL&3)==3){Ct(FJ(),C(127));b=a.x.c;c=a.w.c;d=Df(b.f);e=Df(c.f);f=Zd(b.f);g=Zd(c.f);b=a.kJ.i0;c=new P6;c.rh=a;D9(b,c,C(128),G(B,[d,f,e,g]));}}
function AQi(a,b,c){if(DI(a.be,a.x))return Gt(a.x,b,c);if(!DI(a.be,a.w))return 0;return Gt(a.w,b,c);}
function Xu(a,b){var c;c=new S4;c.ql=b;return c;}
function Vh(a,b,c){var d,e,f,g,h,i,j;d=a.fs;if(d!==null&&d.fA!==null){e=b!==a.x?0:1;f=Fh(b);g=(Gq(b)+f|0)/2|0;h=g-f|0;d=a.fs;d=d.fA.data[FF(d,g,e)];i=g-(!e?d.hp:d.hq)|0;j=b.V-T(f,b.z)|0;e=KM(T(((!e?d.hq:d.hp)+i|0)-h|0,c.z)+j|0,FL(c));c.V=e;c.c.hQ=e/c.z;return;}}
function ANV(a,b){var c,d;c=KC(a.x,b);d=KC(a.w,b);return !c&&!d?0:1;}
function AK_(a){TI(a);Iv(a.x);Iv(a.w);ADO(a.im,a.fs,a.be,a.x,a.w,a.vY,a.dD.fF);Xz(a.dD);}
function Rl(a){return ADM(0);}
function AOw(a){Ns(a.x);Ns(a.w);}
function AK1(a){Xx(a.x);Xx(a.w);}
function APv(a,b){Og(a.x,b);Og(a.w,b);}
function AMn(a,b){Mh(a.be,b);}
function AGO(a,b){if(Wn(a.be,b)){Ry(a.dD);J8(a.x,b);J8(a.w,b);}}
function AKq(a,b,c){var d,e,f,g,h,i;SL(a,b,c);d=new Bj;e=Cn(20.0,c);f=new Bj;g=b.a/2|0;h=e/2|0;ZG(f,g-h|0,b.b);II(a.x,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;II(a.w,d,f,c);Bg(a.im.cX,f.a,d.b);Bg(a.im.en,d.a-f.a|0,f.b);}
function AEZ(a,b){BM(b);MI(a.dD,b);Jz(a.x,b);Jz(a.w,b);}
function AM1(a,b){var c,d;c=Do(a.x,b.n)&&NW(a.x,b)?1:0;d=Do(a.w,b.n)&&NW(a.w,b)?1:0;return !c&&!d?0:1;}
function AJo(a,b,c,d){var e,f;e=Do(a.x,b.n)&&MH(a.x,b,c,d)?1:0;f=Do(a.w,b.n)&&MH(a.w,b,c,d)?1:0;return !e&&!f?0:1;}
function ALo(a,b,c){var d,e,f,g,h,i,j,k;d=Do(a.x,b.n);e=Do(a.w,b.n);f=a.be;g=f.d0;h=g!==null?0:1;i=a.x;j=g!==i?0:1;k=g!==a.w?0:1;if(d&&!(!h&&!k))Fn(f,i);if(e&&!(!h&&!j))Fn(a.be,a.w);if(d){i=My(a.x,b,c);if(i!==null)return i;}return !e?null:My(a.w,b,c);}
function ANN(a,b,c){var d,e,f,g;d=Do(a.x,b.n);e=Do(a.w,b.n);f=d&&S$(a.x,b,c)?1:0;g=e&&S$(a.w,b,c)?1:0;return !f&&!g?0:1;}
function ANf(a,b,c,d){var e,f,g,h;e=Do(a.x,b.n);f=Do(a.w,b.n);g=e&&Jh(a.x,c,d)?1:0;h=f&&Jh(a.w,c,d)?1:0;return !g&&!h?0:1;}
function AKf(a){return DI(a.be,a.x)?Xu(a,a.x):!DI(a.be,a.w)?null:Xu(a,a.w);}
var ZY=F();
var Zn=F();
var BY=F(0);
function Pz(){var a=this;B.call(a);a.oc=null;a.od=null;}
function AKI(a,b){var c,d,e;c=a.oc;d=a.od;e=new Pw;e.g1=AOL(new XT,new XU,Ce(d.containerId),b);e.bw=(Nu(e)).cr;if(ABN(d))QK(e,d.theme);if(ZC(d))Ut(e,d.readonly);c.f(e);}
var ACi=F(0);
function ABN(b){return "theme" in b?1:0;}
function ZC(b){return "readonly" in b?1:0;}
function ABK(b){return !("workerUrl" in b?1:0)?"worker.js":b.workerUrl;}
function Yf(b){return !("numThreads" in b?1:0)?2:b.numThreads|0;}
var AAY=F();
function Zi(b,c,d,e){var f,g,h,i,j;f=new $rt_globals.Array();g=0;while(g<e){h=new $rt_globals.Worker(d);i=new NJ;i.pY=h;i.pZ=f;i.p0=e;i.p1=b;i.pU=c;j=Bm(i,"f");h.onmessage=j;g=g+1|0;}}
function QS(){var a=this;B.call(a);a.u9=null;a.u$=null;}
function AH2(a,b){var c,d,e,f;c=a.u9;d=a.u$;e=new VH;f=AOL(new UN,new UO,Ce(d.containerId),b);e.qa=f;e.dg=f.d8;if(ABN(d))PK(e,d.theme);if(ZC(d))Qa(e,d.readonly);c.f(e);}
function NJ(){var a=this;B.call(a);a.pY=null;a.pZ=null;a.p0=0;a.p1=null;a.pU=null;}
function ANi(a,b){var c,d,e,f,g;c=a.pY;d=a.pZ;e=a.p0;f=a.p1;g=a.pU;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var Y=F(0);
function XQ(){B.call(this);this.s2=null;}
function AI_(a,b){var c,d,e,f,g;c=b.data;b=a.s2;d=c.length;e=P(Bv,d).data;f=0;while(f<d){e[f]=c[f].cP();f=f+1|0;}d=e.length;g=new $rt_globals.Array(d);f=0;while(f<d){c=$rt_ustr(e[f]);f;g[f]=c;f=f+1|0;}b.f(g);}
var ZL=F();
function AAL(){return "ping";}
function ADS(b){return b===AAL()?1:0;}
var XT=F();
function AJV(a,b){var c,d,e,f,g;c=new Mp;Vv(c,b);d=AOJ(c.be);c.fa=d;e=AAi(c.be,d);c.cr=e;NU(c.be,e);BZ(b.bj.dZ,c.fa);BZ(b.bj.f3,c.fa);BZ(b.bj.dZ,c.cr);d=b.bj.eq;e=new PG;e.xc=c;BZ(d,e);d=b.bj.eq;e=new JV;f=c.cr;BM(f);g=new PE;g.vp=f;MO(e,b,g);BZ(d,e);d=b.bj.jj;e=c.cr;BM(e);f=new PF;f.pc=e;BZ(d,f);d=b.bj.iD;e=new NX;e.qd=c;BZ(d,e);d=b.bj.f3;e=new NY;e.wb=c;BZ(d,e);b=b.bj.is;d=new NV;d.nz=c;BZ(b,d);FS(c);return c;}
var Bk=F(0);
var XU=F();
function AII(a){ABo();}
var UN=F();
function AND(a,b){var c,d,e,f;c=new Oh;Vv(c,b);d=new Qf;d.cX=new Bj;d.en=new Bj;d.h4=new Bj;d.h5=new Bj;d.h1=new Bj;d.h2=new Bj;c.im=d;c.vY=AA7();d=AOJ(c.be);c.dD=d;c.x=AAi(c.be,d);c.w=AAi(c.be,c.dD);d=c.x;d.bz=1;e=new Uz;e.vh=c;f=new UA;f.rc=c;V0(d,e,e);V0(c.w,f,f);d=c.x;e=new UB;e.nv=c;d.kr=e;e=c.w;f=new Uv;f.um=c;e.kr=f;Sc(d,0);Sc(c.w,0);NU(c.be,c.x);BZ(b.bj.dZ,c.dD);BZ(b.bj.f3,c.dD);BZ(b.bj.f3,c);BZ(b.bj.dZ,c);d=b.bj.eq;e=new Uw;e.xz=c;BZ(d,e);d=b.bj.eq;e=new JV;f=new Ux;f.m4=c;MO(e,b,f);BZ(d,e);BZ(b.bj.jj,
c);BZ(b.bj.iD,c);b=b.bj.is;d=new Uy;d.sZ=c;BZ(b,d);FS(c);return c;}
var UO=F();
function ARc(a){ABo();}
var Rs=F(0);
function U_(){B.call(this);this.pE=null;}
function AJr(a,b){var c,d;c=b;b=a.pE;if(!(!b.d8.lI(c/1000.0)&&!b.iq)){d=b.e7.dl;if(T(d.a,d.b)){b.iq=0;b.d8.e9();}}S8(b);}
function U9(){B.call(this);this.v4=null;}
function C0(a){G5(a.v4);}
var Qo=F(0);
function U$(){B.call(this);this.sp=null;}
function AHw(a,b,c){var d,e,f,g;c=a.sp;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dA){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=J3(c);S6(c,GV(f.width*g),GV(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];S6(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AC8=F();
function AOF(b,c){ANK(b,c,AEB());}
function AEB(){return {box:'device-pixel-content-box'};}
function ANK(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cd=F(0);
function U8(){B.call(this);this.oX=null;}
function ANt(a,b){b=a.oX;b.d8.iW(b.e7.dl,J3(b));b.d8.e9();}
function St(){var a=this;B.call(a);a.jF=null;a.gi=null;a.qh=null;a.kR=null;a.kp=null;a.nK=0;a.gO=0;a.vV=null;}
function KQ(a,b,c,d,e){var f,g,h,i,j,k;d=d.data;f=a.nK+1|0;a.nK=f;g=a.qh;h=Cs(f);g.hC=LK(g,g.hC,h);h=Uq(g,h);Mg(h,b);Mg(h,b);g.jz=g.jz+1|0;b=a.gi[e];i=d.length;g=new $rt_globals.Array(i+2|0);h=f;0;g[0]=h;c=$rt_ustr(c);1;g[1]=c;h=new $rt_globals.Array();j=0;while(j<i){c=d[j];if(c instanceof Bv)k=$rt_ustr(c);else if(H8(c,$rt_arraycls($rt_bytecls())))k=c.data.buffer;else if(H8(c,$rt_arraycls($rt_charcls())))k=c.data.buffer;else if(H8(c,$rt_arraycls($rt_intcls())))k=c.data.buffer;else{if(!(c instanceof Kx)){b=new BF;c
=BA(c);if(c.kl===null)c.kl=$rt_str(c.fG.$meta.name);h=c.kl;c=new R;U(c);K(K(c,C(129)),h);Bp(b,S(c));L(b);}c=c;k=c.hP;if(k===null)k=c.fM;}f=j+2|0;f;g[f]=k;if(k instanceof $rt_globals.ArrayBuffer?1:0)h.push(k);j=j+1|0;}b.postMessage(g,h);}
var LF=F(Em);
var Mm=F(0);
var Xa=F(0);
function Uc(){var a=this;LF.call(a);a.kH=null;a.jE=null;a.hO=0;}
var W8=F(0);
var MU=F(0);
function O8(){var a=this;DB.call(a);a.hC=null;a.ju=null;a.ys=null;a.jz=0;}
function ADn(a,b){var c;c=Uq(a,b);if(c===null)return null;a.hC=JC(a,a.hC,b);a.jz=a.jz+1|0;return c.iu;}
function Uq(a,b){var c,d;c=a.hC;while(true){if(c===null)return null;d=I3(a.ju,b,c.iT);if(!d)break;c=d>=0?c.bV:c.bE;}return c;}
function LK(a,b,c){var d,e;if(b===null){b=new IY;d=null;b.iT=c;b.iu=d;b.fg=1;b.fr=1;return b;}e=I3(a.ju,c,b.iT);if(!e)return b;if(e>=0)b.bV=LK(a,b.bV,c);else b.bE=LK(a,b.bE,c);D7(b);return Jf(b);}
function JC(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=I3(a.ju,c,b.iT);if(d<0)b.bE=JC(a,b.bE,c);else if(d>0)b.bV=JC(a,b.bV,c);else{e=b.bV;if(e===null)return b.bE;f=b.bE;g=P(IY,e.fg).data;h=0;while(true){b=e.bE;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bV;while(h>0){h=h+(-1)|0;j=g[h];j.bE=b;D7(j);b=Jf(j);}e.bV=b;e.bE=f;D7(e);b=e;}D7(b);return Jf(b);}
function Sx(){B.call(this);this.sP=null;}
function Sy(){var a=this;B.call(a);a.rA=null;a.rz=0;}
function AEy(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.rA;d=a.rz;ADS(b.data);e=c.kp.data;f=e[d];if(f>0)e[d]=f-1|0;else{g=c.jF;h=g.kH;if(h===null)i=null;else{i=h.td;g.kH=i;if(i!==null)i.t8=null;else g.jE=null;g.hO=g.hO-1|0;g.bO=g.bO+1|0;i=h.oy;}if(i!==null)KQ(c,i.tw,i.uk,i.tb,d);else{e=c.kR.data;j=c.gO;c.gO=j+1|0;e[j]=d;}}c=c.vV;b=b.data;if(!ADS(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BF;X(b);L(b);}if(b.length<1){b=new BF;AB7(b);L(b);}g=Cs(b[0]);h=ADn(c.sP,g);e=P(B,b.length-1|0);k=e.data;f=0;j=k.length;while
(f<j){l=f+1|0;g=b[l];k[f]=(typeof g==='string'?1:0)?Ce(JG(g)):(g instanceof $rt_globals.ArrayBuffer?1:0)?ASh(JG(g)):(g instanceof $rt_globals.File?1:0)?ABy(null,JG(g)):!(g instanceof $rt_globals.FileSystemFileHandle?1:0)?null:ABy(JG(g),null);f=l;}h.j(e);}}
function Px(){var a=this;B.call(a);a.b_=null;a.gY=null;a.lc=null;a.dx=null;}
function MR(){return (Fc()).activeElement;}
function CG(a,b,c,d){b.addEventListener($rt_ustr(c),Bm(d,"handleEvent"));return Wo(a,b,c,d);}
function ABP(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bm(d,"handleEvent"),!!e);return Wo(a,b,c,d);}
function Wo(a,b,c,d){var e;e=new Ql;e.oq=b;e.os=c;e.or=d;return e;}
function Tx(a,b){var c;c=new Us;c.v0=b;return c;}
function Ep(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gY.getBoundingClientRect();e=Cg(GV((b.clientX-d.left)*c),GV((b.clientY-d.top)*c));f=new Bj;g=a.dx;f.a=g.a;f.b=g.b;d=new Mc;TX(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.n=e;d.wE=f;return d;}
function XC(a,b,c){var d,e,f,g;d=new O2;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;TX(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j1=0;d.d3=e;d.bQ=f;d.tX=c;d.xR=g;return d;}
function Dr(a,b){b.stopPropagation();b.preventDefault();}
function Z_(a,b){var c;c=new W6;c.qm=b;b.onpointerdown=Bm(c,"f");c=new W7;c.o3=b;b.onpointerup=Bm(c,"f");}
function KG(){var a=this;B.call(a);a.rZ=null;a.cY=null;a.bf=null;a.ls=0;a.t6=null;a.xi=0;a.x_=0;a.jB=null;a.yF=null;a.yp=null;a.ye=null;a.t1=null;a.nT=null;a.yf=null;a.gx=null;a.hv=null;a.yx=null;a.ip=null;a.dl=null;a.vJ=null;a.lB=0;a.jV=0;a.me=0;a.lZ=0;a.h$=0;a.mb=null;a.mm=0.0;a.lJ=0.0;}
function ACM(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.dl=new Bj;a.lB=0;a.mb=new V9;a.rZ=c;a.ls=d;g=$rt_str(b.getParameter(7938));h=new R;U(h);K(K(h,C(130)),g);$rt_globals.console.info($rt_ustr(S(h)));a.bf=b;a.cY=Nm(c,4,4,1);i=AEr(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B1(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Qm;G7();c=AVT;m.dL=b;m.gh=c;m.lx=j.length/c.kF|0;m.mn
=l.length;n=b.createBuffer();m.hL=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.jt=null;n=b.createBuffer();m.ji=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.ip=m;a.x_=J0(g,C(131));c=new Qn;c.dO=b;a.t6=c;a.mm=e;a.lJ=f;d=b.getParameter(3379);a.xi=d;c=new R;U(c);Bl(K(c,C(132)),d);$rt_globals.console.info($rt_ustr(S(c)));k=P(CI,9);i=k.data;c=ASs(b);a.jB=c;i[0]=c;c=ART(b,C(133));a.yF=c;i[1]=c;c=new Q5;Gx(c,
b,C(134),C(135),AVT);a.yp=c;i[2]=c;c=ATl(b);a.ye=c;i[3]=c;c=new N2;Xk(c,b,C(136),C(137));a.t1=c;i[4]=c;c=ATC(b);a.nT=c;i[5]=c;c=ATu(b);a.yf=c;i[6]=c;c=ATf(b);a.gx=c;i[7]=c;c=ATg(b);a.hv=c;i[8]=c;a.yx=k;ADy(b,C(138));}
function E8(a,b,c,d){return Nm(a.rZ,b,c,d);}
function Dg(a,b){var c;if(b==a.jV)return b;if(!b)a.bf.disable(3042);else{a.bf.enable(3042);a.bf.blendFuncSeparate(770,771,1,1);}c=a.jV;a.jV=b;return c;}
function RO(a,b,c){UD(a,b.a,b.b,c);}
function UD(a,b,c,d){var e,f;e=d.a;f=d.b;a.lZ=1;a.h$=1;d=a.mb;d.r_=b;d.sb=c;d.r$=e;d.r9=f;TY(a);}
function Le(a){a.lZ=0;a.h$=0;TY(a);}
function TY(a){var b,c,d,e,f,g;b=a.me;c=a.lZ;if(b!=c){a.me=c;if(!c)a.bf.disable(3089);else a.bf.enable(3089);}if(a.me&&a.h$){a.h$=0;d=a.bf;e=a.mb;b=e.r_;c=a.dl.b-e.sb|0;f=e.r9;c=c-f|0;g=e.r$;d.scissor(b,c,g,f);}}
function HJ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.ip;c=a.lB;d=b.gh.tk;e=b.dL;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dL;h=b.hL;e.bindBuffer(34962,h);i=b.gh.mG.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dL;m=k.g6;n=k.e2;o=b.gh.kF*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.e2|0;j=j+1|0;}a:{e=b.jt;if(e!==null){c=0;b.dL.bindBuffer(34962,e);i=b.gh.rX.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dL;j=e.g6;p=e.e2;m=e.pQ;n=b.gh.qe;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.e2|0;g=g+1|0;}}}q=b.ji;if(q===null){c=b.lx;if(c>0)b.dL.drawArrays(4,0,c);}else{b.dL.bindBuffer(34963,q);k=b.dL;g=b.mn;k.drawElements(4,g,5123,0);}a.lB=d;}
function BB(a,b,c,d,e){HP(a,a.jB);Is(a.jB,a.bf,b,c,d,a.dl);d=a.jB;Gd(a.bf,d.u5,e);HJ(a);}
function AC$(a,b,c,d,e,f,g,h){var i,j;HP(a,a.hv);Is(a.hv,a.bf,b,c,d,a.dl);d=a.hv;i=a.bf;j=d.sE;i.uniform2f(j,e,f);Gd(i,d.pG,g);d=a.hv;Gd(a.bf,d.nm,h);HJ(a);}
function EE(a,b,c,d,e,f,g,h,i){var j;j=!i?a.t1:a.nT;HP(a,j);ADq(j,a.bf,!i?a.lJ:a.mm);Is(j,a.bf,b,c,d,a.dl);ABY(j,a.bf,f);Yb(j,a.bf,f,e);ABt(j,a.bf,g,h);HJ(a);}
function GT(a){var b,c;b=new IX;c=a.t6;b.fj=new Bj;b.er=c;b.eS=c.dO.createTexture();AVU=AVU+1|0;return b;}
function HP(a,b){var c,d;if(b!==a.vJ){c=a.bf;d=b.bt;c.useProgram(d);a.vJ=b;}}
function ACF(){var a=this;KG.call(a);a.xO=null;a.yq=null;}
function ASr(a,b){var c=new ACF();AJL(c,a,b);return c;}
function AJL(a,b,c){ACM(a,b,new T0,1,2.25,0.625);a.yq=new TZ;a.xO=c;}
function Gs(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;a:{f=a.cY;switch(e){case 1:break;case 2:g='italic ';break a;default:g='';break a;}g='oblique ';}h=g+d+' '+c+'px '+$rt_ustr(b);MY(f,h);g=f.de.measureText("W");i=g.fontBoundingBoxAscent;j=g.fontBoundingBoxDescent;k=g.width;l=GA(f,C(64));m=GA(f,C(139));g=new Ky;f=h;g.mk=b;g.w3=c;n=c|0;if(n!==c){b=new R;U(b);QV(K(b,C(140)),c);$rt_globals.console.info($rt_ustr(S(b)));}g.pI=n;g.w_=d;g.xw=e;g.eh=i;g.dT=j;g.w1=l;g.l8=k;g.nw=f;g.rR=DE(i);g.yh=DE(g.dT);d=m*32.0|0;n=l*32.0
|0;o=k*32.0|0;d=n==d&&n==o?1:0;b:{g.w7=d;switch(e){case 1:break;case 2:b=C(141);break b;default:b=C(142);break b;}b=C(143);}g.wU=b;return g;}
function ZR(){var a=this;B.call(a);a.eq=null;a.wm=null;a.dZ=null;a.f3=null;a.is=null;a.jj=null;a.iD=null;a.mt=null;a.kd=null;a.cU=null;a.hf=null;a.oU=0;}
function AS8(a){var b=new ZR();AM0(b,a);return b;}
function AM0(a,b){a.eq=Cx(P(D$,0));a.wm=Cx(P(D$,0));a.dZ=Cx(P(ES,0));a.f3=Cx(P(F_,0));a.is=Cx(P(It,0));a.jj=Cx(P(HA,0));a.iD=Cx(P(G9,0));a.mt=Cx(P(Bk,0));a.kd=Cx(P(Bk,0));a.cU=b;}
function TE(a,b){var c,d,e,f;C0(a.cU);c=(Cf(!b.tX?a.wm:a.eq)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].co(b);if(f)break;if(b.j1)break;e=e+1|0;}return f;}
function Q6(a,b,c){var d,e,f;C0(a.cU);d=(Cf(a.jj)).data;e=d.length;f=0;while(f<e){if(d[f].ml(b,c))return 1;f=f+1|0;}return 0;}
function V3(){B.call(this);this.nR=null;}
function AMY(a,b){var c;c=a.nR;if(TE(c.b_,XC(c,b,1)))Dr(c,b);}
function V4(){B.call(this);this.s$=null;}
function AM_(a,b){var c;c=a.s$;if(TE(c.b_,XC(c,b,0)))Dr(c,b);}
function V5(){B.call(this);this.pr=null;}
function ALp(a,b){var c,d,e,f,g,h,i;c=a.pr;if(c.dx!==null){a:{b:{d=Ep(c,b);e=c.b_;C0(e.cU);f=e.hf;if(f!==null)f.j(d);else{g=(Cf(e.dZ)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].gc(d))break a;i=i+1|0;}}}}Dr(c,b);}}
function V6(){B.call(this);this.v1=null;}
function AKO(a,b){var c,d,e,f,g,h;c=a.v1;b.button;if(c.dx!==null)a:{d=Ep(c,b);c=c.b_;e=b.button;C0(c.cU);if(c.hf===null){f=(Cf(c.dZ)).data;g=f.length;h=0;while(h<g){b=f[h].fZ(d,e);if(b!==null){c.hf=b;c.oU=e;break a;}h=h+1|0;}}}}
function ADd(){B.call(this);this.sg=null;}
function ASW(a){var b=new ADd();AOE(b,a);return b;}
function AOE(a,b){a.sg=b;}
function ALc(a,b){var c,d,e,f,g,h,i;c=a.sg;b.button;if(c.dx!==null){d=Ep(c,b);e=c.b_;f=b.button;C0(e.cU);if(f==e.oU&&e.hf!==null)e.hf=null;g=(Cf(e.dZ)).data;h=g.length;i=0;a:{while(i<h){if(g[i].ga(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Dr(c,b);}}
function ADe(){B.call(this);this.ot=null;}
function ATs(a){var b=new ADe();AMa(b,a);return b;}
function AMa(a,b){a.ot=b;}
function ANF(a,b){var c,d,e,f,g,h,i,j,k;c=a.ot;if(c.dx!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.b_;f=Ep(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;C0(e.cU);i=(Cf(e.f3)).data;j=i.length;k=0;b:{while(k<j){if(i[k].f4(f,d,h))break b;k=k+1|0;}}Dr(c,b);}}
function ADf(){B.call(this);this.wf=null;}
function ARQ(a){var b=new ADf();AN$(b,a);return b;}
function AN$(a,b){a.wf=b;}
function AJc(a,b){var c,d,e,f,g,h,i,j;c=a.wf;if(c.dx!==null){d=Ep(c,b);e=c.b_;f=b.button;g=b.detail;C0(e.cU);h=(Cf(e.dZ)).data;i=h.length;j=0;a:{while(j<i){if(h[j].fK(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Dr(c,b);}}
function ADg(){B.call(this);this.st=null;}
function ARW(a){var b=new ADg();APY(b,a);return b;}
function APY(a,b){a.st=b;}
function ARf(a,b){var c,d,e,f,g,h,i;c=a.st;if(c.dx!==null){d=Ep(c,b);e=c.b_;C0(e.cU);f=(Cf(e.is)).data;g=f.length;h=0;a:{while(h<g){if(f[h].co(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Dr(c,b);}}
function ADh(){B.call(this);this.oH=null;}
function ATz(a){var b=new ADh();AJ8(b,a);return b;}
function AJ8(a,b){a.oH=b;}
function AIi(a,b){var c,d,e;b=a.oH.b_;c=(Cf(b.kd)).data;d=c.length;e=0;while(e<d){c[e].s();e=e+1|0;}C0(b.cU);}
function ADi(){B.call(this);this.vb=null;}
function ASM(a){var b=new ADi();APM(b,a);return b;}
function APM(a,b){a.vb=b;}
function AON(a,b){var c,d,e;b=a.vb.b_;c=(Cf(b.mt)).data;d=c.length;e=0;while(e<d){c[e].s();e=e+1|0;}C0(b.cU);}
function ADT(){B.call(this);this.uB=null;}
function ARC(a){var b=new ADT();AFn(b,a);return b;}
function AFn(a,b){a.uB=b;}
function AQP(a,b){var c;c=a.uB;if(c.dx!==null)Ep(c,b);}
function ADU(){B.call(this);this.tp=null;}
function ASi(a){var b=new ADU();ARu(b,a);return b;}
function ARu(a,b){a.tp=b;}
function AK3(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.tp;if(MR()===c.gY){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cf(c.b_.iD)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dM();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.b_.cU;m=new NA;m.vq=k;m.vr=l;g.getAsString(Bm(m,"accept"));Dr(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new R;U(l);K(K(K(K(l,C(144)),k),C(145)),g);$rt_globals.console.info($rt_ustr(S(l)));}e=e
+1|0;}}}
function ADV(){B.call(this);this.mY=null;}
function ATJ(a){var b=new ADV();AMb(b,a);return b;}
function AMb(a,b){a.mY=b;}
function ALu(a,b){var c;c=a.mY;if(MR()===c.gY&&Q6(c.b_,Tx(c,b),0))Dr(c,b);}
function ADW(){B.call(this);this.vA=null;}
function ASA(a){var b=new ADW();ANE(b,a);return b;}
function ANE(a,b){a.vA=b;}
function ANl(a,b){var c;c=a.vA;if(MR()===c.gY&&Q6(c.b_,Tx(c,b),1))Dr(c,b);}
var TN=F(0);
var T0=F();
function Nm(a,b,c,d){var e,f,g,h,i;e=new RE;e.j4=d;AUQ=AUQ+1|0;e.lS=b;e.kZ=c;f=(Fc()).createElement("canvas");e.hE=f;g=b;f.width=g;h=e.hE;f=c;h.height=f;if(!d)g=e.hE.getContext("2d");else{i=e.hE;h=AFB();g=i.getContext("2d",h);}e.de=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var TZ=F();
function AJ9(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Mf(){var a=this;B.call(a);a.jJ=null;a.bj=null;a.i0=null;}
var ID=F();
var AUR=null;function I3(a,b,c){return b.jA(c);}
function AA3(){AUR=new ID;}
var DS=F(0);
var D$=F(0);
var It=F(0);
function Qu(){B.call(this);this.px=null;}
function Bj(){var a=this;B.call(a);a.a=0;a.b=0;}
function Cg(a,b){var c=new Bj();ZG(c,a,b);return c;}
function ZG(a,b,c){a.a=b;a.b=c;}
function Cw(a,b){a.a=b.a;a.b=b.b;}
function Bg(a,b,c){a.a=b;a.b=c;}
function AJW(a,b){var c;a:{b:{if(a!==b){if(BA(b)!==BA(a))break b;if(!HO(a,b))break b;}c=1;break a;}c=0;}return c;}
function HO(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function V9(){var a=this;B.call(a);a.r_=0;a.sb=0;a.r$=0;a.r9=0;}
var Y4=F(0);
function Qn(){B.call(this);this.dO=null;}
function K9(){var a=this;B.call(a);a.bt=null;a.yj=null;}
function ABx(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(146):C(147);g=$rt_str(b.getShaderInfoLog(e));h=new R;U(h);K(K(h,f),g);g=S(h);b.deleteShader(e);Ct(FJ(),g);Ct(Ed(),C(148));Ct(Ed(),d);Ct(Ed(),C(148));b=new Bt;Bp(b,g);L(b);}
function CI(){var a=this;K9.call(a);a.oG=null;a.qq=null;a.lL=null;}
function AVV(a,b,c,d){var e=new CI();Gx(e,a,b,c,d);return e;}
function Gx(a,b,c,d,e){var f,g,h,i,j,k;a.yj=e;f=ABx(b,35633,c);d=ABx(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bt=g;h=e.sX.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bt;k=c.g6;c=c.qA;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bt;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ADy(b,C(149));a.lL=new Bj;c=a.bt;a.oG=b.getUniformLocation(c,"uResolution");c=a.bt;a.qq=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bt;c=new R;U(c);K(K(c,C(150)),d);Bp(b,S(c));L(b);}
function ZT(a,b,c){var d,e,f;if(!HO(a.lL,c)){Cw(a.lL,c);d=a.oG;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function Is(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.qq;b.uniform4f(e,i,l,h,j);ZT(a,b,f);}
function AC0(){CI.call(this);this.u5=null;}
function ASs(a){var b=new AC0();AJF(b,a);return b;}
function AJF(a,b){var c;G7();Gx(a,b,C(134),C(151),AVT);c=a.bt;a.u5=b.getUniformLocation(c,"uColor");}
function Eo(){CI.call(this);this.se=null;}
function ART(a,b){var c=new Eo();Tz(c,a,b);return c;}
function AVW(a,b,c){var d=new Eo();TG(d,a,b,c);return d;}
function Tz(a,b,c){TG(a,b,C(134),c);}
function TG(a,b,c,d){G7();Gx(a,b,c,d,AVT);c=a.bt;a.se=b.getUniformLocation(c,"sDiffuse");}
function ABY(a,b,c){var d;d=a.se;b.uniform1i(d,0);b.activeTexture(33984);c=c.eS;b.bindTexture(3553,c);}
var Q5=F(CI);
function AAJ(){Eo.call(this);this.wK=null;}
function ATl(a){var b=new AAJ();AMX(b,a);return b;}
function AMX(a,b){var c;Tz(a,b,C(152));c=a.bt;a.wK=b.getUniformLocation(c,"uContrast");}
function FB(){var a=this;Eo.call(a);a.pC=null;a.qO=null;a.sA=null;a.tB=null;a.m6=0.0;}
function AVX(a,b,c){var d=new FB();Xk(d,a,b,c);return d;}
function Xk(a,b,c,d){TG(a,b,c,d);c=a.bt;a.pC=b.getUniformLocation(c,"uTexTransform");c=a.bt;a.qO=b.getUniformLocation(c,"uColor");c=a.bt;a.sA=b.getUniformLocation(c,"uBgColor");c=a.bt;a.tB=b.getUniformLocation(c,"uTextPow");}
function ADq(a,b,c){var d;if(a.m6!==c){a.m6=c;d=a.tB;b.uniform2f(d,c,0.0);}}
function ABt(a,b,c,d){Gd(b,a.qO,c);Gd(b,a.sA,d);}
function Yb(a,b,c,d){var e,f,g,h,i,j;c=c.fj;e=c.a;f=c.b;g=d.bq;h=e;g=g/h;i=d.bI;j=f;i=i/j;h=d.ba/h;j=d.bZ/j;c=a.pC;b.uniform4f(c,g,i,h,j);}
var N2=F(FB);
var ADH=F(FB);
function ATC(a){var b=new ADH();AHI(b,a);return b;}
function AHI(a,b){Xk(a,b,C(136),C(153));}
function Zq(){var a=this;Eo.call(a);a.yZ=null;a.yY=null;a.xy=null;}
function ATu(a){var b=new Zq();AHK(b,a);return b;}
function AHK(a,b){var c,d;Tz(a,b,C(154));c=a.bt;a.yZ=b.getUniformLocation(c,"uColorB");d=a.bt;a.yY=b.getUniformLocation(d,"uColorF");d=a.bt;a.xy=b.getUniformLocation(d,"uContrast");}
function ABQ(){var a=this;CI.call(a);a.op=null;a.mJ=null;a.mI=null;}
function ATf(a){var b=new ABQ();AHM(b,a);return b;}
function AHM(a,b){var c;G7();Gx(a,b,C(134),C(155),AVT);c=a.bt;a.op=b.getUniformLocation(c,"uColor");c=a.bt;a.mJ=b.getUniformLocation(c,"uPoints1");c=a.bt;a.mI=b.getUniformLocation(c,"uPoints2");}
function Y0(){var a=this;CI.call(a);a.nm=null;a.sE=null;a.pG=null;}
function ATg(a){var b=new Y0();AFX(b,a);return b;}
function AFX(a,b){var c;G7();Gx(a,b,C(134),C(156),AVT);c=a.bt;a.nm=b.getUniformLocation(c,"uColor");c=a.bt;a.sE=b.getUniformLocation(c,"uBaseline");c=a.bt;a.pG=b.getUniformLocation(c,"uScaleHExp");}
var R2=F(0);
var AD2=F(0);
function Gd(b,c,d){var e,f,g,h;e=d.bq;f=d.bI;g=d.ba;h=d.bZ;b.uniform4f(c,e,f,g,h);}
function ADy(b,c){var d,e;d=b.getError();if(d){b=FJ();e=new R;U(e);Bl(K(e,c),d);Ct(b,S(e));}}
function Ql(){var a=this;B.call(a);a.oq=null;a.os=null;a.or=null;}
function Qm(){var a=this;B.call(a);a.dL=null;a.gh=null;a.hL=null;a.jt=null;a.ji=null;a.lx=0;a.mn=0;}
function KU(a,b){if(b!==null)a.dL.deleteBuffer(b);return null;}
function Cq(){var a=this;B.call(a);a.wS=null;a.gf=0;}
function Dt(a,b,c){a.wS=b;a.gf=c;}
function Gm(){var a=this;Cq.call(a);a.sX=null;a.mG=null;a.rX=null;a.kF=0;a.qe=0;a.tk=0;}
var AVT=null;var AVY=null;function G7(){G7=Bn(Gm);AJC();}
function AJC(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Gm;c=P(DL,2);d=c.data;AP5();d[0]=AVZ;d[1]=AV0;G7();Dt(b,C(157),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.l4.gf){case 0:f=f+l.e2|0;h=h+1|0;break a;case 1:e=e+l.e2|0;g=g+1|0;break a;default:}}i=i|1<<l.g6;k=k+1|0;}b.sX=c;b.kF=e;b.qe=f;b.tk=i;c=P(DL,g);m=c.data;b.mG=c;c=P(DL,h);n=c.data;b.rX=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.l4.gf){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}AVT
=b;c=P(Gm,1);c.data[0]=b;AVY=c;}
var LR=F(0);
var Ta=F(0);
var Ud=F(0);
var F0=F();
function IW(){F0.call(this);this.ww=null;}
function AAe(){var a=this;IW.call(a);a.x7=0;a.kS=0;a.iC=null;a.kh=null;a.tS=null;}
function ALI(a,b){var c=new AAe();APL(c,a,b);return c;}
function APL(a,b,c){a.ww=b;b=new R;U(b);a.iC=b;a.kh=B1(32);a.x7=c;AH$();a.tS=AV1;}
function Tg(a,b,c,d){var e,$$je;e=a.ww;if(e===null)a.kS=1;if(!(a.kS?0:1))return;a:{try{e.j_(b,c,d);break a;}catch($$e){$$je=E3($$e);if($$je instanceof TV){}else{throw $$e;}}a.kS=1;}}
function N$(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$$je;e=b.data;d=d-c|0;f=new Rm;g=e.length;d=c+d|0;Vy(f,g);f.cs=c;f.ef=d;f.uQ=0;f.y1=0;f.rC=b;e=DX(Z(16,Ba(g,1024)));d=e.data.length;h=new Wr;i=0+d|0;Vy(h,d);AJI();h.xG=AV2;h.qV=0;h.s5=e;h.cs=0;h.ef=i;h.xI=0;h.ne=0;j=a.tS;k=new Pu;b=DX(1);l=b.data;l[0]=63;AP9();m=AV3;k.lR=m;k.k1=m;c=l.length;if(c&&c>=k.mH){k.wO=j;k.qy=b.go();k.x1=2.0;k.mH=4.0;k.pP=B1(512);k.on=DX(512);j=AV4;if(j===null){m=new BF;Bp(m,C(158));L(m);}k.lR=j;k.k1=j;while(k.iy!=3){k.iy=2;a:{while(true)
{try{j=YK(k,f,h);}catch($$e){$$je=E3($$e);if($$je instanceof Bt){j=$$je;m=new Ty;m.lM=1;m.mC=1;m.rg=j;L(m);}else{throw $$e;}}if(j.hr?0:1){c=EH(f);if(c<=0)break a;j=KL(c);}else if(Ly(j))break;m=!Wp(j)?k.lR:k.k1;b:{if(m!==AV4){if(m===AV5)break b;else break a;}c=EH(h);b=k.qy;d=b.data.length;if(c<d){j=AV6;break a;}Ws(h,b,0,d);}n=f.cs;c=j.hr!=2?0:1;if(!(!c&&!Wp(j)?0:1)){j=new D1;X(j);L(j);}Sz(f,n+j.ov|0);}}n=Ly(j);Tg(a,e,0,h.cs);N8(h);if(!n){while(true){d=k.iy;if(d!=2&&d!=4){j=new Dl;X(j);L(j);}j=AV7;if(j===j)k.iy
=3;n=Ly(j);Tg(a,e,0,h.cs);N8(h);if(!n)break;}return;}}j=new Dl;X(j);L(j);}m=new BF;X9(m,C(159));L(m);}
function Ct(a,b){var c,d,e,f,g,h,i,j;BX(CW(a.iC,b),10);b=a.iC;c=b.H;d=a.kh;if(c>d.data.length)d=B1(c);e=0;f=0;if(e>c){b=new BV;Bp(b,C(160));L(b);}while(e<c){g=d.data;h=f+1|0;i=b.M.data;j=e+1|0;g[f]=i[e];f=h;e=j;}N$(a,d,0,c);a.iC.H=0;}
function FP(){F0.call(this);this.xQ=null;}
function XI(a){a.xQ=DX(1);}
var KN=F(FP);
var AUD=null;function AJZ(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AB_(){var b;b=new KN;XI(b);AUD=b;}
function DL(){var a=this;Cq.call(a);a.qA=null;a.l4=null;a.e2=0;a.pQ=0;a.g6=0;}
var AVZ=null;var AV0=null;var AV8=null;function AP5(){AP5=Bn(DL);AIS();}
function ASJ(a,b,c,d,e,f,g){var h=new DL();VB(h,a,b,c,d,e,f,g);return h;}
function VB(a,b,c,d,e,f,g,h){AP5();Dt(a,b,c);a.qA=d;a.l4=e;a.e2=f;a.pQ=g;a.g6=h;}
function AIS(){var b;b=new DL;ALl();VB(b,C(161),0,C(162),AV9,2,0,0);AVZ=b;b=ASJ(C(163),1,C(164),AV9,2,0,1);AV0=b;AV8=G(DL,[AVZ,b]);}
function IM(){var a=this;B.call(a);a.wD=null;a.xl=null;}
function ACp(b){var c,d;if(Eu(b))L(AAb(b));if(!ACr(I(b,0)))L(AAb(b));c=1;while(c<H(b)){a:{d=I(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ACr(d))break a;else L(AAb(b));}}c=c+1|0;}}
function ACr(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var LW=F(IM);
var AV1=null;function AH$(){AH$=Bn(LW);AHJ();}
function AHJ(){var b,c,d,e,f;b=new LW;AH$();c=P(Bv,0);d=c.data;ACp(C(165));e=d.length;f=0;while(f<e){ACp(d[f]);f=f+1|0;}b.wD=C(165);b.xl=c.go();AV1=b;}
var Gr=F(Cq);
var AV$=null;var AV9=null;var AV_=null;function ALl(){ALl=Bn(Gr);AHc();}
function AHD(a,b){var c=new Gr();ACI(c,a,b);return c;}
function ACI(a,b,c){ALl();Dt(a,b,c);}
function AHc(){var b;AV$=AHD(C(166),0);b=AHD(C(167),1);AV9=b;AV_=G(Gr,[AV$,b]);}
var J9=F(FP);
var AUE=null;function AHT(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AD6(){var b;b=new J9;XI(b);AUE=b;}
function ACx(){BF.call(this);this.wR=null;}
function AAb(a){var b=new ACx();APe(b,a);return b;}
function APe(a,b){X(a);a.wR=b;}
var Va=F(DO);
var LU=F(0);
function W6(){B.call(this);this.qm=null;}
function AOi(a,b){a.qm.setPointerCapture(b.pointerId);}
function W7(){B.call(this);this.o3=null;}
function AFW(a,b){a.o3.releasePointerCapture(b.pointerId);}
function Qf(){var a=this;B.call(a);a.cX=null;a.en=null;a.h4=null;a.h5=null;a.h1=null;a.h2=null;}
function ADO(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;h=c.cS;i=a.cX;BB(h,i.a,i.b,a.en,g.bA.fb);if(b!==null&&b.fA!==null){j=Cl(c,2.0);k=FF(b,Fh(d),1);l=FF(b,Gq(d),1);m=FF(b,Fh(e),0);n=FF(b,Gq(e),0);o=Ba(k,m);p=Z(l,n);k=BD(o,p);if(k<=0)Dg(h,1);while(o<=p){q=b.fA.data[o];if(q.j7){r=d.z;s=T(r,q.hq)-d.V|0;t=s+T(q.mi,r)|0;l=e.z;u=T(l,q.hp)-e.V|0;v=u+T(q.mh,l)|0;Bg(a.h4,a.cX.a,s);Bg(a.h1,a.cX.a,t);Bg(a.h5,a.cX.a+a.en.a|0,u);Bg(a.h2,a.cX.a+a.en.a|0,v);r=Z(Ba(s,u),a.cX.b);w=Ba(Z(t,
v),a.cX.b+a.en.b|0);VY(f,a.cX.a,r,a.en.a,w-r|0);Ej(f.gu,g.gA.gr);Ej(f.da,HV(g.du,g,q.j7));if(s==t){x=c.dk;Bg(x,a.cX.a-d.R.a|0,j);if(u>=s){i=a.h1;Bg(i,i.a,i.b+j|0);r=s;}else{r=s-j|0;i=a.h4;Bg(i,i.a,i.b-j|0);}BB(h,d.R.a,r,x,f.da);}if(u==v){x=c.dk;Bg(x,e.ci.a,j);if(s>=u){i=a.h2;Bg(i,i.a,i.b+j|0);}else{u=u-j|0;i=a.h5;Bg(i,i.a,i.b-j|0);}BB(h,a.cX.a+a.en.a|0,u,x,f.da);}i=f.ct;r=i.a;w=i.b;y=f.bp;z=a.h4;ba=a.h5;bb=a.h1;bc=a.h2;bd=f.da;HP(h,h.gx);Is(h.gx,h.bf,r,w,y,h.dl);i=h.gx;x=h.bf;q=i.mJ;be=z.a;bf=z.b;bg=ba.a;bh
=ba.b;x.uniform4f(q,be,bf,bg,bh);i=i.mI;be=bb.a;bf=bb.b;bg=bc.a;bh=bc.b;x.uniform4f(i,be,bf,bg,bh);i=h.gx;Gd(h.bf,i.op,bd);HJ(h);}o=o+1|0;}if(k<=0)Dg(h,0);return;}}
function W0(){var a=this;B.call(a);a.ct=null;a.bp=null;a.da=null;a.gu=null;}
function AA7(){var a=new W0();ANB(a);return a;}
function ANB(a){a.ct=new Bj;a.bp=new Bj;a.da=new B5;a.gu=new B5;}
function VY(a,b,c,d,e){Bg(a.ct,b,c);Bg(a.bp,d,e);}
function Tf(a){Bg(a.bp,0,0);}
function JL(a){var b;b=a.bp;return T(b.a,b.b)?0:1;}
function Hx(a,b){return EU(b,a.ct,a.bp);}
function AAH(){var a=this;B.call(a);a.d$=null;a.dK=null;a.c1=null;a.bU=null;a.fF=null;}
function AOJ(a){var b=new AAH();ANc(b,a);return b;}
function ANc(a,b){var c;c=new WJ;c.dd=Bz();a.dK=c;a.d$=b;c=new Vu;c.ce=Bz();c.jq=AWa;c.cI=b;BZ(b.kj,c);a.bU=c;}
function MI(a,b){var c,d;a.fF=b;c=a.c1;if(c!==null)c.fR=b.fD;c=a.bU;d=b.fD;c.iL=b.vc;c.l0=d;b=BO(c.ce);while(BP(b)){QG(BS(b),c.l0);}}
function Ry(a){var b,c,d;b=BO(a.bU.ce);while(BP(b)){Ld(BS(b));}b=a.dK;c=0;while(true){d=b.dd;if(c>=d.k)break;(Bs(d,c)).N.gK=1;c=c+1|0;}}
function Xz(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=a.dK;c=a.d$.cS;d=b.dd.k-1|0;while(d>=0){e=Bs(b.dd,d);e.P.kt(c);f=e.N;g=e.fR.hJ;if(!JW(f)){if(!VV(f)&&!(!f.gK&&f.dh!==null)){f.gK=0;UU(f);h=f.eG;i=(h.eh+h.dT+5.0)/10.0;j=Cl(f.e4,f.i6);h=c.cY;k=f.eG;l=f.gF;m=i*2.0;CM(h,k);n=j+Kb(h,l,m)|0;f.h3=n;n=Fs(0,n,f.p.a);if(n){h=E8(c,n,f.p.b,f.e4.ca);CM(h,f.eG);k=f.gF;o=j;p=o+i;l=f.eG;m=l.eh;Ev(h,k,p,o+m-(m+l.dT)/16.0);k=f.dh;if(k===null){k=GT(c);f.dh=k;}Ex(k,h);Iq(h);Cc(f.j0,0.0,0.0,Ci(f.dh),K6(f.dh));}}h=g.sG;k=f.dh;if
(k===null)PD(f,c,0,f.p.a,h);else{j=Ci(k);k=g.u4;g=f.K;n=g.a;q=g.b;g=f.dh;EE(c,n,q,g.fj,f.j0,g,k,h,f.e4.ca);n=f.p.a;if(j<n)PD(f,c,j,n-j|0,h);}}Dg(c,1);n=Cl(e.bn,2.0);j=JW(e.N);h=e.bn;r=h.dk;h=h.uC;q=j?0:e.N.p.b;k=e.P.p;Bg(h,k.a,k.b+q|0);ZH(c,h,!j?e.N.K:e.P.K,e.fR.hJ.k8, -n|0,r);h=e.P;ABD(c,h.p,h.K,n,q,Pa(e.fR.iz,e.bn.b1),e.fR.iz.lY,r);d=d+(-1)|0;}b=a.bU;if(!DG(b.ce)){Dg(b.cI.cS,1);j=0;while(true){c=b.ce;if(j>=c.k)break;ADk(Bs(c,j),b.cI);j=j+1|0;}}}
function AM7(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.dK;d=0;a:{while(true){e=c.dd;if(d>=e.k)break;b:{f=Bs(e,d);e=b.n;if(Dj(f.N,e))g=DD(f.bn.df,null);else{h=Cl(f.bn,7.0);i=Cl(f.bn,25.0);if(Oc(f,e.a,h)){g=NF(f,e.a,i);if(Pi(f,e.b,h)){g=DD(f.bn.df,Lk(g,C(168)));break b;}if(Nx(f,e.b,h)){g=DD(f.bn.df,Lk( -g|0,C(168)));break b;}}if(V2(f,e.b,h)){g=Wv(f,e.b,i);if(XB(f,e.a,h)){g=DD(f.bn.df,Lk(g,C(169)));break b;}if(MJ(f,e.a,h)){g=DD(f.bn.df,Lk( -g|0,C(169)));break b;}}g=0;}}c:{d:{if(!g){if(!Dj(f.P,b.n))break d;if(!f.P.gc(b)
&&!DD(f.bn.df,null))break d;}g=1;break c;}g=0;}if(g){g=1;break a;}d=d+1|0;}g=0;}e:{if(!g){c=a.bU;g=0;j=c.ce.k-1|0;f:{while(j>=0){e=Bs(c.ce,j);k=b.n;f=c.cI.df;g=Hx(e.b8,k);d=!g?(-1):Ny(e,k);h=e.ii;if(h!=d){if(h>=0){l=e.ch.data[h];l.hI=0;m=e.wC;if(m!==null)m.zp(k,h,l);}if(d>=0){k=e.ch.data[d];l=e.pA;if(l!==null){m=l.pj;n=l.pk;l=l.pl;Ts(m,n);if(l!==null)k.ke.s();if(UE(k)){if(k.lm===null)Ol(m,AAk(k,n),k.iE,n);else Wq(m,AAk(k,n),k.iE,n,k.lm);}}k.hI=1;}e.ii=d;}g=g&&Fw(f)?1:0;if(g)break f;j=j+(-1)|0;}}if(!g){g=0;break e;}}g
=1;}return g;}
function AQd(a,b,c,d){var e,f,g,h,i;e=a.dK;f=0;a:{while(true){g=e.dd;if(f>=g.k)break;b:{c:{h=Bs(g,f);if(!Dj(h.N,b.n)){if(!Dj(h.P,b.n))break c;if(!h.P.fK(b,c,d))break c;}i=1;break b;}i=0;}if(i){c=1;break a;}f=f+1|0;}c=0;}d:{if(!c){g=a.bU.ce;d=g.k-1|0;i=1;if(d<0)i=0;else{g=Bs(g,d);c=Ny(g,b.n);if(c>=0){b=g.ch.data[c];if(!UE(b))b.ke.s();}}if(!i){c=0;break d;}}c=1;}return c;}
function AN7(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.bU;e=null;f=d.ce.k-1|0;a:{while(f>=0){e=Bs(d.ce,f);g=b.n;h=Hx(e.b8,g);if(!h&&!JL(e.b8)){e=e.ui;if(e!==null)Dv(e.s6);}e=!h?null:AWb;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;e=a.dK;h=0;b:{while(true){g=e.dd;if(h>=g.k){g=null;break b;}c:{i=Bs(g,h);if(!c){d:{g=b.n;if(!JW(i.N)&&Dj(i.N,g)){d=i.P.K;j=d.a;k=g.a;l=j-k|0;j=d.b;f=g.b;j=j-f|0;g=i.N.K;m=g.a-k|0;f=g.b-f|0;d=new Bj;g=new NH;g.nG=i;g.nH=m;g.nI=f;g.nJ=d;g.nC=l;g.nE=j;}else{j=Cl(i.bn,7.0);f=Cl(i.bn,
25.0);if(Oc(i,g.a,j)){m=NF(i,g.a,f);if(Pi(i,g.b,j)){g=H0(i,g,m,(-1));break d;}if(Nx(i,g.b,j)){g=H0(i,g,m,1);break d;}}if(V2(i,g.b,j)){f=Wv(i,g.b,f);if(XB(i,g.a,j)){g=H0(i,g,(-1),f);break d;}if(MJ(i,g.a,j)){g=H0(i,g,1,f);break d;}}g=null;}}if(g!==null)break c;}g=Dj(i.N,b.n)?AWb:i.P.fZ(b,c);i=i.P;if(i===null)g=null;else if(g===null)g=!Dj(i,b.n)?null:AWb;}if(g!==null)break;h=h+1|0;}}return g;}
function AKx(a,b,c){var d,e,f,g,h;d=a.dK;e=0;a:{while(true){f=d.dd;if(e>=f.k)break;b:{c:{g=Bs(f,e);if(!Dj(g.N,b.n)){if(!Dj(g.P,b.n))break c;if(!g.P.ga(b,c))break c;}h=1;break b;}h=0;}if(h){c=1;break a;}e=e+1|0;}c=0;}return !c&&!FC(a.bU)?0:1;}
function Q8(a,b,c,d,e){Qp(a,b,d,WO(c,null,d),e);}
function Rp(a,b,c,d,e){Qp(a,b,d,WO(null,c,d),e);}
function Qp(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(a.c1!==null)S7(a);f=new Qw;g=a.d$;h=new Qj;h.mU=a;h.mV=c;K_(f);f.cO=new Bj;f.bH=new Bj;f.dw=AA7();f.gm=new Bj;f.bW=AWc;f.dV=P(HZ,0);f.dr=0;f.d5=0;f.fw=0;f.e1=0;f.eP=0;f.dW=AFl(0);f.gV=Ke();f.bG=g;f.ij=h;f.v8=h;Pd(f);TA(f);f.bW=d;c=a.fF;g=c.fD;c=c.vR;f.q0=g;f.uf=c;f.dN=null;f.dW=null;f.ew=0;TA(f);h=new Un;i=a.d$;h.P=ARz();h.bn=i;c=new Vd;K_(c);c.j0=new B5;c.e4=i;h.N=c;a.c1=h;i=new PQ;c=a.d$.df;K_(i);g=new Oj;g.qY=i;i.o6=g;g=new Oi;g.sd=i;i.t5=g;i.u3=10.0;i.br=f;i.mx
=c;f.gn=i;c=a.fF.fD;g=c.ph;h=c.nZ;i.vO=g;i.vK=h;c=i.cQ;if(c!==null)Gu(c,g,h);c=i.cW;if(c!==null)Gu(c,g,h);j=a.c1;c=j.P;g=c.K;h=c.p;c=C4(c,i);j.P=c;c.lD(g,h,j.bn.b1);g=a.c1;h=new R;U(h);K(K(h,C(170)),e);i=S(h);c=a.fF.uA;e=g.N;k=BJ(e.hW,c)?0:1;l=BJ(e.gF,i)?0:1;m=4.0===e.i6?0:1;if(k){e.hW=c;e.eG=null;Pk(e,0);}e.gK=!k&&!l&&!m?0:1;e.gF=i;e.i6=4.0;e.h3=0;Ng(g);c=a.c1;c.fR=a.fF.fD;RF(a.dK.dd,0,c);c=a.c1;k=(c.N.p.b+Cl(c.bn,2.0)|0)+Cl(a.d$,2.0)|0;l=(f.dr+f.d5|0)+f.fw|0;m=Cl(f.bG,5.0);h=Cg(Fs(m,b.a,f.bG.cK.a-l|0),Fs(k,
b.b,f.bG.cK.b-f.cO.b|0));Py(f);Pg(f);k=(f.dr+f.d5|0)+f.fw|0;b=f.bG;l=(b.cK.a-h.a|0)-Cl(b,5.0)|0;b=f.bG;m=(b.cK.b-h.b|0)-Cl(b,5.0)|0;g=Cg(Ba(k,l),Ba(f.cO.b,m));KD(a.c1,h,g);Fn(a.d$,f);}
function S7(a){var b,c;b=a.dK;c=a.c1;Vp(b.dd,c);b=a.c1;c=b.N;c.dh=C4(c.dh,null);b.P=C4(b.P,null);a.c1=null;}
function Ka(a,b,c){var d,e,f,g,h;Dv(a.bU);d=a.bU;e=P(Dn,1);f=e.data;g=new Dn;BM(d);h=new Mt;h.ws=d;X_(g,h,C(171));f[0]=g;P_(d,b,GR(e),QO(a,c));}
function QO(a,b){var c;c=new Qq;c.nn=a;c.no=b;return c;}
function I2(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;if(!FC(a.bU)){h=a.bU;i=b.n;b=new S9;b.eR=a;b.bh=c;b.oz=g;b.gy=e;b.mw=f;b.jy=d;g=Tc();e=b.bh.c;d=DT(e);e=FK(e);f=b.bh.cv;if(QH(f,d,e)!==null){j=new RX;j.nr=b;j.ns=i;DF(g,C(172),j);}if(LJ(f,d,e)!==null){j=new RY;j.q6=b;j.q7=i;DF(g,C(173),j);}if(TQ(f,d,e)!==null){e=new RW;e.m2=b;e.m3=i;DF(g,C(174),e);}e=new RV;e.uU=b;e.uT=i;DF(g,C(175),e);F8(b);if(K$()){if(!b.bh.dv){e=new Q3;e.vl=b;DF(g,C(176),e);}e=new Q4;e.pv=b;DF(g,C(177),e);if(!b.bh.dv){F8(b);if(K$()&&("readText" in $rt_globals.navigator.clipboard
?1:0)?1:0){e=new Q2;e.sU=b;DF(g,C(178),e);}}}e=Tc();k=P(Bv,4).data;k[0]=C(21);k[1]=C(29);k[2]=C(34);k[3]=C(33);l=k.length;m=0;while(m<l){f=k[m];n=new O4;n.np=b;n.nq=f;DF(e,f,n);m=m+1|0;}Fg(g,C(179),HF(e));d=Tc();k=P(Dn,3);o=k.data;j=b.jy;BM(j);p=new M8;p.o5=j;o[0]=CB(C(180),p);j=b.jy;BM(j);p=new M9;p.qc=j;o[1]=CB(C(181),p);j=b.jy;BM(j);p=new M7;p.v_=j;o[2]=CB(C(182),p);HR(d,C(183),GR(k),AWd);k=P(Dn,2);o=k.data;j=b.gy;BM(j);p=new Wd;p.qQ=j;o[0]=CB(C(184),p);j=b.gy;BM(j);p=new Wc;p.ur=j;o[1]=CB(C(185),p);Fg(d,
C(186),GR(k));j=new OZ;j.oa=b;HR(d,C(187),j,AWd);if(b.bh.bD.cS.ls){k=P(Dn,2);o=k.data;j=new Sv;j.oE=b;o[0]=CB(C(188),j);j=new Sw;j.pX=b;o[1]=CB(C(189),j);Fg(d,C(190),GR(k));}Fg(g,C(191),HF(d));n=Tc();Fg(n,C(192),AAq(b));e=new P1;e.wc=b;DF(n,C(193),e);e=new Mn;e.oY=b;HR(n,C(194),e,AWd);Fg(g,C(195),HF(n));P_(h,i,HF(g),QO(a,c));}}
function AOq(a,b,c,d){var e,f,g,h;e=a.dK;f=0;a:{while(true){g=e.dd;if(f>=g.k)break;if((Bs(g,f)).P.f4(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function Zp(b){var c;c=new Xi;c.mP=b;return c;}
var JA=F(0);
function Uz(){B.call(this);this.vh=null;}
function AKl(a,b){var c;c=a.vh;Vh(c,c.x,c.w);}
function UA(){B.call(this);this.rc=null;}
function AFg(a,b){var c;c=a.rc;Vh(c,c.w,c.x);}
function UB(){B.call(this);this.nv=null;}
function AKw(a,b){XM(a.nv,b);}
function Uv(){B.call(this);this.um=null;}
function ALq(a,b){XM(a.um,b);}
function Uw(){B.call(this);this.xz=null;}
function APW(a,b){return b.bQ!=121?0:1;}
function JV(){var a=this;B.call(a);a.nO=null;a.qp=null;a.pD=null;}
function AWe(a,b){var c=new JV();MO(c,a,b);return c;}
function MO(a,b,c){var d;d=null;a.nO=b.i0;a.qp=d;a.pD=c;}
function AIe(a,b){var c,d,e,f;if(b.cm&&b.bQ==79){c=a.qp;if(c!==null&&b.bC){if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADz(c,1);else{d=new Wf;b=$rt_globals.window.showDirectoryPicker();e=new We;e.p4=c;e.p5=d;b.then(Bm(e,"f"),Bm(d,"f"));}}else VU(a.nO,a.pD);f=1;}else f=0;return f;}
function Ux(){B.call(this);this.m4=null;}
function AOO(a,b){var c,d;c=a.m4;d=DI(c.be,c.x)?c.x:!DI(c.be,c.w)?null:c.w;if(d!==null){IA(d,b);c.fs=null;}}
function Uy(){B.call(this);this.sZ=null;}
function AG8(a,b){var c,d,e,f;b=b;c=a.sZ;if(DI(c.be,c.x)){d=c.dD;e=c.x;f=new Xd;f.o9=c;I2(d,b,e,c,c,c,f);}if(DI(c.be,c.w)){d=c.dD;e=c.w;f=new Xc;f.pN=c;I2(d,b,e,c,c,c,f);}return 1;}
function GC(){var a=this;B.call(a);a.vE=0;a.cs=0;a.ef=0;a.iZ=0;}
function Vy(a,b){a.iZ=(-1);a.vE=b;a.ef=b;}
function EH(a){return a.ef-a.cs|0;}
function Fm(a){return a.cs>=a.ef?0:1;}
var Sn=F(0);
var KB=F(GC);
function Sz(a,b){var c,d,e;if(b>=0&&b<=a.ef){a.cs=b;if(b<a.iZ)a.iZ=0;return a;}c=new BF;d=a.ef;e=new R;U(e);BX(Bl(K(Bl(K(e,C(196)),b),C(197)),d),93);Bp(c,S(e));L(c);}
function Jn(){var a=this;GC.call(a);a.qV=0;a.s5=null;a.xG=null;}
function Ws(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.ne){e=new Xt;X(e);L(e);}if(EH(a)<d){e=new Q0;X(e);L(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BV;j=new R;U(j);Bl(K(Bl(K(j,C(198)),h),C(199)),g);Bp(i,S(j));L(i);}if(d<0){e=new BV;i=new R;U(i);K(Bl(K(i,C(200)),d),C(201));Bp(e,S(i));L(e);}h=a.cs;k=h+a.qV|0;l=0;while(l<d){b=a.s5.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.cs=h+d|0;return a;}}b=b.data;e=new BV;d=b.length;i=new R;U(i);BX(Bl(K(Bl(K(i,C(202)),c),C(197)),d),41);Bp(e,
S(i));L(e);}
function N8(a){a.cs=0;a.ef=a.vE;a.iZ=(-1);return a;}
function Hd(){B.call(this);this.yC=null;}
var AV5=null;var AV4=null;var AV3=null;function AP9(){AP9=Bn(Hd);AK6();}
function ADu(a){var b=new Hd();ACm(b,a);return b;}
function ACm(a,b){AP9();a.yC=b;}
function AK6(){AV5=ADu(C(203));AV4=ADu(C(204));AV3=ADu(C(205));}
function PG(){B.call(this);this.xc=null;}
function AFL(a,b){return b.bQ!=121?0:1;}
function PE(){B.call(this);this.vp=null;}
function AIo(a,b){IA(a.vp,b);}
function PF(){B.call(this);this.pc=null;}
function APj(a,b,c){return Gt(a.pc,b,c);}
function NX(){B.call(this);this.qd=null;}
function ANb(a){var b,c;b=a.qd.cr;BM(b);c=new N6;c.nW=b;return c;}
function NY(){B.call(this);this.wb=null;}
function AJ7(a,b,c,d){return Jh(a.wb.cr,c,d);}
function NV(){B.call(this);this.nz=null;}
function AKP(a,b){var c,d,e,f;b=b;c=a.nz;if(DI(c.be,c.cr)){d=c.fa;e=c.cr;f=new SM;f.x3=c;I2(d,b,e,c,e,c,f);}return 1;}
var AAT=F();
var YX=F(0);
function Jq(b,c,d,e,f){Cc(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function T3(){var a=this;B.call(a);a.cS=null;a.fz=null;a.df=null;a.cK=null;a.b1=0.0;a.ca=0;a.d0=null;a.kj=null;a.dk=null;a.uC=null;a.wy=null;a.wz=null;}
function I6(a){var b;b=a.d0;if(b!==null)b.tx();}
function Jy(a){var b;b=a.d0;if(b!==null)b.wo();}
function NU(a,b){var c;c=a.fz.dA!==(Fc()).activeElement?0:1;if(c)Jy(a);a.d0=b;if(c)I6(a);}
function Fn(a,b){Jy(a);a.d0=b;I6(a);}
function DI(a,b){return b!==a.d0?0:1;}
function LL(a){return a.cS.cY;}
function Ik(a,b){return Gs(a.cS,b.jo,Cn(b.hK,a.b1),400,0);}
function Cl(a,b){return Cn(b,a.b1);}
function Wn(a,b){if(a.ca==b)return 0;a.ca=b;G5(a.fz);return 1;}
function Mh(a,b){var c;c=a.cS;if(!a.ca)c.lJ=b;else c.mm=b;G5(a.fz);}
var R7=F();
function AIT(a,b){var c,d,e;c=b.cm;d=c&&!b.bC&&!b.cR&&!b.iO?1:0;a:{if(d){d=b.bQ;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bC&&!c&&!b.cR&&!b.iO?1:0;d=d&&b.bQ==46?1:0;}b:{if(!d){e=b.bQ;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.j1=1;}return 0;}
function R6(){B.call(this);this.oA=null;}
function AGm(a,b){var c;c=a.oA.d0;return c!==null&&c.km(b)?1:0;}
function B5(){var a=this;B.call(a);a.bq=0.0;a.bI=0.0;a.ba=0.0;a.bZ=0.0;}
function Cc(a,b,c,d,e){a.bq=b;a.bI=c;a.ba=d;a.bZ=e;}
function Ej(a,b){a.bq=b.bq;a.bI=b.bI;a.ba=b.ba;a.bZ=b.bZ;return a;}
function ARa(a,b){if(a===b)return 1;return b!==null&&BA(a)===BA(b)&&JU(a,b)?1:0;}
function JU(a,b){return b.bq===a.bq&&b.bI===a.bI&&b.ba===a.ba&&b.bZ===a.bZ?1:0;}
var If=F(0);
function WJ(){B.call(this);this.dd=null;}
function Vu(){var a=this;B.call(a);a.cI=null;a.ce=null;a.iL=null;a.i8=null;a.l0=null;a.jq=null;}
function P_(a,b,c,d){var e,f;e=a.cI;f=e.cK;if(T(f.a,f.b)&&e.b1!==0.0){if(a.iL!==null&&!FC(a)){a.jq=d;a.i8=Ik(a.cI,a.iL);e=Ol(a,b,c,null);b=new Vm;b.s6=a;e.ui=b;Fn(a.cI,a);return;}b=new BF;X(b);L(b);}c=new Dl;Bp(c,C(206));L(c);}
function Dv(a){var b;if(FC(a)){b=a.cI;if(b.d0===a)b.d0=null;Ts(a,null);a.jq.s();a.jq=AWa;}}
function Wq(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new SV;f.b8=AA7();f.fo=new Bj;f.f1=new Bj;f.ch=AWf;f.ii=(-1);f.iS=1;f.fU=1;c=c.dM();Ld(f);f.ch=c;QG(f,a.l0);P4(f,a.i8,a.cI);if(d===null)g=b.a;else{g=b.a;g=a.cI.cK.a<((g+(ER(d)).a|0)+(ER(f)).a|0)?g-(ER(f)).a|0:(g+(ER(d)).a|0)-d.e0|0;}h=b.b;b=a.cI.cK;i=Z(0,Ba(g,b.a-(ER(f)).a|0));g=Z(0,Ba(h,b.b-(ER(f)).b|0));Bg(f.b8.ct,i,g);j=f.cE+f.e0|0;k=f.ch.data;h=k.length;l=0;m=j;while(l<h){c=k[l];b=c.em;b.a=i+j|0;b.b=g+m|0;if(!f.fU){if(!c.dG.a)Yw();j=j+(c.dG.a+f.cE|0)|0;}else{if
(!c.dG.b)Yw();m=m+(c.dG.b+f.cE|0)|0;}l=l+1|0;}b=new WP;b.pj=a;b.pk=f;b.pl=e;f.pA=b;Bw(a.ce,f);return f;}
function Ol(a,b,c,d){return Wq(a,b,c,d,null);}
function AKU(a,b){var c;if(!FC(a))return 0;a:{switch(b.bQ){case 27:Dv(a);c=1;break a;default:}c=0;}return c;}
function AAk(b,c){var d,e,f;d=b.em;e=c.cE;f=c.e0;return Cg((d.a-(e*3|0)|0)-f|0,(d.b-e|0)-f|0);}
function Ts(a,b){var c,d;c=a.ce.k-1|0;a:{while(true){if(c<0)break a;d=Bs(a.ce,c);if(b===d)break;Fi(a.ce,c);d.fI=C4(d.fI,null);Bg(d.fo,0,0);d.ch=AWf;d.ii=(-1);Tf(d.b8);c=c+(-1)|0;}}}
function FC(a){return a.ce.k<=0?0:1;}
function PL(){var a=this;B.call(a);a.d9=null;a.ka=0.0;a.gX=0.0;a.fP=0;}
function WA(a){return a.d9.bp.b;}
function S5(a){return a.d9.bp.a;}
function ACj(a,b,c){var d,e,f;if(a.fP){d=a.d9;e=c.a;f=c.b;c=d.ct;BB(b,c.a+e|0,c.b+f|0,d.bp,d.da);}}
function Ky(){var a=this;B.call(a);a.mk=null;a.wU=null;a.w3=0.0;a.pI=0;a.w_=0;a.xw=0;a.rR=0;a.yh=0;a.eh=0.0;a.dT=0.0;a.w1=0.0;a.l8=0.0;a.w7=0;a.nw=null;}
function Fv(a){return DE(a.eh+a.dT);}
function PW(a,b){return DE((a.eh+a.dT)*b);}
function EW(){var a=this;B.call(a);a.bT=0;a.c7=null;a.ex=null;a.bF=null;a.dB=0;a.c$=0;}
var AWg=0;var AU2=0;function XX(a,b,c,d,e,f,g){var h,i,j,k,l;h=a.bF;i=h===b&&!h.gB?0:1;if(i){a.bF=b;JX(b,d.cY,a.c7.kq);}h=a.bF;j=h===null?0:EA(h)<f?H7(EA(a.bF),1024):H7(f,1024)+1|0;k=j<=a.dB?0:1;if(k)a.dB=j;if(!(!i&&!k)){if(AWg){l=b.fm;$rt_globals.console.info("fMeasure"+l.data);AWg=0;}if(!AU2){h=c.de;b="alphabetic";h.textBaseline=b;}else{b=c.de;h="top";b.textBaseline=h;}a.c$=g/1024|0;while(true){b=a.ex;if(b.k>=a.dB)break;Bw(b,GT(d));}f=0;while(f<a.dB){H$(a,c,e,a.c$+f|0);f=f+1|0;}a.bF.gB=0;}if(!DG(a.ex)&&g<=
EA(a.bF)){j=g/1024|0;f=a.c$;if(j!=f){f=j-f|0;if(f<0)f= -f|0;if(f>=a.dB){f=0;while(f<a.dB){H$(a,c,e,j+f|0);f=f+1|0;}a.c$=j;}else{while(true){g=a.c$;if(g>=j)break;H$(a,c,e,g+a.dB|0);a.c$=a.c$+1|0;}while(true){g=a.c$;if(g<=j)break;H$(a,c,e,g-1|0);a.c$=a.c$-1|0;}}}}}
function Kf(b,c){return (c-Fv(b)|0)/2|0;}
function MK(b,c){return Kf(b,c)+b.rR|0;}
function H$(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;Ft(b);e=a.bF.fm;f=d*1024|0;g=O$(a,f);if(g>=a.bF.l.data.length)return;h=!g?0.0:e.data[g-1|0];i=f;j=h-i+a.bT;k=a.c7.kq;a:{while(true){l=a.bF;if(g>=l.l.data.length)break a;m=k.data;n=KA(l,g);l=m[IN(n)];o=!AU2?MK(l,c):Kf(l,c);m=e.data;CM(b,l);Ev(b,n.q,j,o);j=m[g]-i+a.bT;if(j>1024.0)break;g=g+1|0;}}Ex(Bs(a.ex,d%a.dB|0),b);}
function Ze(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp;if(DG(a.ex))return;if(!a.dB)return;if(g>EA(a.bF))return;o=a.bF;p=o.ed;q=o.l;r=g/1024|0;s=O$(a,g);t= -a.bT|0;u=f;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=e)break;y=p.data;o=Bs(a.ex,r%a.dB|0);z=v[s];ba=y[s]+a.bT|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=Ba(be,ba)-g|0;if(bc&&x)bf=bf+a.bT|0;bg=i!==null?0:1;b:{if(!bg){bh=!x?a.bT:2*a.bT|0;bi=i.a;w
=i.b;if(!(bi<w&&g<=w&&(g+bf|0)>(bi+bh|0)?0:1)){bh=0;break b;}}bh=1;}c:{if(!bg){bj=!x?a.bT:2*a.bT|0;if(g>=i.a&&(g+bf|0)<=(i.b+bj|0)?1:0){bk=1;break c;}}bk=0;}bl=null;if(l&&!m)bl=h.bA.h8;if(z===j)bl=h.bA.oR;bm=BO(k);d:{while(BP(bm)){if(BJ(BS(bm),z)){bi=1;break d;}}bi=0;}if(bi)bl=h.bA.wg;if(n!==null){v=n.lj;if(v===null)bj=0;else{v=v.data;bj=s>=v.length?0:v[s];}bl=XP(h.du,h,bj,n.fH);}if(!bk&&!bh){i.b=Ba(i.b,EA(a.bF));AA_(a,d,t+c|0,b,f,h,o,z,bf,g>=i.a?bf:(Ba(ba,be)-i.a|0)-(!x?a.bT:0)|0,(g+bf|0)<=(i.b+(!x?a.bT:2*
a.bT|0)|0)?0:(Ba(ba,be)-i.b|0)-(!x?a.bT:0)|0,g-bb|0,bl);}else{bm=h.lN.data[z.bP];bn=bk?h.bA.jn:Tb(bl,M_(h,bm.j8));Cc(a.c7.jm,g-bb|0,0.0,bf,u);Bg(a.c7.jf,bf,f);He(a.c7,d,o,t+c|0,b,bm.h9,bn);}if((z.bJ&12)>0){bi=t+c|0;Dg(d,1);o=a.c7;z=o.ko;z.a=bf;w=b+o.vC|0;bj=w-o.vP|0;bo=o.sO;bp=w+bo;bm=o.hk;UJ();AC$(d,bi,bj,z,bo,bp,bm,AWh.hN.h9);Dg(d,0);}g=g+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function AA_(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.lN.data[h.bP];o=n.h9;p=Tb(m,M_(f,n.j8));q=f.bA.jn;f=a.c7;r=f.jm;s=f.jf;t=l;u=i-j|0;v=u;w=e;Cc(r,t,0.0,v,w);Bg(s,u,e);He(a.c7,b,g,c,d,o,p);l=l+i|0;Cc(r,l-k|0,0.0,k,w);Bg(s,k,e);f=a.c7;c=c+i|0;He(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cc(r,t,0.0,i,w);Bg(s,i,e);He(a.c7,b,g,c-j|0,d,o,q);}
function Tb(b,c){if(b!==null)c=b;return c;}
function O$(a,b){var c,d,e,f,g,h,i;c=a.bF;d=c.fm;e=0;f=c.l.data.length;g=b;b=BD(e,f);if(b>0){c=new BF;X(c);L(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BD(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function Xb(a){a.bF=null;DY(a.ex,new Uo);FG(a.ex);}
function Zm(a,b,c,d,e,f,g,h,i){var j,k;j=EA(a.bF);if(j)j=j+a.bT|0;if(!j)j=j-a.bT|0;k=Z( -a.bT|0,j-g|0);if(k>=h)return;Bg(f,h-k|0,e);BB(b,c+k|0,d,f,i);}
function Zr(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a:{h=c.data;i=P(EW,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=BK(g,e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.bF===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}c=i.data;e=0;f=c.length;while(e<f){if(c[e]===null){if(j>=k)p=null;else{b=j+1|0;p=h[j];j=b;}while(j<k&&p===null){b=j+1|0;p=h[j];j=b;}if(p!==null){c[e]=p;h[j-1|0]=null;}else{o=new EW;o.bT=3;o.ex=Bz();o.c$=0;o.c7=d;c[e]=o;}}e=e+1|0;}while(j<k){p=h[j];if(p!==null)Xb(p);j=j+1|0;}return i;}
function ABb(){AU2=0;}
function ADD(){var a=this;B.call(a);a.eW=null;a.cN=null;a.dY=null;a.ek=null;a.hR=null;a.hS=null;}
function U1(){var a=new ADD();AJH(a);return a;}
function AJH(a){a.eW=new Bj;a.cN=new Bj;a.dY=new Bj;a.ek=new Bj;a.hR=new B5;a.hS=new B5;}
function Q_(a){var b;b=a.cN;return !T(b.a,b.b)?0:1;}
function Hl(a,b){return EU(b,a.dY,a.ek);}
function HM(a,b,c,d){var e,f,g,h,i;e=Hl(a,b);f=EU(b,a.eW,a.cN);if(!e&&!f)return null;if(!f){if(!d)c.j(V1(a,b.a-a.dY.a|0));else c.j(PH(a,b.b-a.dY.b|0));}g=!d?a.eW.a+(a.cN.a/2|0)|0:a.eW.b+(a.cN.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new Sg;b.vy=a;b.vz=c;b.vx=i;}else{b=new Sf;b.pg=a;b.pe=c;b.pf=i;}return b;}
function Gu(a,b,c){if(b!==null&&c!==null){Ej(a.hR,c);Ej(a.hS,b);return;}}
function Z4(b,c){var d;d=new T1;d.rU=b;d.wr=c;return d;}
function PH(a,b){var c,d,e;c=a.ek.b;d=a.cN.b;e=c-d|0;return Z4(Ba(Z(0,b-(d/2|0)|0),e),e);}
function V1(a,b){var c,d,e;c=a.ek.a;d=a.cN.a;e=c-d|0;return Z4(Ba(Z(0,b-(d/2|0)|0),e),e);}
function W2(a,b,c,d,e,f,g){Wh(a,b,c,d,e,f,g,1);}
function QM(a,b,c,d,e,f,g){Wh(a,b,c,d,e,f,g,0);}
function Wh(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bg(a.ek,0,0);Bg(a.cN,0,0);}else{i=Ba(g*3|0,d);j=Z(P3(d,d,e),i);e=e-d|0;i=d-j|0;i=i?P3(b,i,e):0;if(!h){k=a.eW;k.a=i+c|0;k.b=f-g|0;l=a.cN;l.a=j;l.b=g;l=a.dY;l.a=c;l.b=k.b;k=a.ek;k.a=d;k.b=g;}else{k=a.eW;k.a=f-g|0;k.b=i+c|0;l=a.cN;l.a=g;l.b=j;l=a.dY;l.a=k.a;l.b=c;k=a.ek;k.a=g;k.b=d;}}}
function Hy(a,b){var c;c=a.dY;BB(b,c.a,c.b,a.ek,a.hR);}
function HH(a,b){var c,d;c=a.cN;c.a=c.a-2|0;c.b=c.b-2|0;d=a.eW;BB(b,d.a+1|0,d.b+1|0,c,a.hS);b=a.cN;b.a=b.a+2|0;b.b=b.b+2|0;}
function H3(a,b,c){return Hl(a,b)&&Fw(c)?1:0;}
function ZM(){var a=this;B.call(a);a.xS=20;a.e$=null;a.eA=null;a.it=0.0;a.ih=null;a.l5=0;a.iX=0;a.cp=null;a.jM=null;a.ej=null;a.fh=null;a.fe=0;}
function AQf(){var a=new ZM();AQA(a);return a;}
function AQA(a){a.xS=20;a.e$=new Bj;a.eA=new Bj;a.cp=Bz();a.jM=DX(0);}
function KY(a,b){if(b===null)b=DX(0);a.jM=b;}
function ACc(a,b,c,d,e){var f,g,h,i,j,k;f=c/20|0;g=a.cp;h=Bs(g,f%g.k|0);i=a.e$;j=T(a.cp.k,a.iX);f=h.ey.b;k=((h.jp.b-(b%j|0)|0)+j|0)%j|0;if((k+f|0)>j)k= -(b%K6(h.bc)|0)|0;b=c%h.dC|0;f=h.J;k=k+T(b,f)|0;if(k<( -f|0))k=k+j|0;Bg(h.dt,h.ey.a,f);g=h.ec;b=c%h.dC|0;c=h.J;Cc(g,0.0,T(b,c),h.ey.a,c);Es(h,e,k,i,d.oS,d.mX);}
function S3(a,b,c,d){var e,f,g,h,i,j;e=a.cp.k;while(true){f=a.cp.k;g=T(f,a.iX);if(g>(d+a.l5|0))break;h=Cg(0,g);i=new PO;g=a.eA.a;f=a.l5;j=a.ih;i.dt=new Bj;i.ec=new B5;i.jp=h;i.dC=20;i.J=f;i.ey=Cg(g,20*f|0);i.gj=MK(j,f);if(i.bc===null)i.bc=GT(b);Bw(a.cp,i);}if(f==e)return;RD(a,c);}
function RD(a,b){var c,d,e,f,g,h,i,j,k;c=a.cp;d=c.k;e=T((b/(d*20|0)|0)+1|0,d)*20|0;c=BO(c);while(BP(c)){f=BS(c);g=a.ej;h=a.it;Ft(g);i=0;while(true){j=f.dC;if(i>=j)break;k=e-T(d,j)|0;if(k<b)k=e;e=k+1|0;FO(f,g,D8(e),T(f.J,i)+f.gj|0,h);i=i+1|0;}Ex(f.bc,g);f.nc=g.j4;}}
function Jm(a){DY(a.cp,new Mo);FG(a.cp);a.ej=C4(a.ej,null);a.fh=C4(a.fh,null);}
function NP(){B.call(this);this.to=null;}
function Lg(a,b){Ct(a.to,b);}
function NO(){B.call(this);this.mR=null;}
function AFt(a,b){var c;c=a.mR;DR(c,Ha(b,FL(c)));}
function NN(){B.call(this);this.rt=null;}
function AED(a,b){var c;c=a.rt;Ia(c,Ha(b,S_(c)));}
function UI(){var a=this;B.call(a);a.jm=null;a.jf=null;a.ko=null;a.hk=null;a.kq=null;a.sO=0.0;a.wA=0;a.vC=0;a.vP=0;a.mq=0;}
function He(a,b,c,d,e,f,g){var h,i;h=a.jf;if(h.a&&h.b){i=a.jm;if(i.bZ!==0.0&&i.ba!==0.0){EE(b,d,e,h,i,c,f,g,a.mq);return;}}}
function NM(){B.call(this);this.uP=null;}
function AEC(a){var b,c;b=a.uP;c=b.hU?0:1;b.hU=c;b=new R;U(b);I8(K(b,C(207)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NT(){B.call(this);this.oF=null;}
function AIc(a){var b,c;b=a.oF;c=b.js^1;b.js=c;b=new R;U(b);I8(K(b,C(208)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NS(){B.call(this);this.sN=null;}
function ARv(a){var b,c,d,e,f;b=a.sN;c=(b.dE+3|0)%6|0;b.dE=c;d=b.fn.data;e=d.length;f=0;while(f<e){b=d[f];b.bT=c;b=b.bF;if(b!==null)b.gB=1;f=f+1|0;}}
function NR(){B.call(this);this.wp=null;}
function AKJ(a){var b;b=a.wp;b.bz=b.bz?0:1;Jm(b.cH);b.cH=AQf();SS(b,b.R,b.ci,b.bD.b1);}
function NQ(){B.call(this);this.oh=null;}
function AM8(a){var b;b=a.oh;b.iR=b.iR?0:1;}
function NL(){B.call(this);this.r1=null;}
function AQV(a){var b;b=a.r1;b.lQ=b.lQ?0:1;}
var Jv=F(KB);
function Rm(){var a=this;Jv.call(a);a.y1=0;a.uQ=0;a.rC=null;}
function Kk(){var a=this;B.call(a);a.wO=null;a.qy=null;a.x1=0.0;a.mH=0.0;a.lR=null;a.k1=null;a.iy=0;}
function Lh(){var a=this;B.call(a);a.hr=0;a.ov=0;}
var AV7=null;var AV6=null;function YU(a,b){var c=new Lh();Zx(c,a,b);return c;}
function Zx(a,b,c){a.hr=b;a.ov=c;}
function Ly(a){return a.hr!=1?0:1;}
function Wp(a){return a.hr!=3?0:1;}
function KL(b){return YU(2,b);}
function ZU(){AV7=YU(0,0);AV6=YU(1,0);}
function Wg(){var a=this;B.call(a);a.tw=null;a.uk=null;a.tb=null;}
function GI(){var a=this;B.call(a);a.bC=0;a.cm=0;a.cR=0;a.iO=0;}
function AWi(a,b,c,d){var e=new GI();TX(e,a,b,c,d);return e;}
function TX(a,b,c,d,e){a.bC=d;a.cm=b;a.cR=c;a.iO=e;}
function O2(){var a=this;GI.call(a);a.d3=null;a.bQ=0;a.tX=0;a.xR=0;a.j1=0;}
var ACL=F();
function VL(b,c){return (b+(c/2|0)|0)/c|0;}
function P3(b,c,d){if(b<(2147483647/c|0))return VL(T(b,c),d);return 0.5+c*b/d|0;}
function H7(b,c){return ((b+c|0)-1|0)/c|0;}
function GV(b){return b+0.5|0;}
function DE(b){return b+0.5|0;}
function Fs(b,c,d){return Z(b,Ba(c,d));}
function Zk(b,c){return YA(b)/YA(c);}
function Mc(){var a=this;GI.call(a);a.n=null;a.wE=null;}
var TP=F(0);
function NA(){var a=this;B.call(a);a.vq=null;a.vr=null;}
function AKt(a,b){var c,d;c=a.vq;d=a.vr;$rt_globals.console.info("paste plain string "+b);c.j(Ce(b));C0(d);}
function Us(){B.call(this);this.v0=null;}
function APc(a,b){a.v0.clipboardData.setData("text/plain",$rt_ustr(b));}
var L_=F(0);
function Fw(a){return DD(a,null);}
function Qg(){B.call(this);this.sc=null;}
function AJa(a){I6(a.sc);}
function Qe(){B.call(this);this.vW=null;}
function AEp(a){Jy(a.vW);}
var Xy=F(0);
var AWa=null;function ACQ(){AWa=new NB;}
var PY=F(0);
var AU1=0.0;function Te(b){Cc(b,1.0471975803375244,0.75,1.25,0.375);}
function Yl(){AU1=Zk(Zk(0.5,0.375),4.0);}
function Wr(){var a=this;Jn.call(a);a.xI=0;a.ne=0;}
function RR(){B.call(this);this.u1=null;}
function DD(a,b){var c,d,e;c=a.u1;d=c.r2;e=c.dA;if(BJ(b,d))b=d;else{e=e.style;if(b!==null&&H(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}c.r2=b;return 1;}
var ABB=F();
var NB=F();
function AQW(a){}
function JP(){B.call(this);this.x4=null;}
var AV2=null;var AWj=null;function AJI(){AJI=Bn(JP);ARj();}
function AHv(a){var b=new JP();XZ(b,a);return b;}
function XZ(a,b){AJI();a.x4=b;}
function ARj(){AV2=AHv(C(209));AWj=AHv(C(210));}
var VD=F(0);
function ABe(){B.call(this);this.i1=null;}
function ASh(a){var b=new ABe();AL0(b,a);return b;}
function AL0(a,b){a.i1=b;}
function Ei(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.i1));}
function CF(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.i1));}
function AGS(a){var b,c;b=a.i1.byteLength;c=new R;U(c);K(Bl(K(c,C(211)),b),C(212));return S(c);}
var T6=F(0);
function Kx(){var a=this;B.call(a);a.hP=null;a.fM=null;a.l7=null;}
function ABy(a,b){var c=new Kx();AJD(c,a,b);return c;}
function ARO(a,b,c){var d=new Kx();N9(d,a,b,c);return d;}
function X8(b){var c,d,e,f,g,h,i;c=new Kx;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=P(Bv,0);else{f=P(Bv,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=Ce(e[h]);h=h+1|0;}}}else f=P(Bv,0);N9(c,d,b,f);return c;}
function AJD(a,b,c){N9(a,b,c,P(Bv,0));}
function N9(a,b,c,d){a.hP=b;a.fM=c;a.l7=d;}
function EQ(a){var b;b=a.hP;return Ce(b!==null?b.name:a.fM.name);}
function AJ6(a){var b,c,d,e,f,g;if(a.fM===null){b=a.l7;c=EQ(a);d=Zz(b);e=new R;U(e);K(K(K(e,d),C(213)),c);c=S(e);}else{b=a.l7;c=EQ(a);f=a.fM.size;g=f|0;if(g!==f){d=EQ(a);e=new R;U(e);K(K(e,C(214)),d);$rt_globals.console.info($rt_ustr(S(e))+f);g=0;}d=Zz(b);e=new R;U(e);Bl(K(K(K(K(e,d),C(213)),c),C(215)),g);c=S(e);}return c;}
function HG(){var a=this;B.call(a);a.bA=null;a.fD=null;a.lN=null;a.gA=null;a.du=null;a.uA=null;a.vc=null;a.vR=null;}
function AWk(a,b,c,d,e){var f=new HG();Ix(f,a,b,c,d,e);return f;}
function Ix(a,b,c,d,e,f){var g;g=c.data;a.uA=AAp(C(216),16.0);a.vc=AAp(C(216),17.0);a.vR=AAp(C(57),15.0);a.bA=b;a.lN=c;a.gA=d;if(g.length>=15){a.fD=e;a.du=f;return;}b=new BF;X(b);L(b);}
function M_(a,b){if(b===null)b=a.bA.fb;return b;}
function UT(){var a=this;B.call(a);a.sI=null;a.sJ=null;}
function Kg(){var a=this;Kk.call(a);a.pP=null;a.on=null;}
function YK(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.pP;e=0;f=0;g=a.on;a:{b:{while(true){if((e+32|0)>f&&Fm(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=EH(b)+j|0;h=i.length;f=Ba(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new BV;b=new R;U(b);Bl(K(Bl(K(b,C(217)),k),C(199)),h);Bp(l,S(b));L(l);}if(EH(b)<e)break;if(e<0){b=new BV;c=new R;U(c);K(Bl(K(c,C(200)),e),C(201));Bp(b,S(c));L(b);}h=b.cs;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.rC.data[n+b.uQ|0];m=m+1|0;j=o;n=k;}b.cs
=h+e|0;e=0;}if(!Fm(c)){l=!Fm(b)&&e>=f?AV7:AV6;break a;}i=g.data;k=Ba(EH(c),i.length);p=new Nz;p.mZ=b;p.qC=c;l=AA2(a,d,e,f,g,0,k,p);e=p.ux;j=p.vU;if(l===null){if(!Fm(b)&&e>=f)l=AV7;else if(!Fm(c)&&e>=f)l=AV6;}Ws(c,g,0,j);if(l!==null)break a;}b=new VP;X(b);L(b);}p=new BV;l=new R;U(l);BX(Bl(K(Bl(K(l,C(202)),j),C(197)),h),41);Bp(p,S(l));L(p);}Sz(b,b.cs-(f-e|0)|0);return l;}
var Pu=F(Kg);
function AA2(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Lf(h,2))break a;i=AV6;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!WN(l)){if((f+3|0)>g){j=j+(-1)|0;if(Lf(h,3))break a;i=AV6;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Cr(l)){i=KL(1);break a;}if
(j>=d){if(Fm(h.mZ))break a;i=AV7;break a;}c=j+1|0;m=k[j];if(!CO(m)){j=c+(-2)|0;i=KL(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Lf(h,4))break a;i=AV6;break a;}k=e.data;o=Eh(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.ux=j;h.vU=f;return i;}
var TV=F(DO);
function H5(){var a=this;B.call(a);a.wd=null;a.fb=null;a.tE=null;a.xX=null;a.qW=null;a.jn=null;a.oR=null;a.wg=null;a.k5=null;a.kU=null;a.h8=null;}
function AWl(a,b,c,d,e,f,g,h,i,j,k){var l=new H5();LX(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function LX(a,b,c,d,e,f,g,h,i,j,k,l){a.wd=b;a.fb=c;a.tE=d;a.xX=e;a.qW=f;a.jn=g;a.oR=h;a.wg=i;a.k5=j;a.kU=k;a.h8=l;}
var YW=F(0);
function Ya(){var a=this;B.call(a);a.eT=null;a.gr=null;a.oS=null;a.mX=null;}
function ABT(a,b,c,d){var e=new Ya();AQ1(e,a,b,c,d);return e;}
function AQ1(a,b,c,d,e){a.eT=b;a.gr=c;a.oS=d;a.mX=e;}
var ABf=F(0);
function ADt(){var b,c;b=new Ij;c=O(C(218));ALx();JJ(b,c,AWm,AWn);return b;}
function ACT(){var b,c;b=new Ij;c=O(C(106));AEJ();JJ(b,c,AWo,AWp);return b;}
function ADm(){var b,c;b=new Ij;ACH();c=AWq;AEY();JJ(b,c,AWr,AWs);return b;}
function ADN(){var a=this;B.call(a);a.rS=null;a.mF=null;a.t7=null;a.nd=null;}
function Yg(a,b,c,d){var e=new ADN();AFi(e,a,b,c,d);return e;}
function AFi(a,b,c,d,e){a.rS=b;a.mF=c;a.t7=d;a.nd=e;}
function XP(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.du.mF;break a;case 3:if(c!=3){b=b.du.nd;break a;}b=b.du.t7;break a;default:b=b.bA.fb;break a;}b=b.du.rS;}return b;}
function HV(a,b,c){return XP(a,b,0,c);}
function L4(){var a=this;B.call(a);a.iT=null;a.iu=null;}
function Mg(a,b){var c;c=a.iu;a.iu=b;return c;}
function IY(){var a=this;L4.call(a);a.bE=null;a.bV=null;a.fg=0;a.fr=0;}
function Jf(a){var b;b=Km(a);if(b==2){if(Km(a.bV)<0)a.bV=MZ(a.bV);return OS(a);}if(b!=(-2))return a;if(Km(a.bE)>0)a.bE=OS(a.bE);return MZ(a);}
function Km(a){var b,c;b=a.bV;c=b===null?0:b.fg;b=a.bE;return c-(b===null?0:b.fg)|0;}
function MZ(a){var b;b=a.bE;a.bE=b.bV;b.bV=a;D7(a);D7(b);return b;}
function OS(a){var b;b=a.bV;a.bV=b.bE;b.bE=a;D7(a);D7(b);return b;}
function D7(a){var b,c,d;b=a.bV;c=b===null?0:b.fg;b=a.bE;d=b===null?0:b.fg;a.fg=Z(c,d)+1|0;a.fr=1;b=a.bE;if(b!==null)a.fr=1+b.fr|0;b=a.bV;if(b!==null)a.fr=a.fr+b.fr|0;}
function Ig(){var a=this;B5.call(a);a.f8=0;a.f_=0;a.f9=0;a.f$=0;}
function HB(a){var b=new Ig();AQ6(b,a);return b;}
function D4(a,b,c){var d=new Ig();AHb(d,a,b,c);return d;}
function O(a){var b=new Ig();AOP(b,a);return b;}
function E7(a,b,c,d){var e=new Ig();QY(e,a,b,c,d);return e;}
function BG(a){var b=new Ig();Jl(b,a);return b;}
function AQ6(a,b){QY(a,b,b,b,255);}
function AHb(a,b,c,d){QY(a,b,c,d,255);}
function AOP(a,b){if(!(H(b)!=4&&H(b)!=7&&H(b)!=9)&&I(b,0)==35){if(H(b)==4){a.f8=Im(I(b,1))*17|0;a.f_=Im(I(b,2))*17|0;a.f9=Im(I(b,3))*17|0;a.f$=255;}else{a.f8=K2(I(b,1),I(b,2));a.f_=K2(I(b,3),I(b,4));a.f9=K2(I(b,5),I(b,6));a.f$=H(b)!=9?255:K2(I(b,7),I(b,8));}Jq(a.f8,a.f_,a.f9,a.f$,a);return;}}
function QY(a,b,c,d,e){a.f8=b;a.f_=c;a.f9=d;a.f$=e;Jq(b,c,d,e,a);}
function Jl(a,b){a.f8=b.f8;a.f_=b.f_;a.f9=b.f9;a.f$=b.f$;Ej(a,b);}
function Im(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function K2(b,c){return (16*Im(b)|0)+Im(c)|0;}
var CJ=F(0);
var AVB=null;var AWq=null;var AVD=null;var AVC=null;var AVF=null;var AVE=null;var AVH=null;var AVG=null;var AVJ=null;var AVI=null;var AVK=null;function ACH(){ACH=Bn(CJ);AQv();}
function AQv(){AVB=HB(0);AWq=D4(8,8,8);AVD=O(C(219));AVC=D4(255,255,255);AVF=O(C(220));AVE=O(C(221));AVH=O(C(222));AVG=O(C(223));AVJ=E7(205,205,205,153);AVI=E7(255,255,255,0);AVK=O(C(120));}
function Ca(){Cq.call(this);this.k2=null;}
var AWt=null;var AWu=null;var AWv=null;var AWw=null;var AWx=null;var AWy=null;var AWz=null;var AWA=null;var AWB=null;var AWC=null;var AWD=null;var AWE=null;var AWF=null;var AWG=null;var AWH=null;var AVL=null;function ABO(){ABO=Bn(Ca);AQX();}
function De(a,b,c){var d=new Ca();Rb(d,a,b,c);return d;}
function AQM(a,b,c,d){var e=new Ca();Y2(e,a,b,c,d);return e;}
function Rb(a,b,c,d){ABO();Dt(a,b,c);a.k2=Hu(d,null);}
function Y2(a,b,c,d,e){ABO();Dt(a,b,c);a.k2=Hu(d,e);}
function AQX(){var b;b=new Ca;ACH();Rb(b,C(224),0,AWq);AWt=b;AWu=De(C(225),1,O(C(226)));AWv=De(C(227),2,O(C(228)));AWw=De(C(229),3,O(C(230)));AWx=De(C(231),4,AWq);AWy=De(C(232),5,O(C(233)));AWz=De(C(234),6,O(C(235)));AWA=De(C(236),7,O(C(237)));AWB=De(C(238),8,O(C(239)));AWC=AQM(C(240),9,AWq,D4(237,235,252));AWD=AQM(C(241),10,O(C(242)),O(C(243)));AWE=De(C(244),11,O(C(235)));AWF=De(C(245),12,O(C(246)));AWG=De(C(247),13,O(C(248)));b=De(C(249),14,O(C(250)));AWH=b;AVL=G(Ca,[AWt,AWu,AWv,AWw,AWx,AWy,AWz,AWA,AWB,AWC,
AWD,AWE,AWF,AWG,b]);}
function Io(){var a=this;B.call(a);a.h9=null;a.j8=null;}
function Hu(a,b){var c=new Io();ALE(c,a,b);return c;}
function ALE(a,b,c){a.h9=b;a.j8=c;}
function HK(){var a=this;B.call(a);a.iz=null;a.hJ=null;a.vN=null;a.yN=null;a.ku=null;a.ph=null;a.nZ=null;}
function AWI(a,b,c,d,e,f,g){var h=new HK();K3(h,a,b,c,d,e,f,g);return h;}
function K3(a,b,c,d,e,f,g,h){a.vN=b;a.yN=c;a.hJ=d;a.ku=e;a.iz=f;a.ph=g;a.nZ=h;}
function AA8(){var a=this;B.call(a);a.lY=null;a.rl=0;}
function XY(a,b){var c=new AA8();AOM(c,a,b);return c;}
function AOM(a,b,c){var d;d=new B5;a.lY=d;a.rl=b;d.bZ=c;}
function Pa(a,b){return Cn(a.rl,b);}
var Dd=F(0);
var AVP=null;var AVQ=null;var AVM=null;var AVN=null;var AVO=null;var AWr=null;var AWs=null;var AVR=null;var AVS=null;function AEY(){AEY=Bn(Dd);AHe();}
function AHe(){AVP=O(C(118));AVQ=O(C(251));AVM=O(C(252));AVN=O(C(253));AVO=O(C(254));AWr=O(C(118));AWs=O(C(251));AVR=E7(205,205,205,153);AVS=D4(247,248,250);}
function ZI(){var a=this;B.call(a);a.jo=null;a.hK=0.0;}
function AAp(a,b){var c=new ZI();AMT(c,a,b);return c;}
function AMT(a,b,c){a.jo=b;a.hK=c;}
function AOB(a,b){if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){b=b;return a.hK===b.hK&&BJ(a.jo,b.jo)?1:0;}return 0;}
var CK=F(0);
var AU3=null;var AWJ=null;var AU5=null;var AU4=null;var AU7=null;var AU6=null;var AU9=null;var AU8=null;var AU_=null;var AU$=null;var AVa=null;function ACY(){ACY=Bn(CK);ARg();}
function ARg(){AU3=HB(187);AWJ=O(C(255));AU5=HB(55);AU4=HB(43);AU7=D4(33,66,131);AU6=D4(60,63,65);AU9=O(C(256));AU8=O(C(257));AU_=E7(85,85,85,128);AU$=E7(43,43,43,0);AVa=O(C(103));}
function B8(){Cq.call(this);this.lV=null;}
var AWK=null;var AWL=null;var AWM=null;var AWN=null;var AWO=null;var AWP=null;var AWQ=null;var AWR=null;var AWS=null;var AWT=null;var AWU=null;var AWV=null;var AWW=null;var AWX=null;var AWY=null;var AVb=null;function ZP(){ZP=Bn(B8);AJM();}
function Dw(a,b,c){var d=new B8();Tr(d,a,b,c);return d;}
function AOQ(a,b,c,d){var e=new B8();AC6(e,a,b,c,d);return e;}
function Tr(a,b,c,d){ZP();Dt(a,b,c);a.lV=Hu(d,null);}
function AC6(a,b,c,d,e){ZP();Dt(a,b,c);a.lV=Hu(d,e);}
function AJM(){var b;b=new B8;ACY();Tr(b,C(224),0,AWJ);AWK=b;AWL=Dw(C(225),1,O(C(258)));AWM=Dw(C(227),2,O(C(259)));AWN=Dw(C(229),3,O(C(260)));AWO=Dw(C(231),4,O(C(258)));AWP=Dw(C(232),5,D4(188,63,60));AWQ=Dw(C(234),6,O(C(261)));AWR=Dw(C(236),7,O(C(262)));AWS=Dw(C(238),8,O(C(263)));AWT=AOQ(C(240),9,AWJ,D4(52,65,52));AWU=AOQ(C(241),10,O(C(242)),O(C(264)));AWV=Dw(C(244),11,O(C(235)));AWW=Dw(C(245),12,O(C(246)));AWX=Dw(C(247),13,AWJ);b=Dw(C(249),14,O(C(250)));AWY=b;AVb=G(B8,[AWK,AWL,AWM,AWN,AWO,AWP,AWQ,AWR,AWS,AWT,
AWU,AWV,AWW,AWX,b]);}
var Ds=F(0);
var AVf=null;var AVg=null;var AVc=null;var AVd=null;var AVe=null;var AWm=null;var AWn=null;var AVh=null;var AVi=null;function ALx(){ALx=Bn(Ds);AMw();}
function AMw(){AVf=O(C(265));AVg=O(C(266));AVc=O(C(218));AVd=O(C(267));AVe=O(C(255));AWm=O(C(265));AWn=O(C(266));AVh=E7(118,121,122,128);AVi=D4(63,66,68);}
var CT=F(0);
var AVj=null;var AWZ=null;var AVl=null;var AVk=null;var AVn=null;var AVm=null;var AVp=null;var AVo=null;var AVr=null;var AVq=null;var AVs=null;function AHZ(){AHZ=Bn(CT);APa();}
function APa(){AVj=HB(206);AWZ=O(C(268));AVl=O(C(269));AVk=O(C(112));AVn=O(C(270));AVm=O(C(271));AVp=O(C(272));AVo=O(C(273));AVr=E7(107,106,107,128);AVq=E7(30,31,34,0);AVs=O(C(114));}
function B7(){Cq.call(this);this.hN=null;}
var AW0=null;var AW1=null;var AW2=null;var AW3=null;var AW4=null;var AWh=null;var AW5=null;var AW6=null;var AW7=null;var AW8=null;var AW9=null;var AW$=null;var AW_=null;var AXa=null;var AXb=null;var AVt=null;function UJ(){UJ=Bn(B7);AKE();}
function Dx(a,b,c){var d=new B7();RU(d,a,b,c);return d;}
function ASn(a,b,c,d){var e=new B7();WB(e,a,b,c,d);return e;}
function RU(a,b,c,d){UJ();Dt(a,b,c);a.hN=Hu(d,null);}
function WB(a,b,c,d,e){UJ();Dt(a,b,c);a.hN=Hu(d,e);}
function AKE(){var b,c;b=new B7;AHZ();RU(b,C(224),0,AWZ);AW0=b;AW1=Dx(C(225),1,O(C(274)));AW2=Dx(C(227),2,O(C(275)));AW3=Dx(C(229),3,O(C(276)));AW4=Dx(C(231),4,AWZ);AWh=Dx(C(232),5,O(C(277)));AW5=Dx(C(234),6,O(C(278)));AW6=Dx(C(236),7,O(C(279)));AW7=Dx(C(238),8,O(C(280)));c=new B7;ACY();WB(c,C(240),9,AWJ,O(C(272)));AW8=c;AW9=ASn(C(241),10,AWJ,O(C(115)));AW$=Dx(C(244),11,O(C(281)));AW_=Dx(C(245),12,O(C(282)));AXa=Dx(C(247),13,AWZ);b=Dx(C(249),14,O(C(250)));AXb=b;AVt=G(B7,[AW0,AW1,AW2,AW3,AW4,AWh,AW5,AW6,AW7,
AW8,AW9,AW$,AW_,AXa,b]);}
var Dk=F(0);
var AVx=null;var AVy=null;var AVu=null;var AVv=null;var AVw=null;var AWo=null;var AWp=null;var AVz=null;var AVA=null;function AEJ(){AEJ=Bn(Dk);AM3();}
function AM3(){AVx=O(C(271));AVy=O(C(283));AVu=O(C(106));AVv=O(C(278));AVw=O(C(268));AWo=O(C(271));AWp=O(C(284));AVz=O(C(285));AVA=D4(43,45,48);}
function HX(){var a=this;B.call(a);a.s7=null;a.nS=null;a.o$=null;a.t0=null;a.qI=null;a.h0=null;}
function AXc(a,b,c,d,e,f){var g=new HX();L3(g,a,b,c,d,e,f);return g;}
function L3(a,b,c,d,e,f,g){a.s7=b;a.nS=c;a.o$=d;a.t0=e;a.qI=f;a.h0=g;}
function Ij(){var a=this;B.call(a);a.ps=null;a.lF=null;a.tT=null;}
function AXd(a,b,c){var d=new Ij();JJ(d,a,b,c);return d;}
function JJ(a,b,c,d){a.ps=b;a.lF=c;a.tT=d;}
function Wk(a,b){return !b?a.lF:a.tT;}
function Y7(){var a=this;B.call(a);a.k8=null;a.sG=null;a.u4=null;}
function ADC(a,b,c){var d=new Y7();AP2(d,a,b,c);return d;}
function AP2(a,b,c,d){a.k8=b;a.sG=c;a.u4=d;}
function HC(){var a=this;B.call(a);a.fH=0;a.lj=null;}
function UZ(){var a=this;B.call(a);a.yK=null;a.vf=null;a.fA=null;}
function FF(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.fA.data;f=e.length-1|0;g=f;while(true){if(d>g)return Ba(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.hp:i.hq;k=!c?i.mh:i.mi;if(j<=k&&k<(j+k|0))return h;j=BD(j,b);if(j<0)d=h+1|0;else{if(j<=0)break;g=h-1|0;}}return h;}
function Lo(){var a=this;B.call(a);a.hq=0;a.mi=0;a.hp=0;a.mh=0;a.j7=0;}
var YV=F();
function Cn(b,c){return DE(b*c);}
var Z7=F();
function TS(){var a=this;B.call(a);a.oy=null;a.td=null;a.t8=null;}
var Uo=F();
function AFy(a,b){ABV(b);}
function IX(){var a=this;B.call(a);a.er=null;a.eS=null;a.fj=null;}
var AVU=0;function ABV(a){var b;b=a.eS;if(b!==null){AVU=AVU-1|0;a.er.dO.deleteTexture(b);a.eS=null;}}
function Ci(a){return a.fj.a;}
function K6(a){return a.fj.b;}
function Tj(a,b,c,d){var e;e=a.fj;e.a=b;e.b=c;LE(a);a.er.dO.texStorage2D(3553,1,d,b,c);e=a.er.dO;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function LE(a){var b,c;b=a.er.dO;c=a.eS;b.bindTexture(3553,c);}
function Ex(a,b){var c,d,e,f,g,h;a:{c=b.lS;d=b.kZ;e=a.fj;f=e.a;if(f){g=e.b;if(g){if(f==c&&g==d?1:0){LE(a);break a;}e=a.er.dO;h=a.eS;e.deleteTexture(h);a.eS=a.er.dO.createTexture();Tj(a,c,d,32856);break a;}}Tj(a,c,d,32856);}P5(a,b,0,0);}
function Ra(a,b,c,d){LE(a);P5(a,b,c,d);}
function P5(a,b,c,d){var e;e=a.er.dO;b=b.hE;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Yi=F();
function EU(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function Y5(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function Un(){var a=this;B.call(a);a.bn=null;a.N=null;a.P=null;a.fR=null;}
function KD(a,b,c){var d;d=a.P;d.lD(b,c,d.eX);Ng(a);}
function Ng(a){var b,c,d,e;b=a.N;c=a.P.p.a;b.p.a=c;d=b.dh;if(d!==null&&c!=Ci(d)&&!(c>=b.h3&&Ci(b.dh)>=b.h3))b.gK=1;b=a.N;b.eX=a.bn.b1;if(VV(b))c=0;else{b=a.N;UU(b);e=Cl(b.e4,b.i6);Pk(b,Fv(b.eG)+(e*2|0)|0);c=b.p.b;}b=a.N.K;d=a.P.K;Bg(b,d.a,d.b-c|0);}
function Lk(b,c){if(b<0)c=C(286);else if(b>0)c=C(287);return c;}
function XB(a,b,c){var d;d=a.N.K.a;return (d-c|0)<=b&&b<d?1:0;}
function MJ(a,b,c){var d,e;d=a.N;e=d.K.a+d.p.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Pi(a,b,c){var d;d=a.N.K.b;return (d-c|0)<=b&&b<d?1:0;}
function Nx(a,b,c){var d,e;d=a.P;e=d.K.b+d.p.b|0;return e<=b&&b<(e+c|0)?1:0;}
function V2(a,b,c){var d,e,f;d=a.N.K.b-c|0;e=a.P;f=(e.K.b+e.p.b|0)+c|0;return d<=b&&b<f?1:0;}
function Wv(a,b,c){var d,e;d=a.N.K.b+c|0;e=a.P;return AAz(b,d,(e.K.b+e.p.b|0)-c|0);}
function Oc(a,b,c){var d,e,f;d=a.N;e=d.K.a;f=e-c|0;e=(e+d.p.a|0)+c|0;return f<=b&&b<e?1:0;}
function NF(a,b,c){var d,e;d=a.N;e=d.K.a;return AAz(b,e+c|0,(e+d.p.a|0)-c|0);}
function AAz(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BD(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function H0(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bj;f=new Bj;g=b.a;h=b.b;b=a.P;i=b.K;j=i.a;k=i.b;b=b.p;l=b.a;m=b.b;b=new Vw;b.tP=a;b.tR=e;b.tQ=f;b.tL=c;b.tK=g;b.tO=j;b.tM=l;b.t3=d;b.t2=h;b.t4=k;b.uv=m;return b;}
function SV(){var a=this;B.call(a);a.eV=null;a.b8=null;a.fo=null;a.f1=null;a.lU=null;a.ch=null;a.fI=null;a.cE=0;a.e0=0;a.mf=0;a.ii=0;a.iS=0;a.fU=0;a.ui=null;a.pA=null;a.wC=null;a.lC=null;}
function P4(a,b,c){a.eV=b;VC(a,c);Ld(a);}
function QG(a,b){var c;a.lU=b.iz;c=b.ku.lF;Ej(a.b8.da,c);c=b.hJ.k8;Ej(a.b8.gu,c);a.lC=b.ku;}
function VC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=LL(b);d=b.b1;BM(a.eV);CM(c,a.eV);e=PW(a.eV,1.25);f=0;a.cE=Cn(2.0,d);a.e0=Cn(3.0,d);a.mf=Cn(12.0,d);g=0;h=a.ch.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Kb(c,l.lf,0.875);n=a.mf;o=(n+m|0)+n|0;f=Z(f,o);b=l.em;b.a=g;b.b=0;b=l.dG;b.a=o;b.b=e;Cc(l.ib,g,0.0,o,k);g=g+o|0;j=j+1|0;}b=a.fo;b.a=g;b.b=e;b=a.b8.bp;o=a.fU;if(!o){m=a.cE;m=(g+m|0)+T(m,a.ch.data.length)|0;}else m=(f+(a.cE*2|0)|0)+(a.e0*2|0)|0;b.a=m;if(!o)e=e+(a.cE*2|0)|0;else{o=a.cE;e=(T(e+o|0,a.ch.data.length)
+o|0)+(a.e0*2|0)|0;}b.b=e;}
function Yw(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function ER(a){var b,c;b=a.fo;if(b.a&&b.b)return a.b8.bp;c=new Bt;Bp(c,C(288));L(c);}
function Ld(a){a.iS=1;}
function ADk(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.cS;if(!a.ch.data.length)return;if(a.fI===null)a.fI=GT(c);a:{if(!a.iS){d=a.fo;if(T(d.a,d.b))break a;}d=a.fo;if(!T(d.a,d.b))VC(a,b);d=a.fo;e=d.a;f=d.b;if(!T(e,f))return;d=E8(c,e,f,b.ca);CM(d,a.eV);g=PW(a.eV,0.125);h=a.eV;i=h.eh;g=g+i-(i+h.dT)/16.0;j=a.ch.data;e=j.length;f=0;while(f<e){h=j[f];Ev(d,h.lf,h.ib.bq+a.mf,g);f=f+1|0;}Ex(a.fI,d);a.iS=0;Iq(d);}if(!JL(a.b8)){d=a.b8;ZH(c,d.bp,d.ct,d.gu,a.cE,a.f1);d=a.b8;h=d.bp;k=d.ct;d=d.da;e=a.cE;l=a.f1;l.a=(h.a-e|0)
-e|0;l.b=(h.b-e|0)-e|0;BB(c,k.a+e|0,k.b+e|0,l,d);if(a.fU){d=a.b8;ABD(c,d.bp,d.ct,0,0,Pa(a.lU,b.b1),a.lU.lY,a.f1);}}j=a.ch.data;m=j.length;n=0;while(n<m){d=j[n];h=d.em;e=h.a;f=h.b;h=d.dG;k=d.ib;l=a.fI;o=a.lC;EE(c,e,f,h,k,l,o.ps,Wk(o,d.hI),b.ca);n=n+1|0;}b:{if(a.fU){j=a.ch.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.f1;e=(a.b8.bp.a-(a.cE*2|0)|0)-(a.e0*2|0)|0;h=d.dG;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.em;BB(c,k.a+h.a|0,k.b,b,Wk(a.lC,d.hI));}p=p+1|0;}}}}
function Ny(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.ch.data;if(c>=d.length)return (-1);e=d[c];if(EU(b,e.em,e.dG))return c;if(a.fU){f=e.em;g=f.a;e=e.dG;h=e.a;g=g+h|0;i=f.b;f=a.f1;f.a=(a.b8.bp.a-(a.cE*2|0)|0)-h|0;f.b=e.b;if(Y5(b,g,i,f))break;}c=c+1|0;}return c;}
function Nf(){B.call(this);this.qK=null;}
function AHA(a,b){var c,d;c=a.qK;Xg(c,D2(c,b.n));b=Be(c);d=c.c;KV(b,d.o,d.r);Gy(c);}
var Mo=F();
function AOX(a,b){b=b;b.bc=C4(b.bc,null);}
function PO(){var a=this;B.call(a);a.bc=null;a.jp=null;a.ey=null;a.dC=0;a.J=0;a.dt=null;a.ec=null;a.gj=0;a.nc=0;}
function Nn(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dC;i=T(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Z(i,e))a:{while(true){if(d<=e){j=d;break a;}Ft(c);j=d+(-1)|0;b=D8(d);d=T(j,a.J)%a.ey.b|0;FO(a,c,b,a.gj,g);Ra(a.bc,c,0,d);if(!(j%a.dC|0))break;d=j;}}else{Ft(b);k=a.dC-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;FO(a,b,D8(j),T(a.J,k)+a.gj|0,g);k=k+(-1)|0;j=h;}Ex(a.bc,b);j=Z(i,e);}return j;}k=a.dC;h=T(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Ba(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Ft(c);b=D8((d+f|0)+1|0);j=d+1|0;d=T(d,
a.J)%a.ey.b|0;FO(a,c,b,a.gj,g);Ra(a.bc,c,0,d);if(!(j%a.dC|0))break;d=j;}}else{Ft(b);d=0;while(d<a.dC){h=h+1|0;FO(a,b,D8((h>e?h-f|0:h)+f|0),T(a.J,d)+a.gj|0,g);d=d+1|0;}Ex(a.bc,b);j=Ba(i,e);}return j;}
function AAZ(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q;l=d/a.J|0;c=Ba((j+i|0)%e|0,c);Bg(a.dt,Ci(a.bc),a.J);e=d%K6(a.bc)|0;i=a.J;m=e/i|0;n=m+(c/i|0)|0;if(c%i|0)n=n+1|0;i=m;e=m;o=l;while(i<n){if(Lz(a,g,o,l+(i-m|0)|0,f,k)){p=T((i-e|0)+1|0,a.J);Bg(a.dt,Ci(a.bc),p);Cc(a.ec,0.0,T(e,a.J),Ci(a.bc),p);}else{q=Fu(f,g,o,k);c=e-m|0;e=a.J;Es(a,h,T(c,e)-(d%e|0)|0,b,k.eT,q);o=(l+i|0)-m|0;Bg(a.dt,Ci(a.bc),a.J);Cc(a.ec,0.0,T(i,a.J),Ci(a.bc),a.J);e=i;}i=i+1|0;}q=Fu(f,g,o,k);c=e-m|0;e=a.J;Es(a,h,T(c,e)-(d%e|0)|0,b,k.eT,q);}
function Lz(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Fu(e,b,c,f)!==f.gr?0:1;}
function Fu(b,c,d,e){c=c.data;return d<c.length&&c[d]?HV(b.du,b,c[d]):e.gr;}
function Es(a,b,c,d,e,f){EE(b,a.jp.a+d.a|0,c+d.b|0,a.dt,a.ec,a.bc,e,f,a.nc);}
function FO(a,b,c,d,e){Ev(b,c,a.ey.a-20.0*e,d);}
var AAg=F();
function N6(){B.call(this);this.nW=null;}
function AFH(a,b){C8(a.nW,b);}
var Dl=F(Bt);
var Ty=F(F1);
var Y_=F(0);
function Ye(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(Gf(b)){case -1655966961:if(!BE(b,C(33)))break a;c=4;break a;case 3401:if(!BE(b,C(31)))break a;c=3;break a;case 98723:if(!BE(b,C(34)))break a;c=2;break a;case 3254818:if(!BE(b,C(29)))break a;c=1;break a;case 3556653:if(!BE(b,C(21)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;default:d=Ed();e=new R;U(e);K(K(e,C(289)),b);Ct(d,S(e));c=0;break b;}c=0;}return c;}
function Vq(){B.call(this);this.p3=null;}
function ALP(a,b){var c,d,e,f;c=a.p3;if(c.eb!=3){b=b.data;d=CF(b[0]);e=Ei(b[1]);Mr(c.f,d,e,null,null);if(c.eD){b=Ea(c);f=JS(Ec(),c.tA);c=new R;U(c);K(FV(K(K(c,b),C(290)),f),C(37));$rt_globals.console.info($rt_ustr(S(c)));}}}
function ADA(){var a=this;B.call(a);a.jU=null;a.kc=null;a.d1=null;a.jZ=null;a.bk=null;a.lg=null;a.lp=null;a.eN=null;a.fl=null;a.g8=null;}
function AQ9(a,b){var c=new ADA();ALd(c,a,b);return c;}
function ALd(a,b,c){var d,e,f;a.d1=b;a.jZ=c;a.bk=AFY();b=new R;U(b);a.g8=b;a.eN=Ke();b=new SP;d=AC4(16);b.fd=0;b.dq=P(Hf,d);b.o8=0.75;Vj(b);a.fl=b;b=new Vn;c=a.bk;e=a.g8;f=a.eN;b.cT=c;b.jG=e;b.q3=f;a.lg=b;b=new Vf;b.cw=c;b.kP=e;b.pK=f;a.lp=b;}
function Nj(a){var b,c,d,e,f,g,h;a:{b=Jo(a.d1.d_);c=b.gE;if(c.cA>0){d=c.cy;e=0;b:while(true){f=b.gE.bX.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cn;if(I5(a.eN,g))B_(a.eN,g);else{h=a.eN;Ee(h,g,Cs(h.cA));}c=c.cu;if(d!=b.gE.cy)break b;}e=e+1|0;}b=new GB;X(b);L(b);}}b=a.d1.eO;if(b!==null)Rq(a,b);Bi(a.bk,a.d1.d_.cA);b=Su(Jo(a.d1.d_));while(EO(b)){c=O0(b);F$(a.bk,a.g8.H,H(c));CW(a.g8,c);}b=Su(Jo(a.d1.d_));while(EO(b)){c=O0(b);c=B_(a.d1.d_,c);Bi(a.bk,c.k);c=BO(c);while(BP(c)){g=BS(c);g=B_(a.eN,g);Bi(a.bk,
g.bd);}}if(a.d1.eO===null)Bi(a.bk,(-1));else{Bi(a.bk,a.fl.fd);SD(a,a.d1.eO);}if(a.jZ===null)Bi(a.bk,(-1));else{Bi(a.bk,1);YF(a.jZ,a.bk,a.fl);}a.jU=P8(a.bk);a.kc=E2(S(a.g8));}
function Rq(a,b){var c,d,e,f,g,h;if(VA(a.fl,b))LG(a.fl,b);else{c=a.fl;d=Cs(c.fd);if(b===null){e=Qt(c);if(e===null){c.jb=c.jb+1|0;e=VE(c,null,0,0);f=c.fd+1|0;c.fd=f;if(f>c.lk)Ne(c);}}else{g=Iy(b);h=g&(c.dq.data.length-1|0);e=Nl(c,b,h,g);if(e===null){c.jb=c.jb+1|0;e=VE(c,b,h,g);f=c.fd+1|0;c.fd=f;if(f>c.lk)Ne(c);}}e.cF=d;}b=b.cg;if(b===null)return;c=new Xw;c.pO=a;b.el(c);}
function SD(a,b){var c,d,e,f;c=(LG(a.fl,b)).bd;Bi(a.bk,c);if(b instanceof Ki)Bi(a.bk,(-1));else if(!(b instanceof JO))Bi(a.bk,0);else Bi(a.bk,1);d=a.lg;Bi(d.cT,b.dQ.cB());e=b.dQ;f=new L$;f.vS=d;e.el(f);d=a.lp;Bi(d.cw,b.eg.cB());e=b.eg;f=new UM;f.tG=d;e.el(f);d=b.ia;Bi(a.bk,d.cB());e=new VK;e.uy=a;d.el(e);d=b.fQ;Bi(a.bk,d.cB());d=d.bY();while(d.cf()){e=d.bR();M5(a.lg,e.ie);Gv(a.lp,e.i$);Bi(a.bk,e.pi);}d=b.tC;if(d===null)Bi(a.bk,(-1));else Bi(a.bk,(B_(a.eN,d)).bd);b=b.cg;Bi(a.bk,b.cB());d=new OT;d.m0=a;b.el(d);}
function Mq(){B.call(this);this.tU=null;}
function AD_(a,b){var c,d,e,f,g,h,i,j;c=a.tU;if(c.eD){d=Ea(c);e=new R;U(e);K(K(e,d),C(291));$rt_globals.console.info($rt_ustr(S(e)));}b=b.data;f=CF(b[0]);g=Ei(b[1]);h=(CF(b[2])).data[0];if(c.f.b0==h){i=null;j=null;if(b.length>=5){i=CF(b[3]);j=Ei(b[4]);}Mr(c.f,f,g,i,j);DJ(c.f.cM);DJ(c.f.cV);Jt(c.f);G3(c.f);LA(c);}}
function PX(){var a=this;B.call(a);a.qS=null;a.qU=null;a.qT=null;}
function AOh(a,b){VR(a.qS,a.qU,b,a.qT);}
function Sg(){var a=this;B.call(a);a.vy=null;a.vz=null;a.vx=0;}
function AHz(a,b){var c,d,e;c=a.vy;d=a.vz;e=a.vx;d.j(V1(c,(b.n.a+e|0)-c.dY.a|0));}
function Sf(){var a=this;B.call(a);a.pg=null;a.pe=null;a.pf=0;}
function AQa(a,b){var c,d,e;c=a.pg;d=a.pe;e=a.pf;d.j(PH(c,(b.n.b+e|0)-c.dY.b|0));}
var EC=F(0);
function No(){var a=this;B.call(a);a.ht=0;a.mj=0;a.iA=0;a.fY=0;a.gD=null;}
function BP(a){return a.ht>=a.iA?0:1;}
function BS(a){var b,c;Pb(a);b=a.ht;a.fY=b;c=a.gD;a.ht=b+1|0;return c.lu(b);}
function Q$(a){var b,c,d;if(a.fY<0){b=new Dl;X(b);L(b);}Pb(a);a.gD.mo(a.fY);a.mj=a.gD.bO;c=a.fY;d=a.ht;if(c<d)a.ht=d-1|0;a.iA=a.iA-1|0;a.fY=(-1);}
function Pb(a){var b;if(a.mj>=a.gD.bO)return;b=new GB;X(b);L(b);}
function Xd(){B.call(this);this.o9=null;}
function AFE(a){return Rl(a.o9);}
function Xc(){B.call(this);this.pN=null;}
function AMl(a){return Rl(a.pN);}
function SM(){B.call(this);this.x3=null;}
function AMQ(a){return ADM(0);}
var AB6=F();
var ACg=F();
function Rv(){B.call(this);this.na=null;}
function APO(a,b){GO(a.na,b);}
function Nk(){B.call(this);this.pn=null;}
function AKB(a,b){GO(a.pn,b);}
function VO(){B.call(this);this.r6=null;}
function AQD(a,b){var c,d,e,f;c=a.r6;if(c.gd!=3&&c.eb!=3){b=b.data;c.gt=3;d=CF(b[0]);e=Ei(b[1]);K5(c.f,d,e);if(c.eD){b=Ea(c);f=JS(Ec(),c.hs);c=new R;U(c);K(FV(K(K(c,b),C(292)),f),C(37));$rt_globals.console.info($rt_ustr(S(c)));}}}
function Qc(){B.call(this);this.rH=null;}
function AFN(a,b){var c,d,e,f,g,h;c=a.rH;if(c.eb!=3){d=b.data;c.gd=3;if((CF(d[2])).data[0]!=1)GO(c,b);else{e=CF(d[0]);f=Ei(d[1]);g=c.gt!=3?0:1;QP(c.f,e,f,g);if(c.eD){b=Ea(c);h=JS(Ec(),c.hs);c=new R;U(c);K(FV(K(K(c,b),C(293)),h),C(37));$rt_globals.console.info($rt_ustr(S(c)));}}}}
function M1(){var a=this;B.call(a);a.qH=0;a.qG=0;}
function ACR(){var a=this;B.call(a);a.gM=null;a.ll=0;a.eZ=0;}
function AFY(){var a=new ACR();AQ8(a);return a;}
function AQ8(a){a.ll=0;a.gM=By(16);a.eZ=0;}
function F$(a,b,c){Bi(a,b);Bi(a,c);}
function Bi(a,b){var c,d;c=a.gM;d=c.data.length;if(d==a.eZ)a.gM=Ip(c,d*2|0);c=a.gM.data;d=a.eZ;a.eZ=d+1|0;c[d]=b;}
function P8(a){var b,c,d,e,f;b=a.ll;if(b&&a.eZ!=b){c=Ed();b=a.ll;d=a.eZ;e=new R;U(e);K(Bl(K(Bl(K(e,C(294)),b),C(295)),d),C(296));Ct(c,S(e));}f=a.gM;b=f.data.length;d=a.eZ;if(b!=d)f=Ip(f,d);return f;}
function SP(){var a=this;DB.call(a);a.fd=0;a.dq=null;a.jb=0;a.o8=0.0;a.lk=0;}
function AC4(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Vj(a){a.lk=a.dq.data.length*a.o8|0;}
function VA(a,b){return Xh(a,b)===null?0:1;}
function LG(a,b){var c;c=Xh(a,b);if(c===null)return null;return c.cF;}
function Xh(a,b){var c,d;if(b===null)c=Qt(a);else{d=Iy(b);c=Nl(a,b,d&(a.dq.data.length-1|0),d);}return c;}
function Nl(a,b,c,d){var e;e=a.dq.data[c];while(e!==null&&!(e.lh==d&&(b!==e.cn?0:1))){e=e.gI;}return e;}
function Qt(a){var b;b=a.dq.data[0];while(b!==null&&b.cn!==null){b=b.gI;}return b;}
function VE(a,b,c,d){var e,f;e=new Hf;XA(e,b,null);e.lh=d;f=a.dq.data;e.gI=f[c];f[c]=e;return e;}
function Ne(a){var b,c,d,e,f,g,h,i;b=a.dq.data.length;b=AC4(!b?1:b<<1);c=P(Hf,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dq.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.lh&f;i=h.gI;h.gI=d[b];d[b]=h;h=i;}e=e+1|0;}a.dq=c;Vj(a);}
function Vn(){var a=this;B.call(a);a.cT=null;a.jG=null;a.q3=null;}
function M5(a,b){var c;if(!(b instanceof LH)){Bi(a.cT,3);Ww(a,b);Bi(a.cT,b.gT);}else{c=b;Bi(a.cT,5);Ww(a,c);Bi(a.cT,c.gT);Bi(a.cT,c.mO);b=c.jr;Bi(a.cT,b.k);c=new MT;c.n7=a;DY(b,c);}}
function Ww(a,b){var c;c=b.dS.g4;F$(a.cT,a.jG.H,H(c));Bi(a.cT,b.dS.c4);Mi(a,b.jd);CW(a.jG,c);}
function Mi(a,b){if(b===null)Bi(a.cT,(-1));else Bi(a.cT,(B_(a.q3,b)).bd);}
function Vf(){var a=this;B.call(a);a.cw=null;a.kP=null;a.pK=null;}
function Gv(a,b){var c,d,e;if(b instanceof FR){c=b;Bi(a.cw,9);PV(a,c.gg);}else if(b instanceof H_){d=b;Bi(a.cw,3);Qx(a,d);Bi(a.cw,d.nb);PV(a,d.gs);}else if(b instanceof Iu){e=b;Bi(a.cw,4);Gv(a,e.hj);Gv(a,e.gv);}else if(b===null)Bi(a.cw,(-1));else{Bi(a.cw,5);Qx(a,b);Bi(a.cw,b.sK);}}
function Qx(a,b){var c;c=b.eJ.g4;F$(a.cw,a.kP.H,H(c));Bi(a.cw,b.eJ.c4);b=b.fc;if(b===null)Bi(a.cw,(-1));else Bi(a.cw,(B_(a.pK,b)).bd);CW(a.kP,c);}
function PV(a,b){var c;Bi(a.cw,b.k);c=new XF;c.oe=a;DY(b,c);}
function S4(){B.call(this);this.ql=null;}
function AOH(a,b){var c;c=a.ql;C8(c,b);Jj(c,null);Xe(c);}
var ABz=F();
function AMS(b,c){return {oldModelUrl:b,newModelUrl:c};}
function T1(){var a=this;B.call(a);a.rU=0;a.wr=0;}
function Ha(a,b){return P3(a.rU,b,a.wr);}
var D1=F(Bt);
function Nz(){var a=this;B.call(a);a.mZ=null;a.qC=null;a.ux=0;a.vU=0;}
function Lf(a,b){return EH(a.qC)<b?0:1;}
function Tu(){B.call(this);this.uF=null;}
function AK9(a,b){GO(a.uF,b);}
function Tv(){B.call(this);this.tl=null;}
function AMU(a,b){GO(a.tl,b);}
var AC1=F();
function T4(b,c,d,e){var f,g;f=b.next();g=new WX;g.ni=b;g.nh=c;g.nk=d;g.nj=e;f.then(Bm(g,"f"),Bm(d,"f"));}
function YD(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ADz(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Fc()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new WU;f.rm=b;f.rn=d;d.addEventListener("change",Bm(f,"handleEvent"));d.click();}
function YM(b,c){var d;if(c.isFile?1:0)b.j(X8(c.file()));else{c=c.createReader();d=new WE;d.uI=b;c.readEntries(Bm(d,"f"));}}
function S9(){var a=this;B.call(a);a.bh=null;a.oz=null;a.gy=null;a.mw=null;a.jy=null;a.eR=null;}
function F8(a){return a.bh.bD.fz;}
function XK(a){var b;b=new SO;b.vB=a;return b;}
function AAq(a){var b,c,d,e,f;b=P(Dn,5);c=b.data;d=a.bh;BM(d);e=new Xs;e.sM=d;c[0]=CB(C(297),e);e=a.bh;BM(e);f=new Xn;f.oi=e;c[1]=CB(C(298),f);d=a.bh;BM(d);e=new Xo;e.pt=d;c[2]=CB(C(299),e);d=a.bh;BM(d);e=new Xp;e.vv=d;c[3]=CB(C(300),e);d=a.bh;BM(d);e=new Xq;e.m5=d;c[4]=CB(C(301),e);return GR(b);}
function O_(a,b){var c;c=new N3;c.v6=a;c.v7=b;return c;}
function IZ(a,b,c){var d,e,f,g,h,i,j;a:{Dv(a.eR.bU);d=a.bh.c;e=DT(d);f=FK(d);g=a.bh.cv;if(c===null)h=null;else{AS7();switch(AXe.data[c.gf]){case 1:h=LJ(g,e,f);break a;case 2:h=QH(g,e,f);break a;default:}b=new Fl;X(b);L(b);}}c=a.bh;f=D2(c,b);e=Gw(c.c.f,f.U,f.bb);g=Kw(c,e);if(h!==null){e=c.c;i=f.U;j=f.bb;f=new TC;f.ry=c;f.rx=b;f.rw=g;h.lo(e,i,j,f,c.hF);}else{f=B_(c.c.f.cV,e);if(f!==null)HE(c,f);else{f=B_(c.c.f.cM,e);if(f!==null&&!DG(f))Q8(c.eE,b,f,c,g);else Ka(c.eE,b,c);}}}
var Y1=F(0);
var QL=F(0);
var Np=F(0);
var GD=F();
function So(){GD.call(this);this.tY=null;}
function Uj(a,b){var c,d,e;c=0;while(true){d=a.tY;if(d.h6===null)d.h6=BO(d.pT);if(!BP(d.h6))e=0;else{c=b.co(BS(d.h6));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var QB=F(0);
function TD(){B.call(this);this.IY=null;}
var AWc=null;function SQ(b){return b===null?C(3):UY(b);}
function WO(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=d.c;f=Bz();g=c!==null?c.data.length:b.k;h=0;while(h<g){if(c===null){i=(Bs(b,h)).U;j=RZ(EI(BK(e.f,i)));k=SQ(e.c9);}else{l=c.data;i=l[h].fX.e5;j=!BJ(e.c9,l[h].g9)?C(3):RZ(EI(BK(e.f,i)));k=SQ(l[h].g9);}if(H(j)>153){m=B9(j,0,150);j=new R;U(j);K(K(j,m),C(55));j=S(j);}if(H(k)>153){k=B9(k,0,150);m=new R;U(m);K(K(m,k),C(55));k=S(m);}n=D8(i+1|0);if(c!==null){l=c.data;o=null;p=l[h];}else{p=null;o=Bs(b,h);}if(c!==null){m=new WH;m.qr=d;m.qs=p;}else{m=new WI;m.vu=d;m.vt=o;}o
=new JN;o.sL=m;o.iw=n;o.iI=j;o.fJ=k;Bw(f,o);h=h+1|0;}return Hj(f,AWc);}
function ADc(){AWc=P(JN,0);}
function Rn(){var a=this;B.call(a);a.n8=null;a.n4=null;a.n5=0;a.n6=0;}
function Hf(){var a=this;F4.call(a);a.lh=0;a.gI=null;}
var GB=F(Bt);
var WZ=F();
function AOv(a,b){YD(b);}
function WY(){var a=this;B.call(a);a.qF=null;a.qE=null;}
function AG4(a,b){var c,d,e,f,g,h,i;c=a.qF;d=a.qE;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new Qd;i.oL=c;i.oK=g;h.then(Bm(i,"f"),Bm(d,"f"));e=e+1|0;}}
var Wf=F();
function AIM(a,b){YD(b);}
function We(){var a=this;B.call(a);a.p4=null;a.p5=null;}
function AJA(a,b){var c,d,e,f,g;c=a.p4;d=a.p5;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=P(Bv,1);g.data[0]=Ce(b.name);T4(f,c,d,g);}
function Yv(){B.call(this);this.Em=null;}
function WU(){var a=this;B.call(a);a.rm=null;a.rn=null;}
function AIy(a,b){var c,d,e,f,g,h;b=a.rm;c=a.rn;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new Mw;h.m$=b;h.m9=g;$rt_globals.setTimeout(Bm(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=X8(d.item(f));g=new Md;g.sQ=b;g.sR=c;$rt_globals.setTimeout(Bm(g,"onTimer"),0);f=f+1|0;}}
function JN(){var a=this;B.call(a);a.sL=null;a.iw=null;a.iI=null;a.fJ=null;}
function Ji(){var a=this;B.call(a);a.g9=null;a.fX=null;}
function L5(){var a=this;B.call(a);a.iv=0;a.je=0;a.fC=0;a.e5=0;}
function WH(){var a=this;B.call(a);a.qr=null;a.qs=null;}
function AE$(a){Sa(a.qr,a.qs);}
function WI(){var a=this;B.call(a);a.vu=null;a.vt=null;}
function AJf(a){HE(a.vu,a.vt);}
function E0(){var a=this;B.call(a);a.f0=null;a.cg=null;a.eg=null;a.dQ=null;a.fQ=null;a.ia=null;a.tC=null;}
function ARF(a){var b=new E0();ABh(b,a);return b;}
function ABh(a,b){a.f0=b;a.cg=Bz();a.eg=Bz();a.dQ=Bz();a.ia=Bz();a.fQ=Bz();}
function W5(a){var b;b=a.f0;if(b!==null)b.cg.nM(a);}
function Xw(){B.call(this);this.pO=null;}
function AID(a,b){b=b;Rq(a.pO,b);}
var Ki=F(E0);
var JO=F(E0);
function VK(){B.call(this);this.uy=null;}
function AFd(a,b){var c;b=b;c=a.uy;Bi(c.bk,(B_(c.eN,b)).bd);}
function PR(){var a=this;B.call(a);a.ie=null;a.i$=null;a.pi=0;}
function OT(){B.call(this);this.m0=null;}
function ALr(a,b){b=b;SD(a.m0,b);}
function Qz(){var a=this;B.call(a);a.j9=0;a.qg=null;}
function ARw(a,b){var c,d,e;c=a.qg;b=b;d=c.qH;e=c.qG;d=b.a<=d&&e<=b.b?1:0;a.j9=d;return d?0:1;}
var Xt=F(D1);
var Q0=F(Bt);
var VP=F(Bt);
function Ph(){B.call(this);this.rF=null;}
function AMP(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.rF;d=CF(c[0]);e=(CF(c[1])).data[0];if(!TF(b.f)){c=b.f;if(c.b0==e){e=b.mT;f=Lp(d);DJ(c.cV);DJ(c.cM);Jt(c);while(f.ei>=f.gP.data.length?0:1){if(V(f)==(-1))continue;g=Xl(c,V(f));h=Lv(BK(c,g.U),g.bb);if(V(f)==(-1)){if(!e)continue;h.bP=0;h.bJ=h.bJ|4;continue;}i=Xl(c,V(f));j=V(f);k=V(f);Ee(c.cV,g,i);l=c.cM;m=Bz();if(B_(l,i)===null)Ee(l,i,m);Bw(B_(c.cM,i),g);h.bP=j;h.bJ=k;}Ku(b);if(b.xp){n=JS(Ec(),b.uS);if(AR8(n,BL(100))){b=Ea(b);c=new R;U(c);K(FV(K(K(c,b),
C(302)),n),C(37));$rt_globals.console.info($rt_ustr(S(c)));}}}}}
function ADX(){B.call(this);this.H0=null;}
function Wa(){B.call(this);this.mp=null;}
var AWf=null;function Tc(){var a=new Wa();Zf(a);return a;}
function Zf(a){a.mp=Bz();}
function DF(a,b,c){OQ(a,CB(b,c));}
function CB(b,c){return Nq(c,b);}
function Fg(a,b,c){HR(a,b,c,null);}
function HR(a,b,c,d){OQ(a,ASN(null,b,c,d));}
function OQ(a,b){Bw(a.mp,b);}
function HF(a){return GR(Hj(a.mp,AWf));}
function Yp(){AWf=P(Dn,0);}
function Qq(){var a=this;B.call(a);a.nn=null;a.no=null;}
function ARy(a){var b,c;b=a.nn;c=a.no;Fn(b.d$,c);}
function Vm(){B.call(this);this.s6=null;}
function Qi(){var a=this;B.call(a);a.pT=null;a.h6=null;}
function EF(){var a=this;B.call(a);a.K=null;a.p=null;a.eX=0.0;}
function ARz(){var a=new EF();K_(a);return a;}
function K_(a){a.K=new Bj;a.p=new Bj;}
function ANX(a){}
function ABF(a){return Cg(0,0);}
function Rt(a,b,c,d){var e;if(!HO(a.K,b)){a.o4(b);Cw(a.K,b);}if(!HO(a.p,c)){a.oI(c);Cw(a.p,c);}e=a.eX;if(e!==d){a.eX=d;a.qu(e,d);}}
function Dj(a,b){return EU(b,a.K,a.p);}
function AP0(a,b){var c,d,e,f;c=a.K;d=c.a;e=c.b;f=a.p;ASz();BB(b,d,e,f,AXf);}
function AKT(a,b){}
function AQw(a,b){}
function AN5(a,b,c){}
function AQJ(a){}
function AJj(a,b,c,d){return 0;}
function AF5(a,b,c){return null;}
function ALJ(a,b,c){return 0;}
function AQc(a,b){return 0;}
function ANT(a,b,c,d){return 0;}
function IK(){var a=this;EF.call(a);a.cO=null;a.bH=null;a.gn=null;}
function UV(a,b){a.bH.a=IQ(a,b);}
function XO(a,b){a.bH.b=Lq(a,b);}
function Lq(a,b){return Z(0,Ba(b,a.cO.b-a.p.b|0));}
function IQ(a,b){return Z(0,Ba(b,a.cO.a-a.p.a|0));}
function Qw(){var a=this;IK.call(a);a.bG=null;a.dw=null;a.gm=null;a.uf=null;a.dN=null;a.bW=null;a.dV=null;a.eB=null;a.c3=0;a.ew=0;a.v8=null;a.dr=0;a.d5=0;a.fw=0;a.e1=0;a.eP=0;a.cq=0;a.dW=null;a.ij=null;a.q0=null;a.gV=null;}
function Pd(a){a.c3=Cn(2.0,a.bG.b1);}
function WS(a){return a.bW.data.length?0:1;}
function TA(a){Bg(a.gm,0,0);}
function AQb(a){a.eB=C4(a.eB,null);Bg(a.gm,0,0);DJ(a.gV);a.dW=null;a.bW=AWc;a.dV=null;a.dr=0;a.d5=0;a.fw=0;Tf(a.dw);a.ij=null;}
function AHh(a,b,c){Py(a);Pd(a);a.dN=null;a.dW=null;a.ew=0;}
function Yj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=LL(a.bG);if(WS(a))return;Jp(a);CM(c,a.dN);d=DM(a);e=Yd(c,a.ew);f=Ba(H7(a.p.b,d),a.bW.data.length)+30|0;g=a.q0.vN;h=a.dV.data;d=h.length;if(d<f){a:{i=a.e1;j=a.eP;k=a.bW;l=a.dW;m=a.gV;n=P(HZ,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.ft!==c){Vl(l,q,m);o[f]=IO(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=IO(c,l,e,m);i=i+1|0;}}else if(f>0)
{r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=IO(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){Vl(l,c,m);h[f]=null;}f=f+1|0;}a.dV=n;Cw(a.gm,M2(a.dW));PS(a,a.bG.cS);}a.e1=Ba((a.bH.b+a.c3|0)/(DM(a)+a.c3|0)|0,a.bW.data.length-1|0);a.eP=Ba((((a.bH.b+a.dw.bp.b|0)-1|0)+a.c3|0)/(DM(a)+a.c3|0)|0,a.bW.data.length-1|0);if(!a.dV.data.length)return;X2(a,e);c=a.K;UD(b,c.a,c.b,a.p);q=g.t0;c=a.K;BB(b,c.a,c.b,a.p,q);c=a.dw.ct;i=c.a;j=c.b;p=Cl(a.bG,2.0);s=a.bG.dk;t=a.e1;u=i+p|0;while(t<=a.eP){l=OR(a,
t);d=T(t,DM(a));v=t+1|0;w=d+T(v,a.c3)|0;x=u+a.dr|0;y=x+a.d5|0;z=a.cq!=t?0:1;m=!z?q:g.qI;ba=!z?g.s7:g.h0;bb=!z?g.nS:g.h0;bc=!z?g.o$:g.h0;bd=(j+w|0)-a.bH.b|0;EE(b,u,bd,l.gU,l.rY,a.eB,ba,m,a.bG.ca);EE(b,x,bd,l.hx,l.hX,a.eB,bb,m,a.bG.ca);EE(b,y,bd,l.gW,l.i7,a.eB,bc,m,a.bG.ca);d=l.gU.a;be=u+d|0;Bg(s,Z(0,a.dr-d|0),l.gU.b);BB(b,be,bd,s,m);d=u+a.dr|0;f=l.hx.a;bf=d+f|0;Bg(s,Z(0,a.d5-f|0),l.hx.b);BB(b,bf,bd,s,m);d=l.gW.a;bg=y+d|0;Bg(s,Z(0,(((a.dw.bp.a-d|0)-a.d5|0)-a.dr|0)-p|0),l.gW.b);BB(b,bg,bd,s,m);bh=(i+a.p.a|0)-p
|0;Bg(s,p,DM(a)+a.c3|0);BB(b,bh,bd,s,q);t=v;}Le(b);}
function X2(a,b){var c,d,e,f,g,h;c=0;d=a.e1;while(d<=a.eP){e=OR(a,d);if(!(e!==null&&e.ft===a.bW.data[d])){f=a.dV.data;g=a.bW;e=a.dW;h=a.gV;c=d%f.length|0;if(f[c]!==null)Vl(e,f[c],h);f[c]=IO(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cw(a.gm,M2(a.dW));PS(a,a.bG.cS);}}
function PS(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.gm;c=E8(b,c.a+150|0,c.b,a.bG.ca);CM(c,a.dN);d=a.dN;e=d.eh;f=e-(e+d.dT)/16.0;g=a.dV.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.ft.iw;k=d.hX;Ev(c,j,k.bq+a.ew,f+k.bI);j=d.ft.iI;d=d.i7;Ev(c,j,d.bq+a.ew,f+d.bI);}i=i+1|0;}a:{d=a.gV;if(d.cA>0){h=d.cy;i=0;b:while(true){g=d.bX.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cn;l=j.cF;k=k;l=l.jc;Ev(c,k,l.bq+a.ew,f+l.bI);j=j.cu;if(h!=d.cy)break b;}i=i+1|0;}b=new GB;X(b);L(b);}}if(a.eB===null)a.eB=GT(b);Ex(a.eB,
c);Iq(c);}
function OR(a,b){var c;c=a.dV.data;return c[b%c.length|0];}
function ANm(a,b){Cw(a.dw.bp,b);}
function AO0(a,b){Cw(a.dw.ct,b);}
function Pg(a){var b,c;Jp(a);b=DM(a);c=a.bW.data.length;b=T(b,c)+T(a.c3,c+1|0)|0;Bg(a.cO,a.p.a,b);}
function Py(a){var b,c,d,e,f,g,h,i,j;b=LL(a.bG);if(WS(a))return;Jp(a);CM(b,a.dN);c=Yd(b,a.ew);d=a.bW.data;e=d.length;f=0;while(f<e){g=d[f];h=Hw(c,g.fJ);i=Hw(c,g.iw);j=Hw(c,g.iI);a.dr=Z(a.dr,h);a.d5=Z(a.d5,i);a.fw=Z(a.fw,j);f=f+1|0;}}
function Vk(a,b){I0(a.ij);b.sL.s();}
function Sp(a,b){var c,d,e;if(!a.dV.data.length)return (-1);c=DM(a);d=(b.b-a.K.b|0)+a.bH.b|0;e=a.c3;e=(d+e|0)/(c+e|0)|0;if(e<a.bW.data.length)return e;return (-1);}
function DM(a){return Fv(a.dN);}
function Jp(a){var b;if(a.dN===null){b=Ik(a.bG,a.uf);a.dN=b;a.dW=AFl(Fv(b));a.ew=DE(a.dN.l8);}}
function APg(a,b){var c,d,e;a:{switch(b.bQ){case 13:Vk(a,a.bW.data[a.cq]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cq=a.e1;b=a.gn;c=a.bH;In(b,c.a,c.b-(a.p.b/2|0)|0);return 0;case 34:a.cq=a.eP;b=a.gn;c=a.bH;In(b,c.a,c.b+(a.p.b/2|0)|0);return 0;case 35:case 39:a.cq=a.bW.data.length-1|0;break a;case 36:case 37:a.cq=0;break a;case 38:d=a.cq;e=a.bW.data.length;a.cq=((d+e
|0)-1|0)%e|0;break a;case 40:a.cq=(a.cq+1|0)%a.bW.data.length|0;break a;default:break a;}I0(a.ij);return 0;}e=a.cq;if(e<=a.e1)In(a.gn,a.bH.a,T(e,DM(a))+T(a.cq,a.c3)|0);else if(e>=a.eP)In(a.gn,a.bH.a,(T(e+1|0,DM(a))+T(a.cq+2|0,a.c3)|0)-a.p.b|0);return 0;}
function Qj(){var a=this;B.call(a);a.mU=null;a.mV=null;}
function I0(a){var b,c;b=a.mU;c=a.mV;Fn(b.d$,c);S7(b);}
function PQ(){var a=this;EF.call(a);a.mx=null;a.o6=null;a.t5=null;a.br=null;a.cQ=null;a.cW=null;a.u3=0.0;a.vO=null;a.vK=null;}
function AOW(a){var b;b=a.br;b.gn=null;a.br=C4(b,null);}
function AIL(a,b,c,d){Rt(a,b,c,d);Rt(a.br,b,c,d);if(d!==0.0){Pg(a.br);b=a.br;c=b.bH;c.a=IQ(b,c.a);c=b.bH;c.b=Lq(b,c.b);if(Vz(a))H2(a);else a.cW=null;if(Oo(a))G2(a);else a.cQ=null;}}
function In(a,b,c){var d;d=a.br;d.bH.a=IQ(d,b);d.bH.b=Lq(d,c);if(Vz(a))H2(a);if(Oo(a))G2(a);}
function Oo(a){var b;b=a.p.b;return b>0&&a.br.cO.b>b?1:0;}
function Vz(a){var b;b=a.p.a;return b>0&&a.br.cO.a>b?1:0;}
function H2(a){var b,c,d,e,f,g;b=a.cW;if(b===null)b=U1();a.cW=b;QU(a,b);c=a.cW;b=a.br;d=b.bH.a;e=a.K;f=e.a;g=a.p;QM(c,d,f,g.a,b.cO.a,e.b+g.b|0,LN(a));}
function G2(a){var b,c,d,e,f,g;b=a.cQ;if(b===null)b=U1();a.cQ=b;QU(a,b);c=a.cQ;b=a.br;d=b.bH.b;e=a.K;f=e.b;g=a.p;W2(c,d,f,g.b,b.cO.b,e.a+g.a|0,LN(a));}
function LN(a){return Cn(a.u3,a.eX);}
function QU(a,b){var c,d;c=a.vO;d=a.vK;if(!(c!==null&&d!==null?(JU(b.hR,c)&&JU(b.hS,d)?1:0):0))Gu(b,c,d);}
function AN_(a,b){var c;Yj(a.br,b);if(!(a.cQ===null&&a.cW===null)){Dg(b,1);c=a.cQ;if(c!==null)Hy(c,b);c=a.cW;if(c!==null)Hy(c,b);c=a.cQ;if(c!==null)HH(c,b);c=a.cW;if(c!==null)HH(c,b);Dg(b,0);}}
function T2(a,b){var c,d;a:{b:{c=a.cQ;if(!(c!==null&&Hl(c,b))){c=a.cW;if(c===null)break b;if(!Hl(c,b))break b;}d=1;break a;}d=0;}return d;}
function APs(a,b,c,d){var e;if(!T2(a,b.n)){e=a.br;if(d==1){c=Sp(e,b.n);if(c>=0)Vk(e,e.bW.data[c]);}}return 1;}
function AOZ(a,b,c){var d;d=a.cQ;if(d!==null){d=HM(d,b.n,a.o6,1);if(d!==null)return d;}d=a.cW;if(d!==null){d=HM(d,b.n,a.t5,0);if(d!==null)return d;}d=a.br;if(!Hx(d.dw,b.n)&&!JL(d.dw)){b=d.v8;if(b!==null)I0(b);}return null;}
function AL8(a,b,c){return T2(a,b.n)?1:0;}
function ALQ(a,b){var c,d,e;c=a.cQ;d=c!==null&&H3(c,b.n,a.mx)?1:0;c=a.cW;e=c!==null&&H3(c,b.n,a.mx)?1:0;a:{if(!d&&!e){c=a.br;d=Sp(c,b.n);if(d>=0)c.cq=d;if(!(Hx(c.dw,c.K)&&Fw(c.bG.df)?1:0)){d=0;break a;}}d=1;}return d;}
function AHV(a,b,c,d){var e,f;if(!Dj(a,b.n))return 0;e=Cn(d*0.25,a.eX);f=Cn(c*0.25,a.eX);if(b.bC){f=f+e|0;e=0;}if(a.cQ!==null&&e){b=a.br;XO(b,b.bH.b+e|0);G2(a);}if(a.cW!==null&&f){b=a.br;UV(b,b.bH.a+f|0);H2(a);}return 1;}
function AQR(a){var b,c;b=LN(a);c=ABF(a.br);c.a=Z(c.a,b);c.b=Z(c.b,b);return c;}
function Gn(){var a=this;B.call(a);a.dI=0;a.dU=0;a.k3=null;a.ma=0;a.fp=null;}
function APh(a,b,c,d,e,f){var g=new Gn();AKD(g,a,b,c,d,e,f);return g;}
function AKD(a,b,c,d,e,f,g){a.dI=b;a.dU=c;a.k3=Cg(f,g);a.ma=d;a.fp=e;}
var Pv=F();
var AXg=null;function K5(b,c,d){QP(b,c,d,0);}
function QP(b,c,d,e){NZ(b,c,d,null,null,e);}
function NZ(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=Lp(c);i=V(h);j=V(h);k=V(h);l=Cb(b);c=b.v;if(c.data.length<i)b.v=Zv(c,i);m=0;while(m<i){if(g&&m<l){n=4*V(h)|0;h.ei=h.ei+n|0;}else b.v.data[m]=Dq(Qk(h,d,0));m=m+1|0;}Jt(b);if(j)b.cx=ACu(ADG(h));DJ(b.cV);DJ(b.cM);o=b.cV;g=0;while(g<k){Ee(o,Dp(V(h),V(h)),Dp(V(h),V(h)));g=g+1|0;}p=b.cV;o=b.cM;q=N7(UG(p));while(EO(q)){r=W3(q);s=r.cn;p=r.cF;BM(AXg);r=B_(o,p);if(r===null){r=Bz();Ee(o,p,r);}Bw(r,s);}if(o.ks===null){p=new Pf;p.v3=o;o.ks=p;}p=o.ks;r=new Rh;Ko(r,
p.v3);while(EO(r)){KS(r);o=r.fO.cF;p=AUR;c=P(B,o.k);d=c.data;Hj(o,c);ZV(c,p);g=0;t=d.length;while(g<t){p=d[g];IF(o,g);o.ck.data[g]=p;g=g+1|0;}}QC(h);if(e!==null&&f!==null){p=ALB(e,f);Od(p);b.dX=AGA(p.kT,p.hh);b.cx=ACu(p.lz);}}
function Mr(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Lp(c);i=V(h);j=V(h);k=V(h)!=1?0:1;l=V(h);m=V(h);n=Wt(b,i);o=Wt(b,j);p=(Hr(BK(b,n.a),n.b)).data[0].l;q=(Hr(BK(b,o.a),o.b)).data[1].l;r=0;s=l-1|0;while(r<l){g=Qk(h,d,i);if(!r)g=Vg(p,g);if(r==s)g=Vg(g,q);t=n.a+r|0;u=Dq(g);c=b.v.data;v=c[t];c[t]=u;if(!k&&G0(v)==G0(u)){t=0;while(t<G0(v)){w=v.l.data[t];o=u.l.data[t];x=w.bP;if(x!=5&&x&&!o.bP){o.bP=x;o.bJ=w.bJ;}t=t+1|0;}}r=r+1|0;}if(k){if(m){w=ADG(h);v=Jb(i,j,
(-1));NE(b.cx,v,w);}else if(e!==null&&f!==null){u=ALB(e,f);Od(u);v=Jb(i,j,(-1));NE(b.cx,v,u.lz);n=b.dX;n.eO=b.cx.cJ.b2;n.d_=u.hh;}}QC(h);}
function Qk(b,c,d){var e,f,g,h,i,j,k,l;e=V(b);f=P(B$,e);g=f.data;h=0;while(h<e){i=V(b);j=V(b);k=V(b);l=V(b);g[h]=DA(DV(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function ACf(){AXg=new WD;}
var O1=F(0);
var Er=F(Ey);
function Pe(){Er.call(this);this.gE=null;}
function Su(a){var b;b=new ST;Ko(b,a.gE);return b;}
function L$(){B.call(this);this.vS=null;}
function AHO(a,b){b=b;M5(a.vS,b);}
function UM(){B.call(this);this.tG=null;}
function AKK(a,b){b=b;Gv(a.tG,b);}
function IC(){var a=this;B.call(a);a.dS=null;a.jd=null;a.gT=0;}
function ATb(a,b,c){var d=new IC();ACb(d,a,b,c);return d;}
function ACb(a,b,c,d){a.dS=b;a.jd=c;a.gT=d;}
function ABp(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return BJ(a.dS,c.dS)&&BJ(a.jd,c.jd)&&BJ(Cs(a.gT),Cs(c.gT))?1:0;}return 0;}
function LH(){var a=this;IC.call(a);a.jr=null;a.mO=0;}
function AFM(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){if(!ABp(a,b))return 0;c=b;return BJ(a.jr,c.jr);}return 0;}
function En(){var a=this;B.call(a);a.eJ=null;a.fc=null;a.sK=0;}
function AR2(a,b,c){var d=new En();KI(d,a,b,c);return d;}
function KI(a,b,c,d){a.eJ=b;a.fc=c;a.sK=d;}
function YO(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return BJ(a.eJ,c.eJ)&&BJ(a.fc,c.fc)?1:0;}return 0;}
function FR(){En.call(this);this.gg=null;}
function H_(){var a=this;En.call(a);a.gs=null;a.nb=0;}
function AQg(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){if(!YO(a,b))return 0;c=b;return BJ(a.gs,c.gs);}return 0;}
function Iu(){var a=this;En.call(a);a.hj=null;a.gv=null;}
function AEW(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return BJ(a.hj,c.hj)&&BJ(a.gv,c.gv)?1:0;}return 0;}
var YZ=F();
function JE(){return {isCancellationRequested:false};}
function QW(){var a=this;B.call(a);a.s4=null;a.s3=null;}
function AHH(a,b){V8(b,a.s4,a.s3);}
var ABi=F();
function LQ(b,c,d){var e;if(!("then" in b?1:0))c.f(b);else{e=new SZ;e.we=d;b.then(Bm(c,"f"),Bm(e,"f"));}}
function Mj(){var a=this;B.call(a);a.uh=null;a.ug=null;}
function AOA(a,b){V8(b,a.uh,a.ug);}
function Z5(){var a=this;GD.call(a);a.GV=null;a.Jh=0;a.Hx=0;a.EK=0;}
function RX(){var a=this;B.call(a);a.nr=null;a.ns=null;}
function AJq(a){var b,c;b=a.nr;c=a.ns;SI();IZ(b,c,AXh);}
function RY(){var a=this;B.call(a);a.q6=null;a.q7=null;}
function AGp(a){var b,c;b=a.q6;c=a.q7;SI();IZ(b,c,AXi);}
function RV(){var a=this;B.call(a);a.uU=null;a.uT=null;}
function AE_(a){IZ(a.uU,a.uT,null);}
function RW(){var a=this;B.call(a);a.m2=null;a.m3=null;}
function AJl(a){var b,c,d,e,f,g,h,i,j;b=a.m2;c=a.m3;d=DT(b.bh.c);e=FK(b.bh.c);d=TQ(b.bh.cv,d,e);Dv(b.eR.bU);b=b.bh;e=D2(b,c);if(d!==null){f=b.c;g=e.U;h=e.bb;e=new Vx;e.si=b;e.sj=c;b=b.hF;c=d.uE;d=E5(f);f=Hz(h,g);i=AKv(!!1);j=JE();c=c.provideReferences(d,f,i,j);d=new PT;d.qj=e;d.qi=b;LQ(c,d,b);}}
function Q4(){B.call(this);this.pv=null;}
function ANM(a){var b;b=a.pv;Dv(b.eR.bU);Gt(b.bh,XK(b),0);}
function Q3(){B.call(this);this.vl=null;}
function AMh(a){var b;b=a.vl;Dv(b.eR.bU);Gt(b.bh,XK(b),1);}
function Q2(){B.call(this);this.sU=null;}
function ARm(a){var b,c,d,e;b=a.sU;Dv(b.eR.bU);F8(b);b=b.bh;BM(b);c=new XN;c.p6=b;b=Zp(C(303));if(!K$()){c=new Bt;Bp(c,C(304));Lx(b,c);}else{d=$rt_globals.navigator.clipboard.readText();e=new Q1;e.nA=c;b=AD1(b);d.then(Bm(e,"f"),Bm(b,"f"));}}
function O4(){var a=this;B.call(a);a.np=null;a.nq=null;}
function AMd(a){var b,c;b=a.np;c=a.nq;b=b.bh.c;b.hb=c;Il(b);}
var Qh=F(0);
var AWd=null;function AB3(){AWd=new T5;}
function P1(){B.call(this);this.wc=null;}
function AGd(a){var b,c,d;b=a.wc;Dv(b.eR.bU);c=F8(b);b=b.bh;BM(b);d=new Rx;d.tc=b;VU(c,d);}
function HZ(){var a=this;B.call(a);a.rY=null;a.hX=null;a.i7=null;a.gU=null;a.hx=null;a.gW=null;a.ft=null;}
function IO(b,c,d,e){var f,g,h;f=new HZ;f.gU=new Bj;f.hx=new Bj;f.gW=new Bj;f.ft=b;g=B_(e,b.fJ);if(g!==null)g.hd=g.hd+1|0;else{g=new Vs;h=LV(c,b.fJ,d);g.hd=1;g.jc=h;Ee(e,b.fJ,g);}e=g.jc;f.rY=e;Bg(f.gU,e.ba|0,e.bZ|0);e=LV(c,b.iw,d);f.hX=e;Bg(f.hx,e.ba|0,e.bZ|0);b=LV(c,b.iI,d);f.i7=b;Bg(f.gW,b.ba|0,b.bZ|0);return f;}
function Vl(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.ft.fJ;f=B_(d,e);g=f.hd-1|0;f.hd=g;if(!g){a:{h=0;i=null;if(e===null){j=d.bX.data[0];while(j!==null){if(j.cn===null)break a;e=j.cu;i=j;j=e;}}else{k=Gf(e);l=d.bX.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.iV==k&&YB(e,j.cn))){m=j.cu;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cu=j.cu;else d.bX.data[h]=j.cu;d.cy=d.cy+1|0;d.cA=d.cA-1|0;}Kz(b,f.jc);}Kz(b,c.hX);Kz(b,c.i7);}
var Ru=F(0);
function Yd(b,c){var d;d=new Vt;d.o2=b;d.o1=c;return d;}
function Yo(){var a=this;B.call(a);a.fv=null;a.gl=0;a.iM=0;a.fT=0;}
function AFl(a){var b=new Yo();AHW(b,a);return b;}
function AHW(a,b){a.fv=Bz();a.fT=0;a.iM=2048;a.gl=b;}
function LV(a,b,c){var d,e,f,g,h,i,j;d=Hw(c,b);e=a.iM;if(d>e){c=new Bt;f=new R;U(f);BX(Bl(K(Bl(K(f,C(305)),d),C(306)),e),41);Bp(c,S(f));L(c);}if(!a.gl){b=new BF;Bp(b,C(307));L(b);}a:{b=new B5;if(d){b:{c=a.fv;if(c.k>0){c=BO(c);g=d;while(true){if(!BP(c))break b;f=BS(c);if(f.ba>=g)break;}Cc(b,f.bq,f.bI,g,a.gl);f.bq=f.bq+g;h=f.ba-g;f.ba=h;if(h===0.0)Vp(a.fv,f);break a;}}g=a.fT;i=d;Cc(b,0.0,g,i,a.gl);c=a.fv;f=new B5;h=a.fT;g=a.iM-d|0;j=a.gl;f.bq=i;f.bI=h;f.ba=g;f.bZ=j;Bw(c,f);a.fT=a.fT+a.gl|0;}}return b;}
function Kz(a,b){var c,d,e,f,g,h,i;a:{c=new B5;c.bq=b.bq;c.bI=b.bI;c.ba=b.ba;c.bZ=b.bZ;b=a.fv;if(b.k>0){d=BO(b);while(true){if(!BP(d))break a;e=BS(d);if(e.bI===c.bI){f=e.bq;g=e.ba;h=f+g;i=c.bq;if(h===i){c.bq=f;c.ba=c.ba+g;Q$(d);}else{h=c.ba;if(i+h===f){c.ba=h+g;Q$(d);}}}}}}Bw(a.fv,c);}
function M2(a){return Cg(a.iM,a.fT);}
function Vd(){var a=this;EF.call(a);a.e4=null;a.gF=null;a.hW=null;a.eG=null;a.i6=0.0;a.gK=0;a.h3=0;a.dh=null;a.j0=null;}
function JW(a){var b;b=a.p;return b.a&&b.b?0:1;}
function VV(a){var b,c;a:{if(a.hW!==null){b=a.gF;if(b!==null&&!Eu(b)){c=0;break a;}}c=1;}return c;}
function Pk(a,b){a.p.b=b;}
function PD(a,b,c,d,e){var f,g;f=a.e4.dk;Bg(f,d,a.p.b);g=a.K;BB(b,g.a+c|0,g.b,f,e);}
function UU(a){if(a.eG===null)a.eG=Ik(a.e4,a.hW);}
var WT=F(Eq);
var AXj=null;function NC(b){var c;c=new R;U(c);return S(QV(c,b));}
function ABU(){AXj=E($rt_floatcls());}
var Fb=F();
var AXk=null;var AXl=null;var AXm=null;var AXn=null;var AUy=null;function AAM(){AXk=FH([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AXl=AGg([BL(1),BL(10),BL(100),BL(1000),BL(10000),BL(100000),BL(1000000),BL(10000000),BL(100000000),BL(1000000000),Dm(1410065408, 2),Dm(1215752192, 23),Dm(3567587328, 232),Dm(1316134912, 2328),Dm(276447232, 23283),Dm(2764472320, 232830),Dm(1874919424, 2328306),Dm(1569325056, 23283064),Dm(2808348672, 232830643)]);AXm=AGg([BL(1),BL(10),BL(100),BL(10000),BL(100000000),
Dm(1874919424, 2328306)]);AXn=new TL;AUy=new U2;}
var Hh=F();
var AXo=0;var AXp=null;var AXq=null;function ABl(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.of=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.kC=0;c.kg=0;return;}if(f)d=e|8388608;else{d=e<<1;while(AHk(XW(BL(d),BL(8388608)),ACw)){d=d<<1;f=f+(-1)|0;}}g=ABw(AXq,f);if(g<0)g= -g|0;h=AXq.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Hb(d,AXp.data[e],i);if(j<AXo){while($rt_ucmp(j,AXo)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=AXq.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Hb(d,
AXp.data[e],i);}e=d<<1;d=e+1|0;h=AXp.data;f=g+1|0;k=h[f];l=i-1|0;m=Hb(d,k,l);n=Hb(e-1|0,AXp.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?T($rt_udiv(j,o),o):q<0?T($rt_udiv(j,k),k)+k|0:T($rt_udiv((j+(k/2|0)|0),k),k);if(HQ(BL(d),BL(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.kC=d;c.kg=g-50|0;}
function Hb(b,c,d){return ZQ(ATx(ALN(XW(BL(b),Dm(4294967295, 0)),XW(BL(c),Dm(4294967295, 0))),32-d|0));}
function Z0(){AXo=$rt_udiv((-1),10);AXp=FH([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);AXq=FH([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function U2(){var a=this;B.call(a);a.kC=0;a.kg=0;a.of=0;}
function TJ(){B.call(this);this.sD=null;}
function AQt(a,b,c){var d,e;c=a.sD;d=c.c.f;e=b.bd;b=c.eC;Sh(d.v.data[e],0,b);}
function AB0(){var a=this;B.call(a);a.gP=null;a.ei=0;}
function Lp(a){var b=new AB0();AEs(b,a);return b;}
function AEs(a,b){a.gP=b;a.ei=0;}
function V(a){var b,c;b=a.gP.data;c=a.ei;a.ei=c+1|0;return b[c];}
function QC(a){var b,c,d,e;if(a.ei!=a.gP.data.length){b=Ed();c=a.gP.data.length;d=a.ei;e=new R;U(e);K(Bl(K(Bl(K(e,C(294)),c),C(308)),d),C(309));Ct(b,S(e));}}
var V7=F(BV);
function Dn(){var a=this;B.call(a);a.ke=null;a.ib=null;a.em=null;a.dG=null;a.iE=null;a.lm=null;a.hI=0;a.lf=null;}
function Nq(a,b){var c=new Dn();X_(c,a,b);return c;}
function ASN(a,b,c,d){var e=new Dn();AAA(e,a,b,c,d);return e;}
function X_(a,b,c){AAA(a,b,c,null,null);}
function AAA(a,b,c,d,e){a.ib=new B5;a.em=new Bj;a.dG=new Bj;a.lf=c;a.lm=e;a.ke=b;a.iE=d;}
function UE(a){return a.iE===null?0:1;}
function M8(){B.call(this);this.o5=null;}
function AJY(a){LS(a.o5);}
function M9(){B.call(this);this.qc=null;}
function APD(a){FS(a.qc);}
function M7(){B.call(this);this.v_=null;}
function AD$(a){J4(a.v_);}
function Wd(){B.call(this);this.qQ=null;}
function AKR(a){a.qQ.vM();}
function Wc(){B.call(this);this.ur=null;}
function AN9(a){a.ur.wa();}
function OZ(){B.call(this);this.oa=null;}
function AG9(a){var b,c,d,e,f,g,h,i;b=a.oa;c=(b.oz.dM()).data;d=P(Dn,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new M4;i.pM=b;i.pL=h;e[f]=Nq(i,h);f=f+1|0;}return d;}
function Sv(){B.call(this);this.oE=null;}
function AJy(a){a.oE.mw.h7(0);}
function Sw(){B.call(this);this.pX=null;}
function APi(a){a.pX.mw.h7(1);}
function Xs(){B.call(this);this.sM=null;}
function AEo(a){var b,c,d,e,f;b=a.sM.c.f;c=b.b0;d=new R;U(d);Bl(K(d,C(310)),c);$rt_globals.console.info($rt_ustr(S(d)));c=b.iK;d=new R;U(d);Bl(K(d,C(311)),c);$rt_globals.console.info($rt_ustr(S(d)));d=b.cx;e=GY(Df(b));Wm(d,0,d.cJ,e);b=FJ();f=b.kh;f.data[0]=10;N$(b,f,0,1);}
function Xn(){B.call(this);this.oi=null;}
function AJB(a){Rz(a.oi);}
function Xo(){B.call(this);this.pt=null;}
function AQH(a){S1(a.pt);}
function Xp(){B.call(this);this.vv=null;}
function AK7(a){LA(a.vv.c);}
function Xq(){B.call(this);this.m5=null;}
function AIZ(a){Xe(a.m5);}
function Mn(){B.call(this);this.oY=null;}
function APy(a){var b,c,d,e,f,g,h;b=a.oY;c=P(Dn,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Nq(O_(b,g),NC(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Nq(O_(b,g),NC(g));e=h;}return c;}
var KJ=F(0);
function WP(){var a=this;B.call(a);a.pj=null;a.pk=null;a.pl=null;}
function Oj(){B.call(this);this.qY=null;}
function AEU(a,b){var c,d;c=a.qY;d=Ha(b,c.br.cO.b-c.p.b|0);XO(c.br,d);G2(c);}
function Oi(){B.call(this);this.sd=null;}
function AFe(a,b){var c,d;c=a.sd;d=Ha(b,c.br.cO.a-c.p.a|0);UV(c.br,d);H2(c);}
var R8=F(Eq);
var AXr=null;function Ln(b,c){return Long_udiv(b, c);}
function Yx(b,c){return Long_urem(b, c);}
function HQ(b,c){return Long_ucompare(b, c);}
function AAl(){AXr=E($rt_longcls());}
function Td(){B.call(this);this.qR=null;}
function AFQ(a,b,c){FW(BK(a.qR.c.f,b.bd),0,H(c));}
var WD=F();
var EJ=F();
var AXs=null;var AXt=null;var AUW=null;var AXu=null;var AXv=null;var AXw=null;function ABk(){AXs=new U7;AXt=new U5;AUW=new U6;AXu=new U3;AXv=new U4;AXw=new XL;}
function YI(){var a=this;B.call(a);a.kT=null;a.lz=null;a.hh=null;a.cd=null;a.jY=null;a.kD=null;a.gw=null;a.ly=null;a.lq=null;}
function ALB(a,b){var c=new YI();APU(c,a,b);return c;}
function APU(a,b,c){a.cd=Lp(b);a.jY=c;}
function Od(a){var b,c,d,e,f,g,h,i;b=V(a.cd);c=new Kn;PP(c);a.hh=c;a.gw=Bz();d=0;while(d<b){e=V(a.cd);f=V(a.cd);g=DV(a.jY,e,f);Ee(a.hh,g,Bz());Bw(a.gw,g);d=d+1|0;}c=N7(UG(a.hh));while(EO(c)){Gi((W3(c)).cF,Nb(a));}d=V(a.cd);if(d==(-1))a.kT=null;else{a.kD=P(E0,d);c=new MA;h=a.cd;i=a.jY;g=a.gw;c.c2=h;c.rJ=i;c.qP=g;a.ly=c;c=new Rf;c.dF=h;c.uz=i;c.u2=g;a.lq=c;a.kT=QR(a,null);}if(V(a.cd)!=(-1))a.lz=Rc(a.cd,a.kD);}
function QR(a,b){var c,d,e,f,g,h,i,j,k;c=V(a.cd);d=V(a.cd);e=a.ly;f=V(e.c2);g=Bz();h=0;while(h<f){Bw(g,MD(e));h=h+1|0;}a:{switch(d){case -1:i=new Ki;i.f0=b;b=AUW;i.cg=b;i.eg=b;i.dQ=b;i.ia=b;i.fQ=b;break a;case 0:i=ARF(b);break a;case 1:i=new JO;ABh(i,b);Gi(i.dQ,g);break a;default:}b=new Dl;i=new R;U(i);Bl(K(i,C(312)),d);Bp(b,S(i));L(b);}i.dQ=g;b=a.lq;d=V(b.dF);e=Bz();j=0;while(j<d){Bw(e,Fz(b));j=j+1|0;}i.eg=e;i.ia=Nb(a);d=V(a.cd);b=Bz();j=0;while(j<d){e=MD(a.ly);g=Fz(a.lq);f=V(a.cd);k=new PR;k.ie=e;k.i$=g;k.pi
=f;Bw(b,k);j=j+1|0;}i.fQ=b;j=V(a.cd);i.tC=j==(-1)?null:Bs(a.gw,j);d=V(a.cd);b=Bz();j=0;while(j<d){Bw(b,QR(a,i));j=j+1|0;}i.cg=b;a.kD.data[c]=i;return i;}
function Nb(a){var b,c,d,e;b=V(a.cd);c=Bz();d=0;while(d<b){e=V(a.cd);Bw(c,Bs(a.gw,e));d=d+1|0;}return c;}
function Qd(){var a=this;B.call(a);a.oL=null;a.oK=null;}
function AHg(a,b){a.oL.j(ABy(a.oK,b));}
function ADx(){var a=this;B.call(a);a.g4=null;a.c4=0;}
function AIA(a,b){var c=new ADx();AEh(c,a,b);return c;}
function AEh(a,b,c){a.g4=b;a.c4=c;}
function AMi(a,b){var c;if(a===b)return 1;if(b!==null&&BA(a)===BA(b)){c=b;return a.c4==c.c4&&BJ(a.g4,c.g4)?1:0;}return 0;}
function MT(){B.call(this);this.n7=null;}
function AKH(a,b){b=b;Mi(a.n7,b);}
function XF(){B.call(this);this.oe=null;}
function ARs(a,b){b=b;Gv(a.oe,b);}
var Ii=F(0);
function Mw(){var a=this;B.call(a);a.m$=null;a.m9=null;}
function AJE(a){YM(a.m$,a.m9);}
function Md(){var a=this;B.call(a);a.sQ=null;a.sR=null;}
function AEc(a){a.sQ.j(a.sR);}
function SZ(){B.call(this);this.we=null;}
function AJi(a,b){Lg(a.we,$rt_str(b.message));}
function Vr(){B.call(this);this.r3=null;}
function AQ4(a){return a.r3;}
var T5=F();
var TL=F();
function WX(){var a=this;B.call(a);a.ni=null;a.nh=null;a.nk=null;a.nj=null;}
function AI5(a,b){var c,d,e,f,g,h,i;c=a.ni;d=a.nh;e=a.nk;f=a.nj;if(!(b.done?1:0)){T4(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new TO;c.p8=d;c.p9=g;c.p$=f;b.then(Bm(c,"f"),Bm(e,"f"));}else{h=f.data;c=g.values();b=Ce(g.name);i=h.length;f=C2(f,i+1|0);f.data[i]=b;T4(c,d,e,f);}}}
var JH=F(Er);
var U7=F(JH);
var KX=F(DB);
var U5=F(KX);
var Lw=F(Em);
function AGW(a){var b;b=new D1;X(b);L(b);}
function ALm(a,b){var c;c=new D1;X(c);L(c);}
function AJ$(a,b){b=new D1;X(b);L(b);}
var U6=F(Lw);
function ALt(a,b){var c;c=new BV;X(c);L(c);}
function AKz(a){return 0;}
function AHt(a){return AXu;}
function AE3(a){return 1;}
var U3=F();
function AEL(a){return 0;}
function AMO(a){var b;b=new L0;X(b);L(b);}
function AOo(a){var b;b=new Dl;X(b);L(b);}
var Pr=F(0);
var U4=F();
var XL=F();
function ED(){var a=this;B.call(a);a.ir=0;a.sT=0;a.hm=null;a.fO=null;a.qk=null;a.i3=null;}
function AXx(a){var b=new ED();Ko(b,a);return b;}
function Ko(a,b){a.i3=b;a.sT=b.cy;a.hm=null;}
function EO(a){var b,c;if(a.hm!==null)return 1;while(true){b=a.ir;c=a.i3.bX.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.ir=b+1|0;}return 0;}
function ZE(a){var b;if(a.sT==a.i3.cy)return;b=new GB;X(b);L(b);}
function KS(a){var b,c,d,e;ZE(a);if(!EO(a)){b=new L0;X(b);L(b);}b=a.hm;if(b!==null){c=a.fO;if(c!==null)a.qk=c;a.fO=b;a.hm=b.cu;}else{d=a.i3.bX.data;e=a.ir;a.ir=e+1|0;b=d[e];a.fO=b;a.hm=b.cu;a.qk=null;}}
var ST=F(ED);
function O0(a){KS(a);return a.fO.cn;}
var AAd=F();
function K$(){return "clipboard" in $rt_globals.navigator?1:0;}
function YY(){var a=this;B.call(a);a.EG=null;a.J8=0;}
function Rd(){var a=this;B.call(a);a.g=null;a.dn=0;a.j$=null;a.nX=0;a.f6=0;a.ez=0;a.bm=0;a.lb=null;}
function Jr(a){return a.g.bB;}
function Xm(a,b,c,d){var e,f,g,h,i,j;e=Bz();f=a.dn;g=0;if(c!=f)a.dn=c;a:{switch(b){case -1073741784:h=new RP;c=a.bm+1|0;a.bm=c;E1(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PU;c=a.bm+1|0;a.bm=c;E1(h,c);break a;case -33554392:h=new SU;c=a.bm+1|0;a.bm=c;E1(h,c);break a;default:c=a.f6+1|0;a.f6=c;if(d!==null)h=ATi(c);else{h=new E_;E1(h,0);g=1;}c=a.f6;if(c<=(-1))break a;if(c>=10)break a;a.j$.data[c]=h;break a;}h=new Xf;E1(h,(-1));}while(true){if(EK(a.g)&&a.g.h==(-536870788))
{d=APS(B6(a,2),B6(a,64));while(!C1(a.g)&&EK(a.g)){i=a.g;j=i.h;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cj(d,Bf(i));i=a.g;if(i.Y!=(-536870788))continue;Bf(i);}i=Kd(a,d);i.L(h);}else if(a.g.Y==(-536870788)){i=Gl(h);Bf(a.g);}else{i=O7(a,h);d=a.g;if(d.Y==(-536870788))Bf(d);}if(i!==null)Bw(e,i);if(C1(a.g))break;if(a.g.Y==(-536870871))break;}if(a.g.kx==(-536870788))Bw(e,Gl(h));if(a.dn!=f&&!g){a.dn=f;d=a.g;d.fL=f;d.h=d.Y;d.es=d.eI;j=d.cZ;d.t=j+1|0;d.gZ=j;EN(d);}switch(b){case -1073741784:break;case -536870872:d
=new Mu;Fa(d,e,h);return d;case -268435416:d=new VG;Fa(d,e,h);return d;case -134217688:d=new Ri;Fa(d,e,h);return d;case -67108824:d=new Th;Fa(d,e,h);return d;case -33554392:d=new Du;Fa(d,e,h);return d;default:switch(e.k){case 0:break;case 1:return AS6(Bs(e,0),h);default:return ASI(e,h);}return Gl(h);}d=new Ir;Fa(d,e,h);return d;}
function ACA(a){var b,c,d,e,f,g,h;b=By(4);c=(-1);d=(-1);if(!C1(a.g)&&EK(a.g)){e=b.data;c=Bf(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B1(3);b=e.data;b[0]=c&65535;f=a.g;g=f.Y;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bf(f);f=a.g;g=f.Y;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bf(f);return APB(e,3);}return APB(e,2);}if(!B6(a,2))return ZD(b[0]);if(B6(a,64))return ANA(b[0]);return AGh(b[0]);}e=b.data;c=1;while(c<4&&!C1(a.g)&&EK(a.g)){h=c+1|0;e[c]=Bf(a.g);c=h;}if(c==1){h=e[0];if(!(AXy.yt(h)==AXz?0:1))return W$(a,e[0]);}if
(!B6(a,2))return ATU(b,c);if(B6(a,64)){f=new WW;N4(f,b,c);return f;}f=new Tw;N4(f,b,c);return f;}
function O7(a,b){var c,d,e,f,g,h,i;if(EK(a.g)&&!Jd(a.g)&&JM(a.g.h)){if(B6(a,128)){c=ACA(a);if(!C1(a.g)){d=a.g;e=d.Y;if(!(e==(-536870871)&&!(b instanceof E_))&&e!=(-536870788)&&!EK(d))c=LO(a,b,c);}}else if(!Ob(a.g)&&!UQ(a.g)){f=new Oe;U(f);while(!C1(a.g)&&EK(a.g)&&!Ob(a.g)&&!UQ(a.g)){if(!(!Jd(a.g)&&!a.g.h)&&!(!Jd(a.g)&&JM(a.g.h))){g=a.g.h;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bf(a.g);if(!LI(e))BX(f,e&65535);else HW(f,F3(e));}if(!B6(a,2)){c=new RJ;Dc(c);c.cj
=S(f);e=f.H;c.by=e;c.kn=AL3(e);c.ld=AL3(c.by);h=0;while(h<(c.by-1|0)){Ro(c.kn,I(c.cj,h),(c.by-h|0)-1|0);Ro(c.ld,I(c.cj,(c.by-h|0)-1|0),(c.by-h|0)-1|0);h=h+1|0;}}else if(B6(a,64))c=ATT(f);else{c=new M3;Dc(c);c.g3=S(f);c.by=f.H;}}else c=LO(a,b,WV(a,b));}else{d=a.g;if(d.Y!=(-536870871))c=LO(a,b,WV(a,b));else{if(b instanceof E_)L(B4(C(3),d.bB,Oa(d)));c=Gl(b);}}a:{if(!C1(a.g)){e=a.g.Y;if(!(e==(-536870871)&&!(b instanceof E_))&&e!=(-536870788)){f=O7(a,b);if(c instanceof CN&&!(c instanceof EP)&&!(c instanceof CD)&&
!(c instanceof El)){i=c;if(!f.bM(i.F)){c=new VT;EB(c,i.F,i.e,i.hg);c.F.L(c);}}if((f.hn()&65535)!=43)c.L(f);else c.L(f.F);break a;}}if(c===null)return null;c.L(b);}if((c.hn()&65535)!=43)return c;return c.F;}
function LO(a,b,c){var d,e,f,g,h;d=a.g;e=d.Y;if(c!==null&&!(c instanceof BW)){switch(e){case -2147483606:Bf(d);d=new XS;CY(d,c,b,e);LT();c.L(AXA);return d;case -2147483605:Bf(d);d=new PJ;CY(d,c,b,(-2147483606));LT();c.L(AXA);return d;case -2147483585:Bf(d);d=new Pj;CY(d,c,b,(-536870849));LT();c.L(AXA);return d;case -2147483525:f=new MX;d=EV(d);g=a.ez+1|0;a.ez=g;IE(f,d,c,b,(-536870849),g);LT();c.L(AXA);return f;case -1073741782:case -1073741781:Bf(d);d=new RG;CY(d,c,b,e);c.L(d);return d;case -1073741761:Bf(d);d
=new QE;CY(d,c,b,(-536870849));c.L(b);return d;case -1073741701:h=new Up;d=EV(d);e=a.ez+1|0;a.ez=e;IE(h,d,c,b,(-536870849),e);c.L(h);return h;case -536870870:case -536870869:Bf(d);if(c.hn()!=(-2147483602)){d=new CD;CY(d,c,b,e);}else if(B6(a,32)){d=new RH;CY(d,c,b,e);}else{d=new Op;f=Pl(a.dn);CY(d,c,b,e);d.kw=f;}c.L(d);return d;case -536870849:Bf(d);d=new Fq;CY(d,c,b,(-536870849));c.L(b);return d;case -536870789:h=new EX;d=EV(d);e=a.ez+1|0;a.ez=e;IE(h,d,c,b,(-536870849),e);c.L(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bf(d);d=new XV;EB(d,f,b,e);f.e=d;return d;case -2147483585:Bf(d);c=new VN;EB(c,f,b,(-2147483585));return c;case -2147483525:c=new O6;R_(c,EV(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bf(d);d=new Qy;EB(d,f,b,e);f.e=d;return d;case -1073741761:Bf(d);c=new TH;EB(c,f,b,(-1073741761));return c;case -1073741701:c=new Rj;R_(c,EV(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bf(d);d=AS_(f,b,e);f.e=d;return d;case -536870849:Bf(d);c
=new El;EB(c,f,b,(-536870849));return c;case -536870789:return ASa(EV(d),f,b,(-536870789));default:}return c;}
function WV(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof E_;while(true){a:{e=a.g;f=e.Y;if((f&(-2147418113))==(-2147483608)){Bf(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dn=g;else{if(f!=(-1073741784))g=a.dn;c=Xm(a,f,g,b);e=a.g;if(e.Y!=(-536870871))L(B4(C(3),e.bB,e.cZ));Bf(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bf(e);c
=APk(0);break a;case -2147483577:Bf(e);c=new Ok;BN(c);break a;case -2147483558:Bf(e);c=new WC;h=a.bm+1|0;a.bm=h;ACW(c,h);break a;case -2147483550:Bf(e);c=APk(1);break a;case -2147483526:Bf(e);c=new V_;BN(c);break a;case -536870876:Bf(e);a.bm=a.bm+1|0;if(B6(a,8)){if(B6(a,1)){c=ASt(a.bm);break a;}c=ARN(a.bm);break a;}if(B6(a,1)){c=ASO(a.bm);break a;}c=ATn(a.bm);break a;case -536870866:Bf(e);if(B6(a,32)){c=ATF();break a;}c=ATe(Pl(a.dn));break a;case -536870821:Bf(e);i=0;c=a.g;if(c.Y==(-536870818)){i=1;Bf(c);}c
=Kd(a,FD(a,i));c.L(b);e=a.g;if(e.Y!=(-536870819))L(B4(C(3),e.bB,e.cZ));OP(e,1);Bf(a.g);break a;case -536870818:Bf(e);a.bm=a.bm+1|0;if(!B6(a,8)){c=new JR;BN(c);break a;}c=new M$;e=Pl(a.dn);BN(c);c.rQ=e;break a;case 0:j=e.eI;if(j!==null)c=Kd(a,j);else{if(C1(e)){c=Gl(b);break a;}c=ZD(f&65535);}Bf(a.g);break a;default:break b;}Bf(e);c=new JR;BN(c);break a;}h=(f&2147483647)-48|0;if(a.f6<h)L(B4(C(3),EZ(e),Oa(a.g)));Bf(e);a.bm=a.bm+1|0;c=!B6(a,2)?ARS(h,a.bm):B6(a,64)?ASu(h,a.bm):ATP(h,a.bm);a.j$.data[h].j6=1;a.nX=
1;break a;}if(f>=0&&!Go(e)){c=W$(a,f);Bf(a.g);}else if(f==(-536870788))c=Gl(b);else{if(f!=(-536870871)){b=new Ic;c=!Go(a.g)?Wy(f&65535):a.g.eI.cP();e=a.g;IR(b,c,e.bB,e.cZ);L(b);}if(d){b=new Ic;e=a.g;IR(b,C(3),e.bB,e.cZ);L(b);}c=Gl(b);}}}if(f!=(-16777176))break;}return c;}
function FD(a,b){var c,d,e,f,g,h,i,j,$$je;c=APS(B6(a,2),B6(a,64));Ef(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(C1(a.g))break a;h=a.g;b=h.Y;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cj(c,d);d=Bf(a.g);h=a.g;if(h.Y!=(-536870874)){d=38;break d;}if(h.h==(-536870821)){Bf(h);e=1;d=(-1);break d;}Bf(h);if(g){c=FD(a,0);break d;}if(a.g.Y==(-536870819))break d;Wj(c,FD(a,0));break d;case -536870867:if(!g){b=h.h;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bf(h);h=a.g;i=h.Y;if(Go(h))break c;if
(i<0){j=a.g.h;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(JM(i))break e;i=i&65535;break e;}catch($$e){$$je=E3($$e);if($$je instanceof DO){break b;}else{throw $$e;}}}try{BT(c,d,i);}catch($$e){$$je=E3($$e);if($$je instanceof DO){break b;}else{throw $$e;}}Bf(a.g);d=(-1);break d;}}if(d>=0)Cj(c,d);d=45;Bf(a.g);break d;case -536870821:if(d>=0){Cj(c,d);d=(-1);}Bf(a.g);j=0;h=a.g;if(h.Y==(-536870818)){Bf(h);j=1;}if(!e)X5(c,FD(a,j));else Wj(c,FD(a,j));e=0;Bf(a.g);break d;case -536870819:if(d>=0)Cj(c,
d);d=93;Bf(a.g);break d;case -536870818:if(d>=0)Cj(c,d);d=94;Bf(a.g);break d;case 0:if(d>=0)Cj(c,d);h=a.g.eI;if(h===null)d=0;else{AD0(c,h);d=(-1);}Bf(a.g);break d;default:}if(d>=0)Cj(c,d);d=Bf(a.g);}g=0;}L(B4(C(3),Jr(a),a.g.cZ));}L(B4(C(3),Jr(a),a.g.cZ));}if(!f){if(d>=0)Cj(c,d);return c;}L(B4(C(3),Jr(a),a.g.cZ-1|0));}
function W$(a,b){var c,d,e;c=LI(b);if(B6(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AGh(b&65535);}if(B6(a,64)&&b>128){if(c){d=new Mk;Dc(d);d.by=2;d.ra=Ga(F9(b));return d;}if(OW(b))return AL9(b&65535);if(!SG(b))return ANA(b&65535);return AJt(b&65535);}}if(!c){if(OW(b))return AL9(b&65535);if(!SG(b))return ZD(b&65535);return AJt(b&65535);}d=new DC;Dc(d);d.by=2;d.fu=b;e=(F3(b)).data;d.jw=e[0];d.id=e[1];return d;}
function Kd(a,b){var c,d,e;if(!ABd(b)){if(!b.I){if(b.gJ())return AI0(b);return APl(b);}if(!b.gJ())return AJ_(b);c=new IG;TU(c,b);return c;}c=YC(b);d=new MB;BN(d);d.pW=c;d.wH=c.X;if(!b.I){if(b.gJ())return ABW(AI0(G8(b)),d);return ABW(APl(G8(b)),d);}if(!b.gJ())return ABW(AJ_(G8(b)),d);c=new Qs;e=new IG;TU(e,G8(b));ADJ(c,e,d);return c;}
function G_(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B6(a,b){return (a.dn&b)!=b?0:1;}
var GG=F();
var Zw=F(GG);
var ACk=F(GG);
function Um(){Er.call(this);this.ru=null;}
function N7(a){var b;b=new T9;Ko(b,a.ru);return b;}
function Pf(){Ey.call(this);this.v3=null;}
var AB5=F();
function ZH(b,c,d,e,f,g){g.a=c.a;g.b=f;BB(b,d.a,d.b,g,e);BB(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;BB(b,d.a,d.b+f|0,g,e);BB(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function ABD(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;BB(b,j,k,i,h);BB(b,j,k,i,h);BB(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;BB(b,l,j,i,h);BB(b,l,j,i,h);BB(b,l+g|0,j+g|0,i,h);}
var SA=F(0);
var AWb=null;function ABS(){AWb=new QD;}
function S0(){var a=this;B.call(a);a.ss=null;a.sr=null;}
function AHy(a,b){var c,d,e,f,g,h,i,j,k;c=a.ss;d=a.sr;if(!((b?1:0)?1:0))$rt_globals.console.info("provider result is undefined");else if(!($rt_globals.Array.isArray(b)?1:0))Lg(d,C(19));else{e=P(Jc,b.length);f=e.data;g=0;h=f.length;while(g<h){i=b[g];j=new Jc;j.gQ=new L5;if("kind" in i?1:0)j.yM=Cs(i.kind);X0(i.range,j.gQ);f[g]=j;g=g+1|0;}b=c.n8;d=c.n4;k=c.n5;g=c.n6;c=b.c;if(c===d&&c.o==k&&c.r==g){b.jK=ATk(k,g,e);ADL(b);}}}
var Ge=F(0);
function Tn(){B.call(this);this.q9=null;}
function ALw(a,b,c,d){I7(a.q9,b,c.bd,d.bd);}
function To(){B.call(this);this.nl=null;}
function AI6(a,b,c,d){I7(a.nl,b,c.bd,d.bd);}
function HD(){B.call(this);this.ms=0;}
var AXB=null;var AXC=null;var AXD=null;function AM2(a){var b=new HD();AB1(b,a);return b;}
function AB1(a,b){a.ms=b;}
function OU(b){return !b?AXC:AXB;}
function YQ(){AXB=AM2(1);AXC=AM2(0);AXD=E($rt_booleancls());}
var I_=F(0);
var RT=F();
var OI=F(0);
var AAV=F();
function Sl(){B.call(this);this.uq=null;}
function AMe(a,b,c,d){HL(a.uq,b,c.bd,d.bd);}
var Sk=F();
function AQr(a,b){return b.dS.c4>=0?0:1;}
var Sj=F();
function ANz(a,b){var c;a:{b:{b=b;if(b!==null){b=b.eJ;if(b===null)break b;if(b.c4>=0)break b;}c=1;break a;}c=0;}return c;}
function Sm(){B.call(this);this.tz=null;}
function ALL(a,b,c,d){HL(a.tz,b,c.bd,d.bd);}
function MA(){var a=this;B.call(a);a.c2=null;a.rJ=null;a.qP=null;}
function MD(a){var b,c,d,e,f,g,h,i;a:{b=V(a.c2);switch(b){case 3:break;case 5:c=N5(a);d=La(a);b=V(a.c2);e=V(a.c2);f=V(a.c2);g=Bz();h=0;while(h<f){Bw(g,La(a));h=h+1|0;}i=new LH;ACb(i,c,d,b);i.jr=g;i.mO=e;break a;default:c=new Dl;d=new R;U(d);Bl(K(d,C(313)),b);Bp(c,S(d));L(c);}i=ATb(N5(a),La(a),V(a.c2));}return i;}
function N5(a){var b,c;b=V(a.c2);c=V(a.c2);return AIA(DV(a.rJ,b,c),V(a.c2));}
function La(a){var b;b=V(a.c2);if(b==(-1))return null;return Bs(a.qP,b);}
function Rf(){var a=this;B.call(a);a.dF=null;a.uz=null;a.u2=null;}
function Fz(a){var b,c,d,e,f;a:{b:{b=V(a.dF);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Nc(a);d=P0(a);b=V(a.dF);e=SB(a);f=new H_;KI(f,c,d,2);f.nb=b;f.gs=e;break a;case 4:c=Fz(a);d=Fz(a);f=new Iu;KI(f,c.eJ,c.fc,9);f.hj=c;f.gv=d;break a;case 5:f=AR2(Nc(a),P0(a),V(a.dF));break a;case 9:c=SB(a);f=new FR;d=!DG(c)&&Bs(c,0)!==null?(Bs(c,0)).fc:null;KI(f,null,null,7);f.gg=Bz();c=BO(c);while(BP(c)){e=BS(c);if(!(e instanceof FR))Bw(f.gg,e);else{e=e;Gi(f.gg,e.gg);}}f.fc=d;break a;default:break b;}f
=null;break a;}c=new Dl;d=new R;U(d);Bl(K(d,C(314)),b);Bp(c,S(d));L(c);}return f;}
function Nc(a){var b,c;b=V(a.dF);c=V(a.dF);return AIA(DV(a.uz,b,c),V(a.dF));}
function P0(a){var b;b=V(a.dF);if(b==(-1))return null;return Bs(a.u2,b);}
function SB(a){var b,c,d;b=V(a.dF);c=Bz();d=0;while(d<b){Bw(c,Fz(a));d=d+1|0;}return c;}
function BC(){var a=this;B.call(a);a.e=null;a.b7=0;a.pm=null;a.hg=0;}
var AUu=0;function BN(a){var b;b=AUu;AUu=b+1|0;a.pm=KR(b);}
function J_(a,b){var c;c=AUu;AUu=c+1|0;a.pm=KR(c);a.e=b;}
function Hc(a,b,c,d){var e;e=d.u;while(true){if(b>e)return (-1);if(a.d(b,c,d)>=0)break;b=b+1|0;}return b;}
function Hm(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.d(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AGC(a,b){a.hg=b;}
function AFZ(a){return a.hg;}
function AOI(a){return a.e;}
function APG(a,b){a.e=b;}
function APF(a,b){return 1;}
function AQB(a){return null;}
function Iz(a){var b;a.b7=1;b=a.e;if(b!==null){if(!b.b7){b=b.e_();if(b!==null){a.e.b7=1;a.e=b;}a.e.ea();}else if(b instanceof F5&&b.ee.j6)a.e=b.e;}}
function ADP(){AUu=1;}
var UH=F(0);
function Vt(){var a=this;B.call(a);a.o2=null;a.o1=0.0;}
function Hw(a,b){return Kb(a.o2,b,a.o1*2.0+0.875);}
function XG(){var a=this;B.call(a);a.om=null;a.ok=null;a.oj=0;a.ol=0;}
function AMj(a,b){b=b;DU(a.om,a.ok,b,a.oj,a.ol);}
function XH(){var a=this;B.call(a);a.wl=null;a.wk=null;a.wj=0;a.wi=0;}
function AH8(a,b){b=b;DU(a.wl,a.wk,b,a.wj,a.wi);}
var QD=F();
function AL2(a,b){}
function CC(){var a=this;BC.call(a);a.j6=0;a.ds=0;}
var AXA=null;function LT(){LT=Bn(CC);AHQ();}
function ATi(a){var b=new CC();E1(b,a);return b;}
function E1(a,b){LT();BN(a);a.ds=b;}
function AFj(a,b,c,d){var e,f;e=H1(d,a.ds);I$(d,a.ds,b);f=a.e.d(b,c,d);if(f<0)I$(d,a.ds,e);return f;}
function AK$(a){return a.ds;}
function AFI(a,b){return 0;}
function AHQ(){var b;b=new Of;BN(b);AXA=b;}
function Gg(){var a=this;B.call(a);a.W=null;a.fL=0;a.ev=0;a.u0=0;a.kx=0;a.Y=0;a.h=0;a.sh=0;a.eI=null;a.es=null;a.t=0;a.hA=0;a.cZ=0;a.gZ=0;a.bB=null;}
var AXE=null;var AXy=null;var AXz=0;function OP(a,b){if(b>0&&b<3)a.ev=b;if(b==1){a.h=a.Y;a.es=a.eI;a.t=a.gZ;a.gZ=a.cZ;EN(a);}}
function Go(a){return a.eI===null?0:1;}
function Jd(a){return a.es===null?0:1;}
function Bf(a){EN(a);return a.kx;}
function EV(a){var b;b=a.eI;EN(a);return b;}
function EN(a){var b,c,d,e,f,g,h,$$je;a.kx=a.Y;a.Y=a.h;a.eI=a.es;a.cZ=a.gZ;a.gZ=a.t;while(true){b=0;c=a.t>=a.W.data.length?0:K8(a);a.h=c;a.es=null;if(a.ev==4){if(c!=92)return;c=a.t;d=a.W.data;c=c>=d.length?0:d[BU(a)];a.h=c;switch(c){case 69:break;default:a.h=92;a.t=a.hA;return;}a.ev=a.u0;a.h=a.t>(a.W.data.length-2|0)?0:K8(a);}a:{c=a.h;if(c!=92){e=a.ev;if(e==1)switch(c){case 36:a.h=(-536870876);break a;case 40:if(a.W.data[a.t]!=63){a.h=(-2147483608);break a;}BU(a);c=a.W.data[a.t];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.h=(-134217688);BU(a);break b;default:L(B4(C(3),EZ(a),a.t));}a.h=(-67108824);BU(a);}else{switch(c){case 33:break;case 60:BU(a);c=a.W.data[a.t];e=1;break b;case 61:a.h=(-536870872);BU(a);break b;case 62:a.h=(-33554392);BU(a);break b;default:f=ADR(a);a.h=f;if(f<256){a.fL=f;f=f<<16;a.h=f;a.h=(-1073741784)|f;break b;}f=f&255;a.h=f;a.fL=f;f=f<<16;a.h=f;a.h=(-16777176)|f;break b;}a.h=(-268435416);BU(a);}}if(!e)break;}break a;case 41:a.h=(-536870871);break a;case 42:case 43:case 63:e=a.t;d
=a.W.data;switch(e>=d.length?42:d[e]){case 43:a.h=c|(-2147483648);BU(a);break a;case 63:a.h=c|(-1073741824);BU(a);break a;default:}a.h=c|(-536870912);break a;case 46:a.h=(-536870866);break a;case 91:a.h=(-536870821);OP(a,2);break a;case 93:if(e!=2)break a;a.h=(-536870819);break a;case 94:a.h=(-536870818);break a;case 123:a.es=ADo(a,c);break a;case 124:a.h=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.h=(-536870874);break a;case 45:a.h=(-536870867);break a;case 91:a.h=(-536870821);break a;case 93:a.h
=(-536870819);break a;case 94:a.h=(-536870818);break a;default:}}else{c=a.t>=(a.W.data.length-2|0)?(-1):K8(a);c:{a.h=c;switch(c){case -1:L(B4(C(3),EZ(a),a.t));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.h
=ABI(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.ev!=1)break a;a.h=(-2147483648)|c;break a;case 65:a.h=(-2147483583);break a;case 66:a.h=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:L(B4(C(3),EZ(a),a.t));case 68:case 83:case 87:case 100:case 115:case 119:a.es=R5(DV(a.W,
a.hA,1),0);a.h=0;break a;case 71:a.h=(-2147483577);break a;case 80:case 112:break c;case 81:a.u0=a.ev;a.ev=4;b=1;break a;case 90:a.h=(-2147483558);break a;case 97:a.h=7;break a;case 98:a.h=(-2147483550);break a;case 99:c=a.t;d=a.W.data;if(c>=(d.length-2|0))L(B4(C(3),EZ(a),a.t));a.h=d[BU(a)]&31;break a;case 101:a.h=27;break a;case 102:a.h=12;break a;case 110:a.h=10;break a;case 114:a.h=13;break a;case 116:a.h=9;break a;case 117:a.h=PN(a,4);break a;case 120:a.h=PN(a,2);break a;case 122:a.h=(-2147483526);break a;default:}break a;}g
=ABq(a);h=0;if(a.h==80)h=1;try{a.es=R5(g,h);}catch($$e){$$je=E3($$e);if($$je instanceof IJ){L(B4(C(3),EZ(a),a.t));}else{throw $$e;}}a.h=0;}}if(b)continue;else break;}}
function ABq(a){var b,c,d,e,f,g;b=new R;FA(b,10);c=a.t;d=a.W;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=DV(d,BU(a),1);f=new R;U(f);K(K(f,C(315)),b);return S(f);}BU(a);c=0;a:{while(true){g=a.t;d=a.W.data;if(g>=(d.length-2|0))break;c=d[BU(a)];if(c==125)break a;BX(b,c);}}if(c!=125)L(B4(C(3),a.bB,a.t));}if(!b.H)L(B4(C(3),a.bB,a.t));f=S(b);if(H(f)==1){b=new R;U(b);K(K(b,C(315)),f);return S(b);}b:{c:{if(H(f)>3){if(J0(f,C(315)))break c;if(J0(f,C(316)))break c;}break b;}f=D3(f,2);}return f;}
function ADo(a,b){var c,d,e,f,g,$$je;c=new R;FA(c,4);d=(-1);e=2147483647;a:{while(true){f=a.t;g=a.W.data;if(f>=g.length)break a;b=g[BU(a)];if(b==125)break a;if(b==44&&d<0)try{d=I4(Je(c),10);ADs(c,0,YR(c));continue;}catch($$e){$$je=E3($$e);if($$je instanceof CZ){break;}else{throw $$e;}}BX(c,b&65535);}L(B4(C(3),a.bB,a.t));}if(b!=125)L(B4(C(3),a.bB,a.t));if(c.H>0)b:{try{e=I4(Je(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=E3($$e);if($$je instanceof CZ){}else{throw $$e;}}L(B4(C(3),a.bB,a.t));}else if(d<0)L(B4(C(3),
a.bB,a.t));if((d|e|(e-d|0))<0)L(B4(C(3),a.bB,a.t));b=a.t;g=a.W.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.h=(-2147483525);BU(a);break c;case 63:a.h=(-1073741701);BU(a);break c;default:}a.h=(-536870789);}c=new ML;c.eu=d;c.ep=e;return c;}
function EZ(a){return a.bB;}
function C1(a){return !a.Y&&!a.h&&a.t==a.sh&&!Go(a)?1:0;}
function JM(b){return b<0?0:1;}
function EK(a){return !C1(a)&&!Go(a)&&JM(a.Y)?1:0;}
function Ob(a){var b;b=a.Y;return b<=56319&&b>=55296?1:0;}
function UQ(a){var b;b=a.Y;return b<=57343&&b>=56320?1:0;}
function SG(b){return b<=56319&&b>=55296?1:0;}
function OW(b){return b<=57343&&b>=56320?1:0;}
function PN(a,b){var c,d,e,f,$$je;c=new R;FA(c,b);d=a.W.data.length-2|0;e=0;while(true){f=BD(e,b);if(f>=0)break;if(a.t>=d)break;BX(c,a.W.data[BU(a)]);e=e+1|0;}if(!f)a:{try{b=I4(Je(c),16);}catch($$e){$$je=E3($$e);if($$je instanceof CZ){break a;}else{throw $$e;}}return b;}L(B4(C(3),a.bB,a.t));}
function ABI(a){var b,c,d,e,f,g;b=3;c=1;d=a.W.data;e=d.length-2|0;f=Ui(d[a.t],8);switch(f){case -1:break;default:if(f>3)b=2;BU(a);a:{while(true){if(c>=b)break a;g=a.t;if(g>=e)break a;g=Ui(a.W.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BU(a);c=c+1|0;}}return f;}L(B4(C(3),a.bB,a.t));}
function ADR(a){var b,c,d,e;b=1;c=a.fL;a:while(true){d=a.t;e=a.W.data;if(d>=e.length)L(B4(C(3),a.bB,d));b:{c:{switch(e[d]){case 41:BU(a);return c|256;case 45:if(!b)L(B4(C(3),a.bB,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BU(a);}BU(a);return c;}
function BU(a){var b,c,d,e,f;b=a.t;a.hA=b;if(!(a.fL&4))a.t=b+1|0;else{c=a.W.data.length-2|0;a.t=b+1|0;a:while(true){d=a.t;if(d<c&&Rg(a.W.data[d])){a.t=a.t+1|0;continue;}d=a.t;if(d>=c)break;e=a.W.data;if(e[d]!=35)break;a.t=d+1|0;while(true){f=a.t;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.t=f+1|0;}}}return a.hA;}
function AC7(b){return AXE.Ej(b);}
function K8(a){var b,c,d,e;b=a.W.data[BU(a)];if(Cr(b)){c=a.hA+1|0;d=a.W.data;if(c<d.length){e=d[c];if(CO(e)){BU(a);return Eh(b,e);}}}return b;}
function Oa(a){return a.cZ;}
function Ic(){var a=this;BF.call(a);a.ya=null;a.xK=null;a.qX=0;}
function B4(a,b,c){var d=new Ic();IR(d,a,b,c);return d;}
function IR(a,b,c,d){X(a);a.qX=(-1);a.ya=b;a.xK=c;a.qX=d;}
var ADj=F();
function WE(){B.call(this);this.uI=null;}
function AM6(a,b){var c,d;c=a.uI;d=0;while(d<b.length){YM(c,b[d]);d=d+1|0;}}
var ABj=F(0);
function TO(){var a=this;B.call(a);a.p8=null;a.p9=null;a.p$=null;}
function AMG(a,b){a.p8.j(ARO(a.p9,b,a.p$));}
var RP=F(CC);
function AEP(a,b,c,d){var e;e=a.ds;BH(d,e,b-C5(d,e)|0);return a.e.d(b,c,d);}
function AOe(a,b){return 0;}
var Xf=F(CC);
function AGz(a,b,c,d){return b;}
var PU=F(CC);
function AFU(a,b,c,d){if(C5(d,a.ds)!=b)b=(-1);return b;}
function SU(){CC.call(this);this.nD=0;}
function AEV(a,b,c,d){var e;e=a.ds;BH(d,e,b-C5(d,e)|0);a.nD=b;return b;}
function AMR(a,b){return 0;}
var E_=F(CC);
function AP1(a,b,c,d){if(d.ja!=1&&b!=d.u)return (-1);d.iH=1;I$(d,0,b);return b;}
function BW(){BC.call(this);this.by=0;}
function Dc(a){BN(a);a.by=1;}
function AQ_(a,b,c,d){var e;if((b+a.bS()|0)>d.u){d.dc=1;return (-1);}e=a.bl(b,c);if(e<0)return (-1);return a.e.d(b+e|0,c,d);}
function AO7(a){return a.by;}
function AJN(a,b){return 1;}
var ACV=F(BW);
function Gl(a){var b=new ACV();ALk(b,a);return b;}
function ALk(a,b){J_(a,b);a.by=1;a.hg=1;a.by=0;}
function AOz(a,b,c){return 0;}
function AHU(a,b,c,d){var e,f,g;e=d.u;f=d.cD;while(true){g=BD(b,e);if(g>0)return (-1);if(g<0&&CO(I(c,b))&&b>f&&Cr(I(c,b-1|0))){b=b+1|0;continue;}if(a.e.d(b,c,d)>=0)break;b=b+1|0;}return b;}
function AGs(a,b,c,d,e){var f,g;f=e.u;g=e.cD;while(true){if(c<b)return (-1);if(c<f&&CO(I(d,c))&&c>g&&Cr(I(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.d(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AES(a,b){return 0;}
function BR(){var a=this;BC.call(a);a.bv=null;a.ee=null;a.S=0;}
function ASI(a,b){var c=new BR();Fa(c,a,b);return c;}
function Fa(a,b,c){BN(a);a.bv=b;a.ee=c;a.S=c.ds;}
function AIH(a,b,c,d){var e,f,g,h;if(a.bv===null)return (-1);e=Ff(d,a.S);Db(d,a.S,b);f=a.bv.k;g=0;while(true){if(g>=f){Db(d,a.S,e);return (-1);}h=(Bs(a.bv,g)).d(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AMJ(a,b){a.ee.e=b;}
function AKA(a,b){var c;a:{c=a.bv;if(c!==null){c=BO(c);while(true){if(!BP(c))break a;if(!(BS(c)).bM(b))continue;else return 1;}}}return 0;}
function ANo(a,b){return H1(b,a.S)>=0&&Ff(b,a.S)==H1(b,a.S)?0:1;}
function AGn(a){var b,c,d,e;a.b7=1;b=a.ee;if(b!==null&&!b.b7)Iz(b);a:{b=a.bv;if(b!==null){c=b.k;d=0;while(true){if(d>=c)break a;b=Bs(a.bv,d);e=b.e_();if(e===null)e=b;else{b.b7=1;Fi(a.bv,d);RF(a.bv,d,e);}if(!e.b7)e.ea();d=d+1|0;}}}if(a.e!==null)Iz(a);}
var Ir=F(BR);
function AMr(a,b,c,d){var e,f,g,h;e=C5(d,a.S);BH(d,a.S,b);f=a.bv.k;g=0;while(true){if(g>=f){BH(d,a.S,e);return (-1);}h=(Bs(a.bv,g)).d(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ANP(a,b){return !C5(b,a.S)?0:1;}
var Du=F(Ir);
function AG1(a,b,c,d){var e,f,g;e=C5(d,a.S);BH(d,a.S,b);f=a.bv.k;g=0;while(g<f){if((Bs(a.bv,g)).d(b,c,d)>=0)return a.e.d(a.ee.nD,c,d);g=g+1|0;}BH(d,a.S,e);return (-1);}
function ANx(a,b){a.e=b;}
var Mu=F(Du);
function AMD(a,b,c,d){var e,f;e=a.bv.k;f=0;while(f<e){if((Bs(a.bv,f)).d(b,c,d)>=0)return a.e.d(b,c,d);f=f+1|0;}return (-1);}
function APN(a,b){return 0;}
var VG=F(Du);
function AFC(a,b,c,d){var e,f;e=a.bv.k;f=0;while(true){if(f>=e)return a.e.d(b,c,d);if((Bs(a.bv,f)).d(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function APb(a,b){return 0;}
var Ri=F(Du);
function AGk(a,b,c,d){var e,f,g,h;e=a.bv.k;f=d.iN?0:d.cD;a:{g=a.e.d(b,c,d);if(g>=0){BH(d,a.S,b);h=0;while(true){if(h>=e)break a;if((Bs(a.bv,h)).cc(f,b,c,d)>=0){BH(d,a.S,(-1));return g;}h=h+1|0;}}}return (-1);}
function ARq(a,b){return 0;}
var Th=F(Du);
function AEt(a,b,c,d){var e,f;e=a.bv.k;BH(d,a.S,b);f=0;while(true){if(f>=e)return a.e.d(b,c,d);if((Bs(a.bv,f)).cc(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AN4(a,b){return 0;}
function F5(){BR.call(this);this.cL=null;}
function AS6(a,b){var c=new F5();Zu(c,a,b);return c;}
function Zu(a,b,c){BN(a);a.cL=b;a.ee=c;a.S=c.ds;}
function AEH(a,b,c,d){var e,f;e=Ff(d,a.S);Db(d,a.S,b);f=a.cL.d(b,c,d);if(f>=0)return f;Db(d,a.S,e);return (-1);}
function AKW(a,b,c,d){var e;e=a.cL.b9(b,c,d);if(e>=0)Db(d,a.S,e);return e;}
function AOj(a,b,c,d,e){var f;f=a.cL.cc(b,c,d,e);if(f>=0)Db(e,a.S,f);return f;}
function AKu(a,b){return a.cL.bM(b);}
function AMM(a){var b;b=new MS;Zu(b,a.cL,a.ee);a.e=b;return b;}
function AQE(a){var b;a.b7=1;b=a.ee;if(b!==null&&!b.b7)Iz(b);b=a.cL;if(b!==null&&!b.b7){b=b.e_();if(b!==null){a.cL.b7=1;a.cL=b;}a.cL.ea();}}
var AC_=F();
function X0(b,c){c.fC=b.startColumn-1|0;c.e5=b.startLineNumber-1|0;c.iv=b.endColumn-1|0;c.je=b.endLineNumber-1|0;}
function AEm(b,c,d,e){return {endColumn:b,endLineNumber:c,startColumn:d,startLineNumber:e};}
var Gk=F();
function Q(){var a=this;Gk.call(a);a.X=0;a.b6=0;a.G=null;a.jg=null;a.j2=null;a.I=0;}
var AXF=null;function ON(){ON=Bn(Q);AGN();}
function Bq(a){var b;ON();b=new Wx;b.y=By(64);a.G=b;}
function AFF(a){return null;}
function AE8(a){return a.G;}
function ABd(a){var b,c,d,e,f;if(!a.b6)b=GP(a.G,0)>=2048?0:1;else{a:{c=a.G;b=0;d=c.bi;if(b<d){e=c.y.data;f=(e[0]^(-1))>>>0|0;if(f)b=HU(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+HU(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AIY(a){return a.I;}
function AO4(a){return a;}
function YC(a){var b,c;if(a.j2===null){b=a.eH();c=new VS;c.yz=a;c.n9=b;Bq(c);a.j2=c;Ef(c,a.b6);}return a.j2;}
function G8(a){var b,c;if(a.jg===null){b=a.eH();c=new VQ;c.yc=a;c.uo=b;c.u_=a;Bq(c);a.jg=c;Ef(c,a.X);a.jg.I=a.I;}return a.jg;}
function AQy(a){return 0;}
function Ef(a,b){var c;c=a.X;if(c^b){a.X=c?0:1;a.b6=a.b6?0:1;}if(!a.I)a.I=1;return a;}
function AH0(a){return a.X;}
function JI(b,c){ON();return b.i(c);}
function HT(b,c){var d,e;ON();if(b.c8()!==null&&c.c8()!==null){b=b.c8();c=c.c8();d=Ba(b.y.data.length,c.y.data.length);e=0;a:{while(e<d){if(b.y.data[e]&c.y.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function R5(b,c){var d,e,f;ON();d=0;while(true){AN2();e=AXG.data;if(d>=e.length){f=new IJ;Bp(f,C(3));f.yR=C(3);f.yD=b;L(f);}e=e[d].data;if(BE(b,e[0]))break;d=d+1|0;}return ACq(e[1],c);}
function AGN(){var b;b=new GE;AN2();AXF=b;}
function Zj(){var a=this;Q.call(a);a.ln=0;a.nB=0;a.f7=0;a.kY=0;a.dH=0;a.e6=0;a.C=null;a.bs=null;}
function C6(){var a=new Zj();ARi(a);return a;}
function APS(a,b){var c=new Zj();AGB(c,a,b);return c;}
function ARi(a){Bq(a);a.C=ARr();}
function AGB(a,b,c){Bq(a);a.C=ARr();a.ln=b;a.nB=c;}
function Cj(a,b){a:{if(a.ln){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dH){L6(a.C,G_(b&65535));break a;}K1(a.C,G_(b&65535));break a;}if(a.nB&&b>128){a.f7=1;b=Ga(F9(b));}}}if(!(!SG(b)&&!OW(b))){if(a.kY)L6(a.G,b-55296|0);else K1(a.G,b-55296|0);}if(a.dH)L6(a.C,b);else K1(a.C,b);if(!a.I&&LI(b))a.I=1;return a;}
function AD0(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(a.kY){if(!b.b6)Fr(a.G,b.eH());else CV(a.G,b.eH());}else if(!b.b6)Fo(a.G,b.eH());else{E4(a.G,b.eH());CV(a.G,b.eH());a.b6=a.b6?0:1;a.kY=1;}if(!a.e6&&b.c8()!==null){if(a.dH){if(!b.X)Fr(a.C,b.c8());else CV(a.C,b.c8());}else if(!b.X)Fo(a.C,b.c8());else{E4(a.C,b.c8());CV(a.C,b.c8());a.X=a.X?0:1;a.dH=1;}}else{c=a.X;d=a.bs;if(d!==null){if(!c){e=new OE;e.w0=a;e.vH=c;e.uV=d;e.uG=b;Bq(e);a.bs=e;}else{e=new OF;e.y0=a;e.rG=c;e.re=d;e.qw=b;Bq(e);a.bs=e;}}else{if(c&&!a.dH&&
LM(a.C)){d=new OB;d.xJ=a;d.rr=b;Bq(d);a.bs=d;}else if(!c){d=new Oz;d.kE=a;d.jI=c;d.o7=b;Bq(d);a.bs=d;}else{d=new OA;d.lE=a;d.jQ=c;d.uL=b;Bq(d);a.bs=d;}a.e6=1;}}return a;}
function BT(a,b,c){var d,e,f,g,h;if(b>c){d=new BF;X(d);L(d);}a:{b:{if(!a.ln){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cj(a,b);b=b+1|0;}}if(!a.dH)Ht(a.C,b,c+1|0);else{d=a.C;c=c+1|0;if(b>c){d=new BV;X(d);L(d);}e=d.bi;if(b<e){f=Ba(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.y.data;h[g]=h[g]&(HN(d,b)|Hk(d,f));}else{h=d.y.data;h[g]=h[g]&HN(d,b);e=g+1|0;while(e<c){d.y.data[e]=0;e=e+1|0;}if(f&31){h=d.y.data;h[c]=h[c]&Hk(d,f);}}GH(d);}}}}return a;}
function X5(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.f7)a.f7=1;c=a.b6;if(!(c^b.b6)){if(!c)Fo(a.G,b.G);else CV(a.G,b.G);}else if(c)Fr(a.G,b.G);else{E4(a.G,b.G);CV(a.G,b.G);a.b6=1;}if(!a.e6&&CH(b)!==null){c=a.X;if(!(c^b.X)){if(!c)Fo(a.C,CH(b));else CV(a.C,CH(b));}else if(c)Fr(a.C,CH(b));else{E4(a.C,CH(b));CV(a.C,CH(b));a.X=1;}}else{c=a.X;d=a.bs;if(d!==null){if(!c){e=new Ot;e.wN=a;e.tJ=c;e.uK=d;e.vm=b;Bq(e);a.bs=e;}else{e=new O9;e.w9=a;e.vj=c;e.m8=d;e.nL=b;Bq(e);a.bs=e;}}else{if(!a.dH&&LM(a.C)){if(!c){d=new OC;d.y2
=a;d.qf=b;Bq(d);a.bs=d;}else{d=new OD;d.xb=a;d.u7=b;Bq(d);a.bs=d;}}else if(!c){d=new OG;d.tV=a;d.r0=b;d.ri=c;Bq(d);a.bs=d;}else{d=new OH;d.sl=a;d.sF=b;d.sY=c;Bq(d);a.bs=d;}a.e6=1;}}}
function Wj(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.f7)a.f7=1;c=a.b6;if(!(c^b.b6)){if(!c)CV(a.G,b.G);else Fo(a.G,b.G);}else if(!c)Fr(a.G,b.G);else{E4(a.G,b.G);CV(a.G,b.G);a.b6=0;}if(!a.e6&&CH(b)!==null){c=a.X;if(!(c^b.X)){if(!c)CV(a.C,CH(b));else Fo(a.C,CH(b));}else if(!c)Fr(a.C,CH(b));else{E4(a.C,CH(b));CV(a.C,CH(b));a.X=0;}}else{c=a.X;d=a.bs;if(d!==null){if(!c){e=new Ov;e.wZ=a;e.tZ=c;e.n3=d;e.rD=b;Bq(e);a.bs=e;}else{e=new Ow;e.xg=a;e.te=c;e.mW=d;e.tH=b;Bq(e);a.bs=e;}}else{if(!a.dH&&LM(a.C)){if(!c){d=new Or;d.xd
=a;d.pH=b;Bq(d);a.bs=d;}else{d=new Os;d.yW=a;d.pR=b;Bq(d);a.bs=d;}}else if(!c){d=new Ox;d.wv=a;d.vD=b;d.sw=c;Bq(d);a.bs=d;}else{d=new Oq;d.su=a;d.tm=b;d.rI=c;Bq(d);a.bs=d;}a.e6=1;}}}
function CL(a,b){var c;c=a.bs;if(c!==null)return a.X^c.i(b);return a.X^C$(a.C,b);}
function CH(a){if(!a.e6)return a.C;return null;}
function AHP(a){return a.G;}
function APu(a){var b,c;if(a.bs!==null)return a;b=CH(a);c=new Ou;c.wI=a;c.ik=b;Bq(c);return Ef(c,a.X);}
function ALR(a){var b,c,d;b=new R;U(b);c=GP(a.C,0);while(c>=0){HW(b,F3(c));BX(b,124);c=GP(a.C,c+1|0);}d=b.H;if(d>0)VI(b,d-1|0);return S(b);}
function AH3(a){return a.f7;}
function IJ(){var a=this;Bt.call(a);a.yR=null;a.yD=null;}
function DN(){BC.call(this);this.F=null;}
function CY(a,b,c,d){J_(a,c);a.F=b;a.hg=d;}
function ARh(a){return a.F;}
function AOk(a,b){return !a.F.bM(b)&&!a.e.bM(b)?0:1;}
function APT(a,b){return 1;}
function ALg(a){var b;a.b7=1;b=a.e;if(b!==null&&!b.b7){b=b.e_();if(b!==null){a.e.b7=1;a.e=b;}a.e.ea();}b=a.F;if(b!==null){if(!b.b7){b=b.e_();if(b!==null){a.F.b7=1;a.F=b;}a.F.ea();}else if(b instanceof F5&&b.ee.j6)a.F=b.e;}}
function CN(){DN.call(this);this.T=null;}
function AS_(a,b,c){var d=new CN();EB(d,a,b,c);return d;}
function EB(a,b,c,d){CY(a,b,c,d);a.T=b;}
function AEv(a,b,c,d){var e,f;e=0;a:{while((b+a.T.bS()|0)<=d.u){f=a.T.bl(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.d(b,c,d);if(f>=0)break;b=b-a.T.bS()|0;e=e+(-1)|0;}return f;}
function EP(){CN.call(this);this.i_=null;}
function ASa(a,b,c,d){var e=new EP();R_(e,a,b,c,d);return e;}
function R_(a,b,c,d,e){EB(a,c,d,e);a.i_=b;}
function AFm(a,b,c,d){var e,f,g,h,i;e=a.i_;f=e.eu;g=e.ep;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.T.bS()|0)>d.u)break a;i=a.T.bl(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.d(b,c,d);if(i>=0)break;b=b-a.T.bS()|0;h=h+(-1)|0;}return i;}if((b+a.T.bS()|0)>d.u){d.dc=1;return (-1);}i=a.T.bl(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CD=F(DN);
function AEG(a,b,c,d){var e;if(!a.F.E(d))return a.e.d(b,c,d);e=a.F.d(b,c,d);if(e>=0)return e;return a.e.d(b,c,d);}
var El=F(CN);
function AK2(a,b,c,d){var e;e=a.F.d(b,c,d);if(e<0)e=a.e.d(b,c,d);return e;}
function ARt(a,b){a.e=b;a.F.L(b);}
var VT=F(CN);
function AQ3(a,b,c,d){while((b+a.T.bS()|0)<=d.u&&a.T.bl(b,c)>0){b=b+a.T.bS()|0;}return a.e.d(b,c,d);}
function ALM(a,b,c,d){var e,f,g;e=a.e.b9(b,c,d);if(e<0)return (-1);f=e-a.T.bS()|0;while(f>=b&&a.T.bl(f,c)>0){g=f-a.T.bS()|0;e=f;f=g;}return e;}
function W(){var a=this;B.call(a);a.lK=null;a.kz=null;}
function ACq(a,b){if(!b&&a.lK===null)a.lK=a.A();else if(b&&a.kz===null)a.kz=Ef(a.A(),1);if(b)return a.kz;return a.lK;}
var CZ=F(BF);
function ML(){var a=this;Gk.call(a);a.eu=0;a.ep=0;}
function ALV(a){var b,c,d,e,f;b=a.eu;c=a.ep;d=c!=2147483647?KR(c):C(3);e=new R;U(e);BX(e,123);f=Bl(e,b);BX(f,44);BX(K(f,d),125);return S(e);}
var Of=F(BC);
function AKc(a,b,c,d){return b;}
function AMH(a,b){return 0;}
function Wx(){var a=this;B.call(a);a.y=null;a.bi=0;}
function ARr(){var a=new Wx();AGa(a);return a;}
function AGa(a){a.y=By(0);}
function K1(a,b){var c,d;c=b/32|0;if(b>=a.bi){HY(a,c+1|0);a.bi=b+1|0;}d=a.y.data;d[c]=d[c]|1<<(b%32|0);}
function Ht(a,b,c){var d,e,f,g,h;d=BD(b,c);if(d>0){e=new BV;X(e);L(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bi){HY(a,f+1|0);a.bi=c;}if(d==f){g=a.y.data;g[d]=g[d]|Hk(a,b)&HN(a,c);}else{g=a.y.data;g[d]=g[d]|Hk(a,b);h=d+1|0;while(h<f){a.y.data[h]=(-1);h=h+1|0;}if(c&31){g=a.y.data;g[f]=g[f]|HN(a,c);}}}
function Hk(a,b){return (-1)<<(b%32|0);}
function HN(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function L6(a,b){var c,d,e,f;c=b/32|0;d=a.y.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bi-1|0))GH(a);}}
function C$(a,b){var c,d;c=b/32|0;d=a.y.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function GP(a,b){var c,d,e,f;c=a.bi;if(b>=c)return (-1);d=b/32|0;e=a.y.data;f=e[d]>>>(b%32|0)|0;if(f)return HU(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+HU(e[f])|0;f=f+1|0;}return (-1);}
function HY(a,b){var c;c=a.y.data.length;if(c>=b)return;c=Z((b*3|0)/2|0,(c*2|0)+1|0);a.y=Ip(a.y,c);}
function GH(a){var b,c,d;b=(a.bi+31|0)/32|0;a.bi=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=ND(a.y.data[c]);if(d<32)break;c=c+(-1)|0;a.bi=a.bi-32|0;}a.bi=a.bi-d|0;}}
function CV(a,b){var c,d,e,f;c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&b.y.data[d];d=d+1|0;}while(true){f=a.y.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bi=Ba(a.bi,b.bi);GH(a);}
function Fr(a,b){var c,d,e;c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&(b.y.data[d]^(-1));d=d+1|0;}GH(a);}
function Fo(a,b){var c,d,e;c=Z(a.bi,b.bi);a.bi=c;HY(a,(c+31|0)/32|0);c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]|b.y.data[d];d=d+1|0;}}
function E4(a,b){var c,d,e;c=Z(a.bi,b.bi);a.bi=c;HY(a,(c+31|0)/32|0);c=Ba(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]^b.y.data[d];d=d+1|0;}GH(a);}
function LM(a){return a.bi?0:1;}
function MB(){var a=this;BR.call(a);a.pW=null;a.wH=0;}
function Qs(){var a=this;BR.call(a);a.l9=null;a.lG=null;}
function ABW(a,b){var c=new Qs();ADJ(c,a,b);return c;}
function ADJ(a,b,c){BN(a);a.l9=b;a.lG=c;}
function AFh(a,b,c,d){var e,f,g,h,i;e=a.l9.d(b,c,d);if(e<0)a:{f=a.lG;g=d.cD;e=d.u;h=b+1|0;e=BD(h,e);if(e>0){d.dc=1;e=(-1);}else{i=I(c,b);if(!f.pW.i(i))e=(-1);else{if(Cr(i)){if(e<0&&CO(I(c,h))){e=(-1);break a;}}else if(CO(i)&&b>g&&Cr(I(c,b-1|0))){e=(-1);break a;}e=f.e.d(h,c,d);}}}if(e>=0)return e;return (-1);}
function AMp(a,b){a.e=b;a.lG.e=b;a.l9.L(b);}
function AF1(a,b){return 1;}
function AFD(a,b){return 1;}
function Di(){var a=this;BR.call(a);a.dy=null;a.xE=0;}
function AJ_(a){var b=new Di();TU(b,a);return b;}
function TU(a,b){BN(a);a.dy=b.iU();a.xE=b.X;}
function AHF(a,b,c,d){var e,f,g,h;e=d.u;if(b<e){f=b+1|0;g=I(c,b);if(a.i(g)){h=a.e.d(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=I(c,f);if(G1(g,f)&&a.i(Eh(g,f)))return a.e.d(b,c,d);}}return (-1);}
function AIg(a,b){return a.dy.i(b);}
function AFb(a,b){if(b instanceof DC)return JI(a.dy,b.fu);if(b instanceof Eb)return JI(a.dy,b.c6);if(b instanceof Di)return HT(a.dy,b.dy);if(!(b instanceof DZ))return 1;return HT(a.dy,b.eU);}
function AJ2(a){return a.dy;}
function AOT(a,b){a.e=b;}
function AHR(a,b){return 1;}
var IG=F(Di);
function AJO(a,b){return a.dy.i(Ga(F9(b)));}
function Y$(){var a=this;BW.call(a);a.qM=null;a.xr=0;}
function AI0(a){var b=new Y$();AL4(b,a);return b;}
function AL4(a,b){Dc(a);a.qM=b.iU();a.xr=b.X;}
function AKd(a,b,c){return !a.qM.i(EG(Ek(I(c,b))))?(-1):1;}
function DZ(){var a=this;BW.call(a);a.eU=null;a.xV=0;}
function APl(a){var b=new DZ();ANa(b,a);return b;}
function ANa(a,b){Dc(a);a.eU=b.iU();a.xV=b.X;}
function Ma(a,b,c){return !a.eU.i(I(c,b))?(-1):1;}
function AML(a,b){if(b instanceof Eb)return JI(a.eU,b.c6);if(b instanceof DZ)return HT(a.eU,b.eU);if(!(b instanceof Di)){if(!(b instanceof DC))return 1;return 0;}return HT(a.eU,b.dy);}
function OO(){var a=this;BR.call(a);a.gq=null;a.lW=null;a.i9=0;}
function APB(a,b){var c=new OO();AEI(c,a,b);return c;}
function AEI(a,b,c){BN(a);a.gq=b;a.i9=c;}
function AK0(a,b){a.e=b;}
function QF(a){if(a.lW===null)a.lW=GY(a.gq);return a.lW;}
function AEk(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.u;f=By(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=I(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?FH([k,l]):FH([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.i9;if(b!=n)return (-1);while(true){if(l>=n)return a.e.d(i,c,d);if(m[l]!=a.gq.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=I(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=I(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.i9==3){k=f[0];m=a.gq.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.d(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.i9==2){b=f[0];m=a.gq.data;if(b==m[0]&&f[1]==m[1]){b=a.e.d(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AFR(a,b){return b instanceof OO&&!BE(QF(b),QF(a))?0:1;}
function APz(a,b){return 1;}
function Eb(){BW.call(this);this.c6=0;}
function ZD(a){var b=new Eb();ANd(b,a);return b;}
function ANd(a,b){Dc(a);a.c6=b;}
function AJX(a){return 1;}
function AIU(a,b,c){return a.c6!=I(c,b)?(-1):1;}
function AHC(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return Hc(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=HS(c,a.c6,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.d(b,c,d)>=0)break;}return f;}
function AJ5(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hm(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=G4(d,a.c6,c);if(f<0)break a;if(f<b)break a;if(a.e.d(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function APp(a,b){if(b instanceof Eb)return b.c6!=a.c6?0:1;if(!(b instanceof DZ)){if(b instanceof Di)return b.i(a.c6);if(!(b instanceof DC))return 1;return 0;}return Ma(b,0,Wy(a.c6))<=0?0:1;}
function ADv(){BW.call(this);this.mM=0;}
function ANA(a){var b=new ADv();ALH(b,a);return b;}
function ALH(a,b){Dc(a);a.mM=EG(Ek(b));}
function AEd(a,b,c){return a.mM!=EG(Ek(I(c,b)))?(-1):1;}
function X7(){var a=this;BW.call(a);a.vs=0;a.n0=0;}
function AGh(a){var b=new X7();AN0(b,a);return b;}
function AN0(a,b){Dc(a);a.vs=b;a.n0=G_(b);}
function AEA(a,b,c){return a.vs!=I(c,b)&&a.n0!=I(c,b)?(-1):1;}
function EY(){var a=this;BR.call(a);a.g_=0;a.kk=null;a.jL=null;a.jD=0;}
function ATU(a,b){var c=new EY();N4(c,a,b);return c;}
function N4(a,b,c){BN(a);a.g_=1;a.jL=b;a.jD=c;}
function AQC(a,b){a.e=b;}
function AMq(a,b,c,d){var e,f,g,h,i,j,k,l;e=By(4);f=d.u;if(b>=f)return (-1);g=JT(a,b,c,f);h=b+a.g_|0;i=AC7(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;C_(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=JT(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AC7(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.g_|0;if(h>=f){b=k;break a;}g=JT(a,h,c,f);b=k;}}}if(b!=a.jD)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.d(h,c,d);if(i[g]!=a.jL.data[g])break;g=g+1|0;}return (-1);}
function Wi(a){var b,c;if(a.kk===null){b=new R;U(b);c=0;while(c<a.jD){HW(b,F3(a.jL.data[c]));c=c+1|0;}a.kk=S(b);}return a.kk;}
function JT(a,b,c,d){var e,f,g;a.g_=1;if(b>=(d-1|0))e=I(c,b);else{d=b+1|0;e=I(c,b);f=I(c,d);if(G1(e,f)){g=B1(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Cr(g[0])&&CO(g[1])?Eh(g[0],g[1]):g[0];a.g_=2;}}return e;}
function AKe(a,b){return b instanceof EY&&!BE(Wi(b),Wi(a))?0:1;}
function ANy(a,b){return 1;}
var WW=F(EY);
var Tw=F(EY);
var XS=F(CD);
function AGF(a,b,c,d){var e;while(true){e=a.F.d(b,c,d);if(e<=0)break;b=e;}return a.e.d(b,c,d);}
var PJ=F(CD);
function ALz(a,b,c,d){var e;e=a.F.d(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.F.d(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.d(b,c,d);}
var Fq=F(CD);
function AOR(a,b,c,d){var e;if(!a.F.E(d))return a.e.d(b,c,d);e=a.F.d(b,c,d);if(e>=0)return e;return a.e.d(b,c,d);}
function AP6(a,b){a.e=b;a.F.L(b);}
var Pj=F(Fq);
function AJ0(a,b,c,d){var e;e=a.F.d(b,c,d);if(e<=0)e=b;return a.e.d(e,c,d);}
function ALZ(a,b){a.e=b;}
function EX(){var a=this;CD.call(a);a.fE=null;a.di=0;}
function AXH(a,b,c,d,e){var f=new EX();IE(f,a,b,c,d,e);return f;}
function IE(a,b,c,d,e,f){CY(a,c,d,e);a.fE=b;a.di=f;}
function ARo(a,b,c,d){var e,f;e=MF(d,a.di);if(!a.F.E(d))return a.e.d(b,c,d);if(e>=a.fE.ep)return a.e.d(b,c,d);f=a.di;e=e+1|0;DW(d,f,e);f=a.F.d(b,c,d);if(f>=0){DW(d,a.di,0);return f;}f=a.di;e=e+(-1)|0;DW(d,f,e);if(e>=a.fE.eu)return a.e.d(b,c,d);DW(d,a.di,0);return (-1);}
var MX=F(EX);
function AJm(a,b,c,d){var e,f,g;e=0;f=a.fE.ep;a:{while(true){g=a.F.d(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fE.eu)return (-1);return a.e.d(b,c,d);}
var RG=F(CD);
function AQO(a,b,c,d){var e;if(!a.F.E(d))return a.e.d(b,c,d);e=a.e.d(b,c,d);if(e>=0)return e;return a.F.d(b,c,d);}
var QE=F(Fq);
function AF3(a,b,c,d){var e;if(!a.F.E(d))return a.e.d(b,c,d);e=a.e.d(b,c,d);if(e<0)e=a.F.d(b,c,d);return e;}
var Up=F(EX);
function AE1(a,b,c,d){var e,f,g;e=MF(d,a.di);if(!a.F.E(d))return a.e.d(b,c,d);f=a.fE;if(e>=f.ep){DW(d,a.di,0);return a.e.d(b,c,d);}if(e<f.eu){DW(d,a.di,e+1|0);g=a.F.d(b,c,d);}else{g=a.e.d(b,c,d);if(g>=0){DW(d,a.di,0);return g;}DW(d,a.di,e+1|0);g=a.F.d(b,c,d);}return g;}
var RH=F(DN);
function ARd(a,b,c,d){var e;e=d.u;if(e>b)return a.e.cc(b,e,c,d);return a.e.d(b,c,d);}
function AO5(a,b,c,d){var e;e=d.u;if(a.e.cc(b,e,c,d)>=0)return b;return (-1);}
function Op(){DN.call(this);this.kw=null;}
function AMN(a,b,c,d){var e,f;e=d.u;f=Ur(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cc(b,e,c,d);return a.e.d(b,c,d);}
function AEq(a,b,c,d){var e,f,g,h;e=d.u;f=a.e.b9(b,c,d);if(f<0)return (-1);g=Ur(a,f,e,c);if(g>=0)e=g;g=Z(f,a.e.cc(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.kw.he(I(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Ur(a,b,c,d){while(true){if(b>=c)return (-1);if(a.kw.he(I(d,b)))break;b=b+1|0;}return b;}
var Ew=F();
var AXI=null;var AXJ=null;function Pl(b){var c;if(!(b&1)){c=AXJ;if(c!==null)return c;c=new UX;AXJ=c;return c;}c=AXI;if(c!==null)return c;c=new UW;AXI=c;return c;}
var XV=F(CN);
function AE2(a,b,c,d){var e;a:{while(true){if((b+a.T.bS()|0)>d.u)break a;e=a.T.bl(b,c);if(e<1)break;b=b+e|0;}}return a.e.d(b,c,d);}
var VN=F(El);
function ALv(a,b,c,d){var e;if((b+a.T.bS()|0)<=d.u){e=a.T.bl(b,c);if(e>=1)b=b+e|0;}return a.e.d(b,c,d);}
var O6=F(EP);
function AOl(a,b,c,d){var e,f,g,h,i;e=a.i_;f=e.eu;g=e.ep;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.T.bS()|0)>d.u)break a;i=a.T.bl(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.d(b,c,d);}if((b+a.T.bS()|0)>d.u){d.dc=1;return (-1);}i=a.T.bl(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Qy=F(CN);
function AMF(a,b,c,d){var e;while(true){e=a.e.d(b,c,d);if(e>=0)break;if((b+a.T.bS()|0)<=d.u){e=a.T.bl(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var TH=F(El);
function AFa(a,b,c,d){var e;e=a.e.d(b,c,d);if(e>=0)return e;return a.F.d(b,c,d);}
var Rj=F(EP);
function AOC(a,b,c,d){var e,f,g,h,i,j;e=a.i_;f=e.eu;g=e.ep;h=0;while(true){if(h>=f){a:{while(true){i=a.e.d(b,c,d);if(i>=0)break;if((b+a.T.bS()|0)<=d.u){i=a.T.bl(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.T.bS()|0)>d.u){d.dc=1;return (-1);}j=a.T.bl(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var JR=F(BC);
function AKy(a,b,c,d){if(b&&!(d.e8&&b==d.cD))return (-1);return a.e.d(b,c,d);}
function AJz(a,b){return 0;}
function ZN(){BC.call(this);this.uX=0;}
function APk(a){var b=new ZN();AJR(b,a);return b;}
function AJR(a,b){BN(a);a.uX=b;}
function AFA(a,b,c,d){var e,f,g;e=b<d.u?I(c,b):32;f=!b?32:I(c,b-1|0);g=d.iN?0:d.cD;return (e!=32&&!QJ(a,e,b,g,c)?0:1)^(f!=32&&!QJ(a,f,b-1|0,g,c)?0:1)^a.uX?(-1):a.e.d(b,c,d);}
function AFP(a,b){return 0;}
function QJ(a,b,c,d,e){var f;if(!I1(b)&&b!=95){a:{if(Ch(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=I(e,c);if(I1(f))return 0;if(Ch(f)!=6)return 1;}}return 1;}return 0;}
var Ok=F(BC);
function AJQ(a,b,c,d){if(b!=d.hl)return (-1);return a.e.d(b,c,d);}
function ARk(a,b){return 0;}
function WC(){BC.call(this);this.fN=0;}
function ATn(a){var b=new WC();ACW(b,a);return b;}
function ACW(a,b){BN(a);a.fN=b;}
function ANh(a,b,c,d){var e,f,g;e=!d.e8?H(c):d.u;if(b>=e){BH(d,a.fN,0);return a.e.d(b,c,d);}f=e-b|0;if(f==2&&I(c,b)==13&&I(c,b+1|0)==10){BH(d,a.fN,0);return a.e.d(b,c,d);}a:{if(f==1){g=I(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BH(d,a.fN,0);return a.e.d(b,c,d);}
function AGv(a,b){var c;c=!C5(b,a.fN)?0:1;BH(b,a.fN,(-1));return c;}
var V_=F(BC);
function AMm(a,b,c,d){if(b<(d.iN?H(c):d.u))return (-1);d.dc=1;d.ym=1;return a.e.d(b,c,d);}
function AEb(a,b){return 0;}
function M$(){BC.call(this);this.rQ=null;}
function AGl(a,b,c,d){a:{if(b!=d.u){if(!b)break a;if(d.e8&&b==d.cD)break a;if(a.rQ.th(I(c,b-1|0),I(c,b)))break a;}return (-1);}return a.e.d(b,c,d);}
function AIw(a,b){return 0;}
var ADl=F(BR);
function ATF(){var a=new ADl();AL_(a);return a;}
function AL_(a){BN(a);}
function AQU(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.dc=1;return (-1);}g=I(c,b);if(Cr(g)){h=b+2|0;if(h<=e&&G1(g,I(c,f)))return a.e.d(h,c,d);}return a.e.d(f,c,d);}
function AFT(a,b){a.e=b;}
function AL5(a){return (-2147483602);}
function AFS(a,b){return 1;}
function Zg(){BR.call(this);this.k6=null;}
function ATe(a){var b=new Zg();AGt(b,a);return b;}
function AGt(a,b){BN(a);a.k6=b;}
function AMf(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.dc=1;return (-1);}g=I(c,b);if(Cr(g)){b=b+2|0;if(b<=e){h=I(c,f);if(G1(g,h))return a.k6.he(Eh(g,h))?(-1):a.e.d(b,c,d);}}return a.k6.he(g)?(-1):a.e.d(f,c,d);}
function AOb(a,b){a.e=b;}
function AD8(a){return (-2147483602);}
function AQ$(a,b){return 1;}
function AC5(){BC.call(this);this.g5=0;}
function ASO(a){var b=new AC5();AIr(b,a);return b;}
function AIr(a,b){BN(a);a.g5=b;}
function AKi(a,b,c,d){var e;e=!d.e8?H(c):d.u;if(b>=e){BH(d,a.g5,0);return a.e.d(b,c,d);}if((e-b|0)==1&&I(c,b)==10){BH(d,a.g5,1);return a.e.d(b+1|0,c,d);}return (-1);}
function AIq(a,b){var c;c=!C5(b,a.g5)?0:1;BH(b,a.g5,(-1));return c;}
function ABg(){BC.call(this);this.g$=0;}
function ASt(a){var b=new ABg();AI1(b,a);return b;}
function AI1(a,b){BN(a);a.g$=b;}
function AMk(a,b,c,d){if((!d.e8?H(c)-b|0:d.u-b|0)<=0){BH(d,a.g$,0);return a.e.d(b,c,d);}if(I(c,b)!=10)return (-1);BH(d,a.g$,1);return a.e.d(b+1|0,c,d);}
function AIb(a,b){var c;c=!C5(b,a.g$)?0:1;BH(b,a.g$,(-1));return c;}
function X4(){BC.call(this);this.fi=0;}
function ARN(a){var b=new X4();ARp(b,a);return b;}
function ARp(a,b){BN(a);a.fi=b;}
function AJp(a,b,c,d){var e,f,g;e=!d.e8?H(c)-b|0:d.u-b|0;if(!e){BH(d,a.fi,0);return a.e.d(b,c,d);}if(e<2){f=I(c,b);g=97;}else{f=I(c,b);g=I(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BH(d,a.fi,0);return a.e.d(b,c,d);case 13:if(g!=10){BH(d,a.fi,0);return a.e.d(b,c,d);}BH(d,a.fi,0);return a.e.d(b,c,d);default:}return (-1);}
function AGy(a,b){var c;c=!C5(b,a.fi)?0:1;BH(b,a.fi,(-1));return c;}
function GF(){var a=this;BR.call(a);a.nt=0;a.gk=0;}
function ATP(a,b){var c=new GF();OV(c,a,b);return c;}
function OV(a,b,c){BN(a);a.nt=b;a.gk=c;}
function AE7(a,b,c,d){var e,f,g,h;e=FM(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=0;while(true){if(f>=H(e)){BH(d,a.gk,H(e));return a.e.d(b+H(e)|0,c,d);}g=I(e,f);h=b+f|0;if(g!=I(c,h)&&G_(I(e,f))!=I(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ANu(a,b){a.e=b;}
function FM(a,b){var c,d;c=a.nt;d=Ff(b,c);c=H1(b,c);return (c|d|(c-d|0))>=0&&c<=H(b.k9)?B9(b.k9,d,c):null;}
function ANR(a,b){var c;c=!C5(b,a.gk)?0:1;BH(b,a.gk,(-1));return c;}
var ADa=F(GF);
function ARS(a,b){var c=new ADa();APV(c,a,b);return c;}
function APV(a,b,c){OV(a,b,c);}
function AGE(a,b,c,d){var e,f;e=FM(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=!TT(c,e,b)?(-1):H(e);if(f<0)return (-1);BH(d,a.gk,f);return a.e.d(b+f|0,c,d);}return (-1);}
function APJ(a,b,c,d){var e,f;e=FM(a,d);f=d.cD;if(e!==null&&(b+H(e)|0)<=f){while(true){if(b>f)return (-1);b=PM(c,e,b);if(b<0)return (-1);if(a.e.d(b+H(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AEQ(a,b,c,d,e){var f,g;f=FM(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=PZ(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.d(g+H(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ALn(a,b){return 1;}
var AAu=F(GF);
function ASu(a,b){var c=new AAu();AIn(c,a,b);return c;}
function AIn(a,b,c){OV(a,b,c);}
function AKQ(a,b,c,d){var e,f;e=FM(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=0;while(true){if(f>=H(e)){BH(d,a.gk,H(e));return a.e.d(b+H(e)|0,c,d);}if(EG(Ek(I(e,f)))!=EG(Ek(I(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Oe=F(FU);
function AH4(a,b,c,d,e){MP(a,b,c,d,e);return a;}
function AFG(a,b,c,d){WK(a,b,c,d);return a;}
function AF_(a,b){I9(a,b);}
function AO6(a,b,c){W1(a,b,c);return a;}
function RJ(){var a=this;BW.call(a);a.cj=null;a.kn=null;a.ld=null;}
function AGZ(a,b,c){return !JQ(a,c,b)?(-1):a.by;}
function AFv(a,b,c,d){var e,f,g;e=d.u;while(true){if(b>e)return (-1);f=I(a.cj,a.by-1|0);a:{while(true){g=a.by;if(b>(e-g|0)){b=(-1);break a;}g=I(c,(b+g|0)-1|0);if(g==f&&JQ(a,c,b))break;b=b+SN(a.kn,g)|0;}}if(b<0)return (-1);if(a.e.d(b+a.by|0,c,d)>=0)break;b=b+1|0;}return b;}
function AIu(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=I(a.cj,0);g=(H(d)-c|0)-a.by|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=I(d,c);if(g==f&&JQ(a,d,c))break;c=c-SN(a.ld,g)|0;}}if(c<0)return (-1);if(a.e.d(c+a.by|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AI7(a,b){var c;if(b instanceof Eb)return b.c6!=I(a.cj,0)?0:1;if(b instanceof DZ)return Ma(b,0,B9(a.cj,0,1))<=0?0:1;if(!(b instanceof Di)){if(!(b instanceof DC))return 1;return H(a.cj)>1&&b.fu==Eh(I(a.cj,0),I(a.cj,1))?1:0;}a:{b:{b=b;if(!b.i(I(a.cj,0))){if(H(a.cj)<=1)break b;if(!b.i(Eh(I(a.cj,0),I(a.cj,1))))break b;}c=1;break a;}c=0;}return c;}
function JQ(a,b,c){var d;d=0;while(d<a.by){if(I(b,d+c|0)!=I(a.cj,d))return 0;d=d+1|0;}return 1;}
function X3(){BW.call(this);this.iQ=null;}
function ATT(a){var b=new X3();APq(b,a);return b;}
function APq(a,b){var c,d,e;Dc(a);c=new R;U(c);d=0;while(true){e=BD(d,b.H);if(e>=0){a.iQ=S(c);a.by=c.H;return;}if(d<0)break;if(e>=0)break;BX(c,EG(Ek(b.M.data[d])));d=d+1|0;}b=new BV;X(b);L(b);}
function AKY(a,b,c){var d;d=0;while(true){if(d>=H(a.iQ))return H(a.iQ);if(I(a.iQ,d)!=EG(Ek(I(c,b+d|0))))break;d=d+1|0;}return (-1);}
function M3(){BW.call(this);this.g3=null;}
function AOp(a,b,c){var d,e,f;d=0;while(true){if(d>=H(a.g3))return H(a.g3);e=I(a.g3,d);f=b+d|0;if(e!=I(c,f)&&G_(I(a.g3,d))!=I(c,f))break;d=d+1|0;}return (-1);}
var GE=F();
var AXK=null;var AXL=null;var AXG=null;function AN2(){AN2=Bn(GE);AHm();}
function AHm(){AXK=ATv();AXL=ASH();AXG=G($rt_arraycls(B),[G(B,[C(317),ATQ()]),G(B,[C(318),ARK()]),G(B,[C(319),ATr()]),G(B,[C(320),ATA()]),G(B,[C(321),AXL]),G(B,[C(322),AST()]),G(B,[C(323),ASE()]),G(B,[C(324),ARU()]),G(B,[C(325),ARR()]),G(B,[C(326),ARZ()]),G(B,[C(327),ASc()]),G(B,[C(328),ARX()]),G(B,[C(329),AS$()]),G(B,[C(330),ARE()]),G(B,[C(331),ATw()]),G(B,[C(332),ASb()]),G(B,[C(333),ASR()]),G(B,[C(334),AR_()]),G(B,[C(335),ASS()]),G(B,[C(336),AR1()]),G(B,[C(337),ATE()]),G(B,[C(338),AR5()]),G(B,[C(339),ASY()]),
G(B,[C(340),ATq()]),G(B,[C(341),ATo()]),G(B,[C(342),ATB()]),G(B,[C(343),AR0()]),G(B,[C(344),ATd()]),G(B,[C(345),AXK]),G(B,[C(346),AS2()]),G(B,[C(347),ARV()]),G(B,[C(348),AXK]),G(B,[C(349),ARA()]),G(B,[C(350),AXL]),G(B,[C(351),ASk()]),G(B,[C(352),N(0,127)]),G(B,[C(353),N(128,255)]),G(B,[C(354),N(256,383)]),G(B,[C(355),N(384,591)]),G(B,[C(356),N(592,687)]),G(B,[C(357),N(688,767)]),G(B,[C(358),N(768,879)]),G(B,[C(359),N(880,1023)]),G(B,[C(360),N(1024,1279)]),G(B,[C(361),N(1280,1327)]),G(B,[C(362),N(1328,1423)]),
G(B,[C(363),N(1424,1535)]),G(B,[C(364),N(1536,1791)]),G(B,[C(365),N(1792,1871)]),G(B,[C(366),N(1872,1919)]),G(B,[C(367),N(1920,1983)]),G(B,[C(368),N(2304,2431)]),G(B,[C(369),N(2432,2559)]),G(B,[C(370),N(2560,2687)]),G(B,[C(371),N(2688,2815)]),G(B,[C(372),N(2816,2943)]),G(B,[C(373),N(2944,3071)]),G(B,[C(374),N(3072,3199)]),G(B,[C(375),N(3200,3327)]),G(B,[C(376),N(3328,3455)]),G(B,[C(377),N(3456,3583)]),G(B,[C(378),N(3584,3711)]),G(B,[C(379),N(3712,3839)]),G(B,[C(380),N(3840,4095)]),G(B,[C(381),N(4096,4255)]),
G(B,[C(382),N(4256,4351)]),G(B,[C(383),N(4352,4607)]),G(B,[C(384),N(4608,4991)]),G(B,[C(385),N(4992,5023)]),G(B,[C(386),N(5024,5119)]),G(B,[C(387),N(5120,5759)]),G(B,[C(388),N(5760,5791)]),G(B,[C(389),N(5792,5887)]),G(B,[C(390),N(5888,5919)]),G(B,[C(391),N(5920,5951)]),G(B,[C(392),N(5952,5983)]),G(B,[C(393),N(5984,6015)]),G(B,[C(394),N(6016,6143)]),G(B,[C(395),N(6144,6319)]),G(B,[C(396),N(6400,6479)]),G(B,[C(397),N(6480,6527)]),G(B,[C(398),N(6528,6623)]),G(B,[C(399),N(6624,6655)]),G(B,[C(400),N(6656,6687)]),
G(B,[C(401),N(7424,7551)]),G(B,[C(402),N(7552,7615)]),G(B,[C(403),N(7616,7679)]),G(B,[C(404),N(7680,7935)]),G(B,[C(405),N(7936,8191)]),G(B,[C(406),N(8192,8303)]),G(B,[C(407),N(8304,8351)]),G(B,[C(408),N(8352,8399)]),G(B,[C(409),N(8400,8447)]),G(B,[C(410),N(8448,8527)]),G(B,[C(411),N(8528,8591)]),G(B,[C(412),N(8592,8703)]),G(B,[C(413),N(8704,8959)]),G(B,[C(414),N(8960,9215)]),G(B,[C(415),N(9216,9279)]),G(B,[C(416),N(9280,9311)]),G(B,[C(417),N(9312,9471)]),G(B,[C(418),N(9472,9599)]),G(B,[C(419),N(9600,9631)]),
G(B,[C(420),N(9632,9727)]),G(B,[C(421),N(9728,9983)]),G(B,[C(422),N(9984,10175)]),G(B,[C(423),N(10176,10223)]),G(B,[C(424),N(10224,10239)]),G(B,[C(425),N(10240,10495)]),G(B,[C(426),N(10496,10623)]),G(B,[C(427),N(10624,10751)]),G(B,[C(428),N(10752,11007)]),G(B,[C(429),N(11008,11263)]),G(B,[C(430),N(11264,11359)]),G(B,[C(431),N(11392,11519)]),G(B,[C(432),N(11520,11567)]),G(B,[C(433),N(11568,11647)]),G(B,[C(434),N(11648,11743)]),G(B,[C(435),N(11776,11903)]),G(B,[C(436),N(11904,12031)]),G(B,[C(437),N(12032,12255)]),
G(B,[C(438),N(12272,12287)]),G(B,[C(439),N(12288,12351)]),G(B,[C(440),N(12352,12447)]),G(B,[C(441),N(12448,12543)]),G(B,[C(442),N(12544,12591)]),G(B,[C(443),N(12592,12687)]),G(B,[C(444),N(12688,12703)]),G(B,[C(445),N(12704,12735)]),G(B,[C(446),N(12736,12783)]),G(B,[C(447),N(12784,12799)]),G(B,[C(448),N(12800,13055)]),G(B,[C(449),N(13056,13311)]),G(B,[C(450),N(13312,19893)]),G(B,[C(451),N(19904,19967)]),G(B,[C(452),N(19968,40959)]),G(B,[C(453),N(40960,42127)]),G(B,[C(454),N(42128,42191)]),G(B,[C(455),N(42752,
42783)]),G(B,[C(456),N(43008,43055)]),G(B,[C(457),N(44032,55203)]),G(B,[C(458),N(55296,56191)]),G(B,[C(459),N(56192,56319)]),G(B,[C(460),N(56320,57343)]),G(B,[C(461),N(57344,63743)]),G(B,[C(462),N(63744,64255)]),G(B,[C(463),N(64256,64335)]),G(B,[C(464),N(64336,65023)]),G(B,[C(465),N(65024,65039)]),G(B,[C(466),N(65040,65055)]),G(B,[C(467),N(65056,65071)]),G(B,[C(468),N(65072,65103)]),G(B,[C(469),N(65104,65135)]),G(B,[C(470),N(65136,65279)]),G(B,[C(471),N(65280,65519)]),G(B,[C(472),N(0,1114111)]),G(B,[C(473),
ARY()]),G(B,[C(474),BI(0,1)]),G(B,[C(475),Id(62,1)]),G(B,[C(476),BI(1,1)]),G(B,[C(477),BI(2,1)]),G(B,[C(478),BI(3,0)]),G(B,[C(479),BI(4,0)]),G(B,[C(480),BI(5,1)]),G(B,[C(481),Id(448,1)]),G(B,[C(482),BI(6,1)]),G(B,[C(483),BI(7,0)]),G(B,[C(484),BI(8,1)]),G(B,[C(485),Id(3584,1)]),G(B,[C(486),BI(9,1)]),G(B,[C(487),BI(10,1)]),G(B,[C(488),BI(11,1)]),G(B,[C(489),Id(28672,0)]),G(B,[C(490),BI(12,0)]),G(B,[C(491),BI(13,0)]),G(B,[C(492),BI(14,0)]),G(B,[C(493),ASy(983040,1,1)]),G(B,[C(494),BI(15,0)]),G(B,[C(495),BI(16,
1)]),G(B,[C(496),BI(18,1)]),G(B,[C(497),ASL(19,0,1)]),G(B,[C(498),Id(1643118592,1)]),G(B,[C(499),BI(20,0)]),G(B,[C(500),BI(21,0)]),G(B,[C(501),BI(22,0)]),G(B,[C(502),BI(23,0)]),G(B,[C(503),BI(24,1)]),G(B,[C(504),Id(2113929216,1)]),G(B,[C(505),BI(25,1)]),G(B,[C(506),BI(26,0)]),G(B,[C(507),BI(27,0)]),G(B,[C(508),BI(28,1)]),G(B,[C(509),BI(29,0)]),G(B,[C(510),BI(30,0)])]);}
function Mk(){BW.call(this);this.ra=0;}
function AOu(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.ra!=Ga(F9(Eh(e,d)))?(-1):2;}
function Ks(){BR.call(this);this.f5=0;}
function AL9(a){var b=new Ks();AF8(b,a);return b;}
function AF8(a,b){BN(a);a.f5=b;}
function AMC(a,b){a.e=b;}
function AGw(a,b,c,d){var e,f;e=b+1|0;if(e>d.u){d.dc=1;return (-1);}f=I(c,b);if(b>d.cD&&Cr(I(c,b-1|0)))return (-1);if(a.f5!=f)return (-1);return a.e.d(e,c,d);}
function AI4(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return Hc(a,b,c,d);e=d.cD;f=d.u;while(true){if(b>=f)return (-1);g=HS(c,a.f5,b);if(g<0)return (-1);if(g>e&&Cr(I(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.d(b,c,d)>=0)break;}return g;}
function AG6(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hm(a,b,c,d,e);f=e.cD;a:{while(true){if(c<b)return (-1);g=G4(d,a.f5,c);if(g<0)break a;if(g<b)break a;if(g>f&&Cr(I(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.d(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AEN(a,b){if(b instanceof Eb)return 0;if(b instanceof DZ)return 0;if(b instanceof Di)return 0;if(b instanceof DC)return 0;if(b instanceof KK)return 0;if(!(b instanceof Ks))return 1;return b.f5!=a.f5?0:1;}
function APd(a,b){return 1;}
function KK(){BR.call(this);this.fB=0;}
function AJt(a){var b=new KK();AMg(b,a);return b;}
function AMg(a,b){BN(a);a.fB=b;}
function AF$(a,b){a.e=b;}
function AEu(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;g=BD(f,e);if(g>0){d.dc=1;return (-1);}h=I(c,b);if(g<0&&CO(I(c,f)))return (-1);if(a.fB!=h)return (-1);return a.e.d(f,c,d);}
function AMZ(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hc(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=HS(c,a.fB,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CO(I(c,b))){b=f+2|0;continue;}if(a.e.d(b,c,d)>=0)break;}return f;}
function AOn(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hm(a,b,c,d,e);f=e.u;a:{while(true){if(c<b)return (-1);g=G4(d,a.fB,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CO(I(d,c))){c=g+(-1)|0;continue;}if(a.e.d(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AG0(a,b){if(b instanceof Eb)return 0;if(b instanceof DZ)return 0;if(b instanceof Di)return 0;if(b instanceof DC)return 0;if(b instanceof Ks)return 0;if(!(b instanceof KK))return 1;return b.fB!=a.fB?0:1;}
function AM$(a,b){return 1;}
function DC(){var a=this;BW.call(a);a.jw=0;a.id=0;a.fu=0;}
function ANS(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.jw==e&&a.id==d?2:(-1);}
function ALS(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hc(a,b,c,d);e=d.u;while(b<e){b=HS(c,a.jw,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=I(c,b);if(a.id==f&&a.e.d(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AF9(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hm(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=G4(d,a.id,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.jw==I(d,f)&&a.e.d(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ANC(a,b){if(b instanceof DC)return b.fu!=a.fu?0:1;if(b instanceof Di)return b.i(a.fu);if(b instanceof Eb)return 0;if(!(b instanceof DZ))return 1;return 0;}
var UW=F(Ew);
function AGi(a,b){return b!=10?0:1;}
function ANL(a,b,c){return b!=10?0:1;}
var UX=F(Ew);
function AOG(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AQs(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ACd(){var a=this;B.call(a);a.my=null;a.jP=null;a.gH=0;a.v$=0;}
function AL3(a){var b=new ACd();AJP(b,a);return b;}
function AJP(a,b){var c,d;while(true){c=a.gH;if(b<c)break;a.gH=c<<1|1;}d=c<<1|1;a.gH=d;d=d+1|0;a.my=By(d);a.jP=By(d);a.v$=b;}
function Ro(a,b,c){var d,e,f,g;d=0;e=a.gH;f=b&e;while(true){g=a.my.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jP.data[f]=c;}
function SN(a,b){var c,d,e,f;c=a.gH;d=b&c;e=0;while(true){f=a.my.data[d];if(!f)break;if(f==b)return a.jP.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.v$;}
var Yr=F();
var Kp=F(W);
function ATv(){var a=new Kp();AJn(a);return a;}
function AJn(a){}
function AAB(a){return Cj(BT(C6(),9,13),32);}
var Js=F(W);
function ASH(){var a=new Js();AO_(a);return a;}
function AO_(a){}
function AA$(a){return BT(C6(),48,57);}
var AB8=F(W);
function ATQ(){var a=new AB8();AIJ(a);return a;}
function AIJ(a){}
function AOd(a){return BT(C6(),97,122);}
var ACD=F(W);
function ARK(){var a=new ACD();AJT(a);return a;}
function AJT(a){}
function APf(a){return BT(C6(),65,90);}
var ACG=F(W);
function ATr(){var a=new ACG();AFw(a);return a;}
function AFw(a){}
function AHG(a){return BT(C6(),0,127);}
var Kh=F(W);
function ATA(){var a=new Kh();AGH(a);return a;}
function AGH(a){}
function Zl(a){return BT(BT(C6(),97,122),65,90);}
var KZ=F(Kh);
function AST(){var a=new KZ();AJx(a);return a;}
function AJx(a){}
function AAa(a){return BT(Zl(a),48,57);}
var ADZ=F(W);
function ASE(){var a=new ADZ();ALC(a);return a;}
function ALC(a){}
function AI3(a){return BT(BT(BT(C6(),33,64),91,96),123,126);}
var L8=F(KZ);
function ARU(){var a=new L8();ANn(a);return a;}
function ANn(a){}
function X1(a){return BT(BT(BT(AAa(a),33,64),91,96),123,126);}
var AAO=F(L8);
function ARR(){var a=new AAO();AO3(a);return a;}
function AO3(a){}
function ALh(a){return Cj(X1(a),32);}
var AA4=F(W);
function ARZ(){var a=new AA4();AOr(a);return a;}
function AOr(a){}
function AGT(a){return Cj(Cj(C6(),32),9);}
var ZF=F(W);
function ASc(){var a=new ZF();AQj(a);return a;}
function AQj(a){}
function ALe(a){return Cj(BT(C6(),0,31),127);}
var Zt=F(W);
function ARX(){var a=new Zt();AFO(a);return a;}
function AFO(a){}
function AQx(a){return BT(BT(BT(C6(),48,57),97,102),65,70);}
var ACJ=F(W);
function AS$(){var a=new ACJ();AFk(a);return a;}
function AFk(a){}
function AL1(a){var b;b=new SX;b.xD=a;Bq(b);b.I=1;return b;}
var AD7=F(W);
function ARE(){var a=new AD7();ANH(a);return a;}
function ANH(a){}
function AEn(a){var b;b=new Mz;b.xL=a;Bq(b);b.I=1;return b;}
var ACe=F(W);
function ATw(){var a=new ACe();AFz(a);return a;}
function AFz(a){}
function AJu(a){var b;b=new R1;b.xn=a;Bq(b);return b;}
var ABZ=F(W);
function ASb(){var a=new ABZ();ALf(a);return a;}
function ALf(a){}
function ANY(a){var b;b=new R0;b.xf=a;Bq(b);return b;}
var ACX=F(W);
function ASR(){var a=new ACX();AGD(a);return a;}
function AGD(a){}
function AGQ(a){var b;b=new Wl;b.yu=a;Bq(b);Ht(b.G,0,2048);b.I=1;return b;}
var YH=F(W);
function AR_(){var a=new YH();AGe(a);return a;}
function AGe(a){}
function AHf(a){var b;b=new OY;b.xZ=a;Bq(b);b.I=1;return b;}
var Yk=F(W);
function ASS(){var a=new Yk();AKV(a);return a;}
function AKV(a){}
function AQp(a){var b;b=new N_;b.yU=a;Bq(b);b.I=1;return b;}
var ACl=F(W);
function AR1(){var a=new ACl();ALD(a);return a;}
function ALD(a){}
function AEe(a){var b;b=new QX;b.xF=a;Bq(b);return b;}
var ACv=F(W);
function ATE(){var a=new ACv();AJe(a);return a;}
function AJe(a){}
function AKm(a){var b;b=new Ms;b.wB=a;Bq(b);b.I=1;return b;}
var Z3=F(W);
function AR5(){var a=new Z3();AER(a);return a;}
function AER(a){}
function AHq(a){var b;b=new Mx;b.x2=a;Bq(b);b.I=1;return b;}
var AA9=F(W);
function ASY(){var a=new AA9();AGj(a);return a;}
function AGj(a){}
function AIz(a){var b;b=new NG;b.yr=a;Bq(b);b.I=1;return b;}
var ADF=F(W);
function ATq(){var a=new ADF();AKr(a);return a;}
function AKr(a){}
function AKo(a){var b;b=new Pn;b.yG=a;Bq(b);b.I=1;return b;}
var ACs=F(W);
function ATo(){var a=new ACs();ALU(a);return a;}
function ALU(a){}
function APC(a){var b;b=new PA;b.xq=a;Bq(b);return b;}
var AAr=F(W);
function ATB(){var a=new AAr();AGf(a);return a;}
function AGf(a){}
function ANe(a){var b;b=new Tq;b.x$=a;Bq(b);return b;}
var Z1=F(W);
function AR0(){var a=new Z1();ANZ(a);return a;}
function ANZ(a){}
function ALT(a){var b;b=new SF;b.wF=a;Bq(b);b.I=1;return b;}
var AD3=F(W);
function ATd(){var a=new AD3();AI$(a);return a;}
function AI$(a){}
function AN8(a){var b;b=new MG;b.y3=a;Bq(b);b.I=1;return b;}
var IU=F(W);
function AS2(){var a=new IU();AHx(a);return a;}
function AHx(a){}
function AA6(a){return Cj(BT(BT(BT(C6(),97,122),65,90),48,57),95);}
var AC2=F(IU);
function ARV(){var a=new AC2();AJh(a);return a;}
function AJh(a){}
function ALG(a){var b;b=Ef(AA6(a),1);b.I=1;return b;}
var AAS=F(Kp);
function ARA(){var a=new AAS();AP8(a);return a;}
function AP8(a){}
function AFs(a){var b;b=Ef(AAB(a),1);b.I=1;return b;}
var ZW=F(Js);
function ASk(){var a=new ZW();AKb(a);return a;}
function AKb(a){}
function AIQ(a){var b;b=Ef(AA$(a),1);b.I=1;return b;}
function Zy(){var a=this;W.call(a);a.qZ=0;a.rK=0;}
function N(a,b){var c=new Zy();AQm(c,a,b);return c;}
function AQm(a,b,c){a.qZ=b;a.rK=c;}
function AKC(a){return BT(C6(),a.qZ,a.rK);}
var ZS=F(W);
function ARY(){var a=new ZS();AQG(a);return a;}
function AQG(a){}
function AQe(a){return BT(BT(C6(),65279,65279),65520,65533);}
function AAF(){var a=this;W.call(a);a.l3=0;a.jC=0;a.po=0;}
function BI(a,b){var c=new AAF();AGx(c,a,b);return c;}
function ASL(a,b,c){var d=new AAF();AQo(d,a,b,c);return d;}
function AGx(a,b,c){a.jC=c;a.l3=b;}
function AQo(a,b,c,d){a.po=d;a.jC=c;a.l3=b;}
function AH7(a){var b;b=ATM(a.l3);if(a.po)Ht(b.G,0,2048);b.I=a.jC;return b;}
function AAP(){var a=this;W.call(a);a.l1=0;a.jS=0;a.nF=0;}
function Id(a,b){var c=new AAP();AHr(c,a,b);return c;}
function ASy(a,b,c){var d=new AAP();AEg(d,a,b,c);return d;}
function AHr(a,b,c){a.jS=c;a.l1=b;}
function AEg(a,b,c,d){a.nF=d;a.jS=c;a.l1=b;}
function AEf(a){var b;b=new RS;ABJ(b,a.l1);if(a.nF)Ht(b.G,0,2048);b.I=a.jS;return b;}
var ZB=F();
var Y8=F();
function AAo(b){var c,d,e,f,g,h,i;c=AOg(E2(b));d=Jg(c);e=By(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+Jg(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=MW(c);h=h+1|0;}return e;}
function J1(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Na(){var a=this;B.call(a);a.pV=0;a.r8=0;a.qb=null;}
function AH5(a,b,c){var d=new Na();AO1(d,a,b,c);return d;}
function AO1(a,b,c,d){a.pV=b;a.r8=c;a.qb=d;}
function ACo(){var a=this;B.call(a);a.oD=null;a.q8=0;}
function AOg(a){var b=new ACo();AG3(b,a);return b;}
function AG3(a,b){a.oD=b;}
var AAn=F();
function Jg(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.oD.data;f=b.q8;b.q8=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+T(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function MW(b){var c,d;c=Jg(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var T9=F(ED);
function W3(a){KS(a);return a.fO;}
var Rh=F(ED);
function Zh(){B.call(this);this.Kr=null;}
function UR(){var a=this;B.call(a);a.y5=null;a.iY=null;}
function AHL(a,b){var c;c=a.iY;b=b;a.iY=OU(!c.ms&&!b.d2?0:1);return 1;}
function VS(){var a=this;Q.call(a);a.n9=null;a.yz=null;}
function AHN(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b6^C$(a.n9,c):0;}
function VQ(){var a=this;Q.call(a);a.uo=null;a.u_=null;a.yc=null;}
function AEE(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b6^C$(a.uo,c):0;return a.u_.i(b)&&!d?1:0;}
function Ou(){var a=this;Q.call(a);a.ik=null;a.wI=null;}
function AKs(a,b){return a.X^C$(a.ik,b);}
function AIE(a){var b,c,d;b=new R;U(b);c=GP(a.ik,0);while(c>=0){HW(b,F3(c));BX(b,124);c=GP(a.ik,c+1|0);}d=b.H;if(d>0)VI(b,d-1|0);return S(b);}
function OB(){var a=this;Q.call(a);a.rr=null;a.xJ=null;}
function ANW(a,b){return a.rr.i(b);}
function Oz(){var a=this;Q.call(a);a.jI=0;a.o7=null;a.kE=null;}
function AOt(a,b){return !(a.jI^C$(a.kE.C,b))&&!(a.jI^a.kE.dH^a.o7.i(b))?0:1;}
function OA(){var a=this;Q.call(a);a.jQ=0;a.uL=null;a.lE=null;}
function AKX(a,b){return !(a.jQ^C$(a.lE.C,b))&&!(a.jQ^a.lE.dH^a.uL.i(b))?1:0;}
function OE(){var a=this;Q.call(a);a.vH=0;a.uV=null;a.uG=null;a.w0=null;}
function AHj(a,b){return a.vH^(!a.uV.i(b)&&!a.uG.i(b)?0:1);}
function OF(){var a=this;Q.call(a);a.rG=0;a.re=null;a.qw=null;a.y0=null;}
function AD9(a,b){return a.rG^(!a.re.i(b)&&!a.qw.i(b)?0:1)?0:1;}
function OC(){var a=this;Q.call(a);a.qf=null;a.y2=null;}
function AIK(a,b){return CL(a.qf,b);}
function OD(){var a=this;Q.call(a);a.u7=null;a.xb=null;}
function AKZ(a,b){return CL(a.u7,b)?0:1;}
function OG(){var a=this;Q.call(a);a.r0=null;a.ri=0;a.tV=null;}
function APP(a,b){return !CL(a.r0,b)&&!(a.ri^C$(a.tV.C,b))?0:1;}
function OH(){var a=this;Q.call(a);a.sF=null;a.sY=0;a.sl=null;}
function AGJ(a,b){return !CL(a.sF,b)&&!(a.sY^C$(a.sl.C,b))?1:0;}
function Ot(){var a=this;Q.call(a);a.tJ=0;a.uK=null;a.vm=null;a.wN=null;}
function ARx(a,b){return !(a.tJ^a.uK.i(b))&&!CL(a.vm,b)?0:1;}
function O9(){var a=this;Q.call(a);a.vj=0;a.m8=null;a.nL=null;a.w9=null;}
function AIO(a,b){return !(a.vj^a.m8.i(b))&&!CL(a.nL,b)?1:0;}
function Or(){var a=this;Q.call(a);a.pH=null;a.xd=null;}
function AGI(a,b){return CL(a.pH,b);}
function Os(){var a=this;Q.call(a);a.pR=null;a.yW=null;}
function AIm(a,b){return CL(a.pR,b)?0:1;}
function Ox(){var a=this;Q.call(a);a.vD=null;a.sw=0;a.wv=null;}
function AJS(a,b){return CL(a.vD,b)&&a.sw^C$(a.wv.C,b)?1:0;}
function Oq(){var a=this;Q.call(a);a.tm=null;a.rI=0;a.su=null;}
function APm(a,b){return CL(a.tm,b)&&a.rI^C$(a.su.C,b)?0:1;}
function Ov(){var a=this;Q.call(a);a.tZ=0;a.n3=null;a.rD=null;a.wZ=null;}
function AFK(a,b){return a.tZ^a.n3.i(b)&&CL(a.rD,b)?1:0;}
function Ow(){var a=this;Q.call(a);a.te=0;a.mW=null;a.tH=null;a.xg=null;}
function AM9(a,b){return a.te^a.mW.i(b)&&CL(a.tH,b)?0:1;}
var Fx=F(Cq);
var AXi=null;var AXh=null;var AXM=null;function SI(){SI=Bn(Fx);ARe();}
function AOs(a,b){var c=new Fx();AAw(c,a,b);return c;}
function AAw(a,b,c){SI();Dt(a,b,c);}
function ARe(){var b;AXi=AOs(C(511),0);b=AOs(C(512),1);AXh=b;AXM=G(Fx,[AXi,b]);}
function XN(){B.call(this);this.p6=null;}
var Ls=F(0);
function SE(){var a=this;B.call(a);a.w5=null;a.uO=null;a.iG=null;a.cl=null;a.il=0;a.kv=0;}
function Mv(a,b){var c,d,e;c=H(a.iG);if(b>=0&&b<=c){W_(a.cl,null,(-1),(-1));d=a.cl;d.ja=1;d.d7=b;c=d.hl;if(c<0)c=b;d.hl=c;b=a.uO.b9(b,a.iG,d);if(b==(-1))a.cl.dc=1;if(b>=0){d=a.cl;if(d.iH){e=d.dz.data;if(e[0]==(-1)){c=d.d7;e[0]=c;e[1]=c;}d.hl=Iw(d);return 1;}}a.cl.d7=(-1);return 0;}d=new BV;Bp(d,D8(b));L(d);}
function ADE(a){return O5(a.cl,0);}
function ZX(a){return R3(a.cl,0);}
function Yy(a){return a.cl.iN;}
function SO(){B.call(this);this.vB=null;}
function ANG(a,b){var c,d,e;F8(a.vB);c=AWa;d=Zp(C(513));if(!K$()){b=new Bt;Bp(b,C(304));Lx(d,b);}else{e=$rt_globals.navigator.clipboard;b=M0(E2(b));b=e.writeText(b);e=new Ub;e.x6=c;c=AD1(d);b.then(Bm(e,"f"),Bm(c,"f"));}}
var Tm=F();
var AXe=null;function AS7(){AS7=Bn(Tm);AE6();}
function AE6(){var b,c;SI();b=By((AXM.go()).data.length);c=b.data;AXe=b;c[AXi.gf]=1;c[AXh.gf]=2;}
function Xi(){B.call(this);this.mP=null;}
function Lx(a,b){var c,d;c=a.mP;d=b.lT;b=new R;U(b);K(K(b,c),d);$rt_globals.console.info($rt_ustr(S(b)));}
function Jc(){var a=this;B.call(a);a.gQ=null;a.yM=null;}
var AAN=F();
var MS=F(F5);
function AH_(a,b,c,d){var e,f,g;e=0;f=d.u;a:{while(true){if(b>f){b=e;break a;}g=Ff(d,a.S);Db(d,a.S,b);e=a.cL.d(b,c,d);if(e>=0)break;Db(d,a.S,g);b=b+1|0;}}return b;}
function ARn(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Ff(e,a.S);Db(e,a.S,c);f=a.cL.d(c,d,e);if(f>=0)break;Db(e,a.S,g);c=c+(-1)|0;}}return c;}
function AGu(a){return null;}
var L0=F(Bt);
function N0(){var a=this;B.call(a);a.q5=null;a.q4=null;}
function N1(){B.call(this);this.ub=null;}
function Rx(){B.call(this);this.tc=null;}
function AGr(a,b){IA(a.tc,b);}
var YE=F();
function Zd(b){var c,d,e,f,g,h,i,j;c=AFY();d=Cb(b);Bi(c,d);e=0;f=0;while(f<d){g=BK(b,f);h=G0(g);Bi(c,h);i=0;while(i<h){j=KA(g,i);F$(c,e,Lr(j));e=e+Lr(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return P8(c);}
function YL(b){var c,d,e,f,g,h,i,j,k;c=V(b);d=P(HC,c);e=d.data;f=0;while(f<c){a:{g=V(b);if(g!=(-1)){h=V(b);i=V(b);if(i==(-1)){j=new HC;j.fH=h;e[g]=j;}else{j=new HC;j.fH=h;j.lj=By(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].lj.data[k]=V(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function P6(){B.call(this);this.rh=null;}
function AQ5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.rh;d=CF(c[0]);c=Lp(d);e=new UZ;d=YL(c);f=YL(c);g=V(c);h=P(Lo,g);i=h.data;j=0;while(j<g){k=V(c);l=V(c);m=V(c);n=V(c);o=V(c);p=new Lo;p.hq=k;p.mi=l;p.hp=m;p.mh=n;p.j7=o;i[j]=p;j=j+1|0;}e.yK=d;e.vf=f;e.fA=h;b.fs=e;Jj(b.x,d);Jj(b.w,b.fs.vf);}
var Y6=F(0);
function Q1(){B.call(this);this.nA=null;}
function AEl(a,b){var c;c=a.nA;b=Ce(b);C8(c.p6,b);}
function Sd(){B.call(this);this.q2=null;}
function ALi(a,b){b.ge=a.q2.cJ;}
function Sb(){B.call(this);this.un=null;}
function ANr(a,b){b.f0=a.un.cJ.b2;}
function Pc(){var a=this;B.call(a);a.oP=null;a.oN=null;}
function TC(){var a=this;B.call(a);a.ry=null;a.rx=null;a.rw=null;}
function AMV(a,b){VR(a.ry,a.rx,b,a.rw);}
function Vx(){var a=this;B.call(a);a.si=null;a.sj=null;}
function AG$(a,b){var c,d,e,f,g,h,i,j,k;c=b.data;d=a.si;e=a.sj;f=Bz();g=c.length;h=0;while(h<g){i=c[h];j=new Ll;k=i.fX;Si(j,k.e5,k.fC);Bw(f,j);h=h+1|0;}if(DG(f))Ka(d.eE,e,d);else{c=D2(d,e);c=Gw(d.c.f,c.U,c.bb);Rp(d.eE,e,b,d,Kw(d,c));}}
function UP(){var a=this;B.call(a);a.dz=null;a.jl=null;a.k4=null;a.k9=null;a.pa=0;a.iH=0;a.cD=0;a.u=0;a.d7=0;a.iN=0;a.e8=0;a.dc=0;a.ym=0;a.hl=0;a.ja=0;}
function BH(a,b,c){a.jl.data[b]=c;}
function C5(a,b){return a.jl.data[b];}
function Iw(a){return R3(a,0);}
function R3(a,b){RQ(a,b);return a.dz.data[(b*2|0)+1|0];}
function Db(a,b,c){a.dz.data[b*2|0]=c;}
function I$(a,b,c){a.dz.data[(b*2|0)+1|0]=c;}
function Ff(a,b){return a.dz.data[b*2|0];}
function H1(a,b){return a.dz.data[(b*2|0)+1|0];}
function AB$(a){return O5(a,0);}
function O5(a,b){RQ(a,b);return a.dz.data[b*2|0];}
function MF(a,b){return a.k4.data[b];}
function DW(a,b,c){a.k4.data[b]=c;}
function RQ(a,b){var c;if(!a.iH){c=new Dl;X(c);L(c);}if(b>=0&&b<a.pa)return;c=new BV;Bp(c,D8(b));L(c);}
function W_(a,b,c,d){a.iH=0;a.ja=2;G6(a.dz,(-1));G6(a.jl,(-1));if(b!==null)a.k9=b;if(c>=0){a.cD=c;a.u=d;}a.d7=a.cD;}
function AAc(a){return a.ja;}
function WL(){B.call(this);this.n_=null;}
function AHa(a,b){var c,d;c=a.n_;d=new Bt;Bp(d,$rt_str(b.message));Lx(c,d);}
function On(){B.call(this);this.ou=null;}
function AGP(a,b){b.ge=a.ou;}
function Mt(){B.call(this);this.ws=null;}
function AI2(a){Dv(a.ws);}
function M4(){var a=this;B.call(a);a.pM=null;a.pL=null;}
function AIX(a){var b,c;b=a.pM;c=a.pL;b.gy.tN(c);}
function NH(){var a=this;B.call(a);a.nG=null;a.nH=0;a.nI=0;a.nJ=null;a.nC=0;a.nE=0;}
function ALF(a,b){var c,d,e,f,g,h,i,j;c=a.nG;d=a.nH;e=a.nI;f=a.nJ;g=a.nC;h=a.nE;i=Cl(c.bn,5.0);d=Ba((c.bn.cK.a-d|0)-i|0,Z((i-d|0)-c.N.p.a|0,b.n.a));j=Ba((c.bn.cK.b-e|0)-i|0,Z((i-e|0)-c.N.p.b|0,b.n.b));Bg(f,d+g|0,j+h|0);KD(c,f,c.P.p);}
function Vw(){var a=this;B.call(a);a.tP=null;a.tR=null;a.tQ=null;a.tL=0;a.tK=0;a.tO=0;a.tM=0;a.t3=0;a.t2=0;a.t4=0;a.uv=0;}
function AIB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.tP;d=a.tR;e=a.tQ;f=a.tL;g=a.tK;h=a.tO;i=a.tM;j=a.t3;k=a.t2;l=a.t4;m=a.uv;n=Cl(c.bn,5.0);o=c.P.sx();Cw(d,c.P.p);Cw(e,c.P.K);switch(f){case -1:f=Ba(h+(b.n.a-g|0)|0,c.bn.cK.a-n|0);g=o.a;h=h+i|0;f=Z(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Z((i+b.n.a|0)-g|0,Z(o.a,n-c.N.K.a|0));}b:{switch(j){case -1:f=Z(n,Ba(l+(b.n.b-k|0)|0,(c.bn.cK.b+c.N.p.b|0)-n|0));g=o.b;h=l+m|0;f=Z(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Z((m+b.n.b|0)-k|0,o.b);}KD(c,e,d);}
function N3(){var a=this;B.call(a);a.v6=null;a.v7=0.0;}
function AEK(a){var b,c;b=a.v6;c=a.v7;b.gy.li(c);}
function SX(){Q.call(this);this.xD=null;}
function APZ(a,b){return Ch(b)!=2?0:1;}
function Mz(){Q.call(this);this.xL=null;}
function AFq(a,b){return Ch(b)!=1?0:1;}
function R1(){Q.call(this);this.xn=null;}
function AE9(a,b){return Rg(b);}
function R0(){Q.call(this);this.xf=null;}
function AH6(a,b){return 0;}
function Wl(){Q.call(this);this.yu=null;}
function AJG(a,b){return !Ch(b)?0:1;}
function OY(){Q.call(this);this.xZ=null;}
function AP3(a,b){return Ch(b)!=9?0:1;}
function N_(){Q.call(this);this.yU=null;}
function AMx(a,b){return FY(b);}
function QX(){Q.call(this);this.xF=null;}
function AN1(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Ms(){Q.call(this);this.wB=null;}
function AQ7(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FY(b);}return b;}
function Mx(){Q.call(this);this.x2=null;}
function AG5(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FY(b);}return b;}
function NG(){Q.call(this);this.yr=null;}
function AP_(a,b){a:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Pn(){Q.call(this);this.yG=null;}
function ALb(a,b){return I1(b);}
function PA(){Q.call(this);this.xq=null;}
function ANs(a,b){return PB(b);}
function Tq(){Q.call(this);this.x$=null;}
function APQ(a,b){return Ch(b)!=3?0:1;}
function SF(){Q.call(this);this.wF=null;}
function AQI(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=FY(b);}return b;}
function MG(){Q.call(this);this.y3=null;}
function AGR(a,b){a:{b:{switch(Ch(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=FY(b);}return b;}
function LP(){Q.call(this);this.lt=0;}
function ATM(a){var b=new LP();ABJ(b,a);return b;}
function ABJ(a,b){Bq(a);a.lt=b;}
function AMA(a,b){return a.X^(a.lt!=Ch(b&65535)?0:1);}
var RS=F(LP);
function AOU(a,b){return a.X^(!(a.lt>>Ch(b&65535)&1)?0:1);}
function WF(){B.call(this);this.nV=null;}
function AIx(a,b){var c,d,e,f;c=a.nV;b=Ce(b);d=c.q5;c=c.q4;e=new W4;f=new Lb;c=EQ(c);Yn(f,null,null,c,null);c=null;Yq(e,AF2(b),c,f);Gh(d,e);}
function WG(){var a=this;B.call(a);a.py=null;a.pz=null;}
function AFJ(a,b){var c,d;c=a.py;d=a.pz;b.text().then(Bm(c,"f"),Bm(d,"f"));}
var Uf=F(0);
var AXf=null;function ASz(){ASz=Bn(Uf);AQF();}
function AQF(){AXf=O(C(265));}
function Sr(){B.call(this);this.qJ=null;}
function AIp(a,b){b.f0=a.qJ;}
function RB(){B.call(this);this.ut=null;}
function AOy(a){var b,c,d,e,f,g,h,i;b=a.ut;c=b.oP;b=b.oN;d=b.g9;b=b.fX;e=c.uY;c=c.uZ;d=J$(d);if(b===null)b=void 0;else{f=b.iv+1|0;g=b.je+1|0;h=b.fC+1|0;i=b.e5+1|0;b=AEm(f,g,h,i);}c.openCodeEditor(e,d,b);}
function Ub(){B.call(this);this.x6=null;}
function AQK(a,b){}
function ACP(){var a=this;B.call(a);a.yE=0;a.xP=0;a.o_=null;}
function ATk(a,b,c){var d=new ACP();AIh(d,a,b,c);return d;}
function AIh(a,b,c,d){a.yE=b;a.xP=c;a.o_=d;}
function T7(){B.call(this);this.pS=null;}
function AKF(a,b){var c;c=a.pS;b=$rt_str(b.message);Ct(c.ub,b);}
var Ym=F();
function AKv(b){return {includeDeclaration:b};}
function PT(){var a=this;B.call(a);a.qj=null;a.qi=null;}
function AOm(a,b){V8(b,a.qj,a.qi);}
var ACh=F(0);
function ADM(b){return !b?G(Bv,[C(57),C(216),C(514)]):G(Bv,[C(57),C(216),C(514),C(515)]);}
function AAU(){var a=this;B.call(a);a.DP=null;a.DN=null;a.DS=0.0;}
function Vs(){var a=this;B.call(a);a.jc=null;a.hd=0;}
function NK(){B.call(this);this.sV=null;}
function AE5(a,b){return NI(I(a.sV,b.bd));}
var YS=F();
$rt_packages([-1,"java",0,"lang"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bu",AT8(AK8),"cP",AT7(AF6)],AAx,0,B,[],3,3,0,0,0,MV,0,B,[],3,3,0,0,0,Ml,0,B,[],3,3,0,0,0,VX,0,B,[MV,Ml],0,3,0,0,0,Zs,0,B,[],4,0,0,0,0,Y9,0,B,[],4,3,0,0,0,F6,0,B,[],0,3,0,0,0,DO,0,F6,[],0,3,0,0,0,Bt,0,DO,[],0,3,0,0,0,AAQ,0,Bt,[],0,3,0,0,0,Cy,0,B,[],3,3,0,0,0,Cp,0,B,[],3,3,0,0,0,Ih,0,B,[],3,3,0,0,0,Bv,"String",1,B,[Cy,Cp,Ih],0,3,0,F7,["cP",AT7(AF4),"bu",AT8(BE),"lX",AT7(Gf),"jA",AT8(AH9)],F1,0,F6,[],0,3,0,0,0,GS,0,F1,[],0,3,0,0,0,AAs,0,GS,[],0,3,0,0,0,Eq,0,B,[Cy],1,3,0,0,0,FQ,
0,Eq,[Cp],0,3,0,0,["bu",AT8(AQS),"jA",AT8(AKk)],FU,0,B,[Cy,Ih],0,0,0,0,["hz",AT8(I9),"cP",AT7(S)],Hs,0,B,[],3,3,0,0,0,R,0,FU,[Hs],0,3,0,0,["lH",AT_(AKg),"kI",AT$(AHd),"cP",AT7(Je),"hz",AT8(AKn),"md",AT9(AKS)],Fl,0,GS,[],0,3,0,0,0,ABM,0,Fl,[],0,3,0,0,0,AAh,0,Fl,[],0,3,0,0,0,Bo,0,B,[],3,3,0,0,0,RN,0,B,[Bo],3,3,0,0,0,T_,0,B,[RN],0,3,0,0,["yd",AT8(AIv)],ABm,0,B,[],0,3,0,0,0,OJ,0,B,[Bo],3,3,0,0,0,T$,0,B,[OJ],0,3,0,0,["A2",AT$(AK4)],AAI,0,B,[],0,3,0,0,0,SY,0,B,[Bo],3,3,0,0,0,TR,0,B,[SY],0,3,0,0,["yd",AT8(AKh)],ZK,
0,B,[],0,3,0,0,0,KP,0,B,[],4,3,0,0,0,ACy,0,B,[],4,3,0,0,0,GM,0,B,[],3,3,0,0,0,SW,0,B,[GM],0,3,0,0,0,BV,0,Bt,[],0,3,0,0,0,ABr,0,B,[],4,3,0,0,0,Gb,0,Bt,[],0,3,0,0,0,Ib,0,Bt,[],0,3,0,0,0,CR,0,B,[Cp],0,3,0,0,0,GN,0,BV,[],0,3,0,0,0,H4,0,B,[Bo],3,3,0,0,0,Rw,0,B,[H4],3,3,0,0,0,Pw,0,B,[Rw],0,3,0,0,["Hl",AT8(AOD),"HI",AT9(ANv),"Ea",AT8(APX),"FH",AT8(AHn),"Dk",AT7(ANO),"Ky",AT8(AIG),"zi",AT7(AIC),"IA",AT7(AJU),"KV",AT8(AHl),"JD",AT9(AM4),"za",AT9(APw),"Fb",AT7(AQz),"CP",AT8(AFo),"B9",AT8(AHS),"EM",AT7(AKL),"HK",AT8(AGL),
"At",AT8(ANp),"DD",AT8(AIt),"zI",AT8(APt),"BA",AT9(AQL),"GS",AT9(AMv),"EW",AT8(AGX),"Av",AT8(AQl)],Qv,0,B,[H4],3,3,0,0,0]);
$rt_metadata([ET,0,B,[Qv],0,3,0,0,["DA",AT7(ARb),"A8",AT7(AKa),"IF",AT7(ALO),"A$",AT8(AQ2),"Fe",AT7(AMo),"D7",AT8(AEO)],Ss,0,B,[Bo],3,3,0,0,0,VH,0,B,[Ss],0,3,0,0,["KW",AT7(AP7),"Fj",AT7(AMI),"BM",AT8(ALA),"Jq",AT8(AGV),"z2",AT8(AHY),"Fl",AT8(AOY),"GI",AT8(ALy),"GQ",AT7(AIP),"zX",AT8(AHE)],Tl,0,B,[],3,3,0,0,0,CU,0,B,[],3,3,0,0,0,OX,0,B,[],3,0,0,0,0,H6,0,B,[Tl,CU,OX],1,3,0,0,["eY",AT7(Iq)],RE,0,H6,[],0,3,0,0,0,AAD,0,B,[Bo],1,3,0,0,0,Ho,0,B,[Bo],3,3,0,0,0,Ug,0,B,[Ho],0,3,0,0,["mu",AT9(AIk)],ABs,0,B,[],3,3,0,0,
0,ZZ,0,B,[],0,3,0,0,0,W4,0,B,[],0,3,0,0,0,Ys,0,B,[Bo],1,3,0,0,0,XE,0,B,[Ho],0,3,0,0,["mu",AT9(AId)],AD5,0,B,[],4,3,0,0,0,DK,0,B,[],3,3,0,0,0,Nt,0,B,[DK],0,3,0,0,["gp",AT8(APR)],Yc,0,B,[],3,3,0,0,0,ACS,0,B,[Bo],1,3,0,0,0,Lb,0,B,[],0,3,0,0,["bu",AT8(AGG)],Re,0,B,[],0,3,0,0,0,Me,0,B,[Bo],3,3,0,0,0,SJ,0,B,[Me],3,3,0,0,0,D6,0,B,[Bo],3,3,0,0,0,Yz,0,B,[Bo,SJ,D6],1,3,0,0,["HH",AT7(ALW),"Iw",AT8(AO2),"Ka",AT8(AOK),"Ck",AT8(AGM),"Hz",AT8(AEw),"z6",AT7(AG7),"IN",AT9(AOV),"IU",AT$(AJ1),"JJ",AT7(AFp),"Kk",AT7(AM5),"Gs",
AT8(APH),"Dz",AT7(ALs),"KO",AT8(AJv),"Fy",AT7(ALY),"Ew",AT7(ARl),"Kx",AT7(AKG),"zZ",AT8(AFf),"I2",AT7(AQT),"GY",AT9(AJs),"De",AT9(ALj),"Iy",AT9(AQk),"HX",AT7(AEz),"Jt",AT7(AJb),"JZ",AT8(AHi),"F6",AT8(AIl),"Cd",AT9(AJK),"EX",AT7(AKM),"Jy",AT8(AFr),"Aq",AT7(AIj),"KB",AT7(ANw),"BY",AT8(AEi),"Fw",AT8(APx),"Kn",AT8(AFV),"Eb",AT7(APA),"CT",AT9(AF7),"Il",AT8(ANj),"EH",AT7(AN6),"AV",AT9(AMt),"A0",AT9(AL7),"D9",AT7(APr),"J2",AT8(AQY),"C6",AT$(AL$),"BS",AT7(AG_),"Di",AT9(AGo),"Dq",AT7(AE0),"H_",AT7(AQN),"Gp",AT7(AMs),
"y$",AT7(AEX),"Hw",AT9(AMu),"Ar",AT8(AGY),"F4",AT8(AIF),"BF",AT7(AOc)],ACC,0,B,[],3,3,0,0,0,YJ,0,B,[],0,3,0,0,0,AC9,0,B,[],0,3,0,0,0,TW,0,B,[],0,3,0,0,0,VJ,0,B,[],3,3,0,0,["el",AT8(AEa)],FE,0,B,[VJ],3,3,0,0,["el",AT8(AEa),"lv",AT8(AJ3)],Ey,0,B,[FE],1,3,0,0,["el",AT8(AEa),"lv",AT8(AJ3),"dP",AT7(DG),"nM",AT8(AOx)],J7,0,B,[FE],3,3,0,0,["el",AT8(AEa),"lv",AT8(AJ3)],IH,0,B,[J7],3,3,0,0,["el",AT8(AEa),"lv",AT8(AJ3)],Em,0,Ey,[IH],1,3,0,0,["el",AT8(AEa),"lv",AT8(AJ3),"sH",AT8(ANQ),"bY",AT7(BO),"tr",AT9(AMW),"mA",AT9(APo),
"bu",AT8(ALK)],DP,0,B,[],3,3,0,0,0,KO,0,B,[],3,3,0,0,0,YN,0,Em,[DP,Cy,KO],0,3,0,0,["lv",AT8(AJ3),"lu",AT8(Bs),"cB",AT7(AME),"sH",AT8(Bw),"mA",AT9(RF),"mo",AT8(Fi),"nM",AT8(Vp),"hT",AT7(FG),"tr",AT9(Zc),"el",AT8(DY)],Kt,0,B,[],3,3,0,0,0,DB,0,B,[Kt],1,3,0,0,0,JY,0,DB,[DP,Cy],0,3,0,0,0,RC,0,B,[],0,3,0,0,0,Pm,0,B,[D6],3,3,0,0,0,RA,0,B,[D6],3,3,0,0,0,Rk,0,B,[D6],3,3,0,0,0,Ti,0,B,[D6],3,3,0,0,0,WM,0,B,[D6],3,3,0,0,0,Uk,0,B,[D6,Pm,RA,Rk,Ti,WM],3,3,0,0,0]);
$rt_metadata([Zo,0,B,[Bo,Uk],1,3,0,0,["G_",AT9(AMy),"JH",AT9(AKj),"B0",AT$(AJd),"C2",AT8(AFx),"GR",AT$(AHo)],AAC,0,B,[],4,3,0,0,0,Gz,0,B,[Cp],0,3,0,0,0,Kq,0,B,[],0,3,0,0,0,C7,0,B,[],0,3,0,0,0,Pt,0,B,[],0,3,0,0,0,BF,0,Bt,[],0,3,0,0,0,XR,0,Bt,[],0,3,0,0,0,B$,0,B,[],0,3,0,0,0,Kn,0,JY,[],0,3,0,0,0,RL,0,B,[],0,3,0,0,0,ADB,0,B,[Cp],0,3,0,0,["bu",AT8(AOS),"jA",AT8(AGb)],VM,0,B,[GM],0,3,0,0,["vI",AT9(AKN)],QZ,0,B,[],0,3,0,0,["bu",AT8(AF0)],GX,0,B,[],3,3,0,0,0,F4,0,B,[GX,DP],0,0,0,0,["bu",AT8(AGU)],Gc,0,F4,[],0,0,0,
0,0,WR,0,B,[],0,3,0,0,0,Kl,0,B,[],3,3,0,0,0,Pq,0,B,[Kl],0,3,0,0,0,EM,0,B,[],0,3,0,0,0,Kv,0,EM,[],0,3,0,0,0,ACZ,0,B,[],1,3,0,0,0,AAy,0,B,[Bo],1,3,0,0,0,AA0,0,B,[Bo],1,3,0,0,0,FT,0,EM,[],0,3,0,0,0,JB,0,EM,[],0,3,0,0,0,Sq,0,B,[Ho],0,3,0,0,["mu",AT9(AO8)],Z8,0,B,[Bo],1,3,0,0,0,G$,0,B,[],3,3,0,0,["wo",AT7(AMc),"tx",AT7(AIa)],ES,0,B,[],3,3,0,0,0,Jw,0,B,[],3,3,0,0,0,Qb,0,B,[],3,0,0,0,0,Z6,0,B,[G$,ES,Jw,Qb],0,3,0,0,["tx",AT7(AH1),"wo",AT7(AE4),"vM",AT7(Ns),"wa",AT7(Xx),"tN",AT8(Og),"li",AT8(ANI),"ga",AT9(S$),"fZ",AT9(My),
"fK",AT$(MH),"gc",AT8(NW),"km",AT8(AQu)],ACE,0,B,[],0,3,0,0,0,ADr,0,B,[],0,3,0,0,0,AC3,0,B,[],4,3,0,0,0,Vc,0,B,[H4],0,3,0,0,["C9",AT7(AJJ)],Vi,0,B,[Bo],3,3,0,0,0,AAR,0,B,[Vi],1,3,0,0,["Jz",AT8(AIV),"IT",AT7(AK5)],Hp,0,B,[],0,3,0,0,0,SR,0,B,[],3,3,0,0,0,MN,0,B,[SR],0,3,0,0,0,QI,0,B,[],3,3,0,0,0,OM,0,B,[QI],3,3,0,0,0,ABc,0,B,[OM],0,3,0,0,0,Xj,0,B,[],3,3,0,ATh,0,Lm,0,B,[CU],1,3,0,0,0,FX,0,Lm,[],1,3,0,0,0,OK,0,B,[],3,3,0,0,0]);
$rt_metadata([Ju,0,B,[OK],3,3,0,0,0,K7,0,B,[],3,3,0,0,0,Mp,0,FX,[Ju,K7],0,3,0,0,["h7",AT8(AJk),"lI",AT8(AO9),"e9",AT7(AIW),"iW",AT9(AEj),"ix",AT8(AHp)],Kj,0,B,[],3,3,0,0,0,OL,0,B,[Kj],0,3,0,0,["lo",function(b,c,d,e,f){ANg(this,b,c,d,e,f);}],W9,0,B,[],3,3,0,0,0,WQ,0,B,[W9],0,3,0,0,0,Fj,0,B,[],3,3,0,0,0,MC,0,B,[Fj],0,3,0,0,0,Wb,0,B,[Kj],0,3,0,0,["lo",function(b,c,d,e,f){AG2(this,b,c,d,e,f);}],Ll,0,B,[Cp],0,3,0,0,["bu",AT8(AEF),"lX",AT7(ANU),"jA",AT8(ANq)],F_,0,B,[],3,3,0,0,0,HA,0,B,[],3,3,0,0,0,D5,0,B,[],3,3,
0,0,0,G9,0,B,[D5],3,3,0,0,0,Oh,0,FX,[ES,Ju,Jw,K7,F_,HA,G9],0,3,0,0,["ml",AT9(AQi),"lI",AT8(ANV),"e9",AT7(AK_),"vM",AT7(AOw),"wa",AT7(AK1),"tN",AT8(APv),"li",AT8(AMn),"h7",AT8(AGO),"iW",AT9(AKq),"ix",AT8(AEZ),"gc",AT8(AM1),"fK",AT$(AJo),"fZ",AT9(ALo),"ga",AT9(ANN),"f4",AT$(ANf),"dM",AT7(AKf)],ZY,0,B,[Bo],1,3,0,0,0,Zn,0,B,[],0,3,0,0,0,BY,0,B,[Bo],3,3,0,0,0,Pz,0,B,[BY],0,3,0,0,["bg",AT8(AKI)],ACi,0,B,[Bo],3,3,0,0,0,AAY,0,B,[Bo],1,3,0,0,0,QS,0,B,[BY],0,3,0,0,["bg",AT8(AH2)],NJ,0,B,[BY],0,3,0,0,["bg",AT8(ANi)],Y,
0,B,[],3,3,0,0,0,XQ,0,B,[Y],0,3,0,0,["j",AT8(AI_)],ZL,0,B,[],0,3,0,0,0,XT,0,B,[DK],0,3,0,0,["gp",AT8(AJV)],Bk,0,B,[],3,3,0,0,0,XU,0,B,[Bk],0,3,0,0,["s",AT7(AII)],UN,0,B,[DK],0,3,0,0,["gp",AT8(AND)],UO,0,B,[Bk],0,3,0,0,["s",AT7(ARc)],Rs,0,B,[Bo],3,3,0,0,0,U_,0,B,[Rs],0,3,0,0,["FC",AT8(AJr)],U9,0,B,[Bk],0,3,0,0,0,Qo,0,B,[Bo],3,3,0,0,0,U$,0,B,[Qo],0,3,0,0,["mu",AT9(AHw)],AC8,0,B,[Bo],1,3,0,0,0,Cd,0,B,[Bo],3,3,0,0,0,U8,0,B,[Cd],0,3,0,0,["b5",AT8(ANt)],St,0,B,[],0,3,0,0,0,LF,0,Em,[],1,3,0,0,["el",AT8(AEa),"lv",AT8(AJ3)],Mm,
0,B,[FE],3,3,0,0,["el",AT8(AEa),"lv",AT8(AJ3)],Xa,0,B,[Mm,J7],3,3,0,0,["el",AT8(AEa),"lv",AT8(AJ3)],Uc,0,LF,[Xa],0,3,0,0,["el",AT8(AEa),"lv",AT8(AJ3)],W8,0,B,[Kt],3,3,0,0,0,MU,0,B,[W8],3,3,0,0,0,O8,0,DB,[DP,Cy,MU],0,3,0,0,0,Sx,0,B,[DK],0,3,0,0,0,Sy,0,B,[BY],0,3,0,0,["bg",AT8(AEy)]]);
$rt_metadata([Px,0,B,[],0,3,0,0,0,KG,0,B,[],1,3,0,0,0,ACF,0,KG,[],0,3,0,0,0,ZR,0,B,[],0,3,0,0,0,V3,0,B,[Cd],0,3,0,0,["b5",AT8(AMY)],V4,0,B,[Cd],0,3,0,0,["b5",AT8(AM_)],V5,0,B,[Cd],0,3,0,0,["b5",AT8(ALp)],V6,0,B,[Cd],0,3,0,0,["b5",AT8(AKO)],ADd,0,B,[Cd],0,3,0,0,["b5",AT8(ALc)],ADe,0,B,[Cd],0,3,0,0,["b5",AT8(ANF)],ADf,0,B,[Cd],0,3,0,0,["b5",AT8(AJc)],ADg,0,B,[Cd],0,3,0,0,["b5",AT8(ARf)],ADh,0,B,[Cd],0,3,0,0,["b5",AT8(AIi)],ADi,0,B,[Cd],0,3,0,0,["b5",AT8(AON)],ADT,0,B,[Cd],0,3,0,0,["b5",AT8(AQP)],ADU,0,B,[Cd],
0,3,0,0,["b5",AT8(AK3)],ADV,0,B,[Cd],0,3,0,0,["b5",AT8(ALu)],ADW,0,B,[Cd],0,3,0,0,["b5",AT8(ANl)],TN,0,B,[],3,3,0,0,0,T0,0,B,[TN],0,3,0,0,0,TZ,0,B,[Cd],0,3,0,0,["b5",AT8(AJ9)],Mf,0,B,[],0,3,0,0,0,ID,0,B,[GM],0,3,0,0,["vI",AT9(I3)],DS,0,B,[],3,3,0,0,0,D$,0,B,[DS],3,3,0,0,0,It,0,B,[DS],3,3,0,0,0,Qu,0,B,[CU],0,3,0,0,0,Bj,0,B,[],0,3,0,0,["bu",AT8(AJW)],V9,0,B,[],0,3,0,0,0,Y4,0,B,[],3,3,0,0,0,Qn,0,B,[],0,3,0,0,0,K9,0,B,[],0,3,0,0,0,CI,0,K9,[],0,3,0,0,0,AC0,0,CI,[],0,3,0,0,0,Eo,0,CI,[],0,3,0,0,0,Q5,0,CI,[],0,3,0,
0,0,AAJ,0,Eo,[],0,3,0,0,0,FB,0,Eo,[],0,3,0,0,0,N2,0,FB,[],0,3,0,0,0,ADH,0,FB,[],0,3,0,0,0,Zq,0,Eo,[],0,3,0,0,0,ABQ,0,CI,[],0,3,0,0,0,Y0,0,CI,[],0,3,0,0,0,R2,0,B,[Bo],3,3,0,0,0,AD2,0,B,[R2],3,3,0,0,0,Ql,0,B,[CU],0,3,0,0,0,Qm,0,B,[],0,3,0,0,0,Cq,0,B,[Cp,Cy],1,3,0,0,0,Gm,0,Cq,[],12,3,0,G7,0,LR,0,B,[],3,3,0,0,0]);
$rt_metadata([Ta,0,B,[LR],3,3,0,0,0,Ud,0,B,[],3,3,0,0,0,F0,0,B,[Ta,Ud],1,3,0,0,0,IW,0,F0,[],0,3,0,0,0,AAe,0,IW,[],0,3,0,0,0,FP,0,F0,[],1,3,0,0,0,KN,0,FP,[],0,3,0,0,["j_",AT$(AJZ)],DL,0,Cq,[],12,3,0,AP5,0,IM,0,B,[Cp],1,3,0,0,0,LW,0,IM,[],0,3,0,AH$,0,Gr,0,Cq,[],12,0,0,ALl,0,J9,0,FP,[],0,3,0,0,["j_",AT$(AHT)],ACx,0,BF,[],0,3,0,0,0,Va,0,DO,[],0,3,0,0,0,LU,0,B,[Bo],3,3,0,0,0,W6,0,B,[LU],0,3,0,0,["bg",AT8(AOi)],W7,0,B,[LU],0,3,0,0,["bg",AT8(AFW)],Qf,0,B,[],0,3,0,0,0,W0,0,B,[],0,3,0,0,0,AAH,0,B,[ES,F_],0,0,0,0,["gc",
AT8(AM7),"fK",AT$(AQd),"fZ",AT9(AN7),"ga",AT9(AKx),"f4",AT$(AOq)],JA,0,B,[],3,3,0,0,0,Uz,0,B,[JA],0,3,0,0,["j5",AT8(AKl)],UA,0,B,[JA],0,3,0,0,["j5",AT8(AFg)],UB,0,B,[Y],0,3,0,0,["j",AT8(AKw)],Uv,0,B,[Y],0,3,0,0,["j",AT8(ALq)],Uw,0,B,[D$],0,3,0,0,["co",AT8(APW)],JV,0,B,[D$],0,3,0,0,["co",AT8(AIe)],Ux,0,B,[Y],0,3,0,0,["j",AT8(AOO)],Uy,0,B,[It],0,3,0,0,["co",AT8(AG8)],GC,0,B,[],1,3,0,0,0,Sn,0,B,[],3,3,0,0,0,KB,0,GC,[Cp,Hs,Ih,Sn],1,3,0,0,0,Jn,0,GC,[Cp],1,3,0,0,0,Hd,0,B,[],0,3,0,AP9,0,PG,0,B,[D$],0,3,0,0,["co",AT8(AFL)],PE,
0,B,[Y],0,3,0,0,["j",AT8(AIo)],PF,0,B,[HA],0,3,0,0,["ml",AT9(APj)],NX,0,B,[G9],0,3,0,0,["dM",AT7(ANb)],NY,0,B,[F_],0,3,0,0,["f4",AT$(AJ7)],NV,0,B,[It],0,3,0,0,["co",AT8(AKP)],AAT,0,B,[Bo],1,3,0,0,0,YX,0,B,[],3,3,0,0,0,T3,0,B,[],0,3,0,0,0,R7,0,B,[D$],0,3,0,0,["co",AT8(AIT)],R6,0,B,[D$],0,3,0,0,["co",AT8(AGm)],B5,0,B,[],0,3,0,0,["bu",AT8(ARa)],If,0,B,[],3,3,0,0,0,WJ,0,B,[ES,If],0,3,0,0,0,Vu,0,B,[If,G$],0,3,0,0,["wo",AT7(AMc),"tx",AT7(AIa),"km",AT8(AKU)],PL,0,B,[],0,3,0,0,0]);
$rt_metadata([Ky,0,B,[],0,3,0,0,0,EW,0,B,[CU],0,0,0,0,0,ADD,0,B,[],0,3,0,0,0,ZM,0,B,[CU],0,3,0,0,0,NP,0,B,[Y],0,3,0,0,0,NO,0,B,[Y],0,3,0,0,["j",AT8(AFt)],NN,0,B,[Y],0,3,0,0,["j",AT8(AED)],UI,0,B,[],0,0,0,0,0,NM,0,B,[Bk],0,3,0,0,["s",AT7(AEC)],NT,0,B,[Bk],0,3,0,0,["s",AT7(AIc)],NS,0,B,[Bk],0,3,0,0,["s",AT7(ARv)],NR,0,B,[Bk],0,3,0,0,["s",AT7(AKJ)],NQ,0,B,[Bk],0,3,0,0,["s",AT7(AM8)],NL,0,B,[Bk],0,3,0,0,["s",AT7(AQV)],Jv,0,KB,[],1,0,0,0,0,Rm,0,Jv,[],0,0,0,0,0,Kk,0,B,[],1,3,0,0,0,Lh,0,B,[],0,3,0,0,0,Wg,0,B,[],0,
0,0,0,0,GI,0,B,[],0,3,0,0,0,O2,0,GI,[],0,3,0,0,0,ACL,0,B,[],0,3,0,0,0,Mc,0,GI,[],0,3,0,0,0,TP,0,B,[Bo],3,3,0,0,0,NA,0,B,[TP],0,3,0,0,["Kb",AT8(AKt)],Us,0,B,[Y],0,3,0,0,["j",AT8(APc)],L_,0,B,[],3,3,0,0,0,Qg,0,B,[Bk],0,3,0,0,["s",AT7(AJa)],Qe,0,B,[Bk],0,3,0,0,["s",AT7(AEp)],Xy,0,B,[],3,3,0,0,0,PY,0,B,[],3,0,0,0,0,Wr,0,Jn,[],0,0,0,0,0,RR,0,B,[L_],0,3,0,0,0,ABB,0,B,[Bo],1,3,0,0,0,NB,0,B,[Bk],0,3,0,0,["s",AT7(AQW)],JP,0,B,[],4,3,0,AJI,0,VD,0,B,[],3,3,0,0,0,ABe,0,B,[VD],0,3,0,0,["cP",AT7(AGS)],T6,0,B,[],3,3,0,0,0,Kx,
0,B,[T6],0,3,0,0,["cP",AT7(AJ6)],HG,0,B,[],0,3,0,0,0,UT,0,B,[CU],0,3,0,0,0,Kg,0,Kk,[],1,3,0,0,0,Pu,0,Kg,[],0,3,0,0,0,TV,0,DO,[],0,3,0,0,0,H5,0,B,[],0,3,0,0,0,YW,0,B,[],3,3,0,0,0,Ya,0,B,[],0,3,0,0,0,ABf,0,B,[],3,3,0,0,0,ADN,0,B,[],0,3,0,0,0]);
$rt_metadata([L4,0,B,[GX,Cy],0,3,0,0,0,IY,0,L4,[],0,0,0,0,0,Ig,0,B5,[],0,3,0,0,0,CJ,0,B,[],3,3,0,ACH,0,Ca,0,Cq,[],12,3,0,ABO,0,Io,0,B,[],0,3,0,0,0,HK,0,B,[],0,3,0,0,0,AA8,0,B,[],0,3,0,0,0,Dd,0,B,[],3,3,0,AEY,0,ZI,0,B,[],0,3,0,0,["bu",AT8(AOB)],CK,0,B,[],3,3,0,ACY,0,B8,0,Cq,[],12,3,0,ZP,0,Ds,0,B,[],3,3,0,ALx,0,CT,0,B,[],3,3,0,AHZ,0,B7,0,Cq,[],12,3,0,UJ,0,Dk,0,B,[],3,3,0,AEJ,0,HX,0,B,[],0,3,0,0,0,Ij,0,B,[],4,3,0,0,0,Y7,0,B,[],0,3,0,0,0,HC,0,B,[],0,3,0,0,0,UZ,0,B,[],0,3,0,0,0,Lo,0,B,[],0,3,0,0,0,YV,0,B,[],0,3,
0,0,0,Z7,0,B,[],4,3,0,0,0,TS,0,B,[],0,0,0,0,0,Uo,0,B,[Y],0,3,0,0,["j",AT8(AFy)],IX,0,B,[CU],0,3,0,0,["eY",AT7(ABV)],Yi,0,B,[],0,3,0,0,0,Un,0,B,[],0,3,0,0,0,SV,0,B,[],0,3,0,0,0,Nf,0,B,[Y],0,3,0,0,["j",AT8(AHA)],Mo,0,B,[Y],0,3,0,0,["j",AT8(AOX)],PO,0,B,[CU],0,3,0,0,0,AAg,0,B,[Bo],4,3,0,0,0,N6,0,B,[Y],0,3,0,0,["j",AT8(AFH)],Dl,0,Bt,[],0,3,0,0,0,Ty,0,F1,[],0,3,0,0,0,Y_,0,B,[],3,3,0,0,0,Vq,0,B,[Y],0,3,0,0,["j",AT8(ALP)],ADA,0,B,[],0,3,0,0,0,Mq,0,B,[Y],0,3,0,0,["j",AT8(AD_)],PX,0,B,[Y],0,3,0,0,["j",AT8(AOh)],Sg,0,
B,[Y],0,3,0,0,["j",AT8(AHz)],Sf,0,B,[Y],0,3,0,0,["j",AT8(AQa)],EC,0,B,[],3,3,0,0,0,No,0,B,[EC],0,0,0,0,["cf",AT7(BP),"bR",AT7(BS),"kV",AT7(Q$)],Xd,0,B,[D5],0,3,0,0,["dM",AT7(AFE)],Xc,0,B,[D5],0,3,0,0,["dM",AT7(AMl)],SM,0,B,[D5],0,3,0,0,["dM",AT7(AMQ)],AB6,0,B,[DK],0,3,0,0,0]);
$rt_metadata([ACg,0,B,[DK],0,3,0,0,0,Rv,0,B,[Y],0,3,0,0,["j",AT8(APO)],Nk,0,B,[Y],0,3,0,0,["j",AT8(AKB)],VO,0,B,[Y],0,3,0,0,["j",AT8(AQD)],Qc,0,B,[Y],0,3,0,0,["j",AT8(AFN)],M1,0,B,[DS],0,3,0,0,0,ACR,0,B,[],0,3,0,0,0,SP,0,DB,[DP,Cy],0,3,0,0,0,Vn,0,B,[],0,3,0,0,0,Vf,0,B,[],0,3,0,0,0,S4,0,B,[Y],0,3,0,0,["j",AT8(AOH)],ABz,0,B,[Bo],1,3,0,0,0,T1,0,B,[],0,3,0,0,0,D1,0,Bt,[],0,3,0,0,0,Nz,0,B,[],0,3,0,0,0,Tu,0,B,[Y],0,3,0,0,["j",AT8(AK9)],Tv,0,B,[Y],0,3,0,0,["j",AT8(AMU)],AC1,0,B,[],0,3,0,0,0,S9,0,B,[],0,0,0,0,0,Y1,
0,B,[],3,3,0,0,0,QL,0,B,[LR],3,3,0,0,0,Np,0,B,[QL],3,3,0,0,0,GD,0,B,[Np],1,3,0,0,0,So,0,GD,[],0,3,0,0,0,QB,0,B,[],3,3,0,0,0,TD,0,B,[],0,3,0,0,0,Rn,0,B,[Y],0,3,0,0,0,Hf,0,F4,[],0,0,0,0,0,GB,0,Bt,[],0,3,0,0,0,WZ,0,B,[BY],0,3,0,0,["bg",AT8(AOv)],WY,0,B,[BY],0,3,0,0,["bg",AT8(AG4)],Wf,0,B,[BY],0,3,0,0,["bg",AT8(AIM)],We,0,B,[BY],0,3,0,0,["bg",AT8(AJA)],Yv,0,B,[Y],0,3,0,0,0,WU,0,B,[Cd],0,3,0,0,["b5",AT8(AIy)],JN,0,B,[],0,3,0,0,0,Ji,0,B,[],0,3,0,0,0,L5,0,B,[],0,3,0,0,0,WH,0,B,[Bk],0,3,0,0,["s",AT7(AE$)],WI,0,B,[Bk],
0,3,0,0,["s",AT7(AJf)],E0,0,B,[],0,3,0,0,0,Xw,0,B,[Y],0,3,0,0,["j",AT8(AID)],Ki,0,E0,[],0,3,0,0,0,JO,0,E0,[],0,3,0,0,0,VK,0,B,[Y],0,3,0,0,["j",AT8(AFd)],PR,0,B,[],0,3,0,0,0,OT,0,B,[Y],0,3,0,0,["j",AT8(ALr)],Qz,0,B,[DS],0,3,0,0,["co",AT8(ARw)],Xt,0,D1,[],0,3,0,0,0,Q0,0,Bt,[],0,3,0,0,0]);
$rt_metadata([VP,0,Bt,[],0,3,0,0,0,Ph,0,B,[Y],0,3,0,0,["j",AT8(AMP)],ADX,0,B,[Y],0,3,0,0,0,Wa,0,B,[],0,3,0,0,0,Qq,0,B,[Bk],0,3,0,0,["s",AT7(ARy)],Vm,0,B,[Bk],0,3,0,0,0,Qi,0,B,[QB],0,3,0,0,0,EF,0,B,[CU],0,3,0,0,["eY",AT7(ANX),"sx",AT7(ABF),"lD",AT$(Rt),"kt",AT8(AP0),"o4",AT8(AKT),"oI",AT8(AQw),"qu",AT9(AN5),"fK",AT$(AJj),"fZ",AT9(AF5),"ga",AT9(ALJ),"gc",AT8(AQc),"f4",AT$(ANT)],IK,0,EF,[],0,3,0,0,0,Qw,0,IK,[G$],0,3,0,0,["wo",AT7(AMc),"tx",AT7(AIa),"eY",AT7(AQb),"qu",AT9(AHh),"oI",AT8(ANm),"o4",AT8(AO0),"km",AT8(APg)],Qj,
0,B,[Bk],0,3,0,0,0,PQ,0,EF,[],0,3,0,0,["eY",AT7(AOW),"lD",AT$(AIL),"kt",AT8(AN_),"fK",AT$(APs),"fZ",AT9(AOZ),"ga",AT9(AL8),"gc",AT8(ALQ),"f4",AT$(AHV),"sx",AT7(AQR)],Gn,0,B,[],0,3,0,0,0,Pv,0,B,[],1,3,0,0,0,O1,0,B,[FE],3,3,0,0,["el",AT8(AEa),"lv",AT8(AJ3)],Er,0,Ey,[O1],1,3,0,0,["el",AT8(AEa),"lv",AT8(AJ3)],Pe,0,Er,[],0,0,0,0,["lv",AT8(AJ3)],L$,0,B,[Y],0,3,0,0,["j",AT8(AHO)],UM,0,B,[Y],0,3,0,0,["j",AT8(AKK)],IC,0,B,[],0,3,0,0,["bu",AT8(ABp)],LH,0,IC,[],0,3,0,0,["bu",AT8(AFM)],En,0,B,[],0,3,0,0,["bu",AT8(YO)],FR,
0,En,[],0,3,0,0,0,H_,0,En,[],0,3,0,0,["bu",AT8(AQg)],Iu,0,En,[],0,3,0,0,["bu",AT8(AEW)],YZ,0,B,[Bo],1,3,0,0,0,QW,0,B,[BY],0,3,0,0,["bg",AT8(AHH)],ABi,0,B,[],1,3,0,0,0,Mj,0,B,[BY],0,3,0,0,["bg",AT8(AOA)],Z5,0,GD,[],0,3,0,0,0,RX,0,B,[Bk],0,3,0,0,["s",AT7(AJq)],RY,0,B,[Bk],0,3,0,0,["s",AT7(AGp)],RV,0,B,[Bk],0,3,0,0,["s",AT7(AE_)],RW,0,B,[Bk],0,3,0,0,["s",AT7(AJl)],Q4,0,B,[Bk],0,3,0,0,["s",AT7(ANM)],Q3,0,B,[Bk],0,3,0,0,["s",AT7(AMh)],Q2,0,B,[Bk],0,3,0,0,["s",AT7(ARm)],O4,0,B,[Bk],0,3,0,0,["s",AT7(AMd)],Qh,0,B,[],
3,3,0,0,0,P1,0,B,[Bk],0,3,0,0,["s",AT7(AGd)],HZ,0,B,[],0,3,0,0,0,Ru,0,B,[],3,3,0,0,0,Yo,0,B,[Ru],0,3,0,0,0,Vd,0,EF,[],0,3,0,0,0,WT,0,Eq,[Cp],0,3,0,0,0,Fb,0,B,[],0,0,0,0,0,Hh,0,B,[],4,3,0,0,0,U2,0,B,[],0,3,0,0,0,TJ,0,B,[Fj],0,3,0,0,["v9",AT9(AQt)],AB0,0,B,[],0,3,0,0,0]);
$rt_metadata([V7,0,BV,[],0,3,0,0,0,Dn,0,B,[],0,3,0,0,0,M8,0,B,[Bk],0,3,0,0,["s",AT7(AJY)],M9,0,B,[Bk],0,3,0,0,["s",AT7(APD)],M7,0,B,[Bk],0,3,0,0,["s",AT7(AD$)],Wd,0,B,[Bk],0,3,0,0,["s",AT7(AKR)],Wc,0,B,[Bk],0,3,0,0,["s",AT7(AN9)],OZ,0,B,[D5],0,3,0,0,["dM",AT7(AG9)],Sv,0,B,[Bk],0,3,0,0,["s",AT7(AJy)],Sw,0,B,[Bk],0,3,0,0,["s",AT7(APi)],Xs,0,B,[Bk],0,3,0,0,["s",AT7(AEo)],Xn,0,B,[Bk],0,3,0,0,["s",AT7(AJB)],Xo,0,B,[Bk],0,3,0,0,["s",AT7(AQH)],Xp,0,B,[Bk],0,3,0,0,["s",AT7(AK7)],Xq,0,B,[Bk],0,3,0,0,["s",AT7(AIZ)],Mn,
0,B,[D5],0,3,0,0,["dM",AT7(APy)],KJ,0,B,[],3,3,0,0,0,WP,0,B,[KJ],0,3,0,0,0,Oj,0,B,[Y],0,3,0,0,["j",AT8(AEU)],Oi,0,B,[Y],0,3,0,0,["j",AT8(AFe)],R8,0,Eq,[Cp],0,3,0,0,0,Td,0,B,[Fj],0,3,0,0,["v9",AT9(AFQ)],WD,0,B,[DK],0,3,0,0,0,EJ,0,B,[],0,3,0,0,0,YI,0,B,[],0,3,0,0,0,Qd,0,B,[BY],0,3,0,0,["bg",AT8(AHg)],ADx,0,B,[Cp],0,3,0,0,["bu",AT8(AMi)],MT,0,B,[Y],0,3,0,0,["j",AT8(AKH)],XF,0,B,[Y],0,3,0,0,["j",AT8(ARs)],Ii,0,B,[Bo],3,3,0,0,0,Mw,0,B,[Ii],0,3,0,0,["rL",AT7(AJE)],Md,0,B,[Ii],0,3,0,0,["rL",AT7(AEc)],SZ,0,B,[BY],0,
3,0,0,["bg",AT8(AJi)],Vr,0,B,[D5],0,3,0,0,["dM",AT7(AQ4)],T5,0,B,[KJ],0,3,0,0,0,TL,0,B,[],0,3,0,0,0,WX,0,B,[BY],0,3,0,0,["bg",AT8(AI5)],JH,0,Er,[],1,0,0,0,["el",AT8(AEa),"lv",AT8(AJ3)],U7,0,JH,[],0,0,0,0,["el",AT8(AEa),"lv",AT8(AJ3)],KX,0,DB,[],1,0,0,0,0,U5,0,KX,[],0,0,0,0,0,Lw,0,Em,[KO],1,0,0,0,["el",AT8(AEa),"hT",AT7(AGW),"mo",AT8(ALm),"lv",AT8(AJ$)],U6,0,Lw,[],0,0,0,0,["el",AT8(AEa),"lu",AT8(ALt),"cB",AT7(AKz),"bY",AT7(AHt),"dP",AT7(AE3)],U3,0,B,[EC],0,0,0,0,["cf",AT7(AEL),"bR",AT7(AMO),"kV",AT7(AOo)],Pr,
0,B,[EC],3,3,0,0,0,U4,0,B,[Pr],0,0,0,0,0,XL,0,B,[GM],0,3,0,0,0,ED,0,B,[],0,0,0,0,0,ST,0,ED,[EC],0,0,0,0,0,AAd,0,B,[Bo],1,3,0,0,0]);
$rt_metadata([YY,0,B,[Y],0,0,0,0,0,Rd,0,B,[Cy],4,3,0,0,0,GG,0,B,[Bo],1,3,0,0,0,Zw,0,GG,[],1,3,0,0,0,ACk,0,GG,[],1,3,0,0,0,Um,0,Er,[],0,0,0,0,["el",AT8(AEa),"lv",AT8(AJ3)],Pf,0,Ey,[],0,0,0,0,["el",AT8(AEa),"lv",AT8(AJ3)],AB5,0,B,[],0,3,0,0,0,SA,0,B,[],3,3,0,0,0,S0,0,B,[BY],0,3,0,0,["bg",AT8(AHy)],Ge,0,B,[],3,3,0,0,0,Tn,0,B,[Ge],0,3,0,0,["iP",AT$(ALw)],To,0,B,[Ge],0,3,0,0,["iP",AT$(AI6)],HD,0,B,[Cy,Cp],0,3,0,0,0,I_,0,B,[],3,3,0,0,0,RT,0,B,[I_],0,3,0,0,0,OI,0,B,[I_],3,3,0,0,0,AAV,0,B,[OI],0,3,0,0,0,Sl,0,B,[Ge],
0,3,0,0,["iP",AT$(AMe)],Sk,0,B,[DS],0,3,0,0,["co",AT8(AQr)],Sj,0,B,[DS],0,3,0,0,["co",AT8(ANz)],Sm,0,B,[Ge],0,3,0,0,["iP",AT$(ALL)],MA,0,B,[],0,3,0,0,0,Rf,0,B,[],0,3,0,0,0,BC,0,B,[],1,0,0,0,["b9",AT$(Hc),"cc",AT_(Hm),"hn",AT7(AFZ),"L",AT8(APG),"bM",AT8(APF),"e_",AT7(AQB),"ea",AT7(Iz)],UH,0,B,[],3,3,0,0,0,Vt,0,B,[UH],0,3,0,0,0,XG,0,B,[Y],0,3,0,0,["j",AT8(AMj)],XH,0,B,[Y],0,3,0,0,["j",AT8(AH8)],QD,0,B,[Y],0,3,0,0,["j",AT8(AL2)],CC,0,BC,[],0,0,0,LT,["d",AT$(AFj),"E",AT8(AFI)],Gg,0,B,[],0,0,0,0,0,Ic,0,BF,[],0,3,
0,0,0,ADj,0,B,[],1,3,0,0,0,WE,0,B,[BY],0,3,0,0,["bg",AT8(AM6)],ABj,0,B,[Bo],3,3,0,0,0,TO,0,B,[BY],0,3,0,0,["bg",AT8(AMG)],RP,0,CC,[],0,0,0,0,["d",AT$(AEP),"E",AT8(AOe)],Xf,0,CC,[],0,0,0,0,["d",AT$(AGz)],PU,0,CC,[],0,0,0,0,["d",AT$(AFU)],SU,0,CC,[],0,0,0,0,["d",AT$(AEV),"E",AT8(AMR)],E_,0,CC,[],0,0,0,0,["d",AT$(AP1)],BW,0,BC,[],1,0,0,0,["d",AT$(AQ_),"bS",AT7(AO7),"E",AT8(AJN)],ACV,0,BW,[],0,0,0,0,["bl",AT9(AOz),"b9",AT$(AHU),"cc",AT_(AGs),"E",AT8(AES)],BR,0,BC,[],0,0,0,0,["d",AT$(AIH),"L",AT8(AMJ),"bM",AT8(AKA),
"E",AT8(ANo),"ea",AT7(AGn)],Ir,0,BR,[],0,0,0,0,["d",AT$(AMr),"E",AT8(ANP)],Du,0,Ir,[],0,0,0,0,["d",AT$(AG1),"L",AT8(ANx)],Mu,0,Du,[],0,0,0,0,["d",AT$(AMD),"E",AT8(APN)],VG,0,Du,[],0,0,0,0,["d",AT$(AFC),"E",AT8(APb)],Ri,0,Du,[],0,0,0,0,["d",AT$(AGk),"E",AT8(ARq)]]);
$rt_metadata([Th,0,Du,[],0,0,0,0,["d",AT$(AEt),"E",AT8(AN4)],F5,0,BR,[],0,0,0,0,["d",AT$(AEH),"b9",AT$(AKW),"cc",AT_(AOj),"bM",AT8(AKu),"e_",AT7(AMM),"ea",AT7(AQE)],AC_,0,B,[Bo],1,3,0,0,0,Gk,0,B,[],1,0,0,0,0,Q,0,Gk,[],1,0,0,ON,["c8",AT7(AFF),"eH",AT7(AE8),"iU",AT7(AO4),"gJ",AT7(AQy)],Zj,0,Q,[],0,0,0,0,["i",AT8(CL),"c8",AT7(CH),"eH",AT7(AHP),"iU",AT7(APu),"cP",AT7(ALR),"gJ",AT7(AH3)],IJ,0,Bt,[],0,3,0,0,0,DN,0,BC,[],1,0,0,0,["bM",AT8(AOk),"E",AT8(APT),"ea",AT7(ALg)],CN,0,DN,[],0,0,0,0,["d",AT$(AEv)],EP,0,CN,[],
0,0,0,0,["d",AT$(AFm)],CD,0,DN,[],0,0,0,0,["d",AT$(AEG)],El,0,CN,[],0,0,0,0,["d",AT$(AK2),"L",AT8(ARt)],VT,0,CN,[],0,0,0,0,["d",AT$(AQ3),"b9",AT$(ALM)],W,0,B,[],1,0,0,0,0,CZ,0,BF,[],0,3,0,0,0,ML,0,Gk,[DP],0,0,0,0,["cP",AT7(ALV)],Of,0,BC,[],0,0,0,0,["d",AT$(AKc),"E",AT8(AMH)],Wx,0,B,[DP,Cy],0,3,0,0,0,MB,0,BR,[],0,0,0,0,0,Qs,0,BR,[],0,0,0,0,["d",AT$(AFh),"L",AT8(AMp),"E",AT8(AF1),"bM",AT8(AFD)],Di,0,BR,[],0,0,0,0,["d",AT$(AHF),"i",AT8(AIg),"bM",AT8(AFb),"L",AT8(AOT),"E",AT8(AHR)],IG,0,Di,[],0,0,0,0,["i",AT8(AJO)],Y$,
0,BW,[],0,0,0,0,["bl",AT9(AKd)],DZ,0,BW,[],0,0,0,0,["bl",AT9(Ma),"bM",AT8(AML)],OO,0,BR,[],0,0,0,0,["L",AT8(AK0),"d",AT$(AEk),"bM",AT8(AFR),"E",AT8(APz)],Eb,0,BW,[],0,0,0,0,["bS",AT7(AJX),"bl",AT9(AIU),"b9",AT$(AHC),"cc",AT_(AJ5),"bM",AT8(APp)],ADv,0,BW,[],0,0,0,0,["bl",AT9(AEd)],X7,0,BW,[],0,0,0,0,["bl",AT9(AEA)],EY,0,BR,[],0,0,0,0,["L",AT8(AQC),"d",AT$(AMq),"bM",AT8(AKe),"E",AT8(ANy)],WW,0,EY,[],0,0,0,0,0,Tw,0,EY,[],0,0,0,0,0,XS,0,CD,[],0,0,0,0,["d",AT$(AGF)],PJ,0,CD,[],0,0,0,0,["d",AT$(ALz)],Fq,0,CD,[],0,
0,0,0,["d",AT$(AOR),"L",AT8(AP6)],Pj,0,Fq,[],0,0,0,0,["d",AT$(AJ0),"L",AT8(ALZ)],EX,0,CD,[],0,0,0,0,["d",AT$(ARo)],MX,0,EX,[],0,0,0,0,["d",AT$(AJm)],RG,0,CD,[],0,0,0,0,["d",AT$(AQO)],QE,0,Fq,[],0,0,0,0,["d",AT$(AF3)],Up,0,EX,[],0,0,0,0,["d",AT$(AE1)],RH,0,DN,[],0,0,0,0,["d",AT$(ARd),"b9",AT$(AO5)],Op,0,DN,[],0,0,0,0,["d",AT$(AMN),"b9",AT$(AEq)],Ew,0,B,[],1,0,0,0,0,XV,0,CN,[],0,0,0,0,["d",AT$(AE2)],VN,0,El,[],0,0,0,0,["d",AT$(ALv)],O6,0,EP,[],0,0,0,0,["d",AT$(AOl)],Qy,0,CN,[],0,0,0,0,["d",AT$(AMF)],TH,0,El,[],
0,0,0,0,["d",AT$(AFa)],Rj,0,EP,[],0,0,0,0,["d",AT$(AOC)],JR,0,BC,[],4,0,0,0,["d",AT$(AKy),"E",AT8(AJz)]]);
$rt_metadata([ZN,0,BC,[],0,0,0,0,["d",AT$(AFA),"E",AT8(AFP)],Ok,0,BC,[],0,0,0,0,["d",AT$(AJQ),"E",AT8(ARk)],WC,0,BC,[],4,0,0,0,["d",AT$(ANh),"E",AT8(AGv)],V_,0,BC,[],0,0,0,0,["d",AT$(AMm),"E",AT8(AEb)],M$,0,BC,[],0,0,0,0,["d",AT$(AGl),"E",AT8(AIw)],ADl,0,BR,[],0,0,0,0,["d",AT$(AQU),"L",AT8(AFT),"hn",AT7(AL5),"E",AT8(AFS)],Zg,0,BR,[],4,0,0,0,["d",AT$(AMf),"L",AT8(AOb),"hn",AT7(AD8),"E",AT8(AQ$)],AC5,0,BC,[],4,0,0,0,["d",AT$(AKi),"E",AT8(AIq)],ABg,0,BC,[],0,0,0,0,["d",AT$(AMk),"E",AT8(AIb)],X4,0,BC,[],0,0,0,0,
["d",AT$(AJp),"E",AT8(AGy)],GF,0,BR,[],0,0,0,0,["d",AT$(AE7),"L",AT8(ANu),"E",AT8(ANR)],ADa,0,GF,[],0,0,0,0,["d",AT$(AGE),"b9",AT$(APJ),"cc",AT_(AEQ),"bM",AT8(ALn)],AAu,0,GF,[],0,0,0,0,["d",AT$(AKQ)],Oe,0,FU,[Hs],0,3,0,0,["lH",AT_(AH4),"kI",AT$(AFG),"hz",AT8(AF_),"md",AT9(AO6)],RJ,0,BW,[],0,0,0,0,["bl",AT9(AGZ),"b9",AT$(AFv),"cc",AT_(AIu),"bM",AT8(AI7)],X3,0,BW,[],0,0,0,0,["bl",AT9(AKY)],M3,0,BW,[],0,0,0,0,["bl",AT9(AOp)],GE,0,B,[],4,0,0,AN2,0,Mk,0,BW,[],0,0,0,0,["bl",AT9(AOu)],Ks,0,BR,[],0,0,0,0,["L",AT8(AMC),
"d",AT$(AGw),"b9",AT$(AI4),"cc",AT_(AG6),"bM",AT8(AEN),"E",AT8(APd)],KK,0,BR,[],0,0,0,0,["L",AT8(AF$),"d",AT$(AEu),"b9",AT$(AMZ),"cc",AT_(AOn),"bM",AT8(AG0),"E",AT8(AM$)],DC,0,BW,[],0,0,0,0,["bl",AT9(ANS),"b9",AT$(ALS),"cc",AT_(AF9),"bM",AT8(ANC)],UW,0,Ew,[],0,0,0,0,["he",AT8(AGi),"th",AT9(ANL)],UX,0,Ew,[],0,0,0,0,["he",AT8(AOG),"th",AT9(AQs)],ACd,0,B,[],0,0,0,0,0,Yr,0,B,[],0,0,0,0,0,Kp,0,W,[],0,0,0,0,["A",AT7(AAB)],Js,0,W,[],0,0,0,0,["A",AT7(AA$)],AB8,0,W,[],0,0,0,0,["A",AT7(AOd)],ACD,0,W,[],0,0,0,0,["A",AT7(APf)],ACG,
0,W,[],0,0,0,0,["A",AT7(AHG)],Kh,0,W,[],0,0,0,0,["A",AT7(Zl)],KZ,0,Kh,[],0,0,0,0,["A",AT7(AAa)],ADZ,0,W,[],0,0,0,0,["A",AT7(AI3)],L8,0,KZ,[],0,0,0,0,["A",AT7(X1)],AAO,0,L8,[],0,0,0,0,["A",AT7(ALh)],AA4,0,W,[],0,0,0,0,["A",AT7(AGT)],ZF,0,W,[],0,0,0,0,["A",AT7(ALe)],Zt,0,W,[],0,0,0,0,["A",AT7(AQx)],ACJ,0,W,[],0,0,0,0,["A",AT7(AL1)],AD7,0,W,[],0,0,0,0,["A",AT7(AEn)],ACe,0,W,[],0,0,0,0,["A",AT7(AJu)],ABZ,0,W,[],0,0,0,0,["A",AT7(ANY)],ACX,0,W,[],0,0,0,0,["A",AT7(AGQ)],YH,0,W,[],0,0,0,0,["A",AT7(AHf)],Yk,0,W,[],0,
0,0,0,["A",AT7(AQp)],ACl,0,W,[],0,0,0,0,["A",AT7(AEe)],ACv,0,W,[],0,0,0,0,["A",AT7(AKm)],Z3,0,W,[],0,0,0,0,["A",AT7(AHq)],AA9,0,W,[],0,0,0,0,["A",AT7(AIz)]]);
$rt_metadata([ADF,0,W,[],0,0,0,0,["A",AT7(AKo)],ACs,0,W,[],0,0,0,0,["A",AT7(APC)],AAr,0,W,[],0,0,0,0,["A",AT7(ANe)],Z1,0,W,[],0,0,0,0,["A",AT7(ALT)],AD3,0,W,[],0,0,0,0,["A",AT7(AN8)],IU,0,W,[],0,0,0,0,["A",AT7(AA6)],AC2,0,IU,[],0,0,0,0,["A",AT7(ALG)],AAS,0,Kp,[],0,0,0,0,["A",AT7(AFs)],ZW,0,Js,[],0,0,0,0,["A",AT7(AIQ)],Zy,0,W,[],0,0,0,0,["A",AT7(AKC)],ZS,0,W,[],0,0,0,0,["A",AT7(AQe)],AAF,0,W,[],0,0,0,0,["A",AT7(AH7)],AAP,0,W,[],0,0,0,0,["A",AT7(AEf)],ZB,0,B,[],4,0,0,0,0,Y8,0,B,[],4,3,0,0,0,Na,0,B,[],0,3,0,0,
0,ACo,0,B,[],0,3,0,0,0,AAn,0,B,[],4,3,0,0,0,T9,0,ED,[EC],0,0,0,0,0,Rh,0,ED,[EC],0,0,0,0,0,Zh,0,B,[DS],0,3,0,0,0,UR,0,B,[DS],0,0,0,0,["co",AT8(AHL)],VS,0,Q,[],0,0,0,0,["i",AT8(AHN)],VQ,0,Q,[],0,0,0,0,["i",AT8(AEE)],Ou,0,Q,[],0,0,0,0,["i",AT8(AKs),"cP",AT7(AIE)],OB,0,Q,[],0,0,0,0,["i",AT8(ANW)],Oz,0,Q,[],0,0,0,0,["i",AT8(AOt)],OA,0,Q,[],0,0,0,0,["i",AT8(AKX)],OE,0,Q,[],0,0,0,0,["i",AT8(AHj)],OF,0,Q,[],0,0,0,0,["i",AT8(AD9)],OC,0,Q,[],0,0,0,0,["i",AT8(AIK)],OD,0,Q,[],0,0,0,0,["i",AT8(AKZ)],OG,0,Q,[],0,0,0,0,["i",
AT8(APP)],OH,0,Q,[],0,0,0,0,["i",AT8(AGJ)],Ot,0,Q,[],0,0,0,0,["i",AT8(ARx)],O9,0,Q,[],0,0,0,0,["i",AT8(AIO)],Or,0,Q,[],0,0,0,0,["i",AT8(AGI)],Os,0,Q,[],0,0,0,0,["i",AT8(AIm)],Ox,0,Q,[],0,0,0,0,["i",AT8(AJS)],Oq,0,Q,[],0,0,0,0,["i",AT8(APm)],Ov,0,Q,[],0,0,0,0,["i",AT8(AFK)],Ow,0,Q,[],0,0,0,0,["i",AT8(AM9)],Fx,0,Cq,[],12,0,0,SI,0,XN,0,B,[Y],0,3,0,0,0,Ls,0,B,[],3,3,0,0,0,SE,0,B,[Ls],4,3,0,0,0,SO,0,B,[Y],0,3,0,0,["j",AT8(ANG)],Tm,0,B,[],32,0,0,AS7,0,Xi,0,B,[Y],0,3,0,0,0,Jc,0,B,[],0,3,0,0,0]);
$rt_metadata([AAN,0,B,[Bo],1,3,0,0,0,MS,0,F5,[],0,0,0,0,["b9",AT$(AH_),"cc",AT_(ARn),"e_",AT7(AGu)],L0,0,Bt,[],0,3,0,0,0,N0,0,B,[Y],0,3,0,0,0,N1,0,B,[Y],0,3,0,0,0,Rx,0,B,[Y],0,3,0,0,["j",AT8(AGr)],YE,0,B,[],0,3,0,0,0,P6,0,B,[Y],0,3,0,0,["j",AT8(AQ5)],Y6,0,B,[],3,3,0,0,0,Q1,0,B,[BY],0,3,0,0,["bg",AT8(AEl)],Sd,0,B,[Y],0,3,0,0,["j",AT8(ALi)],Sb,0,B,[Y],0,3,0,0,["j",AT8(ANr)],Pc,0,B,[Bk],0,3,0,0,0,TC,0,B,[Y],0,3,0,0,["j",AT8(AMV)],Vx,0,B,[Y],0,3,0,0,["j",AT8(AG$)],UP,0,B,[Ls],0,0,0,0,0,WL,0,B,[BY],0,3,0,0,["bg",
AT8(AHa)],On,0,B,[Y],0,3,0,0,["j",AT8(AGP)],Mt,0,B,[Bk],0,3,0,0,["s",AT7(AI2)],M4,0,B,[Bk],0,3,0,0,["s",AT7(AIX)],NH,0,B,[Y],0,3,0,0,["j",AT8(ALF)],Vw,0,B,[Y],0,3,0,0,["j",AT8(AIB)],N3,0,B,[Bk],0,3,0,0,["s",AT7(AEK)],SX,0,Q,[],0,0,0,0,["i",AT8(APZ)],Mz,0,Q,[],0,0,0,0,["i",AT8(AFq)],R1,0,Q,[],0,0,0,0,["i",AT8(AE9)],R0,0,Q,[],0,0,0,0,["i",AT8(AH6)],Wl,0,Q,[],0,0,0,0,["i",AT8(AJG)],OY,0,Q,[],0,0,0,0,["i",AT8(AP3)],N_,0,Q,[],0,0,0,0,["i",AT8(AMx)],QX,0,Q,[],0,0,0,0,["i",AT8(AN1)],Ms,0,Q,[],0,0,0,0,["i",AT8(AQ7)],Mx,
0,Q,[],0,0,0,0,["i",AT8(AG5)],NG,0,Q,[],0,0,0,0,["i",AT8(AP_)],Pn,0,Q,[],0,0,0,0,["i",AT8(ALb)],PA,0,Q,[],0,0,0,0,["i",AT8(ANs)],Tq,0,Q,[],0,0,0,0,["i",AT8(APQ)],SF,0,Q,[],0,0,0,0,["i",AT8(AQI)],MG,0,Q,[],0,0,0,0,["i",AT8(AGR)],LP,0,Q,[],0,0,0,0,["i",AT8(AMA)],RS,0,LP,[],0,0,0,0,["i",AT8(AOU)],WF,0,B,[BY],0,3,0,0,["bg",AT8(AIx)],WG,0,B,[BY],0,3,0,0,["bg",AT8(AFJ)],Uf,0,B,[],3,3,0,ASz,0,Sr,0,B,[Y],0,3,0,0,["j",AT8(AIp)],RB,0,B,[Ii],0,3,0,0,["rL",AT7(AOy)],Ub,0,B,[BY],0,3,0,0,["bg",AT8(AQK)],ACP,0,B,[],0,0,0,
0,0,T7,0,B,[BY],0,3,0,0,["bg",AT8(AKF)],Ym,0,B,[Bo],1,3,0,0,0]);
$rt_metadata([PT,0,B,[BY],0,3,0,0,["bg",AT8(AOm)],ACh,0,B,[],3,3,0,0,0,AAU,0,B,[Fj],0,3,0,0,0,Vs,0,B,[],0,3,0,0,0,NK,0,B,[DK],0,3,0,0,["gp",AT8(AE5)],YS,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.N_=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","null","false","true","Either src or dest is null","dark","light","darcula","unknown theme: ","provided result is not an array","bad model","text",".cpp",".cc",".cxx",".hpp",".c",".h",
".java","java",".js","js",".activity","activity","cpp","mermaid","/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncFullParseFile","asyncParseFile","asyncParseFirstLines","/Model::parseFullFile","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","/Model::iterativeParsing","asyncIterativeParsing","/","[",", ","]","\n","...","\\n","Consolas","  ","Set editor font to: ",", ascent+descent = ",", lineHeight = ",
", caretHeight = ","topBase(font, lineHeight) = "," ","\r","opening file ","highlight at (",") does not match code model","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaProxy.parseViewport","deleteDiffModel","keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","#606366","#2B2B2B","#A4A3A3","#323232","#616161","#393B40","#DFE1E5","#484A4A","#294436","#385570","#303C47","#4B5059",
"#1E1F22","#A1A3AB","#26282E","#43454A","#283541","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","Illegal argument javaObject instanceof ","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  outColor = texture(sDiffuse, textureUV);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uTextPow;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main("
+") {\n            // D2D and JsCanvas(alpha=true) comparison:\n            //    - rgb is different\n            //    - alpha is identical\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = pow(t, uTextPow.x);\n            outColor = mix(uBgColor, uColor, text);\n          }","WebGraphics::ctor finish",".","FontDesk::FontDesk iSize != size: ","italic","normal","oblique","onPaste: item.type = ",", item.kind = ","pixel shader error: ","vertex shader error: ",
"----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBgColor;\nuniform sampler2D sDiffuse;\nuniform vec2 uTextPow;\nin vec2 textureUV;\nvoid main() {\n  vec3 textRGB = texture(sDiffuse, textureUV).rgb;\n  vec3 textRGBp = vec3(\n    pow(textRGB.x, uTextPow.x),\n    pow(textRGB.y, uTextPow.x),\n    pow(textRGB.z, uTextPow.x));\n  vec3 mixColor = mix(uBgColor.rgb, uColor.rgb, textRGBp);\n  // if (dot(textRGB, textRGB) == 0.0) outColor = uBgColor; else\n  outColo"
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
Bv.prototype.valueOf=Bv.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AF6(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var AXN=Long_add;var JS=Long_sub;var ALN=Long_mul;var AXO=Long_div;var AXP=Long_rem;var AXQ=Long_or;var XW=Long_and;var AXR=Long_xor;var AXS=Long_shl;var AXT=Long_shr;var ATx=Long_shru;var AXU=Long_compare;var AHk=Long_eq;var AXV=Long_ne;var AR$=Long_lt;var AXW=Long_le;var AXX=Long_gt;var AR8=Long_ge;var AXY=Long_not;var ASX=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(ASm);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=T_.prototype;c.create=c.yd;c=T$.prototype;c.create=c.A2;c=TR.prototype;c.create=c.yd;c=Pw.prototype;c.registerDocumentHighlightProvider=c.za;c.getModel=c.Fb;c.getProperty=c.CP;c.getText=c.zi;c.onDidChangeModel=c.HK;c.revealPosition=c.EW;c.focus=c.Dk;c.setReadonly=c.Av;c.setPosition=c.FH;c.setFontSize=c.DD;c.setFontFamily=c.At;c.revealLine=c.Ky;c.getPosition=c.IA;c.revealLineInCenter=c.B9;c.setTheme=c.KV;c.setModel=c.zI;c.executeOnWorker=c.BA;c.registerDefinitionProvider=c.GS;c.registerEditorOpener
=c.Hl;c.registerReferenceProvider=c.HI;c.dispose=c.EM;c.registerDeclarationProvider=c.JD;c.setText=c.Ea;c=ET.prototype;c.getPositionAt=c.A$;c.getText=c.Fe;c.getOffsetAt=c.D7;c.dispose=c.A8;Object.defineProperty(c,"language",{get:c.IF});Object.defineProperty(c,"uri",{get:c.DA});c=VH.prototype;c.setRightModel=c.BM;c.setFontFamily=c.Jq;c.setLeftModel=c.GI;c.setTheme=c.z2;c.getRightModel=c.KW;c.focus=c.Fj;c.getLeftModel=c.GQ;c.setReadonly=c.zX;c.setFontSize=c.Fl;c=Ug.prototype;c.f=c.mu;c=XE.prototype;c.f=c.mu;c
=Yz.prototype;c.createEntityReference=c.Ck;c.getElementById=c.Gs;c.createTextNode=c.F6;c.hasChildNodes=c.D9;c.querySelectorAll=c.BY;c.removeChild=c.Il;c.cloneNode=c.zZ;c.createComment=c.Kn;c.insertBefore=c.CT;c.getElementsByTagNameNS=c.IN;c.hasAttributes=c.Fy;c.normalize=c.KB;c.hasChildNodesJS=c.Kk;c.getElementsByTagName=c.Jy;c.appendChild=c.Ar;c.createAttributeNS=c.GY;c.dispatchEvent=c.JZ;c.replaceChild=c.A0;c.createElementNS=c.Di;c.createCDATASection=c.Iw;c.querySelector=c.Fw;c.createElement=c.Hz;c.isSupported
=c.Iy;c.importNode=c.De;c.removeEventListener=c.C6;c.createAttribute=c.J2;c.createDocumentFragment=c.y$;c.createProcessingInstruction=c.Cd;c.addEventListener=c.Hw;Object.defineProperty(c,"nodeName",{get:c.Aq});Object.defineProperty(c,"documentElement",{get:c.EX});Object.defineProperty(c,"childNodes",{get:c.H_});Object.defineProperty(c,"prefix",{get:c.Dq,set:c.KO});Object.defineProperty(c,"implementation",{get:c.I2});Object.defineProperty(c,"textContent",{get:c.Kx,set:c.F4});Object.defineProperty(c,"parentNode",
{get:c.Gp});Object.defineProperty(c,"nextSibling",{get:c.EH});Object.defineProperty(c,"nodeType",{get:c.HX});Object.defineProperty(c,"doctype",{get:c.Ew});Object.defineProperty(c,"localName",{get:c.Jt});Object.defineProperty(c,"nodeValue",{get:c.Eb,set:c.Ka});Object.defineProperty(c,"firstChild",{get:c.JJ});Object.defineProperty(c,"lastChild",{get:c.HH});Object.defineProperty(c,"previousSibling",{get:c.z6});Object.defineProperty(c,"namespaceURI",{get:c.BF});Object.defineProperty(c,"attributes",{get:c.Dz});Object.defineProperty(c,
"ownerDocument",{get:c.BS});c=Zo.prototype;c.removeEventListener=c.B0;c.dispatchEvent=c.C2;c.addEventListener=c.GR;c=Sq.prototype;c.f=c.mu;c=Vc.prototype;c.dispose=c.C9;c=AAR.prototype;c.get=c.Jz;Object.defineProperty(c,"length",{get:c.IT});c=Pz.prototype;c.f=c.bg;c=QS.prototype;c.f=c.bg;c=NJ.prototype;c.f=c.bg;c=U_.prototype;c.onAnimationFrame=c.FC;c=U$.prototype;c.f=c.mu;c=U8.prototype;c.handleEvent=c.b5;c=Sy.prototype;c.f=c.bg;c=V3.prototype;c.handleEvent=c.b5;c=V4.prototype;c.handleEvent=c.b5;c=V5.prototype;c.handleEvent
=c.b5;c=V6.prototype;c.handleEvent=c.b5;c=ADd.prototype;c.handleEvent=c.b5;c=ADe.prototype;c.handleEvent=c.b5;c=ADf.prototype;c.handleEvent=c.b5;c=ADg.prototype;c.handleEvent=c.b5;c=ADh.prototype;c.handleEvent=c.b5;c=ADi.prototype;c.handleEvent=c.b5;c=ADT.prototype;c.handleEvent=c.b5;c=ADU.prototype;c.handleEvent=c.b5;c=ADV.prototype;c.handleEvent=c.b5;c=ADW.prototype;c.handleEvent=c.b5;c=TZ.prototype;c.handleEvent=c.b5;c=W6.prototype;c.f=c.bg;c=W7.prototype;c.f=c.bg;c=NA.prototype;c.accept=c.Kb;c=WZ.prototype;c.f
=c.bg;c=WY.prototype;c.f=c.bg;c=Wf.prototype;c.f=c.bg;c=We.prototype;c.f=c.bg;c=WU.prototype;c.handleEvent=c.b5;c=QW.prototype;c.f=c.bg;c=Mj.prototype;c.f=c.bg;c=Qd.prototype;c.f=c.bg;c=Mw.prototype;c.onTimer=c.rL;c=Md.prototype;c.onTimer=c.rL;c=SZ.prototype;c.f=c.bg;c=WX.prototype;c.f=c.bg;c=S0.prototype;c.f=c.bg;c=WE.prototype;c.f=c.bg;c=TO.prototype;c.f=c.bg;c=Q1.prototype;c.f=c.bg;c=WL.prototype;c.f=c.bg;c=WF.prototype;c.f=c.bg;c=WG.prototype;c.f=c.bg;c=RB.prototype;c.onTimer=c.rL;c=Ub.prototype;c.f=c.bg;c
=T7.prototype;c.f=c.bg;c=PT.prototype;c.f=c.bg;})();
$rt_exports.main();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);
export const newEditor = self.editorFactory;
export const newTextModel = self.modelFactory;
export const newCodeDiff = self.diffFactory;
