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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.dH=f;}
function $rt_cls(cls){return Gd(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return JJ(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.B.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return Jz(t);}
function $rt_throwableCause(t){return JC(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Kr());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return Ks(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var JV=$rt_compare;var Kt=$rt_nullCheck;var O=$rt_cls;var S=$rt_createArray;var CA=$rt_isInstance;var Ku=$rt_nativeThread;var Kv=$rt_suspending;var Kw=$rt_resuming;var Kx=$rt_invalidPointer;var B=$rt_s;var Bc=$rt_eraseClinit;var Gb=$rt_imul;var Jc=$rt_wrapException;var Ky=$rt_checkBounds;var Kz=$rt_checkUpperBound;var KA=$rt_checkLowerBound;var KB=$rt_wrapFunction0;var KC=$rt_wrapFunction1;var KD=$rt_wrapFunction2;var KE=$rt_wrapFunction3;var KF=$rt_wrapFunction4;var E=$rt_classWithoutFields;var Io
=$rt_createArrayFromData;var J6=$rt_createCharArrayFromData;var KG=$rt_createByteArrayFromData;var KH=$rt_createShortArrayFromData;var KI=$rt_createIntArrayFromData;var KJ=$rt_createBooleanArrayFromData;var J8=$rt_createFloatArrayFromData;var KK=$rt_createDoubleArrayFromData;var KL=$rt_createLongArrayFromData;var KM=$rt_createBooleanArray;var Fe=$rt_createByteArray;var KN=$rt_createShortArray;var Bw=$rt_createCharArray;var Ki=$rt_createIntArray;var KO=$rt_createLongArray;var Hp=$rt_createFloatArray;var KP=$rt_createDoubleArray;var JV
=$rt_compare;var KQ=$rt_castToClass;var KR=$rt_castToInterface;var KS=Long_toNumber;var KT=Long_fromInt;var KU=Long_fromNumber;var KV=Long_create;var KW=Long_ZERO;var KX=Long_hi;var Hj=Long_lo;
function C(){this.$id$=0;}
function KY(){var a=new C();DE(a);return a;}
function DE(a){}
function Cb(a){return Gd(a.constructor);}
function IW(a){var b,c,d,e,f,g,h,i,j,k,l;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;if(!d)e=B(0);else{if(!d)f=32;else{g=0;f=d>>>16|0;if(f)g=16;else f=d;h=f>>>8|0;if(!h)h=f;else g=g|8;i=h>>>4|0;if(!i)i=h;else g=g|4;f=i>>>2|0;if(!f)f=i;else g=g|2;if(f>>>1|0)g=g|1;f=(32-g|0)-1|0;}j=(((32-f|0)+4|0)-1|0)/4|0;k=Bw(j);l=k.data;j=(j-1|0)*4|0;f=0;while(j>=0){i=f+1|0;l[f]=C_((d>>>j|0)&15,16);j=j-4|0;f=i;}e=JJ(k);}b=X();K(K(b,B(1)),e);return W(b);}
function Jo(a){var b,c,d;if(!CA(a,De)&&a.constructor.$meta.item===null){b=new Dw;U(b);J(b);}b=Hx(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var Gv=E();
function Kp(b){var c,d,e,f,g,h,i,j,k,l,m;FS();F8();G0();GL();G_();FM();Gy();c=new $rt_globals.Array();d=new DD;e=new FB;f=new FD;g="canvasDiv";h=new Fy;i=new C3;Ev(i);h.dv=i;i=new C3;Ev(i);h.du=i;j=new Fd;i=null;DE(j);j.ea=i;j.bn=KZ;h.cL=j;i=new Dm;i.cO=j;h.df=i;h.bB=c;k=c.length;l=0;while(l<k){i=h.bB[l];m=new DK;m.dk=h;m.dj=l;j=Bk(m,"f");i.onmessage=j;i=c[l];j=GH();i.postMessage(j);l=l+1|0;}h.bx=0;h.dg=Ki(k);c=new Fm;c.dC=d;d.cw=c;c=new Fn;c.cv=d;d.dF=c;c=new Fk;c.b9=d;d.cu=c;i=new Fl;i.dp=d;d.ct=new $rt_globals.ResizeObserver(Bk(i,
"f"));d.m=null;d.U=1;d.dW=1;d.bO=g;d.eE=h;h=(BT()).createElement("canvas");c=0;h.tabIndex=c;j=h.style;j.setProperty("width","100%");j.setProperty("height","100%");j.setProperty("outline","none");d.o=h;i=h.getContext("2d");d.ce=i;c="copy";i.globalCompositeOperation=c;if(K0===null){j=new $rt_globals.OffscreenCanvas(256,256);m=I2(!!0,!!0,!!1,!!1);m=j.getContext("webgl2",m);if(m!==null){c=new Cj;FQ(c,m,new DZ,Ho(),2.25,0.625);c.d9=JU();c.w=j;c.dO=j.width;c.bw=c.w.height;K0=c;}c=new D1;j.addEventListener("webglcontextlost",
Bk(c,"handleEvent"));i=new D3;j.addEventListener("webglcontextrestored",Bk(i,"handleEvent"));}c=K0;d.G=c;if(c!==null){FY(d,g);d.bI=J7(d.o,d.dF);Hm(d.ct,d.o);j=$rt_globals.window;i=d.cu;j.addEventListener("resize",Bk(i,"handleEvent"));}if(!FX(d,e))FP(f);GZ(d);}
var DS=E(0);
var Dx=E(0);
function D2(){var a=this;C.call(a);a.bt=null;a.E=null;}
function Gd(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new D2;c.E=b;d=c;b.classObject=d;}return c;}
function B9(a){return a.E.$meta.primitive?1:0;}
function Cq(a){return Gd(a.E.$meta.item);}
var GU=E();
function Bk(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Bj(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var GG=E();
function Hx(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Gg(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Gg(d[e],c))return 1;e=e+1|0;}return 0;}
function BY(){var a=this;C.call(a);a.dD=null;a.dy=null;a.bJ=0;a.bZ=0;}
function K1(a){var b=new BY();Z(b,a);return b;}
function Z(a,b){a.bJ=1;a.bZ=1;a.dD=b;}
function HM(a){return a;}
function Jz(a){return a.dD;}
function JC(a){var b;b=a.dy;if(b===a)b=null;return b;}
var Bz=E(BY);
function K2(){var a=new Bz();U(a);return a;}
function U(a){a.bJ=1;a.bZ=1;}
var P=E(Bz);
function Ks(a){var b=new P();IC(b,a);return b;}
function IC(a,b){Z(a,b);}
var GI=E(P);
var Bu=E(0);
var Br=E(0);
var Cd=E(0);
function Bt(){var a=this;C.call(a);a.B=null;a.S=0;}
var K3=null;var K4=null;var K5=null;function G4(){G4=Bc(Bt);H$();}
function JJ(a){var b=new Bt();F1(b,a);return b;}
function Kd(a,b,c){var d=new Bt();FE(d,a,b,c);return d;}
function F1(a,b){G4();FE(a,b,0,b.data.length);}
function FE(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;G4();e=Bw(d);a.B=e;if(b===null){f=new Cs;Z(f,B(2));J(f);}if(c>=0&&d>=0&&(c+d|0)<=C1(b)&&(0+d|0)<=C1(e)){a:{b:{c:{if(b!==e){g=Cq(Cb(b));f=Cq(Cb(e));if(g!==null&&f!==null){if(g===f)break c;if(!B9(g)&&!B9(f)){h=b;i=0;j=c;while(i<d){k=h.data;l=j+1|0;m=k[j];n=f.E;if(!(m!==null&&!(typeof m.constructor.$meta==='undefined'?1:0)&&Gg(m.constructor,n)?1:0)){C7(b,c,e,0,i);g=new B$;U(g);J(g);}i=i+1|0;j=l;}C7(b,c,e,0,d);break a;}if(!B9(g))break b;if(B9(f))break c;else break b;}g
=new B$;U(g);J(g);}}C7(b,c,e,0,d);break a;}g=new B$;U(g);J(g);}return;}g=new Bf;U(g);J(g);}
function Bx(a,b){var c,d;if(b>=0){c=a.B.data;if(b<c.length)return c[b];}d=new C0;U(d);J(d);}
function Bh(a){return a.B.data.length;}
function E1(a){return a.B.data.length?0:1;}
function In(a,b){var c;if(a===b)return 1;if(!(b instanceof Bt))return 0;if(Bh(b)!=Bh(a))return 0;c=0;while(c<Bh(b)){if(Bx(a,c)!=Bx(b,c))return 0;c=c+1|0;}return 1;}
function If(a){var b,c,d,e;a:{if(!a.S){b=a.B.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.S=(31*a.S|0)+e|0;d=d+1|0;}}}return a.S;}
function H$(){var b,c;b=Bw(0);K3=b;c=new Bt;G4();c.B=b;K4=c;K5=new DI;}
var BV=E(BY);
var B0=E(BV);
var Gt=E(B0);
var C$=E();
function B3(){C$.call(this);this.bM=0;}
var K6=null;var K7=null;function H0(a){var b=new B3();FH(b,a);return b;}
function FH(a,b){a.bM=b;}
function Ep(b){var c,d;if(b>=(-128)&&b<=127){a:{if(K7===null){K7=S(B3,256);c=0;while(true){d=K7.data;if(c>=d.length)break a;d[c]=H0(c-128|0);c=c+1|0;}}}return K7.data[b+128|0];}return H0(b);}
function FS(){K6=O($rt_intcls());}
function CH(){var a=this;C.call(a);a.i=null;a.h=0;}
function B7(a,b,c){var d,e,f,g;d=a.h;e=d-b|0;Fq(a,(d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.i.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.h=a.h+(c-b|0)|0;}
var CO=E(0);
var FR=E(CH);
function X(){var a=new FR();IV(a);return a;}
function IV(a){a.i=Bw(16);}
function K(a,b){var c;c=a.h;if(b===null)b=B(3);Df(a,c,b);return a;}
function V(a,b){var c,d,e,f,g,h,i,j;c=a.h;d=1;if(b<0){d=0;b= -b|0;}a:{if($rt_ucmp(b,10)<0){if(d)B7(a,c,c+1|0);else{B7(a,c,c+2|0);e=a.i.data;f=c+1|0;e[c]=45;c=f;}a.i.data[c]=C_(b,10);}else{g=1;h=1;f=$rt_udiv((-1),10);b:{while(true){i=g*10|0;if($rt_ucmp(i,b)>0){i=g;break b;}h=h+1|0;if($rt_ucmp(i,f)>0)break;g=i;}}if(!d)h=h+1|0;B7(a,c,c+h|0);if(d)f=c;else{e=a.i.data;f=c+1|0;e[c]=45;}while(true){if(!i)break a;e=a.i.data;j=f+1|0;e[f]=C_($rt_udiv(b,i),10);b=$rt_umod(b,i);i=$rt_udiv(i,10);f=j;}}}return a;}
function BK(a,b){var c;c=a.h;B7(a,c,c+1|0);a.i.data[c]=b;return a;}
function GX(a,b){a.h=b;}
function W(a){return Kd(a.i,0,a.h);}
function Fq(a,b){var c,d,e,f;c=a.i.data.length;if(c<b){b=c>=1073741823?2147483647:CW(b,CW(c*2|0,5));d=a.i.data;e=Bw(b);f=e.data;b=BL(b,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.i=e;}}
function Df(a,b,c){var d,e,f;if(b>=0&&b<=a.h){a:{if(c===null)c=B(3);else if(E1(c))break a;Fq(a,a.h+Bh(c)|0);d=a.h-1|0;while(d>=b){a.i.data[d+Bh(c)|0]=a.i.data[d];d=d+(-1)|0;}a.h=a.h+Bh(c)|0;d=0;while(d<Bh(c)){e=a.i.data;f=b+1|0;e[b]=Bx(c,d);d=d+1|0;b=f;}}return a;}c=new C0;U(c);J(c);}
var BM=E(B0);
var Gk=E(BM);
function K8(a){var b=new Gk();I1(b,a);return b;}
function I1(a,b){Z(a,b);}
var F_=E(BM);
function K9(a){var b=new F_();Je(b,a);return b;}
function Je(a,b){Z(a,b);}
var R=E(0);
function F2(b){return b;}
var DC=E(0);
var GK=E();
function Ii(a,b){return a.h6(b);}
function Hn(a){return a.hQ();}
var CV=E();
var K$=null;var K_=null;function ET(){if(K$===null)K$=HS(La,0);return K$;}
function Cp(){if(K_===null)K_=HS(Lb,0);return K_;}
function JZ(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=C1(b)&&(e+f|0)<=C1(d)){C7(b,c,d,e,f);return;}b=new Bf;U(b);J(b);}
function C7(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function GM(){return KU($rt_globals.performance.now()*1000000.0);}
var G7=E();
var EX=E(0);
function DD(){var a=this;C.call(a);a.cw=null;a.dF=null;a.cu=null;a.ct=null;a.o=null;a.ce=null;a.m=null;a.bO=null;a.bI=null;a.G=null;a.U=0;a.fa=0;a.I=null;a.eE=null;a.dW=0;}
function FY(a,b){var c,d;if(a.o.parentNode!==null)BB(Cp(),B(4));else{if((b?1:0)?1:0)a.bO=b;b=BT();c=a.bO;d=b.getElementById(c);if(d!==null){b=a.o;d.appendChild(b);CD(a);}}}
function GZ(a){a.o.focus();}
function FX(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;b=a.G;if(b!==null){c=new Ds;d=a.bI.g;c.cc=b;c.J=d;c.bc=a;b=new DA;b.eN=c;d=new B8;DE(d);FK(d,0.0,0.0,0.250980406999588,1.0);b.bR=d;b.L=new By;d=c.bc;e=Cb(b);if(e.bt===null)e.bt=$rt_str(e.E.$meta.name);Ej(d,e.bt);b.fp=0;b.eB=5000;b.eI=0.5;b.eK=100.0;b.H=20.0;b.bh=0.0;b.br=0;b.T=0;b.bT=0;b.bg=0;b.bE=0;b.d_=0;Gj(0.6666666666666666,1.0,0.0625,b.bR);Cf(c.J.F,b);d=c.J.bF;e=new Fg;e.fn=b;Cf(d,e);Cf(c.J.bU,b);Cf(c.J.b0,b);d=c.cc;b.p=d;e=c.bc;f=new Dj;f.dY=e;b.el
=f;e=new Du;d=d.k;BU();BI(e,d,B(5),B(6),Lc);f=e.a;e.cK=d.getUniformLocation(f,"uColor");b.bp=e;g=S($rt_arraycls($rt_floatcls()),20);h=g.data;d=HO();i=0;while(i<20){j=10000+(5.960464477539063E-8*(C6(d)&16777215)*5001.0|0)|0;k=j*2|0;l=Hp(k);m=l.data;h[i]=l;n=0.0;o=0;while(o<j){p=Fw(d,5.0);q=Fw(d,2.0);r=o*2|0;m[r]=n;m[r+1|0]=n+p;n=n+p+q;o=o+1|0;}s=100.0/n;j=0;while(j<k){m[j]=m[j]*s;j=j+1|0;}i=i+1|0;}b.Y=g;b.bY=S(B8,h.length);d=HO();j=0;while(true){l=b.bY.data;if(j>=l.length)break;l[j]=new B8;e=l[j];(Gj(B5(d),0.5
+B5(d)*0.25,0.66+B5(d)*0.33/2.0,e)).bk=1.0;j=j+1|0;}l=b.Y.data;j=0;o=l.length;i=0;while(i<o){j=j+(l[i].data.length/2|0)|0;i=i+1|0;}d=c.bc;c=X();K(V(K(c,B(7)),j),B(8));Ej(d,W(c));a.I=b;CD(a);}return a.G===null?0:1;}
function Ej(a,b){var c;c=BT();b=$rt_ustr(b);c.title=b;}
function CD(a){a.fa=$rt_globals.requestAnimationFrame(Bk(a.cw,"onAnimationFrame"));}
function C5(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;b=a.G;c=a.m;d=c.c;e=c.f;f=b.w.width;g=b.w.height;if(f<d){c=b.w;b.dO=d;h=d;c.width=h;}if(g<e){c=b.w;b.bw=e;b=e;c.height=b;}b=a.G;c=a.m;d=c.c;e=c.f;DH(b.X,d,e);c=b.k;b=b.X;f=b.c;g=b.f;c.viewport(0,0,f,g);b=a.I;if(b.Z===null){b.Z=S(B4,b.Y.data.length);d=0;while(true){i=b.Y.data;if(d>=i.length)break;b.Z.data[d]=Jj(b.p.k,i[d]);d=d+1|0;}}E4(b.p,2);c=b.p;h=b.bR;j=c.k;k=h.bl;l=h.bi;m=h.bj;n=h.bk;j.clearColor(k,l,m,n);c.k.clear(16384);c=b.p;h=b.bp;if(h!==c.c$){j
=c.k;o=h.a;j.useProgram(o);c.c$=h;}d=0;e=0;while(d<20){f=b.dx+Gb(b.ch+b.bz|0,d)|0;k=0.019999999552965164*b.H;l=b.bh*b.L.c/2.0;l=(l+Jb(l)*0.5|0)*2.0;c=b.L;l=l/c.c-1.0;n=b.bz;m=1.0*n;p=c.f;m=m/p;n=1.0-(f*2.0+n)/p;c=b.bp;h=b.p;j=h.k;h=h.X;o=c.cQ;j.uniform4f(o,k,m,l,n);o=c.c_;if(!(o.c==h.c&&o.f==h.f?1:0)){Ez(o,h);c=c.dr;k=h.c;l=h.f;j.uniform2f(c,k,l);}c=b.bp;h=b.p.k;j=b.bY.data[e];c=c.cK;k=j.bl;l=j.bi;m=j.bj;n=j.bk;h.uniform4f(c,k,l,m,n);c=b.p;c.bG=FO(b.Z.data[e],c.bG);e=e+1|0;d=d+1|0;}E4(b.p,0);b=a.ce;c=a.G;h=
c.w;e=c.bw;c=a.m;d=c.f;q=e-d|0;r=c.c;s=d;b.drawImage(h,0.0,q,r,s,0.0,0.0,r,s);}
function DW(a,b,c){var d,e,f,g;if(a.m===null)a.m=new By;DH(a.m,b,c);a.bI.n=a.m;d=b&&c?1:0;if(d){e=a.o;f=b;e.width=f;g=a.o;e=c;g.height=e;}EJ(a.I,a.m,C8(a));if(d)C5(a);}
function C8(a){return $rt_globals.window.devicePixelRatio;}
var C2=E(0);
var FB=E();
var BP=E(0);
var FD=E();
function FP(a){var b,c,d;b=(BT()).createElement("pre");c="FATAL: WebGL is not enabled in the browser";b.innerHTML=c;d=b.style;d.setProperty("padding-left","10px");d.setProperty("padding-right","10px");(BT()).getElementById("panelDiv").appendChild(b);}
var CZ=E(0);
var DI=E();
var Bf=E(P);
var F4=E();
function C1(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Ld());}return b.data.length;}
function IG(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Cs=E(P);
var B$=E(P);
var Ce=E();
var Le=null;var Lf=null;function El(b){return (b&64512)!=55296?0:1;}
function D4(b){return (b&64512)!=56320?0:1;}
function C_(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function F8(){Le=O($rt_charcls());Lf=S(Ce,128);}
var FW=E();
function GN(b){return $rt_str(b);}
var Eh=E(0);
function Ci(){var a=this;C.call(a);a.bB=null;a.dv=null;a.du=null;a.cL=null;a.dg=null;a.cB=0;a.bx=0;a.df=null;}
var Fy=E(Ci);
var EK=E(0);
function Fm(){C.call(this);this.dC=null;}
function HT(a,b){var c,d,e,f,g;c=b;b=a.dC;d=b.I;c=c/1000.0;e=0;if(!(d.T^d.bT))d.bo=0.0;else{e=1;f=Ge(10.0+d.bo)/2.302585092994046/100.0*(!d.T?1:(-1));g=d.H+f;d.H=g;d.H=IL(0.5,Jt(g,100.0));d.bo=d.bo+c-d.cz;}if(!(d.bg^d.bE))d.ba=0.0;else{e=1;g=2.0*Hv(1.0+d.ba,1.0)/d.L.c*(!d.bg?1:(-1));d.bh=d.bh+g;d.ba=d.ba+c-d.dt;}g=c;d.dt=g;d.cz=g;if(!(!e&&!b.U)){d=b.m;if(d!==null&&Gb(d.c,d.f)){b.U=0;C5(b);}}CD(b);}
function Fn(){C.call(this);this.cv=null;}
function Bg(a){a.cv.U=1;}
var T=E(0);
function Fk(){C.call(this);this.b9=null;}
function IJ(a,b){var c;b=a.b9;c=b.m;if(c!==null){EJ(b.I,c,C8(b));c=b.m;if(Gb(c.c,c.f))C5(b);}}
var DP=E(0);
function Fl(){C.call(this);this.dp=null;}
function Jy(a,b,c){var d,e,f,g;c=a.dp;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.o){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=C8(c);DW(c,Cg(f.width*g),Cg(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];DW(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var F6=E();
function Hm(b,c){Ji(b,c,HG());}
function HG(){return {box:'device-pixel-content-box'};}
function Ji(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var FV=E();
function Jk(b){var c,d;c=b.id();Kn();b=Lg;d=c.data;return b.decode(d);}
function CG(){var a=this;C.call(a);a.dX=null;a.fe=null;a.k=null;a.eh=0;a.fr=null;a.ed=0;a.e7=0;a.fx=null;a.ev=null;a.d7=null;a.fj=null;a.fo=null;a.ex=null;a.fm=null;a.d6=null;a.eV=null;a.ef=null;a.ee=null;a.X=null;a.c$=null;a.bG=0;a.bD=0;a.ep=null;a.eQ=0.0;a.eU=0.0;}
function FQ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a.X=new By;a.bG=0;a.ep=new Ei;a.dX=c;a.eh=d;g=$rt_str(b.getParameter(7938));c=X();K(K(c,B(9)),g);$rt_globals.console.info($rt_ustr(W(c)));a.k=b;h=new EV;h.eL=1;Lh=Lh+1|0;h.fh=4;h.ff=4;i=new $rt_globals.OffscreenCanvas(4,4);h.fu=i;j=IF();i=i.getContext("2d",j);h.eP=i;j="#FFFFFF";i.fillStyle=j;a.fe=h;k=J8([1.0,(-1.0),1.0,1.0,1.0,1.0,1.0,0.0,(-1.0),(-1.0),0.0,1.0,(-1.0),1.0,0.0,0.0]);l=J6([0,1,2,1,2,3]);c=new B4;BU();E6(c,b,Lc,k,l);a.ee=c;if(g===B(10))d=1;else a:{d
=0;if((d+Bh(B(10))|0)>Bh(g))d=0;else{m=0;while(m<Bh(B(10))){n=Bx(B(10),m);o=d+1|0;if(n!=Bx(g,d)){d=0;break a;}m=m+1|0;d=o;}d=1;}}a.e7=d;c=new DO;c.dT=b;a.fr=c;a.eQ=e;a.eU=f;d=b.getParameter(3379);a.ed=d;c=X();V(K(c,B(11)),d);$rt_globals.console.info($rt_ustr(W(c)));k=S(Bb,9);l=k.data;c=new DU;BI(c,b,B(12),B(13),Lc);g=c.a;c.eu=b.getUniformLocation(g,"uColor");a.fx=c;l[0]=c;c=J2(b,B(14));a.ev=c;l[1]=c;c=new Ew;BI(c,b,B(12),B(15),Lc);a.d7=c;l[2]=c;c=new ES;EA(c,b,B(16));h=c.a;c.eg=b.getUniformLocation(h,"uContrast");a.fj
=c;l[3]=c;c=new EB;Fc(c,b,B(17),B(18));a.fo=c;l[4]=c;c=new EW;Fc(c,b,B(17),B(19));a.ex=c;l[5]=c;c=JT(b);a.fm=c;l[6]=c;c=Kj(b);a.d6=c;l[7]=c;c=Kl(b);a.eV=c;l[8]=c;a.ef=k;GC(b,B(20));}
function E4(a,b){var c;if(b==a.bD)return b;if(b<=0)a.k.disable(3042);else a:{a.k.enable(3042);switch(b){case 1:break;case 2:a.k.blendFuncSeparate(770,1,1,1);break a;default:break a;}a.k.blendFuncSeparate(770,771,1,1);}c=a.bD;a.bD=b;return c;}
function Cj(){var a=this;CG.call(a);a.w=null;a.dO=0;a.bw=0;a.d9=null;}
var K0=null;function Ho(){return 1;}
function I2(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
function G9(){var a=this;C.call(a);a.g=null;a.O=null;a.d5=null;a.n=null;}
function J7(a,b){var c=new G9();HW(c,a,b);return c;}
function HW(a,b,c){var d,e,f,g;a.n=null;a.O=b;d=new Dz;d.bU=BC(S(B_,0));d.b0=BC(S(B_,0));d.F=BC(S(CR,0));d.bF=BC(S(Cn,0));d.cl=BC(S(FF,0));d.cU=BC(S(EY,0));d.c9=BC(S(EU,0));d.dd=BC(S(BP,0));d.dI=BC(S(BP,0));d.l=c;a.g=d;e=$rt_globals.window;f=S(BF,16);g=f.data;d=new D5;d.cG=a;g[0]=Ba(a,b,B(21),d);d=new D6;d.c3=a;g[1]=Ba(a,b,B(22),d);d=new D7;d.b7=a;g[2]=Ba(a,b,B(23),d);d=new D8;d.dn=a;g[3]=Ba(a,b,B(24),d);d=new D9;d.cj=a;g[4]=Ba(a,b,B(25),d);d=new D$;d.e4=a;g[5]=Ba(a,b,B(26),d);d=new D_;d.dE=a;g[6]=Ba(a,b,B(27),
d);d=new Ea;d.cp=a;g[7]=Ba(a,b,B(28),d);d=new Eb;d.ds=a;g[8]=Ba(a,b,B(29),d);d=new Ec;d.cM=a;g[9]=Ba(a,b,B(30),d);d=new Fr;d.ci=a;g[10]=Ba(a,b,B(31),d);d=new Fs;d.dm=a;g[11]=Ba(a,b,B(32),d);d=new Ft;d.cf=a;g[12]=Ba(a,b,B(33),d);d=new Fu;d.c2=a;e.addEventListener("paste",Bk(d,"handleEvent"),!!1);g[13]=Eq(a,e,B(34),d);d=new Fo;d.b4=a;g[14]=Ba(a,e,B(35),d);d=new Fp;d.cV=a;g[15]=Ba(a,e,B(36),d);c=new DY;c.d1=f;a.d5=c;e=new E9;e.dw=b;b.onpointerdown=Bk(e,"f");e=new E$;e.cy=b;b.onpointerup=Bk(e,"f");}
function DQ(){return (BT()).activeElement;}
function Ba(a,b,c,d){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"));return Eq(a,b,c,d);}
function Eq(a,b,c,d){var e;e=new DN;e.eY=b;e.e0=c;e.eZ=d;return e;}
function Ey(a,b){var c;c=new Fj;c.fi=b;return c;}
function Bs(a,b){var c,d,e,f,g,h,i;c=$rt_globals.window.devicePixelRatio;d=a.O.getBoundingClientRect();e=new By;f=Cg((b.clientX-d.left)*c);g=Cg((b.clientY-d.top)*c);e.c=f;e.f=g;h=new By;i=a.n;h.c=i.c;h.f=i.f;d=new Dl;ER(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.cb=e;d.d4=h;return d;}
function Fv(a,b,c){var d,e,f,g;d=new Fa;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;ER(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.cN=0;d.e2=e;d.ca=f;d.z=c;d.cx=g;return d;}
function Bm(a,b){b.stopPropagation();b.preventDefault();}
var Bn=E(0);
var Fx=E(0);
var EP=E(0);
var EH=E(0);
var Eg=E(0);
var EL=E(0);
var E3=E(0);
var GR=E();
function Iw(a,b,c){a.cC($rt_str(b),Bj(c,"handleEvent"));}
function Jh(a,b,c){a.ck($rt_str(b),Bj(c,"handleEvent"));}
function IA(a,b,c,d){a.cJ($rt_str(b),Bj(c,"handleEvent"),d?1:0);}
function ID(a,b){return !!a.cH(b);}
function Hg(a,b,c,d){a.dK($rt_str(b),Bj(c,"handleEvent"),d?1:0);}
var DT=E(0);
var Ca=E(0);
var Cm=E();
function Ev(a){}
var Da=E(0);
var DG=E(0);
function CT(){Cm.call(this);this.b8=0;}
var CL=E(CT);
var Dy=E(0);
var E5=E(0);
function C3(){var a=this;CL.call(a);a.cW=null;a.dV=null;a.cE=0;}
function DF(a){var b,c;b=a.cW;if(b===null)b=null;else{c=b.eX;a.cW=c;if(c!==null)c.fs=null;else a.dV=null;a.cE=a.cE-1|0;a.b8=a.b8+1|0;b=b.e$;}return b;}
var Cw=E(0);
var C4=E();
var De=E(0);
var E0=E(0);
var DR=E(0);
function Fd(){var a=this;C4.call(a);a.P=null;a.bn=null;a.ea=null;a.bq=0;}
function Gf(a,b){var c;c=E8(a,b);if(c===null)return null;a.P=Cx(a,a.P,b);a.bq=a.bq+1|0;return c.W;}
function E8(a,b){var c,d;c=a.P;while(true){if(c===null)return null;d=CM(a.bn,b,c.V);if(!d)break;c=d>=0?c.e:c.b;}return c;}
function CS(a,b,c){var d,e;if(b===null){b=new CI;d=null;b.V=c;b.W=d;b.u=1;b.A=1;return b;}e=CM(a.bn,c,b.V);if(!e)return b;if(e>=0)b.e=CS(a,b.e,c);else b.b=CS(a,b.b,c);Bp(b);return CY(b);}
function Cx(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=CM(a.bn,c,b.V);if(d<0)b.b=Cx(a,b.b,c);else if(d>0)b.e=Cx(a,b.e,c);else{e=b.e;if(e===null)return b.b;f=b.b;g=S(CI,e.u).data;h=0;while(true){b=e.b;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.e;while(h>0){h=h+(-1)|0;j=g[h];j.b=b;Bp(j);b=CY(j);}e.e=b;e.b=f;Bp(e);b=e;}Bp(b);return CY(b);}
var F0=E();
function Dm(){C.call(this);this.cO=null;}
var Dk=E();
var Li=null;function GH(){return "ping";}
function GV(b){return b===GH()?1:0;}
var Ff=E(0);
var G1=E();
function Iv(a,b,c){a.cC($rt_str(b),Bj(c,"handleEvent"));}
function HP(a,b,c){a.ck($rt_str(b),Bj(c,"handleEvent"));}
function JA(a,b,c,d){a.cJ($rt_str(b),Bj(c,"handleEvent"),d?1:0);}
function IT(a,b){return !!a.cH(b);}
function Ik(a,b,c,d){a.dK($rt_str(b),Bj(c,"handleEvent"),d?1:0);}
var D1=E();
function Ij(a,b){$rt_globals.console.info("webglcontextlost",b);}
var D3=E();
function Hh(a,b){$rt_globals.console.info("webglcontextrestored",b);}
function Dz(){var a=this;C.call(a);a.bU=null;a.b0=null;a.F=null;a.bF=null;a.cl=null;a.cU=null;a.c9=null;a.dd=null;a.dI=null;a.l=null;a.y=null;a.dz=0;}
function EC(a,b){var c,d,e,f,g,h,i,j;Bg(a.l);c=(Bi(!b.z?a.b0:a.bU)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e];g=b.ca;if(g==40)f.T=b.z;if(g==38)f.bT=b.z;if(g==37)f.bg=b.z;if(g==39)f.bE=b.z;if(g==32&&(b.z&&!b.cx?1:0)){f.br=f.br?0:1;h=ET();i=f.br;f=X();j=K(f,B(37));Df(j,j.h,!i?B(38):B(39));BB(h,W(f));i=1;}else i=0;if(i)break;if(b.cN)break;e=e+1|0;}return i;}
function EG(a,b){var c,d;a:{Bg(a.l);if(a.y===null){c=(Bi(a.F)).data.length;d=0;while(true){if(d>=c)break a;d=d+1|0;}}}}
function Ex(a,b,c){var d,e,f;Bg(a.l);d=(Bi(a.cU)).data;e=d.length;f=0;while(f<e){if(d[f].hf(b,c))return 1;f=f+1|0;}return 0;}
var BF=E(0);
function D5(){C.call(this);this.cG=null;}
function II(a,b){var c;c=a.cG;if(EC(c.g,Fv(c,b,1)))Bm(c,b);}
function D6(){C.call(this);this.c3=null;}
function IS(a,b){var c;c=a.c3;if(EC(c.g,Fv(c,b,0)))Bm(c,b);}
function D7(){C.call(this);this.b7=null;}
function HI(a,b){var c,d,e,f,g;c=a.b7;if(c.n!==null){d=Bs(c,b);e=b.clientX;f=b.clientY;g=X();V(BK(V(K(g,B(40)),e),32),f);W(g);EG(c.g,d);Bm(c,b);}}
function D8(){C.call(this);this.dn=null;}
function Hf(a,b){var c,d,e,f,g;c=a.dn;b.button;if(c.n!==null)a:{Bs(c,b);c=c.g;d=b.button;Bg(c.l);if(c.y===null){e=(Bi(c.F)).data;f=e.length;g=0;while(g<f){b=e[g];if(!d)b.b1=1;b=Lj;if(b!==null){c.y=b;c.dz=d;break a;}g=g+1|0;}}}}
function D9(){C.call(this);this.cj=null;}
function HA(a,b){var c,d,e,f;c=a.cj;b.button;if(c.n!==null){Bs(c,b);d=c.g;e=b.button;Bg(d.l);if(e==d.dz&&d.y!==null)d.y=null;f=(Bi(d.F)).data;if(0>=f.length)e=0;else{d=f[0];if(!e)d.b1=0;e=1;}if(e)Bm(c,b);}}
function D$(){C.call(this);this.e4=null;}
function Jf(a,b){}
function D_(){C.call(this);this.dE=null;}
function Iz(a,b){var c,d;c=a.dE;if(c.n!==null){b=Bs(c,b);d=b.cb;d.c=(-1);d.f=(-1);EG(c.g,b);}}
function Ea(){C.call(this);this.cp=null;}
function Jm(a,b){var c,d;c=a.cp;if(c.n!==null){a:{switch(b.deltaMode){case 0:break;case 1:break a;case 2:break a;default:break a;}}d=c.g;Bs(c,b);b.deltaX;b.deltaY;Bg(d.l);Bi(d.bF);Bm(c,b);}}
function Eb(){C.call(this);this.ds=null;}
function HU(a,b){var c,d,e;c=a.ds;if(c.n!==null){Bs(c,b);c=c.g;b.button;b.detail;Bg(c.l);d=(Bi(c.F)).data.length;e=0;while(e<d){e=e+1|0;}}}
function Ec(){C.call(this);this.cM=null;}
function Ht(a,b){var c,d,e,f,g,h,i;c=a.cM;if(c.n!==null){d=Bs(c,b);e=c.g;Bg(e.l);f=(Bi(e.cl)).data;g=f.length;h=0;a:{while(h<g){if(f[h].iv(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Bm(c,b);}}
function Fr(){C.call(this);this.ci=null;}
function I7(a,b){var c,d,e;b=a.ci.g;c=(Bi(b.dI)).data;d=c.length;e=0;while(e<d){c[e].bX();e=e+1|0;}Bg(b.l);}
function Fs(){C.call(this);this.dm=null;}
function Hl(a,b){var c,d,e;b=a.dm.g;c=(Bi(b.dd)).data;d=c.length;e=0;while(e<d){c[e].bX();e=e+1|0;}if(b.y!==null)b.y=null;Bg(b.l);}
function Ft(){C.call(this);this.cf=null;}
function HN(a,b){var c;c=a.cf;if(c.n!==null)Bs(c,b);}
function Fu(){C.call(this);this.c2=null;}
function I6(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.c2;if(DQ()===c.O){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Bi(c.g.c9)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].hE();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.g.l;m=new Ef;m.dB=k;m.dA=l;g.getAsString(Bk(m,"accept"));Bm(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=X();K(K(K(K(l,B(41)),k),B(42)),g);$rt_globals.console.info($rt_ustr(W(l)));}e=e+1|0;}}}
function Fo(){C.call(this);this.b4=null;}
function IR(a,b){var c;c=a.b4;if(DQ()===c.O&&Ex(c.g,Ey(c,b),0))Bm(c,b);}
function Fp(){C.call(this);this.cV=null;}
function IH(a,b){var c;c=a.cV;if(DQ()===c.O&&Ex(c.g,Ey(c,b),1))Bm(c,b);}
var Dp=E(0);
var Dv=E(0);
var Ga=E();
function BT(){return $rt_globals.window.document;}
function H3(a){return a.fH();}
function HJ(a,b){return a.im($rt_str(b));}
function Hs(a,b){a.g6($rt_str(b));}
function Jp(a,b){return a.iw($rt_str(b));}
function Hu(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function JD(a){return a.iq();}
function HE(a,b,c){return a.gN($rt_str(b),$rt_str(c));}
function I9(a,b,c,d){a.dK($rt_str(b),Bj(c,"handleEvent"),d?1:0);}
function Iu(a){return a.hD();}
function IO(a){return !!a.f_();}
function H9(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function HL(a){return a.ho();}
function IP(a,b){a.gA($rt_str(b));}
function H5(a){return !!a.gF();}
function Jq(a){return a.fB();}
function Ha(a){return $rt_ustr(a.fQ());}
function Ig(a,b){return a.hV(b?1:0);}
function I$(a){return a.f9();}
function IM(a,b,c){return a.gO($rt_str(b),$rt_str(c));}
function HD(a,b,c){return a.gw(b,c?1:0);}
function IK(a,b,c){return !!a.hR($rt_str(b),$rt_str(c));}
function HB(a){return a.gp();}
function Iy(a){return $rt_ustr(a.hx());}
function He(a,b){return !!a.cH(b);}
function HY(a,b){return a.io($rt_str(b));}
function I0(a,b,c){return a.fG($rt_str(b),$rt_str(c));}
function Hd(a){return a.gY();}
function Ix(a,b){return a.iA($rt_str(b));}
function HX(a){return $rt_ustr(a.f5());}
function Ja(a){a.gt();}
function Hi(a,b){return a.gQ($rt_str(b));}
function H4(a,b){return a.he($rt_str(b));}
function IN(a,b){return a.gs($rt_str(b));}
function H6(a){return $rt_ustr(a.g_());}
function IX(a,b,c){return a.fL(b,c);}
function I3(a,b){return a.fO(b);}
function Ju(a){return a.hq();}
function Ir(a,b,c){a.ck($rt_str(b),Bj(c,"handleEvent"));}
function H_(a,b,c){return a.ha(b,c);}
function H1(a){return !!a.hP();}
function Jd(a,b){return a.iD($rt_str(b));}
function Id(a,b,c,d){a.cJ($rt_str(b),Bj(c,"handleEvent"),d?1:0);}
function Hb(a){return a.hu();}
function I_(a,b,c){return a.hT($rt_str(b),$rt_str(c));}
function H2(a){return $rt_ustr(a.hy());}
function I4(a){return a.gJ();}
function Im(a){return a.gZ();}
function HZ(a){return a.hU();}
function Is(a,b,c){a.cC($rt_str(b),Bj(c,"handleEvent"));}
function Jv(a,b){return a.hh(b);}
function Ia(a,b){a.gc($rt_str(b));}
function JB(a){return $rt_ustr(a.fS());}
var EM=E(0);
var DZ=E();
var F5=E();
function JU(){var a=new F5();Jl(a);return a;}
function Jl(a){}
function Jr(a,b){b=b.message;$rt_globals.console.info("Error loading image: ",b);}
function Go(){var a=this;C.call(a);a.Q=null;a.bm=null;a.K=0;}
function BC(a){var b=new Go();It(b,a);return b;}
function It(a,b){a.Q=b;}
function Cf(a,b){var c,d,e;c=a.K;d=a.Q;if(c==d.data.length)a.Q=EO(d,c+4|0);d=a.Q.data;e=a.K;a.K=e+1|0;d[e]=b;a.bm=null;}
function Bi(a){var b;b=a.bm;if(!(b!==null&&b.data.length==a.K))a.bm=EO(a.Q,a.K);return a.bm;}
var B_=E(0);
var CR=E(0);
var Cn=E(0);
var Eo=E(0);
var FF=E(0);
var EY=E(0);
var Dq=E(0);
var EU=E(0);
function DY(){C.call(this);this.d1=null;}
var Ct=E();
var KZ=null;function CM(a,b,c){return JV(b.bM,c.bM);}
function G0(){KZ=new Ct;}
function By(){var a=this;C.call(a);a.c=0;a.f=0;}
function Ez(a,b){a.c=b.c;a.f=b.f;}
function DH(a,b,c){a.c=b;a.f=c;}
var Ei=E();
var FI=E();
var GF=E(0);
function DO(){C.call(this);this.dT=null;}
function Dh(){var a=this;C.call(a);a.a=null;a.dQ=null;}
function F$(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(43):B(44);g=$rt_str(b.getShaderInfoLog(e));h=X();K(K(h,f),g);g=W(h);b.deleteShader(e);BB(ET(),g);BB(Cp(),B(45));BB(Cp(),d);BB(Cp(),B(45));b=new P;Z(b,g);J(b);}
function Bb(){var a=this;Dh.call(a);a.dr=null;a.cQ=null;a.c_=null;}
function Lk(a,b,c,d){var e=new Bb();BI(e,a,b,c,d);return e;}
function BI(a,b,c,d,e){var f,g,h,i,j,k;a.dQ=e;f=F$(b,35633,c);d=F$(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.a=g;h=e.cS.data;i=h.length;j=0;while(j<i){c=h[j];d=a.a;k=c.R;c=c.cZ;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.a;b.linkProgram(c);if(!b.getProgramParameter(c,35714)){d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b=new P;c=X();K(K(c,B(46)),d);Z(b,W(c));J(b);}GC(b,B(47));a.c_=new By;c=a.a;a.dr=b.getUniformLocation(c,"uResolution");c
=a.a;a.cQ=b.getUniformLocation(c,"uSizePos");}
function DU(){Bb.call(this);this.eu=null;}
function BA(){Bb.call(this);this.d$=null;}
function J2(a,b){var c=new BA();EA(c,a,b);return c;}
function Ll(a,b,c){var d=new BA();ED(d,a,b,c);return d;}
function EA(a,b,c){ED(a,b,B(12),c);}
function ED(a,b,c,d){BU();BI(a,b,c,d,Lc);c=a.a;a.d$=b.getUniformLocation(c,"sDiffuse");}
var Ew=E(Bb);
function ES(){BA.call(this);this.eg=null;}
function BO(){var a=this;BA.call(a);a.d8=null;a.e5=null;a.eq=null;a.fk=null;}
function Lm(a,b,c){var d=new BO();Fc(d,a,b,c);return d;}
function Fc(a,b,c,d){ED(a,b,c,d);c=a.a;a.d8=b.getUniformLocation(c,"uTexTransform");c=a.a;a.e5=b.getUniformLocation(c,"uColor");c=a.a;a.eq=b.getUniformLocation(c,"uBgColor");c=a.a;a.fk=b.getUniformLocation(c,"uTextPow");}
var EB=E(BO);
var EW=E(BO);
function GS(){var a=this;BA.call(a);a.fc=null;a.fb=null;a.e6=null;}
function JT(a){var b=new GS();Hy(b,a);return b;}
function Hy(a,b){var c,d;EA(a,b,B(48));c=a.a;a.fc=b.getUniformLocation(c,"uColorB");d=a.a;a.fb=b.getUniformLocation(d,"uColorF");d=a.a;a.e6=b.getUniformLocation(d,"uContrast");}
function Gr(){var a=this;Bb.call(a);a.eW=null;a.dS=null;a.dR=null;}
function Kj(a){var b=new Gr();HC(b,a);return b;}
function HC(a,b){var c;BU();BI(a,b,B(12),B(49),Lc);c=a.a;a.eW=b.getUniformLocation(c,"uColor");c=a.a;a.dS=b.getUniformLocation(c,"uPoints1");c=a.a;a.dR=b.getUniformLocation(c,"uPoints2");}
function GE(){var a=this;Bb.call(a);a.en=null;a.er=null;a.ec=null;}
function Kl(a){var b=new GE();IQ(b,a);return b;}
function IQ(a,b){var c;BU();BI(a,b,B(12),B(50),Lc);c=a.a;a.en=b.getUniformLocation(c,"uColor");c=a.a;a.er=b.getUniformLocation(c,"uBaseline");c=a.a;a.ec=b.getUniformLocation(c,"uScaleHExp");}
var Fi=E(0);
var G8=E(0);
function GC(b,c){var d,e;d=b.getError();if(d){b=ET();e=X();V(K(e,c),d);BB(b,W(e));}}
function DN(){var a=this;C.call(a);a.eY=null;a.e0=null;a.eZ=null;}
function B4(){var a=this;C.call(a);a.r=null;a.D=null;a.cs=null;a.dq=null;a.cR=null;a.cF=0;a.c4=0;}
function Ln(a,b,c,d){var e=new B4();E6(e,a,b,c,d);return e;}
function E6(a,b,c,d,e){var f,g;f=d.data;a.r=b;a.D=c;a.cF=f.length/c.bH|0;a.c4=e===null?0:e.data.length;c=b.createBuffer();a.cs=c;b.bindBuffer(34962,c);c=d.data;b.bufferData(34962,c,35044);a.dq=null;g=e===null?null:b.createBuffer();a.cR=g;if(g!==null){b.bindBuffer(34963,g);c=e.data;b.bufferData(34963,c,35044);}c=null;b.bindBuffer(34962,c);c=null;b.bindBuffer(34963,c);}
function FO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.D.di;d=a.r;b=b^c;e=0;while(b){f=1<<e;if(b&f){if(!(c&f))d.disableVertexAttribArray(e);else d.enableVertexAttribArray(e);b=b^f;}e=e+1|0;}b=0;d=a.r;g=a.cs;d.bindBuffer(34962,g);h=a.D.b2.data;f=h.length;i=0;while(i<f){d=h[i];g=a.r;j=d.R;k=d.t;l=a.D.bH*4|0;e=b*4|0;g.vertexAttribPointer(j,k,5126,!!0,l,e);b=b+d.t|0;i=i+1|0;}a:{d=a.dq;if(d!==null){b=0;a.r.bindBuffer(34962,d);h=a.D.b5.data;e=h.length;f=0;while(true){if(f>=e)break a;d=h[f];g=a.r;i=d.R;j=d.t;m=d.cn;n=a.D.cI;g.vertexAttribPointer(i,
j,5121,!!m,n,b);b=b+d.t|0;f=f+1|0;}}}d=a.cR;if(d===null){b=a.cF;if(b>0)a.r.drawArrays(4,0,b);}else{a.r.bindBuffer(34963,d);d=a.r;f=a.c4;d.drawElements(4,f,5123,0);}return c;}
function BD(){var a=this;C.call(a);a.eJ=null;a.bs=0;}
function CN(a,b,c){a.eJ=b;a.bs=c;}
function BW(){var a=this;BD.call(a);a.cS=null;a.b2=null;a.b5=null;a.bH=0;a.cI=0;a.di=0;}
var Lc=null;var Lo=null;function BU(){BU=Bc(BW);IU();}
function IU(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new BW;c=S(Bo,2);d=c.data;Iq();d[0]=Lp;d[1]=Lq;BU();CN(b,B(51),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.bv.bs){case 0:f=f+l.t|0;h=h+1|0;break a;case 1:e=e+l.t|0;g=g+1|0;break a;default:}}i=i|1<<l.R;k=k+1|0;}b.cS=c;b.bH=e;b.cI=f;b.di=i;c=S(Bo,g);m=c.data;b.b2=c;c=S(Bo,h);n=c.data;b.b5=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.bv.bs){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}Lc=b;c
=S(BW,1);c.data[0]=b;Lo=c;}
var E_=E(0);
var D0=E(0);
var EZ=E(0);
var BS=E();
function CF(){BS.call(this);this.dM=null;}
function F7(){var a=this;CF.call(a);a.e1=0;a.bL=0;a.bf=null;a.dN=null;a.dG=null;}
function HS(a,b){var c=new F7();Ib(c,a,b);return c;}
function Ib(a,b,c){a.dM=b;a.bf=X();a.dN=Bw(32);a.e1=c;HQ();a.dG=Lr;}
function Ee(a,b,c,d){var e,$$je;e=a.dM;if(e===null)a.bL=1;if(!(a.bL?0:1))return;a:{try{e.bV(b,c,d);break a;}catch($$e){$$je=Jc($$e);if($$je instanceof EQ){}else{throw $$e;}}a.bL=1;}}
function BB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;c=a.bf;Df(c,c.h,b);BK(c,10);b=a.bf;d=b.h;e=a.dN;if(d>e.data.length)e=Bw(d);f=0;g=0;if(f>d){b=new Bf;Z(b,B(52));J(b);}while(f<d){h=e.data;i=g+1|0;j=b.i.data;k=f+1|0;h[g]=j[f];g=i;f=k;}h=e.data;f=d-0|0;l=new EI;d=h.length;f=0+f|0;DJ(l,d);l.j=0;l.s=f;l.co=0;l.fg=0;l.dJ=e;e=Fe(CW(16,BL(d,1024)));f=e.data.length;b=new Et;i=0+f|0;DJ(b,f);IZ();b.fw=Ls;b.de=0;b.cX=e;b.j=0;b.s=i;b.d2=0;b.cq=0;c=a.dG;m=new FC;h=Fe(1);j=h.data;j[0]=63;IB();n=Lt;m.bP=n;m.bW=n;g=j.length;if
(g&&g>=m.b3){m.ey=c;m.cT=h.dH();m.eF=2.0;m.b3=4.0;m.cm=Bw(512);m.c8=Fe(512);c=Lu;if(c===null){c=new Bq;Z(c,B(53));J(c);}m.bP=c;m.bW=c;a:while(true){if(m.bd==3){b=new CB;U(b);J(b);}m.bd=2;b:{while(true){try{c=Gm(m,l,b);}catch($$e){$$je=Jc($$e);if($$je instanceof P){b=$$je;break a;}else{throw $$e;}}if(c.M?0:1){f=Bv(l);if(f<=0)break b;c=CP(f);}else if(CK(c))break;n=!Er(c)?m.bP:m.bW;c:{if(n!==Lu){if(n===Lv)break c;else break b;}f=Bv(b);h=m.cT;k=h.data.length;if(f<k){c=Lw;break b;}Eu(b,h,0,k);}k=l.j;if(!GT(c)){b
=new B6;U(b);J(b);}Dn(l,k+c.db|0);}}f=CK(c);Ee(a,e,0,Gi(b));EF(b);if(!f){while(true){f=m.bd;if(f!=2&&f!=4){b=new CB;U(b);J(b);}c=Lx;if(c===c)m.bd=3;g=CK(c);Ee(a,e,0,b.j);EF(b);if(!g)break;}GX(a.bf,0);return;}}J(Km(b));}J(JH(B(54)));}
function BJ(){BS.call(this);this.ei=null;}
function Fz(a){a.ei=Fe(1);}
var CU=E(BJ);
var La=null;function I8(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function GL(){var b;b=new CU;Fz(b);La=b;}
function Bo(){var a=this;BD.call(a);a.cZ=null;a.bv=null;a.t=0;a.cn=0;a.R=0;}
var Lp=null;var Lq=null;var Ly=null;function Iq(){Iq=Bc(Bo);Ih();}
function Kk(a,b,c,d,e,f,g){var h=new Bo();DL(h,a,b,c,d,e,f,g);return h;}
function DL(a,b,c,d,e,f,g,h){Iq();CN(a,b,c);a.cZ=d;a.bv=e;a.t=f;a.cn=g;a.R=h;}
function Ih(){var b;b=new Bo;HF();DL(b,B(55),0,B(56),Lz,2,0,0);Lp=b;b=Kk(B(57),1,B(58),Lz,2,0,1);Lq=b;Ly=Io(Bo,[Lp,b]);}
function CC(){var a=this;C.call(a);a.d0=null;a.eo=null;}
function G3(b){var c,d;if(E1(b))J(F3(b));if(!G5(Bx(b,0)))J(F3(b));c=1;while(c<Bh(b)){a:{d=Bx(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(G5(d))break a;else J(F3(b));}}c=c+1|0;}}
function G5(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Dd=E(CC);
var Lr=null;function HQ(){HQ=Bc(Dd);Hw();}
function Hw(){var b,c,d,e,f;b=new Dd;HQ();c=S(Bt,0);d=c.data;G3(B(59));e=d.length;f=0;while(f<e){G3(d[f]);f=f+1|0;}b.d0=B(59);b.eo=c.dH();Lr=b;}
var GQ=E();
var BZ=E(BD);
var LA=null;var Lz=null;var LB=null;function HF(){HF=Bc(BZ);Hc();}
function Hq(a,b){var c=new BZ();FL(c,a,b);return c;}
function FL(a,b,c){HF();CN(a,b,c);}
function Hc(){var b;LA=Hq(B(60),0);b=Hq(B(61),1);Lz=b;LB=Io(BZ,[LA,b]);}
var Dc=E(BJ);
var Lb=null;function HK(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function G_(){var b;b=new Dc;Fz(b);Lb=b;}
var Bq=E(P);
function JH(a){var b=new Bq();Jx(b,a);return b;}
function Jx(a,b){Z(a,b);}
function G6(){Bq.call(this);this.eH=null;}
function F3(a){var b=new G6();HR(b,a);return b;}
function HR(a,b){U(a);a.eH=b;}
var Dw=E(Bz);
var C0=E(Bf);
function Cy(){C.call(this);this.eN=null;}
var DB=E(0);
function DK(){var a=this;C.call(a);a.dk=null;a.dj=0;}
function Jw(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.dk;d=a.dj;b=b.data;GV(b);e=DF(c.du);if(e===null)e=DF(c.dv);if(e===null){f=c.dg.data;g=c.bx;c.bx=g+1|0;f[g]=d;}else{h=e.fd;i=e.d3;f=e.eS;j=c.cB+1|0;c.cB=j;k=c.cL;e=Ep(j);k.P=CS(k,k.P,e);e=E8(k,e);Dt(e,h);Dt(e,h);k.bq=k.bq+1|0;e=c.bB[d];if(e===null){h=$rt_ustr(i);$rt_globals.console.error("sendToWorker after shutdown, method = "+h);}else{f=f.data;l=f.length;h=new $rt_globals.Array(l+2|0);k=j;0;h[0]=k;i=$rt_ustr(i);1;h[1]=i;d=2;m=new $rt_globals.Array();g=0;while
(g<l){i=f[g];if(i===null){j=d+1|0;i=null;d;h[d]=i;}else if(i instanceof Bt){j=d+1|0;i=Jk(i);d;h[d]=i;}else if(CA(i,$rt_arraycls($rt_bytecls()))){j=d+1|0;i=i.data.buffer;d;h[d]=i;}else if(CA(i,$rt_arraycls($rt_charcls()))){j=d+1|0;i=i.data.buffer;d;h[d]=i;}else if(CA(i,$rt_arraycls($rt_intcls()))){j=d+1|0;i=i.data.buffer;d;h[d]=i;}else if(!CA(i,$rt_arraycls($rt_doublecls())))j=Li.hW(i,h,d);else{j=d+1|0;i=i.data.buffer;d;h[d]=i;}i=h[d];if(i instanceof $rt_globals.ArrayBuffer?1:0)m.push(i);g=g+1|0;d=j;}e.postMessage(h,
m);}}c=c.df;if(!GV(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new Bq;U(b);J(b);}if(b.length<1){b=new Bq;U(b);J(b);}e=Ep(b[0]);e=Gf(c.cO,e);d=1;j=b.length;f=S(C,j-d|0);n=f.data;g=0;while(d<j){l=g+1|0;o=d+1|0;h=b[d];if(h===null)n[g]=null;else if(typeof h==='string'?1:0)n[g]=GN(F2(h));else if(!(h instanceof $rt_globals.ArrayBuffer?1:0))o=Li.fK(h,b,o,f,g);else n[g]=JX(F2(h));g=l;d=o;}if(g!=n.length)f=EO(f,g);e.eA(f);}}
var Db=E(0);
function E9(){C.call(this);this.dw=null;}
function IE(a,b){a.dw.setPointerCapture(b.pointerId);}
function E$(){C.call(this);this.cy=null;}
function Hz(a,b){a.cy.releasePointerCapture(b.pointerId);}
var Em=E(0);
var E7=E(0);
function B2(){var a=this;C.call(a);a.eL=0;a.fh=0;a.ff=0;}
var Lh=0;function EV(){var a=this;B2.call(a);a.fu=null;a.eP=null;}
function IF(){return {alpha:false};}
function BN(){var a=this;C.call(a);a.c6=0;a.j=0;a.s=0;a.bb=0;}
function DJ(a,b){a.bb=(-1);a.c6=b;a.s=b;}
function Gi(a){return a.j;}
function Bv(a){return a.s-a.j|0;}
function BG(a){return a.j>=a.s?0:1;}
var FA=E(0);
var Cz=E(BN);
function Dn(a,b){var c,d,e;if(b>=0&&b<=a.s){a.j=b;if(b<a.bb)a.bb=0;return a;}c=new Bq;d=a.s;e=X();BK(V(K(V(K(e,B(62)),b),B(63)),d),93);Z(c,W(e));J(c);}
var Gz=E();
function Ge(b){return Math.log(b);}
function Hv(b,c){return Math.pow(b,c);}
function BL(b,c){if(b<c)c=b;return c;}
function CW(b,c){if(b>c)c=b;return c;}
function Jt(b,c){return Math.min(b,c);}
function IL(b,c){return Math.max(b,c);}
function Ie(b){return Math.abs(b);}
function Jb(b){return Math.sign(b);}
function C9(){var a=this;BN.call(a);a.de=0;a.cX=null;a.fw=null;}
function Eu(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.cq){e=new Fh;U(e);J(e);}if(Bv(a)<d){e=new Es;U(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bf;j=X();V(K(V(K(j,B(64)),h),B(65)),g);Z(i,W(j));J(i);}if(d<0){e=new Bf;i=X();K(V(K(i,B(66)),d),B(67));Z(e,W(i));J(e);}h=a.j;k=h+a.de|0;l=0;while(l<d){b=a.cX.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.j=h+d|0;return a;}}b=b.data;e=new Bf;d=b.length;i=X();BK(V(K(V(K(i,B(68)),c),B(63)),d),41);Z(e,W(i));J(e);}
function EF(a){a.j=0;a.s=a.c6;a.bb=(-1);return a;}
function B1(){C.call(this);this.em=null;}
var Lv=null;var Lu=null;var Lt=null;function IB(){IB=Bc(B1);Hr();}
function Gw(a){var b=new B1();GY(b,a);return b;}
function GY(a,b){IB();a.em=b;}
function Hr(){Lv=Gw(B(69));Lu=Gw(B(70));Lt=Gw(B(71));}
function BQ(){var a=this;C.call(a);a.dP=0;a.fl=0;a.e3=0;a.dZ=0;}
function LC(a,b,c,d){var e=new BQ();ER(e,a,b,c,d);return e;}
function ER(a,b,c,d,e){a.dP=d;a.fl=b;a.e3=c;a.dZ=e;}
function Dl(){var a=this;BQ.call(a);a.cb=null;a.d4=null;}
var GO=E();
var Co=E(Cz);
function EI(){var a=this;Co.call(a);a.fg=0;a.co=0;a.dJ=null;}
function Ch(){var a=this;C.call(a);a.ey=null;a.cT=null;a.eF=0.0;a.b3=0.0;a.bP=null;a.bW=null;a.bd=0;}
function Cu(){var a=this;C.call(a);a.M=0;a.db=0;}
var Lx=null;var Lw=null;function GA(a,b){var c=new Cu();G2(c,a,b);return c;}
function G2(a,b,c){a.M=b;a.db=c;}
function CK(a){return a.M!=1?0:1;}
function GT(a){var b;b=a.M!=2?0:1;return !b&&!Er(a)?0:1;}
function Er(a){return a.M!=3?0:1;}
function CP(b){return GA(2,b);}
function FM(){Lx=GA(0,0);Lw=GA(1,0);}
function Fa(){var a=this;BQ.call(a);a.e2=null;a.ca=0;a.z=0;a.cx=0;a.cN=0;}
var FN=E();
function Cg(b){return b+0.5|0;}
var EN=E(0);
function Ef(){var a=this;C.call(a);a.dB=null;a.dA=null;}
function Ic(a,b){var c,d;c=a.dB;d=a.dA;$rt_globals.console.info("paste plain string ",b);c.eA(GN(b));Bg(d);}
var Cv=E(0);
function Fj(){C.call(this);this.fi=null;}
function Et(){var a=this;C9.call(a);a.d2=0;a.cq=0;}
function CQ(){C.call(this);this.eM=null;}
var Ls=null;var LD=null;function IZ(){IZ=Bc(CQ);Jn();}
function Hk(a){var b=new CQ();FJ(b,a);return b;}
function FJ(a,b){IZ();a.eM=b;}
function Jn(){Ls=Hk(B(72));LD=Hk(B(73));}
function Ds(){var a=this;C.call(a);a.cc=null;a.J=null;a.bc=null;}
var G$=E();
function Di(){var a=this;Ch.call(a);a.cm=null;a.c8=null;}
function Gm(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.cm;e=0;f=0;g=a.c8;a:{b:{while(true){if((e+32|0)>f&&BG(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=Bv(b)+j|0;h=i.length;f=BL(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new Bf;b=X();V(K(V(K(b,B(74)),k),B(65)),h);Z(l,W(b));J(l);}if(Bv(b)<e)break;if(e<0){b=new Bf;c=X();K(V(K(c,B(66)),e),B(67));Z(b,W(c));J(b);}h=b.j;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.dJ.data[n+b.co|0];m=m+1|0;j=o;n=k;}b.j=h+e|0;e=0;}if(!BG(c))
{l=!BG(b)&&e>=f?Lx:Lw;break a;}i=g.data;k=BL(Bv(c),i.length);p=new En;p.cg=b;p.c5=c;l=GW(a,d,e,f,g,0,k,p);e=p.cd;j=p.da;if(l===null){if(!BG(b)&&e>=f)l=Lx;else if(!BG(c)&&e>=f)l=Lw;}Eu(c,g,0,j);if(l!==null)break a;}b=new DX;U(b);J(b);}p=new Bf;l=X();BK(V(K(V(K(l,B(68)),j),B(63)),h),41);Z(p,W(l));J(p);}Dn(b,b.j-(f-e|0)|0);return l;}
var FC=E(Di);
function GW(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Cr(h,2))break a;i=Lw;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!(!El(l)&&!D4(l)?0:1)){if((f+3|0)>g){j=j+(-1)|0;if(Cr(h,3))break a;i=Lw;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!El(l))
{i=CP(1);break a;}if(j>=d){if(BG(h.cg))break a;i=Lx;break a;}c=j+1|0;n=k[j];if(!D4(n)){j=c+(-2)|0;i=CP(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Cr(h,4))break a;i=Lw;break a;}k=e.data;o=((l&1023)<<10|n&1023)+65536|0;n=f+1|0;k[f]=(240|o>>18)<<24>>24;f=n+1|0;k[n]=(128|o>>12&63)<<24>>24;n=f+1|0;k[f]=(128|o>>6&63)<<24>>24;m=n+1|0;k[n]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.cd=j;h.da=f;return i;}
var EQ=E(Bz);
function Ck(){var a=this;Cy.call(a);a.bR=null;a.L=null;a.ek=0.0;}
function DA(){var a=this;Ck.call(a);a.p=null;a.el=null;a.bp=null;a.Y=null;a.Z=null;a.bY=null;a.bz=0;a.ch=0;a.dx=0;a.fp=0;a.eB=0;a.eI=0.5;a.eK=100.0;a.bo=0.0;a.cz=0.0;a.ba=0.0;a.dt=0.0;a.H=0.0;a.bh=0.0;a.b1=0;a.br=0;a.T=0;a.bT=0;a.bg=0;a.bE=0;a.d_=0;}
function EJ(a,b,c){var d,e,f;Ez(a.L,b);a.ek=c;d=b.f;e=d/30|0;a.bz=e;f=(d-(e*20|0)|0)/20|0;a.ch=f;a.dx=f/2|0;}
var GB=E(0);
function Gj(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-Ie(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bl=g+i;e.bi=h+i;e.bj=j+i;return e;}
function Fg(){C.call(this);this.fn=null;}
function Dj(){C.call(this);this.dY=null;}
function Du(){Bb.call(this);this.cK=null;}
function Jj(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=c.data;d=BL(c.length/2|0,16384);e=Hp((d*4|0)*4|0);f=e.data;g=Bw(d*6|0);h=g.data;i=0;while(i<d){j=i*16|0;k=i*6|0;l=i*2|0;m=c[l];n=c[l+1|0];f[j]=n;f[j+1|0]=(-1.0);f[j+2|0]=m;f[j+3|0]=1.0;f[j+4|0]=n;f[j+5|0]=1.0;f[j+6|0]=m;f[j+7|0]=1.0;f[j+8|0]=m;f[j+9|0]=(-1.0);f[j+10|0]=n;f[j+11|0]=0.0;f[j+12|0]=m;f[j+13|0]=1.0;f[j+14|0]=n;f[j+15|0]=0.0;o=i*4|0;h[k]=o&65535;j=k+1|0;l=(o+1|0)&65535;h[j]=l;j=k+2|0;p=(o+2|0)&65535;h[j]=p;h[k+3|0]=l;h[k+4|0]=p;h[k+5|0]=(o+3|0)&65535;i
=i+1|0;}q=new B4;BU();E6(q,b,Lc,e,g);return q;}
var Gs=E();
function B8(){var a=this;C.call(a);a.bl=0.0;a.bi=0.0;a.bj=0.0;a.bk=0.0;}
function FK(a,b,c,d,e){a.bl=b;a.bi=c;a.bj=d;a.bk=e;}
function Gn(){var a=this;C.call(a);a.bQ=0;a.bS=0;}
function HO(){var a=new Gn();Ip(a);return a;}
function Ip(a){var b,c;b=Hj((GM()));b=b^b<<7;b=b^(b>>>1|0);c=b^b<<9;b=Hj((GM()))^(-559038737);a.bQ=c;a.bS=b;b=0;while(b<19){C6(a);b=b+1|0;}}
function C6(a){var b,c;b=a.bQ;c=a.bS;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.bQ=c;a.bS=b;return b;}
function B5(a){var b;b=2.3283064365386963E-10*C6(a);if(b<0.0)b=b+1.0;return b;}
function Fw(a,b){return  -Ge(1.0-B5(a))/b;}
var F9=E();
var Gl=E();
function EO(b,c){var d,e,f;d=Cq(Cb(b));if(d===null){d=new Cs;U(d);J(d);}if(d===O($rt_voidcls())){d=new Bq;U(d);J(d);}if(c<0){d=new FG;U(d);J(d);}b=b.data;d=IG(d.E,c);e=BL(c,b.length);f=0;while(f<e){d.data[f]=b[f];f=f+1|0;}return d;}
var FZ=E();
function Gh(){var a=this;C.call(a);a.fd=null;a.d3=null;a.eS=null;}
var FG=E(P);
var Gc=E();
var DM=E(0);
function FU(){C.call(this);this.eD=null;}
function JX(a){var b=new FU();H7(b,a);return b;}
function H7(a,b){a.eD=b;}
var Gx=E();
var Fb=E(0);
var Lg=null;function Kn(){Kn=Bc(Fb);I5();}
function I5(){Lg=new $rt_globals.TextDecoder("utf-16");}
var Do=E(0);
var Lj=null;function Gy(){Lj=new Ed;}
var Dr=E(0);
function Dg(){var a=this;C.call(a);a.V=null;a.W=null;}
function Dt(a,b){var c;c=a.W;a.W=b;return c;}
function CI(){var a=this;Dg.call(a);a.b=null;a.e=null;a.u=0;a.A=0;}
function CY(a){var b;b=Cl(a);if(b==2){if(Cl(a.e)<0)a.e=DV(a.e);return E2(a);}if(b!=(-2))return a;if(Cl(a.b)>0)a.b=E2(a.b);return DV(a);}
function Cl(a){var b,c;b=a.e;c=b===null?0:b.u;b=a.b;return c-(b===null?0:b.u)|0;}
function DV(a){var b;b=a.b;a.b=b.e;b.e=a;Bp(a);Bp(b);return b;}
function E2(a){var b;b=a.e;a.e=b.b;b.b=a;Bp(a);Bp(b);return b;}
function Bp(a){var b,c,d;b=a.e;c=b===null?0:b.u;b=a.b;d=b===null?0:b.u;a.u=CW(c,d)+1|0;a.A=1;b=a.b;if(b!==null)a.A=1+b.A|0;b=a.e;if(b!==null)a.A=a.A+b.A|0;}
var Ed=E();
var CB=E(P);
var Gq=E(BV);
function Km(a){var b=new Gq();HH(b,a);return b;}
function HH(a,b){a.bJ=1;a.bZ=1;a.dy=b;}
function GD(){var a=this;C.call(a);a.e$=null;a.eX=null;a.fs=null;}
var B6=E(P);
function En(){var a=this;C.call(a);a.cg=null;a.c5=null;a.cd=0;a.da=0;}
function Cr(a,b){return Bv(a.c5)<b?0:1;}
var Fh=E(B6);
var Es=E(P);
var DX=E(P);
$rt_packages([-1,"org",0,"sudu",1,"experiments",2,"swimlane"]);
$rt_metadata([C,0,0,[],0,3,0,0,0,Gv,0,C,[],0,3,0,0,0,DS,0,C,[],3,3,0,0,0,Dx,0,C,[],3,3,0,0,0,D2,0,C,[DS,Dx],0,3,0,0,0,GU,0,C,[],4,0,0,0,0,GG,0,C,[],4,3,0,0,0,BY,0,C,[],0,3,0,0,0,Bz,0,BY,[],0,3,0,0,0,P,0,Bz,[],0,3,0,0,0,GI,0,P,[],0,3,0,0,0,Bu,0,C,[],3,3,0,0,0,Br,0,C,[],3,3,0,0,0,Cd,0,C,[],3,3,0,0,0,Bt,0,C,[Bu,Br,Cd],0,3,0,G4,0,BV,0,BY,[],0,3,0,0,0,B0,0,BV,[],0,3,0,0,0,Gt,0,B0,[],0,3,0,0,0,C$,0,C,[Bu],1,3,0,0,0,B3,0,C$,[Br],0,3,0,0,0,CH,0,C,[Bu,Cd],0,0,0,0,0,CO,0,C,[],3,3,0,0,0,FR,0,CH,[CO],0,3,0,0,0,BM,0,B0,
[],0,3,0,0,0,Gk,0,BM,[],0,3,0,0,0,F_,0,BM,[],0,3,0,0,0,R,0,C,[],3,3,0,0,0,DC,0,C,[R],3,3,0,0,0,GK,0,C,[DC],1,3,0,0,["hl",KC(Ii),"gH",KB(Hn)],CV,0,C,[],4,3,0,0,0,G7,0,C,[],4,3,0,0,0,EX,0,C,[],3,3,0,0,0,DD,0,C,[EX],0,3,0,0,0,C2,0,C,[],3,3,0,0,0,FB,0,C,[C2],0,3,0,0,0,BP,0,C,[],3,3,0,0,0,FD,0,C,[BP],0,3,0,0,0,CZ,0,C,[],3,3,0,0,0,DI,0,C,[CZ],0,3,0,0,0,Bf,0,P,[],0,3,0,0,0,F4,0,C,[],4,3,0,0,0,Cs,0,P,[],0,3,0,0,0,B$,0,P,[],0,3,0,0,0,Ce,0,C,[Br],0,3,0,0,0,FW,0,C,[R],1,3,0,0,0,Eh,0,C,[],3,3,0,0,0,Ci,0,C,[Eh],1,3,0,0,
0,Fy,0,Ci,[],0,3,0,0,0,EK,0,C,[R],3,3,0,0,0,Fm,0,C,[EK],0,3,0,0,["gf",KC(HT)]]);
$rt_metadata([Fn,0,C,[BP],0,3,0,0,0,T,0,C,[R],3,3,0,0,0,Fk,0,C,[T],0,3,0,0,["d",KC(IJ)],DP,0,C,[R],3,3,0,0,0,Fl,0,C,[DP],0,3,0,0,["hH",KD(Jy)],F6,0,C,[R],1,3,0,0,0,FV,0,C,[],0,3,0,0,0,CG,0,C,[],1,3,0,0,0,Cj,0,CG,[],0,3,0,0,0,G9,0,C,[],0,3,0,0,0,Bn,0,C,[R],3,3,0,0,0,Fx,0,C,[Bn],3,3,0,0,0,EP,0,C,[Bn],3,3,0,0,0,EH,0,C,[Bn],3,3,0,0,0,Eg,0,C,[Bn],3,3,0,0,0,EL,0,C,[Bn],3,3,0,0,0,E3,0,C,[Bn,Fx,EP,EH,Eg,EL],3,3,0,0,0,GR,0,C,[R,E3],1,3,0,0,["e8",KD(Iw),"eT",KD(Jh),"fy",KE(IA),"es",KC(ID),"eR",KE(Hg)],DT,0,C,[],3,3,0,
0,0,Ca,0,C,[DT],3,3,0,0,0,Cm,0,C,[Ca],1,3,0,0,0,Da,0,C,[Ca],3,3,0,0,0,DG,0,C,[Da],3,3,0,0,0,CT,0,Cm,[DG],1,3,0,0,0,CL,0,CT,[],1,3,0,0,0,Dy,0,C,[Ca],3,3,0,0,0,E5,0,C,[Dy,Da],3,3,0,0,0,C3,0,CL,[E5],0,3,0,0,0,Cw,0,C,[],3,3,0,0,0,C4,0,C,[Cw],1,3,0,0,0,De,0,C,[],3,3,0,0,0,E0,0,C,[Cw],3,3,0,0,0,DR,0,C,[E0],3,3,0,0,0,Fd,0,C4,[De,Bu,DR],0,3,0,0,0,F0,0,C,[],4,3,0,0,0,Dm,0,C,[C2],0,3,0,0,0,Dk,0,C,[],0,3,0,0,0,Ff,0,C,[R],3,3,0,0,0,G1,0,C,[R,Ff,Bn],1,3,0,0,["e8",KD(Iv),"eT",KD(HP),"fy",KE(JA),"es",KC(IT),"eR",KE(Ik)],D1,
0,C,[T],0,0,0,0,["d",KC(Ij)],D3,0,C,[T],0,0,0,0,["d",KC(Hh)],Dz,0,C,[],0,3,0,0,0,BF,0,C,[],3,3,0,0,0,D5,0,C,[T],0,3,0,0,["d",KC(II)],D6,0,C,[T],0,3,0,0,["d",KC(IS)],D7,0,C,[T],0,3,0,0,["d",KC(HI)],D8,0,C,[T],0,3,0,0,["d",KC(Hf)],D9,0,C,[T],0,3,0,0,["d",KC(HA)],D$,0,C,[T],0,3,0,0,["d",KC(Jf)],D_,0,C,[T],0,3,0,0,["d",KC(Iz)]]);
$rt_metadata([Ea,0,C,[T],0,3,0,0,["d",KC(Jm)],Eb,0,C,[T],0,3,0,0,["d",KC(HU)],Ec,0,C,[T],0,3,0,0,["d",KC(Ht)],Fr,0,C,[T],0,3,0,0,["d",KC(I7)],Fs,0,C,[T],0,3,0,0,["d",KC(Hl)],Ft,0,C,[T],0,3,0,0,["d",KC(HN)],Fu,0,C,[T],0,3,0,0,["d",KC(I6)],Fo,0,C,[T],0,3,0,0,["d",KC(IR)],Fp,0,C,[T],0,3,0,0,["d",KC(IH)],Dp,0,C,[R],3,3,0,0,0,Dv,0,C,[Dp],3,3,0,0,0,Ga,0,C,[R,Dv,Bn],1,3,0,0,["ij",KB(H3),"gg",KC(HJ),"h1",KC(Hs),"f1",KC(Jp),"h_",KC(Hu),"gM",KB(JD),"gE",KD(HE),"gI",KE(I9),"hs",KB(Iu),"h7",KB(IO),"g8",KC(H9),"hk",KB(HL),
"ix",KC(IP),"ga",KB(H5),"ik",KB(Jq),"ih",KB(Ha),"gy",KC(Ig),"gP",KB(I$),"ht",KD(IM),"g7",KD(HD),"gi",KD(IK),"iy",KB(HB),"hg",KB(Iy),"hJ",KC(He),"gG",KC(HY),"fR",KD(I0),"fE",KB(Hd),"hj",KC(Ix),"g1",KB(HX),"il",KB(Ja),"iC",KC(Hi),"f$",KC(H4),"ia",KC(IN),"hS",KB(H6),"gK",KD(IX),"f4",KC(I3),"is",KB(Ju),"hm",KD(Ir),"hn",KD(H_),"hK",KB(H1),"hL",KC(Jd),"gW",KE(Id),"ir",KB(Hb),"g$",KD(I_),"hd",KB(H2),"fM",KB(I4),"g5",KB(Im),"fD",KB(HZ),"h$",KD(Is),"g3",KC(Jv),"gD",KC(Ia),"ic",KB(JB)],EM,0,C,[],3,3,0,0,0,DZ,0,C,[EM],
0,3,0,0,0,F5,0,C,[T],0,3,0,0,["d",KC(Jr)],Go,0,C,[],0,3,0,0,0,B_,0,C,[],3,3,0,0,0,CR,0,C,[],3,3,0,0,0,Cn,0,C,[],3,3,0,0,0,Eo,0,C,[],3,3,0,0,0,FF,0,C,[Eo],3,3,0,0,0,EY,0,C,[],3,3,0,0,0,Dq,0,C,[],3,3,0,0,0,EU,0,C,[Dq],3,3,0,0,0,DY,0,C,[BF],0,3,0,0,0,Ct,0,C,[CZ],0,3,0,0,0,By,0,C,[],0,3,0,0,0,Ei,0,C,[],0,3,0,0,0,FI,0,C,[],0,3,0,0,0,GF,0,C,[],3,3,0,0,0,DO,0,C,[],0,3,0,0,0,Dh,0,C,[],0,3,0,0,0,Bb,0,Dh,[],0,3,0,0,0,DU,0,Bb,[],0,3,0,0,0,BA,0,Bb,[],0,3,0,0,0,Ew,0,Bb,[],0,3,0,0,0,ES,0,BA,[],0,3,0,0,0,BO,0,BA,[],0,3,0,
0,0,EB,0,BO,[],0,3,0,0,0,EW,0,BO,[],0,3,0,0,0,GS,0,BA,[],0,3,0,0,0,Gr,0,Bb,[],0,3,0,0,0,GE,0,Bb,[],0,3,0,0,0,Fi,0,C,[R],3,3,0,0,0,G8,0,C,[Fi],3,3,0,0,0,DN,0,C,[BF],0,3,0,0,0,B4,0,C,[],0,3,0,0,0,BD,0,C,[Br,Bu],1,3,0,0,0,BW,0,BD,[],12,3,0,BU,0,E_,0,C,[],3,3,0,0,0]);
$rt_metadata([D0,0,C,[E_],3,3,0,0,0,EZ,0,C,[],3,3,0,0,0,BS,0,C,[D0,EZ],1,3,0,0,0,CF,0,BS,[],0,3,0,0,0,F7,0,CF,[],0,3,0,0,0,BJ,0,BS,[],1,3,0,0,0,CU,0,BJ,[],0,3,0,0,["bV",KE(I8)],Bo,0,BD,[],12,3,0,Iq,0,CC,0,C,[Br],1,3,0,0,0,Dd,0,CC,[],0,3,0,HQ,0,GQ,0,C,[],0,3,0,0,0,BZ,0,BD,[],12,0,0,HF,0,Dc,0,BJ,[],0,3,0,0,["bV",KE(HK)],Bq,0,P,[],0,3,0,0,0,G6,0,Bq,[],0,3,0,0,0,Dw,0,Bz,[],0,3,0,0,0,C0,0,Bf,[],0,3,0,0,0,Cy,0,C,[BF],1,3,0,0,0,DB,0,C,[R],3,3,0,0,0,DK,0,C,[DB],0,3,0,0,["c0",KC(Jw)],Db,0,C,[R],3,3,0,0,0,E9,0,C,[Db],
0,3,0,0,["c0",KC(IE)],E$,0,C,[Db],0,3,0,0,["c0",KC(Hz)],Em,0,C,[],3,3,0,0,0,E7,0,C,[],3,0,0,0,0,B2,0,C,[Em,BF,E7],1,3,0,0,0,EV,0,B2,[],0,3,0,0,0,BN,0,C,[],1,3,0,0,0,FA,0,C,[],3,3,0,0,0,Cz,0,BN,[Br,CO,Cd,FA],1,3,0,0,0,Gz,0,C,[],4,3,0,0,0,C9,0,BN,[Br],1,3,0,0,0,B1,0,C,[],0,3,0,IB,0,BQ,0,C,[],0,3,0,0,0,Dl,0,BQ,[],0,3,0,0,0,GO,0,C,[R],1,3,0,0,0,Co,0,Cz,[],1,0,0,0,0,EI,0,Co,[],0,0,0,0,0,Ch,0,C,[],1,3,0,0,0,Cu,0,C,[],0,3,0,0,0,Fa,0,BQ,[],0,3,0,0,0,FN,0,C,[],0,3,0,0,0,EN,0,C,[R],3,3,0,0,0,Ef,0,C,[EN],0,3,0,0,["h2",
KC(Ic)],Cv,0,C,[],3,3,0,0,0,Fj,0,C,[Cv],0,3,0,0,0,Et,0,C9,[],0,0,0,0,0,CQ,0,C,[],4,3,0,IZ,0,Ds,0,C,[],0,3,0,0,0,G$,0,C,[],4,3,0,0,0]);
$rt_metadata([Di,0,Ch,[],1,3,0,0,0,FC,0,Di,[],0,3,0,0,0,EQ,0,Bz,[],0,3,0,0,0,Ck,0,Cy,[],0,3,0,0,0,DA,"SwimlaneTest",3,Ck,[CR,B_],0,3,0,0,0,GB,0,C,[],3,3,0,0,0,Fg,0,C,[Cn],0,3,0,0,0,Dj,0,C,[],0,3,0,0,0,Du,0,Bb,[],0,0,0,0,0,Gs,0,C,[],0,3,0,0,0,B8,0,C,[],0,3,0,0,0,Gn,0,C,[],0,3,0,0,0,F9,0,C,[R],4,3,0,0,0,Gl,0,C,[],0,3,0,0,0,FZ,0,C,[],4,3,0,0,0,Gh,0,C,[],0,0,0,0,0,FG,0,P,[],0,3,0,0,0,Gc,0,C,[R],1,3,0,0,0,DM,0,C,[],3,3,0,0,0,FU,0,C,[DM],0,3,0,0,0,Gx,0,C,[R],1,3,0,0,0,Fb,0,C,[],3,3,0,Kn,0,Do,0,C,[],3,3,0,0,0,Dr,0,
C,[],3,3,0,0,0,Dg,0,C,[Dr,Bu],0,3,0,0,0,CI,0,Dg,[],0,0,0,0,0,Ed,0,C,[Cv],0,3,0,0,0,CB,0,P,[],0,3,0,0,0,Gq,0,BV,[],0,3,0,0,0,GD,0,C,[],0,0,0,0,0,B6,0,P,[],0,3,0,0,0,En,0,C,[],0,3,0,0,0,Fh,0,B6,[],0,3,0,0,0,Es,0,P,[],0,3,0,0,0,DX,0,P,[],0,3,0,0,0]);
function $rt_array(cls,data){this.jm=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","Either src or dest is null","null","connectToDom: called on already connected","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec2 uParameters;\nin vec2 vPos, vTex;\nout vec2 screenPos;\nout vec2 lrScreen;\n\nfloat translateScaleX(float x) { return x * uSizePos.x + uSizePos.z; }\nfloat translateScaleY(float y) { return y * uSizePos.y + uSizePos.w; }\n\nfloat glToPixelX(float x) { return (x + 1.0) * 0.5 * uResolution"
+".x; }\nfloat glToPixelY(float y) { return (1.0 - y) * 0.5 * uResolution.y; }\nfloat pixelToGlX(float x) { return x * 2.0 / uResolution.x - 1.0; }\nfloat pixelToGlY(float y) { return 1.0 - y * 2.0 / uResolution.y; }\n\nvec2 glToPixel(vec2 gl) { return vec2(glToPixelX(gl.x), glToPixelY(gl.y)); }\nvec2 pixelToGl(vec2 px) { return vec2(pixelToGlX(px.x), pixelToGlY(px.y)); }\n\nvoid main() {\n  float lX = mix(vPos.x, vTex.x, vTex.y);\n  float rX = mix(vTex.x, vPos.x, vTex.y);\n\n  vec2 pos = vec2(translateScaleX(vPos.x), tr"
+"anslateScaleY(vPos.y));\n  float lPx = glToPixelX(translateScaleX(lX));\n  float rPx = glToPixelX(translateScaleX(rX));\n\n  float screenX = glToPixelX(pos.x);\n  float screenY = glToPixelY(pos.y);\n\n  // extend left/right edge to left/right pixel bound\n  screenX = mix(floor(screenX), ceil(screenX), vTex.y);\n  // convert back to gl space\n  pos.x = pixelToGlX(screenX);\n\n  screenPos = vec2(screenX, screenY);\n  lrScreen = vec2(lPx, rPx);\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nin vec2 screenPos;\nin vec2 lrScreen;\nvoid main() {\n  float lPx = max(lrScreen.x, screenPos.x - 0.5);\n  float rPx = min(lrScreen.y, screenPos.x + 0.5);\n  float inside = rPx - lPx;\n  outColor = vec4(uColor.xyz * inside, 1.0);\n}",
"Swimlane demo "," events","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  outColor = texture(sDiffuse, textureUV);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uTextPow;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main("
+") {\n            // D2D and JsCanvas(alpha=true) comparison:\n            //    - rgb is different\n            //    - alpha is identical\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = pow(t, uTextPow.x);\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBgColor;\nuniform sampler2D sDiffuse;\nuniform vec2 uTextPow;\nin vec2 textureUV;\nvoid main() {\n  vec3 textRGB = texture(sDiffuse, textureUV).rgb;\n  vec3 textRGBp = vec3(\n    pow(textRGB.x, uTextPow.x),\n    pow(textRGB.y, uTextPow.x),\n    pow(textRGB.z, uTextPow.x));\n  vec3 mixColor = mix(uBgColor.rgb, uColor.rgb, textRGBp);\n  // if (dot(textRGB, textRGB) == 0.0) outColor = uBgColor; else\n  outColo"
+"r = vec4(textRGB * 0.0 + mixColor * 1.0, 1.0);\n}","WebGraphics::ctor finish","keydown","keyup","mousemove","mousedown","mouseup","mouseenter","mouseleave","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","uParameterX = ","false","true","mousemove position = ","onPaste: item.type = ",", item.kind = ","pixel shader error: ","vertex shader error: ","----","vs <-> ps link error: ","compileProgram exit: ","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBaseline;\nuniform vec4 uScaleHExp;\nin vec2 outScreenPos;\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  float sX = uScaleHExp.x, sY = uScaleHExp.y;\n  float H = uSc"
+"aleHExp.z;\n  float E = uScaleHExp.w;\n  float arg = (pt.x - uBaseline.x) * sX;\n  float sinA = sin(arg);\n  float vDist = abs(sinA * sY - uBaseline.y + pt.y);\n  float k = sqrt(1. + (1. - sinA * sinA) * sX * sX * sY * sY * 0.5);\n  float v = vDist / (H * k);\n  float debug = uBaseline.z;\n  float alpha = pow(1. - clamp(v + .5 + debug, 0.0, 1.0), E);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","Index out of bounds","Action must be non-null","Replacement preconditions do not hold","POS2","vPos","TEX2",
"vTex","UTF-8","BYTE","FLOAT","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","BIG_ENDIAN","LITTLE_ENDIAN","The last char in dst "]);
Bt.prototype.toString=function(){return $rt_ustr(this);};
Bt.prototype.valueOf=Bt.prototype.toString;C.prototype.toString=function(){return $rt_ustr(IW(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(Kp);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=GK.prototype;c.get=c.hl;Object.defineProperty(c,"length",{get:c.gH});c=Fm.prototype;c.onAnimationFrame=c.gf;c=Fk.prototype;c.handleEvent=c.d;c=Fl.prototype;c.f=c.hH;c=GR.prototype;c.removeEventListener=c.fy;c.dispatchEvent=c.es;c.addEventListener=c.eR;c=G1.prototype;c.removeEventListener=c.fy;c.dispatchEvent=c.es;c.addEventListener=c.eR;c=D1.prototype;c.handleEvent=c.d;c=D3.prototype;c.handleEvent=c.d;c=D5.prototype;c.handleEvent=c.d;c=D6.prototype;c.handleEvent=c.d;c=D7.prototype;c.handleEvent
=c.d;c=D8.prototype;c.handleEvent=c.d;c=D9.prototype;c.handleEvent=c.d;c=D$.prototype;c.handleEvent=c.d;c=D_.prototype;c.handleEvent=c.d;c=Ea.prototype;c.handleEvent=c.d;c=Eb.prototype;c.handleEvent=c.d;c=Ec.prototype;c.handleEvent=c.d;c=Fr.prototype;c.handleEvent=c.d;c=Fs.prototype;c.handleEvent=c.d;c=Ft.prototype;c.handleEvent=c.d;c=Fu.prototype;c.handleEvent=c.d;c=Fo.prototype;c.handleEvent=c.d;c=Fp.prototype;c.handleEvent=c.d;c=Ga.prototype;c.createEntityReference=c.f1;c.getElementById=c.g8;c.createTextNode
=c.gG;c.hasChildNodes=c.hK;c.querySelectorAll=c.iC;c.removeChild=c.f4;c.cloneNode=c.gy;c.createComment=c.ia;c.insertBefore=c.gK;c.getElementsByTagNameNS=c.gE;c.hasAttributes=c.ga;c.normalize=c.il;c.hasChildNodesJS=c.h7;c.getElementsByTagName=c.hj;c.appendChild=c.g3;c.createAttributeNS=c.ht;c.dispatchEvent=c.hJ;c.replaceChild=c.hn;c.createElementNS=c.g$;c.createCDATASection=c.gg;c.querySelector=c.f$;c.createElement=c.h_;c.isSupported=c.gi;c.importNode=c.g7;c.removeEventListener=c.gW;c.createAttribute=c.hL;c.createDocumentFragment
=c.fD;c.createProcessingInstruction=c.fR;c.addEventListener=c.h$;Object.defineProperty(c,"nodeName",{get:c.g1});Object.defineProperty(c,"documentElement",{get:c.fE});Object.defineProperty(c,"childNodes",{get:c.fM});Object.defineProperty(c,"prefix",{get:c.hd,set:c.ix});Object.defineProperty(c,"implementation",{get:c.gP});Object.defineProperty(c,"textContent",{get:c.ih,set:c.gD});Object.defineProperty(c,"parentNode",{get:c.g5});Object.defineProperty(c,"nextSibling",{get:c.is});Object.defineProperty(c,"nodeType",
{get:c.iy});Object.defineProperty(c,"doctype",{get:c.ik});Object.defineProperty(c,"localName",{get:c.hg});Object.defineProperty(c,"nodeValue",{get:c.hS,set:c.h1});Object.defineProperty(c,"firstChild",{get:c.hs});Object.defineProperty(c,"lastChild",{get:c.ij});Object.defineProperty(c,"previousSibling",{get:c.gM});Object.defineProperty(c,"namespaceURI",{get:c.ic});Object.defineProperty(c,"attributes",{get:c.hk});Object.defineProperty(c,"ownerDocument",{get:c.ir});c=F5.prototype;c.handleEvent=c.d;c=DK.prototype;c.f
=c.c0;c=E9.prototype;c.f=c.c0;c=E$.prototype;c.f=c.c0;c=Ef.prototype;c.accept=c.h2;})();
})(typeof self!=='undefined'?self:typeof global!=='undefined'?global:this,typeof self!=='undefined'?self:typeof global!=='undefined'?global:this);