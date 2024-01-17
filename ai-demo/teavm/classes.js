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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.fU=f;}
function $rt_cls(cls){return ZF(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Gy(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b5.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AKF(t);}
function $rt_throwableCause(t){return AKK(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(APK());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return APL(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(APM());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BF=$rt_compare;var APN=$rt_nullCheck;var E=$rt_cls;var O=$rt_createArray;var HF=$rt_isInstance;var APO=$rt_nativeThread;var APP=$rt_suspending;var APQ=$rt_resuming;var APR=$rt_invalidPointer;var C=$rt_s;var Bg=$rt_eraseClinit;var V=$rt_imul;var ES=$rt_wrapException;var APS=$rt_checkBounds;var APT=$rt_checkUpperBound;var APU=$rt_checkLowerBound;var APV=$rt_wrapFunction0;var APW=$rt_wrapFunction1;var APX=$rt_wrapFunction2;var APY=$rt_wrapFunction3;var APZ=$rt_wrapFunction4;var F=$rt_classWithoutFields;var G
=$rt_createArrayFromData;var AOq=$rt_createCharArrayFromData;var AP0=$rt_createByteArrayFromData;var AP1=$rt_createShortArrayFromData;var Fu=$rt_createIntArrayFromData;var AP2=$rt_createBooleanArrayFromData;var AP3=$rt_createFloatArrayFromData;var AP4=$rt_createDoubleArrayFromData;var ADT=$rt_createLongArrayFromData;var APJ=$rt_createBooleanArray;var Eb=$rt_createByteArray;var AP5=$rt_createShortArray;var B2=$rt_createCharArray;var Bu=$rt_createIntArray;var AP6=$rt_createLongArray;var AB$=$rt_createFloatArray;var AP7
=$rt_createDoubleArray;var BF=$rt_compare;var AP8=$rt_castToClass;var AP9=$rt_castToInterface;var AP$=Long_toNumber;var BH=Long_fromInt;var AP_=Long_fromNumber;var Dg=Long_create;var AAr=Long_ZERO;var AQa=Long_hi;var X5=Long_lo;
function B(){this.$id$=0;}
function AQb(){var a=new B();TT(a);return a;}
function TT(a){}
function Bw(a){return ZF(a.constructor);}
function AH3(a,b){return a!==b?0:1;}
function ADH(a){var b,c,d,e,f,g,h,i,j;b=H4(a);if(!b)c=C(0);else{d=(((32-ME(b)|0)+4|0)-1|0)/4|0;e=B2(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Gq((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Gy(e);}j=new R;T(j);L(L(j,C(1)),c);return S(j);}
function H4(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AHp(a){var b,c,d;if(!HF(a,DF)&&a.constructor.$meta.item===null){b=new TH;W(b);J(b);}b=ACf(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var Fb=F();
var AQc=null;var AQd=null;var AQe=null;var AQf=null;var AQg=null;function AHL(b){var c,d,e,f;Yr();AAJ();WQ();ABP();Y_();Z8();X8();Zk();AAL();WL();Ys();ABb();AA6();WN();Z1();ZQ();ZS();YT();Yb();Xa();ABz();Yu();AAb();Zr();c=(W2()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))XF(C(2),C(3));else{d=$rt_globals.fetch("teavm/worker.js");e=new Tu;e=d.then(Bi(e,"f"));c=new Pa;f=new Pc;e.then(Bi(c,"f"),Bi(f,"f"));}}
function Uu(b){Sf(AQc.cx,b);Th(AQd);}
function Yr(){AQe=null;AQf=FQ();AQg=FQ();}
var LX=F(0);
var Lt=F(0);
function Us(){var a=this;B.call(a);a.jv=null;a.fk=null;}
function ZF(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Us;c.fk=b;d=c;b.classObject=d;}return c;}
function G0(a){return a.fk.$meta.primitive?1:0;}
function Hg(a){return ZF(a.fk.$meta.item);}
var XL=F();
function Bi(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Eq(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Xr=F();
function ACf(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ZJ(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ZJ(d[e],c))return 1;e=e+1|0;}return 0;}
function FM(){var a=this;B.call(a);a.k2=null;a.pZ=null;a.kV=0;a.lH=0;}
function AQh(){var a=new FM();W(a);return a;}
function AQi(a){var b=new FM();Br(b,a);return b;}
function W(a){a.kV=1;a.lH=1;}
function Br(a,b){a.kV=1;a.lH=1;a.k2=b;}
function AFl(a){return a;}
function AKF(a){return a.k2;}
function AKK(a){var b;b=a.pZ;if(b===a)b=null;return b;}
var DE=F(FM);
function AQj(){var a=new DE();Z4(a);return a;}
function Z4(a){W(a);}
var Bq=F(DE);
function APL(a){var b=new Bq();AMi(b,a);return b;}
function AMi(a,b){Br(a,b);}
var YW=F(Bq);
var Cu=F(0);
var Ck=F(0);
var HR=F(0);
function Bv(){var a=this;B.call(a);a.b5=null;a.g9=0;}
var AQk=null;var AQl=null;var AQm=null;function FN(){FN=Bg(Bv);ALY();}
function AF7(){var a=new Bv();WH(a);return a;}
function Gy(a){var b=new Bv();If(b,a);return b;}
function DL(a,b,c){var d=new Bv();Ld(d,a,b,c);return d;}
function WH(a){FN();a.b5=AQk;}
function If(a,b){FN();Ld(a,b,0,b.data.length);}
function Ld(a,b,c,d){var e;FN();e=B2(d);a.b5=e;C6(b,c,e,0,d);}
function K8(b){var c;FN();c=AF7();c.b5=b;return c;}
function I(a,b){var c,d;if(b>=0){c=a.b5.data;if(b<c.length)return c[b];}d=new Gm;W(d);J(d);}
function H(a){return a.b5.data.length;}
function DT(a){return a.b5.data.length?0:1;}
function OS(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=H(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){C6(a.b5,b,d,e,c);return;}}g=new BT;W(g);J(g);}
function Sz(a,b,c){var d,e,f;if((c+H(b)|0)>H(a))return 0;d=0;while(d<H(b)){e=I(b,d);f=c+1|0;if(e!=I(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Jo(a,b){if(a===b)return 1;return Sz(a,b,0);}
function DA(a,b){var c,d,e,f;if(a===b)return 1;if(H(b)>H(a))return 0;c=0;d=H(a)-H(b)|0;while(d<H(a)){e=I(a,d);f=c+1|0;if(e!=I(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Hp(a,b,c){var d,e,f,g,h;d=Ba(0,c);if(b<65536){e=b&65535;while(true){f=a.b5.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Jy(b);h=KD(b);while(true){f=a.b5.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function GD(a,b,c){var d,e,f,g,h;d=Be(c,H(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b5.data[d]==e)break;d=d+(-1)|0;}return d;}f=Jy(b);g=KD(b);while(true){if(d<1)return (-1);h=a.b5.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function OB(a,b,c){var d,e,f;d=Ba(0,c);e=H(a)-H(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=H(b))break a;if(I(a,d+f|0)!=I(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AJl(a,b){return OB(a,b,0);}
function OO(a,b,c){var d,e;d=Be(c,H(a)-H(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=H(b))break a;if(I(a,d+e|0)!=I(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function YC(a,b){return OO(a,b,H(a));}
function B9(a,b,c){var d,e;d=BF(b,c);if(d>0){e=new BT;W(e);J(e);}if(!d){FN();return AQl;}if(!b&&c==H(a))return a;return DL(a.b5,b,c-b|0);}
function DS(a,b){return B9(a,b,H(a));}
function O1(a,b,c){return B9(a,b,c);}
function GV(a,b){var c,d,e,f,g,h;if(DT(b))return a;if(DT(a))return b;c=B2(H(a)+H(b)|0);d=c.data;e=0;f=0;while(f<H(a)){g=e+1|0;d[e]=I(a,f);f=f+1|0;e=g;}g=0;while(g<H(b)){h=e+1|0;d[e]=I(b,g);g=g+1|0;e=h;}return K8(c);}
function Tg(a,b,c){var d,e,f,g;d=new R;T(d);e=H(a)-H(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=H(b)){L(d,c);f=f+(H(b)-1|0)|0;break a;}if(I(a,f+g|0)!=I(b,g))break;g=g+1|0;}B0(d,I(a,f));}f=f+1|0;}L(d,DS(a,f));return S(d);}
function QM(a){var b,c;b=0;c=H(a)-1|0;a:{while(b<=c){if(I(a,b)>32)break a;b=b+1|0;}}while(b<=c&&I(a,c)<=32){c=c+(-1)|0;}return B9(a,b,c+1|0);}
function ER(a){var b,c,d,e,f;b=a.b5.data;c=B2(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function DX(b){var c;FN();c=new R;T(c);return S(Bj(c,b));}
function B1(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(H(c)!=H(a))return 0;d=0;while(d<H(c)){if(I(a,d)!=I(c,d))return 0;d=d+1|0;}return 1;}
function JY(a){var b,c,d,e;a:{if(!a.g9){b=a.b5.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.g9=(31*a.g9|0)+e|0;d=d+1|0;}}}return a.g9;}
function KM(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new FS;Br(b,C(4));J(b);}AQn=1;d=new P5;d.jh=O(Cw,10);d.fC=(-1);d.ef=(-1);d.bg=(-1);e=new FV;e.ea=1;e.bu=b;e.S=B2(H(b)+2|0);C6(ER(b),0,e.S,0,H(b));f=e.S.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.qP=g;e.fn=0;EE(e);EE(e);d.g=e;d.c$=0;d.km=VQ(d,(-1),0,null);if(!CV(d.g)){b=new HK;h=d.g;Il(b,C(5),h.bu,h.cN);J(b);}if(d.m1)d.km.dS();b=Bz();h=new Ro;h.hH=(-1);h.jH=(-1);h.vq=d;h.s6=d.km;h.hX=a;h.hH=0;g=H(a);h.jH=g;e=new Tj;i=h.hH;j=d.fC;k=d.ef+1|0;l=d.bg+1|0;e.gO
=(-1);m=j+1|0;e.n1=m;e.di=Bu(m*2|0);f=Bu(l);e.iA=f;GG(f,(-1));if(k>0)e.kc=Bu(k);GG(e.di,(-1));VG(e,a,i,g);h.cf=e;e.eP=1;n=0;m=0;if(!H(a)){f=O(Bv,1);f.data[0]=C(5);}else{while(true){l=H(h.hX);if(!WV(h))l=h.jH;e=h.cf;if(e.dN>=0&&Yl(e)==1){e=h.cf;e.dN=H2(e);if(H2(h.cf)==Z7(h.cf)){e=h.cf;e.dN=e.dN+1|0;}g=h.cf.dN;g=g<=l&&LD(h,g)?1:0;}else g=LD(h,h.hH);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Bt(b,O1(a,m,ABr(h)));m=X_(h);n=g;}a:{Bt(b,O1(a,m,H(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(H(Bo(b,g)))break a;E6(b,
g);}}if(g<0)g=0;f=GW(b,O(Bv,g));}return f;}
function AFv(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Be(H(a),H(b));e=0;while(true){if(e>=d){c=H(a)-H(b)|0;break a;}c=I(a,e)-I(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function ALY(){AQk=B2(0);AQl=AF7();AQm=new RG;}
var FH=F(FM);
var Gs=F(FH);
var YB=F(Gs);
var Ea=F();
function Fz(){Ea.call(this);this.ba=0;}
var AQo=null;var AQp=null;function ALG(a){var b=new Fz();XZ(b,a);return b;}
function XZ(a,b){a.ba=b;}
function J8(b){return (Mi(APw(20),b,10)).eg();}
function Iy(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new CS;Br(b,C(6));J(b);}d=H(b);if(0==d){b=new CS;Br(b,C(7));J(b);}if(c>=2&&c<=36){a:{e=0;switch(I(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new CS;W(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=NY(I(b,f));if(i<0){j=new CS;k=B9(b,0,d);b=new R;T(b);L(L(b,C(8)),k);Br(j,S(b));J(j);}if(i>=c){j=new CS;l=B9(b,0,d);b=new R;T(b);L(L(Bj(L(b,C(9)),c),C(10)),l);Br(j,S(b));J(j);}g=V(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new CS;k=B9(b,0,d);b=new R;T(b);L(L(b,C(11)),k);Br(j,S(b));J(j);}b=new CS;j=new R;T(j);Bj(L(j,C(12)),c);Br(b,S(j));J(b);}
function Ct(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AQp===null){AQp=O(Fz,256);c=0;while(true){d=AQp.data;if(c>=d.length)break a;d[c]=ALG(c-128|0);c=c+1|0;}}}return AQp.data[b+128|0];}return ALG(b);}
function AMZ(a,b){if(a===b)return 1;return b instanceof Fz&&b.ba==a.ba?1:0;}
function ME(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Hr(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AHl(a,b){b=b;return BF(a.ba,b.ba);}
function AAJ(){AQo=E($rt_intcls());}
function FB(){var a=this;B.call(a);a.J=null;a.D=0;}
function AQq(){var a=new FB();T(a);return a;}
function APw(a){var b=new FB();Fn(b,a);return b;}
function T(a){Fn(a,16);}
function Fn(a,b){a.J=B2(b);}
function Mi(a,b,c){return YN(a,a.D,b,c);}
function YN(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Co(a,b,b+1|0);else{Co(a,b,b+2|0);f=a.J.data;g=b+1|0;f[b]=45;b=g;}a.J.data[b]=Gq(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=V(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Co(a,b,b+i|0);if(e)e=b;else{f=a.J.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.J.data;b=e+1|0;f[e]=Gq($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function Zz(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BF(c,0.0);if(!d){if(1.0/c===Infinity){Co(a,b,b+3|0);e=a.J.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Co(a,b,b+4|0);e=a.J.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.J.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.J.data;d=b+1|0;e[b]=45;}e=a.J.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AQr;Zs(c,f);d=f.jN;g=f.jp;h=f.nc;i=1;j=1;if(h)j=2;k=9;l=ALr(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Ba(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Co(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.J.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.J.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.J.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.J.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function ALr(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function B0(a,b){return a.lk(a.D,b);}
function Vx(a,b,c){Co(a,b,b+1|0);a.J.data[b]=c;return a;}
function ID(a,b){var c,d;c=a.J.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.J=Mx(a.J,d);}
function S(a){return DL(a.J,0,a.D);}
function Vi(a,b,c,d){return a.kP(a.D,b,c,d);}
function LR(a,b,c,d,e){var f,g,h,i;Co(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.J.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Hs(a,b){return a.jT(b,0,b.data.length);}
function Co(a,b,c){var d,e,f,g;d=a.D;e=d-b|0;a.g0((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.J.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.D=a.D+(c-b|0)|0;}
var G3=F(0);
var R=F(FB);
function APl(){var a=new R();AMK(a);return a;}
function AMK(a){T(a);}
function L(a,b){var c;c=a.D;if(b===null)b=C(13);K_(a,c,b);return a;}
function DJ(a,b){K_(a,a.D,b);return a;}
function Bj(a,b){Mi(a,b,10);return a;}
function FC(a,b){var c,d,e,f,g,h,i,j;c=a.D;d=1;if(AN8(b,AAr)){d=0;b=AOP(b);}a:{if(Hn(b,BH(10))<0){if(d)Co(a,c,c+1|0);else{Co(a,c,c+2|0);e=a.J.data;f=c+1|0;e[c]=45;c=f;}a.J.data[c]=Gq(X5(b),10);}else{g=1;h=BH(1);i=KA(BH(-1),BH(10));b:{while(true){j=AIE(h,BH(10));if(Hn(j,b)>0){j=h;break b;}g=g+1|0;if(Hn(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Co(a,c,c+g|0);if(d)f=c;else{e=a.J.data;f=c+1|0;e[c]=45;}while(true){if(AES(j,AAr))break a;e=a.J.data;c=f+1|0;e[f]=Gq(X5((KA(b,j))),10);b=WU(b,j);j=KA(j,BH(10));f=c;}}}return a;}
function PJ(a,b){Zz(a,a.D,b);return a;}
function Wx(a,b){B0(a,b);return a;}
function IC(a,b){K_(a,a.D,!b?C(14):C(15));return a;}
function ABf(a,b,c){var d,e,f,g,h,i;d=BF(b,c);if(d<=0){e=a.D;if(b<=e){if(d){f=e-c|0;a.D=e-(c-b|0)|0;g=0;while(g<f){h=a.J.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Gm;W(i);J(i);}
function Uc(a,b){var c,d,e,f;if(b>=0){c=a.D;if(b<c){c=c-1|0;a.D=c;while(b<c){d=a.J.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Gm;W(f);J(f);}
function AHi(a,b,c,d,e){LR(a,b,c,d,e);return a;}
function AEL(a,b,c,d){Vi(a,b,c,d);return a;}
function Xb(a){return a.D;}
function GK(a){return S(a);}
function AHn(a,b){ID(a,b);}
function AHP(a,b,c){Vx(a,b,c);return a;}
function K_(a,b,c){var d,e,f;if(b>=0&&b<=a.D){a:{if(c===null)c=C(13);else if(DT(c))break a;ID(a,a.D+H(c)|0);d=a.D-1|0;while(d>=b){a.J.data[d+H(c)|0]=a.J.data[d];d=d+(-1)|0;}a.D=a.D+H(c)|0;d=0;while(d<H(c)){e=a.J.data;f=b+1|0;e[b]=I(c,d);d=d+1|0;b=f;}}return a;}c=new Gm;W(c);J(c);}
var E9=F(Gs);
var ZM=F(E9);
function AQs(a){var b=new ZM();ADP(b,a);return b;}
function ADP(a,b){Br(a,b);}
var Yq=F(E9);
function AQt(a){var b=new Yq();AD4(b,a);return b;}
function AD4(a,b){Br(a,b);}
var R3=F(0);
var C3=F(0);
function CY(b,c){if(b!==null)b.eG();return c;}
var NS=F(0);
function HD(){var a=this;B.call(a);a.jd=0;a.k1=0;a.j$=0;}
var AQu=0;function K0(a){AQu=AQu-1|0;}
function Jx(a,b,c){return Ga(a,b)+c|0;}
function Qt(){var a=this;HD.call(a);a.g5=null;a.c2=null;a.l4=null;}
function Fg(a){var b,c,d;b=a.c2;c=a.k1;d=a.j$;b.clearRect(0.0,0.0,c,d);}
function QY(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.c2;d="center";c.textAlign=d;break a;case 2:c=a.c2;d="right";c.textAlign=d;break a;default:break a;}d=a.c2;c="left";d.textAlign=c;}}
function CF(a,b){L0(a,b.mA);}
function L0(a,b){var c;if(a.l4!==b){c=a.c2;a.l4=b;c.font=b;}}
function Ei(a,b,c,d){var e,f,g;e=a.c2;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Ga(a,b){var c;c=$rt_ustr(b);return a.c2.measureText(c).width;}
function ADg(){return {alpha:false};}
var WR=F();
var W3=F();
var BG=F(0);
function I3(b){return b;}
var BO=F(0);
var Pa=F();
function AG_(a,b){var c,d,e,f,g,h,i;c=new Mm;d=new Mn;e=$rt_globals.URL.createObjectURL(b);f=new $rt_globals.Array();g=0;while(g<3){h=new $rt_globals.Worker(e);i=new MJ;i.oL=h;i.oM=f;i.oN=3;i.oO=c;i.oH=d;i=Bi(i,"f");h.onmessage=i;g=g+1|0;}}
var Pc=F();
function AHq(a,b){KV(b);}
var J6=F();
var AQv=null;var AQw=null;function IL(){if(AQv===null)AQv=AIz(AQx,0);return AQv;}
function D2(){if(AQw===null)AQw=AIz(AQy,0);return AQw;}
function AOI(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Ka(b)&&(e+f|0)<=Ka(d)){a:{b:{if(b!==d){g=Hg(Bw(b));h=Hg(Bw(d));if(g!==null&&h!==null){if(g===h)break b;if(!G0(g)&&!G0(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fk;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ZJ(n.constructor,o)?1:0)){Jq(b,c,d,e,j);b=new HJ;W(b);J(b);}j=j+1|0;k=m;}Jq(b,c,d,e,f);return;}if(!G0(g))break a;if(G0(h))break b;else break a;}b=new HJ;W(b);J(b);}}Jq(b,c,d,
e,f);return;}b=new HJ;W(b);J(b);}b=new BT;W(b);J(b);}d=new FS;Br(d,C(16));J(d);}
function C6(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Ka(b)&&(e+f|0)<=Ka(d)){Jq(b,c,d,e,f);return;}b=new BT;W(b);J(b);}
function Jq(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function D1(){return Long_fromNumber(new Date().getTime());}
var AAt=F();
var JN=F(0);
function Dv(){var a=this;B.call(a);a.jr=null;a.jB=null;}
var DF=F(0);
function Jm(){var a=this;Dv.call(a);a.cq=0;a.bR=null;a.co=0;a.uz=0.0;a.j1=0;}
function FQ(){var a=new Jm();OE(a);return a;}
function AF4(a,b){return O(FT,b);}
function OE(a){var b;b=ABj(16);a.cq=0;a.bR=O(FT,b);a.uz=0.75;S0(a);}
function ABj(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Eg(a){var b;if(a.cq>0){a.cq=0;b=a.bR;Xv(b,0,b.data.length,null);a.co=a.co+1|0;}}
function S0(a){a.j1=a.bR.data.length*a.uz|0;}
function Iz(a,b){return RK(a,b)===null?0:1;}
function Tc(a){var b;b=new S1;b.p_=a;return b;}
function B7(a,b){var c;c=RK(a,b);if(c===null)return null;return c.cw;}
function RK(a,b){var c,d;if(b===null)c=Q2(a);else{d=b.k6();c=Pi(a,b,d&(a.bR.data.length-1|0),d);}return c;}
function Pi(a,b,c,d){var e;e=a.bR.data[c];while(e!==null&&!(e.ia==d&&WY(b,e.ch))){e=e.cm;}return e;}
function Q2(a){var b;b=a.bR.data[0];while(b!==null&&b.ch!==null){b=b.cm;}return b;}
function IR(a){var b;if(a.jr===null){b=new N_;b.f5=a;a.jr=b;}return a.jr;}
function Dn(a,b,c){var d,e,f,g;if(b===null){d=Q2(a);if(d===null){a.co=a.co+1|0;d=SQ(a,null,0,0);e=a.cq+1|0;a.cq=e;if(e>a.j1)S9(a);}}else{e=b.k6();f=e&(a.bR.data.length-1|0);d=Pi(a,b,f,e);if(d===null){a.co=a.co+1|0;d=SQ(a,b,f,e);e=a.cq+1|0;a.cq=e;if(e>a.j1)S9(a);}}g=d.cw;d.cw=c;return g;}
function SQ(a,b,c,d){var e,f;e=new FT;V4(e,b,null);e.ia=d;f=a.bR.data;e.cm=f[c];f[c]=e;return e;}
function Yo(a,b){var c,d,e,f,g,h,i,j;c=ABj(!b?1:b<<1);d=O(FT,c);e=d.data;f=0;b=c-1|0;while(true){g=a.bR.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.ia&b;j=h.cm;h.cm=e[i];e[i]=h;h=j;}f=f+1|0;}a.bR=d;S0(a);}
function S9(a){Yo(a,a.bR.data.length);}
function WY(b,c){return b!==c&&!b.bp(c)?0:1;}
var Ya=F();
function XF(b,c){var d,e,f;d=(C2()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(C2()).getElementById($rt_ustr(b)).appendChild(d);}
function W2(){return (C2()).createElement("canvas");}
function KV(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AJn(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ABO=F();
var Ht=F(0);
var Tu=F();
function AIR(a,b){return b.blob();}
var Gl=F(0);
var RG=F();
var BT=F(Bq);
var Zv=F();
function Ka(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AQz());}return b.data.length;}
function Z6(b,c){if(b===null){b=new FS;W(b);J(b);}if(b===E($rt_voidcls())){b=new BI;W(b);J(b);}if(c>=0)return AMr(b.fk,c);b=new Wg;W(b);J(b);}
function AMr(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var FS=F(Bq);
var HJ=F(Bq);
function CL(){B.call(this);this.jo=0;}
var AQA=null;var AQB=null;var AQC=null;var AQD=null;var AQE=null;var AQF=null;var AQG=null;var AQH=null;var AQI=null;var AQJ=null;function AM7(a){var b=new CL();Yi(b,a);return b;}
function Yi(a,b){a.jo=b;}
function MK(b){var c,d;c=AQF.data;if(b>=c.length)return AM7(b);d=c[b];if(d===null){d=AM7(b);AQF.data[b]=d;}return d;}
function U8(b){var c,d;c=new Bv;d=B2(1);d.data[0]=b;If(c,d);return c;}
function KR(b){return b>=65536&&b<=1114111?1:0;}
function Cm(b){return (b&64512)!=55296?0:1;}
function CI(b){return (b&64512)!=56320?0:1;}
function Vl(b){return !Cm(b)&&!CI(b)?0:1;}
function GA(b,c){return Cm(b)&&CI(c)?1:0;}
function D4(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Jy(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function KD(b){return (56320|b&1023)&65535;}
function Ex(b){return FR(b)&65535;}
function FR(b){if(AQD===null){if(AQG===null)AQG=Z0();AQD=Yy((AQG.value!==null?$rt_str(AQG.value):null));}return Ru(AQD,b);}
function D6(b){return FP(b)&65535;}
function FP(b){if(AQC===null){if(AQH===null)AQH=AAK();AQC=Yy((AQH.value!==null?$rt_str(AQH.value):null));}return Ru(AQC,b);}
function Ru(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BF(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function SX(b,c){if(c>=2&&c<=36){b=NY(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function NY(b){var c,d,e,f,g,h,i,j,k,l;if(AQB===null){if(AQI===null)AQI=YE();c=(AQI.value!==null?$rt_str(AQI.value):null);d=AKL(ER(c));e=IK(d);f=Bu(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+LY(d)|0;j=j+LY(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AQB=f;}g=AQB.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BF(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Gq(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function FJ(b){var c;if(b<65536){c=B2(1);c.data[0]=b&65535;return c;}return AOq([Jy(b),KD(b)]);}
function Ce(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Vl(b&65535))return 19;if(AQE===null){if(AQJ===null)AQJ=ABE();d=(AQJ.value!==null?$rt_str(AQJ.value):null);e=O(Mb,16384);f=e.data;g=Eb(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<H(d)){m=Jp(I(d,l));if(m==64){l=l+1|0;m=Jp(I(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|V(c,Jp(I(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Jp(I(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AFr(k,k+i|0,KL(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AFr(k,k+i|0,KL(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AQE=CW(e,j);}e=AQE.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.qD)o=p+1|0;else{c=d.oI;if(b>=c)return d.o1.data[b-c|0];c=p-1|0;}}return 0;}
function Iw(b){a:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function FE(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ce(b)!=16?0:1;}
function Oq(b){switch(Ce(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function P8(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Oq(b);}return 1;}
function WQ(){AQA=E($rt_charcls());AQF=O(CL,128);}
function Z0(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AAK(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function YE(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ABE(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Ln=F(0);
var Rt=F(0);
var DV=F(0);
var WW=F();
function Wz(b){return (C2()).getElementById($rt_ustr(b));}
function C2(){return $rt_globals.window.document;}
function AIN(a){return a.C4();}
function ALl(a,b){return a.FA($rt_str(b));}
function AK8(a,b){a.Bt($rt_str(b));}
function AEo(a,b){return a.Ag($rt_str(b));}
function ACe(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AEE(a){return a.FD();}
function ALf(a,b,c){return a.D7($rt_str(b),$rt_str(c));}
function AG7(a,b,c,d){a.v_($rt_str(b),Eq(c,"handleEvent"),d?1:0);}
function AC5(a){return a.B7();}
function AJK(a){return !!a.F9();}
function ALX(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AIl(a){return a.BT();}
function AGF(a,b){a.DV($rt_str(b));}
function AIP(a){return !!a.A9();}
function ANo(a){return a.FN();}
function AHF(a){return $rt_ustr(a.xZ());}
function ACY(a,b){return a.Cl(b?1:0);}
function AM0(a){return a.F8();}
function AGC(a,b,c){return a.GD($rt_str(b),$rt_str(c));}
function AId(a,b,c){return a.A7(b,c?1:0);}
function AMu(a,b,c){return !!a.E8($rt_str(b),$rt_str(c));}
function ACh(a){return a.DK();}
function AGo(a){return $rt_ustr(a.Hk());}
function AEQ(a,b){return !!a.wz(b);}
function AFH(a,b){return a.Id($rt_str(b));}
function AGT(a,b,c){return a.C1($rt_str(b),$rt_str(c));}
function AHJ(a){return a.yT();}
function AC8(a,b){return a.FJ($rt_str(b));}
function AFG(a){return $rt_ustr(a.yf());}
function AJ7(a){a.A2();}
function AB3(a,b){return a.GI($rt_str(b));}
function ALN(a,b){return a.BF($rt_str(b));}
function ADy(a,b){return a.A1($rt_str(b));}
function ALQ(a){return $rt_ustr(a.y$());}
function ADI(a,b,c){return a.C9(b,c);}
function AJW(a,b){return a.xY(b);}
function AKA(a){return a.EL();}
function AJg(a,b,c){a.vJ($rt_str(b),Eq(c,"handleEvent"));}
function AIZ(a,b,c){return a.y_(b,c);}
function ALK(a){return !!a.E4();}
function AM5(a,b){return a.CV($rt_str(b));}
function AI2(a,b,c,d){a.u5($rt_str(b),Eq(c,"handleEvent"),d?1:0);}
function AEH(a){return a.EQ();}
function AD2(a,b,c){return a.Cj($rt_str(b),$rt_str(c));}
function ACH(a){return $rt_ustr(a.zv());}
function AMV(a){return a.yD();}
function AJf(a){return a.yY();}
function ACF(a){return a.E9();}
function AJh(a,b,c){a.wv($rt_str(b),Eq(c,"handleEvent"));}
function AEw(a,b){return a.G7(b);}
function AFY(a,b){a.yk($rt_str(b));}
function AKH(a){return $rt_ustr(a.x5());}
var Oh=F(0);
var Qn=F(0);
var Qb=F(0);
var R0=F(0);
var Vk=F(0);
var SZ=F(0);
var XH=F();
function AJk(a,b,c){a.wv($rt_str(b),Eq(c,"handleEvent"));}
function AHk(a,b,c){a.vJ($rt_str(b),Eq(c,"handleEvent"));}
function AGq(a,b,c,d){a.u5($rt_str(b),Eq(c,"handleEvent"),d?1:0);}
function ADc(a,b){return !!a.wz(b);}
function AEU(a,b,c,d){a.v_($rt_str(b),Eq(c,"handleEvent"),d?1:0);}
var BI=F(Bq);
var Gm=F(BT);
var Gx=F(0);
function FK(){var a=this;B.call(a);a.ch=null;a.cw=null;}
function AQK(a,b){var c=new FK();V4(c,a,b);return c;}
function V4(a,b,c){a.ch=b;a.cw=c;}
function AEu(a,b){var c,d;if(a===b)return 1;if(!HF(b,Gx))return 0;a:{b:{c:{d:{c=b;b=a.ch;if(b!==null){if(!b.bp(c.ch))break c;else break d;}if(c.ch!==null)break c;}b=a.cw;if(b!==null){if(!b.bp(c.cw))break c;else break b;}if(c.cw===null)break b;}d=0;break a;}d=1;}return d;}
function FT(){var a=this;FK.call(a);a.ia=0;a.cm=null;}
var Mm=F();
function AFA(a,b){var c,d,e,f,g,h,i,j;c=$rt_globals.fetch("fileList.txt");d=new PY;c=c.then(Bi(d,"f"));d=new PX;e=new PZ;c.then(Bi(d,"f"),Bi(e,"f"));if((C2()).getElementById("codeEdit")===null)CT(D2(),C(17));else{f=new Ry;g=new TG;g.or=f;f.q1=g;g=new TE;g.ug=f;f.lG=g;d=new TF;d.qU=f;f.tb=new $rt_globals.ResizeObserver(Bi(d,"f"));g=new TD;g.nN=f;f.mq=g;f.hI=1;g=new Rc;d=new SS;ABd(d);g.iT=d;d=new N3;e=null;TT(d);d.w7=e;d.iI=AQL;g.o7=d;BU(d);e=new Rg;e.rf=d;g.t9=e;g.lg=b;h=b.length;i=0;while(i<h){d=b[i];j=new Rh;j.qb
=g;j.qa=i;e=Bi(j,"f");d.onmessage=e;d=b[i];e=YS();d.postMessage(e);i=i+1|0;}g.gc=0;g.j2=Bu(h);g.jz=Bu(h);f.lo=g;f.mi=(C2()).getElementById("codeEdit");g=W2();c=0;g.tabIndex=c;b=g.style;b.setProperty("width","100%");b.setProperty("height","100%");b.setProperty("outline","none");f.dj=g;f.mi.appendChild(g);b=f.dj;g=AJn(!!0,!!0,!!1,!!1);d=b.getContext("webgl2",g);if(d===null)XF(C(2),C(18));else{f.kQ=AOr(f.dj,f.lG);b=new Tx;c=f.lG;AAI(b,d,new SG,1,2.25,0.625);b.w5=new SF;b.wp=c;f.fw=b;AKh(f.tb,f.dj,ACj());g=$rt_globals.window;c
=f.mq;g.addEventListener("resize",Bi(c,"handleEvent"));c=new Lo;b=f.fw;g=f.kQ.b6;c.iW=b;c.cj=g;c.kI=f;b=APf(c);AQc=b;f.eU=b;RP(f);}AQd=f;Th(f);}}
var Mn=F();
function AIf(a,b){KV(b);}
var Y0=F();
var Y6=F();
var AAM=F();
function Es(b){return $rt_str(b);}
var TN=F(0);
var YX=F();
function AF_(a,b){return a.zX(b);}
function AH0(a){return a.E6();}
function MJ(){var a=this;B.call(a);a.oL=null;a.oM=null;a.oN=0;a.oO=null;a.oH=null;}
function AJV(a,b){var c,d,e,f,g;c=a.oL;d=a.oM;e=a.oN;f=a.oO;g=a.oH;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var Py=F(0);
var NH=F(0);
function Ry(){var a=this;B.call(a);a.q1=null;a.lG=null;a.mi=null;a.dj=null;a.tb=null;a.mq=null;a.kQ=null;a.fw=null;a.hI=0;a.v4=0;a.qx=null;a.eU=null;a.lo=null;}
function Th(a){a.dj.focus();}
function RP(a){a.v4=$rt_globals.requestAnimationFrame(Bi(a.q1,"onAnimationFrame"));}
function GE(a){a.hI=1;}
function RN(a,b,c){var d,e;a.kQ.dg=Cd(b,c);d=a.dj;e=b;d.width=e;d=a.dj;e=c;d.height=e;d=a.fw;Bn(d.ds,b,c);e=d.br;d=d.ds;b=d.b;c=d.a;e.viewport(0,0,b,c);Lr(a.eU,a.fw.ds,Jr(a));I$(a.eU);}
function Mw(a){return $rt_globals.performance.now()/1000.0;}
function Jr(a){return $rt_globals.window.devicePixelRatio;}
function Up(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ABm(b,0);else{c=new Vv;d=$rt_globals.window.showOpenFilePicker();e=new Vu;e.pq=b;e.pp=c;d.then(Bi(e,"f"),Bi(c,"f"));}}
function En(a,b,c,d){var e,f,g,h;e=a.lo;f=e.gc;if(f>0){g=e.j2.data;f=f-1|0;e.gc=f;J7(e,b,c,d,g[f]);}else{h=e.iT;e=new UR;e.rS=b;e.sD=c;e.rz=d;b=new Sy;b.nr=e;c=h.iS;b.ss=c;if(c===null)h.jS=b;else c.rB=b;h.iS=b;h.bJ=h.bJ+1|0;h.he=h.he+1|0;}}
function UK(a,b,c,d,e){var f,g;f=a.lo;if(c>=f.lg.length)c=0;g=f.jz.data;g[c]=g[c]+1|0;J7(f,b,d,e,c);}
function ABK(b){var c;c=new Vj;c.m$=b;return c;}
var Eh=F(0);
var YL=F();
var Bh=F(0);
var YM=F();
var X0=F();
function YS(){return "ping";}
function ABC(b){return b===YS()?1:0;}
var PY=F();
function ACx(a,b){return b.text();}
var PX=F();
function ANt(a,b){var c,d,e,f,g,h,i,j;c=Wz(C(19));d=(ZP(b)).hv.data;e=d.length;f=0;while(f<e){g=d[f];if(!DT(g)){h=(C2()).createElement("button");i="fileButton";h.className=i;b=$rt_ustr(g);h.innerText=b;c.appendChild(h);j=new QS;j.pc=g;h.addEventListener("click",Bi(j,"handleEvent"));}f=f+1|0;}}
var PZ=F();
function AMv(a,b){KV(b);}
var Qh=F(0);
function TG(){B.call(this);this.or=null;}
function AGB(a,b){var c,d,e,f,g,h;c=b;b=a.or;d=b.eU;c=c/1000.0;d=d.cx;e=d.d.f;if(Sm(e)&&c-e.rp>0.03125?1:0){f=d.pf;g=d.d.f.b3;if(f!=g){d.pf=g;Qm(d);}}RJ(d);g=Ss((d.bj+d.xy|0)-d.vi|0,IQ(d));f=d.bj==g?0:1;if(f)E7(d,g);a:{e=d.cy;g=e.fq;if(c>e.gm)while(true){h=e.gm+e.jj;e.gm=h;e.fq=e.fq?0:1;if(c>h)continue;else break a;}}g=e.fq==g?0:1;g=!g&&!f&&!d.ut?0:1;if(!(!g&&!b.hI)){d=b.fw.ds;if(V(d.b,d.a)){b.hI=0;I$(b.eU);}}RP(b);}
function TE(){B.call(this);this.ug=null;}
function CU(a){GE(a.ug);}
var Pg=F(0);
function TF(){B.call(this);this.qU=null;}
function AE0(a,b,c){var d,e,f,g;c=a.qU;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dj){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Jr(c);RN(c,Gv(f.width*g),Gv(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];RN(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AA1=F();
function ACj(){return {box:'device-pixel-content-box'};}
function AKh(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var B$=F(0);
function TD(){B.call(this);this.nN=null;}
function AJ5(a,b){b=a.nN;Lr(b.eU,b.fw.ds,Jr(b));I$(b.eU);}
function Rc(){var a=this;B.call(a);a.iT=null;a.lg=null;a.o7=null;a.j2=null;a.jz=null;a.mO=0;a.gc=0;a.t9=null;}
function J7(a,b,c,d,e){var f,g,h,i,j,k;d=d.data;f=a.mO+1|0;a.mO=f;g=a.o7;h=Ct(f);g.g3=KT(g,g.g3,h);h=S6(g,h);Lp(h,b);Lp(h,b);g.iN=g.iN+1|0;b=a.lg[e];i=d.length;g=new $rt_globals.Array(i+2|0);h=f;0;g[0]=h;c=$rt_ustr(c);1;g[1]=c;h=new $rt_globals.Array();j=0;while(j<i){c=d[j];if(c instanceof Bv)k=$rt_ustr(c);else if(HF(c,$rt_arraycls($rt_bytecls())))k=c.data.buffer;else if(HF(c,$rt_arraycls($rt_charcls())))k=c.data.buffer;else if(HF(c,$rt_arraycls($rt_intcls())))k=c.data.buffer;else{if(!(c instanceof JP)){b=new BI;c
=Bw(c);if(c.jv===null)c.jv=$rt_str(c.fk.$meta.name);h=c.jv;c=new R;T(c);L(L(c,C(20)),h);Br(b,S(c));J(b);}c=c;k=c.hf;if(k===null)k=c.hR;}f=j+2|0;f;g[f]=k;if(k instanceof $rt_globals.ArrayBuffer?1:0)h.push(k);j=j+1|0;}b.postMessage(g,h);}
var K1=F(0);
var RS=F(0);
var ST=F(0);
var FG=F();
function Ir(){FG.call(this);this.uI=null;}
function Yn(){var a=this;Ir.call(a);a.wK=0;a.j3=0;a.hT=null;a.jq=null;a.sc=null;}
function AIz(a,b){var c=new Yn();AL0(c,a,b);return c;}
function AL0(a,b,c){a.uI=b;b=new R;T(b);a.hT=b;a.jq=B2(32);a.wK=c;AFw();a.sc=AQM;}
function RY(a,b,c,d){var e,$$je;e=a.uI;if(e===null)a.j3=1;if(!(a.j3?0:1))return;a:{try{e.ji(b,c,d);break a;}catch($$e){$$je=ES($$e);if($$je instanceof SB){}else{throw $$e;}}a.j3=1;}}
function M9(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$$je;e=b.data;d=d-c|0;f=new Qc;g=e.length;d=c+d|0;T4(f,g);f.cl=c;f.dY=d;f.s8=0;f.xG=0;f.qc=b;e=Eb(Ba(16,Be(g,1024)));d=e.data.length;h=new U1;i=0+d|0;T4(h,d);AGS();h.we=AQN;h.pD=0;h.rr=e;h.cl=0;h.dY=i;h.wh=0;h.mh=0;j=a.sc;k=new Om;b=Eb(1);l=b.data;l[0]=63;AMh();m=AQO;k.k0=m;k.j_=m;c=l.length;if(c&&c>=k.lN){k.u4=j;k.pi=b.fU();k.wE=2.0;k.lN=4.0;k.oC=B2(512);k.nk=Eb(512);j=AQP;if(j===null){m=new BI;Br(m,C(21));J(m);}k.k0=j;k.j_=j;while(k.hO!=3){k.hO=2;a:{while(true)
{try{j=W7(k,f,h);}catch($$e){$$je=ES($$e);if($$je instanceof Bq){j=$$je;m=new Se;m.kV=1;m.lH=1;m.pZ=j;J(m);}else{throw $$e;}}if(j.gS?0:1){c=Ey(f);if(c<=0)break a;j=J2(c);}else if(KH(j))break;m=!UZ(j)?k.k0:k.j_;b:{if(m!==AQP){if(m===AQQ)break b;else break a;}c=Ey(h);b=k.pi;d=b.data.length;if(c<d){j=AQR;break a;}U2(h,b,0,d);}n=f.cl;c=j.gS!=2?0:1;if(!(!c&&!UZ(j)?0:1)){j=new DR;W(j);J(j);}Ri(f,n+j.no|0);}}n=KH(j);RY(a,e,0,h.cl);M7(h);if(!n){while(true){d=k.hO;if(d!=2&&d!=4){j=new Df;W(j);J(j);}j=AQS;if(j===j)k.hO
=3;n=KH(j);RY(a,e,0,h.cl);M7(h);if(!n)break;}return;}}j=new Df;W(j);J(j);}m=new BI;Br(m,C(22));J(m);}
function CT(a,b){var c,d,e,f,g,h,i,j;B0(DJ(a.hT,b),10);b=a.hT;c=b.D;d=a.jq;if(c>d.data.length)d=B2(c);e=0;f=0;if(e>c){b=new BT;Br(b,C(23));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.J.data;j=e+1|0;g[f]=i[e];f=h;e=j;}M9(a,d,0,c);a.hT.D=0;}
function Fy(){FG.call(this);this.ws=null;}
function V_(a){a.ws=Eb(1);}
var Jv=F(Fy);
var AQy=null;function AFh(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function ABP(){var b;b=new Jv;V_(b);AQy=b;}
var Ud=F(0);
function ABV(a,b){var c;c=a.bS();while(c.ca()){b.m(c.bL());}}
var Fr=F(0);
function Tb(a){var b,c;b=new Q_;c=new O9;c.oG=a;b.si=c;return b;}
function AG9(a,b){var c,d;c=a.bS();d=0;while(c.ca()){if(b.cW(c.bL())){c.j6();d=1;}}return d;}
var El=F();
function ABd(a){}
function DO(a){return a.cr()?0:1;}
function GW(a,b){var c,d,e,f,g,h;c=b.data;d=a.j;e=c.length;if(e<d)b=Z6(Hg(Bw(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BL(a);while(BM(f)){g=b.data;h=e+1|0;g[e]=BP(f);e=h;}return b;}
function AKZ(a,b){var c;c=a.bS();while(c.ca()){if(BB(c.bL(),b)){c.j6();return 1;}}return 0;}
function FW(a,b){var c,d;c=0;d=b.bS();while(d.ca()){if(!a.q_(d.bL()))continue;c=1;}return c;}
var Ju=F(0);
var Ib=F(0);
function D8(){El.call(this);this.bJ=0;}
function AKl(a,b){a.lF(a.cr(),b);return 1;}
function BL(a){var b;b=new Mr;b.f4=a;b.ln=a.bJ;b.hQ=a.cr();b.fy=(-1);return b;}
function AJE(a,b,c){var d,e;if(b>=0&&b<=a.cr()){if(c.dz())return 0;d=c.bS();while(d.ca()){e=b+1|0;a.lF(b,d.bL());b=e;}return 1;}c=new BI;W(c);J(c);}
function ALH(a,b,c){c=new DR;W(c);J(c);}
function I8(a,b){var c,d;c=a.cr();d=0;while(true){if(d>=c)return (-1);if(BB(b,a.kB(d)))break;d=d+1|0;}return d;}
function AIB(a,b){var c,d;if(!HF(b,Ib))return 0;c=b;if(a.j!=c.j)return 0;d=0;while(d<c.j){if(!BB(Bo(a,d),Bo(c,d)))return 0;d=d+1|0;}return 1;}
var KO=F(D8);
var Lu=F(0);
var VH=F(0);
function SS(){var a=this;KO.call(a);a.jS=null;a.iS=null;a.he=0;}
var VE=F(0);
var LW=F(0);
function N3(){var a=this;Dv.call(a);a.g3=null;a.iI=null;a.w7=null;a.iN=0;}
function AA$(a,b){var c;c=S6(a,b);if(c===null)return null;a.g3=I0(a,a.g3,b);a.iN=a.iN+1|0;return c.hL;}
function S6(a,b){var c,d;c=a.g3;while(true){if(c===null)return null;d=Ix(a.iI,b,c.h9);if(!d)break;c=d>=0?c.bP:c.bx;}return c;}
function KT(a,b,c){var d,e;if(b===null){b=new It;d=null;b.h9=c;b.hL=d;b.eZ=1;b.e$=1;return b;}e=Ix(a.iI,c,b.h9);if(!e)return b;if(e>=0)b.bP=KT(a,b.bP,c);else b.bx=KT(a,b.bx,c);DW(b);return IJ(b);}
function I0(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Ix(a.iI,c,b.h9);if(d<0)b.bx=I0(a,b.bx,c);else if(d>0)b.bP=I0(a,b.bP,c);else{e=b.bP;if(e===null)return b.bx;f=b.bx;g=O(It,e.eZ).data;h=0;while(true){b=e.bx;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bP;while(h>0){h=h+(-1)|0;j=g[h];j.bx=b;DW(j);b=IJ(j);}e.bP=b;e.bx=f;DW(e);b=e;}DW(b);return IJ(b);}
var AAW=F();
function BB(b,c){if(b===c)return 1;return b!==null?b.bp(c):c!==null?0:1;}
function BU(b){if(b!==null)return b;b=new FS;Br(b,C(5));J(b);}
function Rg(){B.call(this);this.rf=null;}
function Rh(){var a=this;B.call(a);a.qb=null;a.qa=0;}
function ACg(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.qb;d=a.qa;ABC(b.data);e=c.jz.data;f=e[d];if(f>0)e[d]=f-1|0;else{g=c.iT;h=g.jS;if(h===null)i=null;else{i=h.rB;g.jS=i;if(i!==null)i.ss=null;else g.iS=null;g.he=g.he-1|0;g.bJ=g.bJ+1|0;i=h.nr;}if(i!==null)J7(c,i.rS,i.sD,i.rz,d);else{e=c.j2.data;j=c.gc;c.gc=j+1|0;e[j]=d;}}c=c.t9;b=b.data;if(!ABC(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BI;W(b);J(b);}if(b.length<1){b=new BI;Z4(b);J(b);}g=Ct(b[0]);h=AA$(c.rf,g);e=O(B,b.length-1|0);k=e.data;f=0;j=k.length;while
(f<j){l=f+1|0;g=b[l];k[f]=(typeof g==='string'?1:0)?Es(I3(g)):(g instanceof $rt_globals.ArrayBuffer?1:0)?AOf(I3(g)):(g instanceof $rt_globals.File?1:0)?ZC(null,I3(g)):!(g instanceof $rt_globals.FileSystemFileHandle?1:0)?null:ZC(I3(g),null);f=l;}h.m(e);}}
function XU(){var a=this;B.call(a);a.b6=null;a.gn=null;a.wl=null;a.dg=null;}
function AOr(a,b){var c=new XU();ALC(c,a,b);return c;}
function ALC(a,b,c){var d,e,f,g;a.dg=null;a.gn=b;d=new ON;d.fs=Cq(O(Ep,0));d.uy=Cq(O(Ep,0));d.eN=Cq(O(Fs,0));d.id=Cq(O(Hf,0));d.jE=Cq(O(Le,0));d.lq=Cq(O(Jl,0));d.jV=Cq(O(IM,0));d.lx=Cq(O(Bh,0));d.jm=Cq(O(Bh,0));d.cL=c;a.b6=d;e=$rt_globals.window;f=O(C3,14);g=f.data;d=new Ux;d.mV=a;g[0]=Cz(a,b,C(24),d);d=new Uy;d.rw=a;g[1]=Cz(a,b,C(25),d);d=new Uz;d.of=a;g[2]=Cz(a,b,C(26),d);d=new UA;d.uc=a;g[3]=Cz(a,b,C(27),d);d=new UB;d.qN=a;g[4]=Cz(a,b,C(28),d);d=new UC;d.nm=a;g[5]=Cz(a,b,C(29),d);d=new UD;d.ur=a;g[6]=Cz(a,
b,C(30),d);d=new UE;d.qW=a;g[7]=Cz(a,b,C(31),d);d=new UF;d.nz=a;g[8]=Cz(a,b,C(32),d);d=new UG;d.ts=a;g[9]=Cz(a,b,C(33),d);d=new V0;d.sU=a;g[10]=Cz(a,b,C(34),d);d=new V1;d.rM=a;e.addEventListener("paste",Bi(d,"handleEvent"),!!1);g[11]=UY(a,e,C(35),d);d=new V2;d.l1=a;g[12]=Cz(a,e,C(36),d);d=new V3;d.tP=a;g[13]=Cz(a,e,C(37),d);c=new Pl;c.vD=f;a.wl=c;e=new VC;e.o9=b;b.onpointerdown=Bi(e,"f");e=new VD;e.nT=b;b.onpointerup=Bi(e,"f");}
function LT(){return (C2()).activeElement;}
function Cz(a,b,c,d){b.addEventListener($rt_ustr(c),Bi(d,"handleEvent"));return UY(a,b,c,d);}
function UY(a,b,c,d){var e;e=new Pb;e.ve=b;e.vg=c;e.vf=d;return e;}
function Sd(a,b){var c;c=new S8;c.ub=b;return c;}
function D_(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gn.getBoundingClientRect();e=Cd(Gv((b.clientX-d.left)*c),Gv((b.clientY-d.top)*c));f=new Bp;g=a.dg;f.b=g.b;f.a=g.a;d=new Ll;SD(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.u=e;d.uS=f;return d;}
function V6(a,b,c){var d,e,f,g;d=new NX;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;SD(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.ja=0;d.dK=e;d.bT=f;d.sh=c;d.wt=g;return d;}
function Dl(a,b){b.stopPropagation();b.preventDefault();}
function JW(){var a=this;B.call(a);a.qu=null;a.da=null;a.br=null;a.kz=0;a.sq=null;a.vI=0;a.wO=0;a.iP=null;a.xk=null;a.w4=null;a.wU=null;a.sl=null;a.mX=null;a.wV=null;a.uV=null;a.gW=null;a.xb=null;a.ou=null;a.ds=null;a.tZ=null;a.kH=0;a.i5=0;a.ll=0;a.k8=0;a.hw=0;a.lh=null;a.lr=0.0;a.kS=0.0;}
function AAI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.ds=new Bp;a.kH=0;a.lh=new UI;a.qu=c;a.kz=d;g=$rt_str(b.getParameter(7938));h=new R;T(h);L(L(h,C(38)),g);$rt_globals.console.info($rt_ustr(S(h)));a.br=b;a.da=Mp(c,4,4,1);i=AB$(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B2(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Pd;GH();c=AQT;m.dV=b;m.fO=c;m.q9=j.length/c.jQ|0;m.tS
=l.length;n=b.createBuffer();m.mm=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.ud=null;n=b.createBuffer();m.tz=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.ou=m;a.wO=Jo(g,C(39));c=new Pe;c.dx=b;a.sq=c;a.lr=e;a.kS=f;d=b.getParameter(3379);a.vI=d;c=new R;T(c);Bj(L(c,C(40)),d);$rt_globals.console.info($rt_ustr(S(c)));k=O(CB,9);i=k.data;c=AOn(b);a.iP=c;i[0]=c;c=ANU(b,C(41));a.xk=c;i[1]=c;c=new PS;F8(c,b,C(42),
C(43),AQT);a.w4=c;i[2]=c;c=APa(b);a.wU=c;i[3]=c;c=new M0;VO(c,b,C(44),C(45));a.sl=c;i[4]=c;c=APr(b);a.mX=c;i[5]=c;c=APj(b);a.wV=c;i[6]=c;c=AO7(b);a.uV=c;i[7]=c;c=AO8(b);a.gW=c;i[8]=c;a.xb=k;ABl(b,C(46));}
function EX(a,b,c,d){return Mp(a.qu,b,c,d);}
function DP(a,b){var c;if(b==a.i5)return b;if(!b)a.br.disable(3042);else{a.br.enable(3042);a.br.blendFuncSeparate(770,771,1,1);}c=a.i5;a.i5=b;return c;}
function QB(a,b,c){S$(a,b.b,b.a,c);}
function S$(a,b,c,d){var e,f;e=d.b;f=d.a;a.k8=1;a.hw=1;d=a.lh;d.qG=b;d.qI=c;d.qF=e;d.qE=f;SE(a);}
function Kt(a){a.k8=0;a.hw=0;SE(a);}
function SE(a){var b,c,d,e,f,g;b=a.ll;c=a.k8;if(b!=c){a.ll=c;if(!c)a.br.disable(3089);else a.br.enable(3089);}if(a.ll&&a.hw){a.hw=0;d=a.br;e=a.lh;b=e.qG;c=a.ds.a-e.qI|0;f=e.qE;c=c-f|0;g=e.qF;d.scissor(b,c,g,f);}}
function JL(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.ou;c=a.kH;d=b.fO.rI;e=b.dV;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dV;h=b.mm;e.bindBuffer(34962,h);i=b.fO.lM.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dV;m=k.gu;n=k.eK;o=b.fO.jQ*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.eK|0;j=j+1|0;}a:{e=b.ud;if(e!==null){c=0;b.dV.bindBuffer(34962,e);i=b.fO.qs.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dV;j=e.gu;p=e.eK;m=e.oD;n=b.fO.o4;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.eK|0;g=g+1|0;}}}q=b.tz;if(q===null){c=b.q9;if(c>0)b.dV.drawArrays(4,0,c);}else{b.dV.bindBuffer(34963,q);k=b.dV;g=b.tS;k.drawElements(4,g,5123,0);}a.kH=d;}
function BC(a,b,c,d,e){JT(a,a.iP);K2(a.iP,a.br,b,c,d,a.ds);d=a.iP;Hm(a.br,d.tk,e);JL(a);}
function AA3(a,b,c,d,e,f,g,h){var i,j;JT(a,a.gW);K2(a.gW,a.br,b,c,d,a.ds);d=a.gW;i=a.br;j=d.q7;i.uniform2f(j,e,f);Hm(i,d.ot,g);d=a.gW;Hm(a.br,d.mp,h);JL(a);}
function Ev(a,b,c,d,e,f,g,h,i){var j;j=!i?a.sl:a.mX;JT(a,j);ABc(j,a.br,!i?a.kS:a.lr);K2(j,a.br,b,c,d,a.ds);ZW(j,a.br,f);WB(j,a.br,f,e);Zx(j,a.br,g,h);JL(a);}
function Gt(a){var b,c;b=new Is;c=a.sq;b.e2=new Bp;b.d8=c;b.eA=c.dx.createTexture();AQU=AQU+1|0;return b;}
function JT(a,b){var c,d;if(b!==a.tZ){c=a.br;d=b.bn;c.useProgram(d);a.tZ=b;}}
function Tx(){var a=this;JW.call(a);a.wp=null;a.w5=null;}
function F5(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;a:{f=a.da;switch(e){case 1:break;case 2:g='italic ';break a;default:g='';break a;}g='oblique ';}h=g+d+' '+c+'px '+$rt_ustr(b);L0(f,h);g=f.c2.measureText("W");i=g.fontBoundingBoxAscent;j=g.fontBoundingBoxDescent;k=g.width;l=Ga(f,C(47));m=Ga(f,C(48));g=new JQ;f=h;g.lp=b;g.vo=c;n=c|0;if(n!==c){b=new R;T(b);PJ(L(b,C(49)),c);$rt_globals.console.info($rt_ustr(S(b)));}g.ow=n;g.vw=d;g.vY=e;g.d0=i;g.dC=j;g.vn=l;g.ld=k;g.mA=f;g.qn=Dy(i);g.wX=Dy(g.dC);d=m*32.0|0;n=l*32.0|
0;o=k*32.0|0;d=n==d&&n==o?1:0;b:{g.vs=d;switch(e){case 1:break;case 2:b=C(50);break b;default:b=C(51);break b;}b=C(52);}g.vc=b;return g;}
function Kz(){B.call(this);this.pm=null;}
function Ig(){var a=this;B.call(a);a.uR=null;a.vL=null;}
function AAk(b){var c,d;if(DT(b))J(Yk(b));if(!AAm(I(b,0)))J(Yk(b));c=1;while(c<H(b)){a:{d=I(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AAm(d))break a;else J(Yk(b));}}c=c+1|0;}}
function AAm(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var K6=F(Ig);
var AQM=null;function AFw(){AFw=Bg(K6);AE$();}
function AE$(){var b,c,d,e,f;b=new K6;AFw();c=O(Bv,0);d=c.data;AAk(C(53));e=d.length;f=0;while(f<e){AAk(d[f]);f=f+1|0;}b.uR=C(53);b.vL=c.fU();AQM=b;}
function ON(){var a=this;B.call(a);a.fs=null;a.uy=null;a.eN=null;a.id=null;a.jE=null;a.lq=null;a.jV=null;a.lx=null;a.jm=null;a.cL=null;a.gI=null;a.nK=0;}
function Sl(a,b){var c,d,e,f;CU(a.cL);c=(Cc(!b.sh?a.uy:a.fs)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].cW(b);if(f)break;if(b.ja)break;e=e+1|0;}return f;}
function PT(a,b,c){var d,e,f;CU(a.cL);d=(Cc(a.lq)).data;e=d.length;f=0;while(f<e){if(Kl(d[f].n3,b,c))return 1;f=f+1|0;}return 0;}
function Ux(){B.call(this);this.mV=null;}
function AJG(a,b){var c;c=a.mV;if(Sl(c.b6,V6(c,b,1)))Dl(c,b);}
function Uy(){B.call(this);this.rw=null;}
function AJQ(a,b){var c;c=a.rw;if(Sl(c.b6,V6(c,b,0)))Dl(c,b);}
function Uz(){B.call(this);this.of=null;}
function AIj(a,b){var c,d,e,f,g,h,i;c=a.of;if(c.dg!==null){a:{b:{d=D_(c,b);e=c.b6;CU(e.cL);f=e.gI;if(f!==null)f.m(d);else{g=(Cc(e.eN)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].gF(d))break a;i=i+1|0;}}}}Dl(c,b);}}
function UA(){B.call(this);this.uc=null;}
function AHM(a,b){var c,d,e,f,g,h;c=a.uc;b.button;if(c.dg!==null)a:{d=D_(c,b);c=c.b6;e=b.button;CU(c.cL);if(c.gI===null){f=(Cc(c.eN)).data;g=f.length;h=0;while(h<g){b=f[h].gz(d,e);if(b!==null){c.gI=b;c.nK=e;break a;}h=h+1|0;}}}}
function UB(){B.call(this);this.qN=null;}
function AH8(a,b){var c,d,e,f,g,h,i;c=a.qN;b.button;if(c.dg!==null){d=D_(c,b);e=c.b6;f=b.button;CU(e.cL);if(f==e.nK&&e.gI!==null)e.gI=null;g=(Cc(e.eN)).data;h=g.length;i=0;a:{while(i<h){if(g[i].gD(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Dl(c,b);}}
function UC(){B.call(this);this.nm=null;}
function AKd(a,b){var c,d,e,f,g,h,i,j,k;c=a.nm;if(c.dg!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.b6;f=D_(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;CU(e.cL);i=(Cc(e.id)).data;j=i.length;k=0;b:{while(k<j){if(i[k].gC(f,d,h))break b;k=k+1|0;}}Dl(c,b);}}
function UD(){B.call(this);this.ur=null;}
function AGp(a,b){var c,d,e,f,g,h,i,j;c=a.ur;if(c.dg!==null){d=D_(c,b);e=c.b6;f=b.button;g=b.detail;CU(e.cL);h=(Cc(e.eN)).data;i=h.length;j=0;a:{while(j<i){if(h[j].gg(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Dl(c,b);}}
function UE(){B.call(this);this.qW=null;}
function ANi(a,b){var c,d,e,f,g,h,i;c=a.qW;if(c.dg!==null){d=D_(c,b);e=c.b6;CU(e.cL);f=(Cc(e.jE)).data;g=f.length;h=0;a:{while(h<g){if(Zf(f[h],d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Dl(c,b);}}
function UF(){B.call(this);this.nz=null;}
function AFF(a,b){var c,d,e;b=a.nz.b6;c=(Cc(b.jm)).data;d=c.length;e=0;while(e<d){c[e].t();e=e+1|0;}CU(b.cL);}
function UG(){B.call(this);this.ts=null;}
function AK$(a,b){var c,d,e;b=a.ts.b6;c=(Cc(b.lx)).data;d=c.length;e=0;while(e<d){c[e].t();e=e+1|0;}CU(b.cL);}
function V0(){B.call(this);this.sU=null;}
function AMX(a,b){var c;c=a.sU;if(c.dg!==null)D_(c,b);}
function V1(){B.call(this);this.rM=null;}
function AHZ(a,b){var c,d,e,f,g,h,i,j,k;c=a.rM;if(LT()===c.gn){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cc(c.b6.jV)).data;if(0>=h.length)i=null;else{j=h[0].o3.cx;BU(j);i=new M5;TT(i);i.m0=j;}if(i!==null){j=c.b6.cL;k=new MB;k.tF=i;k.tG=j;g.getAsString(Bi(k,"accept"));Dl(c,b);}}else{i=$rt_str(g.type);g=$rt_str(g.kind);j=new R;T(j);L(L(L(L(j,C(54)),i),C(55)),g);$rt_globals.console.info($rt_ustr(S(j)));}e=e+1|0;}}}
function V2(){B.call(this);this.l1=null;}
function AIn(a,b){var c;c=a.l1;if(LT()===c.gn&&PT(c.b6,Sd(c,b),0))Dl(c,b);}
function V3(){B.call(this);this.tP=null;}
function AJY(a,b){var c;c=a.tP;if(LT()===c.gn&&PT(c.b6,Sd(c,b),1))Dl(c,b);}
var Su=F(0);
var SG=F();
function Mp(a,b,c,d){var e,f,g,h,i;e=new Qt;e.jd=d;AQu=AQu+1|0;e.k1=b;e.j$=c;f=(C2()).createElement("canvas");e.g5=f;g=b;f.width=g;h=e.g5;f=c;h.height=f;if(!d)g=e.g5.getContext("2d");else{i=e.g5;h=ADg();g=i.getContext("2d",h);}e.c2=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var SF=F();
function AHb(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Lo(){var a=this;B.call(a);a.iW=null;a.cj=null;a.kI=null;}
var H9=F();
var AQL=null;function Ix(a,b,c){return b.iO(c);}
function Y_(){AQL=new H9;}
function ABe(){var a=this;B.call(a);a.gs=null;a.hW=null;a.gf=0;}
function Cq(a){var b=new ABe();AGl(b,a);return b;}
function AGl(a,b){a.gs=b;}
function Cs(a,b){var c,d,e;c=a.gf;d=a.gs;if(c==d.data.length)a.gs=CW(d,c+4|0);d=a.gs.data;e=a.gf;a.gf=e+1|0;d[e]=b;a.hW=null;}
function Cc(a){var b;b=a.hW;if(!(b!==null&&b.data.length==a.gf))a.hW=CW(a.gs,a.gf);return a.hW;}
var DH=F(0);
var Ep=F(0);
var Fs=F(0);
var Hf=F(0);
var Le=F(0);
var Jl=F(0);
var EU=F(0);
var IM=F(0);
function Pl(){B.call(this);this.vD=null;}
function Bp(){var a=this;B.call(a);a.b=0;a.a=0;}
function Cd(a,b){var c=new Bp();AEG(c,a,b);return c;}
function AEG(a,b,c){a.b=b;a.a=c;}
function Cp(a,b){a.b=b.b;a.a=b.a;}
function Bn(a,b,c){a.b=b;a.a=c;}
function AG2(a,b){var c;a:{b:{if(a!==b){if(Bw(b)!==Bw(a))break b;if(!Hl(a,b))break b;}c=1;break a;}c=0;}return c;}
function Hl(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function UI(){var a=this;B.call(a);a.qG=0;a.qI=0;a.qF=0;a.qE=0;}
var AAA=F();
var Xm=F(0);
function Pe(){B.call(this);this.dx=null;}
function Kn(){var a=this;B.call(a);a.bn=null;a.wY=null;}
function ZB(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(56):C(57);g=$rt_str(b.getShaderInfoLog(e));h=new R;T(h);L(L(h,f),g);g=S(h);b.deleteShader(e);CT(IL(),g);CT(D2(),C(58));CT(D2(),d);CT(D2(),C(58));b=new Bq;Br(b,g);J(b);}
function CB(){var a=this;Kn.call(a);a.ny=null;a.pb=null;a.kU=null;}
function AQV(a,b,c,d){var e=new CB();F8(e,a,b,c,d);return e;}
function F8(a,b,c,d,e){var f,g,h,i,j,k;a.wY=e;f=ZB(b,35633,c);d=ZB(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bn=g;h=e.rn.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bn;k=c.gu;c=c.pk;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bn;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ABl(b,C(59));a.kU=new Bp;c=a.bn;a.ny=b.getUniformLocation(c,"uResolution");c=a.bn;a.pb=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bq;c=new R;T(c);L(L(c,C(60)),d);Br(b,S(c));J(b);}
function X7(a,b,c){var d,e,f;if(!Hl(a.kU,c)){Cp(a.kU,c);d=a.ny;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function K2(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.pb;b.uniform4f(e,i,l,h,j);X7(a,b,f);}
function AAT(){CB.call(this);this.tk=null;}
function AOn(a){var b=new AAT();AGP(b,a);return b;}
function AGP(a,b){var c;GH();F8(a,b,C(42),C(61),AQT);c=a.bn;a.tk=b.getUniformLocation(c,"uColor");}
function D$(){CB.call(this);this.qL=null;}
function ANU(a,b){var c=new D$();Sg(c,a,b);return c;}
function AQW(a,b,c){var d=new D$();Sn(d,a,b,c);return d;}
function Sg(a,b,c){Sn(a,b,C(42),c);}
function Sn(a,b,c,d){GH();F8(a,b,c,d,AQT);c=a.bn;a.qL=b.getUniformLocation(c,"sDiffuse");}
function ZW(a,b,c){var d;d=a.qL;b.uniform1i(d,0);b.activeTexture(33984);c=c.eA;b.bindTexture(3553,c);}
var PS=F(CB);
function YQ(){D$.call(this);this.u1=null;}
function APa(a){var b=new YQ();AJF(b,a);return b;}
function AJF(a,b){var c;Sg(a,b,C(62));c=a.bn;a.u1=b.getUniformLocation(c,"uContrast");}
function Fo(){var a=this;D$.call(a);a.op=null;a.pz=null;a.q3=null;a.rY=null;a.l8=0.0;}
function AQX(a,b,c){var d=new Fo();VO(d,a,b,c);return d;}
function VO(a,b,c,d){Sn(a,b,c,d);c=a.bn;a.op=b.getUniformLocation(c,"uTexTransform");c=a.bn;a.pz=b.getUniformLocation(c,"uColor");c=a.bn;a.q3=b.getUniformLocation(c,"uBgColor");c=a.bn;a.rY=b.getUniformLocation(c,"uTextPow");}
function ABc(a,b,c){var d;if(a.l8!==c){a.l8=c;d=a.rY;b.uniform2f(d,c,0.0);}}
function Zx(a,b,c,d){Hm(b,a.pz,c);Hm(b,a.q3,d);}
function WB(a,b,c,d){var e,f,g,h,i,j;c=c.e2;e=c.b;f=c.a;g=d.bk;h=e;g=g/h;i=d.bD;j=f;i=i/j;h=d.Y/h;j=d.bV/j;c=a.op;b.uniform4f(c,g,i,h,j);}
var M0=F(Fo);
var ABu=F(Fo);
function APr(a){var b=new ABu();AE9(b,a);return b;}
function AE9(a,b){VO(a,b,C(44),C(63));}
function XJ(){var a=this;D$.call(a);a.xE=null;a.xD=null;a.v1=null;}
function APj(a){var b=new XJ();AE_(b,a);return b;}
function AE_(a,b){var c,d;Sg(a,b,C(64));c=a.bn;a.xE=b.getUniformLocation(c,"uColorB");d=a.bn;a.xD=b.getUniformLocation(d,"uColorF");d=a.bn;a.v1=b.getUniformLocation(d,"uContrast");}
function ZO(){var a=this;CB.call(a);a.vd=null;a.uO=null;a.uN=null;}
function AO7(a){var b=new ZO();AFb(b,a);return b;}
function AFb(a,b){var c;GH();F8(a,b,C(42),C(65),AQT);c=a.bn;a.vd=b.getUniformLocation(c,"uColor");c=a.bn;a.uO=b.getUniformLocation(c,"uPoints1");c=a.bn;a.uN=b.getUniformLocation(c,"uPoints2");}
function Xi(){var a=this;CB.call(a);a.mp=null;a.q7=null;a.ot=null;}
function AO8(a){var b=new Xi();ADA(b,a);return b;}
function ADA(a,b){var c;GH();F8(a,b,C(42),C(66),AQT);c=a.bn;a.mp=b.getUniformLocation(c,"uColor");c=a.bn;a.q7=b.getUniformLocation(c,"uBaseline");c=a.bn;a.ot=b.getUniformLocation(c,"uScaleHExp");}
var QP=F(0);
var ABL=F(0);
function Hm(b,c,d){var e,f,g,h;e=d.bk;f=d.bD;g=d.Y;h=d.bV;b.uniform4f(c,e,f,g,h);}
function ABl(b,c){var d,e;d=b.getError();if(d){b=IL();e=new R;T(e);Bj(L(e,c),d);CT(b,S(e));}}
function Pb(){var a=this;B.call(a);a.ve=null;a.vg=null;a.vf=null;}
function Pd(){var a=this;B.call(a);a.dV=null;a.fO=null;a.mm=null;a.ud=null;a.tz=null;a.q9=0;a.tS=0;}
function Cl(){var a=this;B.call(a);a.u8=null;a.fM=0;}
function Do(a,b,c){a.u8=b;a.fM=c;}
function F0(){var a=this;Cl.call(a);a.rn=null;a.lM=null;a.qs=null;a.jQ=0;a.o4=0;a.rI=0;}
var AQT=null;var AQY=null;function GH(){GH=Bg(F0);AGM();}
function AGM(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new F0;c=O(DB,2);d=c.data;AMe();d[0]=AQZ;d[1]=AQ0;GH();Do(b,C(67),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.lb.fM){case 0:f=f+l.eK|0;h=h+1|0;break a;case 1:e=e+l.eK|0;g=g+1|0;break a;default:}}i=i|1<<l.gu;k=k+1|0;}b.rn=c;b.jQ=e;b.o4=f;b.rI=i;c=O(DB,g);m=c.data;b.lM=c;c=O(DB,h);n=c.data;b.qs=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.lb.fM){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}AQT
=b;c=O(F0,1);c.data[0]=b;AQY=c;}
var J4=F(Fy);
var AQx=null;function AG5(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Z8(){var b;b=new J4;V_(b);AQx=b;}
function DB(){var a=this;Cl.call(a);a.pk=null;a.lb=null;a.eK=0;a.oD=0;a.gu=0;}
var AQZ=null;var AQ0=null;var AQ1=null;function AMe(){AMe=Bg(DB);AF8();}
function AOD(a,b,c,d,e,f,g){var h=new DB();T8(h,a,b,c,d,e,f,g);return h;}
function T8(a,b,c,d,e,f,g,h){AMe();Do(a,b,c);a.pk=d;a.lb=e;a.eK=f;a.oD=g;a.gu=h;}
function AF8(){var b;b=new DB;AIg();T8(b,C(68),0,C(69),AQ2,2,0,0);AQZ=b;b=AOD(C(70),1,C(71),AQ2,2,0,1);AQ0=b;AQ1=G(DB,[AQZ,b]);}
function AAs(){BI.call(this);this.u7=null;}
function Yk(a){var b=new AAs();ALx(b,a);return b;}
function ALx(a,b){W(a);a.u7=b;}
var TH=F(DE);
var XG=F();
var F4=F(Cl);
var AQ3=null;var AQ2=null;var AQ4=null;function AIg(){AIg=Bg(F4);AEK();}
function AE6(a,b){var c=new F4();AAE(c,a,b);return c;}
function AAE(a,b,c){AIg();Do(a,b,c);}
function AEK(){var b;AQ3=AE6(C(72),0);b=AE6(C(73),1);AQ2=b;AQ4=G(F4,[AQ3,b]);}
var K4=F(0);
function VC(){B.call(this);this.o9=null;}
function AKM(a,b){a.o9.setPointerCapture(b.pointerId);}
function VD(){B.call(this);this.nT=null;}
function ADz(a,b){a.nT.releasePointerCapture(b.pointerId);}
function Gc(){var a=this;B.call(a);a.tU=0;a.cl=0;a.dY=0;a.ie=0;}
function T4(a,b){a.ie=(-1);a.tU=b;a.dY=b;}
function Ey(a){return a.dY-a.cl|0;}
function E$(a){return a.cl>=a.dY?0:1;}
var Q$=F(0);
var JS=F(Gc);
function Ri(a,b){var c,d,e;if(b>=0&&b<=a.dY){a.cl=b;if(b<a.ie)a.ie=0;return a;}c=new BI;d=a.dY;e=new R;T(e);B0(Bj(L(Bj(L(e,C(74)),b),C(75)),d),93);Br(c,S(e));J(c);}
var YK=F();
function WX(b){return Math.log(b);}
function ABN(b,c){return AH6(b,c);}
function AH6(b,c){return Math.pow(b,c);}
function Be(b,c){if(b<c)c=b;return c;}
function Ba(b,c){if(b>c)c=b;return c;}
function AMx(b,c){return Math.max(b,c);}
function IP(){var a=this;Gc.call(a);a.pD=0;a.rr=null;a.we=null;}
function U2(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.mh){e=new VX;W(e);J(e);}if(Ey(a)<d){e=new PN;W(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BT;j=new R;T(j);Bj(L(Bj(L(j,C(76)),h),C(77)),g);Br(i,S(j));J(i);}if(d<0){e=new BT;i=new R;T(i);L(Bj(L(i,C(78)),d),C(79));Br(e,S(i));J(e);}h=a.cl;k=h+a.pD|0;l=0;while(l<d){b=a.rr.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.cl=h+d|0;return a;}}b=b.data;e=new BT;d=b.length;i=new R;T(i);B0(Bj(L(Bj(L(i,C(80)),c),C(75)),d),41);Br(e,
S(i));J(e);}
function M7(a){a.cl=0;a.dY=a.tU;a.ie=(-1);return a;}
function GQ(){B.call(this);this.xh=null;}
var AQQ=null;var AQP=null;var AQO=null;function AMh(){AMh=Bg(GQ);AH1();}
function ABh(a){var b=new GQ();AAh(b,a);return b;}
function AAh(a,b){AMh();a.xh=b;}
function AH1(){AQQ=ABh(C(81));AQP=ABh(C(82));AQO=ABh(C(83));}
function I9(){var a=this;Kz.call(a);a.mU=null;a.es=null;}
var NG=F(0);
var Oy=F(0);
function Pf(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new Hc;c=new HC;d=new HQ;AFm();IN(d,AQ5);K7(c,d,BA(AQ6),BA(AQ7),BA(AQ8),BA(AQ6),BA(AQ9),BA(AQ$),BA(AQ_),BA(ARa),BA(ARb),BA(ARc));Tf();e=(ARd.fU()).data;f=e.length;g=O(HY,f);h=g.data;i=0;while(i<f){h[i]=e[i].hd;i=i+1|0;}j=ZR(N(C(84)),N(C(85)),N(C(86)),N(C(87)));k=new Hh;l=new Hu;ACs();m=ARe;La(l,m,ARf,ARg,ARh,ARi,m);Kh(k,l,AAN(),ABp(N(C(88)),N(C(89)),N(C(90))),AAN(),Wm(1,0.17499999701976776),ARj,ARk);H3(b,c,g,j,k,WG(N(C(91)),N(C(92)),N(C(93)),N(C(94))));IY(a,b);}
var Tn=F(0);
function Wt(){var a=this;I9.call(a);a.cx=null;a.eT=null;}
function APf(a){var b=new Wt();AM_(b,a);return b;}
function AM_(a,b){var c,d,e,f,g;a.pm=b;a.mU=IT(0,0,64,255,new B4);c=new SJ;c.cB=new Bp;c.jt=Cq(O(HO,0));c.dQ=new Bp;c.sV=new Bp;c.uK=new B4;c.uL=new B4;d=b.iW;c.c6=d;e=b.kI;c.fg=e;c.b7=d.kz;d=new QE;d.tg=e;c.c4=d;d=b.cj.jm;e=new O7;e.qJ=c;Cs(d,e);d=b.cj.lx;e=new O6;e.t$=c;Cs(d,e);a.es=c;Cs(b.cj.fs,new QV);c=b.cj.fs;d=a.es;BU(d);e=new QU;e.ns=d;Cs(c,e);c=new Qo;d=a.es;e=new Vh;e.c1=Bz();c.dv=e;c.dP=d;f=new T1;f.b_=Bz();f.iF=ARl;f.cz=d;Cs(d.jt,f);c.bO=f;a.eT=c;d=AOi(a.es,c);a.cx=d;c=a.es;g=c.fg.dj!==(C2()).activeElement
?0:1;if(g)IZ(c);c.ec=d;if(g)IA(c);Cs(b.cj.eN,a.eT);Cs(b.cj.id,a.eT);Cs(b.cj.eN,a.cx);c=b.cj.fs;d=new Ov;d.vz=a;Cs(c,d);c=b.cj.fs;d=new Qq;e=a.cx;BU(e);f=new Ot;f.tE=e;e=null;d.mS=b.kI;d.pa=e;d.oq=f;Cs(c,d);c=b.cj.lq;d=a.cx;BU(d);e=new Ou;e.n3=d;Cs(c,e);c=b.cj.jV;d=new MW;d.o3=a;Cs(c,d);c=b.cj.id;d=new MX;d.un=a;Cs(c,d);b=b.cj.jE;c=new MV;c.mD=a;Cs(b,c);Pf(a);}
function Qa(a,b){var c,d,e,f;c=a.es;if(c.b7==b)b=0;else{c.b7=b;GE(c.fg);b=1;}if(b){c=a.eT;d=BL(c.bO.b_);while(BM(d)){Ks(BP(d));}c=c.dv;b=0;while(true){d=c.c1;if(b>=d.j)break;(Bo(d,b)).K.f_=1;b=b+1|0;}c=a.cx;d=c.f3;b=c.bw.b7;d.lu=b;if(c.g8.jd!=b)Pq(c);e=c.e6.data;b=e.length;f=0;while(f<b){d=e[f].by;if(d!==null)d.f2=1;f=f+1|0;}IO(c.c3);Kd(c);}}
function I$(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b=a.pm.iW;c=a.mU;d=b.br;e=c.bk;f=c.bD;g=c.Y;h=c.bV;d.clearColor(e,f,g,h);b.br.clear(16384);Wl(a.cx);b=a.eT;c=b.dv;d=b.dP.c6;i=c.c1.j-1|0;while(i>=0){j=Bo(c.c1,i);j.N.jC(d);k=j.K;l=j.ft.ha;if(!Jj(k)){if(!Uq(k)&&!(!k.f_&&k.c5!==null)){k.f_=0;To(k);m=k.em;f=(m.d0+m.dC+5.0)/10.0;n=Cj(k.eL,k.ik);m=d.da;o=k.em;p=k.f6;e=f*2.0;CF(m,o);q=n+Jx(m,p,e)|0;k.hr=q;q=Ff(0,q,k.o.b);if(q){m=EX(d,q,k.o.a,k.eL.b7);CF(m,k.em);o=k.f6;e=n;f=e+f;p=k.em;g=p.d0;Ei(m,o,f,e+g-(g
+p.dC)/16.0);o=k.c5;if(o===null){o=Gt(d);k.c5=o;}Ek(o,m);K0(m);Cb(k.i_,0.0,0.0,Cf(k.c5),Kk(k.c5));}}m=l.q$;o=k.c5;if(o===null)Os(k,d,0,k.o.b,m);else{n=Cf(o);o=l.tj;p=k.H;q=p.b;r=p.a;p=k.c5;Ev(d,q,r,p.e2,k.i_,p,o,m,k.eL.b7);q=k.o.b;if(n<q)Os(k,d,n,q-n|0,m);}}DP(d,1);s=Cj(j.bh,2.0);t=Jj(j.K);m=j.bh;o=m.dQ;m=m.sV;n=t?0:j.K.o.a;p=j.N.o;Bn(m,p.b,p.a+n|0);XX(d,m,!t?j.K.H:j.N.H,j.ft.ha.kh, -s|0,o);m=j.N;ZG(d,m.o,m.H,s,n,N7(j.ft.hP,j.bh.bW),j.ft.hP.k7,o);i=i+(-1)|0;}b=b.bO;if(!DO(b.b_)){DP(b.cz.c6,1);n=0;while(true)
{c=b.b_;if(n>=c.j)break;AA7(Bo(c,n),b.cz);n=n+1|0;}}}
function Lr(a,b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=a.es;Cp(d.cB,b);if(d.bW!==c){d.bW=c;e=(Cc(d.jt)).data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];d.im=HU(d.cz,d.h1);h=BL(d.b_);while(BM(h)){OU(BP(h),d.im,d.cz);}g=g+1|0;}}}h=a.cx;d=new Bp;i=h.f3;RW(i.gN);j=i.gN;k=c>=0.5?c:0.25;l=k>=4.0?0.5:ABN(j.bV,ABN(k,ARm));Cb(j,j.bk/k,j.bD*k,AMx(j.Y*k,1.25),l);j=i.gN;k=j.bD;i.re=k-(k|0)>=0.25?0.0:0.5;m=k+j.Y+1.5|0;i.t4=m;Bn(i.jy,0,m*2|0);Cp(h.V,d);Cp(h.cs,b);RB(h,d,b,c);}
function IY(a,b){var c,d,e;BU(b);c=a.eT;c.gd=b;d=c.cE;if(d!==null)d.ft=b.fi;c=c.bO;d=b.fi;c.h1=b.tt;c.k9=d;d=BL(c.b_);while(BM(d)){Pw(BP(d),c.k9);}c=a.cx;c.ct=b;d=c.cy;e=b.bB.up;Fc(d.dO.eQ,e);d=c.er;e=b.bB;F6(d,e.j5,e.kd);c=c.et;b=b.bB;F6(c,b.j5,b.kd);}
var Zw=F(0);
function ZP(b){var c,d;c=b.length;d=new Mv;d.sw=b;return AAu(c,d);}
function P6(){var a=this;B.call(a);a.hv=null;a.vv=null;}
function QS(){B.call(this);this.pc=null;}
function ADW(a,b){var c,d,e,f;b=a.pc;AQe=b;c=B7(AQf,b);if(c!==null)Uu(c);else if(B7(AQg,b)!==null){c=new R;T(c);L(L(c,C(95)),b);$rt_globals.console.info($rt_ustr(S(c)));}else{Dn(AQg,b,b);c=new R;T(c);L(L(c,C(96)),b);$rt_globals.console.info($rt_ustr(S(c)));c=$rt_globals.fetch($rt_ustr(b));d=new OZ;c=c.then(Bi(d,"f"));d=new OX;d.mv=b;e=new OY;c.then(Bi(d,"f"),Bi(e,"f"));}f=Wz(C(97));c=new R;T(c);L(L(c,C(98)),b);b=$rt_ustr(S(c));f.innerText=b;}
var Y1=F();
var IX=F(JS);
function Qc(){var a=this;IX.call(a);a.xG=0;a.s8=0;a.qc=null;}
function JE(){var a=this;B.call(a);a.u4=null;a.pi=null;a.wE=0.0;a.lN=0.0;a.k0=null;a.j_=null;a.hO=0;}
function Kv(){var a=this;B.call(a);a.gS=0;a.no=0;}
var AQS=null;var AQR=null;function Xd(a,b){var c=new Kv();XQ(c,a,b);return c;}
function XQ(a,b,c){a.gS=b;a.no=c;}
function KH(a){return a.gS!=1?0:1;}
function UZ(a){return a.gS!=3?0:1;}
function J2(b){return Xd(2,b);}
function X8(){AQS=Xd(0,0);AQR=Xd(1,0);}
function Qo(){var a=this;B.call(a);a.dP=null;a.dv=null;a.cE=null;a.bO=null;a.gd=null;}
function AJM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.dv;d=0;a:{while(true){e=c.c1;if(d>=e.j)break;b:{f=Bo(e,d);e=b.u;if(Dc(f.K,e))g=Dx(f.bh.c4,null);else{h=Cj(f.bh,7.0);i=Cj(f.bh,25.0);if(Nb(f,e.b,h)){g=MG(f,e.b,i);if(Od(f,e.a,h)){g=Dx(f.bh.c4,Ky(g,C(99)));break b;}if(My(f,e.a,h)){g=Dx(f.bh.c4,Ky( -g|0,C(99)));break b;}}if(Uw(f,e.a,h)){g=U5(f,e.a,i);if(V5(f,e.b,h)){g=Dx(f.bh.c4,Ky(g,C(100)));break b;}if(LN(f,e.b,h)){g=Dx(f.bh.c4,Ky( -g|0,C(100)));break b;}}g=0;}}c:{d:{if(!g){if(!Dc(f.N,b.u))break d;if(!f.N.gF(b)
&&!Dx(f.bh.c4,null))break d;}g=1;break c;}g=0;}if(g){g=1;break a;}d=d+1|0;}g=0;}e:{if(!g){c=a.bO;g=0;j=c.b_.j-1|0;f:{while(j>=0){e=Bo(c.b_,j);k=b.u;f=c.cz.c4;g=G8(e.b2,k);d=!g?(-1):Mz(e,k);h=e.hE;if(h!=d){if(h>=0){l=e.cc.data[h];l.g_=0;m=e.uQ;if(m!==null)m.x3(k,h,l);}if(d>=0){k=e.cc.data[d];l=e.on;if(l!==null){m=l.n$;n=l.n_;l=l.oa;R$(m,n);if(l!==null)k.jn.t();if(Ta(k)){if(k.ku===null)Ni(m,Yt(k,n),k.hU,n);else U0(m,Yt(k,n),k.hU,n,k.ku);}}k.g_=1;}e.hE=d;}g=g&&Fj(f)?1:0;if(g)break f;j=j+(-1)|0;}}if(!g){g=0;break e;}}g
=1;}return g;}
function AMn(a,b,c,d){var e,f,g,h,i;e=a.dv;f=0;a:{while(true){g=e.c1;if(f>=g.j)break;b:{c:{h=Bo(g,f);if(!Dc(h.K,b.u)){if(!Dc(h.N,b.u))break c;if(!h.N.gg(b,c,d))break c;}i=1;break b;}i=0;}if(i){c=1;break a;}f=f+1|0;}c=0;}d:{if(!c){g=a.bO.b_;d=g.j-1|0;i=1;if(d<0)i=0;else{g=Bo(g,d);c=Mz(g,b.u);if(c>=0){b=g.cc.data[c];if(!Ta(b))b.jn.t();}}if(!i){c=0;break d;}}c=1;}return c;}
function AKB(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.bO;e=null;f=d.b_.j-1|0;a:{while(f>=0){e=Bo(d.b_,f);g=b.u;h=G8(e.b2,g);if(!h&&!I_(e.b2)){e=e.sB;if(e!==null)Dq(e.rs);}e=!h?null:ARn;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;e=a.dv;h=0;b:{while(true){g=e.c1;if(h>=g.j){g=null;break b;}c:{i=Bo(g,h);if(!c){d:{g=b.u;if(!Jj(i.K)&&Dc(i.K,g)){d=i.N.H;j=d.b;k=g.b;l=j-k|0;j=d.a;f=g.a;j=j-f|0;g=i.K.H;m=g.b-k|0;f=g.a-f|0;d=new Bp;g=new MI;g.mK=i;g.mL=m;g.mM=f;g.mN=d;g.mG=l;g.mI=j;}else{j=Cj(i.bh,7.0);f=Cj(i.bh,
25.0);if(Nb(i,g.b,j)){m=MG(i,g.b,f);if(Od(i,g.a,j)){g=Hx(i,g,m,(-1));break d;}if(My(i,g.a,j)){g=Hx(i,g,m,1);break d;}}if(Uw(i,g.a,j)){f=U5(i,g.a,f);if(V5(i,g.b,j)){g=Hx(i,g,(-1),f);break d;}if(LN(i,g.b,j)){g=Hx(i,g,1,f);break d;}}g=null;}}if(g!==null)break c;}g=Dc(i.K,b.u)?ARn:i.N.gz(b,c);i=i.N;if(i===null)g=null;else if(g===null)g=!Dc(i,b.u)?null:ARn;}if(g!==null)break;h=h+1|0;}}return g;}
function AHv(a,b,c){var d,e,f,g,h;d=a.dv;e=0;a:{while(true){f=d.c1;if(e>=f.j)break;b:{c:{g=Bo(f,e);if(!Dc(g.K,b.u)){if(!Dc(g.N,b.u))break c;if(!g.N.gD(b,c))break c;}h=1;break b;}h=0;}if(h){c=1;break a;}e=e+1|0;}c=0;}return !c&&!Fp(a.bO)?0:1;}
function PV(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r;f=null;g=d.d;h=Bz();i=c.j;j=0;while(j<i){if(f===null){k=(Bo(c,j)).X;l=QM(Ez(BS(g.f,k)));m=RA(g.eM);}else{m=f.data;k=m[j].kn.j7;l=!BB(g.eM,m[j].h_)?C(5):QM(Ez(BS(g.f,k)));m=RA(m[j].h_);}if(H(l)>153){l=B9(l,0,150);n=new R;T(n);L(L(n,l),C(101));l=S(n);}if(H(m)>153){n=B9(m,0,150);m=new R;T(m);L(L(m,n),C(101));m=S(m);}o=DX(k+1|0);if(f!==null){p=f.data;n=null;q=p[j];}else{q=null;n=Bo(c,j);}if(f!==null){p=new Vf;p.pd=d;p.pe=q;}else{p=new Vg;p.tJ=d;p.tI=n;}n=new Jb;n.rb
=p;n.hN=o;n.hZ=l;n.fm=m;Bt(h,n);j=j+1|0;}r=GW(h,ARo);if(a.cE!==null)RO(a);c=new Pm;l=a.dP;m=new O$;m.lX=a;m.lY=d;Kp(c);c.cG=new Bp;c.bC=new Bp;c.df=AHz();c.fS=new Bp;c.bQ=ARo;c.dE=O(Hw,0);c.dc=0;c.dL=0;c.fd=0;c.eJ=0;c.ew=0;c.dF=AC3(0);c.gk=FQ();c.bz=l;c.hF=m;c.uk=m;N9(c);Sh(c);c.bQ=r;d=a.gd;l=d.fi;d=d.t5;c.pI=l;c.sA=d;c.dw=null;c.dF=null;c.eb=0;Sh(c);d=new S2;l=a.dP;d.N=ANC();d.bh=l;m=new TJ;Kp(m);m.i_=new B4;m.eL=l;d.K=m;a.cE=d;d=new OF;l=a.dP.c4;Kp(d);m=new Ng;m.pG=d;d.nX=m;m=new Nf;m.qK=d;d.sp=m;d.ti=10.0;d.bl
=c;d.lC=l;c.fT=d;l=a.gd.fi;m=l.n8;l=l.m3;d.t3=m;d.t0=l;h=d.cH;if(h!==null)F6(h,m,l);h=d.cM;if(h!==null)F6(h,m,l);l=a.cE;m=l.N;h=m.H;g=m.o;d=CY(m,d);l.N=d;d.kL(h,g,l.bh.bW);d=a.cE;l=APl();L(L(l,C(102)),e);Yv(d,GK(l),a.gd.sT,4.0);Y$(a.cE,a.gd.fi);WF(a.dv,a.cE);b=AAx(c,b,ABH(a.cE)+Cj(a.dP,2.0)|0);d=ABa(c,b);JU(a.cE,b,d);HM(a.dP,c);}
function RO(a){var b,c;b=a.dv;c=a.cE;TV(b.c1,c);b=a.cE;c=b.K;c.c5=CY(c.c5,null);b.N=CY(b.N,null);a.cE=null;}
function PD(a,b){var c;c=new Ph;c.mr=a;c.ms=b;return c;}
function AKT(a,b,c,d){var e,f,g,h;e=a.dv;f=0;a:{while(true){g=e.c1;if(f>=g.j)break;if((Bo(g,f)).N.gC(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function XI(b){var c;c=new VM;c.lT=b;return c;}
var GL=F(0);
function AI4(a){}
function AFy(a){}
var OP=F(0);
var O3=F(0);
function Yg(){var a=this;B.call(a);a.V=null;a.cs=null;a.bw=null;a.L=null;a.io=null;a.ut=0;a.lz=null;a.cy=null;a.kD=0;a.fc=0;a.iz=null;a.gw=null;a.bZ=null;a.M=0;a.d=null;a.eo=null;a.ct=null;a.g8=null;a.e6=null;a.sX=0;a.qV=0;a.cp=0;a.bY=0;a.b8=0;a.ex=null;a.er=null;a.et=null;a.gh=0;a.hj=0;a.xy=0;a.vi=0;a.iH=0;a.h7=0;a.kZ=0;a.dn=0;a.c3=null;a.ej=null;a.ez=0;a.bA=0;a.uZ=null;a.g6=null;a.v7=null;a.wT=null;a.vG=null;a.bj=0;a.f3=null;a.pf=0;a.nE=null;a.sI=null;}
function AOi(a,b){var c=new Yg();AKg(c,a,b);return c;}
function AKg(a,b,c){var d,e,f,g,h;a.V=new Bp;a.cs=new Bp;a.ut=0;a.lz=O(Bh,10);d=new OA;e=new Vw;f=new Bp;e.cI=f;e.bo=new Bp;e.eQ=new B4;e.g$=new B4;Bn(f,0,0);Bn(e.bo,2,20);d.dO=e;d.jj=0.5;d.gm=0.0;IT(187,187,187,255,e.eQ);a.cy=d;a.fc=16;a.iz=C(103);a.bZ=O(JQ,4);a.d=AEh(O(Bv,0),null,null);f=new Vn;f.oR=Cq(O(I6,0));f.uq=Cq(O(I6,0));f.me=Cq(O(RF,0));f.to=Cq(O(O0,0));f.sW=Cq(O(F$,0));f.sF=Cq(O(Rl,0));a.eo=f;a.e6=O(EJ,0);a.ex=Cd(1,0);a.er=Tv();a.et=Tv();a.gh=0;a.hj=1;a.iH=1;a.h7=1;a.kZ=1;a.dn=3;a.c3=AMp();a.ej=C(104);a.ez
=0;a.bA=0;e=D2();BU(e);f=new MQ;f.wQ=e;a.g6=f;a.bj=0;e=new MP;e.lV=a;a.nE=e;e=new MO;e.p$=a;a.sI=e;a.bw=b;a.L=b.c6;a.io=c;c=new Te;g=a.bZ;h=b.b7;c.iB=new B4;c.iw=new Bp;c.jy=new Bp;b=new B4;c.gN=b;c.jA=g;c.lu=h;RW(b);a.f3=c;g=a.lz.data;b=new MN;b.s7=a;g[1]=b;b=new MU;b.nx=a;g[2]=b;b=new MT;b.rd=a;g[3]=b;b=new MS;b.uB=a;g[4]=b;b=new MR;b.ne=a;g[5]=b;b=new MM;b.qw=a;g[6]=b;}
function RB(a,b,c,d){var e,f,g,h;a.cp=Cn(80.0,d);a.bY=Cn(1.0,d);a.b8=Cn(10.0,d);if(!a.bA)Cp(a.bw.dQ,a.V);else Bn(a.bw.dQ,(b.b+c.b|0)-H7(a)|0,b.a);b=a.c3;e=a.bw.dQ;f=H7(a);g=c.a;h=d;Cp(b.eR,e);Bn(b.eh,f,g);b.hK=h;b=a.cy;f=Cn(2.0,d);b.dO.bo.b=f;PU(a,a.iz,a.fc);Kd(a);}
function AFo(a){a.kD=1;J$(a);}
function ACM(a){a.kD=0;}
function J$(a){var b;b=a.cy;b.gm=Mw(Fa(a))+b.jj*1.25;b.fq=1;}
function Pq(a){a.g8=CY(a.g8,EX(a.L,1024,a.M,a.bw.b7));}
function H6(a,b,c){if(a.bw.bW!==0.0){PU(a,b,c);GE(Fa(a));}a.fc=c;a.iz=b;}
function PU(a,b,c){var d,e,f,g,h,i,j;d=Cn(c,a.bw.bW);e=a.gw;f=e!==null?e.ow:0;if(!(d==f&&BB(b,a.iz))){IO(a.c3);g=a.e6.data;c=g.length;f=0;while(f<c){VI(g[f]);f=f+1|0;}g=a.d.f.v.data;c=g.length;f=0;while(f<c){DY(g[f]);f=f+1|0;}g=a.bZ.data;h=Gw(0,0);e=a.L;i=d;g[h]=F5(e,b,i,300,0);a.bZ.data[Gw(0,1)]=F5(a.L,b,i,300,2);a.bZ.data[Gw(1,0)]=F5(a.L,b,i,600,0);a.bZ.data[Gw(1,1)]=F5(a.L,b,i,600,2);e=a.bZ.data[Gw(0,0)];a.gw=e;c=Fi(e);f=Dy(c*1.25);a.M=f;e=a.f3;e.uM=f;g=a.bZ.data;j=g[0];e.tR= -( -((f+j.d0+j.dC)/2.0)|0)|0;a.cy.dO.bo.a
=Fi(g[0]);Pq(a);f=a.M;h=U$(a.cy);e=new R;T(e);b=L(L(e,C(105)),b);B0(b,32);Bj(L(Bj(L(Bj(L(Bj(b,d),C(106)),c),C(107)),f),C(108)),h);$rt_globals.console.info($rt_ustr(S(e)));if(ARp){c=JA(a.bZ.data[0],a.M);b=new R;T(b);Bj(L(b,C(109)),c);$rt_globals.console.info($rt_ustr(S(b)));}a.d.gb=FI(EV(a),a.d.s,a.L.da,a.bZ);F9(a);Kd(a);}}
function Lk(a){return V(Ch(a.d.f)+5|0,a.M);}
function IQ(a){return Ba(Lk(a)-a.cs.a|0,0);}
function RR(a){return Ba(a.gh-C7(a)|0,0);}
function C7(a){var b;b=!a.bA?0:CJ(a)+a.b8|0;return Ba(1,(a.cs.b-a.cp|0)-b|0);}
function H7(a){return a.bA?a.cp:a.cp-a.b8|0;}
function Dd(a){return a.cs.a;}
function E7(a,b){var c,d;c=Ss(b,IQ(a));if(c!=a.bj){a.bj=c;a.d.i7=c/a.M;d=a.wT;if(d!==null)d.vb(c);}}
function HI(a,b){var c,d;c=Ss(b,RR(a));d=a.d;if(c!=d.cT){d.cT=c;d=a.v7;if(d!==null)d.vb(c);}}
function Wl(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=HE(a.cs.a,a.M)+7|0;c=a.e6;if(c.data.length<b)a.e6=XK(b,c,a.f3,a.sX,a.qV,a.d.f);DP(a.L,0);QB(a.L,a.V,a.cs);d=(a.M-U$(a.cy)|0)/2|0;e=(a.d.gb-(RM(a.cy)/2|0)|0)-a.d.cT|0;f=!a.bA?a.cp:(a.bY+a.b8|0)+CJ(a)|0;g=a.cy;b=f+e|0;d=(d+V(a.d.n,a.M)|0)-a.bj|0;Bn(g.dO.cI,b,d);h=Ch(a.d.f);i=Kf(a);j=S4(a);a.sX=i;a.qV=j;k=!a.bA?a.V.b+a.cp|0:((a.V.b+a.bY|0)+a.b8|0)+CJ(a)|0;l=i;while(l<=j&&l<h){m=BS(a.d.f,l);g=TI(a,l);Wk(g,m,a.g8,a.L,a.M,C7(a),a.d.cT);n=g.by;a.gh=Ba(a.gh,
Eo(m)+(40.0*a.bw.bW|0)|0);o=V(a.M,l)-a.bj|0;p=Cy(a)===null?null:(Cy(a)).data[l];d=a.V.a+o|0;m=a.L;f=C7(a);q=a.M;o=a.d.cT;r=a.ct;s=ZH(Z(a),l);if(s!==null){if(s.a==(-1))s.a=n.G;s.b=FI(n,s.b,a.L.da,a.bZ);s.a=FI(n,s.a,a.L.da,a.bZ);}t=a.d;Xx(g,d,k,m,f,q,o,r,s,t.gL,t.gv,t.n!=l?0:1,Cy(a)===null?0:1,p);l=l+1|0;}r=a.bw.dQ;l=i;while(l<=j&&l<h&&a.iH){g=TI(a,l);o=V(a.M,l)-a.bj|0;u=AAG(Z(a),l);t=a.ct.bB.pE;v=a.d.n==l&&Cy(a)===null?1:0;if(u)t=a.ct.bB.iC;else if(Cy(a)!==null&&l<(Cy(a)).data.length&&(Cy(a)).data[l]!==null)
{t=a.ct;t=J3(t.dy,t,(Cy(a)).data[l].jF);}else if(v)t=a.ct.bB.ht;XE(g,a.L,k,a.V.a+o|0,a.M,r,a.d.cT,C7(a),t);l=l+1|0;}if(a.hj){q=Be(j+1|0,h);Y8(a,V(a.M,q)-a.bj|0);}Z2(a);Zi(a,i,j);if(a.h7)ABx(a,i,j,h);if(a.kD&&e>=(( -RM(a.cy)|0)/2|0)){g=a.cy;t=a.cs;if(Xn(g.dO.cI,0,0,t))AAe(a.cy,a.L,a.V);}ZD(a);YR(a);Kt(a.L);}
function ABx(a,b,c,d){var e,f,g,h,i,j;while(b<=c&&b<d){e=Cy(a)!==null&&b<(Cy(a)).data.length?(Cy(a)).data[b]:null;if(e!==null){f=a.ct;f=J3(f.dy,f,e.jF);}else f=Cy(a)!==null?a.ct.bB.fL:a.ct.bB.ht;if(!(a.d.n!=b&&e===null)){a.ex.b=!a.bA?(a.b8-a.bY|0)-a.dn|0:((a.b8+CJ(a)|0)+a.bY|0)-a.dn|0;g=a.ex;h=a.M;g.a=h;i=a.bA?0:(a.cp-a.b8|0)+a.bY|0;h=V(h,b)-a.bj|0;e=a.L;j=a.V;BC(e,j.b+i|0,j.a+h|0,g,f);}b=b+1|0;}}
function Zi(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;d=a.cs.a;e=Be(d,V(Ch(a.d.f),a.M)-a.bj|0);f=a.c3;g=a.bj;h=Cy(a)!==null?(-1):a.d.n;i=a.L;j=a.ct;QB(i,f.eR,f.eh);RL(f,i,b,d);k=f.eX;if(b!=k){l=f.ci.j;m=l*20|0;if(k<b){k=k/20|0;n=b/20|0;}else{n=Ba(0,(k-1|0)/20|0);k=Ba(0,(b-1|0)/20|0);}a:{if((n-k|0)>=l){Qs(f,b);f.eX=b;}else{if(f.eX>=b)while(true){if(n<k)break a;f.eX=Mq(Bo(f.ci,n%l|0),f.d2,f.e0,f.eX,b,m,f.hK);n=n+(-1)|0;}while(k<=n){f.eX=Mq(Bo(f.ci,k%l|0),f.d2,f.e0,f.eX,b,m,f.hK);k=k+1|0;}}}}o
=BL(f.ci);while(BM(o)){p=BP(o);q=f.eR;k=V(f.ci.j,f.ib);r=f.iY;s=p.ee.a;n=((p.iE.a-(g%k|0)|0)+k|0)%k|0;t=j.hl;l=g+n|0;u=p.F;m=l/u|0;v=n+s|0;l=BF(v,e);if(l<=0){k=s/u|0;u=0;v=0;w=0;while(v<k){l=m+v|0;if(KI(p,r,w,l,j,t)){s=V((v-u|0)+1|0,p.F);Bn(p.de,Cf(p.Z),s);Cb(p.dU,0.0,V(u,p.F),Cf(p.Z),s);l=w;}else{x=Fh(j,r,w,t);Ed(p,i,n+V(u,p.F)|0,q,t.eB,x);Bn(p.de,Cf(p.Z),p.F);Cb(p.dU,0.0,V(v,p.F),Cf(p.Z),p.F);u=v;}v=v+1|0;w=l;}x=Fh(j,r,w,t);Ed(p,i,n+V(u,p.F)|0,q,t.eB,x);}else{if(l>0&&n<e){l=Ba(e-n|0,0);w=p.F;u=l/w|0;if(l%
w|0)u=u+1|0;y=0;z=0;ba=0;while(z<u){w=m+z|0;if(KI(p,r,ba,w,j,t)){l=V((z-y|0)+1|0,p.F);Bn(p.de,Cf(p.Z),l);Cb(p.dU,0.0,V(y,p.F),Cf(p.Z),l);w=ba;}else{x=Fh(j,r,ba,t);Ed(p,i,n+V(y,p.F)|0,q,t.eB,x);Bn(p.de,Cf(p.Z),p.F);Cb(p.dU,0.0,V(z,p.F),Cf(p.Z),p.F);y=z;}z=z+1|0;ba=w;}x=Fh(j,r,ba,t);Ed(p,i,n+V(y,p.F)|0,q,t.eB,x);}if(v>k)Y7(p,q,e,g,k,j,r,i,s,n,t);}}x=j.hl;if(e<d){bb=f.eR;BC(i,bb.b,bb.a+e|0,Cd(f.eh.b,d-e|0),x.g7);}if(b<=h&&h<=c)Z$(f,g,h,j.hl,i);Kt(i);}
function Kf(a){return Be(a.bj/a.M|0,Ch(a.d.f)-1|0);}
function S4(a){return Be(((a.bj+Dd(a)|0)-1|0)/a.M|0,Ch(a.d.f)-1|0);}
function Kd(a){var b,c,d,e,f,g,h;b=a.c3;c=a.bZ.data[0];d=a.M;e=a.bw.b7;f=a.L;b.hD=c;b.lc=d;g=d*20|0;b.ib=g;h=CY(b.d2,EX(f,b.eh.b,g,e));b.d2=h;CF(h,b.hD);QY(b.d2,2);c=CY(b.e0,EX(f,b.eh.b,d,e));b.e0=c;CF(c,b.hD);QY(b.e0,2);RL(a.c3,a.L,Kf(a),Dd(a));}
function TI(a,b){var c;c=a.e6.data;return c[b%c.length|0];}
function Ur(a,b){var c,d,e,f;c=Ff(0,H(a.ej),Mj(b));if(!c)b=null;else{b=C(47);if(c<0){b=new BI;W(b);J(b);}if(c!=1){d=b.b5.data.length;if(d&&c){e=B2(V(d,c));d=0;f=0;while(f<c){OS(b,0,H(b),e,d);d=d+H(b)|0;f=f+1|0;}b=K8(e);}else b=AQl;}}return b;}
function Nj(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=Bu(i);k=APJ(i).data;GG(j,c);c=0;l=k.length;if(c>l){f=new BI;W(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.f;o.b3=o.b3+1|0;p=O(F1,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ALA(h[m],n[m],k[m],b[m],f.X,f.be);m=m+1|0;}Bt(o.gB,p);c=0;while(c<i){b=e.data;I1(o,h[c],n[c],k[c],b[c]);g.lD(Ct(h[c]),b[c]);c=c+1|0;}}
function ABA(a){var b;if(CX(Z(a)))FF(a);else{b=a.d;LK(b.f,b.n,b.s);}F9(a);DG(a);return 1;}
function Dj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.ez)return 0;if(CX(Z(a)))FF(a);c=KM(Tg(b,C(110),C(5)),C(111),(-1));d=c.data;b=a.d;e=b.f;f=b.n;g=b.s;Wa(e,f,g,c);h=d.length;if(!h)b=AQl;else{i=0;j=0;while(j<h){i=i+H(d[j])|0;j=j+1|0;}k=B2(i+V(h-1|0,H(C(111)))|0);c=k.data;l=0;b=d[0];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<H(C(111))){m=l+1|0;c[l]=I(C(111),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=n+1|0;}b=K8(k);}EY(e,f,g,0,b);b=a.d;f=b.n;m=(f
+h|0)-1|0;Ci(a,m,m!=f?H(d[h-1|0]):b.s+H(d[0])|0,0);E3(a);DG(a);return 1;}
function FF(a){var b,c,d;b=Dt(Z(a));c=a.d.f;d=Z(a);LS(c,d,Ua(c,d));Ci(a,b.z,b.O,0);E3(a);DG(a);}
function E3(a){var b,c;(Z(a)).cO=0;b=(Z(a)).bs;c=a.d;BY(b,c.n,c.s);b=(Z(a)).bi;c=a.d;BY(b,c.n,c.s);}
function CJ(a){return a.gw.ld|0;}
function Y8(a,b){var c,d;c=a.cs.a;if(b<c){d=a.bw.dQ;d.a=c-b|0;d.b=!a.bA?C7(a)+a.dn|0:C7(a)+a.bY|0;c=!a.bA?(a.V.b+a.cp|0)-a.dn|0:(((a.V.b+a.b8|0)+CJ(a)|0)+a.bY|0)-a.dn|0;BC(a.L,c,a.V.a+b|0,d,a.ct.bB.fL);}}
function ZD(a){var b;b=a.bA?a.V.b+CJ(a)|0:a.V.b+a.cs.b|0;Vy(a.er,a.bj,a.V.a,Dd(a),Lk(a),b,CJ(a));b=!a.bA?a.V.b+a.cp|0:((a.V.b+a.bY|0)+a.b8|0)+CJ(a)|0;PB(a.et,a.d.cT,b,C7(a),a.gh,a.V.a+Dd(a)|0,CJ(a));}
function YR(a){var b,c;b=P1(a.er);c=P1(a.et);if(!(!b&&!c)){DP(a.L,1);if(b)G9(a.er,a.L);if(c)G9(a.et,a.L);if(b)Hd(a.er,a.L);if(c)Hd(a.et,a.L);}}
function Z2(a){var b,c,d,e;b=a.ex;c=a.cs;b.a=c.a;b.b=a.bY;d=!a.bA?a.cp-a.b8|0:(c.b-H7(a)|0)-a.bY|0;b=a.L;c=a.V;BC(b,c.b+d|0,c.a,a.ex,a.ct.bB.r1);a.ex.b=!a.bA?(a.b8-a.bY|0)-a.dn|0:((a.b8+CJ(a)|0)+a.bY|0)-a.dn|0;e=a.bA?0:(a.cp-a.b8|0)+a.bY|0;b=a.L;c=a.V;BC(b,c.b+e|0,c.a,a.ex,a.ct.bB.fL);}
function Ss(b,c){return Be(Ba(0,b),c);}
function Fa(a){return a.bw.fg;}
function LA(a,b){var c,d,e,f;c=In(b);d=new R;T(d);L(L(d,C(112)),c);$rt_globals.console.info($rt_ustr(S(d)));Fa(a);c=In(b);d=C2();c=$rt_ustr(c);d.title=c;Ci(a,0,0,0);c=new MZ;c.pN=a;c.pM=b;d=D2();BU(d);e=new M1;e.sx=d;f=new SN;f.oF=e;d=new Vd;d.mZ=c;c=b.hR;if(c!==null)c.text().then(Bi(d,"f"),Bi(f,"f"));else{b=b.hf.getFile();c=new Ve;c.ol=d;c.om=f;b.then(Bi(c,"f"),Bi(f,"f"));}}
function GT(a,b,c,d,e){if(G1(a,e))return 1;if(c&&d)return 1;if(c)E7(a,a.bj+((V(b,a.M)*12|0)/10|0)|0);else if(!d){Gz(a,a.d.n+b|0,e);St(a);}return 1;}
function QR(a,b,c,d){var e,f,g;if(G1(a,d))return 1;e=EV(a);if(!c)f=a.d.s+b|0;else if(b>=0)f=FX(e,a.d.s);else{b=a.d.s;if(!b)f=(-1);else{c=HP(e,b);if(c>0&&e.dk.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.dk.data[c-1|0];}}if(f>e.G){e=a.d;if((e.n+1|0)<Ch(e.f))Ci(a,a.d.n+1|0,0,d);}else if(f>=0)CQ(a,f,d);else{e=a.d;b=e.n;if(b>0){g=(BS(e.f,b-1|0)).G;Ci(a,a.d.n-1|0,g,d);}}TU(a);return 1;}
function G1(a,b){if(CX(Z(a))&&!b){E3(a);F9(a);return 1;}if(!(b&&CX(Z(a))))E3(a);return 0;}
function Ci(a,b,c,d){a.d.s=c;return Gz(a,b,d);}
function Gz(a,b,c){var d;d=a.d;d.n=Ff(0,b,Ch(d.f)-1|0);return CQ(a,a.d.s,c);}
function CQ(a,b,c){var d,e;a.d.s=Ff(0,b,(EV(a)).G);a.d.gb=a.bw.bW===0.0?0:FI(EV(a),a.d.s,a.L.da,a.bZ);J$(a);F9(a);if(c)(Z(a)).cO=1;d=Z(a);e=a.d;J_(d,e.n,e.s);(Z(a)).cO=0;return 1;}
function K$(a,b){var c;c=AEn(Z(a));CQ(a,b,0);G6(Z(a),c);}
function F9(a){St(a);TU(a);}
function St(a){var b,c,d,e,f;b=a.bj;c=b+Dd(a)|0;d=a.d.n;e=a.M;d=V(d,e);f=d+e|0;if(d<(b+e|0))E7(a,d-e|0);else if(f>(c-e|0))E7(a,(f-Dd(a)|0)+a.M|0);}
function TU(a){var b,c,d,e,f;b=Dy(a.bw.bW*30.0);c=a.d.cT;d=c+C7(a)|0;e=a.d.gb;f=e+b|0;if(e<(c+b|0))HI(a,e-b|0);else if(f>(d-b|0))HI(a,(f-C7(a)|0)+b|0);}
function Ha(a,b){var c,d;Ci(a,b.X,b.be,0);c=FX(EV(a),a.d.s);BY((Z(a)).bi,a.d.n,c);b=(Z(a)).bs;d=a.d;BY(b,d.n,d.s);}
function Ef(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.V;e=c-d.b|0;f=Ff(0,((b.a-d.a|0)+a.bj|0)/a.M|0,Ch(a.d.f)-1|0);g=!a.bA?a.cp:(a.bY+a.b8|0)+CJ(a)|0;h=Ba(0,(e-g|0)+a.d.cT|0);b=BS(a.d.f,f);d=a.L.da;i=a.bZ;if(!(b.dW!==null&&!b.fe))Jk(b,d,i);j=b.dW;e=b.k.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.G;else{c=Si(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.k.data.length)k=b.G;else{j=QX(b,d,i,c);k=0;e=0;while(e<c){k=k+H(b.k.data[e].p)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(ARq){b=new R;T(b);Bj(L(Bj(L(Bj(L(b,C(113)),e),C(114)),h),C(115)),m);$rt_globals.console.info($rt_ustr(S(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return Di(f,k);}
function VK(a,b){var c,d;c=a.d;d=b.X;c.n=d;c.s=b.be;c.gb=FI(BS(c.f,d),a.d.s,a.L.da,a.bZ);J$(a);}
function EV(a){var b;b=a.d;return BS(b.f,b.n);}
function AIF(a,b,c){(Z(a)).cO=0;return 1;}
function ACa(a,b,c){var d;if(c)return null;d=Hj(a.er,b.u,a.nE,1);if(d!==null)return d;d=Hj(a.et,b.u,a.sI,0);if(d!==null)return d;HN(a);VK(a,Ef(a,b.u));JO(a.d);if(!b.bv&&!(Z(a)).cO){b=(Z(a)).bs;d=a.d;BY(b,d.n,d.s);}(Z(a)).cO=1;b=Z(a);d=a.d;J_(b,d.n,d.s);b=new Mg;b.pv=a;return b;}
function ACq(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cg){b=b.u;e=Ef(a,b);f=HB(a.d.f,e.X,e.be);g=RH(a,f);h=KS(a.eo,DI(a.d),Fv(a.d));if(h!==null){i=a.d;c=e.X;d=e.be;e=new OL;e.v0=a;e.v3=b;e.v2=g;h.qO(i,c,d,e,a.g6);}else{e=B7(a.d.f.c_,f);if(e!==null){Ha(a,e);c=1;}else{e=B7(a.d.f.cP,f);if(e!==null&&!DO(e)){if(e.j!=1){PV(a.io,b,e,a,g);c=1;}else{Ha(a,Bo(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(Ef(a,b.u)).X;g=BS(a.d.f,c);c=Fl(g,a.d.s);d=FX(g,a.d.s);b=KE(g,c);if((d-1|0)==g.G){BY((Z(a)).bs,a.d.n,
Mj(g));BY((Z(a)).bi,a.d.n,g.G);}else{if(b!==null){b=b.p;j=0;c:{while(true){k=b.b5.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.s;if(c==j){c=Fl(g,c-1|0);d=FX(g,c);}else{if(d!=j){Ox(Z(a),a.d.n);break b;}c=Fl(g,d+1|0);d=FX(g,c);}}}BY((Z(a)).bs,a.d.n,c);(Z(a)).cO=1;Ci(a,a.d.n,d,0);(Z(a)).cO=0;HN(a);}}break a;case 3:break;default:break a;}Ox(Z(a),a.d.n);Qz(a.d.fI);HN(a);}}return 1;}
function AC6(a,b){var c,d,e,f,g,h,i,j,k;c=a.bw.c4;if(HA(a.er,b.u,c))return 1;if(HA(a.et,b.u,c))return 1;d=a.c3;if(Ft(b.u,d.eR,d.eh)&&Fj(c)?1:0)return 1;e=b.u;f=!a.bA?a.V.b+a.cp|0:((a.V.b+a.b8|0)+a.bY|0)+CJ(a)|0;a:{g=a.V.a;h=C7(a);i=Dd(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Fj(c);if(b.cg){e=Ef(a,b.u);e.be=Fl(BS(a.d.f,e.X),e.be);b=a.d.f;if(!Iz(b.c_,e)&&!Iz(b.cP,e)?0:1)return Dx(c,C(116));}return Dx(c,C(117));}
function AMD(a,b){var c,d,e,f,g;c=b.cg;if(c&&b.bT==65){c=Ch(a.d.f)-1|0;d=E8(a.d.f,c);BY((Z(a)).bs,0,0);BY((Z(a)).bi,Ch(a.d.f)-1|0,d);return 1;}if(c&&b.bT==80){HV(a.d);return 1;}if(!a.ez&&c&&b.bT==90){if(CX(Z(a)))E3(a);b=a.d.f;b.b3=b.b3+1|0;e=b.gB;d=e.j;if(!d)e=null;else{f=(E6(e,d-1|0)).data;e=L7(b,f[0]);c=1;while(c<f.length){L7(b,f[c]);c=c+1|0;}}if(e!==null){Ci(a,e.b,e.a,0);DG(a);}return 1;}if(!c&&!b.cJ){if(B1(b.dK,C(118))){Dj(a,C(119));CQ(a,a.d.s-1|0,0);c=1;}else if(B1(b.dK,C(120))){Dj(a,C(121));CQ(a,a.d.s
-1|0,0);c=1;}else if(B1(b.dK,C(122))){Dj(a,C(123));CQ(a,a.d.s-1|0,0);c=1;}else if(B1(b.dK,C(124))){Dj(a,C(125));CQ(a,a.d.s-1|0,0);c=1;}else if(B1(b.dK,C(126))){Dj(a,C(127));CQ(a,a.d.s-1|0,0);c=1;}else if(!B1(b.dK,C(128)))c=0;else{Dj(a,C(129));CQ(a,a.d.s-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cJ&&!b.cg)){d=b.bT;if(d>=48&&d<=57){c=d-48|0;e=a.lz.data[c];if(e!==null)e.t();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bT){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(YP(a,b))return 1;if(Zy(a,b))return 1;c=b.cg;if(c&&b.bT==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bT;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.cJ&&!b.h4)return H(b.dK)>0&&Dj(a,b.dK)?1:0;return 0;}return 0;}
function RJ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=Kf(a);d=S4(a);if(b.dT!=3&&b.fJ==3){e=Tb(b.j8);f=new L2;f.ps=c;f.pr=d;g=new Pp;g.o6=f;while(!g.jg&&SY(e,g)){}if(!g.jg&&B1(C(130),DI(b))){c=Ba(0,c-100|0);d=Be(Ch(b.f)-1|0,d+100|0);Bt(b.j8,Cd(c,d));h=Bu(3);i=h.data;i[0]=Em(b.f,c);e=b.f;j=0;d=Be(d+1|0,e.v.data.length);k=0;while(k<d){j=j+E8(e,k)|0;if(k!=(e.v.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.rX=D1();e=b.c8;l=new TW;l.oS=b;i=O(B,3);m=i.data;m[0]=EM(b.f);m[1]=h;b=b.f.cC;g=Bz();R2(b,b.cA,g);h
=Bu(3*g.j|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bo(g,o);d=k+1|0;n[k]=b.bF;q=d+1|0;n[d]=b.bI;k=q+1|0;n[q]=b.el;o=o+1|0;}m[2]=h;En(e,l,C(131),i);}}}
function Qm(a){AAi(a.d);}
function Kl(a,b,c){var d,e,f,g,h,i;if(c&&a.ez)return 0;d=Dt(Z(a));e=d.z;if(CX(Z(a))){f=a.d.f;g=Z(a);h=Ua(f,g);if(c)LS(f,g,h);if(c){Ci(a,d.z,d.O,0);E3(a);DG(a);}}else{h=GV(Ez(a.d.f.v.data[e]),C(111));i=Be(Ch(a.d.f)-1|0,e);BY((Z(a)).bi,i,0);if(e>=(Ch(a.d.f)-1|0))BY((Z(a)).bi,i,E8(a.d.f,i));else BY((Z(a)).bs,i+1|0,0);if(c)FF(a);else Ci(a,e,0,0);}b.m(h);return 1;}
function Zy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.ez)return 0;a:{switch(b.bT){case 8:if(CX(Z(a))){FF(a);c=1;}else{b=a.d;d=b.s;if(!d&&!b.n)c=1;else{if(d){e=b.n;c=d-1|0;LK(b.f,e,c);}else{e=b.n-1|0;c=E8(b.f,e);b=a.d.f;JV(b,e);EY(b,e,E8(b,e),1,C(111));}DG(a);c=Ci(a,e,c,0);}}break a;case 9:if(!b.bv){if(!CX(Z(a)))Dj(a,a.ej);else{f=Dt(Z(a));g=EZ(Z(a));c=g.z;d=f.z;e=(c-d|0)+1|0;h=Bu(e);i=h.data;j=O(Bv,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.ej;d=d+1|0;e=l;}b=new T7;m=a.d;Za(b,m.n,m.s);m=new Sp;m.q6=
a;Nj(a,h,0,0,j,b,m);f.O=f.O+H(a.ej)|0;g.O=g.O+H(a.ej)|0;K$(a,a.d.s+H(a.ej)|0);DG(a);}c=1;}else b:{if(!CX(Z(a))){b=a.d;f=BS(b.f,b.n);if(f.k.data.length>0){g=Ur(a,f);if(g===null){c=1;break b;}m=a.d;n=m.f;e=m.n;b=Di(e,m.s);n.b3=n.b3+1|0;o=n.gB;h=O(F1,1);h.data[0]=ALA(e,0,1,g,b.X,b.be);Bt(o,h);I1(n,e,0,1,g);FD(f,0,H(g));K$(a,a.d.s-H(g)|0);}}else{b=Dt(Z(a));f=EZ(Z(a));c=f.z;p=b.z;c=(c-p|0)+1|0;h=Bu(c);k=h.data;j=O(Bv,c);q=j.data;g=a.d;e=g.s;l=g.n;c=0;while(p<=f.z){g=BS(a.d.f,p);if(g.k.data.length>0){g=Ur(a,g);if
(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=HZ(h,c);j=CW(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.z)b.O=Ba(0,b.O-H(g)|0);if(p==f.z){f.O=Ba(0,f.O-H(g)|0);K$(a,a.d.s-H(g)|0);}d=d+1|0;}b=Di(l,e);f=new RV;f.pC=a;Nj(a,h,0,1,j,b,f);}DG(a);c=1;}break a;case 13:if(CX(Z(a)))FF(a);b=a.d;DY(BS(b.f,b.n));b=a.d;AAO(b.f,b.n,b.s);DG(a);c=Ci(a,a.d.n+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ABA(a);}return c;}
function YP(a,b){var c,d,e,f;a:{switch(b.bT){case 33:c=b.cg?Gz(a,HE(a.bj,a.M),b.bv):GT(a,2-Uf(Dd(a),a.M)|0,0,b.cJ,b.bv);break a;case 34:c=!b.cg?GT(a,Uf(Dd(a),a.M)-2|0,0,b.cJ,b.bv):Gz(a,((a.bj+Dd(a)|0)/a.M|0)-1|0,b.bv);break a;case 35:if(!G1(a,b.bv)&&!CQ(a,(EV(a)).G,b.bv)){c=0;break a;}c=1;break a;case 36:if(!G1(a,b.bv)&&!CQ(a,0,b.bv)){c=0;break a;}c=1;break a;case 37:c=b.cg;if(c&&b.cJ){HN(a);d=a.d.fI;e=d.cZ;if(e<=0)d=null;else{f=d.d$.data;c=e-1|0;d.cZ=c;d=f[c];}if(d===null)c=1;else{Ci(a,Kx(d),IG(d),0);G6(Z(a),
d.iZ);c=1;}break a;}c=QR(a,(-1),c,b.bv);break a;case 38:c=GT(a,(-1),b.cg,b.cJ,b.bv);break a;case 39:c=b.cg;if(c&&b.cJ){d=a.d.fI;e=d.cZ;if(e==(d.d6-1|0))d=null;else{f=d.d$.data;c=e+1|0;d.cZ=c;d=f[c];}if(d===null)c=1;else{Ci(a,Kx(d),IG(d),0);G6(Z(a),d.iZ);c=1;}break a;}c=QR(a,1,c,b.bv);break a;case 40:c=GT(a,1,b.cg,b.cJ,b.bv);break a;default:}c=0;}if(c&&b.bv){b=(Z(a)).bi;d=a.d;BY(b,d.n,d.s);}if(c)JO(a.d);return c;}
function HN(a){var b,c,d,e,f,g,h;b=a.d;c=b.fI;d=c.cZ;c=d<0?null:c.d$.data[d];if(c!==null&&b.n==Kx(c)&&a.d.s==IG(c))return;c=a.d;e=c.fI;b=new JJ;d=c.n;f=c.s;c=Z(a);b.kk=Di(d,f);g=AEn(c);b.iZ=g;g.cO=0;f=e.cZ;h=e.d6;if(f==(h-1|0))TK(e,b);else{d=f+1|0;while(d<h){Qz(e);d=d+1|0;}TK(e,b);}e.cZ=e.cZ+1|0;}
function DG(a){a.d.f.rp=Mw(Fa(a));}
function Sf(a,b){var c,d,e,f;a.uZ=null;a.c3.iY=Eb(0);V7(a.d);c=a.d;a.d=b;OW(c,null,null);OW(b,a,Fa(a));d=(Cc(a.eo.sW)).data;e=d.length;f=0;while(f<e){d[f].lD(c,b);f=f+1|0;}a.bj=Gv(b.i7*a.M);}
function RH(a,b){var c;c=Kr(a.d.f,b);if(c===null)return C(5);return c.p;}
function Cy(a){return a.d.vU;}
function Z(a){return a.d.nM;}
function Tt(a){var b;b=a.vG;if(b!==null)b.m(a);}
function Ov(){B.call(this);this.vz=null;}
function ADo(a,b){return b.bT!=121?0:1;}
function Qq(){var a=this;B.call(a);a.mS=null;a.pa=null;a.oq=null;}
function AFC(a,b){var c,d,e,f;if(b.cg&&b.bT==79){c=a.pa;if(c!==null&&b.bv){if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ABm(c,1);else{d=new UQ;b=$rt_globals.window.showDirectoryPicker();e=new UP;e.oT=c;e.oU=d;b.then(Bi(e,"f"),Bi(d,"f"));}}else Up(a.mS,a.oq);f=1;}else f=0;return f;}
var Bc=F(0);
function Ot(){B.call(this);this.tE=null;}
function AFK(a,b){LA(a.tE,b);}
function Ou(){B.call(this);this.n3=null;}
function MW(){B.call(this);this.o3=null;}
function MX(){B.call(this);this.un=null;}
function AHa(a,b,c,d){var e,f;b=a.un.cx;e=Dy((b.M*4|0)*d/150.0);f=Dy(c);if(e)E7(b,b.bj+e|0);if(f)HI(b,b.d.cT+f|0);return 1;}
function MV(){B.call(this);this.mD=null;}
function Zf(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=b;c=a.mD;d=c.es;e=c.cx;if(e!==d.ec?0:1){d=c.eT;f=new Rv;f.wG=c;if(!Fp(d.bO)){g=d.bO;b=b.u;h=new RQ;h.ey=d;h.bb=e;h.vk=f;h.f0=e;h.lB=c;h.iM=c;i=RU();f=h.bb.d;c=DI(f);f=Fv(f);j=h.bb.eo;if(Px(j,c,f)!==null){k=new QK;k.mw=h;k.mx=b;Dz(i,C(132),k);}if(KS(j,c,f)!==null){k=new QL;k.pO=h;k.pP=b;Dz(i,C(133),k);}if(Sx(j,c,f)!==null){f=new QJ;f.l5=h;f.l6=b;Dz(i,C(134),f);}f=new QI;f.ta=h;f.s_=b;Dz(i,C(135),f);FO(h);if(Ko()){if(!h.bb.ez){f=new PQ;f.tA=h;Dz(i,C(136),f);}f
=new PR;f.oj=h;Dz(i,C(137),f);if(!h.bb.ez){FO(h);if(Ko()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0){f=new PP;f.rk=h;Dz(i,C(138),f);}}}c=RU();l=O(Bv,4).data;l[0]=C(117);l[1]=C(130);l[2]=C(139);l[3]=C(140);m=l.length;n=0;while(n<m){j=l[n];o=new NZ;o.mt=h;o.mu=j;Dz(c,j,o);n=n+1|0;}E5(i,C(141),Hb(c));k=RU();l=O(Dh,3);p=l.data;f=h.iM;BU(f);j=new L9;j.nW=f;p[0]=Cv(C(142),j);f=h.iM;BU(f);j=new L$;j.o2=f;p[1]=Cv(C(143),j);f=h.iM;BU(f);j=new L8;j.um=f;p[2]=Cv(C(144),j);Ho(k,C(145),Gr(l),ARr);l=O(Dh,2);p
=l.data;f=h.f0;BU(f);j=new UO;j.pB=f;p[0]=Cv(C(146),j);f=h.f0;BU(f);j=new UN;j.sK=f;p[1]=Cv(C(147),j);E5(k,C(148),Gr(l));j=new NU;j.m_=h;Ho(k,C(149),j,ARr);if(h.bb.bw.c6.kz){l=O(Dh,2);p=l.data;j=new Re;j.nw=h;p[0]=Cv(C(150),j);j=new Rf;j.oK=h;p[1]=Cv(C(151),j);E5(k,C(152),Gr(l));}E5(i,C(153),Hb(k));E5(i,C(154),Zj(h));O2(g,b,Hb(i),PD(d,e));}}return 1;}
function Mv(){B.call(this);this.sw=null;}
function AL5(a,b){var c,d;c=a.sw;d=b.ba;return MK(c.charCodeAt(d)&65535);}
var WC=F(0);
function AAu(b,c){var d,e,f,g,h,i,j,k,l,m;d=O(Bv,8);e=Eb(8);f=B2(16);g=0;h=0;i=0;while(true){j=BF(i,b);if(j>0)break;k=j>=0?10:(c.lK(Ct(i))).jo;if(k==10){d=AAw(DL(f,0,g),d,h);e=S_(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Mx(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AAw(DL(f,0,g),d,h);j=i+1|0;if(j<b&&(c.lK(Ct(j))).jo==10){e=S_(1,e,h);i=j;}else e=S_(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new P6;d=XO(d,h);if(m.length!=h)e=KL(e,h);c.hv=d;c.vv=e;return c;}
function ADE(b){var c,d;c=H(b);BU(b);d=new ML;d.rl=b;return AAu(c,d);}
function UR(){var a=this;B.call(a);a.rS=null;a.sD=null;a.rz=null;}
function Gj(){var a=this;B.call(a);a.bv=0;a.cg=0;a.cJ=0;a.h4=0;}
function ARs(a,b,c,d){var e=new Gj();SD(e,a,b,c,d);return e;}
function SD(a,b,c,d,e){a.bv=d;a.cg=b;a.cJ=c;a.h4=e;}
function NX(){var a=this;Gj.call(a);a.dK=null;a.bT=0;a.sh=0;a.wt=0;a.ja=0;}
var AAH=F();
function Uf(b,c){return (b+(c/2|0)|0)/c|0;}
function OT(b,c,d){if(b<(2147483647/c|0))return Uf(V(b,c),d);return 0.5+c*b/d|0;}
function HE(b,c){return ((b+c|0)-1|0)/c|0;}
function Gv(b){return b+0.5|0;}
function Dy(b){return b+0.5|0;}
function Ff(b,c,d){return Ba(b,Be(c,d));}
function XC(b,c){return WX(b)/WX(c);}
function Ll(){var a=this;Gj.call(a);a.u=null;a.uS=null;}
var Sw=F(0);
function MB(){var a=this;B.call(a);a.tF=null;a.tG=null;}
function AHt(a,b){var c,d;c=a.tF;d=a.tG;$rt_globals.console.info("paste plain string "+b);b=Es(b);Dj(c.m0,b);CU(d);}
function S8(){B.call(this);this.ub=null;}
function ALv(a,b){a.ub.clipboardData.setData("text/plain",$rt_ustr(b));}
function U1(){var a=this;IP.call(a);a.wh=0;a.mh=0;}
var Xg=F(0);
function IT(b,c,d,e,f){Cb(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function SJ(){var a=this;B.call(a);a.c6=null;a.fg=null;a.c4=null;a.cB=null;a.bW=0.0;a.b7=0;a.ec=null;a.jt=null;a.dQ=null;a.sV=null;a.uK=null;a.uL=null;}
function IA(a){var b;b=a.ec;if(b!==null)b.rU();}
function IZ(a){var b;b=a.ec;if(b!==null)b.uA();}
function HM(a,b){IZ(a);a.ec=b;IA(a);}
function KU(a){return a.c6.da;}
function HU(a,b){return F5(a.c6,b.iD,Cn(b.hb,a.bW),400,0);}
function Cj(a,b){return Cn(b,a.bW);}
var QV=F();
function AF9(a,b){var c,d,e;c=b.cg;d=c&&!b.bv&&!b.cJ&&!b.h4?1:0;a:{if(d){d=b.bT;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bv&&!c&&!b.cJ&&!b.h4?1:0;d=d&&b.bT==46?1:0;}b:{if(!d){e=b.bT;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.ja=1;}return 0;}
function QU(){B.call(this);this.ns=null;}
function AD0(a,b){var c;c=a.ns.ec;return c!==null&&c.jw(b)?1:0;}
var HO=F(0);
function Vh(){B.call(this);this.c1=null;}
function WF(a,b){Qu(a.c1,0,b);}
function T1(){var a=this;B.call(a);a.cz=null;a.b_=null;a.h1=null;a.im=null;a.k9=null;a.iF=null;}
function O2(a,b,c,d){var e,f;e=a.cz;f=e.cB;if(V(f.b,f.a)&&e.bW!==0.0){if(a.h1!==null&&!Fp(a)){a.iF=d;a.im=HU(a.cz,a.h1);e=Ni(a,b,c,null);b=new TR;b.rs=a;e.sB=b;HM(a.cz,a);return;}b=new BI;W(b);J(b);}c=new Df;Br(c,C(155));J(c);}
function Dq(a){var b;if(Fp(a)){b=a.cz;if(b.ec===a)b.ec=null;R$(a,null);a.iF.t();a.iF=ARl;}}
function U0(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new RE;f.b2=AHz();f.e7=new Bp;f.fA=new Bp;f.cc=ARt;f.hE=(-1);f.h8=1;f.fv=1;c=c.ly();Ks(f);f.cc=c;Pw(f,a.k9);OU(f,a.im,a.cz);if(d===null)g=b.b;else{g=b.b;g=a.cz.cB.b<((g+(EH(d)).b|0)+(EH(f)).b|0)?g-(EH(f)).b|0:(g+(EH(d)).b|0)-d.eI|0;}h=b.a;b=a.cz.cB;i=Ba(0,Be(g,b.b-(EH(f)).b|0));g=Ba(0,Be(h,b.a-(EH(f)).a|0));Bn(f.b2.cI,i,g);j=f.cv+f.eI|0;k=f.cc.data;h=k.length;l=0;m=j;while(l<h){c=k[l];b=c.d5;b.b=i+j|0;b.a=g+m|0;if(!f.fv){if(!c.dq.b)WT();j=j+(c.dq.b+f.cv|0)|0;}else
{if(!c.dq.a)WT();m=m+(c.dq.a+f.cv|0)|0;}l=l+1|0;}b=new Vm;b.n$=a;b.n_=f;b.oa=e;f.on=b;Bt(a.b_,f);return f;}
function Ni(a,b,c,d){return U0(a,b,c,d,null);}
function AHR(a,b){var c;if(!Fp(a))return 0;a:{switch(b.bT){case 27:Dq(a);c=1;break a;default:}c=0;}return c;}
function Yt(b,c){var d,e,f;d=b.d5;e=c.cv;f=c.eI;return Cd((d.b-(e*3|0)|0)-f|0,(d.a-e|0)-f|0);}
function R$(a,b){var c,d;c=a.b_.j-1|0;a:{while(true){if(c<0)break a;d=Bo(a.b_,c);if(b===d)break;E6(a.b_,c);d.fl=CY(d.fl,null);Bn(d.e7,0,0);d.cc=ARt;d.hE=(-1);RX(d.b2);c=c+(-1)|0;}}}
function Fp(a){return a.b_.j<=0?0:1;}
function OA(){var a=this;B.call(a);a.dO=null;a.jj=0.0;a.gm=0.0;a.fq=0;}
function U$(a){return a.dO.bo.a;}
function RM(a){return a.dO.bo.b;}
function AAe(a,b,c){var d,e,f;if(a.fq){d=a.dO;e=c.b;f=c.a;c=d.cI;BC(b,c.b+e|0,c.a+f|0,d.bo,d.eQ);}}
function JQ(){var a=this;B.call(a);a.lp=null;a.vc=null;a.vo=0.0;a.ow=0;a.vw=0;a.vY=0;a.qn=0;a.wX=0;a.d0=0.0;a.dC=0.0;a.vn=0.0;a.ld=0.0;a.vs=0;a.mA=null;}
function Fi(a){return Dy(a.d0+a.dC);}
function OK(a,b){return Dy((a.d0+a.dC)*b);}
function VA(){var a=this;B.call(a);a.eM=null;a.f=null;a.kR=null;a.nM=null;a.fI=null;a.hC=null;a.c8=null;a.vU=null;a.n=0;a.s=0;a.gb=0;a.gL=null;a.gv=null;a.lR=null;a.j8=null;a.dT=0;a.fJ=0;a.fX=0;a.gT=AAr;a.rX=AAr;a.s$=AAr;a.uW=0;a.vQ=0;a.cT=0;a.i7=0.0;a.ek=0;}
function ARu(a,b,c){var d=new VA();WO(d,a,b,c);return d;}
function AEh(a,b,c){var d=new VA();ABv(d,a,b,c);return d;}
function WO(a,b,c,d){ABv(a,b.hv,c,d);}
function ABv(a,b,c,d){var e,f,g,h,i,j;b=b.data;a.nM=AC_();e=new SC;e.d$=O(JJ,16);e.d6=0;e.cZ=(-1);a.fI=e;a.gL=null;a.gv=Bz();a.lR=FQ();a.j8=Bz();a.dT=1;a.fJ=1;a.fX=1;a.cT=0;a.i7=0.0;a.ek=0;a.eM=d;a.kR=c;c=new Qr;f=b.length;g=O(C1,Ba(1,f));if(!f)g.data[0]=Xl(C(5));h=g.data;i=0;while(i<f){h[i]=Xl(b[i]);i=i+1|0;}d=new Ol;e=new JG;OE(e);d.dR=e;c.dG=d;c.c_=FQ();c.cP=FQ();c.gB=Bz();if(!h.length){c=new BI;W(c);J(c);}c.v=g;j=Tm(c);c.cC=AAp(AMd(IH(0,j,0),null,null));a.f=c;}
function DI(a){var b;b=a.kR;if(b===null){b=a.eM;if(b===null)b=C(117);else{b=b.e3;b=b===null?C(117):!DA(b,C(156))&&!DA(b,C(157))&&!DA(b,C(158))&&!DA(b,C(159))&&!DA(b,C(160))&&!DA(b,C(161))?(DA(b,C(162))?C(130):DA(b,C(163))?C(164):!DA(b,C(165))?C(117):C(140)):C(139);}}return b;}
function Fv(a){var b;b=a.eM;return b===null?null:b.hM;}
function Go(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.fJ=3;a.fX=3;a.dT=3;c=CP(b[0]);d=D5(b[1]);if((CP(b[2])).data[0]==4){e=Gy(D5(b[3]));Dn(a.lR,C(166),e);Kj(a.f,c,d);}else if(b.length<5)Kj(a.f,c,d);else{f=CP(b[3]);g=f.data;h=D5(b[4]);MY(a.f,c,d,f,h,0);SW(a,HZ(f,g.length),KK(h));}if(a.ek){e=DZ(a);i=Jg(D1(),a.gT);j=new R;T(j);L(FC(L(L(j,e),C(167)),i),C(168));$rt_globals.console.info($rt_ustr(S(j)));}e=a.hC;if(e!==null)Tt(e);}
function JO(a){var b;Rm(a,Di(a.n,a.s),HB(a.f,a.n,a.s));if(!(a.gL!==null&&!DO(a.gv))){b=a.s;if(b>0)Rm(a,Di(a.n,b-1|0),HB(a.f,a.n,a.s-1|0));}}
function Rm(a,b,c){var d,e,f,g,h,i,j,k;V7(a);d=B7(a.f.c_,c);if(d!==null)c=d;a:{e=B7(a.f.cP,c);if(e!==null){a.gL=Kr(a.f,c);c=BL(e);while(true){if(!BM(c))break a;f=BP(c);Bt(a.gv,Kr(a.f,f));}}}c=a.hC;if(c!==null){g=b.X;h=b.be;b=c.eo;f=DI(c.d);e=Fv(c.d);i=(Cc(b.to)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.tq(f,e)){b=b.xq;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new Qd;e.va=c;e.u9=f;e.u$=g;e.u_=h;b.qO(f,g,h,e,c.g6);}}}
function V7(a){a.gL=null;GF(a.gv);}
function SW(a,b,c){var d,e,f,g,h;if(a.c8!==null){a.s$=D1();d=a.f.b3;e=a.c8;f=new Oc;f.qf=a;g=O(B,3);h=g.data;h[0]=b;h[1]=c;b=Bu(1);b.data[0]=d;h[2]=b;En(e,f,C(169),g);}}
function OW(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.hC=b;a.c8=c;if(c===null){d=a.f.v.data;e=d.length;f=0;while(f<e){R7(d[f]);f=f+1|0;}}else if(a.dT==1){a.gT=D1();b=DI(a);e=BB(b,C(130));f=BB(b,C(140));d=EM(a.f);g=d.data.length;h=!e?5120:10240;i=WE(b);if(f){j=a.c8;b=new Qk;b.mc=a;k=O(B,2);l=k.data;l[0]=d;d=Bu(1);d.data[0]=i;l[1]=d;UK(j,b,0,C(170),k);a.dT=2;}else if(g<=h)Jn(a,d,i);else if(!e){U9(a,KK(d),i);Jn(a,d,i);}else{U9(a,KK(d),i);m=KK(d);c=a.c8;j=new O4;j.qh=a;k=O(B,2);l=k.data;l[0]=m;m=Bu(1);m.data[0]=i;l[1]=m;En(c,
j,C(171),k);a.fJ=2;Jn(a,d,i);}}}
function U9(a,b,c){var d,e;d=a.c8;e=new Ui;e.qB=a;En(d,e,C(172),G(B,[b,Fu([c,250])]));a.fX=2;}
function Jn(a,b,c){var d,e,f,g;d=a.c8;e=new Ml;e.oc=a;f=O(B,2);g=f.data;g[0]=b;b=Bu(1);b.data[0]=c;g[1]=b;En(d,e,C(170),f);a.dT=2;}
function DZ(a){var b;b=a.eM;return b===null?C(5):Ts(b);}
function HV(a){var b,c,d,e,f,g;if(a.ek){b=DZ(a);c=new R;T(c);L(L(c,b),C(173));$rt_globals.console.info($rt_ustr(S(c)));}b=DI(a);if(b===null)d=null;else{a:{e=(-1);switch(JY(b)){case -1655966961:if(!B1(b,C(140)))break a;e=3;break a;case 3401:if(!B1(b,C(164)))break a;e=2;break a;case 98723:if(!B1(b,C(139)))break a;e=1;break a;case 3254818:if(!B1(b,C(130)))break a;e=0;break a;case 3556653:if(!B1(b,C(117)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(174);break b;case 2:d=C(175);break b;case 3:d
=C(176);break b;case 4:d=C(177);break b;default:d=null;break b;}d=C(178);}}if(d===null)Tt(a.hC);else{a.gT=D1();if(!B1(d,C(176))){b=a.c8;f=new Sa;f.sY=a;g=O(B,1);g.data[0]=EM(a.f);En(b,f,d,g);}else{b=a.c8;c=new Sb;c.rJ=a;g=O(B,1);g.data[0]=EM(a.f);UK(b,c,0,d,g);}}}
function AAi(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(a.ek){b=DZ(a);c=new R;T(c);L(L(c,b),C(179));$rt_globals.console.info($rt_ustr(S(c)));}b=DI(a);if(b!==null&&!B1(C(117),b)){if(B1(C(140),b)){HV(a);GC(a.f);}else{c=a.f.cC;d=Or(c,c.cA);if(d===null){KJ(a);GC(a.f);return;}e=Fu([CM(d),CK(d),d.bG.el]);f=EM(a.f);g=Bu(1);g.data[0]=WE(b);c=a.f.dG;if(c.ev===null){h=Bu(0);i=B2(0);}else{j=ANc(AEc(d.bX,c.dR),d);Mk(j);h=j.i4;i=j.jk;}k=a.f.b3;d=a.c8;c=new Lx;c.se=a;l=O(B,6);m=l.data;m[0]=f;m[1]=g;m[2]=e;e=Bu(1);e.data[0]=k;m[3]
=e;m[4]=h;m[5]=i;En(d,c,C(180),l);}}else GC(a.f);}
function KJ(a){var b;b=ANc(a.f.dG,null);Mk(b);SW(a,b.i4,b.jk);}
function Vn(){var a=this;B.call(a);a.oR=null;a.uq=null;a.me=null;a.to=null;a.sW=null;a.sF=null;}
function KS(a,b,c){return PW(a,Cc(a.oR),b,c);}
function Px(a,b,c){return PW(a,Cc(a.uq),b,c);}
function PW(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.tq(c,d))return g.wf;f=f+1|0;}return null;}
function Sx(a,b,c){var d,e,f,g;d=(Cc(a.me)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.tq(b,c))return g.v6;f=f+1|0;}return null;}
function EJ(){var a=this;B.call(a);a.bN=0;a.cV=null;a.ed=null;a.by=null;a.dl=0;a.cY=0;}
var ARv=0;var ARp=0;function Wk(a,b,c,d,e,f,g){var h,i,j,k,l;h=a.by;i=h===b&&!h.f2?0:1;if(i){a.by=b;Jk(b,d.da,a.cV.jA);}h=a.by;j=h===null?0:Eo(h)<f?HE(Eo(a.by),1024):HE(f,1024)+1|0;k=j<=a.dl?0:1;if(k)a.dl=j;if(!(!i&&!k)){if(ARv){l=b.e5;$rt_globals.console.info("fMeasure"+l.data);ARv=0;}if(!ARp){h=c.c2;b="alphabetic";h.textBaseline=b;}else{b=c.c2;h="top";b.textBaseline=h;}a.cY=g/1024|0;while(true){b=a.ed;if(b.j>=a.dl)break;Bt(b,Gt(d));}f=0;while(f<a.dl){HG(a,c,e,a.cY+f|0);f=f+1|0;}a.by.f2=0;}if(!DO(a.ed)&&g<=
Eo(a.by)){j=g/1024|0;f=a.cY;if(j!=f){f=j-f|0;if(f<0)f= -f|0;if(f>=a.dl){f=0;while(f<a.dl){HG(a,c,e,j+f|0);f=f+1|0;}a.cY=j;}else{while(true){g=a.cY;if(g>=j)break;HG(a,c,e,g+a.dl|0);a.cY=a.cY+1|0;}while(true){g=a.cY;if(g<=j)break;HG(a,c,e,g-1|0);a.cY=a.cY-1|0;}}}}}
function JA(b,c){return (c-Fi(b)|0)/2|0;}
function LO(b,c){return JA(b,c)+b.qn|0;}
function HG(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;Fg(b);e=a.by.e5;f=d*1024|0;g=N5(a,f);if(g>=a.by.k.data.length)return;h=!g?0.0:e.data[g-1|0];i=f;j=h-i+a.bN;k=a.cV.jA;a:{while(true){l=a.by.k.data;if(g>=l.length)break a;m=k.data;n=l[g];o=m[Ih(n)];p=!ARp?LO(o,c):JA(o,c);m=e.data;CF(b,o);Ei(b,n.p,j,p);j=m[g]-i+a.bN;if(j>1024.0)break;g=g+1|0;}}Ek(Bo(a.ed,d%a.dl|0),b);}
function Xx(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp;if(DO(a.ed))return;if(!a.dl)return;if(g>Eo(a.by))return;o=a.by;p=o.dW;q=o.k;r=g/1024|0;s=N5(a,g);t= -a.bN|0;u=f;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=e)break;y=p.data;o=Bo(a.ed,r%a.dl|0);z=v[s];ba=y[s]+a.bN|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=Be(be,ba)-g|0;if(bc&&x)bf=bf+a.bN|0;bg=i!==null?0:1;b:{if(!bg){bh=!x?a.bN:2*a.bN|0;bi=i.b;w
=i.a;if(!(bi<w&&g<=w&&(g+bf|0)>(bi+bh|0)?0:1)){bh=0;break b;}}bh=1;}c:{if(!bg){bj=!x?a.bN:2*a.bN|0;if(g>=i.b&&(g+bf|0)<=(i.a+bj|0)?1:0){bk=1;break c;}}bk=0;}bl=null;if(l&&!m)bl=h.bB.ht;if(z===j)bl=h.bB.nH;bm=BL(k);d:{while(BM(bm)){if(BB(BP(bm),z)){bi=1;break d;}}bi=0;}if(bi)bl=h.bB.us;if(n!==null){v=n.wo;if(v===null)bj=0;else{v=v.data;bj=s>=v.length?0:v[s];}bl=Wf(h.dy,h,bj,n.jF);}if(!bk&&!bh){i.a=Be(i.a,Eo(a.by));Zh(a,d,t+c|0,b,f,h,o,z,bf,g>=i.b?bf:(Be(ba,be)-i.b|0)-(!x?a.bN:0)|0,(g+bf|0)<=(i.a+(!x?a.bN:2*a.bN
|0)|0)?0:(Be(ba,be)-i.a|0)-(!x?a.bN:0)|0,g-bb|0,bl);}else{bm=h.kW.data[z.bK];bn=bk?h.bB.iC:RT(bl,Ma(h,bm.jf));Cb(a.cV.iB,g-bb|0,0.0,bf,u);Bn(a.cV.iw,bf,f);GR(a.cV,d,o,t+c|0,b,bm.hu,bn);}if((z.bE&12)>0){bi=t+c|0;DP(d,1);o=a.cV;z=o.jy;z.b=bf;w=b+o.tR|0;bj=w-o.t4|0;bo=o.re;bp=w+bo;bm=o.gN;Tf();AA3(d,bi,bj,z,bo,bp,bm,ARw.hd.hu);DP(d,0);}g=g+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function Zh(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.kW.data[h.bK];o=n.hu;p=RT(m,Ma(f,n.jf));q=f.bB.iC;f=a.cV;r=f.iB;s=f.iw;t=l;u=i-j|0;v=u;w=e;Cb(r,t,0.0,v,w);Bn(s,u,e);GR(a.cV,b,g,c,d,o,p);l=l+i|0;Cb(r,l-k|0,0.0,k,w);Bn(s,k,e);f=a.cV;c=c+i|0;GR(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cb(r,t,0.0,i,w);Bn(s,i,e);GR(a.cV,b,g,c-j|0,d,o,q);}
function RT(b,c){if(b!==null)c=b;return c;}
function N5(a,b){var c,d,e,f,g,h,i;c=a.by;d=c.e5;e=0;f=c.k.data.length;g=b;b=BF(e,f);if(b>0){c=new BI;W(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BF(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function VI(a){a.by=null;DN(a.ed,new S3);GF(a.ed);}
function XE(a,b,c,d,e,f,g,h,i){var j,k;j=Eo(a.by);if(j)j=j+a.bN|0;if(!j)j=j-a.bN|0;k=Ba( -a.bN|0,j-g|0);if(k>=h)return;Bn(f,h-k|0,e);BC(b,c+k|0,d,f,i);}
function XK(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a:{h=c.data;i=O(EJ,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=BS(g,e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.by===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}c=i.data;e=0;f=c.length;while(e<f){if(c[e]===null){if(j>=k)p=null;else{b=j+1|0;p=h[j];j=b;}while(j<k&&p===null){b=j+1|0;p=h[j];j=b;}if(p!==null){c[e]=p;h[j-1|0]=null;}else{o=new EJ;o.bN=3;o.ed=Bz();o.cY=0;o.cV=d;c[e]=o;}}e=e+1|0;}while(j<k){p=h[j];if(p!==null)VI(p);j=j+1|0;}return i;}
function Zk(){ARp=0;}
function ABq(){var a=this;B.call(a);a.eE=null;a.cF=null;a.dH=null;a.d3=null;a.hg=null;a.hh=null;}
function Tv(){var a=new ABq();AGR(a);return a;}
function AGR(a){a.eE=new Bp;a.cF=new Bp;a.dH=new Bp;a.d3=new Bp;a.hg=new B4;a.hh=new B4;}
function P1(a){var b;b=a.cF;return !V(b.b,b.a)?0:1;}
function GY(a,b){return Ft(b,a.dH,a.d3);}
function Hj(a,b,c,d){var e,f,g,h,i;e=GY(a,b);f=Ft(b,a.eE,a.cF);if(!e&&!f)return null;if(!f){if(!d)c.m(Uv(a,b.b-a.dH.b|0));else c.m(Ow(a,b.a-a.dH.a|0));}g=!d?a.eE.b+(a.cF.b/2|0)|0:a.eE.a+(a.cF.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new Q4;b.tN=a;b.tO=c;b.tM=i;}else{b=new Q3;b.n7=a;b.n5=c;b.n6=i;}return b;}
function F6(a,b,c){if(b!==null&&c!==null){Fc(a.hg,c);Fc(a.hh,b);return;}}
function Ye(b,c){var d;d=new SH;d.qp=b;d.uD=c;return d;}
function Ow(a,b){var c,d,e;c=a.d3.a;d=a.cF.a;e=c-d|0;return Ye(Be(Ba(0,b-(d/2|0)|0),e),e);}
function Uv(a,b){var c,d,e;c=a.d3.b;d=a.cF.b;e=c-d|0;return Ye(Be(Ba(0,b-(d/2|0)|0),e),e);}
function Vy(a,b,c,d,e,f,g){US(a,b,c,d,e,f,g,1);}
function PB(a,b,c,d,e,f,g){US(a,b,c,d,e,f,g,0);}
function US(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bn(a.d3,0,0);Bn(a.cF,0,0);}else{i=Be(g*3|0,d);j=Ba(OT(d,d,e),i);e=e-d|0;i=d-j|0;i=i?OT(b,i,e):0;if(!h){k=a.eE;k.b=i+c|0;k.a=f-g|0;l=a.cF;l.b=j;l.a=g;l=a.dH;l.b=c;l.a=k.a;k=a.d3;k.b=d;k.a=g;}else{k=a.eE;k.b=f-g|0;k.a=i+c|0;l=a.cF;l.b=g;l.a=j;l=a.dH;l.b=k.b;l.a=c;k=a.d3;k.b=g;k.a=d;}}}
function G9(a,b){var c;c=a.dH;BC(b,c.b,c.a,a.d3,a.hg);}
function Hd(a,b){var c,d;c=a.cF;c.b=c.b-2|0;c.a=c.a-2|0;d=a.eE;BC(b,d.b+1|0,d.a+1|0,c,a.hh);b=a.cF;b.b=b.b+2|0;b.a=b.a+2|0;}
function HA(a,b,c){return GY(a,b)&&Fj(c)?1:0;}
function X1(){var a=this;B.call(a);a.wu=20;a.eR=null;a.eh=null;a.hK=0.0;a.hD=null;a.lc=0;a.ib=0;a.ci=null;a.iY=null;a.d2=null;a.e0=null;a.eX=0;}
function AMp(){var a=new X1();AMI(a);return a;}
function AMI(a){a.wu=20;a.eR=new Bp;a.eh=new Bp;a.ci=Bz();a.iY=Eb(0);}
function Z$(a,b,c,d,e){var f,g,h,i,j,k;f=c/20|0;g=a.ci;h=Bo(g,f%g.j|0);i=a.eR;j=V(a.ci.j,a.ib);f=h.ee.a;k=((h.iE.a-(b%j|0)|0)+j|0)%j|0;if((k+f|0)>j)k= -(b%Kk(h.Z)|0)|0;b=c%h.dm|0;f=h.F;k=k+V(b,f)|0;if(k<( -f|0))k=k+j|0;Bn(h.de,h.ee.b,f);g=h.dU;b=c%h.dm|0;c=h.F;Cb(g,0.0,V(b,c),h.ee.b,c);Ed(h,e,k,i,d.nI,d.l0);}
function RL(a,b,c,d){var e,f,g,h,i,j;e=a.ci.j;while(true){f=a.ci.j;g=V(f,a.ib);if(g>(d+a.lc|0))break;h=Cd(0,g);i=new OD;g=a.eh.b;f=a.lc;j=a.hD;i.de=new Bp;i.dU=new B4;i.iE=h;i.dm=20;i.F=f;i.ee=Cd(g,20*f|0);i.fP=LO(j,f);if(i.Z===null)i.Z=Gt(b);Bt(a.ci,i);}if(f==e)return;Qs(a,c);}
function Qs(a,b){var c,d,e,f,g,h,i,j,k;c=a.ci;d=c.j;e=V((b/(d*20|0)|0)+1|0,d)*20|0;c=BL(c);while(BM(c)){f=BP(c);g=a.d2;h=a.hK;Fg(g);i=0;while(true){j=f.dm;if(i>=j)break;k=e-V(d,j)|0;if(k<b)k=e;e=k+1|0;Fx(f,g,DX(e),V(f.F,i)+f.fP|0,h);i=i+1|0;}Ek(f.Z,g);f.mf=g.jd;}}
function IO(a){DN(a.ci,new Lw);GF(a.ci);a.d2=CY(a.d2,null);a.e0=CY(a.e0,null);}
function MQ(){B.call(this);this.wQ=null;}
function MP(){B.call(this);this.lV=null;}
function AC$(a,b){var c;c=a.lV;E7(c,GN(b,IQ(c)));}
function MO(){B.call(this);this.p$=null;}
function ACl(a,b){var c;c=a.p$;HI(c,GN(b,RR(c)));}
function Te(){var a=this;B.call(a);a.iB=null;a.iw=null;a.jy=null;a.gN=null;a.jA=null;a.re=0.0;a.uM=0;a.tR=0;a.t4=0;a.lu=0;}
function GR(a,b,c,d,e,f,g){var h,i;h=a.iw;if(h.b&&h.a){i=a.iB;if(i.bV!==0.0&&i.Y!==0.0){Ev(b,d,e,h,i,c,f,g,a.lu);return;}}}
function MN(){B.call(this);this.s7=null;}
function ACk(a){var b,c;b=a.s7;c=b.hj?0:1;b.hj=c;b=new R;T(b);IC(L(b,C(181)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function MU(){B.call(this);this.nx=null;}
function AFB(a){var b,c;b=a.nx;c=b.iH^1;b.iH=c;b=new R;T(b);IC(L(b,C(182)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function MT(){B.call(this);this.rd=null;}
function ANy(a){var b,c,d,e,f;b=a.rd;c=(b.dn+3|0)%6|0;b.dn=c;d=b.e6.data;e=d.length;f=0;while(f<e){b=d[f];b.bN=c;b=b.by;if(b!==null)b.f2=1;f=f+1|0;}}
function MS(){B.call(this);this.uB=null;}
function AHH(a){var b;b=a.uB;b.bA=b.bA?0:1;IO(b.c3);b.c3=AMp();RB(b,b.V,b.cs,b.bw.bW);}
function MR(){B.call(this);this.ne=null;}
function AJN(a){var b;b=a.ne;b.h7=b.h7?0:1;}
function MM(){B.call(this);this.qw=null;}
function AM2(a){var b;b=a.qw;b.kZ=b.kZ?0:1;}
var AAy=F(0);
function TM(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=CW(b,f+g|0);C6(c,0,d,f,g);return d;}
function JK(b,c,d){C6(b,c,d,0,d.data.length);return d;}
function Qg(b,c,d){var e;if(c>0)C6(b,0,d,0,c);e=d.data.length;if(c<e)C6(b,c+1|0,d,c,e-c|0);return d;}
function Yw(b,c,d,e){var f;if(c>0)C6(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)C6(b,d,e,c,f-d|0);}return e;}
function Gr(b){var c;c=new TY;c.qy=b;return c;}
function XO(b,c){if(b.data.length!=c)b=CW(b,c);return b;}
function AAw(b,c,d){var e;e=c.data.length;if(e==d)c=CW(c,e*2|0);c.data[d]=b;return c;}
function S_(b,c,d){var e;e=c.data.length;if(e==d)c=KL(c,e*2|0);c.data[d]=b;return c;}
function KK(b){return Mx(b,b.data.length);}
var W6=F();
function Mx(b,c){var d,e,f,g;b=b.data;d=B2(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function KL(b,c){var d,e,f,g;b=b.data;d=Eb(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function HZ(b,c){var d,e,f,g;b=b.data;d=Bu(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function CW(b,c){var d,e,f,g;d=b.data;e=Z6(Hg(Bw(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function GG(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BI;W(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Xv(b,c,d,e){var f,g;if(c>d){e=new BI;W(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function X9(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AQL;e=O(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.tY(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ZA(b,c){return Si(b,0,b.data.length,c);}
function Si(b,c,d,e){var f,g,h,i,j;f=BF(c,d);if(f>0){g=new BI;W(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function B4(){var a=this;B.call(a);a.bk=0.0;a.bD=0.0;a.Y=0.0;a.bV=0.0;}
function Cb(a,b,c,d,e){a.bk=b;a.bD=c;a.Y=d;a.bV=e;}
function Fc(a,b){a.bk=b.bk;a.bD=b.bD;a.Y=b.Y;a.bV=b.bV;return a;}
function ANf(a,b){if(a===b)return 1;return b!==null&&Bw(a)===Bw(b)&&Ji(a,b)?1:0;}
function Ji(a,b){return b.bk===a.bk&&b.bD===a.bD&&b.Y===a.Y&&b.bV===a.bV?1:0;}
var Li=F(0);
function Fj(a){return Dx(a,null);}
function O7(){B.call(this);this.qJ=null;}
function AGn(a){IA(a.qJ);}
function O6(){B.call(this);this.t$=null;}
function AB8(a){IZ(a.t$);}
var J5=F(0);
function W9(){var a=this;D8.call(a);a.ce=null;a.j=0;}
function Bz(){var a=new W9();AFD(a);return a;}
function AFD(a){a.ce=O(B,10);}
function Im(a,b){var c,d;c=a.ce.data.length;if(c<b){d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.ce=CW(a.ce,d);}}
function Bo(a,b){H_(a,b);return a.ce.data[b];}
function AJq(a){return a.j;}
function Bt(a,b){var c,d;Im(a,a.j+1|0);c=a.ce.data;d=a.j;a.j=d+1|0;c[d]=b;a.bJ=a.bJ+1|0;return 1;}
function Qu(a,b,c){var d,e,f;Oj(a,b);Im(a,a.j+1|0);d=a.j;e=d;while(e>b){f=a.ce.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.ce.data[b]=c;a.j=d+1|0;a.bJ=a.bJ+1|0;}
function E6(a,b){var c,d,e,f;H_(a,b);c=a.ce.data;d=c[b];e=a.j-1|0;a.j=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.bJ=a.bJ+1|0;return d;}
function TV(a,b){var c;c=I8(a,b);if(c<0)return 0;E6(a,c);return 1;}
function GF(a){Xv(a.ce,0,a.j,null);a.j=0;a.bJ=a.bJ+1|0;}
function Xw(a,b,c){var d,e,f,g,h,i;Oj(a,b);if(c.dz())return 0;Im(a,a.j+c.cr()|0);d=c.cr();e=a.j;f=e-1|0;while(f>=b){g=a.ce.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.j=e+d|0;h=c.bS();i=0;while(i<d){g=a.ce.data;e=b+1|0;g[b]=h.bL();i=i+1|0;b=e;}a.bJ=a.bJ+1|0;return 1;}
function H_(a,b){var c;if(b>=0&&b<a.j)return;c=new BT;W(c);J(c);}
function Oj(a,b){var c;if(b>=0&&b<=a.j)return;c=new BT;W(c);J(c);}
function DN(a,b){var c;c=0;while(c<a.j){b.m(a.ce.data[c]);c=c+1|0;}}
var VZ=F(0);
var ARl=null;function AAL(){ARl=new MC;}
function Vw(){var a=this;B.call(a);a.cI=null;a.bo=null;a.eQ=null;a.g$=null;}
function AHz(){var a=new Vw();AKb(a);return a;}
function AKb(a){a.cI=new Bp;a.bo=new Bp;a.eQ=new B4;a.g$=new B4;}
function RX(a){Bn(a.bo,0,0);}
function I_(a){var b;b=a.bo;return V(b.b,b.a)?0:1;}
function G8(a,b){return Ft(b,a.cI,a.bo);}
var ED=F();
function I6(){ED.call(this);this.wf=null;}
function RF(){ED.call(this);this.v6=null;}
function O0(){ED.call(this);this.xq=null;}
var F$=F(0);
var Rl=F(0);
var OM=F(0);
var ARm=0.0;function RW(b){Cb(b,1.0471975803375244,0.75,1.25,0.375);}
function WL(){ARm=XC(XC(0.5,0.375),4.0);}
var ZE=F();
function Jd(){B.call(this);this.wH=null;}
var AQN=null;var ARx=null;function AGS(){AGS=Bg(Jd);ANm();}
function AEZ(a){var b=new Jd();Wn(b,a);return b;}
function Wn(a,b){AGS();a.wH=b;}
function ANm(){AQN=AEZ(C(183));ARx=AEZ(C(184));}
function QE(){B.call(this);this.tg=null;}
function Dx(a,b){var c,d,e;c=a.tg;d=c.qx;e=c.dj;if(BB(b,d))b=d;else{e=e.style;if(b!==null&&H(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}c.qx=b;return 1;}
function AA2(){var a=this;B.call(a);a.bs=null;a.bi=null;a.cO=0;}
function AC_(){var a=new AA2();AM6(a);return a;}
function AEn(a){var b=new AA2();AIO(b,a);return b;}
function AM6(a){a.bs=new F_;a.bi=new F_;}
function AIO(a,b){a.bs=new F_;a.bi=new F_;G6(a,b);}
function G6(a,b){SO(a.bs,b.bs);SO(a.bi,b.bi);a.cO=b.cO;}
function J_(a,b,c){BY(a.bi,b,c);if(!a.cO)BY(a.bs,b,c);}
function Ox(a,b){BY(a.bs,b,0);BY(a.bi,b+1|0,0);}
function Dt(a){if(Qx(a.bs,a.bi)>0)return a.bi;return a.bs;}
function EZ(a){if(Qx(a.bs,a.bi)<0)return a.bi;return a.bs;}
function ZH(a,b){var c,d,e,f;c=a.bs;d=c.z;e=a.bi;if(d==e.z&&c.O==e.O?1:0)return null;c=Dt(a);e=EZ(a);d=c.z;if(d<=b){f=BF(b,e.z);if(f<=0)return Cd(b<=d?c.O:0,f>=0?e.O:(-1));}return null;}
function CX(a){var b,c;b=a.bs;c=a.bi;return (b.z==c.z&&b.O==c.O?1:0)?0:1;}
function AAG(a,b){var c,d;if(!CX(a))return 0;c=Dt(a);d=EZ(a);return c.z<=b&&b<d.z?1:0;}
function SC(){var a=this;B.call(a);a.d$=null;a.d6=0;a.cZ=0;}
function TK(a,b){var c,d,e;c=a.d6;d=a.d$;if(c==d.data.length)a.d$=CW(d,c+16|0);d=a.d$.data;e=a.d6;a.d6=e+1|0;d[e]=b;}
function Qz(a){var b,c,d;b=a.cZ;c=a.d6-1|0;if(b==c)a.cZ=b-1|0;d=a.d$.data;a.d6=c;d[c]=null;}
function Qr(){var a=this;B.call(a);a.v=null;a.cC=null;a.dG=null;a.c_=null;a.cP=null;a.gB=null;a.hS=null;a.b3=0;a.kg=0;a.rp=0.0;}
function BS(a,b){return a.v.data[b];}
function Ch(a){return a.v.data.length;}
function Tm(a){return Em(a,Ch(a));}
function E8(a,b){return a.v.data[b].G;}
function AAO(a,b,c){var d,e,f,g,h;d=a.v;e=d.data;f=e[b];d=CW(d,e.length+1|0);e=d.data;a.v=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Dk(O(B_,0));a.v.data[b+1|0]=f;}else if(c==f.G){e[b]=f;e[b+1|0]=Dk(O(B_,0));}else{e=(G2(f,c)).data;d=a.v.data;d[b]=e[0];d[b+1|0]=e[1];}EY(a,b,c,0,C(111));}
function JV(a,b){var c,d,e,f,g,h,i;c=a.v.data;d=c[b];e=c[b+1|0];f=Dk(TM(d.k,e.k));g=a.v;h=g.data.length;if(b<h&&b>=0){i=O(C1,h-1|0);c=i.data;Qg(g,b,i);c[b]=f;a.v=i;return;}d=new Bq;W(d);J(d);}
function LK(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.v.data;if(!(c<d[b].G?0:1)){d=(BS(a,b)).k.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<H(h.p)){f=I(h.p,g);break a;}g=g-H(h.p)|0;f=f+1|0;}f=0;}FN();h=new Bv;d=B2(1);d.data[0]=f;If(h,d);EY(a,b,c,1,h);h=a.v.data[b];i=h.k;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=H(d[j].p);if(c<b)break;c=c-b|0;j=j+1|0;}}if(H(d[j].p)==1)h.k=Qg(i,j,O(B_,e-1|0));else{k=d[j];if(c<=0)l=Du(DS(k.p,1),k.bK,k.bE);else if(c>=(H(k.p)-1|0)){l=new B_;m=k.p;R_(l,B9(m,0,H(m)-
1|0),k.bK,k.bE);}else{i=B2(H(k.p)-1|0);n=i.data;b=0;while(b<c){n[b]=I(k.p,b);b=b+1|0;}b=n.length;while(c<b){m=k.p;e=c+1|0;n[c]=I(m,e);c=e;}l=Du(Gy(i),k.bK,k.bE);}d[j]=l;}h.G=h.G-1|0;DY(h);}else if(b!=(d.length-1|0)){EY(a,b,c,1,C(111));JV(a,b);}}
function Wa(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Q5(a.v.data[b],c,e[0]);return;}g=f-1|0;d=(G2(a.v.data[b],c)).data;h=d[0];i=d[1];d=a.v;j=CW(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.k.data;f=l.length;c=!f?0:H(l[f-1|0].p);Lg(h,h.k.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!DT(e[m])?Xl(e[m]):Dk(O(B_,0));d[b+m|0]=k;m=m+1|0;}Lg(i,0,0,e[g]);d[b+g|0]=i;a.v=j;}
function Ua(a,b){var c,d,e,f,g,h,i;c=Dt(b);d=EZ(b);e=c.z;if(e==d.z)return B9(Ez(a.v.data[e]),c.O,d.O);f=new R;T(f);b=a.v.data[c.z];e=c.O;B0(DJ(f,DS(Ez(b),e)),10);g=a.v.data;e=c.z+1|0;h=d.z;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;Wx(DJ(f,Ez(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.v.data[d.z];h=d.O;DJ(f,B9(Ez(b),0,h));return S(f);}b=new UH;W(b);J(b);}
function LS(a,b,c){var d;Ut(a,b);d=Dt(b);EY(a,d.z,d.O,1,c);}
function Ut(a,b){var c,d,e,f,g,h,i;a:{c=Dt(b);d=EZ(b);e=c.z;if(e==d.z)FD(a.v.data[e],c.O,d.O);else{b=a.v.data[e];FD(b,c.O,b.G);FD(a.v.data[d.z],0,d.O);e=c.z+1|0;f=d.z;g=a.v;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=O(C1,(h-f|0)+e|0);Yw(g,e,f,i);a.v=i;JV(a,c.z);break a;}b=new Bq;W(b);J(b);}b=new Bq;W(b);J(b);}}}
function HB(a,b,c){return Di(b,Fl(BS(a,b),c));}
function U3(a,b){var c,d,e;c=0;d=0;while(true){e=a.v.data.length;if(c>=e)break;if((d+(BS(a,c)).G|0)>=b)return Cd(c,b-d|0);d=d+((BS(a,c)).G+1|0)|0;c=c+1|0;}return Cd(e,0);}
function Em(a,b){var c,d,e;c=0;d=a.v.data.length;e=0;while(e<b){c=c+E8(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Kr(a,b){return KE(BS(a,b.X),b.be);}
function EM(a){var b,c,d,e,f,g,h,i,j;b=B2(Tm(a));c=b.data;d=a.v.data.length;e=0;f=0;while(e<d){g=a.v.data[e].k.data;h=g.length;i=0;while(i<h){j=g[i].p;OS(j,0,H(j),b,f);f=f+H(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function EY(a,b,c,d,e){var f,g,h,i,j,k;a:{a.b3=a.b3+1|0;f=a.gB;g=O(F1,1);h=new F1;h.dt=b;h.dD=c;i=KM(e,C(111),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=Cd(b,c+H(i[0])|0);break a;}k=Cd((b+j|0)-1|0,H(i[j-1|0]));break a;}}k=Cd(b,c);}i=g.data;h.kb=k;h.li=d;h.e8=e;i[0]=h;Bt(f,g);I1(a,b,c,d,e);}
function I1(a,b,c,d,e){var f;f=Em(a,b)+c|0;if(!d){Nv(a.cC,f,H(e));SU(a.dG,f,H(e));}else{UJ(a.cC,f,H(e));Me(a.dG,f,H(e));}}
function L7(a,b){var c,d,e;c=KM(b.e8,C(111),(-1));if(b.li){Wa(a,b.dt,b.dD,c);Nv(a.cC,Em(a,b.dt)+b.dD|0,H(b.e8));SU(a.dG,Em(a,b.dt)+b.dD|0,H(b.e8));}else{c=c.data;d=AC_();BY(d.bs,b.dt,b.dD);e=c.length;if(e==1)BY(d.bi,b.dt,b.dD+H(c[0])|0);else BY(d.bi,(b.dt+e|0)-1|0,H(c[e-1|0]));Ut(a,d);UJ(a.cC,Em(a,b.dt)+b.dD|0,H(b.e8));Me(a.dG,Em(a,b.dt)+b.dD|0,H(b.e8));}return b.kb;}
function Sm(a){return a.kg==a.b3?0:1;}
function GC(a){a.kg=a.b3;}
function IW(a){var b,c,d;a.hS=Bu(a.v.data.length+1|0);b=0;while(b<a.v.data.length){c=a.hS.data;d=b+1|0;c[d]=(c[b]+(BS(a,b)).G|0)+1|0;b=d;}}
function VP(a,b){var c,d,e,f,g,h;c=a.hS;if(c===null){d=0;e=0;a:{while(true){c=a.v.data;f=c.length;if(e>=f)break;g=c[e].G;if(b<=(d+g|0)){h=Di(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=Di(f,0);}return h;}d=ZA(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=Di(d,b-(d<0?0:a.hS.data[d])|0);if(h.be>=(BS(a,h.X)).G){h.X=h.X+1|0;h.be=0;}return h;}
var MC=F();
function AM3(a){}
function F_(){var a=this;B.call(a);a.z=0;a.O=0;}
function BY(a,b,c){a.z=b;a.O=c;}
function SO(a,b){a.z=b.z;a.O=b.O;}
function Qx(a,b){var c;c=BF(a.z,b.z);if(c)return c;return BF(a.O,b.O);}
function JJ(){var a=this;B.call(a);a.kk=null;a.iZ=null;}
function Kx(a){return a.kk.X;}
function IG(a){return a.kk.be;}
function C1(){var a=this;B.call(a);a.k=null;a.G=0;a.e5=null;a.dW=null;a.dk=null;a.f1=null;a.fe=0;a.f2=0;a.gp=0;}
var ARy=0;var ARz=0;var ARq=0;function Xl(a){var b=new C1();ZV(b,a);return b;}
function Dk(a){var b=new C1();PH(b,a);return b;}
function ZV(a,b){var c;c=O(B_,1);c.data[0]=X3(b);PH(a,c);}
function PH(a,b){var c,d,e,f;c=b.data;a.k=b;d=0;e=c.length;f=0;while(f<e){d=d+H(c[f].p)|0;f=f+1|0;}a.G=d;DY(a);}
function Ic(a){return a.k.data.length;}
function Fl(a,b){var c;c=HP(a,b);return c<=0?0:a.dk.data[c-1|0];}
function HP(a,b){var c,d,e,f;c=a.k.data.length;if(!c)return (-1);if(!(a.dk!==null&&!a.gp)){U4(a);d=0;e=0;f=a.k.data.length;while(d<f){e=e+H(a.k.data[d].p)|0;a.dk.data[d]=e;d=d+1|0;}a.gp=0;}d=Si(a.dk,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function KE(a,b){var c;c=a.k.data;if(!c.length)return null;return c[HP(a,b)];}
function FD(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.G){a.k=O(B_,0);DY(a);a.G=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.k.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=H(g[e].p);i=H(a.k.data[f].p);j=BF(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.k.data[f];if(!b&&c==H(k.p)?1:0){g=a.k;a.k=Qg(g,e,O(B_,g.data.length-1|0));a.G=a.G-d|0;DY(a);return;}a.k.data[e]=Du(GV(B9(k.p,0,b),DS(k.p,c)),k.bK,k.bE);}else{g=a.k.data;l=g[e];m=g[f];if(b){if(b!=
H(l.p))a.k.data[e]=Du(B9(l.p,0,b),l.bK,l.bE);e=e+1|0;}if(c==H(m.p))f=f+1|0;else if(c)a.k.data[f]=Du(DS(m.p,c),m.bK,m.bE);g=a.k;a.k=Yw(g,e,f,O(B_,(g.data.length-f|0)+e|0));}a.G=a.G-d|0;DY(a);}
function G2(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return G(C1,[Dk(O(B_,0)),a]);if(b>=a.G)return G(C1,[a,Dk(O(B_,0))]);c=a.k;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=H(e[d].p);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return G(C1,[Dk(JK(c,0,O(B_,d))),Dk(JK(c,d,O(B_,f-d|0)))]);h=e[d];e=JK(c,0,O(B_,d+1|0));i=e.data;j=JK(c,d,O(B_,f-d|0));c=j.data;i[d]=Du(B9(h.p,0,b),h.bK,h.bE);c[0]=Du(DS(h.p,b),h.bK,h.bE);return G(C1,[Dk(e),Dk(j)]);}
function Q5(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.k.data;if(e>=f.length)break a;g=H(f[d].p);if(b<=g)break;b=b-g|0;d=e;}}Lg(a,d,b,c);}
function Lg(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(DT(d))return;e=a.k;f=e.data;g=f.length;if(!g){h=O(B_,1);h.data[0]=X3(d);a.k=h;}else if(!b&&!c){h=O(B_,g+1|0);f=h.data;C6(e,0,h,1,g);f[0]=X3(d);a.k=h;}else{i=f[b];if(c<=0)j=Du(GV(d,i.p),i.bK,i.bE);else if(c>=H(i.p))j=Du(GV(i.p,d),i.bK,i.bE);else{k=H(d);l=k+c|0;m=H(i.p)-c|0;e=B2(H(i.p)+k|0);h=e.data;n=0;while(n<c){h[n]=I(i.p,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=I(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=I(i.p,g+c|0);g=g+1|0;}j=Du(Gy(e),i.bK,i.bE);}f[b]=j;}a.G=a.G+
H(d)|0;DY(a);}
function Mj(a){var b,c,d,e,f,g;b=0;c=a.k.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<H(f.p)){if(I(f.p,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Jk(a,b,c){var d,e,f,g,h,i,j;d=a.k.data.length;e=a.e5;if(!(e!==null&&e.data.length>=d)){a.e5=AB$(d);a.dW=Bu(d);a.fe=1;}U4(a);if(!a.fe)ARz=ARz+1|0;else{f=0;g=0.0;ARy=ARy+1|0;h=0;while(h<d){i=c.data;j=a.k.data[h];f=f+H(j.p)|0;a.dk.data[h]=f;CF(b,i[Ih(j)]);g=g+Ga(b,j.p);a.e5.data[h]=g;a.dW.data[h]=g+0.5|0;h=h+1|0;}a.G=f;a.fe=0;a.gp=0;}}
function U4(a){var b;b=a.dk;if(!(b!==null&&b.data.length>=a.k.data.length)){a.dk=Bu(a.k.data.length);a.gp=1;}}
function R7(a){a.fe=1;a.f1=null;}
function DY(a){R7(a);a.f2=1;a.gp=1;}
function QX(a,b,c,d){var e,f,g,h,i,j,k;if(a.f1===null)a.f1=O($rt_arraycls($rt_intcls()),a.k.data.length);e=a.f1.data[d];if(e===null){e=c.data;f=a.k.data[d];CF(b,e[Ih(f)]);f=f.p;e=Bu(H(f)-1|0);c=ER(f);g=!d?0.0:a.e5.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;Ld(f,c,0,k);h[i]=g+Ga(b,f)+0.5|0;i=k;}a.f1.data[d]=e;}return e;}
function FI(a,b,c,d){var e,f,g,h,i;if(a.k.data.length&&b){if(!(!a.fe&&a.dW!==null))Jk(a,c,d);if(b>=a.G)return a.dW.data[a.k.data.length-1|0];e=0;f=0;a:{while(true){g=a.k.data;if(f>=g.length)break a;h=e+H(g[f].p)|0;i=BF(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.dW.data[f];}return (QX(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function Eo(a){var b,c,d;a:{b=a.k.data.length;if(b){c=a.dW.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function FX(a,b){var c;if(b>=a.G)return b+1|0;c=HP(a,b);return a.dk.data[c];}
function Ez(a){var b,c,d,e;b=new R;Fn(b,a.G);c=a.k.data;d=c.length;e=0;while(e<d){DJ(b,c[e].p);e=e+1|0;}return S(b);}
function Ys(){ARq=0;}
var Wg=F(Bq);
var T$=F(0);
function Zm(){B.call(this);this.kJ=null;}
function AOf(a){var b=new Zm();AIS(b,a);return b;}
function AIS(a,b){a.kJ=b;}
function D5(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.kJ));}
function CP(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.kJ));}
var SM=F(0);
function JP(){var a=this;B.call(a);a.hf=null;a.hR=null;a.xa=null;}
function ZC(a,b){var c=new JP();AGN(c,a,b);return c;}
function ANQ(a,b,c){var d=new JP();M8(d,a,b,c);return d;}
function Ww(b){var c,d,e,f,g,h,i;c=new JP;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=O(Bv,0);else{f=O(Bv,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=Es(e[h]);h=h+1|0;}}}else f=O(Bv,0);M8(c,d,b,f);return c;}
function AGN(a,b,c){M8(a,b,c,O(Bv,0));}
function M8(a,b,c,d){a.hf=b;a.hR=c;a.xa=d;}
function In(a){var b;b=a.hf;return Es(b!==null?b.name:a.hR.name);}
function Ol(){var a=this;B.call(a);a.ev=null;a.dR=null;}
function AEc(a,b){var c=new Ol();AFO(c,a,b);return c;}
function AFO(a,b,c){a.ev=b;a.dR=c;}
function SU(a,b,c){var d;d=a.ev;if(d===null)return;PC(a,d,b,c);}
function Me(a,b,c){var d;d=a.ev;if(d===null)return;Sq(a,d,b,c);}
function PC(a,b,c,d){var e,f,g,h;e=b.dA.bS();while(e.ca()){VV(a,e.bL(),c,d);}e=b.dZ.bS();while(e.ca()){f=e.bL();g=new R5;g.pR=a;DK(a,g,f,c,d);}h=b.fr.bS();while(h.ca()){e=h.bL();VV(a,e.hB,c,d);f=new R6;f.mo=a;DK(a,f,e.iq,c,d);}b=b.cb.bS();while(b.ca()){PC(a,b.bL(),c,d);}}
function VV(a,b,c,d){IB(a,b.dB,c,d);}
function DK(a,b,c,d,e){var f,g;a:{if(c instanceof FA){f=c.fN;g=new V9;g.nj=a;g.nh=b;g.ng=d;g.ni=e;DN(f,g);}else{if(!(c instanceof HH)){if(!(c instanceof H1))break a;f=c;DK(a,b,f.gM,d,e);DK(a,b,f.fY,d,e);return;}g=c.fW;f=new V$;f.ux=a;f.uw=b;f.uv=d;f.uu=e;DN(g,f);}}if(c!==null){c=c.eq;if(c!==null)b.h5(c,Ct(d),Ct(e));}}
function IB(a,b,c,d){var e;e=b.cS;if(e>=c)b.cS=e+d|0;}
function Sq(a,b,c,d){var e,f,g,h;e=b.dA.bS();while(e.ca()){Hi(a,(e.bL()).dB,c,d);}e=b.dZ.bS();while(e.ca()){f=e.bL();g=new Q8;g.sJ=a;DK(a,g,f,c,d);}h=b.fr.bS();while(h.ca()){e=h.bL();Hi(a,e.hB.dB,c,d);f=new Q9;f.rW=a;DK(a,f,e.iq,c,d);}b.dA.kC(new Q7);b.dZ.kC(new Q6);b=b.cb.bS();while(b.ca()){Sq(a,b.bL(),c,d);}}
function Hi(a,b,c,d){var e;e=b.cS;if(e>=c)b.cS=e-d|0;}
function B_(){var a=this;B.call(a);a.p=null;a.bK=0;a.bE=0;}
function X3(a){var b=new B_();AE4(b,a);return b;}
function Du(a,b,c){var d=new B_();R_(d,a,b,c);return d;}
function AE4(a,b){R_(a,b,0,0);}
function R_(a,b,c,d){a.p=b;a.bK=c;a.bE=d;}
function Ih(a){return a.bE&3;}
function Gw(b,c){return (!b?0:2)+(!c?0:1)|0;}
var JG=F(Jm);
function QA(){var a=this;B.call(a);a.cA=null;a.dM=0;}
var ARA=null;function AAp(a){var b=new QA();AA5(b,a);return b;}
function AA5(a,b){a.dM=0;a.cA=b;}
function Or(a,b){var c;if(b.dJ)return b;b=BL(b.W);while(true){if(!BM(b))return null;c=Or(a,BP(b));if(c!==null)break;}return c;}
function MF(a,b,c){var d,e,f,g;d=Jt(a,a.cA,b);if(d===null)return;b=c.bX;e=b===null?ARB:b.cb;f=c.W;c=a.cA;if(d===c){if(c.bX===null)c.bX=b;b=new Q1;b.pK=a;DN(f,b);b=new Q0;b.sG=a;e.d4(b);b=a.cA;b.W=f;b.bX.cb=e;b.dJ=0;return;}if(!DO(f)){c=d.fK;if(c!==null){b=new Nk;b.nn=c;DN(f,b);g=I8(c.W,d);if(g==(-1))FW(c.W,f);else{E6(c.W,g);Xw(c.W,g,f);}}}b=d.bX;if(b!==null){b=b.fz;c=new Rb;c.pu=b;e.d4(c);g=I8(b.cb,d.bX);if(g==(-1))FW(b.cb,e);else{b.cb.ls(g);b.cb.rO(g,e);}}}
function Jt(a,b,c){var d,e,f,g;d=b.bG;if(d.bF==c.bF&&d.bI==c.bI?1:0){d=BL(b.W);while(BM(d)){e=Jt(a,BP(d),c);if(e!==null)return e;}return b;}b=BL(b.W);while(true){if(!BM(b))return null;d=BP(b);f=c.bF;g=c.bI;e=d.bG;if(e.bF<=f&&g<=e.bI?1:0){e=Jt(a,d,c);if(e!==null)break;}}return e;}
function R2(a,b,c){Bt(c,b.bG);b=BL(b.W);while(BM(b)){R2(a,BP(b),c);}}
function Nv(a,b,c){a.dM=0;Js(a,a.cA,b,c);}
function Js(a,b,c,d){var e;if(CK(b)<c)return;a:{if(CM(b)>c){Ki(b,d);Gu(b,d);b=BL(b.W);while(BM(b)){Js(a,BP(b),c,d);}}else{if(!Ij(b,c)){if(a.dM)break a;if(CK(b)!=c)break a;}Gu(b,d);if(CM(b)==c&&a.dM)Ki(b,d);e=BL(b.W);while(BM(e)){Js(a,BP(e),c,d);}if(!a.dM){b.dJ=1;a.dM=1;}}}}
function UJ(a,b,c){a.dM=0;Iq(a,a.cA,b,c);}
function Iq(a,b,c,d){var e,f,g,h,i,j;if(CK(b)<c)return;e=CM(b);f=c+d|0;if(e>f){e= -d|0;Ki(b,e);Gu(b,e);g=BL(b.W);while(BM(g)){Iq(a,BP(g),c,d);}b.W=LQ(a,b.W);}else{h=b.bG;if(c<=h.bF&&h.bI<=f?1:0){if(b===a.cA){Kw(b,0);Io(b,0);h=b.bX;if(h!==null)h.cb.hi();}else{Kw(b,(-1));Io(b,(-1));h=b.bX;if(h!==null){VB(h);b.bX=null;}}GF(b.W);}else{e=Ij(b,c);f=Ij(b,f);if(e&&f)Gu(b, -d|0);else if(e)Io(b,c);else{if(!f)return;Kw(b,c);Gu(b, -d|0);}h=BL(b.W);while(BM(h)){Iq(a,BP(h),c,d);}h=Tb(b.W);g=NP(0);i=new QG;j=new Tl;j.xK=i;j.ic
=g;while(SY(h,j)){}if(!j.ic.lw&&!a.dM)b.dJ=1;else a.dM=1;b.W=LQ(a,b.W);}}}
function LQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Bz();d=null;e=ARA;f=b.ce;g=b.j;if(e===null)e=AQL;h=O(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}X9(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.bJ=b.bJ+1|0;b=BL(b);while(BM(b)){m=BP(b);if(CM(m)==CK(m))continue;if(!m.dJ){if(d!==null){Bt(c,d);d=null;}Bt(c,m);}else if(d===null)d=m;else{n=AMd(IH(Be(CM(d),CM(m)),Ba(CK(d),CK(m)),d.bG.el),d.fK,d.bX);n.dJ=1;d=m.bX;if(d===null)d=n;else{VB(d);d=n;}}}if(d!==null)Bt(c,d);return c;}
function UX(a,b,c,d){var e,f,g,h,i,j,k,l;if((CK(c)-CM(c)|0)<43)e=B9(d,CM(c),CK(c));else{e=B9(d,CM(c),CM(c)+20|0);f=B9(d,CK(c)-20|0,CK(c));g=new R;T(g);L(L(L(g,e),C(101)),f);e=S(g);}e=Tg(e,C(111),C(185));f=IL();g=c.bG;h=g.bF;i=g.bI;j=g.el;k=new R;T(k);B0(k,40);B0(Bj(L(Bj(L(Bj(k,h),C(186)),i),C(186)),j),41);k=S(k);h=c.dJ;g=new R;T(g);IC(L(L(g,k),C(186)),h);l=S(g);g=new R;T(g);k=Bj(g,b);B0(k,32);k=L(k,l);B0(k,9);L(k,e);CT(f,S(g));c=BL(c.W);h=b+1|0;while(BM(c)){UX(a,h,BP(c),d);}}
function ABb(){ARA=new Ug;}
function ABo(){var a=this;B.call(a);a.bF=0;a.bI=0;a.el=0;}
function IH(a,b,c){var d=new ABo();AEY(d,a,b,c);return d;}
function AEY(a,b,c,d){a.bF=b;a.bI=c;a.el=d;}
function ALc(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return a.bF==c.bF&&a.bI==c.bI&&a.el==c.el?1:0;}return 0;}
function ADO(a,b){var c;b=b;c=BF(a.bF,b.bF);if(!c)c=BF(b.bI,a.bI);return c;}
var Ug=F();
function AHK(a,b,c){var d;b=b;c=c;b=b.bG;c=c.bG;d=BF(b.bF,c.bF);if(!d)d=BF(c.bI,b.bI);return d;}
function PM(){var a=this;B.call(a);a.bG=null;a.fK=null;a.W=null;a.bX=null;a.dJ=0;}
function AMd(a,b,c){var d=new PM();AAo(d,a,b,c);return d;}
function AAo(a,b,c,d){a.dJ=0;a.bG=b;a.fK=c;a.W=Bz();a.bX=d;}
function ABt(b){return P4(b,null);}
function P4(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=X(b);e=X(b);f=X(b);g=X(b);h=X(b);i=IH(d,e,f);j=new PM;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AAo(j,i,null,l);m=0;while(m<g){l=P4(b,c);l.fK=j;Bt(j.W,l);m=m+1|0;}return j;}
function W1(b,c,d){var e,f,g,h,i;a:{e=b.bG;f=b.W;g=e.bF;h=e.bI;i=e.el;Bf(c,g);He(c,h,i);Bf(c,f.j);if(d!==null){e=b.bX;if(e!==null&&T6(d,e)){g=(KP(d,b.bX)).ba;break a;}}g=(-1);}Bf(c,g);b=BL(f);while(BM(b)){W1(BP(b),c,d);}}
function CM(a){return a.bG.bF;}
function CK(a){return a.bG.bI;}
function Kw(a,b){a.bG.bF=b;}
function Io(a,b){a.bG.bI=b;}
function Ki(a,b){var c;c=a.bG;c.bF=c.bF+b|0;}
function Gu(a,b){var c;c=a.bG;c.bI=c.bI+b|0;}
function Ij(a,b){return CM(a)<=b&&b<CK(a)?1:0;}
function ADC(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return BB(a.bG,c.bG)&&BB(a.W,c.W)?1:0;}return 0;}
function JB(){var a=this;JE.call(a);a.oC=null;a.nk=null;}
function W7(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.oC;e=0;f=0;g=a.nk;a:{b:{while(true){if((e+32|0)>f&&E$(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=Ey(b)+j|0;h=i.length;f=Be(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new BT;b=new R;T(b);Bj(L(Bj(L(b,C(187)),k),C(77)),h);Br(l,S(b));J(l);}if(Ey(b)<e)break;if(e<0){b=new BT;c=new R;T(c);L(Bj(L(c,C(78)),e),C(79));Br(b,S(c));J(b);}h=b.cl;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.qc.data[n+b.s8|0];m=m+1|0;j=o;n=k;}b.cl
=h+e|0;e=0;}if(!E$(c)){l=!E$(b)&&e>=f?AQS:AQR;break a;}i=g.data;k=Be(Ey(c),i.length);p=new MA;p.l2=b;p.pn=c;l=Y9(a,d,e,f,g,0,k,p);e=p.sQ;j=p.t8;if(l===null){if(!E$(b)&&e>=f)l=AQS;else if(!E$(c)&&e>=f)l=AQR;}U2(c,g,0,j);if(l!==null)break a;}b=new Uk;W(b);J(b);}p=new BT;l=new R;T(l);B0(Bj(L(Bj(L(l,C(80)),j),C(75)),h),41);Br(p,S(l));J(p);}Ri(b,b.cl-(f-e|0)|0);return l;}
var Om=F(JB);
function Y9(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Ku(h,2))break a;i=AQR;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Vl(l)){if((f+3|0)>g){j=j+(-1)|0;if(Ku(h,3))break a;i=AQR;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Cm(l)){i=J2(1);break a;}if
(j>=d){if(E$(h.l2))break a;i=AQS;break a;}c=j+1|0;m=k[j];if(!CI(m)){j=c+(-2)|0;i=J2(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Ku(h,4))break a;i=AQR;break a;}k=e.data;o=D4(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.sQ=j;h.t8=f;return i;}
var SB=F(DE);
function Hc(){var a=this;B.call(a);a.bB=null;a.fi=null;a.kW=null;a.hl=null;a.dy=null;a.sT=null;a.tt=null;a.t5=null;}
function ARC(a,b,c,d,e){var f=new Hc();H3(f,a,b,c,d,e);return f;}
function H3(a,b,c,d,e,f){var g;g=c.data;a.sT=Yz(C(188),16.0);a.tt=Yz(C(188),17.0);a.t5=Yz(C(103),15.0);a.bB=b;a.kW=c;a.hl=d;if(g.length>=15){a.fi=e;a.dy=f;return;}b=new BI;W(b);J(b);}
function Ma(a,b){if(b===null)b=a.bB.fL;return b;}
function HC(){var a=this;B.call(a);a.up=null;a.fL=null;a.r1=null;a.wA=null;a.pE=null;a.iC=null;a.nH=null;a.us=null;a.kd=null;a.j5=null;a.ht=null;}
function ARD(a,b,c,d,e,f,g,h,i,j,k){var l=new HC();K7(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function K7(a,b,c,d,e,f,g,h,i,j,k,l){a.up=b;a.fL=c;a.r1=d;a.wA=e;a.pE=f;a.iC=g;a.nH=h;a.us=i;a.kd=j;a.j5=k;a.ht=l;}
var Xf=F(0);
function WA(){var a=this;B.call(a);a.eB=null;a.g7=null;a.nI=null;a.l0=null;}
function ZR(a,b,c,d){var e=new WA();AM8(e,a,b,c,d);return e;}
function AM8(a,b,c,d,e){a.eB=b;a.g7=c;a.nI=d;a.l0=e;}
var Zn=F(0);
function ABg(){var b,c;b=new HT;c=N(C(189));AIq();I7(b,c,ARE,ARF);return b;}
function AAN(){var b,c;b=new HT;c=N(C(90));ACs();I7(b,c,ARG,ARH);return b;}
function AA9(){var b,c;b=new HT;AAD();c=ARI;ACG();I7(b,c,ARJ,ARK);return b;}
function ABy(){var a=this;B.call(a);a.qo=null;a.lL=null;a.sr=null;a.mg=null;}
function WG(a,b,c,d){var e=new ABy();AC0(e,a,b,c,d);return e;}
function AC0(a,b,c,d,e){a.qo=b;a.lL=c;a.sr=d;a.mg=e;}
function Wf(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dy.lL;break a;case 3:if(c!=3){b=b.dy.mg;break a;}b=b.dy.sr;break a;default:b=b.bB.fL;break a;}b=b.dy.qo;}return b;}
function J3(a,b,c){return Wf(a,b,0,c);}
function Lb(){var a=this;B.call(a);a.h9=null;a.hL=null;}
function Lp(a,b){var c;c=a.hL;a.hL=b;return c;}
function It(){var a=this;Lb.call(a);a.bx=null;a.bP=null;a.eZ=0;a.e$=0;}
function IJ(a){var b;b=JF(a);if(b==2){if(JF(a.bP)<0)a.bP=L1(a.bP);return NN(a);}if(b!=(-2))return a;if(JF(a.bx)>0)a.bx=NN(a.bx);return L1(a);}
function JF(a){var b,c;b=a.bP;c=b===null?0:b.eZ;b=a.bx;return c-(b===null?0:b.eZ)|0;}
function L1(a){var b;b=a.bx;a.bx=b.bP;b.bP=a;DW(a);DW(b);return b;}
function NN(a){var b;b=a.bP;a.bP=b.bx;b.bx=a;DW(a);DW(b);return b;}
function DW(a){var b,c,d;b=a.bP;c=b===null?0:b.eZ;b=a.bx;d=b===null?0:b.eZ;a.eZ=Ba(c,d)+1|0;a.e$=1;b=a.bx;if(b!==null)a.e$=1+b.e$|0;b=a.bP;if(b!==null)a.e$=a.e$+b.e$|0;}
function HQ(){var a=this;B4.call(a);a.fE=0;a.fH=0;a.fF=0;a.fG=0;}
function G$(a){var b=new HQ();ANa(b,a);return b;}
function DU(a,b,c){var d=new HQ();AEJ(d,a,b,c);return d;}
function N(a){var b=new HQ();AK_(b,a);return b;}
function EW(a,b,c,d){var e=new HQ();PL(e,a,b,c,d);return e;}
function BA(a){var b=new HQ();IN(b,a);return b;}
function ANa(a,b){PL(a,b,b,b,255);}
function AEJ(a,b,c,d){PL(a,b,c,d,255);}
function AK_(a,b){if(!(H(b)!=4&&H(b)!=7&&H(b)!=9)&&I(b,0)==35){if(H(b)==4){a.fE=HW(I(b,1))*17|0;a.fH=HW(I(b,2))*17|0;a.fF=HW(I(b,3))*17|0;a.fG=255;}else{a.fE=Kg(I(b,1),I(b,2));a.fH=Kg(I(b,3),I(b,4));a.fF=Kg(I(b,5),I(b,6));a.fG=H(b)!=9?255:Kg(I(b,7),I(b,8));}IT(a.fE,a.fH,a.fF,a.fG,a);return;}}
function PL(a,b,c,d,e){a.fE=b;a.fH=c;a.fF=d;a.fG=e;IT(b,c,d,e,a);}
function IN(a,b){a.fE=b.fE;a.fH=b.fH;a.fF=b.fF;a.fG=b.fG;Fc(a,b);}
function HW(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Kg(b,c){return (16*HW(b)|0)+HW(c)|0;}
var CN=F(0);
var AQ5=null;var ARL=null;var AQ7=null;var AQ6=null;var AQ9=null;var AQ8=null;var AQ_=null;var AQ$=null;var ARb=null;var ARa=null;var ARc=null;function AFm(){AFm=Bg(CN);ALt();}
function ALt(){AQ5=G$(206);ARL=N(C(190));AQ7=N(C(191));AQ6=N(C(85));AQ9=N(C(192));AQ8=N(C(193));AQ_=N(C(194));AQ$=N(C(195));ARb=EW(107,106,107,128);ARa=EW(30,31,34,0);ARc=N(C(87));}
function B6(){Cl.call(this);this.hd=null;}
var ARM=null;var ARN=null;var ARO=null;var ARP=null;var ARQ=null;var ARw=null;var ARR=null;var ARS=null;var ART=null;var ARU=null;var ARV=null;var ARW=null;var ARX=null;var ARY=null;var ARZ=null;var ARd=null;function Tf(){Tf=Bg(B6);AHD();}
function Ds(a,b,c){var d=new B6();QH(d,a,b,c);return d;}
function AOk(a,b,c,d){var e=new B6();U_(e,a,b,c,d);return e;}
function QH(a,b,c,d){Tf();Do(a,b,c);a.hd=G5(d,null);}
function U_(a,b,c,d,e){Tf();Do(a,b,c);a.hd=G5(d,e);}
function AHD(){var b,c;b=new B6;AFm();QH(b,C(196),0,ARL);ARM=b;ARN=Ds(C(197),1,N(C(198)));ARO=Ds(C(199),2,N(C(200)));ARP=Ds(C(201),3,N(C(202)));ARQ=Ds(C(203),4,ARL);ARw=Ds(C(204),5,N(C(205)));ARR=Ds(C(206),6,N(C(207)));ARS=Ds(C(208),7,N(C(209)));ART=Ds(C(210),8,N(C(211)));c=new B6;AAS();U_(c,C(212),9,AR0,N(C(194)));ARU=c;ARV=AOk(C(213),10,AR0,N(C(88)));ARW=Ds(C(214),11,N(C(215)));ARX=Ds(C(216),12,N(C(217)));ARY=Ds(C(218),13,ARL);b=Ds(C(219),14,N(C(220)));ARZ=b;ARd=G(B6,[ARM,ARN,ARO,ARP,ARQ,ARw,ARR,ARS,ART,ARU,
ARV,ARW,ARX,ARY,b]);}
function HY(){var a=this;B.call(a);a.hu=null;a.jf=null;}
function G5(a,b){var c=new HY();AIv(c,a,b);return c;}
function AIv(a,b,c){a.hu=b;a.jf=c;}
function Hh(){var a=this;B.call(a);a.hP=null;a.ha=null;a.t2=null;a.xr=null;a.jG=null;a.n8=null;a.m3=null;}
function AR1(a,b,c,d,e,f,g){var h=new Hh();Kh(h,a,b,c,d,e,f,g);return h;}
function Kh(a,b,c,d,e,f,g,h){a.t2=b;a.xr=c;a.ha=d;a.jG=e;a.hP=f;a.n8=g;a.m3=h;}
function Zd(){var a=this;B.call(a);a.k7=null;a.p3=0;}
function Wm(a,b){var c=new Zd();AK9(c,a,b);return c;}
function AK9(a,b,c){var d;d=new B4;a.k7=d;a.p3=b;d.bV=c;}
function N7(a,b){return Cn(a.p3,b);}
var De=F(0);
var ARh=null;var ARi=null;var ARe=null;var ARf=null;var ARg=null;var ARG=null;var ARH=null;var ARj=null;var ARk=null;function ACs(){ACs=Bg(De);AJJ();}
function AJJ(){ARh=N(C(193));ARi=N(C(221));ARe=N(C(90));ARf=N(C(207));ARg=N(C(190));ARG=N(C(193));ARH=N(C(222));ARj=N(C(223));ARk=DU(43,45,48);}
function XY(){var a=this;B.call(a);a.iD=null;a.hb=0.0;}
function Yz(a,b){var c=new XY();AJC(c,a,b);return c;}
function AJC(a,b,c){a.iD=b;a.hb=c;}
function AK3(a,b){if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){b=b;return a.hb===b.hb&&BB(a.iD,b.iD)?1:0;}return 0;}
var OZ=F();
function ACJ(a,b){return b.text();}
function OX(){B.call(this);this.mv=null;}
function AMt(a,b){var c,d;c=a.mv;b=ZP(b);d=AEh(b.hv,null,AJ_(c));Dn(AQf,c,d);if(BB(AQe,c))Uu(d);}
var OY=F();
function AK5(a,b){KV(b);}
function Hu(){var a=this;B.call(a);a.rt=null;a.mW=null;a.n0=null;a.sk=null;a.pt=null;a.hq=null;}
function AR2(a,b,c,d,e,f){var g=new Hu();La(g,a,b,c,d,e,f);return g;}
function La(a,b,c,d,e,f,g){a.rt=b;a.mW=c;a.n0=d;a.sk=e;a.pt=f;a.hq=g;}
function HT(){var a=this;B.call(a);a.og=null;a.kN=null;a.sd=null;}
function AR3(a,b,c){var d=new HT();I7(d,a,b,c);return d;}
function I7(a,b,c,d){a.og=b;a.kN=c;a.sd=d;}
function UV(a,b){return !b?a.kN:a.sd;}
function Xp(){var a=this;B.call(a);a.kh=null;a.q$=null;a.tj=null;}
function ABp(a,b,c){var d=new Xp();AMb(d,a,b,c);return d;}
function AMb(a,b,c,d){a.kh=b;a.q$=c;a.tj=d;}
var CD=F(0);
var AR4=null;var AR0=null;var AR5=null;var AR6=null;var AR7=null;var AR8=null;var AR9=null;var AR$=null;var AR_=null;var ASa=null;var ASb=null;function AAS(){AAS=Bg(CD);ANj();}
function ANj(){AR4=G$(187);AR0=N(C(224));AR5=G$(55);AR6=G$(43);AR7=DU(33,66,131);AR8=DU(60,63,65);AR9=N(C(225));AR$=N(C(226));AR_=EW(85,85,85,128);ASa=EW(43,43,43,0);ASb=N(C(227));}
function YY(){var a=this;B.call(a);a.jF=0;a.wo=null;}
var Yh=F();
function Sy(){var a=this;B.call(a);a.nr=null;a.rB=null;a.ss=null;}
function AAC(){var a=this;B.call(a);a.hM=null;a.jl=null;a.e3=null;a.xd=null;}
function AJ_(a){var b=new AAC();AK0(b,a);return b;}
function AK0(a,b){var c,d,e;c=null;d=null;e=null;a.hM=c;a.jl=d;a.e3=b;a.xd=e;}
function Ts(a){var b,c;b=a.e3;if(b===null)return C(5);c=YC(b,C(228));return c==(-1)?a.e3:DS(a.e3,c+1|0);}
function AEj(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return BB(a.hM,c.hM)&&BB(a.jl,c.jl)&&BB(a.e3,c.e3)?1:0;}return 0;}
var S3=F();
function ADd(a,b){ZT(b);}
function Is(){var a=this;B.call(a);a.d8=null;a.eA=null;a.e2=null;}
var AQU=0;function ZT(a){var b;b=a.eA;if(b!==null){AQU=AQU-1|0;a.d8.dx.deleteTexture(b);a.eA=null;}}
function Cf(a){return a.e2.b;}
function Kk(a){return a.e2.a;}
function R1(a,b,c,d){var e;e=a.e2;e.b=b;e.a=c;KN(a);a.d8.dx.texStorage2D(3553,1,d,b,c);e=a.d8.dx;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function KN(a){var b,c;b=a.d8.dx;c=a.eA;b.bindTexture(3553,c);}
function Ek(a,b){var c,d,e,f,g,h;a:{c=b.k1;d=b.j$;e=a.e2;f=e.b;if(f){g=e.a;if(g){if(f==c&&g==d?1:0){KN(a);break a;}e=a.d8.dx;h=a.eA;e.deleteTexture(h);a.eA=a.d8.dx.createTexture();R1(a,c,d,32856);break a;}}R1(a,c,d,32856);}OV(a,b,0,0);}
function P2(a,b,c,d){KN(a);OV(a,b,c,d);}
function OV(a,b,c,d){var e;e=a.d8.dx;b=b.g5;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var WI=F();
function Ft(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function Xn(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function S2(){var a=this;B.call(a);a.bh=null;a.K=null;a.N=null;a.ft=null;}
function Yv(a,b,c,d){var e,f,g,h;e=a.K;f=BB(e.hm,c)?0:1;g=BB(e.f6,b)?0:1;h=d===e.ik?0:1;if(f){e.hm=c;e.em=null;Of(e,0);}e.f_=!f&&!g&&!h?0:1;e.f6=b;e.ik=d;e.hr=0;Mh(a);}
function Y$(a,b){a.ft=b;}
function JU(a,b,c){var d;d=a.N;d.kL(b,c,d.eF);Mh(a);}
function Mh(a){var b,c,d,e;b=a.K;c=a.N.o.b;b.o.b=c;d=b.c5;if(d!==null&&c!=Cf(d)&&!(c>=b.hr&&Cf(b.c5)>=b.hr))b.f_=1;b=a.K;b.eF=a.bh.bW;if(Uq(b))c=0;else{b=a.K;To(b);e=Cj(b.eL,b.ik);Of(b,Fi(b.em)+(e*2|0)|0);c=b.o.a;}b=a.K.H;d=a.N.H;Bn(b,d.b,d.a-c|0);}
function Ky(b,c){if(b<0)c=C(229);else if(b>0)c=C(230);return c;}
function V5(a,b,c){var d;d=a.K.H.b;return (d-c|0)<=b&&b<d?1:0;}
function LN(a,b,c){var d,e;d=a.K;e=d.H.b+d.o.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Od(a,b,c){var d;d=a.K.H.a;return (d-c|0)<=b&&b<d?1:0;}
function My(a,b,c){var d,e;d=a.N;e=d.H.a+d.o.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Uw(a,b,c){var d,e,f;d=a.K.H.a-c|0;e=a.N;f=(e.H.a+e.o.a|0)+c|0;return d<=b&&b<f?1:0;}
function U5(a,b,c){var d,e;d=a.K.H.a+c|0;e=a.N;return YH(b,d,(e.H.a+e.o.a|0)-c|0);}
function Nb(a,b,c){var d,e,f;d=a.K;e=d.H.b;f=e-c|0;e=(e+d.o.b|0)+c|0;return f<=b&&b<e?1:0;}
function MG(a,b,c){var d,e;d=a.K;e=d.H.b;return YH(b,e+c|0,(e+d.o.b|0)-c|0);}
function YH(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BF(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function Hx(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bp;f=new Bp;g=b.b;h=b.a;b=a.N;i=b.H;j=i.b;k=i.a;b=b.o;l=b.b;m=b.a;b=new T2;b.r_=a;b.sb=e;b.sa=f;b.r8=c;b.r7=g;b.r$=j;b.r9=l;b.sn=d;b.sm=h;b.so=k;b.sO=m;return b;}
function ABH(a){return a.K.o.a+Cj(a.bh,2.0)|0;}
function RE(){var a=this;B.call(a);a.eD=null;a.b2=null;a.e7=null;a.fA=null;a.k3=null;a.cc=null;a.fl=null;a.cv=0;a.eI=0;a.lm=0;a.hE=0;a.h8=0;a.fv=0;a.sB=null;a.on=null;a.uQ=null;a.kK=null;}
function OU(a,b,c){a.eD=b;T9(a,c);Ks(a);}
function Pw(a,b){var c;a.k3=b.hP;c=b.jG.kN;Fc(a.b2.eQ,c);c=b.ha.kh;Fc(a.b2.g$,c);a.kK=b.jG;}
function T9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=KU(b);d=b.bW;BU(a.eD);CF(c,a.eD);e=OK(a.eD,1.25);f=0;a.cv=Cn(2.0,d);a.eI=Cn(3.0,d);a.lm=Cn(12.0,d);g=0;h=a.cc.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Jx(c,l.kp,0.875);n=a.lm;o=(n+m|0)+n|0;f=Ba(f,o);b=l.d5;b.b=g;b.a=0;b=l.dq;b.b=o;b.a=e;Cb(l.hy,g,0.0,o,k);g=g+o|0;j=j+1|0;}b=a.e7;b.b=g;b.a=e;b=a.b2.bo;o=a.fv;if(!o){m=a.cv;m=(g+m|0)+V(m,a.cc.data.length)|0;}else m=(f+(a.cv*2|0)|0)+(a.eI*2|0)|0;b.b=m;if(!o)e=e+(a.cv*2|0)|0;else{o=a.cv;e=(V(e+o|0,a.cc.data.length)
+o|0)+(a.eI*2|0)|0;}b.a=e;}
function WT(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EH(a){var b,c;b=a.e7;if(b.b&&b.a)return a.b2.bo;c=new Bq;Br(c,C(231));J(c);}
function Ks(a){a.h8=1;}
function AA7(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.c6;if(!a.cc.data.length)return;if(a.fl===null)a.fl=Gt(c);a:{if(!a.h8){d=a.e7;if(V(d.b,d.a))break a;}d=a.e7;if(!V(d.b,d.a))T9(a,b);d=a.e7;e=d.b;f=d.a;if(!V(e,f))return;d=EX(c,e,f,b.b7);CF(d,a.eD);g=OK(a.eD,0.125);h=a.eD;i=h.d0;g=g+i-(i+h.dC)/16.0;j=a.cc.data;e=j.length;f=0;while(f<e){h=j[f];Ei(d,h.kp,h.hy.bk+a.lm,g);f=f+1|0;}Ek(a.fl,d);a.h8=0;K0(d);}if(!I_(a.b2)){d=a.b2;XX(c,d.bo,d.cI,d.g$,a.cv,a.fA);d=a.b2;h=d.bo;k=d.cI;d=d.eQ;e=a.cv;l=a.fA;l.b=(h.b-e|0)
-e|0;l.a=(h.a-e|0)-e|0;BC(c,k.b+e|0,k.a+e|0,l,d);if(a.fv){d=a.b2;ZG(c,d.bo,d.cI,0,0,N7(a.k3,b.bW),a.k3.k7,a.fA);}}j=a.cc.data;m=j.length;n=0;while(n<m){d=j[n];h=d.d5;e=h.b;f=h.a;h=d.dq;k=d.hy;l=a.fl;o=a.kK;Ev(c,e,f,h,k,l,o.og,UV(o,d.g_),b.b7);n=n+1|0;}b:{if(a.fv){j=a.cc.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.fA;e=(a.b2.bo.b-(a.cv*2|0)|0)-(a.eI*2|0)|0;h=d.dq;e=e-h.b|0;b.b=e;b.a=h.a;if(e>0){k=d.d5;BC(c,k.b+h.b|0,k.a,b,UV(a.kK,d.g_));}p=p+1|0;}}}}
function Mz(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cc.data;if(c>=d.length)return (-1);e=d[c];if(Ft(b,e.d5,e.dq))return c;if(a.fv){f=e.d5;g=f.b;e=e.dq;h=e.b;g=g+h|0;i=f.a;f=a.fA;f.b=(a.b2.bo.b-(a.cv*2|0)|0)-h|0;f.a=e.a;if(Xn(b,g,i,f))break;}c=c+1|0;}return c;}
function Mg(){B.call(this);this.pv=null;}
function AE3(a,b){var c,d;c=a.pv;VK(c,Ef(c,b.u));b=Z(c);d=c.d;J_(b,d.n,d.s);F9(c);}
var Xe=F();
function Cn(b,c){return Dy(b*c);}
function T7(){var a=this;B.call(a);a.X=0;a.be=0;}
function Di(a,b){var c=new T7();Za(c,a,b);return c;}
function Za(a,b,c){a.X=b;a.be=c;}
function ACn(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return a.X==c.X&&a.be==c.be?1:0;}return 0;}
function AKp(a){var b,c,d,e;b=O(B,2).data;b[0]=Ct(a.X);b[1]=Ct(a.be);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.ba)|0;d=d+1|0;}return c;}
function AJ2(a,b){var c;b=b;c=BF(a.X,b.X);if(!c)c=BF(a.be,b.be);return c;}
function OD(){var a=this;B.call(a);a.Z=null;a.iE=null;a.ee=null;a.dm=0;a.F=0;a.de=null;a.dU=null;a.fP=0;a.mf=0;}
function Mq(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dm;i=V(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Ba(i,e))a:{while(true){if(d<=e){j=d;break a;}Fg(c);j=d+(-1)|0;b=DX(d);d=V(j,a.F)%a.ee.a|0;Fx(a,c,b,a.fP,g);P2(a.Z,c,0,d);if(!(j%a.dm|0))break;d=j;}}else{Fg(b);k=a.dm-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Fx(a,b,DX(j),V(a.F,k)+a.fP|0,g);k=k+(-1)|0;j=h;}Ek(a.Z,b);j=Ba(i,e);}return j;}k=a.dm;h=V(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Fg(c);b=DX((d+f|0)+1|0);j=d+1|0;d=V(d,
a.F)%a.ee.a|0;Fx(a,c,b,a.fP,g);P2(a.Z,c,0,d);if(!(j%a.dm|0))break;d=j;}}else{Fg(b);d=0;while(d<a.dm){h=h+1|0;Fx(a,b,DX((h>e?h-f|0:h)+f|0),V(a.F,d)+a.fP|0,g);d=d+1|0;}Ek(a.Z,b);j=Be(i,e);}return j;}
function Y7(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q;l=d/a.F|0;c=Be((j+i|0)%e|0,c);Bn(a.de,Cf(a.Z),a.F);e=d%Kk(a.Z)|0;i=a.F;m=e/i|0;n=m+(c/i|0)|0;if(c%i|0)n=n+1|0;i=m;e=m;o=l;while(i<n){if(KI(a,g,o,l+(i-m|0)|0,f,k)){p=V((i-e|0)+1|0,a.F);Bn(a.de,Cf(a.Z),p);Cb(a.dU,0.0,V(e,a.F),Cf(a.Z),p);}else{q=Fh(f,g,o,k);c=e-m|0;e=a.F;Ed(a,h,V(c,e)-(d%e|0)|0,b,k.eB,q);o=(l+i|0)-m|0;Bn(a.de,Cf(a.Z),a.F);Cb(a.dU,0.0,V(i,a.F),Cf(a.Z),a.F);e=i;}i=i+1|0;}q=Fh(f,g,o,k);c=e-m|0;e=a.F;Ed(a,h,V(c,e)-(d%e|0)|0,b,k.eB,q);}
function KI(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Fh(e,b,c,f)!==f.g7?0:1;}
function Fh(b,c,d,e){c=c.data;return d<c.length&&c[d]?J3(b.dy,b,c[d]):e.g7;}
function Ed(a,b,c,d,e,f){Ev(b,a.iE.b+d.b|0,c+d.a|0,a.de,a.dU,a.Z,e,f,a.mf);}
function Fx(a,b,c,d,e){Ei(b,c,a.ee.b-20.0*e,d);}
function M5(){B.call(this);this.m0=null;}
var Df=F(Bq);
var Se=F(FH);
function TW(){B.call(this);this.oS=null;}
function AIG(a,b){var c,d,e,f;c=a.oS;if(c.dT!=3){b=b.data;d=CP(b[0]);e=D5(b[1]);Ly(c.f,d,e,null,null);if(c.ek){b=DZ(c);f=Jg(D1(),c.rX);c=new R;T(c);L(FC(L(L(c,b),C(232)),f),C(168));$rt_globals.console.info($rt_ustr(S(c)));}}}
var Xt=F(0);
function WE(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(JY(b)){case -1655966961:if(!B1(b,C(140)))break a;c=4;break a;case 3401:if(!B1(b,C(164)))break a;c=3;break a;case 98723:if(!B1(b,C(139)))break a;c=2;break a;case 3254818:if(!B1(b,C(130)))break a;c=1;break a;case 3556653:if(!B1(b,C(117)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;default:d=D2();e=new R;T(e);L(L(e,C(233)),b);CT(d,S(e));c=0;break b;}c=0;}return c;}
function ABn(){var a=this;B.call(a);a.i4=null;a.jk=null;a.dI=null;a.i$=null;a.bd=null;a.kq=null;a.kw=null;a.eu=null;a.e4=null;a.gx=null;}
function ANc(a,b){var c=new ABn();AH9(c,a,b);return c;}
function AH9(a,b,c){var d,e,f;a.dI=b;a.i$=c;b=new TX;b.kt=0;b.ga=Bu(16);b.eH=0;a.bd=b;b=new R;T(b);a.gx=b;a.eu=FQ();b=new Rz;d=AAX(16);b.eW=0;b.db=O(GS,d);b.nZ=0.75;TO(b);a.e4=b;b=new TS;c=a.bd;e=a.gx;f=a.eu;b.cK=c;b.iU=e;b.pL=f;a.kq=b;b=new TL;b.cn=c;b.j0=e;b.oy=f;a.kw=b;}
function Mk(a){var b,c,d,e,f,g,h;a:{b=IR(a.dI.dR);c=b.f5;if(c.cq>0){d=c.co;e=0;b:while(true){f=b.f5.bR.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.ch;if(Iz(a.eu,g))B7(a.eu,g);else{h=a.eu;Dn(h,g,Ct(h.cq));}c=c.cm;if(d!=b.f5.co)break b;}e=e+1|0;}b=new Gb;W(b);J(b);}}b=a.dI.ev;if(b!==null)Qf(a,b);Bf(a.bd,a.dI.dR.cq);b=Rd(IR(a.dI.dR));while(EF(b)){c=NV(b);He(a.bd,a.gx.D,H(c));DJ(a.gx,c);}b=Rd(IR(a.dI.dR));while(EF(b)){c=NV(b);c=B7(a.dI.dR,c);Bf(a.bd,c.j);c=BL(c);while(BM(c)){g=BP(c);g=B7(a.eu,g);Bf(a.bd,
g.ba);}}if(a.dI.ev===null)Bf(a.bd,(-1));else{Bf(a.bd,a.e4.eW);Rn(a,a.dI.ev);}if(a.i$===null)Bf(a.bd,(-1));else{Bf(a.bd,1);W1(a.i$,a.bd,a.e4);}b=a.bd;d=b.kt;if(d&&b.eH!=d){c=D2();d=b.kt;e=b.eH;g=new R;T(g);L(Bj(L(Bj(L(g,C(234)),d),C(235)),e),C(236));CT(c,S(g));}f=b.ga;d=f.data.length;e=b.eH;if(d!=e)f=HZ(f,e);a.i4=f;a.jk=ER(S(a.gx));}
function Qf(a,b){var c,d,e,f,g,h;if(T6(a.e4,b))KP(a.e4,b);else{c=a.e4;d=Ct(c.eW);if(b===null){e=Pk(c);if(e===null){c.it=c.it+1|0;e=T_(c,null,0,0);f=c.eW+1|0;c.eW=f;if(f>c.ks)Mf(c);}}else{g=H4(b);h=g&(c.db.data.length-1|0);e=Mo(c,b,h,g);if(e===null){c.it=c.it+1|0;e=T_(c,b,h,g);f=c.eW+1|0;c.eW=f;if(f>c.ks)Mf(c);}}e.cw=d;}b=b.cb;if(b===null)return;c=new VY;c.oB=a;b.d4(c);}
function Rn(a,b){var c,d,e,f;c=(KP(a.e4,b)).ba;Bf(a.bd,c);if(b instanceof JD)Bf(a.bd,(-1));else if(!(b instanceof Jc))Bf(a.bd,0);else Bf(a.bd,1);d=a.kq;Bf(d.cK,b.dA.cr());e=b.dA;f=new Lh;f.t6=d;e.d4(f);d=a.kw;Bf(d.cn,b.dZ.cr());e=b.dZ;f=new Ti;f.r3=d;e.d4(f);d=b.hx;Bf(a.bd,d.cr());e=new Ue;e.sR=a;d.d4(e);d=b.fr;Bf(a.bd,d.cr());d=d.bS();while(d.ca()){e=d.bL();L6(a.kq,e.hB);F7(a.kw,e.iq);Bf(a.bd,e.n9);}d=b.rZ;if(d===null)Bf(a.bd,(-1));else Bf(a.bd,(B7(a.eu,d)).ba);b=b.cb;Bf(a.bd,b.cr());d=new NO;d.l3=a;b.d4(d);}
function Lx(){B.call(this);this.se=null;}
function ABU(a,b){var c,d,e,f,g,h,i,j;c=a.se;if(c.ek){d=DZ(c);e=new R;T(e);L(L(e,d),C(237));$rt_globals.console.info($rt_ustr(S(e)));}b=b.data;f=CP(b[0]);g=D5(b[1]);h=(CP(b[2])).data[0];if(c.f.b3==h){i=null;j=null;if(b.length>=5){i=CP(b[3]);j=D5(b[4]);}Ly(c.f,f,g,i,j);Eg(c.f.cP);Eg(c.f.c_);IW(c.f);GC(c.f);KJ(c);}}
function OL(){var a=this;B.call(a);a.v0=null;a.v3=null;a.v2=null;}
function Q4(){var a=this;B.call(a);a.tN=null;a.tO=null;a.tM=0;}
function AE2(a,b){var c,d,e;c=a.tN;d=a.tO;e=a.tM;d.m(Uv(c,(b.u.b+e|0)-c.dH.b|0));}
function Q3(){var a=this;B.call(a);a.n7=null;a.n5=null;a.n6=0;}
function AMk(a,b){var c,d,e;c=a.n7;d=a.n5;e=a.n6;d.m(Ow(c,(b.u.a+e|0)-c.dH.a|0));}
var Et=F(0);
function Mr(){var a=this;B.call(a);a.gU=0;a.ln=0;a.hQ=0;a.fy=0;a.f4=null;}
function BM(a){return a.gU>=a.hQ?0:1;}
function BP(a){var b,c;N8(a);b=a.gU;a.fy=b;c=a.f4;a.gU=b+1|0;return c.kB(b);}
function P0(a){var b,c,d;if(a.fy<0){b=new Df;W(b);J(b);}N8(a);a.f4.ls(a.fy);a.ln=a.f4.bJ;c=a.fy;d=a.gU;if(c<d)a.gU=d-1|0;a.hQ=a.hQ-1|0;a.fy=(-1);}
function N8(a){var b;if(a.ln>=a.f4.bJ)return;b=new Gb;W(b);J(b);}
var Yp=F();
function Rv(){B.call(this);this.wG=null;}
var AAc=F();
var Lw=F();
function ALh(a,b){b=b;b.Z=CY(b.Z,null);}
function L2(){var a=this;B.call(a);a.ps=0;a.pr=0;}
function TX(){var a=this;B.call(a);a.ga=null;a.kt=0;a.eH=0;}
function He(a,b,c){Bf(a,b);Bf(a,c);}
function Bf(a,b){var c,d;c=a.ga;d=c.data.length;if(d==a.eH)a.ga=HZ(c,d*2|0);c=a.ga.data;d=a.eH;a.eH=d+1|0;c[d]=b;}
function Rz(){var a=this;Dv.call(a);a.eW=0;a.db=null;a.it=0;a.nZ=0.0;a.ks=0;}
function AAX(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function TO(a){a.ks=a.db.data.length*a.nZ|0;}
function T6(a,b){return VL(a,b)===null?0:1;}
function KP(a,b){var c;c=VL(a,b);if(c===null)return null;return c.cw;}
function VL(a,b){var c,d;if(b===null)c=Pk(a);else{d=H4(b);c=Mo(a,b,d&(a.db.data.length-1|0),d);}return c;}
function Mo(a,b,c,d){var e;e=a.db.data[c];while(e!==null&&!(e.kr==d&&(b!==e.ch?0:1))){e=e.f9;}return e;}
function Pk(a){var b;b=a.db.data[0];while(b!==null&&b.ch!==null){b=b.f9;}return b;}
function T_(a,b,c,d){var e,f;e=new GS;V4(e,b,null);e.kr=d;f=a.db.data;e.f9=f[c];f[c]=e;return e;}
function Mf(a){var b,c,d,e,f,g,h,i;b=a.db.data.length;b=AAX(!b?1:b<<1);c=O(GS,b);d=c.data;e=0;f=b-1|0;while(true){g=a.db.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.kr&f;i=h.f9;h.f9=d[b];d[b]=h;h=i;}e=e+1|0;}a.db=c;TO(a);}
function TS(){var a=this;B.call(a);a.cK=null;a.iU=null;a.pL=null;}
function L6(a,b){var c;if(!(b instanceof KQ)){Bf(a.cK,3);U6(a,b);Bf(a.cK,b.gi);}else{c=b;Bf(a.cK,5);U6(a,c);Bf(a.cK,c.gi);Bf(a.cK,c.lS);b=c.iG;Bf(a.cK,b.j);c=new LV;c.m8=a;DN(b,c);}}
function U6(a,b){var c;c=b.dB.gr;He(a.cK,a.iU.D,H(c));Bf(a.cK,b.dB.cS);Lq(a,b.iv);DJ(a.iU,c);}
function Lq(a,b){if(b===null)Bf(a.cK,(-1));else Bf(a.cK,(B7(a.pL,b)).ba);}
function TL(){var a=this;B.call(a);a.cn=null;a.j0=null;a.oy=null;}
function F7(a,b){var c,d,e;if(b instanceof FA){c=b;Bf(a.cn,9);OJ(a,c.fN);}else if(b instanceof HH){d=b;Bf(a.cn,3);Pn(a,d);Bf(a.cn,d.md);OJ(a,d.fW);}else if(b instanceof H1){e=b;Bf(a.cn,4);F7(a,e.gM);F7(a,e.fY);}else if(b===null)Bf(a.cn,(-1));else{Bf(a.cn,5);Pn(a,b);Bf(a.cn,b.ra);}}
function Pn(a,b){var c;c=b.eq.gr;He(a.cn,a.j0.D,H(c));Bf(a.cn,b.eq.cS);b=b.eV;if(b===null)Bf(a.cn,(-1));else Bf(a.cn,(B7(a.oy,b)).ba);DJ(a.j0,c);}
function OJ(a,b){var c;Bf(a.cn,b.j);c=new V8;c.nb=a;DN(b,c);}
function SH(){var a=this;B.call(a);a.qp=0;a.uD=0;}
function GN(a,b){return OT(a.qp,b,a.uD);}
var DR=F(Bq);
function MA(){var a=this;B.call(a);a.l2=null;a.pn=null;a.sQ=0;a.t8=0;}
function Ku(a,b){return Ey(a.pn)<b?0:1;}
function Sa(){B.call(this);this.sY=null;}
function AH4(a,b){Go(a.sY,b);}
function Sb(){B.call(this);this.rJ=null;}
function AJD(a,b){Go(a.rJ,b);}
var AAU=F();
function SK(b,c,d,e){var f,g;f=b.next();g=new Vt;g.mk=b;g.mj=c;g.mn=d;g.ml=e;f.then(Bi(g,"f"),Bi(d,"f"));}
function W0(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ABm(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(C2()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Vq;f.p4=b;f.p5=d;d.addEventListener("change",Bi(f,"handleEvent"));d.click();}
function W8(b,c){var d;if(c.isFile?1:0)b.m(Ww(c.file()));else{c=c.createReader();d=new Vc;d.s1=b;c.readEntries(Bi(d,"f"));}}
function RQ(){var a=this;B.call(a);a.bb=null;a.vk=null;a.f0=null;a.lB=null;a.iM=null;a.ey=null;}
function FO(a){return a.bb.bw.fg;}
function Wb(a){var b;b=new Rx;b.tQ=a;return b;}
function Zj(a){var b,c,d,e,f,g;b=RU();c=O(Dh,5);d=c.data;e=a.bb;BU(e);f=new VW;f.rc=e;d[0]=Cv(C(238),f);g=a.bb;BU(g);e=new VR;e.nf=g;d[1]=Cv(C(239),e);g=a.bb;BU(g);e=new VS;e.oh=g;d[2]=Cv(C(240),e);g=a.bb;BU(g);e=new VT;e.tK=g;d[3]=Cv(C(241),e);g=a.bb;BU(g);e=new VU;e.l7=g;d[4]=Cv(C(242),e);E5(b,C(243),Gr(c));f=new OR;f.uo=a;Dz(b,C(244),f);g=new Lv;g.nO=a;Ho(b,C(245),g,ARr);return Hb(b);}
function N6(a,b){var c;c=new M2;c.ui=a;c.uj=b;return c;}
function Iu(a,b,c){var d,e,f,g,h,i,j,k,l;a:{Dq(a.ey.bO);d=a.bb.d;e=DI(d);f=Fv(d);g=a.bb.eo;if(c===null)h=null;else{AOX();switch(ASc.data[c.fM]){case 1:h=KS(g,e,f);break a;case 2:h=Px(g,e,f);break a;default:}b=new E9;W(b);J(b);}}c=a.bb;e=Ef(c,b);f=HB(c.d.f,e.X,e.be);g=RH(c,f);if(h!==null){f=c.d;i=e.X;j=e.be;e=new Sj;e.v$=c;e.v9=b;e.v8=g;h.qO(f,i,j,e,c.g6);}else{e=B7(c.d.f.c_,f);if(e!==null)Ha(c,e);else{e=B7(c.d.f.cP,f);if(e!==null&&!DO(e))PV(c.io,b,e,c,g);else{g=c.io;Dq(g.bO);h=g.bO;k=O(Dh,1);l=k.data;d=new Dh;BU(h);f
=new LB;f.uE=h;Wy(d,f,C(246));l[0]=d;O2(h,b,Gr(k),PD(g,c));}}}}
var Xj=F(0);
var PA=F(0);
var Ms=F(0);
var Gd=F();
function Q_(){Gd.call(this);this.si=null;}
function SY(a,b){var c,d,e;c=0;while(true){d=a.si;if(d.hs===null)d.hs=BL(d.oG);if(!BM(d.hs))e=0;else{c=b.cW(BP(d.hs));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Pr=F(0);
function Sk(){B.call(this);this.GB=null;}
var ARo=null;function RA(b){return b===null?C(5):Ts(b);}
function AA6(){ARo=O(Jb,0);}
function Qd(){var a=this;B.call(a);a.va=null;a.u9=null;a.u$=0;a.u_=0;}
function GS(){var a=this;FK.call(a);a.kr=0;a.f9=null;}
var Gb=F(Bq);
function Qk(){B.call(this);this.mc=null;}
function AL2(a,b){Go(a.mc,b);}
function Ml(){B.call(this);this.oc=null;}
function AHA(a,b){Go(a.oc,b);}
function Ui(){B.call(this);this.qB=null;}
function AMM(a,b){var c,d,e,f;c=a.qB;if(c.fJ!=3&&c.dT!=3){b=b.data;c.fX=3;d=CP(b[0]);e=D5(b[1]);Kj(c.f,d,e);if(c.ek){b=DZ(c);f=Jg(D1(),c.gT);c=new R;T(c);L(FC(L(L(c,b),C(247)),f),C(168));$rt_globals.console.info($rt_ustr(S(c)));}}}
function O4(){B.call(this);this.qh=null;}
function ADq(a,b){var c,d,e,f,g,h;c=a.qh;if(c.dT!=3){d=b.data;c.fJ=3;if((CP(d[2])).data[0]!=1)Go(c,b);else{e=CP(d[0]);f=D5(d[1]);g=c.fX!=3?0:1;PE(c.f,e,f,g);if(c.ek){b=DZ(c);h=Jg(D1(),c.gT);c=new R;T(c);L(FC(L(L(c,b),C(248)),h),C(168));$rt_globals.console.info($rt_ustr(S(c)));}}}}
var Vv=F();
function AKY(a,b){W0(b);}
function Vu(){var a=this;B.call(a);a.pq=null;a.pp=null;}
function AEB(a,b){var c,d,e,f,g,h,i;c=a.pq;d=a.pp;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new O5;i.nC=c;i.nB=g;h.then(Bi(i,"f"),Bi(d,"f"));e=e+1|0;}}
var UQ=F();
function AF3(a,b){W0(b);}
function UP(){var a=this;B.call(a);a.oT=null;a.oU=null;}
function AGK(a,b){var c,d,e,f,g;c=a.oT;d=a.oU;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=O(Bv,1);g.data[0]=Es(b.name);SK(f,c,d,g);}
function WS(){B.call(this);this.Cs=null;}
function Vq(){var a=this;B.call(a);a.p4=null;a.p5=null;}
function AFS(a,b){var c,d,e,f,g,h;b=a.p4;c=a.p5;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new LE;h.ma=b;h.l_=g;$rt_globals.setTimeout(Bi(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Ww(d.item(f));g=new Lm;g.rg=b;g.rh=c;$rt_globals.setTimeout(Bi(g,"onTimer"),0);f=f+1|0;}}
function Jb(){var a=this;B.call(a);a.rb=null;a.hN=null;a.hZ=null;a.fm=null;}
function Xu(){var a=this;B.call(a);a.h_=null;a.kn=null;}
function ABJ(){var a=this;B.call(a);a.vM=0;a.xj=0;a.nV=0;a.j7=0;}
function Vf(){var a=this;B.call(a);a.pd=null;a.pe=null;}
function ACS(a){var b,c,d,e,f,g;b=a.pd;c=a.pe;if(BB(c.h_,b.d.eM)){c=c.kn;Ci(b,c.j7,c.nV,0);BY((Z(b)).bs,c.j7,c.nV);BY((Z(b)).bi,c.xj,c.vM);}else{d=(Cc(b.eo.sF)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Fa(b);b=new N$;b.nF=g;b.nD=c;BU(b);c=new Qp;c.sM=b;$rt_globals.setTimeout(Bi(c,"onTimer"),0);}}}
function Vg(){var a=this;B.call(a);a.tJ=null;a.tI=null;}
function AGs(a){Ha(a.tJ,a.tI);}
function EO(){var a=this;B.call(a);a.fz=null;a.cb=null;a.dZ=null;a.dA=null;a.fr=null;a.hx=null;a.rZ=null;}
function ANH(a){var b=new EO();Zp(b,a);return b;}
function Zp(a,b){a.fz=b;a.cb=Bz();a.dZ=Bz();a.dA=Bz();a.hx=Bz();a.fr=Bz();}
function VB(a){var b;b=a.fz;if(b!==null)b.cb.mQ(a);}
function VY(){B.call(this);this.oB=null;}
function AFW(a,b){b=b;Qf(a.oB,b);}
var JD=F(EO);
var Jc=F(EO);
function Ue(){B.call(this);this.sR=null;}
function ACW(a,b){var c;b=b;c=a.sR;Bf(c.bd,(B7(c.eu,b)).ba);}
function OG(){var a=this;B.call(a);a.hB=null;a.iq=null;a.n9=0;}
function NO(){B.call(this);this.l3=null;}
function AIk(a,b){b=b;Rn(a.l3,b);}
function Pp(){var a=this;B.call(a);a.jg=0;a.o6=null;}
function ANz(a,b){var c,d,e;c=a.o6;b=b;d=c.ps;e=c.pr;d=b.b<=d&&e<=b.a?1:0;a.jg=d;return d?0:1;}
var VX=F(DR);
var PN=F(Bq);
var Uk=F(Bq);
function Oc(){B.call(this);this.qf=null;}
function AJA(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.qf;d=CP(c[0]);e=(CP(c[1])).data[0];if(!Sm(b.f)){c=b.f;if(c.b3==e){e=b.uW;f=Uj(d);Eg(c.c_);Eg(c.cP);IW(c);while(f.d1>=f.ge.data.length?0:1){if(X(f)==(-1))continue;g=VP(c,X(f));h=KE(BS(c,g.X),g.be);if(X(f)==(-1)){if(!e)continue;h.bK=0;h.bE=h.bE|4;continue;}i=VP(c,X(f));j=X(f);k=X(f);Dn(c.c_,g,i);l=c.cP;m=Bz();if(B7(l,i)===null)Dn(l,i,m);Bt(B7(c.cP,i),g);h.bK=j;h.bE=k;}JO(b);if(b.vQ){n=Jg(D1(),b.s$);if(AN5(n,BH(100))){b=DZ(b);c=new R;T(c);L(FC(L(L(c,b),
C(249)),n),C(168));$rt_globals.console.info($rt_ustr(S(c)));}}}}}
function ABD(){B.call(this);this.FK=null;}
function UM(){B.call(this);this.lt=null;}
var ARt=null;function RU(){var a=new UM();Xy(a);return a;}
function Xy(a){a.lt=Bz();}
function Dz(a,b,c){NL(a,Cv(b,c));}
function Cv(b,c){return Mt(c,b);}
function E5(a,b,c){Ho(a,b,c,null);}
function Ho(a,b,c,d){NL(a,AOG(null,b,c,d));}
function NL(a,b){Bt(a.lt,b);}
function Hb(a){return Gr(GW(a.lt,ARt));}
function WN(){ARt=O(Dh,0);}
function Ph(){var a=this;B.call(a);a.mr=null;a.ms=null;}
function ANB(a){var b,c;b=a.mr;c=a.ms;HM(b.dP,c);}
function TR(){B.call(this);this.rs=null;}
function O9(){var a=this;B.call(a);a.oG=null;a.hs=null;}
function Ew(){var a=this;B.call(a);a.H=null;a.o=null;a.eF=0.0;}
function ANC(){var a=new Ew();Kp(a);return a;}
function Kp(a){a.H=new Bp;a.o=new Bp;}
function AKr(a){}
function ZI(a){return Cd(0,0);}
function Qi(a,b,c,d){var e;if(!Hl(a.H,b)){a.nU(b);Cp(a.H,b);}if(!Hl(a.o,c)){a.nA(c);Cp(a.o,c);}e=a.eF;if(e!==d){a.eF=d;a.pg(e,d);}}
function Dc(a,b){return Ft(b,a.H,a.o);}
function AL_(a,b){var c,d,e,f;c=a.H;d=c.b;e=c.a;f=a.o;AOu();BC(b,d,e,f,ASd);}
function AHQ(a,b){}
function AMF(a,b){}
function AKz(a,b,c){}
function AMS(a){}
function AGv(a,b,c,d){return 0;}
function ADG(a,b,c){return null;}
function AIA(a,b,c){return 0;}
function AMm(a,b){return 0;}
function AKo(a,b,c,d){return 0;}
function Ie(){var a=this;Ew.call(a);a.cG=null;a.bC=null;a.fT=null;}
function Tp(a,b){a.bC.b=Ik(a,b);}
function We(a,b){a.bC.a=KB(a,b);}
function KB(a,b){return Ba(0,Be(b,a.cG.a-a.o.a|0));}
function Ik(a,b){return Ba(0,Be(b,a.cG.b-a.o.b|0));}
function Pm(){var a=this;Ie.call(a);a.bz=null;a.df=null;a.fS=null;a.sA=null;a.dw=null;a.bQ=null;a.dE=null;a.ei=null;a.cR=0;a.eb=0;a.uk=null;a.dc=0;a.dL=0;a.fd=0;a.eJ=0;a.ew=0;a.ck=0;a.dF=null;a.hF=null;a.pI=null;a.gk=null;}
function N9(a){a.cR=Cn(2.0,a.bz.bW);}
function Vo(a){return a.bQ.data.length?0:1;}
function Sh(a){Bn(a.fS,0,0);}
function AMl(a){a.ei=CY(a.ei,null);Bn(a.fS,0,0);Eg(a.gk);a.dF=null;a.bQ=ARo;a.dE=null;a.dc=0;a.dL=0;a.fd=0;RX(a.df);a.hF=null;}
function AEP(a,b,c){Oo(a);N9(a);a.dw=null;a.dF=null;a.eb=0;}
function WJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=KU(a.bz);if(Vo(a))return;IS(a);CF(c,a.dw);d=DC(a);e=WD(c,a.eb);f=Be(HE(a.o.a,d),a.bQ.data.length)+30|0;g=a.pI.t2;h=a.dE.data;d=h.length;if(d<f){a:{i=a.eJ;j=a.ew;k=a.bQ;l=a.dF;m=a.gk;n=O(Hw,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.e_!==c){TQ(l,q,m);o[f]=Ii(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=Ii(c,l,e,m);i=i+1|0;}}else if(f>0)
{r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=Ii(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){TQ(l,c,m);h[f]=null;}f=f+1|0;}a.dE=n;Cp(a.fS,L3(a.dF));OH(a,a.bz.c6);}a.eJ=Be((a.bC.a+a.cR|0)/(DC(a)+a.cR|0)|0,a.bQ.data.length-1|0);a.ew=Be((((a.bC.a+a.df.bo.a|0)-1|0)+a.cR|0)/(DC(a)+a.cR|0)|0,a.bQ.data.length-1|0);if(!a.dE.data.length)return;Wp(a,e);c=a.H;S$(b,c.b,c.a,a.o);q=g.sk;c=a.H;BC(b,c.b,c.a,a.o,q);c=a.df.cI;i=c.b;j=c.a;p=Cj(a.bz,2.0);s=a.bz.dQ;t=a.eJ;u=i+p|0;while(t<=a.ew){l=NM(a,
t);d=V(t,DC(a));v=t+1|0;w=d+V(v,a.cR)|0;x=u+a.dc|0;y=x+a.dL|0;z=a.ck!=t?0:1;m=!z?q:g.pt;ba=!z?g.rt:g.hq;bb=!z?g.mW:g.hq;bc=!z?g.n0:g.hq;bd=(j+w|0)-a.bC.a|0;Ev(b,u,bd,l.gj,l.qt,a.ei,ba,m,a.bz.b7);Ev(b,x,bd,l.gY,l.hn,a.ei,bb,m,a.bz.b7);Ev(b,y,bd,l.gl,l.il,a.ei,bc,m,a.bz.b7);d=l.gj.b;be=u+d|0;Bn(s,Ba(0,a.dc-d|0),l.gj.a);BC(b,be,bd,s,m);d=u+a.dc|0;f=l.gY.b;bf=d+f|0;Bn(s,Ba(0,a.dL-f|0),l.gY.a);BC(b,bf,bd,s,m);d=l.gl.b;bg=y+d|0;Bn(s,Ba(0,(((a.df.bo.b-d|0)-a.dL|0)-a.dc|0)-p|0),l.gl.a);BC(b,bg,bd,s,m);bh=(i+a.o.b|0)
-p|0;Bn(s,p,DC(a)+a.cR|0);BC(b,bh,bd,s,q);t=v;}Kt(b);}
function Wp(a,b){var c,d,e,f,g,h;c=0;d=a.eJ;while(d<=a.ew){e=NM(a,d);if(!(e!==null&&e.e_===a.bQ.data[d])){f=a.dE.data;g=a.bQ;e=a.dF;h=a.gk;c=d%f.length|0;if(f[c]!==null)TQ(e,f[c],h);f[c]=Ii(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cp(a.fS,L3(a.dF));OH(a,a.bz.c6);}}
function OH(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fS;c=EX(b,c.b+150|0,c.a,a.bz.b7);CF(c,a.dw);d=a.dw;e=d.d0;f=e-(e+d.dC)/16.0;g=a.dE.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.e_.hN;k=d.hn;Ei(c,j,k.bk+a.eb,f+k.bD);j=d.e_.hZ;d=d.il;Ei(c,j,d.bk+a.eb,f+d.bD);}i=i+1|0;}a:{d=a.gk;if(d.cq>0){h=d.co;i=0;b:while(true){g=d.bR.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.ch;l=j.cw;k=k;l=l.iu;Ei(c,k,l.bk+a.eb,f+l.bD);j=j.cm;if(h!=d.co)break b;}i=i+1|0;}b=new Gb;W(b);J(b);}}if(a.ei===null)a.ei=Gt(b);Ek(a.ei,
c);K0(c);}
function NM(a,b){var c;c=a.dE.data;return c[b%c.length|0];}
function AJZ(a,b){Cp(a.df.bo,b);}
function ALj(a,b){Cp(a.df.cI,b);}
function Ob(a){var b,c;IS(a);b=DC(a);c=a.bQ.data.length;b=V(b,c)+V(a.cR,c+1|0)|0;Bn(a.cG,a.o.b,b);}
function AAx(a,b,c){var d,e;d=(a.dc+a.dL|0)+a.fd|0;e=Cj(a.bz,5.0);return Cd(Ff(e,b.b,a.bz.cB.b-d|0),Ff(c,b.a,a.bz.cB.a-a.cG.a|0));}
function ABa(a,b){var c,d,e,f;Oo(a);Ob(a);c=(a.dc+a.dL|0)+a.fd|0;d=a.bz;e=(d.cB.b-b.b|0)-Cj(d,5.0)|0;d=a.bz;f=(d.cB.a-b.a|0)-Cj(d,5.0)|0;return Cd(Be(c,e),Be(a.cG.a,f));}
function Oo(a){var b,c,d,e,f,g,h,i,j;b=KU(a.bz);if(Vo(a))return;IS(a);CF(b,a.dw);c=WD(b,a.eb);d=a.bQ.data;e=d.length;f=0;while(f<e){g=d[f];h=G7(c,g.fm);i=G7(c,g.hN);j=G7(c,g.hZ);a.dc=Ba(a.dc,h);a.dL=Ba(a.dL,i);a.fd=Ba(a.fd,j);f=f+1|0;}}
function TP(a,b){Iv(a.hF);b.rb.t();}
function Ra(a,b){var c,d,e;if(!a.dE.data.length)return (-1);c=DC(a);d=(b.a-a.H.a|0)+a.bC.a|0;e=a.cR;e=(d+e|0)/(c+e|0)|0;if(e<a.bQ.data.length)return e;return (-1);}
function DC(a){return Fi(a.dw);}
function IS(a){var b;if(a.dw===null){b=HU(a.bz,a.sA);a.dw=b;a.dF=AC3(Fi(b));a.eb=Dy(a.dw.ld);}}
function ALz(a,b){var c,d,e;a:{switch(b.bT){case 13:TP(a,a.bQ.data[a.ck]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.ck=a.eJ;b=a.fT;c=a.bC;HX(b,c.b,c.a-(a.o.a/2|0)|0);return 0;case 34:a.ck=a.ew;b=a.fT;c=a.bC;HX(b,c.b,c.a+(a.o.a/2|0)|0);return 0;case 35:case 39:a.ck=a.bQ.data.length-1|0;break a;case 36:case 37:a.ck=0;break a;case 38:d=a.ck;e=a.bQ.data.length;a.ck=((d+e
|0)-1|0)%e|0;break a;case 40:a.ck=(a.ck+1|0)%a.bQ.data.length|0;break a;default:break a;}Iv(a.hF);return 0;}e=a.ck;if(e<=a.eJ)HX(a.fT,a.bC.b,V(e,DC(a))+V(a.ck,a.cR)|0);else if(e>=a.ew)HX(a.fT,a.bC.b,(V(e+1|0,DC(a))+V(a.ck+2|0,a.cR)|0)-a.o.a|0);return 0;}
function O$(){var a=this;B.call(a);a.lX=null;a.lY=null;}
function Iv(a){var b,c;b=a.lX;c=a.lY;HM(b.dP,c);RO(b);}
function OF(){var a=this;Ew.call(a);a.lC=null;a.nX=null;a.sp=null;a.bl=null;a.cH=null;a.cM=null;a.ti=0.0;a.t3=null;a.t0=null;}
function ALg(a){var b;b=a.bl;b.fT=null;a.bl=CY(b,null);}
function AF2(a,b,c,d){Qi(a,b,c,d);Qi(a.bl,b,c,d);if(d!==0.0){Ob(a.bl);b=a.bl;c=b.bC;c.b=Ik(b,c.b);c=b.bC;c.a=KB(b,c.a);if(T5(a))Hz(a);else a.cM=null;if(Nl(a))GB(a);else a.cH=null;}}
function HX(a,b,c){var d;d=a.bl;d.bC.b=Ik(d,b);d.bC.a=KB(d,c);if(T5(a))Hz(a);if(Nl(a))GB(a);}
function Nl(a){var b;b=a.o.a;return b>0&&a.bl.cG.a>b?1:0;}
function T5(a){var b;b=a.o.b;return b>0&&a.bl.cG.b>b?1:0;}
function Hz(a){var b,c,d,e,f,g;b=a.cM;if(b===null)b=Tv();a.cM=b;PI(a,b);c=a.cM;b=a.bl;d=b.bC.b;e=a.H;f=e.b;g=a.o;PB(c,d,f,g.b,b.cG.b,e.a+g.a|0,KX(a));}
function GB(a){var b,c,d,e,f,g;b=a.cH;if(b===null)b=Tv();a.cH=b;PI(a,b);c=a.cH;b=a.bl;d=b.bC.a;e=a.H;f=e.a;g=a.o;Vy(c,d,f,g.a,b.cG.a,e.b+g.b|0,KX(a));}
function KX(a){return Cn(a.ti,a.eF);}
function PI(a,b){var c,d;c=a.t3;d=a.t0;if(!(c!==null&&d!==null?(Ji(b.hg,c)&&Ji(b.hh,d)?1:0):0))F6(b,c,d);}
function AKE(a,b){var c;WJ(a.bl,b);if(!(a.cH===null&&a.cM===null)){DP(b,1);c=a.cH;if(c!==null)G9(c,b);c=a.cM;if(c!==null)G9(c,b);c=a.cH;if(c!==null)Hd(c,b);c=a.cM;if(c!==null)Hd(c,b);DP(b,0);}}
function SI(a,b){var c,d;a:{b:{c=a.cH;if(!(c!==null&&GY(c,b))){c=a.cM;if(c===null)break b;if(!GY(c,b))break b;}d=1;break a;}d=0;}return d;}
function ALL(a,b,c,d){var e;if(!SI(a,b.u)){e=a.bl;if(d==1){c=Ra(e,b.u);if(c>=0)TP(e,e.bQ.data[c]);}}return 1;}
function ALi(a,b,c){var d;d=a.cH;if(d!==null){d=Hj(d,b.u,a.nX,1);if(d!==null)return d;}d=a.cM;if(d!==null){d=Hj(d,b.u,a.sp,0);if(d!==null)return d;}d=a.bl;if(!G8(d.df,b.u)&&!I_(d.df)){b=d.uk;if(b!==null)Iv(b);}return null;}
function AI0(a,b,c){return SI(a,b.u)?1:0;}
function AIH(a,b){var c,d,e;c=a.cH;d=c!==null&&HA(c,b.u,a.lC)?1:0;c=a.cM;e=c!==null&&HA(c,b.u,a.lC)?1:0;a:{if(!d&&!e){c=a.bl;d=Ra(c,b.u);if(d>=0)c.ck=d;if(!(G8(c.df,c.H)&&Fj(c.bz.c4)?1:0)){d=0;break a;}}d=1;}return d;}
function AFj(a,b,c,d){var e,f;if(!Dc(a,b.u))return 0;e=Cn(d*0.25,a.eF);f=Cn(c*0.25,a.eF);if(b.bv){f=f+e|0;e=0;}if(a.cH!==null&&e){b=a.bl;We(b,b.bC.a+e|0);GB(a);}if(a.cM!==null&&f){b=a.bl;Tp(b,b.bC.b+f|0);Hz(a);}return 1;}
function AMY(a){var b,c;b=KX(a);c=ZI(a.bl);c.b=Ba(c.b,b);c.a=Ba(c.a,b);return c;}
function F1(){var a=this;B.call(a);a.dt=0;a.dD=0;a.kb=null;a.li=0;a.e8=null;}
function ALA(a,b,c,d,e,f){var g=new F1();AHC(g,a,b,c,d,e,f);return g;}
function AHC(a,b,c,d,e,f,g){a.dt=b;a.dD=c;a.kb=Cd(f,g);a.li=d;a.e8=e;}
var NW=F(0);
var Ec=F(El);
function N_(){Ec.call(this);this.f5=null;}
function Rd(a){var b;b=new RC;JH(b,a.f5);return b;}
function Lh(){B.call(this);this.t6=null;}
function AFd(a,b){b=b;L6(a.t6,b);}
function Ti(){B.call(this);this.r3=null;}
function AHI(a,b){b=b;F7(a.r3,b);}
function H8(){var a=this;B.call(a);a.dB=null;a.iv=null;a.gi=0;}
function AO3(a,b,c){var d=new H8();Z9(d,a,b,c);return d;}
function Z9(a,b,c,d){a.dB=b;a.iv=c;a.gi=d;}
function Zt(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return BB(a.dB,c.dB)&&BB(a.iv,c.iv)&&BB(Ct(a.gi),Ct(c.gi))?1:0;}return 0;}
function KQ(){var a=this;H8.call(a);a.iG=null;a.lS=0;}
function ADp(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){if(!Zt(a,b))return 0;c=b;return BB(a.iG,c.iG);}return 0;}
function D9(){var a=this;B.call(a);a.eq=null;a.eV=null;a.ra=0;}
function AN2(a,b,c){var d=new D9();JZ(d,a,b,c);return d;}
function JZ(a,b,c,d){a.eq=b;a.eV=c;a.ra=d;}
function W$(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return BB(a.eq,c.eq)&&BB(a.eV,c.eV)?1:0;}return 0;}
function FA(){D9.call(this);this.fN=null;}
function HH(){var a=this;D9.call(a);a.fW=null;a.md=0;}
function AMq(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){if(!W$(a,b))return 0;c=b;return BB(a.fW,c.fW);}return 0;}
function H1(){var a=this;D9.call(a);a.gM=null;a.fY=null;}
function ACE(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return BB(a.gM,c.gM)&&BB(a.fY,c.fY)?1:0;}return 0;}
function Yf(){var a=this;Gd.call(a);a.EK=null;a.GU=0;a.Fk=0;a.CP=0;}
function QK(){var a=this;B.call(a);a.mw=null;a.mx=null;}
function AGA(a){var b,c;b=a.mw;c=a.mx;Rs();Iu(b,c,ASe);}
function QL(){var a=this;B.call(a);a.pO=null;a.pP=null;}
function AD3(a){var b,c;b=a.pO;c=a.pP;Rs();Iu(b,c,ASf);}
function QI(){var a=this;B.call(a);a.ta=null;a.s_=null;}
function ACT(a){Iu(a.ta,a.s_,null);}
function QJ(){var a=this;B.call(a);a.l5=null;a.l6=null;}
function AGw(a){var b,c,d,e,f,g,h;b=a.l5;c=a.l6;d=DI(b.bb.d);e=Fv(b.bb.d);d=Sx(b.bb.eo,d,e);Dq(b.ey.bO);b=b.bb;e=Ef(b,c);if(d!==null){f=b.d;g=e.X;h=e.be;e=new T3;e.wq=b;e.wr=c;d.Fu(f,g,h,1,e,b.g6);}}
function PR(){B.call(this);this.oj=null;}
function AKj(a){var b;b=a.oj;Dq(b.ey.bO);Kl(b.bb,Wb(b),0);}
function PQ(){B.call(this);this.tA=null;}
function AI9(a){var b;b=a.tA;Dq(b.ey.bO);Kl(b.bb,Wb(b),1);}
function PP(){B.call(this);this.rk=null;}
function ANp(a){var b,c,d,e;b=a.rk;Dq(b.ey.bO);FO(b);b=b.bb;BU(b);c=new Wd;c.oV=b;b=XI(C(250));if(!Ko()){c=new Bq;Br(c,C(251));KG(b,c);}else{d=$rt_globals.navigator.clipboard.readText();e=new PO;e.mE=c;b=ABK(b);d.then(Bi(e,"f"),Bi(b,"f"));}}
function NZ(){var a=this;B.call(a);a.mt=null;a.mu=null;}
function AI5(a){var b,c;b=a.mt;c=a.mu;b=b.bb.d;b.kR=c;HV(b);}
var O8=F(0);
var ARr=null;function Z1(){ARr=new SL;}
function OR(){B.call(this);this.uo=null;}
function ADQ(a){var b,c,d;b=a.uo;Dq(b.ey.bO);c=FO(b);b=b.bb;BU(b);d=new Ql;d.rA=b;Up(c,d);}
function Hw(){var a=this;B.call(a);a.qt=null;a.hn=null;a.il=null;a.gj=null;a.gY=null;a.gl=null;a.e_=null;}
function Ii(b,c,d,e){var f,g,h;f=new Hw;f.gj=new Bp;f.gY=new Bp;f.gl=new Bp;f.e_=b;g=B7(e,b.fm);if(g!==null)g.gG=g.gG+1|0;else{g=new TZ;h=K5(c,b.fm,d);g.gG=1;g.iu=h;Dn(e,b.fm,g);}e=g.iu;f.qt=e;Bn(f.gj,e.Y|0,e.bV|0);e=K5(c,b.hN,d);f.hn=e;Bn(f.gY,e.Y|0,e.bV|0);b=K5(c,b.hZ,d);f.il=b;Bn(f.gl,b.Y|0,b.bV|0);return f;}
function TQ(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.e_.fm;f=B7(d,e);g=f.gG-1|0;f.gG=g;if(!g){a:{h=0;i=null;if(e===null){j=d.bR.data[0];while(j!==null){if(j.ch===null)break a;e=j.cm;i=j;j=e;}}else{k=JY(e);l=d.bR.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.ia==k&&WY(e,j.ch))){m=j.cm;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cm=j.cm;else d.bR.data[h]=j.cm;d.co=d.co+1|0;d.cq=d.cq-1|0;}JR(b,f.iu);}JR(b,c.hn);JR(b,c.il);}
var Qj=F(0);
function WD(b,c){var d;d=new T0;d.nS=b;d.nR=c;return d;}
function WM(){var a=this;B.call(a);a.fb=null;a.fR=0;a.h2=0;a.fu=0;}
function AC3(a){var b=new WM();AFk(b,a);return b;}
function AFk(a,b){a.fb=Bz();a.fu=0;a.h2=2048;a.fR=b;}
function K5(a,b,c){var d,e,f,g,h,i,j;d=G7(c,b);e=a.h2;if(d>e){c=new Bq;f=new R;T(f);B0(Bj(L(Bj(L(f,C(252)),d),C(253)),e),41);Br(c,S(f));J(c);}if(!a.fR){b=new BI;Br(b,C(254));J(b);}a:{b=new B4;if(d){b:{c=a.fb;if(c.j>0){c=BL(c);g=d;while(true){if(!BM(c))break b;f=BP(c);if(f.Y>=g)break;}Cb(b,f.bk,f.bD,g,a.fR);f.bk=f.bk+g;h=f.Y-g;f.Y=h;if(h===0.0)TV(a.fb,f);break a;}}g=a.fu;i=d;Cb(b,0.0,g,i,a.fR);c=a.fb;f=new B4;h=a.fu;g=a.h2-d|0;j=a.fR;f.bk=i;f.bD=h;f.Y=g;f.bV=j;Bt(c,f);a.fu=a.fu+a.fR|0;}}return b;}
function JR(a,b){var c,d,e,f,g,h,i;a:{c=new B4;c.bk=b.bk;c.bD=b.bD;c.Y=b.Y;c.bV=b.bV;b=a.fb;if(b.j>0){d=BL(b);while(true){if(!BM(d))break a;e=BP(d);if(e.bD===c.bD){f=e.bk;g=e.Y;h=f+g;i=c.bk;if(h===i){c.bk=f;c.Y=c.Y+g;P0(d);}else{h=c.Y;if(i+h===f){c.Y=h+g;P0(d);}}}}}}Bt(a.fb,c);}
function L3(a){return Cd(a.h2,a.fu);}
function TJ(){var a=this;Ew.call(a);a.eL=null;a.f6=null;a.hm=null;a.em=null;a.ik=0.0;a.f_=0;a.hr=0;a.c5=null;a.i_=null;}
function Jj(a){var b;b=a.o;return b.b&&b.a?0:1;}
function Uq(a){var b,c;a:{if(a.hm!==null){b=a.f6;if(b!==null&&!DT(b)){c=0;break a;}}c=1;}return c;}
function Of(a,b){a.o.a=b;}
function Os(a,b,c,d,e){var f,g;f=a.eL.dQ;Bn(f,d,a.o.a);g=a.H;BC(b,g.b+c|0,g.a,f,e);}
function To(a){if(a.em===null)a.em=HU(a.eL,a.hm);}
function Sp(){B.call(this);this.q6=null;}
function AMC(a,b,c){var d,e;c=a.q6;d=c.d.f;e=b.ba;b=c.ej;Q5(d.v.data[e],0,b);}
var UH=F(BT);
function Dh(){var a=this;B.call(a);a.jn=null;a.hy=null;a.d5=null;a.dq=null;a.hU=null;a.ku=null;a.g_=0;a.kp=null;}
function Mt(a,b){var c=new Dh();Wy(c,a,b);return c;}
function AOG(a,b,c,d){var e=new Dh();YI(e,a,b,c,d);return e;}
function Wy(a,b,c){YI(a,b,c,null,null);}
function YI(a,b,c,d,e){a.hy=new B4;a.d5=new Bp;a.dq=new Bp;a.kp=c;a.ku=e;a.jn=b;a.hU=d;}
function Ta(a){return a.hU===null?0:1;}
function L9(){B.call(this);this.nW=null;}
function AG4(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.nW;c=new Hc;d=new HC;e=new HQ;AAS();IN(e,AR4);K7(d,e,BA(AR6),BA(AR5),BA(AR8),BA(AR6),BA(AR7),BA(AR$),BA(AR9),BA(ASa),BA(AR_),BA(ASb));X4();f=(ASg.fU()).data;g=f.length;h=O(HY,g);i=h.data;j=0;while(j<g){i[j]=f[j].k4;j=j+1|0;}k=ZR(N(C(255)),N(C(256)),N(C(257)),N(C(227)));l=new Hh;m=new Hu;AIq();e=ASh;La(m,e,ASi,ASj,ASk,ASl,e);Kh(l,m,ABg(),ABp(N(C(258)),N(C(89)),N(C(90))),ABg(),Wm(1,0.125),ASm,ASn);H3(c,d,h,k,l,WG(N(C(91)),N(C(92)),N(C(93)),N(C(259))));IY(b,c);}
function L$(){B.call(this);this.o2=null;}
function ALT(a){Pf(a.o2);}
function L8(){B.call(this);this.um=null;}
function ABT(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.um;c=new Hc;d=new HC;e=new HQ;AAD();IN(e,ASo);K7(d,e,BA(ASp),BA(ASq),BA(ASr),BA(ASp),BA(ASs),BA(ASt),BA(ASu),BA(ASv),BA(ASw),BA(ASx));ZN();f=(ASy.fU()).data;g=f.length;h=O(HY,g);i=h.data;j=0;while(j<g){i[j]=f[j].ka;j=j+1|0;}k=ZR(N(C(260)),N(C(261)),N(C(262)),N(C(263)));l=new Hh;m=new Hu;ACG();e=ASz;La(m,e,ASA,ASB,ASC,ASD,e);Kh(l,m,AA9(),ABp(N(C(264)),N(C(265)),G$(0)),AA9(),Wm(1,0.07500000298023224),ASE,ASF);H3(c,d,h,k,l,WG(N(C(266)),N(C(267)),N(C(268)),N(C(269))));IY(b,
c);}
function UO(){B.call(this);this.pB=null;}
function AHO(a){var b;b=a.pB;H6(b,b.gw.lp,b.fc+1|0);}
function UN(){B.call(this);this.sK=null;}
function AKD(a){var b,c;b=a.sK;c=b.fc;if(c>7)H6(b,b.gw.lp,c-1|0);}
function NU(){B.call(this);this.m_=null;}
function AEF(a){var b,c,d,e,f,g,h,i;b=a.m_;c=G(Bv,[C(103),C(188),C(270)]).data;d=O(Dh,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new L5;i.oA=b;i.oz=h;e[f]=Mt(i,h);f=f+1|0;}return d;}
function Re(){B.call(this);this.nw=null;}
function AGI(a){Qa(a.nw.lB,0);}
function Rf(){B.call(this);this.oK=null;}
function ALB(a){Qa(a.oK.lB,1);}
function VW(){B.call(this);this.rc=null;}
function AB7(a){var b,c,d,e,f;b=a.rc.d.f;c=b.b3;d=new R;T(d);Bj(L(d,C(271)),c);$rt_globals.console.info($rt_ustr(S(d)));c=b.kg;d=new R;T(d);Bj(L(d,C(272)),c);$rt_globals.console.info($rt_ustr(S(d)));d=b.cC;e=Gy(EM(b));UX(d,0,d.cA,e);b=IL();f=b.jq;f.data[0]=10;M9(b,f,0,1);}
function VR(){B.call(this);this.nf=null;}
function AGL(a){Qm(a.nf);}
function VS(){B.call(this);this.oh=null;}
function AMQ(a){RJ(a.oh);}
function VT(){B.call(this);this.tK=null;}
function AH2(a){KJ(a.tK.d);}
function VU(){B.call(this);this.l7=null;}
function AGc(a){HV(a.l7.d);}
function Lv(){B.call(this);this.nO=null;}
function ALO(a){var b,c,d,e,f,g,h;b=a.nO;c=O(Dh,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Mt(N6(b,g),MD(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Mt(N6(b,g),MD(g));e=h;}return c;}
var J0=F(0);
function Vm(){var a=this;B.call(a);a.n$=null;a.n_=null;a.oa=null;}
function Ng(){B.call(this);this.pG=null;}
function ACC(a,b){var c,d;c=a.pG;d=GN(b,c.bl.cG.a-c.o.a|0);We(c.bl,d);GB(c);}
function Nf(){B.call(this);this.qK=null;}
function ACX(a,b){var c,d;c=a.qK;d=GN(b,c.bl.cG.b-c.o.b|0);Tp(c.bl,d);Hz(c);}
function RV(){B.call(this);this.pC=null;}
function ADt(a,b,c){FD(BS(a.pC.d.f,b.ba),0,H(c));}
function O5(){var a=this;B.call(a);a.nC=null;a.nB=null;}
function AEO(a,b){a.nC.m(ZC(a.nB,b));}
function ABk(){var a=this;B.call(a);a.gr=null;a.cS=0;}
function AFU(a,b){var c=new ABk();AB2(c,a,b);return c;}
function AB2(a,b,c){a.gr=b;a.cS=c;}
function AI$(a,b){var c;if(a===b)return 1;if(b!==null&&Bw(a)===Bw(b)){c=b;return a.cS==c.cS&&BB(a.gr,c.gr)?1:0;}return 0;}
function LV(){B.call(this);this.m8=null;}
function AHG(a,b){b=b;Lq(a.m8,b);}
function V8(){B.call(this);this.nb=null;}
function ANw(a,b){b=b;F7(a.nb,b);}
var HS=F(0);
function LE(){var a=this;B.call(a);a.ma=null;a.l_=null;}
function AGO(a){W8(a.ma,a.l_);}
function Lm(){var a=this;B.call(a);a.rg=null;a.rh=null;}
function ABX(a){a.rg.m(a.rh);}
function TY(){B.call(this);this.qy=null;}
function AM$(a){return a.qy;}
var SL=F();
function Vt(){var a=this;B.call(a);a.mk=null;a.mj=null;a.mn=null;a.ml=null;}
function AGi(a,b){var c,d,e,f,g,h,i;c=a.mk;d=a.mj;e=a.mn;f=a.ml;if(!(b.done?1:0)){SK(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Sv;c.oW=d;c.oY=g;c.oZ=f;b.then(Bi(c,"f"),Bi(e,"f"));}else{h=f.data;c=g.values();b=Es(g.name);i=h.length;f=CW(f,i+1|0);f.data[i]=b;SK(c,d,e,f);}}}
function Eu(){var a=this;B.call(a);a.hJ=0;a.rj=0;a.gP=null;a.fp=null;a.o8=null;a.ih=null;}
function ASG(a){var b=new Eu();JH(b,a);return b;}
function JH(a,b){a.ih=b;a.rj=b.co;a.gP=null;}
function EF(a){var b,c;if(a.gP!==null)return 1;while(true){b=a.hJ;c=a.ih.bR.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.hJ=b+1|0;}return 0;}
function XV(a){var b;if(a.rj==a.ih.co)return;b=new Gb;W(b);J(b);}
function J9(a){var b,c,d,e;XV(a);if(!EF(a)){b=new K9;W(b);J(b);}b=a.gP;if(b!==null){c=a.fp;if(c!==null)a.o8=c;a.fp=b;a.gP=b.cm;}else{d=a.ih.bR.data;e=a.hJ;a.hJ=e+1|0;b=d[e];a.fp=b;a.gP=b.cm;a.o8=null;}}
var RC=F(Eu);
function NV(a){J9(a);return a.fp.ch;}
var Ym=F();
function Ko(){return "clipboard" in $rt_globals.navigator?1:0;}
function Xh(){var a=this;B.call(a);a.CL=null;a.HI=0;}
function P5(){var a=this;B.call(a);a.g=null;a.c$=0;a.jh=null;a.m1=0;a.fC=0;a.ef=0;a.bg=0;a.km=null;}
function IU(a){return a.g.bu;}
function VQ(a,b,c,d){var e,f,g,h,i,j;e=Bz();f=a.c$;g=0;if(c!=f)a.c$=c;a:{switch(b){case -1073741784:h=new QC;c=a.bg+1|0;a.bg=c;EP(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new OI;c=a.bg+1|0;a.bg=c;EP(h,c);break a;case -33554392:h=new RD;c=a.bg+1|0;a.bg=c;EP(h,c);break a;default:c=a.fC+1|0;a.fC=c;if(d!==null)h=AO$(c);else{h=new E0;EP(h,0);g=1;}c=a.fC;if(c<=(-1))break a;if(c>=10)break a;a.jh.data[c]=h;break a;}h=new VJ;EP(h,(-1));}while(true){if(EB(a.g)&&a.g.h==(-536870788))
{d=AL6(B5(a,2),B5(a,64));while(!CV(a.g)&&EB(a.g)){i=a.g;j=i.h;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cg(d,Bd(i));i=a.g;if(i.U!=(-536870788))continue;Bd(i);}i=Jz(a,d);i.I(h);}else if(a.g.U==(-536870788)){i=FZ(h);Bd(a.g);}else{i=N2(a,h);d=a.g;if(d.U==(-536870788))Bd(d);}if(i!==null)Bt(e,i);if(CV(a.g))break;if(a.g.U==(-536870871))break;}if(a.g.jJ==(-536870788))Bt(e,FZ(h));if(a.c$!=f&&!g){a.c$=f;d=a.g;d.fn=f;d.h=d.U;d.d9=d.ep;j=d.cN;d.q=j+1|0;d.go=j;EE(d);}switch(b){case -1073741784:break;case -536870872:d
=new LC;E1(d,e,h);return d;case -268435416:d=new Ub;E1(d,e,h);return d;case -134217688:d=new P$;E1(d,e,h);return d;case -67108824:d=new RZ;E1(d,e,h);return d;case -33554392:d=new Dp;E1(d,e,h);return d;default:switch(e.j){case 0:break;case 1:return AOW(Bo(e,0),h);default:return AOC(e,h);}return FZ(h);}d=new H0;E1(d,e,h);return d;}
function AAv(a){var b,c,d,e,f,g,h;b=Bu(4);c=(-1);d=(-1);if(!CV(a.g)&&EB(a.g)){e=b.data;c=Bd(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B2(3);b=e.data;b[0]=c&65535;f=a.g;g=f.U;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bd(f);f=a.g;g=f.U;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bd(f);return ALR(e,3);}return ALR(e,2);}if(!B5(a,2))return XT(b[0]);if(B5(a,64))return AKa(b[0]);return ADU(b[0]);}e=b.data;c=1;while(c<4&&!CV(a.g)&&EB(a.g)){h=c+1|0;e[c]=Bd(a.g);c=h;}if(c==1){h=e[0];if(!(ASH.w8(h)==ASI?0:1))return VF(a,e[0]);}if
(!B5(a,2))return API(b,c);if(B5(a,64)){f=new Vs;M3(f,b,c);return f;}f=new Sc;M3(f,b,c);return f;}
function N2(a,b){var c,d,e,f,g,h,i;if(EB(a.g)&&!II(a.g)&&Ja(a.g.h)){if(B5(a,128)){c=AAv(a);if(!CV(a.g)){d=a.g;e=d.U;if(!(e==(-536870871)&&!(b instanceof E0))&&e!=(-536870788)&&!EB(d))c=KY(a,b,c);}}else if(!Na(a.g)&&!Tk(a.g)){f=new Nd;T(f);while(!CV(a.g)&&EB(a.g)&&!Na(a.g)&&!Tk(a.g)){if(!(!II(a.g)&&!a.g.h)&&!(!II(a.g)&&Ja(a.g.h))){g=a.g.h;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bd(a.g);if(!KR(e))B0(f,e&65535);else Hs(f,FJ(e));}if(!B5(a,2)){c=new Qy;C9(c);c.cd
=S(f);e=f.D;c.bt=e;c.jx=AIV(e);c.ko=AIV(c.bt);h=0;while(h<(c.bt-1|0)){Qe(c.jx,I(c.cd,h),(c.bt-h|0)-1|0);Qe(c.ko,I(c.cd,(c.bt-h|0)-1|0),(c.bt-h|0)-1|0);h=h+1|0;}}else if(B5(a,64))c=APH(f);else{c=new L4;C9(c);c.gq=S(f);c.bt=f.D;}}else c=KY(a,b,Vr(a,b));}else{d=a.g;if(d.U!=(-536870871))c=KY(a,b,Vr(a,b));else{if(b instanceof E0)J(B3(C(5),d.bu,M_(d)));c=FZ(b);}}a:{if(!CV(a.g)){e=a.g.U;if(!(e==(-536870871)&&!(b instanceof E0))&&e!=(-536870788)){f=N2(a,b);if(c instanceof CG&&!(c instanceof EG)&&!(c instanceof Cx)&&
!(c instanceof D7)){i=c;if(!f.bH(i.B)){c=new Uo;Er(c,i.B,i.e,i.gJ);c.B.I(c);}}if((f.gQ()&65535)!=43)c.I(f);else c.I(f.B);break a;}}if(c===null)return null;c.I(b);}if((c.gQ()&65535)!=43)return c;return c.B;}
function KY(a,b,c){var d,e,f,g,h;d=a.g;e=d.U;if(c!==null&&!(c instanceof BV)){switch(e){case -2147483606:Bd(d);d=new Wh;CR(d,c,b,e);K3();c.I(ASJ);return d;case -2147483605:Bd(d);d=new Oz;CR(d,c,b,(-2147483606));K3();c.I(ASJ);return d;case -2147483585:Bd(d);d=new Oe;CR(d,c,b,(-536870849));K3();c.I(ASJ);return d;case -2147483525:f=new LZ;d=EI(d);g=a.ef+1|0;a.ef=g;H$(f,d,c,b,(-536870849),g);K3();c.I(ASJ);return f;case -1073741782:case -1073741781:Bd(d);d=new Qv;CR(d,c,b,e);c.I(d);return d;case -1073741761:Bd(d);d
=new Pu;CR(d,c,b,(-536870849));c.I(b);return d;case -1073741701:h=new S5;d=EI(d);e=a.ef+1|0;a.ef=e;H$(h,d,c,b,(-536870849),e);c.I(h);return h;case -536870870:case -536870869:Bd(d);if(c.gQ()!=(-2147483602)){d=new Cx;CR(d,c,b,e);}else if(B5(a,32)){d=new Qw;CR(d,c,b,e);}else{d=new Nm;f=Og(a.c$);CR(d,c,b,e);d.jI=f;}c.I(d);return d;case -536870849:Bd(d);d=new Fd;CR(d,c,b,(-536870849));c.I(b);return d;case -536870789:h=new EK;d=EI(d);e=a.ef+1|0;a.ef=e;H$(h,d,c,b,(-536870849),e);c.I(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bd(d);d=new Wi;Er(d,f,b,e);f.e=d;return d;case -2147483585:Bd(d);c=new Uh;Er(c,f,b,(-2147483585));return c;case -2147483525:c=new N1;QZ(c,EI(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bd(d);d=new Po;Er(d,f,b,e);f.e=d;return d;case -1073741761:Bd(d);c=new So;Er(c,f,b,(-1073741761));return c;case -1073741701:c=new P_;QZ(c,EI(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bd(d);d=AO0(f,b,e);f.e=d;return d;case -536870849:Bd(d);c
=new D7;Er(c,f,b,(-536870849));return c;case -536870789:return AN$(EI(d),f,b,(-536870789));default:}return c;}
function Vr(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof E0;while(true){a:{e=a.g;f=e.U;if((f&(-2147418113))==(-2147483608)){Bd(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.c$=g;else{if(f!=(-1073741784))g=a.c$;c=VQ(a,f,g,b);e=a.g;if(e.U!=(-536870871))J(B3(C(5),e.bu,e.cN));Bd(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bd(e);c
=ALD(0);break a;case -2147483577:Bd(e);c=new Nh;BJ(c);break a;case -2147483558:Bd(e);c=new Va;h=a.bg+1|0;a.bg=h;AAQ(c,h);break a;case -2147483550:Bd(e);c=ALD(1);break a;case -2147483526:Bd(e);c=new UL;BJ(c);break a;case -536870876:Bd(e);a.bg=a.bg+1|0;if(B5(a,8)){if(B5(a,1)){c=AOo(a.bg);break a;}c=ANP(a.bg);break a;}if(B5(a,1)){c=AOH(a.bg);break a;}c=APc(a.bg);break a;case -536870866:Bd(e);if(B5(a,32)){c=APu();break a;}c=AO6(Og(a.c$));break a;case -536870821:Bd(e);i=0;c=a.g;if(c.U==(-536870818)){i=1;Bd(c);}c
=Jz(a,Fq(a,i));c.I(b);e=a.g;if(e.U!=(-536870819))J(B3(C(5),e.bu,e.cN));NK(e,1);Bd(a.g);break a;case -536870818:Bd(e);a.bg=a.bg+1|0;if(!B5(a,8)){c=new Jf;BJ(c);break a;}c=new L_;e=Og(a.c$);BJ(c);c.qm=e;break a;case 0:j=e.ep;if(j!==null)c=Jz(a,j);else{if(CV(e)){c=FZ(b);break a;}c=XT(f&65535);}Bd(a.g);break a;default:break b;}Bd(e);c=new Jf;BJ(c);break a;}h=(f&2147483647)-48|0;if(a.fC<h)J(B3(C(5),EN(e),M_(a.g)));Bd(e);a.bg=a.bg+1|0;c=!B5(a,2)?ANT(h,a.bg):B5(a,64)?AOp(h,a.bg):APD(h,a.bg);a.jh.data[h].je=1;a.m1=
1;break a;}if(f>=0&&!F2(e)){c=VF(a,f);Bd(a.g);}else if(f==(-536870788))c=FZ(b);else{if(f!=(-536870871)){b=new HK;c=!F2(a.g)?U8(f&65535):a.g.ep.eg();e=a.g;Il(b,c,e.bu,e.cN);J(b);}if(d){b=new HK;e=a.g;Il(b,C(5),e.bu,e.cN);J(b);}c=FZ(b);}}}if(f!=(-16777176))break;}return c;}
function Fq(a,b){var c,d,e,f,g,h,i,j,$$je;c=AL6(B5(a,2),B5(a,64));D3(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(CV(a.g))break a;h=a.g;b=h.U;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cg(c,d);d=Bd(a.g);h=a.g;if(h.U!=(-536870874)){d=38;break d;}if(h.h==(-536870821)){Bd(h);e=1;d=(-1);break d;}Bd(h);if(g){c=Fq(a,0);break d;}if(a.g.U==(-536870819))break d;UU(c,Fq(a,0));break d;case -536870867:if(!g){b=h.h;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bd(h);h=a.g;i=h.U;if(F2(h))break c;if
(i<0){j=a.g.h;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Ja(i))break e;i=i&65535;break e;}catch($$e){$$je=ES($$e);if($$je instanceof DE){break b;}else{throw $$e;}}}try{BQ(c,d,i);}catch($$e){$$je=ES($$e);if($$je instanceof DE){break b;}else{throw $$e;}}Bd(a.g);d=(-1);break d;}}if(d>=0)Cg(c,d);d=45;Bd(a.g);break d;case -536870821:if(d>=0){Cg(c,d);d=(-1);}Bd(a.g);j=0;h=a.g;if(h.U==(-536870818)){Bd(h);j=1;}if(!e)Ws(c,Fq(a,j));else UU(c,Fq(a,j));e=0;Bd(a.g);break d;case -536870819:if(d>=0)Cg(c,
d);d=93;Bd(a.g);break d;case -536870818:if(d>=0)Cg(c,d);d=94;Bd(a.g);break d;case 0:if(d>=0)Cg(c,d);h=a.g.ep;if(h===null)d=0;else{ABI(c,h);d=(-1);}Bd(a.g);break d;default:}if(d>=0)Cg(c,d);d=Bd(a.g);}g=0;}J(B3(C(5),IU(a),a.g.cN));}J(B3(C(5),IU(a),a.g.cN));}if(!f){if(d>=0)Cg(c,d);return c;}J(B3(C(5),IU(a),a.g.cN-1|0));}
function VF(a,b){var c,d,e;c=KR(b);if(B5(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return ADU(b&65535);}if(B5(a,64)&&b>128){if(c){d=new Ls;C9(d);d.bt=2;d.pU=FR(FP(b));return d;}if(NR(b))return AI1(b&65535);if(!Rq(b))return AKa(b&65535);return AGD(b&65535);}}if(!c){if(NR(b))return AI1(b&65535);if(!Rq(b))return XT(b&65535);return AGD(b&65535);}d=new Dw;C9(d);d.bt=2;d.fa=b;e=(FJ(b)).data;d.iK=e[0];d.hA=e[1];return d;}
function Jz(a,b){var c,d,e;if(!Zl(b)){if(!b.E){if(b.f$())return AGd(b);return ALE(b);}if(!b.f$())return AHd(b);c=new Ia;SA(c,b);return c;}c=WZ(b);d=new LI;BJ(d);d.oJ=c;d.uX=c.T;if(!b.E){if(b.f$())return ZU(AGd(GI(b)),d);return ZU(ALE(GI(b)),d);}if(!b.f$())return ZU(AHd(GI(b)),d);c=new Pj;e=new Ia;SA(e,GI(b));ABw(c,e,d);return c;}
function GM(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B5(a,b){return (a.c$&b)!=b?0:1;}
var Rj=F(0);
var ARn=null;function ZQ(){ARn=new Pt;}
var Z3=F();
function XX(b,c,d,e,f,g){g.b=c.b;g.a=f;BC(b,d.b,d.a,g,e);BC(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;BC(b,d.b,d.a+f|0,g,e);BC(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function ZG(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;BC(b,j,k,i,h);BC(b,j,k,i,h);BC(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;BC(b,l,j,i,h);BC(b,l,j,i,h);BC(b,l+g|0,j+g|0,i,h);}
var Vp=F(Ea);
var ASK=null;function MD(b){var c;c=new R;T(c);return S(PJ(c,b));}
function ZS(){ASK=E($rt_floatcls());}
var E2=F();
var ASL=null;var ASM=null;var ASN=null;var ASO=null;var AQr=null;function YT(){ASL=Fu([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);ASM=ADT([BH(1),BH(10),BH(100),BH(1000),BH(10000),BH(100000),BH(1000000),BH(10000000),BH(100000000),BH(1000000000),Dg(1410065408, 2),Dg(1215752192, 23),Dg(3567587328, 232),Dg(1316134912, 2328),Dg(276447232, 23283),Dg(2764472320, 232830),Dg(1874919424, 2328306),Dg(1569325056, 23283064),Dg(2808348672, 232830643)]);ASN=ADT([BH(1),BH(10),BH(100),BH(10000),BH(100000000),
Dg(1874919424, 2328306)]);ASO=new Sr;AQr=new Tw;}
var GU=F();
var ASP=0;var ASQ=null;var ASR=null;function Zs(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.nc=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.jN=0;c.jp=0;return;}if(f)d=e|8388608;else{d=e<<1;while(AES(Wj(BH(d),BH(8388608)),AAr)){d=d<<1;f=f+(-1)|0;}}g=ZA(ASR,f);if(g<0)g= -g|0;h=ASR.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=GO(d,ASQ.data[e],i);if(j<ASP){while($rt_ucmp(j,ASP)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=ASR.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=GO(d,
ASQ.data[e],i);}e=d<<1;d=e+1|0;h=ASQ.data;f=g+1|0;k=h[f];l=i-1|0;m=GO(d,k,l);n=GO(e-1|0,ASQ.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?V($rt_udiv(j,o),o):q<0?V($rt_udiv(j,k),k)+k|0:V($rt_udiv((j+(k/2|0)|0),k),k);if(Hn(BH(d),BH(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.jN=d;c.jp=g-50|0;}
function GO(b,c,d){return X5(APn(AIE(Wj(BH(b),Dg(4294967295, 0)),Wj(BH(c),Dg(4294967295, 0))),32-d|0));}
function Yb(){ASP=$rt_udiv((-1),10);ASQ=Fu([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);ASR=Fu([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Tw(){var a=this;B.call(a);a.jN=0;a.jp=0;a.nc=0;}
var FU=F(0);
function R5(){B.call(this);this.pR=null;}
function AIp(a,b,c,d){IB(a.pR,b,c.ba,d.ba);}
function R6(){B.call(this);this.mo=null;}
function AGj(a,b,c,d){IB(a.mo,b,c.ba,d.ba);}
function G_(){B.call(this);this.lw=0;}
var ASS=null;var AST=null;var ASU=null;function AJI(a){var b=new G_();ZZ(b,a);return b;}
function ZZ(a,b){a.lw=b;}
function NP(b){return !b?AST:ASS;}
function Xa(){ASS=AJI(1);AST=AJI(0);ASU=E($rt_booleancls());}
var IF=F(0);
var QG=F();
var NF=F(0);
var Y3=F();
function Q8(){B.call(this);this.sJ=null;}
function AI6(a,b,c,d){Hi(a.sJ,b,c.ba,d.ba);}
var Q7=F();
function AMA(a,b){return b.dB.cS>=0?0:1;}
var Q6=F();
function AJ$(a,b){var c;a:{b:{b=b;if(b!==null){b=b.eq;if(b===null)break b;if(b.cS>=0)break b;}c=1;break a;}c=0;}return c;}
function Q9(){B.call(this);this.rW=null;}
function AIC(a,b,c,d){Hi(a.rW,b,c.ba,d.ba);}
function By(){var a=this;B.call(a);a.e=null;a.b1=0;a.ob=null;a.gJ=0;}
var AQn=0;function BJ(a){var b;b=AQn;AQn=b+1|0;a.ob=J8(b);}
function Jw(a,b){var c;c=AQn;AQn=c+1|0;a.ob=J8(c);a.e=b;}
function GP(a,b,c,d){var e;e=d.r;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function GZ(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AEe(a,b){a.gJ=b;}
function ADB(a){return a.gJ;}
function AK7(a){return a.e;}
function ALW(a,b){a.e=b;}
function ALV(a,b){return 1;}
function AMJ(a){return null;}
function H5(a){var b;a.b1=1;b=a.e;if(b!==null){if(!b.b1){b=b.eS();if(b!==null){a.e.b1=1;a.e=b;}a.e.dS();}else if(b instanceof FL&&b.dX.je)a.e=b.e;}}
function ABz(){AQn=1;}
var Td=F(0);
function T0(){var a=this;B.call(a);a.nS=null;a.nR=0.0;}
function G7(a,b){return Jx(a.nS,b,a.nR*2.0+0.875);}
var QW=F(Ea);
var ASV=null;function KA(b,c){return Long_udiv(b, c);}
function WU(b,c){return Long_urem(b, c);}
function Hn(b,c){return Long_ucompare(b, c);}
function Yu(){ASV=E($rt_longcls());}
function V9(){var a=this;B.call(a);a.nj=null;a.nh=null;a.ng=0;a.ni=0;}
function AI_(a,b){b=b;DK(a.nj,a.nh,b,a.ng,a.ni);}
function V$(){var a=this;B.call(a);a.ux=null;a.uw=null;a.uv=0;a.uu=0;}
function AFu(a,b){b=b;DK(a.ux,a.uw,b,a.uv,a.uu);}
var Pt=F();
function AIU(a,b){}
function Cw(){var a=this;By.call(a);a.je=0;a.dd=0;}
var ASJ=null;function K3(){K3=Bg(Cw);AFf();}
function AO$(a){var b=new Cw();EP(b,a);return b;}
function EP(a,b){K3();BJ(a);a.dd=b;}
function AC1(a,b,c,d){var e,f;e=Hy(d,a.dd);IE(d,a.dd,b);f=a.e.c(b,c,d);if(f<0)IE(d,a.dd,e);return f;}
function AH5(a){return a.dd;}
function ADl(a,b){return 0;}
function AFf(){var b;b=new Ne;BJ(b);ASJ=b;}
function FV(){var a=this;B.call(a);a.S=null;a.fn=0;a.ea=0;a.tf=0;a.jJ=0;a.U=0;a.h=0;a.qP=0;a.ep=null;a.d9=null;a.q=0;a.g1=0;a.cN=0;a.go=0;a.bu=null;}
var ASW=null;var ASH=null;var ASI=0;function NK(a,b){if(b>0&&b<3)a.ea=b;if(b==1){a.h=a.U;a.d9=a.ep;a.q=a.go;a.go=a.cN;EE(a);}}
function F2(a){return a.ep===null?0:1;}
function II(a){return a.d9===null?0:1;}
function Bd(a){EE(a);return a.jJ;}
function EI(a){var b;b=a.ep;EE(a);return b;}
function EE(a){var b,c,d,e,f,g,h,$$je;a.jJ=a.U;a.U=a.h;a.ep=a.d9;a.cN=a.go;a.go=a.q;while(true){b=0;c=a.q>=a.S.data.length?0:Km(a);a.h=c;a.d9=null;if(a.ea==4){if(c!=92)return;c=a.q;d=a.S.data;c=c>=d.length?0:d[BR(a)];a.h=c;switch(c){case 69:break;default:a.h=92;a.q=a.g1;return;}a.ea=a.tf;a.h=a.q>(a.S.data.length-2|0)?0:Km(a);}a:{c=a.h;if(c!=92){e=a.ea;if(e==1)switch(c){case 36:a.h=(-536870876);break a;case 40:if(a.S.data[a.q]!=63){a.h=(-2147483608);break a;}BR(a);c=a.S.data[a.q];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.h=(-134217688);BR(a);break b;default:J(B3(C(5),EN(a),a.q));}a.h=(-67108824);BR(a);}else{switch(c){case 33:break;case 60:BR(a);c=a.S.data[a.q];e=1;break b;case 61:a.h=(-536870872);BR(a);break b;case 62:a.h=(-33554392);BR(a);break b;default:f=ABB(a);a.h=f;if(f<256){a.fn=f;f=f<<16;a.h=f;a.h=(-1073741784)|f;break b;}f=f&255;a.h=f;a.fn=f;f=f<<16;a.h=f;a.h=(-16777176)|f;break b;}a.h=(-268435416);BR(a);}}if(!e)break;}break a;case 41:a.h=(-536870871);break a;case 42:case 43:case 63:e=a.q;d
=a.S.data;switch(e>=d.length?42:d[e]){case 43:a.h=c|(-2147483648);BR(a);break a;case 63:a.h=c|(-1073741824);BR(a);break a;default:}a.h=c|(-536870912);break a;case 46:a.h=(-536870866);break a;case 91:a.h=(-536870821);NK(a,2);break a;case 93:if(e!=2)break a;a.h=(-536870819);break a;case 94:a.h=(-536870818);break a;case 123:a.d9=AA_(a,c);break a;case 124:a.h=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.h=(-536870874);break a;case 45:a.h=(-536870867);break a;case 91:a.h=(-536870821);break a;case 93:a.h
=(-536870819);break a;case 94:a.h=(-536870818);break a;default:}}else{c=a.q>=(a.S.data.length-2|0)?(-1):Km(a);c:{a.h=c;switch(c){case -1:J(B3(C(5),EN(a),a.q));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.h
=ZK(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.ea!=1)break a;a.h=(-2147483648)|c;break a;case 65:a.h=(-2147483583);break a;case 66:a.h=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B3(C(5),EN(a),a.q));case 68:case 83:case 87:case 100:case 115:case 119:a.d9=QT(DL(a.S,
a.g1,1),0);a.h=0;break a;case 71:a.h=(-2147483577);break a;case 80:case 112:break c;case 81:a.tf=a.ea;a.ea=4;b=1;break a;case 90:a.h=(-2147483558);break a;case 97:a.h=7;break a;case 98:a.h=(-2147483550);break a;case 99:c=a.q;d=a.S.data;if(c>=(d.length-2|0))J(B3(C(5),EN(a),a.q));a.h=d[BR(a)]&31;break a;case 101:a.h=27;break a;case 102:a.h=12;break a;case 110:a.h=10;break a;case 114:a.h=13;break a;case 116:a.h=9;break a;case 117:a.h=OC(a,4);break a;case 120:a.h=OC(a,2);break a;case 122:a.h=(-2147483526);break a;default:}break a;}g
=Zu(a);h=0;if(a.h==80)h=1;try{a.d9=QT(g,h);}catch($$e){$$je=ES($$e);if($$je instanceof Id){J(B3(C(5),EN(a),a.q));}else{throw $$e;}}a.h=0;}}if(b)continue;else break;}}
function Zu(a){var b,c,d,e,f,g;b=new R;Fn(b,10);c=a.q;d=a.S;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=DL(d,BR(a),1);f=new R;T(f);L(L(f,C(273)),b);return S(f);}BR(a);c=0;a:{while(true){g=a.q;d=a.S.data;if(g>=(d.length-2|0))break;c=d[BR(a)];if(c==125)break a;B0(b,c);}}if(c!=125)J(B3(C(5),a.bu,a.q));}if(!b.D)J(B3(C(5),a.bu,a.q));f=S(b);if(H(f)==1){b=new R;T(b);L(L(b,C(273)),f);return S(b);}b:{c:{if(H(f)>3){if(Jo(f,C(273)))break c;if(Jo(f,C(274)))break c;}break b;}f=DS(f,2);}return f;}
function AA_(a,b){var c,d,e,f,g,$$je;c=new R;Fn(c,4);d=(-1);e=2147483647;a:{while(true){f=a.q;g=a.S.data;if(f>=g.length)break a;b=g[BR(a)];if(b==125)break a;if(b==44&&d<0)try{d=Iy(GK(c),10);ABf(c,0,Xb(c));continue;}catch($$e){$$je=ES($$e);if($$je instanceof CS){break;}else{throw $$e;}}B0(c,b&65535);}J(B3(C(5),a.bu,a.q));}if(b!=125)J(B3(C(5),a.bu,a.q));if(c.D>0)b:{try{e=Iy(GK(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=ES($$e);if($$je instanceof CS){}else{throw $$e;}}J(B3(C(5),a.bu,a.q));}else if(d<0)J(B3(C(5),
a.bu,a.q));if((d|e|(e-d|0))<0)J(B3(C(5),a.bu,a.q));b=a.q;g=a.S.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.h=(-2147483525);BR(a);break c;case 63:a.h=(-1073741701);BR(a);break c;default:}a.h=(-536870789);}c=new LP;c.d_=d;c.d7=e;return c;}
function EN(a){return a.bu;}
function CV(a){return !a.U&&!a.h&&a.q==a.qP&&!F2(a)?1:0;}
function Ja(b){return b<0?0:1;}
function EB(a){return !CV(a)&&!F2(a)&&Ja(a.U)?1:0;}
function Na(a){var b;b=a.U;return b<=56319&&b>=55296?1:0;}
function Tk(a){var b;b=a.U;return b<=57343&&b>=56320?1:0;}
function Rq(b){return b<=56319&&b>=55296?1:0;}
function NR(b){return b<=57343&&b>=56320?1:0;}
function OC(a,b){var c,d,e,f,$$je;c=new R;Fn(c,b);d=a.S.data.length-2|0;e=0;while(true){f=BF(e,b);if(f>=0)break;if(a.q>=d)break;B0(c,a.S.data[BR(a)]);e=e+1|0;}if(!f)a:{try{b=Iy(GK(c),16);}catch($$e){$$je=ES($$e);if($$je instanceof CS){break a;}else{throw $$e;}}return b;}J(B3(C(5),a.bu,a.q));}
function ZK(a){var b,c,d,e,f,g;b=3;c=1;d=a.S.data;e=d.length-2|0;f=SX(d[a.q],8);switch(f){case -1:break;default:if(f>3)b=2;BR(a);a:{while(true){if(c>=b)break a;g=a.q;if(g>=e)break a;g=SX(a.S.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BR(a);c=c+1|0;}}return f;}J(B3(C(5),a.bu,a.q));}
function ABB(a){var b,c,d,e;b=1;c=a.fn;a:while(true){d=a.q;e=a.S.data;if(d>=e.length)J(B3(C(5),a.bu,d));b:{c:{switch(e[d]){case 41:BR(a);return c|256;case 45:if(!b)J(B3(C(5),a.bu,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BR(a);}BR(a);return c;}
function BR(a){var b,c,d,e,f;b=a.q;a.g1=b;if(!(a.fn&4))a.q=b+1|0;else{c=a.S.data.length-2|0;a.q=b+1|0;a:while(true){d=a.q;if(d<c&&P8(a.S.data[d])){a.q=a.q+1|0;continue;}d=a.q;if(d>=c)break;e=a.S.data;if(e[d]!=35)break;a.q=d+1|0;while(true){f=a.q;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.q=f+1|0;}}}return a.g1;}
function AA0(b){return ASW.Cp(b);}
function Km(a){var b,c,d,e;b=a.S.data[BR(a)];if(Cm(b)){c=a.g1+1|0;d=a.S.data;if(c<d.length){e=d[c];if(CI(e)){BR(a);return D4(b,e);}}}return b;}
function M_(a){return a.cN;}
function HK(){var a=this;BI.call(a);a.wP=null;a.wj=null;a.pF=0;}
function B3(a,b,c){var d=new HK();Il(d,a,b,c);return d;}
function Il(a,b,c,d){W(a);a.pF=(-1);a.wP=b;a.wj=c;a.pF=d;}
var Sr=F();
function Vc(){B.call(this);this.s1=null;}
function AJL(a,b){var c,d;c=a.s1;d=0;while(d<b.length){W8(c,b[d]);d=d+1|0;}}
var Zq=F(0);
function Sv(){var a=this;B.call(a);a.oW=null;a.oY=null;a.oZ=null;}
function AJs(a,b){a.oW.m(ANQ(a.oY,b,a.oZ));}
var QC=F(Cw);
function ACw(a,b,c,d){var e;e=a.dd;BD(d,e,b-CZ(d,e)|0);return a.e.c(b,c,d);}
function AKJ(a,b){return 0;}
var VJ=F(Cw);
function AEb(a,b,c,d){return b;}
var OI=F(Cw);
function ADx(a,b,c,d){if(CZ(d,a.dd)!=b)b=(-1);return b;}
function RD(){Cw.call(this);this.mH=0;}
function ACD(a,b,c,d){var e;e=a.dd;BD(d,e,b-CZ(d,e)|0);a.mH=b;return b;}
function AJB(a,b){return 0;}
var E0=F(Cw);
function AMa(a,b,c,d){if(d.is!=1&&b!=d.r)return (-1);d.hY=1;IE(d,0,b);return b;}
function BV(){By.call(this);this.bt=0;}
function C9(a){BJ(a);a.bt=1;}
function ANe(a,b,c,d){var e;if((b+a.bM()|0)>d.r){d.c0=1;return (-1);}e=a.bf(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function ALq(a){return a.bt;}
function AGV(a,b){return 1;}
var AAP=F(BV);
function FZ(a){var b=new AAP();AIe(b,a);return b;}
function AIe(a,b){Jw(a,b);a.bt=1;a.gJ=1;a.bt=0;}
function AK2(a,b,c){return 0;}
function AFi(a,b,c,d){var e,f,g;e=d.r;f=d.cu;while(true){g=BF(b,e);if(g>0)return (-1);if(g<0&&CI(I(c,b))&&b>f&&Cm(I(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AD6(a,b,c,d,e){var f,g;f=e.r;g=e.cu;while(true){if(c<b)return (-1);if(c<f&&CI(I(d,c))&&c>g&&Cm(I(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ACA(a,b){return 0;}
function BN(){var a=this;By.call(a);a.bq=null;a.dX=null;a.P=0;}
function AOC(a,b){var c=new BN();E1(c,a,b);return c;}
function E1(a,b,c){BJ(a);a.bq=b;a.dX=c;a.P=c.dd;}
function AFZ(a,b,c,d){var e,f,g,h;if(a.bq===null)return (-1);e=E4(d,a.P);C8(d,a.P,b);f=a.bq.j;g=0;while(true){if(g>=f){C8(d,a.P,e);return (-1);}h=(Bo(a.bq,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AJu(a,b){a.dX.e=b;}
function AHy(a,b){var c;a:{c=a.bq;if(c!==null){c=BL(c);while(true){if(!BM(c))break a;if(!(BP(c)).bH(b))continue;else return 1;}}}return 0;}
function AJ1(a,b){return Hy(b,a.P)>=0&&E4(b,a.P)==Hy(b,a.P)?0:1;}
function AD1(a){var b,c,d,e;a.b1=1;b=a.dX;if(b!==null&&!b.b1)H5(b);a:{b=a.bq;if(b!==null){c=b.j;d=0;while(true){if(d>=c)break a;b=Bo(a.bq,d);e=b.eS();if(e===null)e=b;else{b.b1=1;E6(a.bq,d);Qu(a.bq,d,e);}if(!e.b1)e.dS();d=d+1|0;}}}if(a.e!==null)H5(a);}
var H0=F(BN);
function AJe(a,b,c,d){var e,f,g,h;e=CZ(d,a.P);BD(d,a.P,b);f=a.bq.j;g=0;while(true){if(g>=f){BD(d,a.P,e);return (-1);}h=(Bo(a.bq,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AKk(a,b){return !CZ(b,a.P)?0:1;}
var Dp=F(H0);
function AEz(a,b,c,d){var e,f,g;e=CZ(d,a.P);BD(d,a.P,b);f=a.bq.j;g=0;while(g<f){if((Bo(a.bq,g)).c(b,c,d)>=0)return a.e.c(a.dX.mH,c,d);g=g+1|0;}BD(d,a.P,e);return (-1);}
function AJ8(a,b){a.e=b;}
var LC=F(Dp);
function AJp(a,b,c,d){var e,f;e=a.bq.j;f=0;while(f<e){if((Bo(a.bq,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function AL1(a,b){return 0;}
var Ub=F(Dp);
function ADh(a,b,c,d){var e,f;e=a.bq.j;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bo(a.bq,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ALu(a,b){return 0;}
var P$=F(Dp);
function ADY(a,b,c,d){var e,f,g,h;e=a.bq.j;f=d.h3?0:d.cu;a:{g=a.e.c(b,c,d);if(g>=0){BD(d,a.P,b);h=0;while(true){if(h>=e)break a;if((Bo(a.bq,h)).b9(f,b,c,d)>=0){BD(d,a.P,(-1));return g;}h=h+1|0;}}}return (-1);}
function ANu(a,b){return 0;}
var RZ=F(Dp);
function ACb(a,b,c,d){var e,f;e=a.bq.j;BD(d,a.P,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bo(a.bq,f)).b9(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AKy(a,b){return 0;}
function FL(){BN.call(this);this.cD=null;}
function AOW(a,b){var c=new FL();XN(c,a,b);return c;}
function XN(a,b,c){BJ(a);a.cD=b;a.dX=c;a.P=c.dd;}
function ACp(a,b,c,d){var e,f;e=E4(d,a.P);C8(d,a.P,b);f=a.cD.c(b,c,d);if(f>=0)return f;C8(d,a.P,e);return (-1);}
function AHT(a,b,c,d){var e;e=a.cD.b4(b,c,d);if(e>=0)C8(d,a.P,e);return e;}
function AKN(a,b,c,d,e){var f;f=a.cD.b9(b,c,d,e);if(f>=0)C8(e,a.P,f);return f;}
function AHu(a,b){return a.cD.bH(b);}
function AJx(a){var b;b=new LU;XN(b,a.cD,a.dX);a.e=b;return b;}
function AMN(a){var b;a.b1=1;b=a.dX;if(b!==null&&!b.b1)H5(b);b=a.cD;if(b!==null&&!b.b1){b=b.eS();if(b!==null){a.cD.b1=1;a.cD=b;}a.cD.dS();}}
var FY=F();
function Q(){var a=this;FY.call(a);a.T=0;a.b0=0;a.C=null;a.ix=null;a.jb=null;a.E=0;}
var ASX=null;function NI(){NI=Bg(Q);AEp();}
function Bl(a){var b;NI();b=new U7;b.w=Bu(64);a.C=b;}
function ADj(a){return null;}
function ACQ(a){return a.C;}
function Zl(a){var b,c,d,e,f;if(!a.b0)b=Gp(a.C,0)>=2048?0:1;else{a:{c=a.C;b=0;d=c.bc;if(b<d){e=c.w.data;f=(e[0]^(-1))>>>0|0;if(f)b=Hr(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Hr(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AGb(a){return a.E;}
function ALn(a){return a;}
function WZ(a){var b,c;if(a.jb===null){b=a.en();c=new Un;c.xe=a;c.m9=b;Bl(c);a.jb=c;D3(c,a.b0);}return a.jb;}
function GI(a){var b,c;if(a.ix===null){b=a.en();c=new Ul;c.wS=a;c.sH=b;c.tp=a;Bl(c);a.ix=c;D3(c,a.T);a.ix.E=a.E;}return a.ix;}
function AMH(a){return 0;}
function D3(a,b){var c;c=a.T;if(c^b){a.T=c?0:1;a.b0=a.b0?0:1;}if(!a.E)a.E=1;return a;}
function AFn(a){return a.T;}
function I5(b,c){NI();return b.i(c);}
function Hq(b,c){var d,e;NI();if(b.cX()!==null&&c.cX()!==null){b=b.cX();c=c.cX();d=Be(b.w.data.length,c.w.data.length);e=0;a:{while(e<d){if(b.w.data[e]&c.w.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function QT(b,c){var d,e,f;NI();d=0;while(true){AKw();e=ASY.data;if(d>=e.length){f=new Id;Br(f,C(5));f.xw=C(5);f.xi=b;J(f);}e=e[d].data;if(B1(b,e[0]))break;d=d+1|0;}return AAl(e[1],c);}
function AEp(){var b;b=new Ge;AKw();ASX=b;}
function XB(){var a=this;Q.call(a);a.kv=0;a.mF=0;a.fD=0;a.j9=0;a.dr=0;a.eO=0;a.y=null;a.bm=null;}
function C0(){var a=new XB();ANl(a);return a;}
function AL6(a,b){var c=new XB();AEd(c,a,b);return c;}
function ANl(a){Bl(a);a.y=ANv();}
function AEd(a,b,c){Bl(a);a.y=ANv();a.kv=b;a.mF=c;}
function Cg(a,b){a:{if(a.kv){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dr){Lc(a.y,GM(b&65535));break a;}Ke(a.y,GM(b&65535));break a;}if(a.mF&&b>128){a.fD=1;b=FR(FP(b));}}}if(!(!Rq(b)&&!NR(b))){if(a.j9)Lc(a.C,b-55296|0);else Ke(a.C,b-55296|0);}if(a.dr)Lc(a.y,b);else Ke(a.y,b);if(!a.E&&KR(b))a.E=1;return a;}
function ABI(a,b){var c,d,e;if(!a.E&&b.E)a.E=1;if(a.j9){if(!b.b0)Fe(a.C,b.en());else CO(a.C,b.en());}else if(!b.b0)E_(a.C,b.en());else{ET(a.C,b.en());CO(a.C,b.en());a.b0=a.b0?0:1;a.j9=1;}if(!a.eO&&b.cX()!==null){if(a.dr){if(!b.T)Fe(a.y,b.cX());else CO(a.y,b.cX());}else if(!b.T)E_(a.y,b.cX());else{ET(a.y,b.cX());CO(a.y,b.cX());a.T=a.T?0:1;a.dr=1;}}else{c=a.T;d=a.bm;if(d!==null){if(!c){e=new NB;e.vm=a;e.tX=c;e.tc=d;e.sZ=b;Bl(e);a.bm=e;}else{e=new NC;e.xF=a;e.qg=c;e.pX=d;e.ph=b;Bl(e);a.bm=e;}}else{if(c&&!a.dr&&
KW(a.y)){d=new Ny;d.wi=a;d.p8=b;Bl(d);a.bm=d;}else if(!c){d=new Nw;d.jP=a;d.iV=c;d.nY=b;Bl(d);a.bm=d;}else{d=new Nx;d.kM=a;d.i2=c;d.s4=b;Bl(d);a.bm=d;}a.eO=1;}}return a;}
function BQ(a,b,c){var d,e,f,g,h;if(b>c){d=new BI;W(d);J(d);}a:{b:{if(!a.kv){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cg(a,b);b=b+1|0;}}if(!a.dr)G4(a.y,b,c+1|0);else{d=a.y;c=c+1|0;if(b>c){d=new BT;W(d);J(d);}e=d.bc;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.w.data;h[g]=h[g]&(Hk(d,b)|GX(d,f));}else{h=d.w.data;h[g]=h[g]&Hk(d,b);e=g+1|0;while(e<c){d.w.data[e]=0;e=e+1|0;}if(f&31){h=d.w.data;h[c]=h[c]&GX(d,f);}}Gi(d);}}}}return a;}
function Ws(a,b){var c,d,e;if(!a.E&&b.E)a.E=1;if(b.fD)a.fD=1;c=a.b0;if(!(c^b.b0)){if(!c)E_(a.C,b.C);else CO(a.C,b.C);}else if(c)Fe(a.C,b.C);else{ET(a.C,b.C);CO(a.C,b.C);a.b0=1;}if(!a.eO&&CA(b)!==null){c=a.T;if(!(c^b.T)){if(!c)E_(a.y,CA(b));else CO(a.y,CA(b));}else if(c)Fe(a.y,CA(b));else{ET(a.y,CA(b));CO(a.y,CA(b));a.T=1;}}else{c=a.T;d=a.bm;if(d!==null){if(!c){e=new Nq;e.u3=a;e.r6=c;e.s3=d;e.tB=b;Bl(e);a.bm=e;}else{e=new N4;e.vu=a;e.tx=c;e.l$=d;e.mP=b;Bl(e);a.bm=e;}}else{if(!a.dr&&KW(a.y)){if(!c){d=new Nz;d.xH
=a;d.o5=b;Bl(d);a.bm=d;}else{d=new NA;d.vy=a;d.tm=b;Bl(d);a.bm=d;}}else if(!c){d=new ND;d.sf=a;d.qv=b;d.p0=c;Bl(d);a.bm=d;}else{d=new NE;d.qR=a;d.q8=b;d.ro=c;Bl(d);a.bm=d;}a.eO=1;}}}
function UU(a,b){var c,d,e;if(!a.E&&b.E)a.E=1;if(b.fD)a.fD=1;c=a.b0;if(!(c^b.b0)){if(!c)CO(a.C,b.C);else E_(a.C,b.C);}else if(!c)Fe(a.C,b.C);else{ET(a.C,b.C);CO(a.C,b.C);a.b0=0;}if(!a.eO&&CA(b)!==null){c=a.T;if(!(c^b.T)){if(!c)CO(a.y,CA(b));else E_(a.y,CA(b));}else if(!c)Fe(a.y,CA(b));else{ET(a.y,CA(b));CO(a.y,CA(b));a.T=0;}}else{c=a.T;d=a.bm;if(d!==null){if(!c){e=new Ns;e.vl=a;e.sj=c;e.m7=d;e.qd=b;Bl(e);a.bm=e;}else{e=new Nt;e.vE=a;e.rC=c;e.lZ=d;e.r4=b;Bl(e);a.bm=e;}}else{if(!a.dr&&KW(a.y)){if(!c){d=new No;d.vA
=a;d.ov=b;Bl(d);a.bm=d;}else{d=new Np;d.xB=a;d.oE=b;Bl(d);a.bm=d;}}else if(!c){d=new Nu;d.uH=a;d.tT=b;d.qZ=c;Bl(d);a.bm=d;}else{d=new Nn;d.qX=a;d.rK=b;d.qi=c;Bl(d);a.bm=d;}a.eO=1;}}}
function CE(a,b){var c;c=a.bm;if(c!==null)return a.T^c.i(b);return a.T^C5(a.y,b);}
function CA(a){if(!a.eO)return a.y;return null;}
function AFe(a){return a.C;}
function ALM(a){var b,c;if(a.bm!==null)return a;b=CA(a);c=new Nr;c.uY=a;c.hG=b;Bl(c);return D3(c,a.T);}
function AII(a){var b,c,d;b=new R;T(b);c=Gp(a.y,0);while(c>=0){Hs(b,FJ(c));B0(b,124);c=Gp(a.y,c+1|0);}d=b.D;if(d>0)Uc(b,d-1|0);return S(b);}
function AFp(a){return a.fD;}
function Id(){var a=this;Bq.call(a);a.xw=null;a.xi=null;}
function DD(){By.call(this);this.B=null;}
function CR(a,b,c,d){Jw(a,c);a.B=b;a.gJ=d;}
function ANk(a){return a.B;}
function AKO(a,b){return !a.B.bH(b)&&!a.e.bH(b)?0:1;}
function AL7(a,b){return 1;}
function AIa(a){var b;a.b1=1;b=a.e;if(b!==null&&!b.b1){b=b.eS();if(b!==null){a.e.b1=1;a.e=b;}a.e.dS();}b=a.B;if(b!==null){if(!b.b1){b=b.eS();if(b!==null){a.B.b1=1;a.B=b;}a.B.dS();}else if(b instanceof FL&&b.dX.je)a.B=b.e;}}
function CG(){DD.call(this);this.Q=null;}
function AO0(a,b,c){var d=new CG();Er(d,a,b,c);return d;}
function Er(a,b,c,d){CR(a,b,c,d);a.Q=b;}
function ACd(a,b,c,d){var e,f;e=0;a:{while((b+a.Q.bM()|0)<=d.r){f=a.Q.bf(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.Q.bM()|0;e=e+(-1)|0;}return f;}
function EG(){CG.call(this);this.ir=null;}
function AN$(a,b,c,d){var e=new EG();QZ(e,a,b,c,d);return e;}
function QZ(a,b,c,d,e){Er(a,c,d,e);a.ir=b;}
function AC4(a,b,c,d){var e,f,g,h,i;e=a.ir;f=e.d_;g=e.d7;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.Q.bM()|0)>d.r)break a;i=a.Q.bf(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.Q.bM()|0;h=h+(-1)|0;}return i;}if((b+a.Q.bM()|0)>d.r){d.c0=1;return (-1);}i=a.Q.bf(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Cx=F(DD);
function ACo(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.B.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var D7=F(CG);
function AHY(a,b,c,d){var e;e=a.B.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function ANx(a,b){a.e=b;a.B.I(b);}
var Uo=F(CG);
function AM9(a,b,c,d){while((b+a.Q.bM()|0)<=d.r&&a.Q.bf(b,c)>0){b=b+a.Q.bM()|0;}return a.e.c(b,c,d);}
function AID(a,b,c,d){var e,f,g;e=a.e.b4(b,c,d);if(e<0)return (-1);f=e-a.Q.bM()|0;while(f>=b&&a.Q.bf(f,c)>0){g=f-a.Q.bM()|0;e=f;f=g;}return e;}
function U(){var a=this;B.call(a);a.kT=null;a.jL=null;}
function AAl(a,b){if(!b&&a.kT===null)a.kT=a.x();else if(b&&a.jL===null)a.jL=D3(a.x(),1);if(b)return a.jL;return a.kT;}
var CS=F(BI);
function LP(){var a=this;FY.call(a);a.d_=0;a.d7=0;}
function AIM(a){var b,c,d,e,f;b=a.d_;c=a.d7;d=c!=2147483647?J8(c):C(5);e=new R;T(e);B0(e,123);f=Bj(e,b);B0(f,44);B0(L(f,d),125);return S(e);}
var Ne=F(By);
function AHf(a,b,c,d){return b;}
function AJt(a,b){return 0;}
function U7(){var a=this;B.call(a);a.w=null;a.bc=0;}
function ANv(){var a=new U7();ADN(a);return a;}
function ADN(a){a.w=Bu(0);}
function Ke(a,b){var c,d;c=b/32|0;if(b>=a.bc){Hv(a,c+1|0);a.bc=b+1|0;}d=a.w.data;d[c]=d[c]|1<<(b%32|0);}
function G4(a,b,c){var d,e,f,g,h;d=BF(b,c);if(d>0){e=new BT;W(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bc){Hv(a,f+1|0);a.bc=c;}if(d==f){g=a.w.data;g[d]=g[d]|GX(a,b)&Hk(a,c);}else{g=a.w.data;g[d]=g[d]|GX(a,b);h=d+1|0;while(h<f){a.w.data[h]=(-1);h=h+1|0;}if(c&31){g=a.w.data;g[f]=g[f]|Hk(a,c);}}}
function GX(a,b){return (-1)<<(b%32|0);}
function Hk(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Lc(a,b){var c,d,e,f;c=b/32|0;d=a.w.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bc-1|0))Gi(a);}}
function C5(a,b){var c,d;c=b/32|0;d=a.w.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Gp(a,b){var c,d,e,f;c=a.bc;if(b>=c)return (-1);d=b/32|0;e=a.w.data;f=e[d]>>>(b%32|0)|0;if(f)return Hr(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Hr(e[f])|0;f=f+1|0;}return (-1);}
function Hv(a,b){var c;c=a.w.data.length;if(c>=b)return;c=Ba((b*3|0)/2|0,(c*2|0)+1|0);a.w=HZ(a.w,c);}
function Gi(a){var b,c,d;b=(a.bc+31|0)/32|0;a.bc=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=ME(a.w.data[c]);if(d<32)break;c=c+(-1)|0;a.bc=a.bc-32|0;}a.bc=a.bc-d|0;}}
function CO(a,b){var c,d,e,f;c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]&b.w.data[d];d=d+1|0;}while(true){f=a.w.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bc=Be(a.bc,b.bc);Gi(a);}
function Fe(a,b){var c,d,e;c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]&(b.w.data[d]^(-1));d=d+1|0;}Gi(a);}
function E_(a,b){var c,d,e;c=Ba(a.bc,b.bc);a.bc=c;Hv(a,(c+31|0)/32|0);c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]|b.w.data[d];d=d+1|0;}}
function ET(a,b){var c,d,e;c=Ba(a.bc,b.bc);a.bc=c;Hv(a,(c+31|0)/32|0);c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]^b.w.data[d];d=d+1|0;}Gi(a);}
function KW(a){return a.bc?0:1;}
function LI(){var a=this;BN.call(a);a.oJ=null;a.uX=0;}
function Pj(){var a=this;BN.call(a);a.le=null;a.kO=null;}
function ZU(a,b){var c=new Pj();ABw(c,a,b);return c;}
function ABw(a,b,c){BJ(a);a.le=b;a.kO=c;}
function ACZ(a,b,c,d){var e,f,g,h,i;e=a.le.c(b,c,d);if(e<0)a:{f=a.kO;g=d.cu;e=d.r;h=b+1|0;e=BF(h,e);if(e>0){d.c0=1;e=(-1);}else{i=I(c,b);if(!f.oJ.i(i))e=(-1);else{if(Cm(i)){if(e<0&&CI(I(c,h))){e=(-1);break a;}}else if(CI(i)&&b>g&&Cm(I(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AJc(a,b){a.e=b;a.kO.e=b;a.le.I(b);}
function ADD(a,b){return 1;}
function ADi(a,b){return 1;}
function Db(){var a=this;BN.call(a);a.dh=null;a.wc=0;}
function AHd(a){var b=new Db();SA(b,a);return b;}
function SA(a,b){BJ(a);a.dh=b.h$();a.wc=b.T;}
function AE7(a,b,c,d){var e,f,g,h;e=d.r;if(b<e){f=b+1|0;g=I(c,b);if(a.i(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=I(c,f);if(GA(g,f)&&a.i(D4(g,f)))return a.e.c(b,c,d);}}return (-1);}
function AFE(a,b){return a.dh.i(b);}
function ACV(a,b){if(b instanceof Dw)return I5(a.dh,b.fa);if(b instanceof D0)return I5(a.dh,b.cU);if(b instanceof Db)return Hq(a.dh,b.dh);if(!(b instanceof DQ))return 1;return Hq(a.dh,b.eC);}
function AG8(a){return a.dh;}
function ALd(a,b){a.e=b;}
function AFg(a,b){return 1;}
var Ia=F(Db);
function AGW(a,b){return a.dh.i(FR(FP(b)));}
function Xs(){var a=this;BV.call(a);a.px=null;a.vS=0;}
function AGd(a){var b=new Xs();AIW(b,a);return b;}
function AIW(a,b){C9(a);a.px=b.h$();a.vS=b.T;}
function AHg(a,b,c){return !a.px.i(Ex(D6(I(c,b))))?(-1):1;}
function DQ(){var a=this;BV.call(a);a.eC=null;a.wx=0;}
function ALE(a){var b=new DQ();AJR(b,a);return b;}
function AJR(a,b){C9(a);a.eC=b.h$();a.wx=b.T;}
function Lj(a,b,c){return !a.eC.i(I(c,b))?(-1):1;}
function AJw(a,b){if(b instanceof D0)return I5(a.eC,b.cU);if(b instanceof DQ)return Hq(a.eC,b.eC);if(!(b instanceof Db)){if(!(b instanceof Dw))return 1;return 0;}return Hq(a.eC,b.dh);}
function NJ(){var a=this;BN.call(a);a.fV=null;a.k5=null;a.ip=0;}
function ALR(a,b){var c=new NJ();ACr(c,a,b);return c;}
function ACr(a,b,c){BJ(a);a.fV=b;a.ip=c;}
function AHX(a,b){a.e=b;}
function Pv(a){if(a.k5===null)a.k5=Gy(a.fV);return a.k5;}
function AB4(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.r;f=Bu(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=I(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?Fu([k,l]):Fu([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.ip;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.fV.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=I(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=I(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.ip==3){k=f[0];m=a.fV.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.ip==2){b=f[0];m=a.fV.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function ADu(a,b){return b instanceof NJ&&!B1(Pv(b),Pv(a))?0:1;}
function ALP(a,b){return 1;}
function D0(){BV.call(this);this.cU=0;}
function XT(a){var b=new D0();AJS(b,a);return b;}
function AJS(a,b){C9(a);a.cU=b;}
function AG3(a){return 1;}
function AF$(a,b,c){return a.cU!=I(c,b)?(-1):1;}
function AE5(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return GP(a,b,c,d);e=d.r;while(true){if(b>=e)return (-1);f=Hp(c,a.cU,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AG$(a,b,c,d,e){var f;if(!(d instanceof Bv))return GZ(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=GD(d,a.cU,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ALI(a,b){if(b instanceof D0)return b.cU!=a.cU?0:1;if(!(b instanceof DQ)){if(b instanceof Db)return b.i(a.cU);if(!(b instanceof Dw))return 1;return 0;}return Lj(b,0,U8(a.cU))<=0?0:1;}
function ABi(){BV.call(this);this.lP=0;}
function AKa(a){var b=new ABi();AIy(b,a);return b;}
function AIy(a,b){C9(a);a.lP=Ex(D6(b));}
function ABY(a,b,c){return a.lP!=Ex(D6(I(c,b)))?(-1):1;}
function Wv(){var a=this;BV.call(a);a.tH=0;a.m4=0;}
function ADU(a){var b=new Wv();AKu(b,a);return b;}
function AKu(a,b){C9(a);a.tH=b;a.m4=GM(b);}
function ACi(a,b,c){return a.tH!=I(c,b)&&a.m4!=I(c,b)?(-1):1;}
function EL(){var a=this;BN.call(a);a.gA=0;a.ju=null;a.iX=null;a.iR=0;}
function API(a,b){var c=new EL();M3(c,a,b);return c;}
function M3(a,b,c){BJ(a);a.gA=1;a.iX=b;a.iR=c;}
function AML(a,b){a.e=b;}
function AJd(a,b,c,d){var e,f,g,h,i,j,k,l;e=Bu(4);f=d.r;if(b>=f)return (-1);g=Jh(a,b,c,f);h=b+a.gA|0;i=AA0(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;C6(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Jh(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AA0(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.gA|0;if(h>=f){b=k;break a;}g=Jh(a,h,c,f);b=k;}}}if(b!=a.iR)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.iX.data[g])break;g=g+1|0;}return (-1);}
function UT(a){var b,c;if(a.ju===null){b=new R;T(b);c=0;while(c<a.iR){Hs(b,FJ(a.iX.data[c]));c=c+1|0;}a.ju=S(b);}return a.ju;}
function Jh(a,b,c,d){var e,f,g;a.gA=1;if(b>=(d-1|0))e=I(c,b);else{d=b+1|0;e=I(c,b);f=I(c,d);if(GA(e,f)){g=B2(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Cm(g[0])&&CI(g[1])?D4(g[0],g[1]):g[0];a.gA=2;}}return e;}
function AHh(a,b){return b instanceof EL&&!B1(UT(b),UT(a))?0:1;}
function AJ9(a,b){return 1;}
var Vs=F(EL);
var Sc=F(EL);
var Wh=F(Cx);
function AEi(a,b,c,d){var e;while(true){e=a.B.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var Oz=F(Cx);
function AIr(a,b,c,d){var e;e=a.B.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.B.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var Fd=F(Cx);
function ALb(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.B.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function AMf(a,b){a.e=b;a.B.I(b);}
var Oe=F(Fd);
function AG6(a,b,c,d){var e;e=a.B.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function AIQ(a,b){a.e=b;}
function EK(){var a=this;Cx.call(a);a.fj=null;a.c7=0;}
function ASZ(a,b,c,d,e){var f=new EK();H$(f,a,b,c,d,e);return f;}
function H$(a,b,c,d,e,f){CR(a,c,d,e);a.fj=b;a.c7=f;}
function ANr(a,b,c,d){var e,f;e=LL(d,a.c7);if(!a.B.A(d))return a.e.c(b,c,d);if(e>=a.fj.d7)return a.e.c(b,c,d);f=a.c7;e=e+1|0;DM(d,f,e);f=a.B.c(b,c,d);if(f>=0){DM(d,a.c7,0);return f;}f=a.c7;e=e+(-1)|0;DM(d,f,e);if(e>=a.fj.d_)return a.e.c(b,c,d);DM(d,a.c7,0);return (-1);}
var LZ=F(EK);
function AGx(a,b,c,d){var e,f,g;e=0;f=a.fj.d7;a:{while(true){g=a.B.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fj.d_)return (-1);return a.e.c(b,c,d);}
var Qv=F(Cx);
function AMW(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.B.c(b,c,d);}
var Pu=F(Fd);
function ADF(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.B.c(b,c,d);return e;}
var S5=F(EK);
function ACI(a,b,c,d){var e,f,g;e=LL(d,a.c7);if(!a.B.A(d))return a.e.c(b,c,d);f=a.fj;if(e>=f.d7){DM(d,a.c7,0);return a.e.c(b,c,d);}if(e<f.d_){DM(d,a.c7,e+1|0);g=a.B.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){DM(d,a.c7,0);return g;}DM(d,a.c7,e+1|0);g=a.B.c(b,c,d);}return g;}
var Qw=F(DD);
function ANg(a,b,c,d){var e;e=d.r;if(e>b)return a.e.b9(b,e,c,d);return a.e.c(b,c,d);}
function ALo(a,b,c,d){var e;e=d.r;if(a.e.b9(b,e,c,d)>=0)return b;return (-1);}
function Nm(){DD.call(this);this.jI=null;}
function AJy(a,b,c,d){var e,f;e=d.r;f=S7(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.b9(b,e,c,d);return a.e.c(b,c,d);}
function AB9(a,b,c,d){var e,f,g,h;e=d.r;f=a.e.b4(b,c,d);if(f<0)return (-1);g=S7(a,f,e,c);if(g>=0)e=g;g=Ba(f,a.e.b9(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.jI.gH(I(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function S7(a,b,c,d){while(true){if(b>=c)return (-1);if(a.jI.gH(I(d,b)))break;b=b+1|0;}return b;}
var Ej=F();
var AS0=null;var AS1=null;function Og(b){var c;if(!(b&1)){c=AS1;if(c!==null)return c;c=new Tr;AS1=c;return c;}c=AS0;if(c!==null)return c;c=new Tq;AS0=c;return c;}
var Wi=F(CG);
function ACK(a,b,c,d){var e;a:{while(true){if((b+a.Q.bM()|0)>d.r)break a;e=a.Q.bf(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var Uh=F(D7);
function AIo(a,b,c,d){var e;if((b+a.Q.bM()|0)<=d.r){e=a.Q.bf(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var N1=F(EG);
function AKP(a,b,c,d){var e,f,g,h,i;e=a.ir;f=e.d_;g=e.d7;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.Q.bM()|0)>d.r)break a;i=a.Q.bf(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.Q.bM()|0)>d.r){d.c0=1;return (-1);}i=a.Q.bf(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Po=F(CG);
function AJr(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.Q.bM()|0)<=d.r){e=a.Q.bf(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var So=F(D7);
function ACU(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.B.c(b,c,d);}
var P_=F(EG);
function AK4(a,b,c,d){var e,f,g,h,i,j;e=a.ir;f=e.d_;g=e.d7;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.Q.bM()|0)<=d.r){i=a.Q.bf(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.Q.bM()|0)>d.r){d.c0=1;return (-1);}j=a.Q.bf(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Jf=F(By);
function AHw(a,b,c,d){if(b&&!(d.eP&&b==d.cu))return (-1);return a.e.c(b,c,d);}
function AGJ(a,b){return 0;}
function X2(){By.call(this);this.te=0;}
function ALD(a){var b=new X2();AGZ(b,a);return b;}
function AGZ(a,b){BJ(a);a.te=b;}
function ADf(a,b,c,d){var e,f,g;e=b<d.r?I(c,b):32;f=!b?32:I(c,b-1|0);g=d.h3?0:d.cu;return (e!=32&&!Pz(a,e,b,g,c)?0:1)^(f!=32&&!Pz(a,f,b-1|0,g,c)?0:1)^a.te?(-1):a.e.c(b,c,d);}
function ADs(a,b){return 0;}
function Pz(a,b,c,d,e){var f;if(!Iw(b)&&b!=95){a:{if(Ce(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=I(e,c);if(Iw(f))return 0;if(Ce(f)!=6)return 1;}}return 1;}return 0;}
var Nh=F(By);
function AGY(a,b,c,d){if(b!=d.gO)return (-1);return a.e.c(b,c,d);}
function ANn(a,b){return 0;}
function Va(){By.call(this);this.fo=0;}
function APc(a){var b=new Va();AAQ(b,a);return b;}
function AAQ(a,b){BJ(a);a.fo=b;}
function AJU(a,b,c,d){var e,f,g;e=!d.eP?H(c):d.r;if(b>=e){BD(d,a.fo,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&I(c,b)==13&&I(c,b+1|0)==10){BD(d,a.fo,0);return a.e.c(b,c,d);}a:{if(f==1){g=I(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BD(d,a.fo,0);return a.e.c(b,c,d);}
function AD9(a,b){var c;c=!CZ(b,a.fo)?0:1;BD(b,a.fo,(-1));return c;}
var UL=F(By);
function AJb(a,b,c,d){if(b<(d.h3?H(c):d.r))return (-1);d.c0=1;d.w1=1;return a.e.c(b,c,d);}
function ABW(a,b){return 0;}
function L_(){By.call(this);this.qm=null;}
function ADZ(a,b,c,d){a:{if(b!=d.r){if(!b)break a;if(d.eP&&b==d.cu)break a;if(a.qm.rF(I(c,b-1|0),I(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function AFQ(a,b){return 0;}
var AA8=F(BN);
function APu(){var a=new AA8();AI3(a);return a;}
function AI3(a){BJ(a);}
function AM1(a,b,c,d){var e,f,g,h;e=d.r;f=b+1|0;if(f>e){d.c0=1;return (-1);}g=I(c,b);if(Cm(g)){h=b+2|0;if(h<=e&&GA(g,I(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function ADw(a,b){a.e=b;}
function AIX(a){return (-2147483602);}
function ADv(a,b){return 1;}
function Xz(){BN.call(this);this.ke=null;}
function AO6(a){var b=new Xz();AD7(b,a);return b;}
function AD7(a,b){BJ(a);a.ke=b;}
function AI7(a,b,c,d){var e,f,g,h;e=d.r;f=b+1|0;if(f>e){d.c0=1;return (-1);}g=I(c,b);if(Cm(g)){b=b+2|0;if(b<=e){h=I(c,f);if(GA(g,h))return a.ke.gH(D4(g,h))?(-1):a.e.c(b,c,d);}}return a.ke.gH(g)?(-1):a.e.c(f,c,d);}
function AKG(a,b){a.e=b;}
function ABR(a){return (-2147483602);}
function ANd(a,b){return 1;}
function AAY(){By.call(this);this.gt=0;}
function AOH(a){var b=new AAY();AFN(b,a);return b;}
function AFN(a,b){BJ(a);a.gt=b;}
function AHj(a,b,c,d){var e;e=!d.eP?H(c):d.r;if(b>=e){BD(d,a.gt,0);return a.e.c(b,c,d);}if((e-b|0)==1&&I(c,b)==10){BD(d,a.gt,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AFM(a,b){var c;c=!CZ(b,a.gt)?0:1;BD(b,a.gt,(-1));return c;}
function Zo(){By.call(this);this.gy=0;}
function AOo(a){var b=new Zo();AGe(b,a);return b;}
function AGe(a,b){BJ(a);a.gy=b;}
function AJa(a,b,c,d){if((!d.eP?H(c)-b|0:d.r-b|0)<=0){BD(d,a.gy,0);return a.e.c(b,c,d);}if(I(c,b)!=10)return (-1);BD(d,a.gy,1);return a.e.c(b+1|0,c,d);}
function AFz(a,b){var c;c=!CZ(b,a.gy)?0:1;BD(b,a.gy,(-1));return c;}
function Wr(){By.call(this);this.e1=0;}
function ANP(a){var b=new Wr();ANs(b,a);return b;}
function ANs(a,b){BJ(a);a.e1=b;}
function AGz(a,b,c,d){var e,f,g;e=!d.eP?H(c)-b|0:d.r-b|0;if(!e){BD(d,a.e1,0);return a.e.c(b,c,d);}if(e<2){f=I(c,b);g=97;}else{f=I(c,b);g=I(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BD(d,a.e1,0);return a.e.c(b,c,d);case 13:if(g!=10){BD(d,a.e1,0);return a.e.c(b,c,d);}BD(d,a.e1,0);return a.e.c(b,c,d);default:}return (-1);}
function AEa(a,b){var c;c=!CZ(b,a.e1)?0:1;BD(b,a.e1,(-1));return c;}
function Gf(){var a=this;BN.call(a);a.my=0;a.fQ=0;}
function APD(a,b){var c=new Gf();NQ(c,a,b);return c;}
function NQ(a,b,c){BJ(a);a.my=b;a.fQ=c;}
function ACP(a,b,c,d){var e,f,g,h;e=Fw(a,d);if(e!==null&&(b+H(e)|0)<=d.r){f=0;while(true){if(f>=H(e)){BD(d,a.fQ,H(e));return a.e.c(b+H(e)|0,c,d);}g=I(e,f);h=b+f|0;if(g!=I(c,h)&&GM(I(e,f))!=I(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AJ6(a,b){a.e=b;}
function Fw(a,b){var c,d;c=a.my;d=E4(b,c);c=Hy(b,c);return (c|d|(c-d|0))>=0&&c<=H(b.ki)?B9(b.ki,d,c):null;}
function AKm(a,b){var c;c=!CZ(b,a.fQ)?0:1;BD(b,a.fQ,(-1));return c;}
var AA4=F(Gf);
function ANT(a,b){var c=new AA4();AL9(c,a,b);return c;}
function AL9(a,b,c){NQ(a,b,c);}
function AEg(a,b,c,d){var e,f;e=Fw(a,d);if(e!==null&&(b+H(e)|0)<=d.r){f=!Sz(c,e,b)?(-1):H(e);if(f<0)return (-1);BD(d,a.fQ,f);return a.e.c(b+f|0,c,d);}return (-1);}
function ALZ(a,b,c,d){var e,f;e=Fw(a,d);f=d.cu;if(e!==null&&(b+H(e)|0)<=f){while(true){if(b>f)return (-1);b=OB(c,e,b);if(b<0)return (-1);if(a.e.c(b+H(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ACy(a,b,c,d,e){var f,g;f=Fw(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=OO(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+H(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AIi(a,b){return 1;}
var YD=F(Gf);
function AOp(a,b){var c=new YD();AFJ(c,a,b);return c;}
function AFJ(a,b,c){NQ(a,b,c);}
function AHN(a,b,c,d){var e,f;e=Fw(a,d);if(e!==null&&(b+H(e)|0)<=d.r){f=0;while(true){if(f>=H(e)){BD(d,a.fQ,H(e));return a.e.c(b+H(e)|0,c,d);}if(Ex(D6(I(e,f)))!=Ex(D6(I(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Nd=F(FB);
function AFq(a,b,c,d,e){LR(a,b,c,d,e);return a;}
function ADk(a,b,c,d){Vi(a,b,c,d);return a;}
function ADM(a,b){ID(a,b);}
function ALp(a,b,c){Vx(a,b,c);return a;}
function Qy(){var a=this;BV.call(a);a.cd=null;a.jx=null;a.ko=null;}
function AEx(a,b,c){return !Je(a,c,b)?(-1):a.bt;}
function ADa(a,b,c,d){var e,f,g;e=d.r;while(true){if(b>e)return (-1);f=I(a.cd,a.bt-1|0);a:{while(true){g=a.bt;if(b>(e-g|0)){b=(-1);break a;}g=I(c,(b+g|0)-1|0);if(g==f&&Je(a,c,b))break;b=b+Rw(a.jx,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bt|0,c,d)>=0)break;b=b+1|0;}return b;}
function AFP(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=I(a.cd,0);g=(H(d)-c|0)-a.bt|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=I(d,c);if(g==f&&Je(a,d,c))break;c=c-Rw(a.ko,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bt|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AGk(a,b){var c;if(b instanceof D0)return b.cU!=I(a.cd,0)?0:1;if(b instanceof DQ)return Lj(b,0,B9(a.cd,0,1))<=0?0:1;if(!(b instanceof Db)){if(!(b instanceof Dw))return 1;return H(a.cd)>1&&b.fa==D4(I(a.cd,0),I(a.cd,1))?1:0;}a:{b:{b=b;if(!b.i(I(a.cd,0))){if(H(a.cd)<=1)break b;if(!b.i(D4(I(a.cd,0),I(a.cd,1))))break b;}c=1;break a;}c=0;}return c;}
function Je(a,b,c){var d;d=0;while(d<a.bt){if(I(b,d+c|0)!=I(a.cd,d))return 0;d=d+1|0;}return 1;}
function Wq(){BV.call(this);this.h6=null;}
function APH(a){var b=new Wq();ALJ(b,a);return b;}
function ALJ(a,b){var c,d,e;C9(a);c=new R;T(c);d=0;while(true){e=BF(d,b.D);if(e>=0){a.h6=S(c);a.bt=c.D;return;}if(d<0)break;if(e>=0)break;B0(c,Ex(D6(b.J.data[d])));d=d+1|0;}b=new BT;W(b);J(b);}
function AHV(a,b,c){var d;d=0;while(true){if(d>=H(a.h6))return H(a.h6);if(I(a.h6,d)!=Ex(D6(I(c,b+d|0))))break;d=d+1|0;}return (-1);}
function L4(){BV.call(this);this.gq=null;}
function AKS(a,b,c){var d,e,f;d=0;while(true){if(d>=H(a.gq))return H(a.gq);e=I(a.gq,d);f=b+d|0;if(e!=I(c,f)&&GM(I(a.gq,d))!=I(c,f))break;d=d+1|0;}return (-1);}
var Ge=F();
var AS2=null;var AS3=null;var ASY=null;function AKw(){AKw=Bg(Ge);AET();}
function AET(){AS2=APk();AS3=AOB();ASY=G($rt_arraycls(B),[G(B,[C(275),APE()]),G(B,[C(276),ANM()]),G(B,[C(277),APh()]),G(B,[C(278),APp()]),G(B,[C(279),AS3]),G(B,[C(280),AOM()]),G(B,[C(281),AOy()]),G(B,[C(282),ANV()]),G(B,[C(283),ANS()]),G(B,[C(284),ANZ()]),G(B,[C(285),AOa()]),G(B,[C(286),ANX()]),G(B,[C(287),AOZ()]),G(B,[C(288),ANG()]),G(B,[C(289),APm()]),G(B,[C(290),AN_()]),G(B,[C(291),AOK()]),G(B,[C(292),AN9()]),G(B,[C(293),AOL()]),G(B,[C(294),AN1()]),G(B,[C(295),APt()]),G(B,[C(296),AN3()]),G(B,[C(297),AOQ()]),
G(B,[C(298),APg()]),G(B,[C(299),APd()]),G(B,[C(300),APq()]),G(B,[C(301),AN0()]),G(B,[C(302),AO5()]),G(B,[C(303),AS2]),G(B,[C(304),AOT()]),G(B,[C(305),ANW()]),G(B,[C(306),AS2]),G(B,[C(307),AND()]),G(B,[C(308),AS3]),G(B,[C(309),AOh()]),G(B,[C(310),K(0,127)]),G(B,[C(311),K(128,255)]),G(B,[C(312),K(256,383)]),G(B,[C(313),K(384,591)]),G(B,[C(314),K(592,687)]),G(B,[C(315),K(688,767)]),G(B,[C(316),K(768,879)]),G(B,[C(317),K(880,1023)]),G(B,[C(318),K(1024,1279)]),G(B,[C(319),K(1280,1327)]),G(B,[C(320),K(1328,1423)]),
G(B,[C(321),K(1424,1535)]),G(B,[C(322),K(1536,1791)]),G(B,[C(323),K(1792,1871)]),G(B,[C(324),K(1872,1919)]),G(B,[C(325),K(1920,1983)]),G(B,[C(326),K(2304,2431)]),G(B,[C(327),K(2432,2559)]),G(B,[C(328),K(2560,2687)]),G(B,[C(329),K(2688,2815)]),G(B,[C(330),K(2816,2943)]),G(B,[C(331),K(2944,3071)]),G(B,[C(332),K(3072,3199)]),G(B,[C(333),K(3200,3327)]),G(B,[C(334),K(3328,3455)]),G(B,[C(335),K(3456,3583)]),G(B,[C(336),K(3584,3711)]),G(B,[C(337),K(3712,3839)]),G(B,[C(338),K(3840,4095)]),G(B,[C(339),K(4096,4255)]),
G(B,[C(340),K(4256,4351)]),G(B,[C(341),K(4352,4607)]),G(B,[C(342),K(4608,4991)]),G(B,[C(343),K(4992,5023)]),G(B,[C(344),K(5024,5119)]),G(B,[C(345),K(5120,5759)]),G(B,[C(346),K(5760,5791)]),G(B,[C(347),K(5792,5887)]),G(B,[C(348),K(5888,5919)]),G(B,[C(349),K(5920,5951)]),G(B,[C(350),K(5952,5983)]),G(B,[C(351),K(5984,6015)]),G(B,[C(352),K(6016,6143)]),G(B,[C(353),K(6144,6319)]),G(B,[C(354),K(6400,6479)]),G(B,[C(355),K(6480,6527)]),G(B,[C(356),K(6528,6623)]),G(B,[C(357),K(6624,6655)]),G(B,[C(358),K(6656,6687)]),
G(B,[C(359),K(7424,7551)]),G(B,[C(360),K(7552,7615)]),G(B,[C(361),K(7616,7679)]),G(B,[C(362),K(7680,7935)]),G(B,[C(363),K(7936,8191)]),G(B,[C(364),K(8192,8303)]),G(B,[C(365),K(8304,8351)]),G(B,[C(366),K(8352,8399)]),G(B,[C(367),K(8400,8447)]),G(B,[C(368),K(8448,8527)]),G(B,[C(369),K(8528,8591)]),G(B,[C(370),K(8592,8703)]),G(B,[C(371),K(8704,8959)]),G(B,[C(372),K(8960,9215)]),G(B,[C(373),K(9216,9279)]),G(B,[C(374),K(9280,9311)]),G(B,[C(375),K(9312,9471)]),G(B,[C(376),K(9472,9599)]),G(B,[C(377),K(9600,9631)]),
G(B,[C(378),K(9632,9727)]),G(B,[C(379),K(9728,9983)]),G(B,[C(380),K(9984,10175)]),G(B,[C(381),K(10176,10223)]),G(B,[C(382),K(10224,10239)]),G(B,[C(383),K(10240,10495)]),G(B,[C(384),K(10496,10623)]),G(B,[C(385),K(10624,10751)]),G(B,[C(386),K(10752,11007)]),G(B,[C(387),K(11008,11263)]),G(B,[C(388),K(11264,11359)]),G(B,[C(389),K(11392,11519)]),G(B,[C(390),K(11520,11567)]),G(B,[C(391),K(11568,11647)]),G(B,[C(392),K(11648,11743)]),G(B,[C(393),K(11776,11903)]),G(B,[C(394),K(11904,12031)]),G(B,[C(395),K(12032,12255)]),
G(B,[C(396),K(12272,12287)]),G(B,[C(397),K(12288,12351)]),G(B,[C(398),K(12352,12447)]),G(B,[C(399),K(12448,12543)]),G(B,[C(400),K(12544,12591)]),G(B,[C(401),K(12592,12687)]),G(B,[C(402),K(12688,12703)]),G(B,[C(403),K(12704,12735)]),G(B,[C(404),K(12736,12783)]),G(B,[C(405),K(12784,12799)]),G(B,[C(406),K(12800,13055)]),G(B,[C(407),K(13056,13311)]),G(B,[C(408),K(13312,19893)]),G(B,[C(409),K(19904,19967)]),G(B,[C(410),K(19968,40959)]),G(B,[C(411),K(40960,42127)]),G(B,[C(412),K(42128,42191)]),G(B,[C(413),K(42752,
42783)]),G(B,[C(414),K(43008,43055)]),G(B,[C(415),K(44032,55203)]),G(B,[C(416),K(55296,56191)]),G(B,[C(417),K(56192,56319)]),G(B,[C(418),K(56320,57343)]),G(B,[C(419),K(57344,63743)]),G(B,[C(420),K(63744,64255)]),G(B,[C(421),K(64256,64335)]),G(B,[C(422),K(64336,65023)]),G(B,[C(423),K(65024,65039)]),G(B,[C(424),K(65040,65055)]),G(B,[C(425),K(65056,65071)]),G(B,[C(426),K(65072,65103)]),G(B,[C(427),K(65104,65135)]),G(B,[C(428),K(65136,65279)]),G(B,[C(429),K(65280,65519)]),G(B,[C(430),K(0,1114111)]),G(B,[C(431),
ANY()]),G(B,[C(432),BE(0,1)]),G(B,[C(433),HL(62,1)]),G(B,[C(434),BE(1,1)]),G(B,[C(435),BE(2,1)]),G(B,[C(436),BE(3,0)]),G(B,[C(437),BE(4,0)]),G(B,[C(438),BE(5,1)]),G(B,[C(439),HL(448,1)]),G(B,[C(440),BE(6,1)]),G(B,[C(441),BE(7,0)]),G(B,[C(442),BE(8,1)]),G(B,[C(443),HL(3584,1)]),G(B,[C(444),BE(9,1)]),G(B,[C(445),BE(10,1)]),G(B,[C(446),BE(11,1)]),G(B,[C(447),HL(28672,0)]),G(B,[C(448),BE(12,0)]),G(B,[C(449),BE(13,0)]),G(B,[C(450),BE(14,0)]),G(B,[C(451),AOt(983040,1,1)]),G(B,[C(452),BE(15,0)]),G(B,[C(453),BE(16,
1)]),G(B,[C(454),BE(18,1)]),G(B,[C(455),AOF(19,0,1)]),G(B,[C(456),HL(1643118592,1)]),G(B,[C(457),BE(20,0)]),G(B,[C(458),BE(21,0)]),G(B,[C(459),BE(22,0)]),G(B,[C(460),BE(23,0)]),G(B,[C(461),BE(24,1)]),G(B,[C(462),HL(2113929216,1)]),G(B,[C(463),BE(25,1)]),G(B,[C(464),BE(26,0)]),G(B,[C(465),BE(27,0)]),G(B,[C(466),BE(28,1)]),G(B,[C(467),BE(29,0)]),G(B,[C(468),BE(30,0)])]);}
function Ls(){BV.call(this);this.pU=0;}
function AKX(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.pU!=FR(FP(D4(e,d)))?(-1):2;}
function JM(){BN.call(this);this.fB=0;}
function AI1(a){var b=new JM();ADJ(b,a);return b;}
function ADJ(a,b){BJ(a);a.fB=b;}
function AJo(a,b){a.e=b;}
function AD$(a,b,c,d){var e,f;e=b+1|0;if(e>d.r){d.c0=1;return (-1);}f=I(c,b);if(b>d.cu&&Cm(I(c,b-1|0)))return (-1);if(a.fB!=f)return (-1);return a.e.c(e,c,d);}
function AGh(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return GP(a,b,c,d);e=d.cu;f=d.r;while(true){if(b>=f)return (-1);g=Hp(c,a.fB,b);if(g<0)return (-1);if(g>e&&Cm(I(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AED(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return GZ(a,b,c,d,e);f=e.cu;a:{while(true){if(c<b)return (-1);g=GD(d,a.fB,c);if(g<0)break a;if(g<b)break a;if(g>f&&Cm(I(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ACv(a,b){if(b instanceof D0)return 0;if(b instanceof DQ)return 0;if(b instanceof Db)return 0;if(b instanceof Dw)return 0;if(b instanceof J1)return 0;if(!(b instanceof JM))return 1;return b.fB!=a.fB?0:1;}
function ALw(a,b){return 1;}
function J1(){BN.call(this);this.fh=0;}
function AGD(a){var b=new J1();AI8(b,a);return b;}
function AI8(a,b){BJ(a);a.fh=b;}
function ADL(a,b){a.e=b;}
function ACc(a,b,c,d){var e,f,g,h;e=d.r;f=b+1|0;g=BF(f,e);if(g>0){d.c0=1;return (-1);}h=I(c,b);if(g<0&&CI(I(c,f)))return (-1);if(a.fh!=h)return (-1);return a.e.c(f,c,d);}
function AJH(a,b,c,d){var e,f;if(!(c instanceof Bv))return GP(a,b,c,d);e=d.r;while(true){if(b>=e)return (-1);f=Hp(c,a.fh,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CI(I(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function AKQ(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return GZ(a,b,c,d,e);f=e.r;a:{while(true){if(c<b)return (-1);g=GD(d,a.fh,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CI(I(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AEy(a,b){if(b instanceof D0)return 0;if(b instanceof DQ)return 0;if(b instanceof Db)return 0;if(b instanceof Dw)return 0;if(b instanceof JM)return 0;if(!(b instanceof J1))return 1;return b.fh!=a.fh?0:1;}
function AJP(a,b){return 1;}
function Dw(){var a=this;BV.call(a);a.iK=0;a.hA=0;a.fa=0;}
function AKn(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.iK==e&&a.hA==d?2:(-1);}
function AIJ(a,b,c,d){var e,f;if(!(c instanceof Bv))return GP(a,b,c,d);e=d.r;while(b<e){b=Hp(c,a.iK,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=I(c,b);if(a.hA==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function ADK(a,b,c,d,e){var f;if(!(d instanceof Bv))return GZ(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=GD(d,a.hA,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.iK==I(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AKc(a,b){if(b instanceof Dw)return b.fa!=a.fa?0:1;if(b instanceof Db)return b.i(a.fa);if(b instanceof D0)return 0;if(!(b instanceof DQ))return 1;return 0;}
var Tq=F(Ej);
function ADV(a,b){return b!=10?0:1;}
function AKi(a,b,c){return b!=10?0:1;}
var Tr=F(Ej);
function AK6(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AMB(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function Z_(){var a=this;B.call(a);a.lE=null;a.i1=null;a.f8=0;a.ul=0;}
function AIV(a){var b=new Z_();AGX(b,a);return b;}
function AGX(a,b){var c,d;while(true){c=a.f8;if(b<c)break;a.f8=c<<1|1;}d=c<<1|1;a.f8=d;d=d+1|0;a.lE=Bu(d);a.i1=Bu(d);a.ul=b;}
function Qe(a,b,c){var d,e,f,g;d=0;e=a.f8;f=b&e;while(true){g=a.lE.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.i1.data[f]=c;}
function Rw(a,b){var c,d,e,f;c=a.f8;d=b&c;e=0;while(true){f=a.lE.data[d];if(!f)break;if(f==b)return a.i1.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.ul;}
var WP=F();
var JI=F(U);
function APk(){var a=new JI();AGy(a);return a;}
function AGy(a){}
function YJ(a){return Cg(BQ(C0(),9,13),32);}
var IV=F(U);
function AOB(){var a=new IV();ALs(a);return a;}
function ALs(a){}
function Zg(a){return BQ(C0(),48,57);}
var Z5=F(U);
function APE(){var a=new Z5();AF0(a);return a;}
function AF0(a){}
function AKI(a){return BQ(C0(),97,122);}
var AAz=F(U);
function ANM(){var a=new AAz();AG1(a);return a;}
function AG1(a){}
function ALy(a){return BQ(C0(),65,90);}
var AAB=F(U);
function APh(){var a=new AAB();ADb(a);return a;}
function ADb(a){}
function AE8(a){return BQ(C0(),0,127);}
var JC=F(U);
function APp(){var a=new JC();AEk(a);return a;}
function AEk(a){}
function XD(a){return BQ(BQ(C0(),97,122),65,90);}
var Kc=F(JC);
function AOM(){var a=new Kc();AGH(a);return a;}
function AGH(a){}
function Yj(a){return BQ(XD(a),48,57);}
var ABG=F(U);
function AOy(){var a=new ABG();AIt(a);return a;}
function AIt(a){}
function AGg(a){return BQ(BQ(BQ(C0(),33,64),91,96),123,126);}
var Lf=F(Kc);
function ANV(){var a=new Lf();AJ0(a);return a;}
function AJ0(a){}
function Wo(a){return BQ(BQ(BQ(Yj(a),33,64),91,96),123,126);}
var YU=F(Lf);
function ANS(){var a=new YU();ALm(a);return a;}
function ALm(a){}
function AIb(a){return Cg(Wo(a),32);}
var Zb=F(U);
function ANZ(){var a=new Zb();AKU(a);return a;}
function AKU(a){}
function AEt(a){return Cg(Cg(C0(),32),9);}
var XW=F(U);
function AOa(){var a=new XW();AMs(a);return a;}
function AMs(a){}
function AH$(a){return Cg(BQ(C0(),0,31),127);}
var XM=F(U);
function ANX(){var a=new XM();ADr(a);return a;}
function ADr(a){}
function AMG(a){return BQ(BQ(BQ(C0(),48,57),97,102),65,70);}
var AAF=F(U);
function AOZ(){var a=new AAF();AC2(a);return a;}
function AC2(a){}
function AIT(a){var b;b=new RI;b.wb=a;Bl(b);b.E=1;return b;}
var ABQ=F(U);
function ANG(){var a=new ABQ();AKf(a);return a;}
function AKf(a){}
function AB6(a){var b;b=new LG;b.wk=a;Bl(b);b.E=1;return b;}
var AAa=F(U);
function APm(){var a=new AAa();ADe(a);return a;}
function ADe(a){}
function AGE(a){var b;b=new QO;b.vO=a;Bl(b);return b;}
var ZX=F(U);
function AN_(){var a=new ZX();AH_(a);return a;}
function AH_(a){}
function AKs(a){var b;b=new QN;b.vC=a;Bl(b);return b;}
var AAR=F(U);
function AOK(){var a=new AAR();AEf(a);return a;}
function AEf(a){}
function AEr(a){var b;b=new UW;b.w9=a;Bl(b);G4(b.C,0,2048);b.E=1;return b;}
var W4=F(U);
function AN9(){var a=new W4();ADR(a);return a;}
function ADR(a){}
function AEN(a){var b;b=new NT;b.wC=a;Bl(b);b.E=1;return b;}
var WK=F(U);
function AOL(){var a=new WK();AHS(a);return a;}
function AHS(a){}
function AMz(a){var b;b=new M$;b.xz=a;Bl(b);b.E=1;return b;}
var AAg=F(U);
function AN1(){var a=new AAg();AIu(a);return a;}
function AIu(a){}
function ABZ(a){var b;b=new PK;b.wd=a;Bl(b);return b;}
var AAq=F(U);
function APt(){var a=new AAq();AGr(a);return a;}
function AGr(a){}
function AHm(a){var b;b=new Lz;b.uP=a;Bl(b);b.E=1;return b;}
var Yd=F(U);
function AN3(){var a=new Yd();ACz(a);return a;}
function ACz(a){}
function AEV(a){var b;b=new LF;b.wF=a;Bl(b);b.E=1;return b;}
var Ze=F(U);
function AOQ(){var a=new Ze();ADX(a);return a;}
function ADX(a){}
function AFT(a){var b;b=new MH;b.w6=a;Bl(b);b.E=1;return b;}
var ABs=F(U);
function APg(){var a=new ABs();AHr(a);return a;}
function AHr(a){}
function AHo(a){var b;b=new Oi;b.xl=a;Bl(b);b.E=1;return b;}
var AAn=F(U);
function APd(){var a=new AAn();AIL(a);return a;}
function AIL(a){}
function ALS(a){var b;b=new Op;b.vR=a;Bl(b);return b;}
var YA=F(U);
function APq(){var a=new YA();ADS(a);return a;}
function ADS(a){}
function AJT(a){var b;b=new R8;b.wN=a;Bl(b);return b;}
var Yc=F(U);
function AN0(){var a=new Yc();AKt(a);return a;}
function AKt(a){}
function AIK(a){var b;b=new Rp;b.uT=a;Bl(b);b.E=1;return b;}
var ABM=F(U);
function AO5(){var a=new ABM();AGm(a);return a;}
function AGm(a){}
function AKC(a){var b;b=new LM;b.xI=a;Bl(b);b.E=1;return b;}
var Ip=F(U);
function AOT(){var a=new Ip();AE1(a);return a;}
function AE1(a){}
function Zc(a){return Cg(BQ(BQ(BQ(C0(),97,122),65,90),48,57),95);}
var AAV=F(Ip);
function ANW(){var a=new AAV();AGu(a);return a;}
function AGu(a){}
function AIx(a){var b;b=D3(Zc(a),1);b.E=1;return b;}
var YZ=F(JI);
function AND(){var a=new YZ();AMg(a);return a;}
function AMg(a){}
function AC9(a){var b;b=D3(YJ(a),1);b.E=1;return b;}
var X$=F(IV);
function AOh(){var a=new X$();AHe(a);return a;}
function AHe(a){}
function AF6(a){var b;b=D3(Zg(a),1);b.E=1;return b;}
function XR(){var a=this;U.call(a);a.pH=0;a.qk=0;}
function K(a,b){var c=new XR();AMw(c,a,b);return c;}
function AMw(a,b,c){a.pH=b;a.qk=c;}
function AHB(a){return BQ(C0(),a.pH,a.qk);}
var X6=F(U);
function ANY(){var a=new X6();AMP(a);return a;}
function AMP(a){}
function AMo(a){return BQ(BQ(C0(),65279,65279),65520,65533);}
function YO(){var a=this;U.call(a);a.la=0;a.iQ=0;a.od=0;}
function BE(a,b){var c=new YO();AD_(c,a,b);return c;}
function AOF(a,b,c){var d=new YO();AMy(d,a,b,c);return d;}
function AD_(a,b,c){a.iQ=c;a.la=b;}
function AMy(a,b,c,d){a.od=d;a.iQ=c;a.la=b;}
function AFt(a){var b;b=APA(a.la);if(a.od)G4(b.C,0,2048);b.E=a.iQ;return b;}
function YV(){var a=this;U.call(a);a.k$=0;a.i3=0;a.mJ=0;}
function HL(a,b){var c=new YV();AEW(c,a,b);return c;}
function AOt(a,b,c){var d=new YV();AB1(d,a,b,c);return d;}
function AEW(a,b,c){a.i3=c;a.k$=b;}
function AB1(a,b,c,d){a.mJ=d;a.i3=c;a.k$=b;}
function AB0(a){var b;b=new QF;ZL(b,a.k$);if(a.mJ)G4(b.C,0,2048);b.E=a.i3;return b;}
var XS=F();
var Xq=F();
function Yy(b){var c,d,e,f,g,h,i;c=AKL(ER(b));d=IK(c);e=Bu(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+IK(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=LY(c);h=h+1|0;}return e;}
function Jp(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Mb(){var a=this;B.call(a);a.oI=0;a.qD=0;a.o1=null;}
function AFr(a,b,c){var d=new Mb();ALk(d,a,b,c);return d;}
function ALk(a,b,c,d){a.oI=b;a.qD=c;a.o1=d;}
function AAj(){var a=this;B.call(a);a.nv=null;a.pQ=0;}
function AKL(a){var b=new AAj();AEA(b,a);return b;}
function AEA(a,b){a.nv=b;}
var Yx=F();
function IK(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.nv.data;f=b.pQ;b.pQ=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+V(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function LY(b){var c,d;c=IK(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function XA(){B.call(this);this.H4=null;}
var On=F();
var AS4=null;function Kj(b,c,d){PE(b,c,d,0);}
function PE(b,c,d,e){MY(b,c,d,null,null,e);}
function MY(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=Uj(c);i=X(h);j=X(h);k=X(h);l=Ch(b);c=b.v;if(c.data.length<i)b.v=XO(c,i);m=0;while(m<i){if(g&&m<l){n=4*X(h)|0;h.d1=h.d1+n|0;}else b.v.data[m]=Dk(O_(h,d,0));m=m+1|0;}IW(b);if(j)b.cC=AAp(ABt(h));Eg(b.c_);Eg(b.cP);o=b.c_;g=0;while(g<k){Dn(o,Di(X(h),X(h)),Di(X(h),X(h)));g=g+1|0;}p=b.c_;o=b.cP;q=M6(Tc(p));while(EF(q)){r=Vz(q);s=r.ch;p=r.cw;BU(AS4);r=B7(o,p);if(r===null){r=Bz();Dn(o,p,r);}Bt(r,s);}if(o.jB===null){p=new Oa;p.uf=o;o.jB=p;}p=o.jB;r=new P9;JH(r,
p.uf);while(EF(r)){J9(r);o=r.fp.cw;p=AQL;c=O(B,o.j);d=c.data;GW(o,c);X9(c,p);g=0;t=d.length;while(g<t){p=d[g];H_(o,g);o.ce.data[g]=p;g=g+1|0;}}Ps(h);if(e!==null&&f!==null){p=AIs(e,f);Nc(p);b.dG=AEc(p.j4,p.gK);b.cC=AAp(p.kF);}}
function Ly(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Uj(c);i=X(h);j=X(h);k=X(h)!=1?0:1;l=X(h);m=X(h);n=U3(b,i);o=U3(b,j);p=(G2(BS(b,n.b),n.a)).data[0].k;q=(G2(BS(b,o.b),o.a)).data[1].k;r=0;s=l-1|0;while(r<l){g=O_(h,d,i);if(!r)g=TM(p,g);if(r==s)g=TM(g,q);t=n.b+r|0;u=Dk(g);c=b.v.data;v=c[t];c[t]=u;if(!k&&Ic(v)==Ic(u)){t=0;while(t<Ic(v)){w=v.k.data[t];o=u.k.data[t];x=w.bK;if(x!=5&&x&&!o.bK){o.bK=x;o.bE=w.bE;}t=t+1|0;}}r=r+1|0;}if(k){if(m){w=ABt(h);v=IH(i,j,
(-1));MF(b.cC,v,w);}else if(e!==null&&f!==null){u=AIs(e,f);Nc(u);v=IH(i,j,(-1));MF(b.cC,v,u.kF);n=b.dG;n.ev=b.cC.cA.bX;n.dR=u.gK;}}Ps(h);}
function O_(b,c,d){var e,f,g,h,i,j,k,l;e=X(b);f=O(B_,e);g=f.data;h=0;while(h<e){i=X(b);j=X(b);k=X(b);l=X(b);g[h]=Du(DL(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AAb(){AS4=new Vb;}
function Tl(){var a=this;B.call(a);a.xK=null;a.ic=null;}
function AFa(a,b){var c;c=a.ic;b=b;a.ic=NP(!c.lw&&!b.dJ?0:1);return 1;}
function Un(){var a=this;Q.call(a);a.m9=null;a.xe=null;}
function AFc(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b0^C5(a.m9,c):0;}
function Ul(){var a=this;Q.call(a);a.sH=null;a.tp=null;a.wS=null;}
function ACm(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b0^C5(a.sH,c):0;return a.tp.i(b)&&!d?1:0;}
function Nr(){var a=this;Q.call(a);a.hG=null;a.uY=null;}
function AHs(a,b){return a.T^C5(a.hG,b);}
function AFX(a){var b,c,d;b=new R;T(b);c=Gp(a.hG,0);while(c>=0){Hs(b,FJ(c));B0(b,124);c=Gp(a.hG,c+1|0);}d=b.D;if(d>0)Uc(b,d-1|0);return S(b);}
function Ny(){var a=this;Q.call(a);a.p8=null;a.wi=null;}
function AKq(a,b){return a.p8.i(b);}
function Nw(){var a=this;Q.call(a);a.iV=0;a.nY=null;a.jP=null;}
function AKW(a,b){return !(a.iV^C5(a.jP.y,b))&&!(a.iV^a.jP.dr^a.nY.i(b))?0:1;}
function Nx(){var a=this;Q.call(a);a.i2=0;a.s4=null;a.kM=null;}
function AHU(a,b){return !(a.i2^C5(a.kM.y,b))&&!(a.i2^a.kM.dr^a.s4.i(b))?1:0;}
function NB(){var a=this;Q.call(a);a.tX=0;a.tc=null;a.sZ=null;a.vm=null;}
function AER(a,b){return a.tX^(!a.tc.i(b)&&!a.sZ.i(b)?0:1);}
function NC(){var a=this;Q.call(a);a.qg=0;a.pX=null;a.ph=null;a.xF=null;}
function ABS(a,b){return a.qg^(!a.pX.i(b)&&!a.ph.i(b)?0:1)?0:1;}
function Nz(){var a=this;Q.call(a);a.o5=null;a.xH=null;}
function AF1(a,b){return CE(a.o5,b);}
function NA(){var a=this;Q.call(a);a.tm=null;a.vy=null;}
function AHW(a,b){return CE(a.tm,b)?0:1;}
function ND(){var a=this;Q.call(a);a.qv=null;a.p0=0;a.sf=null;}
function AL3(a,b){return !CE(a.qv,b)&&!(a.p0^C5(a.sf.y,b))?0:1;}
function NE(){var a=this;Q.call(a);a.q8=null;a.ro=0;a.qR=null;}
function AEm(a,b){return !CE(a.q8,b)&&!(a.ro^C5(a.qR.y,b))?1:0;}
function Nq(){var a=this;Q.call(a);a.r6=0;a.s3=null;a.tB=null;a.u3=null;}
function ANA(a,b){return !(a.r6^a.s3.i(b))&&!CE(a.tB,b)?0:1;}
function N4(){var a=this;Q.call(a);a.tx=0;a.l$=null;a.mP=null;a.vu=null;}
function AF5(a,b){return !(a.tx^a.l$.i(b))&&!CE(a.mP,b)?1:0;}
function No(){var a=this;Q.call(a);a.ov=null;a.vA=null;}
function AEl(a,b){return CE(a.ov,b);}
function Np(){var a=this;Q.call(a);a.oE=null;a.xB=null;}
function AFI(a,b){return CE(a.oE,b)?0:1;}
function Nu(){var a=this;Q.call(a);a.tT=null;a.qZ=0;a.uH=null;}
function AG0(a,b){return CE(a.tT,b)&&a.qZ^C5(a.uH.y,b)?1:0;}
function Nn(){var a=this;Q.call(a);a.rK=null;a.qi=0;a.qX=null;}
function ALF(a,b){return CE(a.rK,b)&&a.qi^C5(a.qX.y,b)?0:1;}
function Ns(){var a=this;Q.call(a);a.sj=0;a.m7=null;a.qd=null;a.vl=null;}
function ADn(a,b){return a.sj^a.m7.i(b)&&CE(a.qd,b)?1:0;}
function Nt(){var a=this;Q.call(a);a.rC=0;a.lZ=null;a.r4=null;a.vE=null;}
function AJO(a,b){return a.rC^a.lZ.i(b)&&CE(a.r4,b)?0:1;}
var Fk=F(Cl);
var ASf=null;var ASe=null;var AS5=null;function Rs(){Rs=Bg(Fk);ANh();}
function AKV(a,b){var c=new Fk();YF(c,a,b);return c;}
function YF(a,b,c){Rs();Do(a,b,c);}
function ANh(){var b;ASf=AKV(C(469),0);b=AKV(C(470),1);ASe=b;AS5=G(Fk,[ASf,b]);}
function Wd(){B.call(this);this.oV=null;}
var KC=F(0);
function Ro(){var a=this;B.call(a);a.vq=null;a.s6=null;a.hX=null;a.cf=null;a.hH=0;a.jH=0;}
function LD(a,b){var c,d,e;c=H(a.hX);if(b>=0&&b<=c){VG(a.cf,null,(-1),(-1));d=a.cf;d.is=1;d.dN=b;c=d.gO;if(c<0)c=b;d.gO=c;b=a.s6.b4(b,a.hX,d);if(b==(-1))a.cf.c0=1;if(b>=0){d=a.cf;if(d.hY){e=d.di.data;if(e[0]==(-1)){c=d.dN;e[0]=c;e[1]=c;}d.gO=H2(d);return 1;}}a.cf.dN=(-1);return 0;}d=new BT;Br(d,DX(b));J(d);}
function ABr(a){return N0(a.cf,0);}
function X_(a){return QQ(a.cf,0);}
function WV(a){return a.cf.h3;}
function ZY(){var a=this;B.call(a);a.ge=null;a.d1=0;}
function Uj(a){var b=new ZY();AB_(b,a);return b;}
function AB_(a,b){a.ge=b;a.d1=0;}
function X(a){var b,c;b=a.ge.data;c=a.d1;a.d1=c+1|0;return b[c];}
function Ps(a){var b,c,d,e;if(a.d1!=a.ge.data.length){b=D2();c=a.ge.data.length;d=a.d1;e=new R;T(e);L(Bj(L(Bj(L(e,C(234)),c),C(471)),d),C(472));CT(b,S(e));}}
function W5(){var a=this;B.call(a);a.j4=null;a.kF=null;a.gK=null;a.b$=null;a.i9=null;a.jO=null;a.fZ=null;a.kE=null;a.kx=null;}
function AIs(a,b){var c=new W5();AL8(c,a,b);return c;}
function AL8(a,b,c){a.b$=Uj(b);a.i9=c;}
function Nc(a){var b,c,d,e,f,g,h,i;b=X(a.b$);c=new JG;OE(c);a.gK=c;a.fZ=Bz();d=0;while(d<b){e=X(a.b$);f=X(a.b$);g=DL(a.i9,e,f);Dn(a.gK,g,Bz());Bt(a.fZ,g);d=d+1|0;}c=M6(Tc(a.gK));while(EF(c)){FW((Vz(c)).cw,Mc(a));}d=X(a.b$);if(d==(-1))a.j4=null;else{a.jO=O(EO,d);c=new LH;h=a.b$;i=a.i9;g=a.fZ;c.cQ=h;c.qj=i;c.pA=g;a.kE=c;c=new P7;c.dp=h;c.sS=i;c.th=g;a.kx=c;a.j4=PG(a,null);}if(X(a.b$)!=(-1))a.kF=P4(a.b$,a.jO);}
function PG(a,b){var c,d,e,f,g,h,i,j,k;c=X(a.b$);d=X(a.b$);e=a.kE;f=X(e.cQ);g=Bz();h=0;while(h<f){Bt(g,LJ(e));h=h+1|0;}a:{switch(d){case -1:i=new JD;i.fz=b;b=ARB;i.cb=b;i.dZ=b;i.dA=b;i.hx=b;i.fr=b;break a;case 0:i=ANH(b);break a;case 1:i=new Jc;Zp(i,b);FW(i.dA,g);break a;default:}b=new Df;i=new R;T(i);Bj(L(i,C(473)),d);Br(b,S(i));J(b);}i.dA=g;b=a.kx;d=X(b.dp);e=Bz();j=0;while(j<d){Bt(e,Fm(b));j=j+1|0;}i.dZ=e;i.hx=Mc(a);d=X(a.b$);b=Bz();j=0;while(j<d){e=LJ(a.kE);g=Fm(a.kx);f=X(a.b$);k=new OG;k.hB=e;k.iq=g;k.n9
=f;Bt(b,k);j=j+1|0;}i.fr=b;j=X(a.b$);i.rZ=j==(-1)?null:Bo(a.fZ,j);d=X(a.b$);b=Bz();j=0;while(j<d){Bt(b,PG(a,i));j=j+1|0;}i.cb=b;a.jO.data[c]=i;return i;}
function Mc(a){var b,c,d,e;b=X(a.b$);c=Bz();d=0;while(d<b){e=X(a.b$);Bt(c,Bo(a.fZ,e));d=d+1|0;}return c;}
var R4=F();
var ASc=null;function AOX(){AOX=Bg(R4);ACO();}
function ACO(){var b,c;Rs();b=Bu((AS5.fU()).data.length);c=b.data;ASc=b;c[ASf.fM]=1;c[ASe.fM]=2;}
function Rx(){B.call(this);this.tQ=null;}
function AKe(a,b){var c,d,e,f,g;FO(a.tQ);c=ARl;d=XI(C(474));if(!Ko()){b=new Bq;Br(b,C(251));KG(d,b);}else{e=$rt_globals.navigator.clipboard;f=ER(b);AO9();b=AS6;g=f.data;g=b.decode(g);b=e.writeText(g);e=new SR;e.wJ=c;c=ABK(d);b.then(Bi(e,"f"),Bi(c,"f"));}}
function VM(){B.call(this);this.lT=null;}
function KG(a,b){var c,d;c=a.lT;d=b.k2;b=new R;T(b);L(L(b,c),d);$rt_globals.console.info($rt_ustr(S(b)));}
var Vb=F();
var EA=F();
var AS7=null;var AS8=null;var ARB=null;var AS9=null;var AS$=null;var AS_=null;function Zr(){AS7=new TC;AS8=new TA;ARB=new TB;AS9=new Ty;AS$=new Tz;AS_=new Wc;}
var I4=F(Ec);
var TC=F(I4);
var Kb=F(Dv);
var TA=F(Kb);
var KF=F(D8);
function AEv(a){var b;b=new DR;W(b);J(b);}
function AIh(a,b){var c;c=new DR;W(c);J(c);}
function AHc(a,b){b=new DR;W(b);J(b);}
var TB=F(KF);
function AIm(a,b){var c;c=new BT;W(c);J(c);}
function AHx(a){return 0;}
function AEX(a){return AS9;}
function ACL(a){return 1;}
var Ty=F();
function ACu(a){return 0;}
function AJz(a){var b;b=new K9;W(b);J(b);}
function AKR(a){var b;b=new Df;W(b);J(b);}
var Ok=F(0);
var Tz=F();
var Wc=F();
var LU=F(FL);
function AFx(a,b,c,d){var e,f,g;e=0;f=d.r;a:{while(true){if(b>f){b=e;break a;}g=E4(d,a.P);C8(d,a.P,b);e=a.cD.c(b,c,d);if(e>=0)break;C8(d,a.P,g);b=b+1|0;}}return b;}
function ANq(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=E4(e,a.P);C8(e,a.P,c);f=a.cD.c(c,d,e);if(f>=0)break;C8(e,a.P,g);c=c+(-1)|0;}}return c;}
function AD8(a){return null;}
var K9=F(Bq);
function Ql(){B.call(this);this.rA=null;}
function AD5(a,b){LA(a.rA,b);}
var Gh=F();
var XP=F(Gh);
var AAf=F(Gh);
var Xo=F(0);
function PO(){B.call(this);this.mE=null;}
function AB5(a,b){var c;c=a.mE;b=Es(b);Dj(c.oV,b);}
function Q1(){B.call(this);this.pK=null;}
function AIc(a,b){b.fK=a.pK.cA;}
function Q0(){B.call(this);this.sG=null;}
function AJ3(a,b){b.fz=a.sG.cA.bX;}
function MZ(){var a=this;B.call(a);a.pN=null;a.pM=null;}
function M1(){B.call(this);this.sx=null;}
function Sj(){var a=this;B.call(a);a.v$=null;a.v9=null;a.v8=null;}
function T3(){var a=this;B.call(a);a.wq=null;a.wr=null;}
function S1(){Ec.call(this);this.p_=null;}
function M6(a){var b;b=new SP;JH(b,a.p_);return b;}
function Oa(){El.call(this);this.uf=null;}
function Tj(){var a=this;B.call(a);a.di=null;a.iA=null;a.kc=null;a.ki=null;a.n1=0;a.hY=0;a.cu=0;a.r=0;a.dN=0;a.h3=0;a.eP=0;a.c0=0;a.w1=0;a.gO=0;a.is=0;}
function BD(a,b,c){a.iA.data[b]=c;}
function CZ(a,b){return a.iA.data[b];}
function H2(a){return QQ(a,0);}
function QQ(a,b){QD(a,b);return a.di.data[(b*2|0)+1|0];}
function C8(a,b,c){a.di.data[b*2|0]=c;}
function IE(a,b,c){a.di.data[(b*2|0)+1|0]=c;}
function E4(a,b){return a.di.data[b*2|0];}
function Hy(a,b){return a.di.data[(b*2|0)+1|0];}
function Z7(a){return N0(a,0);}
function N0(a,b){QD(a,b);return a.di.data[b*2|0];}
function LL(a,b){return a.kc.data[b];}
function DM(a,b,c){a.kc.data[b]=c;}
function QD(a,b){var c;if(!a.hY){c=new Df;W(c);J(c);}if(b>=0&&b<a.n1)return;c=new BT;Br(c,DX(b));J(c);}
function VG(a,b,c,d){a.hY=0;a.is=2;GG(a.di,(-1));GG(a.iA,(-1));if(b!==null)a.ki=b;if(c>=0){a.cu=c;a.r=d;}a.dN=a.cu;}
function Yl(a){return a.is;}
function Vj(){B.call(this);this.m$=null;}
function AEI(a,b){var c,d;c=a.m$;d=new Bq;Br(d,$rt_str(b.message));KG(c,d);}
function Nk(){B.call(this);this.nn=null;}
function AEq(a,b){b.fK=a.nn;}
function LH(){var a=this;B.call(a);a.cQ=null;a.qj=null;a.pA=null;}
function LJ(a){var b,c,d,e,f,g,h,i;a:{b=X(a.cQ);switch(b){case 3:break;case 5:c=M4(a);d=Kq(a);b=X(a.cQ);e=X(a.cQ);f=X(a.cQ);g=Bz();h=0;while(h<f){Bt(g,Kq(a));h=h+1|0;}i=new KQ;Z9(i,c,d,b);i.iG=g;i.lS=e;break a;default:c=new Df;d=new R;T(d);Bj(L(d,C(475)),b);Br(c,S(d));J(c);}i=AO3(M4(a),Kq(a),X(a.cQ));}return i;}
function M4(a){var b,c;b=X(a.cQ);c=X(a.cQ);return AFU(DL(a.qj,b,c),X(a.cQ));}
function Kq(a){var b;b=X(a.cQ);if(b==(-1))return null;return Bo(a.pA,b);}
function P7(){var a=this;B.call(a);a.dp=null;a.sS=null;a.th=null;}
function Fm(a){var b,c,d,e,f;a:{b:{b=X(a.dp);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Md(a);d=OQ(a);b=X(a.dp);e=Rk(a);f=new HH;JZ(f,c,d,2);f.md=b;f.fW=e;break a;case 4:c=Fm(a);d=Fm(a);f=new H1;JZ(f,c.eq,c.eV,9);f.gM=c;f.fY=d;break a;case 5:f=AN2(Md(a),OQ(a),X(a.dp));break a;case 9:c=Rk(a);f=new FA;d=!DO(c)&&Bo(c,0)!==null?(Bo(c,0)).eV:null;JZ(f,null,null,7);f.fN=Bz();c=BL(c);while(BM(c)){e=BP(c);if(!(e instanceof FA))Bt(f.fN,e);else{e=e;FW(f.fN,e.fN);}}f.eV=d;break a;default:break b;}f
=null;break a;}c=new Df;d=new R;T(d);Bj(L(d,C(476)),b);Br(c,S(d));J(c);}return f;}
function Md(a){var b,c;b=X(a.dp);c=X(a.dp);return AFU(DL(a.sS,b,c),X(a.dp));}
function OQ(a){var b;b=X(a.dp);if(b==(-1))return null;return Bo(a.th,b);}
function Rk(a){var b,c,d;b=X(a.dp);c=Bz();d=0;while(d<b){Bt(c,Fm(a));d=d+1|0;}return c;}
function L5(){var a=this;B.call(a);a.oA=null;a.oz=null;}
function AGa(a){var b,c;b=a.oA;c=a.oz;b=b.f0;H6(b,c,b.fc);}
function MI(){var a=this;B.call(a);a.mK=null;a.mL=0;a.mM=0;a.mN=null;a.mG=0;a.mI=0;}
function AIw(a,b){var c,d,e,f,g,h,i,j;c=a.mK;d=a.mL;e=a.mM;f=a.mN;g=a.mG;h=a.mI;i=Cj(c.bh,5.0);d=Be((c.bh.cB.b-d|0)-i|0,Ba((i-d|0)-c.K.o.b|0,b.u.b));j=Be((c.bh.cB.a-e|0)-i|0,Ba((i-e|0)-c.K.o.a|0,b.u.a));Bn(f,d+g|0,j+h|0);JU(c,f,c.N.o);}
function T2(){var a=this;B.call(a);a.r_=null;a.sb=null;a.sa=null;a.r8=0;a.r7=0;a.r$=0;a.r9=0;a.sn=0;a.sm=0;a.so=0;a.sO=0;}
function AFV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.r_;d=a.sb;e=a.sa;f=a.r8;g=a.r7;h=a.r$;i=a.r9;j=a.sn;k=a.sm;l=a.so;m=a.sO;n=Cj(c.bh,5.0);o=c.N.q0();Cp(d,c.N.o);Cp(e,c.N.H);switch(f){case -1:f=Be(h+(b.u.b-g|0)|0,c.bh.cB.b-n|0);g=o.b;h=h+i|0;f=Ba(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Ba((i+b.u.b|0)-g|0,Ba(o.b,n-c.K.H.b|0));}b:{switch(j){case -1:f=Ba(n,Be(l+(b.u.a-k|0)|0,(c.bh.cB.a+c.K.o.a|0)-n|0));g=o.a;h=l+m|0;f=Ba(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Ba((m+b.u.a|0)-k|0,o.a);}JU(c,e,d);}
function B8(){Cl.call(this);this.k4=null;}
var ATa=null;var ATb=null;var ATc=null;var ATd=null;var ATe=null;var ATf=null;var ATg=null;var ATh=null;var ATi=null;var ATj=null;var ATk=null;var ATl=null;var ATm=null;var ATn=null;var ATo=null;var ASg=null;function X4(){X4=Bg(B8);AGU();}
function Dr(a,b,c){var d=new B8();R9(d,a,b,c);return d;}
function ALa(a,b,c,d){var e=new B8();AAZ(e,a,b,c,d);return e;}
function R9(a,b,c,d){X4();Do(a,b,c);a.k4=G5(d,null);}
function AAZ(a,b,c,d,e){X4();Do(a,b,c);a.k4=G5(d,e);}
function AGU(){var b;b=new B8;AAS();R9(b,C(196),0,AR0);ATa=b;ATb=Dr(C(197),1,N(C(477)));ATc=Dr(C(199),2,N(C(478)));ATd=Dr(C(201),3,N(C(479)));ATe=Dr(C(203),4,N(C(477)));ATf=Dr(C(204),5,DU(188,63,60));ATg=Dr(C(206),6,N(C(480)));ATh=Dr(C(208),7,N(C(481)));ATi=Dr(C(210),8,N(C(482)));ATj=ALa(C(212),9,AR0,DU(52,65,52));ATk=ALa(C(213),10,N(C(483)),N(C(484)));ATl=Dr(C(214),11,N(C(485)));ATm=Dr(C(216),12,N(C(486)));ATn=Dr(C(218),13,AR0);b=Dr(C(219),14,N(C(220)));ATo=b;ASg=G(B8,[ATa,ATb,ATc,ATd,ATe,ATf,ATg,ATh,ATi,ATj,
ATk,ATl,ATm,ATn,b]);}
var Dm=F(0);
var ASk=null;var ASl=null;var ASh=null;var ASi=null;var ASj=null;var ARE=null;var ARF=null;var ASm=null;var ASn=null;function AIq(){AIq=Bg(Dm);AJi();}
function AJi(){ASk=N(C(487));ASl=N(C(488));ASh=N(C(189));ASi=N(C(489));ASj=N(C(224));ARE=N(C(487));ARF=N(C(488));ASm=EW(118,121,122,128);ASn=DU(63,66,68);}
var CC=F(0);
var ASo=null;var ARI=null;var ASq=null;var ASp=null;var ASs=null;var ASr=null;var ASu=null;var ASt=null;var ASw=null;var ASv=null;var ASx=null;function AAD(){AAD=Bg(CC);AME();}
function AME(){ASo=G$(0);ARI=DU(8,8,8);ASq=N(C(490));ASp=DU(255,255,255);ASs=N(C(491));ASr=N(C(492));ASu=N(C(493));ASt=N(C(494));ASw=EW(205,205,205,153);ASv=EW(255,255,255,0);ASx=N(C(263));}
function Ca(){Cl.call(this);this.ka=null;}
var ATp=null;var ATq=null;var ATr=null;var ATs=null;var ATt=null;var ATu=null;var ATv=null;var ATw=null;var ATx=null;var ATy=null;var ATz=null;var ATA=null;var ATB=null;var ATC=null;var ATD=null;var ASy=null;function ZN(){ZN=Bg(Ca);AM4();}
function C_(a,b,c){var d=new Ca();P3(d,a,b,c);return d;}
function AMU(a,b,c,d){var e=new Ca();Xk(e,a,b,c,d);return e;}
function P3(a,b,c,d){ZN();Do(a,b,c);a.ka=G5(d,null);}
function Xk(a,b,c,d,e){ZN();Do(a,b,c);a.ka=G5(d,e);}
function AM4(){var b;b=new Ca;AAD();P3(b,C(196),0,ARI);ATp=b;ATq=C_(C(197),1,N(C(495)));ATr=C_(C(199),2,N(C(496)));ATs=C_(C(201),3,N(C(497)));ATt=C_(C(203),4,ARI);ATu=C_(C(204),5,N(C(498)));ATv=C_(C(206),6,N(C(485)));ATw=C_(C(208),7,N(C(499)));ATx=C_(C(210),8,N(C(500)));ATy=AMU(C(212),9,ARI,DU(237,235,252));ATz=AMU(C(213),10,N(C(483)),N(C(501)));ATA=C_(C(214),11,N(C(485)));ATB=C_(C(216),12,N(C(486)));ATC=C_(C(218),13,N(C(502)));b=C_(C(219),14,N(C(220)));ATD=b;ASy=G(Ca,[ATp,ATq,ATr,ATs,ATt,ATu,ATv,ATw,ATx,ATy,
ATz,ATA,ATB,ATC,b]);}
var C$=F(0);
var ASC=null;var ASD=null;var ASz=null;var ASA=null;var ASB=null;var ARJ=null;var ARK=null;var ASE=null;var ASF=null;function ACG(){ACG=Bg(C$);AEM();}
function AEM(){ASC=N(C(261));ASD=N(C(503));ASz=N(C(504));ASA=N(C(505));ASB=N(C(506));ARJ=N(C(261));ARK=N(C(503));ASE=EW(205,205,205,153);ASF=DU(247,248,250);}
function M2(){var a=this;B.call(a);a.ui=null;a.uj=0.0;}
function ACt(a){var b,c,d;b=a.ui;c=a.uj;b=b.f0.bw;d=b.c6;if(!b.b7)d.kS=c;else d.lr=c;GE(b.fg);}
var SP=F(Eu);
function Vz(a){J9(a);return a.fp;}
var P9=F(Eu);
function RI(){Q.call(this);this.wb=null;}
function AL$(a,b){return Ce(b)!=2?0:1;}
function LG(){Q.call(this);this.wk=null;}
function AC7(a,b){return Ce(b)!=1?0:1;}
function QO(){Q.call(this);this.vO=null;}
function ACR(a,b){return P8(b);}
function QN(){Q.call(this);this.vC=null;}
function AFs(a,b){return 0;}
function UW(){Q.call(this);this.w9=null;}
function AGQ(a,b){return !Ce(b)?0:1;}
function NT(){Q.call(this);this.wC=null;}
function AMc(a,b){return Ce(b)!=9?0:1;}
function M$(){Q.call(this);this.xz=null;}
function AJj(a,b){return FE(b);}
function PK(){Q.call(this);this.wd=null;}
function AKv(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Lz(){Q.call(this);this.uP=null;}
function ANb(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FE(b);}return b;}
function LF(){Q.call(this);this.wF=null;}
function AEC(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FE(b);}return b;}
function MH(){Q.call(this);this.w6=null;}
function AMj(a,b){a:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Oi(){Q.call(this);this.xl=null;}
function AH7(a,b){return Iw(b);}
function Op(){Q.call(this);this.vR=null;}
function AJ4(a,b){return Oq(b);}
function R8(){Q.call(this);this.wN=null;}
function AL4(a,b){return Ce(b)!=3?0:1;}
function Rp(){Q.call(this);this.uT=null;}
function AMR(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=FE(b);}return b;}
function LM(){Q.call(this);this.xI=null;}
function AEs(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=FE(b);}return b;}
function KZ(){Q.call(this);this.kA=0;}
function APA(a){var b=new KZ();ZL(b,a);return b;}
function ZL(a,b){Bl(a);a.kA=b;}
function AJm(a,b){return a.T^(a.kA!=Ce(b&65535)?0:1);}
var QF=F(KZ);
function ALe(a,b){return a.T^(!(a.kA>>Ce(b&65535)&1)?0:1);}
var SV=F(0);
var ASd=null;function AOu(){AOu=Bg(SV);AMO();}
function AMO(){ASd=N(C(487));}
function Rb(){B.call(this);this.pu=null;}
function AFL(a,b){b.fz=a.pu;}
function Vd(){B.call(this);this.mZ=null;}
function AFR(a,b){var c,d,e,f;c=a.mZ;b=Es(b);d=c.pN;c=c.pM;e=new VA;f=AJ_(In(c));c=null;WO(e,ADE(b),c,f);Sf(d,e);}
function Ve(){var a=this;B.call(a);a.ol=null;a.om=null;}
function ADm(a,b){var c,d;c=a.ol;d=a.om;b.text().then(Bi(c,"f"),Bi(d,"f"));}
function N$(){var a=this;B.call(a);a.nF=null;a.nD=null;}
var YG=F();
function SR(){B.call(this);this.wJ=null;}
function AMT(a,b){}
function SN(){B.call(this);this.oF=null;}
function AHE(a,b){var c;c=a.oF;b=$rt_str(b.message);CT(c.sx,b);}
function LB(){B.call(this);this.uE=null;}
function AGf(a){Dq(a.uE);}
var VN=F(0);
var AS6=null;function AO9(){AO9=Bg(VN);AJX();}
function AJX(){AS6=new $rt_globals.TextDecoder("utf-16");}
function Qp(){B.call(this);this.sM=null;}
function AK1(a){var b,c;b=a.sM;c=b.nF;b=b.nD;c.x6(b.h_,b.kn,null);}
var AAd=F(0);
function Y2(){var a=this;B.call(a);a.BY=null;a.BW=null;a.B1=0.0;}
function TZ(){var a=this;B.call(a);a.iu=null;a.gG=0;}
function ML(){B.call(this);this.rl=null;}
function ACN(a,b){return MK(I(a.rl,b.ba));}
var Xc=F();
$rt_packages([]);
$rt_metadata([B,0,0,[],0,3,0,0,["bp",APW(AH3),"eg",APV(ADH)],Fb,0,B,[],0,3,0,0,0,LX,0,B,[],3,3,0,0,0,Lt,0,B,[],3,3,0,0,0,Us,0,B,[LX,Lt],0,3,0,0,0,XL,0,B,[],4,0,0,0,0,Xr,0,B,[],4,3,0,0,0,FM,0,B,[],0,3,0,0,0,DE,0,FM,[],0,3,0,0,0,Bq,0,DE,[],0,3,0,0,0,YW,0,Bq,[],0,3,0,0,0,Cu,0,B,[],3,3,0,0,0,Ck,0,B,[],3,3,0,0,0,HR,0,B,[],3,3,0,0,0,Bv,0,B,[Cu,Ck,HR],0,3,0,FN,["bp",APW(B1),"k6",APV(JY),"iO",APW(AFv)],FH,0,FM,[],0,3,0,0,0,Gs,0,FH,[],0,3,0,0,0,YB,0,Gs,[],0,3,0,0,0,Ea,0,B,[Cu],1,3,0,0,0,Fz,0,Ea,[Ck],0,3,0,0,["bp",APW(AMZ),
"iO",APW(AHl)],FB,0,B,[Cu,HR],0,0,0,0,["g0",APW(ID),"eg",APV(S)],G3,0,B,[],3,3,0,0,0,R,0,FB,[G3],0,3,0,0,["kP",APZ(AHi),"jT",APY(AEL),"eg",APV(GK),"g0",APW(AHn),"lk",APX(AHP)],E9,0,Gs,[],0,3,0,0,0,ZM,0,E9,[],0,3,0,0,0,Yq,0,E9,[],0,3,0,0,0,R3,0,B,[],3,3,0,0,0,C3,0,B,[],3,3,0,0,0,NS,0,B,[],3,0,0,0,0,HD,0,B,[R3,C3,NS],1,3,0,0,["eG",APV(K0)],Qt,0,HD,[],0,3,0,0,0,WR,0,B,[],0,3,0,0,0,W3,0,B,[],0,3,0,0,0,BG,0,B,[],3,3,0,0,0,BO,0,B,[BG],3,3,0,0,0,Pa,0,B,[BO],0,3,0,0,["R",APW(AG_)],Pc,0,B,[BO],0,3,0,0,["R",APW(AHq)],J6,
0,B,[],4,3,0,0,0,AAt,0,B,[],4,3,0,0,0,JN,0,B,[],3,3,0,0,0,Dv,0,B,[JN],1,3,0,0,0,DF,0,B,[],3,3,0,0,0,Jm,0,Dv,[DF,Cu],0,3,0,0,0,Ya,0,B,[],0,3,0,0,0,ABO,0,B,[],4,3,0,0,0,Ht,0,B,[BG],3,3,0,0,0,Tu,0,B,[Ht],0,3,0,0,["R",APW(AIR)],Gl,0,B,[],3,3,0,0,0,RG,0,B,[Gl],0,3,0,0,0,BT,0,Bq,[],0,3,0,0,0]);
$rt_metadata([Zv,0,B,[],4,3,0,0,0,FS,0,Bq,[],0,3,0,0,0,HJ,0,Bq,[],0,3,0,0,0,CL,0,B,[Ck],0,3,0,0,0,Ln,0,B,[BG],3,3,0,0,0,Rt,0,B,[Ln],3,3,0,0,0,DV,0,B,[BG],3,3,0,0,0,WW,0,B,[BG,Rt,DV],1,3,0,0,["Fv",APV(AIN),"Ge",APW(ALl),"HN",APW(AK8),"AG",APW(AEo),"Fm",APW(ACe),"yE",APV(AEE),"Gr",APX(ALf),"Gx",APY(AG7),"Hj",APV(AC5),"HX",APV(AJK),"Ek",APW(ALX),"BL",APV(AIl),"Io",APW(AGF),"Dv",APV(AIP),"CC",APV(ANo),"H$",APV(AHF),"yx",APW(ACY),"GF",APV(AM0),"EN",APX(AGC),"Bu",APX(AId),"Gf",APX(AMu),"FH",APV(ACh),"G6",APV(AGo),
"Hz",APW(AEQ),"D0",APW(AFH),"Az",APX(AGT),"CZ",APV(AHJ),"G_",APW(AC8),"yZ",APV(AFG),"Ia",APV(AJ7),"Aj",APW(AB3),"Dt",APW(ALN),"H0",APW(ADy),"Ch",APV(ALQ),"A_",APX(ADI),"F5",APW(AJW),"CM",APV(AKA),"zp",APX(AJg),"zt",APX(AIZ),"Ce",APV(ALK),"HC",APW(AM5),"Bl",APY(AI2),"Ae",APV(AEH),"Bx",APX(AD2),"BE",APV(ACH),"FU",APV(AMV),"Eh",APV(AJf),"xP",APV(ACF),"Fj",APX(AJh),"y0",APW(AEw),"DY",APW(AFY),"z4",APV(AKH)],Oh,0,B,[DV],3,3,0,0,0,Qn,0,B,[DV],3,3,0,0,0,Qb,0,B,[DV],3,3,0,0,0,R0,0,B,[DV],3,3,0,0,0,Vk,0,B,[DV],3,3,0,
0,0,SZ,0,B,[DV,Oh,Qn,Qb,R0,Vk],3,3,0,0,0,XH,0,B,[BG,SZ],1,3,0,0,["EZ",APX(AJk),"Hh",APX(AHk),"Al",APY(AGq),"Bi",APW(ADc),"EH",APY(AEU)],BI,0,Bq,[],0,3,0,0,0,Gm,0,BT,[],0,3,0,0,0,Gx,0,B,[],3,3,0,0,0,FK,0,B,[Gx,DF],0,0,0,0,["bp",APW(AEu)],FT,0,FK,[],0,0,0,0,0,Mm,0,B,[BO],0,3,0,0,["R",APW(AFA)],Mn,0,B,[BO],0,3,0,0,["R",APW(AIf)],Y0,0,B,[BG],1,3,0,0,0,Y6,0,B,[BG],1,3,0,0,0,AAM,0,B,[BG],1,3,0,0,0,TN,0,B,[BG],3,3,0,0,0,YX,0,B,[TN],1,3,0,0,["Ha",APW(AF_),"Gw",APV(AH0)],MJ,0,B,[BO],0,3,0,0,["R",APW(AJV)],Py,0,B,[],
3,3,0,0,0,NH,0,B,[Py],3,3,0,0,0,Ry,0,B,[NH],0,3,0,0,0,Eh,0,B,[],3,3,0,0,0,YL,0,B,[Eh],0,3,0,0,0,Bh,0,B,[],3,3,0,0,0,YM,0,B,[Bh],0,3,0,0,0,X0,0,B,[],0,3,0,0,0,PY,0,B,[Ht],0,3,0,0,["R",APW(ACx)],PX,0,B,[BO],0,3,0,0,["R",APW(ANt)],PZ,0,B,[BO],0,3,0,0,["R",APW(AMv)],Qh,0,B,[BG],3,3,0,0,0,TG,0,B,[Qh],0,3,0,0,["Dx",APW(AGB)],TE,0,B,[Bh],0,3,0,0,0,Pg,0,B,[BG],3,3,0,0,0,TF,0,B,[Pg],0,3,0,0,["Hw",APX(AE0)],AA1,0,B,[BG],1,3,0,0,0,B$,0,B,[BG],3,3,0,0,0,TD,0,B,[B$],0,3,0,0,["bU",APW(AJ5)],Rc,0,B,[],0,3,0,0,0,K1,0,B,[],
3,3,0,0,0,RS,0,B,[K1],3,3,0,0,0]);
$rt_metadata([ST,0,B,[],3,3,0,0,0,FG,0,B,[RS,ST],1,3,0,0,0,Ir,0,FG,[],0,3,0,0,0,Yn,0,Ir,[],0,3,0,0,0,Fy,0,FG,[],1,3,0,0,0,Jv,0,Fy,[],0,3,0,0,["ji",APY(AFh)],Ud,0,B,[],3,3,0,0,["d4",APW(ABV)],Fr,0,B,[Ud],3,3,0,0,["d4",APW(ABV),"kC",APW(AG9)],El,0,B,[Fr],1,3,0,0,["d4",APW(ABV),"kC",APW(AG9),"dz",APV(DO),"mQ",APW(AKZ)],Ju,0,B,[Fr],3,3,0,0,["d4",APW(ABV),"kC",APW(AG9)],Ib,0,B,[Ju],3,3,0,0,["d4",APW(ABV),"kC",APW(AG9)],D8,0,El,[Ib],1,3,0,0,["d4",APW(ABV),"kC",APW(AG9),"q_",APW(AKl),"bS",APV(BL),"rO",APX(AJE),"lF",
APX(ALH),"bp",APW(AIB)],KO,0,D8,[],1,3,0,0,["d4",APW(ABV),"kC",APW(AG9)],Lu,0,B,[Fr],3,3,0,0,["d4",APW(ABV),"kC",APW(AG9)],VH,0,B,[Lu,Ju],3,3,0,0,["d4",APW(ABV),"kC",APW(AG9)],SS,0,KO,[VH],0,3,0,0,["d4",APW(ABV),"kC",APW(AG9)],VE,0,B,[JN],3,3,0,0,0,LW,0,B,[VE],3,3,0,0,0,N3,0,Dv,[DF,Cu,LW],0,3,0,0,0,AAW,0,B,[],4,3,0,0,0,Rg,0,B,[Eh],0,3,0,0,0,Rh,0,B,[BO],0,3,0,0,["R",APW(ACg)],XU,0,B,[],0,3,0,0,0,JW,0,B,[],1,3,0,0,0,Tx,0,JW,[],0,3,0,0,0,Kz,0,B,[C3],1,3,0,0,0,Ig,0,B,[Ck],1,3,0,0,0,K6,0,Ig,[],0,3,0,AFw,0,ON,0,B,
[],0,3,0,0,0,Ux,0,B,[B$],0,3,0,0,["bU",APW(AJG)],Uy,0,B,[B$],0,3,0,0,["bU",APW(AJQ)],Uz,0,B,[B$],0,3,0,0,["bU",APW(AIj)],UA,0,B,[B$],0,3,0,0,["bU",APW(AHM)],UB,0,B,[B$],0,3,0,0,["bU",APW(AH8)],UC,0,B,[B$],0,3,0,0,["bU",APW(AKd)],UD,0,B,[B$],0,3,0,0,["bU",APW(AGp)],UE,0,B,[B$],0,3,0,0,["bU",APW(ANi)],UF,0,B,[B$],0,3,0,0,["bU",APW(AFF)],UG,0,B,[B$],0,3,0,0,["bU",APW(AK$)],V0,0,B,[B$],0,3,0,0,["bU",APW(AMX)],V1,0,B,[B$],0,3,0,0,["bU",APW(AHZ)],V2,0,B,[B$],0,3,0,0,["bU",APW(AIn)],V3,0,B,[B$],0,3,0,0,["bU",APW(AJY)],Su,
0,B,[],3,3,0,0,0,SG,0,B,[Su],0,3,0,0,0,SF,0,B,[B$],0,3,0,0,["bU",APW(AHb)],Lo,0,B,[],0,3,0,0,0,H9,0,B,[Gl],0,3,0,0,["tY",APX(Ix)],ABe,0,B,[],0,3,0,0,0,DH,0,B,[],3,3,0,0,0]);
$rt_metadata([Ep,0,B,[DH],3,3,0,0,0,Fs,0,B,[],3,3,0,0,0,Hf,0,B,[],3,3,0,0,0,Le,0,B,[DH],3,3,0,0,0,Jl,0,B,[],3,3,0,0,0,EU,0,B,[],3,3,0,0,0,IM,0,B,[EU],3,3,0,0,0,Pl,0,B,[C3],0,3,0,0,0,Bp,0,B,[],0,3,0,0,["bp",APW(AG2)],UI,0,B,[],0,3,0,0,0,AAA,0,B,[],0,3,0,0,0,Xm,0,B,[],3,3,0,0,0,Pe,0,B,[],0,3,0,0,0,Kn,0,B,[],0,3,0,0,0,CB,0,Kn,[],0,3,0,0,0,AAT,0,CB,[],0,3,0,0,0,D$,0,CB,[],0,3,0,0,0,PS,0,CB,[],0,3,0,0,0,YQ,0,D$,[],0,3,0,0,0,Fo,0,D$,[],0,3,0,0,0,M0,0,Fo,[],0,3,0,0,0,ABu,0,Fo,[],0,3,0,0,0,XJ,0,D$,[],0,3,0,0,0,ZO,0,
CB,[],0,3,0,0,0,Xi,0,CB,[],0,3,0,0,0,QP,0,B,[BG],3,3,0,0,0,ABL,0,B,[QP],3,3,0,0,0,Pb,0,B,[C3],0,3,0,0,0,Pd,0,B,[],0,3,0,0,0,Cl,0,B,[Ck,Cu],1,3,0,0,0,F0,0,Cl,[],12,3,0,GH,0,J4,0,Fy,[],0,3,0,0,["ji",APY(AG5)],DB,0,Cl,[],12,3,0,AMe,0,AAs,0,BI,[],0,3,0,0,0,TH,0,DE,[],0,3,0,0,0,XG,0,B,[],0,3,0,0,0,F4,0,Cl,[],12,0,0,AIg,0,K4,0,B,[BG],3,3,0,0,0,VC,0,B,[K4],0,3,0,0,["R",APW(AKM)],VD,0,B,[K4],0,3,0,0,["R",APW(ADz)],Gc,0,B,[],1,3,0,0,0,Q$,0,B,[],3,3,0,0,0,JS,0,Gc,[Ck,G3,HR,Q$],1,3,0,0,0,YK,0,B,[],4,3,0,0,0,IP,0,Gc,[Ck],
1,3,0,0,0,GQ,0,B,[],0,3,0,AMh,0,I9,0,Kz,[],1,3,0,0,0,NG,0,B,[],3,3,0,0,0,Oy,0,B,[NG],3,3,0,0,0,Tn,0,B,[],3,3,0,0,0]);
$rt_metadata([Wt,0,I9,[Oy,Tn],0,3,0,0,0,Zw,0,B,[],3,3,0,0,0,P6,0,B,[],0,3,0,0,0,QS,0,B,[B$],0,3,0,0,["bU",APW(ADW)],Y1,0,B,[BG],1,3,0,0,0,IX,0,JS,[],1,0,0,0,0,Qc,0,IX,[],0,0,0,0,0,JE,0,B,[],1,3,0,0,0,Kv,0,B,[],0,3,0,0,0,Qo,0,B,[Fs,Hf],0,0,0,0,["gF",APW(AJM),"gg",APY(AMn),"gz",APX(AKB),"gD",APX(AHv),"gC",APY(AKT)],GL,0,B,[],3,3,0,0,["uA",APV(AI4),"rU",APV(AFy)],OP,0,B,[],3,3,0,0,0,O3,0,B,[],3,0,0,0,0,Yg,0,B,[GL,Fs,OP,O3],0,3,0,0,["rU",APV(AFo),"uA",APV(ACM),"gD",APX(AIF),"gz",APX(ACa),"gg",APY(ACq),"gF",APW(AC6),
"jw",APW(AMD)],Ov,0,B,[Ep],0,3,0,0,["cW",APW(ADo)],Qq,0,B,[Ep],0,3,0,0,["cW",APW(AFC)],Bc,0,B,[],3,3,0,0,0,Ot,0,B,[Bc],0,3,0,0,["m",APW(AFK)],Ou,0,B,[Jl],0,3,0,0,0,MW,0,B,[IM],0,3,0,0,0,MX,0,B,[Hf],0,3,0,0,["gC",APY(AHa)],MV,0,B,[Le],0,3,0,0,["cW",APW(Zf)],Mv,0,B,[Eh],0,3,0,0,["lK",APW(AL5)],WC,0,B,[],3,3,0,0,0,UR,0,B,[],0,0,0,0,0,Gj,0,B,[],0,3,0,0,0,NX,0,Gj,[],0,3,0,0,0,AAH,0,B,[],0,3,0,0,0,Ll,0,Gj,[],0,3,0,0,0,Sw,0,B,[BG],3,3,0,0,0,MB,0,B,[Sw],0,3,0,0,["HO",APW(AHt)],S8,0,B,[Bc],0,3,0,0,["m",APW(ALv)],U1,
0,IP,[],0,0,0,0,0,Xg,0,B,[],3,3,0,0,0,SJ,0,B,[],0,3,0,0,0,QV,0,B,[Ep],0,3,0,0,["cW",APW(AF9)],QU,0,B,[Ep],0,3,0,0,["cW",APW(AD0)],HO,0,B,[],3,3,0,0,0,Vh,0,B,[Fs,HO],0,3,0,0,0,T1,0,B,[HO,GL],0,3,0,0,["uA",APV(AI4),"rU",APV(AFy),"jw",APW(AHR)],OA,0,B,[],0,3,0,0,0,JQ,0,B,[],0,3,0,0,0,VA,0,B,[],0,3,0,0,0,Vn,0,B,[],0,3,0,0,0,EJ,0,B,[C3],0,0,0,0,0,ABq,0,B,[],0,3,0,0,0,X1,0,B,[C3],0,3,0,0,0,MQ,0,B,[Bc],0,3,0,0,0,MP,0,B,[Bc],0,3,0,0,["m",APW(AC$)],MO,0,B,[Bc],0,3,0,0,["m",APW(ACl)]]);
$rt_metadata([Te,0,B,[],0,0,0,0,0,MN,0,B,[Bh],0,3,0,0,["t",APV(ACk)],MU,0,B,[Bh],0,3,0,0,["t",APV(AFB)],MT,0,B,[Bh],0,3,0,0,["t",APV(ANy)],MS,0,B,[Bh],0,3,0,0,["t",APV(AHH)],MR,0,B,[Bh],0,3,0,0,["t",APV(AJN)],MM,0,B,[Bh],0,3,0,0,["t",APV(AM2)],AAy,0,B,[],3,3,0,0,0,W6,0,B,[],0,3,0,0,0,B4,0,B,[],0,3,0,0,["bp",APW(ANf)],Li,0,B,[],3,3,0,0,0,O7,0,B,[Bh],0,3,0,0,["t",APV(AGn)],O6,0,B,[Bh],0,3,0,0,["t",APV(AB8)],J5,0,B,[],3,3,0,0,0,W9,0,D8,[DF,Cu,J5],0,3,0,0,["kC",APW(AG9),"kB",APW(Bo),"cr",APV(AJq),"q_",APW(Bt),"lF",
APX(Qu),"ls",APW(E6),"mQ",APW(TV),"hi",APV(GF),"rO",APX(Xw),"d4",APW(DN)],VZ,0,B,[],3,3,0,0,0,Vw,0,B,[],0,3,0,0,0,ED,0,B,[],0,3,0,0,0,I6,0,ED,[],0,3,0,0,0,RF,0,ED,[],0,3,0,0,0,O0,0,ED,[],0,3,0,0,0,F$,0,B,[],3,3,0,0,0,Rl,0,B,[],3,3,0,0,0,OM,0,B,[],3,0,0,0,0,ZE,0,B,[BG],1,3,0,0,0,Jd,0,B,[],4,3,0,AGS,0,QE,0,B,[Li],0,3,0,0,0,AA2,0,B,[],0,3,0,0,0,SC,0,B,[],0,3,0,0,0,Qr,0,B,[],0,3,0,0,0,MC,0,B,[Bh],0,3,0,0,["t",APV(AM3)],F_,0,B,[Ck],0,3,0,0,0,JJ,0,B,[],0,3,0,0,0,C1,0,B,[],0,3,0,0,0,Wg,0,Bq,[],0,3,0,0,0,T$,0,B,[],
3,3,0,0,0,Zm,0,B,[T$],0,3,0,0,0,SM,0,B,[],3,3,0,0,0,JP,0,B,[SM],0,3,0,0,0,Ol,0,B,[],0,3,0,0,0,B_,0,B,[],0,3,0,0,0,JG,0,Jm,[],0,3,0,0,0,QA,0,B,[],0,3,0,0,0,ABo,0,B,[Ck],0,3,0,0,["bp",APW(ALc),"iO",APW(ADO)],Ug,0,B,[Gl],0,3,0,0,["tY",APX(AHK)],PM,0,B,[],0,3,0,0,["bp",APW(ADC)],JB,0,JE,[],1,3,0,0,0,Om,0,JB,[],0,3,0,0,0,SB,0,DE,[],0,3,0,0,0,Hc,0,B,[],0,3,0,0,0]);
$rt_metadata([HC,0,B,[],0,3,0,0,0,Xf,0,B,[],3,3,0,0,0,WA,0,B,[],0,3,0,0,0,Zn,0,B,[],3,3,0,0,0,ABy,0,B,[],0,3,0,0,0,Lb,0,B,[Gx,Cu],0,3,0,0,0,It,0,Lb,[],0,0,0,0,0,HQ,0,B4,[],0,3,0,0,0,CN,0,B,[],3,3,0,AFm,0,B6,0,Cl,[],12,3,0,Tf,0,HY,0,B,[],0,3,0,0,0,Hh,0,B,[],0,3,0,0,0,Zd,0,B,[],0,3,0,0,0,De,0,B,[],3,3,0,ACs,0,XY,0,B,[],0,3,0,0,["bp",APW(AK3)],OZ,0,B,[Ht],0,3,0,0,["R",APW(ACJ)],OX,0,B,[BO],0,3,0,0,["R",APW(AMt)],OY,0,B,[BO],0,3,0,0,["R",APW(AK5)],Hu,0,B,[],0,3,0,0,0,HT,0,B,[],4,3,0,0,0,Xp,0,B,[],0,3,0,0,0,CD,0,
B,[],3,3,0,AAS,0,YY,0,B,[],0,3,0,0,0,Yh,0,B,[],4,3,0,0,0,Sy,0,B,[],0,0,0,0,0,AAC,0,B,[],0,3,0,0,["bp",APW(AEj)],S3,0,B,[Bc],0,3,0,0,["m",APW(ADd)],Is,0,B,[C3],0,3,0,0,["eG",APV(ZT)],WI,0,B,[],0,3,0,0,0,S2,0,B,[],0,3,0,0,0,RE,0,B,[],0,3,0,0,0,Mg,0,B,[Bc],0,3,0,0,["m",APW(AE3)],Xe,0,B,[],0,3,0,0,0,T7,0,B,[Ck],0,3,0,0,["bp",APW(ACn),"k6",APV(AKp),"iO",APW(AJ2)],OD,0,B,[C3],0,3,0,0,0,M5,0,B,[Bc],0,3,0,0,0,Df,0,Bq,[],0,3,0,0,0,Se,0,FH,[],0,3,0,0,0,TW,0,B,[Bc],0,3,0,0,["m",APW(AIG)],Xt,0,B,[],3,3,0,0,0,ABn,0,B,[],
0,3,0,0,0,Lx,0,B,[Bc],0,3,0,0,["m",APW(ABU)],OL,0,B,[Bc],0,3,0,0,0,Q4,0,B,[Bc],0,3,0,0,["m",APW(AE2)],Q3,0,B,[Bc],0,3,0,0,["m",APW(AMk)],Et,0,B,[],3,3,0,0,0,Mr,0,B,[Et],0,0,0,0,["ca",APV(BM),"bL",APV(BP),"j6",APV(P0)],Yp,0,B,[BG],4,3,0,0,0,Rv,0,B,[EU],0,3,0,0,0,AAc,0,B,[Eh],0,3,0,0,0]);
$rt_metadata([Lw,0,B,[Bc],0,3,0,0,["m",APW(ALh)],L2,0,B,[DH],0,3,0,0,0,TX,0,B,[],0,3,0,0,0,Rz,0,Dv,[DF,Cu],0,3,0,0,0,TS,0,B,[],0,3,0,0,0,TL,0,B,[],0,3,0,0,0,SH,0,B,[],0,3,0,0,0,DR,0,Bq,[],0,3,0,0,0,MA,0,B,[],0,3,0,0,0,Sa,0,B,[Bc],0,3,0,0,["m",APW(AH4)],Sb,0,B,[Bc],0,3,0,0,["m",APW(AJD)],AAU,0,B,[],0,3,0,0,0,RQ,0,B,[],0,0,0,0,0,Xj,0,B,[],3,3,0,0,0,PA,0,B,[K1],3,3,0,0,0,Ms,0,B,[PA],3,3,0,0,0,Gd,0,B,[Ms],1,3,0,0,0,Q_,0,Gd,[],0,3,0,0,0,Pr,0,B,[],3,3,0,0,0,Sk,0,B,[],0,3,0,0,0,Qd,0,B,[Bc],0,3,0,0,0,GS,0,FK,[],0,0,
0,0,0,Gb,0,Bq,[],0,3,0,0,0,Qk,0,B,[Bc],0,3,0,0,["m",APW(AL2)],Ml,0,B,[Bc],0,3,0,0,["m",APW(AHA)],Ui,0,B,[Bc],0,3,0,0,["m",APW(AMM)],O4,0,B,[Bc],0,3,0,0,["m",APW(ADq)],Vv,0,B,[BO],0,3,0,0,["R",APW(AKY)],Vu,0,B,[BO],0,3,0,0,["R",APW(AEB)],UQ,0,B,[BO],0,3,0,0,["R",APW(AF3)],UP,0,B,[BO],0,3,0,0,["R",APW(AGK)],WS,0,B,[Bc],0,3,0,0,0,Vq,0,B,[B$],0,3,0,0,["bU",APW(AFS)],Jb,0,B,[],0,3,0,0,0,Xu,0,B,[],0,3,0,0,0,ABJ,0,B,[],0,3,0,0,0,Vf,0,B,[Bh],0,3,0,0,["t",APV(ACS)],Vg,0,B,[Bh],0,3,0,0,["t",APV(AGs)],EO,0,B,[],0,3,0,
0,0,VY,0,B,[Bc],0,3,0,0,["m",APW(AFW)],JD,0,EO,[],0,3,0,0,0,Jc,0,EO,[],0,3,0,0,0,Ue,0,B,[Bc],0,3,0,0,["m",APW(ACW)],OG,0,B,[],0,3,0,0,0,NO,0,B,[Bc],0,3,0,0,["m",APW(AIk)],Pp,0,B,[DH],0,3,0,0,["cW",APW(ANz)],VX,0,DR,[],0,3,0,0,0,PN,0,Bq,[],0,3,0,0,0,Uk,0,Bq,[],0,3,0,0,0,Oc,0,B,[Bc],0,3,0,0,["m",APW(AJA)]]);
$rt_metadata([ABD,0,B,[Bc],0,3,0,0,0,UM,0,B,[],0,3,0,0,0,Ph,0,B,[Bh],0,3,0,0,["t",APV(ANB)],TR,0,B,[Bh],0,3,0,0,0,O9,0,B,[Pr],0,3,0,0,0,Ew,0,B,[C3],0,3,0,0,["eG",APV(AKr),"q0",APV(ZI),"kL",APY(Qi),"jC",APW(AL_),"nU",APW(AHQ),"nA",APW(AMF),"pg",APX(AKz),"gg",APY(AGv),"gz",APX(ADG),"gD",APX(AIA),"gF",APW(AMm),"gC",APY(AKo)],Ie,0,Ew,[],0,3,0,0,0,Pm,0,Ie,[GL],0,3,0,0,["uA",APV(AI4),"rU",APV(AFy),"eG",APV(AMl),"pg",APX(AEP),"nA",APW(AJZ),"nU",APW(ALj),"jw",APW(ALz)],O$,0,B,[Bh],0,3,0,0,0,OF,0,Ew,[],0,3,0,0,["eG",
APV(ALg),"kL",APY(AF2),"jC",APW(AKE),"gg",APY(ALL),"gz",APX(ALi),"gD",APX(AI0),"gF",APW(AIH),"gC",APY(AFj),"q0",APV(AMY)],F1,0,B,[],0,3,0,0,0,NW,0,B,[Fr],3,3,0,0,["d4",APW(ABV),"kC",APW(AG9)],Ec,0,El,[NW],1,3,0,0,["d4",APW(ABV),"kC",APW(AG9)],N_,0,Ec,[],0,0,0,0,["kC",APW(AG9)],Lh,0,B,[Bc],0,3,0,0,["m",APW(AFd)],Ti,0,B,[Bc],0,3,0,0,["m",APW(AHI)],H8,0,B,[],0,3,0,0,["bp",APW(Zt)],KQ,0,H8,[],0,3,0,0,["bp",APW(ADp)],D9,0,B,[],0,3,0,0,["bp",APW(W$)],FA,0,D9,[],0,3,0,0,0,HH,0,D9,[],0,3,0,0,["bp",APW(AMq)],H1,0,D9,
[],0,3,0,0,["bp",APW(ACE)],Yf,0,Gd,[],0,3,0,0,0,QK,0,B,[Bh],0,3,0,0,["t",APV(AGA)],QL,0,B,[Bh],0,3,0,0,["t",APV(AD3)],QI,0,B,[Bh],0,3,0,0,["t",APV(ACT)],QJ,0,B,[Bh],0,3,0,0,["t",APV(AGw)],PR,0,B,[Bh],0,3,0,0,["t",APV(AKj)],PQ,0,B,[Bh],0,3,0,0,["t",APV(AI9)],PP,0,B,[Bh],0,3,0,0,["t",APV(ANp)],NZ,0,B,[Bh],0,3,0,0,["t",APV(AI5)],O8,0,B,[],3,3,0,0,0,OR,0,B,[Bh],0,3,0,0,["t",APV(ADQ)],Hw,0,B,[],0,3,0,0,0,Qj,0,B,[],3,3,0,0,0,WM,0,B,[Qj],0,3,0,0,0,TJ,0,Ew,[],0,3,0,0,0,Sp,0,B,[F$],0,3,0,0,["lD",APX(AMC)],UH,0,BT,[],
0,3,0,0,0,Dh,0,B,[],0,3,0,0,0,L9,0,B,[Bh],0,3,0,0,["t",APV(AG4)],L$,0,B,[Bh],0,3,0,0,["t",APV(ALT)],L8,0,B,[Bh],0,3,0,0,["t",APV(ABT)],UO,0,B,[Bh],0,3,0,0,["t",APV(AHO)],UN,0,B,[Bh],0,3,0,0,["t",APV(AKD)],NU,0,B,[EU],0,3,0,0,["ly",APV(AEF)],Re,0,B,[Bh],0,3,0,0,["t",APV(AGI)],Rf,0,B,[Bh],0,3,0,0,["t",APV(ALB)],VW,0,B,[Bh],0,3,0,0,["t",APV(AB7)],VR,0,B,[Bh],0,3,0,0,["t",APV(AGL)]]);
$rt_metadata([VS,0,B,[Bh],0,3,0,0,["t",APV(AMQ)],VT,0,B,[Bh],0,3,0,0,["t",APV(AH2)],VU,0,B,[Bh],0,3,0,0,["t",APV(AGc)],Lv,0,B,[EU],0,3,0,0,["ly",APV(ALO)],J0,0,B,[],3,3,0,0,0,Vm,0,B,[J0],0,3,0,0,0,Ng,0,B,[Bc],0,3,0,0,["m",APW(ACC)],Nf,0,B,[Bc],0,3,0,0,["m",APW(ACX)],RV,0,B,[F$],0,3,0,0,["lD",APX(ADt)],O5,0,B,[BO],0,3,0,0,["R",APW(AEO)],ABk,0,B,[Ck],0,3,0,0,["bp",APW(AI$)],LV,0,B,[Bc],0,3,0,0,["m",APW(AHG)],V8,0,B,[Bc],0,3,0,0,["m",APW(ANw)],HS,0,B,[BG],3,3,0,0,0,LE,0,B,[HS],0,3,0,0,["ql",APV(AGO)],Lm,0,B,[HS],
0,3,0,0,["ql",APV(ABX)],TY,0,B,[EU],0,3,0,0,["ly",APV(AM$)],SL,0,B,[J0],0,3,0,0,0,Vt,0,B,[BO],0,3,0,0,["R",APW(AGi)],Eu,0,B,[],0,0,0,0,0,RC,0,Eu,[Et],0,0,0,0,0,Ym,0,B,[BG],1,3,0,0,0,Xh,0,B,[Bc],0,0,0,0,0,P5,0,B,[Cu],4,3,0,0,0,Rj,0,B,[],3,3,0,0,0,Z3,0,B,[],0,3,0,0,0,Vp,0,Ea,[Ck],0,3,0,0,0,E2,0,B,[],0,0,0,0,0,GU,0,B,[],4,3,0,0,0,Tw,0,B,[],0,3,0,0,0,FU,0,B,[],3,3,0,0,0,R5,0,B,[FU],0,3,0,0,["h5",APY(AIp)],R6,0,B,[FU],0,3,0,0,["h5",APY(AGj)],G_,0,B,[Cu,Ck],0,3,0,0,0,IF,0,B,[],3,3,0,0,0,QG,0,B,[IF],0,3,0,0,0,NF,0,
B,[IF],3,3,0,0,0,Y3,0,B,[NF],0,3,0,0,0,Q8,0,B,[FU],0,3,0,0,["h5",APY(AI6)],Q7,0,B,[DH],0,3,0,0,["cW",APW(AMA)],Q6,0,B,[DH],0,3,0,0,["cW",APW(AJ$)],Q9,0,B,[FU],0,3,0,0,["h5",APY(AIC)],By,0,B,[],1,0,0,0,["b4",APY(GP),"b9",APZ(GZ),"gQ",APV(ADB),"I",APW(ALW),"bH",APW(ALV),"eS",APV(AMJ),"dS",APV(H5)],Td,0,B,[],3,3,0,0,0,T0,0,B,[Td],0,3,0,0,0,QW,0,Ea,[Ck],0,3,0,0,0,V9,0,B,[Bc],0,3,0,0,["m",APW(AI_)],V$,0,B,[Bc],0,3,0,0,["m",APW(AFu)],Pt,0,B,[Bc],0,3,0,0,["m",APW(AIU)],Cw,0,By,[],0,0,0,K3,["c",APY(AC1),"A",APW(ADl)]]);
$rt_metadata([FV,0,B,[],0,0,0,0,0,HK,0,BI,[],0,3,0,0,0,Sr,0,B,[],0,3,0,0,0,Vc,0,B,[BO],0,3,0,0,["R",APW(AJL)],Zq,0,B,[BG],3,3,0,0,0,Sv,0,B,[BO],0,3,0,0,["R",APW(AJs)],QC,0,Cw,[],0,0,0,0,["c",APY(ACw),"A",APW(AKJ)],VJ,0,Cw,[],0,0,0,0,["c",APY(AEb)],OI,0,Cw,[],0,0,0,0,["c",APY(ADx)],RD,0,Cw,[],0,0,0,0,["c",APY(ACD),"A",APW(AJB)],E0,0,Cw,[],0,0,0,0,["c",APY(AMa)],BV,0,By,[],1,0,0,0,["c",APY(ANe),"bM",APV(ALq),"A",APW(AGV)],AAP,0,BV,[],0,0,0,0,["bf",APX(AK2),"b4",APY(AFi),"b9",APZ(AD6),"A",APW(ACA)],BN,0,By,[],
0,0,0,0,["c",APY(AFZ),"I",APW(AJu),"bH",APW(AHy),"A",APW(AJ1),"dS",APV(AD1)],H0,0,BN,[],0,0,0,0,["c",APY(AJe),"A",APW(AKk)],Dp,0,H0,[],0,0,0,0,["c",APY(AEz),"I",APW(AJ8)],LC,0,Dp,[],0,0,0,0,["c",APY(AJp),"A",APW(AL1)],Ub,0,Dp,[],0,0,0,0,["c",APY(ADh),"A",APW(ALu)],P$,0,Dp,[],0,0,0,0,["c",APY(ADY),"A",APW(ANu)],RZ,0,Dp,[],0,0,0,0,["c",APY(ACb),"A",APW(AKy)],FL,0,BN,[],0,0,0,0,["c",APY(ACp),"b4",APY(AHT),"b9",APZ(AKN),"bH",APW(AHu),"eS",APV(AJx),"dS",APV(AMN)],FY,0,B,[],1,0,0,0,0,Q,0,FY,[],1,0,0,NI,["cX",APV(ADj),
"en",APV(ACQ),"h$",APV(ALn),"f$",APV(AMH)],XB,0,Q,[],0,0,0,0,["i",APW(CE),"cX",APV(CA),"en",APV(AFe),"h$",APV(ALM),"eg",APV(AII),"f$",APV(AFp)],Id,0,Bq,[],0,3,0,0,0,DD,0,By,[],1,0,0,0,["bH",APW(AKO),"A",APW(AL7),"dS",APV(AIa)],CG,0,DD,[],0,0,0,0,["c",APY(ACd)],EG,0,CG,[],0,0,0,0,["c",APY(AC4)],Cx,0,DD,[],0,0,0,0,["c",APY(ACo)],D7,0,CG,[],0,0,0,0,["c",APY(AHY),"I",APW(ANx)],Uo,0,CG,[],0,0,0,0,["c",APY(AM9),"b4",APY(AID)],U,0,B,[],1,0,0,0,0,CS,0,BI,[],0,3,0,0,0,LP,0,FY,[DF],0,0,0,0,["eg",APV(AIM)],Ne,0,By,[],
0,0,0,0,["c",APY(AHf),"A",APW(AJt)],U7,0,B,[DF,Cu],0,3,0,0,0,LI,0,BN,[],0,0,0,0,0,Pj,0,BN,[],0,0,0,0,["c",APY(ACZ),"I",APW(AJc),"A",APW(ADD),"bH",APW(ADi)],Db,0,BN,[],0,0,0,0,["c",APY(AE7),"i",APW(AFE),"bH",APW(ACV),"I",APW(ALd),"A",APW(AFg)],Ia,0,Db,[],0,0,0,0,["i",APW(AGW)],Xs,0,BV,[],0,0,0,0,["bf",APX(AHg)],DQ,0,BV,[],0,0,0,0,["bf",APX(Lj),"bH",APW(AJw)],NJ,0,BN,[],0,0,0,0,["I",APW(AHX),"c",APY(AB4),"bH",APW(ADu),"A",APW(ALP)],D0,0,BV,[],0,0,0,0,["bM",APV(AG3),"bf",APX(AF$),"b4",APY(AE5),"b9",APZ(AG$),"bH",
APW(ALI)],ABi,0,BV,[],0,0,0,0,["bf",APX(ABY)],Wv,0,BV,[],0,0,0,0,["bf",APX(ACi)],EL,0,BN,[],0,0,0,0,["I",APW(AML),"c",APY(AJd),"bH",APW(AHh),"A",APW(AJ9)],Vs,0,EL,[],0,0,0,0,0,Sc,0,EL,[],0,0,0,0,0,Wh,0,Cx,[],0,0,0,0,["c",APY(AEi)]]);
$rt_metadata([Oz,0,Cx,[],0,0,0,0,["c",APY(AIr)],Fd,0,Cx,[],0,0,0,0,["c",APY(ALb),"I",APW(AMf)],Oe,0,Fd,[],0,0,0,0,["c",APY(AG6),"I",APW(AIQ)],EK,0,Cx,[],0,0,0,0,["c",APY(ANr)],LZ,0,EK,[],0,0,0,0,["c",APY(AGx)],Qv,0,Cx,[],0,0,0,0,["c",APY(AMW)],Pu,0,Fd,[],0,0,0,0,["c",APY(ADF)],S5,0,EK,[],0,0,0,0,["c",APY(ACI)],Qw,0,DD,[],0,0,0,0,["c",APY(ANg),"b4",APY(ALo)],Nm,0,DD,[],0,0,0,0,["c",APY(AJy),"b4",APY(AB9)],Ej,0,B,[],1,0,0,0,0,Wi,0,CG,[],0,0,0,0,["c",APY(ACK)],Uh,0,D7,[],0,0,0,0,["c",APY(AIo)],N1,0,EG,[],0,0,0,
0,["c",APY(AKP)],Po,0,CG,[],0,0,0,0,["c",APY(AJr)],So,0,D7,[],0,0,0,0,["c",APY(ACU)],P_,0,EG,[],0,0,0,0,["c",APY(AK4)],Jf,0,By,[],4,0,0,0,["c",APY(AHw),"A",APW(AGJ)],X2,0,By,[],0,0,0,0,["c",APY(ADf),"A",APW(ADs)],Nh,0,By,[],0,0,0,0,["c",APY(AGY),"A",APW(ANn)],Va,0,By,[],4,0,0,0,["c",APY(AJU),"A",APW(AD9)],UL,0,By,[],0,0,0,0,["c",APY(AJb),"A",APW(ABW)],L_,0,By,[],0,0,0,0,["c",APY(ADZ),"A",APW(AFQ)],AA8,0,BN,[],0,0,0,0,["c",APY(AM1),"I",APW(ADw),"gQ",APV(AIX),"A",APW(ADv)],Xz,0,BN,[],4,0,0,0,["c",APY(AI7),"I",
APW(AKG),"gQ",APV(ABR),"A",APW(ANd)],AAY,0,By,[],4,0,0,0,["c",APY(AHj),"A",APW(AFM)],Zo,0,By,[],0,0,0,0,["c",APY(AJa),"A",APW(AFz)],Wr,0,By,[],0,0,0,0,["c",APY(AGz),"A",APW(AEa)],Gf,0,BN,[],0,0,0,0,["c",APY(ACP),"I",APW(AJ6),"A",APW(AKm)],AA4,0,Gf,[],0,0,0,0,["c",APY(AEg),"b4",APY(ALZ),"b9",APZ(ACy),"bH",APW(AIi)],YD,0,Gf,[],0,0,0,0,["c",APY(AHN)],Nd,0,FB,[G3],0,3,0,0,["kP",APZ(AFq),"jT",APY(ADk),"g0",APW(ADM),"lk",APX(ALp)],Qy,0,BV,[],0,0,0,0,["bf",APX(AEx),"b4",APY(ADa),"b9",APZ(AFP),"bH",APW(AGk)],Wq,0,BV,
[],0,0,0,0,["bf",APX(AHV)],L4,0,BV,[],0,0,0,0,["bf",APX(AKS)],Ge,0,B,[],4,0,0,AKw,0,Ls,0,BV,[],0,0,0,0,["bf",APX(AKX)],JM,0,BN,[],0,0,0,0,["I",APW(AJo),"c",APY(AD$),"b4",APY(AGh),"b9",APZ(AED),"bH",APW(ACv),"A",APW(ALw)],J1,0,BN,[],0,0,0,0,["I",APW(ADL),"c",APY(ACc),"b4",APY(AJH),"b9",APZ(AKQ),"bH",APW(AEy),"A",APW(AJP)],Dw,0,BV,[],0,0,0,0,["bf",APX(AKn),"b4",APY(AIJ),"b9",APZ(ADK),"bH",APW(AKc)],Tq,0,Ej,[],0,0,0,0,["gH",APW(ADV),"rF",APX(AKi)],Tr,0,Ej,[],0,0,0,0,["gH",APW(AK6),"rF",APX(AMB)],Z_,0,B,[],0,0,
0,0,0,WP,0,B,[],0,0,0,0,0,JI,0,U,[],0,0,0,0,["x",APV(YJ)],IV,0,U,[],0,0,0,0,["x",APV(Zg)],Z5,0,U,[],0,0,0,0,["x",APV(AKI)],AAz,0,U,[],0,0,0,0,["x",APV(ALy)],AAB,0,U,[],0,0,0,0,["x",APV(AE8)],JC,0,U,[],0,0,0,0,["x",APV(XD)]]);
$rt_metadata([Kc,0,JC,[],0,0,0,0,["x",APV(Yj)],ABG,0,U,[],0,0,0,0,["x",APV(AGg)],Lf,0,Kc,[],0,0,0,0,["x",APV(Wo)],YU,0,Lf,[],0,0,0,0,["x",APV(AIb)],Zb,0,U,[],0,0,0,0,["x",APV(AEt)],XW,0,U,[],0,0,0,0,["x",APV(AH$)],XM,0,U,[],0,0,0,0,["x",APV(AMG)],AAF,0,U,[],0,0,0,0,["x",APV(AIT)],ABQ,0,U,[],0,0,0,0,["x",APV(AB6)],AAa,0,U,[],0,0,0,0,["x",APV(AGE)],ZX,0,U,[],0,0,0,0,["x",APV(AKs)],AAR,0,U,[],0,0,0,0,["x",APV(AEr)],W4,0,U,[],0,0,0,0,["x",APV(AEN)],WK,0,U,[],0,0,0,0,["x",APV(AMz)],AAg,0,U,[],0,0,0,0,["x",APV(ABZ)],AAq,
0,U,[],0,0,0,0,["x",APV(AHm)],Yd,0,U,[],0,0,0,0,["x",APV(AEV)],Ze,0,U,[],0,0,0,0,["x",APV(AFT)],ABs,0,U,[],0,0,0,0,["x",APV(AHo)],AAn,0,U,[],0,0,0,0,["x",APV(ALS)],YA,0,U,[],0,0,0,0,["x",APV(AJT)],Yc,0,U,[],0,0,0,0,["x",APV(AIK)],ABM,0,U,[],0,0,0,0,["x",APV(AKC)],Ip,0,U,[],0,0,0,0,["x",APV(Zc)],AAV,0,Ip,[],0,0,0,0,["x",APV(AIx)],YZ,0,JI,[],0,0,0,0,["x",APV(AC9)],X$,0,IV,[],0,0,0,0,["x",APV(AF6)],XR,0,U,[],0,0,0,0,["x",APV(AHB)],X6,0,U,[],0,0,0,0,["x",APV(AMo)],YO,0,U,[],0,0,0,0,["x",APV(AFt)],YV,0,U,[],0,0,
0,0,["x",APV(AB0)],XS,0,B,[],4,0,0,0,0,Xq,0,B,[],4,3,0,0,0,Mb,0,B,[],0,3,0,0,0,AAj,0,B,[],0,3,0,0,0,Yx,0,B,[],4,3,0,0,0,XA,0,B,[DH],0,3,0,0,0,On,0,B,[],1,3,0,0,0,Tl,0,B,[DH],0,0,0,0,["cW",APW(AFa)],Un,0,Q,[],0,0,0,0,["i",APW(AFc)],Ul,0,Q,[],0,0,0,0,["i",APW(ACm)],Nr,0,Q,[],0,0,0,0,["i",APW(AHs),"eg",APV(AFX)],Ny,0,Q,[],0,0,0,0,["i",APW(AKq)],Nw,0,Q,[],0,0,0,0,["i",APW(AKW)],Nx,0,Q,[],0,0,0,0,["i",APW(AHU)],NB,0,Q,[],0,0,0,0,["i",APW(AER)],NC,0,Q,[],0,0,0,0,["i",APW(ABS)],Nz,0,Q,[],0,0,0,0,["i",APW(AF1)],NA,
0,Q,[],0,0,0,0,["i",APW(AHW)],ND,0,Q,[],0,0,0,0,["i",APW(AL3)]]);
$rt_metadata([NE,0,Q,[],0,0,0,0,["i",APW(AEm)],Nq,0,Q,[],0,0,0,0,["i",APW(ANA)],N4,0,Q,[],0,0,0,0,["i",APW(AF5)],No,0,Q,[],0,0,0,0,["i",APW(AEl)],Np,0,Q,[],0,0,0,0,["i",APW(AFI)],Nu,0,Q,[],0,0,0,0,["i",APW(AG0)],Nn,0,Q,[],0,0,0,0,["i",APW(ALF)],Ns,0,Q,[],0,0,0,0,["i",APW(ADn)],Nt,0,Q,[],0,0,0,0,["i",APW(AJO)],Fk,0,Cl,[],12,0,0,Rs,0,Wd,0,B,[Bc],0,3,0,0,0,KC,0,B,[],3,3,0,0,0,Ro,0,B,[KC],4,3,0,0,0,ZY,0,B,[],0,3,0,0,0,W5,0,B,[],0,3,0,0,0,R4,0,B,[],32,0,0,AOX,0,Rx,0,B,[Bc],0,3,0,0,["m",APW(AKe)],VM,0,B,[Bc],0,3,
0,0,0,Vb,0,B,[Eh],0,3,0,0,0,EA,0,B,[],0,3,0,0,0,I4,0,Ec,[],1,0,0,0,["d4",APW(ABV),"kC",APW(AG9)],TC,0,I4,[],0,0,0,0,["d4",APW(ABV),"kC",APW(AG9)],Kb,0,Dv,[],1,0,0,0,0,TA,0,Kb,[],0,0,0,0,0,KF,0,D8,[J5],1,0,0,0,["d4",APW(ABV),"hi",APV(AEv),"ls",APW(AIh),"kC",APW(AHc)],TB,0,KF,[],0,0,0,0,["d4",APW(ABV),"kB",APW(AIm),"cr",APV(AHx),"bS",APV(AEX),"dz",APV(ACL)],Ty,0,B,[Et],0,0,0,0,["ca",APV(ACu),"bL",APV(AJz),"j6",APV(AKR)],Ok,0,B,[Et],3,3,0,0,0,Tz,0,B,[Ok],0,0,0,0,0,Wc,0,B,[Gl],0,3,0,0,0,LU,0,FL,[],0,0,0,0,["b4",
APY(AFx),"b9",APZ(ANq),"eS",APV(AD8)],K9,0,Bq,[],0,3,0,0,0,Ql,0,B,[Bc],0,3,0,0,["m",APW(AD5)],Gh,0,B,[BG],1,3,0,0,0,XP,0,Gh,[],1,3,0,0,0,AAf,0,Gh,[],1,3,0,0,0,Xo,0,B,[],3,3,0,0,0,PO,0,B,[BO],0,3,0,0,["R",APW(AB5)],Q1,0,B,[Bc],0,3,0,0,["m",APW(AIc)],Q0,0,B,[Bc],0,3,0,0,["m",APW(AJ3)],MZ,0,B,[Bc],0,3,0,0,0,M1,0,B,[Bc],0,3,0,0,0,Sj,0,B,[Bc],0,3,0,0,0,T3,0,B,[Bc],0,3,0,0,0,S1,0,Ec,[],0,0,0,0,["d4",APW(ABV),"kC",APW(AG9)],Oa,0,El,[],0,0,0,0,["d4",APW(ABV),"kC",APW(AG9)],Tj,0,B,[KC],0,0,0,0,0,Vj,0,B,[BO],0,3,0,0,
["R",APW(AEI)],Nk,0,B,[Bc],0,3,0,0,["m",APW(AEq)],LH,0,B,[],0,3,0,0,0]);
$rt_metadata([P7,0,B,[],0,3,0,0,0,L5,0,B,[Bh],0,3,0,0,["t",APV(AGa)],MI,0,B,[Bc],0,3,0,0,["m",APW(AIw)],T2,0,B,[Bc],0,3,0,0,["m",APW(AFV)],B8,0,Cl,[],12,3,0,X4,0,Dm,0,B,[],3,3,0,AIq,0,CC,0,B,[],3,3,0,AAD,0,Ca,0,Cl,[],12,3,0,ZN,0,C$,0,B,[],3,3,0,ACG,0,M2,0,B,[Bh],0,3,0,0,["t",APV(ACt)],SP,0,Eu,[Et],0,0,0,0,0,P9,0,Eu,[Et],0,0,0,0,0,RI,0,Q,[],0,0,0,0,["i",APW(AL$)],LG,0,Q,[],0,0,0,0,["i",APW(AC7)],QO,0,Q,[],0,0,0,0,["i",APW(ACR)],QN,0,Q,[],0,0,0,0,["i",APW(AFs)],UW,0,Q,[],0,0,0,0,["i",APW(AGQ)],NT,0,Q,[],0,0,0,
0,["i",APW(AMc)],M$,0,Q,[],0,0,0,0,["i",APW(AJj)],PK,0,Q,[],0,0,0,0,["i",APW(AKv)],Lz,0,Q,[],0,0,0,0,["i",APW(ANb)],LF,0,Q,[],0,0,0,0,["i",APW(AEC)],MH,0,Q,[],0,0,0,0,["i",APW(AMj)],Oi,0,Q,[],0,0,0,0,["i",APW(AH7)],Op,0,Q,[],0,0,0,0,["i",APW(AJ4)],R8,0,Q,[],0,0,0,0,["i",APW(AL4)],Rp,0,Q,[],0,0,0,0,["i",APW(AMR)],LM,0,Q,[],0,0,0,0,["i",APW(AEs)],KZ,0,Q,[],0,0,0,0,["i",APW(AJm)],QF,0,KZ,[],0,0,0,0,["i",APW(ALe)],SV,0,B,[],3,3,0,AOu,0,Rb,0,B,[Bc],0,3,0,0,["m",APW(AFL)],Vd,0,B,[BO],0,3,0,0,["R",APW(AFR)],Ve,0,B,
[BO],0,3,0,0,["R",APW(ADm)],N$,0,B,[Bh],0,3,0,0,0,YG,0,B,[BG],1,3,0,0,0,SR,0,B,[BO],0,3,0,0,["R",APW(AMT)],SN,0,B,[BO],0,3,0,0,["R",APW(AHE)],LB,0,B,[Bh],0,3,0,0,["t",APV(AGf)],VN,0,B,[],3,3,0,AO9,0,Qp,0,B,[HS],0,3,0,0,["ql",APV(AK1)],AAd,0,B,[],3,3,0,0,0,Y2,0,B,[F$],0,3,0,0,0,TZ,0,B,[],0,3,0,0,0,ML,0,B,[Eh],0,3,0,0,["lK",APW(ACN)],Xc,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.Ld=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","codeEdit","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","null",
"false","true","Either src or dest is null","no such element with id = codeEdit","FATAL: WebGL is not enabled in the browser","fileList","Illegal argument javaObject instanceof ","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  outColor = texture(sDiffuse, textureUV);\n}",
"#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}",
"#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uTextPow;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main("
+") {\n            // D2D and JsCanvas(alpha=true) comparison:\n            //    - rgb is different\n            //    - alpha is identical\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = pow(t, uTextPow.x);\n            outColor = mix(uBgColor, uColor, text);\n          }","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","italic","normal","oblique","UTF-8","onPaste: item.type = ",", item.kind = ","pixel shader error: ",
"vertex shader error: ","----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBgColor;\nuniform sampler2D sDiffuse;\nuniform vec2 uTextPow;\nin vec2 textureUV;\nvoid main() {\n  vec3 textRGB = texture(sDiffuse, textureUV).rgb;\n  vec3 textRGBp = vec3(\n    pow(textRGB.x, uTextPow.x),\n    pow(textRGB.y, uTextPow.x),\n    pow(textRGB.z, uTextPow.x));\n  vec3 mixColor = mix(uBgColor.rgb, uColor.rgb, textRGBp);\n  // if (dot(textRGB, textRGB) == 0.0) outColor = uBgColor; else\n  outColo"
+"r = vec4(textRGB * 0.0 + mixColor * 1.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uBaseline;\nuniform vec4 uScaleHExp;\nin vec2 outScreenPos;\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  float sX = uScaleHExp.x, sY = uScaleHExp.y;\n  float H = uSc"
+"aleHExp.z;\n  float E = uScaleHExp.w;\n  float arg = (pt.x - uBaseline.x) * sX;\n  float sinA = sin(arg);\n  float vDist = abs(sinA * sY - uBaseline.y + pt.y);\n  float k = sqrt(1. + (1. - sinA * sinA) * sX * sX * sY * sY * 0.5);\n  float v = vDist / (H * k);\n  float alpha = pow(1. - clamp(v + .5, 0.0, 1.0), E);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","POS2","vPos","TEX2","vTex","BYTE","FLOAT","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ",
"Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#484A4A","#294436","#385570","#283541","request in progress ","fetch model ","respText1","clicked ","ns-resize","ew-resize","...","Usages of ","Consolas","  ","Set editor font to: ",", ascent+descent = ",", lineHeight = ",", caretHeight = ","topBase(font, lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","text","{","{}","(",
"()","[","[]","<","<>","\"","\"\"","\'","\'\'","java","JavaProxy.parseViewport","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","cpp","activity","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","Development >","trying to display with unknown screen size and dpr",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js","js",".activity","mermaid","/Full file parsed in ",
"ms","ScopeUtils.resolveAll","asyncFullParseFile","asyncParseFile","asyncParseFirstLines","/Model::parseFullFile","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","/Model::iterativeParsing","asyncIterativeParsing","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","\\n",", ","The last char in dst ","Segoe UI","#BBBBBB","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","defaultText","keyword",
"#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","#A9B7C6","#344134","#40332B","#323232","/","nwse-resize","nesw-resize","toolbar size is unknown","/Viewport parsed in ","Illegal language: ","Expected "," ints to write, but "," written","/Model::onFileIterativeParsed","Int","Iter","VP","Resolve","Rep","parser >",
"open ...","font pow >","No definition or usages","/First lines parsed in ","/File structure parsed in ","/Resolved in ","readClipboardText error: ","navigator.clipboard is undefined","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","#606366","#2B2B2B","#A4A3A3","#616161","#303C47","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","Verdana","Current Version: ","Last Parsed Version: ",
"Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B",
"IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue",
"KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A",
"SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths",
"CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials",
"Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","DEF","DECL"," ints to read, but "," read","Unknown scope type: ","writeClipboardText error: ","Unexpected type: ","Unexpected ref node type: ","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","#3C3F41","#4B6EAF","#787878","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4",
"#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808"]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;B.prototype.toString=function(){return $rt_ustr(ADH(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var ATE=Long_add;var Jg=Long_sub;var AIE=Long_mul;var ATF=Long_div;var ATG=Long_rem;var ATH=Long_or;var Wj=Long_and;var ATI=Long_xor;var ATJ=Long_shl;var ATK=Long_shr;var APn=Long_shru;var ATL=Long_compare;var AES=Long_eq;var ATM=Long_ne;var AN8=Long_lt;var ATN=Long_le;var ATO=Long_gt;var AN5=Long_ge;var ATP=Long_not;var AOP=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AHL);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=Pa.prototype;c.f=c.R;c=Pc.prototype;c.f=c.R;c=Tu.prototype;c.f=c.R;c=WW.prototype;c.createEntityReference=c.AG;c.getElementById=c.Ek;c.createTextNode=c.D0;c.hasChildNodes=c.Ce;c.querySelectorAll=c.Aj;c.removeChild=c.F5;c.cloneNode=c.yx;c.createComment=c.H0;c.insertBefore=c.A_;c.getElementsByTagNameNS=c.Gr;c.hasAttributes=c.Dv;c.normalize=c.Ia;c.hasChildNodesJS=c.HX;c.getElementsByTagName=c.G_;c.appendChild=c.y0;c.createAttributeNS=c.EN;c.dispatchEvent=c.Hz;c.replaceChild=c.zt;c.createElementNS
=c.Bx;c.createCDATASection=c.Ge;c.querySelector=c.Dt;c.createElement=c.Fm;c.isSupported=c.Gf;c.importNode=c.Bu;c.removeEventListener=c.Bl;c.createAttribute=c.HC;c.createDocumentFragment=c.xP;c.createProcessingInstruction=c.Az;c.addEventListener=c.Fj;Object.defineProperty(c,"nodeName",{get:c.yZ});Object.defineProperty(c,"documentElement",{get:c.CZ});Object.defineProperty(c,"childNodes",{get:c.FU});Object.defineProperty(c,"prefix",{get:c.BE,set:c.Io});Object.defineProperty(c,"implementation",{get:c.GF});Object.defineProperty(c,
"textContent",{get:c.H$,set:c.DY});Object.defineProperty(c,"parentNode",{get:c.Eh});Object.defineProperty(c,"nextSibling",{get:c.CM});Object.defineProperty(c,"nodeType",{get:c.FH});Object.defineProperty(c,"doctype",{get:c.CC});Object.defineProperty(c,"localName",{get:c.G6});Object.defineProperty(c,"nodeValue",{get:c.Ch,set:c.HN});Object.defineProperty(c,"firstChild",{get:c.Hj});Object.defineProperty(c,"lastChild",{get:c.Fv});Object.defineProperty(c,"previousSibling",{get:c.yE});Object.defineProperty(c,"namespaceURI",
{get:c.z4});Object.defineProperty(c,"attributes",{get:c.BL});Object.defineProperty(c,"ownerDocument",{get:c.Ae});c=XH.prototype;c.removeEventListener=c.Al;c.dispatchEvent=c.Bi;c.addEventListener=c.EH;c=Mm.prototype;c.f=c.R;c=Mn.prototype;c.f=c.R;c=YX.prototype;c.get=c.Ha;Object.defineProperty(c,"length",{get:c.Gw});c=MJ.prototype;c.f=c.R;c=PY.prototype;c.f=c.R;c=PX.prototype;c.f=c.R;c=PZ.prototype;c.f=c.R;c=TG.prototype;c.onAnimationFrame=c.Dx;c=TF.prototype;c.f=c.Hw;c=TD.prototype;c.handleEvent=c.bU;c=Rh.prototype;c.f
=c.R;c=Ux.prototype;c.handleEvent=c.bU;c=Uy.prototype;c.handleEvent=c.bU;c=Uz.prototype;c.handleEvent=c.bU;c=UA.prototype;c.handleEvent=c.bU;c=UB.prototype;c.handleEvent=c.bU;c=UC.prototype;c.handleEvent=c.bU;c=UD.prototype;c.handleEvent=c.bU;c=UE.prototype;c.handleEvent=c.bU;c=UF.prototype;c.handleEvent=c.bU;c=UG.prototype;c.handleEvent=c.bU;c=V0.prototype;c.handleEvent=c.bU;c=V1.prototype;c.handleEvent=c.bU;c=V2.prototype;c.handleEvent=c.bU;c=V3.prototype;c.handleEvent=c.bU;c=SF.prototype;c.handleEvent=c.bU;c
=VC.prototype;c.f=c.R;c=VD.prototype;c.f=c.R;c=QS.prototype;c.handleEvent=c.bU;c=MB.prototype;c.accept=c.HO;c=OZ.prototype;c.f=c.R;c=OX.prototype;c.f=c.R;c=OY.prototype;c.f=c.R;c=Vv.prototype;c.f=c.R;c=Vu.prototype;c.f=c.R;c=UQ.prototype;c.f=c.R;c=UP.prototype;c.f=c.R;c=Vq.prototype;c.handleEvent=c.bU;c=O5.prototype;c.f=c.R;c=LE.prototype;c.onTimer=c.ql;c=Lm.prototype;c.onTimer=c.ql;c=Vt.prototype;c.f=c.R;c=Vc.prototype;c.f=c.R;c=Sv.prototype;c.f=c.R;c=PO.prototype;c.f=c.R;c=Vj.prototype;c.f=c.R;c=Vd.prototype;c.f
=c.R;c=Ve.prototype;c.f=c.R;c=SR.prototype;c.f=c.R;c=SN.prototype;c.f=c.R;c=Qp.prototype;c.onTimer=c.ql;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);