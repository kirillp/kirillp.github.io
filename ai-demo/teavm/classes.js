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
function $rt_cls(cls){return Zx(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return GA(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b4.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AKs(t);}
function $rt_throwableCause(t){return AKx(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(APB());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return APC(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(APD());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BF=$rt_compare;var APE=$rt_nullCheck;var E=$rt_cls;var O=$rt_createArray;var HH=$rt_isInstance;var APF=$rt_nativeThread;var APG=$rt_suspending;var APH=$rt_resuming;var API=$rt_invalidPointer;var C=$rt_s;var Bf=$rt_eraseClinit;var V=$rt_imul;var ET=$rt_wrapException;var APJ=$rt_checkBounds;var APK=$rt_checkUpperBound;var APL=$rt_checkLowerBound;var APM=$rt_wrapFunction0;var APN=$rt_wrapFunction1;var APO=$rt_wrapFunction2;var APP=$rt_wrapFunction3;var APQ=$rt_wrapFunction4;var F=$rt_classWithoutFields;var G
=$rt_createArrayFromData;var AOg=$rt_createCharArrayFromData;var APR=$rt_createByteArrayFromData;var APS=$rt_createShortArrayFromData;var Fw=$rt_createIntArrayFromData;var APT=$rt_createBooleanArrayFromData;var APU=$rt_createFloatArrayFromData;var APV=$rt_createDoubleArrayFromData;var ADF=$rt_createLongArrayFromData;var APz=$rt_createBooleanArray;var Eb=$rt_createByteArray;var APW=$rt_createShortArray;var B1=$rt_createCharArray;var Bu=$rt_createIntArray;var APX=$rt_createLongArray;var ABX=$rt_createFloatArray;var APY
=$rt_createDoubleArray;var BF=$rt_compare;var APZ=$rt_castToClass;var AP0=$rt_castToInterface;var AP1=Long_toNumber;var BH=Long_fromInt;var AP2=Long_fromNumber;var Dh=Long_create;var AAl=Long_ZERO;var AP3=Long_hi;var XX=Long_lo;
function B(){this.$id$=0;}
function AP4(){var a=new B();TM(a);return a;}
function TM(a){}
function Bt(a){return Zx(a.constructor);}
function AHP(a,b){return a!==b?0:1;}
function ADt(a){var b,c,d,e,f,g,h,i,j;b=H7(a);if(!b)c=C(0);else{d=(((32-Mz(b)|0)+4|0)-1|0)/4|0;e=B1(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Gs((b>>>g|0)&15,16);g=g-4|0;h=i;}c=GA(e);}j=new R;T(j);K(K(j,C(1)),c);return S(j);}
function H7(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AHd(a){var b,c,d;if(!HH(a,DE)&&a.constructor.$meta.item===null){b=new TA;W(b);J(b);}b=AB6(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var Fd=F();
var AP5=null;var AP6=null;var AP7=null;var AP8=null;var AP9=null;function AHx(b){var c,d,e,f,g,h,i,j;Yj();AAB();WH();ABD();Y3();Z2();X0();Zc();AAD();WB();Yk();AA3();AAW();WD();ZU();ZK();ZM();YM();X5();W4();ABp();Ym();Z7();Zj();c=(WU()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Xx(C(2),C(3));else{c=new O3;d=new L4;e="teavm/worker.js";f=new $rt_globals.Array();g=0;while(g<3){h=new $rt_globals.Worker(e);i=new ME;i.oR=h;i.oS=f;i.oT=3;i.oU=
c;i.oN=d;j=Bi(i,"f");h.onmessage=j;g=g+1|0;}}}
function Ul(b){R$(AP5.cw,b);Ta(AP6);}
function Yj(){AP7=null;AP8=FS();AP9=FS();}
var LZ=F(0);
var Lv=F(0);
function Uj(){var a=this;B.call(a);a.jx=null;a.fo=null;}
function Zx(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Uj;c.fo=b;d=c;b.classObject=d;}return c;}
function G2(a){return a.fo.$meta.primitive?1:0;}
function Hi(a){return Zx(a.fo.$meta.item);}
var XD=F();
function Bi(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Es(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Xj=F();
function AB6(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ZB(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ZB(d[e],c))return 1;e=e+1|0;}return 0;}
function FO(){var a=this;B.call(a);a.k4=null;a.p0=null;a.kX=0;a.lI=0;}
function AP$(){var a=new FO();W(a);return a;}
function AP_(a){var b=new FO();Br(b,a);return b;}
function W(a){a.kX=1;a.lI=1;}
function Br(a,b){a.kX=1;a.lI=1;a.k4=b;}
function AE9(a){return a;}
function AKs(a){return a.k4;}
function AKx(a){var b;b=a.p0;if(b===a)b=null;return b;}
var DD=F(FO);
function AQa(){var a=new DD();ZX(a);return a;}
function ZX(a){W(a);}
var Bo=F(DD);
function APC(a){var b=new Bo();AL9(b,a);return b;}
function AL9(a,b){Br(a,b);}
var YP=F(Bo);
var Cu=F(0);
var Cl=F(0);
var HT=F(0);
function Bw(){var a=this;B.call(a);a.b4=null;a.hf=0;}
var AQb=null;var AQc=null;var AQd=null;function FP(){FP=Bf(Bw);ALO();}
function AFT(){var a=new Bw();Wx(a);return a;}
function GA(a){var b=new Bw();Ii(b,a);return b;}
function DL(a,b,c){var d=new Bw();Lf(d,a,b,c);return d;}
function Wx(a){FP();a.b4=AQb;}
function Ii(a,b){FP();Lf(a,b,0,b.data.length);}
function Lf(a,b,c,d){var e;FP();e=B1(d);a.b4=e;C7(b,c,e,0,d);}
function K$(b){var c;FP();c=AFT();c.b4=b;return c;}
function I(a,b){var c,d;if(b>=0){c=a.b4.data;if(b<c.length)return c[b];}d=new Go;W(d);J(d);}
function H(a){return a.b4.data.length;}
function DT(a){return a.b4.data.length?0:1;}
function OI(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=H(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){C7(a.b4,b,d,e,c);return;}}g=new BT;W(g);J(g);}
function Ss(a,b,c){var d,e,f;if((c+H(b)|0)>H(a))return 0;d=0;while(d<H(b)){e=I(b,d);f=c+1|0;if(e!=I(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Jq(a,b){if(a===b)return 1;return Ss(a,b,0);}
function Dy(a,b){var c,d,e,f;if(a===b)return 1;if(H(b)>H(a))return 0;c=0;d=H(a)-H(b)|0;while(d<H(a)){e=I(a,d);f=c+1|0;if(e!=I(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Hs(a,b,c){var d,e,f,g,h;d=Ba(0,c);if(b<65536){e=b&65535;while(true){f=a.b4.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=JA(b);h=KG(b);while(true){f=a.b4.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function GF(a,b,c){var d,e,f,g,h;d=Be(c,H(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b4.data[d]==e)break;d=d+(-1)|0;}return d;}f=JA(b);g=KG(b);while(true){if(d<1)return (-1);h=a.b4.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Os(a,b,c){var d,e,f;d=Ba(0,c);e=H(a)-H(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=H(b))break a;if(I(a,d+f|0)!=I(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AI9(a,b){return Os(a,b,0);}
function OE(a,b,c){var d,e;d=Be(c,H(a)-H(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=H(b))break a;if(I(a,d+e|0)!=I(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Yw(a,b){return OE(a,b,H(a));}
function B9(a,b,c){var d,e;d=BF(b,c);if(d>0){e=new BT;W(e);J(e);}if(!d){FP();return AQc;}if(!b&&c==H(a))return a;return DL(a.b4,b,c-b|0);}
function DS(a,b){return B9(a,b,H(a));}
function OR(a,b,c){return B9(a,b,c);}
function GX(a,b){var c,d,e,f,g,h;if(DT(b))return a;if(DT(a))return b;c=B1(H(a)+H(b)|0);d=c.data;e=0;f=0;while(f<H(a)){g=e+1|0;d[e]=I(a,f);f=f+1|0;e=g;}g=0;while(g<H(b)){h=e+1|0;d[e]=I(b,g);g=g+1|0;e=h;}return K$(c);}
function S_(a,b,c){var d,e,f,g;d=new R;T(d);e=H(a)-H(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=H(b)){K(d,c);f=f+(H(b)-1|0)|0;break a;}if(I(a,f+g|0)!=I(b,g))break;g=g+1|0;}BY(d,I(a,f));}f=f+1|0;}K(d,DS(a,f));return S(d);}
function QA(a){var b,c;b=0;c=H(a)-1|0;a:{while(b<=c){if(I(a,b)>32)break a;b=b+1|0;}}while(b<=c&&I(a,c)<=32){c=c+(-1)|0;}return B9(a,b,c+1|0);}
function ES(a){var b,c,d,e,f;b=a.b4.data;c=B1(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function DX(b){var c;FP();c=new R;T(c);return S(Bk(c,b));}
function B0(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bw))return 0;c=b;if(H(c)!=H(a))return 0;d=0;while(d<H(c)){if(I(a,d)!=I(c,d))return 0;d=d+1|0;}return 1;}
function JZ(a){var b,c,d,e;a:{if(!a.hf){b=a.b4.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hf=(31*a.hf|0)+e|0;d=d+1|0;}}}return a.hf;}
function KQ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new FV;Br(b,C(4));J(b);}AQe=1;d=new PU;d.jj=O(Cw,10);d.fH=(-1);d.eg=(-1);d.bh=(-1);e=new FY;e.eb=1;e.bt=b;e.R=B1(H(b)+2|0);C7(ES(b),0,e.R,0,H(b));f=e.R.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.qM=g;e.fr=0;EF(e);EF(e);d.g=e;d.db=0;d.kp=VI(d,(-1),0,null);if(!CW(d.g)){b=new HM;h=d.g;Io(b,C(5),h.bt,h.cO);J(b);}if(d.m7)d.kp.dV();b=Bz();h=new Rd;h.hO=(-1);h.jJ=(-1);h.vs=d;h.s6=d.kp;h.h3=a;h.hO=0;g=H(a);h.jJ=g;e=new Tc;i=h.hO;j=d.fH;k=d.eg+1|0;l=d.bh+1|0;e.gX
=(-1);m=j+1|0;e.n8=m;e.dk=Bu(m*2|0);f=Bu(l);e.iF=f;GI(f,(-1));if(k>0)e.ke=Bu(k);GI(e.dk,(-1));Vx(e,a,i,g);h.ce=e;e.eQ=1;n=0;m=0;if(!H(a)){f=O(Bw,1);f.data[0]=C(5);}else{while(true){l=H(h.h3);if(!WM(h))l=h.jJ;e=h.ce;if(e.dQ>=0&&Yd(e)==1){e=h.ce;e.dQ=H5(e);if(H5(h.ce)==Z1(h.ce)){e=h.ce;e.dQ=e.dQ+1|0;}g=h.ce.dQ;g=g<=l&&LD(h,g)?1:0;}else g=LD(h,h.hO);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Bv(b,OR(a,m,ABh(h)));m=X3(h);n=g;}a:{Bv(b,OR(a,m,H(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(H(Bp(b,g)))break a;E7(b,
g);}}if(g<0)g=0;f=GY(b,O(Bw,g));}return f;}
function AFh(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Be(H(a),H(b));e=0;while(true){if(e>=d){c=H(a)-H(b)|0;break a;}c=I(a,e)-I(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function ALO(){AQb=B1(0);AQc=AFT();AQd=new Ry;}
var FJ=F(FO);
var Gu=F(FJ);
var Yv=F(Gu);
var Ea=F();
function FB(){Ea.call(this);this.bb=0;}
var AQf=null;var AQg=null;function ALu(a){var b=new FB();XR(b,a);return b;}
function XR(a,b){a.bb=b;}
function J_(b){return (Mi(APn(20),b,10)).eh();}
function IB(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new CT;Br(b,C(6));J(b);}d=H(b);if(0==d){b=new CT;Br(b,C(7));J(b);}if(c>=2&&c<=36){a:{e=0;switch(I(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new CT;W(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=NQ(I(b,f));if(i<0){j=new CT;k=B9(b,0,d);b=new R;T(b);K(K(b,C(8)),k);Br(j,S(b));J(j);}if(i>=c){j=new CT;l=B9(b,0,d);b=new R;T(b);K(K(Bk(K(b,C(9)),c),C(10)),l);Br(j,S(b));J(j);}g=V(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new CT;k=B9(b,0,d);b=new R;T(b);K(K(b,C(11)),k);Br(j,S(b));J(j);}b=new CT;j=new R;T(j);Bk(K(j,C(12)),c);Br(b,S(j));J(b);}
function Ct(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AQg===null){AQg=O(FB,256);c=0;while(true){d=AQg.data;if(c>=d.length)break a;d[c]=ALu(c-128|0);c=c+1|0;}}}return AQg.data[b+128|0];}return ALu(b);}
function AMM(a,b){if(a===b)return 1;return b instanceof FB&&b.bb==a.bb?1:0;}
function Mz(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Hu(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AG8(a,b){b=b;return BF(a.bb,b.bb);}
function AAB(){AQf=E($rt_intcls());}
function FD(){var a=this;B.call(a);a.J=null;a.E=0;}
function AQh(){var a=new FD();T(a);return a;}
function APn(a){var b=new FD();Fp(b,a);return b;}
function T(a){Fp(a,16);}
function Fp(a,b){a.J=B1(b);}
function Mi(a,b,c){return YG(a,a.E,b,c);}
function YG(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Co(a,b,b+1|0);else{Co(a,b,b+2|0);f=a.J.data;g=b+1|0;f[b]=45;b=g;}a.J.data[b]=Gs(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=V(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Co(a,b,b+i|0);if(e)e=b;else{f=a.J.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.J.data;b=e+1|0;f[e]=Gs($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function Zr(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BF(c,0.0);if(!d){if(1.0/c===Infinity){Co(a,b,b+3|0);e=a.J.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Co(a,b,b+4|0);e=a.J.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.J.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.J.data;d=b+1|0;e[b]=45;}e=a.J.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AQi;Zk(c,f);d=f.jP;g=f.jr;h=f.nh;i=1;j=1;if(h)j=2;k=9;l=ALf(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Ba(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Co(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.J.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.J.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.J.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.J.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function ALf(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function BY(a,b){return a.lm(a.E,b);}
function Vo(a,b,c){Co(a,b,b+1|0);a.J.data[b]=c;return a;}
function IG(a,b){var c,d;c=a.J.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.J=Mt(a.J,d);}
function S(a){return DL(a.J,0,a.E);}
function U_(a,b,c,d){return a.kS(a.E,b,c,d);}
function LT(a,b,c,d,e){var f,g,h,i;Co(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.J.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Hv(a,b){return a.jV(b,0,b.data.length);}
function Co(a,b,c){var d,e,f,g;d=a.E;e=d-b|0;a.g8((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.J.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.E=a.E+(c-b|0)|0;}
var G5=F(0);
var R=F(FD);
function APb(){var a=new R();AMy(a);return a;}
function AMy(a){T(a);}
function K(a,b){var c;c=a.E;if(b===null)b=C(13);Lb(a,c,b);return a;}
function DJ(a,b){Lb(a,a.E,b);return a;}
function Bk(a,b){Mi(a,b,10);return a;}
function FE(a,b){var c,d,e,f,g,h,i,j;c=a.E;d=1;if(ANY(b,AAl)){d=0;b=AOF(b);}a:{if(Hr(b,BH(10))<0){if(d)Co(a,c,c+1|0);else{Co(a,c,c+2|0);e=a.J.data;f=c+1|0;e[c]=45;c=f;}a.J.data[c]=Gs(XX(b),10);}else{g=1;h=BH(1);i=KD(BH(-1),BH(10));b:{while(true){j=AIo(h,BH(10));if(Hr(j,b)>0){j=h;break b;}g=g+1|0;if(Hr(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Co(a,c,c+g|0);if(d)f=c;else{e=a.J.data;f=c+1|0;e[c]=45;}while(true){if(AEC(j,AAl))break a;e=a.J.data;c=f+1|0;e[f]=Gs(XX((KD(b,j))),10);b=WL(b,j);j=KD(j,BH(10));f=c;}}}return a;}
function Wp(a,b){BY(a,b);return a;}
function GG(a,b){Lb(a,a.E,!b?C(14):C(15));return a;}
function AA6(a,b,c){var d,e,f,g,h,i;d=BF(b,c);if(d<=0){e=a.E;if(b<=e){if(d){f=e-c|0;a.E=e-(c-b|0)|0;g=0;while(g<f){h=a.J.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Go;W(i);J(i);}
function T5(a,b){var c,d,e,f;if(b>=0){c=a.E;if(b<c){c=c-1|0;a.E=c;while(b<c){d=a.J.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Go;W(f);J(f);}
function AG5(a,b,c,d,e){LT(a,b,c,d,e);return a;}
function AEv(a,b,c,d){U_(a,b,c,d);return a;}
function W5(a){return a.E;}
function GM(a){return S(a);}
function AHa(a,b){IG(a,b);}
function AHB(a,b,c){Vo(a,b,c);return a;}
function Lb(a,b,c){var d,e,f;if(b>=0&&b<=a.E){a:{if(c===null)c=C(13);else if(DT(c))break a;IG(a,a.E+H(c)|0);d=a.E-1|0;while(d>=b){a.J.data[d+H(c)|0]=a.J.data[d];d=d+(-1)|0;}a.E=a.E+H(c)|0;d=0;while(d<H(c)){e=a.J.data;f=b+1|0;e[b]=I(c,d);d=d+1|0;b=f;}}return a;}c=new Go;W(c);J(c);}
var E$=F(Gu);
var ZF=F(E$);
function AQj(a){var b=new ZF();ADB(b,a);return b;}
function ADB(a,b){Br(a,b);}
var Yi=F(E$);
function AQk(a){var b=new Yi();ADP(b,a);return b;}
function ADP(a,b){Br(a,b);}
var RX=F(0);
var C3=F(0);
function CZ(b,c){if(b!==null)b.eG();return c;}
var NL=F(0);
function HF(){var a=this;B.call(a);a.jf=0;a.k2=0;a.ka=0;}
var AQl=0;function K3(a){AQl=AQl-1|0;}
function Jz(a,b,c){return Gd(a,b)+c|0;}
function Qh(){var a=this;HF.call(a);a.hb=null;a.c5=null;a.l$=null;}
function Fi(a){var b,c,d;b=a.c5;c=a.k2;d=a.ka;b.clearRect(0.0,0.0,c,d);}
function QL(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.c5;d="center";c.textAlign=d;break a;case 2:c=a.c5;d="right";c.textAlign=d;break a;default:break a;}d=a.c5;c="left";d.textAlign=c;}}
function CF(a,b){L2(a,b.mE);}
function L2(a,b){var c;if(a.l$!==b){c=a.c5;a.l$=b;c.font=b;}}
function Ej(a,b,c,d){var e,f,g;e=a.c5;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Gd(a,b){var c;c=$rt_ustr(b);return a.c5.measureText(c).width;}
function AC6(){return {alpha:false};}
var WI=F();
var BK=F(0);
function I5(b){return b;}
var BZ=F(0);
var O3=F();
function AGV(a,b){var c,d,e,f,g,h,i,j;c=$rt_globals.fetch("fileList.txt");d=new RB;c=c.then(Bi(d,"f"));d=new RD;e=new RC;c.then(Bi(d,"f"),Bi(e,"f"));if((C2()).getElementById("codeEdit")===null)CU(D2(),C(16));else{f=new Rp;g=new Tz;g.oz=f;f.qY=g;g=new Tx;g.ui=f;f.lH=g;d=new Ty;d.qR=f;f.tb=new $rt_globals.ResizeObserver(Bi(d,"f"));g=new Tw;g.nT=f;f.mu=g;f.hP=1;g=new Q1;d=new SL;AA4(d);g.iW=d;d=new NV;e=null;TM(d);d.w8=e;d.iL=AQm;g.pa=d;BU(d);e=new Q7;e.rd=d;g.t_=e;g.li=b;h=b.length;i=0;while(i<h){d=b[i];j=new Q8;j.qc
=g;j.qb=i;e=Bi(j,"f");d.onmessage=e;d=b[i];e=YL();d.postMessage(e);i=i+1|0;}g.gl=0;g.j4=Bu(h);g.jB=Bu(h);f.lq=g;f.mm=(C2()).getElementById("codeEdit");g=WU();b=0;g.tabIndex=b;e=g.style;e.setProperty("width","100%");e.setProperty("height","100%");e.setProperty("outline","none");f.dl=g;f.mm.appendChild(g);b=f.dl;g=AI_(!!0,!!0,!!1,!!1);d=b.getContext("webgl2",g);if(d===null)Xx(C(2),C(17));else{f.kT=AOh(f.dl,f.lH);b=new Tq;c=f.lH;ZC(b,d,new Sz,1);b.w6=new Sy;b.wo=c;f.fB=b;AJ6(f.tb,f.dl,AB_());g=$rt_globals.window;c
=f.mu;g.addEventListener("resize",Bi(c,"handleEvent"));c=new Lq;b=f.fB;g=f.kT.b5;c.iZ=b;c.ci=g;c.kM=f;b=AO7(c);AP5=b;f.eW=b;RK(f);}AP6=f;Ta(f);}}
var YY=F();
var J9=F();
var AQn=null;var AQo=null;function IO(){if(AQn===null)AQn=AIj(AQp,0);return AQn;}
function D2(){if(AQo===null)AQo=AIj(AQq,0);return AQo;}
function AOy(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Kd(b)&&(e+f|0)<=Kd(d)){a:{b:{if(b!==d){g=Hi(Bt(b));h=Hi(Bt(d));if(g!==null&&h!==null){if(g===h)break b;if(!G2(g)&&!G2(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fo;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ZB(n.constructor,o)?1:0)){Js(b,c,d,e,j);b=new HL;W(b);J(b);}j=j+1|0;k=m;}Js(b,c,d,e,f);return;}if(!G2(g))break a;if(G2(h))break b;else break a;}b=new HL;W(b);J(b);}}Js(b,c,d,
e,f);return;}b=new HL;W(b);J(b);}b=new BT;W(b);J(b);}d=new FV;Br(d,C(18));J(d);}
function C7(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Kd(b)&&(e+f|0)<=Kd(d)){Js(b,c,d,e,f);return;}b=new BT;W(b);J(b);}
function Js(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function D1(){return Long_fromNumber(new Date().getTime());}
var AAn=F();
var JO=F(0);
function Dt(){var a=this;B.call(a);a.jt=null;a.jD=null;}
var DE=F(0);
function Jo(){var a=this;Dt.call(a);a.cp=0;a.bP=null;a.cn=0;a.uz=0.0;a.j3=0;}
function FS(){var a=new Jo();Ov(a);return a;}
function AFQ(a,b){return O(FW,b);}
function Ov(a){var b;b=AA_(16);a.cp=0;a.bP=O(FW,b);a.uz=0.75;ST(a);}
function AA_(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Eg(a){var b;if(a.cp>0){a.cp=0;b=a.bP;Xn(b,0,b.data.length,null);a.cn=a.cn+1|0;}}
function ST(a){a.j3=a.bP.data.length*a.uz|0;}
function IC(a,b){return RF(a,b)===null?0:1;}
function S7(a){var b;b=new SU;b.qa=a;return b;}
function B7(a,b){var c;c=RF(a,b);if(c===null)return null;return c.cv;}
function RF(a,b){var c,d;if(b===null)c=QP(a);else{d=b.k8();c=O$(a,b,d&(a.bP.data.length-1|0),d);}return c;}
function O$(a,b,c,d){var e;e=a.bP.data[c];while(e!==null&&!(e.ih==d&&WQ(b,e.cg))){e=e.cl;}return e;}
function QP(a){var b;b=a.bP.data[0];while(b!==null&&b.cg!==null){b=b.cl;}return b;}
function IU(a){var b;if(a.jt===null){b=new N1;b.ga=a;a.jt=b;}return a.jt;}
function DG(a,b,c){var d,e,f,g;if(b===null){d=QP(a);if(d===null){a.cn=a.cn+1|0;d=SJ(a,null,0,0);e=a.cp+1|0;a.cp=e;if(e>a.j3)S1(a);}}else{e=b.k8();f=e&(a.bP.data.length-1|0);d=O$(a,b,f,e);if(d===null){a.cn=a.cn+1|0;d=SJ(a,b,f,e);e=a.cp+1|0;a.cp=e;if(e>a.j3)S1(a);}}g=d.cv;d.cv=c;return g;}
function SJ(a,b,c,d){var e,f;e=new FW;VW(e,b,null);e.ih=d;f=a.bP.data;e.cl=f[c];f[c]=e;return e;}
function Yg(a,b){var c,d,e,f,g,h,i,j;c=AA_(!b?1:b<<1);d=O(FW,c);e=d.data;f=0;b=c-1|0;while(true){g=a.bP.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.ih&b;j=h.cl;h.cl=e[i];e[i]=h;h=j;}f=f+1|0;}a.bP=d;ST(a);}
function S1(a){Yg(a,a.bP.data.length);}
function WQ(b,c){return b!==c&&!b.bq(c)?0:1;}
var X4=F();
function Xx(b,c){var d,e,f;d=(C2()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(C2()).getElementById($rt_ustr(b)).appendChild(d);}
function WU(){return (C2()).createElement("canvas");}
function AA$(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AI_(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ABC=F();
var L4=F();
function AIX(a,b){var c;c=new Bo;Br(c,$rt_str(b.message));J(c);}
var AAE=F();
function Eu(b){return $rt_str(b);}
var Gn=F(0);
var Ry=F();
var BT=F(Bo);
var Zo=F();
function Kd(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AQr());}return b.data.length;}
function Z0(b,c){if(b===null){b=new FV;W(b);J(b);}if(b===E($rt_voidcls())){b=new BI;W(b);J(b);}if(c>=0)return AMi(b.fo,c);b=new V$;W(b);J(b);}
function AMi(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var FV=F(Bo);
var HL=F(Bo);
function CM(){B.call(this);this.jq=0;}
var AQs=null;var AQt=null;var AQu=null;var AQv=null;var AQw=null;var AQx=null;var AQy=null;var AQz=null;var AQA=null;var AQB=null;function AMU(a){var b=new CM();Ya(b,a);return b;}
function Ya(a,b){a.jq=b;}
function MF(b){var c,d;c=AQx.data;if(b>=c.length)return AMU(b);d=c[b];if(d===null){d=AMU(b);AQx.data[b]=d;}return d;}
function UZ(b){var c,d;c=new Bw;d=B1(1);d.data[0]=b;Ii(c,d);return c;}
function KV(b){return b>=65536&&b<=1114111?1:0;}
function Cm(b){return (b&64512)!=55296?0:1;}
function CI(b){return (b&64512)!=56320?0:1;}
function Vc(b){return !Cm(b)&&!CI(b)?0:1;}
function GC(b,c){return Cm(b)&&CI(c)?1:0;}
function D4(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function JA(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function KG(b){return (56320|b&1023)&65535;}
function Ey(b){return FU(b)&65535;}
function FU(b){if(AQv===null){if(AQy===null)AQy=ZT();AQv=Yq((AQy.value!==null?$rt_str(AQy.value):null));}return Rj(AQv,b);}
function D6(b){return FR(b)&65535;}
function FR(b){if(AQu===null){if(AQz===null)AQz=AAC();AQu=Yq((AQz.value!==null?$rt_str(AQz.value):null));}return Rj(AQu,b);}
function Rj(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BF(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function SQ(b,c){if(c>=2&&c<=36){b=NQ(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function NQ(b){var c,d,e,f,g,h,i,j,k,l;if(AQt===null){if(AQA===null)AQA=Yy();c=(AQA.value!==null?$rt_str(AQA.value):null);d=AKy(ES(c));e=IN(d);f=Bu(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+L0(d)|0;j=j+L0(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AQt=f;}g=AQt.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BF(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Gs(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function FL(b){var c;if(b<65536){c=B1(1);c.data[0]=b&65535;return c;}return AOg([JA(b),KG(b)]);}
function Ce(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Vc(b&65535))return 19;if(AQw===null){if(AQB===null)AQB=ABt();d=(AQB.value!==null?$rt_str(AQB.value):null);e=O(Mc,16384);f=e.data;g=Eb(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<H(d)){m=Jr(I(d,l));if(m==64){l=l+1|0;m=Jr(I(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|V(c,Jr(I(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Jr(I(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AFd(k,k+i|0,KP(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AFd(k,k+i|0,KP(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AQw=CX(e,j);}e=AQw.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.qA)o=p+1|0;else{c=d.oO;if(b>=c)return d.o6.data[b-c|0];c=p-1|0;}}return 0;}
function Iz(b){a:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function FG(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ce(b)!=16?0:1;}
function Og(b){switch(Ce(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function PX(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Og(b);}return 1;}
function WH(){AQs=E($rt_charcls());AQx=O(CM,128);}
function ZT(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AAC(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function Yy(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ABt(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Lp=F(0);
var Ri=F(0);
var DV=F(0);
var WN=F();
function Wr(b){return (C2()).getElementById($rt_ustr(b));}
function C2(){return $rt_globals.window.document;}
function AIy(a){return a.C0();}
function AK$(a,b){return a.Ft($rt_str(b));}
function AKV(a,b){a.Br($rt_str(b));}
function AD_(a,b){return a.Ae($rt_str(b));}
function AB4(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AEp(a){return a.Fw();}
function AK4(a,b,c){return a.D2($rt_str(b),$rt_str(c));}
function AGR(a,b,c,d){a.v$($rt_str(b),Es(c,"handleEvent"),d?1:0);}
function ACU(a){return a.B4();}
function AJu(a){return !!a.F2();}
function ALN(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AH7(a){return a.BQ();}
function AGq(a,b){a.DQ($rt_str(b));}
function AIA(a){return !!a.A7();}
function ANf(a){return a.FF();}
function AHr(a){return $rt_ustr(a.xZ());}
function ACL(a,b){return a.Ci(b?1:0);}
function AMN(a){return a.F1();}
function AGn(a,b,c){return a.Gw($rt_str(b),$rt_str(c));}
function AH0(a,b,c){return a.A5(b,c?1:0);}
function AMk(a,b,c){return !!a.E2($rt_str(b),$rt_str(c));}
function AB8(a){return a.DF();}
function AF_(a){return $rt_ustr(a.He());}
function AEA(a,b){return !!a.ww(b);}
function AFt(a,b){return a.H$($rt_str(b));}
function AGD(a,b,c){return a.CX($rt_str(b),$rt_str(c));}
function AHv(a){return a.yV();}
function ACX(a,b){return a.FC($rt_str(b));}
function AFs(a){return $rt_ustr(a.yf());}
function AJT(a){a.A0();}
function ABQ(a,b){return a.GB($rt_str(b));}
function ALD(a,b){return a.BC($rt_str(b));}
function ADk(a,b){return a.AZ($rt_str(b));}
function ALF(a){return $rt_ustr(a.za());}
function ADu(a,b,c){return a.C5(b,c);}
function AJH(a,b){return a.xY(b);}
function AKn(a){return a.EF();}
function AI4(a,b,c){a.vL($rt_str(b),Es(c,"handleEvent"));}
function AIK(a,b,c){return a.zb(b,c);}
function ALz(a){return !!a.EY();}
function AMS(a,b){return a.CR($rt_str(b));}
function AIN(a,b,c,d){a.u8($rt_str(b),Es(c,"handleEvent"),d?1:0);}
function AEr(a){return a.EK();}
function ADN(a,b,c){return a.Cg($rt_str(b),$rt_str(c));}
function ACv(a){return $rt_ustr(a.zw());}
function AMI(a){return a.yE();}
function AI3(a){return a.y0();}
function ACt(a){return a.E3();}
function AI5(a,b,c){a.ws($rt_str(b),Es(c,"handleEvent"));}
function AEh(a,b){return a.G1(b);}
function AFK(a,b){a.yk($rt_str(b));}
function AKu(a){return $rt_ustr(a.x5());}
var TG=F(0);
var YQ=F();
function AFX(a,b){return a.zX(b);}
function AHM(a){return a.E0();}
function ME(){var a=this;B.call(a);a.oR=null;a.oS=null;a.oT=0;a.oU=null;a.oN=null;}
function AJG(a,b){var c,d,e,f,g;c=a.oR;d=a.oS;e=a.oT;f=a.oU;g=a.oN;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var N8=F(0);
var Qb=F(0);
var P2=F(0);
var RU=F(0);
var Vb=F(0);
var SS=F(0);
var Xz=F();
function AI8(a,b,c){a.ws($rt_str(b),Es(c,"handleEvent"));}
function AG7(a,b,c){a.vL($rt_str(b),Es(c,"handleEvent"));}
function AGb(a,b,c,d){a.u8($rt_str(b),Es(c,"handleEvent"),d?1:0);}
function AC3(a,b){return !!a.ww(b);}
function AEG(a,b,c,d){a.v$($rt_str(b),Es(c,"handleEvent"),d?1:0);}
var BI=F(Bo);
var Go=F(BT);
var Gz=F(0);
function FM(){var a=this;B.call(a);a.cg=null;a.cv=null;}
function AQC(a,b){var c=new FM();VW(c,a,b);return c;}
function VW(a,b,c){a.cg=b;a.cv=c;}
function AEf(a,b){var c,d;if(a===b)return 1;if(!HH(b,Gz))return 0;a:{b:{c:{d:{c=b;b=a.cg;if(b!==null){if(!b.bq(c.cg))break c;else break d;}if(c.cg!==null)break c;}b=a.cv;if(b!==null){if(!b.bq(c.cv))break c;else break b;}if(c.cv===null)break b;}d=0;break a;}d=1;}return d;}
function FW(){var a=this;FM.call(a);a.ih=0;a.cl=null;}
var Po=F(0);
var Nz=F(0);
function Rp(){var a=this;B.call(a);a.qY=null;a.lH=null;a.mm=null;a.dl=null;a.tb=null;a.mu=null;a.kT=null;a.fB=null;a.hP=0;a.v4=0;a.qv=null;a.eW=null;a.lq=null;}
function Ta(a){a.dl.focus();}
function RK(a){a.v4=$rt_globals.requestAnimationFrame(Bi(a.qY,"onAnimationFrame"));}
function IF(a){a.hP=1;}
function RI(a,b,c){var d,e;a.kT.di=Cd(b,c);d=a.dl;e=b;d.width=e;d=a.dl;e=c;d.height=e;d=a.fB;Bn(d.c_,b,c);e=d.Z;d=d.c_;b=d.b;c=d.a;e.viewport(0,0,b,c);Lt(a.eW,a.fB.c_,Jt(a));Ja(a.eW);}
function Ms(a){return $rt_globals.performance.now()/1000.0;}
function Jt(a){return $rt_globals.window.devicePixelRatio;}
function Ug(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ABc(b,0);else{c=new Vm;d=$rt_globals.window.showOpenFilePicker();e=new Vl;e.pv=b;e.pu=c;d.then(Bi(e,"f"),Bi(c,"f"));}}
function Ep(a,b,c,d){var e,f,g,h;e=a.lq;f=e.gl;if(f>0){g=e.j4.data;f=f-1|0;e.gl=f;J$(e,b,c,d,g[f]);}else{h=e.iW;e=new UI;e.rS=b;e.sD=c;e.rx=d;b=new Sq;b.nw=e;c=h.iV;b.sq=c;if(c===null)h.jU=b;else c.rA=b;h.iV=b;h.bH=h.bH+1|0;h.hm=h.hm+1|0;}}
function UB(a,b,c,d,e){var f,g;f=a.lq;if(c>=f.li.length)c=0;g=f.jB.data;g[c]=g[c]+1|0;J$(f,b,d,e,c);}
function ABy(b){var c;c=new Va;c.ne=b;return c;}
var Ei=F(0);
var WE=F();
var Bh=F(0);
var WG=F();
var XS=F();
function YL(){return "ping";}
function ABs(b){return b===YL()?1:0;}
var WV=F();
var J6=F(0);
var RB=F();
function ACT(a,b){return b.text();}
var RD=F();
function AE4(a,b){var c,d,e,f,g,h,i,j;c=Wr(C(19));d=(ZJ(b)).hD.data;e=d.length;f=0;while(f<e){g=d[f];if(!DT(g)){h=(C2()).createElement("button");i="fileButton";h.className=i;b=$rt_ustr(g);h.innerText=b;c.appendChild(h);j=new Tm;j.rn=g;h.addEventListener("click",Bi(j,"handleEvent"));}f=f+1|0;}}
var RC=F();
function AG_(a,b){AA$(b);}
var P8=F(0);
function Tz(){B.call(this);this.oz=null;}
function AGm(a,b){var c,d,e,f,g,h;c=b;b=a.oz;d=b.eW;c=c/1000.0;d=d.cw;e=d.d.f;if(Sf(e)&&c-e.rm>0.03125?1:0){f=d.pk;g=d.d.f.b2;if(f!=g){d.pk=g;Qa(d);}}RE(d);g=Sk((d.bj+d.xz|0)-d.vh|0,IT(d));f=d.bj==g?0:1;if(f)E8(d,g);a:{e=d.cy;g=e.fv;if(c>e.gu)while(true){h=e.gu+e.jl;e.gu=h;e.fv=e.fv?0:1;if(c>h)continue;else break a;}}g=e.fv==g?0:1;g=!g&&!f&&!d.ut?0:1;if(!(!g&&!b.hP)){d=b.fB.c_;if(V(d.b,d.a)){b.hP=0;Ja(b.eW);}}RK(b);}
function Tx(){B.call(this);this.ui=null;}
function CV(a){IF(a.ui);}
var O8=F(0);
function Ty(){B.call(this);this.qR=null;}
function AEM(a,b,c){var d,e,f,g;c=a.qR;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dl){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Jt(c);RI(c,Gx(f.width*g),Gx(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];RI(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AAS=F();
function AB_(){return {box:'device-pixel-content-box'};}
function AJ6(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var B$=F(0);
function Tw(){B.call(this);this.nT=null;}
function AJR(a,b){b=a.nT;Lt(b.eW,b.fB.c_,Jt(b));Ja(b.eW);}
function Q1(){var a=this;B.call(a);a.iW=null;a.li=null;a.pa=null;a.j4=null;a.jB=null;a.mS=0;a.gl=0;a.t_=null;}
function J$(a,b,c,d,e){var f,g,h,i,j,k;d=d.data;f=a.mS+1|0;a.mS=f;g=a.pa;h=Ct(f);g.g_=KX(g,g.g_,h);h=SY(g,h);Lr(h,b);Lr(h,b);g.iQ=g.iQ+1|0;b=a.li[e];i=d.length;g=new $rt_globals.Array(i+2|0);h=f;0;g[0]=h;c=$rt_ustr(c);1;g[1]=c;h=new $rt_globals.Array();j=0;while(j<i){c=d[j];if(c instanceof Bw)k=$rt_ustr(c);else if(HH(c,$rt_arraycls($rt_bytecls())))k=c.data.buffer;else if(HH(c,$rt_arraycls($rt_charcls())))k=c.data.buffer;else if(HH(c,$rt_arraycls($rt_intcls())))k=c.data.buffer;else{if(!(c instanceof JQ)){b=new BI;c
=Bt(c);if(c.jx===null)c.jx=$rt_str(c.fo.$meta.name);h=c.jx;c=new R;T(c);K(K(c,C(20)),h);Br(b,S(c));J(b);}c=c;k=c.hn;if(k===null)k=c.hY;}f=j+2|0;f;g[f]=k;if(k instanceof $rt_globals.ArrayBuffer?1:0)h.push(k);j=j+1|0;}b.postMessage(g,h);}
var K4=F(0);
var RN=F(0);
var SM=F(0);
var FI=F();
function Iu(){FI.call(this);this.uI=null;}
function Yf(){var a=this;Iu.call(a);a.wH=0;a.j5=0;a.hZ=null;a.js=null;a.sb=null;}
function AIj(a,b){var c=new Yf();ALQ(c,a,b);return c;}
function ALQ(a,b,c){a.uI=b;b=new R;T(b);a.hZ=b;a.js=B1(32);a.wH=c;AFi();a.sb=AQD;}
function RS(a,b,c,d){var e,$$je;e=a.uI;if(e===null)a.j5=1;if(!(a.j5?0:1))return;a:{try{e.jk(b,c,d);break a;}catch($$e){$$je=ET($$e);if($$je instanceof Su){}else{throw $$e;}}a.j5=1;}}
function M1(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$$je;e=b.data;d=d-c|0;f=new P3;g=e.length;d=c+d|0;TV(f,g);f.ck=c;f.d0=d;f.s8=0;f.xH=0;f.qd=b;e=Eb(Ba(16,Be(g,1024)));d=e.data.length;h=new US;i=0+d|0;TV(h,d);AGC();h.wd=AQE;h.pF=0;h.rp=e;h.ck=0;h.d0=i;h.wg=0;h.ml=0;j=a.sb;k=new Ob;b=Eb(1);l=b.data;l[0]=63;AL8();m=AQF;k.k1=m;k.kb=m;c=l.length;if(c&&c>=k.lO){k.u7=j;k.pn=b.f1();k.wB=2.0;k.lO=4.0;k.oI=B1(512);k.np=Eb(512);j=AQG;if(j===null){m=new BI;Br(m,C(21));J(m);}k.k1=j;k.kb=j;while(k.hV!=3){k.hV=2;a:{while(true)
{try{j=WZ(k,f,h);}catch($$e){$$je=ET($$e);if($$je instanceof Bo){j=$$je;m=new R9;m.kX=1;m.lI=1;m.p0=j;J(m);}else{throw $$e;}}if(j.g1?0:1){c=Ez(f);if(c<=0)break a;j=J3(c);}else if(KK(j))break;m=!UQ(j)?k.k1:k.kb;b:{if(m!==AQG){if(m===AQH)break b;else break a;}c=Ez(h);b=k.pn;d=b.data.length;if(c<d){j=AQI;break a;}UT(h,b,0,d);}n=f.ck;c=j.g1!=2?0:1;if(!(!c&&!UQ(j)?0:1)){j=new DR;W(j);J(j);}Q9(f,n+j.nt|0);}}n=KK(j);RS(a,e,0,h.ck);MZ(h);if(!n){while(true){d=k.hV;if(d!=2&&d!=4){j=new Dg;W(j);J(j);}j=AQJ;if(j===j)k.hV
=3;n=KK(j);RS(a,e,0,h.ck);MZ(h);if(!n)break;}return;}}j=new Dg;W(j);J(j);}m=new BI;Br(m,C(22));J(m);}
function CU(a,b){var c,d,e,f,g,h,i,j;BY(DJ(a.hZ,b),10);b=a.hZ;c=b.E;d=a.js;if(c>d.data.length)d=B1(c);e=0;f=0;if(e>c){b=new BT;Br(b,C(23));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.J.data;j=e+1|0;g[f]=i[e];f=h;e=j;}M1(a,d,0,c);a.hZ.E=0;}
function FA(){FI.call(this);this.wp=null;}
function V3(a){a.wp=Eb(1);}
var Jx=F(FA);
var AQq=null;function AE5(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function ABD(){var b;b=new Jx;V3(b);AQq=b;}
var T6=F(0);
function ABI(a,b){var c;c=a.bQ();while(c.b$()){b.m(c.bJ());}}
var Ft=F(0);
function S6(a){var b,c;b=new QY;c=new O0;c.oM=a;b.sg=c;return b;}
function AGT(a,b){var c,d;c=a.bQ();d=0;while(c.b$()){if(b.cY(c.bJ())){c.j8();d=1;}}return d;}
var En=F();
function AA4(a){}
function DO(a){return a.cq()?0:1;}
function GY(a,b){var c,d,e,f,g,h;c=b.data;d=a.j;e=c.length;if(e<d)b=Z0(Hi(Bt(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BM(a);while(BN(f)){g=b.data;h=e+1|0;g[e]=BQ(f);e=h;}return b;}
function AKM(a,b){var c;c=a.bQ();while(c.b$()){if(BB(c.bJ(),b)){c.j8();return 1;}}return 0;}
function FZ(a,b){var c,d;c=0;d=b.bQ();while(d.b$()){if(!a.q7(d.bJ()))continue;c=1;}return c;}
var Jw=F(0);
var Ie=F(0);
function D8(){En.call(this);this.bH=0;}
function AJ$(a,b){a.lG(a.cq(),b);return 1;}
function BM(a){var b;b=new Mo;b.f_=a;b.lp=a.bH;b.hX=a.cq();b.fD=(-1);return b;}
function AJo(a,b,c){var d,e;if(b>=0&&b<=a.cq()){if(c.dB())return 0;d=c.bQ();while(d.b$()){e=b+1|0;a.lG(b,d.bJ());b=e;}return 1;}c=new BI;W(c);J(c);}
function ALv(a,b,c){c=new DR;W(c);J(c);}
function I$(a,b){var c,d;c=a.cq();d=0;while(true){if(d>=c)return (-1);if(BB(b,a.kE(d)))break;d=d+1|0;}return d;}
function AIl(a,b){var c,d;if(!HH(b,Ie))return 0;c=b;if(a.j!=c.j)return 0;d=0;while(d<c.j){if(!BB(Bp(a,d),Bp(c,d)))return 0;d=d+1|0;}return 1;}
var KS=F(D8);
var Lw=F(0);
var Vy=F(0);
function SL(){var a=this;KS.call(a);a.jU=null;a.iV=null;a.hm=0;}
var Vv=F(0);
var LY=F(0);
function NV(){var a=this;Dt.call(a);a.g_=null;a.iL=null;a.w8=null;a.iQ=0;}
function AA0(a,b){var c;c=SY(a,b);if(c===null)return null;a.g_=I2(a,a.g_,b);a.iQ=a.iQ+1|0;return c.hS;}
function SY(a,b){var c,d;c=a.g_;while(true){if(c===null)return null;d=IA(a.iL,b,c.id);if(!d)break;c=d>=0?c.bN:c.bw;}return c;}
function KX(a,b,c){var d,e;if(b===null){b=new Iw;d=null;b.id=c;b.hS=d;b.e1=1;b.fa=1;return b;}e=IA(a.iL,c,b.id);if(!e)return b;if(e>=0)b.bN=KX(a,b.bN,c);else b.bw=KX(a,b.bw,c);DW(b);return IM(b);}
function I2(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=IA(a.iL,c,b.id);if(d<0)b.bw=I2(a,b.bw,c);else if(d>0)b.bN=I2(a,b.bN,c);else{e=b.bN;if(e===null)return b.bw;f=b.bw;g=O(Iw,e.e1).data;h=0;while(true){b=e.bw;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bN;while(h>0){h=h+(-1)|0;j=g[h];j.bw=b;DW(j);b=IM(j);}e.bN=b;e.bw=f;DW(e);b=e;}DW(b);return IM(b);}
var AAN=F();
function BB(b,c){if(b===c)return 1;return b!==null?b.bq(c):c!==null?0:1;}
function BU(b){if(b!==null)return b;b=new FV;Br(b,C(5));J(b);}
function Q7(){B.call(this);this.rd=null;}
function Q8(){var a=this;B.call(a);a.qc=null;a.qb=0;}
function AB7(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.qc;d=a.qb;ABs(b.data);e=c.jB.data;f=e[d];if(f>0)e[d]=f-1|0;else{g=c.iW;h=g.jU;if(h===null)i=null;else{i=h.rA;g.jU=i;if(i!==null)i.sq=null;else g.iV=null;g.hm=g.hm-1|0;g.bH=g.bH+1|0;i=h.nw;}if(i!==null)J$(c,i.rS,i.sD,i.rx,d);else{e=c.j4.data;j=c.gl;c.gl=j+1|0;e[j]=d;}}c=c.t_;b=b.data;if(!ABs(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BI;W(b);J(b);}if(b.length<1){b=new BI;ZX(b);J(b);}g=Ct(b[0]);h=AA0(c.rd,g);e=O(B,b.length-1|0);k=e.data;f=0;j=k.length;while
(f<j){l=f+1|0;g=b[l];k[f]=(typeof g==='string'?1:0)?Eu(I5(g)):(g instanceof $rt_globals.ArrayBuffer?1:0)?AN7(I5(g)):(g instanceof $rt_globals.File?1:0)?Zu(null,I5(g)):!(g instanceof $rt_globals.FileSystemFileHandle?1:0)?null:Zu(I5(g),null);f=l;}h.m(e);}}
function XM(){var a=this;B.call(a);a.b5=null;a.gv=null;a.wk=null;a.di=null;}
function AOh(a,b){var c=new XM();ALq(c,a,b);return c;}
function ALq(a,b,c){var d,e,f,g;a.di=null;a.gv=b;d=new OD;d.fx=Cq(O(Er,0));d.uy=Cq(O(Er,0));d.eO=Cq(O(Fu,0));d.ik=Cq(O(Hh,0));d.jG=Cq(O(Lg,0));d.ls=Cq(O(Jn,0));d.jX=Cq(O(IP,0));d.lz=Cq(O(Bh,0));d.jo=Cq(O(Bh,0));d.cL=c;a.b5=d;e=$rt_globals.window;f=O(C3,14);g=f.data;d=new Uo;d.m1=a;g[0]=Cz(a,b,C(24),d);d=new Up;d.ru=a;g[1]=Cz(a,b,C(25),d);d=new Uq;d.om=a;g[2]=Cz(a,b,C(26),d);d=new Ur;d.ue=a;g[3]=Cz(a,b,C(27),d);d=new Us;d.qK=a;g[4]=Cz(a,b,C(28),d);d=new Ut;d.nr=a;g[5]=Cz(a,b,C(29),d);d=new Uu;d.ur=a;g[6]=Cz(a,
b,C(30),d);d=new Uv;d.qT=a;g[7]=Cz(a,b,C(31),d);d=new Uw;d.nH=a;g[8]=Cz(a,b,C(32),d);d=new Ux;d.ts=a;g[9]=Cz(a,b,C(33),d);d=new VS;d.sU=a;g[10]=Cz(a,b,C(34),d);d=new VT;d.rL=a;e.addEventListener("paste",Bi(d,"handleEvent"),!!1);g[11]=UP(a,e,C(35),d);d=new VU;d.l7=a;g[12]=Cz(a,e,C(36),d);d=new VV;d.tQ=a;g[13]=Cz(a,e,C(37),d);c=new Pb;c.vF=f;a.wk=c;e=new Vt;e.pc=b;b.onpointerdown=Bi(e,"f");e=new Vu;e.nZ=b;b.onpointerup=Bi(e,"f");}
function LV(){return (C2()).activeElement;}
function Cz(a,b,c,d){b.addEventListener($rt_ustr(c),Bi(d,"handleEvent"));return UP(a,b,c,d);}
function UP(a,b,c,d){var e;e=new O4;e.vd=b;e.vf=c;e.ve=d;return e;}
function R8(a,b){var c;c=new S0;c.ud=b;return c;}
function D_(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gv.getBoundingClientRect();e=Cd(Gx((b.clientX-d.left)*c),Gx((b.clientY-d.top)*c));f=new Bq;g=a.di;f.b=g.b;f.a=g.a;d=new Ln;Sw(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.u=e;d.uS=f;return d;}
function VY(a,b,c){var d,e,f,g;d=new NP;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Sw(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.jd=0;d.dN=e;d.bT=f;d.sf=c;d.wq=g;return d;}
function Dl(a,b){b.stopPropagation();b.preventDefault();}
function JX(){var a=this;B.call(a);a.qs=null;a.dd=null;a.Z=null;a.kC=0;a.so=null;a.vK=0;a.wL=0;a.iS=null;a.xl=null;a.w5=null;a.wV=null;a.eS=null;a.fc=null;a.wW=null;a.uV=null;a.g5=null;a.xc=null;a.oC=null;a.c_=null;a.t0=null;a.kL=0;a.i9=0;a.ln=0;a.k$=0;a.hE=0;a.lj=null;}
function ZC(a,b,c,d){var e,f,g,h,i,j;a.c_=new Bq;a.kL=0;a.lj=new Uz;a.qs=c;a.kC=d;e=$rt_str(b.getParameter(7938));f=new R;T(f);K(K(f,C(38)),e);$rt_globals.console.info($rt_ustr(S(f)));a.Z=b;a.dd=Mm(c,4,4,1);g=ABX(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=B1(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;c=new O5;GJ();f=AQK;c.dX=b;c.fT=f;c.q5=h.length/f.jS|0;c.tT=j.length;f
=b.createBuffer();c.mq=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);c.uf=null;f=b.createBuffer();c.tA=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}f=null;b.bindBuffer(34962,f);f=null;b.bindBuffer(34963,f);a.oC=c;a.wL=Jq(e,C(39));c=new O6;c.dz=b;a.so=c;d=b.getParameter(3379);a.vK=d;c=new R;T(c);Bk(K(c,C(40)),d);$rt_globals.console.info($rt_ustr(S(c)));g=O(CB,9);i=g.data;c=new T7;F_(c,b,C(41),C(42),AQK);e=c.bn;c.tk=b.getUniformLocation(e,"uColor");a.iS=c;i[0]=c;c=
ANG(b);a.xl=c;i[1]=c;c=AOH(b);a.w5=c;i[2]=c;c=AO2(b);a.wV=c;i[3]=c;c=AOd(b);a.eS=c;i[4]=c;c=APi(b);a.fc=c;i[5]=c;c=AO_(b);a.wW=c;i[6]=c;c=AOX(b);a.uV=c;i[7]=c;c=AOY(b);a.g5=c;i[8]=c;a.xc=g;ABb(b,C(43));}
function EY(a,b,c,d){return Mm(a.qs,b,c,d);}
function DP(a,b){var c;if(b==a.i9)return b;if(!b)a.Z.disable(3042);else{a.Z.enable(3042);a.Z.blendFuncSeparate(770,771,1,1);}c=a.i9;a.i9=b;return c;}
function Qp(a,b,c){S2(a,b.b,b.a,c);}
function S2(a,b,c,d){var e,f;e=d.b;f=d.a;a.k$=1;a.hE=1;d=a.lj;d.qD=b;d.qF=c;d.qC=e;d.qB=f;Sx(a);}
function Kw(a){a.k$=0;a.hE=0;Sx(a);}
function Sx(a){var b,c,d,e,f,g;b=a.ln;c=a.k$;if(b!=c){a.ln=c;if(!c)a.Z.disable(3089);else a.Z.enable(3089);}if(a.ln&&a.hE){a.hE=0;d=a.Z;e=a.lj;b=e.qD;c=a.c_.a-e.qF|0;f=e.qB;c=c-f|0;g=e.qC;d.scissor(b,c,g,f);}}
function Hj(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.oC;c=a.kL;d=b.fT.rI;e=b.dX;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dX;h=b.mq;e.bindBuffer(34962,h);i=b.fT.lN.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dX;m=k.gC;n=k.eK;o=b.fT.jS*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.eK|0;j=j+1|0;}a:{e=b.uf;if(e!==null){c=0;b.dX.bindBuffer(34962,e);i=b.fT.qr.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dX;j=e.gC;p=e.eK;m=e.oJ;n=b.fT.o9;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.eK|0;g=g+1|0;}}}q=b.tA;if(q===null){c=b.q5;if(c>0)b.dX.drawArrays(4,0,c);}else{b.dX.bindBuffer(34963,q);k=b.dX;g=b.tT;k.drawElements(4,g,5123,0);}a.kL=d;}
function BC(a,b,c,d,e){Hp(a,a.iS);H3(a.iS,a.Z,b,c,d,a.c_);d=a.iS;Hq(a.Z,d.tk,e);Hj(a);}
function Eh(a,b,c,d,e,f,g,h,i){Hp(a,a.eS);H3(a.eS,a.Z,b,c,d,a.c_);Sr(a.eS,a.Z,f);LJ(a.eS,a.Z,f,e);RO(a.eS,a.Z,g,h);d=a.eS;e=a.Z;d=d.or;e.uniform2f(d,i,0.0);Hj(a);}
function Ek(a,b,c,d,e,f,g,h){Hp(a,a.fc);H3(a.fc,a.Z,b,c,d,a.c_);Sr(a.fc,a.Z,f);LJ(a.fc,a.Z,f,e);RO(a.fc,a.Z,g,h);Hj(a);}
function Gv(a){var b,c;b=new Iv;c=a.so;b.eq=new Bq;b.d9=c;b.eA=c.dz.createTexture();AQL=AQL+1|0;return b;}
function Hp(a,b){var c,d;if(b!==a.t0){c=a.Z;d=b.bn;c.useProgram(d);a.t0=b;}}
function Tq(){var a=this;JX.call(a);a.wo=null;a.w6=null;}
function F8(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;a:{f=a.dd;switch(e){case 1:break;case 2:g='italic ';break a;default:g='';break a;}g='oblique ';}h=g+d+' '+c+'px '+$rt_ustr(b);L2(f,h);g=f.c5.measureText("W");i=g.fontBoundingBoxAscent;j=g.fontBoundingBoxDescent;k=g.width;l=Gd(f,C(44));m=Gd(f,C(45));g=new JR;h=h;g.lr=b;g.vq=c;n=c|0;if(n!==c){b=new R;T(b);f=K(b,C(46));Zr(f,f.E,c);$rt_globals.console.info($rt_ustr(S(b)));}g.oE=n;g.vy=d;g.v1=e;g.d2=i;g.dE=j;g.vm=l;g.lf=k;g.mE=h;g.qm=Dw(i);g.wY=Dw(g.dE);d=m*32.0|0;n
=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;b:{g.vu=d;switch(e){case 1:break;case 2:b=C(47);break b;default:b=C(48);break b;}b=C(49);}g.vb=b;return g;}
function KC(){B.call(this);this.pr=null;}
function Ij(){var a=this;B.call(a);a.uR=null;a.vN=null;}
function AAe(b){var c,d;if(DT(b))J(Yc(b));if(!AAg(I(b,0)))J(Yc(b));c=1;while(c<H(b)){a:{d=I(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AAg(d))break a;else J(Yc(b));}}c=c+1|0;}}
function AAg(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var K8=F(Ij);
var AQD=null;function AFi(){AFi=Bf(K8);AEV();}
function AEV(){var b,c,d,e,f;b=new K8;AFi();c=O(Bw,0);d=c.data;AAe(C(50));e=d.length;f=0;while(f<e){AAe(d[f]);f=f+1|0;}b.uR=C(50);b.vN=c.f1();AQD=b;}
function OD(){var a=this;B.call(a);a.fx=null;a.uy=null;a.eO=null;a.ik=null;a.jG=null;a.ls=null;a.jX=null;a.lz=null;a.jo=null;a.cL=null;a.gR=null;a.nQ=0;}
function Se(a,b){var c,d,e,f;CV(a.cL);c=(Cc(!b.sf?a.uy:a.fx)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].cY(b);if(f)break;if(b.jd)break;e=e+1|0;}return f;}
function PL(a,b,c){var d,e,f;CV(a.cL);d=(Cc(a.ls)).data;e=d.length;f=0;while(f<e){if(Ko(d[f].n$,b,c))return 1;f=f+1|0;}return 0;}
function Uo(){B.call(this);this.m1=null;}
function AJq(a,b){var c;c=a.m1;if(Se(c.b5,VY(c,b,1)))Dl(c,b);}
function Up(){B.call(this);this.ru=null;}
function AJA(a,b){var c;c=a.ru;if(Se(c.b5,VY(c,b,0)))Dl(c,b);}
function Uq(){B.call(this);this.om=null;}
function AH5(a,b){var c,d,e,f,g,h,i;c=a.om;if(c.di!==null){a:{b:{d=D_(c,b);e=c.b5;CV(e.cL);f=e.gR;if(f!==null)f.m(d);else{g=(Cc(e.eO)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].gN(d))break a;i=i+1|0;}}}}Dl(c,b);}}
function Ur(){B.call(this);this.ue=null;}
function AHy(a,b){var c,d,e,f,g,h;c=a.ue;b.button;if(c.di!==null)a:{d=D_(c,b);c=c.b5;e=b.button;CV(c.cL);if(c.gR===null){f=(Cc(c.eO)).data;g=f.length;h=0;while(h<g){b=f[h].gH(d,e);if(b!==null){c.gR=b;c.nQ=e;break a;}h=h+1|0;}}}}
function Us(){B.call(this);this.qK=null;}
function AHT(a,b){var c,d,e,f,g,h,i;c=a.qK;b.button;if(c.di!==null){d=D_(c,b);e=c.b5;f=b.button;CV(e.cL);if(f==e.nQ&&e.gR!==null)e.gR=null;g=(Cc(e.eO)).data;h=g.length;i=0;a:{while(i<h){if(g[i].gL(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Dl(c,b);}}
function Ut(){B.call(this);this.nr=null;}
function AJ2(a,b){var c,d,e,f,g,h,i,j,k;c=a.nr;if(c.di!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.b5;f=D_(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;CV(e.cL);i=(Cc(e.ik)).data;j=i.length;k=0;b:{while(k<j){if(i[k].gK(f,d,h))break b;k=k+1|0;}}Dl(c,b);}}
function Uu(){B.call(this);this.ur=null;}
function AGa(a,b){var c,d,e,f,g,h,i,j;c=a.ur;if(c.di!==null){d=D_(c,b);e=c.b5;f=b.button;g=b.detail;CV(e.cL);h=(Cc(e.eO)).data;i=h.length;j=0;a:{while(j<i){if(h[j].gp(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Dl(c,b);}}
function Uv(){B.call(this);this.qT=null;}
function AM9(a,b){var c,d,e,f,g,h,i;c=a.qT;if(c.di!==null){d=D_(c,b);e=c.b5;CV(e.cL);f=(Cc(e.jG)).data;g=f.length;h=0;a:{while(h<g){if(Y9(f[h],d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Dl(c,b);}}
function Uw(){B.call(this);this.nH=null;}
function AFr(a,b){var c,d,e;b=a.nH.b5;c=(Cc(b.jo)).data;d=c.length;e=0;while(e<d){c[e].t();e=e+1|0;}CV(b.cL);}
function Ux(){B.call(this);this.ts=null;}
function AKX(a,b){var c,d,e;b=a.ts.b5;c=(Cc(b.lz)).data;d=c.length;e=0;while(e<d){c[e].t();e=e+1|0;}CV(b.cL);}
function VS(){B.call(this);this.sU=null;}
function AMK(a,b){var c;c=a.sU;if(c.di!==null)D_(c,b);}
function VT(){B.call(this);this.rL=null;}
function AHL(a,b){var c,d,e,f,g,h,i,j,k;c=a.rL;if(LV()===c.gv){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cc(c.b5.jX)).data;if(0>=h.length)i=null;else{j=h[0].o8.cw;BU(j);i=new MX;TM(i);i.m6=j;}if(i!==null){j=c.b5.cL;k=new Mx;k.tG=i;k.tH=j;g.getAsString(Bi(k,"accept"));Dl(c,b);}}else{i=$rt_str(g.type);g=$rt_str(g.kind);j=new R;T(j);K(K(K(K(j,C(51)),i),C(52)),g);$rt_globals.console.info($rt_ustr(S(j)));}e=e+1|0;}}}
function VU(){B.call(this);this.l7=null;}
function AH9(a,b){var c;c=a.l7;if(LV()===c.gv&&PL(c.b5,R8(c,b),0))Dl(c,b);}
function VV(){B.call(this);this.tQ=null;}
function AJJ(a,b){var c;c=a.tQ;if(LV()===c.gv&&PL(c.b5,R8(c,b),1))Dl(c,b);}
var Sm=F(0);
var Sz=F();
function Mm(a,b,c,d){var e,f,g,h;e=new Qh;e.jf=d;AQl=AQl+1|0;e.k2=b;e.ka=c;f=(C2()).createElement("canvas");e.hb=f;g=b;f.width=g;f=e.hb;g=c;f.height=g;if(!d)g=e.hb.getContext("2d");else{f=e.hb;h=AC6();g=f.getContext("2d",h);}e.c5=g;f="#FFFFFF";g.fillStyle=f;return e;}
var Sy=F();
function AGX(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Lq(){var a=this;B.call(a);a.iZ=null;a.ci=null;a.kM=null;}
var Ia=F();
var AQm=null;function IA(a,b,c){return b.iR(c);}
function Y3(){AQm=new Ia;}
function AA5(){var a=this;B.call(a);a.gA=null;a.h2=null;a.go=0;}
function Cq(a){var b=new AA5();AF8(b,a);return b;}
function AF8(a,b){a.gA=b;}
function Cs(a,b){var c,d,e;c=a.go;d=a.gA;if(c==d.data.length)a.gA=CX(d,c+4|0);d=a.gA.data;e=a.go;a.go=e+1|0;d[e]=b;a.h2=null;}
function Cc(a){var b;b=a.h2;if(!(b!==null&&b.data.length==a.go))a.h2=CX(a.gA,a.go);return a.h2;}
var DH=F(0);
var Er=F(0);
var Fu=F(0);
var Hh=F(0);
var Lg=F(0);
var Jn=F(0);
var FT=F(0);
var IP=F(0);
function Pb(){B.call(this);this.vF=null;}
function Bq(){var a=this;B.call(a);a.b=0;a.a=0;}
function Cd(a,b){var c=new Bq();AEq(c,a,b);return c;}
function AEq(a,b,c){a.b=b;a.a=c;}
function Cp(a,b){a.b=b.b;a.a=b.a;}
function Bn(a,b,c){a.b=b;a.a=c;}
function AGM(a,b){var c;a:{b:{if(a!==b){if(Bt(b)!==Bt(a))break b;if(!Ho(a,b))break b;}c=1;break a;}c=0;}return c;}
function Ho(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function Uz(){var a=this;B.call(a);a.qD=0;a.qF=0;a.qC=0;a.qB=0;}
var AAt=F();
var Xe=F(0);
function O6(){B.call(this);this.dz=null;}
function Kq(){var a=this;B.call(a);a.bn=null;a.wZ=null;}
function Zt(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(53):C(54);g=$rt_str(b.getShaderInfoLog(e));h=new R;T(h);K(K(h,f),g);g=S(h);b.deleteShader(e);CU(IO(),g);CU(D2(),C(55));CU(D2(),d);CU(D2(),C(55));b=new Bo;Br(b,g);J(b);}
function CB(){var a=this;Kq.call(a);a.nG=null;a.pg=null;a.kW=null;}
function AQM(a,b,c,d){var e=new CB();F_(e,a,b,c,d);return e;}
function F_(a,b,c,d,e){var f,g,h,i,j,k;a.wZ=e;f=Zt(b,35633,c);d=Zt(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bn=g;h=e.rk.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bn;k=c.gC;c=c.pp;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bn;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ABb(b,C(56));a.kW=new Bq;c=a.bn;a.nG=b.getUniformLocation(c,"uResolution");c=a.bn;a.pg=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bo;c=new R;T(c);K(K(c,C(57)),d);Br(b,S(c));J(b);}
function XZ(a,b,c){var d,e,f;if(!Ho(a.kW,c)){Cp(a.kW,c);d=a.nG;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function H3(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.pg;b.uniform4f(e,i,l,h,j);XZ(a,b,f);}
function T7(){CB.call(this);this.tk=null;}
function D$(){CB.call(this);this.qI=null;}
function ANG(a){var b=new D$();AG0(b,a);return b;}
function AQN(a,b){var c=new D$();J5(c,a,b);return c;}
function AQO(a,b,c){var d=new D$();Sg(d,a,b,c);return d;}
function AG0(a,b){J5(a,b,C(58));}
function J5(a,b,c){Sg(a,b,C(41),c);}
function Sg(a,b,c,d){GJ();F_(a,b,c,d,AQK);c=a.bn;a.qI=b.getUniformLocation(c,"sDiffuse");}
function Sr(a,b,c){var d;d=a.qI;b.uniform1i(d,0);b.activeTexture(33984);c=c.eA;b.bindTexture(3553,c);}
var Ys=F(CB);
function AOH(a){var b=new Ys();AMg(b,a);return b;}
function AMg(a,b){GJ();F_(a,b,C(41),C(59),AQK);}
function YJ(){D$.call(this);this.u1=null;}
function AO2(a){var b=new YJ();AJp(b,a);return b;}
function AJp(a,b){var c;J5(a,b,C(60));c=a.bn;a.u1=b.getUniformLocation(c,"uContrast");}
function Fq(){var a=this;D$.call(a);a.ow=null;a.pC=null;a.q0=null;}
function AQP(a,b,c){var d=new Fq();VF(d,a,b,c);return d;}
function VF(a,b,c,d){Sg(a,b,c,d);c=a.bn;a.ow=b.getUniformLocation(c,"uTexTransform");c=a.bn;a.pC=b.getUniformLocation(c,"uColor");c=a.bn;a.q0=b.getUniformLocation(c,"uBgColor");}
function RO(a,b,c,d){Hq(b,a.pC,c);Hq(b,a.q0,d);}
function LJ(a,b,c,d){var e,f,g,h,i,j;c=c.eq;e=c.b;f=c.a;g=d.bk;h=e;g=g/h;i=d.bA;j=f;i=i/j;h=d.Y/h;j=d.bV/j;c=a.ow;b.uniform4f(c,g,i,h,j);}
function ZI(){Fq.call(this);this.or=null;}
function AOd(a){var b=new ZI();AJX(b,a);return b;}
function AJX(a,b){var c;VF(a,b,C(61),C(62));c=a.bn;a.or=b.getUniformLocation(c,"uContrast");}
var ABk=F(Fq);
function APi(a){var b=new ABk();AEU(b,a);return b;}
function AEU(a,b){VF(a,b,C(61),C(63));}
function XB(){var a=this;D$.call(a);a.xF=null;a.xE=null;a.v3=null;}
function AO_(a){var b=new XB();AEW(b,a);return b;}
function AEW(a,b){var c,d;J5(a,b,C(64));c=a.bn;a.xF=b.getUniformLocation(c,"uColorB");d=a.bn;a.xE=b.getUniformLocation(d,"uColorF");d=a.bn;a.v3=b.getUniformLocation(d,"uContrast");}
function ZH(){var a=this;CB.call(a);a.vc=null;a.uO=null;a.uN=null;}
function AOX(a){var b=new ZH();AEY(b,a);return b;}
function AEY(a,b){var c;GJ();F_(a,b,C(41),C(65),AQK);c=a.bn;a.vc=b.getUniformLocation(c,"uColor");c=a.bn;a.uO=b.getUniformLocation(c,"uPoints1");c=a.bn;a.uN=b.getUniformLocation(c,"uPoints2");}
function Xa(){var a=this;CB.call(a);a.mt=null;a.q3=null;a.oB=null;}
function AOY(a){var b=new Xa();ADm(b,a);return b;}
function ADm(a,b){var c;GJ();F_(a,b,C(41),C(66),AQK);c=a.bn;a.mt=b.getUniformLocation(c,"uColor");c=a.bn;a.q3=b.getUniformLocation(c,"uBaseline");c=a.bn;a.oB=b.getUniformLocation(c,"uScaleHExp");}
function ZY(a,b,c,d,e){var f;f=a.q3;b.uniform2f(f,c,d);Hq(b,a.oB,e);}
var QD=F(0);
var ABz=F(0);
function Hq(b,c,d){var e,f,g,h;e=d.bk;f=d.bA;g=d.Y;h=d.bV;b.uniform4f(c,e,f,g,h);}
function ABb(b,c){var d,e;d=b.getError();if(d){b=IO();e=new R;T(e);Bk(K(e,c),d);CU(b,S(e));}}
function O4(){var a=this;B.call(a);a.vd=null;a.vf=null;a.ve=null;}
function O5(){var a=this;B.call(a);a.dX=null;a.fT=null;a.mq=null;a.uf=null;a.tA=null;a.q5=0;a.tT=0;}
function Cg(){var a=this;B.call(a);a.u_=null;a.fR=0;}
function C4(a,b,c){a.u_=b;a.fR=c;}
function F3(){var a=this;Cg.call(a);a.rk=null;a.lN=null;a.qr=null;a.jS=0;a.o9=0;a.rI=0;}
var AQK=null;var AQQ=null;function GJ(){GJ=Bf(F3);AGx();}
function AGx(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new F3;c=O(Dz,2);d=c.data;AL5();d[0]=AQR;d[1]=AQS;GJ();C4(b,C(67),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.ld.fR){case 0:f=f+l.eK|0;h=h+1|0;break a;case 1:e=e+l.eK|0;g=g+1|0;break a;default:}}i=i|1<<l.gC;k=k+1|0;}b.rk=c;b.jS=e;b.o9=f;b.rI=i;c=O(Dz,g);m=c.data;b.lN=c;c=O(Dz,h);n=c.data;b.qr=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.ld.fR){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}AQK
=b;c=O(F3,1);c.data[0]=b;AQQ=c;}
var J7=F(FA);
var AQp=null;function AGP(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Z2(){var b;b=new J7;V3(b);AQp=b;}
function Dz(){var a=this;Cg.call(a);a.pp=null;a.ld=null;a.eK=0;a.oJ=0;a.gC=0;}
var AQR=null;var AQS=null;var AQT=null;function AL5(){AL5=Bf(Dz);AFU();}
function AOs(a,b,c,d,e,f,g){var h=new Dz();TZ(h,a,b,c,d,e,f,g);return h;}
function TZ(a,b,c,d,e,f,g,h){AL5();C4(a,b,c);a.pp=d;a.ld=e;a.eK=f;a.oJ=g;a.gC=h;}
function AFU(){var b;b=new Dz;AH2();TZ(b,C(68),0,C(69),AQU,2,0,0);AQR=b;b=AOs(C(70),1,C(71),AQU,2,0,1);AQS=b;AQT=G(Dz,[AQR,b]);}
function AAm(){BI.call(this);this.u$=null;}
function Yc(a){var b=new AAm();ALl(b,a);return b;}
function ALl(a,b){W(a);a.u$=b;}
var TA=F(DD);
var Xy=F();
var F7=F(Cg);
var AQV=null;var AQU=null;var AQW=null;function AH2(){AH2=Bf(F7);AEu();}
function AER(a,b){var c=new F7();AAx(c,a,b);return c;}
function AAx(a,b,c){AH2();C4(a,b,c);}
function AEu(){var b;AQV=AER(C(72),0);b=AER(C(73),1);AQU=b;AQW=G(F7,[AQV,b]);}
var K6=F(0);
function Vt(){B.call(this);this.pc=null;}
function AKz(a,b){a.pc.setPointerCapture(b.pointerId);}
function Vu(){B.call(this);this.nZ=null;}
function ADl(a,b){a.nZ.releasePointerCapture(b.pointerId);}
function Gf(){var a=this;B.call(a);a.tV=0;a.ck=0;a.d0=0;a.il=0;}
function TV(a,b){a.il=(-1);a.tV=b;a.d0=b;}
function Ez(a){return a.d0-a.ck|0;}
function Fa(a){return a.ck>=a.d0?0:1;}
var QX=F(0);
var JT=F(Gf);
function Q9(a,b){var c,d,e;if(b>=0&&b<=a.d0){a.ck=b;if(b<a.il)a.il=0;return a;}c=new BI;d=a.d0;e=new R;T(e);BY(Bk(K(Bk(K(e,C(74)),b),C(75)),d),93);Br(c,S(e));J(c);}
var YE=F();
function WP(b){return Math.log(b);}
function ABB(b,c){return AHR(b,c);}
function AHR(b,c){return Math.pow(b,c);}
function Be(b,c){if(b<c)c=b;return c;}
function Ba(b,c){if(b>c)c=b;return c;}
function AMm(b,c){return Math.max(b,c);}
function IS(){var a=this;Gf.call(a);a.pF=0;a.rp=null;a.wd=null;}
function UT(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.ml){e=new VP;W(e);J(e);}if(Ez(a)<d){e=new PF;W(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BT;j=new R;T(j);Bk(K(Bk(K(j,C(76)),h),C(77)),g);Br(i,S(j));J(i);}if(d<0){e=new BT;i=new R;T(i);K(Bk(K(i,C(78)),d),C(79));Br(e,S(i));J(e);}h=a.ck;k=h+a.pF|0;l=0;while(l<d){b=a.rp.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.ck=h+d|0;return a;}}b=b.data;e=new BT;d=b.length;i=new R;T(i);BY(Bk(K(Bk(K(i,C(80)),c),C(75)),d),41);Br(e,
S(i));J(e);}
function MZ(a){a.ck=0;a.d0=a.tV;a.il=(-1);return a;}
function GT(){B.call(this);this.xi=null;}
var AQH=null;var AQG=null;var AQF=null;function AL8(){AL8=Bf(GT);AHN();}
function AA8(a){var b=new GT();AAb(b,a);return b;}
function AAb(a,b){AL8();a.xi=b;}
function AHN(){AQH=AA8(C(81));AQG=AA8(C(82));AQF=AA8(C(83));}
function I_(){var a=this;KC.call(a);a.mZ=null;a.et=null;}
var Ny=F(0);
var Op=F(0);
function O7(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new He;c=new HE;d=new HS;AE$();IQ(d,AQX);K9(c,d,BA(AQY),BA(AQZ),BA(AQ0),BA(AQY),BA(AQ1),BA(AQ2),BA(AQ3),BA(AQ4),BA(AQ5),BA(AQ6));S$();e=(AQ7.f1()).data;f=e.length;g=O(H0,f);h=g.data;i=0;while(i<f){h[i]=e[i].hl;i=i+1|0;}j=ZL(N(C(84)),N(C(85)),N(C(86)),N(C(87)));k=new Hk;l=new Hw;ACi();m=AQ8;Lc(l,m,AQ9,AQ$,AQ_,ARa,m);Kk(k,l,AAF(),ABf(N(C(88)),N(C(89)),N(C(90))),AAF(),We(1,0.17499999701976776),ARb,ARc);H6(b,c,g,j,k,Ww(N(C(91)),N(C(92)),N(C(93)),N(C(94))));I0(a,b);}
var Tg=F(0);
function Wl(){var a=this;I_.call(a);a.cw=null;a.eV=null;}
function AO7(a){var b=new Wl();AMY(b,a);return b;}
function AMY(a,b){var c,d,e,f,g;a.pr=b;a.mZ=IW(0,0,64,255,new B4);c=new SC;c.cA=new Bq;c.jv=Cq(O(HQ,0));c.dT=new Bq;c.sW=new Bq;c.uK=new B4;c.uL=new B4;d=b.iZ;c.ds=d;e=b.kM;c.gf=e;c.cx=d.kC;d=new Qs;d.tg=e;c.c7=d;d=b.ci.jo;e=new OX;e.qG=c;Cs(d,e);d=b.ci.lz;e=new OV;e.ua=c;Cs(d,e);a.et=c;Cs(b.ci.fx,new QI);c=b.ci.fx;d=a.et;BU(d);e=new QH;e.nz=d;Cs(c,e);c=new Qc;d=a.et;e=new U$;e.c3=Bz();c.dw=e;c.dS=d;f=new TT;f.b9=Bz();f.iI=ARd;f.cz=d;Cs(d.jv,f);c.bM=f;a.eV=c;d=AN$(a.et,c);a.cw=d;c=a.et;g=c.gf.dl!==(C2()).activeElement
?0:1;if(g)I1(c);c.ed=d;if(g)ID(c);Cs(b.ci.eO,a.eV);Cs(b.ci.ik,a.eV);Cs(b.ci.eO,a.cw);c=b.ci.fx;d=new Ol;d.vB=a;Cs(c,d);c=b.ci.fx;d=new Qe;e=a.cw;BU(e);f=new Oj;f.tF=e;e=null;d.mW=b.kM;d.pf=e;d.oy=f;Cs(c,d);c=b.ci.ls;d=a.cw;BU(d);e=new Ok;e.n$=d;Cs(c,e);c=b.ci.jX;d=new MR;d.o8=a;Cs(c,d);c=b.ci.ik;d=new MS;d.un=a;Cs(c,d);b=b.ci.jG;c=new MQ;c.mH=a;Cs(b,c);O7(a);}
function P1(a,b){var c,d,e,f;c=a.et;if(c.cx==b)b=0;else{c.cx=b;IF(c.gf);b=1;}if(b){c=a.eV;d=BM(c.bM.b9);while(BN(d)){Kv(BQ(d));}c=c.dw;b=0;while(true){d=c.c3;if(b>=d.j)break;(Bp(d,b)).K.gh=1;b=b+1|0;}c=a.cw;d=c.ff;b=c.bG.cx;d.lw=b;if(c.he.jf!=b)Pg(c);e=c.e8.data;b=e.length;f=0;while(f<b){d=e[f].bx;if(d!==null)d.f9=1;f=f+1|0;}IR(c.c6);Kg(c);}}
function Ja(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=a.pr.iZ;c=a.mZ;d=b.Z;e=c.bk;f=c.bA;g=c.Y;h=c.bV;d.clearColor(e,f,g,h);b.Z.clear(16384);Wd(a.cw);b=a.eV;c=b.dw;d=b.dS.ds;i=c.c3.j-1|0;while(i>=0){j=Bp(c.c3,i);j.N.jE(d);k=j.K;l=j.fy.hi;if(!Jl(k)){if(!Uh(k)&&!(!k.gh&&k.cI!==null)){k.gh=0;Th(k);m=k.em;f=(m.d2+m.dE+5.0)/10.0;n=Ck(k.eM,k.is);m=d.dd;o=k.em;p=k.gb;e=f*2.0;CF(m,o);q=n+Jz(m,p,e)|0;k.hz=q;q=Fh(0,q,k.o.b);if(q){m=EY(d,q,k.o.a,k.eM.cx);CF(m,k.em);o=k.gb;e=n;f=e+f;p=k.em;g=p.d2;Ej(m,o,f,e+g-(g+p.dE)
/16.0);o=k.cI;if(o===null){o=Gv(d);k.cI=o;}Em(o,m);K3(m);Cb(k.hr,0.0,0.0,Cf(k.cI),Kn(k.cI));}}m=l.q6;o=k.cI;if(o===null)Oi(k,d,0,k.o.b,m);else{n=Cf(o);o=l.tj;if(k.eM.cx){p=k.D;q=p.b;r=p.a;p=k.cI;Ek(d,q,r,p.eq,k.hr,p,o,m);}else{p=k.D;q=p.b;r=p.a;l=k.cI;Eh(d,q,r,l.eq,k.hr,l,o,m,0.0);}q=k.o.b;if(n<q)Oi(k,d,n,q-n|0,m);}}DP(d,1);n=Ck(j.bi,2.0);q=Jl(j.K);m=j.bi;o=m.dT;m=m.sW;r=q?0:j.K.o.a;p=j.N.o;Bn(m,p.b,p.a+r|0);XP(d,m,!q?j.K.D:j.N.D,j.fy.hi.kj, -n|0,o);m=j.N;Zy(d,m.o,m.D,n,r,NY(j.fy.hW,j.bi.bW),j.fy.hW.k9,o);i
=i+(-1)|0;}b=b.bM;if(!DO(b.b9)){DP(b.cz.ds,1);n=0;while(true){c=b.b9;if(n>=c.j)break;AAX(Bp(c,n),b.cz);n=n+1|0;}}}
function Lt(a,b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=a.et;Cp(d.cA,b);if(d.bW!==c){d.bW=c;e=(Cc(d.jv)).data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];d.it=HW(d.cz,d.h7);h=BM(d.b9);while(BN(h)){OK(BQ(h),d.it,d.cz);}g=g+1|0;}}}h=a.cw;d=new Bq;i=h.ff;RQ(i.gW);j=i.gW;k=c>=0.5?c:0.25;l=k>=4.0?0.5:ABB(j.bV,ABB(k,ARe));Cb(j,j.bk/k,j.bA*k,AMm(j.Y*k,1.25),l);j=i.gW;k=j.bA;i.rc=k-(k|0)>=0.25?0.0:0.5;m=k+j.Y+1.5|0;i.t5=m;Bn(i.jA,0,m*2|0);Cp(h.U,d);Cp(h.cr,b);Rs(h,d,b,c);}
function I0(a,b){var c,d,e;BU(b);c=a.eV;c.gm=b;d=c.cC;if(d!==null)d.fy=b.fm;c=c.bM;d=b.fm;c.h7=b.tt;c.k_=d;d=BM(c.b9);while(BN(d)){Pm(BQ(d),c.k_);}c=a.cw;c.cs=b;d=c.cy;e=b.bI.up;Fe(d.dR.eR,e);d=c.es;e=b.bI;F9(d,e.j7,e.kf);c=c.eu;b=b.bI;F9(c,b.j7,b.kf);}
var Zp=F(0);
function ZJ(b){var c,d;c=b.length;d=new Mr;d.sw=b;return Wg(c,d);}
function PV(){var a=this;B.call(a);a.hD=null;a.vx=null;}
function Tm(){B.call(this);this.rn=null;}
function AKT(a,b){var c,d,e,f;b=a.rn;if(B7(AP9,b)!==null){c=new R;T(c);K(K(c,C(95)),b);$rt_globals.console.info($rt_ustr(S(c)));}else{AP7=b;c=B7(AP8,b);if(c!==null)Ul(c);else{c=new R;T(c);K(K(c,C(96)),b);$rt_globals.console.info($rt_ustr(S(c)));c=$rt_globals.fetch($rt_ustr(b));d=new OO;c=c.then(Bi(d,"f"));d=new OW;d.n7=b;e=new OY;c.then(Bi(d,"f"),Bi(e,"f"));}f=Wr(C(97));c=new R;T(c);K(K(c,C(98)),b);b=$rt_ustr(S(c));f.innerText=b;}}
var YT=F();
var IZ=F(JT);
function P3(){var a=this;IZ.call(a);a.xH=0;a.s8=0;a.qd=null;}
function JG(){var a=this;B.call(a);a.u7=null;a.pn=null;a.wB=0.0;a.lO=0.0;a.k1=null;a.kb=null;a.hV=0;}
function Ky(){var a=this;B.call(a);a.g1=0;a.nt=0;}
var AQJ=null;var AQI=null;function W7(a,b){var c=new Ky();XI(c,a,b);return c;}
function XI(a,b,c){a.g1=b;a.nt=c;}
function KK(a){return a.g1!=1?0:1;}
function UQ(a){return a.g1!=3?0:1;}
function J3(b){return W7(2,b);}
function X0(){AQJ=W7(0,0);AQI=W7(1,0);}
function Qc(){var a=this;B.call(a);a.dS=null;a.dw=null;a.cC=null;a.bM=null;a.gm=null;}
function AJw(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.dw;d=0;a:{while(true){e=c.c3;if(d>=e.j)break;b:{f=Bp(e,d);e=b.u;if(Dd(f.K,e))g=Dv(f.bi.c7,null);else{h=Ck(f.bi,7.0);i=Ck(f.bi,25.0);if(M5(f,e.b,h)){g=MB(f,e.b,i);if(N4(f,e.a,h)){g=Dv(f.bi.c7,KB(g,C(99)));break b;}if(Mu(f,e.a,h)){g=Dv(f.bi.c7,KB( -g|0,C(99)));break b;}}if(Un(f,e.a,h)){g=UW(f,e.a,i);if(VX(f,e.b,h)){g=Dv(f.bi.c7,KB(g,C(100)));break b;}if(LO(f,e.b,h)){g=Dv(f.bi.c7,KB( -g|0,C(100)));break b;}}g=0;}}c:{d:{if(!g){if(!Dd(f.N,b.u))break d;if(!f.N.gN(b)
&&!Dv(f.bi.c7,null))break d;}g=1;break c;}g=0;}if(g){g=1;break a;}d=d+1|0;}g=0;}e:{if(!g){c=a.bM;g=0;j=c.b9.j-1|0;f:{while(j>=0){e=Bp(c.b9,j);k=b.u;f=c.cz.c7;g=G$(e.b1,k);d=!g?(-1):Mv(e,k);h=e.hL;if(h!=d){if(h>=0){l=e.cb.data[h];l.f7=0;m=e.uQ;if(m!==null)m.x3(k,h,l);}if(d>=0){k=e.cb.data[d];l=e.ou;if(l!==null){m=l.og;n=l.oh;l=l.oi;R3(m,n);if(l!==null)k.jp.t();if(S4(k)){if(k.kx===null)Na(m,Yl(k,n),k.h0,n);else UR(m,Yl(k,n),k.h0,n,k.kx);}}k.f7=1;}e.hL=d;}g=g&&Fl(f)?1:0;if(g)break f;j=j+(-1)|0;}}if(!g){g=0;break e;}}g
=1;}return g;}
function AMd(a,b,c,d){var e,f,g,h,i;e=a.dw;f=0;a:{while(true){g=e.c3;if(f>=g.j)break;b:{c:{h=Bp(g,f);if(!Dd(h.K,b.u)){if(!Dd(h.N,b.u))break c;if(!h.N.gp(b,c,d))break c;}i=1;break b;}i=0;}if(i){c=1;break a;}f=f+1|0;}c=0;}d:{if(!c){g=a.bM.b9;d=g.j-1|0;i=1;if(d<0)i=0;else{g=Bp(g,d);c=Mv(g,b.u);if(c>=0){b=g.cb.data[c];if(!S4(b))b.jp.t();}}if(!i){c=0;break d;}}c=1;}return c;}
function AKo(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.bM;e=null;f=d.b9.j-1|0;a:{while(f>=0){e=Bp(d.b9,f);g=b.u;h=G$(e.b1,g);if(!h&&!Jb(e.b1)){e=e.sB;if(e!==null)Do(e.rq);}e=!h?null:ARf;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;e=a.dw;h=0;b:{while(true){g=e.c3;if(h>=g.j){g=null;break b;}c:{i=Bp(g,h);if(!c){d:{g=b.u;if(!Jl(i.K)&&Dd(i.K,g)){d=i.N.D;j=d.b;k=g.b;l=j-k|0;j=d.a;f=g.a;j=j-f|0;g=i.K.D;m=g.b-k|0;f=g.a-f|0;d=new Bq;g=new MD;g.mO=i;g.mP=m;g.mQ=f;g.mR=d;g.mK=l;g.mM=j;}else{j=Ck(i.bi,7.0);f=Ck(i.bi,
25.0);if(M5(i,g.b,j)){m=MB(i,g.b,f);if(N4(i,g.a,j)){g=Hz(i,g,m,(-1));break d;}if(Mu(i,g.a,j)){g=Hz(i,g,m,1);break d;}}if(Un(i,g.a,j)){f=UW(i,g.a,f);if(VX(i,g.b,j)){g=Hz(i,g,(-1),f);break d;}if(LO(i,g.b,j)){g=Hz(i,g,1,f);break d;}}g=null;}}if(g!==null)break c;}g=Dd(i.K,b.u)?ARf:i.N.gH(b,c);i=i.N;if(i===null)g=null;else if(g===null)g=!Dd(i,b.u)?null:ARf;}if(g!==null)break;h=h+1|0;}}return g;}
function AHi(a,b,c){var d,e,f,g,h;d=a.dw;e=0;a:{while(true){f=d.c3;if(e>=f.j)break;b:{c:{g=Bp(f,e);if(!Dd(g.K,b.u)){if(!Dd(g.N,b.u))break c;if(!g.N.gL(b,c))break c;}h=1;break b;}h=0;}if(h){c=1;break a;}e=e+1|0;}c=0;}return !c&&!Fr(a.bM)?0:1;}
function PN(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r;f=null;g=d.d;h=Bz();i=c.j;j=0;while(j<i){if(f===null){k=(Bp(c,j)).X;l=QA(EA(BG(g.f,k)));m=Rr(g.eN);}else{m=f.data;k=m[j].kq.j9;l=!BB(g.eN,m[j].ig)?C(5):QA(EA(BG(g.f,k)));m=Rr(m[j].ig);}if(H(l)>153){l=B9(l,0,150);n=new R;T(n);K(K(n,l),C(101));l=S(n);}if(H(m)>153){n=B9(m,0,150);m=new R;T(m);K(K(m,n),C(101));m=S(m);}o=DX(k+1|0);if(f!==null){p=f.data;n=null;q=p[j];}else{q=null;n=Bp(c,j);}if(f!==null){p=new U8;p.ph=d;p.pi=q;}else{p=new U9;p.tK=d;p.tJ=n;}n=new Jd;n.q_
=p;n.hU=o;n.h5=l;n.fp=m;Bv(h,n);j=j+1|0;}r=GY(h,ARg);if(a.cC!==null)RJ(a);c=new Pc;l=a.dS;m=new O1;m.l3=a;m.l4=d;Ks(c);c.cE=new Bq;c.bz=new Bq;c.dh=AHm();c.fZ=new Bq;c.bO=ARg;c.dG=O(Hy,0);c.df=0;c.dO=0;c.fi=0;c.eJ=0;c.ew=0;c.dH=ACQ(0);c.gs=FS();c.bS=l;c.hM=m;c.uk=m;N0(c);R_(c);c.bO=r;d=a.gm;l=d.fm;d=d.t6;c.pK=l;c.sA=d;c.dy=null;c.dH=null;c.ec=0;R_(c);d=new SV;l=a.dS;d.N=ANt();d.bi=l;m=new TC;Ks(m);m.hr=new B4;m.eM=l;d.K=m;a.cC=d;d=new Ow;l=a.dS.c7;Ks(d);m=new M$;m.pI=d;d.n3=m;m=new M9;m.qH=d;d.sn=m;d.ti=10.0;d.bl
=c;d.lD=l;c.f0=d;l=a.gm.fm;m=l.oe;l=l.m9;d.t4=m;d.t1=l;h=d.cF;if(h!==null)F9(h,m,l);h=d.cM;if(h!==null)F9(h,m,l);l=a.cC;m=l.N;h=m.D;g=m.o;d=CZ(m,d);l.N=d;d.kO(h,g,l.bi.bW);d=a.cC;l=APb();K(K(l,C(102)),e);Yn(d,GM(l),a.gm.sT,4.0);Y2(a.cC,a.gm.fm);Wv(a.dw,a.cC);b=AAq(c,b,ABv(a.cC)+Ck(a.dS,2.0)|0);d=AA2(c,b);JU(a.cC,b,d);HO(a.dS,c);}
function RJ(a){var b,c;b=a.dw;c=a.cC;TO(b.c3,c);b=a.cC;c=b.K;c.cI=CZ(c.cI,null);b.N=CZ(b.N,null);a.cC=null;}
function Pu(a,b){var c;c=new O9;c.mw=a;c.mx=b;return c;}
function AKG(a,b,c,d){var e,f,g,h;e=a.dw;f=0;a:{while(true){g=e.c3;if(f>=g.j)break;if((Bp(g,f)).N.gK(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function XA(b){var c;c=new VD;c.lX=b;return c;}
var GN=F(0);
function AIP(a){}
function AFk(a){}
var OF=F(0);
var OT=F(0);
function X$(){var a=this;B.call(a);a.U=null;a.cr=null;a.bG=null;a.L=null;a.iu=null;a.ut=0;a.lA=null;a.cy=null;a.kG=0;a.fh=0;a.iE=null;a.gE=null;a.bY=null;a.M=0;a.d=null;a.eo=null;a.cs=null;a.he=null;a.e8=null;a.sY=0;a.qS=0;a.co=0;a.bX=0;a.b6=0;a.ex=null;a.es=null;a.eu=null;a.gq=0;a.i3=0;a.hs=0;a.xz=0;a.vh=0;a.iK=0;a.ib=0;a.k0=0;a.dq=0;a.c6=null;a.ej=null;a.ez=0;a.by=0;a.uZ=null;a.hc=null;a.v7=null;a.wU=null;a.vI=null;a.bj=0;a.ff=null;a.pk=0;a.nL=null;a.sI=null;}
function AN$(a,b){var c=new X$();AJ5(c,a,b);return c;}
function AJ5(a,b,c){var d,e,f,g,h;a.U=new Bq;a.cr=new Bq;a.ut=0;a.lA=O(Bh,10);d=new Or;e=new Vn;f=new Bq;e.cG=f;e.bp=new Bq;e.eR=new B4;e.hg=new B4;Bn(f,0,0);Bn(e.bp,2,20);d.dR=e;d.jl=0.5;d.gu=0.0;IW(187,187,187,255,e.eR);a.cy=d;a.fh=16;a.iE=C(103);a.bY=O(JR,4);a.d=AD4(O(Bw,0),null,null);e=new Ve;e.oX=Cq(O(I8,0));e.uq=Cq(O(I8,0));e.mi=Cq(O(Rx,0));e.to=Cq(O(OQ,0));e.sX=Cq(O(Gb,0));e.sF=Cq(O(Ra,0));a.eo=e;a.e8=O(EK,0);a.ex=Cd(1,0);a.es=To();a.eu=To();a.gq=0;a.hs=1;a.iK=1;a.ib=1;a.k0=1;a.dq=3;a.c6=AMf();a.ej=C(104);a.ez
=0;a.by=0;e=D2();BU(e);f=new ML;f.wN=e;a.hc=f;a.bj=0;e=new MK;e.lZ=a;a.nL=e;e=new MJ;e.p_=a;a.sI=e;a.bG=b;a.L=b.ds;a.iu=c;c=new S9;g=a.bY;c.iG=new B4;c.fU=new Bq;c.jA=new Bq;e=new B4;c.gW=e;c.jC=g;RQ(e);a.ff=c;g=a.lA.data;e=new MI;e.s7=a;g[0]=e;e=new MP;e.nF=a;g[1]=e;e=new MO;e.rb=a;g[2]=e;e=new MN;e.uB=a;g[3]=e;e=new MM;e.nj=a;g[4]=e;e=new MH;e.qu=a;g[5]=e;e=new MG;e.ty=a;g[6]=e;AB$();h=ARh===ARi?0:1;a.i3=h;c.k3=!h?0.0:0.5;c.lw=b.cx;}
function Rs(a,b,c,d){var e,f,g,h;a.co=Cn(80.0,d);a.bX=Cn(1.0,d);a.b6=Cn(10.0,d);if(!a.by)Cp(a.bG.dT,a.U);else Bn(a.bG.dT,(b.b+c.b|0)-H$(a)|0,b.a);b=a.c6;e=a.bG.dT;f=H$(a);g=c.a;h=d;Cp(b.eT,e);Bn(b.ei,f,g);b.hR=h;b=a.cy;f=Cn(2.0,d);b.dR.bp.b=f;PM(a,a.iE,a.fh);Kg(a);}
function AFa(a){a.kG=1;Kb(a);}
function ACz(a){a.kG=0;}
function Kb(a){var b;b=a.cy;b.gu=Ms(Fc(a))+b.jl*1.25;b.fv=1;}
function Pg(a){a.he=CZ(a.he,EY(a.L,1024,a.M,a.bG.cx));}
function H9(a,b,c){if(a.bG.bW!==0.0){PM(a,b,c);IF(Fc(a));}a.fh=c;a.iE=b;}
function PM(a,b,c){var d,e,f,g,h,i,j;d=Cn(c,a.bG.bW);e=a.gE;f=e!==null?e.oE:0;if(!(d==f&&BB(b,a.iE))){IR(a.c6);g=a.e8.data;c=g.length;f=0;while(f<c){Vz(g[f]);f=f+1|0;}g=a.d.f.v.data;c=g.length;f=0;while(f<c){DY(g[f]);f=f+1|0;}g=a.bY.data;h=Gy(0,0);e=a.L;i=d;g[h]=F8(e,b,i,300,0);a.bY.data[Gy(0,1)]=F8(a.L,b,i,300,2);a.bY.data[Gy(1,0)]=F8(a.L,b,i,600,0);a.bY.data[Gy(1,1)]=F8(a.L,b,i,600,2);e=a.bY.data[Gy(0,0)];a.gE=e;c=Fk(e);f=Dw(c*1.25);a.M=f;e=a.ff;e.uM=f;g=a.bY.data;j=g[0];e.tS= -( -((f+j.d2+j.dE)/2.0)|0)|0;a.cy.dR.bp.a
=Fk(g[0]);Pg(a);f=a.M;h=U1(a.cy);e=new R;T(e);b=K(K(e,C(105)),b);BY(b,32);Bk(K(Bk(K(Bk(K(Bk(b,d),C(106)),c),C(107)),f),C(108)),h);$rt_globals.console.info($rt_ustr(S(e)));if(ARj){c=JC(a.bY.data[0],a.M);b=new R;T(b);Bk(K(b,C(109)),c);$rt_globals.console.info($rt_ustr(S(b)));}a.d.gk=FK(EW(a),a.d.s,a.L.dd,a.bY);Ga(a);Kg(a);}}
function Lm(a){return V(Ci(a.d.f)+5|0,a.M);}
function IT(a){return Ba(Lm(a)-a.cr.a|0,0);}
function RM(a){return Ba(a.gq-C8(a)|0,0);}
function C8(a){var b;b=!a.by?0:CJ(a)+a.b6|0;return Ba(1,(a.cr.b-a.co|0)-b|0);}
function H$(a){return a.by?a.co:a.co-a.b6|0;}
function De(a){return a.cr.a;}
function E8(a,b){var c,d;c=Sk(b,IT(a));if(c!=a.bj){a.bj=c;a.d.i_=c/a.M;d=a.wU;if(d!==null)d.va(c);}}
function HK(a,b){var c,d;c=Sk(b,RM(a));d=a.d;if(c!=d.cV){d.cV=c;d=a.v7;if(d!==null)d.va(c);}}
function Wd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=HG(a.cr.a,a.M)+7|0;c=a.e8;if(c.data.length<b)a.e8=XC(b,c,a.ff,a.sY,a.qS,a.d.f);DP(a.L,0);Qp(a.L,a.U,a.cr);d=(a.M-U1(a.cy)|0)/2|0;e=(a.d.gk-(RH(a.cy)/2|0)|0)-a.d.cV|0;f=!a.by?a.co:(a.bX+a.b6|0)+CJ(a)|0;g=a.cy;b=f+e|0;d=(d+V(a.d.n,a.M)|0)-a.bj|0;Bn(g.dR.cG,b,d);h=Ci(a.d.f);i=Ki(a);j=SW(a);a.sY=i;a.qS=j;k=!a.by?a.U.b+a.co|0:((a.U.b+a.bX|0)+a.b6|0)+CJ(a)|0;l=i;while(l<=j&&l<h){m=BG(a.d.f,l);g=TB(a,l);Wc(g,m,a.he,a.L,a.M,C8(a),a.d.cV);n=g.bx;a.gq=Ba(a.gq,
Eq(m)+(40.0*a.bG.bW|0)|0);o=V(a.M,l)-a.bj|0;p=Cy(a)===null?null:(Cy(a)).data[l];d=a.U.a+o|0;m=a.L;f=C8(a);q=a.M;o=a.d.cV;r=a.cs;s=Zz(Z(a),l);if(s!==null){if(s.a==(-1))s.a=n.z;s.b=FK(n,s.b,a.L.dd,a.bY);s.a=FK(n,s.a,a.L.dd,a.bY);}t=a.d;Xp(g,d,k,m,f,q,o,r,s,t.gU,t.gD,t.n!=l?0:1,Cy(a)===null?0:1,p);l=l+1|0;}r=a.bG.dT;l=i;while(l<=j&&l<h&&a.iK){g=TB(a,l);o=V(a.M,l)-a.bj|0;u=AAz(Z(a),l);t=a.cs.bI.pG;v=a.d.n==l&&Cy(a)===null?1:0;if(u)t=a.cs.bI.lu;else if(Cy(a)!==null&&l<(Cy(a)).data.length&&(Cy(a)).data[l]!==null)
{t=a.cs;t=J4(t.dA,t,(Cy(a)).data[l].jH);}else if(v)t=a.cs.bI.hB;Xw(g,a.L,k,a.U.a+o|0,a.M,r,a.d.cV,C8(a),t);l=l+1|0;}if(a.hs){q=Be(j+1|0,h);Y0(a,V(a.M,q)-a.bj|0);}ZV(a);Zb(a,i,j);if(a.ib)ABn(a,i,j,h);if(a.kG&&e>=(( -RH(a.cy)|0)/2|0)){g=a.cy;t=a.cr;if(Xf(g.dR.cG,0,0,t))Z$(a.cy,a.L,a.U);}Zv(a);YK(a);Kw(a.L);}
function ABn(a,b,c,d){var e,f,g,h,i,j;while(b<=c&&b<d){e=Cy(a)!==null&&b<(Cy(a)).data.length?(Cy(a)).data[b]:null;if(e!==null){f=a.cs;f=J4(f.dA,f,e.jH);}else f=Cy(a)!==null?a.cs.bI.fQ:a.cs.bI.hB;if(!(a.d.n!=b&&e===null)){a.ex.b=!a.by?(a.b6-a.bX|0)-a.dq|0:((a.b6+CJ(a)|0)+a.bX|0)-a.dq|0;g=a.ex;h=a.M;g.a=h;i=a.by?0:(a.co-a.b6|0)+a.bX|0;h=V(h,b)-a.bj|0;e=a.L;j=a.U;BC(e,j.b+i|0,j.a+h|0,g,f);}b=b+1|0;}}
function Zb(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;d=a.cr.a;e=Be(d,V(Ci(a.d.f),a.M)-a.bj|0);f=a.c6;g=a.bj;h=Cy(a)!==null?(-1):a.d.n;i=a.L;j=a.cs;Qp(i,f.eT,f.ei);RG(f,i,b,d);k=f.eZ;if(b!=k){l=f.ch.j;m=l*20|0;if(k<b){k=k/20|0;n=b/20|0;}else{n=Ba(0,(k-1|0)/20|0);k=Ba(0,(b-1|0)/20|0);}a:{if((n-k|0)>=l){Qg(f,b);f.eZ=b;}else{if(f.eZ>=b)while(true){if(n<k)break a;f.eZ=Mn(Bp(f.ch,n%l|0),f.d4,f.e2,f.eZ,b,m,f.hR);n=n+(-1)|0;}while(k<=n){f.eZ=Mn(Bp(f.ch,k%l|0),f.d4,f.e2,f.eZ,b,m,f.hR);k=k+1|0;}}}}o
=BM(f.ch);while(BN(o)){p=BQ(o);q=f.eT;k=V(f.ch.j,f.ii);r=f.i1;s=p.ef.a;n=((p.g7.a-(g%k|0)|0)+k|0)%k|0;t=j.hu;l=g+n|0;u=p.G;m=l/u|0;v=n+s|0;l=BF(v,e);if(l<=0){k=s/u|0;u=0;v=0;w=0;while(v<k){l=m+v|0;if(KL(p,r,w,l,j,t)){s=V((v-u|0)+1|0,p.G);Bn(p.cR,Cf(p.V),s);Cb(p.dx,0.0,V(u,p.G),Cf(p.V),s);l=w;}else{x=Fj(j,r,w,t);Ed(p,i,n+V(u,p.G)|0,q,t.eB,x);Bn(p.cR,Cf(p.V),p.G);Cb(p.dx,0.0,V(v,p.G),Cf(p.V),p.G);u=v;}v=v+1|0;w=l;}x=Fj(j,r,w,t);Ed(p,i,n+V(u,p.G)|0,q,t.eB,x);}else{if(l>0&&n<e){l=Ba(e-n|0,0);w=p.G;u=l/w|0;if(l%
w|0)u=u+1|0;y=0;z=0;ba=0;while(z<u){w=m+z|0;if(KL(p,r,ba,w,j,t)){l=V((z-y|0)+1|0,p.G);Bn(p.cR,Cf(p.V),l);Cb(p.dx,0.0,V(y,p.G),Cf(p.V),l);w=ba;}else{x=Fj(j,r,ba,t);Ed(p,i,n+V(y,p.G)|0,q,t.eB,x);Bn(p.cR,Cf(p.V),p.G);Cb(p.dx,0.0,V(z,p.G),Cf(p.V),p.G);y=z;}z=z+1|0;ba=w;}x=Fj(j,r,ba,t);Ed(p,i,n+V(y,p.G)|0,q,t.eB,x);}if(v>k)YZ(p,q,e,g,k,j,r,i,s,n,t);}}x=j.hu;if(e<d){bb=f.eT;BC(i,bb.b,bb.a+e|0,Cd(f.ei.b,d-e|0),x.hd);}if(b<=h&&h<=c)Z4(f,g,h,j.hu,i);Kw(i);}
function Ki(a){return Be(a.bj/a.M|0,Ci(a.d.f)-1|0);}
function SW(a){return Be(((a.bj+De(a)|0)-1|0)/a.M|0,Ci(a.d.f)-1|0);}
function Kg(a){var b,c,d,e,f,g,h;b=a.c6;c=a.bY.data[0];d=a.M;e=a.bG.cx;f=a.L;b.hK=c;b.le=d;g=d*20|0;b.ii=g;h=CZ(b.d4,EY(f,b.ei.b,g,e));b.d4=h;CF(h,b.hK);QL(b.d4,2);c=CZ(b.e2,EY(f,b.ei.b,d,e));b.e2=c;CF(c,b.hK);QL(b.e2,2);RG(a.c6,a.L,Ki(a),De(a));}
function TB(a,b){var c;c=a.e8.data;return c[b%c.length|0];}
function Ui(a,b){var c,d,e,f;c=Fh(0,H(a.ej),Mj(b));if(!c)b=null;else{b=C(44);if(c<0){b=new BI;W(b);J(b);}if(c!=1){d=b.b4.data.length;if(d&&c){e=B1(V(d,c));d=0;f=0;while(f<c){OI(b,0,H(b),e,d);d=d+H(b)|0;f=f+1|0;}b=K$(e);}else b=AQc;}}return b;}
function Nb(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=Bu(i);k=APz(i).data;GI(j,c);c=0;l=k.length;if(c>l){f=new BI;W(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.f;o.b2=o.b2+1|0;p=O(F4,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ALo(h[m],n[m],k[m],b[m],f.X,f.bf);m=m+1|0;}Bv(o.gJ,p);c=0;while(c<i){b=e.data;I3(o,h[c],n[c],k[c],b[c]);g.lE(Ct(h[c]),b[c]);c=c+1|0;}}
function ABq(a){var b;if(CY(Z(a)))FH(a);else{b=a.d;LL(b.f,b.n,b.s);}Ga(a);DF(a);return 1;}
function Dj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.ez)return 0;if(CY(Z(a)))FH(a);c=KQ(S_(b,C(110),C(5)),C(111),(-1));d=c.data;b=a.d;e=b.f;f=b.n;g=b.s;V4(e,f,g,c);h=d.length;if(!h)b=AQc;else{i=0;j=0;while(j<h){i=i+H(d[j])|0;j=j+1|0;}k=B1(i+V(h-1|0,H(C(111)))|0);c=k.data;l=0;b=d[0];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<H(C(111))){m=l+1|0;c[l]=I(C(111),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=n+1|0;}b=K$(k);}EZ(e,f,g,0,b);b=a.d;f=b.n;m=(f
+h|0)-1|0;Cj(a,m,m!=f?H(d[h-1|0]):b.s+H(d[0])|0,0);E4(a);DF(a);return 1;}
function FH(a){var b,c,d;b=Dr(Z(a));c=a.d.f;d=Z(a);LU(c,d,T3(c,d));Cj(a,b.H,b.Q,0);E4(a);DF(a);}
function E4(a){var b,c;(Z(a)).cP=0;b=(Z(a)).bv;c=a.d;BW(b,c.n,c.s);b=(Z(a)).bo;c=a.d;BW(b,c.n,c.s);}
function CJ(a){return a.gE.lf|0;}
function Y0(a,b){var c,d;c=a.cr.a;if(b<c){d=a.bG.dT;d.a=c-b|0;d.b=!a.by?C8(a)+a.dq|0:C8(a)+a.bX|0;c=!a.by?(a.U.b+a.co|0)-a.dq|0:(((a.U.b+a.b6|0)+CJ(a)|0)+a.bX|0)-a.dq|0;BC(a.L,c,a.U.a+b|0,d,a.cs.bI.fQ);}}
function Zv(a){var b;b=a.by?a.U.b+CJ(a)|0:a.U.b+a.cr.b|0;Vp(a.es,a.bj,a.U.a,De(a),Lm(a),b,CJ(a));b=!a.by?a.U.b+a.co|0:((a.U.b+a.bX|0)+a.b6|0)+CJ(a)|0;Pr(a.eu,a.d.cV,b,C8(a),a.gq,a.U.a+De(a)|0,CJ(a));}
function YK(a){var b,c;b=PQ(a.es);c=PQ(a.eu);if(!(!b&&!c)){DP(a.L,1);if(b)G_(a.es,a.L);if(c)G_(a.eu,a.L);if(b)Hf(a.es,a.L);if(c)Hf(a.eu,a.L);}}
function ZV(a){var b,c,d,e;b=a.ex;c=a.cr;b.a=c.a;b.b=a.bX;d=!a.by?a.co-a.b6|0:(c.b-H$(a)|0)-a.bX|0;b=a.L;c=a.U;BC(b,c.b+d|0,c.a,a.ex,a.cs.bI.r0);a.ex.b=!a.by?(a.b6-a.bX|0)-a.dq|0:((a.b6+CJ(a)|0)+a.bX|0)-a.dq|0;e=a.by?0:(a.co-a.b6|0)+a.bX|0;b=a.L;c=a.U;BC(b,c.b+e|0,c.a,a.ex,a.cs.bI.fQ);}
function Sk(b,c){return Be(Ba(0,b),c);}
function Fc(a){return a.bG.gf;}
function LA(a,b){var c,d,e,f;c=Iq(b);d=new R;T(d);K(K(d,C(112)),c);$rt_globals.console.info($rt_ustr(S(d)));Fc(a);c=Iq(b);d=C2();c=$rt_ustr(c);d.title=c;Cj(a,0,0,0);c=new OM;c.ss=a;c.sr=b;d=D2();BU(d);e=new OL;e.m4=d;f=new SG;f.oL=e;d=new U6;d.m5=c;c=b.hY;if(c!==null)c.text().then(Bi(d,"f"),Bi(f,"f"));else{b=b.hn.getFile();c=new U7;c.os=d;c.ot=f;b.then(Bi(c,"f"),Bi(f,"f"));}}
function GV(a,b,c,d,e){if(G3(a,e))return 1;if(c&&d)return 1;if(c)E8(a,a.bj+((V(b,a.M)*12|0)/10|0)|0);else if(!d){GB(a,a.d.n+b|0,e);Sl(a);}return 1;}
function QF(a,b,c,d){var e,f,g;if(G3(a,d))return 1;e=EW(a);if(!c)f=a.d.s+b|0;else if(b>=0)f=F0(e,a.d.s);else{b=a.d.s;if(!b)f=(-1);else{c=HR(e,b);if(c>0&&e.dm.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.dm.data[c-1|0];}}if(f>e.z){e=a.d;if((e.n+1|0)<Ci(e.f))Cj(a,a.d.n+1|0,0,d);}else if(f>=0)CR(a,f,d);else{e=a.d;b=e.n;if(b>0){g=(BG(e.f,b-1|0)).z;Cj(a,a.d.n-1|0,g,d);}}TN(a);return 1;}
function G3(a,b){if(CY(Z(a))&&!b){E4(a);Ga(a);return 1;}if(!(b&&CY(Z(a))))E4(a);return 0;}
function Cj(a,b,c,d){a.d.s=c;return GB(a,b,d);}
function GB(a,b,c){var d;d=a.d;d.n=Fh(0,b,Ci(d.f)-1|0);return CR(a,a.d.s,c);}
function CR(a,b,c){var d,e;a.d.s=Fh(0,b,(EW(a)).z);a.d.gk=a.bG.bW===0.0?0:FK(EW(a),a.d.s,a.L.dd,a.bY);Kb(a);Ga(a);if(c)(Z(a)).cP=1;d=Z(a);e=a.d;Kc(d,e.n,e.s);(Z(a)).cP=0;return 1;}
function La(a,b){var c;c=AD$(Z(a));CR(a,b,0);G8(Z(a),c);}
function Ga(a){Sl(a);TN(a);}
function Sl(a){var b,c,d,e,f;b=a.bj;c=b+De(a)|0;d=a.d.n;e=a.M;d=V(d,e);f=d+e|0;if(d<(b+e|0))E8(a,d-e|0);else if(f>(c-e|0))E8(a,(f-De(a)|0)+a.M|0);}
function TN(a){var b,c,d,e,f;b=Dw(a.bG.bW*30.0);c=a.d.cV;d=c+C8(a)|0;e=a.d.gk;f=e+b|0;if(e<(c+b|0))HK(a,e-b|0);else if(f>(d-b|0))HK(a,(f-C8(a)|0)+b|0);}
function Hc(a,b){var c,d;Cj(a,b.X,b.bf,0);c=F0(EW(a),a.d.s);BW((Z(a)).bo,a.d.n,c);b=(Z(a)).bv;d=a.d;BW(b,d.n,d.s);}
function Ef(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.U;e=c-d.b|0;f=Fh(0,((b.a-d.a|0)+a.bj|0)/a.M|0,Ci(a.d.f)-1|0);g=!a.by?a.co:(a.bX+a.b6|0)+CJ(a)|0;h=Ba(0,(e-g|0)+a.d.cV|0);b=BG(a.d.f,f);d=a.L.dd;i=a.bY;if(!(b.dY!==null&&!b.fj))Jm(b,d,i);j=b.dY;e=b.k.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.z;else{c=Sa(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.k.data.length)k=b.z;else{j=QK(b,d,i,c);k=0;e=0;while(e<c){k=k+H(b.k.data[e].p)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(ARk){b=new R;T(b);Bk(K(Bk(K(Bk(K(b,C(113)),e),C(114)),h),C(115)),m);$rt_globals.console.info($rt_ustr(S(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return Di(f,k);}
function VB(a,b){var c,d;c=a.d;d=b.X;c.n=d;c.s=b.bf;c.gk=FK(BG(c.f,d),a.d.s,a.L.dd,a.bY);Kb(a);}
function EW(a){var b;b=a.d;return BG(b.f,b.n);}
function AIp(a,b,c){(Z(a)).cP=0;return 1;}
function ABZ(a,b,c){var d;if(c)return null;d=Hm(a.es,b.u,a.nL,1);if(d!==null)return d;d=Hm(a.eu,b.u,a.sI,0);if(d!==null)return d;HP(a);VB(a,Ef(a,b.u));JP(a.d);if(!b.bu&&!(Z(a)).cP){b=(Z(a)).bv;d=a.d;BW(b,d.n,d.s);}(Z(a)).cP=1;b=Z(a);d=a.d;Kc(b,d.n,d.s);b=new VH;b.pj=a;return b;}
function ACg(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cf){b=b.u;e=Ef(a,b);f=HD(a.d.f,e.X,e.bf);g=Rz(a,f);h=KW(a.eo,DI(a.d),Fx(a.d));if(h!==null){i=a.d;c=e.X;d=e.bf;e=new Sb;e.vo=a;e.vp=b;e.vn=g;h.qL(i,c,d,e,a.hc);}else{e=B7(a.d.f.dc,f);if(e!==null){Hc(a,e);c=1;}else{e=B7(a.d.f.cQ,f);if(e!==null&&!DO(e)){if(e.j!=1){PN(a.iu,b,e,a,g);c=1;}else{Hc(a,Bp(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(Ef(a,b.u)).X;g=BG(a.d.f,c);c=Fn(g,a.d.s);d=F0(g,a.d.s);b=KH(g,c);if((d-1|0)==g.z){BW((Z(a)).bv,a.d.n,
Mj(g));BW((Z(a)).bo,a.d.n,g.z);}else{if(b!==null){b=b.p;j=0;c:{while(true){k=b.b4.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.s;if(c==j){c=Fn(g,c-1|0);d=F0(g,c);}else{if(d!=j){Oo(Z(a),a.d.n);break b;}c=Fn(g,d+1|0);d=F0(g,c);}}}BW((Z(a)).bv,a.d.n,c);(Z(a)).cP=1;Cj(a,a.d.n,d,0);(Z(a)).cP=0;HP(a);}}break a;case 3:break;default:break a;}Oo(Z(a),a.d.n);Qn(a.d.fN);HP(a);}}return 1;}
function ACV(a,b){var c,d,e,f,g,h,i,j,k;c=a.bG.c7;if(HC(a.es,b.u,c))return 1;if(HC(a.eu,b.u,c))return 1;d=a.c6;if(Fv(b.u,d.eT,d.ei)&&Fl(c)?1:0)return 1;e=b.u;f=!a.by?a.U.b+a.co|0:((a.U.b+a.b6|0)+a.bX|0)+CJ(a)|0;a:{g=a.U.a;h=C8(a);i=De(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Fl(c);if(b.cf){e=Ef(a,b.u);e.bf=Fn(BG(a.d.f,e.X),e.bf);b=a.d.f;if(!IC(b.dc,e)&&!IC(b.cQ,e)?0:1)return Dv(c,C(116));}return Dv(c,C(117));}
function AMr(a,b){var c,d,e,f,g;c=b.cf;if(c&&b.bT==65){c=Ci(a.d.f)-1|0;d=E9(a.d.f,c);BW((Z(a)).bv,0,0);BW((Z(a)).bo,Ci(a.d.f)-1|0,d);return 1;}if(c&&b.bT==80){HX(a.d);return 1;}if(!a.ez&&c&&b.bT==90){if(CY(Z(a)))E4(a);b=a.d.f;b.b2=b.b2+1|0;e=b.gJ;d=e.j;if(!d)e=null;else{f=(E7(e,d-1|0)).data;e=L8(b,f[0]);c=1;while(c<f.length){L8(b,f[c]);c=c+1|0;}}if(e!==null){Cj(a,e.b,e.a,0);DF(a);}return 1;}if(!c&&!b.cH){if(B0(b.dN,C(118))){Dj(a,C(119));CR(a,a.d.s-1|0,0);c=1;}else if(B0(b.dN,C(120))){Dj(a,C(121));CR(a,a.d.s
-1|0,0);c=1;}else if(B0(b.dN,C(122))){Dj(a,C(123));CR(a,a.d.s-1|0,0);c=1;}else if(B0(b.dN,C(124))){Dj(a,C(125));CR(a,a.d.s-1|0,0);c=1;}else if(B0(b.dN,C(126))){Dj(a,C(127));CR(a,a.d.s-1|0,0);c=1;}else if(!B0(b.dN,C(128)))c=0;else{Dj(a,C(129));CR(a,a.d.s-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cH&&!b.cf)){d=b.bT;if(d>=48&&d<=57){c=d-48|0;e=a.lA.data[c];if(e!==null)e.t();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bT){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(YI(a,b))return 1;if(Zq(a,b))return 1;c=b.cf;if(c&&b.bT==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bT;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.cH&&!b.h$)return H(b.dN)>0&&Dj(a,b.dN)?1:0;return 0;}return 0;}
function RE(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=Ki(a);d=SW(a);if(b.dW!=3&&b.fO==3){e=S6(b.j$);f=new PG;f.l1=c;f.l0=d;g=new Pf;g.o_=f;while(!g.ji&&SR(e,g)){}if(!g.ji&&B0(C(130),DI(b))){c=Ba(0,c-100|0);d=Be(Ci(b.f)-1|0,d+100|0);Bv(b.j$,Cd(c,d));h=Bu(3);i=h.data;i[0]=Eo(b.f,c);e=b.f;j=0;d=Be(d+1|0,e.v.data.length);k=0;while(k<d){j=j+E9(e,k)|0;if(k!=(e.v.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.rX=D1();e=b.c$;l=new Rn;l.sx=b;i=O(B,3);m=i.data;m[0]=EN(b.f);m[1]=h;b=b.f.cN;g=Bz();RW(b,b.cK,g);h
=Bu(3*g.j|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bp(g,o);d=k+1|0;n[k]=b.bC;q=d+1|0;n[d]=b.bF;k=q+1|0;n[q]=b.el;o=o+1|0;}m[2]=h;Ep(e,l,C(131),i);}}}
function Qa(a){AAc(a.d);}
function Ko(a,b,c){var d,e,f,g,h,i;if(c&&a.ez)return 0;d=Dr(Z(a));e=d.H;if(CY(Z(a))){f=a.d.f;g=Z(a);h=T3(f,g);if(c)LU(f,g,h);if(c){Cj(a,d.H,d.Q,0);E4(a);DF(a);}}else{h=GX(EA(a.d.f.v.data[e]),C(111));i=Be(Ci(a.d.f)-1|0,e);BW((Z(a)).bo,i,0);if(e>=(Ci(a.d.f)-1|0))BW((Z(a)).bo,i,E9(a.d.f,i));else BW((Z(a)).bv,i+1|0,0);if(c)FH(a);else Cj(a,e,0,0);}b.m(h);return 1;}
function Zq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.ez)return 0;a:{switch(b.bT){case 8:if(CY(Z(a))){FH(a);c=1;}else{b=a.d;d=b.s;if(!d&&!b.n)c=1;else{if(d){e=b.n;c=d-1|0;LL(b.f,e,c);}else{e=b.n-1|0;c=E9(b.f,e);b=a.d.f;JV(b,e);EZ(b,e,E9(b,e),1,C(111));}DF(a);c=Cj(a,e,c,0);}}break a;case 9:if(!b.bu){if(!CY(Z(a)))Dj(a,a.ej);else{f=Dr(Z(a));g=E0(Z(a));c=g.H;d=f.H;e=(c-d|0)+1|0;h=Bu(e);i=h.data;j=O(Bw,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.ej;d=d+1|0;e=l;}b=new TY;m=a.d;Y4(b,m.n,m.s);m=new Rw;m.nx=
a;Nb(a,h,0,0,j,b,m);f.Q=f.Q+H(a.ej)|0;g.Q=g.Q+H(a.ej)|0;La(a,a.d.s+H(a.ej)|0);DF(a);}c=1;}else b:{if(!CY(Z(a))){b=a.d;f=BG(b.f,b.n);if(f.k.data.length>0){g=Ui(a,f);if(g===null){c=1;break b;}m=a.d;n=m.f;e=m.n;b=Di(e,m.s);n.b2=n.b2+1|0;o=n.gJ;h=O(F4,1);h.data[0]=ALo(e,0,1,g,b.X,b.bf);Bv(o,h);I3(n,e,0,1,g);FF(f,0,H(g));La(a,a.d.s-H(g)|0);}}else{b=Dr(Z(a));f=E0(Z(a));c=f.H;p=b.H;c=(c-p|0)+1|0;h=Bu(c);k=h.data;j=O(Bw,c);q=j.data;g=a.d;e=g.s;l=g.n;c=0;while(p<=f.H){g=BG(a.d.f,p);if(g.k.data.length>0){g=Ui(a,g);if
(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=H1(h,c);j=CX(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.H)b.Q=Ba(0,b.Q-H(g)|0);if(p==f.H){f.Q=Ba(0,f.Q-H(g)|0);La(a,a.d.s-H(g)|0);}d=d+1|0;}b=Di(l,e);f=new S5;f.py=a;Nb(a,h,0,1,j,b,f);}DF(a);c=1;}break a;case 13:if(CY(Z(a)))FH(a);b=a.d;DY(BG(b.f,b.n));b=a.d;AAG(b.f,b.n,b.s);DF(a);c=Cj(a,a.d.n+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ABq(a);}return c;}
function YI(a,b){var c,d,e,f;a:{switch(b.bT){case 33:c=b.cf?GB(a,HG(a.bj,a.M),b.bu):GV(a,2-T9(De(a),a.M)|0,0,b.cH,b.bu);break a;case 34:c=!b.cf?GV(a,T9(De(a),a.M)-2|0,0,b.cH,b.bu):GB(a,((a.bj+De(a)|0)/a.M|0)-1|0,b.bu);break a;case 35:if(!G3(a,b.bu)&&!CR(a,(EW(a)).z,b.bu)){c=0;break a;}c=1;break a;case 36:if(!G3(a,b.bu)&&!CR(a,0,b.bu)){c=0;break a;}c=1;break a;case 37:c=b.cf;if(c&&b.cH){HP(a);d=a.d.fN;e=d.c1;if(e<=0)d=null;else{f=d.d_.data;c=e-1|0;d.c1=c;d=f[c];}if(d===null)c=1;else{Cj(a,KA(d),IJ(d),0);G8(Z(a),
d.i2);c=1;}break a;}c=QF(a,(-1),c,b.bu);break a;case 38:c=GV(a,(-1),b.cf,b.cH,b.bu);break a;case 39:c=b.cf;if(c&&b.cH){d=a.d.fN;e=d.c1;if(e==(d.d7-1|0))d=null;else{f=d.d_.data;c=e+1|0;d.c1=c;d=f[c];}if(d===null)c=1;else{Cj(a,KA(d),IJ(d),0);G8(Z(a),d.i2);c=1;}break a;}c=QF(a,1,c,b.bu);break a;case 40:c=GV(a,1,b.cf,b.cH,b.bu);break a;default:}c=0;}if(c&&b.bu){b=(Z(a)).bo;d=a.d;BW(b,d.n,d.s);}if(c)JP(a.d);return c;}
function HP(a){var b,c,d,e,f,g,h;b=a.d;c=b.fN;d=c.c1;c=d<0?null:c.d_.data[d];if(c!==null&&b.n==KA(c)&&a.d.s==IJ(c))return;c=a.d;e=c.fN;b=new JL;d=c.n;f=c.s;c=Z(a);b.km=Di(d,f);g=AD$(c);b.i2=g;g.cP=0;f=e.c1;h=e.d7;if(f==(h-1|0))TD(e,b);else{d=f+1|0;while(d<h){Qn(e);d=d+1|0;}TD(e,b);}e.c1=e.c1+1|0;}
function DF(a){a.d.f.rm=Ms(Fc(a));}
function R$(a,b){var c,d,e,f;a.uZ=null;a.c6.i1=Eb(0);VZ(a.d);c=a.d;a.d=b;OP(c,null,null);OP(b,a,Fc(a));d=(Cc(a.eo.sX)).data;e=d.length;f=0;while(f<e){d[f].lE(c,b);f=f+1|0;}a.bj=Gx(b.i_*a.M);}
function Rz(a,b){var c;c=Ku(a.d.f,b);if(c===null)return C(5);return c.p;}
function Cy(a){return a.d.vW;}
function Z(a){return a.d.nS;}
function Tn(a){var b;b=a.vI;if(b!==null)b.m(a);}
function Ol(){B.call(this);this.vB=null;}
function ADc(a,b){return b.bT!=121?0:1;}
function Qe(){var a=this;B.call(a);a.mW=null;a.pf=null;a.oy=null;}
function AFn(a,b){var c,d,e,f;if(b.cf&&b.bT==79){c=a.pf;if(c!==null&&b.bu){if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ABc(c,1);else{d=new UH;b=$rt_globals.window.showDirectoryPicker();e=new UG;e.oY=c;e.oZ=d;b.then(Bi(e,"f"),Bi(d,"f"));}}else Ug(a.mW,a.oy);f=1;}else f=0;return f;}
var Bc=F(0);
function Oj(){B.call(this);this.tF=null;}
function AFw(a,b){LA(a.tF,b);}
function Ok(){B.call(this);this.n$=null;}
function MR(){B.call(this);this.o8=null;}
function MS(){B.call(this);this.un=null;}
function AGW(a,b,c,d){var e,f;b=a.un.cw;e=Dw((b.M*4|0)*d/150.0);f=Dw(c);if(e)E8(b,b.bj+e|0);if(f)HK(b,b.d.cV+f|0);return 1;}
function MQ(){B.call(this);this.mH=null;}
function Y9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=b;c=a.mH;d=c.et;e=c.cw;if(e!==d.ed?0:1){d=c.eV;f=new Rk;f.wD=c;if(!Fr(d.bM)){g=d.bM;b=b.u;h=new RL;h.ey=d;h.bc=e;h.vj=f;h.hh=e;h.lC=c;h.iP=c;i=RP();f=h.bc.d;c=DI(f);f=Fx(f);j=h.bc.eo;if(Pn(j,c,f)!==null){k=new Qy;k.mA=h;k.mB=b;Dx(i,C(132),k);}if(KW(j,c,f)!==null){k=new Qz;k.pO=h;k.pP=b;Dx(i,C(133),k);}if(Sp(j,c,f)!==null){f=new Qx;f.l_=h;f.ma=b;Dx(i,C(134),f);}f=new Qw;f.ta=h;f.s_=b;Dx(i,C(135),f);FQ(h);if(Kr()){if(!h.bc.ez){f=new PJ;f.tB=h;Dx(i,C(136),f);}f
=new PK;f.op=h;Dx(i,C(137),f);if(!h.bc.ez){FQ(h);if(Kr()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0){f=new PI;f.ri=h;Dx(i,C(138),f);}}}f=RP();l=O(Bw,4).data;l[0]=C(117);l[1]=C(130);l[2]=C(139);l[3]=C(140);m=l.length;n=0;while(n<m){j=l[n];o=new NR;o.my=h;o.mz=j;Dx(f,j,o);n=n+1|0;}E6(i,C(141),Hd(f));o=RP();l=O(DB,3);p=l.data;f=h.iP;BU(f);k=new L$;k.n2=f;p[0]=Cv(C(142),k);f=h.iP;BU(f);k=new L_;k.o7=f;p[1]=Cv(C(143),k);f=h.iP;BU(f);k=new L9;k.um=f;p[2]=Cv(C(144),k);JW(o,C(145),Gt(l),ARl);l=O(DB,2);p
=l.data;f=h.hh;BU(f);j=new UF;j.pE=f;p[0]=Cv(C(146),j);f=h.hh;BU(f);j=new UE;j.sK=f;p[1]=Cv(C(147),j);E6(o,C(148),Gt(l));c=new P6;c.rP=h;JW(o,C(149),c,ARl);if(h.bc.bG.ds.kC){l=O(DB,2);p=l.data;c=new Q5;c.nD=h;p[0]=Cv(C(150),c);c=new Q6;c.oQ=h;p[1]=Cv(C(151),c);E6(o,C(152),Gt(l));}E6(i,C(153),Hd(o));f=RP();E6(f,C(154),Yt(h));o=new OH;o.uo=h;Dx(f,C(155),o);E6(i,C(156),Hd(f));OS(g,b,Hd(i),Pu(d,e));}}return 1;}
function Mr(){B.call(this);this.sw=null;}
function ALU(a,b){var c,d;c=a.sw;d=b.bb;return MF(c.charCodeAt(d)&65535);}
var YF=F(0);
function Wg(b,c){var d,e,f,g,h,i,j,k,l,m;d=O(Bw,8);e=Eb(8);f=B1(16);g=0;h=0;i=0;while(true){j=BF(i,b);if(j>0)break;k=j>=0?10:(c.lL(Ct(i))).jq;if(k==10){d=AAp(DL(f,0,g),d,h);e=S3(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Mt(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AAp(DL(f,0,g),d,h);j=i+1|0;if(j<b&&(c.lL(Ct(j))).jq==10){e=S3(1,e,h);i=j;}else e=S3(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new PV;d=XG(d,h);if(m.length!=h)e=KP(e,h);c.hD=d;c.vx=e;return c;}
function AG$(b){var c,d;c=H(b);BU(b);d=new MU;d.mY=b;return (Wg(c,d)).hD;}
function UI(){var a=this;B.call(a);a.rS=null;a.sD=null;a.rx=null;}
function Gl(){var a=this;B.call(a);a.bu=0;a.cf=0;a.cH=0;a.h$=0;}
function ARm(a,b,c,d){var e=new Gl();Sw(e,a,b,c,d);return e;}
function Sw(a,b,c,d,e){a.bu=d;a.cf=b;a.cH=c;a.h$=e;}
function NP(){var a=this;Gl.call(a);a.dN=null;a.bT=0;a.sf=0;a.wq=0;a.jd=0;}
var AAA=F();
function T9(b,c){return (b+(c/2|0)|0)/c|0;}
function OJ(b,c,d){if(b<(2147483647/c|0))return T9(V(b,c),d);return 0.5+c*b/d|0;}
function HG(b,c){return ((b+c|0)-1|0)/c|0;}
function Gx(b){return b+0.5|0;}
function Dw(b){return b+0.5|0;}
function Fh(b,c,d){return Ba(b,Be(c,d));}
function Xu(b,c){return WP(b)/WP(c);}
function Ln(){var a=this;Gl.call(a);a.u=null;a.uS=null;}
var So=F(0);
function Mx(){var a=this;B.call(a);a.tG=null;a.tH=null;}
function AHg(a,b){var c,d;c=a.tG;d=a.tH;$rt_globals.console.info("paste plain string "+b);b=Eu(b);Dj(c.m6,b);CV(d);}
function S0(){B.call(this);this.ud=null;}
function ALj(a,b){a.ud.clipboardData.setData("text/plain",$rt_ustr(b));}
function US(){var a=this;IS.call(a);a.wg=0;a.ml=0;}
var W$=F(0);
function IW(b,c,d,e,f){Cb(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function SC(){var a=this;B.call(a);a.ds=null;a.gf=null;a.c7=null;a.cA=null;a.bW=0.0;a.cx=0;a.ed=null;a.jv=null;a.dT=null;a.sW=null;a.uK=null;a.uL=null;}
function ID(a){var b;b=a.ed;if(b!==null)b.rU();}
function I1(a){var b;b=a.ed;if(b!==null)b.uA();}
function HO(a,b){I1(a);a.ed=b;ID(a);}
function KY(a){return a.ds.dd;}
function HW(a,b){return F8(a.ds,b.iH,Cn(b.hj,a.bW),400,0);}
function Ck(a,b){return Cn(b,a.bW);}
var QI=F();
function AFV(a,b){var c,d,e;c=b.cf;d=c&&!b.bu&&!b.cH&&!b.h$?1:0;a:{if(d){d=b.bT;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bu&&!c&&!b.cH&&!b.h$?1:0;d=d&&b.bT==46?1:0;}b:{if(!d){e=b.bT;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.jd=1;}return 0;}
function QH(){B.call(this);this.nz=null;}
function ADL(a,b){var c;c=a.nz.ed;return c!==null&&c.jy(b)?1:0;}
var HQ=F(0);
function U$(){B.call(this);this.c3=null;}
function Wv(a,b){Qi(a.c3,0,b);}
function TT(){var a=this;B.call(a);a.cz=null;a.b9=null;a.h7=null;a.it=null;a.k_=null;a.iI=null;}
function OS(a,b,c,d){var e,f;e=a.cz;f=e.cA;if(V(f.b,f.a)&&e.bW!==0.0){if(a.h7!==null&&!Fr(a)){a.iI=d;a.it=HW(a.cz,a.h7);e=Na(a,b,c,null);b=new TK;b.rq=a;e.sB=b;HO(a.cz,a);return;}b=new BI;W(b);J(b);}c=new Dg;Br(c,C(157));J(c);}
function Do(a){var b;if(Fr(a)){b=a.cz;if(b.ed===a)b.ed=null;R3(a,null);a.iI.t();a.iI=ARd;}}
function UR(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new Rv;f.b1=AHm();f.e9=new Bq;f.fF=new Bq;f.cb=ARn;f.hL=(-1);f.ic=1;f.fA=1;c=c.t$();Kv(f);f.cb=c;Pm(f,a.k_);OK(f,a.it,a.cz);if(d===null)g=b.b;else{g=b.b;g=a.cz.cA.b<((g+(EI(d)).b|0)+(EI(f)).b|0)?g-(EI(f)).b|0:(g+(EI(d)).b|0)-d.eI|0;}h=b.a;b=a.cz.cA;i=Ba(0,Be(g,b.b-(EI(f)).b|0));g=Ba(0,Be(h,b.a-(EI(f)).a|0));Bn(f.b1.cG,i,g);j=f.cu+f.eI|0;k=f.cb.data;h=k.length;l=0;m=j;while(l<h){c=k[l];b=c.dJ;b.b=i+j|0;b.a=g+m|0;if(!f.fA){if(!c.c8.b)WK();j=j+(c.c8.b+f.cu|0)|0;}else
{if(!c.c8.a)WK();m=m+(c.c8.a+f.cu|0)|0;}l=l+1|0;}b=new Vd;b.og=a;b.oh=f;b.oi=e;f.ou=b;Bv(a.b9,f);return f;}
function Na(a,b,c,d){return UR(a,b,c,d,null);}
function AHD(a,b){var c;if(!Fr(a))return 0;a:{switch(b.bT){case 27:Do(a);c=1;break a;default:}c=0;}return c;}
function Yl(b,c){var d,e,f;d=b.dJ;e=c.cu;f=c.eI;return Cd((d.b-(e*3|0)|0)-f|0,(d.a-e|0)-f|0);}
function R3(a,b){var c,d;c=a.b9.j-1|0;a:{while(true){if(c<0)break a;d=Bp(a.b9,c);if(b===d)break;E7(a.b9,c);d.eL=CZ(d.eL,null);Bn(d.e9,0,0);d.cb=ARn;d.hL=(-1);RR(d.b1);c=c+(-1)|0;}}}
function Fr(a){return a.b9.j<=0?0:1;}
function Or(){var a=this;B.call(a);a.dR=null;a.jl=0.0;a.gu=0.0;a.fv=0;}
function U1(a){return a.dR.bp.a;}
function RH(a){return a.dR.bp.b;}
function Z$(a,b,c){var d,e,f;if(a.fv){d=a.dR;e=c.b;f=c.a;c=d.cG;BC(b,c.b+e|0,c.a+f|0,d.bp,d.eR);}}
function JR(){var a=this;B.call(a);a.lr=null;a.vb=null;a.vq=0.0;a.oE=0;a.vy=0;a.v1=0;a.qm=0;a.wY=0;a.d2=0.0;a.dE=0.0;a.vm=0.0;a.lf=0.0;a.vu=0;a.mE=null;}
function Fk(a){return Dw(a.d2+a.dE);}
function OB(a,b){return Dw((a.d2+a.dE)*b);}
function Vr(){var a=this;B.call(a);a.eN=null;a.f=null;a.kU=null;a.nS=null;a.fN=null;a.hJ=null;a.c$=null;a.vW=null;a.n=0;a.s=0;a.gk=0;a.gU=null;a.gD=null;a.lV=null;a.j$=null;a.dW=0;a.fO=0;a.f4=0;a.g2=AAl;a.rX=AAl;a.s$=AAl;a.uW=0;a.vS=0;a.cV=0;a.i_=0.0;a.ek=0;}
function AD4(a,b,c){var d=new Vr();ABl(d,a,b,c);return d;}
function ABl(a,b,c,d){var e,f,g,h,i,j;b=b.data;a.nS=AC0();e=new Sv;e.d_=O(JL,16);e.d7=0;e.c1=(-1);a.fN=e;a.gU=null;a.gD=Bz();a.lV=FS();a.j$=Bz();a.dW=1;a.fO=1;a.f4=1;a.cV=0;a.i_=0.0;a.ek=0;a.eN=d;a.kU=c;c=new Qf;f=b.length;g=O(CK,Ba(1,f));if(!f)g.data[0]=Xd(C(5));h=g.data;i=0;while(i<f){h[i]=Xd(b[i]);i=i+1|0;}d=new Oa;e=new JI;Ov(e);d.dU=e;c.dI=d;c.dc=FS();c.cQ=FS();c.gJ=Bz();if(!h.length){c=new BI;W(c);J(c);}c.v=g;j=Tf(c);c.cN=AAj(AL4(IK(0,j,0),null,null));a.f=c;}
function DI(a){var b;b=a.kU;if(b===null){b=a.eN;if(b===null)b=C(117);else{b=b.e4;b=b===null?C(117):!Dy(b,C(158))&&!Dy(b,C(159))&&!Dy(b,C(160))&&!Dy(b,C(161))&&!Dy(b,C(162))&&!Dy(b,C(163))?(Dy(b,C(164))?C(130):Dy(b,C(165))?C(166):!Dy(b,C(167))?C(117):C(140)):C(139);}}return b;}
function Fx(a){var b;b=a.eN;return b===null?null:b.hT;}
function Gq(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.fO=3;a.f4=3;a.dW=3;c=CQ(b[0]);d=D5(b[1]);if((CQ(b[2])).data[0]==4){e=GA(D5(b[3]));DG(a.lV,C(168),e);Km(a.f,c,d);}else if(b.length<5)Km(a.f,c,d);else{f=CQ(b[3]);g=f.data;h=D5(b[4]);MT(a.f,c,d,f,h,0);SP(a,H1(f,g.length),KO(h));}if(a.ek){e=DZ(a);i=Ji(D1(),a.g2);j=new R;T(j);K(FE(K(K(j,e),C(169)),i),C(170));$rt_globals.console.info($rt_ustr(S(j)));}e=a.hJ;if(e!==null)Tn(e);}
function JP(a){var b;Rb(a,Di(a.n,a.s),HD(a.f,a.n,a.s));if(!(a.gU!==null&&!DO(a.gD))){b=a.s;if(b>0)Rb(a,Di(a.n,b-1|0),HD(a.f,a.n,a.s-1|0));}}
function Rb(a,b,c){var d,e,f,g,h,i,j,k;VZ(a);d=B7(a.f.dc,c);if(d!==null)c=d;a:{e=B7(a.f.cQ,c);if(e!==null){a.gU=Ku(a.f,c);c=BM(e);while(true){if(!BN(c))break a;f=BQ(c);Bv(a.gD,Ku(a.f,f));}}}c=a.hJ;if(c!==null){g=b.X;h=b.bf;b=c.eo;f=DI(c.d);e=Fx(c.d);i=(Cc(b.to)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.tq(f,e)){b=b.xr;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new Q4;e.wP=c;e.wO=f;e.wR=g;e.wQ=h;b.qL(f,g,h,e,c.hc);}}}
function VZ(a){a.gU=null;GH(a.gD);}
function SP(a,b,c){var d,e,f,g,h;if(a.c$!==null){a.s$=D1();d=a.f.b2;e=a.c$;f=new On;f.lR=a;g=O(B,3);h=g.data;h[0]=b;h[1]=c;b=Bu(1);b.data[0]=d;h[2]=b;Ep(e,f,C(171),g);}}
function OP(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.hJ=b;a.c$=c;if(c!==null&&a.dW==1){a.g2=D1();b=DI(a);d=BB(b,C(130));e=BB(b,C(140));f=EN(a.f);g=f.data.length;h=!d?5120:10240;i=Wu(b);if(e){c=a.c$;j=new LR;j.sj=a;k=O(B,2);l=k.data;l[0]=f;f=Bu(1);f.data[0]=i;l[1]=f;UB(c,j,0,C(172),k);a.dW=2;}else if(g<=h)Jp(a,f,i);else if(!d){U0(a,KO(f),i);Jp(a,f,i);}else{U0(a,KO(f),i);k=KO(f);c=a.c$;j=new Rm;j.rz=a;l=O(B,2);m=l.data;m[0]=k;k=Bu(1);k.data[0]=i;m[1]=k;Ep(c,j,C(173),l);a.fO=2;Jp(a,f,i);}}}
function U0(a,b,c){var d,e;d=a.c$;e=new NC;e.nV=a;Ep(d,e,C(174),G(B,[b,Fw([c,250])]));a.f4=2;}
function Jp(a,b,c){var d,e,f,g;d=a.c$;e=new UN;e.sV=a;f=O(B,2);g=f.data;g[0]=b;b=Bu(1);b.data[0]=c;g[1]=b;Ep(d,e,C(172),f);a.dW=2;}
function DZ(a){var b;b=a.eN;return b===null?C(5):Tl(b);}
function HX(a){var b,c,d,e,f,g;if(a.ek){b=DZ(a);c=new R;T(c);K(K(c,b),C(175));$rt_globals.console.info($rt_ustr(S(c)));}b=DI(a);if(b===null)d=null;else{a:{e=(-1);switch(JZ(b)){case -1655966961:if(!B0(b,C(140)))break a;e=3;break a;case 3401:if(!B0(b,C(166)))break a;e=2;break a;case 98723:if(!B0(b,C(139)))break a;e=1;break a;case 3254818:if(!B0(b,C(130)))break a;e=0;break a;case 3556653:if(!B0(b,C(117)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(176);break b;case 2:d=C(177);break b;case 3:d
=C(178);break b;case 4:d=C(179);break b;default:d=null;break b;}d=C(180);}}if(d===null)Tn(a.hJ);else{a.g2=D1();if(!B0(d,C(178))){b=a.c$;f=new Pw;f.ox=a;g=O(B,1);g.data[0]=EN(a.f);Ep(b,f,d,g);}else{b=a.c$;c=new Pt;c.ny=a;g=O(B,1);g.data[0]=EN(a.f);UB(b,c,0,d,g);}}}
function AAc(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(a.ek){b=DZ(a);c=new R;T(c);K(K(c,b),C(181));$rt_globals.console.info($rt_ustr(S(c)));}b=DI(a);if(b!==null&&!B0(C(117),b)){if(B0(C(140),b)){HX(a);GE(a.f);}else{c=a.f.cN;d=Oh(c,c.cK);if(d===null){KN(a);GE(a.f);return;}e=Fw([CN(d),CL(d),d.bD.el]);f=EN(a.f);g=Bu(1);g.data[0]=Wu(b);c=a.f.dI;if(c.fb===null){h=Bu(0);i=B1(0);}else{j=AM2(ADZ(d.b_,c.dU),d);Mk(j);h=j.i8;i=j.jm;}k=a.f.b2;d=a.c$;c=new Pv;c.m0=a;l=O(B,6);m=l.data;m[0]=f;m[1]=g;m[2]=e;e=Bu(1);e.data[0]=k;m[3]
=e;m[4]=h;m[5]=i;Ep(d,c,C(182),l);}}else GE(a.f);}
function KN(a){var b;b=AM2(a.f.dI,null);Mk(b);SP(a,b.i8,b.jm);}
function Ve(){var a=this;B.call(a);a.oX=null;a.uq=null;a.mi=null;a.to=null;a.sX=null;a.sF=null;}
function KW(a,b,c){return PO(a,Cc(a.oX),b,c);}
function Pn(a,b,c){return PO(a,Cc(a.uq),b,c);}
function PO(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.tq(c,d))return g.we;f=f+1|0;}return null;}
function Sp(a,b,c){var d,e,f,g;d=(Cc(a.mi)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.tq(b,c))return g.v6;f=f+1|0;}return null;}
function EK(){var a=this;B.call(a);a.bL=0;a.cX=null;a.ee=null;a.bx=null;a.dn=0;a.c0=0;}
var ARo=0;var ARj=0;function Wc(a,b,c,d,e,f,g){var h,i,j,k,l;h=a.bx;i=h===b&&!h.f9?0:1;if(i){a.bx=b;Jm(b,d.dd,a.cX.jC);}h=a.bx;j=h===null?0:Eq(h)<f?HG(Eq(a.bx),1024):HG(f,1024)+1|0;k=j<=a.dn?0:1;if(k)a.dn=j;if(!(!i&&!k)){if(ARo){l=b.e6;$rt_globals.console.info("fMeasure"+l.data);ARo=0;}if(!ARj){h=c.c5;b="alphabetic";h.textBaseline=b;}else{b=c.c5;h="top";b.textBaseline=h;}a.c0=g/1024|0;while(true){b=a.ee;if(b.j>=a.dn)break;Bv(b,Gv(d));}f=0;while(f<a.dn){HI(a,c,e,a.c0+f|0);f=f+1|0;}a.bx.f9=0;}if(!DO(a.ee)&&g<=
Eq(a.bx)){j=g/1024|0;f=a.c0;if(j!=f){f=j-f|0;if(f<0)f= -f|0;if(f>=a.dn){f=0;while(f<a.dn){HI(a,c,e,j+f|0);f=f+1|0;}a.c0=j;}else{while(true){g=a.c0;if(g>=j)break;HI(a,c,e,g+a.dn|0);a.c0=a.c0+1|0;}while(true){g=a.c0;if(g<=j)break;HI(a,c,e,g-1|0);a.c0=a.c0-1|0;}}}}}
function JC(b,c){return (c-Fk(b)|0)/2|0;}
function LP(b,c){return JC(b,c)+b.qm|0;}
function HI(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;Fi(b);e=a.bx.e6;f=d*1024|0;g=NX(a,f);if(g>=a.bx.k.data.length)return;h=!g?0.0:e.data[g-1|0];i=f;j=h-i+a.bL;k=a.cX.jC;a:{while(true){l=a.bx.k.data;if(g>=l.length)break a;m=k.data;n=l[g];o=m[Ik(n)];p=!ARj?LP(o,c):JC(o,c);m=e.data;CF(b,o);Ej(b,n.p,j,p);j=m[g]-i+a.bL;if(j>1024.0)break;g=g+1|0;}}Em(Bp(a.ee,d%a.dn|0),b);}
function Xp(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq;if(DO(a.ee))return;if(!a.dn)return;if(g>Eq(a.bx))return;o=a.bx;p=o.dY;q=o.k;r=g/1024|0;s=NX(a,g);t= -a.bL|0;u=f;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=e)break;y=p.data;o=Bp(a.ee,r%a.dn|0);z=v[s];ba=y[s]+a.bL|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=Be(be,ba)-g|0;if(bc&&x)bf=bf+a.bL|0;if((t+bf|0)>e)bf=e-t|0;bg=i!==null?0:1;b:{if(!bg){bh
=!x?a.bL:2*a.bL|0;bi=i.b;w=i.a;if(!(bi<w&&g<=w&&(g+bf|0)>(bi+bh|0)?0:1)){bj=0;break b;}}bj=1;}c:{if(!bg){bk=!x?a.bL:2*a.bL|0;if(g>=i.b&&(g+bf|0)<=(i.a+bk|0)?1:0){bl=1;break c;}}bl=0;}bm=null;if(l&&!m)bm=h.bI.hB;if(z===j)bm=h.bI.nN;bn=BM(k);d:{while(BN(bn)){if(BB(BQ(bn),z)){bi=1;break d;}}bi=0;}if(bi)bm=h.bI.us;if(n!==null){v=n.wn;if(v===null)bh=0;else{v=v.data;bh=s>=v.length?0:v[s];}bm=V9(h.dA,h,bh,n.jH);}if(!bl&&!bj){i.a=Be(i.a,Eq(a.bx));Y_(a,d,t+c|0,b,f,h,o,z,bf,g>=i.b?bf:(Be(ba,be)-i.b|0)-(!x?a.bL:0)|0,(g
+bf|0)<=(i.a+(!x?a.bL:2*a.bL|0)|0)?0:(Be(ba,be)-i.a|0)-(!x?a.bL:0)|0,g-bb|0,bm);}else{Cb(a.cX.iG,g-bb|0,0.0,bf,u);Bn(a.cX.fU,bf,f);GQ(a,d,t+c|0,b,z,o,h,bm,bl);}if((z.bB&12)>0){bi=t+c|0;DP(d,1);o=a.cX;bo=o.jA;bo.b=bf;w=b+o.tS|0;bk=w-o.t5|0;bp=o.rc;bq=w+bp;bm=o.gW;S$();bn=ARp.hl.hC;Hp(d,d.g5);H3(d.g5,d.Z,bi,bk,bo,d.c_);ZY(d.g5,d.Z,bp,bq,bm);o=d.g5;Hq(d.Z,o.mt,bn);Hj(d);DP(d,0);}g=g+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function Y_(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s;n=a.cX.iG;o=l;p=i-j|0;q=p;r=e;Cb(n,o,0.0,q,r);Bn(a.cX.fU,p,e);GQ(a,b,c,d,h,g,f,m,0);l=l+i|0;Cb(n,l-k|0,0.0,k,r);Bn(a.cX.fU,k,e);c=c+i|0;GQ(a,b,c-k|0,d,h,g,f,m,0);s=l-j|0;i=j-k|0;Cb(n,s,0.0,i,r);Bn(a.cX.fU,i,e);GQ(a,b,c-j|0,d,h,g,f,m,1);}
function GQ(a,b,c,d,e,f,g,h,i){var j,k,l,m,n;j=a.cX;k=j.fU;if(k.b&&k.a){l=j.iG;if(l.bV!==0.0&&l.Y!==0.0){m=g.rF.data[e.bR];if(i)n=g.bI.lu;else{n=m.nE;if(n===null)n=g.bI.fQ;if(h!==null)n=h;}if(j.lw)Ek(b,c,d,k,l,f,m.hC,n);else Eh(b,c,d,k,l,f,m.hC,n,j.k3);return;}return;}}
function NX(a,b){var c,d,e,f,g,h,i;c=a.bx;d=c.e6;e=0;f=c.k.data.length;g=b;b=BF(e,f);if(b>0){c=new BI;W(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BF(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function Vz(a){a.bx=null;DN(a.ee,new R6);GH(a.ee);}
function Xw(a,b,c,d,e,f,g,h,i){var j,k;j=Eq(a.bx);if(j)j=j+a.bL|0;if(!j)j=j-a.bL|0;k=Ba( -a.bL|0,j-g|0);if(k>=h)return;Bn(f,h-k|0,e);BC(b,c+k|0,d,f,i);}
function XC(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a:{h=c.data;i=O(EK,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=BG(g,e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.bx===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}c=i.data;e=0;f=c.length;while(e<f){if(c[e]===null){if(j>=k)p=null;else{b=j+1|0;p=h[j];j=b;}while(j<k&&p===null){b=j+1|0;p=h[j];j=b;}if(p!==null){c[e]=p;h[j-1|0]=null;}else{o=new EK;o.bL=3;o.ee=Bz();o.c0=0;o.cX=d;c[e]=o;}}e=e+1|0;}while(j<k){p=h[j];if(p!==null)Vz(p);j=j+1|0;}return i;}
function Zc(){ARj=0;}
function ABg(){var a=this;B.call(a);a.eE=null;a.cD=null;a.dK=null;a.d5=null;a.ho=null;a.hp=null;}
function To(){var a=new ABg();AGB(a);return a;}
function AGB(a){a.eE=new Bq;a.cD=new Bq;a.dK=new Bq;a.d5=new Bq;a.ho=new B4;a.hp=new B4;}
function PQ(a){var b;b=a.cD;return !V(b.b,b.a)?0:1;}
function G0(a,b){return Fv(b,a.dK,a.d5);}
function Hm(a,b,c,d){var e,f,g,h,i;e=G0(a,b);f=Fv(b,a.eE,a.cD);if(!e&&!f)return null;if(!f){if(!d)c.m(Um(a,b.b-a.dK.b|0));else c.m(Om(a,b.a-a.dK.a|0));}g=!d?a.eE.b+(a.cD.b/2|0)|0:a.eE.a+(a.cD.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new QR;b.tO=a;b.tP=c;b.tN=i;}else{b=new QQ;b.od=a;b.ob=c;b.oc=i;}return b;}
function F9(a,b,c){if(b!==null&&c!==null){Fe(a.ho,c);Fe(a.hp,b);return;}}
function X8(b,c){var d;d=new SA;d.qo=b;d.uD=c;return d;}
function Om(a,b){var c,d,e;c=a.d5.a;d=a.cD.a;e=c-d|0;return X8(Be(Ba(0,b-(d/2|0)|0),e),e);}
function Um(a,b){var c,d,e;c=a.d5.b;d=a.cD.b;e=c-d|0;return X8(Be(Ba(0,b-(d/2|0)|0),e),e);}
function Vp(a,b,c,d,e,f,g){UJ(a,b,c,d,e,f,g,1);}
function Pr(a,b,c,d,e,f,g){UJ(a,b,c,d,e,f,g,0);}
function UJ(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bn(a.d5,0,0);Bn(a.cD,0,0);}else{i=Be(g*3|0,d);j=Ba(OJ(d,d,e),i);e=e-d|0;i=d-j|0;i=i?OJ(b,i,e):0;if(!h){k=a.eE;k.b=i+c|0;k.a=f-g|0;l=a.cD;l.b=j;l.a=g;l=a.dK;l.b=c;l.a=k.a;k=a.d5;k.b=d;k.a=g;}else{k=a.eE;k.b=f-g|0;k.a=i+c|0;l=a.cD;l.b=g;l.a=j;l=a.dK;l.b=k.b;l.a=c;k=a.d5;k.b=g;k.a=d;}}}
function G_(a,b){var c;c=a.dK;BC(b,c.b,c.a,a.d5,a.ho);}
function Hf(a,b){var c,d;c=a.cD;c.b=c.b-2|0;c.a=c.a-2|0;d=a.eE;BC(b,d.b+1|0,d.a+1|0,c,a.hp);b=a.cD;b.b=b.b+2|0;b.a=b.a+2|0;}
function HC(a,b,c){return G0(a,b)&&Fl(c)?1:0;}
function XT(){var a=this;B.call(a);a.wr=20;a.eT=null;a.ei=null;a.hR=0.0;a.hK=null;a.le=0;a.ii=0;a.ch=null;a.i1=null;a.d4=null;a.e2=null;a.eZ=0;}
function AMf(){var a=new XT();AMw(a);return a;}
function AMw(a){a.wr=20;a.eT=new Bq;a.ei=new Bq;a.ch=Bz();a.i1=Eb(0);}
function Z4(a,b,c,d,e){var f,g,h,i,j,k;f=c/20|0;g=a.ch;h=Bp(g,f%g.j|0);i=a.eT;j=V(a.ch.j,a.ii);f=h.ef.a;k=((h.g7.a-(b%j|0)|0)+j|0)%j|0;if((k+f|0)>j)k= -(b%Kn(h.V)|0)|0;b=c%h.dp|0;f=h.G;k=k+V(b,f)|0;if(k<( -f|0))k=k+j|0;Bn(h.cR,h.ef.b,f);g=h.dx;b=c%h.dp|0;c=h.G;Cb(g,0.0,V(b,c),h.ef.b,c);Ed(h,e,k,i,d.nO,d.l6);}
function RG(a,b,c,d){var e,f,g,h,i,j;e=a.ch.j;while(true){f=a.ch.j;g=V(f,a.ii);if(g>(d+a.le|0))break;h=Cd(0,g);i=new Ou;g=a.ei.b;f=a.le;j=a.hK;i.cR=new Bq;i.dx=new B4;i.g7=h;i.dp=20;i.G=f;i.ef=Cd(g,20*f|0);i.fV=LP(j,f);if(i.V===null)i.V=Gv(b);Bv(a.ch,i);}if(f==e)return;Qg(a,c);}
function Qg(a,b){var c,d,e,f,g,h,i,j,k;c=a.ch;d=c.j;e=V((b/(d*20|0)|0)+1|0,d)*20|0;c=BM(c);while(BN(c)){f=BQ(c);g=a.d4;h=a.hR;Fi(g);i=0;while(true){j=f.dp;if(i>=j)break;k=e-V(d,j)|0;if(k<b)k=e;e=k+1|0;Fz(f,g,DX(e),V(f.G,i)+f.fV|0,h);i=i+1|0;}Em(f.V,g);f.mj=g.jf;}}
function IR(a){DN(a.ch,new Lx);GH(a.ch);a.d4=CZ(a.d4,null);a.e2=CZ(a.e2,null);}
function ML(){B.call(this);this.wN=null;}
function MK(){B.call(this);this.lZ=null;}
function ACZ(a,b){var c;c=a.lZ;E8(c,GP(b,IT(c)));}
function MJ(){B.call(this);this.p_=null;}
function ACb(a,b){var c;c=a.p_;HK(c,GP(b,RM(c)));}
function S9(){var a=this;B.call(a);a.iG=null;a.fU=null;a.jA=null;a.gW=null;a.jC=null;a.k3=0.0;a.rc=0.0;a.uM=0;a.tS=0;a.t5=0;a.lw=0;}
function MI(){B.call(this);this.s7=null;}
function ACa(a){var b,c;b=a.s7;c=b.i3?0:1;b.i3=c;b.ff.k3=!c?0.0:0.5;b=new R;T(b);GG(K(b,C(183)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function MP(){B.call(this);this.nF=null;}
function AFm(a){var b,c;b=a.nF;c=b.hs?0:1;b.hs=c;b=new R;T(b);GG(K(b,C(184)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function MO(){B.call(this);this.rb=null;}
function ANp(a){var b,c;b=a.rb;c=b.iK^1;b.iK=c;b=new R;T(b);GG(K(b,C(185)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function MN(){B.call(this);this.uB=null;}
function AHt(a){var b,c,d,e,f;b=a.uB;c=(b.dq+3|0)%6|0;b.dq=c;d=b.e8.data;e=d.length;f=0;while(f<e){b=d[f];b.bL=c;b=b.bx;if(b!==null)b.f9=1;f=f+1|0;}}
function MM(){B.call(this);this.nj=null;}
function AJx(a){var b;b=a.nj;b.by=b.by?0:1;IR(b.c6);b.c6=AMf();Rs(b,b.U,b.cr,b.bG.bW);}
function MH(){B.call(this);this.qu=null;}
function AMP(a){var b;b=a.qu;b.ib=b.ib?0:1;}
function MG(){B.call(this);this.ty=null;}
function AB2(a){var b;b=a.ty;b.k0=b.k0?0:1;}
var EV=F(Cg);
var ARh=null;var ARq=null;var ARi=null;var ARr=null;function AB$(){AB$=Bf(EV);AIq();}
function Zl(a,b){var c=new EV();Za(c,a,b);return c;}
function Za(a,b,c){AB$();C4(a,b,c);}
function AIq(){var b;ARh=Zl(C(186),0);ARq=Zl(C(187),1);b=Zl(C(188),2);ARi=b;ARr=G(EV,[ARh,ARq,b]);}
var AAr=F(0);
function TF(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=CX(b,f+g|0);C7(c,0,d,f,g);return d;}
function JM(b,c,d){C7(b,c,d,0,d.data.length);return d;}
function P7(b,c,d){var e;if(c>0)C7(b,0,d,0,c);e=d.data.length;if(c<e)C7(b,c+1|0,d,c,e-c|0);return d;}
function Yo(b,c,d,e){var f;if(c>0)C7(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)C7(b,d,e,c,f-d|0);}return e;}
function Gt(b){var c;c=new TQ;c.qw=b;return c;}
function XG(b,c){if(b.data.length!=c)b=CX(b,c);return b;}
function AAp(b,c,d){var e;e=c.data.length;if(e==d)c=CX(c,e*2|0);c.data[d]=b;return c;}
function S3(b,c,d){var e;e=c.data.length;if(e==d)c=KP(c,e*2|0);c.data[d]=b;return c;}
function KO(b){return Mt(b,b.data.length);}
var WY=F();
function Mt(b,c){var d,e,f,g;b=b.data;d=B1(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function KP(b,c){var d,e,f,g;b=b.data;d=Eb(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function H1(b,c){var d,e,f,g;b=b.data;d=Bu(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function CX(b,c){var d,e,f,g;d=b.data;e=Z0(Hi(Bt(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function GI(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BI;W(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Xn(b,c,d,e){var f,g;if(c>d){e=new BI;W(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function X1(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AQm;e=O(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.tZ(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function Zs(b,c){return Sa(b,0,b.data.length,c);}
function Sa(b,c,d,e){var f,g,h,i,j;f=BF(c,d);if(f>0){g=new BI;W(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function B4(){var a=this;B.call(a);a.bk=0.0;a.bA=0.0;a.Y=0.0;a.bV=0.0;}
function Cb(a,b,c,d,e){a.bk=b;a.bA=c;a.Y=d;a.bV=e;}
function Fe(a,b){a.bk=b.bk;a.bA=b.bA;a.Y=b.Y;a.bV=b.bV;return a;}
function AM6(a,b){if(a===b)return 1;return b!==null&&Bt(a)===Bt(b)&&Jk(a,b)?1:0;}
function Jk(a,b){return b.bk===a.bk&&b.bA===a.bA&&b.Y===a.Y&&b.bV===a.bV?1:0;}
var Lk=F(0);
function Fl(a){return Dv(a,null);}
function OX(){B.call(this);this.qG=null;}
function AF$(a){ID(a.qG);}
function OV(){B.call(this);this.ua=null;}
function ABV(a){I1(a.ua);}
var J8=F(0);
function W1(){var a=this;D8.call(a);a.cd=null;a.j=0;}
function Bz(){var a=new W1();AFo(a);return a;}
function AFo(a){a.cd=O(B,10);}
function Ip(a,b){var c,d;c=a.cd.data.length;if(c<b){d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.cd=CX(a.cd,d);}}
function Bp(a,b){Ic(a,b);return a.cd.data[b];}
function AJc(a){return a.j;}
function Bv(a,b){var c,d;Ip(a,a.j+1|0);c=a.cd.data;d=a.j;a.j=d+1|0;c[d]=b;a.bH=a.bH+1|0;return 1;}
function Qi(a,b,c){var d,e,f;N$(a,b);Ip(a,a.j+1|0);d=a.j;e=d;while(e>b){f=a.cd.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cd.data[b]=c;a.j=d+1|0;a.bH=a.bH+1|0;}
function E7(a,b){var c,d,e,f;Ic(a,b);c=a.cd.data;d=c[b];e=a.j-1|0;a.j=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.bH=a.bH+1|0;return d;}
function TO(a,b){var c;c=I$(a,b);if(c<0)return 0;E7(a,c);return 1;}
function GH(a){Xn(a.cd,0,a.j,null);a.j=0;a.bH=a.bH+1|0;}
function Xo(a,b,c){var d,e,f,g,h,i;N$(a,b);if(c.dB())return 0;Ip(a,a.j+c.cq()|0);d=c.cq();e=a.j;f=e-1|0;while(f>=b){g=a.cd.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.j=e+d|0;h=c.bQ();i=0;while(i<d){g=a.cd.data;e=b+1|0;g[b]=h.bJ();i=i+1|0;b=e;}a.bH=a.bH+1|0;return 1;}
function Ic(a,b){var c;if(b>=0&&b<a.j)return;c=new BT;W(c);J(c);}
function N$(a,b){var c;if(b>=0&&b<=a.j)return;c=new BT;W(c);J(c);}
function DN(a,b){var c;c=0;while(c<a.j){b.m(a.cd.data[c]);c=c+1|0;}}
var VR=F(0);
var ARd=null;function AAD(){ARd=new My;}
function Vn(){var a=this;B.call(a);a.cG=null;a.bp=null;a.eR=null;a.hg=null;}
function AHm(){var a=new Vn();AJ0(a);return a;}
function AJ0(a){a.cG=new Bq;a.bp=new Bq;a.eR=new B4;a.hg=new B4;}
function RR(a){Bn(a.bp,0,0);}
function Jb(a){var b;b=a.bp;return V(b.b,b.a)?0:1;}
function G$(a,b){return Fv(b,a.cG,a.bp);}
var EE=F();
function I8(){EE.call(this);this.we=null;}
function Rx(){EE.call(this);this.v6=null;}
function OQ(){EE.call(this);this.xr=null;}
var Gb=F(0);
var Ra=F(0);
var OC=F(0);
var ARe=0.0;function RQ(b){Cb(b,1.0471975803375244,0.75,1.25,0.375);}
function WB(){ARe=Xu(Xu(0.5,0.375),4.0);}
var Zw=F();
function Jf(){B.call(this);this.wE=null;}
var AQE=null;var ARs=null;function AGC(){AGC=Bf(Jf);ANb();}
function AEL(a){var b=new Jf();Wf(b,a);return b;}
function Wf(a,b){AGC();a.wE=b;}
function ANb(){AQE=AEL(C(189));ARs=AEL(C(190));}
function Qs(){B.call(this);this.tg=null;}
function Dv(a,b){var c,d,e;c=a.tg;d=c.qv;e=c.dl;if(BB(b,d))b=d;else{e=e.style;if(b!==null&&H(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}c.qv=b;return 1;}
function AAT(){var a=this;B.call(a);a.bv=null;a.bo=null;a.cP=0;}
function AC0(){var a=new AAT();AMT(a);return a;}
function AD$(a){var b=new AAT();AIz(b,a);return b;}
function AMT(a){a.bv=new Gc;a.bo=new Gc;}
function AIz(a,b){a.bv=new Gc;a.bo=new Gc;G8(a,b);}
function G8(a,b){SH(a.bv,b.bv);SH(a.bo,b.bo);a.cP=b.cP;}
function Kc(a,b,c){BW(a.bo,b,c);if(!a.cP)BW(a.bv,b,c);}
function Oo(a,b){BW(a.bv,b,0);BW(a.bo,b+1|0,0);}
function Dr(a){if(Ql(a.bv,a.bo)>0)return a.bo;return a.bv;}
function E0(a){if(Ql(a.bv,a.bo)<0)return a.bo;return a.bv;}
function Zz(a,b){var c,d,e,f;c=Dr(a);d=E0(a);e=c.H;if(e<=b){f=BF(b,d.H);if(f<=0)return Cd(b<=e?c.Q:0,f>=0?d.Q:(-1));}return null;}
function CY(a){var b,c;b=a.bv;c=a.bo;return (b===c?1:c!==null&&Bt(b)===Bt(c)?(b.H==c.H&&b.Q==c.Q?1:0):0)?0:1;}
function AAz(a,b){var c,d;if(!CY(a))return 0;c=Dr(a);d=E0(a);return c.H<=b&&b<d.H?1:0;}
function Sv(){var a=this;B.call(a);a.d_=null;a.d7=0;a.c1=0;}
function TD(a,b){var c,d,e;c=a.d7;d=a.d_;if(c==d.data.length)a.d_=CX(d,c+16|0);d=a.d_.data;e=a.d7;a.d7=e+1|0;d[e]=b;}
function Qn(a){var b,c,d;b=a.c1;c=a.d7-1|0;if(b==c)a.c1=b-1|0;d=a.d_.data;a.d7=c;d[c]=null;}
function Qf(){var a=this;B.call(a);a.v=null;a.cN=null;a.dI=null;a.dc=null;a.cQ=null;a.gJ=null;a.gt=null;a.b2=0;a.ki=0;a.rm=0.0;}
function BG(a,b){return a.v.data[b];}
function Ci(a){return a.v.data.length;}
function Tf(a){return Eo(a,Ci(a));}
function E9(a,b){return a.v.data[b].z;}
function AAG(a,b,c){var d,e,f,g,h;d=a.v;e=d.data;f=e[b];d=CX(d,e.length+1|0);e=d.data;a.v=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Dk(O(B_,0));a.v.data[b+1|0]=f;}else if(c==f.z){e[b]=f;e[b+1|0]=Dk(O(B_,0));}else{e=(G4(f,c)).data;d=a.v.data;d[b]=e[0];d[b+1|0]=e[1];}EZ(a,b,c,0,C(111));}
function JV(a,b){var c,d,e,f,g,h,i;c=a.v.data;d=c[b];e=c[b+1|0];f=Dk(TF(d.k,e.k));g=a.v;h=g.data.length;if(b<h&&b>=0){i=O(CK,h-1|0);c=i.data;P7(g,b,i);c[b]=f;a.v=i;return;}d=new Bo;W(d);J(d);}
function LL(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.v.data;if(!(c<d[b].z?0:1)){d=(BG(a,b)).k.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<H(h.p)){f=I(h.p,g);break a;}g=g-H(h.p)|0;f=f+1|0;}f=0;}FP();h=new Bw;d=B1(1);d.data[0]=f;Ii(h,d);EZ(a,b,c,1,h);h=a.v.data[b];i=h.k;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=H(d[j].p);if(c<b)break;c=c-b|0;j=j+1|0;}}if(H(d[j].p)==1)h.k=P7(i,j,O(B_,e-1|0));else{k=d[j];if(c<=0)l=Ds(DS(k.p,1),k.bR,k.bB);else if(c>=(H(k.p)-1|0)){l=new B_;m=k.p;R4(l,B9(m,0,H(m)-
1|0),k.bR,k.bB);}else{i=B1(H(k.p)-1|0);n=i.data;b=0;while(b<c){n[b]=I(k.p,b);b=b+1|0;}b=n.length;while(c<b){m=k.p;e=c+1|0;n[c]=I(m,e);c=e;}l=Ds(GA(i),k.bR,k.bB);}d[j]=l;}h.z=h.z-1|0;DY(h);}else if(b!=(d.length-1|0)){EZ(a,b,c,1,C(111));JV(a,b);}}
function V4(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){QS(a.v.data[b],c,e[0]);return;}g=f-1|0;d=(G4(a.v.data[b],c)).data;h=d[0];i=d[1];d=a.v;j=CX(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.k.data;f=l.length;c=!f?0:H(l[f-1|0].p);Li(h,h.k.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!DT(e[m])?Xd(e[m]):Dk(O(B_,0));d[b+m|0]=k;m=m+1|0;}Li(i,0,0,e[g]);d[b+g|0]=i;a.v=j;}
function T3(a,b){var c,d,e,f,g,h,i;c=Dr(b);d=E0(b);e=c.H;if(e==d.H)return B9(EA(a.v.data[e]),c.Q,d.Q);f=new R;T(f);b=a.v.data[c.H];e=c.Q;BY(DJ(f,DS(EA(b),e)),10);g=a.v.data;e=c.H+1|0;h=d.H;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;Wp(DJ(f,EA(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.v.data[d.H];h=d.Q;DJ(f,B9(EA(b),0,h));return S(f);}b=new Uy;W(b);J(b);}
function LU(a,b,c){var d;Uk(a,b);d=Dr(b);EZ(a,d.H,d.Q,1,c);}
function Uk(a,b){var c,d,e,f,g,h,i;a:{c=Dr(b);d=E0(b);e=c.H;if(e==d.H)FF(a.v.data[e],c.Q,d.Q);else{b=a.v.data[e];FF(b,c.Q,b.z);FF(a.v.data[d.H],0,d.Q);e=c.H+1|0;f=d.H;g=a.v;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=O(CK,(h-f|0)+e|0);Yo(g,e,f,i);a.v=i;JV(a,c.H);break a;}b=new Bo;W(b);J(b);}b=new Bo;W(b);J(b);}}}
function HD(a,b,c){return Di(b,Fn(BG(a,b),c));}
function UU(a,b){var c,d,e;c=0;d=0;while(true){e=a.v.data.length;if(c>=e)break;if((d+(BG(a,c)).z|0)>=b)return Cd(c,b-d|0);d=d+((BG(a,c)).z+1|0)|0;c=c+1|0;}return Cd(e,0);}
function Eo(a,b){var c,d,e;c=0;d=a.v.data.length;e=0;while(e<b){c=c+E9(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Ku(a,b){return KH(BG(a,b.X),b.bf);}
function EN(a){var b,c,d,e,f,g,h,i,j;b=B1(Tf(a));c=b.data;d=a.v.data.length;e=0;f=0;while(e<d){g=a.v.data[e].k.data;h=g.length;i=0;while(i<h){j=g[i].p;OI(j,0,H(j),b,f);f=f+H(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function EZ(a,b,c,d,e){var f,g,h,i,j,k;a:{a.b2=a.b2+1|0;f=a.gJ;g=O(F4,1);h=new F4;h.du=b;h.dF=c;i=KQ(e,C(111),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=Cd(b,c+H(i[0])|0);break a;}k=Cd((b+j|0)-1|0,H(i[j-1|0]));break a;}}k=Cd(b,c);}i=g.data;h.kd=k;h.lk=d;h.e$=e;i[0]=h;Bv(f,g);I3(a,b,c,d,e);}
function I3(a,b,c,d,e){var f;f=Eo(a,b)+c|0;if(!d){Nn(a.cN,f,H(e));SN(a.dI,f,H(e));}else{UA(a.cN,f,H(e));Mf(a.dI,f,H(e));}}
function L8(a,b){var c,d,e;c=KQ(b.e$,C(111),(-1));if(b.lk){V4(a,b.du,b.dF,c);Nn(a.cN,Eo(a,b.du)+b.dF|0,H(b.e$));SN(a.dI,Eo(a,b.du)+b.dF|0,H(b.e$));}else{c=c.data;d=AC0();BW(d.bv,b.du,b.dF);e=c.length;if(e==1)BW(d.bo,b.du,b.dF+H(c[0])|0);else BW(d.bo,(b.du+e|0)-1|0,H(c[e-1|0]));Uk(a,d);UA(a.cN,Eo(a,b.du)+b.dF|0,H(b.e$));Mf(a.dI,Eo(a,b.du)+b.dF|0,H(b.e$));}return b.kd;}
function Sf(a){return a.ki==a.b2?0:1;}
function GE(a){a.ki=a.b2;}
function Od(a){var b,c,d;a.gt=Bu(a.v.data.length+1|0);b=0;while(b<a.v.data.length){c=a.gt.data;d=b+1|0;c[d]=(c[b]+(BG(a,b)).z|0)+1|0;b=d;}}
function VG(a,b){var c,d,e,f,g,h;c=a.gt;if(c===null){d=0;e=0;a:{while(true){c=a.v.data;f=c.length;if(e>=f)break;g=c[e].z;if(b<=(d+g|0)){h=Di(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=Di(f,0);}return h;}d=Zs(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=Di(d,b-(d<0?0:a.gt.data[d])|0);if(h.bf>=(BG(a,h.X)).z){h.X=h.X+1|0;h.bf=0;}return h;}
var My=F();
function AMQ(a){}
function Gc(){var a=this;B.call(a);a.H=0;a.Q=0;}
function BW(a,b,c){a.H=b;a.Q=c;}
function SH(a,b){a.H=b.H;a.Q=b.Q;}
function Ql(a,b){var c;c=BF(a.H,b.H);if(c)return c;return BF(a.Q,b.Q);}
function JL(){var a=this;B.call(a);a.km=null;a.i2=null;}
function KA(a){return a.km.X;}
function IJ(a){return a.km.bf;}
function CK(){var a=this;B.call(a);a.k=null;a.z=0;a.e6=null;a.dY=null;a.dm=null;a.f8=null;a.fj=0;a.f9=0;a.gx=0;}
var ARt=0;var ARu=0;var ARk=0;function Xd(a){var b=new CK();ZP(b,a);return b;}
function Dk(a){var b=new CK();PA(b,a);return b;}
function ZP(a,b){var c;c=O(B_,1);c.data[0]=XV(b);PA(a,c);}
function PA(a,b){var c,d,e,f;c=b.data;a.k=b;d=0;e=c.length;f=0;while(f<e){d=d+H(c[f].p)|0;f=f+1|0;}a.z=d;DY(a);}
function If(a){return a.k.data.length;}
function Fn(a,b){var c;c=HR(a,b);return c<=0?0:a.dm.data[c-1|0];}
function HR(a,b){var c,d,e,f;c=a.k.data.length;if(!c)return (-1);if(!(a.dm!==null&&!a.gx)){UV(a);d=0;e=0;f=a.k.data.length;while(d<f){e=e+H(a.k.data[d].p)|0;a.dm.data[d]=e;d=d+1|0;}a.gx=0;}d=Sa(a.dm,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function KH(a,b){var c;c=a.k.data;if(!c.length)return null;return c[HR(a,b)];}
function FF(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.z){a.k=O(B_,0);DY(a);a.z=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.k.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=H(g[e].p);i=H(a.k.data[f].p);j=BF(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.k.data[f];if(!b&&c==H(k.p)?1:0){g=a.k;a.k=P7(g,e,O(B_,g.data.length-1|0));a.z=a.z-d|0;DY(a);return;}a.k.data[e]=Ds(GX(B9(k.p,0,b),DS(k.p,c)),k.bR,k.bB);}else{g=a.k.data;l=g[e];m=g[f];if(b){if(b!=
H(l.p))a.k.data[e]=Ds(B9(l.p,0,b),l.bR,l.bB);e=e+1|0;}if(c==H(m.p))f=f+1|0;else if(c)a.k.data[f]=Ds(DS(m.p,c),m.bR,m.bB);g=a.k;a.k=Yo(g,e,f,O(B_,(g.data.length-f|0)+e|0));}a.z=a.z-d|0;DY(a);}
function G4(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return G(CK,[Dk(O(B_,0)),a]);if(b>=a.z)return G(CK,[a,Dk(O(B_,0))]);c=a.k;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=H(e[d].p);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return G(CK,[Dk(JM(c,0,O(B_,d))),Dk(JM(c,d,O(B_,f-d|0)))]);h=e[d];e=JM(c,0,O(B_,d+1|0));i=e.data;j=JM(c,d,O(B_,f-d|0));c=j.data;i[d]=Ds(B9(h.p,0,b),h.bR,h.bB);c[0]=Ds(DS(h.p,b),h.bR,h.bB);return G(CK,[Dk(e),Dk(j)]);}
function QS(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.k.data;if(e>=f.length)break a;g=H(f[d].p);if(b<=g)break;b=b-g|0;d=e;}}Li(a,d,b,c);}
function Li(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(DT(d))return;e=a.k;f=e.data;g=f.length;if(!g){h=O(B_,1);h.data[0]=XV(d);a.k=h;}else if(!b&&!c){h=O(B_,g+1|0);f=h.data;C7(e,0,h,1,g);f[0]=XV(d);a.k=h;}else{i=f[b];if(c<=0)j=Ds(GX(d,i.p),i.bR,i.bB);else if(c>=H(i.p))j=Ds(GX(i.p,d),i.bR,i.bB);else{k=H(d);l=k+c|0;m=H(i.p)-c|0;e=B1(H(i.p)+k|0);h=e.data;n=0;while(n<c){h[n]=I(i.p,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=I(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=I(i.p,g+c|0);g=g+1|0;}j=Ds(GA(e),i.bR,i.bB);}f[b]=j;}a.z=a.z+
H(d)|0;DY(a);}
function Mj(a){var b,c,d,e,f,g;b=0;c=a.k.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<H(f.p)){if(I(f.p,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Jm(a,b,c){var d,e,f,g,h,i,j;d=a.k.data.length;e=a.e6;if(!(e!==null&&e.data.length>=d)){a.e6=ABX(d);a.dY=Bu(d);a.fj=1;}UV(a);if(!a.fj)ARu=ARu+1|0;else{f=0;g=0.0;ARt=ARt+1|0;h=0;while(h<d){i=c.data;j=a.k.data[h];f=f+H(j.p)|0;a.dm.data[h]=f;CF(b,i[Ik(j)]);g=g+Gd(b,j.p);a.e6.data[h]=g;a.dY.data[h]=g+0.5|0;h=h+1|0;}a.z=f;a.fj=0;a.gx=0;}}
function UV(a){var b;b=a.dm;if(!(b!==null&&b.data.length>=a.k.data.length)){a.dm=Bu(a.k.data.length);a.gx=1;}}
function DY(a){a.fj=1;a.f9=1;a.gx=1;a.f8=null;}
function QK(a,b,c,d){var e,f,g,h,i,j,k;if(a.f8===null)a.f8=O($rt_arraycls($rt_intcls()),a.k.data.length);e=a.f8.data[d];if(e===null){e=c.data;f=a.k.data[d];CF(b,e[Ik(f)]);f=f.p;e=Bu(H(f)-1|0);c=ES(f);g=!d?0.0:a.e6.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bw;k=i+1|0;Lf(f,c,0,k);h[i]=g+Gd(b,f)+0.5|0;i=k;}a.f8.data[d]=e;}return e;}
function FK(a,b,c,d){var e,f,g,h,i;if(a.k.data.length&&b){if(!(!a.fj&&a.dY!==null))Jm(a,c,d);if(b>=a.z)return a.dY.data[a.k.data.length-1|0];e=0;f=0;a:{while(true){g=a.k.data;if(f>=g.length)break a;h=e+H(g[f].p)|0;i=BF(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.dY.data[f];}return (QK(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function Eq(a){var b,c,d;a:{b=a.k.data.length;if(b){c=a.dY.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function F0(a,b){var c;if(b>=a.z)return b+1|0;c=HR(a,b);return a.dm.data[c];}
function EA(a){var b,c,d,e;b=new R;Fp(b,a.z);c=a.k.data;d=c.length;e=0;while(e<d){DJ(b,c[e].p);e=e+1|0;}return S(b);}
function Yk(){ARk=0;}
var V$=F(Bo);
var T1=F(0);
function Ze(){B.call(this);this.kN=null;}
function AN7(a){var b=new Ze();AIC(b,a);return b;}
function AIC(a,b){a.kN=b;}
function D5(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.kN));}
function CQ(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.kN));}
var SF=F(0);
function JQ(){var a=this;B.call(a);a.hn=null;a.hY=null;a.xb=null;}
function Zu(a,b){var c=new JQ();AGy(c,a,b);return c;}
function ANH(a,b,c){var d=new JQ();M0(d,a,b,c);return d;}
function Wo(b){var c,d,e,f,g,h,i;c=new JQ;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=O(Bw,0);else{f=O(Bw,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=Eu(e[h]);h=h+1|0;}}}else f=O(Bw,0);M0(c,d,b,f);return c;}
function AGy(a,b,c){M0(a,b,c,O(Bw,0));}
function M0(a,b,c,d){a.hn=b;a.hY=c;a.xb=d;}
function Iq(a){var b;b=a.hn;return Eu(b!==null?b.name:a.hY.name);}
function Oa(){var a=this;B.call(a);a.fb=null;a.dU=null;}
function ADZ(a,b){var c=new Oa();AFA(c,a,b);return c;}
function AFA(a,b,c){a.fb=b;a.dU=c;}
function SN(a,b,c){var d;d=a.fb;if(d===null)return;Ps(a,d,b,c);}
function Mf(a,b,c){var d;d=a.fb;if(d===null)return;Si(a,d,b,c);}
function Ps(a,b,c,d){var e,f,g,h;e=b.dC.bQ();while(e.b$()){VN(a,e.bJ(),c,d);}e=b.d1.bQ();while(e.b$()){f=e.bJ();g=new RZ;g.pR=a;DK(a,g,f,c,d);}h=b.fw.bQ();while(h.b$()){e=h.bJ();VN(a,e.hI,c,d);f=new R0;f.ms=a;DK(a,f,e.iw,c,d);}b=b.ca.bQ();while(b.b$()){Ps(a,b.bJ(),c,d);}}
function VN(a,b,c,d){IE(a,b.dD,c,d);}
function DK(a,b,c,d,e){var f,g;a:{if(c instanceof FC){f=c.fS;g=new V1;g.no=a;g.nm=b;g.nl=d;g.nn=e;DN(f,g);}else{if(!(c instanceof HJ)){if(!(c instanceof H4))break a;f=c;DK(a,b,f.gV,d,e);DK(a,b,f.f5,d,e);return;}g=c.f3;f=new V2;f.ux=a;f.uw=b;f.uv=d;f.uu=e;DN(g,f);}}if(c!==null){c=c.er;if(c!==null)b.h_(c,Ct(d),Ct(e));}}
function IE(a,b,c,d){var e;e=b.cU;if(e>=c)b.cU=e+d|0;}
function Si(a,b,c,d){var e,f,g,h;e=b.dC.bQ();while(e.b$()){Hl(a,(e.bJ()).dD,c,d);}e=b.d1.bQ();while(e.b$()){f=e.bJ();g=new QV;g.sJ=a;DK(a,g,f,c,d);}h=b.fw.bQ();while(h.b$()){e=h.bJ();Hl(a,e.hI.dD,c,d);f=new QW;f.rW=a;DK(a,f,e.iw,c,d);}b.dC.kF(new QU);b.d1.kF(new QT);b=b.ca.bQ();while(b.b$()){Si(a,b.bJ(),c,d);}}
function Hl(a,b,c,d){var e;e=b.cU;if(e>=c)b.cU=e-d|0;}
function B_(){var a=this;B.call(a);a.p=null;a.bR=0;a.bB=0;}
function XV(a){var b=new B_();AEP(b,a);return b;}
function Ds(a,b,c){var d=new B_();R4(d,a,b,c);return d;}
function AEP(a,b){R4(a,b,0,0);}
function R4(a,b,c,d){a.p=b;a.bR=c;a.bB=d;}
function Ik(a){return a.bB&3;}
function Gy(b,c){return (!b?0:2)+(!c?0:1)|0;}
var JI=F(Jo);
function Qo(){var a=this;B.call(a);a.cK=null;a.dP=0;}
var ARv=null;function AAj(a){var b=new Qo();AAV(b,a);return b;}
function AAV(a,b){a.dP=0;a.cK=b;}
function Oh(a,b){var c;if(b.dM)return b;b=BM(b.W);while(true){if(!BN(b))return null;c=Oh(a,BQ(b));if(c!==null)break;}return c;}
function MA(a,b,c){var d,e,f,g;d=Jv(a,a.cK,b);if(d===null)return;b=c.b_;e=b===null?ARw:b.ca;f=c.W;c=a.cK;if(d===c){if(c.b_===null)c.b_=b;b=new QO;b.pM=a;DN(f,b);b=new QN;b.sG=a;e.d6(b);b=a.cK;b.W=f;b.b_.ca=e;b.dM=0;return;}if(!DO(f)){c=d.fP;if(c!==null){b=new Nc;b.ns=c;DN(f,b);g=I$(c.W,d);if(g==(-1))FZ(c.W,f);else{E7(c.W,g);Xo(c.W,g,f);}}}b=d.b_;if(b!==null){b=b.fE;c=new Q0;c.px=b;e.d6(c);g=I$(b.ca,d.b_);if(g==(-1))FZ(b.ca,e);else{b.ca.lt(g);b.ca.rN(g,e);}}}
function Jv(a,b,c){var d,e,f,g;d=b.bD;if(d.bC==c.bC&&d.bF==c.bF?1:0){d=BM(b.W);while(BN(d)){e=Jv(a,BQ(d),c);if(e!==null)return e;}return b;}b=BM(b.W);while(true){if(!BN(b))return null;d=BQ(b);f=c.bC;g=c.bF;e=d.bD;if(e.bC<=f&&g<=e.bF?1:0){e=Jv(a,d,c);if(e!==null)break;}}return e;}
function RW(a,b,c){Bv(c,b.bD);b=BM(b.W);while(BN(b)){RW(a,BQ(b),c);}}
function Nn(a,b,c){a.dP=0;Ju(a,a.cK,b,c);}
function Ju(a,b,c,d){var e;if(CL(b)<c)return;a:{if(CN(b)>c){Kl(b,d);Gw(b,d);b=BM(b.W);while(BN(b)){Ju(a,BQ(b),c,d);}}else{if(!Im(b,c)){if(a.dP)break a;if(CL(b)!=c)break a;}Gw(b,d);if(CN(b)==c&&a.dP)Kl(b,d);e=BM(b.W);while(BN(e)){Ju(a,BQ(e),c,d);}if(!a.dP){b.dM=1;a.dP=1;}}}}
function UA(a,b,c){a.dP=0;It(a,a.cK,b,c);}
function It(a,b,c,d){var e,f,g,h,i,j;if(CL(b)<c)return;e=CN(b);f=c+d|0;if(e>f){e= -d|0;Kl(b,e);Gw(b,e);g=BM(b.W);while(BN(g)){It(a,BQ(g),c,d);}b.W=LS(a,b.W);}else{h=b.bD;if(c<=h.bC&&h.bF<=f?1:0){if(b===a.cK){Kz(b,0);Ir(b,0);h=b.b_;if(h!==null)h.ca.hq();}else{Kz(b,(-1));Ir(b,(-1));h=b.b_;if(h!==null){Vs(h);b.b_=null;}}GH(b.W);}else{e=Im(b,c);f=Im(b,f);if(e&&f)Gw(b, -d|0);else if(e)Ir(b,c);else{if(!f)return;Kz(b,c);Gw(b, -d|0);}h=BM(b.W);while(BN(h)){It(a,BQ(h),c,d);}h=S6(b.W);g=NI(0);i=new Qu;j=new Te;j.xL=i;j.ij
=g;while(SR(h,j)){}if(!j.ij.ly&&!a.dP)b.dM=1;else a.dP=1;b.W=LS(a,b.W);}}}
function LS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Bz();d=null;e=ARv;f=b.cd;g=b.j;if(e===null)e=AQm;h=O(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}X1(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.bH=b.bH+1|0;b=BM(b);while(BN(b)){m=BQ(b);if(CN(m)==CL(m))continue;if(!m.dM){if(d!==null){Bv(c,d);d=null;}Bv(c,m);}else if(d===null)d=m;else{n=AL4(IK(Be(CN(d),CN(m)),Ba(CL(d),CL(m)),d.bD.el),d.fP,d.b_);n.dM=1;d=m.b_;if(d===null)d=n;else{Vs(d);d=n;}}}if(d!==null)Bv(c,d);return c;}
function UO(a,b,c,d){var e,f,g,h,i,j,k,l;if((CL(c)-CN(c)|0)<43)e=B9(d,CN(c),CL(c));else{e=B9(d,CN(c),CN(c)+20|0);f=B9(d,CL(c)-20|0,CL(c));g=new R;T(g);K(K(K(g,e),C(101)),f);e=S(g);}e=S_(e,C(111),C(191));f=IO();g=c.bD;h=g.bC;i=g.bF;j=g.el;k=new R;T(k);BY(k,40);BY(Bk(K(Bk(K(Bk(k,h),C(192)),i),C(192)),j),41);k=S(k);h=c.dM;g=new R;T(g);GG(K(K(g,k),C(192)),h);l=S(g);g=new R;T(g);k=Bk(g,b);BY(k,32);k=K(k,l);BY(k,9);K(k,e);CU(f,S(g));c=BM(c.W);h=b+1|0;while(BN(c)){UO(a,h,BQ(c),d);}}
function AA3(){ARv=new T$;}
function ABe(){var a=this;B.call(a);a.bC=0;a.bF=0;a.el=0;}
function IK(a,b,c){var d=new ABe();AEK(d,a,b,c);return d;}
function AEK(a,b,c,d){a.bC=b;a.bF=c;a.el=d;}
function AK1(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return a.bC==c.bC&&a.bF==c.bF&&a.el==c.el?1:0;}return 0;}
function ADA(a,b){var c;b=b;c=BF(a.bC,b.bC);if(!c)c=BF(b.bF,a.bF);return c;}
var T$=F();
function AHw(a,b,c){var d;b=b;c=c;b=b.bD;c=c.bD;d=BF(b.bC,c.bC);if(!d)d=BF(c.bF,b.bF);return d;}
function PE(){var a=this;B.call(a);a.bD=null;a.fP=null;a.W=null;a.b_=null;a.dM=0;}
function AL4(a,b,c){var d=new PE();AAi(d,a,b,c);return d;}
function AAi(a,b,c,d){a.dM=0;a.bD=b;a.fP=c;a.W=Bz();a.b_=d;}
function ABj(b){return PT(b,null);}
function PT(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=X(b);e=X(b);f=X(b);g=X(b);h=X(b);i=IK(d,e,f);j=new PE;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AAi(j,i,null,l);m=0;while(m<g){l=PT(b,c);l.fP=j;Bv(j.W,l);m=m+1|0;}return j;}
function WT(b,c,d){var e,f,g,h,i;a:{e=b.bD;f=b.W;g=e.bC;h=e.bF;i=e.el;Bg(c,g);Hg(c,h,i);Bg(c,f.j);if(d!==null){e=b.b_;if(e!==null&&TX(d,e)){g=(KT(d,b.b_)).bb;break a;}}g=(-1);}Bg(c,g);b=BM(f);while(BN(b)){WT(BQ(b),c,d);}}
function CN(a){return a.bD.bC;}
function CL(a){return a.bD.bF;}
function Kz(a,b){a.bD.bC=b;}
function Ir(a,b){a.bD.bF=b;}
function Kl(a,b){var c;c=a.bD;c.bC=c.bC+b|0;}
function Gw(a,b){var c;c=a.bD;c.bF=c.bF+b|0;}
function Im(a,b){return CN(a)<=b&&b<CL(a)?1:0;}
function ADo(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return BB(a.bD,c.bD)&&BB(a.W,c.W)?1:0;}return 0;}
function JD(){var a=this;JG.call(a);a.oI=null;a.np=null;}
function WZ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.oI;e=0;f=0;g=a.np;a:{b:{while(true){if((e+32|0)>f&&Fa(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=Ez(b)+j|0;h=i.length;f=Be(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new BT;b=new R;T(b);Bk(K(Bk(K(b,C(193)),k),C(77)),h);Br(l,S(b));J(l);}if(Ez(b)<e)break;if(e<0){b=new BT;c=new R;T(c);K(Bk(K(c,C(78)),e),C(79));Br(b,S(c));J(b);}h=b.ck;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.qd.data[n+b.s8|0];m=m+1|0;j=o;n=k;}b.ck
=h+e|0;e=0;}if(!Fa(c)){l=!Fa(b)&&e>=f?AQJ:AQI;break a;}i=g.data;k=Be(Ez(c),i.length);p=new Mw;p.l8=b;p.ps=c;l=Y1(a,d,e,f,g,0,k,p);e=p.sQ;j=p.t9;if(l===null){if(!Fa(b)&&e>=f)l=AQJ;else if(!Fa(c)&&e>=f)l=AQI;}UT(c,g,0,j);if(l!==null)break a;}b=new Ub;W(b);J(b);}p=new BT;l=new R;T(l);BY(Bk(K(Bk(K(l,C(80)),j),C(75)),h),41);Br(p,S(l));J(p);}Q9(b,b.ck-(f-e|0)|0);return l;}
var Ob=F(JD);
function Y1(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Kx(h,2))break a;i=AQI;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Vc(l)){if((f+3|0)>g){j=j+(-1)|0;if(Kx(h,3))break a;i=AQI;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Cm(l)){i=J3(1);break a;}if
(j>=d){if(Fa(h.l8))break a;i=AQJ;break a;}c=j+1|0;m=k[j];if(!CI(m)){j=c+(-2)|0;i=J3(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Kx(h,4))break a;i=AQI;break a;}k=e.data;o=D4(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.sQ=j;h.t9=f;return i;}
var Su=F(DD);
function He(){var a=this;B.call(a);a.bI=null;a.fm=null;a.rF=null;a.hu=null;a.dA=null;a.sT=null;a.tt=null;a.t6=null;}
function ARx(a,b,c,d,e){var f=new He();H6(f,a,b,c,d,e);return f;}
function H6(a,b,c,d,e,f){var g;g=c.data;a.sT=Yr(C(194),16.0);a.tt=Yr(C(194),17.0);a.t6=Yr(C(103),15.0);a.bI=b;a.rF=c;a.hu=d;if(g.length>=15){a.fm=e;a.dA=f;return;}b=new BI;W(b);J(b);}
function HE(){var a=this;B.call(a);a.up=null;a.fQ=null;a.r0=null;a.wx=null;a.pG=null;a.lu=null;a.nN=null;a.us=null;a.kf=null;a.j7=null;a.hB=null;}
function ARy(a,b,c,d,e,f,g,h,i,j,k){var l=new HE();K9(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function K9(a,b,c,d,e,f,g,h,i,j,k,l){a.up=b;a.fQ=c;a.r0=d;a.wx=e;a.pG=f;a.lu=g;a.nN=h;a.us=i;a.kf=j;a.j7=k;a.hB=l;}
var W9=F(0);
function Ws(){var a=this;B.call(a);a.eB=null;a.hd=null;a.nO=null;a.l6=null;}
function ZL(a,b,c,d){var e=new Ws();AMV(e,a,b,c,d);return e;}
function AMV(a,b,c,d,e){a.eB=b;a.hd=c;a.nO=d;a.l6=e;}
var Zf=F(0);
function AA7(){var b,c;b=new HV;c=N(C(195));AIa();I9(b,c,ARz,ARA);return b;}
function AAF(){var b,c;b=new HV;c=N(C(90));ACi();I9(b,c,ARB,ARC);return b;}
function AAZ(){var b,c;b=new HV;AAw();c=ARD;ACu();I9(b,c,ARE,ARF);return b;}
function ABo(){var a=this;B.call(a);a.qn=null;a.lM=null;a.sp=null;a.mk=null;}
function Ww(a,b,c,d){var e=new ABo();ACN(e,a,b,c,d);return e;}
function ACN(a,b,c,d,e){a.qn=b;a.lM=c;a.sp=d;a.mk=e;}
function V9(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dA.lM;break a;case 3:if(c!=3){b=b.dA.mk;break a;}b=b.dA.sp;break a;default:b=b.bI.fQ;break a;}b=b.dA.qn;}return b;}
function J4(a,b,c){return V9(a,b,0,c);}
var OO=F();
function AMa(a,b){return b.text();}
function OW(){B.call(this);this.n7=null;}
function AID(a,b){var c,d;c=a.n7;b=ZJ(b);d=AD4(b.hD,null,AJY(c));DG(AP8,c,d);if(BB(AP7,c))Ul(d);}
var OY=F();
function ALw(a,b){AA$(b);}
function Ld(){var a=this;B.call(a);a.id=null;a.hS=null;}
function Lr(a,b){var c;c=a.hS;a.hS=b;return c;}
function Iw(){var a=this;Ld.call(a);a.bw=null;a.bN=null;a.e1=0;a.fa=0;}
function IM(a){var b;b=JH(a);if(b==2){if(JH(a.bN)<0)a.bN=L3(a.bN);return NG(a);}if(b!=(-2))return a;if(JH(a.bw)>0)a.bw=NG(a.bw);return L3(a);}
function JH(a){var b,c;b=a.bN;c=b===null?0:b.e1;b=a.bw;return c-(b===null?0:b.e1)|0;}
function L3(a){var b;b=a.bw;a.bw=b.bN;b.bN=a;DW(a);DW(b);return b;}
function NG(a){var b;b=a.bN;a.bN=b.bw;b.bw=a;DW(a);DW(b);return b;}
function DW(a){var b,c,d;b=a.bN;c=b===null?0:b.e1;b=a.bw;d=b===null?0:b.e1;a.e1=Ba(c,d)+1|0;a.fa=1;b=a.bw;if(b!==null)a.fa=1+b.fa|0;b=a.bN;if(b!==null)a.fa=a.fa+b.fa|0;}
function HS(){var a=this;B4.call(a);a.fJ=0;a.fM=0;a.fK=0;a.fL=0;}
function Ha(a){var b=new HS();AMZ(b,a);return b;}
function DU(a,b,c){var d=new HS();AEt(d,a,b,c);return d;}
function N(a){var b=new HS();AKY(b,a);return b;}
function EX(a,b,c,d){var e=new HS();PD(e,a,b,c,d);return e;}
function BA(a){var b=new HS();IQ(b,a);return b;}
function AMZ(a,b){PD(a,b,b,b,255);}
function AEt(a,b,c,d){PD(a,b,c,d,255);}
function AKY(a,b){if(!(H(b)!=4&&H(b)!=7&&H(b)!=9)&&I(b,0)==35){if(H(b)==4){a.fJ=HY(I(b,1))*17|0;a.fM=HY(I(b,2))*17|0;a.fK=HY(I(b,3))*17|0;a.fL=255;}else{a.fJ=Kj(I(b,1),I(b,2));a.fM=Kj(I(b,3),I(b,4));a.fK=Kj(I(b,5),I(b,6));a.fL=H(b)!=9?255:Kj(I(b,7),I(b,8));}IW(a.fJ,a.fM,a.fK,a.fL,a);return;}}
function PD(a,b,c,d,e){a.fJ=b;a.fM=c;a.fK=d;a.fL=e;IW(b,c,d,e,a);}
function IQ(a,b){a.fJ=b.fJ;a.fM=b.fM;a.fK=b.fK;a.fL=b.fL;Fe(a,b);}
function HY(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Kj(b,c){return (16*HY(b)|0)+HY(c)|0;}
var CO=F(0);
var AQX=null;var ARG=null;var AQZ=null;var AQY=null;var AQ1=null;var AQ0=null;var AQ3=null;var AQ2=null;var AQ5=null;var AQ4=null;var AQ6=null;function AE$(){AE$=Bf(CO);ALh();}
function ALh(){AQX=Ha(206);ARG=N(C(196));AQZ=N(C(197));AQY=N(C(85));AQ1=N(C(198));AQ0=N(C(199));AQ3=N(C(200));AQ2=N(C(201));AQ5=EX(107,106,107,128);AQ4=EX(30,31,34,0);AQ6=N(C(87));}
function B6(){Cg.call(this);this.hl=null;}
var ARH=null;var ARI=null;var ARJ=null;var ARK=null;var ARL=null;var ARp=null;var ARM=null;var ARN=null;var ARO=null;var ARP=null;var ARQ=null;var ARR=null;var ARS=null;var ART=null;var ARU=null;var AQ7=null;function S$(){S$=Bf(B6);AHp();}
function Dq(a,b,c){var d=new B6();Qv(d,a,b,c);return d;}
function AOa(a,b,c,d){var e=new B6();U2(e,a,b,c,d);return e;}
function Qv(a,b,c,d){S$();C4(a,b,c);a.hl=G7(d,null);}
function U2(a,b,c,d,e){S$();C4(a,b,c);a.hl=G7(d,e);}
function AHp(){var b,c;b=new B6;AE$();Qv(b,C(202),0,ARG);ARH=b;ARI=Dq(C(203),1,N(C(204)));ARJ=Dq(C(205),2,N(C(206)));ARK=Dq(C(207),3,N(C(208)));ARL=Dq(C(209),4,ARG);ARp=Dq(C(210),5,N(C(211)));ARM=Dq(C(212),6,N(C(213)));ARN=Dq(C(214),7,N(C(215)));ARO=Dq(C(216),8,N(C(217)));c=new B6;AAK();U2(c,C(218),9,ARV,N(C(200)));ARP=c;ARQ=AOa(C(219),10,ARV,N(C(88)));ARR=Dq(C(220),11,N(C(221)));ARS=Dq(C(222),12,N(C(223)));ART=Dq(C(224),13,ARG);b=Dq(C(225),14,N(C(226)));ARU=b;AQ7=G(B6,[ARH,ARI,ARJ,ARK,ARL,ARp,ARM,ARN,ARO,ARP,
ARQ,ARR,ARS,ART,b]);}
function H0(){var a=this;B.call(a);a.hC=null;a.nE=null;}
function G7(a,b){var c=new H0();AIf(c,a,b);return c;}
function AIf(a,b,c){a.hC=b;a.nE=c;}
function Hk(){var a=this;B.call(a);a.hW=null;a.hi=null;a.t3=null;a.xs=null;a.jI=null;a.oe=null;a.m9=null;}
function ARW(a,b,c,d,e,f,g){var h=new Hk();Kk(h,a,b,c,d,e,f,g);return h;}
function Kk(a,b,c,d,e,f,g,h){a.t3=b;a.xs=c;a.hi=d;a.jI=e;a.hW=f;a.oe=g;a.m9=h;}
function Y7(){var a=this;B.call(a);a.k9=null;a.p4=0;}
function We(a,b){var c=new Y7();AKW(c,a,b);return c;}
function AKW(a,b,c){var d;d=new B4;a.k9=d;a.p4=b;d.bV=c;}
function NY(a,b){return Cn(a.p4,b);}
var Df=F(0);
var AQ_=null;var ARa=null;var AQ8=null;var AQ9=null;var AQ$=null;var ARB=null;var ARC=null;var ARb=null;var ARc=null;function ACi(){ACi=Bf(Df);AJt();}
function AJt(){AQ_=N(C(199));ARa=N(C(227));AQ8=N(C(90));AQ9=N(C(213));AQ$=N(C(196));ARB=N(C(199));ARC=N(C(228));ARb=N(C(229));ARc=DU(43,45,48);}
function XQ(){var a=this;B.call(a);a.iH=null;a.hj=0.0;}
function Yr(a,b){var c=new XQ();AJn(c,a,b);return c;}
function AJn(a,b,c){a.iH=b;a.hj=c;}
function AKQ(a,b){if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){b=b;return a.hj===b.hj&&BB(a.iH,b.iH)?1:0;}return 0;}
function Hw(){var a=this;B.call(a);a.rr=null;a.m2=null;a.n6=null;a.si=null;a.pw=null;a.hy=null;}
function ARX(a,b,c,d,e,f){var g=new Hw();Lc(g,a,b,c,d,e,f);return g;}
function Lc(a,b,c,d,e,f,g){a.rr=b;a.m2=c;a.n6=d;a.si=e;a.pw=f;a.hy=g;}
function HV(){var a=this;B.call(a);a.ju=null;a.kQ=null;a.sc=null;}
function ARY(a,b,c){var d=new HV();I9(d,a,b,c);return d;}
function I9(a,b,c,d){a.ju=b;a.kQ=c;a.sc=d;}
function KM(a,b){return !b?a.kQ:a.sc;}
function Xh(){var a=this;B.call(a);a.kj=null;a.q6=null;a.tj=null;}
function ABf(a,b,c){var d=new Xh();AL2(d,a,b,c);return d;}
function AL2(a,b,c,d){a.kj=b;a.q6=c;a.tj=d;}
var CD=F(0);
var ARZ=null;var ARV=null;var AR0=null;var AR1=null;var AR2=null;var AR3=null;var AR4=null;var AR5=null;var AR6=null;var AR7=null;var AR8=null;function AAK(){AAK=Bf(CD);AM$();}
function AM$(){ARZ=Ha(187);ARV=N(C(230));AR0=Ha(55);AR1=Ha(43);AR2=DU(33,66,131);AR3=DU(60,63,65);AR4=N(C(231));AR5=N(C(232));AR6=EX(85,85,85,128);AR7=EX(43,43,43,0);AR8=N(C(233));}
function YR(){var a=this;B.call(a);a.jH=0;a.wn=null;}
var X_=F();
function Sq(){var a=this;B.call(a);a.nw=null;a.rA=null;a.sq=null;}
function AAv(){var a=this;B.call(a);a.hT=null;a.jn=null;a.e4=null;a.xe=null;}
function AJY(a){var b=new AAv();AKN(b,a);return b;}
function AKN(a,b){var c,d,e;c=null;d=null;e=null;a.hT=c;a.jn=d;a.e4=b;a.xe=e;}
function Tl(a){var b,c;b=a.e4;if(b===null)return C(5);c=Yw(b,C(234));return c==(-1)?a.e4:DS(a.e4,c+1|0);}
function AD6(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return BB(a.hT,c.hT)&&BB(a.jn,c.jn)&&BB(a.e4,c.e4)?1:0;}return 0;}
var R6=F();
function AEF(a,b){ZN(b);}
function Iv(){var a=this;B.call(a);a.d9=null;a.eA=null;a.eq=null;}
var AQL=0;function ZN(a){var b;b=a.eA;if(b!==null){AQL=AQL-1|0;a.d9.dz.deleteTexture(b);a.eA=null;}}
function Cf(a){return a.eq.b;}
function Kn(a){return a.eq.a;}
function RV(a,b,c,d){var e;e=a.eq;e.b=b;e.a=c;KR(a);a.d9.dz.texStorage2D(3553,1,d,b,c);e=a.d9.dz;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function KR(a){var b,c;b=a.d9.dz;c=a.eA;b.bindTexture(3553,c);}
function Em(a,b){var c,d,e,f,g,h;a:{c=b.k2;d=b.ka;e=a.eq;f=e.b;if(f){g=e.a;if(g){if(f==c&&g==d?1:0){KR(a);break a;}e=a.d9.dz;h=a.eA;e.deleteTexture(h);a.eA=a.d9.dz.createTexture();RV(a,c,d,32856);break a;}}RV(a,c,d,32856);}ON(a,b,0,0);}
function PR(a,b,c,d){KR(a);ON(a,b,c,d);}
function ON(a,b,c,d){var e;e=a.d9.dz;b=b.hb;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Wy=F();
function Fv(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function Xf(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function SV(){var a=this;B.call(a);a.bi=null;a.K=null;a.N=null;a.fy=null;}
function Yn(a,b,c,d){var e,f,g,h;e=a.K;f=BB(e.hv,c)?0:1;g=BB(e.gb,b)?0:1;h=d===e.is?0:1;if(f){e.hv=c;e.em=null;N6(e,0);}e.gh=!f&&!g&&!h?0:1;e.gb=b;e.is=d;e.hz=0;Mh(a);}
function Y2(a,b){a.fy=b;}
function JU(a,b,c){var d;d=a.N;d.kO(b,c,d.eF);Mh(a);}
function Mh(a){var b,c,d,e;b=a.K;c=a.N.o.b;b.o.b=c;d=b.cI;if(d!==null&&c!=Cf(d)&&!(c>=b.hz&&Cf(b.cI)>=b.hz))b.gh=1;b=a.K;b.eF=a.bi.bW;if(Uh(b))c=0;else{b=a.K;Th(b);e=Ck(b.eM,b.is);N6(b,Fk(b.em)+(e*2|0)|0);c=b.o.a;}b=a.K.D;d=a.N.D;Bn(b,d.b,d.a-c|0);}
function KB(b,c){if(b<0)c=C(235);else if(b>0)c=C(236);return c;}
function VX(a,b,c){var d;d=a.K.D.b;return (d-c|0)<=b&&b<d?1:0;}
function LO(a,b,c){var d,e;d=a.K;e=d.D.b+d.o.b|0;return e<=b&&b<(e+c|0)?1:0;}
function N4(a,b,c){var d;d=a.K.D.a;return (d-c|0)<=b&&b<d?1:0;}
function Mu(a,b,c){var d,e;d=a.N;e=d.D.a+d.o.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Un(a,b,c){var d,e,f;d=a.K.D.a-c|0;e=a.N;f=(e.D.a+e.o.a|0)+c|0;return d<=b&&b<f?1:0;}
function UW(a,b,c){var d,e;d=a.K.D.a+c|0;e=a.N;return YB(b,d,(e.D.a+e.o.a|0)-c|0);}
function M5(a,b,c){var d,e,f;d=a.K;e=d.D.b;f=e-c|0;e=(e+d.o.b|0)+c|0;return f<=b&&b<e?1:0;}
function MB(a,b,c){var d,e;d=a.K;e=d.D.b;return YB(b,e+c|0,(e+d.o.b|0)-c|0);}
function YB(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BF(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function Hz(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bq;f=new Bq;g=b.b;h=b.a;b=a.N;i=b.D;j=i.b;k=i.a;b=b.o;l=b.b;m=b.a;b=new TU;b.r$=a;b.sa=e;b.r_=f;b.r7=c;b.r6=g;b.r9=j;b.r8=l;b.sl=d;b.sk=h;b.sm=k;b.sO=m;return b;}
function ABv(a){return a.K.o.a+Ck(a.bi,2.0)|0;}
function Rv(){var a=this;B.call(a);a.eD=null;a.b1=null;a.e9=null;a.fF=null;a.k5=null;a.cb=null;a.eL=null;a.cu=0;a.eI=0;a.lo=0;a.hL=0;a.ic=0;a.fA=0;a.sB=null;a.ou=null;a.uQ=null;a.im=null;}
function OK(a,b,c){a.eD=b;T0(a,c);Kv(a);}
function Pm(a,b){var c;a.k5=b.hW;c=b.jI.kQ;Fe(a.b1.eR,c);c=b.hi.kj;Fe(a.b1.hg,c);a.im=b.jI;}
function T0(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=KY(b);d=b.bW;BU(a.eD);CF(c,a.eD);e=OB(a.eD,1.25);f=0;a.cu=Cn(2.0,d);a.eI=Cn(3.0,d);a.lo=Cn(12.0,d);g=0;h=a.cb.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Jz(c,l.ks,0.875);n=a.lo;o=(n+m|0)+n|0;f=Ba(f,o);b=l.dJ;b.b=g;b.a=0;b=l.c8;b.b=o;b.a=e;Cb(l.gi,g,0.0,o,k);g=g+o|0;j=j+1|0;}b=a.e9;b.b=g;b.a=e;b=a.b1.bp;o=a.fA;if(!o){m=a.cu;m=(g+m|0)+V(m,a.cb.data.length)|0;}else m=(f+(a.cu*2|0)|0)+(a.eI*2|0)|0;b.b=m;if(!o)e=e+(a.cu*2|0)|0;else{o=a.cu;e=(V(e+o|0,a.cb.data.length)
+o|0)+(a.eI*2|0)|0;}b.a=e;}
function WK(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EI(a){var b,c;b=a.e9;if(b.b&&b.a)return a.b1.bp;c=new Bo;Br(c,C(237));J(c);}
function Kv(a){a.ic=1;}
function AAX(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.ds;if(!a.cb.data.length)return;if(a.eL===null)a.eL=Gv(c);a:{if(!a.ic){d=a.e9;if(V(d.b,d.a))break a;}d=a.e9;if(!V(d.b,d.a))T0(a,b);d=a.e9;e=d.b;f=d.a;if(!V(e,f))return;d=EY(c,e,f,b.cx);CF(d,a.eD);g=OB(a.eD,0.125);h=a.eD;i=h.d2;g=g+i-(i+h.dE)/16.0;j=a.cb.data;e=j.length;f=0;while(f<e){h=j[f];Ej(d,h.ks,h.gi.bk+a.lo,g);f=f+1|0;}Em(a.eL,d);a.ic=0;K3(d);}if(!Jb(a.b1)){d=a.b1;XP(c,d.bp,d.cG,d.hg,a.cu,a.fF);d=a.b1;h=d.bp;k=d.cG;d=d.eR;e=a.cu;l=a.fF;l.b=(h.b-e|0)
-e|0;l.a=(h.a-e|0)-e|0;BC(c,k.b+e|0,k.a+e|0,l,d);if(a.fA){d=a.b1;Zy(c,d.bp,d.cG,0,0,NY(a.k5,b.bW),a.k5.k9,a.fF);}}j=a.cb.data;m=j.length;n=0;while(n<m){d=j[n];if(b.cx){h=d.dJ;e=h.b;f=h.a;h=d.c8;k=d.gi;l=a.eL;o=a.im;Ek(c,e,f,h,k,l,o.ju,KM(o,d.f7));}else{h=d.dJ;e=h.b;f=h.a;h=d.c8;k=d.gi;l=a.eL;o=a.im;Eh(c,e,f,h,k,l,o.ju,KM(o,d.f7),0.0);}n=n+1|0;}b:{if(a.fA){j=a.cb.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.fF;e=(a.b1.bp.b-(a.cu*2|0)|0)-(a.eI*2|0)|0;h=d.c8;e=e-h.b|0;b.b=e;b.a=h.a;if(e>0){k=d.dJ;BC(c,
k.b+h.b|0,k.a,b,KM(a.im,d.f7));}p=p+1|0;}}}}
function Mv(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cb.data;if(c>=d.length)return (-1);e=d[c];if(Fv(b,e.dJ,e.c8))return c;if(a.fA){f=e.dJ;g=f.b;e=e.c8;h=e.b;g=g+h|0;i=f.a;f=a.fF;f.b=(a.b1.bp.b-(a.cu*2|0)|0)-h|0;f.a=e.a;if(Xf(b,g,i,f))break;}c=c+1|0;}return c;}
function VH(){B.call(this);this.pj=null;}
function ACS(a,b){var c,d;c=a.pj;VB(c,Ef(c,b.u));b=Z(c);d=c.d;Kc(b,d.n,d.s);Ga(c);}
var W8=F();
function Cn(b,c){return Dw(b*c);}
function TY(){var a=this;B.call(a);a.X=0;a.bf=0;}
function Di(a,b){var c=new TY();Y4(c,a,b);return c;}
function Y4(a,b,c){a.X=b;a.bf=c;}
function ACd(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return a.X==c.X&&a.bf==c.bf?1:0;}return 0;}
function AKc(a){var b,c,d,e;b=O(B,2).data;b[0]=Ct(a.X);b[1]=Ct(a.bf);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bb)|0;d=d+1|0;}return c;}
function AJO(a,b){var c;b=b;c=BF(a.X,b.X);if(!c)c=BF(a.bf,b.bf);return c;}
function Ou(){var a=this;B.call(a);a.V=null;a.g7=null;a.ef=null;a.dp=0;a.G=0;a.cR=null;a.dx=null;a.fV=0;a.mj=0;}
function Mn(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dp;i=V(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Ba(i,e))a:{while(true){if(d<=e){j=d;break a;}Fi(c);j=d+(-1)|0;b=DX(d);d=V(j,a.G)%a.ef.a|0;Fz(a,c,b,a.fV,g);PR(a.V,c,0,d);if(!(j%a.dp|0))break;d=j;}}else{Fi(b);k=a.dp-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Fz(a,b,DX(j),V(a.G,k)+a.fV|0,g);k=k+(-1)|0;j=h;}Em(a.V,b);j=Ba(i,e);}return j;}k=a.dp;h=V(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Fi(c);b=DX((d+f|0)+1|0);j=d+1|0;d=V(d,
a.G)%a.ef.a|0;Fz(a,c,b,a.fV,g);PR(a.V,c,0,d);if(!(j%a.dp|0))break;d=j;}}else{Fi(b);d=0;while(d<a.dp){h=h+1|0;Fz(a,b,DX((h>e?h-f|0:h)+f|0),V(a.G,d)+a.fV|0,g);d=d+1|0;}Em(a.V,b);j=Be(i,e);}return j;}
function YZ(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q;l=d/a.G|0;c=Be((j+i|0)%e|0,c);Bn(a.cR,Cf(a.V),a.G);e=d%Kn(a.V)|0;i=a.G;m=e/i|0;n=m+(c/i|0)|0;if(c%i|0)n=n+1|0;i=m;e=m;o=l;while(i<n){if(KL(a,g,o,l+(i-m|0)|0,f,k)){p=V((i-e|0)+1|0,a.G);Bn(a.cR,Cf(a.V),p);Cb(a.dx,0.0,V(e,a.G),Cf(a.V),p);}else{q=Fj(f,g,o,k);c=e-m|0;e=a.G;Ed(a,h,V(c,e)-(d%e|0)|0,b,k.eB,q);o=(l+i|0)-m|0;Bn(a.cR,Cf(a.V),a.G);Cb(a.dx,0.0,V(i,a.G),Cf(a.V),a.G);e=i;}i=i+1|0;}q=Fj(f,g,o,k);c=e-m|0;e=a.G;Ed(a,h,V(c,e)-(d%e|0)|0,b,k.eB,q);}
function KL(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Fj(e,b,c,f)!==f.hd?0:1;}
function Fj(b,c,d,e){c=c.data;return d<c.length&&c[d]?J4(b.dA,b,c[d]):e.hd;}
function Ed(a,b,c,d,e,f){if(a.mj)Ek(b,a.g7.b+d.b|0,c+d.a|0,a.cR,a.dx,a.V,e,f);else Eh(b,a.g7.b+d.b|0,c+d.a|0,a.cR,a.dx,a.V,e,f,0.0);}
function Fz(a,b,c,d,e){Ej(b,c,a.ef.b-20.0*e,d);}
function MX(){B.call(this);this.m6=null;}
var Dg=F(Bo);
var R9=F(FJ);
function Rn(){B.call(this);this.sx=null;}
function AED(a,b){var c,d,e,f;c=a.sx;if(c.dW!=3){b=b.data;d=CQ(b[0]);e=D5(b[1]);Ly(c.f,d,e,null,null);if(c.ek){b=DZ(c);f=Ji(D1(),c.rX);c=new R;T(c);K(FE(K(K(c,b),C(238)),f),C(170));$rt_globals.console.info($rt_ustr(S(c)));}}}
var Xl=F(0);
function Wu(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(JZ(b)){case -1655966961:if(!B0(b,C(140)))break a;c=4;break a;case 3401:if(!B0(b,C(166)))break a;c=3;break a;case 98723:if(!B0(b,C(139)))break a;c=2;break a;case 3254818:if(!B0(b,C(130)))break a;c=1;break a;case 3556653:if(!B0(b,C(117)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;default:d=D2();e=new R;T(e);K(K(e,C(239)),b);CU(d,S(e));c=0;break b;}c=0;}return c;}
function ABd(){var a=this;B.call(a);a.i8=null;a.jm=null;a.dL=null;a.jc=null;a.be=null;a.kt=null;a.kz=null;a.ev=null;a.e5=null;a.gF=null;}
function AM2(a,b){var c=new ABd();AHU(c,a,b);return c;}
function AHU(a,b,c){var d,e,f;a.dL=b;a.jc=c;b=new TP;b.kw=0;b.gj=Bu(16);b.eH=0;a.be=b;b=new R;T(b);a.gF=b;a.ev=FS();b=new Rq;d=AAO(16);b.eY=0;b.de=O(GU,d);b.n5=0.75;TH(b);a.e5=b;b=new TL;c=a.be;e=a.gF;f=a.ev;b.cJ=c;b.iX=e;b.pN=f;a.kt=b;b=new TE;b.cm=c;b.j2=e;b.oG=f;a.kz=b;}
function Mk(a){var b,c,d,e,f,g,h;a:{b=IU(a.dL.dU);c=b.ga;if(c.cp>0){d=c.cn;e=0;b:while(true){f=b.ga.bP.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cg;if(IC(a.ev,g))B7(a.ev,g);else{h=a.ev;DG(h,g,Ct(h.cp));}c=c.cl;if(d!=b.ga.cn)break b;}e=e+1|0;}b=new Ge;W(b);J(b);}}b=a.dL.fb;if(b!==null)P5(a,b);Bg(a.be,a.dL.dU.cp);b=Q2(IU(a.dL.dU));while(EG(b)){c=NN(b);Hg(a.be,a.gF.E,H(c));DJ(a.gF,c);}b=Q2(IU(a.dL.dU));while(EG(b)){c=NN(b);c=B7(a.dL.dU,c);Bg(a.be,c.j);c=BM(c);while(BN(c)){g=BQ(c);g=B7(a.ev,g);Bg(a.be,
g.bb);}}if(a.dL.fb===null)Bg(a.be,(-1));else{Bg(a.be,a.e5.eY);Rc(a,a.dL.fb);}if(a.jc===null)Bg(a.be,(-1));else{Bg(a.be,1);WT(a.jc,a.be,a.e5);}b=a.be;d=b.kw;if(d&&b.eH!=d){c=D2();d=b.kw;e=b.eH;g=new R;T(g);K(Bk(K(Bk(K(g,C(240)),d),C(241)),e),C(242));CU(c,S(g));}f=b.gj;d=f.data.length;e=b.eH;if(d!=e)f=H1(f,e);a.i8=f;a.jm=ES(S(a.gF));}
function P5(a,b){var c,d,e,f,g,h;if(TX(a.e5,b))KT(a.e5,b);else{c=a.e5;d=Ct(c.eY);if(b===null){e=Pa(c);if(e===null){c.iz=c.iz+1|0;e=T2(c,null,0,0);f=c.eY+1|0;c.eY=f;if(f>c.kv)Mg(c);}}else{g=H7(b);h=g&(c.de.data.length-1|0);e=Ml(c,b,h,g);if(e===null){c.iz=c.iz+1|0;e=T2(c,b,h,g);f=c.eY+1|0;c.eY=f;if(f>c.kv)Mg(c);}}e.cv=d;}b=b.ca;if(b===null)return;c=new VQ;c.oH=a;b.d6(c);}
function Rc(a,b){var c,d,e,f;c=(KT(a.e5,b)).bb;Bg(a.be,c);if(b instanceof JF)Bg(a.be,(-1));else if(!(b instanceof Je))Bg(a.be,0);else Bg(a.be,1);d=a.kt;Bg(d.cJ,b.dC.cq());e=b.dC;f=new Lj;f.t7=d;e.d6(f);d=a.kz;Bg(d.cm,b.d1.cq());e=b.d1;f=new Tb;f.r2=d;e.d6(f);d=b.hF;Bg(a.be,d.cq());e=new T8;e.sR=a;d.d6(e);d=b.fw;Bg(a.be,d.cq());d=d.bQ();while(d.b$()){e=d.bJ();L7(a.kt,e.hI);F$(a.kz,e.iw);Bg(a.be,e.of);}d=b.rY;if(d===null)Bg(a.be,(-1));else Bg(a.be,(B7(a.ev,d)).bb);b=b.ca;Bg(a.be,b.cq());d=new NH;d.l9=a;b.d6(d);}
function Pv(){B.call(this);this.m0=null;}
function ANi(a,b){var c,d,e,f,g,h,i,j;c=a.m0;if(c.ek){d=DZ(c);e=new R;T(e);K(K(e,d),C(243));$rt_globals.console.info($rt_ustr(S(e)));}b=b.data;f=CQ(b[0]);g=D5(b[1]);h=(CQ(b[2])).data[0];if(c.f.b2==h){i=null;j=null;if(b.length>=5){i=CQ(b[3]);j=D5(b[4]);}Ly(c.f,f,g,i,j);Eg(c.f.cQ);Eg(c.f.dc);Od(c.f);GE(c.f);KN(c);}}
function Sb(){var a=this;B.call(a);a.vo=null;a.vp=null;a.vn=null;}
function QR(){var a=this;B.call(a);a.tO=null;a.tP=null;a.tN=0;}
function AEO(a,b){var c,d,e;c=a.tO;d=a.tP;e=a.tN;d.m(Um(c,(b.u.b+e|0)-c.dK.b|0));}
function QQ(){var a=this;B.call(a);a.od=null;a.ob=null;a.oc=0;}
function AL_(a,b){var c,d,e;c=a.od;d=a.ob;e=a.oc;d.m(Om(c,(b.u.a+e|0)-c.dK.a|0));}
var Ev=F(0);
function Mo(){var a=this;B.call(a);a.g3=0;a.lp=0;a.hX=0;a.fD=0;a.f_=null;}
function BN(a){return a.g3>=a.hX?0:1;}
function BQ(a){var b,c;NZ(a);b=a.g3;a.fD=b;c=a.f_;a.g3=b+1|0;return c.kE(b);}
function PP(a){var b,c,d;if(a.fD<0){b=new Dg;W(b);J(b);}NZ(a);a.f_.lt(a.fD);a.lp=a.f_.bH;c=a.fD;d=a.g3;if(c<d)a.g3=d-1|0;a.hX=a.hX-1|0;a.fD=(-1);}
function NZ(a){var b;if(a.lp>=a.f_.bH)return;b=new Ge;W(b);J(b);}
var Yh=F();
function Rk(){B.call(this);this.wD=null;}
var Z8=F();
var Lx=F();
function AK6(a,b){b=b;b.V=CZ(b.V,null);}
function PG(){var a=this;B.call(a);a.l1=0;a.l0=0;}
function TP(){var a=this;B.call(a);a.gj=null;a.kw=0;a.eH=0;}
function Hg(a,b,c){Bg(a,b);Bg(a,c);}
function Bg(a,b){var c,d;c=a.gj;d=c.data.length;if(d==a.eH)a.gj=H1(c,d*2|0);c=a.gj.data;d=a.eH;a.eH=d+1|0;c[d]=b;}
function Rq(){var a=this;Dt.call(a);a.eY=0;a.de=null;a.iz=0;a.n5=0.0;a.kv=0;}
function AAO(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function TH(a){a.kv=a.de.data.length*a.n5|0;}
function TX(a,b){return VC(a,b)===null?0:1;}
function KT(a,b){var c;c=VC(a,b);if(c===null)return null;return c.cv;}
function VC(a,b){var c,d;if(b===null)c=Pa(a);else{d=H7(b);c=Ml(a,b,d&(a.de.data.length-1|0),d);}return c;}
function Ml(a,b,c,d){var e;e=a.de.data[c];while(e!==null&&!(e.ku==d&&(b!==e.cg?0:1))){e=e.ge;}return e;}
function Pa(a){var b;b=a.de.data[0];while(b!==null&&b.cg!==null){b=b.ge;}return b;}
function T2(a,b,c,d){var e,f;e=new GU;VW(e,b,null);e.ku=d;f=a.de.data;e.ge=f[c];f[c]=e;return e;}
function Mg(a){var b,c,d,e,f,g,h,i;b=a.de.data.length;b=AAO(!b?1:b<<1);c=O(GU,b);d=c.data;e=0;f=b-1|0;while(true){g=a.de.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.ku&f;i=h.ge;h.ge=d[b];d[b]=h;h=i;}e=e+1|0;}a.de=c;TH(a);}
function TL(){var a=this;B.call(a);a.cJ=null;a.iX=null;a.pN=null;}
function L7(a,b){var c;if(!(b instanceof KU)){Bg(a.cJ,3);UX(a,b);Bg(a.cJ,b.gr);}else{c=b;Bg(a.cJ,5);UX(a,c);Bg(a.cJ,c.gr);Bg(a.cJ,c.lW);b=c.iJ;Bg(a.cJ,b.j);c=new LX;c.nc=a;DN(b,c);}}
function UX(a,b){var c;c=b.dD.gz;Hg(a.cJ,a.iX.E,H(c));Bg(a.cJ,b.dD.cU);Ls(a,b.iB);DJ(a.iX,c);}
function Ls(a,b){if(b===null)Bg(a.cJ,(-1));else Bg(a.cJ,(B7(a.pN,b)).bb);}
function TE(){var a=this;B.call(a);a.cm=null;a.j2=null;a.oG=null;}
function F$(a,b){var c,d,e;if(b instanceof FC){c=b;Bg(a.cm,9);OA(a,c.fS);}else if(b instanceof HJ){d=b;Bg(a.cm,3);Pd(a,d);Bg(a.cm,d.mh);OA(a,d.f3);}else if(b instanceof H4){e=b;Bg(a.cm,4);F$(a,e.gV);F$(a,e.f5);}else if(b===null)Bg(a.cm,(-1));else{Bg(a.cm,5);Pd(a,b);Bg(a.cm,b.q$);}}
function Pd(a,b){var c;c=b.er.gz;Hg(a.cm,a.j2.E,H(c));Bg(a.cm,b.er.cU);b=b.eX;if(b===null)Bg(a.cm,(-1));else Bg(a.cm,(B7(a.oG,b)).bb);DJ(a.j2,c);}
function OA(a,b){var c;Bg(a.cm,b.j);c=new V0;c.ng=a;DN(b,c);}
function SA(){var a=this;B.call(a);a.qo=0;a.uD=0;}
function GP(a,b){return OJ(a.qo,b,a.uD);}
var DR=F(Bo);
function Mw(){var a=this;B.call(a);a.l8=null;a.ps=null;a.sQ=0;a.t9=0;}
function Kx(a,b){return Ez(a.ps)<b?0:1;}
function LR(){B.call(this);this.sj=null;}
function AJC(a,b){Gq(a.sj,b);}
function Pw(){B.call(this);this.ox=null;}
function AFq(a,b){Gq(a.ox,b);}
function Pt(){B.call(this);this.ny=null;}
function ADp(a,b){Gq(a.ny,b);}
var AAL=F();
function SD(b,c,d,e){var f,g;f=b.next();g=new Vk;g.mo=b;g.mn=c;g.mr=d;g.mp=e;f.then(Bi(g,"f"),Bi(d,"f"));}
function WS(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ABc(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(C2()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Vh;f.p5=b;f.p6=d;d.addEventListener("change",Bi(f,"handleEvent"));d.click();}
function W0(b,c){var d;if(c.isFile?1:0)b.m(Wo(c.file()));else{c=c.createReader();d=new U5;d.s1=b;c.readEntries(Bi(d,"f"));}}
function RL(){var a=this;B.call(a);a.bc=null;a.vj=null;a.hh=null;a.lC=null;a.iP=null;a.ey=null;}
function FQ(a){return a.bc.bG.gf;}
function V5(a){var b;b=new Ro;b.tR=a;return b;}
function Yt(a){var b,c,d,e,f;b=O(DB,5);c=b.data;d=a.bc;BU(d);e=new VO;e.ra=d;c[0]=Cv(C(244),e);e=a.bc;BU(e);f=new VJ;f.nk=e;c[1]=Cv(C(245),f);d=a.bc;BU(d);e=new VK;e.on=d;c[2]=Cv(C(246),e);d=a.bc;BU(d);e=new VL;e.tL=d;c[3]=Cv(C(247),e);d=a.bc;BU(d);e=new VM;e.mb=d;c[4]=Cv(C(248),e);return Gt(b);}
function Ix(a,b,c){var d,e,f,g,h,i,j,k,l;a:{Do(a.ey.bM);d=a.bc.d;e=DI(d);f=Fx(d);g=a.bc.eo;if(c===null)h=null;else{AOO();switch(AR9.data[c.fR]){case 1:h=KW(g,e,f);break a;case 2:h=Pn(g,e,f);break a;default:}b=new E$;W(b);J(b);}}c=a.bc;e=Ef(c,b);f=HD(c.d.f,e.X,e.bf);g=Rz(c,f);if(h!==null){f=c.d;i=e.X;j=e.bf;e=new Q3;e.u3=c;e.u2=b;e.u5=g;h.qL(f,i,j,e,c.hc);}else{e=B7(c.d.f.dc,f);if(e!==null)Hc(c,e);else{e=B7(c.d.f.cQ,f);if(e!==null&&!DO(e))PN(c.iu,b,e,c,g);else{g=c.iu;Do(g.bM);h=g.bM;k=O(DB,1);l=k.data;d=new DB;BU(h);f
=new LB;f.uE=h;Wq(d,f,C(249));l[0]=d;OS(h,b,Gt(k),Pu(g,c));}}}}
var Xb=F(0);
var Pq=F(0);
var Mp=F(0);
var Gg=F();
function QY(){Gg.call(this);this.sg=null;}
function SR(a,b){var c,d,e;c=0;while(true){d=a.sg;if(d.hA===null)d.hA=BM(d.oM);if(!BN(d.hA))e=0;else{c=b.cY(BQ(d.hA));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Ph=F(0);
function Sd(){B.call(this);this.Gu=null;}
var ARg=null;function Rr(b){return b===null?C(5):Tl(b);}
function AAW(){ARg=O(Jd,0);}
function Q4(){var a=this;B.call(a);a.wP=null;a.wO=null;a.wR=0;a.wQ=0;}
function GU(){var a=this;FM.call(a);a.ku=0;a.ge=null;}
var Ge=F(Bo);
function UN(){B.call(this);this.sV=null;}
function AB5(a,b){Gq(a.sV,b);}
function NC(){B.call(this);this.nV=null;}
function ALJ(a,b){var c,d,e,f;c=a.nV;if(c.fO!=3&&c.dW!=3){b=b.data;c.f4=3;d=CQ(b[0]);e=D5(b[1]);Km(c.f,d,e);if(c.ek){b=DZ(c);f=Ji(D1(),c.g2);c=new R;T(c);K(FE(K(K(c,b),C(250)),f),C(170));$rt_globals.console.info($rt_ustr(S(c)));}}}
function Rm(){B.call(this);this.rz=null;}
function AM1(a,b){var c,d,e,f,g,h;c=a.rz;if(c.dW!=3){d=b.data;c.fO=3;if((CQ(d[2])).data[0]!=1)Gq(c,b);else{e=CQ(d[0]);f=D5(d[1]);g=c.f4!=3?0:1;Px(c.f,e,f,g);if(c.ek){b=DZ(c);h=Ji(D1(),c.g2);c=new R;T(c);K(FE(K(K(c,b),C(251)),h),C(170));$rt_globals.console.info($rt_ustr(S(c)));}}}}
var Vm=F();
function AKL(a,b){WS(b);}
function Vl(){var a=this;B.call(a);a.pv=null;a.pu=null;}
function AEm(a,b){var c,d,e,f,g,h,i;c=a.pv;d=a.pu;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new OU;i.nK=c;i.nJ=g;h.then(Bi(i,"f"),Bi(d,"f"));e=e+1|0;}}
var UH=F();
function AFP(a,b){WS(b);}
function UG(){var a=this;B.call(a);a.oY=null;a.oZ=null;}
function AGv(a,b){var c,d,e,f,g;c=a.oY;d=a.oZ;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=O(Bw,1);g.data[0]=Eu(b.name);SD(f,c,d,g);}
function WJ(){B.call(this);this.Cp=null;}
function Vh(){var a=this;B.call(a);a.p5=null;a.p6=null;}
function AFE(a,b){var c,d,e,f,g,h;b=a.p5;c=a.p6;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new LE;h.mf=b;h.me=g;$rt_globals.setTimeout(Bi(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Wo(d.item(f));g=new Lo;g.re=b;g.rf=c;$rt_globals.setTimeout(Bi(g,"onTimer"),0);f=f+1|0;}}
function Jd(){var a=this;B.call(a);a.q_=null;a.hU=null;a.h5=null;a.fp=null;}
function Xm(){var a=this;B.call(a);a.ig=null;a.kq=null;}
function ABx(){var a=this;B.call(a);a.vO=0;a.xk=0;a.n1=0;a.j9=0;}
function U8(){var a=this;B.call(a);a.ph=null;a.pi=null;}
function ACE(a){var b,c,d,e,f,g;b=a.ph;c=a.pi;if(BB(c.ig,b.d.eN)){c=c.kq;Cj(b,c.j9,c.n1,0);BW((Z(b)).bv,c.j9,c.n1);BW((Z(b)).bo,c.xk,c.vO);}else{d=(Cc(b.eo.sF)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Fc(b);b=new Mb;b.q9=g;b.q8=c;BU(b);c=new Qd;c.sM=b;$rt_globals.setTimeout(Bi(c,"onTimer"),0);}}}
function U9(){var a=this;B.call(a);a.tK=null;a.tJ=null;}
function AGd(a){Hc(a.tK,a.tJ);}
function EP(){var a=this;B.call(a);a.fE=null;a.ca=null;a.d1=null;a.dC=null;a.fw=null;a.hF=null;a.rY=null;}
function ANz(a){var b=new EP();Zh(b,a);return b;}
function Zh(a,b){a.fE=b;a.ca=Bz();a.d1=Bz();a.dC=Bz();a.hF=Bz();a.fw=Bz();}
function Vs(a){var b;b=a.fE;if(b!==null)b.ca.mU(a);}
function VQ(){B.call(this);this.oH=null;}
function AFI(a,b){b=b;P5(a.oH,b);}
var JF=F(EP);
var Je=F(EP);
function T8(){B.call(this);this.sR=null;}
function ACJ(a,b){var c;b=b;c=a.sR;Bg(c.be,(B7(c.ev,b)).bb);}
function Ox(){var a=this;B.call(a);a.hI=null;a.iw=null;a.of=0;}
function NH(){B.call(this);this.l9=null;}
function AH6(a,b){b=b;Rc(a.l9,b);}
function Pf(){var a=this;B.call(a);a.ji=0;a.o_=null;}
function ANq(a,b){var c,d,e;c=a.o_;b=b;d=c.l1;e=c.l0;d=b.b<=d&&e<=b.a?1:0;a.ji=d;return d?0:1;}
var VP=F(DR);
var PF=F(Bo);
var Ub=F(Bo);
function On(){B.call(this);this.lR=null;}
function AJL(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.lR;d=CQ(c[0]);e=(CQ(c[1])).data[0];if(!Sf(b.f)){c=b.f;if(c.b2==e){e=b.uW;f=Ua(d);Eg(c.dc);Eg(c.cQ);Od(c);while(f.d3>=f.gn.data.length?0:1){if(X(f)==(-1))continue;g=VG(c,X(f));h=KH(BG(c,g.X),g.bf);if(X(f)==(-1)){if(!e)continue;h.bR=0;h.bB=h.bB|4;continue;}i=VG(c,X(f));j=X(f);k=X(f);DG(c.dc,g,i);l=c.cQ;m=Bz();if(B7(l,i)===null)DG(l,i,m);Bv(B7(c.cQ,i),g);h.bR=j;h.bB=k;}JP(b);if(b.vS){n=Ji(D1(),b.s$);if(ANV(n,BH(100))){b=DZ(b);c=new R;T(c);K(FE(K(K(c,b),
C(252)),n),C(170));$rt_globals.console.info($rt_ustr(S(c)));}}}}}
function WO(){B.call(this);this.Hx=null;}
function UD(){B.call(this);this.lv=null;}
var ARn=null;function RP(){var a=new UD();Xq(a);return a;}
function Xq(a){a.lv=Bz();}
function Dx(a,b,c){NE(a,Cv(b,c));}
function Cv(b,c){return ACH(c,b);}
function E6(a,b,c){JW(a,b,c,null);}
function JW(a,b,c,d){NE(a,AOw(null,b,c,d));}
function NE(a,b){Bv(a.lv,b);}
function Hd(a){return Gt(GY(a.lv,ARn));}
function WD(){ARn=O(DB,0);}
function O9(){var a=this;B.call(a);a.mw=null;a.mx=null;}
function ANs(a){var b,c;b=a.mw;c=a.mx;HO(b.dS,c);}
function TK(){B.call(this);this.rq=null;}
function O0(){var a=this;B.call(a);a.oM=null;a.hA=null;}
function Ex(){var a=this;B.call(a);a.D=null;a.o=null;a.eF=0.0;}
function ANt(){var a=new Ex();Ks(a);return a;}
function Ks(a){a.D=new Bq;a.o=new Bq;}
function AKe(a){}
function ZA(a){return Cd(0,0);}
function P9(a,b,c,d){var e;if(!Ho(a.D,b)){a.n0(b);Cp(a.D,b);}if(!Ho(a.o,c)){a.nI(c);Cp(a.o,c);}e=a.eF;if(e!==d){a.eF=d;a.pl(e,d);}}
function Dd(a,b){return Fv(b,a.D,a.o);}
function AL0(a,b){var c,d,e,f;c=a.D;d=c.b;e=c.a;f=a.o;AOk();BC(b,d,e,f,AR$);}
function AHC(a,b){}
function AMt(a,b){}
function AKm(a,b,c){}
function AMF(a){}
function AGg(a,b,c,d){return 0;}
function ADs(a,b,c){return null;}
function AIk(a,b,c){return 0;}
function AMc(a,b){return 0;}
function AKb(a,b,c,d){return 0;}
function Ih(){var a=this;Ex.call(a);a.cE=null;a.bz=null;a.f0=null;}
function Ti(a,b){a.bz.b=In(a,b);}
function V8(a,b){a.bz.a=KE(a,b);}
function KE(a,b){return Ba(0,Be(b,a.cE.a-a.o.a|0));}
function In(a,b){return Ba(0,Be(b,a.cE.b-a.o.b|0));}
function Pc(){var a=this;Ih.call(a);a.bS=null;a.dh=null;a.fZ=null;a.sA=null;a.dy=null;a.bO=null;a.dG=null;a.c4=null;a.cT=0;a.ec=0;a.uk=null;a.df=0;a.dO=0;a.fi=0;a.eJ=0;a.ew=0;a.cj=0;a.dH=null;a.hM=null;a.pK=null;a.gs=null;}
function N0(a){a.cT=Cn(2.0,a.bS.bW);}
function Vf(a){return a.bO.data.length?0:1;}
function R_(a){Bn(a.fZ,0,0);}
function AMb(a){a.c4=CZ(a.c4,null);Bn(a.fZ,0,0);Eg(a.gs);a.dH=null;a.bO=ARg;a.dG=null;a.df=0;a.dO=0;a.fi=0;RR(a.dh);a.hM=null;}
function AEz(a,b,c){Oe(a);N0(a);a.dy=null;a.dH=null;a.ec=0;}
function Wz(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;c=KY(a.bS);if(Vf(a))return;IV(a);CF(c,a.dy);d=DA(a);e=Wt(c,a.ec);f=Be(HG(a.o.a,d),a.bO.data.length)+30|0;g=a.pK.t3;h=a.dG;if(h.data.length<f){a.dG=AIr(f,h,a.eJ,a.ew,a.bO,a.dH,e,a.gs);Cp(a.fZ,L5(a.dH));Oy(a,a.bS.ds);}a.eJ=Be((a.bz.a+a.cT|0)/(DA(a)+a.cT|0)|0,a.bO.data.length-1|0);a.ew=Be((((a.bz.a+a.dh.bp.a|0)-1|0)+a.cT|0)/(DA(a)+a.cT|0)|0,a.bO.data.length-1|0);if(!a.dG.data.length)return;i=0;j=a.eJ;while(j<=a.ew){k=NF(a,j);if
(!(k!==null&&k.fd===a.bO.data[j])){l=a.dG.data;h=a.bO;k=a.dH;m=a.gs;i=j%l.length|0;if(l[i]!==null)TJ(k,l[i],m);l[i]=Il(h.data[j],k,e,m);i=1;}j=j+1|0;}if(i){Cp(a.fZ,L5(a.dH));Oy(a,a.bS.ds);}k=a.D;S2(b,k.b,k.a,a.o);n=g.si;k=a.D;BC(b,k.b,k.a,a.o,n);k=a.dh.cG;o=k.b;p=k.a;q=Ck(a.bS,2.0);k=a.bS.dT;r=a.eJ;j=o+q|0;while(r<=a.ew){m=NF(a,r);s=V(r,DA(a));i=r+1|0;t=s+V(i,a.cT)|0;s=j+a.df|0;u=s+a.dO|0;v=a.cj!=r?0:1;w=!v?n:g.pw;x=!v?g.rr:g.hy;y=!v?g.m2:g.hy;z=!v?g.n6:g.hy;ba=(p+t|0)-a.bz.a|0;if(a.bS.cx){Ek(b,j,ba,m.fq,m.kn,
a.c4,x,w);Ek(b,s,ba,m.fW,m.f$,a.c4,y,w);Ek(b,u,ba,m.fs,m.gP,a.c4,z,w);}else{Eh(b,j,ba,m.fq,m.kn,a.c4,x,w,0.0);Eh(b,s,ba,m.fW,m.f$,a.c4,y,w,0.0);Eh(b,u,ba,m.fs,m.gP,a.c4,z,w,0.0);}s=m.fq.b;bb=j+s|0;Bn(k,Ba(0,a.df-s|0),m.fq.a);BC(b,bb,ba,k,w);s=j+a.df|0;bb=m.fW.b;bc=s+bb|0;Bn(k,Ba(0,a.dO-bb|0),m.fW.a);BC(b,bc,ba,k,w);s=m.fs.b;bd=u+s|0;Bn(k,Ba(0,(((a.dh.bp.b-s|0)-a.dO|0)-a.df|0)-q|0),m.fs.a);BC(b,bd,ba,k,w);be=(o+a.o.b|0)-q|0;Bn(k,q,DA(a)+a.cT|0);BC(b,be,ba,k,n);r=i;}Kw(b);}
function Oy(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fZ;c=EY(b,c.b+150|0,c.a,a.bS.cx);CF(c,a.dy);d=a.dy;e=d.d2;f=e-(e+d.dE)/16.0;g=a.dG.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.fd.hU;k=d.f$;Ej(c,j,k.bk+a.ec,f+k.bA);j=d.fd.h5;d=d.gP;Ej(c,j,d.bk+a.ec,f+d.bA);}i=i+1|0;}a:{d=a.gs;if(d.cp>0){h=d.cn;i=0;b:while(true){g=d.bP.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cg;l=j.cv;k=k;l=l.iA;Ej(c,k,l.bk+a.ec,f+l.bA);j=j.cl;if(h!=d.cn)break b;}i=i+1|0;}b=new Ge;W(b);J(b);}}if(a.c4===null)a.c4=Gv(b);Em(a.c4,
c);K3(c);}
function NF(a,b){var c;c=a.dG.data;return c[b%c.length|0];}
function AJK(a,b){Cp(a.dh.bp,b);}
function AK8(a,b){Cp(a.dh.cG,b);}
function N3(a){var b,c;IV(a);b=DA(a);c=a.bO.data.length;b=V(b,c)+V(a.cT,c+1|0)|0;Bn(a.cE,a.o.b,b);}
function AAq(a,b,c){var d,e;d=(a.df+a.dO|0)+a.fi|0;e=Ck(a.bS,5.0);return Cd(Fh(e,b.b,a.bS.cA.b-d|0),Fh(c,b.a,a.bS.cA.a-a.cE.a|0));}
function AA2(a,b){var c,d,e,f;Oe(a);N3(a);c=(a.df+a.dO|0)+a.fi|0;d=a.bS;e=(d.cA.b-b.b|0)-Ck(d,5.0)|0;d=a.bS;f=(d.cA.a-b.a|0)-Ck(d,5.0)|0;return Cd(Be(c,e),Be(a.cE.a,f));}
function Oe(a){var b,c,d,e,f,g,h,i,j;b=KY(a.bS);if(Vf(a))return;IV(a);CF(b,a.dy);c=Wt(b,a.ec);d=a.bO.data;e=d.length;f=0;while(f<e){g=d[f];h=G9(c,g.fp);i=G9(c,g.hU);j=G9(c,g.h5);a.df=Ba(a.df,h);a.dO=Ba(a.dO,i);a.fi=Ba(a.fi,j);f=f+1|0;}}
function TI(a,b){Iy(a.hM);b.q_.t();}
function QZ(a,b){var c,d,e;if(!a.dG.data.length)return (-1);c=DA(a);d=(b.a-a.D.a|0)+a.bz.a|0;e=a.cT;e=(d+e|0)/(c+e|0)|0;if(e<a.bO.data.length)return e;return (-1);}
function DA(a){return Fk(a.dy);}
function IV(a){var b;if(a.dy===null){b=HW(a.bS,a.sA);a.dy=b;a.dH=ACQ(Fk(b));a.ec=Dw(a.dy.lf);}}
function ALn(a,b){var c,d,e;a:{switch(b.bT){case 13:TI(a,a.bO.data[a.cj]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cj=a.eJ;b=a.f0;c=a.bz;HZ(b,c.b,c.a-(a.o.a/2|0)|0);return 0;case 34:a.cj=a.ew;b=a.f0;c=a.bz;HZ(b,c.b,c.a+(a.o.a/2|0)|0);return 0;case 35:case 39:a.cj=a.bO.data.length-1|0;break a;case 36:case 37:a.cj=0;break a;case 38:d=a.cj;e=a.bO.data.length;a.cj=((d+e
|0)-1|0)%e|0;break a;case 40:a.cj=(a.cj+1|0)%a.bO.data.length|0;break a;default:break a;}Iy(a.hM);return 0;}e=a.cj;if(e<=a.eJ)HZ(a.f0,a.bz.b,V(e,DA(a))+V(a.cj,a.cT)|0);else if(e>=a.ew)HZ(a.f0,a.bz.b,(V(e+1|0,DA(a))+V(a.cj+2|0,a.cT)|0)-a.o.a|0);return 0;}
function O1(){var a=this;B.call(a);a.l3=null;a.l4=null;}
function Iy(a){var b,c;b=a.l3;c=a.l4;HO(b.dS,c);RJ(b);}
function Ow(){var a=this;Ex.call(a);a.lD=null;a.n3=null;a.sn=null;a.bl=null;a.cF=null;a.cM=null;a.ti=0.0;a.t4=null;a.t1=null;}
function AK5(a){var b;b=a.bl;b.f0=null;a.bl=CZ(b,null);}
function AFO(a,b,c,d){P9(a,b,c,d);P9(a.bl,b,c,d);if(d!==0.0){N3(a.bl);b=a.bl;c=b.bz;c.b=In(b,c.b);c=b.bz;c.a=KE(b,c.a);if(TW(a))HB(a);else a.cM=null;if(Nd(a))GD(a);else a.cF=null;}}
function HZ(a,b,c){var d;d=a.bl;d.bz.b=In(d,b);d.bz.a=KE(d,c);if(TW(a))HB(a);if(Nd(a))GD(a);}
function Nd(a){var b;b=a.o.a;return b>0&&a.bl.cE.a>b?1:0;}
function TW(a){var b;b=a.o.b;return b>0&&a.bl.cE.b>b?1:0;}
function HB(a){var b,c,d,e,f,g;b=a.cM;if(b===null)b=To();a.cM=b;PB(a,b);c=a.cM;b=a.bl;d=b.bz.b;e=a.D;f=e.b;g=a.o;Pr(c,d,f,g.b,b.cE.b,e.a+g.a|0,K0(a));}
function GD(a){var b,c,d,e,f,g;b=a.cF;if(b===null)b=To();a.cF=b;PB(a,b);c=a.cF;b=a.bl;d=b.bz.a;e=a.D;f=e.a;g=a.o;Vp(c,d,f,g.a,b.cE.a,e.b+g.b|0,K0(a));}
function K0(a){return Cn(a.ti,a.eF);}
function PB(a,b){var c,d;c=a.t4;d=a.t1;if(!(c!==null&&d!==null?(Jk(b.ho,c)&&Jk(b.hp,d)?1:0):0))F9(b,c,d);}
function AKr(a,b){var c;Wz(a.bl,b);if(!(a.cF===null&&a.cM===null)){DP(b,1);c=a.cF;if(c!==null)G_(c,b);c=a.cM;if(c!==null)G_(c,b);c=a.cF;if(c!==null)Hf(c,b);c=a.cM;if(c!==null)Hf(c,b);DP(b,0);}}
function SB(a,b){var c,d;a:{b:{c=a.cF;if(!(c!==null&&G0(c,b))){c=a.cM;if(c===null)break b;if(!G0(c,b))break b;}d=1;break a;}d=0;}return d;}
function ALA(a,b,c,d){var e;if(!SB(a,b.u)){e=a.bl;if(d==1){c=QZ(e,b.u);if(c>=0)TI(e,e.bO.data[c]);}}return 1;}
function AK7(a,b,c){var d;d=a.cF;if(d!==null){d=Hm(d,b.u,a.n3,1);if(d!==null)return d;}d=a.cM;if(d!==null){d=Hm(d,b.u,a.sn,0);if(d!==null)return d;}d=a.bl;if(!G$(d.dh,b.u)&&!Jb(d.dh)){b=d.uk;if(b!==null)Iy(b);}return null;}
function AIL(a,b,c){return SB(a,b.u)?1:0;}
function AIs(a,b){var c,d,e;c=a.cF;d=c!==null&&HC(c,b.u,a.lD)?1:0;c=a.cM;e=c!==null&&HC(c,b.u,a.lD)?1:0;a:{if(!d&&!e){c=a.bl;d=QZ(c,b.u);if(d>=0)c.cj=d;if(!(G$(c.dh,c.D)&&Fl(c.bS.c7)?1:0)){d=0;break a;}}d=1;}return d;}
function AE7(a,b,c,d){var e,f;if(!Dd(a,b.u))return 0;e=Cn(d*0.25,a.eF);f=Cn(c*0.25,a.eF);if(b.bu){f=f+e|0;e=0;}if(a.cF!==null&&e){b=a.bl;V8(b,b.bz.a+e|0);GD(a);}if(a.cM!==null&&f){b=a.bl;Ti(b,b.bz.b+f|0);HB(a);}return 1;}
function AML(a){var b,c;b=K0(a);c=ZA(a.bl);c.b=Ba(c.b,b);c.a=Ba(c.a,b);return c;}
function F4(){var a=this;B.call(a);a.du=0;a.dF=0;a.kd=null;a.lk=0;a.e$=null;}
function ALo(a,b,c,d,e,f){var g=new F4();AHo(g,a,b,c,d,e,f);return g;}
function AHo(a,b,c,d,e,f,g){a.du=b;a.dF=c;a.kd=Cd(f,g);a.lk=d;a.e$=e;}
var NO=F(0);
var Ec=F(En);
function N1(){Ec.call(this);this.ga=null;}
function Q2(a){var b;b=new Rt;JJ(b,a.ga);return b;}
function Lj(){B.call(this);this.t7=null;}
function AE0(a,b){b=b;L7(a.t7,b);}
function Tb(){B.call(this);this.r2=null;}
function AHu(a,b){b=b;F$(a.r2,b);}
function H_(){var a=this;B.call(a);a.dD=null;a.iB=null;a.gr=0;}
function AOT(a,b,c){var d=new H_();Z3(d,a,b,c);return d;}
function Z3(a,b,c,d){a.dD=b;a.iB=c;a.gr=d;}
function Zm(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return BB(a.dD,c.dD)&&BB(a.iB,c.iB)&&BB(Ct(a.gr),Ct(c.gr))?1:0;}return 0;}
function KU(){var a=this;H_.call(a);a.iJ=null;a.lW=0;}
function ADd(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){if(!Zm(a,b))return 0;c=b;return BB(a.iJ,c.iJ);}return 0;}
function D9(){var a=this;B.call(a);a.er=null;a.eX=null;a.q$=0;}
function ANS(a,b,c){var d=new D9();J0(d,a,b,c);return d;}
function J0(a,b,c,d){a.er=b;a.eX=c;a.q$=d;}
function W2(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return BB(a.er,c.er)&&BB(a.eX,c.eX)?1:0;}return 0;}
function FC(){D9.call(this);this.fS=null;}
function HJ(){var a=this;D9.call(a);a.f3=null;a.mh=0;}
function AMh(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){if(!W2(a,b))return 0;c=b;return BB(a.f3,c.f3);}return 0;}
function H4(){var a=this;D9.call(a);a.gV=null;a.f5=null;}
function ACs(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return BB(a.gV,c.gV)&&BB(a.f5,c.f5)?1:0;}return 0;}
function X9(){var a=this;Gg.call(a);a.EE=null;a.GO=0;a.Fe=0;a.CL=0;}
function Qy(){var a=this;B.call(a);a.mA=null;a.mB=null;}
function AGl(a){var b,c;b=a.mA;c=a.mB;Rh();Ix(b,c,AR_);}
function Qz(){var a=this;B.call(a);a.pO=null;a.pP=null;}
function ADO(a){var b,c;b=a.pO;c=a.pP;Rh();Ix(b,c,ASa);}
function Qw(){var a=this;B.call(a);a.ta=null;a.s_=null;}
function ACF(a){Ix(a.ta,a.s_,null);}
function Qx(){var a=this;B.call(a);a.l_=null;a.ma=null;}
function AGh(a){var b,c,d,e,f,g,h;b=a.l_;c=a.ma;d=DI(b.bc.d);e=Fx(b.bc.d);d=Sp(b.bc.eo,d,e);Do(b.ey.bM);b=b.bc;e=Ef(b,c);if(d!==null){f=b.d;g=e.X;h=e.bf;e=new Sc;e.v9=b;e.v8=c;d.Fn(f,g,h,1,e,b.hc);}}
function PK(){B.call(this);this.op=null;}
function AJ8(a){var b;b=a.op;Do(b.ey.bM);Ko(b.bc,V5(b),0);}
function PJ(){B.call(this);this.tB=null;}
function AIU(a){var b;b=a.tB;Do(b.ey.bM);Ko(b.bc,V5(b),1);}
function PI(){B.call(this);this.ri=null;}
function ANg(a){var b,c,d,e;b=a.ri;Do(b.ey.bM);FQ(b);b=b.bc;BU(b);c=new V7;c.o0=b;b=XA(C(253));if(!Kr()){c=new Bo;Br(c,C(254));KJ(b,c);}else{d=$rt_globals.navigator.clipboard.readText();e=new PH;e.mI=c;b=ABy(b);d.then(Bi(e,"f"),Bi(b,"f"));}}
function NR(){var a=this;B.call(a);a.my=null;a.mz=null;}
function AIQ(a){var b,c;b=a.my;c=a.mz;b=b.bc.d;b.kU=c;HX(b);}
var OZ=F(0);
var ARl=null;function ZU(){ARl=new SE;}
function OH(){B.call(this);this.uo=null;}
function ADC(a){var b,c,d;b=a.uo;Do(b.ey.bM);c=FQ(b);b=b.bc;BU(b);d=new P_;d.ry=b;Ug(c,d);}
function Hy(){var a=this;B.call(a);a.kn=null;a.f$=null;a.gP=null;a.fq=null;a.fW=null;a.fs=null;a.fd=null;}
function AIr(b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r;a:{j=c.data;k=O(Hy,b);l=j.length;if(l<=0){if(b<=0)break a;m=k.data;while(true){if(d>e)break a;m[d%m.length|0]=Il(f.data[d],g,h,i);d=d+1|0;}}m=k.data;while(d<=e){n=f.data[d];o=d%m.length|0;p=d%l|0;q=j[p];if(q!==null&&q.fd!==n){TJ(g,q,i);m[o]=Il(n,g,h,i);j[p]=null;}else if(q!==null&&m[o]===null){m[o]=q;j[p]=null;}else m[o]=Il(n,g,h,i);d=d+1|0;}}d=0;while(d<l){r=j[d];if(r!==null){TJ(g,r,i);j[d]=null;}d=d+1|0;}return k;}
function Il(b,c,d,e){var f,g,h;f=new Hy;f.fq=new Bq;f.fW=new Bq;f.fs=new Bq;f.fd=b;g=B7(e,b.fp);if(g!==null)g.gO=g.gO+1|0;else{g=new TR;h=K7(c,b.fp,d);g.gO=1;g.iA=h;DG(e,b.fp,g);}e=g.iA;f.kn=e;Bn(f.fq,e.Y|0,e.bV|0);e=K7(c,b.hU,d);f.f$=e;Bn(f.fW,e.Y|0,e.bV|0);b=K7(c,b.h5,d);f.gP=b;Bn(f.fs,b.Y|0,b.bV|0);return f;}
function TJ(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.fd.fp;f=B7(d,e);g=f.gO-1|0;f.gO=g;if(!g){a:{h=0;i=null;if(e===null){j=d.bP.data[0];while(j!==null){if(j.cg===null)break a;e=j.cl;i=j;j=e;}}else{k=JZ(e);l=d.bP.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.ih==k&&WQ(e,j.cg))){m=j.cl;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cl=j.cl;else d.bP.data[h]=j.cl;d.cn=d.cn+1|0;d.cp=d.cp-1|0;}JS(b,f.iA);}JS(b,c.f$);JS(b,c.gP);}
var P$=F(0);
function Wt(b,c){var d;d=new TS;d.nY=b;d.nX=c;return d;}
function WC(){var a=this;B.call(a);a.fg=null;a.fY=0;a.h8=0;a.fz=0;}
function ACQ(a){var b=new WC();AE8(b,a);return b;}
function AE8(a,b){a.fg=Bz();a.fz=0;a.h8=2048;a.fY=b;}
function K7(a,b,c){var d,e,f,g,h,i,j;d=G9(c,b);e=a.h8;if(d>e){c=new Bo;f=new R;T(f);BY(Bk(K(Bk(K(f,C(255)),d),C(256)),e),41);Br(c,S(f));J(c);}if(!a.fY){b=new BI;Br(b,C(257));J(b);}a:{b=new B4;if(d){b:{c=a.fg;if(c.j>0){c=BM(c);g=d;while(true){if(!BN(c))break b;f=BQ(c);if(f.Y>=g)break;}Cb(b,f.bk,f.bA,g,a.fY);f.bk=f.bk+g;h=f.Y-g;f.Y=h;if(h===0.0)TO(a.fg,f);break a;}}g=a.fz;i=d;Cb(b,0.0,g,i,a.fY);c=a.fg;f=new B4;h=a.fz;g=a.h8-d|0;j=a.fY;f.bk=i;f.bA=h;f.Y=g;f.bV=j;Bv(c,f);a.fz=a.fz+a.fY|0;}}return b;}
function JS(a,b){var c,d,e,f,g,h,i;a:{c=new B4;c.bk=b.bk;c.bA=b.bA;c.Y=b.Y;c.bV=b.bV;b=a.fg;if(b.j>0){d=BM(b);while(true){if(!BN(d))break a;e=BQ(d);if(e.bA===c.bA){f=e.bk;g=e.Y;h=f+g;i=c.bk;if(h===i){c.bk=f;c.Y=c.Y+g;PP(d);}else{h=c.Y;if(i+h===f){c.Y=h+g;PP(d);}}}}}}Bv(a.fg,c);}
function L5(a){return Cd(a.h8,a.fz);}
function TC(){var a=this;Ex.call(a);a.eM=null;a.gb=null;a.hv=null;a.em=null;a.is=0.0;a.gh=0;a.hz=0;a.cI=null;a.hr=null;}
function Jl(a){var b;b=a.o;return b.b&&b.a?0:1;}
function Uh(a){var b,c;a:{if(a.hv!==null){b=a.gb;if(b!==null&&!DT(b)){c=0;break a;}}c=1;}return c;}
function N6(a,b){a.o.a=b;}
function Oi(a,b,c,d,e){var f,g;f=a.eM.dT;Bn(f,d,a.o.a);g=a.D;BC(b,g.b+c|0,g.a,f,e);}
function Th(a){if(a.em===null)a.em=HW(a.eM,a.hv);}
function Rw(){B.call(this);this.nx=null;}
function ALC(a,b,c){var d,e;c=a.nx;d=c.d.f;e=b.bb;b=c.ej;QS(d.v.data[e],0,b);}
var Uy=F(BT);
function DB(){var a=this;B.call(a);a.jp=null;a.gi=null;a.dJ=null;a.c8=null;a.h0=null;a.kx=null;a.f7=0;a.ks=null;}
function ACH(a,b){var c=new DB();Wq(c,a,b);return c;}
function AOw(a,b,c,d){var e=new DB();YC(e,a,b,c,d);return e;}
function Wq(a,b,c){YC(a,b,c,null,null);}
function YC(a,b,c,d,e){a.gi=new B4;a.dJ=new Bq;a.c8=new Bq;a.ks=c;a.kx=e;a.jp=b;a.h0=d;}
function S4(a){return a.h0===null?0:1;}
function L$(){B.call(this);this.n2=null;}
function AGO(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.n2;c=new He;d=new HE;e=new HS;AAK();IQ(e,ARZ);K9(d,e,BA(AR1),BA(AR0),BA(AR3),BA(AR1),BA(AR2),BA(AR5),BA(AR4),BA(AR7),BA(AR6),BA(AR8));XW();f=(ASb.f1()).data;g=f.length;h=O(H0,g);i=h.data;j=0;while(j<g){i[j]=f[j].k6;j=j+1|0;}k=ZL(N(C(258)),N(C(259)),N(C(260)),N(C(233)));l=new Hk;m=new Hw;AIa();e=ASc;Lc(m,e,ASd,ASe,ASf,ASg,e);Kk(l,m,AA7(),ABf(N(C(261)),N(C(89)),N(C(90))),AA7(),We(1,0.125),ASh,ASi);H6(c,d,h,k,l,Ww(N(C(91)),N(C(92)),N(C(93)),N(C(262))));I0(b,c);}
function L_(){B.call(this);this.o7=null;}
function ALI(a){O7(a.o7);}
function L9(){B.call(this);this.um=null;}
function ABH(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.um;c=new He;d=new HE;e=new HS;AAw();IQ(e,ASj);K9(d,e,BA(ASk),BA(ASl),BA(ASm),BA(ASk),BA(ASn),BA(ASo),BA(ASp),BA(ASq),BA(ASr),BA(ASs));ZG();f=(ASt.f1()).data;g=f.length;h=O(H0,g);i=h.data;j=0;while(j<g){i[j]=f[j].kc;j=j+1|0;}k=ZL(N(C(263)),N(C(264)),N(C(265)),N(C(266)));l=new Hk;m=new Hw;ACu();e=ASu;Lc(m,e,ASv,ASw,ASx,ASy,e);Kk(l,m,AAZ(),ABf(N(C(267)),N(C(268)),Ha(0)),AAZ(),We(1,0.07500000298023224),ASz,ASA);H6(c,d,h,k,l,Ww(N(C(269)),N(C(270)),N(C(271)),N(C(272))));I0(b,
c);}
function UF(){B.call(this);this.pE=null;}
function AHA(a){var b;b=a.pE;H9(b,b.gE.lr,b.fh+1|0);}
function UE(){B.call(this);this.sK=null;}
function AKq(a){var b,c;b=a.sK;c=b.fh;if(c>7)H9(b,b.gE.lr,c-1|0);}
function P6(){B.call(this);this.rP=null;}
function AHb(a){var b,c,d,e,f,g,h,i;b=a.rP;c=G(Bw,[C(103),C(194),C(273)]).data;d=O(DB,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new R7;i.lS=b;i.lT=h;e[f]=ACH(i,h);f=f+1|0;}return d;}
function Q5(){B.call(this);this.nD=null;}
function AGt(a){P1(a.nD.lC,0);}
function Q6(){B.call(this);this.oQ=null;}
function ALp(a){P1(a.oQ.lC,1);}
function VO(){B.call(this);this.ra=null;}
function ABU(a){var b,c,d,e,f;b=a.ra.d.f;c=b.b2;d=new R;T(d);Bk(K(d,C(274)),c);$rt_globals.console.info($rt_ustr(S(d)));c=b.ki;d=new R;T(d);Bk(K(d,C(275)),c);$rt_globals.console.info($rt_ustr(S(d)));d=b.cN;e=GA(EN(b));UO(d,0,d.cK,e);b=IO();f=b.js;f.data[0]=10;M1(b,f,0,1);}
function VJ(){B.call(this);this.nk=null;}
function AGw(a){Qa(a.nk);}
function VK(){B.call(this);this.on=null;}
function AMD(a){RE(a.on);}
function VL(){B.call(this);this.tL=null;}
function AHO(a){KN(a.tL.d);}
function VM(){B.call(this);this.mb=null;}
function AFZ(a){HX(a.mb.d);}
var J1=F(0);
function Vd(){var a=this;B.call(a);a.og=null;a.oh=null;a.oi=null;}
function M$(){B.call(this);this.pI=null;}
function ACq(a,b){var c,d;c=a.pI;d=GP(b,c.bl.cE.a-c.o.a|0);V8(c.bl,d);GD(c);}
function M9(){B.call(this);this.qH=null;}
function ACK(a,b){var c,d;c=a.qH;d=GP(b,c.bl.cE.b-c.o.b|0);Ti(c.bl,d);HB(c);}
function S5(){B.call(this);this.py=null;}
function AM5(a,b,c){FF(BG(a.py.d.f,b.bb),0,H(c));}
function OU(){var a=this;B.call(a);a.nK=null;a.nJ=null;}
function AEy(a,b){a.nK.m(Zu(a.nJ,b));}
function ABa(){var a=this;B.call(a);a.gz=null;a.cU=0;}
function AFG(a,b){var c=new ABa();ABP(c,a,b);return c;}
function ABP(a,b,c){a.gz=b;a.cU=c;}
function AIV(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return a.cU==c.cU&&BB(a.gz,c.gz)?1:0;}return 0;}
function LX(){B.call(this);this.nc=null;}
function AHs(a,b){b=b;Ls(a.nc,b);}
function V0(){B.call(this);this.ng=null;}
function ANn(a,b){b=b;F$(a.ng,b);}
var HU=F(0);
function LE(){var a=this;B.call(a);a.mf=null;a.me=null;}
function AGz(a){W0(a.mf,a.me);}
function Lo(){var a=this;B.call(a);a.re=null;a.rf=null;}
function ABK(a){a.re.m(a.rf);}
function TQ(){B.call(this);this.qw=null;}
function AMX(a){return a.qw;}
var SE=F();
function Vk(){var a=this;B.call(a);a.mo=null;a.mn=null;a.mr=null;a.mp=null;}
function AF5(a,b){var c,d,e,f,g,h,i;c=a.mo;d=a.mn;e=a.mr;f=a.mp;if(!(b.done?1:0)){SD(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Sn;c.o1=d;c.o3=g;c.o4=f;b.then(Bi(c,"f"),Bi(e,"f"));}else{h=f.data;c=g.values();b=Eu(g.name);i=h.length;f=CX(f,i+1|0);f.data[i]=b;SD(c,d,e,f);}}}
function Ew(){var a=this;B.call(a);a.hQ=0;a.rh=0;a.gY=null;a.fu=null;a.pb=null;a.ip=null;}
function ASB(a){var b=new Ew();JJ(b,a);return b;}
function JJ(a,b){a.ip=b;a.rh=b.cn;a.gY=null;}
function EG(a){var b,c;if(a.gY!==null)return 1;while(true){b=a.hQ;c=a.ip.bP.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.hQ=b+1|0;}return 0;}
function XN(a){var b;if(a.rh==a.ip.cn)return;b=new Ge;W(b);J(b);}
function Ka(a){var b,c,d,e;XN(a);if(!EG(a)){b=new K_;W(b);J(b);}b=a.gY;if(b!==null){c=a.fu;if(c!==null)a.pb=c;a.fu=b;a.gY=b.cl;}else{d=a.ip.bP.data;e=a.hQ;a.hQ=e+1|0;b=d[e];a.fu=b;a.gY=b.cl;a.pb=null;}}
var Rt=F(Ew);
function NN(a){Ka(a);return a.fu.cg;}
var Ye=F();
function Kr(){return "clipboard" in $rt_globals.navigator?1:0;}
function W_(){var a=this;B.call(a);a.CH=null;a.HD=0;}
function PU(){var a=this;B.call(a);a.g=null;a.db=0;a.jj=null;a.m7=0;a.fH=0;a.eg=0;a.bh=0;a.kp=null;}
function IX(a){return a.g.bt;}
function VI(a,b,c,d){var e,f,g,h,i,j;e=Bz();f=a.db;g=0;if(c!=f)a.db=c;a:{switch(b){case -1073741784:h=new Qq;c=a.bh+1|0;a.bh=c;EQ(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Oz;c=a.bh+1|0;a.bh=c;EQ(h,c);break a;case -33554392:h=new Ru;c=a.bh+1|0;a.bh=c;EQ(h,c);break a;default:c=a.fH+1|0;a.fH=c;if(d!==null)h=AO0(c);else{h=new E1;EQ(h,0);g=1;}c=a.fH;if(c<=(-1))break a;if(c>=10)break a;a.jj.data[c]=h;break a;}h=new VA;EQ(h,(-1));}while(true){if(EC(a.g)&&a.g.h==(-536870788))
{d=ALV(B5(a,2),B5(a,64));while(!CW(a.g)&&EC(a.g)){i=a.g;j=i.h;if(j&&j!=(-536870788)&&j!=(-536870871))break;Ch(d,Bd(i));i=a.g;if(i.T!=(-536870788))continue;Bd(i);}i=JB(a,d);i.I(h);}else if(a.g.T==(-536870788)){i=F2(h);Bd(a.g);}else{i=NU(a,h);d=a.g;if(d.T==(-536870788))Bd(d);}if(i!==null)Bv(e,i);if(CW(a.g))break;if(a.g.T==(-536870871))break;}if(a.g.jL==(-536870788))Bv(e,F2(h));if(a.db!=f&&!g){a.db=f;d=a.g;d.fr=f;d.h=d.T;d.d$=d.ep;j=d.cO;d.q=j+1|0;d.gw=j;EF(d);}switch(b){case -1073741784:break;case -536870872:d
=new LC;E2(d,e,h);return d;case -268435416:d=new T4;E2(d,e,h);return d;case -134217688:d=new PZ;E2(d,e,h);return d;case -67108824:d=new RT;E2(d,e,h);return d;case -33554392:d=new Dn;E2(d,e,h);return d;default:switch(e.j){case 0:break;case 1:return AON(Bp(e,0),h);default:return AOr(e,h);}return F2(h);}d=new H2;E2(d,e,h);return d;}
function AAo(a){var b,c,d,e,f,g,h;b=Bu(4);c=(-1);d=(-1);if(!CW(a.g)&&EC(a.g)){e=b.data;c=Bd(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B1(3);b=e.data;b[0]=c&65535;f=a.g;g=f.T;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bd(f);f=a.g;g=f.T;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bd(f);return ALG(e,3);}return ALG(e,2);}if(!B5(a,2))return XL(b[0]);if(B5(a,64))return AJZ(b[0]);return ADG(b[0]);}e=b.data;c=1;while(c<4&&!CW(a.g)&&EC(a.g)){h=c+1|0;e[c]=Bd(a.g);c=h;}if(c==1){h=e[0];if(!(ASC.w9(h)==ASD?0:1))return Vw(a,e[0]);}if
(!B5(a,2))return APy(b,c);if(B5(a,64)){f=new Vj;MV(f,b,c);return f;}f=new R5;MV(f,b,c);return f;}
function NU(a,b){var c,d,e,f,g,h,i;if(EC(a.g)&&!IL(a.g)&&Jc(a.g.h)){if(B5(a,128)){c=AAo(a);if(!CW(a.g)){d=a.g;e=d.T;if(!(e==(-536870871)&&!(b instanceof E1))&&e!=(-536870788)&&!EC(d))c=K1(a,b,c);}}else if(!M4(a.g)&&!Td(a.g)){f=new M7;T(f);while(!CW(a.g)&&EC(a.g)&&!M4(a.g)&&!Td(a.g)){if(!(!IL(a.g)&&!a.g.h)&&!(!IL(a.g)&&Jc(a.g.h))){g=a.g.h;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bd(a.g);if(!KV(e))BY(f,e&65535);else Hv(f,FL(e));}if(!B5(a,2)){c=new Qm;C$(c);c.cc
=S(f);e=f.E;c.bs=e;c.jz=AIG(e);c.kr=AIG(c.bs);h=0;while(h<(c.bs-1|0)){P4(c.jz,I(c.cc,h),(c.bs-h|0)-1|0);P4(c.kr,I(c.cc,(c.bs-h|0)-1|0),(c.bs-h|0)-1|0);h=h+1|0;}}else if(B5(a,64))c=APx(f);else{c=new L6;C$(c);c.gy=S(f);c.bs=f.E;}}else c=K1(a,b,Vi(a,b));}else{d=a.g;if(d.T!=(-536870871))c=K1(a,b,Vi(a,b));else{if(b instanceof E1)J(B3(C(5),d.bt,M3(d)));c=F2(b);}}a:{if(!CW(a.g)){e=a.g.T;if(!(e==(-536870871)&&!(b instanceof E1))&&e!=(-536870788)){f=NU(a,b);if(c instanceof CG&&!(c instanceof EH)&&!(c instanceof Cx)&&
!(c instanceof D7)){i=c;if(!f.bE(i.B)){c=new Uf;Et(c,i.B,i.e,i.gS);c.B.I(c);}}if((f.gZ()&65535)!=43)c.I(f);else c.I(f.B);break a;}}if(c===null)return null;c.I(b);}if((c.gZ()&65535)!=43)return c;return c.B;}
function K1(a,b,c){var d,e,f,g,h;d=a.g;e=d.T;if(c!==null&&!(c instanceof BV)){switch(e){case -2147483606:Bd(d);d=new V_;CS(d,c,b,e);K5();c.I(ASE);return d;case -2147483605:Bd(d);d=new Oq;CS(d,c,b,(-2147483606));K5();c.I(ASE);return d;case -2147483585:Bd(d);d=new N5;CS(d,c,b,(-536870849));K5();c.I(ASE);return d;case -2147483525:f=new L1;d=EJ(d);g=a.eg+1|0;a.eg=g;Ib(f,d,c,b,(-536870849),g);K5();c.I(ASE);return f;case -1073741782:case -1073741781:Bd(d);d=new Qj;CS(d,c,b,e);c.I(d);return d;case -1073741761:Bd(d);d
=new Pk;CS(d,c,b,(-536870849));c.I(b);return d;case -1073741701:h=new SX;d=EJ(d);e=a.eg+1|0;a.eg=e;Ib(h,d,c,b,(-536870849),e);c.I(h);return h;case -536870870:case -536870869:Bd(d);if(c.gZ()!=(-2147483602)){d=new Cx;CS(d,c,b,e);}else if(B5(a,32)){d=new Qk;CS(d,c,b,e);}else{d=new Ne;f=N7(a.db);CS(d,c,b,e);d.jK=f;}c.I(d);return d;case -536870849:Bd(d);d=new Ff;CS(d,c,b,(-536870849));c.I(b);return d;case -536870789:h=new EL;d=EJ(d);e=a.eg+1|0;a.eg=e;Ib(h,d,c,b,(-536870849),e);c.I(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bd(d);d=new Wa;Et(d,f,b,e);f.e=d;return d;case -2147483585:Bd(d);c=new T_;Et(c,f,b,(-2147483585));return c;case -2147483525:c=new NT;QM(c,EJ(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bd(d);d=new Pe;Et(d,f,b,e);f.e=d;return d;case -1073741761:Bd(d);c=new Sh;Et(c,f,b,(-1073741761));return c;case -1073741701:c=new P0;QM(c,EJ(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bd(d);d=AOR(f,b,e);f.e=d;return d;case -536870849:Bd(d);c
=new D7;Et(c,f,b,(-536870849));return c;case -536870789:return AN0(EJ(d),f,b,(-536870789));default:}return c;}
function Vi(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof E1;while(true){a:{e=a.g;f=e.T;if((f&(-2147418113))==(-2147483608)){Bd(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.db=g;else{if(f!=(-1073741784))g=a.db;c=VI(a,f,g,b);e=a.g;if(e.T!=(-536870871))J(B3(C(5),e.bt,e.cO));Bd(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bd(e);c
=ALr(0);break a;case -2147483577:Bd(e);c=new M_;BJ(c);break a;case -2147483558:Bd(e);c=new U3;h=a.bh+1|0;a.bh=h;AAI(c,h);break a;case -2147483550:Bd(e);c=ALr(1);break a;case -2147483526:Bd(e);c=new UC;BJ(c);break a;case -536870876:Bd(e);a.bh=a.bh+1|0;if(B5(a,8)){if(B5(a,1)){c=AOe(a.bh);break a;}c=ANF(a.bh);break a;}if(B5(a,1)){c=AOx(a.bh);break a;}c=AO4(a.bh);break a;case -536870866:Bd(e);if(B5(a,32)){c=APl();break a;}c=AOW(N7(a.db));break a;case -536870821:Bd(e);i=0;c=a.g;if(c.T==(-536870818)){i=1;Bd(c);}c
=JB(a,Fs(a,i));c.I(b);e=a.g;if(e.T!=(-536870819))J(B3(C(5),e.bt,e.cO));ND(e,1);Bd(a.g);break a;case -536870818:Bd(e);a.bh=a.bh+1|0;if(!B5(a,8)){c=new Jh;BJ(c);break a;}c=new Ma;e=N7(a.db);BJ(c);c.ql=e;break a;case 0:j=e.ep;if(j!==null)c=JB(a,j);else{if(CW(e)){c=F2(b);break a;}c=XL(f&65535);}Bd(a.g);break a;default:break b;}Bd(e);c=new Jh;BJ(c);break a;}h=(f&2147483647)-48|0;if(a.fH<h)J(B3(C(5),EO(e),M3(a.g)));Bd(e);a.bh=a.bh+1|0;c=!B5(a,2)?ANK(h,a.bh):B5(a,64)?AOf(h,a.bh):APt(h,a.bh);a.jj.data[h].jh=1;a.m7=
1;break a;}if(f>=0&&!F5(e)){c=Vw(a,f);Bd(a.g);}else if(f==(-536870788))c=F2(b);else{if(f!=(-536870871)){b=new HM;c=!F5(a.g)?UZ(f&65535):a.g.ep.eh();e=a.g;Io(b,c,e.bt,e.cO);J(b);}if(d){b=new HM;e=a.g;Io(b,C(5),e.bt,e.cO);J(b);}c=F2(b);}}}if(f!=(-16777176))break;}return c;}
function Fs(a,b){var c,d,e,f,g,h,i,j,$$je;c=ALV(B5(a,2),B5(a,64));D3(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(CW(a.g))break a;h=a.g;b=h.T;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Ch(c,d);d=Bd(a.g);h=a.g;if(h.T!=(-536870874)){d=38;break d;}if(h.h==(-536870821)){Bd(h);e=1;d=(-1);break d;}Bd(h);if(g){c=Fs(a,0);break d;}if(a.g.T==(-536870819))break d;UL(c,Fs(a,0));break d;case -536870867:if(!g){b=h.h;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bd(h);h=a.g;i=h.T;if(F5(h))break c;if
(i<0){j=a.g.h;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Jc(i))break e;i=i&65535;break e;}catch($$e){$$je=ET($$e);if($$je instanceof DD){break b;}else{throw $$e;}}}try{BR(c,d,i);}catch($$e){$$je=ET($$e);if($$je instanceof DD){break b;}else{throw $$e;}}Bd(a.g);d=(-1);break d;}}if(d>=0)Ch(c,d);d=45;Bd(a.g);break d;case -536870821:if(d>=0){Ch(c,d);d=(-1);}Bd(a.g);j=0;h=a.g;if(h.T==(-536870818)){Bd(h);j=1;}if(!e)Wk(c,Fs(a,j));else UL(c,Fs(a,j));e=0;Bd(a.g);break d;case -536870819:if(d>=0)Ch(c,
d);d=93;Bd(a.g);break d;case -536870818:if(d>=0)Ch(c,d);d=94;Bd(a.g);break d;case 0:if(d>=0)Ch(c,d);h=a.g.ep;if(h===null)d=0;else{ABw(c,h);d=(-1);}Bd(a.g);break d;default:}if(d>=0)Ch(c,d);d=Bd(a.g);}g=0;}J(B3(C(5),IX(a),a.g.cO));}J(B3(C(5),IX(a),a.g.cO));}if(!f){if(d>=0)Ch(c,d);return c;}J(B3(C(5),IX(a),a.g.cO-1|0));}
function Vw(a,b){var c,d,e;c=KV(b);if(B5(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return ADG(b&65535);}if(B5(a,64)&&b>128){if(c){d=new Lu;C$(d);d.bs=2;d.pU=FU(FR(b));return d;}if(NK(b))return AIM(b&65535);if(!Rf(b))return AJZ(b&65535);return AGo(b&65535);}}if(!c){if(NK(b))return AIM(b&65535);if(!Rf(b))return XL(b&65535);return AGo(b&65535);}d=new Du;C$(d);d.bs=2;d.fe=b;e=(FL(b)).data;d.iN=e[0];d.hH=e[1];return d;}
function JB(a,b){var c,d,e;if(!Zd(b)){if(!b.F){if(b.gg())return AF0(b);return ALs(b);}if(!b.gg())return AGZ(b);c=new Id;St(c,b);return c;}c=WR(b);d=new LI;BJ(d);d.oP=c;d.uX=c.S;if(!b.F){if(b.gg())return ZO(AF0(GK(b)),d);return ZO(ALs(GK(b)),d);}if(!b.gg())return ZO(AGZ(GK(b)),d);c=new O_;e=new Id;St(e,GK(b));ABm(c,e,d);return c;}
function GO(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B5(a,b){return (a.db&b)!=b?0:1;}
var Q$=F(0);
var ARf=null;function ZK(){ARf=new Pj;}
var ZW=F();
function XP(b,c,d,e,f,g){g.b=c.b;g.a=f;BC(b,d.b,d.a,g,e);BC(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;BC(b,d.b,d.a+f|0,g,e);BC(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function Zy(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;BC(b,j,k,i,h);BC(b,j,k,i,h);BC(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;BC(b,l,j,i,h);BC(b,l,j,i,h);BC(b,l+g|0,j+g|0,i,h);}
var Vg=F(Ea);
var ASF=null;function ZM(){ASF=E($rt_floatcls());}
var E3=F();
var ASG=null;var ASH=null;var ASI=null;var ASJ=null;var AQi=null;function YM(){ASG=Fw([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);ASH=ADF([BH(1),BH(10),BH(100),BH(1000),BH(10000),BH(100000),BH(1000000),BH(10000000),BH(100000000),BH(1000000000),Dh(1410065408, 2),Dh(1215752192, 23),Dh(3567587328, 232),Dh(1316134912, 2328),Dh(276447232, 23283),Dh(2764472320, 232830),Dh(1874919424, 2328306),Dh(1569325056, 23283064),Dh(2808348672, 232830643)]);ASI=ADF([BH(1),BH(10),BH(100),BH(10000),BH(100000000),
Dh(1874919424, 2328306)]);ASJ=new Sj;AQi=new Tp;}
var GW=F();
var ASK=0;var ASL=null;var ASM=null;function Zk(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.nh=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.jP=0;c.jr=0;return;}if(f)d=e|8388608;else{d=e<<1;while(AEC(Wb(BH(d),BH(8388608)),AAl)){d=d<<1;f=f+(-1)|0;}}g=Zs(ASM,f);if(g<0)g= -g|0;h=ASM.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=GR(d,ASL.data[e],i);if(j<ASK){while($rt_ucmp(j,ASK)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=ASM.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=GR(d,
ASL.data[e],i);}e=d<<1;d=e+1|0;h=ASL.data;f=g+1|0;k=h[f];l=i-1|0;m=GR(d,k,l);n=GR(e-1|0,ASL.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?V($rt_udiv(j,o),o):q<0?V($rt_udiv(j,k),k)+k|0:V($rt_udiv((j+(k/2|0)|0),k),k);if(Hr(BH(d),BH(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.jP=d;c.jr=g-50|0;}
function GR(b,c,d){return XX(APd(AIo(Wb(BH(b),Dh(4294967295, 0)),Wb(BH(c),Dh(4294967295, 0))),32-d|0));}
function X5(){ASK=$rt_udiv((-1),10);ASL=Fw([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);ASM=Fw([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Tp(){var a=this;B.call(a);a.jP=0;a.jr=0;a.nh=0;}
var FX=F(0);
function RZ(){B.call(this);this.pR=null;}
function AH_(a,b,c,d){IE(a.pR,b,c.bb,d.bb);}
function R0(){B.call(this);this.ms=null;}
function AF6(a,b,c,d){IE(a.ms,b,c.bb,d.bb);}
function Hb(){B.call(this);this.ly=0;}
var ASN=null;var ASO=null;var ASP=null;function AJs(a){var b=new Hb();ZS(b,a);return b;}
function ZS(a,b){a.ly=b;}
function NI(b){return !b?ASO:ASN;}
function W4(){ASN=AJs(1);ASO=AJs(0);ASP=E($rt_booleancls());}
var II=F(0);
var Qu=F();
var Nx=F(0);
var YV=F();
function QV(){B.call(this);this.sJ=null;}
function AIR(a,b,c,d){Hl(a.sJ,b,c.bb,d.bb);}
var QU=F();
function AMp(a,b){return b.dD.cU>=0?0:1;}
var QT=F();
function AJW(a,b){var c;a:{b:{b=b;if(b!==null){b=b.er;if(b===null)break b;if(b.cU>=0)break b;}c=1;break a;}c=0;}return c;}
function QW(){B.call(this);this.rW=null;}
function AIm(a,b,c,d){Hl(a.rW,b,c.bb,d.bb);}
function By(){var a=this;B.call(a);a.e=null;a.b0=0;a.oj=null;a.gS=0;}
var AQe=0;function BJ(a){var b;b=AQe;AQe=b+1|0;a.oj=J_(b);}
function Jy(a,b){var c;c=AQe;AQe=c+1|0;a.oj=J_(c);a.e=b;}
function GS(a,b,c,d){var e;e=d.r;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function G1(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AD1(a,b){a.gS=b;}
function ADn(a){return a.gS;}
function AKU(a){return a.e;}
function ALM(a,b){a.e=b;}
function ALL(a,b){return 1;}
function AMx(a){return null;}
function H8(a){var b;a.b0=1;b=a.e;if(b!==null){if(!b.b0){b=b.eU();if(b!==null){a.e.b0=1;a.e=b;}a.e.dV();}else if(b instanceof FN&&b.dZ.jh)a.e=b.e;}}
function ABp(){AQe=1;}
var S8=F(0);
function TS(){var a=this;B.call(a);a.nY=null;a.nX=0.0;}
function G9(a,b){return Jz(a.nY,b,a.nX*2.0+0.875);}
var QJ=F(Ea);
var ASQ=null;function KD(b,c){return Long_udiv(b, c);}
function WL(b,c){return Long_urem(b, c);}
function Hr(b,c){return Long_ucompare(b, c);}
function Ym(){ASQ=E($rt_longcls());}
function V1(){var a=this;B.call(a);a.no=null;a.nm=null;a.nl=0;a.nn=0;}
function AIW(a,b){b=b;DK(a.no,a.nm,b,a.nl,a.nn);}
function V2(){var a=this;B.call(a);a.ux=null;a.uw=null;a.uv=0;a.uu=0;}
function AFg(a,b){b=b;DK(a.ux,a.uw,b,a.uv,a.uu);}
var Pj=F();
function AIF(a,b){}
function Cw(){var a=this;By.call(a);a.jh=0;a.dg=0;}
var ASE=null;function K5(){K5=Bf(Cw);AE2();}
function AO0(a){var b=new Cw();EQ(b,a);return b;}
function EQ(a,b){K5();BJ(a);a.dg=b;}
function ACO(a,b,c,d){var e,f;e=HA(d,a.dg);IH(d,a.dg,b);f=a.e.c(b,c,d);if(f<0)IH(d,a.dg,e);return f;}
function AHQ(a){return a.dg;}
function AC_(a,b){return 0;}
function AE2(){var b;b=new M8;BJ(b);ASE=b;}
function FY(){var a=this;B.call(a);a.R=null;a.fr=0;a.eb=0;a.tf=0;a.jL=0;a.T=0;a.h=0;a.qM=0;a.ep=null;a.d$=null;a.q=0;a.g9=0;a.cO=0;a.gw=0;a.bt=null;}
var ASR=null;var ASC=null;var ASD=0;function ND(a,b){if(b>0&&b<3)a.eb=b;if(b==1){a.h=a.T;a.d$=a.ep;a.q=a.gw;a.gw=a.cO;EF(a);}}
function F5(a){return a.ep===null?0:1;}
function IL(a){return a.d$===null?0:1;}
function Bd(a){EF(a);return a.jL;}
function EJ(a){var b;b=a.ep;EF(a);return b;}
function EF(a){var b,c,d,e,f,g,h,$$je;a.jL=a.T;a.T=a.h;a.ep=a.d$;a.cO=a.gw;a.gw=a.q;while(true){b=0;c=a.q>=a.R.data.length?0:Kp(a);a.h=c;a.d$=null;if(a.eb==4){if(c!=92)return;c=a.q;d=a.R.data;c=c>=d.length?0:d[BS(a)];a.h=c;switch(c){case 69:break;default:a.h=92;a.q=a.g9;return;}a.eb=a.tf;a.h=a.q>(a.R.data.length-2|0)?0:Kp(a);}a:{c=a.h;if(c!=92){e=a.eb;if(e==1)switch(c){case 36:a.h=(-536870876);break a;case 40:if(a.R.data[a.q]!=63){a.h=(-2147483608);break a;}BS(a);c=a.R.data[a.q];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.h=(-134217688);BS(a);break b;default:J(B3(C(5),EO(a),a.q));}a.h=(-67108824);BS(a);}else{switch(c){case 33:break;case 60:BS(a);c=a.R.data[a.q];e=1;break b;case 61:a.h=(-536870872);BS(a);break b;case 62:a.h=(-33554392);BS(a);break b;default:f=ABr(a);a.h=f;if(f<256){a.fr=f;f=f<<16;a.h=f;a.h=(-1073741784)|f;break b;}f=f&255;a.h=f;a.fr=f;f=f<<16;a.h=f;a.h=(-16777176)|f;break b;}a.h=(-268435416);BS(a);}}if(!e)break;}break a;case 41:a.h=(-536870871);break a;case 42:case 43:case 63:e=a.q;d
=a.R.data;switch(e>=d.length?42:d[e]){case 43:a.h=c|(-2147483648);BS(a);break a;case 63:a.h=c|(-1073741824);BS(a);break a;default:}a.h=c|(-536870912);break a;case 46:a.h=(-536870866);break a;case 91:a.h=(-536870821);ND(a,2);break a;case 93:if(e!=2)break a;a.h=(-536870819);break a;case 94:a.h=(-536870818);break a;case 123:a.d$=AA1(a,c);break a;case 124:a.h=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.h=(-536870874);break a;case 45:a.h=(-536870867);break a;case 91:a.h=(-536870821);break a;case 93:a.h
=(-536870819);break a;case 94:a.h=(-536870818);break a;default:}}else{c=a.q>=(a.R.data.length-2|0)?(-1):Kp(a);c:{a.h=c;switch(c){case -1:J(B3(C(5),EO(a),a.q));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.h
=ZD(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eb!=1)break a;a.h=(-2147483648)|c;break a;case 65:a.h=(-2147483583);break a;case 66:a.h=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B3(C(5),EO(a),a.q));case 68:case 83:case 87:case 100:case 115:case 119:a.d$=QG(DL(a.R,
a.g9,1),0);a.h=0;break a;case 71:a.h=(-2147483577);break a;case 80:case 112:break c;case 81:a.tf=a.eb;a.eb=4;b=1;break a;case 90:a.h=(-2147483558);break a;case 97:a.h=7;break a;case 98:a.h=(-2147483550);break a;case 99:c=a.q;d=a.R.data;if(c>=(d.length-2|0))J(B3(C(5),EO(a),a.q));a.h=d[BS(a)]&31;break a;case 101:a.h=27;break a;case 102:a.h=12;break a;case 110:a.h=10;break a;case 114:a.h=13;break a;case 116:a.h=9;break a;case 117:a.h=Ot(a,4);break a;case 120:a.h=Ot(a,2);break a;case 122:a.h=(-2147483526);break a;default:}break a;}g
=Zn(a);h=0;if(a.h==80)h=1;try{a.d$=QG(g,h);}catch($$e){$$je=ET($$e);if($$je instanceof Ig){J(B3(C(5),EO(a),a.q));}else{throw $$e;}}a.h=0;}}if(b)continue;else break;}}
function Zn(a){var b,c,d,e,f,g;b=new R;Fp(b,10);c=a.q;d=a.R;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=DL(d,BS(a),1);f=new R;T(f);K(K(f,C(276)),b);return S(f);}BS(a);c=0;a:{while(true){g=a.q;d=a.R.data;if(g>=(d.length-2|0))break;c=d[BS(a)];if(c==125)break a;BY(b,c);}}if(c!=125)J(B3(C(5),a.bt,a.q));}if(!b.E)J(B3(C(5),a.bt,a.q));f=S(b);if(H(f)==1){b=new R;T(b);K(K(b,C(276)),f);return S(b);}b:{c:{if(H(f)>3){if(Jq(f,C(276)))break c;if(Jq(f,C(277)))break c;}break b;}f=DS(f,2);}return f;}
function AA1(a,b){var c,d,e,f,g,$$je;c=new R;Fp(c,4);d=(-1);e=2147483647;a:{while(true){f=a.q;g=a.R.data;if(f>=g.length)break a;b=g[BS(a)];if(b==125)break a;if(b==44&&d<0)try{d=IB(GM(c),10);AA6(c,0,W5(c));continue;}catch($$e){$$je=ET($$e);if($$je instanceof CT){break;}else{throw $$e;}}BY(c,b&65535);}J(B3(C(5),a.bt,a.q));}if(b!=125)J(B3(C(5),a.bt,a.q));if(c.E>0)b:{try{e=IB(GM(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=ET($$e);if($$je instanceof CT){}else{throw $$e;}}J(B3(C(5),a.bt,a.q));}else if(d<0)J(B3(C(5),
a.bt,a.q));if((d|e|(e-d|0))<0)J(B3(C(5),a.bt,a.q));b=a.q;g=a.R.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.h=(-2147483525);BS(a);break c;case 63:a.h=(-1073741701);BS(a);break c;default:}a.h=(-536870789);}c=new LQ;c.ea=d;c.d8=e;return c;}
function EO(a){return a.bt;}
function CW(a){return !a.T&&!a.h&&a.q==a.qM&&!F5(a)?1:0;}
function Jc(b){return b<0?0:1;}
function EC(a){return !CW(a)&&!F5(a)&&Jc(a.T)?1:0;}
function M4(a){var b;b=a.T;return b<=56319&&b>=55296?1:0;}
function Td(a){var b;b=a.T;return b<=57343&&b>=56320?1:0;}
function Rf(b){return b<=56319&&b>=55296?1:0;}
function NK(b){return b<=57343&&b>=56320?1:0;}
function Ot(a,b){var c,d,e,f,$$je;c=new R;Fp(c,b);d=a.R.data.length-2|0;e=0;while(true){f=BF(e,b);if(f>=0)break;if(a.q>=d)break;BY(c,a.R.data[BS(a)]);e=e+1|0;}if(!f)a:{try{b=IB(GM(c),16);}catch($$e){$$je=ET($$e);if($$je instanceof CT){break a;}else{throw $$e;}}return b;}J(B3(C(5),a.bt,a.q));}
function ZD(a){var b,c,d,e,f,g;b=3;c=1;d=a.R.data;e=d.length-2|0;f=SQ(d[a.q],8);switch(f){case -1:break;default:if(f>3)b=2;BS(a);a:{while(true){if(c>=b)break a;g=a.q;if(g>=e)break a;g=SQ(a.R.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BS(a);c=c+1|0;}}return f;}J(B3(C(5),a.bt,a.q));}
function ABr(a){var b,c,d,e;b=1;c=a.fr;a:while(true){d=a.q;e=a.R.data;if(d>=e.length)J(B3(C(5),a.bt,d));b:{c:{switch(e[d]){case 41:BS(a);return c|256;case 45:if(!b)J(B3(C(5),a.bt,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BS(a);}BS(a);return c;}
function BS(a){var b,c,d,e,f;b=a.q;a.g9=b;if(!(a.fr&4))a.q=b+1|0;else{c=a.R.data.length-2|0;a.q=b+1|0;a:while(true){d=a.q;if(d<c&&PX(a.R.data[d])){a.q=a.q+1|0;continue;}d=a.q;if(d>=c)break;e=a.R.data;if(e[d]!=35)break;a.q=d+1|0;while(true){f=a.q;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.q=f+1|0;}}}return a.g9;}
function AAR(b){return ASR.Cm(b);}
function Kp(a){var b,c,d,e;b=a.R.data[BS(a)];if(Cm(b)){c=a.g9+1|0;d=a.R.data;if(c<d.length){e=d[c];if(CI(e)){BS(a);return D4(b,e);}}}return b;}
function M3(a){return a.cO;}
function HM(){var a=this;BI.call(a);a.wM=null;a.wi=null;a.pH=0;}
function B3(a,b,c){var d=new HM();Io(d,a,b,c);return d;}
function Io(a,b,c,d){W(a);a.pH=(-1);a.wM=b;a.wi=c;a.pH=d;}
var Sj=F();
function U5(){B.call(this);this.s1=null;}
function AJv(a,b){var c,d;c=a.s1;d=0;while(d<b.length){W0(c,b[d]);d=d+1|0;}}
var Zi=F(0);
function Sn(){var a=this;B.call(a);a.o1=null;a.o3=null;a.o4=null;}
function AJe(a,b){a.o1.m(ANH(a.o3,b,a.o4));}
var Qq=F(Cw);
function ACl(a,b,c,d){var e;e=a.dg;BD(d,e,b-C0(d,e)|0);return a.e.c(b,c,d);}
function AKw(a,b){return 0;}
var VA=F(Cw);
function ADY(a,b,c,d){return b;}
var Oz=F(Cw);
function ADj(a,b,c,d){if(C0(d,a.dg)!=b)b=(-1);return b;}
function Ru(){Cw.call(this);this.mL=0;}
function ACr(a,b,c,d){var e;e=a.dg;BD(d,e,b-C0(d,e)|0);a.mL=b;return b;}
function AJm(a,b){return 0;}
var E1=F(Cw);
function AL1(a,b,c,d){if(d.iy!=1&&b!=d.r)return (-1);d.h4=1;IH(d,0,b);return b;}
function BV(){By.call(this);this.bs=0;}
function C$(a){BJ(a);a.bs=1;}
function AM4(a,b,c,d){var e;if((b+a.bK()|0)>d.r){d.c2=1;return (-1);}e=a.bg(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function ALe(a){return a.bs;}
function AGF(a,b){return 1;}
var AAH=F(BV);
function F2(a){var b=new AAH();AH1(b,a);return b;}
function AH1(a,b){Jy(a,b);a.bs=1;a.gS=1;a.bs=0;}
function AKP(a,b,c){return 0;}
function AE6(a,b,c,d){var e,f,g;e=d.r;f=d.ct;while(true){g=BF(b,e);if(g>0)return (-1);if(g<0&&CI(I(c,b))&&b>f&&Cm(I(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function ADR(a,b,c,d,e){var f,g;f=e.r;g=e.ct;while(true){if(c<b)return (-1);if(c<f&&CI(I(d,c))&&c>g&&Cm(I(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ACo(a,b){return 0;}
function BP(){var a=this;By.call(a);a.br=null;a.dZ=null;a.O=0;}
function AOr(a,b){var c=new BP();E2(c,a,b);return c;}
function E2(a,b,c){BJ(a);a.br=b;a.dZ=c;a.O=c.dg;}
function AFL(a,b,c,d){var e,f,g,h;if(a.br===null)return (-1);e=E5(d,a.O);C9(d,a.O,b);f=a.br.j;g=0;while(true){if(g>=f){C9(d,a.O,e);return (-1);}h=(Bp(a.br,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AJg(a,b){a.dZ.e=b;}
function AHl(a,b){var c;a:{c=a.br;if(c!==null){c=BM(c);while(true){if(!BN(c))break a;if(!(BQ(c)).bE(b))continue;else return 1;}}}return 0;}
function AJN(a,b){return HA(b,a.O)>=0&&E5(b,a.O)==HA(b,a.O)?0:1;}
function ADM(a){var b,c,d,e;a.b0=1;b=a.dZ;if(b!==null&&!b.b0)H8(b);a:{b=a.br;if(b!==null){c=b.j;d=0;while(true){if(d>=c)break a;b=Bp(a.br,d);e=b.eU();if(e===null)e=b;else{b.b0=1;E7(a.br,d);Qi(a.br,d,e);}if(!e.b0)e.dV();d=d+1|0;}}}if(a.e!==null)H8(a);}
var H2=F(BP);
function AI2(a,b,c,d){var e,f,g,h;e=C0(d,a.O);BD(d,a.O,b);f=a.br.j;g=0;while(true){if(g>=f){BD(d,a.O,e);return (-1);}h=(Bp(a.br,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AJ9(a,b){return !C0(b,a.O)?0:1;}
var Dn=F(H2);
function AEk(a,b,c,d){var e,f,g;e=C0(d,a.O);BD(d,a.O,b);f=a.br.j;g=0;while(g<f){if((Bp(a.br,g)).c(b,c,d)>=0)return a.e.c(a.dZ.mL,c,d);g=g+1|0;}BD(d,a.O,e);return (-1);}
function AJU(a,b){a.e=b;}
var LC=F(Dn);
function AJb(a,b,c,d){var e,f;e=a.br.j;f=0;while(f<e){if((Bp(a.br,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function ALR(a,b){return 0;}
var T4=F(Dn);
function AC7(a,b,c,d){var e,f;e=a.br.j;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bp(a.br,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ALi(a,b){return 0;}
var PZ=F(Dn);
function ADJ(a,b,c,d){var e,f,g,h;e=a.br.j;f=d.h9?0:d.ct;a:{g=a.e.c(b,c,d);if(g>=0){BD(d,a.O,b);h=0;while(true){if(h>=e)break a;if((Bp(a.br,h)).b7(f,b,c,d)>=0){BD(d,a.O,(-1));return g;}h=h+1|0;}}}return (-1);}
function ANl(a,b){return 0;}
var RT=F(Dn);
function AB0(a,b,c,d){var e,f;e=a.br.j;BD(d,a.O,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bp(a.br,f)).b7(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AKl(a,b){return 0;}
function FN(){BP.call(this);this.cB=null;}
function AON(a,b){var c=new FN();XF(c,a,b);return c;}
function XF(a,b,c){BJ(a);a.cB=b;a.dZ=c;a.O=c.dg;}
function ACf(a,b,c,d){var e,f;e=E5(d,a.O);C9(d,a.O,b);f=a.cB.c(b,c,d);if(f>=0)return f;C9(d,a.O,e);return (-1);}
function AHF(a,b,c,d){var e;e=a.cB.b3(b,c,d);if(e>=0)C9(d,a.O,e);return e;}
function AKA(a,b,c,d,e){var f;f=a.cB.b7(b,c,d,e);if(f>=0)C9(e,a.O,f);return f;}
function AHh(a,b){return a.cB.bE(b);}
function AJj(a){var b;b=new LW;XF(b,a.cB,a.dZ);a.e=b;return b;}
function AMA(a){var b;a.b0=1;b=a.dZ;if(b!==null&&!b.b0)H8(b);b=a.cB;if(b!==null&&!b.b0){b=b.eU();if(b!==null){a.cB.b0=1;a.cB=b;}a.cB.dV();}}
var F1=F();
function Q(){var a=this;F1.call(a);a.S=0;a.bZ=0;a.C=null;a.iC=null;a.je=null;a.F=0;}
var ASS=null;function NA(){NA=Bf(Q);AEa();}
function Bm(a){var b;NA();b=new UY;b.w=Bu(64);a.C=b;}
function AC9(a){return null;}
function ACC(a){return a.C;}
function Zd(a){var b,c,d,e,f;if(!a.bZ)b=Gr(a.C,0)>=2048?0:1;else{a:{c=a.C;b=0;d=c.bd;if(b<d){e=c.w.data;f=(e[0]^(-1))>>>0|0;if(f)b=Hu(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Hu(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AFY(a){return a.F;}
function ALa(a){return a;}
function WR(a){var b,c;if(a.je===null){b=a.en();c=new Ue;c.xf=a;c.nd=b;Bm(c);a.je=c;D3(c,a.bZ);}return a.je;}
function GK(a){var b,c;if(a.iC===null){b=a.en();c=new Uc;c.wT=a;c.sH=b;c.tp=a;Bm(c);a.iC=c;D3(c,a.S);a.iC.F=a.F;}return a.iC;}
function AMv(a){return 0;}
function D3(a,b){var c;c=a.S;if(c^b){a.S=c?0:1;a.bZ=a.bZ?0:1;}if(!a.F)a.F=1;return a;}
function AE_(a){return a.S;}
function I7(b,c){NA();return b.i(c);}
function Ht(b,c){var d,e;NA();if(b.cZ()!==null&&c.cZ()!==null){b=b.cZ();c=c.cZ();d=Be(b.w.data.length,c.w.data.length);e=0;a:{while(e<d){if(b.w.data[e]&c.w.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function QG(b,c){var d,e,f;NA();d=0;while(true){AKj();e=AST.data;if(d>=e.length){f=new Ig;Br(f,C(5));f.xx=C(5);f.xj=b;J(f);}e=e[d].data;if(B0(b,e[0]))break;d=d+1|0;}return AAf(e[1],c);}
function AEa(){var b;b=new Gh;AKj();ASS=b;}
function Xt(){var a=this;Q.call(a);a.ky=0;a.mJ=0;a.fI=0;a.j_=0;a.dt=0;a.eP=0;a.y=null;a.bm=null;}
function C1(){var a=new Xt();ANa(a);return a;}
function ALV(a,b){var c=new Xt();AD0(c,a,b);return c;}
function ANa(a){Bm(a);a.y=ANm();}
function AD0(a,b,c){Bm(a);a.y=ANm();a.ky=b;a.mJ=c;}
function Ch(a,b){a:{if(a.ky){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dt){Le(a.y,GO(b&65535));break a;}Kh(a.y,GO(b&65535));break a;}if(a.mJ&&b>128){a.fI=1;b=FU(FR(b));}}}if(!(!Rf(b)&&!NK(b))){if(a.j_)Le(a.C,b-55296|0);else Kh(a.C,b-55296|0);}if(a.dt)Le(a.y,b);else Kh(a.y,b);if(!a.F&&KV(b))a.F=1;return a;}
function ABw(a,b){var c,d,e;if(!a.F&&b.F)a.F=1;if(a.j_){if(!b.bZ)Fg(a.C,b.en());else CP(a.C,b.en());}else if(!b.bZ)Fb(a.C,b.en());else{EU(a.C,b.en());CP(a.C,b.en());a.bZ=a.bZ?0:1;a.j_=1;}if(!a.eP&&b.cZ()!==null){if(a.dt){if(!b.S)Fg(a.y,b.cZ());else CP(a.y,b.cZ());}else if(!b.S)Fb(a.y,b.cZ());else{EU(a.y,b.cZ());CP(a.y,b.cZ());a.S=a.S?0:1;a.dt=1;}}else{c=a.S;d=a.bm;if(d!==null){if(!c){e=new Nt;e.vl=a;e.tY=c;e.tc=d;e.sZ=b;Bm(e);a.bm=e;}else{e=new Nu;e.xG=a;e.qg=c;e.pY=d;e.pm=b;Bm(e);a.bm=e;}}else{if(c&&!a.dt&&
KZ(a.y)){d=new Nq;d.wh=a;d.p9=b;Bm(d);a.bm=d;}else if(!c){d=new No;d.jR=a;d.iY=c;d.n4=b;Bm(d);a.bm=d;}else{d=new Np;d.kP=a;d.i6=c;d.s4=b;Bm(d);a.bm=d;}a.eP=1;}}return a;}
function BR(a,b,c){var d,e,f,g,h;if(b>c){d=new BI;W(d);J(d);}a:{b:{if(!a.ky){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Ch(a,b);b=b+1|0;}}if(!a.dt)G6(a.y,b,c+1|0);else{d=a.y;c=c+1|0;if(b>c){d=new BT;W(d);J(d);}e=d.bd;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.w.data;h[g]=h[g]&(Hn(d,b)|GZ(d,f));}else{h=d.w.data;h[g]=h[g]&Hn(d,b);e=g+1|0;while(e<c){d.w.data[e]=0;e=e+1|0;}if(f&31){h=d.w.data;h[c]=h[c]&GZ(d,f);}}Gk(d);}}}}return a;}
function Wk(a,b){var c,d,e;if(!a.F&&b.F)a.F=1;if(b.fI)a.fI=1;c=a.bZ;if(!(c^b.bZ)){if(!c)Fb(a.C,b.C);else CP(a.C,b.C);}else if(c)Fg(a.C,b.C);else{EU(a.C,b.C);CP(a.C,b.C);a.bZ=1;}if(!a.eP&&CA(b)!==null){c=a.S;if(!(c^b.S)){if(!c)Fb(a.y,CA(b));else CP(a.y,CA(b));}else if(c)Fg(a.y,CA(b));else{EU(a.y,CA(b));CP(a.y,CA(b));a.S=1;}}else{c=a.S;d=a.bm;if(d!==null){if(!c){e=new Ni;e.u6=a;e.r5=c;e.s3=d;e.tC=b;Bm(e);a.bm=e;}else{e=new NW;e.vw=a;e.tx=c;e.md=d;e.mT=b;Bm(e);a.bm=e;}}else{if(!a.dt&&KZ(a.y)){if(!c){d=new Nr;d.xI
=a;d.o$=b;Bm(d);a.bm=d;}else{d=new Ns;d.vA=a;d.tm=b;Bm(d);a.bm=d;}}else if(!c){d=new Nv;d.sd=a;d.qt=b;d.p1=c;Bm(d);a.bm=d;}else{d=new Nw;d.qO=a;d.q4=b;d.rl=c;Bm(d);a.bm=d;}a.eP=1;}}}
function UL(a,b){var c,d,e;if(!a.F&&b.F)a.F=1;if(b.fI)a.fI=1;c=a.bZ;if(!(c^b.bZ)){if(!c)CP(a.C,b.C);else Fb(a.C,b.C);}else if(!c)Fg(a.C,b.C);else{EU(a.C,b.C);CP(a.C,b.C);a.bZ=0;}if(!a.eP&&CA(b)!==null){c=a.S;if(!(c^b.S)){if(!c)CP(a.y,CA(b));else Fb(a.y,CA(b));}else if(!c)Fg(a.y,CA(b));else{EU(a.y,CA(b));CP(a.y,CA(b));a.S=0;}}else{c=a.S;d=a.bm;if(d!==null){if(!c){e=new Nk;e.vk=a;e.sh=c;e.nb=d;e.qe=b;Bm(e);a.bm=e;}else{e=new Nl;e.vG=a;e.rB=c;e.l5=d;e.r3=b;Bm(e);a.bm=e;}}else{if(!a.dt&&KZ(a.y)){if(!c){d=new Ng;d.vC
=a;d.oD=b;Bm(d);a.bm=d;}else{d=new Nh;d.xC=a;d.oK=b;Bm(d);a.bm=d;}}else if(!c){d=new Nm;d.uH=a;d.tU=b;d.qW=c;Bm(d);a.bm=d;}else{d=new Nf;d.qU=a;d.rJ=b;d.qh=c;Bm(d);a.bm=d;}a.eP=1;}}}
function CE(a,b){var c;c=a.bm;if(c!==null)return a.S^c.i(b);return a.S^C6(a.y,b);}
function CA(a){if(!a.eP)return a.y;return null;}
function AE1(a){return a.C;}
function ALB(a){var b,c;if(a.bm!==null)return a;b=CA(a);c=new Nj;c.uY=a;c.hN=b;Bm(c);return D3(c,a.S);}
function AIt(a){var b,c,d;b=new R;T(b);c=Gr(a.y,0);while(c>=0){Hv(b,FL(c));BY(b,124);c=Gr(a.y,c+1|0);}d=b.E;if(d>0)T5(b,d-1|0);return S(b);}
function AFb(a){return a.fI;}
function Ig(){var a=this;Bo.call(a);a.xx=null;a.xj=null;}
function DC(){By.call(this);this.B=null;}
function CS(a,b,c,d){Jy(a,c);a.B=b;a.gS=d;}
function AM_(a){return a.B;}
function AKB(a,b){return !a.B.bE(b)&&!a.e.bE(b)?0:1;}
function ALW(a,b){return 1;}
function AHX(a){var b;a.b0=1;b=a.e;if(b!==null&&!b.b0){b=b.eU();if(b!==null){a.e.b0=1;a.e=b;}a.e.dV();}b=a.B;if(b!==null){if(!b.b0){b=b.eU();if(b!==null){a.B.b0=1;a.B=b;}a.B.dV();}else if(b instanceof FN&&b.dZ.jh)a.B=b.e;}}
function CG(){DC.call(this);this.P=null;}
function AOR(a,b,c){var d=new CG();Et(d,a,b,c);return d;}
function Et(a,b,c,d){CS(a,b,c,d);a.P=b;}
function AB3(a,b,c,d){var e,f;e=0;a:{while((b+a.P.bK()|0)<=d.r){f=a.P.bg(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.P.bK()|0;e=e+(-1)|0;}return f;}
function EH(){CG.call(this);this.ix=null;}
function AN0(a,b,c,d){var e=new EH();QM(e,a,b,c,d);return e;}
function QM(a,b,c,d,e){Et(a,c,d,e);a.ix=b;}
function ACR(a,b,c,d){var e,f,g,h,i;e=a.ix;f=e.ea;g=e.d8;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.P.bK()|0)>d.r)break a;i=a.P.bg(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.P.bK()|0;h=h+(-1)|0;}return i;}if((b+a.P.bK()|0)>d.r){d.c2=1;return (-1);}i=a.P.bg(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Cx=F(DC);
function ACe(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.B.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var D7=F(CG);
function AHK(a,b,c,d){var e;e=a.B.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function ANo(a,b){a.e=b;a.B.I(b);}
var Uf=F(CG);
function AMW(a,b,c,d){while((b+a.P.bK()|0)<=d.r&&a.P.bg(b,c)>0){b=b+a.P.bK()|0;}return a.e.c(b,c,d);}
function AIn(a,b,c,d){var e,f,g;e=a.e.b3(b,c,d);if(e<0)return (-1);f=e-a.P.bK()|0;while(f>=b&&a.P.bg(f,c)>0){g=f-a.P.bK()|0;e=f;f=g;}return e;}
function U(){var a=this;B.call(a);a.kV=null;a.jN=null;}
function AAf(a,b){if(!b&&a.kV===null)a.kV=a.x();else if(b&&a.jN===null)a.jN=D3(a.x(),1);if(b)return a.jN;return a.kV;}
var CT=F(BI);
function LQ(){var a=this;F1.call(a);a.ea=0;a.d8=0;}
function AIx(a){var b,c,d,e,f;b=a.ea;c=a.d8;d=c!=2147483647?J_(c):C(5);e=new R;T(e);BY(e,123);f=Bk(e,b);BY(f,44);BY(K(f,d),125);return S(e);}
var M8=F(By);
function AG2(a,b,c,d){return b;}
function AJf(a,b){return 0;}
function UY(){var a=this;B.call(a);a.w=null;a.bd=0;}
function ANm(){var a=new UY();ADz(a);return a;}
function ADz(a){a.w=Bu(0);}
function Kh(a,b){var c,d;c=b/32|0;if(b>=a.bd){Hx(a,c+1|0);a.bd=b+1|0;}d=a.w.data;d[c]=d[c]|1<<(b%32|0);}
function G6(a,b,c){var d,e,f,g,h;d=BF(b,c);if(d>0){e=new BT;W(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bd){Hx(a,f+1|0);a.bd=c;}if(d==f){g=a.w.data;g[d]=g[d]|GZ(a,b)&Hn(a,c);}else{g=a.w.data;g[d]=g[d]|GZ(a,b);h=d+1|0;while(h<f){a.w.data[h]=(-1);h=h+1|0;}if(c&31){g=a.w.data;g[f]=g[f]|Hn(a,c);}}}
function GZ(a,b){return (-1)<<(b%32|0);}
function Hn(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Le(a,b){var c,d,e,f;c=b/32|0;d=a.w.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bd-1|0))Gk(a);}}
function C6(a,b){var c,d;c=b/32|0;d=a.w.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Gr(a,b){var c,d,e,f;c=a.bd;if(b>=c)return (-1);d=b/32|0;e=a.w.data;f=e[d]>>>(b%32|0)|0;if(f)return Hu(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Hu(e[f])|0;f=f+1|0;}return (-1);}
function Hx(a,b){var c;c=a.w.data.length;if(c>=b)return;c=Ba((b*3|0)/2|0,(c*2|0)+1|0);a.w=H1(a.w,c);}
function Gk(a){var b,c,d;b=(a.bd+31|0)/32|0;a.bd=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Mz(a.w.data[c]);if(d<32)break;c=c+(-1)|0;a.bd=a.bd-32|0;}a.bd=a.bd-d|0;}}
function CP(a,b){var c,d,e,f;c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]&b.w.data[d];d=d+1|0;}while(true){f=a.w.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bd=Be(a.bd,b.bd);Gk(a);}
function Fg(a,b){var c,d,e;c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]&(b.w.data[d]^(-1));d=d+1|0;}Gk(a);}
function Fb(a,b){var c,d,e;c=Ba(a.bd,b.bd);a.bd=c;Hx(a,(c+31|0)/32|0);c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]|b.w.data[d];d=d+1|0;}}
function EU(a,b){var c,d,e;c=Ba(a.bd,b.bd);a.bd=c;Hx(a,(c+31|0)/32|0);c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]^b.w.data[d];d=d+1|0;}Gk(a);}
function KZ(a){return a.bd?0:1;}
function LI(){var a=this;BP.call(a);a.oP=null;a.uX=0;}
function O_(){var a=this;BP.call(a);a.lg=null;a.kR=null;}
function ZO(a,b){var c=new O_();ABm(c,a,b);return c;}
function ABm(a,b,c){BJ(a);a.lg=b;a.kR=c;}
function ACM(a,b,c,d){var e,f,g,h,i;e=a.lg.c(b,c,d);if(e<0)a:{f=a.kR;g=d.ct;e=d.r;h=b+1|0;e=BF(h,e);if(e>0){d.c2=1;e=(-1);}else{i=I(c,b);if(!f.oP.i(i))e=(-1);else{if(Cm(i)){if(e<0&&CI(I(c,h))){e=(-1);break a;}}else if(CI(i)&&b>g&&Cm(I(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AI0(a,b){a.e=b;a.kR.e=b;a.lg.I(b);}
function ADq(a,b){return 1;}
function AC8(a,b){return 1;}
function Dc(){var a=this;BP.call(a);a.dj=null;a.wb=0;}
function AGZ(a){var b=new Dc();St(b,a);return b;}
function St(a,b){BJ(a);a.dj=b.ie();a.wb=b.S;}
function AES(a,b,c,d){var e,f,g,h;e=d.r;if(b<e){f=b+1|0;g=I(c,b);if(a.i(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=I(c,f);if(GC(g,f)&&a.i(D4(g,f)))return a.e.c(b,c,d);}}return (-1);}
function AFp(a,b){return a.dj.i(b);}
function ACI(a,b){if(b instanceof Du)return I7(a.dj,b.fe);if(b instanceof D0)return I7(a.dj,b.cW);if(b instanceof Dc)return Ht(a.dj,b.dj);if(!(b instanceof DQ))return 1;return Ht(a.dj,b.eC);}
function AGS(a){return a.dj;}
function AK2(a,b){a.e=b;}
function AE3(a,b){return 1;}
var Id=F(Dc);
function AGG(a,b){return a.dj.i(FU(FR(b)));}
function Xk(){var a=this;BV.call(a);a.pA=null;a.vU=0;}
function AF0(a){var b=new Xk();AIH(b,a);return b;}
function AIH(a,b){C$(a);a.pA=b.ie();a.vU=b.S;}
function AG3(a,b,c){return !a.pA.i(Ey(D6(I(c,b))))?(-1):1;}
function DQ(){var a=this;BV.call(a);a.eC=null;a.wu=0;}
function ALs(a){var b=new DQ();AJB(b,a);return b;}
function AJB(a,b){C$(a);a.eC=b.ie();a.wu=b.S;}
function Ll(a,b,c){return !a.eC.i(I(c,b))?(-1):1;}
function AJi(a,b){if(b instanceof D0)return I7(a.eC,b.cW);if(b instanceof DQ)return Ht(a.eC,b.eC);if(!(b instanceof Dc)){if(!(b instanceof Du))return 1;return 0;}return Ht(a.eC,b.dj);}
function NB(){var a=this;BP.call(a);a.f2=null;a.k7=null;a.iv=0;}
function ALG(a,b){var c=new NB();ACh(c,a,b);return c;}
function ACh(a,b,c){BJ(a);a.f2=b;a.iv=c;}
function AHJ(a,b){a.e=b;}
function Pl(a){if(a.k7===null)a.k7=GA(a.f2);return a.k7;}
function ABR(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.r;f=Bu(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=I(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?Fw([k,l]):Fw([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.iv;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.f2.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=I(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=I(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.iv==3){k=f[0];m=a.f2.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.iv==2){b=f[0];m=a.f2.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function ADg(a,b){return b instanceof NB&&!B0(Pl(b),Pl(a))?0:1;}
function ALE(a,b){return 1;}
function D0(){BV.call(this);this.cW=0;}
function XL(a){var b=new D0();AJD(b,a);return b;}
function AJD(a,b){C$(a);a.cW=b;}
function AGN(a){return 1;}
function AFW(a,b,c){return a.cW!=I(c,b)?(-1):1;}
function AEQ(a,b,c,d){var e,f,g;if(!(c instanceof Bw))return GS(a,b,c,d);e=d.r;while(true){if(b>=e)return (-1);f=Hs(c,a.cW,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AGU(a,b,c,d,e){var f;if(!(d instanceof Bw))return G1(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=GF(d,a.cW,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ALx(a,b){if(b instanceof D0)return b.cW!=a.cW?0:1;if(!(b instanceof DQ)){if(b instanceof Dc)return b.i(a.cW);if(!(b instanceof Du))return 1;return 0;}return Ll(b,0,UZ(a.cW))<=0?0:1;}
function AA9(){BV.call(this);this.lQ=0;}
function AJZ(a){var b=new AA9();AIi(b,a);return b;}
function AIi(a,b){C$(a);a.lQ=Ey(D6(b));}
function ABL(a,b,c){return a.lQ!=Ey(D6(I(c,b)))?(-1):1;}
function Wn(){var a=this;BV.call(a);a.tI=0;a.m$=0;}
function ADG(a){var b=new Wn();AKh(b,a);return b;}
function AKh(a,b){C$(a);a.tI=b;a.m$=GO(b);}
function AB9(a,b,c){return a.tI!=I(c,b)&&a.m$!=I(c,b)?(-1):1;}
function EM(){var a=this;BP.call(a);a.gI=0;a.jw=null;a.i0=null;a.iU=0;}
function APy(a,b){var c=new EM();MV(c,a,b);return c;}
function MV(a,b,c){BJ(a);a.gI=1;a.i0=b;a.iU=c;}
function AMz(a,b){a.e=b;}
function AI1(a,b,c,d){var e,f,g,h,i,j,k,l;e=Bu(4);f=d.r;if(b>=f)return (-1);g=Jj(a,b,c,f);h=b+a.gI|0;i=AAR(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;C7(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Jj(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AAR(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.gI|0;if(h>=f){b=k;break a;}g=Jj(a,h,c,f);b=k;}}}if(b!=a.iU)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.i0.data[g])break;g=g+1|0;}return (-1);}
function UK(a){var b,c;if(a.jw===null){b=new R;T(b);c=0;while(c<a.iU){Hv(b,FL(a.i0.data[c]));c=c+1|0;}a.jw=S(b);}return a.jw;}
function Jj(a,b,c,d){var e,f,g;a.gI=1;if(b>=(d-1|0))e=I(c,b);else{d=b+1|0;e=I(c,b);f=I(c,d);if(GC(e,f)){g=B1(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Cm(g[0])&&CI(g[1])?D4(g[0],g[1]):g[0];a.gI=2;}}return e;}
function AG4(a,b){return b instanceof EM&&!B0(UK(b),UK(a))?0:1;}
function AJV(a,b){return 1;}
var Vj=F(EM);
var R5=F(EM);
var V_=F(Cx);
function AD5(a,b,c,d){var e;while(true){e=a.B.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var Oq=F(Cx);
function AIb(a,b,c,d){var e;e=a.B.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.B.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var Ff=F(Cx);
function AK0(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.B.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function AL6(a,b){a.e=b;a.B.I(b);}
var N5=F(Ff);
function AGQ(a,b,c,d){var e;e=a.B.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function AIB(a,b){a.e=b;}
function EL(){var a=this;Cx.call(a);a.fn=null;a.c9=0;}
function ASU(a,b,c,d,e){var f=new EL();Ib(f,a,b,c,d,e);return f;}
function Ib(a,b,c,d,e,f){CS(a,c,d,e);a.fn=b;a.c9=f;}
function ANj(a,b,c,d){var e,f;e=LM(d,a.c9);if(!a.B.A(d))return a.e.c(b,c,d);if(e>=a.fn.d8)return a.e.c(b,c,d);f=a.c9;e=e+1|0;DM(d,f,e);f=a.B.c(b,c,d);if(f>=0){DM(d,a.c9,0);return f;}f=a.c9;e=e+(-1)|0;DM(d,f,e);if(e>=a.fn.ea)return a.e.c(b,c,d);DM(d,a.c9,0);return (-1);}
var L1=F(EL);
function AGi(a,b,c,d){var e,f,g;e=0;f=a.fn.d8;a:{while(true){g=a.B.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fn.ea)return (-1);return a.e.c(b,c,d);}
var Qj=F(Cx);
function AMJ(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.B.c(b,c,d);}
var Pk=F(Ff);
function ADr(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.B.c(b,c,d);return e;}
var SX=F(EL);
function ACw(a,b,c,d){var e,f,g;e=LM(d,a.c9);if(!a.B.A(d))return a.e.c(b,c,d);f=a.fn;if(e>=f.d8){DM(d,a.c9,0);return a.e.c(b,c,d);}if(e<f.ea){DM(d,a.c9,e+1|0);g=a.B.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){DM(d,a.c9,0);return g;}DM(d,a.c9,e+1|0);g=a.B.c(b,c,d);}return g;}
var Qk=F(DC);
function AM7(a,b,c,d){var e;e=d.r;if(e>b)return a.e.b7(b,e,c,d);return a.e.c(b,c,d);}
function ALb(a,b,c,d){var e;e=d.r;if(a.e.b7(b,e,c,d)>=0)return b;return (-1);}
function Ne(){DC.call(this);this.jK=null;}
function AJk(a,b,c,d){var e,f;e=d.r;f=SZ(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.b7(b,e,c,d);return a.e.c(b,c,d);}
function ABW(a,b,c,d){var e,f,g,h;e=d.r;f=a.e.b3(b,c,d);if(f<0)return (-1);g=SZ(a,f,e,c);if(g>=0)e=g;g=Ba(f,a.e.b7(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.jK.gQ(I(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function SZ(a,b,c,d){while(true){if(b>=c)return (-1);if(a.jK.gQ(I(d,b)))break;b=b+1|0;}return b;}
var El=F();
var ASV=null;var ASW=null;function N7(b){var c;if(!(b&1)){c=ASW;if(c!==null)return c;c=new Tk;ASW=c;return c;}c=ASV;if(c!==null)return c;c=new Tj;ASV=c;return c;}
var Wa=F(CG);
function ACx(a,b,c,d){var e;a:{while(true){if((b+a.P.bK()|0)>d.r)break a;e=a.P.bg(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var T_=F(D7);
function AH$(a,b,c,d){var e;if((b+a.P.bK()|0)<=d.r){e=a.P.bg(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var NT=F(EH);
function AKC(a,b,c,d){var e,f,g,h,i;e=a.ix;f=e.ea;g=e.d8;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.P.bK()|0)>d.r)break a;i=a.P.bg(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.P.bK()|0)>d.r){d.c2=1;return (-1);}i=a.P.bg(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Pe=F(CG);
function AJd(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.P.bK()|0)<=d.r){e=a.P.bg(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Sh=F(D7);
function ACG(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.B.c(b,c,d);}
var P0=F(EH);
function AKR(a,b,c,d){var e,f,g,h,i,j;e=a.ix;f=e.ea;g=e.d8;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.P.bK()|0)<=d.r){i=a.P.bg(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.P.bK()|0)>d.r){d.c2=1;return (-1);}j=a.P.bg(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Jh=F(By);
function AHj(a,b,c,d){if(b&&!(d.eQ&&b==d.ct))return (-1);return a.e.c(b,c,d);}
function AGu(a,b){return 0;}
function XU(){By.call(this);this.te=0;}
function ALr(a){var b=new XU();AGJ(b,a);return b;}
function AGJ(a,b){BJ(a);a.te=b;}
function AC5(a,b,c,d){var e,f,g;e=b<d.r?I(c,b):32;f=!b?32:I(c,b-1|0);g=d.h9?0:d.ct;return (e!=32&&!Pp(a,e,b,g,c)?0:1)^(f!=32&&!Pp(a,f,b-1|0,g,c)?0:1)^a.te?(-1):a.e.c(b,c,d);}
function ADf(a,b){return 0;}
function Pp(a,b,c,d,e){var f;if(!Iz(b)&&b!=95){a:{if(Ce(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=I(e,c);if(Iz(f))return 0;if(Ce(f)!=6)return 1;}}return 1;}return 0;}
var M_=F(By);
function AGI(a,b,c,d){if(b!=d.gX)return (-1);return a.e.c(b,c,d);}
function ANc(a,b){return 0;}
function U3(){By.call(this);this.ft=0;}
function AO4(a){var b=new U3();AAI(b,a);return b;}
function AAI(a,b){BJ(a);a.ft=b;}
function AJF(a,b,c,d){var e,f,g;e=!d.eQ?H(c):d.r;if(b>=e){BD(d,a.ft,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&I(c,b)==13&&I(c,b+1|0)==10){BD(d,a.ft,0);return a.e.c(b,c,d);}a:{if(f==1){g=I(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BD(d,a.ft,0);return a.e.c(b,c,d);}
function ADU(a,b){var c;c=!C0(b,a.ft)?0:1;BD(b,a.ft,(-1));return c;}
var UC=F(By);
function AIZ(a,b,c,d){if(b<(d.h9?H(c):d.r))return (-1);d.c2=1;d.w2=1;return a.e.c(b,c,d);}
function ABJ(a,b){return 0;}
function Ma(){By.call(this);this.ql=null;}
function ADK(a,b,c,d){a:{if(b!=d.r){if(!b)break a;if(d.eQ&&b==d.ct)break a;if(a.ql.rE(I(c,b-1|0),I(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function AFC(a,b){return 0;}
var AAY=F(BP);
function APl(){var a=new AAY();AIO(a);return a;}
function AIO(a){BJ(a);}
function AMO(a,b,c,d){var e,f,g,h;e=d.r;f=b+1|0;if(f>e){d.c2=1;return (-1);}g=I(c,b);if(Cm(g)){h=b+2|0;if(h<=e&&GC(g,I(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function ADi(a,b){a.e=b;}
function AII(a){return (-2147483602);}
function ADh(a,b){return 1;}
function Xr(){BP.call(this);this.kg=null;}
function AOW(a){var b=new Xr();ADS(b,a);return b;}
function ADS(a,b){BJ(a);a.kg=b;}
function AIS(a,b,c,d){var e,f,g,h;e=d.r;f=b+1|0;if(f>e){d.c2=1;return (-1);}g=I(c,b);if(Cm(g)){b=b+2|0;if(b<=e){h=I(c,f);if(GC(g,h))return a.kg.gQ(D4(g,h))?(-1):a.e.c(b,c,d);}}return a.kg.gQ(g)?(-1):a.e.c(f,c,d);}
function AKt(a,b){a.e=b;}
function ABF(a){return (-2147483602);}
function AM3(a,b){return 1;}
function AAP(){By.call(this);this.gB=0;}
function AOx(a){var b=new AAP();AFz(b,a);return b;}
function AFz(a,b){BJ(a);a.gB=b;}
function AG6(a,b,c,d){var e;e=!d.eQ?H(c):d.r;if(b>=e){BD(d,a.gB,0);return a.e.c(b,c,d);}if((e-b|0)==1&&I(c,b)==10){BD(d,a.gB,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AFy(a,b){var c;c=!C0(b,a.gB)?0:1;BD(b,a.gB,(-1));return c;}
function Zg(){By.call(this);this.gG=0;}
function AOe(a){var b=new Zg();AF1(b,a);return b;}
function AF1(a,b){BJ(a);a.gG=b;}
function AIY(a,b,c,d){if((!d.eQ?H(c)-b|0:d.r-b|0)<=0){BD(d,a.gG,0);return a.e.c(b,c,d);}if(I(c,b)!=10)return (-1);BD(d,a.gG,1);return a.e.c(b+1|0,c,d);}
function AFl(a,b){var c;c=!C0(b,a.gG)?0:1;BD(b,a.gG,(-1));return c;}
function Wj(){By.call(this);this.e3=0;}
function ANF(a){var b=new Wj();ANk(b,a);return b;}
function ANk(a,b){BJ(a);a.e3=b;}
function AGk(a,b,c,d){var e,f,g;e=!d.eQ?H(c)-b|0:d.r-b|0;if(!e){BD(d,a.e3,0);return a.e.c(b,c,d);}if(e<2){f=I(c,b);g=97;}else{f=I(c,b);g=I(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BD(d,a.e3,0);return a.e.c(b,c,d);case 13:if(g!=10){BD(d,a.e3,0);return a.e.c(b,c,d);}BD(d,a.e3,0);return a.e.c(b,c,d);default:}return (-1);}
function ADX(a,b){var c;c=!C0(b,a.e3)?0:1;BD(b,a.e3,(-1));return c;}
function Gi(){var a=this;BP.call(a);a.mC=0;a.fX=0;}
function APt(a,b){var c=new Gi();NJ(c,a,b);return c;}
function NJ(a,b,c){BJ(a);a.mC=b;a.fX=c;}
function ACB(a,b,c,d){var e,f,g,h;e=Fy(a,d);if(e!==null&&(b+H(e)|0)<=d.r){f=0;while(true){if(f>=H(e)){BD(d,a.fX,H(e));return a.e.c(b+H(e)|0,c,d);}g=I(e,f);h=b+f|0;if(g!=I(c,h)&&GO(I(e,f))!=I(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AJS(a,b){a.e=b;}
function Fy(a,b){var c,d;c=a.mC;d=E5(b,c);c=HA(b,c);return (c|d|(c-d|0))>=0&&c<=H(b.kk)?B9(b.kk,d,c):null;}
function AJ_(a,b){var c;c=!C0(b,a.fX)?0:1;BD(b,a.fX,(-1));return c;}
var AAU=F(Gi);
function ANK(a,b){var c=new AAU();ALY(c,a,b);return c;}
function ALY(a,b,c){NJ(a,b,c);}
function AD3(a,b,c,d){var e,f;e=Fy(a,d);if(e!==null&&(b+H(e)|0)<=d.r){f=!Ss(c,e,b)?(-1):H(e);if(f<0)return (-1);BD(d,a.fX,f);return a.e.c(b+f|0,c,d);}return (-1);}
function ALP(a,b,c,d){var e,f;e=Fy(a,d);f=d.ct;if(e!==null&&(b+H(e)|0)<=f){while(true){if(b>f)return (-1);b=Os(c,e,b);if(b<0)return (-1);if(a.e.c(b+H(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ACm(a,b,c,d,e){var f,g;f=Fy(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=OE(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+H(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AH4(a,b){return 1;}
var Yx=F(Gi);
function AOf(a,b){var c=new Yx();AFv(c,a,b);return c;}
function AFv(a,b,c){NJ(a,b,c);}
function AHz(a,b,c,d){var e,f;e=Fy(a,d);if(e!==null&&(b+H(e)|0)<=d.r){f=0;while(true){if(f>=H(e)){BD(d,a.fX,H(e));return a.e.c(b+H(e)|0,c,d);}if(Ey(D6(I(e,f)))!=Ey(D6(I(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var M7=F(FD);
function AFc(a,b,c,d,e){LT(a,b,c,d,e);return a;}
function AC$(a,b,c,d){U_(a,b,c,d);return a;}
function ADy(a,b){IG(a,b);}
function ALd(a,b,c){Vo(a,b,c);return a;}
function Qm(){var a=this;BV.call(a);a.cc=null;a.jz=null;a.kr=null;}
function AEi(a,b,c){return !Jg(a,c,b)?(-1):a.bs;}
function AC1(a,b,c,d){var e,f,g;e=d.r;while(true){if(b>e)return (-1);f=I(a.cc,a.bs-1|0);a:{while(true){g=a.bs;if(b>(e-g|0)){b=(-1);break a;}g=I(c,(b+g|0)-1|0);if(g==f&&Jg(a,c,b))break;b=b+Rl(a.jz,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bs|0,c,d)>=0)break;b=b+1|0;}return b;}
function AFB(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=I(a.cc,0);g=(H(d)-c|0)-a.bs|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=I(d,c);if(g==f&&Jg(a,d,c))break;c=c-Rl(a.kr,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bs|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AF7(a,b){var c;if(b instanceof D0)return b.cW!=I(a.cc,0)?0:1;if(b instanceof DQ)return Ll(b,0,B9(a.cc,0,1))<=0?0:1;if(!(b instanceof Dc)){if(!(b instanceof Du))return 1;return H(a.cc)>1&&b.fe==D4(I(a.cc,0),I(a.cc,1))?1:0;}a:{b:{b=b;if(!b.i(I(a.cc,0))){if(H(a.cc)<=1)break b;if(!b.i(D4(I(a.cc,0),I(a.cc,1))))break b;}c=1;break a;}c=0;}return c;}
function Jg(a,b,c){var d;d=0;while(d<a.bs){if(I(b,d+c|0)!=I(a.cc,d))return 0;d=d+1|0;}return 1;}
function Wi(){BV.call(this);this.ia=null;}
function APx(a){var b=new Wi();ALy(b,a);return b;}
function ALy(a,b){var c,d,e;C$(a);c=new R;T(c);d=0;while(true){e=BF(d,b.E);if(e>=0){a.ia=S(c);a.bs=c.E;return;}if(d<0)break;if(e>=0)break;BY(c,Ey(D6(b.J.data[d])));d=d+1|0;}b=new BT;W(b);J(b);}
function AHH(a,b,c){var d;d=0;while(true){if(d>=H(a.ia))return H(a.ia);if(I(a.ia,d)!=Ey(D6(I(c,b+d|0))))break;d=d+1|0;}return (-1);}
function L6(){BV.call(this);this.gy=null;}
function AKF(a,b,c){var d,e,f;d=0;while(true){if(d>=H(a.gy))return H(a.gy);e=I(a.gy,d);f=b+d|0;if(e!=I(c,f)&&GO(I(a.gy,d))!=I(c,f))break;d=d+1|0;}return (-1);}
var Gh=F();
var ASX=null;var ASY=null;var AST=null;function AKj(){AKj=Bf(Gh);AEE();}
function AEE(){ASX=APa();ASY=AOq();AST=G($rt_arraycls(B),[G(B,[C(278),APu()]),G(B,[C(279),ANC()]),G(B,[C(280),AO9()]),G(B,[C(281),APg()]),G(B,[C(282),ASY]),G(B,[C(283),AOC()]),G(B,[C(284),AOn()]),G(B,[C(285),ANL()]),G(B,[C(286),ANJ()]),G(B,[C(287),ANP()]),G(B,[C(288),AN2()]),G(B,[C(289),ANN()]),G(B,[C(290),AOQ()]),G(B,[C(291),ANy()]),G(B,[C(292),APc()]),G(B,[C(293),AN1()]),G(B,[C(294),AOA()]),G(B,[C(295),ANZ()]),G(B,[C(296),AOB()]),G(B,[C(297),ANR()]),G(B,[C(298),APk()]),G(B,[C(299),ANT()]),G(B,[C(300),AOG()]),
G(B,[C(301),AO8()]),G(B,[C(302),AO5()]),G(B,[C(303),APh()]),G(B,[C(304),ANQ()]),G(B,[C(305),AOV()]),G(B,[C(306),ASX]),G(B,[C(307),AOK()]),G(B,[C(308),ANM()]),G(B,[C(309),ASX]),G(B,[C(310),ANu()]),G(B,[C(311),ASY]),G(B,[C(312),AN9()]),G(B,[C(313),L(0,127)]),G(B,[C(314),L(128,255)]),G(B,[C(315),L(256,383)]),G(B,[C(316),L(384,591)]),G(B,[C(317),L(592,687)]),G(B,[C(318),L(688,767)]),G(B,[C(319),L(768,879)]),G(B,[C(320),L(880,1023)]),G(B,[C(321),L(1024,1279)]),G(B,[C(322),L(1280,1327)]),G(B,[C(323),L(1328,1423)]),
G(B,[C(324),L(1424,1535)]),G(B,[C(325),L(1536,1791)]),G(B,[C(326),L(1792,1871)]),G(B,[C(327),L(1872,1919)]),G(B,[C(328),L(1920,1983)]),G(B,[C(329),L(2304,2431)]),G(B,[C(330),L(2432,2559)]),G(B,[C(331),L(2560,2687)]),G(B,[C(332),L(2688,2815)]),G(B,[C(333),L(2816,2943)]),G(B,[C(334),L(2944,3071)]),G(B,[C(335),L(3072,3199)]),G(B,[C(336),L(3200,3327)]),G(B,[C(337),L(3328,3455)]),G(B,[C(338),L(3456,3583)]),G(B,[C(339),L(3584,3711)]),G(B,[C(340),L(3712,3839)]),G(B,[C(341),L(3840,4095)]),G(B,[C(342),L(4096,4255)]),
G(B,[C(343),L(4256,4351)]),G(B,[C(344),L(4352,4607)]),G(B,[C(345),L(4608,4991)]),G(B,[C(346),L(4992,5023)]),G(B,[C(347),L(5024,5119)]),G(B,[C(348),L(5120,5759)]),G(B,[C(349),L(5760,5791)]),G(B,[C(350),L(5792,5887)]),G(B,[C(351),L(5888,5919)]),G(B,[C(352),L(5920,5951)]),G(B,[C(353),L(5952,5983)]),G(B,[C(354),L(5984,6015)]),G(B,[C(355),L(6016,6143)]),G(B,[C(356),L(6144,6319)]),G(B,[C(357),L(6400,6479)]),G(B,[C(358),L(6480,6527)]),G(B,[C(359),L(6528,6623)]),G(B,[C(360),L(6624,6655)]),G(B,[C(361),L(6656,6687)]),
G(B,[C(362),L(7424,7551)]),G(B,[C(363),L(7552,7615)]),G(B,[C(364),L(7616,7679)]),G(B,[C(365),L(7680,7935)]),G(B,[C(366),L(7936,8191)]),G(B,[C(367),L(8192,8303)]),G(B,[C(368),L(8304,8351)]),G(B,[C(369),L(8352,8399)]),G(B,[C(370),L(8400,8447)]),G(B,[C(371),L(8448,8527)]),G(B,[C(372),L(8528,8591)]),G(B,[C(373),L(8592,8703)]),G(B,[C(374),L(8704,8959)]),G(B,[C(375),L(8960,9215)]),G(B,[C(376),L(9216,9279)]),G(B,[C(377),L(9280,9311)]),G(B,[C(378),L(9312,9471)]),G(B,[C(379),L(9472,9599)]),G(B,[C(380),L(9600,9631)]),
G(B,[C(381),L(9632,9727)]),G(B,[C(382),L(9728,9983)]),G(B,[C(383),L(9984,10175)]),G(B,[C(384),L(10176,10223)]),G(B,[C(385),L(10224,10239)]),G(B,[C(386),L(10240,10495)]),G(B,[C(387),L(10496,10623)]),G(B,[C(388),L(10624,10751)]),G(B,[C(389),L(10752,11007)]),G(B,[C(390),L(11008,11263)]),G(B,[C(391),L(11264,11359)]),G(B,[C(392),L(11392,11519)]),G(B,[C(393),L(11520,11567)]),G(B,[C(394),L(11568,11647)]),G(B,[C(395),L(11648,11743)]),G(B,[C(396),L(11776,11903)]),G(B,[C(397),L(11904,12031)]),G(B,[C(398),L(12032,12255)]),
G(B,[C(399),L(12272,12287)]),G(B,[C(400),L(12288,12351)]),G(B,[C(401),L(12352,12447)]),G(B,[C(402),L(12448,12543)]),G(B,[C(403),L(12544,12591)]),G(B,[C(404),L(12592,12687)]),G(B,[C(405),L(12688,12703)]),G(B,[C(406),L(12704,12735)]),G(B,[C(407),L(12736,12783)]),G(B,[C(408),L(12784,12799)]),G(B,[C(409),L(12800,13055)]),G(B,[C(410),L(13056,13311)]),G(B,[C(411),L(13312,19893)]),G(B,[C(412),L(19904,19967)]),G(B,[C(413),L(19968,40959)]),G(B,[C(414),L(40960,42127)]),G(B,[C(415),L(42128,42191)]),G(B,[C(416),L(42752,
42783)]),G(B,[C(417),L(43008,43055)]),G(B,[C(418),L(44032,55203)]),G(B,[C(419),L(55296,56191)]),G(B,[C(420),L(56192,56319)]),G(B,[C(421),L(56320,57343)]),G(B,[C(422),L(57344,63743)]),G(B,[C(423),L(63744,64255)]),G(B,[C(424),L(64256,64335)]),G(B,[C(425),L(64336,65023)]),G(B,[C(426),L(65024,65039)]),G(B,[C(427),L(65040,65055)]),G(B,[C(428),L(65056,65071)]),G(B,[C(429),L(65072,65103)]),G(B,[C(430),L(65104,65135)]),G(B,[C(431),L(65136,65279)]),G(B,[C(432),L(65280,65519)]),G(B,[C(433),L(0,1114111)]),G(B,[C(434),
ANO()]),G(B,[C(435),BE(0,1)]),G(B,[C(436),HN(62,1)]),G(B,[C(437),BE(1,1)]),G(B,[C(438),BE(2,1)]),G(B,[C(439),BE(3,0)]),G(B,[C(440),BE(4,0)]),G(B,[C(441),BE(5,1)]),G(B,[C(442),HN(448,1)]),G(B,[C(443),BE(6,1)]),G(B,[C(444),BE(7,0)]),G(B,[C(445),BE(8,1)]),G(B,[C(446),HN(3584,1)]),G(B,[C(447),BE(9,1)]),G(B,[C(448),BE(10,1)]),G(B,[C(449),BE(11,1)]),G(B,[C(450),HN(28672,0)]),G(B,[C(451),BE(12,0)]),G(B,[C(452),BE(13,0)]),G(B,[C(453),BE(14,0)]),G(B,[C(454),AOj(983040,1,1)]),G(B,[C(455),BE(15,0)]),G(B,[C(456),BE(16,
1)]),G(B,[C(457),BE(18,1)]),G(B,[C(458),AOu(19,0,1)]),G(B,[C(459),HN(1643118592,1)]),G(B,[C(460),BE(20,0)]),G(B,[C(461),BE(21,0)]),G(B,[C(462),BE(22,0)]),G(B,[C(463),BE(23,0)]),G(B,[C(464),BE(24,1)]),G(B,[C(465),HN(2113929216,1)]),G(B,[C(466),BE(25,1)]),G(B,[C(467),BE(26,0)]),G(B,[C(468),BE(27,0)]),G(B,[C(469),BE(28,1)]),G(B,[C(470),BE(29,0)]),G(B,[C(471),BE(30,0)])]);}
function Lu(){BV.call(this);this.pU=0;}
function AKK(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.pU!=FU(FR(D4(e,d)))?(-1):2;}
function JN(){BP.call(this);this.fG=0;}
function AIM(a){var b=new JN();ADv(b,a);return b;}
function ADv(a,b){BJ(a);a.fG=b;}
function AJa(a,b){a.e=b;}
function ADV(a,b,c,d){var e,f;e=b+1|0;if(e>d.r){d.c2=1;return (-1);}f=I(c,b);if(b>d.ct&&Cm(I(c,b-1|0)))return (-1);if(a.fG!=f)return (-1);return a.e.c(e,c,d);}
function AF4(a,b,c,d){var e,f,g,h;if(!(c instanceof Bw))return GS(a,b,c,d);e=d.ct;f=d.r;while(true){if(b>=f)return (-1);g=Hs(c,a.fG,b);if(g<0)return (-1);if(g>e&&Cm(I(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AEo(a,b,c,d,e){var f,g;if(!(d instanceof Bw))return G1(a,b,c,d,e);f=e.ct;a:{while(true){if(c<b)return (-1);g=GF(d,a.fG,c);if(g<0)break a;if(g<b)break a;if(g>f&&Cm(I(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ACk(a,b){if(b instanceof D0)return 0;if(b instanceof DQ)return 0;if(b instanceof Dc)return 0;if(b instanceof Du)return 0;if(b instanceof J2)return 0;if(!(b instanceof JN))return 1;return b.fG!=a.fG?0:1;}
function ALk(a,b){return 1;}
function J2(){BP.call(this);this.fl=0;}
function AGo(a){var b=new J2();AIT(b,a);return b;}
function AIT(a,b){BJ(a);a.fl=b;}
function ADx(a,b){a.e=b;}
function AB1(a,b,c,d){var e,f,g,h;e=d.r;f=b+1|0;g=BF(f,e);if(g>0){d.c2=1;return (-1);}h=I(c,b);if(g<0&&CI(I(c,f)))return (-1);if(a.fl!=h)return (-1);return a.e.c(f,c,d);}
function AJr(a,b,c,d){var e,f;if(!(c instanceof Bw))return GS(a,b,c,d);e=d.r;while(true){if(b>=e)return (-1);f=Hs(c,a.fl,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CI(I(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function AKD(a,b,c,d,e){var f,g;if(!(d instanceof Bw))return G1(a,b,c,d,e);f=e.r;a:{while(true){if(c<b)return (-1);g=GF(d,a.fl,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CI(I(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AEj(a,b){if(b instanceof D0)return 0;if(b instanceof DQ)return 0;if(b instanceof Dc)return 0;if(b instanceof Du)return 0;if(b instanceof JN)return 0;if(!(b instanceof J2))return 1;return b.fl!=a.fl?0:1;}
function AJz(a,b){return 1;}
function Du(){var a=this;BV.call(a);a.iN=0;a.hH=0;a.fe=0;}
function AKa(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.iN==e&&a.hH==d?2:(-1);}
function AIu(a,b,c,d){var e,f;if(!(c instanceof Bw))return GS(a,b,c,d);e=d.r;while(b<e){b=Hs(c,a.iN,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=I(c,b);if(a.hH==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function ADw(a,b,c,d,e){var f;if(!(d instanceof Bw))return G1(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=GF(d,a.hH,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.iN==I(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AJ1(a,b){if(b instanceof Du)return b.fe!=a.fe?0:1;if(b instanceof Dc)return b.i(a.fe);if(b instanceof D0)return 0;if(!(b instanceof DQ))return 1;return 0;}
var Tj=F(El);
function ADH(a,b){return b!=10?0:1;}
function AJ7(a,b,c){return b!=10?0:1;}
var Tk=F(El);
function AKS(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AMq(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function Z5(){var a=this;B.call(a);a.lF=null;a.i5=null;a.gd=0;a.ul=0;}
function AIG(a){var b=new Z5();AGH(b,a);return b;}
function AGH(a,b){var c,d;while(true){c=a.gd;if(b<c)break;a.gd=c<<1|1;}d=c<<1|1;a.gd=d;d=d+1|0;a.lF=Bu(d);a.i5=Bu(d);a.ul=b;}
function P4(a,b,c){var d,e,f,g;d=0;e=a.gd;f=b&e;while(true){g=a.lF.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.i5.data[f]=c;}
function Rl(a,b){var c,d,e,f;c=a.gd;d=b&c;e=0;while(true){f=a.lF.data[d];if(!f)break;if(f==b)return a.i5.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.ul;}
var WF=F();
var JK=F(U);
function APa(){var a=new JK();AGj(a);return a;}
function AGj(a){}
function YD(a){return Ch(BR(C1(),9,13),32);}
var IY=F(U);
function AOq(){var a=new IY();ALg(a);return a;}
function ALg(a){}
function Y$(a){return BR(C1(),48,57);}
var ZZ=F(U);
function APu(){var a=new ZZ();AFM(a);return a;}
function AFM(a){}
function AKv(a){return BR(C1(),97,122);}
var AAs=F(U);
function ANC(){var a=new AAs();AGL(a);return a;}
function AGL(a){}
function ALm(a){return BR(C1(),65,90);}
var AAu=F(U);
function AO9(){var a=new AAu();AC2(a);return a;}
function AC2(a){}
function AET(a){return BR(C1(),0,127);}
var JE=F(U);
function APg(){var a=new JE();AD7(a);return a;}
function AD7(a){}
function Xv(a){return BR(BR(C1(),97,122),65,90);}
var Kf=F(JE);
function AOC(){var a=new Kf();AGs(a);return a;}
function AGs(a){}
function Yb(a){return BR(Xv(a),48,57);}
var ABu=F(U);
function AOn(){var a=new ABu();AId(a);return a;}
function AId(a){}
function AF3(a){return BR(BR(BR(C1(),33,64),91,96),123,126);}
var Lh=F(Kf);
function ANL(){var a=new Lh();AJM(a);return a;}
function AJM(a){}
function Wh(a){return BR(BR(BR(Yb(a),33,64),91,96),123,126);}
var YN=F(Lh);
function ANJ(){var a=new YN();AK_(a);return a;}
function AK_(a){}
function AHY(a){return Ch(Wh(a),32);}
var Y5=F(U);
function ANP(){var a=new Y5();AKH(a);return a;}
function AKH(a){}
function AEe(a){return Ch(Ch(C1(),32),9);}
var XO=F(U);
function AN2(){var a=new XO();AMj(a);return a;}
function AMj(a){}
function AHV(a){return Ch(BR(C1(),0,31),127);}
var XE=F(U);
function ANN(){var a=new XE();ADe(a);return a;}
function ADe(a){}
function AMu(a){return BR(BR(BR(C1(),48,57),97,102),65,70);}
var AAy=F(U);
function AOQ(){var a=new AAy();ACP(a);return a;}
function ACP(a){}
function AIE(a){var b;b=new RA;b.wa=a;Bm(b);b.F=1;return b;}
var ABE=F(U);
function ANy(){var a=new ABE();AJ4(a);return a;}
function AJ4(a){}
function ABT(a){var b;b=new LG;b.wj=a;Bm(b);b.F=1;return b;}
var Z6=F(U);
function APc(){var a=new Z6();AC4(a);return a;}
function AC4(a){}
function AGp(a){var b;b=new QC;b.vQ=a;Bm(b);return b;}
var ZQ=F(U);
function AN1(){var a=new ZQ();AHW(a);return a;}
function AHW(a){}
function AKf(a){var b;b=new QB;b.vE=a;Bm(b);return b;}
var AAJ=F(U);
function AOA(){var a=new AAJ();AD2(a);return a;}
function AD2(a){}
function AEc(a){var b;b=new UM;b.w$=a;Bm(b);G6(b.C,0,2048);b.F=1;return b;}
var WW=F(U);
function ANZ(){var a=new WW();ADD(a);return a;}
function ADD(a){}
function AEx(a){var b;b=new NM;b.wz=a;Bm(b);b.F=1;return b;}
var WA=F(U);
function AOB(){var a=new WA();AHE(a);return a;}
function AHE(a){}
function AMo(a){var b;b=new M2;b.xA=a;Bm(b);b.F=1;return b;}
var AAa=F(U);
function ANR(){var a=new AAa();AIe(a);return a;}
function AIe(a){}
function ABM(a){var b;b=new PC;b.wc=a;Bm(b);return b;}
var AAk=F(U);
function APk(){var a=new AAk();AGc(a);return a;}
function AGc(a){}
function AG9(a){var b;b=new Lz;b.uP=a;Bm(b);b.F=1;return b;}
var X7=F(U);
function ANT(){var a=new X7();ACn(a);return a;}
function ACn(a){}
function AEH(a){var b;b=new LF;b.wC=a;Bm(b);b.F=1;return b;}
var Y8=F(U);
function AOG(){var a=new Y8();ADI(a);return a;}
function ADI(a){}
function AFF(a){var b;b=new MC;b.w7=a;Bm(b);b.F=1;return b;}
var ABi=F(U);
function AO8(){var a=new ABi();AHe(a);return a;}
function AHe(a){}
function AHc(a){var b;b=new N9;b.xm=a;Bm(b);b.F=1;return b;}
var AAh=F(U);
function AO5(){var a=new AAh();AIw(a);return a;}
function AIw(a){}
function ALH(a){var b;b=new Of;b.vT=a;Bm(b);return b;}
var Yu=F(U);
function APh(){var a=new Yu();ADE(a);return a;}
function ADE(a){}
function AJE(a){var b;b=new R1;b.wK=a;Bm(b);return b;}
var X6=F(U);
function ANQ(){var a=new X6();AKg(a);return a;}
function AKg(a){}
function AIv(a){var b;b=new Re;b.uT=a;Bm(b);b.F=1;return b;}
var ABA=F(U);
function AOV(){var a=new ABA();AF9(a);return a;}
function AF9(a){}
function AKp(a){var b;b=new LN;b.xJ=a;Bm(b);b.F=1;return b;}
var Is=F(U);
function AOK(){var a=new Is();AEN(a);return a;}
function AEN(a){}
function Y6(a){return Ch(BR(BR(BR(C1(),97,122),65,90),48,57),95);}
var AAM=F(Is);
function ANM(){var a=new AAM();AGf(a);return a;}
function AGf(a){}
function AIh(a){var b;b=D3(Y6(a),1);b.F=1;return b;}
var YS=F(JK);
function ANu(){var a=new YS();AL7(a);return a;}
function AL7(a){}
function ACY(a){var b;b=D3(YD(a),1);b.F=1;return b;}
var X2=F(IY);
function AN9(){var a=new X2();AG1(a);return a;}
function AG1(a){}
function AFS(a){var b;b=D3(Y$(a),1);b.F=1;return b;}
function XJ(){var a=this;U.call(a);a.pJ=0;a.qj=0;}
function L(a,b){var c=new XJ();AMl(c,a,b);return c;}
function AMl(a,b,c){a.pJ=b;a.qj=c;}
function AHn(a){return BR(C1(),a.pJ,a.qj);}
var XY=F(U);
function ANO(){var a=new XY();AMC(a);return a;}
function AMC(a){}
function AMe(a){return BR(BR(C1(),65279,65279),65520,65533);}
function YH(){var a=this;U.call(a);a.lc=0;a.iT=0;a.ok=0;}
function BE(a,b){var c=new YH();ADW(c,a,b);return c;}
function AOu(a,b,c){var d=new YH();AMn(d,a,b,c);return d;}
function ADW(a,b,c){a.iT=c;a.lc=b;}
function AMn(a,b,c,d){a.ok=d;a.iT=c;a.lc=b;}
function AFf(a){var b;b=APq(a.lc);if(a.ok)G6(b.C,0,2048);b.F=a.iT;return b;}
function YO(){var a=this;U.call(a);a.la=0;a.i7=0;a.mN=0;}
function HN(a,b){var c=new YO();AEI(c,a,b);return c;}
function AOj(a,b,c){var d=new YO();ABO(d,a,b,c);return d;}
function AEI(a,b,c){a.i7=c;a.la=b;}
function ABO(a,b,c,d){a.mN=d;a.i7=c;a.la=b;}
function ABN(a){var b;b=new Qt;ZE(b,a.la);if(a.mN)G6(b.C,0,2048);b.F=a.i7;return b;}
var XK=F();
var Xi=F();
function Yq(b){var c,d,e,f,g,h,i;c=AKy(ES(b));d=IN(c);e=Bu(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+IN(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=L0(c);h=h+1|0;}return e;}
function Jr(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Mc(){var a=this;B.call(a);a.oO=0;a.qA=0;a.o6=null;}
function AFd(a,b,c){var d=new Mc();AK9(d,a,b,c);return d;}
function AK9(a,b,c,d){a.oO=b;a.qA=c;a.o6=d;}
function AAd(){var a=this;B.call(a);a.nC=null;a.pQ=0;}
function AKy(a){var b=new AAd();AEl(b,a);return b;}
function AEl(a,b){a.nC=b;}
var Yp=F();
function IN(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.nC.data;f=b.pQ;b.pQ=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+V(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function L0(b){var c,d;c=IN(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function Xs(){B.call(this);this.HZ=null;}
var Oc=F();
var ASZ=null;function Km(b,c,d){Px(b,c,d,0);}
function Px(b,c,d,e){MT(b,c,d,null,null,e);}
function MT(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;h=Ua(c);i=X(h);j=X(h);k=X(h);l=Ci(b);m=Bu(i+1|0);n=!g?O(CK,i):XG(b.v,i);c=m.data;b.v=n;o=0;while(o<i){if(g&&o<l){p=4*X(h)|0;h.d3=h.d3+p|0;c[o+1|0]=(c[o]+(BG(b,o)).z|0)+1|0;}else{b.v.data[o]=Dk(O2(h,d,0));c[o+1|0]=(c[o]+(BG(b,o)).z|0)+1|0;}o=o+1|0;}if(j)b.cN=AAj(ABj(h));b.gt=m;Eg(b.dc);Eg(b.cQ);q=b.dc;g=0;while(g<k){DG(q,Di(X(h),X(h)),Di(X(h),X(h)));g=g+1|0;}r=b.dc;s=b.cQ;r=MY(S7(r));while(EG(r)){t=Vq(r);q=t.cg;t=t.cv;BU(ASZ);u=B7(s,t);if(u===null){u
=Bz();DG(s,t,u);}Bv(u,q);}if(s.jD===null){r=new N2;r.uh=s;s.jD=r;}r=s.jD;q=new PY;JJ(q,r.uh);while(EG(q)){Ka(q);r=q.fu.cv;t=AQm;c=O(B,r.j);d=c.data;GY(r,c);X1(c,t);g=0;v=d.length;while(g<v){t=d[g];Ic(r,g);r.cd.data[g]=t;g=g+1|0;}}Pi(h);if(e!==null&&f!==null){r=AIc(e,f);M6(r);b.dI=ADZ(r.j6,r.gT);b.cN=AAj(r.kI);}}
function Ly(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Ua(c);i=X(h);j=X(h);k=X(h)!=1?0:1;l=X(h);m=X(h);n=UU(b,i);o=UU(b,j);p=(G4(BG(b,n.b),n.a)).data[0].k;g=(G4(BG(b,o.b),o.a)).data[1].k;q=0;r=l-1|0;while(q<l){s=O2(h,d,i);if(!q)s=TF(p,s);if(q==r)s=TF(s,g);t=n.b+q|0;u=Dk(s);c=b.v.data;v=c[t];c[t]=u;if(!k&&If(v)==If(u)){w=0;while(w<If(v)){x=v.k.data[w];o=u.k.data[w];t=x.bR;if(t!=5&&t&&!o.bR){o.bR=t;o.bB=x.bB;}w=w+1|0;}}q=q+1|0;}if(k){if(m){x=ABj(h);v=IK(i,j,
(-1));MA(b.cN,v,x);}else if(e!==null&&f!==null){u=AIc(e,f);M6(u);v=IK(i,j,(-1));MA(b.cN,v,u.kI);b.dI.dU=u.gT;}}Pi(h);}
function O2(b,c,d){var e,f,g,h,i,j,k,l;e=X(b);f=O(B_,e);g=f.data;h=0;while(h<e){i=X(b);j=X(b);k=X(b);l=X(b);g[h]=Ds(DL(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function Z7(){ASZ=new U4;}
function Te(){var a=this;B.call(a);a.xL=null;a.ij=null;}
function AEX(a,b){var c;c=a.ij;b=b;a.ij=NI(!c.ly&&!b.dM?0:1);return 1;}
function Ue(){var a=this;Q.call(a);a.nd=null;a.xf=null;}
function AEZ(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.bZ^C6(a.nd,c):0;}
function Uc(){var a=this;Q.call(a);a.sH=null;a.tp=null;a.wT=null;}
function ACc(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.bZ^C6(a.sH,c):0;return a.tp.i(b)&&!d?1:0;}
function Nj(){var a=this;Q.call(a);a.hN=null;a.uY=null;}
function AHf(a,b){return a.S^C6(a.hN,b);}
function AFJ(a){var b,c,d;b=new R;T(b);c=Gr(a.hN,0);while(c>=0){Hv(b,FL(c));BY(b,124);c=Gr(a.hN,c+1|0);}d=b.E;if(d>0)T5(b,d-1|0);return S(b);}
function Nq(){var a=this;Q.call(a);a.p9=null;a.wh=null;}
function AKd(a,b){return a.p9.i(b);}
function No(){var a=this;Q.call(a);a.iY=0;a.n4=null;a.jR=null;}
function AKJ(a,b){return !(a.iY^C6(a.jR.y,b))&&!(a.iY^a.jR.dt^a.n4.i(b))?0:1;}
function Np(){var a=this;Q.call(a);a.i6=0;a.s4=null;a.kP=null;}
function AHG(a,b){return !(a.i6^C6(a.kP.y,b))&&!(a.i6^a.kP.dt^a.s4.i(b))?1:0;}
function Nt(){var a=this;Q.call(a);a.tY=0;a.tc=null;a.sZ=null;a.vl=null;}
function AEB(a,b){return a.tY^(!a.tc.i(b)&&!a.sZ.i(b)?0:1);}
function Nu(){var a=this;Q.call(a);a.qg=0;a.pY=null;a.pm=null;a.xG=null;}
function ABG(a,b){return a.qg^(!a.pY.i(b)&&!a.pm.i(b)?0:1)?0:1;}
function Nr(){var a=this;Q.call(a);a.o$=null;a.xI=null;}
function AFN(a,b){return CE(a.o$,b);}
function Ns(){var a=this;Q.call(a);a.tm=null;a.vA=null;}
function AHI(a,b){return CE(a.tm,b)?0:1;}
function Nv(){var a=this;Q.call(a);a.qt=null;a.p1=0;a.sd=null;}
function ALS(a,b){return !CE(a.qt,b)&&!(a.p1^C6(a.sd.y,b))?0:1;}
function Nw(){var a=this;Q.call(a);a.q4=null;a.rl=0;a.qO=null;}
function AD9(a,b){return !CE(a.q4,b)&&!(a.rl^C6(a.qO.y,b))?1:0;}
function Ni(){var a=this;Q.call(a);a.r5=0;a.s3=null;a.tC=null;a.u6=null;}
function ANr(a,b){return !(a.r5^a.s3.i(b))&&!CE(a.tC,b)?0:1;}
function NW(){var a=this;Q.call(a);a.tx=0;a.md=null;a.mT=null;a.vw=null;}
function AFR(a,b){return !(a.tx^a.md.i(b))&&!CE(a.mT,b)?1:0;}
function Ng(){var a=this;Q.call(a);a.oD=null;a.vC=null;}
function AD8(a,b){return CE(a.oD,b);}
function Nh(){var a=this;Q.call(a);a.oK=null;a.xC=null;}
function AFu(a,b){return CE(a.oK,b)?0:1;}
function Nm(){var a=this;Q.call(a);a.tU=null;a.qW=0;a.uH=null;}
function AGK(a,b){return CE(a.tU,b)&&a.qW^C6(a.uH.y,b)?1:0;}
function Nf(){var a=this;Q.call(a);a.rJ=null;a.qh=0;a.qU=null;}
function ALt(a,b){return CE(a.rJ,b)&&a.qh^C6(a.qU.y,b)?0:1;}
function Nk(){var a=this;Q.call(a);a.sh=0;a.nb=null;a.qe=null;a.vk=null;}
function ADb(a,b){return a.sh^a.nb.i(b)&&CE(a.qe,b)?1:0;}
function Nl(){var a=this;Q.call(a);a.rB=0;a.l5=null;a.r3=null;a.vG=null;}
function AJy(a,b){return a.rB^a.l5.i(b)&&CE(a.r3,b)?0:1;}
var Fm=F(Cg);
var ASa=null;var AR_=null;var AS0=null;function Rh(){Rh=Bf(Fm);AM8();}
function AKI(a,b){var c=new Fm();Yz(c,a,b);return c;}
function Yz(a,b,c){Rh();C4(a,b,c);}
function AM8(){var b;ASa=AKI(C(472),0);b=AKI(C(473),1);AR_=b;AS0=G(Fm,[ASa,b]);}
function V7(){B.call(this);this.o0=null;}
var KF=F(0);
function Rd(){var a=this;B.call(a);a.vs=null;a.s6=null;a.h3=null;a.ce=null;a.hO=0;a.jJ=0;}
function LD(a,b){var c,d,e;c=H(a.h3);if(b>=0&&b<=c){Vx(a.ce,null,(-1),(-1));d=a.ce;d.iy=1;d.dQ=b;c=d.gX;if(c<0)c=b;d.gX=c;b=a.s6.b3(b,a.h3,d);if(b==(-1))a.ce.c2=1;if(b>=0){d=a.ce;if(d.h4){e=d.dk.data;if(e[0]==(-1)){c=d.dQ;e[0]=c;e[1]=c;}d.gX=H5(d);return 1;}}a.ce.dQ=(-1);return 0;}d=new BT;Br(d,DX(b));J(d);}
function ABh(a){return NS(a.ce,0);}
function X3(a){return QE(a.ce,0);}
function WM(a){return a.ce.h9;}
function ZR(){var a=this;B.call(a);a.gn=null;a.d3=0;}
function Ua(a){var b=new ZR();ABY(b,a);return b;}
function ABY(a,b){a.gn=b;a.d3=0;}
function X(a){var b,c;b=a.gn.data;c=a.d3;a.d3=c+1|0;return b[c];}
function Pi(a){var b,c,d,e;if(a.d3!=a.gn.data.length){b=D2();c=a.gn.data.length;d=a.d3;e=new R;T(e);K(Bk(K(Bk(K(e,C(240)),c),C(474)),d),C(475));CU(b,S(e));}}
function WX(){var a=this;B.call(a);a.j6=null;a.kI=null;a.gT=null;a.b8=null;a.jb=null;a.jQ=null;a.f6=null;a.kH=null;a.kA=null;}
function AIc(a,b){var c=new WX();ALX(c,a,b);return c;}
function ALX(a,b,c){a.b8=Ua(b);a.jb=c;}
function M6(a){var b,c,d,e,f,g,h,i;b=X(a.b8);c=new JI;Ov(c);a.gT=c;a.f6=Bz();d=0;while(d<b){e=X(a.b8);f=X(a.b8);g=DL(a.jb,e,f);DG(a.gT,g,Bz());Bv(a.f6,g);d=d+1|0;}c=MY(S7(a.gT));while(EG(c)){FZ((Vq(c)).cv,Md(a));}d=X(a.b8);if(d==(-1))a.j6=null;else{a.jQ=O(EP,d);c=new LH;h=a.b8;i=a.jb;g=a.f6;c.cS=h;c.qi=i;c.pD=g;a.kH=c;c=new PW;c.dr=h;c.sS=i;c.th=g;a.kA=c;a.j6=Pz(a,null);}if(X(a.b8)!=(-1))a.kI=PT(a.b8,a.jQ);}
function Pz(a,b){var c,d,e,f,g,h,i,j,k;c=X(a.b8);d=X(a.b8);e=a.kH;f=X(e.cS);g=Bz();h=0;while(h<f){Bv(g,LK(e));h=h+1|0;}a:{switch(d){case -1:i=new JF;i.fE=b;b=ARw;i.ca=b;i.d1=b;i.dC=b;i.hF=b;i.fw=b;break a;case 0:i=ANz(b);break a;case 1:i=new Je;Zh(i,b);FZ(i.dC,g);break a;default:}b=new Dg;i=new R;T(i);Bk(K(i,C(476)),d);Br(b,S(i));J(b);}i.dC=g;b=a.kA;d=X(b.dr);e=Bz();j=0;while(j<d){Bv(e,Fo(b));j=j+1|0;}i.d1=e;i.hF=Md(a);d=X(a.b8);b=Bz();j=0;while(j<d){e=LK(a.kH);g=Fo(a.kA);f=X(a.b8);k=new Ox;k.hI=e;k.iw=g;k.of
=f;Bv(b,k);j=j+1|0;}i.fw=b;j=X(a.b8);i.rY=j==(-1)?null:Bp(a.f6,j);d=X(a.b8);b=Bz();j=0;while(j<d){Bv(b,Pz(a,i));j=j+1|0;}i.ca=b;a.jQ.data[c]=i;return i;}
function Md(a){var b,c,d,e;b=X(a.b8);c=Bz();d=0;while(d<b){e=X(a.b8);Bv(c,Bp(a.f6,e));d=d+1|0;}return c;}
var RY=F();
var AR9=null;function AOO(){AOO=Bf(RY);ACA();}
function ACA(){var b,c;Rh();b=Bu((AS0.f1()).data.length);c=b.data;AR9=b;c[ASa.fR]=1;c[AR_.fR]=2;}
function Ro(){B.call(this);this.tR=null;}
function AJ3(a,b){var c,d,e,f,g;FQ(a.tR);c=ARd;d=XA(C(477));if(!Kr()){b=new Bo;Br(b,C(254));KJ(d,b);}else{e=$rt_globals.navigator.clipboard;f=ES(b);AOZ();b=AS1;g=f.data;g=b.decode(g);b=e.writeText(g);e=new SK;e.wG=c;c=ABy(d);b.then(Bi(e,"f"),Bi(c,"f"));}}
function VD(){B.call(this);this.lX=null;}
function KJ(a,b){var c,d;c=a.lX;d=b.k4;b=new R;T(b);K(K(b,c),d);$rt_globals.console.info($rt_ustr(S(b)));}
var U4=F();
var EB=F();
var AS2=null;var AS3=null;var ARw=null;var AS4=null;var AS5=null;var AS6=null;function Zj(){AS2=new Tv;AS3=new Tt;ARw=new Tu;AS4=new Tr;AS5=new Ts;AS6=new V6;}
var I6=F(Ec);
var Tv=F(I6);
var Ke=F(Dt);
var Tt=F(Ke);
var KI=F(D8);
function AEg(a){var b;b=new DR;W(b);J(b);}
function AH3(a,b){var c;c=new DR;W(c);J(c);}
function AGY(a,b){b=new DR;W(b);J(b);}
var Tu=F(KI);
function AH8(a,b){var c;c=new BT;W(c);J(c);}
function AHk(a){return 0;}
function AEJ(a){return AS4;}
function ACy(a){return 1;}
var Tr=F();
function ACj(a){return 0;}
function AJl(a){var b;b=new K_;W(b);J(b);}
function AKE(a){var b;b=new Dg;W(b);J(b);}
var N_=F(0);
var Ts=F();
var V6=F();
var LW=F(FN);
function AFj(a,b,c,d){var e,f,g;e=0;f=d.r;a:{while(true){if(b>f){b=e;break a;}g=E5(d,a.O);C9(d,a.O,b);e=a.cB.c(b,c,d);if(e>=0)break;C9(d,a.O,g);b=b+1|0;}}return b;}
function ANh(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=E5(e,a.O);C9(e,a.O,c);f=a.cB.c(c,d,e);if(f>=0)break;C9(e,a.O,g);c=c+(-1)|0;}}return c;}
function ADT(a){return null;}
var K_=F(Bo);
function P_(){B.call(this);this.ry=null;}
function ADQ(a,b){LA(a.ry,b);}
var Gj=F();
var XH=F(Gj);
var Z_=F(Gj);
var Xg=F(0);
function PH(){B.call(this);this.mI=null;}
function ABS(a,b){var c;c=a.mI;b=Eu(b);Dj(c.o0,b);}
function QO(){B.call(this);this.pM=null;}
function AHZ(a,b){b.fP=a.pM.cK;}
function QN(){B.call(this);this.sG=null;}
function AJP(a,b){b.fE=a.sG.cK.b_;}
function OM(){var a=this;B.call(a);a.ss=null;a.sr=null;}
function OL(){B.call(this);this.m4=null;}
function Q3(){var a=this;B.call(a);a.u3=null;a.u2=null;a.u5=null;}
function Sc(){var a=this;B.call(a);a.v9=null;a.v8=null;}
function SU(){Ec.call(this);this.qa=null;}
function MY(a){var b;b=new SI;JJ(b,a.qa);return b;}
function N2(){En.call(this);this.uh=null;}
function Tc(){var a=this;B.call(a);a.dk=null;a.iF=null;a.ke=null;a.kk=null;a.n8=0;a.h4=0;a.ct=0;a.r=0;a.dQ=0;a.h9=0;a.eQ=0;a.c2=0;a.w2=0;a.gX=0;a.iy=0;}
function BD(a,b,c){a.iF.data[b]=c;}
function C0(a,b){return a.iF.data[b];}
function H5(a){return QE(a,0);}
function QE(a,b){Qr(a,b);return a.dk.data[(b*2|0)+1|0];}
function C9(a,b,c){a.dk.data[b*2|0]=c;}
function IH(a,b,c){a.dk.data[(b*2|0)+1|0]=c;}
function E5(a,b){return a.dk.data[b*2|0];}
function HA(a,b){return a.dk.data[(b*2|0)+1|0];}
function Z1(a){return NS(a,0);}
function NS(a,b){Qr(a,b);return a.dk.data[b*2|0];}
function LM(a,b){return a.ke.data[b];}
function DM(a,b,c){a.ke.data[b]=c;}
function Qr(a,b){var c;if(!a.h4){c=new Dg;W(c);J(c);}if(b>=0&&b<a.n8)return;c=new BT;Br(c,DX(b));J(c);}
function Vx(a,b,c,d){a.h4=0;a.iy=2;GI(a.dk,(-1));GI(a.iF,(-1));if(b!==null)a.kk=b;if(c>=0){a.ct=c;a.r=d;}a.dQ=a.ct;}
function Yd(a){return a.iy;}
function Va(){B.call(this);this.ne=null;}
function AEs(a,b){var c,d;c=a.ne;d=new Bo;Br(d,$rt_str(b.message));KJ(c,d);}
function Nc(){B.call(this);this.ns=null;}
function AEb(a,b){b.fP=a.ns;}
function LH(){var a=this;B.call(a);a.cS=null;a.qi=null;a.pD=null;}
function LK(a){var b,c,d,e,f,g,h,i;a:{b=X(a.cS);switch(b){case 3:break;case 5:c=MW(a);d=Kt(a);b=X(a.cS);e=X(a.cS);f=X(a.cS);g=Bz();h=0;while(h<f){Bv(g,Kt(a));h=h+1|0;}i=new KU;Z3(i,c,d,b);i.iJ=g;i.lW=e;break a;default:c=new Dg;d=new R;T(d);Bk(K(d,C(478)),b);Br(c,S(d));J(c);}i=AOT(MW(a),Kt(a),X(a.cS));}return i;}
function MW(a){var b,c;b=X(a.cS);c=X(a.cS);return AFG(DL(a.qi,b,c),X(a.cS));}
function Kt(a){var b;b=X(a.cS);if(b==(-1))return null;return Bp(a.pD,b);}
function PW(){var a=this;B.call(a);a.dr=null;a.sS=null;a.th=null;}
function Fo(a){var b,c,d,e,f;a:{b:{b=X(a.dr);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Me(a);d=OG(a);b=X(a.dr);e=Q_(a);f=new HJ;J0(f,c,d,2);f.mh=b;f.f3=e;break a;case 4:c=Fo(a);d=Fo(a);f=new H4;J0(f,c.er,c.eX,9);f.gV=c;f.f5=d;break a;case 5:f=ANS(Me(a),OG(a),X(a.dr));break a;case 9:c=Q_(a);f=new FC;d=!DO(c)&&Bp(c,0)!==null?(Bp(c,0)).eX:null;J0(f,null,null,7);f.fS=Bz();c=BM(c);while(BN(c)){e=BQ(c);if(!(e instanceof FC))Bv(f.fS,e);else{e=e;FZ(f.fS,e.fS);}}f.eX=d;break a;default:break b;}f
=null;break a;}c=new Dg;d=new R;T(d);Bk(K(d,C(479)),b);Br(c,S(d));J(c);}return f;}
function Me(a){var b,c;b=X(a.dr);c=X(a.dr);return AFG(DL(a.sS,b,c),X(a.dr));}
function OG(a){var b;b=X(a.dr);if(b==(-1))return null;return Bp(a.th,b);}
function Q_(a){var b,c,d;b=X(a.dr);c=Bz();d=0;while(d<b){Bv(c,Fo(a));d=d+1|0;}return c;}
function R7(){var a=this;B.call(a);a.lS=null;a.lT=null;}
function ALc(a){var b,c;b=a.lS;c=a.lT;b=b.hh;H9(b,c,b.fh);}
function MD(){var a=this;B.call(a);a.mO=null;a.mP=0;a.mQ=0;a.mR=null;a.mK=0;a.mM=0;}
function AIg(a,b){var c,d,e,f,g,h,i,j;c=a.mO;d=a.mP;e=a.mQ;f=a.mR;g=a.mK;h=a.mM;i=Ck(c.bi,5.0);d=Be((c.bi.cA.b-d|0)-i|0,Ba((i-d|0)-c.K.o.b|0,b.u.b));j=Be((c.bi.cA.a-e|0)-i|0,Ba((i-e|0)-c.K.o.a|0,b.u.a));Bn(f,d+g|0,j+h|0);JU(c,f,c.N.o);}
function TU(){var a=this;B.call(a);a.r$=null;a.sa=null;a.r_=null;a.r7=0;a.r6=0;a.r9=0;a.r8=0;a.sl=0;a.sk=0;a.sm=0;a.sO=0;}
function AFH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.r$;d=a.sa;e=a.r_;f=a.r7;g=a.r6;h=a.r9;i=a.r8;j=a.sl;k=a.sk;l=a.sm;m=a.sO;n=Ck(c.bi,5.0);o=c.N.qX();Cp(d,c.N.o);Cp(e,c.N.D);switch(f){case -1:f=Be(h+(b.u.b-g|0)|0,c.bi.cA.b-n|0);g=o.b;h=h+i|0;f=Ba(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Ba((i+b.u.b|0)-g|0,Ba(o.b,n-c.K.D.b|0));}b:{switch(j){case -1:f=Ba(n,Be(l+(b.u.a-k|0)|0,(c.bi.cA.a+c.K.o.a|0)-n|0));g=o.a;h=l+m|0;f=Ba(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Ba((m+b.u.a|0)-k|0,o.a);}JU(c,e,d);}
function B8(){Cg.call(this);this.k6=null;}
var AS7=null;var AS8=null;var AS9=null;var AS$=null;var AS_=null;var ATa=null;var ATb=null;var ATc=null;var ATd=null;var ATe=null;var ATf=null;var ATg=null;var ATh=null;var ATi=null;var ATj=null;var ASb=null;function XW(){XW=Bf(B8);AGE();}
function Dp(a,b,c){var d=new B8();R2(d,a,b,c);return d;}
function AKZ(a,b,c,d){var e=new B8();AAQ(e,a,b,c,d);return e;}
function R2(a,b,c,d){XW();C4(a,b,c);a.k6=G7(d,null);}
function AAQ(a,b,c,d,e){XW();C4(a,b,c);a.k6=G7(d,e);}
function AGE(){var b;b=new B8;AAK();R2(b,C(202),0,ARV);AS7=b;AS8=Dp(C(203),1,N(C(480)));AS9=Dp(C(205),2,N(C(481)));AS$=Dp(C(207),3,N(C(482)));AS_=Dp(C(209),4,N(C(480)));ATa=Dp(C(210),5,DU(188,63,60));ATb=Dp(C(212),6,N(C(483)));ATc=Dp(C(214),7,N(C(484)));ATd=Dp(C(216),8,N(C(485)));ATe=AKZ(C(218),9,ARV,DU(52,65,52));ATf=AKZ(C(219),10,N(C(486)),N(C(487)));ATg=Dp(C(220),11,N(C(488)));ATh=Dp(C(222),12,N(C(489)));ATi=Dp(C(224),13,ARV);b=Dp(C(225),14,N(C(226)));ATj=b;ASb=G(B8,[AS7,AS8,AS9,AS$,AS_,ATa,ATb,ATc,ATd,ATe,
ATf,ATg,ATh,ATi,b]);}
var Dm=F(0);
var ASf=null;var ASg=null;var ASc=null;var ASd=null;var ASe=null;var ARz=null;var ARA=null;var ASh=null;var ASi=null;function AIa(){AIa=Bf(Dm);AI6();}
function AI6(){ASf=N(C(490));ASg=N(C(491));ASc=N(C(195));ASd=N(C(492));ASe=N(C(230));ARz=N(C(490));ARA=N(C(491));ASh=EX(118,121,122,128);ASi=DU(63,66,68);}
var CC=F(0);
var ASj=null;var ARD=null;var ASl=null;var ASk=null;var ASn=null;var ASm=null;var ASp=null;var ASo=null;var ASr=null;var ASq=null;var ASs=null;function AAw(){AAw=Bf(CC);AMs();}
function AMs(){ASj=Ha(0);ARD=DU(8,8,8);ASl=N(C(493));ASk=DU(255,255,255);ASn=N(C(494));ASm=N(C(495));ASp=N(C(496));ASo=N(C(497));ASr=EX(205,205,205,153);ASq=EX(255,255,255,0);ASs=N(C(266));}
function Ca(){Cg.call(this);this.kc=null;}
var ATk=null;var ATl=null;var ATm=null;var ATn=null;var ATo=null;var ATp=null;var ATq=null;var ATr=null;var ATs=null;var ATt=null;var ATu=null;var ATv=null;var ATw=null;var ATx=null;var ATy=null;var ASt=null;function ZG(){ZG=Bf(Ca);AMR();}
function Da(a,b,c){var d=new Ca();PS(d,a,b,c);return d;}
function AMH(a,b,c,d){var e=new Ca();Xc(e,a,b,c,d);return e;}
function PS(a,b,c,d){ZG();C4(a,b,c);a.kc=G7(d,null);}
function Xc(a,b,c,d,e){ZG();C4(a,b,c);a.kc=G7(d,e);}
function AMR(){var b;b=new Ca;AAw();PS(b,C(202),0,ARD);ATk=b;ATl=Da(C(203),1,N(C(498)));ATm=Da(C(205),2,N(C(499)));ATn=Da(C(207),3,N(C(500)));ATo=Da(C(209),4,ARD);ATp=Da(C(210),5,N(C(501)));ATq=Da(C(212),6,N(C(488)));ATr=Da(C(214),7,N(C(502)));ATs=Da(C(216),8,N(C(503)));ATt=AMH(C(218),9,ARD,DU(237,235,252));ATu=AMH(C(219),10,N(C(486)),N(C(504)));ATv=Da(C(220),11,N(C(488)));ATw=Da(C(222),12,N(C(489)));ATx=Da(C(224),13,N(C(505)));b=Da(C(225),14,N(C(226)));ATy=b;ASt=G(Ca,[ATk,ATl,ATm,ATn,ATo,ATp,ATq,ATr,ATs,ATt,
ATu,ATv,ATw,ATx,b]);}
var C_=F(0);
var ASx=null;var ASy=null;var ASu=null;var ASv=null;var ASw=null;var ARE=null;var ARF=null;var ASz=null;var ASA=null;function ACu(){ACu=Bf(C_);AEw();}
function AEw(){ASx=N(C(264));ASy=N(C(506));ASu=N(C(507));ASv=N(C(508));ASw=N(C(509));ARE=N(C(264));ARF=N(C(506));ASz=EX(205,205,205,153);ASA=DU(247,248,250);}
var SI=F(Ew);
function Vq(a){Ka(a);return a.fu;}
var PY=F(Ew);
function RA(){Q.call(this);this.wa=null;}
function ALZ(a,b){return Ce(b)!=2?0:1;}
function LG(){Q.call(this);this.wj=null;}
function ACW(a,b){return Ce(b)!=1?0:1;}
function QC(){Q.call(this);this.vQ=null;}
function ACD(a,b){return PX(b);}
function QB(){Q.call(this);this.vE=null;}
function AFe(a,b){return 0;}
function UM(){Q.call(this);this.w$=null;}
function AGA(a,b){return !Ce(b)?0:1;}
function NM(){Q.call(this);this.wz=null;}
function AL3(a,b){return Ce(b)!=9?0:1;}
function M2(){Q.call(this);this.xA=null;}
function AI7(a,b){return FG(b);}
function PC(){Q.call(this);this.wc=null;}
function AKi(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Lz(){Q.call(this);this.uP=null;}
function AM0(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FG(b);}return b;}
function LF(){Q.call(this);this.wC=null;}
function AEn(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FG(b);}return b;}
function MC(){Q.call(this);this.w7=null;}
function AL$(a,b){a:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function N9(){Q.call(this);this.xm=null;}
function AHS(a,b){return Iz(b);}
function Of(){Q.call(this);this.vT=null;}
function AJQ(a,b){return Og(b);}
function R1(){Q.call(this);this.wK=null;}
function ALT(a,b){return Ce(b)!=3?0:1;}
function Re(){Q.call(this);this.uT=null;}
function AME(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=FG(b);}return b;}
function LN(){Q.call(this);this.xJ=null;}
function AEd(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=FG(b);}return b;}
function K2(){Q.call(this);this.kD=0;}
function APq(a){var b=new K2();ZE(b,a);return b;}
function ZE(a,b){Bm(a);a.kD=b;}
function AI$(a,b){return a.S^(a.kD!=Ce(b&65535)?0:1);}
var Qt=F(K2);
function AK3(a,b){return a.S^(!(a.kD>>Ce(b&65535)&1)?0:1);}
var SO=F(0);
var AR$=null;function AOk(){AOk=Bf(SO);AMB();}
function AMB(){AR$=N(C(490));}
function Q0(){B.call(this);this.px=null;}
function AFx(a,b){b.fE=a.px;}
function U6(){B.call(this);this.m5=null;}
function AFD(a,b){var c,d,e,f;c=a.m5;b=Eu(b);d=c.ss;c=c.sr;e=new Vr;f=AJY(Iq(c));c=null;ABl(e,AG$(b),c,f);R$(d,e);}
function U7(){var a=this;B.call(a);a.os=null;a.ot=null;}
function ADa(a,b){var c,d;c=a.os;d=a.ot;b.text().then(Bi(c,"f"),Bi(d,"f"));}
function Mb(){var a=this;B.call(a);a.q9=null;a.q8=null;}
var YA=F();
function SK(){B.call(this);this.wG=null;}
function AMG(a,b){}
function SG(){B.call(this);this.oL=null;}
function AHq(a,b){var c;c=a.oL;b=$rt_str(b.message);CU(c.m4,b);}
function LB(){B.call(this);this.uE=null;}
function AF2(a){Do(a.uE);}
var VE=F(0);
var AS1=null;function AOZ(){AOZ=Bf(VE);AJI();}
function AJI(){AS1=new $rt_globals.TextDecoder("utf-16");}
function Qd(){B.call(this);this.sM=null;}
function AKO(a){var b,c;b=a.sM;c=b.q9;b=b.q8;c.x6(b.ig,b.kq,null);}
var Z9=F(0);
function YU(){var a=this;B.call(a);a.BV=null;a.BT=null;a.BY=0.0;}
function TR(){var a=this;B.call(a);a.iA=null;a.gO=0;}
function MU(){B.call(this);this.mY=null;}
function ANd(a,b){return MF(I(a.mY,b.bb));}
var W6=F();
$rt_packages([]);
$rt_metadata([B,0,0,[],0,3,0,0,["bq",APN(AHP),"eh",APM(ADt)],Fd,0,B,[],0,3,0,0,0,LZ,0,B,[],3,3,0,0,0,Lv,0,B,[],3,3,0,0,0,Uj,0,B,[LZ,Lv],0,3,0,0,0,XD,0,B,[],4,0,0,0,0,Xj,0,B,[],4,3,0,0,0,FO,0,B,[],0,3,0,0,0,DD,0,FO,[],0,3,0,0,0,Bo,0,DD,[],0,3,0,0,0,YP,0,Bo,[],0,3,0,0,0,Cu,0,B,[],3,3,0,0,0,Cl,0,B,[],3,3,0,0,0,HT,0,B,[],3,3,0,0,0,Bw,0,B,[Cu,Cl,HT],0,3,0,FP,["bq",APN(B0),"k8",APM(JZ),"iR",APN(AFh)],FJ,0,FO,[],0,3,0,0,0,Gu,0,FJ,[],0,3,0,0,0,Yv,0,Gu,[],0,3,0,0,0,Ea,0,B,[Cu],1,3,0,0,0,FB,0,Ea,[Cl],0,3,0,0,["bq",APN(AMM),
"iR",APN(AG8)],FD,0,B,[Cu,HT],0,0,0,0,["g8",APN(IG),"eh",APM(S)],G5,0,B,[],3,3,0,0,0,R,0,FD,[G5],0,3,0,0,["kS",APQ(AG5),"jV",APP(AEv),"eh",APM(GM),"g8",APN(AHa),"lm",APO(AHB)],E$,0,Gu,[],0,3,0,0,0,ZF,0,E$,[],0,3,0,0,0,Yi,0,E$,[],0,3,0,0,0,RX,0,B,[],3,3,0,0,0,C3,0,B,[],3,3,0,0,0,NL,0,B,[],3,0,0,0,0,HF,0,B,[RX,C3,NL],1,3,0,0,["eG",APM(K3)],Qh,0,HF,[],0,3,0,0,0,WI,0,B,[],0,3,0,0,0,BK,0,B,[],3,3,0,0,0,BZ,0,B,[BK],3,3,0,0,0,O3,0,B,[BZ],0,3,0,0,["ba",APN(AGV)],YY,0,B,[BK],1,3,0,0,0,J9,0,B,[],4,3,0,0,0,AAn,0,B,[],
4,3,0,0,0,JO,0,B,[],3,3,0,0,0,Dt,0,B,[JO],1,3,0,0,0,DE,0,B,[],3,3,0,0,0,Jo,0,Dt,[DE,Cu],0,3,0,0,0,X4,0,B,[],0,3,0,0,0,ABC,0,B,[],4,3,0,0,0,L4,0,B,[BZ],0,3,0,0,["ba",APN(AIX)],AAE,0,B,[BK],1,3,0,0,0,Gn,0,B,[],3,3,0,0,0,Ry,0,B,[Gn],0,3,0,0,0,BT,0,Bo,[],0,3,0,0,0,Zo,0,B,[],4,3,0,0,0]);
$rt_metadata([FV,0,Bo,[],0,3,0,0,0,HL,0,Bo,[],0,3,0,0,0,CM,0,B,[Cl],0,3,0,0,0,Lp,0,B,[BK],3,3,0,0,0,Ri,0,B,[Lp],3,3,0,0,0,DV,0,B,[BK],3,3,0,0,0,WN,0,B,[BK,Ri,DV],1,3,0,0,["Fo",APM(AIy),"F9",APN(AK$),"HI",APN(AKV),"AE",APN(AD_),"Fg",APN(AB4),"yF",APM(AEp),"Gk",APO(AK4),"Gq",APP(AGR),"Hd",APM(ACU),"HS",APM(AJu),"Ef",APN(ALN),"BI",APM(AH7),"Ii",APN(AGq),"Dr",APM(AIA),"Cz",APM(ANf),"H5",APM(AHr),"yy",APN(ACL),"Gy",APM(AMN),"EH",APO(AGn),"Bs",APO(AH0),"F$",APO(AMk),"FA",APM(AB8),"G0",APM(AF_),"Ht",APN(AEA),"DV",
APN(AFt),"Ax",APO(AGD),"CV",APM(AHv),"G5",APN(ACX),"y1",APM(AFs),"H7",APM(AJT),"Ah",APN(ABQ),"Dp",APN(ALD),"HV",APN(ADk),"Ce",APM(ALF),"A9",APO(ADu),"FY",APN(AJH),"CI",APM(AKn),"zq",APO(AI4),"zu",APO(AIK),"Cc",APM(ALz),"Hw",APN(AMS),"Bj",APP(AIN),"Ac",APM(AEr),"Bu",APO(ADN),"BB",APM(ACv),"FM",APM(AMI),"Ec",APM(AI3),"xQ",APM(ACt),"Fd",APO(AI5),"y2",APN(AEh),"DT",APN(AFK),"z4",APM(AKu)],TG,0,B,[BK],3,3,0,0,0,YQ,0,B,[TG],1,3,0,0,["G6",APN(AFX),"Gp",APM(AHM)],ME,0,B,[BZ],0,3,0,0,["ba",APN(AJG)],N8,0,B,[DV],3,3,
0,0,0,Qb,0,B,[DV],3,3,0,0,0,P2,0,B,[DV],3,3,0,0,0,RU,0,B,[DV],3,3,0,0,0,Vb,0,B,[DV],3,3,0,0,0,SS,0,B,[DV,N8,Qb,P2,RU,Vb],3,3,0,0,0,Xz,0,B,[BK,SS],1,3,0,0,["ET",APO(AI8),"Hb",APO(AG7),"Aj",APP(AGb),"Bg",APN(AC3),"EB",APP(AEG)],BI,0,Bo,[],0,3,0,0,0,Go,0,BT,[],0,3,0,0,0,Gz,0,B,[],3,3,0,0,0,FM,0,B,[Gz,DE],0,0,0,0,["bq",APN(AEf)],FW,0,FM,[],0,0,0,0,0,Po,0,B,[],3,3,0,0,0,Nz,0,B,[Po],3,3,0,0,0,Rp,0,B,[Nz],0,3,0,0,0,Ei,0,B,[],3,3,0,0,0,WE,0,B,[Ei],0,3,0,0,0,Bh,0,B,[],3,3,0,0,0,WG,0,B,[Bh],0,3,0,0,0,XS,0,B,[],0,3,0,
0,0,WV,0,B,[],0,3,0,0,0,J6,0,B,[BK],3,3,0,0,0,RB,0,B,[J6],0,3,0,0,["ba",APN(ACT)],RD,0,B,[BZ],0,3,0,0,["ba",APN(AE4)],RC,0,B,[BZ],0,3,0,0,["ba",APN(AG_)],P8,0,B,[BK],3,3,0,0,0,Tz,0,B,[P8],0,3,0,0,["Dt",APN(AGm)],Tx,0,B,[Bh],0,3,0,0,0,O8,0,B,[BK],3,3,0,0,0,Ty,0,B,[O8],0,3,0,0,["Hq",APO(AEM)],AAS,0,B,[BK],1,3,0,0,0,B$,0,B,[BK],3,3,0,0,0,Tw,0,B,[B$],0,3,0,0,["bU",APN(AJR)],Q1,0,B,[],0,3,0,0,0,K4,0,B,[],3,3,0,0,0,RN,0,B,[K4],3,3,0,0,0,SM,0,B,[],3,3,0,0,0,FI,0,B,[RN,SM],1,3,0,0,0,Iu,0,FI,[],0,3,0,0,0,Yf,0,Iu,[],
0,3,0,0,0]);
$rt_metadata([FA,0,FI,[],1,3,0,0,0,Jx,0,FA,[],0,3,0,0,["jk",APP(AE5)],T6,0,B,[],3,3,0,0,["d6",APN(ABI)],Ft,0,B,[T6],3,3,0,0,["d6",APN(ABI),"kF",APN(AGT)],En,0,B,[Ft],1,3,0,0,["d6",APN(ABI),"kF",APN(AGT),"dB",APM(DO),"mU",APN(AKM)],Jw,0,B,[Ft],3,3,0,0,["d6",APN(ABI),"kF",APN(AGT)],Ie,0,B,[Jw],3,3,0,0,["d6",APN(ABI),"kF",APN(AGT)],D8,0,En,[Ie],1,3,0,0,["d6",APN(ABI),"kF",APN(AGT),"q7",APN(AJ$),"bQ",APM(BM),"rN",APO(AJo),"lG",APO(ALv),"bq",APN(AIl)],KS,0,D8,[],1,3,0,0,["d6",APN(ABI),"kF",APN(AGT)],Lw,0,B,[Ft],
3,3,0,0,["d6",APN(ABI),"kF",APN(AGT)],Vy,0,B,[Lw,Jw],3,3,0,0,["d6",APN(ABI),"kF",APN(AGT)],SL,0,KS,[Vy],0,3,0,0,["d6",APN(ABI),"kF",APN(AGT)],Vv,0,B,[JO],3,3,0,0,0,LY,0,B,[Vv],3,3,0,0,0,NV,0,Dt,[DE,Cu,LY],0,3,0,0,0,AAN,0,B,[],4,3,0,0,0,Q7,0,B,[Ei],0,3,0,0,0,Q8,0,B,[BZ],0,3,0,0,["ba",APN(AB7)],XM,0,B,[],0,3,0,0,0,JX,0,B,[],1,3,0,0,0,Tq,0,JX,[],0,3,0,0,0,KC,0,B,[C3],1,3,0,0,0,Ij,0,B,[Cl],1,3,0,0,0,K8,0,Ij,[],0,3,0,AFi,0,OD,0,B,[],0,3,0,0,0,Uo,0,B,[B$],0,3,0,0,["bU",APN(AJq)],Up,0,B,[B$],0,3,0,0,["bU",APN(AJA)],Uq,
0,B,[B$],0,3,0,0,["bU",APN(AH5)],Ur,0,B,[B$],0,3,0,0,["bU",APN(AHy)],Us,0,B,[B$],0,3,0,0,["bU",APN(AHT)],Ut,0,B,[B$],0,3,0,0,["bU",APN(AJ2)],Uu,0,B,[B$],0,3,0,0,["bU",APN(AGa)],Uv,0,B,[B$],0,3,0,0,["bU",APN(AM9)],Uw,0,B,[B$],0,3,0,0,["bU",APN(AFr)],Ux,0,B,[B$],0,3,0,0,["bU",APN(AKX)],VS,0,B,[B$],0,3,0,0,["bU",APN(AMK)],VT,0,B,[B$],0,3,0,0,["bU",APN(AHL)],VU,0,B,[B$],0,3,0,0,["bU",APN(AH9)],VV,0,B,[B$],0,3,0,0,["bU",APN(AJJ)],Sm,0,B,[],3,3,0,0,0,Sz,0,B,[Sm],0,3,0,0,0,Sy,0,B,[B$],0,3,0,0,["bU",APN(AGX)],Lq,0,
B,[],0,3,0,0,0,Ia,0,B,[Gn],0,3,0,0,["tZ",APO(IA)],AA5,0,B,[],0,3,0,0,0,DH,0,B,[],3,3,0,0,0,Er,0,B,[DH],3,3,0,0,0,Fu,0,B,[],3,3,0,0,0,Hh,0,B,[],3,3,0,0,0,Lg,0,B,[DH],3,3,0,0,0]);
$rt_metadata([Jn,0,B,[],3,3,0,0,0,FT,0,B,[],3,3,0,0,0,IP,0,B,[FT],3,3,0,0,0,Pb,0,B,[C3],0,3,0,0,0,Bq,0,B,[],0,3,0,0,["bq",APN(AGM)],Uz,0,B,[],0,3,0,0,0,AAt,0,B,[],0,3,0,0,0,Xe,0,B,[],3,3,0,0,0,O6,0,B,[],0,3,0,0,0,Kq,0,B,[],0,3,0,0,0,CB,0,Kq,[],0,3,0,0,0,T7,0,CB,[],0,3,0,0,0,D$,0,CB,[],0,3,0,0,0,Ys,0,CB,[],0,3,0,0,0,YJ,0,D$,[],0,3,0,0,0,Fq,0,D$,[],0,3,0,0,0,ZI,0,Fq,[],0,3,0,0,0,ABk,0,Fq,[],0,3,0,0,0,XB,0,D$,[],0,3,0,0,0,ZH,0,CB,[],0,3,0,0,0,Xa,0,CB,[],0,3,0,0,0,QD,0,B,[BK],3,3,0,0,0,ABz,0,B,[QD],3,3,0,0,0,O4,
0,B,[C3],0,3,0,0,0,O5,0,B,[],0,3,0,0,0,Cg,0,B,[Cl,Cu],1,3,0,0,0,F3,0,Cg,[],12,3,0,GJ,0,J7,0,FA,[],0,3,0,0,["jk",APP(AGP)],Dz,0,Cg,[],12,3,0,AL5,0,AAm,0,BI,[],0,3,0,0,0,TA,0,DD,[],0,3,0,0,0,Xy,0,B,[],0,3,0,0,0,F7,0,Cg,[],12,0,0,AH2,0,K6,0,B,[BK],3,3,0,0,0,Vt,0,B,[K6],0,3,0,0,["ba",APN(AKz)],Vu,0,B,[K6],0,3,0,0,["ba",APN(ADl)],Gf,0,B,[],1,3,0,0,0,QX,0,B,[],3,3,0,0,0,JT,0,Gf,[Cl,G5,HT,QX],1,3,0,0,0,YE,0,B,[],4,3,0,0,0,IS,0,Gf,[Cl],1,3,0,0,0,GT,0,B,[],0,3,0,AL8,0,I_,0,KC,[],1,3,0,0,0,Ny,0,B,[],3,3,0,0,0,Op,0,B,
[Ny],3,3,0,0,0,Tg,0,B,[],3,3,0,0,0,Wl,0,I_,[Op,Tg],0,3,0,0,0,Zp,0,B,[],3,3,0,0,0,PV,0,B,[],0,3,0,0,0,Tm,0,B,[B$],0,3,0,0,["bU",APN(AKT)]]);
$rt_metadata([YT,0,B,[BK],1,3,0,0,0,IZ,0,JT,[],1,0,0,0,0,P3,0,IZ,[],0,0,0,0,0,JG,0,B,[],1,3,0,0,0,Ky,0,B,[],0,3,0,0,0,Qc,0,B,[Fu,Hh],0,0,0,0,["gN",APN(AJw),"gp",APP(AMd),"gH",APO(AKo),"gL",APO(AHi),"gK",APP(AKG)],GN,0,B,[],3,3,0,0,["uA",APM(AIP),"rU",APM(AFk)],OF,0,B,[],3,3,0,0,0,OT,0,B,[],3,0,0,0,0,X$,0,B,[GN,Fu,OF,OT],0,3,0,0,["rU",APM(AFa),"uA",APM(ACz),"gL",APO(AIp),"gH",APO(ABZ),"gp",APP(ACg),"gN",APN(ACV),"jy",APN(AMr)],Ol,0,B,[Er],0,3,0,0,["cY",APN(ADc)],Qe,0,B,[Er],0,3,0,0,["cY",APN(AFn)],Bc,0,B,[],
3,3,0,0,0,Oj,0,B,[Bc],0,3,0,0,["m",APN(AFw)],Ok,0,B,[Jn],0,3,0,0,0,MR,0,B,[IP],0,3,0,0,0,MS,0,B,[Hh],0,3,0,0,["gK",APP(AGW)],MQ,0,B,[Lg],0,3,0,0,["cY",APN(Y9)],Mr,0,B,[Ei],0,3,0,0,["lL",APN(ALU)],YF,0,B,[],3,3,0,0,0,UI,0,B,[],0,0,0,0,0,Gl,0,B,[],0,3,0,0,0,NP,0,Gl,[],0,3,0,0,0,AAA,0,B,[],0,3,0,0,0,Ln,0,Gl,[],0,3,0,0,0,So,0,B,[BK],3,3,0,0,0,Mx,0,B,[So],0,3,0,0,["HJ",APN(AHg)],S0,0,B,[Bc],0,3,0,0,["m",APN(ALj)],US,0,IS,[],0,0,0,0,0,W$,0,B,[],3,3,0,0,0,SC,0,B,[],0,3,0,0,0,QI,0,B,[Er],0,3,0,0,["cY",APN(AFV)],QH,
0,B,[Er],0,3,0,0,["cY",APN(ADL)],HQ,0,B,[],3,3,0,0,0,U$,0,B,[Fu,HQ],0,3,0,0,0,TT,0,B,[HQ,GN],0,3,0,0,["uA",APM(AIP),"rU",APM(AFk),"jy",APN(AHD)],Or,0,B,[],0,3,0,0,0,JR,0,B,[],0,3,0,0,0,Vr,0,B,[],0,3,0,0,0,Ve,0,B,[],0,3,0,0,0,EK,0,B,[C3],0,0,0,0,0,ABg,0,B,[],0,3,0,0,0,XT,0,B,[C3],0,3,0,0,0,ML,0,B,[Bc],0,3,0,0,0,MK,0,B,[Bc],0,3,0,0,["m",APN(ACZ)],MJ,0,B,[Bc],0,3,0,0,["m",APN(ACb)],S9,0,B,[],0,0,0,0,0,MI,0,B,[Bh],0,3,0,0,["t",APM(ACa)],MP,0,B,[Bh],0,3,0,0,["t",APM(AFm)],MO,0,B,[Bh],0,3,0,0,["t",APM(ANp)]]);
$rt_metadata([MN,0,B,[Bh],0,3,0,0,["t",APM(AHt)],MM,0,B,[Bh],0,3,0,0,["t",APM(AJx)],MH,0,B,[Bh],0,3,0,0,["t",APM(AMP)],MG,0,B,[Bh],0,3,0,0,["t",APM(AB2)],EV,0,Cg,[],12,3,0,AB$,0,AAr,0,B,[],3,3,0,0,0,WY,0,B,[],0,3,0,0,0,B4,0,B,[],0,3,0,0,["bq",APN(AM6)],Lk,0,B,[],3,3,0,0,0,OX,0,B,[Bh],0,3,0,0,["t",APM(AF$)],OV,0,B,[Bh],0,3,0,0,["t",APM(ABV)],J8,0,B,[],3,3,0,0,0,W1,0,D8,[DE,Cu,J8],0,3,0,0,["kF",APN(AGT),"kE",APN(Bp),"cq",APM(AJc),"q7",APN(Bv),"lG",APO(Qi),"lt",APN(E7),"mU",APN(TO),"hq",APM(GH),"rN",APO(Xo),"d6",
APN(DN)],VR,0,B,[],3,3,0,0,0,Vn,0,B,[],0,3,0,0,0,EE,0,B,[],0,3,0,0,0,I8,0,EE,[],0,3,0,0,0,Rx,0,EE,[],0,3,0,0,0,OQ,0,EE,[],0,3,0,0,0,Gb,0,B,[],3,3,0,0,0,Ra,0,B,[],3,3,0,0,0,OC,0,B,[],3,0,0,0,0,Zw,0,B,[BK],1,3,0,0,0,Jf,0,B,[],4,3,0,AGC,0,Qs,0,B,[Lk],0,3,0,0,0,AAT,0,B,[],0,3,0,0,0,Sv,0,B,[],0,3,0,0,0,Qf,0,B,[],0,3,0,0,0,My,0,B,[Bh],0,3,0,0,["t",APM(AMQ)],Gc,0,B,[Cl],0,3,0,0,0,JL,0,B,[],0,3,0,0,0,CK,0,B,[],0,3,0,0,0,V$,0,Bo,[],0,3,0,0,0,T1,0,B,[],3,3,0,0,0,Ze,0,B,[T1],0,3,0,0,0,SF,0,B,[],3,3,0,0,0,JQ,0,B,[SF],0,
3,0,0,0,Oa,0,B,[],0,3,0,0,0,B_,0,B,[],0,3,0,0,0,JI,0,Jo,[],0,3,0,0,0,Qo,0,B,[],0,3,0,0,0,ABe,0,B,[Cl],0,3,0,0,["bq",APN(AK1),"iR",APN(ADA)],T$,0,B,[Gn],0,3,0,0,["tZ",APO(AHw)],PE,0,B,[],0,3,0,0,["bq",APN(ADo)],JD,0,JG,[],1,3,0,0,0,Ob,0,JD,[],0,3,0,0,0,Su,0,DD,[],0,3,0,0,0,He,0,B,[],0,3,0,0,0,HE,0,B,[],0,3,0,0,0,W9,0,B,[],3,3,0,0,0]);
$rt_metadata([Ws,0,B,[],0,3,0,0,0,Zf,0,B,[],3,3,0,0,0,ABo,0,B,[],0,3,0,0,0,OO,0,B,[J6],0,3,0,0,["ba",APN(AMa)],OW,0,B,[BZ],0,3,0,0,["ba",APN(AID)],OY,0,B,[BZ],0,3,0,0,["ba",APN(ALw)],Ld,0,B,[Gz,Cu],0,3,0,0,0,Iw,0,Ld,[],0,0,0,0,0,HS,0,B4,[],0,3,0,0,0,CO,0,B,[],3,3,0,AE$,0,B6,0,Cg,[],12,3,0,S$,0,H0,0,B,[],0,3,0,0,0,Hk,0,B,[],0,3,0,0,0,Y7,0,B,[],0,3,0,0,0,Df,0,B,[],3,3,0,ACi,0,XQ,0,B,[],0,3,0,0,["bq",APN(AKQ)],Hw,0,B,[],0,3,0,0,0,HV,0,B,[],4,3,0,0,0,Xh,0,B,[],0,3,0,0,0,CD,0,B,[],3,3,0,AAK,0,YR,0,B,[],0,3,0,0,0,X_,
0,B,[],4,3,0,0,0,Sq,0,B,[],0,0,0,0,0,AAv,0,B,[],0,3,0,0,["bq",APN(AD6)],R6,0,B,[Bc],0,3,0,0,["m",APN(AEF)],Iv,0,B,[C3],0,3,0,0,["eG",APM(ZN)],Wy,0,B,[],0,3,0,0,0,SV,0,B,[],0,3,0,0,0,Rv,0,B,[],0,3,0,0,0,VH,0,B,[Bc],0,3,0,0,["m",APN(ACS)],W8,0,B,[],0,3,0,0,0,TY,0,B,[Cl],0,3,0,0,["bq",APN(ACd),"k8",APM(AKc),"iR",APN(AJO)],Ou,0,B,[C3],0,3,0,0,0,MX,0,B,[Bc],0,3,0,0,0,Dg,0,Bo,[],0,3,0,0,0,R9,0,FJ,[],0,3,0,0,0,Rn,0,B,[Bc],0,3,0,0,["m",APN(AED)],Xl,0,B,[],3,3,0,0,0,ABd,0,B,[],0,3,0,0,0,Pv,0,B,[Bc],0,3,0,0,["m",APN(ANi)],Sb,
0,B,[Bc],0,3,0,0,0,QR,0,B,[Bc],0,3,0,0,["m",APN(AEO)],QQ,0,B,[Bc],0,3,0,0,["m",APN(AL_)],Ev,0,B,[],3,3,0,0,0,Mo,0,B,[Ev],0,0,0,0,["b$",APM(BN),"bJ",APM(BQ),"j8",APM(PP)],Yh,0,B,[BK],4,3,0,0,0,Rk,0,B,[FT],0,3,0,0,0,Z8,0,B,[Ei],0,3,0,0,0,Lx,0,B,[Bc],0,3,0,0,["m",APN(AK6)],PG,0,B,[DH],0,3,0,0,0]);
$rt_metadata([TP,0,B,[],0,3,0,0,0,Rq,0,Dt,[DE,Cu],0,3,0,0,0,TL,0,B,[],0,3,0,0,0,TE,0,B,[],0,3,0,0,0,SA,0,B,[],0,3,0,0,0,DR,0,Bo,[],0,3,0,0,0,Mw,0,B,[],0,3,0,0,0,LR,0,B,[Bc],0,3,0,0,["m",APN(AJC)],Pw,0,B,[Bc],0,3,0,0,["m",APN(AFq)],Pt,0,B,[Bc],0,3,0,0,["m",APN(ADp)],AAL,0,B,[],0,3,0,0,0,RL,0,B,[],0,0,0,0,0,Xb,0,B,[],3,3,0,0,0,Pq,0,B,[K4],3,3,0,0,0,Mp,0,B,[Pq],3,3,0,0,0,Gg,0,B,[Mp],1,3,0,0,0,QY,0,Gg,[],0,3,0,0,0,Ph,0,B,[],3,3,0,0,0,Sd,0,B,[],0,3,0,0,0,Q4,0,B,[Bc],0,3,0,0,0,GU,0,FM,[],0,0,0,0,0,Ge,0,Bo,[],0,3,
0,0,0,UN,0,B,[Bc],0,3,0,0,["m",APN(AB5)],NC,0,B,[Bc],0,3,0,0,["m",APN(ALJ)],Rm,0,B,[Bc],0,3,0,0,["m",APN(AM1)],Vm,0,B,[BZ],0,3,0,0,["ba",APN(AKL)],Vl,0,B,[BZ],0,3,0,0,["ba",APN(AEm)],UH,0,B,[BZ],0,3,0,0,["ba",APN(AFP)],UG,0,B,[BZ],0,3,0,0,["ba",APN(AGv)],WJ,0,B,[Bc],0,3,0,0,0,Vh,0,B,[B$],0,3,0,0,["bU",APN(AFE)],Jd,0,B,[],0,3,0,0,0,Xm,0,B,[],0,3,0,0,0,ABx,0,B,[],0,3,0,0,0,U8,0,B,[Bh],0,3,0,0,["t",APM(ACE)],U9,0,B,[Bh],0,3,0,0,["t",APM(AGd)],EP,0,B,[],0,3,0,0,0,VQ,0,B,[Bc],0,3,0,0,["m",APN(AFI)],JF,0,EP,[],0,
3,0,0,0,Je,0,EP,[],0,3,0,0,0,T8,0,B,[Bc],0,3,0,0,["m",APN(ACJ)],Ox,0,B,[],0,3,0,0,0,NH,0,B,[Bc],0,3,0,0,["m",APN(AH6)],Pf,0,B,[DH],0,3,0,0,["cY",APN(ANq)],VP,0,DR,[],0,3,0,0,0,PF,0,Bo,[],0,3,0,0,0,Ub,0,Bo,[],0,3,0,0,0,On,0,B,[Bc],0,3,0,0,["m",APN(AJL)],WO,0,B,[Bc],0,3,0,0,0,UD,0,B,[],0,3,0,0,0]);
$rt_metadata([O9,0,B,[Bh],0,3,0,0,["t",APM(ANs)],TK,0,B,[Bh],0,3,0,0,0,O0,0,B,[Ph],0,3,0,0,0,Ex,0,B,[C3],0,3,0,0,["eG",APM(AKe),"qX",APM(ZA),"kO",APP(P9),"jE",APN(AL0),"n0",APN(AHC),"nI",APN(AMt),"pl",APO(AKm),"gp",APP(AGg),"gH",APO(ADs),"gL",APO(AIk),"gN",APN(AMc),"gK",APP(AKb)],Ih,0,Ex,[],0,3,0,0,0,Pc,0,Ih,[GN],0,3,0,0,["uA",APM(AIP),"rU",APM(AFk),"eG",APM(AMb),"pl",APO(AEz),"nI",APN(AJK),"n0",APN(AK8),"jy",APN(ALn)],O1,0,B,[Bh],0,3,0,0,0,Ow,0,Ex,[],0,3,0,0,["eG",APM(AK5),"kO",APP(AFO),"jE",APN(AKr),"gp",
APP(ALA),"gH",APO(AK7),"gL",APO(AIL),"gN",APN(AIs),"gK",APP(AE7),"qX",APM(AML)],F4,0,B,[],0,3,0,0,0,NO,0,B,[Ft],3,3,0,0,["d6",APN(ABI),"kF",APN(AGT)],Ec,0,En,[NO],1,3,0,0,["d6",APN(ABI),"kF",APN(AGT)],N1,0,Ec,[],0,0,0,0,["kF",APN(AGT)],Lj,0,B,[Bc],0,3,0,0,["m",APN(AE0)],Tb,0,B,[Bc],0,3,0,0,["m",APN(AHu)],H_,0,B,[],0,3,0,0,["bq",APN(Zm)],KU,0,H_,[],0,3,0,0,["bq",APN(ADd)],D9,0,B,[],0,3,0,0,["bq",APN(W2)],FC,0,D9,[],0,3,0,0,0,HJ,0,D9,[],0,3,0,0,["bq",APN(AMh)],H4,0,D9,[],0,3,0,0,["bq",APN(ACs)],X9,0,Gg,[],0,3,
0,0,0,Qy,0,B,[Bh],0,3,0,0,["t",APM(AGl)],Qz,0,B,[Bh],0,3,0,0,["t",APM(ADO)],Qw,0,B,[Bh],0,3,0,0,["t",APM(ACF)],Qx,0,B,[Bh],0,3,0,0,["t",APM(AGh)],PK,0,B,[Bh],0,3,0,0,["t",APM(AJ8)],PJ,0,B,[Bh],0,3,0,0,["t",APM(AIU)],PI,0,B,[Bh],0,3,0,0,["t",APM(ANg)],NR,0,B,[Bh],0,3,0,0,["t",APM(AIQ)],OZ,0,B,[],3,3,0,0,0,OH,0,B,[Bh],0,3,0,0,["t",APM(ADC)],Hy,0,B,[],0,3,0,0,0,P$,0,B,[],3,3,0,0,0,WC,0,B,[P$],0,3,0,0,0,TC,0,Ex,[],0,3,0,0,0,Rw,0,B,[Gb],0,3,0,0,["lE",APO(ALC)],Uy,0,BT,[],0,3,0,0,0,DB,0,B,[],0,3,0,0,0,L$,0,B,[Bh],
0,3,0,0,["t",APM(AGO)],L_,0,B,[Bh],0,3,0,0,["t",APM(ALI)],L9,0,B,[Bh],0,3,0,0,["t",APM(ABH)],UF,0,B,[Bh],0,3,0,0,["t",APM(AHA)],UE,0,B,[Bh],0,3,0,0,["t",APM(AKq)],P6,0,B,[FT],0,3,0,0,["t$",APM(AHb)],Q5,0,B,[Bh],0,3,0,0,["t",APM(AGt)],Q6,0,B,[Bh],0,3,0,0,["t",APM(ALp)],VO,0,B,[Bh],0,3,0,0,["t",APM(ABU)],VJ,0,B,[Bh],0,3,0,0,["t",APM(AGw)],VK,0,B,[Bh],0,3,0,0,["t",APM(AMD)],VL,0,B,[Bh],0,3,0,0,["t",APM(AHO)]]);
$rt_metadata([VM,0,B,[Bh],0,3,0,0,["t",APM(AFZ)],J1,0,B,[],3,3,0,0,0,Vd,0,B,[J1],0,3,0,0,0,M$,0,B,[Bc],0,3,0,0,["m",APN(ACq)],M9,0,B,[Bc],0,3,0,0,["m",APN(ACK)],S5,0,B,[Gb],0,3,0,0,["lE",APO(AM5)],OU,0,B,[BZ],0,3,0,0,["ba",APN(AEy)],ABa,0,B,[Cl],0,3,0,0,["bq",APN(AIV)],LX,0,B,[Bc],0,3,0,0,["m",APN(AHs)],V0,0,B,[Bc],0,3,0,0,["m",APN(ANn)],HU,0,B,[BK],3,3,0,0,0,LE,0,B,[HU],0,3,0,0,["qk",APM(AGz)],Lo,0,B,[HU],0,3,0,0,["qk",APM(ABK)],TQ,0,B,[FT],0,3,0,0,["t$",APM(AMX)],SE,0,B,[J1],0,3,0,0,0,Vk,0,B,[BZ],0,3,0,0,
["ba",APN(AF5)],Ew,0,B,[],0,0,0,0,0,Rt,0,Ew,[Ev],0,0,0,0,0,Ye,0,B,[BK],1,3,0,0,0,W_,0,B,[Bc],0,0,0,0,0,PU,0,B,[Cu],4,3,0,0,0,Q$,0,B,[],3,3,0,0,0,ZW,0,B,[],0,3,0,0,0,Vg,0,Ea,[Cl],0,3,0,0,0,E3,0,B,[],0,0,0,0,0,GW,0,B,[],4,3,0,0,0,Tp,0,B,[],0,3,0,0,0,FX,0,B,[],3,3,0,0,0,RZ,0,B,[FX],0,3,0,0,["h_",APP(AH_)],R0,0,B,[FX],0,3,0,0,["h_",APP(AF6)],Hb,0,B,[Cu,Cl],0,3,0,0,0,II,0,B,[],3,3,0,0,0,Qu,0,B,[II],0,3,0,0,0,Nx,0,B,[II],3,3,0,0,0,YV,0,B,[Nx],0,3,0,0,0,QV,0,B,[FX],0,3,0,0,["h_",APP(AIR)],QU,0,B,[DH],0,3,0,0,["cY",
APN(AMp)],QT,0,B,[DH],0,3,0,0,["cY",APN(AJW)],QW,0,B,[FX],0,3,0,0,["h_",APP(AIm)],By,0,B,[],1,0,0,0,["b3",APP(GS),"b7",APQ(G1),"gZ",APM(ADn),"I",APN(ALM),"bE",APN(ALL),"eU",APM(AMx),"dV",APM(H8)],S8,0,B,[],3,3,0,0,0,TS,0,B,[S8],0,3,0,0,0,QJ,0,Ea,[Cl],0,3,0,0,0,V1,0,B,[Bc],0,3,0,0,["m",APN(AIW)],V2,0,B,[Bc],0,3,0,0,["m",APN(AFg)],Pj,0,B,[Bc],0,3,0,0,["m",APN(AIF)],Cw,0,By,[],0,0,0,K5,["c",APP(ACO),"A",APN(AC_)],FY,0,B,[],0,0,0,0,0,HM,0,BI,[],0,3,0,0,0,Sj,0,B,[],0,3,0,0,0]);
$rt_metadata([U5,0,B,[BZ],0,3,0,0,["ba",APN(AJv)],Zi,0,B,[BK],3,3,0,0,0,Sn,0,B,[BZ],0,3,0,0,["ba",APN(AJe)],Qq,0,Cw,[],0,0,0,0,["c",APP(ACl),"A",APN(AKw)],VA,0,Cw,[],0,0,0,0,["c",APP(ADY)],Oz,0,Cw,[],0,0,0,0,["c",APP(ADj)],Ru,0,Cw,[],0,0,0,0,["c",APP(ACr),"A",APN(AJm)],E1,0,Cw,[],0,0,0,0,["c",APP(AL1)],BV,0,By,[],1,0,0,0,["c",APP(AM4),"bK",APM(ALe),"A",APN(AGF)],AAH,0,BV,[],0,0,0,0,["bg",APO(AKP),"b3",APP(AE6),"b7",APQ(ADR),"A",APN(ACo)],BP,0,By,[],0,0,0,0,["c",APP(AFL),"I",APN(AJg),"bE",APN(AHl),"A",APN(AJN),
"dV",APM(ADM)],H2,0,BP,[],0,0,0,0,["c",APP(AI2),"A",APN(AJ9)],Dn,0,H2,[],0,0,0,0,["c",APP(AEk),"I",APN(AJU)],LC,0,Dn,[],0,0,0,0,["c",APP(AJb),"A",APN(ALR)],T4,0,Dn,[],0,0,0,0,["c",APP(AC7),"A",APN(ALi)],PZ,0,Dn,[],0,0,0,0,["c",APP(ADJ),"A",APN(ANl)],RT,0,Dn,[],0,0,0,0,["c",APP(AB0),"A",APN(AKl)],FN,0,BP,[],0,0,0,0,["c",APP(ACf),"b3",APP(AHF),"b7",APQ(AKA),"bE",APN(AHh),"eU",APM(AJj),"dV",APM(AMA)],F1,0,B,[],1,0,0,0,0,Q,0,F1,[],1,0,0,NA,["cZ",APM(AC9),"en",APM(ACC),"ie",APM(ALa),"gg",APM(AMv)],Xt,0,Q,[],0,0,
0,0,["i",APN(CE),"cZ",APM(CA),"en",APM(AE1),"ie",APM(ALB),"eh",APM(AIt),"gg",APM(AFb)],Ig,0,Bo,[],0,3,0,0,0,DC,0,By,[],1,0,0,0,["bE",APN(AKB),"A",APN(ALW),"dV",APM(AHX)],CG,0,DC,[],0,0,0,0,["c",APP(AB3)],EH,0,CG,[],0,0,0,0,["c",APP(ACR)],Cx,0,DC,[],0,0,0,0,["c",APP(ACe)],D7,0,CG,[],0,0,0,0,["c",APP(AHK),"I",APN(ANo)],Uf,0,CG,[],0,0,0,0,["c",APP(AMW),"b3",APP(AIn)],U,0,B,[],1,0,0,0,0,CT,0,BI,[],0,3,0,0,0,LQ,0,F1,[DE],0,0,0,0,["eh",APM(AIx)],M8,0,By,[],0,0,0,0,["c",APP(AG2),"A",APN(AJf)],UY,0,B,[DE,Cu],0,3,0,
0,0,LI,0,BP,[],0,0,0,0,0,O_,0,BP,[],0,0,0,0,["c",APP(ACM),"I",APN(AI0),"A",APN(ADq),"bE",APN(AC8)],Dc,0,BP,[],0,0,0,0,["c",APP(AES),"i",APN(AFp),"bE",APN(ACI),"I",APN(AK2),"A",APN(AE3)],Id,0,Dc,[],0,0,0,0,["i",APN(AGG)],Xk,0,BV,[],0,0,0,0,["bg",APO(AG3)],DQ,0,BV,[],0,0,0,0,["bg",APO(Ll),"bE",APN(AJi)],NB,0,BP,[],0,0,0,0,["I",APN(AHJ),"c",APP(ABR),"bE",APN(ADg),"A",APN(ALE)],D0,0,BV,[],0,0,0,0,["bK",APM(AGN),"bg",APO(AFW),"b3",APP(AEQ),"b7",APQ(AGU),"bE",APN(ALx)],AA9,0,BV,[],0,0,0,0,["bg",APO(ABL)],Wn,0,BV,
[],0,0,0,0,["bg",APO(AB9)],EM,0,BP,[],0,0,0,0,["I",APN(AMz),"c",APP(AI1),"bE",APN(AG4),"A",APN(AJV)],Vj,0,EM,[],0,0,0,0,0,R5,0,EM,[],0,0,0,0,0,V_,0,Cx,[],0,0,0,0,["c",APP(AD5)],Oq,0,Cx,[],0,0,0,0,["c",APP(AIb)],Ff,0,Cx,[],0,0,0,0,["c",APP(AK0),"I",APN(AL6)],N5,0,Ff,[],0,0,0,0,["c",APP(AGQ),"I",APN(AIB)]]);
$rt_metadata([EL,0,Cx,[],0,0,0,0,["c",APP(ANj)],L1,0,EL,[],0,0,0,0,["c",APP(AGi)],Qj,0,Cx,[],0,0,0,0,["c",APP(AMJ)],Pk,0,Ff,[],0,0,0,0,["c",APP(ADr)],SX,0,EL,[],0,0,0,0,["c",APP(ACw)],Qk,0,DC,[],0,0,0,0,["c",APP(AM7),"b3",APP(ALb)],Ne,0,DC,[],0,0,0,0,["c",APP(AJk),"b3",APP(ABW)],El,0,B,[],1,0,0,0,0,Wa,0,CG,[],0,0,0,0,["c",APP(ACx)],T_,0,D7,[],0,0,0,0,["c",APP(AH$)],NT,0,EH,[],0,0,0,0,["c",APP(AKC)],Pe,0,CG,[],0,0,0,0,["c",APP(AJd)],Sh,0,D7,[],0,0,0,0,["c",APP(ACG)],P0,0,EH,[],0,0,0,0,["c",APP(AKR)],Jh,0,By,
[],4,0,0,0,["c",APP(AHj),"A",APN(AGu)],XU,0,By,[],0,0,0,0,["c",APP(AC5),"A",APN(ADf)],M_,0,By,[],0,0,0,0,["c",APP(AGI),"A",APN(ANc)],U3,0,By,[],4,0,0,0,["c",APP(AJF),"A",APN(ADU)],UC,0,By,[],0,0,0,0,["c",APP(AIZ),"A",APN(ABJ)],Ma,0,By,[],0,0,0,0,["c",APP(ADK),"A",APN(AFC)],AAY,0,BP,[],0,0,0,0,["c",APP(AMO),"I",APN(ADi),"gZ",APM(AII),"A",APN(ADh)],Xr,0,BP,[],4,0,0,0,["c",APP(AIS),"I",APN(AKt),"gZ",APM(ABF),"A",APN(AM3)],AAP,0,By,[],4,0,0,0,["c",APP(AG6),"A",APN(AFy)],Zg,0,By,[],0,0,0,0,["c",APP(AIY),"A",APN(AFl)],Wj,
0,By,[],0,0,0,0,["c",APP(AGk),"A",APN(ADX)],Gi,0,BP,[],0,0,0,0,["c",APP(ACB),"I",APN(AJS),"A",APN(AJ_)],AAU,0,Gi,[],0,0,0,0,["c",APP(AD3),"b3",APP(ALP),"b7",APQ(ACm),"bE",APN(AH4)],Yx,0,Gi,[],0,0,0,0,["c",APP(AHz)],M7,0,FD,[G5],0,3,0,0,["kS",APQ(AFc),"jV",APP(AC$),"g8",APN(ADy),"lm",APO(ALd)],Qm,0,BV,[],0,0,0,0,["bg",APO(AEi),"b3",APP(AC1),"b7",APQ(AFB),"bE",APN(AF7)],Wi,0,BV,[],0,0,0,0,["bg",APO(AHH)],L6,0,BV,[],0,0,0,0,["bg",APO(AKF)],Gh,0,B,[],4,0,0,AKj,0,Lu,0,BV,[],0,0,0,0,["bg",APO(AKK)],JN,0,BP,[],0,0,
0,0,["I",APN(AJa),"c",APP(ADV),"b3",APP(AF4),"b7",APQ(AEo),"bE",APN(ACk),"A",APN(ALk)],J2,0,BP,[],0,0,0,0,["I",APN(ADx),"c",APP(AB1),"b3",APP(AJr),"b7",APQ(AKD),"bE",APN(AEj),"A",APN(AJz)],Du,0,BV,[],0,0,0,0,["bg",APO(AKa),"b3",APP(AIu),"b7",APQ(ADw),"bE",APN(AJ1)],Tj,0,El,[],0,0,0,0,["gQ",APN(ADH),"rE",APO(AJ7)],Tk,0,El,[],0,0,0,0,["gQ",APN(AKS),"rE",APO(AMq)],Z5,0,B,[],0,0,0,0,0,WF,0,B,[],0,0,0,0,0,JK,0,U,[],0,0,0,0,["x",APM(YD)],IY,0,U,[],0,0,0,0,["x",APM(Y$)],ZZ,0,U,[],0,0,0,0,["x",APM(AKv)],AAs,0,U,[],
0,0,0,0,["x",APM(ALm)],AAu,0,U,[],0,0,0,0,["x",APM(AET)],JE,0,U,[],0,0,0,0,["x",APM(Xv)],Kf,0,JE,[],0,0,0,0,["x",APM(Yb)],ABu,0,U,[],0,0,0,0,["x",APM(AF3)],Lh,0,Kf,[],0,0,0,0,["x",APM(Wh)]]);
$rt_metadata([YN,0,Lh,[],0,0,0,0,["x",APM(AHY)],Y5,0,U,[],0,0,0,0,["x",APM(AEe)],XO,0,U,[],0,0,0,0,["x",APM(AHV)],XE,0,U,[],0,0,0,0,["x",APM(AMu)],AAy,0,U,[],0,0,0,0,["x",APM(AIE)],ABE,0,U,[],0,0,0,0,["x",APM(ABT)],Z6,0,U,[],0,0,0,0,["x",APM(AGp)],ZQ,0,U,[],0,0,0,0,["x",APM(AKf)],AAJ,0,U,[],0,0,0,0,["x",APM(AEc)],WW,0,U,[],0,0,0,0,["x",APM(AEx)],WA,0,U,[],0,0,0,0,["x",APM(AMo)],AAa,0,U,[],0,0,0,0,["x",APM(ABM)],AAk,0,U,[],0,0,0,0,["x",APM(AG9)],X7,0,U,[],0,0,0,0,["x",APM(AEH)],Y8,0,U,[],0,0,0,0,["x",APM(AFF)],ABi,
0,U,[],0,0,0,0,["x",APM(AHc)],AAh,0,U,[],0,0,0,0,["x",APM(ALH)],Yu,0,U,[],0,0,0,0,["x",APM(AJE)],X6,0,U,[],0,0,0,0,["x",APM(AIv)],ABA,0,U,[],0,0,0,0,["x",APM(AKp)],Is,0,U,[],0,0,0,0,["x",APM(Y6)],AAM,0,Is,[],0,0,0,0,["x",APM(AIh)],YS,0,JK,[],0,0,0,0,["x",APM(ACY)],X2,0,IY,[],0,0,0,0,["x",APM(AFS)],XJ,0,U,[],0,0,0,0,["x",APM(AHn)],XY,0,U,[],0,0,0,0,["x",APM(AMe)],YH,0,U,[],0,0,0,0,["x",APM(AFf)],YO,0,U,[],0,0,0,0,["x",APM(ABN)],XK,0,B,[],4,0,0,0,0,Xi,0,B,[],4,3,0,0,0,Mc,0,B,[],0,3,0,0,0,AAd,0,B,[],0,3,0,0,0,Yp,
0,B,[],4,3,0,0,0,Xs,0,B,[DH],0,3,0,0,0,Oc,0,B,[],1,3,0,0,0,Te,0,B,[DH],0,0,0,0,["cY",APN(AEX)],Ue,0,Q,[],0,0,0,0,["i",APN(AEZ)],Uc,0,Q,[],0,0,0,0,["i",APN(ACc)],Nj,0,Q,[],0,0,0,0,["i",APN(AHf),"eh",APM(AFJ)],Nq,0,Q,[],0,0,0,0,["i",APN(AKd)],No,0,Q,[],0,0,0,0,["i",APN(AKJ)],Np,0,Q,[],0,0,0,0,["i",APN(AHG)],Nt,0,Q,[],0,0,0,0,["i",APN(AEB)],Nu,0,Q,[],0,0,0,0,["i",APN(ABG)],Nr,0,Q,[],0,0,0,0,["i",APN(AFN)],Ns,0,Q,[],0,0,0,0,["i",APN(AHI)],Nv,0,Q,[],0,0,0,0,["i",APN(ALS)],Nw,0,Q,[],0,0,0,0,["i",APN(AD9)],Ni,0,Q,
[],0,0,0,0,["i",APN(ANr)],NW,0,Q,[],0,0,0,0,["i",APN(AFR)]]);
$rt_metadata([Ng,0,Q,[],0,0,0,0,["i",APN(AD8)],Nh,0,Q,[],0,0,0,0,["i",APN(AFu)],Nm,0,Q,[],0,0,0,0,["i",APN(AGK)],Nf,0,Q,[],0,0,0,0,["i",APN(ALt)],Nk,0,Q,[],0,0,0,0,["i",APN(ADb)],Nl,0,Q,[],0,0,0,0,["i",APN(AJy)],Fm,0,Cg,[],12,0,0,Rh,0,V7,0,B,[Bc],0,3,0,0,0,KF,0,B,[],3,3,0,0,0,Rd,0,B,[KF],4,3,0,0,0,ZR,0,B,[],0,3,0,0,0,WX,0,B,[],0,3,0,0,0,RY,0,B,[],32,0,0,AOO,0,Ro,0,B,[Bc],0,3,0,0,["m",APN(AJ3)],VD,0,B,[Bc],0,3,0,0,0,U4,0,B,[Ei],0,3,0,0,0,EB,0,B,[],0,3,0,0,0,I6,0,Ec,[],1,0,0,0,["d6",APN(ABI),"kF",APN(AGT)],Tv,
0,I6,[],0,0,0,0,["d6",APN(ABI),"kF",APN(AGT)],Ke,0,Dt,[],1,0,0,0,0,Tt,0,Ke,[],0,0,0,0,0,KI,0,D8,[J8],1,0,0,0,["d6",APN(ABI),"hq",APM(AEg),"lt",APN(AH3),"kF",APN(AGY)],Tu,0,KI,[],0,0,0,0,["d6",APN(ABI),"kE",APN(AH8),"cq",APM(AHk),"bQ",APM(AEJ),"dB",APM(ACy)],Tr,0,B,[Ev],0,0,0,0,["b$",APM(ACj),"bJ",APM(AJl),"j8",APM(AKE)],N_,0,B,[Ev],3,3,0,0,0,Ts,0,B,[N_],0,0,0,0,0,V6,0,B,[Gn],0,3,0,0,0,LW,0,FN,[],0,0,0,0,["b3",APP(AFj),"b7",APQ(ANh),"eU",APM(ADT)],K_,0,Bo,[],0,3,0,0,0,P_,0,B,[Bc],0,3,0,0,["m",APN(ADQ)],Gj,0,
B,[BK],1,3,0,0,0,XH,0,Gj,[],1,3,0,0,0,Z_,0,Gj,[],1,3,0,0,0,Xg,0,B,[],3,3,0,0,0,PH,0,B,[BZ],0,3,0,0,["ba",APN(ABS)],QO,0,B,[Bc],0,3,0,0,["m",APN(AHZ)],QN,0,B,[Bc],0,3,0,0,["m",APN(AJP)],OM,0,B,[Bc],0,3,0,0,0,OL,0,B,[Bc],0,3,0,0,0,Q3,0,B,[Bc],0,3,0,0,0,Sc,0,B,[Bc],0,3,0,0,0,SU,0,Ec,[],0,0,0,0,["d6",APN(ABI),"kF",APN(AGT)],N2,0,En,[],0,0,0,0,["d6",APN(ABI),"kF",APN(AGT)],Tc,0,B,[KF],0,0,0,0,0,Va,0,B,[BZ],0,3,0,0,["ba",APN(AEs)],Nc,0,B,[Bc],0,3,0,0,["m",APN(AEb)],LH,0,B,[],0,3,0,0,0,PW,0,B,[],0,3,0,0,0,R7,0,B,[Bh],
0,3,0,0,["t",APM(ALc)],MD,0,B,[Bc],0,3,0,0,["m",APN(AIg)]]);
$rt_metadata([TU,0,B,[Bc],0,3,0,0,["m",APN(AFH)],B8,0,Cg,[],12,3,0,XW,0,Dm,0,B,[],3,3,0,AIa,0,CC,0,B,[],3,3,0,AAw,0,Ca,0,Cg,[],12,3,0,ZG,0,C_,0,B,[],3,3,0,ACu,0,SI,0,Ew,[Ev],0,0,0,0,0,PY,0,Ew,[Ev],0,0,0,0,0,RA,0,Q,[],0,0,0,0,["i",APN(ALZ)],LG,0,Q,[],0,0,0,0,["i",APN(ACW)],QC,0,Q,[],0,0,0,0,["i",APN(ACD)],QB,0,Q,[],0,0,0,0,["i",APN(AFe)],UM,0,Q,[],0,0,0,0,["i",APN(AGA)],NM,0,Q,[],0,0,0,0,["i",APN(AL3)],M2,0,Q,[],0,0,0,0,["i",APN(AI7)],PC,0,Q,[],0,0,0,0,["i",APN(AKi)],Lz,0,Q,[],0,0,0,0,["i",APN(AM0)],LF,0,Q,[],
0,0,0,0,["i",APN(AEn)],MC,0,Q,[],0,0,0,0,["i",APN(AL$)],N9,0,Q,[],0,0,0,0,["i",APN(AHS)],Of,0,Q,[],0,0,0,0,["i",APN(AJQ)],R1,0,Q,[],0,0,0,0,["i",APN(ALT)],Re,0,Q,[],0,0,0,0,["i",APN(AME)],LN,0,Q,[],0,0,0,0,["i",APN(AEd)],K2,0,Q,[],0,0,0,0,["i",APN(AI$)],Qt,0,K2,[],0,0,0,0,["i",APN(AK3)],SO,0,B,[],3,3,0,AOk,0,Q0,0,B,[Bc],0,3,0,0,["m",APN(AFx)],U6,0,B,[BZ],0,3,0,0,["ba",APN(AFD)],U7,0,B,[BZ],0,3,0,0,["ba",APN(ADa)],Mb,0,B,[Bh],0,3,0,0,0,YA,0,B,[BK],1,3,0,0,0,SK,0,B,[BZ],0,3,0,0,["ba",APN(AMG)],SG,0,B,[BZ],0,3,
0,0,["ba",APN(AHq)],LB,0,B,[Bh],0,3,0,0,["t",APM(AF2)],VE,0,B,[],3,3,0,AOZ,0,Qd,0,B,[HU],0,3,0,0,["qk",APM(AKO)],Z9,0,B,[],3,3,0,0,0,YU,0,B,[Gb],0,3,0,0,0,TR,0,B,[],0,3,0,0,0,MU,0,B,[Ei],0,3,0,0,["lL",APN(ANd)],W6,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.K9=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","codeEdit","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","null",
"false","true","no such element with id = codeEdit","FATAL: WebGL is not enabled in the browser","Either src or dest is null","fileList","Illegal argument javaObject instanceof ","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
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
Bw.prototype.toString=function(){return $rt_ustr(this);};
Bw.prototype.valueOf=Bw.prototype.toString;B.prototype.toString=function(){return $rt_ustr(ADt(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var ATz=Long_add;var Ji=Long_sub;var AIo=Long_mul;var ATA=Long_div;var ATB=Long_rem;var ATC=Long_or;var Wb=Long_and;var ATD=Long_xor;var ATE=Long_shl;var ATF=Long_shr;var APd=Long_shru;var ATG=Long_compare;var AEC=Long_eq;var ATH=Long_ne;var ANY=Long_lt;var ATI=Long_le;var ATJ=Long_gt;var ANV=Long_ge;var ATK=Long_not;var AOF=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AHx);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=O3.prototype;c.f=c.ba;c=L4.prototype;c.f=c.ba;c=WN.prototype;c.createEntityReference=c.AE;c.getElementById=c.Ef;c.createTextNode=c.DV;c.hasChildNodes=c.Cc;c.querySelectorAll=c.Ah;c.removeChild=c.FY;c.cloneNode=c.yy;c.createComment=c.HV;c.insertBefore=c.A9;c.getElementsByTagNameNS=c.Gk;c.hasAttributes=c.Dr;c.normalize=c.H7;c.hasChildNodesJS=c.HS;c.getElementsByTagName=c.G5;c.appendChild=c.y2;c.createAttributeNS=c.EH;c.dispatchEvent=c.Ht;c.replaceChild=c.zu;c.createElementNS=c.Bu;c.createCDATASection
=c.F9;c.querySelector=c.Dp;c.createElement=c.Fg;c.isSupported=c.F$;c.importNode=c.Bs;c.removeEventListener=c.Bj;c.createAttribute=c.Hw;c.createDocumentFragment=c.xQ;c.createProcessingInstruction=c.Ax;c.addEventListener=c.Fd;Object.defineProperty(c,"nodeName",{get:c.y1});Object.defineProperty(c,"documentElement",{get:c.CV});Object.defineProperty(c,"childNodes",{get:c.FM});Object.defineProperty(c,"prefix",{get:c.BB,set:c.Ii});Object.defineProperty(c,"implementation",{get:c.Gy});Object.defineProperty(c,"textContent",
{get:c.H5,set:c.DT});Object.defineProperty(c,"parentNode",{get:c.Ec});Object.defineProperty(c,"nextSibling",{get:c.CI});Object.defineProperty(c,"nodeType",{get:c.FA});Object.defineProperty(c,"doctype",{get:c.Cz});Object.defineProperty(c,"localName",{get:c.G0});Object.defineProperty(c,"nodeValue",{get:c.Ce,set:c.HI});Object.defineProperty(c,"firstChild",{get:c.Hd});Object.defineProperty(c,"lastChild",{get:c.Fo});Object.defineProperty(c,"previousSibling",{get:c.yF});Object.defineProperty(c,"namespaceURI",{get:
c.z4});Object.defineProperty(c,"attributes",{get:c.BI});Object.defineProperty(c,"ownerDocument",{get:c.Ac});c=YQ.prototype;c.get=c.G6;Object.defineProperty(c,"length",{get:c.Gp});c=ME.prototype;c.f=c.ba;c=Xz.prototype;c.removeEventListener=c.Aj;c.dispatchEvent=c.Bg;c.addEventListener=c.EB;c=RB.prototype;c.f=c.ba;c=RD.prototype;c.f=c.ba;c=RC.prototype;c.f=c.ba;c=Tz.prototype;c.onAnimationFrame=c.Dt;c=Ty.prototype;c.f=c.Hq;c=Tw.prototype;c.handleEvent=c.bU;c=Q8.prototype;c.f=c.ba;c=Uo.prototype;c.handleEvent=
c.bU;c=Up.prototype;c.handleEvent=c.bU;c=Uq.prototype;c.handleEvent=c.bU;c=Ur.prototype;c.handleEvent=c.bU;c=Us.prototype;c.handleEvent=c.bU;c=Ut.prototype;c.handleEvent=c.bU;c=Uu.prototype;c.handleEvent=c.bU;c=Uv.prototype;c.handleEvent=c.bU;c=Uw.prototype;c.handleEvent=c.bU;c=Ux.prototype;c.handleEvent=c.bU;c=VS.prototype;c.handleEvent=c.bU;c=VT.prototype;c.handleEvent=c.bU;c=VU.prototype;c.handleEvent=c.bU;c=VV.prototype;c.handleEvent=c.bU;c=Sy.prototype;c.handleEvent=c.bU;c=Vt.prototype;c.f=c.ba;c=Vu.prototype;c.f
=c.ba;c=Tm.prototype;c.handleEvent=c.bU;c=Mx.prototype;c.accept=c.HJ;c=OO.prototype;c.f=c.ba;c=OW.prototype;c.f=c.ba;c=OY.prototype;c.f=c.ba;c=Vm.prototype;c.f=c.ba;c=Vl.prototype;c.f=c.ba;c=UH.prototype;c.f=c.ba;c=UG.prototype;c.f=c.ba;c=Vh.prototype;c.handleEvent=c.bU;c=OU.prototype;c.f=c.ba;c=LE.prototype;c.onTimer=c.qk;c=Lo.prototype;c.onTimer=c.qk;c=Vk.prototype;c.f=c.ba;c=U5.prototype;c.f=c.ba;c=Sn.prototype;c.f=c.ba;c=PH.prototype;c.f=c.ba;c=Va.prototype;c.f=c.ba;c=U6.prototype;c.f=c.ba;c=U7.prototype;c.f
=c.ba;c=SK.prototype;c.f=c.ba;c=SG.prototype;c.f=c.ba;c=Qd.prototype;c.onTimer=c.qk;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);