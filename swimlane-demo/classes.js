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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.d7=f;}
function $rt_cls(cls){return GG(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Kq(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.O.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return Kf(t);}
function $rt_throwableCause(t){return Ki(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(K_());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return La(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var KC=$rt_compare;var Lb=$rt_nullCheck;var O=$rt_cls;var S=$rt_createArray;var CD=$rt_isInstance;var Lc=$rt_nativeThread;var Ld=$rt_suspending;var Le=$rt_resuming;var Lf=$rt_invalidPointer;var B=$rt_s;var Bd=$rt_eraseClinit;var GE=$rt_imul;var JU=$rt_wrapException;var Lg=$rt_checkBounds;var Lh=$rt_checkUpperBound;var Li=$rt_checkLowerBound;var Lj=$rt_wrapFunction0;var Lk=$rt_wrapFunction1;var Ll=$rt_wrapFunction2;var Lm=$rt_wrapFunction3;var Ln=$rt_wrapFunction4;var E=$rt_classWithoutFields;var I2
=$rt_createArrayFromData;var KO=$rt_createCharArrayFromData;var Lo=$rt_createByteArrayFromData;var Lp=$rt_createShortArrayFromData;var Lq=$rt_createIntArrayFromData;var Lr=$rt_createBooleanArrayFromData;var KQ=$rt_createFloatArrayFromData;var Ls=$rt_createDoubleArrayFromData;var Lt=$rt_createLongArrayFromData;var Lu=$rt_createBooleanArray;var Fx=$rt_createByteArray;var Lv=$rt_createShortArray;var BA=$rt_createCharArray;var K2=$rt_createIntArray;var Lw=$rt_createLongArray;var HY=$rt_createFloatArray;var Lx=$rt_createDoubleArray;var KC
=$rt_compare;var Ly=$rt_castToClass;var Lz=$rt_castToInterface;var LA=Long_toNumber;var LB=Long_fromInt;var LC=Long_fromNumber;var LD=Long_create;var LE=Long_ZERO;var LF=Long_hi;var HR=Long_lo;
function C(){this.$id$=0;}
function LG(){var a=new C();Gh(a);return a;}
function Gh(a){}
function Ce(a){return GG(a.constructor);}
function JB(a){var b,c,d,e,f,g,h,i,j,k,l;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;if(!d)e=B(0);else{if(!d)f=32;else{g=0;f=d>>>16|0;if(f)g=16;else f=d;h=f>>>8|0;if(!h)h=f;else g=g|8;i=h>>>4|0;if(!i)i=h;else g=g|4;f=i>>>2|0;if(!f)f=i;else g=g|2;if(f>>>1|0)g=g|1;f=(32-g|0)-1|0;}j=(((32-f|0)+4|0)-1|0)/4|0;k=BA(j);l=k.data;j=(j-1|0)*4|0;f=0;while(j>=0){i=f+1|0;l[f]=Dd((d>>>j|0)&15,16);j=j-4|0;f=i;}e=Kq(k);}b=Y();K(K(b,B(1)),e);return W(b);}
function J6(a){var b,c,d;if(!CD(a,Di)&&a.constructor.$meta.item===null){b=new DC;U(b);J(b);}b=H6(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var GX=E();
function K9(b){var c,d,e,f,g,h,i,j,k,l,m;Gd();Gz();Hu();Hf();HG();F$();G0();c=new $rt_globals.Array();d=new DK;e=new FW;f=new FY;g="canvasDiv";h=new FS;i=new C7;EI(i);h.dU=i;i=new C7;EI(i);h.dT=i;j=new Fw;i=null;Gh(j);j.eB=i;j.by=LH;h.c8=j;i=new Ds;i.c_=j;h.dC=i;h.bP=c;k=c.length;l=0;while(l<k){i=h.bP[l];m=new DS;m.dH=h;m.dG=l;j=Bl(m,"f");i.onmessage=j;i=c[l];j=Hb();i.postMessage(j);l=l+1|0;}h.bL=0;h.dD=K2(k);c=new FG;c.d1=d;d.cR=c;c=new FH;c.cQ=d;d.d5=c;c=new FD;c.cp=d;d.cP=c;i=new FF;i.dO=d;d.cO=new $rt_globals.ResizeObserver(Bl(i,
"f"));d.p=null;d.bj=1;d.el=1;d.b3=g;d.e4=h;h=(BW()).createElement("canvas");c=0;h.tabIndex=c;j=h.style;j.setProperty("width","100%");j.setProperty("height","100%");j.setProperty("outline","none");d.u=h;i=h.getContext("2d");d.cv=i;c="copy";i.globalCompositeOperation=c;if(LI===null){j=new $rt_globals.OffscreenCanvas(256,256);m=JI(!!0,!!0,!!1,!!1);m=j.getContext("webgl2",m);if(m!==null){c=new Cm;Gb(c,m,new D8,HX(),2.25,0.625);c.ey=KB();c.H=j;c.ed=j.width;c.bK=c.H.height;LI=c;}c=new D$;j.addEventListener("webglcontextlost",
Bl(c,"handleEvent"));i=new Ea;j.addEventListener("webglcontextrestored",Bl(i,"handleEvent"));}c=LI;d.V=c;if(c!==null){Gm(d,g);d.bW=KP(d.u,d.d5);HV(d.cO,d.u);j=$rt_globals.window;i=d.cP;j.addEventListener("resize",Bl(i,"handleEvent"));}if(!Gj(d,e))Ga(f);Ht(d);}
var D0=E(0);
var DD=E(0);
function D_(){var a=this;C.call(a);a.bH=null;a.Q=null;}
function GG(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new D_;c.Q=b;d=c;b.classObject=d;}return c;}
function Ca(a){return a.Q.$meta.primitive?1:0;}
function Ct(a){return GG(a.Q.$meta.item);}
var Ho=E();
function Bl(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Bk(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Ha=E();
function H6(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function GI(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(GI(d[e],c))return 1;e=e+1|0;}return 0;}
function B1(){var a=this;C.call(a);a.d2=null;a.dX=null;a.bX=0;a.ce=0;}
function LJ(a){var b=new B1();Ba(b,a);return b;}
function Ba(a,b){a.bX=1;a.ce=1;a.d2=b;}
function Ik(a){return a;}
function Kf(a){return a.d2;}
function Ki(a){var b;b=a.dX;if(b===a)b=null;return b;}
var BC=E(B1);
function LK(){var a=new BC();U(a);return a;}
function U(a){a.bX=1;a.ce=1;}
var P=E(BC);
function La(a){var b=new P();Je(b,a);return b;}
function Je(a,b){Ba(a,b);}
var Hc=E(P);
var By=E(0);
var Bv=E(0);
var Cg=E(0);
function Bx(){var a=this;C.call(a);a.O=null;a.bh=0;}
var LL=null;var LM=null;var LN=null;function Hy(){Hy=Bd(Bx);IJ();}
function Kq(a){var b=new Bx();Gp(b,a);return b;}
function KX(a,b,c){var d=new Bx();FZ(d,a,b,c);return d;}
function Gp(a,b){Hy();FZ(a,b,0,b.data.length);}
function FZ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;Hy();e=BA(d);a.O=e;if(b===null){f=new Cv;Ba(f,B(2));J(f);}if(c>=0&&d>=0&&(c+d|0)<=C4(b)&&(0+d|0)<=C4(e)){a:{b:{c:{if(b!==e){g=Ct(Ce(b));f=Ct(Ce(e));if(g!==null&&f!==null){if(g===f)break c;if(!Ca(g)&&!Ca(f)){h=b;i=0;j=c;while(i<d){k=h.data;l=j+1|0;m=k[j];n=f.Q;if(!(m!==null&&!(typeof m.constructor.$meta==='undefined'?1:0)&&GI(m.constructor,n)?1:0)){C_(b,c,e,0,i);g=new Cb;U(g);J(g);}i=i+1|0;j=l;}C_(b,c,e,0,d);break a;}if(!Ca(g))break b;if(Ca(f))break c;else break b;}g
=new Cb;U(g);J(g);}}C_(b,c,e,0,d);break a;}g=new Cb;U(g);J(g);}return;}g=new Bf;U(g);J(g);}
function BB(a,b){var c,d;if(b>=0){c=a.O.data;if(b<c.length)return c[b];}d=new C3;U(d);J(d);}
function Bh(a){return a.O.data.length;}
function Fh(a){return a.O.data.length?0:1;}
function I1(a,b){var c;if(a===b)return 1;if(!(b instanceof Bx))return 0;if(Bh(b)!=Bh(a))return 0;c=0;while(c<Bh(b)){if(BB(a,c)!=BB(b,c))return 0;c=c+1|0;}return 1;}
function IR(a){var b,c,d,e;a:{if(!a.bh){b=a.O.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.bh=(31*a.bh|0)+e|0;d=d+1|0;}}}return a.bh;}
function IJ(){var b,c;b=BA(0);LL=b;c=new Bx;Hy();c.O=b;LM=c;LN=new DP;}
var BY=E(B1);
var B3=E(BY);
var GV=E(B3);
var Dc=E();
function B6(){Dc.call(this);this.b0=0;}
var LO=null;var LP=null;function Ix(a){var b=new B6();F4(b,a);return b;}
function F4(a,b){a.b0=b;}
function EC(b){var c,d;if(b>=(-128)&&b<=127){a:{if(LP===null){LP=S(B6,256);c=0;while(true){d=LP.data;if(c>=d.length)break a;d[c]=Ix(c-128|0);c=c+1|0;}}}return LP.data[b+128|0];}return Ix(b);}
function Gd(){LO=O($rt_intcls());}
function CK(){var a=this;C.call(a);a.l=null;a.h=0;}
function B_(a,b,c){var d,e,f,g;d=a.h;e=d-b|0;FK(a,(d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.l.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.h=a.h+(c-b|0)|0;}
var CS=E(0);
var Gc=E(CK);
function Y(){var a=new Gc();JA(a);return a;}
function JA(a){a.l=BA(16);}
function K(a,b){var c;c=a.h;if(b===null)b=B(3);Dj(a,c,b);return a;}
function V(a,b){var c,d,e,f,g,h,i,j;c=a.h;d=1;if(b<0){d=0;b= -b|0;}a:{if($rt_ucmp(b,10)<0){if(d)B_(a,c,c+1|0);else{B_(a,c,c+2|0);e=a.l.data;f=c+1|0;e[c]=45;c=f;}a.l.data[c]=Dd(b,10);}else{g=1;h=1;f=$rt_udiv((-1),10);b:{while(true){i=g*10|0;if($rt_ucmp(i,b)>0){i=g;break b;}h=h+1|0;if($rt_ucmp(i,f)>0)break;g=i;}}if(!d)h=h+1|0;B_(a,c,c+h|0);if(d)f=c;else{e=a.l.data;f=c+1|0;e[c]=45;}while(true){if(!i)break a;e=a.l.data;j=f+1|0;e[f]=Dd($rt_udiv(b,i),10);b=$rt_umod(b,i);i=$rt_udiv(i,10);f=j;}}}return a;}
function BO(a,b){var c;c=a.h;B_(a,c,c+1|0);a.l.data[c]=b;return a;}
function Hr(a,b){a.h=b;}
function W(a){return KX(a.l,0,a.h);}
function FK(a,b){var c,d,e,f;c=a.l.data.length;if(c<b){b=c>=1073741823?2147483647:BL(b,BL(c*2|0,5));d=a.l.data;e=BA(b);f=e.data;b=Bt(b,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.l=e;}}
function Dj(a,b,c){var d,e,f;if(b>=0&&b<=a.h){a:{if(c===null)c=B(3);else if(Fh(c))break a;FK(a,a.h+Bh(c)|0);d=a.h-1|0;while(d>=b){a.l.data[d+Bh(c)|0]=a.l.data[d];d=d+(-1)|0;}a.h=a.h+Bh(c)|0;d=0;while(d<Bh(c)){e=a.l.data;f=b+1|0;e[b]=BB(c,d);d=d+1|0;b=f;}}return a;}c=new C3;U(c);J(c);}
var BP=E(B3);
var GM=E(BP);
function LQ(a){var b=new GM();JH(b,a);return b;}
function JH(a,b){Ba(a,b);}
var GC=E(BP);
function LR(a){var b=new GC();JW(b,a);return b;}
function JW(a,b){Ba(a,b);}
var R=E(0);
function Gs(b){return b;}
var DI=E(0);
var He=E();
function IV(a,b){return a.iP(b);}
function HW(a){return a.iz();}
var CZ=E();
var LS=null;var LT=null;function E9(){if(LS===null)LS=Iq(LU,0);return LS;}
function Cs(){if(LT===null)LT=Iq(LV,0);return LT;}
function KH(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=C4(b)&&(e+f|0)<=C4(d)){C_(b,c,d,e,f);return;}b=new Bf;U(b);J(b);}
function C_(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Hg(){return LC($rt_globals.performance.now()*1000000.0);}
var HC=E();
var Fc=E(0);
function DK(){var a=this;C.call(a);a.cR=null;a.d5=null;a.cP=null;a.cO=null;a.u=null;a.cv=null;a.p=null;a.b3=null;a.bW=null;a.V=null;a.bj=0;a.fF=0;a.W=null;a.e4=null;a.el=0;}
function Gm(a,b){var c,d;if(a.u.parentNode!==null)BE(Cs(),B(4));else{if((b?1:0)?1:0)a.b3=b;b=BW();c=a.b3;d=b.getElementById(c);if(d!==null){b=a.u;d.appendChild(b);CG(a);}}}
function Ht(a){a.u.focus();}
function Gj(a,b){var c,d;b=a.V;if(b!==null){c=new Dy;d=a.bW.g;c.ct=b;c.X=d;c.br=a;a.W=KF(c);CG(a);}return a.V===null?0:1;}
function Et(a,b){var c;c=BW();b=$rt_ustr(b);c.title=b;}
function CG(a){a.fF=$rt_globals.requestAnimationFrame(Bl(a.cR,"onAnimationFrame"));}
function C9(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;b=a.V;c=a.p;d=c.b;e=c.a;f=b.H.width;g=b.H.height;if(f<d){c=b.H;b.ed=d;h=d;c.width=h;}if(g<e){c=b.H;b.bK=e;b=e;c.height=b;}b=a.V;c=a.p;d=c.b;e=c.a;B7(b.Y,d,e);c=b.i;b=b.Y;f=b.b;g=b.a;c.viewport(0,0,f,g);b=a.W;if(b.bo===null){b.bo=S(B8,b.bn.data.length);d=0;while(true){i=b.bn.data;if(d>=i.length)break;b.bo.data[d]=J1(b.j.i,i[d]);d=d+1|0;}}Fk(b.j,2);c=b.j;h=b.b8;j=c.i;k=h.T;l=h.R;m=h.S;n=h.I;j.clearColor(k,l,m,n);c.i.clear(16384);D4(b.j,b.bB);d=0;e=0;while
(d<20){f=b.dW+GE(b.cy+b.bN|0,d)|0;l=b.t;m=0.019999999552965164*l;k=l*(b.y-1.0)*b.k.b/2.0;k=(k+JT(k)*0.5|0)*2.0;c=b.k;o=k/c.b;l=b.bN;k=1.0*l;n=c.a;k=k/n;l=1.0-(f*2.0+l)/n;c=b.bB;h=b.j;j=h.i;h=h.Y;p=c.bU;j.uniform4f(p,m,k,o,l);DH(c,j,h);c=b.bB;h=b.j.i;j=b.cd.data[e];Gr(h,c.c7,j);c=b.j;c.bb=DJ(b.bo.data[e],c.bb);e=e+1|0;d=d+1|0;}Cw(b.j,0);c=b.G;g=b.bA;h=b.k;Ez(c,g,0,h.a,10000,h.b,15,1);c=b.D;d=b.bl;h=b.k;Ez(c,d,0,h.b,20000,h.a,15,0);Cw(b.j,1);E6(b.G,b.j);E6(b.D,b.j);FT(b.G,b.j);FT(b.D,b.j);Cw(b.j,0);b=a.cv;c=a.V;h
=c.H;e=c.bK;c=a.p;d=c.a;q=e-d|0;r=c.b;s=d;b.drawImage(h,0.0,q,r,s,0.0,0.0,r,s);}
function D5(a,b,c){var d,e,f,g;if(a.p===null)a.p=new Bi;B7(a.p,b,c);a.bW.q=a.p;d=b&&c?1:0;if(d){e=a.u;f=b;e.width=f;g=a.u;e=c;g.height=e;}EW(a.W,a.p,Da(a));if(d)C9(a);}
function Da(a){return $rt_globals.window.devicePixelRatio;}
var C5=E(0);
var FW=E();
var BS=E(0);
var FY=E();
function Ga(a){var b,c,d;b=(BW()).createElement("pre");c="FATAL: WebGL is not enabled in the browser";b.innerHTML=c;d=b.style;d.setProperty("padding-left","10px");d.setProperty("padding-right","10px");(BW()).getElementById("panelDiv").appendChild(b);}
var C2=E(0);
var DP=E();
var Bf=E(P);
var Gu=E();
function C4(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(LW());}return b.data.length;}
function Jj(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Cv=E(P);
var Cb=E(P);
var Ch=E();
var LX=null;var LY=null;function Ex(b){return (b&64512)!=55296?0:1;}
function Eb(b){return (b&64512)!=56320?0:1;}
function Dd(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gz(){LX=O($rt_charcls());LY=S(Ch,128);}
var Gi=E();
function Hh(b){return $rt_str(b);}
var Er=E(0);
function Cl(){var a=this;C.call(a);a.bP=null;a.dU=null;a.dT=null;a.c8=null;a.dD=null;a.cX=0;a.bL=0;a.dC=null;}
var FS=E(Cl);
var EX=E(0);
function FG(){C.call(this);this.d1=null;}
function Ir(a,b){var c,d,e,f,g,h;c=b;b=a.d1;d=b.W;c=c/1000.0;e=0;if(!(d.bi^d.b$))d.bz=0.0;else{e=1;f=d.bz;g=(f>0.0?Do(f,0.3333333333333333): -Do( -f,0.3333333333333333))/10.0*(!d.bi?1:(-1));h=d.t+g;d.t=h;d.t=G_(0.5,Gq(h,500.0));d.bz=d.bz+c-d.cU;CN(d);}if(!(d.bw^d.bS))d.bp=0.0;else{e=1;g=Do(d.bp,0.30000001192092896)/d.k.b*(!d.bw?1:(-1));g=d.y+g;d.y=g;d.y=G_((-1.0),Gq(g,1.0));d.bp=d.bp+c-d.dS;Dl(d);}g=c;d.dS=g;d.cU=g;if(!(!e&&!b.bj)){d=b.p;if(d!==null&&GE(d.b,d.a)){b.bj=0;C9(b);}}CG(b);}
function FH(){C.call(this);this.cQ=null;}
function Bg(a){a.cQ.bj=1;}
var T=E(0);
function FD(){C.call(this);this.cp=null;}
function Jm(a,b){var c;b=a.cp;c=b.p;if(c!==null){EW(b.W,c,Da(b));c=b.p;if(GE(c.b,c.a))C9(b);}}
var DX=E(0);
function FF(){C.call(this);this.dO=null;}
function Ke(a,b,c){var d,e,f,g;c=a.dO;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.u){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Da(c);D5(c,Cj(f.width*g),Cj(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];D5(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var Gx=E();
function HV(b,c){J0(b,c,Ie());}
function Ie(){return {box:'device-pixel-content-box'};}
function J0(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Gg=E();
function J2(b){var c,d;c=b.iZ();K7();b=LZ;d=c.data;return b.decode(d);}
function CJ(){var a=this;C.call(a);a.em=null;a.fJ=null;a.i=null;a.eH=0;a.fY=null;a.eE=0;a.fA=0;a.bE=null;a.eV=null;a.ew=null;a.fQ=null;a.fV=null;a.eX=null;a.fT=null;a.ev=null;a.fl=null;a.eF=null;a.cF=null;a.Y=null;a.dv=null;a.bb=0;a.bR=0;a.eQ=null;a.ff=0.0;a.fj=0.0;}
function Gb(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a.Y=new Bi;a.bb=0;a.eQ=new Es;a.em=c;a.eH=d;g=$rt_str(b.getParameter(7938));c=Y();K(K(c,B(5)),g);$rt_globals.console.info($rt_ustr(W(c)));a.i=b;h=new Fa;h.fa=1;L0=L0+1|0;h.fO=4;h.fM=4;i=new $rt_globals.OffscreenCanvas(4,4);h.f1=i;j=Ji();i=i.getContext("2d",j);h.fe=i;j="#FFFFFF";i.fillStyle=j;a.fJ=h;k=KQ([1.0,(-1.0),1.0,1.0,1.0,1.0,1.0,0.0,(-1.0),(-1.0),0.0,1.0,(-1.0),1.0,0.0,0.0]);l=KO([0,1,2,1,2,3]);c=new B8;BX();Fm(c,b,L1,k,l);a.cF=c;if(g===B(6))d=1;else a:{d
=0;if((d+Bh(B(6))|0)>Bh(g))d=0;else{m=0;while(m<Bh(B(6))){n=BB(B(6),m);o=d+1|0;if(n!=BB(g,d)){d=0;break a;}m=m+1|0;d=o;}d=1;}}a.fA=d;c=new DW;c.ei=b;a.fY=c;a.ff=e;a.fj=f;d=b.getParameter(3379);a.eE=d;c=Y();V(K(c,B(7)),d);$rt_globals.console.info($rt_ustr(W(c)));k=S(Bc,9);l=k.data;c=new D2;BM(c,b,B(8),B(9),L1);g=c.c;c.c0=b.getUniformLocation(g,"uColor");a.bE=c;l[0]=c;c=KK(b,B(10));a.eV=c;l[1]=c;c=new EJ;BM(c,b,B(8),B(11),L1);a.ew=c;l[2]=c;c=new E8;EN(c,b,B(12));h=c.c;c.eG=b.getUniformLocation(h,"uContrast");a.fQ
=c;l[3]=c;c=new EO;Fv(c,b,B(13),B(14));a.fV=c;l[4]=c;c=new Fb;Fv(c,b,B(13),B(15));a.eX=c;l[5]=c;c=KA(b);a.fT=c;l[6]=c;c=K3(b);a.ev=c;l[7]=c;c=K5(b);a.fl=c;l[8]=c;a.eF=k;G6(b,B(16));}
function Cw(a,b){Fk(a,!b?0:1);}
function Fk(a,b){var c;if(b==a.bR)return b;if(b<=0)a.i.disable(3042);else a:{a.i.enable(3042);switch(b){case 1:break;case 2:a.i.blendFuncSeparate(770,1,1,1);break a;default:break a;}a.i.blendFuncSeparate(770,771,1,1);}c=a.bR;a.bR=b;return c;}
function E7(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;D4(a,a.bE);f=a.bE;g=a.i;h=b;i=c;j=a.Y;k=d.b;l=j.b;m=k/l;n=d.a;o=j.a;p=n/o;q=(h*2.0+k)/l-1.0;l=1.0-(i*2.0+n)/o;d=f.bU;g.uniform4f(d,m,p,q,l);DH(f,g,j);d=a.bE;Gr(a.i,d.c0,e);a.bb=DJ(a.cF,a.bb);}
function D4(a,b){var c,d;if(b!==a.dv){c=a.i;d=b.c;c.useProgram(d);a.dv=b;}}
function Cm(){var a=this;CJ.call(a);a.H=null;a.ed=0;a.bK=0;a.ey=null;}
var LI=null;function HX(){return 1;}
function JI(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
function HE(){var a=this;C.call(a);a.g=null;a.bd=null;a.eu=null;a.q=null;}
function KP(a,b){var c=new HE();It(c,a,b);return c;}
function It(a,b,c){var d,e,f,g;a.q=null;a.bd=b;d=new DF;d.b_=BF(S(Cc,0));d.cf=BF(S(Cc,0));d.U=BF(S(CV,0));d.bT=BF(S(Cq,0));d.cG=BF(S(F0,0));d.de=BF(S(Fd,0));d.du=BF(S(E_,0));d.dA=BF(S(BS,0));d.d8=BF(S(BS,0));d.n=c;a.g=d;e=$rt_globals.window;f=S(BI,16);g=f.data;d=new Ed;d.c3=a;g[0]=Bb(a,b,B(17),d);d=new Ee;d.dn=a;g[1]=Bb(a,b,B(18),d);d=new Ef;d.cn=a;g[2]=Bb(a,b,B(19),d);d=new Eg;d.dN=a;g[3]=Bb(a,b,B(20),d);d=new Eh;d.cA=a;g[4]=Bb(a,b,B(21),d);d=new Ei;d.fx=a;g[5]=Bb(a,b,B(22),d);d=new Ej;d.d3=a;g[6]=Bb(a,b,B(23),
d);d=new Ek;d.cK=a;g[7]=Bb(a,b,B(24),d);d=new El;d.dR=a;g[8]=Bb(a,b,B(25),d);d=new Em;d.c9=a;g[9]=Bb(a,b,B(26),d);d=new FL;d.cz=a;g[10]=Bb(a,b,B(27),d);d=new FM;d.dM=a;g[11]=Bb(a,b,B(28),d);d=new FN;d.cw=a;g[12]=Bb(a,b,B(29),d);d=new FO;d.dm=a;e.addEventListener("paste",Bl(d,"handleEvent"),!!1);g[13]=ED(a,e,B(30),d);d=new FI;d.ck=a;g[14]=Bb(a,e,B(31),d);d=new FJ;d.df=a;g[15]=Bb(a,e,B(32),d);c=new D7;c.eq=f;a.eu=c;e=new Fq;e.dV=b;b.onpointerdown=Bl(e,"f");e=new Fr;e.cT=b;b.onpointerup=Bl(e,"f");}
function DY(){return (BW()).activeElement;}
function Bb(a,b,c,d){b.addEventListener($rt_ustr(c),Bl(d,"handleEvent"));return ED(a,b,c,d);}
function ED(a,b,c,d){var e;e=new DV;e.fr=b;e.ft=c;e.fs=d;return e;}
function EL(a,b){var c;c=new FC;c.fP=b;return c;}
function Bw(a,b){var c,d,e,f,g,h,i;c=$rt_globals.window.devicePixelRatio;d=a.bd.getBoundingClientRect();e=new Bi;f=Cj((b.clientX-d.left)*c);g=Cj((b.clientY-d.top)*c);e.b=f;e.a=g;h=new Bi;i=a.q;h.b=i.b;h.a=i.a;d=new Dr;E5(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.r=e;d.et=h;return d;}
function FP(a,b,c){var d,e,f,g;d=new Ft;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;E5(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.c$=0;d.fv=e;d.cs=f;d.L=c;d.cS=g;return d;}
function Bn(a,b){b.stopPropagation();b.preventDefault();}
var Bo=E(0);
var FR=E(0);
var E3=E(0);
var EU=E(0);
var Eq=E(0);
var EY=E(0);
var Fj=E(0);
var Hl=E();
function I$(a,b,c){a.cY($rt_str(b),Bk(c,"handleEvent"));}
function JZ(a,b,c){a.cE($rt_str(b),Bk(c,"handleEvent"));}
function Jc(a,b,c,d){a.c6($rt_str(b),Bk(c,"handleEvent"),d?1:0);}
function Jg(a,b){return !!a.c4(b);}
function HO(a,b,c,d){a.d$($rt_str(b),Bk(c,"handleEvent"),d?1:0);}
var D1=E(0);
var Cd=E(0);
var Cp=E();
function EI(a){}
var De=E(0);
var DM=E(0);
function CX(){Cp.call(this);this.co=0;}
var CP=E(CX);
var DE=E(0);
var Fl=E(0);
function C7(){var a=this;CP.call(a);a.dg=null;a.ek=null;a.c1=0;}
function DL(a){var b,c;b=a.dg;if(b===null)b=null;else{c=b.fq;a.dg=c;if(c!==null)c.fZ=null;else a.ek=null;a.c1=a.c1-1|0;a.co=a.co+1|0;b=b.fD;}return b;}
var Cz=E(0);
var C8=E();
var Di=E(0);
var Fg=E(0);
var DZ=E(0);
function Fw(){var a=this;C8.call(a);a.be=null;a.by=null;a.eB=null;a.bC=0;}
function GH(a,b){var c;c=Fp(a,b);if(c===null)return null;a.be=CA(a,a.be,b);a.bC=a.bC+1|0;return c.bm;}
function Fp(a,b){var c,d;c=a.be;while(true){if(c===null)return null;d=CQ(a.by,b,c.bk);if(!d)break;c=d>=0?c.f:c.d;}return c;}
function CW(a,b,c){var d,e;if(b===null){b=new CL;d=null;b.bk=c;b.bm=d;b.E=1;b.M=1;return b;}e=CQ(a.by,c,b.bk);if(!e)return b;if(e>=0)b.f=CW(a,b.f,c);else b.d=CW(a,b.d,c);Br(b);return C1(b);}
function CA(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=CQ(a.by,c,b.bk);if(d<0)b.d=CA(a,b.d,c);else if(d>0)b.f=CA(a,b.f,c);else{e=b.f;if(e===null)return b.d;f=b.d;g=S(CL,e.E).data;h=0;while(true){b=e.d;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.f;while(h>0){h=h+(-1)|0;j=g[h];j.d=b;Br(j);b=C1(j);}e.f=b;e.d=f;Br(e);b=e;}Br(b);return C1(b);}
var Go=E();
function Ds(){C.call(this);this.c_=null;}
var Dq=E();
var L2=null;function Hb(){return "ping";}
function Hp(b){return b===Hb()?1:0;}
var Fy=E(0);
var Hv=E();
function I9(a,b,c){a.cY($rt_str(b),Bk(c,"handleEvent"));}
function In(a,b,c){a.cE($rt_str(b),Bk(c,"handleEvent"));}
function Kg(a,b,c,d){a.c6($rt_str(b),Bk(c,"handleEvent"),d?1:0);}
function Jy(a,b){return !!a.c4(b);}
function IX(a,b,c,d){a.d$($rt_str(b),Bk(c,"handleEvent"),d?1:0);}
var D$=E();
function IW(a,b){$rt_globals.console.info("webglcontextlost",b);}
var Ea=E();
function HP(a,b){$rt_globals.console.info("webglcontextrestored",b);}
function DF(){var a=this;C.call(a);a.b_=null;a.cf=null;a.U=null;a.bT=null;a.cG=null;a.de=null;a.du=null;a.dA=null;a.d8=null;a.n=null;a.K=null;a.dY=0;}
function EP(a,b){var c,d,e,f,g,h,i,j;Bg(a.n);c=(Bj(!b.L?a.cf:a.b_)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e];g=b.cs;if(g==40)f.bi=b.L;if(g==38)f.b$=b.L;if(g==37)f.bw=b.L;if(g==39)f.bS=b.L;if(g==32&&(b.L&&!b.cS?1:0)){f.bD=f.bD?0:1;h=E9();i=f.bD;f=Y();j=K(f,B(33));Dj(j,j.h,!i?B(34):B(35));BE(h,W(f));i=1;}else i=0;if(i)break;if(b.c$)break;e=e+1|0;}return i;}
function ET(a,b){var c,d,e;a:{Bg(a.n);c=a.K;if(c!==null)c.o(b);else{d=(Bj(a.U)).data.length;e=0;while(true){if(e>=d)break a;e=e+1|0;}}}}
function EK(a,b,c){var d,e,f;Bg(a.n);d=(Bj(a.de)).data;e=d.length;f=0;while(f<e){if(d[f].hW(b,c))return 1;f=f+1|0;}return 0;}
var BI=E(0);
function Ed(){C.call(this);this.c3=null;}
function Jl(a,b){var c;c=a.c3;if(EP(c.g,FP(c,b,1)))Bn(c,b);}
function Ee(){C.call(this);this.dn=null;}
function Jx(a,b){var c;c=a.dn;if(EP(c.g,FP(c,b,0)))Bn(c,b);}
function Ef(){C.call(this);this.cn=null;}
function Ig(a,b){var c,d,e,f,g;c=a.cn;if(c.q!==null){d=Bw(c,b);e=b.clientX;f=b.clientY;g=Y();V(BO(V(K(g,B(36)),e),32),f);W(g);ET(c.g,d);Bn(c,b);}}
function Eg(){C.call(this);this.dN=null;}
function HN(a,b){var c,d,e,f,g,h,i,j,k;c=a.dN;b.button;if(c.q!==null)a:{d=Bw(c,b);c=c.g;e=b.button;Bg(c.n);if(c.K===null){f=(Bj(c.U)).data;g=f.length;h=0;while(h<g){i=f[h];if(e)j=L3;else{i.cg=1;if(C6(i.G,d.r)){b=i.G;j=d.r;k=new DN;k.d4=i;j=DR(b,j,k,1);}else if(C6(i.D,d.r)){j=i.D;k=d.r;b=new DO;b.cV=i;j=DR(j,k,b,0);}else{j=new E2;j.bv=i;j.e_=d;b=d.r;j.b6=b.b;j.b5=b.a;}}if(j!==null){c.K=j;c.dY=e;break a;}h=h+1|0;}}}}
function Eh(){C.call(this);this.cA=null;}
function H9(a,b){var c,d,e,f;c=a.cA;b.button;if(c.q!==null){Bw(c,b);d=c.g;e=b.button;Bg(d.n);if(e==d.dY&&d.K!==null)d.K=null;f=(Bj(d.U)).data;if(0>=f.length)e=0;else{d=f[0];if(!e)d.cg=0;e=1;}if(e)Bn(c,b);}}
function Ei(){C.call(this);this.fx=null;}
function JX(a,b){}
function Ej(){C.call(this);this.d3=null;}
function Jb(a,b){var c,d;c=a.d3;if(c.q!==null){b=Bw(c,b);d=b.r;d.b=(-1);d.a=(-1);ET(c.g,b);}}
function Ek(){C.call(this);this.cK=null;}
function J4(a,b){var c,d;c=a.cK;if(c.q!==null){a:{switch(b.deltaMode){case 0:break;case 1:break a;case 2:break a;default:break a;}}d=c.g;Bw(c,b);b.deltaX;b.deltaY;Bg(d.n);Bj(d.bT);Bn(c,b);}}
function El(){C.call(this);this.dR=null;}
function Is(a,b){var c,d,e;c=a.dR;if(c.q!==null){Bw(c,b);c=c.g;b.button;b.detail;Bg(c.n);d=(Bj(c.U)).data.length;e=0;while(e<d){e=e+1|0;}}}
function Em(){C.call(this);this.c9=null;}
function H2(a,b){var c,d,e,f,g,h,i;c=a.c9;if(c.q!==null){d=Bw(c,b);e=c.g;Bg(e.n);f=(Bj(e.cG)).data;g=f.length;h=0;a:{while(h<g){if(f[h].jh(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Bn(c,b);}}
function FL(){C.call(this);this.cz=null;}
function JN(a,b){var c,d,e;b=a.cz.g;c=(Bj(b.d8)).data;d=c.length;e=0;while(e<d){c[e].cc();e=e+1|0;}Bg(b.n);}
function FM(){C.call(this);this.dM=null;}
function HU(a,b){var c,d,e;b=a.dM.g;c=(Bj(b.dA)).data;d=c.length;e=0;while(e<d){c[e].cc();e=e+1|0;}if(b.K!==null)b.K=null;Bg(b.n);}
function FN(){C.call(this);this.cw=null;}
function Il(a,b){var c;c=a.cw;if(c.q!==null)Bw(c,b);}
function FO(){C.call(this);this.dm=null;}
function JM(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.dm;if(DY()===c.bd){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Bj(c.g.du)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].il();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.g.n;m=new Ep;m.d0=k;m.dZ=l;g.getAsString(Bl(m,"accept"));Bn(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=Y();K(K(K(K(l,B(37)),k),B(38)),g);$rt_globals.console.info($rt_ustr(W(l)));}e=e+1|0;}}}
function FI(){C.call(this);this.ck=null;}
function Jv(a,b){var c;c=a.ck;if(DY()===c.bd&&EK(c.g,EL(c,b),0))Bn(c,b);}
function FJ(){C.call(this);this.df=null;}
function Jk(a,b){var c;c=a.df;if(DY()===c.bd&&EK(c.g,EL(c,b),1))Bn(c,b);}
var Dv=E(0);
var DB=E(0);
var GD=E();
function BW(){return $rt_globals.window.document;}
function IB(a){return a.gb();}
function Ih(a,b){return a.i9($rt_str(b));}
function H1(a,b){a.hG($rt_str(b));}
function J7(a,b){return a.ji($rt_str(b));}
function H3(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function Kj(a){return a.ja();}
function Ic(a,b,c){return a.hm($rt_str(b),$rt_str(c));}
function JP(a,b,c,d){a.d$($rt_str(b),Bk(c,"handleEvent"),d?1:0);}
function I8(a){return a.ik();}
function Jr(a){return !!a.gH();}
function II(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function Ij(a){return a.h6();}
function Js(a,b){a.g$($rt_str(b));}
function ID(a){return !!a.hd();}
function J8(a){return a.f7();}
function HH(a){return $rt_ustr(a.gl());}
function IS(a,b){return a.iE(b?1:0);}
function JQ(a){return a.gF();}
function Jp(a,b,c){return a.hn($rt_str(b),$rt_str(c));}
function Ib(a,b,c){return a.g6(b,c?1:0);}
function Jn(a,b,c){return !!a.iA($rt_str(b),$rt_str(c));}
function H$(a){return a.gY();}
function Ja(a){return $rt_ustr(a.id());}
function HM(a,b){return !!a.c4(b);}
function Iv(a,b){return a.i$($rt_str(b));}
function JG(a,b,c){return a.ga($rt_str(b),$rt_str(c));}
function HL(a){return a.hy();}
function I_(a,b){return a.jm($rt_str(b));}
function Iu(a){return $rt_ustr(a.gB());}
function JS(a){a.g2();}
function HQ(a,b){return a.hp($rt_str(b));}
function IC(a,b){return a.hV($rt_str(b));}
function Jq(a,b){return a.g1($rt_str(b));}
function IE(a){return $rt_ustr(a.hL());}
function JC(a,b,c){return a.gf(b,c);}
function JJ(a,b){return a.gj(b);}
function Ka(a){return a.h8();}
function I5(a,b,c){a.cE($rt_str(b),Bk(c,"handleEvent"));}
function IK(a,b,c){return a.hM(b,c);}
function Iz(a){return !!a.iy();}
function JV(a,b){return a.jq($rt_str(b));}
function IO(a,b,c,d){a.c6($rt_str(b),Bk(c,"handleEvent"),d?1:0);}
function HI(a){return a.ia();}
function JR(a,b,c){return a.iC($rt_str(b),$rt_str(c));}
function IA(a){return $rt_ustr(a.ie());}
function JK(a){return a.hi();}
function I0(a){return a.hz();}
function Iw(a){return a.iD();}
function I6(a,b,c){a.cY($rt_str(b),Bk(c,"handleEvent"));}
function Kb(a,b){return a.hY(b);}
function IL(a,b){a.gK($rt_str(b));}
function Kh(a){return $rt_ustr(a.go());}
var EZ=E(0);
var D8=E();
var Gv=E();
function KB(){var a=new Gv();J3(a);return a;}
function J3(a){}
function J9(a,b){b=b.message;$rt_globals.console.info("Error loading image: ",b);}
function GQ(){var a=this;C.call(a);a.bf=null;a.bx=null;a.Z=0;}
function BF(a){var b=new GQ();I7(b,a);return b;}
function I7(a,b){a.bf=b;}
function Ci(a,b){var c,d,e;c=a.Z;d=a.bf;if(c==d.data.length)a.bf=E1(d,c+4|0);d=a.bf.data;e=a.Z;a.Z=e+1|0;d[e]=b;a.bx=null;}
function Bj(a){var b;b=a.bx;if(!(b!==null&&b.data.length==a.Z))a.bx=E1(a.bf,a.Z);return a.bx;}
var Cc=E(0);
var CV=E(0);
var Cq=E(0);
var EB=E(0);
var F0=E(0);
var Fd=E(0);
var Dw=E(0);
var E_=E(0);
function D7(){C.call(this);this.eq=null;}
var Cx=E();
var LH=null;function CQ(a,b,c){return KC(b.b0,c.b0);}
function Hu(){LH=new Cx;}
function Bi(){var a=this;C.call(a);a.b=0;a.a=0;}
function EM(a,b){a.b=b.b;a.a=b.a;}
function B7(a,b,c){a.b=b;a.a=c;}
var Es=E();
var F5=E();
var G$=E(0);
function DW(){C.call(this);this.ei=null;}
function Dm(){var a=this;C.call(a);a.c=null;a.ef=null;}
function GB(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(39):B(40);g=$rt_str(b.getShaderInfoLog(e));h=Y();K(K(h,f),g);g=W(h);b.deleteShader(e);BE(E9(),g);BE(Cs(),B(41));BE(Cs(),d);BE(Cs(),B(41));b=new P;Ba(b,g);J(b);}
function Bc(){var a=this;Dm.call(a);a.dQ=null;a.bU=null;a.dw=null;}
function L4(a,b,c,d){var e=new Bc();BM(e,a,b,c,d);return e;}
function BM(a,b,c,d,e){var f,g,h,i,j,k;a.ef=e;f=GB(b,35633,c);d=GB(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.c=g;h=e.dc.data;i=h.length;j=0;while(j<i){c=h[j];d=a.c;k=c.bg;c=c.dj;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.c;b.linkProgram(c);if(!b.getProgramParameter(c,35714)){d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b=new P;c=Y();K(K(c,B(42)),d);Ba(b,W(c));J(b);}G6(b,B(43));a.dw=new Bi;c=a.c;a.dQ=b.getUniformLocation(c,"uResolution");c
=a.c;a.bU=b.getUniformLocation(c,"uSizePos");}
function DH(a,b,c){var d,e,f;d=a.dw;if(!(d.b==c.b&&d.a==c.a?1:0)){EM(d,c);d=a.dQ;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function D2(){Bc.call(this);this.c0=null;}
function BD(){Bc.call(this);this.ez=null;}
function KK(a,b){var c=new BD();EN(c,a,b);return c;}
function L5(a,b,c){var d=new BD();EQ(d,a,b,c);return d;}
function EN(a,b,c){EQ(a,b,B(8),c);}
function EQ(a,b,c,d){BX();BM(a,b,c,d,L1);c=a.c;a.ez=b.getUniformLocation(c,"sDiffuse");}
var EJ=E(Bc);
function E8(){BD.call(this);this.eG=null;}
function BR(){var a=this;BD.call(a);a.ex=null;a.fy=null;a.eR=null;a.fR=null;}
function L6(a,b,c){var d=new BR();Fv(d,a,b,c);return d;}
function Fv(a,b,c,d){EQ(a,b,c,d);c=a.c;a.ex=b.getUniformLocation(c,"uTexTransform");c=a.c;a.fy=b.getUniformLocation(c,"uColor");c=a.c;a.eR=b.getUniformLocation(c,"uBgColor");c=a.c;a.fR=b.getUniformLocation(c,"uTextPow");}
var EO=E(BR);
var Fb=E(BR);
function Hm(){var a=this;BD.call(a);a.fH=null;a.fG=null;a.fz=null;}
function KA(a){var b=new Hm();H7(b,a);return b;}
function H7(a,b){var c,d;EN(a,b,B(44));c=a.c;a.fH=b.getUniformLocation(c,"uColorB");d=a.c;a.fG=b.getUniformLocation(d,"uColorF");d=a.c;a.fz=b.getUniformLocation(d,"uContrast");}
function GT(){var a=this;Bc.call(a);a.fp=null;a.eh=null;a.eg=null;}
function K3(a){var b=new GT();Ia(b,a);return b;}
function Ia(a,b){var c;BX();BM(a,b,B(8),B(45),L1);c=a.c;a.fp=b.getUniformLocation(c,"uColor");c=a.c;a.eh=b.getUniformLocation(c,"uPoints1");c=a.c;a.eg=b.getUniformLocation(c,"uPoints2");}
function G8(){var a=this;Bc.call(a);a.eO=null;a.eS=null;a.eD=null;}
function K5(a){var b=new G8();Jt(b,a);return b;}
function Jt(a,b){var c;BX();BM(a,b,B(8),B(46),L1);c=a.c;a.eO=b.getUniformLocation(c,"uColor");c=a.c;a.eS=b.getUniformLocation(c,"uBaseline");c=a.c;a.eD=b.getUniformLocation(c,"uScaleHExp");}
var FB=E(0);
var HD=E(0);
function Gr(b,c,d){var e,f,g,h;e=d.T;f=d.R;g=d.S;h=d.I;b.uniform4f(c,e,f,g,h);}
function G6(b,c){var d,e;d=b.getError();if(d){b=E9();e=Y();V(K(e,c),d);BE(b,W(e));}}
function DV(){var a=this;C.call(a);a.fr=null;a.ft=null;a.fs=null;}
function B8(){var a=this;C.call(a);a.w=null;a.P=null;a.cN=null;a.dP=null;a.db=null;a.c2=0;a.dp=0;}
function L7(a,b,c,d){var e=new B8();Fm(e,a,b,c,d);return e;}
function Fm(a,b,c,d,e){var f,g;f=d.data;a.w=b;a.P=c;a.c2=f.length/c.bV|0;a.dp=e===null?0:e.data.length;c=b.createBuffer();a.cN=c;b.bindBuffer(34962,c);c=d.data;b.bufferData(34962,c,35044);a.dP=null;g=e===null?null:b.createBuffer();a.db=g;if(g!==null){b.bindBuffer(34963,g);c=e.data;b.bufferData(34963,c,35044);}c=null;b.bindBuffer(34962,c);c=null;b.bindBuffer(34963,c);}
function DJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.P.dF;d=a.w;b=b^c;e=0;while(b){f=1<<e;if(b&f){if(!(c&f))d.disableVertexAttribArray(e);else d.enableVertexAttribArray(e);b=b^f;}e=e+1|0;}b=0;d=a.w;g=a.cN;d.bindBuffer(34962,g);h=a.P.ch.data;f=h.length;i=0;while(i<f){d=h[i];g=a.w;j=d.bg;k=d.C;l=a.P.bV*4|0;e=b*4|0;g.vertexAttribPointer(j,k,5126,!!0,l,e);b=b+d.C|0;i=i+1|0;}a:{d=a.dP;if(d!==null){b=0;a.w.bindBuffer(34962,d);h=a.P.cl.data;e=h.length;f=0;while(true){if(f>=e)break a;d=h[f];g=a.w;i=d.bg;j=d.C;m=d.cI;n=
a.P.c5;g.vertexAttribPointer(i,j,5121,!!m,n,b);b=b+d.C|0;f=f+1|0;}}}d=a.db;if(d===null){b=a.c2;if(b>0)a.w.drawArrays(4,0,b);}else{a.w.bindBuffer(34963,d);d=a.w;f=a.dp;d.drawElements(4,f,5123,0);}return c;}
function BG(){var a=this;C.call(a);a.e9=null;a.bF=0;}
function CR(a,b,c){a.e9=b;a.bF=c;}
function BZ(){var a=this;BG.call(a);a.dc=null;a.ch=null;a.cl=null;a.bV=0;a.c5=0;a.dF=0;}
var L1=null;var L8=null;function BX(){BX=Bd(BZ);Jz();}
function Jz(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new BZ;c=S(Bp,2);d=c.data;I4();d[0]=L9;d[1]=L$;BX();CR(b,B(47),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.bJ.bF){case 0:f=f+l.C|0;h=h+1|0;break a;case 1:e=e+l.C|0;g=g+1|0;break a;default:}}i=i|1<<l.bg;k=k+1|0;}b.dc=c;b.bV=e;b.c5=f;b.dF=i;c=S(Bp,g);m=c.data;b.ch=c;c=S(Bp,h);n=c.data;b.cl=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.bJ.bF){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}L1=b;c
=S(BZ,1);c.data[0]=b;L8=c;}
var Fs=E(0);
var D9=E(0);
var Ff=E(0);
var BV=E();
function CI(){BV.call(this);this.eb=null;}
function Gy(){var a=this;CI.call(a);a.fu=0;a.bZ=0;a.bu=null;a.ec=null;a.d6=null;}
function Iq(a,b){var c=new Gy();IM(c,a,b);return c;}
function IM(a,b,c){a.eb=b;a.bu=Y();a.ec=BA(32);a.fu=c;Io();a.d6=L_;}
function Eo(a,b,c,d){var e,$$je;e=a.eb;if(e===null)a.bZ=1;if(!(a.bZ?0:1))return;a:{try{e.ca(b,c,d);break a;}catch($$e){$$je=JU($$e);if($$je instanceof E4){}else{throw $$e;}}a.bZ=1;}}
function BE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;c=a.bu;Dj(c,c.h,b);BO(c,10);b=a.bu;d=b.h;e=a.ec;if(d>e.data.length)e=BA(d);f=0;g=0;if(f>d){b=new Bf;Ba(b,B(48));J(b);}while(f<d){h=e.data;i=g+1|0;j=b.l.data;k=f+1|0;h[g]=j[f];g=i;f=k;}h=e.data;f=d-0|0;l=new EV;d=h.length;f=0+f|0;DQ(l,d);l.m=0;l.z=f;l.cJ=0;l.fN=0;l.d9=e;e=Fx(BL(16,Bt(d,1024)));f=e.data.length;b=new EG;i=0+f|0;DQ(b,f);JF();b.f3=Ma;b.dB=0;b.dh=e;b.m=0;b.z=i;b.er=0;b.cL=0;c=a.d6;m=new FX;h=Fx(1);j=h.data;j[0]=63;Jd();n=Mb;m.b4=n;m.cb=n;g=j.length;if
(g&&g>=m.cj){m.eY=c;m.dd=h.d7();m.e5=2.0;m.cj=4.0;m.cH=BA(512);m.dt=Fx(512);c=Mc;if(c===null){c=new Bs;Ba(c,B(49));J(c);}m.b4=c;m.cb=c;a:while(true){if(m.bs==3){b=new CE;U(b);J(b);}m.bs=2;b:{while(true){try{c=GO(m,l,b);}catch($$e){$$je=JU($$e);if($$je instanceof P){b=$$je;break a;}else{throw $$e;}}if(c.ba?0:1){f=Bz(l);if(f<=0)break b;c=CT(f);}else if(CO(c))break;n=!EE(c)?m.b4:m.cb;c:{if(n!==Mc){if(n===Md)break c;else break b;}f=Bz(b);h=m.dd;k=h.data.length;if(f<k){c=Me;break b;}EH(b,h,0,k);}k=l.m;if(!Hn(c))
{b=new B$;U(b);J(b);}Dt(l,k+c.dy|0);}}f=CO(c);Eo(a,e,0,GK(b));ES(b);if(!f){while(true){f=m.bs;if(f!=2&&f!=4){b=new CE;U(b);J(b);}c=Mf;if(c===c)m.bs=3;g=CO(c);Eo(a,e,0,b.m);ES(b);if(!g)break;}Hr(a.bu,0);return;}}J(K6(b));}J(Ko(B(50)));}
function BN(){BV.call(this);this.eJ=null;}
function FU(a){a.eJ=Fx(1);}
var CY=E(BN);
var LU=null;function JO(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Hf(){var b;b=new CY;FU(b);LU=b;}
function Bp(){var a=this;BG.call(a);a.dj=null;a.bJ=null;a.C=0;a.cI=0;a.bg=0;}
var L9=null;var L$=null;var Mg=null;function I4(){I4=Bd(Bp);IT();}
function K4(a,b,c,d,e,f,g){var h=new Bp();DT(h,a,b,c,d,e,f,g);return h;}
function DT(a,b,c,d,e,f,g,h){I4();CR(a,b,c);a.dj=d;a.bJ=e;a.C=f;a.cI=g;a.bg=h;}
function IT(){var b;b=new Bp;Id();DT(b,B(51),0,B(52),Mh,2,0,0);L9=b;b=K4(B(53),1,B(54),Mh,2,0,1);L$=b;Mg=I2(Bp,[L9,b]);}
function CF(){var a=this;C.call(a);a.ep=null;a.eP=null;}
function Hx(b){var c,d;if(Fh(b))J(Gt(b));if(!Hz(BB(b,0)))J(Gt(b));c=1;while(c<Bh(b)){a:{d=BB(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(Hz(d))break a;else J(Gt(b));}}c=c+1|0;}}
function Hz(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Dh=E(CF);
var L_=null;function Io(){Io=Bd(Dh);H5();}
function H5(){var b,c,d,e,f;b=new Dh;Io();c=S(Bx,0);d=c.data;Hx(B(55));e=d.length;f=0;while(f<e){Hx(d[f]);f=f+1|0;}b.ep=B(55);b.eP=c.d7();L_=b;}
var Hk=E();
var B2=E(BG);
var Mi=null;var Mh=null;var Mj=null;function Id(){Id=Bd(B2);HJ();}
function HZ(a,b){var c=new B2();F8(c,a,b);return c;}
function F8(a,b,c){Id();CR(a,b,c);}
function HJ(){var b;Mi=HZ(B(56),0);b=HZ(B(57),1);Mh=b;Mj=I2(B2,[Mi,b]);}
var Dg=E(BN);
var LV=null;function Ii(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function HG(){var b;b=new Dg;FU(b);LV=b;}
var Bs=E(P);
function Ko(a){var b=new Bs();Kd(b,a);return b;}
function Kd(a,b){Ba(a,b);}
function HB(){Bs.call(this);this.e7=null;}
function Gt(a){var b=new HB();Ip(b,a);return b;}
function Ip(a,b){U(a);a.e7=b;}
var DC=E(BC);
var C3=E(Bf);
function CB(){C.call(this);this.fc=null;}
var DG=E(0);
function DS(){var a=this;C.call(a);a.dH=null;a.dG=0;}
function Kc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.dH;d=a.dG;b=b.data;Hp(b);e=DL(c.dT);if(e===null)e=DL(c.dU);if(e===null){f=c.dD.data;g=c.bL;c.bL=g+1|0;f[g]=d;}else{h=e.fI;i=e.es;f=e.fh;j=c.cX+1|0;c.cX=j;k=c.c8;e=EC(j);k.be=CW(k,k.be,e);e=Fp(k,e);Dz(e,h);Dz(e,h);k.bC=k.bC+1|0;e=c.bP[d];if(e===null){h=$rt_ustr(i);$rt_globals.console.error("sendToWorker after shutdown, method = "+h);}else{f=f.data;l=f.length;h=new $rt_globals.Array(l+2|0);k=j;0;h[0]=k;i=$rt_ustr(i);1;h[1]=i;d=2;m=new $rt_globals.Array();g=0;while
(g<l){i=f[g];if(i===null){j=d+1|0;i=null;d;h[d]=i;}else if(i instanceof Bx){j=d+1|0;i=J2(i);d;h[d]=i;}else if(CD(i,$rt_arraycls($rt_bytecls()))){j=d+1|0;i=i.data.buffer;d;h[d]=i;}else if(CD(i,$rt_arraycls($rt_charcls()))){j=d+1|0;i=i.data.buffer;d;h[d]=i;}else if(CD(i,$rt_arraycls($rt_intcls()))){j=d+1|0;i=i.data.buffer;d;h[d]=i;}else if(!CD(i,$rt_arraycls($rt_doublecls())))j=L2.iF(i,h,d);else{j=d+1|0;i=i.data.buffer;d;h[d]=i;}i=h[d];if(i instanceof $rt_globals.ArrayBuffer?1:0)m.push(i);g=g+1|0;d=j;}e.postMessage(h,
m);}}c=c.dC;if(!Hp(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new Bs;U(b);J(b);}if(b.length<1){b=new Bs;U(b);J(b);}e=EC(b[0]);e=GH(c.c_,e);d=1;j=b.length;f=S(C,j-d|0);n=f.data;g=0;while(d<j){l=g+1|0;o=d+1|0;h=b[d];if(h===null)n[g]=null;else if(typeof h==='string'?1:0)n[g]=Hh(Gs(h));else if(!(h instanceof $rt_globals.ArrayBuffer?1:0))o=L2.ge(h,b,o,f,g);else n[g]=KE(Gs(h));g=l;d=o;}if(g!=n.length)f=E1(f,g);e.o(f);}}
var Df=E(0);
function Fq(){C.call(this);this.dV=null;}
function Jh(a,b){a.dV.setPointerCapture(b.pointerId);}
function Fr(){C.call(this);this.cT=null;}
function H8(a,b){a.cT.releasePointerCapture(b.pointerId);}
var Ey=E(0);
var Fn=E(0);
function B5(){var a=this;C.call(a);a.fa=0;a.fO=0;a.fM=0;}
var L0=0;function Fa(){var a=this;B5.call(a);a.f1=null;a.fe=null;}
function Ji(){return {alpha:false};}
function BQ(){var a=this;C.call(a);a.dr=0;a.m=0;a.z=0;a.bq=0;}
function DQ(a,b){a.bq=(-1);a.dr=b;a.z=b;}
function GK(a){return a.m;}
function Bz(a){return a.z-a.m|0;}
function BJ(a){return a.m>=a.z?0:1;}
var FV=E(0);
var CC=E(BQ);
function Dt(a,b){var c,d,e;if(b>=0&&b<=a.z){a.m=b;if(b<a.bq)a.bq=0;return a;}c=new Bs;d=a.z;e=Y();BO(V(K(V(K(e,B(58)),b),B(59)),d),93);Ba(c,W(e));J(c);}
var G1=E();
function IQ(b){return Math.log(b);}
function Do(b,c){return H4(b,c);}
function H4(b,c){return Math.pow(b,c);}
function Bt(b,c){if(b<c)c=b;return c;}
function BL(b,c){if(b>c)c=b;return c;}
function J_(b,c){return Math.min(b,c);}
function Gq(b,c){return J_(b,c);}
function Jo(b,c){return Math.max(b,c);}
function G_(b,c){return Jo(b,c);}
function IP(b){return Math.abs(b);}
function JT(b){return Math.sign(b);}
function Db(){var a=this;BQ.call(a);a.dB=0;a.dh=null;a.f3=null;}
function EH(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.cL){e=new FA;U(e);J(e);}if(Bz(a)<d){e=new EF;U(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bf;j=Y();V(K(V(K(j,B(60)),h),B(61)),g);Ba(i,W(j));J(i);}if(d<0){e=new Bf;i=Y();K(V(K(i,B(62)),d),B(63));Ba(e,W(i));J(e);}h=a.m;k=h+a.dB|0;l=0;while(l<d){b=a.dh.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.m=h+d|0;return a;}}b=b.data;e=new Bf;d=b.length;i=Y();BO(V(K(V(K(i,B(64)),c),B(59)),d),41);Ba(e,W(i));J(e);}
function ES(a){a.m=0;a.z=a.dr;a.bq=(-1);return a;}
function B4(){C.call(this);this.eN=null;}
var Md=null;var Mc=null;var Mb=null;function Jd(){Jd=Bd(B4);H0();}
function GY(a){var b=new B4();Hs(b,a);return b;}
function Hs(a,b){Jd();a.eN=b;}
function H0(){Md=GY(B(65));Mc=GY(B(66));Mb=GY(B(67));}
function BT(){var a=this;C.call(a);a.ee=0;a.fS=0;a.fw=0;a.eo=0;}
function Mk(a,b,c,d){var e=new BT();E5(e,a,b,c,d);return e;}
function E5(a,b,c,d,e){a.ee=d;a.fS=b;a.fw=c;a.eo=e;}
function Dr(){var a=this;BT.call(a);a.r=null;a.et=null;}
var Hi=E();
var Cr=E(CC);
function EV(){var a=this;Cr.call(a);a.fN=0;a.cJ=0;a.d9=null;}
function Ck(){var a=this;C.call(a);a.eY=null;a.dd=null;a.e5=0.0;a.cj=0.0;a.b4=null;a.cb=null;a.bs=0;}
function Cy(){var a=this;C.call(a);a.ba=0;a.dy=0;}
var Mf=null;var Me=null;function G4(a,b){var c=new Cy();Hw(c,a,b);return c;}
function Hw(a,b,c){a.ba=b;a.dy=c;}
function CO(a){return a.ba!=1?0:1;}
function Hn(a){var b;b=a.ba!=2?0:1;return !b&&!EE(a)?0:1;}
function EE(a){return a.ba!=3?0:1;}
function CT(b){return G4(2,b);}
function F$(){Mf=G4(0,0);Me=G4(1,0);}
function Ft(){var a=this;BT.call(a);a.fv=null;a.cs=0;a.L=0;a.cS=0;a.c$=0;}
var F_=E();
function F1(b,c,d){return 0.5+b*c/d|0;}
function Cj(b){return b+0.5|0;}
var E0=E(0);
function Ep(){var a=this;C.call(a);a.d0=null;a.dZ=null;}
function IN(a,b){var c,d;c=a.d0;d=a.dZ;$rt_globals.console.info("paste plain string ",b);c.o(Hh(b));Bg(d);}
var Bq=E(0);
function FC(){C.call(this);this.fP=null;}
function EG(){var a=this;Db.call(a);a.er=0;a.cL=0;}
function CU(){C.call(this);this.fb=null;}
var Ma=null;var Ml=null;function JF(){JF=Bd(CU);J5();}
function HS(a){var b=new CU();F6(b,a);return b;}
function F6(a,b){JF();a.fb=b;}
function J5(){Ma=HS(B(68));Ml=HS(B(69));}
function Dy(){var a=this;C.call(a);a.ct=null;a.X=null;a.br=null;}
var HF=E();
function Dn(){var a=this;Ck.call(a);a.cH=null;a.dt=null;}
function GO(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.cH;e=0;f=0;g=a.dt;a:{b:{while(true){if((e+32|0)>f&&BJ(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=Bz(b)+j|0;h=i.length;f=Bt(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new Bf;b=Y();V(K(V(K(b,B(70)),k),B(61)),h);Ba(l,W(b));J(l);}if(Bz(b)<e)break;if(e<0){b=new Bf;c=Y();K(V(K(c,B(62)),e),B(63));Ba(b,W(c));J(b);}h=b.m;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.d9.data[n+b.cJ|0];m=m+1|0;j=o;n=k;}b.m=h+e|0;e=0;}if(!BJ(c))
{l=!BJ(b)&&e>=f?Mf:Me;break a;}i=g.data;k=Bt(Bz(c),i.length);p=new EA;p.cx=b;p.dq=c;l=Hq(a,d,e,f,g,0,k,p);e=p.cu;j=p.dx;if(l===null){if(!BJ(b)&&e>=f)l=Mf;else if(!BJ(c)&&e>=f)l=Me;}EH(c,g,0,j);if(l!==null)break a;}b=new D6;U(b);J(b);}p=new Bf;l=Y();BO(V(K(V(K(l,B(64)),j),B(59)),h),41);Ba(p,W(l));J(p);}Dt(b,b.m-(f-e|0)|0);return l;}
var FX=E(Dn);
function Hq(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Cu(h,2))break a;i=Me;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!(!Ex(l)&&!Eb(l)?0:1)){if((f+3|0)>g){j=j+(-1)|0;if(Cu(h,3))break a;i=Me;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Ex(l))
{i=CT(1);break a;}if(j>=d){if(BJ(h.cx))break a;i=Mf;break a;}c=j+1|0;n=k[j];if(!Eb(n)){j=c+(-2)|0;i=CT(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Cu(h,4))break a;i=Me;break a;}k=e.data;o=((l&1023)<<10|n&1023)+65536|0;n=f+1|0;k[f]=(240|o>>18)<<24>>24;f=n+1|0;k[n]=(128|o>>12&63)<<24>>24;n=f+1|0;k[f]=(128|o>>6&63)<<24>>24;m=n+1|0;k[n]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.cu=j;h.dx=f;return i;}
var E4=E(BC);
function Cn(){var a=this;CB.call(a);a.b8=null;a.k=null;a.eL=0.0;}
function F9(){var a=this;Cn.call(a);a.j=null;a.eM=null;a.bB=null;a.bn=null;a.bo=null;a.cd=null;a.bN=0;a.cy=0;a.dW=0;a.fW=0;a.e1=0;a.e8=0.5;a.e$=500.0;a.fK=(-1.0);a.eI=1.0;a.bz=0.0;a.cU=0.0;a.bp=0.0;a.dS=0.0;a.t=0.0;a.y=0.0;a.cg=0;a.bD=0;a.bi=0;a.b$=0;a.bw=0;a.bS=0;a.fL=10000;a.e0=20000;a.G=null;a.D=null;a.bA=0;a.bl=0;a.eA=0;}
function KF(a){var b=new F9();Jf(b,a);return b;}
function Jf(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;a.fc=b;a.b8=HA(0,0,64,255,new Bu);a.k=new Bi;c=b.br;d=Ce(a);if(d.bH===null)d.bH=$rt_str(d.Q.$meta.name);Et(c,d.bH);a.fW=0;a.e1=5000;a.e8=0.5;a.e$=500.0;a.fK=(-1.0);a.eI=1.0;a.t=25.0;a.y=0.0;a.bD=0;a.bi=0;a.b$=0;a.bw=0;a.bS=0;a.fL=10000;a.e0=20000;a.bA=0;a.bl=0;a.eA=0;GL(0.6666666666666666,1.0,0.0625,a.b8);Ci(b.X.U,a);c=b.X.bT;d=new Fz;d.fU=a;Ci(c,d);Ci(b.X.b_,a);Ci(b.X.cf,a);c=b.ct;a.j=c;d=b.br;e=new Dp;e.en=d;a.eM=e;d=new DA;c=c.i;BX();BM(d,c,B(71),
B(72),L1);e=d.c;d.c7=c.getUniformLocation(e,"uColor");a.bB=d;f=S($rt_arraycls($rt_floatcls()),20);g=f.data;c=Im();h=0;while(h<20){i=10000+(5.960464477539063E-8*(C$(c)&16777215)*5001.0|0)|0;j=i*2|0;k=HY(j);l=k.data;g[h]=k;m=0.0;n=0;while(n<i){o=FQ(c,5.0);p=FQ(c,2.0);q=n*2|0;l[q]=m;l[q+1|0]=m+o;m=m+o+p;n=n+1|0;}r=100.0/m;q=0;while(q<j){l[q]=l[q]*r;q=q+1|0;}h=h+1|0;}a.bn=f;a.cd=S(Bu,g.length);c=Im();q=0;while(true){l=a.cd.data;if(q>=l.length)break;l[q]=new Bu;d=l[q];(GL(B9(c),0.5+B9(c)*0.25,0.66+B9(c)*0.33/2.0,
d)).I=1.0;q=q+1|0;}l=a.bn.data;s=0;t=l.length;u=0;while(u<t){s=s+(l[u].data.length/2|0)|0;u=u+1|0;}a.G=Kk();a.D=Kk();Fe(a,a.G);Fe(a,a.D);CN(a);Dl(a);b=b.br;c=Y();K(V(K(c,B(73)),s),B(74));Et(b,W(c));}
function Fe(a,b){var c,d;c=HT(80,80,80,200);d=HT(43,43,43,228);Fo(b.bG,d);Fo(b.b2,c);}
function EW(a,b,c){var d,e,f;EM(a.k,b);a.eL=c;d=b.a;e=d/30|0;a.bN=e;f=(d-(e*20|0)|0)/20|0;a.cy=f;a.dW=f/2|0;}
function CN(a){a.bA=(a.t-0.5)/499.5*(10000-a.k.a|0)|0;}
function Dl(a){a.bl=(a.y+1.0)/2.0*(20000-a.k.b|0)|0;}
var G5=E(0);
function HA(b,c,d,e,f){F7(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function GL(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-IP(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.T=g+i;e.R=h+i;e.S=j+i;return e;}
function Fz(){C.call(this);this.fU=null;}
function Dp(){C.call(this);this.en=null;}
function DA(){Bc.call(this);this.c7=null;}
function J1(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=c.data;d=Bt(c.length/2|0,16384);e=HY((d*4|0)*4|0);f=e.data;g=BA(d*6|0);h=g.data;i=0;while(i<d){j=i*16|0;k=i*6|0;l=i*2|0;m=c[l];n=c[l+1|0];f[j]=n;f[j+1|0]=(-1.0);f[j+2|0]=m;f[j+3|0]=1.0;f[j+4|0]=n;f[j+5|0]=1.0;f[j+6|0]=m;f[j+7|0]=1.0;f[j+8|0]=m;f[j+9|0]=(-1.0);f[j+10|0]=n;f[j+11|0]=0.0;f[j+12|0]=m;f[j+13|0]=1.0;f[j+14|0]=n;f[j+15|0]=0.0;o=i*4|0;h[k]=o&65535;j=k+1|0;l=(o+1|0)&65535;h[j]=l;j=k+2|0;p=(o+2|0)&65535;h[j]=p;h[k+3|0]=l;h[k+4|0]=p;h[k+5|0]=(o+3|0)&65535;i
=i+1|0;}q=new B8;BX();Fm(q,b,L1,e,g);return q;}
var GU=E();
function Bu(){var a=this;C.call(a);a.T=0.0;a.R=0.0;a.S=0.0;a.I=0.0;}
function F7(a,b,c,d,e){a.T=b;a.R=c;a.S=d;a.I=e;}
function Iy(a,b){a.I=b;return a;}
function Fo(a,b){a.T=b.T;a.R=b.R;a.S=b.S;a.I=b.I;return a;}
function GP(){var a=this;C.call(a);a.b7=0;a.b9=0;}
function Im(){var a=new GP();I3(a);return a;}
function I3(a){var b,c;b=HR((Hg()));b=b^b<<7;b=b^(b>>>1|0);c=b^b<<9;b=HR((Hg()))^(-559038737);a.b7=c;a.b9=b;b=0;while(b<19){C$(a);b=b+1|0;}}
function C$(a){var b,c;b=a.b7;c=a.b9;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.b7=c;a.b9=b;return b;}
function B9(a){var b;b=2.3283064365386963E-10*C$(a);if(b<0.0)b=b+1.0;return b;}
function FQ(a,b){return  -IQ(1.0-B9(a))/b;}
function G9(){var a=this;C.call(a);a.N=null;a.s=null;a.x=null;a.A=null;a.bG=null;a.b2=null;}
function Kk(){var a=new G9();JD(a);return a;}
function JD(a){a.N=new Bi;a.s=new Bi;a.x=new Bi;a.A=new Bi;a.bG=new Bu;a.b2=new Bu;}
function C6(a,b){return G2(b,a.N,a.s);}
function DR(a,b,c,d){var e,f,g,h,i;e=G2(b,a.x,a.A);f=C6(a,b);if(!e&&!f)return null;if(!f){if(!d)c.o(Ec(a,b.b-a.x.b|0));else c.o(F3(a,b.a-a.x.a|0));}g=!d?a.N.b+(a.s.b/2|0)|0:a.N.a+(a.s.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new Eu;b.dI=a;b.dK=c;b.dJ=i;}else{b=new Ev;b.cC=a;b.cB=c;b.cD=i;}return b;}
function Gk(b,c){var d;d=new E$;d.ci=b;d.d_=c;return d;}
function F3(a,b){var c,d,e;c=a.A.a;d=a.s.a;e=c-d|0;return Gk(Bt(BL(0,b-(d/2|0)|0),e),e);}
function Ec(a,b){var c,d,e;c=a.A.b;d=a.s.b;e=c-d|0;return Gk(Bt(BL(0,b-(d/2|0)|0),e),e);}
function Ez(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Bt(i,d);j=BL(F1(d,d,e),i);e=e-d|0;i=d-j|0;i=i?F1(b,i,e):0;if(!h){k=a.N;k.b=i+c|0;k.a=f-g|0;l=a.s;l.b=j;l.a=g;l=a.x;l.b=c;l.a=k.a;k=a.A;k.b=d;k.a=g;break a;}k=a.N;k.b=f-g|0;k.a=i+c|0;l=a.s;l.b=g;l.a=j;l=a.x;l.b=k.b;l.a=c;k=a.A;k.b=g;k.a=d;break a;}}B7(a.A,0,0);B7(a.s,0,0);}}
function E6(a,b){var c;c=a.x;E7(b,c.b,c.a,a.A,a.bG);}
function FT(a,b){var c,d;c=a.s;c.b=c.b-2|0;c.a=c.a-2|0;d=a.N;E7(b,d.b+1|0,d.a+1|0,c,a.b2);b=a.s;b.b=b.b+2|0;b.a=b.a+2|0;}
function G3(){var a=this;Bu.call(a);a.fk=0;a.fo=0;a.fm=0;a.fn=0;}
function HT(a,b,c,d){var e=new G3();IU(e,a,b,c,d);return e;}
function IU(a,b,c,d,e){a.fk=b;a.fo=c;a.fm=d;a.fn=e;HA(b,c,d,e,a);}
var GA=E();
var GN=E();
function E1(b,c){var d,e,f;d=Ct(Ce(b));if(d===null){d=new Cv;U(d);J(d);}if(d===O($rt_voidcls())){d=new Bs;U(d);J(d);}if(c<0){d=new F2;U(d);J(d);}b=b.data;d=Jj(d.Q,c);e=Bt(c,b.length);f=0;while(f<e){d.data[f]=b[f];f=f+1|0;}return d;}
var Gn=E();
function GJ(){var a=this;C.call(a);a.fI=null;a.es=null;a.fh=null;}
var F2=E(P);
var GF=E();
var DU=E(0);
function Gf(){C.call(this);this.e3=null;}
function KE(a){var b=new Gf();IF(b,a);return b;}
function IF(a,b){a.e3=b;}
var GZ=E();
var Fu=E(0);
var LZ=null;function K7(){K7=Bd(Fu);JL();}
function JL(){LZ=new $rt_globals.TextDecoder("utf-16");}
var Du=E(0);
var L3=null;function G0(){L3=new En;}
function DN(){C.call(this);this.d4=null;}
function HK(a,b){var c,d;c=a.d4;d=FE(b,10000-c.k.a|0);c.bA=d;c.t=d/(10000-c.k.a|0)*499.5+0.5;}
function E2(){var a=this;C.call(a);a.b6=0;a.b5=0;a.e_=null;a.bv=null;}
function Ju(a,b){var c,d,e;c=b.r.a-a.b5|0;d=a.bv;d.t=d.t*Do(2.0,2.0*c/d.k.a);b=b.r;c=b.b;e=c-a.b6|0;d=a.bv;d.y=d.y+2.0*e/d.k.b/d.t;a.b6=c;a.b5=b.a;CN(d);Dl(a.bv);}
function DO(){C.call(this);this.cV=null;}
function Jw(a,b){var c,d;c=a.cV;d=FE(b,20000-c.k.b|0);c.bl=d;c.y=d/(20000-c.k.b|0)*2.0+(-1.0);}
var Dx=E(0);
function Dk(){var a=this;C.call(a);a.bk=null;a.bm=null;}
function Dz(a,b){var c;c=a.bm;a.bm=b;return c;}
function CL(){var a=this;Dk.call(a);a.d=null;a.f=null;a.E=0;a.M=0;}
function C1(a){var b;b=Co(a);if(b==2){if(Co(a.f)<0)a.f=D3(a.f);return Fi(a);}if(b!=(-2))return a;if(Co(a.d)>0)a.d=Fi(a.d);return D3(a);}
function Co(a){var b,c;b=a.f;c=b===null?0:b.E;b=a.d;return c-(b===null?0:b.E)|0;}
function D3(a){var b;b=a.d;a.d=b.f;b.f=a;Br(a);Br(b);return b;}
function Fi(a){var b;b=a.f;a.f=b.d;b.d=a;Br(a);Br(b);return b;}
function Br(a){var b,c,d;b=a.f;c=b===null?0:b.E;b=a.d;d=b===null?0:b.E;a.E=BL(c,d)+1|0;a.M=1;b=a.d;if(b!==null)a.M=1+b.M|0;b=a.f;if(b!==null)a.M=a.M+b.M|0;}
var En=E();
function IG(a,b){}
var CE=E(P);
var GS=E(BY);
function K6(a){var b=new GS();If(b,a);return b;}
function If(a,b){a.bX=1;a.ce=1;a.dX=b;}
function G7(){var a=this;C.call(a);a.fD=null;a.fq=null;a.fZ=null;}
var Gl=E();
function G2(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function Eu(){var a=this;C.call(a);a.dI=null;a.dK=null;a.dJ=0;}
function IY(a,b){var c,d,e;c=a.dI;d=a.dK;e=a.dJ;d.o(Ec(c,(b.r.b+e|0)-c.x.b|0));}
function Ev(){var a=this;C.call(a);a.cC=null;a.cB=null;a.cD=0;}
function H_(a,b){var c,d,e;c=a.cC;d=a.cB;e=a.cD;d.o(F3(c,(b.r.a+e|0)-c.x.a|0));}
function E$(){var a=this;C.call(a);a.ci=0;a.d_=0;}
function FE(a,b){var c;c=a.d_;if(c<=0)return 0;return F1(a.ci,b,c);}
var B$=E(P);
function EA(){var a=this;C.call(a);a.cx=null;a.dq=null;a.cu=0;a.dx=0;}
function Cu(a,b){return Bz(a.dq)<b?0:1;}
var FA=E(B$);
var EF=E(P);
var D6=E(P);
$rt_packages([-1,"org",0,"sudu",1,"experiments",2,"swimlane"]);
$rt_metadata([C,0,0,[],0,3,0,0,0,GX,0,C,[],0,3,0,0,0,D0,0,C,[],3,3,0,0,0,DD,0,C,[],3,3,0,0,0,D_,0,C,[D0,DD],0,3,0,0,0,Ho,0,C,[],4,0,0,0,0,Ha,0,C,[],4,3,0,0,0,B1,0,C,[],0,3,0,0,0,BC,0,B1,[],0,3,0,0,0,P,0,BC,[],0,3,0,0,0,Hc,0,P,[],0,3,0,0,0,By,0,C,[],3,3,0,0,0,Bv,0,C,[],3,3,0,0,0,Cg,0,C,[],3,3,0,0,0,Bx,0,C,[By,Bv,Cg],0,3,0,Hy,0,BY,0,B1,[],0,3,0,0,0,B3,0,BY,[],0,3,0,0,0,GV,0,B3,[],0,3,0,0,0,Dc,0,C,[By],1,3,0,0,0,B6,0,Dc,[Bv],0,3,0,0,0,CK,0,C,[By,Cg],0,0,0,0,0,CS,0,C,[],3,3,0,0,0,Gc,0,CK,[CS],0,3,0,0,0,BP,0,B3,
[],0,3,0,0,0,GM,0,BP,[],0,3,0,0,0,GC,0,BP,[],0,3,0,0,0,R,0,C,[],3,3,0,0,0,DI,0,C,[R],3,3,0,0,0,He,0,C,[DI],1,3,0,0,["h2",Lk(IV),"hg",Lj(HW)],CZ,0,C,[],4,3,0,0,0,HC,0,C,[],4,3,0,0,0,Fc,0,C,[],3,3,0,0,0,DK,0,C,[Fc],0,3,0,0,0,C5,0,C,[],3,3,0,0,0,FW,0,C,[C5],0,3,0,0,0,BS,0,C,[],3,3,0,0,0,FY,0,C,[BS],0,3,0,0,0,C2,0,C,[],3,3,0,0,0,DP,0,C,[C2],0,3,0,0,0,Bf,0,P,[],0,3,0,0,0,Gu,0,C,[],4,3,0,0,0,Cv,0,P,[],0,3,0,0,0,Cb,0,P,[],0,3,0,0,0,Ch,0,C,[Bv],0,3,0,0,0,Gi,0,C,[R],1,3,0,0,0,Er,0,C,[],3,3,0,0,0,Cl,0,C,[Er],1,3,0,0,
0,FS,0,Cl,[],0,3,0,0,0,EX,0,C,[R],3,3,0,0,0,FG,0,C,[EX],0,3,0,0,["gO",Lk(Ir)]]);
$rt_metadata([FH,0,C,[BS],0,3,0,0,0,T,0,C,[R],3,3,0,0,0,FD,0,C,[T],0,3,0,0,["e",Lk(Jm)],DX,0,C,[R],3,3,0,0,0,FF,0,C,[DX],0,3,0,0,["iq",Ll(Ke)],Gx,0,C,[R],1,3,0,0,0,Gg,0,C,[],0,3,0,0,0,CJ,0,C,[],1,3,0,0,0,Cm,0,CJ,[],0,3,0,0,0,HE,0,C,[],0,3,0,0,0,Bo,0,C,[R],3,3,0,0,0,FR,0,C,[Bo],3,3,0,0,0,E3,0,C,[Bo],3,3,0,0,0,EU,0,C,[Bo],3,3,0,0,0,Eq,0,C,[Bo],3,3,0,0,0,EY,0,C,[Bo],3,3,0,0,0,Fj,0,C,[Bo,FR,E3,EU,Eq,EY],3,3,0,0,0,Hl,0,C,[R,Fj],1,3,0,0,["fB",Ll(I$),"fi",Ll(JZ),"f4",Lm(Jc),"eT",Lk(Jg),"fg",Lm(HO)],D1,0,C,[],3,3,0,
0,0,Cd,0,C,[D1],3,3,0,0,0,Cp,0,C,[Cd],1,3,0,0,0,De,0,C,[Cd],3,3,0,0,0,DM,0,C,[De],3,3,0,0,0,CX,0,Cp,[DM],1,3,0,0,0,CP,0,CX,[],1,3,0,0,0,DE,0,C,[Cd],3,3,0,0,0,Fl,0,C,[DE,De],3,3,0,0,0,C7,0,CP,[Fl],0,3,0,0,0,Cz,0,C,[],3,3,0,0,0,C8,0,C,[Cz],1,3,0,0,0,Di,0,C,[],3,3,0,0,0,Fg,0,C,[Cz],3,3,0,0,0,DZ,0,C,[Fg],3,3,0,0,0,Fw,0,C8,[Di,By,DZ],0,3,0,0,0,Go,0,C,[],4,3,0,0,0,Ds,0,C,[C5],0,3,0,0,0,Dq,0,C,[],0,3,0,0,0,Fy,0,C,[R],3,3,0,0,0,Hv,0,C,[R,Fy,Bo],1,3,0,0,["fB",Ll(I9),"fi",Ll(In),"f4",Lm(Kg),"eT",Lk(Jy),"fg",Lm(IX)],D$,
0,C,[T],0,0,0,0,["e",Lk(IW)],Ea,0,C,[T],0,0,0,0,["e",Lk(HP)],DF,0,C,[],0,3,0,0,0,BI,0,C,[],3,3,0,0,0,Ed,0,C,[T],0,3,0,0,["e",Lk(Jl)],Ee,0,C,[T],0,3,0,0,["e",Lk(Jx)],Ef,0,C,[T],0,3,0,0,["e",Lk(Ig)],Eg,0,C,[T],0,3,0,0,["e",Lk(HN)],Eh,0,C,[T],0,3,0,0,["e",Lk(H9)],Ei,0,C,[T],0,3,0,0,["e",Lk(JX)],Ej,0,C,[T],0,3,0,0,["e",Lk(Jb)]]);
$rt_metadata([Ek,0,C,[T],0,3,0,0,["e",Lk(J4)],El,0,C,[T],0,3,0,0,["e",Lk(Is)],Em,0,C,[T],0,3,0,0,["e",Lk(H2)],FL,0,C,[T],0,3,0,0,["e",Lk(JN)],FM,0,C,[T],0,3,0,0,["e",Lk(HU)],FN,0,C,[T],0,3,0,0,["e",Lk(Il)],FO,0,C,[T],0,3,0,0,["e",Lk(JM)],FI,0,C,[T],0,3,0,0,["e",Lk(Jv)],FJ,0,C,[T],0,3,0,0,["e",Lk(Jk)],Dv,0,C,[R],3,3,0,0,0,DB,0,C,[Dv],3,3,0,0,0,GD,0,C,[R,DB,Bo],1,3,0,0,["i6",Lj(IB),"gP",Lk(Ih),"iK",Lk(H1),"gx",Lk(J7),"iU",Lk(H3),"hl",Lj(Kj),"hc",Ll(Ic),"hh",Lm(JP),"h$",Lj(I8),"iQ",Lj(Jr),"hI",Lk(II),"h1",Lj(Ij),
"jj",Lk(Js),"gI",Lj(ID),"i7",Lj(J8),"i3",Lj(HH),"g8",Lk(IS),"ho",Lj(JQ),"h_",Ll(Jp),"hH",Ll(Ib),"gR",Ll(Jn),"jk",Lj(H$),"hX",Lj(Ja),"is",Lk(HM),"he",Lk(Iv),"gn",Ll(JG),"f$",Lj(HL),"h0",Lk(I_),"hB",Lj(Iu),"i8",Lj(JS),"jp",Lk(HQ),"gG",Lk(IC),"iV",Lk(Jq),"iB",Lj(IE),"hj",Ll(JC),"gA",Lk(JJ),"jd",Lj(Ka),"h4",Ll(I5),"h5",Ll(IK),"it",Lj(Iz),"iu",Lk(JV),"hw",Lm(IO),"jc",Lj(HI),"hK",Ll(JR),"hU",Lj(IA),"gg",Lj(JK),"hF",Lj(I0),"f9",Lj(Iw),"iT",Ll(I6),"hD",Lk(Kb),"hb",Lk(IL),"iX",Lj(Kh)],EZ,0,C,[],3,3,0,0,0,D8,0,C,[EZ],
0,3,0,0,0,Gv,0,C,[T],0,3,0,0,["e",Lk(J9)],GQ,0,C,[],0,3,0,0,0,Cc,0,C,[],3,3,0,0,0,CV,0,C,[],3,3,0,0,0,Cq,0,C,[],3,3,0,0,0,EB,0,C,[],3,3,0,0,0,F0,0,C,[EB],3,3,0,0,0,Fd,0,C,[],3,3,0,0,0,Dw,0,C,[],3,3,0,0,0,E_,0,C,[Dw],3,3,0,0,0,D7,0,C,[BI],0,3,0,0,0,Cx,0,C,[C2],0,3,0,0,0,Bi,0,C,[],0,3,0,0,0,Es,0,C,[],0,3,0,0,0,F5,0,C,[],0,3,0,0,0,G$,0,C,[],3,3,0,0,0,DW,0,C,[],0,3,0,0,0,Dm,0,C,[],0,3,0,0,0,Bc,0,Dm,[],0,3,0,0,0,D2,0,Bc,[],0,3,0,0,0,BD,0,Bc,[],0,3,0,0,0,EJ,0,Bc,[],0,3,0,0,0,E8,0,BD,[],0,3,0,0,0,BR,0,BD,[],0,3,0,
0,0,EO,0,BR,[],0,3,0,0,0,Fb,0,BR,[],0,3,0,0,0,Hm,0,BD,[],0,3,0,0,0,GT,0,Bc,[],0,3,0,0,0,G8,0,Bc,[],0,3,0,0,0,FB,0,C,[R],3,3,0,0,0,HD,0,C,[FB],3,3,0,0,0,DV,0,C,[BI],0,3,0,0,0,B8,0,C,[],0,3,0,0,0,BG,0,C,[Bv,By],1,3,0,0,0,BZ,0,BG,[],12,3,0,BX,0,Fs,0,C,[],3,3,0,0,0]);
$rt_metadata([D9,0,C,[Fs],3,3,0,0,0,Ff,0,C,[],3,3,0,0,0,BV,0,C,[D9,Ff],1,3,0,0,0,CI,0,BV,[],0,3,0,0,0,Gy,0,CI,[],0,3,0,0,0,BN,0,BV,[],1,3,0,0,0,CY,0,BN,[],0,3,0,0,["ca",Lm(JO)],Bp,0,BG,[],12,3,0,I4,0,CF,0,C,[Bv],1,3,0,0,0,Dh,0,CF,[],0,3,0,Io,0,Hk,0,C,[],0,3,0,0,0,B2,0,BG,[],12,0,0,Id,0,Dg,0,BN,[],0,3,0,0,["ca",Lm(Ii)],Bs,0,P,[],0,3,0,0,0,HB,0,Bs,[],0,3,0,0,0,DC,0,BC,[],0,3,0,0,0,C3,0,Bf,[],0,3,0,0,0,CB,0,C,[BI],1,3,0,0,0,DG,0,C,[R],3,3,0,0,0,DS,0,C,[DG],0,3,0,0,["dk",Lk(Kc)],Df,0,C,[R],3,3,0,0,0,Fq,0,C,[Df],
0,3,0,0,["dk",Lk(Jh)],Fr,0,C,[Df],0,3,0,0,["dk",Lk(H8)],Ey,0,C,[],3,3,0,0,0,Fn,0,C,[],3,0,0,0,0,B5,0,C,[Ey,BI,Fn],1,3,0,0,0,Fa,0,B5,[],0,3,0,0,0,BQ,0,C,[],1,3,0,0,0,FV,0,C,[],3,3,0,0,0,CC,0,BQ,[Bv,CS,Cg,FV],1,3,0,0,0,G1,0,C,[],4,3,0,0,0,Db,0,BQ,[Bv],1,3,0,0,0,B4,0,C,[],0,3,0,Jd,0,BT,0,C,[],0,3,0,0,0,Dr,0,BT,[],0,3,0,0,0,Hi,0,C,[R],1,3,0,0,0,Cr,0,CC,[],1,0,0,0,0,EV,0,Cr,[],0,0,0,0,0,Ck,0,C,[],1,3,0,0,0,Cy,0,C,[],0,3,0,0,0,Ft,0,BT,[],0,3,0,0,0,F_,0,C,[],0,3,0,0,0,E0,0,C,[R],3,3,0,0,0,Ep,0,C,[E0],0,3,0,0,["iL",
Lk(IN)],Bq,0,C,[],3,3,0,0,0,FC,0,C,[Bq],0,3,0,0,0,EG,0,Db,[],0,0,0,0,0,CU,0,C,[],4,3,0,JF,0,Dy,0,C,[],0,3,0,0,0,HF,0,C,[],4,3,0,0,0]);
$rt_metadata([Dn,0,Ck,[],1,3,0,0,0,FX,0,Dn,[],0,3,0,0,0,E4,0,BC,[],0,3,0,0,0,Cn,0,CB,[],0,3,0,0,0,F9,"SwimlaneTest",3,Cn,[CV,Cc],0,3,0,0,0,G5,0,C,[],3,3,0,0,0,Fz,0,C,[Cq],0,3,0,0,0,Dp,0,C,[],0,3,0,0,0,DA,0,Bc,[],0,0,0,0,0,GU,0,C,[],0,3,0,0,0,Bu,0,C,[],0,3,0,0,0,GP,0,C,[],0,3,0,0,0,G9,0,C,[],0,3,0,0,0,G3,0,Bu,[],0,3,0,0,0,GA,0,C,[R],4,3,0,0,0,GN,0,C,[],0,3,0,0,0,Gn,0,C,[],4,3,0,0,0,GJ,0,C,[],0,0,0,0,0,F2,0,P,[],0,3,0,0,0,GF,0,C,[R],1,3,0,0,0,DU,0,C,[],3,3,0,0,0,Gf,0,C,[DU],0,3,0,0,0,GZ,0,C,[R],1,3,0,0,0,Fu,0,
C,[],3,3,0,K7,0,Du,0,C,[],3,3,0,0,0,DN,0,C,[Bq],0,3,0,0,["o",Lk(HK)],E2,0,C,[Bq],0,0,0,0,["o",Lk(Ju)],DO,0,C,[Bq],0,3,0,0,["o",Lk(Jw)],Dx,0,C,[],3,3,0,0,0,Dk,0,C,[Dx,By],0,3,0,0,0,CL,0,Dk,[],0,0,0,0,0,En,0,C,[Bq],0,3,0,0,["o",Lk(IG)],CE,0,P,[],0,3,0,0,0,GS,0,BY,[],0,3,0,0,0,G7,0,C,[],0,0,0,0,0,Gl,0,C,[],0,3,0,0,0,Eu,0,C,[Bq],0,3,0,0,["o",Lk(IY)],Ev,0,C,[Bq],0,3,0,0,["o",Lk(H_)],E$,0,C,[],0,3,0,0,0,B$,0,P,[],0,3,0,0,0,EA,0,C,[],0,3,0,0,0,FA,0,B$,[],0,3,0,0,0,EF,0,P,[],0,3,0,0,0,D6,0,P,[],0,3,0,0,0]);
function $rt_array(cls,data){this.kh=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
"vTex","UTF-8","BYTE","FLOAT","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","BIG_ENDIAN","LITTLE_ENDIAN","The last char in dst ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec2 uParameters;\nin vec2 vPos, vTex;\nout vec2 screenPos;\nout vec2 lrScreen;\n\nfloat translateScaleX(float x) { return x * uSizePos.x + uSizePos.z; }\nfloat translateScaleY(float y) { return y * uSizePos.y + uSizePos.w; }\n\nfloat glToPixelX(float x) { return (x + 1.0) * 0.5 * uResolution"
+".x; }\nfloat glToPixelY(float y) { return (1.0 - y) * 0.5 * uResolution.y; }\nfloat pixelToGlX(float x) { return x * 2.0 / uResolution.x - 1.0; }\nfloat pixelToGlY(float y) { return 1.0 - y * 2.0 / uResolution.y; }\n\nvec2 glToPixel(vec2 gl) { return vec2(glToPixelX(gl.x), glToPixelY(gl.y)); }\nvec2 pixelToGl(vec2 px) { return vec2(pixelToGlX(px.x), pixelToGlY(px.y)); }\n\nvoid main() {\n  float lX = mix(vPos.x, vTex.x, vTex.y);\n  float rX = mix(vTex.x, vPos.x, vTex.y);\n\n  vec2 pos = vec2(translateScaleX(vPos.x), tr"
+"anslateScaleY(vPos.y));\n  float lPx = glToPixelX(translateScaleX(lX));\n  float rPx = glToPixelX(translateScaleX(rX));\n\n  float screenX = glToPixelX(pos.x);\n  float screenY = glToPixelY(pos.y);\n\n  // extend left/right edge to left/right pixel bound\n  screenX = mix(floor(screenX), ceil(screenX), vTex.y);\n  // convert back to gl space\n  pos.x = pixelToGlX(screenX);\n\n  screenPos = vec2(screenX, screenY);\n  lrScreen = vec2(lPx, rPx);\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nin vec2 screenPos;\nin vec2 lrScreen;\nvoid main() {\n  float lPx = max(lrScreen.x, screenPos.x - 0.5);\n  float rPx = min(lrScreen.y, screenPos.x + 0.5);\n  float inside = rPx - lPx;\n  outColor = vec4(uColor.xyz * inside, 1.0);\n}",
"Swimlane demo "," events"]);
Bx.prototype.toString=function(){return $rt_ustr(this);};
Bx.prototype.valueOf=Bx.prototype.toString;C.prototype.toString=function(){return $rt_ustr(JB(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(K9);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=He.prototype;c.get=c.h2;Object.defineProperty(c,"length",{get:c.hg});c=FG.prototype;c.onAnimationFrame=c.gO;c=FD.prototype;c.handleEvent=c.e;c=FF.prototype;c.f=c.iq;c=Hl.prototype;c.removeEventListener=c.f4;c.dispatchEvent=c.eT;c.addEventListener=c.fg;c=Hv.prototype;c.removeEventListener=c.f4;c.dispatchEvent=c.eT;c.addEventListener=c.fg;c=D$.prototype;c.handleEvent=c.e;c=Ea.prototype;c.handleEvent=c.e;c=Ed.prototype;c.handleEvent=c.e;c=Ee.prototype;c.handleEvent=c.e;c=Ef.prototype;c.handleEvent
=c.e;c=Eg.prototype;c.handleEvent=c.e;c=Eh.prototype;c.handleEvent=c.e;c=Ei.prototype;c.handleEvent=c.e;c=Ej.prototype;c.handleEvent=c.e;c=Ek.prototype;c.handleEvent=c.e;c=El.prototype;c.handleEvent=c.e;c=Em.prototype;c.handleEvent=c.e;c=FL.prototype;c.handleEvent=c.e;c=FM.prototype;c.handleEvent=c.e;c=FN.prototype;c.handleEvent=c.e;c=FO.prototype;c.handleEvent=c.e;c=FI.prototype;c.handleEvent=c.e;c=FJ.prototype;c.handleEvent=c.e;c=GD.prototype;c.createEntityReference=c.gx;c.getElementById=c.hI;c.createTextNode
=c.he;c.hasChildNodes=c.it;c.querySelectorAll=c.jp;c.removeChild=c.gA;c.cloneNode=c.g8;c.createComment=c.iV;c.insertBefore=c.hj;c.getElementsByTagNameNS=c.hc;c.hasAttributes=c.gI;c.normalize=c.i8;c.hasChildNodesJS=c.iQ;c.getElementsByTagName=c.h0;c.appendChild=c.hD;c.createAttributeNS=c.h_;c.dispatchEvent=c.is;c.replaceChild=c.h5;c.createElementNS=c.hK;c.createCDATASection=c.gP;c.querySelector=c.gG;c.createElement=c.iU;c.isSupported=c.gR;c.importNode=c.hH;c.removeEventListener=c.hw;c.createAttribute=c.iu;c.createDocumentFragment
=c.f9;c.createProcessingInstruction=c.gn;c.addEventListener=c.iT;Object.defineProperty(c,"nodeName",{get:c.hB});Object.defineProperty(c,"documentElement",{get:c.f$});Object.defineProperty(c,"childNodes",{get:c.gg});Object.defineProperty(c,"prefix",{get:c.hU,set:c.jj});Object.defineProperty(c,"implementation",{get:c.ho});Object.defineProperty(c,"textContent",{get:c.i3,set:c.hb});Object.defineProperty(c,"parentNode",{get:c.hF});Object.defineProperty(c,"nextSibling",{get:c.jd});Object.defineProperty(c,"nodeType",
{get:c.jk});Object.defineProperty(c,"doctype",{get:c.i7});Object.defineProperty(c,"localName",{get:c.hX});Object.defineProperty(c,"nodeValue",{get:c.iB,set:c.iK});Object.defineProperty(c,"firstChild",{get:c.h$});Object.defineProperty(c,"lastChild",{get:c.i6});Object.defineProperty(c,"previousSibling",{get:c.hl});Object.defineProperty(c,"namespaceURI",{get:c.iX});Object.defineProperty(c,"attributes",{get:c.h1});Object.defineProperty(c,"ownerDocument",{get:c.jc});c=Gv.prototype;c.handleEvent=c.e;c=DS.prototype;c.f
=c.dk;c=Fq.prototype;c.f=c.dk;c=Fr.prototype;c.f=c.dk;c=Ep.prototype;c.accept=c.iL;})();
})(typeof self!=='undefined'?self:typeof global!=='undefined'?global:this,typeof self!=='undefined'?self:typeof global!=='undefined'?global:this);