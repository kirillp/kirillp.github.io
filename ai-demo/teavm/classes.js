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
function $rt_cls(cls){return ZH(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Gy(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b5.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AKI(t);}
function $rt_throwableCause(t){return AKN(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(APO());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return APP(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(APQ());}
function $rt_throwCCE(){}
var A=Object.create(null);
var K=$rt_throw;var BF=$rt_compare;var APR=$rt_nullCheck;var E=$rt_cls;var O=$rt_createArray;var HF=$rt_isInstance;var APS=$rt_nativeThread;var APT=$rt_suspending;var APU=$rt_resuming;var APV=$rt_invalidPointer;var C=$rt_s;var Bg=$rt_eraseClinit;var V=$rt_imul;var ET=$rt_wrapException;var APW=$rt_checkBounds;var APX=$rt_checkUpperBound;var APY=$rt_checkLowerBound;var APZ=$rt_wrapFunction0;var AP0=$rt_wrapFunction1;var AP1=$rt_wrapFunction2;var AP2=$rt_wrapFunction3;var AP3=$rt_wrapFunction4;var F=$rt_classWithoutFields;var G
=$rt_createArrayFromData;var AOu=$rt_createCharArrayFromData;var AP4=$rt_createByteArrayFromData;var AP5=$rt_createShortArrayFromData;var Fu=$rt_createIntArrayFromData;var AP6=$rt_createBooleanArrayFromData;var AP7=$rt_createFloatArrayFromData;var AP8=$rt_createDoubleArrayFromData;var ADW=$rt_createLongArrayFromData;var APN=$rt_createBooleanArray;var Eb=$rt_createByteArray;var AP9=$rt_createShortArray;var B2=$rt_createCharArray;var Bv=$rt_createIntArray;var AP$=$rt_createLongArray;var ACa=$rt_createFloatArray;var AP_
=$rt_createDoubleArray;var BF=$rt_compare;var AQa=$rt_castToClass;var AQb=$rt_castToInterface;var AQc=Long_toNumber;var BH=Long_fromInt;var AQd=Long_fromNumber;var Dg=Long_create;var AAt=Long_ZERO;var AQe=Long_hi;var X6=Long_lo;
function B(){this.$id$=0;}
function AQf(){var a=new B();TT(a);return a;}
function TT(a){}
function Bt(a){return ZH(a.constructor);}
function AH6(a,b){return a!==b?0:1;}
function ADK(a){var b,c,d,e,f,g,h,i,j;b=H4(a);if(!b)c=C(0);else{d=(((32-MF(b)|0)+4|0)-1|0)/4|0;e=B2(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Gq((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Gy(e);}j=new R;T(j);J(J(j,C(1)),c);return S(j);}
function H4(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AHs(a){var b,c,d;if(!HF(a,DF)&&a.constructor.$meta.item===null){b=new TH;W(b);K(b);}b=ACh(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var Fb=F();
var AQg=null;var AQh=null;var AQi=null;var AQj=null;var AQk=null;function AHO(b){var c,d,e,f;Yt();AAL();WQ();ABR();Zc();Z$();X9();Zm();AAN();WL();Yu();ABd();AA8();WN();Z3();ZS();ZU();YW();Yd();Xa();ABB();Yw();AAd();Zt();c=(W2()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))XG(C(2),C(3));else{d=$rt_globals.fetch("teavm/worker.js");e=new Tu;e=d.then(Bi(e,"f"));c=new Pa;f=new Pc;e.then(Bi(c,"f"),Bi(f,"f"));}}
function Uu(b){Sf(AQg.cx,b);Th(AQh);}
function Yt(){AQi=null;AQj=FQ();AQk=FQ();}
var LY=F(0);
var Lu=F(0);
function Us(){var a=this;B.call(a);a.jw=null;a.fk=null;}
function ZH(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Us;c.fk=b;d=c;b.classObject=d;}return c;}
function QM(a){if(a.jw===null)a.jw=$rt_str(a.fk.$meta.name);return a.jw;}
function G1(a){return a.fk.$meta.primitive?1:0;}
function Hh(a){return ZH(a.fk.$meta.item);}
var XM=F();
function Bi(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Eq(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Xr=F();
function ACh(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ZL(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ZL(d[e],c))return 1;e=e+1|0;}return 0;}
function FM(){var a=this;B.call(a);a.k3=null;a.pZ=null;a.kW=0;a.lI=0;}
function AQl(){var a=new FM();W(a);return a;}
function AQm(a){var b=new FM();Br(b,a);return b;}
function W(a){a.kW=1;a.lI=1;}
function Br(a,b){a.kW=1;a.lI=1;a.k3=b;}
function AFo(a){return a;}
function AKI(a){return a.k3;}
function AKN(a){var b;b=a.pZ;if(b===a)b=null;return b;}
var DE=F(FM);
function AQn(){var a=new DE();Z6(a);return a;}
function Z6(a){W(a);}
var Bq=F(DE);
function APP(a){var b=new Bq();AMl(b,a);return b;}
function AMl(a,b){Br(a,b);}
var YZ=F(Bq);
var Cu=F(0);
var Ck=F(0);
var HR=F(0);
function Bw(){var a=this;B.call(a);a.b5=null;a.g9=0;}
var AQo=null;var AQp=null;var AQq=null;function FN(){FN=Bg(Bw);AL1();}
function AF$(){var a=new Bw();WH(a);return a;}
function Gy(a){var b=new Bw();If(b,a);return b;}
function DL(a,b,c){var d=new Bw();Le(d,a,b,c);return d;}
function WH(a){FN();a.b5=AQo;}
function If(a,b){FN();Le(a,b,0,b.data.length);}
function Le(a,b,c,d){var e;FN();e=B2(d);a.b5=e;C6(b,c,e,0,d);}
function K9(b){var c;FN();c=AF$();c.b5=b;return c;}
function I(a,b){var c,d;if(b>=0){c=a.b5.data;if(b<c.length)return c[b];}d=new Gm;W(d);K(d);}
function H(a){return a.b5.data.length;}
function DT(a){return a.b5.data.length?0:1;}
function OS(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=H(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){C6(a.b5,b,d,e,c);return;}}g=new BT;W(g);K(g);}
function Sz(a,b,c){var d,e,f;if((c+H(b)|0)>H(a))return 0;d=0;while(d<H(b)){e=I(b,d);f=c+1|0;if(e!=I(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Jo(a,b){if(a===b)return 1;return Sz(a,b,0);}
function DA(a,b){var c,d,e,f;if(a===b)return 1;if(H(b)>H(a))return 0;c=0;d=H(a)-H(b)|0;while(d<H(a)){e=I(a,d);f=c+1|0;if(e!=I(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Hp(a,b,c){var d,e,f,g,h;d=Ba(0,c);if(b<65536){e=b&65535;while(true){f=a.b5.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Jy(b);h=KE(b);while(true){f=a.b5.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function GD(a,b,c){var d,e,f,g,h;d=Be(c,H(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b5.data[d]==e)break;d=d+(-1)|0;}return d;}f=Jy(b);g=KE(b);while(true){if(d<1)return (-1);h=a.b5.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function OC(a,b,c){var d,e,f;d=Ba(0,c);e=H(a)-H(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=H(b))break a;if(I(a,d+f|0)!=I(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AJo(a,b){return OC(a,b,0);}
function OP(a,b,c){var d,e;d=Be(c,H(a)-H(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=H(b))break a;if(I(a,d+e|0)!=I(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function YF(a,b){return OP(a,b,H(a));}
function B9(a,b,c){var d,e;d=BF(b,c);if(d>0){e=new BT;W(e);K(e);}if(!d){FN();return AQp;}if(!b&&c==H(a))return a;return DL(a.b5,b,c-b|0);}
function DS(a,b){return B9(a,b,H(a));}
function O1(a,b,c){return B9(a,b,c);}
function GW(a,b){var c,d,e,f,g,h;if(DT(b))return a;if(DT(a))return b;c=B2(H(a)+H(b)|0);d=c.data;e=0;f=0;while(f<H(a)){g=e+1|0;d[e]=I(a,f);f=f+1|0;e=g;}g=0;while(g<H(b)){h=e+1|0;d[e]=I(b,g);g=g+1|0;e=h;}return K9(c);}
function Tg(a,b,c){var d,e,f,g;d=new R;T(d);e=H(a)-H(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=H(b)){J(d,c);f=f+(H(b)-1|0)|0;break a;}if(I(a,f+g|0)!=I(b,g))break;g=g+1|0;}B0(d,I(a,f));}f=f+1|0;}J(d,DS(a,f));return S(d);}
function QL(a){var b,c;b=0;c=H(a)-1|0;a:{while(b<=c){if(I(a,b)>32)break a;b=b+1|0;}}while(b<=c&&I(a,c)<=32){c=c+(-1)|0;}return B9(a,b,c+1|0);}
function ES(a){var b,c,d,e,f;b=a.b5.data;c=B2(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function DX(b){var c;FN();c=new R;T(c);return S(Bj(c,b));}
function B1(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bw))return 0;c=b;if(H(c)!=H(a))return 0;d=0;while(d<H(c)){if(I(a,d)!=I(c,d))return 0;d=d+1|0;}return 1;}
function JZ(a){var b,c,d,e;a:{if(!a.g9){b=a.b5.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.g9=(31*a.g9|0)+e|0;d=d+1|0;}}}return a.g9;}
function KN(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new FS;Br(b,C(4));K(b);}AQr=1;d=new P4;d.ji=O(Cw,10);d.fC=(-1);d.ef=(-1);d.bg=(-1);e=new FV;e.ea=1;e.bu=b;e.S=B2(H(b)+2|0);C6(ES(b),0,e.S,0,H(b));f=e.S.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.qP=g;e.fn=0;EF(e);EF(e);d.g=e;d.c$=0;d.kn=VQ(d,(-1),0,null);if(!CV(d.g)){b=new HK;h=d.g;Il(b,C(5),h.bu,h.cN);K(b);}if(d.m1)d.kn.dS();b=Bz();h=new Ro;h.hG=(-1);h.jI=(-1);h.vq=d;h.s6=d.kn;h.hW=a;h.hG=0;g=H(a);h.jI=g;e=new Tj;i=h.hG;j=d.fC;k=d.ef+1|0;l=d.bg+1|0;e.gO
=(-1);m=j+1|0;e.n1=m;e.di=Bv(m*2|0);f=Bv(l);e.iz=f;GG(f,(-1));if(k>0)e.kd=Bv(k);GG(e.di,(-1));VG(e,a,i,g);h.cf=e;e.eP=1;n=0;m=0;if(!H(a)){f=O(Bw,1);f.data[0]=C(5);}else{while(true){l=H(h.hW);if(!WV(h))l=h.jI;e=h.cf;if(e.dN>=0&&Yn(e)==1){e=h.cf;e.dN=H2(e);if(H2(h.cf)==Z9(h.cf)){e=h.cf;e.dN=e.dN+1|0;}g=h.cf.dN;g=g<=l&&LE(h,g)?1:0;}else g=LE(h,h.hG);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Bu(b,O1(a,m,ABt(h)));m=Yb(h);n=g;}a:{Bu(b,O1(a,m,H(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(H(Bo(b,g)))break a;E6(b,
g);}}if(g<0)g=0;f=GX(b,O(Bw,g));}return f;}
function AFy(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Be(H(a),H(b));e=0;while(true){if(e>=d){c=H(a)-H(b)|0;break a;}c=I(a,e)-I(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AL1(){AQo=B2(0);AQp=AF$();AQq=new RG;}
var FH=F(FM);
var Gs=F(FH);
var YE=F(Gs);
var Ea=F();
function Fz(){Ea.call(this);this.ba=0;}
var AQs=null;var AQt=null;function ALJ(a){var b=new Fz();X0(b,a);return b;}
function X0(a,b){a.ba=b;}
function J9(b){return (Mj(APA(20),b,10)).eg();}
function Iy(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new CT;Br(b,C(6));K(b);}d=H(b);if(0==d){b=new CT;Br(b,C(7));K(b);}if(c>=2&&c<=36){a:{e=0;switch(I(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new CT;W(b);K(b);}b:{c:{while(f<d){h=f+1|0;i=NZ(I(b,f));if(i<0){j=new CT;k=B9(b,0,d);b=new R;T(b);J(J(b,C(8)),k);Br(j,S(b));K(j);}if(i>=c){j=new CT;l=B9(b,0,d);b=new R;T(b);J(J(Bj(J(b,C(9)),c),C(10)),l);Br(j,S(b));K(j);}g=V(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new CT;k=B9(b,0,d);b=new R;T(b);J(J(b,C(11)),k);Br(j,S(b));K(j);}b=new CT;j=new R;T(j);Bj(J(j,C(12)),c);Br(b,S(j));K(b);}
function Ct(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AQt===null){AQt=O(Fz,256);c=0;while(true){d=AQt.data;if(c>=d.length)break a;d[c]=ALJ(c-128|0);c=c+1|0;}}}return AQt.data[b+128|0];}return ALJ(b);}
function AM2(a,b){if(a===b)return 1;return b instanceof Fz&&b.ba==a.ba?1:0;}
function MF(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Hr(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AHo(a,b){b=b;return BF(a.ba,b.ba);}
function AAL(){AQs=E($rt_intcls());}
function FB(){var a=this;B.call(a);a.J=null;a.D=0;}
function AQu(){var a=new FB();T(a);return a;}
function APA(a){var b=new FB();Fn(b,a);return b;}
function T(a){Fn(a,16);}
function Fn(a,b){a.J=B2(b);}
function Mj(a,b,c){return YQ(a,a.D,b,c);}
function YQ(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Co(a,b,b+1|0);else{Co(a,b,b+2|0);f=a.J.data;g=b+1|0;f[b]=45;b=g;}a.J.data[b]=Gq(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=V(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Co(a,b,b+i|0);if(e)e=b;else{f=a.J.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.J.data;b=e+1|0;f[e]=Gq($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ZB(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BF(c,0.0);if(!d){if(1.0/c===Infinity){Co(a,b,b+3|0);e=a.J.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Co(a,b,b+4|0);e=a.J.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.J.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.J.data;d=b+1|0;e[b]=45;}e=a.J.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AQv;Zu(c,f);d=f.jO;g=f.jq;h=f.nc;i=1;j=1;if(h)j=2;k=9;l=ALu(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Ba(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Co(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.J.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.J.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.J.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.J.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function ALu(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function B0(a,b){return a.ll(a.D,b);}
function Vx(a,b,c){Co(a,b,b+1|0);a.J.data[b]=c;return a;}
function ID(a,b){var c,d;c=a.J.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.J=My(a.J,d);}
function S(a){return DL(a.J,0,a.D);}
function Vi(a,b,c,d){return a.kQ(a.D,b,c,d);}
function LS(a,b,c,d,e){var f,g,h,i;Co(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.J.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Hs(a,b){return a.jU(b,0,b.data.length);}
function Co(a,b,c){var d,e,f,g;d=a.D;e=d-b|0;a.g0((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.J.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.D=a.D+(c-b|0)|0;}
var G4=F(0);
var R=F(FB);
function APp(){var a=new R();AMN(a);return a;}
function AMN(a){T(a);}
function J(a,b){var c;c=a.D;if(b===null)b=C(13);La(a,c,b);return a;}
function DJ(a,b){La(a,a.D,b);return a;}
function Bj(a,b){Mj(a,b,10);return a;}
function FC(a,b){var c,d,e,f,g,h,i,j;c=a.D;d=1;if(AOa(b,AAt)){d=0;b=AOT(b);}a:{if(Ho(b,BH(10))<0){if(d)Co(a,c,c+1|0);else{Co(a,c,c+2|0);e=a.J.data;f=c+1|0;e[c]=45;c=f;}a.J.data[c]=Gq(X6(b),10);}else{g=1;h=BH(1);i=KB(BH(-1),BH(10));b:{while(true){j=AIH(h,BH(10));if(Ho(j,b)>0){j=h;break b;}g=g+1|0;if(Ho(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Co(a,c,c+g|0);if(d)f=c;else{e=a.J.data;f=c+1|0;e[c]=45;}while(true){if(AEV(j,AAt))break a;e=a.J.data;c=f+1|0;e[f]=Gq(X6((KB(b,j))),10);b=WU(b,j);j=KB(j,BH(10));f=c;}}}return a;}
function I9(a,b){ZB(a,a.D,b);return a;}
function Wx(a,b){B0(a,b);return a;}
function IC(a,b){La(a,a.D,!b?C(14):C(15));return a;}
function ABh(a,b,c){var d,e,f,g,h,i;d=BF(b,c);if(d<=0){e=a.D;if(b<=e){if(d){f=e-c|0;a.D=e-(c-b|0)|0;g=0;while(g<f){h=a.J.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Gm;W(i);K(i);}
function Uc(a,b){var c,d,e,f;if(b>=0){c=a.D;if(b<c){c=c-1|0;a.D=c;while(b<c){d=a.J.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Gm;W(f);K(f);}
function AHl(a,b,c,d,e){LS(a,b,c,d,e);return a;}
function AEO(a,b,c,d){Vi(a,b,c,d);return a;}
function Xb(a){return a.D;}
function GK(a){return S(a);}
function AHq(a,b){ID(a,b);}
function AHS(a,b,c){Vx(a,b,c);return a;}
function La(a,b,c){var d,e,f;if(b>=0&&b<=a.D){a:{if(c===null)c=C(13);else if(DT(c))break a;ID(a,a.D+H(c)|0);d=a.D-1|0;while(d>=b){a.J.data[d+H(c)|0]=a.J.data[d];d=d+(-1)|0;}a.D=a.D+H(c)|0;d=0;while(d<H(c)){e=a.J.data;f=b+1|0;e[b]=I(c,d);d=d+1|0;b=f;}}return a;}c=new Gm;W(c);K(c);}
var E9=F(Gs);
var ZO=F(E9);
function AQw(a){var b=new ZO();ADS(b,a);return b;}
function ADS(a,b){Br(a,b);}
var Ys=F(E9);
function AQx(a){var b=new Ys();AD7(b,a);return b;}
function AD7(a,b){Br(a,b);}
var R3=F(0);
var C3=F(0);
function CY(b,c){if(b!==null)b.eG();return c;}
var NT=F(0);
function HD(){var a=this;B.call(a);a.jd=0;a.k2=0;a.j_=0;}
var AQy=0;function K1(a){AQy=AQy-1|0;}
function Jx(a,b,c){return Ga(a,b)+c|0;}
function Qs(){var a=this;HD.call(a);a.g5=null;a.c2=null;a.l5=null;}
function Fg(a){var b,c,d;b=a.c2;c=a.k2;d=a.j_;b.clearRect(0.0,0.0,c,d);}
function QY(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.c2;d="center";c.textAlign=d;break a;case 2:c=a.c2;d="right";c.textAlign=d;break a;default:break a;}d=a.c2;c="left";d.textAlign=c;}}
function CG(a,b){L1(a,b.mA);}
function L1(a,b){var c;if(a.l5!==b){c=a.c2;a.l5=b;c.font=b;}}
function Ei(a,b,c,d){var e,f,g;e=a.c2;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Ga(a,b){var c;c=$rt_ustr(b);return a.c2.measureText(c).width;}
function ADj(){return {alpha:false};}
var WR=F();
var W3=F();
var BG=F(0);
function I2(b){return b;}
var BO=F(0);
var Pa=F();
function AHc(a,b){var c,d,e,f,g,h,i;c=new Mn;d=new Mo;e=$rt_globals.URL.createObjectURL(b);f=new $rt_globals.Array();g=0;while(g<3){h=new $rt_globals.Worker(e);i=new MK;i.oL=h;i.oM=f;i.oN=3;i.oO=c;i.oH=d;i=Bi(i,"f");h.onmessage=i;g=g+1|0;}}
var Pc=F();
function AHt(a,b){KW(b);}
var J7=F();
var AQz=null;var AQA=null;function GL(){if(AQz===null)AQz=AIC(AQB,0);return AQz;}
function D2(){if(AQA===null)AQA=AIC(AQC,0);return AQA;}
function AOM(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Kb(b)&&(e+f|0)<=Kb(d)){a:{b:{if(b!==d){g=Hh(Bt(b));h=Hh(Bt(d));if(g!==null&&h!==null){if(g===h)break b;if(!G1(g)&&!G1(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fk;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ZL(n.constructor,o)?1:0)){Jq(b,c,d,e,j);b=new HJ;W(b);K(b);}j=j+1|0;k=m;}Jq(b,c,d,e,f);return;}if(!G1(g))break a;if(G1(h))break b;else break a;}b=new HJ;W(b);K(b);}}Jq(b,c,d,
e,f);return;}b=new HJ;W(b);K(b);}b=new BT;W(b);K(b);}d=new FS;Br(d,C(16));K(d);}
function C6(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Kb(b)&&(e+f|0)<=Kb(d)){Jq(b,c,d,e,f);return;}b=new BT;W(b);K(b);}
function Jq(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function D1(){return Long_fromNumber(new Date().getTime());}
var AAv=F();
var JN=F(0);
function Dv(){var a=this;B.call(a);a.js=null;a.jC=null;}
var DF=F(0);
function Jm(){var a=this;Dv.call(a);a.cq=0;a.bR=null;a.co=0;a.uz=0.0;a.j2=0;}
function FQ(){var a=new Jm();OF(a);return a;}
function AF7(a,b){return O(FT,b);}
function OF(a){var b;b=ABl(16);a.cq=0;a.bR=O(FT,b);a.uz=0.75;S0(a);}
function ABl(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Eg(a){var b;if(a.cq>0){a.cq=0;b=a.bR;Xw(b,0,b.data.length,null);a.co=a.co+1|0;}}
function S0(a){a.j2=a.bR.data.length*a.uz|0;}
function Iz(a,b){return RK(a,b)===null?0:1;}
function Tc(a){var b;b=new S1;b.p_=a;return b;}
function B7(a,b){var c;c=RK(a,b);if(c===null)return null;return c.cw;}
function RK(a,b){var c,d;if(b===null)c=Q2(a);else{d=b.k7();c=Pi(a,b,d&(a.bR.data.length-1|0),d);}return c;}
function Pi(a,b,c,d){var e;e=a.bR.data[c];while(e!==null&&!(e.h_==d&&WY(b,e.ch))){e=e.cm;}return e;}
function Q2(a){var b;b=a.bR.data[0];while(b!==null&&b.ch!==null){b=b.cm;}return b;}
function IQ(a){var b;if(a.js===null){b=new Oa;b.f5=a;a.js=b;}return a.js;}
function Dn(a,b,c){var d,e,f,g;if(b===null){d=Q2(a);if(d===null){a.co=a.co+1|0;d=SQ(a,null,0,0);e=a.cq+1|0;a.cq=e;if(e>a.j2)S9(a);}}else{e=b.k7();f=e&(a.bR.data.length-1|0);d=Pi(a,b,f,e);if(d===null){a.co=a.co+1|0;d=SQ(a,b,f,e);e=a.cq+1|0;a.cq=e;if(e>a.j2)S9(a);}}g=d.cw;d.cw=c;return g;}
function SQ(a,b,c,d){var e,f;e=new FT;V4(e,b,null);e.h_=d;f=a.bR.data;e.cm=f[c];f[c]=e;return e;}
function Yq(a,b){var c,d,e,f,g,h,i,j;c=ABl(!b?1:b<<1);d=O(FT,c);e=d.data;f=0;b=c-1|0;while(true){g=a.bR.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.h_&b;j=h.cm;h.cm=e[i];e[i]=h;h=j;}f=f+1|0;}a.bR=d;S0(a);}
function S9(a){Yq(a,a.bR.data.length);}
function WY(b,c){return b!==c&&!b.bp(c)?0:1;}
var Yc=F();
function XG(b,c){var d,e,f;d=(C2()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(C2()).getElementById($rt_ustr(b)).appendChild(d);}
function W2(){return (C2()).createElement("canvas");}
function KW(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AJq(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ABQ=F();
var Ht=F(0);
var Tu=F();
function AIU(a,b){return b.blob();}
var Gl=F(0);
var RG=F();
var BT=F(Bq);
var Zx=F();
function Kb(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AQD());}return b.data.length;}
function Z8(b,c){if(b===null){b=new FS;W(b);K(b);}if(b===E($rt_voidcls())){b=new BI;W(b);K(b);}if(c>=0)return AMu(b.fk,c);b=new Wg;W(b);K(b);}
function AMu(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var FS=F(Bq);
var HJ=F(Bq);
function CM(){B.call(this);this.jp=0;}
var AQE=null;var AQF=null;var AQG=null;var AQH=null;var AQI=null;var AQJ=null;var AQK=null;var AQL=null;var AQM=null;var AQN=null;function AM$(a){var b=new CM();Yk(b,a);return b;}
function Yk(a,b){a.jp=b;}
function ML(b){var c,d;c=AQJ.data;if(b>=c.length)return AM$(b);d=c[b];if(d===null){d=AM$(b);AQJ.data[b]=d;}return d;}
function U8(b){var c,d;c=new Bw;d=B2(1);d.data[0]=b;If(c,d);return c;}
function KS(b){return b>=65536&&b<=1114111?1:0;}
function Cm(b){return (b&64512)!=55296?0:1;}
function CJ(b){return (b&64512)!=56320?0:1;}
function Vl(b){return !Cm(b)&&!CJ(b)?0:1;}
function GA(b,c){return Cm(b)&&CJ(c)?1:0;}
function D4(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Jy(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function KE(b){return (56320|b&1023)&65535;}
function Ey(b){return FR(b)&65535;}
function FR(b){if(AQH===null){if(AQK===null)AQK=Z2();AQH=YA((AQK.value!==null?$rt_str(AQK.value):null));}return Ru(AQH,b);}
function D6(b){return FP(b)&65535;}
function FP(b){if(AQG===null){if(AQL===null)AQL=AAM();AQG=YA((AQL.value!==null?$rt_str(AQL.value):null));}return Ru(AQG,b);}
function Ru(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BF(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function SX(b,c){if(c>=2&&c<=36){b=NZ(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function NZ(b){var c,d,e,f,g,h,i,j,k,l;if(AQF===null){if(AQM===null)AQM=YH();c=(AQM.value!==null?$rt_str(AQM.value):null);d=AKO(ES(c));e=IK(d);f=Bv(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+LZ(d)|0;j=j+LZ(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AQF=f;}g=AQF.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BF(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Gq(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function FJ(b){var c;if(b<65536){c=B2(1);c.data[0]=b&65535;return c;}return AOu([Jy(b),KE(b)]);}
function Ce(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Vl(b&65535))return 19;if(AQI===null){if(AQN===null)AQN=ABG();d=(AQN.value!==null?$rt_str(AQN.value):null);e=O(Mc,16384);f=e.data;g=Eb(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<H(d)){m=Jp(I(d,l));if(m==64){l=l+1|0;m=Jp(I(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|V(c,Jp(I(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Jp(I(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AFu(k,k+i|0,KM(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AFu(k,k+i|0,KM(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AQI=CW(e,j);}e=AQI.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.qD)o=p+1|0;else{c=d.oI;if(b>=c)return d.o1.data[b-c|0];c=p-1|0;}}return 0;}
function Iw(b){a:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function FE(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ce(b)!=16?0:1;}
function Or(b){switch(Ce(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function P7(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Or(b);}return 1;}
function WQ(){AQE=E($rt_charcls());AQJ=O(CM,128);}
function Z2(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AAM(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function YH(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ABG(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Lo=F(0);
var Rt=F(0);
var DV=F(0);
var WW=F();
function Wz(b){return (C2()).getElementById($rt_ustr(b));}
function C2(){return $rt_globals.window.document;}
function AIQ(a){return a.C5();}
function ALo(a,b){return a.FB($rt_str(b));}
function AK_(a,b){a.Bt($rt_str(b));}
function AEr(a,b){return a.Ag($rt_str(b));}
function ACg(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AEH(a){return a.FE();}
function ALi(a,b,c){return a.D8($rt_str(b),$rt_str(c));}
function AG$(a,b,c,d){a.wa($rt_str(b),Eq(c,"handleEvent"),d?1:0);}
function AC7(a){return a.B7();}
function AJN(a){return !!a.F$();}
function AL0(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AIo(a){return a.BT();}
function AGI(a,b){a.DW($rt_str(b));}
function AIS(a){return !!a.A$();}
function ANr(a){return a.FO();}
function AHI(a){return $rt_ustr(a.x0());}
function AC0(a,b){return a.Cl(b?1:0);}
function AM3(a){return a.F9();}
function AGF(a,b,c){return a.GE($rt_str(b),$rt_str(c));}
function AIg(a,b,c){return a.A7(b,c?1:0);}
function AMx(a,b,c){return !!a.E9($rt_str(b),$rt_str(c));}
function ACj(a){return a.DL();}
function AGr(a){return $rt_ustr(a.Hl());}
function AET(a,b){return !!a.wA(b);}
function AFK(a,b){return a.Ie($rt_str(b));}
function AGW(a,b,c){return a.C2($rt_str(b),$rt_str(c));}
function AHM(a){return a.yU();}
function AC$(a,b){return a.FK($rt_str(b));}
function AFJ(a){return $rt_ustr(a.yg());}
function AJ$(a){a.A2();}
function AB5(a,b){return a.GJ($rt_str(b));}
function ALQ(a,b){return a.BF($rt_str(b));}
function ADB(a,b){return a.A1($rt_str(b));}
function ALT(a){return $rt_ustr(a.y_());}
function ADL(a,b,c){return a.C$(b,c);}
function AJZ(a,b){return a.xZ(b);}
function AKD(a){return a.EM();}
function AJj(a,b,c){a.vJ($rt_str(b),Eq(c,"handleEvent"));}
function AI2(a,b,c){return a.za(b,c);}
function ALN(a){return !!a.E5();}
function AM8(a,b){return a.CW($rt_str(b));}
function AI5(a,b,c,d){a.u5($rt_str(b),Eq(c,"handleEvent"),d?1:0);}
function AEK(a){return a.ER();}
function AD5(a,b,c){return a.Cj($rt_str(b),$rt_str(c));}
function ACJ(a){return $rt_ustr(a.zw());}
function AMY(a){return a.yE();}
function AJi(a){return a.yZ();}
function ACH(a){return a.E$();}
function AJk(a,b,c){a.ww($rt_str(b),Eq(c,"handleEvent"));}
function AEz(a,b){return a.G8(b);}
function AF1(a,b){a.yl($rt_str(b));}
function AKK(a){return $rt_ustr(a.x6());}
var Oi=F(0);
var Qm=F(0);
var Qa=F(0);
var R0=F(0);
var Vk=F(0);
var SZ=F(0);
var XI=F();
function AJn(a,b,c){a.ww($rt_str(b),Eq(c,"handleEvent"));}
function AHn(a,b,c){a.vJ($rt_str(b),Eq(c,"handleEvent"));}
function AGt(a,b,c,d){a.u5($rt_str(b),Eq(c,"handleEvent"),d?1:0);}
function ADf(a,b){return !!a.wA(b);}
function AEX(a,b,c,d){a.wa($rt_str(b),Eq(c,"handleEvent"),d?1:0);}
var BI=F(Bq);
var Gm=F(BT);
var Gx=F(0);
function FK(){var a=this;B.call(a);a.ch=null;a.cw=null;}
function AQO(a,b){var c=new FK();V4(c,a,b);return c;}
function V4(a,b,c){a.ch=b;a.cw=c;}
function AEx(a,b){var c,d;if(a===b)return 1;if(!HF(b,Gx))return 0;a:{b:{c:{d:{c=b;b=a.ch;if(b!==null){if(!b.bp(c.ch))break c;else break d;}if(c.ch!==null)break c;}b=a.cw;if(b!==null){if(!b.bp(c.cw))break c;else break b;}if(c.cw===null)break b;}d=0;break a;}d=1;}return d;}
function FT(){var a=this;FK.call(a);a.h_=0;a.cm=null;}
var Mn=F();
function AFD(a,b){var c,d,e,f,g,h,i,j;c=$rt_globals.fetch("fileList.txt");d=new PX;c=c.then(Bi(d,"f"));d=new PW;e=new PY;c.then(Bi(d,"f"),Bi(e,"f"));if((C2()).getElementById("codeEdit")===null)CE(D2(),C(17));else{f=new Ry;g=new TG;g.or=f;f.q1=g;g=new TE;g.ug=f;f.lH=g;d=new TF;d.qU=f;f.tb=new $rt_globals.ResizeObserver(Bi(d,"f"));g=new TD;g.nN=f;f.mq=g;f.hH=1;g=new Rc;d=new SS;ABf(d);g.iS=d;d=new N4;e=null;TT(d);d.w8=e;d.iH=AQP;g.o7=d;BU(d);e=new Rg;e.rf=d;g.t9=e;g.lh=b;h=b.length;i=0;while(i<h){d=b[i];j=new Rh;j.qb
=g;j.qa=i;e=Bi(j,"f");d.onmessage=e;d=b[i];e=YV();d.postMessage(e);i=i+1|0;}g.gc=0;g.j3=Bv(h);g.jA=Bv(h);f.lp=g;f.mi=(C2()).getElementById("codeEdit");g=W2();c=0;g.tabIndex=c;b=g.style;b.setProperty("width","100%");b.setProperty("height","100%");b.setProperty("outline","none");f.dj=g;f.mi.appendChild(g);b=f.dj;g=AJq(!!0,!!0,!!1,!!1);d=b.getContext("webgl2",g);if(d===null)XG(C(2),C(18));else{f.kR=AOv(f.dj,f.lH);b=new Tx;c=f.lH;AAK(b,d,new SG,1,3.0,1.0);b.w6=new SF;b.wq=c;f.fw=b;AKk(f.tb,f.dj,ACl());g=$rt_globals.window;c
=f.mq;g.addEventListener("resize",Bi(c,"handleEvent"));c=new Lp;b=f.fw;g=f.kR.b6;c.iV=b;c.cj=g;c.kJ=f;b=APj(c);AQg=b;f.eU=b;RP(f);}AQh=f;Th(f);}}
var Mo=F();
function AIi(a,b){KW(b);}
var Y3=F();
var Y9=F();
var AAO=F();
function Et(b){return $rt_str(b);}
var TN=F(0);
var Y0=F();
function AGc(a,b){return a.zY(b);}
function AH3(a){return a.E7();}
function MK(){var a=this;B.call(a);a.oL=null;a.oM=null;a.oN=0;a.oO=null;a.oH=null;}
function AJY(a,b){var c,d,e,f,g;c=a.oL;d=a.oM;e=a.oN;f=a.oO;g=a.oH;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var Py=F(0);
var NI=F(0);
function Ry(){var a=this;B.call(a);a.q1=null;a.lH=null;a.mi=null;a.dj=null;a.tb=null;a.mq=null;a.kR=null;a.fw=null;a.hH=0;a.v5=0;a.qx=null;a.eU=null;a.lp=null;}
function Th(a){a.dj.focus();}
function RP(a){a.v5=$rt_globals.requestAnimationFrame(Bi(a.q1,"onAnimationFrame"));}
function GE(a){a.hH=1;}
function RN(a,b,c){var d,e;a.kR.dg=Cd(b,c);d=a.dj;e=b;d.width=e;d=a.dj;e=c;d.height=e;d=a.fw;Bn(d.ds,b,c);e=d.br;d=d.ds;b=d.b;c=d.a;e.viewport(0,0,b,c);Ls(a.eU,a.fw.ds,Jr(a));I$(a.eU);}
function Mx(a){return $rt_globals.performance.now()/1000.0;}
function Jr(a){return $rt_globals.window.devicePixelRatio;}
function Up(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ABo(b,0);else{c=new Vv;d=$rt_globals.window.showOpenFilePicker();e=new Vu;e.pq=b;e.pp=c;d.then(Bi(e,"f"),Bi(c,"f"));}}
function En(a,b,c,d){var e,f,g,h;e=a.lp;f=e.gc;if(f>0){g=e.j3.data;f=f-1|0;e.gc=f;J8(e,b,c,d,g[f]);}else{h=e.iS;e=new UR;e.rS=b;e.sD=c;e.rz=d;b=new Sy;b.nr=e;c=h.iR;b.ss=c;if(c===null)h.jT=b;else c.rB=b;h.iR=b;h.bJ=h.bJ+1|0;h.he=h.he+1|0;}}
function UK(a,b,c,d,e){var f,g;f=a.lp;if(c>=f.lh.length)c=0;g=f.jA.data;g[c]=g[c]+1|0;J8(f,b,d,e,c);}
function ABM(b){var c;c=new Vj;c.m$=b;return c;}
var Eh=F(0);
var YO=F();
var Bh=F(0);
var YP=F();
var X1=F();
function YV(){return "ping";}
function ABE(b){return b===YV()?1:0;}
var PX=F();
function ACz(a,b){return b.text();}
var PW=F();
function ANw(a,b){var c,d,e,f,g,h,i,j;c=Wz(C(19));d=(ZR(b)).hu.data;e=d.length;f=0;while(f<e){g=d[f];if(!DT(g)){h=(C2()).createElement("button");i="fileButton";h.className=i;b=$rt_ustr(g);h.innerText=b;c.appendChild(h);j=new QS;j.pc=g;h.addEventListener("click",Bi(j,"handleEvent"));}f=f+1|0;}}
var PY=F();
function AMy(a,b){KW(b);}
var Qg=F(0);
function TG(){B.call(this);this.or=null;}
function AGE(a,b){var c,d,e,f,g,h;c=b;b=a.or;d=b.eU;c=c/1000.0;d=d.cx;e=d.d.f;if(Sm(e)&&c-e.rp>0.03125?1:0){f=d.pf;g=d.d.f.b3;if(f!=g){d.pf=g;Ql(d);}}RJ(d);g=Ss((d.bj+d.xz|0)-d.vi|0,IP(d));f=d.bj==g?0:1;if(f)E7(d,g);a:{e=d.cy;g=e.fq;if(c>e.gm)while(true){h=e.gm+e.jk;e.gm=h;e.fq=e.fq?0:1;if(c>h)continue;else break a;}}g=e.fq==g?0:1;g=!g&&!f&&!d.ut?0:1;if(!(!g&&!b.hH)){d=b.fw.ds;if(V(d.b,d.a)){b.hH=0;I$(b.eU);}}RP(b);}
function TE(){B.call(this);this.ug=null;}
function CU(a){GE(a.ug);}
var Pg=F(0);
function TF(){B.call(this);this.qU=null;}
function AE3(a,b,c){var d,e,f,g;c=a.qU;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dj){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Jr(c);RN(c,Gv(f.width*g),Gv(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];RN(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AA3=F();
function ACl(){return {box:'device-pixel-content-box'};}
function AKk(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var B$=F(0);
function TD(){B.call(this);this.nN=null;}
function AJ8(a,b){b=a.nN;Ls(b.eU,b.fw.ds,Jr(b));I$(b.eU);}
function Rc(){var a=this;B.call(a);a.iS=null;a.lh=null;a.o7=null;a.j3=null;a.jA=null;a.mO=0;a.gc=0;a.t9=null;}
function J8(a,b,c,d,e){var f,g,h,i,j;d=d.data;f=a.mO+1|0;a.mO=f;g=a.o7;h=Ct(f);g.g3=KU(g,g.g3,h);h=S6(g,h);Lq(h,b);Lq(h,b);g.iM=g.iM+1|0;b=a.lh[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=new $rt_globals.Array();f=0;while(f<i){c=d[f];if(c instanceof Bw)g=$rt_ustr(c);else if(HF(c,$rt_arraycls($rt_bytecls())))g=c.data.buffer;else if(HF(c,$rt_arraycls($rt_charcls())))g=c.data.buffer;else if(HF(c,$rt_arraycls($rt_intcls())))g=c.data.buffer;else{if(!(c instanceof JP)){b=new BI;c
=QM(Bt(c));g=new R;T(g);J(J(g,C(20)),c);Br(b,S(g));K(b);}c=c;g=c.hf;if(g===null)g=c.hQ;}e=f+2|0;e;h[e]=g;if(g instanceof $rt_globals.ArrayBuffer?1:0)j.push(g);f=f+1|0;}b.postMessage(h,j);}
var K2=F(0);
var RS=F(0);
var ST=F(0);
var FG=F();
function Ir(){FG.call(this);this.uI=null;}
function Yp(){var a=this;Ir.call(a);a.wL=0;a.j4=0;a.hS=null;a.jr=null;a.sc=null;}
function AIC(a,b){var c=new Yp();AL3(c,a,b);return c;}
function AL3(a,b,c){a.uI=b;b=new R;T(b);a.hS=b;a.jr=B2(32);a.wL=c;AFz();a.sc=AQQ;}
function RY(a,b,c,d){var e,$$je;e=a.uI;if(e===null)a.j4=1;if(!(a.j4?0:1))return;a:{try{e.jj(b,c,d);break a;}catch($$e){$$je=ET($$e);if($$je instanceof SB){}else{throw $$e;}}a.j4=1;}}
function M$(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$$je;e=b.data;d=d-c|0;f=new Qb;g=e.length;d=c+d|0;T4(f,g);f.cl=c;f.dY=d;f.s8=0;f.xH=0;f.qc=b;e=Eb(Ba(16,Be(g,1024)));d=e.data.length;h=new U1;i=0+d|0;T4(h,d);AGV();h.wf=AQR;h.pD=0;h.rr=e;h.cl=0;h.dY=i;h.wi=0;h.mh=0;j=a.sc;k=new On;b=Eb(1);l=b.data;l[0]=63;AMk();m=AQS;k.k1=m;k.ka=m;c=l.length;if(c&&c>=k.lO){k.u4=j;k.pi=b.fU();k.wF=2.0;k.lO=4.0;k.oC=B2(512);k.nk=Eb(512);j=AQT;if(j===null){m=new BI;Br(m,C(21));K(m);}k.k1=j;k.ka=j;while(k.hN!=3){k.hN=2;a:{while(true)
{try{j=W7(k,f,h);}catch($$e){$$je=ET($$e);if($$je instanceof Bq){j=$$je;m=new Se;m.kW=1;m.lI=1;m.pZ=j;K(m);}else{throw $$e;}}if(j.gS?0:1){c=Ez(f);if(c<=0)break a;j=J3(c);}else if(KI(j))break;m=!UZ(j)?k.k1:k.ka;b:{if(m!==AQT){if(m===AQU)break b;else break a;}c=Ez(h);b=k.pi;d=b.data.length;if(c<d){j=AQV;break a;}U2(h,b,0,d);}n=f.cl;c=j.gS!=2?0:1;if(!(!c&&!UZ(j)?0:1)){j=new DR;W(j);K(j);}Ri(f,n+j.no|0);}}n=KI(j);RY(a,e,0,h.cl);M8(h);if(!n){while(true){d=k.hN;if(d!=2&&d!=4){j=new Df;W(j);K(j);}j=AQW;if(j===j)k.hN
=3;n=KI(j);RY(a,e,0,h.cl);M8(h);if(!n)break;}return;}}j=new Df;W(j);K(j);}m=new BI;Br(m,C(22));K(m);}
function CE(a,b){var c,d,e,f,g,h,i,j;B0(DJ(a.hS,b),10);b=a.hS;c=b.D;d=a.jr;if(c>d.data.length)d=B2(c);e=0;f=0;if(e>c){b=new BT;Br(b,C(23));K(b);}while(e<c){g=d.data;h=f+1|0;i=b.J.data;j=e+1|0;g[f]=i[e];f=h;e=j;}M$(a,d,0,c);a.hS.D=0;}
function Fy(){FG.call(this);this.wt=null;}
function V_(a){a.wt=Eb(1);}
var Jv=F(Fy);
var AQC=null;function AFk(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function ABR(){var b;b=new Jv;V_(b);AQC=b;}
var Ud=F(0);
function ABX(a,b){var c;c=a.bS();while(c.ca()){b.m(c.bL());}}
var Fr=F(0);
function Tb(a){var b,c;b=new Q_;c=new O9;c.oG=a;b.si=c;return b;}
function AHa(a,b){var c,d;c=a.bS();d=0;while(c.ca()){if(b.cW(c.bL())){c.j7();d=1;}}return d;}
var El=F();
function ABf(a){}
function DO(a){return a.cr()?0:1;}
function GX(a,b){var c,d,e,f,g,h;c=b.data;d=a.j;e=c.length;if(e<d)b=Z8(Hh(Bt(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BL(a);while(BM(f)){g=b.data;h=e+1|0;g[e]=BP(f);e=h;}return b;}
function AK2(a,b){var c;c=a.bS();while(c.ca()){if(BB(c.bL(),b)){c.j7();return 1;}}return 0;}
function FW(a,b){var c,d;c=0;d=b.bS();while(d.ca()){if(!a.q_(d.bL()))continue;c=1;}return c;}
var Ju=F(0);
var Ib=F(0);
function D8(){El.call(this);this.bJ=0;}
function AKo(a,b){a.lG(a.cr(),b);return 1;}
function BL(a){var b;b=new Ms;b.f4=a;b.lo=a.bJ;b.hP=a.cr();b.fy=(-1);return b;}
function AJH(a,b,c){var d,e;if(b>=0&&b<=a.cr()){if(c.dz())return 0;d=c.bS();while(d.ca()){e=b+1|0;a.lG(b,d.bL());b=e;}return 1;}c=new BI;W(c);K(c);}
function ALK(a,b,c){c=new DR;W(c);K(c);}
function I7(a,b){var c,d;c=a.cr();d=0;while(true){if(d>=c)return (-1);if(BB(b,a.kC(d)))break;d=d+1|0;}return d;}
function AIE(a,b){var c,d;if(!HF(b,Ib))return 0;c=b;if(a.j!=c.j)return 0;d=0;while(d<c.j){if(!BB(Bo(a,d),Bo(c,d)))return 0;d=d+1|0;}return 1;}
var KP=F(D8);
var Lv=F(0);
var VH=F(0);
function SS(){var a=this;KP.call(a);a.jT=null;a.iR=null;a.he=0;}
var VE=F(0);
var LX=F(0);
function N4(){var a=this;Dv.call(a);a.g3=null;a.iH=null;a.w8=null;a.iM=0;}
function ABa(a,b){var c;c=S6(a,b);if(c===null)return null;a.g3=IZ(a,a.g3,b);a.iM=a.iM+1|0;return c.hK;}
function S6(a,b){var c,d;c=a.g3;while(true){if(c===null)return null;d=Ix(a.iH,b,c.h8);if(!d)break;c=d>=0?c.bP:c.bx;}return c;}
function KU(a,b,c){var d,e;if(b===null){b=new It;d=null;b.h8=c;b.hK=d;b.eZ=1;b.e$=1;return b;}e=Ix(a.iH,c,b.h8);if(!e)return b;if(e>=0)b.bP=KU(a,b.bP,c);else b.bx=KU(a,b.bx,c);DW(b);return IJ(b);}
function IZ(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Ix(a.iH,c,b.h8);if(d<0)b.bx=IZ(a,b.bx,c);else if(d>0)b.bP=IZ(a,b.bP,c);else{e=b.bP;if(e===null)return b.bx;f=b.bx;g=O(It,e.eZ).data;h=0;while(true){b=e.bx;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bP;while(h>0){h=h+(-1)|0;j=g[h];j.bx=b;DW(j);b=IJ(j);}e.bP=b;e.bx=f;DW(e);b=e;}DW(b);return IJ(b);}
var AAY=F();
function BB(b,c){if(b===c)return 1;return b!==null?b.bp(c):c!==null?0:1;}
function BU(b){if(b!==null)return b;b=new FS;Br(b,C(5));K(b);}
function Rg(){B.call(this);this.rf=null;}
function Rh(){var a=this;B.call(a);a.qb=null;a.qa=0;}
function ACi(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.qb;d=a.qa;ABE(b.data);e=c.jA.data;f=e[d];if(f>0)e[d]=f-1|0;else{g=c.iS;h=g.jT;if(h===null)i=null;else{i=h.rB;g.jT=i;if(i!==null)i.ss=null;else g.iR=null;g.he=g.he-1|0;g.bJ=g.bJ+1|0;i=h.nr;}if(i!==null)J8(c,i.rS,i.sD,i.rz,d);else{e=c.j3.data;j=c.gc;c.gc=j+1|0;e[j]=d;}}c=c.t9;b=b.data;if(!ABE(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BI;W(b);K(b);}if(b.length<1){b=new BI;Z6(b);K(b);}g=Ct(b[0]);h=ABa(c.rf,g);e=O(B,b.length-1|0);k=e.data;f=0;j=k.length;while
(f<j){l=f+1|0;g=b[l];k[f]=(typeof g==='string'?1:0)?Et(I2(g)):(g instanceof $rt_globals.ArrayBuffer?1:0)?AOj(I2(g)):(g instanceof $rt_globals.File?1:0)?ZE(null,I2(g)):!(g instanceof $rt_globals.FileSystemFileHandle?1:0)?null:ZE(I2(g),null);f=l;}h.m(e);}}
function XV(){var a=this;B.call(a);a.b6=null;a.gn=null;a.wm=null;a.dg=null;}
function AOv(a,b){var c=new XV();ALF(c,a,b);return c;}
function ALF(a,b,c){var d,e,f,g;a.dg=null;a.gn=b;d=new OO;d.fs=Cq(O(Ep,0));d.uy=Cq(O(Ep,0));d.eN=Cq(O(Fs,0));d.ic=Cq(O(Hg,0));d.jF=Cq(O(Lf,0));d.lr=Cq(O(Jl,0));d.jW=Cq(O(IL,0));d.ly=Cq(O(Bh,0));d.jn=Cq(O(Bh,0));d.cL=c;a.b6=d;e=$rt_globals.window;f=O(C3,14);g=f.data;d=new Ux;d.mV=a;g[0]=Cz(a,b,C(24),d);d=new Uy;d.rw=a;g[1]=Cz(a,b,C(25),d);d=new Uz;d.of=a;g[2]=Cz(a,b,C(26),d);d=new UA;d.uc=a;g[3]=Cz(a,b,C(27),d);d=new UB;d.qN=a;g[4]=Cz(a,b,C(28),d);d=new UC;d.nm=a;g[5]=Cz(a,b,C(29),d);d=new UD;d.ur=a;g[6]=Cz(a,
b,C(30),d);d=new UE;d.qW=a;g[7]=Cz(a,b,C(31),d);d=new UF;d.nz=a;g[8]=Cz(a,b,C(32),d);d=new UG;d.ts=a;g[9]=Cz(a,b,C(33),d);d=new V0;d.sU=a;g[10]=Cz(a,b,C(34),d);d=new V1;d.rM=a;e.addEventListener("paste",Bi(d,"handleEvent"),!!1);g[11]=UY(a,e,C(35),d);d=new V2;d.l2=a;g[12]=Cz(a,e,C(36),d);d=new V3;d.tP=a;g[13]=Cz(a,e,C(37),d);c=new Pl;c.vD=f;a.wm=c;e=new VC;e.o9=b;b.onpointerdown=Bi(e,"f");e=new VD;e.nT=b;b.onpointerup=Bi(e,"f");}
function LU(){return (C2()).activeElement;}
function Cz(a,b,c,d){b.addEventListener($rt_ustr(c),Bi(d,"handleEvent"));return UY(a,b,c,d);}
function UY(a,b,c,d){var e;e=new Pb;e.ve=b;e.vg=c;e.vf=d;return e;}
function Sd(a,b){var c;c=new S8;c.ub=b;return c;}
function D_(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gn.getBoundingClientRect();e=Cd(Gv((b.clientX-d.left)*c),Gv((b.clientY-d.top)*c));f=new Bp;g=a.dg;f.b=g.b;f.a=g.a;d=new Lm;SD(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.u=e;d.uS=f;return d;}
function V6(a,b,c){var d,e,f,g;d=new NY;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;SD(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.ja=0;d.dK=e;d.bT=f;d.sh=c;d.wu=g;return d;}
function Dl(a,b){b.stopPropagation();b.preventDefault();}
function JX(){var a=this;B.call(a);a.qu=null;a.da=null;a.br=null;a.kA=0;a.sq=null;a.vI=0;a.wP=0;a.iO=null;a.xl=null;a.w5=null;a.wV=null;a.sl=null;a.mX=null;a.wW=null;a.uV=null;a.gW=null;a.xc=null;a.ou=null;a.ds=null;a.tZ=null;a.kI=0;a.i5=0;a.lm=0;a.k9=0;a.hv=0;a.li=null;a.ls=0.0;a.kT=0.0;}
function AAK(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.ds=new Bp;a.kI=0;a.li=new UI;a.qu=c;a.kA=d;g=$rt_str(b.getParameter(7938));h=new R;T(h);J(J(h,C(38)),g);$rt_globals.console.info($rt_ustr(S(h)));a.br=b;a.da=Mq(c,4,4,1);i=ACa(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B2(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Pd;GH();c=AQX;m.dV=b;m.fO=c;m.q9=j.length/c.jR|0;m.tS
=l.length;n=b.createBuffer();m.mm=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.ud=null;n=b.createBuffer();m.tz=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.ou=m;a.wP=Jo(g,C(39));c=new Pe;c.dx=b;a.sq=c;a.ls=e;a.kT=f;d=b.getParameter(3379);a.vI=d;c=new R;T(c);Bj(J(c,C(40)),d);$rt_globals.console.info($rt_ustr(S(c)));k=O(CB,9);i=k.data;c=AOr(b);a.iO=c;i[0]=c;c=ANX(b,C(41));a.xl=c;i[1]=c;c=new PR;F8(c,b,C(42),
C(43),AQX);a.w5=c;i[2]=c;c=APe(b);a.wV=c;i[3]=c;c=new M1;VO(c,b,C(44),C(45));a.sl=c;i[4]=c;c=APv(b);a.mX=c;i[5]=c;c=APn(b);a.wW=c;i[6]=c;c=AO_(b);a.uV=c;i[7]=c;c=APa(b);a.gW=c;i[8]=c;a.xc=k;ABn(b,C(46));}
function EY(a,b,c,d){return Mq(a.qu,b,c,d);}
function DP(a,b){var c;if(b==a.i5)return b;if(!b)a.br.disable(3042);else{a.br.enable(3042);a.br.blendFuncSeparate(770,771,1,1);}c=a.i5;a.i5=b;return c;}
function QA(a,b,c){S$(a,b.b,b.a,c);}
function S$(a,b,c,d){var e,f;e=d.b;f=d.a;a.k9=1;a.hv=1;d=a.li;d.qG=b;d.qI=c;d.qF=e;d.qE=f;SE(a);}
function Ku(a){a.k9=0;a.hv=0;SE(a);}
function SE(a){var b,c,d,e,f,g;b=a.lm;c=a.k9;if(b!=c){a.lm=c;if(!c)a.br.disable(3089);else a.br.enable(3089);}if(a.lm&&a.hv){a.hv=0;d=a.br;e=a.li;b=e.qG;c=a.ds.a-e.qI|0;f=e.qE;c=c-f|0;g=e.qF;d.scissor(b,c,g,f);}}
function JL(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.ou;c=a.kI;d=b.fO.rI;e=b.dV;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dV;h=b.mm;e.bindBuffer(34962,h);i=b.fO.lN.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dV;m=k.gu;n=k.eK;o=b.fO.jR*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.eK|0;j=j+1|0;}a:{e=b.ud;if(e!==null){c=0;b.dV.bindBuffer(34962,e);i=b.fO.qs.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dV;j=e.gu;p=e.eK;m=e.oD;n=b.fO.o4;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.eK|0;g=g+1|0;}}}q=b.tz;if(q===null){c=b.q9;if(c>0)b.dV.drawArrays(4,0,c);}else{b.dV.bindBuffer(34963,q);k=b.dV;g=b.tS;k.drawElements(4,g,5123,0);}a.kI=d;}
function BC(a,b,c,d,e){JT(a,a.iO);K3(a.iO,a.br,b,c,d,a.ds);d=a.iO;Hn(a.br,d.tk,e);JL(a);}
function AA5(a,b,c,d,e,f,g,h){var i,j;JT(a,a.gW);K3(a.gW,a.br,b,c,d,a.ds);d=a.gW;i=a.br;j=d.q7;i.uniform2f(j,e,f);Hn(i,d.ot,g);d=a.gW;Hn(a.br,d.mp,h);JL(a);}
function Ew(a,b,c,d,e,f,g,h,i){var j;j=!i?a.sl:a.mX;JT(a,j);ABe(j,a.br,!i?a.kT:a.ls);K3(j,a.br,b,c,d,a.ds);ZY(j,a.br,f);WB(j,a.br,f,e);Zz(j,a.br,g,h);JL(a);}
function Gt(a){var b,c;b=new Is;c=a.sq;b.e2=new Bp;b.d8=c;b.eA=c.dx.createTexture();AQY=AQY+1|0;return b;}
function JT(a,b){var c,d;if(b!==a.tZ){c=a.br;d=b.bn;c.useProgram(d);a.tZ=b;}}
function Tx(){var a=this;JX.call(a);a.wq=null;a.w6=null;}
function F5(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;a:{f=a.da;switch(e){case 1:break;case 2:g='italic ';break a;default:g='';break a;}g='oblique ';}h=g+d+' '+c+'px '+$rt_ustr(b);L1(f,h);g=f.c2.measureText("W");i=g.fontBoundingBoxAscent;j=g.fontBoundingBoxDescent;k=g.width;l=Ga(f,C(47));m=Ga(f,C(48));g=new JQ;f=h;g.lq=b;g.vo=c;n=c|0;if(n!==c){b=new R;T(b);I9(J(b,C(49)),c);$rt_globals.console.info($rt_ustr(S(b)));}g.ow=n;g.vw=d;g.vZ=e;g.d0=i;g.dC=j;g.vn=l;g.le=k;g.mA=f;g.qn=Dy(i);g.wY=Dy(g.dC);d=m*32.0|0;n=l*32.0|
0;o=k*32.0|0;d=n==d&&n==o?1:0;b:{g.vs=d;switch(e){case 1:break;case 2:b=C(50);break b;default:b=C(51);break b;}b=C(52);}g.vc=b;return g;}
function KA(){B.call(this);this.pm=null;}
function Ig(){var a=this;B.call(a);a.uR=null;a.vL=null;}
function AAm(b){var c,d;if(DT(b))K(Ym(b));if(!AAo(I(b,0)))K(Ym(b));c=1;while(c<H(b)){a:{d=I(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AAo(d))break a;else K(Ym(b));}}c=c+1|0;}}
function AAo(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var K7=F(Ig);
var AQQ=null;function AFz(){AFz=Bg(K7);AFb();}
function AFb(){var b,c,d,e,f;b=new K7;AFz();c=O(Bw,0);d=c.data;AAm(C(53));e=d.length;f=0;while(f<e){AAm(d[f]);f=f+1|0;}b.uR=C(53);b.vL=c.fU();AQQ=b;}
function OO(){var a=this;B.call(a);a.fs=null;a.uy=null;a.eN=null;a.ic=null;a.jF=null;a.lr=null;a.jW=null;a.ly=null;a.jn=null;a.cL=null;a.gI=null;a.nK=0;}
function Sl(a,b){var c,d,e,f;CU(a.cL);c=(Cc(!b.sh?a.uy:a.fs)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].cW(b);if(f)break;if(b.ja)break;e=e+1|0;}return f;}
function PS(a,b,c){var d,e,f;CU(a.cL);d=(Cc(a.lr)).data;e=d.length;f=0;while(f<e){if(Km(d[f].n3,b,c))return 1;f=f+1|0;}return 0;}
function Ux(){B.call(this);this.mV=null;}
function AJJ(a,b){var c;c=a.mV;if(Sl(c.b6,V6(c,b,1)))Dl(c,b);}
function Uy(){B.call(this);this.rw=null;}
function AJT(a,b){var c;c=a.rw;if(Sl(c.b6,V6(c,b,0)))Dl(c,b);}
function Uz(){B.call(this);this.of=null;}
function AIm(a,b){var c,d,e,f,g,h,i;c=a.of;if(c.dg!==null){a:{b:{d=D_(c,b);e=c.b6;CU(e.cL);f=e.gI;if(f!==null)f.m(d);else{g=(Cc(e.eN)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].gF(d))break a;i=i+1|0;}}}}Dl(c,b);}}
function UA(){B.call(this);this.uc=null;}
function AHP(a,b){var c,d,e,f,g,h;c=a.uc;b.button;if(c.dg!==null)a:{d=D_(c,b);c=c.b6;e=b.button;CU(c.cL);if(c.gI===null){f=(Cc(c.eN)).data;g=f.length;h=0;while(h<g){b=f[h].gz(d,e);if(b!==null){c.gI=b;c.nK=e;break a;}h=h+1|0;}}}}
function UB(){B.call(this);this.qN=null;}
function AH_(a,b){var c,d,e,f,g,h,i;c=a.qN;b.button;if(c.dg!==null){d=D_(c,b);e=c.b6;f=b.button;CU(e.cL);if(f==e.nK&&e.gI!==null)e.gI=null;g=(Cc(e.eN)).data;h=g.length;i=0;a:{while(i<h){if(g[i].gD(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Dl(c,b);}}
function UC(){B.call(this);this.nm=null;}
function AKg(a,b){var c,d,e,f,g,h,i,j,k;c=a.nm;if(c.dg!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.b6;f=D_(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;CU(e.cL);i=(Cc(e.ic)).data;j=i.length;k=0;b:{while(k<j){if(i[k].gC(f,d,h))break b;k=k+1|0;}}Dl(c,b);}}
function UD(){B.call(this);this.ur=null;}
function AGs(a,b){var c,d,e,f,g,h,i,j;c=a.ur;if(c.dg!==null){d=D_(c,b);e=c.b6;f=b.button;g=b.detail;CU(e.cL);h=(Cc(e.eN)).data;i=h.length;j=0;a:{while(j<i){if(h[j].gg(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Dl(c,b);}}
function UE(){B.call(this);this.qW=null;}
function ANl(a,b){var c,d,e,f,g,h,i;c=a.qW;if(c.dg!==null){d=D_(c,b);e=c.b6;CU(e.cL);f=(Cc(e.jF)).data;g=f.length;h=0;a:{while(h<g){if(Zi(f[h],d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Dl(c,b);}}
function UF(){B.call(this);this.nz=null;}
function AFI(a,b){var c,d,e;b=a.nz.b6;c=(Cc(b.jn)).data;d=c.length;e=0;while(e<d){c[e].t();e=e+1|0;}CU(b.cL);}
function UG(){B.call(this);this.ts=null;}
function ALb(a,b){var c,d,e;b=a.ts.b6;c=(Cc(b.ly)).data;d=c.length;e=0;while(e<d){c[e].t();e=e+1|0;}CU(b.cL);}
function V0(){B.call(this);this.sU=null;}
function AM0(a,b){var c;c=a.sU;if(c.dg!==null)D_(c,b);}
function V1(){B.call(this);this.rM=null;}
function AH2(a,b){var c,d,e,f,g,h,i,j,k;c=a.rM;if(LU()===c.gn){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cc(c.b6.jW)).data;if(0>=h.length)i=null;else{j=h[0].o3.cx;BU(j);i=new M6;TT(i);i.m0=j;}if(i!==null){j=c.b6.cL;k=new MC;k.tF=i;k.tG=j;g.getAsString(Bi(k,"accept"));Dl(c,b);}}else{i=$rt_str(g.type);g=$rt_str(g.kind);j=new R;T(j);J(J(J(J(j,C(54)),i),C(55)),g);$rt_globals.console.info($rt_ustr(S(j)));}e=e+1|0;}}}
function V2(){B.call(this);this.l2=null;}
function AIq(a,b){var c;c=a.l2;if(LU()===c.gn&&PS(c.b6,Sd(c,b),0))Dl(c,b);}
function V3(){B.call(this);this.tP=null;}
function AJ1(a,b){var c;c=a.tP;if(LU()===c.gn&&PS(c.b6,Sd(c,b),1))Dl(c,b);}
var Su=F(0);
var SG=F();
function Mq(a,b,c,d){var e,f,g,h,i;e=new Qs;e.jd=d;AQy=AQy+1|0;e.k2=b;e.j_=c;f=(C2()).createElement("canvas");e.g5=f;g=b;f.width=g;h=e.g5;f=c;h.height=f;if(!d)g=e.g5.getContext("2d");else{i=e.g5;h=ADj();g=i.getContext("2d",h);}e.c2=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var SF=F();
function AHe(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Lp(){var a=this;B.call(a);a.iV=null;a.cj=null;a.kJ=null;}
var H9=F();
var AQP=null;function Ix(a,b,c){return b.iN(c);}
function Zc(){AQP=new H9;}
function ABg(){var a=this;B.call(a);a.gs=null;a.hV=null;a.gf=0;}
function Cq(a){var b=new ABg();AGo(b,a);return b;}
function AGo(a,b){a.gs=b;}
function Cs(a,b){var c,d,e;c=a.gf;d=a.gs;if(c==d.data.length)a.gs=CW(d,c+4|0);d=a.gs.data;e=a.gf;a.gf=e+1|0;d[e]=b;a.hV=null;}
function Cc(a){var b;b=a.hV;if(!(b!==null&&b.data.length==a.gf))a.hV=CW(a.gs,a.gf);return a.hV;}
var DH=F(0);
var Ep=F(0);
var Fs=F(0);
var Hg=F(0);
var Lf=F(0);
var Jl=F(0);
var EV=F(0);
var IL=F(0);
function Pl(){B.call(this);this.vD=null;}
function Bp(){var a=this;B.call(a);a.b=0;a.a=0;}
function Cd(a,b){var c=new Bp();AEJ(c,a,b);return c;}
function AEJ(a,b,c){a.b=b;a.a=c;}
function Cp(a,b){a.b=b.b;a.a=b.a;}
function Bn(a,b,c){a.b=b;a.a=c;}
function AG5(a,b){var c;a:{b:{if(a!==b){if(Bt(b)!==Bt(a))break b;if(!Hm(a,b))break b;}c=1;break a;}c=0;}return c;}
function Hm(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function UI(){var a=this;B.call(a);a.qG=0;a.qI=0;a.qF=0;a.qE=0;}
var AAC=F();
var Xm=F(0);
function Pe(){B.call(this);this.dx=null;}
function Ko(){var a=this;B.call(a);a.bn=null;a.wZ=null;}
function ZD(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(56):C(57);g=$rt_str(b.getShaderInfoLog(e));h=new R;T(h);J(J(h,f),g);g=S(h);b.deleteShader(e);CE(GL(),g);CE(D2(),C(58));CE(D2(),d);CE(D2(),C(58));b=new Bq;Br(b,g);K(b);}
function CB(){var a=this;Ko.call(a);a.ny=null;a.pb=null;a.kV=null;}
function AQZ(a,b,c,d){var e=new CB();F8(e,a,b,c,d);return e;}
function F8(a,b,c,d,e){var f,g,h,i,j,k;a.wZ=e;f=ZD(b,35633,c);d=ZD(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bn=g;h=e.rn.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bn;k=c.gu;c=c.pk;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bn;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ABn(b,C(59));a.kV=new Bp;c=a.bn;a.ny=b.getUniformLocation(c,"uResolution");c=a.bn;a.pb=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bq;c=new R;T(c);J(J(c,C(60)),d);Br(b,S(c));K(b);}
function X8(a,b,c){var d,e,f;if(!Hm(a.kV,c)){Cp(a.kV,c);d=a.ny;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function K3(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.pb;b.uniform4f(e,i,l,h,j);X8(a,b,f);}
function AAV(){CB.call(this);this.tk=null;}
function AOr(a){var b=new AAV();AGS(b,a);return b;}
function AGS(a,b){var c;GH();F8(a,b,C(42),C(61),AQX);c=a.bn;a.tk=b.getUniformLocation(c,"uColor");}
function D$(){CB.call(this);this.qL=null;}
function ANX(a,b){var c=new D$();Sg(c,a,b);return c;}
function AQ0(a,b,c){var d=new D$();Sn(d,a,b,c);return d;}
function Sg(a,b,c){Sn(a,b,C(42),c);}
function Sn(a,b,c,d){GH();F8(a,b,c,d,AQX);c=a.bn;a.qL=b.getUniformLocation(c,"sDiffuse");}
function ZY(a,b,c){var d;d=a.qL;b.uniform1i(d,0);b.activeTexture(33984);c=c.eA;b.bindTexture(3553,c);}
var PR=F(CB);
function YT(){D$.call(this);this.u1=null;}
function APe(a){var b=new YT();AJI(b,a);return b;}
function AJI(a,b){var c;Sg(a,b,C(62));c=a.bn;a.u1=b.getUniformLocation(c,"uContrast");}
function Fo(){var a=this;D$.call(a);a.op=null;a.pz=null;a.q3=null;a.rY=null;a.iZ=0.0;}
function AQ1(a,b,c){var d=new Fo();VO(d,a,b,c);return d;}
function VO(a,b,c,d){Sn(a,b,c,d);c=a.bn;a.op=b.getUniformLocation(c,"uTexTransform");c=a.bn;a.pz=b.getUniformLocation(c,"uColor");c=a.bn;a.q3=b.getUniformLocation(c,"uBgColor");c=a.bn;a.rY=b.getUniformLocation(c,"uTextPow");}
function ABe(a,b,c){var d,e,f,g,h;if(a.iZ!==c){a.iZ=c;d=GL();e=QM(Bt(a));f=a.iZ;g=new R;T(g);I9(J(J(g,e),C(63)),f);CE(d,S(g));h=a.rY;b.uniform2f(h,c,0.0);}}
function Zz(a,b,c,d){Hn(b,a.pz,c);Hn(b,a.q3,d);}
function WB(a,b,c,d){var e,f,g,h,i,j;c=c.e2;e=c.b;f=c.a;g=d.bk;h=e;g=g/h;i=d.bD;j=f;i=i/j;h=d.Y/h;j=d.bV/j;c=a.op;b.uniform4f(c,g,i,h,j);}
var M1=F(Fo);
var ABw=F(Fo);
function APv(a){var b=new ABw();AFa(b,a);return b;}
function AFa(a,b){VO(a,b,C(44),C(64));}
function XK(){var a=this;D$.call(a);a.xF=null;a.xE=null;a.v2=null;}
function APn(a){var b=new XK();AFc(b,a);return b;}
function AFc(a,b){var c,d;Sg(a,b,C(65));c=a.bn;a.xF=b.getUniformLocation(c,"uColorB");d=a.bn;a.xE=b.getUniformLocation(d,"uColorF");d=a.bn;a.v2=b.getUniformLocation(d,"uContrast");}
function ZQ(){var a=this;CB.call(a);a.vd=null;a.uO=null;a.uN=null;}
function AO_(a){var b=new ZQ();AFe(b,a);return b;}
function AFe(a,b){var c;GH();F8(a,b,C(42),C(66),AQX);c=a.bn;a.vd=b.getUniformLocation(c,"uColor");c=a.bn;a.uO=b.getUniformLocation(c,"uPoints1");c=a.bn;a.uN=b.getUniformLocation(c,"uPoints2");}
function Xi(){var a=this;CB.call(a);a.mp=null;a.q7=null;a.ot=null;}
function APa(a){var b=new Xi();ADD(b,a);return b;}
function ADD(a,b){var c;GH();F8(a,b,C(42),C(67),AQX);c=a.bn;a.mp=b.getUniformLocation(c,"uColor");c=a.bn;a.q7=b.getUniformLocation(c,"uBaseline");c=a.bn;a.ot=b.getUniformLocation(c,"uScaleHExp");}
var QP=F(0);
var ABN=F(0);
function Hn(b,c,d){var e,f,g,h;e=d.bk;f=d.bD;g=d.Y;h=d.bV;b.uniform4f(c,e,f,g,h);}
function ABn(b,c){var d,e;d=b.getError();if(d){b=GL();e=new R;T(e);Bj(J(e,c),d);CE(b,S(e));}}
function Pb(){var a=this;B.call(a);a.ve=null;a.vg=null;a.vf=null;}
function Pd(){var a=this;B.call(a);a.dV=null;a.fO=null;a.mm=null;a.ud=null;a.tz=null;a.q9=0;a.tS=0;}
function Cl(){var a=this;B.call(a);a.u8=null;a.fM=0;}
function Do(a,b,c){a.u8=b;a.fM=c;}
function F0(){var a=this;Cl.call(a);a.rn=null;a.lN=null;a.qs=null;a.jR=0;a.o4=0;a.rI=0;}
var AQX=null;var AQ2=null;function GH(){GH=Bg(F0);AGP();}
function AGP(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new F0;c=O(DB,2);d=c.data;AMh();d[0]=AQ3;d[1]=AQ4;GH();Do(b,C(68),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.lc.fM){case 0:f=f+l.eK|0;h=h+1|0;break a;case 1:e=e+l.eK|0;g=g+1|0;break a;default:}}i=i|1<<l.gu;k=k+1|0;}b.rn=c;b.jR=e;b.o4=f;b.rI=i;c=O(DB,g);m=c.data;b.lN=c;c=O(DB,h);n=c.data;b.qs=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.lc.fM){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}AQX
=b;c=O(F0,1);c.data[0]=b;AQ2=c;}
var J5=F(Fy);
var AQB=null;function AG8(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Z$(){var b;b=new J5;V_(b);AQB=b;}
function DB(){var a=this;Cl.call(a);a.pk=null;a.lc=null;a.eK=0;a.oD=0;a.gu=0;}
var AQ3=null;var AQ4=null;var AQ5=null;function AMh(){AMh=Bg(DB);AF_();}
function AOH(a,b,c,d,e,f,g){var h=new DB();T8(h,a,b,c,d,e,f,g);return h;}
function T8(a,b,c,d,e,f,g,h){AMh();Do(a,b,c);a.pk=d;a.lc=e;a.eK=f;a.oD=g;a.gu=h;}
function AF_(){var b;b=new DB;AIj();T8(b,C(69),0,C(70),AQ6,2,0,0);AQ3=b;b=AOH(C(71),1,C(72),AQ6,2,0,1);AQ4=b;AQ5=G(DB,[AQ3,b]);}
function AAu(){BI.call(this);this.u7=null;}
function Ym(a){var b=new AAu();ALA(b,a);return b;}
function ALA(a,b){W(a);a.u7=b;}
var TH=F(DE);
var XH=F();
var F4=F(Cl);
var AQ7=null;var AQ6=null;var AQ8=null;function AIj(){AIj=Bg(F4);AEN();}
function AE9(a,b){var c=new F4();AAG(c,a,b);return c;}
function AAG(a,b,c){AIj();Do(a,b,c);}
function AEN(){var b;AQ7=AE9(C(73),0);b=AE9(C(74),1);AQ6=b;AQ8=G(F4,[AQ7,b]);}
var K5=F(0);
function VC(){B.call(this);this.o9=null;}
function AKP(a,b){a.o9.setPointerCapture(b.pointerId);}
function VD(){B.call(this);this.nT=null;}
function ADC(a,b){a.nT.releasePointerCapture(b.pointerId);}
function Gc(){var a=this;B.call(a);a.tU=0;a.cl=0;a.dY=0;a.id=0;}
function T4(a,b){a.id=(-1);a.tU=b;a.dY=b;}
function Ez(a){return a.dY-a.cl|0;}
function E$(a){return a.cl>=a.dY?0:1;}
var Q$=F(0);
var JS=F(Gc);
function Ri(a,b){var c,d,e;if(b>=0&&b<=a.dY){a.cl=b;if(b<a.id)a.id=0;return a;}c=new BI;d=a.dY;e=new R;T(e);B0(Bj(J(Bj(J(e,C(75)),b),C(76)),d),93);Br(c,S(e));K(c);}
var YN=F();
function WX(b){return Math.log(b);}
function ABP(b,c){return AH9(b,c);}
function AH9(b,c){return Math.pow(b,c);}
function Be(b,c){if(b<c)c=b;return c;}
function Ba(b,c){if(b>c)c=b;return c;}
function AMA(b,c){return Math.max(b,c);}
function IO(){var a=this;Gc.call(a);a.pD=0;a.rr=null;a.wf=null;}
function U2(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.mh){e=new VX;W(e);K(e);}if(Ez(a)<d){e=new PM;W(e);K(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BT;j=new R;T(j);Bj(J(Bj(J(j,C(77)),h),C(78)),g);Br(i,S(j));K(i);}if(d<0){e=new BT;i=new R;T(i);J(Bj(J(i,C(79)),d),C(80));Br(e,S(i));K(e);}h=a.cl;k=h+a.pD|0;l=0;while(l<d){b=a.rr.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.cl=h+d|0;return a;}}b=b.data;e=new BT;d=b.length;i=new R;T(i);B0(Bj(J(Bj(J(i,C(81)),c),C(76)),d),41);Br(e,
S(i));K(e);}
function M8(a){a.cl=0;a.dY=a.tU;a.id=(-1);return a;}
function GR(){B.call(this);this.xi=null;}
var AQU=null;var AQT=null;var AQS=null;function AMk(){AMk=Bg(GR);AH4();}
function ABj(a){var b=new GR();AAj(b,a);return b;}
function AAj(a,b){AMk();a.xi=b;}
function AH4(){AQU=ABj(C(82));AQT=ABj(C(83));AQS=ABj(C(84));}
function I8(){var a=this;KA.call(a);a.mU=null;a.es=null;}
var NH=F(0);
var Oz=F(0);
function Pf(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new Hd;c=new HC;d=new HQ;AFp();IM(d,AQ9);K8(c,d,BA(AQ$),BA(AQ_),BA(ARa),BA(AQ$),BA(ARb),BA(ARc),BA(ARd),BA(ARe),BA(ARf),BA(ARg));Tf();e=(ARh.fU()).data;f=e.length;g=O(HY,f);h=g.data;i=0;while(i<f){h[i]=e[i].hd;i=i+1|0;}j=ZT(N(C(85)),N(C(86)),N(C(87)),N(C(88)));k=new Hi;l=new Hu;ACu();m=ARi;Lb(l,m,ARj,ARk,ARl,ARm,m);Ki(k,l,AAP(),ABr(N(C(89)),N(C(90)),N(C(91))),AAP(),Wm(1,0.17499999701976776),ARn,ARo);H3(b,c,g,j,k,WG(N(C(92)),N(C(93)),N(C(94)),N(C(95))));IX(a,b);}
var Tn=F(0);
function Wt(){var a=this;I8.call(a);a.cx=null;a.eT=null;}
function APj(a){var b=new Wt();ANc(b,a);return b;}
function ANc(a,b){var c,d,e,f,g;a.pm=b;a.mU=IS(0,0,64,255,new B4);c=new SJ;c.cB=new Bp;c.ju=Cq(O(HO,0));c.dQ=new Bp;c.sV=new Bp;c.uK=new B4;c.uL=new B4;d=b.iV;c.c6=d;e=b.kJ;c.fg=e;c.b7=d.kA;d=new QD;d.tg=e;c.c4=d;d=b.cj.jn;e=new O7;e.qJ=c;Cs(d,e);d=b.cj.ly;e=new O6;e.t$=c;Cs(d,e);a.es=c;Cs(b.cj.fs,new QV);c=b.cj.fs;d=a.es;BU(d);e=new QU;e.ns=d;Cs(c,e);c=new Qn;d=a.es;e=new Vh;e.c1=Bz();c.dv=e;c.dP=d;f=new T1;f.b_=Bz();f.iE=ARp;f.cz=d;Cs(d.ju,f);c.bO=f;a.eT=c;d=AOm(a.es,c);a.cx=d;c=a.es;g=c.fg.dj!==(C2()).activeElement
?0:1;if(g)IY(c);c.ec=d;if(g)IA(c);Cs(b.cj.eN,a.eT);Cs(b.cj.ic,a.eT);Cs(b.cj.eN,a.cx);c=b.cj.fs;d=new Ow;d.vz=a;Cs(c,d);c=b.cj.fs;d=new Qp;e=a.cx;BU(e);f=new Ou;f.tE=e;e=null;d.mS=b.kJ;d.pa=e;d.oq=f;Cs(c,d);c=b.cj.lr;d=a.cx;BU(d);e=new Ov;e.n3=d;Cs(c,e);c=b.cj.jW;d=new MX;d.o3=a;Cs(c,d);c=b.cj.ic;d=new MY;d.un=a;Cs(c,d);b=b.cj.jF;c=new MW;c.mD=a;Cs(b,c);Pf(a);}
function P_(a,b){var c,d,e,f;c=a.es;if(c.b7==b)b=0;else{c.b7=b;GE(c.fg);b=1;}if(b){c=a.eT;d=BL(c.bO.b_);while(BM(d)){Kt(BP(d));}c=c.dv;b=0;while(true){d=c.c1;if(b>=d.j)break;(Bo(d,b)).K.f_=1;b=b+1|0;}c=a.cx;d=c.f3;b=c.bw.b7;d.lv=b;if(c.g8.jd!=b)Pq(c);e=c.e6.data;b=e.length;f=0;while(f<b){d=e[f].by;if(d!==null)d.f2=1;f=f+1|0;}IN(c.c3);Ke(c);}}
function I$(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b=a.pm.iV;c=a.mU;d=b.br;e=c.bk;f=c.bD;g=c.Y;h=c.bV;d.clearColor(e,f,g,h);b.br.clear(16384);Wl(a.cx);b=a.eT;c=b.dv;d=b.dP.c6;i=c.c1.j-1|0;while(i>=0){j=Bo(c.c1,i);j.N.jD(d);k=j.K;l=j.ft.ha;if(!Jj(k)){if(!Uq(k)&&!(!k.f_&&k.c5!==null)){k.f_=0;To(k);m=k.em;f=(m.d0+m.dC+5.0)/10.0;n=Cj(k.eL,k.ij);m=d.da;o=k.em;p=k.f6;e=f*2.0;CG(m,o);q=n+Jx(m,p,e)|0;k.hq=q;q=Ff(0,q,k.o.b);if(q){m=EY(d,q,k.o.a,k.eL.b7);CG(m,k.em);o=k.f6;e=n;f=e+f;p=k.em;g=p.d0;Ei(m,o,f,e+g-(g
+p.dC)/16.0);o=k.c5;if(o===null){o=Gt(d);k.c5=o;}Ek(o,m);K1(m);Cb(k.i_,0.0,0.0,Cf(k.c5),Kl(k.c5));}}m=l.q$;o=k.c5;if(o===null)Ot(k,d,0,k.o.b,m);else{n=Cf(o);o=l.tj;p=k.H;q=p.b;r=p.a;p=k.c5;Ew(d,q,r,p.e2,k.i_,p,o,m,k.eL.b7);q=k.o.b;if(n<q)Ot(k,d,n,q-n|0,m);}}DP(d,1);s=Cj(j.bh,2.0);t=Jj(j.K);m=j.bh;o=m.dQ;m=m.sV;n=t?0:j.K.o.a;p=j.N.o;Bn(m,p.b,p.a+n|0);XY(d,m,!t?j.K.H:j.N.H,j.ft.ha.ki, -s|0,o);m=j.N;ZI(d,m.o,m.H,s,n,N8(j.ft.hO,j.bh.bW),j.ft.hO.k8,o);i=i+(-1)|0;}b=b.bO;if(!DO(b.b_)){DP(b.cz.c6,1);n=0;while(true)
{c=b.b_;if(n>=c.j)break;AA9(Bo(c,n),b.cz);n=n+1|0;}}}
function Ls(a,b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=a.es;Cp(d.cB,b);if(d.bW!==c){d.bW=c;e=(Cc(d.ju)).data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];d.il=HU(d.cz,d.h0);h=BL(d.b_);while(BM(h)){OU(BP(h),d.il,d.cz);}g=g+1|0;}}}h=a.cx;d=new Bp;i=h.f3;RW(i.gN);j=i.gN;k=c>=0.5?c:0.25;l=k>=4.0?0.5:ABP(j.bV,ABP(k,ARq));Cb(j,j.bk/k,j.bD*k,AMA(j.Y*k,1.25),l);j=i.gN;k=j.bD;i.re=k-(k|0)>=0.25?0.0:0.5;m=k+j.Y+1.5|0;i.t4=m;Bn(i.jz,0,m*2|0);Cp(h.V,d);Cp(h.cs,b);RB(h,d,b,c);}
function IX(a,b){var c,d,e;BU(b);c=a.eT;c.gd=b;d=c.cE;if(d!==null)d.ft=b.fi;c=c.bO;d=b.fi;c.h0=b.tt;c.k$=d;d=BL(c.b_);while(BM(d)){Pw(BP(d),c.k$);}c=a.cx;c.ct=b;d=c.cy;e=b.bB.up;Fc(d.dO.eQ,e);d=c.er;e=b.bB;F6(d,e.j6,e.ke);c=c.et;b=b.bB;F6(c,b.j6,b.ke);}
var Zy=F(0);
function ZR(b){var c,d;c=b.length;d=new Mw;d.sw=b;return AAw(c,d);}
function P5(){var a=this;B.call(a);a.hu=null;a.vv=null;}
function QS(){B.call(this);this.pc=null;}
function ADZ(a,b){var c,d,e,f;b=a.pc;AQi=b;c=B7(AQj,b);if(c!==null)Uu(c);else if(B7(AQk,b)!==null){c=new R;T(c);J(J(c,C(96)),b);$rt_globals.console.info($rt_ustr(S(c)));}else{Dn(AQk,b,b);c=new R;T(c);J(J(c,C(97)),b);$rt_globals.console.info($rt_ustr(S(c)));c=$rt_globals.fetch($rt_ustr(b));d=new OZ;c=c.then(Bi(d,"f"));d=new OX;d.mv=b;e=new OY;c.then(Bi(d,"f"),Bi(e,"f"));}f=Wz(C(98));c=new R;T(c);J(J(c,C(99)),b);b=$rt_ustr(S(c));f.innerText=b;}
var Y4=F();
var IW=F(JS);
function Qb(){var a=this;IW.call(a);a.xH=0;a.s8=0;a.qc=null;}
function JE(){var a=this;B.call(a);a.u4=null;a.pi=null;a.wF=0.0;a.lO=0.0;a.k1=null;a.ka=null;a.hN=0;}
function Kw(){var a=this;B.call(a);a.gS=0;a.no=0;}
var AQW=null;var AQV=null;function Xd(a,b){var c=new Kw();XR(c,a,b);return c;}
function XR(a,b,c){a.gS=b;a.no=c;}
function KI(a){return a.gS!=1?0:1;}
function UZ(a){return a.gS!=3?0:1;}
function J3(b){return Xd(2,b);}
function X9(){AQW=Xd(0,0);AQV=Xd(1,0);}
function Qn(){var a=this;B.call(a);a.dP=null;a.dv=null;a.cE=null;a.bO=null;a.gd=null;}
function AJP(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.dv;d=0;a:{while(true){e=c.c1;if(d>=e.j)break;b:{f=Bo(e,d);e=b.u;if(Dc(f.K,e))g=Dx(f.bh.c4,null);else{h=Cj(f.bh,7.0);i=Cj(f.bh,25.0);if(Nc(f,e.b,h)){g=MH(f,e.b,i);if(Oe(f,e.a,h)){g=Dx(f.bh.c4,Kz(g,C(100)));break b;}if(Mz(f,e.a,h)){g=Dx(f.bh.c4,Kz( -g|0,C(100)));break b;}}if(Uw(f,e.a,h)){g=U5(f,e.a,i);if(V5(f,e.b,h)){g=Dx(f.bh.c4,Kz(g,C(101)));break b;}if(LO(f,e.b,h)){g=Dx(f.bh.c4,Kz( -g|0,C(101)));break b;}}g=0;}}c:{d:{if(!g){if(!Dc(f.N,b.u))break d;if(!f.N.gF(b)
&&!Dx(f.bh.c4,null))break d;}g=1;break c;}g=0;}if(g){g=1;break a;}d=d+1|0;}g=0;}e:{if(!g){c=a.bO;g=0;j=c.b_.j-1|0;f:{while(j>=0){e=Bo(c.b_,j);k=b.u;f=c.cz.c4;g=G9(e.b2,k);d=!g?(-1):MA(e,k);h=e.hD;if(h!=d){if(h>=0){l=e.cc.data[h];l.g_=0;m=e.uQ;if(m!==null)m.x4(k,h,l);}if(d>=0){k=e.cc.data[d];l=e.on;if(l!==null){m=l.n$;n=l.n_;l=l.oa;R$(m,n);if(l!==null)k.jo.t();if(Ta(k)){if(k.kv===null)Nj(m,Yv(k,n),k.hT,n);else U0(m,Yv(k,n),k.hT,n,k.kv);}}k.g_=1;}e.hD=d;}g=g&&Fj(f)?1:0;if(g)break f;j=j+(-1)|0;}}if(!g){g=0;break e;}}g
=1;}return g;}
function AMq(a,b,c,d){var e,f,g,h,i;e=a.dv;f=0;a:{while(true){g=e.c1;if(f>=g.j)break;b:{c:{h=Bo(g,f);if(!Dc(h.K,b.u)){if(!Dc(h.N,b.u))break c;if(!h.N.gg(b,c,d))break c;}i=1;break b;}i=0;}if(i){c=1;break a;}f=f+1|0;}c=0;}d:{if(!c){g=a.bO.b_;d=g.j-1|0;i=1;if(d<0)i=0;else{g=Bo(g,d);c=MA(g,b.u);if(c>=0){b=g.cc.data[c];if(!Ta(b))b.jo.t();}}if(!i){c=0;break d;}}c=1;}return c;}
function AKE(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.bO;e=null;f=d.b_.j-1|0;a:{while(f>=0){e=Bo(d.b_,f);g=b.u;h=G9(e.b2,g);if(!h&&!I_(e.b2)){e=e.sB;if(e!==null)Dq(e.rs);}e=!h?null:ARr;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;e=a.dv;h=0;b:{while(true){g=e.c1;if(h>=g.j){g=null;break b;}c:{i=Bo(g,h);if(!c){d:{g=b.u;if(!Jj(i.K)&&Dc(i.K,g)){d=i.N.H;j=d.b;k=g.b;l=j-k|0;j=d.a;f=g.a;j=j-f|0;g=i.K.H;m=g.b-k|0;f=g.a-f|0;d=new Bp;g=new MJ;g.mK=i;g.mL=m;g.mM=f;g.mN=d;g.mG=l;g.mI=j;}else{j=Cj(i.bh,7.0);f=Cj(i.bh,
25.0);if(Nc(i,g.b,j)){m=MH(i,g.b,f);if(Oe(i,g.a,j)){g=Hx(i,g,m,(-1));break d;}if(Mz(i,g.a,j)){g=Hx(i,g,m,1);break d;}}if(Uw(i,g.a,j)){f=U5(i,g.a,f);if(V5(i,g.b,j)){g=Hx(i,g,(-1),f);break d;}if(LO(i,g.b,j)){g=Hx(i,g,1,f);break d;}}g=null;}}if(g!==null)break c;}g=Dc(i.K,b.u)?ARr:i.N.gz(b,c);i=i.N;if(i===null)g=null;else if(g===null)g=!Dc(i,b.u)?null:ARr;}if(g!==null)break;h=h+1|0;}}return g;}
function AHy(a,b,c){var d,e,f,g,h;d=a.dv;e=0;a:{while(true){f=d.c1;if(e>=f.j)break;b:{c:{g=Bo(f,e);if(!Dc(g.K,b.u)){if(!Dc(g.N,b.u))break c;if(!g.N.gD(b,c))break c;}h=1;break b;}h=0;}if(h){c=1;break a;}e=e+1|0;}c=0;}return !c&&!Fp(a.bO)?0:1;}
function PU(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r;f=null;g=d.d;h=Bz();i=c.j;j=0;while(j<i){if(f===null){k=(Bo(c,j)).X;l=QL(EA(BS(g.f,k)));m=RA(g.eM);}else{m=f.data;k=m[j].ko.j8;l=!BB(g.eM,m[j].h$)?C(5):QL(EA(BS(g.f,k)));m=RA(m[j].h$);}if(H(l)>153){l=B9(l,0,150);n=new R;T(n);J(J(n,l),C(102));l=S(n);}if(H(m)>153){n=B9(m,0,150);m=new R;T(m);J(J(m,n),C(102));m=S(m);}o=DX(k+1|0);if(f!==null){p=f.data;n=null;q=p[j];}else{q=null;n=Bo(c,j);}if(f!==null){p=new Vf;p.pd=d;p.pe=q;}else{p=new Vg;p.tJ=d;p.tI=n;}n=new Jb;n.rb
=p;n.hM=o;n.hY=l;n.fm=m;Bu(h,n);j=j+1|0;}r=GX(h,ARs);if(a.cE!==null)RO(a);c=new Pm;l=a.dP;m=new O$;m.lY=a;m.lZ=d;Kq(c);c.cG=new Bp;c.bC=new Bp;c.df=AHC();c.fS=new Bp;c.bQ=ARs;c.dE=O(Hw,0);c.dc=0;c.dL=0;c.fd=0;c.eJ=0;c.ew=0;c.dF=AC5(0);c.gk=FQ();c.bz=l;c.hE=m;c.uk=m;N$(c);Sh(c);c.bQ=r;d=a.gd;l=d.fi;d=d.t5;c.pI=l;c.sA=d;c.dw=null;c.dF=null;c.eb=0;Sh(c);d=new S2;l=a.dP;d.N=ANF();d.bh=l;m=new TJ;Kq(m);m.i_=new B4;m.eL=l;d.K=m;a.cE=d;d=new OG;l=a.dP.c4;Kq(d);m=new Nh;m.pG=d;d.nX=m;m=new Ng;m.qK=d;d.sp=m;d.ti=10.0;d.bl
=c;d.lD=l;c.fT=d;l=a.gd.fi;m=l.n8;l=l.m3;d.t3=m;d.t0=l;h=d.cH;if(h!==null)F6(h,m,l);h=d.cM;if(h!==null)F6(h,m,l);l=a.cE;m=l.N;h=m.H;g=m.o;d=CY(m,d);l.N=d;d.kM(h,g,l.bh.bW);d=a.cE;l=APp();J(J(l,C(103)),e);Yx(d,GK(l),a.gd.sT,4.0);Zb(a.cE,a.gd.fi);WF(a.dv,a.cE);b=AAz(c,b,ABJ(a.cE)+Cj(a.dP,2.0)|0);d=ABc(c,b);JU(a.cE,b,d);HM(a.dP,c);}
function RO(a){var b,c;b=a.dv;c=a.cE;TV(b.c1,c);b=a.cE;c=b.K;c.c5=CY(c.c5,null);b.N=CY(b.N,null);a.cE=null;}
function PD(a,b){var c;c=new Ph;c.mr=a;c.ms=b;return c;}
function AKW(a,b,c,d){var e,f,g,h;e=a.dv;f=0;a:{while(true){g=e.c1;if(f>=g.j)break;if((Bo(g,f)).N.gC(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function XJ(b){var c;c=new VM;c.lU=b;return c;}
var GM=F(0);
function AI7(a){}
function AFB(a){}
var OQ=F(0);
var O3=F(0);
function Yi(){var a=this;B.call(a);a.V=null;a.cs=null;a.bw=null;a.L=null;a.im=null;a.ut=0;a.lA=null;a.cy=null;a.kE=0;a.fc=0;a.iy=null;a.gw=null;a.bZ=null;a.M=0;a.d=null;a.eo=null;a.ct=null;a.g8=null;a.e6=null;a.sX=0;a.qV=0;a.cp=0;a.bY=0;a.b8=0;a.ex=null;a.er=null;a.et=null;a.gh=0;a.hj=0;a.xz=0;a.vi=0;a.iG=0;a.h6=0;a.k0=0;a.dn=0;a.c3=null;a.ej=null;a.ez=0;a.bA=0;a.uZ=null;a.g6=null;a.v8=null;a.wU=null;a.vG=null;a.bj=0;a.f3=null;a.pf=0;a.nE=null;a.sI=null;}
function AOm(a,b){var c=new Yi();AKj(c,a,b);return c;}
function AKj(a,b,c){var d,e,f,g,h;a.V=new Bp;a.cs=new Bp;a.ut=0;a.lA=O(Bh,10);d=new OB;e=new Vw;f=new Bp;e.cI=f;e.bo=new Bp;e.eQ=new B4;e.g$=new B4;Bn(f,0,0);Bn(e.bo,2,20);d.dO=e;d.jk=0.5;d.gm=0.0;IS(187,187,187,255,e.eQ);a.cy=d;a.fc=16;a.iy=C(104);a.bZ=O(JQ,4);a.d=AEk(O(Bw,0),null,null);f=new Vn;f.oR=Cq(O(I5,0));f.uq=Cq(O(I5,0));f.me=Cq(O(RF,0));f.to=Cq(O(O0,0));f.sW=Cq(O(F$,0));f.sF=Cq(O(Rl,0));a.eo=f;a.e6=O(EK,0);a.ex=Cd(1,0);a.er=Tv();a.et=Tv();a.gh=0;a.hj=1;a.iG=1;a.h6=1;a.k0=1;a.dn=3;a.c3=AMs();a.ej=C(105);a.ez
=0;a.bA=0;e=D2();BU(e);f=new MR;f.wR=e;a.g6=f;a.bj=0;e=new MQ;e.lW=a;a.nE=e;e=new MP;e.p$=a;a.sI=e;a.bw=b;a.L=b.c6;a.im=c;c=new Te;g=a.bZ;h=b.b7;c.iA=new B4;c.iv=new Bp;c.jz=new Bp;b=new B4;c.gN=b;c.jB=g;c.lv=h;RW(b);a.f3=c;g=a.lA.data;b=new MO;b.s7=a;g[1]=b;b=new MV;b.nx=a;g[2]=b;b=new MU;b.rd=a;g[3]=b;b=new MT;b.uB=a;g[4]=b;b=new MS;b.ne=a;g[5]=b;b=new MN;b.qw=a;g[6]=b;}
function RB(a,b,c,d){var e,f,g,h;a.cp=Cn(80.0,d);a.bY=Cn(1.0,d);a.b8=Cn(10.0,d);if(!a.bA)Cp(a.bw.dQ,a.V);else Bn(a.bw.dQ,(b.b+c.b|0)-H7(a)|0,b.a);b=a.c3;e=a.bw.dQ;f=H7(a);g=c.a;h=d;Cp(b.eR,e);Bn(b.eh,f,g);b.hJ=h;b=a.cy;f=Cn(2.0,d);b.dO.bo.b=f;PT(a,a.iy,a.fc);Ke(a);}
function AFr(a){a.kE=1;J_(a);}
function ACO(a){a.kE=0;}
function J_(a){var b;b=a.cy;b.gm=Mx(Fa(a))+b.jk*1.25;b.fq=1;}
function Pq(a){a.g8=CY(a.g8,EY(a.L,1024,a.M,a.bw.b7));}
function H6(a,b,c){if(a.bw.bW!==0.0){PT(a,b,c);GE(Fa(a));}a.fc=c;a.iy=b;}
function PT(a,b,c){var d,e,f,g,h,i,j;d=Cn(c,a.bw.bW);e=a.gw;f=e!==null?e.ow:0;if(!(d==f&&BB(b,a.iy))){IN(a.c3);g=a.e6.data;c=g.length;f=0;while(f<c){VI(g[f]);f=f+1|0;}g=a.d.f.v.data;c=g.length;f=0;while(f<c){DY(g[f]);f=f+1|0;}g=a.bZ.data;h=Gw(0,0);e=a.L;i=d;g[h]=F5(e,b,i,300,0);a.bZ.data[Gw(0,1)]=F5(a.L,b,i,300,2);a.bZ.data[Gw(1,0)]=F5(a.L,b,i,600,0);a.bZ.data[Gw(1,1)]=F5(a.L,b,i,600,2);e=a.bZ.data[Gw(0,0)];a.gw=e;c=Fi(e);f=Dy(c*1.25);a.M=f;e=a.f3;e.uM=f;g=a.bZ.data;j=g[0];e.tR= -( -((f+j.d0+j.dC)/2.0)|0)|0;a.cy.dO.bo.a
=Fi(g[0]);Pq(a);f=a.M;h=U$(a.cy);e=new R;T(e);b=J(J(e,C(106)),b);B0(b,32);Bj(J(Bj(J(Bj(J(Bj(b,d),C(107)),c),C(108)),f),C(109)),h);$rt_globals.console.info($rt_ustr(S(e)));if(ARt){c=JA(a.bZ.data[0],a.M);b=new R;T(b);Bj(J(b,C(110)),c);$rt_globals.console.info($rt_ustr(S(b)));}a.d.gb=FI(EW(a),a.d.s,a.L.da,a.bZ);F9(a);Ke(a);}}
function Ll(a){return V(Ch(a.d.f)+5|0,a.M);}
function IP(a){return Ba(Ll(a)-a.cs.a|0,0);}
function RR(a){return Ba(a.gh-C7(a)|0,0);}
function C7(a){var b;b=!a.bA?0:CK(a)+a.b8|0;return Ba(1,(a.cs.b-a.cp|0)-b|0);}
function H7(a){return a.bA?a.cp:a.cp-a.b8|0;}
function Dd(a){return a.cs.a;}
function E7(a,b){var c,d;c=Ss(b,IP(a));if(c!=a.bj){a.bj=c;a.d.i7=c/a.M;d=a.wU;if(d!==null)d.vb(c);}}
function HI(a,b){var c,d;c=Ss(b,RR(a));d=a.d;if(c!=d.cT){d.cT=c;d=a.v8;if(d!==null)d.vb(c);}}
function Wl(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=HE(a.cs.a,a.M)+7|0;c=a.e6;if(c.data.length<b)a.e6=XL(b,c,a.f3,a.sX,a.qV,a.d.f);DP(a.L,0);QA(a.L,a.V,a.cs);d=(a.M-U$(a.cy)|0)/2|0;e=(a.d.gb-(RM(a.cy)/2|0)|0)-a.d.cT|0;f=!a.bA?a.cp:(a.bY+a.b8|0)+CK(a)|0;g=a.cy;b=f+e|0;d=(d+V(a.d.n,a.M)|0)-a.bj|0;Bn(g.dO.cI,b,d);h=Ch(a.d.f);i=Kg(a);j=S4(a);a.sX=i;a.qV=j;k=!a.bA?a.V.b+a.cp|0:((a.V.b+a.bY|0)+a.b8|0)+CK(a)|0;l=i;while(l<=j&&l<h){m=BS(a.d.f,l);g=TI(a,l);Wk(g,m,a.g8,a.L,a.M,C7(a),a.d.cT);n=g.by;a.gh=Ba(a.gh,
Eo(m)+(40.0*a.bw.bW|0)|0);o=V(a.M,l)-a.bj|0;p=Cy(a)===null?null:(Cy(a)).data[l];d=a.V.a+o|0;m=a.L;f=C7(a);q=a.M;o=a.d.cT;r=a.ct;s=ZJ(Z(a),l);if(s!==null){if(s.a==(-1))s.a=n.G;s.b=FI(n,s.b,a.L.da,a.bZ);s.a=FI(n,s.a,a.L.da,a.bZ);}t=a.d;Xy(g,d,k,m,f,q,o,r,s,t.gL,t.gv,t.n!=l?0:1,Cy(a)===null?0:1,p);l=l+1|0;}r=a.bw.dQ;l=i;while(l<=j&&l<h&&a.iG){g=TI(a,l);o=V(a.M,l)-a.bj|0;u=AAI(Z(a),l);t=a.ct.bB.pE;v=a.d.n==l&&Cy(a)===null?1:0;if(u)t=a.ct.bB.iB;else if(Cy(a)!==null&&l<(Cy(a)).data.length&&(Cy(a)).data[l]!==null)
{t=a.ct;t=J4(t.dy,t,(Cy(a)).data[l].jG);}else if(v)t=a.ct.bB.hs;XF(g,a.L,k,a.V.a+o|0,a.M,r,a.d.cT,C7(a),t);l=l+1|0;}if(a.hj){q=Be(j+1|0,h);Y_(a,V(a.M,q)-a.bj|0);}Z4(a);Zl(a,i,j);if(a.h6)ABz(a,i,j,h);if(a.kE&&e>=(( -RM(a.cy)|0)/2|0)){g=a.cy;t=a.cs;if(Xn(g.dO.cI,0,0,t))AAg(a.cy,a.L,a.V);}ZF(a);YU(a);Ku(a.L);}
function ABz(a,b,c,d){var e,f,g,h,i,j;while(b<=c&&b<d){e=Cy(a)!==null&&b<(Cy(a)).data.length?(Cy(a)).data[b]:null;if(e!==null){f=a.ct;f=J4(f.dy,f,e.jG);}else f=Cy(a)!==null?a.ct.bB.fL:a.ct.bB.hs;if(!(a.d.n!=b&&e===null)){a.ex.b=!a.bA?(a.b8-a.bY|0)-a.dn|0:((a.b8+CK(a)|0)+a.bY|0)-a.dn|0;g=a.ex;h=a.M;g.a=h;i=a.bA?0:(a.cp-a.b8|0)+a.bY|0;h=V(h,b)-a.bj|0;e=a.L;j=a.V;BC(e,j.b+i|0,j.a+h|0,g,f);}b=b+1|0;}}
function Zl(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;d=a.cs.a;e=Be(d,V(Ch(a.d.f),a.M)-a.bj|0);f=a.c3;g=a.bj;h=Cy(a)!==null?(-1):a.d.n;i=a.L;j=a.ct;QA(i,f.eR,f.eh);RL(f,i,b,d);k=f.eX;if(b!=k){l=f.ci.j;m=l*20|0;if(k<b){k=k/20|0;n=b/20|0;}else{n=Ba(0,(k-1|0)/20|0);k=Ba(0,(b-1|0)/20|0);}a:{if((n-k|0)>=l){Qr(f,b);f.eX=b;}else{if(f.eX>=b)while(true){if(n<k)break a;f.eX=Mr(Bo(f.ci,n%l|0),f.d2,f.e0,f.eX,b,m,f.hJ);n=n+(-1)|0;}while(k<=n){f.eX=Mr(Bo(f.ci,k%l|0),f.d2,f.e0,f.eX,b,m,f.hJ);k=k+1|0;}}}}o
=BL(f.ci);while(BM(o)){p=BP(o);q=f.eR;k=V(f.ci.j,f.ia);r=f.iX;s=p.ee.a;n=((p.iD.a-(g%k|0)|0)+k|0)%k|0;t=j.hl;l=g+n|0;u=p.F;m=l/u|0;v=n+s|0;l=BF(v,e);if(l<=0){k=s/u|0;u=0;v=0;w=0;while(v<k){l=m+v|0;if(KJ(p,r,w,l,j,t)){s=V((v-u|0)+1|0,p.F);Bn(p.de,Cf(p.Z),s);Cb(p.dU,0.0,V(u,p.F),Cf(p.Z),s);l=w;}else{x=Fh(j,r,w,t);Ed(p,i,n+V(u,p.F)|0,q,t.eB,x);Bn(p.de,Cf(p.Z),p.F);Cb(p.dU,0.0,V(v,p.F),Cf(p.Z),p.F);u=v;}v=v+1|0;w=l;}x=Fh(j,r,w,t);Ed(p,i,n+V(u,p.F)|0,q,t.eB,x);}else{if(l>0&&n<e){l=Ba(e-n|0,0);w=p.F;u=l/w|0;if(l%
w|0)u=u+1|0;y=0;z=0;ba=0;while(z<u){w=m+z|0;if(KJ(p,r,ba,w,j,t)){l=V((z-y|0)+1|0,p.F);Bn(p.de,Cf(p.Z),l);Cb(p.dU,0.0,V(y,p.F),Cf(p.Z),l);w=ba;}else{x=Fh(j,r,ba,t);Ed(p,i,n+V(y,p.F)|0,q,t.eB,x);Bn(p.de,Cf(p.Z),p.F);Cb(p.dU,0.0,V(z,p.F),Cf(p.Z),p.F);y=z;}z=z+1|0;ba=w;}x=Fh(j,r,ba,t);Ed(p,i,n+V(y,p.F)|0,q,t.eB,x);}if(v>k)Y$(p,q,e,g,k,j,r,i,s,n,t);}}x=j.hl;if(e<d){bb=f.eR;BC(i,bb.b,bb.a+e|0,Cd(f.eh.b,d-e|0),x.g7);}if(b<=h&&h<=c)AAa(f,g,h,j.hl,i);Ku(i);}
function Kg(a){return Be(a.bj/a.M|0,Ch(a.d.f)-1|0);}
function S4(a){return Be(((a.bj+Dd(a)|0)-1|0)/a.M|0,Ch(a.d.f)-1|0);}
function Ke(a){var b,c,d,e,f,g,h;b=a.c3;c=a.bZ.data[0];d=a.M;e=a.bw.b7;f=a.L;b.hC=c;b.ld=d;g=d*20|0;b.ia=g;h=CY(b.d2,EY(f,b.eh.b,g,e));b.d2=h;CG(h,b.hC);QY(b.d2,2);c=CY(b.e0,EY(f,b.eh.b,d,e));b.e0=c;CG(c,b.hC);QY(b.e0,2);RL(a.c3,a.L,Kg(a),Dd(a));}
function TI(a,b){var c;c=a.e6.data;return c[b%c.length|0];}
function Ur(a,b){var c,d,e,f;c=Ff(0,H(a.ej),Mk(b));if(!c)b=null;else{b=C(47);if(c<0){b=new BI;W(b);K(b);}if(c!=1){d=b.b5.data.length;if(d&&c){e=B2(V(d,c));d=0;f=0;while(f<c){OS(b,0,H(b),e,d);d=d+H(b)|0;f=f+1|0;}b=K9(e);}else b=AQp;}}return b;}
function Nk(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=Bv(i);k=APN(i).data;GG(j,c);c=0;l=k.length;if(c>l){f=new BI;W(f);K(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.f;o.b3=o.b3+1|0;p=O(F1,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ALD(h[m],n[m],k[m],b[m],f.X,f.be);m=m+1|0;}Bu(o.gB,p);c=0;while(c<i){b=e.data;I0(o,h[c],n[c],k[c],b[c]);g.lE(Ct(h[c]),b[c]);c=c+1|0;}}
function ABC(a){var b;if(CX(Z(a)))FF(a);else{b=a.d;LL(b.f,b.n,b.s);}F9(a);DG(a);return 1;}
function Dj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.ez)return 0;if(CX(Z(a)))FF(a);c=KN(Tg(b,C(111),C(5)),C(112),(-1));d=c.data;b=a.d;e=b.f;f=b.n;g=b.s;Wa(e,f,g,c);h=d.length;if(!h)b=AQp;else{i=0;j=0;while(j<h){i=i+H(d[j])|0;j=j+1|0;}k=B2(i+V(h-1|0,H(C(112)))|0);c=k.data;l=0;b=d[0];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<H(C(112))){m=l+1|0;c[l]=I(C(112),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<H(b)){m=l+1|0;c[l]=I(b,j);j=j+1|0;l=m;}n=n+1|0;}b=K9(k);}EZ(e,f,g,0,b);b=a.d;f=b.n;m=(f
+h|0)-1|0;Ci(a,m,m!=f?H(d[h-1|0]):b.s+H(d[0])|0,0);E4(a);DG(a);return 1;}
function FF(a){var b,c,d;b=Dt(Z(a));c=a.d.f;d=Z(a);LT(c,d,Ua(c,d));Ci(a,b.z,b.O,0);E4(a);DG(a);}
function E4(a){var b,c;(Z(a)).cO=0;b=(Z(a)).bs;c=a.d;BY(b,c.n,c.s);b=(Z(a)).bi;c=a.d;BY(b,c.n,c.s);}
function CK(a){return a.gw.le|0;}
function Y_(a,b){var c,d;c=a.cs.a;if(b<c){d=a.bw.dQ;d.a=c-b|0;d.b=!a.bA?C7(a)+a.dn|0:C7(a)+a.bY|0;c=!a.bA?(a.V.b+a.cp|0)-a.dn|0:(((a.V.b+a.b8|0)+CK(a)|0)+a.bY|0)-a.dn|0;BC(a.L,c,a.V.a+b|0,d,a.ct.bB.fL);}}
function ZF(a){var b;b=a.bA?a.V.b+CK(a)|0:a.V.b+a.cs.b|0;Vy(a.er,a.bj,a.V.a,Dd(a),Ll(a),b,CK(a));b=!a.bA?a.V.b+a.cp|0:((a.V.b+a.bY|0)+a.b8|0)+CK(a)|0;PB(a.et,a.d.cT,b,C7(a),a.gh,a.V.a+Dd(a)|0,CK(a));}
function YU(a){var b,c;b=P0(a.er);c=P0(a.et);if(!(!b&&!c)){DP(a.L,1);if(b)G$(a.er,a.L);if(c)G$(a.et,a.L);if(b)He(a.er,a.L);if(c)He(a.et,a.L);}}
function Z4(a){var b,c,d,e;b=a.ex;c=a.cs;b.a=c.a;b.b=a.bY;d=!a.bA?a.cp-a.b8|0:(c.b-H7(a)|0)-a.bY|0;b=a.L;c=a.V;BC(b,c.b+d|0,c.a,a.ex,a.ct.bB.r1);a.ex.b=!a.bA?(a.b8-a.bY|0)-a.dn|0:((a.b8+CK(a)|0)+a.bY|0)-a.dn|0;e=a.bA?0:(a.cp-a.b8|0)+a.bY|0;b=a.L;c=a.V;BC(b,c.b+e|0,c.a,a.ex,a.ct.bB.fL);}
function Ss(b,c){return Be(Ba(0,b),c);}
function Fa(a){return a.bw.fg;}
function LB(a,b){var c,d,e,f;c=In(b);d=new R;T(d);J(J(d,C(113)),c);$rt_globals.console.info($rt_ustr(S(d)));Fa(a);c=In(b);d=C2();c=$rt_ustr(c);d.title=c;Ci(a,0,0,0);c=new M0;c.pN=a;c.pM=b;d=D2();BU(d);e=new M2;e.sx=d;f=new SN;f.oF=e;d=new Vd;d.mZ=c;c=b.hQ;if(c!==null)c.text().then(Bi(d,"f"),Bi(f,"f"));else{b=b.hf.getFile();c=new Ve;c.ol=d;c.om=f;b.then(Bi(c,"f"),Bi(f,"f"));}}
function GU(a,b,c,d,e){if(G2(a,e))return 1;if(c&&d)return 1;if(c)E7(a,a.bj+((V(b,a.M)*12|0)/10|0)|0);else if(!d){Gz(a,a.d.n+b|0,e);St(a);}return 1;}
function QR(a,b,c,d){var e,f,g;if(G2(a,d))return 1;e=EW(a);if(!c)f=a.d.s+b|0;else if(b>=0)f=FX(e,a.d.s);else{b=a.d.s;if(!b)f=(-1);else{c=HP(e,b);if(c>0&&e.dk.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.dk.data[c-1|0];}}if(f>e.G){e=a.d;if((e.n+1|0)<Ch(e.f))Ci(a,a.d.n+1|0,0,d);}else if(f>=0)CR(a,f,d);else{e=a.d;b=e.n;if(b>0){g=(BS(e.f,b-1|0)).G;Ci(a,a.d.n-1|0,g,d);}}TU(a);return 1;}
function G2(a,b){if(CX(Z(a))&&!b){E4(a);F9(a);return 1;}if(!(b&&CX(Z(a))))E4(a);return 0;}
function Ci(a,b,c,d){a.d.s=c;return Gz(a,b,d);}
function Gz(a,b,c){var d;d=a.d;d.n=Ff(0,b,Ch(d.f)-1|0);return CR(a,a.d.s,c);}
function CR(a,b,c){var d,e;a.d.s=Ff(0,b,(EW(a)).G);a.d.gb=a.bw.bW===0.0?0:FI(EW(a),a.d.s,a.L.da,a.bZ);J_(a);F9(a);if(c)(Z(a)).cO=1;d=Z(a);e=a.d;Ka(d,e.n,e.s);(Z(a)).cO=0;return 1;}
function K_(a,b){var c;c=AEq(Z(a));CR(a,b,0);G7(Z(a),c);}
function F9(a){St(a);TU(a);}
function St(a){var b,c,d,e,f;b=a.bj;c=b+Dd(a)|0;d=a.d.n;e=a.M;d=V(d,e);f=d+e|0;if(d<(b+e|0))E7(a,d-e|0);else if(f>(c-e|0))E7(a,(f-Dd(a)|0)+a.M|0);}
function TU(a){var b,c,d,e,f;b=Dy(a.bw.bW*30.0);c=a.d.cT;d=c+C7(a)|0;e=a.d.gb;f=e+b|0;if(e<(c+b|0))HI(a,e-b|0);else if(f>(d-b|0))HI(a,(f-C7(a)|0)+b|0);}
function Hb(a,b){var c,d;Ci(a,b.X,b.be,0);c=FX(EW(a),a.d.s);BY((Z(a)).bi,a.d.n,c);b=(Z(a)).bs;d=a.d;BY(b,d.n,d.s);}
function Ef(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.V;e=c-d.b|0;f=Ff(0,((b.a-d.a|0)+a.bj|0)/a.M|0,Ch(a.d.f)-1|0);g=!a.bA?a.cp:(a.bY+a.b8|0)+CK(a)|0;h=Ba(0,(e-g|0)+a.d.cT|0);b=BS(a.d.f,f);d=a.L.da;i=a.bZ;if(!(b.dW!==null&&!b.fe))Jk(b,d,i);j=b.dW;e=b.k.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.G;else{c=Si(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.k.data.length)k=b.G;else{j=QX(b,d,i,c);k=0;e=0;while(e<c){k=k+H(b.k.data[e].p)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(ARu){b=new R;T(b);Bj(J(Bj(J(Bj(J(b,C(114)),e),C(115)),h),C(116)),m);$rt_globals.console.info($rt_ustr(S(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return Di(f,k);}
function VK(a,b){var c,d;c=a.d;d=b.X;c.n=d;c.s=b.be;c.gb=FI(BS(c.f,d),a.d.s,a.L.da,a.bZ);J_(a);}
function EW(a){var b;b=a.d;return BS(b.f,b.n);}
function AII(a,b,c){(Z(a)).cO=0;return 1;}
function ACc(a,b,c){var d;if(c)return null;d=Hk(a.er,b.u,a.nE,1);if(d!==null)return d;d=Hk(a.et,b.u,a.sI,0);if(d!==null)return d;HN(a);VK(a,Ef(a,b.u));JO(a.d);if(!b.bv&&!(Z(a)).cO){b=(Z(a)).bs;d=a.d;BY(b,d.n,d.s);}(Z(a)).cO=1;b=Z(a);d=a.d;Ka(b,d.n,d.s);b=new Mh;b.pv=a;return b;}
function ACs(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cg){b=b.u;e=Ef(a,b);f=HB(a.d.f,e.X,e.be);g=RH(a,f);h=KT(a.eo,DI(a.d),Fv(a.d));if(h!==null){i=a.d;c=e.X;d=e.be;e=new OM;e.v1=a;e.v4=b;e.v3=g;h.qO(i,c,d,e,a.g6);}else{e=B7(a.d.f.c_,f);if(e!==null){Hb(a,e);c=1;}else{e=B7(a.d.f.cP,f);if(e!==null&&!DO(e)){if(e.j!=1){PU(a.im,b,e,a,g);c=1;}else{Hb(a,Bo(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(Ef(a,b.u)).X;g=BS(a.d.f,c);c=Fl(g,a.d.s);d=FX(g,a.d.s);b=KF(g,c);if((d-1|0)==g.G){BY((Z(a)).bs,a.d.n,
Mk(g));BY((Z(a)).bi,a.d.n,g.G);}else{if(b!==null){b=b.p;j=0;c:{while(true){k=b.b5.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.s;if(c==j){c=Fl(g,c-1|0);d=FX(g,c);}else{if(d!=j){Oy(Z(a),a.d.n);break b;}c=Fl(g,d+1|0);d=FX(g,c);}}}BY((Z(a)).bs,a.d.n,c);(Z(a)).cO=1;Ci(a,a.d.n,d,0);(Z(a)).cO=0;HN(a);}}break a;case 3:break;default:break a;}Oy(Z(a),a.d.n);Qy(a.d.fI);HN(a);}}return 1;}
function AC8(a,b){var c,d,e,f,g,h,i,j,k;c=a.bw.c4;if(HA(a.er,b.u,c))return 1;if(HA(a.et,b.u,c))return 1;d=a.c3;if(Ft(b.u,d.eR,d.eh)&&Fj(c)?1:0)return 1;e=b.u;f=!a.bA?a.V.b+a.cp|0:((a.V.b+a.b8|0)+a.bY|0)+CK(a)|0;a:{g=a.V.a;h=C7(a);i=Dd(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Fj(c);if(b.cg){e=Ef(a,b.u);e.be=Fl(BS(a.d.f,e.X),e.be);b=a.d.f;if(!Iz(b.c_,e)&&!Iz(b.cP,e)?0:1)return Dx(c,C(117));}return Dx(c,C(118));}
function AMG(a,b){var c,d,e,f,g;c=b.cg;if(c&&b.bT==65){c=Ch(a.d.f)-1|0;d=E8(a.d.f,c);BY((Z(a)).bs,0,0);BY((Z(a)).bi,Ch(a.d.f)-1|0,d);return 1;}if(c&&b.bT==80){HV(a.d);return 1;}if(!a.ez&&c&&b.bT==90){if(CX(Z(a)))E4(a);b=a.d.f;b.b3=b.b3+1|0;e=b.gB;d=e.j;if(!d)e=null;else{f=(E6(e,d-1|0)).data;e=L8(b,f[0]);c=1;while(c<f.length){L8(b,f[c]);c=c+1|0;}}if(e!==null){Ci(a,e.b,e.a,0);DG(a);}return 1;}if(!c&&!b.cJ){if(B1(b.dK,C(119))){Dj(a,C(120));CR(a,a.d.s-1|0,0);c=1;}else if(B1(b.dK,C(121))){Dj(a,C(122));CR(a,a.d.s
-1|0,0);c=1;}else if(B1(b.dK,C(123))){Dj(a,C(124));CR(a,a.d.s-1|0,0);c=1;}else if(B1(b.dK,C(125))){Dj(a,C(126));CR(a,a.d.s-1|0,0);c=1;}else if(B1(b.dK,C(127))){Dj(a,C(128));CR(a,a.d.s-1|0,0);c=1;}else if(!B1(b.dK,C(129)))c=0;else{Dj(a,C(130));CR(a,a.d.s-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cJ&&!b.cg)){d=b.bT;if(d>=48&&d<=57){c=d-48|0;e=a.lA.data[c];if(e!==null)e.t();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bT){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(YS(a,b))return 1;if(ZA(a,b))return 1;c=b.cg;if(c&&b.bT==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bT;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.cJ&&!b.h3)return H(b.dK)>0&&Dj(a,b.dK)?1:0;return 0;}return 0;}
function RJ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=Kg(a);d=S4(a);if(b.dT!=3&&b.fJ==3){e=Tb(b.j9);f=new L3;f.ps=c;f.pr=d;g=new Pp;g.o6=f;while(!g.jh&&SY(e,g)){}if(!g.jh&&B1(C(131),DI(b))){c=Ba(0,c-100|0);d=Be(Ch(b.f)-1|0,d+100|0);Bu(b.j9,Cd(c,d));h=Bv(3);i=h.data;i[0]=Em(b.f,c);e=b.f;j=0;d=Be(d+1|0,e.v.data.length);k=0;while(k<d){j=j+E8(e,k)|0;if(k!=(e.v.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.rX=D1();e=b.c8;l=new TW;l.oS=b;i=O(B,3);m=i.data;m[0]=EN(b.f);m[1]=h;b=b.f.cC;g=Bz();R2(b,b.cA,g);h
=Bv(3*g.j|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bo(g,o);d=k+1|0;n[k]=b.bF;q=d+1|0;n[d]=b.bI;k=q+1|0;n[q]=b.el;o=o+1|0;}m[2]=h;En(e,l,C(132),i);}}}
function Ql(a){AAk(a.d);}
function Km(a,b,c){var d,e,f,g,h,i;if(c&&a.ez)return 0;d=Dt(Z(a));e=d.z;if(CX(Z(a))){f=a.d.f;g=Z(a);h=Ua(f,g);if(c)LT(f,g,h);if(c){Ci(a,d.z,d.O,0);E4(a);DG(a);}}else{h=GW(EA(a.d.f.v.data[e]),C(112));i=Be(Ch(a.d.f)-1|0,e);BY((Z(a)).bi,i,0);if(e>=(Ch(a.d.f)-1|0))BY((Z(a)).bi,i,E8(a.d.f,i));else BY((Z(a)).bs,i+1|0,0);if(c)FF(a);else Ci(a,e,0,0);}b.m(h);return 1;}
function ZA(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.ez)return 0;a:{switch(b.bT){case 8:if(CX(Z(a))){FF(a);c=1;}else{b=a.d;d=b.s;if(!d&&!b.n)c=1;else{if(d){e=b.n;c=d-1|0;LL(b.f,e,c);}else{e=b.n-1|0;c=E8(b.f,e);b=a.d.f;JV(b,e);EZ(b,e,E8(b,e),1,C(112));}DG(a);c=Ci(a,e,c,0);}}break a;case 9:if(!b.bv){if(!CX(Z(a)))Dj(a,a.ej);else{f=Dt(Z(a));g=E0(Z(a));c=g.z;d=f.z;e=(c-d|0)+1|0;h=Bv(e);i=h.data;j=O(Bw,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.ej;d=d+1|0;e=l;}b=new T7;m=a.d;Zd(b,m.n,m.s);m=new Sp;m.q6=
a;Nk(a,h,0,0,j,b,m);f.O=f.O+H(a.ej)|0;g.O=g.O+H(a.ej)|0;K_(a,a.d.s+H(a.ej)|0);DG(a);}c=1;}else b:{if(!CX(Z(a))){b=a.d;f=BS(b.f,b.n);if(f.k.data.length>0){g=Ur(a,f);if(g===null){c=1;break b;}m=a.d;n=m.f;e=m.n;b=Di(e,m.s);n.b3=n.b3+1|0;o=n.gB;h=O(F1,1);h.data[0]=ALD(e,0,1,g,b.X,b.be);Bu(o,h);I0(n,e,0,1,g);FD(f,0,H(g));K_(a,a.d.s-H(g)|0);}}else{b=Dt(Z(a));f=E0(Z(a));c=f.z;p=b.z;c=(c-p|0)+1|0;h=Bv(c);k=h.data;j=O(Bw,c);q=j.data;g=a.d;e=g.s;l=g.n;c=0;while(p<=f.z){g=BS(a.d.f,p);if(g.k.data.length>0){g=Ur(a,g);if
(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=HZ(h,c);j=CW(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.z)b.O=Ba(0,b.O-H(g)|0);if(p==f.z){f.O=Ba(0,f.O-H(g)|0);K_(a,a.d.s-H(g)|0);}d=d+1|0;}b=Di(l,e);f=new RV;f.pC=a;Nk(a,h,0,1,j,b,f);}DG(a);c=1;}break a;case 13:if(CX(Z(a)))FF(a);b=a.d;DY(BS(b.f,b.n));b=a.d;AAQ(b.f,b.n,b.s);DG(a);c=Ci(a,a.d.n+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ABC(a);}return c;}
function YS(a,b){var c,d,e,f;a:{switch(b.bT){case 33:c=b.cg?Gz(a,HE(a.bj,a.M),b.bv):GU(a,2-Uf(Dd(a),a.M)|0,0,b.cJ,b.bv);break a;case 34:c=!b.cg?GU(a,Uf(Dd(a),a.M)-2|0,0,b.cJ,b.bv):Gz(a,((a.bj+Dd(a)|0)/a.M|0)-1|0,b.bv);break a;case 35:if(!G2(a,b.bv)&&!CR(a,(EW(a)).G,b.bv)){c=0;break a;}c=1;break a;case 36:if(!G2(a,b.bv)&&!CR(a,0,b.bv)){c=0;break a;}c=1;break a;case 37:c=b.cg;if(c&&b.cJ){HN(a);d=a.d.fI;e=d.cZ;if(e<=0)d=null;else{f=d.d$.data;c=e-1|0;d.cZ=c;d=f[c];}if(d===null)c=1;else{Ci(a,Ky(d),IG(d),0);G7(Z(a),
d.iY);c=1;}break a;}c=QR(a,(-1),c,b.bv);break a;case 38:c=GU(a,(-1),b.cg,b.cJ,b.bv);break a;case 39:c=b.cg;if(c&&b.cJ){d=a.d.fI;e=d.cZ;if(e==(d.d6-1|0))d=null;else{f=d.d$.data;c=e+1|0;d.cZ=c;d=f[c];}if(d===null)c=1;else{Ci(a,Ky(d),IG(d),0);G7(Z(a),d.iY);c=1;}break a;}c=QR(a,1,c,b.bv);break a;case 40:c=GU(a,1,b.cg,b.cJ,b.bv);break a;default:}c=0;}if(c&&b.bv){b=(Z(a)).bi;d=a.d;BY(b,d.n,d.s);}if(c)JO(a.d);return c;}
function HN(a){var b,c,d,e,f,g,h;b=a.d;c=b.fI;d=c.cZ;c=d<0?null:c.d$.data[d];if(c!==null&&b.n==Ky(c)&&a.d.s==IG(c))return;c=a.d;e=c.fI;b=new JJ;d=c.n;f=c.s;c=Z(a);b.kl=Di(d,f);g=AEq(c);b.iY=g;g.cO=0;f=e.cZ;h=e.d6;if(f==(h-1|0))TK(e,b);else{d=f+1|0;while(d<h){Qy(e);d=d+1|0;}TK(e,b);}e.cZ=e.cZ+1|0;}
function DG(a){a.d.f.rp=Mx(Fa(a));}
function Sf(a,b){var c,d,e,f;a.uZ=null;a.c3.iX=Eb(0);V7(a.d);c=a.d;a.d=b;OW(c,null,null);OW(b,a,Fa(a));d=(Cc(a.eo.sW)).data;e=d.length;f=0;while(f<e){d[f].lE(c,b);f=f+1|0;}a.bj=Gv(b.i7*a.M);}
function RH(a,b){var c;c=Ks(a.d.f,b);if(c===null)return C(5);return c.p;}
function Cy(a){return a.d.vV;}
function Z(a){return a.d.nM;}
function Tt(a){var b;b=a.vG;if(b!==null)b.m(a);}
function Ow(){B.call(this);this.vz=null;}
function ADr(a,b){return b.bT!=121?0:1;}
function Qp(){var a=this;B.call(a);a.mS=null;a.pa=null;a.oq=null;}
function AFF(a,b){var c,d,e,f;if(b.cg&&b.bT==79){c=a.pa;if(c!==null&&b.bv){if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ABo(c,1);else{d=new UQ;b=$rt_globals.window.showDirectoryPicker();e=new UP;e.oT=c;e.oU=d;b.then(Bi(e,"f"),Bi(d,"f"));}}else Up(a.mS,a.oq);f=1;}else f=0;return f;}
var Bc=F(0);
function Ou(){B.call(this);this.tE=null;}
function AFN(a,b){LB(a.tE,b);}
function Ov(){B.call(this);this.n3=null;}
function MX(){B.call(this);this.o3=null;}
function MY(){B.call(this);this.un=null;}
function AHd(a,b,c,d){var e,f;b=a.un.cx;e=Dy((b.M*4|0)*d/150.0);f=Dy(c);if(e)E7(b,b.bj+e|0);if(f)HI(b,b.d.cT+f|0);return 1;}
function MW(){B.call(this);this.mD=null;}
function Zi(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=b;c=a.mD;d=c.es;e=c.cx;if(e!==d.ec?0:1){d=c.eT;f=new Rv;f.wH=c;if(!Fp(d.bO)){g=d.bO;b=b.u;h=new RQ;h.ey=d;h.bb=e;h.vk=f;h.f0=e;h.lC=c;h.iL=c;i=RU();f=h.bb.d;c=DI(f);f=Fv(f);j=h.bb.eo;if(Px(j,c,f)!==null){k=new QJ;k.mw=h;k.mx=b;Dz(i,C(133),k);}if(KT(j,c,f)!==null){k=new QK;k.pO=h;k.pP=b;Dz(i,C(134),k);}if(Sx(j,c,f)!==null){f=new QI;f.l6=h;f.l7=b;Dz(i,C(135),f);}f=new QH;f.ta=h;f.s_=b;Dz(i,C(136),f);FO(h);if(Kp()){if(!h.bb.ez){f=new PP;f.tA=h;Dz(i,C(137),f);}f
=new PQ;f.oj=h;Dz(i,C(138),f);if(!h.bb.ez){FO(h);if(Kp()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0){f=new PO;f.rk=h;Dz(i,C(139),f);}}}f=RU();l=O(Bw,4).data;l[0]=C(118);l[1]=C(131);l[2]=C(140);l[3]=C(141);m=l.length;n=0;while(n<m){j=l[n];o=new N0;o.mt=h;o.mu=j;Dz(f,j,o);n=n+1|0;}Es(i,C(142),Hc(f));k=RU();l=O(Dh,3);p=l.data;f=h.iL;BU(f);j=new L$;j.nW=f;p[0]=Cv(C(143),j);f=h.iL;BU(f);j=new L_;j.o2=f;p[1]=Cv(C(144),j);f=h.iL;BU(f);j=new L9;j.um=f;p[2]=Cv(C(145),j);JW(k,C(146),Gr(l),ARv);l=O(Dh,2);p
=l.data;f=h.f0;BU(f);j=new UO;j.pB=f;p[0]=Cv(C(147),j);f=h.f0;BU(f);j=new UN;j.sK=f;p[1]=Cv(C(148),j);Es(k,C(149),Gr(l));c=new NV;c.m_=h;JW(k,C(150),c,ARv);if(h.bb.bw.c6.kA){l=O(Dh,2);p=l.data;c=new Re;c.nw=h;p[0]=Cv(C(151),c);c=new Rf;c.oK=h;p[1]=Cv(C(152),c);Es(k,C(153),Gr(l));}Es(i,C(154),Hc(k));f=RU();Es(f,C(155),YC(h));Dz(f,C(156),AN6(h));Es(f,C(157),Xu(h));Es(i,C(158),Hc(f));O2(g,b,Hc(i),PD(d,e));}}return 1;}
function Mw(){B.call(this);this.sw=null;}
function AL8(a,b){var c,d;c=a.sw;d=b.ba;return ML(c.charCodeAt(d)&65535);}
var WC=F(0);
function AAw(b,c){var d,e,f,g,h,i,j,k,l,m;d=O(Bw,8);e=Eb(8);f=B2(16);g=0;h=0;i=0;while(true){j=BF(i,b);if(j>0)break;k=j>=0?10:(c.lL(Ct(i))).jp;if(k==10){d=AAy(DL(f,0,g),d,h);e=S_(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=My(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AAy(DL(f,0,g),d,h);j=i+1|0;if(j<b&&(c.lL(Ct(j))).jp==10){e=S_(1,e,h);i=j;}else e=S_(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new P5;d=XP(d,h);if(m.length!=h)e=KM(e,h);c.hu=d;c.vv=e;return c;}
function ADH(b){var c,d;c=H(b);BU(b);d=new MM;d.rl=b;return AAw(c,d);}
function UR(){var a=this;B.call(a);a.rS=null;a.sD=null;a.rz=null;}
function Gj(){var a=this;B.call(a);a.bv=0;a.cg=0;a.cJ=0;a.h3=0;}
function ARw(a,b,c,d){var e=new Gj();SD(e,a,b,c,d);return e;}
function SD(a,b,c,d,e){a.bv=d;a.cg=b;a.cJ=c;a.h3=e;}
function NY(){var a=this;Gj.call(a);a.dK=null;a.bT=0;a.sh=0;a.wu=0;a.ja=0;}
var AAJ=F();
function Uf(b,c){return (b+(c/2|0)|0)/c|0;}
function OT(b,c,d){if(b<(2147483647/c|0))return Uf(V(b,c),d);return 0.5+c*b/d|0;}
function HE(b,c){return ((b+c|0)-1|0)/c|0;}
function Gv(b){return b+0.5|0;}
function Dy(b){return b+0.5|0;}
function Ff(b,c,d){return Ba(b,Be(c,d));}
function XD(b,c){return WX(b)/WX(c);}
function Lm(){var a=this;Gj.call(a);a.u=null;a.uS=null;}
var Sw=F(0);
function MC(){var a=this;B.call(a);a.tF=null;a.tG=null;}
function AHw(a,b){var c,d;c=a.tF;d=a.tG;$rt_globals.console.info("paste plain string "+b);b=Et(b);Dj(c.m0,b);CU(d);}
function S8(){B.call(this);this.ub=null;}
function ALy(a,b){a.ub.clipboardData.setData("text/plain",$rt_ustr(b));}
function U1(){var a=this;IO.call(a);a.wi=0;a.mh=0;}
var Xg=F(0);
function IS(b,c,d,e,f){Cb(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function SJ(){var a=this;B.call(a);a.c6=null;a.fg=null;a.c4=null;a.cB=null;a.bW=0.0;a.b7=0;a.ec=null;a.ju=null;a.dQ=null;a.sV=null;a.uK=null;a.uL=null;}
function IA(a){var b;b=a.ec;if(b!==null)b.rU();}
function IY(a){var b;b=a.ec;if(b!==null)b.uA();}
function HM(a,b){IY(a);a.ec=b;IA(a);}
function KV(a){return a.c6.da;}
function HU(a,b){return F5(a.c6,b.iC,Cn(b.hb,a.bW),400,0);}
function Cj(a,b){return Cn(b,a.bW);}
var QV=F();
function AGa(a,b){var c,d,e;c=b.cg;d=c&&!b.bv&&!b.cJ&&!b.h3?1:0;a:{if(d){d=b.bT;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bv&&!c&&!b.cJ&&!b.h3?1:0;d=d&&b.bT==46?1:0;}b:{if(!d){e=b.bT;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.ja=1;}return 0;}
function QU(){B.call(this);this.ns=null;}
function AD3(a,b){var c;c=a.ns.ec;return c!==null&&c.jx(b)?1:0;}
var HO=F(0);
function Vh(){B.call(this);this.c1=null;}
function WF(a,b){Qt(a.c1,0,b);}
function T1(){var a=this;B.call(a);a.cz=null;a.b_=null;a.h0=null;a.il=null;a.k$=null;a.iE=null;}
function O2(a,b,c,d){var e,f;e=a.cz;f=e.cB;if(V(f.b,f.a)&&e.bW!==0.0){if(a.h0!==null&&!Fp(a)){a.iE=d;a.il=HU(a.cz,a.h0);e=Nj(a,b,c,null);b=new TR;b.rs=a;e.sB=b;HM(a.cz,a);return;}b=new BI;W(b);K(b);}c=new Df;Br(c,C(159));K(c);}
function Dq(a){var b;if(Fp(a)){b=a.cz;if(b.ec===a)b.ec=null;R$(a,null);a.iE.t();a.iE=ARp;}}
function U0(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new RE;f.b2=AHC();f.e7=new Bp;f.fA=new Bp;f.cc=ARx;f.hD=(-1);f.h7=1;f.fv=1;c=c.lz();Kt(f);f.cc=c;Pw(f,a.k$);OU(f,a.il,a.cz);if(d===null)g=b.b;else{g=b.b;g=a.cz.cB.b<((g+(EI(d)).b|0)+(EI(f)).b|0)?g-(EI(f)).b|0:(g+(EI(d)).b|0)-d.eI|0;}h=b.a;b=a.cz.cB;i=Ba(0,Be(g,b.b-(EI(f)).b|0));g=Ba(0,Be(h,b.a-(EI(f)).a|0));Bn(f.b2.cI,i,g);j=f.cv+f.eI|0;k=f.cc.data;h=k.length;l=0;m=j;while(l<h){c=k[l];b=c.d5;b.b=i+j|0;b.a=g+m|0;if(!f.fv){if(!c.dq.b)WT();j=j+(c.dq.b+f.cv|0)|0;}else
{if(!c.dq.a)WT();m=m+(c.dq.a+f.cv|0)|0;}l=l+1|0;}b=new Vm;b.n$=a;b.n_=f;b.oa=e;f.on=b;Bu(a.b_,f);return f;}
function Nj(a,b,c,d){return U0(a,b,c,d,null);}
function AHU(a,b){var c;if(!Fp(a))return 0;a:{switch(b.bT){case 27:Dq(a);c=1;break a;default:}c=0;}return c;}
function Yv(b,c){var d,e,f;d=b.d5;e=c.cv;f=c.eI;return Cd((d.b-(e*3|0)|0)-f|0,(d.a-e|0)-f|0);}
function R$(a,b){var c,d;c=a.b_.j-1|0;a:{while(true){if(c<0)break a;d=Bo(a.b_,c);if(b===d)break;E6(a.b_,c);d.fl=CY(d.fl,null);Bn(d.e7,0,0);d.cc=ARx;d.hD=(-1);RX(d.b2);c=c+(-1)|0;}}}
function Fp(a){return a.b_.j<=0?0:1;}
function OB(){var a=this;B.call(a);a.dO=null;a.jk=0.0;a.gm=0.0;a.fq=0;}
function U$(a){return a.dO.bo.a;}
function RM(a){return a.dO.bo.b;}
function AAg(a,b,c){var d,e,f;if(a.fq){d=a.dO;e=c.b;f=c.a;c=d.cI;BC(b,c.b+e|0,c.a+f|0,d.bo,d.eQ);}}
function JQ(){var a=this;B.call(a);a.lq=null;a.vc=null;a.vo=0.0;a.ow=0;a.vw=0;a.vZ=0;a.qn=0;a.wY=0;a.d0=0.0;a.dC=0.0;a.vn=0.0;a.le=0.0;a.vs=0;a.mA=null;}
function Fi(a){return Dy(a.d0+a.dC);}
function OL(a,b){return Dy((a.d0+a.dC)*b);}
function VA(){var a=this;B.call(a);a.eM=null;a.f=null;a.kS=null;a.nM=null;a.fI=null;a.hB=null;a.c8=null;a.vV=null;a.n=0;a.s=0;a.gb=0;a.gL=null;a.gv=null;a.lS=null;a.j9=null;a.dT=0;a.fJ=0;a.fX=0;a.gT=AAt;a.rX=AAt;a.s$=AAt;a.uW=0;a.vR=0;a.cT=0;a.i7=0.0;a.ek=0;}
function ARy(a,b,c){var d=new VA();WO(d,a,b,c);return d;}
function AEk(a,b,c){var d=new VA();ABx(d,a,b,c);return d;}
function WO(a,b,c,d){ABx(a,b.hu,c,d);}
function ABx(a,b,c,d){var e,f,g,h,i,j;b=b.data;a.nM=ADc();e=new SC;e.d$=O(JJ,16);e.d6=0;e.cZ=(-1);a.fI=e;a.gL=null;a.gv=Bz();a.lS=FQ();a.j9=Bz();a.dT=1;a.fJ=1;a.fX=1;a.cT=0;a.i7=0.0;a.ek=0;a.eM=d;a.kS=c;c=new Qq;f=b.length;g=O(C1,Ba(1,f));if(!f)g.data[0]=Xl(C(5));h=g.data;i=0;while(i<f){h[i]=Xl(b[i]);i=i+1|0;}d=new Om;e=new JG;OF(e);d.dR=e;c.dG=d;c.c_=FQ();c.cP=FQ();c.gB=Bz();if(!h.length){c=new BI;W(c);K(c);}c.v=g;j=Tm(c);c.cC=AAr(AMg(IH(0,j,0),null,null));a.f=c;}
function DI(a){var b;b=a.kS;if(b===null){b=a.eM;if(b===null)b=C(118);else{b=b.e3;b=b===null?C(118):!DA(b,C(160))&&!DA(b,C(161))&&!DA(b,C(162))&&!DA(b,C(163))&&!DA(b,C(164))&&!DA(b,C(165))?(DA(b,C(166))?C(131):DA(b,C(167))?C(168):!DA(b,C(169))?C(118):C(141)):C(140);}}return b;}
function Fv(a){var b;b=a.eM;return b===null?null:b.hL;}
function Go(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.fJ=3;a.fX=3;a.dT=3;c=CQ(b[0]);d=D5(b[1]);if((CQ(b[2])).data[0]==4){e=Gy(D5(b[3]));Dn(a.lS,C(170),e);Kk(a.f,c,d);}else if(b.length<5)Kk(a.f,c,d);else{f=CQ(b[3]);g=f.data;h=D5(b[4]);MZ(a.f,c,d,f,h,0);SW(a,HZ(f,g.length),KL(h));}if(a.ek){e=DZ(a);i=Jg(D1(),a.gT);j=new R;T(j);J(FC(J(J(j,e),C(171)),i),C(172));$rt_globals.console.info($rt_ustr(S(j)));}e=a.hB;if(e!==null)Tt(e);}
function JO(a){var b;Rm(a,Di(a.n,a.s),HB(a.f,a.n,a.s));if(!(a.gL!==null&&!DO(a.gv))){b=a.s;if(b>0)Rm(a,Di(a.n,b-1|0),HB(a.f,a.n,a.s-1|0));}}
function Rm(a,b,c){var d,e,f,g,h,i,j,k;V7(a);d=B7(a.f.c_,c);if(d!==null)c=d;a:{e=B7(a.f.cP,c);if(e!==null){a.gL=Ks(a.f,c);c=BL(e);while(true){if(!BM(c))break a;f=BP(c);Bu(a.gv,Ks(a.f,f));}}}c=a.hB;if(c!==null){g=b.X;h=b.be;b=c.eo;f=DI(c.d);e=Fv(c.d);i=(Cc(b.to)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.tq(f,e)){b=b.xr;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new Qc;e.va=c;e.u9=f;e.u$=g;e.u_=h;b.qO(f,g,h,e,c.g6);}}}
function V7(a){a.gL=null;GF(a.gv);}
function SW(a,b,c){var d,e,f,g,h;if(a.c8!==null){a.s$=D1();d=a.f.b3;e=a.c8;f=new Od;f.qf=a;g=O(B,3);h=g.data;h[0]=b;h[1]=c;b=Bv(1);b.data[0]=d;h[2]=b;En(e,f,C(173),g);}}
function OW(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.hB=b;a.c8=c;if(c===null){d=a.f.v.data;e=d.length;f=0;while(f<e){R7(d[f]);f=f+1|0;}}else if(a.dT==1){a.gT=D1();b=DI(a);e=BB(b,C(131));f=BB(b,C(141));d=EN(a.f);g=d.data.length;h=!e?5120:10240;i=WE(b);if(f){j=a.c8;b=new Qj;b.mc=a;k=O(B,2);l=k.data;l[0]=d;d=Bv(1);d.data[0]=i;l[1]=d;UK(j,b,0,C(174),k);a.dT=2;}else if(g<=h)Jn(a,d,i);else if(!e){U9(a,KL(d),i);Jn(a,d,i);}else{U9(a,KL(d),i);m=KL(d);c=a.c8;j=new O4;j.qh=a;k=O(B,2);l=k.data;l[0]=m;m=Bv(1);m.data[0]=i;l[1]=m;En(c,
j,C(175),k);a.fJ=2;Jn(a,d,i);}}}
function U9(a,b,c){var d,e;d=a.c8;e=new Ui;e.qB=a;En(d,e,C(176),G(B,[b,Fu([c,250])]));a.fX=2;}
function Jn(a,b,c){var d,e,f,g;d=a.c8;e=new Mm;e.oc=a;f=O(B,2);g=f.data;g[0]=b;b=Bv(1);b.data[0]=c;g[1]=b;En(d,e,C(174),f);a.dT=2;}
function DZ(a){var b;b=a.eM;return b===null?C(5):Ts(b);}
function HV(a){var b,c,d,e,f,g;if(a.ek){b=DZ(a);c=new R;T(c);J(J(c,b),C(177));$rt_globals.console.info($rt_ustr(S(c)));}b=DI(a);if(b===null)d=null;else{a:{e=(-1);switch(JZ(b)){case -1655966961:if(!B1(b,C(141)))break a;e=3;break a;case 3401:if(!B1(b,C(168)))break a;e=2;break a;case 98723:if(!B1(b,C(140)))break a;e=1;break a;case 3254818:if(!B1(b,C(131)))break a;e=0;break a;case 3556653:if(!B1(b,C(118)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(178);break b;case 2:d=C(179);break b;case 3:d
=C(180);break b;case 4:d=C(181);break b;default:d=null;break b;}d=C(182);}}if(d===null)Tt(a.hB);else{a.gT=D1();if(!B1(d,C(180))){b=a.c8;f=new Sa;f.sY=a;g=O(B,1);g.data[0]=EN(a.f);En(b,f,d,g);}else{b=a.c8;c=new Sb;c.rJ=a;g=O(B,1);g.data[0]=EN(a.f);UK(b,c,0,d,g);}}}
function AAk(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(a.ek){b=DZ(a);c=new R;T(c);J(J(c,b),C(183));$rt_globals.console.info($rt_ustr(S(c)));}b=DI(a);if(b!==null&&!B1(C(118),b)){if(B1(C(141),b)){HV(a);GC(a.f);}else{c=a.f.cC;d=Os(c,c.cA);if(d===null){KK(a);GC(a.f);return;}e=Fu([CN(d),CL(d),d.bG.el]);f=EN(a.f);g=Bv(1);g.data[0]=WE(b);c=a.f.dG;if(c.ev===null){h=Bv(0);i=B2(0);}else{j=ANf(AEf(d.bX,c.dR),d);Ml(j);h=j.i4;i=j.jl;}k=a.f.b3;d=a.c8;c=new Ly;c.se=a;l=O(B,6);m=l.data;m[0]=f;m[1]=g;m[2]=e;e=Bv(1);e.data[0]=k;m[3]
=e;m[4]=h;m[5]=i;En(d,c,C(184),l);}}else GC(a.f);}
function KK(a){var b;b=ANf(a.f.dG,null);Ml(b);SW(a,b.i4,b.jl);}
function Vn(){var a=this;B.call(a);a.oR=null;a.uq=null;a.me=null;a.to=null;a.sW=null;a.sF=null;}
function KT(a,b,c){return PV(a,Cc(a.oR),b,c);}
function Px(a,b,c){return PV(a,Cc(a.uq),b,c);}
function PV(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.tq(c,d))return g.wg;f=f+1|0;}return null;}
function Sx(a,b,c){var d,e,f,g;d=(Cc(a.me)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.tq(b,c))return g.v7;f=f+1|0;}return null;}
function EK(){var a=this;B.call(a);a.bN=0;a.cV=null;a.ed=null;a.by=null;a.dl=0;a.cY=0;}
var ARz=0;var ARt=0;function Wk(a,b,c,d,e,f,g){var h,i,j,k,l;h=a.by;i=h===b&&!h.f2?0:1;if(i){a.by=b;Jk(b,d.da,a.cV.jB);}h=a.by;j=h===null?0:Eo(h)<f?HE(Eo(a.by),1024):HE(f,1024)+1|0;k=j<=a.dl?0:1;if(k)a.dl=j;if(!(!i&&!k)){if(ARz){l=b.e5;$rt_globals.console.info("fMeasure"+l.data);ARz=0;}if(!ARt){h=c.c2;b="alphabetic";h.textBaseline=b;}else{b=c.c2;h="top";b.textBaseline=h;}a.cY=g/1024|0;while(true){b=a.ed;if(b.j>=a.dl)break;Bu(b,Gt(d));}f=0;while(f<a.dl){HG(a,c,e,a.cY+f|0);f=f+1|0;}a.by.f2=0;}if(!DO(a.ed)&&g<=
Eo(a.by)){j=g/1024|0;f=a.cY;if(j!=f){f=j-f|0;if(f<0)f= -f|0;if(f>=a.dl){f=0;while(f<a.dl){HG(a,c,e,j+f|0);f=f+1|0;}a.cY=j;}else{while(true){g=a.cY;if(g>=j)break;HG(a,c,e,g+a.dl|0);a.cY=a.cY+1|0;}while(true){g=a.cY;if(g<=j)break;HG(a,c,e,g-1|0);a.cY=a.cY-1|0;}}}}}
function JA(b,c){return (c-Fi(b)|0)/2|0;}
function LP(b,c){return JA(b,c)+b.qn|0;}
function HG(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;Fg(b);e=a.by.e5;f=d*1024|0;g=N6(a,f);if(g>=a.by.k.data.length)return;h=!g?0.0:e.data[g-1|0];i=f;j=h-i+a.bN;k=a.cV.jB;a:{while(true){l=a.by.k.data;if(g>=l.length)break a;m=k.data;n=l[g];o=m[Ih(n)];p=!ARt?LP(o,c):JA(o,c);m=e.data;CG(b,o);Ei(b,n.p,j,p);j=m[g]-i+a.bN;if(j>1024.0)break;g=g+1|0;}}Ek(Bo(a.ed,d%a.dl|0),b);}
function Xy(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br;if(DO(a.ed))return;if(!a.dl)return;if(g>Eo(a.by))return;o=a.by;p=o.dW;q=o.k;r=g/1024|0;s=N6(a,g);t= -a.bN|0;u=f;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=e)break;y=p.data;o=Bo(a.ed,r%a.dl|0);z=v[s];ba=y[s]+a.bN|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=Be(be,ba)-g|0;if(bc&&x)bf=bf+a.bN|0;if((t+bf|0)>e)bf=e-t|0;bg=i!==null?0:1;b:{if(!bg)
{bh=!x?a.bN:2*a.bN|0;bi=i.b;w=i.a;if(!(bi<w&&g<=w&&(g+bf|0)>(bi+bh|0)?0:1)){bj=0;break b;}}bj=1;}c:{if(!bg){bk=!x?a.bN:2*a.bN|0;if(g>=i.b&&(g+bf|0)<=(i.a+bk|0)?1:0){bl=1;break c;}}bl=0;}bm=null;if(l&&!m)bm=h.bB.hs;if(z===j)bm=h.bB.nH;bn=BL(k);d:{while(BM(bn)){if(BB(BP(bn),z)){bi=1;break d;}}bi=0;}if(bi)bm=h.bB.us;if(n!==null){v=n.wp;if(v===null)bk=0;else{v=v.data;bk=s>=v.length?0:v[s];}bm=Wf(h.dy,h,bk,n.jG);}if(!bl&&!bj){i.a=Be(i.a,Eo(a.by));Zk(a,d,t+c|0,b,f,h,o,z,bf,g>=i.b?bf:(Be(ba,be)-i.b|0)-(!x?a.bN:0)|
0,(g+bf|0)<=(i.a+(!x?a.bN:2*a.bN|0)|0)?0:(Be(ba,be)-i.a|0)-(!x?a.bN:0)|0,g-bb|0,bm);}else{bo=h.kX.data[z.bK];bp=bl?h.bB.iB:RT(bm,Mb(h,bo.jg));Cb(a.cV.iA,g-bb|0,0.0,bf,u);Bn(a.cV.iv,bf,f);GS(a.cV,d,o,t+c|0,b,bo.ht,bp);}if((z.bE&12)>0){bi=t+c|0;DP(d,1);o=a.cV;z=o.jz;z.b=bf;bk=b+o.tR|0;w=bk-o.t4|0;bq=o.re;br=bk+bq;bn=o.gN;Tf();AA5(d,bi,w,z,bq,br,bn,ARA.hd.ht);DP(d,0);}g=g+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function Zk(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.kX.data[h.bK];o=n.ht;p=RT(m,Mb(f,n.jg));q=f.bB.iB;f=a.cV;r=f.iA;s=f.iv;t=l;u=i-j|0;v=u;w=e;Cb(r,t,0.0,v,w);Bn(s,u,e);GS(a.cV,b,g,c,d,o,p);l=l+i|0;Cb(r,l-k|0,0.0,k,w);Bn(s,k,e);f=a.cV;c=c+i|0;GS(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cb(r,t,0.0,i,w);Bn(s,i,e);GS(a.cV,b,g,c-j|0,d,o,q);}
function RT(b,c){if(b!==null)c=b;return c;}
function N6(a,b){var c,d,e,f,g,h,i;c=a.by;d=c.e5;e=0;f=c.k.data.length;g=b;b=BF(e,f);if(b>0){c=new BI;W(c);K(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BF(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function VI(a){a.by=null;DN(a.ed,new S3);GF(a.ed);}
function XF(a,b,c,d,e,f,g,h,i){var j,k;j=Eo(a.by);if(j)j=j+a.bN|0;if(!j)j=j-a.bN|0;k=Ba( -a.bN|0,j-g|0);if(k>=h)return;Bn(f,h-k|0,e);BC(b,c+k|0,d,f,i);}
function XL(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a:{h=c.data;i=O(EK,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=BS(g,e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.by===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}c=i.data;e=0;f=c.length;while(e<f){if(c[e]===null){if(j>=k)p=null;else{b=j+1|0;p=h[j];j=b;}while(j<k&&p===null){b=j+1|0;p=h[j];j=b;}if(p!==null){c[e]=p;h[j-1|0]=null;}else{o=new EK;o.bN=3;o.ed=Bz();o.cY=0;o.cV=d;c[e]=o;}}e=e+1|0;}while(j<k){p=h[j];if(p!==null)VI(p);j=j+1|0;}return i;}
function Zm(){ARt=0;}
function ABs(){var a=this;B.call(a);a.eE=null;a.cF=null;a.dH=null;a.d3=null;a.hg=null;a.hh=null;}
function Tv(){var a=new ABs();AGU(a);return a;}
function AGU(a){a.eE=new Bp;a.cF=new Bp;a.dH=new Bp;a.d3=new Bp;a.hg=new B4;a.hh=new B4;}
function P0(a){var b;b=a.cF;return !V(b.b,b.a)?0:1;}
function GZ(a,b){return Ft(b,a.dH,a.d3);}
function Hk(a,b,c,d){var e,f,g,h,i;e=GZ(a,b);f=Ft(b,a.eE,a.cF);if(!e&&!f)return null;if(!f){if(!d)c.m(Uv(a,b.b-a.dH.b|0));else c.m(Ox(a,b.a-a.dH.a|0));}g=!d?a.eE.b+(a.cF.b/2|0)|0:a.eE.a+(a.cF.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new Q4;b.tN=a;b.tO=c;b.tM=i;}else{b=new Q3;b.n7=a;b.n5=c;b.n6=i;}return b;}
function F6(a,b,c){if(b!==null&&c!==null){Fc(a.hg,c);Fc(a.hh,b);return;}}
function Yg(b,c){var d;d=new SH;d.qp=b;d.uD=c;return d;}
function Ox(a,b){var c,d,e;c=a.d3.a;d=a.cF.a;e=c-d|0;return Yg(Be(Ba(0,b-(d/2|0)|0),e),e);}
function Uv(a,b){var c,d,e;c=a.d3.b;d=a.cF.b;e=c-d|0;return Yg(Be(Ba(0,b-(d/2|0)|0),e),e);}
function Vy(a,b,c,d,e,f,g){US(a,b,c,d,e,f,g,1);}
function PB(a,b,c,d,e,f,g){US(a,b,c,d,e,f,g,0);}
function US(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bn(a.d3,0,0);Bn(a.cF,0,0);}else{i=Be(g*3|0,d);j=Ba(OT(d,d,e),i);e=e-d|0;i=d-j|0;i=i?OT(b,i,e):0;if(!h){k=a.eE;k.b=i+c|0;k.a=f-g|0;l=a.cF;l.b=j;l.a=g;l=a.dH;l.b=c;l.a=k.a;k=a.d3;k.b=d;k.a=g;}else{k=a.eE;k.b=f-g|0;k.a=i+c|0;l=a.cF;l.b=g;l.a=j;l=a.dH;l.b=k.b;l.a=c;k=a.d3;k.b=g;k.a=d;}}}
function G$(a,b){var c;c=a.dH;BC(b,c.b,c.a,a.d3,a.hg);}
function He(a,b){var c,d;c=a.cF;c.b=c.b-2|0;c.a=c.a-2|0;d=a.eE;BC(b,d.b+1|0,d.a+1|0,c,a.hh);b=a.cF;b.b=b.b+2|0;b.a=b.a+2|0;}
function HA(a,b,c){return GZ(a,b)&&Fj(c)?1:0;}
function X2(){var a=this;B.call(a);a.wv=20;a.eR=null;a.eh=null;a.hJ=0.0;a.hC=null;a.ld=0;a.ia=0;a.ci=null;a.iX=null;a.d2=null;a.e0=null;a.eX=0;}
function AMs(){var a=new X2();AML(a);return a;}
function AML(a){a.wv=20;a.eR=new Bp;a.eh=new Bp;a.ci=Bz();a.iX=Eb(0);}
function AAa(a,b,c,d,e){var f,g,h,i,j,k;f=c/20|0;g=a.ci;h=Bo(g,f%g.j|0);i=a.eR;j=V(a.ci.j,a.ia);f=h.ee.a;k=((h.iD.a-(b%j|0)|0)+j|0)%j|0;if((k+f|0)>j)k= -(b%Kl(h.Z)|0)|0;b=c%h.dm|0;f=h.F;k=k+V(b,f)|0;if(k<( -f|0))k=k+j|0;Bn(h.de,h.ee.b,f);g=h.dU;b=c%h.dm|0;c=h.F;Cb(g,0.0,V(b,c),h.ee.b,c);Ed(h,e,k,i,d.nI,d.l1);}
function RL(a,b,c,d){var e,f,g,h,i,j;e=a.ci.j;while(true){f=a.ci.j;g=V(f,a.ia);if(g>(d+a.ld|0))break;h=Cd(0,g);i=new OE;g=a.eh.b;f=a.ld;j=a.hC;i.de=new Bp;i.dU=new B4;i.iD=h;i.dm=20;i.F=f;i.ee=Cd(g,20*f|0);i.fP=LP(j,f);if(i.Z===null)i.Z=Gt(b);Bu(a.ci,i);}if(f==e)return;Qr(a,c);}
function Qr(a,b){var c,d,e,f,g,h,i,j,k;c=a.ci;d=c.j;e=V((b/(d*20|0)|0)+1|0,d)*20|0;c=BL(c);while(BM(c)){f=BP(c);g=a.d2;h=a.hJ;Fg(g);i=0;while(true){j=f.dm;if(i>=j)break;k=e-V(d,j)|0;if(k<b)k=e;e=k+1|0;Fx(f,g,DX(e),V(f.F,i)+f.fP|0,h);i=i+1|0;}Ek(f.Z,g);f.mf=g.jd;}}
function IN(a){DN(a.ci,new Lx);GF(a.ci);a.d2=CY(a.d2,null);a.e0=CY(a.e0,null);}
function MR(){B.call(this);this.wR=null;}
function MQ(){B.call(this);this.lW=null;}
function ADb(a,b){var c;c=a.lW;E7(c,GO(b,IP(c)));}
function MP(){B.call(this);this.p$=null;}
function ACn(a,b){var c;c=a.p$;HI(c,GO(b,RR(c)));}
function Te(){var a=this;B.call(a);a.iA=null;a.iv=null;a.jz=null;a.gN=null;a.jB=null;a.re=0.0;a.uM=0;a.tR=0;a.t4=0;a.lv=0;}
function GS(a,b,c,d,e,f,g){var h,i;h=a.iv;if(h.b&&h.a){i=a.iA;if(i.bV!==0.0&&i.Y!==0.0){Ew(b,d,e,h,i,c,f,g,a.lv);return;}}}
function MO(){B.call(this);this.s7=null;}
function ACm(a){var b,c;b=a.s7;c=b.hj?0:1;b.hj=c;b=new R;T(b);IC(J(b,C(185)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function MV(){B.call(this);this.nx=null;}
function AFE(a){var b,c;b=a.nx;c=b.iG^1;b.iG=c;b=new R;T(b);IC(J(b,C(186)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function MU(){B.call(this);this.rd=null;}
function ANB(a){var b,c,d,e,f;b=a.rd;c=(b.dn+3|0)%6|0;b.dn=c;d=b.e6.data;e=d.length;f=0;while(f<e){b=d[f];b.bN=c;b=b.by;if(b!==null)b.f2=1;f=f+1|0;}}
function MT(){B.call(this);this.uB=null;}
function AHK(a){var b;b=a.uB;b.bA=b.bA?0:1;IN(b.c3);b.c3=AMs();RB(b,b.V,b.cs,b.bw.bW);}
function MS(){B.call(this);this.ne=null;}
function AJQ(a){var b;b=a.ne;b.h6=b.h6?0:1;}
function MN(){B.call(this);this.qw=null;}
function AM5(a){var b;b=a.qw;b.k0=b.k0?0:1;}
var AAA=F(0);
function TM(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=CW(b,f+g|0);C6(c,0,d,f,g);return d;}
function JK(b,c,d){C6(b,c,d,0,d.data.length);return d;}
function Qf(b,c,d){var e;if(c>0)C6(b,0,d,0,c);e=d.data.length;if(c<e)C6(b,c+1|0,d,c,e-c|0);return d;}
function Yy(b,c,d,e){var f;if(c>0)C6(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)C6(b,d,e,c,f-d|0);}return e;}
function Gr(b){var c;c=new TY;c.qy=b;return c;}
function XP(b,c){if(b.data.length!=c)b=CW(b,c);return b;}
function AAy(b,c,d){var e;e=c.data.length;if(e==d)c=CW(c,e*2|0);c.data[d]=b;return c;}
function S_(b,c,d){var e;e=c.data.length;if(e==d)c=KM(c,e*2|0);c.data[d]=b;return c;}
function KL(b){return My(b,b.data.length);}
var W6=F();
function My(b,c){var d,e,f,g;b=b.data;d=B2(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function KM(b,c){var d,e,f,g;b=b.data;d=Eb(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function HZ(b,c){var d,e,f,g;b=b.data;d=Bv(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function CW(b,c){var d,e,f,g;d=b.data;e=Z8(Hh(Bt(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function GG(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BI;W(f);K(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Xw(b,c,d,e){var f,g;if(c>d){e=new BI;W(e);K(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function X_(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AQP;e=O(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.tY(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ZC(b,c){return Si(b,0,b.data.length,c);}
function Si(b,c,d,e){var f,g,h,i,j;f=BF(c,d);if(f>0){g=new BI;W(g);K(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function B4(){var a=this;B.call(a);a.bk=0.0;a.bD=0.0;a.Y=0.0;a.bV=0.0;}
function Cb(a,b,c,d,e){a.bk=b;a.bD=c;a.Y=d;a.bV=e;}
function Fc(a,b){a.bk=b.bk;a.bD=b.bD;a.Y=b.Y;a.bV=b.bV;return a;}
function ANi(a,b){if(a===b)return 1;return b!==null&&Bt(a)===Bt(b)&&Ji(a,b)?1:0;}
function Ji(a,b){return b.bk===a.bk&&b.bD===a.bD&&b.Y===a.Y&&b.bV===a.bV?1:0;}
var Lj=F(0);
function Fj(a){return Dx(a,null);}
function O7(){B.call(this);this.qJ=null;}
function AGq(a){IA(a.qJ);}
function O6(){B.call(this);this.t$=null;}
function AB$(a){IY(a.t$);}
var J6=F(0);
function W9(){var a=this;D8.call(a);a.ce=null;a.j=0;}
function Bz(){var a=new W9();AFG(a);return a;}
function AFG(a){a.ce=O(B,10);}
function Im(a,b){var c,d;c=a.ce.data.length;if(c<b){d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.ce=CW(a.ce,d);}}
function Bo(a,b){H_(a,b);return a.ce.data[b];}
function AJt(a){return a.j;}
function Bu(a,b){var c,d;Im(a,a.j+1|0);c=a.ce.data;d=a.j;a.j=d+1|0;c[d]=b;a.bJ=a.bJ+1|0;return 1;}
function Qt(a,b,c){var d,e,f;Ok(a,b);Im(a,a.j+1|0);d=a.j;e=d;while(e>b){f=a.ce.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.ce.data[b]=c;a.j=d+1|0;a.bJ=a.bJ+1|0;}
function E6(a,b){var c,d,e,f;H_(a,b);c=a.ce.data;d=c[b];e=a.j-1|0;a.j=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.bJ=a.bJ+1|0;return d;}
function TV(a,b){var c;c=I7(a,b);if(c<0)return 0;E6(a,c);return 1;}
function GF(a){Xw(a.ce,0,a.j,null);a.j=0;a.bJ=a.bJ+1|0;}
function Xx(a,b,c){var d,e,f,g,h,i;Ok(a,b);if(c.dz())return 0;Im(a,a.j+c.cr()|0);d=c.cr();e=a.j;f=e-1|0;while(f>=b){g=a.ce.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.j=e+d|0;h=c.bS();i=0;while(i<d){g=a.ce.data;e=b+1|0;g[b]=h.bL();i=i+1|0;b=e;}a.bJ=a.bJ+1|0;return 1;}
function H_(a,b){var c;if(b>=0&&b<a.j)return;c=new BT;W(c);K(c);}
function Ok(a,b){var c;if(b>=0&&b<=a.j)return;c=new BT;W(c);K(c);}
function DN(a,b){var c;c=0;while(c<a.j){b.m(a.ce.data[c]);c=c+1|0;}}
var VZ=F(0);
var ARp=null;function AAN(){ARp=new MD;}
function Vw(){var a=this;B.call(a);a.cI=null;a.bo=null;a.eQ=null;a.g$=null;}
function AHC(){var a=new Vw();AKe(a);return a;}
function AKe(a){a.cI=new Bp;a.bo=new Bp;a.eQ=new B4;a.g$=new B4;}
function RX(a){Bn(a.bo,0,0);}
function I_(a){var b;b=a.bo;return V(b.b,b.a)?0:1;}
function G9(a,b){return Ft(b,a.cI,a.bo);}
var EE=F();
function I5(){EE.call(this);this.wg=null;}
function RF(){EE.call(this);this.v7=null;}
function O0(){EE.call(this);this.xr=null;}
var F$=F(0);
var Rl=F(0);
var ON=F(0);
var ARq=0.0;function RW(b){Cb(b,1.0471975803375244,0.75,1.25,0.375);}
function WL(){ARq=XD(XD(0.5,0.375),4.0);}
var ZG=F();
function Jd(){B.call(this);this.wI=null;}
var AQR=null;var ARB=null;function AGV(){AGV=Bg(Jd);ANp();}
function AE2(a){var b=new Jd();Wn(b,a);return b;}
function Wn(a,b){AGV();a.wI=b;}
function ANp(){AQR=AE2(C(187));ARB=AE2(C(188));}
function QD(){B.call(this);this.tg=null;}
function Dx(a,b){var c,d,e;c=a.tg;d=c.qx;e=c.dj;if(BB(b,d))b=d;else{e=e.style;if(b!==null&&H(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}c.qx=b;return 1;}
function AA4(){var a=this;B.call(a);a.bs=null;a.bi=null;a.cO=0;}
function ADc(){var a=new AA4();AM9(a);return a;}
function AEq(a){var b=new AA4();AIR(b,a);return b;}
function AM9(a){a.bs=new F_;a.bi=new F_;}
function AIR(a,b){a.bs=new F_;a.bi=new F_;G7(a,b);}
function G7(a,b){SO(a.bs,b.bs);SO(a.bi,b.bi);a.cO=b.cO;}
function Ka(a,b,c){BY(a.bi,b,c);if(!a.cO)BY(a.bs,b,c);}
function Oy(a,b){BY(a.bs,b,0);BY(a.bi,b+1|0,0);}
function Dt(a){if(Qw(a.bs,a.bi)>0)return a.bi;return a.bs;}
function E0(a){if(Qw(a.bs,a.bi)<0)return a.bi;return a.bs;}
function ZJ(a,b){var c,d,e,f;c=a.bs;d=c.z;e=a.bi;if(d==e.z&&c.O==e.O?1:0)return null;c=Dt(a);e=E0(a);d=c.z;if(d<=b){f=BF(b,e.z);if(f<=0)return Cd(b<=d?c.O:0,f>=0?e.O:(-1));}return null;}
function CX(a){var b,c;b=a.bs;c=a.bi;return (b.z==c.z&&b.O==c.O?1:0)?0:1;}
function AAI(a,b){var c,d;if(!CX(a))return 0;c=Dt(a);d=E0(a);return c.z<=b&&b<d.z?1:0;}
function SC(){var a=this;B.call(a);a.d$=null;a.d6=0;a.cZ=0;}
function TK(a,b){var c,d,e;c=a.d6;d=a.d$;if(c==d.data.length)a.d$=CW(d,c+16|0);d=a.d$.data;e=a.d6;a.d6=e+1|0;d[e]=b;}
function Qy(a){var b,c,d;b=a.cZ;c=a.d6-1|0;if(b==c)a.cZ=b-1|0;d=a.d$.data;a.d6=c;d[c]=null;}
function Qq(){var a=this;B.call(a);a.v=null;a.cC=null;a.dG=null;a.c_=null;a.cP=null;a.gB=null;a.hR=null;a.b3=0;a.kh=0;a.rp=0.0;}
function BS(a,b){return a.v.data[b];}
function Ch(a){return a.v.data.length;}
function Tm(a){return Em(a,Ch(a));}
function E8(a,b){return a.v.data[b].G;}
function AAQ(a,b,c){var d,e,f,g,h;d=a.v;e=d.data;f=e[b];d=CW(d,e.length+1|0);e=d.data;a.v=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Dk(O(B_,0));a.v.data[b+1|0]=f;}else if(c==f.G){e[b]=f;e[b+1|0]=Dk(O(B_,0));}else{e=(G3(f,c)).data;d=a.v.data;d[b]=e[0];d[b+1|0]=e[1];}EZ(a,b,c,0,C(112));}
function JV(a,b){var c,d,e,f,g,h,i;c=a.v.data;d=c[b];e=c[b+1|0];f=Dk(TM(d.k,e.k));g=a.v;h=g.data.length;if(b<h&&b>=0){i=O(C1,h-1|0);c=i.data;Qf(g,b,i);c[b]=f;a.v=i;return;}d=new Bq;W(d);K(d);}
function LL(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.v.data;if(!(c<d[b].G?0:1)){d=(BS(a,b)).k.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<H(h.p)){f=I(h.p,g);break a;}g=g-H(h.p)|0;f=f+1|0;}f=0;}FN();h=new Bw;d=B2(1);d.data[0]=f;If(h,d);EZ(a,b,c,1,h);h=a.v.data[b];i=h.k;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=H(d[j].p);if(c<b)break;c=c-b|0;j=j+1|0;}}if(H(d[j].p)==1)h.k=Qf(i,j,O(B_,e-1|0));else{k=d[j];if(c<=0)l=Du(DS(k.p,1),k.bK,k.bE);else if(c>=(H(k.p)-1|0)){l=new B_;m=k.p;R_(l,B9(m,0,H(m)-
1|0),k.bK,k.bE);}else{i=B2(H(k.p)-1|0);n=i.data;b=0;while(b<c){n[b]=I(k.p,b);b=b+1|0;}b=n.length;while(c<b){m=k.p;e=c+1|0;n[c]=I(m,e);c=e;}l=Du(Gy(i),k.bK,k.bE);}d[j]=l;}h.G=h.G-1|0;DY(h);}else if(b!=(d.length-1|0)){EZ(a,b,c,1,C(112));JV(a,b);}}
function Wa(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Q5(a.v.data[b],c,e[0]);return;}g=f-1|0;d=(G3(a.v.data[b],c)).data;h=d[0];i=d[1];d=a.v;j=CW(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.k.data;f=l.length;c=!f?0:H(l[f-1|0].p);Lh(h,h.k.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!DT(e[m])?Xl(e[m]):Dk(O(B_,0));d[b+m|0]=k;m=m+1|0;}Lh(i,0,0,e[g]);d[b+g|0]=i;a.v=j;}
function Ua(a,b){var c,d,e,f,g,h,i;c=Dt(b);d=E0(b);e=c.z;if(e==d.z)return B9(EA(a.v.data[e]),c.O,d.O);f=new R;T(f);b=a.v.data[c.z];e=c.O;B0(DJ(f,DS(EA(b),e)),10);g=a.v.data;e=c.z+1|0;h=d.z;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;Wx(DJ(f,EA(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.v.data[d.z];h=d.O;DJ(f,B9(EA(b),0,h));return S(f);}b=new UH;W(b);K(b);}
function LT(a,b,c){var d;Ut(a,b);d=Dt(b);EZ(a,d.z,d.O,1,c);}
function Ut(a,b){var c,d,e,f,g,h,i;a:{c=Dt(b);d=E0(b);e=c.z;if(e==d.z)FD(a.v.data[e],c.O,d.O);else{b=a.v.data[e];FD(b,c.O,b.G);FD(a.v.data[d.z],0,d.O);e=c.z+1|0;f=d.z;g=a.v;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=O(C1,(h-f|0)+e|0);Yy(g,e,f,i);a.v=i;JV(a,c.z);break a;}b=new Bq;W(b);K(b);}b=new Bq;W(b);K(b);}}}
function HB(a,b,c){return Di(b,Fl(BS(a,b),c));}
function U3(a,b){var c,d,e;c=0;d=0;while(true){e=a.v.data.length;if(c>=e)break;if((d+(BS(a,c)).G|0)>=b)return Cd(c,b-d|0);d=d+((BS(a,c)).G+1|0)|0;c=c+1|0;}return Cd(e,0);}
function Em(a,b){var c,d,e;c=0;d=a.v.data.length;e=0;while(e<b){c=c+E8(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Ks(a,b){return KF(BS(a,b.X),b.be);}
function EN(a){var b,c,d,e,f,g,h,i,j;b=B2(Tm(a));c=b.data;d=a.v.data.length;e=0;f=0;while(e<d){g=a.v.data[e].k.data;h=g.length;i=0;while(i<h){j=g[i].p;OS(j,0,H(j),b,f);f=f+H(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function EZ(a,b,c,d,e){var f,g,h,i,j,k;a:{a.b3=a.b3+1|0;f=a.gB;g=O(F1,1);h=new F1;h.dt=b;h.dD=c;i=KN(e,C(112),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=Cd(b,c+H(i[0])|0);break a;}k=Cd((b+j|0)-1|0,H(i[j-1|0]));break a;}}k=Cd(b,c);}i=g.data;h.kc=k;h.lj=d;h.e8=e;i[0]=h;Bu(f,g);I0(a,b,c,d,e);}
function I0(a,b,c,d,e){var f;f=Em(a,b)+c|0;if(!d){Nw(a.cC,f,H(e));SU(a.dG,f,H(e));}else{UJ(a.cC,f,H(e));Mf(a.dG,f,H(e));}}
function L8(a,b){var c,d,e;c=KN(b.e8,C(112),(-1));if(b.lj){Wa(a,b.dt,b.dD,c);Nw(a.cC,Em(a,b.dt)+b.dD|0,H(b.e8));SU(a.dG,Em(a,b.dt)+b.dD|0,H(b.e8));}else{c=c.data;d=ADc();BY(d.bs,b.dt,b.dD);e=c.length;if(e==1)BY(d.bi,b.dt,b.dD+H(c[0])|0);else BY(d.bi,(b.dt+e|0)-1|0,H(c[e-1|0]));Ut(a,d);UJ(a.cC,Em(a,b.dt)+b.dD|0,H(b.e8));Mf(a.dG,Em(a,b.dt)+b.dD|0,H(b.e8));}return b.kc;}
function Sm(a){return a.kh==a.b3?0:1;}
function GC(a){a.kh=a.b3;}
function IV(a){var b,c,d;a.hR=Bv(a.v.data.length+1|0);b=0;while(b<a.v.data.length){c=a.hR.data;d=b+1|0;c[d]=(c[b]+(BS(a,b)).G|0)+1|0;b=d;}}
function VP(a,b){var c,d,e,f,g,h;c=a.hR;if(c===null){d=0;e=0;a:{while(true){c=a.v.data;f=c.length;if(e>=f)break;g=c[e].G;if(b<=(d+g|0)){h=Di(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=Di(f,0);}return h;}d=ZC(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=Di(d,b-(d<0?0:a.hR.data[d])|0);if(h.be>=(BS(a,h.X)).G){h.X=h.X+1|0;h.be=0;}return h;}
var MD=F();
function AM6(a){}
function F_(){var a=this;B.call(a);a.z=0;a.O=0;}
function BY(a,b,c){a.z=b;a.O=c;}
function SO(a,b){a.z=b.z;a.O=b.O;}
function Qw(a,b){var c;c=BF(a.z,b.z);if(c)return c;return BF(a.O,b.O);}
function JJ(){var a=this;B.call(a);a.kl=null;a.iY=null;}
function Ky(a){return a.kl.X;}
function IG(a){return a.kl.be;}
function C1(){var a=this;B.call(a);a.k=null;a.G=0;a.e5=null;a.dW=null;a.dk=null;a.f1=null;a.fe=0;a.f2=0;a.gp=0;}
var ARC=0;var ARD=0;var ARu=0;function Xl(a){var b=new C1();ZX(b,a);return b;}
function Dk(a){var b=new C1();PH(b,a);return b;}
function ZX(a,b){var c;c=O(B_,1);c.data[0]=X4(b);PH(a,c);}
function PH(a,b){var c,d,e,f;c=b.data;a.k=b;d=0;e=c.length;f=0;while(f<e){d=d+H(c[f].p)|0;f=f+1|0;}a.G=d;DY(a);}
function Ic(a){return a.k.data.length;}
function Fl(a,b){var c;c=HP(a,b);return c<=0?0:a.dk.data[c-1|0];}
function HP(a,b){var c,d,e,f;c=a.k.data.length;if(!c)return (-1);if(!(a.dk!==null&&!a.gp)){U4(a);d=0;e=0;f=a.k.data.length;while(d<f){e=e+H(a.k.data[d].p)|0;a.dk.data[d]=e;d=d+1|0;}a.gp=0;}d=Si(a.dk,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function KF(a,b){var c;c=a.k.data;if(!c.length)return null;return c[HP(a,b)];}
function FD(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.G){a.k=O(B_,0);DY(a);a.G=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.k.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=H(g[e].p);i=H(a.k.data[f].p);j=BF(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.k.data[f];if(!b&&c==H(k.p)?1:0){g=a.k;a.k=Qf(g,e,O(B_,g.data.length-1|0));a.G=a.G-d|0;DY(a);return;}a.k.data[e]=Du(GW(B9(k.p,0,b),DS(k.p,c)),k.bK,k.bE);}else{g=a.k.data;l=g[e];m=g[f];if(b){if(b!=
H(l.p))a.k.data[e]=Du(B9(l.p,0,b),l.bK,l.bE);e=e+1|0;}if(c==H(m.p))f=f+1|0;else if(c)a.k.data[f]=Du(DS(m.p,c),m.bK,m.bE);g=a.k;a.k=Yy(g,e,f,O(B_,(g.data.length-f|0)+e|0));}a.G=a.G-d|0;DY(a);}
function G3(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return G(C1,[Dk(O(B_,0)),a]);if(b>=a.G)return G(C1,[a,Dk(O(B_,0))]);c=a.k;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=H(e[d].p);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return G(C1,[Dk(JK(c,0,O(B_,d))),Dk(JK(c,d,O(B_,f-d|0)))]);h=e[d];e=JK(c,0,O(B_,d+1|0));i=e.data;j=JK(c,d,O(B_,f-d|0));c=j.data;i[d]=Du(B9(h.p,0,b),h.bK,h.bE);c[0]=Du(DS(h.p,b),h.bK,h.bE);return G(C1,[Dk(e),Dk(j)]);}
function Q5(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.k.data;if(e>=f.length)break a;g=H(f[d].p);if(b<=g)break;b=b-g|0;d=e;}}Lh(a,d,b,c);}
function Lh(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(DT(d))return;e=a.k;f=e.data;g=f.length;if(!g){h=O(B_,1);h.data[0]=X4(d);a.k=h;}else if(!b&&!c){h=O(B_,g+1|0);f=h.data;C6(e,0,h,1,g);f[0]=X4(d);a.k=h;}else{i=f[b];if(c<=0)j=Du(GW(d,i.p),i.bK,i.bE);else if(c>=H(i.p))j=Du(GW(i.p,d),i.bK,i.bE);else{k=H(d);l=k+c|0;m=H(i.p)-c|0;e=B2(H(i.p)+k|0);h=e.data;n=0;while(n<c){h[n]=I(i.p,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=I(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=I(i.p,g+c|0);g=g+1|0;}j=Du(Gy(e),i.bK,i.bE);}f[b]=j;}a.G=a.G+
H(d)|0;DY(a);}
function Mk(a){var b,c,d,e,f,g;b=0;c=a.k.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<H(f.p)){if(I(f.p,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Jk(a,b,c){var d,e,f,g,h,i,j;d=a.k.data.length;e=a.e5;if(!(e!==null&&e.data.length>=d)){a.e5=ACa(d);a.dW=Bv(d);a.fe=1;}U4(a);if(!a.fe)ARD=ARD+1|0;else{f=0;g=0.0;ARC=ARC+1|0;h=0;while(h<d){i=c.data;j=a.k.data[h];f=f+H(j.p)|0;a.dk.data[h]=f;CG(b,i[Ih(j)]);g=g+Ga(b,j.p);a.e5.data[h]=g;a.dW.data[h]=g+0.5|0;h=h+1|0;}a.G=f;a.fe=0;a.gp=0;}}
function U4(a){var b;b=a.dk;if(!(b!==null&&b.data.length>=a.k.data.length)){a.dk=Bv(a.k.data.length);a.gp=1;}}
function R7(a){a.fe=1;a.f1=null;}
function DY(a){R7(a);a.f2=1;a.gp=1;}
function QX(a,b,c,d){var e,f,g,h,i,j,k;if(a.f1===null)a.f1=O($rt_arraycls($rt_intcls()),a.k.data.length);e=a.f1.data[d];if(e===null){e=c.data;f=a.k.data[d];CG(b,e[Ih(f)]);f=f.p;e=Bv(H(f)-1|0);c=ES(f);g=!d?0.0:a.e5.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bw;k=i+1|0;Le(f,c,0,k);h[i]=g+Ga(b,f)+0.5|0;i=k;}a.f1.data[d]=e;}return e;}
function FI(a,b,c,d){var e,f,g,h,i;if(a.k.data.length&&b){if(!(!a.fe&&a.dW!==null))Jk(a,c,d);if(b>=a.G)return a.dW.data[a.k.data.length-1|0];e=0;f=0;a:{while(true){g=a.k.data;if(f>=g.length)break a;h=e+H(g[f].p)|0;i=BF(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.dW.data[f];}return (QX(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function Eo(a){var b,c,d;a:{b=a.k.data.length;if(b){c=a.dW.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function FX(a,b){var c;if(b>=a.G)return b+1|0;c=HP(a,b);return a.dk.data[c];}
function EA(a){var b,c,d,e;b=new R;Fn(b,a.G);c=a.k.data;d=c.length;e=0;while(e<d){DJ(b,c[e].p);e=e+1|0;}return S(b);}
function Yu(){ARu=0;}
var Wg=F(Bq);
var T$=F(0);
function Zo(){B.call(this);this.kK=null;}
function AOj(a){var b=new Zo();AIV(b,a);return b;}
function AIV(a,b){a.kK=b;}
function D5(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.kK));}
function CQ(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.kK));}
var SM=F(0);
function JP(){var a=this;B.call(a);a.hf=null;a.hQ=null;a.xb=null;}
function ZE(a,b){var c=new JP();AGQ(c,a,b);return c;}
function ANT(a,b,c){var d=new JP();M9(d,a,b,c);return d;}
function Ww(b){var c,d,e,f,g,h,i;c=new JP;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=O(Bw,0);else{f=O(Bw,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=Et(e[h]);h=h+1|0;}}}else f=O(Bw,0);M9(c,d,b,f);return c;}
function AGQ(a,b,c){M9(a,b,c,O(Bw,0));}
function M9(a,b,c,d){a.hf=b;a.hQ=c;a.xb=d;}
function In(a){var b;b=a.hf;return Et(b!==null?b.name:a.hQ.name);}
function Om(){var a=this;B.call(a);a.ev=null;a.dR=null;}
function AEf(a,b){var c=new Om();AFR(c,a,b);return c;}
function AFR(a,b,c){a.ev=b;a.dR=c;}
function SU(a,b,c){var d;d=a.ev;if(d===null)return;PC(a,d,b,c);}
function Mf(a,b,c){var d;d=a.ev;if(d===null)return;Sq(a,d,b,c);}
function PC(a,b,c,d){var e,f,g,h;e=b.dA.bS();while(e.ca()){VV(a,e.bL(),c,d);}e=b.dZ.bS();while(e.ca()){f=e.bL();g=new R5;g.pR=a;DK(a,g,f,c,d);}h=b.fr.bS();while(h.ca()){e=h.bL();VV(a,e.hA,c,d);f=new R6;f.mo=a;DK(a,f,e.ip,c,d);}b=b.cb.bS();while(b.ca()){PC(a,b.bL(),c,d);}}
function VV(a,b,c,d){IB(a,b.dB,c,d);}
function DK(a,b,c,d,e){var f,g;a:{if(c instanceof FA){f=c.fN;g=new V9;g.nj=a;g.nh=b;g.ng=d;g.ni=e;DN(f,g);}else{if(!(c instanceof HH)){if(!(c instanceof H1))break a;f=c;DK(a,b,f.gM,d,e);DK(a,b,f.fY,d,e);return;}g=c.fW;f=new V$;f.ux=a;f.uw=b;f.uv=d;f.uu=e;DN(g,f);}}if(c!==null){c=c.eq;if(c!==null)b.h4(c,Ct(d),Ct(e));}}
function IB(a,b,c,d){var e;e=b.cS;if(e>=c)b.cS=e+d|0;}
function Sq(a,b,c,d){var e,f,g,h;e=b.dA.bS();while(e.ca()){Hj(a,(e.bL()).dB,c,d);}e=b.dZ.bS();while(e.ca()){f=e.bL();g=new Q8;g.sJ=a;DK(a,g,f,c,d);}h=b.fr.bS();while(h.ca()){e=h.bL();Hj(a,e.hA.dB,c,d);f=new Q9;f.rW=a;DK(a,f,e.ip,c,d);}b.dA.kD(new Q7);b.dZ.kD(new Q6);b=b.cb.bS();while(b.ca()){Sq(a,b.bL(),c,d);}}
function Hj(a,b,c,d){var e;e=b.cS;if(e>=c)b.cS=e-d|0;}
function B_(){var a=this;B.call(a);a.p=null;a.bK=0;a.bE=0;}
function X4(a){var b=new B_();AE7(b,a);return b;}
function Du(a,b,c){var d=new B_();R_(d,a,b,c);return d;}
function AE7(a,b){R_(a,b,0,0);}
function R_(a,b,c,d){a.p=b;a.bK=c;a.bE=d;}
function Ih(a){return a.bE&3;}
function Gw(b,c){return (!b?0:2)+(!c?0:1)|0;}
var JG=F(Jm);
function Qz(){var a=this;B.call(a);a.cA=null;a.dM=0;}
var ARE=null;function AAr(a){var b=new Qz();AA7(b,a);return b;}
function AA7(a,b){a.dM=0;a.cA=b;}
function Os(a,b){var c;if(b.dJ)return b;b=BL(b.W);while(true){if(!BM(b))return null;c=Os(a,BP(b));if(c!==null)break;}return c;}
function MG(a,b,c){var d,e,f,g;d=Jt(a,a.cA,b);if(d===null)return;b=c.bX;e=b===null?ARF:b.cb;f=c.W;c=a.cA;if(d===c){if(c.bX===null)c.bX=b;b=new Q1;b.pK=a;DN(f,b);b=new Q0;b.sG=a;e.d4(b);b=a.cA;b.W=f;b.bX.cb=e;b.dJ=0;return;}if(!DO(f)){c=d.fK;if(c!==null){b=new Nl;b.nn=c;DN(f,b);g=I7(c.W,d);if(g==(-1))FW(c.W,f);else{E6(c.W,g);Xx(c.W,g,f);}}}b=d.bX;if(b!==null){b=b.fz;c=new Rb;c.pu=b;e.d4(c);g=I7(b.cb,d.bX);if(g==(-1))FW(b.cb,e);else{b.cb.lt(g);b.cb.rO(g,e);}}}
function Jt(a,b,c){var d,e,f,g;d=b.bG;if(d.bF==c.bF&&d.bI==c.bI?1:0){d=BL(b.W);while(BM(d)){e=Jt(a,BP(d),c);if(e!==null)return e;}return b;}b=BL(b.W);while(true){if(!BM(b))return null;d=BP(b);f=c.bF;g=c.bI;e=d.bG;if(e.bF<=f&&g<=e.bI?1:0){e=Jt(a,d,c);if(e!==null)break;}}return e;}
function R2(a,b,c){Bu(c,b.bG);b=BL(b.W);while(BM(b)){R2(a,BP(b),c);}}
function Nw(a,b,c){a.dM=0;Js(a,a.cA,b,c);}
function Js(a,b,c,d){var e;if(CL(b)<c)return;a:{if(CN(b)>c){Kj(b,d);Gu(b,d);b=BL(b.W);while(BM(b)){Js(a,BP(b),c,d);}}else{if(!Ij(b,c)){if(a.dM)break a;if(CL(b)!=c)break a;}Gu(b,d);if(CN(b)==c&&a.dM)Kj(b,d);e=BL(b.W);while(BM(e)){Js(a,BP(e),c,d);}if(!a.dM){b.dJ=1;a.dM=1;}}}}
function UJ(a,b,c){a.dM=0;Iq(a,a.cA,b,c);}
function Iq(a,b,c,d){var e,f,g,h,i,j;if(CL(b)<c)return;e=CN(b);f=c+d|0;if(e>f){e= -d|0;Kj(b,e);Gu(b,e);g=BL(b.W);while(BM(g)){Iq(a,BP(g),c,d);}b.W=LR(a,b.W);}else{h=b.bG;if(c<=h.bF&&h.bI<=f?1:0){if(b===a.cA){Kx(b,0);Io(b,0);h=b.bX;if(h!==null)h.cb.hi();}else{Kx(b,(-1));Io(b,(-1));h=b.bX;if(h!==null){VB(h);b.bX=null;}}GF(b.W);}else{e=Ij(b,c);f=Ij(b,f);if(e&&f)Gu(b, -d|0);else if(e)Io(b,c);else{if(!f)return;Kx(b,c);Gu(b, -d|0);}h=BL(b.W);while(BM(h)){Iq(a,BP(h),c,d);}h=Tb(b.W);g=NQ(0);i=new QF;j=new Tl;j.xL=i;j.ib
=g;while(SY(h,j)){}if(!j.ib.lx&&!a.dM)b.dJ=1;else a.dM=1;b.W=LR(a,b.W);}}}
function LR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Bz();d=null;e=ARE;f=b.ce;g=b.j;if(e===null)e=AQP;h=O(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}X_(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.bJ=b.bJ+1|0;b=BL(b);while(BM(b)){m=BP(b);if(CN(m)==CL(m))continue;if(!m.dJ){if(d!==null){Bu(c,d);d=null;}Bu(c,m);}else if(d===null)d=m;else{n=AMg(IH(Be(CN(d),CN(m)),Ba(CL(d),CL(m)),d.bG.el),d.fK,d.bX);n.dJ=1;d=m.bX;if(d===null)d=n;else{VB(d);d=n;}}}if(d!==null)Bu(c,d);return c;}
function UX(a,b,c,d){var e,f,g,h,i,j,k,l;if((CL(c)-CN(c)|0)<43)e=B9(d,CN(c),CL(c));else{e=B9(d,CN(c),CN(c)+20|0);f=B9(d,CL(c)-20|0,CL(c));g=new R;T(g);J(J(J(g,e),C(102)),f);e=S(g);}e=Tg(e,C(112),C(189));f=GL();g=c.bG;h=g.bF;i=g.bI;j=g.el;k=new R;T(k);B0(k,40);B0(Bj(J(Bj(J(Bj(k,h),C(190)),i),C(190)),j),41);k=S(k);h=c.dJ;g=new R;T(g);IC(J(J(g,k),C(190)),h);l=S(g);g=new R;T(g);k=Bj(g,b);B0(k,32);k=J(k,l);B0(k,9);J(k,e);CE(f,S(g));c=BL(c.W);h=b+1|0;while(BM(c)){UX(a,h,BP(c),d);}}
function ABd(){ARE=new Ug;}
function ABq(){var a=this;B.call(a);a.bF=0;a.bI=0;a.el=0;}
function IH(a,b,c){var d=new ABq();AE1(d,a,b,c);return d;}
function AE1(a,b,c,d){a.bF=b;a.bI=c;a.el=d;}
function ALf(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return a.bF==c.bF&&a.bI==c.bI&&a.el==c.el?1:0;}return 0;}
function ADR(a,b){var c;b=b;c=BF(a.bF,b.bF);if(!c)c=BF(b.bI,a.bI);return c;}
var Ug=F();
function AHN(a,b,c){var d;b=b;c=c;b=b.bG;c=c.bG;d=BF(b.bF,c.bF);if(!d)d=BF(c.bI,b.bI);return d;}
function PL(){var a=this;B.call(a);a.bG=null;a.fK=null;a.W=null;a.bX=null;a.dJ=0;}
function AMg(a,b,c){var d=new PL();AAq(d,a,b,c);return d;}
function AAq(a,b,c,d){a.dJ=0;a.bG=b;a.fK=c;a.W=Bz();a.bX=d;}
function ABv(b){return P3(b,null);}
function P3(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=X(b);e=X(b);f=X(b);g=X(b);h=X(b);i=IH(d,e,f);j=new PL;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AAq(j,i,null,l);m=0;while(m<g){l=P3(b,c);l.fK=j;Bu(j.W,l);m=m+1|0;}return j;}
function W1(b,c,d){var e,f,g,h,i;a:{e=b.bG;f=b.W;g=e.bF;h=e.bI;i=e.el;Bf(c,g);Hf(c,h,i);Bf(c,f.j);if(d!==null){e=b.bX;if(e!==null&&T6(d,e)){g=(KQ(d,b.bX)).ba;break a;}}g=(-1);}Bf(c,g);b=BL(f);while(BM(b)){W1(BP(b),c,d);}}
function CN(a){return a.bG.bF;}
function CL(a){return a.bG.bI;}
function Kx(a,b){a.bG.bF=b;}
function Io(a,b){a.bG.bI=b;}
function Kj(a,b){var c;c=a.bG;c.bF=c.bF+b|0;}
function Gu(a,b){var c;c=a.bG;c.bI=c.bI+b|0;}
function Ij(a,b){return CN(a)<=b&&b<CL(a)?1:0;}
function ADF(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return BB(a.bG,c.bG)&&BB(a.W,c.W)?1:0;}return 0;}
function JB(){var a=this;JE.call(a);a.oC=null;a.nk=null;}
function W7(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.oC;e=0;f=0;g=a.nk;a:{b:{while(true){if((e+32|0)>f&&E$(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=Ez(b)+j|0;h=i.length;f=Be(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new BT;b=new R;T(b);Bj(J(Bj(J(b,C(191)),k),C(78)),h);Br(l,S(b));K(l);}if(Ez(b)<e)break;if(e<0){b=new BT;c=new R;T(c);J(Bj(J(c,C(79)),e),C(80));Br(b,S(c));K(b);}h=b.cl;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.qc.data[n+b.s8|0];m=m+1|0;j=o;n=k;}b.cl
=h+e|0;e=0;}if(!E$(c)){l=!E$(b)&&e>=f?AQW:AQV;break a;}i=g.data;k=Be(Ez(c),i.length);p=new MB;p.l3=b;p.pn=c;l=Za(a,d,e,f,g,0,k,p);e=p.sQ;j=p.t8;if(l===null){if(!E$(b)&&e>=f)l=AQW;else if(!E$(c)&&e>=f)l=AQV;}U2(c,g,0,j);if(l!==null)break a;}b=new Uk;W(b);K(b);}p=new BT;l=new R;T(l);B0(Bj(J(Bj(J(l,C(81)),j),C(76)),h),41);Br(p,S(l));K(p);}Ri(b,b.cl-(f-e|0)|0);return l;}
var On=F(JB);
function Za(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Kv(h,2))break a;i=AQV;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Vl(l)){if((f+3|0)>g){j=j+(-1)|0;if(Kv(h,3))break a;i=AQV;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Cm(l)){i=J3(1);break a;}if
(j>=d){if(E$(h.l3))break a;i=AQW;break a;}c=j+1|0;m=k[j];if(!CJ(m)){j=c+(-2)|0;i=J3(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Kv(h,4))break a;i=AQV;break a;}k=e.data;o=D4(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.sQ=j;h.t8=f;return i;}
var SB=F(DE);
function Hd(){var a=this;B.call(a);a.bB=null;a.fi=null;a.kX=null;a.hl=null;a.dy=null;a.sT=null;a.tt=null;a.t5=null;}
function ARG(a,b,c,d,e){var f=new Hd();H3(f,a,b,c,d,e);return f;}
function H3(a,b,c,d,e,f){var g;g=c.data;a.sT=YB(C(192),16.0);a.tt=YB(C(192),17.0);a.t5=YB(C(104),15.0);a.bB=b;a.kX=c;a.hl=d;if(g.length>=15){a.fi=e;a.dy=f;return;}b=new BI;W(b);K(b);}
function Mb(a,b){if(b===null)b=a.bB.fL;return b;}
function HC(){var a=this;B.call(a);a.up=null;a.fL=null;a.r1=null;a.wB=null;a.pE=null;a.iB=null;a.nH=null;a.us=null;a.ke=null;a.j6=null;a.hs=null;}
function ARH(a,b,c,d,e,f,g,h,i,j,k){var l=new HC();K8(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function K8(a,b,c,d,e,f,g,h,i,j,k,l){a.up=b;a.fL=c;a.r1=d;a.wB=e;a.pE=f;a.iB=g;a.nH=h;a.us=i;a.ke=j;a.j6=k;a.hs=l;}
var Xf=F(0);
function WA(){var a=this;B.call(a);a.eB=null;a.g7=null;a.nI=null;a.l1=null;}
function ZT(a,b,c,d){var e=new WA();AM_(e,a,b,c,d);return e;}
function AM_(a,b,c,d,e){a.eB=b;a.g7=c;a.nI=d;a.l1=e;}
var Zp=F(0);
function ABi(){var b,c;b=new HT;c=N(C(193));AIt();I6(b,c,ARI,ARJ);return b;}
function AAP(){var b,c;b=new HT;c=N(C(91));ACu();I6(b,c,ARK,ARL);return b;}
function AA_(){var b,c;b=new HT;AAF();c=ARM;ACI();I6(b,c,ARN,ARO);return b;}
function ABA(){var a=this;B.call(a);a.qo=null;a.lM=null;a.sr=null;a.mg=null;}
function WG(a,b,c,d){var e=new ABA();AC2(e,a,b,c,d);return e;}
function AC2(a,b,c,d,e){a.qo=b;a.lM=c;a.sr=d;a.mg=e;}
function Wf(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dy.lM;break a;case 3:if(c!=3){b=b.dy.mg;break a;}b=b.dy.sr;break a;default:b=b.bB.fL;break a;}b=b.dy.qo;}return b;}
function J4(a,b,c){return Wf(a,b,0,c);}
function Lc(){var a=this;B.call(a);a.h8=null;a.hK=null;}
function Lq(a,b){var c;c=a.hK;a.hK=b;return c;}
function It(){var a=this;Lc.call(a);a.bx=null;a.bP=null;a.eZ=0;a.e$=0;}
function IJ(a){var b;b=JF(a);if(b==2){if(JF(a.bP)<0)a.bP=L2(a.bP);return NO(a);}if(b!=(-2))return a;if(JF(a.bx)>0)a.bx=NO(a.bx);return L2(a);}
function JF(a){var b,c;b=a.bP;c=b===null?0:b.eZ;b=a.bx;return c-(b===null?0:b.eZ)|0;}
function L2(a){var b;b=a.bx;a.bx=b.bP;b.bP=a;DW(a);DW(b);return b;}
function NO(a){var b;b=a.bP;a.bP=b.bx;b.bx=a;DW(a);DW(b);return b;}
function DW(a){var b,c,d;b=a.bP;c=b===null?0:b.eZ;b=a.bx;d=b===null?0:b.eZ;a.eZ=Ba(c,d)+1|0;a.e$=1;b=a.bx;if(b!==null)a.e$=1+b.e$|0;b=a.bP;if(b!==null)a.e$=a.e$+b.e$|0;}
function HQ(){var a=this;B4.call(a);a.fE=0;a.fH=0;a.fF=0;a.fG=0;}
function G_(a){var b=new HQ();ANd(b,a);return b;}
function DU(a,b,c){var d=new HQ();AEM(d,a,b,c);return d;}
function N(a){var b=new HQ();ALc(b,a);return b;}
function EX(a,b,c,d){var e=new HQ();PK(e,a,b,c,d);return e;}
function BA(a){var b=new HQ();IM(b,a);return b;}
function ANd(a,b){PK(a,b,b,b,255);}
function AEM(a,b,c,d){PK(a,b,c,d,255);}
function ALc(a,b){if(!(H(b)!=4&&H(b)!=7&&H(b)!=9)&&I(b,0)==35){if(H(b)==4){a.fE=HW(I(b,1))*17|0;a.fH=HW(I(b,2))*17|0;a.fF=HW(I(b,3))*17|0;a.fG=255;}else{a.fE=Kh(I(b,1),I(b,2));a.fH=Kh(I(b,3),I(b,4));a.fF=Kh(I(b,5),I(b,6));a.fG=H(b)!=9?255:Kh(I(b,7),I(b,8));}IS(a.fE,a.fH,a.fF,a.fG,a);return;}}
function PK(a,b,c,d,e){a.fE=b;a.fH=c;a.fF=d;a.fG=e;IS(b,c,d,e,a);}
function IM(a,b){a.fE=b.fE;a.fH=b.fH;a.fF=b.fF;a.fG=b.fG;Fc(a,b);}
function HW(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Kh(b,c){return (16*HW(b)|0)+HW(c)|0;}
var CO=F(0);
var AQ9=null;var ARP=null;var AQ_=null;var AQ$=null;var ARb=null;var ARa=null;var ARd=null;var ARc=null;var ARf=null;var ARe=null;var ARg=null;function AFp(){AFp=Bg(CO);ALw();}
function ALw(){AQ9=G_(206);ARP=N(C(194));AQ_=N(C(195));AQ$=N(C(86));ARb=N(C(196));ARa=N(C(197));ARd=N(C(198));ARc=N(C(199));ARf=EX(107,106,107,128);ARe=EX(30,31,34,0);ARg=N(C(88));}
function B6(){Cl.call(this);this.hd=null;}
var ARQ=null;var ARR=null;var ARS=null;var ART=null;var ARU=null;var ARA=null;var ARV=null;var ARW=null;var ARX=null;var ARY=null;var ARZ=null;var AR0=null;var AR1=null;var AR2=null;var AR3=null;var ARh=null;function Tf(){Tf=Bg(B6);AHG();}
function Ds(a,b,c){var d=new B6();QG(d,a,b,c);return d;}
function AOo(a,b,c,d){var e=new B6();U_(e,a,b,c,d);return e;}
function QG(a,b,c,d){Tf();Do(a,b,c);a.hd=G6(d,null);}
function U_(a,b,c,d,e){Tf();Do(a,b,c);a.hd=G6(d,e);}
function AHG(){var b,c;b=new B6;AFp();QG(b,C(200),0,ARP);ARQ=b;ARR=Ds(C(201),1,N(C(202)));ARS=Ds(C(203),2,N(C(204)));ART=Ds(C(205),3,N(C(206)));ARU=Ds(C(207),4,ARP);ARA=Ds(C(208),5,N(C(209)));ARV=Ds(C(210),6,N(C(211)));ARW=Ds(C(212),7,N(C(213)));ARX=Ds(C(214),8,N(C(215)));c=new B6;AAU();U_(c,C(216),9,AR4,N(C(198)));ARY=c;ARZ=AOo(C(217),10,AR4,N(C(89)));AR0=Ds(C(218),11,N(C(219)));AR1=Ds(C(220),12,N(C(221)));AR2=Ds(C(222),13,ARP);b=Ds(C(223),14,N(C(224)));AR3=b;ARh=G(B6,[ARQ,ARR,ARS,ART,ARU,ARA,ARV,ARW,ARX,ARY,
ARZ,AR0,AR1,AR2,b]);}
function HY(){var a=this;B.call(a);a.ht=null;a.jg=null;}
function G6(a,b){var c=new HY();AIy(c,a,b);return c;}
function AIy(a,b,c){a.ht=b;a.jg=c;}
function Hi(){var a=this;B.call(a);a.hO=null;a.ha=null;a.t2=null;a.xs=null;a.jH=null;a.n8=null;a.m3=null;}
function AR5(a,b,c,d,e,f,g){var h=new Hi();Ki(h,a,b,c,d,e,f,g);return h;}
function Ki(a,b,c,d,e,f,g,h){a.t2=b;a.xs=c;a.ha=d;a.jH=e;a.hO=f;a.n8=g;a.m3=h;}
function Zg(){var a=this;B.call(a);a.k8=null;a.p3=0;}
function Wm(a,b){var c=new Zg();ALa(c,a,b);return c;}
function ALa(a,b,c){var d;d=new B4;a.k8=d;a.p3=b;d.bV=c;}
function N8(a,b){return Cn(a.p3,b);}
var De=F(0);
var ARl=null;var ARm=null;var ARi=null;var ARj=null;var ARk=null;var ARK=null;var ARL=null;var ARn=null;var ARo=null;function ACu(){ACu=Bg(De);AJM();}
function AJM(){ARl=N(C(197));ARm=N(C(225));ARi=N(C(91));ARj=N(C(211));ARk=N(C(194));ARK=N(C(197));ARL=N(C(226));ARn=N(C(227));ARo=DU(43,45,48);}
function XZ(){var a=this;B.call(a);a.iC=null;a.hb=0.0;}
function YB(a,b){var c=new XZ();AJF(c,a,b);return c;}
function AJF(a,b,c){a.iC=b;a.hb=c;}
function AK6(a,b){if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){b=b;return a.hb===b.hb&&BB(a.iC,b.iC)?1:0;}return 0;}
var OZ=F();
function ACL(a,b){return b.text();}
function OX(){B.call(this);this.mv=null;}
function AMw(a,b){var c,d;c=a.mv;b=ZR(b);d=AEk(b.hu,null,AKc(c));Dn(AQj,c,d);if(BB(AQi,c))Uu(d);}
var OY=F();
function AK8(a,b){KW(b);}
function Hu(){var a=this;B.call(a);a.rt=null;a.mW=null;a.n0=null;a.sk=null;a.pt=null;a.hp=null;}
function AR6(a,b,c,d,e,f){var g=new Hu();Lb(g,a,b,c,d,e,f);return g;}
function Lb(a,b,c,d,e,f,g){a.rt=b;a.mW=c;a.n0=d;a.sk=e;a.pt=f;a.hp=g;}
function HT(){var a=this;B.call(a);a.og=null;a.kO=null;a.sd=null;}
function AR7(a,b,c){var d=new HT();I6(d,a,b,c);return d;}
function I6(a,b,c,d){a.og=b;a.kO=c;a.sd=d;}
function UV(a,b){return !b?a.kO:a.sd;}
function Xp(){var a=this;B.call(a);a.ki=null;a.q$=null;a.tj=null;}
function ABr(a,b,c){var d=new Xp();AMe(d,a,b,c);return d;}
function AMe(a,b,c,d){a.ki=b;a.q$=c;a.tj=d;}
var CD=F(0);
var AR8=null;var AR4=null;var AR9=null;var AR$=null;var AR_=null;var ASa=null;var ASb=null;var ASc=null;var ASd=null;var ASe=null;var ASf=null;function AAU(){AAU=Bg(CD);ANm();}
function ANm(){AR8=G_(187);AR4=N(C(228));AR9=G_(55);AR$=G_(43);AR_=DU(33,66,131);ASa=DU(60,63,65);ASb=N(C(229));ASc=N(C(230));ASd=EX(85,85,85,128);ASe=EX(43,43,43,0);ASf=N(C(231));}
function Y1(){var a=this;B.call(a);a.jG=0;a.wp=null;}
var Yj=F();
function Sy(){var a=this;B.call(a);a.nr=null;a.rB=null;a.ss=null;}
function AAE(){var a=this;B.call(a);a.hL=null;a.jm=null;a.e3=null;a.xe=null;}
function AKc(a){var b=new AAE();AK3(b,a);return b;}
function AK3(a,b){var c,d,e;c=null;d=null;e=null;a.hL=c;a.jm=d;a.e3=b;a.xe=e;}
function Ts(a){var b,c;b=a.e3;if(b===null)return C(5);c=YF(b,C(232));return c==(-1)?a.e3:DS(a.e3,c+1|0);}
function AEm(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return BB(a.hL,c.hL)&&BB(a.jm,c.jm)&&BB(a.e3,c.e3)?1:0;}return 0;}
var S3=F();
function ADg(a,b){ZV(b);}
function Is(){var a=this;B.call(a);a.d8=null;a.eA=null;a.e2=null;}
var AQY=0;function ZV(a){var b;b=a.eA;if(b!==null){AQY=AQY-1|0;a.d8.dx.deleteTexture(b);a.eA=null;}}
function Cf(a){return a.e2.b;}
function Kl(a){return a.e2.a;}
function R1(a,b,c,d){var e;e=a.e2;e.b=b;e.a=c;KO(a);a.d8.dx.texStorage2D(3553,1,d,b,c);e=a.d8.dx;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function KO(a){var b,c;b=a.d8.dx;c=a.eA;b.bindTexture(3553,c);}
function Ek(a,b){var c,d,e,f,g,h;a:{c=b.k2;d=b.j_;e=a.e2;f=e.b;if(f){g=e.a;if(g){if(f==c&&g==d?1:0){KO(a);break a;}e=a.d8.dx;h=a.eA;e.deleteTexture(h);a.eA=a.d8.dx.createTexture();R1(a,c,d,32856);break a;}}R1(a,c,d,32856);}OV(a,b,0,0);}
function P1(a,b,c,d){KO(a);OV(a,b,c,d);}
function OV(a,b,c,d){var e;e=a.d8.dx;b=b.g5;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var WI=F();
function Ft(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function Xn(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function S2(){var a=this;B.call(a);a.bh=null;a.K=null;a.N=null;a.ft=null;}
function Yx(a,b,c,d){var e,f,g,h;e=a.K;f=BB(e.hm,c)?0:1;g=BB(e.f6,b)?0:1;h=d===e.ij?0:1;if(f){e.hm=c;e.em=null;Og(e,0);}e.f_=!f&&!g&&!h?0:1;e.f6=b;e.ij=d;e.hq=0;Mi(a);}
function Zb(a,b){a.ft=b;}
function JU(a,b,c){var d;d=a.N;d.kM(b,c,d.eF);Mi(a);}
function Mi(a){var b,c,d,e;b=a.K;c=a.N.o.b;b.o.b=c;d=b.c5;if(d!==null&&c!=Cf(d)&&!(c>=b.hq&&Cf(b.c5)>=b.hq))b.f_=1;b=a.K;b.eF=a.bh.bW;if(Uq(b))c=0;else{b=a.K;To(b);e=Cj(b.eL,b.ij);Og(b,Fi(b.em)+(e*2|0)|0);c=b.o.a;}b=a.K.H;d=a.N.H;Bn(b,d.b,d.a-c|0);}
function Kz(b,c){if(b<0)c=C(233);else if(b>0)c=C(234);return c;}
function V5(a,b,c){var d;d=a.K.H.b;return (d-c|0)<=b&&b<d?1:0;}
function LO(a,b,c){var d,e;d=a.K;e=d.H.b+d.o.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Oe(a,b,c){var d;d=a.K.H.a;return (d-c|0)<=b&&b<d?1:0;}
function Mz(a,b,c){var d,e;d=a.N;e=d.H.a+d.o.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Uw(a,b,c){var d,e,f;d=a.K.H.a-c|0;e=a.N;f=(e.H.a+e.o.a|0)+c|0;return d<=b&&b<f?1:0;}
function U5(a,b,c){var d,e;d=a.K.H.a+c|0;e=a.N;return YK(b,d,(e.H.a+e.o.a|0)-c|0);}
function Nc(a,b,c){var d,e,f;d=a.K;e=d.H.b;f=e-c|0;e=(e+d.o.b|0)+c|0;return f<=b&&b<e?1:0;}
function MH(a,b,c){var d,e;d=a.K;e=d.H.b;return YK(b,e+c|0,(e+d.o.b|0)-c|0);}
function YK(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BF(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function Hx(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bp;f=new Bp;g=b.b;h=b.a;b=a.N;i=b.H;j=i.b;k=i.a;b=b.o;l=b.b;m=b.a;b=new T2;b.r_=a;b.sb=e;b.sa=f;b.r8=c;b.r7=g;b.r$=j;b.r9=l;b.sn=d;b.sm=h;b.so=k;b.sO=m;return b;}
function ABJ(a){return a.K.o.a+Cj(a.bh,2.0)|0;}
function RE(){var a=this;B.call(a);a.eD=null;a.b2=null;a.e7=null;a.fA=null;a.k4=null;a.cc=null;a.fl=null;a.cv=0;a.eI=0;a.ln=0;a.hD=0;a.h7=0;a.fv=0;a.sB=null;a.on=null;a.uQ=null;a.kL=null;}
function OU(a,b,c){a.eD=b;T9(a,c);Kt(a);}
function Pw(a,b){var c;a.k4=b.hO;c=b.jH.kO;Fc(a.b2.eQ,c);c=b.ha.ki;Fc(a.b2.g$,c);a.kL=b.jH;}
function T9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=KV(b);d=b.bW;BU(a.eD);CG(c,a.eD);e=OL(a.eD,1.25);f=0;a.cv=Cn(2.0,d);a.eI=Cn(3.0,d);a.ln=Cn(12.0,d);g=0;h=a.cc.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Jx(c,l.kq,0.875);n=a.ln;o=(n+m|0)+n|0;f=Ba(f,o);b=l.d5;b.b=g;b.a=0;b=l.dq;b.b=o;b.a=e;Cb(l.hx,g,0.0,o,k);g=g+o|0;j=j+1|0;}b=a.e7;b.b=g;b.a=e;b=a.b2.bo;o=a.fv;if(!o){m=a.cv;m=(g+m|0)+V(m,a.cc.data.length)|0;}else m=(f+(a.cv*2|0)|0)+(a.eI*2|0)|0;b.b=m;if(!o)e=e+(a.cv*2|0)|0;else{o=a.cv;e=(V(e+o|0,a.cc.data.length)
+o|0)+(a.eI*2|0)|0;}b.a=e;}
function WT(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EI(a){var b,c;b=a.e7;if(b.b&&b.a)return a.b2.bo;c=new Bq;Br(c,C(235));K(c);}
function Kt(a){a.h7=1;}
function AA9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.c6;if(!a.cc.data.length)return;if(a.fl===null)a.fl=Gt(c);a:{if(!a.h7){d=a.e7;if(V(d.b,d.a))break a;}d=a.e7;if(!V(d.b,d.a))T9(a,b);d=a.e7;e=d.b;f=d.a;if(!V(e,f))return;d=EY(c,e,f,b.b7);CG(d,a.eD);g=OL(a.eD,0.125);h=a.eD;i=h.d0;g=g+i-(i+h.dC)/16.0;j=a.cc.data;e=j.length;f=0;while(f<e){h=j[f];Ei(d,h.kq,h.hx.bk+a.ln,g);f=f+1|0;}Ek(a.fl,d);a.h7=0;K1(d);}if(!I_(a.b2)){d=a.b2;XY(c,d.bo,d.cI,d.g$,a.cv,a.fA);d=a.b2;h=d.bo;k=d.cI;d=d.eQ;e=a.cv;l=a.fA;l.b=(h.b-e|0)
-e|0;l.a=(h.a-e|0)-e|0;BC(c,k.b+e|0,k.a+e|0,l,d);if(a.fv){d=a.b2;ZI(c,d.bo,d.cI,0,0,N8(a.k4,b.bW),a.k4.k8,a.fA);}}j=a.cc.data;m=j.length;n=0;while(n<m){d=j[n];h=d.d5;e=h.b;f=h.a;h=d.dq;k=d.hx;l=a.fl;o=a.kL;Ew(c,e,f,h,k,l,o.og,UV(o,d.g_),b.b7);n=n+1|0;}b:{if(a.fv){j=a.cc.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.fA;e=(a.b2.bo.b-(a.cv*2|0)|0)-(a.eI*2|0)|0;h=d.dq;e=e-h.b|0;b.b=e;b.a=h.a;if(e>0){k=d.d5;BC(c,k.b+h.b|0,k.a,b,UV(a.kL,d.g_));}p=p+1|0;}}}}
function MA(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cc.data;if(c>=d.length)return (-1);e=d[c];if(Ft(b,e.d5,e.dq))return c;if(a.fv){f=e.d5;g=f.b;e=e.dq;h=e.b;g=g+h|0;i=f.a;f=a.fA;f.b=(a.b2.bo.b-(a.cv*2|0)|0)-h|0;f.a=e.a;if(Xn(b,g,i,f))break;}c=c+1|0;}return c;}
function Mh(){B.call(this);this.pv=null;}
function AE6(a,b){var c,d;c=a.pv;VK(c,Ef(c,b.u));b=Z(c);d=c.d;Ka(b,d.n,d.s);F9(c);}
var Xe=F();
function Cn(b,c){return Dy(b*c);}
function T7(){var a=this;B.call(a);a.X=0;a.be=0;}
function Di(a,b){var c=new T7();Zd(c,a,b);return c;}
function Zd(a,b,c){a.X=b;a.be=c;}
function ACp(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return a.X==c.X&&a.be==c.be?1:0;}return 0;}
function AKs(a){var b,c,d,e;b=O(B,2).data;b[0]=Ct(a.X);b[1]=Ct(a.be);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.ba)|0;d=d+1|0;}return c;}
function AJ5(a,b){var c;b=b;c=BF(a.X,b.X);if(!c)c=BF(a.be,b.be);return c;}
function OE(){var a=this;B.call(a);a.Z=null;a.iD=null;a.ee=null;a.dm=0;a.F=0;a.de=null;a.dU=null;a.fP=0;a.mf=0;}
function Mr(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dm;i=V(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Ba(i,e))a:{while(true){if(d<=e){j=d;break a;}Fg(c);j=d+(-1)|0;b=DX(d);d=V(j,a.F)%a.ee.a|0;Fx(a,c,b,a.fP,g);P1(a.Z,c,0,d);if(!(j%a.dm|0))break;d=j;}}else{Fg(b);k=a.dm-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Fx(a,b,DX(j),V(a.F,k)+a.fP|0,g);k=k+(-1)|0;j=h;}Ek(a.Z,b);j=Ba(i,e);}return j;}k=a.dm;h=V(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Fg(c);b=DX((d+f|0)+1|0);j=d+1|0;d=V(d,
a.F)%a.ee.a|0;Fx(a,c,b,a.fP,g);P1(a.Z,c,0,d);if(!(j%a.dm|0))break;d=j;}}else{Fg(b);d=0;while(d<a.dm){h=h+1|0;Fx(a,b,DX((h>e?h-f|0:h)+f|0),V(a.F,d)+a.fP|0,g);d=d+1|0;}Ek(a.Z,b);j=Be(i,e);}return j;}
function Y$(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q;l=d/a.F|0;c=Be((j+i|0)%e|0,c);Bn(a.de,Cf(a.Z),a.F);e=d%Kl(a.Z)|0;i=a.F;m=e/i|0;n=m+(c/i|0)|0;if(c%i|0)n=n+1|0;i=m;e=m;o=l;while(i<n){if(KJ(a,g,o,l+(i-m|0)|0,f,k)){p=V((i-e|0)+1|0,a.F);Bn(a.de,Cf(a.Z),p);Cb(a.dU,0.0,V(e,a.F),Cf(a.Z),p);}else{q=Fh(f,g,o,k);c=e-m|0;e=a.F;Ed(a,h,V(c,e)-(d%e|0)|0,b,k.eB,q);o=(l+i|0)-m|0;Bn(a.de,Cf(a.Z),a.F);Cb(a.dU,0.0,V(i,a.F),Cf(a.Z),a.F);e=i;}i=i+1|0;}q=Fh(f,g,o,k);c=e-m|0;e=a.F;Ed(a,h,V(c,e)-(d%e|0)|0,b,k.eB,q);}
function KJ(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Fh(e,b,c,f)!==f.g7?0:1;}
function Fh(b,c,d,e){c=c.data;return d<c.length&&c[d]?J4(b.dy,b,c[d]):e.g7;}
function Ed(a,b,c,d,e,f){Ew(b,a.iD.b+d.b|0,c+d.a|0,a.de,a.dU,a.Z,e,f,a.mf);}
function Fx(a,b,c,d,e){Ei(b,c,a.ee.b-20.0*e,d);}
function M6(){B.call(this);this.m0=null;}
var Df=F(Bq);
var Se=F(FH);
function TW(){B.call(this);this.oS=null;}
function AIJ(a,b){var c,d,e,f;c=a.oS;if(c.dT!=3){b=b.data;d=CQ(b[0]);e=D5(b[1]);Lz(c.f,d,e,null,null);if(c.ek){b=DZ(c);f=Jg(D1(),c.rX);c=new R;T(c);J(FC(J(J(c,b),C(236)),f),C(172));$rt_globals.console.info($rt_ustr(S(c)));}}}
var Xt=F(0);
function WE(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(JZ(b)){case -1655966961:if(!B1(b,C(141)))break a;c=4;break a;case 3401:if(!B1(b,C(168)))break a;c=3;break a;case 98723:if(!B1(b,C(140)))break a;c=2;break a;case 3254818:if(!B1(b,C(131)))break a;c=1;break a;case 3556653:if(!B1(b,C(118)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;default:d=D2();e=new R;T(e);J(J(e,C(237)),b);CE(d,S(e));c=0;break b;}c=0;}return c;}
function ABp(){var a=this;B.call(a);a.i4=null;a.jl=null;a.dI=null;a.i$=null;a.bd=null;a.kr=null;a.kx=null;a.eu=null;a.e4=null;a.gx=null;}
function ANf(a,b){var c=new ABp();AIa(c,a,b);return c;}
function AIa(a,b,c){var d,e,f;a.dI=b;a.i$=c;b=new TX;b.ku=0;b.ga=Bv(16);b.eH=0;a.bd=b;b=new R;T(b);a.gx=b;a.eu=FQ();b=new Rz;d=AAZ(16);b.eW=0;b.db=O(GT,d);b.nZ=0.75;TO(b);a.e4=b;b=new TS;c=a.bd;e=a.gx;f=a.eu;b.cK=c;b.iT=e;b.pL=f;a.kr=b;b=new TL;b.cn=c;b.j1=e;b.oy=f;a.kx=b;}
function Ml(a){var b,c,d,e,f,g,h;a:{b=IQ(a.dI.dR);c=b.f5;if(c.cq>0){d=c.co;e=0;b:while(true){f=b.f5.bR.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.ch;if(Iz(a.eu,g))B7(a.eu,g);else{h=a.eu;Dn(h,g,Ct(h.cq));}c=c.cm;if(d!=b.f5.co)break b;}e=e+1|0;}b=new Gb;W(b);K(b);}}b=a.dI.ev;if(b!==null)Qe(a,b);Bf(a.bd,a.dI.dR.cq);b=Rd(IQ(a.dI.dR));while(EG(b)){c=NW(b);Hf(a.bd,a.gx.D,H(c));DJ(a.gx,c);}b=Rd(IQ(a.dI.dR));while(EG(b)){c=NW(b);c=B7(a.dI.dR,c);Bf(a.bd,c.j);c=BL(c);while(BM(c)){g=BP(c);g=B7(a.eu,g);Bf(a.bd,
g.ba);}}if(a.dI.ev===null)Bf(a.bd,(-1));else{Bf(a.bd,a.e4.eW);Rn(a,a.dI.ev);}if(a.i$===null)Bf(a.bd,(-1));else{Bf(a.bd,1);W1(a.i$,a.bd,a.e4);}b=a.bd;d=b.ku;if(d&&b.eH!=d){c=D2();d=b.ku;e=b.eH;g=new R;T(g);J(Bj(J(Bj(J(g,C(238)),d),C(239)),e),C(240));CE(c,S(g));}f=b.ga;d=f.data.length;e=b.eH;if(d!=e)f=HZ(f,e);a.i4=f;a.jl=ES(S(a.gx));}
function Qe(a,b){var c,d,e,f,g,h;if(T6(a.e4,b))KQ(a.e4,b);else{c=a.e4;d=Ct(c.eW);if(b===null){e=Pk(c);if(e===null){c.is=c.is+1|0;e=T_(c,null,0,0);f=c.eW+1|0;c.eW=f;if(f>c.kt)Mg(c);}}else{g=H4(b);h=g&(c.db.data.length-1|0);e=Mp(c,b,h,g);if(e===null){c.is=c.is+1|0;e=T_(c,b,h,g);f=c.eW+1|0;c.eW=f;if(f>c.kt)Mg(c);}}e.cw=d;}b=b.cb;if(b===null)return;c=new VY;c.oB=a;b.d4(c);}
function Rn(a,b){var c,d,e,f;c=(KQ(a.e4,b)).ba;Bf(a.bd,c);if(b instanceof JD)Bf(a.bd,(-1));else if(!(b instanceof Jc))Bf(a.bd,0);else Bf(a.bd,1);d=a.kr;Bf(d.cK,b.dA.cr());e=b.dA;f=new Li;f.t6=d;e.d4(f);d=a.kx;Bf(d.cn,b.dZ.cr());e=b.dZ;f=new Ti;f.r3=d;e.d4(f);d=b.hw;Bf(a.bd,d.cr());e=new Ue;e.sR=a;d.d4(e);d=b.fr;Bf(a.bd,d.cr());d=d.bS();while(d.ca()){e=d.bL();L7(a.kr,e.hA);F7(a.kx,e.ip);Bf(a.bd,e.n9);}d=b.rZ;if(d===null)Bf(a.bd,(-1));else Bf(a.bd,(B7(a.eu,d)).ba);b=b.cb;Bf(a.bd,b.cr());d=new NP;d.l4=a;b.d4(d);}
function Ly(){B.call(this);this.se=null;}
function ABW(a,b){var c,d,e,f,g,h,i,j;c=a.se;if(c.ek){d=DZ(c);e=new R;T(e);J(J(e,d),C(241));$rt_globals.console.info($rt_ustr(S(e)));}b=b.data;f=CQ(b[0]);g=D5(b[1]);h=(CQ(b[2])).data[0];if(c.f.b3==h){i=null;j=null;if(b.length>=5){i=CQ(b[3]);j=D5(b[4]);}Lz(c.f,f,g,i,j);Eg(c.f.cP);Eg(c.f.c_);IV(c.f);GC(c.f);KK(c);}}
function OM(){var a=this;B.call(a);a.v1=null;a.v4=null;a.v3=null;}
function Q4(){var a=this;B.call(a);a.tN=null;a.tO=null;a.tM=0;}
function AE5(a,b){var c,d,e;c=a.tN;d=a.tO;e=a.tM;d.m(Uv(c,(b.u.b+e|0)-c.dH.b|0));}
function Q3(){var a=this;B.call(a);a.n7=null;a.n5=null;a.n6=0;}
function AMn(a,b){var c,d,e;c=a.n7;d=a.n5;e=a.n6;d.m(Ox(c,(b.u.a+e|0)-c.dH.a|0));}
var Eu=F(0);
function Ms(){var a=this;B.call(a);a.gU=0;a.lo=0;a.hP=0;a.fy=0;a.f4=null;}
function BM(a){return a.gU>=a.hP?0:1;}
function BP(a){var b,c;N9(a);b=a.gU;a.fy=b;c=a.f4;a.gU=b+1|0;return c.kC(b);}
function PZ(a){var b,c,d;if(a.fy<0){b=new Df;W(b);K(b);}N9(a);a.f4.lt(a.fy);a.lo=a.f4.bJ;c=a.fy;d=a.gU;if(c<d)a.gU=d-1|0;a.hP=a.hP-1|0;a.fy=(-1);}
function N9(a){var b;if(a.lo>=a.f4.bJ)return;b=new Gb;W(b);K(b);}
var Yr=F();
function Rv(){B.call(this);this.wH=null;}
var AAe=F();
var Lx=F();
function ALk(a,b){b=b;b.Z=CY(b.Z,null);}
function L3(){var a=this;B.call(a);a.ps=0;a.pr=0;}
function TX(){var a=this;B.call(a);a.ga=null;a.ku=0;a.eH=0;}
function Hf(a,b,c){Bf(a,b);Bf(a,c);}
function Bf(a,b){var c,d;c=a.ga;d=c.data.length;if(d==a.eH)a.ga=HZ(c,d*2|0);c=a.ga.data;d=a.eH;a.eH=d+1|0;c[d]=b;}
function Rz(){var a=this;Dv.call(a);a.eW=0;a.db=null;a.is=0;a.nZ=0.0;a.kt=0;}
function AAZ(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function TO(a){a.kt=a.db.data.length*a.nZ|0;}
function T6(a,b){return VL(a,b)===null?0:1;}
function KQ(a,b){var c;c=VL(a,b);if(c===null)return null;return c.cw;}
function VL(a,b){var c,d;if(b===null)c=Pk(a);else{d=H4(b);c=Mp(a,b,d&(a.db.data.length-1|0),d);}return c;}
function Mp(a,b,c,d){var e;e=a.db.data[c];while(e!==null&&!(e.ks==d&&(b!==e.ch?0:1))){e=e.f9;}return e;}
function Pk(a){var b;b=a.db.data[0];while(b!==null&&b.ch!==null){b=b.f9;}return b;}
function T_(a,b,c,d){var e,f;e=new GT;V4(e,b,null);e.ks=d;f=a.db.data;e.f9=f[c];f[c]=e;return e;}
function Mg(a){var b,c,d,e,f,g,h,i;b=a.db.data.length;b=AAZ(!b?1:b<<1);c=O(GT,b);d=c.data;e=0;f=b-1|0;while(true){g=a.db.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.ks&f;i=h.f9;h.f9=d[b];d[b]=h;h=i;}e=e+1|0;}a.db=c;TO(a);}
function TS(){var a=this;B.call(a);a.cK=null;a.iT=null;a.pL=null;}
function L7(a,b){var c;if(!(b instanceof KR)){Bf(a.cK,3);U6(a,b);Bf(a.cK,b.gi);}else{c=b;Bf(a.cK,5);U6(a,c);Bf(a.cK,c.gi);Bf(a.cK,c.lT);b=c.iF;Bf(a.cK,b.j);c=new LW;c.m8=a;DN(b,c);}}
function U6(a,b){var c;c=b.dB.gr;Hf(a.cK,a.iT.D,H(c));Bf(a.cK,b.dB.cS);Lr(a,b.iu);DJ(a.iT,c);}
function Lr(a,b){if(b===null)Bf(a.cK,(-1));else Bf(a.cK,(B7(a.pL,b)).ba);}
function TL(){var a=this;B.call(a);a.cn=null;a.j1=null;a.oy=null;}
function F7(a,b){var c,d,e;if(b instanceof FA){c=b;Bf(a.cn,9);OK(a,c.fN);}else if(b instanceof HH){d=b;Bf(a.cn,3);Pn(a,d);Bf(a.cn,d.md);OK(a,d.fW);}else if(b instanceof H1){e=b;Bf(a.cn,4);F7(a,e.gM);F7(a,e.fY);}else if(b===null)Bf(a.cn,(-1));else{Bf(a.cn,5);Pn(a,b);Bf(a.cn,b.ra);}}
function Pn(a,b){var c;c=b.eq.gr;Hf(a.cn,a.j1.D,H(c));Bf(a.cn,b.eq.cS);b=b.eV;if(b===null)Bf(a.cn,(-1));else Bf(a.cn,(B7(a.oy,b)).ba);DJ(a.j1,c);}
function OK(a,b){var c;Bf(a.cn,b.j);c=new V8;c.nb=a;DN(b,c);}
function SH(){var a=this;B.call(a);a.qp=0;a.uD=0;}
function GO(a,b){return OT(a.qp,b,a.uD);}
var DR=F(Bq);
function MB(){var a=this;B.call(a);a.l3=null;a.pn=null;a.sQ=0;a.t8=0;}
function Kv(a,b){return Ez(a.pn)<b?0:1;}
function Sa(){B.call(this);this.sY=null;}
function AH7(a,b){Go(a.sY,b);}
function Sb(){B.call(this);this.rJ=null;}
function AJG(a,b){Go(a.rJ,b);}
var AAW=F();
function SK(b,c,d,e){var f,g;f=b.next();g=new Vt;g.mk=b;g.mj=c;g.mn=d;g.ml=e;f.then(Bi(g,"f"),Bi(d,"f"));}
function W0(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ABo(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(C2()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Vq;f.p4=b;f.p5=d;d.addEventListener("change",Bi(f,"handleEvent"));d.click();}
function W8(b,c){var d;if(c.isFile?1:0)b.m(Ww(c.file()));else{c=c.createReader();d=new Vc;d.s1=b;c.readEntries(Bi(d,"f"));}}
function RQ(){var a=this;B.call(a);a.bb=null;a.vk=null;a.f0=null;a.lC=null;a.iL=null;a.ey=null;}
function FO(a){return a.bb.bw.fg;}
function Wb(a){var b;b=new Rx;b.tQ=a;return b;}
function YC(a){var b,c,d,e,f;b=O(Dh,5);c=b.data;d=a.bb;BU(d);e=new VW;e.rc=d;c[0]=Cv(C(242),e);e=a.bb;BU(e);f=new VR;f.nf=e;c[1]=Cv(C(243),f);d=a.bb;BU(d);e=new VS;e.oh=d;c[2]=Cv(C(244),e);d=a.bb;BU(d);e=new VT;e.tK=d;c[3]=Cv(C(245),e);d=a.bb;BU(d);e=new VU;e.l8=d;c[4]=Cv(C(246),e);return Gr(b);}
function N7(a,b){var c;c=new M3;c.ui=a;c.uj=b;return c;}
function Xu(a){var b;b=new Lw;b.nO=a;return b;}
function Iu(a,b,c){var d,e,f,g,h,i,j,k,l;a:{Dq(a.ey.bO);d=a.bb.d;e=DI(d);f=Fv(d);g=a.bb.eo;if(c===null)h=null;else{AO1();switch(ASg.data[c.fM]){case 1:h=KT(g,e,f);break a;case 2:h=Px(g,e,f);break a;default:}b=new E9;W(b);K(b);}}c=a.bb;e=Ef(c,b);f=HB(c.d.f,e.X,e.be);g=RH(c,f);if(h!==null){f=c.d;i=e.X;j=e.be;e=new Sj;e.v_=c;e.v$=b;e.v9=g;h.qO(f,i,j,e,c.g6);}else{e=B7(c.d.f.c_,f);if(e!==null)Hb(c,e);else{e=B7(c.d.f.cP,f);if(e!==null&&!DO(e))PU(c.im,b,e,c,g);else{g=c.im;Dq(g.bO);h=g.bO;k=O(Dh,1);l=k.data;d=new Dh;BU(h);f
=new LC;f.uE=h;Wy(d,f,C(247));l[0]=d;O2(h,b,Gr(k),PD(g,c));}}}}
var Xj=F(0);
var PA=F(0);
var Mt=F(0);
var Gd=F();
function Q_(){Gd.call(this);this.si=null;}
function SY(a,b){var c,d,e;c=0;while(true){d=a.si;if(d.hr===null)d.hr=BL(d.oG);if(!BM(d.hr))e=0;else{c=b.cW(BP(d.hr));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Pr=F(0);
function Sk(){B.call(this);this.GC=null;}
var ARs=null;function RA(b){return b===null?C(5):Ts(b);}
function AA8(){ARs=O(Jb,0);}
function Qc(){var a=this;B.call(a);a.va=null;a.u9=null;a.u$=0;a.u_=0;}
function GT(){var a=this;FK.call(a);a.ks=0;a.f9=null;}
var Gb=F(Bq);
function Qj(){B.call(this);this.mc=null;}
function AL5(a,b){Go(a.mc,b);}
function Mm(){B.call(this);this.oc=null;}
function AHD(a,b){Go(a.oc,b);}
function Ui(){B.call(this);this.qB=null;}
function AMP(a,b){var c,d,e,f;c=a.qB;if(c.fJ!=3&&c.dT!=3){b=b.data;c.fX=3;d=CQ(b[0]);e=D5(b[1]);Kk(c.f,d,e);if(c.ek){b=DZ(c);f=Jg(D1(),c.gT);c=new R;T(c);J(FC(J(J(c,b),C(248)),f),C(172));$rt_globals.console.info($rt_ustr(S(c)));}}}
function O4(){B.call(this);this.qh=null;}
function ADt(a,b){var c,d,e,f,g,h;c=a.qh;if(c.dT!=3){d=b.data;c.fJ=3;if((CQ(d[2])).data[0]!=1)Go(c,b);else{e=CQ(d[0]);f=D5(d[1]);g=c.fX!=3?0:1;PE(c.f,e,f,g);if(c.ek){b=DZ(c);h=Jg(D1(),c.gT);c=new R;T(c);J(FC(J(J(c,b),C(249)),h),C(172));$rt_globals.console.info($rt_ustr(S(c)));}}}}
var Vv=F();
function AK1(a,b){W0(b);}
function Vu(){var a=this;B.call(a);a.pq=null;a.pp=null;}
function AEE(a,b){var c,d,e,f,g,h,i;c=a.pq;d=a.pp;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new O5;i.nC=c;i.nB=g;h.then(Bi(i,"f"),Bi(d,"f"));e=e+1|0;}}
var UQ=F();
function AF6(a,b){W0(b);}
function UP(){var a=this;B.call(a);a.oT=null;a.oU=null;}
function AGN(a,b){var c,d,e,f,g;c=a.oT;d=a.oU;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=O(Bw,1);g.data[0]=Et(b.name);SK(f,c,d,g);}
function WS(){B.call(this);this.Cs=null;}
function Vq(){var a=this;B.call(a);a.p4=null;a.p5=null;}
function AFV(a,b){var c,d,e,f,g,h;b=a.p4;c=a.p5;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new LF;h.ma=b;h.l_=g;$rt_globals.setTimeout(Bi(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Ww(d.item(f));g=new Ln;g.rg=b;g.rh=c;$rt_globals.setTimeout(Bi(g,"onTimer"),0);f=f+1|0;}}
function Jb(){var a=this;B.call(a);a.rb=null;a.hM=null;a.hY=null;a.fm=null;}
function Xv(){var a=this;B.call(a);a.h$=null;a.ko=null;}
function ABL(){var a=this;B.call(a);a.vM=0;a.xk=0;a.nV=0;a.j8=0;}
function Vf(){var a=this;B.call(a);a.pd=null;a.pe=null;}
function ACU(a){var b,c,d,e,f,g;b=a.pd;c=a.pe;if(BB(c.h$,b.d.eM)){c=c.ko;Ci(b,c.j8,c.nV,0);BY((Z(b)).bs,c.j8,c.nV);BY((Z(b)).bi,c.xk,c.vM);}else{d=(Cc(b.eo.sF)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Fa(b);b=new N_;b.nF=g;b.nD=c;BU(b);c=new Qo;c.sM=b;$rt_globals.setTimeout(Bi(c,"onTimer"),0);}}}
function Vg(){var a=this;B.call(a);a.tJ=null;a.tI=null;}
function AGv(a){Hb(a.tJ,a.tI);}
function EP(){var a=this;B.call(a);a.fz=null;a.cb=null;a.dZ=null;a.dA=null;a.fr=null;a.hw=null;a.rZ=null;}
function ANK(a){var b=new EP();Zr(b,a);return b;}
function Zr(a,b){a.fz=b;a.cb=Bz();a.dZ=Bz();a.dA=Bz();a.hw=Bz();a.fr=Bz();}
function VB(a){var b;b=a.fz;if(b!==null)b.cb.mQ(a);}
function VY(){B.call(this);this.oB=null;}
function AFZ(a,b){b=b;Qe(a.oB,b);}
var JD=F(EP);
var Jc=F(EP);
function Ue(){B.call(this);this.sR=null;}
function ACY(a,b){var c;b=b;c=a.sR;Bf(c.bd,(B7(c.eu,b)).ba);}
function OH(){var a=this;B.call(a);a.hA=null;a.ip=null;a.n9=0;}
function NP(){B.call(this);this.l4=null;}
function AIn(a,b){b=b;Rn(a.l4,b);}
function Pp(){var a=this;B.call(a);a.jh=0;a.o6=null;}
function ANC(a,b){var c,d,e;c=a.o6;b=b;d=c.ps;e=c.pr;d=b.b<=d&&e<=b.a?1:0;a.jh=d;return d?0:1;}
var VX=F(DR);
var PM=F(Bq);
var Uk=F(Bq);
function Od(){B.call(this);this.qf=null;}
function AJD(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.qf;d=CQ(c[0]);e=(CQ(c[1])).data[0];if(!Sm(b.f)){c=b.f;if(c.b3==e){e=b.uW;f=Uj(d);Eg(c.c_);Eg(c.cP);IV(c);while(f.d1>=f.ge.data.length?0:1){if(X(f)==(-1))continue;g=VP(c,X(f));h=KF(BS(c,g.X),g.be);if(X(f)==(-1)){if(!e)continue;h.bK=0;h.bE=h.bE|4;continue;}i=VP(c,X(f));j=X(f);k=X(f);Dn(c.c_,g,i);l=c.cP;m=Bz();if(B7(l,i)===null)Dn(l,i,m);Bu(B7(c.cP,i),g);h.bK=j;h.bE=k;}JO(b);if(b.vR){n=Jg(D1(),b.s$);if(AN9(n,BH(100))){b=DZ(b);c=new R;T(c);J(FC(J(J(c,b),
C(250)),n),C(172));$rt_globals.console.info($rt_ustr(S(c)));}}}}}
function ABF(){B.call(this);this.FL=null;}
function UM(){B.call(this);this.lu=null;}
var ARx=null;function RU(){var a=new UM();Xz(a);return a;}
function Xz(a){a.lu=Bz();}
function Dz(a,b,c){NM(a,Cv(b,c));}
function Cv(b,c){return Mu(c,b);}
function Es(a,b,c){JW(a,b,c,null);}
function JW(a,b,c,d){NM(a,AOK(null,b,c,d));}
function NM(a,b){Bu(a.lu,b);}
function Hc(a){return Gr(GX(a.lu,ARx));}
function WN(){ARx=O(Dh,0);}
function Ph(){var a=this;B.call(a);a.mr=null;a.ms=null;}
function ANE(a){var b,c;b=a.mr;c=a.ms;HM(b.dP,c);}
function TR(){B.call(this);this.rs=null;}
function O9(){var a=this;B.call(a);a.oG=null;a.hr=null;}
function Ex(){var a=this;B.call(a);a.H=null;a.o=null;a.eF=0.0;}
function ANF(){var a=new Ex();Kq(a);return a;}
function Kq(a){a.H=new Bp;a.o=new Bp;}
function AKu(a){}
function ZK(a){return Cd(0,0);}
function Qh(a,b,c,d){var e;if(!Hm(a.H,b)){a.nU(b);Cp(a.H,b);}if(!Hm(a.o,c)){a.nA(c);Cp(a.o,c);}e=a.eF;if(e!==d){a.eF=d;a.pg(e,d);}}
function Dc(a,b){return Ft(b,a.H,a.o);}
function AMc(a,b){var c,d,e,f;c=a.H;d=c.b;e=c.a;f=a.o;AOy();BC(b,d,e,f,ASh);}
function AHT(a,b){}
function AMI(a,b){}
function AKC(a,b,c){}
function AMV(a){}
function AGy(a,b,c,d){return 0;}
function ADJ(a,b,c){return null;}
function AID(a,b,c){return 0;}
function AMp(a,b){return 0;}
function AKr(a,b,c,d){return 0;}
function Ie(){var a=this;Ex.call(a);a.cG=null;a.bC=null;a.fT=null;}
function Tp(a,b){a.bC.b=Ik(a,b);}
function We(a,b){a.bC.a=KC(a,b);}
function KC(a,b){return Ba(0,Be(b,a.cG.a-a.o.a|0));}
function Ik(a,b){return Ba(0,Be(b,a.cG.b-a.o.b|0));}
function Pm(){var a=this;Ie.call(a);a.bz=null;a.df=null;a.fS=null;a.sA=null;a.dw=null;a.bQ=null;a.dE=null;a.ei=null;a.cR=0;a.eb=0;a.uk=null;a.dc=0;a.dL=0;a.fd=0;a.eJ=0;a.ew=0;a.ck=0;a.dF=null;a.hE=null;a.pI=null;a.gk=null;}
function N$(a){a.cR=Cn(2.0,a.bz.bW);}
function Vo(a){return a.bQ.data.length?0:1;}
function Sh(a){Bn(a.fS,0,0);}
function AMo(a){a.ei=CY(a.ei,null);Bn(a.fS,0,0);Eg(a.gk);a.dF=null;a.bQ=ARs;a.dE=null;a.dc=0;a.dL=0;a.fd=0;RX(a.df);a.hE=null;}
function AES(a,b,c){Op(a);N$(a);a.dw=null;a.dF=null;a.eb=0;}
function WJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=KV(a.bz);if(Vo(a))return;IR(a);CG(c,a.dw);d=DC(a);e=WD(c,a.eb);f=Be(HE(a.o.a,d),a.bQ.data.length)+30|0;g=a.pI.t2;h=a.dE.data;d=h.length;if(d<f){a:{i=a.eJ;j=a.ew;k=a.bQ;l=a.dF;m=a.gk;n=O(Hw,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.e_!==c){TQ(l,q,m);o[f]=Ii(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=Ii(c,l,e,m);i=i+1|0;}}else if(f>0)
{r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=Ii(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){TQ(l,c,m);h[f]=null;}f=f+1|0;}a.dE=n;Cp(a.fS,L4(a.dF));OI(a,a.bz.c6);}a.eJ=Be((a.bC.a+a.cR|0)/(DC(a)+a.cR|0)|0,a.bQ.data.length-1|0);a.ew=Be((((a.bC.a+a.df.bo.a|0)-1|0)+a.cR|0)/(DC(a)+a.cR|0)|0,a.bQ.data.length-1|0);if(!a.dE.data.length)return;Wp(a,e);c=a.H;S$(b,c.b,c.a,a.o);q=g.sk;c=a.H;BC(b,c.b,c.a,a.o,q);c=a.df.cI;i=c.b;j=c.a;p=Cj(a.bz,2.0);s=a.bz.dQ;t=a.eJ;u=i+p|0;while(t<=a.ew){l=NN(a,
t);d=V(t,DC(a));v=t+1|0;w=d+V(v,a.cR)|0;x=u+a.dc|0;y=x+a.dL|0;z=a.ck!=t?0:1;m=!z?q:g.pt;ba=!z?g.rt:g.hp;bb=!z?g.mW:g.hp;bc=!z?g.n0:g.hp;bd=(j+w|0)-a.bC.a|0;Ew(b,u,bd,l.gj,l.qt,a.ei,ba,m,a.bz.b7);Ew(b,x,bd,l.gY,l.hn,a.ei,bb,m,a.bz.b7);Ew(b,y,bd,l.gl,l.ik,a.ei,bc,m,a.bz.b7);d=l.gj.b;be=u+d|0;Bn(s,Ba(0,a.dc-d|0),l.gj.a);BC(b,be,bd,s,m);d=u+a.dc|0;f=l.gY.b;bf=d+f|0;Bn(s,Ba(0,a.dL-f|0),l.gY.a);BC(b,bf,bd,s,m);d=l.gl.b;bg=y+d|0;Bn(s,Ba(0,(((a.df.bo.b-d|0)-a.dL|0)-a.dc|0)-p|0),l.gl.a);BC(b,bg,bd,s,m);bh=(i+a.o.b|0)
-p|0;Bn(s,p,DC(a)+a.cR|0);BC(b,bh,bd,s,q);t=v;}Ku(b);}
function Wp(a,b){var c,d,e,f,g,h;c=0;d=a.eJ;while(d<=a.ew){e=NN(a,d);if(!(e!==null&&e.e_===a.bQ.data[d])){f=a.dE.data;g=a.bQ;e=a.dF;h=a.gk;c=d%f.length|0;if(f[c]!==null)TQ(e,f[c],h);f[c]=Ii(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cp(a.fS,L4(a.dF));OI(a,a.bz.c6);}}
function OI(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fS;c=EY(b,c.b+150|0,c.a,a.bz.b7);CG(c,a.dw);d=a.dw;e=d.d0;f=e-(e+d.dC)/16.0;g=a.dE.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.e_.hM;k=d.hn;Ei(c,j,k.bk+a.eb,f+k.bD);j=d.e_.hY;d=d.ik;Ei(c,j,d.bk+a.eb,f+d.bD);}i=i+1|0;}a:{d=a.gk;if(d.cq>0){h=d.co;i=0;b:while(true){g=d.bR.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.ch;l=j.cw;k=k;l=l.it;Ei(c,k,l.bk+a.eb,f+l.bD);j=j.cm;if(h!=d.co)break b;}i=i+1|0;}b=new Gb;W(b);K(b);}}if(a.ei===null)a.ei=Gt(b);Ek(a.ei,
c);K1(c);}
function NN(a,b){var c;c=a.dE.data;return c[b%c.length|0];}
function AJ2(a,b){Cp(a.df.bo,b);}
function ALm(a,b){Cp(a.df.cI,b);}
function Oc(a){var b,c;IR(a);b=DC(a);c=a.bQ.data.length;b=V(b,c)+V(a.cR,c+1|0)|0;Bn(a.cG,a.o.b,b);}
function AAz(a,b,c){var d,e;d=(a.dc+a.dL|0)+a.fd|0;e=Cj(a.bz,5.0);return Cd(Ff(e,b.b,a.bz.cB.b-d|0),Ff(c,b.a,a.bz.cB.a-a.cG.a|0));}
function ABc(a,b){var c,d,e,f;Op(a);Oc(a);c=(a.dc+a.dL|0)+a.fd|0;d=a.bz;e=(d.cB.b-b.b|0)-Cj(d,5.0)|0;d=a.bz;f=(d.cB.a-b.a|0)-Cj(d,5.0)|0;return Cd(Be(c,e),Be(a.cG.a,f));}
function Op(a){var b,c,d,e,f,g,h,i,j;b=KV(a.bz);if(Vo(a))return;IR(a);CG(b,a.dw);c=WD(b,a.eb);d=a.bQ.data;e=d.length;f=0;while(f<e){g=d[f];h=G8(c,g.fm);i=G8(c,g.hM);j=G8(c,g.hY);a.dc=Ba(a.dc,h);a.dL=Ba(a.dL,i);a.fd=Ba(a.fd,j);f=f+1|0;}}
function TP(a,b){Iv(a.hE);b.rb.t();}
function Ra(a,b){var c,d,e;if(!a.dE.data.length)return (-1);c=DC(a);d=(b.a-a.H.a|0)+a.bC.a|0;e=a.cR;e=(d+e|0)/(c+e|0)|0;if(e<a.bQ.data.length)return e;return (-1);}
function DC(a){return Fi(a.dw);}
function IR(a){var b;if(a.dw===null){b=HU(a.bz,a.sA);a.dw=b;a.dF=AC5(Fi(b));a.eb=Dy(a.dw.le);}}
function ALC(a,b){var c,d,e;a:{switch(b.bT){case 13:TP(a,a.bQ.data[a.ck]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.ck=a.eJ;b=a.fT;c=a.bC;HX(b,c.b,c.a-(a.o.a/2|0)|0);return 0;case 34:a.ck=a.ew;b=a.fT;c=a.bC;HX(b,c.b,c.a+(a.o.a/2|0)|0);return 0;case 35:case 39:a.ck=a.bQ.data.length-1|0;break a;case 36:case 37:a.ck=0;break a;case 38:d=a.ck;e=a.bQ.data.length;a.ck=((d+e
|0)-1|0)%e|0;break a;case 40:a.ck=(a.ck+1|0)%a.bQ.data.length|0;break a;default:break a;}Iv(a.hE);return 0;}e=a.ck;if(e<=a.eJ)HX(a.fT,a.bC.b,V(e,DC(a))+V(a.ck,a.cR)|0);else if(e>=a.ew)HX(a.fT,a.bC.b,(V(e+1|0,DC(a))+V(a.ck+2|0,a.cR)|0)-a.o.a|0);return 0;}
function O$(){var a=this;B.call(a);a.lY=null;a.lZ=null;}
function Iv(a){var b,c;b=a.lY;c=a.lZ;HM(b.dP,c);RO(b);}
function OG(){var a=this;Ex.call(a);a.lD=null;a.nX=null;a.sp=null;a.bl=null;a.cH=null;a.cM=null;a.ti=0.0;a.t3=null;a.t0=null;}
function ALj(a){var b;b=a.bl;b.fT=null;a.bl=CY(b,null);}
function AF5(a,b,c,d){Qh(a,b,c,d);Qh(a.bl,b,c,d);if(d!==0.0){Oc(a.bl);b=a.bl;c=b.bC;c.b=Ik(b,c.b);c=b.bC;c.a=KC(b,c.a);if(T5(a))Hz(a);else a.cM=null;if(Nm(a))GB(a);else a.cH=null;}}
function HX(a,b,c){var d;d=a.bl;d.bC.b=Ik(d,b);d.bC.a=KC(d,c);if(T5(a))Hz(a);if(Nm(a))GB(a);}
function Nm(a){var b;b=a.o.a;return b>0&&a.bl.cG.a>b?1:0;}
function T5(a){var b;b=a.o.b;return b>0&&a.bl.cG.b>b?1:0;}
function Hz(a){var b,c,d,e,f,g;b=a.cM;if(b===null)b=Tv();a.cM=b;PI(a,b);c=a.cM;b=a.bl;d=b.bC.b;e=a.H;f=e.b;g=a.o;PB(c,d,f,g.b,b.cG.b,e.a+g.a|0,KY(a));}
function GB(a){var b,c,d,e,f,g;b=a.cH;if(b===null)b=Tv();a.cH=b;PI(a,b);c=a.cH;b=a.bl;d=b.bC.a;e=a.H;f=e.a;g=a.o;Vy(c,d,f,g.a,b.cG.a,e.b+g.b|0,KY(a));}
function KY(a){return Cn(a.ti,a.eF);}
function PI(a,b){var c,d;c=a.t3;d=a.t0;if(!(c!==null&&d!==null?(Ji(b.hg,c)&&Ji(b.hh,d)?1:0):0))F6(b,c,d);}
function AKH(a,b){var c;WJ(a.bl,b);if(!(a.cH===null&&a.cM===null)){DP(b,1);c=a.cH;if(c!==null)G$(c,b);c=a.cM;if(c!==null)G$(c,b);c=a.cH;if(c!==null)He(c,b);c=a.cM;if(c!==null)He(c,b);DP(b,0);}}
function SI(a,b){var c,d;a:{b:{c=a.cH;if(!(c!==null&&GZ(c,b))){c=a.cM;if(c===null)break b;if(!GZ(c,b))break b;}d=1;break a;}d=0;}return d;}
function ALO(a,b,c,d){var e;if(!SI(a,b.u)){e=a.bl;if(d==1){c=Ra(e,b.u);if(c>=0)TP(e,e.bQ.data[c]);}}return 1;}
function ALl(a,b,c){var d;d=a.cH;if(d!==null){d=Hk(d,b.u,a.nX,1);if(d!==null)return d;}d=a.cM;if(d!==null){d=Hk(d,b.u,a.sp,0);if(d!==null)return d;}d=a.bl;if(!G9(d.df,b.u)&&!I_(d.df)){b=d.uk;if(b!==null)Iv(b);}return null;}
function AI3(a,b,c){return SI(a,b.u)?1:0;}
function AIK(a,b){var c,d,e;c=a.cH;d=c!==null&&HA(c,b.u,a.lD)?1:0;c=a.cM;e=c!==null&&HA(c,b.u,a.lD)?1:0;a:{if(!d&&!e){c=a.bl;d=Ra(c,b.u);if(d>=0)c.ck=d;if(!(G9(c.df,c.H)&&Fj(c.bz.c4)?1:0)){d=0;break a;}}d=1;}return d;}
function AFm(a,b,c,d){var e,f;if(!Dc(a,b.u))return 0;e=Cn(d*0.25,a.eF);f=Cn(c*0.25,a.eF);if(b.bv){f=f+e|0;e=0;}if(a.cH!==null&&e){b=a.bl;We(b,b.bC.a+e|0);GB(a);}if(a.cM!==null&&f){b=a.bl;Tp(b,b.bC.b+f|0);Hz(a);}return 1;}
function AM1(a){var b,c;b=KY(a);c=ZK(a.bl);c.b=Ba(c.b,b);c.a=Ba(c.a,b);return c;}
function F1(){var a=this;B.call(a);a.dt=0;a.dD=0;a.kc=null;a.lj=0;a.e8=null;}
function ALD(a,b,c,d,e,f){var g=new F1();AHF(g,a,b,c,d,e,f);return g;}
function AHF(a,b,c,d,e,f,g){a.dt=b;a.dD=c;a.kc=Cd(f,g);a.lj=d;a.e8=e;}
var NX=F(0);
var Ec=F(El);
function Oa(){Ec.call(this);this.f5=null;}
function Rd(a){var b;b=new RC;JH(b,a.f5);return b;}
function Li(){B.call(this);this.t6=null;}
function AFg(a,b){b=b;L7(a.t6,b);}
function Ti(){B.call(this);this.r3=null;}
function AHL(a,b){b=b;F7(a.r3,b);}
function H8(){var a=this;B.call(a);a.dB=null;a.iu=null;a.gi=0;}
function AO7(a,b,c){var d=new H8();Z_(d,a,b,c);return d;}
function Z_(a,b,c,d){a.dB=b;a.iu=c;a.gi=d;}
function Zv(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return BB(a.dB,c.dB)&&BB(a.iu,c.iu)&&BB(Ct(a.gi),Ct(c.gi))?1:0;}return 0;}
function KR(){var a=this;H8.call(a);a.iF=null;a.lT=0;}
function ADs(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){if(!Zv(a,b))return 0;c=b;return BB(a.iF,c.iF);}return 0;}
function D9(){var a=this;B.call(a);a.eq=null;a.eV=null;a.ra=0;}
function AN5(a,b,c){var d=new D9();J0(d,a,b,c);return d;}
function J0(a,b,c,d){a.eq=b;a.eV=c;a.ra=d;}
function W$(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return BB(a.eq,c.eq)&&BB(a.eV,c.eV)?1:0;}return 0;}
function FA(){D9.call(this);this.fN=null;}
function HH(){var a=this;D9.call(a);a.fW=null;a.md=0;}
function AMt(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){if(!W$(a,b))return 0;c=b;return BB(a.fW,c.fW);}return 0;}
function H1(){var a=this;D9.call(a);a.gM=null;a.fY=null;}
function ACG(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return BB(a.gM,c.gM)&&BB(a.fY,c.fY)?1:0;}return 0;}
function Yh(){var a=this;Gd.call(a);a.EL=null;a.GV=0;a.Fl=0;a.CQ=0;}
function QJ(){var a=this;B.call(a);a.mw=null;a.mx=null;}
function AGD(a){var b,c;b=a.mw;c=a.mx;Rs();Iu(b,c,ASi);}
function QK(){var a=this;B.call(a);a.pO=null;a.pP=null;}
function AD6(a){var b,c;b=a.pO;c=a.pP;Rs();Iu(b,c,ASj);}
function QH(){var a=this;B.call(a);a.ta=null;a.s_=null;}
function ACV(a){Iu(a.ta,a.s_,null);}
function QI(){var a=this;B.call(a);a.l6=null;a.l7=null;}
function AGz(a){var b,c,d,e,f,g,h;b=a.l6;c=a.l7;d=DI(b.bb.d);e=Fv(b.bb.d);d=Sx(b.bb.eo,d,e);Dq(b.ey.bO);b=b.bb;e=Ef(b,c);if(d!==null){f=b.d;g=e.X;h=e.be;e=new T3;e.wr=b;e.ws=c;d.Fv(f,g,h,1,e,b.g6);}}
function PQ(){B.call(this);this.oj=null;}
function AKm(a){var b;b=a.oj;Dq(b.ey.bO);Km(b.bb,Wb(b),0);}
function PP(){B.call(this);this.tA=null;}
function AJa(a){var b;b=a.tA;Dq(b.ey.bO);Km(b.bb,Wb(b),1);}
function PO(){B.call(this);this.rk=null;}
function ANs(a){var b,c,d,e;b=a.rk;Dq(b.ey.bO);FO(b);b=b.bb;BU(b);c=new Wd;c.oV=b;b=XJ(C(251));if(!Kp()){c=new Bq;Br(c,C(252));KH(b,c);}else{d=$rt_globals.navigator.clipboard.readText();e=new PN;e.mE=c;b=ABM(b);d.then(Bi(e,"f"),Bi(b,"f"));}}
function N0(){var a=this;B.call(a);a.mt=null;a.mu=null;}
function AI8(a){var b,c;b=a.mt;c=a.mu;b=b.bb.d;b.kS=c;HV(b);}
var O8=F(0);
var ARv=null;function Z3(){ARv=new SL;}
function X$(){B.call(this);this.uo=null;}
function AN6(a){var b=new X$();AC_(b,a);return b;}
function AC_(a,b){a.uo=b;}
function ADT(a){var b,c,d;b=a.uo;Dq(b.ey.bO);c=FO(b);b=b.bb;BU(b);d=new Qk;d.rA=b;Up(c,d);}
function Hw(){var a=this;B.call(a);a.qt=null;a.hn=null;a.ik=null;a.gj=null;a.gY=null;a.gl=null;a.e_=null;}
function Ii(b,c,d,e){var f,g,h;f=new Hw;f.gj=new Bp;f.gY=new Bp;f.gl=new Bp;f.e_=b;g=B7(e,b.fm);if(g!==null)g.gG=g.gG+1|0;else{g=new TZ;h=K6(c,b.fm,d);g.gG=1;g.it=h;Dn(e,b.fm,g);}e=g.it;f.qt=e;Bn(f.gj,e.Y|0,e.bV|0);e=K6(c,b.hM,d);f.hn=e;Bn(f.gY,e.Y|0,e.bV|0);b=K6(c,b.hY,d);f.ik=b;Bn(f.gl,b.Y|0,b.bV|0);return f;}
function TQ(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.e_.fm;f=B7(d,e);g=f.gG-1|0;f.gG=g;if(!g){a:{h=0;i=null;if(e===null){j=d.bR.data[0];while(j!==null){if(j.ch===null)break a;e=j.cm;i=j;j=e;}}else{k=JZ(e);l=d.bR.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.h_==k&&WY(e,j.ch))){m=j.cm;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cm=j.cm;else d.bR.data[h]=j.cm;d.co=d.co+1|0;d.cq=d.cq-1|0;}JR(b,f.it);}JR(b,c.hn);JR(b,c.ik);}
var Qi=F(0);
function WD(b,c){var d;d=new T0;d.nS=b;d.nR=c;return d;}
function WM(){var a=this;B.call(a);a.fb=null;a.fR=0;a.h1=0;a.fu=0;}
function AC5(a){var b=new WM();AFn(b,a);return b;}
function AFn(a,b){a.fb=Bz();a.fu=0;a.h1=2048;a.fR=b;}
function K6(a,b,c){var d,e,f,g,h,i,j;d=G8(c,b);e=a.h1;if(d>e){c=new Bq;f=new R;T(f);B0(Bj(J(Bj(J(f,C(253)),d),C(254)),e),41);Br(c,S(f));K(c);}if(!a.fR){b=new BI;Br(b,C(255));K(b);}a:{b=new B4;if(d){b:{c=a.fb;if(c.j>0){c=BL(c);g=d;while(true){if(!BM(c))break b;f=BP(c);if(f.Y>=g)break;}Cb(b,f.bk,f.bD,g,a.fR);f.bk=f.bk+g;h=f.Y-g;f.Y=h;if(h===0.0)TV(a.fb,f);break a;}}g=a.fu;i=d;Cb(b,0.0,g,i,a.fR);c=a.fb;f=new B4;h=a.fu;g=a.h1-d|0;j=a.fR;f.bk=i;f.bD=h;f.Y=g;f.bV=j;Bu(c,f);a.fu=a.fu+a.fR|0;}}return b;}
function JR(a,b){var c,d,e,f,g,h,i;a:{c=new B4;c.bk=b.bk;c.bD=b.bD;c.Y=b.Y;c.bV=b.bV;b=a.fb;if(b.j>0){d=BL(b);while(true){if(!BM(d))break a;e=BP(d);if(e.bD===c.bD){f=e.bk;g=e.Y;h=f+g;i=c.bk;if(h===i){c.bk=f;c.Y=c.Y+g;PZ(d);}else{h=c.Y;if(i+h===f){c.Y=h+g;PZ(d);}}}}}}Bu(a.fb,c);}
function L4(a){return Cd(a.h1,a.fu);}
function TJ(){var a=this;Ex.call(a);a.eL=null;a.f6=null;a.hm=null;a.em=null;a.ij=0.0;a.f_=0;a.hq=0;a.c5=null;a.i_=null;}
function Jj(a){var b;b=a.o;return b.b&&b.a?0:1;}
function Uq(a){var b,c;a:{if(a.hm!==null){b=a.f6;if(b!==null&&!DT(b)){c=0;break a;}}c=1;}return c;}
function Og(a,b){a.o.a=b;}
function Ot(a,b,c,d,e){var f,g;f=a.eL.dQ;Bn(f,d,a.o.a);g=a.H;BC(b,g.b+c|0,g.a,f,e);}
function To(a){if(a.em===null)a.em=HU(a.eL,a.hm);}
function Sp(){B.call(this);this.q6=null;}
function AMF(a,b,c){var d,e;c=a.q6;d=c.d.f;e=b.ba;b=c.ej;Q5(d.v.data[e],0,b);}
var UH=F(BT);
function Dh(){var a=this;B.call(a);a.jo=null;a.hx=null;a.d5=null;a.dq=null;a.hT=null;a.kv=null;a.g_=0;a.kq=null;}
function Mu(a,b){var c=new Dh();Wy(c,a,b);return c;}
function AOK(a,b,c,d){var e=new Dh();YL(e,a,b,c,d);return e;}
function Wy(a,b,c){YL(a,b,c,null,null);}
function YL(a,b,c,d,e){a.hx=new B4;a.d5=new Bp;a.dq=new Bp;a.kq=c;a.kv=e;a.jo=b;a.hT=d;}
function Ta(a){return a.hT===null?0:1;}
function L$(){B.call(this);this.nW=null;}
function AG7(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.nW;c=new Hd;d=new HC;e=new HQ;AAU();IM(e,AR8);K8(d,e,BA(AR$),BA(AR9),BA(ASa),BA(AR$),BA(AR_),BA(ASc),BA(ASb),BA(ASe),BA(ASd),BA(ASf));X5();f=(ASk.fU()).data;g=f.length;h=O(HY,g);i=h.data;j=0;while(j<g){i[j]=f[j].k5;j=j+1|0;}k=ZT(N(C(256)),N(C(257)),N(C(258)),N(C(231)));l=new Hi;m=new Hu;AIt();e=ASl;Lb(m,e,ASm,ASn,ASo,ASp,e);Ki(l,m,ABi(),ABr(N(C(259)),N(C(90)),N(C(91))),ABi(),Wm(1,0.125),ASq,ASr);H3(c,d,h,k,l,WG(N(C(92)),N(C(93)),N(C(94)),N(C(260))));IX(b,c);}
function L_(){B.call(this);this.o2=null;}
function ALW(a){Pf(a.o2);}
function L9(){B.call(this);this.um=null;}
function ABV(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.um;c=new Hd;d=new HC;e=new HQ;AAF();IM(e,ASs);K8(d,e,BA(ASt),BA(ASu),BA(ASv),BA(ASt),BA(ASw),BA(ASx),BA(ASy),BA(ASz),BA(ASA),BA(ASB));ZP();f=(ASC.fU()).data;g=f.length;h=O(HY,g);i=h.data;j=0;while(j<g){i[j]=f[j].kb;j=j+1|0;}k=ZT(N(C(261)),N(C(262)),N(C(263)),N(C(264)));l=new Hi;m=new Hu;ACI();e=ASD;Lb(m,e,ASE,ASF,ASG,ASH,e);Ki(l,m,AA_(),ABr(N(C(265)),N(C(266)),G_(0)),AA_(),Wm(1,0.07500000298023224),ASI,ASJ);H3(c,d,h,k,l,WG(N(C(267)),N(C(268)),N(C(269)),N(C(270))));IX(b,
c);}
function UO(){B.call(this);this.pB=null;}
function AHR(a){var b;b=a.pB;H6(b,b.gw.lq,b.fc+1|0);}
function UN(){B.call(this);this.sK=null;}
function AKG(a){var b,c;b=a.sK;c=b.fc;if(c>7)H6(b,b.gw.lq,c-1|0);}
function NV(){B.call(this);this.m_=null;}
function AEI(a){var b,c,d,e,f,g,h,i;b=a.m_;c=G(Bw,[C(104),C(192),C(271)]).data;d=O(Dh,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new L6;i.oA=b;i.oz=h;e[f]=Mu(i,h);f=f+1|0;}return d;}
function Re(){B.call(this);this.nw=null;}
function AGL(a){P_(a.nw.lC,0);}
function Rf(){B.call(this);this.oK=null;}
function ALE(a){P_(a.oK.lC,1);}
function VW(){B.call(this);this.rc=null;}
function AB9(a){var b,c,d,e,f;b=a.rc.d.f;c=b.b3;d=new R;T(d);Bj(J(d,C(272)),c);$rt_globals.console.info($rt_ustr(S(d)));c=b.kh;d=new R;T(d);Bj(J(d,C(273)),c);$rt_globals.console.info($rt_ustr(S(d)));d=b.cC;e=Gy(EN(b));UX(d,0,d.cA,e);b=GL();f=b.jr;f.data[0]=10;M$(b,f,0,1);}
function VR(){B.call(this);this.nf=null;}
function AGO(a){Ql(a.nf);}
function VS(){B.call(this);this.oh=null;}
function AMT(a){RJ(a.oh);}
function VT(){B.call(this);this.tK=null;}
function AH5(a){KK(a.tK.d);}
function VU(){B.call(this);this.l8=null;}
function AGf(a){HV(a.l8.d);}
function Lw(){B.call(this);this.nO=null;}
function ALR(a){var b,c,d,e,f,g;b=a.nO;c=O(Dh,16);d=c.data;e=0;while(e<4){f=(5+e|0)/8.0;d[e]=Mu(N7(b,f),ME(f));e=e+1|0;}g=0;while(g<12){e=1+g|0;f=1.0+e/4.0;d[4+g|0]=Mu(N7(b,f),ME(f));g=e;}return c;}
var J1=F(0);
function Vm(){var a=this;B.call(a);a.n$=null;a.n_=null;a.oa=null;}
function Nh(){B.call(this);this.pG=null;}
function ACE(a,b){var c,d;c=a.pG;d=GO(b,c.bl.cG.a-c.o.a|0);We(c.bl,d);GB(c);}
function Ng(){B.call(this);this.qK=null;}
function ACZ(a,b){var c,d;c=a.qK;d=GO(b,c.bl.cG.b-c.o.b|0);Tp(c.bl,d);Hz(c);}
function RV(){B.call(this);this.pC=null;}
function ADw(a,b,c){FD(BS(a.pC.d.f,b.ba),0,H(c));}
function O5(){var a=this;B.call(a);a.nC=null;a.nB=null;}
function AER(a,b){a.nC.m(ZE(a.nB,b));}
function ABm(){var a=this;B.call(a);a.gr=null;a.cS=0;}
function AFX(a,b){var c=new ABm();AB4(c,a,b);return c;}
function AB4(a,b,c){a.gr=b;a.cS=c;}
function AJb(a,b){var c;if(a===b)return 1;if(b!==null&&Bt(a)===Bt(b)){c=b;return a.cS==c.cS&&BB(a.gr,c.gr)?1:0;}return 0;}
function LW(){B.call(this);this.m8=null;}
function AHJ(a,b){b=b;Lr(a.m8,b);}
function V8(){B.call(this);this.nb=null;}
function ANz(a,b){b=b;F7(a.nb,b);}
var HS=F(0);
function LF(){var a=this;B.call(a);a.ma=null;a.l_=null;}
function AGR(a){W8(a.ma,a.l_);}
function Ln(){var a=this;B.call(a);a.rg=null;a.rh=null;}
function ABZ(a){a.rg.m(a.rh);}
function TY(){B.call(this);this.qy=null;}
function ANb(a){return a.qy;}
var SL=F();
function Vt(){var a=this;B.call(a);a.mk=null;a.mj=null;a.mn=null;a.ml=null;}
function AGl(a,b){var c,d,e,f,g,h,i;c=a.mk;d=a.mj;e=a.mn;f=a.ml;if(!(b.done?1:0)){SK(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Sv;c.oW=d;c.oY=g;c.oZ=f;b.then(Bi(c,"f"),Bi(e,"f"));}else{h=f.data;c=g.values();b=Et(g.name);i=h.length;f=CW(f,i+1|0);f.data[i]=b;SK(c,d,e,f);}}}
function Ev(){var a=this;B.call(a);a.hI=0;a.rj=0;a.gP=null;a.fp=null;a.o8=null;a.ig=null;}
function ASK(a){var b=new Ev();JH(b,a);return b;}
function JH(a,b){a.ig=b;a.rj=b.co;a.gP=null;}
function EG(a){var b,c;if(a.gP!==null)return 1;while(true){b=a.hI;c=a.ig.bR.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.hI=b+1|0;}return 0;}
function XW(a){var b;if(a.rj==a.ig.co)return;b=new Gb;W(b);K(b);}
function J$(a){var b,c,d,e;XW(a);if(!EG(a)){b=new K$;W(b);K(b);}b=a.gP;if(b!==null){c=a.fp;if(c!==null)a.o8=c;a.fp=b;a.gP=b.cm;}else{d=a.ig.bR.data;e=a.hI;a.hI=e+1|0;b=d[e];a.fp=b;a.gP=b.cm;a.o8=null;}}
var RC=F(Ev);
function NW(a){J$(a);return a.fp.ch;}
var Yo=F();
function Kp(){return "clipboard" in $rt_globals.navigator?1:0;}
function Xh(){var a=this;B.call(a);a.CM=null;a.HJ=0;}
function P4(){var a=this;B.call(a);a.g=null;a.c$=0;a.ji=null;a.m1=0;a.fC=0;a.ef=0;a.bg=0;a.kn=null;}
function IT(a){return a.g.bu;}
function VQ(a,b,c,d){var e,f,g,h,i,j;e=Bz();f=a.c$;g=0;if(c!=f)a.c$=c;a:{switch(b){case -1073741784:h=new QB;c=a.bg+1|0;a.bg=c;EQ(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new OJ;c=a.bg+1|0;a.bg=c;EQ(h,c);break a;case -33554392:h=new RD;c=a.bg+1|0;a.bg=c;EQ(h,c);break a;default:c=a.fC+1|0;a.fC=c;if(d!==null)h=APc(c);else{h=new E1;EQ(h,0);g=1;}c=a.fC;if(c<=(-1))break a;if(c>=10)break a;a.ji.data[c]=h;break a;}h=new VJ;EQ(h,(-1));}while(true){if(EC(a.g)&&a.g.h==(-536870788))
{d=AL9(B5(a,2),B5(a,64));while(!CV(a.g)&&EC(a.g)){i=a.g;j=i.h;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cg(d,Bd(i));i=a.g;if(i.U!=(-536870788))continue;Bd(i);}i=Jz(a,d);i.I(h);}else if(a.g.U==(-536870788)){i=FZ(h);Bd(a.g);}else{i=N3(a,h);d=a.g;if(d.U==(-536870788))Bd(d);}if(i!==null)Bu(e,i);if(CV(a.g))break;if(a.g.U==(-536870871))break;}if(a.g.jK==(-536870788))Bu(e,FZ(h));if(a.c$!=f&&!g){a.c$=f;d=a.g;d.fn=f;d.h=d.U;d.d9=d.ep;j=d.cN;d.q=j+1|0;d.go=j;EF(d);}switch(b){case -1073741784:break;case -536870872:d
=new LD;E2(d,e,h);return d;case -268435416:d=new Ub;E2(d,e,h);return d;case -134217688:d=new P9;E2(d,e,h);return d;case -67108824:d=new RZ;E2(d,e,h);return d;case -33554392:d=new Dp;E2(d,e,h);return d;default:switch(e.j){case 0:break;case 1:return AO0(Bo(e,0),h);default:return AOG(e,h);}return FZ(h);}d=new H0;E2(d,e,h);return d;}
function AAx(a){var b,c,d,e,f,g,h;b=Bv(4);c=(-1);d=(-1);if(!CV(a.g)&&EC(a.g)){e=b.data;c=Bd(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B2(3);b=e.data;b[0]=c&65535;f=a.g;g=f.U;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bd(f);f=a.g;g=f.U;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bd(f);return ALU(e,3);}return ALU(e,2);}if(!B5(a,2))return XU(b[0]);if(B5(a,64))return AKd(b[0]);return ADX(b[0]);}e=b.data;c=1;while(c<4&&!CV(a.g)&&EC(a.g)){h=c+1|0;e[c]=Bd(a.g);c=h;}if(c==1){h=e[0];if(!(ASL.w9(h)==ASM?0:1))return VF(a,e[0]);}if
(!B5(a,2))return APM(b,c);if(B5(a,64)){f=new Vs;M4(f,b,c);return f;}f=new Sc;M4(f,b,c);return f;}
function N3(a,b){var c,d,e,f,g,h,i;if(EC(a.g)&&!II(a.g)&&Ja(a.g.h)){if(B5(a,128)){c=AAx(a);if(!CV(a.g)){d=a.g;e=d.U;if(!(e==(-536870871)&&!(b instanceof E1))&&e!=(-536870788)&&!EC(d))c=KZ(a,b,c);}}else if(!Nb(a.g)&&!Tk(a.g)){f=new Ne;T(f);while(!CV(a.g)&&EC(a.g)&&!Nb(a.g)&&!Tk(a.g)){if(!(!II(a.g)&&!a.g.h)&&!(!II(a.g)&&Ja(a.g.h))){g=a.g.h;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bd(a.g);if(!KS(e))B0(f,e&65535);else Hs(f,FJ(e));}if(!B5(a,2)){c=new Qx;C9(c);c.cd
=S(f);e=f.D;c.bt=e;c.jy=AIY(e);c.kp=AIY(c.bt);h=0;while(h<(c.bt-1|0)){Qd(c.jy,I(c.cd,h),(c.bt-h|0)-1|0);Qd(c.kp,I(c.cd,(c.bt-h|0)-1|0),(c.bt-h|0)-1|0);h=h+1|0;}}else if(B5(a,64))c=APL(f);else{c=new L5;C9(c);c.gq=S(f);c.bt=f.D;}}else c=KZ(a,b,Vr(a,b));}else{d=a.g;if(d.U!=(-536870871))c=KZ(a,b,Vr(a,b));else{if(b instanceof E1)K(B3(C(5),d.bu,Na(d)));c=FZ(b);}}a:{if(!CV(a.g)){e=a.g.U;if(!(e==(-536870871)&&!(b instanceof E1))&&e!=(-536870788)){f=N3(a,b);if(c instanceof CH&&!(c instanceof EH)&&!(c instanceof Cx)&&
!(c instanceof D7)){i=c;if(!f.bH(i.B)){c=new Uo;Er(c,i.B,i.e,i.gJ);c.B.I(c);}}if((f.gQ()&65535)!=43)c.I(f);else c.I(f.B);break a;}}if(c===null)return null;c.I(b);}if((c.gQ()&65535)!=43)return c;return c.B;}
function KZ(a,b,c){var d,e,f,g,h;d=a.g;e=d.U;if(c!==null&&!(c instanceof BV)){switch(e){case -2147483606:Bd(d);d=new Wh;CS(d,c,b,e);K4();c.I(ASN);return d;case -2147483605:Bd(d);d=new OA;CS(d,c,b,(-2147483606));K4();c.I(ASN);return d;case -2147483585:Bd(d);d=new Of;CS(d,c,b,(-536870849));K4();c.I(ASN);return d;case -2147483525:f=new L0;d=EJ(d);g=a.ef+1|0;a.ef=g;H$(f,d,c,b,(-536870849),g);K4();c.I(ASN);return f;case -1073741782:case -1073741781:Bd(d);d=new Qu;CS(d,c,b,e);c.I(d);return d;case -1073741761:Bd(d);d
=new Pu;CS(d,c,b,(-536870849));c.I(b);return d;case -1073741701:h=new S5;d=EJ(d);e=a.ef+1|0;a.ef=e;H$(h,d,c,b,(-536870849),e);c.I(h);return h;case -536870870:case -536870869:Bd(d);if(c.gQ()!=(-2147483602)){d=new Cx;CS(d,c,b,e);}else if(B5(a,32)){d=new Qv;CS(d,c,b,e);}else{d=new Nn;f=Oh(a.c$);CS(d,c,b,e);d.jJ=f;}c.I(d);return d;case -536870849:Bd(d);d=new Fd;CS(d,c,b,(-536870849));c.I(b);return d;case -536870789:h=new EL;d=EJ(d);e=a.ef+1|0;a.ef=e;H$(h,d,c,b,(-536870849),e);c.I(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bd(d);d=new Wi;Er(d,f,b,e);f.e=d;return d;case -2147483585:Bd(d);c=new Uh;Er(c,f,b,(-2147483585));return c;case -2147483525:c=new N2;QZ(c,EJ(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bd(d);d=new Po;Er(d,f,b,e);f.e=d;return d;case -1073741761:Bd(d);c=new So;Er(c,f,b,(-1073741761));return c;case -1073741701:c=new P$;QZ(c,EJ(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bd(d);d=AO4(f,b,e);f.e=d;return d;case -536870849:Bd(d);c
=new D7;Er(c,f,b,(-536870849));return c;case -536870789:return AOc(EJ(d),f,b,(-536870789));default:}return c;}
function Vr(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof E1;while(true){a:{e=a.g;f=e.U;if((f&(-2147418113))==(-2147483608)){Bd(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.c$=g;else{if(f!=(-1073741784))g=a.c$;c=VQ(a,f,g,b);e=a.g;if(e.U!=(-536870871))K(B3(C(5),e.bu,e.cN));Bd(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bd(e);c
=ALG(0);break a;case -2147483577:Bd(e);c=new Ni;BJ(c);break a;case -2147483558:Bd(e);c=new Va;h=a.bg+1|0;a.bg=h;AAS(c,h);break a;case -2147483550:Bd(e);c=ALG(1);break a;case -2147483526:Bd(e);c=new UL;BJ(c);break a;case -536870876:Bd(e);a.bg=a.bg+1|0;if(B5(a,8)){if(B5(a,1)){c=AOs(a.bg);break a;}c=ANS(a.bg);break a;}if(B5(a,1)){c=AOL(a.bg);break a;}c=APg(a.bg);break a;case -536870866:Bd(e);if(B5(a,32)){c=APy();break a;}c=AO$(Oh(a.c$));break a;case -536870821:Bd(e);i=0;c=a.g;if(c.U==(-536870818)){i=1;Bd(c);}c
=Jz(a,Fq(a,i));c.I(b);e=a.g;if(e.U!=(-536870819))K(B3(C(5),e.bu,e.cN));NL(e,1);Bd(a.g);break a;case -536870818:Bd(e);a.bg=a.bg+1|0;if(!B5(a,8)){c=new Jf;BJ(c);break a;}c=new Ma;e=Oh(a.c$);BJ(c);c.qm=e;break a;case 0:j=e.ep;if(j!==null)c=Jz(a,j);else{if(CV(e)){c=FZ(b);break a;}c=XU(f&65535);}Bd(a.g);break a;default:break b;}Bd(e);c=new Jf;BJ(c);break a;}h=(f&2147483647)-48|0;if(a.fC<h)K(B3(C(5),EO(e),Na(a.g)));Bd(e);a.bg=a.bg+1|0;c=!B5(a,2)?ANW(h,a.bg):B5(a,64)?AOt(h,a.bg):APH(h,a.bg);a.ji.data[h].jf=1;a.m1=
1;break a;}if(f>=0&&!F2(e)){c=VF(a,f);Bd(a.g);}else if(f==(-536870788))c=FZ(b);else{if(f!=(-536870871)){b=new HK;c=!F2(a.g)?U8(f&65535):a.g.ep.eg();e=a.g;Il(b,c,e.bu,e.cN);K(b);}if(d){b=new HK;e=a.g;Il(b,C(5),e.bu,e.cN);K(b);}c=FZ(b);}}}if(f!=(-16777176))break;}return c;}
function Fq(a,b){var c,d,e,f,g,h,i,j,$$je;c=AL9(B5(a,2),B5(a,64));D3(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(CV(a.g))break a;h=a.g;b=h.U;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cg(c,d);d=Bd(a.g);h=a.g;if(h.U!=(-536870874)){d=38;break d;}if(h.h==(-536870821)){Bd(h);e=1;d=(-1);break d;}Bd(h);if(g){c=Fq(a,0);break d;}if(a.g.U==(-536870819))break d;UU(c,Fq(a,0));break d;case -536870867:if(!g){b=h.h;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bd(h);h=a.g;i=h.U;if(F2(h))break c;if
(i<0){j=a.g.h;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Ja(i))break e;i=i&65535;break e;}catch($$e){$$je=ET($$e);if($$je instanceof DE){break b;}else{throw $$e;}}}try{BQ(c,d,i);}catch($$e){$$je=ET($$e);if($$je instanceof DE){break b;}else{throw $$e;}}Bd(a.g);d=(-1);break d;}}if(d>=0)Cg(c,d);d=45;Bd(a.g);break d;case -536870821:if(d>=0){Cg(c,d);d=(-1);}Bd(a.g);j=0;h=a.g;if(h.U==(-536870818)){Bd(h);j=1;}if(!e)Ws(c,Fq(a,j));else UU(c,Fq(a,j));e=0;Bd(a.g);break d;case -536870819:if(d>=0)Cg(c,
d);d=93;Bd(a.g);break d;case -536870818:if(d>=0)Cg(c,d);d=94;Bd(a.g);break d;case 0:if(d>=0)Cg(c,d);h=a.g.ep;if(h===null)d=0;else{ABK(c,h);d=(-1);}Bd(a.g);break d;default:}if(d>=0)Cg(c,d);d=Bd(a.g);}g=0;}K(B3(C(5),IT(a),a.g.cN));}K(B3(C(5),IT(a),a.g.cN));}if(!f){if(d>=0)Cg(c,d);return c;}K(B3(C(5),IT(a),a.g.cN-1|0));}
function VF(a,b){var c,d,e;c=KS(b);if(B5(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return ADX(b&65535);}if(B5(a,64)&&b>128){if(c){d=new Lt;C9(d);d.bt=2;d.pU=FR(FP(b));return d;}if(NS(b))return AI4(b&65535);if(!Rq(b))return AKd(b&65535);return AGG(b&65535);}}if(!c){if(NS(b))return AI4(b&65535);if(!Rq(b))return XU(b&65535);return AGG(b&65535);}d=new Dw;C9(d);d.bt=2;d.fa=b;e=(FJ(b)).data;d.iJ=e[0];d.hz=e[1];return d;}
function Jz(a,b){var c,d,e;if(!Zn(b)){if(!b.E){if(b.f$())return AGg(b);return ALH(b);}if(!b.f$())return AHg(b);c=new Ia;SA(c,b);return c;}c=WZ(b);d=new LJ;BJ(d);d.oJ=c;d.uX=c.T;if(!b.E){if(b.f$())return ZW(AGg(GI(b)),d);return ZW(ALH(GI(b)),d);}if(!b.f$())return ZW(AHg(GI(b)),d);c=new Pj;e=new Ia;SA(e,GI(b));ABy(c,e,d);return c;}
function GN(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B5(a,b){return (a.c$&b)!=b?0:1;}
var Rj=F(0);
var ARr=null;function ZS(){ARr=new Pt;}
var Z5=F();
function XY(b,c,d,e,f,g){g.b=c.b;g.a=f;BC(b,d.b,d.a,g,e);BC(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;BC(b,d.b,d.a+f|0,g,e);BC(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function ZI(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;BC(b,j,k,i,h);BC(b,j,k,i,h);BC(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;BC(b,l,j,i,h);BC(b,l,j,i,h);BC(b,l+g|0,j+g|0,i,h);}
var Vp=F(Ea);
var ASO=null;function ME(b){var c;c=new R;T(c);return S(I9(c,b));}
function ZU(){ASO=E($rt_floatcls());}
var E3=F();
var ASP=null;var ASQ=null;var ASR=null;var ASS=null;var AQv=null;function YW(){ASP=Fu([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);ASQ=ADW([BH(1),BH(10),BH(100),BH(1000),BH(10000),BH(100000),BH(1000000),BH(10000000),BH(100000000),BH(1000000000),Dg(1410065408, 2),Dg(1215752192, 23),Dg(3567587328, 232),Dg(1316134912, 2328),Dg(276447232, 23283),Dg(2764472320, 232830),Dg(1874919424, 2328306),Dg(1569325056, 23283064),Dg(2808348672, 232830643)]);ASR=ADW([BH(1),BH(10),BH(100),BH(10000),BH(100000000),
Dg(1874919424, 2328306)]);ASS=new Sr;AQv=new Tw;}
var GV=F();
var AST=0;var ASU=null;var ASV=null;function Zu(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.nc=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.jO=0;c.jq=0;return;}if(f)d=e|8388608;else{d=e<<1;while(AEV(Wj(BH(d),BH(8388608)),AAt)){d=d<<1;f=f+(-1)|0;}}g=ZC(ASV,f);if(g<0)g= -g|0;h=ASV.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=GP(d,ASU.data[e],i);if(j<AST){while($rt_ucmp(j,AST)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=ASV.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=GP(d,
ASU.data[e],i);}e=d<<1;d=e+1|0;h=ASU.data;f=g+1|0;k=h[f];l=i-1|0;m=GP(d,k,l);n=GP(e-1|0,ASU.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?V($rt_udiv(j,o),o):q<0?V($rt_udiv(j,k),k)+k|0:V($rt_udiv((j+(k/2|0)|0),k),k);if(Ho(BH(d),BH(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.jO=d;c.jq=g-50|0;}
function GP(b,c,d){return X6(APr(AIH(Wj(BH(b),Dg(4294967295, 0)),Wj(BH(c),Dg(4294967295, 0))),32-d|0));}
function Yd(){AST=$rt_udiv((-1),10);ASU=Fu([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);ASV=Fu([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Tw(){var a=this;B.call(a);a.jO=0;a.jq=0;a.nc=0;}
var FU=F(0);
function R5(){B.call(this);this.pR=null;}
function AIs(a,b,c,d){IB(a.pR,b,c.ba,d.ba);}
function R6(){B.call(this);this.mo=null;}
function AGm(a,b,c,d){IB(a.mo,b,c.ba,d.ba);}
function Ha(){B.call(this);this.lx=0;}
var ASW=null;var ASX=null;var ASY=null;function AJL(a){var b=new Ha();Z1(b,a);return b;}
function Z1(a,b){a.lx=b;}
function NQ(b){return !b?ASX:ASW;}
function Xa(){ASW=AJL(1);ASX=AJL(0);ASY=E($rt_booleancls());}
var IF=F(0);
var QF=F();
var NG=F(0);
var Y6=F();
function Q8(){B.call(this);this.sJ=null;}
function AI9(a,b,c,d){Hj(a.sJ,b,c.ba,d.ba);}
var Q7=F();
function AMD(a,b){return b.dB.cS>=0?0:1;}
var Q6=F();
function AKb(a,b){var c;a:{b:{b=b;if(b!==null){b=b.eq;if(b===null)break b;if(b.cS>=0)break b;}c=1;break a;}c=0;}return c;}
function Q9(){B.call(this);this.rW=null;}
function AIF(a,b,c,d){Hj(a.rW,b,c.ba,d.ba);}
function By(){var a=this;B.call(a);a.e=null;a.b1=0;a.ob=null;a.gJ=0;}
var AQr=0;function BJ(a){var b;b=AQr;AQr=b+1|0;a.ob=J9(b);}
function Jw(a,b){var c;c=AQr;AQr=c+1|0;a.ob=J9(c);a.e=b;}
function GQ(a,b,c,d){var e;e=d.r;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function G0(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AEh(a,b){a.gJ=b;}
function ADE(a){return a.gJ;}
function AK$(a){return a.e;}
function ALZ(a,b){a.e=b;}
function ALY(a,b){return 1;}
function AMM(a){return null;}
function H5(a){var b;a.b1=1;b=a.e;if(b!==null){if(!b.b1){b=b.eS();if(b!==null){a.e.b1=1;a.e=b;}a.e.dS();}else if(b instanceof FL&&b.dX.jf)a.e=b.e;}}
function ABB(){AQr=1;}
var Td=F(0);
function T0(){var a=this;B.call(a);a.nS=null;a.nR=0.0;}
function G8(a,b){return Jx(a.nS,b,a.nR*2.0+0.875);}
var QW=F(Ea);
var ASZ=null;function KB(b,c){return Long_udiv(b, c);}
function WU(b,c){return Long_urem(b, c);}
function Ho(b,c){return Long_ucompare(b, c);}
function Yw(){ASZ=E($rt_longcls());}
function V9(){var a=this;B.call(a);a.nj=null;a.nh=null;a.ng=0;a.ni=0;}
function AJc(a,b){b=b;DK(a.nj,a.nh,b,a.ng,a.ni);}
function V$(){var a=this;B.call(a);a.ux=null;a.uw=null;a.uv=0;a.uu=0;}
function AFx(a,b){b=b;DK(a.ux,a.uw,b,a.uv,a.uu);}
var Pt=F();
function AIX(a,b){}
function Cw(){var a=this;By.call(a);a.jf=0;a.dd=0;}
var ASN=null;function K4(){K4=Bg(Cw);AFi();}
function APc(a){var b=new Cw();EQ(b,a);return b;}
function EQ(a,b){K4();BJ(a);a.dd=b;}
function AC3(a,b,c,d){var e,f;e=Hy(d,a.dd);IE(d,a.dd,b);f=a.e.c(b,c,d);if(f<0)IE(d,a.dd,e);return f;}
function AH8(a){return a.dd;}
function ADo(a,b){return 0;}
function AFi(){var b;b=new Nf;BJ(b);ASN=b;}
function FV(){var a=this;B.call(a);a.S=null;a.fn=0;a.ea=0;a.tf=0;a.jK=0;a.U=0;a.h=0;a.qP=0;a.ep=null;a.d9=null;a.q=0;a.g1=0;a.cN=0;a.go=0;a.bu=null;}
var AS0=null;var ASL=null;var ASM=0;function NL(a,b){if(b>0&&b<3)a.ea=b;if(b==1){a.h=a.U;a.d9=a.ep;a.q=a.go;a.go=a.cN;EF(a);}}
function F2(a){return a.ep===null?0:1;}
function II(a){return a.d9===null?0:1;}
function Bd(a){EF(a);return a.jK;}
function EJ(a){var b;b=a.ep;EF(a);return b;}
function EF(a){var b,c,d,e,f,g,h,$$je;a.jK=a.U;a.U=a.h;a.ep=a.d9;a.cN=a.go;a.go=a.q;while(true){b=0;c=a.q>=a.S.data.length?0:Kn(a);a.h=c;a.d9=null;if(a.ea==4){if(c!=92)return;c=a.q;d=a.S.data;c=c>=d.length?0:d[BR(a)];a.h=c;switch(c){case 69:break;default:a.h=92;a.q=a.g1;return;}a.ea=a.tf;a.h=a.q>(a.S.data.length-2|0)?0:Kn(a);}a:{c=a.h;if(c!=92){e=a.ea;if(e==1)switch(c){case 36:a.h=(-536870876);break a;case 40:if(a.S.data[a.q]!=63){a.h=(-2147483608);break a;}BR(a);c=a.S.data[a.q];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.h=(-134217688);BR(a);break b;default:K(B3(C(5),EO(a),a.q));}a.h=(-67108824);BR(a);}else{switch(c){case 33:break;case 60:BR(a);c=a.S.data[a.q];e=1;break b;case 61:a.h=(-536870872);BR(a);break b;case 62:a.h=(-33554392);BR(a);break b;default:f=ABD(a);a.h=f;if(f<256){a.fn=f;f=f<<16;a.h=f;a.h=(-1073741784)|f;break b;}f=f&255;a.h=f;a.fn=f;f=f<<16;a.h=f;a.h=(-16777176)|f;break b;}a.h=(-268435416);BR(a);}}if(!e)break;}break a;case 41:a.h=(-536870871);break a;case 42:case 43:case 63:e=a.q;d
=a.S.data;switch(e>=d.length?42:d[e]){case 43:a.h=c|(-2147483648);BR(a);break a;case 63:a.h=c|(-1073741824);BR(a);break a;default:}a.h=c|(-536870912);break a;case 46:a.h=(-536870866);break a;case 91:a.h=(-536870821);NL(a,2);break a;case 93:if(e!=2)break a;a.h=(-536870819);break a;case 94:a.h=(-536870818);break a;case 123:a.d9=ABb(a,c);break a;case 124:a.h=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.h=(-536870874);break a;case 45:a.h=(-536870867);break a;case 91:a.h=(-536870821);break a;case 93:a.h
=(-536870819);break a;case 94:a.h=(-536870818);break a;default:}}else{c=a.q>=(a.S.data.length-2|0)?(-1):Kn(a);c:{a.h=c;switch(c){case -1:K(B3(C(5),EO(a),a.q));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.h
=ZM(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.ea!=1)break a;a.h=(-2147483648)|c;break a;case 65:a.h=(-2147483583);break a;case 66:a.h=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:K(B3(C(5),EO(a),a.q));case 68:case 83:case 87:case 100:case 115:case 119:a.d9=QT(DL(a.S,
a.g1,1),0);a.h=0;break a;case 71:a.h=(-2147483577);break a;case 80:case 112:break c;case 81:a.tf=a.ea;a.ea=4;b=1;break a;case 90:a.h=(-2147483558);break a;case 97:a.h=7;break a;case 98:a.h=(-2147483550);break a;case 99:c=a.q;d=a.S.data;if(c>=(d.length-2|0))K(B3(C(5),EO(a),a.q));a.h=d[BR(a)]&31;break a;case 101:a.h=27;break a;case 102:a.h=12;break a;case 110:a.h=10;break a;case 114:a.h=13;break a;case 116:a.h=9;break a;case 117:a.h=OD(a,4);break a;case 120:a.h=OD(a,2);break a;case 122:a.h=(-2147483526);break a;default:}break a;}g
=Zw(a);h=0;if(a.h==80)h=1;try{a.d9=QT(g,h);}catch($$e){$$je=ET($$e);if($$je instanceof Id){K(B3(C(5),EO(a),a.q));}else{throw $$e;}}a.h=0;}}if(b)continue;else break;}}
function Zw(a){var b,c,d,e,f,g;b=new R;Fn(b,10);c=a.q;d=a.S;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=DL(d,BR(a),1);f=new R;T(f);J(J(f,C(274)),b);return S(f);}BR(a);c=0;a:{while(true){g=a.q;d=a.S.data;if(g>=(d.length-2|0))break;c=d[BR(a)];if(c==125)break a;B0(b,c);}}if(c!=125)K(B3(C(5),a.bu,a.q));}if(!b.D)K(B3(C(5),a.bu,a.q));f=S(b);if(H(f)==1){b=new R;T(b);J(J(b,C(274)),f);return S(b);}b:{c:{if(H(f)>3){if(Jo(f,C(274)))break c;if(Jo(f,C(275)))break c;}break b;}f=DS(f,2);}return f;}
function ABb(a,b){var c,d,e,f,g,$$je;c=new R;Fn(c,4);d=(-1);e=2147483647;a:{while(true){f=a.q;g=a.S.data;if(f>=g.length)break a;b=g[BR(a)];if(b==125)break a;if(b==44&&d<0)try{d=Iy(GK(c),10);ABh(c,0,Xb(c));continue;}catch($$e){$$je=ET($$e);if($$je instanceof CT){break;}else{throw $$e;}}B0(c,b&65535);}K(B3(C(5),a.bu,a.q));}if(b!=125)K(B3(C(5),a.bu,a.q));if(c.D>0)b:{try{e=Iy(GK(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=ET($$e);if($$je instanceof CT){}else{throw $$e;}}K(B3(C(5),a.bu,a.q));}else if(d<0)K(B3(C(5),
a.bu,a.q));if((d|e|(e-d|0))<0)K(B3(C(5),a.bu,a.q));b=a.q;g=a.S.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.h=(-2147483525);BR(a);break c;case 63:a.h=(-1073741701);BR(a);break c;default:}a.h=(-536870789);}c=new LQ;c.d_=d;c.d7=e;return c;}
function EO(a){return a.bu;}
function CV(a){return !a.U&&!a.h&&a.q==a.qP&&!F2(a)?1:0;}
function Ja(b){return b<0?0:1;}
function EC(a){return !CV(a)&&!F2(a)&&Ja(a.U)?1:0;}
function Nb(a){var b;b=a.U;return b<=56319&&b>=55296?1:0;}
function Tk(a){var b;b=a.U;return b<=57343&&b>=56320?1:0;}
function Rq(b){return b<=56319&&b>=55296?1:0;}
function NS(b){return b<=57343&&b>=56320?1:0;}
function OD(a,b){var c,d,e,f,$$je;c=new R;Fn(c,b);d=a.S.data.length-2|0;e=0;while(true){f=BF(e,b);if(f>=0)break;if(a.q>=d)break;B0(c,a.S.data[BR(a)]);e=e+1|0;}if(!f)a:{try{b=Iy(GK(c),16);}catch($$e){$$je=ET($$e);if($$je instanceof CT){break a;}else{throw $$e;}}return b;}K(B3(C(5),a.bu,a.q));}
function ZM(a){var b,c,d,e,f,g;b=3;c=1;d=a.S.data;e=d.length-2|0;f=SX(d[a.q],8);switch(f){case -1:break;default:if(f>3)b=2;BR(a);a:{while(true){if(c>=b)break a;g=a.q;if(g>=e)break a;g=SX(a.S.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BR(a);c=c+1|0;}}return f;}K(B3(C(5),a.bu,a.q));}
function ABD(a){var b,c,d,e;b=1;c=a.fn;a:while(true){d=a.q;e=a.S.data;if(d>=e.length)K(B3(C(5),a.bu,d));b:{c:{switch(e[d]){case 41:BR(a);return c|256;case 45:if(!b)K(B3(C(5),a.bu,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BR(a);}BR(a);return c;}
function BR(a){var b,c,d,e,f;b=a.q;a.g1=b;if(!(a.fn&4))a.q=b+1|0;else{c=a.S.data.length-2|0;a.q=b+1|0;a:while(true){d=a.q;if(d<c&&P7(a.S.data[d])){a.q=a.q+1|0;continue;}d=a.q;if(d>=c)break;e=a.S.data;if(e[d]!=35)break;a.q=d+1|0;while(true){f=a.q;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.q=f+1|0;}}}return a.g1;}
function AA2(b){return AS0.Cp(b);}
function Kn(a){var b,c,d,e;b=a.S.data[BR(a)];if(Cm(b)){c=a.g1+1|0;d=a.S.data;if(c<d.length){e=d[c];if(CJ(e)){BR(a);return D4(b,e);}}}return b;}
function Na(a){return a.cN;}
function HK(){var a=this;BI.call(a);a.wQ=null;a.wk=null;a.pF=0;}
function B3(a,b,c){var d=new HK();Il(d,a,b,c);return d;}
function Il(a,b,c,d){W(a);a.pF=(-1);a.wQ=b;a.wk=c;a.pF=d;}
var Sr=F();
function Vc(){B.call(this);this.s1=null;}
function AJO(a,b){var c,d;c=a.s1;d=0;while(d<b.length){W8(c,b[d]);d=d+1|0;}}
var Zs=F(0);
function Sv(){var a=this;B.call(a);a.oW=null;a.oY=null;a.oZ=null;}
function AJv(a,b){a.oW.m(ANT(a.oY,b,a.oZ));}
var QB=F(Cw);
function ACy(a,b,c,d){var e;e=a.dd;BD(d,e,b-CZ(d,e)|0);return a.e.c(b,c,d);}
function AKM(a,b){return 0;}
var VJ=F(Cw);
function AEe(a,b,c,d){return b;}
var OJ=F(Cw);
function ADA(a,b,c,d){if(CZ(d,a.dd)!=b)b=(-1);return b;}
function RD(){Cw.call(this);this.mH=0;}
function ACF(a,b,c,d){var e;e=a.dd;BD(d,e,b-CZ(d,e)|0);a.mH=b;return b;}
function AJE(a,b){return 0;}
var E1=F(Cw);
function AMd(a,b,c,d){if(d.ir!=1&&b!=d.r)return (-1);d.hX=1;IE(d,0,b);return b;}
function BV(){By.call(this);this.bt=0;}
function C9(a){BJ(a);a.bt=1;}
function ANh(a,b,c,d){var e;if((b+a.bM()|0)>d.r){d.c0=1;return (-1);}e=a.bf(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function ALt(a){return a.bt;}
function AGY(a,b){return 1;}
var AAR=F(BV);
function FZ(a){var b=new AAR();AIh(b,a);return b;}
function AIh(a,b){Jw(a,b);a.bt=1;a.gJ=1;a.bt=0;}
function AK5(a,b,c){return 0;}
function AFl(a,b,c,d){var e,f,g;e=d.r;f=d.cu;while(true){g=BF(b,e);if(g>0)return (-1);if(g<0&&CJ(I(c,b))&&b>f&&Cm(I(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AD9(a,b,c,d,e){var f,g;f=e.r;g=e.cu;while(true){if(c<b)return (-1);if(c<f&&CJ(I(d,c))&&c>g&&Cm(I(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ACC(a,b){return 0;}
function BN(){var a=this;By.call(a);a.bq=null;a.dX=null;a.P=0;}
function AOG(a,b){var c=new BN();E2(c,a,b);return c;}
function E2(a,b,c){BJ(a);a.bq=b;a.dX=c;a.P=c.dd;}
function AF2(a,b,c,d){var e,f,g,h;if(a.bq===null)return (-1);e=E5(d,a.P);C8(d,a.P,b);f=a.bq.j;g=0;while(true){if(g>=f){C8(d,a.P,e);return (-1);}h=(Bo(a.bq,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AJx(a,b){a.dX.e=b;}
function AHB(a,b){var c;a:{c=a.bq;if(c!==null){c=BL(c);while(true){if(!BM(c))break a;if(!(BP(c)).bH(b))continue;else return 1;}}}return 0;}
function AJ4(a,b){return Hy(b,a.P)>=0&&E5(b,a.P)==Hy(b,a.P)?0:1;}
function AD4(a){var b,c,d,e;a.b1=1;b=a.dX;if(b!==null&&!b.b1)H5(b);a:{b=a.bq;if(b!==null){c=b.j;d=0;while(true){if(d>=c)break a;b=Bo(a.bq,d);e=b.eS();if(e===null)e=b;else{b.b1=1;E6(a.bq,d);Qt(a.bq,d,e);}if(!e.b1)e.dS();d=d+1|0;}}}if(a.e!==null)H5(a);}
var H0=F(BN);
function AJh(a,b,c,d){var e,f,g,h;e=CZ(d,a.P);BD(d,a.P,b);f=a.bq.j;g=0;while(true){if(g>=f){BD(d,a.P,e);return (-1);}h=(Bo(a.bq,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AKn(a,b){return !CZ(b,a.P)?0:1;}
var Dp=F(H0);
function AEC(a,b,c,d){var e,f,g;e=CZ(d,a.P);BD(d,a.P,b);f=a.bq.j;g=0;while(g<f){if((Bo(a.bq,g)).c(b,c,d)>=0)return a.e.c(a.dX.mH,c,d);g=g+1|0;}BD(d,a.P,e);return (-1);}
function AJ_(a,b){a.e=b;}
var LD=F(Dp);
function AJs(a,b,c,d){var e,f;e=a.bq.j;f=0;while(f<e){if((Bo(a.bq,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function AL4(a,b){return 0;}
var Ub=F(Dp);
function ADk(a,b,c,d){var e,f;e=a.bq.j;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bo(a.bq,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ALx(a,b){return 0;}
var P9=F(Dp);
function AD1(a,b,c,d){var e,f,g,h;e=a.bq.j;f=d.h2?0:d.cu;a:{g=a.e.c(b,c,d);if(g>=0){BD(d,a.P,b);h=0;while(true){if(h>=e)break a;if((Bo(a.bq,h)).b9(f,b,c,d)>=0){BD(d,a.P,(-1));return g;}h=h+1|0;}}}return (-1);}
function ANx(a,b){return 0;}
var RZ=F(Dp);
function ACd(a,b,c,d){var e,f;e=a.bq.j;BD(d,a.P,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bo(a.bq,f)).b9(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AKB(a,b){return 0;}
function FL(){BN.call(this);this.cD=null;}
function AO0(a,b){var c=new FL();XO(c,a,b);return c;}
function XO(a,b,c){BJ(a);a.cD=b;a.dX=c;a.P=c.dd;}
function ACr(a,b,c,d){var e,f;e=E5(d,a.P);C8(d,a.P,b);f=a.cD.c(b,c,d);if(f>=0)return f;C8(d,a.P,e);return (-1);}
function AHW(a,b,c,d){var e;e=a.cD.b4(b,c,d);if(e>=0)C8(d,a.P,e);return e;}
function AKQ(a,b,c,d,e){var f;f=a.cD.b9(b,c,d,e);if(f>=0)C8(e,a.P,f);return f;}
function AHx(a,b){return a.cD.bH(b);}
function AJA(a){var b;b=new LV;XO(b,a.cD,a.dX);a.e=b;return b;}
function AMQ(a){var b;a.b1=1;b=a.dX;if(b!==null&&!b.b1)H5(b);b=a.cD;if(b!==null&&!b.b1){b=b.eS();if(b!==null){a.cD.b1=1;a.cD=b;}a.cD.dS();}}
var FY=F();
function Q(){var a=this;FY.call(a);a.T=0;a.b0=0;a.C=null;a.iw=null;a.jb=null;a.E=0;}
var AS1=null;function NJ(){NJ=Bg(Q);AEs();}
function Bl(a){var b;NJ();b=new U7;b.w=Bv(64);a.C=b;}
function ADm(a){return null;}
function ACS(a){return a.C;}
function Zn(a){var b,c,d,e,f;if(!a.b0)b=Gp(a.C,0)>=2048?0:1;else{a:{c=a.C;b=0;d=c.bc;if(b<d){e=c.w.data;f=(e[0]^(-1))>>>0|0;if(f)b=Hr(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Hr(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AGe(a){return a.E;}
function ALq(a){return a;}
function WZ(a){var b,c;if(a.jb===null){b=a.en();c=new Un;c.xf=a;c.m9=b;Bl(c);a.jb=c;D3(c,a.b0);}return a.jb;}
function GI(a){var b,c;if(a.iw===null){b=a.en();c=new Ul;c.wT=a;c.sH=b;c.tp=a;Bl(c);a.iw=c;D3(c,a.T);a.iw.E=a.E;}return a.iw;}
function AMK(a){return 0;}
function D3(a,b){var c;c=a.T;if(c^b){a.T=c?0:1;a.b0=a.b0?0:1;}if(!a.E)a.E=1;return a;}
function AFq(a){return a.T;}
function I4(b,c){NJ();return b.i(c);}
function Hq(b,c){var d,e;NJ();if(b.cX()!==null&&c.cX()!==null){b=b.cX();c=c.cX();d=Be(b.w.data.length,c.w.data.length);e=0;a:{while(e<d){if(b.w.data[e]&c.w.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function QT(b,c){var d,e,f;NJ();d=0;while(true){AKz();e=AS2.data;if(d>=e.length){f=new Id;Br(f,C(5));f.xx=C(5);f.xj=b;K(f);}e=e[d].data;if(B1(b,e[0]))break;d=d+1|0;}return AAn(e[1],c);}
function AEs(){var b;b=new Ge;AKz();AS1=b;}
function XC(){var a=this;Q.call(a);a.kw=0;a.mF=0;a.fD=0;a.j$=0;a.dr=0;a.eO=0;a.y=null;a.bm=null;}
function C0(){var a=new XC();ANo(a);return a;}
function AL9(a,b){var c=new XC();AEg(c,a,b);return c;}
function ANo(a){Bl(a);a.y=ANy();}
function AEg(a,b,c){Bl(a);a.y=ANy();a.kw=b;a.mF=c;}
function Cg(a,b){a:{if(a.kw){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dr){Ld(a.y,GN(b&65535));break a;}Kf(a.y,GN(b&65535));break a;}if(a.mF&&b>128){a.fD=1;b=FR(FP(b));}}}if(!(!Rq(b)&&!NS(b))){if(a.j$)Ld(a.C,b-55296|0);else Kf(a.C,b-55296|0);}if(a.dr)Ld(a.y,b);else Kf(a.y,b);if(!a.E&&KS(b))a.E=1;return a;}
function ABK(a,b){var c,d,e;if(!a.E&&b.E)a.E=1;if(a.j$){if(!b.b0)Fe(a.C,b.en());else CP(a.C,b.en());}else if(!b.b0)E_(a.C,b.en());else{EU(a.C,b.en());CP(a.C,b.en());a.b0=a.b0?0:1;a.j$=1;}if(!a.eO&&b.cX()!==null){if(a.dr){if(!b.T)Fe(a.y,b.cX());else CP(a.y,b.cX());}else if(!b.T)E_(a.y,b.cX());else{EU(a.y,b.cX());CP(a.y,b.cX());a.T=a.T?0:1;a.dr=1;}}else{c=a.T;d=a.bm;if(d!==null){if(!c){e=new NC;e.vm=a;e.tX=c;e.tc=d;e.sZ=b;Bl(e);a.bm=e;}else{e=new ND;e.xG=a;e.qg=c;e.pX=d;e.ph=b;Bl(e);a.bm=e;}}else{if(c&&!a.dr&&
KX(a.y)){d=new Nz;d.wj=a;d.p8=b;Bl(d);a.bm=d;}else if(!c){d=new Nx;d.jQ=a;d.iU=c;d.nY=b;Bl(d);a.bm=d;}else{d=new Ny;d.kN=a;d.i2=c;d.s4=b;Bl(d);a.bm=d;}a.eO=1;}}return a;}
function BQ(a,b,c){var d,e,f,g,h;if(b>c){d=new BI;W(d);K(d);}a:{b:{if(!a.kw){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cg(a,b);b=b+1|0;}}if(!a.dr)G5(a.y,b,c+1|0);else{d=a.y;c=c+1|0;if(b>c){d=new BT;W(d);K(d);}e=d.bc;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.w.data;h[g]=h[g]&(Hl(d,b)|GY(d,f));}else{h=d.w.data;h[g]=h[g]&Hl(d,b);e=g+1|0;while(e<c){d.w.data[e]=0;e=e+1|0;}if(f&31){h=d.w.data;h[c]=h[c]&GY(d,f);}}Gi(d);}}}}return a;}
function Ws(a,b){var c,d,e;if(!a.E&&b.E)a.E=1;if(b.fD)a.fD=1;c=a.b0;if(!(c^b.b0)){if(!c)E_(a.C,b.C);else CP(a.C,b.C);}else if(c)Fe(a.C,b.C);else{EU(a.C,b.C);CP(a.C,b.C);a.b0=1;}if(!a.eO&&CA(b)!==null){c=a.T;if(!(c^b.T)){if(!c)E_(a.y,CA(b));else CP(a.y,CA(b));}else if(c)Fe(a.y,CA(b));else{EU(a.y,CA(b));CP(a.y,CA(b));a.T=1;}}else{c=a.T;d=a.bm;if(d!==null){if(!c){e=new Nr;e.u3=a;e.r6=c;e.s3=d;e.tB=b;Bl(e);a.bm=e;}else{e=new N5;e.vu=a;e.tx=c;e.l$=d;e.mP=b;Bl(e);a.bm=e;}}else{if(!a.dr&&KX(a.y)){if(!c){d=new NA;d.xI
=a;d.o5=b;Bl(d);a.bm=d;}else{d=new NB;d.vy=a;d.tm=b;Bl(d);a.bm=d;}}else if(!c){d=new NE;d.sf=a;d.qv=b;d.p0=c;Bl(d);a.bm=d;}else{d=new NF;d.qR=a;d.q8=b;d.ro=c;Bl(d);a.bm=d;}a.eO=1;}}}
function UU(a,b){var c,d,e;if(!a.E&&b.E)a.E=1;if(b.fD)a.fD=1;c=a.b0;if(!(c^b.b0)){if(!c)CP(a.C,b.C);else E_(a.C,b.C);}else if(!c)Fe(a.C,b.C);else{EU(a.C,b.C);CP(a.C,b.C);a.b0=0;}if(!a.eO&&CA(b)!==null){c=a.T;if(!(c^b.T)){if(!c)CP(a.y,CA(b));else E_(a.y,CA(b));}else if(!c)Fe(a.y,CA(b));else{EU(a.y,CA(b));CP(a.y,CA(b));a.T=0;}}else{c=a.T;d=a.bm;if(d!==null){if(!c){e=new Nt;e.vl=a;e.sj=c;e.m7=d;e.qd=b;Bl(e);a.bm=e;}else{e=new Nu;e.vE=a;e.rC=c;e.l0=d;e.r4=b;Bl(e);a.bm=e;}}else{if(!a.dr&&KX(a.y)){if(!c){d=new Np;d.vA
=a;d.ov=b;Bl(d);a.bm=d;}else{d=new Nq;d.xC=a;d.oE=b;Bl(d);a.bm=d;}}else if(!c){d=new Nv;d.uH=a;d.tT=b;d.qZ=c;Bl(d);a.bm=d;}else{d=new No;d.qX=a;d.rK=b;d.qi=c;Bl(d);a.bm=d;}a.eO=1;}}}
function CF(a,b){var c;c=a.bm;if(c!==null)return a.T^c.i(b);return a.T^C5(a.y,b);}
function CA(a){if(!a.eO)return a.y;return null;}
function AFh(a){return a.C;}
function ALP(a){var b,c;if(a.bm!==null)return a;b=CA(a);c=new Ns;c.uY=a;c.hF=b;Bl(c);return D3(c,a.T);}
function AIL(a){var b,c,d;b=new R;T(b);c=Gp(a.y,0);while(c>=0){Hs(b,FJ(c));B0(b,124);c=Gp(a.y,c+1|0);}d=b.D;if(d>0)Uc(b,d-1|0);return S(b);}
function AFs(a){return a.fD;}
function Id(){var a=this;Bq.call(a);a.xx=null;a.xj=null;}
function DD(){By.call(this);this.B=null;}
function CS(a,b,c,d){Jw(a,c);a.B=b;a.gJ=d;}
function ANn(a){return a.B;}
function AKR(a,b){return !a.B.bH(b)&&!a.e.bH(b)?0:1;}
function AL$(a,b){return 1;}
function AId(a){var b;a.b1=1;b=a.e;if(b!==null&&!b.b1){b=b.eS();if(b!==null){a.e.b1=1;a.e=b;}a.e.dS();}b=a.B;if(b!==null){if(!b.b1){b=b.eS();if(b!==null){a.B.b1=1;a.B=b;}a.B.dS();}else if(b instanceof FL&&b.dX.jf)a.B=b.e;}}
function CH(){DD.call(this);this.Q=null;}
function AO4(a,b,c){var d=new CH();Er(d,a,b,c);return d;}
function Er(a,b,c,d){CS(a,b,c,d);a.Q=b;}
function ACf(a,b,c,d){var e,f;e=0;a:{while((b+a.Q.bM()|0)<=d.r){f=a.Q.bf(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.Q.bM()|0;e=e+(-1)|0;}return f;}
function EH(){CH.call(this);this.iq=null;}
function AOc(a,b,c,d){var e=new EH();QZ(e,a,b,c,d);return e;}
function QZ(a,b,c,d,e){Er(a,c,d,e);a.iq=b;}
function AC6(a,b,c,d){var e,f,g,h,i;e=a.iq;f=e.d_;g=e.d7;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.Q.bM()|0)>d.r)break a;i=a.Q.bf(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.Q.bM()|0;h=h+(-1)|0;}return i;}if((b+a.Q.bM()|0)>d.r){d.c0=1;return (-1);}i=a.Q.bf(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Cx=F(DD);
function ACq(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.B.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var D7=F(CH);
function AH1(a,b,c,d){var e;e=a.B.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function ANA(a,b){a.e=b;a.B.I(b);}
var Uo=F(CH);
function ANa(a,b,c,d){while((b+a.Q.bM()|0)<=d.r&&a.Q.bf(b,c)>0){b=b+a.Q.bM()|0;}return a.e.c(b,c,d);}
function AIG(a,b,c,d){var e,f,g;e=a.e.b4(b,c,d);if(e<0)return (-1);f=e-a.Q.bM()|0;while(f>=b&&a.Q.bf(f,c)>0){g=f-a.Q.bM()|0;e=f;f=g;}return e;}
function U(){var a=this;B.call(a);a.kU=null;a.jM=null;}
function AAn(a,b){if(!b&&a.kU===null)a.kU=a.x();else if(b&&a.jM===null)a.jM=D3(a.x(),1);if(b)return a.jM;return a.kU;}
var CT=F(BI);
function LQ(){var a=this;FY.call(a);a.d_=0;a.d7=0;}
function AIP(a){var b,c,d,e,f;b=a.d_;c=a.d7;d=c!=2147483647?J9(c):C(5);e=new R;T(e);B0(e,123);f=Bj(e,b);B0(f,44);B0(J(f,d),125);return S(e);}
var Nf=F(By);
function AHi(a,b,c,d){return b;}
function AJw(a,b){return 0;}
function U7(){var a=this;B.call(a);a.w=null;a.bc=0;}
function ANy(){var a=new U7();ADQ(a);return a;}
function ADQ(a){a.w=Bv(0);}
function Kf(a,b){var c,d;c=b/32|0;if(b>=a.bc){Hv(a,c+1|0);a.bc=b+1|0;}d=a.w.data;d[c]=d[c]|1<<(b%32|0);}
function G5(a,b,c){var d,e,f,g,h;d=BF(b,c);if(d>0){e=new BT;W(e);K(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bc){Hv(a,f+1|0);a.bc=c;}if(d==f){g=a.w.data;g[d]=g[d]|GY(a,b)&Hl(a,c);}else{g=a.w.data;g[d]=g[d]|GY(a,b);h=d+1|0;while(h<f){a.w.data[h]=(-1);h=h+1|0;}if(c&31){g=a.w.data;g[f]=g[f]|Hl(a,c);}}}
function GY(a,b){return (-1)<<(b%32|0);}
function Hl(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Ld(a,b){var c,d,e,f;c=b/32|0;d=a.w.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bc-1|0))Gi(a);}}
function C5(a,b){var c,d;c=b/32|0;d=a.w.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Gp(a,b){var c,d,e,f;c=a.bc;if(b>=c)return (-1);d=b/32|0;e=a.w.data;f=e[d]>>>(b%32|0)|0;if(f)return Hr(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Hr(e[f])|0;f=f+1|0;}return (-1);}
function Hv(a,b){var c;c=a.w.data.length;if(c>=b)return;c=Ba((b*3|0)/2|0,(c*2|0)+1|0);a.w=HZ(a.w,c);}
function Gi(a){var b,c,d;b=(a.bc+31|0)/32|0;a.bc=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=MF(a.w.data[c]);if(d<32)break;c=c+(-1)|0;a.bc=a.bc-32|0;}a.bc=a.bc-d|0;}}
function CP(a,b){var c,d,e,f;c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]&b.w.data[d];d=d+1|0;}while(true){f=a.w.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bc=Be(a.bc,b.bc);Gi(a);}
function Fe(a,b){var c,d,e;c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]&(b.w.data[d]^(-1));d=d+1|0;}Gi(a);}
function E_(a,b){var c,d,e;c=Ba(a.bc,b.bc);a.bc=c;Hv(a,(c+31|0)/32|0);c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]|b.w.data[d];d=d+1|0;}}
function EU(a,b){var c,d,e;c=Ba(a.bc,b.bc);a.bc=c;Hv(a,(c+31|0)/32|0);c=Be(a.w.data.length,b.w.data.length);d=0;while(d<c){e=a.w.data;e[d]=e[d]^b.w.data[d];d=d+1|0;}Gi(a);}
function KX(a){return a.bc?0:1;}
function LJ(){var a=this;BN.call(a);a.oJ=null;a.uX=0;}
function Pj(){var a=this;BN.call(a);a.lf=null;a.kP=null;}
function ZW(a,b){var c=new Pj();ABy(c,a,b);return c;}
function ABy(a,b,c){BJ(a);a.lf=b;a.kP=c;}
function AC1(a,b,c,d){var e,f,g,h,i;e=a.lf.c(b,c,d);if(e<0)a:{f=a.kP;g=d.cu;e=d.r;h=b+1|0;e=BF(h,e);if(e>0){d.c0=1;e=(-1);}else{i=I(c,b);if(!f.oJ.i(i))e=(-1);else{if(Cm(i)){if(e<0&&CJ(I(c,h))){e=(-1);break a;}}else if(CJ(i)&&b>g&&Cm(I(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AJf(a,b){a.e=b;a.kP.e=b;a.lf.I(b);}
function ADG(a,b){return 1;}
function ADl(a,b){return 1;}
function Db(){var a=this;BN.call(a);a.dh=null;a.wd=0;}
function AHg(a){var b=new Db();SA(b,a);return b;}
function SA(a,b){BJ(a);a.dh=b.h9();a.wd=b.T;}
function AE$(a,b,c,d){var e,f,g,h;e=d.r;if(b<e){f=b+1|0;g=I(c,b);if(a.i(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=I(c,f);if(GA(g,f)&&a.i(D4(g,f)))return a.e.c(b,c,d);}}return (-1);}
function AFH(a,b){return a.dh.i(b);}
function ACX(a,b){if(b instanceof Dw)return I4(a.dh,b.fa);if(b instanceof D0)return I4(a.dh,b.cU);if(b instanceof Db)return Hq(a.dh,b.dh);if(!(b instanceof DQ))return 1;return Hq(a.dh,b.eC);}
function AG_(a){return a.dh;}
function ALg(a,b){a.e=b;}
function AFj(a,b){return 1;}
var Ia=F(Db);
function AGZ(a,b){return a.dh.i(FR(FP(b)));}
function Xs(){var a=this;BV.call(a);a.px=null;a.vT=0;}
function AGg(a){var b=new Xs();AIZ(b,a);return b;}
function AIZ(a,b){C9(a);a.px=b.h9();a.vT=b.T;}
function AHj(a,b,c){return !a.px.i(Ey(D6(I(c,b))))?(-1):1;}
function DQ(){var a=this;BV.call(a);a.eC=null;a.wy=0;}
function ALH(a){var b=new DQ();AJU(b,a);return b;}
function AJU(a,b){C9(a);a.eC=b.h9();a.wy=b.T;}
function Lk(a,b,c){return !a.eC.i(I(c,b))?(-1):1;}
function AJz(a,b){if(b instanceof D0)return I4(a.eC,b.cU);if(b instanceof DQ)return Hq(a.eC,b.eC);if(!(b instanceof Db)){if(!(b instanceof Dw))return 1;return 0;}return Hq(a.eC,b.dh);}
function NK(){var a=this;BN.call(a);a.fV=null;a.k6=null;a.io=0;}
function ALU(a,b){var c=new NK();ACt(c,a,b);return c;}
function ACt(a,b,c){BJ(a);a.fV=b;a.io=c;}
function AH0(a,b){a.e=b;}
function Pv(a){if(a.k6===null)a.k6=Gy(a.fV);return a.k6;}
function AB6(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.r;f=Bv(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=I(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?Fu([k,l]):Fu([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.io;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.fV.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=I(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=I(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.io==3){k=f[0];m=a.fV.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.io==2){b=f[0];m=a.fV.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function ADx(a,b){return b instanceof NK&&!B1(Pv(b),Pv(a))?0:1;}
function ALS(a,b){return 1;}
function D0(){BV.call(this);this.cU=0;}
function XU(a){var b=new D0();AJV(b,a);return b;}
function AJV(a,b){C9(a);a.cU=b;}
function AG6(a){return 1;}
function AGb(a,b,c){return a.cU!=I(c,b)?(-1):1;}
function AE8(a,b,c,d){var e,f,g;if(!(c instanceof Bw))return GQ(a,b,c,d);e=d.r;while(true){if(b>=e)return (-1);f=Hp(c,a.cU,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AHb(a,b,c,d,e){var f;if(!(d instanceof Bw))return G0(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=GD(d,a.cU,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ALL(a,b){if(b instanceof D0)return b.cU!=a.cU?0:1;if(!(b instanceof DQ)){if(b instanceof Db)return b.i(a.cU);if(!(b instanceof Dw))return 1;return 0;}return Lk(b,0,U8(a.cU))<=0?0:1;}
function ABk(){BV.call(this);this.lQ=0;}
function AKd(a){var b=new ABk();AIB(b,a);return b;}
function AIB(a,b){C9(a);a.lQ=Ey(D6(b));}
function AB0(a,b,c){return a.lQ!=Ey(D6(I(c,b)))?(-1):1;}
function Wv(){var a=this;BV.call(a);a.tH=0;a.m4=0;}
function ADX(a){var b=new Wv();AKx(b,a);return b;}
function AKx(a,b){C9(a);a.tH=b;a.m4=GN(b);}
function ACk(a,b,c){return a.tH!=I(c,b)&&a.m4!=I(c,b)?(-1):1;}
function EM(){var a=this;BN.call(a);a.gA=0;a.jv=null;a.iW=null;a.iQ=0;}
function APM(a,b){var c=new EM();M4(c,a,b);return c;}
function M4(a,b,c){BJ(a);a.gA=1;a.iW=b;a.iQ=c;}
function AMO(a,b){a.e=b;}
function AJg(a,b,c,d){var e,f,g,h,i,j,k,l;e=Bv(4);f=d.r;if(b>=f)return (-1);g=Jh(a,b,c,f);h=b+a.gA|0;i=AA2(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;C6(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Jh(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AA2(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.gA|0;if(h>=f){b=k;break a;}g=Jh(a,h,c,f);b=k;}}}if(b!=a.iQ)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.iW.data[g])break;g=g+1|0;}return (-1);}
function UT(a){var b,c;if(a.jv===null){b=new R;T(b);c=0;while(c<a.iQ){Hs(b,FJ(a.iW.data[c]));c=c+1|0;}a.jv=S(b);}return a.jv;}
function Jh(a,b,c,d){var e,f,g;a.gA=1;if(b>=(d-1|0))e=I(c,b);else{d=b+1|0;e=I(c,b);f=I(c,d);if(GA(e,f)){g=B2(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Cm(g[0])&&CJ(g[1])?D4(g[0],g[1]):g[0];a.gA=2;}}return e;}
function AHk(a,b){return b instanceof EM&&!B1(UT(b),UT(a))?0:1;}
function AKa(a,b){return 1;}
var Vs=F(EM);
var Sc=F(EM);
var Wh=F(Cx);
function AEl(a,b,c,d){var e;while(true){e=a.B.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var OA=F(Cx);
function AIu(a,b,c,d){var e;e=a.B.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.B.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var Fd=F(Cx);
function ALe(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.B.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function AMi(a,b){a.e=b;a.B.I(b);}
var Of=F(Fd);
function AG9(a,b,c,d){var e;e=a.B.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function AIT(a,b){a.e=b;}
function EL(){var a=this;Cx.call(a);a.fj=null;a.c7=0;}
function AS3(a,b,c,d,e){var f=new EL();H$(f,a,b,c,d,e);return f;}
function H$(a,b,c,d,e,f){CS(a,c,d,e);a.fj=b;a.c7=f;}
function ANu(a,b,c,d){var e,f;e=LM(d,a.c7);if(!a.B.A(d))return a.e.c(b,c,d);if(e>=a.fj.d7)return a.e.c(b,c,d);f=a.c7;e=e+1|0;DM(d,f,e);f=a.B.c(b,c,d);if(f>=0){DM(d,a.c7,0);return f;}f=a.c7;e=e+(-1)|0;DM(d,f,e);if(e>=a.fj.d_)return a.e.c(b,c,d);DM(d,a.c7,0);return (-1);}
var L0=F(EL);
function AGA(a,b,c,d){var e,f,g;e=0;f=a.fj.d7;a:{while(true){g=a.B.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fj.d_)return (-1);return a.e.c(b,c,d);}
var Qu=F(Cx);
function AMZ(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.B.c(b,c,d);}
var Pu=F(Fd);
function ADI(a,b,c,d){var e;if(!a.B.A(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.B.c(b,c,d);return e;}
var S5=F(EL);
function ACK(a,b,c,d){var e,f,g;e=LM(d,a.c7);if(!a.B.A(d))return a.e.c(b,c,d);f=a.fj;if(e>=f.d7){DM(d,a.c7,0);return a.e.c(b,c,d);}if(e<f.d_){DM(d,a.c7,e+1|0);g=a.B.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){DM(d,a.c7,0);return g;}DM(d,a.c7,e+1|0);g=a.B.c(b,c,d);}return g;}
var Qv=F(DD);
function ANj(a,b,c,d){var e;e=d.r;if(e>b)return a.e.b9(b,e,c,d);return a.e.c(b,c,d);}
function ALr(a,b,c,d){var e;e=d.r;if(a.e.b9(b,e,c,d)>=0)return b;return (-1);}
function Nn(){DD.call(this);this.jJ=null;}
function AJB(a,b,c,d){var e,f;e=d.r;f=S7(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.b9(b,e,c,d);return a.e.c(b,c,d);}
function AB_(a,b,c,d){var e,f,g,h;e=d.r;f=a.e.b4(b,c,d);if(f<0)return (-1);g=S7(a,f,e,c);if(g>=0)e=g;g=Ba(f,a.e.b9(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.jJ.gH(I(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function S7(a,b,c,d){while(true){if(b>=c)return (-1);if(a.jJ.gH(I(d,b)))break;b=b+1|0;}return b;}
var Ej=F();
var AS4=null;var AS5=null;function Oh(b){var c;if(!(b&1)){c=AS5;if(c!==null)return c;c=new Tr;AS5=c;return c;}c=AS4;if(c!==null)return c;c=new Tq;AS4=c;return c;}
var Wi=F(CH);
function ACM(a,b,c,d){var e;a:{while(true){if((b+a.Q.bM()|0)>d.r)break a;e=a.Q.bf(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var Uh=F(D7);
function AIr(a,b,c,d){var e;if((b+a.Q.bM()|0)<=d.r){e=a.Q.bf(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var N2=F(EH);
function AKS(a,b,c,d){var e,f,g,h,i;e=a.iq;f=e.d_;g=e.d7;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.Q.bM()|0)>d.r)break a;i=a.Q.bf(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.Q.bM()|0)>d.r){d.c0=1;return (-1);}i=a.Q.bf(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Po=F(CH);
function AJu(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.Q.bM()|0)<=d.r){e=a.Q.bf(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var So=F(D7);
function ACW(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.B.c(b,c,d);}
var P$=F(EH);
function AK7(a,b,c,d){var e,f,g,h,i,j;e=a.iq;f=e.d_;g=e.d7;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.Q.bM()|0)<=d.r){i=a.Q.bf(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.Q.bM()|0)>d.r){d.c0=1;return (-1);}j=a.Q.bf(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Jf=F(By);
function AHz(a,b,c,d){if(b&&!(d.eP&&b==d.cu))return (-1);return a.e.c(b,c,d);}
function AGM(a,b){return 0;}
function X3(){By.call(this);this.te=0;}
function ALG(a){var b=new X3();AG2(b,a);return b;}
function AG2(a,b){BJ(a);a.te=b;}
function ADi(a,b,c,d){var e,f,g;e=b<d.r?I(c,b):32;f=!b?32:I(c,b-1|0);g=d.h2?0:d.cu;return (e!=32&&!Pz(a,e,b,g,c)?0:1)^(f!=32&&!Pz(a,f,b-1|0,g,c)?0:1)^a.te?(-1):a.e.c(b,c,d);}
function ADv(a,b){return 0;}
function Pz(a,b,c,d,e){var f;if(!Iw(b)&&b!=95){a:{if(Ce(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=I(e,c);if(Iw(f))return 0;if(Ce(f)!=6)return 1;}}return 1;}return 0;}
var Ni=F(By);
function AG1(a,b,c,d){if(b!=d.gO)return (-1);return a.e.c(b,c,d);}
function ANq(a,b){return 0;}
function Va(){By.call(this);this.fo=0;}
function APg(a){var b=new Va();AAS(b,a);return b;}
function AAS(a,b){BJ(a);a.fo=b;}
function AJX(a,b,c,d){var e,f,g;e=!d.eP?H(c):d.r;if(b>=e){BD(d,a.fo,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&I(c,b)==13&&I(c,b+1|0)==10){BD(d,a.fo,0);return a.e.c(b,c,d);}a:{if(f==1){g=I(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BD(d,a.fo,0);return a.e.c(b,c,d);}
function AEa(a,b){var c;c=!CZ(b,a.fo)?0:1;BD(b,a.fo,(-1));return c;}
var UL=F(By);
function AJe(a,b,c,d){if(b<(d.h2?H(c):d.r))return (-1);d.c0=1;d.w2=1;return a.e.c(b,c,d);}
function ABY(a,b){return 0;}
function Ma(){By.call(this);this.qm=null;}
function AD2(a,b,c,d){a:{if(b!=d.r){if(!b)break a;if(d.eP&&b==d.cu)break a;if(a.qm.rF(I(c,b-1|0),I(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function AFT(a,b){return 0;}
var AA$=F(BN);
function APy(){var a=new AA$();AI6(a);return a;}
function AI6(a){BJ(a);}
function AM4(a,b,c,d){var e,f,g,h;e=d.r;f=b+1|0;if(f>e){d.c0=1;return (-1);}g=I(c,b);if(Cm(g)){h=b+2|0;if(h<=e&&GA(g,I(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function ADz(a,b){a.e=b;}
function AI0(a){return (-2147483602);}
function ADy(a,b){return 1;}
function XA(){BN.call(this);this.kf=null;}
function AO$(a){var b=new XA();AD$(b,a);return b;}
function AD$(a,b){BJ(a);a.kf=b;}
function AI$(a,b,c,d){var e,f,g,h;e=d.r;f=b+1|0;if(f>e){d.c0=1;return (-1);}g=I(c,b);if(Cm(g)){b=b+2|0;if(b<=e){h=I(c,f);if(GA(g,h))return a.kf.gH(D4(g,h))?(-1):a.e.c(b,c,d);}}return a.kf.gH(g)?(-1):a.e.c(f,c,d);}
function AKJ(a,b){a.e=b;}
function ABT(a){return (-2147483602);}
function ANg(a,b){return 1;}
function AA0(){By.call(this);this.gt=0;}
function AOL(a){var b=new AA0();AFQ(b,a);return b;}
function AFQ(a,b){BJ(a);a.gt=b;}
function AHm(a,b,c,d){var e;e=!d.eP?H(c):d.r;if(b>=e){BD(d,a.gt,0);return a.e.c(b,c,d);}if((e-b|0)==1&&I(c,b)==10){BD(d,a.gt,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AFP(a,b){var c;c=!CZ(b,a.gt)?0:1;BD(b,a.gt,(-1));return c;}
function Zq(){By.call(this);this.gy=0;}
function AOs(a){var b=new Zq();AGh(b,a);return b;}
function AGh(a,b){BJ(a);a.gy=b;}
function AJd(a,b,c,d){if((!d.eP?H(c)-b|0:d.r-b|0)<=0){BD(d,a.gy,0);return a.e.c(b,c,d);}if(I(c,b)!=10)return (-1);BD(d,a.gy,1);return a.e.c(b+1|0,c,d);}
function AFC(a,b){var c;c=!CZ(b,a.gy)?0:1;BD(b,a.gy,(-1));return c;}
function Wr(){By.call(this);this.e1=0;}
function ANS(a){var b=new Wr();ANv(b,a);return b;}
function ANv(a,b){BJ(a);a.e1=b;}
function AGC(a,b,c,d){var e,f,g;e=!d.eP?H(c)-b|0:d.r-b|0;if(!e){BD(d,a.e1,0);return a.e.c(b,c,d);}if(e<2){f=I(c,b);g=97;}else{f=I(c,b);g=I(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BD(d,a.e1,0);return a.e.c(b,c,d);case 13:if(g!=10){BD(d,a.e1,0);return a.e.c(b,c,d);}BD(d,a.e1,0);return a.e.c(b,c,d);default:}return (-1);}
function AEd(a,b){var c;c=!CZ(b,a.e1)?0:1;BD(b,a.e1,(-1));return c;}
function Gf(){var a=this;BN.call(a);a.my=0;a.fQ=0;}
function APH(a,b){var c=new Gf();NR(c,a,b);return c;}
function NR(a,b,c){BJ(a);a.my=b;a.fQ=c;}
function ACR(a,b,c,d){var e,f,g,h;e=Fw(a,d);if(e!==null&&(b+H(e)|0)<=d.r){f=0;while(true){if(f>=H(e)){BD(d,a.fQ,H(e));return a.e.c(b+H(e)|0,c,d);}g=I(e,f);h=b+f|0;if(g!=I(c,h)&&GN(I(e,f))!=I(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AJ9(a,b){a.e=b;}
function Fw(a,b){var c,d;c=a.my;d=E5(b,c);c=Hy(b,c);return (c|d|(c-d|0))>=0&&c<=H(b.kj)?B9(b.kj,d,c):null;}
function AKp(a,b){var c;c=!CZ(b,a.fQ)?0:1;BD(b,a.fQ,(-1));return c;}
var AA6=F(Gf);
function ANW(a,b){var c=new AA6();AMa(c,a,b);return c;}
function AMa(a,b,c){NR(a,b,c);}
function AEj(a,b,c,d){var e,f;e=Fw(a,d);if(e!==null&&(b+H(e)|0)<=d.r){f=!Sz(c,e,b)?(-1):H(e);if(f<0)return (-1);BD(d,a.fQ,f);return a.e.c(b+f|0,c,d);}return (-1);}
function AL2(a,b,c,d){var e,f;e=Fw(a,d);f=d.cu;if(e!==null&&(b+H(e)|0)<=f){while(true){if(b>f)return (-1);b=OC(c,e,b);if(b<0)return (-1);if(a.e.c(b+H(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ACA(a,b,c,d,e){var f,g;f=Fw(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=OP(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+H(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AIl(a,b){return 1;}
var YG=F(Gf);
function AOt(a,b){var c=new YG();AFM(c,a,b);return c;}
function AFM(a,b,c){NR(a,b,c);}
function AHQ(a,b,c,d){var e,f;e=Fw(a,d);if(e!==null&&(b+H(e)|0)<=d.r){f=0;while(true){if(f>=H(e)){BD(d,a.fQ,H(e));return a.e.c(b+H(e)|0,c,d);}if(Ey(D6(I(e,f)))!=Ey(D6(I(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Ne=F(FB);
function AFt(a,b,c,d,e){LS(a,b,c,d,e);return a;}
function ADn(a,b,c,d){Vi(a,b,c,d);return a;}
function ADP(a,b){ID(a,b);}
function ALs(a,b,c){Vx(a,b,c);return a;}
function Qx(){var a=this;BV.call(a);a.cd=null;a.jy=null;a.kp=null;}
function AEA(a,b,c){return !Je(a,c,b)?(-1):a.bt;}
function ADd(a,b,c,d){var e,f,g;e=d.r;while(true){if(b>e)return (-1);f=I(a.cd,a.bt-1|0);a:{while(true){g=a.bt;if(b>(e-g|0)){b=(-1);break a;}g=I(c,(b+g|0)-1|0);if(g==f&&Je(a,c,b))break;b=b+Rw(a.jy,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bt|0,c,d)>=0)break;b=b+1|0;}return b;}
function AFS(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=I(a.cd,0);g=(H(d)-c|0)-a.bt|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=I(d,c);if(g==f&&Je(a,d,c))break;c=c-Rw(a.kp,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bt|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AGn(a,b){var c;if(b instanceof D0)return b.cU!=I(a.cd,0)?0:1;if(b instanceof DQ)return Lk(b,0,B9(a.cd,0,1))<=0?0:1;if(!(b instanceof Db)){if(!(b instanceof Dw))return 1;return H(a.cd)>1&&b.fa==D4(I(a.cd,0),I(a.cd,1))?1:0;}a:{b:{b=b;if(!b.i(I(a.cd,0))){if(H(a.cd)<=1)break b;if(!b.i(D4(I(a.cd,0),I(a.cd,1))))break b;}c=1;break a;}c=0;}return c;}
function Je(a,b,c){var d;d=0;while(d<a.bt){if(I(b,d+c|0)!=I(a.cd,d))return 0;d=d+1|0;}return 1;}
function Wq(){BV.call(this);this.h5=null;}
function APL(a){var b=new Wq();ALM(b,a);return b;}
function ALM(a,b){var c,d,e;C9(a);c=new R;T(c);d=0;while(true){e=BF(d,b.D);if(e>=0){a.h5=S(c);a.bt=c.D;return;}if(d<0)break;if(e>=0)break;B0(c,Ey(D6(b.J.data[d])));d=d+1|0;}b=new BT;W(b);K(b);}
function AHY(a,b,c){var d;d=0;while(true){if(d>=H(a.h5))return H(a.h5);if(I(a.h5,d)!=Ey(D6(I(c,b+d|0))))break;d=d+1|0;}return (-1);}
function L5(){BV.call(this);this.gq=null;}
function AKV(a,b,c){var d,e,f;d=0;while(true){if(d>=H(a.gq))return H(a.gq);e=I(a.gq,d);f=b+d|0;if(e!=I(c,f)&&GN(I(a.gq,d))!=I(c,f))break;d=d+1|0;}return (-1);}
var Ge=F();
var AS6=null;var AS7=null;var AS2=null;function AKz(){AKz=Bg(Ge);AEW();}
function AEW(){AS6=APo();AS7=AOF();AS2=G($rt_arraycls(B),[G(B,[C(276),API()]),G(B,[C(277),ANP()]),G(B,[C(278),APl()]),G(B,[C(279),APt()]),G(B,[C(280),AS7]),G(B,[C(281),AOQ()]),G(B,[C(282),AOC()]),G(B,[C(283),ANY()]),G(B,[C(284),ANV()]),G(B,[C(285),AN2()]),G(B,[C(286),AOe()]),G(B,[C(287),AN0()]),G(B,[C(288),AO3()]),G(B,[C(289),ANJ()]),G(B,[C(290),APq()]),G(B,[C(291),AOd()]),G(B,[C(292),AOO()]),G(B,[C(293),AOb()]),G(B,[C(294),AOP()]),G(B,[C(295),AN4()]),G(B,[C(296),APx()]),G(B,[C(297),AN7()]),G(B,[C(298),AOU()]),
G(B,[C(299),APk()]),G(B,[C(300),APh()]),G(B,[C(301),APu()]),G(B,[C(302),AN3()]),G(B,[C(303),AO9()]),G(B,[C(304),AS6]),G(B,[C(305),AOX()]),G(B,[C(306),ANZ()]),G(B,[C(307),AS6]),G(B,[C(308),ANG()]),G(B,[C(309),AS7]),G(B,[C(310),AOl()]),G(B,[C(311),L(0,127)]),G(B,[C(312),L(128,255)]),G(B,[C(313),L(256,383)]),G(B,[C(314),L(384,591)]),G(B,[C(315),L(592,687)]),G(B,[C(316),L(688,767)]),G(B,[C(317),L(768,879)]),G(B,[C(318),L(880,1023)]),G(B,[C(319),L(1024,1279)]),G(B,[C(320),L(1280,1327)]),G(B,[C(321),L(1328,1423)]),
G(B,[C(322),L(1424,1535)]),G(B,[C(323),L(1536,1791)]),G(B,[C(324),L(1792,1871)]),G(B,[C(325),L(1872,1919)]),G(B,[C(326),L(1920,1983)]),G(B,[C(327),L(2304,2431)]),G(B,[C(328),L(2432,2559)]),G(B,[C(329),L(2560,2687)]),G(B,[C(330),L(2688,2815)]),G(B,[C(331),L(2816,2943)]),G(B,[C(332),L(2944,3071)]),G(B,[C(333),L(3072,3199)]),G(B,[C(334),L(3200,3327)]),G(B,[C(335),L(3328,3455)]),G(B,[C(336),L(3456,3583)]),G(B,[C(337),L(3584,3711)]),G(B,[C(338),L(3712,3839)]),G(B,[C(339),L(3840,4095)]),G(B,[C(340),L(4096,4255)]),
G(B,[C(341),L(4256,4351)]),G(B,[C(342),L(4352,4607)]),G(B,[C(343),L(4608,4991)]),G(B,[C(344),L(4992,5023)]),G(B,[C(345),L(5024,5119)]),G(B,[C(346),L(5120,5759)]),G(B,[C(347),L(5760,5791)]),G(B,[C(348),L(5792,5887)]),G(B,[C(349),L(5888,5919)]),G(B,[C(350),L(5920,5951)]),G(B,[C(351),L(5952,5983)]),G(B,[C(352),L(5984,6015)]),G(B,[C(353),L(6016,6143)]),G(B,[C(354),L(6144,6319)]),G(B,[C(355),L(6400,6479)]),G(B,[C(356),L(6480,6527)]),G(B,[C(357),L(6528,6623)]),G(B,[C(358),L(6624,6655)]),G(B,[C(359),L(6656,6687)]),
G(B,[C(360),L(7424,7551)]),G(B,[C(361),L(7552,7615)]),G(B,[C(362),L(7616,7679)]),G(B,[C(363),L(7680,7935)]),G(B,[C(364),L(7936,8191)]),G(B,[C(365),L(8192,8303)]),G(B,[C(366),L(8304,8351)]),G(B,[C(367),L(8352,8399)]),G(B,[C(368),L(8400,8447)]),G(B,[C(369),L(8448,8527)]),G(B,[C(370),L(8528,8591)]),G(B,[C(371),L(8592,8703)]),G(B,[C(372),L(8704,8959)]),G(B,[C(373),L(8960,9215)]),G(B,[C(374),L(9216,9279)]),G(B,[C(375),L(9280,9311)]),G(B,[C(376),L(9312,9471)]),G(B,[C(377),L(9472,9599)]),G(B,[C(378),L(9600,9631)]),
G(B,[C(379),L(9632,9727)]),G(B,[C(380),L(9728,9983)]),G(B,[C(381),L(9984,10175)]),G(B,[C(382),L(10176,10223)]),G(B,[C(383),L(10224,10239)]),G(B,[C(384),L(10240,10495)]),G(B,[C(385),L(10496,10623)]),G(B,[C(386),L(10624,10751)]),G(B,[C(387),L(10752,11007)]),G(B,[C(388),L(11008,11263)]),G(B,[C(389),L(11264,11359)]),G(B,[C(390),L(11392,11519)]),G(B,[C(391),L(11520,11567)]),G(B,[C(392),L(11568,11647)]),G(B,[C(393),L(11648,11743)]),G(B,[C(394),L(11776,11903)]),G(B,[C(395),L(11904,12031)]),G(B,[C(396),L(12032,12255)]),
G(B,[C(397),L(12272,12287)]),G(B,[C(398),L(12288,12351)]),G(B,[C(399),L(12352,12447)]),G(B,[C(400),L(12448,12543)]),G(B,[C(401),L(12544,12591)]),G(B,[C(402),L(12592,12687)]),G(B,[C(403),L(12688,12703)]),G(B,[C(404),L(12704,12735)]),G(B,[C(405),L(12736,12783)]),G(B,[C(406),L(12784,12799)]),G(B,[C(407),L(12800,13055)]),G(B,[C(408),L(13056,13311)]),G(B,[C(409),L(13312,19893)]),G(B,[C(410),L(19904,19967)]),G(B,[C(411),L(19968,40959)]),G(B,[C(412),L(40960,42127)]),G(B,[C(413),L(42128,42191)]),G(B,[C(414),L(42752,
42783)]),G(B,[C(415),L(43008,43055)]),G(B,[C(416),L(44032,55203)]),G(B,[C(417),L(55296,56191)]),G(B,[C(418),L(56192,56319)]),G(B,[C(419),L(56320,57343)]),G(B,[C(420),L(57344,63743)]),G(B,[C(421),L(63744,64255)]),G(B,[C(422),L(64256,64335)]),G(B,[C(423),L(64336,65023)]),G(B,[C(424),L(65024,65039)]),G(B,[C(425),L(65040,65055)]),G(B,[C(426),L(65056,65071)]),G(B,[C(427),L(65072,65103)]),G(B,[C(428),L(65104,65135)]),G(B,[C(429),L(65136,65279)]),G(B,[C(430),L(65280,65519)]),G(B,[C(431),L(0,1114111)]),G(B,[C(432),
AN1()]),G(B,[C(433),BE(0,1)]),G(B,[C(434),HL(62,1)]),G(B,[C(435),BE(1,1)]),G(B,[C(436),BE(2,1)]),G(B,[C(437),BE(3,0)]),G(B,[C(438),BE(4,0)]),G(B,[C(439),BE(5,1)]),G(B,[C(440),HL(448,1)]),G(B,[C(441),BE(6,1)]),G(B,[C(442),BE(7,0)]),G(B,[C(443),BE(8,1)]),G(B,[C(444),HL(3584,1)]),G(B,[C(445),BE(9,1)]),G(B,[C(446),BE(10,1)]),G(B,[C(447),BE(11,1)]),G(B,[C(448),HL(28672,0)]),G(B,[C(449),BE(12,0)]),G(B,[C(450),BE(13,0)]),G(B,[C(451),BE(14,0)]),G(B,[C(452),AOx(983040,1,1)]),G(B,[C(453),BE(15,0)]),G(B,[C(454),BE(16,
1)]),G(B,[C(455),BE(18,1)]),G(B,[C(456),AOJ(19,0,1)]),G(B,[C(457),HL(1643118592,1)]),G(B,[C(458),BE(20,0)]),G(B,[C(459),BE(21,0)]),G(B,[C(460),BE(22,0)]),G(B,[C(461),BE(23,0)]),G(B,[C(462),BE(24,1)]),G(B,[C(463),HL(2113929216,1)]),G(B,[C(464),BE(25,1)]),G(B,[C(465),BE(26,0)]),G(B,[C(466),BE(27,0)]),G(B,[C(467),BE(28,1)]),G(B,[C(468),BE(29,0)]),G(B,[C(469),BE(30,0)])]);}
function Lt(){BV.call(this);this.pU=0;}
function AK0(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.pU!=FR(FP(D4(e,d)))?(-1):2;}
function JM(){BN.call(this);this.fB=0;}
function AI4(a){var b=new JM();ADM(b,a);return b;}
function ADM(a,b){BJ(a);a.fB=b;}
function AJr(a,b){a.e=b;}
function AEb(a,b,c,d){var e,f;e=b+1|0;if(e>d.r){d.c0=1;return (-1);}f=I(c,b);if(b>d.cu&&Cm(I(c,b-1|0)))return (-1);if(a.fB!=f)return (-1);return a.e.c(e,c,d);}
function AGk(a,b,c,d){var e,f,g,h;if(!(c instanceof Bw))return GQ(a,b,c,d);e=d.cu;f=d.r;while(true){if(b>=f)return (-1);g=Hp(c,a.fB,b);if(g<0)return (-1);if(g>e&&Cm(I(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AEG(a,b,c,d,e){var f,g;if(!(d instanceof Bw))return G0(a,b,c,d,e);f=e.cu;a:{while(true){if(c<b)return (-1);g=GD(d,a.fB,c);if(g<0)break a;if(g<b)break a;if(g>f&&Cm(I(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ACx(a,b){if(b instanceof D0)return 0;if(b instanceof DQ)return 0;if(b instanceof Db)return 0;if(b instanceof Dw)return 0;if(b instanceof J2)return 0;if(!(b instanceof JM))return 1;return b.fB!=a.fB?0:1;}
function ALz(a,b){return 1;}
function J2(){BN.call(this);this.fh=0;}
function AGG(a){var b=new J2();AI_(b,a);return b;}
function AI_(a,b){BJ(a);a.fh=b;}
function ADO(a,b){a.e=b;}
function ACe(a,b,c,d){var e,f,g,h;e=d.r;f=b+1|0;g=BF(f,e);if(g>0){d.c0=1;return (-1);}h=I(c,b);if(g<0&&CJ(I(c,f)))return (-1);if(a.fh!=h)return (-1);return a.e.c(f,c,d);}
function AJK(a,b,c,d){var e,f;if(!(c instanceof Bw))return GQ(a,b,c,d);e=d.r;while(true){if(b>=e)return (-1);f=Hp(c,a.fh,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CJ(I(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function AKT(a,b,c,d,e){var f,g;if(!(d instanceof Bw))return G0(a,b,c,d,e);f=e.r;a:{while(true){if(c<b)return (-1);g=GD(d,a.fh,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CJ(I(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AEB(a,b){if(b instanceof D0)return 0;if(b instanceof DQ)return 0;if(b instanceof Db)return 0;if(b instanceof Dw)return 0;if(b instanceof JM)return 0;if(!(b instanceof J2))return 1;return b.fh!=a.fh?0:1;}
function AJS(a,b){return 1;}
function Dw(){var a=this;BV.call(a);a.iJ=0;a.hz=0;a.fa=0;}
function AKq(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.iJ==e&&a.hz==d?2:(-1);}
function AIM(a,b,c,d){var e,f;if(!(c instanceof Bw))return GQ(a,b,c,d);e=d.r;while(b<e){b=Hp(c,a.iJ,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=I(c,b);if(a.hz==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function ADN(a,b,c,d,e){var f;if(!(d instanceof Bw))return G0(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=GD(d,a.hz,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.iJ==I(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AKf(a,b){if(b instanceof Dw)return b.fa!=a.fa?0:1;if(b instanceof Db)return b.i(a.fa);if(b instanceof D0)return 0;if(!(b instanceof DQ))return 1;return 0;}
var Tq=F(Ej);
function ADY(a,b){return b!=10?0:1;}
function AKl(a,b,c){return b!=10?0:1;}
var Tr=F(Ej);
function AK9(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AME(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AAb(){var a=this;B.call(a);a.lF=null;a.i1=null;a.f8=0;a.ul=0;}
function AIY(a){var b=new AAb();AG0(b,a);return b;}
function AG0(a,b){var c,d;while(true){c=a.f8;if(b<c)break;a.f8=c<<1|1;}d=c<<1|1;a.f8=d;d=d+1|0;a.lF=Bv(d);a.i1=Bv(d);a.ul=b;}
function Qd(a,b,c){var d,e,f,g;d=0;e=a.f8;f=b&e;while(true){g=a.lF.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.i1.data[f]=c;}
function Rw(a,b){var c,d,e,f;c=a.f8;d=b&c;e=0;while(true){f=a.lF.data[d];if(!f)break;if(f==b)return a.i1.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.ul;}
var WP=F();
var JI=F(U);
function APo(){var a=new JI();AGB(a);return a;}
function AGB(a){}
function YM(a){return Cg(BQ(C0(),9,13),32);}
var IU=F(U);
function AOF(){var a=new IU();ALv(a);return a;}
function ALv(a){}
function Zj(a){return BQ(C0(),48,57);}
var Z7=F(U);
function API(){var a=new Z7();AF3(a);return a;}
function AF3(a){}
function AKL(a){return BQ(C0(),97,122);}
var AAB=F(U);
function ANP(){var a=new AAB();AG4(a);return a;}
function AG4(a){}
function ALB(a){return BQ(C0(),65,90);}
var AAD=F(U);
function APl(){var a=new AAD();ADe(a);return a;}
function ADe(a){}
function AE_(a){return BQ(C0(),0,127);}
var JC=F(U);
function APt(){var a=new JC();AEn(a);return a;}
function AEn(a){}
function XE(a){return BQ(BQ(C0(),97,122),65,90);}
var Kd=F(JC);
function AOQ(){var a=new Kd();AGK(a);return a;}
function AGK(a){}
function Yl(a){return BQ(XE(a),48,57);}
var ABI=F(U);
function AOC(){var a=new ABI();AIw(a);return a;}
function AIw(a){}
function AGj(a){return BQ(BQ(BQ(C0(),33,64),91,96),123,126);}
var Lg=F(Kd);
function ANY(){var a=new Lg();AJ3(a);return a;}
function AJ3(a){}
function Wo(a){return BQ(BQ(BQ(Yl(a),33,64),91,96),123,126);}
var YX=F(Lg);
function ANV(){var a=new YX();ALp(a);return a;}
function ALp(a){}
function AIe(a){return Cg(Wo(a),32);}
var Ze=F(U);
function AN2(){var a=new Ze();AKX(a);return a;}
function AKX(a){}
function AEw(a){return Cg(Cg(C0(),32),9);}
var XX=F(U);
function AOe(){var a=new XX();AMv(a);return a;}
function AMv(a){}
function AIb(a){return Cg(BQ(C0(),0,31),127);}
var XN=F(U);
function AN0(){var a=new XN();ADu(a);return a;}
function ADu(a){}
function AMJ(a){return BQ(BQ(BQ(C0(),48,57),97,102),65,70);}
var AAH=F(U);
function AO3(){var a=new AAH();AC4(a);return a;}
function AC4(a){}
function AIW(a){var b;b=new RI;b.wc=a;Bl(b);b.E=1;return b;}
var ABS=F(U);
function ANJ(){var a=new ABS();AKi(a);return a;}
function AKi(a){}
function AB8(a){var b;b=new LH;b.wl=a;Bl(b);b.E=1;return b;}
var AAc=F(U);
function APq(){var a=new AAc();ADh(a);return a;}
function ADh(a){}
function AGH(a){var b;b=new QO;b.vP=a;Bl(b);return b;}
var ZZ=F(U);
function AOd(){var a=new ZZ();AIc(a);return a;}
function AIc(a){}
function AKv(a){var b;b=new QN;b.vC=a;Bl(b);return b;}
var AAT=F(U);
function AOO(){var a=new AAT();AEi(a);return a;}
function AEi(a){}
function AEu(a){var b;b=new UW;b.w$=a;Bl(b);G5(b.C,0,2048);b.E=1;return b;}
var W4=F(U);
function AOb(){var a=new W4();ADU(a);return a;}
function ADU(a){}
function AEQ(a){var b;b=new NU;b.wD=a;Bl(b);b.E=1;return b;}
var WK=F(U);
function AOP(){var a=new WK();AHV(a);return a;}
function AHV(a){}
function AMC(a){var b;b=new M_;b.xA=a;Bl(b);b.E=1;return b;}
var AAi=F(U);
function AN4(){var a=new AAi();AIx(a);return a;}
function AIx(a){}
function AB1(a){var b;b=new PJ;b.we=a;Bl(b);return b;}
var AAs=F(U);
function APx(){var a=new AAs();AGu(a);return a;}
function AGu(a){}
function AHp(a){var b;b=new LA;b.uP=a;Bl(b);b.E=1;return b;}
var Yf=F(U);
function AN7(){var a=new Yf();ACB(a);return a;}
function ACB(a){}
function AEY(a){var b;b=new LG;b.wG=a;Bl(b);b.E=1;return b;}
var Zh=F(U);
function AOU(){var a=new Zh();AD0(a);return a;}
function AD0(a){}
function AFW(a){var b;b=new MI;b.w7=a;Bl(b);b.E=1;return b;}
var ABu=F(U);
function APk(){var a=new ABu();AHu(a);return a;}
function AHu(a){}
function AHr(a){var b;b=new Oj;b.xm=a;Bl(b);b.E=1;return b;}
var AAp=F(U);
function APh(){var a=new AAp();AIO(a);return a;}
function AIO(a){}
function ALV(a){var b;b=new Oq;b.vS=a;Bl(b);return b;}
var YD=F(U);
function APu(){var a=new YD();ADV(a);return a;}
function ADV(a){}
function AJW(a){var b;b=new R8;b.wO=a;Bl(b);return b;}
var Ye=F(U);
function AN3(){var a=new Ye();AKw(a);return a;}
function AKw(a){}
function AIN(a){var b;b=new Rp;b.uT=a;Bl(b);b.E=1;return b;}
var ABO=F(U);
function AO9(){var a=new ABO();AGp(a);return a;}
function AGp(a){}
function AKF(a){var b;b=new LN;b.xJ=a;Bl(b);b.E=1;return b;}
var Ip=F(U);
function AOX(){var a=new Ip();AE4(a);return a;}
function AE4(a){}
function Zf(a){return Cg(BQ(BQ(BQ(C0(),97,122),65,90),48,57),95);}
var AAX=F(Ip);
function ANZ(){var a=new AAX();AGx(a);return a;}
function AGx(a){}
function AIA(a){var b;b=D3(Zf(a),1);b.E=1;return b;}
var Y2=F(JI);
function ANG(){var a=new Y2();AMj(a);return a;}
function AMj(a){}
function ADa(a){var b;b=D3(YM(a),1);b.E=1;return b;}
var Ya=F(IU);
function AOl(){var a=new Ya();AHh(a);return a;}
function AHh(a){}
function AF9(a){var b;b=D3(Zj(a),1);b.E=1;return b;}
function XS(){var a=this;U.call(a);a.pH=0;a.qk=0;}
function L(a,b){var c=new XS();AMz(c,a,b);return c;}
function AMz(a,b,c){a.pH=b;a.qk=c;}
function AHE(a){return BQ(C0(),a.pH,a.qk);}
var X7=F(U);
function AN1(){var a=new X7();AMS(a);return a;}
function AMS(a){}
function AMr(a){return BQ(BQ(C0(),65279,65279),65520,65533);}
function YR(){var a=this;U.call(a);a.lb=0;a.iP=0;a.od=0;}
function BE(a,b){var c=new YR();AEc(c,a,b);return c;}
function AOJ(a,b,c){var d=new YR();AMB(d,a,b,c);return d;}
function AEc(a,b,c){a.iP=c;a.lb=b;}
function AMB(a,b,c,d){a.od=d;a.iP=c;a.lb=b;}
function AFw(a){var b;b=APE(a.lb);if(a.od)G5(b.C,0,2048);b.E=a.iP;return b;}
function YY(){var a=this;U.call(a);a.k_=0;a.i3=0;a.mJ=0;}
function HL(a,b){var c=new YY();AEZ(c,a,b);return c;}
function AOx(a,b,c){var d=new YY();AB3(d,a,b,c);return d;}
function AEZ(a,b,c){a.i3=c;a.k_=b;}
function AB3(a,b,c,d){a.mJ=d;a.i3=c;a.k_=b;}
function AB2(a){var b;b=new QE;ZN(b,a.k_);if(a.mJ)G5(b.C,0,2048);b.E=a.i3;return b;}
var XT=F();
var Xq=F();
function YA(b){var c,d,e,f,g,h,i;c=AKO(ES(b));d=IK(c);e=Bv(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+IK(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=LZ(c);h=h+1|0;}return e;}
function Jp(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Mc(){var a=this;B.call(a);a.oI=0;a.qD=0;a.o1=null;}
function AFu(a,b,c){var d=new Mc();ALn(d,a,b,c);return d;}
function ALn(a,b,c,d){a.oI=b;a.qD=c;a.o1=d;}
function AAl(){var a=this;B.call(a);a.nv=null;a.pQ=0;}
function AKO(a){var b=new AAl();AED(b,a);return b;}
function AED(a,b){a.nv=b;}
var Yz=F();
function IK(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.nv.data;f=b.pQ;b.pQ=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+V(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function LZ(b){var c,d;c=IK(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function XB(){B.call(this);this.H5=null;}
var Oo=F();
var AS8=null;function Kk(b,c,d){PE(b,c,d,0);}
function PE(b,c,d,e){MZ(b,c,d,null,null,e);}
function MZ(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=Uj(c);i=X(h);j=X(h);k=X(h);l=Ch(b);c=b.v;if(c.data.length<i)b.v=XP(c,i);m=0;while(m<i){if(g&&m<l){n=4*X(h)|0;h.d1=h.d1+n|0;}else b.v.data[m]=Dk(O_(h,d,0));m=m+1|0;}IV(b);if(j)b.cC=AAr(ABv(h));Eg(b.c_);Eg(b.cP);o=b.c_;g=0;while(g<k){Dn(o,Di(X(h),X(h)),Di(X(h),X(h)));g=g+1|0;}p=b.c_;o=b.cP;q=M7(Tc(p));while(EG(q)){r=Vz(q);s=r.ch;p=r.cw;BU(AS8);r=B7(o,p);if(r===null){r=Bz();Dn(o,p,r);}Bu(r,s);}if(o.jC===null){p=new Ob;p.uf=o;o.jC=p;}p=o.jC;r=new P8;JH(r,
p.uf);while(EG(r)){J$(r);o=r.fp.cw;p=AQP;c=O(B,o.j);d=c.data;GX(o,c);X_(c,p);g=0;t=d.length;while(g<t){p=d[g];H_(o,g);o.ce.data[g]=p;g=g+1|0;}}Ps(h);if(e!==null&&f!==null){p=AIv(e,f);Nd(p);b.dG=AEf(p.j5,p.gK);b.cC=AAr(p.kG);}}
function Lz(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Uj(c);i=X(h);j=X(h);k=X(h)!=1?0:1;l=X(h);m=X(h);n=U3(b,i);o=U3(b,j);p=(G3(BS(b,n.b),n.a)).data[0].k;q=(G3(BS(b,o.b),o.a)).data[1].k;r=0;s=l-1|0;while(r<l){g=O_(h,d,i);if(!r)g=TM(p,g);if(r==s)g=TM(g,q);t=n.b+r|0;u=Dk(g);c=b.v.data;v=c[t];c[t]=u;if(!k&&Ic(v)==Ic(u)){t=0;while(t<Ic(v)){w=v.k.data[t];o=u.k.data[t];x=w.bK;if(x!=5&&x&&!o.bK){o.bK=x;o.bE=w.bE;}t=t+1|0;}}r=r+1|0;}if(k){if(m){w=ABv(h);v=IH(i,j,
(-1));MG(b.cC,v,w);}else if(e!==null&&f!==null){u=AIv(e,f);Nd(u);v=IH(i,j,(-1));MG(b.cC,v,u.kG);n=b.dG;n.ev=b.cC.cA.bX;n.dR=u.gK;}}Ps(h);}
function O_(b,c,d){var e,f,g,h,i,j,k,l;e=X(b);f=O(B_,e);g=f.data;h=0;while(h<e){i=X(b);j=X(b);k=X(b);l=X(b);g[h]=Du(DL(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AAd(){AS8=new Vb;}
function Tl(){var a=this;B.call(a);a.xL=null;a.ib=null;}
function AFd(a,b){var c;c=a.ib;b=b;a.ib=NQ(!c.lx&&!b.dJ?0:1);return 1;}
function Un(){var a=this;Q.call(a);a.m9=null;a.xf=null;}
function AFf(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b0^C5(a.m9,c):0;}
function Ul(){var a=this;Q.call(a);a.sH=null;a.tp=null;a.wT=null;}
function ACo(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b0^C5(a.sH,c):0;return a.tp.i(b)&&!d?1:0;}
function Ns(){var a=this;Q.call(a);a.hF=null;a.uY=null;}
function AHv(a,b){return a.T^C5(a.hF,b);}
function AF0(a){var b,c,d;b=new R;T(b);c=Gp(a.hF,0);while(c>=0){Hs(b,FJ(c));B0(b,124);c=Gp(a.hF,c+1|0);}d=b.D;if(d>0)Uc(b,d-1|0);return S(b);}
function Nz(){var a=this;Q.call(a);a.p8=null;a.wj=null;}
function AKt(a,b){return a.p8.i(b);}
function Nx(){var a=this;Q.call(a);a.iU=0;a.nY=null;a.jQ=null;}
function AKZ(a,b){return !(a.iU^C5(a.jQ.y,b))&&!(a.iU^a.jQ.dr^a.nY.i(b))?0:1;}
function Ny(){var a=this;Q.call(a);a.i2=0;a.s4=null;a.kN=null;}
function AHX(a,b){return !(a.i2^C5(a.kN.y,b))&&!(a.i2^a.kN.dr^a.s4.i(b))?1:0;}
function NC(){var a=this;Q.call(a);a.tX=0;a.tc=null;a.sZ=null;a.vm=null;}
function AEU(a,b){return a.tX^(!a.tc.i(b)&&!a.sZ.i(b)?0:1);}
function ND(){var a=this;Q.call(a);a.qg=0;a.pX=null;a.ph=null;a.xG=null;}
function ABU(a,b){return a.qg^(!a.pX.i(b)&&!a.ph.i(b)?0:1)?0:1;}
function NA(){var a=this;Q.call(a);a.o5=null;a.xI=null;}
function AF4(a,b){return CF(a.o5,b);}
function NB(){var a=this;Q.call(a);a.tm=null;a.vy=null;}
function AHZ(a,b){return CF(a.tm,b)?0:1;}
function NE(){var a=this;Q.call(a);a.qv=null;a.p0=0;a.sf=null;}
function AL6(a,b){return !CF(a.qv,b)&&!(a.p0^C5(a.sf.y,b))?0:1;}
function NF(){var a=this;Q.call(a);a.q8=null;a.ro=0;a.qR=null;}
function AEp(a,b){return !CF(a.q8,b)&&!(a.ro^C5(a.qR.y,b))?1:0;}
function Nr(){var a=this;Q.call(a);a.r6=0;a.s3=null;a.tB=null;a.u3=null;}
function AND(a,b){return !(a.r6^a.s3.i(b))&&!CF(a.tB,b)?0:1;}
function N5(){var a=this;Q.call(a);a.tx=0;a.l$=null;a.mP=null;a.vu=null;}
function AF8(a,b){return !(a.tx^a.l$.i(b))&&!CF(a.mP,b)?1:0;}
function Np(){var a=this;Q.call(a);a.ov=null;a.vA=null;}
function AEo(a,b){return CF(a.ov,b);}
function Nq(){var a=this;Q.call(a);a.oE=null;a.xC=null;}
function AFL(a,b){return CF(a.oE,b)?0:1;}
function Nv(){var a=this;Q.call(a);a.tT=null;a.qZ=0;a.uH=null;}
function AG3(a,b){return CF(a.tT,b)&&a.qZ^C5(a.uH.y,b)?1:0;}
function No(){var a=this;Q.call(a);a.rK=null;a.qi=0;a.qX=null;}
function ALI(a,b){return CF(a.rK,b)&&a.qi^C5(a.qX.y,b)?0:1;}
function Nt(){var a=this;Q.call(a);a.sj=0;a.m7=null;a.qd=null;a.vl=null;}
function ADq(a,b){return a.sj^a.m7.i(b)&&CF(a.qd,b)?1:0;}
function Nu(){var a=this;Q.call(a);a.rC=0;a.l0=null;a.r4=null;a.vE=null;}
function AJR(a,b){return a.rC^a.l0.i(b)&&CF(a.r4,b)?0:1;}
var Fk=F(Cl);
var ASj=null;var ASi=null;var AS9=null;function Rs(){Rs=Bg(Fk);ANk();}
function AKY(a,b){var c=new Fk();YI(c,a,b);return c;}
function YI(a,b,c){Rs();Do(a,b,c);}
function ANk(){var b;ASj=AKY(C(470),0);b=AKY(C(471),1);ASi=b;AS9=G(Fk,[ASj,b]);}
function Wd(){B.call(this);this.oV=null;}
var KD=F(0);
function Ro(){var a=this;B.call(a);a.vq=null;a.s6=null;a.hW=null;a.cf=null;a.hG=0;a.jI=0;}
function LE(a,b){var c,d,e;c=H(a.hW);if(b>=0&&b<=c){VG(a.cf,null,(-1),(-1));d=a.cf;d.ir=1;d.dN=b;c=d.gO;if(c<0)c=b;d.gO=c;b=a.s6.b4(b,a.hW,d);if(b==(-1))a.cf.c0=1;if(b>=0){d=a.cf;if(d.hX){e=d.di.data;if(e[0]==(-1)){c=d.dN;e[0]=c;e[1]=c;}d.gO=H2(d);return 1;}}a.cf.dN=(-1);return 0;}d=new BT;Br(d,DX(b));K(d);}
function ABt(a){return N1(a.cf,0);}
function Yb(a){return QQ(a.cf,0);}
function WV(a){return a.cf.h2;}
function Z0(){var a=this;B.call(a);a.ge=null;a.d1=0;}
function Uj(a){var b=new Z0();ACb(b,a);return b;}
function ACb(a,b){a.ge=b;a.d1=0;}
function X(a){var b,c;b=a.ge.data;c=a.d1;a.d1=c+1|0;return b[c];}
function Ps(a){var b,c,d,e;if(a.d1!=a.ge.data.length){b=D2();c=a.ge.data.length;d=a.d1;e=new R;T(e);J(Bj(J(Bj(J(e,C(238)),c),C(472)),d),C(473));CE(b,S(e));}}
function W5(){var a=this;B.call(a);a.j5=null;a.kG=null;a.gK=null;a.b$=null;a.i9=null;a.jP=null;a.fZ=null;a.kF=null;a.ky=null;}
function AIv(a,b){var c=new W5();AL_(c,a,b);return c;}
function AL_(a,b,c){a.b$=Uj(b);a.i9=c;}
function Nd(a){var b,c,d,e,f,g,h,i;b=X(a.b$);c=new JG;OF(c);a.gK=c;a.fZ=Bz();d=0;while(d<b){e=X(a.b$);f=X(a.b$);g=DL(a.i9,e,f);Dn(a.gK,g,Bz());Bu(a.fZ,g);d=d+1|0;}c=M7(Tc(a.gK));while(EG(c)){FW((Vz(c)).cw,Md(a));}d=X(a.b$);if(d==(-1))a.j5=null;else{a.jP=O(EP,d);c=new LI;h=a.b$;i=a.i9;g=a.fZ;c.cQ=h;c.qj=i;c.pA=g;a.kF=c;c=new P6;c.dp=h;c.sS=i;c.th=g;a.ky=c;a.j5=PG(a,null);}if(X(a.b$)!=(-1))a.kG=P3(a.b$,a.jP);}
function PG(a,b){var c,d,e,f,g,h,i,j,k;c=X(a.b$);d=X(a.b$);e=a.kF;f=X(e.cQ);g=Bz();h=0;while(h<f){Bu(g,LK(e));h=h+1|0;}a:{switch(d){case -1:i=new JD;i.fz=b;b=ARF;i.cb=b;i.dZ=b;i.dA=b;i.hw=b;i.fr=b;break a;case 0:i=ANK(b);break a;case 1:i=new Jc;Zr(i,b);FW(i.dA,g);break a;default:}b=new Df;i=new R;T(i);Bj(J(i,C(474)),d);Br(b,S(i));K(b);}i.dA=g;b=a.ky;d=X(b.dp);e=Bz();j=0;while(j<d){Bu(e,Fm(b));j=j+1|0;}i.dZ=e;i.hw=Md(a);d=X(a.b$);b=Bz();j=0;while(j<d){e=LK(a.kF);g=Fm(a.ky);f=X(a.b$);k=new OH;k.hA=e;k.ip=g;k.n9
=f;Bu(b,k);j=j+1|0;}i.fr=b;j=X(a.b$);i.rZ=j==(-1)?null:Bo(a.fZ,j);d=X(a.b$);b=Bz();j=0;while(j<d){Bu(b,PG(a,i));j=j+1|0;}i.cb=b;a.jP.data[c]=i;return i;}
function Md(a){var b,c,d,e;b=X(a.b$);c=Bz();d=0;while(d<b){e=X(a.b$);Bu(c,Bo(a.fZ,e));d=d+1|0;}return c;}
var R4=F();
var ASg=null;function AO1(){AO1=Bg(R4);ACQ();}
function ACQ(){var b,c;Rs();b=Bv((AS9.fU()).data.length);c=b.data;ASg=b;c[ASj.fM]=1;c[ASi.fM]=2;}
function Rx(){B.call(this);this.tQ=null;}
function AKh(a,b){var c,d,e,f,g;FO(a.tQ);c=ARp;d=XJ(C(475));if(!Kp()){b=new Bq;Br(b,C(252));KH(d,b);}else{e=$rt_globals.navigator.clipboard;f=ES(b);APb();b=AS$;g=f.data;g=b.decode(g);b=e.writeText(g);e=new SR;e.wK=c;c=ABM(d);b.then(Bi(e,"f"),Bi(c,"f"));}}
function VM(){B.call(this);this.lU=null;}
function KH(a,b){var c,d;c=a.lU;d=b.k3;b=new R;T(b);J(J(b,c),d);$rt_globals.console.info($rt_ustr(S(b)));}
var Vb=F();
var EB=F();
var AS_=null;var ATa=null;var ARF=null;var ATb=null;var ATc=null;var ATd=null;function Zt(){AS_=new TC;ATa=new TA;ARF=new TB;ATb=new Ty;ATc=new Tz;ATd=new Wc;}
var I3=F(Ec);
var TC=F(I3);
var Kc=F(Dv);
var TA=F(Kc);
var KG=F(D8);
function AEy(a){var b;b=new DR;W(b);K(b);}
function AIk(a,b){var c;c=new DR;W(c);K(c);}
function AHf(a,b){b=new DR;W(b);K(b);}
var TB=F(KG);
function AIp(a,b){var c;c=new BT;W(c);K(c);}
function AHA(a){return 0;}
function AE0(a){return ATb;}
function ACN(a){return 1;}
var Ty=F();
function ACw(a){return 0;}
function AJC(a){var b;b=new K$;W(b);K(b);}
function AKU(a){var b;b=new Df;W(b);K(b);}
var Ol=F(0);
var Tz=F();
var Wc=F();
var LV=F(FL);
function AFA(a,b,c,d){var e,f,g;e=0;f=d.r;a:{while(true){if(b>f){b=e;break a;}g=E5(d,a.P);C8(d,a.P,b);e=a.cD.c(b,c,d);if(e>=0)break;C8(d,a.P,g);b=b+1|0;}}return b;}
function ANt(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=E5(e,a.P);C8(e,a.P,c);f=a.cD.c(c,d,e);if(f>=0)break;C8(e,a.P,g);c=c+(-1)|0;}}return c;}
function AD_(a){return null;}
var K$=F(Bq);
function Qk(){B.call(this);this.rA=null;}
function AD8(a,b){LB(a.rA,b);}
var Gh=F();
var XQ=F(Gh);
var AAh=F(Gh);
var Xo=F(0);
function PN(){B.call(this);this.mE=null;}
function AB7(a,b){var c;c=a.mE;b=Et(b);Dj(c.oV,b);}
function Q1(){B.call(this);this.pK=null;}
function AIf(a,b){b.fK=a.pK.cA;}
function Q0(){B.call(this);this.sG=null;}
function AJ6(a,b){b.fz=a.sG.cA.bX;}
function M0(){var a=this;B.call(a);a.pN=null;a.pM=null;}
function M2(){B.call(this);this.sx=null;}
function Sj(){var a=this;B.call(a);a.v_=null;a.v$=null;a.v9=null;}
function T3(){var a=this;B.call(a);a.wr=null;a.ws=null;}
function S1(){Ec.call(this);this.p_=null;}
function M7(a){var b;b=new SP;JH(b,a.p_);return b;}
function Ob(){El.call(this);this.uf=null;}
function Tj(){var a=this;B.call(a);a.di=null;a.iz=null;a.kd=null;a.kj=null;a.n1=0;a.hX=0;a.cu=0;a.r=0;a.dN=0;a.h2=0;a.eP=0;a.c0=0;a.w2=0;a.gO=0;a.ir=0;}
function BD(a,b,c){a.iz.data[b]=c;}
function CZ(a,b){return a.iz.data[b];}
function H2(a){return QQ(a,0);}
function QQ(a,b){QC(a,b);return a.di.data[(b*2|0)+1|0];}
function C8(a,b,c){a.di.data[b*2|0]=c;}
function IE(a,b,c){a.di.data[(b*2|0)+1|0]=c;}
function E5(a,b){return a.di.data[b*2|0];}
function Hy(a,b){return a.di.data[(b*2|0)+1|0];}
function Z9(a){return N1(a,0);}
function N1(a,b){QC(a,b);return a.di.data[b*2|0];}
function LM(a,b){return a.kd.data[b];}
function DM(a,b,c){a.kd.data[b]=c;}
function QC(a,b){var c;if(!a.hX){c=new Df;W(c);K(c);}if(b>=0&&b<a.n1)return;c=new BT;Br(c,DX(b));K(c);}
function VG(a,b,c,d){a.hX=0;a.ir=2;GG(a.di,(-1));GG(a.iz,(-1));if(b!==null)a.kj=b;if(c>=0){a.cu=c;a.r=d;}a.dN=a.cu;}
function Yn(a){return a.ir;}
function Vj(){B.call(this);this.m$=null;}
function AEL(a,b){var c,d;c=a.m$;d=new Bq;Br(d,$rt_str(b.message));KH(c,d);}
function Nl(){B.call(this);this.nn=null;}
function AEt(a,b){b.fK=a.nn;}
function LI(){var a=this;B.call(a);a.cQ=null;a.qj=null;a.pA=null;}
function LK(a){var b,c,d,e,f,g,h,i;a:{b=X(a.cQ);switch(b){case 3:break;case 5:c=M5(a);d=Kr(a);b=X(a.cQ);e=X(a.cQ);f=X(a.cQ);g=Bz();h=0;while(h<f){Bu(g,Kr(a));h=h+1|0;}i=new KR;Z_(i,c,d,b);i.iF=g;i.lT=e;break a;default:c=new Df;d=new R;T(d);Bj(J(d,C(476)),b);Br(c,S(d));K(c);}i=AO7(M5(a),Kr(a),X(a.cQ));}return i;}
function M5(a){var b,c;b=X(a.cQ);c=X(a.cQ);return AFX(DL(a.qj,b,c),X(a.cQ));}
function Kr(a){var b;b=X(a.cQ);if(b==(-1))return null;return Bo(a.pA,b);}
function P6(){var a=this;B.call(a);a.dp=null;a.sS=null;a.th=null;}
function Fm(a){var b,c,d,e,f;a:{b:{b=X(a.dp);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Me(a);d=OR(a);b=X(a.dp);e=Rk(a);f=new HH;J0(f,c,d,2);f.md=b;f.fW=e;break a;case 4:c=Fm(a);d=Fm(a);f=new H1;J0(f,c.eq,c.eV,9);f.gM=c;f.fY=d;break a;case 5:f=AN5(Me(a),OR(a),X(a.dp));break a;case 9:c=Rk(a);f=new FA;d=!DO(c)&&Bo(c,0)!==null?(Bo(c,0)).eV:null;J0(f,null,null,7);f.fN=Bz();c=BL(c);while(BM(c)){e=BP(c);if(!(e instanceof FA))Bu(f.fN,e);else{e=e;FW(f.fN,e.fN);}}f.eV=d;break a;default:break b;}f
=null;break a;}c=new Df;d=new R;T(d);Bj(J(d,C(477)),b);Br(c,S(d));K(c);}return f;}
function Me(a){var b,c;b=X(a.dp);c=X(a.dp);return AFX(DL(a.sS,b,c),X(a.dp));}
function OR(a){var b;b=X(a.dp);if(b==(-1))return null;return Bo(a.th,b);}
function Rk(a){var b,c,d;b=X(a.dp);c=Bz();d=0;while(d<b){Bu(c,Fm(a));d=d+1|0;}return c;}
function L6(){var a=this;B.call(a);a.oA=null;a.oz=null;}
function AGd(a){var b,c;b=a.oA;c=a.oz;b=b.f0;H6(b,c,b.fc);}
function MJ(){var a=this;B.call(a);a.mK=null;a.mL=0;a.mM=0;a.mN=null;a.mG=0;a.mI=0;}
function AIz(a,b){var c,d,e,f,g,h,i,j;c=a.mK;d=a.mL;e=a.mM;f=a.mN;g=a.mG;h=a.mI;i=Cj(c.bh,5.0);d=Be((c.bh.cB.b-d|0)-i|0,Ba((i-d|0)-c.K.o.b|0,b.u.b));j=Be((c.bh.cB.a-e|0)-i|0,Ba((i-e|0)-c.K.o.a|0,b.u.a));Bn(f,d+g|0,j+h|0);JU(c,f,c.N.o);}
function T2(){var a=this;B.call(a);a.r_=null;a.sb=null;a.sa=null;a.r8=0;a.r7=0;a.r$=0;a.r9=0;a.sn=0;a.sm=0;a.so=0;a.sO=0;}
function AFY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.r_;d=a.sb;e=a.sa;f=a.r8;g=a.r7;h=a.r$;i=a.r9;j=a.sn;k=a.sm;l=a.so;m=a.sO;n=Cj(c.bh,5.0);o=c.N.q0();Cp(d,c.N.o);Cp(e,c.N.H);switch(f){case -1:f=Be(h+(b.u.b-g|0)|0,c.bh.cB.b-n|0);g=o.b;h=h+i|0;f=Ba(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Ba((i+b.u.b|0)-g|0,Ba(o.b,n-c.K.H.b|0));}b:{switch(j){case -1:f=Ba(n,Be(l+(b.u.a-k|0)|0,(c.bh.cB.a+c.K.o.a|0)-n|0));g=o.a;h=l+m|0;f=Ba(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Ba((m+b.u.a|0)-k|0,o.a);}JU(c,e,d);}
function B8(){Cl.call(this);this.k5=null;}
var ATe=null;var ATf=null;var ATg=null;var ATh=null;var ATi=null;var ATj=null;var ATk=null;var ATl=null;var ATm=null;var ATn=null;var ATo=null;var ATp=null;var ATq=null;var ATr=null;var ATs=null;var ASk=null;function X5(){X5=Bg(B8);AGX();}
function Dr(a,b,c){var d=new B8();R9(d,a,b,c);return d;}
function ALd(a,b,c,d){var e=new B8();AA1(e,a,b,c,d);return e;}
function R9(a,b,c,d){X5();Do(a,b,c);a.k5=G6(d,null);}
function AA1(a,b,c,d,e){X5();Do(a,b,c);a.k5=G6(d,e);}
function AGX(){var b;b=new B8;AAU();R9(b,C(200),0,AR4);ATe=b;ATf=Dr(C(201),1,N(C(478)));ATg=Dr(C(203),2,N(C(479)));ATh=Dr(C(205),3,N(C(480)));ATi=Dr(C(207),4,N(C(478)));ATj=Dr(C(208),5,DU(188,63,60));ATk=Dr(C(210),6,N(C(481)));ATl=Dr(C(212),7,N(C(482)));ATm=Dr(C(214),8,N(C(483)));ATn=ALd(C(216),9,AR4,DU(52,65,52));ATo=ALd(C(217),10,N(C(484)),N(C(485)));ATp=Dr(C(218),11,N(C(486)));ATq=Dr(C(220),12,N(C(487)));ATr=Dr(C(222),13,AR4);b=Dr(C(223),14,N(C(224)));ATs=b;ASk=G(B8,[ATe,ATf,ATg,ATh,ATi,ATj,ATk,ATl,ATm,ATn,
ATo,ATp,ATq,ATr,b]);}
var Dm=F(0);
var ASo=null;var ASp=null;var ASl=null;var ASm=null;var ASn=null;var ARI=null;var ARJ=null;var ASq=null;var ASr=null;function AIt(){AIt=Bg(Dm);AJl();}
function AJl(){ASo=N(C(488));ASp=N(C(489));ASl=N(C(193));ASm=N(C(490));ASn=N(C(228));ARI=N(C(488));ARJ=N(C(489));ASq=EX(118,121,122,128);ASr=DU(63,66,68);}
var CC=F(0);
var ASs=null;var ARM=null;var ASu=null;var ASt=null;var ASw=null;var ASv=null;var ASy=null;var ASx=null;var ASA=null;var ASz=null;var ASB=null;function AAF(){AAF=Bg(CC);AMH();}
function AMH(){ASs=G_(0);ARM=DU(8,8,8);ASu=N(C(491));ASt=DU(255,255,255);ASw=N(C(492));ASv=N(C(493));ASy=N(C(494));ASx=N(C(495));ASA=EX(205,205,205,153);ASz=EX(255,255,255,0);ASB=N(C(264));}
function Ca(){Cl.call(this);this.kb=null;}
var ATt=null;var ATu=null;var ATv=null;var ATw=null;var ATx=null;var ATy=null;var ATz=null;var ATA=null;var ATB=null;var ATC=null;var ATD=null;var ATE=null;var ATF=null;var ATG=null;var ATH=null;var ASC=null;function ZP(){ZP=Bg(Ca);AM7();}
function C_(a,b,c){var d=new Ca();P2(d,a,b,c);return d;}
function AMX(a,b,c,d){var e=new Ca();Xk(e,a,b,c,d);return e;}
function P2(a,b,c,d){ZP();Do(a,b,c);a.kb=G6(d,null);}
function Xk(a,b,c,d,e){ZP();Do(a,b,c);a.kb=G6(d,e);}
function AM7(){var b;b=new Ca;AAF();P2(b,C(200),0,ARM);ATt=b;ATu=C_(C(201),1,N(C(496)));ATv=C_(C(203),2,N(C(497)));ATw=C_(C(205),3,N(C(498)));ATx=C_(C(207),4,ARM);ATy=C_(C(208),5,N(C(499)));ATz=C_(C(210),6,N(C(486)));ATA=C_(C(212),7,N(C(500)));ATB=C_(C(214),8,N(C(501)));ATC=AMX(C(216),9,ARM,DU(237,235,252));ATD=AMX(C(217),10,N(C(484)),N(C(502)));ATE=C_(C(218),11,N(C(486)));ATF=C_(C(220),12,N(C(487)));ATG=C_(C(222),13,N(C(503)));b=C_(C(223),14,N(C(224)));ATH=b;ASC=G(Ca,[ATt,ATu,ATv,ATw,ATx,ATy,ATz,ATA,ATB,ATC,
ATD,ATE,ATF,ATG,b]);}
var C$=F(0);
var ASG=null;var ASH=null;var ASD=null;var ASE=null;var ASF=null;var ARN=null;var ARO=null;var ASI=null;var ASJ=null;function ACI(){ACI=Bg(C$);AEP();}
function AEP(){ASG=N(C(262));ASH=N(C(504));ASD=N(C(505));ASE=N(C(506));ASF=N(C(507));ARN=N(C(262));ARO=N(C(504));ASI=EX(205,205,205,153);ASJ=DU(247,248,250);}
function M3(){var a=this;B.call(a);a.ui=null;a.uj=0.0;}
function ACv(a){var b,c,d;b=a.ui;c=a.uj;b=b.f0.bw;d=b.c6;if(!b.b7)d.kT=c;else d.ls=c;GE(b.fg);}
var SP=F(Ev);
function Vz(a){J$(a);return a.fp;}
var P8=F(Ev);
function RI(){Q.call(this);this.wc=null;}
function AMb(a,b){return Ce(b)!=2?0:1;}
function LH(){Q.call(this);this.wl=null;}
function AC9(a,b){return Ce(b)!=1?0:1;}
function QO(){Q.call(this);this.vP=null;}
function ACT(a,b){return P7(b);}
function QN(){Q.call(this);this.vC=null;}
function AFv(a,b){return 0;}
function UW(){Q.call(this);this.w$=null;}
function AGT(a,b){return !Ce(b)?0:1;}
function NU(){Q.call(this);this.wD=null;}
function AMf(a,b){return Ce(b)!=9?0:1;}
function M_(){Q.call(this);this.xA=null;}
function AJm(a,b){return FE(b);}
function PJ(){Q.call(this);this.we=null;}
function AKy(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function LA(){Q.call(this);this.uP=null;}
function ANe(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FE(b);}return b;}
function LG(){Q.call(this);this.wG=null;}
function AEF(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FE(b);}return b;}
function MI(){Q.call(this);this.w7=null;}
function AMm(a,b){a:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Oj(){Q.call(this);this.xm=null;}
function AH$(a,b){return Iw(b);}
function Oq(){Q.call(this);this.vS=null;}
function AJ7(a,b){return Or(b);}
function R8(){Q.call(this);this.wO=null;}
function AL7(a,b){return Ce(b)!=3?0:1;}
function Rp(){Q.call(this);this.uT=null;}
function AMU(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=FE(b);}return b;}
function LN(){Q.call(this);this.xJ=null;}
function AEv(a,b){a:{b:{switch(Ce(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=FE(b);}return b;}
function K0(){Q.call(this);this.kB=0;}
function APE(a){var b=new K0();ZN(b,a);return b;}
function ZN(a,b){Bl(a);a.kB=b;}
function AJp(a,b){return a.T^(a.kB!=Ce(b&65535)?0:1);}
var QE=F(K0);
function ALh(a,b){return a.T^(!(a.kB>>Ce(b&65535)&1)?0:1);}
var SV=F(0);
var ASh=null;function AOy(){AOy=Bg(SV);AMR();}
function AMR(){ASh=N(C(488));}
function Rb(){B.call(this);this.pu=null;}
function AFO(a,b){b.fz=a.pu;}
function Vd(){B.call(this);this.mZ=null;}
function AFU(a,b){var c,d,e,f;c=a.mZ;b=Et(b);d=c.pN;c=c.pM;e=new VA;f=AKc(In(c));c=null;WO(e,ADH(b),c,f);Sf(d,e);}
function Ve(){var a=this;B.call(a);a.ol=null;a.om=null;}
function ADp(a,b){var c,d;c=a.ol;d=a.om;b.text().then(Bi(c,"f"),Bi(d,"f"));}
function N_(){var a=this;B.call(a);a.nF=null;a.nD=null;}
var YJ=F();
function SR(){B.call(this);this.wK=null;}
function AMW(a,b){}
function SN(){B.call(this);this.oF=null;}
function AHH(a,b){var c;c=a.oF;b=$rt_str(b.message);CE(c.sx,b);}
function LC(){B.call(this);this.uE=null;}
function AGi(a){Dq(a.uE);}
var VN=F(0);
var AS$=null;function APb(){APb=Bg(VN);AJ0();}
function AJ0(){AS$=new $rt_globals.TextDecoder("utf-16");}
function Qo(){B.call(this);this.sM=null;}
function AK4(a){var b,c;b=a.sM;c=b.nF;b=b.nD;c.x7(b.h$,b.ko,null);}
var AAf=F(0);
function Y5(){var a=this;B.call(a);a.BY=null;a.BW=null;a.B1=0.0;}
function TZ(){var a=this;B.call(a);a.it=null;a.gG=0;}
function MM(){B.call(this);this.rl=null;}
function ACP(a,b){return ML(I(a.rl,b.ba));}
var Xc=F();
$rt_packages([-1,"org",0,"sudu",1,"experiments"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bp",AP0(AH6),"eg",APZ(ADK)],Fb,0,B,[],0,3,0,0,0,LY,0,B,[],3,3,0,0,0,Lu,0,B,[],3,3,0,0,0,Us,0,B,[LY,Lu],0,3,0,0,0,XM,0,B,[],4,0,0,0,0,Xr,0,B,[],4,3,0,0,0,FM,0,B,[],0,3,0,0,0,DE,0,FM,[],0,3,0,0,0,Bq,0,DE,[],0,3,0,0,0,YZ,0,Bq,[],0,3,0,0,0,Cu,0,B,[],3,3,0,0,0,Ck,0,B,[],3,3,0,0,0,HR,0,B,[],3,3,0,0,0,Bw,0,B,[Cu,Ck,HR],0,3,0,FN,["bp",AP0(B1),"k7",APZ(JZ),"iN",AP0(AFy)],FH,0,FM,[],0,3,0,0,0,Gs,0,FH,[],0,3,0,0,0,YE,0,Gs,[],0,3,0,0,0,Ea,0,B,[Cu],1,3,0,0,0,Fz,0,Ea,[Ck],0,3,0,0,["bp",AP0(AM2),
"iN",AP0(AHo)],FB,0,B,[Cu,HR],0,0,0,0,["g0",AP0(ID),"eg",APZ(S)],G4,0,B,[],3,3,0,0,0,R,0,FB,[G4],0,3,0,0,["kQ",AP3(AHl),"jU",AP2(AEO),"eg",APZ(GK),"g0",AP0(AHq),"ll",AP1(AHS)],E9,0,Gs,[],0,3,0,0,0,ZO,0,E9,[],0,3,0,0,0,Ys,0,E9,[],0,3,0,0,0,R3,0,B,[],3,3,0,0,0,C3,0,B,[],3,3,0,0,0,NT,0,B,[],3,0,0,0,0,HD,0,B,[R3,C3,NT],1,3,0,0,["eG",APZ(K1)],Qs,0,HD,[],0,3,0,0,0,WR,0,B,[],0,3,0,0,0,W3,0,B,[],0,3,0,0,0,BG,0,B,[],3,3,0,0,0,BO,0,B,[BG],3,3,0,0,0,Pa,0,B,[BO],0,3,0,0,["R",AP0(AHc)],Pc,0,B,[BO],0,3,0,0,["R",AP0(AHt)],J7,
0,B,[],4,3,0,0,0,AAv,0,B,[],4,3,0,0,0,JN,0,B,[],3,3,0,0,0,Dv,0,B,[JN],1,3,0,0,0,DF,0,B,[],3,3,0,0,0,Jm,0,Dv,[DF,Cu],0,3,0,0,0,Yc,0,B,[],0,3,0,0,0,ABQ,0,B,[],4,3,0,0,0,Ht,0,B,[BG],3,3,0,0,0,Tu,0,B,[Ht],0,3,0,0,["R",AP0(AIU)],Gl,0,B,[],3,3,0,0,0,RG,0,B,[Gl],0,3,0,0,0,BT,0,Bq,[],0,3,0,0,0]);
$rt_metadata([Zx,0,B,[],4,3,0,0,0,FS,0,Bq,[],0,3,0,0,0,HJ,0,Bq,[],0,3,0,0,0,CM,0,B,[Ck],0,3,0,0,0,Lo,0,B,[BG],3,3,0,0,0,Rt,0,B,[Lo],3,3,0,0,0,DV,0,B,[BG],3,3,0,0,0,WW,0,B,[BG,Rt,DV],1,3,0,0,["Fw",APZ(AIQ),"Gf",AP0(ALo),"HO",AP0(AK_),"AG",AP0(AEr),"Fn",AP0(ACg),"yF",APZ(AEH),"Gs",AP1(ALi),"Gy",AP2(AG$),"Hk",APZ(AC7),"HY",APZ(AJN),"El",AP0(AL0),"BL",APZ(AIo),"Ip",AP0(AGI),"Dw",APZ(AIS),"CD",APZ(ANr),"H_",APZ(AHI),"yy",AP0(AC0),"GG",APZ(AM3),"EO",AP1(AGF),"Bu",AP1(AIg),"Gg",AP1(AMx),"FI",APZ(ACj),"G7",APZ(AGr),
"HA",AP0(AET),"D1",AP0(AFK),"Az",AP1(AGW),"C0",APZ(AHM),"Ha",AP0(AC$),"y0",APZ(AFJ),"Ib",APZ(AJ$),"Aj",AP0(AB5),"Du",AP0(ALQ),"H1",AP0(ADB),"Ch",APZ(ALT),"Ba",AP1(ADL),"F6",AP0(AJZ),"CN",APZ(AKD),"zq",AP1(AJj),"zu",AP1(AI2),"Ce",APZ(ALN),"HD",AP0(AM8),"Bl",AP2(AI5),"Ae",APZ(AEK),"Bx",AP1(AD5),"BE",APZ(ACJ),"FV",APZ(AMY),"Ei",APZ(AJi),"xQ",APZ(ACH),"Fk",AP1(AJk),"y1",AP0(AEz),"DZ",AP0(AF1),"z5",APZ(AKK)],Oi,0,B,[DV],3,3,0,0,0,Qm,0,B,[DV],3,3,0,0,0,Qa,0,B,[DV],3,3,0,0,0,R0,0,B,[DV],3,3,0,0,0,Vk,0,B,[DV],3,3,0,
0,0,SZ,0,B,[DV,Oi,Qm,Qa,R0,Vk],3,3,0,0,0,XI,0,B,[BG,SZ],1,3,0,0,["E0",AP1(AJn),"Hi",AP1(AHn),"Al",AP2(AGt),"Bi",AP0(ADf),"EI",AP2(AEX)],BI,0,Bq,[],0,3,0,0,0,Gm,0,BT,[],0,3,0,0,0,Gx,0,B,[],3,3,0,0,0,FK,0,B,[Gx,DF],0,0,0,0,["bp",AP0(AEx)],FT,0,FK,[],0,0,0,0,0,Mn,0,B,[BO],0,3,0,0,["R",AP0(AFD)],Mo,0,B,[BO],0,3,0,0,["R",AP0(AIi)],Y3,0,B,[BG],1,3,0,0,0,Y9,0,B,[BG],1,3,0,0,0,AAO,0,B,[BG],1,3,0,0,0,TN,0,B,[BG],3,3,0,0,0,Y0,0,B,[TN],1,3,0,0,["Hb",AP0(AGc),"Gx",APZ(AH3)],MK,0,B,[BO],0,3,0,0,["R",AP0(AJY)],Py,0,B,[],
3,3,0,0,0,NI,0,B,[Py],3,3,0,0,0,Ry,0,B,[NI],0,3,0,0,0,Eh,0,B,[],3,3,0,0,0,YO,0,B,[Eh],0,3,0,0,0,Bh,0,B,[],3,3,0,0,0,YP,0,B,[Bh],0,3,0,0,0,X1,0,B,[],0,3,0,0,0,PX,0,B,[Ht],0,3,0,0,["R",AP0(ACz)],PW,0,B,[BO],0,3,0,0,["R",AP0(ANw)],PY,0,B,[BO],0,3,0,0,["R",AP0(AMy)],Qg,0,B,[BG],3,3,0,0,0,TG,0,B,[Qg],0,3,0,0,["Dy",AP0(AGE)],TE,0,B,[Bh],0,3,0,0,0,Pg,0,B,[BG],3,3,0,0,0,TF,0,B,[Pg],0,3,0,0,["Hx",AP1(AE3)],AA3,0,B,[BG],1,3,0,0,0,B$,0,B,[BG],3,3,0,0,0,TD,0,B,[B$],0,3,0,0,["bU",AP0(AJ8)],Rc,0,B,[],0,3,0,0,0,K2,0,B,[],
3,3,0,0,0,RS,0,B,[K2],3,3,0,0,0]);
$rt_metadata([ST,0,B,[],3,3,0,0,0,FG,0,B,[RS,ST],1,3,0,0,0,Ir,0,FG,[],0,3,0,0,0,Yp,0,Ir,[],0,3,0,0,0,Fy,0,FG,[],1,3,0,0,0,Jv,0,Fy,[],0,3,0,0,["jj",AP2(AFk)],Ud,0,B,[],3,3,0,0,["d4",AP0(ABX)],Fr,0,B,[Ud],3,3,0,0,["d4",AP0(ABX),"kD",AP0(AHa)],El,0,B,[Fr],1,3,0,0,["d4",AP0(ABX),"kD",AP0(AHa),"dz",APZ(DO),"mQ",AP0(AK2)],Ju,0,B,[Fr],3,3,0,0,["d4",AP0(ABX),"kD",AP0(AHa)],Ib,0,B,[Ju],3,3,0,0,["d4",AP0(ABX),"kD",AP0(AHa)],D8,0,El,[Ib],1,3,0,0,["d4",AP0(ABX),"kD",AP0(AHa),"q_",AP0(AKo),"bS",APZ(BL),"rO",AP1(AJH),"lG",
AP1(ALK),"bp",AP0(AIE)],KP,0,D8,[],1,3,0,0,["d4",AP0(ABX),"kD",AP0(AHa)],Lv,0,B,[Fr],3,3,0,0,["d4",AP0(ABX),"kD",AP0(AHa)],VH,0,B,[Lv,Ju],3,3,0,0,["d4",AP0(ABX),"kD",AP0(AHa)],SS,0,KP,[VH],0,3,0,0,["d4",AP0(ABX),"kD",AP0(AHa)],VE,0,B,[JN],3,3,0,0,0,LX,0,B,[VE],3,3,0,0,0,N4,0,Dv,[DF,Cu,LX],0,3,0,0,0,AAY,0,B,[],4,3,0,0,0,Rg,0,B,[Eh],0,3,0,0,0,Rh,0,B,[BO],0,3,0,0,["R",AP0(ACi)],XV,0,B,[],0,3,0,0,0,JX,0,B,[],1,3,0,0,0,Tx,0,JX,[],0,3,0,0,0,KA,0,B,[C3],1,3,0,0,0,Ig,0,B,[Ck],1,3,0,0,0,K7,0,Ig,[],0,3,0,AFz,0,OO,0,B,
[],0,3,0,0,0,Ux,0,B,[B$],0,3,0,0,["bU",AP0(AJJ)],Uy,0,B,[B$],0,3,0,0,["bU",AP0(AJT)],Uz,0,B,[B$],0,3,0,0,["bU",AP0(AIm)],UA,0,B,[B$],0,3,0,0,["bU",AP0(AHP)],UB,0,B,[B$],0,3,0,0,["bU",AP0(AH_)],UC,0,B,[B$],0,3,0,0,["bU",AP0(AKg)],UD,0,B,[B$],0,3,0,0,["bU",AP0(AGs)],UE,0,B,[B$],0,3,0,0,["bU",AP0(ANl)],UF,0,B,[B$],0,3,0,0,["bU",AP0(AFI)],UG,0,B,[B$],0,3,0,0,["bU",AP0(ALb)],V0,0,B,[B$],0,3,0,0,["bU",AP0(AM0)],V1,0,B,[B$],0,3,0,0,["bU",AP0(AH2)],V2,0,B,[B$],0,3,0,0,["bU",AP0(AIq)],V3,0,B,[B$],0,3,0,0,["bU",AP0(AJ1)],Su,
0,B,[],3,3,0,0,0,SG,0,B,[Su],0,3,0,0,0,SF,0,B,[B$],0,3,0,0,["bU",AP0(AHe)],Lp,0,B,[],0,3,0,0,0,H9,0,B,[Gl],0,3,0,0,["tY",AP1(Ix)],ABg,0,B,[],0,3,0,0,0,DH,0,B,[],3,3,0,0,0]);
$rt_metadata([Ep,0,B,[DH],3,3,0,0,0,Fs,0,B,[],3,3,0,0,0,Hg,0,B,[],3,3,0,0,0,Lf,0,B,[DH],3,3,0,0,0,Jl,0,B,[],3,3,0,0,0,EV,0,B,[],3,3,0,0,0,IL,0,B,[EV],3,3,0,0,0,Pl,0,B,[C3],0,3,0,0,0,Bp,0,B,[],0,3,0,0,["bp",AP0(AG5)],UI,0,B,[],0,3,0,0,0,AAC,0,B,[],0,3,0,0,0,Xm,0,B,[],3,3,0,0,0,Pe,0,B,[],0,3,0,0,0,Ko,0,B,[],0,3,0,0,0,CB,0,Ko,[],0,3,0,0,0,AAV,0,CB,[],0,3,0,0,0,D$,0,CB,[],0,3,0,0,0,PR,0,CB,[],0,3,0,0,0,YT,0,D$,[],0,3,0,0,0,Fo,0,D$,[],0,3,0,0,0,M1,"Shaders$TextGray",2,Fo,[],0,3,0,0,0,ABw,"Shaders$TextClearType",
2,Fo,[],0,3,0,0,0,XK,0,D$,[],0,3,0,0,0,ZQ,0,CB,[],0,3,0,0,0,Xi,0,CB,[],0,3,0,0,0,QP,0,B,[BG],3,3,0,0,0,ABN,0,B,[QP],3,3,0,0,0,Pb,0,B,[C3],0,3,0,0,0,Pd,0,B,[],0,3,0,0,0,Cl,0,B,[Ck,Cu],1,3,0,0,0,F0,0,Cl,[],12,3,0,GH,0,J5,0,Fy,[],0,3,0,0,["jj",AP2(AG8)],DB,0,Cl,[],12,3,0,AMh,0,AAu,0,BI,[],0,3,0,0,0,TH,0,DE,[],0,3,0,0,0,XH,0,B,[],0,3,0,0,0,F4,0,Cl,[],12,0,0,AIj,0,K5,0,B,[BG],3,3,0,0,0,VC,0,B,[K5],0,3,0,0,["R",AP0(AKP)],VD,0,B,[K5],0,3,0,0,["R",AP0(ADC)],Gc,0,B,[],1,3,0,0,0,Q$,0,B,[],3,3,0,0,0,JS,0,Gc,[Ck,G4,HR,
Q$],1,3,0,0,0,YN,0,B,[],4,3,0,0,0,IO,0,Gc,[Ck],1,3,0,0,0,GR,0,B,[],0,3,0,AMk,0,I8,0,KA,[],1,3,0,0,0,NH,0,B,[],3,3,0,0,0,Oz,0,B,[NH],3,3,0,0,0,Tn,0,B,[],3,3,0,0,0]);
$rt_metadata([Wt,0,I8,[Oz,Tn],0,3,0,0,0,Zy,0,B,[],3,3,0,0,0,P5,0,B,[],0,3,0,0,0,QS,0,B,[B$],0,3,0,0,["bU",AP0(ADZ)],Y4,0,B,[BG],1,3,0,0,0,IW,0,JS,[],1,0,0,0,0,Qb,0,IW,[],0,0,0,0,0,JE,0,B,[],1,3,0,0,0,Kw,0,B,[],0,3,0,0,0,Qn,0,B,[Fs,Hg],0,0,0,0,["gF",AP0(AJP),"gg",AP2(AMq),"gz",AP1(AKE),"gD",AP1(AHy),"gC",AP2(AKW)],GM,0,B,[],3,3,0,0,["uA",APZ(AI7),"rU",APZ(AFB)],OQ,0,B,[],3,3,0,0,0,O3,0,B,[],3,0,0,0,0,Yi,0,B,[GM,Fs,OQ,O3],0,3,0,0,["rU",APZ(AFr),"uA",APZ(ACO),"gD",AP1(AII),"gz",AP1(ACc),"gg",AP2(ACs),"gF",AP0(AC8),
"jx",AP0(AMG)],Ow,0,B,[Ep],0,3,0,0,["cW",AP0(ADr)],Qp,0,B,[Ep],0,3,0,0,["cW",AP0(AFF)],Bc,0,B,[],3,3,0,0,0,Ou,0,B,[Bc],0,3,0,0,["m",AP0(AFN)],Ov,0,B,[Jl],0,3,0,0,0,MX,0,B,[IL],0,3,0,0,0,MY,0,B,[Hg],0,3,0,0,["gC",AP2(AHd)],MW,0,B,[Lf],0,3,0,0,["cW",AP0(Zi)],Mw,0,B,[Eh],0,3,0,0,["lL",AP0(AL8)],WC,0,B,[],3,3,0,0,0,UR,0,B,[],0,0,0,0,0,Gj,0,B,[],0,3,0,0,0,NY,0,Gj,[],0,3,0,0,0,AAJ,0,B,[],0,3,0,0,0,Lm,0,Gj,[],0,3,0,0,0,Sw,0,B,[BG],3,3,0,0,0,MC,0,B,[Sw],0,3,0,0,["HP",AP0(AHw)],S8,0,B,[Bc],0,3,0,0,["m",AP0(ALy)],U1,
0,IO,[],0,0,0,0,0,Xg,0,B,[],3,3,0,0,0,SJ,0,B,[],0,3,0,0,0,QV,0,B,[Ep],0,3,0,0,["cW",AP0(AGa)],QU,0,B,[Ep],0,3,0,0,["cW",AP0(AD3)],HO,0,B,[],3,3,0,0,0,Vh,0,B,[Fs,HO],0,3,0,0,0,T1,0,B,[HO,GM],0,3,0,0,["uA",APZ(AI7),"rU",APZ(AFB),"jx",AP0(AHU)],OB,0,B,[],0,3,0,0,0,JQ,0,B,[],0,3,0,0,0,VA,0,B,[],0,3,0,0,0,Vn,0,B,[],0,3,0,0,0,EK,0,B,[C3],0,0,0,0,0,ABs,0,B,[],0,3,0,0,0,X2,0,B,[C3],0,3,0,0,0,MR,0,B,[Bc],0,3,0,0,0,MQ,0,B,[Bc],0,3,0,0,["m",AP0(ADb)],MP,0,B,[Bc],0,3,0,0,["m",AP0(ACn)]]);
$rt_metadata([Te,0,B,[],0,0,0,0,0,MO,0,B,[Bh],0,3,0,0,["t",APZ(ACm)],MV,0,B,[Bh],0,3,0,0,["t",APZ(AFE)],MU,0,B,[Bh],0,3,0,0,["t",APZ(ANB)],MT,0,B,[Bh],0,3,0,0,["t",APZ(AHK)],MS,0,B,[Bh],0,3,0,0,["t",APZ(AJQ)],MN,0,B,[Bh],0,3,0,0,["t",APZ(AM5)],AAA,0,B,[],3,3,0,0,0,W6,0,B,[],0,3,0,0,0,B4,0,B,[],0,3,0,0,["bp",AP0(ANi)],Lj,0,B,[],3,3,0,0,0,O7,0,B,[Bh],0,3,0,0,["t",APZ(AGq)],O6,0,B,[Bh],0,3,0,0,["t",APZ(AB$)],J6,0,B,[],3,3,0,0,0,W9,0,D8,[DF,Cu,J6],0,3,0,0,["kD",AP0(AHa),"kC",AP0(Bo),"cr",APZ(AJt),"q_",AP0(Bu),"lG",
AP1(Qt),"lt",AP0(E6),"mQ",AP0(TV),"hi",APZ(GF),"rO",AP1(Xx),"d4",AP0(DN)],VZ,0,B,[],3,3,0,0,0,Vw,0,B,[],0,3,0,0,0,EE,0,B,[],0,3,0,0,0,I5,0,EE,[],0,3,0,0,0,RF,0,EE,[],0,3,0,0,0,O0,0,EE,[],0,3,0,0,0,F$,0,B,[],3,3,0,0,0,Rl,0,B,[],3,3,0,0,0,ON,0,B,[],3,0,0,0,0,ZG,0,B,[BG],1,3,0,0,0,Jd,0,B,[],4,3,0,AGV,0,QD,0,B,[Lj],0,3,0,0,0,AA4,0,B,[],0,3,0,0,0,SC,0,B,[],0,3,0,0,0,Qq,0,B,[],0,3,0,0,0,MD,0,B,[Bh],0,3,0,0,["t",APZ(AM6)],F_,0,B,[Ck],0,3,0,0,0,JJ,0,B,[],0,3,0,0,0,C1,0,B,[],0,3,0,0,0,Wg,0,Bq,[],0,3,0,0,0,T$,0,B,[],
3,3,0,0,0,Zo,0,B,[T$],0,3,0,0,0,SM,0,B,[],3,3,0,0,0,JP,0,B,[SM],0,3,0,0,0,Om,0,B,[],0,3,0,0,0,B_,0,B,[],0,3,0,0,0,JG,0,Jm,[],0,3,0,0,0,Qz,0,B,[],0,3,0,0,0,ABq,0,B,[Ck],0,3,0,0,["bp",AP0(ALf),"iN",AP0(ADR)],Ug,0,B,[Gl],0,3,0,0,["tY",AP1(AHN)],PL,0,B,[],0,3,0,0,["bp",AP0(ADF)],JB,0,JE,[],1,3,0,0,0,On,0,JB,[],0,3,0,0,0,SB,0,DE,[],0,3,0,0,0,Hd,0,B,[],0,3,0,0,0]);
$rt_metadata([HC,0,B,[],0,3,0,0,0,Xf,0,B,[],3,3,0,0,0,WA,0,B,[],0,3,0,0,0,Zp,0,B,[],3,3,0,0,0,ABA,0,B,[],0,3,0,0,0,Lc,0,B,[Gx,Cu],0,3,0,0,0,It,0,Lc,[],0,0,0,0,0,HQ,0,B4,[],0,3,0,0,0,CO,0,B,[],3,3,0,AFp,0,B6,0,Cl,[],12,3,0,Tf,0,HY,0,B,[],0,3,0,0,0,Hi,0,B,[],0,3,0,0,0,Zg,0,B,[],0,3,0,0,0,De,0,B,[],3,3,0,ACu,0,XZ,0,B,[],0,3,0,0,["bp",AP0(AK6)],OZ,0,B,[Ht],0,3,0,0,["R",AP0(ACL)],OX,0,B,[BO],0,3,0,0,["R",AP0(AMw)],OY,0,B,[BO],0,3,0,0,["R",AP0(AK8)],Hu,0,B,[],0,3,0,0,0,HT,0,B,[],4,3,0,0,0,Xp,0,B,[],0,3,0,0,0,CD,0,
B,[],3,3,0,AAU,0,Y1,0,B,[],0,3,0,0,0,Yj,0,B,[],4,3,0,0,0,Sy,0,B,[],0,0,0,0,0,AAE,0,B,[],0,3,0,0,["bp",AP0(AEm)],S3,0,B,[Bc],0,3,0,0,["m",AP0(ADg)],Is,0,B,[C3],0,3,0,0,["eG",APZ(ZV)],WI,0,B,[],0,3,0,0,0,S2,0,B,[],0,3,0,0,0,RE,0,B,[],0,3,0,0,0,Mh,0,B,[Bc],0,3,0,0,["m",AP0(AE6)],Xe,0,B,[],0,3,0,0,0,T7,0,B,[Ck],0,3,0,0,["bp",AP0(ACp),"k7",APZ(AKs),"iN",AP0(AJ5)],OE,0,B,[C3],0,3,0,0,0,M6,0,B,[Bc],0,3,0,0,0,Df,0,Bq,[],0,3,0,0,0,Se,0,FH,[],0,3,0,0,0,TW,0,B,[Bc],0,3,0,0,["m",AP0(AIJ)],Xt,0,B,[],3,3,0,0,0,ABp,0,B,[],
0,3,0,0,0,Ly,0,B,[Bc],0,3,0,0,["m",AP0(ABW)],OM,0,B,[Bc],0,3,0,0,0,Q4,0,B,[Bc],0,3,0,0,["m",AP0(AE5)],Q3,0,B,[Bc],0,3,0,0,["m",AP0(AMn)],Eu,0,B,[],3,3,0,0,0,Ms,0,B,[Eu],0,0,0,0,["ca",APZ(BM),"bL",APZ(BP),"j7",APZ(PZ)],Yr,0,B,[BG],4,3,0,0,0,Rv,0,B,[EV],0,3,0,0,0,AAe,0,B,[Eh],0,3,0,0,0]);
$rt_metadata([Lx,0,B,[Bc],0,3,0,0,["m",AP0(ALk)],L3,0,B,[DH],0,3,0,0,0,TX,0,B,[],0,3,0,0,0,Rz,0,Dv,[DF,Cu],0,3,0,0,0,TS,0,B,[],0,3,0,0,0,TL,0,B,[],0,3,0,0,0,SH,0,B,[],0,3,0,0,0,DR,0,Bq,[],0,3,0,0,0,MB,0,B,[],0,3,0,0,0,Sa,0,B,[Bc],0,3,0,0,["m",AP0(AH7)],Sb,0,B,[Bc],0,3,0,0,["m",AP0(AJG)],AAW,0,B,[],0,3,0,0,0,RQ,0,B,[],0,0,0,0,0,Xj,0,B,[],3,3,0,0,0,PA,0,B,[K2],3,3,0,0,0,Mt,0,B,[PA],3,3,0,0,0,Gd,0,B,[Mt],1,3,0,0,0,Q_,0,Gd,[],0,3,0,0,0,Pr,0,B,[],3,3,0,0,0,Sk,0,B,[],0,3,0,0,0,Qc,0,B,[Bc],0,3,0,0,0,GT,0,FK,[],0,0,
0,0,0,Gb,0,Bq,[],0,3,0,0,0,Qj,0,B,[Bc],0,3,0,0,["m",AP0(AL5)],Mm,0,B,[Bc],0,3,0,0,["m",AP0(AHD)],Ui,0,B,[Bc],0,3,0,0,["m",AP0(AMP)],O4,0,B,[Bc],0,3,0,0,["m",AP0(ADt)],Vv,0,B,[BO],0,3,0,0,["R",AP0(AK1)],Vu,0,B,[BO],0,3,0,0,["R",AP0(AEE)],UQ,0,B,[BO],0,3,0,0,["R",AP0(AF6)],UP,0,B,[BO],0,3,0,0,["R",AP0(AGN)],WS,0,B,[Bc],0,3,0,0,0,Vq,0,B,[B$],0,3,0,0,["bU",AP0(AFV)],Jb,0,B,[],0,3,0,0,0,Xv,0,B,[],0,3,0,0,0,ABL,0,B,[],0,3,0,0,0,Vf,0,B,[Bh],0,3,0,0,["t",APZ(ACU)],Vg,0,B,[Bh],0,3,0,0,["t",APZ(AGv)],EP,0,B,[],0,3,0,
0,0,VY,0,B,[Bc],0,3,0,0,["m",AP0(AFZ)],JD,0,EP,[],0,3,0,0,0,Jc,0,EP,[],0,3,0,0,0,Ue,0,B,[Bc],0,3,0,0,["m",AP0(ACY)],OH,0,B,[],0,3,0,0,0,NP,0,B,[Bc],0,3,0,0,["m",AP0(AIn)],Pp,0,B,[DH],0,3,0,0,["cW",AP0(ANC)],VX,0,DR,[],0,3,0,0,0,PM,0,Bq,[],0,3,0,0,0,Uk,0,Bq,[],0,3,0,0,0,Od,0,B,[Bc],0,3,0,0,["m",AP0(AJD)]]);
$rt_metadata([ABF,0,B,[Bc],0,3,0,0,0,UM,0,B,[],0,3,0,0,0,Ph,0,B,[Bh],0,3,0,0,["t",APZ(ANE)],TR,0,B,[Bh],0,3,0,0,0,O9,0,B,[Pr],0,3,0,0,0,Ex,0,B,[C3],0,3,0,0,["eG",APZ(AKu),"q0",APZ(ZK),"kM",AP2(Qh),"jD",AP0(AMc),"nU",AP0(AHT),"nA",AP0(AMI),"pg",AP1(AKC),"gg",AP2(AGy),"gz",AP1(ADJ),"gD",AP1(AID),"gF",AP0(AMp),"gC",AP2(AKr)],Ie,0,Ex,[],0,3,0,0,0,Pm,0,Ie,[GM],0,3,0,0,["uA",APZ(AI7),"rU",APZ(AFB),"eG",APZ(AMo),"pg",AP1(AES),"nA",AP0(AJ2),"nU",AP0(ALm),"jx",AP0(ALC)],O$,0,B,[Bh],0,3,0,0,0,OG,0,Ex,[],0,3,0,0,["eG",
APZ(ALj),"kM",AP2(AF5),"jD",AP0(AKH),"gg",AP2(ALO),"gz",AP1(ALl),"gD",AP1(AI3),"gF",AP0(AIK),"gC",AP2(AFm),"q0",APZ(AM1)],F1,0,B,[],0,3,0,0,0,NX,0,B,[Fr],3,3,0,0,["d4",AP0(ABX),"kD",AP0(AHa)],Ec,0,El,[NX],1,3,0,0,["d4",AP0(ABX),"kD",AP0(AHa)],Oa,0,Ec,[],0,0,0,0,["kD",AP0(AHa)],Li,0,B,[Bc],0,3,0,0,["m",AP0(AFg)],Ti,0,B,[Bc],0,3,0,0,["m",AP0(AHL)],H8,0,B,[],0,3,0,0,["bp",AP0(Zv)],KR,0,H8,[],0,3,0,0,["bp",AP0(ADs)],D9,0,B,[],0,3,0,0,["bp",AP0(W$)],FA,0,D9,[],0,3,0,0,0,HH,0,D9,[],0,3,0,0,["bp",AP0(AMt)],H1,0,D9,
[],0,3,0,0,["bp",AP0(ACG)],Yh,0,Gd,[],0,3,0,0,0,QJ,0,B,[Bh],0,3,0,0,["t",APZ(AGD)],QK,0,B,[Bh],0,3,0,0,["t",APZ(AD6)],QH,0,B,[Bh],0,3,0,0,["t",APZ(ACV)],QI,0,B,[Bh],0,3,0,0,["t",APZ(AGz)],PQ,0,B,[Bh],0,3,0,0,["t",APZ(AKm)],PP,0,B,[Bh],0,3,0,0,["t",APZ(AJa)],PO,0,B,[Bh],0,3,0,0,["t",APZ(ANs)],N0,0,B,[Bh],0,3,0,0,["t",APZ(AI8)],O8,0,B,[],3,3,0,0,0,X$,0,B,[Bh],0,3,0,0,["t",APZ(ADT)],Hw,0,B,[],0,3,0,0,0,Qi,0,B,[],3,3,0,0,0,WM,0,B,[Qi],0,3,0,0,0,TJ,0,Ex,[],0,3,0,0,0,Sp,0,B,[F$],0,3,0,0,["lE",AP1(AMF)],UH,0,BT,[],
0,3,0,0,0,Dh,0,B,[],0,3,0,0,0,L$,0,B,[Bh],0,3,0,0,["t",APZ(AG7)],L_,0,B,[Bh],0,3,0,0,["t",APZ(ALW)],L9,0,B,[Bh],0,3,0,0,["t",APZ(ABV)],UO,0,B,[Bh],0,3,0,0,["t",APZ(AHR)],UN,0,B,[Bh],0,3,0,0,["t",APZ(AKG)],NV,0,B,[EV],0,3,0,0,["lz",APZ(AEI)],Re,0,B,[Bh],0,3,0,0,["t",APZ(AGL)],Rf,0,B,[Bh],0,3,0,0,["t",APZ(ALE)],VW,0,B,[Bh],0,3,0,0,["t",APZ(AB9)],VR,0,B,[Bh],0,3,0,0,["t",APZ(AGO)]]);
$rt_metadata([VS,0,B,[Bh],0,3,0,0,["t",APZ(AMT)],VT,0,B,[Bh],0,3,0,0,["t",APZ(AH5)],VU,0,B,[Bh],0,3,0,0,["t",APZ(AGf)],Lw,0,B,[EV],0,3,0,0,["lz",APZ(ALR)],J1,0,B,[],3,3,0,0,0,Vm,0,B,[J1],0,3,0,0,0,Nh,0,B,[Bc],0,3,0,0,["m",AP0(ACE)],Ng,0,B,[Bc],0,3,0,0,["m",AP0(ACZ)],RV,0,B,[F$],0,3,0,0,["lE",AP1(ADw)],O5,0,B,[BO],0,3,0,0,["R",AP0(AER)],ABm,0,B,[Ck],0,3,0,0,["bp",AP0(AJb)],LW,0,B,[Bc],0,3,0,0,["m",AP0(AHJ)],V8,0,B,[Bc],0,3,0,0,["m",AP0(ANz)],HS,0,B,[BG],3,3,0,0,0,LF,0,B,[HS],0,3,0,0,["ql",APZ(AGR)],Ln,0,B,[HS],
0,3,0,0,["ql",APZ(ABZ)],TY,0,B,[EV],0,3,0,0,["lz",APZ(ANb)],SL,0,B,[J1],0,3,0,0,0,Vt,0,B,[BO],0,3,0,0,["R",AP0(AGl)],Ev,0,B,[],0,0,0,0,0,RC,0,Ev,[Eu],0,0,0,0,0,Yo,0,B,[BG],1,3,0,0,0,Xh,0,B,[Bc],0,0,0,0,0,P4,0,B,[Cu],4,3,0,0,0,Rj,0,B,[],3,3,0,0,0,Z5,0,B,[],0,3,0,0,0,Vp,0,Ea,[Ck],0,3,0,0,0,E3,0,B,[],0,0,0,0,0,GV,0,B,[],4,3,0,0,0,Tw,0,B,[],0,3,0,0,0,FU,0,B,[],3,3,0,0,0,R5,0,B,[FU],0,3,0,0,["h4",AP2(AIs)],R6,0,B,[FU],0,3,0,0,["h4",AP2(AGm)],Ha,0,B,[Cu,Ck],0,3,0,0,0,IF,0,B,[],3,3,0,0,0,QF,0,B,[IF],0,3,0,0,0,NG,0,
B,[IF],3,3,0,0,0,Y6,0,B,[NG],0,3,0,0,0,Q8,0,B,[FU],0,3,0,0,["h4",AP2(AI9)],Q7,0,B,[DH],0,3,0,0,["cW",AP0(AMD)],Q6,0,B,[DH],0,3,0,0,["cW",AP0(AKb)],Q9,0,B,[FU],0,3,0,0,["h4",AP2(AIF)],By,0,B,[],1,0,0,0,["b4",AP2(GQ),"b9",AP3(G0),"gQ",APZ(ADE),"I",AP0(ALZ),"bH",AP0(ALY),"eS",APZ(AMM),"dS",APZ(H5)],Td,0,B,[],3,3,0,0,0,T0,0,B,[Td],0,3,0,0,0,QW,0,Ea,[Ck],0,3,0,0,0,V9,0,B,[Bc],0,3,0,0,["m",AP0(AJc)],V$,0,B,[Bc],0,3,0,0,["m",AP0(AFx)],Pt,0,B,[Bc],0,3,0,0,["m",AP0(AIX)],Cw,0,By,[],0,0,0,K4,["c",AP2(AC3),"A",AP0(ADo)]]);
$rt_metadata([FV,0,B,[],0,0,0,0,0,HK,0,BI,[],0,3,0,0,0,Sr,0,B,[],0,3,0,0,0,Vc,0,B,[BO],0,3,0,0,["R",AP0(AJO)],Zs,0,B,[BG],3,3,0,0,0,Sv,0,B,[BO],0,3,0,0,["R",AP0(AJv)],QB,0,Cw,[],0,0,0,0,["c",AP2(ACy),"A",AP0(AKM)],VJ,0,Cw,[],0,0,0,0,["c",AP2(AEe)],OJ,0,Cw,[],0,0,0,0,["c",AP2(ADA)],RD,0,Cw,[],0,0,0,0,["c",AP2(ACF),"A",AP0(AJE)],E1,0,Cw,[],0,0,0,0,["c",AP2(AMd)],BV,0,By,[],1,0,0,0,["c",AP2(ANh),"bM",APZ(ALt),"A",AP0(AGY)],AAR,0,BV,[],0,0,0,0,["bf",AP1(AK5),"b4",AP2(AFl),"b9",AP3(AD9),"A",AP0(ACC)],BN,0,By,[],
0,0,0,0,["c",AP2(AF2),"I",AP0(AJx),"bH",AP0(AHB),"A",AP0(AJ4),"dS",APZ(AD4)],H0,0,BN,[],0,0,0,0,["c",AP2(AJh),"A",AP0(AKn)],Dp,0,H0,[],0,0,0,0,["c",AP2(AEC),"I",AP0(AJ_)],LD,0,Dp,[],0,0,0,0,["c",AP2(AJs),"A",AP0(AL4)],Ub,0,Dp,[],0,0,0,0,["c",AP2(ADk),"A",AP0(ALx)],P9,0,Dp,[],0,0,0,0,["c",AP2(AD1),"A",AP0(ANx)],RZ,0,Dp,[],0,0,0,0,["c",AP2(ACd),"A",AP0(AKB)],FL,0,BN,[],0,0,0,0,["c",AP2(ACr),"b4",AP2(AHW),"b9",AP3(AKQ),"bH",AP0(AHx),"eS",APZ(AJA),"dS",APZ(AMQ)],FY,0,B,[],1,0,0,0,0,Q,0,FY,[],1,0,0,NJ,["cX",APZ(ADm),
"en",APZ(ACS),"h9",APZ(ALq),"f$",APZ(AMK)],XC,0,Q,[],0,0,0,0,["i",AP0(CF),"cX",APZ(CA),"en",APZ(AFh),"h9",APZ(ALP),"eg",APZ(AIL),"f$",APZ(AFs)],Id,0,Bq,[],0,3,0,0,0,DD,0,By,[],1,0,0,0,["bH",AP0(AKR),"A",AP0(AL$),"dS",APZ(AId)],CH,0,DD,[],0,0,0,0,["c",AP2(ACf)],EH,0,CH,[],0,0,0,0,["c",AP2(AC6)],Cx,0,DD,[],0,0,0,0,["c",AP2(ACq)],D7,0,CH,[],0,0,0,0,["c",AP2(AH1),"I",AP0(ANA)],Uo,0,CH,[],0,0,0,0,["c",AP2(ANa),"b4",AP2(AIG)],U,0,B,[],1,0,0,0,0,CT,0,BI,[],0,3,0,0,0,LQ,0,FY,[DF],0,0,0,0,["eg",APZ(AIP)],Nf,0,By,[],
0,0,0,0,["c",AP2(AHi),"A",AP0(AJw)],U7,0,B,[DF,Cu],0,3,0,0,0,LJ,0,BN,[],0,0,0,0,0,Pj,0,BN,[],0,0,0,0,["c",AP2(AC1),"I",AP0(AJf),"A",AP0(ADG),"bH",AP0(ADl)],Db,0,BN,[],0,0,0,0,["c",AP2(AE$),"i",AP0(AFH),"bH",AP0(ACX),"I",AP0(ALg),"A",AP0(AFj)],Ia,0,Db,[],0,0,0,0,["i",AP0(AGZ)],Xs,0,BV,[],0,0,0,0,["bf",AP1(AHj)],DQ,0,BV,[],0,0,0,0,["bf",AP1(Lk),"bH",AP0(AJz)],NK,0,BN,[],0,0,0,0,["I",AP0(AH0),"c",AP2(AB6),"bH",AP0(ADx),"A",AP0(ALS)],D0,0,BV,[],0,0,0,0,["bM",APZ(AG6),"bf",AP1(AGb),"b4",AP2(AE8),"b9",AP3(AHb),"bH",
AP0(ALL)],ABk,0,BV,[],0,0,0,0,["bf",AP1(AB0)],Wv,0,BV,[],0,0,0,0,["bf",AP1(ACk)],EM,0,BN,[],0,0,0,0,["I",AP0(AMO),"c",AP2(AJg),"bH",AP0(AHk),"A",AP0(AKa)],Vs,0,EM,[],0,0,0,0,0,Sc,0,EM,[],0,0,0,0,0,Wh,0,Cx,[],0,0,0,0,["c",AP2(AEl)]]);
$rt_metadata([OA,0,Cx,[],0,0,0,0,["c",AP2(AIu)],Fd,0,Cx,[],0,0,0,0,["c",AP2(ALe),"I",AP0(AMi)],Of,0,Fd,[],0,0,0,0,["c",AP2(AG9),"I",AP0(AIT)],EL,0,Cx,[],0,0,0,0,["c",AP2(ANu)],L0,0,EL,[],0,0,0,0,["c",AP2(AGA)],Qu,0,Cx,[],0,0,0,0,["c",AP2(AMZ)],Pu,0,Fd,[],0,0,0,0,["c",AP2(ADI)],S5,0,EL,[],0,0,0,0,["c",AP2(ACK)],Qv,0,DD,[],0,0,0,0,["c",AP2(ANj),"b4",AP2(ALr)],Nn,0,DD,[],0,0,0,0,["c",AP2(AJB),"b4",AP2(AB_)],Ej,0,B,[],1,0,0,0,0,Wi,0,CH,[],0,0,0,0,["c",AP2(ACM)],Uh,0,D7,[],0,0,0,0,["c",AP2(AIr)],N2,0,EH,[],0,0,0,
0,["c",AP2(AKS)],Po,0,CH,[],0,0,0,0,["c",AP2(AJu)],So,0,D7,[],0,0,0,0,["c",AP2(ACW)],P$,0,EH,[],0,0,0,0,["c",AP2(AK7)],Jf,0,By,[],4,0,0,0,["c",AP2(AHz),"A",AP0(AGM)],X3,0,By,[],0,0,0,0,["c",AP2(ADi),"A",AP0(ADv)],Ni,0,By,[],0,0,0,0,["c",AP2(AG1),"A",AP0(ANq)],Va,0,By,[],4,0,0,0,["c",AP2(AJX),"A",AP0(AEa)],UL,0,By,[],0,0,0,0,["c",AP2(AJe),"A",AP0(ABY)],Ma,0,By,[],0,0,0,0,["c",AP2(AD2),"A",AP0(AFT)],AA$,0,BN,[],0,0,0,0,["c",AP2(AM4),"I",AP0(ADz),"gQ",APZ(AI0),"A",AP0(ADy)],XA,0,BN,[],4,0,0,0,["c",AP2(AI$),"I",
AP0(AKJ),"gQ",APZ(ABT),"A",AP0(ANg)],AA0,0,By,[],4,0,0,0,["c",AP2(AHm),"A",AP0(AFP)],Zq,0,By,[],0,0,0,0,["c",AP2(AJd),"A",AP0(AFC)],Wr,0,By,[],0,0,0,0,["c",AP2(AGC),"A",AP0(AEd)],Gf,0,BN,[],0,0,0,0,["c",AP2(ACR),"I",AP0(AJ9),"A",AP0(AKp)],AA6,0,Gf,[],0,0,0,0,["c",AP2(AEj),"b4",AP2(AL2),"b9",AP3(ACA),"bH",AP0(AIl)],YG,0,Gf,[],0,0,0,0,["c",AP2(AHQ)],Ne,0,FB,[G4],0,3,0,0,["kQ",AP3(AFt),"jU",AP2(ADn),"g0",AP0(ADP),"ll",AP1(ALs)],Qx,0,BV,[],0,0,0,0,["bf",AP1(AEA),"b4",AP2(ADd),"b9",AP3(AFS),"bH",AP0(AGn)],Wq,0,BV,
[],0,0,0,0,["bf",AP1(AHY)],L5,0,BV,[],0,0,0,0,["bf",AP1(AKV)],Ge,0,B,[],4,0,0,AKz,0,Lt,0,BV,[],0,0,0,0,["bf",AP1(AK0)],JM,0,BN,[],0,0,0,0,["I",AP0(AJr),"c",AP2(AEb),"b4",AP2(AGk),"b9",AP3(AEG),"bH",AP0(ACx),"A",AP0(ALz)],J2,0,BN,[],0,0,0,0,["I",AP0(ADO),"c",AP2(ACe),"b4",AP2(AJK),"b9",AP3(AKT),"bH",AP0(AEB),"A",AP0(AJS)],Dw,0,BV,[],0,0,0,0,["bf",AP1(AKq),"b4",AP2(AIM),"b9",AP3(ADN),"bH",AP0(AKf)],Tq,0,Ej,[],0,0,0,0,["gH",AP0(ADY),"rF",AP1(AKl)],Tr,0,Ej,[],0,0,0,0,["gH",AP0(AK9),"rF",AP1(AME)],AAb,0,B,[],0,0,
0,0,0,WP,0,B,[],0,0,0,0,0,JI,0,U,[],0,0,0,0,["x",APZ(YM)],IU,0,U,[],0,0,0,0,["x",APZ(Zj)],Z7,0,U,[],0,0,0,0,["x",APZ(AKL)],AAB,0,U,[],0,0,0,0,["x",APZ(ALB)],AAD,0,U,[],0,0,0,0,["x",APZ(AE_)],JC,0,U,[],0,0,0,0,["x",APZ(XE)]]);
$rt_metadata([Kd,0,JC,[],0,0,0,0,["x",APZ(Yl)],ABI,0,U,[],0,0,0,0,["x",APZ(AGj)],Lg,0,Kd,[],0,0,0,0,["x",APZ(Wo)],YX,0,Lg,[],0,0,0,0,["x",APZ(AIe)],Ze,0,U,[],0,0,0,0,["x",APZ(AEw)],XX,0,U,[],0,0,0,0,["x",APZ(AIb)],XN,0,U,[],0,0,0,0,["x",APZ(AMJ)],AAH,0,U,[],0,0,0,0,["x",APZ(AIW)],ABS,0,U,[],0,0,0,0,["x",APZ(AB8)],AAc,0,U,[],0,0,0,0,["x",APZ(AGH)],ZZ,0,U,[],0,0,0,0,["x",APZ(AKv)],AAT,0,U,[],0,0,0,0,["x",APZ(AEu)],W4,0,U,[],0,0,0,0,["x",APZ(AEQ)],WK,0,U,[],0,0,0,0,["x",APZ(AMC)],AAi,0,U,[],0,0,0,0,["x",APZ(AB1)],AAs,
0,U,[],0,0,0,0,["x",APZ(AHp)],Yf,0,U,[],0,0,0,0,["x",APZ(AEY)],Zh,0,U,[],0,0,0,0,["x",APZ(AFW)],ABu,0,U,[],0,0,0,0,["x",APZ(AHr)],AAp,0,U,[],0,0,0,0,["x",APZ(ALV)],YD,0,U,[],0,0,0,0,["x",APZ(AJW)],Ye,0,U,[],0,0,0,0,["x",APZ(AIN)],ABO,0,U,[],0,0,0,0,["x",APZ(AKF)],Ip,0,U,[],0,0,0,0,["x",APZ(Zf)],AAX,0,Ip,[],0,0,0,0,["x",APZ(AIA)],Y2,0,JI,[],0,0,0,0,["x",APZ(ADa)],Ya,0,IU,[],0,0,0,0,["x",APZ(AF9)],XS,0,U,[],0,0,0,0,["x",APZ(AHE)],X7,0,U,[],0,0,0,0,["x",APZ(AMr)],YR,0,U,[],0,0,0,0,["x",APZ(AFw)],YY,0,U,[],0,0,
0,0,["x",APZ(AB2)],XT,0,B,[],4,0,0,0,0,Xq,0,B,[],4,3,0,0,0,Mc,0,B,[],0,3,0,0,0,AAl,0,B,[],0,3,0,0,0,Yz,0,B,[],4,3,0,0,0,XB,0,B,[DH],0,3,0,0,0,Oo,0,B,[],1,3,0,0,0,Tl,0,B,[DH],0,0,0,0,["cW",AP0(AFd)],Un,0,Q,[],0,0,0,0,["i",AP0(AFf)],Ul,0,Q,[],0,0,0,0,["i",AP0(ACo)],Ns,0,Q,[],0,0,0,0,["i",AP0(AHv),"eg",APZ(AF0)],Nz,0,Q,[],0,0,0,0,["i",AP0(AKt)],Nx,0,Q,[],0,0,0,0,["i",AP0(AKZ)],Ny,0,Q,[],0,0,0,0,["i",AP0(AHX)],NC,0,Q,[],0,0,0,0,["i",AP0(AEU)],ND,0,Q,[],0,0,0,0,["i",AP0(ABU)],NA,0,Q,[],0,0,0,0,["i",AP0(AF4)],NB,
0,Q,[],0,0,0,0,["i",AP0(AHZ)],NE,0,Q,[],0,0,0,0,["i",AP0(AL6)]]);
$rt_metadata([NF,0,Q,[],0,0,0,0,["i",AP0(AEp)],Nr,0,Q,[],0,0,0,0,["i",AP0(AND)],N5,0,Q,[],0,0,0,0,["i",AP0(AF8)],Np,0,Q,[],0,0,0,0,["i",AP0(AEo)],Nq,0,Q,[],0,0,0,0,["i",AP0(AFL)],Nv,0,Q,[],0,0,0,0,["i",AP0(AG3)],No,0,Q,[],0,0,0,0,["i",AP0(ALI)],Nt,0,Q,[],0,0,0,0,["i",AP0(ADq)],Nu,0,Q,[],0,0,0,0,["i",AP0(AJR)],Fk,0,Cl,[],12,0,0,Rs,0,Wd,0,B,[Bc],0,3,0,0,0,KD,0,B,[],3,3,0,0,0,Ro,0,B,[KD],4,3,0,0,0,Z0,0,B,[],0,3,0,0,0,W5,0,B,[],0,3,0,0,0,R4,0,B,[],32,0,0,AO1,0,Rx,0,B,[Bc],0,3,0,0,["m",AP0(AKh)],VM,0,B,[Bc],0,3,
0,0,0,Vb,0,B,[Eh],0,3,0,0,0,EB,0,B,[],0,3,0,0,0,I3,0,Ec,[],1,0,0,0,["d4",AP0(ABX),"kD",AP0(AHa)],TC,0,I3,[],0,0,0,0,["d4",AP0(ABX),"kD",AP0(AHa)],Kc,0,Dv,[],1,0,0,0,0,TA,0,Kc,[],0,0,0,0,0,KG,0,D8,[J6],1,0,0,0,["d4",AP0(ABX),"hi",APZ(AEy),"lt",AP0(AIk),"kD",AP0(AHf)],TB,0,KG,[],0,0,0,0,["d4",AP0(ABX),"kC",AP0(AIp),"cr",APZ(AHA),"bS",APZ(AE0),"dz",APZ(ACN)],Ty,0,B,[Eu],0,0,0,0,["ca",APZ(ACw),"bL",APZ(AJC),"j7",APZ(AKU)],Ol,0,B,[Eu],3,3,0,0,0,Tz,0,B,[Ol],0,0,0,0,0,Wc,0,B,[Gl],0,3,0,0,0,LV,0,FL,[],0,0,0,0,["b4",
AP2(AFA),"b9",AP3(ANt),"eS",APZ(AD_)],K$,0,Bq,[],0,3,0,0,0,Qk,0,B,[Bc],0,3,0,0,["m",AP0(AD8)],Gh,0,B,[BG],1,3,0,0,0,XQ,0,Gh,[],1,3,0,0,0,AAh,0,Gh,[],1,3,0,0,0,Xo,0,B,[],3,3,0,0,0,PN,0,B,[BO],0,3,0,0,["R",AP0(AB7)],Q1,0,B,[Bc],0,3,0,0,["m",AP0(AIf)],Q0,0,B,[Bc],0,3,0,0,["m",AP0(AJ6)],M0,0,B,[Bc],0,3,0,0,0,M2,0,B,[Bc],0,3,0,0,0,Sj,0,B,[Bc],0,3,0,0,0,T3,0,B,[Bc],0,3,0,0,0,S1,0,Ec,[],0,0,0,0,["d4",AP0(ABX),"kD",AP0(AHa)],Ob,0,El,[],0,0,0,0,["d4",AP0(ABX),"kD",AP0(AHa)],Tj,0,B,[KD],0,0,0,0,0,Vj,0,B,[BO],0,3,0,0,
["R",AP0(AEL)],Nl,0,B,[Bc],0,3,0,0,["m",AP0(AEt)],LI,0,B,[],0,3,0,0,0]);
$rt_metadata([P6,0,B,[],0,3,0,0,0,L6,0,B,[Bh],0,3,0,0,["t",APZ(AGd)],MJ,0,B,[Bc],0,3,0,0,["m",AP0(AIz)],T2,0,B,[Bc],0,3,0,0,["m",AP0(AFY)],B8,0,Cl,[],12,3,0,X5,0,Dm,0,B,[],3,3,0,AIt,0,CC,0,B,[],3,3,0,AAF,0,Ca,0,Cl,[],12,3,0,ZP,0,C$,0,B,[],3,3,0,ACI,0,M3,0,B,[Bh],0,3,0,0,["t",APZ(ACv)],SP,0,Ev,[Eu],0,0,0,0,0,P8,0,Ev,[Eu],0,0,0,0,0,RI,0,Q,[],0,0,0,0,["i",AP0(AMb)],LH,0,Q,[],0,0,0,0,["i",AP0(AC9)],QO,0,Q,[],0,0,0,0,["i",AP0(ACT)],QN,0,Q,[],0,0,0,0,["i",AP0(AFv)],UW,0,Q,[],0,0,0,0,["i",AP0(AGT)],NU,0,Q,[],0,0,0,
0,["i",AP0(AMf)],M_,0,Q,[],0,0,0,0,["i",AP0(AJm)],PJ,0,Q,[],0,0,0,0,["i",AP0(AKy)],LA,0,Q,[],0,0,0,0,["i",AP0(ANe)],LG,0,Q,[],0,0,0,0,["i",AP0(AEF)],MI,0,Q,[],0,0,0,0,["i",AP0(AMm)],Oj,0,Q,[],0,0,0,0,["i",AP0(AH$)],Oq,0,Q,[],0,0,0,0,["i",AP0(AJ7)],R8,0,Q,[],0,0,0,0,["i",AP0(AL7)],Rp,0,Q,[],0,0,0,0,["i",AP0(AMU)],LN,0,Q,[],0,0,0,0,["i",AP0(AEv)],K0,0,Q,[],0,0,0,0,["i",AP0(AJp)],QE,0,K0,[],0,0,0,0,["i",AP0(ALh)],SV,0,B,[],3,3,0,AOy,0,Rb,0,B,[Bc],0,3,0,0,["m",AP0(AFO)],Vd,0,B,[BO],0,3,0,0,["R",AP0(AFU)],Ve,0,B,
[BO],0,3,0,0,["R",AP0(ADp)],N_,0,B,[Bh],0,3,0,0,0,YJ,0,B,[BG],1,3,0,0,0,SR,0,B,[BO],0,3,0,0,["R",AP0(AMW)],SN,0,B,[BO],0,3,0,0,["R",AP0(AHH)],LC,0,B,[Bh],0,3,0,0,["t",APZ(AGi)],VN,0,B,[],3,3,0,APb,0,Qo,0,B,[HS],0,3,0,0,["ql",APZ(AK4)],AAf,0,B,[],3,3,0,0,0,Y5,0,B,[F$],0,3,0,0,0,TZ,0,B,[],0,3,0,0,0,MM,0,B,[Eh],0,3,0,0,["lL",AP0(ACP)],Xc,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.Lf=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","codeEdit","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","null",
"false","true","Either src or dest is null","no such element with id = codeEdit","FATAL: WebGL is not enabled in the browser","fileList","Illegal argument javaObject instanceof ","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  outColor = texture(sDiffuse, textureUV);\n}",
"#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}",
"#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uTextPow;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main("
+") {\n            // D2D and JsCanvas(alpha=true) comparison:\n            //    - rgb is different\n            //    - alpha is identical\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = pow(t, uTextPow.x);\n            outColor = mix(uBgColor, uColor, text);\n          }","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","italic","normal","oblique","UTF-8","onPaste: item.type = ",", item.kind = ","pixel shader error: ",
"vertex shader error: ","----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}",": set powCache = ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBgColor;\nuniform sampler2D sDiffuse;\nuniform vec2 uTextPow;\nin vec2 textureUV;\nvoid main() {\n  vec3 textRGB = texture(sDiffuse, textureUV).rgb;\n  vec3 textRGBp = vec3(\n    pow(textRGB.x, uTextPow.x),\n    pow(textRGB.y, uTextPow.x),\n    pow(textRGB.z, uTextPow.x));\n  vec3 mixColor = mix(uBgColor.rgb, uColor.rgb, textRGBp);\n  // if (dot(textRGB, textRGB) == 0.0) outColor = uBgColor; else\n  outColo"
+"r = vec4(textRGB * 0.0 + mixColor * 1.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uBaseline;\nuniform vec4 uScaleHExp;\nin vec2 outScreenPos;\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  float sX = uScaleHExp.x, sY = uScaleHExp.y;\n  float H = uSc"
+"aleHExp.z;\n  float E = uScaleHExp.w;\n  float arg = (pt.x - uBaseline.x) * sX;\n  float sinA = sin(arg);\n  float vDist = abs(sinA * sY - uBaseline.y + pt.y);\n  float k = sqrt(1. + (1. - sinA * sinA) * sX * sX * sY * sY * 0.5);\n  float v = vDist / (H * k);\n  float alpha = pow(1. - clamp(v + .5, 0.0, 1.0), E);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","POS2","vPos","TEX2","vTex","BYTE","FLOAT","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ",
"Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#484A4A","#294436","#385570","#283541","request in progress ","fetch model ","respText1","clicked ","ns-resize","ew-resize","...","Usages of ","Consolas","  ","Set editor font to: ",", ascent+descent = ",", lineHeight = ",", caretHeight = ","topBase(font, lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","text","{","{}","(",
"()","[","[]","<","<>","\"","\"\"","\'","\'\'","java","JavaProxy.parseViewport","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","cpp","activity","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","parser >","open ...","font pow >","Development >","trying to display with unknown screen size and dpr",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js","js",".activity",
"mermaid","/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncFullParseFile","asyncParseFile","asyncParseFirstLines","/Model::parseFullFile","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","/Model::iterativeParsing","asyncIterativeParsing","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","\\n",", ","The last char in dst ","Segoe UI","#BBBBBB","#BCBEC4","#313438","#214283","#2B2D30","#373B39",
"#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","#A9B7C6","#344134","#40332B","#323232","/","nwse-resize","nesw-resize","toolbar size is unknown","/Viewport parsed in ","Illegal language: ","Expected "," ints to write, but "," written","/Model::onFileIterativeParsed","Int",
"Iter","VP","Resolve","Rep","No definition or usages","/First lines parsed in ","/File structure parsed in ","/Resolved in ","readClipboardText error: ","navigator.clipboard is undefined","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","#606366","#2B2B2B","#A4A3A3","#616161","#303C47","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","Verdana","Current Version: ","Last Parsed Version: ",
"Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B",
"IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue",
"KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A",
"SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths",
"CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials",
"Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","DEF","DECL"," ints to read, but "," read","Unknown scope type: ","writeClipboardText error: ","Unexpected type: ","Unexpected ref node type: ","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","#3C3F41","#4B6EAF","#787878","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4",
"#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808"]);
Bw.prototype.toString=function(){return $rt_ustr(this);};
Bw.prototype.valueOf=Bw.prototype.toString;B.prototype.toString=function(){return $rt_ustr(ADK(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var ATI=Long_add;var Jg=Long_sub;var AIH=Long_mul;var ATJ=Long_div;var ATK=Long_rem;var ATL=Long_or;var Wj=Long_and;var ATM=Long_xor;var ATN=Long_shl;var ATO=Long_shr;var APr=Long_shru;var ATP=Long_compare;var AEV=Long_eq;var ATQ=Long_ne;var AOa=Long_lt;var ATR=Long_le;var ATS=Long_gt;var AN9=Long_ge;var ATT=Long_not;var AOT=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AHO);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=Pa.prototype;c.f=c.R;c=Pc.prototype;c.f=c.R;c=Tu.prototype;c.f=c.R;c=WW.prototype;c.createEntityReference=c.AG;c.getElementById=c.El;c.createTextNode=c.D1;c.hasChildNodes=c.Ce;c.querySelectorAll=c.Aj;c.removeChild=c.F6;c.cloneNode=c.yy;c.createComment=c.H1;c.insertBefore=c.Ba;c.getElementsByTagNameNS=c.Gs;c.hasAttributes=c.Dw;c.normalize=c.Ib;c.hasChildNodesJS=c.HY;c.getElementsByTagName=c.Ha;c.appendChild=c.y1;c.createAttributeNS=c.EO;c.dispatchEvent=c.HA;c.replaceChild=c.zu;c.createElementNS
=c.Bx;c.createCDATASection=c.Gf;c.querySelector=c.Du;c.createElement=c.Fn;c.isSupported=c.Gg;c.importNode=c.Bu;c.removeEventListener=c.Bl;c.createAttribute=c.HD;c.createDocumentFragment=c.xQ;c.createProcessingInstruction=c.Az;c.addEventListener=c.Fk;Object.defineProperty(c,"nodeName",{get:c.y0});Object.defineProperty(c,"documentElement",{get:c.C0});Object.defineProperty(c,"childNodes",{get:c.FV});Object.defineProperty(c,"prefix",{get:c.BE,set:c.Ip});Object.defineProperty(c,"implementation",{get:c.GG});Object.defineProperty(c,
"textContent",{get:c.H_,set:c.DZ});Object.defineProperty(c,"parentNode",{get:c.Ei});Object.defineProperty(c,"nextSibling",{get:c.CN});Object.defineProperty(c,"nodeType",{get:c.FI});Object.defineProperty(c,"doctype",{get:c.CD});Object.defineProperty(c,"localName",{get:c.G7});Object.defineProperty(c,"nodeValue",{get:c.Ch,set:c.HO});Object.defineProperty(c,"firstChild",{get:c.Hk});Object.defineProperty(c,"lastChild",{get:c.Fw});Object.defineProperty(c,"previousSibling",{get:c.yF});Object.defineProperty(c,"namespaceURI",
{get:c.z5});Object.defineProperty(c,"attributes",{get:c.BL});Object.defineProperty(c,"ownerDocument",{get:c.Ae});c=XI.prototype;c.removeEventListener=c.Al;c.dispatchEvent=c.Bi;c.addEventListener=c.EI;c=Mn.prototype;c.f=c.R;c=Mo.prototype;c.f=c.R;c=Y0.prototype;c.get=c.Hb;Object.defineProperty(c,"length",{get:c.Gx});c=MK.prototype;c.f=c.R;c=PX.prototype;c.f=c.R;c=PW.prototype;c.f=c.R;c=PY.prototype;c.f=c.R;c=TG.prototype;c.onAnimationFrame=c.Dy;c=TF.prototype;c.f=c.Hx;c=TD.prototype;c.handleEvent=c.bU;c=Rh.prototype;c.f
=c.R;c=Ux.prototype;c.handleEvent=c.bU;c=Uy.prototype;c.handleEvent=c.bU;c=Uz.prototype;c.handleEvent=c.bU;c=UA.prototype;c.handleEvent=c.bU;c=UB.prototype;c.handleEvent=c.bU;c=UC.prototype;c.handleEvent=c.bU;c=UD.prototype;c.handleEvent=c.bU;c=UE.prototype;c.handleEvent=c.bU;c=UF.prototype;c.handleEvent=c.bU;c=UG.prototype;c.handleEvent=c.bU;c=V0.prototype;c.handleEvent=c.bU;c=V1.prototype;c.handleEvent=c.bU;c=V2.prototype;c.handleEvent=c.bU;c=V3.prototype;c.handleEvent=c.bU;c=SF.prototype;c.handleEvent=c.bU;c
=VC.prototype;c.f=c.R;c=VD.prototype;c.f=c.R;c=QS.prototype;c.handleEvent=c.bU;c=MC.prototype;c.accept=c.HP;c=OZ.prototype;c.f=c.R;c=OX.prototype;c.f=c.R;c=OY.prototype;c.f=c.R;c=Vv.prototype;c.f=c.R;c=Vu.prototype;c.f=c.R;c=UQ.prototype;c.f=c.R;c=UP.prototype;c.f=c.R;c=Vq.prototype;c.handleEvent=c.bU;c=O5.prototype;c.f=c.R;c=LF.prototype;c.onTimer=c.ql;c=Ln.prototype;c.onTimer=c.ql;c=Vt.prototype;c.f=c.R;c=Vc.prototype;c.f=c.R;c=Sv.prototype;c.f=c.R;c=PN.prototype;c.f=c.R;c=Vj.prototype;c.f=c.R;c=Vd.prototype;c.f
=c.R;c=Ve.prototype;c.f=c.R;c=SR.prototype;c.f=c.R;c=SN.prototype;c.f=c.R;c=Qo.prototype;c.onTimer=c.ql;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);