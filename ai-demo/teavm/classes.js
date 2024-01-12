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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.f0=f;}
function $rt_cls(cls){return Zw(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return GA(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b4.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AKr(t);}
function $rt_throwableCause(t){return AKw(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(APA());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return APB(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(APC());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BF=$rt_compare;var APD=$rt_nullCheck;var E=$rt_cls;var O=$rt_createArray;var HI=$rt_isInstance;var APE=$rt_nativeThread;var APF=$rt_suspending;var APG=$rt_resuming;var APH=$rt_invalidPointer;var C=$rt_s;var Bf=$rt_eraseClinit;var V=$rt_imul;var ET=$rt_wrapException;var API=$rt_checkBounds;var APJ=$rt_checkUpperBound;var APK=$rt_checkLowerBound;var APL=$rt_wrapFunction0;var APM=$rt_wrapFunction1;var APN=$rt_wrapFunction2;var APO=$rt_wrapFunction3;var APP=$rt_wrapFunction4;var F=$rt_classWithoutFields;var G
=$rt_createArrayFromData;var AOf=$rt_createCharArrayFromData;var APQ=$rt_createByteArrayFromData;var APR=$rt_createShortArrayFromData;var Fw=$rt_createIntArrayFromData;var APS=$rt_createBooleanArrayFromData;var APT=$rt_createFloatArrayFromData;var APU=$rt_createDoubleArrayFromData;var ADD=$rt_createLongArrayFromData;var APy=$rt_createBooleanArray;var Eb=$rt_createByteArray;var APV=$rt_createShortArray;var B1=$rt_createCharArray;var Bu=$rt_createIntArray;var APW=$rt_createLongArray;var ABW=$rt_createFloatArray;var APX
=$rt_createDoubleArray;var BF=$rt_compare;var APY=$rt_castToClass;var APZ=$rt_castToInterface;var AP0=Long_toNumber;var BH=Long_fromInt;var AP1=Long_fromNumber;var Dh=Long_create;var AAk=Long_ZERO;var AP2=Long_hi;var XW=Long_lo;
function B(){this.$id$=0;}
function AP3(){var a=new B();TL(a);return a;}
function TL(a){}
function Bt(a){return Zw(a.constructor);}
function AHN(a,b){return a!==b?0:1;}
function ADr(a){var b,c,d,e,f,g,h,i,j;b=H8(a);if(!b)c=C(0);else{d=(((32-Mz(b)|0)+4|0)-1|0)/4|0;e=B1(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Gs((b>>>g|0)&15,16);g=g-4|0;h=i;}c=GA(e);}j=new R;T(j);K(K(j,C(1)),c);return S(j);}
function H8(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AHb(a){var b,c,d;if(!HI(a,DE)&&a.constructor.$meta.item===null){b=new Tz;W(b);J(b);}b=AB5(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var Fd=F();
var AP4=null;var AP5=null;var AP6=null;var AP7=null;var AP8=null;function AHv(b){var c,d,e,f,g,h,i,j;Yi();AAA();WG();ABC();Y2();Z1();XZ();Zb();AAC();WA();Yj();AA2();AAV();WC();ZT();ZJ();ZL();YL();X4();W3();ABo();Yl();Z6();Zi();c=(WT()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Xw(C(2),C(3));else{c=new O3;d=new L4;e="teavm/worker.js";f=new $rt_globals.Array();g=0;while(g<3){h=new $rt_globals.Worker(e);i=new ME;i.oM=h;i.oN=f;i.oO=3;i.oP=
c;i.oI=d;j=Bi(i,"f");h.onmessage=j;g=g+1|0;}}}
function Uk(b){R9(AP4.cx,b);S_(AP5);}
function Yi(){AP6=null;AP7=FS();AP8=FS();}
var LZ=F(0);
var Lv=F(0);
function Ui(){var a=this;B.call(a);a.jw=null;a.fn=null;}
function Zw(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Ui;c.fn=b;d=c;b.classObject=d;}return c;}
function G3(a){return a.fn.$meta.primitive?1:0;}
function Hj(a){return Zw(a.fn.$meta.item);}
var XC=F();
function Bi(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Es(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Xi=F();
function AB5(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ZA(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ZA(d[e],c))return 1;e=e+1|0;}return 0;}
function FO(){var a=this;B.call(a);a.k3=null;a.pW=null;a.kW=0;a.lH=0;}
function AP9(){var a=new FO();W(a);return a;}
function AP$(a){var b=new FO();Br(b,a);return b;}
function W(a){a.kW=1;a.lH=1;}
function Br(a,b){a.kW=1;a.lH=1;a.k3=b;}
function AE6(a){return a;}
function AKr(a){return a.k3;}
function AKw(a){var b;b=a.pW;if(b===a)b=null;return b;}
var DD=F(FO);
function AP_(){var a=new DD();ZW(a);return a;}
function ZW(a){W(a);}
var Bo=F(DD);
function APB(a){var b=new Bo();AL9(b,a);return b;}
function AL9(a,b){Br(a,b);}
var YO=F(Bo);
var Cu=F(0);
var Cl=F(0);
var HU=F(0);
function Bw(){var a=this;B.call(a);a.b4=null;a.he=0;}
var AQa=null;var AQb=null;var AQc=null;function FP(){FP=Bf(Bw);ALO();}
function AFP(){var a=new Bw();Ww(a);return a;}
function GA(a){var b=new Bw();Ij(b,a);return b;}
function DM(a,b,c){var d=new Bw();Lf(d,a,b,c);return d;}
function Ww(a){FP();a.b4=AQa;}
function Ij(a,b){FP();Lf(a,b,0,b.data.length);}
function Lf(a,b,c,d){var e;FP();e=B1(d);a.b4=e;C7(b,c,e,0,d);}
function K$(b){var c;FP();c=AFP();c.b4=b;return c;}
function I(a,b){var c,d;if(b>=0){c=a.b4.data;if(b<c.length)return c[b];}d=new Go;W(d);J(d);}
function H(a){return a.b4.data.length;}
function DU(a){return a.b4.data.length?0:1;}
function OI(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=H(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){C7(a.b4,b,d,e,c);return;}}g=new BS;W(g);J(g);}
function Sr(a,b,c){var d,e,f;if((c+H(b)|0)>H(a))return 0;d=0;while(d<H(b)){e=I(b,d);f=c+1|0;if(e!=I(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Jq(a,b){if(a===b)return 1;return Sr(a,b,0);}
function Dy(a,b){var c,d,e,f;if(a===b)return 1;if(H(b)>H(a))return 0;c=0;d=H(a)-H(b)|0;while(d<H(a)){e=I(a,d);f=c+1|0;if(e!=I(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Ht(a,b,c){var d,e,f,g,h;d=Ba(0,c);if(b<65536){e=b&65535;while(true){f=a.b4.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=JA(b);h=KG(b);while(true){f=a.b4.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function GF(a,b,c){var d,e,f,g,h;d=Be(c,H(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b4.data[d]==e)break;d=d+(-1)|0;}return d;}f=JA(b);g=KG(b);while(true){if(d<1)return (-1);h=a.b4.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Os(a,b,c){var d,e,f;d=Ba(0,c);e=H(a)-H(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=H(b))break a;if(I(a,d+f|0)!=I(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AI8(a,b){return Os(a,b,0);}
function OE(a,b,c){var d,e;d=Be(c,H(a)-H(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=H(b))break a;if(I(a,d+e|0)!=I(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Yv(a,b){return OE(a,b,H(a));}
function B9(a,b,c){var d,e;d=BF(b,c);if(d>0){e=new BS;W(e);J(e);}if(!d){FP();return AQb;}if(!b&&c==H(a))return a;return DM(a.b4,b,c-b|0);}
function DT(a,b){return B9(a,b,H(a));}
function OR(a,b,c){return B9(a,b,c);}
function GY(a,b){var c,d,e,f,g,h;if(DU(b))return a;if(DU(a))return b;c=B1(H(a)+H(b)|0);d=c.data;e=0;f=0;while(f<H(a)){g=e+1|0;d[e]=I(a,f);f=f+1|0;e=g;}g=0;while(g<H(b)){h=e+1|0;d[e]=I(b,g);g=g+1|0;e=h;}return K$(c);}
function S$(a,b,c){var d,e,f,g;d=new R;T(d);e=H(a)-H(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=H(b)){K(d,c);f=f+(H(b)-1|0)|0;break a;}if(I(a,f+g|0)!=I(b,g))break;g=g+1|0;}BY(d,I(a,f));}f=f+1|0;}K(d,DT(a,f));return S(d);}
function Qx(a){var b,c;b=0;c=H(a)-1|0;a:{while(b<=c){if(I(a,b)>32)break a;b=b+1|0;}}while(b<=c&&I(a,c)<=32){c=c+(-1)|0;}return B9(a,b,c+1|0);}
function ES(a){var b,c,d,e,f;b=a.b4.data;c=B1(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function DY(b){var c;FP();c=new R;T(c);return S(Bk(c,b));}
function B0(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bw))return 0;c=b;if(H(c)!=H(a))return 0;d=0;while(d<H(c)){if(I(a,d)!=I(c,d))return 0;d=d+1|0;}return 1;}
function JZ(a){var b,c,d,e;a:{if(!a.he){b=a.b4.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.he=(31*a.he|0)+e|0;d=d+1|0;}}}return a.he;}
function KQ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new FV;Br(b,C(4));J(b);}AQd=1;d=new PQ;d.ji=O(Cw,10);d.fG=(-1);d.eh=(-1);d.bh=(-1);e=new FY;e.ec=1;e.bt=b;e.R=B1(H(b)+2|0);C7(ES(b),0,e.R,0,H(b));f=e.R.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.qI=g;e.fq=0;EF(e);EF(e);d.g=e;d.dc=0;d.ko=VH(d,(-1),0,null);if(!CW(d.g)){b=new HN;h=d.g;Ip(b,C(5),h.bt,h.cP);J(b);}if(d.m3)d.ko.dW();b=Bz();h=new Rd;h.hN=(-1);h.jI=(-1);h.vr=d;h.s5=d.ko;h.h2=a;h.hN=0;g=H(a);h.jI=g;e=new Tb;i=h.hN;j=d.fG;k=d.eh+1|0;l=d.bh+1|0;e.gW
=(-1);m=j+1|0;e.n3=m;e.dl=Bu(m*2|0);f=Bu(l);e.iE=f;GI(f,(-1));if(k>0)e.kd=Bu(k);GI(e.dl,(-1));Vw(e,a,i,g);h.ce=e;e.eP=1;n=0;m=0;if(!H(a)){f=O(Bw,1);f.data[0]=C(5);}else{while(true){l=H(h.h2);if(!WL(h))l=h.jI;e=h.ce;if(e.dR>=0&&Yc(e)==1){e=h.ce;e.dR=H6(e);if(H6(h.ce)==Z0(h.ce)){e=h.ce;e.dR=e.dR+1|0;}g=h.ce.dR;g=g<=l&&LD(h,g)?1:0;}else g=LD(h,h.hN);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Bv(b,OR(a,m,ABg(h)));m=X2(h);n=g;}a:{Bv(b,OR(a,m,H(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(H(Bp(b,g)))break a;E7(b,
g);}}if(g<0)g=0;f=GZ(b,O(Bw,g));}return f;}
function AFe(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Be(H(a),H(b));e=0;while(true){if(e>=d){c=H(a)-H(b)|0;break a;}c=I(a,e)-I(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function ALO(){AQa=B1(0);AQb=AFP();AQc=new Rx;}
var FJ=F(FO);
var Gu=F(FJ);
var Yu=F(Gu);
var Ea=F();
function FB(){Ea.call(this);this.bb=0;}
var AQe=null;var AQf=null;function ALu(a){var b=new FB();XQ(b,a);return b;}
function XQ(a,b){a.bb=b;}
function J_(b){return (Mi(APm(20),b,10)).ei();}
function IC(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new CU;Br(b,C(6));J(b);}d=H(b);if(0==d){b=new CU;Br(b,C(7));J(b);}if(c>=2&&c<=36){a:{e=0;switch(I(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new CU;W(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=NQ(I(b,f));if(i<0){j=new CU;k=B9(b,0,d);b=new R;T(b);K(K(b,C(8)),k);Br(j,S(b));J(j);}if(i>=c){j=new CU;l=B9(b,0,d);b=new R;T(b);K(K(Bk(K(b,C(9)),c),C(10)),l);Br(j,S(b));J(j);}g=V(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new CU;k=B9(b,0,d);b=new R;T(b);K(K(b,C(11)),k);Br(j,S(b));J(j);}b=new CU;j=new R;T(j);Bk(K(j,C(12)),c);Br(b,S(j));J(b);}
function Ct(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AQf===null){AQf=O(FB,256);c=0;while(true){d=AQf.data;if(c>=d.length)break a;d[c]=ALu(c-128|0);c=c+1|0;}}}return AQf.data[b+128|0];}return ALu(b);}
function AMM(a,b){if(a===b)return 1;return b instanceof FB&&b.bb==a.bb?1:0;}
function Mz(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Hv(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AG6(a,b){b=b;return BF(a.bb,b.bb);}
function AAA(){AQe=E($rt_intcls());}
function FD(){var a=this;B.call(a);a.J=null;a.E=0;}
function AQg(){var a=new FD();T(a);return a;}
function APm(a){var b=new FD();Fp(b,a);return b;}
function T(a){Fp(a,16);}
function Fp(a,b){a.J=B1(b);}
function Mi(a,b,c){return YF(a,a.E,b,c);}
function YF(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Co(a,b,b+1|0);else{Co(a,b,b+2|0);f=a.J.data;g=b+1|0;f[b]=45;b=g;}a.J.data[b]=Gs(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=V(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Co(a,b,b+i|0);if(e)e=b;else{f=a.J.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.J.data;b=e+1|0;f[e]=Gs($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function Zq(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BF(c,0.0);if(!d){if(1.0/c===Infinity){Co(a,b,b+3|0);e=a.J.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Co(a,b,b+4|0);e=a.J.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.J.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.J.data;d=b+1|0;e[b]=45;}e=a.J.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AQh;Zj(c,f);d=f.jO;g=f.jq;h=f.nd;i=1;j=1;if(h)j=2;k=9;l=ALe(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Ba(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Co(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.J.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.J.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.J.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.J.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function ALe(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function BY(a,b){return a.ll(a.E,b);}
function Vn(a,b,c){Co(a,b,b+1|0);a.J.data[b]=c;return a;}
function IH(a,b){var c,d;c=a.J.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.J=Mt(a.J,d);}
function S(a){return DM(a.J,0,a.E);}
function U$(a,b,c,d){return a.kR(a.E,b,c,d);}
function LT(a,b,c,d,e){var f,g,h,i;Co(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.J.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Hw(a,b){return a.jU(b,0,b.data.length);}
function Co(a,b,c){var d,e,f,g;d=a.E;e=d-b|0;a.g7((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.J.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.E=a.E+(c-b|0)|0;}
var G6=F(0);
var R=F(FD);
function APa(){var a=new R();AMy(a);return a;}
function AMy(a){T(a);}
function K(a,b){var c;c=a.E;if(b===null)b=C(13);Lb(a,c,b);return a;}
function DK(a,b){Lb(a,a.E,b);return a;}
function Bk(a,b){Mi(a,b,10);return a;}
function FE(a,b){var c,d,e,f,g,h,i,j;c=a.E;d=1;if(ANX(b,AAk)){d=0;b=AOE(b);}a:{if(Hs(b,BH(10))<0){if(d)Co(a,c,c+1|0);else{Co(a,c,c+2|0);e=a.J.data;f=c+1|0;e[c]=45;c=f;}a.J.data[c]=Gs(XW(b),10);}else{g=1;h=BH(1);i=KD(BH(-1),BH(10));b:{while(true){j=AIm(h,BH(10));if(Hs(j,b)>0){j=h;break b;}g=g+1|0;if(Hs(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Co(a,c,c+g|0);if(d)f=c;else{e=a.J.data;f=c+1|0;e[c]=45;}while(true){if(AEA(j,AAk))break a;e=a.J.data;c=f+1|0;e[f]=Gs(XW((KD(b,j))),10);b=WK(b,j);j=KD(j,BH(10));f=c;}}}return a;}
function Wo(a,b){BY(a,b);return a;}
function GG(a,b){Lb(a,a.E,!b?C(14):C(15));return a;}
function AA5(a,b,c){var d,e,f,g,h,i;d=BF(b,c);if(d<=0){e=a.E;if(b<=e){if(d){f=e-c|0;a.E=e-(c-b|0)|0;g=0;while(g<f){h=a.J.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Go;W(i);J(i);}
function T4(a,b){var c,d,e,f;if(b>=0){c=a.E;if(b<c){c=c-1|0;a.E=c;while(b<c){d=a.J.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Go;W(f);J(f);}
function AG3(a,b,c,d,e){LT(a,b,c,d,e);return a;}
function AEt(a,b,c,d){U$(a,b,c,d);return a;}
function W4(a){return a.E;}
function GM(a){return S(a);}
function AG$(a,b){IH(a,b);}
function AHz(a,b,c){Vn(a,b,c);return a;}
function Lb(a,b,c){var d,e,f;if(b>=0&&b<=a.E){a:{if(c===null)c=C(13);else if(DU(c))break a;IH(a,a.E+H(c)|0);d=a.E-1|0;while(d>=b){a.J.data[d+H(c)|0]=a.J.data[d];d=d+(-1)|0;}a.E=a.E+H(c)|0;d=0;while(d<H(c)){e=a.J.data;f=b+1|0;e[b]=I(c,d);d=d+1|0;b=f;}}return a;}c=new Go;W(c);J(c);}
var E$=F(Gu);
var ZE=F(E$);
function AQi(a){var b=new ZE();ADz(b,a);return b;}
function ADz(a,b){Br(a,b);}
var Yh=F(E$);
function AQj(a){var b=new Yh();ADN(b,a);return b;}
function ADN(a,b){Br(a,b);}
var RW=F(0);
var C3=F(0);
function CZ(b,c){if(b!==null)b.eG();return c;}
var NL=F(0);
function HG(){var a=this;B.call(a);a.je=0;a.k1=0;a.j_=0;}
var AQk=0;function K3(a){AQk=AQk-1|0;}
function Jz(a,b,c){return Gd(a,b)+c|0;}
function Qe(){var a=this;HG.call(a);a.ha=null;a.c6=null;a.l7=null;}
function Fi(a){var b,c,d;b=a.c6;c=a.k1;d=a.j_;b.clearRect(0.0,0.0,c,d);}
function QL(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.c6;d="center";c.textAlign=d;break a;case 2:c=a.c6;d="right";c.textAlign=d;break a;default:break a;}d=a.c6;c="left";d.textAlign=c;}}
function CG(a,b){L2(a,b.mB);}
function L2(a,b){var c;if(a.l7!==b){c=a.c6;a.l7=b;c.font=b;}}
function Ej(a,b,c,d){var e,f,g;e=a.c6;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Gd(a,b){var c;c=$rt_ustr(b);return a.c6.measureText(c).width;}
function AC5(){return {alpha:false};}
var WH=F();
var BK=F(0);
function I5(b){return b;}
var BZ=F(0);
var O3=F();
function AGS(a,b){var c,d,e,f,g,h,i,j;c=$rt_globals.fetch("fileList.txt");d=new RA;c=c.then(Bi(d,"f"));d=new RC;e=new RB;c.then(Bi(d,"f"),Bi(e,"f"));if((C2()).getElementById("codeEdit")===null)CE(D2(),C(16));else{f=new Ro;g=new Ty;g.ot=f;f.qU=g;g=new Tw;g.uh=f;f.lG=g;d=new Tx;d.qN=f;f.ta=new $rt_globals.ResizeObserver(Bi(d,"f"));g=new Tv;g.nO=f;f.mr=g;f.hO=1;g=new Q1;d=new SK;AA3(d);g.iV=d;d=new NV;e=null;TL(d);d.w6=e;d.iK=AQl;g.o8=d;BT(d);e=new Q7;e.ra=d;g.t$=e;g.lh=b;h=b.length;i=0;while(i<h){d=b[i];j=new Q8;j.p$
=g;j.p9=i;e=Bi(j,"f");d.onmessage=e;d=b[i];e=YK();d.postMessage(e);i=i+1|0;}g.gk=0;g.j3=Bu(h);g.jA=Bu(h);f.lp=g;f.mj=(C2()).getElementById("codeEdit");g=WT();b=0;g.tabIndex=b;e=g.style;e.setProperty("width","100%");e.setProperty("height","100%");e.setProperty("outline","none");f.dm=g;f.mj.appendChild(g);b=f.dm;g=AI$(!!0,!!0,!!1,!!1);d=b.getContext("webgl2",g);if(d===null)Xw(C(2),C(17));else{f.kS=AOg(f.dm,f.lG);b=new Tp;c=f.lG;ZB(b,d,new Sy,1);b.w4=new Sx;b.wn=c;f.fA=b;AJ5(f.ta,f.dm,AB$());g=$rt_globals.window;c
=f.mr;g.addEventListener("resize",Bi(c,"handleEvent"));c=new Lq;b=f.fA;g=f.kS.b5;c.iY=b;c.ci=g;c.kL=f;b=AO6(c);AP4=b;f.eV=b;RJ(f);}AP5=f;S_(f);}}
var YX=F();
var J9=F();
var AQm=null;var AQn=null;function GN(){if(AQm===null)AQm=AIh(AQo,0);return AQm;}
function D2(){if(AQn===null)AQn=AIh(AQp,0);return AQn;}
function AOx(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Kd(b)&&(e+f|0)<=Kd(d)){a:{b:{if(b!==d){g=Hj(Bt(b));h=Hj(Bt(d));if(g!==null&&h!==null){if(g===h)break b;if(!G3(g)&&!G3(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fn;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ZA(n.constructor,o)?1:0)){Js(b,c,d,e,j);b=new HM;W(b);J(b);}j=j+1|0;k=m;}Js(b,c,d,e,f);return;}if(!G3(g))break a;if(G3(h))break b;else break a;}b=new HM;W(b);J(b);}}Js(b,c,d,
e,f);return;}b=new HM;W(b);J(b);}b=new BS;W(b);J(b);}d=new FV;Br(d,C(18));J(d);}
function C7(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Kd(b)&&(e+f|0)<=Kd(d)){Js(b,c,d,e,f);return;}b=new BS;W(b);J(b);}
function Js(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function D1(){return Long_fromNumber(new Date().getTime());}
var AAm=F();
var JO=F(0);
function Dt(){var a=this;B.call(a);a.js=null;a.jC=null;}
var DE=F(0);
function Jo(){var a=this;Dt.call(a);a.cq=0;a.bP=null;a.co=0;a.uy=0.0;a.j2=0;}
function FS(){var a=new Jo();Ov(a);return a;}
function AFM(a,b){return O(FW,b);}
function Ov(a){var b;b=AA$(16);a.cq=0;a.bP=O(FW,b);a.uy=0.75;SS(a);}
function AA$(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Eg(a){var b;if(a.cq>0){a.cq=0;b=a.bP;Xm(b,0,b.data.length,null);a.co=a.co+1|0;}}
function SS(a){a.j2=a.bP.data.length*a.uy|0;}
function ID(a,b){return RE(a,b)===null?0:1;}
function S6(a){var b;b=new ST;b.p8=a;return b;}
function B7(a,b){var c;c=RE(a,b);if(c===null)return null;return c.cw;}
function RE(a,b){var c,d;if(b===null)c=QP(a);else{d=b.k7();c=O$(a,b,d&(a.bP.data.length-1|0),d);}return c;}
function O$(a,b,c,d){var e;e=a.bP.data[c];while(e!==null&&!(e.ig==d&&WP(b,e.cg))){e=e.cm;}return e;}
function QP(a){var b;b=a.bP.data[0];while(b!==null&&b.cg!==null){b=b.cm;}return b;}
function IU(a){var b;if(a.js===null){b=new N1;b.f_=a;a.js=b;}return a.js;}
function DH(a,b,c){var d,e,f,g;if(b===null){d=QP(a);if(d===null){a.co=a.co+1|0;d=SI(a,null,0,0);e=a.cq+1|0;a.cq=e;if(e>a.j2)S0(a);}}else{e=b.k7();f=e&(a.bP.data.length-1|0);d=O$(a,b,f,e);if(d===null){a.co=a.co+1|0;d=SI(a,b,f,e);e=a.cq+1|0;a.cq=e;if(e>a.j2)S0(a);}}g=d.cw;d.cw=c;return g;}
function SI(a,b,c,d){var e,f;e=new FW;VV(e,b,null);e.ig=d;f=a.bP.data;e.cm=f[c];f[c]=e;return e;}
function Yf(a,b){var c,d,e,f,g,h,i,j;c=AA$(!b?1:b<<1);d=O(FW,c);e=d.data;f=0;b=c-1|0;while(true){g=a.bP.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.ig&b;j=h.cm;h.cm=e[i];e[i]=h;h=j;}f=f+1|0;}a.bP=d;SS(a);}
function S0(a){Yf(a,a.bP.data.length);}
function WP(b,c){return b!==c&&!b.bq(c)?0:1;}
var X3=F();
function Xw(b,c){var d,e,f;d=(C2()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(C2()).getElementById($rt_ustr(b)).appendChild(d);}
function WT(){return (C2()).createElement("canvas");}
function AA9(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AI$(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ABB=F();
var L4=F();
function AIW(a,b){var c;c=new Bo;Br(c,$rt_str(b.message));J(c);}
var AAD=F();
function Eu(b){return $rt_str(b);}
var Gn=F(0);
var Rx=F();
var BS=F(Bo);
var Zn=F();
function Kd(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AQq());}return b.data.length;}
function ZZ(b,c){if(b===null){b=new FV;W(b);J(b);}if(b===E($rt_voidcls())){b=new BI;W(b);J(b);}if(c>=0)return AMi(b.fn,c);b=new V9;W(b);J(b);}
function AMi(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var FV=F(Bo);
var HM=F(Bo);
function CN(){B.call(this);this.jp=0;}
var AQr=null;var AQs=null;var AQt=null;var AQu=null;var AQv=null;var AQw=null;var AQx=null;var AQy=null;var AQz=null;var AQA=null;function AMU(a){var b=new CN();X_(b,a);return b;}
function X_(a,b){a.jp=b;}
function MF(b){var c,d;c=AQw.data;if(b>=c.length)return AMU(b);d=c[b];if(d===null){d=AMU(b);AQw.data[b]=d;}return d;}
function UY(b){var c,d;c=new Bw;d=B1(1);d.data[0]=b;Ij(c,d);return c;}
function KV(b){return b>=65536&&b<=1114111?1:0;}
function Cm(b){return (b&64512)!=55296?0:1;}
function CJ(b){return (b&64512)!=56320?0:1;}
function Vb(b){return !Cm(b)&&!CJ(b)?0:1;}
function GC(b,c){return Cm(b)&&CJ(c)?1:0;}
function D4(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function JA(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function KG(b){return (56320|b&1023)&65535;}
function Ey(b){return FU(b)&65535;}
function FU(b){if(AQu===null){if(AQx===null)AQx=ZS();AQu=Yp((AQx.value!==null?$rt_str(AQx.value):null));}return Rj(AQu,b);}
function D6(b){return FR(b)&65535;}
function FR(b){if(AQt===null){if(AQy===null)AQy=AAB();AQt=Yp((AQy.value!==null?$rt_str(AQy.value):null));}return Rj(AQt,b);}
function Rj(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BF(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function SP(b,c){if(c>=2&&c<=36){b=NQ(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function NQ(b){var c,d,e,f,g,h,i,j,k,l;if(AQs===null){if(AQz===null)AQz=Yx();c=(AQz.value!==null?$rt_str(AQz.value):null);d=AKx(ES(c));e=IO(d);f=Bu(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+L0(d)|0;j=j+L0(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AQs=f;}g=AQs.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BF(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Gs(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function FL(b){var c;if(b<65536){c=B1(1);c.data[0]=b&65535;return c;}return AOf([JA(b),KG(b)]);}
function Ce(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Vb(b&65535))return 19;if(AQv===null){if(AQA===null)AQA=ABs();d=(AQA.value!==null?$rt_str(AQA.value):null);e=O(Mc,16384);f=e.data;g=Eb(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<H(d)){m=Jr(I(d,l));if(m==64){l=l+1|0;m=Jr(I(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|V(c,Jr(I(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Jr(I(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AFa(k,k+i|0,KP(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AFa(k,k+i|0,KP(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AQv=CX(e,j);}e=AQv.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.qw)o=p+1|0;else{c=d.oJ;if(b>=c)return d.o1.data[b-c|0];c=p-1|0;}}return 0;}
function IA(b){a:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function FG(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ce(b)!=16?0:1;}
function Og(b){switch(Ce(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function PT(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Og(b);}return 1;}
function WG(){AQr=E($rt_charcls());AQw=O(CN,128);}
function ZS(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AAB(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function Yx(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ABs(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var DW=F(0);
var WM=F();
function Wq(b){return (C2()).getElementById($rt_ustr(b));}
function C2(){return $rt_globals.window.document;}
function AIx(a){return a.CY();}
function AK9(a,b){return a.Fr($rt_str(b));}
function AKU(a,b){a.Bp($rt_str(b));}
function AD9(a,b){return a.Ac($rt_str(b));}
function AB3(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AEn(a){return a.Fu();}
function AK3(a,b,c){return a.D0($rt_str(b),$rt_str(c));}
function AGO(a,b,c,d){a.v9($rt_str(b),Es(c,"handleEvent"),d?1:0);}
function ACT(a){return a.B2();}
function AJt(a){return !!a.F1();}
function ALN(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AH5(a){return a.BO();}
function AGn(a,b){a.DO($rt_str(b));}
function AIz(a){return !!a.A5();}
function ANf(a){return a.FD();}
function AHp(a){return $rt_ustr(a.xX());}
function ACK(a,b){return a.Cg(b?1:0);}
function AMN(a){return a.F0();}
function AGk(a,b,c){return a.Gv($rt_str(b),$rt_str(c));}
function AHY(a,b,c){return a.A3(b,c?1:0);}
function AMk(a,b,c){return !!a.E0($rt_str(b),$rt_str(c));}
function AB7(a){return a.DD();}
function AF7(a){return $rt_ustr(a.Hd());}
function AEy(a,b){return !!a.wv(b);}
function AFp(a,b){return a.H9($rt_str(b));}
function AGA(a,b,c){return a.CV($rt_str(b),$rt_str(c));}
function AHt(a){return a.yT();}
function ACW(a,b){return a.FA($rt_str(b));}
function AFo(a){return $rt_ustr(a.yd());}
function AJS(a){a.AY();}
function ABP(a,b){return a.GA($rt_str(b));}
function ALD(a,b){return a.BA($rt_str(b));}
function ADj(a,b){return a.AX($rt_str(b));}
function ALF(a){return $rt_ustr(a.y$());}
function ADs(a,b,c){return a.C3(b,c);}
function AJG(a,b){return a.xW(b);}
function AKm(a){return a.ED();}
function AI3(a,b,c){a.vK($rt_str(b),Es(c,"handleEvent"));}
function AIJ(a,b,c){return a.y_(b,c);}
function ALz(a){return !!a.EW();}
function AMS(a,b){return a.CP($rt_str(b));}
function AIM(a,b,c,d){a.u7($rt_str(b),Es(c,"handleEvent"),d?1:0);}
function AEp(a){return a.EI();}
function ADL(a,b,c){return a.Ce($rt_str(b),$rt_str(c));}
function ACu(a){return $rt_ustr(a.zu());}
function AMI(a){return a.yC();}
function AI2(a){return a.yY();}
function ACs(a){return a.E1();}
function AI4(a,b,c){a.wr($rt_str(b),Es(c,"handleEvent"));}
function AEf(a,b){return a.G0(b);}
function AFG(a,b){a.yi($rt_str(b));}
function AKt(a){return $rt_ustr(a.x3());}
var TF=F(0);
var YP=F();
function AFT(a,b){return a.zV(b);}
function AHK(a){return a.EY();}
function ME(){var a=this;B.call(a);a.oM=null;a.oN=null;a.oO=0;a.oP=null;a.oI=null;}
function AJF(a,b){var c,d,e,f,g;c=a.oM;d=a.oN;e=a.oO;f=a.oP;g=a.oI;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var N8=F(0);
var P$=F(0);
var PZ=F(0);
var RT=F(0);
var Va=F(0);
var SR=F(0);
var Xy=F();
function AI7(a,b,c){a.wr($rt_str(b),Es(c,"handleEvent"));}
function AG5(a,b,c){a.vK($rt_str(b),Es(c,"handleEvent"));}
function AF9(a,b,c,d){a.u7($rt_str(b),Es(c,"handleEvent"),d?1:0);}
function AC2(a,b){return !!a.wv(b);}
function AED(a,b,c,d){a.v9($rt_str(b),Es(c,"handleEvent"),d?1:0);}
var BI=F(Bo);
var Go=F(BS);
var Gz=F(0);
function FM(){var a=this;B.call(a);a.cg=null;a.cw=null;}
function AQB(a,b){var c=new FM();VV(c,a,b);return c;}
function VV(a,b,c){a.cg=b;a.cw=c;}
function AEd(a,b){var c,d;if(a===b)return 1;if(!HI(b,Gz))return 0;a:{b:{c:{d:{c=b;b=a.cg;if(b!==null){if(!b.bq(c.cg))break c;else break d;}if(c.cg!==null)break c;}b=a.cw;if(b!==null){if(!b.bq(c.cw))break c;else break b;}if(c.cw===null)break b;}d=0;break a;}d=1;}return d;}
function FW(){var a=this;FM.call(a);a.ig=0;a.cm=null;}
var Po=F(0);
var Nz=F(0);
function Ro(){var a=this;B.call(a);a.qU=null;a.lG=null;a.mj=null;a.dm=null;a.ta=null;a.mr=null;a.kS=null;a.fA=null;a.hO=0;a.v3=0;a.qr=null;a.eV=null;a.lp=null;}
function S_(a){a.dm.focus();}
function RJ(a){a.v3=$rt_globals.requestAnimationFrame(Bi(a.qU,"onAnimationFrame"));}
function IG(a){a.hO=1;}
function RH(a,b,c){var d,e;a.kS.dj=Cd(b,c);d=a.dm;e=b;d.width=e;d=a.dm;e=c;d.height=e;d=a.fA;Bn(d.da,b,c);e=d.Z;d=d.da;b=d.b;c=d.a;e.viewport(0,0,b,c);Lt(a.eV,a.fA.da,Jt(a));Ja(a.eV);}
function Ms(a){return $rt_globals.performance.now()/1000.0;}
function Jt(a){return $rt_globals.window.devicePixelRatio;}
function Uf(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ABb(b,0);else{c=new Vl;d=$rt_globals.window.showOpenFilePicker();e=new Vk;e.pr=b;e.pq=c;d.then(Bi(e,"f"),Bi(c,"f"));}}
function Ep(a,b,c,d){var e,f,g,h;e=a.lp;f=e.gk;if(f>0){g=e.j3.data;f=f-1|0;e.gk=f;J$(e,b,c,d,g[f]);}else{h=e.iV;e=new UH;e.rP=b;e.sC=c;e.ru=d;b=new Sp;b.ns=e;c=h.iU;b.so=c;if(c===null)h.jT=b;else c.rx=b;h.iU=b;h.bH=h.bH+1|0;h.hl=h.hl+1|0;}}
function UA(a,b,c,d,e){var f,g;f=a.lp;if(c>=f.lh.length)c=0;g=f.jA.data;g[c]=g[c]+1|0;J$(f,b,d,e,c);}
function ABx(b){var c;c=new U_;c.na=b;return c;}
var Ei=F(0);
var WD=F();
var Bh=F(0);
var WF=F();
var XR=F();
function YK(){return "ping";}
function ABr(b){return b===YK()?1:0;}
var WU=F();
var J6=F(0);
var RA=F();
function ACS(a,b){return b.text();}
var RC=F();
function AE1(a,b){var c,d,e,f,g,h,i,j;c=Wq(C(19));d=(ZI(b)).hC.data;e=d.length;f=0;while(f<e){g=d[f];if(!DU(g)){h=(C2()).createElement("button");i="fileButton";h.className=i;b=$rt_ustr(g);h.innerText=b;c.appendChild(h);j=new Tk;j.rk=g;h.addEventListener("click",Bi(j,"handleEvent"));}f=f+1|0;}}
var RB=F();
function AG9(a,b){AA9(b);}
var P5=F(0);
function Ty(){B.call(this);this.ot=null;}
function AGj(a,b){var c,d,e,f,g,h;c=b;b=a.ot;d=b.eV;c=c/1000.0;d=d.cx;e=d.d.f;if(Se(e)&&c-e.rj>0.03125?1:0){f=d.pg;g=d.d.f.b2;if(f!=g){d.pg=g;P9(d);}}RD(d);g=Sj((d.bj+d.xx|0)-d.vg|0,IT(d));f=d.bj==g?0:1;if(f)E8(d,g);a:{e=d.cz;g=e.fu;if(c>e.gt)while(true){h=e.gt+e.jk;e.gt=h;e.fu=e.fu?0:1;if(c>h)continue;else break a;}}g=e.fu==g?0:1;g=!g&&!f&&!d.us?0:1;if(!(!g&&!b.hO)){d=b.fA.da;if(V(d.b,d.a)){b.hO=0;Ja(b.eV);}}RJ(b);}
function Tw(){B.call(this);this.uh=null;}
function CV(a){IG(a.uh);}
var O8=F(0);
function Tx(){B.call(this);this.qN=null;}
function AEJ(a,b,c){var d,e,f,g;c=a.qN;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dm){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Jt(c);RH(c,Gx(f.width*g),Gx(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];RH(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AAR=F();
function AB$(){return {box:'device-pixel-content-box'};}
function AJ5(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var B$=F(0);
function Tv(){B.call(this);this.nO=null;}
function AJQ(a,b){b=a.nO;Lt(b.eV,b.fA.da,Jt(b));Ja(b.eV);}
function Q1(){var a=this;B.call(a);a.iV=null;a.lh=null;a.o8=null;a.j3=null;a.jA=null;a.mP=0;a.gk=0;a.t$=null;}
function J$(a,b,c,d,e){var f,g,h,i,j,k;d=d.data;f=a.mP+1|0;a.mP=f;g=a.o8;h=Ct(f);g.g$=KX(g,g.g$,h);h=SX(g,h);Lr(h,b);Lr(h,b);g.iP=g.iP+1|0;b=a.lh[e];i=d.length;g=new $rt_globals.Array(i+2|0);h=f;0;g[0]=h;c=$rt_ustr(c);1;g[1]=c;h=new $rt_globals.Array();j=0;while(j<i){c=d[j];if(c instanceof Bw)k=$rt_ustr(c);else if(HI(c,$rt_arraycls($rt_bytecls())))k=c.data.buffer;else if(HI(c,$rt_arraycls($rt_charcls())))k=c.data.buffer;else if(HI(c,$rt_arraycls($rt_intcls())))k=c.data.buffer;else{if(!(c instanceof JQ)){b=new BI;c
=Bt(c);if(c.jw===null)c.jw=$rt_str(c.fn.$meta.name);h=c.jw;c=new R;T(c);K(K(c,C(20)),h);Br(b,S(c));J(b);}c=c;k=c.hm;if(k===null)k=c.hX;}f=j+2|0;f;g[f]=k;if(k instanceof $rt_globals.ArrayBuffer?1:0)h.push(k);j=j+1|0;}b.postMessage(g,h);}
var K4=F(0);
var RM=F(0);
var SL=F(0);
var FI=F();
function Iv(){FI.call(this);this.uH=null;}
function Ye(){var a=this;Iv.call(a);a.wG=0;a.j4=0;a.hY=null;a.jr=null;a.r_=null;}
function AIh(a,b){var c=new Ye();ALQ(c,a,b);return c;}
function ALQ(a,b,c){a.uH=b;b=new R;T(b);a.hY=b;a.jr=B1(32);a.wG=c;AFf();a.r_=AQC;}
function RR(a,b,c,d){var e,$$je;e=a.uH;if(e===null)a.j4=1;if(!(a.j4?0:1))return;a:{try{e.jj(b,c,d);break a;}catch($$e){$$je=ET($$e);if($$je instanceof St){}else{throw $$e;}}a.j4=1;}}
function M1(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$$je;e=b.data;d=d-c|0;f=new P0;g=e.length;d=c+d|0;TU(f,g);f.cl=c;f.d1=d;f.s7=0;f.xF=0;f.p_=b;e=Eb(Ba(16,Be(g,1024)));d=e.data.length;h=new UR;i=0+d|0;TU(h,d);AGz();h.wc=AQD;h.pB=0;h.rm=e;h.cl=0;h.d1=i;h.wf=0;h.mi=0;j=a.r_;k=new Ob;b=Eb(1);l=b.data;l[0]=63;AL8();m=AQE;k.k0=m;k.ka=m;c=l.length;if(c&&c>=k.lN){k.u6=j;k.pj=b.f0();k.wA=2.0;k.lN=4.0;k.oD=B1(512);k.nl=Eb(512);j=AQF;if(j===null){m=new BI;Br(m,C(21));J(m);}k.k0=j;k.ka=j;while(k.hU!=3){k.hU=2;a:{while(true)
{try{j=WY(k,f,h);}catch($$e){$$je=ET($$e);if($$je instanceof Bo){j=$$je;m=new R8;m.kW=1;m.lH=1;m.pW=j;J(m);}else{throw $$e;}}if(j.g0?0:1){c=Ez(f);if(c<=0)break a;j=J3(c);}else if(KK(j))break;m=!UP(j)?k.k0:k.ka;b:{if(m!==AQF){if(m===AQG)break b;else break a;}c=Ez(h);b=k.pj;d=b.data.length;if(c<d){j=AQH;break a;}US(h,b,0,d);}n=f.cl;c=j.g0!=2?0:1;if(!(!c&&!UP(j)?0:1)){j=new DS;W(j);J(j);}Q9(f,n+j.np|0);}}n=KK(j);RR(a,e,0,h.cl);MZ(h);if(!n){while(true){d=k.hU;if(d!=2&&d!=4){j=new Dg;W(j);J(j);}j=AQI;if(j===j)k.hU
=3;n=KK(j);RR(a,e,0,h.cl);MZ(h);if(!n)break;}return;}}j=new Dg;W(j);J(j);}m=new BI;Br(m,C(22));J(m);}
function CE(a,b){var c,d,e,f,g,h,i,j;BY(DK(a.hY,b),10);b=a.hY;c=b.E;d=a.jr;if(c>d.data.length)d=B1(c);e=0;f=0;if(e>c){b=new BS;Br(b,C(23));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.J.data;j=e+1|0;g[f]=i[e];f=h;e=j;}M1(a,d,0,c);a.hY.E=0;}
function FA(){FI.call(this);this.wo=null;}
function V2(a){a.wo=Eb(1);}
var Jx=F(FA);
var AQp=null;function AE2(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function ABC(){var b;b=new Jx;V2(b);AQp=b;}
var T5=F(0);
function ABH(a,b){var c;c=a.bQ();while(c.b$()){b.m(c.bJ());}}
var Ft=F(0);
function S5(a){var b,c;b=new QY;c=new O0;c.oH=a;b.se=c;return b;}
function AGQ(a,b){var c,d;c=a.bQ();d=0;while(c.b$()){if(b.cZ(c.bJ())){c.j7();d=1;}}return d;}
var En=F();
function AA3(a){}
function DP(a){return a.cr()?0:1;}
function GZ(a,b){var c,d,e,f,g,h;c=b.data;d=a.j;e=c.length;if(e<d)b=ZZ(Hj(Bt(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BM(a);while(BN(f)){g=b.data;h=e+1|0;g[e]=BP(f);e=h;}return b;}
function AKL(a,b){var c;c=a.bQ();while(c.b$()){if(BB(c.bJ(),b)){c.j7();return 1;}}return 0;}
function FZ(a,b){var c,d;c=0;d=b.bQ();while(d.b$()){if(!a.q3(d.bJ()))continue;c=1;}return c;}
var Jw=F(0);
var If=F(0);
function D8(){En.call(this);this.bH=0;}
function AJ9(a,b){a.lF(a.cr(),b);return 1;}
function BM(a){var b;b=new Mo;b.f$=a;b.lo=a.bH;b.hW=a.cr();b.fC=(-1);return b;}
function AJn(a,b,c){var d,e;if(b>=0&&b<=a.cr()){if(c.dC())return 0;d=c.bQ();while(d.b$()){e=b+1|0;a.lF(b,d.bJ());b=e;}return 1;}c=new BI;W(c);J(c);}
function ALv(a,b,c){c=new DS;W(c);J(c);}
function I$(a,b){var c,d;c=a.cr();d=0;while(true){if(d>=c)return (-1);if(BB(b,a.kD(d)))break;d=d+1|0;}return d;}
function AIj(a,b){var c,d;if(!HI(b,If))return 0;c=b;if(a.j!=c.j)return 0;d=0;while(d<c.j){if(!BB(Bp(a,d),Bp(c,d)))return 0;d=d+1|0;}return 1;}
var KS=F(D8);
var Lw=F(0);
var Vx=F(0);
function SK(){var a=this;KS.call(a);a.jT=null;a.iU=null;a.hl=0;}
var Vu=F(0);
var LY=F(0);
function NV(){var a=this;Dt.call(a);a.g$=null;a.iK=null;a.w6=null;a.iP=0;}
function AAZ(a,b){var c;c=SX(a,b);if(c===null)return null;a.g$=I2(a,a.g$,b);a.iP=a.iP+1|0;return c.hR;}
function SX(a,b){var c,d;c=a.g$;while(true){if(c===null)return null;d=IB(a.iK,b,c.ic);if(!d)break;c=d>=0?c.bN:c.bw;}return c;}
function KX(a,b,c){var d,e;if(b===null){b=new Ix;d=null;b.ic=c;b.hR=d;b.e0=1;b.e_=1;return b;}e=IB(a.iK,c,b.ic);if(!e)return b;if(e>=0)b.bN=KX(a,b.bN,c);else b.bw=KX(a,b.bw,c);DX(b);return IN(b);}
function I2(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=IB(a.iK,c,b.ic);if(d<0)b.bw=I2(a,b.bw,c);else if(d>0)b.bN=I2(a,b.bN,c);else{e=b.bN;if(e===null)return b.bw;f=b.bw;g=O(Ix,e.e0).data;h=0;while(true){b=e.bw;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bN;while(h>0){h=h+(-1)|0;j=g[h];j.bw=b;DX(j);b=IN(j);}e.bN=b;e.bw=f;DX(e);b=e;}DX(b);return IN(b);}
var AAM=F();
function BB(b,c){if(b===c)return 1;return b!==null?b.bq(c):c!==null?0:1;}
function BT(b){if(b!==null)return b;b=new FV;Br(b,C(5));J(b);}
function Q7(){B.call(this);this.ra=null;}
function Q8(){var a=this;B.call(a);a.p$=null;a.p9=0;}
function AB6(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.p$;d=a.p9;ABr(b.data);e=c.jA.data;f=e[d];if(f>0)e[d]=f-1|0;else{g=c.iV;h=g.jT;if(h===null)i=null;else{i=h.rx;g.jT=i;if(i!==null)i.so=null;else g.iU=null;g.hl=g.hl-1|0;g.bH=g.bH+1|0;i=h.ns;}if(i!==null)J$(c,i.rP,i.sC,i.ru,d);else{e=c.j3.data;j=c.gk;c.gk=j+1|0;e[j]=d;}}c=c.t$;b=b.data;if(!ABr(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BI;W(b);J(b);}if(b.length<1){b=new BI;ZW(b);J(b);}g=Ct(b[0]);h=AAZ(c.ra,g);e=O(B,b.length-1|0);k=e.data;f=0;j=k.length;while
(f<j){l=f+1|0;g=b[l];k[f]=(typeof g==='string'?1:0)?Eu(I5(g)):(g instanceof $rt_globals.ArrayBuffer?1:0)?AN6(I5(g)):(g instanceof $rt_globals.File?1:0)?Zt(null,I5(g)):!(g instanceof $rt_globals.FileSystemFileHandle?1:0)?null:Zt(I5(g),null);f=l;}h.m(e);}}
function XL(){var a=this;B.call(a);a.b5=null;a.gu=null;a.wj=null;a.dj=null;}
function AOg(a,b){var c=new XL();ALq(c,a,b);return c;}
function ALq(a,b,c){var d,e,f,g;a.dj=null;a.gu=b;d=new OD;d.fw=Cq(O(Er,0));d.ux=Cq(O(Er,0));d.eN=Cq(O(Fu,0));d.ij=Cq(O(Hi,0));d.jF=Cq(O(Lg,0));d.lr=Cq(O(Jn,0));d.jW=Cq(O(IP,0));d.ly=Cq(O(Bh,0));d.jn=Cq(O(Bh,0));d.cM=c;a.b5=d;e=$rt_globals.window;f=O(C3,14);g=f.data;d=new Un;d.mX=a;g[0]=Cz(a,b,C(24),d);d=new Uo;d.rr=a;g[1]=Cz(a,b,C(25),d);d=new Up;d.oh=a;g[2]=Cz(a,b,C(26),d);d=new Uq;d.ud=a;g[3]=Cz(a,b,C(27),d);d=new Ur;d.qG=a;g[4]=Cz(a,b,C(28),d);d=new Us;d.nn=a;g[5]=Cz(a,b,C(29),d);d=new Ut;d.uq=a;g[6]=Cz(a,
b,C(30),d);d=new Uu;d.qP=a;g[7]=Cz(a,b,C(31),d);d=new Uv;d.nC=a;g[8]=Cz(a,b,C(32),d);d=new Uw;d.tr=a;g[9]=Cz(a,b,C(33),d);d=new VR;d.sT=a;g[10]=Cz(a,b,C(34),d);d=new VS;d.rI=a;e.addEventListener("paste",Bi(d,"handleEvent"),!!1);g[11]=UO(a,e,C(35),d);d=new VT;d.l4=a;g[12]=Cz(a,e,C(36),d);d=new VU;d.tP=a;g[13]=Cz(a,e,C(37),d);c=new Pb;c.vE=f;a.wj=c;e=new Vs;e.o$=b;b.onpointerdown=Bi(e,"f");e=new Vt;e.nU=b;b.onpointerup=Bi(e,"f");}
function LV(){return (C2()).activeElement;}
function Cz(a,b,c,d){b.addEventListener($rt_ustr(c),Bi(d,"handleEvent"));return UO(a,b,c,d);}
function UO(a,b,c,d){var e;e=new O4;e.vc=b;e.ve=c;e.vd=d;return e;}
function R7(a,b){var c;c=new SZ;c.uc=b;return c;}
function D_(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gu.getBoundingClientRect();e=Cd(Gx((b.clientX-d.left)*c),Gx((b.clientY-d.top)*c));f=new Bq;g=a.dj;f.b=g.b;f.a=g.a;d=new Ln;Sv(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.u=e;d.uR=f;return d;}
function VX(a,b,c){var d,e,f,g;d=new NP;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Sv(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.jc=0;d.dO=e;d.bT=f;d.sd=c;d.wp=g;return d;}
function Dl(a,b){b.stopPropagation();b.preventDefault();}
function JX(){var a=this;B.call(a);a.qo=null;a.de=null;a.Z=null;a.kB=0;a.sm=null;a.vJ=0;a.wK=0;a.iR=null;a.xj=null;a.w3=null;a.wU=null;a.eR=null;a.fb=null;a.wV=null;a.uU=null;a.g4=null;a.xa=null;a.ow=null;a.da=null;a.tZ=null;a.kK=0;a.i8=0;a.lm=0;a.k9=0;a.hD=0;a.li=null;}
function ZB(a,b,c,d){var e,f,g,h,i,j;a.da=new Bq;a.kK=0;a.li=new Uy;a.qo=c;a.kB=d;e=$rt_str(b.getParameter(7938));f=new R;T(f);K(K(f,C(38)),e);$rt_globals.console.info($rt_ustr(S(f)));a.Z=b;a.de=Mm(c,4,4,1);g=ABW(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=B1(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;c=new O5;GJ();f=AQJ;c.dY=b;c.fS=f;c.q1=h.length/f.jR|0;c.tS=j.length;f
=b.createBuffer();c.mn=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);c.ue=null;f=b.createBuffer();c.tz=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}f=null;b.bindBuffer(34962,f);f=null;b.bindBuffer(34963,f);a.ow=c;a.wK=Jq(e,C(39));c=new O6;c.dA=b;a.sm=c;d=b.getParameter(3379);a.vJ=d;c=new R;T(c);Bk(K(c,C(40)),d);$rt_globals.console.info($rt_ustr(S(c)));g=O(CB,9);i=g.data;c=new T6;F_(c,b,C(41),C(42),AQJ);e=c.bn;c.tj=b.getUniformLocation(e,"uColor");a.iR=c;i[0]=c;c=
ANF(b);a.xj=c;i[1]=c;c=AOG(b);a.w3=c;i[2]=c;c=AO1(b);a.wU=c;i[3]=c;c=AOc(b);a.eR=c;i[4]=c;c=APh(b);a.fb=c;i[5]=c;c=AO$(b);a.wV=c;i[6]=c;c=AOW(b);a.uU=c;i[7]=c;c=AOX(b);a.g4=c;i[8]=c;a.xa=g;ABa(b,C(43));}
function EY(a,b,c,d){return Mm(a.qo,b,c,d);}
function DQ(a,b){var c;if(b==a.i8)return b;if(!b)a.Z.disable(3042);else{a.Z.enable(3042);a.Z.blendFuncSeparate(770,771,1,1);}c=a.i8;a.i8=b;return c;}
function Qm(a,b,c){S1(a,b.b,b.a,c);}
function S1(a,b,c,d){var e,f;e=d.b;f=d.a;a.k9=1;a.hD=1;d=a.li;d.qz=b;d.qB=c;d.qy=e;d.qx=f;Sw(a);}
function Kw(a){a.k9=0;a.hD=0;Sw(a);}
function Sw(a){var b,c,d,e,f,g;b=a.lm;c=a.k9;if(b!=c){a.lm=c;if(!c)a.Z.disable(3089);else a.Z.enable(3089);}if(a.lm&&a.hD){a.hD=0;d=a.Z;e=a.li;b=e.qz;c=a.da.a-e.qB|0;f=e.qx;c=c-f|0;g=e.qy;d.scissor(b,c,g,f);}}
function Hk(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.ow;c=a.kK;d=b.fS.rF;e=b.dY;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dY;h=b.mn;e.bindBuffer(34962,h);i=b.fS.lM.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dY;m=k.gB;n=k.eK;o=b.fS.jR*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.eK|0;j=j+1|0;}a:{e=b.ue;if(e!==null){c=0;b.dY.bindBuffer(34962,e);i=b.fS.qn.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dY;j=e.gB;p=e.eK;m=e.oE;n=b.fS.o5;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.eK|0;g=g+1|0;}}}q=b.tz;if(q===null){c=b.q1;if(c>0)b.dY.drawArrays(4,0,c);}else{b.dY.bindBuffer(34963,q);k=b.dY;g=b.tS;k.drawElements(4,g,5123,0);}a.kK=d;}
function BC(a,b,c,d,e){Hq(a,a.iR);H4(a.iR,a.Z,b,c,d,a.da);d=a.iR;Hr(a.Z,d.tj,e);Hk(a);}
function Eh(a,b,c,d,e,f,g,h,i){Hq(a,a.eR);H4(a.eR,a.Z,b,c,d,a.da);Sq(a.eR,a.Z,f);LJ(a.eR,a.Z,f,e);RN(a.eR,a.Z,g,h);d=a.eR;e=a.Z;d=d.om;e.uniform2f(d,i,0.0);Hk(a);}
function Ek(a,b,c,d,e,f,g,h){Hq(a,a.fb);H4(a.fb,a.Z,b,c,d,a.da);Sq(a.fb,a.Z,f);LJ(a.fb,a.Z,f,e);RN(a.fb,a.Z,g,h);Hk(a);}
function Gv(a){var b,c;b=new Iw;c=a.sm;b.eq=new Bq;b.d$=c;b.eA=c.dA.createTexture();AQK=AQK+1|0;return b;}
function Hq(a,b){var c,d;if(b!==a.tZ){c=a.Z;d=b.bn;c.useProgram(d);a.tZ=b;}}
function Tp(){var a=this;JX.call(a);a.wn=null;a.w4=null;}
function F8(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;a:{f=a.de;switch(e){case 1:break;case 2:g='italic ';break a;default:g='';break a;}g='oblique ';}h=g+d+' '+c+'px '+$rt_ustr(b);L2(f,h);g=f.c6.measureText("W");i=g.fontBoundingBoxAscent;j=g.fontBoundingBoxDescent;k=g.width;l=Gd(f,C(44));m=Gd(f,C(45));g=new JR;h=h;g.lq=b;g.vp=c;n=c|0;if(n!==c){b=new R;T(b);f=K(b,C(46));Zq(f,f.E,c);$rt_globals.console.info($rt_ustr(S(b)));}g.oz=n;g.vx=d;g.v0=e;g.d3=i;g.dF=j;g.vl=l;g.le=k;g.mB=h;g.qi=Dw(i);g.wX=Dw(g.dF);d=m*32.0|0;n
=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;b:{g.vt=d;switch(e){case 1:break;case 2:b=C(47);break b;default:b=C(48);break b;}b=C(49);}g.va=b;return g;}
function KC(){B.call(this);this.pn=null;}
function Ik(){var a=this;B.call(a);a.uQ=null;a.vM=null;}
function AAd(b){var c,d;if(DU(b))J(Yb(b));if(!AAf(I(b,0)))J(Yb(b));c=1;while(c<H(b)){a:{d=I(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AAf(d))break a;else J(Yb(b));}}c=c+1|0;}}
function AAf(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var K8=F(Ik);
var AQC=null;function AFf(){AFf=Bf(K8);AES();}
function AES(){var b,c,d,e,f;b=new K8;AFf();c=O(Bw,0);d=c.data;AAd(C(50));e=d.length;f=0;while(f<e){AAd(d[f]);f=f+1|0;}b.uQ=C(50);b.vM=c.f0();AQC=b;}
function OD(){var a=this;B.call(a);a.fw=null;a.ux=null;a.eN=null;a.ij=null;a.jF=null;a.lr=null;a.jW=null;a.ly=null;a.jn=null;a.cM=null;a.gQ=null;a.nL=0;}
function Sd(a,b){var c,d,e,f;CV(a.cM);c=(Cc(!b.sd?a.ux:a.fw)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].cZ(b);if(f)break;if(b.jc)break;e=e+1|0;}return f;}
function PH(a,b,c){var d,e,f;CV(a.cM);d=(Cc(a.lr)).data;e=d.length;f=0;while(f<e){if(Ko(d[f].n5,b,c))return 1;f=f+1|0;}return 0;}
function Un(){B.call(this);this.mX=null;}
function AJp(a,b){var c;c=a.mX;if(Sd(c.b5,VX(c,b,1)))Dl(c,b);}
function Uo(){B.call(this);this.rr=null;}
function AJz(a,b){var c;c=a.rr;if(Sd(c.b5,VX(c,b,0)))Dl(c,b);}
function Up(){B.call(this);this.oh=null;}
function AH3(a,b){var c,d,e,f,g,h,i;c=a.oh;if(c.dj!==null){a:{b:{d=D_(c,b);e=c.b5;CV(e.cM);f=e.gQ;if(f!==null)f.m(d);else{g=(Cc(e.eN)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].gM(d))break a;i=i+1|0;}}}}Dl(c,b);}}
function Uq(){B.call(this);this.ud=null;}
function AHw(a,b){var c,d,e,f,g,h;c=a.ud;b.button;if(c.dj!==null)a:{d=D_(c,b);c=c.b5;e=b.button;CV(c.cM);if(c.gQ===null){f=(Cc(c.eN)).data;g=f.length;h=0;while(h<g){b=f[h].gG(d,e);if(b!==null){c.gQ=b;c.nL=e;break a;}h=h+1|0;}}}}
function Ur(){B.call(this);this.qG=null;}
function AHR(a,b){var c,d,e,f,g,h,i;c=a.qG;b.button;if(c.dj!==null){d=D_(c,b);e=c.b5;f=b.button;CV(e.cM);if(f==e.nL&&e.gQ!==null)e.gQ=null;g=(Cc(e.eN)).data;h=g.length;i=0;a:{while(i<h){if(g[i].gK(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Dl(c,b);}}
function Us(){B.call(this);this.nn=null;}
function AJ1(a,b){var c,d,e,f,g,h,i,j,k;c=a.nn;if(c.dj!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.b5;f=D_(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;CV(e.cM);i=(Cc(e.ij)).data;j=i.length;k=0;b:{while(k<j){if(i[k].gJ(f,d,h))break b;k=k+1|0;}}Dl(c,b);}}
function Ut(){B.call(this);this.uq=null;}
function AF8(a,b){var c,d,e,f,g,h,i,j;c=a.uq;if(c.dj!==null){d=D_(c,b);e=c.b5;f=b.button;g=b.detail;CV(e.cM);h=(Cc(e.eN)).data;i=h.length;j=0;a:{while(j<i){if(h[j].go(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Dl(c,b);}}
function Uu(){B.call(this);this.qP=null;}
function AM9(a,b){var c,d,e,f,g,h,i;c=a.qP;if(c.dj!==null){d=D_(c,b);e=c.b5;CV(e.cM);f=(Cc(e.jF)).data;g=f.length;h=0;a:{while(h<g){if(Y8(f[h],d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Dl(c,b);}}
function Uv(){B.call(this);this.nC=null;}
function AFn(a,b){var c,d,e;b=a.nC.b5;c=(Cc(b.jn)).data;d=c.length;e=0;while(e<d){c[e].t();e=e+1|0;}CV(b.cM);}
function Uw(){B.call(this);this.tr=null;}
function AKW(a,b){var c,d,e;b=a.tr.b5;c=(Cc(b.ly)).data;d=c.length;e=0;while(e<d){c[e].t();e=e+1|0;}CV(b.cM);}
function VR(){B.call(this);this.sT=null;}
function AMK(a,b){var c;c=a.sT;if(c.dj!==null)D_(c,b);}
function VS(){B.call(this);this.rI=null;}
function AHJ(a,b){var c,d,e,f,g,h,i,j,k;c=a.rI;if(LV()===c.gu){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cc(c.b5.jW)).data;if(0>=h.length)i=null;else{j=h[0].o3.cx;BT(j);i=new MX;TL(i);i.m2=j;}if(i!==null){j=c.b5.cM;k=new Mx;k.tF=i;k.tG=j;g.getAsString(Bi(k,"accept"));Dl(c,b);}}else{i=$rt_str(g.type);g=$rt_str(g.kind);j=new R;T(j);K(K(K(K(j,C(51)),i),C(52)),g);$rt_globals.console.info($rt_ustr(S(j)));}e=e+1|0;}}}
function VT(){B.call(this);this.l4=null;}
function AH7(a,b){var c;c=a.l4;if(LV()===c.gu&&PH(c.b5,R7(c,b),0))Dl(c,b);}
function VU(){B.call(this);this.tP=null;}
function AJI(a,b){var c;c=a.tP;if(LV()===c.gu&&PH(c.b5,R7(c,b),1))Dl(c,b);}
var Sl=F(0);
var Sy=F();
function Mm(a,b,c,d){var e,f,g,h;e=new Qe;e.je=d;AQk=AQk+1|0;e.k1=b;e.j_=c;f=(C2()).createElement("canvas");e.ha=f;g=b;f.width=g;f=e.ha;g=c;f.height=g;if(!d)g=e.ha.getContext("2d");else{f=e.ha;h=AC5();g=f.getContext("2d",h);}e.c6=g;f="#FFFFFF";g.fillStyle=f;return e;}
var Sx=F();
function AGU(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Lq(){var a=this;B.call(a);a.iY=null;a.ci=null;a.kL=null;}
var Ib=F();
var AQl=null;function IB(a,b,c){return b.iQ(c);}
function Y2(){AQl=new Ib;}
function AA4(){var a=this;B.call(a);a.gz=null;a.h1=null;a.gn=0;}
function Cq(a){var b=new AA4();AF4(b,a);return b;}
function AF4(a,b){a.gz=b;}
function Cs(a,b){var c,d,e;c=a.gn;d=a.gz;if(c==d.data.length)a.gz=CX(d,c+4|0);d=a.gz.data;e=a.gn;a.gn=e+1|0;d[e]=b;a.h1=null;}
function Cc(a){var b;b=a.h1;if(!(b!==null&&b.data.length==a.gn))a.h1=CX(a.gz,a.gn);return a.h1;}
var DI=F(0);
var Er=F(0);
var Fu=F(0);
var Hi=F(0);
var Lg=F(0);
var Jn=F(0);
var FT=F(0);
var IP=F(0);
function Pb(){B.call(this);this.vE=null;}
function Bq(){var a=this;B.call(a);a.b=0;a.a=0;}
function Cd(a,b){var c=new Bq();AEo(c,a,b);return c;}
function AEo(a,b,c){a.b=b;a.a=c;}
function Cp(a,b){a.b=b.b;a.a=b.a;}
function Bn(a,b,c){a.b=b;a.a=c;}
function AGJ(a,b){var c;a:{b:{if(a!==b){if(Bt(b)!==Bt(a))break b;if(!Hp(a,b))break b;}c=1;break a;}c=0;}return c;}
function Hp(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function Uy(){var a=this;B.call(a);a.qz=0;a.qB=0;a.qy=0;a.qx=0;}
var AAs=F();
var Xd=F(0);
function O6(){B.call(this);this.dA=null;}
function Kq(){var a=this;B.call(a);a.bn=null;a.wY=null;}
function Zs(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(53):C(54);g=$rt_str(b.getShaderInfoLog(e));h=new R;T(h);K(K(h,f),g);g=S(h);b.deleteShader(e);CE(GN(),g);CE(D2(),C(55));CE(D2(),d);CE(D2(),C(55));b=new Bo;Br(b,g);J(b);}
function CB(){var a=this;Kq.call(a);a.nB=null;a.pc=null;a.kV=null;}
function AQL(a,b,c,d){var e=new CB();F_(e,a,b,c,d);return e;}
function F_(a,b,c,d,e){var f,g,h,i,j,k;a.wY=e;f=Zs(b,35633,c);d=Zs(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bn=g;h=e.rh.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bn;k=c.gB;c=c.pl;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bn;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ABa(b,C(56));a.kV=new Bq;c=a.bn;a.nB=b.getUniformLocation(c,"uResolution");c=a.bn;a.pc=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bo;c=new R;T(c);K(K(c,C(57)),d);Br(b,S(c));J(b);}
function XY(a,b,c){var d,e,f;if(!Hp(a.kV,c)){Cp(a.kV,c);d=a.nB;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function H4(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.pc;b.uniform4f(e,i,l,h,j);XY(a,b,f);}
function T6(){CB.call(this);this.tj=null;}
function D$(){CB.call(this);this.qE=null;}
function ANF(a){var b=new D$();AGY(b,a);return b;}
function AQM(a,b){var c=new D$();J5(c,a,b);return c;}
function AQN(a,b,c){var d=new D$();Sf(d,a,b,c);return d;}
function AGY(a,b){J5(a,b,C(58));}
function J5(a,b,c){Sf(a,b,C(41),c);}
function Sf(a,b,c,d){GJ();F_(a,b,c,d,AQJ);c=a.bn;a.qE=b.getUniformLocation(c,"sDiffuse");}
function Sq(a,b,c){var d;d=a.qE;b.uniform1i(d,0);b.activeTexture(33984);c=c.eA;b.bindTexture(3553,c);}
var Yr=F(CB);
function AOG(a){var b=new Yr();AMg(b,a);return b;}
function AMg(a,b){GJ();F_(a,b,C(41),C(59),AQJ);}
function YI(){D$.call(this);this.u0=null;}
function AO1(a){var b=new YI();AJo(b,a);return b;}
function AJo(a,b){var c;J5(a,b,C(60));c=a.bn;a.u0=b.getUniformLocation(c,"uContrast");}
function Fq(){var a=this;D$.call(a);a.or=null;a.py=null;a.qW=null;}
function AQO(a,b,c){var d=new Fq();VE(d,a,b,c);return d;}
function VE(a,b,c,d){Sf(a,b,c,d);c=a.bn;a.or=b.getUniformLocation(c,"uTexTransform");c=a.bn;a.py=b.getUniformLocation(c,"uColor");c=a.bn;a.qW=b.getUniformLocation(c,"uBgColor");}
function RN(a,b,c,d){Hr(b,a.py,c);Hr(b,a.qW,d);}
function LJ(a,b,c,d){var e,f,g,h,i,j;c=c.eq;e=c.b;f=c.a;g=d.bk;h=e;g=g/h;i=d.bA;j=f;i=i/j;h=d.Y/h;j=d.bV/j;c=a.or;b.uniform4f(c,g,i,h,j);}
function ZH(){Fq.call(this);this.om=null;}
function AOc(a){var b=new ZH();AJW(b,a);return b;}
function AJW(a,b){var c;VE(a,b,C(61),C(62));c=a.bn;a.om=b.getUniformLocation(c,"uContrast");}
var ABj=F(Fq);
function APh(a){var b=new ABj();AER(b,a);return b;}
function AER(a,b){VE(a,b,C(61),C(63));}
function XA(){var a=this;D$.call(a);a.xD=null;a.xC=null;a.v2=null;}
function AO$(a){var b=new XA();AET(b,a);return b;}
function AET(a,b){var c,d;J5(a,b,C(64));c=a.bn;a.xD=b.getUniformLocation(c,"uColorB");d=a.bn;a.xC=b.getUniformLocation(d,"uColorF");d=a.bn;a.v2=b.getUniformLocation(d,"uContrast");}
function ZG(){var a=this;CB.call(a);a.vb=null;a.uN=null;a.uM=null;}
function AOW(a){var b=new ZG();AEV(b,a);return b;}
function AEV(a,b){var c;GJ();F_(a,b,C(41),C(65),AQJ);c=a.bn;a.vb=b.getUniformLocation(c,"uColor");c=a.bn;a.uN=b.getUniformLocation(c,"uPoints1");c=a.bn;a.uM=b.getUniformLocation(c,"uPoints2");}
function W_(){var a=this;CB.call(a);a.mq=null;a.qZ=null;a.ov=null;}
function AOX(a){var b=new W_();ADl(b,a);return b;}
function ADl(a,b){var c;GJ();F_(a,b,C(41),C(66),AQJ);c=a.bn;a.mq=b.getUniformLocation(c,"uColor");c=a.bn;a.qZ=b.getUniformLocation(c,"uBaseline");c=a.bn;a.ov=b.getUniformLocation(c,"uScaleHExp");}
function ZX(a,b,c,d,e){var f;f=a.qZ;b.uniform2f(f,c,d);Hr(b,a.ov,e);}
var QA=F(0);
var ABy=F(0);
function Hr(b,c,d){var e,f,g,h;e=d.bk;f=d.bA;g=d.Y;h=d.bV;b.uniform4f(c,e,f,g,h);}
function ABa(b,c){var d,e;d=b.getError();if(d){b=GN();e=new R;T(e);Bk(K(e,c),d);CE(b,S(e));}}
function O4(){var a=this;B.call(a);a.vc=null;a.ve=null;a.vd=null;}
function O5(){var a=this;B.call(a);a.dY=null;a.fS=null;a.mn=null;a.ue=null;a.tz=null;a.q1=0;a.tS=0;}
function Cg(){var a=this;B.call(a);a.u$=null;a.fQ=0;}
function C4(a,b,c){a.u$=b;a.fQ=c;}
function F3(){var a=this;Cg.call(a);a.rh=null;a.lM=null;a.qn=null;a.jR=0;a.o5=0;a.rF=0;}
var AQJ=null;var AQP=null;function GJ(){GJ=Bf(F3);AGu();}
function AGu(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new F3;c=O(Dz,2);d=c.data;AL5();d[0]=AQQ;d[1]=AQR;GJ();C4(b,C(67),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.lc.fQ){case 0:f=f+l.eK|0;h=h+1|0;break a;case 1:e=e+l.eK|0;g=g+1|0;break a;default:}}i=i|1<<l.gB;k=k+1|0;}b.rh=c;b.jR=e;b.o5=f;b.rF=i;c=O(Dz,g);m=c.data;b.lM=c;c=O(Dz,h);n=c.data;b.qn=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.lc.fQ){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}AQJ
=b;c=O(F3,1);c.data[0]=b;AQP=c;}
var J7=F(FA);
var AQo=null;function AGM(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Z1(){var b;b=new J7;V2(b);AQo=b;}
function Dz(){var a=this;Cg.call(a);a.pl=null;a.lc=null;a.eK=0;a.oE=0;a.gB=0;}
var AQQ=null;var AQR=null;var AQS=null;function AL5(){AL5=Bf(Dz);AFQ();}
function AOr(a,b,c,d,e,f,g){var h=new Dz();TY(h,a,b,c,d,e,f,g);return h;}
function TY(a,b,c,d,e,f,g,h){AL5();C4(a,b,c);a.pl=d;a.lc=e;a.eK=f;a.oE=g;a.gB=h;}
function AFQ(){var b;b=new Dz;AH0();TY(b,C(68),0,C(69),AQT,2,0,0);AQQ=b;b=AOr(C(70),1,C(71),AQT,2,0,1);AQR=b;AQS=G(Dz,[AQQ,b]);}
function AAl(){BI.call(this);this.u9=null;}
function Yb(a){var b=new AAl();ALl(b,a);return b;}
function ALl(a,b){W(a);a.u9=b;}
var Tz=F(DD);
var Xx=F();
var F7=F(Cg);
var AQU=null;var AQT=null;var AQV=null;function AH0(){AH0=Bf(F7);AEs();}
function AEO(a,b){var c=new F7();AAw(c,a,b);return c;}
function AAw(a,b,c){AH0();C4(a,b,c);}
function AEs(){var b;AQU=AEO(C(72),0);b=AEO(C(73),1);AQT=b;AQV=G(F7,[AQU,b]);}
var K6=F(0);
function Vs(){B.call(this);this.o$=null;}
function AKy(a,b){a.o$.setPointerCapture(b.pointerId);}
function Vt(){B.call(this);this.nU=null;}
function ADk(a,b){a.nU.releasePointerCapture(b.pointerId);}
function Gf(){var a=this;B.call(a);a.tU=0;a.cl=0;a.d1=0;a.ik=0;}
function TU(a,b){a.ik=(-1);a.tU=b;a.d1=b;}
function Ez(a){return a.d1-a.cl|0;}
function Fa(a){return a.cl>=a.d1?0:1;}
var QX=F(0);
var JT=F(Gf);
function Q9(a,b){var c,d,e;if(b>=0&&b<=a.d1){a.cl=b;if(b<a.ik)a.ik=0;return a;}c=new BI;d=a.d1;e=new R;T(e);BY(Bk(K(Bk(K(e,C(74)),b),C(75)),d),93);Br(c,S(e));J(c);}
var YD=F();
function WO(b){return Math.log(b);}
function ABA(b,c){return AHP(b,c);}
function AHP(b,c){return Math.pow(b,c);}
function Be(b,c){if(b<c)c=b;return c;}
function Ba(b,c){if(b>c)c=b;return c;}
function AMm(b,c){return Math.max(b,c);}
function IS(){var a=this;Gf.call(a);a.pB=0;a.rm=null;a.wc=null;}
function US(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.mi){e=new VO;W(e);J(e);}if(Ez(a)<d){e=new PC;W(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BS;j=new R;T(j);Bk(K(Bk(K(j,C(76)),h),C(77)),g);Br(i,S(j));J(i);}if(d<0){e=new BS;i=new R;T(i);K(Bk(K(i,C(78)),d),C(79));Br(e,S(i));J(e);}h=a.cl;k=h+a.pB|0;l=0;while(l<d){b=a.rm.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.cl=h+d|0;return a;}}b=b.data;e=new BS;d=b.length;i=new R;T(i);BY(Bk(K(Bk(K(i,C(80)),c),C(75)),d),41);Br(e,
S(i));J(e);}
function MZ(a){a.cl=0;a.d1=a.tU;a.ik=(-1);return a;}
function GU(){B.call(this);this.xg=null;}
var AQG=null;var AQF=null;var AQE=null;function AL8(){AL8=Bf(GU);AHL();}
function AA7(a){var b=new GU();AAa(b,a);return b;}
function AAa(a,b){AL8();a.xg=b;}
function AHL(){AQG=AA7(C(81));AQF=AA7(C(82));AQE=AA7(C(83));}
function I_(){var a=this;KC.call(a);a.mW=null;a.et=null;}
var Ny=F(0);
var Op=F(0);
function O7(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new Hf;c=new HF;d=new HT;AE7();IQ(d,AQW);K9(c,d,BA(AQX),BA(AQY),BA(AQZ),BA(AQX),BA(AQ0),BA(AQ1),BA(AQ2),BA(AQ3),BA(AQ4),BA(AQ5));S9();e=(AQ6.f0()).data;f=e.length;g=O(H1,f);h=g.data;i=0;while(i<f){h[i]=e[i].hk;i=i+1|0;}j=ZK(N(C(84)),N(C(85)),N(C(86)),N(C(87)));k=new Hl;l=new Hx;ACh();m=AQ7;Lc(l,m,AQ8,AQ9,AQ$,AQ_,m);Kk(k,l,AAE(),ABe(N(C(88)),N(C(89)),N(C(90))),AAE(),Wd(1,0.17499999701976776),ARa,ARb);H7(b,c,g,j,k,Wv(N(C(91)),N(C(92)),N(C(93)),N(C(94))));I0(a,b);}
var Tf=F(0);
function Wk(){var a=this;I_.call(a);a.cx=null;a.eU=null;}
function AO6(a){var b=new Wk();AMY(b,a);return b;}
function AMY(a,b){var c,d,e,f,g;a.pn=b;a.mW=IW(0,0,64,255,new B4);c=new SB;c.cB=new Bq;c.ju=Cq(O(HR,0));c.dU=new Bq;c.sV=new Bq;c.uJ=new B4;c.uK=new B4;d=b.iY;c.dt=d;e=b.kL;c.ge=e;c.cy=d.kB;d=new Qp;d.tf=e;c.c8=d;d=b.ci.jn;e=new OX;e.qC=c;Cs(d,e);d=b.ci.ly;e=new OV;e.t_=c;Cs(d,e);a.et=c;Cs(b.ci.fw,new QF);c=b.ci.fw;d=a.et;BT(d);e=new QE;e.nu=d;Cs(c,e);c=new P_;d=a.et;e=new U9;e.c4=Bz();c.dx=e;c.dT=d;f=new TS;f.b9=Bz();f.iH=ARc;f.cA=d;Cs(d.ju,f);c.bM=f;a.eU=c;d=AN9(a.et,c);a.cx=d;c=a.et;g=c.ge.dm!==(C2()).activeElement
?0:1;if(g)I1(c);c.ee=d;if(g)IE(c);Cs(b.ci.eN,a.eU);Cs(b.ci.ij,a.eU);Cs(b.ci.eN,a.cx);c=b.ci.fw;d=new Ol;d.vA=a;Cs(c,d);c=b.ci.fw;d=new Qb;e=a.cx;BT(e);f=new Oj;f.tE=e;e=null;d.mT=b.kL;d.pb=e;d.os=f;Cs(c,d);c=b.ci.lr;d=a.cx;BT(d);e=new Ok;e.n5=d;Cs(c,e);c=b.ci.jW;d=new MR;d.o3=a;Cs(c,d);c=b.ci.ij;d=new MS;d.um=a;Cs(c,d);b=b.ci.jF;c=new MQ;c.mE=a;Cs(b,c);O7(a);}
function PY(a,b){var c,d,e,f;c=a.et;if(c.cy==b)b=0;else{c.cy=b;IG(c.ge);b=1;}if(b){c=a.eU;d=BM(c.bM.b9);while(BN(d)){Kv(BP(d));}c=c.dx;b=0;while(true){d=c.c4;if(b>=d.j)break;(Bp(d,b)).K.gg=1;b=b+1|0;}c=a.cx;d=c.fe;b=c.bG.cy;d.lv=b;if(c.hd.je!=b)Pg(c);e=c.e7.data;b=e.length;f=0;while(f<b){d=e[f].bx;if(d!==null)d.f8=1;f=f+1|0;}IR(c.c7);Kg(c);}}
function Ja(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=a.pn.iY;c=a.mW;d=b.Z;e=c.bk;f=c.bA;g=c.Y;h=c.bV;d.clearColor(e,f,g,h);b.Z.clear(16384);Wc(a.cx);b=a.eU;c=b.dx;d=b.dT.dt;i=c.c4.j-1|0;while(i>=0){j=Bp(c.c4,i);j.N.jD(d);k=j.K;l=j.fx.hh;if(!Jl(k)){if(!Ug(k)&&!(!k.gg&&k.cJ!==null)){k.gg=0;Tg(k);m=k.em;f=(m.d3+m.dF+5.0)/10.0;n=Ck(k.eM,k.ir);m=d.de;o=k.em;p=k.ga;e=f*2.0;CG(m,o);q=n+Jz(m,p,e)|0;k.hy=q;q=Fh(0,q,k.o.b);if(q){m=EY(d,q,k.o.a,k.eM.cy);CG(m,k.em);o=k.ga;e=n;f=e+f;p=k.em;g=p.d3;Ej(m,o,f,e+g-(g+p.dF)
/16.0);o=k.cJ;if(o===null){o=Gv(d);k.cJ=o;}Em(o,m);K3(m);Cb(k.hq,0.0,0.0,Cf(k.cJ),Kn(k.cJ));}}m=l.q2;o=k.cJ;if(o===null)Oi(k,d,0,k.o.b,m);else{n=Cf(o);o=l.ti;if(k.eM.cy){p=k.D;q=p.b;r=p.a;p=k.cJ;Ek(d,q,r,p.eq,k.hq,p,o,m);}else{p=k.D;q=p.b;r=p.a;l=k.cJ;Eh(d,q,r,l.eq,k.hq,l,o,m,0.0);}q=k.o.b;if(n<q)Oi(k,d,n,q-n|0,m);}}DQ(d,1);n=Ck(j.bi,2.0);q=Jl(j.K);m=j.bi;o=m.dU;m=m.sV;r=q?0:j.K.o.a;p=j.N.o;Bn(m,p.b,p.a+r|0);XO(d,m,!q?j.K.D:j.N.D,j.fx.hh.ki, -n|0,o);m=j.N;Zx(d,m.o,m.D,n,r,NY(j.fx.hV,j.bi.bW),j.fx.hV.k8,o);i
=i+(-1)|0;}b=b.bM;if(!DP(b.b9)){DQ(b.cA.dt,1);n=0;while(true){c=b.b9;if(n>=c.j)break;AAW(Bp(c,n),b.cA);n=n+1|0;}}}
function Lt(a,b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=a.et;Cp(d.cB,b);if(d.bW!==c){d.bW=c;e=(Cc(d.ju)).data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];d.is=HX(d.cA,d.h6);h=BM(d.b9);while(BN(h)){OK(BP(h),d.is,d.cA);}g=g+1|0;}}}h=a.cx;d=new Bq;i=h.fe;RP(i.gV);j=i.gV;k=c>=0.5?c:0.25;l=k>=4.0?0.5:ABA(j.bV,ABA(k,ARd));Cb(j,j.bk/k,j.bA*k,AMm(j.Y*k,1.25),l);j=i.gV;k=j.bA;i.q_=k-(k|0)>=0.25?0.0:0.5;m=k+j.Y+1.5|0;i.t4=m;Bn(i.jz,0,m*2|0);Cp(h.U,d);Cp(h.cs,b);Rr(h,d,b,c);}
function I0(a,b){var c,d,e;BT(b);c=a.eU;c.gl=b;d=c.cD;if(d!==null)d.fx=b.fl;c=c.bM;d=b.fl;c.h6=b.ts;c.k$=d;d=BM(c.b9);while(BN(d)){Pm(BP(d),c.k$);}c=a.cx;c.ct=b;d=c.cz;e=b.bI.uo;Fe(d.dS.eQ,e);d=c.es;e=b.bI;F9(d,e.j6,e.ke);c=c.eu;b=b.bI;F9(c,b.j6,b.ke);}
var Zo=F(0);
function ZI(b){var c,d;c=b.length;d=new Mr;d.sv=b;return Wf(c,d);}
function PR(){var a=this;B.call(a);a.hC=null;a.vw=null;}
function Tk(){B.call(this);this.rk=null;}
function AKS(a,b){var c,d,e,f;b=a.rk;if(B7(AP8,b)!==null){c=new R;T(c);K(K(c,C(95)),b);$rt_globals.console.info($rt_ustr(S(c)));}else{AP6=b;c=B7(AP7,b);if(c!==null)Uk(c);else{c=new R;T(c);K(K(c,C(96)),b);$rt_globals.console.info($rt_ustr(S(c)));c=$rt_globals.fetch($rt_ustr(b));d=new OO;c=c.then(Bi(d,"f"));d=new OW;d.n2=b;e=new OY;c.then(Bi(d,"f"),Bi(e,"f"));}f=Wq(C(97));c=new R;T(c);K(K(c,C(98)),b);b=$rt_ustr(S(c));f.innerText=b;}}
var YS=F();
var IZ=F(JT);
function P0(){var a=this;IZ.call(a);a.xF=0;a.s7=0;a.p_=null;}
function JG(){var a=this;B.call(a);a.u6=null;a.pj=null;a.wA=0.0;a.lN=0.0;a.k0=null;a.ka=null;a.hU=0;}
function Ky(){var a=this;B.call(a);a.g0=0;a.np=0;}
var AQI=null;var AQH=null;function W6(a,b){var c=new Ky();XH(c,a,b);return c;}
function XH(a,b,c){a.g0=b;a.np=c;}
function KK(a){return a.g0!=1?0:1;}
function UP(a){return a.g0!=3?0:1;}
function J3(b){return W6(2,b);}
function XZ(){AQI=W6(0,0);AQH=W6(1,0);}
function P_(){var a=this;B.call(a);a.dT=null;a.dx=null;a.cD=null;a.bM=null;a.gl=null;}
function AJv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.dx;d=0;a:{while(true){e=c.c4;if(d>=e.j)break;b:{f=Bp(e,d);e=b.u;if(Dd(f.K,e))g=Dv(f.bi.c8,null);else{h=Ck(f.bi,7.0);i=Ck(f.bi,25.0);if(M5(f,e.b,h)){g=MB(f,e.b,i);if(N4(f,e.a,h)){g=Dv(f.bi.c8,KB(g,C(99)));break b;}if(Mu(f,e.a,h)){g=Dv(f.bi.c8,KB( -g|0,C(99)));break b;}}if(Um(f,e.a,h)){g=UV(f,e.a,i);if(VW(f,e.b,h)){g=Dv(f.bi.c8,KB(g,C(100)));break b;}if(LO(f,e.b,h)){g=Dv(f.bi.c8,KB( -g|0,C(100)));break b;}}g=0;}}c:{d:{if(!g){if(!Dd(f.N,b.u))break d;if(!f.N.gM(b)
&&!Dv(f.bi.c8,null))break d;}g=1;break c;}g=0;}if(g){g=1;break a;}d=d+1|0;}g=0;}e:{if(!g){c=a.bM;g=0;j=c.b9.j-1|0;f:{while(j>=0){e=Bp(c.b9,j);k=b.u;f=c.cA.c8;g=G_(e.b1,k);d=!g?(-1):Mv(e,k);h=e.hK;if(h!=d){if(h>=0){l=e.cb.data[h];l.f6=0;m=e.uP;if(m!==null)m.x1(k,h,l);}if(d>=0){k=e.cb.data[d];l=e.op;if(l!==null){m=l.ob;n=l.oc;l=l.od;R2(m,n);if(l!==null)k.jo.t();if(S3(k)){if(k.kw===null)Na(m,Yk(k,n),k.hZ,n);else UQ(m,Yk(k,n),k.hZ,n,k.kw);}}k.f6=1;}e.hK=d;}g=g&&Fl(f)?1:0;if(g)break f;j=j+(-1)|0;}}if(!g){g=0;break e;}}g
=1;}return g;}
function AMd(a,b,c,d){var e,f,g,h,i;e=a.dx;f=0;a:{while(true){g=e.c4;if(f>=g.j)break;b:{c:{h=Bp(g,f);if(!Dd(h.K,b.u)){if(!Dd(h.N,b.u))break c;if(!h.N.go(b,c,d))break c;}i=1;break b;}i=0;}if(i){c=1;break a;}f=f+1|0;}c=0;}d:{if(!c){g=a.bM.b9;d=g.j-1|0;i=1;if(d<0)i=0;else{g=Bp(g,d);c=Mv(g,b.u);if(c>=0){b=g.cb.data[c];if(!S3(b))b.jo.t();}}if(!i){c=0;break d;}}c=1;}return c;}
function AKn(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.bM;e=null;f=d.b9.j-1|0;a:{while(f>=0){e=Bp(d.b9,f);g=b.u;h=G_(e.b1,g);if(!h&&!Jb(e.b1)){e=e.sA;if(e!==null)Do(e.rn);}e=!h?null:ARe;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;e=a.dx;h=0;b:{while(true){g=e.c4;if(h>=g.j){g=null;break b;}c:{i=Bp(g,h);if(!c){d:{g=b.u;if(!Jl(i.K)&&Dd(i.K,g)){d=i.N.D;j=d.b;k=g.b;l=j-k|0;j=d.a;f=g.a;j=j-f|0;g=i.K.D;m=g.b-k|0;f=g.a-f|0;d=new Bq;g=new MD;g.mL=i;g.mM=m;g.mN=f;g.mO=d;g.mH=l;g.mJ=j;}else{j=Ck(i.bi,7.0);f=Ck(i.bi,
25.0);if(M5(i,g.b,j)){m=MB(i,g.b,f);if(N4(i,g.a,j)){g=HA(i,g,m,(-1));break d;}if(Mu(i,g.a,j)){g=HA(i,g,m,1);break d;}}if(Um(i,g.a,j)){f=UV(i,g.a,f);if(VW(i,g.b,j)){g=HA(i,g,(-1),f);break d;}if(LO(i,g.b,j)){g=HA(i,g,1,f);break d;}}g=null;}}if(g!==null)break c;}g=Dd(i.K,b.u)?ARe:i.N.gG(b,c);i=i.N;if(i===null)g=null;else if(g===null)g=!Dd(i,b.u)?null:ARe;}if(g!==null)break;h=h+1|0;}}return g;}
function AHg(a,b,c){var d,e,f,g,h;d=a.dx;e=0;a:{while(true){f=d.c4;if(e>=f.j)break;b:{c:{g=Bp(f,e);if(!Dd(g.K,b.u)){if(!Dd(g.N,b.u))break c;if(!g.N.gK(b,c))break c;}h=1;break b;}h=0;}if(h){c=1;break a;}e=e+1|0;}c=0;}return !c&&!Fr(a.bM)?0:1;}
function PJ(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r;f=null;g=d.d;h=Bz();i=c.j;j=0;while(j<i){if(f===null){k=(Bp(c,j)).X;l=Qx(EA(BG(g.f,k)));m=Rq(g.ck);}else{m=f.data;k=m[j].kp.j8;l=!BB(g.ck,m[j].ie)?C(5):Qx(EA(BG(g.f,k)));m=Rq(m[j].ie);}if(H(l)>153){l=B9(l,0,150);n=new R;T(n);K(K(n,l),C(101));l=S(n);}if(H(m)>153){n=B9(m,0,150);m=new R;T(m);K(K(m,n),C(101));m=S(m);}o=DY(k+1|0);if(f!==null){p=f.data;n=null;q=p[j];}else{q=null;n=Bp(c,j);}if(f!==null){p=new U7;p.pd=d;p.pe=q;}else{p=new U8;p.tJ=d;p.tI=n;}n=new Jd;n.q7
=p;n.hT=o;n.h4=l;n.fo=m;Bv(h,n);j=j+1|0;}r=GZ(h,ARf);if(a.cD!==null)RI(a);c=new Pc;l=a.dT;m=new O1;m.l0=a;m.l1=d;Ks(c);c.cF=new Bq;c.bz=new Bq;c.di=AHk();c.fY=new Bq;c.bO=ARf;c.dH=O(Hz,0);c.dg=0;c.dP=0;c.fh=0;c.eJ=0;c.ew=0;c.dI=ACP(0);c.gr=FS();c.bS=l;c.hL=m;c.uj=m;N0(c);R$(c);c.bO=r;d=a.gl;l=d.fl;d=d.t5;c.pG=l;c.sz=d;c.dz=null;c.dI=null;c.ed=0;R$(c);d=new SU;l=a.dT;d.N=ANs();d.bi=l;m=new TB;Ks(m);m.hq=new B4;m.eM=l;d.K=m;a.cD=d;d=new Ow;l=a.dT.c8;Ks(d);m=new M$;m.pE=d;d.nY=m;m=new M9;m.qD=d;d.sl=m;d.th=10.0;d.bl
=c;d.lC=l;c.fZ=d;l=a.gl.fl;m=l.n_;l=l.m5;d.t3=m;d.t0=l;h=d.cG;if(h!==null)F9(h,m,l);h=d.cN;if(h!==null)F9(h,m,l);l=a.cD;m=l.N;h=m.D;g=m.o;d=CZ(m,d);l.N=d;d.kN(h,g,l.bi.bW);d=a.cD;l=APa();K(K(l,C(102)),e);Ym(d,GM(l),a.gl.sS,4.0);Y1(a.cD,a.gl.fl);Wu(a.dx,a.cD);b=AAp(c,b,ABu(a.cD)+Ck(a.dT,2.0)|0);d=AA1(c,b);JU(a.cD,b,d);HP(a.dT,c);}
function RI(a){var b,c;b=a.dx;c=a.cD;TN(b.c4,c);b=a.cD;c=b.K;c.cJ=CZ(c.cJ,null);b.N=CZ(b.N,null);a.cD=null;}
function Pt(a,b){var c;c=new O9;c.mt=a;c.mu=b;return c;}
function AKF(a,b,c,d){var e,f,g,h;e=a.dx;f=0;a:{while(true){g=e.c4;if(f>=g.j)break;if((Bp(g,f)).N.gJ(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function Xz(b){var c;c=new VC;c.lW=b;return c;}
var GO=F(0);
function AIO(a){}
function AFh(a){}
var OF=F(0);
var OT=F(0);
function X9(){var a=this;B.call(a);a.U=null;a.cs=null;a.bG=null;a.L=null;a.it=null;a.us=0;a.lz=null;a.cz=null;a.kF=0;a.fg=0;a.iD=null;a.gD=null;a.bY=null;a.M=0;a.d=null;a.eo=null;a.ct=null;a.hd=null;a.e7=null;a.sX=0;a.qO=0;a.cp=0;a.bX=0;a.b6=0;a.ex=null;a.es=null;a.eu=null;a.gp=0;a.i2=0;a.hr=0;a.xx=0;a.vg=0;a.iJ=0;a.ia=0;a.kZ=0;a.dr=0;a.c7=null;a.ek=null;a.ez=0;a.by=0;a.uY=null;a.hb=null;a.v6=null;a.wT=null;a.vH=null;a.bj=0;a.fe=null;a.pg=0;a.nG=null;a.sH=null;}
function AN9(a,b){var c=new X9();AJ4(c,a,b);return c;}
function AJ4(a,b,c){var d,e,f,g,h;a.U=new Bq;a.cs=new Bq;a.us=0;a.lz=O(Bh,10);d=new Or;e=new Vm;f=new Bq;e.cH=f;e.bp=new Bq;e.eQ=new B4;e.hf=new B4;Bn(f,0,0);Bn(e.bp,2,20);d.dS=e;d.jk=0.5;d.gt=0.0;IW(187,187,187,255,e.eQ);a.cz=d;a.fg=16;a.iD=C(103);a.bY=O(JR,4);a.d=AD2(O(Bw,0),null,null);e=new Vd;e.oS=Cq(O(I8,0));e.up=Cq(O(I8,0));e.mf=Cq(O(Rw,0));e.tn=Cq(O(OQ,0));e.sW=Cq(O(Gb,0));e.sE=Cq(O(Ra,0));a.eo=e;a.e7=O(EK,0);a.ex=Cd(1,0);a.es=Tn();a.eu=Tn();a.gp=0;a.hr=1;a.iJ=1;a.ia=1;a.kZ=1;a.dr=3;a.c7=AMf();a.ek=C(104);a.ez
=0;a.by=0;e=D2();BT(e);f=new ML;f.wM=e;a.hb=f;a.bj=0;e=new MK;e.lY=a;a.nG=e;e=new MJ;e.p7=a;a.sH=e;a.bG=b;a.L=b.dt;a.it=c;c=new S8;g=a.bY;c.iF=new B4;c.fT=new Bq;c.jz=new Bq;e=new B4;c.gV=e;c.jB=g;RP(e);a.fe=c;g=a.lz.data;e=new MI;e.s6=a;g[0]=e;e=new MP;e.nA=a;g[1]=e;e=new MO;e.q9=a;g[2]=e;e=new MN;e.uA=a;g[3]=e;e=new MM;e.nf=a;g[4]=e;e=new MH;e.qq=a;g[5]=e;e=new MG;e.tx=a;g[6]=e;AB9();h=ARg===ARh?0:1;a.i2=h;c.k2=!h?0.0:0.5;c.lv=b.cy;}
function Rr(a,b,c,d){var e,f,g,h;a.cp=Cn(80.0,d);a.bX=Cn(1.0,d);a.b6=Cn(10.0,d);if(!a.by)Cp(a.bG.dU,a.U);else Bn(a.bG.dU,(b.b+c.b|0)-H_(a)|0,b.a);b=a.c7;e=a.bG.dU;f=H_(a);g=c.a;h=d;Cp(b.eS,e);Bn(b.ej,f,g);b.hQ=h;b=a.cz;f=Cn(2.0,d);b.dS.bp.b=f;PI(a,a.iD,a.fg);Kg(a);}
function AE9(a){a.kF=1;Kb(a);}
function ACy(a){a.kF=0;}
function Kb(a){var b;b=a.cz;b.gt=Ms(Fc(a))+b.jk*1.25;b.fu=1;}
function Pg(a){a.hd=CZ(a.hd,EY(a.L,1024,a.M,a.bG.cy));}
function H$(a,b,c){if(a.bG.bW!==0.0){PI(a,b,c);IG(Fc(a));}a.fg=c;a.iD=b;}
function PI(a,b,c){var d,e,f,g,h,i,j;d=Cn(c,a.bG.bW);e=a.gD;f=e!==null?e.oz:0;if(!(d==f&&BB(b,a.iD))){IR(a.c7);g=a.e7.data;c=g.length;f=0;while(f<c){Vy(g[f]);f=f+1|0;}g=a.d.f.v.data;c=g.length;f=0;while(f<c){DZ(g[f]);f=f+1|0;}g=a.bY.data;h=Gy(0,0);e=a.L;i=d;g[h]=F8(e,b,i,300,0);a.bY.data[Gy(0,1)]=F8(a.L,b,i,300,2);a.bY.data[Gy(1,0)]=F8(a.L,b,i,600,0);a.bY.data[Gy(1,1)]=F8(a.L,b,i,600,2);e=a.bY.data[Gy(0,0)];a.gD=e;c=Fk(e);f=Dw(c*1.25);a.M=f;e=a.fe;e.uL=f;g=a.bY.data;j=g[0];e.tR= -( -((f+j.d3+j.dF)/2.0)|0)|0;a.cz.dS.bp.a
=Fk(g[0]);Pg(a);f=a.M;h=U0(a.cz);e=new R;T(e);b=K(K(e,C(105)),b);BY(b,32);Bk(K(Bk(K(Bk(K(Bk(b,d),C(106)),c),C(107)),f),C(108)),h);$rt_globals.console.info($rt_ustr(S(e)));if(ARi){c=JC(a.bY.data[0],a.M);b=new R;T(b);Bk(K(b,C(109)),c);$rt_globals.console.info($rt_ustr(S(b)));}a.d.gj=FK(EW(a),a.d.s,a.L.de,a.bY);Ga(a);Kg(a);}}
function Lm(a){return V(Ci(a.d.f)+5|0,a.M);}
function IT(a){return Ba(Lm(a)-a.cs.a|0,0);}
function RL(a){return Ba(a.gp-C8(a)|0,0);}
function C8(a){var b;b=!a.by?0:CK(a)+a.b6|0;return Ba(1,(a.cs.b-a.cp|0)-b|0);}
function H_(a){return a.by?a.cp:a.cp-a.b6|0;}
function De(a){return a.cs.a;}
function E8(a,b){var c,d;c=Sj(b,IT(a));if(c!=a.bj){a.bj=c;a.d.i$=c/a.M;d=a.wT;if(d!==null)d.u_(c);}}
function HL(a,b){var c,d;c=Sj(b,RL(a));d=a.d;if(c!=d.cW){d.cW=c;d=a.v6;if(d!==null)d.u_(c);}}
function Wc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=HH(a.cs.a,a.M)+7|0;c=a.e7;if(c.data.length<b)a.e7=XB(b,c,a.fe,a.sX,a.qO,a.d.f);DQ(a.L,0);Qm(a.L,a.U,a.cs);d=(a.M-U0(a.cz)|0)/2|0;e=(a.d.gj-(RG(a.cz)/2|0)|0)-a.d.cW|0;f=!a.by?a.cp:(a.bX+a.b6|0)+CK(a)|0;g=a.cz;b=f+e|0;d=(d+V(a.d.n,a.M)|0)-a.bj|0;Bn(g.dS.cH,b,d);h=Ci(a.d.f);i=Ki(a);j=SV(a);a.sX=i;a.qO=j;k=!a.by?a.U.b+a.cp|0:((a.U.b+a.bX|0)+a.b6|0)+CK(a)|0;l=i;while(l<=j&&l<h){m=BG(a.d.f,l);g=TA(a,l);Wb(g,m,a.hd,a.L,a.M,C8(a),a.d.cW);n=g.bx;a.gp=Ba(a.gp,
Eq(m)+(40.0*a.bG.bW|0)|0);o=V(a.M,l)-a.bj|0;p=Cy(a)===null?null:(Cy(a)).data[l];d=a.U.a+o|0;m=a.L;f=C8(a);q=a.M;o=a.d.cW;r=a.ct;s=Zy(Z(a),l);if(s!==null){if(s.a==(-1))s.a=n.z;s.b=FK(n,s.b,a.L.de,a.bY);s.a=FK(n,s.a,a.L.de,a.bY);}t=a.d;Xo(g,d,k,m,f,q,o,r,s,t.gT,t.gC,t.n!=l?0:1,Cy(a)===null?0:1,p);l=l+1|0;}r=a.bG.dU;l=i;while(l<=j&&l<h&&a.iJ){g=TA(a,l);o=V(a.M,l)-a.bj|0;u=AAy(Z(a),l);t=a.ct.bI.pC;v=a.d.n==l&&Cy(a)===null?1:0;if(u)t=a.ct.bI.lt;else if(Cy(a)!==null&&l<(Cy(a)).data.length&&(Cy(a)).data[l]!==null)
{t=a.ct;t=J4(t.dB,t,(Cy(a)).data[l].jG);}else if(v)t=a.ct.bI.hA;Xv(g,a.L,k,a.U.a+o|0,a.M,r,a.d.cW,C8(a),t);l=l+1|0;}if(a.hr){q=Be(j+1|0,h);YZ(a,V(a.M,q)-a.bj|0);}ZU(a);Za(a,i,j);if(a.ia)ABm(a,i,j,h);if(a.kF&&e>=(( -RG(a.cz)|0)/2|0)){g=a.cz;t=a.cs;if(Xe(g.dS.cH,0,0,t))Z9(a.cz,a.L,a.U);}Zu(a);YJ(a);Kw(a.L);}
function ABm(a,b,c,d){var e,f,g,h,i,j;while(b<=c&&b<d){e=Cy(a)!==null&&b<(Cy(a)).data.length?(Cy(a)).data[b]:null;if(e!==null){f=a.ct;f=J4(f.dB,f,e.jG);}else f=Cy(a)!==null?a.ct.bI.fP:a.ct.bI.hA;if(!(a.d.n!=b&&e===null)){a.ex.b=!a.by?(a.b6-a.bX|0)-a.dr|0:((a.b6+CK(a)|0)+a.bX|0)-a.dr|0;g=a.ex;h=a.M;g.a=h;i=a.by?0:(a.cp-a.b6|0)+a.bX|0;h=V(h,b)-a.bj|0;e=a.L;j=a.U;BC(e,j.b+i|0,j.a+h|0,g,f);}b=b+1|0;}}
function Za(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;d=a.cs.a;e=Be(d,V(Ci(a.d.f),a.M)-a.bj|0);f=a.c7;g=a.bj;h=Cy(a)!==null?(-1):a.d.n;i=a.L;j=a.ct;Qm(i,f.eS,f.ej);RF(f,i,b,d);k=f.eY;if(b!=k){l=f.ch.j;m=l*20|0;if(k<b){k=k/20|0;n=b/20|0;}else{n=Ba(0,(k-1|0)/20|0);k=Ba(0,(b-1|0)/20|0);}a:{if((n-k|0)>=l){Qd(f,b);f.eY=b;}else{if(f.eY>=b)while(true){if(n<k)break a;f.eY=Mn(Bp(f.ch,n%l|0),f.d5,f.e1,f.eY,b,m,f.hQ);n=n+(-1)|0;}while(k<=n){f.eY=Mn(Bp(f.ch,k%l|0),f.d5,f.e1,f.eY,b,m,f.hQ);k=k+1|0;}}}}o
=BM(f.ch);while(BN(o)){p=BP(o);q=f.eS;k=V(f.ch.j,f.ih);r=f.i0;s=p.eg.a;n=((p.g6.a-(g%k|0)|0)+k|0)%k|0;t=j.ht;l=g+n|0;u=p.G;m=l/u|0;v=n+s|0;l=BF(v,e);if(l<=0){k=s/u|0;u=0;v=0;w=0;while(v<k){l=m+v|0;if(KL(p,r,w,l,j,t)){s=V((v-u|0)+1|0,p.G);Bn(p.cS,Cf(p.V),s);Cb(p.dy,0.0,V(u,p.G),Cf(p.V),s);l=w;}else{x=Fj(j,r,w,t);Ed(p,i,n+V(u,p.G)|0,q,t.eB,x);Bn(p.cS,Cf(p.V),p.G);Cb(p.dy,0.0,V(v,p.G),Cf(p.V),p.G);u=v;}v=v+1|0;w=l;}x=Fj(j,r,w,t);Ed(p,i,n+V(u,p.G)|0,q,t.eB,x);}else{if(l>0&&n<e){l=Ba(e-n|0,0);w=p.G;u=l/w|0;if(l%
w|0)u=u+1|0;y=0;z=0;ba=0;while(z<u){w=m+z|0;if(KL(p,r,ba,w,j,t)){l=V((z-y|0)+1|0,p.G);Bn(p.cS,Cf(p.V),l);Cb(p.dy,0.0,V(y,p.G),Cf(p.V),l);w=ba;}else{x=Fj(j,r,ba,t);Ed(p,i,n+V(y,p.G)|0,q,t.eB,x);Bn(p.cS,Cf(p.V),p.G);Cb(p.dy,0.0,V(z,p.G),Cf(p.V),p.G);y=z;}z=z+1|0;ba=w;}x=Fj(j,r,ba,t);Ed(p,i,n+V(y,p.G)|0,q,t.eB,x);}if(v>k)YY(p,q,e,g,k,j,r,i,s,n,t);}}x=j.ht;if(e<d){bb=f.eS;BC(i,bb.b,bb.a+e|0,Cd(f.ej.b,d-e|0),x.hc);}if(b<=h&&h<=c)Z3(f,g,h,j.ht,i);Kw(i);}
function Ki(a){return Be(a.bj/a.M|0,Ci(a.d.f)-1|0);}
function SV(a){return Be(((a.bj+De(a)|0)-1|0)/a.M|0,Ci(a.d.f)-1|0);}
function Kg(a){var b,c,d,e,f,g,h;b=a.c7;c=a.bY.data[0];d=a.M;e=a.bG.cy;f=a.L;b.hJ=c;b.ld=d;g=d*20|0;b.ih=g;h=CZ(b.d5,EY(f,b.ej.b,g,e));b.d5=h;CG(h,b.hJ);QL(b.d5,2);c=CZ(b.e1,EY(f,b.ej.b,d,e));b.e1=c;CG(c,b.hJ);QL(b.e1,2);RF(a.c7,a.L,Ki(a),De(a));}
function TA(a,b){var c;c=a.e7.data;return c[b%c.length|0];}
function Uh(a,b){var c,d,e,f;c=Fh(0,H(a.ek),Mj(b));if(!c)b=null;else{b=C(44);if(c<0){b=new BI;W(b);J(b);}if(c!=1){d=b.b4.data.length;if(d&&c){e=B1(V(d,c));d=0;f=0;while(f<c){OI(b,0,H(b),e,d);d=d+H(b)|0;f=f+1|0;}b=K$(e);}else b=AQb;}}return b;}
function Nb(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=Bu(i);k=APy(i).data;GI(j,c);c=0;l=k.length;if(c>l){f=new BI;W(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.f;o.b2=o.b2+1|0;p=O(F4,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ALo(h[m],n[m],k[m],b[m],f.X,f.bf);m=m+1|0;}Bv(o.gI,p);c=0;while(c<i){b=e.data;I3(o,h[c],n[c],k[c],b[c]);g.lD(Ct(h[c]),b[c]);c=c+1|0;}}
function ABp(a){var b;if(CY(Z(a)))FH(a);else{b=a.d;LL(b.f,b.n,b.s);}Ga(a);DG(a);return 1;}
function Dj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.ez)return 0;if(CY(Z(a)))FH(a);c=KQ(S$(b,C(110),C(5)),C(111),(-1));d=c.data;b=a.d;e=b.f;f=b.n;g=b.s;V3(e,f,g,c);h=d.length;if(!h)b=AQb;else{i=0;j=0;while(j<h){i=i+H(d[j])|0;j=j+1|0;}k=B1(i+V(h-1|0,H(C(111)))|0);c=k.data;l=0;b=d[0];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<H(C(111))){m=l+1|0;c[l]=I(C(111),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=n+1|0;}b=K$(k);}EZ(e,f,g,0,b);b=a.d;f=b.n;m=(f
+h|0)-1|0;Cj(a,m,m!=f?H(d[h-1|0]):b.s+H(d[0])|0,0);E4(a);DG(a);return 1;}
function FH(a){var b,c,d;b=Dr(Z(a));c=a.d.f;d=Z(a);LU(c,d,T2(c,d));Cj(a,b.H,b.Q,0);E4(a);DG(a);}
function E4(a){var b,c;(Z(a)).cQ=0;b=(Z(a)).bv;c=a.d;BW(b,c.n,c.s);b=(Z(a)).bo;c=a.d;BW(b,c.n,c.s);}
function CK(a){return a.gD.le|0;}
function YZ(a,b){var c,d;c=a.cs.a;if(b<c){d=a.bG.dU;d.a=c-b|0;d.b=!a.by?C8(a)+a.dr|0:C8(a)+a.bX|0;c=!a.by?(a.U.b+a.cp|0)-a.dr|0:(((a.U.b+a.b6|0)+CK(a)|0)+a.bX|0)-a.dr|0;BC(a.L,c,a.U.a+b|0,d,a.ct.bI.fP);}}
function Zu(a){var b;b=a.by?a.U.b+CK(a)|0:a.U.b+a.cs.b|0;Vo(a.es,a.bj,a.U.a,De(a),Lm(a),b,CK(a));b=!a.by?a.U.b+a.cp|0:((a.U.b+a.bX|0)+a.b6|0)+CK(a)|0;Pr(a.eu,a.d.cW,b,C8(a),a.gp,a.U.a+De(a)|0,CK(a));}
function YJ(a){var b,c;b=PM(a.es);c=PM(a.eu);if(!(!b&&!c)){DQ(a.L,1);if(b)Ha(a.es,a.L);if(c)Ha(a.eu,a.L);if(b)Hg(a.es,a.L);if(c)Hg(a.eu,a.L);}}
function ZU(a){var b,c,d,e;b=a.ex;c=a.cs;b.a=c.a;b.b=a.bX;d=!a.by?a.cp-a.b6|0:(c.b-H_(a)|0)-a.bX|0;b=a.L;c=a.U;BC(b,c.b+d|0,c.a,a.ex,a.ct.bI.rX);a.ex.b=!a.by?(a.b6-a.bX|0)-a.dr|0:((a.b6+CK(a)|0)+a.bX|0)-a.dr|0;e=a.by?0:(a.cp-a.b6|0)+a.bX|0;b=a.L;c=a.U;BC(b,c.b+e|0,c.a,a.ex,a.ct.bI.fP);}
function Sj(b,c){return Be(Ba(0,b),c);}
function Fc(a){return a.bG.ge;}
function LA(a,b){var c,d,e,f;c=Ir(b);d=new R;T(d);K(K(d,C(112)),c);$rt_globals.console.info($rt_ustr(S(d)));Fc(a);c=Ir(b);d=C2();c=$rt_ustr(c);d.title=c;Cj(a,0,0,0);c=new OM;c.sq=a;c.sp=b;d=D2();BT(d);e=new OL;e.m0=d;f=new SF;f.oG=e;d=new U5;d.m1=c;c=b.hX;if(c!==null)c.text().then(Bi(d,"f"),Bi(f,"f"));else{b=b.hm.getFile();c=new U6;c.on=d;c.oo=f;b.then(Bi(c,"f"),Bi(f,"f"));}}
function GW(a,b,c,d,e){if(G4(a,e))return 1;if(c&&d)return 1;if(c)E8(a,a.bj+((V(b,a.M)*12|0)/10|0)|0);else if(!d){GB(a,a.d.n+b|0,e);Sk(a);}return 1;}
function QC(a,b,c,d){var e,f,g;if(G4(a,d))return 1;e=EW(a);if(!c)f=a.d.s+b|0;else if(b>=0)f=F0(e,a.d.s);else{b=a.d.s;if(!b)f=(-1);else{c=HS(e,b);if(c>0&&e.dn.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.dn.data[c-1|0];}}if(f>e.z){e=a.d;if((e.n+1|0)<Ci(e.f))Cj(a,a.d.n+1|0,0,d);}else if(f>=0)CS(a,f,d);else{e=a.d;b=e.n;if(b>0){g=(BG(e.f,b-1|0)).z;Cj(a,a.d.n-1|0,g,d);}}TM(a);return 1;}
function G4(a,b){if(CY(Z(a))&&!b){E4(a);Ga(a);return 1;}if(!(b&&CY(Z(a))))E4(a);return 0;}
function Cj(a,b,c,d){a.d.s=c;return GB(a,b,d);}
function GB(a,b,c){var d;d=a.d;d.n=Fh(0,b,Ci(d.f)-1|0);return CS(a,a.d.s,c);}
function CS(a,b,c){var d,e;a.d.s=Fh(0,b,(EW(a)).z);a.d.gj=a.bG.bW===0.0?0:FK(EW(a),a.d.s,a.L.de,a.bY);Kb(a);Ga(a);if(c)(Z(a)).cQ=1;d=Z(a);e=a.d;Kc(d,e.n,e.s);(Z(a)).cQ=0;return 1;}
function La(a,b){var c;c=AD8(Z(a));CS(a,b,0);G9(Z(a),c);}
function Ga(a){Sk(a);TM(a);}
function Sk(a){var b,c,d,e,f;b=a.bj;c=b+De(a)|0;d=a.d.n;e=a.M;d=V(d,e);f=d+e|0;if(d<(b+e|0))E8(a,d-e|0);else if(f>(c-e|0))E8(a,(f-De(a)|0)+a.M|0);}
function TM(a){var b,c,d,e,f;b=Dw(a.bG.bW*30.0);c=a.d.cW;d=c+C8(a)|0;e=a.d.gj;f=e+b|0;if(e<(c+b|0))HL(a,e-b|0);else if(f>(d-b|0))HL(a,(f-C8(a)|0)+b|0);}
function Hd(a,b){var c,d;Cj(a,b.X,b.bf,0);c=F0(EW(a),a.d.s);BW((Z(a)).bo,a.d.n,c);b=(Z(a)).bv;d=a.d;BW(b,d.n,d.s);}
function Ef(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.U;e=c-d.b|0;f=Fh(0,((b.a-d.a|0)+a.bj|0)/a.M|0,Ci(a.d.f)-1|0);g=!a.by?a.cp:(a.bX+a.b6|0)+CK(a)|0;h=Ba(0,(e-g|0)+a.d.cW|0);b=BG(a.d.f,f);d=a.L.de;i=a.bY;if(!(b.dZ!==null&&!b.fi))Jm(b,d,i);j=b.dZ;e=b.k.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.z;else{c=R_(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.k.data.length)k=b.z;else{j=QK(b,d,i,c);k=0;e=0;while(e<c){k=k+H(b.k.data[e].p)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(ARj){b=new R;T(b);Bk(K(Bk(K(Bk(K(b,C(113)),e),C(114)),h),C(115)),m);$rt_globals.console.info($rt_ustr(S(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return Di(f,k);}
function VA(a,b){var c,d;c=a.d;d=b.X;c.n=d;c.s=b.bf;c.gj=FK(BG(c.f,d),a.d.s,a.L.de,a.bY);Kb(a);}
function EW(a){var b;b=a.d;return BG(b.f,b.n);}
function AIn(a,b,c){(Z(a)).cQ=0;return 1;}
function ABY(a,b,c){var d;if(c)return null;d=Hn(a.es,b.u,a.nG,1);if(d!==null)return d;d=Hn(a.eu,b.u,a.sH,0);if(d!==null)return d;HQ(a);VA(a,Ef(a,b.u));JP(a.d);if(!b.bu&&!(Z(a)).cQ){b=(Z(a)).bv;d=a.d;BW(b,d.n,d.s);}(Z(a)).cQ=1;b=Z(a);d=a.d;Kc(b,d.n,d.s);b=new VG;b.pf=a;return b;}
function ACf(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cf){b=b.u;e=Ef(a,b);f=HE(a.d.f,e.X,e.bf);g=Ry(a,f);h=KW(a.eo,DJ(a.d),Fx(a.d));if(h!==null){i=a.d;c=e.X;d=e.bf;e=new Sa;e.vn=a;e.vo=b;e.vm=g;h.qH(i,c,d,e,a.hb);}else{e=B7(a.d.f.dd,f);if(e!==null){Hd(a,e);c=1;}else{e=B7(a.d.f.cR,f);if(e!==null&&!DP(e)){if(e.j!=1){PJ(a.it,b,e,a,g);c=1;}else{Hd(a,Bp(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(Ef(a,b.u)).X;g=BG(a.d.f,c);c=Fn(g,a.d.s);d=F0(g,a.d.s);b=KH(g,c);if((d-1|0)==g.z){BW((Z(a)).bv,a.d.n,
Mj(g));BW((Z(a)).bo,a.d.n,g.z);}else{if(b!==null){b=b.p;j=0;c:{while(true){k=b.b4.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.s;if(c==j){c=Fn(g,c-1|0);d=F0(g,c);}else{if(d!=j){Oo(Z(a),a.d.n);break b;}c=Fn(g,d+1|0);d=F0(g,c);}}}BW((Z(a)).bv,a.d.n,c);(Z(a)).cQ=1;Cj(a,a.d.n,d,0);(Z(a)).cQ=0;HQ(a);}}break a;case 3:break;default:break a;}Oo(Z(a),a.d.n);Qk(a.d.fM);HQ(a);}}return 1;}
function ACU(a,b){var c,d,e,f,g,h,i,j,k;c=a.bG.c8;if(HD(a.es,b.u,c))return 1;if(HD(a.eu,b.u,c))return 1;d=a.c7;if(Fv(b.u,d.eS,d.ej)&&Fl(c)?1:0)return 1;e=b.u;f=!a.by?a.U.b+a.cp|0:((a.U.b+a.b6|0)+a.bX|0)+CK(a)|0;a:{g=a.U.a;h=C8(a);i=De(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Fl(c);if(b.cf){e=Ef(a,b.u);e.bf=Fn(BG(a.d.f,e.X),e.bf);b=a.d.f;if(!ID(b.dd,e)&&!ID(b.cR,e)?0:1)return Dv(c,C(116));}return Dv(c,C(117));}
function AMr(a,b){var c,d,e,f,g;c=b.cf;if(c&&b.bT==65){c=Ci(a.d.f)-1|0;d=E9(a.d.f,c);BW((Z(a)).bv,0,0);BW((Z(a)).bo,Ci(a.d.f)-1|0,d);return 1;}if(c&&b.bT==80){HY(a.d);return 1;}if(!a.ez&&c&&b.bT==90){if(CY(Z(a)))E4(a);b=a.d.f;b.b2=b.b2+1|0;e=b.gI;d=e.j;if(!d)e=null;else{f=(E7(e,d-1|0)).data;e=L8(b,f[0]);c=1;while(c<f.length){L8(b,f[c]);c=c+1|0;}}if(e!==null){Cj(a,e.b,e.a,0);DG(a);}return 1;}if(!c&&!b.cI){if(B0(b.dO,C(118))){Dj(a,C(119));CS(a,a.d.s-1|0,0);c=1;}else if(B0(b.dO,C(120))){Dj(a,C(121));CS(a,a.d.s
-1|0,0);c=1;}else if(B0(b.dO,C(122))){Dj(a,C(123));CS(a,a.d.s-1|0,0);c=1;}else if(B0(b.dO,C(124))){Dj(a,C(125));CS(a,a.d.s-1|0,0);c=1;}else if(B0(b.dO,C(126))){Dj(a,C(127));CS(a,a.d.s-1|0,0);c=1;}else if(!B0(b.dO,C(128)))c=0;else{Dj(a,C(129));CS(a,a.d.s-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cI&&!b.cf)){d=b.bT;if(d>=48&&d<=57){c=d-48|0;e=a.lz.data[c];if(e!==null)e.t();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bT){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(YH(a,b))return 1;if(Zp(a,b))return 1;c=b.cf;if(c&&b.bT==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bT;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.cI&&!b.h9)return H(b.dO)>0&&Dj(a,b.dO)?1:0;return 0;}return 0;}
function RD(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=Ki(a);d=SV(a);if(b.dX!=3&&b.fN==3){e=S5(b.j9);f=new QJ;f.su=c;f.sw=d;g=new Pf;g.o7=f;while(!g.jh&&SQ(e,g)){}if(!g.jh&&B0(C(130),DJ(b))){c=Ba(0,c-100|0);d=Be(Ci(b.f)-1|0,d+100|0);Bv(b.j9,Cd(c,d));h=Bu(3);i=h.data;i[0]=Eo(b.f,c);e=b.f;j=0;d=Be(d+1|0,e.v.data.length);k=0;while(k<d){j=j+E9(e,k)|0;if(k!=(e.v.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.rU=D1();e=b.c_;l=new PU;l.q$=b;i=O(B,3);m=i.data;m[0]=EN(b.f);m[1]=h;b=b.f.cO;g=Bz();RV(b,b.cL,g);h
=Bu(3*g.j|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bp(g,o);d=k+1|0;n[k]=b.bC;q=d+1|0;n[d]=b.bF;k=q+1|0;n[q]=b.el;o=o+1|0;}m[2]=h;Ep(e,l,C(131),i);}}}
function P9(a){AAb(a.d);}
function Ko(a,b,c){var d,e,f,g,h,i;if(c&&a.ez)return 0;d=Dr(Z(a));e=d.H;if(CY(Z(a))){f=a.d.f;g=Z(a);h=T2(f,g);if(c)LU(f,g,h);if(c){Cj(a,d.H,d.Q,0);E4(a);DG(a);}}else{h=GY(EA(a.d.f.v.data[e]),C(111));i=Be(Ci(a.d.f)-1|0,e);BW((Z(a)).bo,i,0);if(e>=(Ci(a.d.f)-1|0))BW((Z(a)).bo,i,E9(a.d.f,i));else BW((Z(a)).bv,i+1|0,0);if(c)FH(a);else Cj(a,e,0,0);}b.m(h);return 1;}
function Zp(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.ez)return 0;a:{switch(b.bT){case 8:if(CY(Z(a))){FH(a);c=1;}else{b=a.d;d=b.s;if(!d&&!b.n)c=1;else{if(d){e=b.n;c=d-1|0;LL(b.f,e,c);}else{e=b.n-1|0;c=E9(b.f,e);b=a.d.f;JV(b,e);EZ(b,e,E9(b,e),1,C(111));}DG(a);c=Cj(a,e,c,0);}}break a;case 9:if(!b.bu){if(!CY(Z(a)))Dj(a,a.ek);else{f=Dr(Z(a));g=E0(Z(a));c=g.H;d=f.H;e=(c-d|0)+1|0;h=Bu(e);i=h.data;j=O(Bw,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.ek;d=d+1|0;e=l;}b=new TX;m=a.d;Y3(b,m.n,m.s);m=new Rv;m.nt=
a;Nb(a,h,0,0,j,b,m);f.Q=f.Q+H(a.ek)|0;g.Q=g.Q+H(a.ek)|0;La(a,a.d.s+H(a.ek)|0);DG(a);}c=1;}else b:{if(!CY(Z(a))){b=a.d;f=BG(b.f,b.n);if(f.k.data.length>0){g=Uh(a,f);if(g===null){c=1;break b;}m=a.d;n=m.f;e=m.n;b=Di(e,m.s);n.b2=n.b2+1|0;o=n.gI;h=O(F4,1);h.data[0]=ALo(e,0,1,g,b.X,b.bf);Bv(o,h);I3(n,e,0,1,g);FF(f,0,H(g));La(a,a.d.s-H(g)|0);}}else{b=Dr(Z(a));f=E0(Z(a));c=f.H;p=b.H;c=(c-p|0)+1|0;h=Bu(c);k=h.data;j=O(Bw,c);q=j.data;g=a.d;e=g.s;l=g.n;c=0;while(p<=f.H){g=BG(a.d.f,p);if(g.k.data.length>0){g=Uh(a,g);if
(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=H2(h,c);j=CX(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.H)b.Q=Ba(0,b.Q-H(g)|0);if(p==f.H){f.Q=Ba(0,f.Q-H(g)|0);La(a,a.d.s-H(g)|0);}d=d+1|0;}b=Di(l,e);f=new S4;f.pu=a;Nb(a,h,0,1,j,b,f);}DG(a);c=1;}break a;case 13:if(CY(Z(a)))FH(a);b=a.d;DZ(BG(b.f,b.n));b=a.d;AAF(b.f,b.n,b.s);DG(a);c=Cj(a,a.d.n+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ABp(a);}return c;}
function YH(a,b){var c,d,e,f;a:{switch(b.bT){case 33:c=b.cf?GB(a,HH(a.bj,a.M),b.bu):GW(a,2-T8(De(a),a.M)|0,0,b.cI,b.bu);break a;case 34:c=!b.cf?GW(a,T8(De(a),a.M)-2|0,0,b.cI,b.bu):GB(a,((a.bj+De(a)|0)/a.M|0)-1|0,b.bu);break a;case 35:if(!G4(a,b.bu)&&!CS(a,(EW(a)).z,b.bu)){c=0;break a;}c=1;break a;case 36:if(!G4(a,b.bu)&&!CS(a,0,b.bu)){c=0;break a;}c=1;break a;case 37:c=b.cf;if(c&&b.cI){HQ(a);d=a.d.fM;e=d.c2;if(e<=0)d=null;else{f=d.ea.data;c=e-1|0;d.c2=c;d=f[c];}if(d===null)c=1;else{Cj(a,KA(d),IK(d),0);G9(Z(a),
d.i1);c=1;}break a;}c=QC(a,(-1),c,b.bu);break a;case 38:c=GW(a,(-1),b.cf,b.cI,b.bu);break a;case 39:c=b.cf;if(c&&b.cI){d=a.d.fM;e=d.c2;if(e==(d.d8-1|0))d=null;else{f=d.ea.data;c=e+1|0;d.c2=c;d=f[c];}if(d===null)c=1;else{Cj(a,KA(d),IK(d),0);G9(Z(a),d.i1);c=1;}break a;}c=QC(a,1,c,b.bu);break a;case 40:c=GW(a,1,b.cf,b.cI,b.bu);break a;default:}c=0;}if(c&&b.bu){b=(Z(a)).bo;d=a.d;BW(b,d.n,d.s);}if(c)JP(a.d);return c;}
function HQ(a){var b,c,d,e,f,g,h;b=a.d;c=b.fM;d=c.c2;c=d<0?null:c.ea.data[d];if(c!==null&&b.n==KA(c)&&a.d.s==IK(c))return;c=a.d;e=c.fM;b=new JL;d=c.n;f=c.s;c=Z(a);b.kl=Di(d,f);g=AD8(c);b.i1=g;g.cQ=0;f=e.c2;h=e.d8;if(f==(h-1|0))TC(e,b);else{d=f+1|0;while(d<h){Qk(e);d=d+1|0;}TC(e,b);}e.c2=e.c2+1|0;}
function DG(a){a.d.f.rj=Ms(Fc(a));}
function R9(a,b){var c,d,e,f;a.uY=null;a.c7.i0=Eb(0);VY(a.d);c=a.d;a.d=b;OP(c,null,null);OP(b,a,Fc(a));d=(Cc(a.eo.sW)).data;e=d.length;f=0;while(f<e){d[f].lD(c,b);f=f+1|0;}a.bj=Gx(b.i$*a.M);}
function Ry(a,b){var c;c=Ku(a.d.f,b);if(c===null)return C(5);return c.p;}
function Cy(a){return a.d.vV;}
function Z(a){return a.d.nN;}
function Tm(a){var b;b=a.vH;if(b!==null)b.m(a);}
function Ol(){B.call(this);this.vA=null;}
function ADb(a,b){return b.bT!=121?0:1;}
function Qb(){var a=this;B.call(a);a.mT=null;a.pb=null;a.os=null;}
function AFk(a,b){var c,d,e,f;if(b.cf&&b.bT==79){c=a.pb;if(c!==null&&b.bu){if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ABb(c,1);else{d=new UG;b=$rt_globals.window.showDirectoryPicker();e=new UF;e.oT=c;e.oU=d;b.then(Bi(e,"f"),Bi(d,"f"));}}else Uf(a.mT,a.os);f=1;}else f=0;return f;}
var Bc=F(0);
function Oj(){B.call(this);this.tE=null;}
function AFs(a,b){LA(a.tE,b);}
function Ok(){B.call(this);this.n5=null;}
function MR(){B.call(this);this.o3=null;}
function MS(){B.call(this);this.um=null;}
function AGT(a,b,c,d){var e,f;b=a.um.cx;e=Dw((b.M*4|0)*d/150.0);f=Dw(c);if(e)E8(b,b.bj+e|0);if(f)HL(b,b.d.cW+f|0);return 1;}
function MQ(){B.call(this);this.mE=null;}
function Y8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=b;c=a.mE;d=c.et;e=c.cx;if(e!==d.ee?0:1){d=c.eU;f=new Rk;f.wC=c;if(!Fr(d.bM)){g=d.bM;b=b.u;h=new RK;h.ey=d;h.bc=e;h.vi=f;h.hg=e;h.lB=c;h.iO=c;i=RO();f=h.bc.d;c=DJ(f);f=Fx(f);j=h.bc.eo;if(Pn(j,c,f)!==null){k=new Qv;k.mx=h;k.my=b;Dx(i,C(132),k);}if(KW(j,c,f)!==null){k=new Qw;k.pK=h;k.pL=b;Dx(i,C(133),k);}if(So(j,c,f)!==null){f=new Qu;f.l8=h;f.l9=b;Dx(i,C(134),f);}f=new Qt;f.s_=h;f.s$=b;Dx(i,C(135),f);FQ(h);if(Kr()){if(!h.bc.ez){f=new PF;f.tA=h;Dx(i,C(136),f);}f
=new PG;f.ok=h;Dx(i,C(137),f);if(!h.bc.ez){FQ(h);if(Kr()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0){f=new PE;f.rf=h;Dx(i,C(138),f);}}}f=RO();l=O(Bw,4).data;l[0]=C(117);l[1]=C(130);l[2]=C(139);l[3]=C(140);m=l.length;n=0;while(n<m){j=l[n];o=new NR;o.mv=h;o.mw=j;Dx(f,j,o);n=n+1|0;}E6(i,C(141),He(f));o=RO();l=O(DB,3);p=l.data;f=h.iO;BT(f);k=new L$;k.nX=f;p[0]=Cv(C(142),k);f=h.iO;BT(f);k=new L_;k.o2=f;p[1]=Cv(C(143),k);f=h.iO;BT(f);k=new L9;k.ul=f;p[2]=Cv(C(144),k);JW(o,C(145),Gt(l),ARk);l=O(DB,2);p
=l.data;f=h.hg;BT(f);j=new UE;j.pA=f;p[0]=Cv(C(146),j);f=h.hg;BT(f);j=new UD;j.sJ=f;p[1]=Cv(C(147),j);E6(o,C(148),Gt(l));c=new P3;c.rM=h;JW(o,C(149),c,ARk);if(h.bc.bG.dt.kB){l=O(DB,2);p=l.data;c=new Q5;c.ny=h;p[0]=Cv(C(150),c);c=new Q6;c.oL=h;p[1]=Cv(C(151),c);E6(o,C(152),Gt(l));}E6(i,C(153),He(o));f=RO();E6(f,C(154),Ys(h));o=new OH;o.un=h;Dx(f,C(155),o);E6(i,C(156),He(f));OS(g,b,He(i),Pt(d,e));}}return 1;}
function Mr(){B.call(this);this.sv=null;}
function ALU(a,b){var c,d;c=a.sv;d=b.bb;return MF(c.charCodeAt(d)&65535);}
var YE=F(0);
function Wf(b,c){var d,e,f,g,h,i,j,k,l,m;d=O(Bw,8);e=Eb(8);f=B1(16);g=0;h=0;i=0;while(true){j=BF(i,b);if(j>0)break;k=j>=0?10:(c.lK(Ct(i))).jp;if(k==10){d=AAo(DM(f,0,g),d,h);e=S2(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Mt(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AAo(DM(f,0,g),d,h);j=i+1|0;if(j<b&&(c.lK(Ct(j))).jp==10){e=S2(1,e,h);i=j;}else e=S2(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new PR;d=XF(d,h);if(m.length!=h)e=KP(e,h);c.hC=d;c.vw=e;return c;}
function AG8(b){var c,d;c=H(b);BT(b);d=new MU;d.mV=b;return (Wf(c,d)).hC;}
function UH(){var a=this;B.call(a);a.rP=null;a.sC=null;a.ru=null;}
function Gl(){var a=this;B.call(a);a.bu=0;a.cf=0;a.cI=0;a.h9=0;}
function ARl(a,b,c,d){var e=new Gl();Sv(e,a,b,c,d);return e;}
function Sv(a,b,c,d,e){a.bu=d;a.cf=b;a.cI=c;a.h9=e;}
function NP(){var a=this;Gl.call(a);a.dO=null;a.bT=0;a.sd=0;a.wp=0;a.jc=0;}
var AAz=F();
function T8(b,c){return (b+(c/2|0)|0)/c|0;}
function OJ(b,c,d){if(b<(2147483647/c|0))return T8(V(b,c),d);return 0.5+c*b/d|0;}
function HH(b,c){return ((b+c|0)-1|0)/c|0;}
function Gx(b){return b+0.5|0;}
function Dw(b){return b+0.5|0;}
function Fh(b,c,d){return Ba(b,Be(c,d));}
function Xt(b,c){return WO(b)/WO(c);}
function Ln(){var a=this;Gl.call(a);a.u=null;a.uR=null;}
var Sn=F(0);
function Mx(){var a=this;B.call(a);a.tF=null;a.tG=null;}
function AHe(a,b){var c,d;c=a.tF;d=a.tG;$rt_globals.console.info("paste plain string "+b);b=Eu(b);Dj(c.m2,b);CV(d);}
function SZ(){B.call(this);this.uc=null;}
function ALi(a,b){a.uc.clipboardData.setData("text/plain",$rt_ustr(b));}
function UR(){var a=this;IS.call(a);a.wf=0;a.mi=0;}
var W9=F(0);
function IW(b,c,d,e,f){Cb(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function SB(){var a=this;B.call(a);a.dt=null;a.ge=null;a.c8=null;a.cB=null;a.bW=0.0;a.cy=0;a.ee=null;a.ju=null;a.dU=null;a.sV=null;a.uJ=null;a.uK=null;}
function IE(a){var b;b=a.ee;if(b!==null)b.rR();}
function I1(a){var b;b=a.ee;if(b!==null)b.uz();}
function HP(a,b){I1(a);a.ee=b;IE(a);}
function KY(a){return a.dt.de;}
function HX(a,b){return F8(a.dt,b.iG,Cn(b.hi,a.bW),400,0);}
function Ck(a,b){return Cn(b,a.bW);}
var QF=F();
function AFR(a,b){var c,d,e;c=b.cf;d=c&&!b.bu&&!b.cI&&!b.h9?1:0;a:{if(d){d=b.bT;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bu&&!c&&!b.cI&&!b.h9?1:0;d=d&&b.bT==46?1:0;}b:{if(!d){e=b.bT;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.jc=1;}return 0;}
function QE(){B.call(this);this.nu=null;}
function ADJ(a,b){var c;c=a.nu.ee;return c!==null&&c.jx(b)?1:0;}
var HR=F(0);
function U9(){B.call(this);this.c4=null;}
function Wu(a,b){Qf(a.c4,0,b);}
function TS(){var a=this;B.call(a);a.cA=null;a.b9=null;a.h6=null;a.is=null;a.k$=null;a.iH=null;}
function OS(a,b,c,d){var e,f;e=a.cA;f=e.cB;if(V(f.b,f.a)&&e.bW!==0.0){if(a.h6!==null&&!Fr(a)){a.iH=d;a.is=HX(a.cA,a.h6);e=Na(a,b,c,null);b=new TJ;b.rn=a;e.sA=b;HP(a.cA,a);return;}b=new BI;W(b);J(b);}c=new Dg;Br(c,C(157));J(c);}
function Do(a){var b;if(Fr(a)){b=a.cA;if(b.ee===a)b.ee=null;R2(a,null);a.iH.t();a.iH=ARc;}}
function UQ(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new Ru;f.b1=AHk();f.e8=new Bq;f.fE=new Bq;f.cb=ARm;f.hK=(-1);f.ib=1;f.fz=1;c=c.t9();Kv(f);f.cb=c;Pm(f,a.k$);OK(f,a.is,a.cA);if(d===null)g=b.b;else{g=b.b;g=a.cA.cB.b<((g+(EI(d)).b|0)+(EI(f)).b|0)?g-(EI(f)).b|0:(g+(EI(d)).b|0)-d.eI|0;}h=b.a;b=a.cA.cB;i=Ba(0,Be(g,b.b-(EI(f)).b|0));g=Ba(0,Be(h,b.a-(EI(f)).a|0));Bn(f.b1.cH,i,g);j=f.cv+f.eI|0;k=f.cb.data;h=k.length;l=0;m=j;while(l<h){c=k[l];b=c.dK;b.b=i+j|0;b.a=g+m|0;if(!f.fz){if(!c.c9.b)WJ();j=j+(c.c9.b+f.cv|0)|0;}else
{if(!c.c9.a)WJ();m=m+(c.c9.a+f.cv|0)|0;}l=l+1|0;}b=new Vc;b.ob=a;b.oc=f;b.od=e;f.op=b;Bv(a.b9,f);return f;}
function Na(a,b,c,d){return UQ(a,b,c,d,null);}
function AHB(a,b){var c;if(!Fr(a))return 0;a:{switch(b.bT){case 27:Do(a);c=1;break a;default:}c=0;}return c;}
function Yk(b,c){var d,e,f;d=b.dK;e=c.cv;f=c.eI;return Cd((d.b-(e*3|0)|0)-f|0,(d.a-e|0)-f|0);}
function R2(a,b){var c,d;c=a.b9.j-1|0;a:{while(true){if(c<0)break a;d=Bp(a.b9,c);if(b===d)break;E7(a.b9,c);d.eL=CZ(d.eL,null);Bn(d.e8,0,0);d.cb=ARm;d.hK=(-1);RQ(d.b1);c=c+(-1)|0;}}}
function Fr(a){return a.b9.j<=0?0:1;}
function Or(){var a=this;B.call(a);a.dS=null;a.jk=0.0;a.gt=0.0;a.fu=0;}
function U0(a){return a.dS.bp.a;}
function RG(a){return a.dS.bp.b;}
function Z9(a,b,c){var d,e,f;if(a.fu){d=a.dS;e=c.b;f=c.a;c=d.cH;BC(b,c.b+e|0,c.a+f|0,d.bp,d.eQ);}}
function JR(){var a=this;B.call(a);a.lq=null;a.va=null;a.vp=0.0;a.oz=0;a.vx=0;a.v0=0;a.qi=0;a.wX=0;a.d3=0.0;a.dF=0.0;a.vl=0.0;a.le=0.0;a.vt=0;a.mB=null;}
function Fk(a){return Dw(a.d3+a.dF);}
function OB(a,b){return Dw((a.d3+a.dF)*b);}
function Vq(){var a=this;B.call(a);a.ck=null;a.f=null;a.kT=null;a.nN=null;a.fM=null;a.hI=null;a.c_=null;a.vV=null;a.n=0;a.s=0;a.gj=0;a.gT=null;a.gC=null;a.lU=null;a.j9=null;a.dX=0;a.fN=0;a.f3=0;a.g1=AAk;a.rU=AAk;a.s9=AAk;a.uV=0;a.vR=0;a.cW=0;a.i$=0.0;}
function AD2(a,b,c){var d=new Vq();ABk(d,a,b,c);return d;}
function ABk(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.nN=ACZ();f=new Su;f.ea=O(JL,16);f.d8=0;f.c2=(-1);a.fM=f;a.gT=null;a.gC=Bz();a.lU=FS();a.j9=Bz();a.dX=1;a.fN=1;a.f3=1;a.cW=0;a.i$=0.0;a.ck=d;a.kT=c;c=new Qc;g=e.length;b=O(CL,Ba(1,g));if(!g)b.data[0]=Xc(C(5));h=b.data;i=0;while(i<g){h[i]=Xc(e[i]);i=i+1|0;}d=new Oa;f=new JI;Ov(f);d.dV=f;c.dJ=d;c.dd=FS();c.cR=FS();c.gI=Bz();if(!h.length){c=new BI;W(c);J(c);}c.v=b;j=Te(c);c.cO=AAi(AL4(IL(0,j,0),null,null));a.f=c;}
function DJ(a){var b;b=a.kT;if(b===null){b=a.ck;if(b===null)b=C(117);else{b=b.e3;b=b===null?C(117):!Dy(b,C(158))&&!Dy(b,C(159))&&!Dy(b,C(160))&&!Dy(b,C(161))&&!Dy(b,C(162))&&!Dy(b,C(163))?(Dy(b,C(164))?C(130):Dy(b,C(165))?C(166):!Dy(b,C(167))?C(117):C(140)):C(139);}}return b;}
function Fx(a){var b;b=a.ck;return b===null?null:b.hS;}
function Gq(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.fN=3;a.f3=3;a.dX=3;c=CR(b[0]);d=D5(b[1]);if((CR(b[2])).data[0]==4){e=GA(D5(b[3]));DH(a.lU,C(168),e);Km(a.f,c,d);}else if(b.length<5)Km(a.f,c,d);else{f=CR(b[3]);g=f.data;h=D5(b[4]);MT(a.f,c,d,f,h,0);SO(a,H2(f,g.length),KO(h));}e=DF(a.ck);i=Ji(D1(),a.g1);j=new R;T(j);K(FE(K(K(j,e),C(169)),i),C(170));$rt_globals.console.info($rt_ustr(S(j)));e=a.hI;if(e!==null)Tm(e);}
function JP(a){var b;Rb(a,Di(a.n,a.s),HE(a.f,a.n,a.s));if(!(a.gT!==null&&!DP(a.gC))){b=a.s;if(b>0)Rb(a,Di(a.n,b-1|0),HE(a.f,a.n,a.s-1|0));}}
function Rb(a,b,c){var d,e,f,g,h,i,j,k;VY(a);d=B7(a.f.dd,c);if(d!==null)c=d;a:{e=B7(a.f.cR,c);if(e!==null){a.gT=Ku(a.f,c);c=BM(e);while(true){if(!BN(c))break a;f=BP(c);Bv(a.gC,Ku(a.f,f));}}}c=a.hI;if(c!==null){g=b.X;h=b.bf;b=c.eo;f=DJ(c.d);e=Fx(c.d);i=(Cc(b.tn)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.tp(f,e)){b=b.xp;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new Q4;e.wO=c;e.wN=f;e.wQ=g;e.wP=h;b.qH(f,g,h,e,c.hb);}}}
function VY(a){a.gT=null;GH(a.gC);}
function SO(a,b,c){var d,e,f,g,h;if(a.c_!==null){a.s9=D1();d=a.f.b2;e=a.c_;f=new On;f.lQ=a;g=O(B,3);h=g.data;h[0]=b;h[1]=c;b=Bu(1);b.data[0]=d;h[2]=b;Ep(e,f,C(171),g);}}
function OP(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.hI=b;a.c_=c;if(c!==null&&a.dX==1){a.g1=D1();b=DJ(a);d=BB(b,C(130));e=BB(b,C(140));f=EN(a.f);g=f.data.length;h=!d?5120:10240;i=Wt(b);if(e){c=a.c_;j=new LR;j.sh=a;k=O(B,2);l=k.data;l[0]=f;f=Bu(1);f.data[0]=i;l[1]=f;UA(c,j,0,C(172),k);a.dX=2;}else if(g<=h)Jp(a,f,i);else if(!d){UZ(a,KO(f),i);Jp(a,f,i);}else{UZ(a,KO(f),i);k=KO(f);c=a.c_;j=new Rm;j.rw=a;l=O(B,2);m=l.data;m[0]=k;k=Bu(1);k.data[0]=i;m[1]=k;Ep(c,j,C(173),l);a.fN=2;Jp(a,f,i);}}}
function UZ(a,b,c){var d,e;d=a.c_;e=new NC;e.nQ=a;Ep(d,e,C(174),G(B,[b,Fw([c,250])]));a.f3=2;}
function Jp(a,b,c){var d,e,f,g;d=a.c_;e=new UM;e.sU=a;f=O(B,2);g=f.data;g[0]=b;b=Bu(1);b.data[0]=c;g[1]=b;Ep(d,e,C(172),f);a.dX=2;}
function HY(a){var b,c,d,e,f,g;b=DF(a.ck);c=new R;T(c);K(K(c,b),C(175));$rt_globals.console.info($rt_ustr(S(c)));b=DJ(a);if(b===null)d=null;else{a:{e=(-1);switch(JZ(b)){case -1655966961:if(!B0(b,C(140)))break a;e=3;break a;case 3401:if(!B0(b,C(166)))break a;e=2;break a;case 98723:if(!B0(b,C(139)))break a;e=1;break a;case 3254818:if(!B0(b,C(130)))break a;e=0;break a;case 3556653:if(!B0(b,C(117)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(176);break b;case 2:d=C(177);break b;case 3:d=C(178);break b;case 4:d
=C(179);break b;default:d=null;break b;}d=C(180);}}if(d===null)Tm(a.hI);else{a.g1=D1();if(!B0(d,C(178))){b=a.c_;f=new QG;f.r3=a;g=O(B,1);g.data[0]=EN(a.f);Ep(b,f,d,g);}else{b=a.c_;f=new QH;f.o4=a;g=O(B,1);g.data[0]=EN(a.f);UA(b,f,0,d,g);}}}
function AAb(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.ck;if(b!==null){b=DF(b);c=new R;T(c);K(K(c,b),C(181));$rt_globals.console.info($rt_ustr(S(c)));}b=DJ(a);if(b!==null&&!B0(C(117),b)){if(B0(C(140),b)){HY(a);GE(a.f);}else{c=a.f.cO;d=Oh(c,c.cL);if(d===null){KN(a);GE(a.f);return;}e=Fw([CO(d),CM(d),d.bD.el]);f=EN(a.f);g=Bu(1);g.data[0]=Wt(b);c=a.f.dJ;if(c.fa===null){h=Bu(0);i=B1(0);}else{j=AM2(ADX(d.b_,c.dV),d);Mk(j);h=j.i7;i=j.jl;}k=a.f.b2;d=a.c_;c=new Tl;c.ox=a;l=O(B,6);m=l.data;m[0]=f;m[1]=g;m[2]=e;e=Bu(1);e.data[0]
=k;m[3]=e;m[4]=h;m[5]=i;Ep(d,c,C(182),l);}}else GE(a.f);}
function KN(a){var b;b=AM2(a.f.dJ,null);Mk(b);SO(a,b.i7,b.jl);}
function Vd(){var a=this;B.call(a);a.oS=null;a.up=null;a.mf=null;a.tn=null;a.sW=null;a.sE=null;}
function KW(a,b,c){return PK(a,Cc(a.oS),b,c);}
function Pn(a,b,c){return PK(a,Cc(a.up),b,c);}
function PK(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.tp(c,d))return g.wd;f=f+1|0;}return null;}
function So(a,b,c){var d,e,f,g;d=(Cc(a.mf)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.tp(b,c))return g.v5;f=f+1|0;}return null;}
function EK(){var a=this;B.call(a);a.bL=0;a.cY=null;a.ef=null;a.bx=null;a.dp=0;a.c1=0;}
var ARn=0;var ARi=0;function Wb(a,b,c,d,e,f,g){var h,i,j,k,l;h=a.bx;i=h===b&&!h.f8?0:1;if(i){a.bx=b;Jm(b,d.de,a.cY.jB);}h=a.bx;j=h===null?0:Eq(h)<f?HH(Eq(a.bx),1024):HH(f,1024)+1|0;k=j<=a.dp?0:1;if(k)a.dp=j;if(!(!i&&!k)){if(ARn){l=b.e5;$rt_globals.console.info("fMeasure"+l.data);ARn=0;}if(!ARi){h=c.c6;b="alphabetic";h.textBaseline=b;}else{b=c.c6;h="top";b.textBaseline=h;}a.c1=g/1024|0;while(true){b=a.ef;if(b.j>=a.dp)break;Bv(b,Gv(d));}f=0;while(f<a.dp){HJ(a,c,e,a.c1+f|0);f=f+1|0;}a.bx.f8=0;}if(!DP(a.ef)&&g<=
Eq(a.bx)){j=g/1024|0;f=a.c1;if(j!=f){f=j-f|0;if(f<0)f= -f|0;if(f>=a.dp){f=0;while(f<a.dp){HJ(a,c,e,j+f|0);f=f+1|0;}a.c1=j;}else{while(true){g=a.c1;if(g>=j)break;HJ(a,c,e,g+a.dp|0);a.c1=a.c1+1|0;}while(true){g=a.c1;if(g<=j)break;HJ(a,c,e,g-1|0);a.c1=a.c1-1|0;}}}}}
function JC(b,c){return (c-Fk(b)|0)/2|0;}
function LP(b,c){return JC(b,c)+b.qi|0;}
function HJ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;Fi(b);e=a.bx.e5;f=d*1024|0;g=NX(a,f);if(g>=a.bx.k.data.length)return;h=!g?0.0:e.data[g-1|0];i=f;j=h-i+a.bL;k=a.cY.jB;a:{while(true){l=a.bx.k.data;if(g>=l.length)break a;m=k.data;n=l[g];o=m[Il(n)];p=!ARi?LP(o,c):JC(o,c);m=e.data;CG(b,o);Ej(b,n.p,j,p);j=m[g]-i+a.bL;if(j>1024.0)break;g=g+1|0;}}Em(Bp(a.ef,d%a.dp|0),b);}
function Xo(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq;if(DP(a.ef))return;if(!a.dp)return;if(g>Eq(a.bx))return;o=a.bx;p=o.dZ;q=o.k;r=g/1024|0;s=NX(a,g);t= -a.bL|0;u=f;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=e)break;y=p.data;o=Bp(a.ef,r%a.dp|0);z=v[s];ba=y[s]+a.bL|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=Be(be,ba)-g|0;if(bc&&x)bf=bf+a.bL|0;if((t+bf|0)>e)bf=e-t|0;bg=i!==null?0:1;b:{if(!bg){bh
=!x?a.bL:2*a.bL|0;bi=i.b;w=i.a;if(!(bi<w&&g<=w&&(g+bf|0)>(bi+bh|0)?0:1)){bj=0;break b;}}bj=1;}c:{if(!bg){bk=!x?a.bL:2*a.bL|0;if(g>=i.b&&(g+bf|0)<=(i.a+bk|0)?1:0){bl=1;break c;}}bl=0;}bm=null;if(l&&!m)bm=h.bI.hA;if(z===j)bm=h.bI.nI;bn=BM(k);d:{while(BN(bn)){if(BB(BP(bn),z)){bi=1;break d;}}bi=0;}if(bi)bm=h.bI.ur;if(n!==null){v=n.wm;if(v===null)bh=0;else{v=v.data;bh=s>=v.length?0:v[s];}bm=V8(h.dB,h,bh,n.jG);}if(!bl&&!bj){i.a=Be(i.a,Eq(a.bx));Y$(a,d,t+c|0,b,f,h,o,z,bf,g>=i.b?bf:(Be(ba,be)-i.b|0)-(!x?a.bL:0)|0,(g
+bf|0)<=(i.a+(!x?a.bL:2*a.bL|0)|0)?0:(Be(ba,be)-i.a|0)-(!x?a.bL:0)|0,g-bb|0,bm);}else{Cb(a.cY.iF,g-bb|0,0.0,bf,u);Bn(a.cY.fT,bf,f);GR(a,d,t+c|0,b,z,o,h,bm,bl);}if((z.bB&12)>0){bi=t+c|0;DQ(d,1);o=a.cY;bo=o.jz;bo.b=bf;w=b+o.tR|0;bk=w-o.t4|0;bp=o.q_;bq=w+bp;bm=o.gV;S9();bn=ARo.hk.hB;Hq(d,d.g4);H4(d.g4,d.Z,bi,bk,bo,d.da);ZX(d.g4,d.Z,bp,bq,bm);o=d.g4;Hr(d.Z,o.mq,bn);Hk(d);DQ(d,0);}g=g+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function Y$(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s;n=a.cY.iF;o=l;p=i-j|0;q=p;r=e;Cb(n,o,0.0,q,r);Bn(a.cY.fT,p,e);GR(a,b,c,d,h,g,f,m,0);l=l+i|0;Cb(n,l-k|0,0.0,k,r);Bn(a.cY.fT,k,e);c=c+i|0;GR(a,b,c-k|0,d,h,g,f,m,0);s=l-j|0;i=j-k|0;Cb(n,s,0.0,i,r);Bn(a.cY.fT,i,e);GR(a,b,c-j|0,d,h,g,f,m,1);}
function GR(a,b,c,d,e,f,g,h,i){var j,k,l,m,n;j=a.cY;k=j.fT;if(k.b&&k.a){l=j.iF;if(l.bV!==0.0&&l.Y!==0.0){m=g.rC.data[e.bR];if(i)n=g.bI.lt;else{n=m.nz;if(n===null)n=g.bI.fP;if(h!==null)n=h;}if(j.lv)Ek(b,c,d,k,l,f,m.hB,n);else Eh(b,c,d,k,l,f,m.hB,n,j.k2);return;}return;}}
function NX(a,b){var c,d,e,f,g,h,i;c=a.bx;d=c.e5;e=0;f=c.k.data.length;g=b;b=BF(e,f);if(b>0){c=new BI;W(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BF(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function Vy(a){a.bx=null;DO(a.ef,new R5);GH(a.ef);}
function Xv(a,b,c,d,e,f,g,h,i){var j,k;j=Eq(a.bx);if(j)j=j+a.bL|0;if(!j)j=j-a.bL|0;k=Ba( -a.bL|0,j-g|0);if(k>=h)return;Bn(f,h-k|0,e);BC(b,c+k|0,d,f,i);}
function XB(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a:{h=c.data;i=O(EK,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=BG(g,e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.bx===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}c=i.data;e=0;f=c.length;while(e<f){if(c[e]===null){if(j>=k)p=null;else{b=j+1|0;p=h[j];j=b;}while(j<k&&p===null){b=j+1|0;p=h[j];j=b;}if(p!==null){c[e]=p;h[j-1|0]=null;}else{o=new EK;o.bL=3;o.ef=Bz();o.c1=0;o.cY=d;c[e]=o;}}e=e+1|0;}while(j<k){p=h[j];if(p!==null)Vy(p);j=j+1|0;}return i;}
function Zb(){ARi=0;}
function ABf(){var a=this;B.call(a);a.eE=null;a.cE=null;a.dL=null;a.d6=null;a.hn=null;a.ho=null;}
function Tn(){var a=new ABf();AGy(a);return a;}
function AGy(a){a.eE=new Bq;a.cE=new Bq;a.dL=new Bq;a.d6=new Bq;a.hn=new B4;a.ho=new B4;}
function PM(a){var b;b=a.cE;return !V(b.b,b.a)?0:1;}
function G1(a,b){return Fv(b,a.dL,a.d6);}
function Hn(a,b,c,d){var e,f,g,h,i;e=G1(a,b);f=Fv(b,a.eE,a.cE);if(!e&&!f)return null;if(!f){if(!d)c.m(Ul(a,b.b-a.dL.b|0));else c.m(Om(a,b.a-a.dL.a|0));}g=!d?a.eE.b+(a.cE.b/2|0)|0:a.eE.a+(a.cE.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new QR;b.tN=a;b.tO=c;b.tM=i;}else{b=new QQ;b.n$=a;b.n8=c;b.n9=i;}return b;}
function F9(a,b,c){if(b!==null&&c!==null){Fe(a.hn,c);Fe(a.ho,b);return;}}
function X7(b,c){var d;d=new Sz;d.qk=b;d.uC=c;return d;}
function Om(a,b){var c,d,e;c=a.d6.a;d=a.cE.a;e=c-d|0;return X7(Be(Ba(0,b-(d/2|0)|0),e),e);}
function Ul(a,b){var c,d,e;c=a.d6.b;d=a.cE.b;e=c-d|0;return X7(Be(Ba(0,b-(d/2|0)|0),e),e);}
function Vo(a,b,c,d,e,f,g){UI(a,b,c,d,e,f,g,1);}
function Pr(a,b,c,d,e,f,g){UI(a,b,c,d,e,f,g,0);}
function UI(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bn(a.d6,0,0);Bn(a.cE,0,0);}else{i=Be(g*3|0,d);j=Ba(OJ(d,d,e),i);e=e-d|0;i=d-j|0;i=i?OJ(b,i,e):0;if(!h){k=a.eE;k.b=i+c|0;k.a=f-g|0;l=a.cE;l.b=j;l.a=g;l=a.dL;l.b=c;l.a=k.a;k=a.d6;k.b=d;k.a=g;}else{k=a.eE;k.b=f-g|0;k.a=i+c|0;l=a.cE;l.b=g;l.a=j;l=a.dL;l.b=k.b;l.a=c;k=a.d6;k.b=g;k.a=d;}}}
function Ha(a,b){var c;c=a.dL;BC(b,c.b,c.a,a.d6,a.hn);}
function Hg(a,b){var c,d;c=a.cE;c.b=c.b-2|0;c.a=c.a-2|0;d=a.eE;BC(b,d.b+1|0,d.a+1|0,c,a.ho);b=a.cE;b.b=b.b+2|0;b.a=b.a+2|0;}
function HD(a,b,c){return G1(a,b)&&Fl(c)?1:0;}
function XS(){var a=this;B.call(a);a.wq=20;a.eS=null;a.ej=null;a.hQ=0.0;a.hJ=null;a.ld=0;a.ih=0;a.ch=null;a.i0=null;a.d5=null;a.e1=null;a.eY=0;}
function AMf(){var a=new XS();AMw(a);return a;}
function AMw(a){a.wq=20;a.eS=new Bq;a.ej=new Bq;a.ch=Bz();a.i0=Eb(0);}
function Z3(a,b,c,d,e){var f,g,h,i,j,k;f=c/20|0;g=a.ch;h=Bp(g,f%g.j|0);i=a.eS;j=V(a.ch.j,a.ih);f=h.eg.a;k=((h.g6.a-(b%j|0)|0)+j|0)%j|0;if((k+f|0)>j)k= -(b%Kn(h.V)|0)|0;b=c%h.dq|0;f=h.G;k=k+V(b,f)|0;if(k<( -f|0))k=k+j|0;Bn(h.cS,h.eg.b,f);g=h.dy;b=c%h.dq|0;c=h.G;Cb(g,0.0,V(b,c),h.eg.b,c);Ed(h,e,k,i,d.nJ,d.l3);}
function RF(a,b,c,d){var e,f,g,h,i,j;e=a.ch.j;while(true){f=a.ch.j;g=V(f,a.ih);if(g>(d+a.ld|0))break;h=Cd(0,g);i=new Ou;g=a.ej.b;f=a.ld;j=a.hJ;i.cS=new Bq;i.dy=new B4;i.g6=h;i.dq=20;i.G=f;i.eg=Cd(g,20*f|0);i.fU=LP(j,f);if(i.V===null)i.V=Gv(b);Bv(a.ch,i);}if(f==e)return;Qd(a,c);}
function Qd(a,b){var c,d,e,f,g,h,i,j,k;c=a.ch;d=c.j;e=V((b/(d*20|0)|0)+1|0,d)*20|0;c=BM(c);while(BN(c)){f=BP(c);g=a.d5;h=a.hQ;Fi(g);i=0;while(true){j=f.dq;if(i>=j)break;k=e-V(d,j)|0;if(k<b)k=e;e=k+1|0;Fz(f,g,DY(e),V(f.G,i)+f.fU|0,h);i=i+1|0;}Em(f.V,g);f.mg=g.je;}}
function IR(a){DO(a.ch,new Lx);GH(a.ch);a.d5=CZ(a.d5,null);a.e1=CZ(a.e1,null);}
function ML(){B.call(this);this.wM=null;}
function MK(){B.call(this);this.lY=null;}
function ACY(a,b){var c;c=a.lY;E8(c,GQ(b,IT(c)));}
function MJ(){B.call(this);this.p7=null;}
function ACa(a,b){var c;c=a.p7;HL(c,GQ(b,RL(c)));}
function S8(){var a=this;B.call(a);a.iF=null;a.fT=null;a.jz=null;a.gV=null;a.jB=null;a.k2=0.0;a.q_=0.0;a.uL=0;a.tR=0;a.t4=0;a.lv=0;}
function MI(){B.call(this);this.s6=null;}
function AB_(a){var b,c;b=a.s6;c=b.i2?0:1;b.i2=c;b.fe.k2=!c?0.0:0.5;b=new R;T(b);GG(K(b,C(183)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function MP(){B.call(this);this.nA=null;}
function AFj(a){var b,c;b=a.nA;c=b.hr?0:1;b.hr=c;b=new R;T(b);GG(K(b,C(184)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function MO(){B.call(this);this.q9=null;}
function ANo(a){var b,c;b=a.q9;c=b.iJ^1;b.iJ=c;b=new R;T(b);GG(K(b,C(185)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function MN(){B.call(this);this.uA=null;}
function AHr(a){var b,c,d,e,f;b=a.uA;c=(b.dr+3|0)%6|0;b.dr=c;d=b.e7.data;e=d.length;f=0;while(f<e){b=d[f];b.bL=c;b=b.bx;if(b!==null)b.f8=1;f=f+1|0;}}
function MM(){B.call(this);this.nf=null;}
function AJw(a){var b;b=a.nf;b.by=b.by?0:1;IR(b.c7);b.c7=AMf();Rr(b,b.U,b.cs,b.bG.bW);}
function MH(){B.call(this);this.qq=null;}
function AMP(a){var b;b=a.qq;b.ia=b.ia?0:1;}
function MG(){B.call(this);this.tx=null;}
function AB1(a){var b;b=a.tx;b.kZ=b.kZ?0:1;}
var EV=F(Cg);
var ARg=null;var ARp=null;var ARh=null;var ARq=null;function AB9(){AB9=Bf(EV);AIo();}
function Zk(a,b){var c=new EV();Y_(c,a,b);return c;}
function Y_(a,b,c){AB9();C4(a,b,c);}
function AIo(){var b;ARg=Zk(C(186),0);ARp=Zk(C(187),1);b=Zk(C(188),2);ARh=b;ARq=G(EV,[ARg,ARp,b]);}
var AAq=F(0);
function TE(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=CX(b,f+g|0);C7(c,0,d,f,g);return d;}
function JM(b,c,d){C7(b,c,d,0,d.data.length);return d;}
function P4(b,c,d){var e;if(c>0)C7(b,0,d,0,c);e=d.data.length;if(c<e)C7(b,c+1|0,d,c,e-c|0);return d;}
function Yn(b,c,d,e){var f;if(c>0)C7(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)C7(b,d,e,c,f-d|0);}return e;}
function Gt(b){var c;c=new TP;c.qs=b;return c;}
function XF(b,c){if(b.data.length!=c)b=CX(b,c);return b;}
function AAo(b,c,d){var e;e=c.data.length;if(e==d)c=CX(c,e*2|0);c.data[d]=b;return c;}
function S2(b,c,d){var e;e=c.data.length;if(e==d)c=KP(c,e*2|0);c.data[d]=b;return c;}
function KO(b){return Mt(b,b.data.length);}
var WX=F();
function Mt(b,c){var d,e,f,g;b=b.data;d=B1(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function KP(b,c){var d,e,f,g;b=b.data;d=Eb(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function H2(b,c){var d,e,f,g;b=b.data;d=Bu(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function CX(b,c){var d,e,f,g;d=b.data;e=ZZ(Hj(Bt(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function GI(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BI;W(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Xm(b,c,d,e){var f,g;if(c>d){e=new BI;W(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function X0(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AQl;e=O(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.tY(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function Zr(b,c){return R_(b,0,b.data.length,c);}
function R_(b,c,d,e){var f,g,h,i,j;f=BF(c,d);if(f>0){g=new BI;W(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function B4(){var a=this;B.call(a);a.bk=0.0;a.bA=0.0;a.Y=0.0;a.bV=0.0;}
function Cb(a,b,c,d,e){a.bk=b;a.bA=c;a.Y=d;a.bV=e;}
function Fe(a,b){a.bk=b.bk;a.bA=b.bA;a.Y=b.Y;a.bV=b.bV;return a;}
function AM6(a,b){if(a===b)return 1;return b!==null&&Bt(a)===Bt(b)&&Jk(a,b)?1:0;}
function Jk(a,b){return b.bk===a.bk&&b.bA===a.bA&&b.Y===a.Y&&b.bV===a.bV?1:0;}
var Lk=F(0);
function Fl(a){return Dv(a,null);}
function OX(){B.call(this);this.qC=null;}
function AF6(a){IE(a.qC);}
function OV(){B.call(this);this.t_=null;}
function ABU(a){I1(a.t_);}
var J8=F(0);
function W0(){var a=this;D8.call(a);a.cd=null;a.j=0;}
function Bz(){var a=new W0();AFl(a);return a;}
function AFl(a){a.cd=O(B,10);}
function Iq(a,b){var c,d;c=a.cd.data.length;if(c<b){d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.cd=CX(a.cd,d);}}
function Bp(a,b){Id(a,b);return a.cd.data[b];}
function AJb(a){return a.j;}
function Bv(a,b){var c,d;Iq(a,a.j+1|0);c=a.cd.data;d=a.j;a.j=d+1|0;c[d]=b;a.bH=a.bH+1|0;return 1;}
function Qf(a,b,c){var d,e,f;N$(a,b);Iq(a,a.j+1|0);d=a.j;e=d;while(e>b){f=a.cd.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cd.data[b]=c;a.j=d+1|0;a.bH=a.bH+1|0;}
function E7(a,b){var c,d,e,f;Id(a,b);c=a.cd.data;d=c[b];e=a.j-1|0;a.j=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.bH=a.bH+1|0;return d;}
function TN(a,b){var c;c=I$(a,b);if(c<0)return 0;E7(a,c);return 1;}
function GH(a){Xm(a.cd,0,a.j,null);a.j=0;a.bH=a.bH+1|0;}
function Xn(a,b,c){var d,e,f,g,h,i;N$(a,b);if(c.dC())return 0;Iq(a,a.j+c.cr()|0);d=c.cr();e=a.j;f=e-1|0;while(f>=b){g=a.cd.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.j=e+d|0;h=c.bQ();i=0;while(i<d){g=a.cd.data;e=b+1|0;g[b]=h.bJ();i=i+1|0;b=e;}a.bH=a.bH+1|0;return 1;}
function Id(a,b){var c;if(b>=0&&b<a.j)return;c=new BS;W(c);J(c);}
function N$(a,b){var c;if(b>=0&&b<=a.j)return;c=new BS;W(c);J(c);}
function DO(a,b){var c;c=0;while(c<a.j){b.m(a.cd.data[c]);c=c+1|0;}}
var VQ=F(0);
var ARc=null;function AAC(){ARc=new My;}
function Vm(){var a=this;B.call(a);a.cH=null;a.bp=null;a.eQ=null;a.hf=null;}
function AHk(){var a=new Vm();AJZ(a);return a;}
function AJZ(a){a.cH=new Bq;a.bp=new Bq;a.eQ=new B4;a.hf=new B4;}
function RQ(a){Bn(a.bp,0,0);}
function Jb(a){var b;b=a.bp;return V(b.b,b.a)?0:1;}
function G_(a,b){return Fv(b,a.cH,a.bp);}
var EE=F();
function I8(){EE.call(this);this.wd=null;}
function Rw(){EE.call(this);this.v5=null;}
function OQ(){EE.call(this);this.xp=null;}
var Gb=F(0);
var Ra=F(0);
var OC=F(0);
var ARd=0.0;function RP(b){Cb(b,1.0471975803375244,0.75,1.25,0.375);}
function WA(){ARd=Xt(Xt(0.5,0.375),4.0);}
var Zv=F();
function Jf(){B.call(this);this.wD=null;}
var AQD=null;var ARr=null;function AGz(){AGz=Bf(Jf);ANb();}
function AEI(a){var b=new Jf();We(b,a);return b;}
function We(a,b){AGz();a.wD=b;}
function ANb(){AQD=AEI(C(189));ARr=AEI(C(190));}
function Qp(){B.call(this);this.tf=null;}
function Dv(a,b){var c,d,e;c=a.tf;d=c.qr;e=c.dm;if(BB(b,d))b=d;else{e=e.style;if(b!==null&&H(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}c.qr=b;return 1;}
function AAS(){var a=this;B.call(a);a.bv=null;a.bo=null;a.cQ=0;}
function ACZ(){var a=new AAS();AMT(a);return a;}
function AD8(a){var b=new AAS();AIy(b,a);return b;}
function AMT(a){a.bv=new Gc;a.bo=new Gc;}
function AIy(a,b){a.bv=new Gc;a.bo=new Gc;G9(a,b);}
function G9(a,b){SG(a.bv,b.bv);SG(a.bo,b.bo);a.cQ=b.cQ;}
function Kc(a,b,c){BW(a.bo,b,c);if(!a.cQ)BW(a.bv,b,c);}
function Oo(a,b){BW(a.bv,b,0);BW(a.bo,b+1|0,0);}
function Dr(a){if(Qi(a.bv,a.bo)>0)return a.bo;return a.bv;}
function E0(a){if(Qi(a.bv,a.bo)<0)return a.bo;return a.bv;}
function Zy(a,b){var c,d,e,f;c=Dr(a);d=E0(a);e=c.H;if(e<=b){f=BF(b,d.H);if(f<=0)return Cd(b<=e?c.Q:0,f>=0?d.Q:(-1));}return null;}
function CY(a){var b,c;b=a.bv;c=a.bo;return (b===c?1:c!==null&&Bt(b)===Bt(c)?(b.H==c.H&&b.Q==c.Q?1:0):0)?0:1;}
function AAy(a,b){var c,d;if(!CY(a))return 0;c=Dr(a);d=E0(a);return c.H<=b&&b<d.H?1:0;}
function Su(){var a=this;B.call(a);a.ea=null;a.d8=0;a.c2=0;}
function TC(a,b){var c,d,e;c=a.d8;d=a.ea;if(c==d.data.length)a.ea=CX(d,c+16|0);d=a.ea.data;e=a.d8;a.d8=e+1|0;d[e]=b;}
function Qk(a){var b,c,d;b=a.c2;c=a.d8-1|0;if(b==c)a.c2=b-1|0;d=a.ea.data;a.d8=c;d[c]=null;}
function Qc(){var a=this;B.call(a);a.v=null;a.cO=null;a.dJ=null;a.dd=null;a.cR=null;a.gI=null;a.gs=null;a.b2=0;a.kh=0;a.rj=0.0;}
function BG(a,b){return a.v.data[b];}
function Ci(a){return a.v.data.length;}
function Te(a){return Eo(a,Ci(a));}
function E9(a,b){return a.v.data[b].z;}
function AAF(a,b,c){var d,e,f,g,h;d=a.v;e=d.data;f=e[b];d=CX(d,e.length+1|0);e=d.data;a.v=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Dk(O(B_,0));a.v.data[b+1|0]=f;}else if(c==f.z){e[b]=f;e[b+1|0]=Dk(O(B_,0));}else{e=(G5(f,c)).data;d=a.v.data;d[b]=e[0];d[b+1|0]=e[1];}EZ(a,b,c,0,C(111));}
function JV(a,b){var c,d,e,f,g,h,i;c=a.v.data;d=c[b];e=c[b+1|0];f=Dk(TE(d.k,e.k));g=a.v;h=g.data.length;if(b<h&&b>=0){i=O(CL,h-1|0);c=i.data;P4(g,b,i);c[b]=f;a.v=i;return;}d=new Bo;W(d);J(d);}
function LL(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.v.data;if(!(c<d[b].z?0:1)){d=(BG(a,b)).k.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<H(h.p)){f=I(h.p,g);break a;}g=g-H(h.p)|0;f=f+1|0;}f=0;}FP();h=new Bw;d=B1(1);d.data[0]=f;Ij(h,d);EZ(a,b,c,1,h);h=a.v.data[b];i=h.k;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=H(d[j].p);if(c<b)break;c=c-b|0;j=j+1|0;}}if(H(d[j].p)==1)h.k=P4(i,j,O(B_,e-1|0));else{k=d[j];if(c<=0)l=Ds(DT(k.p,1),k.bR,k.bB);else if(c>=(H(k.p)-1|0)){l=new B_;m=k.p;R3(l,B9(m,0,H(m)-
1|0),k.bR,k.bB);}else{i=B1(H(k.p)-1|0);n=i.data;b=0;while(b<c){n[b]=I(k.p,b);b=b+1|0;}b=n.length;while(c<b){m=k.p;e=c+1|0;n[c]=I(m,e);c=e;}l=Ds(GA(i),k.bR,k.bB);}d[j]=l;}h.z=h.z-1|0;DZ(h);}else if(b!=(d.length-1|0)){EZ(a,b,c,1,C(111));JV(a,b);}}
function V3(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){QS(a.v.data[b],c,e[0]);return;}g=f-1|0;d=(G5(a.v.data[b],c)).data;h=d[0];i=d[1];d=a.v;j=CX(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.k.data;f=l.length;c=!f?0:H(l[f-1|0].p);Li(h,h.k.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!DU(e[m])?Xc(e[m]):Dk(O(B_,0));d[b+m|0]=k;m=m+1|0;}Li(i,0,0,e[g]);d[b+g|0]=i;a.v=j;}
function T2(a,b){var c,d,e,f,g,h,i;c=Dr(b);d=E0(b);e=c.H;if(e==d.H)return B9(EA(a.v.data[e]),c.Q,d.Q);f=new R;T(f);b=a.v.data[c.H];e=c.Q;BY(DK(f,DT(EA(b),e)),10);g=a.v.data;e=c.H+1|0;h=d.H;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;Wo(DK(f,EA(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.v.data[d.H];h=d.Q;DK(f,B9(EA(b),0,h));return S(f);}b=new Ux;W(b);J(b);}
function LU(a,b,c){var d;Uj(a,b);d=Dr(b);EZ(a,d.H,d.Q,1,c);}
function Uj(a,b){var c,d,e,f,g,h,i;a:{c=Dr(b);d=E0(b);e=c.H;if(e==d.H)FF(a.v.data[e],c.Q,d.Q);else{b=a.v.data[e];FF(b,c.Q,b.z);FF(a.v.data[d.H],0,d.Q);e=c.H+1|0;f=d.H;g=a.v;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=O(CL,(h-f|0)+e|0);Yn(g,e,f,i);a.v=i;JV(a,c.H);break a;}b=new Bo;W(b);J(b);}b=new Bo;W(b);J(b);}}}
function HE(a,b,c){return Di(b,Fn(BG(a,b),c));}
function UT(a,b){var c,d,e;c=0;d=0;while(true){e=a.v.data.length;if(c>=e)break;if((d+(BG(a,c)).z|0)>=b)return Cd(c,b-d|0);d=d+((BG(a,c)).z+1|0)|0;c=c+1|0;}return Cd(e,0);}
function Eo(a,b){var c,d,e;c=0;d=a.v.data.length;e=0;while(e<b){c=c+E9(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Ku(a,b){return KH(BG(a,b.X),b.bf);}
function EN(a){var b,c,d,e,f,g,h,i,j;b=B1(Te(a));c=b.data;d=a.v.data.length;e=0;f=0;while(e<d){g=a.v.data[e].k.data;h=g.length;i=0;while(i<h){j=g[i].p;OI(j,0,H(j),b,f);f=f+H(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function EZ(a,b,c,d,e){var f,g,h,i,j,k;a:{a.b2=a.b2+1|0;f=a.gI;g=O(F4,1);h=new F4;h.dv=b;h.dG=c;i=KQ(e,C(111),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=Cd(b,c+H(i[0])|0);break a;}k=Cd((b+j|0)-1|0,H(i[j-1|0]));break a;}}k=Cd(b,c);}i=g.data;h.kc=k;h.lj=d;h.e9=e;i[0]=h;Bv(f,g);I3(a,b,c,d,e);}
function I3(a,b,c,d,e){var f;f=Eo(a,b)+c|0;if(!d){Nn(a.cO,f,H(e));SM(a.dJ,f,H(e));}else{Uz(a.cO,f,H(e));Mf(a.dJ,f,H(e));}}
function L8(a,b){var c,d,e;c=KQ(b.e9,C(111),(-1));if(b.lj){V3(a,b.dv,b.dG,c);Nn(a.cO,Eo(a,b.dv)+b.dG|0,H(b.e9));SM(a.dJ,Eo(a,b.dv)+b.dG|0,H(b.e9));}else{c=c.data;d=ACZ();BW(d.bv,b.dv,b.dG);e=c.length;if(e==1)BW(d.bo,b.dv,b.dG+H(c[0])|0);else BW(d.bo,(b.dv+e|0)-1|0,H(c[e-1|0]));Uj(a,d);Uz(a.cO,Eo(a,b.dv)+b.dG|0,H(b.e9));Mf(a.dJ,Eo(a,b.dv)+b.dG|0,H(b.e9));}return b.kc;}
function Se(a){return a.kh==a.b2?0:1;}
function GE(a){a.kh=a.b2;}
function Od(a){var b,c,d;a.gs=Bu(a.v.data.length+1|0);b=0;while(b<a.v.data.length){c=a.gs.data;d=b+1|0;c[d]=(c[b]+(BG(a,b)).z|0)+1|0;b=d;}}
function VF(a,b){var c,d,e,f,g,h;c=a.gs;if(c===null){d=0;e=0;a:{while(true){c=a.v.data;f=c.length;if(e>=f)break;g=c[e].z;if(b<=(d+g|0)){h=Di(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=Di(f,0);}return h;}d=Zr(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=Di(d,b-(d<0?0:a.gs.data[d])|0);if(h.bf>=(BG(a,h.X)).z){h.X=h.X+1|0;h.bf=0;}return h;}
var My=F();
function AMQ(a){}
function Gc(){var a=this;B.call(a);a.H=0;a.Q=0;}
function BW(a,b,c){a.H=b;a.Q=c;}
function SG(a,b){a.H=b.H;a.Q=b.Q;}
function Qi(a,b){var c;c=BF(a.H,b.H);if(c)return c;return BF(a.Q,b.Q);}
function JL(){var a=this;B.call(a);a.kl=null;a.i1=null;}
function KA(a){return a.kl.X;}
function IK(a){return a.kl.bf;}
function CL(){var a=this;B.call(a);a.k=null;a.z=0;a.e5=null;a.dZ=null;a.dn=null;a.f7=null;a.fi=0;a.f8=0;a.gw=0;}
var ARs=0;var ARt=0;var ARj=0;function Xc(a){var b=new CL();ZO(b,a);return b;}
function Dk(a){var b=new CL();Px(b,a);return b;}
function ZO(a,b){var c;c=O(B_,1);c.data[0]=XU(b);Px(a,c);}
function Px(a,b){var c,d,e,f;c=b.data;a.k=b;d=0;e=c.length;f=0;while(f<e){d=d+H(c[f].p)|0;f=f+1|0;}a.z=d;DZ(a);}
function Ig(a){return a.k.data.length;}
function Fn(a,b){var c;c=HS(a,b);return c<=0?0:a.dn.data[c-1|0];}
function HS(a,b){var c,d,e,f;c=a.k.data.length;if(!c)return (-1);if(!(a.dn!==null&&!a.gw)){UU(a);d=0;e=0;f=a.k.data.length;while(d<f){e=e+H(a.k.data[d].p)|0;a.dn.data[d]=e;d=d+1|0;}a.gw=0;}d=R_(a.dn,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function KH(a,b){var c;c=a.k.data;if(!c.length)return null;return c[HS(a,b)];}
function FF(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.z){a.k=O(B_,0);DZ(a);a.z=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.k.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=H(g[e].p);i=H(a.k.data[f].p);j=BF(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.k.data[f];if(!b&&c==H(k.p)?1:0){g=a.k;a.k=P4(g,e,O(B_,g.data.length-1|0));a.z=a.z-d|0;DZ(a);return;}a.k.data[e]=Ds(GY(B9(k.p,0,b),DT(k.p,c)),k.bR,k.bB);}else{g=a.k.data;l=g[e];m=g[f];if(b){if(b!=
H(l.p))a.k.data[e]=Ds(B9(l.p,0,b),l.bR,l.bB);e=e+1|0;}if(c==H(m.p))f=f+1|0;else if(c)a.k.data[f]=Ds(DT(m.p,c),m.bR,m.bB);g=a.k;a.k=Yn(g,e,f,O(B_,(g.data.length-f|0)+e|0));}a.z=a.z-d|0;DZ(a);}
function G5(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return G(CL,[Dk(O(B_,0)),a]);if(b>=a.z)return G(CL,[a,Dk(O(B_,0))]);c=a.k;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=H(e[d].p);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return G(CL,[Dk(JM(c,0,O(B_,d))),Dk(JM(c,d,O(B_,f-d|0)))]);h=e[d];e=JM(c,0,O(B_,d+1|0));i=e.data;j=JM(c,d,O(B_,f-d|0));c=j.data;i[d]=Ds(B9(h.p,0,b),h.bR,h.bB);c[0]=Ds(DT(h.p,b),h.bR,h.bB);return G(CL,[Dk(e),Dk(j)]);}
function QS(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.k.data;if(e>=f.length)break a;g=H(f[d].p);if(b<=g)break;b=b-g|0;d=e;}}Li(a,d,b,c);}
function Li(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(DU(d))return;e=a.k;f=e.data;g=f.length;if(!g){h=O(B_,1);h.data[0]=XU(d);a.k=h;}else if(!b&&!c){h=O(B_,g+1|0);f=h.data;C7(e,0,h,1,g);f[0]=XU(d);a.k=h;}else{i=f[b];if(c<=0)j=Ds(GY(d,i.p),i.bR,i.bB);else if(c>=H(i.p))j=Ds(GY(i.p,d),i.bR,i.bB);else{k=H(d);l=k+c|0;m=H(i.p)-c|0;e=B1(H(i.p)+k|0);h=e.data;n=0;while(n<c){h[n]=I(i.p,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=I(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=I(i.p,g+c|0);g=g+1|0;}j=Ds(GA(e),i.bR,i.bB);}f[b]=j;}a.z=a.z+
H(d)|0;DZ(a);}
function Mj(a){var b,c,d,e,f,g;b=0;c=a.k.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<H(f.p)){if(I(f.p,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Jm(a,b,c){var d,e,f,g,h,i,j;d=a.k.data.length;e=a.e5;if(!(e!==null&&e.data.length>=d)){a.e5=ABW(d);a.dZ=Bu(d);a.fi=1;}UU(a);if(!a.fi)ARt=ARt+1|0;else{f=0;g=0.0;ARs=ARs+1|0;h=0;while(h<d){i=c.data;j=a.k.data[h];f=f+H(j.p)|0;a.dn.data[h]=f;CG(b,i[Il(j)]);g=g+Gd(b,j.p);a.e5.data[h]=g;a.dZ.data[h]=g+0.5|0;h=h+1|0;}a.z=f;a.fi=0;a.gw=0;}}
function UU(a){var b;b=a.dn;if(!(b!==null&&b.data.length>=a.k.data.length)){a.dn=Bu(a.k.data.length);a.gw=1;}}
function DZ(a){a.fi=1;a.f8=1;a.gw=1;a.f7=null;}
function QK(a,b,c,d){var e,f,g,h,i,j,k;if(a.f7===null)a.f7=O($rt_arraycls($rt_intcls()),a.k.data.length);e=a.f7.data[d];if(e===null){e=c.data;f=a.k.data[d];CG(b,e[Il(f)]);f=f.p;e=Bu(H(f)-1|0);c=ES(f);g=!d?0.0:a.e5.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bw;k=i+1|0;Lf(f,c,0,k);h[i]=g+Gd(b,f)+0.5|0;i=k;}a.f7.data[d]=e;}return e;}
function FK(a,b,c,d){var e,f,g,h,i;if(a.k.data.length&&b){if(!(!a.fi&&a.dZ!==null))Jm(a,c,d);if(b>=a.z)return a.dZ.data[a.k.data.length-1|0];e=0;f=0;a:{while(true){g=a.k.data;if(f>=g.length)break a;h=e+H(g[f].p)|0;i=BF(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.dZ.data[f];}return (QK(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function Eq(a){var b,c,d;a:{b=a.k.data.length;if(b){c=a.dZ.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function F0(a,b){var c;if(b>=a.z)return b+1|0;c=HS(a,b);return a.dn.data[c];}
function EA(a){var b,c,d,e;b=new R;Fp(b,a.z);c=a.k.data;d=c.length;e=0;while(e<d){DK(b,c[e].p);e=e+1|0;}return S(b);}
function Yj(){ARj=0;}
var V9=F(Bo);
var T0=F(0);
function Zd(){B.call(this);this.kM=null;}
function AN6(a){var b=new Zd();AIB(b,a);return b;}
function AIB(a,b){a.kM=b;}
function D5(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.kM));}
function CR(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.kM));}
var SE=F(0);
function JQ(){var a=this;B.call(a);a.hm=null;a.hX=null;a.w_=null;}
function Zt(a,b){var c=new JQ();AGv(c,a,b);return c;}
function ANG(a,b,c){var d=new JQ();M0(d,a,b,c);return d;}
function Wn(b){var c,d,e,f,g,h,i;c=new JQ;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=O(Bw,0);else{f=O(Bw,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=Eu(e[h]);h=h+1|0;}}}else f=O(Bw,0);M0(c,d,b,f);return c;}
function AGv(a,b,c){M0(a,b,c,O(Bw,0));}
function M0(a,b,c,d){a.hm=b;a.hX=c;a.w_=d;}
function Ir(a){var b;b=a.hm;return Eu(b!==null?b.name:a.hX.name);}
function Oa(){var a=this;B.call(a);a.fa=null;a.dV=null;}
function ADX(a,b){var c=new Oa();AFw(c,a,b);return c;}
function AFw(a,b,c){a.fa=b;a.dV=c;}
function SM(a,b,c){var d;d=a.fa;if(d===null)return;Ps(a,d,b,c);}
function Mf(a,b,c){var d;d=a.fa;if(d===null)return;Sh(a,d,b,c);}
function Ps(a,b,c,d){var e,f,g,h;e=b.dD.bQ();while(e.b$()){VM(a,e.bJ(),c,d);}e=b.d2.bQ();while(e.b$()){f=e.bJ();g=new RY;g.pN=a;DL(a,g,f,c,d);}h=b.fv.bQ();while(h.b$()){e=h.bJ();VM(a,e.hH,c,d);f=new RZ;f.mp=a;DL(a,f,e.iv,c,d);}b=b.ca.bQ();while(b.b$()){Ps(a,b.bJ(),c,d);}}
function VM(a,b,c,d){IF(a,b.dE,c,d);}
function DL(a,b,c,d,e){var f,g;a:{if(c instanceof FC){f=c.fR;g=new V0;g.nk=a;g.ni=b;g.nh=d;g.nj=e;DO(f,g);}else{if(!(c instanceof HK)){if(!(c instanceof H5))break a;f=c;DL(a,b,f.gU,d,e);DL(a,b,f.f4,d,e);return;}g=c.f2;f=new V1;f.uw=a;f.uv=b;f.uu=d;f.ut=e;DO(g,f);}}if(c!==null){c=c.er;if(c!==null)b.h$(c,Ct(d),Ct(e));}}
function IF(a,b,c,d){var e;e=b.cV;if(e>=c)b.cV=e+d|0;}
function Sh(a,b,c,d){var e,f,g,h;e=b.dD.bQ();while(e.b$()){Hm(a,(e.bJ()).dE,c,d);}e=b.d2.bQ();while(e.b$()){f=e.bJ();g=new QV;g.sI=a;DL(a,g,f,c,d);}h=b.fv.bQ();while(h.b$()){e=h.bJ();Hm(a,e.hH.dE,c,d);f=new QW;f.rT=a;DL(a,f,e.iv,c,d);}b.dD.kE(new QU);b.d2.kE(new QT);b=b.ca.bQ();while(b.b$()){Sh(a,b.bJ(),c,d);}}
function Hm(a,b,c,d){var e;e=b.cV;if(e>=c)b.cV=e-d|0;}
function B_(){var a=this;B.call(a);a.p=null;a.bR=0;a.bB=0;}
function XU(a){var b=new B_();AEM(b,a);return b;}
function Ds(a,b,c){var d=new B_();R3(d,a,b,c);return d;}
function AEM(a,b){R3(a,b,0,0);}
function R3(a,b,c,d){a.p=b;a.bR=c;a.bB=d;}
function Il(a){return a.bB&3;}
function Gy(b,c){return (!b?0:2)+(!c?0:1)|0;}
var JI=F(Jo);
function Ql(){var a=this;B.call(a);a.cL=null;a.dQ=0;}
var ARu=null;function AAi(a){var b=new Ql();AAU(b,a);return b;}
function AAU(a,b){a.dQ=0;a.cL=b;}
function Oh(a,b){var c;if(b.dN)return b;b=BM(b.W);while(true){if(!BN(b))return null;c=Oh(a,BP(b));if(c!==null)break;}return c;}
function MA(a,b,c){var d,e,f,g;d=Jv(a,a.cL,b);if(d===null)return;b=c.b_;e=b===null?ARv:b.ca;f=c.W;c=a.cL;if(d===c){if(c.b_===null)c.b_=b;b=new QO;b.pI=a;DO(f,b);b=new QN;b.sF=a;e.d7(b);b=a.cL;b.W=f;b.b_.ca=e;b.dN=0;return;}if(!DP(f)){c=d.fO;if(c!==null){b=new Nc;b.no=c;DO(f,b);g=I$(c.W,d);if(g==(-1))FZ(c.W,f);else{E7(c.W,g);Xn(c.W,g,f);}}}b=d.b_;if(b!==null){b=b.fD;c=new Q0;c.pt=b;e.d7(c);g=I$(b.ca,d.b_);if(g==(-1))FZ(b.ca,e);else{b.ca.ls(g);b.ca.rK(g,e);}}}
function Jv(a,b,c){var d,e,f,g;d=b.bD;if(d.bC==c.bC&&d.bF==c.bF?1:0){d=BM(b.W);while(BN(d)){e=Jv(a,BP(d),c);if(e!==null)return e;}return b;}b=BM(b.W);while(true){if(!BN(b))return null;d=BP(b);f=c.bC;g=c.bF;e=d.bD;if(e.bC<=f&&g<=e.bF?1:0){e=Jv(a,d,c);if(e!==null)break;}}return e;}
function RV(a,b,c){Bv(c,b.bD);b=BM(b.W);while(BN(b)){RV(a,BP(b),c);}}
function Nn(a,b,c){a.dQ=0;Ju(a,a.cL,b,c);}
function Ju(a,b,c,d){var e;if(CM(b)<c)return;a:{if(CO(b)>c){Kl(b,d);Gw(b,d);b=BM(b.W);while(BN(b)){Ju(a,BP(b),c,d);}}else{if(!In(b,c)){if(a.dQ)break a;if(CM(b)!=c)break a;}Gw(b,d);if(CO(b)==c&&a.dQ)Kl(b,d);e=BM(b.W);while(BN(e)){Ju(a,BP(e),c,d);}if(!a.dQ){b.dN=1;a.dQ=1;}}}}
function Uz(a,b,c){a.dQ=0;Iu(a,a.cL,b,c);}
function Iu(a,b,c,d){var e,f,g,h,i,j;if(CM(b)<c)return;e=CO(b);f=c+d|0;if(e>f){e= -d|0;Kl(b,e);Gw(b,e);g=BM(b.W);while(BN(g)){Iu(a,BP(g),c,d);}b.W=LS(a,b.W);}else{h=b.bD;if(c<=h.bC&&h.bF<=f?1:0){if(b===a.cL){Kz(b,0);Is(b,0);h=b.b_;if(h!==null)h.ca.hp();}else{Kz(b,(-1));Is(b,(-1));h=b.b_;if(h!==null){Vr(h);b.b_=null;}}GH(b.W);}else{e=In(b,c);f=In(b,f);if(e&&f)Gw(b, -d|0);else if(e)Is(b,c);else{if(!f)return;Kz(b,c);Gw(b, -d|0);}h=BM(b.W);while(BN(h)){Iu(a,BP(h),c,d);}h=S5(b.W);g=NI(0);i=new Qr;j=new Td;j.xJ=i;j.ii
=g;while(SQ(h,j)){}if(!j.ii.lx&&!a.dQ)b.dN=1;else a.dQ=1;b.W=LS(a,b.W);}}}
function LS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Bz();d=null;e=ARu;f=b.cd;g=b.j;if(e===null)e=AQl;h=O(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}X0(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.bH=b.bH+1|0;b=BM(b);while(BN(b)){m=BP(b);if(CO(m)==CM(m))continue;if(!m.dN){if(d!==null){Bv(c,d);d=null;}Bv(c,m);}else if(d===null)d=m;else{n=AL4(IL(Be(CO(d),CO(m)),Ba(CM(d),CM(m)),d.bD.el),d.fO,d.b_);n.dN=1;d=m.b_;if(d===null)d=n;else{Vr(d);d=n;}}}if(d!==null)Bv(c,d);return c;}
function UN(a,b,c,d){var e,f,g,h,i,j,k,l;if((CM(c)-CO(c)|0)<43)e=B9(d,CO(c),CM(c));else{e=B9(d,CO(c),CO(c)+20|0);f=B9(d,CM(c)-20|0,CM(c));g=new R;T(g);K(K(K(g,e),C(101)),f);e=S(g);}e=S$(e,C(111),C(191));f=GN();g=c.bD;h=g.bC;i=g.bF;j=g.el;k=new R;T(k);BY(k,40);BY(Bk(K(Bk(K(Bk(k,h),C(192)),i),C(192)),j),41);k=S(k);h=c.dN;g=new R;T(g);GG(K(K(g,k),C(192)),h);l=S(g);g=new R;T(g);k=Bk(g,b);BY(k,32);k=K(k,l);BY(k,9);K(k,e);CE(f,S(g));c=BM(c.W);h=b+1|0;while(BN(c)){UN(a,h,BP(c),d);}}
function AA2(){ARu=new T9;}
function ABd(){var a=this;B.call(a);a.bC=0;a.bF=0;a.el=0;}
function IL(a,b,c){var d=new ABd();AEH(d,a,b,c);return d;}
function AEH(a,b,c,d){a.bC=b;a.bF=c;a.el=d;}
function AK0(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return a.bC==c.bC&&a.bF==c.bF&&a.el==c.el?1:0;}return 0;}
function ADy(a,b){var c;b=b;c=BF(a.bC,b.bC);if(!c)c=BF(b.bF,a.bF);return c;}
var T9=F();
function AHu(a,b,c){var d;b=b;c=c;b=b.bD;c=c.bD;d=BF(b.bC,c.bC);if(!d)d=BF(c.bF,b.bF);return d;}
function PB(){var a=this;B.call(a);a.bD=null;a.fO=null;a.W=null;a.b_=null;a.dN=0;}
function AL4(a,b,c){var d=new PB();AAh(d,a,b,c);return d;}
function AAh(a,b,c,d){a.dN=0;a.bD=b;a.fO=c;a.W=Bz();a.b_=d;}
function ABi(b){return PP(b,null);}
function PP(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=X(b);e=X(b);f=X(b);g=X(b);h=X(b);i=IL(d,e,f);j=new PB;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AAh(j,i,null,l);m=0;while(m<g){l=PP(b,c);l.fO=j;Bv(j.W,l);m=m+1|0;}return j;}
function WS(b,c,d){var e,f,g,h,i;a:{e=b.bD;f=b.W;g=e.bC;h=e.bF;i=e.el;Bg(c,g);Hh(c,h,i);Bg(c,f.j);if(d!==null){e=b.b_;if(e!==null&&TW(d,e)){g=(KT(d,b.b_)).bb;break a;}}g=(-1);}Bg(c,g);b=BM(f);while(BN(b)){WS(BP(b),c,d);}}
function CO(a){return a.bD.bC;}
function CM(a){return a.bD.bF;}
function Kz(a,b){a.bD.bC=b;}
function Is(a,b){a.bD.bF=b;}
function Kl(a,b){var c;c=a.bD;c.bC=c.bC+b|0;}
function Gw(a,b){var c;c=a.bD;c.bF=c.bF+b|0;}
function In(a,b){return CO(a)<=b&&b<CM(a)?1:0;}
function ADn(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return BB(a.bD,c.bD)&&BB(a.W,c.W)?1:0;}return 0;}
function JD(){var a=this;JG.call(a);a.oD=null;a.nl=null;}
function WY(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.oD;e=0;f=0;g=a.nl;a:{b:{while(true){if((e+32|0)>f&&Fa(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=Ez(b)+j|0;h=i.length;f=Be(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new BS;b=new R;T(b);Bk(K(Bk(K(b,C(193)),k),C(77)),h);Br(l,S(b));J(l);}if(Ez(b)<e)break;if(e<0){b=new BS;c=new R;T(c);K(Bk(K(c,C(78)),e),C(79));Br(b,S(c));J(b);}h=b.cl;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.p_.data[n+b.s7|0];m=m+1|0;j=o;n=k;}b.cl
=h+e|0;e=0;}if(!Fa(c)){l=!Fa(b)&&e>=f?AQI:AQH;break a;}i=g.data;k=Be(Ez(c),i.length);p=new Mw;p.l5=b;p.po=c;l=Y0(a,d,e,f,g,0,k,p);e=p.sP;j=p.t8;if(l===null){if(!Fa(b)&&e>=f)l=AQI;else if(!Fa(c)&&e>=f)l=AQH;}US(c,g,0,j);if(l!==null)break a;}b=new Ua;W(b);J(b);}p=new BS;l=new R;T(l);BY(Bk(K(Bk(K(l,C(80)),j),C(75)),h),41);Br(p,S(l));J(p);}Q9(b,b.cl-(f-e|0)|0);return l;}
var Ob=F(JD);
function Y0(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Kx(h,2))break a;i=AQH;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Vb(l)){if((f+3|0)>g){j=j+(-1)|0;if(Kx(h,3))break a;i=AQH;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Cm(l)){i=J3(1);break a;}if
(j>=d){if(Fa(h.l5))break a;i=AQI;break a;}c=j+1|0;m=k[j];if(!CJ(m)){j=c+(-2)|0;i=J3(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Kx(h,4))break a;i=AQH;break a;}k=e.data;o=D4(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.sP=j;h.t8=f;return i;}
var St=F(DD);
function Hf(){var a=this;B.call(a);a.bI=null;a.fl=null;a.rC=null;a.ht=null;a.dB=null;a.sS=null;a.ts=null;a.t5=null;}
function ARw(a,b,c,d,e){var f=new Hf();H7(f,a,b,c,d,e);return f;}
function H7(a,b,c,d,e,f){var g;g=c.data;a.sS=Yq(C(194),16.0);a.ts=Yq(C(194),17.0);a.t5=Yq(C(103),15.0);a.bI=b;a.rC=c;a.ht=d;if(g.length>=15){a.fl=e;a.dB=f;return;}b=new BI;W(b);J(b);}
function HF(){var a=this;B.call(a);a.uo=null;a.fP=null;a.rX=null;a.ww=null;a.pC=null;a.lt=null;a.nI=null;a.ur=null;a.ke=null;a.j6=null;a.hA=null;}
function ARx(a,b,c,d,e,f,g,h,i,j,k){var l=new HF();K9(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function K9(a,b,c,d,e,f,g,h,i,j,k,l){a.uo=b;a.fP=c;a.rX=d;a.ww=e;a.pC=f;a.lt=g;a.nI=h;a.ur=i;a.ke=j;a.j6=k;a.hA=l;}
var W8=F(0);
function Wr(){var a=this;B.call(a);a.eB=null;a.hc=null;a.nJ=null;a.l3=null;}
function ZK(a,b,c,d){var e=new Wr();AMV(e,a,b,c,d);return e;}
function AMV(a,b,c,d,e){a.eB=b;a.hc=c;a.nJ=d;a.l3=e;}
var Ze=F(0);
function AA6(){var b,c;b=new HW;c=N(C(195));AH$();I9(b,c,ARy,ARz);return b;}
function AAE(){var b,c;b=new HW;c=N(C(90));ACh();I9(b,c,ARA,ARB);return b;}
function AAY(){var b,c;b=new HW;AAv();c=ARC;ACt();I9(b,c,ARD,ARE);return b;}
function ABn(){var a=this;B.call(a);a.qj=null;a.lL=null;a.sn=null;a.mh=null;}
function Wv(a,b,c,d){var e=new ABn();ACM(e,a,b,c,d);return e;}
function ACM(a,b,c,d,e){a.qj=b;a.lL=c;a.sn=d;a.mh=e;}
function V8(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dB.lL;break a;case 3:if(c!=3){b=b.dB.mh;break a;}b=b.dB.sn;break a;default:b=b.bI.fP;break a;}b=b.dB.qj;}return b;}
function J4(a,b,c){return V8(a,b,0,c);}
var OO=F();
function AMa(a,b){return b.text();}
function OW(){B.call(this);this.n2=null;}
function AIC(a,b){var c,d;c=a.n2;b=ZI(b);d=AD2(b.hC,null,AJX(c));DH(AP7,c,d);if(BB(AP6,c))Uk(d);}
var OY=F();
function ALw(a,b){AA9(b);}
function Ld(){var a=this;B.call(a);a.ic=null;a.hR=null;}
function Lr(a,b){var c;c=a.hR;a.hR=b;return c;}
function Ix(){var a=this;Ld.call(a);a.bw=null;a.bN=null;a.e0=0;a.e_=0;}
function IN(a){var b;b=JH(a);if(b==2){if(JH(a.bN)<0)a.bN=L3(a.bN);return NG(a);}if(b!=(-2))return a;if(JH(a.bw)>0)a.bw=NG(a.bw);return L3(a);}
function JH(a){var b,c;b=a.bN;c=b===null?0:b.e0;b=a.bw;return c-(b===null?0:b.e0)|0;}
function L3(a){var b;b=a.bw;a.bw=b.bN;b.bN=a;DX(a);DX(b);return b;}
function NG(a){var b;b=a.bN;a.bN=b.bw;b.bw=a;DX(a);DX(b);return b;}
function DX(a){var b,c,d;b=a.bN;c=b===null?0:b.e0;b=a.bw;d=b===null?0:b.e0;a.e0=Ba(c,d)+1|0;a.e_=1;b=a.bw;if(b!==null)a.e_=1+b.e_|0;b=a.bN;if(b!==null)a.e_=a.e_+b.e_|0;}
function HT(){var a=this;B4.call(a);a.fI=0;a.fL=0;a.fJ=0;a.fK=0;}
function Hb(a){var b=new HT();AMZ(b,a);return b;}
function DV(a,b,c){var d=new HT();AEr(d,a,b,c);return d;}
function N(a){var b=new HT();AKX(b,a);return b;}
function EX(a,b,c,d){var e=new HT();PA(e,a,b,c,d);return e;}
function BA(a){var b=new HT();IQ(b,a);return b;}
function AMZ(a,b){PA(a,b,b,b,255);}
function AEr(a,b,c,d){PA(a,b,c,d,255);}
function AKX(a,b){if(!(H(b)!=4&&H(b)!=7&&H(b)!=9)&&I(b,0)==35){if(H(b)==4){a.fI=HZ(I(b,1))*17|0;a.fL=HZ(I(b,2))*17|0;a.fJ=HZ(I(b,3))*17|0;a.fK=255;}else{a.fI=Kj(I(b,1),I(b,2));a.fL=Kj(I(b,3),I(b,4));a.fJ=Kj(I(b,5),I(b,6));a.fK=H(b)!=9?255:Kj(I(b,7),I(b,8));}IW(a.fI,a.fL,a.fJ,a.fK,a);return;}}
function PA(a,b,c,d,e){a.fI=b;a.fL=c;a.fJ=d;a.fK=e;IW(b,c,d,e,a);}
function IQ(a,b){a.fI=b.fI;a.fL=b.fL;a.fJ=b.fJ;a.fK=b.fK;Fe(a,b);}
function HZ(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Kj(b,c){return (16*HZ(b)|0)+HZ(c)|0;}
var CP=F(0);
var AQW=null;var ARF=null;var AQY=null;var AQX=null;var AQ0=null;var AQZ=null;var AQ2=null;var AQ1=null;var AQ4=null;var AQ3=null;var AQ5=null;function AE7(){AE7=Bf(CP);ALg();}
function ALg(){AQW=Hb(206);ARF=N(C(196));AQY=N(C(197));AQX=N(C(85));AQ0=N(C(198));AQZ=N(C(199));AQ2=N(C(200));AQ1=N(C(201));AQ4=EX(107,106,107,128);AQ3=EX(30,31,34,0);AQ5=N(C(87));}
function B6(){Cg.call(this);this.hk=null;}
var ARG=null;var ARH=null;var ARI=null;var ARJ=null;var ARK=null;var ARo=null;var ARL=null;var ARM=null;var ARN=null;var ARO=null;var ARP=null;var ARQ=null;var ARR=null;var ARS=null;var ART=null;var AQ6=null;function S9(){S9=Bf(B6);AHn();}
function Dq(a,b,c){var d=new B6();Qs(d,a,b,c);return d;}
function AN_(a,b,c,d){var e=new B6();U1(e,a,b,c,d);return e;}
function Qs(a,b,c,d){S9();C4(a,b,c);a.hk=G8(d,null);}
function U1(a,b,c,d,e){S9();C4(a,b,c);a.hk=G8(d,e);}
function AHn(){var b,c;b=new B6;AE7();Qs(b,C(202),0,ARF);ARG=b;ARH=Dq(C(203),1,N(C(204)));ARI=Dq(C(205),2,N(C(206)));ARJ=Dq(C(207),3,N(C(208)));ARK=Dq(C(209),4,ARF);ARo=Dq(C(210),5,N(C(211)));ARL=Dq(C(212),6,N(C(213)));ARM=Dq(C(214),7,N(C(215)));ARN=Dq(C(216),8,N(C(217)));c=new B6;AAJ();U1(c,C(218),9,ARU,N(C(200)));ARO=c;ARP=AN_(C(219),10,ARU,N(C(88)));ARQ=Dq(C(220),11,N(C(221)));ARR=Dq(C(222),12,N(C(223)));ARS=Dq(C(224),13,ARF);b=Dq(C(225),14,N(C(226)));ART=b;AQ6=G(B6,[ARG,ARH,ARI,ARJ,ARK,ARo,ARL,ARM,ARN,ARO,
ARP,ARQ,ARR,ARS,b]);}
function H1(){var a=this;B.call(a);a.hB=null;a.nz=null;}
function G8(a,b){var c=new H1();AId(c,a,b);return c;}
function AId(a,b,c){a.hB=b;a.nz=c;}
function Hl(){var a=this;B.call(a);a.hV=null;a.hh=null;a.t2=null;a.xq=null;a.jH=null;a.n_=null;a.m5=null;}
function ARV(a,b,c,d,e,f,g){var h=new Hl();Kk(h,a,b,c,d,e,f,g);return h;}
function Kk(a,b,c,d,e,f,g,h){a.t2=b;a.xq=c;a.hh=d;a.jH=e;a.hV=f;a.n_=g;a.m5=h;}
function Y6(){var a=this;B.call(a);a.k8=null;a.p0=0;}
function Wd(a,b){var c=new Y6();AKV(c,a,b);return c;}
function AKV(a,b,c){var d;d=new B4;a.k8=d;a.p0=b;d.bV=c;}
function NY(a,b){return Cn(a.p0,b);}
var Df=F(0);
var AQ$=null;var AQ_=null;var AQ7=null;var AQ8=null;var AQ9=null;var ARA=null;var ARB=null;var ARa=null;var ARb=null;function ACh(){ACh=Bf(Df);AJs();}
function AJs(){AQ$=N(C(199));AQ_=N(C(227));AQ7=N(C(90));AQ8=N(C(213));AQ9=N(C(196));ARA=N(C(199));ARB=N(C(228));ARa=N(C(229));ARb=DV(43,45,48);}
function XP(){var a=this;B.call(a);a.iG=null;a.hi=0.0;}
function Yq(a,b){var c=new XP();AJm(c,a,b);return c;}
function AJm(a,b,c){a.iG=b;a.hi=c;}
function AKP(a,b){if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){b=b;return a.hi===b.hi&&BB(a.iG,b.iG)?1:0;}return 0;}
function Hx(){var a=this;B.call(a);a.ro=null;a.mY=null;a.n1=null;a.sg=null;a.ps=null;a.hx=null;}
function ARW(a,b,c,d,e,f){var g=new Hx();Lc(g,a,b,c,d,e,f);return g;}
function Lc(a,b,c,d,e,f,g){a.ro=b;a.mY=c;a.n1=d;a.sg=e;a.ps=f;a.hx=g;}
function HW(){var a=this;B.call(a);a.jt=null;a.kP=null;a.sa=null;}
function ARX(a,b,c){var d=new HW();I9(d,a,b,c);return d;}
function I9(a,b,c,d){a.jt=b;a.kP=c;a.sa=d;}
function KM(a,b){return !b?a.kP:a.sa;}
function Xg(){var a=this;B.call(a);a.ki=null;a.q2=null;a.ti=null;}
function ABe(a,b,c){var d=new Xg();AL2(d,a,b,c);return d;}
function AL2(a,b,c,d){a.ki=b;a.q2=c;a.ti=d;}
var CD=F(0);
var ARY=null;var ARU=null;var ARZ=null;var AR0=null;var AR1=null;var AR2=null;var AR3=null;var AR4=null;var AR5=null;var AR6=null;var AR7=null;function AAJ(){AAJ=Bf(CD);AM$();}
function AM$(){ARY=Hb(187);ARU=N(C(230));ARZ=Hb(55);AR0=Hb(43);AR1=DV(33,66,131);AR2=DV(60,63,65);AR3=N(C(231));AR4=N(C(232));AR5=EX(85,85,85,128);AR6=EX(43,43,43,0);AR7=N(C(233));}
function YQ(){var a=this;B.call(a);a.jG=0;a.wm=null;}
var X$=F();
function Sp(){var a=this;B.call(a);a.ns=null;a.rx=null;a.so=null;}
function AAu(){var a=this;B.call(a);a.hS=null;a.jm=null;a.e3=null;a.xc=null;}
function AJX(a){var b=new AAu();AKM(b,a);return b;}
function AKM(a,b){var c,d,e;c=null;d=null;e=null;a.hS=c;a.jm=d;a.e3=b;a.xc=e;}
function DF(a){var b,c;b=a.e3;if(b===null)return C(5);c=Yv(b,C(234));return c==(-1)?a.e3:DT(a.e3,c+1|0);}
function AD4(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return BB(a.hS,c.hS)&&BB(a.jm,c.jm)&&BB(a.e3,c.e3)?1:0;}return 0;}
var R5=F();
function AEC(a,b){ZM(b);}
function Iw(){var a=this;B.call(a);a.d$=null;a.eA=null;a.eq=null;}
var AQK=0;function ZM(a){var b;b=a.eA;if(b!==null){AQK=AQK-1|0;a.d$.dA.deleteTexture(b);a.eA=null;}}
function Cf(a){return a.eq.b;}
function Kn(a){return a.eq.a;}
function RU(a,b,c,d){var e;e=a.eq;e.b=b;e.a=c;KR(a);a.d$.dA.texStorage2D(3553,1,d,b,c);e=a.d$.dA;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function KR(a){var b,c;b=a.d$.dA;c=a.eA;b.bindTexture(3553,c);}
function Em(a,b){var c,d,e,f,g,h;a:{c=b.k1;d=b.j_;e=a.eq;f=e.b;if(f){g=e.a;if(g){if(f==c&&g==d?1:0){KR(a);break a;}e=a.d$.dA;h=a.eA;e.deleteTexture(h);a.eA=a.d$.dA.createTexture();RU(a,c,d,32856);break a;}}RU(a,c,d,32856);}ON(a,b,0,0);}
function PN(a,b,c,d){KR(a);ON(a,b,c,d);}
function ON(a,b,c,d){var e;e=a.d$.dA;b=b.ha;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Wx=F();
function Fv(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function Xe(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function SU(){var a=this;B.call(a);a.bi=null;a.K=null;a.N=null;a.fx=null;}
function Ym(a,b,c,d){var e,f,g,h;e=a.K;f=BB(e.hu,c)?0:1;g=BB(e.ga,b)?0:1;h=d===e.ir?0:1;if(f){e.hu=c;e.em=null;N6(e,0);}e.gg=!f&&!g&&!h?0:1;e.ga=b;e.ir=d;e.hy=0;Mh(a);}
function Y1(a,b){a.fx=b;}
function JU(a,b,c){var d;d=a.N;d.kN(b,c,d.eF);Mh(a);}
function Mh(a){var b,c,d,e;b=a.K;c=a.N.o.b;b.o.b=c;d=b.cJ;if(d!==null&&c!=Cf(d)&&!(c>=b.hy&&Cf(b.cJ)>=b.hy))b.gg=1;b=a.K;b.eF=a.bi.bW;if(Ug(b))c=0;else{b=a.K;Tg(b);e=Ck(b.eM,b.ir);N6(b,Fk(b.em)+(e*2|0)|0);c=b.o.a;}b=a.K.D;d=a.N.D;Bn(b,d.b,d.a-c|0);}
function KB(b,c){if(b<0)c=C(235);else if(b>0)c=C(236);return c;}
function VW(a,b,c){var d;d=a.K.D.b;return (d-c|0)<=b&&b<d?1:0;}
function LO(a,b,c){var d,e;d=a.K;e=d.D.b+d.o.b|0;return e<=b&&b<(e+c|0)?1:0;}
function N4(a,b,c){var d;d=a.K.D.a;return (d-c|0)<=b&&b<d?1:0;}
function Mu(a,b,c){var d,e;d=a.N;e=d.D.a+d.o.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Um(a,b,c){var d,e,f;d=a.K.D.a-c|0;e=a.N;f=(e.D.a+e.o.a|0)+c|0;return d<=b&&b<f?1:0;}
function UV(a,b,c){var d,e;d=a.K.D.a+c|0;e=a.N;return YA(b,d,(e.D.a+e.o.a|0)-c|0);}
function M5(a,b,c){var d,e,f;d=a.K;e=d.D.b;f=e-c|0;e=(e+d.o.b|0)+c|0;return f<=b&&b<e?1:0;}
function MB(a,b,c){var d,e;d=a.K;e=d.D.b;return YA(b,e+c|0,(e+d.o.b|0)-c|0);}
function YA(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BF(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function HA(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bq;f=new Bq;g=b.b;h=b.a;b=a.N;i=b.D;j=i.b;k=i.a;b=b.o;l=b.b;m=b.a;b=new TT;b.r8=a;b.r$=e;b.r9=f;b.r5=c;b.r4=g;b.r7=j;b.r6=l;b.sj=d;b.si=h;b.sk=k;b.sN=m;return b;}
function ABu(a){return a.K.o.a+Ck(a.bi,2.0)|0;}
function Ru(){var a=this;B.call(a);a.eD=null;a.b1=null;a.e8=null;a.fE=null;a.k4=null;a.cb=null;a.eL=null;a.cv=0;a.eI=0;a.ln=0;a.hK=0;a.ib=0;a.fz=0;a.sA=null;a.op=null;a.uP=null;a.il=null;}
function OK(a,b,c){a.eD=b;TZ(a,c);Kv(a);}
function Pm(a,b){var c;a.k4=b.hV;c=b.jH.kP;Fe(a.b1.eQ,c);c=b.hh.ki;Fe(a.b1.hf,c);a.il=b.jH;}
function TZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=KY(b);d=b.bW;BT(a.eD);CG(c,a.eD);e=OB(a.eD,1.25);f=0;a.cv=Cn(2.0,d);a.eI=Cn(3.0,d);a.ln=Cn(12.0,d);g=0;h=a.cb.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Jz(c,l.kr,0.875);n=a.ln;o=(n+m|0)+n|0;f=Ba(f,o);b=l.dK;b.b=g;b.a=0;b=l.c9;b.b=o;b.a=e;Cb(l.gh,g,0.0,o,k);g=g+o|0;j=j+1|0;}b=a.e8;b.b=g;b.a=e;b=a.b1.bp;o=a.fz;if(!o){m=a.cv;m=(g+m|0)+V(m,a.cb.data.length)|0;}else m=(f+(a.cv*2|0)|0)+(a.eI*2|0)|0;b.b=m;if(!o)e=e+(a.cv*2|0)|0;else{o=a.cv;e=(V(e+o|0,a.cb.data.length)
+o|0)+(a.eI*2|0)|0;}b.a=e;}
function WJ(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EI(a){var b,c;b=a.e8;if(b.b&&b.a)return a.b1.bp;c=new Bo;Br(c,C(237));J(c);}
function Kv(a){a.ib=1;}
function AAW(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.dt;if(!a.cb.data.length)return;if(a.eL===null)a.eL=Gv(c);a:{if(!a.ib){d=a.e8;if(V(d.b,d.a))break a;}d=a.e8;if(!V(d.b,d.a))TZ(a,b);d=a.e8;e=d.b;f=d.a;if(!V(e,f))return;d=EY(c,e,f,b.cy);CG(d,a.eD);g=OB(a.eD,0.125);h=a.eD;i=h.d3;g=g+i-(i+h.dF)/16.0;j=a.cb.data;e=j.length;f=0;while(f<e){h=j[f];Ej(d,h.kr,h.gh.bk+a.ln,g);f=f+1|0;}Em(a.eL,d);a.ib=0;K3(d);}if(!Jb(a.b1)){d=a.b1;XO(c,d.bp,d.cH,d.hf,a.cv,a.fE);d=a.b1;h=d.bp;k=d.cH;d=d.eQ;e=a.cv;l=a.fE;l.b=(h.b-e|0)
-e|0;l.a=(h.a-e|0)-e|0;BC(c,k.b+e|0,k.a+e|0,l,d);if(a.fz){d=a.b1;Zx(c,d.bp,d.cH,0,0,NY(a.k4,b.bW),a.k4.k8,a.fE);}}j=a.cb.data;m=j.length;n=0;while(n<m){d=j[n];if(b.cy){h=d.dK;e=h.b;f=h.a;h=d.c9;k=d.gh;l=a.eL;o=a.il;Ek(c,e,f,h,k,l,o.jt,KM(o,d.f6));}else{h=d.dK;e=h.b;f=h.a;h=d.c9;k=d.gh;l=a.eL;o=a.il;Eh(c,e,f,h,k,l,o.jt,KM(o,d.f6),0.0);}n=n+1|0;}b:{if(a.fz){j=a.cb.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.fE;e=(a.b1.bp.b-(a.cv*2|0)|0)-(a.eI*2|0)|0;h=d.c9;e=e-h.b|0;b.b=e;b.a=h.a;if(e>0){k=d.dK;BC(c,
k.b+h.b|0,k.a,b,KM(a.il,d.f6));}p=p+1|0;}}}}
function Mv(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cb.data;if(c>=d.length)return (-1);e=d[c];if(Fv(b,e.dK,e.c9))return c;if(a.fz){f=e.dK;g=f.b;e=e.c9;h=e.b;g=g+h|0;i=f.a;f=a.fE;f.b=(a.b1.bp.b-(a.cv*2|0)|0)-h|0;f.a=e.a;if(Xe(b,g,i,f))break;}c=c+1|0;}return c;}
function VG(){B.call(this);this.pf=null;}
function ACR(a,b){var c,d;c=a.pf;VA(c,Ef(c,b.u));b=Z(c);d=c.d;Kc(b,d.n,d.s);Ga(c);}
var W7=F();
function Cn(b,c){return Dw(b*c);}
function TX(){var a=this;B.call(a);a.X=0;a.bf=0;}
function Di(a,b){var c=new TX();Y3(c,a,b);return c;}
function Y3(a,b,c){a.X=b;a.bf=c;}
function ACc(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return a.X==c.X&&a.bf==c.bf?1:0;}return 0;}
function AKb(a){var b,c,d,e;b=O(B,2).data;b[0]=Ct(a.X);b[1]=Ct(a.bf);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bb)|0;d=d+1|0;}return c;}
function AJN(a,b){var c;b=b;c=BF(a.X,b.X);if(!c)c=BF(a.bf,b.bf);return c;}
function Ou(){var a=this;B.call(a);a.V=null;a.g6=null;a.eg=null;a.dq=0;a.G=0;a.cS=null;a.dy=null;a.fU=0;a.mg=0;}
function Mn(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dq;i=V(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Ba(i,e))a:{while(true){if(d<=e){j=d;break a;}Fi(c);j=d+(-1)|0;b=DY(d);d=V(j,a.G)%a.eg.a|0;Fz(a,c,b,a.fU,g);PN(a.V,c,0,d);if(!(j%a.dq|0))break;d=j;}}else{Fi(b);k=a.dq-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Fz(a,b,DY(j),V(a.G,k)+a.fU|0,g);k=k+(-1)|0;j=h;}Em(a.V,b);j=Ba(i,e);}return j;}k=a.dq;h=V(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Fi(c);b=DY((d+f|0)+1|0);j=d+1|0;d=V(d,
a.G)%a.eg.a|0;Fz(a,c,b,a.fU,g);PN(a.V,c,0,d);if(!(j%a.dq|0))break;d=j;}}else{Fi(b);d=0;while(d<a.dq){h=h+1|0;Fz(a,b,DY((h>e?h-f|0:h)+f|0),V(a.G,d)+a.fU|0,g);d=d+1|0;}Em(a.V,b);j=Be(i,e);}return j;}
function YY(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q;l=d/a.G|0;c=Be((j+i|0)%e|0,c);Bn(a.cS,Cf(a.V),a.G);e=d%Kn(a.V)|0;i=a.G;m=e/i|0;n=m+(c/i|0)|0;if(c%i|0)n=n+1|0;i=m;e=m;o=l;while(i<n){if(KL(a,g,o,l+(i-m|0)|0,f,k)){p=V((i-e|0)+1|0,a.G);Bn(a.cS,Cf(a.V),p);Cb(a.dy,0.0,V(e,a.G),Cf(a.V),p);}else{q=Fj(f,g,o,k);c=e-m|0;e=a.G;Ed(a,h,V(c,e)-(d%e|0)|0,b,k.eB,q);o=(l+i|0)-m|0;Bn(a.cS,Cf(a.V),a.G);Cb(a.dy,0.0,V(i,a.G),Cf(a.V),a.G);e=i;}i=i+1|0;}q=Fj(f,g,o,k);c=e-m|0;e=a.G;Ed(a,h,V(c,e)-(d%e|0)|0,b,k.eB,q);}
function KL(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Fj(e,b,c,f)!==f.hc?0:1;}
function Fj(b,c,d,e){c=c.data;return d<c.length&&c[d]?J4(b.dB,b,c[d]):e.hc;}
function Ed(a,b,c,d,e,f){if(a.mg)Ek(b,a.g6.b+d.b|0,c+d.a|0,a.cS,a.dy,a.V,e,f);else Eh(b,a.g6.b+d.b|0,c+d.a|0,a.cS,a.dy,a.V,e,f,0.0);}
function Fz(a,b,c,d,e){Ej(b,c,a.eg.b-20.0*e,d);}
function MX(){B.call(this);this.m2=null;}
var Dg=F(Bo);
var R8=F(FJ);
function PU(){B.call(this);this.q$=null;}
function AGc(a,b){var c,d,e,f;c=a.q$;if(c.dX!=3){b=b.data;d=CR(b[0]);e=D5(b[1]);Ly(c.f,d,e,null,null);b=DF(c.ck);f=Ji(D1(),c.rU);c=new R;T(c);K(FE(K(K(c,b),C(238)),f),C(170));$rt_globals.console.info($rt_ustr(S(c)));}}
var Xk=F(0);
function Wt(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(JZ(b)){case -1655966961:if(!B0(b,C(140)))break a;c=4;break a;case 3401:if(!B0(b,C(166)))break a;c=3;break a;case 98723:if(!B0(b,C(139)))break a;c=2;break a;case 3254818:if(!B0(b,C(130)))break a;c=1;break a;case 3556653:if(!B0(b,C(117)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;default:d=D2();e=new R;T(e);K(K(e,C(239)),b);CE(d,S(e));c=0;break b;}c=0;}return c;}
function ABc(){var a=this;B.call(a);a.i7=null;a.jl=null;a.dM=null;a.jb=null;a.be=null;a.ks=null;a.ky=null;a.ev=null;a.e4=null;a.gE=null;}
function AM2(a,b){var c=new ABc();AHS(c,a,b);return c;}
function AHS(a,b,c){var d,e,f;a.dM=b;a.jb=c;b=new TO;b.kv=0;b.gi=Bu(16);b.eH=0;a.be=b;b=new R;T(b);a.gE=b;a.ev=FS();b=new Rp;d=AAN(16);b.eX=0;b.df=O(GV,d);b.n0=0.75;TG(b);a.e4=b;b=new TK;c=a.be;e=a.gE;f=a.ev;b.cK=c;b.iW=e;b.pJ=f;a.ks=b;b=new TD;b.cn=c;b.j1=e;b.oB=f;a.ky=b;}
function Mk(a){var b,c,d,e,f,g,h;a:{b=IU(a.dM.dV);c=b.f_;if(c.cq>0){d=c.co;e=0;b:while(true){f=b.f_.bP.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cg;if(ID(a.ev,g))B7(a.ev,g);else{h=a.ev;DH(h,g,Ct(h.cq));}c=c.cm;if(d!=b.f_.co)break b;}e=e+1|0;}b=new Ge;W(b);J(b);}}b=a.dM.fa;if(b!==null)P2(a,b);Bg(a.be,a.dM.dV.cq);b=Q2(IU(a.dM.dV));while(EG(b)){c=NN(b);Hh(a.be,a.gE.E,H(c));DK(a.gE,c);}b=Q2(IU(a.dM.dV));while(EG(b)){c=NN(b);c=B7(a.dM.dV,c);Bg(a.be,c.j);c=BM(c);while(BN(c)){g=BP(c);g=B7(a.ev,g);Bg(a.be,
g.bb);}}if(a.dM.fa===null)Bg(a.be,(-1));else{Bg(a.be,a.e4.eX);Rc(a,a.dM.fa);}if(a.jb===null)Bg(a.be,(-1));else{Bg(a.be,1);WS(a.jb,a.be,a.e4);}b=a.be;d=b.kv;if(d&&b.eH!=d){c=D2();d=b.kv;e=b.eH;g=new R;T(g);K(Bk(K(Bk(K(g,C(240)),d),C(241)),e),C(242));CE(c,S(g));}f=b.gi;d=f.data.length;e=b.eH;if(d!=e)f=H2(f,e);a.i7=f;a.jl=ES(S(a.gE));}
function P2(a,b){var c,d,e,f,g,h;if(TW(a.e4,b))KT(a.e4,b);else{c=a.e4;d=Ct(c.eX);if(b===null){e=Pa(c);if(e===null){c.iy=c.iy+1|0;e=T1(c,null,0,0);f=c.eX+1|0;c.eX=f;if(f>c.ku)Mg(c);}}else{g=H8(b);h=g&(c.df.data.length-1|0);e=Ml(c,b,h,g);if(e===null){c.iy=c.iy+1|0;e=T1(c,b,h,g);f=c.eX+1|0;c.eX=f;if(f>c.ku)Mg(c);}}e.cw=d;}b=b.ca;if(b===null)return;c=new VP;c.oC=a;b.d7(c);}
function Rc(a,b){var c,d,e,f;c=(KT(a.e4,b)).bb;Bg(a.be,c);if(b instanceof JF)Bg(a.be,(-1));else if(!(b instanceof Je))Bg(a.be,0);else Bg(a.be,1);d=a.ks;Bg(d.cK,b.dD.cr());e=b.dD;f=new Lj;f.t6=d;e.d7(f);d=a.ky;Bg(d.cn,b.d2.cr());e=b.d2;f=new Ta;f.rZ=d;e.d7(f);d=b.hE;Bg(a.be,d.cr());e=new T7;e.sQ=a;d.d7(e);d=b.fv;Bg(a.be,d.cr());d=d.bQ();while(d.b$()){e=d.bJ();L7(a.ks,e.hH);F$(a.ky,e.iv);Bg(a.be,e.oa);}d=b.rV;if(d===null)Bg(a.be,(-1));else Bg(a.be,(B7(a.ev,d)).bb);b=b.ca;Bg(a.be,b.cr());d=new NH;d.l6=a;b.d7(d);}
function Tl(){B.call(this);this.ox=null;}
function ALj(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.ox;d=DF(b.ck);e=new R;T(e);K(K(e,d),C(243));$rt_globals.console.info($rt_ustr(S(e)));f=CR(c[0]);g=D5(c[1]);h=(CR(c[2])).data[0];if(b.f.b2==h){i=null;j=null;if(c.length>=5){i=CR(c[3]);j=D5(c[4]);}Ly(b.f,f,g,i,j);Eg(b.f.cR);Eg(b.f.dd);Od(b.f);GE(b.f);KN(b);}}
function Sa(){var a=this;B.call(a);a.vn=null;a.vo=null;a.vm=null;}
function QR(){var a=this;B.call(a);a.tN=null;a.tO=null;a.tM=0;}
function AEL(a,b){var c,d,e;c=a.tN;d=a.tO;e=a.tM;d.m(Ul(c,(b.u.b+e|0)-c.dL.b|0));}
function QQ(){var a=this;B.call(a);a.n$=null;a.n8=null;a.n9=0;}
function AL_(a,b){var c,d,e;c=a.n$;d=a.n8;e=a.n9;d.m(Om(c,(b.u.a+e|0)-c.dL.a|0));}
var Ev=F(0);
function Mo(){var a=this;B.call(a);a.g2=0;a.lo=0;a.hW=0;a.fC=0;a.f$=null;}
function BN(a){return a.g2>=a.hW?0:1;}
function BP(a){var b,c;NZ(a);b=a.g2;a.fC=b;c=a.f$;a.g2=b+1|0;return c.kD(b);}
function PL(a){var b,c,d;if(a.fC<0){b=new Dg;W(b);J(b);}NZ(a);a.f$.ls(a.fC);a.lo=a.f$.bH;c=a.fC;d=a.g2;if(c<d)a.g2=d-1|0;a.hW=a.hW-1|0;a.fC=(-1);}
function NZ(a){var b;if(a.lo>=a.f$.bH)return;b=new Ge;W(b);J(b);}
var Yg=F();
function Rk(){B.call(this);this.wC=null;}
var Z7=F();
var Lx=F();
function AK5(a,b){b=b;b.V=CZ(b.V,null);}
function QJ(){var a=this;B.call(a);a.su=0;a.sw=0;}
function TO(){var a=this;B.call(a);a.gi=null;a.kv=0;a.eH=0;}
function Hh(a,b,c){Bg(a,b);Bg(a,c);}
function Bg(a,b){var c,d;c=a.gi;d=c.data.length;if(d==a.eH)a.gi=H2(c,d*2|0);c=a.gi.data;d=a.eH;a.eH=d+1|0;c[d]=b;}
function Rp(){var a=this;Dt.call(a);a.eX=0;a.df=null;a.iy=0;a.n0=0.0;a.ku=0;}
function AAN(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function TG(a){a.ku=a.df.data.length*a.n0|0;}
function TW(a,b){return VB(a,b)===null?0:1;}
function KT(a,b){var c;c=VB(a,b);if(c===null)return null;return c.cw;}
function VB(a,b){var c,d;if(b===null)c=Pa(a);else{d=H8(b);c=Ml(a,b,d&(a.df.data.length-1|0),d);}return c;}
function Ml(a,b,c,d){var e;e=a.df.data[c];while(e!==null&&!(e.kt==d&&(b!==e.cg?0:1))){e=e.gd;}return e;}
function Pa(a){var b;b=a.df.data[0];while(b!==null&&b.cg!==null){b=b.gd;}return b;}
function T1(a,b,c,d){var e,f;e=new GV;VV(e,b,null);e.kt=d;f=a.df.data;e.gd=f[c];f[c]=e;return e;}
function Mg(a){var b,c,d,e,f,g,h,i;b=a.df.data.length;b=AAN(!b?1:b<<1);c=O(GV,b);d=c.data;e=0;f=b-1|0;while(true){g=a.df.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.kt&f;i=h.gd;h.gd=d[b];d[b]=h;h=i;}e=e+1|0;}a.df=c;TG(a);}
function TK(){var a=this;B.call(a);a.cK=null;a.iW=null;a.pJ=null;}
function L7(a,b){var c;if(!(b instanceof KU)){Bg(a.cK,3);UW(a,b);Bg(a.cK,b.gq);}else{c=b;Bg(a.cK,5);UW(a,c);Bg(a.cK,c.gq);Bg(a.cK,c.lV);b=c.iI;Bg(a.cK,b.j);c=new LX;c.m$=a;DO(b,c);}}
function UW(a,b){var c;c=b.dE.gy;Hh(a.cK,a.iW.E,H(c));Bg(a.cK,b.dE.cV);Ls(a,b.iA);DK(a.iW,c);}
function Ls(a,b){if(b===null)Bg(a.cK,(-1));else Bg(a.cK,(B7(a.pJ,b)).bb);}
function TD(){var a=this;B.call(a);a.cn=null;a.j1=null;a.oB=null;}
function F$(a,b){var c,d,e;if(b instanceof FC){c=b;Bg(a.cn,9);OA(a,c.fR);}else if(b instanceof HK){d=b;Bg(a.cn,3);Pd(a,d);Bg(a.cn,d.me);OA(a,d.f2);}else if(b instanceof H5){e=b;Bg(a.cn,4);F$(a,e.gU);F$(a,e.f4);}else if(b===null)Bg(a.cn,(-1));else{Bg(a.cn,5);Pd(a,b);Bg(a.cn,b.q6);}}
function Pd(a,b){var c;c=b.er.gy;Hh(a.cn,a.j1.E,H(c));Bg(a.cn,b.er.cV);b=b.eW;if(b===null)Bg(a.cn,(-1));else Bg(a.cn,(B7(a.oB,b)).bb);DK(a.j1,c);}
function OA(a,b){var c;Bg(a.cn,b.j);c=new VZ;c.nc=a;DO(b,c);}
function Sz(){var a=this;B.call(a);a.qk=0;a.uC=0;}
function GQ(a,b){return OJ(a.qk,b,a.uC);}
var DS=F(Bo);
function Mw(){var a=this;B.call(a);a.l5=null;a.po=null;a.sP=0;a.t8=0;}
function Kx(a,b){return Ez(a.po)<b?0:1;}
function LR(){B.call(this);this.sh=null;}
function AJB(a,b){Gq(a.sh,b);}
function QG(){B.call(this);this.r3=null;}
function AGX(a,b){Gq(a.r3,b);}
function QH(){B.call(this);this.o4=null;}
function AIr(a,b){Gq(a.o4,b);}
var AAK=F();
function SC(b,c,d,e){var f,g;f=b.next();g=new Vj;g.ml=b;g.mk=c;g.mo=d;g.mm=e;f.then(Bi(g,"f"),Bi(d,"f"));}
function WR(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ABb(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(C2()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Vg;f.p1=b;f.p2=d;d.addEventListener("change",Bi(f,"handleEvent"));d.click();}
function WZ(b,c){var d;if(c.isFile?1:0)b.m(Wn(c.file()));else{c=c.createReader();d=new U4;d.s0=b;c.readEntries(Bi(d,"f"));}}
function RK(){var a=this;B.call(a);a.bc=null;a.vi=null;a.hg=null;a.lB=null;a.iO=null;a.ey=null;}
function FQ(a){return a.bc.bG.ge;}
function V4(a){var b;b=new Rn;b.tQ=a;return b;}
function Ys(a){var b,c,d,e,f;b=O(DB,5);c=b.data;d=a.bc;BT(d);e=new VN;e.q8=d;c[0]=Cv(C(244),e);e=a.bc;BT(e);f=new VI;f.ng=e;c[1]=Cv(C(245),f);d=a.bc;BT(d);e=new VJ;e.oi=d;c[2]=Cv(C(246),e);d=a.bc;BT(d);e=new VK;e.tK=d;c[3]=Cv(C(247),e);d=a.bc;BT(d);e=new VL;e.l$=d;c[4]=Cv(C(248),e);return Gt(b);}
function Iy(a,b,c){var d,e,f,g,h,i,j,k,l;a:{Do(a.ey.bM);d=a.bc.d;e=DJ(d);f=Fx(d);g=a.bc.eo;if(c===null)h=null;else{AON();switch(AR8.data[c.fQ]){case 1:h=KW(g,e,f);break a;case 2:h=Pn(g,e,f);break a;default:}b=new E$;W(b);J(b);}}c=a.bc;e=Ef(c,b);f=HE(c.d.f,e.X,e.bf);g=Ry(c,f);if(h!==null){f=c.d;i=e.X;j=e.bf;e=new Q3;e.u2=c;e.u1=b;e.u4=g;h.qH(f,i,j,e,c.hb);}else{e=B7(c.d.f.dd,f);if(e!==null)Hd(c,e);else{e=B7(c.d.f.cR,f);if(e!==null&&!DP(e))PJ(c.it,b,e,c,g);else{g=c.it;Do(g.bM);h=g.bM;k=O(DB,1);l=k.data;d=new DB;BT(h);f
=new LB;f.uD=h;Wp(d,f,C(249));l[0]=d;OS(h,b,Gt(k),Pt(g,c));}}}}
var Xa=F(0);
var Pq=F(0);
var Mp=F(0);
var Gg=F();
function QY(){Gg.call(this);this.se=null;}
function SQ(a,b){var c,d,e;c=0;while(true){d=a.se;if(d.hz===null)d.hz=BM(d.oH);if(!BN(d.hz))e=0;else{c=b.cZ(BP(d.hz));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Ph=F(0);
function Sc(){B.call(this);this.Gt=null;}
var ARf=null;function Rq(b){return b===null?C(5):DF(b);}
function AAV(){ARf=O(Jd,0);}
function Q4(){var a=this;B.call(a);a.wO=null;a.wN=null;a.wQ=0;a.wP=0;}
function GV(){var a=this;FM.call(a);a.kt=0;a.gd=null;}
var Ge=F(Bo);
function UM(){B.call(this);this.sU=null;}
function AB4(a,b){Gq(a.sU,b);}
function NC(){B.call(this);this.nQ=null;}
function ALJ(a,b){var c,d,e,f;c=a.nQ;if(c.fN!=3&&c.dX!=3){b=b.data;c.f3=3;d=CR(b[0]);e=D5(b[1]);Km(c.f,d,e);b=DF(c.ck);f=Ji(D1(),c.g1);c=new R;T(c);K(FE(K(K(c,b),C(250)),f),C(170));$rt_globals.console.info($rt_ustr(S(c)));}}
function Rm(){B.call(this);this.rw=null;}
function AM1(a,b){var c,d,e,f,g,h;c=a.rw;if(c.dX!=3){d=b.data;c.fN=3;if((CR(d[2])).data[0]!=1)Gq(c,b);else{e=CR(d[0]);f=D5(d[1]);g=c.f3!=3?0:1;Pu(c.f,e,f,g);b=DF(c.ck);h=Ji(D1(),c.g1);c=new R;T(c);K(FE(K(K(c,b),C(251)),h),C(170));$rt_globals.console.info($rt_ustr(S(c)));}}}
var Vl=F();
function AKK(a,b){WR(b);}
function Vk(){var a=this;B.call(a);a.pr=null;a.pq=null;}
function AEk(a,b){var c,d,e,f,g,h,i;c=a.pr;d=a.pq;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new OU;i.nF=c;i.nE=g;h.then(Bi(i,"f"),Bi(d,"f"));e=e+1|0;}}
var UG=F();
function AFL(a,b){WR(b);}
function UF(){var a=this;B.call(a);a.oT=null;a.oU=null;}
function AGs(a,b){var c,d,e,f,g;c=a.oT;d=a.oU;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=O(Bw,1);g.data[0]=Eu(b.name);SC(f,c,d,g);}
function WI(){B.call(this);this.Cn=null;}
function Vg(){var a=this;B.call(a);a.p1=null;a.p2=null;}
function AFA(a,b){var c,d,e,f,g,h;b=a.p1;c=a.p2;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new LE;h.mc=b;h.mb=g;$rt_globals.setTimeout(Bi(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Wn(d.item(f));g=new Lo;g.rb=b;g.rc=c;$rt_globals.setTimeout(Bi(g,"onTimer"),0);f=f+1|0;}}
function Jd(){var a=this;B.call(a);a.q7=null;a.hT=null;a.h4=null;a.fo=null;}
function Xl(){var a=this;B.call(a);a.ie=null;a.kp=null;}
function ABw(){var a=this;B.call(a);a.vN=0;a.xi=0;a.nW=0;a.j8=0;}
function U7(){var a=this;B.call(a);a.pd=null;a.pe=null;}
function ACD(a){var b,c,d,e,f,g;b=a.pd;c=a.pe;if(BB(c.ie,b.d.ck)){c=c.kp;Cj(b,c.j8,c.nW,0);BW((Z(b)).bv,c.j8,c.nW);BW((Z(b)).bo,c.xi,c.vN);}else{d=(Cc(b.eo.sE)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Fc(b);b=new Mb;b.q5=g;b.q4=c;BT(b);c=new Qa;c.sL=b;$rt_globals.setTimeout(Bi(c,"onTimer"),0);}}}
function U8(){var a=this;B.call(a);a.tJ=null;a.tI=null;}
function AF_(a){Hd(a.tJ,a.tI);}
function EP(){var a=this;B.call(a);a.fD=null;a.ca=null;a.d2=null;a.dD=null;a.fv=null;a.hE=null;a.rV=null;}
function ANy(a){var b=new EP();Zg(b,a);return b;}
function Zg(a,b){a.fD=b;a.ca=Bz();a.d2=Bz();a.dD=Bz();a.hE=Bz();a.fv=Bz();}
function Vr(a){var b;b=a.fD;if(b!==null)b.ca.mR(a);}
function VP(){B.call(this);this.oC=null;}
function AFE(a,b){b=b;P2(a.oC,b);}
var JF=F(EP);
var Je=F(EP);
function T7(){B.call(this);this.sQ=null;}
function ACI(a,b){var c;b=b;c=a.sQ;Bg(c.be,(B7(c.ev,b)).bb);}
function Ox(){var a=this;B.call(a);a.hH=null;a.iv=null;a.oa=0;}
function NH(){B.call(this);this.l6=null;}
function AH4(a,b){b=b;Rc(a.l6,b);}
function Pf(){var a=this;B.call(a);a.jh=0;a.o7=null;}
function ANp(a,b){var c,d,e;c=a.o7;b=b;d=c.su;e=c.sw;d=b.b<=d&&e<=b.a?1:0;a.jh=d;return d?0:1;}
var VO=F(DS);
var PC=F(Bo);
var Ua=F(Bo);
function On(){B.call(this);this.lQ=null;}
function AJK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.lQ;d=CR(c[0]);e=(CR(c[1])).data[0];if(!Se(b.f)){c=b.f;if(c.b2==e){e=b.uV;f=T_(d);Eg(c.dd);Eg(c.cR);Od(c);while(f.d4>=f.gm.data.length?0:1){if(X(f)==(-1))continue;g=VF(c,X(f));h=KH(BG(c,g.X),g.bf);if(X(f)==(-1)){if(!e)continue;h.bR=0;h.bB=h.bB|4;continue;}i=VF(c,X(f));j=X(f);k=X(f);DH(c.dd,g,i);l=c.cR;m=Bz();if(B7(l,i)===null)DH(l,i,m);Bv(B7(c.cR,i),g);h.bR=j;h.bB=k;}JP(b);if(b.vR){n=Ji(D1(),b.s9);if(ANU(n,BH(100))){c=GN();b=DF(b.ck);f=new R;T(f);K(FE(K(K(f,
b),C(252)),n),C(170));CE(c,S(f));}}}}}
function WN(){B.call(this);this.Hw=null;}
function UC(){B.call(this);this.lu=null;}
var ARm=null;function RO(){var a=new UC();Xp(a);return a;}
function Xp(a){a.lu=Bz();}
function Dx(a,b,c){NE(a,Cv(b,c));}
function Cv(b,c){return ACG(c,b);}
function E6(a,b,c){JW(a,b,c,null);}
function JW(a,b,c,d){NE(a,AOv(null,b,c,d));}
function NE(a,b){Bv(a.lu,b);}
function He(a){return Gt(GZ(a.lu,ARm));}
function WC(){ARm=O(DB,0);}
function O9(){var a=this;B.call(a);a.mt=null;a.mu=null;}
function ANr(a){var b,c;b=a.mt;c=a.mu;HP(b.dT,c);}
function TJ(){B.call(this);this.rn=null;}
function O0(){var a=this;B.call(a);a.oH=null;a.hz=null;}
function Ex(){var a=this;B.call(a);a.D=null;a.o=null;a.eF=0.0;}
function ANs(){var a=new Ex();Ks(a);return a;}
function Ks(a){a.D=new Bq;a.o=new Bq;}
function AKd(a){}
function Zz(a){return Cd(0,0);}
function P6(a,b,c,d){var e;if(!Hp(a.D,b)){a.nV(b);Cp(a.D,b);}if(!Hp(a.o,c)){a.nD(c);Cp(a.o,c);}e=a.eF;if(e!==d){a.eF=d;a.ph(e,d);}}
function Dd(a,b){return Fv(b,a.D,a.o);}
function AL0(a,b){var c,d,e,f;c=a.D;d=c.b;e=c.a;f=a.o;AOj();BC(b,d,e,f,AR9);}
function AHA(a,b){}
function AMt(a,b){}
function AKl(a,b,c){}
function AMF(a){}
function AGd(a,b,c,d){return 0;}
function ADq(a,b,c){return null;}
function AIi(a,b,c){return 0;}
function AMc(a,b){return 0;}
function AKa(a,b,c,d){return 0;}
function Ii(){var a=this;Ex.call(a);a.cF=null;a.bz=null;a.fZ=null;}
function Th(a,b){a.bz.b=Io(a,b);}
function V7(a,b){a.bz.a=KE(a,b);}
function KE(a,b){return Ba(0,Be(b,a.cF.a-a.o.a|0));}
function Io(a,b){return Ba(0,Be(b,a.cF.b-a.o.b|0));}
function Pc(){var a=this;Ii.call(a);a.bS=null;a.di=null;a.fY=null;a.sz=null;a.dz=null;a.bO=null;a.dH=null;a.c5=null;a.cU=0;a.ed=0;a.uj=null;a.dg=0;a.dP=0;a.fh=0;a.eJ=0;a.ew=0;a.cj=0;a.dI=null;a.hL=null;a.pG=null;a.gr=null;}
function N0(a){a.cU=Cn(2.0,a.bS.bW);}
function Ve(a){return a.bO.data.length?0:1;}
function R$(a){Bn(a.fY,0,0);}
function AMb(a){a.c5=CZ(a.c5,null);Bn(a.fY,0,0);Eg(a.gr);a.dI=null;a.bO=ARf;a.dH=null;a.dg=0;a.dP=0;a.fh=0;RQ(a.di);a.hL=null;}
function AEx(a,b,c){Oe(a);N0(a);a.dz=null;a.dI=null;a.ed=0;}
function Wy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;c=KY(a.bS);if(Ve(a))return;IV(a);CG(c,a.dz);d=DA(a);e=Ws(c,a.ed);f=Be(HH(a.o.a,d),a.bO.data.length)+30|0;g=a.pG.t2;h=a.dH;if(h.data.length<f){a.dH=AIp(f,h,a.eJ,a.ew,a.bO,a.dI,e,a.gr);Cp(a.fY,L5(a.dI));Oy(a,a.bS.dt);}a.eJ=Be((a.bz.a+a.cU|0)/(DA(a)+a.cU|0)|0,a.bO.data.length-1|0);a.ew=Be((((a.bz.a+a.di.bp.a|0)-1|0)+a.cU|0)/(DA(a)+a.cU|0)|0,a.bO.data.length-1|0);if(!a.dH.data.length)return;i=0;j=a.eJ;while(j<=a.ew){k=NF(a,j);if
(!(k!==null&&k.fc===a.bO.data[j])){l=a.dH.data;h=a.bO;k=a.dI;m=a.gr;i=j%l.length|0;if(l[i]!==null)TI(k,l[i],m);l[i]=Im(h.data[j],k,e,m);i=1;}j=j+1|0;}if(i){Cp(a.fY,L5(a.dI));Oy(a,a.bS.dt);}k=a.D;S1(b,k.b,k.a,a.o);n=g.sg;k=a.D;BC(b,k.b,k.a,a.o,n);k=a.di.cH;o=k.b;p=k.a;q=Ck(a.bS,2.0);k=a.bS.dU;r=a.eJ;j=o+q|0;while(r<=a.ew){m=NF(a,r);s=V(r,DA(a));i=r+1|0;t=s+V(i,a.cU)|0;s=j+a.dg|0;u=s+a.dP|0;v=a.cj!=r?0:1;w=!v?n:g.ps;x=!v?g.ro:g.hx;y=!v?g.mY:g.hx;z=!v?g.n1:g.hx;ba=(p+t|0)-a.bz.a|0;if(a.bS.cy){Ek(b,j,ba,m.fp,m.km,
a.c5,x,w);Ek(b,s,ba,m.fV,m.f9,a.c5,y,w);Ek(b,u,ba,m.fr,m.gO,a.c5,z,w);}else{Eh(b,j,ba,m.fp,m.km,a.c5,x,w,0.0);Eh(b,s,ba,m.fV,m.f9,a.c5,y,w,0.0);Eh(b,u,ba,m.fr,m.gO,a.c5,z,w,0.0);}s=m.fp.b;bb=j+s|0;Bn(k,Ba(0,a.dg-s|0),m.fp.a);BC(b,bb,ba,k,w);s=j+a.dg|0;bb=m.fV.b;bc=s+bb|0;Bn(k,Ba(0,a.dP-bb|0),m.fV.a);BC(b,bc,ba,k,w);s=m.fr.b;bd=u+s|0;Bn(k,Ba(0,(((a.di.bp.b-s|0)-a.dP|0)-a.dg|0)-q|0),m.fr.a);BC(b,bd,ba,k,w);be=(o+a.o.b|0)-q|0;Bn(k,q,DA(a)+a.cU|0);BC(b,be,ba,k,n);r=i;}Kw(b);}
function Oy(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fY;c=EY(b,c.b+150|0,c.a,a.bS.cy);CG(c,a.dz);d=a.dz;e=d.d3;f=e-(e+d.dF)/16.0;g=a.dH.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.fc.hT;k=d.f9;Ej(c,j,k.bk+a.ed,f+k.bA);j=d.fc.h4;d=d.gO;Ej(c,j,d.bk+a.ed,f+d.bA);}i=i+1|0;}a:{d=a.gr;if(d.cq>0){h=d.co;i=0;b:while(true){g=d.bP.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cg;l=j.cw;k=k;l=l.iz;Ej(c,k,l.bk+a.ed,f+l.bA);j=j.cm;if(h!=d.co)break b;}i=i+1|0;}b=new Ge;W(b);J(b);}}if(a.c5===null)a.c5=Gv(b);Em(a.c5,
c);K3(c);}
function NF(a,b){var c;c=a.dH.data;return c[b%c.length|0];}
function AJJ(a,b){Cp(a.di.bp,b);}
function AK7(a,b){Cp(a.di.cH,b);}
function N3(a){var b,c;IV(a);b=DA(a);c=a.bO.data.length;b=V(b,c)+V(a.cU,c+1|0)|0;Bn(a.cF,a.o.b,b);}
function AAp(a,b,c){var d,e;d=(a.dg+a.dP|0)+a.fh|0;e=Ck(a.bS,5.0);return Cd(Fh(e,b.b,a.bS.cB.b-d|0),Fh(c,b.a,a.bS.cB.a-a.cF.a|0));}
function AA1(a,b){var c,d,e,f;Oe(a);N3(a);c=(a.dg+a.dP|0)+a.fh|0;d=a.bS;e=(d.cB.b-b.b|0)-Ck(d,5.0)|0;d=a.bS;f=(d.cB.a-b.a|0)-Ck(d,5.0)|0;return Cd(Be(c,e),Be(a.cF.a,f));}
function Oe(a){var b,c,d,e,f,g,h,i,j;b=KY(a.bS);if(Ve(a))return;IV(a);CG(b,a.dz);c=Ws(b,a.ed);d=a.bO.data;e=d.length;f=0;while(f<e){g=d[f];h=G$(c,g.fo);i=G$(c,g.hT);j=G$(c,g.h4);a.dg=Ba(a.dg,h);a.dP=Ba(a.dP,i);a.fh=Ba(a.fh,j);f=f+1|0;}}
function TH(a,b){Iz(a.hL);b.q7.t();}
function QZ(a,b){var c,d,e;if(!a.dH.data.length)return (-1);c=DA(a);d=(b.a-a.D.a|0)+a.bz.a|0;e=a.cU;e=(d+e|0)/(c+e|0)|0;if(e<a.bO.data.length)return e;return (-1);}
function DA(a){return Fk(a.dz);}
function IV(a){var b;if(a.dz===null){b=HX(a.bS,a.sz);a.dz=b;a.dI=ACP(Fk(b));a.ed=Dw(a.dz.le);}}
function ALn(a,b){var c,d,e;a:{switch(b.bT){case 13:TH(a,a.bO.data[a.cj]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cj=a.eJ;b=a.fZ;c=a.bz;H0(b,c.b,c.a-(a.o.a/2|0)|0);return 0;case 34:a.cj=a.ew;b=a.fZ;c=a.bz;H0(b,c.b,c.a+(a.o.a/2|0)|0);return 0;case 35:case 39:a.cj=a.bO.data.length-1|0;break a;case 36:case 37:a.cj=0;break a;case 38:d=a.cj;e=a.bO.data.length;a.cj=((d+e
|0)-1|0)%e|0;break a;case 40:a.cj=(a.cj+1|0)%a.bO.data.length|0;break a;default:break a;}Iz(a.hL);return 0;}e=a.cj;if(e<=a.eJ)H0(a.fZ,a.bz.b,V(e,DA(a))+V(a.cj,a.cU)|0);else if(e>=a.ew)H0(a.fZ,a.bz.b,(V(e+1|0,DA(a))+V(a.cj+2|0,a.cU)|0)-a.o.a|0);return 0;}
function O1(){var a=this;B.call(a);a.l0=null;a.l1=null;}
function Iz(a){var b,c;b=a.l0;c=a.l1;HP(b.dT,c);RI(b);}
function Ow(){var a=this;Ex.call(a);a.lC=null;a.nY=null;a.sl=null;a.bl=null;a.cG=null;a.cN=null;a.th=0.0;a.t3=null;a.t0=null;}
function AK4(a){var b;b=a.bl;b.fZ=null;a.bl=CZ(b,null);}
function AFK(a,b,c,d){P6(a,b,c,d);P6(a.bl,b,c,d);if(d!==0.0){N3(a.bl);b=a.bl;c=b.bz;c.b=Io(b,c.b);c=b.bz;c.a=KE(b,c.a);if(TV(a))HC(a);else a.cN=null;if(Nd(a))GD(a);else a.cG=null;}}
function H0(a,b,c){var d;d=a.bl;d.bz.b=Io(d,b);d.bz.a=KE(d,c);if(TV(a))HC(a);if(Nd(a))GD(a);}
function Nd(a){var b;b=a.o.a;return b>0&&a.bl.cF.a>b?1:0;}
function TV(a){var b;b=a.o.b;return b>0&&a.bl.cF.b>b?1:0;}
function HC(a){var b,c,d,e,f,g;b=a.cN;if(b===null)b=Tn();a.cN=b;Py(a,b);c=a.cN;b=a.bl;d=b.bz.b;e=a.D;f=e.b;g=a.o;Pr(c,d,f,g.b,b.cF.b,e.a+g.a|0,K0(a));}
function GD(a){var b,c,d,e,f,g;b=a.cG;if(b===null)b=Tn();a.cG=b;Py(a,b);c=a.cG;b=a.bl;d=b.bz.a;e=a.D;f=e.a;g=a.o;Vo(c,d,f,g.a,b.cF.a,e.b+g.b|0,K0(a));}
function K0(a){return Cn(a.th,a.eF);}
function Py(a,b){var c,d;c=a.t3;d=a.t0;if(!(c!==null&&d!==null?(Jk(b.hn,c)&&Jk(b.ho,d)?1:0):0))F9(b,c,d);}
function AKq(a,b){var c;Wy(a.bl,b);if(!(a.cG===null&&a.cN===null)){DQ(b,1);c=a.cG;if(c!==null)Ha(c,b);c=a.cN;if(c!==null)Ha(c,b);c=a.cG;if(c!==null)Hg(c,b);c=a.cN;if(c!==null)Hg(c,b);DQ(b,0);}}
function SA(a,b){var c,d;a:{b:{c=a.cG;if(!(c!==null&&G1(c,b))){c=a.cN;if(c===null)break b;if(!G1(c,b))break b;}d=1;break a;}d=0;}return d;}
function ALA(a,b,c,d){var e;if(!SA(a,b.u)){e=a.bl;if(d==1){c=QZ(e,b.u);if(c>=0)TH(e,e.bO.data[c]);}}return 1;}
function AK6(a,b,c){var d;d=a.cG;if(d!==null){d=Hn(d,b.u,a.nY,1);if(d!==null)return d;}d=a.cN;if(d!==null){d=Hn(d,b.u,a.sl,0);if(d!==null)return d;}d=a.bl;if(!G_(d.di,b.u)&&!Jb(d.di)){b=d.uj;if(b!==null)Iz(b);}return null;}
function AIK(a,b,c){return SA(a,b.u)?1:0;}
function AIq(a,b){var c,d,e;c=a.cG;d=c!==null&&HD(c,b.u,a.lC)?1:0;c=a.cN;e=c!==null&&HD(c,b.u,a.lC)?1:0;a:{if(!d&&!e){c=a.bl;d=QZ(c,b.u);if(d>=0)c.cj=d;if(!(G_(c.di,c.D)&&Fl(c.bS.c8)?1:0)){d=0;break a;}}d=1;}return d;}
function AE4(a,b,c,d){var e,f;if(!Dd(a,b.u))return 0;e=Cn(d*0.25,a.eF);f=Cn(c*0.25,a.eF);if(b.bu){f=f+e|0;e=0;}if(a.cG!==null&&e){b=a.bl;V7(b,b.bz.a+e|0);GD(a);}if(a.cN!==null&&f){b=a.bl;Th(b,b.bz.b+f|0);HC(a);}return 1;}
function AML(a){var b,c;b=K0(a);c=Zz(a.bl);c.b=Ba(c.b,b);c.a=Ba(c.a,b);return c;}
function F4(){var a=this;B.call(a);a.dv=0;a.dG=0;a.kc=null;a.lj=0;a.e9=null;}
function ALo(a,b,c,d,e,f){var g=new F4();AHm(g,a,b,c,d,e,f);return g;}
function AHm(a,b,c,d,e,f,g){a.dv=b;a.dG=c;a.kc=Cd(f,g);a.lj=d;a.e9=e;}
var NO=F(0);
var Ec=F(En);
function N1(){Ec.call(this);this.f_=null;}
function Q2(a){var b;b=new Rs;JJ(b,a.f_);return b;}
function Lj(){B.call(this);this.t6=null;}
function AEX(a,b){b=b;L7(a.t6,b);}
function Ta(){B.call(this);this.rZ=null;}
function AHs(a,b){b=b;F$(a.rZ,b);}
function Ia(){var a=this;B.call(a);a.dE=null;a.iA=null;a.gq=0;}
function AOS(a,b,c){var d=new Ia();Z2(d,a,b,c);return d;}
function Z2(a,b,c,d){a.dE=b;a.iA=c;a.gq=d;}
function Zl(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return BB(a.dE,c.dE)&&BB(a.iA,c.iA)&&BB(Ct(a.gq),Ct(c.gq))?1:0;}return 0;}
function KU(){var a=this;Ia.call(a);a.iI=null;a.lV=0;}
function ADc(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){if(!Zl(a,b))return 0;c=b;return BB(a.iI,c.iI);}return 0;}
function D9(){var a=this;B.call(a);a.er=null;a.eW=null;a.q6=0;}
function ANR(a,b,c){var d=new D9();J0(d,a,b,c);return d;}
function J0(a,b,c,d){a.er=b;a.eW=c;a.q6=d;}
function W1(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return BB(a.er,c.er)&&BB(a.eW,c.eW)?1:0;}return 0;}
function FC(){D9.call(this);this.fR=null;}
function HK(){var a=this;D9.call(a);a.f2=null;a.me=0;}
function AMh(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){if(!W1(a,b))return 0;c=b;return BB(a.f2,c.f2);}return 0;}
function H5(){var a=this;D9.call(a);a.gU=null;a.f4=null;}
function ACr(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return BB(a.gU,c.gU)&&BB(a.f4,c.f4)?1:0;}return 0;}
function X8(){var a=this;Gg.call(a);a.EC=null;a.GN=0;a.Fc=0;a.CJ=0;}
function Qv(){var a=this;B.call(a);a.mx=null;a.my=null;}
function AGi(a){var b,c;b=a.mx;c=a.my;Rh();Iy(b,c,AR$);}
function Qw(){var a=this;B.call(a);a.pK=null;a.pL=null;}
function ADM(a){var b,c;b=a.pK;c=a.pL;Rh();Iy(b,c,AR_);}
function Qt(){var a=this;B.call(a);a.s_=null;a.s$=null;}
function ACE(a){Iy(a.s_,a.s$,null);}
function Qu(){var a=this;B.call(a);a.l8=null;a.l9=null;}
function AGe(a){var b,c,d,e,f,g,h;b=a.l8;c=a.l9;d=DJ(b.bc.d);e=Fx(b.bc.d);d=So(b.bc.eo,d,e);Do(b.ey.bM);b=b.bc;e=Ef(b,c);if(d!==null){f=b.d;g=e.X;h=e.bf;e=new Sb;e.v8=b;e.v7=c;d.Fl(f,g,h,1,e,b.hb);}}
function PG(){B.call(this);this.ok=null;}
function AJ7(a){var b;b=a.ok;Do(b.ey.bM);Ko(b.bc,V4(b),0);}
function PF(){B.call(this);this.tA=null;}
function AIT(a){var b;b=a.tA;Do(b.ey.bM);Ko(b.bc,V4(b),1);}
function PE(){B.call(this);this.rf=null;}
function ANg(a){var b,c,d,e;b=a.rf;Do(b.ey.bM);FQ(b);b=b.bc;BT(b);c=new V6;c.oV=b;b=Xz(C(253));if(!Kr()){c=new Bo;Br(c,C(254));KJ(b,c);}else{d=$rt_globals.navigator.clipboard.readText();e=new PD;e.mF=c;b=ABx(b);d.then(Bi(e,"f"),Bi(b,"f"));}}
function NR(){var a=this;B.call(a);a.mv=null;a.mw=null;}
function AIP(a){var b,c;b=a.mv;c=a.mw;b=b.bc.d;b.kT=c;HY(b);}
var OZ=F(0);
var ARk=null;function ZT(){ARk=new SD;}
function OH(){B.call(this);this.un=null;}
function ADA(a){var b,c,d;b=a.un;Do(b.ey.bM);c=FQ(b);b=b.bc;BT(b);d=new P8;d.rv=b;Uf(c,d);}
function Hz(){var a=this;B.call(a);a.km=null;a.f9=null;a.gO=null;a.fp=null;a.fV=null;a.fr=null;a.fc=null;}
function AIp(b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r;a:{j=c.data;k=O(Hz,b);l=j.length;if(l<=0){if(b<=0)break a;m=k.data;while(true){if(d>e)break a;m[d%m.length|0]=Im(f.data[d],g,h,i);d=d+1|0;}}m=k.data;while(d<=e){n=f.data[d];o=d%m.length|0;p=d%l|0;q=j[p];if(q!==null&&q.fc!==n){TI(g,q,i);m[o]=Im(n,g,h,i);j[p]=null;}else if(q!==null&&m[o]===null){m[o]=q;j[p]=null;}else m[o]=Im(n,g,h,i);d=d+1|0;}}d=0;while(d<l){r=j[d];if(r!==null){TI(g,r,i);j[d]=null;}d=d+1|0;}return k;}
function Im(b,c,d,e){var f,g,h;f=new Hz;f.fp=new Bq;f.fV=new Bq;f.fr=new Bq;f.fc=b;g=B7(e,b.fo);if(g!==null)g.gN=g.gN+1|0;else{g=new TQ;h=K7(c,b.fo,d);g.gN=1;g.iz=h;DH(e,b.fo,g);}e=g.iz;f.km=e;Bn(f.fp,e.Y|0,e.bV|0);e=K7(c,b.hT,d);f.f9=e;Bn(f.fV,e.Y|0,e.bV|0);b=K7(c,b.h4,d);f.gO=b;Bn(f.fr,b.Y|0,b.bV|0);return f;}
function TI(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.fc.fo;f=B7(d,e);g=f.gN-1|0;f.gN=g;if(!g){a:{h=0;i=null;if(e===null){j=d.bP.data[0];while(j!==null){if(j.cg===null)break a;e=j.cm;i=j;j=e;}}else{k=JZ(e);l=d.bP.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.ig==k&&WP(e,j.cg))){m=j.cm;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cm=j.cm;else d.bP.data[h]=j.cm;d.co=d.co+1|0;d.cq=d.cq-1|0;}JS(b,f.iz);}JS(b,c.f9);JS(b,c.gO);}
var P7=F(0);
function Ws(b,c){var d;d=new TR;d.nT=b;d.nS=c;return d;}
function WB(){var a=this;B.call(a);a.ff=null;a.fX=0;a.h7=0;a.fy=0;}
function ACP(a){var b=new WB();AE5(b,a);return b;}
function AE5(a,b){a.ff=Bz();a.fy=0;a.h7=2048;a.fX=b;}
function K7(a,b,c){var d,e,f,g,h,i,j;d=G$(c,b);e=a.h7;if(d>e){c=new Bo;f=new R;T(f);BY(Bk(K(Bk(K(f,C(255)),d),C(256)),e),41);Br(c,S(f));J(c);}if(!a.fX){b=new BI;Br(b,C(257));J(b);}a:{b=new B4;if(d){b:{c=a.ff;if(c.j>0){c=BM(c);g=d;while(true){if(!BN(c))break b;f=BP(c);if(f.Y>=g)break;}Cb(b,f.bk,f.bA,g,a.fX);f.bk=f.bk+g;h=f.Y-g;f.Y=h;if(h===0.0)TN(a.ff,f);break a;}}g=a.fy;i=d;Cb(b,0.0,g,i,a.fX);c=a.ff;f=new B4;h=a.fy;g=a.h7-d|0;j=a.fX;f.bk=i;f.bA=h;f.Y=g;f.bV=j;Bv(c,f);a.fy=a.fy+a.fX|0;}}return b;}
function JS(a,b){var c,d,e,f,g,h,i;a:{c=new B4;c.bk=b.bk;c.bA=b.bA;c.Y=b.Y;c.bV=b.bV;b=a.ff;if(b.j>0){d=BM(b);while(true){if(!BN(d))break a;e=BP(d);if(e.bA===c.bA){f=e.bk;g=e.Y;h=f+g;i=c.bk;if(h===i){c.bk=f;c.Y=c.Y+g;PL(d);}else{h=c.Y;if(i+h===f){c.Y=h+g;PL(d);}}}}}}Bv(a.ff,c);}
function L5(a){return Cd(a.h7,a.fy);}
function TB(){var a=this;Ex.call(a);a.eM=null;a.ga=null;a.hu=null;a.em=null;a.ir=0.0;a.gg=0;a.hy=0;a.cJ=null;a.hq=null;}
function Jl(a){var b;b=a.o;return b.b&&b.a?0:1;}
function Ug(a){var b,c;a:{if(a.hu!==null){b=a.ga;if(b!==null&&!DU(b)){c=0;break a;}}c=1;}return c;}
function N6(a,b){a.o.a=b;}
function Oi(a,b,c,d,e){var f,g;f=a.eM.dU;Bn(f,d,a.o.a);g=a.D;BC(b,g.b+c|0,g.a,f,e);}
function Tg(a){if(a.em===null)a.em=HX(a.eM,a.hu);}
function Rv(){B.call(this);this.nt=null;}
function ALC(a,b,c){var d,e;c=a.nt;d=c.d.f;e=b.bb;b=c.ek;QS(d.v.data[e],0,b);}
var Ux=F(BS);
function DB(){var a=this;B.call(a);a.jo=null;a.gh=null;a.dK=null;a.c9=null;a.hZ=null;a.kw=null;a.f6=0;a.kr=null;}
function ACG(a,b){var c=new DB();Wp(c,a,b);return c;}
function AOv(a,b,c,d){var e=new DB();YB(e,a,b,c,d);return e;}
function Wp(a,b,c){YB(a,b,c,null,null);}
function YB(a,b,c,d,e){a.gh=new B4;a.dK=new Bq;a.c9=new Bq;a.kr=c;a.kw=e;a.jo=b;a.hZ=d;}
function S3(a){return a.hZ===null?0:1;}
function L$(){B.call(this);this.nX=null;}
function AGL(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.nX;c=new Hf;d=new HF;e=new HT;AAJ();IQ(e,ARY);K9(d,e,BA(AR0),BA(ARZ),BA(AR2),BA(AR0),BA(AR1),BA(AR4),BA(AR3),BA(AR6),BA(AR5),BA(AR7));XV();f=(ASa.f0()).data;g=f.length;h=O(H1,g);i=h.data;j=0;while(j<g){i[j]=f[j].k5;j=j+1|0;}k=ZK(N(C(258)),N(C(259)),N(C(260)),N(C(233)));l=new Hl;m=new Hx;AH$();e=ASb;Lc(m,e,ASc,ASd,ASe,ASf,e);Kk(l,m,AA6(),ABe(N(C(261)),N(C(89)),N(C(90))),AA6(),Wd(1,0.125),ASg,ASh);H7(c,d,h,k,l,Wv(N(C(91)),N(C(92)),N(C(93)),N(C(262))));I0(b,c);}
function L_(){B.call(this);this.o2=null;}
function ALI(a){O7(a.o2);}
function L9(){B.call(this);this.ul=null;}
function ABG(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.ul;c=new Hf;d=new HF;e=new HT;AAv();IQ(e,ASi);K9(d,e,BA(ASj),BA(ASk),BA(ASl),BA(ASj),BA(ASm),BA(ASn),BA(ASo),BA(ASp),BA(ASq),BA(ASr));ZF();f=(ASs.f0()).data;g=f.length;h=O(H1,g);i=h.data;j=0;while(j<g){i[j]=f[j].kb;j=j+1|0;}k=ZK(N(C(263)),N(C(264)),N(C(265)),N(C(266)));l=new Hl;m=new Hx;ACt();e=ASt;Lc(m,e,ASu,ASv,ASw,ASx,e);Kk(l,m,AAY(),ABe(N(C(267)),N(C(268)),Hb(0)),AAY(),Wd(1,0.07500000298023224),ASy,ASz);H7(c,d,h,k,l,Wv(N(C(269)),N(C(270)),N(C(271)),N(C(272))));I0(b,
c);}
function UE(){B.call(this);this.pA=null;}
function AHy(a){var b;b=a.pA;H$(b,b.gD.lq,b.fg+1|0);}
function UD(){B.call(this);this.sJ=null;}
function AKp(a){var b,c;b=a.sJ;c=b.fg;if(c>7)H$(b,b.gD.lq,c-1|0);}
function P3(){B.call(this);this.rM=null;}
function AG_(a){var b,c,d,e,f,g,h,i;b=a.rM;c=G(Bw,[C(103),C(194),C(273)]).data;d=O(DB,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new R6;i.lR=b;i.lS=h;e[f]=ACG(i,h);f=f+1|0;}return d;}
function Q5(){B.call(this);this.ny=null;}
function AGq(a){PY(a.ny.lB,0);}
function Q6(){B.call(this);this.oL=null;}
function ALp(a){PY(a.oL.lB,1);}
function VN(){B.call(this);this.q8=null;}
function ABT(a){var b,c,d,e,f;b=a.q8.d.f;c=b.b2;d=new R;T(d);Bk(K(d,C(274)),c);$rt_globals.console.info($rt_ustr(S(d)));c=b.kh;d=new R;T(d);Bk(K(d,C(275)),c);$rt_globals.console.info($rt_ustr(S(d)));d=b.cO;e=GA(EN(b));UN(d,0,d.cL,e);b=GN();f=b.jr;f.data[0]=10;M1(b,f,0,1);}
function VI(){B.call(this);this.ng=null;}
function AGt(a){P9(a.ng);}
function VJ(){B.call(this);this.oi=null;}
function AMD(a){RD(a.oi);}
function VK(){B.call(this);this.tK=null;}
function AHM(a){KN(a.tK.d);}
function VL(){B.call(this);this.l$=null;}
function AFV(a){HY(a.l$.d);}
var J1=F(0);
function Vc(){var a=this;B.call(a);a.ob=null;a.oc=null;a.od=null;}
function M$(){B.call(this);this.pE=null;}
function ACp(a,b){var c,d;c=a.pE;d=GQ(b,c.bl.cF.a-c.o.a|0);V7(c.bl,d);GD(c);}
function M9(){B.call(this);this.qD=null;}
function ACJ(a,b){var c,d;c=a.qD;d=GQ(b,c.bl.cF.b-c.o.b|0);Th(c.bl,d);HC(c);}
function S4(){B.call(this);this.pu=null;}
function AM5(a,b,c){FF(BG(a.pu.d.f,b.bb),0,H(c));}
function OU(){var a=this;B.call(a);a.nF=null;a.nE=null;}
function AEw(a,b){a.nF.m(Zt(a.nE,b));}
function AA_(){var a=this;B.call(a);a.gy=null;a.cV=0;}
function AFC(a,b){var c=new AA_();ABO(c,a,b);return c;}
function ABO(a,b,c){a.gy=b;a.cV=c;}
function AIU(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return a.cV==c.cV&&BB(a.gy,c.gy)?1:0;}return 0;}
function LX(){B.call(this);this.m$=null;}
function AHq(a,b){b=b;Ls(a.m$,b);}
function VZ(){B.call(this);this.nc=null;}
function ANm(a,b){b=b;F$(a.nc,b);}
var HV=F(0);
function LE(){var a=this;B.call(a);a.mc=null;a.mb=null;}
function AGw(a){WZ(a.mc,a.mb);}
function Lo(){var a=this;B.call(a);a.rb=null;a.rc=null;}
function ABJ(a){a.rb.m(a.rc);}
function TP(){B.call(this);this.qs=null;}
function AMX(a){return a.qs;}
var SD=F();
function Vj(){var a=this;B.call(a);a.ml=null;a.mk=null;a.mo=null;a.mm=null;}
function AF1(a,b){var c,d,e,f,g,h,i;c=a.ml;d=a.mk;e=a.mo;f=a.mm;if(!(b.done?1:0)){SC(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Sm;c.oW=d;c.oY=g;c.oZ=f;b.then(Bi(c,"f"),Bi(e,"f"));}else{h=f.data;c=g.values();b=Eu(g.name);i=h.length;f=CX(f,i+1|0);f.data[i]=b;SC(c,d,e,f);}}}
function Ew(){var a=this;B.call(a);a.hP=0;a.re=0;a.gX=null;a.ft=null;a.o9=null;a.io=null;}
function ASA(a){var b=new Ew();JJ(b,a);return b;}
function JJ(a,b){a.io=b;a.re=b.co;a.gX=null;}
function EG(a){var b,c;if(a.gX!==null)return 1;while(true){b=a.hP;c=a.io.bP.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.hP=b+1|0;}return 0;}
function XM(a){var b;if(a.re==a.io.co)return;b=new Ge;W(b);J(b);}
function Ka(a){var b,c,d,e;XM(a);if(!EG(a)){b=new K_;W(b);J(b);}b=a.gX;if(b!==null){c=a.ft;if(c!==null)a.o9=c;a.ft=b;a.gX=b.cm;}else{d=a.io.bP.data;e=a.hP;a.hP=e+1|0;b=d[e];a.ft=b;a.gX=b.cm;a.o9=null;}}
var Rs=F(Ew);
function NN(a){Ka(a);return a.ft.cg;}
var Yd=F();
function Kr(){return "clipboard" in $rt_globals.navigator?1:0;}
function W$(){var a=this;B.call(a);a.CF=null;a.HC=0;}
function PQ(){var a=this;B.call(a);a.g=null;a.dc=0;a.ji=null;a.m3=0;a.fG=0;a.eh=0;a.bh=0;a.ko=null;}
function IX(a){return a.g.bt;}
function VH(a,b,c,d){var e,f,g,h,i,j;e=Bz();f=a.dc;g=0;if(c!=f)a.dc=c;a:{switch(b){case -1073741784:h=new Qn;c=a.bh+1|0;a.bh=c;EQ(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Oz;c=a.bh+1|0;a.bh=c;EQ(h,c);break a;case -33554392:h=new Rt;c=a.bh+1|0;a.bh=c;EQ(h,c);break a;default:c=a.fG+1|0;a.fG=c;if(d!==null)h=AOZ(c);else{h=new E1;EQ(h,0);g=1;}c=a.fG;if(c<=(-1))break a;if(c>=10)break a;a.ji.data[c]=h;break a;}h=new Vz;EQ(h,(-1));}while(true){if(EC(a.g)&&a.g.h==(-536870788))
{d=ALV(B5(a,2),B5(a,64));while(!CW(a.g)&&EC(a.g)){i=a.g;j=i.h;if(j&&j!=(-536870788)&&j!=(-536870871))break;Ch(d,Bd(i));i=a.g;if(i.T!=(-536870788))continue;Bd(i);}i=JB(a,d);i.I(h);}else if(a.g.T==(-536870788)){i=F2(h);Bd(a.g);}else{i=NU(a,h);d=a.g;if(d.T==(-536870788))Bd(d);}if(i!==null)Bv(e,i);if(CW(a.g))break;if(a.g.T==(-536870871))break;}if(a.g.jK==(-536870788))Bv(e,F2(h));if(a.dc!=f&&!g){a.dc=f;d=a.g;d.fq=f;d.h=d.T;d.d_=d.ep;j=d.cP;d.q=j+1|0;d.gv=j;EF(d);}switch(b){case -1073741784:break;case -536870872:d
=new LC;E2(d,e,h);return d;case -268435416:d=new T3;E2(d,e,h);return d;case -134217688:d=new PW;E2(d,e,h);return d;case -67108824:d=new RS;E2(d,e,h);return d;case -33554392:d=new Dn;E2(d,e,h);return d;default:switch(e.j){case 0:break;case 1:return AOM(Bp(e,0),h);default:return AOq(e,h);}return F2(h);}d=new H3;E2(d,e,h);return d;}
function AAn(a){var b,c,d,e,f,g,h;b=Bu(4);c=(-1);d=(-1);if(!CW(a.g)&&EC(a.g)){e=b.data;c=Bd(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B1(3);b=e.data;b[0]=c&65535;f=a.g;g=f.T;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bd(f);f=a.g;g=f.T;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bd(f);return ALG(e,3);}return ALG(e,2);}if(!B5(a,2))return XK(b[0]);if(B5(a,64))return AJY(b[0]);return ADE(b[0]);}e=b.data;c=1;while(c<4&&!CW(a.g)&&EC(a.g)){h=c+1|0;e[c]=Bd(a.g);c=h;}if(c==1){h=e[0];if(!(ASB.w7(h)==ASC?0:1))return Vv(a,e[0]);}if
(!B5(a,2))return APx(b,c);if(B5(a,64)){f=new Vi;MV(f,b,c);return f;}f=new R4;MV(f,b,c);return f;}
function NU(a,b){var c,d,e,f,g,h,i;if(EC(a.g)&&!IM(a.g)&&Jc(a.g.h)){if(B5(a,128)){c=AAn(a);if(!CW(a.g)){d=a.g;e=d.T;if(!(e==(-536870871)&&!(b instanceof E1))&&e!=(-536870788)&&!EC(d))c=K1(a,b,c);}}else if(!M4(a.g)&&!Tc(a.g)){f=new M7;T(f);while(!CW(a.g)&&EC(a.g)&&!M4(a.g)&&!Tc(a.g)){if(!(!IM(a.g)&&!a.g.h)&&!(!IM(a.g)&&Jc(a.g.h))){g=a.g.h;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bd(a.g);if(!KV(e))BY(f,e&65535);else Hw(f,FL(e));}if(!B5(a,2)){c=new Qj;C$(c);c.cc
=S(f);e=f.E;c.bs=e;c.jy=AIF(e);c.kq=AIF(c.bs);h=0;while(h<(c.bs-1|0)){P1(c.jy,I(c.cc,h),(c.bs-h|0)-1|0);P1(c.kq,I(c.cc,(c.bs-h|0)-1|0),(c.bs-h|0)-1|0);h=h+1|0;}}else if(B5(a,64))c=APw(f);else{c=new L6;C$(c);c.gx=S(f);c.bs=f.E;}}else c=K1(a,b,Vh(a,b));}else{d=a.g;if(d.T!=(-536870871))c=K1(a,b,Vh(a,b));else{if(b instanceof E1)J(B3(C(5),d.bt,M3(d)));c=F2(b);}}a:{if(!CW(a.g)){e=a.g.T;if(!(e==(-536870871)&&!(b instanceof E1))&&e!=(-536870788)){f=NU(a,b);if(c instanceof CH&&!(c instanceof EH)&&!(c instanceof Cx)&&
!(c instanceof D7)){i=c;if(!f.bE(i.B)){c=new Ue;Et(c,i.B,i.e,i.gR);c.B.I(c);}}if((f.gY()&65535)!=43)c.I(f);else c.I(f.B);break a;}}if(c===null)return null;c.I(b);}if((c.gY()&65535)!=43)return c;return c.B;}
function K1(a,b,c){var d,e,f,g,h;d=a.g;e=d.T;if(c!==null&&!(c instanceof BU)){switch(e){case -2147483606:Bd(d);d=new V$;CT(d,c,b,e);K5();c.I(ASD);return d;case -2147483605:Bd(d);d=new Oq;CT(d,c,b,(-2147483606));K5();c.I(ASD);return d;case -2147483585:Bd(d);d=new N5;CT(d,c,b,(-536870849));K5();c.I(ASD);return d;case -2147483525:f=new L1;d=EJ(d);g=a.eh+1|0;a.eh=g;Ic(f,d,c,b,(-536870849),g);K5();c.I(ASD);return f;case -1073741782:case -1073741781:Bd(d);d=new Qg;CT(d,c,b,e);c.I(d);return d;case -1073741761:Bd(d);d
=new Pk;CT(d,c,b,(-536870849));c.I(b);return d;case -1073741701:h=new SW;d=EJ(d);e=a.eh+1|0;a.eh=e;Ic(h,d,c,b,(-536870849),e);c.I(h);return h;case -536870870:case -536870869:Bd(d);if(c.gY()!=(-2147483602)){d=new Cx;CT(d,c,b,e);}else if(B5(a,32)){d=new Qh;CT(d,c,b,e);}else{d=new Ne;f=N7(a.dc);CT(d,c,b,e);d.jJ=f;}c.I(d);return d;case -536870849:Bd(d);d=new Ff;CT(d,c,b,(-536870849));c.I(b);return d;case -536870789:h=new EL;d=EJ(d);e=a.eh+1|0;a.eh=e;Ic(h,d,c,b,(-536870849),e);c.I(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bd(d);d=new V_;Et(d,f,b,e);f.e=d;return d;case -2147483585:Bd(d);c=new T$;Et(c,f,b,(-2147483585));return c;case -2147483525:c=new NT;QM(c,EJ(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bd(d);d=new Pe;Et(d,f,b,e);f.e=d;return d;case -1073741761:Bd(d);c=new Sg;Et(c,f,b,(-1073741761));return c;case -1073741701:c=new PX;QM(c,EJ(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bd(d);d=AOQ(f,b,e);f.e=d;return d;case -536870849:Bd(d);c
=new D7;Et(c,f,b,(-536870849));return c;case -536870789:return ANZ(EJ(d),f,b,(-536870789));default:}return c;}
function Vh(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof E1;while(true){a:{e=a.g;f=e.T;if((f&(-2147418113))==(-2147483608)){Bd(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dc=g;else{if(f!=(-1073741784))g=a.dc;c=VH(a,f,g,b);e=a.g;if(e.T!=(-536870871))J(B3(C(5),e.bt,e.cP));Bd(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bd(e);c
=ALr(0);break a;case -2147483577:Bd(e);c=new M_;BJ(c);break a;case -2147483558:Bd(e);c=new U2;h=a.bh+1|0;a.bh=h;AAH(c,h);break a;case -2147483550:Bd(e);c=ALr(1);break a;case -2147483526:Bd(e);c=new UB;BJ(c);break a;case -536870876:Bd(e);a.bh=a.bh+1|0;if(B5(a,8)){if(B5(a,1)){c=AOd(a.bh);break a;}c=ANE(a.bh);break a;}if(B5(a,1)){c=AOw(a.bh);break a;}c=AO3(a.bh);break a;case -536870866:Bd(e);if(B5(a,32)){c=APk();break a;}c=AOV(N7(a.dc));break a;case -536870821:Bd(e);i=0;c=a.g;if(c.T==(-536870818)){i=1;Bd(c);}c
=JB(a,Fs(a,i));c.I(b);e=a.g;if(e.T!=(-536870819))J(B3(C(5),e.bt,e.cP));ND(e,1);Bd(a.g);break a;case -536870818:Bd(e);a.bh=a.bh+1|0;if(!B5(a,8)){c=new Jh;BJ(c);break a;}c=new Ma;e=N7(a.dc);BJ(c);c.qh=e;break a;case 0:j=e.ep;if(j!==null)c=JB(a,j);else{if(CW(e)){c=F2(b);break a;}c=XK(f&65535);}Bd(a.g);break a;default:break b;}Bd(e);c=new Jh;BJ(c);break a;}h=(f&2147483647)-48|0;if(a.fG<h)J(B3(C(5),EO(e),M3(a.g)));Bd(e);a.bh=a.bh+1|0;c=!B5(a,2)?ANJ(h,a.bh):B5(a,64)?AOe(h,a.bh):APs(h,a.bh);a.ji.data[h].jg=1;a.m3=
1;break a;}if(f>=0&&!F5(e)){c=Vv(a,f);Bd(a.g);}else if(f==(-536870788))c=F2(b);else{if(f!=(-536870871)){b=new HN;c=!F5(a.g)?UY(f&65535):a.g.ep.ei();e=a.g;Ip(b,c,e.bt,e.cP);J(b);}if(d){b=new HN;e=a.g;Ip(b,C(5),e.bt,e.cP);J(b);}c=F2(b);}}}if(f!=(-16777176))break;}return c;}
function Fs(a,b){var c,d,e,f,g,h,i,j,$$je;c=ALV(B5(a,2),B5(a,64));D3(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(CW(a.g))break a;h=a.g;b=h.T;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Ch(c,d);d=Bd(a.g);h=a.g;if(h.T!=(-536870874)){d=38;break d;}if(h.h==(-536870821)){Bd(h);e=1;d=(-1);break d;}Bd(h);if(g){c=Fs(a,0);break d;}if(a.g.T==(-536870819))break d;UK(c,Fs(a,0));break d;case -536870867:if(!g){b=h.h;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bd(h);h=a.g;i=h.T;if(F5(h))break c;if
(i<0){j=a.g.h;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Jc(i))break e;i=i&65535;break e;}catch($$e){$$je=ET($$e);if($$je instanceof DD){break b;}else{throw $$e;}}}try{BQ(c,d,i);}catch($$e){$$je=ET($$e);if($$je instanceof DD){break b;}else{throw $$e;}}Bd(a.g);d=(-1);break d;}}if(d>=0)Ch(c,d);d=45;Bd(a.g);break d;case -536870821:if(d>=0){Ch(c,d);d=(-1);}Bd(a.g);j=0;h=a.g;if(h.T==(-536870818)){Bd(h);j=1;}if(!e)Wj(c,Fs(a,j));else UK(c,Fs(a,j));e=0;Bd(a.g);break d;case -536870819:if(d>=0)Ch(c,
d);d=93;Bd(a.g);break d;case -536870818:if(d>=0)Ch(c,d);d=94;Bd(a.g);break d;case 0:if(d>=0)Ch(c,d);h=a.g.ep;if(h===null)d=0;else{ABv(c,h);d=(-1);}Bd(a.g);break d;default:}if(d>=0)Ch(c,d);d=Bd(a.g);}g=0;}J(B3(C(5),IX(a),a.g.cP));}J(B3(C(5),IX(a),a.g.cP));}if(!f){if(d>=0)Ch(c,d);return c;}J(B3(C(5),IX(a),a.g.cP-1|0));}
function Vv(a,b){var c,d,e;c=KV(b);if(B5(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return ADE(b&65535);}if(B5(a,64)&&b>128){if(c){d=new Lu;C$(d);d.bs=2;d.pQ=FU(FR(b));return d;}if(NK(b))return AIL(b&65535);if(!Rf(b))return AJY(b&65535);return AGl(b&65535);}}if(!c){if(NK(b))return AIL(b&65535);if(!Rf(b))return XK(b&65535);return AGl(b&65535);}d=new Du;C$(d);d.bs=2;d.fd=b;e=(FL(b)).data;d.iM=e[0];d.hG=e[1];return d;}
function JB(a,b){var c,d,e;if(!Zc(b)){if(!b.F){if(b.gf())return AFW(b);return ALs(b);}if(!b.gf())return AGW(b);c=new Ie;Ss(c,b);return c;}c=WQ(b);d=new LI;BJ(d);d.oK=c;d.uW=c.S;if(!b.F){if(b.gf())return ZN(AFW(GK(b)),d);return ZN(ALs(GK(b)),d);}if(!b.gf())return ZN(AGW(GK(b)),d);c=new O_;e=new Ie;Ss(e,GK(b));ABl(c,e,d);return c;}
function GP(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B5(a,b){return (a.dc&b)!=b?0:1;}
var Q$=F(0);
var ARe=null;function ZJ(){ARe=new Pj;}
var ZV=F();
function XO(b,c,d,e,f,g){g.b=c.b;g.a=f;BC(b,d.b,d.a,g,e);BC(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;BC(b,d.b,d.a+f|0,g,e);BC(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function Zx(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;BC(b,j,k,i,h);BC(b,j,k,i,h);BC(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;BC(b,l,j,i,h);BC(b,l,j,i,h);BC(b,l+g|0,j+g|0,i,h);}
var Vf=F(Ea);
var ASE=null;function ZL(){ASE=E($rt_floatcls());}
var E3=F();
var ASF=null;var ASG=null;var ASH=null;var ASI=null;var AQh=null;function YL(){ASF=Fw([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);ASG=ADD([BH(1),BH(10),BH(100),BH(1000),BH(10000),BH(100000),BH(1000000),BH(10000000),BH(100000000),BH(1000000000),Dh(1410065408, 2),Dh(1215752192, 23),Dh(3567587328, 232),Dh(1316134912, 2328),Dh(276447232, 23283),Dh(2764472320, 232830),Dh(1874919424, 2328306),Dh(1569325056, 23283064),Dh(2808348672, 232830643)]);ASH=ADD([BH(1),BH(10),BH(100),BH(10000),BH(100000000),
Dh(1874919424, 2328306)]);ASI=new Si;AQh=new To;}
var GX=F();
var ASJ=0;var ASK=null;var ASL=null;function Zj(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.nd=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.jO=0;c.jq=0;return;}if(f)d=e|8388608;else{d=e<<1;while(AEA(Wa(BH(d),BH(8388608)),AAk)){d=d<<1;f=f+(-1)|0;}}g=Zr(ASL,f);if(g<0)g= -g|0;h=ASL.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=GS(d,ASK.data[e],i);if(j<ASJ){while($rt_ucmp(j,ASJ)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=ASL.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=GS(d,
ASK.data[e],i);}e=d<<1;d=e+1|0;h=ASK.data;f=g+1|0;k=h[f];l=i-1|0;m=GS(d,k,l);n=GS(e-1|0,ASK.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?V($rt_udiv(j,o),o):q<0?V($rt_udiv(j,k),k)+k|0:V($rt_udiv((j+(k/2|0)|0),k),k);if(Hs(BH(d),BH(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.jO=d;c.jq=g-50|0;}
function GS(b,c,d){return XW(APc(AIm(Wa(BH(b),Dh(4294967295, 0)),Wa(BH(c),Dh(4294967295, 0))),32-d|0));}
function X4(){ASJ=$rt_udiv((-1),10);ASK=Fw([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);ASL=Fw([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function To(){var a=this;B.call(a);a.jO=0;a.jq=0;a.nd=0;}
var FX=F(0);
function RY(){B.call(this);this.pN=null;}
function AH9(a,b,c,d){IF(a.pN,b,c.bb,d.bb);}
function RZ(){B.call(this);this.mp=null;}
function AF2(a,b,c,d){IF(a.mp,b,c.bb,d.bb);}
function Hc(){B.call(this);this.lx=0;}
var ASM=null;var ASN=null;var ASO=null;function AJr(a){var b=new Hc();ZR(b,a);return b;}
function ZR(a,b){a.lx=b;}
function NI(b){return !b?ASN:ASM;}
function W3(){ASM=AJr(1);ASN=AJr(0);ASO=E($rt_booleancls());}
var IJ=F(0);
var Qr=F();
var Nx=F(0);
var YU=F();
function QV(){B.call(this);this.sI=null;}
function AIQ(a,b,c,d){Hm(a.sI,b,c.bb,d.bb);}
var QU=F();
function AMp(a,b){return b.dE.cV>=0?0:1;}
var QT=F();
function AJV(a,b){var c;a:{b:{b=b;if(b!==null){b=b.er;if(b===null)break b;if(b.cV>=0)break b;}c=1;break a;}c=0;}return c;}
function QW(){B.call(this);this.rT=null;}
function AIk(a,b,c,d){Hm(a.rT,b,c.bb,d.bb);}
function By(){var a=this;B.call(a);a.e=null;a.b0=0;a.oe=null;a.gR=0;}
var AQd=0;function BJ(a){var b;b=AQd;AQd=b+1|0;a.oe=J_(b);}
function Jy(a,b){var c;c=AQd;AQd=c+1|0;a.oe=J_(c);a.e=b;}
function GT(a,b,c,d){var e;e=d.r;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function G2(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ADZ(a,b){a.gR=b;}
function ADm(a){return a.gR;}
function AKT(a){return a.e;}
function ALM(a,b){a.e=b;}
function ALL(a,b){return 1;}
function AMx(a){return null;}
function H9(a){var b;a.b0=1;b=a.e;if(b!==null){if(!b.b0){b=b.eT();if(b!==null){a.e.b0=1;a.e=b;}a.e.dW();}else if(b instanceof FN&&b.d0.jg)a.e=b.e;}}
function ABo(){AQd=1;}
var S7=F(0);
function TR(){var a=this;B.call(a);a.nT=null;a.nS=0.0;}
function G$(a,b){return Jz(a.nT,b,a.nS*2.0+0.875);}
var QI=F(Ea);
var ASP=null;function KD(b,c){return Long_udiv(b, c);}
function WK(b,c){return Long_urem(b, c);}
function Hs(b,c){return Long_ucompare(b, c);}
function Yl(){ASP=E($rt_longcls());}
function V0(){var a=this;B.call(a);a.nk=null;a.ni=null;a.nh=0;a.nj=0;}
function AIV(a,b){b=b;DL(a.nk,a.ni,b,a.nh,a.nj);}
function V1(){var a=this;B.call(a);a.uw=null;a.uv=null;a.uu=0;a.ut=0;}
function AFd(a,b){b=b;DL(a.uw,a.uv,b,a.uu,a.ut);}
var Pj=F();
function AIE(a,b){}
function Cw(){var a=this;By.call(a);a.jg=0;a.dh=0;}
var ASD=null;function K5(){K5=Bf(Cw);AEZ();}
function AOZ(a){var b=new Cw();EQ(b,a);return b;}
function EQ(a,b){K5();BJ(a);a.dh=b;}
function ACN(a,b,c,d){var e,f;e=HB(d,a.dh);II(d,a.dh,b);f=a.e.c(b,c,d);if(f<0)II(d,a.dh,e);return f;}
function AHO(a){return a.dh;}
function AC$(a,b){return 0;}
function AEZ(){var b;b=new M8;BJ(b);ASD=b;}
function FY(){var a=this;B.call(a);a.R=null;a.fq=0;a.ec=0;a.te=0;a.jK=0;a.T=0;a.h=0;a.qI=0;a.ep=null;a.d_=null;a.q=0;a.g8=0;a.cP=0;a.gv=0;a.bt=null;}
var ASQ=null;var ASB=null;var ASC=0;function ND(a,b){if(b>0&&b<3)a.ec=b;if(b==1){a.h=a.T;a.d_=a.ep;a.q=a.gv;a.gv=a.cP;EF(a);}}
function F5(a){return a.ep===null?0:1;}
function IM(a){return a.d_===null?0:1;}
function Bd(a){EF(a);return a.jK;}
function EJ(a){var b;b=a.ep;EF(a);return b;}
function EF(a){var b,c,d,e,f,g,h,$$je;a.jK=a.T;a.T=a.h;a.ep=a.d_;a.cP=a.gv;a.gv=a.q;while(true){b=0;c=a.q>=a.R.data.length?0:Kp(a);a.h=c;a.d_=null;if(a.ec==4){if(c!=92)return;c=a.q;d=a.R.data;c=c>=d.length?0:d[BR(a)];a.h=c;switch(c){case 69:break;default:a.h=92;a.q=a.g8;return;}a.ec=a.te;a.h=a.q>(a.R.data.length-2|0)?0:Kp(a);}a:{c=a.h;if(c!=92){e=a.ec;if(e==1)switch(c){case 36:a.h=(-536870876);break a;case 40:if(a.R.data[a.q]!=63){a.h=(-2147483608);break a;}BR(a);c=a.R.data[a.q];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.h=(-134217688);BR(a);break b;default:J(B3(C(5),EO(a),a.q));}a.h=(-67108824);BR(a);}else{switch(c){case 33:break;case 60:BR(a);c=a.R.data[a.q];e=1;break b;case 61:a.h=(-536870872);BR(a);break b;case 62:a.h=(-33554392);BR(a);break b;default:f=ABq(a);a.h=f;if(f<256){a.fq=f;f=f<<16;a.h=f;a.h=(-1073741784)|f;break b;}f=f&255;a.h=f;a.fq=f;f=f<<16;a.h=f;a.h=(-16777176)|f;break b;}a.h=(-268435416);BR(a);}}if(!e)break;}break a;case 41:a.h=(-536870871);break a;case 42:case 43:case 63:e=a.q;d
=a.R.data;switch(e>=d.length?42:d[e]){case 43:a.h=c|(-2147483648);BR(a);break a;case 63:a.h=c|(-1073741824);BR(a);break a;default:}a.h=c|(-536870912);break a;case 46:a.h=(-536870866);break a;case 91:a.h=(-536870821);ND(a,2);break a;case 93:if(e!=2)break a;a.h=(-536870819);break a;case 94:a.h=(-536870818);break a;case 123:a.d_=AA0(a,c);break a;case 124:a.h=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.h=(-536870874);break a;case 45:a.h=(-536870867);break a;case 91:a.h=(-536870821);break a;case 93:a.h
=(-536870819);break a;case 94:a.h=(-536870818);break a;default:}}else{c=a.q>=(a.R.data.length-2|0)?(-1):Kp(a);c:{a.h=c;switch(c){case -1:J(B3(C(5),EO(a),a.q));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.h
=ZC(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.ec!=1)break a;a.h=(-2147483648)|c;break a;case 65:a.h=(-2147483583);break a;case 66:a.h=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B3(C(5),EO(a),a.q));case 68:case 83:case 87:case 100:case 115:case 119:a.d_=QD(DM(a.R,
a.g8,1),0);a.h=0;break a;case 71:a.h=(-2147483577);break a;case 80:case 112:break c;case 81:a.te=a.ec;a.ec=4;b=1;break a;case 90:a.h=(-2147483558);break a;case 97:a.h=7;break a;case 98:a.h=(-2147483550);break a;case 99:c=a.q;d=a.R.data;if(c>=(d.length-2|0))J(B3(C(5),EO(a),a.q));a.h=d[BR(a)]&31;break a;case 101:a.h=27;break a;case 102:a.h=12;break a;case 110:a.h=10;break a;case 114:a.h=13;break a;case 116:a.h=9;break a;case 117:a.h=Ot(a,4);break a;case 120:a.h=Ot(a,2);break a;case 122:a.h=(-2147483526);break a;default:}break a;}g
=Zm(a);h=0;if(a.h==80)h=1;try{a.d_=QD(g,h);}catch($$e){$$je=ET($$e);if($$je instanceof Ih){J(B3(C(5),EO(a),a.q));}else{throw $$e;}}a.h=0;}}if(b)continue;else break;}}
function Zm(a){var b,c,d,e,f,g;b=new R;Fp(b,10);c=a.q;d=a.R;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=DM(d,BR(a),1);f=new R;T(f);K(K(f,C(276)),b);return S(f);}BR(a);c=0;a:{while(true){g=a.q;d=a.R.data;if(g>=(d.length-2|0))break;c=d[BR(a)];if(c==125)break a;BY(b,c);}}if(c!=125)J(B3(C(5),a.bt,a.q));}if(!b.E)J(B3(C(5),a.bt,a.q));f=S(b);if(H(f)==1){b=new R;T(b);K(K(b,C(276)),f);return S(b);}b:{c:{if(H(f)>3){if(Jq(f,C(276)))break c;if(Jq(f,C(277)))break c;}break b;}f=DT(f,2);}return f;}
function AA0(a,b){var c,d,e,f,g,$$je;c=new R;Fp(c,4);d=(-1);e=2147483647;a:{while(true){f=a.q;g=a.R.data;if(f>=g.length)break a;b=g[BR(a)];if(b==125)break a;if(b==44&&d<0)try{d=IC(GM(c),10);AA5(c,0,W4(c));continue;}catch($$e){$$je=ET($$e);if($$je instanceof CU){break;}else{throw $$e;}}BY(c,b&65535);}J(B3(C(5),a.bt,a.q));}if(b!=125)J(B3(C(5),a.bt,a.q));if(c.E>0)b:{try{e=IC(GM(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=ET($$e);if($$je instanceof CU){}else{throw $$e;}}J(B3(C(5),a.bt,a.q));}else if(d<0)J(B3(C(5),
a.bt,a.q));if((d|e|(e-d|0))<0)J(B3(C(5),a.bt,a.q));b=a.q;g=a.R.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.h=(-2147483525);BR(a);break c;case 63:a.h=(-1073741701);BR(a);break c;default:}a.h=(-536870789);}c=new LQ;c.eb=d;c.d9=e;return c;}
function EO(a){return a.bt;}
function CW(a){return !a.T&&!a.h&&a.q==a.qI&&!F5(a)?1:0;}
function Jc(b){return b<0?0:1;}
function EC(a){return !CW(a)&&!F5(a)&&Jc(a.T)?1:0;}
function M4(a){var b;b=a.T;return b<=56319&&b>=55296?1:0;}
function Tc(a){var b;b=a.T;return b<=57343&&b>=56320?1:0;}
function Rf(b){return b<=56319&&b>=55296?1:0;}
function NK(b){return b<=57343&&b>=56320?1:0;}
function Ot(a,b){var c,d,e,f,$$je;c=new R;Fp(c,b);d=a.R.data.length-2|0;e=0;while(true){f=BF(e,b);if(f>=0)break;if(a.q>=d)break;BY(c,a.R.data[BR(a)]);e=e+1|0;}if(!f)a:{try{b=IC(GM(c),16);}catch($$e){$$je=ET($$e);if($$je instanceof CU){break a;}else{throw $$e;}}return b;}J(B3(C(5),a.bt,a.q));}
function ZC(a){var b,c,d,e,f,g;b=3;c=1;d=a.R.data;e=d.length-2|0;f=SP(d[a.q],8);switch(f){case -1:break;default:if(f>3)b=2;BR(a);a:{while(true){if(c>=b)break a;g=a.q;if(g>=e)break a;g=SP(a.R.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BR(a);c=c+1|0;}}return f;}J(B3(C(5),a.bt,a.q));}
function ABq(a){var b,c,d,e;b=1;c=a.fq;a:while(true){d=a.q;e=a.R.data;if(d>=e.length)J(B3(C(5),a.bt,d));b:{c:{switch(e[d]){case 41:BR(a);return c|256;case 45:if(!b)J(B3(C(5),a.bt,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BR(a);}BR(a);return c;}
function BR(a){var b,c,d,e,f;b=a.q;a.g8=b;if(!(a.fq&4))a.q=b+1|0;else{c=a.R.data.length-2|0;a.q=b+1|0;a:while(true){d=a.q;if(d<c&&PT(a.R.data[d])){a.q=a.q+1|0;continue;}d=a.q;if(d>=c)break;e=a.R.data;if(e[d]!=35)break;a.q=d+1|0;while(true){f=a.q;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.q=f+1|0;}}}return a.g8;}
function AAQ(b){return ASQ.Ck(b);}
function Kp(a){var b,c,d,e;b=a.R.data[BR(a)];if(Cm(b)){c=a.g8+1|0;d=a.R.data;if(c<d.length){e=d[c];if(CJ(e)){BR(a);return D4(b,e);}}}return b;}
function M3(a){return a.cP;}
function HN(){var a=this;BI.call(a);a.wL=null;a.wh=null;a.pD=0;}
function B3(a,b,c){var d=new HN();Ip(d,a,b,c);return d;}
function Ip(a,b,c,d){W(a);a.pD=(-1);a.wL=b;a.wh=c;a.pD=d;}
var Si=F();
function U4(){B.call(this);this.s0=null;}
function AJu(a,b){var c,d;c=a.s0;d=0;while(d<b.length){WZ(c,b[d]);d=d+1|0;}}
var Zh=F(0);
function Sm(){var a=this;B.call(a);a.oW=null;a.oY=null;a.oZ=null;}
function AJd(a,b){a.oW.m(ANG(a.oY,b,a.oZ));}
var Qn=F(Cw);
function ACk(a,b,c,d){var e;e=a.dh;BD(d,e,b-C0(d,e)|0);return a.e.c(b,c,d);}
function AKv(a,b){return 0;}
var Vz=F(Cw);
function ADW(a,b,c,d){return b;}
var Oz=F(Cw);
function ADi(a,b,c,d){if(C0(d,a.dh)!=b)b=(-1);return b;}
function Rt(){Cw.call(this);this.mI=0;}
function ACq(a,b,c,d){var e;e=a.dh;BD(d,e,b-C0(d,e)|0);a.mI=b;return b;}
function AJl(a,b){return 0;}
var E1=F(Cw);
function AL1(a,b,c,d){if(d.ix!=1&&b!=d.r)return (-1);d.h3=1;II(d,0,b);return b;}
function BU(){By.call(this);this.bs=0;}
function C$(a){BJ(a);a.bs=1;}
function AM4(a,b,c,d){var e;if((b+a.bK()|0)>d.r){d.c3=1;return (-1);}e=a.bg(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function ALd(a){return a.bs;}
function AGC(a,b){return 1;}
var AAG=F(BU);
function F2(a){var b=new AAG();AHZ(b,a);return b;}
function AHZ(a,b){Jy(a,b);a.bs=1;a.gR=1;a.bs=0;}
function AKO(a,b,c){return 0;}
function AE3(a,b,c,d){var e,f,g;e=d.r;f=d.cu;while(true){g=BF(b,e);if(g>0)return (-1);if(g<0&&CJ(I(c,b))&&b>f&&Cm(I(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function ADP(a,b,c,d,e){var f,g;f=e.r;g=e.cu;while(true){if(c<b)return (-1);if(c<f&&CJ(I(d,c))&&c>g&&Cm(I(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ACn(a,b){return 0;}
function BO(){var a=this;By.call(a);a.br=null;a.d0=null;a.O=0;}
function AOq(a,b){var c=new BO();E2(c,a,b);return c;}
function E2(a,b,c){BJ(a);a.br=b;a.d0=c;a.O=c.dh;}
function AFH(a,b,c,d){var e,f,g,h;if(a.br===null)return (-1);e=E5(d,a.O);C9(d,a.O,b);f=a.br.j;g=0;while(true){if(g>=f){C9(d,a.O,e);return (-1);}h=(Bp(a.br,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AJf(a,b){a.d0.e=b;}
function AHj(a,b){var c;a:{c=a.br;if(c!==null){c=BM(c);while(true){if(!BN(c))break a;if(!(BP(c)).bE(b))continue;else return 1;}}}return 0;}
function AJM(a,b){return HB(b,a.O)>=0&&E5(b,a.O)==HB(b,a.O)?0:1;}
function ADK(a){var b,c,d,e;a.b0=1;b=a.d0;if(b!==null&&!b.b0)H9(b);a:{b=a.br;if(b!==null){c=b.j;d=0;while(true){if(d>=c)break a;b=Bp(a.br,d);e=b.eT();if(e===null)e=b;else{b.b0=1;E7(a.br,d);Qf(a.br,d,e);}if(!e.b0)e.dW();d=d+1|0;}}}if(a.e!==null)H9(a);}
var H3=F(BO);
function AI1(a,b,c,d){var e,f,g,h;e=C0(d,a.O);BD(d,a.O,b);f=a.br.j;g=0;while(true){if(g>=f){BD(d,a.O,e);return (-1);}h=(Bp(a.br,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AJ8(a,b){return !C0(b,a.O)?0:1;}
var Dn=F(H3);
function AEi(a,b,c,d){var e,f,g;e=C0(d,a.O);BD(d,a.O,b);f=a.br.j;g=0;while(g<f){if((Bp(a.br,g)).c(b,c,d)>=0)return a.e.c(a.d0.mI,c,d);g=g+1|0;}BD(d,a.O,e);return (-1);}
function AJT(a,b){a.e=b;}
var LC=F(Dn);
function AJa(a,b,c,d){var e,f;e=a.br.j;f=0;while(f<e){if((Bp(a.br,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function ALR(a,b){return 0;}
var T3=F(Dn);
function AC6(a,b,c,d){var e,f;e=a.br.j;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bp(a.br,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ALh(a,b){return 0;}
var PW=F(Dn);
function ADH(a,b,c,d){var e,f,g,h;e=a.br.j;f=d.h8?0:d.cu;a:{g=a.e.c(b,c,d);if(g>=0){BD(d,a.O,b);h=0;while(true){if(h>=e)break a;if((Bp(a.br,h)).b7(f,b,c,d)>=0){BD(d,a.O,(-1));return g;}h=h+1|0;}}}return (-1);}
function ANk(a,b){return 0;}
var RS=F(Dn);
function ABZ(a,b,c,d){var e,f;e=a.br.j;BD(d,a.O,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bp(a.br,f)).b7(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AKk(a,b){return 0;}
function FN(){BO.call(this);this.cC=null;}
function AOM(a,b){var c=new FN();XE(c,a,b);return c;}
function XE(a,b,c){BJ(a);a.cC=b;a.d0=c;a.O=c.dh;}
function ACe(a,b,c,d){var e,f;e=E5(d,a.O);C9(d,a.O,b);f=a.cC.c(b,c,d);if(f>=0)return f;C9(d,a.O,e);return (-1);}
function AHD(a,b,c,d){var e;e=a.cC.b3(b,c,d);if(e>=0)C9(d,a.O,e);return e;}
function AKz(a,b,c,d,e){var f;f=a.cC.b7(b,c,d,e);if(f>=0)C9(e,a.O,f);return f;}
function AHf(a,b){return a.cC.bE(b);}
function AJi(a){var b;b=new LW;XE(b,a.cC,a.d0);a.e=b;return b;}
function AMA(a){var b;a.b0=1;b=a.d0;if(b!==null&&!b.b0)H9(b);b=a.cC;if(b!==null&&!b.b0){b=b.eT();if(b!==null){a.cC.b0=1;a.cC=b;}a.cC.dW();}}
var F1=F();
function Q(){var a=this;F1.call(a);a.S=0;a.bZ=0;a.C=null;a.iB=null;a.jd=null;a.F=0;}
var ASR=null;function NA(){NA=Bf(Q);AD$();}
function Bm(a){var b;NA();b=new UX;b.w=Bu(64);a.C=b;}
function AC8(a){return null;}
function ACB(a){return a.C;}
function Zc(a){var b,c,d,e,f;if(!a.bZ)b=Gr(a.C,0)>=2048?0:1;else{a:{c=a.C;b=0;d=c.bd;if(b<d){e=c.w.data;f=(e[0]^(-1))>>>0|0;if(f)b=Hv(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Hv(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AFU(a){return a.F;}
function AK_(a){return a;}
function WQ(a){var b,c;if(a.jd===null){b=a.en();c=new Ud;c.xd=a;c.m_=b;Bm(c);a.jd=c;D3(c,a.bZ);}return a.jd;}
function GK(a){var b,c;if(a.iB===null){b=a.en();c=new Ub;c.wS=a;c.sG=b;c.to=a;Bm(c);a.iB=c;D3(c,a.S);a.iB.F=a.F;}return a.iB;}
function AMv(a){return 0;}
function D3(a,b){var c;c=a.S;if(c^b){a.S=c?0:1;a.bZ=a.bZ?0:1;}if(!a.F)a.F=1;return a;}
function AE8(a){return a.S;}
function I7(b,c){NA();return b.i(c);}
function Hu(b,c){var d,e;NA();if(b.c0()!==null&&c.c0()!==null){b=b.c0();c=c.c0();d=Be(b.w.data.length,c.w.data.length);e=0;a:{while(e<d){if(b.w.data[e]&c.w.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function QD(b,c){var d,e,f;NA();d=0;while(true){AKi();e=ASS.data;if(d>=e.length){f=new Ih;Br(f,C(5));f.xv=C(5);f.xh=b;J(f);}e=e[d].data;if(B0(b,e[0]))break;d=d+1|0;}return AAe(e[1],c);}
function AD$(){var b;b=new Gh;AKi();ASR=b;}
function Xs(){var a=this;Q.call(a);a.kx=0;a.mG=0;a.fH=0;a.j$=0;a.du=0;a.eO=0;a.y=null;a.bm=null;}
function C1(){var a=new Xs();ANa(a);return a;}
function ALV(a,b){var c=new Xs();ADY(c,a,b);return c;}
function ANa(a){Bm(a);a.y=ANl();}
function ADY(a,b,c){Bm(a);a.y=ANl();a.kx=b;a.mG=c;}
function Ch(a,b){a:{if(a.kx){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.du){Le(a.y,GP(b&65535));break a;}Kh(a.y,GP(b&65535));break a;}if(a.mG&&b>128){a.fH=1;b=FU(FR(b));}}}if(!(!Rf(b)&&!NK(b))){if(a.j$)Le(a.C,b-55296|0);else Kh(a.C,b-55296|0);}if(a.du)Le(a.y,b);else Kh(a.y,b);if(!a.F&&KV(b))a.F=1;return a;}
function ABv(a,b){var c,d,e;if(!a.F&&b.F)a.F=1;if(a.j$){if(!b.bZ)Fg(a.C,b.en());else CQ(a.C,b.en());}else if(!b.bZ)Fb(a.C,b.en());else{EU(a.C,b.en());CQ(a.C,b.en());a.bZ=a.bZ?0:1;a.j$=1;}if(!a.eO&&b.c0()!==null){if(a.du){if(!b.S)Fg(a.y,b.c0());else CQ(a.y,b.c0());}else if(!b.S)Fb(a.y,b.c0());else{EU(a.y,b.c0());CQ(a.y,b.c0());a.S=a.S?0:1;a.du=1;}}else{c=a.S;d=a.bm;if(d!==null){if(!c){e=new Nt;e.vk=a;e.tX=c;e.tb=d;e.sY=b;Bm(e);a.bm=e;}else{e=new Nu;e.xE=a;e.qc=c;e.pU=d;e.pi=b;Bm(e);a.bm=e;}}else{if(c&&!a.du&&
KZ(a.y)){d=new Nq;d.wg=a;d.p5=b;Bm(d);a.bm=d;}else if(!c){d=new No;d.jQ=a;d.iX=c;d.nZ=b;Bm(d);a.bm=d;}else{d=new Np;d.kO=a;d.i5=c;d.s3=b;Bm(d);a.bm=d;}a.eO=1;}}return a;}
function BQ(a,b,c){var d,e,f,g,h;if(b>c){d=new BI;W(d);J(d);}a:{b:{if(!a.kx){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Ch(a,b);b=b+1|0;}}if(!a.du)G7(a.y,b,c+1|0);else{d=a.y;c=c+1|0;if(b>c){d=new BS;W(d);J(d);}e=d.bd;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.w.data;h[g]=h[g]&(Ho(d,b)|G0(d,f));}else{h=d.w.data;h[g]=h[g]&Ho(d,b);e=g+1|0;while(e<c){d.w.data[e]=0;e=e+1|0;}if(f&31){h=d.w.data;h[c]=h[c]&G0(d,f);}}Gk(d);}}}}return a;}
function Wj(a,b){var c,d,e;if(!a.F&&b.F)a.F=1;if(b.fH)a.fH=1;c=a.bZ;if(!(c^b.bZ)){if(!c)Fb(a.C,b.C);else CQ(a.C,b.C);}else if(c)Fg(a.C,b.C);else{EU(a.C,b.C);CQ(a.C,b.C);a.bZ=1;}if(!a.eO&&CA(b)!==null){c=a.S;if(!(c^b.S)){if(!c)Fb(a.y,CA(b));else CQ(a.y,CA(b));}else if(c)Fg(a.y,CA(b));else{EU(a.y,CA(b));CQ(a.y,CA(b));a.S=1;}}else{c=a.S;d=a.bm;if(d!==null){if(!c){e=new Ni;e.u5=a;e.r2=c;e.s2=d;e.tB=b;Bm(e);a.bm=e;}else{e=new NW;e.vv=a;e.tw=c;e.ma=d;e.mQ=b;Bm(e);a.bm=e;}}else{if(!a.du&&KZ(a.y)){if(!c){d=new Nr;d.xG
=a;d.o6=b;Bm(d);a.bm=d;}else{d=new Ns;d.vz=a;d.tl=b;Bm(d);a.bm=d;}}else if(!c){d=new Nv;d.sb=a;d.qp=b;d.pX=c;Bm(d);a.bm=d;}else{d=new Nw;d.qK=a;d.q0=b;d.ri=c;Bm(d);a.bm=d;}a.eO=1;}}}
function UK(a,b){var c,d,e;if(!a.F&&b.F)a.F=1;if(b.fH)a.fH=1;c=a.bZ;if(!(c^b.bZ)){if(!c)CQ(a.C,b.C);else Fb(a.C,b.C);}else if(!c)Fg(a.C,b.C);else{EU(a.C,b.C);CQ(a.C,b.C);a.bZ=0;}if(!a.eO&&CA(b)!==null){c=a.S;if(!(c^b.S)){if(!c)CQ(a.y,CA(b));else Fb(a.y,CA(b));}else if(!c)Fg(a.y,CA(b));else{EU(a.y,CA(b));CQ(a.y,CA(b));a.S=0;}}else{c=a.S;d=a.bm;if(d!==null){if(!c){e=new Nk;e.vj=a;e.sf=c;e.m9=d;e.qa=b;Bm(e);a.bm=e;}else{e=new Nl;e.vF=a;e.ry=c;e.l2=d;e.r0=b;Bm(e);a.bm=e;}}else{if(!a.du&&KZ(a.y)){if(!c){d=new Ng;d.vB
=a;d.oy=b;Bm(d);a.bm=d;}else{d=new Nh;d.xA=a;d.oF=b;Bm(d);a.bm=d;}}else if(!c){d=new Nm;d.uG=a;d.tT=b;d.qS=c;Bm(d);a.bm=d;}else{d=new Nf;d.qQ=a;d.rG=b;d.qd=c;Bm(d);a.bm=d;}a.eO=1;}}}
function CF(a,b){var c;c=a.bm;if(c!==null)return a.S^c.i(b);return a.S^C6(a.y,b);}
function CA(a){if(!a.eO)return a.y;return null;}
function AEY(a){return a.C;}
function ALB(a){var b,c;if(a.bm!==null)return a;b=CA(a);c=new Nj;c.uX=a;c.hM=b;Bm(c);return D3(c,a.S);}
function AIs(a){var b,c,d;b=new R;T(b);c=Gr(a.y,0);while(c>=0){Hw(b,FL(c));BY(b,124);c=Gr(a.y,c+1|0);}d=b.E;if(d>0)T4(b,d-1|0);return S(b);}
function AE$(a){return a.fH;}
function Ih(){var a=this;Bo.call(a);a.xv=null;a.xh=null;}
function DC(){By.call(this);this.B=null;}
function CT(a,b,c,d){Jy(a,c);a.B=b;a.gR=d;}
function AM_(a){return a.B;}
function AKA(a,b){return !a.B.bE(b)&&!a.e.bE(b)?0:1;}
function ALW(a,b){return 1;}
function AHV(a){var b;a.b0=1;b=a.e;if(b!==null&&!b.b0){b=b.eT();if(b!==null){a.e.b0=1;a.e=b;}a.e.dW();}b=a.B;if(b!==null){if(!b.b0){b=b.eT();if(b!==null){a.B.b0=1;a.B=b;}a.B.dW();}else if(b instanceof FN&&b.d0.jg)a.B=b.e;}}
function CH(){DC.call(this);this.P=null;}
function AOQ(a,b,c){var d=new CH();Et(d,a,b,c);return d;}
function Et(a,b,c,d){CT(a,b,c,d);a.P=b;}
function AB2(a,b,c,d){var e,f;e=0;a:{while((b+a.P.bK()|0)<=d.r){f=a.P.bg(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.P.bK()|0;e=e+(-1)|0;}return f;}
function EH(){CH.call(this);this.iw=null;}
function ANZ(a,b,c,d){var e=new EH();QM(e,a,b,c,d);return e;}
function QM(a,b,c,d,e){Et(a,c,d,e);a.iw=b;}
function ACQ(a,b,c,d){var e,f,g,h,i;e=a.iw;f=e.eb;g=e.d9;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.P.bK()|0)>d.r)break a;i=a.P.bg(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.P.bK()|0;h=h+(-1)|0;}return i;}if((b+a.P.bK()|0)>d.r){d.c3=1;return (-1);}i=a.P.bg(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Cx=F(DC);
function ACd(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.B.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var D7=F(CH);
function AHI(a,b,c,d){var e;e=a.B.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function ANn(a,b){a.e=b;a.B.I(b);}
var Ue=F(CH);
function AMW(a,b,c,d){while((b+a.P.bK()|0)<=d.r&&a.P.bg(b,c)>0){b=b+a.P.bK()|0;}return a.e.c(b,c,d);}
function AIl(a,b,c,d){var e,f,g;e=a.e.b3(b,c,d);if(e<0)return (-1);f=e-a.P.bK()|0;while(f>=b&&a.P.bg(f,c)>0){g=f-a.P.bK()|0;e=f;f=g;}return e;}
function U(){var a=this;B.call(a);a.kU=null;a.jM=null;}
function AAe(a,b){if(!b&&a.kU===null)a.kU=a.x();else if(b&&a.jM===null)a.jM=D3(a.x(),1);if(b)return a.jM;return a.kU;}
var CU=F(BI);
function LQ(){var a=this;F1.call(a);a.eb=0;a.d9=0;}
function AIw(a){var b,c,d,e,f;b=a.eb;c=a.d9;d=c!=2147483647?J_(c):C(5);e=new R;T(e);BY(e,123);f=Bk(e,b);BY(f,44);BY(K(f,d),125);return S(e);}
var M8=F(By);
function AG0(a,b,c,d){return b;}
function AJe(a,b){return 0;}
function UX(){var a=this;B.call(a);a.w=null;a.bd=0;}
function ANl(){var a=new UX();ADx(a);return a;}
function ADx(a){a.w=Bu(0);}
function Kh(a,b){var c,d;c=b/32|0;if(b>=a.bd){Hy(a,c+1|0);a.bd=b+1|0;}d=a.w.data;d[c]=d[c]|1<<(b%32|0);}
function G7(a,b,c){var d,e,f,g,h;d=BF(b,c);if(d>0){e=new BS;W(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bd){Hy(a,f+1|0);a.bd=c;}if(d==f){g=a.w.data;g[d]=g[d]|G0(a,b)&Ho(a,c);}else{g=a.w.data;g[d]=g[d]|G0(a,b);h=d+1|0;while(h<f){a.w.data[h]=(-1);h=h+1|0;}if(c&31){g=a.w.data;g[f]=g[f]|Ho(a,c);}}}
function G0(a,b){return (-1)<<(b%32|0);}
function Ho(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Le(a,b){var c,d,e,f;c=b/32|0;d=a.w.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bd-1|0))Gk(a);}}
function C6(a,b){var c,d;c=b/32|0;d=a.w.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Gr(a,b){var c,d,e,f;c=a.bd;if(b>=c)return (-1);d=b/32|0;e=a.w.data;f=e[d]>>>(b%32|0)|0;if(f)return Hv(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Hv(e[f])|0;f=f+1|0;}return (-1);}
function Hy(a,b){var c;c=a.w.data.length;if(c>=b)return;c=Ba((b*3|0)/2|0,(c*2|0)+1|0);a.w=H2(a.w,c);}
function Gk(a){var b,c,d;b=(a.bd+31|0)/32|0;a.bd=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Mz(a.w.data[c]);if(d<32)break;c=c+(-1)|0;a.bd=a.bd-32|0;}a.bd=a.bd-d|0;}}
function CQ(a,b){var c,d,e,f;c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]&b.w.data[d];d=d+1|0;}while(true){f=a.w.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bd=Be(a.bd,b.bd);Gk(a);}
function Fg(a,b){var c,d,e;c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]&(b.w.data[d]^(-1));d=d+1|0;}Gk(a);}
function Fb(a,b){var c,d,e;c=Ba(a.bd,b.bd);a.bd=c;Hy(a,(c+31|0)/32|0);c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]|b.w.data[d];d=d+1|0;}}
function EU(a,b){var c,d,e;c=Ba(a.bd,b.bd);a.bd=c;Hy(a,(c+31|0)/32|0);c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]^b.w.data[d];d=d+1|0;}Gk(a);}
function KZ(a){return a.bd?0:1;}
function LI(){var a=this;BO.call(a);a.oK=null;a.uW=0;}
function O_(){var a=this;BO.call(a);a.lf=null;a.kQ=null;}
function ZN(a,b){var c=new O_();ABl(c,a,b);return c;}
function ABl(a,b,c){BJ(a);a.lf=b;a.kQ=c;}
function ACL(a,b,c,d){var e,f,g,h,i;e=a.lf.c(b,c,d);if(e<0)a:{f=a.kQ;g=d.cu;e=d.r;h=b+1|0;e=BF(h,e);if(e>0){d.c3=1;e=(-1);}else{i=I(c,b);if(!f.oK.i(i))e=(-1);else{if(Cm(i)){if(e<0&&CJ(I(c,h))){e=(-1);break a;}}else if(CJ(i)&&b>g&&Cm(I(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AIZ(a,b){a.e=b;a.kQ.e=b;a.lf.I(b);}
function ADo(a,b){return 1;}
function AC7(a,b){return 1;}
function Dc(){var a=this;BO.call(a);a.dk=null;a.wa=0;}
function AGW(a){var b=new Dc();Ss(b,a);return b;}
function Ss(a,b){BJ(a);a.dk=b.id();a.wa=b.S;}
function AEP(a,b,c,d){var e,f,g,h;e=d.r;if(b<e){f=b+1|0;g=I(c,b);if(a.i(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=I(c,f);if(GC(g,f)&&a.i(D4(g,f)))return a.e.c(b,c,d);}}return (-1);}
function AFm(a,b){return a.dk.i(b);}
function ACH(a,b){if(b instanceof Du)return I7(a.dk,b.fd);if(b instanceof D0)return I7(a.dk,b.cX);if(b instanceof Dc)return Hu(a.dk,b.dk);if(!(b instanceof DR))return 1;return Hu(a.dk,b.eC);}
function AGP(a){return a.dk;}
function AK1(a,b){a.e=b;}
function AE0(a,b){return 1;}
var Ie=F(Dc);
function AGD(a,b){return a.dk.i(FU(FR(b)));}
function Xj(){var a=this;BU.call(a);a.pw=null;a.vT=0;}
function AFW(a){var b=new Xj();AIG(b,a);return b;}
function AIG(a,b){C$(a);a.pw=b.id();a.vT=b.S;}
function AG1(a,b,c){return !a.pw.i(Ey(D6(I(c,b))))?(-1):1;}
function DR(){var a=this;BU.call(a);a.eC=null;a.wt=0;}
function ALs(a){var b=new DR();AJA(b,a);return b;}
function AJA(a,b){C$(a);a.eC=b.id();a.wt=b.S;}
function Ll(a,b,c){return !a.eC.i(I(c,b))?(-1):1;}
function AJh(a,b){if(b instanceof D0)return I7(a.eC,b.cX);if(b instanceof DR)return Hu(a.eC,b.eC);if(!(b instanceof Dc)){if(!(b instanceof Du))return 1;return 0;}return Hu(a.eC,b.dk);}
function NB(){var a=this;BO.call(a);a.f1=null;a.k6=null;a.iu=0;}
function ALG(a,b){var c=new NB();ACg(c,a,b);return c;}
function ACg(a,b,c){BJ(a);a.f1=b;a.iu=c;}
function AHH(a,b){a.e=b;}
function Pl(a){if(a.k6===null)a.k6=GA(a.f1);return a.k6;}
function ABQ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.r;f=Bu(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=I(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?Fw([k,l]):Fw([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.iu;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.f1.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=I(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=I(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.iu==3){k=f[0];m=a.f1.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.iu==2){b=f[0];m=a.f1.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function ADf(a,b){return b instanceof NB&&!B0(Pl(b),Pl(a))?0:1;}
function ALE(a,b){return 1;}
function D0(){BU.call(this);this.cX=0;}
function XK(a){var b=new D0();AJC(b,a);return b;}
function AJC(a,b){C$(a);a.cX=b;}
function AGK(a){return 1;}
function AFS(a,b,c){return a.cX!=I(c,b)?(-1):1;}
function AEN(a,b,c,d){var e,f,g;if(!(c instanceof Bw))return GT(a,b,c,d);e=d.r;while(true){if(b>=e)return (-1);f=Ht(c,a.cX,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AGR(a,b,c,d,e){var f;if(!(d instanceof Bw))return G2(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=GF(d,a.cX,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ALx(a,b){if(b instanceof D0)return b.cX!=a.cX?0:1;if(!(b instanceof DR)){if(b instanceof Dc)return b.i(a.cX);if(!(b instanceof Du))return 1;return 0;}return Ll(b,0,UY(a.cX))<=0?0:1;}
function AA8(){BU.call(this);this.lP=0;}
function AJY(a){var b=new AA8();AIg(b,a);return b;}
function AIg(a,b){C$(a);a.lP=Ey(D6(b));}
function ABK(a,b,c){return a.lP!=Ey(D6(I(c,b)))?(-1):1;}
function Wm(){var a=this;BU.call(a);a.tH=0;a.m6=0;}
function ADE(a){var b=new Wm();AKg(b,a);return b;}
function AKg(a,b){C$(a);a.tH=b;a.m6=GP(b);}
function AB8(a,b,c){return a.tH!=I(c,b)&&a.m6!=I(c,b)?(-1):1;}
function EM(){var a=this;BO.call(a);a.gH=0;a.jv=null;a.iZ=null;a.iT=0;}
function APx(a,b){var c=new EM();MV(c,a,b);return c;}
function MV(a,b,c){BJ(a);a.gH=1;a.iZ=b;a.iT=c;}
function AMz(a,b){a.e=b;}
function AI0(a,b,c,d){var e,f,g,h,i,j,k,l;e=Bu(4);f=d.r;if(b>=f)return (-1);g=Jj(a,b,c,f);h=b+a.gH|0;i=AAQ(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;C7(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Jj(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AAQ(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.gH|0;if(h>=f){b=k;break a;}g=Jj(a,h,c,f);b=k;}}}if(b!=a.iT)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.iZ.data[g])break;g=g+1|0;}return (-1);}
function UJ(a){var b,c;if(a.jv===null){b=new R;T(b);c=0;while(c<a.iT){Hw(b,FL(a.iZ.data[c]));c=c+1|0;}a.jv=S(b);}return a.jv;}
function Jj(a,b,c,d){var e,f,g;a.gH=1;if(b>=(d-1|0))e=I(c,b);else{d=b+1|0;e=I(c,b);f=I(c,d);if(GC(e,f)){g=B1(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Cm(g[0])&&CJ(g[1])?D4(g[0],g[1]):g[0];a.gH=2;}}return e;}
function AG2(a,b){return b instanceof EM&&!B0(UJ(b),UJ(a))?0:1;}
function AJU(a,b){return 1;}
var Vi=F(EM);
var R4=F(EM);
var V$=F(Cx);
function AD3(a,b,c,d){var e;while(true){e=a.B.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var Oq=F(Cx);
function AH_(a,b,c,d){var e;e=a.B.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.B.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var Ff=F(Cx);
function AKZ(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.B.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function AL6(a,b){a.e=b;a.B.I(b);}
var N5=F(Ff);
function AGN(a,b,c,d){var e;e=a.B.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function AIA(a,b){a.e=b;}
function EL(){var a=this;Cx.call(a);a.fm=null;a.c$=0;}
function AST(a,b,c,d,e){var f=new EL();Ic(f,a,b,c,d,e);return f;}
function Ic(a,b,c,d,e,f){CT(a,c,d,e);a.fm=b;a.c$=f;}
function ANi(a,b,c,d){var e,f;e=LM(d,a.c$);if(!a.B.A(d))return a.e.c(b,c,d);if(e>=a.fm.d9)return a.e.c(b,c,d);f=a.c$;e=e+1|0;DN(d,f,e);f=a.B.c(b,c,d);if(f>=0){DN(d,a.c$,0);return f;}f=a.c$;e=e+(-1)|0;DN(d,f,e);if(e>=a.fm.eb)return a.e.c(b,c,d);DN(d,a.c$,0);return (-1);}
var L1=F(EL);
function AGf(a,b,c,d){var e,f,g;e=0;f=a.fm.d9;a:{while(true){g=a.B.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fm.eb)return (-1);return a.e.c(b,c,d);}
var Qg=F(Cx);
function AMJ(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.B.c(b,c,d);}
var Pk=F(Ff);
function ADp(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.B.c(b,c,d);return e;}
var SW=F(EL);
function ACv(a,b,c,d){var e,f,g;e=LM(d,a.c$);if(!a.B.A(d))return a.e.c(b,c,d);f=a.fm;if(e>=f.d9){DN(d,a.c$,0);return a.e.c(b,c,d);}if(e<f.eb){DN(d,a.c$,e+1|0);g=a.B.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){DN(d,a.c$,0);return g;}DN(d,a.c$,e+1|0);g=a.B.c(b,c,d);}return g;}
var Qh=F(DC);
function AM7(a,b,c,d){var e;e=d.r;if(e>b)return a.e.b7(b,e,c,d);return a.e.c(b,c,d);}
function ALa(a,b,c,d){var e;e=d.r;if(a.e.b7(b,e,c,d)>=0)return b;return (-1);}
function Ne(){DC.call(this);this.jJ=null;}
function AJj(a,b,c,d){var e,f;e=d.r;f=SY(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.b7(b,e,c,d);return a.e.c(b,c,d);}
function ABV(a,b,c,d){var e,f,g,h;e=d.r;f=a.e.b3(b,c,d);if(f<0)return (-1);g=SY(a,f,e,c);if(g>=0)e=g;g=Ba(f,a.e.b7(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.jJ.gP(I(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function SY(a,b,c,d){while(true){if(b>=c)return (-1);if(a.jJ.gP(I(d,b)))break;b=b+1|0;}return b;}
var El=F();
var ASU=null;var ASV=null;function N7(b){var c;if(!(b&1)){c=ASV;if(c!==null)return c;c=new Tj;ASV=c;return c;}c=ASU;if(c!==null)return c;c=new Ti;ASU=c;return c;}
var V_=F(CH);
function ACw(a,b,c,d){var e;a:{while(true){if((b+a.P.bK()|0)>d.r)break a;e=a.P.bg(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var T$=F(D7);
function AH8(a,b,c,d){var e;if((b+a.P.bK()|0)<=d.r){e=a.P.bg(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var NT=F(EH);
function AKB(a,b,c,d){var e,f,g,h,i;e=a.iw;f=e.eb;g=e.d9;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.P.bK()|0)>d.r)break a;i=a.P.bg(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.P.bK()|0)>d.r){d.c3=1;return (-1);}i=a.P.bg(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Pe=F(CH);
function AJc(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.P.bK()|0)<=d.r){e=a.P.bg(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Sg=F(D7);
function ACF(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.B.c(b,c,d);}
var PX=F(EH);
function AKQ(a,b,c,d){var e,f,g,h,i,j;e=a.iw;f=e.eb;g=e.d9;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.P.bK()|0)<=d.r){i=a.P.bg(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.P.bK()|0)>d.r){d.c3=1;return (-1);}j=a.P.bg(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Jh=F(By);
function AHh(a,b,c,d){if(b&&!(d.eP&&b==d.cu))return (-1);return a.e.c(b,c,d);}
function AGr(a,b){return 0;}
function XT(){By.call(this);this.td=0;}
function ALr(a){var b=new XT();AGG(b,a);return b;}
function AGG(a,b){BJ(a);a.td=b;}
function AC4(a,b,c,d){var e,f,g;e=b<d.r?I(c,b):32;f=!b?32:I(c,b-1|0);g=d.h8?0:d.cu;return (e!=32&&!Pp(a,e,b,g,c)?0:1)^(f!=32&&!Pp(a,f,b-1|0,g,c)?0:1)^a.td?(-1):a.e.c(b,c,d);}
function ADe(a,b){return 0;}
function Pp(a,b,c,d,e){var f;if(!IA(b)&&b!=95){a:{if(Ce(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=I(e,c);if(IA(f))return 0;if(Ce(f)!=6)return 1;}}return 1;}return 0;}
var M_=F(By);
function AGF(a,b,c,d){if(b!=d.gW)return (-1);return a.e.c(b,c,d);}
function ANc(a,b){return 0;}
function U2(){By.call(this);this.fs=0;}
function AO3(a){var b=new U2();AAH(b,a);return b;}
function AAH(a,b){BJ(a);a.fs=b;}
function AJE(a,b,c,d){var e,f,g;e=!d.eP?H(c):d.r;if(b>=e){BD(d,a.fs,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&I(c,b)==13&&I(c,b+1|0)==10){BD(d,a.fs,0);return a.e.c(b,c,d);}a:{if(f==1){g=I(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BD(d,a.fs,0);return a.e.c(b,c,d);}
function ADS(a,b){var c;c=!C0(b,a.fs)?0:1;BD(b,a.fs,(-1));return c;}
var UB=F(By);
function AIY(a,b,c,d){if(b<(d.h8?H(c):d.r))return (-1);d.c3=1;d.w1=1;return a.e.c(b,c,d);}
function ABI(a,b){return 0;}
function Ma(){By.call(this);this.qh=null;}
function ADI(a,b,c,d){a:{if(b!=d.r){if(!b)break a;if(d.eP&&b==d.cu)break a;if(a.qh.rB(I(c,b-1|0),I(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function AFy(a,b){return 0;}
var AAX=F(BO);
function APk(){var a=new AAX();AIN(a);return a;}
function AIN(a){BJ(a);}
function AMO(a,b,c,d){var e,f,g,h;e=d.r;f=b+1|0;if(f>e){d.c3=1;return (-1);}g=I(c,b);if(Cm(g)){h=b+2|0;if(h<=e&&GC(g,I(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function ADh(a,b){a.e=b;}
function AIH(a){return (-2147483602);}
function ADg(a,b){return 1;}
function Xq(){BO.call(this);this.kf=null;}
function AOV(a){var b=new Xq();ADQ(b,a);return b;}
function ADQ(a,b){BJ(a);a.kf=b;}
function AIR(a,b,c,d){var e,f,g,h;e=d.r;f=b+1|0;if(f>e){d.c3=1;return (-1);}g=I(c,b);if(Cm(g)){b=b+2|0;if(b<=e){h=I(c,f);if(GC(g,h))return a.kf.gP(D4(g,h))?(-1):a.e.c(b,c,d);}}return a.kf.gP(g)?(-1):a.e.c(f,c,d);}
function AKs(a,b){a.e=b;}
function ABE(a){return (-2147483602);}
function AM3(a,b){return 1;}
function AAO(){By.call(this);this.gA=0;}
function AOw(a){var b=new AAO();AFv(b,a);return b;}
function AFv(a,b){BJ(a);a.gA=b;}
function AG4(a,b,c,d){var e;e=!d.eP?H(c):d.r;if(b>=e){BD(d,a.gA,0);return a.e.c(b,c,d);}if((e-b|0)==1&&I(c,b)==10){BD(d,a.gA,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AFu(a,b){var c;c=!C0(b,a.gA)?0:1;BD(b,a.gA,(-1));return c;}
function Zf(){By.call(this);this.gF=0;}
function AOd(a){var b=new Zf();AFX(b,a);return b;}
function AFX(a,b){BJ(a);a.gF=b;}
function AIX(a,b,c,d){if((!d.eP?H(c)-b|0:d.r-b|0)<=0){BD(d,a.gF,0);return a.e.c(b,c,d);}if(I(c,b)!=10)return (-1);BD(d,a.gF,1);return a.e.c(b+1|0,c,d);}
function AFi(a,b){var c;c=!C0(b,a.gF)?0:1;BD(b,a.gF,(-1));return c;}
function Wi(){By.call(this);this.e2=0;}
function ANE(a){var b=new Wi();ANj(b,a);return b;}
function ANj(a,b){BJ(a);a.e2=b;}
function AGh(a,b,c,d){var e,f,g;e=!d.eP?H(c)-b|0:d.r-b|0;if(!e){BD(d,a.e2,0);return a.e.c(b,c,d);}if(e<2){f=I(c,b);g=97;}else{f=I(c,b);g=I(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BD(d,a.e2,0);return a.e.c(b,c,d);case 13:if(g!=10){BD(d,a.e2,0);return a.e.c(b,c,d);}BD(d,a.e2,0);return a.e.c(b,c,d);default:}return (-1);}
function ADV(a,b){var c;c=!C0(b,a.e2)?0:1;BD(b,a.e2,(-1));return c;}
function Gi(){var a=this;BO.call(a);a.mz=0;a.fW=0;}
function APs(a,b){var c=new Gi();NJ(c,a,b);return c;}
function NJ(a,b,c){BJ(a);a.mz=b;a.fW=c;}
function ACA(a,b,c,d){var e,f,g,h;e=Fy(a,d);if(e!==null&&(b+H(e)|0)<=d.r){f=0;while(true){if(f>=H(e)){BD(d,a.fW,H(e));return a.e.c(b+H(e)|0,c,d);}g=I(e,f);h=b+f|0;if(g!=I(c,h)&&GP(I(e,f))!=I(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AJR(a,b){a.e=b;}
function Fy(a,b){var c,d;c=a.mz;d=E5(b,c);c=HB(b,c);return (c|d|(c-d|0))>=0&&c<=H(b.kj)?B9(b.kj,d,c):null;}
function AJ$(a,b){var c;c=!C0(b,a.fW)?0:1;BD(b,a.fW,(-1));return c;}
var AAT=F(Gi);
function ANJ(a,b){var c=new AAT();ALY(c,a,b);return c;}
function ALY(a,b,c){NJ(a,b,c);}
function AD1(a,b,c,d){var e,f;e=Fy(a,d);if(e!==null&&(b+H(e)|0)<=d.r){f=!Sr(c,e,b)?(-1):H(e);if(f<0)return (-1);BD(d,a.fW,f);return a.e.c(b+f|0,c,d);}return (-1);}
function ALP(a,b,c,d){var e,f;e=Fy(a,d);f=d.cu;if(e!==null&&(b+H(e)|0)<=f){while(true){if(b>f)return (-1);b=Os(c,e,b);if(b<0)return (-1);if(a.e.c(b+H(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ACl(a,b,c,d,e){var f,g;f=Fy(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=OE(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+H(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AH2(a,b){return 1;}
var Yw=F(Gi);
function AOe(a,b){var c=new Yw();AFr(c,a,b);return c;}
function AFr(a,b,c){NJ(a,b,c);}
function AHx(a,b,c,d){var e,f;e=Fy(a,d);if(e!==null&&(b+H(e)|0)<=d.r){f=0;while(true){if(f>=H(e)){BD(d,a.fW,H(e));return a.e.c(b+H(e)|0,c,d);}if(Ey(D6(I(e,f)))!=Ey(D6(I(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var M7=F(FD);
function AE_(a,b,c,d,e){LT(a,b,c,d,e);return a;}
function AC9(a,b,c,d){U$(a,b,c,d);return a;}
function ADw(a,b){IH(a,b);}
function ALc(a,b,c){Vn(a,b,c);return a;}
function Qj(){var a=this;BU.call(a);a.cc=null;a.jy=null;a.kq=null;}
function AEg(a,b,c){return !Jg(a,c,b)?(-1):a.bs;}
function AC0(a,b,c,d){var e,f,g;e=d.r;while(true){if(b>e)return (-1);f=I(a.cc,a.bs-1|0);a:{while(true){g=a.bs;if(b>(e-g|0)){b=(-1);break a;}g=I(c,(b+g|0)-1|0);if(g==f&&Jg(a,c,b))break;b=b+Rl(a.jy,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bs|0,c,d)>=0)break;b=b+1|0;}return b;}
function AFx(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=I(a.cc,0);g=(H(d)-c|0)-a.bs|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=I(d,c);if(g==f&&Jg(a,d,c))break;c=c-Rl(a.kq,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bs|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AF3(a,b){var c;if(b instanceof D0)return b.cX!=I(a.cc,0)?0:1;if(b instanceof DR)return Ll(b,0,B9(a.cc,0,1))<=0?0:1;if(!(b instanceof Dc)){if(!(b instanceof Du))return 1;return H(a.cc)>1&&b.fd==D4(I(a.cc,0),I(a.cc,1))?1:0;}a:{b:{b=b;if(!b.i(I(a.cc,0))){if(H(a.cc)<=1)break b;if(!b.i(D4(I(a.cc,0),I(a.cc,1))))break b;}c=1;break a;}c=0;}return c;}
function Jg(a,b,c){var d;d=0;while(d<a.bs){if(I(b,d+c|0)!=I(a.cc,d))return 0;d=d+1|0;}return 1;}
function Wh(){BU.call(this);this.h_=null;}
function APw(a){var b=new Wh();ALy(b,a);return b;}
function ALy(a,b){var c,d,e;C$(a);c=new R;T(c);d=0;while(true){e=BF(d,b.E);if(e>=0){a.h_=S(c);a.bs=c.E;return;}if(d<0)break;if(e>=0)break;BY(c,Ey(D6(b.J.data[d])));d=d+1|0;}b=new BS;W(b);J(b);}
function AHF(a,b,c){var d;d=0;while(true){if(d>=H(a.h_))return H(a.h_);if(I(a.h_,d)!=Ey(D6(I(c,b+d|0))))break;d=d+1|0;}return (-1);}
function L6(){BU.call(this);this.gx=null;}
function AKE(a,b,c){var d,e,f;d=0;while(true){if(d>=H(a.gx))return H(a.gx);e=I(a.gx,d);f=b+d|0;if(e!=I(c,f)&&GP(I(a.gx,d))!=I(c,f))break;d=d+1|0;}return (-1);}
var Gh=F();
var ASW=null;var ASX=null;var ASS=null;function AKi(){AKi=Bf(Gh);AEB();}
function AEB(){ASW=AO_();ASX=AOp();ASS=G($rt_arraycls(B),[G(B,[C(278),APt()]),G(B,[C(279),ANB()]),G(B,[C(280),AO8()]),G(B,[C(281),APf()]),G(B,[C(282),ASX]),G(B,[C(283),AOB()]),G(B,[C(284),AOm()]),G(B,[C(285),ANK()]),G(B,[C(286),ANI()]),G(B,[C(287),ANO()]),G(B,[C(288),AN1()]),G(B,[C(289),ANM()]),G(B,[C(290),AOP()]),G(B,[C(291),ANx()]),G(B,[C(292),APb()]),G(B,[C(293),AN0()]),G(B,[C(294),AOz()]),G(B,[C(295),ANY()]),G(B,[C(296),AOA()]),G(B,[C(297),ANQ()]),G(B,[C(298),APj()]),G(B,[C(299),ANS()]),G(B,[C(300),AOF()]),
G(B,[C(301),AO7()]),G(B,[C(302),AO4()]),G(B,[C(303),APg()]),G(B,[C(304),ANP()]),G(B,[C(305),AOU()]),G(B,[C(306),ASW]),G(B,[C(307),AOJ()]),G(B,[C(308),ANL()]),G(B,[C(309),ASW]),G(B,[C(310),ANt()]),G(B,[C(311),ASX]),G(B,[C(312),AN8()]),G(B,[C(313),L(0,127)]),G(B,[C(314),L(128,255)]),G(B,[C(315),L(256,383)]),G(B,[C(316),L(384,591)]),G(B,[C(317),L(592,687)]),G(B,[C(318),L(688,767)]),G(B,[C(319),L(768,879)]),G(B,[C(320),L(880,1023)]),G(B,[C(321),L(1024,1279)]),G(B,[C(322),L(1280,1327)]),G(B,[C(323),L(1328,1423)]),
G(B,[C(324),L(1424,1535)]),G(B,[C(325),L(1536,1791)]),G(B,[C(326),L(1792,1871)]),G(B,[C(327),L(1872,1919)]),G(B,[C(328),L(1920,1983)]),G(B,[C(329),L(2304,2431)]),G(B,[C(330),L(2432,2559)]),G(B,[C(331),L(2560,2687)]),G(B,[C(332),L(2688,2815)]),G(B,[C(333),L(2816,2943)]),G(B,[C(334),L(2944,3071)]),G(B,[C(335),L(3072,3199)]),G(B,[C(336),L(3200,3327)]),G(B,[C(337),L(3328,3455)]),G(B,[C(338),L(3456,3583)]),G(B,[C(339),L(3584,3711)]),G(B,[C(340),L(3712,3839)]),G(B,[C(341),L(3840,4095)]),G(B,[C(342),L(4096,4255)]),
G(B,[C(343),L(4256,4351)]),G(B,[C(344),L(4352,4607)]),G(B,[C(345),L(4608,4991)]),G(B,[C(346),L(4992,5023)]),G(B,[C(347),L(5024,5119)]),G(B,[C(348),L(5120,5759)]),G(B,[C(349),L(5760,5791)]),G(B,[C(350),L(5792,5887)]),G(B,[C(351),L(5888,5919)]),G(B,[C(352),L(5920,5951)]),G(B,[C(353),L(5952,5983)]),G(B,[C(354),L(5984,6015)]),G(B,[C(355),L(6016,6143)]),G(B,[C(356),L(6144,6319)]),G(B,[C(357),L(6400,6479)]),G(B,[C(358),L(6480,6527)]),G(B,[C(359),L(6528,6623)]),G(B,[C(360),L(6624,6655)]),G(B,[C(361),L(6656,6687)]),
G(B,[C(362),L(7424,7551)]),G(B,[C(363),L(7552,7615)]),G(B,[C(364),L(7616,7679)]),G(B,[C(365),L(7680,7935)]),G(B,[C(366),L(7936,8191)]),G(B,[C(367),L(8192,8303)]),G(B,[C(368),L(8304,8351)]),G(B,[C(369),L(8352,8399)]),G(B,[C(370),L(8400,8447)]),G(B,[C(371),L(8448,8527)]),G(B,[C(372),L(8528,8591)]),G(B,[C(373),L(8592,8703)]),G(B,[C(374),L(8704,8959)]),G(B,[C(375),L(8960,9215)]),G(B,[C(376),L(9216,9279)]),G(B,[C(377),L(9280,9311)]),G(B,[C(378),L(9312,9471)]),G(B,[C(379),L(9472,9599)]),G(B,[C(380),L(9600,9631)]),
G(B,[C(381),L(9632,9727)]),G(B,[C(382),L(9728,9983)]),G(B,[C(383),L(9984,10175)]),G(B,[C(384),L(10176,10223)]),G(B,[C(385),L(10224,10239)]),G(B,[C(386),L(10240,10495)]),G(B,[C(387),L(10496,10623)]),G(B,[C(388),L(10624,10751)]),G(B,[C(389),L(10752,11007)]),G(B,[C(390),L(11008,11263)]),G(B,[C(391),L(11264,11359)]),G(B,[C(392),L(11392,11519)]),G(B,[C(393),L(11520,11567)]),G(B,[C(394),L(11568,11647)]),G(B,[C(395),L(11648,11743)]),G(B,[C(396),L(11776,11903)]),G(B,[C(397),L(11904,12031)]),G(B,[C(398),L(12032,12255)]),
G(B,[C(399),L(12272,12287)]),G(B,[C(400),L(12288,12351)]),G(B,[C(401),L(12352,12447)]),G(B,[C(402),L(12448,12543)]),G(B,[C(403),L(12544,12591)]),G(B,[C(404),L(12592,12687)]),G(B,[C(405),L(12688,12703)]),G(B,[C(406),L(12704,12735)]),G(B,[C(407),L(12736,12783)]),G(B,[C(408),L(12784,12799)]),G(B,[C(409),L(12800,13055)]),G(B,[C(410),L(13056,13311)]),G(B,[C(411),L(13312,19893)]),G(B,[C(412),L(19904,19967)]),G(B,[C(413),L(19968,40959)]),G(B,[C(414),L(40960,42127)]),G(B,[C(415),L(42128,42191)]),G(B,[C(416),L(42752,
42783)]),G(B,[C(417),L(43008,43055)]),G(B,[C(418),L(44032,55203)]),G(B,[C(419),L(55296,56191)]),G(B,[C(420),L(56192,56319)]),G(B,[C(421),L(56320,57343)]),G(B,[C(422),L(57344,63743)]),G(B,[C(423),L(63744,64255)]),G(B,[C(424),L(64256,64335)]),G(B,[C(425),L(64336,65023)]),G(B,[C(426),L(65024,65039)]),G(B,[C(427),L(65040,65055)]),G(B,[C(428),L(65056,65071)]),G(B,[C(429),L(65072,65103)]),G(B,[C(430),L(65104,65135)]),G(B,[C(431),L(65136,65279)]),G(B,[C(432),L(65280,65519)]),G(B,[C(433),L(0,1114111)]),G(B,[C(434),
ANN()]),G(B,[C(435),BE(0,1)]),G(B,[C(436),HO(62,1)]),G(B,[C(437),BE(1,1)]),G(B,[C(438),BE(2,1)]),G(B,[C(439),BE(3,0)]),G(B,[C(440),BE(4,0)]),G(B,[C(441),BE(5,1)]),G(B,[C(442),HO(448,1)]),G(B,[C(443),BE(6,1)]),G(B,[C(444),BE(7,0)]),G(B,[C(445),BE(8,1)]),G(B,[C(446),HO(3584,1)]),G(B,[C(447),BE(9,1)]),G(B,[C(448),BE(10,1)]),G(B,[C(449),BE(11,1)]),G(B,[C(450),HO(28672,0)]),G(B,[C(451),BE(12,0)]),G(B,[C(452),BE(13,0)]),G(B,[C(453),BE(14,0)]),G(B,[C(454),AOi(983040,1,1)]),G(B,[C(455),BE(15,0)]),G(B,[C(456),BE(16,
1)]),G(B,[C(457),BE(18,1)]),G(B,[C(458),AOt(19,0,1)]),G(B,[C(459),HO(1643118592,1)]),G(B,[C(460),BE(20,0)]),G(B,[C(461),BE(21,0)]),G(B,[C(462),BE(22,0)]),G(B,[C(463),BE(23,0)]),G(B,[C(464),BE(24,1)]),G(B,[C(465),HO(2113929216,1)]),G(B,[C(466),BE(25,1)]),G(B,[C(467),BE(26,0)]),G(B,[C(468),BE(27,0)]),G(B,[C(469),BE(28,1)]),G(B,[C(470),BE(29,0)]),G(B,[C(471),BE(30,0)])]);}
function Lu(){BU.call(this);this.pQ=0;}
function AKJ(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.pQ!=FU(FR(D4(e,d)))?(-1):2;}
function JN(){BO.call(this);this.fF=0;}
function AIL(a){var b=new JN();ADt(b,a);return b;}
function ADt(a,b){BJ(a);a.fF=b;}
function AI_(a,b){a.e=b;}
function ADT(a,b,c,d){var e,f;e=b+1|0;if(e>d.r){d.c3=1;return (-1);}f=I(c,b);if(b>d.cu&&Cm(I(c,b-1|0)))return (-1);if(a.fF!=f)return (-1);return a.e.c(e,c,d);}
function AF0(a,b,c,d){var e,f,g,h;if(!(c instanceof Bw))return GT(a,b,c,d);e=d.cu;f=d.r;while(true){if(b>=f)return (-1);g=Ht(c,a.fF,b);if(g<0)return (-1);if(g>e&&Cm(I(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AEm(a,b,c,d,e){var f,g;if(!(d instanceof Bw))return G2(a,b,c,d,e);f=e.cu;a:{while(true){if(c<b)return (-1);g=GF(d,a.fF,c);if(g<0)break a;if(g<b)break a;if(g>f&&Cm(I(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ACj(a,b){if(b instanceof D0)return 0;if(b instanceof DR)return 0;if(b instanceof Dc)return 0;if(b instanceof Du)return 0;if(b instanceof J2)return 0;if(!(b instanceof JN))return 1;return b.fF!=a.fF?0:1;}
function ALk(a,b){return 1;}
function J2(){BO.call(this);this.fk=0;}
function AGl(a){var b=new J2();AIS(b,a);return b;}
function AIS(a,b){BJ(a);a.fk=b;}
function ADv(a,b){a.e=b;}
function AB0(a,b,c,d){var e,f,g,h;e=d.r;f=b+1|0;g=BF(f,e);if(g>0){d.c3=1;return (-1);}h=I(c,b);if(g<0&&CJ(I(c,f)))return (-1);if(a.fk!=h)return (-1);return a.e.c(f,c,d);}
function AJq(a,b,c,d){var e,f;if(!(c instanceof Bw))return GT(a,b,c,d);e=d.r;while(true){if(b>=e)return (-1);f=Ht(c,a.fk,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CJ(I(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function AKC(a,b,c,d,e){var f,g;if(!(d instanceof Bw))return G2(a,b,c,d,e);f=e.r;a:{while(true){if(c<b)return (-1);g=GF(d,a.fk,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CJ(I(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AEh(a,b){if(b instanceof D0)return 0;if(b instanceof DR)return 0;if(b instanceof Dc)return 0;if(b instanceof Du)return 0;if(b instanceof JN)return 0;if(!(b instanceof J2))return 1;return b.fk!=a.fk?0:1;}
function AJy(a,b){return 1;}
function Du(){var a=this;BU.call(a);a.iM=0;a.hG=0;a.fd=0;}
function AJ_(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.iM==e&&a.hG==d?2:(-1);}
function AIt(a,b,c,d){var e,f;if(!(c instanceof Bw))return GT(a,b,c,d);e=d.r;while(b<e){b=Ht(c,a.iM,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=I(c,b);if(a.hG==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function ADu(a,b,c,d,e){var f;if(!(d instanceof Bw))return G2(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=GF(d,a.hG,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.iM==I(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AJ0(a,b){if(b instanceof Du)return b.fd!=a.fd?0:1;if(b instanceof Dc)return b.i(a.fd);if(b instanceof D0)return 0;if(!(b instanceof DR))return 1;return 0;}
var Ti=F(El);
function ADF(a,b){return b!=10?0:1;}
function AJ6(a,b,c){return b!=10?0:1;}
var Tj=F(El);
function AKR(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AMq(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function Z4(){var a=this;B.call(a);a.lE=null;a.i4=null;a.gc=0;a.uk=0;}
function AIF(a){var b=new Z4();AGE(b,a);return b;}
function AGE(a,b){var c,d;while(true){c=a.gc;if(b<c)break;a.gc=c<<1|1;}d=c<<1|1;a.gc=d;d=d+1|0;a.lE=Bu(d);a.i4=Bu(d);a.uk=b;}
function P1(a,b,c){var d,e,f,g;d=0;e=a.gc;f=b&e;while(true){g=a.lE.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.i4.data[f]=c;}
function Rl(a,b){var c,d,e,f;c=a.gc;d=b&c;e=0;while(true){f=a.lE.data[d];if(!f)break;if(f==b)return a.i4.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.uk;}
var WE=F();
var JK=F(U);
function AO_(){var a=new JK();AGg(a);return a;}
function AGg(a){}
function YC(a){return Ch(BQ(C1(),9,13),32);}
var IY=F(U);
function AOp(){var a=new IY();ALf(a);return a;}
function ALf(a){}
function Y9(a){return BQ(C1(),48,57);}
var ZY=F(U);
function APt(){var a=new ZY();AFI(a);return a;}
function AFI(a){}
function AKu(a){return BQ(C1(),97,122);}
var AAr=F(U);
function ANB(){var a=new AAr();AGI(a);return a;}
function AGI(a){}
function ALm(a){return BQ(C1(),65,90);}
var AAt=F(U);
function AO8(){var a=new AAt();AC1(a);return a;}
function AC1(a){}
function AEQ(a){return BQ(C1(),0,127);}
var JE=F(U);
function APf(){var a=new JE();AD5(a);return a;}
function AD5(a){}
function Xu(a){return BQ(BQ(C1(),97,122),65,90);}
var Kf=F(JE);
function AOB(){var a=new Kf();AGp(a);return a;}
function AGp(a){}
function Ya(a){return BQ(Xu(a),48,57);}
var ABt=F(U);
function AOm(){var a=new ABt();AIb(a);return a;}
function AIb(a){}
function AFZ(a){return BQ(BQ(BQ(C1(),33,64),91,96),123,126);}
var Lh=F(Kf);
function ANK(){var a=new Lh();AJL(a);return a;}
function AJL(a){}
function Wg(a){return BQ(BQ(BQ(Ya(a),33,64),91,96),123,126);}
var YM=F(Lh);
function ANI(){var a=new YM();AK$(a);return a;}
function AK$(a){}
function AHW(a){return Ch(Wg(a),32);}
var Y4=F(U);
function ANO(){var a=new Y4();AKG(a);return a;}
function AKG(a){}
function AEc(a){return Ch(Ch(C1(),32),9);}
var XN=F(U);
function AN1(){var a=new XN();AMj(a);return a;}
function AMj(a){}
function AHT(a){return Ch(BQ(C1(),0,31),127);}
var XD=F(U);
function ANM(){var a=new XD();ADd(a);return a;}
function ADd(a){}
function AMu(a){return BQ(BQ(BQ(C1(),48,57),97,102),65,70);}
var AAx=F(U);
function AOP(){var a=new AAx();ACO(a);return a;}
function ACO(a){}
function AID(a){var b;b=new Rz;b.v_=a;Bm(b);b.F=1;return b;}
var ABD=F(U);
function ANx(){var a=new ABD();AJ3(a);return a;}
function AJ3(a){}
function ABS(a){var b;b=new LG;b.wi=a;Bm(b);b.F=1;return b;}
var Z5=F(U);
function APb(){var a=new Z5();AC3(a);return a;}
function AC3(a){}
function AGm(a){var b;b=new Qz;b.vP=a;Bm(b);return b;}
var ZP=F(U);
function AN0(){var a=new ZP();AHU(a);return a;}
function AHU(a){}
function AKe(a){var b;b=new Qy;b.vD=a;Bm(b);return b;}
var AAI=F(U);
function AOz(){var a=new AAI();AD0(a);return a;}
function AD0(a){}
function AEa(a){var b;b=new UL;b.w8=a;Bm(b);G7(b.C,0,2048);b.F=1;return b;}
var WV=F(U);
function ANY(){var a=new WV();ADB(a);return a;}
function ADB(a){}
function AEv(a){var b;b=new NM;b.wy=a;Bm(b);b.F=1;return b;}
var Wz=F(U);
function AOA(){var a=new Wz();AHC(a);return a;}
function AHC(a){}
function AMo(a){var b;b=new M2;b.xy=a;Bm(b);b.F=1;return b;}
var Z_=F(U);
function ANQ(){var a=new Z_();AIc(a);return a;}
function AIc(a){}
function ABL(a){var b;b=new Pz;b.wb=a;Bm(b);return b;}
var AAj=F(U);
function APj(){var a=new AAj();AF$(a);return a;}
function AF$(a){}
function AG7(a){var b;b=new Lz;b.uO=a;Bm(b);b.F=1;return b;}
var X6=F(U);
function ANS(){var a=new X6();ACm(a);return a;}
function ACm(a){}
function AEE(a){var b;b=new LF;b.wB=a;Bm(b);b.F=1;return b;}
var Y7=F(U);
function AOF(){var a=new Y7();ADG(a);return a;}
function ADG(a){}
function AFB(a){var b;b=new MC;b.w5=a;Bm(b);b.F=1;return b;}
var ABh=F(U);
function AO7(){var a=new ABh();AHc(a);return a;}
function AHc(a){}
function AHa(a){var b;b=new N9;b.xk=a;Bm(b);b.F=1;return b;}
var AAg=F(U);
function AO4(){var a=new AAg();AIv(a);return a;}
function AIv(a){}
function ALH(a){var b;b=new Of;b.vS=a;Bm(b);return b;}
var Yt=F(U);
function APg(){var a=new Yt();ADC(a);return a;}
function ADC(a){}
function AJD(a){var b;b=new R0;b.wJ=a;Bm(b);return b;}
var X5=F(U);
function ANP(){var a=new X5();AKf(a);return a;}
function AKf(a){}
function AIu(a){var b;b=new Re;b.uS=a;Bm(b);b.F=1;return b;}
var ABz=F(U);
function AOU(){var a=new ABz();AF5(a);return a;}
function AF5(a){}
function AKo(a){var b;b=new LN;b.xH=a;Bm(b);b.F=1;return b;}
var It=F(U);
function AOJ(){var a=new It();AEK(a);return a;}
function AEK(a){}
function Y5(a){return Ch(BQ(BQ(BQ(C1(),97,122),65,90),48,57),95);}
var AAL=F(It);
function ANL(){var a=new AAL();AGb(a);return a;}
function AGb(a){}
function AIf(a){var b;b=D3(Y5(a),1);b.F=1;return b;}
var YR=F(JK);
function ANt(){var a=new YR();AL7(a);return a;}
function AL7(a){}
function ACX(a){var b;b=D3(YC(a),1);b.F=1;return b;}
var X1=F(IY);
function AN8(){var a=new X1();AGZ(a);return a;}
function AGZ(a){}
function AFO(a){var b;b=D3(Y9(a),1);b.F=1;return b;}
function XI(){var a=this;U.call(a);a.pF=0;a.qf=0;}
function L(a,b){var c=new XI();AMl(c,a,b);return c;}
function AMl(a,b,c){a.pF=b;a.qf=c;}
function AHl(a){return BQ(C1(),a.pF,a.qf);}
var XX=F(U);
function ANN(){var a=new XX();AMC(a);return a;}
function AMC(a){}
function AMe(a){return BQ(BQ(C1(),65279,65279),65520,65533);}
function YG(){var a=this;U.call(a);a.lb=0;a.iS=0;a.of=0;}
function BE(a,b){var c=new YG();ADU(c,a,b);return c;}
function AOt(a,b,c){var d=new YG();AMn(d,a,b,c);return d;}
function ADU(a,b,c){a.iS=c;a.lb=b;}
function AMn(a,b,c,d){a.of=d;a.iS=c;a.lb=b;}
function AFc(a){var b;b=APp(a.lb);if(a.of)G7(b.C,0,2048);b.F=a.iS;return b;}
function YN(){var a=this;U.call(a);a.k_=0;a.i6=0;a.mK=0;}
function HO(a,b){var c=new YN();AEF(c,a,b);return c;}
function AOi(a,b,c){var d=new YN();ABN(d,a,b,c);return d;}
function AEF(a,b,c){a.i6=c;a.k_=b;}
function ABN(a,b,c,d){a.mK=d;a.i6=c;a.k_=b;}
function ABM(a){var b;b=new Qq;ZD(b,a.k_);if(a.mK)G7(b.C,0,2048);b.F=a.i6;return b;}
var XJ=F();
var Xh=F();
function Yp(b){var c,d,e,f,g,h,i;c=AKx(ES(b));d=IO(c);e=Bu(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+IO(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=L0(c);h=h+1|0;}return e;}
function Jr(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Mc(){var a=this;B.call(a);a.oJ=0;a.qw=0;a.o1=null;}
function AFa(a,b,c){var d=new Mc();AK8(d,a,b,c);return d;}
function AK8(a,b,c,d){a.oJ=b;a.qw=c;a.o1=d;}
function AAc(){var a=this;B.call(a);a.nx=null;a.pM=0;}
function AKx(a){var b=new AAc();AEj(b,a);return b;}
function AEj(a,b){a.nx=b;}
var Yo=F();
function IO(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.nx.data;f=b.pM;b.pM=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+V(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function L0(b){var c,d;c=IO(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function Xr(){B.call(this);this.HY=null;}
var Oc=F();
var ASY=null;function Km(b,c,d){Pu(b,c,d,0);}
function Pu(b,c,d,e){MT(b,c,d,null,null,e);}
function MT(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;h=T_(c);i=X(h);j=X(h);k=X(h);l=Ci(b);m=Bu(i+1|0);n=!g?O(CL,i):XF(b.v,i);c=m.data;b.v=n;o=0;while(o<i){if(g&&o<l){p=4*X(h)|0;h.d4=h.d4+p|0;c[o+1|0]=(c[o]+(BG(b,o)).z|0)+1|0;}else{b.v.data[o]=Dk(O2(h,d,0));c[o+1|0]=(c[o]+(BG(b,o)).z|0)+1|0;}o=o+1|0;}if(j)b.cO=AAi(ABi(h));b.gs=m;Eg(b.dd);Eg(b.cR);q=b.dd;g=0;while(g<k){DH(q,Di(X(h),X(h)),Di(X(h),X(h)));g=g+1|0;}r=b.dd;s=b.cR;r=MY(S6(r));while(EG(r)){t=Vp(r);q=t.cg;t=t.cw;BT(ASY);u=B7(s,t);if(u===null){u
=Bz();DH(s,t,u);}Bv(u,q);}if(s.jC===null){r=new N2;r.ug=s;s.jC=r;}r=s.jC;q=new PV;JJ(q,r.ug);while(EG(q)){Ka(q);r=q.ft.cw;t=AQl;c=O(B,r.j);d=c.data;GZ(r,c);X0(c,t);g=0;v=d.length;while(g<v){t=d[g];Id(r,g);r.cd.data[g]=t;g=g+1|0;}}Pi(h);if(e!==null&&f!==null){r=AIa(e,f);M6(r);b.dJ=ADX(r.j5,r.gS);b.cO=AAi(r.kH);}}
function Ly(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;g=c.data;if(g.length==1&&g[0]==(-1))return;h=T_(c);i=X(h);j=X(h);k=X(h)!=1?0:1;l=X(h);m=X(h);n=UT(b,i);o=UT(b,j);p=(G5(BG(b,n.b),n.a)).data[0].k;g=(G5(BG(b,o.b),o.a)).data[1].k;q=0;r=l-1|0;while(q<l){s=O2(h,d,i);if(!q)s=TE(p,s);if(q==r)s=TE(s,g);t=n.b+q|0;u=Dk(s);c=b.v.data;v=c[t];c[t]=u;if(!k&&Ig(v)==Ig(u)){w=0;while(w<Ig(v)){x=v.k.data[w];o=u.k.data[w];t=x.bR;if(t!=5&&t&&!o.bR){o.bR=t;o.bB=x.bB;}w=w+1|0;}}q=q+1|0;}if(k){if(m){x=ABi(h);v=IL(i,j,
(-1));MA(b.cO,v,x);}else if(e!==null&&f!==null){u=AIa(e,f);M6(u);v=IL(i,j,(-1));MA(b.cO,v,u.kH);b.dJ.dV=u.gS;}}Pi(h);}
function O2(b,c,d){var e,f,g,h,i,j,k,l;e=X(b);f=O(B_,e);g=f.data;h=0;while(h<e){i=X(b);j=X(b);k=X(b);l=X(b);g[h]=Ds(DM(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function Z6(){ASY=new U3;}
function Td(){var a=this;B.call(a);a.xJ=null;a.ii=null;}
function AEU(a,b){var c;c=a.ii;b=b;a.ii=NI(!c.lx&&!b.dN?0:1);return 1;}
function Ud(){var a=this;Q.call(a);a.m_=null;a.xd=null;}
function AEW(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.bZ^C6(a.m_,c):0;}
function Ub(){var a=this;Q.call(a);a.sG=null;a.to=null;a.wS=null;}
function ACb(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.bZ^C6(a.sG,c):0;return a.to.i(b)&&!d?1:0;}
function Nj(){var a=this;Q.call(a);a.hM=null;a.uX=null;}
function AHd(a,b){return a.S^C6(a.hM,b);}
function AFF(a){var b,c,d;b=new R;T(b);c=Gr(a.hM,0);while(c>=0){Hw(b,FL(c));BY(b,124);c=Gr(a.hM,c+1|0);}d=b.E;if(d>0)T4(b,d-1|0);return S(b);}
function Nq(){var a=this;Q.call(a);a.p5=null;a.wg=null;}
function AKc(a,b){return a.p5.i(b);}
function No(){var a=this;Q.call(a);a.iX=0;a.nZ=null;a.jQ=null;}
function AKI(a,b){return !(a.iX^C6(a.jQ.y,b))&&!(a.iX^a.jQ.du^a.nZ.i(b))?0:1;}
function Np(){var a=this;Q.call(a);a.i5=0;a.s3=null;a.kO=null;}
function AHE(a,b){return !(a.i5^C6(a.kO.y,b))&&!(a.i5^a.kO.du^a.s3.i(b))?1:0;}
function Nt(){var a=this;Q.call(a);a.tX=0;a.tb=null;a.sY=null;a.vk=null;}
function AEz(a,b){return a.tX^(!a.tb.i(b)&&!a.sY.i(b)?0:1);}
function Nu(){var a=this;Q.call(a);a.qc=0;a.pU=null;a.pi=null;a.xE=null;}
function ABF(a,b){return a.qc^(!a.pU.i(b)&&!a.pi.i(b)?0:1)?0:1;}
function Nr(){var a=this;Q.call(a);a.o6=null;a.xG=null;}
function AFJ(a,b){return CF(a.o6,b);}
function Ns(){var a=this;Q.call(a);a.tl=null;a.vz=null;}
function AHG(a,b){return CF(a.tl,b)?0:1;}
function Nv(){var a=this;Q.call(a);a.qp=null;a.pX=0;a.sb=null;}
function ALS(a,b){return !CF(a.qp,b)&&!(a.pX^C6(a.sb.y,b))?0:1;}
function Nw(){var a=this;Q.call(a);a.q0=null;a.ri=0;a.qK=null;}
function AD7(a,b){return !CF(a.q0,b)&&!(a.ri^C6(a.qK.y,b))?1:0;}
function Ni(){var a=this;Q.call(a);a.r2=0;a.s2=null;a.tB=null;a.u5=null;}
function ANq(a,b){return !(a.r2^a.s2.i(b))&&!CF(a.tB,b)?0:1;}
function NW(){var a=this;Q.call(a);a.tw=0;a.ma=null;a.mQ=null;a.vv=null;}
function AFN(a,b){return !(a.tw^a.ma.i(b))&&!CF(a.mQ,b)?1:0;}
function Ng(){var a=this;Q.call(a);a.oy=null;a.vB=null;}
function AD6(a,b){return CF(a.oy,b);}
function Nh(){var a=this;Q.call(a);a.oF=null;a.xA=null;}
function AFq(a,b){return CF(a.oF,b)?0:1;}
function Nm(){var a=this;Q.call(a);a.tT=null;a.qS=0;a.uG=null;}
function AGH(a,b){return CF(a.tT,b)&&a.qS^C6(a.uG.y,b)?1:0;}
function Nf(){var a=this;Q.call(a);a.rG=null;a.qd=0;a.qQ=null;}
function ALt(a,b){return CF(a.rG,b)&&a.qd^C6(a.qQ.y,b)?0:1;}
function Nk(){var a=this;Q.call(a);a.sf=0;a.m9=null;a.qa=null;a.vj=null;}
function ADa(a,b){return a.sf^a.m9.i(b)&&CF(a.qa,b)?1:0;}
function Nl(){var a=this;Q.call(a);a.ry=0;a.l2=null;a.r0=null;a.vF=null;}
function AJx(a,b){return a.ry^a.l2.i(b)&&CF(a.r0,b)?0:1;}
var Fm=F(Cg);
var AR_=null;var AR$=null;var ASZ=null;function Rh(){Rh=Bf(Fm);AM8();}
function AKH(a,b){var c=new Fm();Yy(c,a,b);return c;}
function Yy(a,b,c){Rh();C4(a,b,c);}
function AM8(){var b;AR_=AKH(C(472),0);b=AKH(C(473),1);AR$=b;ASZ=G(Fm,[AR_,b]);}
function V6(){B.call(this);this.oV=null;}
var KF=F(0);
function Rd(){var a=this;B.call(a);a.vr=null;a.s5=null;a.h2=null;a.ce=null;a.hN=0;a.jI=0;}
function LD(a,b){var c,d,e;c=H(a.h2);if(b>=0&&b<=c){Vw(a.ce,null,(-1),(-1));d=a.ce;d.ix=1;d.dR=b;c=d.gW;if(c<0)c=b;d.gW=c;b=a.s5.b3(b,a.h2,d);if(b==(-1))a.ce.c3=1;if(b>=0){d=a.ce;if(d.h3){e=d.dl.data;if(e[0]==(-1)){c=d.dR;e[0]=c;e[1]=c;}d.gW=H6(d);return 1;}}a.ce.dR=(-1);return 0;}d=new BS;Br(d,DY(b));J(d);}
function ABg(a){return NS(a.ce,0);}
function X2(a){return QB(a.ce,0);}
function WL(a){return a.ce.h8;}
function ZQ(){var a=this;B.call(a);a.gm=null;a.d4=0;}
function T_(a){var b=new ZQ();ABX(b,a);return b;}
function ABX(a,b){a.gm=b;a.d4=0;}
function X(a){var b,c;b=a.gm.data;c=a.d4;a.d4=c+1|0;return b[c];}
function Pi(a){var b,c,d,e;if(a.d4!=a.gm.data.length){b=D2();c=a.gm.data.length;d=a.d4;e=new R;T(e);K(Bk(K(Bk(K(e,C(240)),c),C(474)),d),C(475));CE(b,S(e));}}
function WW(){var a=this;B.call(a);a.j5=null;a.kH=null;a.gS=null;a.b8=null;a.ja=null;a.jP=null;a.f5=null;a.kG=null;a.kz=null;}
function AIa(a,b){var c=new WW();ALX(c,a,b);return c;}
function ALX(a,b,c){a.b8=T_(b);a.ja=c;}
function M6(a){var b,c,d,e,f,g,h,i;b=X(a.b8);c=new JI;Ov(c);a.gS=c;a.f5=Bz();d=0;while(d<b){e=X(a.b8);f=X(a.b8);g=DM(a.ja,e,f);DH(a.gS,g,Bz());Bv(a.f5,g);d=d+1|0;}c=MY(S6(a.gS));while(EG(c)){FZ((Vp(c)).cw,Md(a));}d=X(a.b8);if(d==(-1))a.j5=null;else{a.jP=O(EP,d);c=new LH;h=a.b8;i=a.ja;g=a.f5;c.cT=h;c.qe=i;c.pz=g;a.kG=c;c=new PS;c.ds=h;c.sR=i;c.tg=g;a.kz=c;a.j5=Pw(a,null);}if(X(a.b8)!=(-1))a.kH=PP(a.b8,a.jP);}
function Pw(a,b){var c,d,e,f,g,h,i,j,k;c=X(a.b8);d=X(a.b8);e=a.kG;f=X(e.cT);g=Bz();h=0;while(h<f){Bv(g,LK(e));h=h+1|0;}a:{switch(d){case -1:i=new JF;i.fD=b;b=ARv;i.ca=b;i.d2=b;i.dD=b;i.hE=b;i.fv=b;break a;case 0:i=ANy(b);break a;case 1:i=new Je;Zg(i,b);FZ(i.dD,g);break a;default:}b=new Dg;i=new R;T(i);Bk(K(i,C(476)),d);Br(b,S(i));J(b);}i.dD=g;b=a.kz;d=X(b.ds);e=Bz();j=0;while(j<d){Bv(e,Fo(b));j=j+1|0;}i.d2=e;i.hE=Md(a);d=X(a.b8);b=Bz();j=0;while(j<d){e=LK(a.kG);g=Fo(a.kz);f=X(a.b8);k=new Ox;k.hH=e;k.iv=g;k.oa
=f;Bv(b,k);j=j+1|0;}i.fv=b;j=X(a.b8);i.rV=j==(-1)?null:Bp(a.f5,j);d=X(a.b8);b=Bz();j=0;while(j<d){Bv(b,Pw(a,i));j=j+1|0;}i.ca=b;a.jP.data[c]=i;return i;}
function Md(a){var b,c,d,e;b=X(a.b8);c=Bz();d=0;while(d<b){e=X(a.b8);Bv(c,Bp(a.f5,e));d=d+1|0;}return c;}
var RX=F();
var AR8=null;function AON(){AON=Bf(RX);ACz();}
function ACz(){var b,c;Rh();b=Bu((ASZ.f0()).data.length);c=b.data;AR8=b;c[AR_.fQ]=1;c[AR$.fQ]=2;}
function Rn(){B.call(this);this.tQ=null;}
function AJ2(a,b){var c,d,e,f,g;FQ(a.tQ);c=ARc;d=Xz(C(477));if(!Kr()){b=new Bo;Br(b,C(254));KJ(d,b);}else{e=$rt_globals.navigator.clipboard;f=ES(b);AOY();b=AS0;g=f.data;g=b.decode(g);b=e.writeText(g);e=new SJ;e.wF=c;c=ABx(d);b.then(Bi(e,"f"),Bi(c,"f"));}}
function VC(){B.call(this);this.lW=null;}
function KJ(a,b){var c,d;c=a.lW;d=b.k3;b=new R;T(b);K(K(b,c),d);$rt_globals.console.info($rt_ustr(S(b)));}
var U3=F();
var EB=F();
var AS1=null;var AS2=null;var ARv=null;var AS3=null;var AS4=null;var AS5=null;function Zi(){AS1=new Tu;AS2=new Ts;ARv=new Tt;AS3=new Tq;AS4=new Tr;AS5=new V5;}
var I6=F(Ec);
var Tu=F(I6);
var Ke=F(Dt);
var Ts=F(Ke);
var KI=F(D8);
function AEe(a){var b;b=new DS;W(b);J(b);}
function AH1(a,b){var c;c=new DS;W(c);J(c);}
function AGV(a,b){b=new DS;W(b);J(b);}
var Tt=F(KI);
function AH6(a,b){var c;c=new BS;W(c);J(c);}
function AHi(a){return 0;}
function AEG(a){return AS3;}
function ACx(a){return 1;}
var Tq=F();
function ACi(a){return 0;}
function AJk(a){var b;b=new K_;W(b);J(b);}
function AKD(a){var b;b=new Dg;W(b);J(b);}
var N_=F(0);
var Tr=F();
var V5=F();
var LW=F(FN);
function AFg(a,b,c,d){var e,f,g;e=0;f=d.r;a:{while(true){if(b>f){b=e;break a;}g=E5(d,a.O);C9(d,a.O,b);e=a.cC.c(b,c,d);if(e>=0)break;C9(d,a.O,g);b=b+1|0;}}return b;}
function ANh(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=E5(e,a.O);C9(e,a.O,c);f=a.cC.c(c,d,e);if(f>=0)break;C9(e,a.O,g);c=c+(-1)|0;}}return c;}
function ADR(a){return null;}
var K_=F(Bo);
function P8(){B.call(this);this.rv=null;}
function ADO(a,b){LA(a.rv,b);}
var Gj=F();
var XG=F(Gj);
var Z$=F(Gj);
var Xf=F(0);
function PD(){B.call(this);this.mF=null;}
function ABR(a,b){var c;c=a.mF;b=Eu(b);Dj(c.oV,b);}
function QO(){B.call(this);this.pI=null;}
function AHX(a,b){b.fO=a.pI.cL;}
function QN(){B.call(this);this.sF=null;}
function AJO(a,b){b.fD=a.sF.cL.b_;}
function OM(){var a=this;B.call(a);a.sq=null;a.sp=null;}
function OL(){B.call(this);this.m0=null;}
function Q3(){var a=this;B.call(a);a.u2=null;a.u1=null;a.u4=null;}
function Sb(){var a=this;B.call(a);a.v8=null;a.v7=null;}
function ST(){Ec.call(this);this.p8=null;}
function MY(a){var b;b=new SH;JJ(b,a.p8);return b;}
function N2(){En.call(this);this.ug=null;}
function Tb(){var a=this;B.call(a);a.dl=null;a.iE=null;a.kd=null;a.kj=null;a.n3=0;a.h3=0;a.cu=0;a.r=0;a.dR=0;a.h8=0;a.eP=0;a.c3=0;a.w1=0;a.gW=0;a.ix=0;}
function BD(a,b,c){a.iE.data[b]=c;}
function C0(a,b){return a.iE.data[b];}
function H6(a){return QB(a,0);}
function QB(a,b){Qo(a,b);return a.dl.data[(b*2|0)+1|0];}
function C9(a,b,c){a.dl.data[b*2|0]=c;}
function II(a,b,c){a.dl.data[(b*2|0)+1|0]=c;}
function E5(a,b){return a.dl.data[b*2|0];}
function HB(a,b){return a.dl.data[(b*2|0)+1|0];}
function Z0(a){return NS(a,0);}
function NS(a,b){Qo(a,b);return a.dl.data[b*2|0];}
function LM(a,b){return a.kd.data[b];}
function DN(a,b,c){a.kd.data[b]=c;}
function Qo(a,b){var c;if(!a.h3){c=new Dg;W(c);J(c);}if(b>=0&&b<a.n3)return;c=new BS;Br(c,DY(b));J(c);}
function Vw(a,b,c,d){a.h3=0;a.ix=2;GI(a.dl,(-1));GI(a.iE,(-1));if(b!==null)a.kj=b;if(c>=0){a.cu=c;a.r=d;}a.dR=a.cu;}
function Yc(a){return a.ix;}
function U_(){B.call(this);this.na=null;}
function AEq(a,b){var c,d;c=a.na;d=new Bo;Br(d,$rt_str(b.message));KJ(c,d);}
function Nc(){B.call(this);this.no=null;}
function AD_(a,b){b.fO=a.no;}
function LH(){var a=this;B.call(a);a.cT=null;a.qe=null;a.pz=null;}
function LK(a){var b,c,d,e,f,g,h,i;a:{b=X(a.cT);switch(b){case 3:break;case 5:c=MW(a);d=Kt(a);b=X(a.cT);e=X(a.cT);f=X(a.cT);g=Bz();h=0;while(h<f){Bv(g,Kt(a));h=h+1|0;}i=new KU;Z2(i,c,d,b);i.iI=g;i.lV=e;break a;default:c=new Dg;d=new R;T(d);Bk(K(d,C(478)),b);Br(c,S(d));J(c);}i=AOS(MW(a),Kt(a),X(a.cT));}return i;}
function MW(a){var b,c;b=X(a.cT);c=X(a.cT);return AFC(DM(a.qe,b,c),X(a.cT));}
function Kt(a){var b;b=X(a.cT);if(b==(-1))return null;return Bp(a.pz,b);}
function PS(){var a=this;B.call(a);a.ds=null;a.sR=null;a.tg=null;}
function Fo(a){var b,c,d,e,f;a:{b:{b=X(a.ds);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Me(a);d=OG(a);b=X(a.ds);e=Q_(a);f=new HK;J0(f,c,d,2);f.me=b;f.f2=e;break a;case 4:c=Fo(a);d=Fo(a);f=new H5;J0(f,c.er,c.eW,9);f.gU=c;f.f4=d;break a;case 5:f=ANR(Me(a),OG(a),X(a.ds));break a;case 9:c=Q_(a);f=new FC;d=!DP(c)&&Bp(c,0)!==null?(Bp(c,0)).eW:null;J0(f,null,null,7);f.fR=Bz();c=BM(c);while(BN(c)){e=BP(c);if(!(e instanceof FC))Bv(f.fR,e);else{e=e;FZ(f.fR,e.fR);}}f.eW=d;break a;default:break b;}f
=null;break a;}c=new Dg;d=new R;T(d);Bk(K(d,C(479)),b);Br(c,S(d));J(c);}return f;}
function Me(a){var b,c;b=X(a.ds);c=X(a.ds);return AFC(DM(a.sR,b,c),X(a.ds));}
function OG(a){var b;b=X(a.ds);if(b==(-1))return null;return Bp(a.tg,b);}
function Q_(a){var b,c,d;b=X(a.ds);c=Bz();d=0;while(d<b){Bv(c,Fo(a));d=d+1|0;}return c;}
function R6(){var a=this;B.call(a);a.lR=null;a.lS=null;}
function ALb(a){var b,c;b=a.lR;c=a.lS;b=b.hg;H$(b,c,b.fg);}
function MD(){var a=this;B.call(a);a.mL=null;a.mM=0;a.mN=0;a.mO=null;a.mH=0;a.mJ=0;}
function AIe(a,b){var c,d,e,f,g,h,i,j;c=a.mL;d=a.mM;e=a.mN;f=a.mO;g=a.mH;h=a.mJ;i=Ck(c.bi,5.0);d=Be((c.bi.cB.b-d|0)-i|0,Ba((i-d|0)-c.K.o.b|0,b.u.b));j=Be((c.bi.cB.a-e|0)-i|0,Ba((i-e|0)-c.K.o.a|0,b.u.a));Bn(f,d+g|0,j+h|0);JU(c,f,c.N.o);}
function TT(){var a=this;B.call(a);a.r8=null;a.r$=null;a.r9=null;a.r5=0;a.r4=0;a.r7=0;a.r6=0;a.sj=0;a.si=0;a.sk=0;a.sN=0;}
function AFD(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.r8;d=a.r$;e=a.r9;f=a.r5;g=a.r4;h=a.r7;i=a.r6;j=a.sj;k=a.si;l=a.sk;m=a.sN;n=Ck(c.bi,5.0);o=c.N.qT();Cp(d,c.N.o);Cp(e,c.N.D);switch(f){case -1:f=Be(h+(b.u.b-g|0)|0,c.bi.cB.b-n|0);g=o.b;h=h+i|0;f=Ba(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Ba((i+b.u.b|0)-g|0,Ba(o.b,n-c.K.D.b|0));}b:{switch(j){case -1:f=Ba(n,Be(l+(b.u.a-k|0)|0,(c.bi.cB.a+c.K.o.a|0)-n|0));g=o.a;h=l+m|0;f=Ba(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Ba((m+b.u.a|0)-k|0,o.a);}JU(c,e,d);}
function B8(){Cg.call(this);this.k5=null;}
var AS6=null;var AS7=null;var AS8=null;var AS9=null;var AS$=null;var AS_=null;var ATa=null;var ATb=null;var ATc=null;var ATd=null;var ATe=null;var ATf=null;var ATg=null;var ATh=null;var ATi=null;var ASa=null;function XV(){XV=Bf(B8);AGB();}
function Dp(a,b,c){var d=new B8();R1(d,a,b,c);return d;}
function AKY(a,b,c,d){var e=new B8();AAP(e,a,b,c,d);return e;}
function R1(a,b,c,d){XV();C4(a,b,c);a.k5=G8(d,null);}
function AAP(a,b,c,d,e){XV();C4(a,b,c);a.k5=G8(d,e);}
function AGB(){var b;b=new B8;AAJ();R1(b,C(202),0,ARU);AS6=b;AS7=Dp(C(203),1,N(C(480)));AS8=Dp(C(205),2,N(C(481)));AS9=Dp(C(207),3,N(C(482)));AS$=Dp(C(209),4,N(C(480)));AS_=Dp(C(210),5,DV(188,63,60));ATa=Dp(C(212),6,N(C(483)));ATb=Dp(C(214),7,N(C(484)));ATc=Dp(C(216),8,N(C(485)));ATd=AKY(C(218),9,ARU,DV(52,65,52));ATe=AKY(C(219),10,N(C(486)),N(C(487)));ATf=Dp(C(220),11,N(C(488)));ATg=Dp(C(222),12,N(C(489)));ATh=Dp(C(224),13,ARU);b=Dp(C(225),14,N(C(226)));ATi=b;ASa=G(B8,[AS6,AS7,AS8,AS9,AS$,AS_,ATa,ATb,ATc,ATd,
ATe,ATf,ATg,ATh,b]);}
var Dm=F(0);
var ASe=null;var ASf=null;var ASb=null;var ASc=null;var ASd=null;var ARy=null;var ARz=null;var ASg=null;var ASh=null;function AH$(){AH$=Bf(Dm);AI5();}
function AI5(){ASe=N(C(490));ASf=N(C(491));ASb=N(C(195));ASc=N(C(492));ASd=N(C(230));ARy=N(C(490));ARz=N(C(491));ASg=EX(118,121,122,128);ASh=DV(63,66,68);}
var CC=F(0);
var ASi=null;var ARC=null;var ASk=null;var ASj=null;var ASm=null;var ASl=null;var ASo=null;var ASn=null;var ASq=null;var ASp=null;var ASr=null;function AAv(){AAv=Bf(CC);AMs();}
function AMs(){ASi=Hb(0);ARC=DV(8,8,8);ASk=N(C(493));ASj=DV(255,255,255);ASm=N(C(494));ASl=N(C(495));ASo=N(C(496));ASn=N(C(497));ASq=EX(205,205,205,153);ASp=EX(255,255,255,0);ASr=N(C(266));}
function Ca(){Cg.call(this);this.kb=null;}
var ATj=null;var ATk=null;var ATl=null;var ATm=null;var ATn=null;var ATo=null;var ATp=null;var ATq=null;var ATr=null;var ATs=null;var ATt=null;var ATu=null;var ATv=null;var ATw=null;var ATx=null;var ASs=null;function ZF(){ZF=Bf(Ca);AMR();}
function Da(a,b,c){var d=new Ca();PO(d,a,b,c);return d;}
function AMH(a,b,c,d){var e=new Ca();Xb(e,a,b,c,d);return e;}
function PO(a,b,c,d){ZF();C4(a,b,c);a.kb=G8(d,null);}
function Xb(a,b,c,d,e){ZF();C4(a,b,c);a.kb=G8(d,e);}
function AMR(){var b;b=new Ca;AAv();PO(b,C(202),0,ARC);ATj=b;ATk=Da(C(203),1,N(C(498)));ATl=Da(C(205),2,N(C(499)));ATm=Da(C(207),3,N(C(500)));ATn=Da(C(209),4,ARC);ATo=Da(C(210),5,N(C(501)));ATp=Da(C(212),6,N(C(488)));ATq=Da(C(214),7,N(C(502)));ATr=Da(C(216),8,N(C(503)));ATs=AMH(C(218),9,ARC,DV(237,235,252));ATt=AMH(C(219),10,N(C(486)),N(C(504)));ATu=Da(C(220),11,N(C(488)));ATv=Da(C(222),12,N(C(489)));ATw=Da(C(224),13,N(C(505)));b=Da(C(225),14,N(C(226)));ATx=b;ASs=G(Ca,[ATj,ATk,ATl,ATm,ATn,ATo,ATp,ATq,ATr,ATs,
ATt,ATu,ATv,ATw,b]);}
var C_=F(0);
var ASw=null;var ASx=null;var ASt=null;var ASu=null;var ASv=null;var ARD=null;var ARE=null;var ASy=null;var ASz=null;function ACt(){ACt=Bf(C_);AEu();}
function AEu(){ASw=N(C(264));ASx=N(C(506));ASt=N(C(507));ASu=N(C(508));ASv=N(C(509));ARD=N(C(264));ARE=N(C(506));ASy=EX(205,205,205,153);ASz=DV(247,248,250);}
var SH=F(Ew);
function Vp(a){Ka(a);return a.ft;}
var PV=F(Ew);
function Rz(){Q.call(this);this.v_=null;}
function ALZ(a,b){return Ce(b)!=2?0:1;}
function LG(){Q.call(this);this.wi=null;}
function ACV(a,b){return Ce(b)!=1?0:1;}
function Qz(){Q.call(this);this.vP=null;}
function ACC(a,b){return PT(b);}
function Qy(){Q.call(this);this.vD=null;}
function AFb(a,b){return 0;}
function UL(){Q.call(this);this.w8=null;}
function AGx(a,b){return !Ce(b)?0:1;}
function NM(){Q.call(this);this.wy=null;}
function AL3(a,b){return Ce(b)!=9?0:1;}
function M2(){Q.call(this);this.xy=null;}
function AI6(a,b){return FG(b);}
function Pz(){Q.call(this);this.wb=null;}
function AKh(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Lz(){Q.call(this);this.uO=null;}
function AM0(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FG(b);}return b;}
function LF(){Q.call(this);this.wB=null;}
function AEl(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FG(b);}return b;}
function MC(){Q.call(this);this.w5=null;}
function AL$(a,b){a:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function N9(){Q.call(this);this.xk=null;}
function AHQ(a,b){return IA(b);}
function Of(){Q.call(this);this.vS=null;}
function AJP(a,b){return Og(b);}
function R0(){Q.call(this);this.wJ=null;}
function ALT(a,b){return Ce(b)!=3?0:1;}
function Re(){Q.call(this);this.uS=null;}
function AME(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=FG(b);}return b;}
function LN(){Q.call(this);this.xH=null;}
function AEb(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=FG(b);}return b;}
function K2(){Q.call(this);this.kC=0;}
function APp(a){var b=new K2();ZD(b,a);return b;}
function ZD(a,b){Bm(a);a.kC=b;}
function AI9(a,b){return a.S^(a.kC!=Ce(b&65535)?0:1);}
var Qq=F(K2);
function AK2(a,b){return a.S^(!(a.kC>>Ce(b&65535)&1)?0:1);}
var SN=F(0);
var AR9=null;function AOj(){AOj=Bf(SN);AMB();}
function AMB(){AR9=N(C(490));}
function Q0(){B.call(this);this.pt=null;}
function AFt(a,b){b.fD=a.pt;}
function U5(){B.call(this);this.m1=null;}
function AFz(a,b){var c,d,e,f;c=a.m1;b=Eu(b);d=c.sq;c=c.sp;e=new Vq;f=AJX(Ir(c));c=null;ABk(e,AG8(b),c,f);R9(d,e);}
function U6(){var a=this;B.call(a);a.on=null;a.oo=null;}
function AC_(a,b){var c,d;c=a.on;d=a.oo;b.text().then(Bi(c,"f"),Bi(d,"f"));}
function Mb(){var a=this;B.call(a);a.q5=null;a.q4=null;}
var Yz=F();
function SJ(){B.call(this);this.wF=null;}
function AMG(a,b){}
function SF(){B.call(this);this.oG=null;}
function AHo(a,b){var c;c=a.oG;b=$rt_str(b.message);CE(c.m0,b);}
function LB(){B.call(this);this.uD=null;}
function AFY(a){Do(a.uD);}
var VD=F(0);
var AS0=null;function AOY(){AOY=Bf(VD);AJH();}
function AJH(){AS0=new $rt_globals.TextDecoder("utf-16");}
function Qa(){B.call(this);this.sL=null;}
function AKN(a){var b,c;b=a.sL;c=b.q5;b=b.q4;c.x4(b.ie,b.kp,null);}
var Z8=F(0);
function YT(){var a=this;B.call(a);a.BT=null;a.BR=null;a.BW=0.0;}
function TQ(){var a=this;B.call(a);a.iz=null;a.gN=0;}
function MU(){B.call(this);this.mV=null;}
function ANd(a,b){return MF(I(a.mV,b.bb));}
var W5=F();
$rt_packages([]);
$rt_metadata([B,0,0,[],0,3,0,0,["bq",APM(AHN),"ei",APL(ADr)],Fd,0,B,[],0,3,0,0,0,LZ,0,B,[],3,3,0,0,0,Lv,0,B,[],3,3,0,0,0,Ui,0,B,[LZ,Lv],0,3,0,0,0,XC,0,B,[],4,0,0,0,0,Xi,0,B,[],4,3,0,0,0,FO,0,B,[],0,3,0,0,0,DD,0,FO,[],0,3,0,0,0,Bo,0,DD,[],0,3,0,0,0,YO,0,Bo,[],0,3,0,0,0,Cu,0,B,[],3,3,0,0,0,Cl,0,B,[],3,3,0,0,0,HU,0,B,[],3,3,0,0,0,Bw,0,B,[Cu,Cl,HU],0,3,0,FP,["bq",APM(B0),"k7",APL(JZ),"iQ",APM(AFe)],FJ,0,FO,[],0,3,0,0,0,Gu,0,FJ,[],0,3,0,0,0,Yu,0,Gu,[],0,3,0,0,0,Ea,0,B,[Cu],1,3,0,0,0,FB,0,Ea,[Cl],0,3,0,0,["bq",APM(AMM),
"iQ",APM(AG6)],FD,0,B,[Cu,HU],0,0,0,0,["g7",APM(IH),"ei",APL(S)],G6,0,B,[],3,3,0,0,0,R,0,FD,[G6],0,3,0,0,["kR",APP(AG3),"jU",APO(AEt),"ei",APL(GM),"g7",APM(AG$),"ll",APN(AHz)],E$,0,Gu,[],0,3,0,0,0,ZE,0,E$,[],0,3,0,0,0,Yh,0,E$,[],0,3,0,0,0,RW,0,B,[],3,3,0,0,0,C3,0,B,[],3,3,0,0,0,NL,0,B,[],3,0,0,0,0,HG,0,B,[RW,C3,NL],1,3,0,0,["eG",APL(K3)],Qe,0,HG,[],0,3,0,0,0,WH,0,B,[],0,3,0,0,0,BK,0,B,[],3,3,0,0,0,BZ,0,B,[BK],3,3,0,0,0,O3,0,B,[BZ],0,3,0,0,["ba",APM(AGS)],YX,0,B,[BK],1,3,0,0,0,J9,0,B,[],4,3,0,0,0,AAm,0,B,[],
4,3,0,0,0,JO,0,B,[],3,3,0,0,0,Dt,0,B,[JO],1,3,0,0,0,DE,0,B,[],3,3,0,0,0,Jo,0,Dt,[DE,Cu],0,3,0,0,0,X3,0,B,[],0,3,0,0,0,ABB,0,B,[],4,3,0,0,0,L4,0,B,[BZ],0,3,0,0,["ba",APM(AIW)],AAD,0,B,[BK],1,3,0,0,0,Gn,0,B,[],3,3,0,0,0,Rx,0,B,[Gn],0,3,0,0,0,BS,0,Bo,[],0,3,0,0,0,Zn,0,B,[],4,3,0,0,0]);
$rt_metadata([FV,0,Bo,[],0,3,0,0,0,HM,0,Bo,[],0,3,0,0,0,CN,0,B,[Cl],0,3,0,0,0,Lp,0,B,[BK],3,3,0,0,0,Ri,0,B,[Lp],3,3,0,0,0,DW,0,B,[BK],3,3,0,0,0,WM,0,B,[BK,Ri,DW],1,3,0,0,["Fm",APL(AIx),"F8",APM(AK9),"HH",APM(AKU),"AC",APM(AD9),"Fe",APM(AB3),"yD",APL(AEn),"Gj",APN(AK3),"Gp",APO(AGO),"Hc",APL(ACT),"HR",APL(AJt),"Ed",APM(ALN),"BG",APL(AH5),"Ih",APM(AGn),"Dp",APL(AIz),"Cx",APL(ANf),"H4",APL(AHp),"yw",APM(ACK),"Gx",APL(AMN),"EF",APN(AGk),"Bq",APN(AHY),"F9",APN(AMk),"Fy",APL(AB7),"GZ",APL(AF7),"Hs",APM(AEy),"DT",
APM(AFp),"Av",APN(AGA),"CT",APL(AHt),"G4",APM(ACW),"yZ",APL(AFo),"H6",APL(AJS),"Af",APM(ABP),"Dn",APM(ALD),"HU",APM(ADj),"Cc",APL(ALF),"A7",APN(ADs),"FX",APM(AJG),"CG",APL(AKm),"zo",APN(AI3),"zs",APN(AIJ),"Ca",APL(ALz),"Hv",APM(AMS),"Bh",APO(AIM),"Aa",APL(AEp),"Bs",APN(ADL),"Bz",APL(ACu),"FK",APL(AMI),"Ea",APL(AI2),"xO",APL(ACs),"Fb",APN(AI4),"y0",APM(AEf),"DR",APM(AFG),"z2",APL(AKt)],TF,0,B,[BK],3,3,0,0,0,YP,0,B,[TF],1,3,0,0,["G5",APM(AFT),"Go",APL(AHK)],ME,0,B,[BZ],0,3,0,0,["ba",APM(AJF)],N8,0,B,[DW],3,3,
0,0,0,P$,0,B,[DW],3,3,0,0,0,PZ,0,B,[DW],3,3,0,0,0,RT,0,B,[DW],3,3,0,0,0,Va,0,B,[DW],3,3,0,0,0,SR,0,B,[DW,N8,P$,PZ,RT,Va],3,3,0,0,0,Xy,0,B,[BK,SR],1,3,0,0,["ER",APN(AI7),"Ha",APN(AG5),"Ah",APO(AF9),"Be",APM(AC2),"Ez",APO(AED)],BI,0,Bo,[],0,3,0,0,0,Go,0,BS,[],0,3,0,0,0,Gz,0,B,[],3,3,0,0,0,FM,0,B,[Gz,DE],0,0,0,0,["bq",APM(AEd)],FW,0,FM,[],0,0,0,0,0,Po,0,B,[],3,3,0,0,0,Nz,0,B,[Po],3,3,0,0,0,Ro,0,B,[Nz],0,3,0,0,0,Ei,0,B,[],3,3,0,0,0,WD,0,B,[Ei],0,3,0,0,0,Bh,0,B,[],3,3,0,0,0,WF,0,B,[Bh],0,3,0,0,0,XR,0,B,[],0,3,0,
0,0,WU,0,B,[],0,3,0,0,0,J6,0,B,[BK],3,3,0,0,0,RA,0,B,[J6],0,3,0,0,["ba",APM(ACS)],RC,0,B,[BZ],0,3,0,0,["ba",APM(AE1)],RB,0,B,[BZ],0,3,0,0,["ba",APM(AG9)],P5,0,B,[BK],3,3,0,0,0,Ty,0,B,[P5],0,3,0,0,["Dr",APM(AGj)],Tw,0,B,[Bh],0,3,0,0,0,O8,0,B,[BK],3,3,0,0,0,Tx,0,B,[O8],0,3,0,0,["Hp",APN(AEJ)],AAR,0,B,[BK],1,3,0,0,0,B$,0,B,[BK],3,3,0,0,0,Tv,0,B,[B$],0,3,0,0,["bU",APM(AJQ)],Q1,0,B,[],0,3,0,0,0,K4,0,B,[],3,3,0,0,0,RM,0,B,[K4],3,3,0,0,0,SL,0,B,[],3,3,0,0,0,FI,0,B,[RM,SL],1,3,0,0,0,Iv,0,FI,[],0,3,0,0,0,Ye,0,Iv,[],
0,3,0,0,0]);
$rt_metadata([FA,0,FI,[],1,3,0,0,0,Jx,0,FA,[],0,3,0,0,["jj",APO(AE2)],T5,0,B,[],3,3,0,0,["d7",APM(ABH)],Ft,0,B,[T5],3,3,0,0,["d7",APM(ABH),"kE",APM(AGQ)],En,0,B,[Ft],1,3,0,0,["d7",APM(ABH),"kE",APM(AGQ),"dC",APL(DP),"mR",APM(AKL)],Jw,0,B,[Ft],3,3,0,0,["d7",APM(ABH),"kE",APM(AGQ)],If,0,B,[Jw],3,3,0,0,["d7",APM(ABH),"kE",APM(AGQ)],D8,0,En,[If],1,3,0,0,["d7",APM(ABH),"kE",APM(AGQ),"q3",APM(AJ9),"bQ",APL(BM),"rK",APN(AJn),"lF",APN(ALv),"bq",APM(AIj)],KS,0,D8,[],1,3,0,0,["d7",APM(ABH),"kE",APM(AGQ)],Lw,0,B,[Ft],
3,3,0,0,["d7",APM(ABH),"kE",APM(AGQ)],Vx,0,B,[Lw,Jw],3,3,0,0,["d7",APM(ABH),"kE",APM(AGQ)],SK,0,KS,[Vx],0,3,0,0,["d7",APM(ABH),"kE",APM(AGQ)],Vu,0,B,[JO],3,3,0,0,0,LY,0,B,[Vu],3,3,0,0,0,NV,0,Dt,[DE,Cu,LY],0,3,0,0,0,AAM,0,B,[],4,3,0,0,0,Q7,0,B,[Ei],0,3,0,0,0,Q8,0,B,[BZ],0,3,0,0,["ba",APM(AB6)],XL,0,B,[],0,3,0,0,0,JX,0,B,[],1,3,0,0,0,Tp,0,JX,[],0,3,0,0,0,KC,0,B,[C3],1,3,0,0,0,Ik,0,B,[Cl],1,3,0,0,0,K8,0,Ik,[],0,3,0,AFf,0,OD,0,B,[],0,3,0,0,0,Un,0,B,[B$],0,3,0,0,["bU",APM(AJp)],Uo,0,B,[B$],0,3,0,0,["bU",APM(AJz)],Up,
0,B,[B$],0,3,0,0,["bU",APM(AH3)],Uq,0,B,[B$],0,3,0,0,["bU",APM(AHw)],Ur,0,B,[B$],0,3,0,0,["bU",APM(AHR)],Us,0,B,[B$],0,3,0,0,["bU",APM(AJ1)],Ut,0,B,[B$],0,3,0,0,["bU",APM(AF8)],Uu,0,B,[B$],0,3,0,0,["bU",APM(AM9)],Uv,0,B,[B$],0,3,0,0,["bU",APM(AFn)],Uw,0,B,[B$],0,3,0,0,["bU",APM(AKW)],VR,0,B,[B$],0,3,0,0,["bU",APM(AMK)],VS,0,B,[B$],0,3,0,0,["bU",APM(AHJ)],VT,0,B,[B$],0,3,0,0,["bU",APM(AH7)],VU,0,B,[B$],0,3,0,0,["bU",APM(AJI)],Sl,0,B,[],3,3,0,0,0,Sy,0,B,[Sl],0,3,0,0,0,Sx,0,B,[B$],0,3,0,0,["bU",APM(AGU)],Lq,0,
B,[],0,3,0,0,0,Ib,0,B,[Gn],0,3,0,0,["tY",APN(IB)],AA4,0,B,[],0,3,0,0,0,DI,0,B,[],3,3,0,0,0,Er,0,B,[DI],3,3,0,0,0,Fu,0,B,[],3,3,0,0,0,Hi,0,B,[],3,3,0,0,0,Lg,0,B,[DI],3,3,0,0,0]);
$rt_metadata([Jn,0,B,[],3,3,0,0,0,FT,0,B,[],3,3,0,0,0,IP,0,B,[FT],3,3,0,0,0,Pb,0,B,[C3],0,3,0,0,0,Bq,0,B,[],0,3,0,0,["bq",APM(AGJ)],Uy,0,B,[],0,3,0,0,0,AAs,0,B,[],0,3,0,0,0,Xd,0,B,[],3,3,0,0,0,O6,0,B,[],0,3,0,0,0,Kq,0,B,[],0,3,0,0,0,CB,0,Kq,[],0,3,0,0,0,T6,0,CB,[],0,3,0,0,0,D$,0,CB,[],0,3,0,0,0,Yr,0,CB,[],0,3,0,0,0,YI,0,D$,[],0,3,0,0,0,Fq,0,D$,[],0,3,0,0,0,ZH,0,Fq,[],0,3,0,0,0,ABj,0,Fq,[],0,3,0,0,0,XA,0,D$,[],0,3,0,0,0,ZG,0,CB,[],0,3,0,0,0,W_,0,CB,[],0,3,0,0,0,QA,0,B,[BK],3,3,0,0,0,ABy,0,B,[QA],3,3,0,0,0,O4,
0,B,[C3],0,3,0,0,0,O5,0,B,[],0,3,0,0,0,Cg,0,B,[Cl,Cu],1,3,0,0,0,F3,0,Cg,[],12,3,0,GJ,0,J7,0,FA,[],0,3,0,0,["jj",APO(AGM)],Dz,0,Cg,[],12,3,0,AL5,0,AAl,0,BI,[],0,3,0,0,0,Tz,0,DD,[],0,3,0,0,0,Xx,0,B,[],0,3,0,0,0,F7,0,Cg,[],12,0,0,AH0,0,K6,0,B,[BK],3,3,0,0,0,Vs,0,B,[K6],0,3,0,0,["ba",APM(AKy)],Vt,0,B,[K6],0,3,0,0,["ba",APM(ADk)],Gf,0,B,[],1,3,0,0,0,QX,0,B,[],3,3,0,0,0,JT,0,Gf,[Cl,G6,HU,QX],1,3,0,0,0,YD,0,B,[],4,3,0,0,0,IS,0,Gf,[Cl],1,3,0,0,0,GU,0,B,[],0,3,0,AL8,0,I_,0,KC,[],1,3,0,0,0,Ny,0,B,[],3,3,0,0,0,Op,0,B,
[Ny],3,3,0,0,0,Tf,0,B,[],3,3,0,0,0,Wk,0,I_,[Op,Tf],0,3,0,0,0,Zo,0,B,[],3,3,0,0,0,PR,0,B,[],0,3,0,0,0,Tk,0,B,[B$],0,3,0,0,["bU",APM(AKS)]]);
$rt_metadata([YS,0,B,[BK],1,3,0,0,0,IZ,0,JT,[],1,0,0,0,0,P0,0,IZ,[],0,0,0,0,0,JG,0,B,[],1,3,0,0,0,Ky,0,B,[],0,3,0,0,0,P_,0,B,[Fu,Hi],0,0,0,0,["gM",APM(AJv),"go",APO(AMd),"gG",APN(AKn),"gK",APN(AHg),"gJ",APO(AKF)],GO,0,B,[],3,3,0,0,["uz",APL(AIO),"rR",APL(AFh)],OF,0,B,[],3,3,0,0,0,OT,0,B,[],3,0,0,0,0,X9,0,B,[GO,Fu,OF,OT],0,3,0,0,["rR",APL(AE9),"uz",APL(ACy),"gK",APN(AIn),"gG",APN(ABY),"go",APO(ACf),"gM",APM(ACU),"jx",APM(AMr)],Ol,0,B,[Er],0,3,0,0,["cZ",APM(ADb)],Qb,0,B,[Er],0,3,0,0,["cZ",APM(AFk)],Bc,0,B,[],
3,3,0,0,0,Oj,0,B,[Bc],0,3,0,0,["m",APM(AFs)],Ok,0,B,[Jn],0,3,0,0,0,MR,0,B,[IP],0,3,0,0,0,MS,0,B,[Hi],0,3,0,0,["gJ",APO(AGT)],MQ,0,B,[Lg],0,3,0,0,["cZ",APM(Y8)],Mr,0,B,[Ei],0,3,0,0,["lK",APM(ALU)],YE,0,B,[],3,3,0,0,0,UH,0,B,[],0,0,0,0,0,Gl,0,B,[],0,3,0,0,0,NP,0,Gl,[],0,3,0,0,0,AAz,0,B,[],0,3,0,0,0,Ln,0,Gl,[],0,3,0,0,0,Sn,0,B,[BK],3,3,0,0,0,Mx,0,B,[Sn],0,3,0,0,["HI",APM(AHe)],SZ,0,B,[Bc],0,3,0,0,["m",APM(ALi)],UR,0,IS,[],0,0,0,0,0,W9,0,B,[],3,3,0,0,0,SB,0,B,[],0,3,0,0,0,QF,0,B,[Er],0,3,0,0,["cZ",APM(AFR)],QE,
0,B,[Er],0,3,0,0,["cZ",APM(ADJ)],HR,0,B,[],3,3,0,0,0,U9,0,B,[Fu,HR],0,3,0,0,0,TS,0,B,[HR,GO],0,3,0,0,["uz",APL(AIO),"rR",APL(AFh),"jx",APM(AHB)],Or,0,B,[],0,3,0,0,0,JR,0,B,[],0,3,0,0,0,Vq,0,B,[],0,3,0,0,0,Vd,0,B,[],0,3,0,0,0,EK,0,B,[C3],0,0,0,0,0,ABf,0,B,[],0,3,0,0,0,XS,0,B,[C3],0,3,0,0,0,ML,0,B,[Bc],0,3,0,0,0,MK,0,B,[Bc],0,3,0,0,["m",APM(ACY)],MJ,0,B,[Bc],0,3,0,0,["m",APM(ACa)],S8,0,B,[],0,0,0,0,0,MI,0,B,[Bh],0,3,0,0,["t",APL(AB_)],MP,0,B,[Bh],0,3,0,0,["t",APL(AFj)],MO,0,B,[Bh],0,3,0,0,["t",APL(ANo)]]);
$rt_metadata([MN,0,B,[Bh],0,3,0,0,["t",APL(AHr)],MM,0,B,[Bh],0,3,0,0,["t",APL(AJw)],MH,0,B,[Bh],0,3,0,0,["t",APL(AMP)],MG,0,B,[Bh],0,3,0,0,["t",APL(AB1)],EV,0,Cg,[],12,3,0,AB9,0,AAq,0,B,[],3,3,0,0,0,WX,0,B,[],0,3,0,0,0,B4,0,B,[],0,3,0,0,["bq",APM(AM6)],Lk,0,B,[],3,3,0,0,0,OX,0,B,[Bh],0,3,0,0,["t",APL(AF6)],OV,0,B,[Bh],0,3,0,0,["t",APL(ABU)],J8,0,B,[],3,3,0,0,0,W0,0,D8,[DE,Cu,J8],0,3,0,0,["kE",APM(AGQ),"kD",APM(Bp),"cr",APL(AJb),"q3",APM(Bv),"lF",APN(Qf),"ls",APM(E7),"mR",APM(TN),"hp",APL(GH),"rK",APN(Xn),"d7",
APM(DO)],VQ,0,B,[],3,3,0,0,0,Vm,0,B,[],0,3,0,0,0,EE,0,B,[],0,3,0,0,0,I8,0,EE,[],0,3,0,0,0,Rw,0,EE,[],0,3,0,0,0,OQ,0,EE,[],0,3,0,0,0,Gb,0,B,[],3,3,0,0,0,Ra,0,B,[],3,3,0,0,0,OC,0,B,[],3,0,0,0,0,Zv,0,B,[BK],1,3,0,0,0,Jf,0,B,[],4,3,0,AGz,0,Qp,0,B,[Lk],0,3,0,0,0,AAS,0,B,[],0,3,0,0,0,Su,0,B,[],0,3,0,0,0,Qc,0,B,[],0,3,0,0,0,My,0,B,[Bh],0,3,0,0,["t",APL(AMQ)],Gc,0,B,[Cl],0,3,0,0,0,JL,0,B,[],0,3,0,0,0,CL,0,B,[],0,3,0,0,0,V9,0,Bo,[],0,3,0,0,0,T0,0,B,[],3,3,0,0,0,Zd,0,B,[T0],0,3,0,0,0,SE,0,B,[],3,3,0,0,0,JQ,0,B,[SE],0,
3,0,0,0,Oa,0,B,[],0,3,0,0,0,B_,0,B,[],0,3,0,0,0,JI,0,Jo,[],0,3,0,0,0,Ql,0,B,[],0,3,0,0,0,ABd,0,B,[Cl],0,3,0,0,["bq",APM(AK0),"iQ",APM(ADy)],T9,0,B,[Gn],0,3,0,0,["tY",APN(AHu)],PB,0,B,[],0,3,0,0,["bq",APM(ADn)],JD,0,JG,[],1,3,0,0,0,Ob,0,JD,[],0,3,0,0,0,St,0,DD,[],0,3,0,0,0,Hf,0,B,[],0,3,0,0,0,HF,0,B,[],0,3,0,0,0,W8,0,B,[],3,3,0,0,0]);
$rt_metadata([Wr,0,B,[],0,3,0,0,0,Ze,0,B,[],3,3,0,0,0,ABn,0,B,[],0,3,0,0,0,OO,0,B,[J6],0,3,0,0,["ba",APM(AMa)],OW,0,B,[BZ],0,3,0,0,["ba",APM(AIC)],OY,0,B,[BZ],0,3,0,0,["ba",APM(ALw)],Ld,0,B,[Gz,Cu],0,3,0,0,0,Ix,0,Ld,[],0,0,0,0,0,HT,0,B4,[],0,3,0,0,0,CP,0,B,[],3,3,0,AE7,0,B6,0,Cg,[],12,3,0,S9,0,H1,0,B,[],0,3,0,0,0,Hl,0,B,[],0,3,0,0,0,Y6,0,B,[],0,3,0,0,0,Df,0,B,[],3,3,0,ACh,0,XP,0,B,[],0,3,0,0,["bq",APM(AKP)],Hx,0,B,[],0,3,0,0,0,HW,0,B,[],4,3,0,0,0,Xg,0,B,[],0,3,0,0,0,CD,0,B,[],3,3,0,AAJ,0,YQ,0,B,[],0,3,0,0,0,X$,
0,B,[],4,3,0,0,0,Sp,0,B,[],0,0,0,0,0,AAu,0,B,[],0,3,0,0,["bq",APM(AD4)],R5,0,B,[Bc],0,3,0,0,["m",APM(AEC)],Iw,0,B,[C3],0,3,0,0,["eG",APL(ZM)],Wx,0,B,[],0,3,0,0,0,SU,0,B,[],0,3,0,0,0,Ru,0,B,[],0,3,0,0,0,VG,0,B,[Bc],0,3,0,0,["m",APM(ACR)],W7,0,B,[],0,3,0,0,0,TX,0,B,[Cl],0,3,0,0,["bq",APM(ACc),"k7",APL(AKb),"iQ",APM(AJN)],Ou,0,B,[C3],0,3,0,0,0,MX,0,B,[Bc],0,3,0,0,0,Dg,0,Bo,[],0,3,0,0,0,R8,0,FJ,[],0,3,0,0,0,PU,0,B,[Bc],0,3,0,0,["m",APM(AGc)],Xk,0,B,[],3,3,0,0,0,ABc,0,B,[],0,3,0,0,0,Tl,0,B,[Bc],0,3,0,0,["m",APM(ALj)],Sa,
0,B,[Bc],0,3,0,0,0,QR,0,B,[Bc],0,3,0,0,["m",APM(AEL)],QQ,0,B,[Bc],0,3,0,0,["m",APM(AL_)],Ev,0,B,[],3,3,0,0,0,Mo,0,B,[Ev],0,0,0,0,["b$",APL(BN),"bJ",APL(BP),"j7",APL(PL)],Yg,0,B,[BK],4,3,0,0,0,Rk,0,B,[FT],0,3,0,0,0,Z7,0,B,[Ei],0,3,0,0,0,Lx,0,B,[Bc],0,3,0,0,["m",APM(AK5)],QJ,0,B,[DI],0,3,0,0,0]);
$rt_metadata([TO,0,B,[],0,3,0,0,0,Rp,0,Dt,[DE,Cu],0,3,0,0,0,TK,0,B,[],0,3,0,0,0,TD,0,B,[],0,3,0,0,0,Sz,0,B,[],0,3,0,0,0,DS,0,Bo,[],0,3,0,0,0,Mw,0,B,[],0,3,0,0,0,LR,0,B,[Bc],0,3,0,0,["m",APM(AJB)],QG,0,B,[Bc],0,3,0,0,["m",APM(AGX)],QH,0,B,[Bc],0,3,0,0,["m",APM(AIr)],AAK,0,B,[],0,3,0,0,0,RK,0,B,[],0,0,0,0,0,Xa,0,B,[],3,3,0,0,0,Pq,0,B,[K4],3,3,0,0,0,Mp,0,B,[Pq],3,3,0,0,0,Gg,0,B,[Mp],1,3,0,0,0,QY,0,Gg,[],0,3,0,0,0,Ph,0,B,[],3,3,0,0,0,Sc,0,B,[],0,3,0,0,0,Q4,0,B,[Bc],0,3,0,0,0,GV,0,FM,[],0,0,0,0,0,Ge,0,Bo,[],0,3,
0,0,0,UM,0,B,[Bc],0,3,0,0,["m",APM(AB4)],NC,0,B,[Bc],0,3,0,0,["m",APM(ALJ)],Rm,0,B,[Bc],0,3,0,0,["m",APM(AM1)],Vl,0,B,[BZ],0,3,0,0,["ba",APM(AKK)],Vk,0,B,[BZ],0,3,0,0,["ba",APM(AEk)],UG,0,B,[BZ],0,3,0,0,["ba",APM(AFL)],UF,0,B,[BZ],0,3,0,0,["ba",APM(AGs)],WI,0,B,[Bc],0,3,0,0,0,Vg,0,B,[B$],0,3,0,0,["bU",APM(AFA)],Jd,0,B,[],0,3,0,0,0,Xl,0,B,[],0,3,0,0,0,ABw,0,B,[],0,3,0,0,0,U7,0,B,[Bh],0,3,0,0,["t",APL(ACD)],U8,0,B,[Bh],0,3,0,0,["t",APL(AF_)],EP,0,B,[],0,3,0,0,0,VP,0,B,[Bc],0,3,0,0,["m",APM(AFE)],JF,0,EP,[],0,
3,0,0,0,Je,0,EP,[],0,3,0,0,0,T7,0,B,[Bc],0,3,0,0,["m",APM(ACI)],Ox,0,B,[],0,3,0,0,0,NH,0,B,[Bc],0,3,0,0,["m",APM(AH4)],Pf,0,B,[DI],0,3,0,0,["cZ",APM(ANp)],VO,0,DS,[],0,3,0,0,0,PC,0,Bo,[],0,3,0,0,0,Ua,0,Bo,[],0,3,0,0,0,On,0,B,[Bc],0,3,0,0,["m",APM(AJK)],WN,0,B,[Bc],0,3,0,0,0,UC,0,B,[],0,3,0,0,0]);
$rt_metadata([O9,0,B,[Bh],0,3,0,0,["t",APL(ANr)],TJ,0,B,[Bh],0,3,0,0,0,O0,0,B,[Ph],0,3,0,0,0,Ex,0,B,[C3],0,3,0,0,["eG",APL(AKd),"qT",APL(Zz),"kN",APO(P6),"jD",APM(AL0),"nV",APM(AHA),"nD",APM(AMt),"ph",APN(AKl),"go",APO(AGd),"gG",APN(ADq),"gK",APN(AIi),"gM",APM(AMc),"gJ",APO(AKa)],Ii,0,Ex,[],0,3,0,0,0,Pc,0,Ii,[GO],0,3,0,0,["uz",APL(AIO),"rR",APL(AFh),"eG",APL(AMb),"ph",APN(AEx),"nD",APM(AJJ),"nV",APM(AK7),"jx",APM(ALn)],O1,0,B,[Bh],0,3,0,0,0,Ow,0,Ex,[],0,3,0,0,["eG",APL(AK4),"kN",APO(AFK),"jD",APM(AKq),"go",
APO(ALA),"gG",APN(AK6),"gK",APN(AIK),"gM",APM(AIq),"gJ",APO(AE4),"qT",APL(AML)],F4,0,B,[],0,3,0,0,0,NO,0,B,[Ft],3,3,0,0,["d7",APM(ABH),"kE",APM(AGQ)],Ec,0,En,[NO],1,3,0,0,["d7",APM(ABH),"kE",APM(AGQ)],N1,0,Ec,[],0,0,0,0,["kE",APM(AGQ)],Lj,0,B,[Bc],0,3,0,0,["m",APM(AEX)],Ta,0,B,[Bc],0,3,0,0,["m",APM(AHs)],Ia,0,B,[],0,3,0,0,["bq",APM(Zl)],KU,0,Ia,[],0,3,0,0,["bq",APM(ADc)],D9,0,B,[],0,3,0,0,["bq",APM(W1)],FC,0,D9,[],0,3,0,0,0,HK,0,D9,[],0,3,0,0,["bq",APM(AMh)],H5,0,D9,[],0,3,0,0,["bq",APM(ACr)],X8,0,Gg,[],0,3,
0,0,0,Qv,0,B,[Bh],0,3,0,0,["t",APL(AGi)],Qw,0,B,[Bh],0,3,0,0,["t",APL(ADM)],Qt,0,B,[Bh],0,3,0,0,["t",APL(ACE)],Qu,0,B,[Bh],0,3,0,0,["t",APL(AGe)],PG,0,B,[Bh],0,3,0,0,["t",APL(AJ7)],PF,0,B,[Bh],0,3,0,0,["t",APL(AIT)],PE,0,B,[Bh],0,3,0,0,["t",APL(ANg)],NR,0,B,[Bh],0,3,0,0,["t",APL(AIP)],OZ,0,B,[],3,3,0,0,0,OH,0,B,[Bh],0,3,0,0,["t",APL(ADA)],Hz,0,B,[],0,3,0,0,0,P7,0,B,[],3,3,0,0,0,WB,0,B,[P7],0,3,0,0,0,TB,0,Ex,[],0,3,0,0,0,Rv,0,B,[Gb],0,3,0,0,["lD",APN(ALC)],Ux,0,BS,[],0,3,0,0,0,DB,0,B,[],0,3,0,0,0,L$,0,B,[Bh],
0,3,0,0,["t",APL(AGL)],L_,0,B,[Bh],0,3,0,0,["t",APL(ALI)],L9,0,B,[Bh],0,3,0,0,["t",APL(ABG)],UE,0,B,[Bh],0,3,0,0,["t",APL(AHy)],UD,0,B,[Bh],0,3,0,0,["t",APL(AKp)],P3,0,B,[FT],0,3,0,0,["t9",APL(AG_)],Q5,0,B,[Bh],0,3,0,0,["t",APL(AGq)],Q6,0,B,[Bh],0,3,0,0,["t",APL(ALp)],VN,0,B,[Bh],0,3,0,0,["t",APL(ABT)],VI,0,B,[Bh],0,3,0,0,["t",APL(AGt)],VJ,0,B,[Bh],0,3,0,0,["t",APL(AMD)],VK,0,B,[Bh],0,3,0,0,["t",APL(AHM)]]);
$rt_metadata([VL,0,B,[Bh],0,3,0,0,["t",APL(AFV)],J1,0,B,[],3,3,0,0,0,Vc,0,B,[J1],0,3,0,0,0,M$,0,B,[Bc],0,3,0,0,["m",APM(ACp)],M9,0,B,[Bc],0,3,0,0,["m",APM(ACJ)],S4,0,B,[Gb],0,3,0,0,["lD",APN(AM5)],OU,0,B,[BZ],0,3,0,0,["ba",APM(AEw)],AA_,0,B,[Cl],0,3,0,0,["bq",APM(AIU)],LX,0,B,[Bc],0,3,0,0,["m",APM(AHq)],VZ,0,B,[Bc],0,3,0,0,["m",APM(ANm)],HV,0,B,[BK],3,3,0,0,0,LE,0,B,[HV],0,3,0,0,["qg",APL(AGw)],Lo,0,B,[HV],0,3,0,0,["qg",APL(ABJ)],TP,0,B,[FT],0,3,0,0,["t9",APL(AMX)],SD,0,B,[J1],0,3,0,0,0,Vj,0,B,[BZ],0,3,0,0,
["ba",APM(AF1)],Ew,0,B,[],0,0,0,0,0,Rs,0,Ew,[Ev],0,0,0,0,0,Yd,0,B,[BK],1,3,0,0,0,W$,0,B,[Bc],0,0,0,0,0,PQ,0,B,[Cu],4,3,0,0,0,Q$,0,B,[],3,3,0,0,0,ZV,0,B,[],0,3,0,0,0,Vf,0,Ea,[Cl],0,3,0,0,0,E3,0,B,[],0,0,0,0,0,GX,0,B,[],4,3,0,0,0,To,0,B,[],0,3,0,0,0,FX,0,B,[],3,3,0,0,0,RY,0,B,[FX],0,3,0,0,["h$",APO(AH9)],RZ,0,B,[FX],0,3,0,0,["h$",APO(AF2)],Hc,0,B,[Cu,Cl],0,3,0,0,0,IJ,0,B,[],3,3,0,0,0,Qr,0,B,[IJ],0,3,0,0,0,Nx,0,B,[IJ],3,3,0,0,0,YU,0,B,[Nx],0,3,0,0,0,QV,0,B,[FX],0,3,0,0,["h$",APO(AIQ)],QU,0,B,[DI],0,3,0,0,["cZ",
APM(AMp)],QT,0,B,[DI],0,3,0,0,["cZ",APM(AJV)],QW,0,B,[FX],0,3,0,0,["h$",APO(AIk)],By,0,B,[],1,0,0,0,["b3",APO(GT),"b7",APP(G2),"gY",APL(ADm),"I",APM(ALM),"bE",APM(ALL),"eT",APL(AMx),"dW",APL(H9)],S7,0,B,[],3,3,0,0,0,TR,0,B,[S7],0,3,0,0,0,QI,0,Ea,[Cl],0,3,0,0,0,V0,0,B,[Bc],0,3,0,0,["m",APM(AIV)],V1,0,B,[Bc],0,3,0,0,["m",APM(AFd)],Pj,0,B,[Bc],0,3,0,0,["m",APM(AIE)],Cw,0,By,[],0,0,0,K5,["c",APO(ACN),"A",APM(AC$)],FY,0,B,[],0,0,0,0,0,HN,0,BI,[],0,3,0,0,0,Si,0,B,[],0,3,0,0,0]);
$rt_metadata([U4,0,B,[BZ],0,3,0,0,["ba",APM(AJu)],Zh,0,B,[BK],3,3,0,0,0,Sm,0,B,[BZ],0,3,0,0,["ba",APM(AJd)],Qn,0,Cw,[],0,0,0,0,["c",APO(ACk),"A",APM(AKv)],Vz,0,Cw,[],0,0,0,0,["c",APO(ADW)],Oz,0,Cw,[],0,0,0,0,["c",APO(ADi)],Rt,0,Cw,[],0,0,0,0,["c",APO(ACq),"A",APM(AJl)],E1,0,Cw,[],0,0,0,0,["c",APO(AL1)],BU,0,By,[],1,0,0,0,["c",APO(AM4),"bK",APL(ALd),"A",APM(AGC)],AAG,0,BU,[],0,0,0,0,["bg",APN(AKO),"b3",APO(AE3),"b7",APP(ADP),"A",APM(ACn)],BO,0,By,[],0,0,0,0,["c",APO(AFH),"I",APM(AJf),"bE",APM(AHj),"A",APM(AJM),
"dW",APL(ADK)],H3,0,BO,[],0,0,0,0,["c",APO(AI1),"A",APM(AJ8)],Dn,0,H3,[],0,0,0,0,["c",APO(AEi),"I",APM(AJT)],LC,0,Dn,[],0,0,0,0,["c",APO(AJa),"A",APM(ALR)],T3,0,Dn,[],0,0,0,0,["c",APO(AC6),"A",APM(ALh)],PW,0,Dn,[],0,0,0,0,["c",APO(ADH),"A",APM(ANk)],RS,0,Dn,[],0,0,0,0,["c",APO(ABZ),"A",APM(AKk)],FN,0,BO,[],0,0,0,0,["c",APO(ACe),"b3",APO(AHD),"b7",APP(AKz),"bE",APM(AHf),"eT",APL(AJi),"dW",APL(AMA)],F1,0,B,[],1,0,0,0,0,Q,0,F1,[],1,0,0,NA,["c0",APL(AC8),"en",APL(ACB),"id",APL(AK_),"gf",APL(AMv)],Xs,0,Q,[],0,0,
0,0,["i",APM(CF),"c0",APL(CA),"en",APL(AEY),"id",APL(ALB),"ei",APL(AIs),"gf",APL(AE$)],Ih,0,Bo,[],0,3,0,0,0,DC,0,By,[],1,0,0,0,["bE",APM(AKA),"A",APM(ALW),"dW",APL(AHV)],CH,0,DC,[],0,0,0,0,["c",APO(AB2)],EH,0,CH,[],0,0,0,0,["c",APO(ACQ)],Cx,0,DC,[],0,0,0,0,["c",APO(ACd)],D7,0,CH,[],0,0,0,0,["c",APO(AHI),"I",APM(ANn)],Ue,0,CH,[],0,0,0,0,["c",APO(AMW),"b3",APO(AIl)],U,0,B,[],1,0,0,0,0,CU,0,BI,[],0,3,0,0,0,LQ,0,F1,[DE],0,0,0,0,["ei",APL(AIw)],M8,0,By,[],0,0,0,0,["c",APO(AG0),"A",APM(AJe)],UX,0,B,[DE,Cu],0,3,0,
0,0,LI,0,BO,[],0,0,0,0,0,O_,0,BO,[],0,0,0,0,["c",APO(ACL),"I",APM(AIZ),"A",APM(ADo),"bE",APM(AC7)],Dc,0,BO,[],0,0,0,0,["c",APO(AEP),"i",APM(AFm),"bE",APM(ACH),"I",APM(AK1),"A",APM(AE0)],Ie,0,Dc,[],0,0,0,0,["i",APM(AGD)],Xj,0,BU,[],0,0,0,0,["bg",APN(AG1)],DR,0,BU,[],0,0,0,0,["bg",APN(Ll),"bE",APM(AJh)],NB,0,BO,[],0,0,0,0,["I",APM(AHH),"c",APO(ABQ),"bE",APM(ADf),"A",APM(ALE)],D0,0,BU,[],0,0,0,0,["bK",APL(AGK),"bg",APN(AFS),"b3",APO(AEN),"b7",APP(AGR),"bE",APM(ALx)],AA8,0,BU,[],0,0,0,0,["bg",APN(ABK)],Wm,0,BU,
[],0,0,0,0,["bg",APN(AB8)],EM,0,BO,[],0,0,0,0,["I",APM(AMz),"c",APO(AI0),"bE",APM(AG2),"A",APM(AJU)],Vi,0,EM,[],0,0,0,0,0,R4,0,EM,[],0,0,0,0,0,V$,0,Cx,[],0,0,0,0,["c",APO(AD3)],Oq,0,Cx,[],0,0,0,0,["c",APO(AH_)],Ff,0,Cx,[],0,0,0,0,["c",APO(AKZ),"I",APM(AL6)],N5,0,Ff,[],0,0,0,0,["c",APO(AGN),"I",APM(AIA)]]);
$rt_metadata([EL,0,Cx,[],0,0,0,0,["c",APO(ANi)],L1,0,EL,[],0,0,0,0,["c",APO(AGf)],Qg,0,Cx,[],0,0,0,0,["c",APO(AMJ)],Pk,0,Ff,[],0,0,0,0,["c",APO(ADp)],SW,0,EL,[],0,0,0,0,["c",APO(ACv)],Qh,0,DC,[],0,0,0,0,["c",APO(AM7),"b3",APO(ALa)],Ne,0,DC,[],0,0,0,0,["c",APO(AJj),"b3",APO(ABV)],El,0,B,[],1,0,0,0,0,V_,0,CH,[],0,0,0,0,["c",APO(ACw)],T$,0,D7,[],0,0,0,0,["c",APO(AH8)],NT,0,EH,[],0,0,0,0,["c",APO(AKB)],Pe,0,CH,[],0,0,0,0,["c",APO(AJc)],Sg,0,D7,[],0,0,0,0,["c",APO(ACF)],PX,0,EH,[],0,0,0,0,["c",APO(AKQ)],Jh,0,By,
[],4,0,0,0,["c",APO(AHh),"A",APM(AGr)],XT,0,By,[],0,0,0,0,["c",APO(AC4),"A",APM(ADe)],M_,0,By,[],0,0,0,0,["c",APO(AGF),"A",APM(ANc)],U2,0,By,[],4,0,0,0,["c",APO(AJE),"A",APM(ADS)],UB,0,By,[],0,0,0,0,["c",APO(AIY),"A",APM(ABI)],Ma,0,By,[],0,0,0,0,["c",APO(ADI),"A",APM(AFy)],AAX,0,BO,[],0,0,0,0,["c",APO(AMO),"I",APM(ADh),"gY",APL(AIH),"A",APM(ADg)],Xq,0,BO,[],4,0,0,0,["c",APO(AIR),"I",APM(AKs),"gY",APL(ABE),"A",APM(AM3)],AAO,0,By,[],4,0,0,0,["c",APO(AG4),"A",APM(AFu)],Zf,0,By,[],0,0,0,0,["c",APO(AIX),"A",APM(AFi)],Wi,
0,By,[],0,0,0,0,["c",APO(AGh),"A",APM(ADV)],Gi,0,BO,[],0,0,0,0,["c",APO(ACA),"I",APM(AJR),"A",APM(AJ$)],AAT,0,Gi,[],0,0,0,0,["c",APO(AD1),"b3",APO(ALP),"b7",APP(ACl),"bE",APM(AH2)],Yw,0,Gi,[],0,0,0,0,["c",APO(AHx)],M7,0,FD,[G6],0,3,0,0,["kR",APP(AE_),"jU",APO(AC9),"g7",APM(ADw),"ll",APN(ALc)],Qj,0,BU,[],0,0,0,0,["bg",APN(AEg),"b3",APO(AC0),"b7",APP(AFx),"bE",APM(AF3)],Wh,0,BU,[],0,0,0,0,["bg",APN(AHF)],L6,0,BU,[],0,0,0,0,["bg",APN(AKE)],Gh,0,B,[],4,0,0,AKi,0,Lu,0,BU,[],0,0,0,0,["bg",APN(AKJ)],JN,0,BO,[],0,0,
0,0,["I",APM(AI_),"c",APO(ADT),"b3",APO(AF0),"b7",APP(AEm),"bE",APM(ACj),"A",APM(ALk)],J2,0,BO,[],0,0,0,0,["I",APM(ADv),"c",APO(AB0),"b3",APO(AJq),"b7",APP(AKC),"bE",APM(AEh),"A",APM(AJy)],Du,0,BU,[],0,0,0,0,["bg",APN(AJ_),"b3",APO(AIt),"b7",APP(ADu),"bE",APM(AJ0)],Ti,0,El,[],0,0,0,0,["gP",APM(ADF),"rB",APN(AJ6)],Tj,0,El,[],0,0,0,0,["gP",APM(AKR),"rB",APN(AMq)],Z4,0,B,[],0,0,0,0,0,WE,0,B,[],0,0,0,0,0,JK,0,U,[],0,0,0,0,["x",APL(YC)],IY,0,U,[],0,0,0,0,["x",APL(Y9)],ZY,0,U,[],0,0,0,0,["x",APL(AKu)],AAr,0,U,[],
0,0,0,0,["x",APL(ALm)],AAt,0,U,[],0,0,0,0,["x",APL(AEQ)],JE,0,U,[],0,0,0,0,["x",APL(Xu)],Kf,0,JE,[],0,0,0,0,["x",APL(Ya)],ABt,0,U,[],0,0,0,0,["x",APL(AFZ)],Lh,0,Kf,[],0,0,0,0,["x",APL(Wg)]]);
$rt_metadata([YM,0,Lh,[],0,0,0,0,["x",APL(AHW)],Y4,0,U,[],0,0,0,0,["x",APL(AEc)],XN,0,U,[],0,0,0,0,["x",APL(AHT)],XD,0,U,[],0,0,0,0,["x",APL(AMu)],AAx,0,U,[],0,0,0,0,["x",APL(AID)],ABD,0,U,[],0,0,0,0,["x",APL(ABS)],Z5,0,U,[],0,0,0,0,["x",APL(AGm)],ZP,0,U,[],0,0,0,0,["x",APL(AKe)],AAI,0,U,[],0,0,0,0,["x",APL(AEa)],WV,0,U,[],0,0,0,0,["x",APL(AEv)],Wz,0,U,[],0,0,0,0,["x",APL(AMo)],Z_,0,U,[],0,0,0,0,["x",APL(ABL)],AAj,0,U,[],0,0,0,0,["x",APL(AG7)],X6,0,U,[],0,0,0,0,["x",APL(AEE)],Y7,0,U,[],0,0,0,0,["x",APL(AFB)],ABh,
0,U,[],0,0,0,0,["x",APL(AHa)],AAg,0,U,[],0,0,0,0,["x",APL(ALH)],Yt,0,U,[],0,0,0,0,["x",APL(AJD)],X5,0,U,[],0,0,0,0,["x",APL(AIu)],ABz,0,U,[],0,0,0,0,["x",APL(AKo)],It,0,U,[],0,0,0,0,["x",APL(Y5)],AAL,0,It,[],0,0,0,0,["x",APL(AIf)],YR,0,JK,[],0,0,0,0,["x",APL(ACX)],X1,0,IY,[],0,0,0,0,["x",APL(AFO)],XI,0,U,[],0,0,0,0,["x",APL(AHl)],XX,0,U,[],0,0,0,0,["x",APL(AMe)],YG,0,U,[],0,0,0,0,["x",APL(AFc)],YN,0,U,[],0,0,0,0,["x",APL(ABM)],XJ,0,B,[],4,0,0,0,0,Xh,0,B,[],4,3,0,0,0,Mc,0,B,[],0,3,0,0,0,AAc,0,B,[],0,3,0,0,0,Yo,
0,B,[],4,3,0,0,0,Xr,0,B,[DI],0,3,0,0,0,Oc,0,B,[],1,3,0,0,0,Td,0,B,[DI],0,0,0,0,["cZ",APM(AEU)],Ud,0,Q,[],0,0,0,0,["i",APM(AEW)],Ub,0,Q,[],0,0,0,0,["i",APM(ACb)],Nj,0,Q,[],0,0,0,0,["i",APM(AHd),"ei",APL(AFF)],Nq,0,Q,[],0,0,0,0,["i",APM(AKc)],No,0,Q,[],0,0,0,0,["i",APM(AKI)],Np,0,Q,[],0,0,0,0,["i",APM(AHE)],Nt,0,Q,[],0,0,0,0,["i",APM(AEz)],Nu,0,Q,[],0,0,0,0,["i",APM(ABF)],Nr,0,Q,[],0,0,0,0,["i",APM(AFJ)],Ns,0,Q,[],0,0,0,0,["i",APM(AHG)],Nv,0,Q,[],0,0,0,0,["i",APM(ALS)],Nw,0,Q,[],0,0,0,0,["i",APM(AD7)],Ni,0,Q,
[],0,0,0,0,["i",APM(ANq)],NW,0,Q,[],0,0,0,0,["i",APM(AFN)]]);
$rt_metadata([Ng,0,Q,[],0,0,0,0,["i",APM(AD6)],Nh,0,Q,[],0,0,0,0,["i",APM(AFq)],Nm,0,Q,[],0,0,0,0,["i",APM(AGH)],Nf,0,Q,[],0,0,0,0,["i",APM(ALt)],Nk,0,Q,[],0,0,0,0,["i",APM(ADa)],Nl,0,Q,[],0,0,0,0,["i",APM(AJx)],Fm,0,Cg,[],12,0,0,Rh,0,V6,0,B,[Bc],0,3,0,0,0,KF,0,B,[],3,3,0,0,0,Rd,0,B,[KF],4,3,0,0,0,ZQ,0,B,[],0,3,0,0,0,WW,0,B,[],0,3,0,0,0,RX,0,B,[],32,0,0,AON,0,Rn,0,B,[Bc],0,3,0,0,["m",APM(AJ2)],VC,0,B,[Bc],0,3,0,0,0,U3,0,B,[Ei],0,3,0,0,0,EB,0,B,[],0,3,0,0,0,I6,0,Ec,[],1,0,0,0,["d7",APM(ABH),"kE",APM(AGQ)],Tu,
0,I6,[],0,0,0,0,["d7",APM(ABH),"kE",APM(AGQ)],Ke,0,Dt,[],1,0,0,0,0,Ts,0,Ke,[],0,0,0,0,0,KI,0,D8,[J8],1,0,0,0,["d7",APM(ABH),"hp",APL(AEe),"ls",APM(AH1),"kE",APM(AGV)],Tt,0,KI,[],0,0,0,0,["d7",APM(ABH),"kD",APM(AH6),"cr",APL(AHi),"bQ",APL(AEG),"dC",APL(ACx)],Tq,0,B,[Ev],0,0,0,0,["b$",APL(ACi),"bJ",APL(AJk),"j7",APL(AKD)],N_,0,B,[Ev],3,3,0,0,0,Tr,0,B,[N_],0,0,0,0,0,V5,0,B,[Gn],0,3,0,0,0,LW,0,FN,[],0,0,0,0,["b3",APO(AFg),"b7",APP(ANh),"eT",APL(ADR)],K_,0,Bo,[],0,3,0,0,0,P8,0,B,[Bc],0,3,0,0,["m",APM(ADO)],Gj,0,
B,[BK],1,3,0,0,0,XG,0,Gj,[],1,3,0,0,0,Z$,0,Gj,[],1,3,0,0,0,Xf,0,B,[],3,3,0,0,0,PD,0,B,[BZ],0,3,0,0,["ba",APM(ABR)],QO,0,B,[Bc],0,3,0,0,["m",APM(AHX)],QN,0,B,[Bc],0,3,0,0,["m",APM(AJO)],OM,0,B,[Bc],0,3,0,0,0,OL,0,B,[Bc],0,3,0,0,0,Q3,0,B,[Bc],0,3,0,0,0,Sb,0,B,[Bc],0,3,0,0,0,ST,0,Ec,[],0,0,0,0,["d7",APM(ABH),"kE",APM(AGQ)],N2,0,En,[],0,0,0,0,["d7",APM(ABH),"kE",APM(AGQ)],Tb,0,B,[KF],0,0,0,0,0,U_,0,B,[BZ],0,3,0,0,["ba",APM(AEq)],Nc,0,B,[Bc],0,3,0,0,["m",APM(AD_)],LH,0,B,[],0,3,0,0,0,PS,0,B,[],0,3,0,0,0,R6,0,B,[Bh],
0,3,0,0,["t",APL(ALb)],MD,0,B,[Bc],0,3,0,0,["m",APM(AIe)]]);
$rt_metadata([TT,0,B,[Bc],0,3,0,0,["m",APM(AFD)],B8,0,Cg,[],12,3,0,XV,0,Dm,0,B,[],3,3,0,AH$,0,CC,0,B,[],3,3,0,AAv,0,Ca,0,Cg,[],12,3,0,ZF,0,C_,0,B,[],3,3,0,ACt,0,SH,0,Ew,[Ev],0,0,0,0,0,PV,0,Ew,[Ev],0,0,0,0,0,Rz,0,Q,[],0,0,0,0,["i",APM(ALZ)],LG,0,Q,[],0,0,0,0,["i",APM(ACV)],Qz,0,Q,[],0,0,0,0,["i",APM(ACC)],Qy,0,Q,[],0,0,0,0,["i",APM(AFb)],UL,0,Q,[],0,0,0,0,["i",APM(AGx)],NM,0,Q,[],0,0,0,0,["i",APM(AL3)],M2,0,Q,[],0,0,0,0,["i",APM(AI6)],Pz,0,Q,[],0,0,0,0,["i",APM(AKh)],Lz,0,Q,[],0,0,0,0,["i",APM(AM0)],LF,0,Q,[],
0,0,0,0,["i",APM(AEl)],MC,0,Q,[],0,0,0,0,["i",APM(AL$)],N9,0,Q,[],0,0,0,0,["i",APM(AHQ)],Of,0,Q,[],0,0,0,0,["i",APM(AJP)],R0,0,Q,[],0,0,0,0,["i",APM(ALT)],Re,0,Q,[],0,0,0,0,["i",APM(AME)],LN,0,Q,[],0,0,0,0,["i",APM(AEb)],K2,0,Q,[],0,0,0,0,["i",APM(AI9)],Qq,0,K2,[],0,0,0,0,["i",APM(AK2)],SN,0,B,[],3,3,0,AOj,0,Q0,0,B,[Bc],0,3,0,0,["m",APM(AFt)],U5,0,B,[BZ],0,3,0,0,["ba",APM(AFz)],U6,0,B,[BZ],0,3,0,0,["ba",APM(AC_)],Mb,0,B,[Bh],0,3,0,0,0,Yz,0,B,[BK],1,3,0,0,0,SJ,0,B,[BZ],0,3,0,0,["ba",APM(AMG)],SF,0,B,[BZ],0,3,
0,0,["ba",APM(AHo)],LB,0,B,[Bh],0,3,0,0,["t",APL(AFY)],VD,0,B,[],3,3,0,AOY,0,Qa,0,B,[HV],0,3,0,0,["qg",APL(AKN)],Z8,0,B,[],3,3,0,0,0,YT,0,B,[Gb],0,3,0,0,0,TQ,0,B,[],0,3,0,0,0,MU,0,B,[Ei],0,3,0,0,["lK",APM(ANd)],W5,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.K8=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
Bw.prototype.valueOf=Bw.prototype.toString;B.prototype.toString=function(){return $rt_ustr(ADr(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var ATy=Long_add;var Ji=Long_sub;var AIm=Long_mul;var ATz=Long_div;var ATA=Long_rem;var ATB=Long_or;var Wa=Long_and;var ATC=Long_xor;var ATD=Long_shl;var ATE=Long_shr;var APc=Long_shru;var ATF=Long_compare;var AEA=Long_eq;var ATG=Long_ne;var ANX=Long_lt;var ATH=Long_le;var ATI=Long_gt;var ANU=Long_ge;var ATJ=Long_not;var AOE=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AHv);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=O3.prototype;c.f=c.ba;c=L4.prototype;c.f=c.ba;c=WM.prototype;c.createEntityReference=c.AC;c.getElementById=c.Ed;c.createTextNode=c.DT;c.hasChildNodes=c.Ca;c.querySelectorAll=c.Af;c.removeChild=c.FX;c.cloneNode=c.yw;c.createComment=c.HU;c.insertBefore=c.A7;c.getElementsByTagNameNS=c.Gj;c.hasAttributes=c.Dp;c.normalize=c.H6;c.hasChildNodesJS=c.HR;c.getElementsByTagName=c.G4;c.appendChild=c.y0;c.createAttributeNS=c.EF;c.dispatchEvent=c.Hs;c.replaceChild=c.zs;c.createElementNS=c.Bs;c.createCDATASection
=c.F8;c.querySelector=c.Dn;c.createElement=c.Fe;c.isSupported=c.F9;c.importNode=c.Bq;c.removeEventListener=c.Bh;c.createAttribute=c.Hv;c.createDocumentFragment=c.xO;c.createProcessingInstruction=c.Av;c.addEventListener=c.Fb;Object.defineProperty(c,"nodeName",{get:c.yZ});Object.defineProperty(c,"documentElement",{get:c.CT});Object.defineProperty(c,"childNodes",{get:c.FK});Object.defineProperty(c,"prefix",{get:c.Bz,set:c.Ih});Object.defineProperty(c,"implementation",{get:c.Gx});Object.defineProperty(c,"textContent",
{get:c.H4,set:c.DR});Object.defineProperty(c,"parentNode",{get:c.Ea});Object.defineProperty(c,"nextSibling",{get:c.CG});Object.defineProperty(c,"nodeType",{get:c.Fy});Object.defineProperty(c,"doctype",{get:c.Cx});Object.defineProperty(c,"localName",{get:c.GZ});Object.defineProperty(c,"nodeValue",{get:c.Cc,set:c.HH});Object.defineProperty(c,"firstChild",{get:c.Hc});Object.defineProperty(c,"lastChild",{get:c.Fm});Object.defineProperty(c,"previousSibling",{get:c.yD});Object.defineProperty(c,"namespaceURI",{get:
c.z2});Object.defineProperty(c,"attributes",{get:c.BG});Object.defineProperty(c,"ownerDocument",{get:c.Aa});c=YP.prototype;c.get=c.G5;Object.defineProperty(c,"length",{get:c.Go});c=ME.prototype;c.f=c.ba;c=Xy.prototype;c.removeEventListener=c.Ah;c.dispatchEvent=c.Be;c.addEventListener=c.Ez;c=RA.prototype;c.f=c.ba;c=RC.prototype;c.f=c.ba;c=RB.prototype;c.f=c.ba;c=Ty.prototype;c.onAnimationFrame=c.Dr;c=Tx.prototype;c.f=c.Hp;c=Tv.prototype;c.handleEvent=c.bU;c=Q8.prototype;c.f=c.ba;c=Un.prototype;c.handleEvent=
c.bU;c=Uo.prototype;c.handleEvent=c.bU;c=Up.prototype;c.handleEvent=c.bU;c=Uq.prototype;c.handleEvent=c.bU;c=Ur.prototype;c.handleEvent=c.bU;c=Us.prototype;c.handleEvent=c.bU;c=Ut.prototype;c.handleEvent=c.bU;c=Uu.prototype;c.handleEvent=c.bU;c=Uv.prototype;c.handleEvent=c.bU;c=Uw.prototype;c.handleEvent=c.bU;c=VR.prototype;c.handleEvent=c.bU;c=VS.prototype;c.handleEvent=c.bU;c=VT.prototype;c.handleEvent=c.bU;c=VU.prototype;c.handleEvent=c.bU;c=Sx.prototype;c.handleEvent=c.bU;c=Vs.prototype;c.f=c.ba;c=Vt.prototype;c.f
=c.ba;c=Tk.prototype;c.handleEvent=c.bU;c=Mx.prototype;c.accept=c.HI;c=OO.prototype;c.f=c.ba;c=OW.prototype;c.f=c.ba;c=OY.prototype;c.f=c.ba;c=Vl.prototype;c.f=c.ba;c=Vk.prototype;c.f=c.ba;c=UG.prototype;c.f=c.ba;c=UF.prototype;c.f=c.ba;c=Vg.prototype;c.handleEvent=c.bU;c=OU.prototype;c.f=c.ba;c=LE.prototype;c.onTimer=c.qg;c=Lo.prototype;c.onTimer=c.qg;c=Vj.prototype;c.f=c.ba;c=U4.prototype;c.f=c.ba;c=Sm.prototype;c.f=c.ba;c=PD.prototype;c.f=c.ba;c=U_.prototype;c.f=c.ba;c=U5.prototype;c.f=c.ba;c=U6.prototype;c.f
=c.ba;c=SJ.prototype;c.f=c.ba;c=SF.prototype;c.f=c.ba;c=Qa.prototype;c.onTimer=c.qg;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);