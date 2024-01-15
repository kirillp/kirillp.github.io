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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.f1=f;}
function $rt_cls(cls){return ZC(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return GA(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b4.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AKD(t);}
function $rt_throwableCause(t){return AKI(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(APL());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return APM(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(APN());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BF=$rt_compare;var APO=$rt_nullCheck;var E=$rt_cls;var O=$rt_createArray;var HI=$rt_isInstance;var APP=$rt_nativeThread;var APQ=$rt_suspending;var APR=$rt_resuming;var APS=$rt_invalidPointer;var C=$rt_s;var Bf=$rt_eraseClinit;var V=$rt_imul;var ET=$rt_wrapException;var APT=$rt_checkBounds;var APU=$rt_checkUpperBound;var APV=$rt_checkLowerBound;var APW=$rt_wrapFunction0;var APX=$rt_wrapFunction1;var APY=$rt_wrapFunction2;var APZ=$rt_wrapFunction3;var AP0=$rt_wrapFunction4;var F=$rt_classWithoutFields;var G
=$rt_createArrayFromData;var AOq=$rt_createCharArrayFromData;var AP1=$rt_createByteArrayFromData;var AP2=$rt_createShortArrayFromData;var Fv=$rt_createIntArrayFromData;var AP3=$rt_createBooleanArrayFromData;var AP4=$rt_createFloatArrayFromData;var AP5=$rt_createDoubleArrayFromData;var ADP=$rt_createLongArrayFromData;var APJ=$rt_createBooleanArray;var Eb=$rt_createByteArray;var AP6=$rt_createShortArray;var B2=$rt_createCharArray;var Bt=$rt_createIntArray;var AP7=$rt_createLongArray;var AB5=$rt_createFloatArray;var AP8
=$rt_createDoubleArray;var BF=$rt_compare;var AP9=$rt_castToClass;var AP$=$rt_castToInterface;var AP_=Long_toNumber;var BI=Long_fromInt;var AQa=Long_fromNumber;var Dh=Long_create;var AAq=Long_ZERO;var AQb=Long_hi;var X0=Long_lo;
function B(){this.$id$=0;}
function AQc(){var a=new B();TQ(a);return a;}
function TQ(a){}
function Bw(a){return ZC(a.constructor);}
function AHY(a,b){return a!==b?0:1;}
function ADD(a){var b,c,d,e,f,g,h,i,j;b=H8(a);if(!b)c=C(0);else{d=(((32-MD(b)|0)+4|0)-1|0)/4|0;e=B2(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Gs((b>>>g|0)&15,16);g=g-4|0;h=i;}c=GA(e);}j=new R;T(j);K(K(j,C(1)),c);return S(j);}
function H8(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AHk(a){var b,c,d;if(!HI(a,DF)&&a.constructor.$meta.item===null){b=new TE;W(b);J(b);}b=ACb(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var Fc=F();
var AQd=null;var AQe=null;var AQf=null;var AQg=null;var AQh=null;function AHG(b){var c,d,e,f;Ym();AAH();WL();ABK();Y8();Z7();X3();Zh();AAJ();WG();Yn();AA9();AA2();WI();ZZ();ZP();ZR();YQ();X8();W7();ABu();Yp();AAa();Zo();c=(WX()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))XA(C(2),C(3));else{d=$rt_globals.fetch("teavm/worker.js");e=new Tr;e=d.then(Bi(e,"f"));c=new O7;f=new O9;e.then(Bi(c,"f"),Bi(f,"f"));}}
function Ur(b){Sc(AQd.cw,b);Te(AQe);}
function Ym(){AQf=null;AQg=FR();AQh=FR();}
var L0=F(0);
var Lw=F(0);
function Up(){var a=this;B.call(a);a.jy=null;a.fo=null;}
function ZC(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Up;c.fo=b;d=c;b.classObject=d;}return c;}
function G2(a){return a.fo.$meta.primitive?1:0;}
function Hi(a){return ZC(a.fo.$meta.item);}
var XG=F();
function Bi(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Es(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Xm=F();
function ACb(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ZG(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ZG(d[e],c))return 1;e=e+1|0;}return 0;}
function FN(){var a=this;B.call(a);a.k5=null;a.pY=null;a.kY=0;a.lJ=0;}
function AQi(){var a=new FN();W(a);return a;}
function AQj(a){var b=new FN();Br(b,a);return b;}
function W(a){a.kY=1;a.lJ=1;}
function Br(a,b){a.kY=1;a.lJ=1;a.k5=b;}
function AFg(a){return a;}
function AKD(a){return a.k5;}
function AKI(a){var b;b=a.pY;if(b===a)b=null;return b;}
var DE=F(FN);
function AQk(){var a=new DE();Z2(a);return a;}
function Z2(a){W(a);}
var Bq=F(DE);
function APM(a){var b=new Bq();AMh(b,a);return b;}
function AMh(a,b){Br(a,b);}
var YT=F(Bq);
var Cu=F(0);
var Cl=F(0);
var HU=F(0);
function Bv(){var a=this;B.call(a);a.b4=null;a.hf=0;}
var AQl=null;var AQm=null;var AQn=null;function FO(){FO=Bf(Bv);ALX();}
function AF2(){var a=new Bv();WC(a);return a;}
function GA(a){var b=new Bv();Ij(b,a);return b;}
function DL(a,b,c){var d=new Bv();Lg(d,a,b,c);return d;}
function WC(a){FO();a.b4=AQl;}
function Ij(a,b){FO();Lg(a,b,0,b.data.length);}
function Lg(a,b,c,d){var e;FO();e=B2(d);a.b4=e;C7(b,c,e,0,d);}
function K_(b){var c;FO();c=AF2();c.b4=b;return c;}
function I(a,b){var c,d;if(b>=0){c=a.b4.data;if(b<c.length)return c[b];}d=new Go;W(d);J(d);}
function H(a){return a.b4.data.length;}
function DT(a){return a.b4.data.length?0:1;}
function OL(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=H(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){C7(a.b4,b,d,e,c);return;}}g=new BU;W(g);J(g);}
function Sw(a,b,c){var d,e,f;if((c+H(b)|0)>H(a))return 0;d=0;while(d<H(b)){e=I(b,d);f=c+1|0;if(e!=I(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Jr(a,b){if(a===b)return 1;return Sw(a,b,0);}
function Dz(a,b){var c,d,e,f;if(a===b)return 1;if(H(b)>H(a))return 0;c=0;d=H(a)-H(b)|0;while(d<H(a)){e=I(a,d);f=c+1|0;if(e!=I(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Hs(a,b,c){var d,e,f,g,h;d=Ba(0,c);if(b<65536){e=b&65535;while(true){f=a.b4.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=JB(b);h=KG(b);while(true){f=a.b4.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function GF(a,b,c){var d,e,f,g,h;d=Be(c,H(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b4.data[d]==e)break;d=d+(-1)|0;}return d;}f=JB(b);g=KG(b);while(true){if(d<1)return (-1);h=a.b4.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Ov(a,b,c){var d,e,f;d=Ba(0,c);e=H(a)-H(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=H(b))break a;if(I(a,d+f|0)!=I(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AJi(a,b){return Ov(a,b,0);}
function OH(a,b,c){var d,e;d=Be(c,H(a)-H(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=H(b))break a;if(I(a,d+e|0)!=I(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Yz(a,b){return OH(a,b,H(a));}
function B9(a,b,c){var d,e;d=BF(b,c);if(d>0){e=new BU;W(e);J(e);}if(!d){FO();return AQm;}if(!b&&c==H(a))return a;return DL(a.b4,b,c-b|0);}
function DS(a,b){return B9(a,b,H(a));}
function OW(a,b,c){return B9(a,b,c);}
function GX(a,b){var c,d,e,f,g,h;if(DT(b))return a;if(DT(a))return b;c=B2(H(a)+H(b)|0);d=c.data;e=0;f=0;while(f<H(a)){g=e+1|0;d[e]=I(a,f);f=f+1|0;e=g;}g=0;while(g<H(b)){h=e+1|0;d[e]=I(b,g);g=g+1|0;e=h;}return K_(c);}
function Td(a,b,c){var d,e,f,g;d=new R;T(d);e=H(a)-H(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=H(b)){K(d,c);f=f+(H(b)-1|0)|0;break a;}if(I(a,f+g|0)!=I(b,g))break;g=g+1|0;}B0(d,I(a,f));}f=f+1|0;}K(d,DS(a,f));return S(d);}
function QF(a){var b,c;b=0;c=H(a)-1|0;a:{while(b<=c){if(I(a,b)>32)break a;b=b+1|0;}}while(b<=c&&I(a,c)<=32){c=c+(-1)|0;}return B9(a,b,c+1|0);}
function ES(a){var b,c,d,e,f;b=a.b4.data;c=B2(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function DX(b){var c;FO();c=new R;T(c);return S(Bj(c,b));}
function B1(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(H(c)!=H(a))return 0;d=0;while(d<H(c)){if(I(a,d)!=I(c,d))return 0;d=d+1|0;}return 1;}
function J0(a){var b,c,d,e;a:{if(!a.hf){b=a.b4.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hf=(31*a.hf|0)+e|0;d=d+1|0;}}}return a.hf;}
function KQ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new FU;Br(b,C(4));J(b);}AQo=1;d=new PY;d.jj=O(Cw,10);d.fH=(-1);d.eg=(-1);d.bh=(-1);e=new FX;e.eb=1;e.bu=b;e.S=B2(H(b)+2|0);C7(ES(b),0,e.S,0,H(b));f=e.S.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.qN=g;e.fr=0;EF(e);EF(e);d.g=e;d.db=0;d.kq=VN(d,(-1),0,null);if(!CW(d.g)){b=new HN;h=d.g;Ip(b,C(5),h.bu,h.cO);J(b);}if(d.m5)d.kq.dV();b=Bz();h=new Rj;h.hO=(-1);h.jK=(-1);h.vs=d;h.s6=d.kq;h.h3=a;h.hO=0;g=H(a);h.jK=g;e=new Tg;i=h.hO;j=d.fH;k=d.eg+1|0;l=d.bh+1|0;e.gX
=(-1);m=j+1|0;e.n3=m;e.dk=Bt(m*2|0);f=Bt(l);e.iF=f;GI(f,(-1));if(k>0)e.kf=Bt(k);GI(e.dk,(-1));VC(e,a,i,g);h.ce=e;e.eQ=1;n=0;m=0;if(!H(a)){f=O(Bv,1);f.data[0]=C(5);}else{while(true){l=H(h.h3);if(!WQ(h))l=h.jK;e=h.ce;if(e.dQ>=0&&Yg(e)==1){e=h.ce;e.dQ=H6(e);if(H6(h.ce)==Z6(h.ce)){e=h.ce;e.dQ=e.dQ+1|0;}g=h.ce.dQ;g=g<=l&&LF(h,g)?1:0;}else g=LF(h,h.hO);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Bu(b,OW(a,m,ABm(h)));m=X6(h);n=g;}a:{Bu(b,OW(a,m,H(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(H(Bo(b,g)))break a;E7(b,
g);}}if(g<0)g=0;f=GY(b,O(Bv,g));}return f;}
function AFq(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Be(H(a),H(b));e=0;while(true){if(e>=d){c=H(a)-H(b)|0;break a;}c=I(a,e)-I(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function ALX(){AQl=B2(0);AQm=AF2();AQn=new RC;}
var FI=F(FN);
var Gu=F(FI);
var Yy=F(Gu);
var Ea=F();
function FA(){Ea.call(this);this.bb=0;}
var AQp=null;var AQq=null;function ALF(a){var b=new FA();XU(b,a);return b;}
function XU(a,b){a.bb=b;}
function J_(b){return (Mj(APx(20),b,10)).eh();}
function IC(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new CT;Br(b,C(6));J(b);}d=H(b);if(0==d){b=new CT;Br(b,C(7));J(b);}if(c>=2&&c<=36){a:{e=0;switch(I(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new CT;W(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=NT(I(b,f));if(i<0){j=new CT;k=B9(b,0,d);b=new R;T(b);K(K(b,C(8)),k);Br(j,S(b));J(j);}if(i>=c){j=new CT;l=B9(b,0,d);b=new R;T(b);K(K(Bj(K(b,C(9)),c),C(10)),l);Br(j,S(b));J(j);}g=V(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new CT;k=B9(b,0,d);b=new R;T(b);K(K(b,C(11)),k);Br(j,S(b));J(j);}b=new CT;j=new R;T(j);Bj(K(j,C(12)),c);Br(b,S(j));J(b);}
function Ct(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AQq===null){AQq=O(FA,256);c=0;while(true){d=AQq.data;if(c>=d.length)break a;d[c]=ALF(c-128|0);c=c+1|0;}}}return AQq.data[b+128|0];}return ALF(b);}
function AMY(a,b){if(a===b)return 1;return b instanceof FA&&b.bb==a.bb?1:0;}
function MD(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Hu(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AHf(a,b){b=b;return BF(a.bb,b.bb);}
function AAH(){AQp=E($rt_intcls());}
function FC(){var a=this;B.call(a);a.J=null;a.F=0;}
function AQr(){var a=new FC();T(a);return a;}
function APx(a){var b=new FC();Fo(b,a);return b;}
function T(a){Fo(a,16);}
function Fo(a,b){a.J=B2(b);}
function Mj(a,b,c){return YK(a,a.F,b,c);}
function YK(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Co(a,b,b+1|0);else{Co(a,b,b+2|0);f=a.J.data;g=b+1|0;f[b]=45;b=g;}a.J.data[b]=Gs(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=V(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Co(a,b,b+i|0);if(e)e=b;else{f=a.J.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.J.data;b=e+1|0;f[e]=Gs($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function Zw(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BF(c,0.0);if(!d){if(1.0/c===Infinity){Co(a,b,b+3|0);e=a.J.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Co(a,b,b+4|0);e=a.J.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.J.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.J.data;d=b+1|0;e[b]=45;}e=a.J.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AQs;Zp(c,f);d=f.jQ;g=f.jr;h=f.nf;i=1;j=1;if(h)j=2;k=9;l=ALq(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Ba(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Co(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.J.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.J.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.J.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.J.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function ALq(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function B0(a,b){return a.ln(a.F,b);}
function Vt(a,b,c){Co(a,b,b+1|0);a.J.data[b]=c;return a;}
function IH(a,b){var c,d;c=a.J.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.J=Mx(a.J,d);}
function S(a){return DL(a.J,0,a.F);}
function Ve(a,b,c,d){return a.kT(a.F,b,c,d);}
function LU(a,b,c,d,e){var f,g,h,i;Co(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.J.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Hv(a,b){return a.jW(b,0,b.data.length);}
function Co(a,b,c){var d,e,f,g;d=a.F;e=d-b|0;a.g8((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.J.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.F=a.F+(c-b|0)|0;}
var G5=F(0);
var R=F(FC);
function APl(){var a=new R();AMJ(a);return a;}
function AMJ(a){T(a);}
function K(a,b){var c;c=a.F;if(b===null)b=C(13);Lc(a,c,b);return a;}
function DJ(a,b){Lc(a,a.F,b);return a;}
function Bj(a,b){Mj(a,b,10);return a;}
function FD(a,b){var c,d,e,f,g,h,i,j;c=a.F;d=1;if(AN8(b,AAq)){d=0;b=AOP(b);}a:{if(Hr(b,BI(10))<0){if(d)Co(a,c,c+1|0);else{Co(a,c,c+2|0);e=a.J.data;f=c+1|0;e[c]=45;c=f;}a.J.data[c]=Gs(X0(b),10);}else{g=1;h=BI(1);i=KD(BI(-1),BI(10));b:{while(true){j=AIz(h,BI(10));if(Hr(j,b)>0){j=h;break b;}g=g+1|0;if(Hr(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Co(a,c,c+g|0);if(d)f=c;else{e=a.J.data;f=c+1|0;e[c]=45;}while(true){if(AEN(j,AAq))break a;e=a.J.data;c=f+1|0;e[f]=Gs(X0((KD(b,j))),10);b=WP(b,j);j=KD(j,BI(10));f=c;}}}return a;}
function Wt(a,b){B0(a,b);return a;}
function GG(a,b){Lc(a,a.F,!b?C(14):C(15));return a;}
function ABa(a,b,c){var d,e,f,g,h,i;d=BF(b,c);if(d<=0){e=a.F;if(b<=e){if(d){f=e-c|0;a.F=e-(c-b|0)|0;g=0;while(g<f){h=a.J.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Go;W(i);J(i);}
function T$(a,b){var c,d,e,f;if(b>=0){c=a.F;if(b<c){c=c-1|0;a.F=c;while(b<c){d=a.J.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Go;W(f);J(f);}
function AHc(a,b,c,d,e){LU(a,b,c,d,e);return a;}
function AEG(a,b,c,d){Ve(a,b,c,d);return a;}
function W8(a){return a.F;}
function GM(a){return S(a);}
function AHh(a,b){IH(a,b);}
function AHK(a,b,c){Vt(a,b,c);return a;}
function Lc(a,b,c){var d,e,f;if(b>=0&&b<=a.F){a:{if(c===null)c=C(13);else if(DT(c))break a;IH(a,a.F+H(c)|0);d=a.F-1|0;while(d>=b){a.J.data[d+H(c)|0]=a.J.data[d];d=d+(-1)|0;}a.F=a.F+H(c)|0;d=0;while(d<H(c)){e=a.J.data;f=b+1|0;e[b]=I(c,d);d=d+1|0;b=f;}}return a;}c=new Go;W(c);J(c);}
var E$=F(Gu);
var ZK=F(E$);
function AQt(a){var b=new ZK();ADL(b,a);return b;}
function ADL(a,b){Br(a,b);}
var Yl=F(E$);
function AQu(a){var b=new Yl();AD0(b,a);return b;}
function AD0(a,b){Br(a,b);}
var RY=F(0);
var C3=F(0);
function CZ(b,c){if(b!==null)b.eG();return c;}
var NO=F(0);
function HG(){var a=this;B.call(a);a.jf=0;a.k3=0;a.kb=0;}
var AQv=0;function K4(a){AQv=AQv-1|0;}
function JA(a,b,c){return Gc(a,b)+c|0;}
function Qm(){var a=this;HG.call(a);a.hb=null;a.c5=null;a.l8=null;}
function Fh(a){var b,c,d;b=a.c5;c=a.k3;d=a.kb;b.clearRect(0.0,0.0,c,d);}
function QR(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.c5;d="center";c.textAlign=d;break a;case 2:c=a.c5;d="right";c.textAlign=d;break a;default:break a;}d=a.c5;c="left";d.textAlign=c;}}
function CF(a,b){L3(a,b.mE);}
function L3(a,b){var c;if(a.l8!==b){c=a.c5;a.l8=b;c.font=b;}}
function Ej(a,b,c,d){var e,f,g;e=a.c5;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Gc(a,b){var c;c=$rt_ustr(b);return a.c5.measureText(c).width;}
function ADd(){return {alpha:false};}
var WM=F();
var WY=F();
var BG=F(0);
function I6(b){return b;}
var BQ=F(0);
var O7=F();
function AG4(a,b){var c,d,e,f,g,h,i;c=new Mn;d=new Mo;e=$rt_globals.URL.createObjectURL(b);f=new $rt_globals.Array();g=0;while(g<3){h=new $rt_globals.Worker(e);i=new MI;i.oL=h;i.oM=f;i.oN=3;i.oO=c;i.oH=d;i=Bi(i,"f");h.onmessage=i;g=g+1|0;}}
var O9=F();
function AHl(a,b){KZ(b);}
var J9=F();
var AQw=null;var AQx=null;function IP(){if(AQw===null)AQw=AIu(AQy,0);return AQw;}
function D2(){if(AQx===null)AQx=AIu(AQz,0);return AQx;}
function AOI(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Kd(b)&&(e+f|0)<=Kd(d)){a:{b:{if(b!==d){g=Hi(Bw(b));h=Hi(Bw(d));if(g!==null&&h!==null){if(g===h)break b;if(!G2(g)&&!G2(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fo;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ZG(n.constructor,o)?1:0)){Jt(b,c,d,e,j);b=new HM;W(b);J(b);}j=j+1|0;k=m;}Jt(b,c,d,e,f);return;}if(!G2(g))break a;if(G2(h))break b;else break a;}b=new HM;W(b);J(b);}}Jt(b,c,d,
e,f);return;}b=new HM;W(b);J(b);}b=new BU;W(b);J(b);}d=new FU;Br(d,C(16));J(d);}
function C7(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Kd(b)&&(e+f|0)<=Kd(d)){Jt(b,c,d,e,f);return;}b=new BU;W(b);J(b);}
function Jt(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function D1(){return Long_fromNumber(new Date().getTime());}
var AAs=F();
var JP=F(0);
function Du(){var a=this;B.call(a);a.jt=null;a.jE=null;}
var DF=F(0);
function Jp(){var a=this;Du.call(a);a.cp=0;a.bP=null;a.cn=0;a.uz=0.0;a.j4=0;}
function FR(){var a=new Jp();Oy(a);return a;}
function AFZ(a,b){return O(FV,b);}
function Oy(a){var b;b=ABe(16);a.cp=0;a.bP=O(FV,b);a.uz=0.75;SX(a);}
function ABe(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Eg(a){var b;if(a.cp>0){a.cp=0;b=a.bP;Xq(b,0,b.data.length,null);a.cn=a.cn+1|0;}}
function SX(a){a.j4=a.bP.data.length*a.uz|0;}
function ID(a,b){return RG(a,b)===null?0:1;}
function S_(a){var b;b=new SY;b.p$=a;return b;}
function B7(a,b){var c;c=RG(a,b);if(c===null)return null;return c.cv;}
function RG(a,b){var c,d;if(b===null)c=QV(a);else{d=b.k9();c=Pd(a,b,d&(a.bP.data.length-1|0),d);}return c;}
function Pd(a,b,c,d){var e;e=a.bP.data[c];while(e!==null&&!(e.ih==d&&WT(b,e.cg))){e=e.cl;}return e;}
function QV(a){var b;b=a.bP.data[0];while(b!==null&&b.cg!==null){b=b.cl;}return b;}
function IV(a){var b;if(a.jt===null){b=new N4;b.ga=a;a.jt=b;}return a.jt;}
function Dn(a,b,c){var d,e,f,g;if(b===null){d=QV(a);if(d===null){a.cn=a.cn+1|0;d=SN(a,null,0,0);e=a.cp+1|0;a.cp=e;if(e>a.j4)S5(a);}}else{e=b.k9();f=e&(a.bP.data.length-1|0);d=Pd(a,b,f,e);if(d===null){a.cn=a.cn+1|0;d=SN(a,b,f,e);e=a.cp+1|0;a.cp=e;if(e>a.j4)S5(a);}}g=d.cv;d.cv=c;return g;}
function SN(a,b,c,d){var e,f;e=new FV;V1(e,b,null);e.ih=d;f=a.bP.data;e.cl=f[c];f[c]=e;return e;}
function Yj(a,b){var c,d,e,f,g,h,i,j;c=ABe(!b?1:b<<1);d=O(FV,c);e=d.data;f=0;b=c-1|0;while(true){g=a.bP.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.ih&b;j=h.cl;h.cl=e[i];e[i]=h;h=j;}f=f+1|0;}a.bP=d;SX(a);}
function S5(a){Yj(a,a.bP.data.length);}
function WT(b,c){return b!==c&&!b.bq(c)?0:1;}
var X7=F();
function XA(b,c){var d,e,f;d=(C2()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(C2()).getElementById($rt_ustr(b)).appendChild(d);}
function WX(){return (C2()).createElement("canvas");}
function KZ(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AJk(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ABJ=F();
var Hw=F(0);
var Tr=F();
function AIO(a,b){return b.blob();}
var Gn=F(0);
var RC=F();
var BU=F(Bq);
var Zt=F();
function Kd(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AQA());}return b.data.length;}
function Z5(b,c){if(b===null){b=new FU;W(b);J(b);}if(b===E($rt_voidcls())){b=new BJ;W(b);J(b);}if(c>=0)return AMr(b.fo,c);b=new Wd;W(b);J(b);}
function AMr(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var FU=F(Bq);
var HM=F(Bq);
function CM(){B.call(this);this.jq=0;}
var AQB=null;var AQC=null;var AQD=null;var AQE=null;var AQF=null;var AQG=null;var AQH=null;var AQI=null;var AQJ=null;var AQK=null;function AM6(a){var b=new CM();Yd(b,a);return b;}
function Yd(a,b){a.jq=b;}
function MJ(b){var c,d;c=AQG.data;if(b>=c.length)return AM6(b);d=c[b];if(d===null){d=AM6(b);AQG.data[b]=d;}return d;}
function U4(b){var c,d;c=new Bv;d=B2(1);d.data[0]=b;Ij(c,d);return c;}
function KV(b){return b>=65536&&b<=1114111?1:0;}
function Cm(b){return (b&64512)!=55296?0:1;}
function CI(b){return (b&64512)!=56320?0:1;}
function Vh(b){return !Cm(b)&&!CI(b)?0:1;}
function GC(b,c){return Cm(b)&&CI(c)?1:0;}
function D4(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function JB(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function KG(b){return (56320|b&1023)&65535;}
function Ey(b){return FT(b)&65535;}
function FT(b){if(AQE===null){if(AQH===null)AQH=ZY();AQE=Yt((AQH.value!==null?$rt_str(AQH.value):null));}return Rp(AQE,b);}
function D6(b){return FQ(b)&65535;}
function FQ(b){if(AQD===null){if(AQI===null)AQI=AAI();AQD=Yt((AQI.value!==null?$rt_str(AQI.value):null));}return Rp(AQD,b);}
function Rp(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BF(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function SU(b,c){if(c>=2&&c<=36){b=NT(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function NT(b){var c,d,e,f,g,h,i,j,k,l;if(AQC===null){if(AQJ===null)AQJ=YB();c=(AQJ.value!==null?$rt_str(AQJ.value):null);d=AKJ(ES(c));e=IO(d);f=Bt(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+L1(d)|0;j=j+L1(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AQC=f;}g=AQC.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BF(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Gs(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function FK(b){var c;if(b<65536){c=B2(1);c.data[0]=b&65535;return c;}return AOq([JB(b),KG(b)]);}
function Ce(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Vh(b&65535))return 19;if(AQF===null){if(AQK===null)AQK=ABz();d=(AQK.value!==null?$rt_str(AQK.value):null);e=O(Md,16384);f=e.data;g=Eb(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<H(d)){m=Js(I(d,l));if(m==64){l=l+1|0;m=Js(I(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|V(c,Js(I(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Js(I(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AFm(k,k+i|0,KP(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AFm(k,k+i|0,KP(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AQF=CX(e,j);}e=AQF.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.qB)o=p+1|0;else{c=d.oI;if(b>=c)return d.o1.data[b-c|0];c=p-1|0;}}return 0;}
function IA(b){a:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function FF(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ce(b)!=16?0:1;}
function Ok(b){switch(Ce(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function P1(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Ok(b);}return 1;}
function WL(){AQB=E($rt_charcls());AQG=O(CM,128);}
function ZY(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AAI(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function YB(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ABz(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Lq=F(0);
var Ro=F(0);
var DV=F(0);
var WR=F();
function Wv(b){return (C2()).getElementById($rt_ustr(b));}
function C2(){return $rt_globals.window.document;}
function AIK(a){return a.C2();}
function ALj(a,b){return a.Fv($rt_str(b));}
function AK6(a,b){a.Bs($rt_str(b));}
function AEk(a,b){return a.Af($rt_str(b));}
function ACa(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AEA(a){return a.Fy();}
function ALd(a,b,c){return a.D4($rt_str(b),$rt_str(c));}
function AG0(a,b,c,d){a.v$($rt_str(b),Es(c,"handleEvent"),d?1:0);}
function AC3(a){return a.B5();}
function AJH(a){return !!a.F5();}
function ALW(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AIg(a){return a.BR();}
function AGz(a,b){a.DS($rt_str(b));}
function AIM(a){return !!a.A8();}
function ANo(a){return a.FI();}
function AHA(a){return $rt_ustr(a.xZ());}
function ACV(a,b){return a.Ck(b?1:0);}
function AMZ(a){return a.F4();}
function AGw(a,b,c){return a.Gz($rt_str(b),$rt_str(c));}
function AH$(a,b,c){return a.A6(b,c?1:0);}
function AMu(a,b,c){return !!a.E4($rt_str(b),$rt_str(c));}
function ACd(a){return a.DH();}
function AGi(a){return $rt_ustr(a.Hh());}
function AEL(a,b){return !!a.ww(b);}
function AFC(a,b){return a.Ia($rt_str(b));}
function AGM(a,b,c){return a.CZ($rt_str(b),$rt_str(c));}
function AHE(a){return a.yV();}
function AC6(a,b){return a.FE($rt_str(b));}
function AFB(a){return $rt_ustr(a.yf());}
function AJ4(a){a.A1();}
function ABY(a,b){return a.GE($rt_str(b));}
function ALN(a,b){return a.BD($rt_str(b));}
function ADu(a,b){return a.A0($rt_str(b));}
function ALP(a){return $rt_ustr(a.za());}
function ADE(a,b,c){return a.C7(b,c);}
function AJT(a,b){return a.xY(b);}
function AKy(a){return a.EH();}
function AJd(a,b,c){a.vL($rt_str(b),Es(c,"handleEvent"));}
function AIW(a,b,c){return a.zb(b,c);}
function ALJ(a){return !!a.E0();}
function AM4(a,b){return a.CT($rt_str(b));}
function AIZ(a,b,c,d){a.u8($rt_str(b),Es(c,"handleEvent"),d?1:0);}
function AEC(a){return a.EM();}
function ADY(a,b,c){return a.Ci($rt_str(b),$rt_str(c));}
function ACD(a){return $rt_ustr(a.zx());}
function AMU(a){return a.yE();}
function AJc(a){return a.y0();}
function ACB(a){return a.E5();}
function AJe(a,b,c){a.ws($rt_str(b),Es(c,"handleEvent"));}
function AEs(a,b){return a.G4(b);}
function AFT(a,b){a.yk($rt_str(b));}
function AKF(a){return $rt_ustr(a.x5());}
var Oa=F(0);
var Qg=F(0);
var P6=F(0);
var RV=F(0);
var Vg=F(0);
var SW=F(0);
var XC=F();
function AJh(a,b,c){a.ws($rt_str(b),Es(c,"handleEvent"));}
function AHe(a,b,c){a.vL($rt_str(b),Es(c,"handleEvent"));}
function AGk(a,b,c,d){a.u8($rt_str(b),Es(c,"handleEvent"),d?1:0);}
function ADa(a,b){return !!a.ww(b);}
function AEQ(a,b,c,d){a.v$($rt_str(b),Es(c,"handleEvent"),d?1:0);}
var BJ=F(Bq);
var Go=F(BU);
var Gz=F(0);
function FL(){var a=this;B.call(a);a.cg=null;a.cv=null;}
function AQL(a,b){var c=new FL();V1(c,a,b);return c;}
function V1(a,b,c){a.cg=b;a.cv=c;}
function AEq(a,b){var c,d;if(a===b)return 1;if(!HI(b,Gz))return 0;a:{b:{c:{d:{c=b;b=a.cg;if(b!==null){if(!b.bq(c.cg))break c;else break d;}if(c.cg!==null)break c;}b=a.cv;if(b!==null){if(!b.bq(c.cv))break c;else break b;}if(c.cv===null)break b;}d=0;break a;}d=1;}return d;}
function FV(){var a=this;FL.call(a);a.ih=0;a.cl=null;}
var Mn=F();
function AFv(a,b){var c,d,e,f,g,h,i,j;c=$rt_globals.fetch("fileList.txt");d=new PR;c=c.then(Bi(d,"f"));d=new PQ;e=new PS;c.then(Bi(d,"f"),Bi(e,"f"));if((C2()).getElementById("codeEdit")===null)CU(D2(),C(17));else{f=new Rt;g=new TD;g.ot=f;f.qZ=g;g=new TB;g.ui=f;f.lI=g;d=new TC;d.qS=f;f.tb=new $rt_globals.ResizeObserver(Bi(d,"f"));g=new TA;g.nQ=f;f.mt=g;f.hP=1;g=new Q7;d=new SP;AA$(d);g.iW=d;d=new NY;e=null;TQ(d);d.w8=e;d.iL=AQM;g.o7=d;BV(d);e=new Rb;e.re=d;g.t_=e;g.lj=b;h=b.length;i=0;while(i<h){d=b[i];j=new Rc;j.qa
=g;j.p_=i;e=Bi(j,"f");d.onmessage=e;d=b[i];e=YP();d.postMessage(e);i=i+1|0;}g.gl=0;g.j5=Bt(h);g.jC=Bt(h);f.lr=g;f.ml=(C2()).getElementById("codeEdit");g=WX();b=0;g.tabIndex=b;e=g.style;e.setProperty("width","100%");e.setProperty("height","100%");e.setProperty("outline","none");f.dl=g;f.ml.appendChild(g);b=f.dl;g=AJk(!!0,!!0,!!1,!!1);d=b.getContext("webgl2",g);if(d===null)XA(C(2),C(18));else{f.kU=AOr(f.dl,f.lI);b=new Tu;c=f.lI;ZH(b,d,new SD,1);b.w6=new SC;b.wo=c;f.fB=b;AKf(f.tb,f.dl,ACg());g=$rt_globals.window;c
=f.mt;g.addEventListener("resize",Bi(c,"handleEvent"));c=new Lr;b=f.fB;g=f.kU.b5;c.iZ=b;c.ci=g;c.kN=f;b=APf(c);AQd=b;f.eW=b;RL(f);}AQe=f;Te(f);}}
var Mo=F();
function AIa(a,b){KZ(b);}
var YX=F();
var Y3=F();
var AAK=F();
function Eu(b){return $rt_str(b);}
var TK=F(0);
var YU=F();
function AF6(a,b){return a.zY(b);}
function AHV(a){return a.E2();}
function MI(){var a=this;B.call(a);a.oL=null;a.oM=null;a.oN=0;a.oO=null;a.oH=null;}
function AJS(a,b){var c,d,e,f,g;c=a.oL;d=a.oM;e=a.oN;f=a.oO;g=a.oH;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var Pt=F(0);
var ND=F(0);
function Rt(){var a=this;B.call(a);a.qZ=null;a.lI=null;a.ml=null;a.dl=null;a.tb=null;a.mt=null;a.kU=null;a.fB=null;a.hP=0;a.v4=0;a.qv=null;a.eW=null;a.lr=null;}
function Te(a){a.dl.focus();}
function RL(a){a.v4=$rt_globals.requestAnimationFrame(Bi(a.qZ,"onAnimationFrame"));}
function IG(a){a.hP=1;}
function RJ(a,b,c){var d,e;a.kU.di=Cd(b,c);d=a.dl;e=b;d.width=e;d=a.dl;e=c;d.height=e;d=a.fB;Bn(d.c_,b,c);e=d.ba;d=d.c_;b=d.b;c=d.a;e.viewport(0,0,b,c);Lu(a.eW,a.fB.c_,Ju(a));Jb(a.eW);}
function Mw(a){return $rt_globals.performance.now()/1000.0;}
function Ju(a){return $rt_globals.window.devicePixelRatio;}
function Um(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ABh(b,0);else{c=new Vr;d=$rt_globals.window.showOpenFilePicker();e=new Vq;e.pr=b;e.pq=c;d.then(Bi(e,"f"),Bi(c,"f"));}}
function Ep(a,b,c,d){var e,f,g,h;e=a.lr;f=e.gl;if(f>0){g=e.j5.data;f=f-1|0;e.gl=f;J$(e,b,c,d,g[f]);}else{h=e.iW;e=new UO;e.rT=b;e.sD=c;e.ry=d;b=new Su;b.nu=e;c=h.iV;b.sr=c;if(c===null)h.jV=b;else c.rA=b;h.iV=b;h.bH=h.bH+1|0;h.hm=h.hm+1|0;}}
function UH(a,b,c,d,e){var f,g;f=a.lr;if(c>=f.lj.length)c=0;g=f.jC.data;g[c]=g[c]+1|0;J$(f,b,d,e,c);}
function ABF(b){var c;c=new Vf;c.nc=b;return c;}
var Ei=F(0);
var YI=F();
var Bh=F(0);
var YJ=F();
var XV=F();
function YP(){return "ping";}
function ABx(b){return b===YP()?1:0;}
var PR=F();
function ACt(a,b){return b.text();}
var PQ=F();
function ANt(a,b){var c,d,e,f,g,h,i,j;c=Wv(C(19));d=(ZO(b)).hD.data;e=d.length;f=0;while(f<e){g=d[f];if(!DT(g)){h=(C2()).createElement("button");i="fileButton";h.className=i;b=$rt_ustr(g);h.innerText=b;c.appendChild(h);j=new QL;j.pc=g;h.addEventListener("click",Bi(j,"handleEvent"));}f=f+1|0;}}
var PS=F();
function AMv(a,b){KZ(b);}
var Qa=F(0);
function TD(){B.call(this);this.ot=null;}
function AGv(a,b){var c,d,e,f,g,h;c=b;b=a.ot;d=b.eW;c=c/1000.0;d=d.cw;e=d.d.f;if(Sj(e)&&c-e.ro>0.03125?1:0){f=d.pg;g=d.d.f.b2;if(f!=g){d.pg=g;Qf(d);}}RF(d);g=So((d.bk+d.xz|0)-d.vh|0,IU(d));f=d.bk==g?0:1;if(f)E8(d,g);a:{e=d.cy;g=e.fv;if(c>e.gu)while(true){h=e.gu+e.jl;e.gu=h;e.fv=e.fv?0:1;if(c>h)continue;else break a;}}g=e.fv==g?0:1;g=!g&&!f&&!d.ut?0:1;if(!(!g&&!b.hP)){d=b.fB.c_;if(V(d.b,d.a)){b.hP=0;Jb(b.eW);}}RL(b);}
function TB(){B.call(this);this.ui=null;}
function CV(a){IG(a.ui);}
var Pb=F(0);
function TC(){B.call(this);this.qS=null;}
function AEW(a,b,c){var d,e,f,g;c=a.qS;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dl){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Ju(c);RJ(c,Gx(f.width*g),Gx(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];RJ(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AAY=F();
function ACg(){return {box:'device-pixel-content-box'};}
function AKf(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var B$=F(0);
function TA(){B.call(this);this.nQ=null;}
function AJ2(a,b){b=a.nQ;Lu(b.eW,b.fB.c_,Ju(b));Jb(b.eW);}
function Q7(){var a=this;B.call(a);a.iW=null;a.lj=null;a.o7=null;a.j5=null;a.jC=null;a.mS=0;a.gl=0;a.t_=null;}
function J$(a,b,c,d,e){var f,g,h,i,j,k;d=d.data;f=a.mS+1|0;a.mS=f;g=a.o7;h=Ct(f);g.g_=KX(g,g.g_,h);h=S2(g,h);Ls(h,b);Ls(h,b);g.iQ=g.iQ+1|0;b=a.lj[e];i=d.length;g=new $rt_globals.Array(i+2|0);h=f;0;g[0]=h;c=$rt_ustr(c);1;g[1]=c;h=new $rt_globals.Array();j=0;while(j<i){c=d[j];if(c instanceof Bv)k=$rt_ustr(c);else if(HI(c,$rt_arraycls($rt_bytecls())))k=c.data.buffer;else if(HI(c,$rt_arraycls($rt_charcls())))k=c.data.buffer;else if(HI(c,$rt_arraycls($rt_intcls())))k=c.data.buffer;else{if(!(c instanceof JR)){b=new BJ;c
=Bw(c);if(c.jy===null)c.jy=$rt_str(c.fo.$meta.name);h=c.jy;c=new R;T(c);K(K(c,C(20)),h);Br(b,S(c));J(b);}c=c;k=c.hn;if(k===null)k=c.hY;}f=j+2|0;f;g[f]=k;if(k instanceof $rt_globals.ArrayBuffer?1:0)h.push(k);j=j+1|0;}b.postMessage(g,h);}
var K5=F(0);
var RO=F(0);
var SQ=F(0);
var FH=F();
function Iv(){FH.call(this);this.uI=null;}
function Yi(){var a=this;Iv.call(a);a.wH=0;a.j6=0;a.hZ=null;a.js=null;a.sc=null;}
function AIu(a,b){var c=new Yi();ALZ(c,a,b);return c;}
function ALZ(a,b,c){a.uI=b;b=new R;T(b);a.hZ=b;a.js=B2(32);a.wH=c;AFr();a.sc=AQN;}
function RT(a,b,c,d){var e,$$je;e=a.uI;if(e===null)a.j6=1;if(!(a.j6?0:1))return;a:{try{e.jk(b,c,d);break a;}catch($$e){$$je=ET($$e);if($$je instanceof Sy){}else{throw $$e;}}a.j6=1;}}
function M5(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$$je;e=b.data;d=d-c|0;f=new P7;g=e.length;d=c+d|0;T0(f,g);f.ck=c;f.d0=d;f.s8=0;f.xH=0;f.qb=b;e=Eb(Ba(16,Be(g,1024)));d=e.data.length;h=new UX;i=0+d|0;T0(h,d);AGL();h.wd=AQO;h.pD=0;h.rq=e;h.ck=0;h.d0=i;h.wg=0;h.mk=0;j=a.sc;k=new Of;b=Eb(1);l=b.data;l[0]=63;AMg();m=AQP;k.k2=m;k.kc=m;c=l.length;if(c&&c>=k.lP){k.u7=j;k.pj=b.f1();k.wB=2.0;k.lP=4.0;k.oC=B2(512);k.nn=Eb(512);j=AQQ;if(j===null){m=new BJ;Br(m,C(21));J(m);}k.k2=j;k.kc=j;while(k.hV!=3){k.hV=2;a:{while(true)
{try{j=W2(k,f,h);}catch($$e){$$je=ET($$e);if($$je instanceof Bq){j=$$je;m=new Sb;m.kY=1;m.lJ=1;m.pY=j;J(m);}else{throw $$e;}}if(j.g1?0:1){c=Ez(f);if(c<=0)break a;j=J4(c);}else if(KK(j))break;m=!UV(j)?k.k2:k.kc;b:{if(m!==AQQ){if(m===AQR)break b;else break a;}c=Ez(h);b=k.pj;d=b.data.length;if(c<d){j=AQS;break a;}UY(h,b,0,d);}n=f.ck;c=j.g1!=2?0:1;if(!(!c&&!UV(j)?0:1)){j=new DR;W(j);J(j);}Rd(f,n+j.nr|0);}}n=KK(j);RT(a,e,0,h.ck);M3(h);if(!n){while(true){d=k.hV;if(d!=2&&d!=4){j=new Dg;W(j);J(j);}j=AQT;if(j===j)k.hV
=3;n=KK(j);RT(a,e,0,h.ck);M3(h);if(!n)break;}return;}}j=new Dg;W(j);J(j);}m=new BJ;Br(m,C(22));J(m);}
function CU(a,b){var c,d,e,f,g,h,i,j;B0(DJ(a.hZ,b),10);b=a.hZ;c=b.F;d=a.js;if(c>d.data.length)d=B2(c);e=0;f=0;if(e>c){b=new BU;Br(b,C(23));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.J.data;j=e+1|0;g[f]=i[e];f=h;e=j;}M5(a,d,0,c);a.hZ.F=0;}
function Fz(){FH.call(this);this.wp=null;}
function V8(a){a.wp=Eb(1);}
var Jy=F(Fz);
var AQz=null;function AFc(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function ABK(){var b;b=new Jy;V8(b);AQz=b;}
var T_=F(0);
function ABQ(a,b){var c;c=a.bQ();while(c.b$()){b.m(c.bJ());}}
var Fs=F(0);
function S$(a){var b,c;b=new Q4;c=new O4;c.oG=a;b.si=c;return b;}
function AG2(a,b){var c,d;c=a.bQ();d=0;while(c.b$()){if(b.cY(c.bJ())){c.j9();d=1;}}return d;}
var En=F();
function AA$(a){}
function DO(a){return a.cq()?0:1;}
function GY(a,b){var c,d,e,f,g,h;c=b.data;d=a.j;e=c.length;if(e<d)b=Z5(Hi(Bw(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BM(a);while(BN(f)){g=b.data;h=e+1|0;g[e]=BR(f);e=h;}return b;}
function AKX(a,b){var c;c=a.bQ();while(c.b$()){if(BB(c.bJ(),b)){c.j9();return 1;}}return 0;}
function FY(a,b){var c,d;c=0;d=b.bQ();while(d.b$()){if(!a.q8(d.bJ()))continue;c=1;}return c;}
var Jx=F(0);
var If=F(0);
function D8(){En.call(this);this.bH=0;}
function AKj(a,b){a.lH(a.cq(),b);return 1;}
function BM(a){var b;b=new Ms;b.f_=a;b.lq=a.bH;b.hX=a.cq();b.fD=(-1);return b;}
function AJB(a,b,c){var d,e;if(b>=0&&b<=a.cq()){if(c.dB())return 0;d=c.bQ();while(d.b$()){e=b+1|0;a.lH(b,d.bJ());b=e;}return 1;}c=new BJ;W(c);J(c);}
function ALG(a,b,c){c=new DR;W(c);J(c);}
function I_(a,b){var c,d;c=a.cq();d=0;while(true){if(d>=c)return (-1);if(BB(b,a.kF(d)))break;d=d+1|0;}return d;}
function AIw(a,b){var c,d;if(!HI(b,If))return 0;c=b;if(a.j!=c.j)return 0;d=0;while(d<c.j){if(!BB(Bo(a,d),Bo(c,d)))return 0;d=d+1|0;}return 1;}
var KS=F(D8);
var Lx=F(0);
var VD=F(0);
function SP(){var a=this;KS.call(a);a.jV=null;a.iV=null;a.hm=0;}
var VA=F(0);
var LZ=F(0);
function NY(){var a=this;Du.call(a);a.g_=null;a.iL=null;a.w8=null;a.iQ=0;}
function AA6(a,b){var c;c=S2(a,b);if(c===null)return null;a.g_=I3(a,a.g_,b);a.iQ=a.iQ+1|0;return c.hS;}
function S2(a,b){var c,d;c=a.g_;while(true){if(c===null)return null;d=IB(a.iL,b,c.id);if(!d)break;c=d>=0?c.bN:c.bw;}return c;}
function KX(a,b,c){var d,e;if(b===null){b=new Ix;d=null;b.id=c;b.hS=d;b.e1=1;b.fa=1;return b;}e=IB(a.iL,c,b.id);if(!e)return b;if(e>=0)b.bN=KX(a,b.bN,c);else b.bw=KX(a,b.bw,c);DW(b);return IN(b);}
function I3(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=IB(a.iL,c,b.id);if(d<0)b.bw=I3(a,b.bw,c);else if(d>0)b.bN=I3(a,b.bN,c);else{e=b.bN;if(e===null)return b.bw;f=b.bw;g=O(Ix,e.e1).data;h=0;while(true){b=e.bw;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bN;while(h>0){h=h+(-1)|0;j=g[h];j.bw=b;DW(j);b=IN(j);}e.bN=b;e.bw=f;DW(e);b=e;}DW(b);return IN(b);}
var AAT=F();
function BB(b,c){if(b===c)return 1;return b!==null?b.bq(c):c!==null?0:1;}
function BV(b){if(b!==null)return b;b=new FU;Br(b,C(5));J(b);}
function Rb(){B.call(this);this.re=null;}
function Rc(){var a=this;B.call(a);a.qa=null;a.p_=0;}
function ACc(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.qa;d=a.p_;ABx(b.data);e=c.jC.data;f=e[d];if(f>0)e[d]=f-1|0;else{g=c.iW;h=g.jV;if(h===null)i=null;else{i=h.rA;g.jV=i;if(i!==null)i.sr=null;else g.iV=null;g.hm=g.hm-1|0;g.bH=g.bH+1|0;i=h.nu;}if(i!==null)J$(c,i.rT,i.sD,i.ry,d);else{e=c.j5.data;j=c.gl;c.gl=j+1|0;e[j]=d;}}c=c.t_;b=b.data;if(!ABx(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BJ;W(b);J(b);}if(b.length<1){b=new BJ;Z2(b);J(b);}g=Ct(b[0]);h=AA6(c.re,g);e=O(B,b.length-1|0);k=e.data;f=0;j=k.length;while
(f<j){l=f+1|0;g=b[l];k[f]=(typeof g==='string'?1:0)?Eu(I6(g)):(g instanceof $rt_globals.ArrayBuffer?1:0)?AOf(I6(g)):(g instanceof $rt_globals.File?1:0)?Zz(null,I6(g)):!(g instanceof $rt_globals.FileSystemFileHandle?1:0)?null:Zz(I6(g),null);f=l;}h.m(e);}}
function XP(){var a=this;B.call(a);a.b5=null;a.gv=null;a.wk=null;a.di=null;}
function AOr(a,b){var c=new XP();ALB(c,a,b);return c;}
function ALB(a,b,c){var d,e,f,g;a.di=null;a.gv=b;d=new OG;d.fx=Cq(O(Er,0));d.uy=Cq(O(Er,0));d.eO=Cq(O(Ft,0));d.ik=Cq(O(Hh,0));d.jH=Cq(O(Lh,0));d.lt=Cq(O(Jo,0));d.jY=Cq(O(IQ,0));d.lA=Cq(O(Bh,0));d.jo=Cq(O(Bh,0));d.cL=c;a.b5=d;e=$rt_globals.window;f=O(C3,14);g=f.data;d=new Uu;d.mZ=a;g[0]=Cz(a,b,C(24),d);d=new Uv;d.rv=a;g[1]=Cz(a,b,C(25),d);d=new Uw;d.oh=a;g[2]=Cz(a,b,C(26),d);d=new Ux;d.ue=a;g[3]=Cz(a,b,C(27),d);d=new Uy;d.qL=a;g[4]=Cz(a,b,C(28),d);d=new Uz;d.np=a;g[5]=Cz(a,b,C(29),d);d=new UA;d.ur=a;g[6]=Cz(a,
b,C(30),d);d=new UB;d.qU=a;g[7]=Cz(a,b,C(31),d);d=new UC;d.nE=a;g[8]=Cz(a,b,C(32),d);d=new UD;d.ts=a;g[9]=Cz(a,b,C(33),d);d=new VX;d.sU=a;g[10]=Cz(a,b,C(34),d);d=new VY;d.rM=a;e.addEventListener("paste",Bi(d,"handleEvent"),!!1);g[11]=UU(a,e,C(35),d);d=new VZ;d.l5=a;g[12]=Cz(a,e,C(36),d);d=new V0;d.tQ=a;g[13]=Cz(a,e,C(37),d);c=new Pg;c.vF=f;a.wk=c;e=new Vy;e.o9=b;b.onpointerdown=Bi(e,"f");e=new Vz;e.nV=b;b.onpointerup=Bi(e,"f");}
function LW(){return (C2()).activeElement;}
function Cz(a,b,c,d){b.addEventListener($rt_ustr(c),Bi(d,"handleEvent"));return UU(a,b,c,d);}
function UU(a,b,c,d){var e;e=new O8;e.vd=b;e.vf=c;e.ve=d;return e;}
function Sa(a,b){var c;c=new S4;c.ud=b;return c;}
function D_(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gv.getBoundingClientRect();e=Cd(Gx((b.clientX-d.left)*c),Gx((b.clientY-d.top)*c));f=new Bp;g=a.di;f.b=g.b;f.a=g.a;d=new Lo;SA(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.u=e;d.uS=f;return d;}
function V3(a,b,c){var d,e,f,g;d=new NS;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;SA(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.jd=0;d.dN=e;d.bT=f;d.sh=c;d.wq=g;return d;}
function Dl(a,b){b.stopPropagation();b.preventDefault();}
function JY(){var a=this;B.call(a);a.qs=null;a.dd=null;a.ba=null;a.kD=0;a.sp=null;a.vK=0;a.wL=0;a.iS=null;a.xl=null;a.w5=null;a.wV=null;a.eS=null;a.fc=null;a.wW=null;a.uV=null;a.g5=null;a.xc=null;a.ow=null;a.c_=null;a.t0=null;a.kM=0;a.i9=0;a.lo=0;a.k_=0;a.hE=0;a.lk=null;}
function ZH(a,b,c,d){var e,f,g,h,i,j;a.c_=new Bp;a.kM=0;a.lk=new UF;a.qs=c;a.kD=d;e=$rt_str(b.getParameter(7938));f=new R;T(f);K(K(f,C(38)),e);$rt_globals.console.info($rt_ustr(S(f)));a.ba=b;a.dd=Mq(c,4,4,1);g=AB5(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=B2(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;c=new O$;GJ();f=AQU;c.dX=b;c.fT=f;c.q6=h.length/f.jT|0;c.tT=j.length;f
=b.createBuffer();c.mp=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);c.uf=null;f=b.createBuffer();c.tA=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}f=null;b.bindBuffer(34962,f);f=null;b.bindBuffer(34963,f);a.ow=c;a.wL=Jr(e,C(39));c=new O_;c.dz=b;a.sp=c;d=b.getParameter(3379);a.vK=d;c=new R;T(c);Bj(K(c,C(40)),d);$rt_globals.console.info($rt_ustr(S(c)));g=O(CB,9);i=g.data;c=new Ua;F$(c,b,C(41),C(42),AQU);e=c.bo;c.tk=b.getUniformLocation(e,"uColor");a.iS=c;i[0]=c;c=
ANQ(b);a.xl=c;i[1]=c;c=AOR(b);a.w5=c;i[2]=c;c=APa(b);a.wV=c;i[3]=c;c=AOn(b);a.eS=c;i[4]=c;c=APs(b);a.fc=c;i[5]=c;c=APj(b);a.wW=c;i[6]=c;c=AO7(b);a.uV=c;i[7]=c;c=AO8(b);a.g5=c;i[8]=c;a.xc=g;ABg(b,C(43));}
function EY(a,b,c,d){return Mq(a.qs,b,c,d);}
function DP(a,b){var c;if(b==a.i9)return b;if(!b)a.ba.disable(3042);else{a.ba.enable(3042);a.ba.blendFuncSeparate(770,771,1,1);}c=a.i9;a.i9=b;return c;}
function Qu(a,b,c){S6(a,b.b,b.a,c);}
function S6(a,b,c,d){var e,f;e=d.b;f=d.a;a.k_=1;a.hE=1;d=a.lk;d.qE=b;d.qG=c;d.qD=e;d.qC=f;SB(a);}
function Kw(a){a.k_=0;a.hE=0;SB(a);}
function SB(a){var b,c,d,e,f,g;b=a.lo;c=a.k_;if(b!=c){a.lo=c;if(!c)a.ba.disable(3089);else a.ba.enable(3089);}if(a.lo&&a.hE){a.hE=0;d=a.ba;e=a.lk;b=e.qE;c=a.c_.a-e.qG|0;f=e.qC;c=c-f|0;g=e.qD;d.scissor(b,c,g,f);}}
function Hj(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.ow;c=a.kM;d=b.fT.rI;e=b.dX;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dX;h=b.mp;e.bindBuffer(34962,h);i=b.fT.lO.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dX;m=k.gC;n=k.eK;o=b.fT.jT*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.eK|0;j=j+1|0;}a:{e=b.uf;if(e!==null){c=0;b.dX.bindBuffer(34962,e);i=b.fT.qr.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dX;j=e.gC;p=e.eK;m=e.oD;n=b.fT.o4;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.eK|0;g=g+1|0;}}}q=b.tA;if(q===null){c=b.q6;if(c>0)b.dX.drawArrays(4,0,c);}else{b.dX.bindBuffer(34963,q);k=b.dX;g=b.tT;k.drawElements(4,g,5123,0);}a.kM=d;}
function BC(a,b,c,d,e){Hp(a,a.iS);H4(a.iS,a.ba,b,c,d,a.c_);d=a.iS;Hq(a.ba,d.tk,e);Hj(a);}
function Eh(a,b,c,d,e,f,g,h,i){Hp(a,a.eS);H4(a.eS,a.ba,b,c,d,a.c_);Sv(a.eS,a.ba,f);LL(a.eS,a.ba,f,e);RP(a.eS,a.ba,g,h);d=a.eS;e=a.ba;d=d.om;e.uniform2f(d,i,0.0);Hj(a);}
function Ek(a,b,c,d,e,f,g,h){Hp(a,a.fc);H4(a.fc,a.ba,b,c,d,a.c_);Sv(a.fc,a.ba,f);LL(a.fc,a.ba,f,e);RP(a.fc,a.ba,g,h);Hj(a);}
function Gv(a){var b,c;b=new Iw;c=a.sp;b.eq=new Bp;b.d9=c;b.eA=c.dz.createTexture();AQV=AQV+1|0;return b;}
function Hp(a,b){var c,d;if(b!==a.t0){c=a.ba;d=b.bo;c.useProgram(d);a.t0=b;}}
function Tu(){var a=this;JY.call(a);a.wo=null;a.w6=null;}
function F7(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;a:{f=a.dd;switch(e){case 1:break;case 2:g='italic ';break a;default:g='';break a;}g='oblique ';}h=g+d+' '+c+'px '+$rt_ustr(b);L3(f,h);g=f.c5.measureText("W");i=g.fontBoundingBoxAscent;j=g.fontBoundingBoxDescent;k=g.width;l=Gc(f,C(44));m=Gc(f,C(45));g=new JS;h=h;g.ls=b;g.vq=c;n=c|0;if(n!==c){b=new R;T(b);f=K(b,C(46));Zw(f,f.F,c);$rt_globals.console.info($rt_ustr(S(b)));}g.oy=n;g.vy=d;g.v1=e;g.d2=i;g.dE=j;g.vm=l;g.lg=k;g.mE=h;g.qm=Dx(i);g.wY=Dx(g.dE);d=m*32.0|0;n
=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;b:{g.vu=d;switch(e){case 1:break;case 2:b=C(47);break b;default:b=C(48);break b;}b=C(49);}g.vb=b;return g;}
function KC(){B.call(this);this.pn=null;}
function Ik(){var a=this;B.call(a);a.uR=null;a.vN=null;}
function AAj(b){var c,d;if(DT(b))J(Yf(b));if(!AAl(I(b,0)))J(Yf(b));c=1;while(c<H(b)){a:{d=I(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AAl(d))break a;else J(Yf(b));}}c=c+1|0;}}
function AAl(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var K9=F(Ik);
var AQN=null;function AFr(){AFr=Bf(K9);AE5();}
function AE5(){var b,c,d,e,f;b=new K9;AFr();c=O(Bv,0);d=c.data;AAj(C(50));e=d.length;f=0;while(f<e){AAj(d[f]);f=f+1|0;}b.uR=C(50);b.vN=c.f1();AQN=b;}
function OG(){var a=this;B.call(a);a.fx=null;a.uy=null;a.eO=null;a.ik=null;a.jH=null;a.lt=null;a.jY=null;a.lA=null;a.jo=null;a.cL=null;a.gR=null;a.nN=0;}
function Si(a,b){var c,d,e,f;CV(a.cL);c=(Cc(!b.sh?a.uy:a.fx)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].cY(b);if(f)break;if(b.jd)break;e=e+1|0;}return f;}
function PM(a,b,c){var d,e,f;CV(a.cL);d=(Cc(a.lt)).data;e=d.length;f=0;while(f<e){if(Ko(d[f].n5,b,c))return 1;f=f+1|0;}return 0;}
function Uu(){B.call(this);this.mZ=null;}
function AJD(a,b){var c;c=a.mZ;if(Si(c.b5,V3(c,b,1)))Dl(c,b);}
function Uv(){B.call(this);this.rv=null;}
function AJN(a,b){var c;c=a.rv;if(Si(c.b5,V3(c,b,0)))Dl(c,b);}
function Uw(){B.call(this);this.oh=null;}
function AIe(a,b){var c,d,e,f,g,h,i;c=a.oh;if(c.di!==null){a:{b:{d=D_(c,b);e=c.b5;CV(e.cL);f=e.gR;if(f!==null)f.m(d);else{g=(Cc(e.eO)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].gN(d))break a;i=i+1|0;}}}}Dl(c,b);}}
function Ux(){B.call(this);this.ue=null;}
function AHH(a,b){var c,d,e,f,g,h;c=a.ue;b.button;if(c.di!==null)a:{d=D_(c,b);c=c.b5;e=b.button;CV(c.cL);if(c.gR===null){f=(Cc(c.eO)).data;g=f.length;h=0;while(h<g){b=f[h].gH(d,e);if(b!==null){c.gR=b;c.nN=e;break a;}h=h+1|0;}}}}
function Uy(){B.call(this);this.qL=null;}
function AH3(a,b){var c,d,e,f,g,h,i;c=a.qL;b.button;if(c.di!==null){d=D_(c,b);e=c.b5;f=b.button;CV(e.cL);if(f==e.nN&&e.gR!==null)e.gR=null;g=(Cc(e.eO)).data;h=g.length;i=0;a:{while(i<h){if(g[i].gL(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Dl(c,b);}}
function Uz(){B.call(this);this.np=null;}
function AKb(a,b){var c,d,e,f,g,h,i,j,k;c=a.np;if(c.di!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.b5;f=D_(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;CV(e.cL);i=(Cc(e.ik)).data;j=i.length;k=0;b:{while(k<j){if(i[k].gK(f,d,h))break b;k=k+1|0;}}Dl(c,b);}}
function UA(){B.call(this);this.ur=null;}
function AGj(a,b){var c,d,e,f,g,h,i,j;c=a.ur;if(c.di!==null){d=D_(c,b);e=c.b5;f=b.button;g=b.detail;CV(e.cL);h=(Cc(e.eO)).data;i=h.length;j=0;a:{while(j<i){if(h[j].gp(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Dl(c,b);}}
function UB(){B.call(this);this.qU=null;}
function ANi(a,b){var c,d,e,f,g,h,i;c=a.qU;if(c.di!==null){d=D_(c,b);e=c.b5;CV(e.cL);f=(Cc(e.jH)).data;g=f.length;h=0;a:{while(h<g){if(Zc(f[h],d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Dl(c,b);}}
function UC(){B.call(this);this.nE=null;}
function AFA(a,b){var c,d,e;b=a.nE.b5;c=(Cc(b.jo)).data;d=c.length;e=0;while(e<d){c[e].t();e=e+1|0;}CV(b.cL);}
function UD(){B.call(this);this.ts=null;}
function AK8(a,b){var c,d,e;b=a.ts.b5;c=(Cc(b.lA)).data;d=c.length;e=0;while(e<d){c[e].t();e=e+1|0;}CV(b.cL);}
function VX(){B.call(this);this.sU=null;}
function AMW(a,b){var c;c=a.sU;if(c.di!==null)D_(c,b);}
function VY(){B.call(this);this.rM=null;}
function AHU(a,b){var c,d,e,f,g,h,i,j,k;c=a.rM;if(LW()===c.gv){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cc(c.b5.jY)).data;if(0>=h.length)i=null;else{j=h[0].o3.cw;BV(j);i=new M1;TQ(i);i.m4=j;}if(i!==null){j=c.b5.cL;k=new MB;k.tG=i;k.tH=j;g.getAsString(Bi(k,"accept"));Dl(c,b);}}else{i=$rt_str(g.type);g=$rt_str(g.kind);j=new R;T(j);K(K(K(K(j,C(51)),i),C(52)),g);$rt_globals.console.info($rt_ustr(S(j)));}e=e+1|0;}}}
function VZ(){B.call(this);this.l5=null;}
function AIi(a,b){var c;c=a.l5;if(LW()===c.gv&&PM(c.b5,Sa(c,b),0))Dl(c,b);}
function V0(){B.call(this);this.tQ=null;}
function AJV(a,b){var c;c=a.tQ;if(LW()===c.gv&&PM(c.b5,Sa(c,b),1))Dl(c,b);}
var Sq=F(0);
var SD=F();
function Mq(a,b,c,d){var e,f,g,h;e=new Qm;e.jf=d;AQv=AQv+1|0;e.k3=b;e.kb=c;f=(C2()).createElement("canvas");e.hb=f;g=b;f.width=g;f=e.hb;g=c;f.height=g;if(!d)g=e.hb.getContext("2d");else{f=e.hb;h=ADd();g=f.getContext("2d",h);}e.c5=g;f="#FFFFFF";g.fillStyle=f;return e;}
var SC=F();
function AG6(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Lr(){var a=this;B.call(a);a.iZ=null;a.ci=null;a.kN=null;}
var Ib=F();
var AQM=null;function IB(a,b,c){return b.iR(c);}
function Y8(){AQM=new Ib;}
function AA_(){var a=this;B.call(a);a.gA=null;a.h2=null;a.go=0;}
function Cq(a){var b=new AA_();AGf(b,a);return b;}
function AGf(a,b){a.gA=b;}
function Cs(a,b){var c,d,e;c=a.go;d=a.gA;if(c==d.data.length)a.gA=CX(d,c+4|0);d=a.gA.data;e=a.go;a.go=e+1|0;d[e]=b;a.h2=null;}
function Cc(a){var b;b=a.h2;if(!(b!==null&&b.data.length==a.go))a.h2=CX(a.gA,a.go);return a.h2;}
var DH=F(0);
var Er=F(0);
var Ft=F(0);
var Hh=F(0);
var Lh=F(0);
var Jo=F(0);
var FS=F(0);
var IQ=F(0);
function Pg(){B.call(this);this.vF=null;}
function Bp(){var a=this;B.call(a);a.b=0;a.a=0;}
function Cd(a,b){var c=new Bp();AEB(c,a,b);return c;}
function AEB(a,b,c){a.b=b;a.a=c;}
function Cp(a,b){a.b=b.b;a.a=b.a;}
function Bn(a,b,c){a.b=b;a.a=c;}
function AGV(a,b){var c;a:{b:{if(a!==b){if(Bw(b)!==Bw(a))break b;if(!Ho(a,b))break b;}c=1;break a;}c=0;}return c;}
function Ho(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function UF(){var a=this;B.call(a);a.qE=0;a.qG=0;a.qD=0;a.qC=0;}
var AAz=F();
var Xh=F(0);
function O_(){B.call(this);this.dz=null;}
function Kq(){var a=this;B.call(a);a.bo=null;a.wZ=null;}
function Zy(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(53):C(54);g=$rt_str(b.getShaderInfoLog(e));h=new R;T(h);K(K(h,f),g);g=S(h);b.deleteShader(e);CU(IP(),g);CU(D2(),C(55));CU(D2(),d);CU(D2(),C(55));b=new Bq;Br(b,g);J(b);}
function CB(){var a=this;Kq.call(a);a.nD=null;a.pb=null;a.kX=null;}
function AQW(a,b,c,d){var e=new CB();F$(e,a,b,c,d);return e;}
function F$(a,b,c,d,e){var f,g,h,i,j,k;a.wZ=e;f=Zy(b,35633,c);d=Zy(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bo=g;h=e.rm.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bo;k=c.gC;c=c.pl;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bo;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ABg(b,C(56));a.kX=new Bp;c=a.bo;a.nD=b.getUniformLocation(c,"uResolution");c=a.bo;a.pb=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bq;c=new R;T(c);K(K(c,C(57)),d);Br(b,S(c));J(b);}
function X2(a,b,c){var d,e,f;if(!Ho(a.kX,c)){Cp(a.kX,c);d=a.nD;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function H4(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.pb;b.uniform4f(e,i,l,h,j);X2(a,b,f);}
function Ua(){CB.call(this);this.tk=null;}
function D$(){CB.call(this);this.qJ=null;}
function ANQ(a){var b=new D$();AG9(b,a);return b;}
function AQX(a,b){var c=new D$();J6(c,a,b);return c;}
function AQY(a,b,c){var d=new D$();Sk(d,a,b,c);return d;}
function AG9(a,b){J6(a,b,C(58));}
function J6(a,b,c){Sk(a,b,C(41),c);}
function Sk(a,b,c,d){GJ();F$(a,b,c,d,AQU);c=a.bo;a.qJ=b.getUniformLocation(c,"sDiffuse");}
function Sv(a,b,c){var d;d=a.qJ;b.uniform1i(d,0);b.activeTexture(33984);c=c.eA;b.bindTexture(3553,c);}
var Yv=F(CB);
function AOR(a){var b=new Yv();AMp(b,a);return b;}
function AMp(a,b){GJ();F$(a,b,C(41),C(59),AQU);}
function YN(){D$.call(this);this.u1=null;}
function APa(a){var b=new YN();AJC(b,a);return b;}
function AJC(a,b){var c;J6(a,b,C(60));c=a.bo;a.u1=b.getUniformLocation(c,"uContrast");}
function Fp(){var a=this;D$.call(a);a.or=null;a.pA=null;a.q1=null;}
function AQZ(a,b,c){var d=new Fp();VK(d,a,b,c);return d;}
function VK(a,b,c,d){Sk(a,b,c,d);c=a.bo;a.or=b.getUniformLocation(c,"uTexTransform");c=a.bo;a.pA=b.getUniformLocation(c,"uColor");c=a.bo;a.q1=b.getUniformLocation(c,"uBgColor");}
function RP(a,b,c,d){Hq(b,a.pA,c);Hq(b,a.q1,d);}
function LL(a,b,c,d){var e,f,g,h,i,j;c=c.eq;e=c.b;f=c.a;g=d.bl;h=e;g=g/h;i=d.bA;j=f;i=i/j;h=d.Z/h;j=d.bV/j;c=a.or;b.uniform4f(c,g,i,h,j);}
function ZN(){Fp.call(this);this.om=null;}
function AOn(a){var b=new ZN();AJ8(b,a);return b;}
function AJ8(a,b){var c;VK(a,b,C(61),C(62));c=a.bo;a.om=b.getUniformLocation(c,"uContrast");}
var ABp=F(Fp);
function APs(a){var b=new ABp();AE4(b,a);return b;}
function AE4(a,b){VK(a,b,C(61),C(63));}
function XE(){var a=this;D$.call(a);a.xF=null;a.xE=null;a.v3=null;}
function APj(a){var b=new XE();AE6(b,a);return b;}
function AE6(a,b){var c,d;J6(a,b,C(64));c=a.bo;a.xF=b.getUniformLocation(c,"uColorB");d=a.bo;a.xE=b.getUniformLocation(d,"uColorF");d=a.bo;a.v3=b.getUniformLocation(d,"uContrast");}
function ZM(){var a=this;CB.call(a);a.vc=null;a.uO=null;a.uN=null;}
function AO7(a){var b=new ZM();AE8(b,a);return b;}
function AE8(a,b){var c;GJ();F$(a,b,C(41),C(65),AQU);c=a.bo;a.vc=b.getUniformLocation(c,"uColor");c=a.bo;a.uO=b.getUniformLocation(c,"uPoints1");c=a.bo;a.uN=b.getUniformLocation(c,"uPoints2");}
function Xd(){var a=this;CB.call(a);a.ms=null;a.q4=null;a.ov=null;}
function AO8(a){var b=new Xd();ADw(b,a);return b;}
function ADw(a,b){var c;GJ();F$(a,b,C(41),C(66),AQU);c=a.bo;a.ms=b.getUniformLocation(c,"uColor");c=a.bo;a.q4=b.getUniformLocation(c,"uBaseline");c=a.bo;a.ov=b.getUniformLocation(c,"uScaleHExp");}
function Z3(a,b,c,d,e){var f;f=a.q4;b.uniform2f(f,c,d);Hq(b,a.ov,e);}
var QI=F(0);
var ABG=F(0);
function Hq(b,c,d){var e,f,g,h;e=d.bl;f=d.bA;g=d.Z;h=d.bV;b.uniform4f(c,e,f,g,h);}
function ABg(b,c){var d,e;d=b.getError();if(d){b=IP();e=new R;T(e);Bj(K(e,c),d);CU(b,S(e));}}
function O8(){var a=this;B.call(a);a.vd=null;a.vf=null;a.ve=null;}
function O$(){var a=this;B.call(a);a.dX=null;a.fT=null;a.mp=null;a.uf=null;a.tA=null;a.q6=0;a.tT=0;}
function Cg(){var a=this;B.call(a);a.u_=null;a.fR=0;}
function C4(a,b,c){a.u_=b;a.fR=c;}
function F2(){var a=this;Cg.call(a);a.rm=null;a.lO=null;a.qr=null;a.jT=0;a.o4=0;a.rI=0;}
var AQU=null;var AQ0=null;function GJ(){GJ=Bf(F2);AGG();}
function AGG(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new F2;c=O(DA,2);d=c.data;AMd();d[0]=AQ1;d[1]=AQ2;GJ();C4(b,C(67),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.le.fR){case 0:f=f+l.eK|0;h=h+1|0;break a;case 1:e=e+l.eK|0;g=g+1|0;break a;default:}}i=i|1<<l.gC;k=k+1|0;}b.rm=c;b.jT=e;b.o4=f;b.rI=i;c=O(DA,g);m=c.data;b.lO=c;c=O(DA,h);n=c.data;b.qr=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.le.fR){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}AQU
=b;c=O(F2,1);c.data[0]=b;AQ0=c;}
var J7=F(Fz);
var AQy=null;function AGY(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Z7(){var b;b=new J7;V8(b);AQy=b;}
function DA(){var a=this;Cg.call(a);a.pl=null;a.le=null;a.eK=0;a.oD=0;a.gC=0;}
var AQ1=null;var AQ2=null;var AQ3=null;function AMd(){AMd=Bf(DA);AF3();}
function AOC(a,b,c,d,e,f,g){var h=new DA();T4(h,a,b,c,d,e,f,g);return h;}
function T4(a,b,c,d,e,f,g,h){AMd();C4(a,b,c);a.pl=d;a.le=e;a.eK=f;a.oD=g;a.gC=h;}
function AF3(){var b;b=new DA;AIb();T4(b,C(68),0,C(69),AQ4,2,0,0);AQ1=b;b=AOC(C(70),1,C(71),AQ4,2,0,1);AQ2=b;AQ3=G(DA,[AQ1,b]);}
function AAr(){BJ.call(this);this.u$=null;}
function Yf(a){var b=new AAr();ALw(b,a);return b;}
function ALw(a,b){W(a);a.u$=b;}
var TE=F(DE);
var XB=F();
var F6=F(Cg);
var AQ5=null;var AQ4=null;var AQ6=null;function AIb(){AIb=Bf(F6);AEF();}
function AE1(a,b){var c=new F6();AAD(c,a,b);return c;}
function AAD(a,b,c){AIb();C4(a,b,c);}
function AEF(){var b;AQ5=AE1(C(72),0);b=AE1(C(73),1);AQ4=b;AQ6=G(F6,[AQ5,b]);}
var K7=F(0);
function Vy(){B.call(this);this.o9=null;}
function AKK(a,b){a.o9.setPointerCapture(b.pointerId);}
function Vz(){B.call(this);this.nV=null;}
function ADv(a,b){a.nV.releasePointerCapture(b.pointerId);}
function Ge(){var a=this;B.call(a);a.tV=0;a.ck=0;a.d0=0;a.il=0;}
function T0(a,b){a.il=(-1);a.tV=b;a.d0=b;}
function Ez(a){return a.d0-a.ck|0;}
function E_(a){return a.ck>=a.d0?0:1;}
var Q3=F(0);
var JU=F(Ge);
function Rd(a,b){var c,d,e;if(b>=0&&b<=a.d0){a.ck=b;if(b<a.il)a.il=0;return a;}c=new BJ;d=a.d0;e=new R;T(e);B0(Bj(K(Bj(K(e,C(74)),b),C(75)),d),93);Br(c,S(e));J(c);}
var YH=F();
function WS(b){return Math.log(b);}
function ABI(b,c){return AH1(b,c);}
function AH1(b,c){return Math.pow(b,c);}
function Be(b,c){if(b<c)c=b;return c;}
function Ba(b,c){if(b>c)c=b;return c;}
function AMx(b,c){return Math.max(b,c);}
function IT(){var a=this;Ge.call(a);a.pD=0;a.rq=null;a.wd=null;}
function UY(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.mk){e=new VU;W(e);J(e);}if(Ez(a)<d){e=new PH;W(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BU;j=new R;T(j);Bj(K(Bj(K(j,C(76)),h),C(77)),g);Br(i,S(j));J(i);}if(d<0){e=new BU;i=new R;T(i);K(Bj(K(i,C(78)),d),C(79));Br(e,S(i));J(e);}h=a.ck;k=h+a.pD|0;l=0;while(l<d){b=a.rq.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.ck=h+d|0;return a;}}b=b.data;e=new BU;d=b.length;i=new R;T(i);B0(Bj(K(Bj(K(i,C(80)),c),C(75)),d),41);Br(e,
S(i));J(e);}
function M3(a){a.ck=0;a.d0=a.tV;a.il=(-1);return a;}
function GT(){B.call(this);this.xi=null;}
var AQR=null;var AQQ=null;var AQP=null;function AMg(){AMg=Bf(GT);AHW();}
function ABc(a){var b=new GT();AAg(b,a);return b;}
function AAg(a,b){AMg();a.xi=b;}
function AHW(){AQR=ABc(C(81));AQQ=ABc(C(82));AQP=ABc(C(83));}
function Ja(){var a=this;KC.call(a);a.mY=null;a.et=null;}
var NC=F(0);
var Os=F(0);
function Pa(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new He;c=new HF;d=new HT;AFh();IR(d,AQ7);K$(c,d,BA(AQ8),BA(AQ9),BA(AQ$),BA(AQ8),BA(AQ_),BA(ARa),BA(ARb),BA(ARc),BA(ARd),BA(ARe));Tc();e=(ARf.f1()).data;f=e.length;g=O(H1,f);h=g.data;i=0;while(i<f){h[i]=e[i].hl;i=i+1|0;}j=ZQ(N(C(84)),N(C(85)),N(C(86)),N(C(87)));k=new Hk;l=new Hx;ACp();m=ARg;Ld(l,m,ARh,ARi,ARj,ARk,m);Kk(k,l,AAL(),ABk(N(C(88)),N(C(89)),N(C(90))),AAL(),Wj(1,0.17499999701976776),ARl,ARm);H7(b,c,g,j,k,WB(N(C(91)),N(C(92)),N(C(93)),N(C(94))));I1(a,b);}
var Tk=F(0);
function Wp(){var a=this;Ja.call(a);a.cw=null;a.eV=null;}
function APf(a){var b=new Wp();AM$(b,a);return b;}
function AM$(a,b){var c,d,e,f,g;a.pn=b;a.mY=IX(0,0,64,255,new B4);c=new SG;c.cA=new Bp;c.jw=Cq(O(HR,0));c.dT=new Bp;c.sV=new Bp;c.uK=new B4;c.uL=new B4;d=b.iZ;c.ds=d;e=b.kN;c.gf=e;c.cx=d.kD;d=new Qx;d.tg=e;c.c7=d;d=b.ci.jo;e=new O2;e.qH=c;Cs(d,e);d=b.ci.lA;e=new O1;e.ua=c;Cs(d,e);a.et=c;Cs(b.ci.fx,new QO);c=b.ci.fx;d=a.et;BV(d);e=new QN;e.nw=d;Cs(c,e);c=new Qh;d=a.et;e=new Vd;e.c3=Bz();c.dw=e;c.dS=d;f=new TY;f.b9=Bz();f.iI=ARn;f.cz=d;Cs(d.jw,f);c.bM=f;a.eV=c;d=AOi(a.et,c);a.cw=d;c=a.et;g=c.gf.dl!==(C2()).activeElement
?0:1;if(g)I2(c);c.ed=d;if(g)IE(c);Cs(b.ci.eO,a.eV);Cs(b.ci.ik,a.eV);Cs(b.ci.eO,a.cw);c=b.ci.fx;d=new Op;d.vB=a;Cs(c,d);c=b.ci.fx;d=new Qj;e=a.cw;BV(e);f=new On;f.tF=e;e=null;d.mW=b.kN;d.pa=e;d.os=f;Cs(c,d);c=b.ci.lt;d=a.cw;BV(d);e=new Oo;e.n5=d;Cs(c,e);c=b.ci.jY;d=new MW;d.o3=a;Cs(c,d);c=b.ci.ik;d=new MX;d.un=a;Cs(c,d);b=b.ci.jH;c=new MV;c.mH=a;Cs(b,c);Pa(a);}
function P5(a,b){var c,d,e,f;c=a.et;if(c.cx==b)b=0;else{c.cx=b;IG(c.gf);b=1;}if(b){c=a.eV;d=BM(c.bM.b9);while(BN(d)){Kv(BR(d));}c=c.dw;b=0;while(true){d=c.c3;if(b>=d.j)break;(Bo(d,b)).K.gh=1;b=b+1|0;}c=a.cw;d=c.ff;b=c.bG.cx;d.lx=b;if(c.he.jf!=b)Pl(c);e=c.e8.data;b=e.length;f=0;while(f<b){d=e[f].bx;if(d!==null)d.f9=1;f=f+1|0;}IS(c.c6);Kg(c);}}
function Jb(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=a.pn.iZ;c=a.mY;d=b.ba;e=c.bl;f=c.bA;g=c.Z;h=c.bV;d.clearColor(e,f,g,h);b.ba.clear(16384);Wi(a.cw);b=a.eV;c=b.dw;d=b.dS.ds;i=c.c3.j-1|0;while(i>=0){j=Bo(c.c3,i);j.N.jF(d);k=j.K;l=j.fy.hi;if(!Jm(k)){if(!Un(k)&&!(!k.gh&&k.cI!==null)){k.gh=0;Tl(k);m=k.em;f=(m.d2+m.dE+5.0)/10.0;n=Ck(k.eM,k.is);m=d.dd;o=k.em;p=k.gb;e=f*2.0;CF(m,o);q=n+JA(m,p,e)|0;k.hz=q;q=Fg(0,q,k.o.b);if(q){m=EY(d,q,k.o.a,k.eM.cx);CF(m,k.em);o=k.gb;e=n;f=e+f;p=k.em;g=p.d2;Ej(m,o,f,e+g-(g+p.dE)
/16.0);o=k.cI;if(o===null){o=Gv(d);k.cI=o;}Em(o,m);K4(m);Cb(k.hr,0.0,0.0,Cf(k.cI),Kn(k.cI));}}m=l.q7;o=k.cI;if(o===null)Om(k,d,0,k.o.b,m);else{n=Cf(o);o=l.tj;if(k.eM.cx){p=k.E;q=p.b;r=p.a;p=k.cI;Ek(d,q,r,p.eq,k.hr,p,o,m);}else{p=k.E;q=p.b;r=p.a;l=k.cI;Eh(d,q,r,l.eq,k.hr,l,o,m,0.0);}q=k.o.b;if(n<q)Om(k,d,n,q-n|0,m);}}DP(d,1);n=Ck(j.bi,2.0);q=Jm(j.K);m=j.bi;o=m.dT;m=m.sV;r=q?0:j.K.o.a;p=j.N.o;Bn(m,p.b,p.a+r|0);XS(d,m,!q?j.K.E:j.N.E,j.fy.hi.kk, -n|0,o);m=j.N;ZD(d,m.o,m.E,n,r,N1(j.fy.hW,j.bi.bW),j.fy.hW.k$,o);i
=i+(-1)|0;}b=b.bM;if(!DO(b.b9)){DP(b.cz.ds,1);n=0;while(true){c=b.b9;if(n>=c.j)break;AA3(Bo(c,n),b.cz);n=n+1|0;}}}
function Lu(a,b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=a.et;Cp(d.cA,b);if(d.bW!==c){d.bW=c;e=(Cc(d.jw)).data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];d.it=HX(d.cz,d.h7);h=BM(d.b9);while(BN(h)){ON(BR(h),d.it,d.cz);}g=g+1|0;}}}h=a.cw;d=new Bp;i=h.ff;RR(i.gW);j=i.gW;k=c>=0.5?c:0.25;l=k>=4.0?0.5:ABI(j.bV,ABI(k,ARo));Cb(j,j.bl/k,j.bA*k,AMx(j.Z*k,1.25),l);j=i.gW;k=j.bA;i.rd=k-(k|0)>=0.25?0.0:0.5;m=k+j.Z+1.5|0;i.t5=m;Bn(i.jB,0,m*2|0);Cp(h.V,d);Cp(h.cr,b);Rw(h,d,b,c);}
function I1(a,b){var c,d,e;BV(b);c=a.eV;c.gm=b;d=c.cC;if(d!==null)d.fy=b.fm;c=c.bM;d=b.fm;c.h7=b.tt;c.la=d;d=BM(c.b9);while(BN(d)){Pr(BR(d),c.la);}c=a.cw;c.cs=b;d=c.cy;e=b.bI.up;Fd(d.dR.eR,e);d=c.es;e=b.bI;F8(d,e.j8,e.kg);c=c.eu;b=b.bI;F8(c,b.j8,b.kg);}
var Zu=F(0);
function ZO(b){var c,d;c=b.length;d=new Mv;d.sx=b;return AAt(c,d);}
function PZ(){var a=this;B.call(a);a.hD=null;a.vx=null;}
function QL(){B.call(this);this.pc=null;}
function ADS(a,b){var c,d,e,f;b=a.pc;AQf=b;c=B7(AQg,b);if(c!==null)Ur(c);else if(B7(AQh,b)!==null){c=new R;T(c);K(K(c,C(95)),b);$rt_globals.console.info($rt_ustr(S(c)));}else{Dn(AQh,b,b);c=new R;T(c);K(K(c,C(96)),b);$rt_globals.console.info($rt_ustr(S(c)));c=$rt_globals.fetch($rt_ustr(b));d=new OU;c=c.then(Bi(d,"f"));d=new OS;d.mz=b;e=new OT;c.then(Bi(d,"f"),Bi(e,"f"));}f=Wv(C(97));c=new R;T(c);K(K(c,C(98)),b);b=$rt_ustr(S(c));f.innerText=b;}
var YY=F();
var I0=F(JU);
function P7(){var a=this;I0.call(a);a.xH=0;a.s8=0;a.qb=null;}
function JH(){var a=this;B.call(a);a.u7=null;a.pj=null;a.wB=0.0;a.lP=0.0;a.k2=null;a.kc=null;a.hV=0;}
function Ky(){var a=this;B.call(a);a.g1=0;a.nr=0;}
var AQT=null;var AQS=null;function W$(a,b){var c=new Ky();XL(c,a,b);return c;}
function XL(a,b,c){a.g1=b;a.nr=c;}
function KK(a){return a.g1!=1?0:1;}
function UV(a){return a.g1!=3?0:1;}
function J4(b){return W$(2,b);}
function X3(){AQT=W$(0,0);AQS=W$(1,0);}
function Qh(){var a=this;B.call(a);a.dS=null;a.dw=null;a.cC=null;a.bM=null;a.gm=null;}
function AJJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.dw;d=0;a:{while(true){e=c.c3;if(d>=e.j)break;b:{f=Bo(e,d);e=b.u;if(Dd(f.K,e))g=Dw(f.bi.c7,null);else{h=Ck(f.bi,7.0);i=Ck(f.bi,25.0);if(M9(f,e.b,h)){g=MF(f,e.b,i);if(N8(f,e.a,h)){g=Dw(f.bi.c7,KB(g,C(99)));break b;}if(My(f,e.a,h)){g=Dw(f.bi.c7,KB( -g|0,C(99)));break b;}}if(Ut(f,e.a,h)){g=U1(f,e.a,i);if(V2(f,e.b,h)){g=Dw(f.bi.c7,KB(g,C(100)));break b;}if(LQ(f,e.b,h)){g=Dw(f.bi.c7,KB( -g|0,C(100)));break b;}}g=0;}}c:{d:{if(!g){if(!Dd(f.N,b.u))break d;if(!f.N.gN(b)
&&!Dw(f.bi.c7,null))break d;}g=1;break c;}g=0;}if(g){g=1;break a;}d=d+1|0;}g=0;}e:{if(!g){c=a.bM;g=0;j=c.b9.j-1|0;f:{while(j>=0){e=Bo(c.b9,j);k=b.u;f=c.cz.c7;g=G$(e.b1,k);d=!g?(-1):Mz(e,k);h=e.hL;if(h!=d){if(h>=0){l=e.cb.data[h];l.f7=0;m=e.uQ;if(m!==null)m.x3(k,h,l);}if(d>=0){k=e.cb.data[d];l=e.op;if(l!==null){m=l.oa;n=l.ob;l=l.oc;R5(m,n);if(l!==null)k.jp.t();if(S8(k)){if(k.ky===null)Ne(m,Yo(k,n),k.h0,n);else UW(m,Yo(k,n),k.h0,n,k.ky);}}k.f7=1;}e.hL=d;}g=g&&Fk(f)?1:0;if(g)break f;j=j+(-1)|0;}}if(!g){g=0;break e;}}g
=1;}return g;}
function AMm(a,b,c,d){var e,f,g,h,i;e=a.dw;f=0;a:{while(true){g=e.c3;if(f>=g.j)break;b:{c:{h=Bo(g,f);if(!Dd(h.K,b.u)){if(!Dd(h.N,b.u))break c;if(!h.N.gp(b,c,d))break c;}i=1;break b;}i=0;}if(i){c=1;break a;}f=f+1|0;}c=0;}d:{if(!c){g=a.bM.b9;d=g.j-1|0;i=1;if(d<0)i=0;else{g=Bo(g,d);c=Mz(g,b.u);if(c>=0){b=g.cb.data[c];if(!S8(b))b.jp.t();}}if(!i){c=0;break d;}}c=1;}return c;}
function AKz(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.bM;e=null;f=d.b9.j-1|0;a:{while(f>=0){e=Bo(d.b9,f);g=b.u;h=G$(e.b1,g);if(!h&&!Jc(e.b1)){e=e.sB;if(e!==null)Dp(e.rr);}e=!h?null:ARp;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;e=a.dw;h=0;b:{while(true){g=e.c3;if(h>=g.j){g=null;break b;}c:{i=Bo(g,h);if(!c){d:{g=b.u;if(!Jm(i.K)&&Dd(i.K,g)){d=i.N.E;j=d.b;k=g.b;l=j-k|0;j=d.a;f=g.a;j=j-f|0;g=i.K.E;m=g.b-k|0;f=g.a-f|0;d=new Bp;g=new MH;g.mO=i;g.mP=m;g.mQ=f;g.mR=d;g.mK=l;g.mM=j;}else{j=Ck(i.bi,7.0);f=Ck(i.bi,
25.0);if(M9(i,g.b,j)){m=MF(i,g.b,f);if(N8(i,g.a,j)){g=HA(i,g,m,(-1));break d;}if(My(i,g.a,j)){g=HA(i,g,m,1);break d;}}if(Ut(i,g.a,j)){f=U1(i,g.a,f);if(V2(i,g.b,j)){g=HA(i,g,(-1),f);break d;}if(LQ(i,g.b,j)){g=HA(i,g,1,f);break d;}}g=null;}}if(g!==null)break c;}g=Dd(i.K,b.u)?ARp:i.N.gH(b,c);i=i.N;if(i===null)g=null;else if(g===null)g=!Dd(i,b.u)?null:ARp;}if(g!==null)break;h=h+1|0;}}return g;}
function AHq(a,b,c){var d,e,f,g,h;d=a.dw;e=0;a:{while(true){f=d.c3;if(e>=f.j)break;b:{c:{g=Bo(f,e);if(!Dd(g.K,b.u)){if(!Dd(g.N,b.u))break c;if(!g.N.gL(b,c))break c;}h=1;break b;}h=0;}if(h){c=1;break a;}e=e+1|0;}c=0;}return !c&&!Fq(a.bM)?0:1;}
function PO(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r;f=null;g=d.d;h=Bz();i=c.j;j=0;while(j<i){if(f===null){k=(Bo(c,j)).Y;l=QF(EA(BH(g.f,k)));m=Rv(g.eN);}else{m=f.data;k=m[j].kr.j$;l=!BB(g.eN,m[j].ig)?C(5):QF(EA(BH(g.f,k)));m=Rv(m[j].ig);}if(H(l)>153){l=B9(l,0,150);n=new R;T(n);K(K(n,l),C(101));l=S(n);}if(H(m)>153){n=B9(m,0,150);m=new R;T(m);K(K(m,n),C(101));m=S(m);}o=DX(k+1|0);if(f!==null){p=f.data;n=null;q=p[j];}else{q=null;n=Bo(c,j);}if(f!==null){p=new Vb;p.pd=d;p.pe=q;}else{p=new Vc;p.tK=d;p.tJ=n;}n=new Je;n.ra
=p;n.hU=o;n.h5=l;n.fp=m;Bu(h,n);j=j+1|0;}r=GY(h,ARq);if(a.cC!==null)RK(a);c=new Ph;l=a.dS;m=new O5;m.l1=a;m.l2=d;Ks(c);c.cE=new Bp;c.bz=new Bp;c.dh=AHu();c.fZ=new Bp;c.bO=ARq;c.dG=O(Hz,0);c.df=0;c.dO=0;c.fi=0;c.eJ=0;c.ew=0;c.dH=AC0(0);c.gs=FR();c.bS=l;c.hM=m;c.uk=m;N3(c);Sd(c);c.bO=r;d=a.gm;l=d.fm;d=d.t6;c.pI=l;c.sA=d;c.dy=null;c.dH=null;c.ec=0;Sd(c);d=new SZ;l=a.dS;d.N=ANC();d.bi=l;m=new TG;Ks(m);m.hr=new B4;m.eM=l;d.K=m;a.cC=d;d=new Oz;l=a.dS.c7;Ks(d);m=new Nc;m.pG=d;d.nZ=m;m=new Nb;m.qI=d;d.so=m;d.ti=10.0;d.bm
=c;d.lE=l;c.f0=d;l=a.gm.fm;m=l.n$;l=l.m7;d.t4=m;d.t1=l;h=d.cF;if(h!==null)F8(h,m,l);h=d.cM;if(h!==null)F8(h,m,l);l=a.cC;m=l.N;h=m.E;g=m.o;d=CZ(m,d);l.N=d;d.kP(h,g,l.bi.bW);d=a.cC;l=APl();K(K(l,C(102)),e);Yq(d,GM(l),a.gm.sT,4.0);Y7(a.cC,a.gm.fm);WA(a.dw,a.cC);b=AAw(c,b,ABC(a.cC)+Ck(a.dS,2.0)|0);d=AA8(c,b);JV(a.cC,b,d);HP(a.dS,c);}
function RK(a){var b,c;b=a.dw;c=a.cC;TS(b.c3,c);b=a.cC;c=b.K;c.cI=CZ(c.cI,null);b.N=CZ(b.N,null);a.cC=null;}
function Py(a,b){var c;c=new Pc;c.mv=a;c.mw=b;return c;}
function AKR(a,b,c,d){var e,f,g,h;e=a.dw;f=0;a:{while(true){g=e.c3;if(f>=g.j)break;if((Bo(g,f)).N.gK(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function XD(b){var c;c=new VI;c.lX=b;return c;}
var GN=F(0);
function AI1(a){}
function AFt(a){}
var OI=F(0);
var OY=F(0);
function Yb(){var a=this;B.call(a);a.V=null;a.cr=null;a.bG=null;a.L=null;a.iu=null;a.ut=0;a.lB=null;a.cy=null;a.kH=0;a.fh=0;a.iE=null;a.gE=null;a.bY=null;a.M=0;a.d=null;a.eo=null;a.cs=null;a.he=null;a.e8=null;a.sX=0;a.qT=0;a.co=0;a.bX=0;a.b6=0;a.ex=null;a.es=null;a.eu=null;a.gq=0;a.i3=0;a.hs=0;a.xz=0;a.vh=0;a.iK=0;a.ib=0;a.k1=0;a.dq=0;a.c6=null;a.ej=null;a.ez=0;a.by=0;a.uZ=null;a.hc=null;a.v7=null;a.wU=null;a.vI=null;a.bk=0;a.ff=null;a.pg=0;a.nI=null;a.sI=null;}
function AOi(a,b){var c=new Yb();AKe(c,a,b);return c;}
function AKe(a,b,c){var d,e,f,g,h;a.V=new Bp;a.cr=new Bp;a.ut=0;a.lB=O(Bh,10);d=new Ou;e=new Vs;f=new Bp;e.cG=f;e.bp=new Bp;e.eR=new B4;e.hg=new B4;Bn(f,0,0);Bn(e.bp,2,20);d.dR=e;d.jl=0.5;d.gu=0.0;IX(187,187,187,255,e.eR);a.cy=d;a.fh=16;a.iE=C(103);a.bY=O(JS,4);a.d=AEd(O(Bv,0),null,null);e=new Vj;e.oR=Cq(O(I9,0));e.uq=Cq(O(I9,0));e.mh=Cq(O(RB,0));e.to=Cq(O(OV,0));e.sW=Cq(O(Ga,0));e.sF=Cq(O(Rg,0));a.eo=e;a.e8=O(EK,0);a.ex=Cd(1,0);a.es=Ts();a.eu=Ts();a.gq=0;a.hs=1;a.iK=1;a.ib=1;a.k1=1;a.dq=3;a.c6=AMo();a.ej=C(104);a.ez
=0;a.by=0;e=D2();BV(e);f=new MQ;f.wN=e;a.hc=f;a.bk=0;e=new MP;e.lZ=a;a.nI=e;e=new MO;e.p9=a;a.sI=e;a.bG=b;a.L=b.ds;a.iu=c;c=new Tb;g=a.bY;c.iG=new B4;c.fU=new Bp;c.jB=new Bp;e=new B4;c.gW=e;c.jD=g;RR(e);a.ff=c;g=a.lB.data;e=new MN;e.s7=a;g[0]=e;e=new MU;e.nC=a;g[1]=e;e=new MT;e.rc=a;g[2]=e;e=new MS;e.uB=a;g[3]=e;e=new MR;e.nh=a;g[4]=e;e=new MM;e.qu=a;g[5]=e;e=new MK;e.ty=a;g[6]=e;ACf();h=ARr===ARs?0:1;a.i3=h;c.k4=!h?0.0:0.5;c.lx=b.cx;}
function Rw(a,b,c,d){var e,f,g,h;a.co=Cn(80.0,d);a.bX=Cn(1.0,d);a.b6=Cn(10.0,d);if(!a.by)Cp(a.bG.dT,a.V);else Bn(a.bG.dT,(b.b+c.b|0)-H_(a)|0,b.a);b=a.c6;e=a.bG.dT;f=H_(a);g=c.a;h=d;Cp(b.eT,e);Bn(b.ei,f,g);b.hR=h;b=a.cy;f=Cn(2.0,d);b.dR.bp.b=f;PN(a,a.iE,a.fh);Kg(a);}
function AFj(a){a.kH=1;Kb(a);}
function ACI(a){a.kH=0;}
function Kb(a){var b;b=a.cy;b.gu=Mw(Fb(a))+b.jl*1.25;b.fv=1;}
function Pl(a){a.he=CZ(a.he,EY(a.L,1024,a.M,a.bG.cx));}
function H$(a,b,c){if(a.bG.bW!==0.0){PN(a,b,c);IG(Fb(a));}a.fh=c;a.iE=b;}
function PN(a,b,c){var d,e,f,g,h,i,j;d=Cn(c,a.bG.bW);e=a.gE;f=e!==null?e.oy:0;if(!(d==f&&BB(b,a.iE))){IS(a.c6);g=a.e8.data;c=g.length;f=0;while(f<c){VE(g[f]);f=f+1|0;}g=a.d.f.v.data;c=g.length;f=0;while(f<c){DY(g[f]);f=f+1|0;}g=a.bY.data;h=Gy(0,0);e=a.L;i=d;g[h]=F7(e,b,i,300,0);a.bY.data[Gy(0,1)]=F7(a.L,b,i,300,2);a.bY.data[Gy(1,0)]=F7(a.L,b,i,600,0);a.bY.data[Gy(1,1)]=F7(a.L,b,i,600,2);e=a.bY.data[Gy(0,0)];a.gE=e;c=Fj(e);f=Dx(c*1.25);a.M=f;e=a.ff;e.uM=f;g=a.bY.data;j=g[0];e.tS= -( -((f+j.d2+j.dE)/2.0)|0)|0;a.cy.dR.bp.a
=Fj(g[0]);Pl(a);f=a.M;h=U6(a.cy);e=new R;T(e);b=K(K(e,C(105)),b);B0(b,32);Bj(K(Bj(K(Bj(K(Bj(b,d),C(106)),c),C(107)),f),C(108)),h);$rt_globals.console.info($rt_ustr(S(e)));if(ARt){c=JD(a.bY.data[0],a.M);b=new R;T(b);Bj(K(b,C(109)),c);$rt_globals.console.info($rt_ustr(S(b)));}a.d.gk=FJ(EW(a),a.d.s,a.L.dd,a.bY);F_(a);Kg(a);}}
function Ln(a){return V(Ci(a.d.f)+5|0,a.M);}
function IU(a){return Ba(Ln(a)-a.cr.a|0,0);}
function RN(a){return Ba(a.gq-C8(a)|0,0);}
function C8(a){var b;b=!a.by?0:CJ(a)+a.b6|0;return Ba(1,(a.cr.b-a.co|0)-b|0);}
function H_(a){return a.by?a.co:a.co-a.b6|0;}
function De(a){return a.cr.a;}
function E8(a,b){var c,d;c=So(b,IU(a));if(c!=a.bk){a.bk=c;a.d.i_=c/a.M;d=a.wU;if(d!==null)d.va(c);}}
function HL(a,b){var c,d;c=So(b,RN(a));d=a.d;if(c!=d.cV){d.cV=c;d=a.v7;if(d!==null)d.va(c);}}
function Wi(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=HH(a.cr.a,a.M)+7|0;c=a.e8;if(c.data.length<b)a.e8=XF(b,c,a.ff,a.sX,a.qT,a.d.f);DP(a.L,0);Qu(a.L,a.V,a.cr);d=(a.M-U6(a.cy)|0)/2|0;e=(a.d.gk-(RI(a.cy)/2|0)|0)-a.d.cV|0;f=!a.by?a.co:(a.bX+a.b6|0)+CJ(a)|0;g=a.cy;b=f+e|0;d=(d+V(a.d.n,a.M)|0)-a.bk|0;Bn(g.dR.cG,b,d);h=Ci(a.d.f);i=Ki(a);j=S0(a);a.sX=i;a.qT=j;k=!a.by?a.V.b+a.co|0:((a.V.b+a.bX|0)+a.b6|0)+CJ(a)|0;l=i;while(l<=j&&l<h){m=BH(a.d.f,l);g=TF(a,l);Wh(g,m,a.he,a.L,a.M,C8(a),a.d.cV);n=g.bx;a.gq=Ba(a.gq,
Eq(m)+(40.0*a.bG.bW|0)|0);o=V(a.M,l)-a.bk|0;p=Cy(a)===null?null:(Cy(a)).data[l];d=a.V.a+o|0;m=a.L;f=C8(a);q=a.M;o=a.d.cV;r=a.cs;s=ZE(Z(a),l);if(s!==null){if(s.a==(-1))s.a=n.z;s.b=FJ(n,s.b,a.L.dd,a.bY);s.a=FJ(n,s.a,a.L.dd,a.bY);}t=a.d;Xs(g,d,k,m,f,q,o,r,s,t.gU,t.gD,t.n!=l?0:1,Cy(a)===null?0:1,p);l=l+1|0;}r=a.bG.dT;l=i;while(l<=j&&l<h&&a.iK){g=TF(a,l);o=V(a.M,l)-a.bk|0;u=AAF(Z(a),l);t=a.cs.bI.pE;v=a.d.n==l&&Cy(a)===null?1:0;if(u)t=a.cs.bI.lv;else if(Cy(a)!==null&&l<(Cy(a)).data.length&&(Cy(a)).data[l]!==null)
{t=a.cs;t=J5(t.dA,t,(Cy(a)).data[l].jI);}else if(v)t=a.cs.bI.hB;Xz(g,a.L,k,a.V.a+o|0,a.M,r,a.d.cV,C8(a),t);l=l+1|0;}if(a.hs){q=Be(j+1|0,h);Y5(a,V(a.M,q)-a.bk|0);}Z0(a);Zg(a,i,j);if(a.ib)ABs(a,i,j,h);if(a.kH&&e>=(( -RI(a.cy)|0)/2|0)){g=a.cy;t=a.cr;if(Xi(g.dR.cG,0,0,t))AAd(a.cy,a.L,a.V);}ZA(a);YO(a);Kw(a.L);}
function ABs(a,b,c,d){var e,f,g,h,i,j;while(b<=c&&b<d){e=Cy(a)!==null&&b<(Cy(a)).data.length?(Cy(a)).data[b]:null;if(e!==null){f=a.cs;f=J5(f.dA,f,e.jI);}else f=Cy(a)!==null?a.cs.bI.fQ:a.cs.bI.hB;if(!(a.d.n!=b&&e===null)){a.ex.b=!a.by?(a.b6-a.bX|0)-a.dq|0:((a.b6+CJ(a)|0)+a.bX|0)-a.dq|0;g=a.ex;h=a.M;g.a=h;i=a.by?0:(a.co-a.b6|0)+a.bX|0;h=V(h,b)-a.bk|0;e=a.L;j=a.V;BC(e,j.b+i|0,j.a+h|0,g,f);}b=b+1|0;}}
function Zg(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;d=a.cr.a;e=Be(d,V(Ci(a.d.f),a.M)-a.bk|0);f=a.c6;g=a.bk;h=Cy(a)!==null?(-1):a.d.n;i=a.L;j=a.cs;Qu(i,f.eT,f.ei);RH(f,i,b,d);k=f.eZ;if(b!=k){l=f.ch.j;m=l*20|0;if(k<b){k=k/20|0;n=b/20|0;}else{n=Ba(0,(k-1|0)/20|0);k=Ba(0,(b-1|0)/20|0);}a:{if((n-k|0)>=l){Ql(f,b);f.eZ=b;}else{if(f.eZ>=b)while(true){if(n<k)break a;f.eZ=Mr(Bo(f.ch,n%l|0),f.d4,f.e2,f.eZ,b,m,f.hR);n=n+(-1)|0;}while(k<=n){f.eZ=Mr(Bo(f.ch,k%l|0),f.d4,f.e2,f.eZ,b,m,f.hR);k=k+1|0;}}}}o
=BM(f.ch);while(BN(o)){p=BR(o);q=f.eT;k=V(f.ch.j,f.ii);r=f.i1;s=p.ef.a;n=((p.g7.a-(g%k|0)|0)+k|0)%k|0;t=j.hu;l=g+n|0;u=p.H;m=l/u|0;v=n+s|0;l=BF(v,e);if(l<=0){k=s/u|0;u=0;v=0;w=0;while(v<k){l=m+v|0;if(KL(p,r,w,l,j,t)){s=V((v-u|0)+1|0,p.H);Bn(p.cR,Cf(p.W),s);Cb(p.dx,0.0,V(u,p.H),Cf(p.W),s);l=w;}else{x=Fi(j,r,w,t);Ed(p,i,n+V(u,p.H)|0,q,t.eB,x);Bn(p.cR,Cf(p.W),p.H);Cb(p.dx,0.0,V(v,p.H),Cf(p.W),p.H);u=v;}v=v+1|0;w=l;}x=Fi(j,r,w,t);Ed(p,i,n+V(u,p.H)|0,q,t.eB,x);}else{if(l>0&&n<e){l=Ba(e-n|0,0);w=p.H;u=l/w|0;if(l%
w|0)u=u+1|0;y=0;z=0;ba=0;while(z<u){w=m+z|0;if(KL(p,r,ba,w,j,t)){l=V((z-y|0)+1|0,p.H);Bn(p.cR,Cf(p.W),l);Cb(p.dx,0.0,V(y,p.H),Cf(p.W),l);w=ba;}else{x=Fi(j,r,ba,t);Ed(p,i,n+V(y,p.H)|0,q,t.eB,x);Bn(p.cR,Cf(p.W),p.H);Cb(p.dx,0.0,V(z,p.H),Cf(p.W),p.H);y=z;}z=z+1|0;ba=w;}x=Fi(j,r,ba,t);Ed(p,i,n+V(y,p.H)|0,q,t.eB,x);}if(v>k)Y4(p,q,e,g,k,j,r,i,s,n,t);}}x=j.hu;if(e<d){bb=f.eT;BC(i,bb.b,bb.a+e|0,Cd(f.ei.b,d-e|0),x.hd);}if(b<=h&&h<=c)Z9(f,g,h,j.hu,i);Kw(i);}
function Ki(a){return Be(a.bk/a.M|0,Ci(a.d.f)-1|0);}
function S0(a){return Be(((a.bk+De(a)|0)-1|0)/a.M|0,Ci(a.d.f)-1|0);}
function Kg(a){var b,c,d,e,f,g,h;b=a.c6;c=a.bY.data[0];d=a.M;e=a.bG.cx;f=a.L;b.hK=c;b.lf=d;g=d*20|0;b.ii=g;h=CZ(b.d4,EY(f,b.ei.b,g,e));b.d4=h;CF(h,b.hK);QR(b.d4,2);c=CZ(b.e2,EY(f,b.ei.b,d,e));b.e2=c;CF(c,b.hK);QR(b.e2,2);RH(a.c6,a.L,Ki(a),De(a));}
function TF(a,b){var c;c=a.e8.data;return c[b%c.length|0];}
function Uo(a,b){var c,d,e,f;c=Fg(0,H(a.ej),Mk(b));if(!c)b=null;else{b=C(44);if(c<0){b=new BJ;W(b);J(b);}if(c!=1){d=b.b4.data.length;if(d&&c){e=B2(V(d,c));d=0;f=0;while(f<c){OL(b,0,H(b),e,d);d=d+H(b)|0;f=f+1|0;}b=K_(e);}else b=AQm;}}return b;}
function Nf(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=Bt(i);k=APJ(i).data;GI(j,c);c=0;l=k.length;if(c>l){f=new BJ;W(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.f;o.b2=o.b2+1|0;p=O(F3,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ALz(h[m],n[m],k[m],b[m],f.Y,f.bf);m=m+1|0;}Bu(o.gJ,p);c=0;while(c<i){b=e.data;I4(o,h[c],n[c],k[c],b[c]);g.lF(Ct(h[c]),b[c]);c=c+1|0;}}
function ABv(a){var b;if(CY(Z(a)))FG(a);else{b=a.d;LN(b.f,b.n,b.s);}F_(a);DG(a);return 1;}
function Dj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.ez)return 0;if(CY(Z(a)))FG(a);c=KQ(Td(b,C(110),C(5)),C(111),(-1));d=c.data;b=a.d;e=b.f;f=b.n;g=b.s;V9(e,f,g,c);h=d.length;if(!h)b=AQm;else{i=0;j=0;while(j<h){i=i+H(d[j])|0;j=j+1|0;}k=B2(i+V(h-1|0,H(C(111)))|0);c=k.data;l=0;b=d[0];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<H(C(111))){m=l+1|0;c[l]=I(C(111),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=n+1|0;}b=K_(k);}EZ(e,f,g,0,b);b=a.d;f=b.n;m=(f
+h|0)-1|0;Cj(a,m,m!=f?H(d[h-1|0]):b.s+H(d[0])|0,0);E4(a);DG(a);return 1;}
function FG(a){var b,c,d;b=Ds(Z(a));c=a.d.f;d=Z(a);LV(c,d,T8(c,d));Cj(a,b.A,b.O,0);E4(a);DG(a);}
function E4(a){var b,c;(Z(a)).cP=0;b=(Z(a)).bs;c=a.d;BY(b,c.n,c.s);b=(Z(a)).bj;c=a.d;BY(b,c.n,c.s);}
function CJ(a){return a.gE.lg|0;}
function Y5(a,b){var c,d;c=a.cr.a;if(b<c){d=a.bG.dT;d.a=c-b|0;d.b=!a.by?C8(a)+a.dq|0:C8(a)+a.bX|0;c=!a.by?(a.V.b+a.co|0)-a.dq|0:(((a.V.b+a.b6|0)+CJ(a)|0)+a.bX|0)-a.dq|0;BC(a.L,c,a.V.a+b|0,d,a.cs.bI.fQ);}}
function ZA(a){var b;b=a.by?a.V.b+CJ(a)|0:a.V.b+a.cr.b|0;Vu(a.es,a.bk,a.V.a,De(a),Ln(a),b,CJ(a));b=!a.by?a.V.b+a.co|0:((a.V.b+a.bX|0)+a.b6|0)+CJ(a)|0;Pw(a.eu,a.d.cV,b,C8(a),a.gq,a.V.a+De(a)|0,CJ(a));}
function YO(a){var b,c;b=PU(a.es);c=PU(a.eu);if(!(!b&&!c)){DP(a.L,1);if(b)G_(a.es,a.L);if(c)G_(a.eu,a.L);if(b)Hf(a.es,a.L);if(c)Hf(a.eu,a.L);}}
function Z0(a){var b,c,d,e;b=a.ex;c=a.cr;b.a=c.a;b.b=a.bX;d=!a.by?a.co-a.b6|0:(c.b-H_(a)|0)-a.bX|0;b=a.L;c=a.V;BC(b,c.b+d|0,c.a,a.ex,a.cs.bI.r1);a.ex.b=!a.by?(a.b6-a.bX|0)-a.dq|0:((a.b6+CJ(a)|0)+a.bX|0)-a.dq|0;e=a.by?0:(a.co-a.b6|0)+a.bX|0;b=a.L;c=a.V;BC(b,c.b+e|0,c.a,a.ex,a.cs.bI.fQ);}
function So(b,c){return Be(Ba(0,b),c);}
function Fb(a){return a.bG.gf;}
function LC(a,b){var c,d,e,f;c=Ir(b);d=new R;T(d);K(K(d,C(112)),c);$rt_globals.console.info($rt_ustr(S(d)));Fb(a);c=Ir(b);d=C2();c=$rt_ustr(c);d.title=c;Cj(a,0,0,0);c=new OP;c.st=a;c.ss=b;d=D2();BV(d);e=new OO;e.m2=d;f=new SK;f.oF=e;d=new U_;d.m3=c;c=b.hY;if(c!==null)c.text().then(Bi(d,"f"),Bi(f,"f"));else{b=b.hn.getFile();c=new Va;c.on=d;c.oo=f;b.then(Bi(c,"f"),Bi(f,"f"));}}
function GV(a,b,c,d,e){if(G3(a,e))return 1;if(c&&d)return 1;if(c)E8(a,a.bk+((V(b,a.M)*12|0)/10|0)|0);else if(!d){GB(a,a.d.n+b|0,e);Sp(a);}return 1;}
function QK(a,b,c,d){var e,f,g;if(G3(a,d))return 1;e=EW(a);if(!c)f=a.d.s+b|0;else if(b>=0)f=FZ(e,a.d.s);else{b=a.d.s;if(!b)f=(-1);else{c=HS(e,b);if(c>0&&e.dm.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.dm.data[c-1|0];}}if(f>e.z){e=a.d;if((e.n+1|0)<Ci(e.f))Cj(a,a.d.n+1|0,0,d);}else if(f>=0)CR(a,f,d);else{e=a.d;b=e.n;if(b>0){g=(BH(e.f,b-1|0)).z;Cj(a,a.d.n-1|0,g,d);}}TR(a);return 1;}
function G3(a,b){if(CY(Z(a))&&!b){E4(a);F_(a);return 1;}if(!(b&&CY(Z(a))))E4(a);return 0;}
function Cj(a,b,c,d){a.d.s=c;return GB(a,b,d);}
function GB(a,b,c){var d;d=a.d;d.n=Fg(0,b,Ci(d.f)-1|0);return CR(a,a.d.s,c);}
function CR(a,b,c){var d,e;a.d.s=Fg(0,b,(EW(a)).z);a.d.gk=a.bG.bW===0.0?0:FJ(EW(a),a.d.s,a.L.dd,a.bY);Kb(a);F_(a);if(c)(Z(a)).cP=1;d=Z(a);e=a.d;Kc(d,e.n,e.s);(Z(a)).cP=0;return 1;}
function Lb(a,b){var c;c=AEj(Z(a));CR(a,b,0);G8(Z(a),c);}
function F_(a){Sp(a);TR(a);}
function Sp(a){var b,c,d,e,f;b=a.bk;c=b+De(a)|0;d=a.d.n;e=a.M;d=V(d,e);f=d+e|0;if(d<(b+e|0))E8(a,d-e|0);else if(f>(c-e|0))E8(a,(f-De(a)|0)+a.M|0);}
function TR(a){var b,c,d,e,f;b=Dx(a.bG.bW*30.0);c=a.d.cV;d=c+C8(a)|0;e=a.d.gk;f=e+b|0;if(e<(c+b|0))HL(a,e-b|0);else if(f>(d-b|0))HL(a,(f-C8(a)|0)+b|0);}
function Hc(a,b){var c,d;Cj(a,b.Y,b.bf,0);c=FZ(EW(a),a.d.s);BY((Z(a)).bj,a.d.n,c);b=(Z(a)).bs;d=a.d;BY(b,d.n,d.s);}
function Ef(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.V;e=c-d.b|0;f=Fg(0,((b.a-d.a|0)+a.bk|0)/a.M|0,Ci(a.d.f)-1|0);g=!a.by?a.co:(a.bX+a.b6|0)+CJ(a)|0;h=Ba(0,(e-g|0)+a.d.cV|0);b=BH(a.d.f,f);d=a.L.dd;i=a.bY;if(!(b.dY!==null&&!b.fj))Jn(b,d,i);j=b.dY;e=b.k.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.z;else{c=Se(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.k.data.length)k=b.z;else{j=QQ(b,d,i,c);k=0;e=0;while(e<c){k=k+H(b.k.data[e].p)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(ARu){b=new R;T(b);Bj(K(Bj(K(Bj(K(b,C(113)),e),C(114)),h),C(115)),m);$rt_globals.console.info($rt_ustr(S(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return Di(f,k);}
function VG(a,b){var c,d;c=a.d;d=b.Y;c.n=d;c.s=b.bf;c.gk=FJ(BH(c.f,d),a.d.s,a.L.dd,a.bY);Kb(a);}
function EW(a){var b;b=a.d;return BH(b.f,b.n);}
function AIA(a,b,c){(Z(a)).cP=0;return 1;}
function AB7(a,b,c){var d;if(c)return null;d=Hm(a.es,b.u,a.nI,1);if(d!==null)return d;d=Hm(a.eu,b.u,a.sI,0);if(d!==null)return d;HQ(a);VG(a,Ef(a,b.u));JQ(a.d);if(!b.bv&&!(Z(a)).cP){b=(Z(a)).bs;d=a.d;BY(b,d.n,d.s);}(Z(a)).cP=1;b=Z(a);d=a.d;Kc(b,d.n,d.s);b=new VM;b.pf=a;return b;}
function ACn(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cf){b=b.u;e=Ef(a,b);f=HE(a.d.f,e.Y,e.bf);g=RD(a,f);h=KW(a.eo,DI(a.d),Fw(a.d));if(h!==null){i=a.d;c=e.Y;d=e.bf;e=new Sf;e.vo=a;e.vp=b;e.vn=g;h.qM(i,c,d,e,a.hc);}else{e=B7(a.d.f.dc,f);if(e!==null){Hc(a,e);c=1;}else{e=B7(a.d.f.cQ,f);if(e!==null&&!DO(e)){if(e.j!=1){PO(a.iu,b,e,a,g);c=1;}else{Hc(a,Bo(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(Ef(a,b.u)).Y;g=BH(a.d.f,c);c=Fm(g,a.d.s);d=FZ(g,a.d.s);b=KH(g,c);if((d-1|0)==g.z){BY((Z(a)).bs,a.d.n,
Mk(g));BY((Z(a)).bj,a.d.n,g.z);}else{if(b!==null){b=b.p;j=0;c:{while(true){k=b.b4.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.s;if(c==j){c=Fm(g,c-1|0);d=FZ(g,c);}else{if(d!=j){Or(Z(a),a.d.n);break b;}c=Fm(g,d+1|0);d=FZ(g,c);}}}BY((Z(a)).bs,a.d.n,c);(Z(a)).cP=1;Cj(a,a.d.n,d,0);(Z(a)).cP=0;HQ(a);}}break a;case 3:break;default:break a;}Or(Z(a),a.d.n);Qs(a.d.fN);HQ(a);}}return 1;}
function AC4(a,b){var c,d,e,f,g,h,i,j,k;c=a.bG.c7;if(HD(a.es,b.u,c))return 1;if(HD(a.eu,b.u,c))return 1;d=a.c6;if(Fu(b.u,d.eT,d.ei)&&Fk(c)?1:0)return 1;e=b.u;f=!a.by?a.V.b+a.co|0:((a.V.b+a.b6|0)+a.bX|0)+CJ(a)|0;a:{g=a.V.a;h=C8(a);i=De(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Fk(c);if(b.cf){e=Ef(a,b.u);e.bf=Fm(BH(a.d.f,e.Y),e.bf);b=a.d.f;if(!ID(b.dc,e)&&!ID(b.cQ,e)?0:1)return Dw(c,C(116));}return Dw(c,C(117));}
function AMC(a,b){var c,d,e,f,g;c=b.cf;if(c&&b.bT==65){c=Ci(a.d.f)-1|0;d=E9(a.d.f,c);BY((Z(a)).bs,0,0);BY((Z(a)).bj,Ci(a.d.f)-1|0,d);return 1;}if(c&&b.bT==80){HY(a.d);return 1;}if(!a.ez&&c&&b.bT==90){if(CY(Z(a)))E4(a);b=a.d.f;b.b2=b.b2+1|0;e=b.gJ;d=e.j;if(!d)e=null;else{f=(E7(e,d-1|0)).data;e=L9(b,f[0]);c=1;while(c<f.length){L9(b,f[c]);c=c+1|0;}}if(e!==null){Cj(a,e.b,e.a,0);DG(a);}return 1;}if(!c&&!b.cH){if(B1(b.dN,C(118))){Dj(a,C(119));CR(a,a.d.s-1|0,0);c=1;}else if(B1(b.dN,C(120))){Dj(a,C(121));CR(a,a.d.s
-1|0,0);c=1;}else if(B1(b.dN,C(122))){Dj(a,C(123));CR(a,a.d.s-1|0,0);c=1;}else if(B1(b.dN,C(124))){Dj(a,C(125));CR(a,a.d.s-1|0,0);c=1;}else if(B1(b.dN,C(126))){Dj(a,C(127));CR(a,a.d.s-1|0,0);c=1;}else if(!B1(b.dN,C(128)))c=0;else{Dj(a,C(129));CR(a,a.d.s-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cH&&!b.cf)){d=b.bT;if(d>=48&&d<=57){c=d-48|0;e=a.lB.data[c];if(e!==null)e.t();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bT){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(YM(a,b))return 1;if(Zv(a,b))return 1;c=b.cf;if(c&&b.bT==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bT;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.cH&&!b.h$)return H(b.dN)>0&&Dj(a,b.dN)?1:0;return 0;}return 0;}
function RF(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=Ki(a);d=S0(a);if(b.dW!=3&&b.fO==3){e=S$(b.j_);f=new L5;f.pt=c;f.ps=d;g=new Pk;g.o6=f;while(!g.ji&&SV(e,g)){}if(!g.ji&&B1(C(130),DI(b))){c=Ba(0,c-100|0);d=Be(Ci(b.f)-1|0,d+100|0);Bu(b.j_,Cd(c,d));h=Bt(3);i=h.data;i[0]=Eo(b.f,c);e=b.f;j=0;d=Be(d+1|0,e.v.data.length);k=0;while(k<d){j=j+E9(e,k)|0;if(k!=(e.v.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.rY=D1();e=b.c$;l=new TT;l.oS=b;i=O(B,3);m=i.data;m[0]=EN(b.f);m[1]=h;b=b.f.cN;g=Bz();RX(b,b.cK,g);h
=Bt(3*g.j|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bo(g,o);d=k+1|0;n[k]=b.bC;q=d+1|0;n[d]=b.bF;k=q+1|0;n[q]=b.el;o=o+1|0;}m[2]=h;Ep(e,l,C(131),i);}}}
function Qf(a){AAh(a.d);}
function Ko(a,b,c){var d,e,f,g,h,i;if(c&&a.ez)return 0;d=Ds(Z(a));e=d.A;if(CY(Z(a))){f=a.d.f;g=Z(a);h=T8(f,g);if(c)LV(f,g,h);if(c){Cj(a,d.A,d.O,0);E4(a);DG(a);}}else{h=GX(EA(a.d.f.v.data[e]),C(111));i=Be(Ci(a.d.f)-1|0,e);BY((Z(a)).bj,i,0);if(e>=(Ci(a.d.f)-1|0))BY((Z(a)).bj,i,E9(a.d.f,i));else BY((Z(a)).bs,i+1|0,0);if(c)FG(a);else Cj(a,e,0,0);}b.m(h);return 1;}
function Zv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.ez)return 0;a:{switch(b.bT){case 8:if(CY(Z(a))){FG(a);c=1;}else{b=a.d;d=b.s;if(!d&&!b.n)c=1;else{if(d){e=b.n;c=d-1|0;LN(b.f,e,c);}else{e=b.n-1|0;c=E9(b.f,e);b=a.d.f;JW(b,e);EZ(b,e,E9(b,e),1,C(111));}DG(a);c=Cj(a,e,c,0);}}break a;case 9:if(!b.bv){if(!CY(Z(a)))Dj(a,a.ej);else{f=Ds(Z(a));g=E0(Z(a));c=g.A;d=f.A;e=(c-d|0)+1|0;h=Bt(e);i=h.data;j=O(Bv,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.ej;d=d+1|0;e=l;}b=new T3;m=a.d;Y9(b,m.n,m.s);m=new RA;m.nv=
a;Nf(a,h,0,0,j,b,m);f.O=f.O+H(a.ej)|0;g.O=g.O+H(a.ej)|0;Lb(a,a.d.s+H(a.ej)|0);DG(a);}c=1;}else b:{if(!CY(Z(a))){b=a.d;f=BH(b.f,b.n);if(f.k.data.length>0){g=Uo(a,f);if(g===null){c=1;break b;}m=a.d;n=m.f;e=m.n;b=Di(e,m.s);n.b2=n.b2+1|0;o=n.gJ;h=O(F3,1);h.data[0]=ALz(e,0,1,g,b.Y,b.bf);Bu(o,h);I4(n,e,0,1,g);FE(f,0,H(g));Lb(a,a.d.s-H(g)|0);}}else{b=Ds(Z(a));f=E0(Z(a));c=f.A;p=b.A;c=(c-p|0)+1|0;h=Bt(c);k=h.data;j=O(Bv,c);q=j.data;g=a.d;e=g.s;l=g.n;c=0;while(p<=f.A){g=BH(a.d.f,p);if(g.k.data.length>0){g=Uo(a,g);if
(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=H2(h,c);j=CX(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.A)b.O=Ba(0,b.O-H(g)|0);if(p==f.A){f.O=Ba(0,f.O-H(g)|0);Lb(a,a.d.s-H(g)|0);}d=d+1|0;}b=Di(l,e);f=new S9;f.pw=a;Nf(a,h,0,1,j,b,f);}DG(a);c=1;}break a;case 13:if(CY(Z(a)))FG(a);b=a.d;DY(BH(b.f,b.n));b=a.d;AAM(b.f,b.n,b.s);DG(a);c=Cj(a,a.d.n+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ABv(a);}return c;}
function YM(a,b){var c,d,e,f;a:{switch(b.bT){case 33:c=b.cf?GB(a,HH(a.bk,a.M),b.bv):GV(a,2-Uc(De(a),a.M)|0,0,b.cH,b.bv);break a;case 34:c=!b.cf?GV(a,Uc(De(a),a.M)-2|0,0,b.cH,b.bv):GB(a,((a.bk+De(a)|0)/a.M|0)-1|0,b.bv);break a;case 35:if(!G3(a,b.bv)&&!CR(a,(EW(a)).z,b.bv)){c=0;break a;}c=1;break a;case 36:if(!G3(a,b.bv)&&!CR(a,0,b.bv)){c=0;break a;}c=1;break a;case 37:c=b.cf;if(c&&b.cH){HQ(a);d=a.d.fN;e=d.c1;if(e<=0)d=null;else{f=d.d_.data;c=e-1|0;d.c1=c;d=f[c];}if(d===null)c=1;else{Cj(a,KA(d),IK(d),0);G8(Z(a),
d.i2);c=1;}break a;}c=QK(a,(-1),c,b.bv);break a;case 38:c=GV(a,(-1),b.cf,b.cH,b.bv);break a;case 39:c=b.cf;if(c&&b.cH){d=a.d.fN;e=d.c1;if(e==(d.d7-1|0))d=null;else{f=d.d_.data;c=e+1|0;d.c1=c;d=f[c];}if(d===null)c=1;else{Cj(a,KA(d),IK(d),0);G8(Z(a),d.i2);c=1;}break a;}c=QK(a,1,c,b.bv);break a;case 40:c=GV(a,1,b.cf,b.cH,b.bv);break a;default:}c=0;}if(c&&b.bv){b=(Z(a)).bj;d=a.d;BY(b,d.n,d.s);}if(c)JQ(a.d);return c;}
function HQ(a){var b,c,d,e,f,g,h;b=a.d;c=b.fN;d=c.c1;c=d<0?null:c.d_.data[d];if(c!==null&&b.n==KA(c)&&a.d.s==IK(c))return;c=a.d;e=c.fN;b=new JM;d=c.n;f=c.s;c=Z(a);b.kn=Di(d,f);g=AEj(c);b.i2=g;g.cP=0;f=e.c1;h=e.d7;if(f==(h-1|0))TH(e,b);else{d=f+1|0;while(d<h){Qs(e);d=d+1|0;}TH(e,b);}e.c1=e.c1+1|0;}
function DG(a){a.d.f.ro=Mw(Fb(a));}
function Sc(a,b){var c,d,e,f;a.uZ=null;a.c6.i1=Eb(0);V4(a.d);c=a.d;a.d=b;OR(c,null,null);OR(b,a,Fb(a));d=(Cc(a.eo.sW)).data;e=d.length;f=0;while(f<e){d[f].lF(c,b);f=f+1|0;}a.bk=Gx(b.i_*a.M);}
function RD(a,b){var c;c=Ku(a.d.f,b);if(c===null)return C(5);return c.p;}
function Cy(a){return a.d.vW;}
function Z(a){return a.d.nP;}
function Tq(a){var b;b=a.vI;if(b!==null)b.m(a);}
function Op(){B.call(this);this.vB=null;}
function ADl(a,b){return b.bT!=121?0:1;}
function Qj(){var a=this;B.call(a);a.mW=null;a.pa=null;a.os=null;}
function AFx(a,b){var c,d,e,f;if(b.cf&&b.bT==79){c=a.pa;if(c!==null&&b.bv){if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ABh(c,1);else{d=new UN;b=$rt_globals.window.showDirectoryPicker();e=new UM;e.oT=c;e.oU=d;b.then(Bi(e,"f"),Bi(d,"f"));}}else Um(a.mW,a.os);f=1;}else f=0;return f;}
var Bc=F(0);
function On(){B.call(this);this.tF=null;}
function AFF(a,b){LC(a.tF,b);}
function Oo(){B.call(this);this.n5=null;}
function MW(){B.call(this);this.o3=null;}
function MX(){B.call(this);this.un=null;}
function AG5(a,b,c,d){var e,f;b=a.un.cw;e=Dx((b.M*4|0)*d/150.0);f=Dx(c);if(e)E8(b,b.bk+e|0);if(f)HL(b,b.d.cV+f|0);return 1;}
function MV(){B.call(this);this.mH=null;}
function Zc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=b;c=a.mH;d=c.et;e=c.cw;if(e!==d.ed?0:1){d=c.eV;f=new Rq;f.wD=c;if(!Fq(d.bM)){g=d.bM;b=b.u;h=new RM;h.ey=d;h.bc=e;h.vj=f;h.hh=e;h.lD=c;h.iP=c;i=RQ();f=h.bc.d;c=DI(f);f=Fw(f);j=h.bc.eo;if(Ps(j,c,f)!==null){k=new QD;k.mA=h;k.mB=b;Dy(i,C(132),k);}if(KW(j,c,f)!==null){k=new QE;k.pM=h;k.pN=b;Dy(i,C(133),k);}if(St(j,c,f)!==null){f=new QC;f.l9=h;f.l$=b;Dy(i,C(134),f);}f=new QB;f.ta=h;f.s_=b;Dy(i,C(135),f);FP(h);if(Kr()){if(!h.bc.ez){f=new PK;f.tB=h;Dy(i,C(136),f);}f
=new PL;f.ok=h;Dy(i,C(137),f);if(!h.bc.ez){FP(h);if(Kr()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0){f=new PJ;f.rj=h;Dy(i,C(138),f);}}}f=RQ();l=O(Bv,4).data;l[0]=C(117);l[1]=C(130);l[2]=C(139);l[3]=C(140);m=l.length;n=0;while(n<m){j=l[n];o=new NU;o.mx=h;o.my=j;Dy(f,j,o);n=n+1|0;}E6(i,C(141),Hd(f));o=RQ();l=O(DC,3);p=l.data;f=h.iP;BV(f);k=new L_;k.nY=f;p[0]=Cv(C(142),k);f=h.iP;BV(f);k=new Ma;k.o2=f;p[1]=Cv(C(143),k);f=h.iP;BV(f);k=new L$;k.um=f;p[2]=Cv(C(144),k);JX(o,C(145),Gt(l),ARv);l=O(DC,2);p
=l.data;f=h.hh;BV(f);j=new UL;j.pC=f;p[0]=Cv(C(146),j);f=h.hh;BV(f);j=new UK;j.sK=f;p[1]=Cv(C(147),j);E6(o,C(148),Gt(l));c=new P$;c.rQ=h;JX(o,C(149),c,ARv);if(h.bc.bG.ds.kD){l=O(DC,2);p=l.data;c=new Q_;c.nA=h;p[0]=Cv(C(150),c);c=new Ra;c.oK=h;p[1]=Cv(C(151),c);E6(o,C(152),Gt(l));}E6(i,C(153),Hd(o));f=RQ();E6(f,C(154),Yw(h));o=new OK;o.uo=h;Dy(f,C(155),o);E6(i,C(156),Hd(f));OX(g,b,Hd(i),Py(d,e));}}return 1;}
function Mv(){B.call(this);this.sx=null;}
function AL4(a,b){var c,d;c=a.sx;d=b.bb;return MJ(c.charCodeAt(d)&65535);}
var Wx=F(0);
function AAt(b,c){var d,e,f,g,h,i,j,k,l,m;d=O(Bv,8);e=Eb(8);f=B2(16);g=0;h=0;i=0;while(true){j=BF(i,b);if(j>0)break;k=j>=0?10:(c.lM(Ct(i))).jq;if(k==10){d=AAv(DL(f,0,g),d,h);e=S7(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Mx(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AAv(DL(f,0,g),d,h);j=i+1|0;if(j<b&&(c.lM(Ct(j))).jq==10){e=S7(1,e,h);i=j;}else e=S7(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new PZ;d=XJ(d,h);if(m.length!=h)e=KP(e,h);c.hD=d;c.vx=e;return c;}
function ADA(b){var c,d;c=H(b);BV(b);d=new ML;d.rk=b;return AAt(c,d);}
function UO(){var a=this;B.call(a);a.rT=null;a.sD=null;a.ry=null;}
function Gl(){var a=this;B.call(a);a.bv=0;a.cf=0;a.cH=0;a.h$=0;}
function ARw(a,b,c,d){var e=new Gl();SA(e,a,b,c,d);return e;}
function SA(a,b,c,d,e){a.bv=d;a.cf=b;a.cH=c;a.h$=e;}
function NS(){var a=this;Gl.call(a);a.dN=null;a.bT=0;a.sh=0;a.wq=0;a.jd=0;}
var AAG=F();
function Uc(b,c){return (b+(c/2|0)|0)/c|0;}
function OM(b,c,d){if(b<(2147483647/c|0))return Uc(V(b,c),d);return 0.5+c*b/d|0;}
function HH(b,c){return ((b+c|0)-1|0)/c|0;}
function Gx(b){return b+0.5|0;}
function Dx(b){return b+0.5|0;}
function Fg(b,c,d){return Ba(b,Be(c,d));}
function Xx(b,c){return WS(b)/WS(c);}
function Lo(){var a=this;Gl.call(a);a.u=null;a.uS=null;}
var Ss=F(0);
function MB(){var a=this;B.call(a);a.tG=null;a.tH=null;}
function AHo(a,b){var c,d;c=a.tG;d=a.tH;$rt_globals.console.info("paste plain string "+b);b=Eu(b);Dj(c.m4,b);CV(d);}
function S4(){B.call(this);this.ud=null;}
function ALu(a,b){a.ud.clipboardData.setData("text/plain",$rt_ustr(b));}
function UX(){var a=this;IT.call(a);a.wg=0;a.mk=0;}
var Xb=F(0);
function IX(b,c,d,e,f){Cb(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function SG(){var a=this;B.call(a);a.ds=null;a.gf=null;a.c7=null;a.cA=null;a.bW=0.0;a.cx=0;a.ed=null;a.jw=null;a.dT=null;a.sV=null;a.uK=null;a.uL=null;}
function IE(a){var b;b=a.ed;if(b!==null)b.rV();}
function I2(a){var b;b=a.ed;if(b!==null)b.uA();}
function HP(a,b){I2(a);a.ed=b;IE(a);}
function KY(a){return a.ds.dd;}
function HX(a,b){return F7(a.ds,b.iH,Cn(b.hj,a.bW),400,0);}
function Ck(a,b){return Cn(b,a.bW);}
var QO=F();
function AF4(a,b){var c,d,e;c=b.cf;d=c&&!b.bv&&!b.cH&&!b.h$?1:0;a:{if(d){d=b.bT;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bv&&!c&&!b.cH&&!b.h$?1:0;d=d&&b.bT==46?1:0;}b:{if(!d){e=b.bT;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.jd=1;}return 0;}
function QN(){B.call(this);this.nw=null;}
function ADW(a,b){var c;c=a.nw.ed;return c!==null&&c.jz(b)?1:0;}
var HR=F(0);
function Vd(){B.call(this);this.c3=null;}
function WA(a,b){Qn(a.c3,0,b);}
function TY(){var a=this;B.call(a);a.cz=null;a.b9=null;a.h7=null;a.it=null;a.la=null;a.iI=null;}
function OX(a,b,c,d){var e,f;e=a.cz;f=e.cA;if(V(f.b,f.a)&&e.bW!==0.0){if(a.h7!==null&&!Fq(a)){a.iI=d;a.it=HX(a.cz,a.h7);e=Ne(a,b,c,null);b=new TO;b.rr=a;e.sB=b;HP(a.cz,a);return;}b=new BJ;W(b);J(b);}c=new Dg;Br(c,C(157));J(c);}
function Dp(a){var b;if(Fq(a)){b=a.cz;if(b.ed===a)b.ed=null;R5(a,null);a.iI.t();a.iI=ARn;}}
function UW(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new Rz;f.b1=AHu();f.e9=new Bp;f.fF=new Bp;f.cb=ARx;f.hL=(-1);f.ic=1;f.fA=1;c=c.t$();Kv(f);f.cb=c;Pr(f,a.la);ON(f,a.it,a.cz);if(d===null)g=b.b;else{g=b.b;g=a.cz.cA.b<((g+(EI(d)).b|0)+(EI(f)).b|0)?g-(EI(f)).b|0:(g+(EI(d)).b|0)-d.eI|0;}h=b.a;b=a.cz.cA;i=Ba(0,Be(g,b.b-(EI(f)).b|0));g=Ba(0,Be(h,b.a-(EI(f)).a|0));Bn(f.b1.cG,i,g);j=f.cu+f.eI|0;k=f.cb.data;h=k.length;l=0;m=j;while(l<h){c=k[l];b=c.dJ;b.b=i+j|0;b.a=g+m|0;if(!f.fA){if(!c.c8.b)WO();j=j+(c.c8.b+f.cu|0)|0;}else
{if(!c.c8.a)WO();m=m+(c.c8.a+f.cu|0)|0;}l=l+1|0;}b=new Vi;b.oa=a;b.ob=f;b.oc=e;f.op=b;Bu(a.b9,f);return f;}
function Ne(a,b,c,d){return UW(a,b,c,d,null);}
function AHM(a,b){var c;if(!Fq(a))return 0;a:{switch(b.bT){case 27:Dp(a);c=1;break a;default:}c=0;}return c;}
function Yo(b,c){var d,e,f;d=b.dJ;e=c.cu;f=c.eI;return Cd((d.b-(e*3|0)|0)-f|0,(d.a-e|0)-f|0);}
function R5(a,b){var c,d;c=a.b9.j-1|0;a:{while(true){if(c<0)break a;d=Bo(a.b9,c);if(b===d)break;E7(a.b9,c);d.eL=CZ(d.eL,null);Bn(d.e9,0,0);d.cb=ARx;d.hL=(-1);RS(d.b1);c=c+(-1)|0;}}}
function Fq(a){return a.b9.j<=0?0:1;}
function Ou(){var a=this;B.call(a);a.dR=null;a.jl=0.0;a.gu=0.0;a.fv=0;}
function U6(a){return a.dR.bp.a;}
function RI(a){return a.dR.bp.b;}
function AAd(a,b,c){var d,e,f;if(a.fv){d=a.dR;e=c.b;f=c.a;c=d.cG;BC(b,c.b+e|0,c.a+f|0,d.bp,d.eR);}}
function JS(){var a=this;B.call(a);a.ls=null;a.vb=null;a.vq=0.0;a.oy=0;a.vy=0;a.v1=0;a.qm=0;a.wY=0;a.d2=0.0;a.dE=0.0;a.vm=0.0;a.lg=0.0;a.vu=0;a.mE=null;}
function Fj(a){return Dx(a.d2+a.dE);}
function OE(a,b){return Dx((a.d2+a.dE)*b);}
function Vw(){var a=this;B.call(a);a.eN=null;a.f=null;a.kV=null;a.nP=null;a.fN=null;a.hJ=null;a.c$=null;a.vW=null;a.n=0;a.s=0;a.gk=0;a.gU=null;a.gD=null;a.lV=null;a.j_=null;a.dW=0;a.fO=0;a.f4=0;a.g2=AAq;a.rY=AAq;a.s$=AAq;a.uW=0;a.vS=0;a.cV=0;a.i_=0.0;a.ek=0;}
function ARy(a,b,c){var d=new Vw();WJ(d,a,b,c);return d;}
function AEd(a,b,c){var d=new Vw();ABq(d,a,b,c);return d;}
function WJ(a,b,c,d){ABq(a,b.hD,c,d);}
function ABq(a,b,c,d){var e,f,g,h,i,j;b=b.data;a.nP=AC9();e=new Sz;e.d_=O(JM,16);e.d7=0;e.c1=(-1);a.fN=e;a.gU=null;a.gD=Bz();a.lV=FR();a.j_=Bz();a.dW=1;a.fO=1;a.f4=1;a.cV=0;a.i_=0.0;a.ek=0;a.eN=d;a.kV=c;c=new Qk;f=b.length;g=O(CK,Ba(1,f));if(!f)g.data[0]=Xg(C(5));h=g.data;i=0;while(i<f){h[i]=Xg(b[i]);i=i+1|0;}d=new Oe;e=new JJ;Oy(e);d.dU=e;c.dI=d;c.dc=FR();c.cQ=FR();c.gJ=Bz();if(!h.length){c=new BJ;W(c);J(c);}c.v=g;j=Tj(c);c.cN=AAo(AMc(IL(0,j,0),null,null));a.f=c;}
function DI(a){var b;b=a.kV;if(b===null){b=a.eN;if(b===null)b=C(117);else{b=b.e4;b=b===null?C(117):!Dz(b,C(158))&&!Dz(b,C(159))&&!Dz(b,C(160))&&!Dz(b,C(161))&&!Dz(b,C(162))&&!Dz(b,C(163))?(Dz(b,C(164))?C(130):Dz(b,C(165))?C(166):!Dz(b,C(167))?C(117):C(140)):C(139);}}return b;}
function Fw(a){var b;b=a.eN;return b===null?null:b.hT;}
function Gq(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.fO=3;a.f4=3;a.dW=3;c=CQ(b[0]);d=D5(b[1]);if((CQ(b[2])).data[0]==4){e=GA(D5(b[3]));Dn(a.lV,C(168),e);Km(a.f,c,d);}else if(b.length<5)Km(a.f,c,d);else{f=CQ(b[3]);g=f.data;h=D5(b[4]);MY(a.f,c,d,f,h,0);ST(a,H2(f,g.length),KO(h));}if(a.ek){e=DZ(a);i=Jj(D1(),a.g2);j=new R;T(j);K(FD(K(K(j,e),C(169)),i),C(170));$rt_globals.console.info($rt_ustr(S(j)));}e=a.hJ;if(e!==null)Tq(e);}
function JQ(a){var b;Rh(a,Di(a.n,a.s),HE(a.f,a.n,a.s));if(!(a.gU!==null&&!DO(a.gD))){b=a.s;if(b>0)Rh(a,Di(a.n,b-1|0),HE(a.f,a.n,a.s-1|0));}}
function Rh(a,b,c){var d,e,f,g,h,i,j,k;V4(a);d=B7(a.f.dc,c);if(d!==null)c=d;a:{e=B7(a.f.cQ,c);if(e!==null){a.gU=Ku(a.f,c);c=BM(e);while(true){if(!BN(c))break a;f=BR(c);Bu(a.gD,Ku(a.f,f));}}}c=a.hJ;if(c!==null){g=b.Y;h=b.bf;b=c.eo;f=DI(c.d);e=Fw(c.d);i=(Cc(b.to)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.tq(f,e)){b=b.xr;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new Q$;e.wP=c;e.wO=f;e.wR=g;e.wQ=h;b.qM(f,g,h,e,c.hc);}}}
function V4(a){a.gU=null;GH(a.gD);}
function ST(a,b,c){var d,e,f,g,h;if(a.c$!==null){a.s$=D1();d=a.f.b2;e=a.c$;f=new N7;f.qe=a;g=O(B,3);h=g.data;h[0]=b;h[1]=c;b=Bt(1);b.data[0]=d;h[2]=b;Ep(e,f,C(171),g);}}
function OR(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.hJ=b;a.c$=c;if(c===null){d=a.f.v.data;e=d.length;f=0;while(f<e){R2(d[f]);f=f+1|0;}}else if(a.dW==1){a.g2=D1();b=DI(a);e=BB(b,C(130));f=BB(b,C(140));d=EN(a.f);g=d.data.length;h=!e?5120:10240;i=Wz(b);if(f){j=a.c$;b=new Qd;b.mf=a;k=O(B,2);l=k.data;l[0]=d;d=Bt(1);d.data[0]=i;l[1]=d;UH(j,b,0,C(172),k);a.dW=2;}else if(g<=h)Jq(a,d,i);else if(!e){U5(a,KO(d),i);Jq(a,d,i);}else{U5(a,KO(d),i);m=KO(d);c=a.c$;j=new OZ;j.qg=a;k=O(B,2);l=k.data;l[0]=m;m=Bt(1);m.data[0]=i;l[1]=m;Ep(c,
j,C(173),k);a.fO=2;Jq(a,d,i);}}}
function U5(a,b,c){var d,e;d=a.c$;e=new Uf;e.qz=a;Ep(d,e,C(174),G(B,[b,Fv([c,250])]));a.f4=2;}
function Jq(a,b,c){var d,e,f,g;d=a.c$;e=new Mm;e.oe=a;f=O(B,2);g=f.data;g[0]=b;b=Bt(1);b.data[0]=c;g[1]=b;Ep(d,e,C(172),f);a.dW=2;}
function DZ(a){var b;b=a.eN;return b===null?C(5):Tp(b);}
function HY(a){var b,c,d,e,f,g;if(a.ek){b=DZ(a);c=new R;T(c);K(K(c,b),C(175));$rt_globals.console.info($rt_ustr(S(c)));}b=DI(a);if(b===null)d=null;else{a:{e=(-1);switch(J0(b)){case -1655966961:if(!B1(b,C(140)))break a;e=3;break a;case 3401:if(!B1(b,C(166)))break a;e=2;break a;case 98723:if(!B1(b,C(139)))break a;e=1;break a;case 3254818:if(!B1(b,C(130)))break a;e=0;break a;case 3556653:if(!B1(b,C(117)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(176);break b;case 2:d=C(177);break b;case 3:d
=C(178);break b;case 4:d=C(179);break b;default:d=null;break b;}d=C(180);}}if(d===null)Tq(a.hJ);else{a.g2=D1();if(!B1(d,C(178))){b=a.c$;f=new R7;f.sY=a;g=O(B,1);g.data[0]=EN(a.f);Ep(b,f,d,g);}else{b=a.c$;c=new R8;c.rJ=a;g=O(B,1);g.data[0]=EN(a.f);UH(b,c,0,d,g);}}}
function AAh(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(a.ek){b=DZ(a);c=new R;T(c);K(K(c,b),C(181));$rt_globals.console.info($rt_ustr(S(c)));}b=DI(a);if(b!==null&&!B1(C(117),b)){if(B1(C(140),b)){HY(a);GE(a.f);}else{c=a.f.cN;d=Ol(c,c.cK);if(d===null){KN(a);GE(a.f);return;}e=Fv([CN(d),CL(d),d.bD.el]);f=EN(a.f);g=Bt(1);g.data[0]=Wz(b);c=a.f.dI;if(c.fb===null){h=Bt(0);i=B2(0);}else{j=ANb(AD$(d.b_,c.dU),d);Ml(j);h=j.i8;i=j.jm;}k=a.f.b2;d=a.c$;c=new Lz;c.se=a;l=O(B,6);m=l.data;m[0]=f;m[1]=g;m[2]=e;e=Bt(1);e.data[0]=k;m[3]
=e;m[4]=h;m[5]=i;Ep(d,c,C(182),l);}}else GE(a.f);}
function KN(a){var b;b=ANb(a.f.dI,null);Ml(b);ST(a,b.i8,b.jm);}
function Vj(){var a=this;B.call(a);a.oR=null;a.uq=null;a.mh=null;a.to=null;a.sW=null;a.sF=null;}
function KW(a,b,c){return PP(a,Cc(a.oR),b,c);}
function Ps(a,b,c){return PP(a,Cc(a.uq),b,c);}
function PP(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.tq(c,d))return g.we;f=f+1|0;}return null;}
function St(a,b,c){var d,e,f,g;d=(Cc(a.mh)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.tq(b,c))return g.v6;f=f+1|0;}return null;}
function EK(){var a=this;B.call(a);a.bL=0;a.cX=null;a.ee=null;a.bx=null;a.dn=0;a.c0=0;}
var ARz=0;var ARt=0;function Wh(a,b,c,d,e,f,g){var h,i,j,k,l;h=a.bx;i=h===b&&!h.f9?0:1;if(i){a.bx=b;Jn(b,d.dd,a.cX.jD);}h=a.bx;j=h===null?0:Eq(h)<f?HH(Eq(a.bx),1024):HH(f,1024)+1|0;k=j<=a.dn?0:1;if(k)a.dn=j;if(!(!i&&!k)){if(ARz){l=b.e6;$rt_globals.console.info("fMeasure"+l.data);ARz=0;}if(!ARt){h=c.c5;b="alphabetic";h.textBaseline=b;}else{b=c.c5;h="top";b.textBaseline=h;}a.c0=g/1024|0;while(true){b=a.ee;if(b.j>=a.dn)break;Bu(b,Gv(d));}f=0;while(f<a.dn){HJ(a,c,e,a.c0+f|0);f=f+1|0;}a.bx.f9=0;}if(!DO(a.ee)&&g<=
Eq(a.bx)){j=g/1024|0;f=a.c0;if(j!=f){f=j-f|0;if(f<0)f= -f|0;if(f>=a.dn){f=0;while(f<a.dn){HJ(a,c,e,j+f|0);f=f+1|0;}a.c0=j;}else{while(true){g=a.c0;if(g>=j)break;HJ(a,c,e,g+a.dn|0);a.c0=a.c0+1|0;}while(true){g=a.c0;if(g<=j)break;HJ(a,c,e,g-1|0);a.c0=a.c0-1|0;}}}}}
function JD(b,c){return (c-Fj(b)|0)/2|0;}
function LR(b,c){return JD(b,c)+b.qm|0;}
function HJ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;Fh(b);e=a.bx.e6;f=d*1024|0;g=N0(a,f);if(g>=a.bx.k.data.length)return;h=!g?0.0:e.data[g-1|0];i=f;j=h-i+a.bL;k=a.cX.jD;a:{while(true){l=a.bx.k.data;if(g>=l.length)break a;m=k.data;n=l[g];o=m[Il(n)];p=!ARt?LR(o,c):JD(o,c);m=e.data;CF(b,o);Ej(b,n.p,j,p);j=m[g]-i+a.bL;if(j>1024.0)break;g=g+1|0;}}Em(Bo(a.ee,d%a.dn|0),b);}
function Xs(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq;if(DO(a.ee))return;if(!a.dn)return;if(g>Eq(a.bx))return;o=a.bx;p=o.dY;q=o.k;r=g/1024|0;s=N0(a,g);t= -a.bL|0;u=f;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=e)break;y=p.data;o=Bo(a.ee,r%a.dn|0);z=v[s];ba=y[s]+a.bL|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=Be(be,ba)-g|0;if(bc&&x)bf=bf+a.bL|0;if((t+bf|0)>e)bf=e-t|0;bg=i!==null?0:1;b:{if(!bg){bh
=!x?a.bL:2*a.bL|0;bi=i.b;w=i.a;if(!(bi<w&&g<=w&&(g+bf|0)>(bi+bh|0)?0:1)){bj=0;break b;}}bj=1;}c:{if(!bg){bk=!x?a.bL:2*a.bL|0;if(g>=i.b&&(g+bf|0)<=(i.a+bk|0)?1:0){bl=1;break c;}}bl=0;}bm=null;if(l&&!m)bm=h.bI.hB;if(z===j)bm=h.bI.nK;bn=BM(k);d:{while(BN(bn)){if(BB(BR(bn),z)){bi=1;break d;}}bi=0;}if(bi)bm=h.bI.us;if(n!==null){v=n.wn;if(v===null)bh=0;else{v=v.data;bh=s>=v.length?0:v[s];}bm=Wc(h.dA,h,bh,n.jI);}if(!bl&&!bj){i.a=Be(i.a,Eq(a.bx));Ze(a,d,t+c|0,b,f,h,o,z,bf,g>=i.b?bf:(Be(ba,be)-i.b|0)-(!x?a.bL:0)|0,(g
+bf|0)<=(i.a+(!x?a.bL:2*a.bL|0)|0)?0:(Be(ba,be)-i.a|0)-(!x?a.bL:0)|0,g-bb|0,bm);}else{Cb(a.cX.iG,g-bb|0,0.0,bf,u);Bn(a.cX.fU,bf,f);GQ(a,d,t+c|0,b,z,o,h,bm,bl);}if((z.bB&12)>0){bi=t+c|0;DP(d,1);o=a.cX;bo=o.jB;bo.b=bf;w=b+o.tS|0;bk=w-o.t5|0;bp=o.rd;bq=w+bp;bm=o.gW;Tc();bn=ARA.hl.hC;Hp(d,d.g5);H4(d.g5,d.ba,bi,bk,bo,d.c_);Z3(d.g5,d.ba,bp,bq,bm);o=d.g5;Hq(d.ba,o.ms,bn);Hj(d);DP(d,0);}g=g+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function Ze(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s;n=a.cX.iG;o=l;p=i-j|0;q=p;r=e;Cb(n,o,0.0,q,r);Bn(a.cX.fU,p,e);GQ(a,b,c,d,h,g,f,m,0);l=l+i|0;Cb(n,l-k|0,0.0,k,r);Bn(a.cX.fU,k,e);c=c+i|0;GQ(a,b,c-k|0,d,h,g,f,m,0);s=l-j|0;i=j-k|0;Cb(n,s,0.0,i,r);Bn(a.cX.fU,i,e);GQ(a,b,c-j|0,d,h,g,f,m,1);}
function GQ(a,b,c,d,e,f,g,h,i){var j,k,l,m,n;j=a.cX;k=j.fU;if(k.b&&k.a){l=j.iG;if(l.bV!==0.0&&l.Z!==0.0){m=g.rF.data[e.bR];if(i)n=g.bI.lv;else{n=m.nB;if(n===null)n=g.bI.fQ;if(h!==null)n=h;}if(j.lx)Ek(b,c,d,k,l,f,m.hC,n);else Eh(b,c,d,k,l,f,m.hC,n,j.k4);return;}return;}}
function N0(a,b){var c,d,e,f,g,h,i;c=a.bx;d=c.e6;e=0;f=c.k.data.length;g=b;b=BF(e,f);if(b>0){c=new BJ;W(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BF(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function VE(a){a.bx=null;DN(a.ee,new R$);GH(a.ee);}
function Xz(a,b,c,d,e,f,g,h,i){var j,k;j=Eq(a.bx);if(j)j=j+a.bL|0;if(!j)j=j-a.bL|0;k=Ba( -a.bL|0,j-g|0);if(k>=h)return;Bn(f,h-k|0,e);BC(b,c+k|0,d,f,i);}
function XF(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a:{h=c.data;i=O(EK,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=BH(g,e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.bx===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}c=i.data;e=0;f=c.length;while(e<f){if(c[e]===null){if(j>=k)p=null;else{b=j+1|0;p=h[j];j=b;}while(j<k&&p===null){b=j+1|0;p=h[j];j=b;}if(p!==null){c[e]=p;h[j-1|0]=null;}else{o=new EK;o.bL=3;o.ee=Bz();o.c0=0;o.cX=d;c[e]=o;}}e=e+1|0;}while(j<k){p=h[j];if(p!==null)VE(p);j=j+1|0;}return i;}
function Zh(){ARt=0;}
function ABl(){var a=this;B.call(a);a.eE=null;a.cD=null;a.dK=null;a.d5=null;a.ho=null;a.hp=null;}
function Ts(){var a=new ABl();AGK(a);return a;}
function AGK(a){a.eE=new Bp;a.cD=new Bp;a.dK=new Bp;a.d5=new Bp;a.ho=new B4;a.hp=new B4;}
function PU(a){var b;b=a.cD;return !V(b.b,b.a)?0:1;}
function G0(a,b){return Fu(b,a.dK,a.d5);}
function Hm(a,b,c,d){var e,f,g,h,i;e=G0(a,b);f=Fu(b,a.eE,a.cD);if(!e&&!f)return null;if(!f){if(!d)c.m(Us(a,b.b-a.dK.b|0));else c.m(Oq(a,b.a-a.dK.a|0));}g=!d?a.eE.b+(a.cD.b/2|0)|0:a.eE.a+(a.cD.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new QX;b.tO=a;b.tP=c;b.tN=i;}else{b=new QW;b.n9=a;b.n7=c;b.n8=i;}return b;}
function F8(a,b,c){if(b!==null&&c!==null){Fd(a.ho,c);Fd(a.hp,b);return;}}
function X_(b,c){var d;d=new SE;d.qo=b;d.uD=c;return d;}
function Oq(a,b){var c,d,e;c=a.d5.a;d=a.cD.a;e=c-d|0;return X_(Be(Ba(0,b-(d/2|0)|0),e),e);}
function Us(a,b){var c,d,e;c=a.d5.b;d=a.cD.b;e=c-d|0;return X_(Be(Ba(0,b-(d/2|0)|0),e),e);}
function Vu(a,b,c,d,e,f,g){UP(a,b,c,d,e,f,g,1);}
function Pw(a,b,c,d,e,f,g){UP(a,b,c,d,e,f,g,0);}
function UP(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bn(a.d5,0,0);Bn(a.cD,0,0);}else{i=Be(g*3|0,d);j=Ba(OM(d,d,e),i);e=e-d|0;i=d-j|0;i=i?OM(b,i,e):0;if(!h){k=a.eE;k.b=i+c|0;k.a=f-g|0;l=a.cD;l.b=j;l.a=g;l=a.dK;l.b=c;l.a=k.a;k=a.d5;k.b=d;k.a=g;}else{k=a.eE;k.b=f-g|0;k.a=i+c|0;l=a.cD;l.b=g;l.a=j;l=a.dK;l.b=k.b;l.a=c;k=a.d5;k.b=g;k.a=d;}}}
function G_(a,b){var c;c=a.dK;BC(b,c.b,c.a,a.d5,a.ho);}
function Hf(a,b){var c,d;c=a.cD;c.b=c.b-2|0;c.a=c.a-2|0;d=a.eE;BC(b,d.b+1|0,d.a+1|0,c,a.hp);b=a.cD;b.b=b.b+2|0;b.a=b.a+2|0;}
function HD(a,b,c){return G0(a,b)&&Fk(c)?1:0;}
function XW(){var a=this;B.call(a);a.wr=20;a.eT=null;a.ei=null;a.hR=0.0;a.hK=null;a.lf=0;a.ii=0;a.ch=null;a.i1=null;a.d4=null;a.e2=null;a.eZ=0;}
function AMo(){var a=new XW();AMH(a);return a;}
function AMH(a){a.wr=20;a.eT=new Bp;a.ei=new Bp;a.ch=Bz();a.i1=Eb(0);}
function Z9(a,b,c,d,e){var f,g,h,i,j,k;f=c/20|0;g=a.ch;h=Bo(g,f%g.j|0);i=a.eT;j=V(a.ch.j,a.ii);f=h.ef.a;k=((h.g7.a-(b%j|0)|0)+j|0)%j|0;if((k+f|0)>j)k= -(b%Kn(h.W)|0)|0;b=c%h.dp|0;f=h.H;k=k+V(b,f)|0;if(k<( -f|0))k=k+j|0;Bn(h.cR,h.ef.b,f);g=h.dx;b=c%h.dp|0;c=h.H;Cb(g,0.0,V(b,c),h.ef.b,c);Ed(h,e,k,i,d.nL,d.l4);}
function RH(a,b,c,d){var e,f,g,h,i,j;e=a.ch.j;while(true){f=a.ch.j;g=V(f,a.ii);if(g>(d+a.lf|0))break;h=Cd(0,g);i=new Ox;g=a.ei.b;f=a.lf;j=a.hK;i.cR=new Bp;i.dx=new B4;i.g7=h;i.dp=20;i.H=f;i.ef=Cd(g,20*f|0);i.fV=LR(j,f);if(i.W===null)i.W=Gv(b);Bu(a.ch,i);}if(f==e)return;Ql(a,c);}
function Ql(a,b){var c,d,e,f,g,h,i,j,k;c=a.ch;d=c.j;e=V((b/(d*20|0)|0)+1|0,d)*20|0;c=BM(c);while(BN(c)){f=BR(c);g=a.d4;h=a.hR;Fh(g);i=0;while(true){j=f.dp;if(i>=j)break;k=e-V(d,j)|0;if(k<b)k=e;e=k+1|0;Fy(f,g,DX(e),V(f.H,i)+f.fV|0,h);i=i+1|0;}Em(f.W,g);f.mi=g.jf;}}
function IS(a){DN(a.ch,new Ly);GH(a.ch);a.d4=CZ(a.d4,null);a.e2=CZ(a.e2,null);}
function MQ(){B.call(this);this.wN=null;}
function MP(){B.call(this);this.lZ=null;}
function AC8(a,b){var c;c=a.lZ;E8(c,GP(b,IU(c)));}
function MO(){B.call(this);this.p9=null;}
function ACi(a,b){var c;c=a.p9;HL(c,GP(b,RN(c)));}
function Tb(){var a=this;B.call(a);a.iG=null;a.fU=null;a.jB=null;a.gW=null;a.jD=null;a.k4=0.0;a.rd=0.0;a.uM=0;a.tS=0;a.t5=0;a.lx=0;}
function MN(){B.call(this);this.s7=null;}
function ACh(a){var b,c;b=a.s7;c=b.i3?0:1;b.i3=c;b.ff.k4=!c?0.0:0.5;b=new R;T(b);GG(K(b,C(183)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function MU(){B.call(this);this.nC=null;}
function AFw(a){var b,c;b=a.nC;c=b.hs?0:1;b.hs=c;b=new R;T(b);GG(K(b,C(184)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function MT(){B.call(this);this.rc=null;}
function ANy(a){var b,c;b=a.rc;c=b.iK^1;b.iK=c;b=new R;T(b);GG(K(b,C(185)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function MS(){B.call(this);this.uB=null;}
function AHC(a){var b,c,d,e,f;b=a.uB;c=(b.dq+3|0)%6|0;b.dq=c;d=b.e8.data;e=d.length;f=0;while(f<e){b=d[f];b.bL=c;b=b.bx;if(b!==null)b.f9=1;f=f+1|0;}}
function MR(){B.call(this);this.nh=null;}
function AJK(a){var b;b=a.nh;b.by=b.by?0:1;IS(b.c6);b.c6=AMo();Rw(b,b.V,b.cr,b.bG.bW);}
function MM(){B.call(this);this.qu=null;}
function AM1(a){var b;b=a.qu;b.ib=b.ib?0:1;}
function MK(){B.call(this);this.ty=null;}
function AB$(a){var b;b=a.ty;b.k1=b.k1?0:1;}
var EV=F(Cg);
var ARr=null;var ARB=null;var ARs=null;var ARC=null;function ACf(){ACf=Bf(EV);AIB();}
function Zq(a,b){var c=new EV();Zf(c,a,b);return c;}
function Zf(a,b,c){ACf();C4(a,b,c);}
function AIB(){var b;ARr=Zq(C(186),0);ARB=Zq(C(187),1);b=Zq(C(188),2);ARs=b;ARC=G(EV,[ARr,ARB,b]);}
var AAx=F(0);
function TJ(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=CX(b,f+g|0);C7(c,0,d,f,g);return d;}
function JN(b,c,d){C7(b,c,d,0,d.data.length);return d;}
function P_(b,c,d){var e;if(c>0)C7(b,0,d,0,c);e=d.data.length;if(c<e)C7(b,c+1|0,d,c,e-c|0);return d;}
function Yr(b,c,d,e){var f;if(c>0)C7(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)C7(b,d,e,c,f-d|0);}return e;}
function Gt(b){var c;c=new TV;c.qw=b;return c;}
function XJ(b,c){if(b.data.length!=c)b=CX(b,c);return b;}
function AAv(b,c,d){var e;e=c.data.length;if(e==d)c=CX(c,e*2|0);c.data[d]=b;return c;}
function S7(b,c,d){var e;e=c.data.length;if(e==d)c=KP(c,e*2|0);c.data[d]=b;return c;}
function KO(b){return Mx(b,b.data.length);}
var W1=F();
function Mx(b,c){var d,e,f,g;b=b.data;d=B2(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function KP(b,c){var d,e,f,g;b=b.data;d=Eb(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function H2(b,c){var d,e,f,g;b=b.data;d=Bt(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function CX(b,c){var d,e,f,g;d=b.data;e=Z5(Hi(Bw(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function GI(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BJ;W(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Xq(b,c,d,e){var f,g;if(c>d){e=new BJ;W(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function X4(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AQM;e=O(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.tZ(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function Zx(b,c){return Se(b,0,b.data.length,c);}
function Se(b,c,d,e){var f,g,h,i,j;f=BF(c,d);if(f>0){g=new BJ;W(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function B4(){var a=this;B.call(a);a.bl=0.0;a.bA=0.0;a.Z=0.0;a.bV=0.0;}
function Cb(a,b,c,d,e){a.bl=b;a.bA=c;a.Z=d;a.bV=e;}
function Fd(a,b){a.bl=b.bl;a.bA=b.bA;a.Z=b.Z;a.bV=b.bV;return a;}
function ANf(a,b){if(a===b)return 1;return b!==null&&Bw(a)===Bw(b)&&Jl(a,b)?1:0;}
function Jl(a,b){return b.bl===a.bl&&b.bA===a.bA&&b.Z===a.Z&&b.bV===a.bV?1:0;}
var Ll=F(0);
function Fk(a){return Dw(a,null);}
function O2(){B.call(this);this.qH=null;}
function AGh(a){IE(a.qH);}
function O1(){B.call(this);this.ua=null;}
function AB3(a){I2(a.ua);}
var J8=F(0);
function W4(){var a=this;D8.call(a);a.cd=null;a.j=0;}
function Bz(){var a=new W4();AFy(a);return a;}
function AFy(a){a.cd=O(B,10);}
function Iq(a,b){var c,d;c=a.cd.data.length;if(c<b){d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.cd=CX(a.cd,d);}}
function Bo(a,b){Id(a,b);return a.cd.data[b];}
function AJn(a){return a.j;}
function Bu(a,b){var c,d;Iq(a,a.j+1|0);c=a.cd.data;d=a.j;a.j=d+1|0;c[d]=b;a.bH=a.bH+1|0;return 1;}
function Qn(a,b,c){var d,e,f;Oc(a,b);Iq(a,a.j+1|0);d=a.j;e=d;while(e>b){f=a.cd.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cd.data[b]=c;a.j=d+1|0;a.bH=a.bH+1|0;}
function E7(a,b){var c,d,e,f;Id(a,b);c=a.cd.data;d=c[b];e=a.j-1|0;a.j=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.bH=a.bH+1|0;return d;}
function TS(a,b){var c;c=I_(a,b);if(c<0)return 0;E7(a,c);return 1;}
function GH(a){Xq(a.cd,0,a.j,null);a.j=0;a.bH=a.bH+1|0;}
function Xr(a,b,c){var d,e,f,g,h,i;Oc(a,b);if(c.dB())return 0;Iq(a,a.j+c.cq()|0);d=c.cq();e=a.j;f=e-1|0;while(f>=b){g=a.cd.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.j=e+d|0;h=c.bQ();i=0;while(i<d){g=a.cd.data;e=b+1|0;g[b]=h.bJ();i=i+1|0;b=e;}a.bH=a.bH+1|0;return 1;}
function Id(a,b){var c;if(b>=0&&b<a.j)return;c=new BU;W(c);J(c);}
function Oc(a,b){var c;if(b>=0&&b<=a.j)return;c=new BU;W(c);J(c);}
function DN(a,b){var c;c=0;while(c<a.j){b.m(a.cd.data[c]);c=c+1|0;}}
var VW=F(0);
var ARn=null;function AAJ(){ARn=new MC;}
function Vs(){var a=this;B.call(a);a.cG=null;a.bp=null;a.eR=null;a.hg=null;}
function AHu(){var a=new Vs();AJ_(a);return a;}
function AJ_(a){a.cG=new Bp;a.bp=new Bp;a.eR=new B4;a.hg=new B4;}
function RS(a){Bn(a.bp,0,0);}
function Jc(a){var b;b=a.bp;return V(b.b,b.a)?0:1;}
function G$(a,b){return Fu(b,a.cG,a.bp);}
var EE=F();
function I9(){EE.call(this);this.we=null;}
function RB(){EE.call(this);this.v6=null;}
function OV(){EE.call(this);this.xr=null;}
var Ga=F(0);
var Rg=F(0);
var OF=F(0);
var ARo=0.0;function RR(b){Cb(b,1.0471975803375244,0.75,1.25,0.375);}
function WG(){ARo=Xx(Xx(0.5,0.375),4.0);}
var ZB=F();
function Jg(){B.call(this);this.wE=null;}
var AQO=null;var ARD=null;function AGL(){AGL=Bf(Jg);ANm();}
function AEV(a){var b=new Jg();Wk(b,a);return b;}
function Wk(a,b){AGL();a.wE=b;}
function ANm(){AQO=AEV(C(189));ARD=AEV(C(190));}
function Qx(){B.call(this);this.tg=null;}
function Dw(a,b){var c,d,e;c=a.tg;d=c.qv;e=c.dl;if(BB(b,d))b=d;else{e=e.style;if(b!==null&&H(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}c.qv=b;return 1;}
function AAZ(){var a=this;B.call(a);a.bs=null;a.bj=null;a.cP=0;}
function AC9(){var a=new AAZ();AM5(a);return a;}
function AEj(a){var b=new AAZ();AIL(b,a);return b;}
function AM5(a){a.bs=new Gb;a.bj=new Gb;}
function AIL(a,b){a.bs=new Gb;a.bj=new Gb;G8(a,b);}
function G8(a,b){SL(a.bs,b.bs);SL(a.bj,b.bj);a.cP=b.cP;}
function Kc(a,b,c){BY(a.bj,b,c);if(!a.cP)BY(a.bs,b,c);}
function Or(a,b){BY(a.bs,b,0);BY(a.bj,b+1|0,0);}
function Ds(a){if(Qq(a.bs,a.bj)>0)return a.bj;return a.bs;}
function E0(a){if(Qq(a.bs,a.bj)<0)return a.bj;return a.bs;}
function ZE(a,b){var c,d,e,f;c=a.bs;d=c.A;e=a.bj;if(d==e.A&&c.O==e.O?1:0)return null;c=Ds(a);e=E0(a);d=c.A;if(d<=b){f=BF(b,e.A);if(f<=0)return Cd(b<=d?c.O:0,f>=0?e.O:(-1));}return null;}
function CY(a){var b,c;b=a.bs;c=a.bj;return (b.A==c.A&&b.O==c.O?1:0)?0:1;}
function AAF(a,b){var c,d;if(!CY(a))return 0;c=Ds(a);d=E0(a);return c.A<=b&&b<d.A?1:0;}
function Sz(){var a=this;B.call(a);a.d_=null;a.d7=0;a.c1=0;}
function TH(a,b){var c,d,e;c=a.d7;d=a.d_;if(c==d.data.length)a.d_=CX(d,c+16|0);d=a.d_.data;e=a.d7;a.d7=e+1|0;d[e]=b;}
function Qs(a){var b,c,d;b=a.c1;c=a.d7-1|0;if(b==c)a.c1=b-1|0;d=a.d_.data;a.d7=c;d[c]=null;}
function Qk(){var a=this;B.call(a);a.v=null;a.cN=null;a.dI=null;a.dc=null;a.cQ=null;a.gJ=null;a.gt=null;a.b2=0;a.kj=0;a.ro=0.0;}
function BH(a,b){return a.v.data[b];}
function Ci(a){return a.v.data.length;}
function Tj(a){return Eo(a,Ci(a));}
function E9(a,b){return a.v.data[b].z;}
function AAM(a,b,c){var d,e,f,g,h;d=a.v;e=d.data;f=e[b];d=CX(d,e.length+1|0);e=d.data;a.v=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Dk(O(B_,0));a.v.data[b+1|0]=f;}else if(c==f.z){e[b]=f;e[b+1|0]=Dk(O(B_,0));}else{e=(G4(f,c)).data;d=a.v.data;d[b]=e[0];d[b+1|0]=e[1];}EZ(a,b,c,0,C(111));}
function JW(a,b){var c,d,e,f,g,h,i;c=a.v.data;d=c[b];e=c[b+1|0];f=Dk(TJ(d.k,e.k));g=a.v;h=g.data.length;if(b<h&&b>=0){i=O(CK,h-1|0);c=i.data;P_(g,b,i);c[b]=f;a.v=i;return;}d=new Bq;W(d);J(d);}
function LN(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.v.data;if(!(c<d[b].z?0:1)){d=(BH(a,b)).k.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<H(h.p)){f=I(h.p,g);break a;}g=g-H(h.p)|0;f=f+1|0;}f=0;}FO();h=new Bv;d=B2(1);d.data[0]=f;Ij(h,d);EZ(a,b,c,1,h);h=a.v.data[b];i=h.k;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=H(d[j].p);if(c<b)break;c=c-b|0;j=j+1|0;}}if(H(d[j].p)==1)h.k=P_(i,j,O(B_,e-1|0));else{k=d[j];if(c<=0)l=Dt(DS(k.p,1),k.bR,k.bB);else if(c>=(H(k.p)-1|0)){l=new B_;m=k.p;R6(l,B9(m,0,H(m)-
1|0),k.bR,k.bB);}else{i=B2(H(k.p)-1|0);n=i.data;b=0;while(b<c){n[b]=I(k.p,b);b=b+1|0;}b=n.length;while(c<b){m=k.p;e=c+1|0;n[c]=I(m,e);c=e;}l=Dt(GA(i),k.bR,k.bB);}d[j]=l;}h.z=h.z-1|0;DY(h);}else if(b!=(d.length-1|0)){EZ(a,b,c,1,C(111));JW(a,b);}}
function V9(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){QY(a.v.data[b],c,e[0]);return;}g=f-1|0;d=(G4(a.v.data[b],c)).data;h=d[0];i=d[1];d=a.v;j=CX(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.k.data;f=l.length;c=!f?0:H(l[f-1|0].p);Lj(h,h.k.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!DT(e[m])?Xg(e[m]):Dk(O(B_,0));d[b+m|0]=k;m=m+1|0;}Lj(i,0,0,e[g]);d[b+g|0]=i;a.v=j;}
function T8(a,b){var c,d,e,f,g,h,i;c=Ds(b);d=E0(b);e=c.A;if(e==d.A)return B9(EA(a.v.data[e]),c.O,d.O);f=new R;T(f);b=a.v.data[c.A];e=c.O;B0(DJ(f,DS(EA(b),e)),10);g=a.v.data;e=c.A+1|0;h=d.A;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;Wt(DJ(f,EA(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.v.data[d.A];h=d.O;DJ(f,B9(EA(b),0,h));return S(f);}b=new UE;W(b);J(b);}
function LV(a,b,c){var d;Uq(a,b);d=Ds(b);EZ(a,d.A,d.O,1,c);}
function Uq(a,b){var c,d,e,f,g,h,i;a:{c=Ds(b);d=E0(b);e=c.A;if(e==d.A)FE(a.v.data[e],c.O,d.O);else{b=a.v.data[e];FE(b,c.O,b.z);FE(a.v.data[d.A],0,d.O);e=c.A+1|0;f=d.A;g=a.v;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=O(CK,(h-f|0)+e|0);Yr(g,e,f,i);a.v=i;JW(a,c.A);break a;}b=new Bq;W(b);J(b);}b=new Bq;W(b);J(b);}}}
function HE(a,b,c){return Di(b,Fm(BH(a,b),c));}
function UZ(a,b){var c,d,e;c=0;d=0;while(true){e=a.v.data.length;if(c>=e)break;if((d+(BH(a,c)).z|0)>=b)return Cd(c,b-d|0);d=d+((BH(a,c)).z+1|0)|0;c=c+1|0;}return Cd(e,0);}
function Eo(a,b){var c,d,e;c=0;d=a.v.data.length;e=0;while(e<b){c=c+E9(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Ku(a,b){return KH(BH(a,b.Y),b.bf);}
function EN(a){var b,c,d,e,f,g,h,i,j;b=B2(Tj(a));c=b.data;d=a.v.data.length;e=0;f=0;while(e<d){g=a.v.data[e].k.data;h=g.length;i=0;while(i<h){j=g[i].p;OL(j,0,H(j),b,f);f=f+H(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function EZ(a,b,c,d,e){var f,g,h,i,j,k;a:{a.b2=a.b2+1|0;f=a.gJ;g=O(F3,1);h=new F3;h.du=b;h.dF=c;i=KQ(e,C(111),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=Cd(b,c+H(i[0])|0);break a;}k=Cd((b+j|0)-1|0,H(i[j-1|0]));break a;}}k=Cd(b,c);}i=g.data;h.ke=k;h.ll=d;h.e$=e;i[0]=h;Bu(f,g);I4(a,b,c,d,e);}
function I4(a,b,c,d,e){var f;f=Eo(a,b)+c|0;if(!d){Nr(a.cN,f,H(e));SR(a.dI,f,H(e));}else{UG(a.cN,f,H(e));Mg(a.dI,f,H(e));}}
function L9(a,b){var c,d,e;c=KQ(b.e$,C(111),(-1));if(b.ll){V9(a,b.du,b.dF,c);Nr(a.cN,Eo(a,b.du)+b.dF|0,H(b.e$));SR(a.dI,Eo(a,b.du)+b.dF|0,H(b.e$));}else{c=c.data;d=AC9();BY(d.bs,b.du,b.dF);e=c.length;if(e==1)BY(d.bj,b.du,b.dF+H(c[0])|0);else BY(d.bj,(b.du+e|0)-1|0,H(c[e-1|0]));Uq(a,d);UG(a.cN,Eo(a,b.du)+b.dF|0,H(b.e$));Mg(a.dI,Eo(a,b.du)+b.dF|0,H(b.e$));}return b.ke;}
function Sj(a){return a.kj==a.b2?0:1;}
function GE(a){a.kj=a.b2;}
function Oh(a){var b,c,d;a.gt=Bt(a.v.data.length+1|0);b=0;while(b<a.v.data.length){c=a.gt.data;d=b+1|0;c[d]=(c[b]+(BH(a,b)).z|0)+1|0;b=d;}}
function VL(a,b){var c,d,e,f,g,h;c=a.gt;if(c===null){d=0;e=0;a:{while(true){c=a.v.data;f=c.length;if(e>=f)break;g=c[e].z;if(b<=(d+g|0)){h=Di(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=Di(f,0);}return h;}d=Zx(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=Di(d,b-(d<0?0:a.gt.data[d])|0);if(h.bf>=(BH(a,h.Y)).z){h.Y=h.Y+1|0;h.bf=0;}return h;}
var MC=F();
function AM2(a){}
function Gb(){var a=this;B.call(a);a.A=0;a.O=0;}
function BY(a,b,c){a.A=b;a.O=c;}
function SL(a,b){a.A=b.A;a.O=b.O;}
function Qq(a,b){var c;c=BF(a.A,b.A);if(c)return c;return BF(a.O,b.O);}
function JM(){var a=this;B.call(a);a.kn=null;a.i2=null;}
function KA(a){return a.kn.Y;}
function IK(a){return a.kn.bf;}
function CK(){var a=this;B.call(a);a.k=null;a.z=0;a.e6=null;a.dY=null;a.dm=null;a.f8=null;a.fj=0;a.f9=0;a.gx=0;}
var ARE=0;var ARF=0;var ARu=0;function Xg(a){var b=new CK();ZU(b,a);return b;}
function Dk(a){var b=new CK();PC(b,a);return b;}
function ZU(a,b){var c;c=O(B_,1);c.data[0]=XY(b);PC(a,c);}
function PC(a,b){var c,d,e,f;c=b.data;a.k=b;d=0;e=c.length;f=0;while(f<e){d=d+H(c[f].p)|0;f=f+1|0;}a.z=d;DY(a);}
function Ig(a){return a.k.data.length;}
function Fm(a,b){var c;c=HS(a,b);return c<=0?0:a.dm.data[c-1|0];}
function HS(a,b){var c,d,e,f;c=a.k.data.length;if(!c)return (-1);if(!(a.dm!==null&&!a.gx)){U0(a);d=0;e=0;f=a.k.data.length;while(d<f){e=e+H(a.k.data[d].p)|0;a.dm.data[d]=e;d=d+1|0;}a.gx=0;}d=Se(a.dm,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function KH(a,b){var c;c=a.k.data;if(!c.length)return null;return c[HS(a,b)];}
function FE(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.z){a.k=O(B_,0);DY(a);a.z=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.k.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=H(g[e].p);i=H(a.k.data[f].p);j=BF(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.k.data[f];if(!b&&c==H(k.p)?1:0){g=a.k;a.k=P_(g,e,O(B_,g.data.length-1|0));a.z=a.z-d|0;DY(a);return;}a.k.data[e]=Dt(GX(B9(k.p,0,b),DS(k.p,c)),k.bR,k.bB);}else{g=a.k.data;l=g[e];m=g[f];if(b){if(b!=
H(l.p))a.k.data[e]=Dt(B9(l.p,0,b),l.bR,l.bB);e=e+1|0;}if(c==H(m.p))f=f+1|0;else if(c)a.k.data[f]=Dt(DS(m.p,c),m.bR,m.bB);g=a.k;a.k=Yr(g,e,f,O(B_,(g.data.length-f|0)+e|0));}a.z=a.z-d|0;DY(a);}
function G4(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return G(CK,[Dk(O(B_,0)),a]);if(b>=a.z)return G(CK,[a,Dk(O(B_,0))]);c=a.k;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=H(e[d].p);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return G(CK,[Dk(JN(c,0,O(B_,d))),Dk(JN(c,d,O(B_,f-d|0)))]);h=e[d];e=JN(c,0,O(B_,d+1|0));i=e.data;j=JN(c,d,O(B_,f-d|0));c=j.data;i[d]=Dt(B9(h.p,0,b),h.bR,h.bB);c[0]=Dt(DS(h.p,b),h.bR,h.bB);return G(CK,[Dk(e),Dk(j)]);}
function QY(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.k.data;if(e>=f.length)break a;g=H(f[d].p);if(b<=g)break;b=b-g|0;d=e;}}Lj(a,d,b,c);}
function Lj(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(DT(d))return;e=a.k;f=e.data;g=f.length;if(!g){h=O(B_,1);h.data[0]=XY(d);a.k=h;}else if(!b&&!c){h=O(B_,g+1|0);f=h.data;C7(e,0,h,1,g);f[0]=XY(d);a.k=h;}else{i=f[b];if(c<=0)j=Dt(GX(d,i.p),i.bR,i.bB);else if(c>=H(i.p))j=Dt(GX(i.p,d),i.bR,i.bB);else{k=H(d);l=k+c|0;m=H(i.p)-c|0;e=B2(H(i.p)+k|0);h=e.data;n=0;while(n<c){h[n]=I(i.p,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=I(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=I(i.p,g+c|0);g=g+1|0;}j=Dt(GA(e),i.bR,i.bB);}f[b]=j;}a.z=a.z+
H(d)|0;DY(a);}
function Mk(a){var b,c,d,e,f,g;b=0;c=a.k.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<H(f.p)){if(I(f.p,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Jn(a,b,c){var d,e,f,g,h,i,j;d=a.k.data.length;e=a.e6;if(!(e!==null&&e.data.length>=d)){a.e6=AB5(d);a.dY=Bt(d);a.fj=1;}U0(a);if(!a.fj)ARF=ARF+1|0;else{f=0;g=0.0;ARE=ARE+1|0;h=0;while(h<d){i=c.data;j=a.k.data[h];f=f+H(j.p)|0;a.dm.data[h]=f;CF(b,i[Il(j)]);g=g+Gc(b,j.p);a.e6.data[h]=g;a.dY.data[h]=g+0.5|0;h=h+1|0;}a.z=f;a.fj=0;a.gx=0;}}
function U0(a){var b;b=a.dm;if(!(b!==null&&b.data.length>=a.k.data.length)){a.dm=Bt(a.k.data.length);a.gx=1;}}
function R2(a){a.fj=1;a.f8=null;}
function DY(a){R2(a);a.f9=1;a.gx=1;}
function QQ(a,b,c,d){var e,f,g,h,i,j,k;if(a.f8===null)a.f8=O($rt_arraycls($rt_intcls()),a.k.data.length);e=a.f8.data[d];if(e===null){e=c.data;f=a.k.data[d];CF(b,e[Il(f)]);f=f.p;e=Bt(H(f)-1|0);c=ES(f);g=!d?0.0:a.e6.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;Lg(f,c,0,k);h[i]=g+Gc(b,f)+0.5|0;i=k;}a.f8.data[d]=e;}return e;}
function FJ(a,b,c,d){var e,f,g,h,i;if(a.k.data.length&&b){if(!(!a.fj&&a.dY!==null))Jn(a,c,d);if(b>=a.z)return a.dY.data[a.k.data.length-1|0];e=0;f=0;a:{while(true){g=a.k.data;if(f>=g.length)break a;h=e+H(g[f].p)|0;i=BF(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.dY.data[f];}return (QQ(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function Eq(a){var b,c,d;a:{b=a.k.data.length;if(b){c=a.dY.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function FZ(a,b){var c;if(b>=a.z)return b+1|0;c=HS(a,b);return a.dm.data[c];}
function EA(a){var b,c,d,e;b=new R;Fo(b,a.z);c=a.k.data;d=c.length;e=0;while(e<d){DJ(b,c[e].p);e=e+1|0;}return S(b);}
function Yn(){ARu=0;}
var Wd=F(Bq);
var T6=F(0);
function Zj(){B.call(this);this.kO=null;}
function AOf(a){var b=new Zj();AIP(b,a);return b;}
function AIP(a,b){a.kO=b;}
function D5(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.kO));}
function CQ(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.kO));}
var SJ=F(0);
function JR(){var a=this;B.call(a);a.hn=null;a.hY=null;a.xb=null;}
function Zz(a,b){var c=new JR();AGH(c,a,b);return c;}
function ANR(a,b,c){var d=new JR();M4(d,a,b,c);return d;}
function Ws(b){var c,d,e,f,g,h,i;c=new JR;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=O(Bv,0);else{f=O(Bv,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=Eu(e[h]);h=h+1|0;}}}else f=O(Bv,0);M4(c,d,b,f);return c;}
function AGH(a,b,c){M4(a,b,c,O(Bv,0));}
function M4(a,b,c,d){a.hn=b;a.hY=c;a.xb=d;}
function Ir(a){var b;b=a.hn;return Eu(b!==null?b.name:a.hY.name);}
function Oe(){var a=this;B.call(a);a.fb=null;a.dU=null;}
function AD$(a,b){var c=new Oe();AFJ(c,a,b);return c;}
function AFJ(a,b,c){a.fb=b;a.dU=c;}
function SR(a,b,c){var d;d=a.fb;if(d===null)return;Px(a,d,b,c);}
function Mg(a,b,c){var d;d=a.fb;if(d===null)return;Sm(a,d,b,c);}
function Px(a,b,c,d){var e,f,g,h;e=b.dC.bQ();while(e.b$()){VS(a,e.bJ(),c,d);}e=b.d1.bQ();while(e.b$()){f=e.bJ();g=new R0;g.pP=a;DK(a,g,f,c,d);}h=b.fw.bQ();while(h.b$()){e=h.bJ();VS(a,e.hI,c,d);f=new R1;f.mr=a;DK(a,f,e.iw,c,d);}b=b.ca.bQ();while(b.b$()){Px(a,b.bJ(),c,d);}}
function VS(a,b,c,d){IF(a,b.dD,c,d);}
function DK(a,b,c,d,e){var f,g;a:{if(c instanceof FB){f=c.fS;g=new V6;g.nm=a;g.nk=b;g.nj=d;g.nl=e;DN(f,g);}else{if(!(c instanceof HK)){if(!(c instanceof H5))break a;f=c;DK(a,b,f.gV,d,e);DK(a,b,f.f5,d,e);return;}g=c.f3;f=new V7;f.ux=a;f.uw=b;f.uv=d;f.uu=e;DN(g,f);}}if(c!==null){c=c.er;if(c!==null)b.h_(c,Ct(d),Ct(e));}}
function IF(a,b,c,d){var e;e=b.cU;if(e>=c)b.cU=e+d|0;}
function Sm(a,b,c,d){var e,f,g,h;e=b.dC.bQ();while(e.b$()){Hl(a,(e.bJ()).dD,c,d);}e=b.d1.bQ();while(e.b$()){f=e.bJ();g=new Q1;g.sJ=a;DK(a,g,f,c,d);}h=b.fw.bQ();while(h.b$()){e=h.bJ();Hl(a,e.hI.dD,c,d);f=new Q2;f.rX=a;DK(a,f,e.iw,c,d);}b.dC.kG(new Q0);b.d1.kG(new QZ);b=b.ca.bQ();while(b.b$()){Sm(a,b.bJ(),c,d);}}
function Hl(a,b,c,d){var e;e=b.cU;if(e>=c)b.cU=e-d|0;}
function B_(){var a=this;B.call(a);a.p=null;a.bR=0;a.bB=0;}
function XY(a){var b=new B_();AEZ(b,a);return b;}
function Dt(a,b,c){var d=new B_();R6(d,a,b,c);return d;}
function AEZ(a,b){R6(a,b,0,0);}
function R6(a,b,c,d){a.p=b;a.bR=c;a.bB=d;}
function Il(a){return a.bB&3;}
function Gy(b,c){return (!b?0:2)+(!c?0:1)|0;}
var JJ=F(Jp);
function Qt(){var a=this;B.call(a);a.cK=null;a.dP=0;}
var ARG=null;function AAo(a){var b=new Qt();AA1(b,a);return b;}
function AA1(a,b){a.dP=0;a.cK=b;}
function Ol(a,b){var c;if(b.dM)return b;b=BM(b.X);while(true){if(!BN(b))return null;c=Ol(a,BR(b));if(c!==null)break;}return c;}
function ME(a,b,c){var d,e,f,g;d=Jw(a,a.cK,b);if(d===null)return;b=c.b_;e=b===null?ARH:b.ca;f=c.X;c=a.cK;if(d===c){if(c.b_===null)c.b_=b;b=new QU;b.pK=a;DN(f,b);b=new QT;b.sG=a;e.d6(b);b=a.cK;b.X=f;b.b_.ca=e;b.dM=0;return;}if(!DO(f)){c=d.fP;if(c!==null){b=new Ng;b.nq=c;DN(f,b);g=I_(c.X,d);if(g==(-1))FY(c.X,f);else{E7(c.X,g);Xr(c.X,g,f);}}}b=d.b_;if(b!==null){b=b.fE;c=new Q6;c.pv=b;e.d6(c);g=I_(b.ca,d.b_);if(g==(-1))FY(b.ca,e);else{b.ca.lu(g);b.ca.rO(g,e);}}}
function Jw(a,b,c){var d,e,f,g;d=b.bD;if(d.bC==c.bC&&d.bF==c.bF?1:0){d=BM(b.X);while(BN(d)){e=Jw(a,BR(d),c);if(e!==null)return e;}return b;}b=BM(b.X);while(true){if(!BN(b))return null;d=BR(b);f=c.bC;g=c.bF;e=d.bD;if(e.bC<=f&&g<=e.bF?1:0){e=Jw(a,d,c);if(e!==null)break;}}return e;}
function RX(a,b,c){Bu(c,b.bD);b=BM(b.X);while(BN(b)){RX(a,BR(b),c);}}
function Nr(a,b,c){a.dP=0;Jv(a,a.cK,b,c);}
function Jv(a,b,c,d){var e;if(CL(b)<c)return;a:{if(CN(b)>c){Kl(b,d);Gw(b,d);b=BM(b.X);while(BN(b)){Jv(a,BR(b),c,d);}}else{if(!In(b,c)){if(a.dP)break a;if(CL(b)!=c)break a;}Gw(b,d);if(CN(b)==c&&a.dP)Kl(b,d);e=BM(b.X);while(BN(e)){Jv(a,BR(e),c,d);}if(!a.dP){b.dM=1;a.dP=1;}}}}
function UG(a,b,c){a.dP=0;Iu(a,a.cK,b,c);}
function Iu(a,b,c,d){var e,f,g,h,i,j;if(CL(b)<c)return;e=CN(b);f=c+d|0;if(e>f){e= -d|0;Kl(b,e);Gw(b,e);g=BM(b.X);while(BN(g)){Iu(a,BR(g),c,d);}b.X=LT(a,b.X);}else{h=b.bD;if(c<=h.bC&&h.bF<=f?1:0){if(b===a.cK){Kz(b,0);Is(b,0);h=b.b_;if(h!==null)h.ca.hq();}else{Kz(b,(-1));Is(b,(-1));h=b.b_;if(h!==null){Vx(h);b.b_=null;}}GH(b.X);}else{e=In(b,c);f=In(b,f);if(e&&f)Gw(b, -d|0);else if(e)Is(b,c);else{if(!f)return;Kz(b,c);Gw(b, -d|0);}h=BM(b.X);while(BN(h)){Iu(a,BR(h),c,d);}h=S$(b.X);g=NL(0);i=new Qz;j=new Ti;j.xL=i;j.ij
=g;while(SV(h,j)){}if(!j.ij.lz&&!a.dP)b.dM=1;else a.dP=1;b.X=LT(a,b.X);}}}
function LT(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Bz();d=null;e=ARG;f=b.cd;g=b.j;if(e===null)e=AQM;h=O(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}X4(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.bH=b.bH+1|0;b=BM(b);while(BN(b)){m=BR(b);if(CN(m)==CL(m))continue;if(!m.dM){if(d!==null){Bu(c,d);d=null;}Bu(c,m);}else if(d===null)d=m;else{n=AMc(IL(Be(CN(d),CN(m)),Ba(CL(d),CL(m)),d.bD.el),d.fP,d.b_);n.dM=1;d=m.b_;if(d===null)d=n;else{Vx(d);d=n;}}}if(d!==null)Bu(c,d);return c;}
function UT(a,b,c,d){var e,f,g,h,i,j,k,l;if((CL(c)-CN(c)|0)<43)e=B9(d,CN(c),CL(c));else{e=B9(d,CN(c),CN(c)+20|0);f=B9(d,CL(c)-20|0,CL(c));g=new R;T(g);K(K(K(g,e),C(101)),f);e=S(g);}e=Td(e,C(111),C(191));f=IP();g=c.bD;h=g.bC;i=g.bF;j=g.el;k=new R;T(k);B0(k,40);B0(Bj(K(Bj(K(Bj(k,h),C(192)),i),C(192)),j),41);k=S(k);h=c.dM;g=new R;T(g);GG(K(K(g,k),C(192)),h);l=S(g);g=new R;T(g);k=Bj(g,b);B0(k,32);k=K(k,l);B0(k,9);K(k,e);CU(f,S(g));c=BM(c.X);h=b+1|0;while(BN(c)){UT(a,h,BR(c),d);}}
function AA9(){ARG=new Ud;}
function ABj(){var a=this;B.call(a);a.bC=0;a.bF=0;a.el=0;}
function IL(a,b,c){var d=new ABj();AEU(d,a,b,c);return d;}
function AEU(a,b,c,d){a.bC=b;a.bF=c;a.el=d;}
function ALa(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return a.bC==c.bC&&a.bF==c.bF&&a.el==c.el?1:0;}return 0;}
function ADK(a,b){var c;b=b;c=BF(a.bC,b.bC);if(!c)c=BF(b.bF,a.bF);return c;}
var Ud=F();
function AHF(a,b,c){var d;b=b;c=c;b=b.bD;c=c.bD;d=BF(b.bC,c.bC);if(!d)d=BF(c.bF,b.bF);return d;}
function PG(){var a=this;B.call(a);a.bD=null;a.fP=null;a.X=null;a.b_=null;a.dM=0;}
function AMc(a,b,c){var d=new PG();AAn(d,a,b,c);return d;}
function AAn(a,b,c,d){a.dM=0;a.bD=b;a.fP=c;a.X=Bz();a.b_=d;}
function ABo(b){return PX(b,null);}
function PX(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=X(b);e=X(b);f=X(b);g=X(b);h=X(b);i=IL(d,e,f);j=new PG;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AAn(j,i,null,l);m=0;while(m<g){l=PX(b,c);l.fP=j;Bu(j.X,l);m=m+1|0;}return j;}
function WW(b,c,d){var e,f,g,h,i;a:{e=b.bD;f=b.X;g=e.bC;h=e.bF;i=e.el;Bg(c,g);Hg(c,h,i);Bg(c,f.j);if(d!==null){e=b.b_;if(e!==null&&T2(d,e)){g=(KT(d,b.b_)).bb;break a;}}g=(-1);}Bg(c,g);b=BM(f);while(BN(b)){WW(BR(b),c,d);}}
function CN(a){return a.bD.bC;}
function CL(a){return a.bD.bF;}
function Kz(a,b){a.bD.bC=b;}
function Is(a,b){a.bD.bF=b;}
function Kl(a,b){var c;c=a.bD;c.bC=c.bC+b|0;}
function Gw(a,b){var c;c=a.bD;c.bF=c.bF+b|0;}
function In(a,b){return CN(a)<=b&&b<CL(a)?1:0;}
function ADy(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return BB(a.bD,c.bD)&&BB(a.X,c.X)?1:0;}return 0;}
function JE(){var a=this;JH.call(a);a.oC=null;a.nn=null;}
function W2(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.oC;e=0;f=0;g=a.nn;a:{b:{while(true){if((e+32|0)>f&&E_(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=Ez(b)+j|0;h=i.length;f=Be(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new BU;b=new R;T(b);Bj(K(Bj(K(b,C(193)),k),C(77)),h);Br(l,S(b));J(l);}if(Ez(b)<e)break;if(e<0){b=new BU;c=new R;T(c);K(Bj(K(c,C(78)),e),C(79));Br(b,S(c));J(b);}h=b.ck;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.qb.data[n+b.s8|0];m=m+1|0;j=o;n=k;}b.ck
=h+e|0;e=0;}if(!E_(c)){l=!E_(b)&&e>=f?AQT:AQS;break a;}i=g.data;k=Be(Ez(c),i.length);p=new MA;p.l6=b;p.po=c;l=Y6(a,d,e,f,g,0,k,p);e=p.sQ;j=p.t9;if(l===null){if(!E_(b)&&e>=f)l=AQT;else if(!E_(c)&&e>=f)l=AQS;}UY(c,g,0,j);if(l!==null)break a;}b=new Uh;W(b);J(b);}p=new BU;l=new R;T(l);B0(Bj(K(Bj(K(l,C(80)),j),C(75)),h),41);Br(p,S(l));J(p);}Rd(b,b.ck-(f-e|0)|0);return l;}
var Of=F(JE);
function Y6(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Kx(h,2))break a;i=AQS;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Vh(l)){if((f+3|0)>g){j=j+(-1)|0;if(Kx(h,3))break a;i=AQS;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Cm(l)){i=J4(1);break a;}if
(j>=d){if(E_(h.l6))break a;i=AQT;break a;}c=j+1|0;m=k[j];if(!CI(m)){j=c+(-2)|0;i=J4(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Kx(h,4))break a;i=AQS;break a;}k=e.data;o=D4(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.sQ=j;h.t9=f;return i;}
var Sy=F(DE);
function He(){var a=this;B.call(a);a.bI=null;a.fm=null;a.rF=null;a.hu=null;a.dA=null;a.sT=null;a.tt=null;a.t6=null;}
function ARI(a,b,c,d,e){var f=new He();H7(f,a,b,c,d,e);return f;}
function H7(a,b,c,d,e,f){var g;g=c.data;a.sT=Yu(C(194),16.0);a.tt=Yu(C(194),17.0);a.t6=Yu(C(103),15.0);a.bI=b;a.rF=c;a.hu=d;if(g.length>=15){a.fm=e;a.dA=f;return;}b=new BJ;W(b);J(b);}
function HF(){var a=this;B.call(a);a.up=null;a.fQ=null;a.r1=null;a.wx=null;a.pE=null;a.lv=null;a.nK=null;a.us=null;a.kg=null;a.j8=null;a.hB=null;}
function ARJ(a,b,c,d,e,f,g,h,i,j,k){var l=new HF();K$(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function K$(a,b,c,d,e,f,g,h,i,j,k,l){a.up=b;a.fQ=c;a.r1=d;a.wx=e;a.pE=f;a.lv=g;a.nK=h;a.us=i;a.kg=j;a.j8=k;a.hB=l;}
var Xa=F(0);
function Ww(){var a=this;B.call(a);a.eB=null;a.hd=null;a.nL=null;a.l4=null;}
function ZQ(a,b,c,d){var e=new Ww();AM7(e,a,b,c,d);return e;}
function AM7(a,b,c,d,e){a.eB=b;a.hd=c;a.nL=d;a.l4=e;}
var Zk=F(0);
function ABb(){var b,c;b=new HW;c=N(C(195));AIl();I$(b,c,ARK,ARL);return b;}
function AAL(){var b,c;b=new HW;c=N(C(90));ACp();I$(b,c,ARM,ARN);return b;}
function AA5(){var b,c;b=new HW;AAC();c=ARO;ACC();I$(b,c,ARP,ARQ);return b;}
function ABt(){var a=this;B.call(a);a.qn=null;a.lN=null;a.sq=null;a.mj=null;}
function WB(a,b,c,d){var e=new ABt();ACX(e,a,b,c,d);return e;}
function ACX(a,b,c,d,e){a.qn=b;a.lN=c;a.sq=d;a.mj=e;}
function Wc(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dA.lN;break a;case 3:if(c!=3){b=b.dA.mj;break a;}b=b.dA.sq;break a;default:b=b.bI.fQ;break a;}b=b.dA.qn;}return b;}
function J5(a,b,c){return Wc(a,b,0,c);}
function Le(){var a=this;B.call(a);a.id=null;a.hS=null;}
function Ls(a,b){var c;c=a.hS;a.hS=b;return c;}
function Ix(){var a=this;Le.call(a);a.bw=null;a.bN=null;a.e1=0;a.fa=0;}
function IN(a){var b;b=JI(a);if(b==2){if(JI(a.bN)<0)a.bN=L4(a.bN);return NJ(a);}if(b!=(-2))return a;if(JI(a.bw)>0)a.bw=NJ(a.bw);return L4(a);}
function JI(a){var b,c;b=a.bN;c=b===null?0:b.e1;b=a.bw;return c-(b===null?0:b.e1)|0;}
function L4(a){var b;b=a.bw;a.bw=b.bN;b.bN=a;DW(a);DW(b);return b;}
function NJ(a){var b;b=a.bN;a.bN=b.bw;b.bw=a;DW(a);DW(b);return b;}
function DW(a){var b,c,d;b=a.bN;c=b===null?0:b.e1;b=a.bw;d=b===null?0:b.e1;a.e1=Ba(c,d)+1|0;a.fa=1;b=a.bw;if(b!==null)a.fa=1+b.fa|0;b=a.bN;if(b!==null)a.fa=a.fa+b.fa|0;}
function HT(){var a=this;B4.call(a);a.fJ=0;a.fM=0;a.fK=0;a.fL=0;}
function Ha(a){var b=new HT();AM_(b,a);return b;}
function DU(a,b,c){var d=new HT();AEE(d,a,b,c);return d;}
function N(a){var b=new HT();AK9(b,a);return b;}
function EX(a,b,c,d){var e=new HT();PF(e,a,b,c,d);return e;}
function BA(a){var b=new HT();IR(b,a);return b;}
function AM_(a,b){PF(a,b,b,b,255);}
function AEE(a,b,c,d){PF(a,b,c,d,255);}
function AK9(a,b){if(!(H(b)!=4&&H(b)!=7&&H(b)!=9)&&I(b,0)==35){if(H(b)==4){a.fJ=HZ(I(b,1))*17|0;a.fM=HZ(I(b,2))*17|0;a.fK=HZ(I(b,3))*17|0;a.fL=255;}else{a.fJ=Kj(I(b,1),I(b,2));a.fM=Kj(I(b,3),I(b,4));a.fK=Kj(I(b,5),I(b,6));a.fL=H(b)!=9?255:Kj(I(b,7),I(b,8));}IX(a.fJ,a.fM,a.fK,a.fL,a);return;}}
function PF(a,b,c,d,e){a.fJ=b;a.fM=c;a.fK=d;a.fL=e;IX(b,c,d,e,a);}
function IR(a,b){a.fJ=b.fJ;a.fM=b.fM;a.fK=b.fK;a.fL=b.fL;Fd(a,b);}
function HZ(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Kj(b,c){return (16*HZ(b)|0)+HZ(c)|0;}
var CO=F(0);
var AQ7=null;var ARR=null;var AQ9=null;var AQ8=null;var AQ_=null;var AQ$=null;var ARb=null;var ARa=null;var ARd=null;var ARc=null;var ARe=null;function AFh(){AFh=Bf(CO);ALs();}
function ALs(){AQ7=Ha(206);ARR=N(C(196));AQ9=N(C(197));AQ8=N(C(85));AQ_=N(C(198));AQ$=N(C(199));ARb=N(C(200));ARa=N(C(201));ARd=EX(107,106,107,128);ARc=EX(30,31,34,0);ARe=N(C(87));}
function B6(){Cg.call(this);this.hl=null;}
var ARS=null;var ART=null;var ARU=null;var ARV=null;var ARW=null;var ARA=null;var ARX=null;var ARY=null;var ARZ=null;var AR0=null;var AR1=null;var AR2=null;var AR3=null;var AR4=null;var AR5=null;var ARf=null;function Tc(){Tc=Bf(B6);AHy();}
function Dr(a,b,c){var d=new B6();QA(d,a,b,c);return d;}
function AOk(a,b,c,d){var e=new B6();U7(e,a,b,c,d);return e;}
function QA(a,b,c,d){Tc();C4(a,b,c);a.hl=G7(d,null);}
function U7(a,b,c,d,e){Tc();C4(a,b,c);a.hl=G7(d,e);}
function AHy(){var b,c;b=new B6;AFh();QA(b,C(202),0,ARR);ARS=b;ART=Dr(C(203),1,N(C(204)));ARU=Dr(C(205),2,N(C(206)));ARV=Dr(C(207),3,N(C(208)));ARW=Dr(C(209),4,ARR);ARA=Dr(C(210),5,N(C(211)));ARX=Dr(C(212),6,N(C(213)));ARY=Dr(C(214),7,N(C(215)));ARZ=Dr(C(216),8,N(C(217)));c=new B6;AAQ();U7(c,C(218),9,AR6,N(C(200)));AR0=c;AR1=AOk(C(219),10,AR6,N(C(88)));AR2=Dr(C(220),11,N(C(221)));AR3=Dr(C(222),12,N(C(223)));AR4=Dr(C(224),13,ARR);b=Dr(C(225),14,N(C(226)));AR5=b;ARf=G(B6,[ARS,ART,ARU,ARV,ARW,ARA,ARX,ARY,ARZ,AR0,
AR1,AR2,AR3,AR4,b]);}
function H1(){var a=this;B.call(a);a.hC=null;a.nB=null;}
function G7(a,b){var c=new H1();AIq(c,a,b);return c;}
function AIq(a,b,c){a.hC=b;a.nB=c;}
function Hk(){var a=this;B.call(a);a.hW=null;a.hi=null;a.t3=null;a.xs=null;a.jJ=null;a.n$=null;a.m7=null;}
function AR7(a,b,c,d,e,f,g){var h=new Hk();Kk(h,a,b,c,d,e,f,g);return h;}
function Kk(a,b,c,d,e,f,g,h){a.t3=b;a.xs=c;a.hi=d;a.jJ=e;a.hW=f;a.n$=g;a.m7=h;}
function Za(){var a=this;B.call(a);a.k$=null;a.p2=0;}
function Wj(a,b){var c=new Za();AK7(c,a,b);return c;}
function AK7(a,b,c){var d;d=new B4;a.k$=d;a.p2=b;d.bV=c;}
function N1(a,b){return Cn(a.p2,b);}
var Df=F(0);
var ARj=null;var ARk=null;var ARg=null;var ARh=null;var ARi=null;var ARM=null;var ARN=null;var ARl=null;var ARm=null;function ACp(){ACp=Bf(Df);AJG();}
function AJG(){ARj=N(C(199));ARk=N(C(227));ARg=N(C(90));ARh=N(C(213));ARi=N(C(196));ARM=N(C(199));ARN=N(C(228));ARl=N(C(229));ARm=DU(43,45,48);}
function XT(){var a=this;B.call(a);a.iH=null;a.hj=0.0;}
function Yu(a,b){var c=new XT();AJz(c,a,b);return c;}
function AJz(a,b,c){a.iH=b;a.hj=c;}
function AK1(a,b){if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){b=b;return a.hj===b.hj&&BB(a.iH,b.iH)?1:0;}return 0;}
var OU=F();
function ACF(a,b){return b.text();}
function OS(){B.call(this);this.mz=null;}
function AMt(a,b){var c,d;c=a.mz;b=ZO(b);d=AEd(b.hD,null,AJ9(c));Dn(AQg,c,d);if(BB(AQf,c))Ur(d);}
var OT=F();
function AK3(a,b){KZ(b);}
function Hx(){var a=this;B.call(a);a.rs=null;a.m0=null;a.n2=null;a.sk=null;a.pu=null;a.hy=null;}
function AR8(a,b,c,d,e,f){var g=new Hx();Ld(g,a,b,c,d,e,f);return g;}
function Ld(a,b,c,d,e,f,g){a.rs=b;a.m0=c;a.n2=d;a.sk=e;a.pu=f;a.hy=g;}
function HW(){var a=this;B.call(a);a.jv=null;a.kR=null;a.sd=null;}
function AR9(a,b,c){var d=new HW();I$(d,a,b,c);return d;}
function I$(a,b,c,d){a.jv=b;a.kR=c;a.sd=d;}
function KM(a,b){return !b?a.kR:a.sd;}
function Xk(){var a=this;B.call(a);a.kk=null;a.q7=null;a.tj=null;}
function ABk(a,b,c){var d=new Xk();AMa(d,a,b,c);return d;}
function AMa(a,b,c,d){a.kk=b;a.q7=c;a.tj=d;}
var CD=F(0);
var AR$=null;var AR6=null;var AR_=null;var ASa=null;var ASb=null;var ASc=null;var ASd=null;var ASe=null;var ASf=null;var ASg=null;var ASh=null;function AAQ(){AAQ=Bf(CD);ANj();}
function ANj(){AR$=Ha(187);AR6=N(C(230));AR_=Ha(55);ASa=Ha(43);ASb=DU(33,66,131);ASc=DU(60,63,65);ASd=N(C(231));ASe=N(C(232));ASf=EX(85,85,85,128);ASg=EX(43,43,43,0);ASh=N(C(233));}
function YV(){var a=this;B.call(a);a.jI=0;a.wn=null;}
var Yc=F();
function Su(){var a=this;B.call(a);a.nu=null;a.rA=null;a.sr=null;}
function AAB(){var a=this;B.call(a);a.hT=null;a.jn=null;a.e4=null;a.xe=null;}
function AJ9(a){var b=new AAB();AKY(b,a);return b;}
function AKY(a,b){var c,d,e;c=null;d=null;e=null;a.hT=c;a.jn=d;a.e4=b;a.xe=e;}
function Tp(a){var b,c;b=a.e4;if(b===null)return C(5);c=Yz(b,C(234));return c==(-1)?a.e4:DS(a.e4,c+1|0);}
function AEf(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return BB(a.hT,c.hT)&&BB(a.jn,c.jn)&&BB(a.e4,c.e4)?1:0;}return 0;}
var R$=F();
function AEP(a,b){ZS(b);}
function Iw(){var a=this;B.call(a);a.d9=null;a.eA=null;a.eq=null;}
var AQV=0;function ZS(a){var b;b=a.eA;if(b!==null){AQV=AQV-1|0;a.d9.dz.deleteTexture(b);a.eA=null;}}
function Cf(a){return a.eq.b;}
function Kn(a){return a.eq.a;}
function RW(a,b,c,d){var e;e=a.eq;e.b=b;e.a=c;KR(a);a.d9.dz.texStorage2D(3553,1,d,b,c);e=a.d9.dz;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function KR(a){var b,c;b=a.d9.dz;c=a.eA;b.bindTexture(3553,c);}
function Em(a,b){var c,d,e,f,g,h;a:{c=b.k3;d=b.kb;e=a.eq;f=e.b;if(f){g=e.a;if(g){if(f==c&&g==d?1:0){KR(a);break a;}e=a.d9.dz;h=a.eA;e.deleteTexture(h);a.eA=a.d9.dz.createTexture();RW(a,c,d,32856);break a;}}RW(a,c,d,32856);}OQ(a,b,0,0);}
function PV(a,b,c,d){KR(a);OQ(a,b,c,d);}
function OQ(a,b,c,d){var e;e=a.d9.dz;b=b.hb;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var WD=F();
function Fu(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function Xi(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function SZ(){var a=this;B.call(a);a.bi=null;a.K=null;a.N=null;a.fy=null;}
function Yq(a,b,c,d){var e,f,g,h;e=a.K;f=BB(e.hv,c)?0:1;g=BB(e.gb,b)?0:1;h=d===e.is?0:1;if(f){e.hv=c;e.em=null;N$(e,0);}e.gh=!f&&!g&&!h?0:1;e.gb=b;e.is=d;e.hz=0;Mi(a);}
function Y7(a,b){a.fy=b;}
function JV(a,b,c){var d;d=a.N;d.kP(b,c,d.eF);Mi(a);}
function Mi(a){var b,c,d,e;b=a.K;c=a.N.o.b;b.o.b=c;d=b.cI;if(d!==null&&c!=Cf(d)&&!(c>=b.hz&&Cf(b.cI)>=b.hz))b.gh=1;b=a.K;b.eF=a.bi.bW;if(Un(b))c=0;else{b=a.K;Tl(b);e=Ck(b.eM,b.is);N$(b,Fj(b.em)+(e*2|0)|0);c=b.o.a;}b=a.K.E;d=a.N.E;Bn(b,d.b,d.a-c|0);}
function KB(b,c){if(b<0)c=C(235);else if(b>0)c=C(236);return c;}
function V2(a,b,c){var d;d=a.K.E.b;return (d-c|0)<=b&&b<d?1:0;}
function LQ(a,b,c){var d,e;d=a.K;e=d.E.b+d.o.b|0;return e<=b&&b<(e+c|0)?1:0;}
function N8(a,b,c){var d;d=a.K.E.a;return (d-c|0)<=b&&b<d?1:0;}
function My(a,b,c){var d,e;d=a.N;e=d.E.a+d.o.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Ut(a,b,c){var d,e,f;d=a.K.E.a-c|0;e=a.N;f=(e.E.a+e.o.a|0)+c|0;return d<=b&&b<f?1:0;}
function U1(a,b,c){var d,e;d=a.K.E.a+c|0;e=a.N;return YE(b,d,(e.E.a+e.o.a|0)-c|0);}
function M9(a,b,c){var d,e,f;d=a.K;e=d.E.b;f=e-c|0;e=(e+d.o.b|0)+c|0;return f<=b&&b<e?1:0;}
function MF(a,b,c){var d,e;d=a.K;e=d.E.b;return YE(b,e+c|0,(e+d.o.b|0)-c|0);}
function YE(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BF(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function HA(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bp;f=new Bp;g=b.b;h=b.a;b=a.N;i=b.E;j=i.b;k=i.a;b=b.o;l=b.b;m=b.a;b=new TZ;b.r_=a;b.sb=e;b.sa=f;b.r8=c;b.r7=g;b.r$=j;b.r9=l;b.sm=d;b.sl=h;b.sn=k;b.sO=m;return b;}
function ABC(a){return a.K.o.a+Ck(a.bi,2.0)|0;}
function Rz(){var a=this;B.call(a);a.eD=null;a.b1=null;a.e9=null;a.fF=null;a.k6=null;a.cb=null;a.eL=null;a.cu=0;a.eI=0;a.lp=0;a.hL=0;a.ic=0;a.fA=0;a.sB=null;a.op=null;a.uQ=null;a.im=null;}
function ON(a,b,c){a.eD=b;T5(a,c);Kv(a);}
function Pr(a,b){var c;a.k6=b.hW;c=b.jJ.kR;Fd(a.b1.eR,c);c=b.hi.kk;Fd(a.b1.hg,c);a.im=b.jJ;}
function T5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=KY(b);d=b.bW;BV(a.eD);CF(c,a.eD);e=OE(a.eD,1.25);f=0;a.cu=Cn(2.0,d);a.eI=Cn(3.0,d);a.lp=Cn(12.0,d);g=0;h=a.cb.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=JA(c,l.kt,0.875);n=a.lp;o=(n+m|0)+n|0;f=Ba(f,o);b=l.dJ;b.b=g;b.a=0;b=l.c8;b.b=o;b.a=e;Cb(l.gi,g,0.0,o,k);g=g+o|0;j=j+1|0;}b=a.e9;b.b=g;b.a=e;b=a.b1.bp;o=a.fA;if(!o){m=a.cu;m=(g+m|0)+V(m,a.cb.data.length)|0;}else m=(f+(a.cu*2|0)|0)+(a.eI*2|0)|0;b.b=m;if(!o)e=e+(a.cu*2|0)|0;else{o=a.cu;e=(V(e+o|0,a.cb.data.length)
+o|0)+(a.eI*2|0)|0;}b.a=e;}
function WO(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EI(a){var b,c;b=a.e9;if(b.b&&b.a)return a.b1.bp;c=new Bq;Br(c,C(237));J(c);}
function Kv(a){a.ic=1;}
function AA3(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.ds;if(!a.cb.data.length)return;if(a.eL===null)a.eL=Gv(c);a:{if(!a.ic){d=a.e9;if(V(d.b,d.a))break a;}d=a.e9;if(!V(d.b,d.a))T5(a,b);d=a.e9;e=d.b;f=d.a;if(!V(e,f))return;d=EY(c,e,f,b.cx);CF(d,a.eD);g=OE(a.eD,0.125);h=a.eD;i=h.d2;g=g+i-(i+h.dE)/16.0;j=a.cb.data;e=j.length;f=0;while(f<e){h=j[f];Ej(d,h.kt,h.gi.bl+a.lp,g);f=f+1|0;}Em(a.eL,d);a.ic=0;K4(d);}if(!Jc(a.b1)){d=a.b1;XS(c,d.bp,d.cG,d.hg,a.cu,a.fF);d=a.b1;h=d.bp;k=d.cG;d=d.eR;e=a.cu;l=a.fF;l.b=(h.b-e|0)
-e|0;l.a=(h.a-e|0)-e|0;BC(c,k.b+e|0,k.a+e|0,l,d);if(a.fA){d=a.b1;ZD(c,d.bp,d.cG,0,0,N1(a.k6,b.bW),a.k6.k$,a.fF);}}j=a.cb.data;m=j.length;n=0;while(n<m){d=j[n];if(b.cx){h=d.dJ;e=h.b;f=h.a;h=d.c8;k=d.gi;l=a.eL;o=a.im;Ek(c,e,f,h,k,l,o.jv,KM(o,d.f7));}else{h=d.dJ;e=h.b;f=h.a;h=d.c8;k=d.gi;l=a.eL;o=a.im;Eh(c,e,f,h,k,l,o.jv,KM(o,d.f7),0.0);}n=n+1|0;}b:{if(a.fA){j=a.cb.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.fF;e=(a.b1.bp.b-(a.cu*2|0)|0)-(a.eI*2|0)|0;h=d.c8;e=e-h.b|0;b.b=e;b.a=h.a;if(e>0){k=d.dJ;BC(c,
k.b+h.b|0,k.a,b,KM(a.im,d.f7));}p=p+1|0;}}}}
function Mz(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cb.data;if(c>=d.length)return (-1);e=d[c];if(Fu(b,e.dJ,e.c8))return c;if(a.fA){f=e.dJ;g=f.b;e=e.c8;h=e.b;g=g+h|0;i=f.a;f=a.fF;f.b=(a.b1.bp.b-(a.cu*2|0)|0)-h|0;f.a=e.a;if(Xi(b,g,i,f))break;}c=c+1|0;}return c;}
function VM(){B.call(this);this.pf=null;}
function AC2(a,b){var c,d;c=a.pf;VG(c,Ef(c,b.u));b=Z(c);d=c.d;Kc(b,d.n,d.s);F_(c);}
var W_=F();
function Cn(b,c){return Dx(b*c);}
function T3(){var a=this;B.call(a);a.Y=0;a.bf=0;}
function Di(a,b){var c=new T3();Y9(c,a,b);return c;}
function Y9(a,b,c){a.Y=b;a.bf=c;}
function ACk(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return a.Y==c.Y&&a.bf==c.bf?1:0;}return 0;}
function AKn(a){var b,c,d,e;b=O(B,2).data;b[0]=Ct(a.Y);b[1]=Ct(a.bf);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bb)|0;d=d+1|0;}return c;}
function AJZ(a,b){var c;b=b;c=BF(a.Y,b.Y);if(!c)c=BF(a.bf,b.bf);return c;}
function Ox(){var a=this;B.call(a);a.W=null;a.g7=null;a.ef=null;a.dp=0;a.H=0;a.cR=null;a.dx=null;a.fV=0;a.mi=0;}
function Mr(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dp;i=V(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Ba(i,e))a:{while(true){if(d<=e){j=d;break a;}Fh(c);j=d+(-1)|0;b=DX(d);d=V(j,a.H)%a.ef.a|0;Fy(a,c,b,a.fV,g);PV(a.W,c,0,d);if(!(j%a.dp|0))break;d=j;}}else{Fh(b);k=a.dp-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Fy(a,b,DX(j),V(a.H,k)+a.fV|0,g);k=k+(-1)|0;j=h;}Em(a.W,b);j=Ba(i,e);}return j;}k=a.dp;h=V(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Fh(c);b=DX((d+f|0)+1|0);j=d+1|0;d=V(d,
a.H)%a.ef.a|0;Fy(a,c,b,a.fV,g);PV(a.W,c,0,d);if(!(j%a.dp|0))break;d=j;}}else{Fh(b);d=0;while(d<a.dp){h=h+1|0;Fy(a,b,DX((h>e?h-f|0:h)+f|0),V(a.H,d)+a.fV|0,g);d=d+1|0;}Em(a.W,b);j=Be(i,e);}return j;}
function Y4(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q;l=d/a.H|0;c=Be((j+i|0)%e|0,c);Bn(a.cR,Cf(a.W),a.H);e=d%Kn(a.W)|0;i=a.H;m=e/i|0;n=m+(c/i|0)|0;if(c%i|0)n=n+1|0;i=m;e=m;o=l;while(i<n){if(KL(a,g,o,l+(i-m|0)|0,f,k)){p=V((i-e|0)+1|0,a.H);Bn(a.cR,Cf(a.W),p);Cb(a.dx,0.0,V(e,a.H),Cf(a.W),p);}else{q=Fi(f,g,o,k);c=e-m|0;e=a.H;Ed(a,h,V(c,e)-(d%e|0)|0,b,k.eB,q);o=(l+i|0)-m|0;Bn(a.cR,Cf(a.W),a.H);Cb(a.dx,0.0,V(i,a.H),Cf(a.W),a.H);e=i;}i=i+1|0;}q=Fi(f,g,o,k);c=e-m|0;e=a.H;Ed(a,h,V(c,e)-(d%e|0)|0,b,k.eB,q);}
function KL(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Fi(e,b,c,f)!==f.hd?0:1;}
function Fi(b,c,d,e){c=c.data;return d<c.length&&c[d]?J5(b.dA,b,c[d]):e.hd;}
function Ed(a,b,c,d,e,f){if(a.mi)Ek(b,a.g7.b+d.b|0,c+d.a|0,a.cR,a.dx,a.W,e,f);else Eh(b,a.g7.b+d.b|0,c+d.a|0,a.cR,a.dx,a.W,e,f,0.0);}
function Fy(a,b,c,d,e){Ej(b,c,a.ef.b-20.0*e,d);}
function M1(){B.call(this);this.m4=null;}
var Dg=F(Bq);
var Sb=F(FI);
function TT(){B.call(this);this.oS=null;}
function AIC(a,b){var c,d,e,f;c=a.oS;if(c.dW!=3){b=b.data;d=CQ(b[0]);e=D5(b[1]);LA(c.f,d,e,null,null);if(c.ek){b=DZ(c);f=Jj(D1(),c.rY);c=new R;T(c);K(FD(K(K(c,b),C(238)),f),C(170));$rt_globals.console.info($rt_ustr(S(c)));}}}
var Xo=F(0);
function Wz(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(J0(b)){case -1655966961:if(!B1(b,C(140)))break a;c=4;break a;case 3401:if(!B1(b,C(166)))break a;c=3;break a;case 98723:if(!B1(b,C(139)))break a;c=2;break a;case 3254818:if(!B1(b,C(130)))break a;c=1;break a;case 3556653:if(!B1(b,C(117)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;default:d=D2();e=new R;T(e);K(K(e,C(239)),b);CU(d,S(e));c=0;break b;}c=0;}return c;}
function ABi(){var a=this;B.call(a);a.i8=null;a.jm=null;a.dL=null;a.jc=null;a.be=null;a.ku=null;a.kA=null;a.ev=null;a.e5=null;a.gF=null;}
function ANb(a,b){var c=new ABi();AH4(c,a,b);return c;}
function AH4(a,b,c){var d,e,f;a.dL=b;a.jc=c;b=new TU;b.kx=0;b.gj=Bt(16);b.eH=0;a.be=b;b=new R;T(b);a.gF=b;a.ev=FR();b=new Ru;d=AAU(16);b.eY=0;b.de=O(GU,d);b.n1=0.75;TL(b);a.e5=b;b=new TP;c=a.be;e=a.gF;f=a.ev;b.cJ=c;b.iX=e;b.pL=f;a.ku=b;b=new TI;b.cm=c;b.j3=e;b.oA=f;a.kA=b;}
function Ml(a){var b,c,d,e,f,g,h;a:{b=IV(a.dL.dU);c=b.ga;if(c.cp>0){d=c.cn;e=0;b:while(true){f=b.ga.bP.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cg;if(ID(a.ev,g))B7(a.ev,g);else{h=a.ev;Dn(h,g,Ct(h.cp));}c=c.cl;if(d!=b.ga.cn)break b;}e=e+1|0;}b=new Gd;W(b);J(b);}}b=a.dL.fb;if(b!==null)P9(a,b);Bg(a.be,a.dL.dU.cp);b=Q8(IV(a.dL.dU));while(EG(b)){c=NQ(b);Hg(a.be,a.gF.F,H(c));DJ(a.gF,c);}b=Q8(IV(a.dL.dU));while(EG(b)){c=NQ(b);c=B7(a.dL.dU,c);Bg(a.be,c.j);c=BM(c);while(BN(c)){g=BR(c);g=B7(a.ev,g);Bg(a.be,
g.bb);}}if(a.dL.fb===null)Bg(a.be,(-1));else{Bg(a.be,a.e5.eY);Ri(a,a.dL.fb);}if(a.jc===null)Bg(a.be,(-1));else{Bg(a.be,1);WW(a.jc,a.be,a.e5);}b=a.be;d=b.kx;if(d&&b.eH!=d){c=D2();d=b.kx;e=b.eH;g=new R;T(g);K(Bj(K(Bj(K(g,C(240)),d),C(241)),e),C(242));CU(c,S(g));}f=b.gj;d=f.data.length;e=b.eH;if(d!=e)f=H2(f,e);a.i8=f;a.jm=ES(S(a.gF));}
function P9(a,b){var c,d,e,f,g,h;if(T2(a.e5,b))KT(a.e5,b);else{c=a.e5;d=Ct(c.eY);if(b===null){e=Pf(c);if(e===null){c.iz=c.iz+1|0;e=T7(c,null,0,0);f=c.eY+1|0;c.eY=f;if(f>c.kw)Mh(c);}}else{g=H8(b);h=g&(c.de.data.length-1|0);e=Mp(c,b,h,g);if(e===null){c.iz=c.iz+1|0;e=T7(c,b,h,g);f=c.eY+1|0;c.eY=f;if(f>c.kw)Mh(c);}}e.cv=d;}b=b.ca;if(b===null)return;c=new VV;c.oB=a;b.d6(c);}
function Ri(a,b){var c,d,e,f;c=(KT(a.e5,b)).bb;Bg(a.be,c);if(b instanceof JG)Bg(a.be,(-1));else if(!(b instanceof Jf))Bg(a.be,0);else Bg(a.be,1);d=a.ku;Bg(d.cJ,b.dC.cq());e=b.dC;f=new Lk;f.t7=d;e.d6(f);d=a.kA;Bg(d.cm,b.d1.cq());e=b.d1;f=new Tf;f.r3=d;e.d6(f);d=b.hF;Bg(a.be,d.cq());e=new Ub;e.sR=a;d.d6(e);d=b.fw;Bg(a.be,d.cq());d=d.bQ();while(d.b$()){e=d.bJ();L8(a.ku,e.hI);F9(a.kA,e.iw);Bg(a.be,e.n_);}d=b.rZ;if(d===null)Bg(a.be,(-1));else Bg(a.be,(B7(a.ev,d)).bb);b=b.ca;Bg(a.be,b.cq());d=new NK;d.l7=a;b.d6(d);}
function Lz(){B.call(this);this.se=null;}
function ABP(a,b){var c,d,e,f,g,h,i,j;c=a.se;if(c.ek){d=DZ(c);e=new R;T(e);K(K(e,d),C(243));$rt_globals.console.info($rt_ustr(S(e)));}b=b.data;f=CQ(b[0]);g=D5(b[1]);h=(CQ(b[2])).data[0];if(c.f.b2==h){i=null;j=null;if(b.length>=5){i=CQ(b[3]);j=D5(b[4]);}LA(c.f,f,g,i,j);Eg(c.f.cQ);Eg(c.f.dc);Oh(c.f);GE(c.f);KN(c);}}
function Sf(){var a=this;B.call(a);a.vo=null;a.vp=null;a.vn=null;}
function QX(){var a=this;B.call(a);a.tO=null;a.tP=null;a.tN=0;}
function AEY(a,b){var c,d,e;c=a.tO;d=a.tP;e=a.tN;d.m(Us(c,(b.u.b+e|0)-c.dK.b|0));}
function QW(){var a=this;B.call(a);a.n9=null;a.n7=null;a.n8=0;}
function AMj(a,b){var c,d,e;c=a.n9;d=a.n7;e=a.n8;d.m(Oq(c,(b.u.a+e|0)-c.dK.a|0));}
var Ev=F(0);
function Ms(){var a=this;B.call(a);a.g3=0;a.lq=0;a.hX=0;a.fD=0;a.f_=null;}
function BN(a){return a.g3>=a.hX?0:1;}
function BR(a){var b,c;N2(a);b=a.g3;a.fD=b;c=a.f_;a.g3=b+1|0;return c.kF(b);}
function PT(a){var b,c,d;if(a.fD<0){b=new Dg;W(b);J(b);}N2(a);a.f_.lu(a.fD);a.lq=a.f_.bH;c=a.fD;d=a.g3;if(c<d)a.g3=d-1|0;a.hX=a.hX-1|0;a.fD=(-1);}
function N2(a){var b;if(a.lq>=a.f_.bH)return;b=new Gd;W(b);J(b);}
var Yk=F();
function Rq(){B.call(this);this.wD=null;}
var AAb=F();
var Ly=F();
function ALf(a,b){b=b;b.W=CZ(b.W,null);}
function L5(){var a=this;B.call(a);a.pt=0;a.ps=0;}
function TU(){var a=this;B.call(a);a.gj=null;a.kx=0;a.eH=0;}
function Hg(a,b,c){Bg(a,b);Bg(a,c);}
function Bg(a,b){var c,d;c=a.gj;d=c.data.length;if(d==a.eH)a.gj=H2(c,d*2|0);c=a.gj.data;d=a.eH;a.eH=d+1|0;c[d]=b;}
function Ru(){var a=this;Du.call(a);a.eY=0;a.de=null;a.iz=0;a.n1=0.0;a.kw=0;}
function AAU(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function TL(a){a.kw=a.de.data.length*a.n1|0;}
function T2(a,b){return VH(a,b)===null?0:1;}
function KT(a,b){var c;c=VH(a,b);if(c===null)return null;return c.cv;}
function VH(a,b){var c,d;if(b===null)c=Pf(a);else{d=H8(b);c=Mp(a,b,d&(a.de.data.length-1|0),d);}return c;}
function Mp(a,b,c,d){var e;e=a.de.data[c];while(e!==null&&!(e.kv==d&&(b!==e.cg?0:1))){e=e.ge;}return e;}
function Pf(a){var b;b=a.de.data[0];while(b!==null&&b.cg!==null){b=b.ge;}return b;}
function T7(a,b,c,d){var e,f;e=new GU;V1(e,b,null);e.kv=d;f=a.de.data;e.ge=f[c];f[c]=e;return e;}
function Mh(a){var b,c,d,e,f,g,h,i;b=a.de.data.length;b=AAU(!b?1:b<<1);c=O(GU,b);d=c.data;e=0;f=b-1|0;while(true){g=a.de.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.kv&f;i=h.ge;h.ge=d[b];d[b]=h;h=i;}e=e+1|0;}a.de=c;TL(a);}
function TP(){var a=this;B.call(a);a.cJ=null;a.iX=null;a.pL=null;}
function L8(a,b){var c;if(!(b instanceof KU)){Bg(a.cJ,3);U2(a,b);Bg(a.cJ,b.gr);}else{c=b;Bg(a.cJ,5);U2(a,c);Bg(a.cJ,c.gr);Bg(a.cJ,c.lW);b=c.iJ;Bg(a.cJ,b.j);c=new LY;c.na=a;DN(b,c);}}
function U2(a,b){var c;c=b.dD.gz;Hg(a.cJ,a.iX.F,H(c));Bg(a.cJ,b.dD.cU);Lt(a,b.iB);DJ(a.iX,c);}
function Lt(a,b){if(b===null)Bg(a.cJ,(-1));else Bg(a.cJ,(B7(a.pL,b)).bb);}
function TI(){var a=this;B.call(a);a.cm=null;a.j3=null;a.oA=null;}
function F9(a,b){var c,d,e;if(b instanceof FB){c=b;Bg(a.cm,9);OD(a,c.fS);}else if(b instanceof HK){d=b;Bg(a.cm,3);Pi(a,d);Bg(a.cm,d.mg);OD(a,d.f3);}else if(b instanceof H5){e=b;Bg(a.cm,4);F9(a,e.gV);F9(a,e.f5);}else if(b===null)Bg(a.cm,(-1));else{Bg(a.cm,5);Pi(a,b);Bg(a.cm,b.q_);}}
function Pi(a,b){var c;c=b.er.gz;Hg(a.cm,a.j3.F,H(c));Bg(a.cm,b.er.cU);b=b.eX;if(b===null)Bg(a.cm,(-1));else Bg(a.cm,(B7(a.oA,b)).bb);DJ(a.j3,c);}
function OD(a,b){var c;Bg(a.cm,b.j);c=new V5;c.ne=a;DN(b,c);}
function SE(){var a=this;B.call(a);a.qo=0;a.uD=0;}
function GP(a,b){return OM(a.qo,b,a.uD);}
var DR=F(Bq);
function MA(){var a=this;B.call(a);a.l6=null;a.po=null;a.sQ=0;a.t9=0;}
function Kx(a,b){return Ez(a.po)<b?0:1;}
function R7(){B.call(this);this.sY=null;}
function AHZ(a,b){Gq(a.sY,b);}
function R8(){B.call(this);this.rJ=null;}
function AJA(a,b){Gq(a.rJ,b);}
var AAR=F();
function SH(b,c,d,e){var f,g;f=b.next();g=new Vp;g.mn=b;g.mm=c;g.mq=d;g.mo=e;f.then(Bi(g,"f"),Bi(d,"f"));}
function WV(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ABh(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(C2()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Vm;f.p3=b;f.p4=d;d.addEventListener("change",Bi(f,"handleEvent"));d.click();}
function W3(b,c){var d;if(c.isFile?1:0)b.m(Ws(c.file()));else{c=c.createReader();d=new U$;d.s1=b;c.readEntries(Bi(d,"f"));}}
function RM(){var a=this;B.call(a);a.bc=null;a.vj=null;a.hh=null;a.lD=null;a.iP=null;a.ey=null;}
function FP(a){return a.bc.bG.gf;}
function V$(a){var b;b=new Rs;b.tR=a;return b;}
function Yw(a){var b,c,d,e,f;b=O(DC,5);c=b.data;d=a.bc;BV(d);e=new VT;e.rb=d;c[0]=Cv(C(244),e);e=a.bc;BV(e);f=new VO;f.ni=e;c[1]=Cv(C(245),f);d=a.bc;BV(d);e=new VP;e.oi=d;c[2]=Cv(C(246),e);d=a.bc;BV(d);e=new VQ;e.tL=d;c[3]=Cv(C(247),e);d=a.bc;BV(d);e=new VR;e.l_=d;c[4]=Cv(C(248),e);return Gt(b);}
function Iy(a,b,c){var d,e,f,g,h,i,j,k,l;a:{Dp(a.ey.bM);d=a.bc.d;e=DI(d);f=Fw(d);g=a.bc.eo;if(c===null)h=null;else{AOY();switch(ASi.data[c.fR]){case 1:h=KW(g,e,f);break a;case 2:h=Ps(g,e,f);break a;default:}b=new E$;W(b);J(b);}}c=a.bc;e=Ef(c,b);f=HE(c.d.f,e.Y,e.bf);g=RD(c,f);if(h!==null){f=c.d;i=e.Y;j=e.bf;e=new Q9;e.u3=c;e.u2=b;e.u5=g;h.qM(f,i,j,e,c.hc);}else{e=B7(c.d.f.dc,f);if(e!==null)Hc(c,e);else{e=B7(c.d.f.cQ,f);if(e!==null&&!DO(e))PO(c.iu,b,e,c,g);else{g=c.iu;Dp(g.bM);h=g.bM;k=O(DC,1);l=k.data;d=new DC;BV(h);f
=new LD;f.uE=h;Wu(d,f,C(249));l[0]=d;OX(h,b,Gt(k),Py(g,c));}}}}
var Xe=F(0);
var Pv=F(0);
var Mt=F(0);
var Gf=F();
function Q4(){Gf.call(this);this.si=null;}
function SV(a,b){var c,d,e;c=0;while(true){d=a.si;if(d.hA===null)d.hA=BM(d.oG);if(!BN(d.hA))e=0;else{c=b.cY(BR(d.hA));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Pm=F(0);
function Sh(){B.call(this);this.Gx=null;}
var ARq=null;function Rv(b){return b===null?C(5):Tp(b);}
function AA2(){ARq=O(Je,0);}
function Q$(){var a=this;B.call(a);a.wP=null;a.wO=null;a.wR=0;a.wQ=0;}
function GU(){var a=this;FL.call(a);a.kv=0;a.ge=null;}
var Gd=F(Bq);
function Qd(){B.call(this);this.mf=null;}
function AL1(a,b){Gq(a.mf,b);}
function Mm(){B.call(this);this.oe=null;}
function AHv(a,b){Gq(a.oe,b);}
function Uf(){B.call(this);this.qz=null;}
function AML(a,b){var c,d,e,f;c=a.qz;if(c.fO!=3&&c.dW!=3){b=b.data;c.f4=3;d=CQ(b[0]);e=D5(b[1]);Km(c.f,d,e);if(c.ek){b=DZ(c);f=Jj(D1(),c.g2);c=new R;T(c);K(FD(K(K(c,b),C(250)),f),C(170));$rt_globals.console.info($rt_ustr(S(c)));}}}
function OZ(){B.call(this);this.qg=null;}
function ADn(a,b){var c,d,e,f,g,h;c=a.qg;if(c.dW!=3){d=b.data;c.fO=3;if((CQ(d[2])).data[0]!=1)Gq(c,b);else{e=CQ(d[0]);f=D5(d[1]);g=c.f4!=3?0:1;Pz(c.f,e,f,g);if(c.ek){b=DZ(c);h=Jj(D1(),c.g2);c=new R;T(c);K(FD(K(K(c,b),C(251)),h),C(170));$rt_globals.console.info($rt_ustr(S(c)));}}}}
var Vr=F();
function AKW(a,b){WV(b);}
function Vq(){var a=this;B.call(a);a.pr=null;a.pq=null;}
function AEx(a,b){var c,d,e,f,g,h,i;c=a.pr;d=a.pq;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new O0;i.nH=c;i.nG=g;h.then(Bi(i,"f"),Bi(d,"f"));e=e+1|0;}}
var UN=F();
function AFY(a,b){WV(b);}
function UM(){var a=this;B.call(a);a.oT=null;a.oU=null;}
function AGE(a,b){var c,d,e,f,g;c=a.oT;d=a.oU;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=O(Bv,1);g.data[0]=Eu(b.name);SH(f,c,d,g);}
function WN(){B.call(this);this.Cr=null;}
function Vm(){var a=this;B.call(a);a.p3=null;a.p4=null;}
function AFN(a,b){var c,d,e,f,g,h;b=a.p3;c=a.p4;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new LG;h.md=b;h.mc=g;$rt_globals.setTimeout(Bi(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Ws(d.item(f));g=new Lp;g.rf=b;g.rg=c;$rt_globals.setTimeout(Bi(g,"onTimer"),0);f=f+1|0;}}
function Je(){var a=this;B.call(a);a.ra=null;a.hU=null;a.h5=null;a.fp=null;}
function Xp(){var a=this;B.call(a);a.ig=null;a.kr=null;}
function ABE(){var a=this;B.call(a);a.vO=0;a.xk=0;a.nX=0;a.j$=0;}
function Vb(){var a=this;B.call(a);a.pd=null;a.pe=null;}
function ACO(a){var b,c,d,e,f,g;b=a.pd;c=a.pe;if(BB(c.ig,b.d.eN)){c=c.kr;Cj(b,c.j$,c.nX,0);BY((Z(b)).bs,c.j$,c.nX);BY((Z(b)).bj,c.xk,c.vO);}else{d=(Cc(b.eo.sF)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Fb(b);b=new Mc;b.q$=g;b.q9=c;BV(b);c=new Qi;c.sM=b;$rt_globals.setTimeout(Bi(c,"onTimer"),0);}}}
function Vc(){var a=this;B.call(a);a.tK=null;a.tJ=null;}
function AGm(a){Hc(a.tK,a.tJ);}
function EP(){var a=this;B.call(a);a.fE=null;a.ca=null;a.d1=null;a.dC=null;a.fw=null;a.hF=null;a.rZ=null;}
function ANI(a){var b=new EP();Zm(b,a);return b;}
function Zm(a,b){a.fE=b;a.ca=Bz();a.d1=Bz();a.dC=Bz();a.hF=Bz();a.fw=Bz();}
function Vx(a){var b;b=a.fE;if(b!==null)b.ca.mU(a);}
function VV(){B.call(this);this.oB=null;}
function AFR(a,b){b=b;P9(a.oB,b);}
var JG=F(EP);
var Jf=F(EP);
function Ub(){B.call(this);this.sR=null;}
function ACT(a,b){var c;b=b;c=a.sR;Bg(c.be,(B7(c.ev,b)).bb);}
function OA(){var a=this;B.call(a);a.hI=null;a.iw=null;a.n_=0;}
function NK(){B.call(this);this.l7=null;}
function AIf(a,b){b=b;Ri(a.l7,b);}
function Pk(){var a=this;B.call(a);a.ji=0;a.o6=null;}
function ANz(a,b){var c,d,e;c=a.o6;b=b;d=c.pt;e=c.ps;d=b.b<=d&&e<=b.a?1:0;a.ji=d;return d?0:1;}
var VU=F(DR);
var PH=F(Bq);
var Uh=F(Bq);
function N7(){B.call(this);this.qe=null;}
function AJx(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.qe;d=CQ(c[0]);e=(CQ(c[1])).data[0];if(!Sj(b.f)){c=b.f;if(c.b2==e){e=b.uW;f=Ug(d);Eg(c.dc);Eg(c.cQ);Oh(c);while(f.d3>=f.gn.data.length?0:1){if(X(f)==(-1))continue;g=VL(c,X(f));h=KH(BH(c,g.Y),g.bf);if(X(f)==(-1)){if(!e)continue;h.bR=0;h.bB=h.bB|4;continue;}i=VL(c,X(f));j=X(f);k=X(f);Dn(c.dc,g,i);l=c.cQ;m=Bz();if(B7(l,i)===null)Dn(l,i,m);Bu(B7(c.cQ,i),g);h.bR=j;h.bB=k;}JQ(b);if(b.vS){n=Jj(D1(),b.s$);if(AN5(n,BI(100))){b=DZ(b);c=new R;T(c);K(FD(K(K(c,b),
C(252)),n),C(170));$rt_globals.console.info($rt_ustr(S(c)));}}}}}
function ABy(){B.call(this);this.FF=null;}
function UJ(){B.call(this);this.lw=null;}
var ARx=null;function RQ(){var a=new UJ();Xt(a);return a;}
function Xt(a){a.lw=Bz();}
function Dy(a,b,c){NH(a,Cv(b,c));}
function Cv(b,c){return ACR(c,b);}
function E6(a,b,c){JX(a,b,c,null);}
function JX(a,b,c,d){NH(a,AOG(null,b,c,d));}
function NH(a,b){Bu(a.lw,b);}
function Hd(a){return Gt(GY(a.lw,ARx));}
function WI(){ARx=O(DC,0);}
function Pc(){var a=this;B.call(a);a.mv=null;a.mw=null;}
function ANB(a){var b,c;b=a.mv;c=a.mw;HP(b.dS,c);}
function TO(){B.call(this);this.rr=null;}
function O4(){var a=this;B.call(a);a.oG=null;a.hA=null;}
function Ex(){var a=this;B.call(a);a.E=null;a.o=null;a.eF=0.0;}
function ANC(){var a=new Ex();Ks(a);return a;}
function Ks(a){a.E=new Bp;a.o=new Bp;}
function AKp(a){}
function ZF(a){return Cd(0,0);}
function Qb(a,b,c,d){var e;if(!Ho(a.E,b)){a.nW(b);Cp(a.E,b);}if(!Ho(a.o,c)){a.nF(c);Cp(a.o,c);}e=a.eF;if(e!==d){a.eF=d;a.ph(e,d);}}
function Dd(a,b){return Fu(b,a.E,a.o);}
function AL$(a,b){var c,d,e,f;c=a.E;d=c.b;e=c.a;f=a.o;AOu();BC(b,d,e,f,ASj);}
function AHL(a,b){}
function AME(a,b){}
function AKx(a,b,c){}
function AMR(a){}
function AGp(a,b,c,d){return 0;}
function ADC(a,b,c){return null;}
function AIv(a,b,c){return 0;}
function AMl(a,b){return 0;}
function AKm(a,b,c,d){return 0;}
function Ii(){var a=this;Ex.call(a);a.cE=null;a.bz=null;a.f0=null;}
function Tm(a,b){a.bz.b=Io(a,b);}
function Wb(a,b){a.bz.a=KE(a,b);}
function KE(a,b){return Ba(0,Be(b,a.cE.a-a.o.a|0));}
function Io(a,b){return Ba(0,Be(b,a.cE.b-a.o.b|0));}
function Ph(){var a=this;Ii.call(a);a.bS=null;a.dh=null;a.fZ=null;a.sA=null;a.dy=null;a.bO=null;a.dG=null;a.c4=null;a.cT=0;a.ec=0;a.uk=null;a.df=0;a.dO=0;a.fi=0;a.eJ=0;a.ew=0;a.cj=0;a.dH=null;a.hM=null;a.pI=null;a.gs=null;}
function N3(a){a.cT=Cn(2.0,a.bS.bW);}
function Vk(a){return a.bO.data.length?0:1;}
function Sd(a){Bn(a.fZ,0,0);}
function AMk(a){a.c4=CZ(a.c4,null);Bn(a.fZ,0,0);Eg(a.gs);a.dH=null;a.bO=ARq;a.dG=null;a.df=0;a.dO=0;a.fi=0;RS(a.dh);a.hM=null;}
function AEK(a,b,c){Oi(a);N3(a);a.dy=null;a.dH=null;a.ec=0;}
function WE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;c=KY(a.bS);if(Vk(a))return;IW(a);CF(c,a.dy);d=DB(a);e=Wy(c,a.ec);f=Be(HH(a.o.a,d),a.bO.data.length)+30|0;g=a.pI.t3;h=a.dG;if(h.data.length<f){a.dG=AID(f,h,a.eJ,a.ew,a.bO,a.dH,e,a.gs);Cp(a.fZ,L6(a.dH));OB(a,a.bS.ds);}a.eJ=Be((a.bz.a+a.cT|0)/(DB(a)+a.cT|0)|0,a.bO.data.length-1|0);a.ew=Be((((a.bz.a+a.dh.bp.a|0)-1|0)+a.cT|0)/(DB(a)+a.cT|0)|0,a.bO.data.length-1|0);if(!a.dG.data.length)return;i=0;j=a.eJ;while(j<=a.ew){k=NI(a,j);if
(!(k!==null&&k.fd===a.bO.data[j])){l=a.dG.data;h=a.bO;k=a.dH;m=a.gs;i=j%l.length|0;if(l[i]!==null)TN(k,l[i],m);l[i]=Im(h.data[j],k,e,m);i=1;}j=j+1|0;}if(i){Cp(a.fZ,L6(a.dH));OB(a,a.bS.ds);}k=a.E;S6(b,k.b,k.a,a.o);n=g.sk;k=a.E;BC(b,k.b,k.a,a.o,n);k=a.dh.cG;o=k.b;p=k.a;q=Ck(a.bS,2.0);k=a.bS.dT;r=a.eJ;j=o+q|0;while(r<=a.ew){m=NI(a,r);s=V(r,DB(a));i=r+1|0;t=s+V(i,a.cT)|0;s=j+a.df|0;u=s+a.dO|0;v=a.cj!=r?0:1;w=!v?n:g.pu;x=!v?g.rs:g.hy;y=!v?g.m0:g.hy;z=!v?g.n2:g.hy;ba=(p+t|0)-a.bz.a|0;if(a.bS.cx){Ek(b,j,ba,m.fq,m.ko,
a.c4,x,w);Ek(b,s,ba,m.fW,m.f$,a.c4,y,w);Ek(b,u,ba,m.fs,m.gP,a.c4,z,w);}else{Eh(b,j,ba,m.fq,m.ko,a.c4,x,w,0.0);Eh(b,s,ba,m.fW,m.f$,a.c4,y,w,0.0);Eh(b,u,ba,m.fs,m.gP,a.c4,z,w,0.0);}s=m.fq.b;bb=j+s|0;Bn(k,Ba(0,a.df-s|0),m.fq.a);BC(b,bb,ba,k,w);s=j+a.df|0;bb=m.fW.b;bc=s+bb|0;Bn(k,Ba(0,a.dO-bb|0),m.fW.a);BC(b,bc,ba,k,w);s=m.fs.b;bd=u+s|0;Bn(k,Ba(0,(((a.dh.bp.b-s|0)-a.dO|0)-a.df|0)-q|0),m.fs.a);BC(b,bd,ba,k,w);be=(o+a.o.b|0)-q|0;Bn(k,q,DB(a)+a.cT|0);BC(b,be,ba,k,n);r=i;}Kw(b);}
function OB(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fZ;c=EY(b,c.b+150|0,c.a,a.bS.cx);CF(c,a.dy);d=a.dy;e=d.d2;f=e-(e+d.dE)/16.0;g=a.dG.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.fd.hU;k=d.f$;Ej(c,j,k.bl+a.ec,f+k.bA);j=d.fd.h5;d=d.gP;Ej(c,j,d.bl+a.ec,f+d.bA);}i=i+1|0;}a:{d=a.gs;if(d.cp>0){h=d.cn;i=0;b:while(true){g=d.bP.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cg;l=j.cv;k=k;l=l.iA;Ej(c,k,l.bl+a.ec,f+l.bA);j=j.cl;if(h!=d.cn)break b;}i=i+1|0;}b=new Gd;W(b);J(b);}}if(a.c4===null)a.c4=Gv(b);Em(a.c4,
c);K4(c);}
function NI(a,b){var c;c=a.dG.data;return c[b%c.length|0];}
function AJW(a,b){Cp(a.dh.bp,b);}
function ALh(a,b){Cp(a.dh.cG,b);}
function N6(a){var b,c;IW(a);b=DB(a);c=a.bO.data.length;b=V(b,c)+V(a.cT,c+1|0)|0;Bn(a.cE,a.o.b,b);}
function AAw(a,b,c){var d,e;d=(a.df+a.dO|0)+a.fi|0;e=Ck(a.bS,5.0);return Cd(Fg(e,b.b,a.bS.cA.b-d|0),Fg(c,b.a,a.bS.cA.a-a.cE.a|0));}
function AA8(a,b){var c,d,e,f;Oi(a);N6(a);c=(a.df+a.dO|0)+a.fi|0;d=a.bS;e=(d.cA.b-b.b|0)-Ck(d,5.0)|0;d=a.bS;f=(d.cA.a-b.a|0)-Ck(d,5.0)|0;return Cd(Be(c,e),Be(a.cE.a,f));}
function Oi(a){var b,c,d,e,f,g,h,i,j;b=KY(a.bS);if(Vk(a))return;IW(a);CF(b,a.dy);c=Wy(b,a.ec);d=a.bO.data;e=d.length;f=0;while(f<e){g=d[f];h=G9(c,g.fp);i=G9(c,g.hU);j=G9(c,g.h5);a.df=Ba(a.df,h);a.dO=Ba(a.dO,i);a.fi=Ba(a.fi,j);f=f+1|0;}}
function TM(a,b){Iz(a.hM);b.ra.t();}
function Q5(a,b){var c,d,e;if(!a.dG.data.length)return (-1);c=DB(a);d=(b.a-a.E.a|0)+a.bz.a|0;e=a.cT;e=(d+e|0)/(c+e|0)|0;if(e<a.bO.data.length)return e;return (-1);}
function DB(a){return Fj(a.dy);}
function IW(a){var b;if(a.dy===null){b=HX(a.bS,a.sA);a.dy=b;a.dH=AC0(Fj(b));a.ec=Dx(a.dy.lg);}}
function ALy(a,b){var c,d,e;a:{switch(b.bT){case 13:TM(a,a.bO.data[a.cj]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cj=a.eJ;b=a.f0;c=a.bz;H0(b,c.b,c.a-(a.o.a/2|0)|0);return 0;case 34:a.cj=a.ew;b=a.f0;c=a.bz;H0(b,c.b,c.a+(a.o.a/2|0)|0);return 0;case 35:case 39:a.cj=a.bO.data.length-1|0;break a;case 36:case 37:a.cj=0;break a;case 38:d=a.cj;e=a.bO.data.length;a.cj=((d+e
|0)-1|0)%e|0;break a;case 40:a.cj=(a.cj+1|0)%a.bO.data.length|0;break a;default:break a;}Iz(a.hM);return 0;}e=a.cj;if(e<=a.eJ)H0(a.f0,a.bz.b,V(e,DB(a))+V(a.cj,a.cT)|0);else if(e>=a.ew)H0(a.f0,a.bz.b,(V(e+1|0,DB(a))+V(a.cj+2|0,a.cT)|0)-a.o.a|0);return 0;}
function O5(){var a=this;B.call(a);a.l1=null;a.l2=null;}
function Iz(a){var b,c;b=a.l1;c=a.l2;HP(b.dS,c);RK(b);}
function Oz(){var a=this;Ex.call(a);a.lE=null;a.nZ=null;a.so=null;a.bm=null;a.cF=null;a.cM=null;a.ti=0.0;a.t4=null;a.t1=null;}
function ALe(a){var b;b=a.bm;b.f0=null;a.bm=CZ(b,null);}
function AFX(a,b,c,d){Qb(a,b,c,d);Qb(a.bm,b,c,d);if(d!==0.0){N6(a.bm);b=a.bm;c=b.bz;c.b=Io(b,c.b);c=b.bz;c.a=KE(b,c.a);if(T1(a))HC(a);else a.cM=null;if(Nh(a))GD(a);else a.cF=null;}}
function H0(a,b,c){var d;d=a.bm;d.bz.b=Io(d,b);d.bz.a=KE(d,c);if(T1(a))HC(a);if(Nh(a))GD(a);}
function Nh(a){var b;b=a.o.a;return b>0&&a.bm.cE.a>b?1:0;}
function T1(a){var b;b=a.o.b;return b>0&&a.bm.cE.b>b?1:0;}
function HC(a){var b,c,d,e,f,g;b=a.cM;if(b===null)b=Ts();a.cM=b;PD(a,b);c=a.cM;b=a.bm;d=b.bz.b;e=a.E;f=e.b;g=a.o;Pw(c,d,f,g.b,b.cE.b,e.a+g.a|0,K1(a));}
function GD(a){var b,c,d,e,f,g;b=a.cF;if(b===null)b=Ts();a.cF=b;PD(a,b);c=a.cF;b=a.bm;d=b.bz.a;e=a.E;f=e.a;g=a.o;Vu(c,d,f,g.a,b.cE.a,e.b+g.b|0,K1(a));}
function K1(a){return Cn(a.ti,a.eF);}
function PD(a,b){var c,d;c=a.t4;d=a.t1;if(!(c!==null&&d!==null?(Jl(b.ho,c)&&Jl(b.hp,d)?1:0):0))F8(b,c,d);}
function AKC(a,b){var c;WE(a.bm,b);if(!(a.cF===null&&a.cM===null)){DP(b,1);c=a.cF;if(c!==null)G_(c,b);c=a.cM;if(c!==null)G_(c,b);c=a.cF;if(c!==null)Hf(c,b);c=a.cM;if(c!==null)Hf(c,b);DP(b,0);}}
function SF(a,b){var c,d;a:{b:{c=a.cF;if(!(c!==null&&G0(c,b))){c=a.cM;if(c===null)break b;if(!G0(c,b))break b;}d=1;break a;}d=0;}return d;}
function ALK(a,b,c,d){var e;if(!SF(a,b.u)){e=a.bm;if(d==1){c=Q5(e,b.u);if(c>=0)TM(e,e.bO.data[c]);}}return 1;}
function ALg(a,b,c){var d;d=a.cF;if(d!==null){d=Hm(d,b.u,a.nZ,1);if(d!==null)return d;}d=a.cM;if(d!==null){d=Hm(d,b.u,a.so,0);if(d!==null)return d;}d=a.bm;if(!G$(d.dh,b.u)&&!Jc(d.dh)){b=d.uk;if(b!==null)Iz(b);}return null;}
function AIX(a,b,c){return SF(a,b.u)?1:0;}
function AIE(a,b){var c,d,e;c=a.cF;d=c!==null&&HD(c,b.u,a.lE)?1:0;c=a.cM;e=c!==null&&HD(c,b.u,a.lE)?1:0;a:{if(!d&&!e){c=a.bm;d=Q5(c,b.u);if(d>=0)c.cj=d;if(!(G$(c.dh,c.E)&&Fk(c.bS.c7)?1:0)){d=0;break a;}}d=1;}return d;}
function AFe(a,b,c,d){var e,f;if(!Dd(a,b.u))return 0;e=Cn(d*0.25,a.eF);f=Cn(c*0.25,a.eF);if(b.bv){f=f+e|0;e=0;}if(a.cF!==null&&e){b=a.bm;Wb(b,b.bz.a+e|0);GD(a);}if(a.cM!==null&&f){b=a.bm;Tm(b,b.bz.b+f|0);HC(a);}return 1;}
function AMX(a){var b,c;b=K1(a);c=ZF(a.bm);c.b=Ba(c.b,b);c.a=Ba(c.a,b);return c;}
function F3(){var a=this;B.call(a);a.du=0;a.dF=0;a.ke=null;a.ll=0;a.e$=null;}
function ALz(a,b,c,d,e,f){var g=new F3();AHx(g,a,b,c,d,e,f);return g;}
function AHx(a,b,c,d,e,f,g){a.du=b;a.dF=c;a.ke=Cd(f,g);a.ll=d;a.e$=e;}
var NR=F(0);
var Ec=F(En);
function N4(){Ec.call(this);this.ga=null;}
function Q8(a){var b;b=new Rx;JK(b,a.ga);return b;}
function Lk(){B.call(this);this.t7=null;}
function AE$(a,b){b=b;L8(a.t7,b);}
function Tf(){B.call(this);this.r3=null;}
function AHD(a,b){b=b;F9(a.r3,b);}
function Ia(){var a=this;B.call(a);a.dD=null;a.iB=null;a.gr=0;}
function AO3(a,b,c){var d=new Ia();Z8(d,a,b,c);return d;}
function Z8(a,b,c,d){a.dD=b;a.iB=c;a.gr=d;}
function Zr(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return BB(a.dD,c.dD)&&BB(a.iB,c.iB)&&BB(Ct(a.gr),Ct(c.gr))?1:0;}return 0;}
function KU(){var a=this;Ia.call(a);a.iJ=null;a.lW=0;}
function ADm(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){if(!Zr(a,b))return 0;c=b;return BB(a.iJ,c.iJ);}return 0;}
function D9(){var a=this;B.call(a);a.er=null;a.eX=null;a.q_=0;}
function AN2(a,b,c){var d=new D9();J1(d,a,b,c);return d;}
function J1(a,b,c,d){a.er=b;a.eX=c;a.q_=d;}
function W5(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return BB(a.er,c.er)&&BB(a.eX,c.eX)?1:0;}return 0;}
function FB(){D9.call(this);this.fS=null;}
function HK(){var a=this;D9.call(a);a.f3=null;a.mg=0;}
function AMq(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){if(!W5(a,b))return 0;c=b;return BB(a.f3,c.f3);}return 0;}
function H5(){var a=this;D9.call(a);a.gV=null;a.f5=null;}
function ACA(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return BB(a.gV,c.gV)&&BB(a.f5,c.f5)?1:0;}return 0;}
function Ya(){var a=this;Gf.call(a);a.EG=null;a.GR=0;a.Fg=0;a.CN=0;}
function QD(){var a=this;B.call(a);a.mA=null;a.mB=null;}
function AGu(a){var b,c;b=a.mA;c=a.mB;Rn();Iy(b,c,ASk);}
function QE(){var a=this;B.call(a);a.pM=null;a.pN=null;}
function ADZ(a){var b,c;b=a.pM;c=a.pN;Rn();Iy(b,c,ASl);}
function QB(){var a=this;B.call(a);a.ta=null;a.s_=null;}
function ACP(a){Iy(a.ta,a.s_,null);}
function QC(){var a=this;B.call(a);a.l9=null;a.l$=null;}
function AGq(a){var b,c,d,e,f,g,h;b=a.l9;c=a.l$;d=DI(b.bc.d);e=Fw(b.bc.d);d=St(b.bc.eo,d,e);Dp(b.ey.bM);b=b.bc;e=Ef(b,c);if(d!==null){f=b.d;g=e.Y;h=e.bf;e=new Sg;e.v9=b;e.v8=c;d.Fp(f,g,h,1,e,b.hc);}}
function PL(){B.call(this);this.ok=null;}
function AKh(a){var b;b=a.ok;Dp(b.ey.bM);Ko(b.bc,V$(b),0);}
function PK(){B.call(this);this.tB=null;}
function AI6(a){var b;b=a.tB;Dp(b.ey.bM);Ko(b.bc,V$(b),1);}
function PJ(){B.call(this);this.rj=null;}
function ANp(a){var b,c,d,e;b=a.rj;Dp(b.ey.bM);FP(b);b=b.bc;BV(b);c=new Wa;c.oV=b;b=XD(C(253));if(!Kr()){c=new Bq;Br(c,C(254));KJ(b,c);}else{d=$rt_globals.navigator.clipboard.readText();e=new PI;e.mI=c;b=ABF(b);d.then(Bi(e,"f"),Bi(b,"f"));}}
function NU(){var a=this;B.call(a);a.mx=null;a.my=null;}
function AI2(a){var b,c;b=a.mx;c=a.my;b=b.bc.d;b.kV=c;HY(b);}
var O3=F(0);
var ARv=null;function ZZ(){ARv=new SI;}
function OK(){B.call(this);this.uo=null;}
function ADM(a){var b,c,d;b=a.uo;Dp(b.ey.bM);c=FP(b);b=b.bc;BV(b);d=new Qe;d.rz=b;Um(c,d);}
function Hz(){var a=this;B.call(a);a.ko=null;a.f$=null;a.gP=null;a.fq=null;a.fW=null;a.fs=null;a.fd=null;}
function AID(b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r;a:{j=c.data;k=O(Hz,b);l=j.length;if(l<=0){if(b<=0)break a;m=k.data;while(true){if(d>e)break a;m[d%m.length|0]=Im(f.data[d],g,h,i);d=d+1|0;}}m=k.data;while(d<=e){n=f.data[d];o=d%m.length|0;p=d%l|0;q=j[p];if(q!==null&&q.fd!==n){TN(g,q,i);m[o]=Im(n,g,h,i);j[p]=null;}else if(q!==null&&m[o]===null){m[o]=q;j[p]=null;}else m[o]=Im(n,g,h,i);d=d+1|0;}}d=0;while(d<l){r=j[d];if(r!==null){TN(g,r,i);j[d]=null;}d=d+1|0;}return k;}
function Im(b,c,d,e){var f,g,h;f=new Hz;f.fq=new Bp;f.fW=new Bp;f.fs=new Bp;f.fd=b;g=B7(e,b.fp);if(g!==null)g.gO=g.gO+1|0;else{g=new TW;h=K8(c,b.fp,d);g.gO=1;g.iA=h;Dn(e,b.fp,g);}e=g.iA;f.ko=e;Bn(f.fq,e.Z|0,e.bV|0);e=K8(c,b.hU,d);f.f$=e;Bn(f.fW,e.Z|0,e.bV|0);b=K8(c,b.h5,d);f.gP=b;Bn(f.fs,b.Z|0,b.bV|0);return f;}
function TN(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.fd.fp;f=B7(d,e);g=f.gO-1|0;f.gO=g;if(!g){a:{h=0;i=null;if(e===null){j=d.bP.data[0];while(j!==null){if(j.cg===null)break a;e=j.cl;i=j;j=e;}}else{k=J0(e);l=d.bP.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.ih==k&&WT(e,j.cg))){m=j.cl;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cl=j.cl;else d.bP.data[h]=j.cl;d.cn=d.cn+1|0;d.cp=d.cp-1|0;}JT(b,f.iA);}JT(b,c.f$);JT(b,c.gP);}
var Qc=F(0);
function Wy(b,c){var d;d=new TX;d.nU=b;d.nT=c;return d;}
function WH(){var a=this;B.call(a);a.fg=null;a.fY=0;a.h8=0;a.fz=0;}
function AC0(a){var b=new WH();AFf(b,a);return b;}
function AFf(a,b){a.fg=Bz();a.fz=0;a.h8=2048;a.fY=b;}
function K8(a,b,c){var d,e,f,g,h,i,j;d=G9(c,b);e=a.h8;if(d>e){c=new Bq;f=new R;T(f);B0(Bj(K(Bj(K(f,C(255)),d),C(256)),e),41);Br(c,S(f));J(c);}if(!a.fY){b=new BJ;Br(b,C(257));J(b);}a:{b=new B4;if(d){b:{c=a.fg;if(c.j>0){c=BM(c);g=d;while(true){if(!BN(c))break b;f=BR(c);if(f.Z>=g)break;}Cb(b,f.bl,f.bA,g,a.fY);f.bl=f.bl+g;h=f.Z-g;f.Z=h;if(h===0.0)TS(a.fg,f);break a;}}g=a.fz;i=d;Cb(b,0.0,g,i,a.fY);c=a.fg;f=new B4;h=a.fz;g=a.h8-d|0;j=a.fY;f.bl=i;f.bA=h;f.Z=g;f.bV=j;Bu(c,f);a.fz=a.fz+a.fY|0;}}return b;}
function JT(a,b){var c,d,e,f,g,h,i;a:{c=new B4;c.bl=b.bl;c.bA=b.bA;c.Z=b.Z;c.bV=b.bV;b=a.fg;if(b.j>0){d=BM(b);while(true){if(!BN(d))break a;e=BR(d);if(e.bA===c.bA){f=e.bl;g=e.Z;h=f+g;i=c.bl;if(h===i){c.bl=f;c.Z=c.Z+g;PT(d);}else{h=c.Z;if(i+h===f){c.Z=h+g;PT(d);}}}}}}Bu(a.fg,c);}
function L6(a){return Cd(a.h8,a.fz);}
function TG(){var a=this;Ex.call(a);a.eM=null;a.gb=null;a.hv=null;a.em=null;a.is=0.0;a.gh=0;a.hz=0;a.cI=null;a.hr=null;}
function Jm(a){var b;b=a.o;return b.b&&b.a?0:1;}
function Un(a){var b,c;a:{if(a.hv!==null){b=a.gb;if(b!==null&&!DT(b)){c=0;break a;}}c=1;}return c;}
function N$(a,b){a.o.a=b;}
function Om(a,b,c,d,e){var f,g;f=a.eM.dT;Bn(f,d,a.o.a);g=a.E;BC(b,g.b+c|0,g.a,f,e);}
function Tl(a){if(a.em===null)a.em=HX(a.eM,a.hv);}
function RA(){B.call(this);this.nv=null;}
function ALM(a,b,c){var d,e;c=a.nv;d=c.d.f;e=b.bb;b=c.ej;QY(d.v.data[e],0,b);}
var UE=F(BU);
function DC(){var a=this;B.call(a);a.jp=null;a.gi=null;a.dJ=null;a.c8=null;a.h0=null;a.ky=null;a.f7=0;a.kt=null;}
function ACR(a,b){var c=new DC();Wu(c,a,b);return c;}
function AOG(a,b,c,d){var e=new DC();YF(e,a,b,c,d);return e;}
function Wu(a,b,c){YF(a,b,c,null,null);}
function YF(a,b,c,d,e){a.gi=new B4;a.dJ=new Bp;a.c8=new Bp;a.kt=c;a.ky=e;a.jp=b;a.h0=d;}
function S8(a){return a.h0===null?0:1;}
function L_(){B.call(this);this.nY=null;}
function AGX(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.nY;c=new He;d=new HF;e=new HT;AAQ();IR(e,AR$);K$(d,e,BA(ASa),BA(AR_),BA(ASc),BA(ASa),BA(ASb),BA(ASe),BA(ASd),BA(ASg),BA(ASf),BA(ASh));XZ();f=(ASm.f1()).data;g=f.length;h=O(H1,g);i=h.data;j=0;while(j<g){i[j]=f[j].k7;j=j+1|0;}k=ZQ(N(C(258)),N(C(259)),N(C(260)),N(C(233)));l=new Hk;m=new Hx;AIl();e=ASn;Ld(m,e,ASo,ASp,ASq,ASr,e);Kk(l,m,ABb(),ABk(N(C(261)),N(C(89)),N(C(90))),ABb(),Wj(1,0.125),ASs,ASt);H7(c,d,h,k,l,WB(N(C(91)),N(C(92)),N(C(93)),N(C(262))));I1(b,c);}
function Ma(){B.call(this);this.o2=null;}
function ALS(a){Pa(a.o2);}
function L$(){B.call(this);this.um=null;}
function ABO(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.um;c=new He;d=new HF;e=new HT;AAC();IR(e,ASu);K$(d,e,BA(ASv),BA(ASw),BA(ASx),BA(ASv),BA(ASy),BA(ASz),BA(ASA),BA(ASB),BA(ASC),BA(ASD));ZL();f=(ASE.f1()).data;g=f.length;h=O(H1,g);i=h.data;j=0;while(j<g){i[j]=f[j].kd;j=j+1|0;}k=ZQ(N(C(263)),N(C(264)),N(C(265)),N(C(266)));l=new Hk;m=new Hx;ACC();e=ASF;Ld(m,e,ASG,ASH,ASI,ASJ,e);Kk(l,m,AA5(),ABk(N(C(267)),N(C(268)),Ha(0)),AA5(),Wj(1,0.07500000298023224),ASK,ASL);H7(c,d,h,k,l,WB(N(C(269)),N(C(270)),N(C(271)),N(C(272))));I1(b,
c);}
function UL(){B.call(this);this.pC=null;}
function AHJ(a){var b;b=a.pC;H$(b,b.gE.ls,b.fh+1|0);}
function UK(){B.call(this);this.sK=null;}
function AKB(a){var b,c;b=a.sK;c=b.fh;if(c>7)H$(b,b.gE.ls,c-1|0);}
function P$(){B.call(this);this.rQ=null;}
function AHi(a){var b,c,d,e,f,g,h,i;b=a.rQ;c=G(Bv,[C(103),C(194),C(273)]).data;d=O(DC,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new R_;i.lS=b;i.lT=h;e[f]=ACR(i,h);f=f+1|0;}return d;}
function Q_(){B.call(this);this.nA=null;}
function AGC(a){P5(a.nA.lD,0);}
function Ra(){B.call(this);this.oK=null;}
function ALA(a){P5(a.oK.lD,1);}
function VT(){B.call(this);this.rb=null;}
function AB2(a){var b,c,d,e,f;b=a.rb.d.f;c=b.b2;d=new R;T(d);Bj(K(d,C(274)),c);$rt_globals.console.info($rt_ustr(S(d)));c=b.kj;d=new R;T(d);Bj(K(d,C(275)),c);$rt_globals.console.info($rt_ustr(S(d)));d=b.cN;e=GA(EN(b));UT(d,0,d.cK,e);b=IP();f=b.js;f.data[0]=10;M5(b,f,0,1);}
function VO(){B.call(this);this.ni=null;}
function AGF(a){Qf(a.ni);}
function VP(){B.call(this);this.oi=null;}
function AMP(a){RF(a.oi);}
function VQ(){B.call(this);this.tL=null;}
function AHX(a){KN(a.tL.d);}
function VR(){B.call(this);this.l_=null;}
function AF8(a){HY(a.l_.d);}
var J2=F(0);
function Vi(){var a=this;B.call(a);a.oa=null;a.ob=null;a.oc=null;}
function Nc(){B.call(this);this.pG=null;}
function ACy(a,b){var c,d;c=a.pG;d=GP(b,c.bm.cE.a-c.o.a|0);Wb(c.bm,d);GD(c);}
function Nb(){B.call(this);this.qI=null;}
function ACU(a,b){var c,d;c=a.qI;d=GP(b,c.bm.cE.b-c.o.b|0);Tm(c.bm,d);HC(c);}
function S9(){B.call(this);this.pw=null;}
function ANe(a,b,c){FE(BH(a.pw.d.f,b.bb),0,H(c));}
function O0(){var a=this;B.call(a);a.nH=null;a.nG=null;}
function AEJ(a,b){a.nH.m(Zz(a.nG,b));}
function ABf(){var a=this;B.call(a);a.gz=null;a.cU=0;}
function AFP(a,b){var c=new ABf();ABX(c,a,b);return c;}
function ABX(a,b,c){a.gz=b;a.cU=c;}
function AI7(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return a.cU==c.cU&&BB(a.gz,c.gz)?1:0;}return 0;}
function LY(){B.call(this);this.na=null;}
function AHB(a,b){b=b;Lt(a.na,b);}
function V5(){B.call(this);this.ne=null;}
function ANw(a,b){b=b;F9(a.ne,b);}
var HV=F(0);
function LG(){var a=this;B.call(a);a.md=null;a.mc=null;}
function AGI(a){W3(a.md,a.mc);}
function Lp(){var a=this;B.call(a);a.rf=null;a.rg=null;}
function ABS(a){a.rf.m(a.rg);}
function TV(){B.call(this);this.qw=null;}
function AM9(a){return a.qw;}
var SI=F();
function Vp(){var a=this;B.call(a);a.mn=null;a.mm=null;a.mq=null;a.mo=null;}
function AGc(a,b){var c,d,e,f,g,h,i;c=a.mn;d=a.mm;e=a.mq;f=a.mo;if(!(b.done?1:0)){SH(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Sr;c.oW=d;c.oY=g;c.oZ=f;b.then(Bi(c,"f"),Bi(e,"f"));}else{h=f.data;c=g.values();b=Eu(g.name);i=h.length;f=CX(f,i+1|0);f.data[i]=b;SH(c,d,e,f);}}}
function Ew(){var a=this;B.call(a);a.hQ=0;a.ri=0;a.gY=null;a.fu=null;a.o8=null;a.ip=null;}
function ASM(a){var b=new Ew();JK(b,a);return b;}
function JK(a,b){a.ip=b;a.ri=b.cn;a.gY=null;}
function EG(a){var b,c;if(a.gY!==null)return 1;while(true){b=a.hQ;c=a.ip.bP.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.hQ=b+1|0;}return 0;}
function XQ(a){var b;if(a.ri==a.ip.cn)return;b=new Gd;W(b);J(b);}
function Ka(a){var b,c,d,e;XQ(a);if(!EG(a)){b=new La;W(b);J(b);}b=a.gY;if(b!==null){c=a.fu;if(c!==null)a.o8=c;a.fu=b;a.gY=b.cl;}else{d=a.ip.bP.data;e=a.hQ;a.hQ=e+1|0;b=d[e];a.fu=b;a.gY=b.cl;a.o8=null;}}
var Rx=F(Ew);
function NQ(a){Ka(a);return a.fu.cg;}
var Yh=F();
function Kr(){return "clipboard" in $rt_globals.navigator?1:0;}
function Xc(){var a=this;B.call(a);a.CJ=null;a.HF=0;}
function PY(){var a=this;B.call(a);a.g=null;a.db=0;a.jj=null;a.m5=0;a.fH=0;a.eg=0;a.bh=0;a.kq=null;}
function IY(a){return a.g.bu;}
function VN(a,b,c,d){var e,f,g,h,i,j;e=Bz();f=a.db;g=0;if(c!=f)a.db=c;a:{switch(b){case -1073741784:h=new Qv;c=a.bh+1|0;a.bh=c;EQ(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new OC;c=a.bh+1|0;a.bh=c;EQ(h,c);break a;case -33554392:h=new Ry;c=a.bh+1|0;a.bh=c;EQ(h,c);break a;default:c=a.fH+1|0;a.fH=c;if(d!==null)h=AO$(c);else{h=new E1;EQ(h,0);g=1;}c=a.fH;if(c<=(-1))break a;if(c>=10)break a;a.jj.data[c]=h;break a;}h=new VF;EQ(h,(-1));}while(true){if(EC(a.g)&&a.g.h==(-536870788))
{d=AL5(B5(a,2),B5(a,64));while(!CW(a.g)&&EC(a.g)){i=a.g;j=i.h;if(j&&j!=(-536870788)&&j!=(-536870871))break;Ch(d,Bd(i));i=a.g;if(i.U!=(-536870788))continue;Bd(i);}i=JC(a,d);i.I(h);}else if(a.g.U==(-536870788)){i=F1(h);Bd(a.g);}else{i=NX(a,h);d=a.g;if(d.U==(-536870788))Bd(d);}if(i!==null)Bu(e,i);if(CW(a.g))break;if(a.g.U==(-536870871))break;}if(a.g.jM==(-536870788))Bu(e,F1(h));if(a.db!=f&&!g){a.db=f;d=a.g;d.fr=f;d.h=d.U;d.d$=d.ep;j=d.cO;d.q=j+1|0;d.gw=j;EF(d);}switch(b){case -1073741784:break;case -536870872:d
=new LE;E2(d,e,h);return d;case -268435416:d=new T9;E2(d,e,h);return d;case -134217688:d=new P3;E2(d,e,h);return d;case -67108824:d=new RU;E2(d,e,h);return d;case -33554392:d=new Do;E2(d,e,h);return d;default:switch(e.j){case 0:break;case 1:return AOX(Bo(e,0),h);default:return AOB(e,h);}return F1(h);}d=new H3;E2(d,e,h);return d;}
function AAu(a){var b,c,d,e,f,g,h;b=Bt(4);c=(-1);d=(-1);if(!CW(a.g)&&EC(a.g)){e=b.data;c=Bd(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B2(3);b=e.data;b[0]=c&65535;f=a.g;g=f.U;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bd(f);f=a.g;g=f.U;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bd(f);return ALQ(e,3);}return ALQ(e,2);}if(!B5(a,2))return XO(b[0]);if(B5(a,64))return AJ$(b[0]);return ADQ(b[0]);}e=b.data;c=1;while(c<4&&!CW(a.g)&&EC(a.g)){h=c+1|0;e[c]=Bd(a.g);c=h;}if(c==1){h=e[0];if(!(ASN.w9(h)==ASO?0:1))return VB(a,e[0]);}if
(!B5(a,2))return API(b,c);if(B5(a,64)){f=new Vo;MZ(f,b,c);return f;}f=new R9;MZ(f,b,c);return f;}
function NX(a,b){var c,d,e,f,g,h,i;if(EC(a.g)&&!IM(a.g)&&Jd(a.g.h)){if(B5(a,128)){c=AAu(a);if(!CW(a.g)){d=a.g;e=d.U;if(!(e==(-536870871)&&!(b instanceof E1))&&e!=(-536870788)&&!EC(d))c=K2(a,b,c);}}else if(!M8(a.g)&&!Th(a.g)){f=new M_;T(f);while(!CW(a.g)&&EC(a.g)&&!M8(a.g)&&!Th(a.g)){if(!(!IM(a.g)&&!a.g.h)&&!(!IM(a.g)&&Jd(a.g.h))){g=a.g.h;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bd(a.g);if(!KV(e))B0(f,e&65535);else Hv(f,FK(e));}if(!B5(a,2)){c=new Qr;C$(c);c.cc
=S(f);e=f.F;c.bt=e;c.jA=AIS(e);c.ks=AIS(c.bt);h=0;while(h<(c.bt-1|0)){P8(c.jA,I(c.cc,h),(c.bt-h|0)-1|0);P8(c.ks,I(c.cc,(c.bt-h|0)-1|0),(c.bt-h|0)-1|0);h=h+1|0;}}else if(B5(a,64))c=APH(f);else{c=new L7;C$(c);c.gy=S(f);c.bt=f.F;}}else c=K2(a,b,Vn(a,b));}else{d=a.g;if(d.U!=(-536870871))c=K2(a,b,Vn(a,b));else{if(b instanceof E1)J(B3(C(5),d.bu,M7(d)));c=F1(b);}}a:{if(!CW(a.g)){e=a.g.U;if(!(e==(-536870871)&&!(b instanceof E1))&&e!=(-536870788)){f=NX(a,b);if(c instanceof CG&&!(c instanceof EH)&&!(c instanceof Cx)&&
!(c instanceof D7)){i=c;if(!f.bE(i.C)){c=new Ul;Et(c,i.C,i.e,i.gS);c.C.I(c);}}if((f.gZ()&65535)!=43)c.I(f);else c.I(f.C);break a;}}if(c===null)return null;c.I(b);}if((c.gZ()&65535)!=43)return c;return c.C;}
function K2(a,b,c){var d,e,f,g,h;d=a.g;e=d.U;if(c!==null&&!(c instanceof BW)){switch(e){case -2147483606:Bd(d);d=new We;CS(d,c,b,e);K6();c.I(ASP);return d;case -2147483605:Bd(d);d=new Ot;CS(d,c,b,(-2147483606));K6();c.I(ASP);return d;case -2147483585:Bd(d);d=new N9;CS(d,c,b,(-536870849));K6();c.I(ASP);return d;case -2147483525:f=new L2;d=EJ(d);g=a.eg+1|0;a.eg=g;Ic(f,d,c,b,(-536870849),g);K6();c.I(ASP);return f;case -1073741782:case -1073741781:Bd(d);d=new Qo;CS(d,c,b,e);c.I(d);return d;case -1073741761:Bd(d);d
=new Pp;CS(d,c,b,(-536870849));c.I(b);return d;case -1073741701:h=new S1;d=EJ(d);e=a.eg+1|0;a.eg=e;Ic(h,d,c,b,(-536870849),e);c.I(h);return h;case -536870870:case -536870869:Bd(d);if(c.gZ()!=(-2147483602)){d=new Cx;CS(d,c,b,e);}else if(B5(a,32)){d=new Qp;CS(d,c,b,e);}else{d=new Ni;f=N_(a.db);CS(d,c,b,e);d.jL=f;}c.I(d);return d;case -536870849:Bd(d);d=new Fe;CS(d,c,b,(-536870849));c.I(b);return d;case -536870789:h=new EL;d=EJ(d);e=a.eg+1|0;a.eg=e;Ic(h,d,c,b,(-536870849),e);c.I(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bd(d);d=new Wf;Et(d,f,b,e);f.e=d;return d;case -2147483585:Bd(d);c=new Ue;Et(c,f,b,(-2147483585));return c;case -2147483525:c=new NW;QS(c,EJ(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bd(d);d=new Pj;Et(d,f,b,e);f.e=d;return d;case -1073741761:Bd(d);c=new Sl;Et(c,f,b,(-1073741761));return c;case -1073741701:c=new P4;QS(c,EJ(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bd(d);d=AO1(f,b,e);f.e=d;return d;case -536870849:Bd(d);c
=new D7;Et(c,f,b,(-536870849));return c;case -536870789:return AN$(EJ(d),f,b,(-536870789));default:}return c;}
function Vn(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof E1;while(true){a:{e=a.g;f=e.U;if((f&(-2147418113))==(-2147483608)){Bd(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.db=g;else{if(f!=(-1073741784))g=a.db;c=VN(a,f,g,b);e=a.g;if(e.U!=(-536870871))J(B3(C(5),e.bu,e.cO));Bd(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bd(e);c
=ALC(0);break a;case -2147483577:Bd(e);c=new Nd;BK(c);break a;case -2147483558:Bd(e);c=new U8;h=a.bh+1|0;a.bh=h;AAO(c,h);break a;case -2147483550:Bd(e);c=ALC(1);break a;case -2147483526:Bd(e);c=new UI;BK(c);break a;case -536870876:Bd(e);a.bh=a.bh+1|0;if(B5(a,8)){if(B5(a,1)){c=AOo(a.bh);break a;}c=ANP(a.bh);break a;}if(B5(a,1)){c=AOH(a.bh);break a;}c=APc(a.bh);break a;case -536870866:Bd(e);if(B5(a,32)){c=APv();break a;}c=AO6(N_(a.db));break a;case -536870821:Bd(e);i=0;c=a.g;if(c.U==(-536870818)){i=1;Bd(c);}c
=JC(a,Fr(a,i));c.I(b);e=a.g;if(e.U!=(-536870819))J(B3(C(5),e.bu,e.cO));NG(e,1);Bd(a.g);break a;case -536870818:Bd(e);a.bh=a.bh+1|0;if(!B5(a,8)){c=new Ji;BK(c);break a;}c=new Mb;e=N_(a.db);BK(c);c.ql=e;break a;case 0:j=e.ep;if(j!==null)c=JC(a,j);else{if(CW(e)){c=F1(b);break a;}c=XO(f&65535);}Bd(a.g);break a;default:break b;}Bd(e);c=new Ji;BK(c);break a;}h=(f&2147483647)-48|0;if(a.fH<h)J(B3(C(5),EO(e),M7(a.g)));Bd(e);a.bh=a.bh+1|0;c=!B5(a,2)?ANU(h,a.bh):B5(a,64)?AOp(h,a.bh):APD(h,a.bh);a.jj.data[h].jh=1;a.m5=
1;break a;}if(f>=0&&!F4(e)){c=VB(a,f);Bd(a.g);}else if(f==(-536870788))c=F1(b);else{if(f!=(-536870871)){b=new HN;c=!F4(a.g)?U4(f&65535):a.g.ep.eh();e=a.g;Ip(b,c,e.bu,e.cO);J(b);}if(d){b=new HN;e=a.g;Ip(b,C(5),e.bu,e.cO);J(b);}c=F1(b);}}}if(f!=(-16777176))break;}return c;}
function Fr(a,b){var c,d,e,f,g,h,i,j,$$je;c=AL5(B5(a,2),B5(a,64));D3(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(CW(a.g))break a;h=a.g;b=h.U;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Ch(c,d);d=Bd(a.g);h=a.g;if(h.U!=(-536870874)){d=38;break d;}if(h.h==(-536870821)){Bd(h);e=1;d=(-1);break d;}Bd(h);if(g){c=Fr(a,0);break d;}if(a.g.U==(-536870819))break d;UR(c,Fr(a,0));break d;case -536870867:if(!g){b=h.h;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bd(h);h=a.g;i=h.U;if(F4(h))break c;if
(i<0){j=a.g.h;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Jd(i))break e;i=i&65535;break e;}catch($$e){$$je=ET($$e);if($$je instanceof DE){break b;}else{throw $$e;}}}try{BS(c,d,i);}catch($$e){$$je=ET($$e);if($$je instanceof DE){break b;}else{throw $$e;}}Bd(a.g);d=(-1);break d;}}if(d>=0)Ch(c,d);d=45;Bd(a.g);break d;case -536870821:if(d>=0){Ch(c,d);d=(-1);}Bd(a.g);j=0;h=a.g;if(h.U==(-536870818)){Bd(h);j=1;}if(!e)Wo(c,Fr(a,j));else UR(c,Fr(a,j));e=0;Bd(a.g);break d;case -536870819:if(d>=0)Ch(c,
d);d=93;Bd(a.g);break d;case -536870818:if(d>=0)Ch(c,d);d=94;Bd(a.g);break d;case 0:if(d>=0)Ch(c,d);h=a.g.ep;if(h===null)d=0;else{ABD(c,h);d=(-1);}Bd(a.g);break d;default:}if(d>=0)Ch(c,d);d=Bd(a.g);}g=0;}J(B3(C(5),IY(a),a.g.cO));}J(B3(C(5),IY(a),a.g.cO));}if(!f){if(d>=0)Ch(c,d);return c;}J(B3(C(5),IY(a),a.g.cO-1|0));}
function VB(a,b){var c,d,e;c=KV(b);if(B5(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return ADQ(b&65535);}if(B5(a,64)&&b>128){if(c){d=new Lv;C$(d);d.bt=2;d.pS=FT(FQ(b));return d;}if(NN(b))return AIY(b&65535);if(!Rl(b))return AJ$(b&65535);return AGx(b&65535);}}if(!c){if(NN(b))return AIY(b&65535);if(!Rl(b))return XO(b&65535);return AGx(b&65535);}d=new Dv;C$(d);d.bt=2;d.fe=b;e=(FK(b)).data;d.iN=e[0];d.hH=e[1];return d;}
function JC(a,b){var c,d,e;if(!Zi(b)){if(!b.G){if(b.gg())return AF9(b);return ALD(b);}if(!b.gg())return AG8(b);c=new Ie;Sx(c,b);return c;}c=WU(b);d=new LK;BK(d);d.oJ=c;d.uX=c.T;if(!b.G){if(b.gg())return ZT(AF9(GK(b)),d);return ZT(ALD(GK(b)),d);}if(!b.gg())return ZT(AG8(GK(b)),d);c=new Pe;e=new Ie;Sx(e,GK(b));ABr(c,e,d);return c;}
function GO(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B5(a,b){return (a.db&b)!=b?0:1;}
var Re=F(0);
var ARp=null;function ZP(){ARp=new Po;}
var Z1=F();
function XS(b,c,d,e,f,g){g.b=c.b;g.a=f;BC(b,d.b,d.a,g,e);BC(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;BC(b,d.b,d.a+f|0,g,e);BC(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function ZD(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;BC(b,j,k,i,h);BC(b,j,k,i,h);BC(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;BC(b,l,j,i,h);BC(b,l,j,i,h);BC(b,l+g|0,j+g|0,i,h);}
var Vl=F(Ea);
var ASQ=null;function ZR(){ASQ=E($rt_floatcls());}
var E3=F();
var ASR=null;var ASS=null;var AST=null;var ASU=null;var AQs=null;function YQ(){ASR=Fv([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);ASS=ADP([BI(1),BI(10),BI(100),BI(1000),BI(10000),BI(100000),BI(1000000),BI(10000000),BI(100000000),BI(1000000000),Dh(1410065408, 2),Dh(1215752192, 23),Dh(3567587328, 232),Dh(1316134912, 2328),Dh(276447232, 23283),Dh(2764472320, 232830),Dh(1874919424, 2328306),Dh(1569325056, 23283064),Dh(2808348672, 232830643)]);AST=ADP([BI(1),BI(10),BI(100),BI(10000),BI(100000000),
Dh(1874919424, 2328306)]);ASU=new Sn;AQs=new Tt;}
var GW=F();
var ASV=0;var ASW=null;var ASX=null;function Zp(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.nf=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.jQ=0;c.jr=0;return;}if(f)d=e|8388608;else{d=e<<1;while(AEN(Wg(BI(d),BI(8388608)),AAq)){d=d<<1;f=f+(-1)|0;}}g=Zx(ASX,f);if(g<0)g= -g|0;h=ASX.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=GR(d,ASW.data[e],i);if(j<ASV){while($rt_ucmp(j,ASV)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=ASX.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=GR(d,
ASW.data[e],i);}e=d<<1;d=e+1|0;h=ASW.data;f=g+1|0;k=h[f];l=i-1|0;m=GR(d,k,l);n=GR(e-1|0,ASW.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?V($rt_udiv(j,o),o):q<0?V($rt_udiv(j,k),k)+k|0:V($rt_udiv((j+(k/2|0)|0),k),k);if(Hr(BI(d),BI(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.jQ=d;c.jr=g-50|0;}
function GR(b,c,d){return X0(APn(AIz(Wg(BI(b),Dh(4294967295, 0)),Wg(BI(c),Dh(4294967295, 0))),32-d|0));}
function X8(){ASV=$rt_udiv((-1),10);ASW=Fv([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);ASX=Fv([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Tt(){var a=this;B.call(a);a.jQ=0;a.jr=0;a.nf=0;}
var FW=F(0);
function R0(){B.call(this);this.pP=null;}
function AIk(a,b,c,d){IF(a.pP,b,c.bb,d.bb);}
function R1(){B.call(this);this.mr=null;}
function AGd(a,b,c,d){IF(a.mr,b,c.bb,d.bb);}
function Hb(){B.call(this);this.lz=0;}
var ASY=null;var ASZ=null;var AS0=null;function AJF(a){var b=new Hb();ZX(b,a);return b;}
function ZX(a,b){a.lz=b;}
function NL(b){return !b?ASZ:ASY;}
function W7(){ASY=AJF(1);ASZ=AJF(0);AS0=E($rt_booleancls());}
var IJ=F(0);
var Qz=F();
var NB=F(0);
var Y0=F();
function Q1(){B.call(this);this.sJ=null;}
function AI3(a,b,c,d){Hl(a.sJ,b,c.bb,d.bb);}
var Q0=F();
function AMA(a,b){return b.dD.cU>=0?0:1;}
var QZ=F();
function AJ7(a,b){var c;a:{b:{b=b;if(b!==null){b=b.er;if(b===null)break b;if(b.cU>=0)break b;}c=1;break a;}c=0;}return c;}
function Q2(){B.call(this);this.rX=null;}
function AIx(a,b,c,d){Hl(a.rX,b,c.bb,d.bb);}
function By(){var a=this;B.call(a);a.e=null;a.b0=0;a.od=null;a.gS=0;}
var AQo=0;function BK(a){var b;b=AQo;AQo=b+1|0;a.od=J_(b);}
function Jz(a,b){var c;c=AQo;AQo=c+1|0;a.od=J_(c);a.e=b;}
function GS(a,b,c,d){var e;e=d.r;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function G1(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AEa(a,b){a.gS=b;}
function ADx(a){return a.gS;}
function AK5(a){return a.e;}
function ALV(a,b){a.e=b;}
function ALU(a,b){return 1;}
function AMI(a){return null;}
function H9(a){var b;a.b0=1;b=a.e;if(b!==null){if(!b.b0){b=b.eU();if(b!==null){a.e.b0=1;a.e=b;}a.e.dV();}else if(b instanceof FM&&b.dZ.jh)a.e=b.e;}}
function ABu(){AQo=1;}
var Ta=F(0);
function TX(){var a=this;B.call(a);a.nU=null;a.nT=0.0;}
function G9(a,b){return JA(a.nU,b,a.nT*2.0+0.875);}
var QP=F(Ea);
var AS1=null;function KD(b,c){return Long_udiv(b, c);}
function WP(b,c){return Long_urem(b, c);}
function Hr(b,c){return Long_ucompare(b, c);}
function Yp(){AS1=E($rt_longcls());}
function V6(){var a=this;B.call(a);a.nm=null;a.nk=null;a.nj=0;a.nl=0;}
function AI8(a,b){b=b;DK(a.nm,a.nk,b,a.nj,a.nl);}
function V7(){var a=this;B.call(a);a.ux=null;a.uw=null;a.uv=0;a.uu=0;}
function AFp(a,b){b=b;DK(a.ux,a.uw,b,a.uv,a.uu);}
var Po=F();
function AIR(a,b){}
function Cw(){var a=this;By.call(a);a.jh=0;a.dg=0;}
var ASP=null;function K6(){K6=Bf(Cw);AFa();}
function AO$(a){var b=new Cw();EQ(b,a);return b;}
function EQ(a,b){K6();BK(a);a.dg=b;}
function ACY(a,b,c,d){var e,f;e=HB(d,a.dg);II(d,a.dg,b);f=a.e.c(b,c,d);if(f<0)II(d,a.dg,e);return f;}
function AH0(a){return a.dg;}
function ADi(a,b){return 0;}
function AFa(){var b;b=new Na;BK(b);ASP=b;}
function FX(){var a=this;B.call(a);a.S=null;a.fr=0;a.eb=0;a.tf=0;a.jM=0;a.U=0;a.h=0;a.qN=0;a.ep=null;a.d$=null;a.q=0;a.g9=0;a.cO=0;a.gw=0;a.bu=null;}
var AS2=null;var ASN=null;var ASO=0;function NG(a,b){if(b>0&&b<3)a.eb=b;if(b==1){a.h=a.U;a.d$=a.ep;a.q=a.gw;a.gw=a.cO;EF(a);}}
function F4(a){return a.ep===null?0:1;}
function IM(a){return a.d$===null?0:1;}
function Bd(a){EF(a);return a.jM;}
function EJ(a){var b;b=a.ep;EF(a);return b;}
function EF(a){var b,c,d,e,f,g,h,$$je;a.jM=a.U;a.U=a.h;a.ep=a.d$;a.cO=a.gw;a.gw=a.q;while(true){b=0;c=a.q>=a.S.data.length?0:Kp(a);a.h=c;a.d$=null;if(a.eb==4){if(c!=92)return;c=a.q;d=a.S.data;c=c>=d.length?0:d[BT(a)];a.h=c;switch(c){case 69:break;default:a.h=92;a.q=a.g9;return;}a.eb=a.tf;a.h=a.q>(a.S.data.length-2|0)?0:Kp(a);}a:{c=a.h;if(c!=92){e=a.eb;if(e==1)switch(c){case 36:a.h=(-536870876);break a;case 40:if(a.S.data[a.q]!=63){a.h=(-2147483608);break a;}BT(a);c=a.S.data[a.q];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.h=(-134217688);BT(a);break b;default:J(B3(C(5),EO(a),a.q));}a.h=(-67108824);BT(a);}else{switch(c){case 33:break;case 60:BT(a);c=a.S.data[a.q];e=1;break b;case 61:a.h=(-536870872);BT(a);break b;case 62:a.h=(-33554392);BT(a);break b;default:f=ABw(a);a.h=f;if(f<256){a.fr=f;f=f<<16;a.h=f;a.h=(-1073741784)|f;break b;}f=f&255;a.h=f;a.fr=f;f=f<<16;a.h=f;a.h=(-16777176)|f;break b;}a.h=(-268435416);BT(a);}}if(!e)break;}break a;case 41:a.h=(-536870871);break a;case 42:case 43:case 63:e=a.q;d
=a.S.data;switch(e>=d.length?42:d[e]){case 43:a.h=c|(-2147483648);BT(a);break a;case 63:a.h=c|(-1073741824);BT(a);break a;default:}a.h=c|(-536870912);break a;case 46:a.h=(-536870866);break a;case 91:a.h=(-536870821);NG(a,2);break a;case 93:if(e!=2)break a;a.h=(-536870819);break a;case 94:a.h=(-536870818);break a;case 123:a.d$=AA7(a,c);break a;case 124:a.h=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.h=(-536870874);break a;case 45:a.h=(-536870867);break a;case 91:a.h=(-536870821);break a;case 93:a.h
=(-536870819);break a;case 94:a.h=(-536870818);break a;default:}}else{c=a.q>=(a.S.data.length-2|0)?(-1):Kp(a);c:{a.h=c;switch(c){case -1:J(B3(C(5),EO(a),a.q));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.h
=ZI(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eb!=1)break a;a.h=(-2147483648)|c;break a;case 65:a.h=(-2147483583);break a;case 66:a.h=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B3(C(5),EO(a),a.q));case 68:case 83:case 87:case 100:case 115:case 119:a.d$=QM(DL(a.S,
a.g9,1),0);a.h=0;break a;case 71:a.h=(-2147483577);break a;case 80:case 112:break c;case 81:a.tf=a.eb;a.eb=4;b=1;break a;case 90:a.h=(-2147483558);break a;case 97:a.h=7;break a;case 98:a.h=(-2147483550);break a;case 99:c=a.q;d=a.S.data;if(c>=(d.length-2|0))J(B3(C(5),EO(a),a.q));a.h=d[BT(a)]&31;break a;case 101:a.h=27;break a;case 102:a.h=12;break a;case 110:a.h=10;break a;case 114:a.h=13;break a;case 116:a.h=9;break a;case 117:a.h=Ow(a,4);break a;case 120:a.h=Ow(a,2);break a;case 122:a.h=(-2147483526);break a;default:}break a;}g
=Zs(a);h=0;if(a.h==80)h=1;try{a.d$=QM(g,h);}catch($$e){$$je=ET($$e);if($$je instanceof Ih){J(B3(C(5),EO(a),a.q));}else{throw $$e;}}a.h=0;}}if(b)continue;else break;}}
function Zs(a){var b,c,d,e,f,g;b=new R;Fo(b,10);c=a.q;d=a.S;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=DL(d,BT(a),1);f=new R;T(f);K(K(f,C(276)),b);return S(f);}BT(a);c=0;a:{while(true){g=a.q;d=a.S.data;if(g>=(d.length-2|0))break;c=d[BT(a)];if(c==125)break a;B0(b,c);}}if(c!=125)J(B3(C(5),a.bu,a.q));}if(!b.F)J(B3(C(5),a.bu,a.q));f=S(b);if(H(f)==1){b=new R;T(b);K(K(b,C(276)),f);return S(b);}b:{c:{if(H(f)>3){if(Jr(f,C(276)))break c;if(Jr(f,C(277)))break c;}break b;}f=DS(f,2);}return f;}
function AA7(a,b){var c,d,e,f,g,$$je;c=new R;Fo(c,4);d=(-1);e=2147483647;a:{while(true){f=a.q;g=a.S.data;if(f>=g.length)break a;b=g[BT(a)];if(b==125)break a;if(b==44&&d<0)try{d=IC(GM(c),10);ABa(c,0,W8(c));continue;}catch($$e){$$je=ET($$e);if($$je instanceof CT){break;}else{throw $$e;}}B0(c,b&65535);}J(B3(C(5),a.bu,a.q));}if(b!=125)J(B3(C(5),a.bu,a.q));if(c.F>0)b:{try{e=IC(GM(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=ET($$e);if($$je instanceof CT){}else{throw $$e;}}J(B3(C(5),a.bu,a.q));}else if(d<0)J(B3(C(5),
a.bu,a.q));if((d|e|(e-d|0))<0)J(B3(C(5),a.bu,a.q));b=a.q;g=a.S.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.h=(-2147483525);BT(a);break c;case 63:a.h=(-1073741701);BT(a);break c;default:}a.h=(-536870789);}c=new LS;c.ea=d;c.d8=e;return c;}
function EO(a){return a.bu;}
function CW(a){return !a.U&&!a.h&&a.q==a.qN&&!F4(a)?1:0;}
function Jd(b){return b<0?0:1;}
function EC(a){return !CW(a)&&!F4(a)&&Jd(a.U)?1:0;}
function M8(a){var b;b=a.U;return b<=56319&&b>=55296?1:0;}
function Th(a){var b;b=a.U;return b<=57343&&b>=56320?1:0;}
function Rl(b){return b<=56319&&b>=55296?1:0;}
function NN(b){return b<=57343&&b>=56320?1:0;}
function Ow(a,b){var c,d,e,f,$$je;c=new R;Fo(c,b);d=a.S.data.length-2|0;e=0;while(true){f=BF(e,b);if(f>=0)break;if(a.q>=d)break;B0(c,a.S.data[BT(a)]);e=e+1|0;}if(!f)a:{try{b=IC(GM(c),16);}catch($$e){$$je=ET($$e);if($$je instanceof CT){break a;}else{throw $$e;}}return b;}J(B3(C(5),a.bu,a.q));}
function ZI(a){var b,c,d,e,f,g;b=3;c=1;d=a.S.data;e=d.length-2|0;f=SU(d[a.q],8);switch(f){case -1:break;default:if(f>3)b=2;BT(a);a:{while(true){if(c>=b)break a;g=a.q;if(g>=e)break a;g=SU(a.S.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BT(a);c=c+1|0;}}return f;}J(B3(C(5),a.bu,a.q));}
function ABw(a){var b,c,d,e;b=1;c=a.fr;a:while(true){d=a.q;e=a.S.data;if(d>=e.length)J(B3(C(5),a.bu,d));b:{c:{switch(e[d]){case 41:BT(a);return c|256;case 45:if(!b)J(B3(C(5),a.bu,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BT(a);}BT(a);return c;}
function BT(a){var b,c,d,e,f;b=a.q;a.g9=b;if(!(a.fr&4))a.q=b+1|0;else{c=a.S.data.length-2|0;a.q=b+1|0;a:while(true){d=a.q;if(d<c&&P1(a.S.data[d])){a.q=a.q+1|0;continue;}d=a.q;if(d>=c)break;e=a.S.data;if(e[d]!=35)break;a.q=d+1|0;while(true){f=a.q;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.q=f+1|0;}}}return a.g9;}
function AAX(b){return AS2.Co(b);}
function Kp(a){var b,c,d,e;b=a.S.data[BT(a)];if(Cm(b)){c=a.g9+1|0;d=a.S.data;if(c<d.length){e=d[c];if(CI(e)){BT(a);return D4(b,e);}}}return b;}
function M7(a){return a.cO;}
function HN(){var a=this;BJ.call(a);a.wM=null;a.wi=null;a.pF=0;}
function B3(a,b,c){var d=new HN();Ip(d,a,b,c);return d;}
function Ip(a,b,c,d){W(a);a.pF=(-1);a.wM=b;a.wi=c;a.pF=d;}
var Sn=F();
function U$(){B.call(this);this.s1=null;}
function AJI(a,b){var c,d;c=a.s1;d=0;while(d<b.length){W3(c,b[d]);d=d+1|0;}}
var Zn=F(0);
function Sr(){var a=this;B.call(a);a.oW=null;a.oY=null;a.oZ=null;}
function AJp(a,b){a.oW.m(ANR(a.oY,b,a.oZ));}
var Qv=F(Cw);
function ACs(a,b,c,d){var e;e=a.dg;BD(d,e,b-C0(d,e)|0);return a.e.c(b,c,d);}
function AKH(a,b){return 0;}
var VF=F(Cw);
function AD9(a,b,c,d){return b;}
var OC=F(Cw);
function ADt(a,b,c,d){if(C0(d,a.dg)!=b)b=(-1);return b;}
function Ry(){Cw.call(this);this.mL=0;}
function ACz(a,b,c,d){var e;e=a.dg;BD(d,e,b-C0(d,e)|0);a.mL=b;return b;}
function AJy(a,b){return 0;}
var E1=F(Cw);
function AL_(a,b,c,d){if(d.iy!=1&&b!=d.r)return (-1);d.h4=1;II(d,0,b);return b;}
function BW(){By.call(this);this.bt=0;}
function C$(a){BK(a);a.bt=1;}
function ANd(a,b,c,d){var e;if((b+a.bK()|0)>d.r){d.c2=1;return (-1);}e=a.bg(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function ALp(a){return a.bt;}
function AGO(a,b){return 1;}
var AAN=F(BW);
function F1(a){var b=new AAN();AH_(b,a);return b;}
function AH_(a,b){Jz(a,b);a.bt=1;a.gS=1;a.bt=0;}
function AK0(a,b,c){return 0;}
function AFd(a,b,c,d){var e,f,g;e=d.r;f=d.ct;while(true){g=BF(b,e);if(g>0)return (-1);if(g<0&&CI(I(c,b))&&b>f&&Cm(I(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AD2(a,b,c,d,e){var f,g;f=e.r;g=e.ct;while(true){if(c<b)return (-1);if(c<f&&CI(I(d,c))&&c>g&&Cm(I(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ACw(a,b){return 0;}
function BP(){var a=this;By.call(a);a.br=null;a.dZ=null;a.P=0;}
function AOB(a,b){var c=new BP();E2(c,a,b);return c;}
function E2(a,b,c){BK(a);a.br=b;a.dZ=c;a.P=c.dg;}
function AFU(a,b,c,d){var e,f,g,h;if(a.br===null)return (-1);e=E5(d,a.P);C9(d,a.P,b);f=a.br.j;g=0;while(true){if(g>=f){C9(d,a.P,e);return (-1);}h=(Bo(a.br,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AJr(a,b){a.dZ.e=b;}
function AHt(a,b){var c;a:{c=a.br;if(c!==null){c=BM(c);while(true){if(!BN(c))break a;if(!(BR(c)).bE(b))continue;else return 1;}}}return 0;}
function AJY(a,b){return HB(b,a.P)>=0&&E5(b,a.P)==HB(b,a.P)?0:1;}
function ADX(a){var b,c,d,e;a.b0=1;b=a.dZ;if(b!==null&&!b.b0)H9(b);a:{b=a.br;if(b!==null){c=b.j;d=0;while(true){if(d>=c)break a;b=Bo(a.br,d);e=b.eU();if(e===null)e=b;else{b.b0=1;E7(a.br,d);Qn(a.br,d,e);}if(!e.b0)e.dV();d=d+1|0;}}}if(a.e!==null)H9(a);}
var H3=F(BP);
function AJb(a,b,c,d){var e,f,g,h;e=C0(d,a.P);BD(d,a.P,b);f=a.br.j;g=0;while(true){if(g>=f){BD(d,a.P,e);return (-1);}h=(Bo(a.br,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AKi(a,b){return !C0(b,a.P)?0:1;}
var Do=F(H3);
function AEv(a,b,c,d){var e,f,g;e=C0(d,a.P);BD(d,a.P,b);f=a.br.j;g=0;while(g<f){if((Bo(a.br,g)).c(b,c,d)>=0)return a.e.c(a.dZ.mL,c,d);g=g+1|0;}BD(d,a.P,e);return (-1);}
function AJ5(a,b){a.e=b;}
var LE=F(Do);
function AJm(a,b,c,d){var e,f;e=a.br.j;f=0;while(f<e){if((Bo(a.br,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function AL0(a,b){return 0;}
var T9=F(Do);
function ADe(a,b,c,d){var e,f;e=a.br.j;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bo(a.br,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ALt(a,b){return 0;}
var P3=F(Do);
function ADU(a,b,c,d){var e,f,g,h;e=a.br.j;f=d.h9?0:d.ct;a:{g=a.e.c(b,c,d);if(g>=0){BD(d,a.P,b);h=0;while(true){if(h>=e)break a;if((Bo(a.br,h)).b7(f,b,c,d)>=0){BD(d,a.P,(-1));return g;}h=h+1|0;}}}return (-1);}
function ANu(a,b){return 0;}
var RU=F(Do);
function AB8(a,b,c,d){var e,f;e=a.br.j;BD(d,a.P,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bo(a.br,f)).b7(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AKw(a,b){return 0;}
function FM(){BP.call(this);this.cB=null;}
function AOX(a,b){var c=new FM();XI(c,a,b);return c;}
function XI(a,b,c){BK(a);a.cB=b;a.dZ=c;a.P=c.dg;}
function ACm(a,b,c,d){var e,f;e=E5(d,a.P);C9(d,a.P,b);f=a.cB.c(b,c,d);if(f>=0)return f;C9(d,a.P,e);return (-1);}
function AHO(a,b,c,d){var e;e=a.cB.b3(b,c,d);if(e>=0)C9(d,a.P,e);return e;}
function AKL(a,b,c,d,e){var f;f=a.cB.b7(b,c,d,e);if(f>=0)C9(e,a.P,f);return f;}
function AHp(a,b){return a.cB.bE(b);}
function AJu(a){var b;b=new LX;XI(b,a.cB,a.dZ);a.e=b;return b;}
function AMM(a){var b;a.b0=1;b=a.dZ;if(b!==null&&!b.b0)H9(b);b=a.cB;if(b!==null&&!b.b0){b=b.eU();if(b!==null){a.cB.b0=1;a.cB=b;}a.cB.dV();}}
var F0=F();
function Q(){var a=this;F0.call(a);a.T=0;a.bZ=0;a.D=null;a.iC=null;a.je=null;a.G=0;}
var AS3=null;function NE(){NE=Bf(Q);AEl();}
function Bl(a){var b;NE();b=new U3;b.w=Bt(64);a.D=b;}
function ADg(a){return null;}
function ACM(a){return a.D;}
function Zi(a){var b,c,d,e,f;if(!a.bZ)b=Gr(a.D,0)>=2048?0:1;else{a:{c=a.D;b=0;d=c.bd;if(b<d){e=c.w.data;f=(e[0]^(-1))>>>0|0;if(f)b=Hu(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Hu(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AF7(a){return a.G;}
function ALl(a){return a;}
function WU(a){var b,c;if(a.je===null){b=a.en();c=new Uk;c.xf=a;c.nb=b;Bl(c);a.je=c;D3(c,a.bZ);}return a.je;}
function GK(a){var b,c;if(a.iC===null){b=a.en();c=new Ui;c.wT=a;c.sH=b;c.tp=a;Bl(c);a.iC=c;D3(c,a.T);a.iC.G=a.G;}return a.iC;}
function AMG(a){return 0;}
function D3(a,b){var c;c=a.T;if(c^b){a.T=c?0:1;a.bZ=a.bZ?0:1;}if(!a.G)a.G=1;return a;}
function AFi(a){return a.T;}
function I8(b,c){NE();return b.i(c);}
function Ht(b,c){var d,e;NE();if(b.cZ()!==null&&c.cZ()!==null){b=b.cZ();c=c.cZ();d=Be(b.w.data.length,c.w.data.length);e=0;a:{while(e<d){if(b.w.data[e]&c.w.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function QM(b,c){var d,e,f;NE();d=0;while(true){AKu();e=AS4.data;if(d>=e.length){f=new Ih;Br(f,C(5));f.xx=C(5);f.xj=b;J(f);}e=e[d].data;if(B1(b,e[0]))break;d=d+1|0;}return AAk(e[1],c);}
function AEl(){var b;b=new Gg;AKu();AS3=b;}
function Xw(){var a=this;Q.call(a);a.kz=0;a.mJ=0;a.fI=0;a.ka=0;a.dt=0;a.eP=0;a.y=null;a.bn=null;}
function C1(){var a=new Xw();ANl(a);return a;}
function AL5(a,b){var c=new Xw();AD_(c,a,b);return c;}
function ANl(a){Bl(a);a.y=ANv();}
function AD_(a,b,c){Bl(a);a.y=ANv();a.kz=b;a.mJ=c;}
function Ch(a,b){a:{if(a.kz){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dt){Lf(a.y,GO(b&65535));break a;}Kh(a.y,GO(b&65535));break a;}if(a.mJ&&b>128){a.fI=1;b=FT(FQ(b));}}}if(!(!Rl(b)&&!NN(b))){if(a.ka)Lf(a.D,b-55296|0);else Kh(a.D,b-55296|0);}if(a.dt)Lf(a.y,b);else Kh(a.y,b);if(!a.G&&KV(b))a.G=1;return a;}
function ABD(a,b){var c,d,e;if(!a.G&&b.G)a.G=1;if(a.ka){if(!b.bZ)Ff(a.D,b.en());else CP(a.D,b.en());}else if(!b.bZ)Fa(a.D,b.en());else{EU(a.D,b.en());CP(a.D,b.en());a.bZ=a.bZ?0:1;a.ka=1;}if(!a.eP&&b.cZ()!==null){if(a.dt){if(!b.T)Ff(a.y,b.cZ());else CP(a.y,b.cZ());}else if(!b.T)Fa(a.y,b.cZ());else{EU(a.y,b.cZ());CP(a.y,b.cZ());a.T=a.T?0:1;a.dt=1;}}else{c=a.T;d=a.bn;if(d!==null){if(!c){e=new Nx;e.vl=a;e.tY=c;e.tc=d;e.sZ=b;Bl(e);a.bn=e;}else{e=new Ny;e.xG=a;e.qf=c;e.pW=d;e.pi=b;Bl(e);a.bn=e;}}else{if(c&&!a.dt&&
K0(a.y)){d=new Nu;d.wh=a;d.p7=b;Bl(d);a.bn=d;}else if(!c){d=new Ns;d.jS=a;d.iY=c;d.n0=b;Bl(d);a.bn=d;}else{d=new Nt;d.kQ=a;d.i6=c;d.s4=b;Bl(d);a.bn=d;}a.eP=1;}}return a;}
function BS(a,b,c){var d,e,f,g,h;if(b>c){d=new BJ;W(d);J(d);}a:{b:{if(!a.kz){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Ch(a,b);b=b+1|0;}}if(!a.dt)G6(a.y,b,c+1|0);else{d=a.y;c=c+1|0;if(b>c){d=new BU;W(d);J(d);}e=d.bd;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.w.data;h[g]=h[g]&(Hn(d,b)|GZ(d,f));}else{h=d.w.data;h[g]=h[g]&Hn(d,b);e=g+1|0;while(e<c){d.w.data[e]=0;e=e+1|0;}if(f&31){h=d.w.data;h[c]=h[c]&GZ(d,f);}}Gk(d);}}}}return a;}
function Wo(a,b){var c,d,e;if(!a.G&&b.G)a.G=1;if(b.fI)a.fI=1;c=a.bZ;if(!(c^b.bZ)){if(!c)Fa(a.D,b.D);else CP(a.D,b.D);}else if(c)Ff(a.D,b.D);else{EU(a.D,b.D);CP(a.D,b.D);a.bZ=1;}if(!a.eP&&CA(b)!==null){c=a.T;if(!(c^b.T)){if(!c)Fa(a.y,CA(b));else CP(a.y,CA(b));}else if(c)Ff(a.y,CA(b));else{EU(a.y,CA(b));CP(a.y,CA(b));a.T=1;}}else{c=a.T;d=a.bn;if(d!==null){if(!c){e=new Nm;e.u6=a;e.r6=c;e.s3=d;e.tC=b;Bl(e);a.bn=e;}else{e=new NZ;e.vw=a;e.tx=c;e.mb=d;e.mT=b;Bl(e);a.bn=e;}}else{if(!a.dt&&K0(a.y)){if(!c){d=new Nv;d.xI
=a;d.o5=b;Bl(d);a.bn=d;}else{d=new Nw;d.vA=a;d.tm=b;Bl(d);a.bn=d;}}else if(!c){d=new Nz;d.sf=a;d.qt=b;d.pZ=c;Bl(d);a.bn=d;}else{d=new NA;d.qP=a;d.q5=b;d.rn=c;Bl(d);a.bn=d;}a.eP=1;}}}
function UR(a,b){var c,d,e;if(!a.G&&b.G)a.G=1;if(b.fI)a.fI=1;c=a.bZ;if(!(c^b.bZ)){if(!c)CP(a.D,b.D);else Fa(a.D,b.D);}else if(!c)Ff(a.D,b.D);else{EU(a.D,b.D);CP(a.D,b.D);a.bZ=0;}if(!a.eP&&CA(b)!==null){c=a.T;if(!(c^b.T)){if(!c)CP(a.y,CA(b));else Fa(a.y,CA(b));}else if(!c)Ff(a.y,CA(b));else{EU(a.y,CA(b));CP(a.y,CA(b));a.T=0;}}else{c=a.T;d=a.bn;if(d!==null){if(!c){e=new No;e.vk=a;e.sj=c;e.m_=d;e.qc=b;Bl(e);a.bn=e;}else{e=new Np;e.vG=a;e.rB=c;e.l3=d;e.r4=b;Bl(e);a.bn=e;}}else{if(!a.dt&&K0(a.y)){if(!c){d=new Nk;d.vC
=a;d.ox=b;Bl(d);a.bn=d;}else{d=new Nl;d.xC=a;d.oE=b;Bl(d);a.bn=d;}}else if(!c){d=new Nq;d.uH=a;d.tU=b;d.qX=c;Bl(d);a.bn=d;}else{d=new Nj;d.qV=a;d.rK=b;d.qh=c;Bl(d);a.bn=d;}a.eP=1;}}}
function CE(a,b){var c;c=a.bn;if(c!==null)return a.T^c.i(b);return a.T^C6(a.y,b);}
function CA(a){if(!a.eP)return a.y;return null;}
function AE_(a){return a.D;}
function ALL(a){var b,c;if(a.bn!==null)return a;b=CA(a);c=new Nn;c.uY=a;c.hN=b;Bl(c);return D3(c,a.T);}
function AIF(a){var b,c,d;b=new R;T(b);c=Gr(a.y,0);while(c>=0){Hv(b,FK(c));B0(b,124);c=Gr(a.y,c+1|0);}d=b.F;if(d>0)T$(b,d-1|0);return S(b);}
function AFk(a){return a.fI;}
function Ih(){var a=this;Bq.call(a);a.xx=null;a.xj=null;}
function DD(){By.call(this);this.C=null;}
function CS(a,b,c,d){Jz(a,c);a.C=b;a.gS=d;}
function ANk(a){return a.C;}
function AKM(a,b){return !a.C.bE(b)&&!a.e.bE(b)?0:1;}
function AL6(a,b){return 1;}
function AH7(a){var b;a.b0=1;b=a.e;if(b!==null&&!b.b0){b=b.eU();if(b!==null){a.e.b0=1;a.e=b;}a.e.dV();}b=a.C;if(b!==null){if(!b.b0){b=b.eU();if(b!==null){a.C.b0=1;a.C=b;}a.C.dV();}else if(b instanceof FM&&b.dZ.jh)a.C=b.e;}}
function CG(){DD.call(this);this.Q=null;}
function AO1(a,b,c){var d=new CG();Et(d,a,b,c);return d;}
function Et(a,b,c,d){CS(a,b,c,d);a.Q=b;}
function AB_(a,b,c,d){var e,f;e=0;a:{while((b+a.Q.bK()|0)<=d.r){f=a.Q.bg(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.Q.bK()|0;e=e+(-1)|0;}return f;}
function EH(){CG.call(this);this.ix=null;}
function AN$(a,b,c,d){var e=new EH();QS(e,a,b,c,d);return e;}
function QS(a,b,c,d,e){Et(a,c,d,e);a.ix=b;}
function AC1(a,b,c,d){var e,f,g,h,i;e=a.ix;f=e.ea;g=e.d8;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.Q.bK()|0)>d.r)break a;i=a.Q.bg(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.Q.bK()|0;h=h+(-1)|0;}return i;}if((b+a.Q.bK()|0)>d.r){d.c2=1;return (-1);}i=a.Q.bg(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Cx=F(DD);
function ACl(a,b,c,d){var e;if(!a.C.B(d))return a.e.c(b,c,d);e=a.C.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var D7=F(CG);
function AHT(a,b,c,d){var e;e=a.C.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function ANx(a,b){a.e=b;a.C.I(b);}
var Ul=F(CG);
function AM8(a,b,c,d){while((b+a.Q.bK()|0)<=d.r&&a.Q.bg(b,c)>0){b=b+a.Q.bK()|0;}return a.e.c(b,c,d);}
function AIy(a,b,c,d){var e,f,g;e=a.e.b3(b,c,d);if(e<0)return (-1);f=e-a.Q.bK()|0;while(f>=b&&a.Q.bg(f,c)>0){g=f-a.Q.bK()|0;e=f;f=g;}return e;}
function U(){var a=this;B.call(a);a.kW=null;a.jO=null;}
function AAk(a,b){if(!b&&a.kW===null)a.kW=a.x();else if(b&&a.jO===null)a.jO=D3(a.x(),1);if(b)return a.jO;return a.kW;}
var CT=F(BJ);
function LS(){var a=this;F0.call(a);a.ea=0;a.d8=0;}
function AIJ(a){var b,c,d,e,f;b=a.ea;c=a.d8;d=c!=2147483647?J_(c):C(5);e=new R;T(e);B0(e,123);f=Bj(e,b);B0(f,44);B0(K(f,d),125);return S(e);}
var Na=F(By);
function AG_(a,b,c,d){return b;}
function AJq(a,b){return 0;}
function U3(){var a=this;B.call(a);a.w=null;a.bd=0;}
function ANv(){var a=new U3();ADJ(a);return a;}
function ADJ(a){a.w=Bt(0);}
function Kh(a,b){var c,d;c=b/32|0;if(b>=a.bd){Hy(a,c+1|0);a.bd=b+1|0;}d=a.w.data;d[c]=d[c]|1<<(b%32|0);}
function G6(a,b,c){var d,e,f,g,h;d=BF(b,c);if(d>0){e=new BU;W(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bd){Hy(a,f+1|0);a.bd=c;}if(d==f){g=a.w.data;g[d]=g[d]|GZ(a,b)&Hn(a,c);}else{g=a.w.data;g[d]=g[d]|GZ(a,b);h=d+1|0;while(h<f){a.w.data[h]=(-1);h=h+1|0;}if(c&31){g=a.w.data;g[f]=g[f]|Hn(a,c);}}}
function GZ(a,b){return (-1)<<(b%32|0);}
function Hn(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Lf(a,b){var c,d,e,f;c=b/32|0;d=a.w.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bd-1|0))Gk(a);}}
function C6(a,b){var c,d;c=b/32|0;d=a.w.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Gr(a,b){var c,d,e,f;c=a.bd;if(b>=c)return (-1);d=b/32|0;e=a.w.data;f=e[d]>>>(b%32|0)|0;if(f)return Hu(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Hu(e[f])|0;f=f+1|0;}return (-1);}
function Hy(a,b){var c;c=a.w.data.length;if(c>=b)return;c=Ba((b*3|0)/2|0,(c*2|0)+1|0);a.w=H2(a.w,c);}
function Gk(a){var b,c,d;b=(a.bd+31|0)/32|0;a.bd=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=MD(a.w.data[c]);if(d<32)break;c=c+(-1)|0;a.bd=a.bd-32|0;}a.bd=a.bd-d|0;}}
function CP(a,b){var c,d,e,f;c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]&b.w.data[d];d=d+1|0;}while(true){f=a.w.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bd=Be(a.bd,b.bd);Gk(a);}
function Ff(a,b){var c,d,e;c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]&(b.w.data[d]^(-1));d=d+1|0;}Gk(a);}
function Fa(a,b){var c,d,e;c=Ba(a.bd,b.bd);a.bd=c;Hy(a,(c+31|0)/32|0);c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]|b.w.data[d];d=d+1|0;}}
function EU(a,b){var c,d,e;c=Ba(a.bd,b.bd);a.bd=c;Hy(a,(c+31|0)/32|0);c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]^b.w.data[d];d=d+1|0;}Gk(a);}
function K0(a){return a.bd?0:1;}
function LK(){var a=this;BP.call(a);a.oJ=null;a.uX=0;}
function Pe(){var a=this;BP.call(a);a.lh=null;a.kS=null;}
function ZT(a,b){var c=new Pe();ABr(c,a,b);return c;}
function ABr(a,b,c){BK(a);a.lh=b;a.kS=c;}
function ACW(a,b,c,d){var e,f,g,h,i;e=a.lh.c(b,c,d);if(e<0)a:{f=a.kS;g=d.ct;e=d.r;h=b+1|0;e=BF(h,e);if(e>0){d.c2=1;e=(-1);}else{i=I(c,b);if(!f.oJ.i(i))e=(-1);else{if(Cm(i)){if(e<0&&CI(I(c,h))){e=(-1);break a;}}else if(CI(i)&&b>g&&Cm(I(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AI_(a,b){a.e=b;a.kS.e=b;a.lh.I(b);}
function ADz(a,b){return 1;}
function ADf(a,b){return 1;}
function Dc(){var a=this;BP.call(a);a.dj=null;a.wb=0;}
function AG8(a){var b=new Dc();Sx(b,a);return b;}
function Sx(a,b){BK(a);a.dj=b.ie();a.wb=b.T;}
function AE2(a,b,c,d){var e,f,g,h;e=d.r;if(b<e){f=b+1|0;g=I(c,b);if(a.i(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=I(c,f);if(GC(g,f)&&a.i(D4(g,f)))return a.e.c(b,c,d);}}return (-1);}
function AFz(a,b){return a.dj.i(b);}
function ACS(a,b){if(b instanceof Dv)return I8(a.dj,b.fe);if(b instanceof D0)return I8(a.dj,b.cW);if(b instanceof Dc)return Ht(a.dj,b.dj);if(!(b instanceof DQ))return 1;return Ht(a.dj,b.eC);}
function AG1(a){return a.dj;}
function ALb(a,b){a.e=b;}
function AFb(a,b){return 1;}
var Ie=F(Dc);
function AGP(a,b){return a.dj.i(FT(FQ(b)));}
function Xn(){var a=this;BW.call(a);a.py=null;a.vU=0;}
function AF9(a){var b=new Xn();AIT(b,a);return b;}
function AIT(a,b){C$(a);a.py=b.ie();a.vU=b.T;}
function AHa(a,b,c){return !a.py.i(Ey(D6(I(c,b))))?(-1):1;}
function DQ(){var a=this;BW.call(a);a.eC=null;a.wu=0;}
function ALD(a){var b=new DQ();AJO(b,a);return b;}
function AJO(a,b){C$(a);a.eC=b.ie();a.wu=b.T;}
function Lm(a,b,c){return !a.eC.i(I(c,b))?(-1):1;}
function AJt(a,b){if(b instanceof D0)return I8(a.eC,b.cW);if(b instanceof DQ)return Ht(a.eC,b.eC);if(!(b instanceof Dc)){if(!(b instanceof Dv))return 1;return 0;}return Ht(a.eC,b.dj);}
function NF(){var a=this;BP.call(a);a.f2=null;a.k8=null;a.iv=0;}
function ALQ(a,b){var c=new NF();ACo(c,a,b);return c;}
function ACo(a,b,c){BK(a);a.f2=b;a.iv=c;}
function AHS(a,b){a.e=b;}
function Pq(a){if(a.k8===null)a.k8=GA(a.f2);return a.k8;}
function ABZ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.r;f=Bt(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=I(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?Fv([k,l]):Fv([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.iv;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.f2.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=I(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=I(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.iv==3){k=f[0];m=a.f2.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.iv==2){b=f[0];m=a.f2.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function ADq(a,b){return b instanceof NF&&!B1(Pq(b),Pq(a))?0:1;}
function ALO(a,b){return 1;}
function D0(){BW.call(this);this.cW=0;}
function XO(a){var b=new D0();AJP(b,a);return b;}
function AJP(a,b){C$(a);a.cW=b;}
function AGW(a){return 1;}
function AF5(a,b,c){return a.cW!=I(c,b)?(-1):1;}
function AE0(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return GS(a,b,c,d);e=d.r;while(true){if(b>=e)return (-1);f=Hs(c,a.cW,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AG3(a,b,c,d,e){var f;if(!(d instanceof Bv))return G1(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=GF(d,a.cW,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ALH(a,b){if(b instanceof D0)return b.cW!=a.cW?0:1;if(!(b instanceof DQ)){if(b instanceof Dc)return b.i(a.cW);if(!(b instanceof Dv))return 1;return 0;}return Lm(b,0,U4(a.cW))<=0?0:1;}
function ABd(){BW.call(this);this.lR=0;}
function AJ$(a){var b=new ABd();AIt(b,a);return b;}
function AIt(a,b){C$(a);a.lR=Ey(D6(b));}
function ABT(a,b,c){return a.lR!=Ey(D6(I(c,b)))?(-1):1;}
function Wr(){var a=this;BW.call(a);a.tI=0;a.m8=0;}
function ADQ(a){var b=new Wr();AKs(b,a);return b;}
function AKs(a,b){C$(a);a.tI=b;a.m8=GO(b);}
function ACe(a,b,c){return a.tI!=I(c,b)&&a.m8!=I(c,b)?(-1):1;}
function EM(){var a=this;BP.call(a);a.gI=0;a.jx=null;a.i0=null;a.iU=0;}
function API(a,b){var c=new EM();MZ(c,a,b);return c;}
function MZ(a,b,c){BK(a);a.gI=1;a.i0=b;a.iU=c;}
function AMK(a,b){a.e=b;}
function AJa(a,b,c,d){var e,f,g,h,i,j,k,l;e=Bt(4);f=d.r;if(b>=f)return (-1);g=Jk(a,b,c,f);h=b+a.gI|0;i=AAX(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;C7(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Jk(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AAX(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.gI|0;if(h>=f){b=k;break a;}g=Jk(a,h,c,f);b=k;}}}if(b!=a.iU)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.i0.data[g])break;g=g+1|0;}return (-1);}
function UQ(a){var b,c;if(a.jx===null){b=new R;T(b);c=0;while(c<a.iU){Hv(b,FK(a.i0.data[c]));c=c+1|0;}a.jx=S(b);}return a.jx;}
function Jk(a,b,c,d){var e,f,g;a.gI=1;if(b>=(d-1|0))e=I(c,b);else{d=b+1|0;e=I(c,b);f=I(c,d);if(GC(e,f)){g=B2(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Cm(g[0])&&CI(g[1])?D4(g[0],g[1]):g[0];a.gI=2;}}return e;}
function AHb(a,b){return b instanceof EM&&!B1(UQ(b),UQ(a))?0:1;}
function AJ6(a,b){return 1;}
var Vo=F(EM);
var R9=F(EM);
var We=F(Cx);
function AEe(a,b,c,d){var e;while(true){e=a.C.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var Ot=F(Cx);
function AIm(a,b,c,d){var e;e=a.C.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.C.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var Fe=F(Cx);
function AK_(a,b,c,d){var e;if(!a.C.B(d))return a.e.c(b,c,d);e=a.C.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function AMe(a,b){a.e=b;a.C.I(b);}
var N9=F(Fe);
function AGZ(a,b,c,d){var e;e=a.C.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function AIN(a,b){a.e=b;}
function EL(){var a=this;Cx.call(a);a.fn=null;a.c9=0;}
function AS5(a,b,c,d,e){var f=new EL();Ic(f,a,b,c,d,e);return f;}
function Ic(a,b,c,d,e,f){CS(a,c,d,e);a.fn=b;a.c9=f;}
function ANr(a,b,c,d){var e,f;e=LO(d,a.c9);if(!a.C.B(d))return a.e.c(b,c,d);if(e>=a.fn.d8)return a.e.c(b,c,d);f=a.c9;e=e+1|0;DM(d,f,e);f=a.C.c(b,c,d);if(f>=0){DM(d,a.c9,0);return f;}f=a.c9;e=e+(-1)|0;DM(d,f,e);if(e>=a.fn.ea)return a.e.c(b,c,d);DM(d,a.c9,0);return (-1);}
var L2=F(EL);
function AGr(a,b,c,d){var e,f,g;e=0;f=a.fn.d8;a:{while(true){g=a.C.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fn.ea)return (-1);return a.e.c(b,c,d);}
var Qo=F(Cx);
function AMV(a,b,c,d){var e;if(!a.C.B(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.C.c(b,c,d);}
var Pp=F(Fe);
function ADB(a,b,c,d){var e;if(!a.C.B(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.C.c(b,c,d);return e;}
var S1=F(EL);
function ACE(a,b,c,d){var e,f,g;e=LO(d,a.c9);if(!a.C.B(d))return a.e.c(b,c,d);f=a.fn;if(e>=f.d8){DM(d,a.c9,0);return a.e.c(b,c,d);}if(e<f.ea){DM(d,a.c9,e+1|0);g=a.C.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){DM(d,a.c9,0);return g;}DM(d,a.c9,e+1|0);g=a.C.c(b,c,d);}return g;}
var Qp=F(DD);
function ANg(a,b,c,d){var e;e=d.r;if(e>b)return a.e.b7(b,e,c,d);return a.e.c(b,c,d);}
function ALm(a,b,c,d){var e;e=d.r;if(a.e.b7(b,e,c,d)>=0)return b;return (-1);}
function Ni(){DD.call(this);this.jL=null;}
function AJv(a,b,c,d){var e,f;e=d.r;f=S3(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.b7(b,e,c,d);return a.e.c(b,c,d);}
function AB4(a,b,c,d){var e,f,g,h;e=d.r;f=a.e.b3(b,c,d);if(f<0)return (-1);g=S3(a,f,e,c);if(g>=0)e=g;g=Ba(f,a.e.b7(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.jL.gQ(I(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function S3(a,b,c,d){while(true){if(b>=c)return (-1);if(a.jL.gQ(I(d,b)))break;b=b+1|0;}return b;}
var El=F();
var AS6=null;var AS7=null;function N_(b){var c;if(!(b&1)){c=AS7;if(c!==null)return c;c=new To;AS7=c;return c;}c=AS6;if(c!==null)return c;c=new Tn;AS6=c;return c;}
var Wf=F(CG);
function ACG(a,b,c,d){var e;a:{while(true){if((b+a.Q.bK()|0)>d.r)break a;e=a.Q.bg(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var Ue=F(D7);
function AIj(a,b,c,d){var e;if((b+a.Q.bK()|0)<=d.r){e=a.Q.bg(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var NW=F(EH);
function AKN(a,b,c,d){var e,f,g,h,i;e=a.ix;f=e.ea;g=e.d8;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.Q.bK()|0)>d.r)break a;i=a.Q.bg(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.Q.bK()|0)>d.r){d.c2=1;return (-1);}i=a.Q.bg(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Pj=F(CG);
function AJo(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.Q.bK()|0)<=d.r){e=a.Q.bg(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Sl=F(D7);
function ACQ(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.C.c(b,c,d);}
var P4=F(EH);
function AK2(a,b,c,d){var e,f,g,h,i,j;e=a.ix;f=e.ea;g=e.d8;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.Q.bK()|0)<=d.r){i=a.Q.bg(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.Q.bK()|0)>d.r){d.c2=1;return (-1);}j=a.Q.bg(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Ji=F(By);
function AHr(a,b,c,d){if(b&&!(d.eQ&&b==d.ct))return (-1);return a.e.c(b,c,d);}
function AGD(a,b){return 0;}
function XX(){By.call(this);this.te=0;}
function ALC(a){var b=new XX();AGS(b,a);return b;}
function AGS(a,b){BK(a);a.te=b;}
function ADc(a,b,c,d){var e,f,g;e=b<d.r?I(c,b):32;f=!b?32:I(c,b-1|0);g=d.h9?0:d.ct;return (e!=32&&!Pu(a,e,b,g,c)?0:1)^(f!=32&&!Pu(a,f,b-1|0,g,c)?0:1)^a.te?(-1):a.e.c(b,c,d);}
function ADp(a,b){return 0;}
function Pu(a,b,c,d,e){var f;if(!IA(b)&&b!=95){a:{if(Ce(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=I(e,c);if(IA(f))return 0;if(Ce(f)!=6)return 1;}}return 1;}return 0;}
var Nd=F(By);
function AGR(a,b,c,d){if(b!=d.gX)return (-1);return a.e.c(b,c,d);}
function ANn(a,b){return 0;}
function U8(){By.call(this);this.ft=0;}
function APc(a){var b=new U8();AAO(b,a);return b;}
function AAO(a,b){BK(a);a.ft=b;}
function AJR(a,b,c,d){var e,f,g;e=!d.eQ?H(c):d.r;if(b>=e){BD(d,a.ft,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&I(c,b)==13&&I(c,b+1|0)==10){BD(d,a.ft,0);return a.e.c(b,c,d);}a:{if(f==1){g=I(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BD(d,a.ft,0);return a.e.c(b,c,d);}
function AD5(a,b){var c;c=!C0(b,a.ft)?0:1;BD(b,a.ft,(-1));return c;}
var UI=F(By);
function AI$(a,b,c,d){if(b<(d.h9?H(c):d.r))return (-1);d.c2=1;d.w2=1;return a.e.c(b,c,d);}
function ABR(a,b){return 0;}
function Mb(){By.call(this);this.ql=null;}
function ADV(a,b,c,d){a:{if(b!=d.r){if(!b)break a;if(d.eQ&&b==d.ct)break a;if(a.ql.rE(I(c,b-1|0),I(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function AFL(a,b){return 0;}
var AA4=F(BP);
function APv(){var a=new AA4();AI0(a);return a;}
function AI0(a){BK(a);}
function AM0(a,b,c,d){var e,f,g,h;e=d.r;f=b+1|0;if(f>e){d.c2=1;return (-1);}g=I(c,b);if(Cm(g)){h=b+2|0;if(h<=e&&GC(g,I(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function ADs(a,b){a.e=b;}
function AIU(a){return (-2147483602);}
function ADr(a,b){return 1;}
function Xu(){BP.call(this);this.kh=null;}
function AO6(a){var b=new Xu();AD3(b,a);return b;}
function AD3(a,b){BK(a);a.kh=b;}
function AI4(a,b,c,d){var e,f,g,h;e=d.r;f=b+1|0;if(f>e){d.c2=1;return (-1);}g=I(c,b);if(Cm(g)){b=b+2|0;if(b<=e){h=I(c,f);if(GC(g,h))return a.kh.gQ(D4(g,h))?(-1):a.e.c(b,c,d);}}return a.kh.gQ(g)?(-1):a.e.c(f,c,d);}
function AKE(a,b){a.e=b;}
function ABM(a){return (-2147483602);}
function ANc(a,b){return 1;}
function AAV(){By.call(this);this.gB=0;}
function AOH(a){var b=new AAV();AFI(b,a);return b;}
function AFI(a,b){BK(a);a.gB=b;}
function AHd(a,b,c,d){var e;e=!d.eQ?H(c):d.r;if(b>=e){BD(d,a.gB,0);return a.e.c(b,c,d);}if((e-b|0)==1&&I(c,b)==10){BD(d,a.gB,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AFH(a,b){var c;c=!C0(b,a.gB)?0:1;BD(b,a.gB,(-1));return c;}
function Zl(){By.call(this);this.gG=0;}
function AOo(a){var b=new Zl();AF$(b,a);return b;}
function AF$(a,b){BK(a);a.gG=b;}
function AI9(a,b,c,d){if((!d.eQ?H(c)-b|0:d.r-b|0)<=0){BD(d,a.gG,0);return a.e.c(b,c,d);}if(I(c,b)!=10)return (-1);BD(d,a.gG,1);return a.e.c(b+1|0,c,d);}
function AFu(a,b){var c;c=!C0(b,a.gG)?0:1;BD(b,a.gG,(-1));return c;}
function Wn(){By.call(this);this.e3=0;}
function ANP(a){var b=new Wn();ANs(b,a);return b;}
function ANs(a,b){BK(a);a.e3=b;}
function AGt(a,b,c,d){var e,f,g;e=!d.eQ?H(c)-b|0:d.r-b|0;if(!e){BD(d,a.e3,0);return a.e.c(b,c,d);}if(e<2){f=I(c,b);g=97;}else{f=I(c,b);g=I(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BD(d,a.e3,0);return a.e.c(b,c,d);case 13:if(g!=10){BD(d,a.e3,0);return a.e.c(b,c,d);}BD(d,a.e3,0);return a.e.c(b,c,d);default:}return (-1);}
function AD8(a,b){var c;c=!C0(b,a.e3)?0:1;BD(b,a.e3,(-1));return c;}
function Gh(){var a=this;BP.call(a);a.mC=0;a.fX=0;}
function APD(a,b){var c=new Gh();NM(c,a,b);return c;}
function NM(a,b,c){BK(a);a.mC=b;a.fX=c;}
function ACL(a,b,c,d){var e,f,g,h;e=Fx(a,d);if(e!==null&&(b+H(e)|0)<=d.r){f=0;while(true){if(f>=H(e)){BD(d,a.fX,H(e));return a.e.c(b+H(e)|0,c,d);}g=I(e,f);h=b+f|0;if(g!=I(c,h)&&GO(I(e,f))!=I(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AJ3(a,b){a.e=b;}
function Fx(a,b){var c,d;c=a.mC;d=E5(b,c);c=HB(b,c);return (c|d|(c-d|0))>=0&&c<=H(b.kl)?B9(b.kl,d,c):null;}
function AKk(a,b){var c;c=!C0(b,a.fX)?0:1;BD(b,a.fX,(-1));return c;}
var AA0=F(Gh);
function ANU(a,b){var c=new AA0();AL8(c,a,b);return c;}
function AL8(a,b,c){NM(a,b,c);}
function AEc(a,b,c,d){var e,f;e=Fx(a,d);if(e!==null&&(b+H(e)|0)<=d.r){f=!Sw(c,e,b)?(-1):H(e);if(f<0)return (-1);BD(d,a.fX,f);return a.e.c(b+f|0,c,d);}return (-1);}
function ALY(a,b,c,d){var e,f;e=Fx(a,d);f=d.ct;if(e!==null&&(b+H(e)|0)<=f){while(true){if(b>f)return (-1);b=Ov(c,e,b);if(b<0)return (-1);if(a.e.c(b+H(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ACu(a,b,c,d,e){var f,g;f=Fx(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=OH(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+H(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AId(a,b){return 1;}
var YA=F(Gh);
function AOp(a,b){var c=new YA();AFE(c,a,b);return c;}
function AFE(a,b,c){NM(a,b,c);}
function AHI(a,b,c,d){var e,f;e=Fx(a,d);if(e!==null&&(b+H(e)|0)<=d.r){f=0;while(true){if(f>=H(e)){BD(d,a.fX,H(e));return a.e.c(b+H(e)|0,c,d);}if(Ey(D6(I(e,f)))!=Ey(D6(I(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var M_=F(FC);
function AFl(a,b,c,d,e){LU(a,b,c,d,e);return a;}
function ADh(a,b,c,d){Ve(a,b,c,d);return a;}
function ADI(a,b){IH(a,b);}
function ALo(a,b,c){Vt(a,b,c);return a;}
function Qr(){var a=this;BW.call(a);a.cc=null;a.jA=null;a.ks=null;}
function AEt(a,b,c){return !Jh(a,c,b)?(-1):a.bt;}
function AC$(a,b,c,d){var e,f,g;e=d.r;while(true){if(b>e)return (-1);f=I(a.cc,a.bt-1|0);a:{while(true){g=a.bt;if(b>(e-g|0)){b=(-1);break a;}g=I(c,(b+g|0)-1|0);if(g==f&&Jh(a,c,b))break;b=b+Rr(a.jA,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bt|0,c,d)>=0)break;b=b+1|0;}return b;}
function AFK(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=I(a.cc,0);g=(H(d)-c|0)-a.bt|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=I(d,c);if(g==f&&Jh(a,d,c))break;c=c-Rr(a.ks,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bt|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AGe(a,b){var c;if(b instanceof D0)return b.cW!=I(a.cc,0)?0:1;if(b instanceof DQ)return Lm(b,0,B9(a.cc,0,1))<=0?0:1;if(!(b instanceof Dc)){if(!(b instanceof Dv))return 1;return H(a.cc)>1&&b.fe==D4(I(a.cc,0),I(a.cc,1))?1:0;}a:{b:{b=b;if(!b.i(I(a.cc,0))){if(H(a.cc)<=1)break b;if(!b.i(D4(I(a.cc,0),I(a.cc,1))))break b;}c=1;break a;}c=0;}return c;}
function Jh(a,b,c){var d;d=0;while(d<a.bt){if(I(b,d+c|0)!=I(a.cc,d))return 0;d=d+1|0;}return 1;}
function Wm(){BW.call(this);this.ia=null;}
function APH(a){var b=new Wm();ALI(b,a);return b;}
function ALI(a,b){var c,d,e;C$(a);c=new R;T(c);d=0;while(true){e=BF(d,b.F);if(e>=0){a.ia=S(c);a.bt=c.F;return;}if(d<0)break;if(e>=0)break;B0(c,Ey(D6(b.J.data[d])));d=d+1|0;}b=new BU;W(b);J(b);}
function AHQ(a,b,c){var d;d=0;while(true){if(d>=H(a.ia))return H(a.ia);if(I(a.ia,d)!=Ey(D6(I(c,b+d|0))))break;d=d+1|0;}return (-1);}
function L7(){BW.call(this);this.gy=null;}
function AKQ(a,b,c){var d,e,f;d=0;while(true){if(d>=H(a.gy))return H(a.gy);e=I(a.gy,d);f=b+d|0;if(e!=I(c,f)&&GO(I(a.gy,d))!=I(c,f))break;d=d+1|0;}return (-1);}
var Gg=F();
var AS8=null;var AS9=null;var AS4=null;function AKu(){AKu=Bf(Gg);AEO();}
function AEO(){AS8=APk();AS9=AOA();AS4=G($rt_arraycls(B),[G(B,[C(278),APE()]),G(B,[C(279),ANM()]),G(B,[C(280),APh()]),G(B,[C(281),APq()]),G(B,[C(282),AS9]),G(B,[C(283),AOM()]),G(B,[C(284),AOx()]),G(B,[C(285),ANV()]),G(B,[C(286),ANT()]),G(B,[C(287),ANZ()]),G(B,[C(288),AOa()]),G(B,[C(289),ANX()]),G(B,[C(290),AO0()]),G(B,[C(291),ANH()]),G(B,[C(292),APm()]),G(B,[C(293),AN_()]),G(B,[C(294),AOK()]),G(B,[C(295),AN9()]),G(B,[C(296),AOL()]),G(B,[C(297),AN1()]),G(B,[C(298),APu()]),G(B,[C(299),AN3()]),G(B,[C(300),AOQ()]),
G(B,[C(301),APg()]),G(B,[C(302),APd()]),G(B,[C(303),APr()]),G(B,[C(304),AN0()]),G(B,[C(305),AO5()]),G(B,[C(306),AS8]),G(B,[C(307),AOU()]),G(B,[C(308),ANW()]),G(B,[C(309),AS8]),G(B,[C(310),AND()]),G(B,[C(311),AS9]),G(B,[C(312),AOh()]),G(B,[C(313),L(0,127)]),G(B,[C(314),L(128,255)]),G(B,[C(315),L(256,383)]),G(B,[C(316),L(384,591)]),G(B,[C(317),L(592,687)]),G(B,[C(318),L(688,767)]),G(B,[C(319),L(768,879)]),G(B,[C(320),L(880,1023)]),G(B,[C(321),L(1024,1279)]),G(B,[C(322),L(1280,1327)]),G(B,[C(323),L(1328,1423)]),
G(B,[C(324),L(1424,1535)]),G(B,[C(325),L(1536,1791)]),G(B,[C(326),L(1792,1871)]),G(B,[C(327),L(1872,1919)]),G(B,[C(328),L(1920,1983)]),G(B,[C(329),L(2304,2431)]),G(B,[C(330),L(2432,2559)]),G(B,[C(331),L(2560,2687)]),G(B,[C(332),L(2688,2815)]),G(B,[C(333),L(2816,2943)]),G(B,[C(334),L(2944,3071)]),G(B,[C(335),L(3072,3199)]),G(B,[C(336),L(3200,3327)]),G(B,[C(337),L(3328,3455)]),G(B,[C(338),L(3456,3583)]),G(B,[C(339),L(3584,3711)]),G(B,[C(340),L(3712,3839)]),G(B,[C(341),L(3840,4095)]),G(B,[C(342),L(4096,4255)]),
G(B,[C(343),L(4256,4351)]),G(B,[C(344),L(4352,4607)]),G(B,[C(345),L(4608,4991)]),G(B,[C(346),L(4992,5023)]),G(B,[C(347),L(5024,5119)]),G(B,[C(348),L(5120,5759)]),G(B,[C(349),L(5760,5791)]),G(B,[C(350),L(5792,5887)]),G(B,[C(351),L(5888,5919)]),G(B,[C(352),L(5920,5951)]),G(B,[C(353),L(5952,5983)]),G(B,[C(354),L(5984,6015)]),G(B,[C(355),L(6016,6143)]),G(B,[C(356),L(6144,6319)]),G(B,[C(357),L(6400,6479)]),G(B,[C(358),L(6480,6527)]),G(B,[C(359),L(6528,6623)]),G(B,[C(360),L(6624,6655)]),G(B,[C(361),L(6656,6687)]),
G(B,[C(362),L(7424,7551)]),G(B,[C(363),L(7552,7615)]),G(B,[C(364),L(7616,7679)]),G(B,[C(365),L(7680,7935)]),G(B,[C(366),L(7936,8191)]),G(B,[C(367),L(8192,8303)]),G(B,[C(368),L(8304,8351)]),G(B,[C(369),L(8352,8399)]),G(B,[C(370),L(8400,8447)]),G(B,[C(371),L(8448,8527)]),G(B,[C(372),L(8528,8591)]),G(B,[C(373),L(8592,8703)]),G(B,[C(374),L(8704,8959)]),G(B,[C(375),L(8960,9215)]),G(B,[C(376),L(9216,9279)]),G(B,[C(377),L(9280,9311)]),G(B,[C(378),L(9312,9471)]),G(B,[C(379),L(9472,9599)]),G(B,[C(380),L(9600,9631)]),
G(B,[C(381),L(9632,9727)]),G(B,[C(382),L(9728,9983)]),G(B,[C(383),L(9984,10175)]),G(B,[C(384),L(10176,10223)]),G(B,[C(385),L(10224,10239)]),G(B,[C(386),L(10240,10495)]),G(B,[C(387),L(10496,10623)]),G(B,[C(388),L(10624,10751)]),G(B,[C(389),L(10752,11007)]),G(B,[C(390),L(11008,11263)]),G(B,[C(391),L(11264,11359)]),G(B,[C(392),L(11392,11519)]),G(B,[C(393),L(11520,11567)]),G(B,[C(394),L(11568,11647)]),G(B,[C(395),L(11648,11743)]),G(B,[C(396),L(11776,11903)]),G(B,[C(397),L(11904,12031)]),G(B,[C(398),L(12032,12255)]),
G(B,[C(399),L(12272,12287)]),G(B,[C(400),L(12288,12351)]),G(B,[C(401),L(12352,12447)]),G(B,[C(402),L(12448,12543)]),G(B,[C(403),L(12544,12591)]),G(B,[C(404),L(12592,12687)]),G(B,[C(405),L(12688,12703)]),G(B,[C(406),L(12704,12735)]),G(B,[C(407),L(12736,12783)]),G(B,[C(408),L(12784,12799)]),G(B,[C(409),L(12800,13055)]),G(B,[C(410),L(13056,13311)]),G(B,[C(411),L(13312,19893)]),G(B,[C(412),L(19904,19967)]),G(B,[C(413),L(19968,40959)]),G(B,[C(414),L(40960,42127)]),G(B,[C(415),L(42128,42191)]),G(B,[C(416),L(42752,
42783)]),G(B,[C(417),L(43008,43055)]),G(B,[C(418),L(44032,55203)]),G(B,[C(419),L(55296,56191)]),G(B,[C(420),L(56192,56319)]),G(B,[C(421),L(56320,57343)]),G(B,[C(422),L(57344,63743)]),G(B,[C(423),L(63744,64255)]),G(B,[C(424),L(64256,64335)]),G(B,[C(425),L(64336,65023)]),G(B,[C(426),L(65024,65039)]),G(B,[C(427),L(65040,65055)]),G(B,[C(428),L(65056,65071)]),G(B,[C(429),L(65072,65103)]),G(B,[C(430),L(65104,65135)]),G(B,[C(431),L(65136,65279)]),G(B,[C(432),L(65280,65519)]),G(B,[C(433),L(0,1114111)]),G(B,[C(434),
ANY()]),G(B,[C(435),BE(0,1)]),G(B,[C(436),HO(62,1)]),G(B,[C(437),BE(1,1)]),G(B,[C(438),BE(2,1)]),G(B,[C(439),BE(3,0)]),G(B,[C(440),BE(4,0)]),G(B,[C(441),BE(5,1)]),G(B,[C(442),HO(448,1)]),G(B,[C(443),BE(6,1)]),G(B,[C(444),BE(7,0)]),G(B,[C(445),BE(8,1)]),G(B,[C(446),HO(3584,1)]),G(B,[C(447),BE(9,1)]),G(B,[C(448),BE(10,1)]),G(B,[C(449),BE(11,1)]),G(B,[C(450),HO(28672,0)]),G(B,[C(451),BE(12,0)]),G(B,[C(452),BE(13,0)]),G(B,[C(453),BE(14,0)]),G(B,[C(454),AOt(983040,1,1)]),G(B,[C(455),BE(15,0)]),G(B,[C(456),BE(16,
1)]),G(B,[C(457),BE(18,1)]),G(B,[C(458),AOE(19,0,1)]),G(B,[C(459),HO(1643118592,1)]),G(B,[C(460),BE(20,0)]),G(B,[C(461),BE(21,0)]),G(B,[C(462),BE(22,0)]),G(B,[C(463),BE(23,0)]),G(B,[C(464),BE(24,1)]),G(B,[C(465),HO(2113929216,1)]),G(B,[C(466),BE(25,1)]),G(B,[C(467),BE(26,0)]),G(B,[C(468),BE(27,0)]),G(B,[C(469),BE(28,1)]),G(B,[C(470),BE(29,0)]),G(B,[C(471),BE(30,0)])]);}
function Lv(){BW.call(this);this.pS=0;}
function AKV(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.pS!=FT(FQ(D4(e,d)))?(-1):2;}
function JO(){BP.call(this);this.fG=0;}
function AIY(a){var b=new JO();ADF(b,a);return b;}
function ADF(a,b){BK(a);a.fG=b;}
function AJl(a,b){a.e=b;}
function AD6(a,b,c,d){var e,f;e=b+1|0;if(e>d.r){d.c2=1;return (-1);}f=I(c,b);if(b>d.ct&&Cm(I(c,b-1|0)))return (-1);if(a.fG!=f)return (-1);return a.e.c(e,c,d);}
function AGb(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return GS(a,b,c,d);e=d.ct;f=d.r;while(true){if(b>=f)return (-1);g=Hs(c,a.fG,b);if(g<0)return (-1);if(g>e&&Cm(I(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AEz(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return G1(a,b,c,d,e);f=e.ct;a:{while(true){if(c<b)return (-1);g=GF(d,a.fG,c);if(g<0)break a;if(g<b)break a;if(g>f&&Cm(I(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ACr(a,b){if(b instanceof D0)return 0;if(b instanceof DQ)return 0;if(b instanceof Dc)return 0;if(b instanceof Dv)return 0;if(b instanceof J3)return 0;if(!(b instanceof JO))return 1;return b.fG!=a.fG?0:1;}
function ALv(a,b){return 1;}
function J3(){BP.call(this);this.fl=0;}
function AGx(a){var b=new J3();AI5(b,a);return b;}
function AI5(a,b){BK(a);a.fl=b;}
function ADH(a,b){a.e=b;}
function AB9(a,b,c,d){var e,f,g,h;e=d.r;f=b+1|0;g=BF(f,e);if(g>0){d.c2=1;return (-1);}h=I(c,b);if(g<0&&CI(I(c,f)))return (-1);if(a.fl!=h)return (-1);return a.e.c(f,c,d);}
function AJE(a,b,c,d){var e,f;if(!(c instanceof Bv))return GS(a,b,c,d);e=d.r;while(true){if(b>=e)return (-1);f=Hs(c,a.fl,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CI(I(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function AKO(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return G1(a,b,c,d,e);f=e.r;a:{while(true){if(c<b)return (-1);g=GF(d,a.fl,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CI(I(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AEu(a,b){if(b instanceof D0)return 0;if(b instanceof DQ)return 0;if(b instanceof Dc)return 0;if(b instanceof Dv)return 0;if(b instanceof JO)return 0;if(!(b instanceof J3))return 1;return b.fl!=a.fl?0:1;}
function AJM(a,b){return 1;}
function Dv(){var a=this;BW.call(a);a.iN=0;a.hH=0;a.fe=0;}
function AKl(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.iN==e&&a.hH==d?2:(-1);}
function AIG(a,b,c,d){var e,f;if(!(c instanceof Bv))return GS(a,b,c,d);e=d.r;while(b<e){b=Hs(c,a.iN,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=I(c,b);if(a.hH==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function ADG(a,b,c,d,e){var f;if(!(d instanceof Bv))return G1(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=GF(d,a.hH,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.iN==I(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AKa(a,b){if(b instanceof Dv)return b.fe!=a.fe?0:1;if(b instanceof Dc)return b.i(a.fe);if(b instanceof D0)return 0;if(!(b instanceof DQ))return 1;return 0;}
var Tn=F(El);
function ADR(a,b){return b!=10?0:1;}
function AKg(a,b,c){return b!=10?0:1;}
var To=F(El);
function AK4(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AMB(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function Z$(){var a=this;B.call(a);a.lG=null;a.i5=null;a.gd=0;a.ul=0;}
function AIS(a){var b=new Z$();AGQ(b,a);return b;}
function AGQ(a,b){var c,d;while(true){c=a.gd;if(b<c)break;a.gd=c<<1|1;}d=c<<1|1;a.gd=d;d=d+1|0;a.lG=Bt(d);a.i5=Bt(d);a.ul=b;}
function P8(a,b,c){var d,e,f,g;d=0;e=a.gd;f=b&e;while(true){g=a.lG.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.i5.data[f]=c;}
function Rr(a,b){var c,d,e,f;c=a.gd;d=b&c;e=0;while(true){f=a.lG.data[d];if(!f)break;if(f==b)return a.i5.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.ul;}
var WK=F();
var JL=F(U);
function APk(){var a=new JL();AGs(a);return a;}
function AGs(a){}
function YG(a){return Ch(BS(C1(),9,13),32);}
var IZ=F(U);
function AOA(){var a=new IZ();ALr(a);return a;}
function ALr(a){}
function Zd(a){return BS(C1(),48,57);}
var Z4=F(U);
function APE(){var a=new Z4();AFV(a);return a;}
function AFV(a){}
function AKG(a){return BS(C1(),97,122);}
var AAy=F(U);
function ANM(){var a=new AAy();AGU(a);return a;}
function AGU(a){}
function ALx(a){return BS(C1(),65,90);}
var AAA=F(U);
function APh(){var a=new AAA();AC_(a);return a;}
function AC_(a){}
function AE3(a){return BS(C1(),0,127);}
var JF=F(U);
function APq(){var a=new JF();AEg(a);return a;}
function AEg(a){}
function Xy(a){return BS(BS(C1(),97,122),65,90);}
var Kf=F(JF);
function AOM(){var a=new Kf();AGB(a);return a;}
function AGB(a){}
function Ye(a){return BS(Xy(a),48,57);}
var ABB=F(U);
function AOx(){var a=new ABB();AIo(a);return a;}
function AIo(a){}
function AGa(a){return BS(BS(BS(C1(),33,64),91,96),123,126);}
var Li=F(Kf);
function ANV(){var a=new Li();AJX(a);return a;}
function AJX(a){}
function Wl(a){return BS(BS(BS(Ye(a),33,64),91,96),123,126);}
var YR=F(Li);
function ANT(){var a=new YR();ALk(a);return a;}
function ALk(a){}
function AH8(a){return Ch(Wl(a),32);}
var Y$=F(U);
function ANZ(){var a=new Y$();AKS(a);return a;}
function AKS(a){}
function AEp(a){return Ch(Ch(C1(),32),9);}
var XR=F(U);
function AOa(){var a=new XR();AMs(a);return a;}
function AMs(a){}
function AH5(a){return Ch(BS(C1(),0,31),127);}
var XH=F(U);
function ANX(){var a=new XH();ADo(a);return a;}
function ADo(a){}
function AMF(a){return BS(BS(BS(C1(),48,57),97,102),65,70);}
var AAE=F(U);
function AO0(){var a=new AAE();ACZ(a);return a;}
function ACZ(a){}
function AIQ(a){var b;b=new RE;b.wa=a;Bl(b);b.G=1;return b;}
var ABL=F(U);
function ANH(){var a=new ABL();AKd(a);return a;}
function AKd(a){}
function AB1(a){var b;b=new LI;b.wj=a;Bl(b);b.G=1;return b;}
var Z_=F(U);
function APm(){var a=new Z_();ADb(a);return a;}
function ADb(a){}
function AGy(a){var b;b=new QH;b.vQ=a;Bl(b);return b;}
var ZV=F(U);
function AN_(){var a=new ZV();AH6(a);return a;}
function AH6(a){}
function AKq(a){var b;b=new QG;b.vE=a;Bl(b);return b;}
var AAP=F(U);
function AOK(){var a=new AAP();AEb(a);return a;}
function AEb(a){}
function AEn(a){var b;b=new US;b.w$=a;Bl(b);G6(b.D,0,2048);b.G=1;return b;}
var WZ=F(U);
function AN9(){var a=new WZ();ADN(a);return a;}
function ADN(a){}
function AEI(a){var b;b=new NP;b.wz=a;Bl(b);b.G=1;return b;}
var WF=F(U);
function AOL(){var a=new WF();AHN(a);return a;}
function AHN(a){}
function AMz(a){var b;b=new M6;b.xA=a;Bl(b);b.G=1;return b;}
var AAf=F(U);
function AN1(){var a=new AAf();AIp(a);return a;}
function AIp(a){}
function ABU(a){var b;b=new PE;b.wc=a;Bl(b);return b;}
var AAp=F(U);
function APu(){var a=new AAp();AGl(a);return a;}
function AGl(a){}
function AHg(a){var b;b=new LB;b.uP=a;Bl(b);b.G=1;return b;}
var X$=F(U);
function AN3(){var a=new X$();ACv(a);return a;}
function ACv(a){}
function AER(a){var b;b=new LH;b.wC=a;Bl(b);b.G=1;return b;}
var Zb=F(U);
function AOQ(){var a=new Zb();ADT(a);return a;}
function ADT(a){}
function AFO(a){var b;b=new MG;b.w7=a;Bl(b);b.G=1;return b;}
var ABn=F(U);
function APg(){var a=new ABn();AHm(a);return a;}
function AHm(a){}
function AHj(a){var b;b=new Ob;b.xm=a;Bl(b);b.G=1;return b;}
var AAm=F(U);
function APd(){var a=new AAm();AII(a);return a;}
function AII(a){}
function ALR(a){var b;b=new Oj;b.vT=a;Bl(b);return b;}
var Yx=F(U);
function APr(){var a=new Yx();ADO(a);return a;}
function ADO(a){}
function AJQ(a){var b;b=new R3;b.wK=a;Bl(b);return b;}
var X9=F(U);
function AN0(){var a=new X9();AKr(a);return a;}
function AKr(a){}
function AIH(a){var b;b=new Rk;b.uT=a;Bl(b);b.G=1;return b;}
var ABH=F(U);
function AO5(){var a=new ABH();AGg(a);return a;}
function AGg(a){}
function AKA(a){var b;b=new LP;b.xJ=a;Bl(b);b.G=1;return b;}
var It=F(U);
function AOU(){var a=new It();AEX(a);return a;}
function AEX(a){}
function Y_(a){return Ch(BS(BS(BS(C1(),97,122),65,90),48,57),95);}
var AAS=F(It);
function ANW(){var a=new AAS();AGo(a);return a;}
function AGo(a){}
function AIs(a){var b;b=D3(Y_(a),1);b.G=1;return b;}
var YW=F(JL);
function AND(){var a=new YW();AMf(a);return a;}
function AMf(a){}
function AC7(a){var b;b=D3(YG(a),1);b.G=1;return b;}
var X5=F(IZ);
function AOh(){var a=new X5();AG$(a);return a;}
function AG$(a){}
function AF1(a){var b;b=D3(Zd(a),1);b.G=1;return b;}
function XM(){var a=this;U.call(a);a.pH=0;a.qj=0;}
function L(a,b){var c=new XM();AMw(c,a,b);return c;}
function AMw(a,b,c){a.pH=b;a.qj=c;}
function AHw(a){return BS(C1(),a.pH,a.qj);}
var X1=F(U);
function ANY(){var a=new X1();AMO(a);return a;}
function AMO(a){}
function AMn(a){return BS(BS(C1(),65279,65279),65520,65533);}
function YL(){var a=this;U.call(a);a.ld=0;a.iT=0;a.of=0;}
function BE(a,b){var c=new YL();AD7(c,a,b);return c;}
function AOE(a,b,c){var d=new YL();AMy(d,a,b,c);return d;}
function AD7(a,b,c){a.iT=c;a.ld=b;}
function AMy(a,b,c,d){a.of=d;a.iT=c;a.ld=b;}
function AFo(a){var b;b=APA(a.ld);if(a.of)G6(b.D,0,2048);b.G=a.iT;return b;}
function YS(){var a=this;U.call(a);a.lb=0;a.i7=0;a.mN=0;}
function HO(a,b){var c=new YS();AES(c,a,b);return c;}
function AOt(a,b,c){var d=new YS();ABW(d,a,b,c);return d;}
function AES(a,b,c){a.i7=c;a.lb=b;}
function ABW(a,b,c,d){a.mN=d;a.i7=c;a.lb=b;}
function ABV(a){var b;b=new Qy;ZJ(b,a.lb);if(a.mN)G6(b.D,0,2048);b.G=a.i7;return b;}
var XN=F();
var Xl=F();
function Yt(b){var c,d,e,f,g,h,i;c=AKJ(ES(b));d=IO(c);e=Bt(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+IO(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=L1(c);h=h+1|0;}return e;}
function Js(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Md(){var a=this;B.call(a);a.oI=0;a.qB=0;a.o1=null;}
function AFm(a,b,c){var d=new Md();ALi(d,a,b,c);return d;}
function ALi(a,b,c,d){a.oI=b;a.qB=c;a.o1=d;}
function AAi(){var a=this;B.call(a);a.nz=null;a.pO=0;}
function AKJ(a){var b=new AAi();AEw(b,a);return b;}
function AEw(a,b){a.nz=b;}
var Ys=F();
function IO(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.nz.data;f=b.pO;b.pO=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+V(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function L1(b){var c,d;c=IO(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function Xv(){B.call(this);this.H1=null;}
var Og=F();
var AS$=null;function Km(b,c,d){Pz(b,c,d,0);}
function Pz(b,c,d,e){MY(b,c,d,null,null,e);}
function MY(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;h=Ug(c);i=X(h);j=X(h);k=X(h);l=Ci(b);m=Bt(i+1|0);n=!g?O(CK,i):XJ(b.v,i);c=m.data;b.v=n;o=0;while(o<i){if(g&&o<l){p=4*X(h)|0;h.d3=h.d3+p|0;c[o+1|0]=(c[o]+(BH(b,o)).z|0)+1|0;}else{b.v.data[o]=Dk(O6(h,d,0));c[o+1|0]=(c[o]+(BH(b,o)).z|0)+1|0;}o=o+1|0;}if(j)b.cN=AAo(ABo(h));b.gt=m;Eg(b.dc);Eg(b.cQ);q=b.dc;g=0;while(g<k){Dn(q,Di(X(h),X(h)),Di(X(h),X(h)));g=g+1|0;}r=b.dc;s=b.cQ;r=M2(S_(r));while(EG(r)){t=Vv(r);q=t.cg;t=t.cv;BV(AS$);u=B7(s,t);if(u===null){u
=Bz();Dn(s,t,u);}Bu(u,q);}if(s.jE===null){r=new N5;r.uh=s;s.jE=r;}r=s.jE;q=new P2;JK(q,r.uh);while(EG(q)){Ka(q);r=q.fu.cv;t=AQM;c=O(B,r.j);d=c.data;GY(r,c);X4(c,t);g=0;v=d.length;while(g<v){t=d[g];Id(r,g);r.cd.data[g]=t;g=g+1|0;}}Pn(h);if(e!==null&&f!==null){r=AIn(e,f);M$(r);b.dI=AD$(r.j7,r.gT);b.cN=AAo(r.kJ);}}
function LA(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Ug(c);i=X(h);j=X(h);k=X(h)!=1?0:1;l=X(h);m=X(h);n=UZ(b,i);o=UZ(b,j);p=(G4(BH(b,n.b),n.a)).data[0].k;g=(G4(BH(b,o.b),o.a)).data[1].k;q=0;r=l-1|0;while(q<l){s=O6(h,d,i);if(!q)s=TJ(p,s);if(q==r)s=TJ(s,g);t=n.b+q|0;u=Dk(s);c=b.v.data;v=c[t];c[t]=u;if(!k&&Ig(v)==Ig(u)){w=0;while(w<Ig(v)){x=v.k.data[w];o=u.k.data[w];t=x.bR;if(t!=5&&t&&!o.bR){o.bR=t;o.bB=x.bB;}w=w+1|0;}}q=q+1|0;}if(k){if(m){x=ABo(h);v=IL(i,j,
(-1));ME(b.cN,v,x);}else if(e!==null&&f!==null){u=AIn(e,f);M$(u);v=IL(i,j,(-1));ME(b.cN,v,u.kJ);b.dI.dU=u.gT;}}Pn(h);}
function O6(b,c,d){var e,f,g,h,i,j,k,l;e=X(b);f=O(B_,e);g=f.data;h=0;while(h<e){i=X(b);j=X(b);k=X(b);l=X(b);g[h]=Dt(DL(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AAa(){AS$=new U9;}
function Ti(){var a=this;B.call(a);a.xL=null;a.ij=null;}
function AE7(a,b){var c;c=a.ij;b=b;a.ij=NL(!c.lz&&!b.dM?0:1);return 1;}
function Uk(){var a=this;Q.call(a);a.nb=null;a.xf=null;}
function AE9(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.bZ^C6(a.nb,c):0;}
function Ui(){var a=this;Q.call(a);a.sH=null;a.tp=null;a.wT=null;}
function ACj(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.bZ^C6(a.sH,c):0;return a.tp.i(b)&&!d?1:0;}
function Nn(){var a=this;Q.call(a);a.hN=null;a.uY=null;}
function AHn(a,b){return a.T^C6(a.hN,b);}
function AFS(a){var b,c,d;b=new R;T(b);c=Gr(a.hN,0);while(c>=0){Hv(b,FK(c));B0(b,124);c=Gr(a.hN,c+1|0);}d=b.F;if(d>0)T$(b,d-1|0);return S(b);}
function Nu(){var a=this;Q.call(a);a.p7=null;a.wh=null;}
function AKo(a,b){return a.p7.i(b);}
function Ns(){var a=this;Q.call(a);a.iY=0;a.n0=null;a.jS=null;}
function AKU(a,b){return !(a.iY^C6(a.jS.y,b))&&!(a.iY^a.jS.dt^a.n0.i(b))?0:1;}
function Nt(){var a=this;Q.call(a);a.i6=0;a.s4=null;a.kQ=null;}
function AHP(a,b){return !(a.i6^C6(a.kQ.y,b))&&!(a.i6^a.kQ.dt^a.s4.i(b))?1:0;}
function Nx(){var a=this;Q.call(a);a.tY=0;a.tc=null;a.sZ=null;a.vl=null;}
function AEM(a,b){return a.tY^(!a.tc.i(b)&&!a.sZ.i(b)?0:1);}
function Ny(){var a=this;Q.call(a);a.qf=0;a.pW=null;a.pi=null;a.xG=null;}
function ABN(a,b){return a.qf^(!a.pW.i(b)&&!a.pi.i(b)?0:1)?0:1;}
function Nv(){var a=this;Q.call(a);a.o5=null;a.xI=null;}
function AFW(a,b){return CE(a.o5,b);}
function Nw(){var a=this;Q.call(a);a.tm=null;a.vA=null;}
function AHR(a,b){return CE(a.tm,b)?0:1;}
function Nz(){var a=this;Q.call(a);a.qt=null;a.pZ=0;a.sf=null;}
function AL2(a,b){return !CE(a.qt,b)&&!(a.pZ^C6(a.sf.y,b))?0:1;}
function NA(){var a=this;Q.call(a);a.q5=null;a.rn=0;a.qP=null;}
function AEi(a,b){return !CE(a.q5,b)&&!(a.rn^C6(a.qP.y,b))?1:0;}
function Nm(){var a=this;Q.call(a);a.r6=0;a.s3=null;a.tC=null;a.u6=null;}
function ANA(a,b){return !(a.r6^a.s3.i(b))&&!CE(a.tC,b)?0:1;}
function NZ(){var a=this;Q.call(a);a.tx=0;a.mb=null;a.mT=null;a.vw=null;}
function AF0(a,b){return !(a.tx^a.mb.i(b))&&!CE(a.mT,b)?1:0;}
function Nk(){var a=this;Q.call(a);a.ox=null;a.vC=null;}
function AEh(a,b){return CE(a.ox,b);}
function Nl(){var a=this;Q.call(a);a.oE=null;a.xC=null;}
function AFD(a,b){return CE(a.oE,b)?0:1;}
function Nq(){var a=this;Q.call(a);a.tU=null;a.qX=0;a.uH=null;}
function AGT(a,b){return CE(a.tU,b)&&a.qX^C6(a.uH.y,b)?1:0;}
function Nj(){var a=this;Q.call(a);a.rK=null;a.qh=0;a.qV=null;}
function ALE(a,b){return CE(a.rK,b)&&a.qh^C6(a.qV.y,b)?0:1;}
function No(){var a=this;Q.call(a);a.sj=0;a.m_=null;a.qc=null;a.vk=null;}
function ADk(a,b){return a.sj^a.m_.i(b)&&CE(a.qc,b)?1:0;}
function Np(){var a=this;Q.call(a);a.rB=0;a.l3=null;a.r4=null;a.vG=null;}
function AJL(a,b){return a.rB^a.l3.i(b)&&CE(a.r4,b)?0:1;}
var Fl=F(Cg);
var ASl=null;var ASk=null;var AS_=null;function Rn(){Rn=Bf(Fl);ANh();}
function AKT(a,b){var c=new Fl();YC(c,a,b);return c;}
function YC(a,b,c){Rn();C4(a,b,c);}
function ANh(){var b;ASl=AKT(C(472),0);b=AKT(C(473),1);ASk=b;AS_=G(Fl,[ASl,b]);}
function Wa(){B.call(this);this.oV=null;}
var KF=F(0);
function Rj(){var a=this;B.call(a);a.vs=null;a.s6=null;a.h3=null;a.ce=null;a.hO=0;a.jK=0;}
function LF(a,b){var c,d,e;c=H(a.h3);if(b>=0&&b<=c){VC(a.ce,null,(-1),(-1));d=a.ce;d.iy=1;d.dQ=b;c=d.gX;if(c<0)c=b;d.gX=c;b=a.s6.b3(b,a.h3,d);if(b==(-1))a.ce.c2=1;if(b>=0){d=a.ce;if(d.h4){e=d.dk.data;if(e[0]==(-1)){c=d.dQ;e[0]=c;e[1]=c;}d.gX=H6(d);return 1;}}a.ce.dQ=(-1);return 0;}d=new BU;Br(d,DX(b));J(d);}
function ABm(a){return NV(a.ce,0);}
function X6(a){return QJ(a.ce,0);}
function WQ(a){return a.ce.h9;}
function ZW(){var a=this;B.call(a);a.gn=null;a.d3=0;}
function Ug(a){var b=new ZW();AB6(b,a);return b;}
function AB6(a,b){a.gn=b;a.d3=0;}
function X(a){var b,c;b=a.gn.data;c=a.d3;a.d3=c+1|0;return b[c];}
function Pn(a){var b,c,d,e;if(a.d3!=a.gn.data.length){b=D2();c=a.gn.data.length;d=a.d3;e=new R;T(e);K(Bj(K(Bj(K(e,C(240)),c),C(474)),d),C(475));CU(b,S(e));}}
function W0(){var a=this;B.call(a);a.j7=null;a.kJ=null;a.gT=null;a.b8=null;a.jb=null;a.jR=null;a.f6=null;a.kI=null;a.kB=null;}
function AIn(a,b){var c=new W0();AL7(c,a,b);return c;}
function AL7(a,b,c){a.b8=Ug(b);a.jb=c;}
function M$(a){var b,c,d,e,f,g,h,i;b=X(a.b8);c=new JJ;Oy(c);a.gT=c;a.f6=Bz();d=0;while(d<b){e=X(a.b8);f=X(a.b8);g=DL(a.jb,e,f);Dn(a.gT,g,Bz());Bu(a.f6,g);d=d+1|0;}c=M2(S_(a.gT));while(EG(c)){FY((Vv(c)).cv,Me(a));}d=X(a.b8);if(d==(-1))a.j7=null;else{a.jR=O(EP,d);c=new LJ;h=a.b8;i=a.jb;g=a.f6;c.cS=h;c.qi=i;c.pB=g;a.kI=c;c=new P0;c.dr=h;c.sS=i;c.th=g;a.kB=c;a.j7=PB(a,null);}if(X(a.b8)!=(-1))a.kJ=PX(a.b8,a.jR);}
function PB(a,b){var c,d,e,f,g,h,i,j,k;c=X(a.b8);d=X(a.b8);e=a.kI;f=X(e.cS);g=Bz();h=0;while(h<f){Bu(g,LM(e));h=h+1|0;}a:{switch(d){case -1:i=new JG;i.fE=b;b=ARH;i.ca=b;i.d1=b;i.dC=b;i.hF=b;i.fw=b;break a;case 0:i=ANI(b);break a;case 1:i=new Jf;Zm(i,b);FY(i.dC,g);break a;default:}b=new Dg;i=new R;T(i);Bj(K(i,C(476)),d);Br(b,S(i));J(b);}i.dC=g;b=a.kB;d=X(b.dr);e=Bz();j=0;while(j<d){Bu(e,Fn(b));j=j+1|0;}i.d1=e;i.hF=Me(a);d=X(a.b8);b=Bz();j=0;while(j<d){e=LM(a.kI);g=Fn(a.kB);f=X(a.b8);k=new OA;k.hI=e;k.iw=g;k.n_
=f;Bu(b,k);j=j+1|0;}i.fw=b;j=X(a.b8);i.rZ=j==(-1)?null:Bo(a.f6,j);d=X(a.b8);b=Bz();j=0;while(j<d){Bu(b,PB(a,i));j=j+1|0;}i.ca=b;a.jR.data[c]=i;return i;}
function Me(a){var b,c,d,e;b=X(a.b8);c=Bz();d=0;while(d<b){e=X(a.b8);Bu(c,Bo(a.f6,e));d=d+1|0;}return c;}
var RZ=F();
var ASi=null;function AOY(){AOY=Bf(RZ);ACK();}
function ACK(){var b,c;Rn();b=Bt((AS_.f1()).data.length);c=b.data;ASi=b;c[ASl.fR]=1;c[ASk.fR]=2;}
function VI(){B.call(this);this.lX=null;}
function KJ(a,b){var c,d;c=a.lX;d=b.k5;b=new R;T(b);K(K(b,c),d);$rt_globals.console.info($rt_ustr(S(b)));}
function Rs(){B.call(this);this.tR=null;}
function AKc(a,b){var c,d,e,f,g;FP(a.tR);c=ARn;d=XD(C(477));if(!Kr()){b=new Bq;Br(b,C(254));KJ(d,b);}else{e=$rt_globals.navigator.clipboard;f=ES(b);AO9();b=ATa;g=f.data;g=b.decode(g);b=e.writeText(g);e=new SO;e.wG=c;c=ABF(d);b.then(Bi(e,"f"),Bi(c,"f"));}}
var U9=F();
var EB=F();
var ATb=null;var ATc=null;var ARH=null;var ATd=null;var ATe=null;var ATf=null;function Zo(){ATb=new Tz;ATc=new Tx;ARH=new Ty;ATd=new Tv;ATe=new Tw;ATf=new V_;}
var I7=F(Ec);
var Tz=F(I7);
var Ke=F(Du);
var Tx=F(Ke);
var KI=F(D8);
function AEr(a){var b;b=new DR;W(b);J(b);}
function AIc(a,b){var c;c=new DR;W(c);J(c);}
function AG7(a,b){b=new DR;W(b);J(b);}
var Ty=F(KI);
function AIh(a,b){var c;c=new BU;W(c);J(c);}
function AHs(a){return 0;}
function AET(a){return ATd;}
function ACH(a){return 1;}
var Tv=F();
function ACq(a){return 0;}
function AJw(a){var b;b=new La;W(b);J(b);}
function AKP(a){var b;b=new Dg;W(b);J(b);}
var Od=F(0);
var Tw=F();
var V_=F();
var LX=F(FM);
function AFs(a,b,c,d){var e,f,g;e=0;f=d.r;a:{while(true){if(b>f){b=e;break a;}g=E5(d,a.P);C9(d,a.P,b);e=a.cB.c(b,c,d);if(e>=0)break;C9(d,a.P,g);b=b+1|0;}}return b;}
function ANq(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=E5(e,a.P);C9(e,a.P,c);f=a.cB.c(c,d,e);if(f>=0)break;C9(e,a.P,g);c=c+(-1)|0;}}return c;}
function AD4(a){return null;}
var La=F(Bq);
function Qe(){B.call(this);this.rz=null;}
function AD1(a,b){LC(a.rz,b);}
var Gj=F();
var XK=F(Gj);
var AAe=F(Gj);
var Xj=F(0);
function PI(){B.call(this);this.mI=null;}
function AB0(a,b){var c;c=a.mI;b=Eu(b);Dj(c.oV,b);}
function QU(){B.call(this);this.pK=null;}
function AH9(a,b){b.fP=a.pK.cK;}
function QT(){B.call(this);this.sG=null;}
function AJ0(a,b){b.fE=a.sG.cK.b_;}
function OP(){var a=this;B.call(a);a.st=null;a.ss=null;}
function OO(){B.call(this);this.m2=null;}
function Q9(){var a=this;B.call(a);a.u3=null;a.u2=null;a.u5=null;}
function Sg(){var a=this;B.call(a);a.v9=null;a.v8=null;}
function SY(){Ec.call(this);this.p$=null;}
function M2(a){var b;b=new SM;JK(b,a.p$);return b;}
function N5(){En.call(this);this.uh=null;}
function Tg(){var a=this;B.call(a);a.dk=null;a.iF=null;a.kf=null;a.kl=null;a.n3=0;a.h4=0;a.ct=0;a.r=0;a.dQ=0;a.h9=0;a.eQ=0;a.c2=0;a.w2=0;a.gX=0;a.iy=0;}
function BD(a,b,c){a.iF.data[b]=c;}
function C0(a,b){return a.iF.data[b];}
function H6(a){return QJ(a,0);}
function QJ(a,b){Qw(a,b);return a.dk.data[(b*2|0)+1|0];}
function C9(a,b,c){a.dk.data[b*2|0]=c;}
function II(a,b,c){a.dk.data[(b*2|0)+1|0]=c;}
function E5(a,b){return a.dk.data[b*2|0];}
function HB(a,b){return a.dk.data[(b*2|0)+1|0];}
function Z6(a){return NV(a,0);}
function NV(a,b){Qw(a,b);return a.dk.data[b*2|0];}
function LO(a,b){return a.kf.data[b];}
function DM(a,b,c){a.kf.data[b]=c;}
function Qw(a,b){var c;if(!a.h4){c=new Dg;W(c);J(c);}if(b>=0&&b<a.n3)return;c=new BU;Br(c,DX(b));J(c);}
function VC(a,b,c,d){a.h4=0;a.iy=2;GI(a.dk,(-1));GI(a.iF,(-1));if(b!==null)a.kl=b;if(c>=0){a.ct=c;a.r=d;}a.dQ=a.ct;}
function Yg(a){return a.iy;}
function Vf(){B.call(this);this.nc=null;}
function AED(a,b){var c,d;c=a.nc;d=new Bq;Br(d,$rt_str(b.message));KJ(c,d);}
function Ng(){B.call(this);this.nq=null;}
function AEm(a,b){b.fP=a.nq;}
function LJ(){var a=this;B.call(a);a.cS=null;a.qi=null;a.pB=null;}
function LM(a){var b,c,d,e,f,g,h,i;a:{b=X(a.cS);switch(b){case 3:break;case 5:c=M0(a);d=Kt(a);b=X(a.cS);e=X(a.cS);f=X(a.cS);g=Bz();h=0;while(h<f){Bu(g,Kt(a));h=h+1|0;}i=new KU;Z8(i,c,d,b);i.iJ=g;i.lW=e;break a;default:c=new Dg;d=new R;T(d);Bj(K(d,C(478)),b);Br(c,S(d));J(c);}i=AO3(M0(a),Kt(a),X(a.cS));}return i;}
function M0(a){var b,c;b=X(a.cS);c=X(a.cS);return AFP(DL(a.qi,b,c),X(a.cS));}
function Kt(a){var b;b=X(a.cS);if(b==(-1))return null;return Bo(a.pB,b);}
function P0(){var a=this;B.call(a);a.dr=null;a.sS=null;a.th=null;}
function Fn(a){var b,c,d,e,f;a:{b:{b=X(a.dr);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Mf(a);d=OJ(a);b=X(a.dr);e=Rf(a);f=new HK;J1(f,c,d,2);f.mg=b;f.f3=e;break a;case 4:c=Fn(a);d=Fn(a);f=new H5;J1(f,c.er,c.eX,9);f.gV=c;f.f5=d;break a;case 5:f=AN2(Mf(a),OJ(a),X(a.dr));break a;case 9:c=Rf(a);f=new FB;d=!DO(c)&&Bo(c,0)!==null?(Bo(c,0)).eX:null;J1(f,null,null,7);f.fS=Bz();c=BM(c);while(BN(c)){e=BR(c);if(!(e instanceof FB))Bu(f.fS,e);else{e=e;FY(f.fS,e.fS);}}f.eX=d;break a;default:break b;}f
=null;break a;}c=new Dg;d=new R;T(d);Bj(K(d,C(479)),b);Br(c,S(d));J(c);}return f;}
function Mf(a){var b,c;b=X(a.dr);c=X(a.dr);return AFP(DL(a.sS,b,c),X(a.dr));}
function OJ(a){var b;b=X(a.dr);if(b==(-1))return null;return Bo(a.th,b);}
function Rf(a){var b,c,d;b=X(a.dr);c=Bz();d=0;while(d<b){Bu(c,Fn(a));d=d+1|0;}return c;}
function R_(){var a=this;B.call(a);a.lS=null;a.lT=null;}
function ALn(a){var b,c;b=a.lS;c=a.lT;b=b.hh;H$(b,c,b.fh);}
function MH(){var a=this;B.call(a);a.mO=null;a.mP=0;a.mQ=0;a.mR=null;a.mK=0;a.mM=0;}
function AIr(a,b){var c,d,e,f,g,h,i,j;c=a.mO;d=a.mP;e=a.mQ;f=a.mR;g=a.mK;h=a.mM;i=Ck(c.bi,5.0);d=Be((c.bi.cA.b-d|0)-i|0,Ba((i-d|0)-c.K.o.b|0,b.u.b));j=Be((c.bi.cA.a-e|0)-i|0,Ba((i-e|0)-c.K.o.a|0,b.u.a));Bn(f,d+g|0,j+h|0);JV(c,f,c.N.o);}
function TZ(){var a=this;B.call(a);a.r_=null;a.sb=null;a.sa=null;a.r8=0;a.r7=0;a.r$=0;a.r9=0;a.sm=0;a.sl=0;a.sn=0;a.sO=0;}
function AFQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.r_;d=a.sb;e=a.sa;f=a.r8;g=a.r7;h=a.r$;i=a.r9;j=a.sm;k=a.sl;l=a.sn;m=a.sO;n=Ck(c.bi,5.0);o=c.N.qY();Cp(d,c.N.o);Cp(e,c.N.E);switch(f){case -1:f=Be(h+(b.u.b-g|0)|0,c.bi.cA.b-n|0);g=o.b;h=h+i|0;f=Ba(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Ba((i+b.u.b|0)-g|0,Ba(o.b,n-c.K.E.b|0));}b:{switch(j){case -1:f=Ba(n,Be(l+(b.u.a-k|0)|0,(c.bi.cA.a+c.K.o.a|0)-n|0));g=o.a;h=l+m|0;f=Ba(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Ba((m+b.u.a|0)-k|0,o.a);}JV(c,e,d);}
function B8(){Cg.call(this);this.k7=null;}
var ATg=null;var ATh=null;var ATi=null;var ATj=null;var ATk=null;var ATl=null;var ATm=null;var ATn=null;var ATo=null;var ATp=null;var ATq=null;var ATr=null;var ATs=null;var ATt=null;var ATu=null;var ASm=null;function XZ(){XZ=Bf(B8);AGN();}
function Dq(a,b,c){var d=new B8();R4(d,a,b,c);return d;}
function AK$(a,b,c,d){var e=new B8();AAW(e,a,b,c,d);return e;}
function R4(a,b,c,d){XZ();C4(a,b,c);a.k7=G7(d,null);}
function AAW(a,b,c,d,e){XZ();C4(a,b,c);a.k7=G7(d,e);}
function AGN(){var b;b=new B8;AAQ();R4(b,C(202),0,AR6);ATg=b;ATh=Dq(C(203),1,N(C(480)));ATi=Dq(C(205),2,N(C(481)));ATj=Dq(C(207),3,N(C(482)));ATk=Dq(C(209),4,N(C(480)));ATl=Dq(C(210),5,DU(188,63,60));ATm=Dq(C(212),6,N(C(483)));ATn=Dq(C(214),7,N(C(484)));ATo=Dq(C(216),8,N(C(485)));ATp=AK$(C(218),9,AR6,DU(52,65,52));ATq=AK$(C(219),10,N(C(486)),N(C(487)));ATr=Dq(C(220),11,N(C(488)));ATs=Dq(C(222),12,N(C(489)));ATt=Dq(C(224),13,AR6);b=Dq(C(225),14,N(C(226)));ATu=b;ASm=G(B8,[ATg,ATh,ATi,ATj,ATk,ATl,ATm,ATn,ATo,ATp,
ATq,ATr,ATs,ATt,b]);}
var Dm=F(0);
var ASq=null;var ASr=null;var ASn=null;var ASo=null;var ASp=null;var ARK=null;var ARL=null;var ASs=null;var ASt=null;function AIl(){AIl=Bf(Dm);AJf();}
function AJf(){ASq=N(C(490));ASr=N(C(491));ASn=N(C(195));ASo=N(C(492));ASp=N(C(230));ARK=N(C(490));ARL=N(C(491));ASs=EX(118,121,122,128);ASt=DU(63,66,68);}
var CC=F(0);
var ASu=null;var ARO=null;var ASw=null;var ASv=null;var ASy=null;var ASx=null;var ASA=null;var ASz=null;var ASC=null;var ASB=null;var ASD=null;function AAC(){AAC=Bf(CC);AMD();}
function AMD(){ASu=Ha(0);ARO=DU(8,8,8);ASw=N(C(493));ASv=DU(255,255,255);ASy=N(C(494));ASx=N(C(495));ASA=N(C(496));ASz=N(C(497));ASC=EX(205,205,205,153);ASB=EX(255,255,255,0);ASD=N(C(266));}
function Ca(){Cg.call(this);this.kd=null;}
var ATv=null;var ATw=null;var ATx=null;var ATy=null;var ATz=null;var ATA=null;var ATB=null;var ATC=null;var ATD=null;var ATE=null;var ATF=null;var ATG=null;var ATH=null;var ATI=null;var ATJ=null;var ASE=null;function ZL(){ZL=Bf(Ca);AM3();}
function Da(a,b,c){var d=new Ca();PW(d,a,b,c);return d;}
function AMT(a,b,c,d){var e=new Ca();Xf(e,a,b,c,d);return e;}
function PW(a,b,c,d){ZL();C4(a,b,c);a.kd=G7(d,null);}
function Xf(a,b,c,d,e){ZL();C4(a,b,c);a.kd=G7(d,e);}
function AM3(){var b;b=new Ca;AAC();PW(b,C(202),0,ARO);ATv=b;ATw=Da(C(203),1,N(C(498)));ATx=Da(C(205),2,N(C(499)));ATy=Da(C(207),3,N(C(500)));ATz=Da(C(209),4,ARO);ATA=Da(C(210),5,N(C(501)));ATB=Da(C(212),6,N(C(488)));ATC=Da(C(214),7,N(C(502)));ATD=Da(C(216),8,N(C(503)));ATE=AMT(C(218),9,ARO,DU(237,235,252));ATF=AMT(C(219),10,N(C(486)),N(C(504)));ATG=Da(C(220),11,N(C(488)));ATH=Da(C(222),12,N(C(489)));ATI=Da(C(224),13,N(C(505)));b=Da(C(225),14,N(C(226)));ATJ=b;ASE=G(Ca,[ATv,ATw,ATx,ATy,ATz,ATA,ATB,ATC,ATD,ATE,
ATF,ATG,ATH,ATI,b]);}
var C_=F(0);
var ASI=null;var ASJ=null;var ASF=null;var ASG=null;var ASH=null;var ARP=null;var ARQ=null;var ASK=null;var ASL=null;function ACC(){ACC=Bf(C_);AEH();}
function AEH(){ASI=N(C(264));ASJ=N(C(506));ASF=N(C(507));ASG=N(C(508));ASH=N(C(509));ARP=N(C(264));ARQ=N(C(506));ASK=EX(205,205,205,153);ASL=DU(247,248,250);}
var SM=F(Ew);
function Vv(a){Ka(a);return a.fu;}
var P2=F(Ew);
function RE(){Q.call(this);this.wa=null;}
function AL9(a,b){return Ce(b)!=2?0:1;}
function LI(){Q.call(this);this.wj=null;}
function AC5(a,b){return Ce(b)!=1?0:1;}
function QH(){Q.call(this);this.vQ=null;}
function ACN(a,b){return P1(b);}
function QG(){Q.call(this);this.vE=null;}
function AFn(a,b){return 0;}
function US(){Q.call(this);this.w$=null;}
function AGJ(a,b){return !Ce(b)?0:1;}
function NP(){Q.call(this);this.wz=null;}
function AMb(a,b){return Ce(b)!=9?0:1;}
function M6(){Q.call(this);this.xA=null;}
function AJg(a,b){return FF(b);}
function PE(){Q.call(this);this.wc=null;}
function AKt(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function LB(){Q.call(this);this.uP=null;}
function ANa(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FF(b);}return b;}
function LH(){Q.call(this);this.wC=null;}
function AEy(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FF(b);}return b;}
function MG(){Q.call(this);this.w7=null;}
function AMi(a,b){a:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Ob(){Q.call(this);this.xm=null;}
function AH2(a,b){return IA(b);}
function Oj(){Q.call(this);this.vT=null;}
function AJ1(a,b){return Ok(b);}
function R3(){Q.call(this);this.wK=null;}
function AL3(a,b){return Ce(b)!=3?0:1;}
function Rk(){Q.call(this);this.uT=null;}
function AMQ(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=FF(b);}return b;}
function LP(){Q.call(this);this.xJ=null;}
function AEo(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=FF(b);}return b;}
function K3(){Q.call(this);this.kE=0;}
function APA(a){var b=new K3();ZJ(b,a);return b;}
function ZJ(a,b){Bl(a);a.kE=b;}
function AJj(a,b){return a.T^(a.kE!=Ce(b&65535)?0:1);}
var Qy=F(K3);
function ALc(a,b){return a.T^(!(a.kE>>Ce(b&65535)&1)?0:1);}
var SS=F(0);
var ASj=null;function AOu(){AOu=Bf(SS);AMN();}
function AMN(){ASj=N(C(490));}
function Q6(){B.call(this);this.pv=null;}
function AFG(a,b){b.fE=a.pv;}
function U_(){B.call(this);this.m3=null;}
function AFM(a,b){var c,d,e,f;c=a.m3;b=Eu(b);d=c.st;c=c.ss;e=new Vw;f=AJ9(Ir(c));c=null;WJ(e,ADA(b),c,f);Sc(d,e);}
function Va(){var a=this;B.call(a);a.on=null;a.oo=null;}
function ADj(a,b){var c,d;c=a.on;d=a.oo;b.text().then(Bi(c,"f"),Bi(d,"f"));}
function Mc(){var a=this;B.call(a);a.q$=null;a.q9=null;}
var YD=F();
function SO(){B.call(this);this.wG=null;}
function AMS(a,b){}
function SK(){B.call(this);this.oF=null;}
function AHz(a,b){var c;c=a.oF;b=$rt_str(b.message);CU(c.m2,b);}
function LD(){B.call(this);this.uE=null;}
function AF_(a){Dp(a.uE);}
var VJ=F(0);
var ATa=null;function AO9(){AO9=Bf(VJ);AJU();}
function AJU(){ATa=new $rt_globals.TextDecoder("utf-16");}
function Qi(){B.call(this);this.sM=null;}
function AKZ(a){var b,c;b=a.sM;c=b.q$;b=b.q9;c.x6(b.ig,b.kr,null);}
var AAc=F(0);
function YZ(){var a=this;B.call(a);a.BW=null;a.BU=null;a.BZ=0.0;}
function TW(){var a=this;B.call(a);a.iA=null;a.gO=0;}
function ML(){B.call(this);this.rk=null;}
function ACJ(a,b){return MJ(I(a.rk,b.bb));}
var W9=F();
$rt_packages([]);
$rt_metadata([B,0,0,[],0,3,0,0,["bq",APX(AHY),"eh",APW(ADD)],Fc,0,B,[],0,3,0,0,0,L0,0,B,[],3,3,0,0,0,Lw,0,B,[],3,3,0,0,0,Up,0,B,[L0,Lw],0,3,0,0,0,XG,0,B,[],4,0,0,0,0,Xm,0,B,[],4,3,0,0,0,FN,0,B,[],0,3,0,0,0,DE,0,FN,[],0,3,0,0,0,Bq,0,DE,[],0,3,0,0,0,YT,0,Bq,[],0,3,0,0,0,Cu,0,B,[],3,3,0,0,0,Cl,0,B,[],3,3,0,0,0,HU,0,B,[],3,3,0,0,0,Bv,0,B,[Cu,Cl,HU],0,3,0,FO,["bq",APX(B1),"k9",APW(J0),"iR",APX(AFq)],FI,0,FN,[],0,3,0,0,0,Gu,0,FI,[],0,3,0,0,0,Yy,0,Gu,[],0,3,0,0,0,Ea,0,B,[Cu],1,3,0,0,0,FA,0,Ea,[Cl],0,3,0,0,["bq",APX(AMY),
"iR",APX(AHf)],FC,0,B,[Cu,HU],0,0,0,0,["g8",APX(IH),"eh",APW(S)],G5,0,B,[],3,3,0,0,0,R,0,FC,[G5],0,3,0,0,["kT",AP0(AHc),"jW",APZ(AEG),"eh",APW(GM),"g8",APX(AHh),"ln",APY(AHK)],E$,0,Gu,[],0,3,0,0,0,ZK,0,E$,[],0,3,0,0,0,Yl,0,E$,[],0,3,0,0,0,RY,0,B,[],3,3,0,0,0,C3,0,B,[],3,3,0,0,0,NO,0,B,[],3,0,0,0,0,HG,0,B,[RY,C3,NO],1,3,0,0,["eG",APW(K4)],Qm,0,HG,[],0,3,0,0,0,WM,0,B,[],0,3,0,0,0,WY,0,B,[],0,3,0,0,0,BG,0,B,[],3,3,0,0,0,BQ,0,B,[BG],3,3,0,0,0,O7,0,B,[BQ],0,3,0,0,["R",APX(AG4)],O9,0,B,[BQ],0,3,0,0,["R",APX(AHl)],J9,
0,B,[],4,3,0,0,0,AAs,0,B,[],4,3,0,0,0,JP,0,B,[],3,3,0,0,0,Du,0,B,[JP],1,3,0,0,0,DF,0,B,[],3,3,0,0,0,Jp,0,Du,[DF,Cu],0,3,0,0,0,X7,0,B,[],0,3,0,0,0,ABJ,0,B,[],4,3,0,0,0,Hw,0,B,[BG],3,3,0,0,0,Tr,0,B,[Hw],0,3,0,0,["R",APX(AIO)],Gn,0,B,[],3,3,0,0,0,RC,0,B,[Gn],0,3,0,0,0,BU,0,Bq,[],0,3,0,0,0]);
$rt_metadata([Zt,0,B,[],4,3,0,0,0,FU,0,Bq,[],0,3,0,0,0,HM,0,Bq,[],0,3,0,0,0,CM,0,B,[Cl],0,3,0,0,0,Lq,0,B,[BG],3,3,0,0,0,Ro,0,B,[Lq],3,3,0,0,0,DV,0,B,[BG],3,3,0,0,0,WR,0,B,[BG,Ro,DV],1,3,0,0,["Fq",APW(AIK),"Ga",APX(ALj),"HK",APX(AK6),"AF",APX(AEk),"Fi",APX(ACa),"yF",APW(AEA),"Gn",APY(ALd),"Gt",APZ(AG0),"Hg",APW(AC3),"HU",APW(AJH),"Eh",APX(ALW),"BJ",APW(AIg),"Ik",APX(AGz),"Dt",APW(AIM),"CB",APW(ANo),"H7",APW(AHA),"yy",APX(ACV),"GB",APW(AMZ),"EJ",APY(AGw),"Bt",APY(AH$),"Gb",APY(AMu),"FC",APW(ACd),"G3",APW(AGi),
"Hw",APX(AEL),"DX",APX(AFC),"Ay",APY(AGM),"CX",APW(AHE),"G8",APX(AC6),"y1",APW(AFB),"H9",APW(AJ4),"Ai",APX(ABY),"Dr",APX(ALN),"HX",APX(ADu),"Cg",APW(ALP),"A$",APY(ADE),"F1",APX(AJT),"CK",APW(AKy),"zr",APY(AJd),"zv",APY(AIW),"Cd",APW(ALJ),"Hz",APX(AM4),"Bk",APZ(AIZ),"Ad",APW(AEC),"Bv",APY(ADY),"BC",APW(ACD),"FP",APW(AMU),"Ee",APW(AJc),"xQ",APW(ACB),"Ff",APY(AJe),"y2",APX(AEs),"DV",APX(AFT),"z5",APW(AKF)],Oa,0,B,[DV],3,3,0,0,0,Qg,0,B,[DV],3,3,0,0,0,P6,0,B,[DV],3,3,0,0,0,RV,0,B,[DV],3,3,0,0,0,Vg,0,B,[DV],3,3,0,
0,0,SW,0,B,[DV,Oa,Qg,P6,RV,Vg],3,3,0,0,0,XC,0,B,[BG,SW],1,3,0,0,["EV",APY(AJh),"He",APY(AHe),"Ak",APZ(AGk),"Bh",APX(ADa),"ED",APZ(AEQ)],BJ,0,Bq,[],0,3,0,0,0,Go,0,BU,[],0,3,0,0,0,Gz,0,B,[],3,3,0,0,0,FL,0,B,[Gz,DF],0,0,0,0,["bq",APX(AEq)],FV,0,FL,[],0,0,0,0,0,Mn,0,B,[BQ],0,3,0,0,["R",APX(AFv)],Mo,0,B,[BQ],0,3,0,0,["R",APX(AIa)],YX,0,B,[BG],1,3,0,0,0,Y3,0,B,[BG],1,3,0,0,0,AAK,0,B,[BG],1,3,0,0,0,TK,0,B,[BG],3,3,0,0,0,YU,0,B,[TK],1,3,0,0,["G9",APX(AF6),"Gs",APW(AHV)],MI,0,B,[BQ],0,3,0,0,["R",APX(AJS)],Pt,0,B,[],
3,3,0,0,0,ND,0,B,[Pt],3,3,0,0,0,Rt,0,B,[ND],0,3,0,0,0,Ei,0,B,[],3,3,0,0,0,YI,0,B,[Ei],0,3,0,0,0,Bh,0,B,[],3,3,0,0,0,YJ,0,B,[Bh],0,3,0,0,0,XV,0,B,[],0,3,0,0,0,PR,0,B,[Hw],0,3,0,0,["R",APX(ACt)],PQ,0,B,[BQ],0,3,0,0,["R",APX(ANt)],PS,0,B,[BQ],0,3,0,0,["R",APX(AMv)],Qa,0,B,[BG],3,3,0,0,0,TD,0,B,[Qa],0,3,0,0,["Dv",APX(AGv)],TB,0,B,[Bh],0,3,0,0,0,Pb,0,B,[BG],3,3,0,0,0,TC,0,B,[Pb],0,3,0,0,["Ht",APY(AEW)],AAY,0,B,[BG],1,3,0,0,0,B$,0,B,[BG],3,3,0,0,0,TA,0,B,[B$],0,3,0,0,["bU",APX(AJ2)],Q7,0,B,[],0,3,0,0,0,K5,0,B,[],
3,3,0,0,0,RO,0,B,[K5],3,3,0,0,0]);
$rt_metadata([SQ,0,B,[],3,3,0,0,0,FH,0,B,[RO,SQ],1,3,0,0,0,Iv,0,FH,[],0,3,0,0,0,Yi,0,Iv,[],0,3,0,0,0,Fz,0,FH,[],1,3,0,0,0,Jy,0,Fz,[],0,3,0,0,["jk",APZ(AFc)],T_,0,B,[],3,3,0,0,["d6",APX(ABQ)],Fs,0,B,[T_],3,3,0,0,["d6",APX(ABQ),"kG",APX(AG2)],En,0,B,[Fs],1,3,0,0,["d6",APX(ABQ),"kG",APX(AG2),"dB",APW(DO),"mU",APX(AKX)],Jx,0,B,[Fs],3,3,0,0,["d6",APX(ABQ),"kG",APX(AG2)],If,0,B,[Jx],3,3,0,0,["d6",APX(ABQ),"kG",APX(AG2)],D8,0,En,[If],1,3,0,0,["d6",APX(ABQ),"kG",APX(AG2),"q8",APX(AKj),"bQ",APW(BM),"rO",APY(AJB),"lH",
APY(ALG),"bq",APX(AIw)],KS,0,D8,[],1,3,0,0,["d6",APX(ABQ),"kG",APX(AG2)],Lx,0,B,[Fs],3,3,0,0,["d6",APX(ABQ),"kG",APX(AG2)],VD,0,B,[Lx,Jx],3,3,0,0,["d6",APX(ABQ),"kG",APX(AG2)],SP,0,KS,[VD],0,3,0,0,["d6",APX(ABQ),"kG",APX(AG2)],VA,0,B,[JP],3,3,0,0,0,LZ,0,B,[VA],3,3,0,0,0,NY,0,Du,[DF,Cu,LZ],0,3,0,0,0,AAT,0,B,[],4,3,0,0,0,Rb,0,B,[Ei],0,3,0,0,0,Rc,0,B,[BQ],0,3,0,0,["R",APX(ACc)],XP,0,B,[],0,3,0,0,0,JY,0,B,[],1,3,0,0,0,Tu,0,JY,[],0,3,0,0,0,KC,0,B,[C3],1,3,0,0,0,Ik,0,B,[Cl],1,3,0,0,0,K9,0,Ik,[],0,3,0,AFr,0,OG,0,B,
[],0,3,0,0,0,Uu,0,B,[B$],0,3,0,0,["bU",APX(AJD)],Uv,0,B,[B$],0,3,0,0,["bU",APX(AJN)],Uw,0,B,[B$],0,3,0,0,["bU",APX(AIe)],Ux,0,B,[B$],0,3,0,0,["bU",APX(AHH)],Uy,0,B,[B$],0,3,0,0,["bU",APX(AH3)],Uz,0,B,[B$],0,3,0,0,["bU",APX(AKb)],UA,0,B,[B$],0,3,0,0,["bU",APX(AGj)],UB,0,B,[B$],0,3,0,0,["bU",APX(ANi)],UC,0,B,[B$],0,3,0,0,["bU",APX(AFA)],UD,0,B,[B$],0,3,0,0,["bU",APX(AK8)],VX,0,B,[B$],0,3,0,0,["bU",APX(AMW)],VY,0,B,[B$],0,3,0,0,["bU",APX(AHU)],VZ,0,B,[B$],0,3,0,0,["bU",APX(AIi)],V0,0,B,[B$],0,3,0,0,["bU",APX(AJV)],Sq,
0,B,[],3,3,0,0,0,SD,0,B,[Sq],0,3,0,0,0,SC,0,B,[B$],0,3,0,0,["bU",APX(AG6)],Lr,0,B,[],0,3,0,0,0,Ib,0,B,[Gn],0,3,0,0,["tZ",APY(IB)],AA_,0,B,[],0,3,0,0,0,DH,0,B,[],3,3,0,0,0]);
$rt_metadata([Er,0,B,[DH],3,3,0,0,0,Ft,0,B,[],3,3,0,0,0,Hh,0,B,[],3,3,0,0,0,Lh,0,B,[DH],3,3,0,0,0,Jo,0,B,[],3,3,0,0,0,FS,0,B,[],3,3,0,0,0,IQ,0,B,[FS],3,3,0,0,0,Pg,0,B,[C3],0,3,0,0,0,Bp,0,B,[],0,3,0,0,["bq",APX(AGV)],UF,0,B,[],0,3,0,0,0,AAz,0,B,[],0,3,0,0,0,Xh,0,B,[],3,3,0,0,0,O_,0,B,[],0,3,0,0,0,Kq,0,B,[],0,3,0,0,0,CB,0,Kq,[],0,3,0,0,0,Ua,0,CB,[],0,3,0,0,0,D$,0,CB,[],0,3,0,0,0,Yv,0,CB,[],0,3,0,0,0,YN,0,D$,[],0,3,0,0,0,Fp,0,D$,[],0,3,0,0,0,ZN,0,Fp,[],0,3,0,0,0,ABp,0,Fp,[],0,3,0,0,0,XE,0,D$,[],0,3,0,0,0,ZM,0,
CB,[],0,3,0,0,0,Xd,0,CB,[],0,3,0,0,0,QI,0,B,[BG],3,3,0,0,0,ABG,0,B,[QI],3,3,0,0,0,O8,0,B,[C3],0,3,0,0,0,O$,0,B,[],0,3,0,0,0,Cg,0,B,[Cl,Cu],1,3,0,0,0,F2,0,Cg,[],12,3,0,GJ,0,J7,0,Fz,[],0,3,0,0,["jk",APZ(AGY)],DA,0,Cg,[],12,3,0,AMd,0,AAr,0,BJ,[],0,3,0,0,0,TE,0,DE,[],0,3,0,0,0,XB,0,B,[],0,3,0,0,0,F6,0,Cg,[],12,0,0,AIb,0,K7,0,B,[BG],3,3,0,0,0,Vy,0,B,[K7],0,3,0,0,["R",APX(AKK)],Vz,0,B,[K7],0,3,0,0,["R",APX(ADv)],Ge,0,B,[],1,3,0,0,0,Q3,0,B,[],3,3,0,0,0,JU,0,Ge,[Cl,G5,HU,Q3],1,3,0,0,0,YH,0,B,[],4,3,0,0,0,IT,0,Ge,[Cl],
1,3,0,0,0,GT,0,B,[],0,3,0,AMg,0,Ja,0,KC,[],1,3,0,0,0,NC,0,B,[],3,3,0,0,0,Os,0,B,[NC],3,3,0,0,0,Tk,0,B,[],3,3,0,0,0]);
$rt_metadata([Wp,0,Ja,[Os,Tk],0,3,0,0,0,Zu,0,B,[],3,3,0,0,0,PZ,0,B,[],0,3,0,0,0,QL,0,B,[B$],0,3,0,0,["bU",APX(ADS)],YY,0,B,[BG],1,3,0,0,0,I0,0,JU,[],1,0,0,0,0,P7,0,I0,[],0,0,0,0,0,JH,0,B,[],1,3,0,0,0,Ky,0,B,[],0,3,0,0,0,Qh,0,B,[Ft,Hh],0,0,0,0,["gN",APX(AJJ),"gp",APZ(AMm),"gH",APY(AKz),"gL",APY(AHq),"gK",APZ(AKR)],GN,0,B,[],3,3,0,0,["uA",APW(AI1),"rV",APW(AFt)],OI,0,B,[],3,3,0,0,0,OY,0,B,[],3,0,0,0,0,Yb,0,B,[GN,Ft,OI,OY],0,3,0,0,["rV",APW(AFj),"uA",APW(ACI),"gL",APY(AIA),"gH",APY(AB7),"gp",APZ(ACn),"gN",APX(AC4),
"jz",APX(AMC)],Op,0,B,[Er],0,3,0,0,["cY",APX(ADl)],Qj,0,B,[Er],0,3,0,0,["cY",APX(AFx)],Bc,0,B,[],3,3,0,0,0,On,0,B,[Bc],0,3,0,0,["m",APX(AFF)],Oo,0,B,[Jo],0,3,0,0,0,MW,0,B,[IQ],0,3,0,0,0,MX,0,B,[Hh],0,3,0,0,["gK",APZ(AG5)],MV,0,B,[Lh],0,3,0,0,["cY",APX(Zc)],Mv,0,B,[Ei],0,3,0,0,["lM",APX(AL4)],Wx,0,B,[],3,3,0,0,0,UO,0,B,[],0,0,0,0,0,Gl,0,B,[],0,3,0,0,0,NS,0,Gl,[],0,3,0,0,0,AAG,0,B,[],0,3,0,0,0,Lo,0,Gl,[],0,3,0,0,0,Ss,0,B,[BG],3,3,0,0,0,MB,0,B,[Ss],0,3,0,0,["HL",APX(AHo)],S4,0,B,[Bc],0,3,0,0,["m",APX(ALu)],UX,
0,IT,[],0,0,0,0,0,Xb,0,B,[],3,3,0,0,0,SG,0,B,[],0,3,0,0,0,QO,0,B,[Er],0,3,0,0,["cY",APX(AF4)],QN,0,B,[Er],0,3,0,0,["cY",APX(ADW)],HR,0,B,[],3,3,0,0,0,Vd,0,B,[Ft,HR],0,3,0,0,0,TY,0,B,[HR,GN],0,3,0,0,["uA",APW(AI1),"rV",APW(AFt),"jz",APX(AHM)],Ou,0,B,[],0,3,0,0,0,JS,0,B,[],0,3,0,0,0,Vw,0,B,[],0,3,0,0,0,Vj,0,B,[],0,3,0,0,0,EK,0,B,[C3],0,0,0,0,0,ABl,0,B,[],0,3,0,0,0,XW,0,B,[C3],0,3,0,0,0,MQ,0,B,[Bc],0,3,0,0,0,MP,0,B,[Bc],0,3,0,0,["m",APX(AC8)],MO,0,B,[Bc],0,3,0,0,["m",APX(ACi)]]);
$rt_metadata([Tb,0,B,[],0,0,0,0,0,MN,0,B,[Bh],0,3,0,0,["t",APW(ACh)],MU,0,B,[Bh],0,3,0,0,["t",APW(AFw)],MT,0,B,[Bh],0,3,0,0,["t",APW(ANy)],MS,0,B,[Bh],0,3,0,0,["t",APW(AHC)],MR,0,B,[Bh],0,3,0,0,["t",APW(AJK)],MM,0,B,[Bh],0,3,0,0,["t",APW(AM1)],MK,0,B,[Bh],0,3,0,0,["t",APW(AB$)],EV,0,Cg,[],12,3,0,ACf,0,AAx,0,B,[],3,3,0,0,0,W1,0,B,[],0,3,0,0,0,B4,0,B,[],0,3,0,0,["bq",APX(ANf)],Ll,0,B,[],3,3,0,0,0,O2,0,B,[Bh],0,3,0,0,["t",APW(AGh)],O1,0,B,[Bh],0,3,0,0,["t",APW(AB3)],J8,0,B,[],3,3,0,0,0,W4,0,D8,[DF,Cu,J8],0,3,0,
0,["kG",APX(AG2),"kF",APX(Bo),"cq",APW(AJn),"q8",APX(Bu),"lH",APY(Qn),"lu",APX(E7),"mU",APX(TS),"hq",APW(GH),"rO",APY(Xr),"d6",APX(DN)],VW,0,B,[],3,3,0,0,0,Vs,0,B,[],0,3,0,0,0,EE,0,B,[],0,3,0,0,0,I9,0,EE,[],0,3,0,0,0,RB,0,EE,[],0,3,0,0,0,OV,0,EE,[],0,3,0,0,0,Ga,0,B,[],3,3,0,0,0,Rg,0,B,[],3,3,0,0,0,OF,0,B,[],3,0,0,0,0,ZB,0,B,[BG],1,3,0,0,0,Jg,0,B,[],4,3,0,AGL,0,Qx,0,B,[Ll],0,3,0,0,0,AAZ,0,B,[],0,3,0,0,0,Sz,0,B,[],0,3,0,0,0,Qk,0,B,[],0,3,0,0,0,MC,0,B,[Bh],0,3,0,0,["t",APW(AM2)],Gb,0,B,[Cl],0,3,0,0,0,JM,0,B,[],
0,3,0,0,0,CK,0,B,[],0,3,0,0,0,Wd,0,Bq,[],0,3,0,0,0,T6,0,B,[],3,3,0,0,0,Zj,0,B,[T6],0,3,0,0,0,SJ,0,B,[],3,3,0,0,0,JR,0,B,[SJ],0,3,0,0,0,Oe,0,B,[],0,3,0,0,0,B_,0,B,[],0,3,0,0,0,JJ,0,Jp,[],0,3,0,0,0,Qt,0,B,[],0,3,0,0,0,ABj,0,B,[Cl],0,3,0,0,["bq",APX(ALa),"iR",APX(ADK)],Ud,0,B,[Gn],0,3,0,0,["tZ",APY(AHF)],PG,0,B,[],0,3,0,0,["bq",APX(ADy)],JE,0,JH,[],1,3,0,0,0,Of,0,JE,[],0,3,0,0,0]);
$rt_metadata([Sy,0,DE,[],0,3,0,0,0,He,0,B,[],0,3,0,0,0,HF,0,B,[],0,3,0,0,0,Xa,0,B,[],3,3,0,0,0,Ww,0,B,[],0,3,0,0,0,Zk,0,B,[],3,3,0,0,0,ABt,0,B,[],0,3,0,0,0,Le,0,B,[Gz,Cu],0,3,0,0,0,Ix,0,Le,[],0,0,0,0,0,HT,0,B4,[],0,3,0,0,0,CO,0,B,[],3,3,0,AFh,0,B6,0,Cg,[],12,3,0,Tc,0,H1,0,B,[],0,3,0,0,0,Hk,0,B,[],0,3,0,0,0,Za,0,B,[],0,3,0,0,0,Df,0,B,[],3,3,0,ACp,0,XT,0,B,[],0,3,0,0,["bq",APX(AK1)],OU,0,B,[Hw],0,3,0,0,["R",APX(ACF)],OS,0,B,[BQ],0,3,0,0,["R",APX(AMt)],OT,0,B,[BQ],0,3,0,0,["R",APX(AK3)],Hx,0,B,[],0,3,0,0,0,HW,
0,B,[],4,3,0,0,0,Xk,0,B,[],0,3,0,0,0,CD,0,B,[],3,3,0,AAQ,0,YV,0,B,[],0,3,0,0,0,Yc,0,B,[],4,3,0,0,0,Su,0,B,[],0,0,0,0,0,AAB,0,B,[],0,3,0,0,["bq",APX(AEf)],R$,0,B,[Bc],0,3,0,0,["m",APX(AEP)],Iw,0,B,[C3],0,3,0,0,["eG",APW(ZS)],WD,0,B,[],0,3,0,0,0,SZ,0,B,[],0,3,0,0,0,Rz,0,B,[],0,3,0,0,0,VM,0,B,[Bc],0,3,0,0,["m",APX(AC2)],W_,0,B,[],0,3,0,0,0,T3,0,B,[Cl],0,3,0,0,["bq",APX(ACk),"k9",APW(AKn),"iR",APX(AJZ)],Ox,0,B,[C3],0,3,0,0,0,M1,0,B,[Bc],0,3,0,0,0,Dg,0,Bq,[],0,3,0,0,0,Sb,0,FI,[],0,3,0,0,0,TT,0,B,[Bc],0,3,0,0,["m",
APX(AIC)],Xo,0,B,[],3,3,0,0,0,ABi,0,B,[],0,3,0,0,0,Lz,0,B,[Bc],0,3,0,0,["m",APX(ABP)],Sf,0,B,[Bc],0,3,0,0,0,QX,0,B,[Bc],0,3,0,0,["m",APX(AEY)],QW,0,B,[Bc],0,3,0,0,["m",APX(AMj)],Ev,0,B,[],3,3,0,0,0,Ms,0,B,[Ev],0,0,0,0,["b$",APW(BN),"bJ",APW(BR),"j9",APW(PT)],Yk,0,B,[BG],4,3,0,0,0]);
$rt_metadata([Rq,0,B,[FS],0,3,0,0,0,AAb,0,B,[Ei],0,3,0,0,0,Ly,0,B,[Bc],0,3,0,0,["m",APX(ALf)],L5,0,B,[DH],0,3,0,0,0,TU,0,B,[],0,3,0,0,0,Ru,0,Du,[DF,Cu],0,3,0,0,0,TP,0,B,[],0,3,0,0,0,TI,0,B,[],0,3,0,0,0,SE,0,B,[],0,3,0,0,0,DR,0,Bq,[],0,3,0,0,0,MA,0,B,[],0,3,0,0,0,R7,0,B,[Bc],0,3,0,0,["m",APX(AHZ)],R8,0,B,[Bc],0,3,0,0,["m",APX(AJA)],AAR,0,B,[],0,3,0,0,0,RM,0,B,[],0,0,0,0,0,Xe,0,B,[],3,3,0,0,0,Pv,0,B,[K5],3,3,0,0,0,Mt,0,B,[Pv],3,3,0,0,0,Gf,0,B,[Mt],1,3,0,0,0,Q4,0,Gf,[],0,3,0,0,0,Pm,0,B,[],3,3,0,0,0,Sh,0,B,[],0,
3,0,0,0,Q$,0,B,[Bc],0,3,0,0,0,GU,0,FL,[],0,0,0,0,0,Gd,0,Bq,[],0,3,0,0,0,Qd,0,B,[Bc],0,3,0,0,["m",APX(AL1)],Mm,0,B,[Bc],0,3,0,0,["m",APX(AHv)],Uf,0,B,[Bc],0,3,0,0,["m",APX(AML)],OZ,0,B,[Bc],0,3,0,0,["m",APX(ADn)],Vr,0,B,[BQ],0,3,0,0,["R",APX(AKW)],Vq,0,B,[BQ],0,3,0,0,["R",APX(AEx)],UN,0,B,[BQ],0,3,0,0,["R",APX(AFY)],UM,0,B,[BQ],0,3,0,0,["R",APX(AGE)],WN,0,B,[Bc],0,3,0,0,0,Vm,0,B,[B$],0,3,0,0,["bU",APX(AFN)],Je,0,B,[],0,3,0,0,0,Xp,0,B,[],0,3,0,0,0,ABE,0,B,[],0,3,0,0,0,Vb,0,B,[Bh],0,3,0,0,["t",APW(ACO)],Vc,0,B,
[Bh],0,3,0,0,["t",APW(AGm)],EP,0,B,[],0,3,0,0,0,VV,0,B,[Bc],0,3,0,0,["m",APX(AFR)],JG,0,EP,[],0,3,0,0,0,Jf,0,EP,[],0,3,0,0,0,Ub,0,B,[Bc],0,3,0,0,["m",APX(ACT)],OA,0,B,[],0,3,0,0,0,NK,0,B,[Bc],0,3,0,0,["m",APX(AIf)],Pk,0,B,[DH],0,3,0,0,["cY",APX(ANz)],VU,0,DR,[],0,3,0,0,0,PH,0,Bq,[],0,3,0,0,0]);
$rt_metadata([Uh,0,Bq,[],0,3,0,0,0,N7,0,B,[Bc],0,3,0,0,["m",APX(AJx)],ABy,0,B,[Bc],0,3,0,0,0,UJ,0,B,[],0,3,0,0,0,Pc,0,B,[Bh],0,3,0,0,["t",APW(ANB)],TO,0,B,[Bh],0,3,0,0,0,O4,0,B,[Pm],0,3,0,0,0,Ex,0,B,[C3],0,3,0,0,["eG",APW(AKp),"qY",APW(ZF),"kP",APZ(Qb),"jF",APX(AL$),"nW",APX(AHL),"nF",APX(AME),"ph",APY(AKx),"gp",APZ(AGp),"gH",APY(ADC),"gL",APY(AIv),"gN",APX(AMl),"gK",APZ(AKm)],Ii,0,Ex,[],0,3,0,0,0,Ph,0,Ii,[GN],0,3,0,0,["uA",APW(AI1),"rV",APW(AFt),"eG",APW(AMk),"ph",APY(AEK),"nF",APX(AJW),"nW",APX(ALh),"jz",
APX(ALy)],O5,0,B,[Bh],0,3,0,0,0,Oz,0,Ex,[],0,3,0,0,["eG",APW(ALe),"kP",APZ(AFX),"jF",APX(AKC),"gp",APZ(ALK),"gH",APY(ALg),"gL",APY(AIX),"gN",APX(AIE),"gK",APZ(AFe),"qY",APW(AMX)],F3,0,B,[],0,3,0,0,0,NR,0,B,[Fs],3,3,0,0,["d6",APX(ABQ),"kG",APX(AG2)],Ec,0,En,[NR],1,3,0,0,["d6",APX(ABQ),"kG",APX(AG2)],N4,0,Ec,[],0,0,0,0,["kG",APX(AG2)],Lk,0,B,[Bc],0,3,0,0,["m",APX(AE$)],Tf,0,B,[Bc],0,3,0,0,["m",APX(AHD)],Ia,0,B,[],0,3,0,0,["bq",APX(Zr)],KU,0,Ia,[],0,3,0,0,["bq",APX(ADm)],D9,0,B,[],0,3,0,0,["bq",APX(W5)],FB,0,D9,
[],0,3,0,0,0,HK,0,D9,[],0,3,0,0,["bq",APX(AMq)],H5,0,D9,[],0,3,0,0,["bq",APX(ACA)],Ya,0,Gf,[],0,3,0,0,0,QD,0,B,[Bh],0,3,0,0,["t",APW(AGu)],QE,0,B,[Bh],0,3,0,0,["t",APW(ADZ)],QB,0,B,[Bh],0,3,0,0,["t",APW(ACP)],QC,0,B,[Bh],0,3,0,0,["t",APW(AGq)],PL,0,B,[Bh],0,3,0,0,["t",APW(AKh)],PK,0,B,[Bh],0,3,0,0,["t",APW(AI6)],PJ,0,B,[Bh],0,3,0,0,["t",APW(ANp)],NU,0,B,[Bh],0,3,0,0,["t",APW(AI2)],O3,0,B,[],3,3,0,0,0,OK,0,B,[Bh],0,3,0,0,["t",APW(ADM)],Hz,0,B,[],0,3,0,0,0,Qc,0,B,[],3,3,0,0,0,WH,0,B,[Qc],0,3,0,0,0,TG,0,Ex,[],
0,3,0,0,0,RA,0,B,[Ga],0,3,0,0,["lF",APY(ALM)],UE,0,BU,[],0,3,0,0,0,DC,0,B,[],0,3,0,0,0,L_,0,B,[Bh],0,3,0,0,["t",APW(AGX)],Ma,0,B,[Bh],0,3,0,0,["t",APW(ALS)],L$,0,B,[Bh],0,3,0,0,["t",APW(ABO)],UL,0,B,[Bh],0,3,0,0,["t",APW(AHJ)],UK,0,B,[Bh],0,3,0,0,["t",APW(AKB)],P$,0,B,[FS],0,3,0,0,["t$",APW(AHi)],Q_,0,B,[Bh],0,3,0,0,["t",APW(AGC)],Ra,0,B,[Bh],0,3,0,0,["t",APW(ALA)]]);
$rt_metadata([VT,0,B,[Bh],0,3,0,0,["t",APW(AB2)],VO,0,B,[Bh],0,3,0,0,["t",APW(AGF)],VP,0,B,[Bh],0,3,0,0,["t",APW(AMP)],VQ,0,B,[Bh],0,3,0,0,["t",APW(AHX)],VR,0,B,[Bh],0,3,0,0,["t",APW(AF8)],J2,0,B,[],3,3,0,0,0,Vi,0,B,[J2],0,3,0,0,0,Nc,0,B,[Bc],0,3,0,0,["m",APX(ACy)],Nb,0,B,[Bc],0,3,0,0,["m",APX(ACU)],S9,0,B,[Ga],0,3,0,0,["lF",APY(ANe)],O0,0,B,[BQ],0,3,0,0,["R",APX(AEJ)],ABf,0,B,[Cl],0,3,0,0,["bq",APX(AI7)],LY,0,B,[Bc],0,3,0,0,["m",APX(AHB)],V5,0,B,[Bc],0,3,0,0,["m",APX(ANw)],HV,0,B,[BG],3,3,0,0,0,LG,0,B,[HV],
0,3,0,0,["qk",APW(AGI)],Lp,0,B,[HV],0,3,0,0,["qk",APW(ABS)],TV,0,B,[FS],0,3,0,0,["t$",APW(AM9)],SI,0,B,[J2],0,3,0,0,0,Vp,0,B,[BQ],0,3,0,0,["R",APX(AGc)],Ew,0,B,[],0,0,0,0,0,Rx,0,Ew,[Ev],0,0,0,0,0,Yh,0,B,[BG],1,3,0,0,0,Xc,0,B,[Bc],0,0,0,0,0,PY,0,B,[Cu],4,3,0,0,0,Re,0,B,[],3,3,0,0,0,Z1,0,B,[],0,3,0,0,0,Vl,0,Ea,[Cl],0,3,0,0,0,E3,0,B,[],0,0,0,0,0,GW,0,B,[],4,3,0,0,0,Tt,0,B,[],0,3,0,0,0,FW,0,B,[],3,3,0,0,0,R0,0,B,[FW],0,3,0,0,["h_",APZ(AIk)],R1,0,B,[FW],0,3,0,0,["h_",APZ(AGd)],Hb,0,B,[Cu,Cl],0,3,0,0,0,IJ,0,B,[],
3,3,0,0,0,Qz,0,B,[IJ],0,3,0,0,0,NB,0,B,[IJ],3,3,0,0,0,Y0,0,B,[NB],0,3,0,0,0,Q1,0,B,[FW],0,3,0,0,["h_",APZ(AI3)],Q0,0,B,[DH],0,3,0,0,["cY",APX(AMA)],QZ,0,B,[DH],0,3,0,0,["cY",APX(AJ7)],Q2,0,B,[FW],0,3,0,0,["h_",APZ(AIx)],By,0,B,[],1,0,0,0,["b3",APZ(GS),"b7",AP0(G1),"gZ",APW(ADx),"I",APX(ALV),"bE",APX(ALU),"eU",APW(AMI),"dV",APW(H9)],Ta,0,B,[],3,3,0,0,0,TX,0,B,[Ta],0,3,0,0,0,QP,0,Ea,[Cl],0,3,0,0,0,V6,0,B,[Bc],0,3,0,0,["m",APX(AI8)],V7,0,B,[Bc],0,3,0,0,["m",APX(AFp)],Po,0,B,[Bc],0,3,0,0,["m",APX(AIR)]]);
$rt_metadata([Cw,0,By,[],0,0,0,K6,["c",APZ(ACY),"B",APX(ADi)],FX,0,B,[],0,0,0,0,0,HN,0,BJ,[],0,3,0,0,0,Sn,0,B,[],0,3,0,0,0,U$,0,B,[BQ],0,3,0,0,["R",APX(AJI)],Zn,0,B,[BG],3,3,0,0,0,Sr,0,B,[BQ],0,3,0,0,["R",APX(AJp)],Qv,0,Cw,[],0,0,0,0,["c",APZ(ACs),"B",APX(AKH)],VF,0,Cw,[],0,0,0,0,["c",APZ(AD9)],OC,0,Cw,[],0,0,0,0,["c",APZ(ADt)],Ry,0,Cw,[],0,0,0,0,["c",APZ(ACz),"B",APX(AJy)],E1,0,Cw,[],0,0,0,0,["c",APZ(AL_)],BW,0,By,[],1,0,0,0,["c",APZ(ANd),"bK",APW(ALp),"B",APX(AGO)],AAN,0,BW,[],0,0,0,0,["bg",APY(AK0),"b3",
APZ(AFd),"b7",AP0(AD2),"B",APX(ACw)],BP,0,By,[],0,0,0,0,["c",APZ(AFU),"I",APX(AJr),"bE",APX(AHt),"B",APX(AJY),"dV",APW(ADX)],H3,0,BP,[],0,0,0,0,["c",APZ(AJb),"B",APX(AKi)],Do,0,H3,[],0,0,0,0,["c",APZ(AEv),"I",APX(AJ5)],LE,0,Do,[],0,0,0,0,["c",APZ(AJm),"B",APX(AL0)],T9,0,Do,[],0,0,0,0,["c",APZ(ADe),"B",APX(ALt)],P3,0,Do,[],0,0,0,0,["c",APZ(ADU),"B",APX(ANu)],RU,0,Do,[],0,0,0,0,["c",APZ(AB8),"B",APX(AKw)],FM,0,BP,[],0,0,0,0,["c",APZ(ACm),"b3",APZ(AHO),"b7",AP0(AKL),"bE",APX(AHp),"eU",APW(AJu),"dV",APW(AMM)],F0,
0,B,[],1,0,0,0,0,Q,0,F0,[],1,0,0,NE,["cZ",APW(ADg),"en",APW(ACM),"ie",APW(ALl),"gg",APW(AMG)],Xw,0,Q,[],0,0,0,0,["i",APX(CE),"cZ",APW(CA),"en",APW(AE_),"ie",APW(ALL),"eh",APW(AIF),"gg",APW(AFk)],Ih,0,Bq,[],0,3,0,0,0,DD,0,By,[],1,0,0,0,["bE",APX(AKM),"B",APX(AL6),"dV",APW(AH7)],CG,0,DD,[],0,0,0,0,["c",APZ(AB_)],EH,0,CG,[],0,0,0,0,["c",APZ(AC1)],Cx,0,DD,[],0,0,0,0,["c",APZ(ACl)],D7,0,CG,[],0,0,0,0,["c",APZ(AHT),"I",APX(ANx)],Ul,0,CG,[],0,0,0,0,["c",APZ(AM8),"b3",APZ(AIy)],U,0,B,[],1,0,0,0,0,CT,0,BJ,[],0,3,0,0,
0,LS,0,F0,[DF],0,0,0,0,["eh",APW(AIJ)],Na,0,By,[],0,0,0,0,["c",APZ(AG_),"B",APX(AJq)],U3,0,B,[DF,Cu],0,3,0,0,0,LK,0,BP,[],0,0,0,0,0,Pe,0,BP,[],0,0,0,0,["c",APZ(ACW),"I",APX(AI_),"B",APX(ADz),"bE",APX(ADf)],Dc,0,BP,[],0,0,0,0,["c",APZ(AE2),"i",APX(AFz),"bE",APX(ACS),"I",APX(ALb),"B",APX(AFb)],Ie,0,Dc,[],0,0,0,0,["i",APX(AGP)],Xn,0,BW,[],0,0,0,0,["bg",APY(AHa)],DQ,0,BW,[],0,0,0,0,["bg",APY(Lm),"bE",APX(AJt)],NF,0,BP,[],0,0,0,0,["I",APX(AHS),"c",APZ(ABZ),"bE",APX(ADq),"B",APX(ALO)],D0,0,BW,[],0,0,0,0,["bK",APW(AGW),
"bg",APY(AF5),"b3",APZ(AE0),"b7",AP0(AG3),"bE",APX(ALH)],ABd,0,BW,[],0,0,0,0,["bg",APY(ABT)],Wr,0,BW,[],0,0,0,0,["bg",APY(ACe)],EM,0,BP,[],0,0,0,0,["I",APX(AMK),"c",APZ(AJa),"bE",APX(AHb),"B",APX(AJ6)],Vo,0,EM,[],0,0,0,0,0,R9,0,EM,[],0,0,0,0,0]);
$rt_metadata([We,0,Cx,[],0,0,0,0,["c",APZ(AEe)],Ot,0,Cx,[],0,0,0,0,["c",APZ(AIm)],Fe,0,Cx,[],0,0,0,0,["c",APZ(AK_),"I",APX(AMe)],N9,0,Fe,[],0,0,0,0,["c",APZ(AGZ),"I",APX(AIN)],EL,0,Cx,[],0,0,0,0,["c",APZ(ANr)],L2,0,EL,[],0,0,0,0,["c",APZ(AGr)],Qo,0,Cx,[],0,0,0,0,["c",APZ(AMV)],Pp,0,Fe,[],0,0,0,0,["c",APZ(ADB)],S1,0,EL,[],0,0,0,0,["c",APZ(ACE)],Qp,0,DD,[],0,0,0,0,["c",APZ(ANg),"b3",APZ(ALm)],Ni,0,DD,[],0,0,0,0,["c",APZ(AJv),"b3",APZ(AB4)],El,0,B,[],1,0,0,0,0,Wf,0,CG,[],0,0,0,0,["c",APZ(ACG)],Ue,0,D7,[],0,0,0,
0,["c",APZ(AIj)],NW,0,EH,[],0,0,0,0,["c",APZ(AKN)],Pj,0,CG,[],0,0,0,0,["c",APZ(AJo)],Sl,0,D7,[],0,0,0,0,["c",APZ(ACQ)],P4,0,EH,[],0,0,0,0,["c",APZ(AK2)],Ji,0,By,[],4,0,0,0,["c",APZ(AHr),"B",APX(AGD)],XX,0,By,[],0,0,0,0,["c",APZ(ADc),"B",APX(ADp)],Nd,0,By,[],0,0,0,0,["c",APZ(AGR),"B",APX(ANn)],U8,0,By,[],4,0,0,0,["c",APZ(AJR),"B",APX(AD5)],UI,0,By,[],0,0,0,0,["c",APZ(AI$),"B",APX(ABR)],Mb,0,By,[],0,0,0,0,["c",APZ(ADV),"B",APX(AFL)],AA4,0,BP,[],0,0,0,0,["c",APZ(AM0),"I",APX(ADs),"gZ",APW(AIU),"B",APX(ADr)],Xu,
0,BP,[],4,0,0,0,["c",APZ(AI4),"I",APX(AKE),"gZ",APW(ABM),"B",APX(ANc)],AAV,0,By,[],4,0,0,0,["c",APZ(AHd),"B",APX(AFH)],Zl,0,By,[],0,0,0,0,["c",APZ(AI9),"B",APX(AFu)],Wn,0,By,[],0,0,0,0,["c",APZ(AGt),"B",APX(AD8)],Gh,0,BP,[],0,0,0,0,["c",APZ(ACL),"I",APX(AJ3),"B",APX(AKk)],AA0,0,Gh,[],0,0,0,0,["c",APZ(AEc),"b3",APZ(ALY),"b7",AP0(ACu),"bE",APX(AId)],YA,0,Gh,[],0,0,0,0,["c",APZ(AHI)],M_,0,FC,[G5],0,3,0,0,["kT",AP0(AFl),"jW",APZ(ADh),"g8",APX(ADI),"ln",APY(ALo)],Qr,0,BW,[],0,0,0,0,["bg",APY(AEt),"b3",APZ(AC$),"b7",
AP0(AFK),"bE",APX(AGe)],Wm,0,BW,[],0,0,0,0,["bg",APY(AHQ)],L7,0,BW,[],0,0,0,0,["bg",APY(AKQ)],Gg,0,B,[],4,0,0,AKu,0,Lv,0,BW,[],0,0,0,0,["bg",APY(AKV)],JO,0,BP,[],0,0,0,0,["I",APX(AJl),"c",APZ(AD6),"b3",APZ(AGb),"b7",AP0(AEz),"bE",APX(ACr),"B",APX(ALv)],J3,0,BP,[],0,0,0,0,["I",APX(ADH),"c",APZ(AB9),"b3",APZ(AJE),"b7",AP0(AKO),"bE",APX(AEu),"B",APX(AJM)],Dv,0,BW,[],0,0,0,0,["bg",APY(AKl),"b3",APZ(AIG),"b7",AP0(ADG),"bE",APX(AKa)],Tn,0,El,[],0,0,0,0,["gQ",APX(ADR),"rE",APY(AKg)],To,0,El,[],0,0,0,0,["gQ",APX(AK4),
"rE",APY(AMB)],Z$,0,B,[],0,0,0,0,0,WK,0,B,[],0,0,0,0,0,JL,0,U,[],0,0,0,0,["x",APW(YG)],IZ,0,U,[],0,0,0,0,["x",APW(Zd)],Z4,0,U,[],0,0,0,0,["x",APW(AKG)],AAy,0,U,[],0,0,0,0,["x",APW(ALx)],AAA,0,U,[],0,0,0,0,["x",APW(AE3)]]);
$rt_metadata([JF,0,U,[],0,0,0,0,["x",APW(Xy)],Kf,0,JF,[],0,0,0,0,["x",APW(Ye)],ABB,0,U,[],0,0,0,0,["x",APW(AGa)],Li,0,Kf,[],0,0,0,0,["x",APW(Wl)],YR,0,Li,[],0,0,0,0,["x",APW(AH8)],Y$,0,U,[],0,0,0,0,["x",APW(AEp)],XR,0,U,[],0,0,0,0,["x",APW(AH5)],XH,0,U,[],0,0,0,0,["x",APW(AMF)],AAE,0,U,[],0,0,0,0,["x",APW(AIQ)],ABL,0,U,[],0,0,0,0,["x",APW(AB1)],Z_,0,U,[],0,0,0,0,["x",APW(AGy)],ZV,0,U,[],0,0,0,0,["x",APW(AKq)],AAP,0,U,[],0,0,0,0,["x",APW(AEn)],WZ,0,U,[],0,0,0,0,["x",APW(AEI)],WF,0,U,[],0,0,0,0,["x",APW(AMz)],AAf,
0,U,[],0,0,0,0,["x",APW(ABU)],AAp,0,U,[],0,0,0,0,["x",APW(AHg)],X$,0,U,[],0,0,0,0,["x",APW(AER)],Zb,0,U,[],0,0,0,0,["x",APW(AFO)],ABn,0,U,[],0,0,0,0,["x",APW(AHj)],AAm,0,U,[],0,0,0,0,["x",APW(ALR)],Yx,0,U,[],0,0,0,0,["x",APW(AJQ)],X9,0,U,[],0,0,0,0,["x",APW(AIH)],ABH,0,U,[],0,0,0,0,["x",APW(AKA)],It,0,U,[],0,0,0,0,["x",APW(Y_)],AAS,0,It,[],0,0,0,0,["x",APW(AIs)],YW,0,JL,[],0,0,0,0,["x",APW(AC7)],X5,0,IZ,[],0,0,0,0,["x",APW(AF1)],XM,0,U,[],0,0,0,0,["x",APW(AHw)],X1,0,U,[],0,0,0,0,["x",APW(AMn)],YL,0,U,[],0,0,
0,0,["x",APW(AFo)],YS,0,U,[],0,0,0,0,["x",APW(ABV)],XN,0,B,[],4,0,0,0,0,Xl,0,B,[],4,3,0,0,0,Md,0,B,[],0,3,0,0,0,AAi,0,B,[],0,3,0,0,0,Ys,0,B,[],4,3,0,0,0,Xv,0,B,[DH],0,3,0,0,0,Og,0,B,[],1,3,0,0,0,Ti,0,B,[DH],0,0,0,0,["cY",APX(AE7)],Uk,0,Q,[],0,0,0,0,["i",APX(AE9)],Ui,0,Q,[],0,0,0,0,["i",APX(ACj)],Nn,0,Q,[],0,0,0,0,["i",APX(AHn),"eh",APW(AFS)],Nu,0,Q,[],0,0,0,0,["i",APX(AKo)],Ns,0,Q,[],0,0,0,0,["i",APX(AKU)],Nt,0,Q,[],0,0,0,0,["i",APX(AHP)],Nx,0,Q,[],0,0,0,0,["i",APX(AEM)],Ny,0,Q,[],0,0,0,0,["i",APX(ABN)],Nv,
0,Q,[],0,0,0,0,["i",APX(AFW)],Nw,0,Q,[],0,0,0,0,["i",APX(AHR)]]);
$rt_metadata([Nz,0,Q,[],0,0,0,0,["i",APX(AL2)],NA,0,Q,[],0,0,0,0,["i",APX(AEi)],Nm,0,Q,[],0,0,0,0,["i",APX(ANA)],NZ,0,Q,[],0,0,0,0,["i",APX(AF0)],Nk,0,Q,[],0,0,0,0,["i",APX(AEh)],Nl,0,Q,[],0,0,0,0,["i",APX(AFD)],Nq,0,Q,[],0,0,0,0,["i",APX(AGT)],Nj,0,Q,[],0,0,0,0,["i",APX(ALE)],No,0,Q,[],0,0,0,0,["i",APX(ADk)],Np,0,Q,[],0,0,0,0,["i",APX(AJL)],Fl,0,Cg,[],12,0,0,Rn,0,Wa,0,B,[Bc],0,3,0,0,0,KF,0,B,[],3,3,0,0,0,Rj,0,B,[KF],4,3,0,0,0,ZW,0,B,[],0,3,0,0,0,W0,0,B,[],0,3,0,0,0,RZ,0,B,[],32,0,0,AOY,0,VI,0,B,[Bc],0,3,0,
0,0,Rs,0,B,[Bc],0,3,0,0,["m",APX(AKc)],U9,0,B,[Ei],0,3,0,0,0,EB,0,B,[],0,3,0,0,0,I7,0,Ec,[],1,0,0,0,["d6",APX(ABQ),"kG",APX(AG2)],Tz,0,I7,[],0,0,0,0,["d6",APX(ABQ),"kG",APX(AG2)],Ke,0,Du,[],1,0,0,0,0,Tx,0,Ke,[],0,0,0,0,0,KI,0,D8,[J8],1,0,0,0,["d6",APX(ABQ),"hq",APW(AEr),"lu",APX(AIc),"kG",APX(AG7)],Ty,0,KI,[],0,0,0,0,["d6",APX(ABQ),"kF",APX(AIh),"cq",APW(AHs),"bQ",APW(AET),"dB",APW(ACH)],Tv,0,B,[Ev],0,0,0,0,["b$",APW(ACq),"bJ",APW(AJw),"j9",APW(AKP)],Od,0,B,[Ev],3,3,0,0,0,Tw,0,B,[Od],0,0,0,0,0,V_,0,B,[Gn],0,
3,0,0,0,LX,0,FM,[],0,0,0,0,["b3",APZ(AFs),"b7",AP0(ANq),"eU",APW(AD4)],La,0,Bq,[],0,3,0,0,0,Qe,0,B,[Bc],0,3,0,0,["m",APX(AD1)],Gj,0,B,[BG],1,3,0,0,0,XK,0,Gj,[],1,3,0,0,0,AAe,0,Gj,[],1,3,0,0,0,Xj,0,B,[],3,3,0,0,0,PI,0,B,[BQ],0,3,0,0,["R",APX(AB0)],QU,0,B,[Bc],0,3,0,0,["m",APX(AH9)],QT,0,B,[Bc],0,3,0,0,["m",APX(AJ0)],OP,0,B,[Bc],0,3,0,0,0,OO,0,B,[Bc],0,3,0,0,0,Q9,0,B,[Bc],0,3,0,0,0,Sg,0,B,[Bc],0,3,0,0,0,SY,0,Ec,[],0,0,0,0,["d6",APX(ABQ),"kG",APX(AG2)],N5,0,En,[],0,0,0,0,["d6",APX(ABQ),"kG",APX(AG2)],Tg,0,B,[KF],
0,0,0,0,0,Vf,0,B,[BQ],0,3,0,0,["R",APX(AED)],Ng,0,B,[Bc],0,3,0,0,["m",APX(AEm)]]);
$rt_metadata([LJ,0,B,[],0,3,0,0,0,P0,0,B,[],0,3,0,0,0,R_,0,B,[Bh],0,3,0,0,["t",APW(ALn)],MH,0,B,[Bc],0,3,0,0,["m",APX(AIr)],TZ,0,B,[Bc],0,3,0,0,["m",APX(AFQ)],B8,0,Cg,[],12,3,0,XZ,0,Dm,0,B,[],3,3,0,AIl,0,CC,0,B,[],3,3,0,AAC,0,Ca,0,Cg,[],12,3,0,ZL,0,C_,0,B,[],3,3,0,ACC,0,SM,0,Ew,[Ev],0,0,0,0,0,P2,0,Ew,[Ev],0,0,0,0,0,RE,0,Q,[],0,0,0,0,["i",APX(AL9)],LI,0,Q,[],0,0,0,0,["i",APX(AC5)],QH,0,Q,[],0,0,0,0,["i",APX(ACN)],QG,0,Q,[],0,0,0,0,["i",APX(AFn)],US,0,Q,[],0,0,0,0,["i",APX(AGJ)],NP,0,Q,[],0,0,0,0,["i",APX(AMb)],M6,
0,Q,[],0,0,0,0,["i",APX(AJg)],PE,0,Q,[],0,0,0,0,["i",APX(AKt)],LB,0,Q,[],0,0,0,0,["i",APX(ANa)],LH,0,Q,[],0,0,0,0,["i",APX(AEy)],MG,0,Q,[],0,0,0,0,["i",APX(AMi)],Ob,0,Q,[],0,0,0,0,["i",APX(AH2)],Oj,0,Q,[],0,0,0,0,["i",APX(AJ1)],R3,0,Q,[],0,0,0,0,["i",APX(AL3)],Rk,0,Q,[],0,0,0,0,["i",APX(AMQ)],LP,0,Q,[],0,0,0,0,["i",APX(AEo)],K3,0,Q,[],0,0,0,0,["i",APX(AJj)],Qy,0,K3,[],0,0,0,0,["i",APX(ALc)],SS,0,B,[],3,3,0,AOu,0,Q6,0,B,[Bc],0,3,0,0,["m",APX(AFG)],U_,0,B,[BQ],0,3,0,0,["R",APX(AFM)],Va,0,B,[BQ],0,3,0,0,["R",APX(ADj)],Mc,
0,B,[Bh],0,3,0,0,0,YD,0,B,[BG],1,3,0,0,0,SO,0,B,[BQ],0,3,0,0,["R",APX(AMS)],SK,0,B,[BQ],0,3,0,0,["R",APX(AHz)],LD,0,B,[Bh],0,3,0,0,["t",APW(AF_)],VJ,0,B,[],3,3,0,AO9,0,Qi,0,B,[HV],0,3,0,0,["qk",APW(AKZ)],AAc,0,B,[],3,3,0,0,0,YZ,0,B,[Ga],0,3,0,0,0,TW,0,B,[],0,3,0,0,0,ML,0,B,[Ei],0,3,0,0,["lM",APX(ACJ)],W9,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.K_=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","codeEdit","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","null",
"false","true","Either src or dest is null","no such element with id = codeEdit","FATAL: WebGL is not enabled in the browser","fileList","Illegal argument javaObject instanceof ","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","italic","normal","oblique","UTF-8","onPaste: item.type = ",", item.kind = ","pixel shader error: ","vertex shader error: ","----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  outColor = texture(sDiffuse, textureUV);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            // D2D and JsCanvas(alpha=true) comparison:\n            //    - rgb is different\n            //    - alpha is identical\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBgColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 textRGB = texture(sDiffuse, textureUV).rgb;\n  vec3 mixColor = mix(uBgColor.rgb, uColor.rgb, textRGB);\n  // if (dot(textRGB, textRGB) == 0.0) outColor = uBgColor; else\n  outColor = vec4(textRGB * 0.0 + mixColor * 1.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uBaseline;\nuniform vec4 uScaleHExp;\nin vec2 outScreenPos;\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  float sX = uScaleHExp.x, sY = uScaleHExp.y;\n  float H = uSc"
+"aleHExp.z;\n  float E = uScaleHExp.w;\n  float arg = (pt.x - uBaseline.x) * sX;\n  float sinA = sin(arg);\n  float vDist = abs(sinA * sY - uBaseline.y + pt.y);\n  float k = sqrt(1. + (1. - sinA * sinA) * sX * sX * sY * sY * 0.5);\n  float v = vDist / (H * k);\n  float alpha = pow(1. - clamp(v + .5, 0.0, 1.0), E);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","POS2","vPos","TEX2","vTex","BYTE","FLOAT","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ",
"Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#484A4A","#294436","#385570","#283541","request in progress ","fetch model ","respText1","clicked ","ns-resize","ew-resize","...","Usages of ","Consolas","  ","Set editor font to: ",", ascent+descent = ",", lineHeight = ",", caretHeight = ","topBase(font, lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","text","{","{}","(",
"()","[","[]","<","<>","\"","\"\"","\'","\'\'","java","JavaProxy.parseViewport","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","cpp","activity","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","parser >","open ...","Development >","trying to display with unknown screen size and dpr",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js","js",".activity","mermaid",
"/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncFullParseFile","asyncParseFile","asyncParseFirstLines","/Model::parseFullFile","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","/Model::iterativeParsing","asyncIterativeParsing","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","BIG_ENDIAN","LITTLE_ENDIAN","\\n",", ","The last char in dst ","Segoe UI","#BBBBBB","#BCBEC4",
"#313438","#214283","#2B2D30","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","#A9B7C6","#344134","#40332B","#323232","/","nwse-resize","nesw-resize","toolbar size is unknown","/Viewport parsed in ","Illegal language: ","Expected "," ints to write, but "," written",
"/Model::onFileIterativeParsed","Int","Iter","VP","Resolve","Rep","No definition or usages","/First lines parsed in ","/File structure parsed in ","/Resolved in ","readClipboardText error: ","navigator.clipboard is undefined","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","#606366","#2B2B2B","#A4A3A3","#616161","#303C47","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","Verdana",
"Current Version: ","Last Parsed Version: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement",
"LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer",
"Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols",
"Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes",
"KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B",
"HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","DEF","DECL"," ints to read, but "," read","Unknown scope type: ","writeClipboardText error: ","Unexpected type: ","Unexpected ref node type: ","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","#3C3F41","#4B6EAF","#787878","#EBECF0",
"#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808"]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;B.prototype.toString=function(){return $rt_ustr(ADD(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var ATK=Long_add;var Jj=Long_sub;var AIz=Long_mul;var ATL=Long_div;var ATM=Long_rem;var ATN=Long_or;var Wg=Long_and;var ATO=Long_xor;var ATP=Long_shl;var ATQ=Long_shr;var APn=Long_shru;var ATR=Long_compare;var AEN=Long_eq;var ATS=Long_ne;var AN8=Long_lt;var ATT=Long_le;var ATU=Long_gt;var AN5=Long_ge;var ATV=Long_not;var AOP=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AHG);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=O7.prototype;c.f=c.R;c=O9.prototype;c.f=c.R;c=Tr.prototype;c.f=c.R;c=WR.prototype;c.createEntityReference=c.AF;c.getElementById=c.Eh;c.createTextNode=c.DX;c.hasChildNodes=c.Cd;c.querySelectorAll=c.Ai;c.removeChild=c.F1;c.cloneNode=c.yy;c.createComment=c.HX;c.insertBefore=c.A$;c.getElementsByTagNameNS=c.Gn;c.hasAttributes=c.Dt;c.normalize=c.H9;c.hasChildNodesJS=c.HU;c.getElementsByTagName=c.G8;c.appendChild=c.y2;c.createAttributeNS=c.EJ;c.dispatchEvent=c.Hw;c.replaceChild=c.zv;c.createElementNS
=c.Bv;c.createCDATASection=c.Ga;c.querySelector=c.Dr;c.createElement=c.Fi;c.isSupported=c.Gb;c.importNode=c.Bt;c.removeEventListener=c.Bk;c.createAttribute=c.Hz;c.createDocumentFragment=c.xQ;c.createProcessingInstruction=c.Ay;c.addEventListener=c.Ff;Object.defineProperty(c,"nodeName",{get:c.y1});Object.defineProperty(c,"documentElement",{get:c.CX});Object.defineProperty(c,"childNodes",{get:c.FP});Object.defineProperty(c,"prefix",{get:c.BC,set:c.Ik});Object.defineProperty(c,"implementation",{get:c.GB});Object.defineProperty(c,
"textContent",{get:c.H7,set:c.DV});Object.defineProperty(c,"parentNode",{get:c.Ee});Object.defineProperty(c,"nextSibling",{get:c.CK});Object.defineProperty(c,"nodeType",{get:c.FC});Object.defineProperty(c,"doctype",{get:c.CB});Object.defineProperty(c,"localName",{get:c.G3});Object.defineProperty(c,"nodeValue",{get:c.Cg,set:c.HK});Object.defineProperty(c,"firstChild",{get:c.Hg});Object.defineProperty(c,"lastChild",{get:c.Fq});Object.defineProperty(c,"previousSibling",{get:c.yF});Object.defineProperty(c,"namespaceURI",
{get:c.z5});Object.defineProperty(c,"attributes",{get:c.BJ});Object.defineProperty(c,"ownerDocument",{get:c.Ad});c=XC.prototype;c.removeEventListener=c.Ak;c.dispatchEvent=c.Bh;c.addEventListener=c.ED;c=Mn.prototype;c.f=c.R;c=Mo.prototype;c.f=c.R;c=YU.prototype;c.get=c.G9;Object.defineProperty(c,"length",{get:c.Gs});c=MI.prototype;c.f=c.R;c=PR.prototype;c.f=c.R;c=PQ.prototype;c.f=c.R;c=PS.prototype;c.f=c.R;c=TD.prototype;c.onAnimationFrame=c.Dv;c=TC.prototype;c.f=c.Ht;c=TA.prototype;c.handleEvent=c.bU;c=Rc.prototype;c.f
=c.R;c=Uu.prototype;c.handleEvent=c.bU;c=Uv.prototype;c.handleEvent=c.bU;c=Uw.prototype;c.handleEvent=c.bU;c=Ux.prototype;c.handleEvent=c.bU;c=Uy.prototype;c.handleEvent=c.bU;c=Uz.prototype;c.handleEvent=c.bU;c=UA.prototype;c.handleEvent=c.bU;c=UB.prototype;c.handleEvent=c.bU;c=UC.prototype;c.handleEvent=c.bU;c=UD.prototype;c.handleEvent=c.bU;c=VX.prototype;c.handleEvent=c.bU;c=VY.prototype;c.handleEvent=c.bU;c=VZ.prototype;c.handleEvent=c.bU;c=V0.prototype;c.handleEvent=c.bU;c=SC.prototype;c.handleEvent=c.bU;c
=Vy.prototype;c.f=c.R;c=Vz.prototype;c.f=c.R;c=QL.prototype;c.handleEvent=c.bU;c=MB.prototype;c.accept=c.HL;c=OU.prototype;c.f=c.R;c=OS.prototype;c.f=c.R;c=OT.prototype;c.f=c.R;c=Vr.prototype;c.f=c.R;c=Vq.prototype;c.f=c.R;c=UN.prototype;c.f=c.R;c=UM.prototype;c.f=c.R;c=Vm.prototype;c.handleEvent=c.bU;c=O0.prototype;c.f=c.R;c=LG.prototype;c.onTimer=c.qk;c=Lp.prototype;c.onTimer=c.qk;c=Vp.prototype;c.f=c.R;c=U$.prototype;c.f=c.R;c=Sr.prototype;c.f=c.R;c=PI.prototype;c.f=c.R;c=Vf.prototype;c.f=c.R;c=U_.prototype;c.f
=c.R;c=Va.prototype;c.f=c.R;c=SO.prototype;c.f=c.R;c=SK.prototype;c.f=c.R;c=Qi.prototype;c.onTimer=c.qk;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);