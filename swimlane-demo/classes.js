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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.bH=f;}
function $rt_cls(cls){return GL(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return KG(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.S.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return Kv(t);}
function $rt_throwableCause(t){return Ky(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Lo());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return Lp(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var KS=$rt_compare;var Lq=$rt_nullCheck;var N=$rt_cls;var S=$rt_createArray;var CG=$rt_isInstance;var Lr=$rt_nativeThread;var Ls=$rt_suspending;var Lt=$rt_resuming;var Lu=$rt_invalidPointer;var B=$rt_s;var Bb=$rt_eraseClinit;var GJ=$rt_imul;var J7=$rt_wrapException;var Lv=$rt_checkBounds;var Lw=$rt_checkUpperBound;var Lx=$rt_checkLowerBound;var Ly=$rt_wrapFunction0;var Lz=$rt_wrapFunction1;var LA=$rt_wrapFunction2;var LB=$rt_wrapFunction3;var LC=$rt_wrapFunction4;var E=$rt_classWithoutFields;var GT
=$rt_createArrayFromData;var K4=$rt_createCharArrayFromData;var LD=$rt_createByteArrayFromData;var LE=$rt_createShortArrayFromData;var LF=$rt_createIntArrayFromData;var LG=$rt_createBooleanArrayFromData;var K6=$rt_createFloatArrayFromData;var LH=$rt_createDoubleArrayFromData;var LI=$rt_createLongArrayFromData;var LJ=$rt_createBooleanArray;var FB=$rt_createByteArray;var LK=$rt_createShortArray;var BB=$rt_createCharArray;var Hs=$rt_createIntArray;var LL=$rt_createLongArray;var H8=$rt_createFloatArray;var LM=$rt_createDoubleArray;var KS
=$rt_compare;var LN=$rt_castToClass;var LO=$rt_castToInterface;var LP=Long_toNumber;var LQ=Long_fromInt;var LR=Long_fromNumber;var LS=Long_create;var LT=Long_ZERO;var LU=Long_hi;var H1=Long_lo;
function C(){this.$id$=0;}
function LV(){var a=new C();Gl(a);return a;}
function Gl(a){}
function Cg(a){return GL(a.constructor);}
function JP(a){var b,c,d,e,f,g,h,i,j,k,l;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;if(!d)e=B(0);else{if(!d)f=32;else{g=0;f=d>>>16|0;if(f)g=16;else f=d;h=f>>>8|0;if(!h)h=f;else g=g|8;i=h>>>4|0;if(!i)i=h;else g=g|4;f=i>>>2|0;if(!f)f=i;else g=g|2;if(f>>>1|0)g=g|1;f=(32-g|0)-1|0;}j=(((32-f|0)+4|0)-1|0)/4|0;k=BB(j);l=k.data;j=(j-1|0)*4|0;f=0;while(j>=0){i=f+1|0;l[f]=Dg((d>>>j|0)&15,16);j=j-4|0;f=i;}e=KG(k);}b=Y();K(K(b,B(1)),e);return W(b);}
function Kj(a){var b,c,d;if(!CG(a,Dl)&&a.constructor.$meta.item===null){b=new DD;U(b);J(b);}b=Ie(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var G4=E();
function Lm(b){var c,d,e,f,g,h,i,j,k,l,m;Gh();GE();HE();Hn();HQ();Gc();G7();c=new $rt_globals.Array();d=new DM;e=new F0;f=new F2;g="canvasDiv";h=new FW;i=new C$;EL(i);h.d4=i;i=new C$;EL(i);h.d3=i;j=new FA;i=null;Gl(j);j.eJ=i;j.bD=LW;h.dg=j;i=new Dt;i.dj=j;h.dO=i;h.bT=c;k=c.length;l=0;while(l<k){i=h.bT[l];m=new DU;m.dT=h;m.dS=l;j=Bl(m,"f");i.onmessage=j;i=c[l];j=Hi();i.postMessage(j);l=l+1|0;}h.bQ=0;h.dP=Hs(k);c=new FK;c.d_=d;d.c2=c;c=new FL;c.c1=d;d.ec=c;c=new FH;c.cy=d;d.c0=c;i=new FJ;i.dZ=d;d.cZ=new $rt_globals.ResizeObserver(Bl(i,
"f"));d.r=null;d.bo=1;d.et=1;d.b$=g;d.e_=h;h=(BX()).createElement("canvas");c=0;h.tabIndex=c;j=h.style;j.setProperty("width","100%");j.setProperty("height","100%");j.setProperty("outline","none");d.x=h;i=h.getContext("2d");d.cF=i;c="copy";i.globalCompositeOperation=c;if(LX===null){j=new $rt_globals.OffscreenCanvas(256,256);m=JW(!!0,!!0,!!1,!!1);m=j.getContext("webgl2",m);if(m!==null){c=new Co;Gf(c,m,new D$,H7(),2.25,0.625);c.eG=KR();c.L=j;c.el=j.width;c.bP=c.L.height;LX=c;}c=new Ea;j.addEventListener("webglcontextlost",
Bl(c,"handleEvent"));i=new Ec;j.addEventListener("webglcontextrestored",Bl(i,"handleEvent"));}c=LX;d.Z=c;if(c!==null){Gr(d,g);d.b1=K5(d.x,d.ec);H5(d.cZ,d.x);j=$rt_globals.window;i=d.c0;j.addEventListener("resize",Bl(i,"handleEvent"));}if(!Go(d,e))Ge(f);HD(d);}
var D2=E(0);
var DF=E(0);
function Eb(){var a=this;C.call(a);a.bM=null;a.U=null;}
function GL(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Eb;c.U=b;d=c;b.classObject=d;}return c;}
function Cb(a){return a.U.$meta.primitive?1:0;}
function Cw(a){return GL(a.U.$meta.item);}
var Hx=E();
function Bl(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Bk(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Hh=E();
function Ie(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function GN(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(GN(d[e],c))return 1;e=e+1|0;}return 0;}
function B2(){var a=this;C.call(a);a.ea=null;a.d7=null;a.b2=0;a.cm=0;}
function LY(a){var b=new B2();Ba(b,a);return b;}
function Ba(a,b){a.b2=1;a.cm=1;a.ea=b;}
function Iv(a){return a;}
function Kv(a){return a.ea;}
function Ky(a){var b;b=a.d7;if(b===a)b=null;return b;}
var BD=E(B2);
function LZ(){var a=new BD();U(a);return a;}
function U(a){a.b2=1;a.cm=1;}
var P=E(BD);
function Lp(a){var b=new P();Js(b,a);return b;}
function Js(a,b){Ba(a,b);}
var Hk=E(P);
var Bz=E(0);
var Bw=E(0);
var Ci=E(0);
function By(){var a=this;C.call(a);a.S=null;a.bm=0;}
var L0=null;var L1=null;var L2=null;function HI(){HI=Bb(By);IX();}
function KG(a){var b=new By();Gu(b,a);return b;}
function Lb(a,b,c){var d=new By();F3(d,a,b,c);return d;}
function Gu(a,b){HI();F3(a,b,0,b.data.length);}
function F3(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;HI();e=BB(d);a.S=e;if(b===null){f=new Cy;Ba(f,B(2));J(f);}if(c>=0&&d>=0&&(c+d|0)<=C7(b)&&(0+d|0)<=C7(e)){a:{b:{c:{if(b!==e){g=Cw(Cg(b));f=Cw(Cg(e));if(g!==null&&f!==null){if(g===f)break c;if(!Cb(g)&&!Cb(f)){h=b;i=0;j=c;while(i<d){k=h.data;l=j+1|0;m=k[j];n=f.U;if(!(m!==null&&!(typeof m.constructor.$meta==='undefined'?1:0)&&GN(m.constructor,n)?1:0)){Dc(b,c,e,0,i);g=new Cc;U(g);J(g);}i=i+1|0;j=l;}Dc(b,c,e,0,d);break a;}if(!Cb(g))break b;if(Cb(f))break c;else break b;}g
=new Cc;U(g);J(g);}}Dc(b,c,e,0,d);break a;}g=new Cc;U(g);J(g);}return;}g=new Bf;U(g);J(g);}
function BC(a,b){var c,d;if(b>=0){c=a.S.data;if(b<c.length)return c[b];}d=new C6;U(d);J(d);}
function Bh(a){return a.S.data.length;}
function Fk(a){return a.S.data.length?0:1;}
function Je(a,b){var c;if(a===b)return 1;if(!(b instanceof By))return 0;if(Bh(b)!=Bh(a))return 0;c=0;while(c<Bh(b)){if(BC(a,c)!=BC(b,c))return 0;c=c+1|0;}return 1;}
function I5(a){var b,c,d,e;a:{if(!a.bm){b=a.S.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.bm=(31*a.bm|0)+e|0;d=d+1|0;}}}return a.bm;}
function IX(){var b,c;b=BB(0);L0=b;c=new By;HI();c.S=b;L1=c;L2=new DR;}
var BZ=E(B2);
var B4=E(BZ);
var G2=E(B4);
var Df=E();
function B7(){Df.call(this);this.b6=0;}
var L3=null;var L4=null;function IK(a){var b=new B7();F8(b,a);return b;}
function F8(a,b){a.b6=b;}
function EF(b){var c,d;if(b>=(-128)&&b<=127){a:{if(L4===null){L4=S(B7,256);c=0;while(true){d=L4.data;if(c>=d.length)break a;d[c]=IK(c-128|0);c=c+1|0;}}}return L4.data[b+128|0];}return IK(b);}
function Gh(){L3=N($rt_intcls());}
function CN(){var a=this;C.call(a);a.l=null;a.h=0;}
function Ca(a,b,c){var d,e,f,g;d=a.h;e=d-b|0;FO(a,(d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.l.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.h=a.h+(c-b|0)|0;}
var CU=E(0);
var Gg=E(CN);
function Y(){var a=new Gg();JO(a);return a;}
function JO(a){a.l=BB(16);}
function K(a,b){var c;c=a.h;if(b===null)b=B(3);Dm(a,c,b);return a;}
function V(a,b){var c,d,e,f,g,h,i,j;c=a.h;d=1;if(b<0){d=0;b= -b|0;}a:{if($rt_ucmp(b,10)<0){if(d)Ca(a,c,c+1|0);else{Ca(a,c,c+2|0);e=a.l.data;f=c+1|0;e[c]=45;c=f;}a.l.data[c]=Dg(b,10);}else{g=1;h=1;f=$rt_udiv((-1),10);b:{while(true){i=g*10|0;if($rt_ucmp(i,b)>0){i=g;break b;}h=h+1|0;if($rt_ucmp(i,f)>0)break;g=i;}}if(!d)h=h+1|0;Ca(a,c,c+h|0);if(d)f=c;else{e=a.l.data;f=c+1|0;e[c]=45;}while(true){if(!i)break a;e=a.l.data;j=f+1|0;e[f]=Dg($rt_udiv(b,i),10);b=$rt_umod(b,i);i=$rt_udiv(i,10);f=j;}}}return a;}
function BO(a,b){var c;c=a.h;Ca(a,c,c+1|0);a.l.data[c]=b;return a;}
function HB(a,b){a.h=b;}
function W(a){return Lb(a.l,0,a.h);}
function FO(a,b){var c,d,e,f;c=a.l.data.length;if(c<b){b=c>=1073741823?2147483647:BL(b,BL(c*2|0,5));d=a.l.data;e=BB(b);f=e.data;b=Bu(b,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.l=e;}}
function Dm(a,b,c){var d,e,f;if(b>=0&&b<=a.h){a:{if(c===null)c=B(3);else if(Fk(c))break a;FO(a,a.h+Bh(c)|0);d=a.h-1|0;while(d>=b){a.l.data[d+Bh(c)|0]=a.l.data[d];d=d+(-1)|0;}a.h=a.h+Bh(c)|0;d=0;while(d<Bh(c)){e=a.l.data;f=b+1|0;e[b]=BC(c,d);d=d+1|0;b=f;}}return a;}c=new C6;U(c);J(c);}
var BQ=E(B4);
var GR=E(BQ);
function L5(a){var b=new GR();JV(b,a);return b;}
function JV(a,b){Ba(a,b);}
var GH=E(BQ);
function L6(a){var b=new GH();J$(b,a);return b;}
function J$(a,b){Ba(a,b);}
var R=E(0);
function Gx(b){return b;}
var DK=E(0);
var Hm=E();
function I9(a,b){return a.i4(b);}
function H6(a){return a.iO();}
var C2=E();
var L7=null;var L8=null;function Fa(){if(L7===null)L7=ID(L9,0);return L7;}
function Cu(){if(L8===null)L8=ID(L$,0);return L8;}
function KX(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=C7(b)&&(e+f|0)<=C7(d)){Dc(b,c,d,e,f);return;}b=new Bf;U(b);J(b);}
function Dc(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Ho(){return LR($rt_globals.performance.now()*1000000.0);}
var HM=E();
var Ff=E(0);
function DM(){var a=this;C.call(a);a.c2=null;a.ec=null;a.c0=null;a.cZ=null;a.x=null;a.cF=null;a.r=null;a.b$=null;a.b1=null;a.Z=null;a.bo=0;a.fN=0;a.ba=null;a.e_=null;a.et=0;}
function Gr(a,b){var c,d;if(a.x.parentNode!==null)BF(Cu(),B(4));else{if((b?1:0)?1:0)a.b$=b;b=BX();c=a.b$;d=b.getElementById(c);if(d!==null){b=a.x;d.appendChild(b);CJ(a);}}}
function HD(a){a.x.focus();}
function Go(a,b){var c,d;b=a.Z;if(b!==null){c=new Dz;d=a.b1.g;c.cD=b;c.bb=d;c.bw=a;a.ba=KV(c);CJ(a);}return a.Z===null?0:1;}
function Ew(a,b){var c;c=BX();b=$rt_ustr(b);c.title=b;}
function CJ(a){a.fN=$rt_globals.requestAnimationFrame(Bl(a.c2,"onAnimationFrame"));}
function Da(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;b=a.Z;c=a.r;d=c.b;e=c.a;f=b.L.width;g=b.L.height;if(f<d){c=b.L;b.el=d;h=d;c.width=h;}if(g<e){c=b.L;b.bP=e;b=e;c.height=b;}b=a.Z;c=a.r;d=c.b;e=c.a;B8(b.bc,d,e);c=b.i;b=b.bc;f=b.b;g=b.a;c.viewport(0,0,f,g);b=a.ba;if(b.bu===null){b.bu=S(B9,b.bt.data.length);d=0;while(true){i=b.bt.data;if(d>=i.length)break;b.bu.data[d]=Ke(b.j.i,i[d]);d=d+1|0;}}Fn(b.j,2);c=b.j;h=b.ce;j=c.i;k=h.X;l=h.V;m=h.W;n=h.M;j.clearColor(k,l,m,n);c.i.clear(16384);D6(b.j,b.bG);d=0;e=0;while
(d<20){f=b.d6+GJ(b.cJ+b.bR|0,d)|0;l=0.019999999552965164*Ee(b,b.m);k=Ee(b,b.m*(b.v-1.0));n=b.bR;m=1.0*n;o=b.k.a;m=m/o;n=1.0-(f*2.0+n)/o;c=b.bG;h=b.j;j=h.i;h=h.bc;p=c.bY;j.uniform4f(p,l,m,k,n);DJ(c,j,h);c=b.bG;h=b.j.i;j=b.cl.data[e];Gw(h,c.df,j);c=b.j;c.bg=DL(b.bu.data[e],c.bg);e=e+1|0;d=d+1|0;}Cz(b.j,0);c=b.J;g=b.bF;h=b.k;EC(c,g,0,h.a,20000,h.b,15,1);c=b.G;d=b.br;h=b.k;EC(c,d,0,h.b,40000,h.a,15,0);Cz(b.j,1);E9(b.J,b.j);E9(b.G,b.j);FX(b.J,b.j);FX(b.G,b.j);Cz(b.j,0);b=a.cF;c=a.Z;h=c.L;e=c.bP;c=a.r;d=c.a;q=e-d
|0;r=c.b;s=d;b.drawImage(h,0.0,q,r,s,0.0,0.0,r,s);}
function D7(a,b,c){var d,e,f,g;if(a.r===null)a.r=new Bi;B8(a.r,b,c);a.b1.s=a.r;d=b&&c?1:0;if(d){e=a.x;f=b;e.width=f;g=a.x;e=c;g.height=e;}EZ(a.ba,a.r,Dd(a));if(d)Da(a);}
function Dd(a){return $rt_globals.window.devicePixelRatio;}
var C8=E(0);
var F0=E();
var BT=E(0);
var F2=E();
function Ge(a){var b,c,d;b=(BX()).createElement("pre");c="FATAL: WebGL is not enabled in the browser";b.innerHTML=c;d=b.style;d.setProperty("padding-left","10px");d.setProperty("padding-right","10px");(BX()).getElementById("panelDiv").appendChild(b);}
var C5=E(0);
var DR=E();
var Bf=E(P);
var Gz=E();
function C7(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(L_());}return b.data.length;}
function Jy(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Cy=E(P);
var Cc=E(P);
var Cj=E();
var Ma=null;var Mb=null;function EA(b){return (b&64512)!=55296?0:1;}
function Ed(b){return (b&64512)!=56320?0:1;}
function Dg(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GE(){Ma=N($rt_charcls());Mb=S(Cj,128);}
var Gm=E();
function Hp(b){return $rt_str(b);}
var Eu=E(0);
function Cn(){var a=this;C.call(a);a.bT=null;a.d4=null;a.d3=null;a.dg=null;a.dP=null;a.c6=0;a.bQ=0;a.dO=null;}
var FW=E(Cn);
var E0=E(0);
function FK(){C.call(this);this.d_=null;}
function IE(a,b){var c,d;c=b;b=a.d_;if(!(!Hz(b.ba,c/1000.0)&&!b.bo)){d=b.r;if(d!==null&&GJ(d.b,d.a)){b.bo=0;Da(b);}}CJ(b);}
function FL(){C.call(this);this.c1=null;}
function Bg(a){a.c1.bo=1;}
var T=E(0);
function FH(){C.call(this);this.cy=null;}
function JB(a,b){var c;b=a.cy;c=b.r;if(c!==null){EZ(b.ba,c,Dd(b));c=b.r;if(GJ(c.b,c.a))Da(b);}}
var DZ=E(0);
function FJ(){C.call(this);this.dZ=null;}
function Ku(a,b,c){var d,e,f,g;c=a.dZ;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.x){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Dd(c);D7(c,Cl(f.width*g),Cl(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];D7(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var GC=E();
function H5(b,c){Kd(b,c,Io());}
function Io(){return {box:'device-pixel-content-box'};}
function Kd(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Gk=E();
function Kf(b){var c,d;c=b.jc();Lk();b=Mc;d=c.data;return b.decode(d);}
function CM(){var a=this;C.call(a);a.eu=null;a.fR=null;a.i=null;a.eP=0;a.f7=null;a.eM=0;a.fH=0;a.bK=null;a.e2=null;a.eE=null;a.fY=null;a.f3=null;a.e4=null;a.f1=null;a.eD=null;a.fs=null;a.eN=null;a.cQ=null;a.bc=null;a.dG=null;a.bg=0;a.bV=0;a.eY=null;a.fm=0.0;a.fq=0.0;}
function Gf(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a.bc=new Bi;a.bg=0;a.eY=new Ev;a.eu=c;a.eP=d;g=$rt_str(b.getParameter(7938));c=Y();K(K(c,B(5)),g);$rt_globals.console.info($rt_ustr(W(c)));a.i=b;h=new Fd;h.fh=1;Md=Md+1|0;h.fW=4;h.fU=4;i=new $rt_globals.OffscreenCanvas(4,4);h.f$=i;j=Jx();i=i.getContext("2d",j);h.fl=i;j="#FFFFFF";i.fillStyle=j;a.fR=h;k=K6([1.0,(-1.0),1.0,1.0,1.0,1.0,1.0,0.0,(-1.0),(-1.0),0.0,1.0,(-1.0),1.0,0.0,0.0]);l=K4([0,1,2,1,2,3]);c=new B9;BY();Fp(c,b,Me,k,l);a.cQ=c;if(g===B(6))d=1;else a:{d
=0;if((d+Bh(B(6))|0)>Bh(g))d=0;else{m=0;while(m<Bh(B(6))){n=BC(B(6),m);o=d+1|0;if(n!=BC(g,d)){d=0;break a;}m=m+1|0;d=o;}d=1;}}a.fH=d;c=new DY;c.eq=b;a.f7=c;a.fm=e;a.fq=f;d=b.getParameter(3379);a.eM=d;c=Y();V(K(c,B(7)),d);$rt_globals.console.info($rt_ustr(W(c)));k=S(Bd,9);l=k.data;c=new D4;BM(c,b,B(8),B(9),Me);g=c.c;c.c$=b.getUniformLocation(g,"uColor");a.bK=c;l[0]=c;c=K0(b,B(10));a.e2=c;l[1]=c;c=new EM;BM(c,b,B(8),B(11),Me);a.eE=c;l[2]=c;c=new E_;EQ(c,b,B(12));h=c.c;c.eO=b.getUniformLocation(h,"uContrast");a.fY
=c;l[3]=c;c=new ER;Fz(c,b,B(13),B(14));a.f3=c;l[4]=c;c=new Fe;Fz(c,b,B(13),B(15));a.e4=c;l[5]=c;c=KQ(b);a.f1=c;l[6]=c;c=Lg(b);a.eD=c;l[7]=c;c=Li(b);a.fs=c;l[8]=c;a.eN=k;Hb(b,B(16));}
function Cz(a,b){Fn(a,!b?0:1);}
function Fn(a,b){var c;if(b==a.bV)return b;if(b<=0)a.i.disable(3042);else a:{a.i.enable(3042);switch(b){case 1:break;case 2:a.i.blendFuncSeparate(770,1,1,1);break a;default:break a;}a.i.blendFuncSeparate(770,771,1,1);}c=a.bV;a.bV=b;return c;}
function E$(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;D6(a,a.bK);f=a.bK;g=a.i;h=b;i=c;j=a.bc;k=d.b;l=j.b;m=k/l;n=d.a;o=j.a;p=n/o;q=(h*2.0+k)/l-1.0;l=1.0-(i*2.0+n)/o;d=f.bY;g.uniform4f(d,m,p,q,l);DJ(f,g,j);d=a.bK;Gw(a.i,d.c$,e);a.bg=DL(a.cQ,a.bg);}
function D6(a,b){var c,d;if(b!==a.dG){c=a.i;d=b.c;c.useProgram(d);a.dG=b;}}
function Co(){var a=this;CM.call(a);a.L=null;a.el=0;a.bP=0;a.eG=null;}
var LX=null;function H7(){return 1;}
function JW(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
function HO(){var a=this;C.call(a);a.g=null;a.bi=null;a.eC=null;a.s=null;}
function K5(a,b){var c=new HO();IG(c,a,b);return c;}
function IG(a,b,c){var d,e,f,g;a.s=null;a.bi=b;d=new DH;d.ch=BG(S(Cd,0));d.cn=BG(S(Cd,0));d.Y=BG(S(CX,0));d.bX=BG(S(Cs,0));d.cR=BG(S(F4,0));d.dq=BG(S(Fg,0));d.dF=BG(S(Fc,0));d.dL=BG(S(BT,0));d.ee=BG(S(BT,0));d.p=c;a.g=d;e=$rt_globals.window;f=S(BI,16);g=f.data;d=new Eg;d.db=a;g[0]=Bc(a,b,B(17),d);d=new Eh;d.dz=a;g[1]=Bc(a,b,B(18),d);d=new Ei;d.cv=a;g[2]=Bc(a,b,B(19),d);d=new Ej;d.dY=a;g[3]=Bc(a,b,B(20),d);d=new Ek;d.cL=a;g[4]=Bc(a,b,B(21),d);d=new El;d.fE=a;g[5]=Bc(a,b,B(22),d);d=new Em;d.eb=a;g[6]=Bc(a,b,B(23),
d);d=new En;d.cV=a;g[7]=Bc(a,b,B(24),d);d=new Eo;d.d2=a;g[8]=Bc(a,b,B(25),d);d=new Ep;d.dh=a;g[9]=Bc(a,b,B(26),d);d=new FP;d.cK=a;g[10]=Bc(a,b,B(27),d);d=new FQ;d.dX=a;g[11]=Bc(a,b,B(28),d);d=new FR;d.cG=a;g[12]=Bc(a,b,B(29),d);d=new FS;d.dy=a;e.addEventListener("paste",Bl(d,"handleEvent"),!!1);g[13]=EG(a,e,B(30),d);d=new FM;d.cs=a;g[14]=Bc(a,e,B(31),d);d=new FN;d.dr=a;g[15]=Bc(a,e,B(32),d);c=new D9;c.ey=f;a.eC=c;e=new Fu;e.d5=b;b.onpointerdown=Bl(e,"f");e=new Fv;e.c4=b;b.onpointerup=Bl(e,"f");}
function D0(){return (BX()).activeElement;}
function Bc(a,b,c,d){b.addEventListener($rt_ustr(c),Bl(d,"handleEvent"));return EG(a,b,c,d);}
function EG(a,b,c,d){var e;e=new DX;e.fy=b;e.fA=c;e.fz=d;return e;}
function EO(a,b){var c;c=new FG;c.fX=b;return c;}
function Bx(a,b){var c,d,e,f,g,h,i;c=$rt_globals.window.devicePixelRatio;d=a.bi.getBoundingClientRect();e=new Bi;f=Cl((b.clientX-d.left)*c);g=Cl((b.clientY-d.top)*c);e.b=f;e.a=g;h=new Bi;i=a.s;h.b=i.b;h.a=i.a;d=new Ds;E8(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.o=e;d.eB=h;return d;}
function FT(a,b,c){var d,e,f,g;d=new Fx;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;E8(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.di=0;d.fC=e;d.cC=f;d.P=c;d.c3=g;return d;}
function Bn(a,b){b.stopPropagation();b.preventDefault();}
var Bo=E(0);
var FV=E(0);
var E6=E(0);
var EX=E(0);
var Et=E(0);
var E1=E(0);
var Fm=E(0);
var Hu=E();
function Jm(a,b,c){a.c7($rt_str(b),Bk(c,"handleEvent"));}
function Kb(a,b,c){a.cP($rt_str(b),Bk(c,"handleEvent"));}
function Jq(a,b,c,d){a.de($rt_str(b),Bk(c,"handleEvent"),d?1:0);}
function Jv(a,b){return !!a.dc(b);}
function HY(a,b,c,d){a.eg($rt_str(b),Bk(c,"handleEvent"),d?1:0);}
var D3=E(0);
var Cf=E(0);
var Cr=E();
function EL(a){}
var Dh=E(0);
var DQ=E(0);
function CZ(){Cr.call(this);this.cx=0;}
var CS=E(CZ);
var DG=E(0);
var Fo=E(0);
function C$(){var a=this;CS.call(a);a.ds=null;a.es=null;a.c_=0;}
function DP(a){var b,c;b=a.ds;if(b===null)b=null;else{c=b.fx;a.ds=c;if(c!==null)c.f8=null;else a.es=null;a.c_=a.c_-1|0;a.cx=a.cx+1|0;b=b.fK;}return b;}
var CC=E(0);
var C_=E();
var Dl=E(0);
var Fj=E(0);
var D1=E(0);
function FA(){var a=this;C_.call(a);a.bj=null;a.bD=null;a.eJ=null;a.bI=0;}
function GM(a,b){var c;c=Ft(a,b);if(c===null)return null;a.bj=CD(a,a.bj,b);a.bI=a.bI+1|0;return c.bs;}
function Ft(a,b){var c,d;c=a.bj;while(true){if(c===null)return null;d=CT(a.bD,b,c.bq);if(!d)break;c=d>=0?c.f:c.d;}return c;}
function CY(a,b,c){var d,e;if(b===null){b=new CO;d=null;b.bq=c;b.bs=d;b.H=1;b.Q=1;return b;}e=CT(a.bD,c,b.bq);if(!e)return b;if(e>=0)b.f=CY(a,b.f,c);else b.d=CY(a,b.d,c);Bs(b);return C4(b);}
function CD(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=CT(a.bD,c,b.bq);if(d<0)b.d=CD(a,b.d,c);else if(d>0)b.f=CD(a,b.f,c);else{e=b.f;if(e===null)return b.d;f=b.d;g=S(CO,e.H).data;h=0;while(true){b=e.d;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.f;while(h>0){h=h+(-1)|0;j=g[h];j.d=b;Bs(j);b=C4(j);}e.f=b;e.d=f;Bs(e);b=e;}Bs(b);return C4(b);}
var Gt=E();
function Dt(){C.call(this);this.dj=null;}
var Dr=E();
var Mf=null;function Hi(){return "ping";}
function Hy(b){return b===Hi()?1:0;}
var FC=E(0);
var HF=E();
function Jl(a,b,c){a.c7($rt_str(b),Bk(c,"handleEvent"));}
function Iz(a,b,c){a.cP($rt_str(b),Bk(c,"handleEvent"));}
function Kw(a,b,c,d){a.de($rt_str(b),Bk(c,"handleEvent"),d?1:0);}
function JM(a,b){return !!a.dc(b);}
function I_(a,b,c,d){a.eg($rt_str(b),Bk(c,"handleEvent"),d?1:0);}
var Ea=E();
function I$(a,b){$rt_globals.console.info("webglcontextlost",b);}
var Ec=E();
function HZ(a,b){$rt_globals.console.info("webglcontextrestored",b);}
function DH(){var a=this;C.call(a);a.ch=null;a.cn=null;a.Y=null;a.bX=null;a.cR=null;a.dq=null;a.dF=null;a.dL=null;a.ee=null;a.p=null;a.O=null;a.d8=0;}
function ES(a,b){var c,d,e,f,g,h,i,j;Bg(a.p);c=(Bj(!b.P?a.cn:a.ch)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e];g=b.cC;if(g==40)f.bn=b.P;if(g==38)f.cg=b.P;if(g==37)f.b5=b.P;if(g==39)f.bW=b.P;if(g==32&&(b.P&&!b.c3?1:0)){f.bJ=f.bJ?0:1;h=Fa();i=f.bJ;f=Y();j=K(f,B(33));Dm(j,j.h,!i?B(34):B(35));BF(h,W(f));i=1;}else i=0;if(i)break;if(b.di)break;e=e+1|0;}return i;}
function EW(a,b){var c,d,e;a:{Bg(a.p);c=a.O;if(c!==null)c.q(b);else{d=(Bj(a.Y)).data.length;e=0;while(true){if(e>=d)break a;e=e+1|0;}}}}
function EN(a,b,c){var d,e,f;Bg(a.p);d=(Bj(a.dq)).data;e=d.length;f=0;while(f<e){if(d[f].h9(b,c))return 1;f=f+1|0;}return 0;}
var BI=E(0);
function Eg(){C.call(this);this.db=null;}
function JA(a,b){var c;c=a.db;if(ES(c.g,FT(c,b,1)))Bn(c,b);}
function Eh(){C.call(this);this.dz=null;}
function JL(a,b){var c;c=a.dz;if(ES(c.g,FT(c,b,0)))Bn(c,b);}
function Ei(){C.call(this);this.cv=null;}
function Iq(a,b){var c,d,e,f,g;c=a.cv;if(c.s!==null){d=Bx(c,b);e=b.clientX;f=b.clientY;g=Y();V(BO(V(K(g,B(36)),e),32),f);W(g);EW(c.g,d);Bn(c,b);}}
function Ej(){C.call(this);this.dY=null;}
function HW(a,b){var c,d,e,f,g,h,i,j,k;c=a.dY;b.button;if(c.s!==null)a:{d=Bx(c,b);c=c.g;e=b.button;Bg(c.p);if(c.O===null){f=(Bj(c.Y)).data;g=f.length;h=0;while(h<g){i=f[h];if(e)j=Mg;else{i.co=1;if(C9(i.J,d.o)){b=i.J;j=d.o;k=new DN;k.cB=i;j=DT(b,j,k,1);}else if(C9(i.G,d.o)){j=i.G;k=d.o;b=new DO;b.dM=i;j=DT(j,k,b,0);}else{j=new E5;j.K=i;j.fg=d;b=d.o;j.cc=b.b;j.cb=b.a;}}if(j!==null){c.O=j;c.d8=e;break a;}h=h+1|0;}}}}
function Ek(){C.call(this);this.cL=null;}
function Ih(a,b){var c,d,e,f;c=a.cL;b.button;if(c.s!==null){Bx(c,b);d=c.g;e=b.button;Bg(d.p);if(e==d.d8&&d.O!==null)d.O=null;f=(Bj(d.Y)).data;if(0>=f.length)e=0;else{d=f[0];if(!e){d.co=0;d.w=d.bE;d.u=d.bz;d.bE=0.0;d.bz=0.0;d.bB=0.0;}e=1;}if(e)Bn(c,b);}}
function El(){C.call(this);this.fE=null;}
function J_(a,b){}
function Em(){C.call(this);this.eb=null;}
function Jp(a,b){var c,d;c=a.eb;if(c.s!==null){b=Bx(c,b);d=b.o;d.b=(-1);d.a=(-1);EW(c.g,b);}}
function En(){C.call(this);this.cV=null;}
function Kh(a,b){var c,d;c=a.cV;if(c.s!==null){a:{switch(b.deltaMode){case 0:break;case 1:break a;case 2:break a;default:break a;}}d=c.g;Bx(c,b);b.deltaX;b.deltaY;Bg(d.p);Bj(d.bX);Bn(c,b);}}
function Eo(){C.call(this);this.d2=null;}
function IF(a,b){var c,d,e;c=a.d2;if(c.s!==null){Bx(c,b);c=c.g;b.button;b.detail;Bg(c.p);d=(Bj(c.Y)).data.length;e=0;while(e<d){e=e+1|0;}}}
function Ep(){C.call(this);this.dh=null;}
function Ia(a,b){var c,d,e,f,g,h,i;c=a.dh;if(c.s!==null){d=Bx(c,b);e=c.g;Bg(e.p);f=(Bj(e.cR)).data;g=f.length;h=0;a:{while(h<g){if(f[h].jw(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Bn(c,b);}}
function FP(){C.call(this);this.cK=null;}
function J1(a,b){var c,d,e;b=a.cK.g;c=(Bj(b.ee)).data;d=c.length;e=0;while(e<d){c[e].ck();e=e+1|0;}Bg(b.p);}
function FQ(){C.call(this);this.dX=null;}
function H4(a,b){var c,d,e;b=a.dX.g;c=(Bj(b.dL)).data;d=c.length;e=0;while(e<d){c[e].ck();e=e+1|0;}if(b.O!==null)b.O=null;Bg(b.p);}
function FR(){C.call(this);this.cG=null;}
function Iw(a,b){var c;c=a.cG;if(c.s!==null)Bx(c,b);}
function FS(){C.call(this);this.dy=null;}
function J0(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.dy;if(D0()===c.bi){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Bj(c.g.dF)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].iB();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.g.p;m=new Es;m.d$=k;m.d9=l;g.getAsString(Bl(m,"accept"));Bn(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=Y();K(K(K(K(l,B(37)),k),B(38)),g);$rt_globals.console.info($rt_ustr(W(l)));}e=e+1|0;}}}
function FM(){C.call(this);this.cs=null;}
function JK(a,b){var c;c=a.cs;if(D0()===c.bi&&EN(c.g,EO(c,b),0))Bn(c,b);}
function FN(){C.call(this);this.dr=null;}
function Jz(a,b){var c;c=a.dr;if(D0()===c.bi&&EN(c.g,EO(c,b),1))Bn(c,b);}
var Dw=E(0);
var DC=E(0);
var GI=E();
function BX(){return $rt_globals.window.document;}
function IO(a){return a.gm();}
function Ir(a,b){return a.jm($rt_str(b));}
function H_(a,b){a.hT($rt_str(b));}
function Kk(a,b){return a.jx($rt_str(b));}
function Ib(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function Kz(a){return a.jp();}
function In(a,b,c){return a.hx($rt_str(b),$rt_str(c));}
function J3(a,b,c,d){a.eg($rt_str(b),Bk(c,"handleEvent"),d?1:0);}
function Jk(a){return a.iA();}
function JG(a){return !!a.gS();}
function IW(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function Iu(a){return a.ik();}
function JH(a,b){a.hj($rt_str(b));}
function IQ(a){return !!a.ho();}
function Km(a){return a.gg();}
function HR(a){return $rt_ustr(a.gw());}
function I6(a,b){return a.iT(b?1:0);}
function J4(a){return a.gQ();}
function JE(a,b,c){return a.hy($rt_str(b),$rt_str(c));}
function Im(a,b,c){return a.hf(b,c?1:0);}
function JC(a,b,c){return !!a.iP($rt_str(b),$rt_str(c));}
function Ii(a){return a.g9();}
function Jo(a){return $rt_ustr(a.iu());}
function HV(a,b){return !!a.dc(b);}
function II(a,b){return a.jn($rt_str(b));}
function JU(a,b,c){return a.gl($rt_str(b),$rt_str(c));}
function HU(a){return a.hK();}
function Jn(a,b){return a.jB($rt_str(b));}
function IH(a){return $rt_ustr(a.gM());}
function J6(a){a.hb();}
function H0(a,b){return a.hB($rt_str(b));}
function IP(a,b){return a.h8($rt_str(b));}
function JF(a,b){return a.ha($rt_str(b));}
function IS(a){return $rt_ustr(a.hY());}
function JQ(a,b,c){return a.gq(b,c);}
function JX(a,b){return a.gu(b);}
function Kq(a){return a.im();}
function Jh(a,b,c){a.cP($rt_str(b),Bk(c,"handleEvent"));}
function IY(a,b,c){return a.hZ(b,c);}
function IM(a){return !!a.iN();}
function J9(a,b){return a.jF($rt_str(b));}
function I2(a,b,c,d){a.de($rt_str(b),Bk(c,"handleEvent"),d?1:0);}
function HS(a){return a.ir();}
function J5(a,b,c){return a.iR($rt_str(b),$rt_str(c));}
function IN(a){return $rt_ustr(a.iv());}
function JY(a){return a.ht();}
function Jd(a){return a.hL();}
function IJ(a){return a.iS();}
function Ji(a,b,c){a.c7($rt_str(b),Bk(c,"handleEvent"));}
function Kr(a,b){return a.h_(b);}
function IZ(a,b){a.gV($rt_str(b));}
function Kx(a){return $rt_ustr(a.gz());}
var E2=E(0);
var D$=E();
var GA=E();
function KR(){var a=new GA();Kg(a);return a;}
function Kg(a){}
function Kn(a,b){b=b.message;$rt_globals.console.info("Error loading image: ",b);}
function GX(){var a=this;C.call(a);a.bk=null;a.bC=null;a.bd=0;}
function BG(a){var b=new GX();Jj(b,a);return b;}
function Jj(a,b){a.bk=b;}
function Ck(a,b){var c,d,e;c=a.bd;d=a.bk;if(c==d.data.length)a.bk=E4(d,c+4|0);d=a.bk.data;e=a.bd;a.bd=e+1|0;d[e]=b;a.bC=null;}
function Bj(a){var b;b=a.bC;if(!(b!==null&&b.data.length==a.bd))a.bC=E4(a.bk,a.bd);return a.bC;}
var Cd=E(0);
var CX=E(0);
var Cs=E(0);
var EE=E(0);
var F4=E(0);
var Fg=E(0);
var Dx=E(0);
var Fc=E(0);
function D9(){C.call(this);this.ey=null;}
var CA=E();
var LW=null;function CT(a,b,c){return KS(b.b6,c.b6);}
function HE(){LW=new CA;}
function Bi(){var a=this;C.call(a);a.b=0;a.a=0;}
function EP(a,b){a.b=b.b;a.a=b.a;}
function B8(a,b,c){a.b=b;a.a=c;}
var Ev=E();
var F9=E();
var Hf=E(0);
function DY(){C.call(this);this.eq=null;}
function Do(){var a=this;C.call(a);a.c=null;a.en=null;}
function GG(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(39):B(40);g=$rt_str(b.getShaderInfoLog(e));h=Y();K(K(h,f),g);g=W(h);b.deleteShader(e);BF(Fa(),g);BF(Cu(),B(41));BF(Cu(),d);BF(Cu(),B(41));b=new P;Ba(b,g);J(b);}
function Bd(){var a=this;Do.call(a);a.d1=null;a.bY=null;a.dH=null;}
function Mh(a,b,c,d){var e=new Bd();BM(e,a,b,c,d);return e;}
function BM(a,b,c,d,e){var f,g,h,i,j,k;a.en=e;f=GG(b,35633,c);d=GG(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.c=g;h=e.dm.data;i=h.length;j=0;while(j<i){c=h[j];d=a.c;k=c.bl;c=c.dv;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.c;b.linkProgram(c);if(!b.getProgramParameter(c,35714)){d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b=new P;c=Y();K(K(c,B(42)),d);Ba(b,W(c));J(b);}Hb(b,B(43));a.dH=new Bi;c=a.c;a.d1=b.getUniformLocation(c,"uResolution");c
=a.c;a.bY=b.getUniformLocation(c,"uSizePos");}
function DJ(a,b,c){var d,e,f;d=a.dH;if(!(d.b==c.b&&d.a==c.a?1:0)){EP(d,c);d=a.d1;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function D4(){Bd.call(this);this.c$=null;}
function BE(){Bd.call(this);this.eH=null;}
function K0(a,b){var c=new BE();EQ(c,a,b);return c;}
function Mi(a,b,c){var d=new BE();ET(d,a,b,c);return d;}
function EQ(a,b,c){ET(a,b,B(8),c);}
function ET(a,b,c,d){BY();BM(a,b,c,d,Me);c=a.c;a.eH=b.getUniformLocation(c,"sDiffuse");}
var EM=E(Bd);
function E_(){BE.call(this);this.eO=null;}
function BS(){var a=this;BE.call(a);a.eF=null;a.fF=null;a.eZ=null;a.fZ=null;}
function Mj(a,b,c){var d=new BS();Fz(d,a,b,c);return d;}
function Fz(a,b,c,d){ET(a,b,c,d);c=a.c;a.eF=b.getUniformLocation(c,"uTexTransform");c=a.c;a.fF=b.getUniformLocation(c,"uColor");c=a.c;a.eZ=b.getUniformLocation(c,"uBgColor");c=a.c;a.fZ=b.getUniformLocation(c,"uTextPow");}
var ER=E(BS);
var Fe=E(BS);
function Hv(){var a=this;BE.call(a);a.fP=null;a.fO=null;a.fG=null;}
function KQ(a){var b=new Hv();If(b,a);return b;}
function If(a,b){var c,d;EQ(a,b,B(44));c=a.c;a.fP=b.getUniformLocation(c,"uColorB");d=a.c;a.fO=b.getUniformLocation(d,"uColorF");d=a.c;a.fG=b.getUniformLocation(d,"uContrast");}
function G0(){var a=this;Bd.call(a);a.fw=null;a.ep=null;a.eo=null;}
function Lg(a){var b=new G0();Ik(b,a);return b;}
function Ik(a,b){var c;BY();BM(a,b,B(8),B(45),Me);c=a.c;a.fw=b.getUniformLocation(c,"uColor");c=a.c;a.ep=b.getUniformLocation(c,"uPoints1");c=a.c;a.eo=b.getUniformLocation(c,"uPoints2");}
function Hd(){var a=this;Bd.call(a);a.eW=null;a.e0=null;a.eL=null;}
function Li(a){var b=new Hd();JI(b,a);return b;}
function JI(a,b){var c;BY();BM(a,b,B(8),B(46),Me);c=a.c;a.eW=b.getUniformLocation(c,"uColor");c=a.c;a.e0=b.getUniformLocation(c,"uBaseline");c=a.c;a.eL=b.getUniformLocation(c,"uScaleHExp");}
var FF=E(0);
var HN=E(0);
function Gw(b,c,d){var e,f,g,h;e=d.X;f=d.V;g=d.W;h=d.M;b.uniform4f(c,e,f,g,h);}
function Hb(b,c){var d,e;d=b.getError();if(d){b=Fa();e=Y();V(K(e,c),d);BF(b,W(e));}}
function DX(){var a=this;C.call(a);a.fy=null;a.fA=null;a.fz=null;}
function B9(){var a=this;C.call(a);a.z=null;a.T=null;a.cY=null;a.d0=null;a.dl=null;a.da=0;a.dA=0;}
function Mk(a,b,c,d){var e=new B9();Fp(e,a,b,c,d);return e;}
function Fp(a,b,c,d,e){var f,g;f=d.data;a.z=b;a.T=c;a.da=f.length/c.b0|0;a.dA=e===null?0:e.data.length;c=b.createBuffer();a.cY=c;b.bindBuffer(34962,c);c=d.data;b.bufferData(34962,c,35044);a.d0=null;g=e===null?null:b.createBuffer();a.dl=g;if(g!==null){b.bindBuffer(34963,g);c=e.data;b.bufferData(34963,c,35044);}c=null;b.bindBuffer(34962,c);c=null;b.bindBuffer(34963,c);}
function DL(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.T.dR;d=a.z;b=b^c;e=0;while(b){f=1<<e;if(b&f){if(!(c&f))d.disableVertexAttribArray(e);else d.enableVertexAttribArray(e);b=b^f;}e=e+1|0;}b=0;d=a.z;g=a.cY;d.bindBuffer(34962,g);h=a.T.cp.data;f=h.length;i=0;while(i<f){d=h[i];g=a.z;j=d.bl;k=d.F;l=a.T.b0*4|0;e=b*4|0;g.vertexAttribPointer(j,k,5126,!!0,l,e);b=b+d.F|0;i=i+1|0;}a:{d=a.d0;if(d!==null){b=0;a.z.bindBuffer(34962,d);h=a.T.ct.data;e=h.length;f=0;while(true){if(f>=e)break a;d=h[f];g=a.z;i=d.bl;j=d.F;m=d.cT;n=
a.T.dd;g.vertexAttribPointer(i,j,5121,!!m,n,b);b=b+d.F|0;f=f+1|0;}}}d=a.dl;if(d===null){b=a.da;if(b>0)a.z.drawArrays(4,0,b);}else{a.z.bindBuffer(34963,d);d=a.z;f=a.dA;d.drawElements(4,f,5123,0);}return c;}
function Bq(){var a=this;C.call(a);a.fd=null;a.D=0;}
function Ce(a,b,c){a.fd=b;a.D=c;}
function B0(){var a=this;Bq.call(a);a.dm=null;a.cp=null;a.ct=null;a.b0=0;a.dd=0;a.dR=0;}
var Me=null;var Ml=null;function BY(){BY=Bb(B0);JN();}
function JN(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new B0;c=S(Bp,2);d=c.data;Jg();d[0]=Mm;d[1]=Mn;BY();Ce(b,B(47),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];IR();switch(Mo.data[l.bO.D]){case 1:f=f+l.F|0;h=h+1|0;break a;case 2:e=e+l.F|0;g=g+1|0;break a;default:}}i=i|1<<l.bl;k=k+1|0;}b.dm=c;b.b0=e;b.dd=f;b.dR=i;c=S(Bp,g);m=c.data;b.cp=c;c=S(Bp,h);n=c.data;b.ct=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];IR();switch(Mo.data[l.bO.D]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}Me=b;c=S(B0,1);c.data[0]=b;Ml=c;}
var Fw=E(0);
var D_=E(0);
var Fi=E(0);
var BW=E();
function CL(){BW.call(this);this.ej=null;}
function GD(){var a=this;CL.call(a);a.fB=0;a.b4=0;a.bA=null;a.ek=null;a.ed=null;}
function ID(a,b){var c=new GD();I0(c,a,b);return c;}
function I0(a,b,c){a.ej=b;a.bA=Y();a.ek=BB(32);a.fB=c;IA();a.ed=Mp;}
function Er(a,b,c,d){var e,$$je;e=a.ej;if(e===null)a.b4=1;if(!(a.b4?0:1))return;a:{try{e.ci(b,c,d);break a;}catch($$e){$$je=J7($$e);if($$je instanceof E7){}else{throw $$e;}}a.b4=1;}}
function BF(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;c=a.bA;Dm(c,c.h,b);BO(c,10);b=a.bA;d=b.h;e=a.ek;if(d>e.data.length)e=BB(d);f=0;g=0;if(f>d){b=new Bf;Ba(b,B(48));J(b);}while(f<d){h=e.data;i=g+1|0;j=b.l.data;k=f+1|0;h[g]=j[f];g=i;f=k;}h=e.data;f=d-0|0;l=new EY;d=h.length;f=0+f|0;DS(l,d);l.n=0;l.B=f;l.cU=0;l.fV=0;l.ef=e;e=FB(BL(16,Bu(d,1024)));f=e.data.length;b=new EJ;i=0+f|0;DS(b,f);JT();b.gb=Mq;b.dN=0;b.dt=e;b.n=0;b.B=i;b.ez=0;b.cW=0;c=a.ed;m=new F1;h=FB(1);j=h.data;j[0]=63;Jr();n=Mr;m.b_=n;m.cj=n;g=j.length;if
(g&&g>=m.cr){m.e5=c;m.dp=h.bH();m.fa=2.0;m.cr=4.0;m.cS=BB(512);m.dE=FB(512);c=Ms;if(c===null){c=new Bt;Ba(c,B(49));J(c);}m.b_=c;m.cj=c;a:while(true){if(m.bx==3){b=new CH;U(b);J(b);}m.bx=2;b:{while(true){try{c=GU(m,l,b);}catch($$e){$$je=J7($$e);if($$je instanceof P){b=$$je;break a;}else{throw $$e;}}if(c.bf?0:1){f=BA(l);if(f<=0)break b;c=CV(f);}else if(CR(c))break;n=!EH(c)?m.b_:m.cj;c:{if(n!==Ms){if(n===Mt)break c;else break b;}f=BA(b);h=m.dp;k=h.data.length;if(f<k){c=Mu;break b;}EK(b,h,0,k);}k=l.n;if(!Hw(c))
{b=new B_;U(b);J(b);}Du(l,k+c.dJ|0);}}f=CR(c);Er(a,e,0,GP(b));EV(b);if(!f){while(true){f=m.bx;if(f!=2&&f!=4){b=new CH;U(b);J(b);}c=Mv;if(c===c)m.bx=3;g=CR(c);Er(a,e,0,b.n);EV(b);if(!g)break;}HB(a.bA,0);return;}}J(Lj(b));}J(KE(B(50)));}
function BN(){BW.call(this);this.eR=null;}
function FY(a){a.eR=FB(1);}
var C1=E(BN);
var L9=null;function J2(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Hn(){var b;b=new C1;FY(b);L9=b;}
function Bp(){var a=this;Bq.call(a);a.dv=null;a.bO=null;a.F=0;a.cT=0;a.bl=0;}
var Mm=null;var Mn=null;var Mw=null;function Jg(){Jg=Bb(Bp);I7();}
function Lh(a,b,c,d,e,f,g){var h=new Bp();DV(h,a,b,c,d,e,f,g);return h;}
function DV(a,b,c,d,e,f,g,h){Jg();Ce(a,b,c);a.dv=d;a.bO=e;a.F=f;a.cT=g;a.bl=h;}
function I7(){var b;b=new Bp;Gn();DV(b,B(51),0,B(52),Mx,2,0,0);Mm=b;b=Lh(B(53),1,B(54),Mx,2,0,1);Mn=b;Mw=GT(Bp,[Mm,b]);}
function CI(){var a=this;C.call(a);a.ex=null;a.eX=null;}
function HH(b){var c,d;if(Fk(b))J(Gy(b));if(!HJ(BC(b,0)))J(Gy(b));c=1;while(c<Bh(b)){a:{d=BC(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(HJ(d))break a;else J(Gy(b));}}c=c+1|0;}}
function HJ(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Dk=E(CI);
var Mp=null;function IA(){IA=Bb(Dk);Id();}
function Id(){var b,c,d,e,f;b=new Dk;IA();c=S(By,0);d=c.data;HH(B(55));e=d.length;f=0;while(f<e){HH(d[f]);f=f+1|0;}b.ex=B(55);b.eX=c.bH();Mp=b;}
var C0=E();
var My=null;var Mo=null;function IR(){IR=Bb(C0);Jt();}
function Jt(){var b,c;Gn();b=Hs((Mz.bH()).data.length);c=b.data;Mo=b;c[MA.D]=1;c[Mx.D]=2;It();c=Hs((MB.bH()).data.length);b=c.data;My=c;b[MC.D]=1;b[MD.D]=2;}
var Ht=E();
var B3=E(Bq);
var MA=null;var Mx=null;var Mz=null;function Gn(){Gn=Bb(B3);HT();}
function H9(a,b){var c=new B3();Ga(c,a,b);return c;}
function Ga(a,b,c){Gn();Ce(a,b,c);}
function HT(){var b;MA=H9(B(56),0);b=H9(B(57),1);Mx=b;Mz=GT(B3,[MA,b]);}
var BP=E(Bq);
var MC=null;var MD=null;var MB=null;function It(){It=Bb(BP);Il();}
function Kl(a,b){var c=new BP();Hj(c,a,b);return c;}
function Hj(a,b,c){It();Ce(a,b,c);}
function Il(){var b;MC=Kl(B(58),0);b=Kl(B(59),1);MD=b;MB=GT(BP,[MC,b]);}
var Dj=E(BN);
var L$=null;function Is(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function HQ(){var b;b=new Dj;FY(b);L$=b;}
var DD=E(BD);
var Bt=E(P);
function KE(a){var b=new Bt();Kt(b,a);return b;}
function Kt(a,b){Ba(a,b);}
function HL(){Bt.call(this);this.fb=null;}
function Gy(a){var b=new HL();IC(b,a);return b;}
function IC(a,b){U(a);a.fb=b;}
var C6=E(Bf);
function CE(){C.call(this);this.fj=null;}
var DI=E(0);
function DU(){var a=this;C.call(a);a.dT=null;a.dS=0;}
function Ks(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.dT;d=a.dS;b=b.data;Hy(b);e=DP(c.d3);if(e===null)e=DP(c.d4);if(e===null){f=c.dP.data;g=c.bQ;c.bQ=g+1|0;f[g]=d;}else{h=e.fQ;i=e.eA;f=e.fo;j=c.c6+1|0;c.c6=j;k=c.dg;e=EF(j);k.bj=CY(k,k.bj,e);e=Ft(k,e);DA(e,h);DA(e,h);k.bI=k.bI+1|0;e=c.bT[d];if(e===null){h=$rt_ustr(i);$rt_globals.console.error("sendToWorker after shutdown, method = "+h);}else{f=f.data;l=f.length;h=new $rt_globals.Array(l+2|0);k=j;0;h[0]=k;i=$rt_ustr(i);1;h[1]=i;d=2;m=new $rt_globals.Array();g=0;while
(g<l){i=f[g];if(i===null){j=d+1|0;i=null;d;h[d]=i;}else if(i instanceof By){j=d+1|0;i=Kf(i);d;h[d]=i;}else if(CG(i,$rt_arraycls($rt_bytecls()))){j=d+1|0;i=i.data.buffer;d;h[d]=i;}else if(CG(i,$rt_arraycls($rt_charcls()))){j=d+1|0;i=i.data.buffer;d;h[d]=i;}else if(CG(i,$rt_arraycls($rt_intcls()))){j=d+1|0;i=i.data.buffer;d;h[d]=i;}else if(!CG(i,$rt_arraycls($rt_doublecls())))j=Mf.iU(i,h,d);else{j=d+1|0;i=i.data.buffer;d;h[d]=i;}i=h[d];if(i instanceof $rt_globals.ArrayBuffer?1:0)m.push(i);g=g+1|0;d=j;}e.postMessage(h,
m);}}c=c.dO;if(!Hy(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new Bt;U(b);J(b);}if(b.length<1){b=new Bt;U(b);J(b);}e=EF(b[0]);e=GM(c.dj,e);d=1;j=b.length;f=S(C,j-d|0);n=f.data;g=0;while(d<j){l=g+1|0;o=d+1|0;h=b[d];if(h===null)n[g]=null;else if(typeof h==='string'?1:0)n[g]=Hp(Gx(h));else if(!(h instanceof $rt_globals.ArrayBuffer?1:0))o=Mf.gp(h,b,o,f,g);else n[g]=KU(Gx(h));g=l;d=o;}if(g!=n.length)f=E4(f,g);e.q(f);}}
var Di=E(0);
function Fu(){C.call(this);this.d5=null;}
function Jw(a,b){a.d5.setPointerCapture(b.pointerId);}
function Fv(){C.call(this);this.c4=null;}
function Ig(a,b){a.c4.releasePointerCapture(b.pointerId);}
var EB=E(0);
var Fr=E(0);
function B6(){var a=this;C.call(a);a.fh=0;a.fW=0;a.fU=0;}
var Md=0;function Fd(){var a=this;B6.call(a);a.f$=null;a.fl=null;}
function Jx(){return {alpha:false};}
function BR(){var a=this;C.call(a);a.dC=0;a.n=0;a.B=0;a.bv=0;}
function DS(a,b){a.bv=(-1);a.dC=b;a.B=b;}
function GP(a){return a.n;}
function BA(a){return a.B-a.n|0;}
function BJ(a){return a.n>=a.B?0:1;}
var FZ=E(0);
var CF=E(BR);
function Du(a,b){var c,d,e;if(b>=0&&b<=a.B){a.n=b;if(b<a.bv)a.bv=0;return a;}c=new Bt;d=a.B;e=Y();BO(V(K(V(K(e,B(60)),b),B(61)),d),93);Ba(c,W(e));J(c);}
var G8=E();
function HX(b){return Math.exp(b);}
function I4(b){return Math.log(b);}
function Kc(b){return Math.sqrt(b);}
function Ic(b,c){return Math.pow(b,c);}
function Bu(b,c){if(b<c)c=b;return c;}
function BL(b,c){if(b>c)c=b;return c;}
function Kp(b,c){return Math.min(b,c);}
function Gv(b,c){return Kp(b,c);}
function JD(b,c){return Math.max(b,c);}
function Hg(b,c){return JD(b,c);}
function Ja(b){return Math.abs(b);}
function GV(b){return Ja(b);}
function I3(b){return Math.abs(b);}
function J8(b){return Math.sign(b);}
function De(){var a=this;BR.call(a);a.dN=0;a.dt=null;a.gb=null;}
function EK(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.cW){e=new FE;U(e);J(e);}if(BA(a)<d){e=new EI;U(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bf;j=Y();V(K(V(K(j,B(62)),h),B(63)),g);Ba(i,W(j));J(i);}if(d<0){e=new Bf;i=Y();K(V(K(i,B(64)),d),B(65));Ba(e,W(i));J(e);}h=a.n;k=h+a.dN|0;l=0;while(l<d){b=a.dt.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.n=h+d|0;return a;}}b=b.data;e=new Bf;d=b.length;i=Y();BO(V(K(V(K(i,B(66)),c),B(61)),d),41);Ba(e,W(i));J(e);}
function EV(a){a.n=0;a.B=a.dC;a.bv=(-1);return a;}
function B5(){C.call(this);this.eV=null;}
var Mt=null;var Ms=null;var Mr=null;function Jr(){Jr=Bb(B5);H$();}
function G5(a){var b=new B5();HC(b,a);return b;}
function HC(a,b){Jr();a.eV=b;}
function H$(){Mt=G5(B(67));Ms=G5(B(68));Mr=G5(B(69));}
function BU(){var a=this;C.call(a);a.em=0;a.f0=0;a.fD=0;a.ew=0;}
function ME(a,b,c,d){var e=new BU();E8(e,a,b,c,d);return e;}
function E8(a,b,c,d,e){a.em=d;a.f0=b;a.fD=c;a.ew=e;}
function Ds(){var a=this;BU.call(a);a.o=null;a.eB=null;}
var Hq=E();
var Ct=E(CF);
function EY(){var a=this;Ct.call(a);a.fV=0;a.cU=0;a.ef=null;}
function Cm(){var a=this;C.call(a);a.e5=null;a.dp=null;a.fa=0.0;a.cr=0.0;a.b_=null;a.cj=null;a.bx=0;}
function CB(){var a=this;C.call(a);a.bf=0;a.dJ=0;}
var Mv=null;var Mu=null;function G_(a,b){var c=new CB();HG(c,a,b);return c;}
function HG(a,b,c){a.bf=b;a.dJ=c;}
function CR(a){return a.bf!=1?0:1;}
function Hw(a){var b;b=a.bf!=2?0:1;return !b&&!EH(a)?0:1;}
function EH(a){return a.bf!=3?0:1;}
function CV(b){return G_(2,b);}
function Gc(){Mv=G_(0,0);Mu=G_(1,0);}
function Fx(){var a=this;BU.call(a);a.fC=null;a.cC=0;a.P=0;a.c3=0;a.di=0;}
var Gd=E();
function F5(b,c,d){return 0.5+b*c/d|0;}
function Cl(b){return b+0.5|0;}
var E3=E(0);
function Es(){var a=this;C.call(a);a.d$=null;a.d9=null;}
function I1(a,b){var c,d;c=a.d$;d=a.d9;$rt_globals.console.info("paste plain string ",b);c.q(Hp(b));Bg(d);}
var Br=E(0);
function FG(){C.call(this);this.fX=null;}
function EJ(){var a=this;De.call(a);a.ez=0;a.cW=0;}
function CW(){C.call(this);this.fi=null;}
var Mq=null;var MF=null;function JT(){JT=Bb(CW);Ki();}
function H2(a){var b=new CW();F$(b,a);return b;}
function F$(a,b){JT();a.fi=b;}
function Ki(){Mq=H2(B(70));MF=H2(B(71));}
function Dz(){var a=this;C.call(a);a.cD=null;a.bb=null;a.bw=null;}
var HP=E();
function Dp(){var a=this;Cm.call(a);a.cS=null;a.dE=null;}
function GU(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.cS;e=0;f=0;g=a.dE;a:{b:{while(true){if((e+32|0)>f&&BJ(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=BA(b)+j|0;h=i.length;f=Bu(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new Bf;b=Y();V(K(V(K(b,B(72)),k),B(63)),h);Ba(l,W(b));J(l);}if(BA(b)<e)break;if(e<0){b=new Bf;c=Y();K(V(K(c,B(64)),e),B(65));Ba(b,W(c));J(b);}h=b.n;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.ef.data[n+b.cU|0];m=m+1|0;j=o;n=k;}b.n=h+e|0;e=0;}if(!BJ(c))
{l=!BJ(b)&&e>=f?Mv:Mu;break a;}i=g.data;k=Bu(BA(c),i.length);p=new ED;p.cI=b;p.dB=c;l=HA(a,d,e,f,g,0,k,p);e=p.cE;j=p.dI;if(l===null){if(!BJ(b)&&e>=f)l=Mv;else if(!BJ(c)&&e>=f)l=Mu;}EK(c,g,0,j);if(l!==null)break a;}b=new D8;U(b);J(b);}p=new Bf;l=Y();BO(V(K(V(K(l,B(66)),j),B(61)),h),41);Ba(p,W(l));J(p);}Du(b,b.n-(f-e|0)|0);return l;}
var F1=E(Dp);
function HA(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Cx(h,2))break a;i=Mu;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!(!EA(l)&&!Ed(l)?0:1)){if((f+3|0)>g){j=j+(-1)|0;if(Cx(h,3))break a;i=Mu;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!EA(l))
{i=CV(1);break a;}if(j>=d){if(BJ(h.cI))break a;i=Mv;break a;}c=j+1|0;n=k[j];if(!Ed(n)){j=c+(-2)|0;i=CV(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Cx(h,4))break a;i=Mu;break a;}k=e.data;o=((l&1023)<<10|n&1023)+65536|0;n=f+1|0;k[f]=(240|o>>18)<<24>>24;f=n+1|0;k[n]=(128|o>>12&63)<<24>>24;n=f+1|0;k[f]=(128|o>>6&63)<<24>>24;m=n+1|0;k[n]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.cE=j;h.dI=f;return i;}
var E7=E(BD);
function Cp(){var a=this;CE.call(a);a.ce=null;a.k=null;a.eT=0.0;}
function Gb(){var a=this;Cp.call(a);a.j=null;a.eU=null;a.bG=null;a.bt=null;a.bu=null;a.cl=null;a.bR=0;a.cJ=0;a.d6=0;a.f4=0;a.e8=0;a.fc=0.5;a.ff=500.0;a.fS=(-1.0);a.eQ=1.0;a.fe=8.0;a.gc=200.0;a.f5=0.5;a.ga=0.0010000000474974513;a.w=0.0;a.u=0.0;a.be=0.0;a.m=0.0;a.v=0.0;a.co=0;a.bJ=0;a.bE=0.0;a.bz=0.0;a.bB=0.0;a.bn=0;a.cg=0;a.b5=0;a.bW=0;a.fT=20000;a.e7=40000;a.J=null;a.G=null;a.bF=0;a.br=0;a.eI=0;}
function KV(a){var b=new Gb();Ju(b,a);return b;}
function Ju(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;a.fj=b;a.ce=HK(0,0,64,255,new Bv);a.k=new Bi;c=b.bw;d=Cg(a);if(d.bM===null)d.bM=$rt_str(d.U.$meta.name);Ew(c,d.bM);a.f4=0;a.e8=5000;a.fc=0.5;a.ff=500.0;a.fS=(-1.0);a.eQ=1.0;a.fe=8.0;a.gc=200.0;a.f5=0.5;a.ga=0.0010000000474974513;a.w=0.0;a.u=0.0;a.be=0.0;a.m=25.0;a.v=0.0;a.bJ=0;a.bE=0.0;a.bz=0.0;a.bB=0.0;a.bn=0;a.cg=0;a.b5=0;a.bW=0;a.fT=20000;a.e7=40000;a.bF=0;a.br=0;a.eI=0;GQ(0.6666666666666666,1.0,0.0625,a.ce);Ck(b.bb.Y,a);c=b.bb.bX;d=new FD;d.f2=a;Ck(c,
d);Ck(b.bb.ch,a);Ck(b.bb.cn,a);c=b.cD;a.j=c;d=b.bw;e=new Dq;e.ev=d;a.eU=e;d=new DB;c=c.i;BY();BM(d,c,B(73),B(74),Me);e=d.c;d.df=c.getUniformLocation(e,"uColor");a.bG=d;f=S($rt_arraycls($rt_floatcls()),20);g=f.data;c=Iy();h=0;while(h<20){i=10000+(5.9604644775390625E-8*(Db(c)&16777215)*5001.0|0)|0;j=i*2|0;k=H8(j);l=k.data;g[h]=k;m=0.0;n=0;while(n<i){o=FU(c,5.0);p=FU(c,2.0);q=n*2|0;l[q]=m;l[q+1|0]=m+o;m=m+o+p;n=n+1|0;}r=100.0/m;q=0;while(q<j){l[q]=l[q]*r;q=q+1|0;}h=h+1|0;}a.bt=f;a.cl=S(Bv,g.length);c=Iy();q=0;while
(true){l=a.cl.data;if(q>=l.length)break;l[q]=new Bv;d=l[q];(GQ(B$(c),0.5+B$(c)*0.25,0.66+B$(c)*0.33/2.0,d)).M=1.0;q=q+1|0;}l=a.bt.data;s=0;t=l.length;u=0;while(u<t){s=s+(l[u].data.length/2|0)|0;u=u+1|0;}a.J=KA();a.G=KA();Fh(a,a.J);Fh(a,a.G);CQ(a);Cv(a);b=b.bw;c=Y();K(V(K(c,B(75)),s),B(76));Ew(b,W(c));}
function Fh(a,b){var c,d;c=H3(80,80,80,200);d=H3(43,43,43,228);Fs(b.bL,d);Fs(b.b8,c);}
function Ee(a,b){b=b*a.k.b/2.0;return (b+J8(b)*0.5|0)*2.0/a.k.b;}
function Hz(a,b){var c,d,e,f,g;c=a.be;d=c===0.0?0.0:b-c;a.be=b;if(d<=0.0)return 0;e=0;if(a.bn^a.cg)a.w=a.w+200.0*Kc(a.m)*d*(!a.bn?(-1):1);f=a.b5;if(f^a.bW)a.u=a.u+0.5*d*(!f?(-1):1);c=HX((-8.0)*d);g=a.w*c;a.w=g;a.u=a.u*c;if(GV(g)<=0.0010000000474974513)a.w=0.0;else{a.m=a.m+a.w*d;DE(a);CQ(a);e=1;}if(GV(a.u)<=0.0010000000474974513)a.u=0.0;else{a.v=a.v+a.u*d;Fq(a);Cv(a);e=1;}return e;}
function DE(a){a.m=Hg(0.5,Gv(a.m,500.0));}
function Fq(a){a.v=Hg((-1.0),Gv(a.v,1.0));}
function EZ(a,b,c){var d,e,f;EP(a.k,b);a.eT=c;d=b.a;e=d/30|0;a.bR=e;f=(d-(e*20|0)|0)/20|0;a.cJ=f;a.d6=f/2|0;}
function CQ(a){a.bF=(a.m-0.5)/499.5*(20000-a.k.a|0)|0;}
function Cv(a){a.br=( -a.v+1.0)/2.0*(40000-a.k.b|0)|0;}
var Ha=E(0);
function HK(b,c,d,e,f){F_(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function GQ(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-I3(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.X=g+i;e.V=h+i;e.W=j+i;return e;}
function FD(){C.call(this);this.f2=null;}
function Dq(){C.call(this);this.ev=null;}
function DB(){Bd.call(this);this.df=null;}
function Ke(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=c.data;d=Bu(c.length/2|0,16384);e=H8((d*4|0)*4|0);f=e.data;g=BB(d*6|0);h=g.data;i=0;while(i<d){j=i*16|0;k=i*6|0;l=i*2|0;m=c[l];n=c[l+1|0];f[j]=n;f[j+1|0]=(-1.0);f[j+2|0]=m;f[j+3|0]=1.0;f[j+4|0]=n;f[j+5|0]=1.0;f[j+6|0]=m;f[j+7|0]=1.0;f[j+8|0]=m;f[j+9|0]=(-1.0);f[j+10|0]=n;f[j+11|0]=0.0;f[j+12|0]=m;f[j+13|0]=1.0;f[j+14|0]=n;f[j+15|0]=0.0;o=i*4|0;h[k]=o&65535;j=k+1|0;l=(o+1|0)&65535;h[j]=l;j=k+2|0;p=(o+2|0)&65535;h[j]=p;h[k+3|0]=l;h[k+4|0]=p;h[k+5|0]=(o+3|0)&65535;i
=i+1|0;}q=new B9;BY();Fp(q,b,Me,e,g);return q;}
var G1=E();
function Bv(){var a=this;C.call(a);a.X=0.0;a.V=0.0;a.W=0.0;a.M=0.0;}
function F_(a,b,c,d,e){a.X=b;a.V=c;a.W=d;a.M=e;}
function IL(a,b){a.M=b;return a;}
function Fs(a,b){a.X=b.X;a.V=b.V;a.W=b.W;a.M=b.M;return a;}
function GW(){var a=this;C.call(a);a.cd=0;a.cf=0;}
function Iy(){var a=new GW();Jf(a);return a;}
function Jf(a){var b,c;b=H1((Ho()));b=b^b<<7;b=b^(b>>>1|0);c=b^b<<9;b=H1((Ho()))^(-559038737);a.cd=c;a.cf=b;b=0;while(b<19){Db(a);b=b+1|0;}}
function Db(a){var b,c;b=a.cd;c=a.cf;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.cd=c;a.cf=b;return b;}
function B$(a){var b;b=2.3283064365386963E-10*Db(a);if(b<0.0)b=b+1.0;return b;}
function FU(a,b){return  -I4(1.0-B$(a))/b;}
function He(){var a=this;C.call(a);a.R=null;a.t=null;a.A=null;a.C=null;a.bL=null;a.b8=null;}
function KA(){var a=new He();JR(a);return a;}
function JR(a){a.R=new Bi;a.t=new Bi;a.A=new Bi;a.C=new Bi;a.bL=new Bv;a.b8=new Bv;}
function C9(a,b){return G9(b,a.R,a.t);}
function DT(a,b,c,d){var e,f,g,h,i;e=G9(b,a.A,a.C);f=C9(a,b);if(!e&&!f)return null;if(!f){if(!d)c.q(Ef(a,b.b-a.A.b|0));else c.q(F7(a,b.a-a.A.a|0));}g=!d?a.R.b+(a.t.b/2|0)|0:a.R.a+(a.t.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new Ex;b.dU=a;b.dW=c;b.dV=i;}else{b=new Ey;b.cN=a;b.cM=c;b.cO=i;}return b;}
function Gp(b,c){var d;d=new Fb;d.cq=b;d.eh=c;return d;}
function F7(a,b){var c,d,e;c=a.C.a;d=a.t.a;e=c-d|0;return Gp(Bu(BL(0,b-(d/2|0)|0),e),e);}
function Ef(a,b){var c,d,e;c=a.C.b;d=a.t.b;e=c-d|0;return Gp(Bu(BL(0,b-(d/2|0)|0),e),e);}
function EC(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Bu(i,d);j=BL(F5(d,d,e),i);e=e-d|0;i=d-j|0;i=i?F5(b,i,e):0;if(!h){k=a.R;k.b=i+c|0;k.a=f-g|0;l=a.t;l.b=j;l.a=g;l=a.A;l.b=c;l.a=k.a;k=a.C;k.b=d;k.a=g;break a;}k=a.R;k.b=f-g|0;k.a=i+c|0;l=a.t;l.b=g;l.a=j;l=a.A;l.b=k.b;l.a=c;k=a.C;k.b=g;k.a=d;break a;}}B8(a.C,0,0);B8(a.t,0,0);}}
function E9(a,b){var c;c=a.A;E$(b,c.b,c.a,a.C,a.bL);}
function FX(a,b){var c,d;c=a.t;c.b=c.b-2|0;c.a=c.a-2|0;d=a.R;E$(b,d.b+1|0,d.a+1|0,c,a.b8);b=a.t;b.b=b.b+2|0;b.a=b.a+2|0;}
function G$(){var a=this;Bv.call(a);a.fr=0;a.fv=0;a.ft=0;a.fu=0;}
function H3(a,b,c,d){var e=new G$();I8(e,a,b,c,d);return e;}
function I8(a,b,c,d,e){a.fr=b;a.fv=c;a.ft=d;a.fu=e;HK(b,c,d,e,a);}
var GF=E();
var GS=E();
function E4(b,c){var d,e,f;d=Cw(Cg(b));if(d===null){d=new Cy;U(d);J(d);}if(d===N($rt_voidcls())){d=new Bt;U(d);J(d);}if(c<0){d=new F6;U(d);J(d);}b=b.data;d=Jy(d.U,c);e=Bu(c,b.length);f=0;while(f<e){d.data[f]=b[f];f=f+1|0;}return d;}
var Gs=E();
function GO(){var a=this;C.call(a);a.fQ=null;a.eA=null;a.fo=null;}
var F6=E(P);
var GK=E();
var DW=E(0);
function Gj(){C.call(this);this.e$=null;}
function KU(a){var b=new Gj();IT(b,a);return b;}
function IT(a,b){a.e$=b;}
var G6=E();
var Fy=E(0);
var Mc=null;function Lk(){Lk=Bb(Fy);JZ();}
function JZ(){Mc=new $rt_globals.TextDecoder("utf-16");}
var Dv=E(0);
var Mg=null;function G7(){Mg=new Eq;}
function DN(){C.call(this);this.cB=null;}
function Ix(a,b){var c,d;c=a.cB;c.w=0.0;d=FI(b,20000-c.k.a|0);c.bF=d;c.m=d/(20000-c.k.a|0)*499.5+0.5;}
function E5(){var a=this;C.call(a);a.cc=0;a.cb=0;a.fg=null;a.K=null;}
function JJ(a,b){var c,d,e,f,g;c=a.K;d=c.bB;e=d===0.0?0.0:c.be-d;c.bB=c.be;f=b.o.a-a.cb|0;g=c.m*(Ic(2.0,2.0*f/c.k.a)-1.0);c=a.K;c.m=c.m+g;DE(c);d=2.0*(b.o.b-a.cc|0);c=a.K;d=d/c.k.b/c.m;c.v=c.v+d;Fq(c);if(e>0.0){c=a.K;c.bE=g/e;c.bz=d/e;}b=b.o;a.cc=b.b;a.cb=b.a;CQ(a.K);Cv(a.K);}
function DO(){C.call(this);this.dM=null;}
function IB(a,b){var c,d;c=a.dM;c.u=0.0;d=FI(b,40000-c.k.b|0);c.br=d;c.v= -(d/(40000-c.k.b|0)*2.0+(-1.0));}
var Dy=E(0);
function Dn(){var a=this;C.call(a);a.bq=null;a.bs=null;}
function DA(a,b){var c;c=a.bs;a.bs=b;return c;}
function CO(){var a=this;Dn.call(a);a.d=null;a.f=null;a.H=0;a.Q=0;}
function C4(a){var b;b=Cq(a);if(b==2){if(Cq(a.f)<0)a.f=D5(a.f);return Fl(a);}if(b!=(-2))return a;if(Cq(a.d)>0)a.d=Fl(a.d);return D5(a);}
function Cq(a){var b,c;b=a.f;c=b===null?0:b.H;b=a.d;return c-(b===null?0:b.H)|0;}
function D5(a){var b;b=a.d;a.d=b.f;b.f=a;Bs(a);Bs(b);return b;}
function Fl(a){var b;b=a.f;a.f=b.d;b.d=a;Bs(a);Bs(b);return b;}
function Bs(a){var b,c,d;b=a.f;c=b===null?0:b.H;b=a.d;d=b===null?0:b.H;a.H=BL(c,d)+1|0;a.Q=1;b=a.d;if(b!==null)a.Q=1+b.Q|0;b=a.f;if(b!==null)a.Q=a.Q+b.Q|0;}
var Eq=E();
function IU(a,b){}
var CH=E(P);
var GZ=E(BZ);
function Lj(a){var b=new GZ();Ip(b,a);return b;}
function Ip(a,b){a.b2=1;a.cm=1;a.d7=b;}
function Hc(){var a=this;C.call(a);a.fK=null;a.fx=null;a.f8=null;}
var Gq=E();
function G9(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function Ex(){var a=this;C.call(a);a.dU=null;a.dW=null;a.dV=0;}
function Jb(a,b){var c,d,e;c=a.dU;d=a.dW;e=a.dV;d.q(Ef(c,(b.o.b+e|0)-c.A.b|0));}
function Ey(){var a=this;C.call(a);a.cN=null;a.cM=null;a.cO=0;}
function Ij(a,b){var c,d,e;c=a.cN;d=a.cM;e=a.cO;d.q(F7(c,(b.o.a+e|0)-c.A.a|0));}
function Fb(){var a=this;C.call(a);a.cq=0;a.eh=0;}
function FI(a,b){var c;c=a.eh;if(c<=0)return 0;return F5(a.cq,b,c);}
var B_=E(P);
function ED(){var a=this;C.call(a);a.cI=null;a.dB=null;a.cE=0;a.dI=0;}
function Cx(a,b){return BA(a.dB)<b?0:1;}
var FE=E(B_);
var EI=E(P);
var D8=E(P);
$rt_packages([-1,"org",0,"sudu",1,"experiments",2,"swimlane"]);
$rt_metadata([C,0,0,[],0,3,0,0,0,G4,0,C,[],0,3,0,0,0,D2,0,C,[],3,3,0,0,0,DF,0,C,[],3,3,0,0,0,Eb,0,C,[D2,DF],0,3,0,0,0,Hx,0,C,[],4,0,0,0,0,Hh,0,C,[],4,3,0,0,0,B2,0,C,[],0,3,0,0,0,BD,0,B2,[],0,3,0,0,0,P,0,BD,[],0,3,0,0,0,Hk,0,P,[],0,3,0,0,0,Bz,0,C,[],3,3,0,0,0,Bw,0,C,[],3,3,0,0,0,Ci,0,C,[],3,3,0,0,0,By,0,C,[Bz,Bw,Ci],0,3,0,HI,0,BZ,0,B2,[],0,3,0,0,0,B4,0,BZ,[],0,3,0,0,0,G2,0,B4,[],0,3,0,0,0,Df,0,C,[Bz],1,3,0,0,0,B7,0,Df,[Bw],0,3,0,0,0,CN,0,C,[Bz,Ci],0,0,0,0,0,CU,0,C,[],3,3,0,0,0,Gg,0,CN,[CU],0,3,0,0,0,BQ,0,B4,
[],0,3,0,0,0,GR,0,BQ,[],0,3,0,0,0,GH,0,BQ,[],0,3,0,0,0,R,0,C,[],3,3,0,0,0,DK,0,C,[R],3,3,0,0,0,Hm,0,C,[DK],1,3,0,0,["ie",Lz(I9),"hr",Ly(H6)],C2,0,C,[],4,3,0,0,0,HM,0,C,[],4,3,0,0,0,Ff,0,C,[],3,3,0,0,0,DM,0,C,[Ff],0,3,0,0,0,C8,0,C,[],3,3,0,0,0,F0,0,C,[C8],0,3,0,0,0,BT,0,C,[],3,3,0,0,0,F2,0,C,[BT],0,3,0,0,0,C5,0,C,[],3,3,0,0,0,DR,0,C,[C5],0,3,0,0,0,Bf,0,P,[],0,3,0,0,0,Gz,0,C,[],4,3,0,0,0,Cy,0,P,[],0,3,0,0,0,Cc,0,P,[],0,3,0,0,0,Cj,0,C,[Bw],0,3,0,0,0,Gm,0,C,[R],1,3,0,0,0,Eu,0,C,[],3,3,0,0,0,Cn,0,C,[Eu],1,3,0,0,
0,FW,0,Cn,[],0,3,0,0,0,E0,0,C,[R],3,3,0,0,0,FK,0,C,[E0],0,3,0,0,["gZ",Lz(IE)]]);
$rt_metadata([FL,0,C,[BT],0,3,0,0,0,T,0,C,[R],3,3,0,0,0,FH,0,C,[T],0,3,0,0,["e",Lz(JB)],DZ,0,C,[R],3,3,0,0,0,FJ,0,C,[DZ],0,3,0,0,["iF",LA(Ku)],GC,0,C,[R],1,3,0,0,0,Gk,0,C,[],0,3,0,0,0,CM,0,C,[],1,3,0,0,0,Co,0,CM,[],0,3,0,0,0,HO,0,C,[],0,3,0,0,0,Bo,0,C,[R],3,3,0,0,0,FV,0,C,[Bo],3,3,0,0,0,E6,0,C,[Bo],3,3,0,0,0,EX,0,C,[Bo],3,3,0,0,0,Et,0,C,[Bo],3,3,0,0,0,E1,0,C,[Bo],3,3,0,0,0,Fm,0,C,[Bo,FV,E6,EX,Et,E1],3,3,0,0,0,Hu,0,C,[R,Fm],1,3,0,0,["fI",LA(Jm),"fp",LA(Kb),"gd",LB(Jq),"e1",Lz(Jv),"fn",LB(HY)],D3,0,C,[],3,3,0,
0,0,Cf,0,C,[D3],3,3,0,0,0,Cr,0,C,[Cf],1,3,0,0,0,Dh,0,C,[Cf],3,3,0,0,0,DQ,0,C,[Dh],3,3,0,0,0,CZ,0,Cr,[DQ],1,3,0,0,0,CS,0,CZ,[],1,3,0,0,0,DG,0,C,[Cf],3,3,0,0,0,Fo,0,C,[DG,Dh],3,3,0,0,0,C$,0,CS,[Fo],0,3,0,0,0,CC,0,C,[],3,3,0,0,0,C_,0,C,[CC],1,3,0,0,0,Dl,0,C,[],3,3,0,0,0,Fj,0,C,[CC],3,3,0,0,0,D1,0,C,[Fj],3,3,0,0,0,FA,0,C_,[Dl,Bz,D1],0,3,0,0,0,Gt,0,C,[],4,3,0,0,0,Dt,0,C,[C8],0,3,0,0,0,Dr,0,C,[],0,3,0,0,0,FC,0,C,[R],3,3,0,0,0,HF,0,C,[R,FC,Bo],1,3,0,0,["fI",LA(Jl),"fp",LA(Iz),"gd",LB(Kw),"e1",Lz(JM),"fn",LB(I_)],Ea,
0,C,[T],0,0,0,0,["e",Lz(I$)],Ec,0,C,[T],0,0,0,0,["e",Lz(HZ)],DH,0,C,[],0,3,0,0,0,BI,0,C,[],3,3,0,0,0,Eg,0,C,[T],0,3,0,0,["e",Lz(JA)],Eh,0,C,[T],0,3,0,0,["e",Lz(JL)],Ei,0,C,[T],0,3,0,0,["e",Lz(Iq)],Ej,0,C,[T],0,3,0,0,["e",Lz(HW)],Ek,0,C,[T],0,3,0,0,["e",Lz(Ih)],El,0,C,[T],0,3,0,0,["e",Lz(J_)],Em,0,C,[T],0,3,0,0,["e",Lz(Jp)]]);
$rt_metadata([En,0,C,[T],0,3,0,0,["e",Lz(Kh)],Eo,0,C,[T],0,3,0,0,["e",Lz(IF)],Ep,0,C,[T],0,3,0,0,["e",Lz(Ia)],FP,0,C,[T],0,3,0,0,["e",Lz(J1)],FQ,0,C,[T],0,3,0,0,["e",Lz(H4)],FR,0,C,[T],0,3,0,0,["e",Lz(Iw)],FS,0,C,[T],0,3,0,0,["e",Lz(J0)],FM,0,C,[T],0,3,0,0,["e",Lz(JK)],FN,0,C,[T],0,3,0,0,["e",Lz(Jz)],Dw,0,C,[R],3,3,0,0,0,DC,0,C,[Dw],3,3,0,0,0,GI,0,C,[R,DC,Bo],1,3,0,0,["jj",Ly(IO),"g0",Lz(Ir),"iZ",Lz(H_),"gI",Lz(Kk),"i9",Lz(Ib),"hw",Ly(Kz),"hn",LA(In),"hs",LB(J3),"ip",Ly(Jk),"i5",Ly(JG),"hV",Lz(IW),"id",Ly(Iu),
"jy",Lz(JH),"gT",Ly(IQ),"jk",Ly(Km),"jg",Ly(HR),"hh",Lz(I6),"hz",Ly(J4),"iq",LA(JE),"hU",LA(Im),"g2",LA(JC),"jz",Ly(Ii),"h$",Ly(Jo),"iH",Lz(HV),"hp",Lz(II),"gy",LA(JU),"gj",Ly(HU),"ic",Lz(Jn),"hO",Ly(IH),"jl",Ly(J6),"jE",Lz(H0),"gR",Lz(IP),"i$",Lz(JF),"iQ",Ly(IS),"hu",LA(JQ),"gL",Lz(JX),"js",Ly(Kq),"ii",LA(Jh),"ij",LA(IY),"iI",Ly(IM),"iJ",Lz(J9),"hI",LB(I2),"jr",Ly(HS),"hX",LA(J5),"h7",Ly(IN),"gr",Ly(JY),"hS",Ly(Jd),"gi",Ly(IJ),"i8",LA(Ji),"hQ",Lz(Kr),"hm",Lz(IZ),"ja",Ly(Kx)],E2,0,C,[],3,3,0,0,0,D$,0,C,[E2],
0,3,0,0,0,GA,0,C,[T],0,3,0,0,["e",Lz(Kn)],GX,0,C,[],0,3,0,0,0,Cd,0,C,[],3,3,0,0,0,CX,0,C,[],3,3,0,0,0,Cs,0,C,[],3,3,0,0,0,EE,0,C,[],3,3,0,0,0,F4,0,C,[EE],3,3,0,0,0,Fg,0,C,[],3,3,0,0,0,Dx,0,C,[],3,3,0,0,0,Fc,0,C,[Dx],3,3,0,0,0,D9,0,C,[BI],0,3,0,0,0,CA,0,C,[C5],0,3,0,0,0,Bi,0,C,[],0,3,0,0,0,Ev,0,C,[],0,3,0,0,0,F9,0,C,[],0,3,0,0,0,Hf,0,C,[],3,3,0,0,0,DY,0,C,[],0,3,0,0,0,Do,0,C,[],0,3,0,0,0,Bd,0,Do,[],0,3,0,0,0,D4,0,Bd,[],0,3,0,0,0,BE,0,Bd,[],0,3,0,0,0,EM,0,Bd,[],0,3,0,0,0,E_,0,BE,[],0,3,0,0,0,BS,0,BE,[],0,3,0,
0,0,ER,0,BS,[],0,3,0,0,0,Fe,0,BS,[],0,3,0,0,0,Hv,0,BE,[],0,3,0,0,0,G0,0,Bd,[],0,3,0,0,0,Hd,0,Bd,[],0,3,0,0,0,FF,0,C,[R],3,3,0,0,0,HN,0,C,[FF],3,3,0,0,0,DX,0,C,[BI],0,3,0,0,0,B9,0,C,[],0,3,0,0,0,Bq,0,C,[Bw,Bz],1,3,0,0,0,B0,0,Bq,[],12,3,0,BY,0,Fw,0,C,[],3,3,0,0,0]);
$rt_metadata([D_,0,C,[Fw],3,3,0,0,0,Fi,0,C,[],3,3,0,0,0,BW,0,C,[D_,Fi],1,3,0,0,0,CL,0,BW,[],0,3,0,0,0,GD,0,CL,[],0,3,0,0,0,BN,0,BW,[],1,3,0,0,0,C1,0,BN,[],0,3,0,0,["ci",LB(J2)],Bp,0,Bq,[],12,3,0,Jg,0,CI,0,C,[Bw],1,3,0,0,0,Dk,0,CI,[],0,3,0,IA,0,C0,0,C,[],32,0,0,IR,0,Ht,0,C,[],0,3,0,0,0,B3,0,Bq,[],12,0,0,Gn,0,BP,0,Bq,[],12,3,0,It,0,Dj,0,BN,[],0,3,0,0,["ci",LB(Is)],DD,0,BD,[],0,3,0,0,0,Bt,0,P,[],0,3,0,0,0,HL,0,Bt,[],0,3,0,0,0,C6,0,Bf,[],0,3,0,0,0,CE,0,C,[BI],1,3,0,0,0,DI,0,C,[R],3,3,0,0,0,DU,0,C,[DI],0,3,0,0,["dw",
Lz(Ks)],Di,0,C,[R],3,3,0,0,0,Fu,0,C,[Di],0,3,0,0,["dw",Lz(Jw)],Fv,0,C,[Di],0,3,0,0,["dw",Lz(Ig)],EB,0,C,[],3,3,0,0,0,Fr,0,C,[],3,0,0,0,0,B6,0,C,[EB,BI,Fr],1,3,0,0,0,Fd,0,B6,[],0,3,0,0,0,BR,0,C,[],1,3,0,0,0,FZ,0,C,[],3,3,0,0,0,CF,0,BR,[Bw,CU,Ci,FZ],1,3,0,0,0,G8,0,C,[],4,3,0,0,0,De,0,BR,[Bw],1,3,0,0,0,B5,0,C,[],0,3,0,Jr,0,BU,0,C,[],0,3,0,0,0,Ds,0,BU,[],0,3,0,0,0,Hq,0,C,[R],1,3,0,0,0,Ct,0,CF,[],1,0,0,0,0,EY,0,Ct,[],0,0,0,0,0,Cm,0,C,[],1,3,0,0,0,CB,0,C,[],0,3,0,0,0,Fx,0,BU,[],0,3,0,0,0,Gd,0,C,[],0,3,0,0,0,E3,0,
C,[R],3,3,0,0,0,Es,0,C,[E3],0,3,0,0,["i0",Lz(I1)],Br,0,C,[],3,3,0,0,0,FG,0,C,[Br],0,3,0,0,0,EJ,0,De,[],0,0,0,0,0,CW,0,C,[],4,3,0,JT,0]);
$rt_metadata([Dz,0,C,[],0,3,0,0,0,HP,0,C,[],4,3,0,0,0,Dp,0,Cm,[],1,3,0,0,0,F1,0,Dp,[],0,3,0,0,0,E7,0,BD,[],0,3,0,0,0,Cp,0,CE,[],0,3,0,0,0,Gb,"SwimlaneTest",3,Cp,[CX,Cd],0,3,0,0,0,Ha,0,C,[],3,3,0,0,0,FD,0,C,[Cs],0,3,0,0,0,Dq,0,C,[],0,3,0,0,0,DB,0,Bd,[],0,0,0,0,0,G1,0,C,[],0,3,0,0,0,Bv,0,C,[],0,3,0,0,0,GW,0,C,[],0,3,0,0,0,He,0,C,[],0,3,0,0,0,G$,0,Bv,[],0,3,0,0,0,GF,0,C,[R],4,3,0,0,0,GS,0,C,[],0,3,0,0,0,Gs,0,C,[],4,3,0,0,0,GO,0,C,[],0,0,0,0,0,F6,0,P,[],0,3,0,0,0,GK,0,C,[R],1,3,0,0,0,DW,0,C,[],3,3,0,0,0,Gj,0,C,
[DW],0,3,0,0,0,G6,0,C,[R],1,3,0,0,0,Fy,0,C,[],3,3,0,Lk,0,Dv,0,C,[],3,3,0,0,0,DN,0,C,[Br],0,3,0,0,["q",Lz(Ix)],E5,0,C,[Br],0,0,0,0,["q",Lz(JJ)],DO,0,C,[Br],0,3,0,0,["q",Lz(IB)],Dy,0,C,[],3,3,0,0,0,Dn,0,C,[Dy,Bz],0,3,0,0,0,CO,0,Dn,[],0,0,0,0,0,Eq,0,C,[Br],0,3,0,0,["q",Lz(IU)],CH,0,P,[],0,3,0,0,0,GZ,0,BZ,[],0,3,0,0,0,Hc,0,C,[],0,0,0,0,0,Gq,0,C,[],0,3,0,0,0,Ex,0,C,[Br],0,3,0,0,["q",Lz(Jb)],Ey,0,C,[Br],0,3,0,0,["q",Lz(Ij)],Fb,0,C,[],0,3,0,0,0,B_,0,P,[],0,3,0,0,0,ED,0,C,[],0,3,0,0,0,FE,0,B_,[],0,3,0,0,0,EI,0,P,[],
0,3,0,0,0,D8,0,P,[],0,3,0,0,0]);
function $rt_array(cls,data){this.kz=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","Either src or dest is null","null","connectToDom: called on already connected","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  outColor = texture(sDiffuse, textureUV);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uTextPow;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main("
+") {\n            // D2D and JsCanvas(alpha=true) comparison:\n            //    - rgb is different\n            //    - alpha is identical\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = pow(t, uTextPow.x);\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBgColor;\nuniform sampler2D sDiffuse;\nuniform vec2 uTextPow;\nin vec2 textureUV;\nvoid main() {\n  vec3 textRGB = texture(sDiffuse, textureUV).rgb;\n  vec3 textRGBp = vec3(\n    pow(textRGB.x, uTextPow.x),\n    pow(textRGB.y, uTextPow.x),\n    pow(textRGB.z, uTextPow.x));\n  vec3 mixColor = mix(uBgColor.rgb, uColor.rgb, textRGBp);\n  // if (dot(textRGB, textRGB) == 0.0) outColor = uBgColor; else\n  outColo"
+"r = vec4(textRGB * 0.0 + mixColor * 1.0, 1.0);\n}","WebGraphics::ctor finish","keydown","keyup","mousemove","mousedown","mouseup","mouseenter","mouseleave","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","uParameterX = ","false","true","mousemove position = ","onPaste: item.type = ",", item.kind = ","pixel shader error: ","vertex shader error: ","----","vs <-> ps link error: ","compileProgram exit: ","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBaseline;\nuniform vec4 uScaleHExp;\nin vec2 outScreenPos;\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  float sX = uScaleHExp.x, sY = uScaleHExp.y;\n  float H = uSc"
+"aleHExp.z;\n  float E = uScaleHExp.w;\n  float arg = (pt.x - uBaseline.x) * sX;\n  float sinA = sin(arg);\n  float vDist = abs(sinA * sY - uBaseline.y + pt.y);\n  float k = sqrt(1. + (1. - sinA * sinA) * sX * sX * sY * sY * 0.5);\n  float v = vDist / (H * k);\n  float debug = uBaseline.z;\n  float alpha = pow(1. - clamp(v + .5 + debug, 0.0, 1.0), E);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","Index out of bounds","Action must be non-null","Replacement preconditions do not hold","POS2","vPos","TEX2",
"vTex","UTF-8","BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","BIG_ENDIAN","LITTLE_ENDIAN","The last char in dst ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec2 uParameters;\nin vec2 vPos, vTex;\nout vec2 screenPos;\nout vec2 lrScreen;\n\nfloat translateScaleX(float x) { return x * uSizePos.x + uSizePos.z; }\nfloat translateScaleY(float y) { return y * uSizePos.y + uSizePos.w; }\n\nfloat glToPixelX(float x) { return (x + 1.0) * 0.5 * uResolution"
+".x; }\nfloat glToPixelY(float y) { return (1.0 - y) * 0.5 * uResolution.y; }\nfloat pixelToGlX(float x) { return x * 2.0 / uResolution.x - 1.0; }\nfloat pixelToGlY(float y) { return 1.0 - y * 2.0 / uResolution.y; }\n\nvec2 glToPixel(vec2 gl) { return vec2(glToPixelX(gl.x), glToPixelY(gl.y)); }\nvec2 pixelToGl(vec2 px) { return vec2(pixelToGlX(px.x), pixelToGlY(px.y)); }\n\nvoid main() {\n  float lX = mix(vPos.x, vTex.x, vTex.y);\n  float rX = mix(vTex.x, vPos.x, vTex.y);\n\n  vec2 pos = vec2(translateScaleX(vPos.x), tr"
+"anslateScaleY(vPos.y));\n  float lPx = glToPixelX(translateScaleX(lX));\n  float rPx = glToPixelX(translateScaleX(rX));\n\n  float screenX = glToPixelX(pos.x);\n  float screenY = glToPixelY(pos.y);\n\n  // extend left/right edge to left/right pixel bound\n  screenX = mix(floor(screenX), ceil(screenX), vTex.y);\n  // convert back to gl space\n  pos.x = pixelToGlX(screenX);\n\n  screenPos = vec2(screenX, screenY);\n  lrScreen = vec2(lPx, rPx);\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nin vec2 screenPos;\nin vec2 lrScreen;\nvoid main() {\n  float lPx = max(lrScreen.x, screenPos.x - 0.5);\n  float rPx = min(lrScreen.y, screenPos.x + 0.5);\n  float inside = rPx - lPx;\n  outColor = vec4(uColor.xyz * inside, 1.0);\n}",
"Swimlane demo "," events"]);
By.prototype.toString=function(){return $rt_ustr(this);};
By.prototype.valueOf=By.prototype.toString;C.prototype.toString=function(){return $rt_ustr(JP(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(Lm);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=Hm.prototype;c.get=c.ie;Object.defineProperty(c,"length",{get:c.hr});c=FK.prototype;c.onAnimationFrame=c.gZ;c=FH.prototype;c.handleEvent=c.e;c=FJ.prototype;c.f=c.iF;c=Hu.prototype;c.removeEventListener=c.gd;c.dispatchEvent=c.e1;c.addEventListener=c.fn;c=HF.prototype;c.removeEventListener=c.gd;c.dispatchEvent=c.e1;c.addEventListener=c.fn;c=Ea.prototype;c.handleEvent=c.e;c=Ec.prototype;c.handleEvent=c.e;c=Eg.prototype;c.handleEvent=c.e;c=Eh.prototype;c.handleEvent=c.e;c=Ei.prototype;c.handleEvent
=c.e;c=Ej.prototype;c.handleEvent=c.e;c=Ek.prototype;c.handleEvent=c.e;c=El.prototype;c.handleEvent=c.e;c=Em.prototype;c.handleEvent=c.e;c=En.prototype;c.handleEvent=c.e;c=Eo.prototype;c.handleEvent=c.e;c=Ep.prototype;c.handleEvent=c.e;c=FP.prototype;c.handleEvent=c.e;c=FQ.prototype;c.handleEvent=c.e;c=FR.prototype;c.handleEvent=c.e;c=FS.prototype;c.handleEvent=c.e;c=FM.prototype;c.handleEvent=c.e;c=FN.prototype;c.handleEvent=c.e;c=GI.prototype;c.createEntityReference=c.gI;c.getElementById=c.hV;c.createTextNode
=c.hp;c.hasChildNodes=c.iI;c.querySelectorAll=c.jE;c.removeChild=c.gL;c.cloneNode=c.hh;c.createComment=c.i$;c.insertBefore=c.hu;c.getElementsByTagNameNS=c.hn;c.hasAttributes=c.gT;c.normalize=c.jl;c.hasChildNodesJS=c.i5;c.getElementsByTagName=c.ic;c.appendChild=c.hQ;c.createAttributeNS=c.iq;c.dispatchEvent=c.iH;c.replaceChild=c.ij;c.createElementNS=c.hX;c.createCDATASection=c.g0;c.querySelector=c.gR;c.createElement=c.i9;c.isSupported=c.g2;c.importNode=c.hU;c.removeEventListener=c.hI;c.createAttribute=c.iJ;c.createDocumentFragment
=c.gi;c.createProcessingInstruction=c.gy;c.addEventListener=c.i8;Object.defineProperty(c,"nodeName",{get:c.hO});Object.defineProperty(c,"documentElement",{get:c.gj});Object.defineProperty(c,"childNodes",{get:c.gr});Object.defineProperty(c,"prefix",{get:c.h7,set:c.jy});Object.defineProperty(c,"implementation",{get:c.hz});Object.defineProperty(c,"textContent",{get:c.jg,set:c.hm});Object.defineProperty(c,"parentNode",{get:c.hS});Object.defineProperty(c,"nextSibling",{get:c.js});Object.defineProperty(c,"nodeType",
{get:c.jz});Object.defineProperty(c,"doctype",{get:c.jk});Object.defineProperty(c,"localName",{get:c.h$});Object.defineProperty(c,"nodeValue",{get:c.iQ,set:c.iZ});Object.defineProperty(c,"firstChild",{get:c.ip});Object.defineProperty(c,"lastChild",{get:c.jj});Object.defineProperty(c,"previousSibling",{get:c.hw});Object.defineProperty(c,"namespaceURI",{get:c.ja});Object.defineProperty(c,"attributes",{get:c.id});Object.defineProperty(c,"ownerDocument",{get:c.jr});c=GA.prototype;c.handleEvent=c.e;c=DU.prototype;c.f
=c.dw;c=Fu.prototype;c.f=c.dw;c=Fv.prototype;c.f=c.dw;c=Es.prototype;c.accept=c.i0;})();
})(typeof self!=='undefined'?self:typeof global!=='undefined'?global:this,typeof self!=='undefined'?self:typeof global!=='undefined'?global:this);